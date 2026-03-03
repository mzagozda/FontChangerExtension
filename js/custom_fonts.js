!(function () {
    function a() {
      var a = h("#file"),
        i = h("#file-drop-zone");
      a.addEventListener("change", function () {
        j(this.files && this.files[0] ? this.files[0] : null);
      }),
        ["dragenter", "dragover"].forEach(function (a) {
          i.addEventListener(a, function (a) {
            a.preventDefault(), a.stopPropagation(), i.classList.add("dragover");
          });
        }),
        ["dragleave", "dragend"].forEach(function (a) {
          i.addEventListener(a, function (a) {
            a.preventDefault(), a.stopPropagation(), i.classList.remove("dragover");
          });
        }),
        i.addEventListener("drop", function (b) {
          b.preventDefault(), b.stopPropagation(), this.classList.remove("dragover");
          var c = b.dataTransfer && b.dataTransfer.files ? b.dataTransfer.files[0] : null;
          if (!c) return;
          try {
            var d = new DataTransfer();
            d.items.add(c), (a.files = d.files);
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
              : void alert("Please select a file.")
            ;
        }),
        h("#delete-font").addEventListener("click", function () {
          var a = Array.prototype.slice.call(
            document.querySelectorAll("#saved-fonts option")
          );
          a &&
            (a.forEach(function (a) {
              if (a.selected) {
                var b = a.textContent;
                delete e[b], a.parentNode.removeChild(a);
              }
            }),
            chrome.storage.local.set({ custom_fonts: e }));
        });
    }
    function b(a, b, f) {
      var g = new FileReader();
      (g.onloadend = function () {
        var g = this.result,
          h = "font/truetype";
        ".woff" === f ? (h = "font/woff") : ".otf" === f && (h = "font/opentype"),
          (e[b] = "data:" + h + ";base64," + g.replace(/data:.*?;base64,/, "")),
          chrome.storage.local.set({ custom_fonts: e }, function () {
            chrome.runtime.lastError
              ? alert("Unable to save font. Please try again.")
              : (c(), d());
          });
      }),
        g.readAsDataURL(a, "UTF-8");
    }
    function c() {
      var a = document.createDocumentFragment();
      Object.keys(e).forEach(function (b) {
        var c = document.createElement("option");
        (c.textContent = b), (c.value = e[b]), a.appendChild(c);
      });
      var b = h("#saved-fonts");
      (b.innerHTML = ""), b.appendChild(a);
    }
    function d() {
      (h("#font-name").value = ""),
        (h("#file").value = ""),
        (h("#file-name").textContent = "No file selected"),
        h("#file-drop-zone").classList.remove("has-file"),
        (f = null);
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
    var e = {},
      f = null,
      g = null,
      h = document.querySelector.bind(document);
    chrome.storage.local.get("custom_fonts").then(function (a) {
      a.custom_fonts && ((e = a.custom_fonts), c());
    }),
      document.addEventListener(
        "DOMContentLoaded",
        function () {
          document.removeEventListener("DOMContentLoaded", arguments.callee, !1),
            a();
        },
        !1
      );
  })();