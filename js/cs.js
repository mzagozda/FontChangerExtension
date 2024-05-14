var currentStyle = {
    font_weight: null,
    font_style: null,
    font_family: { name: null, type: !1 },
    font_size: null,
  };
  
  chrome.storage.local.get("styles", function (a) {
    if (
      a &&
      a.styles &&
      a.styles.domain_styles &&
      a.styles.domain_styles[document.location.host]
    ) {
      if (a.styles.domain_styles[document.location.host].type === "global") {
        if (a.styles.global_style) {
          currentStyle = a.styles.global_style;
          updateStyle(currentStyle);
        }
      } else if (a.styles.domain_styles[document.location.host].type === "custom") {
        currentStyle = a.styles.domain_styles[document.location.host];
        updateStyle(currentStyle);
      }
    } else if (a && a.styles && a.styles.global_style) {
      currentStyle = a.styles.global_style;
      updateStyle(currentStyle);
    }
  });
  
  var style = document.createElement("style");
  style.type = "text/css";
  var wf = document.createElement("link");
  
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.msg === "style") {
      if (!message.value) return;
      currentStyle = message.value;
      updateStyle(message.value);
      sendResponse();
    }
  });
  
  var updateStyle = function (a) {
    var b = "* {";
    for (var c in a) {
      if (c === "font_style" && a[c]) {
        b += "font-style:" + a[c] + " !important;";
      } else if (c === "font_weight" && a[c]) {
        b += "font-weight:" + a[c] + " !important;";
      } else if (c === "font_family" && a[c] && a[c].name && a[c].type) {
        if (a[c].type === "google") {
          wf.href =
            (document.location.protocol === "https:" ? "https" : "http") +
            "://fonts.googleapis.com/css?family=" +
            a[c].name.replace(/\s/g, "+");
          wf.type = "text/css";
          wf.rel = "stylesheet";
          document.head
            ? document.head.appendChild(wf)
            : document.documentElement.appendChild(wf);
        } else if (a[c].type === "standard") {
          document.head
            ? document.head.appendChild(wf)
            : document.documentElement.appendChild(wf);
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
    style.innerText = b;
    document.head
      ? document.head.appendChild(style)
      : document.documentElement.appendChild(style);
  };
  