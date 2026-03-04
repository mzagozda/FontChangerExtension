!(function () {
  var STANDARD_FONTS = [
    "Arial",
    "Arial Black",
    "Verdana",
    "Geneva",
    "Helvetica",
    "Impact",
    "Helvetica Neue",
    "Sans-serif",
    "Georgia",
    "Lucida Console",
    "Times New Roman",
    "Times",
    "Serif",
    "Courier New",
    "Comic Sans MS",
    "Courier",
    "Monospace",
    "Lucida Sans Unicode",
    "Tahoma",
    "Trebuchet MS",
    "Palatino Linotype",
  ];

  var PREVIEW_VISIBLE_DELAY = 1000;
  var MAX_PENDING_PREVIEW_TIMERS = 40;
  var PREVIEW_BATCH_SIZE = 12;

  var customFonts = {};
  var profiles = {};
  var styles = {};
  var selectedFile = null;

  var googleFontsCache = null;
  var googleFontsLoading = null;

  var previewLoadedFamilies = {};
  var previewQueue = [];
  var previewQueueTimer = null;
  var previewPendingTimers = {};
  var previewPendingSince = {};
  var previewKnownGoogleFamilies = {};
  var previewScrollTick = null;

  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
  }

  function normalizeName(name) {
    return (name || "").trim().toLowerCase().replace(/\s+/g, " ");
  }

  function getFileExt(fileName) {
    var match = fileName && fileName.match(/\.[a-zA-Z0-9]+$/);
    var ext = match ? match[0].toLowerCase() : "";
    return ext === ".ttf" || ext === ".otf" || ext === ".woff" ? ext : null;
  }

  function normalizeDomain(domain) {
    if (!domain) return "";
    var value = domain.trim().toLowerCase();
    if (!value) return "";
    value = value.replace(/^https?:\/\//, "");
    value = value.replace(/\/.*$/, "");
    return value.replace(/^www\./, "");
  }

  function parseGoogleFontsItems(payload) {
    if (payload && Array.isArray(payload.items)) {
      return payload.items
        .map(function (item) {
          return item && item.family
            ? { name: item.family, type: "google" }
            : null;
        })
        .filter(Boolean);
    }
    return [];
  }

  function parseGoogleMetadata(rawText) {
    if (!rawText) return [];
    var text = rawText;
    if (typeof text === "string") {
      text = text.replace(/^\)\]\}'\n?/, "");
      try {
        text = JSON.parse(text);
      } catch (e) {
        return [];
      }
    }
    var list = text && Array.isArray(text.familyMetadataList)
      ? text.familyMetadataList
      : [];
    return list
      .map(function (item) {
        return item && item.family
          ? { name: item.family, type: "google" }
          : null;
      })
      .filter(Boolean);
  }

  function getBundledGoogleFontsFallback() {
    return parseGoogleFontsItems(window.googlefonts || null);
  }

  function loadGoogleFonts(callback) {
    if (Array.isArray(googleFontsCache)) {
      callback(googleFontsCache);
      return;
    }

    if (googleFontsLoading) {
      googleFontsLoading.push(callback);
      return;
    }

    googleFontsLoading = [callback];

    var fallback = getBundledGoogleFontsFallback();

    function resolve(fonts) {
      googleFontsCache = fonts && fonts.length ? fonts : fallback;
      var waiters = googleFontsLoading.slice();
      googleFontsLoading = null;
      waiters.forEach(function (fn) {
        fn(googleFontsCache);
      });
    }

    function loadFromMetadata() {
      fetch("https://fonts.google.com/metadata/fonts")
        .then(function (response) {
          if (!response.ok) throw new Error("metadata failed");
          return response.text();
        })
        .then(function (text) {
          resolve(parseGoogleMetadata(text));
        })
        .catch(function () {
          resolve(fallback);
        });
    }

    chrome.storage.local.get("google_fonts_api_key", function (data) {
      var apiKey = data && data.google_fonts_api_key;
      if (!apiKey) {
        loadFromMetadata();
        return;
      }
      fetch(
        "https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=" +
          encodeURIComponent(apiKey),
      )
        .then(function (response) {
          if (!response.ok) throw new Error("api failed");
          return response.json();
        })
        .then(function (json) {
          var parsed = parseGoogleFontsItems(json);
          if (parsed.length) {
            resolve(parsed);
            return;
          }
          loadFromMetadata();
        })
        .catch(function () {
          loadFromMetadata();
        });
    });
  }

  function flushPreviewQueue() {
    var batch = previewQueue.splice(0, PREVIEW_BATCH_SIZE);
    if (!batch.length) {
      previewQueueTimer = null;
      return;
    }

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href =
      "https://fonts.googleapis.com/css?family=" +
      batch
        .map(function (name) {
          return name.replace(/\s/g, "+");
        })
        .join("|") +
      "&display=swap";

    if (document.head) {
      document.head.appendChild(link);
    } else {
      document.documentElement.appendChild(link);
    }

    if (previewQueue.length) {
      previewQueueTimer = setTimeout(flushPreviewQueue, 80);
    } else {
      previewQueueTimer = null;
    }
  }

  function enqueuePreviewFamily(family) {
    if (!family || previewLoadedFamilies[family]) return;
    previewLoadedFamilies[family] = true;
    previewQueue.push(family);
    if (!previewQueueTimer) {
      previewQueueTimer = setTimeout(flushPreviewQueue, 80);
    }
  }

  function trimPendingPreviewTimers() {
    var keys = Object.keys(previewPendingTimers);
    if (keys.length <= MAX_PENDING_PREVIEW_TIMERS) return;

    keys.sort(function (a, b) {
      return (previewPendingSince[a] || 0) - (previewPendingSince[b] || 0);
    });

    var extra = keys.length - MAX_PENDING_PREVIEW_TIMERS;
    for (var i = 0; i < extra; i++) {
      var key = keys[i];
      clearTimeout(previewPendingTimers[key]);
      delete previewPendingTimers[key];
      delete previewPendingSince[key];
    }
  }

  function getActiveResultsContainer() {
    return (
      document.querySelector(".select2-drop-active .select2-results") ||
      document.querySelector(".select2-drop .select2-results")
    );
  }

  function getVisibleGoogleFamilies() {
    var container = getActiveResultsContainer();
    if (!container) return [];

    var containerRect = container.getBoundingClientRect();
    var rows = container.querySelectorAll("li");
    var seen = {};
    var visible = [];

    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var rowRect = row.getBoundingClientRect();
      if (rowRect.bottom <= containerRect.top || rowRect.top >= containerRect.bottom) {
        continue;
      }
      var text = (row.textContent || "").trim();
      if (!text) continue;
      var key = normalizeName(text);
      if (!previewKnownGoogleFamilies[key] || seen[key]) {
        continue;
      }
      seen[key] = true;
      visible.push(text);
    }

    return visible;
  }

  function schedulePreviewFamily(family) {
    if (!family || previewLoadedFamilies[family] || previewPendingTimers[family]) {
      return;
    }

    previewPendingSince[family] = Date.now();
    previewPendingTimers[family] = setTimeout(function () {
      delete previewPendingTimers[family];
      var visible = getVisibleGoogleFamilies();
      if (visible.indexOf(family) !== -1) {
        enqueuePreviewFamily(family);
      }
      delete previewPendingSince[family];
    }, PREVIEW_VISIBLE_DELAY);

    trimPendingPreviewTimers();
  }

  function scheduleVisiblePreviewFamilies() {
    var visible = getVisibleGoogleFamilies();
    for (var i = 0; i < visible.length; i++) {
      schedulePreviewFamily(visible[i]);
    }
  }

  function bindPreviewWatchers(selectEl) {
    var container = getActiveResultsContainer();
    if (!container || !window.jQuery) return;

    window
      .jQuery(container)
      .off("scroll.fontPreviewLazy")
      .on("scroll.fontPreviewLazy", function () {
        if (previewScrollTick) clearTimeout(previewScrollTick);
        previewScrollTick = setTimeout(function () {
          scheduleVisiblePreviewFamilies();
        }, 120);
      });

    var searchInput = document.querySelector(
      ".select2-drop-active .select2-input, .select2-drop .select2-input",
    );
    if (searchInput) {
      window
        .jQuery(searchInput)
        .off("input.fontPreviewLazy keyup.fontPreviewLazy")
        .on("input.fontPreviewLazy keyup.fontPreviewLazy", function () {
          if (previewScrollTick) clearTimeout(previewScrollTick);
          previewScrollTick = setTimeout(function () {
            scheduleVisiblePreviewFamilies();
          }, 120);
        });
    }

    var $select = window.jQuery(selectEl);
    $select
      .off("select2-open.fontPreviewLazy")
      .on("select2-open.fontPreviewLazy", function () {
        scheduleVisiblePreviewFamilies();
        bindPreviewWatchers(selectEl);
        preloadFirstGoogleOptions(selectEl, 20);
        setTimeout(scheduleVisiblePreviewFamilies, 150);
        setTimeout(scheduleVisiblePreviewFamilies, 450);
        setTimeout(scheduleVisiblePreviewFamilies, 900);
      });
  }

  function preloadFirstGoogleOptions(selectEl, limit) {
    if (!selectEl || !selectEl.options) return;
    var loaded = 0;
    for (var i = 0; i < selectEl.options.length; i++) {
      var option = selectEl.options[i];
      if (!option) continue;
      if (option.getAttribute("data-type") !== "google") continue;
      var name = (option.textContent || option.value || "").trim();
      if (!name) continue;
      schedulePreviewFamily(name);
      loaded++;
      if (loaded >= limit) break;
    }
  }

  function buildPreviewMarkup(item) {
    if (!item) return "";
    var text = item.text || "";
    var $element = item.element ? window.jQuery(item.element) : window.jQuery();
    var type = $element.length ? $element.data("type") : null;
    var escaped = text.replace(/'/g, "\\'");
    var key = encodeURIComponent(text);

    if (type === "google") {
      schedulePreviewFamily(text);
    }

    return (
      "<span data-font-key=\"" +
      key +
      "\" style=\"font-family:'" +
      escaped +
      "',sans-serif;\">" +
      text +
      "</span>"
    );
  }

  function renderFontFamilySelect() {
    var selectors = ["#font_family", "#global-font-family"];
    var selects = selectors
      .map(function (selector) {
        return qs(selector);
      })
      .filter(Boolean);
    if (!selects.length) return;

    var selectedMap = {};
    selects.forEach(function (select) {
      selectedMap[select.id] =
        select.value || select.getAttribute("data-selected-family") || "";
    });

    loadGoogleFonts(function (googleFamilies) {
      previewKnownGoogleFamilies = {};
      googleFamilies.forEach(function (item) {
        if (item && item.name) {
          previewKnownGoogleFamilies[normalizeName(item.name)] = true;
        }
      });

      var items = [];
      STANDARD_FONTS.forEach(function (name) {
        items.push({ name: name, type: "standard" });
      });
      googleFamilies.forEach(function (item) {
        if (item && item.name) items.push(item);
      });
      Object.keys(customFonts).forEach(function (name) {
        items.push({ name: name, type: "custom" });
      });

      items.sort(function (a, b) {
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      });

      selects.forEach(function (select) {
        var seen = {};
        var fragment = document.createDocumentFragment();

        items.forEach(function (item) {
          if (!item || !item.name) return;
          if (seen[item.name]) return;
          seen[item.name] = true;
          var option = document.createElement("option");
          option.value = item.name;
          option.textContent = item.name;
          option.setAttribute("data-type", item.type);
          fragment.appendChild(option);
        });

        select.innerHTML = "";
        select.appendChild(fragment);

        var selected = selectedMap[select.id] || "";
        if (selected) {
          Array.prototype.some.call(select.options, function (opt) {
            if (opt.value === selected) {
              select.value = selected;
              return true;
            }
            return false;
          });
        }

        if (window.jQuery && jQuery.fn && jQuery.fn.select2) {
          var $select = jQuery(select);
          if ($select.data("select2")) {
            $select.select2("destroy");
          }
          $select.select2({
            placeholder: "Select a Font",
            escapeMarkup: function (markup) {
              return markup;
            },
            formatResult: buildPreviewMarkup,
            formatSelection: buildPreviewMarkup,
          });
          $select.select2("enable", true);
          $select.off("change.profileType");
          bindPreviewWatchers(select);
        }
      });
    });
  }

  function renderGlobalSettings() {
    var global = (styles && styles.global_style) || {};
    var familySelect = qs("#global-font-family");
    var weightSelect = qs("#global-font-weight");
    var styleSelect = qs("#global-font-style");
    var sizeInput = qs("#global-font-size");

    if (familySelect) {
      familySelect.setAttribute(
        "data-selected-family",
        global.font_family && global.font_family.name ? global.font_family.name : "",
      );
    }
    if (weightSelect) {
      weightSelect.value = global.font_weight || "normal";
    }
    if (styleSelect) {
      styleSelect.value = global.font_style || "normal";
    }
    if (sizeInput) {
      sizeInput.value = global.font_size ? String(global.font_size) : "";
    }
  }

  function saveGlobalSettings() {
    var familySelect = qs("#global-font-family");
    var weightSelect = qs("#global-font-weight");
    var styleSelect = qs("#global-font-style");
    var sizeInput = qs("#global-font-size");

    var familyName = familySelect ? familySelect.value : "";
    var selectedOption = familySelect ? familySelect.options[familySelect.selectedIndex] : null;
    var familyType = selectedOption
      ? selectedOption.getAttribute("data-type") || "standard"
      : "standard";
    var weight = weightSelect ? weightSelect.value : "normal";
    var style = styleSelect ? styleSelect.value : "normal";
    var sizeRaw = sizeInput ? sizeInput.value.trim() : "";
    var parsedSize = null;

    if (!familyName) {
      console.warn("Please select a global font family.");
      return;
    }

    if (sizeRaw) {
      parsedSize = parseFloat(sizeRaw);
      if (isNaN(parsedSize)) {
        console.warn("Global font size must be a number.");
        return;
      }
    }

    var globalStyle = {
      font_family: {
        name: familyName,
        type: familyType,
      },
      font_weight: weight || null,
      font_style: style || null,
      font_size: parsedSize,
    };

    if (familyType === "custom") {
      if (!customFonts[familyName]) {
        console.warn("Selected custom font was not found.");
        return;
      }
      globalStyle.font_family.url = customFonts[familyName];
    }

    chrome.storage.local.get("styles", function (data) {
      var nextStyles = (data && data.styles) || {};
      nextStyles.domain_styles = nextStyles.domain_styles || {};
      nextStyles.global_style = globalStyle;
      styles = nextStyles;
      chrome.storage.local.set({ styles: nextStyles }, function () {
        if (chrome.runtime.lastError) {
          console.error("Unable to save global settings. Please try again.");
          return;
        }
        refreshTabsStyles();
      });
    });
  }

  function initProfileStyleWeightSelects() {
    if (!(window.jQuery && jQuery.fn && jQuery.fn.select2)) {
      return;
    }

    function buildWeightMarkup(item) {
      if (!item) return "";
      var text = item.text || "";
      var weight = ((item.id || "") + "").toLowerCase();
      if (!weight) {
        weight = text.toLowerCase();
      }
      if (weight === "default") {
        weight = "normal";
      }
      return (
        '<span style="font-family:Arial,sans-serif;font-weight:' +
        weight +
        ';">' +
        text +
        "</span>"
      );
    }

    function buildStyleMarkup(item) {
      if (!item) return "";
      var text = item.text || "";
      var style = ((item.id || "") + "").toLowerCase();
      if (!style) {
        style = text.toLowerCase();
      }
      if (style === "default") {
        style = "normal";
      }
      return (
        '<span style="font-family:Arial,sans-serif;font-style:' +
        style +
        ';">' +
        text +
        "</span>"
      );
    }

    [
      "#profile-font-weight",
      "#profile-font-style",
      "#global-font-weight",
      "#global-font-style",
    ].forEach(function (selector) {
      var el = qs(selector);
      if (!el) return;

      var $el = jQuery(el);
      if ($el.data("select2")) {
        $el.select2("destroy");
      }

      $el.select2({
        minimumResultsForSearch: -1,
        escapeMarkup: function (markup) {
          return markup;
        },
        formatResult:
          selector === "#profile-font-weight" || selector === "#global-font-weight"
            ? buildWeightMarkup
            : buildStyleMarkup,
        formatSelection:
          selector === "#profile-font-weight" || selector === "#global-font-weight"
            ? buildWeightMarkup
            : buildStyleMarkup,
      });
      $el.select2("enable", true);
    });
  }

  function renderSavedFonts() {
    var select = qs("#saved-fonts");
    if (!select) return;

    var fragment = document.createDocumentFragment();
    Object.keys(customFonts).forEach(function (name) {
      var option = document.createElement("option");
      option.textContent = name;
      option.value = customFonts[name];
      fragment.appendChild(option);
    });

    select.innerHTML = "";
    select.appendChild(fragment);
    renderFontFamilySelect();
  }

  function renderProfiles() {
    var select = qs("#saved-profiles");
    if (!select) return;

    var fragment = document.createDocumentFragment();
    Object.keys(profiles)
      .sort()
      .forEach(function (domain) {
        var profile = profiles[domain];
        var style = profile && profile.style ? profile.style : {};
        var family = style.font_family && style.font_family.name ? style.font_family.name : "-";
        var weight = style.font_weight ? ", w:" + style.font_weight : "";
        var fontStyle = style.font_style ? ", s:" + style.font_style : "";
        var size = style.font_size ? ", size:" + style.font_size + "px" : "";

        var option = document.createElement("option");
        option.value = domain;
        option.textContent = domain + " -> " + family + weight + fontStyle + size;
        fragment.appendChild(option);
      });

    select.innerHTML = "";
    select.appendChild(fragment);
  }

  function resetFileForm() {
    var nameInput = qs("#font-name");
    var fileInput = qs("#file");
    var fileName = qs("#file-name");
    var dropZone = qs("#file-drop-zone");

    if (nameInput) nameInput.value = "";
    if (fileInput) fileInput.value = "";
    if (fileName) fileName.textContent = "No file selected";
    if (dropZone) dropZone.classList.remove("has-file");
    selectedFile = null;
  }

  function updateSelectedFile(file) {
    if (!file) return;
    var ext = getFileExt(file.name);
    var nameInput = qs("#font-name");
    var fileName = qs("#file-name");
    var dropZone = qs("#file-drop-zone");
    var fileInput = qs("#file");

    if (!ext) {
      selectedFile = null;
      if (fileInput) fileInput.value = "";
      if (fileName) fileName.textContent = "No file selected";
      if (dropZone) dropZone.classList.remove("has-file");
      console.warn("Font must be of type .ttf, .otf or .woff");
      return;
    }

    selectedFile = file;
    if (nameInput) {
      var dot = file.name.lastIndexOf(".");
      nameInput.value = dot > 0 ? file.name.substring(0, dot) : file.name;
    }
    if (fileName) fileName.textContent = file.name;
    if (dropZone) dropZone.classList.add("has-file");
  }

  function saveSelectedFont() {
    var nameInput = qs("#font-name");
    var fileInput = qs("#file");
    var fontName = nameInput ? nameInput.value.trim() : "";
    var file = selectedFile || (fileInput && fileInput.files ? fileInput.files[0] : null);

    if (!fontName) {
      console.warn("Please type a name.");
      return;
    }
    if (customFonts[fontName]) {
      console.warn('File name "' + fontName + '" is already in use.');
      return;
    }
    if (!file) {
      console.warn("Please select a file.");
      return;
    }

    var ext = getFileExt(file.name);
    if (!ext) {
      console.warn("Please select a file.");
      return;
    }

    var reader = new FileReader();
    reader.onloadend = function () {
      var result = this.result;
      var mime = "font/truetype";
      if (ext === ".woff") mime = "font/woff";
      if (ext === ".otf") mime = "font/opentype";

      customFonts[fontName] = "data:" + mime + ";base64," + result.replace(/data:.*?;base64,/, "");
      chrome.storage.local.set({ custom_fonts: customFonts }, function () {
        if (chrome.runtime.lastError) {
          console.error("Unable to save font. Please try again.");
          return;
        }
        renderSavedFonts();
        resetFileForm();
      });
    };
    reader.readAsDataURL(file, "UTF-8");
  }

  function deleteSelectedFonts() {
    var options = qsa("#saved-fonts option");
    options.forEach(function (option) {
      if (option.selected) {
        delete customFonts[option.textContent];
        if (option.parentNode) option.parentNode.removeChild(option);
      }
    });
    chrome.storage.local.set({ custom_fonts: customFonts });
    renderFontFamilySelect();
  }

  function clearProfileInputs() {
    var domain = qs("#profile-domain");
    var weight = qs("#profile-font-weight");
    var style = qs("#profile-font-style");
    var size = qs("#profile-font-size");
    if (domain) domain.value = "";
    if (weight) weight.value = "";
    if (style) style.value = "";
    if (size) size.value = "";
  }

  function refreshTabsStyles() {
    if (!(chrome && chrome.tabs && chrome.tabs.query)) {
      return;
    }

    chrome.tabs.query({}, function (tabs) {
      if (!tabs || !tabs.length) return;

      tabs.forEach(function (tab) {
        if (!(tab && tab.id && chrome.tabs && chrome.tabs.sendMessage)) {
          return;
        }

        chrome.tabs.sendMessage(
          tab.id,
          { msg: "style", value: null },
          function () {
            if (!chrome.runtime.lastError) return;

            if (
              chrome.scripting &&
              chrome.scripting.executeScript &&
              tab.url &&
              /^https?:\/\//.test(tab.url)
            ) {
              chrome.scripting.executeScript(
                {
                  target: { tabId: tab.id, allFrames: true },
                  files: ["js/cs.js"],
                },
                function () {
                  if (!(chrome.tabs && chrome.tabs.sendMessage)) return;
                  chrome.tabs.sendMessage(
                    tab.id,
                    { msg: "style", value: null },
                    function () {
                      if (chrome.runtime.lastError) {
                        return;
                      }
                    },
                  );
                },
              );
            }
          },
        );
      });
    });
  }

  function saveProfile() {
    var domainInput = qs("#profile-domain");
    var familySelect = qs("#font_family");
    var weightSelect = qs("#profile-font-weight");
    var styleSelect = qs("#profile-font-style");
    var sizeInput = qs("#profile-font-size");

    var domain = normalizeDomain(domainInput ? domainInput.value : "");
    var familyName = familySelect ? familySelect.value : "";
    var selectedOption = familySelect ? familySelect.options[familySelect.selectedIndex] : null;
    var familyType = selectedOption
      ? selectedOption.getAttribute("data-type") || "standard"
      : "standard";
    var weight = weightSelect ? weightSelect.value : "";
    var style = styleSelect ? styleSelect.value : "";
    var sizeRaw = sizeInput ? sizeInput.value.trim() : "";
    var parsedSize = null;

    if (!domain) {
      console.warn("Please enter a valid domain.");
      return;
    }
    if (!familyName) {
      console.warn("Please select a font family.");
      return;
    }
    if (sizeRaw) {
      parsedSize = parseFloat(sizeRaw);
      if (isNaN(parsedSize)) {
        console.warn("Font size must be a number.");
        return;
      }
    }

    var stylePayload = {
      font_family: {
        name: familyName,
        type: familyType,
      },
      font_weight: weight || null,
      font_style: style || null,
      font_size: parsedSize,
    };

    if (familyType === "custom") {
      if (!customFonts[familyName]) {
        console.warn("Selected custom font was not found.");
        return;
      }
      stylePayload.font_family.url = customFonts[familyName];
    }

    profiles[domain] = { domain: domain, style: stylePayload };
    chrome.storage.local.set({ profiles: profiles }, function () {
      if (chrome.runtime.lastError) {
        console.error("Unable to save profile. Please try again.");
        return;
      }
      renderProfiles();
      clearProfileInputs();
      refreshTabsStyles();
    });
  }

  function deleteSelectedProfiles() {
    var options = qsa("#saved-profiles option");
    options.forEach(function (option) {
      if (option.selected) {
        delete profiles[option.value];
      }
    });

    chrome.storage.local.set({ profiles: profiles }, function () {
      renderProfiles();
      refreshTabsStyles();
    });
  }

  function resetGlobalSettings() {
    if (!confirm("Reset global settings only?")) {
      return;
    }

    chrome.storage.local.get("styles", function (data) {
      var nextStyles = (data && data.styles) || {};
      nextStyles.domain_styles = nextStyles.domain_styles || {};
      nextStyles.global_style = {};
      styles = nextStyles;

      chrome.storage.local.set({ styles: nextStyles }, function () {
        if (chrome.runtime.lastError) {
          console.error("Unable to reset global settings.");
          return;
        }
        renderGlobalSettings();
        renderFontFamilySelect();
        refreshTabsStyles();
      });
    });
  }

  function resetFontsSettings() {
    if (!confirm("Reset custom fonts only?")) {
      return;
    }

    chrome.storage.local.set({ custom_fonts: {} }, function () {
      if (chrome.runtime.lastError) {
        console.error("Unable to reset fonts.");
        return;
      }
      customFonts = {};
      renderSavedFonts();
      renderFontFamilySelect();
      resetFileForm();
      refreshTabsStyles();
    });
  }

  function resetProfilesSettings() {
    if (!confirm("Reset profiles only?")) {
      return;
    }

    chrome.storage.local.get("styles", function (data) {
      var nextStyles = (data && data.styles) || {};
      nextStyles.global_style = nextStyles.global_style || {};
      nextStyles.domain_styles = {};
      styles = nextStyles;
      profiles = {};

      chrome.storage.local.set(
        {
          profiles: {},
          styles: nextStyles,
        },
        function () {
          if (chrome.runtime.lastError) {
            console.error("Unable to reset profiles.");
            return;
          }
          renderProfiles();
          clearProfileInputs();
          refreshTabsStyles();
        },
      );
    });
  }

  function resetAllSettings() {
    if (!confirm("Reset all settings, profiles, and custom fonts?")) {
      return;
    }

    chrome.storage.local.remove(["styles", "profiles", "custom_fonts"], function () {
      if (chrome.runtime.lastError) {
        console.error("Unable to reset settings. Please try again.");
        return;
      }

      customFonts = {};
      profiles = {};
      styles = {};
      googleFontsCache = null;

      var familySelect = qs("#font_family");
      if (familySelect) {
        familySelect.setAttribute("data-selected-family", "");
      }
      var globalFamilySelect = qs("#global-font-family");
      if (globalFamilySelect) {
        globalFamilySelect.setAttribute("data-selected-family", "");
      }

      renderGlobalSettings();
      renderSavedFonts();
      renderFontFamilySelect();
      renderProfiles();
      resetFileForm();
      clearProfileInputs();
      refreshTabsStyles();
    });
  }

  function bindEvents() {
    var fileInput = qs("#file");
    var dropZone = qs("#file-drop-zone");
    var saveFontBtn = qs("#save-font");
    var deleteFontBtn = qs("#delete-font");
    var saveProfileBtn = qs("#save-profile");
    var deleteProfileBtn = qs("#delete-profile");
    var saveGlobalBtn = qs("#save-global");
    var resetGlobalBtn = qs("#reset-global");
    var resetFontsBtn = qs("#reset-fonts");
    var resetProfilesBtn = qs("#reset-profiles");
    var resetAllBtn = qs("#reset-all-settings");

    if (fileInput) {
      fileInput.addEventListener("change", function () {
        updateSelectedFile(this.files && this.files[0] ? this.files[0] : null);
      });
    }

    if (dropZone && fileInput) {
      ["dragenter", "dragover"].forEach(function (eventName) {
        dropZone.addEventListener(eventName, function (event) {
          event.preventDefault();
          event.stopPropagation();
          dropZone.classList.add("dragover");
        });
      });

      ["dragleave", "dragend"].forEach(function (eventName) {
        dropZone.addEventListener(eventName, function (event) {
          event.preventDefault();
          event.stopPropagation();
          dropZone.classList.remove("dragover");
        });
      });

      dropZone.addEventListener("drop", function (event) {
        event.preventDefault();
        event.stopPropagation();
        dropZone.classList.remove("dragover");

        var file = event.dataTransfer && event.dataTransfer.files
          ? event.dataTransfer.files[0]
          : null;
        if (!file) return;

        try {
          var dt = new DataTransfer();
          dt.items.add(file);
          fileInput.files = dt.files;
        } catch (e) {}

        updateSelectedFile(file);
      });
    }

    if (saveFontBtn) {
      saveFontBtn.addEventListener("click", saveSelectedFont);
    }

    if (deleteFontBtn) {
      deleteFontBtn.addEventListener("click", deleteSelectedFonts);
    }

    if (saveProfileBtn) {
      saveProfileBtn.addEventListener("click", saveProfile);
    }

    if (deleteProfileBtn) {
      deleteProfileBtn.addEventListener("click", deleteSelectedProfiles);
    }

    if (saveGlobalBtn) {
      saveGlobalBtn.addEventListener("click", saveGlobalSettings);
    }

    if (resetGlobalBtn) {
      resetGlobalBtn.addEventListener("click", resetGlobalSettings);
    }

    if (resetFontsBtn) {
      resetFontsBtn.addEventListener("click", resetFontsSettings);
    }

    if (resetProfilesBtn) {
      resetProfilesBtn.addEventListener("click", resetProfilesSettings);
    }

    if (resetAllBtn) {
      resetAllBtn.addEventListener("click", resetAllSettings);
    }
  }

  chrome.storage.local.get(["custom_fonts", "profiles", "styles"], function (data) {
    customFonts = (data && data.custom_fonts) || {};
    profiles = (data && data.profiles) || {};
    styles = (data && data.styles) || {};
    renderGlobalSettings();
    renderSavedFonts();
    renderFontFamilySelect();
    renderProfiles();
  });

  document.addEventListener("DOMContentLoaded", function () {
    bindEvents();
    initProfileStyleWeightSelects();
  });
})();
