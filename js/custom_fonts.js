!(function () {
  function a() {
    var a = h("#file"),
      i = h("#file-drop-zone");
    (a.addEventListener("change", function () {
      j(this.files && this.files[0] ? this.files[0] : null);
    }),
      ["dragenter", "dragover"].forEach(function (a) {
        i.addEventListener(a, function (a) {
          (a.preventDefault(),
            a.stopPropagation(),
            i.classList.add("dragover"));
        });
      }),
      ["dragleave", "dragend"].forEach(function (a) {
        i.addEventListener(a, function (a) {
          (a.preventDefault(),
            a.stopPropagation(),
            i.classList.remove("dragover"));
        });
      }),
      i.addEventListener("drop", function (b) {
        (b.preventDefault(),
          b.stopPropagation(),
          this.classList.remove("dragover"));
        var c =
          b.dataTransfer && b.dataTransfer.files
            ? b.dataTransfer.files[0]
            : null;
        if (!c) return;
        try {
          var d = new DataTransfer();
          (d.items.add(c), (a.files = d.files));
        } catch (a) {}
        j(c);
      }),
      h("#save-font").addEventListener("click", function () {
        var a = h("#font-name").value.trim(),
          c = f || (h("#file").files && h("#file").files[0]);
        if (!a) return void alert("Please type a name.");
        if (e[a]) return void alert('File name "' + a + '" is already in use.');
        if (!c) return void alert("Please select a file.");
        var d = k(c.name);
        return d
          ? ((g = d), (f = c), void b(f, a, g))
          : void alert("Please select a file.");
      }),
      h("#delete-font").addEventListener("click", function () {
        var a = Array.prototype.slice.call(
          document.querySelectorAll("#saved-fonts option"),
        );
        a &&
          (a.forEach(function (a) {
            if (a.selected) {
              var b = a.textContent;
              (delete e[b], a.parentNode.removeChild(a));
            }
          }),
          chrome.storage.local.set({ custom_fonts: e }));
      }),
      h("#save-profile") &&
        h("#save-profile").addEventListener("click", function () {
          var a = n(h("#profile-domain").value),
            b = h("#font_family"),
            c = b ? b.value : "",
            d = b ? b.options[b.selectedIndex] : null,
            f = d ? d.getAttribute("data-type") || "standard" : "standard",
            g = h("#profile-font-weight")
              ? h("#profile-font-weight").value
              : "",
            i = h("#profile-font-style") ? h("#profile-font-style").value : "",
            j = h("#profile-font-size")
              ? h("#profile-font-size").value.trim()
              : "",
            k = null;
          if (!a) return void alert("Please enter a valid domain.");
          if (!c) return void alert("Please select a font family.");
          if (j) {
            k = parseFloat(j);
            if (isNaN(k)) return void alert("Font size must be a number.");
          }
          var l = {
            font_family: {
              name: c,
              type: f,
            },
            font_weight: g || null,
            font_style: i || null,
            font_size: k,
          };
          if ("custom" === f) {
            if (!e[c]) return void alert("Selected custom font was not found.");
            l.font_family.url = e[c];
          }
          ((p[a] = {
            domain: a,
            style: l,
          }),
            chrome.storage.local.set({ profiles: p }, function () {
              chrome.runtime.lastError
                ? alert("Unable to save profile. Please try again.")
                : (m(), o(), r());
            }));
        }),
      h("#delete-profile") &&
        h("#delete-profile").addEventListener("click", function () {
          var a = Array.prototype.slice.call(
            document.querySelectorAll("#saved-profiles option"),
          );
          if (!a) return;
          (a.forEach(function (a) {
            a.selected && delete p[a.value];
          }),
            chrome.storage.local.set({ profiles: p }, function () {
              m(), r();
            }));
        }));
  }
  function b(a, b, f) {
    var g = new FileReader();
    ((g.onloadend = function () {
      var g = this.result,
        h = "font/truetype";
      (".woff" === f
        ? (h = "font/woff")
        : ".otf" === f && (h = "font/opentype"),
        (e[b] = "data:" + h + ";base64," + g.replace(/data:.*?;base64,/, "")),
        chrome.storage.local.set({ custom_fonts: e }, function () {
          chrome.runtime.lastError
            ? alert("Unable to save font. Please try again.")
            : (c(), d());
        }));
    }),
      g.readAsDataURL(a, "UTF-8"));
  }
  function c() {
    var a = document.createDocumentFragment();
    Object.keys(e).forEach(function (b) {
      var c = document.createElement("option");
      ((c.textContent = b), (c.value = e[b]), a.appendChild(c));
    });
    var b = h("#saved-fonts");
    ((b.innerHTML = ""), b.appendChild(a), l());
  }
  function d() {
    ((h("#font-name").value = ""),
      (h("#file").value = ""),
      (h("#file-name").textContent = "No file selected"),
      h("#file-drop-zone").classList.remove("has-file"),
      (f = null));
  }
  function j(a) {
    if (!a) return;
    var c = k(a.name),
      d = !!c;
    d
      ? ((g = c),
        (f = a),
        (h("#font-name").value = a.name.substring(0, a.name.lastIndexOf("."))),
        (h("#file-name").textContent = a.name),
        h("#file-drop-zone").classList.add("has-file"))
      : ((f = null),
        (h("#file").value = ""),
        (h("#file-name").textContent = "No file selected"),
        h("#file-drop-zone").classList.remove("has-file"),
        alert("Font must be of type .ttf, .otf or .woff"));
  }
  function k(a) {
    var b = a && a.match(/\.[a-zA-Z0-9]+$/),
      c = b ? b[0].toLowerCase() : "";
    return ".ttf" === c || ".otf" === c || ".woff" === c ? c : null;
  }
  function l() {
    var a = h("#font_family") || h("#profile-font-family");
    if (!a) return;
    var b = [
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
      ],
      c = [],
      d = Array.isArray(window.googlefonts && googlefonts.items)
        ? googlefonts.items
        : [];
    (b.forEach(function (a) {
      c.push({
        name: a,
        type: "standard",
      });
    }),
      d.forEach(function (a) {
        a &&
          a.family &&
          c.push({
            name: a.family,
            type: "google",
          });
      }),
      Object.keys(e).forEach(function (a) {
        c.push({
          name: a,
          type: "custom",
        });
      }));
    var f = {},
      g = document.createDocumentFragment(),
      i = a.value || "";
    (c.sort(function (a, b) {
      return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    }),
      c.forEach(function (a) {
        if (f[a.name]) return;
        f[a.name] = !0;
        var b = document.createElement("option");
        ((b.value = a.name),
          (b.textContent = a.name),
          b.setAttribute("data-type", a.type),
          g.appendChild(b));
      }),
      (a.innerHTML = ""),
      a.appendChild(g),
      i &&
        Array.prototype.slice.call(a.options).some(function (b) {
          return b.value === i ? ((a.value = i), !0) : !1;
        }));
    if (window.jQuery && jQuery.fn && jQuery.fn.select2) {
      var j = jQuery(a);
      (j.data("select2") && j.select2("destroy"),
        j.select2({
          placeholder: "Select a Font",
        }),
        j.select2("enable", !0),
        j.off("change.profileType"));
    }
  }
  function m() {
    var a = h("#saved-profiles");
    if (!a) return;
    var b = document.createDocumentFragment();
    Object.keys(p)
      .sort()
      .forEach(function (a) {
        var c = p[a],
          d =
            c && c.style && c.style.font_family
              ? c.style.font_family.name
              : "-",
          e = document.createElement("option");
        ((e.value = a), (e.textContent = a + " → " + d), b.appendChild(e));
      });
    ((a.innerHTML = ""), a.appendChild(b));
  }
  function n(a) {
    if (!a) return "";
    var b = a.trim().toLowerCase();
    if (!b) return "";
    ((b = b.replace(/^https?:\/\//, "")), (b = b.replace(/\/.*$/, "")));
    return b.replace(/^www\./, "");
  }
  function o() {
    h("#profile-domain") && (h("#profile-domain").value = "");
    h("#profile-font-weight") && (h("#profile-font-weight").value = "");
    h("#profile-font-style") && (h("#profile-font-style").value = "");
    h("#profile-font-size") && (h("#profile-font-size").value = "");
  }
  function r() {
    chrome.tabs &&
      chrome.tabs.query({}, function (a) {
        if (!a || !a.length) return;
        a.forEach(function (a) {
          a &&
            a.id &&
            chrome.tabs.sendMessage(
              a.id,
              {
                msg: "style",
                value: null,
              },
              function () {},
            );
        });
      });
  }
  var e = {},
    f = null,
    g = null,
    h = document.querySelector.bind(document),
    p = {};
  (chrome.storage.local.get(["custom_fonts", "profiles"]).then(function (a) {
    ((e = (a && a.custom_fonts) || {}),
      (p = (a && a.profiles) || {}),
      c(),
      l(),
      m());
  }),
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        (document.removeEventListener("DOMContentLoaded", arguments.callee, !1),
          a());
      },
      !1,
    ));
})();
