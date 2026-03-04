var currentStyle = {
  font_weight: null,
  font_style: null,
  font_family: { name: null, type: !1 },
  font_size: null,
};

function u() {
  chrome.storage.local.get(["styles", "profiles"], function (a) {
    var b = t(a);
    b && ((currentStyle = b), updateStyle(currentStyle));
  });
}

u();

var style = document.createElement("style");
style.type = "text/css";
var wf = document.createElement("link");
var lastCssText = "";
var lastFontHref = "";

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.msg === "style") {
    if (message.value) {
      currentStyle = message.value;
      updateStyle(message.value);
      sendResponse();
      return;
    }
    u();
    sendResponse();
    return !0;
  }
});

chrome.storage.onChanged.addListener(function (changes, areaName) {
  if (
    areaName === "local" &&
    (Object.prototype.hasOwnProperty.call(changes, "profiles") ||
      Object.prototype.hasOwnProperty.call(changes, "styles"))
  ) {
    u();
  }
});

function s(a, b) {
  if (!a || !b) return null;
  var c = b.toLowerCase();
  if (a[c]) return a[c];
  for (var d = c.split("."), e = 1; e < d.length - 1; e++) {
    var f = d.slice(e).join(".");
    if (a[f]) return a[f];
  }
  return null;
}

function t(a) {
  var b = s(a && a.profiles, document.location.host);
  if (b && b.style) {
    console.log("[FontChanger] Profile applied for:", document.location.host);
    return b.style;
  }
  if (
    a &&
    a.styles &&
    a.styles.domain_styles &&
    a.styles.domain_styles[document.location.host]
  ) {
    if (a.styles.domain_styles[document.location.host].type === "global") {
      if (a.styles.global_style) return a.styles.global_style;
    } else if (a.styles.domain_styles[document.location.host].type === "custom") {
      return a.styles.domain_styles[document.location.host];
    }
  } else if (a && a.styles && a.styles.global_style) {
    return a.styles.global_style;
  }
  return null;
}

var updateStyle = function (a) {
  var b = "* {";
  for (var c in a) {
    if (c === "font_style" && a[c]) {
      b += "font-style:" + a[c] + " !important;";
    } else if (c === "font_weight" && a[c]) {
      b += "font-weight:" + a[c] + " !important;";
    } else if (c === "font_family" && a[c] && a[c].name && a[c].type) {
      if (a[c].type === "google") {
        var e =
          (document.location.protocol === "https:" ? "https" : "http") +
          "://fonts.googleapis.com/css?family=" +
          a[c].name.replace(/\s/g, "+");
        if (lastFontHref !== e) {
          lastFontHref = e;
          wf.href = e;
          wf.type = "text/css";
          wf.rel = "stylesheet";
          document.head
            ? document.head.appendChild(wf)
            : document.documentElement.appendChild(wf);
        }
      } else if (a[c].type === "custom") {
        var d =
          "@font-face{  font-family: '" +
          a[c].name +
          "';src: url(" +
          a[c].url +
          ");} ";
        b = d + b;
      }
      b += "font-family: '" + a[c].name + "' !important;";
    } else if (c === "font_size" && a[c]) {
      b += "font-size:" + a[c] + "px !important;";
      b += "line-height: normal !important;";
    }
  }
  b += "}";
  if (b === lastCssText) {
    return;
  }
  lastCssText = b;
  style.innerText = b;
  if (!style.isConnected) {
    document.head
      ? document.head.appendChild(style)
      : document.documentElement.appendChild(style);
  }
};
