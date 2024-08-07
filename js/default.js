!(function (a, b) {
  function c(a) {
    var b = (oa[a] = {});
    return (
      $.each(a.split(ba), function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }

  function d(a, c, d) {
    if (d === b && 1 === a.nodeType) {
      var e = "data-" + c.replace(qa, "-$1").toLowerCase();
      if (((d = a.getAttribute(e)), "string" == typeof d)) {
        try {
          d =
            "true" === d
              ? !0
              : "false" === d
              ? !1
              : "null" === d
              ? null
              : +d + "" === d
              ? +d
              : pa.test(d)
              ? $.parseJSON(d)
              : d;
        } catch (f) {}
        $.data(a, c, d);
      } else d = b;
    }
    return d;
  }

  function e(a) {
    var b;
    for (b in a)
      if (("data" !== b || !$.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0;
  }

  function f() {
    return !1;
  }

  function g() {
    return !0;
  }

  function h(a) {
    return !a || !a.parentNode || 11 === a.parentNode.nodeType;
  }

  function i(a, b) {
    do a = a[b];
    while (a && 1 !== a.nodeType);
    return a;
  }

  function j(a, b, c) {
    if (((b = b || 0), $.isFunction(b)))
      return $.grep(a, function (a, d) {
        var e = !!b.call(a, d, a);
        return e === c;
      });
    if (b.nodeType)
      return $.grep(a, function (a, d) {
        return (a === b) === c;
      });
    if ("string" == typeof b) {
      var d = $.grep(a, function (a) {
        return 1 === a.nodeType;
      });
      if (Ka.test(b)) return $.filter(b, d, !c);
      b = $.filter(b, d);
    }
    return $.grep(a, function (a, d) {
      return $.inArray(a, b) >= 0 === c;
    });
  }

  function k(a) {
    var b = Na.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) for (; b.length; ) c.createElement(b.pop());
    return c;
  }

  function l(a, b) {
    return (
      a.getElementsByTagName(b)[0] ||
      a.appendChild(a.ownerDocument.createElement(b))
    );
  }

  function m(a, b) {
    if (1 === b.nodeType && $.hasData(a)) {
      var c,
        d,
        e,
        f = $._data(a),
        g = $._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, (g.events = {});
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) $.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = $.extend({}, g.data));
    }
  }

  function n(a, b) {
    var c;
    1 === b.nodeType &&
      (b.clearAttributes && b.clearAttributes(),
      b.mergeAttributes && b.mergeAttributes(a),
      (c = b.nodeName.toLowerCase()),
      "object" === c
        ? (b.parentNode && (b.outerHTML = a.outerHTML),
          $.support.html5Clone &&
            a.innerHTML &&
            !$.trim(b.innerHTML) &&
            (b.innerHTML = a.innerHTML))
        : "input" === c && Xa.test(a.type)
        ? ((b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value))
        : "option" === c
        ? (b.selected = a.defaultSelected)
        : "input" === c || "textarea" === c
        ? (b.defaultValue = a.defaultValue)
        : "script" === c && b.text !== a.text && (b.text = a.text),
      b.removeAttribute($.expando));
  }

  function o(a) {
    return "undefined" != typeof a.getElementsByTagName
      ? a.getElementsByTagName("*")
      : "undefined" != typeof a.querySelectorAll
      ? a.querySelectorAll("*")
      : [];
  }

  function p(a) {
    Xa.test(a.type) && (a.defaultChecked = a.checked);
  }

  function q(a, b) {
    if (b in a) return b;
    for (
      var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = qb.length;
      e--;

    )
      if (((b = qb[e] + c), b in a)) return b;
    return d;
  }

  function r(a, b) {
    return (
      (a = b || a),
      "none" === $.css(a, "display") || !$.contains(a.ownerDocument, a)
    );
  }

  function s(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; g > f; f++)
      (c = a[f]),
        c.style &&
          ((e[f] = $._data(c, "olddisplay")),
          b
            ? (!e[f] && "none" === c.style.display && (c.style.display = ""),
              "" === c.style.display &&
                r(c) &&
                (e[f] = $._data(c, "olddisplay", w(c.nodeName))))
            : ((d = cb(c, "display")),
              !e[f] && "none" !== d && $._data(c, "olddisplay", d)));
    for (f = 0; g > f; f++)
      (c = a[f]),
        c.style &&
          ((b && "none" !== c.style.display && "" !== c.style.display) ||
            (c.style.display = b ? e[f] || "" : "none"));
    return a;
  }

  function t(a, b, c) {
    var d = jb.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }

  function u(a, b, c, d) {
    for (
      var e = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        f = 0;
      4 > e;
      e += 2
    )
      "margin" === c && (f += $.css(a, c + pb[e], !0)),
        d
          ? ("content" === c &&
              (f -= parseFloat(cb(a, "padding" + pb[e])) || 0),
            "margin" !== c &&
              (f -= parseFloat(cb(a, "border" + pb[e] + "Width")) || 0))
          : ((f += parseFloat(cb(a, "padding" + pb[e])) || 0),
            "padding" !== c &&
              (f += parseFloat(cb(a, "border" + pb[e] + "Width")) || 0));
    return f;
  }

  function v(a, b, c) {
    var d = "width" === b ? a.offsetWidth : a.offsetHeight,
      e = !0,
      f = $.support.boxSizing && "border-box" === $.css(a, "boxSizing");
    if (0 >= d) {
      if (
        ((d = cb(a, b)), (0 > d || null == d) && (d = a.style[b]), kb.test(d))
      )
        return d;
      (e = f && ($.support.boxSizingReliable || d === a.style[b])),
        (d = parseFloat(d) || 0);
    }
    return d + u(a, b, c || (f ? "border" : "content"), e) + "px";
  }

  function w(a) {
    if (mb[a]) return mb[a];
    var b = $("<" + a + ">").appendTo(P.body),
      c = b.css("display");
    return (
      b.remove(),
      ("none" === c || "" === c) &&
        ((db = P.body.appendChild(
          db ||
            $.extend(P.createElement("iframe"), {
              frameBorder: 0,
              width: 0,
              height: 0,
            })
        )),
        (eb && db.createElement) ||
          ((eb = (db.contentWindow || db.contentDocument).document),
          eb.write("<!doctype html><html><body>"),
          eb.close()),
        (b = eb.body.appendChild(eb.createElement(a))),
        (c = cb(b, "display")),
        P.body.removeChild(db)),
      (mb[a] = c),
      c
    );
  }

  function x(a, b, c, d) {
    var e;
    if ($.isArray(b))
      $.each(b, function (b, e) {
        c || tb.test(a)
          ? d(a, e)
          : x(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    else if (c || "object" !== $.type(b)) d(a, b);
    else for (e in b) x(a + "[" + e + "]", b[e], c, d);
  }

  function y(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e,
        f,
        g = b.toLowerCase().split(ba),
        h = 0,
        i = g.length;
      if ($.isFunction(c))
        for (; i > h; h++)
          (d = g[h]),
            (f = /^\+/.test(d)),
            f && (d = d.substr(1) || "*"),
            (e = a[d] = a[d] || []),
            e[f ? "unshift" : "push"](c);
    };
  }

  function z(a, c, d, e, f, g) {
    (f = f || c.dataTypes[0]), (g = g || {}), (g[f] = !0);
    for (
      var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === Jb;
      k > j && (l || !h);
      j++
    )
      (h = i[j](c, d, e)),
        "string" == typeof h &&
          (!l || g[h]
            ? (h = b)
            : (c.dataTypes.unshift(h), (h = z(a, c, d, e, h, g))));
    return (l || !h) && !g["*"] && (h = z(a, c, d, e, "*", g)), h;
  }

  function A(a, c) {
    var d,
      e,
      f = $.ajaxSettings.flatOptions || {};
    for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
    e && $.extend(!0, a, e);
  }

  function B(a, c, d) {
    var e,
      f,
      g,
      h,
      i = a.contents,
      j = a.dataTypes,
      k = a.responseFields;
    for (f in k) f in d && (c[k[f]] = d[f]);
    for (; "*" === j[0]; )
      j.shift(),
        e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
    if (e)
      for (f in i)
        if (i[f] && i[f].test(e)) {
          j.unshift(f);
          break;
        }
    if (j[0] in d) g = j[0];
    else {
      for (f in d) {
        if (!j[0] || a.converters[f + " " + j[0]]) {
          g = f;
          break;
        }
        h || (h = f);
      }
      g = g || h;
    }
    return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0;
  }

  function C(a, b) {
    var c,
      d,
      e,
      f,
      g = a.dataTypes.slice(),
      h = g[0],
      i = {},
      j = 0;
    if ((a.dataFilter && (b = a.dataFilter(b, a.dataType)), g[1]))
      for (c in a.converters) i[c.toLowerCase()] = a.converters[c];
    for (; (e = g[++j]); )
      if ("*" !== e) {
        if ("*" !== h && h !== e) {
          if (((c = i[h + " " + e] || i["* " + e]), !c))
            for (d in i)
              if (
                ((f = d.split(" ")),
                f[1] === e && (c = i[h + " " + f[0]] || i["* " + f[0]]))
              ) {
                c === !0
                  ? (c = i[d])
                  : i[d] !== !0 && ((e = f[0]), g.splice(j--, 0, e));
                break;
              }
          if (c !== !0)
            if (c && a["throws"]) b = c(b);
            else
              try {
                b = c(b);
              } catch (k) {
                return {
                  state: "parsererror",
                  error: c ? k : "No conversion from " + h + " to " + e,
                };
              }
        }
        h = e;
      }
    return {
      state: "success",
      data: b,
    };
  }

  function D() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }

  function E() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }

  function F() {
    return (
      setTimeout(function () {
        Ub = b;
      }, 0),
      (Ub = $.now())
    );
  }

  function G(a, b) {
    $.each(b, function (b, c) {
      for (
        var d = ($b[b] || []).concat($b["*"]), e = 0, f = d.length;
        f > e;
        e++
      )
        if (d[e].call(a, b, c)) return;
    });
  }

  function H(a, b, c) {
    var d,
      e = 0,
      f = Zb.length,
      g = $.Deferred().always(function () {
        delete h.elem;
      }),
      h = function () {
        for (
          var b = Ub || F(),
            c = Math.max(0, i.startTime + i.duration - b),
            d = 1 - (c / i.duration || 0),
            e = 0,
            f = i.tweens.length;
          f > e;
          e++
        )
          i.tweens[e].run(d);
        return (
          g.notifyWith(a, [i, d, c]),
          1 > d && f ? c : (g.resolveWith(a, [i]), !1)
        );
      },
      i = g.promise({
        elem: a,
        props: $.extend({}, b),
        opts: $.extend(
          !0,
          {
            specialEasing: {},
          },
          c
        ),
        originalProperties: b,
        originalOptions: c,
        startTime: Ub || F(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c, d) {
          var e = $.Tween(
            a,
            i.opts,
            b,
            c,
            i.opts.specialEasing[b] || i.opts.easing
          );
          return i.tweens.push(e), e;
        },
        stop: function (b) {
          for (var c = 0, d = b ? i.tweens.length : 0; d > c; c++)
            i.tweens[c].run(1);
          return b ? g.resolveWith(a, [i, b]) : g.rejectWith(a, [i, b]), this;
        },
      }),
      j = i.props;
    for (I(j, i.opts.specialEasing); f > e; e++)
      if ((d = Zb[e].call(i, a, j, i.opts))) return d;
    return (
      G(i, j),
      $.isFunction(i.opts.start) && i.opts.start.call(a, i),
      $.fx.timer(
        $.extend(h, {
          anim: i,
          queue: i.opts.queue,
          elem: a,
        })
      ),
      i
        .progress(i.opts.progress)
        .done(i.opts.done, i.opts.complete)
        .fail(i.opts.fail)
        .always(i.opts.always)
    );
  }

  function I(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = $.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        $.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = $.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }

  function J(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = a.style,
      n = {},
      o = [],
      p = a.nodeType && r(a);
    c.queue ||
      ((j = $._queueHooks(a, "fx")),
      null == j.unqueued &&
        ((j.unqueued = 0),
        (k = j.empty.fire),
        (j.empty.fire = function () {
          j.unqueued || k();
        })),
      j.unqueued++,
      l.always(function () {
        l.always(function () {
          j.unqueued--, $.queue(a, "fx").length || j.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [m.overflow, m.overflowX, m.overflowY]),
        "inline" === $.css(a, "display") &&
          "none" === $.css(a, "float") &&
          ($.support.inlineBlockNeedsLayout && "inline" !== w(a.nodeName)
            ? (m.zoom = 1)
            : (m.display = "inline-block"))),
      c.overflow &&
        ((m.overflow = "hidden"),
        $.support.shrinkWrapBlocks ||
          l.done(function () {
            (m.overflow = c.overflow[0]),
              (m.overflowX = c.overflow[1]),
              (m.overflowY = c.overflow[2]);
          }));
    for (d in b)
      if (((f = b[d]), Wb.exec(f))) {
        if ((delete b[d], f === (p ? "hide" : "show"))) continue;
        o.push(d);
      }
    if ((g = o.length))
      for (
        h = $._data(a, "fxshow") || $._data(a, "fxshow", {}),
          p
            ? $(a).show()
            : l.done(function () {
                $(a).hide();
              }),
          l.done(function () {
            var b;
            $.removeData(a, "fxshow", !0);
            for (b in n) $.style(a, b, n[b]);
          }),
          d = 0;
        g > d;
        d++
      )
        (e = o[d]),
          (i = l.createTween(e, p ? h[e] : 0)),
          (n[e] = h[e] || $.style(a, e)),
          e in h ||
            ((h[e] = i.start),
            p &&
              ((i.end = i.start),
              (i.start = "width" === e || "height" === e ? 1 : 0)));
  }

  function K(a, b, c, d, e) {
    return new K.prototype.init(a, b, c, d, e);
  }

  function L(a, b) {
    for (
      var c,
        d = {
          height: a,
        },
        e = 0;
      4 > e;
      e += 2 - b
    )
      (c = pb[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }

  function M(a) {
    return $.isWindow(a)
      ? a
      : 9 === a.nodeType
      ? a.defaultView || a.parentWindow
      : !1;
  }
  var N,
    O,
    P = a.document,
    Q = a.location,
    R = a.navigator,
    S = a.jQuery,
    T = a.$,
    U = Array.prototype.push,
    V = Array.prototype.slice,
    W = Array.prototype.indexOf,
    X = Object.prototype.toString,
    Y = Object.prototype.hasOwnProperty,
    Z = String.prototype.trim,
    $ = function (a, b) {
      return new $.fn.init(a, b, N);
    },
    _ = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
    aa = /\S/,
    ba = /\s+/,
    ca = aa.test("Â ") ? /^[\s\xA0]+|[\s\xA0]+$/g : /^\s+|\s+$/g,
    da = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    ea = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    fa = /^[\],:{}\s]*$/,
    ga = /(?:^|:|,)(?:\s*\[)+/g,
    ha = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    ia = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
    ja = /^-ms-/,
    ka = /-([\da-z])/gi,
    la = function (a, b) {
      return (b + "").toUpperCase();
    },
    ma = function () {
      P.addEventListener
        ? (P.removeEventListener("DOMContentLoaded", ma, !1), $.ready())
        : "complete" === P.readyState &&
          (P.detachEvent("onreadystatechange", ma), $.ready());
    },
    na = {};
  ($.fn = $.prototype =
    {
      constructor: $,
      init: function (a, c, d) {
        var e, f, g;
        if (!a) return this;
        if (a.nodeType)
          return (this.context = this[0] = a), (this.length = 1), this;
        if ("string" == typeof a) {
          if (
            ((e =
              "<" === a.charAt(0) &&
              ">" === a.charAt(a.length - 1) &&
              a.length >= 3
                ? [null, a, null]
                : da.exec(a)),
            e && (e[1] || !c))
          ) {
            if (e[1])
              return (
                (c = c instanceof $ ? c[0] : c),
                (g = c && c.nodeType ? c.ownerDocument || c : P),
                (a = $.parseHTML(e[1], g, !0)),
                ea.test(e[1]) && $.isPlainObject(c) && this.attr.call(a, c, !0),
                $.merge(this, a)
              );
            if (((f = P.getElementById(e[2])), f && f.parentNode)) {
              if (f.id !== e[2]) return d.find(a);
              (this.length = 1), (this[0] = f);
            }
            return (this.context = P), (this.selector = a), this;
          }
          return !c || c.jquery
            ? (c || d).find(a)
            : this.constructor(c).find(a);
        }
        return $.isFunction(a)
          ? d.ready(a)
          : (a.selector !== b &&
              ((this.selector = a.selector), (this.context = a.context)),
            $.makeArray(a, this));
      },
      selector: "",
      jquery: "1.8.0",
      length: 0,
      size: function () {
        return this.length;
      },
      toArray: function () {
        return V.call(this);
      },
      get: function (a) {
        return null == a
          ? this.toArray()
          : 0 > a
          ? this[this.length + a]
          : this[a];
      },
      pushStack: function (a, b, c) {
        var d = $.merge(this.constructor(), a);
        return (
          (d.prevObject = this),
          (d.context = this.context),
          "find" === b
            ? (d.selector = this.selector + (this.selector ? " " : "") + c)
            : b && (d.selector = this.selector + "." + b + "(" + c + ")"),
          d
        );
      },
      each: function (a, b) {
        return $.each(this, a, b);
      },
      ready: function (a) {
        return $.ready.promise().done(a), this;
      },
      eq: function (a) {
        return (a = +a), -1 === a ? this.slice(a) : this.slice(a, a + 1);
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      slice: function () {
        return this.pushStack(
          V.apply(this, arguments),
          "slice",
          V.call(arguments).join(",")
        );
      },
      map: function (a) {
        return this.pushStack(
          $.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: U,
      sort: [].sort,
      splice: [].splice,
    }),
    ($.fn.init.prototype = $.fn),
    ($.extend = $.fn.extend =
      function () {
        var a,
          c,
          d,
          e,
          f,
          g,
          h = arguments[0] || {},
          i = 1,
          j = arguments.length,
          k = !1;
        for (
          "boolean" == typeof h && ((k = h), (h = arguments[1] || {}), (i = 2)),
            "object" != typeof h && !$.isFunction(h) && (h = {}),
            j === i && ((h = this), --i);
          j > i;
          i++
        )
          if (null != (a = arguments[i]))
            for (c in a)
              (d = h[c]),
                (e = a[c]),
                h !== e &&
                  (k && e && ($.isPlainObject(e) || (f = $.isArray(e)))
                    ? (f
                        ? ((f = !1), (g = d && $.isArray(d) ? d : []))
                        : (g = d && $.isPlainObject(d) ? d : {}),
                      (h[c] = $.extend(k, g, e)))
                    : e !== b && (h[c] = e));
        return h;
      }),
    $.extend({
      noConflict: function (b) {
        return a.$ === $ && (a.$ = T), b && a.jQuery === $ && (a.jQuery = S), $;
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? $.readyWait++ : $.ready(!0);
      },
      ready: function (a) {
        if (a === !0 ? !--$.readyWait : !$.isReady) {
          if (!P.body) return setTimeout($.ready, 1);
          ($.isReady = !0),
            (a !== !0 && --$.readyWait > 0) ||
              (O.resolveWith(P, [$]),
              $.fn.trigger && $(P).trigger("ready").off("ready"));
        }
      },
      isFunction: function (a) {
        return "function" === $.type(a);
      },
      isArray:
        Array.isArray ||
        function (a) {
          return "array" === $.type(a);
        },
      isWindow: function (a) {
        return null != a && a == a.window;
      },
      isNumeric: function (a) {
        return !isNaN(parseFloat(a)) && isFinite(a);
      },
      type: function (a) {
        return null == a ? String(a) : na[X.call(a)] || "object";
      },
      isPlainObject: function (a) {
        if (!a || "object" !== $.type(a) || a.nodeType || $.isWindow(a))
          return !1;
        try {
          if (
            a.constructor &&
            !Y.call(a, "constructor") &&
            !Y.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (c) {
          return !1;
        }
        var d;
        for (d in a);
        return d === b || Y.call(a, d);
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      error: function (a) {
        throw new Error(a);
      },
      parseHTML: function (a, b, c) {
        var d;
        return a && "string" == typeof a
          ? ("boolean" == typeof b && ((c = b), (b = 0)),
            (b = b || P),
            (d = ea.exec(a))
              ? [b.createElement(d[1])]
              : ((d = $.buildFragment([a], b, c ? null : [])),
                $.merge(
                  [],
                  (d.cacheable ? $.clone(d.fragment) : d.fragment).childNodes
                )))
          : null;
      },
      parseJSON: function (b) {
        return b && "string" == typeof b
          ? ((b = $.trim(b)),
            a.JSON && a.JSON.parse
              ? a.JSON.parse(b)
              : fa.test(b.replace(ha, "@").replace(ia, "]").replace(ga, ""))
              ? new Function("return " + b)()
              : void $.error("Invalid JSON: " + b))
          : null;
      },
      parseXML: function (c) {
        var d, e;
        if (!c || "string" != typeof c) return null;
        try {
          a.DOMParser
            ? ((e = new DOMParser()), (d = e.parseFromString(c, "text/xml")))
            : ((d = new ActiveXObject("Microsoft.XMLDOM")),
              (d.async = "false"),
              d.loadXML(c));
        } catch (f) {
          d = b;
        }
        return (
          (!d ||
            !d.documentElement ||
            d.getElementsByTagName("parsererror").length) &&
            $.error("Invalid XML: " + c),
          d
        );
      },
      noop: function () {},
      globalEval: function (b) {
        b &&
          aa.test(b) &&
          (
            a.execScript ||
            function (b) {
              a.eval.call(a, b);
            }
          )(b);
      },
      camelCase: function (a) {
        return a.replace(ja, "ms-").replace(ka, la);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase();
      },
      each: function (a, c, d) {
        var e,
          f = 0,
          g = a.length,
          h = g === b || $.isFunction(a);
        if (d)
          if (h) {
            for (e in a) if (c.apply(a[e], d) === !1) break;
          } else for (; g > f && c.apply(a[f++], d) !== !1; );
        else if (h) {
          for (e in a) if (c.call(a[e], e, a[e]) === !1) break;
        } else for (; g > f && c.call(a[f], f, a[f++]) !== !1; );
        return a;
      },
      trim: Z
        ? function (a) {
            return null == a ? "" : Z.call(a);
          }
        : function (a) {
            return null == a ? "" : a.toString().replace(ca, "");
          },
      makeArray: function (a, b) {
        var c,
          d = b || [];
        return (
          null != a &&
            ((c = $.type(a)),
            null == a.length ||
            "string" === c ||
            "function" === c ||
            "regexp" === c ||
            $.isWindow(a)
              ? U.call(d, a)
              : $.merge(d, a)),
          d
        );
      },
      inArray: function (a, b, c) {
        var d;
        if (b) {
          if (W) return W.call(b, a, c);
          for (
            d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0;
            d > c;
            c++
          )
            if (c in b && b[c] === a) return c;
        }
        return -1;
      },
      merge: function (a, c) {
        var d = c.length,
          e = a.length,
          f = 0;
        if ("number" == typeof d) for (; d > f; f++) a[e++] = c[f];
        else for (; c[f] !== b; ) a[e++] = c[f++];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        var d,
          e = [],
          f = 0,
          g = a.length;
        for (c = !!c; g > f; f++) (d = !!b(a[f], f)), c !== d && e.push(a[f]);
        return e;
      },
      map: function (a, c, d) {
        var e,
          f,
          g = [],
          h = 0,
          i = a.length,
          j =
            a instanceof $ ||
            (i !== b &&
              "number" == typeof i &&
              ((i > 0 && a[0] && a[i - 1]) || 0 === i || $.isArray(a)));
        if (j)
          for (; i > h; h++)
            (e = c(a[h], h, d)), null != e && (g[g.length] = e);
        else for (f in a) (e = c(a[f], f, d)), null != e && (g[g.length] = e);
        return g.concat.apply([], g);
      },
      guid: 1,
      proxy: function (a, c) {
        var d, e, f;
        return (
          "string" == typeof c && ((d = a[c]), (c = a), (a = d)),
          $.isFunction(a)
            ? ((e = V.call(arguments, 2)),
              (f = function () {
                return a.apply(c, e.concat(V.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || f.guid || $.guid++),
              f)
            : b
        );
      },
      access: function (a, c, d, e, f, g, h) {
        var i,
          j = null == d,
          k = 0,
          l = a.length;
        if (d && "object" == typeof d) {
          for (k in d) $.access(a, c, k, d[k], 1, g, e);
          f = 1;
        } else if (e !== b) {
          if (
            ((i = h === b && $.isFunction(e)),
            j &&
              (i
                ? ((i = c),
                  (c = function (a, b, c) {
                    return i.call($(a), c);
                  }))
                : (c.call(a, e), (c = null))),
            c)
          )
            for (; l > k; k++)
              c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
          f = 1;
        }
        return f ? a : j ? c.call(a) : l ? c(a[0], d) : g;
      },
      now: function () {
        return new Date().getTime();
      },
    }),
    ($.ready.promise = function (b) {
      if (!O)
        if (
          ((O = $.Deferred()),
          "complete" === P.readyState ||
            ("loading" !== P.readyState && P.addEventListener))
        )
          setTimeout($.ready, 1);
        else if (P.addEventListener)
          P.addEventListener("DOMContentLoaded", ma, !1),
            a.addEventListener("load", $.ready, !1);
        else {
          P.attachEvent("onreadystatechange", ma),
            a.attachEvent("onload", $.ready);
          var c = !1;
          try {
            c = null == a.frameElement && P.documentElement;
          } catch (d) {}
          c &&
            c.doScroll &&
            (function e() {
              if (!$.isReady) {
                try {
                  c.doScroll("left");
                } catch (a) {
                  return setTimeout(e, 50);
                }
                $.ready();
              }
            })();
        }
      return O.promise(b);
    }),
    $.each(
      "Boolean Number String Function Array Date RegExp Object".split(" "),
      function (a, b) {
        na["[object " + b + "]"] = b.toLowerCase();
      }
    ),
    (N = $(P));
  var oa = {};
  ($.Callbacks = function (a) {
    a = "string" == typeof a ? oa[a] || c(a) : $.extend({}, a);
    var d,
      e,
      f,
      g,
      h,
      i,
      j = [],
      k = !a.once && [],
      l = function (b) {
        for (
          d = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0;
          j && h > i;
          i++
        )
          if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
            d = !1;
            break;
          }
        (f = !1),
          j && (k ? k.length && l(k.shift()) : d ? (j = []) : m.disable());
      },
      m = {
        add: function () {
          if (j) {
            var b = j.length;
            !(function c(b) {
              $.each(b, function (b, d) {
                !$.isFunction(d) || (a.unique && m.has(d))
                  ? d && d.length && c(d)
                  : j.push(d);
              });
            })(arguments),
              f ? (h = j.length) : d && ((g = b), l(d));
          }
          return this;
        },
        remove: function () {
          return (
            j &&
              $.each(arguments, function (a, b) {
                for (var c; (c = $.inArray(b, j, c)) > -1; )
                  j.splice(c, 1), f && (h >= c && h--, i >= c && i--);
              }),
            this
          );
        },
        has: function (a) {
          return $.inArray(a, j) > -1;
        },
        empty: function () {
          return (j = []), this;
        },
        disable: function () {
          return (j = k = d = b), this;
        },
        disabled: function () {
          return !j;
        },
        lock: function () {
          return (k = b), d || m.disable(), this;
        },
        locked: function () {
          return !k;
        },
        fireWith: function (a, b) {
          return (
            (b = b || []),
            (b = [a, b.slice ? b.slice() : b]),
            j && (!e || k) && (f ? k.push(b) : l(b)),
            this
          );
        },
        fire: function () {
          return m.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!e;
        },
      };
    return m;
  }),
    $.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", $.Callbacks("once memory"), "resolved"],
            ["reject", "fail", $.Callbacks("once memory"), "rejected"],
            ["notify", "progress", $.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return $.Deferred(function (c) {
                $.each(b, function (b, d) {
                  var f = d[0],
                    g = a[b];
                  e[d[1]](
                    $.isFunction(g)
                      ? function () {
                          var a = g.apply(this, arguments);
                          a && $.isFunction(a.promise)
                            ? a
                                .promise()
                                .done(c.resolve)
                                .fail(c.reject)
                                .progress(c.notify)
                            : c[f + "With"](this === e ? c : this, [a]);
                        }
                      : c[f]
                  );
                }),
                  (a = null);
              }).promise();
            },
            promise: function (a) {
              return "object" == typeof a ? $.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          $.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = g.fire),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b,
          c,
          d,
          e = 0,
          f = V.call(arguments),
          g = f.length,
          h = 1 !== g || (a && $.isFunction(a.promise)) ? g : 0,
          i = 1 === h ? a : $.Deferred(),
          j = function (a, c, d) {
            return function (e) {
              (c[a] = this),
                (d[a] = arguments.length > 1 ? V.call(arguments) : e),
                d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
            };
          };
        if (g > 1)
          for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)
            f[e] && $.isFunction(f[e].promise)
              ? f[e]
                  .promise()
                  .done(j(e, d, f))
                  .fail(i.reject)
                  .progress(j(e, c, b))
              : --h;
        return h || i.resolveWith(d, f), i.promise();
      },
    }),
    ($.support = (function () {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = P.createElement("div");
      if (
        (m.setAttribute("className", "t"),
        (m.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (c = m.getElementsByTagName("*")),
        (d = m.getElementsByTagName("a")[0]),
        (d.style.cssText = "top:1px;float:left;opacity:.5"),
        !c || !c.length || !d)
      )
        return {};
      (e = P.createElement("select")),
        (f = e.appendChild(P.createElement("option"))),
        (g = m.getElementsByTagName("input")[0]),
        (b = {
          leadingWhitespace: 3 === m.firstChild.nodeType,
          tbody: !m.getElementsByTagName("tbody").length,
          htmlSerialize: !!m.getElementsByTagName("link").length,
          style: /top/.test(d.getAttribute("style")),
          hrefNormalized: "/a" === d.getAttribute("href"),
          opacity: /^0.5/.test(d.style.opacity),
          cssFloat: !!d.style.cssFloat,
          checkOn: "on" === g.value,
          optSelected: f.selected,
          getSetAttribute: "t" !== m.className,
          enctype: !!P.createElement("form").enctype,
          html5Clone:
            "<:nav></:nav>" !== P.createElement("nav").cloneNode(!0).outerHTML,
          boxModel: "CSS1Compat" === P.compatMode,
          submitBubbles: !0,
          changeBubbles: !0,
          focusinBubbles: !1,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
          boxSizingReliable: !0,
          pixelPosition: !1,
        }),
        (g.checked = !0),
        (b.noCloneChecked = g.cloneNode(!0).checked),
        (e.disabled = !0),
        (b.optDisabled = !f.disabled);
      try {
        delete m.test;
      } catch (n) {
        b.deleteExpando = !1;
      }
      if (
        (!m.addEventListener &&
          m.attachEvent &&
          m.fireEvent &&
          (m.attachEvent(
            "onclick",
            (l = function () {
              b.noCloneEvent = !1;
            })
          ),
          m.cloneNode(!0).fireEvent("onclick"),
          m.detachEvent("onclick", l)),
        (g = P.createElement("input")),
        (g.value = "t"),
        g.setAttribute("type", "radio"),
        (b.radioValue = "t" === g.value),
        g.setAttribute("checked", "checked"),
        g.setAttribute("name", "t"),
        m.appendChild(g),
        (h = P.createDocumentFragment()),
        h.appendChild(m.lastChild),
        (b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (b.appendChecked = g.checked),
        h.removeChild(g),
        h.appendChild(m),
        m.attachEvent)
      )
        for (j in {
          submit: !0,
          change: !0,
          focusin: !0,
        })
          (i = "on" + j),
            (k = i in m),
            k ||
              (m.setAttribute(i, "return;"), (k = "function" == typeof m[i])),
            (b[j + "Bubbles"] = k);
      return (
        $(function () {
          var c,
            d,
            e,
            f,
            g = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
            h = P.getElementsByTagName("body")[0];
          h &&
            ((c = P.createElement("div")),
            (c.style.cssText =
              "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px"),
            h.insertBefore(c, h.firstChild),
            (d = P.createElement("div")),
            c.appendChild(d),
            (d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (e = d.getElementsByTagName("td")),
            (e[0].style.cssText = "padding:0;margin:0;border:0;display:none"),
            (k = 0 === e[0].offsetHeight),
            (e[0].style.display = ""),
            (e[1].style.display = "none"),
            (b.reliableHiddenOffsets = k && 0 === e[0].offsetHeight),
            (d.innerHTML = ""),
            (d.style.cssText =
              "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
            (b.boxSizing = 4 === d.offsetWidth),
            (b.doesNotIncludeMarginInBodyOffset = 1 !== h.offsetTop),
            a.getComputedStyle &&
              ((b.pixelPosition =
                "1%" !== (a.getComputedStyle(d, null) || {}).top),
              (b.boxSizingReliable =
                "4px" ===
                (
                  a.getComputedStyle(d, null) || {
                    width: "4px",
                  }
                ).width),
              (f = P.createElement("div")),
              (f.style.cssText = d.style.cssText = g),
              (f.style.marginRight = f.style.width = "0"),
              (d.style.width = "1px"),
              d.appendChild(f),
              (b.reliableMarginRight = !parseFloat(
                (a.getComputedStyle(f, null) || {}).marginRight
              ))),
            "undefined" != typeof d.style.zoom &&
              ((d.innerHTML = ""),
              (d.style.cssText =
                g + "width:1px;padding:1px;display:inline;zoom:1"),
              (b.inlineBlockNeedsLayout = 3 === d.offsetWidth),
              (d.style.display = "block"),
              (d.style.overflow = "visible"),
              (d.innerHTML = "<div></div>"),
              (d.firstChild.style.width = "5px"),
              (b.shrinkWrapBlocks = 3 !== d.offsetWidth),
              (c.style.zoom = 1)),
            h.removeChild(c),
            (c = d = e = f = null));
        }),
        h.removeChild(m),
        (c = d = e = f = g = h = m = null),
        b
      );
    })());
  var pa = /^(?:\{.*\}|\[.*\])$/,
    qa = /([A-Z])/g;
  $.extend({
    cache: {},
    deletedIds: [],
    uuid: 0,
    expando: "jQuery" + ($.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0,
    },
    hasData: function (a) {
      return (
        (a = a.nodeType ? $.cache[a[$.expando]] : a[$.expando]), !!a && !e(a)
      );
    },
    data: function (a, c, d, e) {
      if ($.acceptData(a)) {
        var f,
          g,
          h = $.expando,
          i = "string" == typeof c,
          j = a.nodeType,
          k = j ? $.cache : a,
          l = j ? a[h] : a[h] && h;
        if ((l && k[l] && (e || k[l].data)) || !i || d !== b)
          return (
            l || (j ? (a[h] = l = $.deletedIds.pop() || ++$.uuid) : (l = h)),
            k[l] || ((k[l] = {}), j || (k[l].toJSON = $.noop)),
            ("object" == typeof c || "function" == typeof c) &&
              (e
                ? (k[l] = $.extend(k[l], c))
                : (k[l].data = $.extend(k[l].data, c))),
            (f = k[l]),
            e || (f.data || (f.data = {}), (f = f.data)),
            d !== b && (f[$.camelCase(c)] = d),
            i ? ((g = f[c]), null == g && (g = f[$.camelCase(c)])) : (g = f),
            g
          );
      }
    },
    removeData: function (a, b, c) {
      if ($.acceptData(a)) {
        var d,
          f,
          g,
          h = a.nodeType,
          i = h ? $.cache : a,
          j = h ? a[$.expando] : $.expando;
        if (i[j]) {
          if (b && (d = c ? i[j] : i[j].data)) {
            $.isArray(b) ||
              (b in d
                ? (b = [b])
                : ((b = $.camelCase(b)), (b = b in d ? [b] : b.split(" "))));
            for (f = 0, g = b.length; g > f; f++) delete d[b[f]];
            if (!(c ? e : $.isEmptyObject)(d)) return;
          }
          (c || (delete i[j].data, e(i[j]))) &&
            (h
              ? $.cleanData([a], !0)
              : $.support.deleteExpando || i != i.window
              ? delete i[j]
              : (i[j] = null));
        }
      }
    },
    _data: function (a, b, c) {
      return $.data(a, b, c, !0);
    },
    acceptData: function (a) {
      var b = a.nodeName && $.noData[a.nodeName.toLowerCase()];
      return !b || (b !== !0 && a.getAttribute("classid") === b);
    },
  }),
    $.fn.extend({
      data: function (a, c) {
        var e,
          f,
          g,
          h,
          i,
          j = this[0],
          k = 0,
          l = null;
        if (a === b) {
          if (
            this.length &&
            ((l = $.data(j)), 1 === j.nodeType && !$._data(j, "parsedAttrs"))
          ) {
            for (g = j.attributes, i = g.length; i > k; k++)
              (h = g[k].name),
                0 === h.indexOf("data-") &&
                  ((h = $.camelCase(h.substring(5))), d(j, h, l[h]));
            $._data(j, "parsedAttrs", !0);
          }
          return l;
        }
        return "object" == typeof a
          ? this.each(function () {
              $.data(this, a);
            })
          : ((e = a.split(".", 2)),
            (e[1] = e[1] ? "." + e[1] : ""),
            (f = e[1] + "!"),
            $.access(
              this,
              function (c) {
                return c === b
                  ? ((l = this.triggerHandler("getData" + f, [e[0]])),
                    l === b && j && ((l = $.data(j, a)), (l = d(j, a, l))),
                    l === b && e[1] ? this.data(e[0]) : l)
                  : ((e[1] = c),
                    void this.each(function () {
                      var b = $(this);
                      b.triggerHandler("setData" + f, e),
                        $.data(this, a, c),
                        b.triggerHandler("changeData" + f, e);
                    }));
              },
              null,
              c,
              arguments.length > 1,
              null,
              !1
            ));
      },
      removeData: function (a) {
        return this.each(function () {
          $.removeData(this, a);
        });
      },
    }),
    $.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = $._data(a, b)),
            c &&
              (!d || $.isArray(c)
                ? (d = $._data(a, b, $.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = $.queue(a, b),
          d = c.shift(),
          e = $._queueHooks(a, b),
          f = function () {
            $.dequeue(a, b);
          };
        "inprogress" === d && (d = c.shift()),
          d &&
            ("fx" === b && c.unshift("inprogress"),
            delete e.stop,
            d.call(a, f, e)),
          !c.length && e && e.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          $._data(a, c) ||
          $._data(a, c, {
            empty: $.Callbacks("once memory").add(function () {
              $.removeData(a, b + "queue", !0), $.removeData(a, c, !0);
            }),
          })
        );
      },
    }),
    $.fn.extend({
      queue: function (a, c) {
        var d = 2;
        return (
          "string" != typeof a && ((c = a), (a = "fx"), d--),
          arguments.length < d
            ? $.queue(this[0], a)
            : c === b
            ? this
            : this.each(function () {
                var b = $.queue(this, a, c);
                $._queueHooks(this, a),
                  "fx" === a && "inprogress" !== b[0] && $.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          $.dequeue(this, a);
        });
      },
      delay: function (a, b) {
        return (
          (a = $.fx ? $.fx.speeds[a] || a : a),
          (b = b || "fx"),
          this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
              clearTimeout(d);
            };
          })
        );
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, c) {
        var d,
          e = 1,
          f = $.Deferred(),
          g = this,
          h = this.length,
          i = function () {
            --e || f.resolveWith(g, [g]);
          };
        for ("string" != typeof a && ((c = a), (a = b)), a = a || "fx"; h--; )
          (d = $._data(g[h], a + "queueHooks")) &&
            d.empty &&
            (e++, d.empty.add(i));
        return i(), f.promise(c);
      },
    });
  var ra,
    sa,
    ta,
    ua = /[\t\r\n]/g,
    va = /\r/g,
    wa = /^(?:button|input)$/i,
    xa = /^(?:button|input|object|select|textarea)$/i,
    ya = /^a(?:rea|)$/i,
    za =
      /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    Aa = $.support.getSetAttribute;
  $.fn.extend({
    attr: function (a, b) {
      return $.access(this, $.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        $.removeAttr(this, a);
      });
    },
    prop: function (a, b) {
      return $.access(this, $.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return (
        (a = $.propFix[a] || a),
        this.each(function () {
          try {
            (this[a] = b), delete this[a];
          } catch (c) {}
        })
      );
    },
    addClass: function (a) {
      var b, c, d, e, f, g, h;
      if ($.isFunction(a))
        return this.each(function (b) {
          $(this).addClass(a.call(this, b, this.className));
        });
      if (a && "string" == typeof a)
        for (b = a.split(ba), c = 0, d = this.length; d > c; c++)
          if (((e = this[c]), 1 === e.nodeType))
            if (e.className || 1 !== b.length) {
              for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++)
                ~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
              e.className = $.trim(f);
            } else e.className = a;
      return this;
    },
    removeClass: function (a) {
      var c, d, e, f, g, h, i;
      if ($.isFunction(a))
        return this.each(function (b) {
          $(this).removeClass(a.call(this, b, this.className));
        });
      if ((a && "string" == typeof a) || a === b)
        for (c = (a || "").split(ba), h = 0, i = this.length; i > h; h++)
          if (((e = this[h]), 1 === e.nodeType && e.className)) {
            for (
              d = (" " + e.className + " ").replace(ua, " "),
                f = 0,
                g = c.length;
              g > f;
              f++
            )
              for (; d.indexOf(" " + c[f] + " ") > -1; )
                d = d.replace(" " + c[f] + " ", " ");
            e.className = a ? $.trim(d) : "";
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a,
        d = "boolean" == typeof b;
      return $.isFunction(a)
        ? this.each(function (c) {
            $(this).toggleClass(a.call(this, c, this.className, b), b);
          })
        : this.each(function () {
            if ("string" === c)
              for (
                var e, f = 0, g = $(this), h = b, i = a.split(ba);
                (e = i[f++]);

              )
                (h = d ? h : !g.hasClass(e)),
                  g[h ? "addClass" : "removeClass"](e);
            else
              ("undefined" === c || "boolean" === c) &&
                (this.className &&
                  $._data(this, "__className__", this.className),
                (this.className =
                  this.className || a === !1
                    ? ""
                    : $._data(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (
          1 === this[c].nodeType &&
          (" " + this[c].className + " ").replace(ua, " ").indexOf(b) > -1
        )
          return !0;
      return !1;
    },
    val: function (a) {
      var c,
        d,
        e,
        f = this[0];
      {
        if (arguments.length)
          return (
            (e = $.isFunction(a)),
            this.each(function (d) {
              var f,
                g = $(this);
              1 === this.nodeType &&
                ((f = e ? a.call(this, d, g.val()) : a),
                null == f
                  ? (f = "")
                  : "number" == typeof f
                  ? (f += "")
                  : $.isArray(f) &&
                    (f = $.map(f, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (c =
                  $.valHooks[this.type] ||
                  $.valHooks[this.nodeName.toLowerCase()]),
                (c && "set" in c && c.set(this, f, "value") !== b) ||
                  (this.value = f));
            })
          );
        if (f)
          return (
            (c = $.valHooks[f.type] || $.valHooks[f.nodeName.toLowerCase()]),
            c && "get" in c && (d = c.get(f, "value")) !== b
              ? d
              : ((d = f.value),
                "string" == typeof d ? d.replace(va, "") : null == d ? "" : d)
          );
      }
    },
  }),
    $.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = a.attributes.value;
            return !b || b.specified ? a.value : a.text;
          },
        },
        select: {
          get: function (a) {
            var b,
              c,
              d,
              e,
              f = a.selectedIndex,
              g = [],
              h = a.options,
              i = "select-one" === a.type;
            if (0 > f) return null;
            for (c = i ? f : 0, d = i ? f + 1 : h.length; d > c; c++)
              if (
                ((e = h[c]),
                e.selected &&
                  ($.support.optDisabled
                    ? !e.disabled
                    : null === e.getAttribute("disabled")) &&
                  (!e.parentNode.disabled ||
                    !$.nodeName(e.parentNode, "optgroup")))
              ) {
                if (((b = $(e).val()), i)) return b;
                g.push(b);
              }
            return i && !g.length && h.length ? $(h[f]).val() : g;
          },
          set: function (a, b) {
            var c = $.makeArray(b);
            return (
              $(a)
                .find("option")
                .each(function () {
                  this.selected = $.inArray($(this).val(), c) >= 0;
                }),
              c.length || (a.selectedIndex = -1),
              c
            );
          },
        },
      },
      attrFn: {},
      attr: function (a, c, d, e) {
        var f,
          g,
          h,
          i = a.nodeType;
        if (a && 3 !== i && 8 !== i && 2 !== i)
          return e && $.isFunction($.fn[c])
            ? $(a)[c](d)
            : "undefined" == typeof a.getAttribute
            ? $.prop(a, c, d)
            : ((h = 1 !== i || !$.isXMLDoc(a)),
              h &&
                ((c = c.toLowerCase()),
                (g = $.attrHooks[c] || (za.test(c) ? sa : ra))),
              d !== b
                ? null === d
                  ? void $.removeAttr(a, c)
                  : g && "set" in g && h && (f = g.set(a, d, c)) !== b
                  ? f
                  : (a.setAttribute(c, "" + d), d)
                : g && "get" in g && h && null !== (f = g.get(a, c))
                ? f
                : ((f = a.getAttribute(c)), null === f ? b : f));
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e,
          f,
          g = 0;
        if (b && 1 === a.nodeType)
          for (d = b.split(ba); g < d.length; g++)
            (e = d[g]),
              e &&
                ((c = $.propFix[e] || e),
                (f = za.test(e)),
                f || $.attr(a, e, ""),
                a.removeAttribute(Aa ? e : c),
                f && c in a && (a[c] = !1));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (wa.test(a.nodeName) && a.parentNode)
              $.error("type property can't be changed");
            else if (
              !$.support.radioValue &&
              "radio" === b &&
              $.nodeName(a, "input")
            ) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
        value: {
          get: function (a, b) {
            return ra && $.nodeName(a, "button")
              ? ra.get(a, b)
              : b in a
              ? a.value
              : null;
          },
          set: function (a, b, c) {
            return ra && $.nodeName(a, "button")
              ? ra.set(a, b, c)
              : void (a.value = b);
          },
        },
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable",
      },
      prop: function (a, c, d) {
        var e,
          f,
          g,
          h = a.nodeType;
        if (a && 3 !== h && 8 !== h && 2 !== h)
          return (
            (g = 1 !== h || !$.isXMLDoc(a)),
            g && ((c = $.propFix[c] || c), (f = $.propHooks[c])),
            d !== b
              ? f && "set" in f && (e = f.set(a, d, c)) !== b
                ? e
                : (a[c] = d)
              : f && "get" in f && null !== (e = f.get(a, c))
              ? e
              : a[c]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var c = a.getAttributeNode("tabindex");
            return c && c.specified
              ? parseInt(c.value, 10)
              : xa.test(a.nodeName) || (ya.test(a.nodeName) && a.href)
              ? 0
              : b;
          },
        },
      },
    }),
    (sa = {
      get: function (a, c) {
        var d,
          e = $.prop(a, c);
        return e === !0 ||
          ("boolean" != typeof e &&
            (d = a.getAttributeNode(c)) &&
            d.nodeValue !== !1)
          ? c.toLowerCase()
          : b;
      },
      set: function (a, b, c) {
        var d;
        return (
          b === !1
            ? $.removeAttr(a, c)
            : ((d = $.propFix[c] || c),
              d in a && (a[d] = !0),
              a.setAttribute(c, c.toLowerCase())),
          c
        );
      },
    }),
    Aa ||
      ((ta = {
        name: !0,
        id: !0,
        coords: !0,
      }),
      (ra = $.valHooks.button =
        {
          get: function (a, c) {
            var d;
            return (
              (d = a.getAttributeNode(c)),
              d && (ta[c] ? "" !== d.value : d.specified) ? d.value : b
            );
          },
          set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return (
              d || ((d = P.createAttribute(c)), a.setAttributeNode(d)),
              (d.value = b + "")
            );
          },
        }),
      $.each(["width", "height"], function (a, b) {
        $.attrHooks[b] = $.extend($.attrHooks[b], {
          set: function (a, c) {
            return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
          },
        });
      }),
      ($.attrHooks.contenteditable = {
        get: ra.get,
        set: function (a, b, c) {
          "" === b && (b = "false"), ra.set(a, b, c);
        },
      })),
    $.support.hrefNormalized ||
      $.each(["href", "src", "width", "height"], function (a, c) {
        $.attrHooks[c] = $.extend($.attrHooks[c], {
          get: function (a) {
            var d = a.getAttribute(c, 2);
            return null === d ? b : d;
          },
        });
      }),
    $.support.style ||
      ($.attrHooks.style = {
        get: function (a) {
          return a.style.cssText.toLowerCase() || b;
        },
        set: function (a, b) {
          return (a.style.cssText = "" + b);
        },
      }),
    $.support.optSelected ||
      ($.propHooks.selected = $.extend($.propHooks.selected, {
        get: function (a) {
          var b = a.parentNode;
          return (
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
          );
        },
      })),
    $.support.enctype || ($.propFix.enctype = "encoding"),
    $.support.checkOn ||
      $.each(["radio", "checkbox"], function () {
        $.valHooks[this] = {
          get: function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          },
        };
      }),
    $.each(["radio", "checkbox"], function () {
      $.valHooks[this] = $.extend($.valHooks[this], {
        set: function (a, b) {
          return $.isArray(b)
            ? (a.checked = $.inArray($(a).val(), b) >= 0)
            : void 0;
        },
      });
    });
  var Ba = /^(?:textarea|input|select)$/i,
    Ca = /^([^\.]*|)(?:\.(.+)|)$/,
    Da = /(?:^|\s)hover(\.\S+|)\b/,
    Ea = /^key/,
    Fa = /^(?:mouse|contextmenu)|click/,
    Ga = /^(?:focusinfocus|focusoutblur)$/,
    Ha = function (a) {
      return $.event.special.hover
        ? a
        : a.replace(Da, "mouseenter$1 mouseleave$1");
    };
  ($.event = {
    add: function (a, c, d, e, f) {
      var g, h, i, j, k, l, m, n, o, p, q;
      if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = $._data(a))) {
        for (
          d.handler && ((o = d), (d = o.handler), (f = o.selector)),
            d.guid || (d.guid = $.guid++),
            i = g.events,
            i || (g.events = i = {}),
            h = g.handle,
            h ||
              ((g.handle = h =
                function (a) {
                  return "undefined" == typeof $ ||
                    (a && $.event.triggered === a.type)
                    ? b
                    : $.event.dispatch.apply(h.elem, arguments);
                }),
              (h.elem = a)),
            c = $.trim(Ha(c)).split(" "),
            j = 0;
          j < c.length;
          j++
        )
          (k = Ca.exec(c[j]) || []),
            (l = k[1]),
            (m = (k[2] || "").split(".").sort()),
            (q = $.event.special[l] || {}),
            (l = (f ? q.delegateType : q.bindType) || l),
            (q = $.event.special[l] || {}),
            (n = $.extend(
              {
                type: l,
                origType: k[1],
                data: e,
                handler: d,
                guid: d.guid,
                selector: f,
                namespace: m.join("."),
              },
              o
            )),
            (p = i[l]),
            p ||
              ((p = i[l] = []),
              (p.delegateCount = 0),
              (q.setup && q.setup.call(a, e, m, h) !== !1) ||
                (a.addEventListener
                  ? a.addEventListener(l, h, !1)
                  : a.attachEvent && a.attachEvent("on" + l, h))),
            q.add &&
              (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)),
            f ? p.splice(p.delegateCount++, 0, n) : p.push(n),
            ($.event.global[l] = !0);
        a = null;
      }
    },
    global: {},
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = $.hasData(a) && $._data(a);
      if (q && (m = q.events)) {
        for (b = $.trim(Ha(b || "")).split(" "), f = 0; f < b.length; f++)
          if (((g = Ca.exec(b[f]) || []), (h = i = g[1]), (j = g[2]), h)) {
            for (
              n = $.event.special[h] || {},
                h = (d ? n.delegateType : n.bindType) || h,
                o = m[h] || [],
                k = o.length,
                j = j
                  ? new RegExp(
                      "(^|\\.)" +
                        j.split(".").sort().join("\\.(?:.*\\.|)") +
                        "(\\.|$)"
                    )
                  : null,
                l = 0;
              l < o.length;
              l++
            )
              (p = o[l]),
                (e || i === p.origType) &&
                  (!c || c.guid === p.guid) &&
                  (!j || j.test(p.namespace)) &&
                  (!d || d === p.selector || ("**" === d && p.selector)) &&
                  (o.splice(l--, 1),
                  p.selector && o.delegateCount--,
                  n.remove && n.remove.call(a, p));
            0 === o.length &&
              k !== o.length &&
              ((!n.teardown || n.teardown.call(a, j, q.handle) === !1) &&
                $.removeEvent(a, h, q.handle),
              delete m[h]);
          } else for (h in m) $.event.remove(a, h + b[f], c, d, !0);
        $.isEmptyObject(m) && (delete q.handle, $.removeData(a, "events", !0));
      }
    },
    customEvent: {
      getData: !0,
      setData: !0,
      changeData: !0,
    },
    trigger: function (c, d, e, f) {
      if (!e || (3 !== e.nodeType && 8 !== e.nodeType)) {
        var g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = c.type || c,
          r = [];
        if (Ga.test(q + $.event.triggered)) return;
        if (
          (q.indexOf("!") >= 0 && ((q = q.slice(0, -1)), (h = !0)),
          q.indexOf(".") >= 0 &&
            ((r = q.split(".")), (q = r.shift()), r.sort()),
          (!e || $.event.customEvent[q]) && !$.event.global[q])
        )
          return;
        if (
          ((c =
            "object" == typeof c
              ? c[$.expando]
                ? c
                : new $.Event(q, c)
              : new $.Event(q)),
          (c.type = q),
          (c.isTrigger = !0),
          (c.exclusive = h),
          (c.namespace = r.join(".")),
          (c.namespace_re = c.namespace
            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (l = q.indexOf(":") < 0 ? "on" + q : ""),
          !e)
        ) {
          g = $.cache;
          for (i in g)
            g[i].events &&
              g[i].events[q] &&
              $.event.trigger(c, d, g[i].handle.elem, !0);
          return;
        }
        if (
          ((c.result = b),
          c.target || (c.target = e),
          (d = null != d ? $.makeArray(d) : []),
          d.unshift(c),
          (m = $.event.special[q] || {}),
          m.trigger && m.trigger.apply(e, d) === !1)
        )
          return;
        if (
          ((o = [[e, m.bindType || q]]), !f && !m.noBubble && !$.isWindow(e))
        ) {
          for (
            p = m.delegateType || q,
              j = Ga.test(p + q) ? e : e.parentNode,
              k = e;
            j;
            j = j.parentNode
          )
            o.push([j, p]), (k = j);
          k === (e.ownerDocument || P) &&
            o.push([k.defaultView || k.parentWindow || a, p]);
        }
        for (i = 0; i < o.length && !c.isPropagationStopped(); i++)
          (j = o[i][0]),
            (c.type = o[i][1]),
            (n = ($._data(j, "events") || {})[c.type] && $._data(j, "handle")),
            n && n.apply(j, d),
            (n = l && j[l]),
            n && $.acceptData(j) && n.apply(j, d) === !1 && c.preventDefault();
        return (
          (c.type = q),
          !f &&
            !c.isDefaultPrevented() &&
            (!m._default || m._default.apply(e.ownerDocument, d) === !1) &&
            ("click" !== q || !$.nodeName(e, "a")) &&
            $.acceptData(e) &&
            l &&
            e[q] &&
            (("focus" !== q && "blur" !== q) || 0 !== c.target.offsetWidth) &&
            !$.isWindow(e) &&
            ((k = e[l]),
            k && (e[l] = null),
            ($.event.triggered = q),
            e[q](),
            ($.event.triggered = b),
            k && (e[l] = k)),
          c.result
        );
      }
    },
    dispatch: function (c) {
      c = $.event.fix(c || a.event);
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n = ($._data(this, "events") || {})[c.type] || [],
        o = n.delegateCount,
        p = [].slice.call(arguments),
        q = !c.exclusive && !c.namespace,
        r = $.event.special[c.type] || {},
        s = [];
      if (
        ((p[0] = c),
        (c.delegateTarget = this),
        !r.preDispatch || r.preDispatch.call(this, c) !== !1)
      ) {
        if (o && (!c.button || "click" !== c.type))
          for (
            g = $(this), g.context = this, f = c.target;
            f != this;
            f = f.parentNode || this
          )
            if (f.disabled !== !0 || "click" !== c.type) {
              for (i = {}, k = [], g[0] = f, d = 0; o > d; d++)
                (l = n[d]),
                  (m = l.selector),
                  i[m] === b && (i[m] = g.is(m)),
                  i[m] && k.push(l);
              k.length &&
                s.push({
                  elem: f,
                  matches: k,
                });
            }
        for (
          n.length > o &&
            s.push({
              elem: this,
              matches: n.slice(o),
            }),
            d = 0;
          d < s.length && !c.isPropagationStopped();
          d++
        )
          for (
            j = s[d], c.currentTarget = j.elem, e = 0;
            e < j.matches.length && !c.isImmediatePropagationStopped();
            e++
          )
            (l = j.matches[e]),
              (q ||
                (!c.namespace && !l.namespace) ||
                (c.namespace_re && c.namespace_re.test(l.namespace))) &&
                ((c.data = l.data),
                (c.handleObj = l),
                (h = (
                  ($.event.special[l.origType] || {}).handle || l.handler
                ).apply(j.elem, p)),
                h !== b &&
                  ((c.result = h),
                  h === !1 && (c.preventDefault(), c.stopPropagation())));
        return r.postDispatch && r.postDispatch.call(this, c), c.result;
      }
    },
    props:
      "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, c) {
        var d,
          e,
          f,
          g = c.button,
          h = c.fromElement;
        return (
          null == a.pageX &&
            null != c.clientX &&
            ((d = a.target.ownerDocument || P),
            (e = d.documentElement),
            (f = d.body),
            (a.pageX =
              c.clientX +
              ((e && e.scrollLeft) || (f && f.scrollLeft) || 0) -
              ((e && e.clientLeft) || (f && f.clientLeft) || 0)),
            (a.pageY =
              c.clientY +
              ((e && e.scrollTop) || (f && f.scrollTop) || 0) -
              ((e && e.clientTop) || (f && f.clientTop) || 0))),
          !a.relatedTarget &&
            h &&
            (a.relatedTarget = h === a.target ? c.toElement : h),
          !a.which &&
            g !== b &&
            (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[$.expando]) return a;
      var b,
        c,
        d = a,
        e = $.event.fixHooks[a.type] || {},
        f = e.props ? this.props.concat(e.props) : this.props;
      for (a = $.Event(d), b = f.length; b; ) (c = f[--b]), (a[c] = d[c]);
      return (
        a.target || (a.target = d.srcElement || P),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        (a.metaKey = !!a.metaKey),
        e.filter ? e.filter(a, d) : a
      );
    },
    special: {
      ready: {
        setup: $.bindReady,
      },
      load: {
        noBubble: !0,
      },
      focus: {
        delegateType: "focusin",
      },
      blur: {
        delegateType: "focusout",
      },
      beforeunload: {
        setup: function (a, b, c) {
          $.isWindow(this) && (this.onbeforeunload = c);
        },
        teardown: function (a, b) {
          this.onbeforeunload === b && (this.onbeforeunload = null);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = $.extend(new $.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? $.event.trigger(e, null, b) : $.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    ($.event.handle = $.event.dispatch),
    ($.removeEvent = P.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, !1);
        }
      : function (a, b, c) {
          var d = "on" + b;
          a.detachEvent &&
            ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c));
        }),
    ($.Event = function (a, b) {
      return this instanceof $.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                a.returnValue === !1 ||
                (a.getPreventDefault && a.getPreventDefault())
                  ? g
                  : f))
            : (this.type = a),
          b && $.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || $.now()),
          (this[$.expando] = !0),
          void 0)
        : new $.Event(a, b);
    }),
    ($.Event.prototype = {
      preventDefault: function () {
        this.isDefaultPrevented = g;
        var a = this.originalEvent;
        a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      },
      stopPropagation: function () {
        this.isPropagationStopped = g;
        var a = this.originalEvent;
        a && (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = g), this.stopPropagation();
      },
      isDefaultPrevented: f,
      isPropagationStopped: f,
      isImmediatePropagationStopped: f,
    }),
    $.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
      },
      function (a, b) {
        $.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            f.selector;
            return (
              (!e || (e !== d && !$.contains(d, e))) &&
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    $.support.submitBubbles ||
      ($.event.special.submit = {
        setup: function () {
          return $.nodeName(this, "form")
            ? !1
            : void $.event.add(
                this,
                "click._submit keypress._submit",
                function (a) {
                  var c = a.target,
                    d =
                      $.nodeName(c, "input") || $.nodeName(c, "button")
                        ? c.form
                        : b;
                  d &&
                    !$._data(d, "_submit_attached") &&
                    ($.event.add(d, "submit._submit", function (a) {
                      a._submit_bubble = !0;
                    }),
                    $._data(d, "_submit_attached", !0));
                }
              );
        },
        postDispatch: function (a) {
          a._submit_bubble &&
            (delete a._submit_bubble,
            this.parentNode &&
              !a.isTrigger &&
              $.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function () {
          return $.nodeName(this, "form")
            ? !1
            : void $.event.remove(this, "._submit");
        },
      }),
    $.support.changeBubbles ||
      ($.event.special.change = {
        setup: function () {
          return Ba.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                ($.event.add(this, "propertychange._change", function (a) {
                  "checked" === a.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                $.event.add(this, "click._change", function (a) {
                  this._just_changed &&
                    !a.isTrigger &&
                    (this._just_changed = !1),
                    $.event.simulate("change", this, a, !0);
                })),
              !1)
            : void $.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                Ba.test(b.nodeName) &&
                  !$._data(b, "_change_attached") &&
                  ($.event.add(b, "change._change", function (a) {
                    this.parentNode &&
                      !a.isSimulated &&
                      !a.isTrigger &&
                      $.event.simulate("change", this.parentNode, a, !0);
                  }),
                  $._data(b, "_change_attached", !0));
              });
        },
        handle: function (a) {
          var b = a.target;
          return this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            ("radio" !== b.type && "checkbox" !== b.type)
            ? a.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return $.event.remove(this, "._change"), Ba.test(this.nodeName);
        },
      }),
    $.support.focusinBubbles ||
      $.each(
        {
          focus: "focusin",
          blur: "focusout",
        },
        function (a, b) {
          var c = 0,
            d = function (a) {
              $.event.simulate(b, a.target, $.event.fix(a), !0);
            };
          $.event.special[b] = {
            setup: function () {
              0 === c++ && P.addEventListener(a, d, !0);
            },
            teardown: function () {
              0 === --c && P.removeEventListener(a, d, !0);
            },
          };
        }
      ),
    $.fn.extend({
      on: function (a, c, d, e, g) {
        var h, i;
        if ("object" == typeof a) {
          "string" != typeof c && ((d = d || c), (c = b));
          for (i in a) this.on(i, c, d, a[i], g);
          return this;
        }
        if (
          (null == d && null == e
            ? ((e = c), (d = c = b))
            : null == e &&
              ("string" == typeof c
                ? ((e = d), (d = b))
                : ((e = d), (d = c), (c = b))),
          e === !1)
        )
          e = f;
        else if (!e) return this;
        return (
          1 === g &&
            ((h = e),
            (e = function (a) {
              return $().off(a), h.apply(this, arguments);
            }),
            (e.guid = h.guid || (h.guid = $.guid++))),
          this.each(function () {
            $.event.add(this, a, e, d, c);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, c, d) {
        var e, g;
        if (a && a.preventDefault && a.handleObj)
          return (
            (e = a.handleObj),
            $(a.delegateTarget).off(
              e.namespace ? e.origType + "." + e.namespace : e.origType,
              e.selector,
              e.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (g in a) this.off(g, c, a[g]);
          return this;
        }
        return (
          (c === !1 || "function" == typeof c) && ((d = c), (c = b)),
          d === !1 && (d = f),
          this.each(function () {
            $.event.remove(this, a, d, c);
          })
        );
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      live: function (a, b, c) {
        return $(this.context).on(a, this.selector, b, c), this;
      },
      die: function (a, b) {
        return $(this.context).off(a, this.selector || "**", b), this;
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 == arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
      trigger: function (a, b) {
        return this.each(function () {
          $.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        return this[0] ? $.event.trigger(a, b, this[0], !0) : void 0;
      },
      toggle: function (a) {
        var b = arguments,
          c = a.guid || $.guid++,
          d = 0,
          e = function (c) {
            var e = ($._data(this, "lastToggle" + a.guid) || 0) % d;
            return (
              $._data(this, "lastToggle" + a.guid, e + 1),
              c.preventDefault(),
              b[e].apply(this, arguments) || !1
            );
          };
        for (e.guid = c; d < b.length; ) b[d++].guid = c;
        return this.click(e);
      },
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    $.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        ($.fn[b] = function (a, c) {
          return (
            null == c && ((c = a), (a = null)),
            arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
          );
        }),
          Ea.test(b) && ($.event.fixHooks[b] = $.event.keyHooks),
          Fa.test(b) && ($.event.fixHooks[b] = $.event.mouseHooks);
      }
    ),
    (function (a, b) {
      function c(a, b, c, d) {
        for (var e = 0, f = b.length; f > e; e++) fa(a, b[e], c, d);
      }

      function d(a, b, d, e, f, g) {
        var h,
          i = ga.setFilters[b.toLowerCase()];
        return (
          i || fa.error(b),
          (a || !(h = f)) && c(a || "*", e, (h = []), f),
          h.length > 0 ? i(h, d, g) : []
        );
      }

      function e(a, e, f, g, h) {
        for (
          var i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q = 0,
            r = h.length,
            s = S.POS,
            t = new RegExp("^" + s.source + "(?!" + y + ")", "i"),
            u = function () {
              for (var a = 1, c = arguments.length - 2; c > a; a++)
                arguments[a] === b && (i[a] = b);
            };
          r > q;
          q++
        ) {
          for (s.exec(""), a = h[q], l = [], k = 0, m = g; (i = s.exec(a)); )
            (p = s.lastIndex = i.index + i[0].length),
              p > k &&
                ((o = a.slice(k, i.index)),
                (k = p),
                (n = [e]),
                I.test(o) && (m && (n = m), (m = g)),
                (j = O.test(o)) && (o = o.slice(0, -5).replace(I, "$&*")),
                i.length > 1 && i[0].replace(t, u),
                (m = d(o, i[1], i[2], n, m, j)));
          m
            ? ((l = l.concat(m)),
              (o = a.slice(k)) && ")" !== o
                ? I.test(o)
                  ? c(o, l, f, g)
                  : fa(o, e, f, g ? g.concat(m) : m)
                : w.apply(f, l))
            : fa(a, e, f, g);
        }
        return 1 === r ? f : fa.uniqueSort(f);
      }

      function f(a, b, c) {
        for (
          var d,
            e,
            f,
            g = [],
            h = 0,
            i = K.exec(a),
            j = !i.pop() && !i.pop(),
            k = (j && a.match(J)) || [""],
            l = ga.preFilter,
            m = ga.filter,
            n = !c && b !== p;
          null != (e = k[h]) && j;
          h++
        )
          for (g.push((d = [])), n && (e = " " + e); e; ) {
            (j = !1),
              (i = I.exec(e)) &&
                ((e = e.slice(i[0].length)),
                (j = d.push({
                  part: i.pop().replace(H, " "),
                  captures: i,
                })));
            for (f in m)
              (i = S[f].exec(e)) &&
                (!l[f] || (i = l[f](i, b, c))) &&
                ((e = e.slice(i.shift().length)),
                (j = d.push({
                  part: f,
                  captures: i,
                })));
            if (!j) break;
          }
        return j || fa.error(a), g;
      }

      function g(a, b, c) {
        var d = b.dir,
          e = u++;
        return (
          a ||
            (a = function (a) {
              return a === c;
            }),
          b.first
            ? function (b, c) {
                for (; (b = b[d]); ) if (1 === b.nodeType) return a(b, c) && b;
              }
            : function (b, c) {
                for (var f, g = e + "." + l, h = g + "." + k; (b = b[d]); )
                  if (1 === b.nodeType) {
                    if ((f = b[x]) === h) return b.sizset;
                    if ("string" == typeof f && 0 === f.indexOf(g)) {
                      if (b.sizset) return b;
                    } else {
                      if (((b[x] = h), a(b, c))) return (b.sizset = !0), b;
                      b.sizset = !1;
                    }
                  }
              }
        );
      }

      function h(a, b) {
        return a
          ? function (c, d) {
              var e = b(c, d);
              return e && a(e === !0 ? c : e, d);
            }
          : b;
      }

      function i(a, b, c) {
        for (var d, e, f = 0; (d = a[f]); f++)
          ga.relative[d.part]
            ? (e = g(e, ga.relative[d.part], b))
            : (d.captures.push(b, c),
              (e = h(e, ga.filter[d.part].apply(null, d.captures))));
        return e;
      }

      function j(a) {
        return function (b, c) {
          for (var d, e = 0; (d = a[e]); e++) if (d(b, c)) return !0;
          return !1;
        };
      }
      var k,
        l,
        m,
        n,
        o,
        p = a.document,
        q = p.documentElement,
        r = "undefined",
        s = !1,
        t = !0,
        u = 0,
        v = [].slice,
        w = [].push,
        x = ("sizcache" + Math.random()).replace(".", ""),
        y = "[\\x20\\t\\r\\n\\f]",
        z = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
        A = z.replace("w", "w#"),
        B = "([*^$|!~]?=)",
        C =
          "\\[" +
          y +
          "*(" +
          z +
          ")" +
          y +
          "*(?:" +
          B +
          y +
          "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
          A +
          ")|)|)" +
          y +
          "*\\]",
        D =
          ":(" +
          z +
          ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",
        E = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",
        F = y + "*([\\x20\\t\\r\\n\\f>+~])" + y + "*",
        G =
          "(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|" +
          C +
          "|" +
          D.replace(2, 7) +
          "|[^\\\\(),])+",
        H = new RegExp("^" + y + "+|((?:^|[^\\\\])(?:\\\\.)*)" + y + "+$", "g"),
        I = new RegExp("^" + F),
        J = new RegExp(G + "?(?=" + y + "*,|$)", "g"),
        K = new RegExp(
          "^(?:(?!,)(?:(?:^|,)" + y + "*" + G + ")*?|" + y + "*(.*?))(\\)|$)"
        ),
        L = new RegExp(G.slice(19, -6) + "\\x20\\t\\r\\n\\f>+~])+|" + F, "g"),
        M = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        N = /[\x20\t\r\n\f]*[+~]/,
        O = /:not\($/,
        P = /h\d/i,
        Q = /input|select|textarea|button/i,
        R = /\\(?!\\)/g,
        S = {
          ID: new RegExp("^#(" + z + ")"),
          CLASS: new RegExp("^\\.(" + z + ")"),
          NAME: new RegExp("^\\[name=['\"]?(" + z + ")['\"]?\\]"),
          TAG: new RegExp("^(" + z.replace("[-", "[-\\*") + ")"),
          ATTR: new RegExp("^" + C),
          PSEUDO: new RegExp("^" + D),
          CHILD: new RegExp(
            "^:(only|nth|last|first)-child(?:\\(" +
              y +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              y +
              "*(?:([+-]|)" +
              y +
              "*(\\d+)|))" +
              y +
              "*\\)|)",
            "i"
          ),
          POS: new RegExp(E, "ig"),
          needsContext: new RegExp("^" + y + "*[>+~]|" + E, "i"),
        },
        T = {},
        U = [],
        V = {},
        W = [],
        X = function (a) {
          return (a.sizzleFilter = !0), a;
        },
        Y = function (a) {
          return function (b) {
            return "input" === b.nodeName.toLowerCase() && b.type === a;
          };
        },
        Z = function (a) {
          return function (b) {
            var c = b.nodeName.toLowerCase();
            return ("input" === c || "button" === c) && b.type === a;
          };
        },
        _ = function (a) {
          var b = !1,
            c = p.createElement("div");
          try {
            b = a(c);
          } catch (d) {}
          return (c = null), b;
        },
        aa = _(function (a) {
          a.innerHTML = "<select></select>";
          var b = typeof a.lastChild.getAttribute("multiple");
          return "boolean" !== b && "string" !== b;
        }),
        ba = _(function (a) {
          (a.id = x + 0),
            (a.innerHTML =
              "<a name='" + x + "'></a><div name='" + x + "'></div>"),
            q.insertBefore(a, q.firstChild);
          var b =
            p.getElementsByName &&
            p.getElementsByName(x).length ===
              2 + p.getElementsByName(x + 0).length;
          return (o = !p.getElementById(x)), q.removeChild(a), b;
        }),
        ca = _(function (a) {
          return (
            a.appendChild(p.createComment("")),
            0 === a.getElementsByTagName("*").length
          );
        }),
        da = _(function (a) {
          return (
            (a.innerHTML = "<a href='#'></a>"),
            a.firstChild &&
              typeof a.firstChild.getAttribute !== r &&
              "#" === a.firstChild.getAttribute("href")
          );
        }),
        ea = _(function (a) {
          return (
            (a.innerHTML =
              "<div class='hidden e'></div><div class='hidden'></div>"),
            a.getElementsByClassName &&
            0 !== a.getElementsByClassName("e").length
              ? ((a.lastChild.className = "e"),
                1 !== a.getElementsByClassName("e").length)
              : !1
          );
        }),
        fa = function (a, b, c, d) {
          (c = c || []), (b = b || p);
          var e,
            f,
            g,
            h,
            i = b.nodeType;
          if (1 !== i && 9 !== i) return [];
          if (!a || "string" != typeof a) return c;
          if (((g = ia(b)), !g && !d && (e = M.exec(a))))
            if ((h = e[1])) {
              if (9 === i) {
                if (((f = b.getElementById(h)), !f || !f.parentNode)) return c;
                if (f.id === h) return c.push(f), c;
              } else if (
                b.ownerDocument &&
                (f = b.ownerDocument.getElementById(h)) &&
                ja(b, f) &&
                f.id === h
              )
                return c.push(f), c;
            } else {
              if (e[2])
                return w.apply(c, v.call(b.getElementsByTagName(a), 0)), c;
              if ((h = e[3]) && ea && b.getElementsByClassName)
                return w.apply(c, v.call(b.getElementsByClassName(h), 0)), c;
            }
          return ma(a, b, c, d, g);
        },
        ga = (fa.selectors = {
          cacheLength: 50,
          match: S,
          order: ["ID", "TAG"],
          attrHandle: {},
          createPseudo: X,
          find: {
            ID: o
              ? function (a, b, c) {
                  if (typeof b.getElementById !== r && !c) {
                    var d = b.getElementById(a);
                    return d && d.parentNode ? [d] : [];
                  }
                }
              : function (a, c, d) {
                  if (typeof c.getElementById !== r && !d) {
                    var e = c.getElementById(a);
                    return e
                      ? e.id === a ||
                        (typeof e.getAttributeNode !== r &&
                          e.getAttributeNode("id").value === a)
                        ? [e]
                        : b
                      : [];
                  }
                },
            TAG: ca
              ? function (a, b) {
                  return typeof b.getElementsByTagName !== r
                    ? b.getElementsByTagName(a)
                    : void 0;
                }
              : function (a, b) {
                  var c = b.getElementsByTagName(a);
                  if ("*" === a) {
                    for (var d, e = [], f = 0; (d = c[f]); f++)
                      1 === d.nodeType && e.push(d);
                    return e;
                  }
                  return c;
                },
          },
          relative: {
            ">": {
              dir: "parentNode",
              first: !0,
            },
            " ": {
              dir: "parentNode",
            },
            "+": {
              dir: "previousSibling",
              first: !0,
            },
            "~": {
              dir: "previousSibling",
            },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(R, "")),
                (a[3] = (a[4] || a[5] || "").replace(R, "")),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1]
                  ? (a[2] || fa.error(a[0]),
                    (a[3] = +(a[3]
                      ? a[4] + (a[5] || 1)
                      : 2 * ("even" === a[2] || "odd" === a[2]))),
                    (a[4] = +(a[6] + a[7] || "odd" === a[2])))
                  : a[2] && fa.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = a[4];
              return S.CHILD.test(a[0])
                ? null
                : (c &&
                    (b = K.exec(c)) &&
                    b.pop() &&
                    ((a[0] = a[0].slice(0, b[0].length - c.length - 1)),
                    (c = b[0].slice(0, -1))),
                  a.splice(2, 3, c || a[3]),
                  a);
            },
          },
          filter: {
            ID: o
              ? function (a) {
                  return (
                    (a = a.replace(R, "")),
                    function (b) {
                      return b.getAttribute("id") === a;
                    }
                  );
                }
              : function (a) {
                  return (
                    (a = a.replace(R, "")),
                    function (b) {
                      var c =
                        typeof b.getAttributeNode !== r &&
                        b.getAttributeNode("id");
                      return c && c.value === a;
                    }
                  );
                },
            TAG: function (a) {
              return "*" === a
                ? function () {
                    return !0;
                  }
                : ((a = a.replace(R, "").toLowerCase()),
                  function (b) {
                    return b.nodeName && b.nodeName.toLowerCase() === a;
                  });
            },
            CLASS: function (a) {
              var b = T[a];
              return (
                b ||
                  ((b = T[a] =
                    new RegExp("(^|" + y + ")" + a + "(" + y + "|$)")),
                  U.push(a),
                  U.length > ga.cacheLength && delete T[U.shift()]),
                function (a) {
                  return b.test(
                    a.className ||
                      (typeof a.getAttribute !== r &&
                        a.getAttribute("class")) ||
                      ""
                  );
                }
              );
            },
            ATTR: function (a, b, c) {
              return b
                ? function (d) {
                    var e = fa.attr(d, a),
                      f = e + "";
                    if (null == e) return "!=" === b;
                    switch (b) {
                      case "=":
                        return f === c;
                      case "!=":
                        return f !== c;
                      case "^=":
                        return c && 0 === f.indexOf(c);
                      case "*=":
                        return c && f.indexOf(c) > -1;
                      case "$=":
                        return c && f.substr(f.length - c.length) === c;
                      case "~=":
                        return (" " + f + " ").indexOf(c) > -1;
                      case "|=":
                        return f === c || f.substr(0, c.length + 1) === c + "-";
                    }
                  }
                : function (b) {
                    return null != fa.attr(b, a);
                  };
            },
            CHILD: function (a, b, c, d) {
              if ("nth" === a) {
                var e = u++;
                return function (a) {
                  var b,
                    f,
                    g = 0,
                    h = a;
                  if (1 === c && 0 === d) return !0;
                  if (((b = a.parentNode), b && (b[x] !== e || !a.sizset))) {
                    for (
                      h = b.firstChild;
                      h && (1 !== h.nodeType || ((h.sizset = ++g), h !== a));
                      h = h.nextSibling
                    );
                    b[x] = e;
                  }
                  return (
                    (f = a.sizset - d),
                    0 === c ? 0 === f : f % c === 0 && f / c >= 0
                  );
                };
              }
              return function (b) {
                var c = b;
                switch (a) {
                  case "only":
                  case "first":
                    for (; (c = c.previousSibling); )
                      if (1 === c.nodeType) return !1;
                    if ("first" === a) return !0;
                    c = b;
                  case "last":
                    for (; (c = c.nextSibling); )
                      if (1 === c.nodeType) return !1;
                    return !0;
                }
              };
            },
            PSEUDO: function (a, b, c, d) {
              var e = ga.pseudos[a] || ga.pseudos[a.toLowerCase()];
              return (
                e || fa.error("unsupported pseudo: " + a),
                e.sizzleFilter ? e(b, c, d) : e
              );
            },
          },
          pseudos: {
            not: X(function (a, b, c) {
              var d = la(a.replace(H, "$1"), b, c);
              return function (a) {
                return !d(a);
              };
            }),
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            parent: function (a) {
              return !ga.pseudos.empty(a);
            },
            empty: function (a) {
              var b;
              for (a = a.firstChild; a; ) {
                if (a.nodeName > "@" || 3 === (b = a.nodeType) || 4 === b)
                  return !1;
                a = a.nextSibling;
              }
              return !0;
            },
            contains: X(function (a) {
              return function (b) {
                return (b.textContent || b.innerText || ka(b)).indexOf(a) > -1;
              };
            }),
            has: X(function (a) {
              return function (b) {
                return fa(a, b).length > 0;
              };
            }),
            header: function (a) {
              return P.test(a.nodeName);
            },
            text: function (a) {
              var b, c;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === (b = a.type) &&
                (null == (c = a.getAttribute("type")) || c.toLowerCase() === b)
              );
            },
            radio: Y("radio"),
            checkbox: Y("checkbox"),
            file: Y("file"),
            password: Y("password"),
            image: Y("image"),
            submit: Z("submit"),
            reset: Z("reset"),
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            input: function (a) {
              return Q.test(a.nodeName);
            },
            focus: function (a) {
              var b = a.ownerDocument;
              return (
                a === b.activeElement &&
                (!b.hasFocus || b.hasFocus()) &&
                (!!a.type || !!a.href)
              );
            },
            active: function (a) {
              return a === a.ownerDocument.activeElement;
            },
          },
          setFilters: {
            first: function (a, b, c) {
              return c ? a.slice(1) : [a[0]];
            },
            last: function (a, b, c) {
              var d = a.pop();
              return c ? a : [d];
            },
            even: function (a, b, c) {
              for (var d = [], e = c ? 1 : 0, f = a.length; f > e; e += 2)
                d.push(a[e]);
              return d;
            },
            odd: function (a, b, c) {
              for (var d = [], e = c ? 0 : 1, f = a.length; f > e; e += 2)
                d.push(a[e]);
              return d;
            },
            lt: function (a, b, c) {
              return c ? a.slice(+b) : a.slice(0, +b);
            },
            gt: function (a, b, c) {
              return c ? a.slice(0, +b + 1) : a.slice(+b + 1);
            },
            eq: function (a, b, c) {
              var d = a.splice(+b, 1);
              return c ? a : d;
            },
          },
        });
      (ga.setFilters.nth = ga.setFilters.eq),
        (ga.filters = ga.pseudos),
        da ||
          (ga.attrHandle = {
            href: function (a) {
              return a.getAttribute("href", 2);
            },
            type: function (a) {
              return a.getAttribute("type");
            },
          }),
        ba &&
          (ga.order.push("NAME"),
          (ga.find.NAME = function (a, b) {
            return typeof b.getElementsByName !== r
              ? b.getElementsByName(a)
              : void 0;
          })),
        ea &&
          (ga.order.splice(1, 0, "CLASS"),
          (ga.find.CLASS = function (a, b, c) {
            return typeof b.getElementsByClassName === r || c
              ? void 0
              : b.getElementsByClassName(a);
          }));
      try {
        v.call(q.childNodes, 0)[0].nodeType;
      } catch (ha) {
        v = function (a) {
          for (var b, c = []; (b = this[a]); a++) c.push(b);
          return c;
        };
      }
      var ia = (fa.isXML = function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
        ja = (fa.contains = q.compareDocumentPosition
          ? function (a, b) {
              return !!(16 & a.compareDocumentPosition(b));
            }
          : q.contains
          ? function (a, b) {
              var c = 9 === a.nodeType ? a.documentElement : a,
                d = b.parentNode;
              return (
                a === d ||
                !!(d && 1 === d.nodeType && c.contains && c.contains(d))
              );
            }
          : function (a, b) {
              for (; (b = b.parentNode); ) if (b === a) return !0;
              return !1;
            }),
        ka = (fa.getText = function (a) {
          var b,
            c = "",
            d = 0,
            e = a.nodeType;
          if (e) {
            if (1 === e || 9 === e || 11 === e) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += ka(a);
            } else if (3 === e || 4 === e) return a.nodeValue;
          } else for (; (b = a[d]); d++) c += ka(b);
          return c;
        });
      (fa.attr = function (a, b) {
        var c,
          d = ia(a);
        return (
          d || (b = b.toLowerCase()),
          ga.attrHandle[b]
            ? ga.attrHandle[b](a)
            : aa || d
            ? a.getAttribute(b)
            : ((c = a.getAttributeNode(b)),
              c
                ? "boolean" == typeof a[b]
                  ? a[b]
                    ? b
                    : null
                  : c.specified
                  ? c.value
                  : null
                : null)
        );
      }),
        (fa.error = function (a) {
          throw new Error("Syntax error, unrecognized expression: " + a);
        }),
        [0, 0].sort(function () {
          return (t = 0);
        }),
        q.compareDocumentPosition
          ? (m = function (a, b) {
              return a === b
                ? ((s = !0), 0)
                : (
                    a.compareDocumentPosition && b.compareDocumentPosition
                      ? 4 & a.compareDocumentPosition(b)
                      : a.compareDocumentPosition
                  )
                ? -1
                : 1;
            })
          : ((m = function (a, b) {
              if (a === b) return (s = !0), 0;
              if (a.sourceIndex && b.sourceIndex)
                return a.sourceIndex - b.sourceIndex;
              var c,
                d,
                e = [],
                f = [],
                g = a.parentNode,
                h = b.parentNode,
                i = g;
              if (g === h) return n(a, b);
              if (!g) return -1;
              if (!h) return 1;
              for (; i; ) e.unshift(i), (i = i.parentNode);
              for (i = h; i; ) f.unshift(i), (i = i.parentNode);
              (c = e.length), (d = f.length);
              for (var j = 0; c > j && d > j; j++)
                if (e[j] !== f[j]) return n(e[j], f[j]);
              return j === c ? n(a, f[j], -1) : n(e[j], b, 1);
            }),
            (n = function (a, b, c) {
              if (a === b) return c;
              for (var d = a.nextSibling; d; ) {
                if (d === b) return -1;
                d = d.nextSibling;
              }
              return 1;
            })),
        (fa.uniqueSort = function (a) {
          var b,
            c = 1;
          if (m && ((s = t), a.sort(m), s))
            for (; (b = a[c]); c++) b === a[c - 1] && a.splice(c--, 1);
          return a;
        });
      var la = (fa.compile = function (a, b, c) {
        var d,
          e,
          g,
          h = V[a];
        if (h && h.context === b) return h;
        for (e = f(a, b, c), g = 0; (d = e[g]); g++) e[g] = i(d, b, c);
        return (
          (h = V[a] = j(e)),
          (h.context = b),
          (h.runs = h.dirruns = 0),
          W.push(a),
          W.length > ga.cacheLength && delete V[W.shift()],
          h
        );
      });
      (fa.matches = function (a, b) {
        return fa(a, null, null, b);
      }),
        (fa.matchesSelector = function (a, b) {
          return fa(b, null, null, [a]).length > 0;
        });
      var ma = function (a, b, c, d, f) {
        a = a.replace(H, "$1");
        var g,
          h,
          i,
          j,
          m,
          n,
          o,
          p,
          q,
          r = a.match(J),
          s = a.match(L),
          t = b.nodeType;
        if (S.POS.test(a)) return e(a, b, c, d, r);
        if (d) g = v.call(d, 0);
        else if (r && 1 === r.length) {
          if (s.length > 1 && 9 === t && !f && (r = S.ID.exec(s[0]))) {
            if (((b = ga.find.ID(r[1], b, f)[0]), !b)) return c;
            a = a.slice(s.shift().length);
          }
          for (
            p = ((r = N.exec(s[0])) && !r.index && b.parentNode) || b,
              q = s.pop(),
              n = q.split(":not")[0],
              i = 0,
              j = ga.order.length;
            j > i;
            i++
          )
            if (((o = ga.order[i]), (r = S[o].exec(n)))) {
              if (
                ((g = ga.find[o]((r[1] || "").replace(R, ""), p, f)), null == g)
              )
                continue;
              n === q &&
                ((a = a.slice(0, a.length - q.length) + n.replace(S[o], "")),
                a || w.apply(c, v.call(g, 0)));
              break;
            }
        }
        if (a)
          for (
            h = la(a, b, f),
              l = h.dirruns++,
              null == g &&
                (g = ga.find.TAG("*", (N.test(a) && b.parentNode) || b)),
              i = 0;
            (m = g[i]);
            i++
          )
            (k = h.runs++), h(m, b) && c.push(m);
        return c;
      };
      p.querySelectorAll &&
        (function () {
          var a,
            b = ma,
            c = /'|\\/g,
            d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            e = [],
            f = [":active"],
            g =
              q.matchesSelector ||
              q.mozMatchesSelector ||
              q.webkitMatchesSelector ||
              q.oMatchesSelector ||
              q.msMatchesSelector;
          _(function (a) {
            (a.innerHTML = "<select><option selected></option></select>"),
              a.querySelectorAll("[selected]").length ||
                e.push(
                  "\\[" +
                    y +
                    "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"
                ),
              a.querySelectorAll(":checked").length || e.push(":checked");
          }),
            _(function (a) {
              (a.innerHTML = "<p test=''></p>"),
                a.querySelectorAll("[test^='']").length &&
                  e.push("[*^$]=" + y + "*(?:\"\"|'')"),
                (a.innerHTML = "<input type='hidden'>"),
                a.querySelectorAll(":enabled").length ||
                  e.push(":enabled", ":disabled");
            }),
            (e = e.length && new RegExp(e.join("|"))),
            (ma = function (a, d, f, g, h) {
              if (!(g || h || (e && e.test(a))))
                if (9 === d.nodeType)
                  try {
                    return w.apply(f, v.call(d.querySelectorAll(a), 0)), f;
                  } catch (i) {}
                else if (
                  1 === d.nodeType &&
                  "object" !== d.nodeName.toLowerCase()
                ) {
                  var j = d.getAttribute("id"),
                    k = j || x,
                    l = (N.test(a) && d.parentNode) || d;
                  j ? (k = k.replace(c, "\\$&")) : d.setAttribute("id", k);
                  try {
                    return (
                      w.apply(
                        f,
                        v.call(
                          l.querySelectorAll(
                            a.replace(J, "[id='" + k + "'] $&")
                          ),
                          0
                        )
                      ),
                      f
                    );
                  } catch (i) {
                  } finally {
                    j || d.removeAttribute("id");
                  }
                }
              return b(a, d, f, g, h);
            }),
            g &&
              (_(function (b) {
                a = g.call(b, "div");
                try {
                  g.call(b, "[test!='']:sizzle"), f.push(ga.match.PSEUDO);
                } catch (c) {}
              }),
              (f = new RegExp(f.join("|"))),
              (fa.matchesSelector = function (b, c) {
                if (
                  ((c = c.replace(d, "='$1']")),
                  !(ia(b) || f.test(c) || (e && e.test(c))))
                )
                  try {
                    var h = g.call(b, c);
                    if (h || a || (b.document && 11 !== b.document.nodeType))
                      return h;
                  } catch (i) {}
                return fa(c, null, null, [b]).length > 0;
              }));
        })(),
        (fa.attr = $.attr),
        ($.find = fa),
        ($.expr = fa.selectors),
        ($.expr[":"] = $.expr.pseudos),
        ($.unique = fa.uniqueSort),
        ($.text = fa.getText),
        ($.isXMLDoc = fa.isXML),
        ($.contains = fa.contains);
    })(a);
  var Ia = /Until$/,
    Ja = /^(?:parents|prev(?:Until|All))/,
    Ka = /^.[^:#\[\.,]*$/,
    La = $.expr.match.needsContext,
    Ma = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0,
    };
  $.fn.extend({
    find: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = this;
      if ("string" != typeof a)
        return $(a).filter(function () {
          for (b = 0, c = h.length; c > b; b++)
            if ($.contains(h[b], this)) return !0;
        });
      for (
        g = this.pushStack("", "find", a), b = 0, c = this.length;
        c > b;
        b++
      )
        if (((d = g.length), $.find(a, this[b], g), b > 0))
          for (e = d; e < g.length; e++)
            for (f = 0; d > f; f++)
              if (g[f] === g[e]) {
                g.splice(e--, 1);
                break;
              }
      return g;
    },
    has: function (a) {
      var b,
        c = $(a, this),
        d = c.length;
      return this.filter(function () {
        for (b = 0; d > b; b++) if ($.contains(this, c[b])) return !0;
      });
    },
    not: function (a) {
      return this.pushStack(j(this, a, !1), "not", a);
    },
    filter: function (a) {
      return this.pushStack(j(this, a, !0), "filter", a);
    },
    is: function (a) {
      return (
        !!a &&
        ("string" == typeof a
          ? La.test(a)
            ? $(a, this.context).index(this[0]) >= 0
            : $.filter(a, this).length > 0
          : this.filter(a).length > 0)
      );
    },
    closest: function (a, b) {
      for (
        var c,
          d = 0,
          e = this.length,
          f = [],
          g = La.test(a) || "string" != typeof a ? $(a, b || this.context) : 0;
        e > d;
        d++
      )
        for (
          c = this[d];
          c && c.ownerDocument && c !== b && 11 !== c.nodeType;

        ) {
          if (g ? g.index(c) > -1 : $.find.matchesSelector(c, a)) {
            f.push(c);
            break;
          }
          c = c.parentNode;
        }
      return (
        (f = f.length > 1 ? $.unique(f) : f), this.pushStack(f, "closest", a)
      );
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? $.inArray(this[0], $(a))
          : $.inArray(a.jquery ? a[0] : a, this)
        : this[0] && this[0].parentNode
        ? this.prevAll().length
        : -1;
    },
    add: function (a, b) {
      var c =
          "string" == typeof a
            ? $(a, b)
            : $.makeArray(a && a.nodeType ? [a] : a),
        d = $.merge(this.get(), c);
      return this.pushStack(h(c[0]) || h(d[0]) ? d : $.unique(d));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  }),
    ($.fn.andSelf = $.fn.addBack),
    $.each(
      {
        parent: function (a) {
          var b = a.parentNode;
          return b && 11 !== b.nodeType ? b : null;
        },
        parents: function (a) {
          return $.dir(a, "parentNode");
        },
        parentsUntil: function (a, b, c) {
          return $.dir(a, "parentNode", c);
        },
        next: function (a) {
          return i(a, "nextSibling");
        },
        prev: function (a) {
          return i(a, "previousSibling");
        },
        nextAll: function (a) {
          return $.dir(a, "nextSibling");
        },
        prevAll: function (a) {
          return $.dir(a, "previousSibling");
        },
        nextUntil: function (a, b, c) {
          return $.dir(a, "nextSibling", c);
        },
        prevUntil: function (a, b, c) {
          return $.dir(a, "previousSibling", c);
        },
        siblings: function (a) {
          return $.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return $.sibling(a.firstChild);
        },
        contents: function (a) {
          return $.nodeName(a, "iframe")
            ? a.contentDocument || a.contentWindow.document
            : $.merge([], a.childNodes);
        },
      },
      function (a, b) {
        $.fn[a] = function (c, d) {
          var e = $.map(this, b, c);
          return (
            Ia.test(a) || (d = c),
            d && "string" == typeof d && (e = $.filter(d, e)),
            (e = this.length > 1 && !Ma[a] ? $.unique(e) : e),
            this.length > 1 && Ja.test(a) && (e = e.reverse()),
            this.pushStack(e, a, V.call(arguments).join(","))
          );
        };
      }
    ),
    $.extend({
      filter: function (a, b, c) {
        return (
          c && (a = ":not(" + a + ")"),
          1 === b.length
            ? $.find.matchesSelector(b[0], a)
              ? [b[0]]
              : []
            : $.find.matches(a, b)
        );
      },
      dir: function (a, c, d) {
        for (
          var e = [], f = a[c];
          f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !$(f).is(d));

        )
          1 === f.nodeType && e.push(f), (f = f[c]);
        return e;
      },
      sibling: function (a, b) {
        for (var c = []; a; a = a.nextSibling)
          1 === a.nodeType && a !== b && c.push(a);
        return c;
      },
    });
  var Na =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Oa = / jQuery\d+="(?:null|\d+)"/g,
    Pa = /^\s+/,
    Qa =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Ra = /<([\w:]+)/,
    Sa = /<tbody/i,
    Ta = /<|&#?\w+;/,
    Ua = /<(?:script|style|link)/i,
    Va = /<(?:script|object|embed|option|style)/i,
    Wa = new RegExp("<(?:" + Na + ")[\\s/>]", "i"),
    Xa = /^(?:checkbox|radio)$/,
    Ya = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Za = /\/(java|ecma)script/i,
    $a = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
    _a = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""],
    },
    ab = k(P),
    bb = ab.appendChild(P.createElement("div"));
  (_a.optgroup = _a.option),
    (_a.tbody = _a.tfoot = _a.colgroup = _a.caption = _a.thead),
    (_a.th = _a.td),
    $.support.htmlSerialize || (_a._default = [1, "X<div>", "</div>"]),
    $.fn.extend({
      text: function (a) {
        return $.access(
          this,
          function (a) {
            return a === b
              ? $.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || P).createTextNode(a)
                );
          },
          null,
          a,
          arguments.length
        );
      },
      wrapAll: function (a) {
        if ($.isFunction(a))
          return this.each(function (b) {
            $(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = $(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                for (
                  var a = this;
                  a.firstChild && 1 === a.firstChild.nodeType;

                )
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return $.isFunction(a)
          ? this.each(function (b) {
              $(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = $(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = $.isFunction(a);
        return this.each(function (c) {
          $(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            $.nodeName(this, "body") || $(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function () {
        return this.domManip(arguments, !0, function (a) {
          (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(a);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (a) {
          (1 === this.nodeType || 11 === this.nodeType) &&
            this.insertBefore(a, this.firstChild);
        });
      },
      before: function () {
        if (!h(this[0]))
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this);
          });
        if (arguments.length) {
          var a = $.clean(arguments);
          return this.pushStack($.merge(a, this), "before", this.selector);
        }
      },
      after: function () {
        if (!h(this[0]))
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this.nextSibling);
          });
        if (arguments.length) {
          var a = $.clean(arguments);
          return this.pushStack($.merge(this, a), "after", this.selector);
        }
      },
      remove: function (a, b) {
        for (var c, d = 0; null != (c = this[d]); d++)
          (!a || $.filter(a, [c]).length) &&
            (!b &&
              1 === c.nodeType &&
              ($.cleanData(c.getElementsByTagName("*")), $.cleanData([c])),
            c.parentNode && c.parentNode.removeChild(c));
        return this;
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          for (
            1 === a.nodeType && $.cleanData(a.getElementsByTagName("*"));
            a.firstChild;

          )
            a.removeChild(a.firstChild);
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return $.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return $.access(
          this,
          function (a) {
            var c = this[0] || {},
              d = 0,
              e = this.length;
            if (a === b)
              return 1 === c.nodeType ? c.innerHTML.replace(Oa, "") : b;
            if (
              "string" == typeof a &&
              !Ua.test(a) &&
              ($.support.htmlSerialize || !Wa.test(a)) &&
              ($.support.leadingWhitespace || !Pa.test(a)) &&
              !_a[(Ra.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = a.replace(Qa, "<$1></$2>");
              try {
                for (; e > d; d++)
                  (c = this[d] || {}),
                    1 === c.nodeType &&
                      ($.cleanData(c.getElementsByTagName("*")),
                      (c.innerHTML = a));
                c = 0;
              } catch (f) {}
            }
            c && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function (a) {
        return h(this[0])
          ? this.length
            ? this.pushStack($($.isFunction(a) ? a() : a), "replaceWith", a)
            : this
          : $.isFunction(a)
          ? this.each(function (b) {
              var c = $(this),
                d = c.html();
              c.replaceWith(a.call(this, b, d));
            })
          : ("string" != typeof a && (a = $(a).detach()),
            this.each(function () {
              var b = this.nextSibling,
                c = this.parentNode;
              $(this).remove(), b ? $(b).before(a) : $(c).append(a);
            }));
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, c, d) {
        a = [].concat.apply([], a);
        var e,
          f,
          g,
          h,
          i = 0,
          j = a[0],
          k = [],
          m = this.length;
        if (
          !$.support.checkClone &&
          m > 1 &&
          "string" == typeof j &&
          Ya.test(j)
        )
          return this.each(function () {
            $(this).domManip(a, c, d);
          });
        if ($.isFunction(j))
          return this.each(function (e) {
            var f = $(this);
            (a[0] = j.call(this, e, c ? f.html() : b)), f.domManip(a, c, d);
          });
        if (this[0]) {
          if (
            ((e = $.buildFragment(a, this, k)),
            (g = e.fragment),
            (f = g.firstChild),
            1 === g.childNodes.length && (g = f),
            f)
          )
            for (
              c = c && $.nodeName(f, "tr"), h = e.cacheable || m - 1;
              m > i;
              i++
            )
              d.call(
                c && $.nodeName(this[i], "table")
                  ? l(this[i], "tbody")
                  : this[i],
                i === h ? g : $.clone(g, !0, !0)
              );
          (g = f = null),
            k.length &&
              $.each(k, function (a, b) {
                b.src
                  ? $.ajax
                    ? $.ajax({
                        url: b.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0,
                      })
                    : $.error("no ajax")
                  : $.globalEval(
                      (b.text || b.textContent || b.innerHTML || "").replace(
                        $a,
                        ""
                      )
                    ),
                  b.parentNode && b.parentNode.removeChild(b);
              });
        }
        return this;
      },
    }),
    ($.buildFragment = function (a, c, d) {
      var e,
        f,
        g,
        h = a[0];
      return (
        (c = c || P),
        (c = (c[0] || c).ownerDocument || c[0] || c),
        "undefined" == typeof c.createDocumentFragment && (c = P),
        1 === a.length &&
          "string" == typeof h &&
          h.length < 512 &&
          c === P &&
          "<" === h.charAt(0) &&
          !Va.test(h) &&
          ($.support.checkClone || !Ya.test(h)) &&
          ($.support.html5Clone || !Wa.test(h)) &&
          ((f = !0), (e = $.fragments[h]), (g = e !== b)),
        e ||
          ((e = c.createDocumentFragment()),
          $.clean(a, c, e, d),
          f && ($.fragments[h] = g && e)),
        {
          fragment: e,
          cacheable: f,
        }
      );
    }),
    ($.fragments = {}),
    $.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        $.fn[a] = function (c) {
          var d,
            e = 0,
            f = [],
            g = $(c),
            h = g.length,
            i = 1 === this.length && this[0].parentNode;
          if (
            (null == i ||
              (i && 11 === i.nodeType && 1 === i.childNodes.length)) &&
            1 === h
          )
            return g[b](this[0]), this;
          for (; h > e; e++)
            (d = (e > 0 ? this.clone(!0) : this).get()),
              $(g[e])[b](d),
              (f = f.concat(d));
          return this.pushStack(f, a, g.selector);
        };
      }
    ),
    $.extend({
      clone: function (a, b, c) {
        var d, e, f, g;
        if (
          ($.support.html5Clone ||
          $.isXMLDoc(a) ||
          !Wa.test("<" + a.nodeName + ">")
            ? (g = a.cloneNode(!0))
            : ((bb.innerHTML = a.outerHTML),
              bb.removeChild((g = bb.firstChild))),
          !(
            ($.support.noCloneEvent && $.support.noCloneChecked) ||
            (1 !== a.nodeType && 11 !== a.nodeType) ||
            $.isXMLDoc(a)
          ))
        )
          for (n(a, g), d = o(a), e = o(g), f = 0; d[f]; ++f)
            e[f] && n(d[f], e[f]);
        if (b && (m(a, g), c))
          for (d = o(a), e = o(g), f = 0; d[f]; ++f) m(d[f], e[f]);
        return (d = e = null), g;
      },
      clean: function (a, b, c, d) {
        var e,
          f,
          g,
          h,
          i,
          j,
          l,
          m,
          n,
          o,
          q,
          r = 0,
          s = [];
        for (
          (b && "undefined" != typeof b.createDocumentFragment) || (b = P),
            f = b === P && ab;
          null != (g = a[r]);
          r++
        )
          if (("number" == typeof g && (g += ""), g)) {
            if ("string" == typeof g)
              if (Ta.test(g)) {
                for (
                  f = f || k(b),
                    l = l || f.appendChild(b.createElement("div")),
                    g = g.replace(Qa, "<$1></$2>"),
                    h = (Ra.exec(g) || ["", ""])[1].toLowerCase(),
                    i = _a[h] || _a._default,
                    j = i[0],
                    l.innerHTML = i[1] + g + i[2];
                  j--;

                )
                  l = l.lastChild;
                if (!$.support.tbody)
                  for (
                    m = Sa.test(g),
                      n =
                        "table" !== h || m
                          ? "<table>" !== i[1] || m
                            ? []
                            : l.childNodes
                          : l.firstChild && l.firstChild.childNodes,
                      e = n.length - 1;
                    e >= 0;
                    --e
                  )
                    $.nodeName(n[e], "tbody") &&
                      !n[e].childNodes.length &&
                      n[e].parentNode.removeChild(n[e]);
                !$.support.leadingWhitespace &&
                  Pa.test(g) &&
                  l.insertBefore(b.createTextNode(Pa.exec(g)[0]), l.firstChild),
                  (g = l.childNodes),
                  (l = f.lastChild);
              } else g = b.createTextNode(g);
            g.nodeType ? s.push(g) : (s = $.merge(s, g));
          }
        if (
          (l && (f.removeChild(l), (g = l = f = null)),
          !$.support.appendChecked)
        )
          for (r = 0; null != (g = s[r]); r++)
            $.nodeName(g, "input")
              ? p(g)
              : "undefined" != typeof g.getElementsByTagName &&
                $.grep(g.getElementsByTagName("input"), p);
        if (c)
          for (
            o = function (a) {
              return !a.type || Za.test(a.type)
                ? d
                  ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a)
                  : c.appendChild(a)
                : void 0;
            },
              r = 0;
            null != (g = s[r]);
            r++
          )
            ($.nodeName(g, "script") && o(g)) ||
              (c.appendChild(g),
              "undefined" != typeof g.getElementsByTagName &&
                ((q = $.grep($.merge([], g.getElementsByTagName("script")), o)),
                s.splice.apply(s, [r + 1, 0].concat(q)),
                (r += q.length)));
        return s;
      },
      cleanData: function (a, b) {
        for (
          var c,
            d,
            e,
            f,
            g = 0,
            h = $.expando,
            i = $.cache,
            j = $.support.deleteExpando,
            k = $.event.special;
          null != (e = a[g]);
          g++
        )
          if ((b || $.acceptData(e)) && ((d = e[h]), (c = d && i[d]))) {
            if (c.events)
              for (f in c.events)
                k[f] ? $.event.remove(e, f) : $.removeEvent(e, f, c.handle);
            i[d] &&
              (delete i[d],
              j
                ? delete e[h]
                : e.removeAttribute
                ? e.removeAttribute(h)
                : (e[h] = null),
              $.deletedIds.push(d));
          }
      },
    }),
    (function () {
      var a, b;
      ($.uaMatch = function (a) {
        a = a.toLowerCase();
        var b =
          /(chrome)[ \/]([\w.]+)/.exec(a) ||
          /(webkit)[ \/]([\w.]+)/.exec(a) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) ||
          /(msie) ([\w.]+)/.exec(a) ||
          (a.indexOf("compatible") < 0 &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)) ||
          [];
        return {
          browser: b[1] || "",
          version: b[2] || "0",
        };
      }),
        (a = $.uaMatch(R.userAgent)),
        (b = {}),
        a.browser && ((b[a.browser] = !0), (b.version = a.version)),
        b.webkit && (b.safari = !0),
        ($.browser = b),
        ($.sub = function () {
          function a(b, c) {
            return new a.fn.init(b, c);
          }
          $.extend(!0, a, this),
            (a.superclass = this),
            (a.fn = a.prototype = this()),
            (a.fn.constructor = a),
            (a.sub = this.sub),
            (a.fn.init = function c(c, d) {
              return (
                d && d instanceof $ && !(d instanceof a) && (d = a(d)),
                $.fn.init.call(this, c, d, b)
              );
            }),
            (a.fn.init.prototype = a.fn);
          var b = a(P);
          return a;
        });
    })();
  var cb,
    db,
    eb,
    fb = /alpha\([^)]*\)/i,
    gb = /opacity=([^)]*)/,
    hb = /^(top|right|bottom|left)$/,
    ib = /^margin/,
    jb = new RegExp("^(" + _ + ")(.*)$", "i"),
    kb = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
    lb = new RegExp("^([-+])=(" + _ + ")", "i"),
    mb = {},
    nb = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    },
    ob = {
      letterSpacing: 0,
      fontWeight: 400,
      lineHeight: 1,
    },
    pb = ["Top", "Right", "Bottom", "Left"],
    qb = ["Webkit", "O", "Moz", "ms"],
    rb = $.fn.toggle;
  $.fn.extend({
    css: function (a, c) {
      return $.access(
        this,
        function (a, c, d) {
          return d !== b ? $.style(a, c, d) : $.css(a, c);
        },
        a,
        c,
        arguments.length > 1
      );
    },
    show: function () {
      return s(this, !0);
    },
    hide: function () {
      return s(this);
    },
    toggle: function (a, b) {
      var c = "boolean" == typeof a;
      return $.isFunction(a) && $.isFunction(b)
        ? rb.apply(this, arguments)
        : this.each(function () {
            (c ? a : r(this)) ? $(this).show() : $(this).hide();
          });
    },
  }),
    $.extend({
      cssHooks: {
        opacity: {
          get: function (a, b) {
            if (b) {
              var c = cb(a, "opacity");
              return "" === c ? "1" : c;
            }
          },
        },
      },
      cssNumber: {
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {
        float: $.support.cssFloat ? "cssFloat" : "styleFloat",
      },
      style: function (a, c, d, e) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var f,
            g,
            h,
            i = $.camelCase(c),
            j = a.style;
          if (
            ((c = $.cssProps[i] || ($.cssProps[i] = q(j, i))),
            (h = $.cssHooks[c] || $.cssHooks[i]),
            d === b)
          )
            return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
          if (
            ((g = typeof d),
            "string" === g &&
              (f = lb.exec(d)) &&
              ((d = (f[1] + 1) * f[2] + parseFloat($.css(a, c))),
              (g = "number")),
            !(
              null == d ||
              ("number" === g && isNaN(d)) ||
              ("number" === g && !$.cssNumber[i] && (d += "px"),
              h && "set" in h && (d = h.set(a, d, e)) === b)
            ))
          )
            try {
              j[c] = d;
            } catch (k) {}
        }
      },
      css: function (a, c, d, e) {
        var f,
          g,
          h,
          i = $.camelCase(c);
        return (
          (c = $.cssProps[i] || ($.cssProps[i] = q(a.style, i))),
          (h = $.cssHooks[c] || $.cssHooks[i]),
          h && "get" in h && (f = h.get(a, !0, e)),
          f === b && (f = cb(a, c)),
          "normal" === f && c in ob && (f = ob[c]),
          d || e !== b
            ? ((g = parseFloat(f)), d || $.isNumeric(g) ? g || 0 : f)
            : f
        );
      },
      swap: function (a, b, c) {
        var d,
          e,
          f = {};
        for (e in b) (f[e] = a.style[e]), (a.style[e] = b[e]);
        d = c.call(a);
        for (e in b) a.style[e] = f[e];
        return d;
      },
    }),
    a.getComputedStyle
      ? (cb = function (a, b) {
          var c,
            d,
            e,
            f,
            g = getComputedStyle(a, null),
            h = a.style;
          return (
            g &&
              ((c = g[b]),
              "" === c &&
                !$.contains(a.ownerDocument.documentElement, a) &&
                (c = $.style(a, b)),
              kb.test(c) &&
                ib.test(b) &&
                ((d = h.width),
                (e = h.minWidth),
                (f = h.maxWidth),
                (h.minWidth = h.maxWidth = h.width = c),
                (c = g.width),
                (h.width = d),
                (h.minWidth = e),
                (h.maxWidth = f))),
            c
          );
        })
      : P.documentElement.currentStyle &&
        (cb = function (a, b) {
          var c,
            d,
            e = a.currentStyle && a.currentStyle[b],
            f = a.style;
          return (
            null == e && f && f[b] && (e = f[b]),
            kb.test(e) &&
              !hb.test(b) &&
              ((c = f.left),
              (d = a.runtimeStyle && a.runtimeStyle.left),
              d && (a.runtimeStyle.left = a.currentStyle.left),
              (f.left = "fontSize" === b ? "1em" : e),
              (e = f.pixelLeft + "px"),
              (f.left = c),
              d && (a.runtimeStyle.left = d)),
            "" === e ? "auto" : e
          );
        }),
    $.each(["height", "width"], function (a, b) {
      $.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? 0 !== a.offsetWidth || "none" !== cb(a, "display")
              ? v(a, b, d)
              : $.swap(a, nb, function () {
                  return v(a, b, d);
                })
            : void 0;
        },
        set: function (a, c, d) {
          return t(
            a,
            c,
            d
              ? u(
                  a,
                  b,
                  d,
                  $.support.boxSizing && "border-box" === $.css(a, "boxSizing")
                )
              : 0
          );
        },
      };
    }),
    $.support.opacity ||
      ($.cssHooks.opacity = {
        get: function (a, b) {
          return gb.test(
            (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : b
            ? "1"
            : "";
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = $.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
            f = (d && d.filter) || c.filter || "";
          (c.zoom = 1),
            (b >= 1 &&
              "" === $.trim(f.replace(fb, "")) &&
              c.removeAttribute &&
              (c.removeAttribute("filter"), d && !d.filter)) ||
              (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e);
        },
      }),
    $(function () {
      $.support.reliableMarginRight ||
        ($.cssHooks.marginRight = {
          get: function (a, b) {
            return $.swap(
              a,
              {
                display: "inline-block",
              },
              function () {
                return b ? cb(a, "marginRight") : void 0;
              }
            );
          },
        }),
        !$.support.pixelPosition &&
          $.fn.position &&
          $.each(["top", "left"], function (a, b) {
            $.cssHooks[b] = {
              get: function (a, c) {
                if (c) {
                  var d = cb(a, b);
                  return kb.test(d) ? $(a).position()[b] + "px" : d;
                }
              },
            };
          });
    }),
    $.expr &&
      $.expr.filters &&
      (($.expr.filters.hidden = function (a) {
        return (
          (0 === a.offsetWidth && 0 === a.offsetHeight) ||
          (!$.support.reliableHiddenOffsets &&
            "none" === ((a.style && a.style.display) || cb(a, "display")))
        );
      }),
      ($.expr.filters.visible = function (a) {
        return !$.expr.filters.hidden(a);
      })),
    $.each(
      {
        margin: "",
        padding: "",
        border: "Width",
      },
      function (a, b) {
        ($.cssHooks[a + b] = {
          expand: function (c) {
            var d,
              e = "string" == typeof c ? c.split(" ") : [c],
              f = {};
            for (d = 0; 4 > d; d++) f[a + pb[d] + b] = e[d] || e[d - 2] || e[0];
            return f;
          },
        }),
          ib.test(a) || ($.cssHooks[a + b].set = t);
      }
    );
  var sb = /%20/g,
    tb = /\[\]$/,
    ub = /\r?\n/g,
    vb =
      /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    wb = /^(?:select|textarea)/i;
  $.fn.extend({
    serialize: function () {
      return $.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        return this.elements ? $.makeArray(this.elements) : this;
      })
        .filter(function () {
          return (
            this.name &&
            !this.disabled &&
            (this.checked || wb.test(this.nodeName) || vb.test(this.type))
          );
        })
        .map(function (a, b) {
          var c = $(this).val();
          return null == c
            ? null
            : $.isArray(c)
            ? $.map(c, function (a, c) {
                return {
                  name: b.name,
                  value: a.replace(ub, "\r\n"),
                };
              })
            : {
                name: b.name,
                value: c.replace(ub, "\r\n"),
              };
        })
        .get();
    },
  }),
    ($.param = function (a, c) {
      var d,
        e = [],
        f = function (a, b) {
          (b = $.isFunction(b) ? b() : null == b ? "" : b),
            (e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
        };
      if (
        (c === b && (c = $.ajaxSettings && $.ajaxSettings.traditional),
        $.isArray(a) || (a.jquery && !$.isPlainObject(a)))
      )
        $.each(a, function () {
          f(this.name, this.value);
        });
      else for (d in a) x(d, a[d], c, f);
      return e.join("&").replace(sb, "+");
    });
  var xb,
    yb,
    zb = /#.*$/,
    Ab = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Bb = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    Cb = /^(?:GET|HEAD)$/,
    Db = /^\/\//,
    Eb = /\?/,
    Fb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    Gb = /([?&])_=[^&]*/,
    Hb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Ib = $.fn.load,
    Jb = {},
    Kb = {},
    Lb = ["*/"] + ["*"];
  try {
    xb = Q.href;
  } catch (Mb) {
    (xb = P.createElement("a")), (xb.href = ""), (xb = xb.href);
  }
  (yb = Hb.exec(xb.toLowerCase()) || []),
    ($.fn.load = function (a, c, d) {
      if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
      if (!this.length) return this;
      var e,
        f,
        g,
        h = this,
        i = a.indexOf(" ");
      return (
        i >= 0 && ((e = a.slice(i, a.length)), (a = a.slice(0, i))),
        $.isFunction(c)
          ? ((d = c), (c = b))
          : "object" == typeof c && (f = "POST"),
        $.ajax({
          url: a,
          type: f,
          dataType: "html",
          data: c,
          complete: function (a, b) {
            d && h.each(d, g || [a.responseText, b, a]);
          },
        }).done(function (a) {
          (g = arguments),
            h.html(e ? $("<div>").append(a.replace(Fb, "")).find(e) : a);
        }),
        this
      );
    }),
    $.each(
      "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
        " "
      ),
      function (a, b) {
        $.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    $.each(["get", "post"], function (a, c) {
      $[c] = function (a, d, e, f) {
        return (
          $.isFunction(d) && ((f = f || e), (e = d), (d = b)),
          $.ajax({
            type: c,
            url: a,
            data: d,
            success: e,
            dataType: f,
          })
        );
      };
    }),
    $.extend({
      getScript: function (a, c) {
        return $.get(a, b, c, "script");
      },
      getJSON: function (a, b, c) {
        return $.get(a, b, c, "json");
      },
      ajaxSetup: function (a, b) {
        return (
          b ? A(a, $.ajaxSettings) : ((b = a), (a = $.ajaxSettings)), A(a, b), a
        );
      },
      ajaxSettings: {
        url: xb,
        isLocal: Bb.test(yb[1]),
        global: !0,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        processData: !0,
        async: !0,
        accepts: {
          xml: "application/xml, text/xml",
          html: "text/html",
          text: "text/plain",
          json: "application/json, text/javascript",
          "*": Lb,
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/,
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
        },
        converters: {
          "* text": a.String,
          "text html": !0,
          "text json": $.parseJSON,
          "text xml": $.parseXML,
        },
        flatOptions: {
          context: !0,
          url: !0,
        },
      },
      ajaxPrefilter: y(Jb),
      ajaxTransport: y(Kb),
      ajax: function (a, c) {
        function d(a, c, d, g) {
          var j,
            l,
            s,
            t,
            v,
            x = c;
          2 !== u &&
            ((u = 2),
            i && clearTimeout(i),
            (h = b),
            (f = g || ""),
            (w.readyState = a > 0 ? 4 : 0),
            d && (t = B(m, w, d)),
            (a >= 200 && 300 > a) || 304 === a
              ? (m.ifModified &&
                  ((v = w.getResponseHeader("Last-Modified")),
                  v && ($.lastModified[e] = v),
                  (v = w.getResponseHeader("Etag")),
                  v && ($.etag[e] = v)),
                304 === a
                  ? ((x = "notmodified"), (j = !0))
                  : ((j = C(m, t)),
                    (x = j.state),
                    (l = j.data),
                    (s = j.error),
                    (j = !s)))
              : ((s = x), (!x || a) && ((x = "error"), 0 > a && (a = 0))),
            (w.status = a),
            (w.statusText = "" + (c || x)),
            j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]),
            w.statusCode(r),
            (r = b),
            k &&
              o.trigger("ajax" + (j ? "Success" : "Error"), [w, m, j ? l : s]),
            q.fireWith(n, [w, x]),
            k &&
              (o.trigger("ajaxComplete", [w, m]),
              --$.active || $.event.trigger("ajaxStop")));
        }
        "object" == typeof a && ((c = a), (a = b)), (c = c || {});
        var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = $.ajaxSetup({}, c),
          n = m.context || m,
          o = n !== m && (n.nodeType || n instanceof $) ? $(n) : $.event,
          p = $.Deferred(),
          q = $.Callbacks("once memory"),
          r = m.statusCode || {},
          s = {},
          t = {},
          u = 0,
          v = "canceled",
          w = {
            readyState: 0,
            setRequestHeader: function (a, b) {
              if (!u) {
                var c = a.toLowerCase();
                (a = t[c] = t[c] || a), (s[a] = b);
              }
              return this;
            },
            getAllResponseHeaders: function () {
              return 2 === u ? f : null;
            },
            getResponseHeader: function (a) {
              var c;
              if (2 === u) {
                if (!g)
                  for (g = {}; (c = Ab.exec(f)); ) g[c[1].toLowerCase()] = c[2];
                c = g[a.toLowerCase()];
              }
              return c === b ? null : c;
            },
            overrideMimeType: function (a) {
              return u || (m.mimeType = a), this;
            },
            abort: function (a) {
              return (a = a || v), h && h.abort(a), d(0, a), this;
            },
          };
        if (
          (p.promise(w),
          (w.success = w.done),
          (w.error = w.fail),
          (w.complete = q.add),
          (w.statusCode = function (a) {
            if (a) {
              var b;
              if (2 > u) for (b in a) r[b] = [r[b], a[b]];
              else (b = a[w.status]), w.always(b);
            }
            return this;
          }),
          (m.url = ((a || m.url) + "")
            .replace(zb, "")
            .replace(Db, yb[1] + "//")),
          (m.dataTypes = $.trim(m.dataType || "*")
            .toLowerCase()
            .split(ba)),
          null == m.crossDomain &&
            ((j = Hb.exec(m.url.toLowerCase())),
            (m.crossDomain = !(
              !j ||
              (j[1] == yb[1] &&
                j[2] == yb[2] &&
                (j[3] || ("http:" === j[1] ? 80 : 443)) ==
                  (yb[3] || ("http:" === yb[1] ? 80 : 443)))
            ))),
          m.data &&
            m.processData &&
            "string" != typeof m.data &&
            (m.data = $.param(m.data, m.traditional)),
          z(Jb, m, c, w),
          2 === u)
        )
          return w;
        if (
          ((k = m.global),
          (m.type = m.type.toUpperCase()),
          (m.hasContent = !Cb.test(m.type)),
          k && 0 === $.active++ && $.event.trigger("ajaxStart"),
          !m.hasContent &&
            (m.data &&
              ((m.url += (Eb.test(m.url) ? "&" : "?") + m.data), delete m.data),
            (e = m.url),
            m.cache === !1))
        ) {
          var x = $.now(),
            y = m.url.replace(Gb, "$1_=" + x);
          m.url =
            y + (y === m.url ? (Eb.test(m.url) ? "&" : "?") + "_=" + x : "");
        }
        ((m.data && m.hasContent && m.contentType !== !1) || c.contentType) &&
          w.setRequestHeader("Content-Type", m.contentType),
          m.ifModified &&
            ((e = e || m.url),
            $.lastModified[e] &&
              w.setRequestHeader("If-Modified-Since", $.lastModified[e]),
            $.etag[e] && w.setRequestHeader("If-None-Match", $.etag[e])),
          w.setRequestHeader(
            "Accept",
            m.dataTypes[0] && m.accepts[m.dataTypes[0]]
              ? m.accepts[m.dataTypes[0]] +
                  ("*" !== m.dataTypes[0] ? ", " + Lb + "; q=0.01" : "")
              : m.accepts["*"]
          );
        for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
        if (!m.beforeSend || (m.beforeSend.call(n, w, m) !== !1 && 2 !== u)) {
          v = "abort";
          for (l in {
            success: 1,
            error: 1,
            complete: 1,
          })
            w[l](m[l]);
          if ((h = z(Kb, m, c, w))) {
            (w.readyState = 1),
              k && o.trigger("ajaxSend", [w, m]),
              m.async &&
                m.timeout > 0 &&
                (i = setTimeout(function () {
                  w.abort("timeout");
                }, m.timeout));
            try {
              (u = 1), h.send(s, d);
            } catch (A) {
              if (!(2 > u)) throw A;
              d(-1, A);
            }
          } else d(-1, "No Transport");
          return w;
        }
        return w.abort();
      },
      active: 0,
      lastModified: {},
      etag: {},
    });
  var Nb = [],
    Ob = /\?/,
    Pb = /(=)\?(?=&|$)|\?\?/,
    Qb = $.now();
  $.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Nb.pop() || $.expando + "_" + Qb++;
      return (this[a] = !0), a;
    },
  }),
    $.ajaxPrefilter("json jsonp", function (c, d, e) {
      var f,
        g,
        h,
        i = c.data,
        j = c.url,
        k = c.jsonp !== !1,
        l = k && Pb.test(j),
        m =
          k &&
          !l &&
          "string" == typeof i &&
          !(c.contentType || "").indexOf("application/x-www-form-urlencoded") &&
          Pb.test(i);
      return "jsonp" === c.dataTypes[0] || l || m
        ? ((f = c.jsonpCallback =
            $.isFunction(c.jsonpCallback)
              ? c.jsonpCallback()
              : c.jsonpCallback),
          (g = a[f]),
          l
            ? (c.url = j.replace(Pb, "$1" + f))
            : m
            ? (c.data = i.replace(Pb, "$1" + f))
            : k && (c.url += (Ob.test(j) ? "&" : "?") + c.jsonp + "=" + f),
          (c.converters["script json"] = function () {
            return h || $.error(f + " was not called"), h[0];
          }),
          (c.dataTypes[0] = "json"),
          (a[f] = function () {
            h = arguments;
          }),
          e.always(function () {
            (a[f] = g),
              c[f] && ((c.jsonpCallback = d.jsonpCallback), Nb.push(f)),
              h && $.isFunction(g) && g(h[0]),
              (h = g = b);
          }),
          "script")
        : void 0;
    }),
    $.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: {
        script: /javascript|ecmascript/,
      },
      converters: {
        "text script": function (a) {
          return $.globalEval(a), a;
        },
      },
    }),
    $.ajaxPrefilter("script", function (a) {
      a.cache === b && (a.cache = !1),
        a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    $.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var c,
          d = P.head || P.getElementsByTagName("head")[0] || P.documentElement;
        return {
          send: function (e, f) {
            (c = P.createElement("script")),
              (c.async = "async"),
              a.scriptCharset && (c.charset = a.scriptCharset),
              (c.src = a.url),
              (c.onload = c.onreadystatechange =
                function (a, e) {
                  (e ||
                    !c.readyState ||
                    /loaded|complete/.test(c.readyState)) &&
                    ((c.onload = c.onreadystatechange = null),
                    d && c.parentNode && d.removeChild(c),
                    (c = b),
                    e || f(200, "success"));
                }),
              d.insertBefore(c, d.firstChild);
          },
          abort: function () {
            c && c.onload(0, 1);
          },
        };
      }
    });
  var Rb,
    Sb = a.ActiveXObject
      ? function () {
          for (var a in Rb) Rb[a](0, 1);
        }
      : !1,
    Tb = 0;
  ($.ajaxSettings.xhr = a.ActiveXObject
    ? function () {
        return (!this.isLocal && D()) || E();
      }
    : D),
    (function (a) {
      $.extend($.support, {
        ajax: !!a,
        cors: !!a && "withCredentials" in a,
      });
    })($.ajaxSettings.xhr()),
    $.support.ajax &&
      $.ajaxTransport(function (c) {
        if (!c.crossDomain || $.support.cors) {
          var d;
          return {
            send: function (e, f) {
              var g,
                h,
                i = c.xhr();
              if (
                (c.username
                  ? i.open(c.type, c.url, c.async, c.username, c.password)
                  : i.open(c.type, c.url, c.async),
                c.xhrFields)
              )
                for (h in c.xhrFields) i[h] = c.xhrFields[h];
              c.mimeType &&
                i.overrideMimeType &&
                i.overrideMimeType(c.mimeType),
                !c.crossDomain &&
                  !e["X-Requested-With"] &&
                  (e["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (h in e) i.setRequestHeader(h, e[h]);
              } catch (j) {}
              i.send((c.hasContent && c.data) || null),
                (d = function (a, e) {
                  var h, j, k, l, m;
                  try {
                    if (d && (e || 4 === i.readyState))
                      if (
                        ((d = b),
                        g &&
                          ((i.onreadystatechange = $.noop), Sb && delete Rb[g]),
                        e)
                      )
                        4 !== i.readyState && i.abort();
                      else {
                        (h = i.status),
                          (k = i.getAllResponseHeaders()),
                          (l = {}),
                          (m = i.responseXML),
                          m && m.documentElement && (l.xml = m);
                        try {
                          l.text = i.responseText;
                        } catch (a) {}
                        try {
                          j = i.statusText;
                        } catch (n) {
                          j = "";
                        }
                        h || !c.isLocal || c.crossDomain
                          ? 1223 === h && (h = 204)
                          : (h = l.text ? 200 : 404);
                      }
                  } catch (o) {
                    e || f(-1, o);
                  }
                  l && f(h, j, l, k);
                }),
                c.async
                  ? 4 === i.readyState
                    ? setTimeout(d, 0)
                    : ((g = ++Tb),
                      Sb && (Rb || ((Rb = {}), $(a).unload(Sb)), (Rb[g] = d)),
                      (i.onreadystatechange = d))
                  : d();
            },
            abort: function () {
              d && d(0, 1);
            },
          };
        }
      });
  var Ub,
    Vb,
    Wb = /^(?:toggle|show|hide)$/,
    Xb = new RegExp("^(?:([-+])=|)(" + _ + ")([a-z%]*)$", "i"),
    Yb = /queueHooks$/,
    Zb = [J],
    $b = {
      "*": [
        function (a, b) {
          var c,
            d,
            e,
            f = this.createTween(a, b),
            g = Xb.exec(b),
            h = f.cur(),
            i = +h || 0,
            j = 1;
          if (g) {
            if (
              ((c = +g[2]),
              (d = g[3] || ($.cssNumber[a] ? "" : "px")),
              "px" !== d && i)
            ) {
              i = $.css(f.elem, a, !0) || c || 1;
              do
                (e = j = j || ".5"),
                  (i /= j),
                  $.style(f.elem, a, i + d),
                  (j = f.cur() / h);
              while (1 !== j && j !== e);
            }
            (f.unit = d),
              (f.start = i),
              (f.end = g[1] ? i + (g[1] + 1) * c : c);
          }
          return f;
        },
      ],
    };
  ($.Animation = $.extend(H, {
    tweener: function (a, b) {
      $.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]), ($b[c] = $b[c] || []), $b[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? Zb.unshift(a) : Zb.push(a);
    },
  })),
    ($.Tween = K),
    (K.prototype = {
      constructor: K,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || ($.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = K.propHooks[this.prop];
        return a && a.get ? a.get(this) : K.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = K.propHooks[this.prop];
        return (
          (this.pos = b =
            $.easing[this.easing](
              a,
              this.options.duration * a,
              0,
              1,
              this.options.duration
            )),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : K.propHooks._default.set(this),
          this
        );
      },
    }),
    (K.prototype.init.prototype = K.prototype),
    (K.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] ||
            (a.elem.style && null != a.elem.style[a.prop])
            ? ((b = $.css(a.elem, a.prop, !1, "")), b && "auto" !== b ? b : 0)
            : a.elem[a.prop];
        },
        set: function (a) {
          $.fx.step[a.prop]
            ? $.fx.step[a.prop](a)
            : a.elem.style &&
              (null != a.elem.style[$.cssProps[a.prop]] || $.cssHooks[a.prop])
            ? $.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (K.propHooks.scrollTop = K.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    $.each(["toggle", "show", "hide"], function (a, b) {
      var c = $.fn[b];
      $.fn[b] = function (d, e, f) {
        return null == d ||
          "boolean" == typeof d ||
          (!a && $.isFunction(d) && $.isFunction(e))
          ? c.apply(this, arguments)
          : this.animate(L(b, !0), d, e, f);
      };
    }),
    $.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(r).css("opacity", 0).show().end().animate(
          {
            opacity: b,
          },
          a,
          c,
          d
        );
      },
      animate: function (a, b, c, d) {
        var e = $.isEmptyObject(a),
          f = $.speed(b, c, d),
          g = function () {
            var b = H(this, $.extend({}, a), f);
            e && b.stop(!0);
          };
        return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
      },
      stop: function (a, c, d) {
        var e = function (a) {
          var b = a.stop;
          delete a.stop, b(d);
        };
        return (
          "string" != typeof a && ((d = c), (c = a), (a = b)),
          c && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              c = null != a && a + "queueHooks",
              f = $.timers,
              g = $._data(this);
            if (c) g[c] && g[c].stop && e(g[c]);
            else for (c in g) g[c] && g[c].stop && Yb.test(c) && e(g[c]);
            for (c = f.length; c--; )
              f[c].elem === this &&
                (null == a || f[c].queue === a) &&
                (f[c].anim.stop(d), (b = !1), f.splice(c, 1));
            (b || !d) && $.dequeue(this, a);
          })
        );
      },
    }),
    $.each(
      {
        slideDown: L("show"),
        slideUp: L("hide"),
        slideToggle: L("toggle"),
        fadeIn: {
          opacity: "show",
        },
        fadeOut: {
          opacity: "hide",
        },
        fadeToggle: {
          opacity: "toggle",
        },
      },
      function (a, b) {
        $.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    ($.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? $.extend({}, a)
          : {
              complete: c || (!c && b) || ($.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !$.isFunction(b) && b),
            };
      return (
        (d.duration = $.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in $.fx.speeds
          ? $.fx.speeds[d.duration]
          : $.fx.speeds._default),
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          $.isFunction(d.old) && d.old.call(this),
            d.queue && $.dequeue(this, d.queue);
        }),
        d
      );
    }),
    ($.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    ($.timers = []),
    ($.fx = K.prototype.init),
    ($.fx.tick = function () {
      for (var a, b = $.timers, c = 0; c < b.length; c++)
        (a = b[c]), !a() && b[c] === a && b.splice(c--, 1);
      b.length || $.fx.stop();
    }),
    ($.fx.timer = function (a) {
      a() &&
        $.timers.push(a) &&
        !Vb &&
        (Vb = setInterval($.fx.tick, $.fx.interval));
    }),
    ($.fx.interval = 13),
    ($.fx.stop = function () {
      clearInterval(Vb), (Vb = null);
    }),
    ($.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400,
    }),
    ($.fx.step = {}),
    $.expr &&
      $.expr.filters &&
      ($.expr.filters.animated = function (a) {
        return $.grep($.timers, function (b) {
          return a === b.elem;
        }).length;
      });
  var _b = /^(?:body|html)$/i;
  ($.fn.offset = function (a) {
    if (arguments.length)
      return a === b
        ? this
        : this.each(function (b) {
            $.offset.setOffset(this, a, b);
          });
    var c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m = this[0],
      n = m && m.ownerDocument;
    if (n)
      return (e = n.body) === m
        ? $.offset.bodyOffset(m)
        : ((d = n.documentElement),
          $.contains(d, m)
            ? ((c = m.getBoundingClientRect()),
              (f = M(n)),
              (g = d.clientTop || e.clientTop || 0),
              (h = d.clientLeft || e.clientLeft || 0),
              (i = f.pageYOffset || d.scrollTop),
              (j = f.pageXOffset || d.scrollLeft),
              (k = c.top + i - g),
              (l = c.left + j - h),
              {
                top: k,
                left: l,
              })
            : {
                top: 0,
                left: 0,
              });
  }),
    ($.offset = {
      bodyOffset: function (a) {
        var b = a.offsetTop,
          c = a.offsetLeft;
        return (
          $.support.doesNotIncludeMarginInBodyOffset &&
            ((b += parseFloat($.css(a, "marginTop")) || 0),
            (c += parseFloat($.css(a, "marginLeft")) || 0)),
          {
            top: b,
            left: c,
          }
        );
      },
      setOffset: function (a, b, c) {
        var d = $.css(a, "position");
        "static" === d && (a.style.position = "relative");
        var e,
          f,
          g = $(a),
          h = g.offset(),
          i = $.css(a, "top"),
          j = $.css(a, "left"),
          k =
            ("absolute" === d || "fixed" === d) &&
            $.inArray("auto", [i, j]) > -1,
          l = {},
          m = {};
        k
          ? ((m = g.position()), (e = m.top), (f = m.left))
          : ((e = parseFloat(i) || 0), (f = parseFloat(j) || 0)),
          $.isFunction(b) && (b = b.call(a, c, h)),
          null != b.top && (l.top = b.top - h.top + e),
          null != b.left && (l.left = b.left - h.left + f),
          "using" in b ? b.using.call(a, l) : g.css(l);
      },
    }),
    $.fn.extend({
      position: function () {
        if (this[0]) {
          var a = this[0],
            b = this.offsetParent(),
            c = this.offset(),
            d = _b.test(b[0].nodeName)
              ? {
                  top: 0,
                  left: 0,
                }
              : b.offset();
          return (
            (c.top -= parseFloat($.css(a, "marginTop")) || 0),
            (c.left -= parseFloat($.css(a, "marginLeft")) || 0),
            (d.top += parseFloat($.css(b[0], "borderTopWidth")) || 0),
            (d.left += parseFloat($.css(b[0], "borderLeftWidth")) || 0),
            {
              top: c.top - d.top,
              left: c.left - d.left,
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var a = this.offsetParent || P.body;
            a && !_b.test(a.nodeName) && "static" === $.css(a, "position");

          )
            a = a.offsetParent;
          return a || P.body;
        });
      },
    }),
    $.each(
      {
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset",
      },
      function (a, c) {
        var d = /Y/.test(c);
        $.fn[a] = function (e) {
          return $.access(
            this,
            function (a, e, f) {
              var g = M(a);
              return f === b
                ? g
                  ? c in g
                    ? g[c]
                    : g.document.documentElement[e]
                  : a[e]
                : void (g
                    ? g.scrollTo(
                        d ? $(g).scrollLeft() : f,
                        d ? f : $(g).scrollTop()
                      )
                    : (a[e] = f));
            },
            a,
            e,
            arguments.length,
            null
          );
        };
      }
    ),
    $.each(
      {
        Height: "height",
        Width: "width",
      },
      function (a, c) {
        $.each(
          {
            padding: "inner" + a,
            content: c,
            "": "outer" + a,
          },
          function (d, e) {
            $.fn[e] = function (e, f) {
              var g = arguments.length && (d || "boolean" != typeof e),
                h = d || (e === !0 || f === !0 ? "margin" : "border");
              return $.access(
                this,
                function (c, d, e) {
                  var f;
                  return $.isWindow(c)
                    ? c.document.documentElement["client" + a]
                    : 9 === c.nodeType
                    ? ((f = c.documentElement),
                      Math.max(
                        c.body["scroll" + a],
                        f["scroll" + a],
                        c.body["offset" + a],
                        f["offset" + a],
                        f["client" + a]
                      ))
                    : e === b
                    ? $.css(c, d, e, h)
                    : $.style(c, d, e, h);
                },
                c,
                g ? e : b,
                g
              );
            };
          }
        );
      }
    ),
    (a.jQuery = a.$ = $),
    "function" == typeof define &&
      define.amd &&
      define.amd.jQuery &&
      define("jquery", [], function () {
        return $;
      });
})(window);
var googlefonts = {
  kind: "webfonts#webfontList",
  items: [
    {
      kind: "webfonts#webfont",
      family: "ABeeZee",
      category: "sans-serif",
      variants: ["regular", "italic"],
      subsets: ["latin"],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/abeezee/v11/mE5BOuZKGln_Ex0uYKpIaw.ttf",
        italic:
          "http://fonts.gstatic.com/s/abeezee/v11/kpplLynmYgP0YtlJA3atRw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Abel",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/abel/v8/RpUKfqNxoyNe_ka23bzQ2A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Abhaya Libre",
      category: "serif",
      variants: ["regular", "500", "600", "700", "800"],
      subsets: ["sinhala", "latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/abhayalibre/v3/zTLc5Jxv6yvb1nHyqBasVy3USBnSvpkopQaUR-2r7iU.ttf",
        500: "http://fonts.gstatic.com/s/abhayalibre/v3/wBjdF6T34NCo7wQYXgzrc5MQuUSAwdHsY8ov_6tk1oA.ttf",
        600: "http://fonts.gstatic.com/s/abhayalibre/v3/wBjdF6T34NCo7wQYXgzrc2v8CylhIUtwUiYO7Z2wXbE.ttf",
        700: "http://fonts.gstatic.com/s/abhayalibre/v3/wBjdF6T34NCo7wQYXgzrc0D2ttfZwueP-QU272T9-k4.ttf",
        800: "http://fonts.gstatic.com/s/abhayalibre/v3/wBjdF6T34NCo7wQYXgzrc_qsay_1ZmRGmC8pVRdIfAg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Abril Fatface",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/abrilfatface/v9/X1g_KwGeBV3ajZIXQ9VnDojjx0o0jr6fNXxPgYh_a8Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Aclonica",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/aclonica/v8/M6pHZMPwK3DiBSlo3jwAKQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Acme",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/acme/v7/-J6XNtAHPZBEbsifCdBt-g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Actor",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/actor/v7/ugMf40CrRK6Jf6Yz_xNSmQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Adamina",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/adamina/v10/RUQfOodOMiVVYqFZcSlT9w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Advent Pro",
      category: "sans-serif",
      variants: ["100", "200", "300", "regular", "500", "600", "700"],
      subsets: ["latin", "greek", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/adventpro/v7/87-JOpSUecTG50PBYK4ysi3USBnSvpkopQaUR-2r7iU.ttf",
        200: "http://fonts.gstatic.com/s/adventpro/v7/URTSSjIp0Wr-GrjxFdFWnGeudeTO44zf-ht3k-KNzwg.ttf",
        300: "http://fonts.gstatic.com/s/adventpro/v7/sJaBfJYSFgoB80OL1_66m0eOrDcLawS7-ssYqLr2Xp4.ttf",
        regular:
          "http://fonts.gstatic.com/s/adventpro/v7/1NxMBeKVcNNH2H46AUR3wfesZW2xOQ-xsNqO47m55DA.ttf",
        500: "http://fonts.gstatic.com/s/adventpro/v7/7kBth2-rT8tP40RmMMXMLJp-63r6doWhTEbsfBIRJ7A.ttf",
        600: "http://fonts.gstatic.com/s/adventpro/v7/3Jo-2maCzv2QLzQBzaKHV_pTEJqju4Hz1txDWij77d4.ttf",
        700: "http://fonts.gstatic.com/s/adventpro/v7/M4I6QiICt-ey_wZTpR2gKwJKKGfqHaYFsRG-T3ceEVo.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Aguafina Script",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/aguafinascript/v6/65g7cgMtMGnNlNyq_Z6CvMxLhO8OSNnfAp53LK1_iRs.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Akronim",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/akronim/v7/qA0L2CSArk3tuOWE1AR1DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Aladin",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/aladin/v6/PyuJ5cVHkduO0j5fAMKvAA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Aldrich",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/aldrich/v8/kMMW1S56gFx7RP_mW1g-Eg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Alef",
      category: "sans-serif",
      variants: ["regular", "700"],
      subsets: ["latin", "hebrew"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/alef/v9/ENvZ_P0HBDQxNZYCQO0lUA.ttf",
        700: "http://fonts.gstatic.com/s/alef/v9/VDgZJhEwudtOzOFQpZ8MEA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Alegreya",
      category: "serif",
      variants: [
        "regular",
        "italic",
        "500",
        "500italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v10",
      lastModified: "2017-11-07",
      files: {
        regular:
          "http://fonts.gstatic.com/s/alegreya/v10/62J3atXd6bvMU4qO_ca-eA.ttf",
        italic:
          "http://fonts.gstatic.com/s/alegreya/v10/cbshnQGxwmlHBjUil7DaIfesZW2xOQ-xsNqO47m55DA.ttf",
        500: "http://fonts.gstatic.com/s/alegreya/v10/nJhRg_-uQMATei4qNxTyLKCWcynf_cDxXwCLxiixG1c.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/alegreya/v10/baLsZTz4WeQ1BZAOY-Ma_Zp-63r6doWhTEbsfBIRJ7A.ttf",
        700: "http://fonts.gstatic.com/s/alegreya/v10/5oZtdI5-wQwgAFrd9erCsaCWcynf_cDxXwCLxiixG1c.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/alegreya/v10/IWi8e5bpnqhMRsZKTcTUWgJKKGfqHaYFsRG-T3ceEVo.ttf",
        800: "http://fonts.gstatic.com/s/alegreya/v10/QzI8vcYBhKwi_ircxzgm66CWcynf_cDxXwCLxiixG1c.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/alegreya/v10/zBzWGwjiXVY_eRAcMxLbPKk3bhPBSBJ0bSJQ6acL-0g.ttf",
        900: "http://fonts.gstatic.com/s/alegreya/v10/oQeMxX-vxGImzDgX6nxA7KCWcynf_cDxXwCLxiixG1c.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/alegreya/v10/-L71QLH_XqgYWaI1GbOVhp0EAVxt0G0biEntp43Qt6E.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Alegreya SC",
      category: "serif",
      variants: [
        "regular",
        "italic",
        "500",
        "500italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v9",
      lastModified: "2017-11-07",
      files: {
        regular:
          "http://fonts.gstatic.com/s/alegreyasc/v9/3ozeFnTbygMK6PfHh8B-iqCWcynf_cDxXwCLxiixG1c.ttf",
        italic:
          "http://fonts.gstatic.com/s/alegreyasc/v9/GOqmv3FLsJ2r6ZALMZVBmkeOrDcLawS7-ssYqLr2Xp4.ttf",
        500: "http://fonts.gstatic.com/s/alegreyasc/v9/M9OIREoxDkvynwTpBAYUq8CNfqCYlB_eIx7H1TVXe60.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/alegreyasc/v9/5PCoU7IUfCicpKBJtBmP6WnWRcJAYo5PSCx8UfGMHCI.ttf",
        700: "http://fonts.gstatic.com/s/alegreyasc/v9/M9OIREoxDkvynwTpBAYUq3e1Pd76Vl7zRpE7NLJQ7XU.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/alegreyasc/v9/5PCoU7IUfCicpKBJtBmP6c_zJjSACmk0BRPxQqhnNLU.ttf",
        800: "http://fonts.gstatic.com/s/alegreyasc/v9/M9OIREoxDkvynwTpBAYUqw89PwPrYLaRFJ-HNCU9NbA.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/alegreyasc/v9/5PCoU7IUfCicpKBJtBmP6Sad_7rtf4IdDfsLVg-2OV4.ttf",
        900: "http://fonts.gstatic.com/s/alegreyasc/v9/M9OIREoxDkvynwTpBAYUqyenaqEuufTBk9XMKnKmgDA.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/alegreyasc/v9/5PCoU7IUfCicpKBJtBmP6U_yTOUGsoC54csJe1b-IRw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Alegreya Sans",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v8",
      lastModified: "2017-11-09",
      files: {
        100: "http://fonts.gstatic.com/s/alegreyasans/v8/TKyx_-JJ6MdpQruNk-t-PJFGFO4uyVFMfB6LZsii7kI.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/alegreyasans/v8/gRkSP2lBpqoMTVxg7DmVn2cDnjsrnI9_xJ-5gnBaHsE.ttf",
        300: "http://fonts.gstatic.com/s/alegreyasans/v8/11EDm-lum6tskJMBbdy9acB1LjARzAvdqa1uQC32v70.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/alegreyasans/v8/WfiXipsmjqRqsDBQ1bA9CnfqlVoxTUFFx1C8tBqmbcg.ttf",
        regular:
          "http://fonts.gstatic.com/s/alegreyasans/v8/KYNzioYhDai7mTMnx_gDgn8f0n03UdmQgF_CLvNR2vg.ttf",
        italic:
          "http://fonts.gstatic.com/s/alegreyasans/v8/TKyx_-JJ6MdpQruNk-t-PD4G9C9ttb0Oz5Cvf0qOitE.ttf",
        500: "http://fonts.gstatic.com/s/alegreyasans/v8/11EDm-lum6tskJMBbdy9aQqQmZ7VjhwksfpNVG0pqGc.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/alegreyasans/v8/WfiXipsmjqRqsDBQ1bA9Cs7DCVO6wo6i5LKIyZDzK40.ttf",
        700: "http://fonts.gstatic.com/s/alegreyasans/v8/11EDm-lum6tskJMBbdy9aVCbmAUID8LN-q3pJpOk3Ys.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/alegreyasans/v8/WfiXipsmjqRqsDBQ1bA9CpF66r9C4AnxxlBlGd7xY4g.ttf",
        800: "http://fonts.gstatic.com/s/alegreyasans/v8/11EDm-lum6tskJMBbdy9acxnD5BewVtRRHHljCwR2bM.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/alegreyasans/v8/WfiXipsmjqRqsDBQ1bA9CicOAJ_9MkLPbDmrtXDPbIU.ttf",
        900: "http://fonts.gstatic.com/s/alegreyasans/v8/11EDm-lum6tskJMBbdy9aW42xlVP-j5dagE7-AU2zwg.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/alegreyasans/v8/WfiXipsmjqRqsDBQ1bA9ChRaDUI9aE8-k7PrIG2iiuo.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Alegreya Sans SC",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v7",
      lastModified: "2017-11-07",
      files: {
        100: "http://fonts.gstatic.com/s/alegreyasanssc/v7/trwFkDJLOJf6hqM93944kVnzStfdnFU-MXbO84aBs_M.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/alegreyasanssc/v7/qG3gA9iy5RpXMH4crZboqqakMVR0XlJhO7VdJ8yYvA4.ttf",
        300: "http://fonts.gstatic.com/s/alegreyasanssc/v7/AjAmkoP1y0Vaad0UPPR46-1IqtfxJspFjzJp0SaQRcI.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/alegreyasanssc/v7/0VweK-TO3aQgazdxg8fs0CnTKaH808trtzttbEg4yVA.ttf",
        regular:
          "http://fonts.gstatic.com/s/alegreyasanssc/v7/6kgb6ZvOagoVIRZyl8XV-EklWX-XdLVn1WTiuGuvKIU.ttf",
        italic:
          "http://fonts.gstatic.com/s/alegreyasanssc/v7/trwFkDJLOJf6hqM93944kTfqo69HNOlCNZvbwAmUtiA.ttf",
        500: "http://fonts.gstatic.com/s/alegreyasanssc/v7/AjAmkoP1y0Vaad0UPPR46_hHTluI57wqxl55RvSYo3s.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/alegreyasanssc/v7/0VweK-TO3aQgazdxg8fs0NqVvxKdFVwqwzilqfVd39U.ttf",
        700: "http://fonts.gstatic.com/s/alegreyasanssc/v7/AjAmkoP1y0Vaad0UPPR4600aId5t1FC-xZ8nmpa_XLk.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/alegreyasanssc/v7/0VweK-TO3aQgazdxg8fs0IBYn3VD6xMEnodOh8pnFw4.ttf",
        800: "http://fonts.gstatic.com/s/alegreyasanssc/v7/AjAmkoP1y0Vaad0UPPR46wQgSHD3Lo1Mif2Wkk5swWA.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/alegreyasanssc/v7/0VweK-TO3aQgazdxg8fs0HStmCm6Rs90XeztCALm0H8.ttf",
        900: "http://fonts.gstatic.com/s/alegreyasanssc/v7/AjAmkoP1y0Vaad0UPPR461Rf9EWUSEX_PR1d_gLKfpM.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/alegreyasanssc/v7/0VweK-TO3aQgazdxg8fs0IvtwEfTCJoOJugANj-jWDI.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Alex Brush",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/alexbrush/v8/ooh3KJFbKJSUoIRWfiu8o_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Alfa Slab One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/alfaslabone/v7/Qx6FPcitRwTC_k88tLPc-Yjjx0o0jr6fNXxPgYh_a8Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Alice",
      category: "serif",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "cyrillic-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/alice/v9/wZTAfivekBqIg-rk63nFvQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Alike",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/alike/v10/Ho8YpRKNk_202fwDiGNIyw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Alike Angular",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/alikeangular/v8/OpeCu4xxI3qO1C7CZcJtPT3XH2uEnVI__ynTBvNyki8.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Allan",
      category: "display",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/allan/v9/T3lemhgZmLQkQI2Qc2bQHA.ttf",
        700: "http://fonts.gstatic.com/s/allan/v9/zSxQiwo7wgnr7KkMXhSiag.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Allerta",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/allerta/v8/s9FOEuiJFTNbMe06ifzV8g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Allerta Stencil",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/allertastencil/v8/CdSZfRtHbQrBohqmzSdDYFf2eT4jUldwg_9fgfY_tHc.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Allura",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/allura/v6/4hcqgZanyuJ2gMYWffIR6A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Almendra",
      category: "serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin", "latin-ext"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/almendra/v10/PDpbB-ZF7deXAAEYPkQOeg.ttf",
        italic:
          "http://fonts.gstatic.com/s/almendra/v10/CNWLyiDucqVKVgr4EMidi_esZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/almendra/v10/ZpLdQMj7Q2AFio4nNO6A76CWcynf_cDxXwCLxiixG1c.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/almendra/v10/-tXHKMcnn6FqrhJV3l1e3QJKKGfqHaYFsRG-T3ceEVo.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Almendra Display",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/almendradisplay/v8/2Zuu97WJ_ez-87yz5Ai8fF6uyC_qD11hrFQ6EGgTJWI.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Almendra SC",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/almendrasc/v8/IuiLd8Fm9I6raSalxMoWeaCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Amarante",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/amarante/v5/2dQHjIBWSpydit5zkJZnOw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Amaranth",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/amaranth/v8/7VcBog22JBHsHXHdnnycTA.ttf",
        italic:
          "http://fonts.gstatic.com/s/amaranth/v8/UrJlRY9LcVERJSvggsdBqPesZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/amaranth/v8/j5OFHqadfxyLnQRxFeox6qCWcynf_cDxXwCLxiixG1c.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/amaranth/v8/BHyuYFj9nqLFNvOvGh0xTwJKKGfqHaYFsRG-T3ceEVo.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Amatic SC",
      category: "handwriting",
      variants: ["regular", "700"],
      subsets: ["cyrillic", "latin", "hebrew", "latin-ext", "vietnamese"],
      version: "v11",
      lastModified: "2017-11-07",
      files: {
        regular:
          "http://fonts.gstatic.com/s/amaticsc/v11/MldbRWLFytvqxU1y81xSVg.ttf",
        700: "http://fonts.gstatic.com/s/amaticsc/v11/IDnkRTPGcrSVo50UyYNK7y3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Amethysta",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/amethysta/v6/1jEo9tOFIJDolAUpBnWbnA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Amiko",
      category: "sans-serif",
      variants: ["regular", "600", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/amiko/v2/A7bjc3cOLJtGgpPGnxyHsw.ttf",
        600: "http://fonts.gstatic.com/s/amiko/v2/BaZst4RZ4sDyD3mH-BfVaA.ttf",
        700: "http://fonts.gstatic.com/s/amiko/v2/6syx43mQ07VvOmpFc0G9Lg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Amiri",
      category: "serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin", "arabic", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/amiri/v9/ATARrPmSew75SlpOw2YABQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/amiri/v9/3t1yTQlLUXBw8htrqlXBrw.ttf",
        700: "http://fonts.gstatic.com/s/amiri/v9/WQsR_moz-FNqVwGYgptqiA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/amiri/v9/uF8aNEyD0bxMeTBg9bFDSPesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Amita",
      category: "handwriting",
      variants: ["regular", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/amita/v3/RhdhGBXSJqkHo6g7miTEcQ.ttf",
        700: "http://fonts.gstatic.com/s/amita/v3/cIYA2Lzp7l2pcGsqpUidBg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Anaheim",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/anaheim/v5/t-z8aXHMpgI2gjN_rIflKA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Andada",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/andada/v9/rSFaDqNNQBRw3y19MB5Y4w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Andika",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/andika/v9/oe-ag1G0lcqZ3IXfeEgaGg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Angkor",
      category: "display",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/angkor/v10/DLpLgIS-8F10ecwKqCm95Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Annie Use Your Telescope",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/annieuseyourtelescope/v8/2cuiO5VmaR09C8SLGEQjGqbp7mtG8sPlcZvOaO8HBak.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Anonymous Pro",
      category: "monospace",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["cyrillic", "latin", "greek", "latin-ext"],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/anonymouspro/v11/Zhfjj_gat3waL4JSju74E-V_5zh5b-_HiooIRUBwn1A.ttf",
        italic:
          "http://fonts.gstatic.com/s/anonymouspro/v11/q0u6LFHwttnT_69euiDbWKwIsuKDCXG0NQm7BvAgx-c.ttf",
        700: "http://fonts.gstatic.com/s/anonymouspro/v11/WDf5lZYgdmmKhO8E1AQud--Cz_5MeePnXDAcLNWyBME.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/anonymouspro/v11/_fVr_XGln-cetWSUc-JpfA1LL9bfs7wyIp6F8OC9RxA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Antic",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/antic/v9/hEa8XCNM7tXGzD0Uk0AipA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Antic Didone",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/anticdidone/v6/r3nJcTDuOluOL6LGDV1vRy3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Antic Slab",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/anticslab/v6/PSbJCTKkAS7skPdkd7AKEvesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Anton",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/anton/v9/XIbCenm-W0IRHWYIh7CGUQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Arapey",
      category: "serif",
      variants: ["regular", "italic"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/arapey/v6/dqu823lrSYn8T2gApTdslA.ttf",
        italic:
          "http://fonts.gstatic.com/s/arapey/v6/pY-Xi5JNBpaWxy2tZhEm5A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Arbutus",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/arbutus/v7/Go_hurxoUsn5MnqNVQgodQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Arbutus Slab",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/arbutusslab/v6/6k3Yp6iS9l4jRIpynA8qMy3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Architects Daughter",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/architectsdaughter/v8/RXTgOOQ9AAtaVOHxx0IUBMCy0EhZjHzu-y0e6uLf4Fg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Archivo",
      category: "sans-serif",
      variants: [
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/archivo/v3/r-UxY2mA_5pDuZN717veMA.ttf",
        italic:
          "http://fonts.gstatic.com/s/archivo/v3/xM6Bws4B8M6CBFj_NjFDmQ.ttf",
        500: "http://fonts.gstatic.com/s/archivo/v3/kolpDHEnC87zFuFfslSCevesZW2xOQ-xsNqO47m55DA.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/archivo/v3/MKuleTj-xvH_kzDLSfxAny3USBnSvpkopQaUR-2r7iU.ttf",
        600: "http://fonts.gstatic.com/s/archivo/v3/ujChrOQvaQhWGqGyAyvouPesZW2xOQ-xsNqO47m55DA.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/archivo/v3/yabYJWzTLFXwCTAuo02FTC3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/archivo/v3/pOE88CC9eYkEsVEVFu184_esZW2xOQ-xsNqO47m55DA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/archivo/v3/KPG24G28nybJri09faZ5fy3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Archivo Black",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/archivoblack/v7/WoAoVT7K3k7hHfxKbvB6B51XQG8isOYYJhPIYAyrESQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Archivo Narrow",
      category: "sans-serif",
      variants: [
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
      ],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/archivonarrow/v8/DsLzC9scoPnrGiwYYMQXppTvAuddT2xDMbdz0mdLyZY.ttf",
        italic:
          "http://fonts.gstatic.com/s/archivonarrow/v8/vqsrtPCpTU3tJlKfuXP5zUpmlyBQEFfdE6dERLXdQGQ.ttf",
        500: "http://fonts.gstatic.com/s/archivonarrow/v8/M__Wu4PAmHf4YZvQM8tWsFZXnRfcj2QuLtpR7YorIko.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/archivonarrow/v8/wG6O733y5zHl4EKCOh8rSQPEI7VifuA7dF_atQng58I.ttf",
        600: "http://fonts.gstatic.com/s/archivonarrow/v8/M__Wu4PAmHf4YZvQM8tWsAYHMmBTXW-z0TFb_R_tMpQ.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/archivonarrow/v8/wG6O733y5zHl4EKCOh8rSQFfhWXBmyfiPDGj4ZvwGNU.ttf",
        700: "http://fonts.gstatic.com/s/archivonarrow/v8/M__Wu4PAmHf4YZvQM8tWsMLtdzs3iyjn_YuT226ZsLU.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/archivonarrow/v8/wG6O733y5zHl4EKCOh8rSTg5KB8MNJ4uPAETq9naQO8.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Aref Ruqaa",
      category: "serif",
      variants: ["regular", "700"],
      subsets: ["latin", "arabic"],
      version: "v4",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/arefruqaa/v4/kbqI055uLQz2hkccTTrYPfesZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/arefruqaa/v4/RT-Q5DVI9arM6ZKux-UmTAJKKGfqHaYFsRG-T3ceEVo.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Arima Madurai",
      category: "display",
      variants: ["100", "200", "300", "regular", "500", "700", "800", "900"],
      subsets: ["latin", "tamil", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/arimamadurai/v3/Q0tjl46beRRcUe3RlWWNrdyXLlNBCUjoM1yKFfVCFUI.ttf",
        200: "http://fonts.gstatic.com/s/arimamadurai/v3/EsCGNPwBfkMk17-w_DTJ4rArwWuxcSSKq67BdR6k5Rg.ttf",
        300: "http://fonts.gstatic.com/s/arimamadurai/v3/EsCGNPwBfkMk17-w_DTJ4joJ52uD-1fmXmi8u0n_zsc.ttf",
        regular:
          "http://fonts.gstatic.com/s/arimamadurai/v3/8fNfThKRw_pr7MwgNdcHiW_MnNA9OgK8I1F23mNWOpE.ttf",
        500: "http://fonts.gstatic.com/s/arimamadurai/v3/EsCGNPwBfkMk17-w_DTJ4v_2zpxNHQ3utWt_82o9dAo.ttf",
        700: "http://fonts.gstatic.com/s/arimamadurai/v3/EsCGNPwBfkMk17-w_DTJ4qiiXuG_rGcOxkuidirlnJE.ttf",
        800: "http://fonts.gstatic.com/s/arimamadurai/v3/EsCGNPwBfkMk17-w_DTJ4khKLu0CevfTHM1eXjGnvQo.ttf",
        900: "http://fonts.gstatic.com/s/arimamadurai/v3/EsCGNPwBfkMk17-w_DTJ4kZ0oshA7r_PlGegwiHddT8.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Arimo",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "hebrew",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v11",
      lastModified: "2017-10-11",
      files: {
        regular:
          "http://fonts.gstatic.com/s/arimo/v11/Gpeo80g-5ji2CcyXWnzh7g.ttf",
        italic:
          "http://fonts.gstatic.com/s/arimo/v11/_OdGbnX2-qQ96C4OjhyuPw.ttf",
        700: "http://fonts.gstatic.com/s/arimo/v11/ZItXugREyvV9LnbY_gxAmw.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/arimo/v11/__nOLWqmeXdhfr0g7GaFePesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Arizonia",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/arizonia/v8/yzJqkHZqryZBTM7RKYV9Wg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Armata",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/armata/v8/1H8FwGgIRrbYtxSfXhOHlQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Arsenal",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/arsenal/v2/PkcjwJ0AdgwImdsRdyzQQQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/arsenal/v2/FvYQ_YMyIFZw-8dXMYPhHg.ttf",
        700: "http://fonts.gstatic.com/s/arsenal/v2/6R-JWA0Y5N2Lvul2TLOH3_esZW2xOQ-xsNqO47m55DA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/arsenal/v2/AnUIg26c0nuMZMpNWtsDFy3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Artifika",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/artifika/v8/Ekfp4H4QG7D-WsABDOyj8g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Arvo",
      category: "serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/arvo/v10/vvWPwz-PlZEwjOOIKqoZzA.ttf",
        italic:
          "http://fonts.gstatic.com/s/arvo/v10/id5a4BCjbenl5Gkqonw_Rw.ttf",
        700: "http://fonts.gstatic.com/s/arvo/v10/OB3FDST7U38u3OjPK_vvRQ.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/arvo/v10/Hvl2MuWoXLaCy2v6MD4Yvw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Arya",
      category: "sans-serif",
      variants: ["regular", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/arya/v3/xEVqtU3v8QLospHKpDaYEw.ttf",
        700: "http://fonts.gstatic.com/s/arya/v3/N13tgOvG7VTXawiI-fJiQA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Asap",
      category: "sans-serif",
      variants: [
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/asap/v7/2lf-1MDR8tsTpEtvJmr2hA.ttf",
        italic: "http://fonts.gstatic.com/s/asap/v7/mwxNHf8QS8gNWCAMwkJNIg.ttf",
        500: "http://fonts.gstatic.com/s/asap/v7/bSf7UzaPFkjzB9TuOPVhgw.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/asap/v7/RUbFVj3EkB2Yo9QDVzDKLw.ttf",
        600: "http://fonts.gstatic.com/s/asap/v7/aj9e6BCAPmcrrkHyAtWfSg.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/asap/v7/lSgrQWENLu3EVBpHYwzirw.ttf",
        700: "http://fonts.gstatic.com/s/asap/v7/o5RUA7SsJ80M8oDFBnrDbg.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/asap/v7/_rZz9y2oXc09jT5T6BexLQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Asap Condensed",
      category: "sans-serif",
      variants: [
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v2",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/asapcondensed/v2/WnB1QP0n-KM9-GXLGChcYSavnWbQ852KImK774Atfew.ttf",
        italic:
          "http://fonts.gstatic.com/s/asapcondensed/v2/qnSL07X2cz9966iZSWZCBfYZB3dvQ7xQFxvHcvx7fMA.ttf",
        500: "http://fonts.gstatic.com/s/asapcondensed/v2/TyBiCbCbffkYs45BrMexjI_Y-6sQdpH-OU-ZdWEi-4E.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/asapcondensed/v2/9jDg2d4w2asxgWRh6ddxUYiIPHHw_LT0InVaNEq3i9o.ttf",
        600: "http://fonts.gstatic.com/s/asapcondensed/v2/TyBiCbCbffkYs45BrMexjKfWDuPM568rGzS6rTUUBAI.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/asapcondensed/v2/9jDg2d4w2asxgWRh6ddxUSWF8ZKt6Ad7F4DSH_awyvE.ttf",
        700: "http://fonts.gstatic.com/s/asapcondensed/v2/TyBiCbCbffkYs45BrMexjDuwRdwRx6RgmD2V-BAnY3I.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/asapcondensed/v2/9jDg2d4w2asxgWRh6ddxUWd8_gdoFFngi4b8GzqPlPw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Asar",
      category: "serif",
      variants: ["regular"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v4",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/asar/v4/mSmn3H5CcMA84CZ586X7WQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Asset",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/asset/v8/hfPmqY-JzuR1lULlQf9iTg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Assistant",
      category: "sans-serif",
      variants: ["200", "300", "regular", "600", "700", "800"],
      subsets: ["latin", "hebrew"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        200: "http://fonts.gstatic.com/s/assistant/v2/xXstfiHQzjB9j5ZxYTBoZy3USBnSvpkopQaUR-2r7iU.ttf",
        300: "http://fonts.gstatic.com/s/assistant/v2/vPC3tCw3LOzCSeGCtVp5Wi3USBnSvpkopQaUR-2r7iU.ttf",
        regular:
          "http://fonts.gstatic.com/s/assistant/v2/2iDwv6DBtyixlK5YHngp1w.ttf",
        600: "http://fonts.gstatic.com/s/assistant/v2/Y4UC5nQA69lWpfV0itoWLi3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/assistant/v2/dZywGH4pMxP6OVyrppOJxy3USBnSvpkopQaUR-2r7iU.ttf",
        800: "http://fonts.gstatic.com/s/assistant/v2/-mTR0sX8a0RsadH4AMDT8C3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Astloch",
      category: "display",
      variants: ["regular", "700"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/astloch/v8/fmbitVmHYLQP7MGPuFgpag.ttf",
        700: "http://fonts.gstatic.com/s/astloch/v8/aPkhM2tL-tz1jX6aX2rvo_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Asul",
      category: "sans-serif",
      variants: ["regular", "700"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/asul/v7/9qpsNR_OOwyOYyo2N0IbBw.ttf",
        700: "http://fonts.gstatic.com/s/asul/v7/uO8uNmxaq87-DdPmkEg5Gg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Athiti",
      category: "sans-serif",
      variants: ["200", "300", "regular", "500", "600", "700"],
      subsets: ["latin", "latin-ext", "thai", "vietnamese"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        200: "http://fonts.gstatic.com/s/athiti/v2/Ge5skdKwzxRPajVLdOJuIg.ttf",
        300: "http://fonts.gstatic.com/s/athiti/v2/OoT7lj4AaSp1JpGJLKn3CA.ttf",
        regular:
          "http://fonts.gstatic.com/s/athiti/v2/e7eiIKP18Iz9Kg1xat6AYw.ttf",
        500: "http://fonts.gstatic.com/s/athiti/v2/W3pP-ANXfsMOVOG-cqqMFw.ttf",
        600: "http://fonts.gstatic.com/s/athiti/v2/kYx3dtUYNEuUlzWczYzsmQ.ttf",
        700: "http://fonts.gstatic.com/s/athiti/v2/tyXFOxQyZGXfqHhtqSikdw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Atma",
      category: "display",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: ["latin", "bengali", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-09",
      files: {
        300: "http://fonts.gstatic.com/s/atma/v3/noxn2r6cT3JgmEDt6Ip5pQ.ttf",
        regular:
          "http://fonts.gstatic.com/s/atma/v3/dkXPrLoE_uqcgUFj4JdfRQ.ttf",
        500: "http://fonts.gstatic.com/s/atma/v3/Htksg3ZXeAEbSvUdTQX-uw.ttf",
        600: "http://fonts.gstatic.com/s/atma/v3/EGUwD65ZZn9IIHp5Y36b4A.ttf",
        700: "http://fonts.gstatic.com/s/atma/v3/-fkXl3wADUHjobbwO9d-Wg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Atomic Age",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/atomicage/v9/WvBMe4FxANIKpo6Oi0mVJ_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Aubrey",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v10",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/aubrey/v10/zo9w8klO8bmOQIMajQ2aTA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Audiowide",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/audiowide/v6/yGcwRZB6VmoYhPUYT-mEow.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Autour One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/autourone/v7/2xmQBcg7FN72jaQRFZPIDvesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Average",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/average/v6/aHUibBqdDbVYl5FM48pxyQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Average Sans",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/averagesans/v6/dnU3R-5A_43y5bIyLztPsS3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Averia Gruesa Libre",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/averiagruesalibre/v6/10vbZTOoN6T8D-nvDzwRFyXcKHuZXlCN8VkWHpkUzKM.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Averia Libre",
      category: "display",
      variants: ["300", "300italic", "regular", "italic", "700", "700italic"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/averialibre/v6/r6hGL8sSLm4dTzOPXgx5XacQoVhARpoaILP7amxE_8g.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/averialibre/v6/I6wAYuAvOgT7el2ePj2nkina0FLWfcB-J_SAYmcAXaI.ttf",
        regular:
          "http://fonts.gstatic.com/s/averialibre/v6/rYVgHZZQICWnhjguGsBspC3USBnSvpkopQaUR-2r7iU.ttf",
        italic:
          "http://fonts.gstatic.com/s/averialibre/v6/1etzuoNxVHR8F533EkD1WfMZXuCXbOrAvx5R0IT5Oyo.ttf",
        700: "http://fonts.gstatic.com/s/averialibre/v6/r6hGL8sSLm4dTzOPXgx5XUD2ttfZwueP-QU272T9-k4.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/averialibre/v6/I6wAYuAvOgT7el2ePj2nkvAs9-1nE9qOqhChW0m4nDE.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Averia Sans Libre",
      category: "display",
      variants: ["300", "300italic", "regular", "italic", "700", "700italic"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/averiasanslibre/v6/_9-jTfQjaBsWAF_yp5z-V4CP_KG_g80s1KXiBtJHoNc.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/averiasanslibre/v6/o7BEIK-fG3Ykc5Rzteh88YuyGu4JqttndUh4gRKxic0.ttf",
        regular:
          "http://fonts.gstatic.com/s/averiasanslibre/v6/yRJpjT39KxACO9F31mj_LqV8_KRn4epKAjTFK1s1fsg.ttf",
        italic:
          "http://fonts.gstatic.com/s/averiasanslibre/v6/COEzR_NPBSUOl3pFwPbPoCZU2HnUZT1xVKaIrHDioao.ttf",
        700: "http://fonts.gstatic.com/s/averiasanslibre/v6/_9-jTfQjaBsWAF_yp5z-V8QwVOrz1y5GihpZmtKLhlI.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/averiasanslibre/v6/o7BEIK-fG3Ykc5Rzteh88bXy1DXgmJcVtKjM5UWamMs.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Averia Serif Libre",
      category: "display",
      variants: ["300", "300italic", "regular", "italic", "700", "700italic"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/averiaseriflibre/v7/yvITAdr5D1nlsdFswJAb8SmC4gFJ2PHmfdVKEd_5S9M.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/averiaseriflibre/v7/YOLFXyye4sZt6AZk1QybCG2okl0bU63CauowU4iApig.ttf",
        regular:
          "http://fonts.gstatic.com/s/averiaseriflibre/v7/fdtF30xa_Erw0zAzOoG4BZqY66i8AUyI16fGqw0iAew.ttf",
        italic:
          "http://fonts.gstatic.com/s/averiaseriflibre/v7/o9qhvK9iT5iDWfyhQUe-6Ru_b0bTq5iipbJ9hhgHJ6U.ttf",
        700: "http://fonts.gstatic.com/s/averiaseriflibre/v7/yvITAdr5D1nlsdFswJAb8Q50KV5TaOVolur4zV2iZsg.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/averiaseriflibre/v7/YOLFXyye4sZt6AZk1QybCNxohRXP4tNDqG3X4Hqn21k.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bad Script",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["cyrillic", "latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/badscript/v6/cRyUs0nJ2eMQFHwBsZNRXfesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bahiana",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bahiana/v2/uUnBWf2QkuMyfXPof7lcwQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Baloo",
      category: "display",
      variants: ["regular"],
      subsets: ["devanagari", "latin", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/baloo/v3/uFkbq9GEAWUcT0XNeptJ1Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Baloo Bhai",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese", "gujarati"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/baloobhai/v3/FQvpC-04bh2QINuWAdnNW_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Baloo Bhaijaan",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "arabic", "latin-ext", "vietnamese"],
      version: "v2",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/baloobhaijaan/v2/WADJjVg5Kkv7JQ_7Ty9eDj083UVTX9pxrhfn5xHQ3fY.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Baloo Bhaina",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "oriya", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/baloobhaina/v3/HxxbxOVf9WQem_hKo1MXSi3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Baloo Chettan",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "malayalam", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/baloochettan/v3/ODsFofLybGVOJ90e_EwdFbyYXtM25qb63HASTPtoTFA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Baloo Da",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "bengali", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/balooda/v3/RAJ0l2eJl_HDURCVxRE1iQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Baloo Paaji",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "gurmukhi", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/baloopaaji/v3/KeqAjVRzso6QUEfpMLQ-7KCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Baloo Tamma",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese", "kannada"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/balootamma/v3/-FKAYy14SAfG8Gc6YAAaMaCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Baloo Tammudu",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "telugu", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/balootammudu/v3/_VlYJH4sGzgC_fTDQEKfT6ESp5dI1YWe8pDCvQ6RhbI.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Baloo Thambi",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "tamil", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/baloothambi/v3/qXK3dZIeU-O-HruaN5cK0y3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Balthazar",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/balthazar/v6/WgbaSIs6dJAGXJ0qbz2xlw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bangers",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bangers/v10/WAffdge5w99Xif-DLeqmcA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Barlow",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["latin", "latin-ext"],
      version: "v1",
      lastModified: "2017-11-21",
      files: {
        100: "http://fonts.gstatic.com/s/barlow/v1/9O0WhafcanqiKfBdztitxA.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/barlow/v1/tXYBxxWUjBbMU8bIWAkGcfesZW2xOQ-xsNqO47m55DA.ttf",
        200: "http://fonts.gstatic.com/s/barlow/v1/l1EMxRbbut4FmA64_fASVw.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/barlow/v1/15_0_LtzeeDuv9LDcMf2OaCWcynf_cDxXwCLxiixG1c.ttf",
        300: "http://fonts.gstatic.com/s/barlow/v1/YFlmjT41oVykTmuBmMQz3Q.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/barlow/v1/8n2LTA3MxyD2QLRiRxwiwKCWcynf_cDxXwCLxiixG1c.ttf",
        regular:
          "http://fonts.gstatic.com/s/barlow/v1/dPu9raNxg3UgZRNKkE5pjg.ttf",
        italic:
          "http://fonts.gstatic.com/s/barlow/v1/Z000UW3dDDpGHIVpwAC5hQ.ttf",
        500: "http://fonts.gstatic.com/s/barlow/v1/3eZdOWsyL0ZbKOoPVGSyCA.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/barlow/v1/2XP72T5xWjiARLFpwJomQ6CWcynf_cDxXwCLxiixG1c.ttf",
        600: "http://fonts.gstatic.com/s/barlow/v1/2ULufj694XWdsmrS7v37Rg.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/barlow/v1/XDHKE60VlRHH_nj6stvzz6CWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/barlow/v1/mkL56a4l3q6ewq7uDjDmOw.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/barlow/v1/eE-VTZP95TH6Aaj_rX03_aCWcynf_cDxXwCLxiixG1c.ttf",
        800: "http://fonts.gstatic.com/s/barlow/v1/uQa6Tv_gttLR9CL67rarUA.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/barlow/v1/YJSc9JubqU-mmzmYZ6LXxaCWcynf_cDxXwCLxiixG1c.ttf",
        900: "http://fonts.gstatic.com/s/barlow/v1/Oovk9BImy0cilVTwVOV1Kw.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/barlow/v1/FMpklDgQ58YgAbK_vZH4F6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Barlow Condensed",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["latin", "latin-ext"],
      version: "v1",
      lastModified: "2017-11-21",
      files: {
        100: "http://fonts.gstatic.com/s/barlowcondensed/v1/AFyvjQed-FUXvXfnhoosEwDK0pjiyki0ZtIMDlyFhAE.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/barlowcondensed/v1/ZKexgmMD5LIQJOU_ocZR1FiQWBt2n3LSp2gALtWANl4.ttf",
        200: "http://fonts.gstatic.com/s/barlowcondensed/v1/OrFbL_C7uluSl6tRywbI8M80WYZVClixFP0tRprz_cU.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/barlowcondensed/v1/52CJF6vdk9OPHVYGv6-2MiMOdH8AXXwoQa43xlTAEo0.ttf",
        300: "http://fonts.gstatic.com/s/barlowcondensed/v1/OrFbL_C7uluSl6tRywbI8JRhFVcex_hajThhFkHyhYk.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/barlowcondensed/v1/52CJF6vdk9OPHVYGv6-2MvYa9bgCHecWXGgisnodcS0.ttf",
        regular:
          "http://fonts.gstatic.com/s/barlowcondensed/v1/cKj4a3uS3MxclVhpADml2aDbm6fPDOZJsR8PmdG62gY.ttf",
        italic:
          "http://fonts.gstatic.com/s/barlowcondensed/v1/AFyvjQed-FUXvXfnhoosE4_eiqgTfYGaH0bJiUDZ5GA.ttf",
        500: "http://fonts.gstatic.com/s/barlowcondensed/v1/OrFbL_C7uluSl6tRywbI8DWZMn-LogRcGVRw8BqdnEM.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/barlowcondensed/v1/52CJF6vdk9OPHVYGv6-2MudtKTGC_VJqVv-WghpQ580.ttf",
        600: "http://fonts.gstatic.com/s/barlowcondensed/v1/OrFbL_C7uluSl6tRywbI8Fv5RyFROg7CMzQvEvCxyfU.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/barlowcondensed/v1/52CJF6vdk9OPHVYGv6-2MksaNbX0lr1uX8RTYUQhE44.ttf",
        700: "http://fonts.gstatic.com/s/barlowcondensed/v1/OrFbL_C7uluSl6tRywbI8POYkGiSOYDq_T7HbIOV1hA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/barlowcondensed/v1/52CJF6vdk9OPHVYGv6-2Mk2zk2RGRC3SlyyLLQfjS_8.ttf",
        800: "http://fonts.gstatic.com/s/barlowcondensed/v1/OrFbL_C7uluSl6tRywbI8HDoA4zfGsyk3UWso-nouYs.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/barlowcondensed/v1/52CJF6vdk9OPHVYGv6-2Mv2q6Jty9H2CMBXBNhwD1Uo.ttf",
        900: "http://fonts.gstatic.com/s/barlowcondensed/v1/OrFbL_C7uluSl6tRywbI8NdhSi1HG6fjGakmSnjUCro.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/barlowcondensed/v1/52CJF6vdk9OPHVYGv6-2Mrr788H6pTIKOrjeo7zBYN0.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Barlow Semi Condensed",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["latin", "latin-ext"],
      version: "v1",
      lastModified: "2017-11-21",
      files: {
        100: "http://fonts.gstatic.com/s/barlowsemicondensed/v1/rObwC0zkSDuhDJaXoDJAlSi7tdGxScTr3oVgcrTUqWw.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/barlowsemicondensed/v1/pyyssUoTx0daao5w56i4a-E335Vk6sjWzkNuUz0lAbo.ttf",
        200: "http://fonts.gstatic.com/s/barlowsemicondensed/v1/ZyxfuHr9OuBXRZHPDKRFf61IHoFZjDq9yl49NJ3Y0wY.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/barlowsemicondensed/v1/6QUBKs5dwYC2YezSXw47vwr2LTAl1O9_KiBEl2DS81X3rGVtsTkPsbDajuO5ueQw.ttf",
        300: "http://fonts.gstatic.com/s/barlowsemicondensed/v1/ZyxfuHr9OuBXRZHPDKRFf-ZroXgFx_lT3TTeDaAqrWE.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/barlowsemicondensed/v1/6QUBKs5dwYC2YezSXw47v9KMN5zR3ng78udgOMwfvpv3rGVtsTkPsbDajuO5ueQw.ttf",
        regular:
          "http://fonts.gstatic.com/s/barlowsemicondensed/v1/Ok4yyskPwFvZPrXlQ7v904elbRYnLTTQA1Z5cVLnsI4.ttf",
        italic:
          "http://fonts.gstatic.com/s/barlowsemicondensed/v1/rObwC0zkSDuhDJaXoDJAlcTWmv1-FP1M08DaFQEguYo.ttf",
        500: "http://fonts.gstatic.com/s/barlowsemicondensed/v1/ZyxfuHr9OuBXRZHPDKRFf64Ixr3FMLIaz6yY1ILODIU.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/barlowsemicondensed/v1/6QUBKs5dwYC2YezSXw47vyvpbTtv0ILUeJ-woPAd8cz3rGVtsTkPsbDajuO5ueQw.ttf",
        600: "http://fonts.gstatic.com/s/barlowsemicondensed/v1/ZyxfuHr9OuBXRZHPDKRFf8MHImBNo4aGUuMCjGiDijI.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/barlowsemicondensed/v1/6QUBKs5dwYC2YezSXw47v_YJe2rVoePIdB0uBCD9kLn3rGVtsTkPsbDajuO5ueQw.ttf",
        700: "http://fonts.gstatic.com/s/barlowsemicondensed/v1/ZyxfuHr9OuBXRZHPDKRFf7GMx7y0UuyPIsLqSMg46Ks.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/barlowsemicondensed/v1/6QUBKs5dwYC2YezSXw47v162eJZA4hMkRIrbC5WxTlT3rGVtsTkPsbDajuO5ueQw.ttf",
        800: "http://fonts.gstatic.com/s/barlowsemicondensed/v1/ZyxfuHr9OuBXRZHPDKRFf_3VPWKD9LjLpSGgTAgUUIc.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/barlowsemicondensed/v1/6QUBKs5dwYC2YezSXw47v5kqvImmTqPjGZzPB2zEZMT3rGVtsTkPsbDajuO5ueQw.ttf",
        900: "http://fonts.gstatic.com/s/barlowsemicondensed/v1/ZyxfuHr9OuBXRZHPDKRFf73y6LE9HhLx9tlnlwi3OAw.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/barlowsemicondensed/v1/6QUBKs5dwYC2YezSXw47v8lxq5ZLEX8n7hBiU2onrKP3rGVtsTkPsbDajuO5ueQw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Barrio",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/barrio/v2/kzvMfZB0agZKzXC5yyRwWA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Basic",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/basic/v7/hNII2mS5Dxw5C0u_m3mXgA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Battambang",
      category: "display",
      variants: ["regular", "700"],
      subsets: ["khmer"],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/battambang/v11/MzrUfQLefYum5vVGM3EZVPesZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/battambang/v11/dezbRtMzfzAA99DmrCYRMgJKKGfqHaYFsRG-T3ceEVo.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Baumans",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/baumans/v7/o0bFdPW1H5kd5saqqOcoVg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bayon",
      category: "display",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v10",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bayon/v10/yTubusjTnpNRZwA4_50iVw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Belgrano",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/belgrano/v8/iq8DUa2s7g6WRCeMiFrmtQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bellefair",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "hebrew", "latin-ext"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bellefair/v3/V_AInB3Ikm6UgW6_YKlk2g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Belleza",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/belleza/v6/wchA3BWJlVqvIcSeNZyXew.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "BenchNine",
      category: "sans-serif",
      variants: ["300", "regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/benchnine/v6/ah9xtUy9wLQ3qnWa2p-piS3USBnSvpkopQaUR-2r7iU.ttf",
        regular:
          "http://fonts.gstatic.com/s/benchnine/v6/h3OAlYqU3aOeNkuXgH2Q2w.ttf",
        700: "http://fonts.gstatic.com/s/benchnine/v6/qZpi6ZVZg3L2RL_xoBLxWS3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bentham",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bentham/v8/5-Mo8Fe7yg5tzV0GlQIuzQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Berkshire Swash",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/berkshireswash/v6/4RZJjVRPjYnC2939hKCAimKfbtsIjCZP_edQljX9gR0.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bevan",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bevan/v9/Rtg3zDsCeQiaJ_Qno22OJA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bigelow Rules",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bigelowrules/v6/FEJCPLwo07FS-6SK6Al50X8f0n03UdmQgF_CLvNR2vg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bigshot One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bigshotone/v8/wSyZjBNTWDQHnvWE2jt6j6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bilbo",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bilbo/v7/-ty-lPs5H7OIucWbnpFrkA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bilbo Swash Caps",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bilboswashcaps/v9/UB_-crLvhx-PwGKW1oosDmYeFSdnSpRYv5h9gpdlD1g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "BioRhyme",
      category: "serif",
      variants: ["200", "300", "regular", "700", "800"],
      subsets: ["latin", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        200: "http://fonts.gstatic.com/s/biorhyme/v2/bj-6g_1gJHCc9xQZtLWL36CWcynf_cDxXwCLxiixG1c.ttf",
        300: "http://fonts.gstatic.com/s/biorhyme/v2/jWqHmLFlu30n7xp12uZd8qCWcynf_cDxXwCLxiixG1c.ttf",
        regular:
          "http://fonts.gstatic.com/s/biorhyme/v2/n6v5UkVPy_CjbP3fvsu1CA.ttf",
        700: "http://fonts.gstatic.com/s/biorhyme/v2/36KN76U1iKt5TFDm2lBz0KCWcynf_cDxXwCLxiixG1c.ttf",
        800: "http://fonts.gstatic.com/s/biorhyme/v2/k6bYbUnESjLYnworWvSTL6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "BioRhyme Expanded",
      category: "serif",
      variants: ["200", "300", "regular", "700", "800"],
      subsets: ["latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-09",
      files: {
        200: "http://fonts.gstatic.com/s/biorhymeexpanded/v3/FKL4Vyxmq2vsiDrSOzz2sC7oxZzNh3ej55UHm-HviBI.ttf",
        300: "http://fonts.gstatic.com/s/biorhymeexpanded/v3/FKL4Vyxmq2vsiDrSOzz2sFu4cYPPksG4MRjB5UiYPPw.ttf",
        regular:
          "http://fonts.gstatic.com/s/biorhymeexpanded/v3/hgBNpgjTRZzGmZxqN5OuVjndr_hij4ilAk2n1d1AhsE.ttf",
        700: "http://fonts.gstatic.com/s/biorhymeexpanded/v3/FKL4Vyxmq2vsiDrSOzz2sMVisRVfPEfQ0jijOMQbr0Q.ttf",
        800: "http://fonts.gstatic.com/s/biorhymeexpanded/v3/FKL4Vyxmq2vsiDrSOzz2sIv1v1eCT6RPbcYZYQ1T1CE.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Biryani",
      category: "sans-serif",
      variants: ["200", "300", "regular", "600", "700", "800", "900"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        200: "http://fonts.gstatic.com/s/biryani/v3/Xx38YzyTFF8n6mRS1Yd88vesZW2xOQ-xsNqO47m55DA.ttf",
        300: "http://fonts.gstatic.com/s/biryani/v3/u-bneRbizmFMd0VQp5Ze6vesZW2xOQ-xsNqO47m55DA.ttf",
        regular:
          "http://fonts.gstatic.com/s/biryani/v3/W7bfR8-IY76Xz0QoB8L2xw.ttf",
        600: "http://fonts.gstatic.com/s/biryani/v3/1EdcPCVxBR2txgjrza6_YPesZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/biryani/v3/qN2MTZ0j1sKSCtfXLB2dR_esZW2xOQ-xsNqO47m55DA.ttf",
        800: "http://fonts.gstatic.com/s/biryani/v3/DJyziS7FEy441v22InYdevesZW2xOQ-xsNqO47m55DA.ttf",
        900: "http://fonts.gstatic.com/s/biryani/v3/trcLkrIut0lM_PPSyQfAMPesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bitter",
      category: "serif",
      variants: ["regular", "italic", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v12",
      lastModified: "2017-10-11",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bitter/v12/w_BNdJvVZDRmqy5aSfB2kQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/bitter/v12/TC0FZEVzXQIGgzmRfKPZbA.ttf",
        700: "http://fonts.gstatic.com/s/bitter/v12/4dUtr_4BvHuoRU35suyOAg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Black Ops One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/blackopsone/v9/2XW-DmDsGbDLE372KrMW1Yjjx0o0jr6fNXxPgYh_a8Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bokor",
      category: "display",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v10",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bokor/v10/uAKdo0A85WW23Gs6mcbw7A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bonbon",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bonbon/v9/IW3u1yzG1knyW5oz0s9_6Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Boogaloo",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/boogaloo/v8/4Wu1tvFMoB80fSu8qLgQfQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bowlby One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bowlbyone/v9/eKpHjHfjoxM2bX36YNucefesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bowlby One SC",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bowlbyonesc/v9/8ZkeXftTuzKBtmxOYXoRedDkZCMxWJecxjvKm2f8MJw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Brawler",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/brawler/v8/3gfSw6imxQnQxweVITqUrg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bree Serif",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/breeserif/v7/5h9crBVIrvZqgf34FHcnEfesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bubblegum Sans",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bubblegumsans/v6/Y9iTUUNz6lbl6TrvV4iwsytnKWgpfO2iSkLzTz-AABg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bubbler One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bubblerone/v6/e8S0qevkZAFaBybtt_SU4qCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Buda",
      category: "display",
      variants: ["300"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/buda/v8/hLtAmNUmEMJH2yx7NGUjnA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Buenard",
      category: "serif",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/buenard/v9/NSpMPGKAUgrLrlstYVvIXQ.ttf",
        700: "http://fonts.gstatic.com/s/buenard/v9/yUlGE115dGr7O9w9FlP3UvesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bungee",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bungee/v3/0jM4G9s968t1_tpwzM9UDg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bungee Hairline",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bungeehairline/v3/8Li3dr3whdkxuk7pmLaZaSom6rTIagUDR1YFcrrRZjQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bungee Inline",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bungeeinline/v3/Tb-1914q4rFpjT-F66PLCYjjx0o0jr6fNXxPgYh_a8Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bungee Outline",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bungeeoutline/v3/PcidvzXIcqS2Qwxm_iG6bLAREgn5xbW23GEXXnhMQ5Y.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Bungee Shade",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/bungeeshade/v3/HSW7pxPYXBWkq7OSnuXoeC3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Butcherman",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/butcherman/v9/bxiJmD567sPBVpJsT0XR0vesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Butterfly Kids",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/butterflykids/v6/J4NTF5M25htqeTffYImtlUZaDk62iwTBnbnvwSjZciA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cabin",
      category: "sans-serif",
      variants: [
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v12",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cabin/v12/XeuAFYo2xAPHxZGBbQtHhA.ttf",
        italic:
          "http://fonts.gstatic.com/s/cabin/v12/0tJ9k3DI5xC4GBgs1E_Jxw.ttf",
        500: "http://fonts.gstatic.com/s/cabin/v12/HgsCQ-k3_Z_uQ86aFolNBg.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/cabin/v12/50sjhrGE0njyO-7mGDhGP_esZW2xOQ-xsNqO47m55DA.ttf",
        600: "http://fonts.gstatic.com/s/cabin/v12/eUDAvKhBtmTCkeVBsFk34A.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/cabin/v12/sFQpQDBd3G2om0Nl5dD2CvesZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/cabin/v12/4EKhProuY1hq_WCAomq9Dg.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/cabin/v12/K83QKi8MOKLEqj6bgZ7LrfesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cabin Condensed",
      category: "sans-serif",
      variants: ["regular", "500", "600", "700"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cabincondensed/v11/B0txb0blf2N29WdYPJjMSiQPsWWoiv__AzYJ9Zzn9II.ttf",
        500: "http://fonts.gstatic.com/s/cabincondensed/v11/Ez4zJbsGr2BgXcNUWBVgEARL_-ABKXdjsJSPT0lc2Bk.ttf",
        600: "http://fonts.gstatic.com/s/cabincondensed/v11/Ez4zJbsGr2BgXcNUWBVgELS5sSASxc8z4EQTQj7DCAI.ttf",
        700: "http://fonts.gstatic.com/s/cabincondensed/v11/Ez4zJbsGr2BgXcNUWBVgEMAWgzcA047xWLixhLCofl8.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cabin Sketch",
      category: "display",
      variants: ["regular", "700"],
      subsets: ["latin"],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cabinsketch/v11/d9fijO34zQajqQvl3YHRCS3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/cabinsketch/v11/ki3SSN5HMOO0-IOLOj069ED2ttfZwueP-QU272T9-k4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Caesar Dressing",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/caesardressing/v6/2T_WzBgE2Xz3FsyJMq34T9gR43u4FvCuJwIfF5Zxl6Y.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cagliostro",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cagliostro/v6/i85oXbtdSatNEzss99bpj_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cairo",
      category: "sans-serif",
      variants: ["200", "300", "regular", "600", "700", "900"],
      subsets: ["latin", "arabic", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        200: "http://fonts.gstatic.com/s/cairo/v2/9BU6Hrio9syG9zwo_CNPXg.ttf",
        300: "http://fonts.gstatic.com/s/cairo/v2/mpy3SIEJVOIfFnVLujcRDg.ttf",
        regular:
          "http://fonts.gstatic.com/s/cairo/v2/-tPnHq7mmAjcjJRSjsuZGA.ttf",
        600: "http://fonts.gstatic.com/s/cairo/v2/Ct_3a0tcTEyNNSnuZKDd7g.ttf",
        700: "http://fonts.gstatic.com/s/cairo/v2/ONxTSBYfmg-V5CkIwS_5gQ.ttf",
        900: "http://fonts.gstatic.com/s/cairo/v2/Fm-hIVCp5OI5mO4Ec71jcw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Calligraffitti",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/calligraffitti/v9/vLVN2Y-z65rVu1R7lWdvyDXz_orj3gX0_NzfmYulrko.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cambay",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cambay/v3/etU9Bab4VuhzS-OKsb1VXg.ttf",
        italic:
          "http://fonts.gstatic.com/s/cambay/v3/ZEz9yNqpEOgejaw1rBhugQ.ttf",
        700: "http://fonts.gstatic.com/s/cambay/v3/jw9niBxa04eEhnSwTWCEgw.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/cambay/v3/j-5v_uUr0NXTumWN0siOiaCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cambo",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cambo/v6/PnwpRuTdkYCf8qk4ajmNRA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Candal",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/candal/v7/x44dDW28zK7GR1gGDBmj9g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cantarell",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cantarell/v7/p5ydP_uWQ5lsFzcP_XVMEw.ttf",
        italic:
          "http://fonts.gstatic.com/s/cantarell/v7/DTCLtOSqP-7dgM-V_xKUjqCWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/cantarell/v7/Yir4ZDsCn4g1kWopdg-ehC3USBnSvpkopQaUR-2r7iU.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/cantarell/v7/weehrwMeZBXb0QyrWnRwFXe1Pd76Vl7zRpE7NLJQ7XU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cantata One",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cantataone/v7/-a5FDvnBqaBMDaGgZYnEfqCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cantora One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cantoraone/v7/oI-DS62RbHI8ZREjp73ehqCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Capriola",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/capriola/v5/JxXPlkdzWwF9Cwelbvi9jA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cardo",
      category: "serif",
      variants: ["regular", "italic", "700"],
      subsets: ["latin", "greek-ext", "greek", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cardo/v9/jbkF2_R0FKUEZTq5dwSknQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/cardo/v9/pcv4Np9tUkq0YREYUcEEJQ.ttf",
        700: "http://fonts.gstatic.com/s/cardo/v9/lQN30weILimrKvp8rZhF1w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Carme",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/carme/v8/08E0NP1eRBEyFRUadmMfgA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Carrois Gothic",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/carroisgothic/v7/GCgb7bssGpwp7V5ynxmWy2x3d0cwUleGuRTmCYfCUaM.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Carrois Gothic SC",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/carroisgothicsc/v7/bVp4nhwFIXU-r3LqUR8DSJTdPW1ioadGi2uRiKgJVCY.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Carter One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/carterone/v9/5X_LFvdbcB7OBG7hBgZ7fPesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Catamaran",
      category: "sans-serif",
      variants: [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      subsets: ["latin", "tamil", "latin-ext"],
      version: "v4",
      lastModified: "2017-11-21",
      files: {
        100: "http://fonts.gstatic.com/s/catamaran/v4/ilWHBiy0krUPdlmYxDuqC6CWcynf_cDxXwCLxiixG1c.ttf",
        200: "http://fonts.gstatic.com/s/catamaran/v4/hFc-HKSsGk6M-psujei1MC3USBnSvpkopQaUR-2r7iU.ttf",
        300: "http://fonts.gstatic.com/s/catamaran/v4/Aaag4ccR7Oh_4eai-jbrYC3USBnSvpkopQaUR-2r7iU.ttf",
        regular:
          "http://fonts.gstatic.com/s/catamaran/v4/MdNkM-DU8f6R-25Nxpr_XA.ttf",
        500: "http://fonts.gstatic.com/s/catamaran/v4/83WSX3F86qsvj1Z4EI0tQi3USBnSvpkopQaUR-2r7iU.ttf",
        600: "http://fonts.gstatic.com/s/catamaran/v4/a9PlHHnuBWiGGk0TwuFKTi3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/catamaran/v4/PpgVtUHUdnBZYNpnzGbScy3USBnSvpkopQaUR-2r7iU.ttf",
        800: "http://fonts.gstatic.com/s/catamaran/v4/6VjB_uSfn3DZ93IQv58CmC3USBnSvpkopQaUR-2r7iU.ttf",
        900: "http://fonts.gstatic.com/s/catamaran/v4/5ys9TqpQc9Q6gHqbSox6py3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Caudex",
      category: "serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin", "greek-ext", "greek", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/caudex/v7/PWEexiHLDmQbn2b1OPZWfg.ttf",
        italic:
          "http://fonts.gstatic.com/s/caudex/v7/XjMZF6XCisvV3qapD4oJdw.ttf",
        700: "http://fonts.gstatic.com/s/caudex/v7/PetCI4GyQ5Q3LiOzUu_mMg.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/caudex/v7/yT8YeHLjaJvQXlUEYOA8gqCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Caveat",
      category: "handwriting",
      variants: ["regular", "700"],
      subsets: ["cyrillic", "latin", "latin-ext"],
      version: "v4",
      lastModified: "2017-11-07",
      files: {
        regular:
          "http://fonts.gstatic.com/s/caveat/v4/8I23b6N-6rRVbh-C_Vx3yA.ttf",
        700: "http://fonts.gstatic.com/s/caveat/v4/LkaFtQENGJry2eUMwGRTeA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Caveat Brush",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/caveatbrush/v3/_d7bgsk3hfC4DXnUEeYKsy3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cedarville Cursive",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cedarvillecursive/v8/cuCe6HrkcqrWTWTUE7dw-41zwq9-z_Lf44CzRAA0d0Y.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ceviche One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cevicheone/v8/WOaXIMBD4VYMy39MsobJhKCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Changa",
      category: "sans-serif",
      variants: ["200", "300", "regular", "500", "600", "700", "800"],
      subsets: ["latin", "arabic", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        200: "http://fonts.gstatic.com/s/changa/v3/QNWVD9FzsnhVmHzE7HryDQ.ttf",
        300: "http://fonts.gstatic.com/s/changa/v3/OKZ0H1bMg3M9EZMVzgQ9fg.ttf",
        regular:
          "http://fonts.gstatic.com/s/changa/v3/7_e8qktkj6uKM0DamZJY9Q.ttf",
        500: "http://fonts.gstatic.com/s/changa/v3/KrXcHYf9ILB8aFWCj0Vfxg.ttf",
        600: "http://fonts.gstatic.com/s/changa/v3/6uCpqxwcsYkfV0M8Ls6WPA.ttf",
        700: "http://fonts.gstatic.com/s/changa/v3/vAXzeaPkdpxlejFN7h0ibw.ttf",
        800: "http://fonts.gstatic.com/s/changa/v3/H3IsiH2Fx0Pc4_OU4HSpng.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Changa One",
      category: "display",
      variants: ["regular", "italic"],
      subsets: ["latin"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/changaone/v10/dr4qjce4W3kxFrZRkVD87fesZW2xOQ-xsNqO47m55DA.ttf",
        italic:
          "http://fonts.gstatic.com/s/changaone/v10/wJVQlUs1lAZel-WdTo2U9y3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Chango",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/chango/v6/3W3AeMMtRTH08t5qLOjBmg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Chathura",
      category: "sans-serif",
      variants: ["100", "300", "regular", "700", "800"],
      subsets: ["latin", "telugu"],
      version: "v3",
      lastModified: "2017-10-09",
      files: {
        100: "http://fonts.gstatic.com/s/chathura/v3/7tUse0wFXIOSPewsdeNXPvesZW2xOQ-xsNqO47m55DA.ttf",
        300: "http://fonts.gstatic.com/s/chathura/v3/Gmhr6ULHnPDt9spOZrHOfKCWcynf_cDxXwCLxiixG1c.ttf",
        regular:
          "http://fonts.gstatic.com/s/chathura/v3/7hRNO-_zjRopkcP2n1rr8g.ttf",
        700: "http://fonts.gstatic.com/s/chathura/v3/BO9LvNAseMQ3n1tKWH-uTKCWcynf_cDxXwCLxiixG1c.ttf",
        800: "http://fonts.gstatic.com/s/chathura/v3/prh_X_5NSsBQefIdGi5B6KCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Chau Philomene One",
      category: "sans-serif",
      variants: ["regular", "italic"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/chauphilomeneone/v7/KKc5egCL-a2fFVoOA2x6tBFi5dxgSTdxqnMJgWkBJcg.ttf",
        italic:
          "http://fonts.gstatic.com/s/chauphilomeneone/v7/eJj1PY_iN4KiIuyOvtMHJP6uyLkxyiC4WcYA74sfquE.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Chela One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/chelaone/v6/h5O0dEnpnIq6jQnWxZybrA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Chelsea Market",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/chelseamarket/v5/qSdzwh2A4BbNemy78sJLfAAI1i8fIftCBXsBF2v9UMI.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Chenla",
      category: "display",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v10",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/chenla/v10/aLNpdAUDq2MZbWz2U1a16g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cherry Cream Soda",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cherrycreamsoda/v8/OrD-AUnFcZeeKa6F_c0_WxOiHiuAPYA9ry3O1RG2XIU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cherry Swash",
      category: "display",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cherryswash/v5/HqOk7C7J1TZ5i3L-ejF0vi3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/cherryswash/v5/-CfyMyQqfucZPQNB0nvYyED2ttfZwueP-QU272T9-k4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Chewy",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/chewy/v9/hcDN5cvQdIu6Bx4mg_TSyw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Chicle",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/chicle/v6/xg4q57Ut9ZmyFwLp51JLgg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Chivo",
      category: "sans-serif",
      variants: [
        "300",
        "300italic",
        "regular",
        "italic",
        "700",
        "700italic",
        "900",
        "900italic",
      ],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/chivo/v9/NB24D2RW9gYUd3ctGd-AhA.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/chivo/v9/A0NbKkUXhyt-4OxUzvrNT_esZW2xOQ-xsNqO47m55DA.ttf",
        regular:
          "http://fonts.gstatic.com/s/chivo/v9/L88PEuzS9eRfHRZhAPhZyw.ttf",
        italic:
          "http://fonts.gstatic.com/s/chivo/v9/Oe3-Q-a2kBzPnhHck_baMg.ttf",
        700: "http://fonts.gstatic.com/s/chivo/v9/zC8JLnJuu9Lw0_rA3_VYhg.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/chivo/v9/2M3ifXA84fdnDIxoCi18JvesZW2xOQ-xsNqO47m55DA.ttf",
        900: "http://fonts.gstatic.com/s/chivo/v9/JAdkiWd46QCW4vOsj3dzTA.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/chivo/v9/LoszYnE86q2wJEOjCigBQ_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Chonburi",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "thai", "vietnamese"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/chonburi/v2/jd9PfbW0x_8Myt_XeUxvSQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cinzel",
      category: "serif",
      variants: ["regular", "700", "900"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cinzel/v7/GF7dy_Nc-a6EaHYSyGd-EA.ttf",
        700: "http://fonts.gstatic.com/s/cinzel/v7/nYcFQ6_3pf_6YDrOFjBR8Q.ttf",
        900: "http://fonts.gstatic.com/s/cinzel/v7/FTBj72ozM2cEOSxiVsRb3A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cinzel Decorative",
      category: "display",
      variants: ["regular", "700", "900"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cinzeldecorative/v6/fmgK7oaJJIXAkhd9798yQgT5USbJx2F82lQbogPy2bY.ttf",
        700: "http://fonts.gstatic.com/s/cinzeldecorative/v6/pXhIVnhFtL_B9Vb1wq2F95-YYVDmZkJErg0zgx9XuZI.ttf",
        900: "http://fonts.gstatic.com/s/cinzeldecorative/v6/pXhIVnhFtL_B9Vb1wq2F97Khqbv0zQZa0g-9HOXAalU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Clicker Script",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/clickerscript/v5/Zupmk8XwADjufGxWB9KThBnpV0hQCek3EmWnCPrvGRM.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Coda",
      category: "display",
      variants: ["regular", "800"],
      subsets: ["latin", "latin-ext"],
      version: "v13",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/coda/v13/yHDvulhg-P-p2KRgRrnUYw.ttf",
        800: "http://fonts.gstatic.com/s/coda/v13/6ZIw0sbALY0KTMWllZB3hQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Coda Caption",
      category: "sans-serif",
      variants: ["800"],
      subsets: ["latin", "latin-ext"],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        800: "http://fonts.gstatic.com/s/codacaption/v11/YDl6urZh-DUFhiMBTgAnz_qsay_1ZmRGmC8pVRdIfAg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Codystar",
      category: "display",
      variants: ["300", "regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/codystar/v5/EVaUzfJkcb8Zqx9kzQLXqqCWcynf_cDxXwCLxiixG1c.ttf",
        regular:
          "http://fonts.gstatic.com/s/codystar/v5/EN-CPFKYowSI7SuR7-0cZA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Coiny",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "tamil", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/coiny/v3/B-pC9lRxssd2RDK37Rdekw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Combo",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/combo/v6/Nab98KjR3JZSSPGtzLyXNw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Comfortaa",
      category: "display",
      variants: ["300", "regular", "700"],
      subsets: [
        "cyrillic",
        "latin",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v12",
      lastModified: "2017-11-07",
      files: {
        300: "http://fonts.gstatic.com/s/comfortaa/v12/r_tUZNl0G8xCoOmp_JkSCi3USBnSvpkopQaUR-2r7iU.ttf",
        regular:
          "http://fonts.gstatic.com/s/comfortaa/v12/lZx6C1VViPgSOhCBUP7hXA.ttf",
        700: "http://fonts.gstatic.com/s/comfortaa/v12/fND5XPYKrF2tQDwwfWZJIy3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Coming Soon",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/comingsoon/v8/Yz2z3IAe2HSQAOWsSG8COKCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Concert One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/concertone/v8/N5IWCIGhUNdPZn_efTxKN6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Condiment",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/condiment/v5/CstmdiPpgFSV0FUNL5LrJA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Content",
      category: "display",
      variants: ["regular", "700"],
      subsets: ["khmer"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/content/v9/l8qaLjygvOkDEU2G6-cjfQ.ttf",
        700: "http://fonts.gstatic.com/s/content/v9/7PivP8Zvs2qn6F6aNbSQe_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Contrail One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/contrailone/v7/b41KxjgiyqX-hkggANDU6C3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Convergence",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/convergence/v6/eykrGz1NN_YpQmkAZjW-qKCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cookie",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cookie/v8/HxeUC62y_YdDbiFlze357A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Copse",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/copse/v7/wikLrtPGjZDvZ5w2i5HLWg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Corben",
      category: "display",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/corben/v11/tTysMZkt-j8Y5yhkgsoajQ.ttf",
        700: "http://fonts.gstatic.com/s/corben/v11/lirJaFSQWdGQuV--fksg5g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cormorant",
      category: "serif",
      variants: [
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
      ],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v6",
      lastModified: "2017-11-21",
      files: {
        300: "http://fonts.gstatic.com/s/cormorant/v6/diggKPcUerIA8GQWRVxsVS3USBnSvpkopQaUR-2r7iU.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/cormorant/v6/UydD9tmk-DfLnEFRr_bBZy9-WlPSxbfiI49GsXo3q0g.ttf",
        regular:
          "http://fonts.gstatic.com/s/cormorant/v6/9vWr5LgrNEgvhv1P3z9uuQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/cormorant/v6/zzcH3j00ejnIc8jicdcz6KCWcynf_cDxXwCLxiixG1c.ttf",
        500: "http://fonts.gstatic.com/s/cormorant/v6/lwoiMb1lzDf49h802vpRUy3USBnSvpkopQaUR-2r7iU.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/cormorant/v6/UydD9tmk-DfLnEFRr_bBZ8CNfqCYlB_eIx7H1TVXe60.ttf",
        600: "http://fonts.gstatic.com/s/cormorant/v6/LKEtp8XimHLN0gSYqnV9qy3USBnSvpkopQaUR-2r7iU.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/cormorant/v6/UydD9tmk-DfLnEFRr_bBZ5Z7xm-Bj30Bj2KNdXDzSZg.ttf",
        700: "http://fonts.gstatic.com/s/cormorant/v6/vOi7JV5F3JmPzXDgUqUwgS3USBnSvpkopQaUR-2r7iU.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/cormorant/v6/UydD9tmk-DfLnEFRr_bBZ3e1Pd76Vl7zRpE7NLJQ7XU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cormorant Garamond",
      category: "serif",
      variants: [
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
      ],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v5",
      lastModified: "2017-11-21",
      files: {
        300: "http://fonts.gstatic.com/s/cormorantgaramond/v5/iEjm9hVxcattz37Y8gZwVXDeRRUpi2fYbqcTC9PsYaU.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/cormorantgaramond/v5/zuqx3k1yUEl3Eavo-ZPEAjZXe39LdglsIzDOvKnCCso.ttf",
        regular:
          "http://fonts.gstatic.com/s/cormorantgaramond/v5/EI2hhCO6kSfLAy-Dpd8fd7_BES7rBA-D9Lo3vCx9yHc.ttf",
        italic:
          "http://fonts.gstatic.com/s/cormorantgaramond/v5/eGTlzchVxDKKvK6d7drzlkVlEttMzBRhK_wsRQ4MqEE.ttf",
        500: "http://fonts.gstatic.com/s/cormorantgaramond/v5/iEjm9hVxcattz37Y8gZwVSkwnhSVYGQY4MSUB3uw374.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/cormorantgaramond/v5/zuqx3k1yUEl3Eavo-ZPEAq8qrY1CcUgPLrA3ytfr3SY.ttf",
        600: "http://fonts.gstatic.com/s/cormorantgaramond/v5/iEjm9hVxcattz37Y8gZwVVc2xdGA7R8efE0K6NwSoyI.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/cormorantgaramond/v5/zuqx3k1yUEl3Eavo-ZPEAqms9Rm_p2hhD4xhClOGPEw.ttf",
        700: "http://fonts.gstatic.com/s/cormorantgaramond/v5/iEjm9hVxcattz37Y8gZwVdNg01MkafbqNYmDx8wt95c.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/cormorantgaramond/v5/zuqx3k1yUEl3Eavo-ZPEAvEntfLz8TC-DlAIEJQEwCA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cormorant Infant",
      category: "serif",
      variants: [
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
      ],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v5",
      lastModified: "2017-11-21",
      files: {
        300: "http://fonts.gstatic.com/s/cormorantinfant/v5/MYRpw6pQIf0XStsiZXQWA_alucuYFvoGqpCMGloCN2Y.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/cormorantinfant/v5/PK34LKusK6SSQFR2m5-LZgNCjGMFnYSoo4kW2wZNowE.ttf",
        regular:
          "http://fonts.gstatic.com/s/cormorantinfant/v5/q5F0I_a42y_qtMoOtqdjagGlf-pqPDOheSBqZOVpkRo.ttf",
        italic:
          "http://fonts.gstatic.com/s/cormorantinfant/v5/U6OamtMgLoVs0zd53Z1pNpbq6_N3pcDBvA-VsecMIAA.ttf",
        500: "http://fonts.gstatic.com/s/cormorantinfant/v5/MYRpw6pQIf0XStsiZXQWA4PJQ8Vh-2Qw35Pq7cVYzdo.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/cormorantinfant/v5/PK34LKusK6SSQFR2m5-LZq9x-au7fLBTFpfuT52_G64.ttf",
        600: "http://fonts.gstatic.com/s/cormorantinfant/v5/MYRpw6pQIf0XStsiZXQWA9G0tNuOpbNMRdNl4S5e-n0.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/cormorantinfant/v5/PK34LKusK6SSQFR2m5-LZkZbdnTqrL_1WMEFjxg0OwY.ttf",
        700: "http://fonts.gstatic.com/s/cormorantinfant/v5/MYRpw6pQIf0XStsiZXQWAx-3ZynwDtU_450Ho62jf_I.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/cormorantinfant/v5/PK34LKusK6SSQFR2m5-LZmKEEmz9BBHY1o7RrRAiUXQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cormorant SC",
      category: "serif",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v5",
      lastModified: "2017-11-21",
      files: {
        300: "http://fonts.gstatic.com/s/cormorantsc/v5/CCo4fI9EYzhUJcvojQ9Em6cQoVhARpoaILP7amxE_8g.ttf",
        regular:
          "http://fonts.gstatic.com/s/cormorantsc/v5/o2HxNCgvhmwJdltu-68tzC3USBnSvpkopQaUR-2r7iU.ttf",
        500: "http://fonts.gstatic.com/s/cormorantsc/v5/CCo4fI9EYzhUJcvojQ9Em5MQuUSAwdHsY8ov_6tk1oA.ttf",
        600: "http://fonts.gstatic.com/s/cormorantsc/v5/CCo4fI9EYzhUJcvojQ9Em2v8CylhIUtwUiYO7Z2wXbE.ttf",
        700: "http://fonts.gstatic.com/s/cormorantsc/v5/CCo4fI9EYzhUJcvojQ9Em0D2ttfZwueP-QU272T9-k4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cormorant Unicase",
      category: "serif",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v5",
      lastModified: "2017-11-21",
      files: {
        300: "http://fonts.gstatic.com/s/cormorantunicase/v5/-0mwRHhjEGfrz-UDHJ_78TyAYAK5JX1-zBpfFXu9t3Y.ttf",
        regular:
          "http://fonts.gstatic.com/s/cormorantunicase/v5/THO7JMNV6qRoZlg7dU5RUz01TLsHlMvD1uPU3gXOh9s.ttf",
        500: "http://fonts.gstatic.com/s/cormorantunicase/v5/-0mwRHhjEGfrz-UDHJ_78WActzpz5sLElWWJpZBcHK4.ttf",
        600: "http://fonts.gstatic.com/s/cormorantunicase/v5/-0mwRHhjEGfrz-UDHJ_78U0bQT13XmwBbvkXy6Yb64Y.ttf",
        700: "http://fonts.gstatic.com/s/cormorantunicase/v5/-0mwRHhjEGfrz-UDHJ_78Z5CFeQBXku3ADXbkP2V7W8.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cormorant Upright",
      category: "serif",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v4",
      lastModified: "2017-10-09",
      files: {
        300: "http://fonts.gstatic.com/s/cormorantupright/v4/PwJT_lCdbLUyVq-tARIPhjCfCvaSiUMfec2BKBTMAaw.ttf",
        regular:
          "http://fonts.gstatic.com/s/cormorantupright/v4/0n68kajKjTOJn9EPQkf1a-ojtTJJf2MtgkoRSid3NcM.ttf",
        500: "http://fonts.gstatic.com/s/cormorantupright/v4/PwJT_lCdbLUyVq-tARIPhiWhx5Kr-bzfZXhgF-AnSvk.ttf",
        600: "http://fonts.gstatic.com/s/cormorantupright/v4/PwJT_lCdbLUyVq-tARIPhuDigFx2V_wQ4SOTZdg5a2s.ttf",
        700: "http://fonts.gstatic.com/s/cormorantupright/v4/PwJT_lCdbLUyVq-tARIPhuO6SP7lRr11seyd3AkK37Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Courgette",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/courgette/v5/2YO0EYtyE9HUPLZprahpZA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cousine",
      category: "monospace",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "hebrew",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v12",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cousine/v12/GYX4bPXObJNJo63QJEUnLg.ttf",
        italic:
          "http://fonts.gstatic.com/s/cousine/v12/1WtIuajLoo8vjVwsrZ3eOg.ttf",
        700: "http://fonts.gstatic.com/s/cousine/v12/FXEOnNUcCzhdtoBxiq-lovesZW2xOQ-xsNqO47m55DA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/cousine/v12/y_AZ5Sz-FwL1lux2xLSTZS3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Coustard",
      category: "serif",
      variants: ["regular", "900"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/coustard/v8/iO2Rs5PmqAEAXoU3SkMVBg.ttf",
        900: "http://fonts.gstatic.com/s/coustard/v8/W02OCWO6OfMUHz6aVyegQ6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Covered By Your Grace",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/coveredbyyourgrace/v7/6ozZp4BPlrbDRWPe3EBGA6CVUMdvnk-GcAiZQrX9Gek.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Crafty Girls",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/craftygirls/v7/0Sv8UWFFdhQmesHL32H8oy3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Creepster",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/creepster/v6/0vdr5kWJ6aJlOg5JvxnXzQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Crete Round",
      category: "serif",
      variants: ["regular", "italic"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/creteround/v6/B8EwN421qqOCCT8vOH4wJ6CWcynf_cDxXwCLxiixG1c.ttf",
        italic:
          "http://fonts.gstatic.com/s/creteround/v6/5xAt7XK2vkUdjhGtt98unUeOrDcLawS7-ssYqLr2Xp4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Crimson Text",
      category: "serif",
      variants: ["regular", "italic", "600", "600italic", "700", "700italic"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/crimsontext/v8/3IFMwfRa07i-auYR-B-zNS3USBnSvpkopQaUR-2r7iU.ttf",
        italic:
          "http://fonts.gstatic.com/s/crimsontext/v8/a5QZnvmn5amyNI-t2BMkWPMZXuCXbOrAvx5R0IT5Oyo.ttf",
        600: "http://fonts.gstatic.com/s/crimsontext/v8/rEy5tGc5HdXy56Xvd4f3I2v8CylhIUtwUiYO7Z2wXbE.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/crimsontext/v8/4j4TR-EfnvCt43InYpUNDIR-5-urNOGAobhAyctHvW8.ttf",
        700: "http://fonts.gstatic.com/s/crimsontext/v8/rEy5tGc5HdXy56Xvd4f3I0D2ttfZwueP-QU272T9-k4.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/crimsontext/v8/4j4TR-EfnvCt43InYpUNDPAs9-1nE9qOqhChW0m4nDE.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Croissant One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/croissantone/v5/mPjsOObnC77fp1cvZlOfIYjjx0o0jr6fNXxPgYh_a8Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Crushed",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/crushed/v8/aHwSejs3Kt0Lg95u7j32jA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cuprum",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cuprum/v9/JgXs0F_UiaEdAS74msmFNg.ttf",
        italic:
          "http://fonts.gstatic.com/s/cuprum/v9/cLEz0KV6OxInnktSzpk58g.ttf",
        700: "http://fonts.gstatic.com/s/cuprum/v9/6tl3_FkDeXSD72oEHuJh4w.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/cuprum/v9/bnkXaBfoYvaJ75axRPSwVKCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cutive",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cutive/v9/G2bW-ImyOCwKxBkLyz39YQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Cutive Mono",
      category: "monospace",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/cutivemono/v6/ncWQtFVKcSs8OW798v30k6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Damion",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/damion/v7/13XtECwKxhD_VrOqXL4SiA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Dancing Script",
      category: "handwriting",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/dancingscript/v9/DK0eTGXiZjN6yA8zAEyM2RnpV0hQCek3EmWnCPrvGRM.ttf",
        700: "http://fonts.gstatic.com/s/dancingscript/v9/KGBfwabt0ZRLA5W1ywjowb_dAmXiKjTPGCuO6G2MbfA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Dangrek",
      category: "display",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v9",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/dangrek/v9/LOaFhBT-EHNxZjV8DAW_ew.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "David Libre",
      category: "serif",
      variants: ["regular", "500", "700"],
      subsets: ["latin", "hebrew", "latin-ext", "vietnamese"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/davidlibre/v2/Fp_YuX4CP0pzlSUtACdOo6CWcynf_cDxXwCLxiixG1c.ttf",
        500: "http://fonts.gstatic.com/s/davidlibre/v2/ea-623K8OFNeGhfSzdpmysCNfqCYlB_eIx7H1TVXe60.ttf",
        700: "http://fonts.gstatic.com/s/davidlibre/v2/ea-623K8OFNeGhfSzdpmyne1Pd76Vl7zRpE7NLJQ7XU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Dawning of a New Day",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/dawningofanewday/v8/JiDsRhiKZt8uz3NJ5xA06gXLnohmOYWQZqo_sW8GLTk.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Days One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/daysone/v7/kzwZjNhc1iabMsrc_hKBIA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Dekko",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v4",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/dekko/v4/AKtgABKC1rUxgIgS-bpojw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Delius",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/delius/v7/TQA163qafki2-gV-B6F_ag.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Delius Swash Caps",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/deliusswashcaps/v9/uXyrEUnoWApxIOICunRq7yIrxb5zDVgU2N3VzXm7zq4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Delius Unicase",
      category: "handwriting",
      variants: ["regular", "700"],
      subsets: ["latin"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/deliusunicase/v10/b2sKujV3Q48RV2PQ0k1vqu6rPKfVZo7L2bERcf0BDns.ttf",
        700: "http://fonts.gstatic.com/s/deliusunicase/v10/7FTMTITcb4dxUp99FAdTqNy5weKXdcrx-wE0cgECMq8.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Della Respira",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/dellarespira/v5/F4E6Lo_IZ6L9AJCcbqtDVeDcg5akpSnIcsPhLOFv7l8.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Denk One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/denkone/v5/TdXOeA4eA_hEx4W8Sh9wPw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Devonshire",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/devonshire/v6/I3ct_2t12SYizP8ZC-KFi_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Dhurjati",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "telugu"],
      version: "v5",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/dhurjati/v5/uV6jO5e2iFMbGB0z79Cy5g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Didact Gothic",
      category: "sans-serif",
      variants: ["regular"],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "cyrillic-ext",
      ],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/didactgothic/v11/v8_72sD3DYMKyM0dn3LtWotBLojGU5Qdl8-5NL4v70w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Diplomata",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/diplomata/v9/u-ByBiKgN6rTMA36H3kcKg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Diplomata SC",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/diplomatasc/v6/JdVwAwfE1a_pahXjk5qpNi3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Domine",
      category: "serif",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/domine/v5/wfVIgamVFjMNQAEWurCiHA.ttf",
        700: "http://fonts.gstatic.com/s/domine/v5/phBcG1ZbQFxUIt18hPVxnw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Donegal One",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/donegalone/v5/6kN4-fDxz7T9s5U61HwfF6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Doppio One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/doppioone/v5/WHZ3HJQotpk_4aSMNBo_t_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Dorsa",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/dorsa/v8/wCc3cUe6XrmG2LQE6GlIrw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Dosis",
      category: "sans-serif",
      variants: ["200", "300", "regular", "500", "600", "700", "800"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        200: "http://fonts.gstatic.com/s/dosis/v7/ztftab0r6hcd7AeurUGrSQ.ttf",
        300: "http://fonts.gstatic.com/s/dosis/v7/awIB6L0h5mb0plIKorXmuA.ttf",
        regular:
          "http://fonts.gstatic.com/s/dosis/v7/rJRlixu-w0JZ1MyhJpao_Q.ttf",
        500: "http://fonts.gstatic.com/s/dosis/v7/ruEXDOFMxDPGnjCBKRqdAQ.ttf",
        600: "http://fonts.gstatic.com/s/dosis/v7/KNAswRNwm3tfONddYyidxg.ttf",
        700: "http://fonts.gstatic.com/s/dosis/v7/AEEAj0ONidK8NQQMBBlSig.ttf",
        800: "http://fonts.gstatic.com/s/dosis/v7/nlrKd8E69vvUU39XGsvR7Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Dr Sugiyama",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/drsugiyama/v6/S5Yx3MIckgoyHhhS4C9Tv6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Duru Sans",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/durusans/v10/xn7iYH8xwmSyTvEV_HOxTw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Dynalight",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/dynalight/v6/-CWsIe8OUDWTIHjSAh41kA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "EB Garamond",
      category: "serif",
      variants: [
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
      ],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v9",
      lastModified: "2017-11-07",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ebgaramond/v9/CDR0kuiFK7I1OZ2hSdR7G6CWcynf_cDxXwCLxiixG1c.ttf",
        italic:
          "http://fonts.gstatic.com/s/ebgaramond/v9/a7ivpTe3zZzednsAv-J8JUeOrDcLawS7-ssYqLr2Xp4.ttf",
        500: "http://fonts.gstatic.com/s/ebgaramond/v9/op4fHM8PJYvTt3cOgGzs_8CNfqCYlB_eIx7H1TVXe60.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/ebgaramond/v9/FBuKd0n5KoiDwUwHEzWyyWnWRcJAYo5PSCx8UfGMHCI.ttf",
        600: "http://fonts.gstatic.com/s/ebgaramond/v9/op4fHM8PJYvTt3cOgGzs_5Z7xm-Bj30Bj2KNdXDzSZg.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/ebgaramond/v9/FBuKd0n5KoiDwUwHEzWyyZe6We3S5L6hKLscKpOkmlo.ttf",
        700: "http://fonts.gstatic.com/s/ebgaramond/v9/op4fHM8PJYvTt3cOgGzs_3e1Pd76Vl7zRpE7NLJQ7XU.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/ebgaramond/v9/FBuKd0n5KoiDwUwHEzWyyc_zJjSACmk0BRPxQqhnNLU.ttf",
        800: "http://fonts.gstatic.com/s/ebgaramond/v9/op4fHM8PJYvTt3cOgGzs_w89PwPrYLaRFJ-HNCU9NbA.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/ebgaramond/v9/FBuKd0n5KoiDwUwHEzWyySad_7rtf4IdDfsLVg-2OV4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Eagle Lake",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/eaglelake/v5/ZKlYin7caemhx9eSg6RvPfesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Eater",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/eater/v6/gm6f3OmYEdbs3lPQtUfBkA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Economica",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/economica/v5/G4rJRujzZbq9Nxngu9l3hg.ttf",
        italic:
          "http://fonts.gstatic.com/s/economica/v5/p5O9AVeUqx_n35xQRinNYaCWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/economica/v5/UK4l2VEpwjv3gdcwbwXE9C3USBnSvpkopQaUR-2r7iU.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/economica/v5/ac5dlUsedQ03RqGOeay-3Xe1Pd76Vl7zRpE7NLJQ7XU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Eczar",
      category: "serif",
      variants: ["regular", "500", "600", "700", "800"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/eczar/v6/uKZcAQ5JBBs1UbeXFRbBRg.ttf",
        500: "http://fonts.gstatic.com/s/eczar/v6/Ooe4KaPp2594tF8TbMfdlQ.ttf",
        600: "http://fonts.gstatic.com/s/eczar/v6/IjQsWW0bmgkZ6lnN72cnTQ.ttf",
        700: "http://fonts.gstatic.com/s/eczar/v6/ELC8RVXfBMb3VuuHtMwBOA.ttf",
        800: "http://fonts.gstatic.com/s/eczar/v6/9Uyt6nTZLx_Qj5_WRah-iQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "El Messiri",
      category: "sans-serif",
      variants: ["regular", "500", "600", "700"],
      subsets: ["cyrillic", "latin", "arabic"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/elmessiri/v2/dik94vfrFvHFnvdvxaX8N_esZW2xOQ-xsNqO47m55DA.ttf",
        500: "http://fonts.gstatic.com/s/elmessiri/v2/kQW9PA2krAOzditagrX75pp-63r6doWhTEbsfBIRJ7A.ttf",
        600: "http://fonts.gstatic.com/s/elmessiri/v2/HYl7TNqFfA1utGLZRWwzLPpTEJqju4Hz1txDWij77d4.ttf",
        700: "http://fonts.gstatic.com/s/elmessiri/v2/ji73glXFIetaSqMU3cz7rAJKKGfqHaYFsRG-T3ceEVo.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Electrolize",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/electrolize/v6/yFVu5iokC-nt4B1Cyfxb9aCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Elsie",
      category: "display",
      variants: ["regular", "900"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/elsie/v7/gwspePauE45BJu6Ok1QrfQ.ttf",
        900: "http://fonts.gstatic.com/s/elsie/v7/1t-9f0N2NFYwAgN7oaISqg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Elsie Swash Caps",
      category: "display",
      variants: ["regular", "900"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/elsieswashcaps/v6/9L3hIJMPCf6sxCltnxd6X2YeFSdnSpRYv5h9gpdlD1g.ttf",
        900: "http://fonts.gstatic.com/s/elsieswashcaps/v6/iZnus9qif0tR5pGaDv5zdKoKBWBozTtxi30NfZDOXXU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Emblema One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/emblemaone/v6/7IlBUjBWPIiw7cr_O2IfSaCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Emilys Candy",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/emilyscandy/v5/PofLVm6v1SwZGOzC8s-I3S3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Encode Sans",
      category: "sans-serif",
      variants: [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v2",
      lastModified: "2017-11-21",
      files: {
        100: "http://fonts.gstatic.com/s/encodesans/v2/TvUFkOGoNYwmv-XugrRC14AWxXGWZ3yJw6KhWS7MxOk.ttf",
        200: "http://fonts.gstatic.com/s/encodesans/v2/IaOhmWC4W3-qZLH1UUd4vEnzyIngrzGjGh22wPb6cGM.ttf",
        300: "http://fonts.gstatic.com/s/encodesans/v2/IaOhmWC4W3-qZLH1UUd4vC9-WlPSxbfiI49GsXo3q0g.ttf",
        regular:
          "http://fonts.gstatic.com/s/encodesans/v2/xpYstnmVhPpbvOHKD75EK6CWcynf_cDxXwCLxiixG1c.ttf",
        500: "http://fonts.gstatic.com/s/encodesans/v2/IaOhmWC4W3-qZLH1UUd4vMCNfqCYlB_eIx7H1TVXe60.ttf",
        600: "http://fonts.gstatic.com/s/encodesans/v2/IaOhmWC4W3-qZLH1UUd4vJZ7xm-Bj30Bj2KNdXDzSZg.ttf",
        700: "http://fonts.gstatic.com/s/encodesans/v2/IaOhmWC4W3-qZLH1UUd4vHe1Pd76Vl7zRpE7NLJQ7XU.ttf",
        800: "http://fonts.gstatic.com/s/encodesans/v2/IaOhmWC4W3-qZLH1UUd4vA89PwPrYLaRFJ-HNCU9NbA.ttf",
        900: "http://fonts.gstatic.com/s/encodesans/v2/IaOhmWC4W3-qZLH1UUd4vCenaqEuufTBk9XMKnKmgDA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Encode Sans Condensed",
      category: "sans-serif",
      variants: [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v2",
      lastModified: "2017-11-21",
      files: {
        100: "http://fonts.gstatic.com/s/encodesanscondensed/v2/6LOoEWi9It096ZzMNw6yeii7tdGxScTr3oVgcrTUqWw.ttf",
        200: "http://fonts.gstatic.com/s/encodesanscondensed/v2/UP_H-DzI6prLPN-PMUyxY61IHoFZjDq9yl49NJ3Y0wY.ttf",
        300: "http://fonts.gstatic.com/s/encodesanscondensed/v2/UP_H-DzI6prLPN-PMUyxY-ZroXgFx_lT3TTeDaAqrWE.ttf",
        regular:
          "http://fonts.gstatic.com/s/encodesanscondensed/v2/CbFzpyBSY4j-AYSd59uzHIelbRYnLTTQA1Z5cVLnsI4.ttf",
        500: "http://fonts.gstatic.com/s/encodesanscondensed/v2/UP_H-DzI6prLPN-PMUyxY64Ixr3FMLIaz6yY1ILODIU.ttf",
        600: "http://fonts.gstatic.com/s/encodesanscondensed/v2/UP_H-DzI6prLPN-PMUyxY8MHImBNo4aGUuMCjGiDijI.ttf",
        700: "http://fonts.gstatic.com/s/encodesanscondensed/v2/UP_H-DzI6prLPN-PMUyxY7GMx7y0UuyPIsLqSMg46Ks.ttf",
        800: "http://fonts.gstatic.com/s/encodesanscondensed/v2/UP_H-DzI6prLPN-PMUyxY_3VPWKD9LjLpSGgTAgUUIc.ttf",
        900: "http://fonts.gstatic.com/s/encodesanscondensed/v2/UP_H-DzI6prLPN-PMUyxY73y6LE9HhLx9tlnlwi3OAw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Encode Sans Expanded",
      category: "sans-serif",
      variants: [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v2",
      lastModified: "2017-11-21",
      files: {
        100: "http://fonts.gstatic.com/s/encodesansexpanded/v2/SxJCe-5XtgTwkLeuB6DsDAzYtaUryPdMybTmqF2t-hk.ttf",
        200: "http://fonts.gstatic.com/s/encodesansexpanded/v2/NZFW_aAjtWMwFwRPQHyMtImyl4eLRAk2hWaf4usQtfw.ttf",
        300: "http://fonts.gstatic.com/s/encodesansexpanded/v2/NZFW_aAjtWMwFwRPQHyMtE8dNemX_23MZOKO5OoYF5E.ttf",
        regular:
          "http://fonts.gstatic.com/s/encodesansexpanded/v2/OdOWbHhxwo9XAUoeS5o4Dg7dxr0N5HY0cZKknTIL6n4.ttf",
        500: "http://fonts.gstatic.com/s/encodesansexpanded/v2/NZFW_aAjtWMwFwRPQHyMtPqCJK4Zn8SYLcLgnaiBGrc.ttf",
        600: "http://fonts.gstatic.com/s/encodesansexpanded/v2/NZFW_aAjtWMwFwRPQHyMtFwX9co0a2-oIpf1o8i-1K0.ttf",
        700: "http://fonts.gstatic.com/s/encodesansexpanded/v2/NZFW_aAjtWMwFwRPQHyMtD3JW4OQm61sg8k8DfLBAwg.ttf",
        800: "http://fonts.gstatic.com/s/encodesansexpanded/v2/NZFW_aAjtWMwFwRPQHyMtJvi7umicd6qVgIYLFojqyc.ttf",
        900: "http://fonts.gstatic.com/s/encodesansexpanded/v2/NZFW_aAjtWMwFwRPQHyMtGZrxQvJ_xEKbxayeNEjyrc.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Encode Sans Semi Condensed",
      category: "sans-serif",
      variants: [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v2",
      lastModified: "2017-11-21",
      files: {
        100: "http://fonts.gstatic.com/s/encodesanssemicondensed/v2/E6kA5T3mzxUj69IdQg70PS1QEJchpDhTUwbwiSjEPbgt1EgZ0r6ZKKUGlEftq-4l.ttf",
        200: "http://fonts.gstatic.com/s/encodesanssemicondensed/v2/z-mVMDpNLBzCo6eVg95vHVxi1xYyRqMxS_FPu-moW0lnrnXkzuOM3_obd5Pijc8I.ttf",
        300: "http://fonts.gstatic.com/s/encodesanssemicondensed/v2/z-mVMDpNLBzCo6eVg95vHSLQwj9Lduqb1W3tq4fXf91Hjqw3C2sEu_rLGKi69l6e.ttf",
        regular:
          "http://fonts.gstatic.com/s/encodesanssemicondensed/v2/70xnFP2R6L67b4lbb0LqFQ760Nu0ZmWpK1JTCHVCKHz3rGVtsTkPsbDajuO5ueQw.ttf",
        500: "http://fonts.gstatic.com/s/encodesanssemicondensed/v2/z-mVMDpNLBzCo6eVg95vHWPzD9HBxt0HXJBsJbnj8Taafut6-naFoUxG7HwSESew.ttf",
        600: "http://fonts.gstatic.com/s/encodesanssemicondensed/v2/z-mVMDpNLBzCo6eVg95vHZTIxrxLvLMtU-yhyAf1TK_6UxCao7uB89bcQ1oo--3e.ttf",
        700: "http://fonts.gstatic.com/s/encodesanssemicondensed/v2/z-mVMDpNLBzCo6eVg95vHanrccv-0xgQwXIoROQBHDkCSihn6h2mBbERvk93HhFa.ttf",
        800: "http://fonts.gstatic.com/s/encodesanssemicondensed/v2/z-mVMDpNLBzCo6eVg95vHaUGwPLApwd9av9Pcjv04cOpN24TwUgSdG0iUOmnC_tI.ttf",
        900: "http://fonts.gstatic.com/s/encodesanssemicondensed/v2/z-mVMDpNLBzCo6eVg95vHf3LPq0EY0JuN61BrMSCA9udBAFcbdBtG4hJ7aeN0Leh.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Encode Sans Semi Expanded",
      category: "sans-serif",
      variants: [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v2",
      lastModified: "2017-11-21",
      files: {
        100: "http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/Dt9vBR-jlFaGi37WwOwD_8qIAxu59oivT8gVJSaPAJmglnMp3_3A8V8Ai8YosRtX.ttf",
        200: "http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/CzlMbAciMXgtU6UUaNDI4iyuBgySKCdxv6GjzoxXXEct1EgZ0r6ZKKUGlEftq-4l.ttf",
        300: "http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/CzlMbAciMXgtU6UUaNDI4mA0loIJ_cqzG2SO7pmT2v8t1EgZ0r6ZKKUGlEftq-4l.ttf",
        regular:
          "http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/L50h_XWfeGcmQgSaLLv8qDl-hG_EEbQLBeCEvsoBv9c.ttf",
        500: "http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/CzlMbAciMXgtU6UUaNDI4m9ZGOr7ke8-zfCGnYaqVkwt1EgZ0r6ZKKUGlEftq-4l.ttf",
        600: "http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/CzlMbAciMXgtU6UUaNDI4jZr6ABenySL2MEoV49ZPIEt1EgZ0r6ZKKUGlEftq-4l.ttf",
        700: "http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/CzlMbAciMXgtU6UUaNDI4vb58e8syHA9EvUqaFcpH8kt1EgZ0r6ZKKUGlEftq-4l.ttf",
        800: "http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/CzlMbAciMXgtU6UUaNDI4v1ujhhC8jANxa3d-BaQZ3st1EgZ0r6ZKKUGlEftq-4l.ttf",
        900: "http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/CzlMbAciMXgtU6UUaNDI4sIOIZ6BsfRi1i9aEyUWch4t1EgZ0r6ZKKUGlEftq-4l.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Engagement",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/engagement/v6/4Uz0Jii7oVPcaFRYmbpU6vesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Englebert",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/englebert/v5/sll38iOvOuarDTYBchlP3Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Enriqueta",
      category: "serif",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/enriqueta/v6/_p90TrIwR1SC-vDKtmrv6A.ttf",
        700: "http://fonts.gstatic.com/s/enriqueta/v6/I27Pb-wEGH2ajLYP0QrtSC3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Erica One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ericaone/v8/cIBnH2VAqQMIGYAcE4ufvQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Esteban",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/esteban/v5/ESyhLgqDDyK5JcFPp2svDw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Euphoria Script",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/euphoriascript/v5/c4XB4Iijj_NvSsCF4I0O2MxLhO8OSNnfAp53LK1_iRs.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ewert",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ewert/v5/Em8hrzuzSbfHcTVqMjbAQg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Exo",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v6",
      lastModified: "2017-11-21",
      files: {
        100: "http://fonts.gstatic.com/s/exo/v6/RI7A9uwjRmPbVp0n8e-Jvg.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/exo/v6/qtGyZZlWb2EEvby3ZPosxw.ttf",
        200: "http://fonts.gstatic.com/s/exo/v6/F8OfC_swrRRxpFt-tlXZQg.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/exo/v6/fr4HBfXHYiIngW2_bhlgRw.ttf",
        300: "http://fonts.gstatic.com/s/exo/v6/SBrN7TKUqgGUvfxqHqsnNw.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/exo/v6/3gmiLjBegIfcDLISjTGA1g.ttf",
        regular: "http://fonts.gstatic.com/s/exo/v6/eUEzTFueNXRVhbt4PEB8kQ.ttf",
        italic: "http://fonts.gstatic.com/s/exo/v6/cfgolWisMSURhpQeVHl_NA.ttf",
        500: "http://fonts.gstatic.com/s/exo/v6/jCg6DmGGXt_OVyp5ofQHPw.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/exo/v6/lo5eTdCNJZQVN08p8RnzAQ.ttf",
        600: "http://fonts.gstatic.com/s/exo/v6/q_SG5kXUmOcIvFpgtdZnlw.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/exo/v6/0cExa8K_pxS2lTuMr68XUA.ttf",
        700: "http://fonts.gstatic.com/s/exo/v6/3_jwsL4v9uHjl5Q37G57mw.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/exo/v6/0me55yJIxd5vyQ9bF7SsiA.ttf",
        800: "http://fonts.gstatic.com/s/exo/v6/yLPuxBuV0lzqibRJyooOJg.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/exo/v6/n3LejeKVj_8gtZq5fIgNYw.ttf",
        900: "http://fonts.gstatic.com/s/exo/v6/97d0nd6Yv4-SA_X92xAuZA.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/exo/v6/JHTkQVhzyLtkY13Ye95TJQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Exo 2",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["cyrillic", "latin", "latin-ext"],
      version: "v4",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/exo2/v4/oVOtQy53isv97g4UhBUDqg.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/exo2/v4/LNYVgsJcaCxoKFHmd4AZcg.ttf",
        200: "http://fonts.gstatic.com/s/exo2/v4/qa-Ci2pBwJdCxciE1ErifQ.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/exo2/v4/DCrVxDVvS69n50O-5erZVvesZW2xOQ-xsNqO47m55DA.ttf",
        300: "http://fonts.gstatic.com/s/exo2/v4/nLUBdz_lHHoVIPor05Byhw.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/exo2/v4/iSy9VTeUTiqiurQg2ywtu_esZW2xOQ-xsNqO47m55DA.ttf",
        regular:
          "http://fonts.gstatic.com/s/exo2/v4/Pf_kZuIH5c5WKVkQUaeSWQ.ttf",
        italic: "http://fonts.gstatic.com/s/exo2/v4/xxA5ZscX9sTU6U0lZJUlYA.ttf",
        500: "http://fonts.gstatic.com/s/exo2/v4/oM0rzUuPqVJpW-VEIpuW5w.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/exo2/v4/amzRVCB-gipwdihZZ2LtT_esZW2xOQ-xsNqO47m55DA.ttf",
        600: "http://fonts.gstatic.com/s/exo2/v4/YnSn3HsyvyI1feGSdRMYqA.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/exo2/v4/Vmo58BiptGwfVFb0teU5gPesZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/exo2/v4/2DiK4XkdTckfTk6we73-bQ.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/exo2/v4/Sdo-zW-4_--pDkTg6bYrY_esZW2xOQ-xsNqO47m55DA.ttf",
        800: "http://fonts.gstatic.com/s/exo2/v4/IVYl_7dJruOg8zKRpC8Hrw.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/exo2/v4/p0TA6KeOz1o4rySEbvUxI_esZW2xOQ-xsNqO47m55DA.ttf",
        900: "http://fonts.gstatic.com/s/exo2/v4/e8csG8Wnu87AF6uCndkFRQ.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/exo2/v4/KPhsGCoT2-7Uj6pMlRscH_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Expletus Sans",
      category: "display",
      variants: [
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
      ],
      subsets: ["latin"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/expletussans/v10/gegTSDBDs5le3g6uxU1ZsX8f0n03UdmQgF_CLvNR2vg.ttf",
        italic:
          "http://fonts.gstatic.com/s/expletussans/v10/Y-erXmY0b6DU_i2Qu0hTJj4G9C9ttb0Oz5Cvf0qOitE.ttf",
        500: "http://fonts.gstatic.com/s/expletussans/v10/cl6rhMY77Ilk8lB_uYRRwAqQmZ7VjhwksfpNVG0pqGc.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/expletussans/v10/sRBNtc46w65uJE451UYmW87DCVO6wo6i5LKIyZDzK40.ttf",
        600: "http://fonts.gstatic.com/s/expletussans/v10/cl6rhMY77Ilk8lB_uYRRwCvj1tU7IJMS3CS9kCx2B3U.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/expletussans/v10/sRBNtc46w65uJE451UYmW8yKH23ZS6zCKOFHG0e_4JE.ttf",
        700: "http://fonts.gstatic.com/s/expletussans/v10/cl6rhMY77Ilk8lB_uYRRwFCbmAUID8LN-q3pJpOk3Ys.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/expletussans/v10/sRBNtc46w65uJE451UYmW5F66r9C4AnxxlBlGd7xY4g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fanwood Text",
      category: "serif",
      variants: ["regular", "italic"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/fanwoodtext/v7/hDNDHUlsSb8bgnEmDp4T_i3USBnSvpkopQaUR-2r7iU.ttf",
        italic:
          "http://fonts.gstatic.com/s/fanwoodtext/v7/0J3SBbkMZqBV-3iGxs5E9_MZXuCXbOrAvx5R0IT5Oyo.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Farsan",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese", "gujarati"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/farsan/v3/Hdf9Y76SQ6e1X0Nqk3rHtw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fascinate",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/fascinate/v6/ZE0637WWkBPKt1AmFaqD3Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fascinate Inline",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/fascinateinline/v7/lRguYfMfWArflkm5aOQ5QJmp8DTZ6iHear7UV05iykg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Faster One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/fasterone/v8/H4ciBXCHmdfClFb-vWhfyLs.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fasthand",
      category: "serif",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v8",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/fasthand/v8/6XAagHH_KmpZL67wTvsETQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fauna One",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/faunaone/v5/8kL-wpAPofcAMELI_5NRnQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Faustina",
      category: "serif",
      variants: [
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v2",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/faustina/v2/VG2SxiuKreAgH5lXZ5wbng.ttf",
        italic:
          "http://fonts.gstatic.com/s/faustina/v2/JxwP25AedFpQZdkRJXn_5_esZW2xOQ-xsNqO47m55DA.ttf",
        500: "http://fonts.gstatic.com/s/faustina/v2/DMeEDU8yYDdzN-7RbPNe8KCWcynf_cDxXwCLxiixG1c.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/faustina/v2/P6ASjT1goNMRHifKhq6WRZp-63r6doWhTEbsfBIRJ7A.ttf",
        600: "http://fonts.gstatic.com/s/faustina/v2/YOr4BI3KhIzqwTG7vH0SM6CWcynf_cDxXwCLxiixG1c.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/faustina/v2/OJMzHMQmadDP2rMiZVbZd_pTEJqju4Hz1txDWij77d4.ttf",
        700: "http://fonts.gstatic.com/s/faustina/v2/fO-A_KFKgRicxL_4JD_smaCWcynf_cDxXwCLxiixG1c.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/faustina/v2/XGqbj0LfEd8UkIzdKBNuggJKKGfqHaYFsRG-T3ceEVo.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Federant",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/federant/v9/tddZFSiGvxICNOGra0i5aA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Federo",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/federo/v9/JPhe1S2tujeyaR79gXBLeQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Felipa",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/felipa/v5/SeyfyFZY7abAQXGrOIYnYg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fenix",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/fenix/v5/Ak8wR3VSlAN7VN_eMeJj7Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Finger Paint",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/fingerpaint/v7/m_ZRbiY-aPb13R3DWPBGXy3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fira Mono",
      category: "monospace",
      variants: ["regular", "500", "700"],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "cyrillic-ext",
      ],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/firamono/v6/WQOm1D4RO-yvA9q9trJc8g.ttf",
        500: "http://fonts.gstatic.com/s/firamono/v6/PJ4zAY1ucu5ib6LzyvHMkS3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/firamono/v6/l24Wph3FsyKAbJ8dfExTZy3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fira Sans",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/firasans/v8/8lKWk2lAb6-y9gc_GLDdPKCWcynf_cDxXwCLxiixG1c.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/firasans/v8/fmobwZujc_UI4huzQvESm4AWxXGWZ3yJw6KhWS7MxOk.ttf",
        200: "http://fonts.gstatic.com/s/firasans/v8/H2QtVYRshA1CFy63P7ykZy3USBnSvpkopQaUR-2r7iU.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/firasans/v8/6s0YCA9oCTF6hM60YM-qTUnzyIngrzGjGh22wPb6cGM.ttf",
        300: "http://fonts.gstatic.com/s/firasans/v8/VTBnrK42EiOBncVyQXZ7jy3USBnSvpkopQaUR-2r7iU.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/firasans/v8/6s0YCA9oCTF6hM60YM-qTS9-WlPSxbfiI49GsXo3q0g.ttf",
        regular:
          "http://fonts.gstatic.com/s/firasans/v8/nsT0isDy56OkSX99sFQbXw.ttf",
        italic:
          "http://fonts.gstatic.com/s/firasans/v8/cPT_2ddmoxsUuMtQqa8zGqCWcynf_cDxXwCLxiixG1c.ttf",
        500: "http://fonts.gstatic.com/s/firasans/v8/zM2u8V3CuPVwAAXFQcDi4C3USBnSvpkopQaUR-2r7iU.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/firasans/v8/6s0YCA9oCTF6hM60YM-qTcCNfqCYlB_eIx7H1TVXe60.ttf",
        600: "http://fonts.gstatic.com/s/firasans/v8/TPhEsJuyxIEzWtby22btfi3USBnSvpkopQaUR-2r7iU.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/firasans/v8/6s0YCA9oCTF6hM60YM-qTZZ7xm-Bj30Bj2KNdXDzSZg.ttf",
        700: "http://fonts.gstatic.com/s/firasans/v8/DugPdSljmOTocZOR2CItOi3USBnSvpkopQaUR-2r7iU.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/firasans/v8/6s0YCA9oCTF6hM60YM-qTXe1Pd76Vl7zRpE7NLJQ7XU.ttf",
        800: "http://fonts.gstatic.com/s/firasans/v8/htOw9f-chtELyJuFCkCrFi3USBnSvpkopQaUR-2r7iU.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/firasans/v8/6s0YCA9oCTF6hM60YM-qTQ89PwPrYLaRFJ-HNCU9NbA.ttf",
        900: "http://fonts.gstatic.com/s/firasans/v8/rowJfijyp23uW9P2J-sluC3USBnSvpkopQaUR-2r7iU.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/firasans/v8/6s0YCA9oCTF6hM60YM-qTSenaqEuufTBk9XMKnKmgDA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fira Sans Condensed",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/firasanscondensed/v2/-hkH0zXsjNm-yd0g99LvtmzsEJYDLiwza6ZHrdqhthQ.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/firasanscondensed/v2/Nqqv1KfmeTlTML-ky7aaRPKr3wa5Ugsm4QGD8HSjBf8.ttf",
        200: "http://fonts.gstatic.com/s/firasanscondensed/v2/k1srRZ14gKpu4XGd0R993IBfX0yoOQz7y6Fa57EWAgY.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/firasanscondensed/v2/Z87ZCYzj43dcQd7C-kCjDzTCSvnRzshTGhbaUNxVLsY.ttf",
        300: "http://fonts.gstatic.com/s/firasanscondensed/v2/k1srRZ14gKpu4XGd0R993EMwSSh38KQVJx4ABtsZTnA.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/firasanscondensed/v2/Z87ZCYzj43dcQd7C-kCjD4_LkTZ_uhAwfmGJ084hlvM.ttf",
        regular:
          "http://fonts.gstatic.com/s/firasanscondensed/v2/HQGj1o4-qj8agzakWWMQw0b2huS6PSilRpwXI3qYZmg.ttf",
        italic:
          "http://fonts.gstatic.com/s/firasanscondensed/v2/-hkH0zXsjNm-yd0g99Lvtv745YdnE8ZqDtluSBzScUA.ttf",
        500: "http://fonts.gstatic.com/s/firasanscondensed/v2/k1srRZ14gKpu4XGd0R993OsjvTPWUq6WFqixIyn02S8.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/firasanscondensed/v2/Z87ZCYzj43dcQd7C-kCjD4BZvKPjZWiSZqpadd3c-cI.ttf",
        600: "http://fonts.gstatic.com/s/firasanscondensed/v2/k1srRZ14gKpu4XGd0R993HI2_Em5SxSZLj3SINQVfR0.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/firasanscondensed/v2/Z87ZCYzj43dcQd7C-kCjD5AgRolq0CFuJyGMzcpUuqI.ttf",
        700: "http://fonts.gstatic.com/s/firasanscondensed/v2/k1srRZ14gKpu4XGd0R993BEM87DM3yorPOrvA-vB930.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/firasanscondensed/v2/Z87ZCYzj43dcQd7C-kCjDzkJmEiMQ4xM-o8FMi_9og4.ttf",
        800: "http://fonts.gstatic.com/s/firasanscondensed/v2/k1srRZ14gKpu4XGd0R993IakE3OFfI2LZ4c6GPO8Mzs.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/firasanscondensed/v2/Z87ZCYzj43dcQd7C-kCjD07QUKmu2W_Ow4yNN8hZ1i8.ttf",
        900: "http://fonts.gstatic.com/s/firasanscondensed/v2/k1srRZ14gKpu4XGd0R993BL2AAruu1GYH8xAyPJJAg8.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/firasanscondensed/v2/Z87ZCYzj43dcQd7C-kCjD8mJu-lqHNyZBDoYLJNH3Ks.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fira Sans Extra Condensed",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/firasansextracondensed/v2/_dPmaUiuUAWmL0ibePdArgFORyOzJNaQMfz6m4ejZbGglnMp3_3A8V8Ai8YosRtX.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/firasansextracondensed/v2/G8VKhLxlTd0YOlG3i1R8CfHXjqTqiXVW6z8kDssMYPCAFsVxlmd8icOioVkuzMTp.ttf",
        200: "http://fonts.gstatic.com/s/firasansextracondensed/v2/34whiWDL4CxC1laOcj7OwW_7IC3ILXfeIVwvfWGu4Sgt1EgZ0r6ZKKUGlEftq-4l.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/firasansextracondensed/v2/iGnuurQ1EqiOs_hlr82MCvHXjqTqiXVW6z8kDssMYPBJ88iJ4K8xoxodtsD2-nBj.ttf",
        300: "http://fonts.gstatic.com/s/firasansextracondensed/v2/34whiWDL4CxC1laOcj7OwW7O05EUNkkL_mPtCuekiV0t1EgZ0r6ZKKUGlEftq-4l.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/firasansextracondensed/v2/iGnuurQ1EqiOs_hlr82MCvHXjqTqiXVW6z8kDssMYPAvflpT0sW34iOPRrF6N6tI.ttf",
        regular:
          "http://fonts.gstatic.com/s/firasansextracondensed/v2/wg_5XrW_o1_ZfuCbAkBfGRreEc6WSk_gssVJg3w2ARQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/firasansextracondensed/v2/_dPmaUiuUAWmL0ibePdArnKUexidEaHsf8DLYXbriUSglnMp3_3A8V8Ai8YosRtX.ttf",
        500: "http://fonts.gstatic.com/s/firasansextracondensed/v2/34whiWDL4CxC1laOcj7Owdd0GPYAHEVh0EvoffkRAuMt1EgZ0r6ZKKUGlEftq-4l.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/firasansextracondensed/v2/iGnuurQ1EqiOs_hlr82MCvHXjqTqiXVW6z8kDssMYPDAjX6gmJQf3iMex9U1V3ut.ttf",
        600: "http://fonts.gstatic.com/s/firasansextracondensed/v2/34whiWDL4CxC1laOcj7OwW8v1dGG_WArVpDmblm5TDot1EgZ0r6ZKKUGlEftq-4l.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/firasansextracondensed/v2/iGnuurQ1EqiOs_hlr82MCvHXjqTqiXVW6z8kDssMYPCWe8ZvgY99AY9ijXVw80mY.ttf",
        700: "http://fonts.gstatic.com/s/firasansextracondensed/v2/34whiWDL4CxC1laOcj7OwdEjTMY3GGLBv_AxlS3Ww6ct1EgZ0r6ZKKUGlEftq-4l.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/firasansextracondensed/v2/iGnuurQ1EqiOs_hlr82MCvHXjqTqiXVW6z8kDssMYPB3tT3e-lZe80aROzSyUO11.ttf",
        800: "http://fonts.gstatic.com/s/firasansextracondensed/v2/34whiWDL4CxC1laOcj7OwZZWqFq9WyGGQ2ef9bXDKiQt1EgZ0r6ZKKUGlEftq-4l.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/firasansextracondensed/v2/iGnuurQ1EqiOs_hlr82MCvHXjqTqiXVW6z8kDssMYPAPPT8D62C2kRSfhzQlPTWw.ttf",
        900: "http://fonts.gstatic.com/s/firasansextracondensed/v2/34whiWDL4CxC1laOcj7OwRPaRBEe7-4iQsBL_zD1FQ8t1EgZ0r6ZKKUGlEftq-4l.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/firasansextracondensed/v2/iGnuurQ1EqiOs_hlr82MCvHXjqTqiXVW6z8kDssMYPAnp2qhLrn0wZPVzCpypoAw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fjalla One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/fjallaone/v5/3b7vWCfOZsU53vMa8LWsf_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fjord One",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/fjordone/v6/R_YHK8au2uFPw5tNu5N7zw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Flamenco",
      category: "display",
      variants: ["300", "regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/flamenco/v8/x9iI5CogvuZVCGoRHwXuo6CWcynf_cDxXwCLxiixG1c.ttf",
        regular:
          "http://fonts.gstatic.com/s/flamenco/v8/HC0ugfLLgt26I5_BWD1PZA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Flavors",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/flavors/v6/SPJi5QclATvon8ExcKGRvQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fondamento",
      category: "handwriting",
      variants: ["regular", "italic"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/fondamento/v7/6LWXcjT1B7bnWluAOSNfMPesZW2xOQ-xsNqO47m55DA.ttf",
        italic:
          "http://fonts.gstatic.com/s/fondamento/v7/y6TmwhSbZ8rYq7OTFyo7OS3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fontdiner Swanky",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/fontdinerswanky/v8/8_GxIO5ixMtn5P6COsF3TlBjMPLzPAFJwRBn-s1U7kA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Forum",
      category: "display",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext", "cyrillic-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/forum/v8/MZUpsq1VfLrqv8eSDcbrrQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Francois One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/francoisone/v11/bYbkq2nU2TSx4SwFbz5sCC3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Frank Ruhl Libre",
      category: "serif",
      variants: ["300", "regular", "500", "700", "900"],
      subsets: ["latin", "hebrew", "latin-ext"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        300: "http://fonts.gstatic.com/s/frankruhllibre/v3/y8NWif61iD8Hg8bGAmxFPOo9jvbqtCEVUIntIHarXsc.ttf",
        regular:
          "http://fonts.gstatic.com/s/frankruhllibre/v3/yDLloNqBpFmakCImLv4OJkfFI6QBbouvcOFcz81E3Ek.ttf",
        500: "http://fonts.gstatic.com/s/frankruhllibre/v3/y8NWif61iD8Hg8bGAmxFPC-WNtISbX_UO2d0wZPgXtk.ttf",
        700: "http://fonts.gstatic.com/s/frankruhllibre/v3/y8NWif61iD8Hg8bGAmxFPDPYiZEMiRRbPdIFMoTwDbo.ttf",
        900: "http://fonts.gstatic.com/s/frankruhllibre/v3/y8NWif61iD8Hg8bGAmxFPNRZIVFRjDx-6MOpcoWbVhA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Freckle Face",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/freckleface/v5/7-B8j9BPJgazdHIGqPNv8y3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fredericka the Great",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/frederickathegreat/v6/7Es8Lxoku-e5eOZWpxw18nrnet6gXN1McwdQxS1dVrI.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fredoka One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/fredokaone/v5/QKfwXi-z-KtJAlnO2ethYqCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Freehand",
      category: "display",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v9",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/freehand/v9/uEBQxvA0lnn_BrD6krlxMw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fresca",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/fresca/v6/2q7Qm9sCo1tWvVgSDVWNIw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Frijole",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/frijole/v6/L2MfZse-2gCascuD-nLhWg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fruktur",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v10",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/fruktur/v10/PnQvfEi1LssAvhJsCwH__w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Fugaz One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/fugazone/v7/5tteVDCwxsr8-5RuSiRWOw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "GFS Didot",
      category: "serif",
      variants: ["regular"],
      subsets: ["greek"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/gfsdidot/v7/jQKxZy2RU-h9tkPZcRVluA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "GFS Neohellenic",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["greek"],
      version: "v8",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/gfsneohellenic/v8/B4xRqbn-tANVqVgamMsSDiayCZa0z7CpFzlkqoCHztc.ttf",
        italic:
          "http://fonts.gstatic.com/s/gfsneohellenic/v8/KnaWrO4awITAqigQIIYXKkCTdomiyJpIzPbEbIES3rU.ttf",
        700: "http://fonts.gstatic.com/s/gfsneohellenic/v8/7HwjPQa7qNiOsnUce2h4448_BwCLZY3eDSV6kppAwI8.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/gfsneohellenic/v8/FwWjoX6XqT-szJFyqsu_GYFF0fM4h-krcpQk7emtCpE.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Gabriela",
      category: "serif",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "cyrillic-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/gabriela/v6/B-2ZfbAO3HDrxqV6lR5tdA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Gafata",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/gafata/v6/aTFqlki_3Dc3geo-FxHTvQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Galada",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "bengali"],
      version: "v3",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/galada/v3/xGkllHQb8OOCv9VJ6IObSA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Galdeano",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/galdeano/v7/ZKFMQI6HxEG1jOT0UGSZUg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Galindo",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/galindo/v5/2lafAS_ZEfB33OJryhXDUg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Gentium Basic",
      category: "serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/gentiumbasic/v9/KCktj43blvLkhOTolFn-MYtBLojGU5Qdl8-5NL4v70w.ttf",
        italic:
          "http://fonts.gstatic.com/s/gentiumbasic/v9/qoFz4NSMaYC2UmsMAG3lyTj3mvXnCeAk09uTtmkJGRc.ttf",
        700: "http://fonts.gstatic.com/s/gentiumbasic/v9/2qL6yulgGf0wwgOp-UqGyLNuTeOOLg3nUymsEEGmdO0.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/gentiumbasic/v9/8N9-c_aQDJ8LbI1NGVMrwtswO1vWwP9exiF8s0wqW10.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Gentium Book Basic",
      category: "serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/gentiumbookbasic/v8/IRFxB2matTxrjZt6a3FUnrWDjKAyldGEr6eEi2MBNeY.ttf",
        italic:
          "http://fonts.gstatic.com/s/gentiumbookbasic/v8/qHqW2lwKO8-uTfIkh8FsUfXfjMwrYnmPVsQth2IcAPY.ttf",
        700: "http://fonts.gstatic.com/s/gentiumbookbasic/v8/T2vUYmWzlqUtgLYdlemGnaWESMHIjnSjm9UUxYtEOko.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/gentiumbookbasic/v8/632u7TMIoFDWQYUaHFUp5PA2A9KyRZEkn4TZVuhsWRM.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Geo",
      category: "sans-serif",
      variants: ["regular", "italic"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular: "http://fonts.gstatic.com/s/geo/v9/mJuJYk5Pww84B4uHAQ1XaA.ttf",
        italic: "http://fonts.gstatic.com/s/geo/v9/8_r1wToF7nPdDuX1qxel6Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Geostar",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/geostar/v7/A8WQbhQbpYx3GWWaShJ9GA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Geostar Fill",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/geostarfill/v7/Y5ovXPPOHYTfQzK2aM-hui3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Germania One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/germaniaone/v5/3_6AyUql_-FbDi1e68jHdC3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Gidugu",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "telugu"],
      version: "v4",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/gidugu/v4/Ey6Eq3hrT6MM58iFItFcgw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Gilda Display",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/gildadisplay/v5/8yAVUZLLZ3wb7dSsjix0CADHmap7fRWINAsw8-RaxNg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Give You Glory",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/giveyouglory/v7/DFEWZFgGmfseyIdGRJAxuBwwkpSPZdvjnMtysdqprfI.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Glass Antiqua",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/glassantiqua/v5/0yLrXKplgdUDIMz5TnCHNODcg5akpSnIcsPhLOFv7l8.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Glegoo",
      category: "serif",
      variants: ["regular", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/glegoo/v6/2tf-h3n2A_SNYXEO0C8bKw.ttf",
        700: "http://fonts.gstatic.com/s/glegoo/v6/TlLolbauH0-0Aiz1LUH5og.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Gloria Hallelujah",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/gloriahallelujah/v9/CA1k7SlXcY5kvI81M_R28Q3RdPdyebSUyJECJouPsvA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Goblin One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/goblinone/v7/331XtzoXgpVEvNTVcBJ_C_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Gochi Hand",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/gochihand/v8/KT1-WxgHsittJ34_20IfAPesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Gorditas",
      category: "display",
      variants: ["regular", "700"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/gorditas/v5/uMgZhXUyH6qNGF3QsjQT5Q.ttf",
        700: "http://fonts.gstatic.com/s/gorditas/v5/6-XCeknmxaon8AUqVkMnHaCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Goudy Bookletter 1911",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/goudybookletter1911/v7/l5lwlGTN3pEY5Bf-rQEuIIjNDsyURsIKu4GSfvSE4mA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Graduate",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/graduate/v5/JpAmYLHqcIh9_Ff35HHwiA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Grand Hotel",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/grandhotel/v5/C_A8HiFZjXPpnMt38XnK7qCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Gravitas One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/gravitasone/v7/nBHdBv6zVNU8MtP6w9FwTS3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Great Vibes",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/greatvibes/v5/4Mi5RG_9LjQYrTU55GN_L6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Griffy",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/griffy/v5/vWkyYGBSyE5xjnShNtJtzw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Gruppo",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/gruppo/v8/pS_JM0cK_piBZve-lfUq9w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Gudea",
      category: "sans-serif",
      variants: ["regular", "italic", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/gudea/v5/S-4QqBlkMPiiA3jNeCR5yw.ttf",
        italic:
          "http://fonts.gstatic.com/s/gudea/v5/7mNgsGw_vfS-uUgRVXNDSw.ttf",
        700: "http://fonts.gstatic.com/s/gudea/v5/lsip4aiWhJ9bx172Y9FN_w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Gurajada",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "telugu"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/gurajada/v5/6Adfkl4PCRyq6XTENACEyA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Habibi",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/habibi/v6/YYyqXF6pWpL7kmKgS_2iUA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Halant",
      category: "serif",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v4",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/halant/v4/dM3ItAOWNNod_Cf3MnLlEg.ttf",
        regular:
          "http://fonts.gstatic.com/s/halant/v4/rEs7Jk3SVyt3cTx6DoTu1w.ttf",
        500: "http://fonts.gstatic.com/s/halant/v4/tlsNj3K-hJKtiirTDtUbkQ.ttf",
        600: "http://fonts.gstatic.com/s/halant/v4/zNR2WvI_V8o652vIZp3X4Q.ttf",
        700: "http://fonts.gstatic.com/s/halant/v4/D9FN7OH89AuCmZDLHbPQfA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Hammersmith One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/hammersmithone/v8/FWNn6ITYqL6or7ZTmBxRhjjVlsJB_M_Q_LtZxsoxvlw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Hanalei",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/hanalei/v7/Sx8vVMBnXSQyK6Cn0CBJ3A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Hanalei Fill",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/hanaleifill/v6/5uPeWLnaDdtm4UBG26Ds6C3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Handlee",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/handlee/v6/6OfkXkyC0E5NZN80ED8u3A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Hanuman",
      category: "serif",
      variants: ["regular", "700"],
      subsets: ["khmer"],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/hanuman/v11/hRhwOGGmElJSl6KSPvEnOQ.ttf",
        700: "http://fonts.gstatic.com/s/hanuman/v11/lzzXZ2l84x88giDrbfq76vesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Happy Monkey",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/happymonkey/v6/c2o0ps8nkBmaOYctqBq1rS3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Harmattan",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "arabic"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/harmattan/v2/xNM1nDKzsLfoCLQtMRztGA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Headland One",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/headlandone/v5/iGmBeOvQGfq9DSbjJ8jDVy3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Heebo",
      category: "sans-serif",
      variants: ["100", "300", "regular", "500", "700", "800", "900"],
      subsets: ["latin", "hebrew"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/heebo/v3/SoQODIucfpkiveZloUR6ag.ttf",
        300: "http://fonts.gstatic.com/s/heebo/v3/dg5T18yyjkKiU_9mmcbDSQ.ttf",
        regular:
          "http://fonts.gstatic.com/s/heebo/v3/nyHCGMPliplPNqpssbDSIA.ttf",
        500: "http://fonts.gstatic.com/s/heebo/v3/jDb70ZCwdD6JnmQU62ZQZA.ttf",
        700: "http://fonts.gstatic.com/s/heebo/v3/NsBYEn6oWei8pPqytA07yA.ttf",
        800: "http://fonts.gstatic.com/s/heebo/v3/h4CV2Qq56LKIinGGOStvsw.ttf",
        900: "http://fonts.gstatic.com/s/heebo/v3/uDfzHw3R0Bfa6HyIIcj-ow.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Henny Penny",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/hennypenny/v5/XRgo3ogXyi3tpsFfjImRF6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Herr Von Muellerhoff",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/herrvonmuellerhoff/v7/mmy24EUmk4tjm4gAEjUd7NLGIYrUsBdh-JWHYgiDiMU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Hind",
      category: "sans-serif",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/hind/v8/qa346Adgv9kPDXoD1my4kA.ttf",
        regular:
          "http://fonts.gstatic.com/s/hind/v8/mktFHh5Z5P9YjGKSslSUtA.ttf",
        500: "http://fonts.gstatic.com/s/hind/v8/2cs8RCVcYtiv4iNDH1UsQQ.ttf",
        600: "http://fonts.gstatic.com/s/hind/v8/TUKUmFMXSoxloBP1ni08oA.ttf",
        700: "http://fonts.gstatic.com/s/hind/v8/cXJJavLdUbCfjxlsA6DqTw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Hind Guntur",
      category: "sans-serif",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: ["latin", "telugu", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/hindguntur/v3/Szg33M7ab5MTWe-PWAcNAi9-WlPSxbfiI49GsXo3q0g.ttf",
        regular:
          "http://fonts.gstatic.com/s/hindguntur/v3/MXz-KyAeVZstlFz6v-5SC6CWcynf_cDxXwCLxiixG1c.ttf",
        500: "http://fonts.gstatic.com/s/hindguntur/v3/Szg33M7ab5MTWe-PWAcNAsCNfqCYlB_eIx7H1TVXe60.ttf",
        600: "http://fonts.gstatic.com/s/hindguntur/v3/Szg33M7ab5MTWe-PWAcNApZ7xm-Bj30Bj2KNdXDzSZg.ttf",
        700: "http://fonts.gstatic.com/s/hindguntur/v3/Szg33M7ab5MTWe-PWAcNAne1Pd76Vl7zRpE7NLJQ7XU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Hind Madurai",
      category: "sans-serif",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: ["latin", "tamil", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/hindmadurai/v3/sdSJTZLdRXJhVTP92m2S66cQoVhARpoaILP7amxE_8g.ttf",
        regular:
          "http://fonts.gstatic.com/s/hindmadurai/v3/pJpl47LatORZNWf8rgdiyS3USBnSvpkopQaUR-2r7iU.ttf",
        500: "http://fonts.gstatic.com/s/hindmadurai/v3/sdSJTZLdRXJhVTP92m2S65MQuUSAwdHsY8ov_6tk1oA.ttf",
        600: "http://fonts.gstatic.com/s/hindmadurai/v3/sdSJTZLdRXJhVTP92m2S62v8CylhIUtwUiYO7Z2wXbE.ttf",
        700: "http://fonts.gstatic.com/s/hindmadurai/v3/sdSJTZLdRXJhVTP92m2S60D2ttfZwueP-QU272T9-k4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Hind Siliguri",
      category: "sans-serif",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: ["latin", "bengali", "latin-ext"],
      version: "v4",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/hindsiliguri/v4/fBpmjMpv5Rh6S25yVfWJnzoJ52uD-1fmXmi8u0n_zsc.ttf",
        regular:
          "http://fonts.gstatic.com/s/hindsiliguri/v4/f2eEi2pbIa8eBfNwpUl0Am_MnNA9OgK8I1F23mNWOpE.ttf",
        500: "http://fonts.gstatic.com/s/hindsiliguri/v4/fBpmjMpv5Rh6S25yVfWJn__2zpxNHQ3utWt_82o9dAo.ttf",
        600: "http://fonts.gstatic.com/s/hindsiliguri/v4/fBpmjMpv5Rh6S25yVfWJn-x91FDzFvnud68bXrNkpDA.ttf",
        700: "http://fonts.gstatic.com/s/hindsiliguri/v4/fBpmjMpv5Rh6S25yVfWJn6iiXuG_rGcOxkuidirlnJE.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Hind Vadodara",
      category: "sans-serif",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: ["latin", "latin-ext", "gujarati"],
      version: "v4",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/hindvadodara/v4/KrZ6f_YevRawHvh0qDBkTbDwfZ__Dotj_J8NiWv76DQ.ttf",
        regular:
          "http://fonts.gstatic.com/s/hindvadodara/v4/9c6KKeibr6NtFqknnNxZB-Dcg5akpSnIcsPhLOFv7l8.ttf",
        500: "http://fonts.gstatic.com/s/hindvadodara/v4/KrZ6f_YevRawHvh0qDBkTZzEKvFIU9WyojfbAkhDb6c.ttf",
        600: "http://fonts.gstatic.com/s/hindvadodara/v4/KrZ6f_YevRawHvh0qDBkTfgXs2VXrZsRiQ1c96pXZKI.ttf",
        700: "http://fonts.gstatic.com/s/hindvadodara/v4/KrZ6f_YevRawHvh0qDBkTYGjoH95IEFGA7BjhXnx_eg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Holtwood One SC",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/holtwoodonesc/v8/sToOq3cIxbfnhbEkgYNuBbAgSRh1LpJXlLfl8IbsmHg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Homemade Apple",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/homemadeapple/v8/yg3UMEsefgZ8IHz_ryz86BiPOmFWYV1WlrJkRafc4c0.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Homenaje",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/homenaje/v7/v0YBU0iBRrGdVjDNQILxtA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "IM Fell DW Pica",
      category: "serif",
      variants: ["regular", "italic"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/imfelldwpica/v7/W81bfaWiUicLSPbJhW-ATsA5qm663gJGVdtpamafG5A.ttf",
        italic:
          "http://fonts.gstatic.com/s/imfelldwpica/v7/alQJ8SK5aSOZVaelYoyT4PL2asmh5DlYQYCosKo6yQs.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "IM Fell DW Pica SC",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/imfelldwpicasc/v7/xBKKJV4z2KsrtQnmjGO17JZ9RBdEL0H9o5qzT1Rtof4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "IM Fell Double Pica",
      category: "serif",
      variants: ["regular", "italic"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/imfelldoublepica/v7/yN1wY_01BkQnO0LYAhXdUol14jEdVOhEmvtCMCVwYak.ttf",
        italic:
          "http://fonts.gstatic.com/s/imfelldoublepica/v7/64odUh2hAw8D9dkFKTlWYq0AWwkgdQfsRHec8TYi4mI.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "IM Fell Double Pica SC",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/imfelldoublepicasc/v7/jkrUtrLFpMw4ZazhfkKsGwc4LoC4OJUqLw9omnT3VOU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "IM Fell English",
      category: "serif",
      variants: ["regular", "italic"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/imfellenglish/v7/xwIisCqGFi8pff-oa9uSVHGNmx1fDm-u2eBJHQkdrmk.ttf",
        italic:
          "http://fonts.gstatic.com/s/imfellenglish/v7/Z3cnIAI_L3XTRfz4JuZKbuewladMPCWTthtMv9cPS-c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "IM Fell English SC",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/imfellenglishsc/v7/h3Tn6yWfw4b5qaLD1RWvz5ATixNthKRRR1XVH3rJNiw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "IM Fell French Canon",
      category: "serif",
      variants: ["regular", "italic"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/imfellfrenchcanon/v7/iKB0WL1BagSpNPz3NLMdsJ3V2FNpBrlLSvqUnERhBP8.ttf",
        italic:
          "http://fonts.gstatic.com/s/imfellfrenchcanon/v7/owCuNQkLLFW7TBBPJbMnhRa-QL94KdW80H29tcyld2A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "IM Fell French Canon SC",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/imfellfrenchcanonsc/v7/kA3bS19-tQbeT_iG32EZmaiyyzHwYrAbmNulTz423iM.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "IM Fell Great Primer",
      category: "serif",
      variants: ["regular", "italic"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/imfellgreatprimer/v7/AL8ALGNthei20f9Cu3e93rgeX3ROgtTz44CitKAxzKI.ttf",
        italic:
          "http://fonts.gstatic.com/s/imfellgreatprimer/v7/1a-artkXMVg682r7TTxVY1_YG2SFv8Ma7CxRl1S3o7g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "IM Fell Great Primer SC",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/imfellgreatprimersc/v7/A313vRj97hMMGFjt6rgSJtRg-ciw1Y27JeXb2Zv4lZQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Iceberg",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/iceberg/v5/p2XVm4M-N0AOEEOymFKC5w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Iceland",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/iceland/v6/kq3uTMGgvzWGNi39B_WxGA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Imprima",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/imprima/v5/eRjquWLjwLGnTEhLH7u3kA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Inconsolata",
      category: "monospace",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v16",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/inconsolata/v16/7bMKuoy6Nh0ft0SHnIGMuaCWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/inconsolata/v16/AIed271kqQlcIRSOnQH0yXe1Pd76Vl7zRpE7NLJQ7XU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Inder",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/inder/v6/C38TwecLTfKxIHDc_Adcrw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Indie Flower",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-11",
      files: {
        regular:
          "http://fonts.gstatic.com/s/indieflower/v9/10JVD_humAd5zP2yrFqw6i3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Inika",
      category: "serif",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/inika/v5/eZCrULQGaIxkrRoGz_DjhQ.ttf",
        700: "http://fonts.gstatic.com/s/inika/v5/bl3ZoTyrWsFun2zYbsgJrA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Inknut Antiqua",
      category: "serif",
      variants: ["300", "regular", "500", "600", "700", "800", "900"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-09",
      files: {
        300: "http://fonts.gstatic.com/s/inknutantiqua/v3/CagoW52rBcslcXzHh6tVIg6hmPNSXwHGnJQCeQHKUMo.ttf",
        regular:
          "http://fonts.gstatic.com/s/inknutantiqua/v3/VlmmTfOrxr3HfcnhMueX9arFJ4O13IHVxZbM6yoslpo.ttf",
        500: "http://fonts.gstatic.com/s/inknutantiqua/v3/CagoW52rBcslcXzHh6tVIiYCDvi1XFzRnTV7qUFsNgk.ttf",
        600: "http://fonts.gstatic.com/s/inknutantiqua/v3/CagoW52rBcslcXzHh6tVIjLEgY6PI0GrY6L00mykcEQ.ttf",
        700: "http://fonts.gstatic.com/s/inknutantiqua/v3/CagoW52rBcslcXzHh6tVIlRhfXn9P4_QueZ7VkUHUNc.ttf",
        800: "http://fonts.gstatic.com/s/inknutantiqua/v3/CagoW52rBcslcXzHh6tVInARjXVu2t2krcNTHiCb1qY.ttf",
        900: "http://fonts.gstatic.com/s/inknutantiqua/v3/CagoW52rBcslcXzHh6tVIrTsNy1JrFNT1qKy8j7W3CU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Irish Grover",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/irishgrover/v8/kUp7uUPooL-KsLGzeVJbBC3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Istok Web",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["cyrillic", "latin", "latin-ext", "cyrillic-ext"],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/istokweb/v11/RYLSjEXQ0nNtLLc4n7--dQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/istokweb/v11/kvcT2SlTjmGbC3YlZxmrl6CWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/istokweb/v11/2koEo4AKFSvK4B52O_Mwai3USBnSvpkopQaUR-2r7iU.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/istokweb/v11/ycQ3g52ELrh3o_HYCNNUw3e1Pd76Vl7zRpE7NLJQ7XU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Italiana",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/italiana/v6/dt95fkCSTOF-c6QNjwSycA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Italianno",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/italianno/v7/HsyHnLpKf8uP7aMpDQHZmg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Itim",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "thai", "vietnamese"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/itim/v2/HHV9WK2x5lUkc5bxMXG8Tw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Jacques Francois",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/jacquesfrancois/v5/_-0XWPQIW6tOzTHg4KaJ_M13D_4KM32Q4UmTSjpuNGQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Jacques Francois Shadow",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/jacquesfrancoisshadow/v5/V14y0H3vq56fY9SV4OL_FASt0D_oLVawA8L8b9iKjbs.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Jaldi",
      category: "sans-serif",
      variants: ["regular", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/jaldi/v3/x1vR-bPW9a1EB-BUVqttCw.ttf",
        700: "http://fonts.gstatic.com/s/jaldi/v3/OIbtgjjEp3aVWtjF6WY8mA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Jim Nightshade",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/jimnightshade/v5/_n43lYHXVWNgXegdYRIK9CF1W_bo0EdycfH0kHciIic.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Jockey One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/jockeyone/v7/cAucnOZLvFo07w2AbufBCfesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Jolly Lodger",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/jollylodger/v5/RX8HnkBgaEKQSHQyP9itiS3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Jomhuria",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "arabic", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/jomhuria/v3/hrvsccQpBliIgor15WxE6g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Josefin Sans",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "600",
        "600italic",
        "700",
        "700italic",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v12",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/josefinsans/v12/q9w3H4aeBxj0hZ8Osfi3d8SVQ0giZ-l_NELu3lgGyYw.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/josefinsans/v12/s7-P1gqRNRNn-YWdOYnAOXXcj1rQwlNLIS625o-SrL0.ttf",
        300: "http://fonts.gstatic.com/s/josefinsans/v12/C6HYlRF50SGJq1XyXj04z6cQoVhARpoaILP7amxE_8g.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/josefinsans/v12/ppse0J9fKSaoxCIIJb33Gyna0FLWfcB-J_SAYmcAXaI.ttf",
        regular:
          "http://fonts.gstatic.com/s/josefinsans/v12/xgzbb53t8j-Mo-vYa23n5i3USBnSvpkopQaUR-2r7iU.ttf",
        italic:
          "http://fonts.gstatic.com/s/josefinsans/v12/q9w3H4aeBxj0hZ8Osfi3d_MZXuCXbOrAvx5R0IT5Oyo.ttf",
        600: "http://fonts.gstatic.com/s/josefinsans/v12/C6HYlRF50SGJq1XyXj04z2v8CylhIUtwUiYO7Z2wXbE.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/josefinsans/v12/ppse0J9fKSaoxCIIJb33G4R-5-urNOGAobhAyctHvW8.ttf",
        700: "http://fonts.gstatic.com/s/josefinsans/v12/C6HYlRF50SGJq1XyXj04z0D2ttfZwueP-QU272T9-k4.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/josefinsans/v12/ppse0J9fKSaoxCIIJb33G_As9-1nE9qOqhChW0m4nDE.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Josefin Slab",
      category: "serif",
      variants: [
        "100",
        "100italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "600",
        "600italic",
        "700",
        "700italic",
      ],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/josefinslab/v8/etsUjZYO8lTLU85lDhZwUsSVQ0giZ-l_NELu3lgGyYw.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/josefinslab/v8/8BjDChqLgBF3RJKfwHIYh3Xcj1rQwlNLIS625o-SrL0.ttf",
        300: "http://fonts.gstatic.com/s/josefinslab/v8/NbE6ykYuM2IyEwxQxOIi2KcQoVhARpoaILP7amxE_8g.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/josefinslab/v8/af9sBoKGPbGO0r21xJulyyna0FLWfcB-J_SAYmcAXaI.ttf",
        regular:
          "http://fonts.gstatic.com/s/josefinslab/v8/46aYWdgz-1oFX11flmyEfS3USBnSvpkopQaUR-2r7iU.ttf",
        italic:
          "http://fonts.gstatic.com/s/josefinslab/v8/etsUjZYO8lTLU85lDhZwUvMZXuCXbOrAvx5R0IT5Oyo.ttf",
        600: "http://fonts.gstatic.com/s/josefinslab/v8/NbE6ykYuM2IyEwxQxOIi2Gv8CylhIUtwUiYO7Z2wXbE.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/josefinslab/v8/af9sBoKGPbGO0r21xJuly4R-5-urNOGAobhAyctHvW8.ttf",
        700: "http://fonts.gstatic.com/s/josefinslab/v8/NbE6ykYuM2IyEwxQxOIi2ED2ttfZwueP-QU272T9-k4.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/josefinslab/v8/af9sBoKGPbGO0r21xJuly_As9-1nE9qOqhChW0m4nDE.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Joti One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/jotione/v5/P3r_Th0ESHJdzunsvWgUfQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Judson",
      category: "serif",
      variants: ["regular", "italic", "700"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/judson/v10/znM1AAs0eytUaJzf1CrYZQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/judson/v10/GVqQW9P52ygW-ySq-CLwAA.ttf",
        700: "http://fonts.gstatic.com/s/judson/v10/he4a2LwiPJc7r8x0oKCKiA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Julee",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/julee/v7/CAib-jsUsSO8SvVRnE9fHA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Julius Sans One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/juliussansone/v6/iU65JP9acQHPDLkdalCF7jjVlsJB_M_Q_LtZxsoxvlw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Junge",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/junge/v5/j4IXCXtxrw9qIBheercp3A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Jura",
      category: "sans-serif",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/jura/v9/Rqx_xy1UnN0C7wD3FUSyPQ.ttf",
        regular:
          "http://fonts.gstatic.com/s/jura/v9/YAWMwF3sN0KCbynMq-Yr_Q.ttf",
        500: "http://fonts.gstatic.com/s/jura/v9/16xhfjHCiaLj3tsqqgmtGg.ttf",
        600: "http://fonts.gstatic.com/s/jura/v9/iwseduOwJSdY8wQ1Y6CJdA.ttf",
        700: "http://fonts.gstatic.com/s/jura/v9/k0wz0WR1Y0M_AuROdfv4xQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Just Another Hand",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/justanotherhand/v9/fKV8XYuRNNagXr38eqbRf99BnJIEGrvoojniP57E51c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Just Me Again Down Here",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/justmeagaindownhere/v9/sN06iTc9ITubLTgXoG-kc3M9eVLpVTSK6TqZTIgBrWQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kadwa",
      category: "serif",
      variants: ["regular", "700"],
      subsets: ["devanagari", "latin"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/kadwa/v2/VwEN8oKGqaa0ug9kRpvSSg.ttf",
        700: "http://fonts.gstatic.com/s/kadwa/v2/NFPZaBfekj_Io-7vUMz4Ww.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kalam",
      category: "handwriting",
      variants: ["300", "regular", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/kalam/v8/MgQQlk1SgPEHdlkWMNh7Jg.ttf",
        regular:
          "http://fonts.gstatic.com/s/kalam/v8/hNEJkp2K-aql7e5WQish4Q.ttf",
        700: "http://fonts.gstatic.com/s/kalam/v8/95nLItUGyWtNLZjSckluLQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kameron",
      category: "serif",
      variants: ["regular", "700"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/kameron/v8/9r8HYhqDSwcq9WMjupL82A.ttf",
        700: "http://fonts.gstatic.com/s/kameron/v8/rabVVbzlflqvmXJUFlKnu_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kanit",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["latin", "latin-ext", "thai", "vietnamese"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/kanit/v3/CYl4qOK-NWwZp3iTKW1eIA.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/kanit/v3/NLNtc56MpXmHl1yOrop8oQ.ttf",
        200: "http://fonts.gstatic.com/s/kanit/v3/wfLWkj1C4tYl7MoiFWS3bA.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/kanit/v3/D8gkrAAM2bvNJ-1i4ot-1_esZW2xOQ-xsNqO47m55DA.ttf",
        300: "http://fonts.gstatic.com/s/kanit/v3/SM5qHynYGdOmMKEwGUFIPA.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/kanit/v3/IePislKOKy3Bqfpb9V5VM_esZW2xOQ-xsNqO47m55DA.ttf",
        regular:
          "http://fonts.gstatic.com/s/kanit/v3/L6VKvM17ZmevDynOiw7H9w.ttf",
        italic:
          "http://fonts.gstatic.com/s/kanit/v3/sHLq5U0-T0oSMTnwTKgv-A.ttf",
        500: "http://fonts.gstatic.com/s/kanit/v3/GxoU_USIJyIy8WIcYSUO2g.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/kanit/v3/hrCiWCaNv9AaF0mDY1F2zPesZW2xOQ-xsNqO47m55DA.ttf",
        600: "http://fonts.gstatic.com/s/kanit/v3/n_qoIVxojeQY0D1pvoNDhA.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/kanit/v3/9BkP85yRDoVayTWQwdGLqPesZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/kanit/v3/kEGmYvO8My36j5ILmbUPRg.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/kanit/v3/WNo3ZZ9xtOZJknNlvHAFWfesZW2xOQ-xsNqO47m55DA.ttf",
        800: "http://fonts.gstatic.com/s/kanit/v3/YTp-zAuKXxwnA1YnJIF1rg.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/kanit/v3/qiTGrW5sCa9UQp841fWjc_esZW2xOQ-xsNqO47m55DA.ttf",
        900: "http://fonts.gstatic.com/s/kanit/v3/1NIEkusi3bG3GgO9Hor3fQ.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/kanit/v3/ogN5dFD1r4BfxNV4Nb-TXfesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kantumruy",
      category: "sans-serif",
      variants: ["300", "regular", "700"],
      subsets: ["khmer"],
      version: "v4",
      lastModified: "2017-10-09",
      files: {
        300: "http://fonts.gstatic.com/s/kantumruy/v4/ERRwQE0WG5uanaZWmOFXNi3USBnSvpkopQaUR-2r7iU.ttf",
        regular:
          "http://fonts.gstatic.com/s/kantumruy/v4/kQfXNYElQxr5dS8FyjD39Q.ttf",
        700: "http://fonts.gstatic.com/s/kantumruy/v4/gie_zErpGf_rNzs920C2Ji3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Karla",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/karla/v6/78UgGRwJFkhqaoFimqoKpQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/karla/v6/51UBKly9RQOnOkj95ZwEFw.ttf",
        700: "http://fonts.gstatic.com/s/karla/v6/JS501sZLxZ4zraLQdncOUA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/karla/v6/3YDyi09gQjCRh-5-SVhTTvesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Karma",
      category: "serif",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/karma/v7/lH6ijJnguWR2Sz7tEl6MQQ.ttf",
        regular:
          "http://fonts.gstatic.com/s/karma/v7/wvqTxAGBUrTqU0urTEoPIw.ttf",
        500: "http://fonts.gstatic.com/s/karma/v7/9YGjxi6Hcvz2Kh-rzO_cAw.ttf",
        600: "http://fonts.gstatic.com/s/karma/v7/h_CVzXXtqSxjfS2sIwaejA.ttf",
        700: "http://fonts.gstatic.com/s/karma/v7/smuSM08oApsQPPVYbHd1CA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Katibeh",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "arabic", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/katibeh/v3/Q-SA43uWR2uu3wBIvedotA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kaushan Script",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/kaushanscript/v6/qx1LSqts-NtiKcLw4N03IBnpV0hQCek3EmWnCPrvGRM.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kavivanar",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "tamil", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/kavivanar/v3/VLDrdUtF1irKFc8rFWgDaw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kavoon",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/kavoon/v6/382m-6baKXqJFQjEgobt6Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kdam Thmor",
      category: "display",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v4",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/kdamthmor/v4/otCdP6UU-VBIrBfVDWBQJ_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Keania One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/keaniaone/v5/PACrDKZWngXzgo-ucl6buvesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kelly Slab",
      category: "display",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/kellyslab/v7/F_2oS1e9XdYx1MAi8XEVefesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kenia",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/kenia/v9/OLM9-XfITK9PsTLKbGBrwg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Khand",
      category: "sans-serif",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/khand/v6/072zRl4OU9Pinjjkg174LA.ttf",
        regular:
          "http://fonts.gstatic.com/s/khand/v6/HdLdTNFqNIDGJZl1ZEj84w.ttf",
        500: "http://fonts.gstatic.com/s/khand/v6/46_p-SqtuMe56nxQdteWxg.ttf",
        600: "http://fonts.gstatic.com/s/khand/v6/zggGWYIiPJyMTgkfxP_kaA.ttf",
        700: "http://fonts.gstatic.com/s/khand/v6/0I0UWaN-X5QBmfexpXKhqg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Khmer",
      category: "display",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/khmer/v10/vWaBJIbaQuBNz02ALIKJ3A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Khula",
      category: "sans-serif",
      variants: ["300", "regular", "600", "700", "800"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/khula/v3/_1LySU5Upq-sc4OZ1b_GIw.ttf",
        regular:
          "http://fonts.gstatic.com/s/khula/v3/izcPIFyCSd16XI1Ak_Wk7Q.ttf",
        600: "http://fonts.gstatic.com/s/khula/v3/4ZH86Hce-aeFDaedTnbkbg.ttf",
        700: "http://fonts.gstatic.com/s/khula/v3/UGVExGl-Jjs-YPpGv-MZ6w.ttf",
        800: "http://fonts.gstatic.com/s/khula/v3/Sccp_oOo8FWgbx5smie7xQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kite One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/kiteone/v5/8ojWmgUc97m0f_i6sTqLoQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Knewave",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/knewave/v6/KGHM4XWr4iKnBMqzZLkPBg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kotta One",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/kottaone/v5/AB2Q7hVw6niJYDgLvFXu5w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Koulen",
      category: "display",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/koulen/v11/AAYOK8RSRO7FTskTzFuzNw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kranky",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/kranky/v8/C8dxxTS99-fZ84vWk8SDrg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kreon",
      category: "serif",
      variants: ["300", "regular", "700"],
      subsets: ["latin"],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/kreon/v11/HKtJRiq5C2zbq5N1IX32sA.ttf",
        regular:
          "http://fonts.gstatic.com/s/kreon/v11/zA_IZt0u0S3cvHJu-n1oEg.ttf",
        700: "http://fonts.gstatic.com/s/kreon/v11/jh0dSmaPodjxISiblIUTkw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kristi",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/kristi/v9/aRsgBQrkQkMlu4UPSnJyOQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Krona One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/kronaone/v5/zcQj4ljqTo166AdourlF9w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kumar One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "gujarati"],
      version: "v2",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/kumarone/v2/YmcJD6Wky1clGYY5OD-BkQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kumar One Outline",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "gujarati"],
      version: "v2",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/kumaroneoutline/v2/hnQF47H-55qiLAGgq7C3QyxhoCTLJoiJ-y-zew8F8j0.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Kurale",
      category: "serif",
      variants: ["regular"],
      subsets: ["devanagari", "cyrillic", "latin", "latin-ext", "cyrillic-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/kurale/v3/rxeyIcvQlT4XAWwNbXFCfw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "La Belle Aurore",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/labelleaurore/v8/Irdbc4ASuUoWDjd_Wc3md123K2iuuhwZgaKapkyRTY8.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Laila",
      category: "serif",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v4",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/laila/v4/bLbIVEZF3IWSZ-in72GJvA.ttf",
        regular:
          "http://fonts.gstatic.com/s/laila/v4/6iYor3edprH7360qtBGoag.ttf",
        500: "http://fonts.gstatic.com/s/laila/v4/tkf8VtFvW9g3VsxQCA6WOQ.ttf",
        600: "http://fonts.gstatic.com/s/laila/v4/3EMP2L6JRQ4GaHIxCldCeA.ttf",
        700: "http://fonts.gstatic.com/s/laila/v4/R7P4z1xjcjecmjZ9GyhqHQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Lakki Reddy",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "telugu"],
      version: "v4",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/lakkireddy/v4/Q5EpFa91FjW37t0FCnedaKCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Lalezar",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "arabic", "latin-ext", "vietnamese"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/lalezar/v2/k4_MPf09PGmL7oyGdPKwcg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Lancelot",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/lancelot/v7/XMT7T_oo_MQUGAnU2v-sdA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Lateef",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "arabic"],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/lateef/v11/PAsKCgi1qc7XPwvzo_I-DQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Lato",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "700",
        "700italic",
        "900",
        "900italic",
      ],
      subsets: ["latin", "latin-ext"],
      version: "v14",
      lastModified: "2017-10-11",
      files: {
        100: "http://fonts.gstatic.com/s/lato/v14/Upp-ka9rLQmHYCsFgwL-eg.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/lato/v14/zLegi10uS_9-fnUDISl0KA.ttf",
        300: "http://fonts.gstatic.com/s/lato/v14/Ja02qOppOVq9jeRjWekbHg.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/lato/v14/dVebFcn7EV7wAKwgYestUg.ttf",
        regular:
          "http://fonts.gstatic.com/s/lato/v14/h7rISIcQapZBpei-sXwIwg.ttf",
        italic:
          "http://fonts.gstatic.com/s/lato/v14/P_dJOFJylV3A870UIOtr0w.ttf",
        700: "http://fonts.gstatic.com/s/lato/v14/iX_QxBBZLhNj5JHlTzHQzg.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/lato/v14/WFcZakHrrCKeUJxHA4T_gw.ttf",
        900: "http://fonts.gstatic.com/s/lato/v14/8TPEV6NbYWZlNsXjbYVv7w.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/lato/v14/draWperrI7n2xi35Cl08fA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "League Script",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/leaguescript/v8/wnRFLvfabWK_DauqppD6vSeUSrabuTpOsMEiRLtKwk0.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Leckerli One",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/leckerlione/v8/S2Y_iLrItTu8kIJTkS7DrC3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ledger",
      category: "serif",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ledger/v5/G432jp-tahOfWHbCYkI0jw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Lekton",
      category: "sans-serif",
      variants: ["regular", "italic", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/lekton/v8/r483JYmxf5PjIm4jVAm8Yg.ttf",
        italic:
          "http://fonts.gstatic.com/s/lekton/v8/_UbDIPBA1wDqSbhp-OED7A.ttf",
        700: "http://fonts.gstatic.com/s/lekton/v8/WZw-uL8WTkx3SBVfTlevXQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Lemon",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/lemon/v6/wed1nNu4LNSu-3RoRVUhUw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Lemonada",
      category: "display",
      variants: ["300", "regular", "600", "700"],
      subsets: ["latin", "arabic", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/lemonada/v3/uM3MufQOcwGHuruj4TsXiqCWcynf_cDxXwCLxiixG1c.ttf",
        regular:
          "http://fonts.gstatic.com/s/lemonada/v3/pkzws3AUXmaaAzOi7aydSQ.ttf",
        600: "http://fonts.gstatic.com/s/lemonada/v3/9Vd4MNKsOxNyLzlfTXdKLqCWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/lemonada/v3/9jKcm4hRI511-Dy7FFfQ3aCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Libre Barcode 128",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-23",
      files: {
        regular:
          "http://fonts.gstatic.com/s/librebarcode128/v5/mJ_rGOyyL62_i4eysdBvxEaNJhdpbyHQuRiGjlHceQo.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Libre Barcode 128 Text",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-23",
      files: {
        regular:
          "http://fonts.gstatic.com/s/librebarcode128text/v5/T1o66XlW_PeuHiRa8wDOJDfWl2h5aCwBu15s5iWPtdk.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Libre Barcode 39",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-23",
      files: {
        regular:
          "http://fonts.gstatic.com/s/librebarcode39/v5/tsmYkcVN_FjeCmyWhRNQuDLD7PrtP9qwC5bVQ-6ZBpw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Libre Barcode 39 Extended",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v4",
      lastModified: "2017-10-23",
      files: {
        regular:
          "http://fonts.gstatic.com/s/librebarcode39extended/v4/fb2-vuy0PLrmtXyLBPV4KGYAiLTSvZR2kkYPJthhKEg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Libre Barcode 39 Extended Text",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v4",
      lastModified: "2017-10-23",
      files: {
        regular:
          "http://fonts.gstatic.com/s/librebarcode39extendedtext/v4/wJsqK3E245PKDhdHYS7MabGP_8dGDh0UJYBW4DYg-cv00s133LT-tR5tU-vU7gLU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Libre Barcode 39 Text",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-23",
      files: {
        regular:
          "http://fonts.gstatic.com/s/librebarcode39text/v5/O4inMvtTcDsw_GI-nhT1nhLP3W-fKNeNuxNx_t55A8U.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Libre Baskerville",
      category: "serif",
      variants: ["regular", "italic", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/librebaskerville/v5/pR0sBQVcY0JZc_ciXjFsKyyZRYCSvpCzQKuMWnP5NDY.ttf",
        italic:
          "http://fonts.gstatic.com/s/librebaskerville/v5/QHIOz1iKF3bIEzRdDFaf5QnhapNS5Oi8FPrBRDLbsW4.ttf",
        700: "http://fonts.gstatic.com/s/librebaskerville/v5/kH7K4InNTm7mmOXXjrA5v-xuswJKUVpBRfYFpz0W3Iw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Libre Franklin",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["latin", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/librefranklin/v2/zrsyK9EytLQ07oRM9IZIsX6Zf0VB_l-7q6pFtcZSRCs.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/librefranklin/v2/LHzsuUmxr4UY-IoiG8pRK4gsWNE1DYiT_eIOcNe2Au4.ttf",
        200: "http://fonts.gstatic.com/s/librefranklin/v2/1_DGDtljMiPWFs5rl_p0yCwKTB4uIbnDXE2hyxZaFPY.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/librefranklin/v2/7_V210XP3LBEtEwiCTqho0lu1sSkaQaYEjN61aJ3i1I.ttf",
        300: "http://fonts.gstatic.com/s/librefranklin/v2/1_DGDtljMiPWFs5rl_p0yMhKJW3W9-339CFS_Lie1us.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/librefranklin/v2/7_V210XP3LBEtEwiCTqho14je5cfhxzx5bEvSaoyQQI.ttf",
        regular:
          "http://fonts.gstatic.com/s/librefranklin/v2/PFwjf3aDdAQPvNKUrT3U7_fSnedoLXQQjURyDxluu8g.ttf",
        italic:
          "http://fonts.gstatic.com/s/librefranklin/v2/zrsyK9EytLQ07oRM9IZIsX5kKxjpQfTpnFf2SrDLxlg.ttf",
        500: "http://fonts.gstatic.com/s/librefranklin/v2/1_DGDtljMiPWFs5rl_p0yMBjwrbmxH6gp8HgxjPD8qo.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/librefranklin/v2/7_V210XP3LBEtEwiCTqho5VcuOW5XbZIr02vW37iuvg.ttf",
        600: "http://fonts.gstatic.com/s/librefranklin/v2/1_DGDtljMiPWFs5rl_p0yORt4MKdIUjA60qLK3wI2m8.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/librefranklin/v2/7_V210XP3LBEtEwiCTqhowNPRgU5g4Xymf9hgRWrbNs.ttf",
        700: "http://fonts.gstatic.com/s/librefranklin/v2/1_DGDtljMiPWFs5rl_p0yEnStGWSv3WdwjmyyI8xc7Q.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/librefranklin/v2/7_V210XP3LBEtEwiCTqhow7kn3RFjf4gfwsdsBE-Rf4.ttf",
        800: "http://fonts.gstatic.com/s/librefranklin/v2/1_DGDtljMiPWFs5rl_p0yKltwG0cydF-uC1kFVv1hts.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/librefranklin/v2/7_V210XP3LBEtEwiCTqho80d7u0uHUbaRkK-cNyim1w.ttf",
        900: "http://fonts.gstatic.com/s/librefranklin/v2/1_DGDtljMiPWFs5rl_p0yF7duMYIKwoQ5QsTL00fobw.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/librefranklin/v2/7_V210XP3LBEtEwiCTqho0THpHUXJVnEwH4tSjkF0wg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Life Savers",
      category: "display",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/lifesavers/v7/g49cUDk4Y1P0G5NMkMAm7qCWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/lifesavers/v7/THQKqChyYUm97rNPVFdGGXe1Pd76Vl7zRpE7NLJQ7XU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Lilita One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/lilitaone/v5/vTxJQjbNV6BCBHx8sGDCVvesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Lily Script One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/lilyscriptone/v5/uPWsLVW8uiXqIBnE8ZwGPDjVlsJB_M_Q_LtZxsoxvlw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Limelight",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/limelight/v8/5dTfN6igsXjLjOy8QQShcg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Linden Hill",
      category: "serif",
      variants: ["regular", "italic"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/lindenhill/v7/UgsC0txqd-E1yjvjutwm_KCWcynf_cDxXwCLxiixG1c.ttf",
        italic:
          "http://fonts.gstatic.com/s/lindenhill/v7/OcS3bZcu8vJvIDH8Zic83keOrDcLawS7-ssYqLr2Xp4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Lobster",
      category: "display",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v20",
      lastModified: "2017-11-07",
      files: {
        regular:
          "http://fonts.gstatic.com/s/lobster/v20/9LpJGtNuM1D8FAZ2BkJH2Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Lobster Two",
      category: "display",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/lobstertwo/v10/xb9aY4w9ceh8JRzobID1naCWcynf_cDxXwCLxiixG1c.ttf",
        italic:
          "http://fonts.gstatic.com/s/lobstertwo/v10/Ul_16MSbfayQv1I4QhLEoEeOrDcLawS7-ssYqLr2Xp4.ttf",
        700: "http://fonts.gstatic.com/s/lobstertwo/v10/bmdxOflBqMqjEC0-kGsIiHe1Pd76Vl7zRpE7NLJQ7XU.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/lobstertwo/v10/LEkN2_no_6kFvRfiBZ8xpM_zJjSACmk0BRPxQqhnNLU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Londrina Outline",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/londrinaoutline/v8/lls08GOa1eT74p072l1AWJmp8DTZ6iHear7UV05iykg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Londrina Shadow",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/londrinashadow/v6/dNYuzPS_7eYgXFJBzMoKdbw6Z3rVA5KDSi7aQxS92Nk.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Londrina Sketch",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/londrinasketch/v6/p7Ai06aT1Ycp_D2fyE3z69d6z_uhFGnpCOifUY1fJQo.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Londrina Solid",
      category: "display",
      variants: ["100", "300", "regular", "900"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/londrinasolid/v6/GNw2ckl4GiWuueFb9dMt4kBPCDJ-ayOoeeQPacAe1lc.ttf",
        300: "http://fonts.gstatic.com/s/londrinasolid/v6/BDKo9ty0kfh66weuamkY1YGlXQxaR_emZVjFa6K5Gm8.ttf",
        regular:
          "http://fonts.gstatic.com/s/londrinasolid/v6/yysorIEiYSBb0ylZjg791MR125CwGqh8XBqkBzea0LA.ttf",
        900: "http://fonts.gstatic.com/s/londrinasolid/v6/BDKo9ty0kfh66weuamkY1cOBCLEQFAwATxcDa2xYLs8.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Lora",
      category: "serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v12",
      lastModified: "2017-11-07",
      files: {
        regular:
          "http://fonts.gstatic.com/s/lora/v12/aXJ7KVIGcejEy1abawZazg.ttf",
        italic:
          "http://fonts.gstatic.com/s/lora/v12/AN2EZaj2tFRpyveuNn9BOg.ttf",
        700: "http://fonts.gstatic.com/s/lora/v12/enKND5SfzQKkggBA_VnT1A.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/lora/v12/ivs9j3kYU65pR9QD9YFdzQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Love Ya Like A Sister",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/loveyalikeasister/v8/LzkxWS-af0Br2Sk_YgSJY-ad1xEP8DQfgfY8MH9aBUg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Loved by the King",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/lovedbytheking/v7/wg03xD4cWigj4YDufLBSr8io2AFEwwMpu7y5KyiyAJc.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Lovers Quarrel",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/loversquarrel/v5/gipdZ8b7pKb89MzQLAtJHLHLxci2ElvNEmOB303HLk0.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Luckiest Guy",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/luckiestguy/v8/5718gH8nDy3hFVihOpkY5C3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Lusitana",
      category: "serif",
      variants: ["regular", "700"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/lusitana/v5/l1h9VDomkwbdzbPdmLcUIw.ttf",
        700: "http://fonts.gstatic.com/s/lusitana/v5/GWtZyUsONxgkdl3Mc1P7FKCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Lustria",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/lustria/v5/gXAk0s4ai0X-TAOhYzZd1w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Macondo",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/macondo/v6/G6yPNUscRPQ8ufBXs_8yRQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Macondo Swash Caps",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/macondoswashcaps/v5/SsSR706z-MlvEH7_LS6JAPkkgYRHs6GSG949m-K6x2k.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mada",
      category: "sans-serif",
      variants: ["200", "300", "regular", "500", "600", "700", "900"],
      subsets: ["latin", "arabic"],
      version: "v4",
      lastModified: "2017-11-21",
      files: {
        200: "http://fonts.gstatic.com/s/mada/v4/sN1aPvvd07F1Sq3qcEQg4w.ttf",
        300: "http://fonts.gstatic.com/s/mada/v4/P46fye2TPh4fVwALgHSXCA.ttf",
        regular:
          "http://fonts.gstatic.com/s/mada/v4/io_zUrt5o943T_q45OHLWQ.ttf",
        500: "http://fonts.gstatic.com/s/mada/v4/PhhDsBi34sP0LptbpS9m6w.ttf",
        600: "http://fonts.gstatic.com/s/mada/v4/6zYBU-NFokCo3MIlPsWCUw.ttf",
        700: "http://fonts.gstatic.com/s/mada/v4/VnwndFbEsjy4VcU_Dzedhg.ttf",
        900: "http://fonts.gstatic.com/s/mada/v4/aCyc9Kc3rOJLL6fV9VfptA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Magra",
      category: "sans-serif",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/magra/v5/hoZ13bwCXBxuGZqAudgc5A.ttf",
        700: "http://fonts.gstatic.com/s/magra/v5/6fOM5sq5cIn8D0RjX8Lztw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Maiden Orange",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/maidenorange/v8/ZhKIA2SPisEwdhW7g0RUWojjx0o0jr6fNXxPgYh_a8Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Maitree",
      category: "serif",
      variants: ["200", "300", "regular", "500", "600", "700"],
      subsets: ["latin", "latin-ext", "thai", "vietnamese"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        200: "http://fonts.gstatic.com/s/maitree/v2/JTlrRs3bVPV4i05cUIx_z_esZW2xOQ-xsNqO47m55DA.ttf",
        300: "http://fonts.gstatic.com/s/maitree/v2/rEGdABAOaqCHggl37mkWjfesZW2xOQ-xsNqO47m55DA.ttf",
        regular:
          "http://fonts.gstatic.com/s/maitree/v2/SpKVJkAjDAYOr1VkdSRspA.ttf",
        500: "http://fonts.gstatic.com/s/maitree/v2/2VHD7TXjRhN4Xu74SEPGdvesZW2xOQ-xsNqO47m55DA.ttf",
        600: "http://fonts.gstatic.com/s/maitree/v2/uuazDnPwt30gW3cKsG-e0_esZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/maitree/v2/cnHhc9fphsL3q-pistN3IPesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mako",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/mako/v8/z5zSLmfPlv1uTVAdmJBLXg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mallanna",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "telugu"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/mallanna/v5/krCTa-CfMbtxqF0689CbuQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mandali",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "telugu"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/mandali/v5/0lF8yJ7fkyjXuqtSi5bWbQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Manuale",
      category: "serif",
      variants: [
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v2",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/manuale/v2/OL9lzPXATGiZUB8Qdk3tiQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/manuale/v2/oRbwaLnv_NzztbUuhNLiBw.ttf",
        500: "http://fonts.gstatic.com/s/manuale/v2/xsy0EZlufjk4A6mPfwX5mfesZW2xOQ-xsNqO47m55DA.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/manuale/v2/r4TYrL7JhyPxpmVA-JAN0S3USBnSvpkopQaUR-2r7iU.ttf",
        600: "http://fonts.gstatic.com/s/manuale/v2/gDxlyLYdCx7A4S8cf-Z8JvesZW2xOQ-xsNqO47m55DA.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/manuale/v2/n25GBfdDLxRFJ-OYtzyorS3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/manuale/v2/ut2ZOkBP2LtTYOuh1fI83_esZW2xOQ-xsNqO47m55DA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/manuale/v2/Lrka5WC7aKfhIA6uk-QS6y3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Marcellus",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/marcellus/v5/UjiLZzumxWC9whJ86UtaYw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Marcellus SC",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/marcellussc/v5/_jugwxhkkynrvsfrxVx8gS3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Marck Script",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/marckscript/v8/O_D1NAZVOFOobLbVtW3bci3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Margarine",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/margarine/v6/DJnJwIrcO_cGkjSzY3MERw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Marko One",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/markoone/v7/hpP7j861sOAco43iDc4n4w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Marmelad",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/marmelad/v7/jI0_FBlSOIRLL0ePWOhOwQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Martel",
      category: "serif",
      variants: ["200", "300", "regular", "600", "700", "800", "900"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        200: "http://fonts.gstatic.com/s/martel/v2/_wfGdswZbat7P4tupHLA1w.ttf",
        300: "http://fonts.gstatic.com/s/martel/v2/SghoV2F2VPdVU3P0a4fa9w.ttf",
        regular:
          "http://fonts.gstatic.com/s/martel/v2/9ALu5czkaaf5zsYk6GJEnQ.ttf",
        600: "http://fonts.gstatic.com/s/martel/v2/Kt9uPhH1PvUwuZ5Y6zuAMQ.ttf",
        700: "http://fonts.gstatic.com/s/martel/v2/4OzIiKB5wE36xXL2U0vzWQ.ttf",
        800: "http://fonts.gstatic.com/s/martel/v2/RVF8drcQoRkRL7l_ZkpTlQ.ttf",
        900: "http://fonts.gstatic.com/s/martel/v2/iS0YUpFJoiLRlnyl40rpEA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Martel Sans",
      category: "sans-serif",
      variants: ["200", "300", "regular", "600", "700", "800", "900"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v4",
      lastModified: "2017-10-10",
      files: {
        200: "http://fonts.gstatic.com/s/martelsans/v4/7ajme85aKKx_SCWF59ImQEnzyIngrzGjGh22wPb6cGM.ttf",
        300: "http://fonts.gstatic.com/s/martelsans/v4/7ajme85aKKx_SCWF59ImQC9-WlPSxbfiI49GsXo3q0g.ttf",
        regular:
          "http://fonts.gstatic.com/s/martelsans/v4/91c8DPDZncMc0RFfhmc2RqCWcynf_cDxXwCLxiixG1c.ttf",
        600: "http://fonts.gstatic.com/s/martelsans/v4/7ajme85aKKx_SCWF59ImQJZ7xm-Bj30Bj2KNdXDzSZg.ttf",
        700: "http://fonts.gstatic.com/s/martelsans/v4/7ajme85aKKx_SCWF59ImQHe1Pd76Vl7zRpE7NLJQ7XU.ttf",
        800: "http://fonts.gstatic.com/s/martelsans/v4/7ajme85aKKx_SCWF59ImQA89PwPrYLaRFJ-HNCU9NbA.ttf",
        900: "http://fonts.gstatic.com/s/martelsans/v4/7ajme85aKKx_SCWF59ImQCenaqEuufTBk9XMKnKmgDA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Marvel",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/marvel/v7/Fg1dO8tWVb-MlyqhsbXEkg.ttf",
        italic:
          "http://fonts.gstatic.com/s/marvel/v7/HzyjFB-oR5usrc7Lxz9g8w.ttf",
        700: "http://fonts.gstatic.com/s/marvel/v7/WrHDBL1RupWGo2UcdgxB3Q.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/marvel/v7/Gzf5NT09Y6xskdQRj2kz1qCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mate",
      category: "serif",
      variants: ["regular", "italic"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/mate/v6/ooFviPcJ6hZP5bAE71Cawg.ttf",
        italic: "http://fonts.gstatic.com/s/mate/v6/5XwW6_cbisGvCX5qmNiqfA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mate SC",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/matesc/v6/-YkIT2TZoPZF6pawKzDpWw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Maven Pro",
      category: "sans-serif",
      variants: ["regular", "500", "700", "900"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v11",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/mavenpro/v11/sqPJIFG4gqsjl-0q_46Gbw.ttf",
        500: "http://fonts.gstatic.com/s/mavenpro/v11/SQVfzoJBbj9t3aVcmbspRi3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/mavenpro/v11/uDssvmXgp7Nj3i336k_dSi3USBnSvpkopQaUR-2r7iU.ttf",
        900: "http://fonts.gstatic.com/s/mavenpro/v11/-91TwiFzqeL1F7Kh91APwS3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "McLaren",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/mclaren/v5/OprvTGxaiINBKW_1_U0eoQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Meddon",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/meddon/v10/f8zJO98uu2EtSj9p7ci9RA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "MedievalSharp",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/medievalsharp/v9/85X_PjV6tftJ0-rX7KYQkOe45sJkivqprK7VkUlzfg0.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Medula One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/medulaone/v7/AasPgDQak81dsTGQHc5zUPesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Meera Inimai",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "tamil"],
      version: "v2",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/meerainimai/v2/fWbdJc2ZVZnWCi06NRCxDy3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Megrim",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/megrim/v8/e-9jVUC9lv1zxaFQARuftw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Meie Script",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/meiescript/v5/oTIWE5MmPye-rCyVp_6KEqCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Merienda",
      category: "handwriting",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/merienda/v5/MYY6Og1qZlOQtPW2G95Y3A.ttf",
        700: "http://fonts.gstatic.com/s/merienda/v5/GlwcvRLlgiVE2MBFQ4r0sKCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Merienda One",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/meriendaone/v8/bCA-uDdUx6nTO8SjzCLXvS3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Merriweather",
      category: "serif",
      variants: [
        "300",
        "300italic",
        "regular",
        "italic",
        "700",
        "700italic",
        "900",
        "900italic",
      ],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v19",
      lastModified: "2017-11-07",
      files: {
        300: "http://fonts.gstatic.com/s/merriweather/v19/ZvcMqxEwPfh2qDWBPxn6nqcQoVhARpoaILP7amxE_8g.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/merriweather/v19/EYh7Vl4ywhowqULgRdYwICna0FLWfcB-J_SAYmcAXaI.ttf",
        regular:
          "http://fonts.gstatic.com/s/merriweather/v19/RFda8w1V0eDZheqfcyQ4EC3USBnSvpkopQaUR-2r7iU.ttf",
        italic:
          "http://fonts.gstatic.com/s/merriweather/v19/So5lHxHT37p2SS4-t60SlPMZXuCXbOrAvx5R0IT5Oyo.ttf",
        700: "http://fonts.gstatic.com/s/merriweather/v19/ZvcMqxEwPfh2qDWBPxn6nkD2ttfZwueP-QU272T9-k4.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/merriweather/v19/EYh7Vl4ywhowqULgRdYwIPAs9-1nE9qOqhChW0m4nDE.ttf",
        900: "http://fonts.gstatic.com/s/merriweather/v19/ZvcMqxEwPfh2qDWBPxn6nqObDOjC3UL77puoeHsE3fw.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/merriweather/v19/EYh7Vl4ywhowqULgRdYwIBd0_s6jQr9r5s5OZYvtzBY.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Merriweather Sans",
      category: "sans-serif",
      variants: [
        "300",
        "300italic",
        "regular",
        "italic",
        "700",
        "700italic",
        "800",
        "800italic",
      ],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/merriweathersans/v9/6LmGj5dOJopQKEkt88Gowan5N8K-_DP0e9e_v51obXQ.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/merriweathersans/v9/nAqt4hiqwq3tzCecpgPmVdytE4nGXk2hYD5nJ740tBw.ttf",
        regular:
          "http://fonts.gstatic.com/s/merriweathersans/v9/AKu1CjQ4qnV8MUltkAX3sOAj_ty82iuwwDTNEYXGiyQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/merriweathersans/v9/3Mz4hOHzs2npRMG3B1ascZ32VBCoA_HLsn85tSWZmdo.ttf",
        700: "http://fonts.gstatic.com/s/merriweathersans/v9/6LmGj5dOJopQKEkt88GowbqxG25nQNOioCZSK4sU-CA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/merriweathersans/v9/nAqt4hiqwq3tzCecpgPmVbuqAJxizi8Dk_SK5et7kMg.ttf",
        800: "http://fonts.gstatic.com/s/merriweathersans/v9/6LmGj5dOJopQKEkt88GowYufzO2zUYSj5LqoJ3UGkco.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/merriweathersans/v9/nAqt4hiqwq3tzCecpgPmVdDmPrYMy3aZO4LmnZsxTQw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Metal",
      category: "display",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v10",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/metal/v10/zA3UOP13ooQcxjv04BZX5g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Metal Mania",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/metalmania/v7/isriV_rAUgj6bPWPN6l9QKCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Metamorphous",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/metamorphous/v7/wGqUKXRinIYggz-BTRU9ei3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Metrophobic",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/metrophobic/v10/SaglWZWCrrv_D17u1i4v_aCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Michroma",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/michroma/v8/0c2XrW81_QsiKV8T9thumA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Milonga",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/milonga/v5/dzNdIUSTGFmy2ahovDRcWg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Miltonian",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/miltonian/v11/Z4HrYZyqm0BnNNzcCUfzoQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Miltonian Tattoo",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v12",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/miltoniantattoo/v12/1oU_8OGYwW46eh02YHydn2uk0YtI6thZkz1Hmh-odwg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Miniver",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/miniver/v6/4yTQohOH_cWKRS5laRFhYg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Miriam Libre",
      category: "sans-serif",
      variants: ["regular", "700"],
      subsets: ["latin", "hebrew", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/miriamlibre/v3/Ljtpu8zR5iJWmlN3Faba5S3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/miriamlibre/v3/FLc0J-Gdn8ynDWUkeeesAED2ttfZwueP-QU272T9-k4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mirza",
      category: "display",
      variants: ["regular", "500", "600", "700"],
      subsets: ["latin", "arabic", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/mirza/v3/8oe36Xbgj9BMSLJBaZ8VAQ.ttf",
        500: "http://fonts.gstatic.com/s/mirza/v3/dT3HbZoBCx1xbU7PnFEFyQ.ttf",
        600: "http://fonts.gstatic.com/s/mirza/v3/6T4uh2Zti9P6Eq_gbAYvVQ.ttf",
        700: "http://fonts.gstatic.com/s/mirza/v3/b47CZDHoZdhnplmDpZymFw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Miss Fajardose",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/missfajardose/v7/WcXjlQPKn6nBfr8LY3ktNu6rPKfVZo7L2bERcf0BDns.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mitr",
      category: "sans-serif",
      variants: ["200", "300", "regular", "500", "600", "700"],
      subsets: ["latin", "latin-ext", "thai", "vietnamese"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        200: "http://fonts.gstatic.com/s/mitr/v3/GCzZRAhweqJhxrmM0bPztg.ttf",
        300: "http://fonts.gstatic.com/s/mitr/v3/A61rQ_y9i8Ja__oFN7KxiQ.ttf",
        regular:
          "http://fonts.gstatic.com/s/mitr/v3/vKMd72X2iT4iBo5GvdCa_A.ttf",
        500: "http://fonts.gstatic.com/s/mitr/v3/r_Z6yrJJ0zmkGAqxqjlLRg.ttf",
        600: "http://fonts.gstatic.com/s/mitr/v3/42l66tb_XMxM97GKatU9Ng.ttf",
        700: "http://fonts.gstatic.com/s/mitr/v3/V-V7Rul5HOZ651R4Tml2Lw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Modak",
      category: "display",
      variants: ["regular"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/modak/v3/lMsN0QIKid-pCPvL0hH4nw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Modern Antiqua",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/modernantiqua/v7/8qX_tr6Xzy4t9fvZDXPkh6rFJ4O13IHVxZbM6yoslpo.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mogra",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "gujarati"],
      version: "v4",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/mogra/v4/gIxQBn9PseDaI0D4FnOiBQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Molengo",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/molengo/v8/jcjgeGuzv83I55AzOTpXNQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Molle",
      category: "handwriting",
      variants: ["italic"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-11-21",
      files: {
        italic:
          "http://fonts.gstatic.com/s/molle/v6/9XTdCsjPXifLqo5et-YoGA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Monda",
      category: "sans-serif",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/monda/v7/qFMHZ9zvR6B_gnoIgosPrw.ttf",
        700: "http://fonts.gstatic.com/s/monda/v7/EVOzZUyc_j1w2GuTgTAW1g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Monofett",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/monofett/v7/C6K5L799Rgxzg2brgOaqAw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Monoton",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/monoton/v7/aCz8ja_bE4dg-7agSvExdw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Monsieur La Doulaise",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/monsieurladoulaise/v6/IMAdMj6Eq9jZ46CPctFtMKP61oAqTJXlx5ZVOBmcPdM.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Montaga",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/montaga/v5/PwTwUboiD-M4-mFjZfJs2A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Montez",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/montez/v8/kx58rLOWQQLGFM4pDHv5Ng.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Montserrat",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v12",
      lastModified: "2017-11-07",
      files: {
        100: "http://fonts.gstatic.com/s/montserrat/v12/CdKWaRAal2Bxq9mORLKRRS3USBnSvpkopQaUR-2r7iU.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/montserrat/v12/1809Y0aW9bpFOPXsQTFwf8SVQ0giZ-l_NELu3lgGyYw.ttf",
        200: "http://fonts.gstatic.com/s/montserrat/v12/eWRmKHdPNWGn_iFyeEYja2eudeTO44zf-ht3k-KNzwg.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/montserrat/v12/zhwB3-BAdyKDf0geWr9FtwQm5IkIgNCodAfQb4ovl18.ttf",
        300: "http://fonts.gstatic.com/s/montserrat/v12/IVeH6A3MiFyaSEiudUMXE0eOrDcLawS7-ssYqLr2Xp4.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/montserrat/v12/zhwB3-BAdyKDf0geWr9Ft6cQoVhARpoaILP7amxE_8g.ttf",
        regular:
          "http://fonts.gstatic.com/s/montserrat/v12/Kqy6-utIpx_30Xzecmeo8_esZW2xOQ-xsNqO47m55DA.ttf",
        italic:
          "http://fonts.gstatic.com/s/montserrat/v12/-iqwlckIhsmvkx0N6rwPmi3USBnSvpkopQaUR-2r7iU.ttf",
        500: "http://fonts.gstatic.com/s/montserrat/v12/BYPM-GE291ZjIXBWrtCwepp-63r6doWhTEbsfBIRJ7A.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/montserrat/v12/zhwB3-BAdyKDf0geWr9Ft5MQuUSAwdHsY8ov_6tk1oA.ttf",
        600: "http://fonts.gstatic.com/s/montserrat/v12/q2OIMsAtXEkOulLQVdSl0_pTEJqju4Hz1txDWij77d4.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/montserrat/v12/zhwB3-BAdyKDf0geWr9Ft2v8CylhIUtwUiYO7Z2wXbE.ttf",
        700: "http://fonts.gstatic.com/s/montserrat/v12/IQHow_FEYlDC4Gzy_m8fcgJKKGfqHaYFsRG-T3ceEVo.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/montserrat/v12/zhwB3-BAdyKDf0geWr9Ft0D2ttfZwueP-QU272T9-k4.ttf",
        800: "http://fonts.gstatic.com/s/montserrat/v12/H8_7oktkjVeeX06kbAvc0Kk3bhPBSBJ0bSJQ6acL-0g.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/montserrat/v12/zhwB3-BAdyKDf0geWr9Ft_qsay_1ZmRGmC8pVRdIfAg.ttf",
        900: "http://fonts.gstatic.com/s/montserrat/v12/aEu-9ATAroJ1iN4zmQ55Bp0EAVxt0G0biEntp43Qt6E.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/montserrat/v12/zhwB3-BAdyKDf0geWr9Ft6ObDOjC3UL77puoeHsE3fw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Montserrat Alternates",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v9",
      lastModified: "2017-11-07",
      files: {
        100: "http://fonts.gstatic.com/s/montserratalternates/v9/oqQkJ7FUCF9bJw9oNhwpltmjtuu7N1WAenNR-bns1HU.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/montserratalternates/v9/3-rFIqHz_U7TAmWg7RcpLzob9T7De5a9EmE7cInrugI.ttf",
        200: "http://fonts.gstatic.com/s/montserratalternates/v9/YENqOGAVzwIHjYNjmKuAZrWzJnWnTj1NV2WEtcqW8F0.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/montserratalternates/v9/AXzeb8s80Wvg1Wkw1cVlATSYqyfLbk4Wyr4DDJHtpar3rGVtsTkPsbDajuO5ueQw.ttf",
        300: "http://fonts.gstatic.com/s/montserratalternates/v9/YENqOGAVzwIHjYNjmKuAZoE9JAqK0NEjKMCIBssy61I.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/montserratalternates/v9/AXzeb8s80Wvg1Wkw1cVlAX0Ksah31OxOJpZejHsaXyX3rGVtsTkPsbDajuO5ueQw.ttf",
        regular:
          "http://fonts.gstatic.com/s/montserratalternates/v9/z2n1Sjxk9souK3HCtdHuklPuEVRGaG9GCQnmM16YWq0.ttf",
        italic:
          "http://fonts.gstatic.com/s/montserratalternates/v9/oqQkJ7FUCF9bJw9oNhwpliKJhVBtn9MynHVBPiS2bkc.ttf",
        500: "http://fonts.gstatic.com/s/montserratalternates/v9/YENqOGAVzwIHjYNjmKuAZkLT1bEhWimL9YDPt6og4ow.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/montserratalternates/v9/AXzeb8s80Wvg1Wkw1cVlAbq1yxDcj1rkVNifBkzxbjz3rGVtsTkPsbDajuO5ueQw.ttf",
        600: "http://fonts.gstatic.com/s/montserratalternates/v9/YENqOGAVzwIHjYNjmKuAZlzJBia8MVcXq42LmpYhWMY.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/montserratalternates/v9/AXzeb8s80Wvg1Wkw1cVlAdzE96w6fJMDbKTKS-tt8C_3rGVtsTkPsbDajuO5ueQw.ttf",
        700: "http://fonts.gstatic.com/s/montserratalternates/v9/YENqOGAVzwIHjYNjmKuAZpeqBKvsAhm-s2I4RVSXFfc.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/montserratalternates/v9/AXzeb8s80Wvg1Wkw1cVlAVeYZ2vsofSkgKvS_YtoH2b3rGVtsTkPsbDajuO5ueQw.ttf",
        800: "http://fonts.gstatic.com/s/montserratalternates/v9/YENqOGAVzwIHjYNjmKuAZkG2AOFTt9I0BIk1fL0aWvI.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/montserratalternates/v9/AXzeb8s80Wvg1Wkw1cVlAbM_h-OHjcDf1XWbHqSgRF73rGVtsTkPsbDajuO5ueQw.ttf",
        900: "http://fonts.gstatic.com/s/montserratalternates/v9/YENqOGAVzwIHjYNjmKuAZqjHT7NF_e7B-hWEBx2SqPI.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/montserratalternates/v9/AXzeb8s80Wvg1Wkw1cVlAX18ggQg0KDcknRVFWguAv_3rGVtsTkPsbDajuO5ueQw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Montserrat Subrayada",
      category: "sans-serif",
      variants: ["regular", "700"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/montserratsubrayada/v5/nzoCWCz0e9c7Mr2Gl8bbgrJymm6ilkk9f0nDA_sC_qk.ttf",
        700: "http://fonts.gstatic.com/s/montserratsubrayada/v5/wf-IKpsHcfm0C9uaz9IeGJvEcF1LWArDbGWgKZSH9go.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Moul",
      category: "display",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v9",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/moul/v9/Kb0ALQnfyXawP1a_P_gpTQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Moulpali",
      category: "display",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v10",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/moulpali/v10/diD74BprGhmVkJoerKmrKA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mountains of Christmas",
      category: "display",
      variants: ["regular", "700"],
      subsets: ["latin"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/mountainsofchristmas/v10/dVGBFPwd6G44IWDbQtPew2Auds3jz1Fxb61CgfaGDr4.ttf",
        700: "http://fonts.gstatic.com/s/mountainsofchristmas/v10/PymufKtHszoLrY0uiAYKNM9cPTbSBTrQyTa5TWAe3vE.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mouse Memoirs",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/mousememoirs/v5/NBFaaJFux_j0AQbAsW3QeH8f0n03UdmQgF_CLvNR2vg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mr Bedfort",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/mrbedfort/v6/81bGgHTRikLs_puEGshl7_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mr Dafoe",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/mrdafoe/v6/s32Q1S6ZkT7EaX53mUirvQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mr De Haviland",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/mrdehaviland/v6/fD8y4L6PJ4vqDk7z8Y8e27v4lrhng1lzu7-weKO6cw8.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mrs Saint Delafield",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/mrssaintdelafield/v5/vuWagfFT7bj9lFtZOFBwmjHMBelqWf3tJeGyts2SmKU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mrs Sheppards",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/mrssheppards/v6/2WFsWMV3VUeCz6UVH7UjCn8f0n03UdmQgF_CLvNR2vg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mukta",
      category: "sans-serif",
      variants: ["200", "300", "regular", "500", "600", "700", "800"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-11-21",
      files: {
        200: "http://fonts.gstatic.com/s/mukta/v5/tDVdzIQ8YtIPQkpeTPxaRw.ttf",
        300: "http://fonts.gstatic.com/s/mukta/v5/XBYaFkW7WJ8kqXq2Yt41cw.ttf",
        regular:
          "http://fonts.gstatic.com/s/mukta/v5/7dmf9fx1PuHBtLhSPnZzrQ.ttf",
        500: "http://fonts.gstatic.com/s/mukta/v5/lQPvn1FqPa-GCFx-cAuBHg.ttf",
        600: "http://fonts.gstatic.com/s/mukta/v5/NcubiFyhit9Cmsn9p9y9Xg.ttf",
        700: "http://fonts.gstatic.com/s/mukta/v5/TZMKZcvgKiI-bWO9PoMI7w.ttf",
        800: "http://fonts.gstatic.com/s/mukta/v5/QJVapEVpFpMfDYz2xuPBmQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mukta Mahee",
      category: "sans-serif",
      variants: ["200", "300", "regular", "500", "600", "700", "800"],
      subsets: ["latin", "gurmukhi", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-09",
      files: {
        200: "http://fonts.gstatic.com/s/muktamahee/v2/kolKnxd29wydc4yTvsM4p0nzyIngrzGjGh22wPb6cGM.ttf",
        300: "http://fonts.gstatic.com/s/muktamahee/v2/kolKnxd29wydc4yTvsM4py9-WlPSxbfiI49GsXo3q0g.ttf",
        regular:
          "http://fonts.gstatic.com/s/muktamahee/v2/aY_0-ayxlrgq21R8UWTI96CWcynf_cDxXwCLxiixG1c.ttf",
        500: "http://fonts.gstatic.com/s/muktamahee/v2/kolKnxd29wydc4yTvsM4p8CNfqCYlB_eIx7H1TVXe60.ttf",
        600: "http://fonts.gstatic.com/s/muktamahee/v2/kolKnxd29wydc4yTvsM4p5Z7xm-Bj30Bj2KNdXDzSZg.ttf",
        700: "http://fonts.gstatic.com/s/muktamahee/v2/kolKnxd29wydc4yTvsM4p3e1Pd76Vl7zRpE7NLJQ7XU.ttf",
        800: "http://fonts.gstatic.com/s/muktamahee/v2/kolKnxd29wydc4yTvsM4pw89PwPrYLaRFJ-HNCU9NbA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mukta Malar",
      category: "sans-serif",
      variants: ["200", "300", "regular", "500", "600", "700", "800"],
      subsets: ["latin", "tamil", "latin-ext"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        200: "http://fonts.gstatic.com/s/muktamalar/v3/1-N_tlWLJvzngraerf18eUnzyIngrzGjGh22wPb6cGM.ttf",
        300: "http://fonts.gstatic.com/s/muktamalar/v3/1-N_tlWLJvzngraerf18eS9-WlPSxbfiI49GsXo3q0g.ttf",
        regular:
          "http://fonts.gstatic.com/s/muktamalar/v3/xdx0fv5-ENz5PCzqiKyrqqCWcynf_cDxXwCLxiixG1c.ttf",
        500: "http://fonts.gstatic.com/s/muktamalar/v3/1-N_tlWLJvzngraerf18ecCNfqCYlB_eIx7H1TVXe60.ttf",
        600: "http://fonts.gstatic.com/s/muktamalar/v3/1-N_tlWLJvzngraerf18eZZ7xm-Bj30Bj2KNdXDzSZg.ttf",
        700: "http://fonts.gstatic.com/s/muktamalar/v3/1-N_tlWLJvzngraerf18eXe1Pd76Vl7zRpE7NLJQ7XU.ttf",
        800: "http://fonts.gstatic.com/s/muktamalar/v3/1-N_tlWLJvzngraerf18eQ89PwPrYLaRFJ-HNCU9NbA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mukta Vaani",
      category: "sans-serif",
      variants: ["200", "300", "regular", "500", "600", "700", "800"],
      subsets: ["latin", "latin-ext", "gujarati"],
      version: "v4",
      lastModified: "2017-11-21",
      files: {
        200: "http://fonts.gstatic.com/s/muktavaani/v4/X9qyC4rK_D9w1AvSv0mw_0nzyIngrzGjGh22wPb6cGM.ttf",
        300: "http://fonts.gstatic.com/s/muktavaani/v4/X9qyC4rK_D9w1AvSv0mw_y9-WlPSxbfiI49GsXo3q0g.ttf",
        regular:
          "http://fonts.gstatic.com/s/muktavaani/v4/knS0wTOFNOwOD4CZrdHIxKCWcynf_cDxXwCLxiixG1c.ttf",
        500: "http://fonts.gstatic.com/s/muktavaani/v4/X9qyC4rK_D9w1AvSv0mw_8CNfqCYlB_eIx7H1TVXe60.ttf",
        600: "http://fonts.gstatic.com/s/muktavaani/v4/X9qyC4rK_D9w1AvSv0mw_5Z7xm-Bj30Bj2KNdXDzSZg.ttf",
        700: "http://fonts.gstatic.com/s/muktavaani/v4/X9qyC4rK_D9w1AvSv0mw_3e1Pd76Vl7zRpE7NLJQ7XU.ttf",
        800: "http://fonts.gstatic.com/s/muktavaani/v4/X9qyC4rK_D9w1AvSv0mw_w89PwPrYLaRFJ-HNCU9NbA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Muli",
      category: "sans-serif",
      variants: [
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v11",
      lastModified: "2017-10-11",
      files: {
        200: "http://fonts.gstatic.com/s/muli/v11/59Vi0Dm-YSaaKxRiSKrm0w.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/muli/v11/ZV7FMcmPA9u6IXfXrqyybA.ttf",
        300: "http://fonts.gstatic.com/s/muli/v11/VJw4F3ZHRAZ7Hmg3nQu5YQ.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/muli/v11/s-NKMCru8HiyjEt0ZDoBoA.ttf",
        regular:
          "http://fonts.gstatic.com/s/muli/v11/KJiP6KznxbALQgfJcDdPAw.ttf",
        italic:
          "http://fonts.gstatic.com/s/muli/v11/Cg0K_IWANs9xkNoxV7H1_w.ttf",
        600: "http://fonts.gstatic.com/s/muli/v11/O4zVJyE-wzb2CQjcHkw-Xg.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/muli/v11/xasdEbMzFtnmERn70-CN-A.ttf",
        700: "http://fonts.gstatic.com/s/muli/v11/n0UfHdYd8jlanPB1sJ0WYQ.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/muli/v11/9vQS_qOVbbe4j6LkPjCG1g.ttf",
        800: "http://fonts.gstatic.com/s/muli/v11/QdHPibssQgzNly7JkF7wdw.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/muli/v11/jbD7XyPvLT1oJBLbEcQmmg.ttf",
        900: "http://fonts.gstatic.com/s/muli/v11/RcGfHFZUYLsFj9c3uAb4Gg.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/muli/v11/r4hqeWwjqEvTncJsq5KCSg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Mystery Quest",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/mysteryquest/v5/467jJvg0c7HgucvBB9PLDyeUSrabuTpOsMEiRLtKwk0.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "NTR",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "telugu"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular: "http://fonts.gstatic.com/s/ntr/v5/e7H4ZLtGfVOYyOupo6T12g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Neucha",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["cyrillic", "latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/neucha/v9/bijdhB-TzQdtpl0ykhGh4Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Neuton",
      category: "serif",
      variants: ["200", "300", "regular", "italic", "700", "800"],
      subsets: ["latin", "latin-ext"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        200: "http://fonts.gstatic.com/s/neuton/v10/DA3Mkew3XqSkPpi1f4tJow.ttf",
        300: "http://fonts.gstatic.com/s/neuton/v10/xrc_aZ2hx-gdeV0mlY8Vww.ttf",
        regular:
          "http://fonts.gstatic.com/s/neuton/v10/9R-MGIOQUdjAVeB6nE6PcQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/neuton/v10/uVMT3JOB5BNFi3lgPp6kEg.ttf",
        700: "http://fonts.gstatic.com/s/neuton/v10/gnWpkWY7DirkKiovncYrfg.ttf",
        800: "http://fonts.gstatic.com/s/neuton/v10/XPzBQV4lY6enLxQG9cF1jw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "New Rocker",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/newrocker/v6/EFUWzHJedEkpW399zYOHofesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "News Cycle",
      category: "sans-serif",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v14",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/newscycle/v14/xyMAr8VfiUzIOvS1abHJO_esZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/newscycle/v14/G28Ny31cr5orMqEQy6ljtwJKKGfqHaYFsRG-T3ceEVo.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Niconne",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/niconne/v7/ZA-mFw2QNXodx5y7kfELBg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Nixie One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/nixieone/v8/h6kQfmzm0Shdnp3eswRaqQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Nobile",
      category: "sans-serif",
      variants: ["regular", "italic", "500", "500italic", "700", "700italic"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/nobile/v9/lC_lPi1ddtN38iXTCRh6ow.ttf",
        italic:
          "http://fonts.gstatic.com/s/nobile/v9/vGmrpKzWQQSrb-PR6FWBIA.ttf",
        500: "http://fonts.gstatic.com/s/nobile/v9/el-1JDqzLC5ePMPiB2COqQ.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/nobile/v9/y2A1jpvs_uHcnmIZDscDC6CWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/nobile/v9/9p6M-Yrg_r_QPmSD1skrOg.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/nobile/v9/oQ1eYPaXV638N03KvsNvyKCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Nokora",
      category: "serif",
      variants: ["regular", "700"],
      subsets: ["khmer"],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/nokora/v11/dRyz1JfnyKPNaRcBNX9F9A.ttf",
        700: "http://fonts.gstatic.com/s/nokora/v11/QMqqa4QEOhQpiig3cAPmbQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Norican",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/norican/v5/SHnSqhYAWG5sZTWcPzEHig.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Nosifer",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/nosifer/v6/7eJGoIuHRrtcG00j6CptSA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Nothing You Could Do",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/nothingyoucoulddo/v7/jpk1K3jbJoyoK0XKaSyQAf-TpkXjXYGWiJZAEtBRjPU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Noticia Text",
      category: "serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/noticiatext/v7/wdyV6x3eKpdeUPQ7BJ5uUC3USBnSvpkopQaUR-2r7iU.ttf",
        italic:
          "http://fonts.gstatic.com/s/noticiatext/v7/dAuxVpkYE_Q_IwIm6elsKPMZXuCXbOrAvx5R0IT5Oyo.ttf",
        700: "http://fonts.gstatic.com/s/noticiatext/v7/pEko-RqEtp45bE2P80AAKUD2ttfZwueP-QU272T9-k4.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/noticiatext/v7/-rQ7V8ARjf28_b7kRa0JuvAs9-1nE9qOqhChW0m4nDE.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Noto Sans",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: [
        "devanagari",
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v7",
      lastModified: "2017-10-11",
      files: {
        regular:
          "http://fonts.gstatic.com/s/notosans/v7/0Ue9FiUJwVhi4NGfHJS5uA.ttf",
        italic:
          "http://fonts.gstatic.com/s/notosans/v7/dLcNKMgJ1H5RVoZFraDz0qCWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/notosans/v7/PIbvSEyHEdL91QLOQRnZ1y3USBnSvpkopQaUR-2r7iU.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/notosans/v7/9Z3uUWMRR7crzm1TjRicDne1Pd76Vl7zRpE7NLJQ7XU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Noto Serif",
      category: "serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v6",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/notoserif/v6/zW6mc7bC1CWw8dH0yxY8JfesZW2xOQ-xsNqO47m55DA.ttf",
        italic:
          "http://fonts.gstatic.com/s/notoserif/v6/HQXBIwLHsOJCNEQeX9kNzy3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/notoserif/v6/lJAvZoKA5NttpPc9yc6lPQJKKGfqHaYFsRG-T3ceEVo.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/notoserif/v6/Wreg0Be4tcFGM2t6VWytvED2ttfZwueP-QU272T9-k4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Nova Cut",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/novacut/v9/6q12jWcBvj0KO2cMRP97tA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Nova Flat",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/novaflat/v9/pK7a0CoGzI684qe_XSHBqQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Nova Mono",
      category: "monospace",
      variants: ["regular"],
      subsets: ["latin", "greek"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/novamono/v8/6-SChr5ZIaaasJFBkgrLNw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Nova Oval",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/novaoval/v9/VuukVpKP8BwUf8o9W5LYQQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Nova Round",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/novaround/v9/7-cK3Ari_8XYYFgVMxVhDvesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Nova Script",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v10",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/novascript/v10/dEvxQDLgx1M1TKY-NmBWYaCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Nova Slim",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/novaslim/v9/rPYXC81_VL2EW-4CzBX65g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Nova Square",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/novasquare/v9/BcBzXoaDzYX78rquGXVuSqCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Numans",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/numans/v7/g5snI2p6OEjjTNmTHyBdiQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Nunito",
      category: "sans-serif",
      variants: [
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        200: "http://fonts.gstatic.com/s/nunito/v9/xtWPP_05UbsUNY9Kdgwt_w.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/nunito/v9/EbyHzRpZ3jx6yC2BjZCsQqCWcynf_cDxXwCLxiixG1c.ttf",
        300: "http://fonts.gstatic.com/s/nunito/v9/zXQvrWBJqUooM7Xv98MrQw.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/nunito/v9/4BFBxBQCHZfUELdybShAwKCWcynf_cDxXwCLxiixG1c.ttf",
        regular:
          "http://fonts.gstatic.com/s/nunito/v9/ySZTeT3IuzJj0GK6uGpbBg.ttf",
        italic:
          "http://fonts.gstatic.com/s/nunito/v9/NZNWFpgsC6hUUE2c03CLoQ.ttf",
        600: "http://fonts.gstatic.com/s/nunito/v9/B4-BGlpEzQ4WP-D3Zi0PRQ.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/nunito/v9/7SyYp8NBEeMV4V7MAKJnZ6CWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/nunito/v9/aEdlqgMuYbpe4U3TnqOQMA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/nunito/v9/4cHctiCFYmTpv-a6b6vYsKCWcynf_cDxXwCLxiixG1c.ttf",
        800: "http://fonts.gstatic.com/s/nunito/v9/GtGHSZwowZF8a9-GAsh20A.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/nunito/v9/2TsLUs-EFIKsriUeVTl6nKCWcynf_cDxXwCLxiixG1c.ttf",
        900: "http://fonts.gstatic.com/s/nunito/v9/QVvFcvcPoFKH9Q71V4WsjQ.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/nunito/v9/cIxOb6Vw6BqF9ZoAlenp3qCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Nunito Sans",
      category: "sans-serif",
      variants: [
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        200: "http://fonts.gstatic.com/s/nunitosans/v3/XvilrNtBQKRMeiqSPzEFHUnzyIngrzGjGh22wPb6cGM.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/nunitosans/v3/ORCQQ32ldzJ6bFTh_zXqV02YN_dW5g9CXH6iztHQiR4.ttf",
        300: "http://fonts.gstatic.com/s/nunitosans/v3/XvilrNtBQKRMeiqSPzEFHS9-WlPSxbfiI49GsXo3q0g.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/nunitosans/v3/ORCQQ32ldzJ6bFTh_zXqV2o9eWDfYYxG3A176Zl7aIg.ttf",
        regular:
          "http://fonts.gstatic.com/s/nunitosans/v3/qDS9UelBO44ppiSawKNcIKCWcynf_cDxXwCLxiixG1c.ttf",
        italic:
          "http://fonts.gstatic.com/s/nunitosans/v3/w9sy7IRyDFLWACdltghEwUeOrDcLawS7-ssYqLr2Xp4.ttf",
        600: "http://fonts.gstatic.com/s/nunitosans/v3/XvilrNtBQKRMeiqSPzEFHZZ7xm-Bj30Bj2KNdXDzSZg.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/nunitosans/v3/ORCQQ32ldzJ6bFTh_zXqV5e6We3S5L6hKLscKpOkmlo.ttf",
        700: "http://fonts.gstatic.com/s/nunitosans/v3/XvilrNtBQKRMeiqSPzEFHXe1Pd76Vl7zRpE7NLJQ7XU.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/nunitosans/v3/ORCQQ32ldzJ6bFTh_zXqV8_zJjSACmk0BRPxQqhnNLU.ttf",
        800: "http://fonts.gstatic.com/s/nunitosans/v3/XvilrNtBQKRMeiqSPzEFHQ89PwPrYLaRFJ-HNCU9NbA.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/nunitosans/v3/ORCQQ32ldzJ6bFTh_zXqVyad_7rtf4IdDfsLVg-2OV4.ttf",
        900: "http://fonts.gstatic.com/s/nunitosans/v3/XvilrNtBQKRMeiqSPzEFHSenaqEuufTBk9XMKnKmgDA.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/nunitosans/v3/ORCQQ32ldzJ6bFTh_zXqV0_yTOUGsoC54csJe1b-IRw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Odor Mean Chey",
      category: "display",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/odormeanchey/v9/GK3E7EjPoBkeZhYshGFo0eVKG8sq4NyGgdteJLvqLDs.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Offside",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/offside/v5/v0C913SB8wqQUvcu1faUqw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Old Standard TT",
      category: "serif",
      variants: ["regular", "italic", "700"],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/oldstandardtt/v9/n6RTCDcIPWSE8UNBa4k-DLcB5jyhm1VsHs65c3QNDr0.ttf",
        italic:
          "http://fonts.gstatic.com/s/oldstandardtt/v9/QQT_AUSp4AV4dpJfIN7U5PWrQzeMtsHf8QsWQ2cZg3c.ttf",
        700: "http://fonts.gstatic.com/s/oldstandardtt/v9/5Ywdce7XEbTSbxs__4X1_HJqbZqK7TdZ58X80Q_Lw8Y.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Oldenburg",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/oldenburg/v5/dqA_M_uoCVXZbCO-oKBTnQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Oleo Script",
      category: "display",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/oleoscript/v6/21stZcmPyzbQVXtmGegyqKCWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/oleoscript/v6/hudNQFKFl98JdNnlo363fne1Pd76Vl7zRpE7NLJQ7XU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Oleo Script Swash Caps",
      category: "display",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/oleoscriptswashcaps/v5/vdWhGqsBUAP-FF3NOYTe4iMF4kXAPemmyaDpMXQ31P0.ttf",
        700: "http://fonts.gstatic.com/s/oleoscriptswashcaps/v5/HMO3ftxA9AU5floml9c755reFYaXZ4zuJXJ8fr8OO1g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Open Sans",
      category: "sans-serif",
      variants: [
        "300",
        "300italic",
        "regular",
        "italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
      ],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v15",
      lastModified: "2017-10-11",
      files: {
        300: "http://fonts.gstatic.com/s/opensans/v15/DXI1ORHCpsQm3Vp6mXoaTS3USBnSvpkopQaUR-2r7iU.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/opensans/v15/PRmiXeptR36kaC0GEAetxi9-WlPSxbfiI49GsXo3q0g.ttf",
        regular:
          "http://fonts.gstatic.com/s/opensans/v15/IgZJs4-7SA1XX_edsoXWog.ttf",
        italic:
          "http://fonts.gstatic.com/s/opensans/v15/O4NhV7_qs9r9seTo7fnsVKCWcynf_cDxXwCLxiixG1c.ttf",
        600: "http://fonts.gstatic.com/s/opensans/v15/MTP_ySUJH_bn48VBG8sNSi3USBnSvpkopQaUR-2r7iU.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/opensans/v15/PRmiXeptR36kaC0GEAetxpZ7xm-Bj30Bj2KNdXDzSZg.ttf",
        700: "http://fonts.gstatic.com/s/opensans/v15/k3k702ZOKiLJc3WVjuplzC3USBnSvpkopQaUR-2r7iU.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/opensans/v15/PRmiXeptR36kaC0GEAetxne1Pd76Vl7zRpE7NLJQ7XU.ttf",
        800: "http://fonts.gstatic.com/s/opensans/v15/EInbV5DfGHOiMmvb1Xr-hi3USBnSvpkopQaUR-2r7iU.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/opensans/v15/PRmiXeptR36kaC0GEAetxg89PwPrYLaRFJ-HNCU9NbA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Open Sans Condensed",
      category: "sans-serif",
      variants: ["300", "300italic", "700"],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v12",
      lastModified: "2017-10-11",
      files: {
        300: "http://fonts.gstatic.com/s/opensanscondensed/v12/gk5FxslNkTTHtojXrkp-xEMwSSh38KQVJx4ABtsZTnA.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/opensanscondensed/v12/jIXlqT1WKafUSwj6s9AzV4_LkTZ_uhAwfmGJ084hlvM.ttf",
        700: "http://fonts.gstatic.com/s/opensanscondensed/v12/gk5FxslNkTTHtojXrkp-xBEM87DM3yorPOrvA-vB930.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Oranienbaum",
      category: "serif",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext", "cyrillic-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/oranienbaum/v6/M98jYwCSn0PaFhXXgviCoaCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Orbitron",
      category: "sans-serif",
      variants: ["regular", "500", "700", "900"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/orbitron/v9/DY8swouAZjR3RaUPRf0HDQ.ttf",
        500: "http://fonts.gstatic.com/s/orbitron/v9/p-y_ffzMdo5JN_7ia0vYEqCWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/orbitron/v9/PS9_6SLkY1Y6OgPO3APr6qCWcynf_cDxXwCLxiixG1c.ttf",
        900: "http://fonts.gstatic.com/s/orbitron/v9/2I3-8i9hT294TE_pyjy9SaCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Oregano",
      category: "display",
      variants: ["regular", "italic"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/oregano/v5/UiLhqNixVv2EpjRoBG6axA.ttf",
        italic:
          "http://fonts.gstatic.com/s/oregano/v5/_iwqGEht6XsAuEaCbYG64Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Orienta",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/orienta/v5/_NKSk93mMs0xsqtfjCsB3Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Original Surfer",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/originalsurfer/v6/gdHw6HpSIN4D6Xt7pi1-qIkEz33TDwAZczo_6fY7eg0.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Oswald",
      category: "sans-serif",
      variants: ["200", "300", "regular", "500", "600", "700"],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
      version: "v16",
      lastModified: "2017-11-21",
      files: {
        200: "http://fonts.gstatic.com/s/oswald/v16/NFBt4e1rewQyDPftazXlBw.ttf",
        300: "http://fonts.gstatic.com/s/oswald/v16/y3tZpCdiRD4oNRRYFcAR5Q.ttf",
        regular:
          "http://fonts.gstatic.com/s/oswald/v16/uLEd2g2vJglLPfsBF91DCg.ttf",
        500: "http://fonts.gstatic.com/s/oswald/v16/wrHWShuZ7ELtrnx0cnkzXw.ttf",
        600: "http://fonts.gstatic.com/s/oswald/v16/JNlamLn5ALW8eKp46JLlQA.ttf",
        700: "http://fonts.gstatic.com/s/oswald/v16/7wj8ldV_5Ti37rHa0m1DDw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Over the Rainbow",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/overtherainbow/v8/6gp-gkpI2kie2dHQQLM2jQBdxkZd83xOSx-PAQ2QmiI.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Overlock",
      category: "display",
      variants: ["regular", "italic", "700", "700italic", "900", "900italic"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/overlock/v7/Z8oYsGi88-E1cUB8YBFMAg.ttf",
        italic:
          "http://fonts.gstatic.com/s/overlock/v7/rq6EacukHROOBrFrK_zF6_esZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/overlock/v7/Fexr8SqXM8Bm_gEVUA7AKaCWcynf_cDxXwCLxiixG1c.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/overlock/v7/wFWnYgeXKYBks6gEUwYnfAJKKGfqHaYFsRG-T3ceEVo.ttf",
        900: "http://fonts.gstatic.com/s/overlock/v7/YPJCVTT8ZbG3899l_-KIGqCWcynf_cDxXwCLxiixG1c.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/overlock/v7/iOZhxT2zlg7W5ij_lb-oDp0EAVxt0G0biEntp43Qt6E.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Overlock SC",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/overlocksc/v6/8D7HYDsvS_g1GhBnlHzgzaCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Overpass",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["latin", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/overpass/v2/ywiUWFAguOSxQn0FFeOdWPesZW2xOQ-xsNqO47m55DA.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/overpass/v2/thg-CA5nD5lyYWLwXbqXXi3USBnSvpkopQaUR-2r7iU.ttf",
        200: "http://fonts.gstatic.com/s/overpass/v2/WrbWRQuVnXt_EslNm2vBt6CWcynf_cDxXwCLxiixG1c.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/overpass/v2/Eyj9nfhrJ71MmfPNEwqE02eudeTO44zf-ht3k-KNzwg.ttf",
        300: "http://fonts.gstatic.com/s/overpass/v2/nqDUqkXaOp0r1j0uaM5VUaCWcynf_cDxXwCLxiixG1c.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/overpass/v2/R77XtXNe7WC4SXZBLWmy80eOrDcLawS7-ssYqLr2Xp4.ttf",
        regular:
          "http://fonts.gstatic.com/s/overpass/v2/1fNed5evrqtu4ZjkbTnCRw.ttf",
        italic:
          "http://fonts.gstatic.com/s/overpass/v2/lG-Dpm66OH9lPHbYTnITSvesZW2xOQ-xsNqO47m55DA.ttf",
        600: "http://fonts.gstatic.com/s/overpass/v2/-GUou309ST_HAHIhkHjkz6CWcynf_cDxXwCLxiixG1c.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/overpass/v2/aPYi-s_WVz-zuU4TsgAEjvpTEJqju4Hz1txDWij77d4.ttf",
        700: "http://fonts.gstatic.com/s/overpass/v2/sBTg-F6_A1NQLJPfW5I7Q6CWcynf_cDxXwCLxiixG1c.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/overpass/v2/E5UsN4VY1e_Twk_bY6TpQAJKKGfqHaYFsRG-T3ceEVo.ttf",
        800: "http://fonts.gstatic.com/s/overpass/v2/YeZIq305iGwGCyZbaiEbVqCWcynf_cDxXwCLxiixG1c.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/overpass/v2/j6xjlCEDoKw-D0Co-88A9Kk3bhPBSBJ0bSJQ6acL-0g.ttf",
        900: "http://fonts.gstatic.com/s/overpass/v2/4lJ8BLdIYI_B9rFwoB4zO6CWcynf_cDxXwCLxiixG1c.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/overpass/v2/SegM1mSQIRZG2pJwM_2Nm50EAVxt0G0biEntp43Qt6E.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Overpass Mono",
      category: "monospace",
      variants: ["300", "regular", "600", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-09",
      files: {
        300: "http://fonts.gstatic.com/s/overpassmono/v3/JEQ6tXkANEo2u0wZ-MTOPEW1P7_iUBn_wmH5B9p-CEw.ttf",
        regular:
          "http://fonts.gstatic.com/s/overpassmono/v3/MarHoIqW2hy_po97b_wS9uV_5zh5b-_HiooIRUBwn1A.ttf",
        600: "http://fonts.gstatic.com/s/overpassmono/v3/JEQ6tXkANEo2u0wZ-MTOPCvU6mrnWf1MVbTZ5LZwmOY.ttf",
        700: "http://fonts.gstatic.com/s/overpassmono/v3/JEQ6tXkANEo2u0wZ-MTOPO-Cz_5MeePnXDAcLNWyBME.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ovo",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular: "http://fonts.gstatic.com/s/ovo/v8/mFg27dimu3s9t09qjCwB1g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Oxygen",
      category: "sans-serif",
      variants: ["300", "regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/oxygen/v7/lZ31r0bR1Bzt_DfGZu1S8A.ttf",
        regular:
          "http://fonts.gstatic.com/s/oxygen/v7/uhoyAE7XlQL22abzQieHjw.ttf",
        700: "http://fonts.gstatic.com/s/oxygen/v7/yLqkmDwuNtt5pSqsJmhyrg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Oxygen Mono",
      category: "monospace",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/oxygenmono/v5/DigTu7k4b7OmM8ubt1Qza6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "PT Mono",
      category: "monospace",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext", "cyrillic-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ptmono/v5/QUbM8H9yJK5NhpQ0REO6Wg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "PT Sans",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["cyrillic", "latin", "latin-ext", "cyrillic-ext"],
      version: "v9",
      lastModified: "2017-10-11",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ptsans/v9/UFoEz2uiuMypUGZL1NKoeg.ttf",
        italic:
          "http://fonts.gstatic.com/s/ptsans/v9/yls9EYWOd496wiu7qzfgNg.ttf",
        700: "http://fonts.gstatic.com/s/ptsans/v9/F51BEgHuR0tYHxF0bD4vwvesZW2xOQ-xsNqO47m55DA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/ptsans/v9/lILlYDvubYemzYzN7GbLkC3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "PT Sans Caption",
      category: "sans-serif",
      variants: ["regular", "700"],
      subsets: ["cyrillic", "latin", "latin-ext", "cyrillic-ext"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ptsanscaption/v10/OXYTDOzBcXU8MTNBvBHeSW8by34Z3mUMtM-o4y-SHCY.ttf",
        700: "http://fonts.gstatic.com/s/ptsanscaption/v10/Q-gJrFokeE7JydPpxASt25tc0eyfI4QDEsobEEpk_hA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "PT Sans Narrow",
      category: "sans-serif",
      variants: ["regular", "700"],
      subsets: ["cyrillic", "latin", "latin-ext", "cyrillic-ext"],
      version: "v8",
      lastModified: "2017-10-11",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ptsansnarrow/v8/UyYrYy3ltEffJV9QueSi4ZTvAuddT2xDMbdz0mdLyZY.ttf",
        700: "http://fonts.gstatic.com/s/ptsansnarrow/v8/Q_pTky3Sc3ubRibGToTAYsLtdzs3iyjn_YuT226ZsLU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "PT Serif",
      category: "serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["cyrillic", "latin", "latin-ext", "cyrillic-ext"],
      version: "v9",
      lastModified: "2017-10-11",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ptserif/v9/sAo427rn3-QL9sWCbMZXhA.ttf",
        italic:
          "http://fonts.gstatic.com/s/ptserif/v9/9khWhKzhpkH0OkNnBKS3n_esZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/ptserif/v9/kyZw18tqQ5if-_wpmxxOeKCWcynf_cDxXwCLxiixG1c.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/ptserif/v9/Foydq9xJp--nfYIx2TBz9QJKKGfqHaYFsRG-T3ceEVo.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "PT Serif Caption",
      category: "serif",
      variants: ["regular", "italic"],
      subsets: ["cyrillic", "latin", "latin-ext", "cyrillic-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ptserifcaption/v9/7xkFOeTxxO1GMC1suOUYWVsRioCqs5fohhaYel24W3k.ttf",
        italic:
          "http://fonts.gstatic.com/s/ptserifcaption/v9/0kfPsmrmTSgiec7u_Wa0DB1mqvzPHelJwRcF_s_EUM0.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Pacifico",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
      version: "v12",
      lastModified: "2017-11-07",
      files: {
        regular:
          "http://fonts.gstatic.com/s/pacifico/v12/GIrpeRY1r5CzbfL8r182lw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Padauk",
      category: "sans-serif",
      variants: ["regular", "700"],
      subsets: ["latin", "myanmar"],
      version: "v4",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/padauk/v4/WdTk6igBu-qn4v8naF9hGQ.ttf",
        700: "http://fonts.gstatic.com/s/padauk/v4/XUBO5k0emPIVnqCcQCcEpg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Palanquin",
      category: "sans-serif",
      variants: ["100", "200", "300", "regular", "500", "600", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/palanquin/v3/Hu0eGDVGK_g4saUFu6AK3KCWcynf_cDxXwCLxiixG1c.ttf",
        200: "http://fonts.gstatic.com/s/palanquin/v3/pqXYXD7-VI5ezTjeqQOcyC3USBnSvpkopQaUR-2r7iU.ttf",
        300: "http://fonts.gstatic.com/s/palanquin/v3/c0-J5OCAagpFCKkKraz-Ey3USBnSvpkopQaUR-2r7iU.ttf",
        regular:
          "http://fonts.gstatic.com/s/palanquin/v3/xCwBUoAEV0kzCDwerAZ0Aw.ttf",
        500: "http://fonts.gstatic.com/s/palanquin/v3/wLvvkEcZMKy95afLWh2EfC3USBnSvpkopQaUR-2r7iU.ttf",
        600: "http://fonts.gstatic.com/s/palanquin/v3/405UIAv95_yZkCECrH6y-i3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/palanquin/v3/-UtkePo3NFvxEN3rGCtTvi3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Palanquin Dark",
      category: "sans-serif",
      variants: ["regular", "500", "600", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/palanquindark/v3/PamTqrrgbBh_M3702w39rOfChn3JSg5yz_Q_xmrKQN0.ttf",
        500: "http://fonts.gstatic.com/s/palanquindark/v3/iXyBGf5UbFUu6BG8hOY-maMZTo-EwKMRQt3RWHocLi0.ttf",
        600: "http://fonts.gstatic.com/s/palanquindark/v3/iXyBGf5UbFUu6BG8hOY-mVNxaunw8i4Gywrk2SigRnk.ttf",
        700: "http://fonts.gstatic.com/s/palanquindark/v3/iXyBGf5UbFUu6BG8hOY-mWToair6W0TEE44XrlfKbiM.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Pangolin",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/pangolin/v3/i2W796ne6lveehHXs8AFGA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Paprika",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/paprika/v5/b-VpyoRSieBdB5BPJVF8HQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Parisienne",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/parisienne/v5/TW74B5QISJNx9moxGlmJfvesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Passero One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/passeroone/v9/Yc-7nH5deCCv9Ed0MMnAQqCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Passion One",
      category: "display",
      variants: ["regular", "700", "900"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/passionone/v8/1UIK1tg3bKJ4J3o35M4heqCWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/passionone/v8/feOcYDy2R-f3Ysy72PYJ2ne1Pd76Vl7zRpE7NLJQ7XU.ttf",
        900: "http://fonts.gstatic.com/s/passionone/v8/feOcYDy2R-f3Ysy72PYJ2ienaqEuufTBk9XMKnKmgDA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Pathway Gothic One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/pathwaygothicone/v6/Lqv9ztoTUV8Q0FmQZzPqaA6A6xIYD7vYcYDop1i-K-c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Patrick Hand",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/patrickhand/v11/9BG3JJgt_HlF3NpEUehL0C3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Patrick Hand SC",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/patrickhandsc/v5/OYFWCgfCR-7uHIovjUZXsbAgSRh1LpJXlLfl8IbsmHg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Pattaya",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext", "thai", "vietnamese"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/pattaya/v2/sJEout1xdD7J8H-1H81pIQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Patua One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/patuaone/v7/njZwotTYjswR4qdhsW-kJw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Pavanam",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "tamil", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/pavanam/v2/C7yuEhNK5oftNLSL3I0bGw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Paytone One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/paytoneone/v10/3WCxC7JAJjQHQVoIE0ZwvqCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Peddana",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "telugu"],
      version: "v5",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/peddana/v5/zaSZuj_GhmC8AOTugOROnA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Peralta",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/peralta/v5/cTJX5KEuc0GKRU9NXSm-8Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Permanent Marker",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/permanentmarker/v7/9vYsg5VgPHKK8SXYbf3sMol14xj5tdg9OHF8w4E7StQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Petit Formal Script",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/petitformalscript/v5/OEZwr2-ovBsq2n3ACCKoEvVPl2Gjtxj0D6F7QLy1VQc.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Petrona",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/petrona/v6/nnQwxlP6dhrGovYEFtemTg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Philosopher",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["cyrillic", "latin", "vietnamese", "cyrillic-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/philosopher/v9/oZLTrB9jmJsyV0u_T0TKEaCWcynf_cDxXwCLxiixG1c.ttf",
        italic:
          "http://fonts.gstatic.com/s/philosopher/v9/_9Hnc_gz9k7Qq6uKaeHKmUeOrDcLawS7-ssYqLr2Xp4.ttf",
        700: "http://fonts.gstatic.com/s/philosopher/v9/napvkewXG9Gqby5vwGHICHe1Pd76Vl7zRpE7NLJQ7XU.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/philosopher/v9/PuKlryTcvTj7-qZWfLCFIM_zJjSACmk0BRPxQqhnNLU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Piedra",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/piedra/v6/owf-AvEEyAj9LJ2tVZ_3Mw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Pinyon Script",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/pinyonscript/v7/TzghnhfCn7TuE73f-CBQ0CeUSrabuTpOsMEiRLtKwk0.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Pirata One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/pirataone/v5/WnbD86B4vB2ckYcL7oxuhvesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Plaster",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/plaster/v9/O4QG9Z5116CXyfJdR9zxLw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Play",
      category: "sans-serif",
      variants: ["regular", "700"],
      subsets: [
        "cyrillic",
        "latin",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/play/v9/GWvfObW8LhtsOX333MCpBg.ttf",
        700: "http://fonts.gstatic.com/s/play/v9/crPhg6I0alLI-MpB3vW-zw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Playball",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/playball/v7/3hOFiQm_EUzycTpcN9uz4w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Playfair Display",
      category: "serif",
      variants: ["regular", "italic", "700", "700italic", "900", "900italic"],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
      version: "v13",
      lastModified: "2017-11-07",
      files: {
        regular:
          "http://fonts.gstatic.com/s/playfairdisplay/v13/2NBgzUtEeyB-Xtpr9bm1CV6uyC_qD11hrFQ6EGgTJWI.ttf",
        italic:
          "http://fonts.gstatic.com/s/playfairdisplay/v13/9MkijrV-dEJ0-_NWV7E6NzMsbnvDNEBX25F5HWk9AhI.ttf",
        700: "http://fonts.gstatic.com/s/playfairdisplay/v13/UC3ZEjagJi85gF9qFaBgICsv6SrURqJprbhH_C1Mw8w.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/playfairdisplay/v13/n7G4PqJvFP2Kubl0VBLDECsYW3XoOVcYyYdp9NzzS9E.ttf",
        900: "http://fonts.gstatic.com/s/playfairdisplay/v13/UC3ZEjagJi85gF9qFaBgIKqwMe2wjvZrAR44M0BJZ48.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/playfairdisplay/v13/n7G4PqJvFP2Kubl0VBLDEC0JfJ4xmm7j1kL6D7mPxrA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Playfair Display SC",
      category: "serif",
      variants: ["regular", "italic", "700", "700italic", "900", "900italic"],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
      version: "v7",
      lastModified: "2017-11-07",
      files: {
        regular:
          "http://fonts.gstatic.com/s/playfairdisplaysc/v7/G0-tvBxd4eQRdwFKB8dRkcpjYTDWIvcAwAccqeW9uNM.ttf",
        italic:
          "http://fonts.gstatic.com/s/playfairdisplaysc/v7/myuYiFR-4NTrUT4w6TKls2klJsJYggW8rlNoTOTuau0.ttf",
        700: "http://fonts.gstatic.com/s/playfairdisplaysc/v7/5ggqGkvWJU_TtW2W8cEubA-Amcyomnuy4WsCiPxGHjw.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/playfairdisplaysc/v7/6X0OQrQhEEnPo56RalREX4krgPi80XvBcbTwmz-rgmU.ttf",
        900: "http://fonts.gstatic.com/s/playfairdisplaysc/v7/5ggqGkvWJU_TtW2W8cEubKXL3C32k275YmX_AcBPZ7w.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/playfairdisplaysc/v7/6X0OQrQhEEnPo56RalREX8Zag2q3ssKz8uH1RU4a9gs.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Podkova",
      category: "serif",
      variants: ["regular", "500", "600", "700", "800"],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/podkova/v11/eylljyGVfB8ZUQjYY3WZRQ.ttf",
        500: "http://fonts.gstatic.com/s/podkova/v11/8MkhKmKhl0HgqBeKkV0pmvesZW2xOQ-xsNqO47m55DA.ttf",
        600: "http://fonts.gstatic.com/s/podkova/v11/921xSzgq6uUBjPZXn2IH0PesZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/podkova/v11/SqW4aa8m_KVrOgYSydQ33vesZW2xOQ-xsNqO47m55DA.ttf",
        800: "http://fonts.gstatic.com/s/podkova/v11/ObfRYfRr58NtktZuAa1VhfesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Poiret One",
      category: "display",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/poiretone/v5/dWcYed048E5gHGDIt8i1CPesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Poller One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/pollerone/v7/dkctmDlTPcZ6boC8662RA_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Poly",
      category: "serif",
      variants: ["regular", "italic"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/poly/v8/bcMAuiacS2qkd54BcwW6_Q.ttf",
        italic: "http://fonts.gstatic.com/s/poly/v8/Zkx-eIlZSjKUrPGYhV5PeA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Pompiere",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/pompiere/v7/o_va2p9CD5JfmFohAkGZIA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Pontano Sans",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/pontanosans/v5/gTHiwyxi6S7iiHpqAoiE3C3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Poppins",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-11-21",
      files: {
        100: "http://fonts.gstatic.com/s/poppins/v5/J_Uo-RBVJYTcfQfJqaBpiA.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/poppins/v5/AgVJ3FHPsWMHPMmRYdKWQKCWcynf_cDxXwCLxiixG1c.ttf",
        200: "http://fonts.gstatic.com/s/poppins/v5/iG8N2M28abs14mWAmy9C8vesZW2xOQ-xsNqO47m55DA.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/poppins/v5/-GlaWpWcSgdVagNuOGuFKS3USBnSvpkopQaUR-2r7iU.ttf",
        300: "http://fonts.gstatic.com/s/poppins/v5/VIeViZ2fPtYBt3B2fQZplvesZW2xOQ-xsNqO47m55DA.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/poppins/v5/QmRKoWaGfh304P2oApdMLS3USBnSvpkopQaUR-2r7iU.ttf",
        regular:
          "http://fonts.gstatic.com/s/poppins/v5/hlvAxH6aIdOjWlLzgm0jqg.ttf",
        italic:
          "http://fonts.gstatic.com/s/poppins/v5/3cZiAJEeIIIKVRjGXr9qVg.ttf",
        500: "http://fonts.gstatic.com/s/poppins/v5/4WGKlFyjcmCFVl8pRsgZ9vesZW2xOQ-xsNqO47m55DA.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/poppins/v5/ZswPVmYNMYXIwQy7Wnzcyi3USBnSvpkopQaUR-2r7iU.ttf",
        600: "http://fonts.gstatic.com/s/poppins/v5/-zOABrCWORC3lyDh-ajNnPesZW2xOQ-xsNqO47m55DA.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/poppins/v5/RbebACOccNN-5ixkDIVLjS3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/poppins/v5/8JitanEsk5aDh7mDYs-fYfesZW2xOQ-xsNqO47m55DA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/poppins/v5/c4FPK8_hIFKoX59qcGwdCi3USBnSvpkopQaUR-2r7iU.ttf",
        800: "http://fonts.gstatic.com/s/poppins/v5/vVhctzCFjekFM26ZXVvlAvesZW2xOQ-xsNqO47m55DA.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/poppins/v5/nhuxdF7XMkIXmkGDadS6EC3USBnSvpkopQaUR-2r7iU.ttf",
        900: "http://fonts.gstatic.com/s/poppins/v5/7WUVvX7AIKpgWf6w-guTPfesZW2xOQ-xsNqO47m55DA.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/poppins/v5/Lmn8WRFdDq3MeV9dyKOb_y3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Port Lligat Sans",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/portlligatsans/v6/CUEdhRk7oC7up0p6t0g4P6mASEpx5X0ZpsuJOuvfOGA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Port Lligat Slab",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/portlligatslab/v6/CUEdhRk7oC7up0p6t0g4PxLSPACXvawUYCBEnHsOe30.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Pragati Narrow",
      category: "sans-serif",
      variants: ["regular", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/pragatinarrow/v3/HzG2TfC862qPNsZsV_djPpTvAuddT2xDMbdz0mdLyZY.ttf",
        700: "http://fonts.gstatic.com/s/pragatinarrow/v3/DnSI1zRkc0CY-hI5SC3q3MLtdzs3iyjn_YuT226ZsLU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Prata",
      category: "serif",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "vietnamese", "cyrillic-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/prata/v8/3gmx8r842loRRm9iQkCDGg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Preahvihear",
      category: "display",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v9",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/preahvihear/v9/82tDI-xTc53CxxOzEG4hDaCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Press Start 2P",
      category: "display",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "greek", "latin-ext", "cyrillic-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/pressstart2p/v6/8Lg6LX8-ntOHUQnvQ0E7o1jfl3W46Sz5gOkEVhcFWF4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Pridi",
      category: "serif",
      variants: ["200", "300", "regular", "500", "600", "700"],
      subsets: ["latin", "latin-ext", "thai", "vietnamese"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        200: "http://fonts.gstatic.com/s/pridi/v3/WvKJ-kflGuELyK4uQzpYIA.ttf",
        300: "http://fonts.gstatic.com/s/pridi/v3/Ihwk-OGVFS69PINILdqAjQ.ttf",
        regular:
          "http://fonts.gstatic.com/s/pridi/v3/Mau018Ghi7LJX7FkGYCZAQ.ttf",
        500: "http://fonts.gstatic.com/s/pridi/v3/dPNOrMxU-HjLo-fvkFydsQ.ttf",
        600: "http://fonts.gstatic.com/s/pridi/v3/J0i5OZxX07KC4mby5RjNbg.ttf",
        700: "http://fonts.gstatic.com/s/pridi/v3/UhCy4jDDJttTB8k8rtWadg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Princess Sofia",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/princesssofia/v5/8g5l8r9BM0t1QsXLTajDe-wjmA7ie-lFcByzHGRhCIg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Prociono",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/prociono/v7/43ZYDHWogdFeNBWTl6ksmw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Prompt",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["latin", "latin-ext", "thai", "vietnamese"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/prompt/v2/ltjX-trOmfS-yKy_awt70g.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/prompt/v2/KvTeArBpVb-tA2mahV6Jk_esZW2xOQ-xsNqO47m55DA.ttf",
        200: "http://fonts.gstatic.com/s/prompt/v2/MNB_CVkbfYHFMWX_UbDC2Q.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/prompt/v2/NR0JuXzzCDKpLNVhfyEAiaCWcynf_cDxXwCLxiixG1c.ttf",
        300: "http://fonts.gstatic.com/s/prompt/v2/LzifakiWysr3N3OoAdbdpg.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/prompt/v2/ir8BhbeDHM-qnbo-tnpmt6CWcynf_cDxXwCLxiixG1c.ttf",
        regular:
          "http://fonts.gstatic.com/s/prompt/v2/nDo1rQFnTFNua4cp-OnD2A.ttf",
        italic:
          "http://fonts.gstatic.com/s/prompt/v2/ZD4khIP924SU2fRYOJkraQ.ttf",
        500: "http://fonts.gstatic.com/s/prompt/v2/w31OY1otplAgr5iZ21K7Fg.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/prompt/v2/dfaeaRx00u9arVHsaDjliaCWcynf_cDxXwCLxiixG1c.ttf",
        600: "http://fonts.gstatic.com/s/prompt/v2/uUrJjg1BGaIb6CAOlUIp9g.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/prompt/v2/CJUBMsoNNHMMdFRxm-n7p6CWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/prompt/v2/HdM_epiStzshOr-49ubVyg.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/prompt/v2/GtXRH7QWy3aLCHoJuR5WIKCWcynf_cDxXwCLxiixG1c.ttf",
        800: "http://fonts.gstatic.com/s/prompt/v2/GF9cOamDd7mYPHNW1nZLKg.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/prompt/v2/kBLgnnEB-VXkOLFCc0pzwqCWcynf_cDxXwCLxiixG1c.ttf",
        900: "http://fonts.gstatic.com/s/prompt/v2/KFgmbwHbRBQb28VFhH3c8Q.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/prompt/v2/qjrOe-lEPwDDeUu5g6q_DaCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Prosto One",
      category: "display",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/prostoone/v6/bsqnAElAqk9kX7eABTRFJPesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Proza Libre",
      category: "sans-serif",
      variants: [
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
      ],
      subsets: ["latin", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/prozalibre/v2/Hg11OrfE1P_U6mKmrZPknKCWcynf_cDxXwCLxiixG1c.ttf",
        italic:
          "http://fonts.gstatic.com/s/prozalibre/v2/ClQTew5IUT7yKo8vyspLxEeOrDcLawS7-ssYqLr2Xp4.ttf",
        500: "http://fonts.gstatic.com/s/prozalibre/v2/4gjxWDPA6RMWrIls_qgQBsCNfqCYlB_eIx7H1TVXe60.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/prozalibre/v2/rWq3Qp4ZlPGKduc1qkgLHGnWRcJAYo5PSCx8UfGMHCI.ttf",
        600: "http://fonts.gstatic.com/s/prozalibre/v2/4gjxWDPA6RMWrIls_qgQBpZ7xm-Bj30Bj2KNdXDzSZg.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/prozalibre/v2/rWq3Qp4ZlPGKduc1qkgLHJe6We3S5L6hKLscKpOkmlo.ttf",
        700: "http://fonts.gstatic.com/s/prozalibre/v2/4gjxWDPA6RMWrIls_qgQBne1Pd76Vl7zRpE7NLJQ7XU.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/prozalibre/v2/rWq3Qp4ZlPGKduc1qkgLHM_zJjSACmk0BRPxQqhnNLU.ttf",
        800: "http://fonts.gstatic.com/s/prozalibre/v2/4gjxWDPA6RMWrIls_qgQBg89PwPrYLaRFJ-HNCU9NbA.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/prozalibre/v2/rWq3Qp4ZlPGKduc1qkgLHCad_7rtf4IdDfsLVg-2OV4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Puritan",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/puritan/v9/wv_RtgVBSCn-or2MC0n4Kg.ttf",
        italic:
          "http://fonts.gstatic.com/s/puritan/v9/BqZX8Tp200LeMv1KlzXgLQ.ttf",
        700: "http://fonts.gstatic.com/s/puritan/v9/pJS2SdwI0SCiVnO0iQSFT_esZW2xOQ-xsNqO47m55DA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/puritan/v9/rFG3XkMJL75nUNZwCEIJqC3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Purple Purse",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/purplepurse/v6/Q5heFUrdmei9axbMITxxxS3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Quando",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/quando/v6/03nDiEZuO2-h3xvtG6UmHg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Quantico",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/quantico/v6/pwSnP8Xpaix2rIz99HrSlQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/quantico/v6/KQhDd2OsZi6HiITUeFQ2U_esZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/quantico/v6/OVZZzjcZ3Hkq2ojVcUtDjaCWcynf_cDxXwCLxiixG1c.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/quantico/v6/HeCYRcZbdRso3ZUu01ELbQJKKGfqHaYFsRG-T3ceEVo.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Quattrocento",
      category: "serif",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/quattrocento/v9/WZDISdyil4HsmirlOdBRFC3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/quattrocento/v9/Uvi-cRwyvqFpl9j3oT2mqkD2ttfZwueP-QU272T9-k4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Quattrocento Sans",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin", "latin-ext"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/quattrocentosans/v10/efd6FGWWGX5Z3ztwLBrG9eAj_ty82iuwwDTNEYXGiyQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/quattrocentosans/v10/8PXYbvM__bjl0rBnKiByg532VBCoA_HLsn85tSWZmdo.ttf",
        700: "http://fonts.gstatic.com/s/quattrocentosans/v10/tXSgPxDl7Lk8Zr_5qX8FIbqxG25nQNOioCZSK4sU-CA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/quattrocentosans/v10/8N1PdXpbG6RtFvTjl-5E7buqAJxizi8Dk_SK5et7kMg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Questrial",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/questrial/v7/MoHHaw_WwNs_hd9ob1zTVw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Quicksand",
      category: "sans-serif",
      variants: ["300", "regular", "500", "700"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/quicksand/v7/qhfoJiLu10kFjChCCTvGlC3USBnSvpkopQaUR-2r7iU.ttf",
        regular:
          "http://fonts.gstatic.com/s/quicksand/v7/Ngv3fIJjKB7sD-bTUGIFCA.ttf",
        500: "http://fonts.gstatic.com/s/quicksand/v7/FRGja7LlrG1Mypm0hCq0Di3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/quicksand/v7/32nyIRHyCu6iqEka_hbKsi3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Quintessential",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/quintessential/v5/mmk6ioesnTrEky_Zb92E5s02lXbtMOtZWfuxKeMZO8Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Qwigley",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/qwigley/v7/aDqxws-KubFID85TZHFouw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Racing Sans One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/racingsansone/v5/1r3DpWaCiT7y3PD4KgkNyDjVlsJB_M_Q_LtZxsoxvlw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Radley",
      category: "serif",
      variants: ["regular", "italic"],
      subsets: ["latin", "latin-ext"],
      version: "v12",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/radley/v12/FgE9di09a-mXGzAIyI6Q9Q.ttf",
        italic:
          "http://fonts.gstatic.com/s/radley/v12/Z_JcACuPAOO2f9kzQcGRug.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rajdhani",
      category: "sans-serif",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/rajdhani/v7/9pItuEhQZVGdq8spnHTku6CWcynf_cDxXwCLxiixG1c.ttf",
        regular:
          "http://fonts.gstatic.com/s/rajdhani/v7/Wfy5zp4PGFAFS7-Wetehzw.ttf",
        500: "http://fonts.gstatic.com/s/rajdhani/v7/nd_5ZpVwm710HcLual0fBqCWcynf_cDxXwCLxiixG1c.ttf",
        600: "http://fonts.gstatic.com/s/rajdhani/v7/5fnmZahByDeTtgxIiqbJSaCWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/rajdhani/v7/UBK6d2Hg7X7wYLlF92aXW6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rakkas",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "arabic", "latin-ext"],
      version: "v3",
      lastModified: "2017-11-07",
      files: {
        regular:
          "http://fonts.gstatic.com/s/rakkas/v3/XWSZpoSbAR4myQgKbSJM9A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Raleway",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["latin", "latin-ext"],
      version: "v12",
      lastModified: "2017-10-11",
      files: {
        100: "http://fonts.gstatic.com/s/raleway/v12/UDfD6oxBaBnmFJwQ7XAFNw.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/raleway/v12/hUpHtml6IPNuUR-FwVi2UKCWcynf_cDxXwCLxiixG1c.ttf",
        200: "http://fonts.gstatic.com/s/raleway/v12/LAQwev4hdCtYkOYX4Oc7nPesZW2xOQ-xsNqO47m55DA.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/raleway/v12/N2DIbZG4399cPGfifZUEQi3USBnSvpkopQaUR-2r7iU.ttf",
        300: "http://fonts.gstatic.com/s/raleway/v12/2VvSZU2kb4DZwFfRM4fLQPesZW2xOQ-xsNqO47m55DA.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/raleway/v12/TVSB8ogXDKMcnAAJ5CqrUi3USBnSvpkopQaUR-2r7iU.ttf",
        regular:
          "http://fonts.gstatic.com/s/raleway/v12/_dCzxpXzIS3sL-gdJWAP8A.ttf",
        italic:
          "http://fonts.gstatic.com/s/raleway/v12/utU2m1gdZSfuQpArSy5Dbw.ttf",
        500: "http://fonts.gstatic.com/s/raleway/v12/348gn6PEmbLDWlHbbV15d_esZW2xOQ-xsNqO47m55DA.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/raleway/v12/S7vGLZZ40c85SJgiptJGVy3USBnSvpkopQaUR-2r7iU.ttf",
        600: "http://fonts.gstatic.com/s/raleway/v12/M7no6oPkwKYJkedjB1wqEvesZW2xOQ-xsNqO47m55DA.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/raleway/v12/OY22yoG8EJ3IN_muVWm29C3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/raleway/v12/VGEV9-DrblisWOWLbK-1XPesZW2xOQ-xsNqO47m55DA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/raleway/v12/lFxvRPuGFG5ktd7P0WRwKi3USBnSvpkopQaUR-2r7iU.ttf",
        800: "http://fonts.gstatic.com/s/raleway/v12/mMh0JrsYMXcLO69jgJwpUvesZW2xOQ-xsNqO47m55DA.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/raleway/v12/us4LjTCmlYgh3W8CKujEJi3USBnSvpkopQaUR-2r7iU.ttf",
        900: "http://fonts.gstatic.com/s/raleway/v12/ajQQGcDBLcyLpaUfD76UuPesZW2xOQ-xsNqO47m55DA.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/raleway/v12/oY2RadnkHfshu5f0FLsgVS3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Raleway Dots",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ralewaydots/v5/lhLgmWCRcyz-QXo8LCzTfC3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ramabhadra",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "telugu"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ramabhadra/v6/JyhxLXRVQChLDGADS_c5MPesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ramaraja",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "telugu"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ramaraja/v2/XIqzxFapVczstBedHdQTiw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rambla",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/rambla/v5/YaTmpvm5gFg_ShJKTQmdzg.ttf",
        italic:
          "http://fonts.gstatic.com/s/rambla/v5/mhUgsKmp0qw3uATdDDAuwA.ttf",
        700: "http://fonts.gstatic.com/s/rambla/v5/C5VZH8BxQKmnBuoC00UPpw.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/rambla/v5/ziMzUZya6QahrKONSI1TzqCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rammetto One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/rammettoone/v6/mh0uQ1tV8QgSx9v_KyEYPC3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ranchers",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ranchers/v5/9ya8CZYhqT66VERfjQ7eLA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rancho",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/rancho/v8/ekp3-4QykC4--6KaslRgHA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ranga",
      category: "display",
      variants: ["regular", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ranga/v3/xpW6zFTNzY1JykoBIqE1Zg.ttf",
        700: "http://fonts.gstatic.com/s/ranga/v3/h8G_gEUH7vHKH-NkjAs34A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rasa",
      category: "serif",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: ["latin", "latin-ext", "gujarati"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/rasa/v3/XQ1gDq2EqBtGcdadPyPbww.ttf",
        regular:
          "http://fonts.gstatic.com/s/rasa/v3/A5PoJUwX_PxTsywxlRB79g.ttf",
        500: "http://fonts.gstatic.com/s/rasa/v3/HfsDi_Ls3NARO_YEODINGg.ttf",
        600: "http://fonts.gstatic.com/s/rasa/v3/f-fvbq-hWIQCdmT3QHGk3Q.ttf",
        700: "http://fonts.gstatic.com/s/rasa/v3/TSF3CG-8Cn72jvaVdqtMMQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rationale",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/rationale/v8/7M2eN-di0NGLQse7HzJRfg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ravi Prakash",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "telugu"],
      version: "v4",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/raviprakash/v4/8EzbM7Rymjk25jWeHxbO6C3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Redressed",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/redressed/v8/3aZ5sTBppH3oSm5SabegtA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Reem Kufi",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "arabic"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/reemkufi/v3/xLwMbK_T1g-h9p-rp60A1Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Reenie Beanie",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/reeniebeanie/v8/ljpKc6CdXusL1cnGUSamX4jjx0o0jr6fNXxPgYh_a8Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Revalia",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/revalia/v5/1TKw66fF5_poiL0Ktgo4_A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rhodium Libre",
      category: "serif",
      variants: ["regular"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/rhodiumlibre/v2/Vxr7A4-xE2zsBDDI8BcseIjjx0o0jr6fNXxPgYh_a8Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ribeye",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ribeye/v6/e5w3VE8HnWBln4Ll6lUj3Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ribeye Marrow",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ribeyemarrow/v7/q7cBSA-4ErAXBCDFPrhlY0cTNmV93fYG7UKgsLQNQWs.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Righteous",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/righteous/v6/0nRRWM_gCGCt2S-BCfN8WQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Risque",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/risque/v5/92RnElGnl8yHP97-KV3Fyg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Roboto",
      category: "sans-serif",
      variants: [
        "100",
        "100italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "700",
        "700italic",
        "900",
        "900italic",
      ],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v18",
      lastModified: "2017-10-16",
      files: {
        100: "http://fonts.gstatic.com/s/roboto/v18/7MygqTe2zs9YkP0adA9QQQ.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/roboto/v18/T1xnudodhcgwXCmZQ490TPesZW2xOQ-xsNqO47m55DA.ttf",
        300: "http://fonts.gstatic.com/s/roboto/v18/dtpHsbgPEm2lVWciJZ0P-A.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/roboto/v18/iE8HhaRzdhPxC93dOdA056CWcynf_cDxXwCLxiixG1c.ttf",
        regular:
          "http://fonts.gstatic.com/s/roboto/v18/W5F8_SL0XFawnjxHGsZjJA.ttf",
        italic:
          "http://fonts.gstatic.com/s/roboto/v18/hcKoSgxdnKlbH5dlTwKbow.ttf",
        500: "http://fonts.gstatic.com/s/roboto/v18/Uxzkqj-MIMWle-XP2pDNAA.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/roboto/v18/daIfzbEw-lbjMyv4rMUUTqCWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/roboto/v18/bdHGHleUa-ndQCOrdpfxfw.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/roboto/v18/owYYXKukxFDFjr0ZO8NXh6CWcynf_cDxXwCLxiixG1c.ttf",
        900: "http://fonts.gstatic.com/s/roboto/v18/H1vB34nOKWXqzKotq25pcg.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/roboto/v18/b9PWBSMHrT2zM5FgUdtu0aCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Roboto Condensed",
      category: "sans-serif",
      variants: ["300", "300italic", "regular", "italic", "700", "700italic"],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v16",
      lastModified: "2017-10-11",
      files: {
        300: "http://fonts.gstatic.com/s/robotocondensed/v16/b9QBgL0iMZfDSpmcXcE8nJRhFVcex_hajThhFkHyhYk.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/robotocondensed/v16/mg0cGfGRUERshzBlvqxeAPYa9bgCHecWXGgisnodcS0.ttf",
        regular:
          "http://fonts.gstatic.com/s/robotocondensed/v16/Zd2E9abXLFGSr9G3YK2MsKDbm6fPDOZJsR8PmdG62gY.ttf",
        italic:
          "http://fonts.gstatic.com/s/robotocondensed/v16/BP5K8ZAJv9qEbmuFp8RpJY_eiqgTfYGaH0bJiUDZ5GA.ttf",
        700: "http://fonts.gstatic.com/s/robotocondensed/v16/b9QBgL0iMZfDSpmcXcE8nPOYkGiSOYDq_T7HbIOV1hA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/robotocondensed/v16/mg0cGfGRUERshzBlvqxeAE2zk2RGRC3SlyyLLQfjS_8.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Roboto Mono",
      category: "monospace",
      variants: [
        "100",
        "100italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "700",
        "700italic",
      ],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/robotomono/v5/aOIeRp72J9_Hp_8KwQ9M-YAWxXGWZ3yJw6KhWS7MxOk.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/robotomono/v5/rqQ1zSE-ZGCKVZgew-A9dgyDtfpXZi-8rXUZYR4dumU.ttf",
        300: "http://fonts.gstatic.com/s/robotomono/v5/N4duVc9C58uwPiY8_59Fzy9-WlPSxbfiI49GsXo3q0g.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/robotomono/v5/1OsMuiiO6FCF2x67vzDKA2o9eWDfYYxG3A176Zl7aIg.ttf",
        regular:
          "http://fonts.gstatic.com/s/robotomono/v5/eJ4cxQe85Lo39t-LVoKa26CWcynf_cDxXwCLxiixG1c.ttf",
        italic:
          "http://fonts.gstatic.com/s/robotomono/v5/mE0EPT_93c7f86_WQexR3EeOrDcLawS7-ssYqLr2Xp4.ttf",
        500: "http://fonts.gstatic.com/s/robotomono/v5/N4duVc9C58uwPiY8_59Fz8CNfqCYlB_eIx7H1TVXe60.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/robotomono/v5/1OsMuiiO6FCF2x67vzDKA2nWRcJAYo5PSCx8UfGMHCI.ttf",
        700: "http://fonts.gstatic.com/s/robotomono/v5/N4duVc9C58uwPiY8_59Fz3e1Pd76Vl7zRpE7NLJQ7XU.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/robotomono/v5/1OsMuiiO6FCF2x67vzDKA8_zJjSACmk0BRPxQqhnNLU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Roboto Slab",
      category: "serif",
      variants: ["100", "300", "regular", "700"],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v7",
      lastModified: "2017-10-11",
      files: {
        100: "http://fonts.gstatic.com/s/robotoslab/v7/MEz38VLIFL-t46JUtkIEgIAWxXGWZ3yJw6KhWS7MxOk.ttf",
        300: "http://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJS9-WlPSxbfiI49GsXo3q0g.ttf",
        regular:
          "http://fonts.gstatic.com/s/robotoslab/v7/3__ulTNA7unv0UtplybPiqCWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJXe1Pd76Vl7zRpE7NLJQ7XU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rochester",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/rochester/v8/bnj8tmQBiOkdji_G_yvypg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rock Salt",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/rocksalt/v8/Zy7JF9h9WbhD9V3SFMQ1UQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rokkitt",
      category: "serif",
      variants: [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v12",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/rokkitt/v12/_3YC6rPA1FdHK3T5HJAiKA.ttf",
        200: "http://fonts.gstatic.com/s/rokkitt/v12/YawjzRx4kAyF2FdhIXfg1_esZW2xOQ-xsNqO47m55DA.ttf",
        300: "http://fonts.gstatic.com/s/rokkitt/v12/Cw0HfZi5axnl2GTVcAe4x_esZW2xOQ-xsNqO47m55DA.ttf",
        regular:
          "http://fonts.gstatic.com/s/rokkitt/v12/GMA7Z_ToF8uSvpZAgnp_VQ.ttf",
        500: "http://fonts.gstatic.com/s/rokkitt/v12/jSxUaZL9JCo117IMemf-iPesZW2xOQ-xsNqO47m55DA.ttf",
        600: "http://fonts.gstatic.com/s/rokkitt/v12/b4_SvUo9hy0bV60RoA1RKPesZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/rokkitt/v12/gxlo-sr3rPmvgSixYog_ofesZW2xOQ-xsNqO47m55DA.ttf",
        800: "http://fonts.gstatic.com/s/rokkitt/v12/mCok2W9ZHFgB-LY6ITuapfesZW2xOQ-xsNqO47m55DA.ttf",
        900: "http://fonts.gstatic.com/s/rokkitt/v12/riY221k9xwvseUAhNXMjQPesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Romanesco",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/romanesco/v6/2udIjUrpK_CPzYSxRVzD4Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ropa Sans",
      category: "sans-serif",
      variants: ["regular", "italic"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ropasans/v7/Gba7ZzVBuhg6nX_AoSwlkQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/ropasans/v7/V1zbhZQscNrh63dy5Jk2nqCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rosario",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin"],
      version: "v12",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/rosario/v12/bL-cEh8dXtDupB2WccA2LA.ttf",
        italic:
          "http://fonts.gstatic.com/s/rosario/v12/pkflNy18HEuVVx4EOjeb_Q.ttf",
        700: "http://fonts.gstatic.com/s/rosario/v12/nrS6PJvDWN42RP4TFWccd_esZW2xOQ-xsNqO47m55DA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/rosario/v12/EOgFX2Va5VGrkhn_eDpIRS3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rosarivo",
      category: "serif",
      variants: ["regular", "italic"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/rosarivo/v5/EmPiINK0qyqc7KSsNjJamA.ttf",
        italic:
          "http://fonts.gstatic.com/s/rosarivo/v5/u3VuWsWQlX1pDqsbz4paNPesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rouge Script",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/rougescript/v6/AgXDSqZJmy12qS0ixjs6Vy3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rozha One",
      category: "serif",
      variants: ["regular"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v4",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/rozhaone/v4/PyrMHQ6lucEIxwKmhqsX8A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rubik",
      category: "sans-serif",
      variants: [
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "700",
        "700italic",
        "900",
        "900italic",
      ],
      subsets: ["cyrillic", "latin", "hebrew", "latin-ext"],
      version: "v7",
      lastModified: "2017-11-21",
      files: {
        300: "http://fonts.gstatic.com/s/rubik/v7/o1vXYO8YwDpErHEAPAxpOg.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/rubik/v7/NyXDvUhvZLSWiVfGa5KM-vesZW2xOQ-xsNqO47m55DA.ttf",
        regular:
          "http://fonts.gstatic.com/s/rubik/v7/4sMyW_teKWHB3K8Hm-Il6A.ttf",
        italic:
          "http://fonts.gstatic.com/s/rubik/v7/elD65ddI0qvNcCh42b1Iqg.ttf",
        500: "http://fonts.gstatic.com/s/rubik/v7/D4HihERG27s-BJrQ4dvkbw.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/rubik/v7/0hcxMdoMbXtHiEM1ebdN6PesZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/rubik/v7/m1GGHcpLe6Mb0_sAyjXE4g.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/rubik/v7/R4g_rs714cUXVZcdnRdHw_esZW2xOQ-xsNqO47m55DA.ttf",
        900: "http://fonts.gstatic.com/s/rubik/v7/mOHfPRl5uP4vw7-5-dbnng.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/rubik/v7/HH1b7kBbwInqlw8OQxRE5vesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rubik Mono One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/rubikmonoone/v6/e_cupPtD4BrZzotubJD7UbAREgn5xbW23GEXXnhMQ5Y.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ruda",
      category: "sans-serif",
      variants: ["regular", "700", "900"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ruda/v9/jPEIPB7DM2DNK_uBGv2HGw.ttf",
        700: "http://fonts.gstatic.com/s/ruda/v9/JABOu1SYOHcGXVejUq4w6g.ttf",
        900: "http://fonts.gstatic.com/s/ruda/v9/Uzusv-enCjoIrznlJJaBRw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rufina",
      category: "serif",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/rufina/v5/s9IFr_fIemiohfZS-ZRDbQ.ttf",
        700: "http://fonts.gstatic.com/s/rufina/v5/D0RUjXFr55y4MVZY2Ww_RA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ruge Boogie",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/rugeboogie/v8/U-TTmltL8aENLVIqYbI5QaCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ruluko",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ruluko/v5/lv4cMwJtrx_dzmlK5SDc1g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rum Raisin",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/rumraisin/v5/kDiL-ntDOEq26B7kYM7cx_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ruslan Display",
      category: "display",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ruslandisplay/v8/SREdhlyLNUfU1VssRBfs3rgH88D3l9N4auRNHrNS708.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Russo One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/russoone/v6/zfwxZ--UhUc7FVfgT21PRQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ruthie",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ruthie/v7/vJ2LorukHSbWYoEs5juivg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Rye",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular: "http://fonts.gstatic.com/s/rye/v5/VUrJlpPpSZxspl3w_yNOrQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sacramento",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sacramento/v5/_kv-qycSHMNdhjiv0Kj7BvesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sahitya",
      category: "serif",
      variants: ["regular", "700"],
      subsets: ["devanagari", "latin"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sahitya/v2/wQWULcDbZqljdTfjOUtDvw.ttf",
        700: "http://fonts.gstatic.com/s/sahitya/v2/Zm5hNvMwUyN3tC4GMkH1l_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sail",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sail/v8/iuEoG6kt-bePGvtdpL0GUQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Saira",
      category: "sans-serif",
      variants: [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v2",
      lastModified: "2017-11-21",
      files: {
        100: "http://fonts.gstatic.com/s/saira/v2/Ozk8do2fTcpbNH9fymkZGg.ttf",
        200: "http://fonts.gstatic.com/s/saira/v2/IqoIheMFTgcbZXFWbGwENA.ttf",
        300: "http://fonts.gstatic.com/s/saira/v2/ANavK9Yw1m9jo7r6xy-MSg.ttf",
        regular:
          "http://fonts.gstatic.com/s/saira/v2/Xscf3I_Twe9a3mnmbLi5XQ.ttf",
        500: "http://fonts.gstatic.com/s/saira/v2/8JTYqpjvzQP3oTjzUn8w7Q.ttf",
        600: "http://fonts.gstatic.com/s/saira/v2/7TS8zxqrCaFpOEscLh1xXg.ttf",
        700: "http://fonts.gstatic.com/s/saira/v2/Vmcd_0w8o16ONteEu2UzSw.ttf",
        800: "http://fonts.gstatic.com/s/saira/v2/R-CIR5SYaB7pZZbF4KBcmg.ttf",
        900: "http://fonts.gstatic.com/s/saira/v2/NkJ3cJqxlFuVNRn8L9vVsg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Saira Condensed",
      category: "sans-serif",
      variants: [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        100: "http://fonts.gstatic.com/s/sairacondensed/v3/g6ZiOTAus3rTCuLbft-lrhQ4ZQgT5IY6T956D4i2DOg.ttf",
        200: "http://fonts.gstatic.com/s/sairacondensed/v3/iBnVn24meOdNw5Ie3y-w-t_1mjc__NNUUqnuBhyrdnQ.ttf",
        300: "http://fonts.gstatic.com/s/sairacondensed/v3/iBnVn24meOdNw5Ie3y-w-mOGg88i8doN2x6-0_j_XSs.ttf",
        regular:
          "http://fonts.gstatic.com/s/sairacondensed/v3/RzMaXT8ujYB0FpOoZJ_AtSQPsWWoiv__AzYJ9Zzn9II.ttf",
        500: "http://fonts.gstatic.com/s/sairacondensed/v3/iBnVn24meOdNw5Ie3y-w-gRL_-ABKXdjsJSPT0lc2Bk.ttf",
        600: "http://fonts.gstatic.com/s/sairacondensed/v3/iBnVn24meOdNw5Ie3y-w-rS5sSASxc8z4EQTQj7DCAI.ttf",
        700: "http://fonts.gstatic.com/s/sairacondensed/v3/iBnVn24meOdNw5Ie3y-w-sAWgzcA047xWLixhLCofl8.ttf",
        800: "http://fonts.gstatic.com/s/sairacondensed/v3/iBnVn24meOdNw5Ie3y-w-hVl4JojgVAnfiwswP7KrtY.ttf",
        900: "http://fonts.gstatic.com/s/sairacondensed/v3/iBnVn24meOdNw5Ie3y-w-mCsDIq3El29Rd5VD3daJ_M.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Saira Extra Condensed",
      category: "sans-serif",
      variants: [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        100: "http://fonts.gstatic.com/s/sairaextracondensed/v3/fW6xdUWepu0r8HZYLdXhdSi7tdGxScTr3oVgcrTUqWw.ttf",
        200: "http://fonts.gstatic.com/s/sairaextracondensed/v3/XVu3ZHO65MpX5FDLl4hwfa1IHoFZjDq9yl49NJ3Y0wY.ttf",
        300: "http://fonts.gstatic.com/s/sairaextracondensed/v3/XVu3ZHO65MpX5FDLl4hwfeZroXgFx_lT3TTeDaAqrWE.ttf",
        regular:
          "http://fonts.gstatic.com/s/sairaextracondensed/v3/3XMbuc1UIdE_Bo4eJ-H3G4elbRYnLTTQA1Z5cVLnsI4.ttf",
        500: "http://fonts.gstatic.com/s/sairaextracondensed/v3/XVu3ZHO65MpX5FDLl4hwfa4Ixr3FMLIaz6yY1ILODIU.ttf",
        600: "http://fonts.gstatic.com/s/sairaextracondensed/v3/XVu3ZHO65MpX5FDLl4hwfcMHImBNo4aGUuMCjGiDijI.ttf",
        700: "http://fonts.gstatic.com/s/sairaextracondensed/v3/XVu3ZHO65MpX5FDLl4hwfbGMx7y0UuyPIsLqSMg46Ks.ttf",
        800: "http://fonts.gstatic.com/s/sairaextracondensed/v3/XVu3ZHO65MpX5FDLl4hwff3VPWKD9LjLpSGgTAgUUIc.ttf",
        900: "http://fonts.gstatic.com/s/sairaextracondensed/v3/XVu3ZHO65MpX5FDLl4hwfb3y6LE9HhLx9tlnlwi3OAw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Saira Semi Condensed",
      category: "sans-serif",
      variants: [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        100: "http://fonts.gstatic.com/s/sairasemicondensed/v3/W0qqtuwvTyZEzthCisMvJNpUFoAgdo3N6uMK4qBKl14.ttf",
        200: "http://fonts.gstatic.com/s/sairasemicondensed/v3/AqP7QX0TdaZHs8pWxeHdZXmwZH8Mj4a8GCt9BVpguoM.ttf",
        300: "http://fonts.gstatic.com/s/sairasemicondensed/v3/AqP7QX0TdaZHs8pWxeHdZf41r7gBuORyHypyaMk5V7M.ttf",
        regular:
          "http://fonts.gstatic.com/s/sairasemicondensed/v3/E1gvqhdADptsO-uwP-KYOplmjOf-f3WTIBZyrvssS_s.ttf",
        500: "http://fonts.gstatic.com/s/sairasemicondensed/v3/AqP7QX0TdaZHs8pWxeHdZQTR7LyNMQKOmEK2zaPVo7k.ttf",
        600: "http://fonts.gstatic.com/s/sairasemicondensed/v3/AqP7QX0TdaZHs8pWxeHdZYxOyuVPIqzYlTscMcnFFdw.ttf",
        700: "http://fonts.gstatic.com/s/sairasemicondensed/v3/AqP7QX0TdaZHs8pWxeHdZVhvgkvS4Vb80oyvTRs3xAw.ttf",
        800: "http://fonts.gstatic.com/s/sairasemicondensed/v3/AqP7QX0TdaZHs8pWxeHdZbgNSs8Rfv-SK6bauL4DA_k.ttf",
        900: "http://fonts.gstatic.com/s/sairasemicondensed/v3/AqP7QX0TdaZHs8pWxeHdZftJ9g8-32R6gX5VB508ZS0.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Salsa",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/salsa/v7/BnpUCBmYdvggScEPs5JbpA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sanchez",
      category: "serif",
      variants: ["regular", "italic"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sanchez/v5/BEL8ao-E2LJ5eHPLB2UAiw.ttf",
        italic:
          "http://fonts.gstatic.com/s/sanchez/v5/iSrhkWLexUZzDeNxNEHtzA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sancreek",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sancreek/v8/8ZacBMraWMvHly4IJI3esw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sansita",
      category: "sans-serif",
      variants: [
        "regular",
        "italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["latin", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sansita/v2/ey9oYobmakEwtEciY0G5Mg.ttf",
        italic:
          "http://fonts.gstatic.com/s/sansita/v2/UkWzQlyaYvMqX8-kX9fI1A.ttf",
        700: "http://fonts.gstatic.com/s/sansita/v2/q9hPUXq37zR3BVunMJi2HfesZW2xOQ-xsNqO47m55DA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/sansita/v2/Izkki8H_L5Nxxk6vpKrxXS3USBnSvpkopQaUR-2r7iU.ttf",
        800: "http://fonts.gstatic.com/s/sansita/v2/vOIsA3n-LuVE_PeoZ3aSFfesZW2xOQ-xsNqO47m55DA.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/sansita/v2/4OvihNMj_b3nyu4KlgNNVS3USBnSvpkopQaUR-2r7iU.ttf",
        900: "http://fonts.gstatic.com/s/sansita/v2/lwgTmJASMyrLsXnTfRSt7fesZW2xOQ-xsNqO47m55DA.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/sansita/v2/JTPHz0Wyy3AImmVqi8CQTy3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sarala",
      category: "sans-serif",
      variants: ["regular", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sarala/v2/ohip9lixCHoBab7hTtgLnw.ttf",
        700: "http://fonts.gstatic.com/s/sarala/v2/hpc9cz8KYsazwq2In_oJYw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sarina",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sarina/v6/XYtRfaSknHIU3NHdfTdXoQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sarpanch",
      category: "sans-serif",
      variants: ["regular", "500", "600", "700", "800", "900"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sarpanch/v3/YMBZdT27b6O5a1DADbAGSg.ttf",
        500: "http://fonts.gstatic.com/s/sarpanch/v3/Ov7BxSrFSZYrfuJxL1LzQaCWcynf_cDxXwCLxiixG1c.ttf",
        600: "http://fonts.gstatic.com/s/sarpanch/v3/WTnP2wnc0qSbUaaDG-2OQ6CWcynf_cDxXwCLxiixG1c.ttf",
        700: "http://fonts.gstatic.com/s/sarpanch/v3/57kYsSpovYmFaEt2hsZhv6CWcynf_cDxXwCLxiixG1c.ttf",
        800: "http://fonts.gstatic.com/s/sarpanch/v3/OKyqPLjdnuVghR-1TV6RzaCWcynf_cDxXwCLxiixG1c.ttf",
        900: "http://fonts.gstatic.com/s/sarpanch/v3/JhYc2cr6kqWTo_P0vfvJR6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Satisfy",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/satisfy/v8/PRlyepkd-JCGHiN8e9WV2w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Scada",
      category: "sans-serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["cyrillic", "latin", "latin-ext", "cyrillic-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/scada/v6/iZNC3ZEYwe3je6H-28d5Ug.ttf",
        italic:
          "http://fonts.gstatic.com/s/scada/v6/PCGyLT1qNawkOUQ3uHFhBw.ttf",
        700: "http://fonts.gstatic.com/s/scada/v6/t6XNWdMdVWUz93EuRVmifQ.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/scada/v6/kLrBIf7V4mDMwcd_Yw7-D_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Scheherazade",
      category: "serif",
      variants: ["regular", "700"],
      subsets: ["latin", "arabic"],
      version: "v13",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/scheherazade/v13/AuKlqGWzUC-8XqMOmsqXiy3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/scheherazade/v13/C1wtT46acJkQxc6mPHwvHED2ttfZwueP-QU272T9-k4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Schoolbell",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/schoolbell/v8/95-3djEuubb3cJx-6E7j4vesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Scope One",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/scopeone/v3/ge7dY8Yht-n7_1cLHtoT3w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Seaweed Script",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/seaweedscript/v5/eorWAPpOvvWrPw5IHwE60BnpV0hQCek3EmWnCPrvGRM.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Secular One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "hebrew", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/secularone/v2/yW9qikjpt_X0fh5oQJcdo6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sedgwick Ave",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sedgwickave/v3/pbgmsWX_2A5V-qqzaczoEy3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sedgwick Ave Display",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sedgwickavedisplay/v3/_2bQpgd1Hl3UOD3yDrU-cP912kD9slMJGfCNYtCeVl4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sevillana",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sevillana/v5/6m1Nh35oP7YEt00U80Smiw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Seymour One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/seymourone/v5/HrdG2AEG_870Xb7xBVv6C6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Shadows Into Light",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/shadowsintolight/v7/clhLqOv7MXn459PTh0gXYAW_5bEze-iLRNvGrRpJsfM.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Shadows Into Light Two",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/shadowsintolighttwo/v5/gDxHeefcXIo-lOuZFCn2xVQrZk-Pga5KeEE_oZjkQjQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Shanti",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/shanti/v9/lc4nG_JG6Q-2FQSOMMhb_w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Share",
      category: "display",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/share/v8/1ytD7zSb_-g9I2GG67vmVw.ttf",
        italic:
          "http://fonts.gstatic.com/s/share/v8/a9YGdQWFRlNJ0zClJVaY3Q.ttf",
        700: "http://fonts.gstatic.com/s/share/v8/XrU8e7a1YKurguyY2azk1Q.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/share/v8/A992-bLVYwAflKu6iaznufesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Share Tech",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sharetech/v7/Dq3DuZ5_0SW3oEfAWFpen_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Share Tech Mono",
      category: "monospace",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sharetechmono/v7/RQxK-3RA0Lnf3gnnnNrAscwD6PD0c3_abh9zHKQtbGU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Shojumaru",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/shojumaru/v5/WP8cxonzQQVAoI3RJQ2wug.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Short Stack",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/shortstack/v7/v4dXPI0Rm8XN9gk4SDdqlqCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Shrikhand",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "gujarati"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/shrikhand/v3/45jwHiwIDTWCy3Ir85vvKA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Siemreap",
      category: "display",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v10",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/siemreap/v10/JSK-mOIsXwxo-zE9XDDl_g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sigmar One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sigmarone/v8/oh_5NxD5JBZksdo2EntKefesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Signika",
      category: "sans-serif",
      variants: ["300", "regular", "600", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/signika/v8/0wDPonOzsYeEo-1KO78w4fesZW2xOQ-xsNqO47m55DA.ttf",
        regular:
          "http://fonts.gstatic.com/s/signika/v8/WvDswbww0oAtvBg2l1L-9w.ttf",
        600: "http://fonts.gstatic.com/s/signika/v8/lQMOF6NUN2ooR7WvB7tADvesZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/signika/v8/lEcnfPBICWJPv5BbVNnFJPesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Signika Negative",
      category: "sans-serif",
      variants: ["300", "regular", "600", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/signikanegative/v7/q5TOjIw4CenPw6C-TW06FjYFXpUPtCmIEFDvjUnLLaI.ttf",
        regular:
          "http://fonts.gstatic.com/s/signikanegative/v7/Z-Q1hzbY8uAo3TpTyPFMXVM1lnCWMnren5_v6047e5A.ttf",
        600: "http://fonts.gstatic.com/s/signikanegative/v7/q5TOjIw4CenPw6C-TW06FrKLaDJM01OezSVA2R_O3qI.ttf",
        700: "http://fonts.gstatic.com/s/signikanegative/v7/q5TOjIw4CenPw6C-TW06FpYzPxtVvobH1w3hEppR8WI.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Simonetta",
      category: "display",
      variants: ["regular", "italic", "900", "900italic"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/simonetta/v7/fN8puNuahBo4EYMQgp12Yg.ttf",
        italic:
          "http://fonts.gstatic.com/s/simonetta/v7/ynxQ3FqfF_Nziwy3T9ZwL6CWcynf_cDxXwCLxiixG1c.ttf",
        900: "http://fonts.gstatic.com/s/simonetta/v7/22EwvvJ2r1VwVCxit5LcVi3USBnSvpkopQaUR-2r7iU.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/simonetta/v7/WUXOpCgBZaRPrWtMCpeKoienaqEuufTBk9XMKnKmgDA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sintony",
      category: "sans-serif",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sintony/v5/IDhCijoIMev2L6Lg5QsduQ.ttf",
        700: "http://fonts.gstatic.com/s/sintony/v5/zVXQB1wqJn6PE4dWXoYpvPesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sirin Stencil",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sirinstencil/v6/pRpLdo0SawzO7MoBpvowsImg74kgS1F7KeR8rWhYwkU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Six Caps",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sixcaps/v8/_XeDnO0HOV8Er9u97If1tQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Skranji",
      category: "display",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/skranji/v5/jnOLPS0iZmDL7dfWnW3nIw.ttf",
        700: "http://fonts.gstatic.com/s/skranji/v5/Lcrhg-fviVkxiEgoadsI1vesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Slabo 13px",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v4",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/slabo13px/v4/jPGWFTjRXfCSzy0qd1nqdvesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Slabo 27px",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v4",
      lastModified: "2017-10-11",
      files: {
        regular:
          "http://fonts.gstatic.com/s/slabo27px/v4/gC0o8B9eU21EafNkXlRAfPesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Slackey",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/slackey/v8/evRIMNhGVCRJvCPv4kteeA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Smokum",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/smokum/v8/8YP4BuAcy97X8WfdKfxVRw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Smythe",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/smythe/v8/yACD1gy_MpbB9Ft42fUvYw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sniglet",
      category: "display",
      variants: ["regular", "800"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sniglet/v9/XWhyQLHH4SpCVsHRPRgu9w.ttf",
        800: "http://fonts.gstatic.com/s/sniglet/v9/NLF91nBmcEfkBgcEWbHFa_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Snippet",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/snippet/v7/eUcYMLq2GtHZovLlQH_9kA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Snowburst One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/snowburstone/v5/zSQzKOPukXRux2oTqfYJjIjjx0o0jr6fNXxPgYh_a8Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sofadi One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sofadione/v6/nirf4G12IcJ6KI8Eoj119fesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sofia",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sofia/v6/Imnvx0Ag9r6iDBFUY5_RaQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sonsie One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sonsieone/v6/KSP7xT1OSy0q2ob6RQOTWPesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sorts Mill Goudy",
      category: "serif",
      variants: ["regular", "italic"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sortsmillgoudy/v7/JzRrPKdwEnE8F1TDmDLMUlIL2Qjg-Xlsg_fhGbe2P5U.ttf",
        italic:
          "http://fonts.gstatic.com/s/sortsmillgoudy/v7/UUu1lKiy4hRmBWk599VL1TYNkCNSzLyoucKmbTguvr0.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Source Code Pro",
      category: "monospace",
      variants: ["200", "300", "regular", "500", "600", "700", "900"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        200: "http://fonts.gstatic.com/s/sourcecodepro/v7/leqv3v-yTsJNC7nFznSMqaXvKVW_haheDNrHjziJZVk.ttf",
        300: "http://fonts.gstatic.com/s/sourcecodepro/v7/leqv3v-yTsJNC7nFznSMqVP7R5lD_au4SZC6Ks_vyWs.ttf",
        regular:
          "http://fonts.gstatic.com/s/sourcecodepro/v7/mrl8jkM18OlOQN8JLgasD9Rl0pGnog23EMYRrBmUzJQ.ttf",
        500: "http://fonts.gstatic.com/s/sourcecodepro/v7/leqv3v-yTsJNC7nFznSMqX63uKwMO11Of4rJWV582wg.ttf",
        600: "http://fonts.gstatic.com/s/sourcecodepro/v7/leqv3v-yTsJNC7nFznSMqeiMeWyi5E_-XkTgB5psiDg.ttf",
        700: "http://fonts.gstatic.com/s/sourcecodepro/v7/leqv3v-yTsJNC7nFznSMqfgXsetDviZcdR5OzC1KPcw.ttf",
        900: "http://fonts.gstatic.com/s/sourcecodepro/v7/leqv3v-yTsJNC7nFznSMqRA_awHl7mXRjE_LQVochcU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Source Sans Pro",
      category: "sans-serif",
      variants: [
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "900",
        "900italic",
      ],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v11",
      lastModified: "2017-10-11",
      files: {
        200: "http://fonts.gstatic.com/s/sourcesanspro/v11/toadOcfmlt9b38dHJxOBGKXvKVW_haheDNrHjziJZVk.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/sourcesanspro/v11/fpTVHK8qsXbIeTHTrnQH6OptKU7UIBg2hLM7eMTU8bI.ttf",
        300: "http://fonts.gstatic.com/s/sourcesanspro/v11/toadOcfmlt9b38dHJxOBGFP7R5lD_au4SZC6Ks_vyWs.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/sourcesanspro/v11/fpTVHK8qsXbIeTHTrnQH6DUpNKoQAsDux-Todp8f29w.ttf",
        regular:
          "http://fonts.gstatic.com/s/sourcesanspro/v11/ODelI1aHBYDBqgeIAH2zlNRl0pGnog23EMYRrBmUzJQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/sourcesanspro/v11/M2Jd71oPJhLKp0zdtTvoMwRX4TIfMQQEXLu74GftruE.ttf",
        600: "http://fonts.gstatic.com/s/sourcesanspro/v11/toadOcfmlt9b38dHJxOBGOiMeWyi5E_-XkTgB5psiDg.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/sourcesanspro/v11/fpTVHK8qsXbIeTHTrnQH6Pp6lGoTTgjlW0sC4r900Co.ttf",
        700: "http://fonts.gstatic.com/s/sourcesanspro/v11/toadOcfmlt9b38dHJxOBGPgXsetDviZcdR5OzC1KPcw.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/sourcesanspro/v11/fpTVHK8qsXbIeTHTrnQH6LVT4locI09aamSzFGQlDMY.ttf",
        900: "http://fonts.gstatic.com/s/sourcesanspro/v11/toadOcfmlt9b38dHJxOBGBA_awHl7mXRjE_LQVochcU.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/sourcesanspro/v11/fpTVHK8qsXbIeTHTrnQH6A0NcF6HPGWR298uWIdxWv0.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Source Serif Pro",
      category: "serif",
      variants: ["regular", "600", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sourceserifpro/v5/CeUM4np2c42DV49nanp55YGL0S0YDpKs5GpLtZIQ0m4.ttf",
        600: "http://fonts.gstatic.com/s/sourceserifpro/v5/yd5lDMt8Sva2PE17yiLarGi4cQnvCGV11m1KlXh97aQ.ttf",
        700: "http://fonts.gstatic.com/s/sourceserifpro/v5/yd5lDMt8Sva2PE17yiLarEkpYHRvxGNSCrR82n_RDNk.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Space Mono",
      category: "monospace",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/spacemono/v2/B_LOPq3uMVBqC_kmqwURBfesZW2xOQ-xsNqO47m55DA.ttf",
        italic:
          "http://fonts.gstatic.com/s/spacemono/v2/7xgIgvUEl9Gvhtf7tXsRzC3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/spacemono/v2/vdpMRWfyjfCvDYTz00NEPAJKKGfqHaYFsRG-T3ceEVo.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/spacemono/v2/y2NWQDXe2-qPj6a6rWkLc0D2ttfZwueP-QU272T9-k4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Special Elite",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/specialelite/v8/9-wW4zu3WNoD5Fjka35Jm4jjx0o0jr6fNXxPgYh_a8Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Spectral",
      category: "serif",
      variants: [
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
      ],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
      version: "v4",
      lastModified: "2017-11-21",
      files: {
        200: "http://fonts.gstatic.com/s/spectral/v4/RPsjutNSGdCMO0uTaGNKAaCWcynf_cDxXwCLxiixG1c.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/spectral/v4/iTACFYcWCBGY-0cRjdYs3meudeTO44zf-ht3k-KNzwg.ttf",
        300: "http://fonts.gstatic.com/s/spectral/v4/EUVu_t3TbuiAmr-6bAqTvaCWcynf_cDxXwCLxiixG1c.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/spectral/v4/gXmD0bm_WQVxhEdjIN6xlEeOrDcLawS7-ssYqLr2Xp4.ttf",
        regular:
          "http://fonts.gstatic.com/s/spectral/v4/iBj67vddkZHOY5CJLE9SnA.ttf",
        italic:
          "http://fonts.gstatic.com/s/spectral/v4/lQA62MkEULvXDckLFYyk-vesZW2xOQ-xsNqO47m55DA.ttf",
        500: "http://fonts.gstatic.com/s/spectral/v4/KuRhuOjLr-dCVlaHBMOF96CWcynf_cDxXwCLxiixG1c.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/spectral/v4/hUloM7YPsU02LWYFA7w1x5p-63r6doWhTEbsfBIRJ7A.ttf",
        600: "http://fonts.gstatic.com/s/spectral/v4/OSDAbiOpLs0hkOIFx2oUZKCWcynf_cDxXwCLxiixG1c.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/spectral/v4/c6okfJABbOc8QqRI28ISV_pTEJqju4Hz1txDWij77d4.ttf",
        700: "http://fonts.gstatic.com/s/spectral/v4/g1QizOcRY_Apk-QDq3rhOKCWcynf_cDxXwCLxiixG1c.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/spectral/v4/v9WvdY1ll-vjpGHSRxsAIQJKKGfqHaYFsRG-T3ceEVo.ttf",
        800: "http://fonts.gstatic.com/s/spectral/v4/qQdpRyS_X5oC54LeW0MlmKCWcynf_cDxXwCLxiixG1c.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/spectral/v4/wYroR9dlOe2UFhp_3HJ9qqk3bhPBSBJ0bSJQ6acL-0g.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Spectral SC",
      category: "serif",
      variants: [
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
      ],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
      version: "v2",
      lastModified: "2017-11-07",
      files: {
        200: "http://fonts.gstatic.com/s/spectralsc/v2/J7mO0YbtyrIkp56FY15FDUnzyIngrzGjGh22wPb6cGM.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/spectralsc/v2/qF3tz9kiLvioTBEXL-lD1E2YN_dW5g9CXH6iztHQiR4.ttf",
        300: "http://fonts.gstatic.com/s/spectralsc/v2/J7mO0YbtyrIkp56FY15FDS9-WlPSxbfiI49GsXo3q0g.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/spectralsc/v2/qF3tz9kiLvioTBEXL-lD1Go9eWDfYYxG3A176Zl7aIg.ttf",
        regular:
          "http://fonts.gstatic.com/s/spectralsc/v2/a0Q_ia82PHVBRtfk7cZ0qaCWcynf_cDxXwCLxiixG1c.ttf",
        italic:
          "http://fonts.gstatic.com/s/spectralsc/v2/lgveV3UZmRqBIUMFUZ9jEUeOrDcLawS7-ssYqLr2Xp4.ttf",
        500: "http://fonts.gstatic.com/s/spectralsc/v2/J7mO0YbtyrIkp56FY15FDcCNfqCYlB_eIx7H1TVXe60.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/spectralsc/v2/qF3tz9kiLvioTBEXL-lD1GnWRcJAYo5PSCx8UfGMHCI.ttf",
        600: "http://fonts.gstatic.com/s/spectralsc/v2/J7mO0YbtyrIkp56FY15FDZZ7xm-Bj30Bj2KNdXDzSZg.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/spectralsc/v2/qF3tz9kiLvioTBEXL-lD1Je6We3S5L6hKLscKpOkmlo.ttf",
        700: "http://fonts.gstatic.com/s/spectralsc/v2/J7mO0YbtyrIkp56FY15FDXe1Pd76Vl7zRpE7NLJQ7XU.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/spectralsc/v2/qF3tz9kiLvioTBEXL-lD1M_zJjSACmk0BRPxQqhnNLU.ttf",
        800: "http://fonts.gstatic.com/s/spectralsc/v2/J7mO0YbtyrIkp56FY15FDQ89PwPrYLaRFJ-HNCU9NbA.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/spectralsc/v2/qF3tz9kiLvioTBEXL-lD1Cad_7rtf4IdDfsLVg-2OV4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Spicy Rice",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/spicyrice/v6/WGCtz7cLoggXARPi9OGD6_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Spinnaker",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/spinnaker/v9/MQdIXivKITpjROUdiN6Jgg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Spirax",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/spirax/v6/IOKqhk-Ccl7y31yDsePPkw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Squada One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/squadaone/v6/3tzGuaJdD65cZVgfQzN8uvesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sree Krushnadevaraya",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "telugu"],
      version: "v5",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sreekrushnadevaraya/v5/CdsXmnHyEqVl1ahzOh5qnzjDZVem5Eb4d0dXjXa0F_Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sriracha",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "thai", "vietnamese"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sriracha/v2/l-TXHmKwoHm6vtjy4oUz8Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Stalemate",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/stalemate/v5/wQLCnG0qB6mOu2Wit2dt_w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Stalinist One",
      category: "display",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext"],
      version: "v10",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/stalinistone/v10/MQpS-WezM9W4Dd7D3B7I-UT7eZ8.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Stardos Stencil",
      category: "display",
      variants: ["regular", "700"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/stardosstencil/v7/ygEOyTW9a6u4fi4OXEZeTFf2eT4jUldwg_9fgfY_tHc.ttf",
        700: "http://fonts.gstatic.com/s/stardosstencil/v7/h4ExtgvoXhPtv9Ieqd-XC81wDCbBgmIo8UyjIhmkeSM.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Stint Ultra Condensed",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/stintultracondensed/v6/8DqLK6-YSClFZt3u3EgOUYelbRYnLTTQA1Z5cVLnsI4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Stint Ultra Expanded",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/stintultraexpanded/v5/FeigX-wDDgHMCKuhekhedQ7dxr0N5HY0cZKknTIL6n4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Stoke",
      category: "serif",
      variants: ["300", "regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/stoke/v7/Sell9475FOS8jUqQsfFsUQ.ttf",
        regular:
          "http://fonts.gstatic.com/s/stoke/v7/A7qJNoqOm2d6o1E6e0yUFg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Strait",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/strait/v5/m4W73ViNmProETY2ybc-Bg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sue Ellen Francisco",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sueellenfrancisco/v8/TwHX4vSxMUnJUdEz1JIgrhzazJzPVbGl8jnf1tisRz4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Suez One",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "hebrew", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/suezone/v2/xulpHtKbz3V8hoSLE2uKDw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sumana",
      category: "serif",
      variants: ["regular", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sumana/v2/wgdl__wAK7pzliiWs0Nlog.ttf",
        700: "http://fonts.gstatic.com/s/sumana/v2/8AcM-KAproitONSBBHj3sQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sunshiney",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sunshiney/v8/kaWOb4pGbwNijM7CkxK1sQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Supermercado One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/supermercadoone/v7/kMGPVTNFiFEp1U274uBMb4mm5hmSKNFf3C5YoMa-lrM.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Sura",
      category: "serif",
      variants: ["regular", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v2",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/sura/v2/jznKrhTH5NezYxb0-Q5zzA.ttf",
        700: "http://fonts.gstatic.com/s/sura/v2/Z5bXQaFGmoWicN1WlcncxA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Suranna",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "telugu"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/suranna/v5/PYmfr6TQeTqZ-r8HnPM-kA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Suravaram",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "telugu"],
      version: "v4",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/suravaram/v4/G4dPee4pel_w2HqzavW4MA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Suwannaphum",
      category: "display",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v11",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/suwannaphum/v11/1jIPOyXied3T79GCnSlCN6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Swanky and Moo Moo",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/swankyandmoomoo/v7/orVNZ9kDeE3lWp3U3YELu9DVLKqNC3_XMNHhr8S94FU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Syncopate",
      category: "sans-serif",
      variants: ["regular", "700"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/syncopate/v9/RQVwO52fAH6MI764EcaYtw.ttf",
        700: "http://fonts.gstatic.com/s/syncopate/v9/S5z8ixiOoC4WJ1im6jAlYC3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Tangerine",
      category: "handwriting",
      variants: ["regular", "700"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/tangerine/v9/DTPeM3IROhnkz7aYG2a9sA.ttf",
        700: "http://fonts.gstatic.com/s/tangerine/v9/UkFsr-RwJB_d2l9fIWsx3i3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Taprom",
      category: "display",
      variants: ["regular"],
      subsets: ["khmer"],
      version: "v9",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/taprom/v9/-KByU3BaUsyIvQs79qFObg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Tauri",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/tauri/v5/XIWeYJDXNqiVNej0zEqtGg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Taviraj",
      category: "serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["latin", "latin-ext", "thai", "vietnamese"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/taviraj/v3/7iDtujKEc7hwcT6D0zLx-A.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/taviraj/v3/ai0UdHXB1gi5etfpU0CZ6aCWcynf_cDxXwCLxiixG1c.ttf",
        200: "http://fonts.gstatic.com/s/taviraj/v3/fn3qCO_sC_zLuf2hqWE37fesZW2xOQ-xsNqO47m55DA.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/taviraj/v3/eDMMTK5GhTdvvz3R-ZWvay3USBnSvpkopQaUR-2r7iU.ttf",
        300: "http://fonts.gstatic.com/s/taviraj/v3/1EIpbtG_cs5haG6Ba9wX8vesZW2xOQ-xsNqO47m55DA.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/taviraj/v3/IEBfc1xGgsBbdCeXKNAtfS3USBnSvpkopQaUR-2r7iU.ttf",
        regular:
          "http://fonts.gstatic.com/s/taviraj/v3/AH1eoWagKJhbVx4Poc3M1A.ttf",
        italic:
          "http://fonts.gstatic.com/s/taviraj/v3/hAS5RxygdSnG4626KdkXuQ.ttf",
        500: "http://fonts.gstatic.com/s/taviraj/v3/s8BuqYm5ebG2N1R4JkTp_fesZW2xOQ-xsNqO47m55DA.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/taviraj/v3/319qfe3yzAi9RNFu-dI9zy3USBnSvpkopQaUR-2r7iU.ttf",
        600: "http://fonts.gstatic.com/s/taviraj/v3/KscmiA6HGz7nCcHhaddQH_esZW2xOQ-xsNqO47m55DA.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/taviraj/v3/ofRN6EMiboGiM2Ga3cG_yy3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/taviraj/v3/TY91892tTFNYCeCXjQ1AEPesZW2xOQ-xsNqO47m55DA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/taviraj/v3/4Yzb6i1xtMRZn9oAQ484nS3USBnSvpkopQaUR-2r7iU.ttf",
        800: "http://fonts.gstatic.com/s/taviraj/v3/oGWJbiDGcxlInLLnrLxTDvesZW2xOQ-xsNqO47m55DA.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/taviraj/v3/MPtY5Qs3hwV4f0LUH-vVmy3USBnSvpkopQaUR-2r7iU.ttf",
        900: "http://fonts.gstatic.com/s/taviraj/v3/RfIEodnN0NYWUdZHol5fdPesZW2xOQ-xsNqO47m55DA.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/taviraj/v3/aDM2JaXSd_qo0nqKiBAq5C3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Teko",
      category: "sans-serif",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/teko/v7/OobFGE9eo24rcBpN6zXDaQ.ttf",
        regular:
          "http://fonts.gstatic.com/s/teko/v7/UtekqODEqZXSN2L-njejpA.ttf",
        500: "http://fonts.gstatic.com/s/teko/v7/FQ0duU7gWM4cSaImOfAjBA.ttf",
        600: "http://fonts.gstatic.com/s/teko/v7/QDx_i8H-TZ1IK1JEVrqwEQ.ttf",
        700: "http://fonts.gstatic.com/s/teko/v7/xKfTxe_SWpH4xU75vmvylA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Telex",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/telex/v6/24-3xP9ywYeHOcFU3iGk8A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Tenali Ramakrishna",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "telugu"],
      version: "v4",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/tenaliramakrishna/v4/M0nTmDqv2M7AGoGh-c946BZak5pSBHqWX6uyVMiMFoA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Tenor Sans",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/tenorsans/v8/dUBulmjNJJInvK5vL7O9yfesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Text Me One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/textmeone/v5/9em_3ckd_P5PQkP4aDyDLqCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "The Girl Next Door",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/thegirlnextdoor/v8/cWRA4JVGeEcHGcPl5hmX7kzo0nFFoM60ux_D9BUymX4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Tienne",
      category: "serif",
      variants: ["regular", "700", "900"],
      subsets: ["latin"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/tienne/v10/-IIfDl701C0z7-fy2kmGvA.ttf",
        700: "http://fonts.gstatic.com/s/tienne/v10/JvoCDOlyOSEyYGRwCyfs3g.ttf",
        900: "http://fonts.gstatic.com/s/tienne/v10/FBano5T521OWexj2iRYLMw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Tillana",
      category: "handwriting",
      variants: ["regular", "500", "600", "700", "800"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/tillana/v3/zN0D-jDPsr1HzU3VRFLY5g.ttf",
        500: "http://fonts.gstatic.com/s/tillana/v3/gqdUngSIcY9tSla5eCZky_esZW2xOQ-xsNqO47m55DA.ttf",
        600: "http://fonts.gstatic.com/s/tillana/v3/fqon6-r15hy8M1cyiYfQBvesZW2xOQ-xsNqO47m55DA.ttf",
        700: "http://fonts.gstatic.com/s/tillana/v3/jGARMTxLrMerzTCpGBpMffesZW2xOQ-xsNqO47m55DA.ttf",
        800: "http://fonts.gstatic.com/s/tillana/v3/pmTtNH_Ibktj5Cyc1XrP6vesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Timmana",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "telugu"],
      version: "v2",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/timmana/v2/T25SicsJUJkc2s2sbBsDnA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Tinos",
      category: "serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "hebrew",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v11",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/tinos/v11/EqpUbkVmutfwZ0PjpoGwCg.ttf",
        italic:
          "http://fonts.gstatic.com/s/tinos/v11/slfyzlasCr9vTsaP4lUh9A.ttf",
        700: "http://fonts.gstatic.com/s/tinos/v11/vHXfhX8jZuQruowfon93yQ.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/tinos/v11/M6kfzvDMM0CdxdraoFpG6vesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Titan One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/titanone/v5/FbvpRvzfV_oipS0De3iAZg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Titillium Web",
      category: "sans-serif",
      variants: [
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "900",
      ],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-11",
      files: {
        200: "http://fonts.gstatic.com/s/titilliumweb/v6/anMUvcNT0H1YN4FII8wprzOdCrLccoxq42eaxM802O0.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/titilliumweb/v6/RZunN20OBmkvrU7sA4GPPj4N98U-66ThNJvtgddRfBE.ttf",
        300: "http://fonts.gstatic.com/s/titilliumweb/v6/anMUvcNT0H1YN4FII8wpr9ZAkYT8DuUZELiKLwMGWAo.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/titilliumweb/v6/RZunN20OBmkvrU7sA4GPPrfzCkqg7ORZlRf2cc4mXu8.ttf",
        regular:
          "http://fonts.gstatic.com/s/titilliumweb/v6/7XUFZ5tgS-tD6QamInJTcTyagQBwYgYywpS70xNq8SQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/titilliumweb/v6/r9OmwyQxrgzUAhaLET_KO-ixohbIP6lHkU-1Mgq95cY.ttf",
        600: "http://fonts.gstatic.com/s/titilliumweb/v6/anMUvcNT0H1YN4FII8wpr28K9dEd5Ue-HTQrlA7E2xQ.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/titilliumweb/v6/RZunN20OBmkvrU7sA4GPPgOhzTSndyK8UWja2yJjKLc.ttf",
        700: "http://fonts.gstatic.com/s/titilliumweb/v6/anMUvcNT0H1YN4FII8wpr2-6tpSbB9YhmWtmd1_gi_U.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/titilliumweb/v6/RZunN20OBmkvrU7sA4GPPio3LEw-4MM8Ao2j9wPOfpw.ttf",
        900: "http://fonts.gstatic.com/s/titilliumweb/v6/anMUvcNT0H1YN4FII8wpr7L0GmZLri-m-nfoo0Vul4Y.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Trade Winds",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/tradewinds/v6/sDOCVgAxw6PEUi2xdMsoDaCWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Trirong",
      category: "serif",
      variants: [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic",
      ],
      subsets: ["latin", "latin-ext", "thai", "vietnamese"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/trirong/v3/A4AP1moxqvtadq5CW3L17A.ttf",
        "100italic":
          "http://fonts.gstatic.com/s/trirong/v3/ke-m75CXBPHlqwRHmCTBi6CWcynf_cDxXwCLxiixG1c.ttf",
        200: "http://fonts.gstatic.com/s/trirong/v3/QD8N5qk-agpAEYCSSWullPesZW2xOQ-xsNqO47m55DA.ttf",
        "200italic":
          "http://fonts.gstatic.com/s/trirong/v3/TLnptEEWKdIVHKJYBO592y3USBnSvpkopQaUR-2r7iU.ttf",
        300: "http://fonts.gstatic.com/s/trirong/v3/mfCfGz4GqprWJZ47PUMDGfesZW2xOQ-xsNqO47m55DA.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/trirong/v3/RnkK09k5OfEHFxd_smcYuC3USBnSvpkopQaUR-2r7iU.ttf",
        regular:
          "http://fonts.gstatic.com/s/trirong/v3/lYu4kez-Enlvh2X-itx6CA.ttf",
        italic:
          "http://fonts.gstatic.com/s/trirong/v3/kV0MzmWPKkglEtJf--dQhQ.ttf",
        500: "http://fonts.gstatic.com/s/trirong/v3/6CsQ6UR1e8rURaEPxqnGBvesZW2xOQ-xsNqO47m55DA.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/trirong/v3/I7H5Vf-5oH45BHkyxaUodS3USBnSvpkopQaUR-2r7iU.ttf",
        600: "http://fonts.gstatic.com/s/trirong/v3/1FjmLIhPhB6Yc7RWqO27mfesZW2xOQ-xsNqO47m55DA.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/trirong/v3/BXLhSV51vCWUiACSqyWe6i3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/trirong/v3/ab8hG5CTSzMAobTnPgcDP_esZW2xOQ-xsNqO47m55DA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/trirong/v3/CEBv6IoZawJuRHdATx4LQi3USBnSvpkopQaUR-2r7iU.ttf",
        800: "http://fonts.gstatic.com/s/trirong/v3/UBRQXGJvi5EHcyI5wwZew_esZW2xOQ-xsNqO47m55DA.ttf",
        "800italic":
          "http://fonts.gstatic.com/s/trirong/v3/lGUgSzOvjUqrsrJfnROivC3USBnSvpkopQaUR-2r7iU.ttf",
        900: "http://fonts.gstatic.com/s/trirong/v3/Lam1ewMdiP3O-bVYT-W6t_esZW2xOQ-xsNqO47m55DA.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/trirong/v3/EtuLHyx5DS9oX5NoKhYlkC3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Trocchi",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/trocchi/v6/uldNPaKrUGVeGCVsmacLwA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Trochut",
      category: "display",
      variants: ["regular", "italic", "700"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/trochut/v5/6Y65B0x-2JsnYt16OH5omw.ttf",
        italic:
          "http://fonts.gstatic.com/s/trochut/v5/pczUwr4ZFvC79TgNO5cZng.ttf",
        700: "http://fonts.gstatic.com/s/trochut/v5/lWqNOv6ISR8ehNzGLFLnJ_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Trykker",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/trykker/v6/YiVrVJpBFN7I1l_CWk6yYQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Tulpen One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/tulpenone/v7/lwcTfVIEVxpZLZlWzR5baPesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ubuntu",
      category: "sans-serif",
      variants: [
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "700",
        "700italic",
      ],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "cyrillic-ext",
      ],
      version: "v11",
      lastModified: "2017-10-11",
      files: {
        300: "http://fonts.gstatic.com/s/ubuntu/v11/4iCv6KVjbNBYlgoC1CzTtw.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/ubuntu/v11/4iCp6KVjbNBYlgoKejZftWyI.ttf",
        regular: "http://fonts.gstatic.com/s/ubuntu/v11/4iCs6KVjbNBYlgo6eA.ttf",
        italic:
          "http://fonts.gstatic.com/s/ubuntu/v11/4iCu6KVjbNBYlgoKeg7z.ttf",
        500: "http://fonts.gstatic.com/s/ubuntu/v11/4iCv6KVjbNBYlgoCjC3Ttw.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/ubuntu/v11/4iCp6KVjbNBYlgoKejYHtGyI.ttf",
        700: "http://fonts.gstatic.com/s/ubuntu/v11/4iCv6KVjbNBYlgoCxCvTtw.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/ubuntu/v11/4iCp6KVjbNBYlgoKejZPsmyI.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ubuntu Condensed",
      category: "sans-serif",
      variants: ["regular"],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "cyrillic-ext",
      ],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ubuntucondensed/v8/DBCt-NXN57MTAFjitYxdrKDbm6fPDOZJsR8PmdG62gY.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ubuntu Mono",
      category: "monospace",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: [
        "cyrillic",
        "latin",
        "greek-ext",
        "greek",
        "latin-ext",
        "cyrillic-ext",
      ],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ubuntumono/v7/EgeuS9OtEmA0y_JRo03MQaCWcynf_cDxXwCLxiixG1c.ttf",
        italic:
          "http://fonts.gstatic.com/s/ubuntumono/v7/KAKuHXAHZOeECOWAHsRKA0eOrDcLawS7-ssYqLr2Xp4.ttf",
        700: "http://fonts.gstatic.com/s/ubuntumono/v7/ceqTZGKHipo8pJj4molytne1Pd76Vl7zRpE7NLJQ7XU.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/ubuntumono/v7/n_d8tv_JOIiYyMXR4eaV9c_zJjSACmk0BRPxQqhnNLU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Ultra",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/ultra/v10/OW8uXkOstRADuhEmGOFQLA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Uncial Antiqua",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/uncialantiqua/v5/F-leefDiFwQXsyd6eaSllqrFJ4O13IHVxZbM6yoslpo.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Underdog",
      category: "display",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/underdog/v6/gBv9yjez_-5PnTprHWq0ig.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Unica One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/unicaone/v5/KbYKlhWMDpatWViqDkNQgA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "UnifrakturCook",
      category: "display",
      variants: ["700"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        700: "http://fonts.gstatic.com/s/unifrakturcook/v9/ASwh69ykD8iaoYijVEU6RrWZkcsCTHKV51zmcUsafQ0.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "UnifrakturMaguntia",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/unifrakturmaguntia/v8/7KWy3ymCVR_xfAvvcIXm3-kdNg30GQauG_DE-tMYtWk.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Unkempt",
      category: "display",
      variants: ["regular", "700"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/unkempt/v9/NLLBeNSspr0RGs71R5LHWA.ttf",
        700: "http://fonts.gstatic.com/s/unkempt/v9/V7H-GCl9bgwGwqFqTTgDHvesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Unlock",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/unlock/v7/rXEQzK7uIAlhoyoAEiMy1w.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Unna",
      category: "serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin", "latin-ext"],
      version: "v10",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/unna/v10/UAS0AM7AmbdCNY_80xyAZQ.ttf",
        italic:
          "http://fonts.gstatic.com/s/unna/v10/CB25jfOme9BL61pT4h1_0A.ttf",
        700: "http://fonts.gstatic.com/s/unna/v10/V-r3KRrJqBWlu97fCUB8Nw.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/unna/v10/H7rJH2hD4wVI9bOhx98O8A.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "VT323",
      category: "monospace",
      variants: ["regular"],
      subsets: ["latin", "latin-ext", "vietnamese"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/vt323/v9/ITU2YQfM073o1iYK3nSOmQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Vampiro One",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/vampiroone/v8/OVDs4gY4WpS5u3Qd1gXRW6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Varela",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/varela/v8/ON7qs0cKUUixhhDFXlZUjw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Varela Round",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "hebrew", "latin-ext", "vietnamese"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/varelaround/v9/APH4jr0uSos5wiut5cpjri3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Vast Shadow",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/vastshadow/v7/io4hqKX3ibiqQQjYfW0-h6CWcynf_cDxXwCLxiixG1c.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Vesper Libre",
      category: "serif",
      variants: ["regular", "500", "700", "900"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/vesperlibre/v9/Cg-TeZFsqV8BaOcoVwzu2C3USBnSvpkopQaUR-2r7iU.ttf",
        500: "http://fonts.gstatic.com/s/vesperlibre/v9/0liLgNkygqH6EOtsVjZDsZMQuUSAwdHsY8ov_6tk1oA.ttf",
        700: "http://fonts.gstatic.com/s/vesperlibre/v9/0liLgNkygqH6EOtsVjZDsUD2ttfZwueP-QU272T9-k4.ttf",
        900: "http://fonts.gstatic.com/s/vesperlibre/v9/0liLgNkygqH6EOtsVjZDsaObDOjC3UL77puoeHsE3fw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Vibur",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/vibur/v8/xB9aKsUbJo68XP0bAg2iLw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Vidaloka",
      category: "serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/vidaloka/v9/C6Nul0ogKUWkx356rrt9RA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Viga",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/viga/v6/uD87gDbhS7frHLX4uL6agg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Voces",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/voces/v7/QoBH6g6yKgNIgvL8A2aE2Q.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Volkhov",
      category: "serif",
      variants: ["regular", "italic", "700", "700italic"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/volkhov/v9/MDIZAofe1T_J3un5Kgo8zg.ttf",
        italic:
          "http://fonts.gstatic.com/s/volkhov/v9/1rTjmztKEpbkKH06JwF8Yw.ttf",
        700: "http://fonts.gstatic.com/s/volkhov/v9/L8PbKS-kEoLHm7nP--NCzPesZW2xOQ-xsNqO47m55DA.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/volkhov/v9/W6oG0QDDjCgj0gmsHE520C3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Vollkorn",
      category: "serif",
      variants: [
        "regular",
        "italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "900",
        "900italic",
      ],
      subsets: [
        "cyrillic",
        "latin",
        "greek",
        "latin-ext",
        "vietnamese",
        "cyrillic-ext",
      ],
      version: "v8",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/vollkorn/v8/IiexqYAeh8uII223thYx3w.ttf",
        italic:
          "http://fonts.gstatic.com/s/vollkorn/v8/UuIzosgR1ovBhJFdwVp3fvesZW2xOQ-xsNqO47m55DA.ttf",
        600: "http://fonts.gstatic.com/s/vollkorn/v8/gWz-6Uqzc1g8XxDn5f2-pKCWcynf_cDxXwCLxiixG1c.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/vollkorn/v8/dU1kkg9Vvuo527vzySfgDPpTEJqju4Hz1txDWij77d4.ttf",
        700: "http://fonts.gstatic.com/s/vollkorn/v8/gOwQjJVGXlDOONC12hVoBqCWcynf_cDxXwCLxiixG1c.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/vollkorn/v8/KNiAlx6phRqXCwnZZG51JAJKKGfqHaYFsRG-T3ceEVo.ttf",
        900: "http://fonts.gstatic.com/s/vollkorn/v8/IBcUSEL3da6GXw0kfPwtqqCWcynf_cDxXwCLxiixG1c.ttf",
        "900italic":
          "http://fonts.gstatic.com/s/vollkorn/v8/5fOn_dOVwBIkZpOP3_1I750EAVxt0G0biEntp43Qt6E.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Vollkorn SC",
      category: "serif",
      variants: ["regular", "600", "700", "900"],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v1",
      lastModified: "2017-11-07",
      files: {
        regular:
          "http://fonts.gstatic.com/s/vollkornsc/v1/HMEVRTum_bgc4D5Z4_TG-KCWcynf_cDxXwCLxiixG1c.ttf",
        600: "http://fonts.gstatic.com/s/vollkornsc/v1/Z5Dv9CPxH7cf8GgVmzxuCJZ7xm-Bj30Bj2KNdXDzSZg.ttf",
        700: "http://fonts.gstatic.com/s/vollkornsc/v1/Z5Dv9CPxH7cf8GgVmzxuCHe1Pd76Vl7zRpE7NLJQ7XU.ttf",
        900: "http://fonts.gstatic.com/s/vollkornsc/v1/Z5Dv9CPxH7cf8GgVmzxuCCenaqEuufTBk9XMKnKmgDA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Voltaire",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/voltaire/v7/WvqBzaGEBbRV-hrahwO2cA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Waiting for the Sunrise",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/waitingforthesunrise/v8/eNfH7kLpF1PZWpsetF-ha9TChrNgrDiT3Zy6yGf3FnM.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Wallpoet",
      category: "display",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/wallpoet/v9/hmum4WuBN4A0Z_7367NDIg.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Walter Turncoat",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/walterturncoat/v8/sG9su5g4GXy1KP73cU3hvQplL2YwNeota48DxFlGDUo.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Warnes",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v7",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/warnes/v7/MXG7_Phj4YpzAXxKGItuBw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Wellfleet",
      category: "display",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/wellfleet/v5/J5tOx72iFRPgHYpbK9J4XQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Wendy One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      version: "v5",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/wendyone/v5/R8CJT2oDXdMk_ZtuHTxoxw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Wire One",
      category: "sans-serif",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/wireone/v8/sRLhaQOQpWnvXwIx0CycQw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Work Sans",
      category: "sans-serif",
      variants: [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      subsets: ["latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/worksans/v3/ZAhtNqLaAViKjGLajtuwWaCWcynf_cDxXwCLxiixG1c.ttf",
        200: "http://fonts.gstatic.com/s/worksans/v3/u_mYNr_qYP37m7vgvmIYZy3USBnSvpkopQaUR-2r7iU.ttf",
        300: "http://fonts.gstatic.com/s/worksans/v3/FD_Udbezj8EHXbdsqLUply3USBnSvpkopQaUR-2r7iU.ttf",
        regular:
          "http://fonts.gstatic.com/s/worksans/v3/zVvigUiMvx7JVEnrJgc-5Q.ttf",
        500: "http://fonts.gstatic.com/s/worksans/v3/Nbre-U_bp6Xktt8cpgwaJC3USBnSvpkopQaUR-2r7iU.ttf",
        600: "http://fonts.gstatic.com/s/worksans/v3/z9rX03Xuz9ZNHTMg1_ghGS3USBnSvpkopQaUR-2r7iU.ttf",
        700: "http://fonts.gstatic.com/s/worksans/v3/4udXuXg54JlPEP5iKO5AmS3USBnSvpkopQaUR-2r7iU.ttf",
        800: "http://fonts.gstatic.com/s/worksans/v3/IQh-ap2Uqs7kl1YINeeEGi3USBnSvpkopQaUR-2r7iU.ttf",
        900: "http://fonts.gstatic.com/s/worksans/v3/Hjn0acvjHfjY_vAK9Uc6gi3USBnSvpkopQaUR-2r7iU.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Yanone Kaffeesatz",
      category: "sans-serif",
      variants: ["200", "300", "regular", "700"],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
      version: "v9",
      lastModified: "2017-10-10",
      files: {
        200: "http://fonts.gstatic.com/s/yanonekaffeesatz/v9/We_iSDqttE3etzfdfhuPRbq92v6XxU4pSv06GI0NsGc.ttf",
        300: "http://fonts.gstatic.com/s/yanonekaffeesatz/v9/We_iSDqttE3etzfdfhuPRZlIwXPiNoNT_wxzJ2t3mTE.ttf",
        regular:
          "http://fonts.gstatic.com/s/yanonekaffeesatz/v9/YDAoLskQQ5MOAgvHUQCcLdXn3cHbFGWU4T2HrSN6JF4.ttf",
        700: "http://fonts.gstatic.com/s/yanonekaffeesatz/v9/We_iSDqttE3etzfdfhuPRf2R4S6PlKaGXWPfWpHpcl0.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Yantramanav",
      category: "sans-serif",
      variants: ["100", "300", "regular", "500", "700", "900"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        100: "http://fonts.gstatic.com/s/yantramanav/v3/Rs1I2PF4Z8GAb6qjgvr8wIAWxXGWZ3yJw6KhWS7MxOk.ttf",
        300: "http://fonts.gstatic.com/s/yantramanav/v3/HSfbC4Z8I8BZ00wiXeA5bC9-WlPSxbfiI49GsXo3q0g.ttf",
        regular:
          "http://fonts.gstatic.com/s/yantramanav/v3/FwdziO-qWAO8pZg8e376kaCWcynf_cDxXwCLxiixG1c.ttf",
        500: "http://fonts.gstatic.com/s/yantramanav/v3/HSfbC4Z8I8BZ00wiXeA5bMCNfqCYlB_eIx7H1TVXe60.ttf",
        700: "http://fonts.gstatic.com/s/yantramanav/v3/HSfbC4Z8I8BZ00wiXeA5bHe1Pd76Vl7zRpE7NLJQ7XU.ttf",
        900: "http://fonts.gstatic.com/s/yantramanav/v3/HSfbC4Z8I8BZ00wiXeA5bCenaqEuufTBk9XMKnKmgDA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Yatra One",
      category: "display",
      variants: ["regular"],
      subsets: ["devanagari", "latin", "latin-ext"],
      version: "v4",
      lastModified: "2017-11-21",
      files: {
        regular:
          "http://fonts.gstatic.com/s/yatraone/v4/ApKQzWF7_vG0Lt5TDqgUvw.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Yellowtail",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v8",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/yellowtail/v8/HLrU6lhCTjXfLZ7X60LcB_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Yeseva One",
      category: "display",
      variants: ["regular"],
      subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "cyrillic-ext"],
      version: "v12",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/yesevaone/v12/eenQQxvpzSA80JmisGcgX_esZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Yesteryear",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v6",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/yesteryear/v6/dv09hP_ZrdjVOfZQXKXuZvesZW2xOQ-xsNqO47m55DA.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Yrsa",
      category: "serif",
      variants: ["300", "regular", "500", "600", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-10",
      files: {
        300: "http://fonts.gstatic.com/s/yrsa/v3/YI0C1syzAYpkrPx27UnC2w.ttf",
        regular:
          "http://fonts.gstatic.com/s/yrsa/v3/JWX_dCK4_Jq-oqF7r9rFHg.ttf",
        500: "http://fonts.gstatic.com/s/yrsa/v3/rWuZmBLHIeKRbnfSvWCvYg.ttf",
        600: "http://fonts.gstatic.com/s/yrsa/v3/1413P-oEfrq-tBIdqnslDQ.ttf",
        700: "http://fonts.gstatic.com/s/yrsa/v3/iV49zaJV5wyo_4LgxE2yng.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Zeyada",
      category: "handwriting",
      variants: ["regular"],
      subsets: ["latin"],
      version: "v7",
      lastModified: "2017-10-10",
      files: {
        regular:
          "http://fonts.gstatic.com/s/zeyada/v7/hmonmGYYFwqTZQfG2nRswQ.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Zilla Slab",
      category: "serif",
      variants: [
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
      ],
      subsets: ["latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-11-21",
      files: {
        300: "http://fonts.gstatic.com/s/zillaslab/v3/MIkI-zFTb-IKu6GQ4qfBIUeOrDcLawS7-ssYqLr2Xp4.ttf",
        "300italic":
          "http://fonts.gstatic.com/s/zillaslab/v3/SlbCHfLtf3uBEqmR9ezZMqcQoVhARpoaILP7amxE_8g.ttf",
        regular:
          "http://fonts.gstatic.com/s/zillaslab/v3/GQa6C2kQZDjk1E7wBSIhnPesZW2xOQ-xsNqO47m55DA.ttf",
        italic:
          "http://fonts.gstatic.com/s/zillaslab/v3/0uwn9tpUNTyjFGXazfTluC3USBnSvpkopQaUR-2r7iU.ttf",
        500: "http://fonts.gstatic.com/s/zillaslab/v3/M-lMpg6F7WVOVam88MR7yJp-63r6doWhTEbsfBIRJ7A.ttf",
        "500italic":
          "http://fonts.gstatic.com/s/zillaslab/v3/SlbCHfLtf3uBEqmR9ezZMpMQuUSAwdHsY8ov_6tk1oA.ttf",
        600: "http://fonts.gstatic.com/s/zillaslab/v3/idTxEJxWLSyMdm2hH0_fO_pTEJqju4Hz1txDWij77d4.ttf",
        "600italic":
          "http://fonts.gstatic.com/s/zillaslab/v3/SlbCHfLtf3uBEqmR9ezZMmv8CylhIUtwUiYO7Z2wXbE.ttf",
        700: "http://fonts.gstatic.com/s/zillaslab/v3/5alS-fi1sAYG-KJydQxv8AJKKGfqHaYFsRG-T3ceEVo.ttf",
        "700italic":
          "http://fonts.gstatic.com/s/zillaslab/v3/SlbCHfLtf3uBEqmR9ezZMkD2ttfZwueP-QU272T9-k4.ttf",
      },
    },
    {
      kind: "webfonts#webfont",
      family: "Zilla Slab Highlight",
      category: "display",
      variants: ["regular", "700"],
      subsets: ["latin", "latin-ext"],
      version: "v3",
      lastModified: "2017-10-09",
      files: {
        regular:
          "http://fonts.gstatic.com/s/zillaslabhighlight/v3/A1oFQmFZMluFeVEQs3f1ZsRj1XVSCnpi3yrU572D-Ys.ttf",
        700: "http://fonts.gstatic.com/s/zillaslabhighlight/v3/4GC1z5cbR6tbZfervoVHHDJanj6ILIntqP8io1sy9nk.ttf",
      },
    },
  ],
};
!(function (a) {
  "undefined" == typeof a.fn.each2 &&
    a.fn.extend({
      each2: function (b) {
        for (
          var c = a([0]), d = -1, e = this.length;
          ++d < e && (c.context = c[0] = this[d]) && b.call(c[0], d, c) !== !1;

        );
        return this;
      },
    });
})(jQuery),
  (function (a, b) {
    "use strict";

    function c(a, b) {
      var c,
        d = 0,
        e = b.length;
      if ("undefined" == typeof a) return -1;
      if (a.constructor === String) {
        for (; e > d; d += 1) if (0 === a.localeCompare(b[d])) return d;
      } else
        for (; e > d; d += 1)
          if (((c = b[d]), c.constructor === String)) {
            if (0 === c.localeCompare(a)) return d;
          } else if (c === a) return d;
      return -1;
    }

    function d(a, c) {
      return a === c
        ? !0
        : a === b || c === b
        ? !1
        : null === a || null === c
        ? !1
        : a.constructor === String
        ? 0 === a.localeCompare(c)
        : c.constructor === String
        ? 0 === c.localeCompare(a)
        : !1;
    }

    function e(b, c) {
      var d, e, f;
      if (null === b || b.length < 1) return [];
      for (d = b.split(c), e = 0, f = d.length; f > e; e += 1)
        d[e] = a.trim(d[e]);
      return d;
    }

    function f(a) {
      return a.outerWidth() - a.width();
    }

    function g(c) {
      var d = "keyup-change-value";
      c.bind("keydown", function () {
        a.data(c, d) === b && a.data(c, d, c.val());
      }),
        c.bind("keyup", function () {
          var e = a.data(c, d);
          e !== b &&
            c.val() !== e &&
            (a.removeData(c, d), c.trigger("keyup-change"));
        });
    }

    function h(c) {
      c.bind("mousemove", function (c) {
        var d = a.data(document, "select2-lastpos");
        (d === b || d.x !== c.pageX || d.y !== c.pageY) &&
          a(c.target).trigger("mousemove-filtered", c);
      });
    }

    function i(a, c, d) {
      d = d || b;
      var e;
      return function () {
        var b = arguments;
        window.clearTimeout(e),
          (e = window.setTimeout(function () {
            c.apply(d, b);
          }, a));
      };
    }

    function j(a) {
      var b,
        c = !1;
      return function () {
        return c === !1 && ((b = a()), (c = !0)), b;
      };
    }

    function k(a, b) {
      var d = i(a, function (a) {
        b.trigger("scroll-debounced", a);
      });
      b.bind("scroll", function (a) {
        c(a.target, b.get()) >= 0 && d(a);
      });
    }

    function l(a) {
      a.preventDefault(), a.stopPropagation();
    }

    function m(b) {
      if (!B) {
        var c = b[0].currentStyle || window.getComputedStyle(b[0], null);
        (B = a("<div></div>").css({
          position: "absolute",
          left: "-10000px",
          top: "-10000px",
          display: "none",
          fontSize: c.fontSize,
          fontFamily: c.fontFamily,
          fontStyle: c.fontStyle,
          fontWeight: c.fontWeight,
          letterSpacing: c.letterSpacing,
          textTransform: c.textTransform,
          whiteSpace: "nowrap",
        })),
          a("body").append(B);
      }
      return B.text(b.val()), B.width();
    }

    function n(a, b, c) {
      var d = a.toUpperCase().indexOf(b.toUpperCase()),
        e = b.length;
      return 0 > d
        ? void c.push(a)
        : (c.push(a.substring(0, d)),
          c.push("<span class='select2-match'>"),
          c.push(a.substring(d, d + e)),
          c.push("</span>"),
          void c.push(a.substring(d + e, a.length)));
    }

    function o(b) {
      var c,
        d = 0,
        e = null,
        f = b.quietMillis || 100;
      return function (g) {
        window.clearTimeout(c),
          (c = window.setTimeout(function () {
            d += 1;
            var c = d,
              f = b.data,
              h = b.transport || a.ajax,
              i = b.traditional || !1,
              j = b.type || "GET";
            (f = f.call(this, g.term, g.page, g.context)),
              null !== e && e.abort(),
              (e = h.call(null, {
                url: b.url,
                dataType: b.dataType,
                data: f,
                type: j,
                traditional: i,
                success: function (a) {
                  if (!(d > c)) {
                    var e = b.results(a, g.page);
                    g.callback(e);
                  }
                },
              }));
          }, f));
      };
    }

    function p(b) {
      var c,
        d = b,
        e = function (a) {
          return "" + a.text;
        };
      return (
        a.isArray(d) ||
          ((e = d.text),
          a.isFunction(e) ||
            ((c = d.text),
            (e = function (a) {
              return a[c];
            })),
          (d = d.results)),
        function (b) {
          var c,
            f = b.term,
            g = {
              results: [],
            };
          return "" === f
            ? void b.callback({
                results: d,
              })
            : ((c = function (d, g) {
                var h, i;
                if (((d = d[0]), d.children)) {
                  h = {};
                  for (i in d) d.hasOwnProperty(i) && (h[i] = d[i]);
                  (h.children = []),
                    a(d.children).each2(function (a, b) {
                      c(b, h.children);
                    }),
                    h.children.length && g.push(h);
                } else b.matcher(f, e(d)) && g.push(d);
              }),
              a(d).each2(function (a, b) {
                c(b, g.results);
              }),
              void b.callback(g));
        }
      );
    }

    function q(c) {
      return a.isFunction(c)
        ? c
        : function (d) {
            var e = d.term,
              f = {
                results: [],
              };
            a(c).each(function () {
              var a = this.text !== b,
                c = a ? this.text : this;
              ("" === e || d.matcher(e, c)) &&
                f.results.push(
                  a
                    ? this
                    : {
                        id: this,
                        text: this,
                      }
                );
            }),
              d.callback(f);
          };
    }

    function r(b, c) {
      if (a.isFunction(b)) return !0;
      if (!b) return !1;
      throw new Error("formatterName must be a function or a falsy value");
    }

    function s(b) {
      return a.isFunction(b) ? b() : b;
    }

    function t(b) {
      var c = 0;
      return (
        a.each(b, function (a, b) {
          b.children ? (c += t(b.children)) : c++;
        }),
        c
      );
    }

    function u(a, c, e, f) {
      var g,
        h,
        i,
        j,
        k,
        l = a,
        m = !1;
      if (
        !f.createSearchChoice ||
        !f.tokenSeparators ||
        f.tokenSeparators.length < 1
      )
        return b;
      for (;;) {
        for (
          h = -1, i = 0, j = f.tokenSeparators.length;
          j > i && ((k = f.tokenSeparators[i]), (h = a.indexOf(k)), !(h >= 0));
          i++
        );
        if (0 > h) break;
        if (
          ((g = a.substring(0, h)),
          (a = a.substring(h + k.length)),
          g.length > 0 &&
            ((g = f.createSearchChoice(g, c)),
            g !== b && null !== g && f.id(g) !== b && null !== f.id(g)))
        ) {
          for (m = !1, i = 0, j = c.length; j > i; i++)
            if (d(f.id(g), f.id(c[i]))) {
              m = !0;
              break;
            }
          m || e(g);
        }
      }
      return 0 != l.localeCompare(a) ? a : void 0;
    }

    function v(b, c) {
      var d = function () {};
      return (
        (d.prototype = new b()),
        (d.prototype.constructor = d),
        (d.prototype.parent = b.prototype),
        (d.prototype = a.extend(d.prototype, c)),
        d
      );
    }
    if (window.Select2 === b) {
      var w, x, y, z, A, B;
      (w = {
        TAB: 9,
        ENTER: 13,
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        HOME: 36,
        END: 35,
        BACKSPACE: 8,
        DELETE: 46,
        isArrow: function (a) {
          switch ((a = a.which ? a.which : a)) {
            case w.LEFT:
            case w.RIGHT:
            case w.UP:
            case w.DOWN:
              return !0;
          }
          return !1;
        },
        isControl: function (a) {
          var b = a.which;
          switch (b) {
            case w.SHIFT:
            case w.CTRL:
            case w.ALT:
              return !0;
          }
          return a.metaKey ? !0 : !1;
        },
        isFunctionKey: function (a) {
          return (a = a.which ? a.which : a), a >= 112 && 123 >= a;
        },
      }),
        (A = (function () {
          var a = 1;
          return function () {
            return a++;
          };
        })()),
        a(document).delegate("body", "mousemove", function (b) {
          a.data(document, "select2-lastpos", {
            x: b.pageX,
            y: b.pageY,
          });
        }),
        a(document).ready(function () {
          a(document).delegate("body", "mousedown touchend", function (c) {
            var d,
              e = a(c.target).closest("div.select2-container").get(0);
            e
              ? a(document)
                  .find("div.select2-container-active")
                  .each(function () {
                    this !== e && a(this).data("select2").blur();
                  })
              : ((e = a(c.target).closest("div.select2-drop").get(0)),
                a(document)
                  .find("div.select2-drop-active")
                  .each(function () {
                    this !== e && a(this).data("select2").blur();
                  })),
              (e = a(c.target)),
              (d = e.attr("for")),
              "LABEL" === c.target.tagName &&
                d &&
                d.length > 0 &&
                ((e = a("#" + d)),
                (e = e.data("select2")),
                e !== b && (e.focus(), c.preventDefault()));
          });
        }),
        (x = v(Object, {
          bind: function (a) {
            var b = this;
            return function () {
              a.apply(b, arguments);
            };
          },
          init: function (c) {
            var d,
              e,
              f = ".select2-results";
            (this.opts = c = this.prepareOpts(c)),
              (this.id = c.id),
              c.element.data("select2") !== b &&
                null !== c.element.data("select2") &&
                this.destroy(),
              (this.enabled = !0),
              (this.container = this.createContainer()),
              (this.containerId =
                "s2id_" + (c.element.attr("id") || "autogen" + A())),
              (this.containerSelector =
                "#" +
                this.containerId.replace(
                  /([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,
                  "\\$1"
                )),
              this.container.attr("id", this.containerId),
              (this.body = j(function () {
                return c.element.closest("body");
              })),
              c.element.attr("class") !== b &&
                this.container.addClass(
                  c.element.attr("class").replace(/validate\[[\S ]+] ?/, "")
                ),
              this.container.css(s(c.containerCss)),
              this.container.addClass(s(c.containerCssClass)),
              this.opts.element
                .data("select2", this)
                .hide()
                .before(this.container),
              this.container.data("select2", this),
              (this.dropdown = this.container.find(".select2-drop")),
              this.dropdown.addClass(s(c.dropdownCssClass)),
              this.dropdown.data("select2", this),
              (this.results = d = this.container.find(f)),
              (this.search = e = this.container.find("input.select2-input")),
              e.attr("tabIndex", this.opts.element.attr("tabIndex")),
              (this.resultsPage = 0),
              (this.context = null),
              this.initContainer(),
              this.initContainerWidth(),
              h(this.results),
              this.dropdown.delegate(
                f,
                "mousemove-filtered",
                this.bind(this.highlightUnderEvent)
              ),
              k(80, this.results),
              this.dropdown.delegate(
                f,
                "scroll-debounced",
                this.bind(this.loadMoreIfNeeded)
              ),
              a.fn.mousewheel &&
                d.mousewheel(function (a, b, c, e) {
                  var f = d.scrollTop();
                  e > 0 && 0 >= f - e
                    ? (d.scrollTop(0), l(a))
                    : 0 > e &&
                      d.get(0).scrollHeight - d.scrollTop() + e <= d.height() &&
                      (d.scrollTop(d.get(0).scrollHeight - d.height()), l(a));
                }),
              g(e),
              e.bind("keyup-change", this.bind(this.updateResults)),
              e.bind("focus", function () {
                e.addClass("select2-focused"), " " === e.val() && e.val("");
              }),
              e.bind("blur", function () {
                e.removeClass("select2-focused");
              }),
              this.dropdown.delegate(
                f,
                "mouseup",
                this.bind(function (b) {
                  a(b.target).closest(
                    ".select2-result-selectable:not(.select2-disabled)"
                  ).length > 0
                    ? (this.highlightUnderEvent(b), this.selectHighlighted(b))
                    : this.focusSearch(),
                    l(b);
                })
              ),
              a.isFunction(this.opts.initSelection) &&
                (this.initSelection(), this.monitorSource()),
              (c.element.is(":disabled") ||
                c.element.is("[readonly='readonly']")) &&
                this.disable();
          },
          destroy: function () {
            var a = this.opts.element.data("select2");
            a !== b &&
              (a.container.remove(),
              a.dropdown.remove(),
              a.opts.element.removeData("select2").unbind(".select2").show());
          },
          prepareOpts: function (c) {
            var f, g, h, i;
            if (
              ((f = c.element),
              "select" === f.get(0).tagName.toLowerCase() &&
                (this.select = g = c.element),
              g &&
                a.each(
                  [
                    "id",
                    "multiple",
                    "ajax",
                    "query",
                    "createSearchChoice",
                    "initSelection",
                    "data",
                    "tags",
                  ],
                  function () {
                    if (this in c)
                      throw new Error(
                        "Option '" +
                          this +
                          "' is not allowed for Select2 when attached to a <select> element."
                      );
                  }
                ),
              (c = a.extend(
                {},
                {
                  populateResults: function (d, e, f) {
                    var g,
                      h = this.opts.id,
                      i = this;
                    (g = function (d, e, j) {
                      var k, l, m, n, o, p, q, r, s;
                      for (k = 0, l = d.length; l > k; k += 1)
                        (m = d[k]),
                          (n = h(m) !== b),
                          (o = m.children && m.children.length > 0),
                          (p = a("<li></li>")),
                          p.addClass("select2-results-dept-" + j),
                          p.addClass("select2-result"),
                          p.addClass(
                            n
                              ? "select2-result-selectable"
                              : "select2-result-unselectable"
                          ),
                          o && p.addClass("select2-result-with-children"),
                          p.attr("style", i.opts.formatResultCssClass(m)),
                          (q = a("<div></div>")),
                          q.addClass("select2-result-label"),
                          (s = c.formatResult(m, q, f)),
                          s !== b && q.html(i.opts.escapeMarkup(s)),
                          p.append(q),
                          o &&
                            ((r = a("<ul></ul>")),
                            r.addClass("select2-result-sub"),
                            g(m.children, r, j + 1),
                            p.append(r)),
                          p.data("select2-data", m),
                          e.append(p);
                    })(e, d, 0);
                  },
                },
                a.fn.select2.defaults,
                c
              )),
              "function" != typeof c.id &&
                ((h = c.id),
                (c.id = function (a) {
                  return a[h];
                })),
              g
                ? ((c.query = this.bind(function (c) {
                    var d,
                      e,
                      g,
                      h = {
                        results: [],
                        more: !1,
                      },
                      i = c.term;
                    (g = function (a, b) {
                      var d;
                      a.is("option")
                        ? c.matcher(i, a.text(), a) &&
                          b.push({
                            id: a.attr("value"),
                            text: a.text(),
                            element: a.get(),
                            css: a.attr("style"),
                          })
                        : a.is("optgroup") &&
                          ((d = {
                            text: a.attr("label"),
                            children: [],
                            element: a.get(),
                            css: a.attr("style"),
                          }),
                          a.children().each2(function (a, b) {
                            g(b, d.children);
                          }),
                          d.children.length > 0 && b.push(d));
                    }),
                      (d = f.children()),
                      this.getPlaceholder() !== b &&
                        d.length > 0 &&
                        ((e = d[0]), "" === a(e).text() && (d = d.not(e))),
                      d.each2(function (a, b) {
                        g(b, h.results);
                      }),
                      c.callback(h);
                  })),
                  (c.id = function (a) {
                    return a.id;
                  }),
                  (c.formatResultCssClass = function (a) {
                    return a.css;
                  }))
                : "query" in c ||
                  ("ajax" in c
                    ? ((i = c.element.data("ajax-url")),
                      i && i.length > 0 && (c.ajax.url = i),
                      (c.query = o(c.ajax)))
                    : "data" in c
                    ? (c.query = p(c.data))
                    : "tags" in c &&
                      ((c.query = q(c.tags)),
                      (c.createSearchChoice = function (a) {
                        return {
                          id: a,
                          text: a,
                        };
                      }),
                      (c.initSelection = function (b, f) {
                        var g = [];
                        a(e(b.val(), c.separator)).each(function () {
                          var b = this,
                            e = this,
                            f = c.tags;
                          a.isFunction(f) && (f = f()),
                            a(f).each(function () {
                              return d(this.id, b)
                                ? ((e = this.text), !1)
                                : void 0;
                            }),
                            g.push({
                              id: b,
                              text: e,
                            });
                        }),
                          f(g);
                      }))),
              "function" != typeof c.query)
            )
              throw (
                "query function not defined for Select2 " + c.element.attr("id")
              );
            return c;
          },
          monitorSource: function () {
            this.opts.element.bind(
              "change.select2",
              this.bind(function (a) {
                this.opts.element.data("select2-change-triggered") !== !0 &&
                  this.initSelection();
              })
            );
          },
          triggerChange: function (b) {
            (b = b || {}),
              (b = a.extend({}, b, {
                type: "change",
                val: this.val(),
              })),
              this.opts.element.data("select2-change-triggered", !0),
              this.opts.element.trigger(b),
              this.opts.element.data("select2-change-triggered", !1),
              this.opts.element.click(),
              this.opts.blurOnChange && this.opts.element.blur();
          },
          enable: function () {
            this.enabled ||
              ((this.enabled = !0),
              this.container.removeClass("select2-container-disabled"));
          },
          disable: function () {
            this.enabled &&
              (this.close(),
              (this.enabled = !1),
              this.container.addClass("select2-container-disabled"));
          },
          opened: function () {
            return this.container.hasClass("select2-dropdown-open");
          },
          positionDropdown: function () {
            var b,
              c,
              d,
              e = this.container.offset(),
              f = this.container.outerHeight(),
              g = this.container.outerWidth(),
              h = this.dropdown.outerHeight(),
              i = a(window).scrollTop() + document.documentElement.clientHeight,
              j = e.top + f,
              k = e.left,
              l = i >= j + h,
              m = e.top - h >= this.body().scrollTop(),
              n = this.dropdown.hasClass("select2-drop-above");
            "static" !== this.body().css("position") &&
              ((b = this.body().offset()), (j -= b.top), (k -= b.left)),
              n
                ? ((c = !0), !m && l && (c = !1))
                : ((c = !1), !l && m && (c = !0)),
              c
                ? ((j = e.top - h),
                  this.container.addClass("select2-drop-above"),
                  this.dropdown.addClass("select2-drop-above"))
                : (this.container.removeClass("select2-drop-above"),
                  this.dropdown.removeClass("select2-drop-above")),
              (d = a.extend(
                {
                  top: j,
                  left: k,
                  width: g,
                },
                s(this.opts.dropdownCss)
              )),
              this.dropdown.css(d);
          },
          shouldOpen: function () {
            var b;
            return this.opened()
              ? !1
              : ((b = a.Event("open")),
                this.opts.element.trigger(b),
                !b.isDefaultPrevented());
          },
          clearDropdownAlignmentPreference: function () {
            this.container.removeClass("select2-drop-above"),
              this.dropdown.removeClass("select2-drop-above");
          },
          open: function () {
            return this.shouldOpen()
              ? (window.setTimeout(this.bind(this.opening), 1), !0)
              : !1;
          },
          opening: function () {
            var b = this.containerId,
              c = this.containerSelector,
              d = "scroll." + b,
              e = "resize." + b;
            this.container.parents().each(function () {
              a(this).bind(d, function () {
                var b = a(c);
                0 == b.length && a(this).unbind(d);
              });
            }),
              a(window).bind(e, function () {
                var b = a(c);
                0 == b.length && a(window).unbind(e);
              }),
              this.clearDropdownAlignmentPreference(),
              " " === this.search.val() && this.search.val(""),
              this.container
                .addClass("select2-dropdown-open")
                .addClass("select2-container-active"),
              this.updateResults(!0),
              this.dropdown[0] !== this.body().children().last()[0] &&
                this.dropdown.detach().appendTo(this.body()),
              this.dropdown.show(),
              this.positionDropdown(),
              this.dropdown.addClass("select2-drop-active"),
              this.ensureHighlightVisible(),
              this.focusSearch();
          },
          close: function () {
            if (this.opened()) {
              var b = this;
              this.container.parents().each(function () {
                a(this).unbind("scroll." + b.containerId);
              }),
                a(window).unbind("resize." + this.containerId),
                this.clearDropdownAlignmentPreference(),
                this.dropdown.hide(),
                this.container
                  .removeClass("select2-dropdown-open")
                  .removeClass("select2-container-active"),
                this.results.empty(),
                this.clearSearch(),
                this.opts.element.trigger(a.Event("close"));
            }
          },
          clearSearch: function () {},
          ensureHighlightVisible: function () {
            var b,
              c,
              d,
              e,
              f,
              g,
              h,
              i = this.results;
            if (((c = this.highlight()), !(0 > c))) {
              if (0 == c) return void i.scrollTop(0);
              (b = i.find(".select2-result-selectable")),
                (d = a(b[c])),
                (e = d.offset().top + d.outerHeight()),
                c === b.length - 1 &&
                  ((h = i.find("li.select2-more-results")),
                  h.length > 0 && (e = h.offset().top + h.outerHeight())),
                (f = i.offset().top + i.outerHeight()),
                e > f && i.scrollTop(i.scrollTop() + (e - f)),
                (g = d.offset().top - i.offset().top),
                0 > g && i.scrollTop(i.scrollTop() + g);
            }
          },
          moveHighlight: function (b) {
            for (
              var c = this.results.find(".select2-result-selectable"),
                d = this.highlight();
              d > -1 && d < c.length;

            ) {
              d += b;
              var e = a(c[d]);
              if (
                e.hasClass("select2-result-selectable") &&
                !e.hasClass("select2-disabled")
              ) {
                this.highlight(d);
                break;
              }
            }
          },
          highlight: function (b) {
            var d = this.results
              .find(".select2-result-selectable")
              .not(".select2-disabled");
            if (0 === arguments.length)
              return c(d.filter(".select2-highlighted")[0], d.get());
            b >= d.length && (b = d.length - 1), 0 > b && (b = 0);
            for (
              var e = (d.length - b, 8), f = 8, g = b - e;
              b + f + 1 > g;
              g++
            )
              if (!(0 > g || g > d.length - 1)) {
                var h = a(d[g]).text();
                h.match(/^\d/)
                  ? a(d[g]).css("font-family", "")
                  : a(d[g]).css("font-family", h);
              }
            d.removeClass("select2-highlighted"),
              a(d[b]).addClass("select2-highlighted"),
              this.ensureHighlightVisible(),
              this.opts.element.trigger("highlight-change", a(d[b]).text());
          },
          countSelectableResults: function () {
            return this.results
              .find(".select2-result-selectable")
              .not(".select2-disabled").length;
          },
          highlightUnderEvent: function (b) {
            var c = a(b.target).closest(".select2-result-selectable");
            if (c.length > 0 && !c.is(".select2-highlighted")) {
              var d = this.results.find(".select2-result-selectable");
              this.highlight(d.index(c));
            } else
              0 == c.length &&
                this.results
                  .find(".select2-highlighted")
                  .removeClass("select2-highlighted");
          },
          loadMoreIfNeeded: function () {
            var a,
              b = this.results,
              c = b.find("li.select2-more-results"),
              d = this.resultsPage + 1,
              e = this,
              f = this.search.val(),
              g = this.context;
            0 !== c.length &&
              ((a = c.offset().top - b.offset().top - b.height()),
              0 >= a &&
                (c.addClass("select2-active"),
                this.opts.query({
                  term: f,
                  page: d,
                  context: g,
                  matcher: this.opts.matcher,
                  callback: this.bind(function (a) {
                    e.opened() &&
                      (e.opts.populateResults.call(this, b, a.results, {
                        term: f,
                        page: d,
                        context: g,
                      }),
                      a.more === !0
                        ? (c
                            .detach()
                            .appendTo(b)
                            .text(e.opts.formatLoadMore(d + 1)),
                          window.setTimeout(function () {
                            e.loadMoreIfNeeded();
                          }, 10))
                        : c.remove(),
                      e.positionDropdown(),
                      (e.resultsPage = d));
                  }),
                })));
          },
          tokenize: function () {},
          updateResults: function (c) {
            function e() {
              j.scrollTop(0),
                i.removeClass("select2-active"),
                l.positionDropdown();
            }

            function f(a) {
              j.html(l.opts.escapeMarkup(a)), e();
            }
            var g,
              h,
              i = this.search,
              j = this.results,
              k = this.opts,
              l = this;
            if (c === !0 || (this.showSearchInput !== !1 && this.opened())) {
              if (
                (i.addClass("select2-active"),
                k.maximumSelectionSize >= 1 &&
                  ((g = this.data()),
                  a.isArray(g) &&
                    g.length >= k.maximumSelectionSize &&
                    r(k.formatSelectionTooBig, "formatSelectionTooBig")))
              )
                return void f(
                  "<li class='select2-selection-limit'>" +
                    k.formatSelectionTooBig(k.maximumSelectionSize) +
                    "</li>"
                );
              if (
                i.val().length < k.minimumInputLength &&
                r(k.formatInputTooShort, "formatInputTooShort")
              )
                return void f(
                  "<li class='select2-no-results'>" +
                    k.formatInputTooShort(i.val(), k.minimumInputLength) +
                    "</li>"
                );
              f(
                "<li class='select2-searching'>" + k.formatSearching() + "</li>"
              ),
                (h = this.tokenize()),
                h != b && null != h && i.val(h),
                (this.resultsPage = 1),
                k.query({
                  term: i.val(),
                  page: this.resultsPage,
                  context: null,
                  matcher: k.matcher,
                  callback: this.bind(function (g) {
                    var h;
                    if (this.opened()) {
                      if (
                        ((this.context = g.context === b ? null : g.context),
                        this.opts.createSearchChoice &&
                          "" !== i.val() &&
                          ((h = this.opts.createSearchChoice.call(
                            null,
                            i.val(),
                            g.results
                          )),
                          h !== b &&
                            null !== h &&
                            l.id(h) !== b &&
                            null !== l.id(h) &&
                            0 ===
                              a(g.results).filter(function () {
                                return d(l.id(this), l.id(h));
                              }).length &&
                            g.results.unshift(h)),
                        0 === g.results.length &&
                          r(k.formatNoMatches, "formatNoMatches"))
                      )
                        return void f(
                          "<li class='select2-no-results'>" +
                            k.formatNoMatches(i.val()) +
                            "</li>"
                        );
                      j.empty(),
                        l.opts.populateResults.call(this, j, g.results, {
                          term: i.val(),
                          page: this.resultsPage,
                          context: null,
                        }),
                        g.more === !0 &&
                          r(k.formatLoadMore, "formatLoadMore") &&
                          (j.append(
                            "<li class='select2-more-results'>" +
                              l.opts.escapeMarkup(
                                k.formatLoadMore(this.resultsPage)
                              ) +
                              "</li>"
                          ),
                          window.setTimeout(function () {
                            l.loadMoreIfNeeded();
                          }, 10)),
                        this.postprocessResults(g, c),
                        e();
                    }
                  }),
                });
            }
          },
          cancel: function () {
            this.close();
          },
          blur: function () {
            this.close(),
              this.container.removeClass("select2-container-active"),
              this.dropdown.removeClass("select2-drop-active"),
              this.search[0] === document.activeElement && this.search.blur(),
              this.clearSearch(),
              this.selection
                .find(".select2-search-choice-focus")
                .removeClass("select2-search-choice-focus");
          },
          focusSearch: function () {
            this.search.show(),
              this.search.focus(),
              window.setTimeout(
                this.bind(function () {
                  this.search.show(),
                    this.search.focus(),
                    this.search.val(this.search.val());
                }),
                10
              );
          },
          selectHighlighted: function () {
            var a =
                (this.highlight(),
                this.results
                  .find(".select2-highlighted")
                  .not(".select2-disabled")),
              b = a.closest(".select2-result-selectable").data("select2-data");
            b && (a.addClass("select2-disabled"), this.onSelect(b));
          },
          getPlaceholder: function () {
            return (
              this.opts.element.attr("placeholder") ||
              this.opts.element.attr("data-placeholder") ||
              this.opts.element.data("placeholder") ||
              this.opts.placeholder
            );
          },
          initContainerWidth: function () {
            function c() {
              var c, d, e, f, g;
              if ("off" === this.opts.width) return null;
              if ("element" === this.opts.width)
                return 0 === this.opts.element.outerWidth()
                  ? "auto"
                  : this.opts.element.outerWidth() + "px";
              if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                if (((c = this.opts.element.attr("style")), c !== b))
                  for (d = c.split(";"), f = 0, g = d.length; g > f; f += 1)
                    if (
                      ((e = d[f]
                        .replace(/\s/g, "")
                        .match(
                          /width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/
                        )),
                      null !== e && e.length >= 1)
                    )
                      return e[1];
                return "resolve" === this.opts.width
                  ? ((c = this.opts.element.css("width")),
                    c.indexOf("%") > 0
                      ? c
                      : 0 === this.opts.element.outerWidth()
                      ? "auto"
                      : this.opts.element.outerWidth() + "px")
                  : null;
              }
              return a.isFunction(this.opts.width)
                ? this.opts.width()
                : this.opts.width;
            }
            var d = c.call(this);
            null !== d && this.container.attr("style", "width: " + d);
          },
        })),
        (y = v(x, {
          createContainer: function () {
            var b = a("<div></div>", {
              class: "select2-container",
            }).html(
              [
                "    <a href='#' class='select2-choice'>",
                "   <span></span><abbr class='select2-search-choice-close' style='display:none;'></abbr>",
                "   <div><b></b></div>",
                "</a>",
                "    <div class='select2-drop select2-offscreen'>",
                "   <div class='select2-search'>",
                "       <input type='text' autocomplete='off' class='select2-input'/>",
                "   </div>",
                "   <ul class='select2-results'>",
                "   </ul>",
                "</div>",
              ].join("")
            );
            return (
              b.find("a").click(function () {
                return !1;
              }),
              b
            );
          },
          opening: function () {
            this.search.show(),
              this.parent.opening.apply(this, arguments),
              this.dropdown.removeClass("select2-offscreen");
          },
          close: function () {
            this.opened() &&
              (this.parent.close.apply(this, arguments),
              this.dropdown
                .removeAttr("style")
                .addClass("select2-offscreen")
                .insertAfter(this.selection)
                .show());
          },
          focus: function () {
            this.close(), this.selection.focus();
          },
          isFocused: function () {
            return this.selection[0] === document.activeElement;
          },
          cancel: function () {
            this.parent.cancel.apply(this, arguments), this.selection.focus();
          },
          initContainer: function () {
            var a,
              b = this.container,
              c = this.dropdown,
              d = !1;
            (this.selection = a = b.find(".select2-choice")),
              this.search.bind(
                "keydown",
                this.bind(function (a) {
                  if (this.enabled) {
                    if (a.which === w.PAGE_UP || a.which === w.PAGE_DOWN)
                      return void l(a);
                    if (this.opened())
                      switch (a.which) {
                        case w.UP:
                        case w.DOWN:
                          return (
                            this.moveHighlight(a.which === w.UP ? -1 : 1),
                            void l(a)
                          );
                        case w.TAB:
                        case w.ENTER:
                          return this.selectHighlighted(), void l(a);
                        case w.ESC:
                          return this.cancel(a), void l(a);
                      }
                    else {
                      if (
                        a.which === w.TAB ||
                        w.isControl(a) ||
                        w.isFunctionKey(a) ||
                        a.which === w.ESC
                      )
                        return;
                      if (this.opts.openOnEnter === !1 && a.which === w.ENTER)
                        return;
                      if ((this.open(), a.which === w.ENTER)) return;
                    }
                  }
                })
              ),
              this.search.bind(
                "focus",
                this.bind(function () {
                  this.selection.attr("tabIndex", "-1");
                })
              ),
              this.search.bind(
                "blur",
                this.bind(function () {
                  this.opened() ||
                    this.container.removeClass("select2-container-active"),
                    window.setTimeout(
                      this.bind(function () {
                        this.selection.attr(
                          "tabIndex",
                          this.opts.element.attr("tabIndex")
                        );
                      }),
                      10
                    );
                })
              ),
              a.bind(
                "mousedown",
                this.bind(function (a) {
                  (d = !0),
                    this.opened()
                      ? (this.close(), this.selection.focus())
                      : (this.enabled ||
                          (this.enable(), this.opts.element.trigger("enabled")),
                        this.open()),
                    (d = !1);
                })
              ),
              c.bind(
                "mousedown",
                this.bind(function () {
                  this.search.focus();
                })
              ),
              a.bind(
                "focus",
                this.bind(function () {
                  this.container.addClass("select2-container-active"),
                    this.search.attr("tabIndex", "-1");
                })
              ),
              a.bind(
                "blur",
                this.bind(function () {
                  this.opened() ||
                    this.container.removeClass("select2-container-active"),
                    window.setTimeout(
                      this.bind(function () {
                        this.search.attr(
                          "tabIndex",
                          this.opts.element.attr("tabIndex")
                        );
                      }),
                      10
                    );
                })
              ),
              a.bind(
                "keydown",
                this.bind(function (a) {
                  if (this.enabled) {
                    if (a.which === w.PAGE_UP || a.which === w.PAGE_DOWN)
                      return void l(a);
                    if (
                      !(
                        a.which === w.TAB ||
                        w.isControl(a) ||
                        w.isFunctionKey(a) ||
                        a.which === w.ESC ||
                        (this.opts.openOnEnter === !1 && a.which === w.ENTER)
                      )
                    ) {
                      if (a.which == w.DELETE)
                        return void (this.opts.allowClear && this.clear());
                      if ((this.open(), a.which === w.ENTER)) return void l(a);
                      if (a.which < 48) return void l(a);
                      var b = String.fromCharCode(a.which).toLowerCase();
                      a.shiftKey && (b = b.toUpperCase()),
                        this.search.focus(),
                        this.search.val(b),
                        l(a);
                    }
                  }
                })
              ),
              a.delegate(
                "abbr",
                "mousedown",
                this.bind(function (a) {
                  this.enabled &&
                    (this.clear(),
                    l(a),
                    this.close(),
                    this.triggerChange(),
                    this.selection.focus());
                })
              ),
              this.setPlaceholder(),
              this.search.bind(
                "focus",
                this.bind(function () {
                  this.container.addClass("select2-container-active");
                })
              );
          },
          clear: function () {
            this.opts.element.val(""),
              this.selection.find("span").empty(),
              this.selection.removeData("select2-data"),
              this.setPlaceholder();
          },
          initSelection: function () {
            if ("" === this.opts.element.val())
              this.close(), this.setPlaceholder();
            else {
              var a = this;
              this.opts.initSelection.call(
                null,
                this.opts.element,
                function (c) {
                  c !== b &&
                    null !== c &&
                    (a.updateSelection(c), a.close(), a.setPlaceholder());
                }
              );
            }
          },
          prepareOpts: function () {
            var b = this.parent.prepareOpts.apply(this, arguments);
            return (
              "select" === b.element.get(0).tagName.toLowerCase() &&
                (b.initSelection = function (b, c) {
                  var d = b.find(":selected");
                  a.isFunction(c) &&
                    c({
                      id: d.attr("value"),
                      text: d.text(),
                      css: d.attr("css"),
                    });
                }),
              b
            );
          },
          setPlaceholder: function () {
            var a = this.getPlaceholder();
            if ("" === this.opts.element.val() && a !== b) {
              if (this.select && "" !== this.select.find("option:first").text())
                return;
              this.selection.find("span").html(this.opts.escapeMarkup(a)),
                this.selection.addClass("select2-default"),
                this.selection.find("abbr").hide();
            }
          },
          postprocessResults: function (b, c) {
            var e = 0,
              f = this,
              g = !0;
            this.results
              .find(".select2-result-selectable")
              .each2(function (a, b) {
                return d(f.id(b.data("select2-data")), f.opts.element.val())
                  ? ((e = a), !1)
                  : void 0;
              }),
              this.highlight(e),
              c === !0 &&
                ((g = this.showSearchInput =
                  t(b.results) >= this.opts.minimumResultsForSearch),
                this.dropdown
                  .find(".select2-search")
                  [g ? "removeClass" : "addClass"]("select2-search-hidden"),
                a(this.dropdown, this.container)[
                  g ? "addClass" : "removeClass"
                ]("select2-with-searchbox"));
          },
          onSelect: function (a) {
            var b = this.opts.element.val();
            this.opts.element.val(this.id(a)),
              this.updateSelection(a),
              this.close(),
              this.selection.focus(),
              d(b, this.id(a)) || this.triggerChange();
          },
          updateSelection: function (a) {
            var c,
              d = this.selection.find("span");
            this.selection.data("select2-data", a),
              d.empty(),
              (c = this.opts.formatSelection(a, d)),
              c !== b &&
                (d.append(this.opts.escapeMarkup(c)),
                c.match(/^\d/)
                  ? d.css("font-family", "")
                  : d.css("font-family", c)),
              this.selection.removeClass("select2-default"),
              this.opts.allowClear &&
                this.getPlaceholder() !== b &&
                this.selection.find("abbr").show();
          },
          val: function () {
            var a,
              c = null,
              d = this;
            if (0 === arguments.length) return this.opts.element.val();
            if (((a = arguments[0]), this.select))
              this.select
                .val(a)
                .find(":selected")
                .each2(function (a, b) {
                  return (
                    (c = {
                      id: b.attr("value"),
                      text: b.text(),
                      css: b.attr("style"),
                    }),
                    !1
                  );
                }),
                this.updateSelection(c),
                this.setPlaceholder();
            else {
              if (this.opts.initSelection === b)
                throw new Error(
                  "cannot call val() if initSelection() is not defined"
                );
              if (!a) return void this.clear();
              this.opts.element.val(a),
                this.opts.initSelection(this.opts.element, function (a) {
                  d.opts.element.val(a ? d.id(a) : ""),
                    d.updateSelection(a),
                    d.setPlaceholder();
                });
            }
          },
          clearSearch: function () {
            this.search.val("");
          },
          data: function (a) {
            var c;
            return 0 === arguments.length
              ? ((c = this.selection.data("select2-data")),
                c == b && (c = null),
                c)
              : void (a && "" !== a
                  ? (this.opts.element.val(a ? this.id(a) : ""),
                    this.updateSelection(a))
                  : this.clear());
          },
        })),
        (z = v(x, {
          createContainer: function () {
            var b = a("<div></div>", {
              class: "select2-container select2-container-multi",
            }).html(
              [
                "    <ul class='select2-choices'>",
                "  <li class='select2-search-field'>",
                "    <input type='text' autocomplete='off' class='select2-input'>",
                "  </li>",
                "</ul>",
                "<div class='select2-drop select2-drop-multi' style='display:none;'>",
                "   <ul class='select2-results'>",
                "   </ul>",
                "</div>",
              ].join("")
            );
            return b;
          },
          prepareOpts: function () {
            var b = this.parent.prepareOpts.apply(this, arguments);
            return (
              "select" === b.element.get(0).tagName.toLowerCase() &&
                (b.initSelection = function (b, c) {
                  var d = [];
                  b.find(":selected").each2(function (a, b) {
                    d.push({
                      id: b.attr("value"),
                      text: b.text(),
                    });
                  }),
                    a.isFunction(c) && c(d);
                }),
              b
            );
          },
          initContainer: function () {
            var b,
              c = ".select2-choices";
            (this.searchContainer = this.container.find(
              ".select2-search-field"
            )),
              (this.selection = b = this.container.find(c)),
              this.search.bind(
                "keydown",
                this.bind(function (a) {
                  if (this.enabled) {
                    if (a.which === w.BACKSPACE && "" === this.search.val()) {
                      this.close();
                      var c,
                        d = b.find(".select2-search-choice-focus");
                      if (d.length > 0)
                        return (
                          this.unselect(d.first()),
                          this.search.width(10),
                          void l(a)
                        );
                      (c = b.find(".select2-search-choice")),
                        c.length > 0 &&
                          c.last().addClass("select2-search-choice-focus");
                    } else
                      b.find(".select2-search-choice-focus").removeClass(
                        "select2-search-choice-focus"
                      );
                    if (this.opened())
                      switch (a.which) {
                        case w.UP:
                        case w.DOWN:
                          return (
                            this.moveHighlight(a.which === w.UP ? -1 : 1),
                            void l(a)
                          );
                        case w.ENTER:
                        case w.TAB:
                          return this.selectHighlighted(), void l(a);
                        case w.ESC:
                          return this.cancel(a), void l(a);
                      }
                    a.which === w.TAB ||
                      w.isControl(a) ||
                      w.isFunctionKey(a) ||
                      a.which === w.BACKSPACE ||
                      a.which === w.ESC ||
                      ((this.opts.openOnEnter !== !1 || a.which !== w.ENTER) &&
                        (this.open(),
                        (a.which === w.PAGE_UP || a.which === w.PAGE_DOWN) &&
                          l(a)));
                  }
                })
              ),
              this.search.bind("keyup", this.bind(this.resizeSearch)),
              this.search.bind(
                "blur",
                this.bind(function (a) {
                  this.container.removeClass("select2-container-active"),
                    this.search.removeClass("select2-focused"),
                    this.clearSearch(),
                    a.stopImmediatePropagation();
                })
              ),
              this.container.delegate(
                c,
                "mousedown",
                this.bind(function (b) {
                  this.enabled &&
                    (a(b.target).closest(".select2-search-choice").length > 0 ||
                      (this.clearPlaceholder(),
                      this.open(),
                      this.focusSearch(),
                      b.preventDefault()));
                })
              ),
              this.container.delegate(
                c,
                "focus",
                this.bind(function () {
                  this.enabled &&
                    (this.container.addClass("select2-container-active"),
                    this.dropdown.addClass("select2-drop-active"),
                    this.clearPlaceholder());
                })
              ),
              this.clearSearch();
          },
          enable: function () {
            this.enabled ||
              (this.parent.enable.apply(this, arguments),
              this.search.removeAttr("disabled"));
          },
          disable: function () {
            this.enabled &&
              (this.parent.disable.apply(this, arguments),
              this.search.attr("disabled", !0));
          },
          initSelection: function () {
            if (
              ("" === this.opts.element.val() &&
                (this.updateSelection([]), this.close(), this.clearSearch()),
              this.select || "" !== this.opts.element.val())
            ) {
              var a = this;
              this.opts.initSelection.call(
                null,
                this.opts.element,
                function (c) {
                  c !== b &&
                    null !== c &&
                    (a.updateSelection(c), a.close(), a.clearSearch());
                }
              );
            }
          },
          clearSearch: function () {
            var a = this.getPlaceholder();
            a !== b &&
            0 === this.getVal().length &&
            this.search.hasClass("select2-focused") === !1
              ? (this.search.val(a).addClass("select2-default"),
                this.resizeSearch())
              : this.search.val(" ").width(10);
          },
          clearPlaceholder: function () {
            this.search.hasClass("select2-default")
              ? this.search.val("").removeClass("select2-default")
              : " " === this.search.val() && this.search.val("");
          },
          opening: function () {
            this.parent.opening.apply(this, arguments),
              this.clearPlaceholder(),
              this.resizeSearch(),
              this.focusSearch();
          },
          close: function () {
            this.opened() && this.parent.close.apply(this, arguments);
          },
          focus: function () {
            this.close(), this.search.focus();
          },
          isFocused: function () {
            return this.search.hasClass("select2-focused");
          },
          updateSelection: function (b) {
            var d = [],
              e = [],
              f = this;
            a(b).each(function () {
              c(f.id(this), d) < 0 && (d.push(f.id(this)), e.push(this));
            }),
              (b = e),
              this.selection.find(".select2-search-choice").remove(),
              a(b).each(function () {
                f.addSelectedChoice(this);
              }),
              f.postprocessResults();
          },
          tokenize: function () {
            var a = this.search.val();
            (a = this.opts.tokenizer(
              a,
              this.data(),
              this.bind(this.onSelect),
              this.opts
            )),
              null != a &&
                a != b &&
                (this.search.val(a), a.length > 0 && this.open());
          },
          onSelect: function (a) {
            this.addSelectedChoice(a),
              this.select && this.postprocessResults(),
              this.opts.closeOnSelect
                ? (this.close(), this.search.width(10))
                : this.countSelectableResults() > 0
                ? (this.search.width(10),
                  this.resizeSearch(),
                  this.positionDropdown())
                : this.close(),
              this.triggerChange({
                added: a,
              }),
              this.focusSearch();
          },
          cancel: function () {
            this.close(), this.focusSearch();
          },
          addSelectedChoice: function (b) {
            var c,
              d = a(
                "<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"
              ),
              e = this.id(b),
              f = this.getVal();
            d.find("a").click(function () {
              return !1;
            }),
              (c = this.opts.formatSelection(b, d)),
              d
                .find("div")
                .replaceWith("<div>" + this.opts.escapeMarkup(c) + "</div>"),
              d
                .find(".select2-search-choice-close")
                .bind("mousedown", l)
                .bind(
                  "click dblclick",
                  this.bind(function (b) {
                    this.enabled &&
                      (a(b.target)
                        .closest(".select2-search-choice")
                        .fadeOut(
                          "fast",
                          this.bind(function () {
                            this.unselect(a(b.target)),
                              this.selection
                                .find(".select2-search-choice-focus")
                                .removeClass("select2-search-choice-focus"),
                              this.close(),
                              this.focusSearch();
                          })
                        )
                        .dequeue(),
                      l(b));
                  })
                )
                .bind(
                  "focus",
                  this.bind(function () {
                    this.enabled &&
                      (this.container.addClass("select2-container-active"),
                      this.dropdown.addClass("select2-drop-active"));
                  })
                ),
              d.data("select2-data", b),
              d.insertBefore(this.searchContainer),
              f.push(e),
              this.setVal(f);
          },
          unselect: function (a) {
            var b,
              d,
              e = this.getVal();
            if (((a = a.closest(".select2-search-choice")), 0 === a.length))
              throw (
                "Invalid argument: " + a + ". Must be .select2-search-choice"
              );
            (b = a.data("select2-data")),
              (d = c(this.id(b), e)),
              d >= 0 &&
                (e.splice(d, 1),
                this.setVal(e),
                this.select && this.postprocessResults()),
              a.remove(),
              this.triggerChange({
                removed: b,
              });
          },
          postprocessResults: function () {
            var a = this.getVal(),
              b = this.results.find(".select2-result-selectable"),
              d = this.results.find(".select2-result-with-children"),
              e = this;
            b.each2(function (b, d) {
              var f = e.id(d.data("select2-data"));
              c(f, a) >= 0
                ? d
                    .addClass("select2-disabled")
                    .removeClass("select2-result-selectable")
                : d
                    .removeClass("select2-disabled")
                    .addClass("select2-result-selectable");
            }),
              d.each2(function (a, b) {
                0 == b.find(".select2-result-selectable").length
                  ? b.addClass("select2-disabled")
                  : b.removeClass("select2-disabled");
              }),
              b.each2(function (a, b) {
                return !b.hasClass("select2-disabled") &&
                  b.hasClass("select2-result-selectable")
                  ? (e.highlight(0), !1)
                  : void 0;
              });
          },
          resizeSearch: function () {
            var a,
              b,
              c,
              d,
              e,
              g = f(this.search);
            (a = m(this.search) + 10),
              (b = this.search.offset().left),
              (c = this.selection.width()),
              (d = this.selection.offset().left),
              (e = c - (b - d) - g),
              a > e && (e = c - g),
              40 > e && (e = c - g),
              this.search.width(e);
          },
          getVal: function () {
            var a;
            return this.select
              ? ((a = this.select.val()), null === a ? [] : a)
              : ((a = this.opts.element.val()), e(a, this.opts.separator));
          },
          setVal: function (b) {
            var d;
            this.select
              ? this.select.val(b)
              : ((d = []),
                a(b).each(function () {
                  c(this, d) < 0 && d.push(this);
                }),
                this.opts.element.val(
                  0 === d.length ? "" : d.join(this.opts.separator)
                ));
          },
          val: function () {
            var c,
              d = [],
              e = this;
            if (0 === arguments.length) return this.getVal();
            if (((c = arguments[0]), !c))
              return (
                this.opts.element.val(""),
                this.updateSelection([]),
                void this.clearSearch()
              );
            if ((this.setVal(c), this.select))
              this.select.find(":selected").each(function () {
                d.push({
                  id: a(this).attr("value"),
                  text: a(this).text(),
                });
              }),
                this.updateSelection(d);
            else {
              if (this.opts.initSelection === b)
                throw new Error(
                  "val() cannot be called if initSelection() is not defined"
                );
              this.opts.initSelection(this.opts.element, function (b) {
                var c = a(b).map(e.id);
                e.setVal(c), e.updateSelection(b), e.clearSearch();
              });
            }
            this.clearSearch();
          },
          onSortStart: function () {
            if (this.select)
              throw new Error(
                "Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead."
              );
            this.search.width(0), this.searchContainer.hide();
          },
          onSortEnd: function () {
            var b = [],
              c = this;
            this.searchContainer.show(),
              this.searchContainer.appendTo(this.searchContainer.parent()),
              this.resizeSearch(),
              this.selection.find(".select2-search-choice").each(function () {
                b.push(c.opts.id(a(this).data("select2-data")));
              }),
              this.setVal(b),
              this.triggerChange();
          },
          data: function (b) {
            var c,
              d = this;
            return 0 === arguments.length
              ? this.selection
                  .find(".select2-search-choice")
                  .map(function () {
                    return a(this).data("select2-data");
                  })
                  .get()
              : (b || (b = []),
                (c = a.map(b, function (a) {
                  return d.opts.id(a);
                })),
                this.setVal(c),
                this.updateSelection(b),
                this.clearSearch(),
                void 0);
          },
        })),
        (a.fn.select2 = function () {
          var d,
            e,
            f,
            g,
            h = Array.prototype.slice.call(arguments, 0),
            i = [
              "val",
              "destroy",
              "opened",
              "open",
              "close",
              "focus",
              "isFocused",
              "container",
              "onSortStart",
              "onSortEnd",
              "enable",
              "disable",
              "positionDropdown",
              "data",
            ];
          return (
            this.each(function () {
              if (0 === h.length || "object" == typeof h[0])
                (d = 0 === h.length ? {} : a.extend({}, h[0])),
                  (d.element = a(this)),
                  "select" === d.element.get(0).tagName.toLowerCase()
                    ? (g = d.element.attr("multiple"))
                    : ((g = d.multiple || !1),
                      "tags" in d && (d.multiple = g = !0)),
                  (e = g ? new z() : new y()),
                  e.init(d);
              else {
                if ("string" != typeof h[0])
                  throw "Invalid arguments to select2 plugin: " + h;
                if (c(h[0], i) < 0) throw "Unknown method: " + h[0];
                if (((f = b), (e = a(this).data("select2")), e === b)) return;
                if (
                  ((f =
                    "container" === h[0]
                      ? e.container
                      : e[h[0]].apply(e, h.slice(1))),
                  f !== b)
                )
                  return !1;
              }
            }),
            f === b ? this : f
          );
        }),
        (a.fn.select2.defaults = {
          width: "copy",
          closeOnSelect: !0,
          openOnEnter: !0,
          containerCss: {},
          dropdownCss: {},
          containerCssClass: "",
          dropdownCssClass: "",
          formatResult: function (a, b, c) {
            var d = [];
            return n(a.text, c.term, d), d.join("");
          },
          formatSelection: function (a, c) {
            return a ? a.text : b;
          },
          formatResultCssClass: function (a) {
            return b;
          },
          formatNoMatches: function () {
            return "No matches found";
          },
          formatInputTooShort: function (a, b) {
            return "Please enter " + (b - a.length) + " more characters";
          },
          formatSelectionTooBig: function (a) {
            return "You can only select " + a + " item" + (1 == a ? "" : "s");
          },
          formatLoadMore: function (a) {
            return "Loading more results...";
          },
          formatSearching: function () {
            return "Searching...";
          },
          minimumResultsForSearch: 0,
          minimumInputLength: 0,
          maximumSelectionSize: 0,
          id: function (a) {
            return a.id;
          },
          matcher: function (a, b) {
            return b.toUpperCase().indexOf(a.toUpperCase()) >= 0;
          },
          separator: ",",
          tokenSeparators: [],
          tokenizer: u,
          escapeMarkup: function (a) {
            return a && "string" == typeof a ? a.replace(/&/g, "&amp;") : a;
          },
          blurOnChange: !1,
        }),
        (window.Select2 = {
          query: {
            ajax: o,
            local: p,
            tags: q,
          },
          util: {
            debounce: i,
            markMatch: n,
          },
          class: {
            abstract: x,
            single: y,
            multi: z,
          },
        });
    }
  })(jQuery),
  $(document).ready(function () {
    var a = $("#font_family"),
      b = $("#font_family_chk"),
      c = $("#font_style"),
      d = $("#font_style_chk"),
      e = $("#font_weight"),
      f = $("#font_weight_chk"),
      g = $("#font_size"),
      h = $("#font_size_chk"),
      i = null,
      j = {
        type: "global",
        font_family: {
          name: null,
          type: null,
        },
        font_style: null,
        font_weight: null,
        font_size: null,
      },
      k = {};
    jQuery.extend(k, j);

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      if (request.msg === "style") {
        console.log("Received message:", request.value);
        sendResponse({status: "success"});
      }
    });

    chrome.runtime.sendMessage({msg: "getActiveTab"}, function(response) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      } else {
        console.log("Active tab:", response.tab);
    
        i = response.tab;
    
        l = function () {
          chrome.storage.local.get("styles", function (a) {
            a = a || {};
            a.styles = a.styles || {};
            a.styles.domain_styles = a.styles.domain_styles || {};
            a.styles.global_style = a.styles.global_style || {};
    
            if (i && i.url) {
              var b = i.url.match(/:\/\/(.[^\/]+)/)[1];
              if ("custom" === j.type) {
                a.styles.domain_styles[b] = j;
              } else {
                delete a.styles.domain_styles[b];
              }
              a.styles.global_style = k;
              chrome.storage.local.set(a);
            } else {
              console.error("Tab or URL is undefined.");
            }
          });
        };
    
        m = function () {
          chrome.storage.local.get("styles", function (a) {
            if (i && i.url) {
              var b = i.url.match(/:\/\/(.[^\/]+)/)[1];
              if (a && a.styles) {
                if (a.styles.domain_styles && a.styles.domain_styles[b]) {
                  j = a.styles.domain_styles[b];
                }
                if (a.styles.global_style) {
                  k = a.styles.global_style;
                }
              }
              var c = null;
              if ("global" === j.type) {
                c = k;
                n(c);
              } else if ("custom" === j.type) {
                c = j;
                n(c);
              }
              $(".setting-type").val(j.type).trigger("change");
            } else {
              console.error("Tab or URL is undefined.");
            }
          });
        };
    
        l();
        m();
      }
    });
    (n = function (i) {
      i.font_style
        ? (c.select2("val", i.font_style),
          d.attr("checked", "checked"),
          c.select2("enable"))
        : (c.val("normal"), d.removeAttr("checked"), c.select2("disable")),
        i.font_weight
          ? (e.select2("val", i.font_weight),
            f.attr("checked", "checked"),
            e.select2("enable"))
          : (e.val("normal"), f.removeAttr("checked"), e.select2("disable")),
        i.font_family.name
          ? (a.select2("val", i.font_family.name),
            b.attr("checked", "checked"),
            a.select2("enable"))
          : (a.select2("val", null),
            b.removeAttr("checked"),
            a.select2("disable")),
        i.font_size
          ? (g.val(i.font_size),
            h.attr("checked", "checked"),
            g.removeAttr("disabled"))
          : (g.val(""),
            h.removeAttr("checked"),
            g.attr("disabled", "disabled"));
    }),
      (o = function (a) {
        "global" == j.type
          ? p(a)
          : chrome.tabs.sendMessage(
              i.id,
              {
                msg: "style",
                value: a,
              },
              function () {}
            );
      }),
      (p = function (a) {
        chrome.tabs.query({}, function (b) {
          for (var c in b)
            chrome.tabs.sendMessage(
              b[c].id,
              {
                msg: "style",
                value: a,
              },
              function () {}
            );
        });
      }),
      (q = [
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
      ]),
      (r = []);
    q.forEach(function (a) {
      r.push({
        name: a,
        type: "standard",
      });
    });
    var s = [];
    if (googlefonts)
      for (var t in googlefonts.items)
        s.push({
          name: googlefonts.items[t].family,
          type: "google",
        });
    var u = [];
    for (var v in s)
      if ((u.push(s[v].name), 30 === u.length)) {
        var w = $('<link type="text/css" rel="stylesheet"> ');
        w.attr(
          "href",
          ("https:" == document.location.protocol ? "https" : "http") +
            "://fonts.googleapis.com/css?family=" +
            u.join("|").replace(/\s/g, "+")
        ),
          document.head
            ? $(document.head).append(w)
            : $(document.documentElement).append(w),
          (u = []);
      }
    (w = $('<link type="text/css" rel="stylesheet"> ')),
      w.attr(
        "href",
        ("https:" == document.location.protocol ? "https" : "http") +
          "://fonts.googleapis.com/css?family=" +
          u.join("|").replace(/\s/g, "+")
      ),
      document.head
        ? $(document.head).append(w)
        : $(document.documentElement).append(w);
    var x = r.concat(s),
      y = {};
    chrome.storage.local.get("custom_fonts", function (b) {
      var c = b.custom_fonts;
      if (c) {
        y = c;
        var d = "";
        if (
          (Object.keys(c).forEach(function (a) {
            (d +=
              "@font-face{  font-family: '" +
              a +
              "';src: url(" +
              c[a] +
              ");} "),
              x.push({
                name: a,
                type: "custom",
                url: c[a],
              });
          }),
          d)
        ) {
          var e = document.createElement("style");
          (e.type = "text/css"),
            (e.innerText = d),
            document.head
              ? document.head.appendChild(e)
              : document.documentElement.appendChild(e);
        }
      }
      x.sort(function (a, b) {
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      }),
        x.forEach(function (b) {
          var c = $("<option>" + b.name + "</option>");
          c.data("type", b.type), a.append(c);
        }),
        a.select2({
          placeholder: "Select a Font",
        });
    }),
      e.select2(),
      c.select2(),
      chrome.runtime.sendMessage({msg: "getActiveTab"}, function (tabs) { // REMAKE THIS
        var i = tabs.tab;
        if (i && i.url) {
          var domain = i.url.match(/:\/\/(.[^\/]+)/);
          if (domain && domain[1]) {
            $(".domain").html("Font Settings for<br />" + domain[1] + ":");
          } else {
            console.error("Unable to extract domain from URL.");
          }
        } else {
          console.error("Tab or URL is undefined.");
        }
        m();
      }),
      $(".help-tip").tooltip(),
      $("#custom-font").click(function () {
        chrome.tabs.create({
          url: "/custom_fonts.html",
        });
      }),
      $(".setting-type").change(function () {
        (j.type = $(this).val()),
          "global" === j.type
            ? ($(".setting-name").text("Global Font"),
              n(k),
              $(".well").show().css("background-color", "whiteSmoke"),
              o(k))
            : "custom" === j.type
            ? ($(".setting-name").text("Site Font"),
              n(j),
              $(".well").show().css("background-color", "transparent"),
              o(j))
            : ((j = {
                type: "custom",
                font_family: {
                  name: null,
                  type: null,
                },
                font_style: null,
                font_weight: null,
                font_size: null,
              }),
              $(".well").hide(),
              o({})),
          l();
      }),
      f.change(function () {
        var a = null;
        (a = "global" === j.type ? k : j),
          $(this).attr("checked")
            ? ((a.font_weight = e.val()), e.select2("enable"))
            : ((a.font_weight = null), e.select2("disable")),
          o(a),
          l();
      }),
      e.bind("enabled", function () {
        f.click();
      }),
      d.change(function () {
        var a = null;
        (a = "global" === j.type ? k : j),
          $(this).attr("checked")
            ? ((a.font_style = c.val()), c.select2("enable"))
            : ((a.font_style = null), c.select2("disable")),
          o(a),
          l();
      }),
      c.bind("enabled", function () {
        d.click();
      }),
      $(".enable-text").change(function () {
        var a = $(this).parent().next("td").children(),
          b = null;
        (b = "global" === j.type ? k : j),
          $(this).attr("checked")
            ? ((b[a[0].id] = a.val()), a.removeAttr("disabled"))
            : ((b[a[0].id] = ""), a.attr("disabled", "disabled")),
          o(b),
          l();
      }),
      $(".enable-select").change(function () {
        var b = null;
        (b = "global" === j.type ? k : j),
          $(this).attr("checked")
            ? ((b.font_family = {
                name: a.val(),
                type: a.find("option:selected").data("type"),
              }),
              "custom" === b.font_family.type &&
                (b.font_family.url = y[b.font_family.name]),
              a.select2("enable"))
            : ((b.font_family = {
                name: null,
                type: null,
              }),
              a.select2("disable")),
          o(b),
          l();
      }),
      c.change(function () {
        var a = null;
        (a = "global" === j.type ? k : j),
          (a.font_style = $(this).val()),
          o(a),
          l();
      }),
      e.change(function () {
        var a = null;
        (a = "global" === j.type ? k : j),
          (a.font_weight = $(this).val()),
          o(a),
          l();
      }),
      g.keyup(function () {
        var a = null;
        a = "global" === j.type ? k : j;
        var b = parseFloat($(this).val());
        (a.font_size = b), $(this).val(b), o(a), l();
      }),
      a.bind("enabled", function () {
        $(".enable-select").click();
      }),
      a.change(function () {
        var b = null;
        b = "global" === j.type ? k : j;
        var c = a.val();
        (b.font_family.name = c),
          (b.font_family.type = a.find("option:selected").data("type")),
          "custom" === b.font_family.type && (b.font_family.url = y[c]),
          o(b),
          l();
      }),
      $(".done").click(function () {
        window.close();
      });
  }),
  !(function (a) {
    var b = function (a, b) {
      this.init("tooltip", a, b);
    };
    (b.prototype = {
      constructor: b,
      init: function (b, c, d) {
        var e, f;
        (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.enabled = !0),
          "click" == this.options.trigger
            ? this.$element.on(
                "click." + this.type,
                this.options.selector,
                a.proxy(this.toggle, this)
              )
            : "manual" != this.options.trigger &&
              ((e = "hover" == this.options.trigger ? "mouseenter" : "focus"),
              (f = "hover" == this.options.trigger ? "mouseleave" : "blur"),
              this.$element.on(
                e + "." + this.type,
                this.options.selector,
                a.proxy(this.enter, this)
              ),
              this.$element.on(
                f + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              )),
          this.options.selector
            ? (this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: "",
              }))
            : this.fixTitle();
      },
      getOptions: function (b) {
        return (
          (b = a.extend({}, a.fn[this.type].defaults, b, this.$element.data())),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = {
              show: b.delay,
              hide: b.delay,
            }),
          b
        );
      },
      enter: function (b) {
        var c = a(b.currentTarget)[this.type](this._options).data(this.type);
        return c.options.delay && c.options.delay.show
          ? (clearTimeout(this.timeout),
            (c.hoverState = "in"),
            (this.timeout = setTimeout(function () {
              "in" == c.hoverState && c.show();
            }, c.options.delay.show)),
            void 0)
          : c.show();
      },
      leave: function (b) {
        var c = a(b.currentTarget)[this.type](this._options).data(this.type);
        return (
          this.timeout && clearTimeout(this.timeout),
          c.options.delay && c.options.delay.hide
            ? ((c.hoverState = "out"),
              void (this.timeout = setTimeout(function () {
                "out" == c.hoverState && c.hide();
              }, c.options.delay.hide)))
            : c.hide()
        );
      },
      show: function () {
        var a, b, c, d, e, f, g;
        if (this.hasContent() && this.enabled) {
          switch (
            ((a = this.tip()),
            this.setContent(),
            this.options.animation && a.addClass("fade"),
            (f =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, a[0], this.$element[0])
                : this.options.placement),
            (b = /in/.test(f)),
            a
              .remove()
              .css({
                top: 0,
                left: 0,
                display: "block",
              })
              .appendTo(b ? this.$element : document.body),
            (c = this.getPosition(b)),
            (d = a[0].offsetWidth),
            (e = a[0].offsetHeight),
            b ? f.split(" ")[1] : f)
          ) {
            case "bottom":
              g = {
                top: c.top + c.height,
                left: c.left + c.width / 2 - d / 2,
              };
              break;
            case "top":
              g = {
                top: c.top - e,
                left: c.left + c.width / 2 - d / 2,
              };
              break;
            case "left":
              g = {
                top: c.top + c.height / 2 - e / 2,
                left: c.left - d,
              };
              break;
            case "right":
              g = {
                top: c.top + c.height / 2 - e / 2,
                left: c.left + c.width,
              };
          }
          a.css(g).addClass(f).addClass("in");
        }
      },
      setContent: function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      },
      hide: function () {
        function b() {
          var b = setTimeout(function () {
            c.off(a.support.transition.end).remove();
          }, 500);
          c.one(a.support.transition.end, function () {
            clearTimeout(b), c.remove();
          });
        }
        var c = this.tip();
        return (
          c.removeClass("in"),
          a.support.transition && this.$tip.hasClass("fade") ? b() : c.remove(),
          this
        );
      },
      fixTitle: function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .removeAttr("title");
      },
      hasContent: function () {
        return this.getTitle();
      },
      getPosition: function (b) {
        return a.extend(
          {},
          b
            ? {
                top: 0,
                left: 0,
              }
            : this.$element.offset(),
          {
            width: this.$element[0].offsetWidth,
            height: this.$element[0].offsetHeight,
          }
        );
      },
      getTitle: function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      },
      tip: function () {
        return (this.$tip = this.$tip || a(this.options.template));
      },
      validate: function () {
        this.$element[0].parentNode ||
          (this.hide(), (this.$element = null), (this.options = null));
      },
      enable: function () {
        this.enabled = !0;
      },
      disable: function () {
        this.enabled = !1;
      },
      toggleEnabled: function () {
        this.enabled = !this.enabled;
      },
      toggle: function () {
        this[this.tip().hasClass("in") ? "hide" : "show"]();
      },
      destroy: function () {
        this.hide()
          .$element.off("." + this.type)
          .removeData(this.type);
      },
    }),
      (a.fn.tooltip = function (c) {
        return this.each(function () {
          var d = a(this),
            e = d.data("tooltip"),
            f = "object" == typeof c && c;
          e || d.data("tooltip", (e = new b(this, f))),
            "string" == typeof c && e[c]();
        });
      }),
      (a.fn.tooltip.Constructor = b),
      (a.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover",
        title: "",
        delay: 0,
        html: !0,
      });
  })(window.jQuery);
