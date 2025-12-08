import { a as ut } from "./client-core-vendor-B82q9aJI.js";
function ct($, M) {
  for (var W = 0; W < M.length; W++) {
    const D = M[W];
    if (typeof D != "string" && !Array.isArray(D)) {
      for (const Q in D)
        if (Q !== "default" && !(Q in $)) {
          const ee = Object.getOwnPropertyDescriptor(D, Q);
          ee && Object.defineProperty($, Q, ee.get ? ee : { enumerable: !0, get: () => D[Q] });
        }
    }
  }
  return Object.freeze(Object.defineProperty($, Symbol.toStringTag, { value: "Module" }));
}
var Ke = { exports: {} },
  it;
function ft() {
  return (
    it ||
      ((it = 1),
      (function ($) {
        (console.info(`
IFRAME-RESIZER

Iframe-Resizer 5 is now available via the following two packages:

 * @iframe-resizer/parent
 * @iframe-resizer/child

Additionally their are also new versions of iframe-resizer for React, Vue, and jQuery.

Version 5 of iframe-resizer has been extensively rewritten to use modern browser APIs, which has enabled significantly better performance and greater accuracy in the detection of content resizing events.

Please see https://iframe-resizer.com/upgrade for more details.
`),
          (function (M) {
            if (typeof window > "u") return;
            var W = 0,
              D,
              Q = !1,
              ee = !1,
              ve = "message",
              xe = ve.length,
              ce = "[iFrameSizer]",
              re = ce.length,
              C = null,
              X = window.requestAnimationFrame,
              qe = Object.freeze({ max: 1, scroll: 1, bodyScroll: 1, documentElementScroll: 1 }),
              n = {},
              fe = null,
              R = Object.freeze({
                autoResize: !0,
                bodyBackground: null,
                bodyMargin: null,
                bodyMarginV1: 8,
                bodyPadding: null,
                checkOrigin: !0,
                inPageLinks: !1,
                enablePublicMethods: !0,
                heightCalculationMethod: "bodyOffset",
                id: "iFrameResizer",
                interval: 32,
                license: "1jqr0si6pnt",
                log: !1,
                maxHeight: 1 / 0,
                maxWidth: 1 / 0,
                minHeight: 0,
                minWidth: 0,
                mouseEvents: !0,
                resizeFrom: "parent",
                scrolling: !1,
                sizeHeight: !0,
                sizeWidth: !1,
                warningTimeout: 5e3,
                tolerance: 0,
                widthCalculationMethod: "scroll",
                onClose: function () {
                  return !0;
                },
                onClosed: function () {},
                onInit: function () {},
                onMessage: function () {
                  H("onMessage function not defined");
                },
                onMouseEnter: function () {},
                onMouseLeave: function () {},
                onResized: function () {},
                onScroll: function () {
                  return !0;
                },
              });
            function Se() {
              return (
                window.MutationObserver ||
                window.WebKitMutationObserver ||
                window.MozMutationObserver
              );
            }
            function te(e, r, m) {
              e.addEventListener(r, m, !1);
            }
            function le(e, r, m) {
              e.removeEventListener(r, m, !1);
            }
            function ne() {
              var e = ["moz", "webkit", "o", "ms"],
                r;
              for (r = 0; r < e.length && !X; r += 1) X = window[e[r] + "RequestAnimationFrame"];
              X ? (X = X.bind(window)) : g("setup", "RequestAnimationFrame not supported");
            }
            function De(e) {
              var r = "Host page: " + e;
              return (
                window.top !== window.self &&
                  (r =
                    window.parentIFrame && window.parentIFrame.getId
                      ? window.parentIFrame.getId() + ": " + e
                      : "Nested host page: " + e),
                r
              );
            }
            function Pe(e) {
              return ce + "[" + De(e) + "]";
            }
            function ye(e) {
              return n[e] ? n[e].log : Q;
            }
            function g(e, r) {
              Me("log", e, r, ye(e));
            }
            function Ce(e, r) {
              Me("info", e, r, ye(e));
            }
            function H(e, r) {
              Me("warn", e, r, !0);
            }
            function Me(e, r, m, u) {
              u === !0 && typeof window.console == "object" && console[e](Pe(r), m);
            }
            function Le(e) {
              function r() {
                function a() {
                  (Ae(b), Ne(f), oe("onResized", b));
                }
                (h("Height"), h("Width"), j(a, b, "init"));
              }
              function m() {
                var a = q.slice(re).split(":"),
                  l = a[1] ? parseInt(a[1], 10) : 0,
                  p = n[a[0]] && n[a[0]].iframe,
                  y = getComputedStyle(p);
                return { iframe: p, id: a[0], height: l + u(y) + w(y), width: a[2], type: a[3] };
              }
              function u(a) {
                if (a.boxSizing !== "border-box") return 0;
                var l = a.paddingTop ? parseInt(a.paddingTop, 10) : 0,
                  p = a.paddingBottom ? parseInt(a.paddingBottom, 10) : 0;
                return l + p;
              }
              function w(a) {
                if (a.boxSizing !== "border-box") return 0;
                var l = a.borderTopWidth ? parseInt(a.borderTopWidth, 10) : 0,
                  p = a.borderBottomWidth ? parseInt(a.borderBottomWidth, 10) : 0;
                return l + p;
              }
              function h(a) {
                var l = Number(n[f]["max" + a]),
                  p = Number(n[f]["min" + a]),
                  y = a.toLowerCase(),
                  k = Number(b[y]);
                (g(f, "Checking " + y + " is in range " + p + "-" + l),
                  k < p && ((k = p), g(f, "Set " + y + " to min value")),
                  k > l && ((k = l), g(f, "Set " + y + " to max value")),
                  (b[y] = "" + k));
              }
              function U() {
                function a() {
                  function y() {
                    var L = 0,
                      N = !1;
                    for (
                      g(f, "Checking connection is from allowed list of origins: " + p);
                      L < p.length;
                      L++
                    )
                      if (p[L] === l) {
                        N = !0;
                        break;
                      }
                    return N;
                  }
                  function k() {
                    var L = n[f] && n[f].remoteHost;
                    return (g(f, "Checking connection is from: " + L), l === L);
                  }
                  return p.constructor === Array ? y() : k();
                }
                var l = e.origin,
                  p = n[f] && n[f].checkOrigin;
                if (p && "" + l != "null" && !a())
                  throw new Error(
                    "Unexpected message received from: " +
                      l +
                      " for " +
                      b.iframe.id +
                      ". Message was: " +
                      e.data +
                      ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.",
                  );
                return !0;
              }
              function Y() {
                return ce === ("" + q).slice(0, re) && q.slice(re).split(":")[0] in n;
              }
              function K() {
                var a = b.type in { true: 1, false: 1, undefined: 1 };
                return (a && g(f, "Ignoring init message from meta parent page"), a);
              }
              function Z(a) {
                return q.slice(q.indexOf(":") + xe + a);
              }
              function F(a) {
                (g(f, "onMessage passed: {iframe: " + b.iframe.id + ", message: " + a + "}"),
                  oe("onMessage", { iframe: b.iframe, message: JSON.parse(a) }),
                  g(f, "--"));
              }
              function Oe() {
                var a = document.body.getBoundingClientRect(),
                  l = b.iframe.getBoundingClientRect();
                return JSON.stringify({
                  iframeHeight: l.height,
                  iframeWidth: l.width,
                  clientHeight: Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight || 0,
                  ),
                  clientWidth: Math.max(
                    document.documentElement.clientWidth,
                    window.innerWidth || 0,
                  ),
                  offsetTop: parseInt(l.top - a.top, 10),
                  offsetLeft: parseInt(l.left - a.left, 10),
                  scrollTop: window.pageYOffset,
                  scrollLeft: window.pageXOffset,
                  documentHeight: document.documentElement.clientHeight,
                  documentWidth: document.documentElement.clientWidth,
                  windowHeight: window.innerHeight,
                  windowWidth: window.innerWidth,
                });
              }
              function pe(a, l) {
                function p() {
                  V("Send Page Info", "pageInfo:" + Oe(), a, l);
                }
                Ve(p, 32, l);
              }
              function ze() {
                function a(k, L) {
                  function N() {
                    n[y] ? pe(n[y].iframe, y) : l();
                  }
                  ["scroll", "resize"].forEach(function (Be) {
                    (g(y, k + Be + " listener for sendPageInfo"), L(window, Be, N));
                  });
                }
                function l() {
                  a("Remove ", le);
                }
                function p() {
                  a("Add ", te);
                }
                var y = f;
                (p(), n[y] && (n[y].stopPageInfo = l));
              }
              function Ie() {
                n[f] && n[f].stopPageInfo && (n[f].stopPageInfo(), delete n[f].stopPageInfo);
              }
              function Re() {
                var a = !0;
                return (
                  b.iframe === null && (H(f, "IFrame (" + b.id + ") not found"), (a = !1)),
                  a
                );
              }
              function s(a) {
                var l = a.getBoundingClientRect();
                return (
                  ge(f),
                  {
                    x: Math.floor(Number(l.left) + Number(C.x)),
                    y: Math.floor(Number(l.top) + Number(C.y)),
                  }
                );
              }
              function c(a) {
                function l() {
                  ((C = L), I(), g(f, "--"));
                }
                function p() {
                  return { x: Number(b.width) + k.x, y: Number(b.height) + k.y };
                }
                function y() {
                  window.parentIFrame
                    ? window.parentIFrame["scrollTo" + (a ? "Offset" : "")](L.x, L.y)
                    : H(f, "Unable to scroll to requested position, window.parentIFrame not found");
                }
                var k = a ? s(b.iframe) : { x: 0, y: 0 },
                  L = p();
                (g(f, "Reposition requested from iFrame (offset x:" + k.x + " y:" + k.y + ")"),
                  window.top === window.self ? l() : y());
              }
              function I() {
                oe("onScroll", C) === !1 ? se() : Ne(f);
              }
              function S(a) {
                function l() {
                  var N = s(L);
                  (g(f, "Moving to in page link (#" + y + ") at x: " + N.x + " y: " + N.y),
                    (C = { x: N.x, y: N.y }),
                    I(),
                    g(f, "--"));
                }
                function p() {
                  window.parentIFrame
                    ? window.parentIFrame.moveToAnchor(y)
                    : g(f, "In page link #" + y + " not found and window.parentIFrame not found");
                }
                var y = a.split("#")[1] || "",
                  k = decodeURIComponent(y),
                  L = document.getElementById(k) || document.getElementsByName(k)[0];
                L
                  ? l()
                  : window.top === window.self
                    ? g(f, "In page link #" + y + " not found")
                    : p();
              }
              function B(a) {
                var l = {};
                if (Number(b.width) === 0 && Number(b.height) === 0) {
                  var p = Z(9).split(":");
                  l = { x: p[1], y: p[0] };
                } else l = { x: b.width, y: b.height };
                oe(a, {
                  iframe: b.iframe,
                  screenX: Number(l.x),
                  screenY: Number(l.y),
                  type: b.type,
                });
              }
              function oe(a, l) {
                return Te(f, a, l);
              }
              function we() {
                switch ((n[f] && n[f].firstRun && be(), b.type)) {
                  case "close": {
                    de(b.iframe);
                    break;
                  }
                  case "message": {
                    F(Z(6));
                    break;
                  }
                  case "mouseenter": {
                    B("onMouseEnter");
                    break;
                  }
                  case "mouseleave": {
                    B("onMouseLeave");
                    break;
                  }
                  case "autoResize": {
                    n[f].autoResize = JSON.parse(Z(9));
                    break;
                  }
                  case "scrollTo": {
                    c(!1);
                    break;
                  }
                  case "scrollToOffset": {
                    c(!0);
                    break;
                  }
                  case "pageInfo": {
                    (pe(n[f] && n[f].iframe, f), ze());
                    break;
                  }
                  case "pageInfoStop": {
                    Ie();
                    break;
                  }
                  case "inPageLink": {
                    S(Z(9));
                    break;
                  }
                  case "reset": {
                    ue(b);
                    break;
                  }
                  case "init": {
                    (r(), oe("onInit", b.iframe));
                    break;
                  }
                  default:
                    Number(b.width) === 0 && Number(b.height) === 0
                      ? H(
                          "Unsupported message received (" +
                            b.type +
                            "), this is likely due to the iframe containing a later version of iframe-resizer than the parent page",
                        )
                      : r();
                }
              }
              function He(a) {
                var l = !0;
                return (
                  n[a] || ((l = !1), H(b.type + " No settings for " + a + ". Message was: " + q)),
                  l
                );
              }
              function je() {
                for (var a in n) V("iFrame requested init", Fe(a), n[a].iframe, a);
              }
              function be() {
                n[f] && (n[f].firstRun = !1);
              }
              var q = e.data,
                b = {},
                f = null;
              q === "[iFrameResizerChild]Ready"
                ? je()
                : Y()
                  ? ((b = m()),
                    (f = b.id),
                    n[f] && (n[f].loaded = !0),
                    !K() && He(f) && (g(f, "Received: " + q), Re() && U() && we()))
                  : Ce(f, "Ignored: " + q);
            }
            function Te(e, r, m) {
              var u = null,
                w = null;
              if (n[e])
                if (((u = n[e][r]), typeof u == "function")) w = u(m);
                else throw new TypeError(r + " on iFrame[" + e + "] is not a function");
              return w;
            }
            function ae(e) {
              var r = e.id;
              delete n[r];
            }
            function de(e) {
              var r = e.id;
              if (Te(r, "onClose", r) === !1) {
                g(r, "Close iframe cancelled by onClose event");
                return;
              }
              g(r, "Removing iFrame: " + r);
              try {
                e.parentNode && e.parentNode.removeChild(e);
              } catch (m) {
                H(m);
              }
              (Te(r, "onClosed", r), g(r, "--"), ae(e), D && (D.disconnect(), (D = null)));
            }
            function ge(e) {
              C === null &&
                ((C = {
                  x:
                    window.pageXOffset === M
                      ? document.documentElement.scrollLeft
                      : window.pageXOffset,
                  y:
                    window.pageYOffset === M
                      ? document.documentElement.scrollTop
                      : window.pageYOffset,
                }),
                g(e, "Get page position: " + C.x + "," + C.y));
            }
            function Ne(e) {
              C !== null &&
                (window.scrollTo(C.x, C.y), g(e, "Set page position: " + C.x + "," + C.y), se());
            }
            function se() {
              C = null;
            }
            function ue(e) {
              function r() {
                (Ae(e), V("reset", "reset", e.iframe, e.id));
              }
              (g(e.id, "Size reset requested by " + (e.type === "init" ? "host page" : "iFrame")),
                ge(e.id),
                j(r, e, "reset"));
            }
            function Ae(e) {
              function r(h) {
                if (!e.id) {
                  g("undefined", "messageData id not set");
                  return;
                }
                ((e.iframe.style[h] = e[h] + "px"),
                  g(e.id, "IFrame (" + w + ") " + h + " set to " + e[h] + "px"));
              }
              function m(h) {
                !ee &&
                  e[h] === "0" &&
                  ((ee = !0), g(w, "Hidden iFrame detected, creating visibility listener"), Ue());
              }
              function u(h) {
                (r(h), m(h));
              }
              var w = e.iframe.id;
              n[w] && (n[w].sizeHeight && u("height"), n[w].sizeWidth && u("width"));
            }
            function j(e, r, m) {
              m !== r.type && X && !window.jasmine
                ? (g(r.id, "Requesting animation frame"), X(e))
                : e();
            }
            function V(e, r, m, u, w) {
              function h() {
                var F = n[u] && n[u].targetOrigin;
                (g(
                  u,
                  "[" + e + "] Sending msg to iframe[" + u + "] (" + r + ") targetOrigin: " + F,
                ),
                  m.contentWindow.postMessage(ce + r, F));
              }
              function U() {
                H(u, "[" + e + "] IFrame(" + u + ") not found");
              }
              function Y() {
                m && "contentWindow" in m && m.contentWindow !== null ? h() : U();
              }
              function K() {
                function F() {
                  n[u] &&
                    !n[u].loaded &&
                    !Z &&
                    ((Z = !0),
                    H(
                      u,
                      "IFrame has not responded within " +
                        n[u].warningTimeout / 1e3 +
                        " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning.",
                    ));
                }
                w &&
                  n[u] &&
                  n[u].warningTimeout &&
                  (n[u].msgTimeout = setTimeout(F, n[u].warningTimeout));
              }
              var Z = !1;
              ((u = u || m.id), n[u] && (Y(), K()));
            }
            function Fe(e) {
              return (
                e +
                ":" +
                n[e].bodyMarginV1 +
                ":" +
                n[e].sizeWidth +
                ":" +
                n[e].log +
                ":" +
                n[e].interval +
                ":" +
                n[e].enablePublicMethods +
                ":" +
                n[e].autoResize +
                ":" +
                n[e].bodyMargin +
                ":" +
                n[e].heightCalculationMethod +
                ":" +
                n[e].bodyBackground +
                ":" +
                n[e].bodyPadding +
                ":" +
                n[e].tolerance +
                ":" +
                n[e].inPageLinks +
                ":" +
                n[e].resizeFrom +
                ":" +
                n[e].widthCalculationMethod +
                ":" +
                n[e].mouseEvents
              );
            }
            function We(e) {
              return typeof e == "number";
            }
            function Ee(e, r) {
              function m() {
                function c(S) {
                  var B = n[s][S];
                  B !== 1 / 0 &&
                    B !== 0 &&
                    ((e.style[S] = We(B) ? B + "px" : B), g(s, "Set " + S + " = " + e.style[S]));
                }
                function I(S) {
                  if (n[s]["min" + S] > n[s]["max" + S])
                    throw new Error("Value for min" + S + " can not be greater than max" + S);
                }
                (I("Height"),
                  I("Width"),
                  c("maxHeight"),
                  c("minHeight"),
                  c("maxWidth"),
                  c("minWidth"));
              }
              function u() {
                var c = (r && r.id) || R.id + W++;
                return (document.getElementById(c) !== null && (c += W++), c);
              }
              function w(c) {
                if (typeof c != "string")
                  throw new TypeError("Invaild id for iFrame. Expected String");
                return (
                  c === "" &&
                    ((e.id = c = u()),
                    (Q = (r || {}).log),
                    g(c, "Added missing iframe ID: " + c + " (" + e.src + ")")),
                  c
                );
              }
              function h() {
                switch (
                  (g(
                    s,
                    "IFrame scrolling " +
                      (n[s] && n[s].scrolling ? "enabled" : "disabled") +
                      " for " +
                      s,
                  ),
                  (e.style.overflow = (n[s] && n[s].scrolling) === !1 ? "hidden" : "auto"),
                  n[s] && n[s].scrolling)
                ) {
                  case "omit":
                    break;
                  case !0: {
                    e.scrolling = "yes";
                    break;
                  }
                  case !1: {
                    e.scrolling = "no";
                    break;
                  }
                  default:
                    e.scrolling = n[s] ? n[s].scrolling : "no";
                }
              }
              function U() {
                (typeof (n[s] && n[s].bodyMargin) == "number" ||
                  (n[s] && n[s].bodyMargin) === "0") &&
                  ((n[s].bodyMarginV1 = n[s].bodyMargin),
                  (n[s].bodyMargin = "" + n[s].bodyMargin + "px"));
              }
              function Y() {
                var c = n[s] && n[s].firstRun,
                  I = n[s] && n[s].heightCalculationMethod in qe;
                !c && I && ue({ iframe: e, height: 0, width: 0, type: "init" });
              }
              function K() {
                n[s] &&
                  (n[s].iframe.iFrameResizer = {
                    close: de.bind(null, n[s].iframe),
                    removeListeners: ae.bind(null, n[s].iframe),
                    resize: V.bind(null, "Window resize", "resize", n[s].iframe),
                    moveToAnchor: function (c) {
                      V("Move to anchor", "moveToAnchor:" + c, n[s].iframe, s);
                    },
                    sendMessage: function (c) {
                      ((c = JSON.stringify(c)), V("Send Message", "message:" + c, n[s].iframe, s));
                    },
                  });
              }
              function Z(c) {
                function I() {
                  (V("iFrame.onload", c, e, M, !0), Y());
                }
                function S(oe) {
                  if (!e.parentNode) return null;
                  var we = new oe(function (He) {
                    He.forEach(function (je) {
                      var be = Array.prototype.slice.call(je.removedNodes);
                      be.forEach(function (q) {
                        q === e && de(e);
                      });
                    });
                  });
                  return (we.observe(e.parentNode, { childList: !0 }), we);
                }
                var B = Se();
                (B && (D = S(B)), te(e, "load", I), V("init", c, e, M, !0));
              }
              function F(c) {
                if (typeof c != "object") throw new TypeError("Options is not an object");
              }
              function Oe(c) {
                for (var I in R)
                  Object.prototype.hasOwnProperty.call(R, I) &&
                    (n[s][I] = Object.prototype.hasOwnProperty.call(c, I) ? c[I] : R[I]);
              }
              function pe(c) {
                return c === "" || c.match(/^(about:blank|javascript:|file:\/\/)/) !== null
                  ? "*"
                  : c;
              }
              function ze(c) {
                var I = c.split("Callback");
                if (I.length === 2) {
                  var S = "on" + I[0].charAt(0).toUpperCase() + I[0].slice(1);
                  ((this[S] = this[c]),
                    delete this[c],
                    H(
                      s,
                      "Deprecated: '" +
                        c +
                        "' has been renamed '" +
                        S +
                        "'. The old method will be removed in the next major version.",
                    ));
                }
              }
              function Ie(c) {
                ((c = c || {}),
                  (n[s] = Object.create(null)),
                  (n[s].iframe = e),
                  (n[s].firstRun = !0),
                  (n[s].remoteHost = e.src && e.src.split("/").slice(0, 3).join("/")),
                  F(c),
                  Object.keys(c).forEach(ze, c),
                  Oe(c),
                  n[s] &&
                    (n[s].targetOrigin = n[s].checkOrigin === !0 ? pe(n[s].remoteHost) : "*"));
              }
              function Re() {
                return s in n && "iFrameResizer" in e;
              }
              var s = w(e.id);
              Re() ? H(s, "Ignored iFrame, already setup.") : (Ie(r), h(), m(), U(), Z(Fe(s)), K());
            }
            function me(e, r) {
              fe === null &&
                (fe = setTimeout(function () {
                  ((fe = null), e());
                }, r));
            }
            var he = {};
            function Ve(e, r, m) {
              he[m] ||
                (he[m] = setTimeout(function () {
                  ((he[m] = null), e());
                }, r));
            }
            function Ue() {
              function e() {
                function w(h) {
                  function U(K) {
                    return (n[h] && n[h].iframe.style[K]) === "0px";
                  }
                  function Y(K) {
                    return K.offsetParent !== null;
                  }
                  n[h] &&
                    Y(n[h].iframe) &&
                    (U("height") || U("width")) &&
                    V("Visibility change", "resize", n[h].iframe, h);
                }
                Object.keys(n).forEach(function (h) {
                  w(h);
                });
              }
              function r(w) {
                (g("window", "Mutation observed: " + w[0].target + " " + w[0].type), me(e, 16));
              }
              function m() {
                var w = document.querySelector("body"),
                  h = {
                    attributes: !0,
                    attributeOldValue: !1,
                    characterData: !0,
                    characterDataOldValue: !1,
                    childList: !0,
                    subtree: !0,
                  },
                  U = new u(r);
                U.observe(w, h);
              }
              var u = Se();
              u && m();
            }
            function Je(e) {
              function r() {
                _e("Window " + e, "resize");
              }
              (g("window", "Trigger event: " + e), me(r, 16));
            }
            function ie() {
              function e() {
                _e("Tab Visible", "resize");
              }
              document.visibilityState !== "hidden" &&
                (g("document", "Trigger event: Visibility change"), me(e, 16));
            }
            function _e(e, r) {
              function m(u) {
                return n[u] && n[u].resizeFrom === "parent" && n[u].autoResize && !n[u].firstRun;
              }
              Object.keys(n).forEach(function (u) {
                m(u) && V(e, r, n[u].iframe, u);
              });
            }
            function Qe() {
              (te(window, "message", Le),
                te(window, "resize", function () {
                  Je("resize");
                }),
                te(document, "visibilitychange", ie),
                te(document, "-webkit-visibilitychange", ie));
            }
            function Xe() {
              function e(u, w) {
                function h() {
                  if (w.tagName) {
                    if (w.tagName.toUpperCase() !== "IFRAME")
                      throw new TypeError("Expected <IFRAME> tag, found <" + w.tagName + ">");
                  } else throw new TypeError("Object is not a valid DOM element");
                }
                w && (h(), Ee(w, u), m.push(w));
              }
              function r(u) {
                u &&
                  u.enablePublicMethods &&
                  H(
                    "enablePublicMethods option has been removed, public methods are now always available in the iFrame",
                  );
              }
              var m;
              return (
                ne(),
                Qe(),
                function (w, h) {
                  switch (((m = []), r(w), typeof h)) {
                    case "undefined":
                    case "string": {
                      Array.prototype.forEach.call(
                        document.querySelectorAll(h || "iframe"),
                        e.bind(M, w),
                      );
                      break;
                    }
                    case "object": {
                      e(w, h);
                      break;
                    }
                    default:
                      throw new TypeError("Unexpected data type (" + typeof h + ")");
                  }
                  return m;
                }
              );
            }
            function Ye(e) {
              e.fn
                ? e.fn.iFrameResize ||
                  (e.fn.iFrameResize = function (m) {
                    function u(w, h) {
                      Ee(h, m);
                    }
                    return this.filter("iframe").each(u).end();
                  })
                : Ce("", "Unable to bind to jQuery, it is not fully loaded.");
            }
            (window.jQuery !== M && Ye(window.jQuery),
              ($.exports = Xe()),
              (window.iFrameResize = window.iFrameResize || Xe()));
          })());
      })(Ke)),
    Ke.exports
  );
}
var Ze = { exports: {} },
  ot;
function lt() {
  return (
    ot ||
      ((ot = 1),
      (function ($) {
        (function (M) {
          if (typeof window > "u") return;
          var W = !0,
            D = 10,
            Q = "",
            ee = 0,
            ve = "",
            xe = null,
            ce = "",
            re = !1,
            C = { resize: 1, click: 1 },
            X = 128,
            qe = !0,
            n = 1,
            fe = "bodyOffset",
            R = fe,
            Se = !0,
            te = "",
            le = {},
            ne = 32,
            De = null,
            Pe = !1,
            ye = !1,
            g = "[iFrameSizer]",
            Ce = g.length,
            H = "",
            Me = { max: 1, min: 1, bodyScroll: 1, documentElementScroll: 1 },
            Le = "child",
            Te = window.parent,
            ae = "*",
            de = 0,
            ge = !1,
            Ne = null,
            se = 16,
            ue = 1,
            Ae = "scroll",
            j = Ae,
            V = window,
            Fe = function () {
              r("onMessage function not defined");
            },
            We = function () {},
            Ee = function () {},
            me = {
              height: function () {
                return (
                  r("Custom height calculation function not defined"),
                  document.documentElement.offsetHeight
                );
              },
              width: function () {
                return (
                  r("Custom width calculation function not defined"),
                  document.body.scrollWidth
                );
              },
            },
            he = {},
            Ve = !1;
          function Ue() {}
          try {
            var Je = Object.create(
              {},
              {
                passive: {
                  get: function () {
                    Ve = !0;
                  },
                },
              },
            );
            (window.addEventListener("test", Ue, Je), window.removeEventListener("test", Ue, Je));
          } catch {}
          function ie(t, i, o, d) {
            t.addEventListener(i, o, Ve ? d || {} : !1);
          }
          function _e(t, i, o) {
            t.removeEventListener(i, o, !1);
          }
          function Qe(t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
          }
          function Xe(t) {
            var i,
              o,
              d,
              T = null,
              x = 0,
              A = function () {
                ((x = Date.now()), (T = null), (d = t.apply(i, o)), T || (i = o = null));
              };
            return function () {
              var P = Date.now();
              x || (x = P);
              var E = se - (P - x);
              return (
                (i = this),
                (o = arguments),
                E <= 0 || E > se
                  ? (T && (clearTimeout(T), (T = null)),
                    (x = P),
                    (d = t.apply(i, o)),
                    T || (i = o = null))
                  : T || (T = setTimeout(A, E)),
                d
              );
            };
          }
          function Ye(t) {
            return g + "[" + H + "] " + t;
          }
          function e(t) {
            Pe && typeof window.console == "object" && console.log(Ye(t));
          }
          function r(t) {
            typeof window.console == "object" && console.warn(Ye(t));
          }
          function m() {
            (u(),
              e("Initialising iFrame (" + window.location.href + ")"),
              h(),
              K(),
              Y("background", Q),
              Y("padding", ce),
              I(),
              ze(),
              Ie(),
              Z(),
              oe(),
              B(),
              Re(),
              (le = S()),
              N("init", "Init message from host page"),
              We());
          }
          function u() {
            function t(o) {
              return o === "true";
            }
            var i = te.slice(Ce).split(":");
            ((H = i[0]),
              (ee = M === i[1] ? ee : Number(i[1])),
              (re = M === i[2] ? re : t(i[2])),
              (Pe = M === i[3] ? Pe : t(i[3])),
              (ne = M === i[4] ? ne : Number(i[4])),
              (W = M === i[6] ? W : t(i[6])),
              (ve = i[7]),
              (R = M === i[8] ? R : i[8]),
              (Q = i[9]),
              (ce = i[10]),
              (de = M === i[11] ? de : Number(i[11])),
              (le.enable = M === i[12] ? !1 : t(i[12])),
              (Le = M === i[13] ? Le : i[13]),
              (j = M === i[14] ? j : i[14]),
              (ye = M === i[15] ? ye : t(i[15])));
          }
          function w(t) {
            var i = t.split("Callback");
            if (i.length === 2) {
              var o = "on" + i[0].charAt(0).toUpperCase() + i[0].slice(1);
              ((this[o] = this[t]),
                delete this[t],
                r(
                  "Deprecated: '" +
                    t +
                    "' has been renamed '" +
                    o +
                    "'. The old method will be removed in the next major version.",
                ));
            }
          }
          function h() {
            function t() {
              var o = window.iFrameResizer;
              (e("Reading data from page: " + JSON.stringify(o)),
                Object.keys(o).forEach(w, o),
                (Fe = "onMessage" in o ? o.onMessage : Fe),
                (We = "onReady" in o ? o.onReady : We),
                (ae = "targetOrigin" in o ? o.targetOrigin : ae),
                (R = "heightCalculationMethod" in o ? o.heightCalculationMethod : R),
                (j = "widthCalculationMethod" in o ? o.widthCalculationMethod : j));
            }
            function i(o, d) {
              return (
                typeof o == "function" &&
                  (e("Setup custom " + d + "CalcMethod"), (me[d] = o), (o = "custom")),
                o
              );
            }
            ("iFrameResizer" in window &&
              Object === window.iFrameResizer.constructor &&
              (t(), (R = i(R, "height")), (j = i(j, "width"))),
              e("TargetOrigin for parent set to: " + ae));
          }
          function U(t, i) {
            return (
              i.indexOf("-") !== -1 && (r("Negative CSS value ignored for " + t), (i = "")),
              i
            );
          }
          function Y(t, i) {
            M !== i &&
              i !== "" &&
              i !== "null" &&
              ((document.body.style[t] = i), e("Body " + t + ' set to "' + i + '"'));
          }
          function K() {
            (M === ve && (ve = ee + "px"), Y("margin", U("margin", ve)));
          }
          function Z() {
            ((document.documentElement.style.height = ""),
              (document.body.style.height = ""),
              e('HTML & body height set to "auto"'));
          }
          function F(t) {
            var i = {
              add: function (o) {
                function d() {
                  N(t.eventName, t.eventType);
                }
                ((he[o] = d), ie(window, o, d, { passive: !0 }));
              },
              remove: function (o) {
                var d = he[o];
                (delete he[o], _e(window, o, d));
              },
            };
            (t.eventNames && Array.prototype.map
              ? ((t.eventName = t.eventNames[0]), t.eventNames.map(i[t.method]))
              : i[t.method](t.eventName),
              e(Qe(t.method) + " event listener: " + t.eventType));
          }
          function Oe(t) {
            (F({
              method: t,
              eventType: "Animation Start",
              eventNames: ["animationstart", "webkitAnimationStart"],
            }),
              F({
                method: t,
                eventType: "Animation Iteration",
                eventNames: ["animationiteration", "webkitAnimationIteration"],
              }),
              F({
                method: t,
                eventType: "Animation End",
                eventNames: ["animationend", "webkitAnimationEnd"],
              }),
              F({ method: t, eventType: "Input", eventName: "input" }),
              F({ method: t, eventType: "Mouse Up", eventName: "mouseup" }),
              F({ method: t, eventType: "Mouse Down", eventName: "mousedown" }),
              F({ method: t, eventType: "Orientation Change", eventName: "orientationchange" }),
              F({ method: t, eventType: "Print", eventNames: ["afterprint", "beforeprint"] }),
              F({ method: t, eventType: "Ready State Change", eventName: "readystatechange" }),
              F({ method: t, eventType: "Touch Start", eventName: "touchstart" }),
              F({ method: t, eventType: "Touch End", eventName: "touchend" }),
              F({ method: t, eventType: "Touch Cancel", eventName: "touchcancel" }),
              F({
                method: t,
                eventType: "Transition Start",
                eventNames: [
                  "transitionstart",
                  "webkitTransitionStart",
                  "MSTransitionStart",
                  "oTransitionStart",
                  "otransitionstart",
                ],
              }),
              F({
                method: t,
                eventType: "Transition Iteration",
                eventNames: [
                  "transitioniteration",
                  "webkitTransitionIteration",
                  "MSTransitionIteration",
                  "oTransitionIteration",
                  "otransitioniteration",
                ],
              }),
              F({
                method: t,
                eventType: "Transition End",
                eventNames: [
                  "transitionend",
                  "webkitTransitionEnd",
                  "MSTransitionEnd",
                  "oTransitionEnd",
                  "otransitionend",
                ],
              }),
              Le === "child" && F({ method: t, eventType: "IFrame Resized", eventName: "resize" }));
          }
          function pe(t, i, o, d) {
            return (
              i !== t &&
                (t in o ||
                  (r(t + " is not a valid option for " + d + "CalculationMethod."), (t = i)),
                e(d + ' calculation method set to "' + t + '"')),
              t
            );
          }
          function ze() {
            R = pe(R, fe, p, "height");
          }
          function Ie() {
            j = pe(j, Ae, y, "width");
          }
          function Re() {
            W === !0 ? (Oe("add"), je()) : e("Auto Resize disabled");
          }
          function s() {
            xe !== null && xe.disconnect();
          }
          function c() {
            (Oe("remove"), s(), clearInterval(De));
          }
          function I() {
            var t = document.createElement("div");
            ((t.style.clear = "both"),
              (t.style.display = "block"),
              (t.style.height = "0"),
              document.body.appendChild(t));
          }
          function S() {
            function t() {
              return {
                x:
                  window.pageXOffset === M
                    ? document.documentElement.scrollLeft
                    : window.pageXOffset,
                y:
                  window.pageYOffset === M
                    ? document.documentElement.scrollTop
                    : window.pageYOffset,
              };
            }
            function i(E) {
              var z = E.getBoundingClientRect(),
                O = t();
              return {
                x: parseInt(z.left, 10) + parseInt(O.x, 10),
                y: parseInt(z.top, 10) + parseInt(O.y, 10),
              };
            }
            function o(E) {
              function z(G) {
                var ke = i(G);
                (e("Moving to in page link (#" + O + ") at x: " + ke.x + " y: " + ke.y),
                  J(ke.y, ke.x, "scrollToOffset"));
              }
              var O = E.split("#")[1] || E,
                v = decodeURIComponent(O),
                _ = document.getElementById(v) || document.getElementsByName(v)[0];
              M === _
                ? (e("In page link (#" + O + ") not found in iFrame, so sending to parent"),
                  J(0, 0, "inPageLink", "#" + O))
                : z(_);
            }
            function d() {
              var E = window.location.hash,
                z = window.location.href;
              E !== "" && E !== "#" && o(z);
            }
            function T() {
              function E(z) {
                function O(v) {
                  (v.preventDefault(), o(this.getAttribute("href")));
                }
                z.getAttribute("href") !== "#" && ie(z, "click", O);
              }
              Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), E);
            }
            function x() {
              ie(window, "hashchange", d);
            }
            function A() {
              setTimeout(d, X);
            }
            function P() {
              Array.prototype.forEach && document.querySelectorAll
                ? (e("Setting up location.hash handlers"), T(), x(), A())
                : r(
                    "In page linking not fully supported in this browser! (See README.md for IE8 workaround)",
                  );
            }
            return (le.enable ? P() : e("In page linking not enabled"), { findTarget: o });
          }
          function B() {
            if (ye !== !0) return;
            function t(o) {
              J(0, 0, o.type, o.screenY + ":" + o.screenX);
            }
            function i(o, d) {
              (e("Add event listener: " + d), ie(window.document, o, t));
            }
            (i("mouseenter", "Mouse Enter"), i("mouseleave", "Mouse Leave"));
          }
          function oe() {
            (e("Enable public methods"),
              (V.parentIFrame = {
                autoResize: function (i) {
                  return (
                    i === !0 && W === !1
                      ? ((W = !0), Re())
                      : i === !1 && W === !0 && ((W = !1), c()),
                    J(0, 0, "autoResize", JSON.stringify(W)),
                    W
                  );
                },
                close: function () {
                  J(0, 0, "close");
                },
                getId: function () {
                  return H;
                },
                getPageInfo: function (i) {
                  typeof i == "function"
                    ? ((Ee = i), J(0, 0, "pageInfo"))
                    : ((Ee = function () {}), J(0, 0, "pageInfoStop"));
                },
                moveToAnchor: function (i) {
                  le.findTarget(i);
                },
                reset: function () {
                  et("parentIFrame.reset");
                },
                scrollTo: function (i, o) {
                  J(o, i, "scrollTo");
                },
                scrollToOffset: function (i, o) {
                  J(o, i, "scrollToOffset");
                },
                sendMessage: function (i, o) {
                  J(0, 0, "message", JSON.stringify(i), o);
                },
                setHeightCalculationMethod: function (i) {
                  ((R = i), ze());
                },
                setWidthCalculationMethod: function (i) {
                  ((j = i), Ie());
                },
                setTargetOrigin: function (i) {
                  (e("Set targetOrigin: " + i), (ae = i));
                },
                size: function (i, o) {
                  var d = "" + (i || "") + (o ? "," + o : "");
                  N("size", "parentIFrame.size(" + d + ")", i, o);
                },
              }));
          }
          function we() {
            ne !== 0 &&
              (e("setInterval: " + ne + "ms"),
              (De = setInterval(function () {
                N("interval", "setInterval: " + ne);
              }, Math.abs(ne))));
          }
          function He() {
            function t(v) {
              function _(G) {
                G.complete === !1 &&
                  (e("Attach listeners to " + G.src),
                  G.addEventListener("load", T, !1),
                  G.addEventListener("error", x, !1),
                  E.push(G));
              }
              v.type === "attributes" && v.attributeName === "src"
                ? _(v.target)
                : v.type === "childList" &&
                  Array.prototype.forEach.call(v.target.querySelectorAll("img"), _);
            }
            function i(v) {
              E.splice(E.indexOf(v), 1);
            }
            function o(v) {
              (e("Remove listeners from " + v.src),
                v.removeEventListener("load", T, !1),
                v.removeEventListener("error", x, !1),
                i(v));
            }
            function d(v, _, G) {
              (o(v.target), N(_, G + ": " + v.target.src));
            }
            function T(v) {
              d(v, "imageLoad", "Image loaded");
            }
            function x(v) {
              d(v, "imageLoadFailed", "Image load failed");
            }
            function A(v) {
              (N("mutationObserver", "mutationObserver: " + v[0].target + " " + v[0].type),
                v.forEach(t));
            }
            function P() {
              var v = document.querySelector("body"),
                _ = {
                  attributes: !0,
                  attributeOldValue: !1,
                  characterData: !0,
                  characterDataOldValue: !1,
                  childList: !0,
                  subtree: !0,
                };
              return ((O = new z(A)), e("Create body MutationObserver"), O.observe(v, _), O);
            }
            var E = [],
              z = window.MutationObserver || window.WebKitMutationObserver,
              O = P();
            return {
              disconnect: function () {
                "disconnect" in O &&
                  (e("Disconnect body MutationObserver"), O.disconnect(), E.forEach(o));
              },
            };
          }
          function je() {
            var t = 0 > ne;
            window.MutationObserver || window.WebKitMutationObserver
              ? t
                ? we()
                : (xe = He())
              : (e("MutationObserver not supported in this browser!"), we());
          }
          function be(t, i) {
            var o = 0;
            return (
              (i = i || document.body),
              (o = document.defaultView.getComputedStyle(i, null)),
              (o = o === null ? 0 : o[t]),
              parseInt(o, D)
            );
          }
          function q(t) {
            t > se / 2 && ((se = 2 * t), e("Event throttle increased to " + se + "ms"));
          }
          function b(t, i) {
            for (var o = i.length, d = 0, T = 0, x = Qe(t), A = Date.now(), P = 0; P < o; P++)
              ((d = i[P].getBoundingClientRect()[t] + be("margin" + x, i[P])), d > T && (T = d));
            return (
              (A = Date.now() - A),
              e("Parsed " + o + " HTML elements"),
              e("Element position calculated in " + A + "ms"),
              q(A),
              T
            );
          }
          function f(t) {
            return [
              t.bodyOffset(),
              t.bodyScroll(),
              t.documentElementOffset(),
              t.documentElementScroll(),
            ];
          }
          function a(t, i) {
            function o() {
              return (
                r("No tagged elements (" + i + ") found on page"),
                document.querySelectorAll("body *")
              );
            }
            var d = document.querySelectorAll("[" + i + "]");
            return (d.length === 0 && o(), b(t, d));
          }
          function l() {
            return document.querySelectorAll("body *");
          }
          var p = {
              bodyOffset: function () {
                return document.body.offsetHeight + be("marginTop") + be("marginBottom");
              },
              offset: function () {
                return p.bodyOffset();
              },
              bodyScroll: function () {
                return document.body.scrollHeight;
              },
              custom: function () {
                return me.height();
              },
              documentElementOffset: function () {
                return document.documentElement.offsetHeight;
              },
              documentElementScroll: function () {
                return document.documentElement.scrollHeight;
              },
              max: function () {
                return Math.max.apply(null, f(p));
              },
              min: function () {
                return Math.min.apply(null, f(p));
              },
              grow: function () {
                return p.max();
              },
              lowestElement: function () {
                return Math.max(p.bodyOffset() || p.documentElementOffset(), b("bottom", l()));
              },
              taggedElement: function () {
                return a("bottom", "data-iframe-height");
              },
            },
            y = {
              bodyScroll: function () {
                return document.body.scrollWidth;
              },
              bodyOffset: function () {
                return document.body.offsetWidth;
              },
              custom: function () {
                return me.width();
              },
              documentElementScroll: function () {
                return document.documentElement.scrollWidth;
              },
              documentElementOffset: function () {
                return document.documentElement.offsetWidth;
              },
              scroll: function () {
                return Math.max(y.bodyScroll(), y.documentElementScroll());
              },
              max: function () {
                return Math.max.apply(null, f(y));
              },
              min: function () {
                return Math.min.apply(null, f(y));
              },
              rightMostElement: function () {
                return b("right", l());
              },
              taggedElement: function () {
                return a("right", "data-iframe-width");
              },
            };
          function k(t, i, o, d) {
            function T() {
              ((n = O), (ue = v), J(n, ue, t));
            }
            function x() {
              function _(G, ke) {
                var st = Math.abs(G - ke) <= de;
                return !st;
              }
              return (
                (O = M === o ? p[R]() : o),
                (v = M === d ? y[j]() : d),
                _(n, O) || (re && _(ue, v))
              );
            }
            function A() {
              return !(t in { init: 1, interval: 1, size: 1 });
            }
            function P() {
              return R in Me || (re && j in Me);
            }
            function E() {
              e("No change in size detected");
            }
            function z() {
              A() && P() ? et(i) : t in { interval: 1 } || E();
            }
            var O, v;
            x() || t === "init" ? (Be(), T()) : z();
          }
          var L = Xe(k);
          function N(t, i, o, d) {
            function T() {
              t in { reset: 1, resetPage: 1, init: 1 } || e("Trigger event: " + i);
            }
            function x() {
              return ge && t in C;
            }
            x()
              ? e("Trigger event cancelled: " + t)
              : (T(), t === "init" ? k(t, i, o, d) : L(t, i, o, d));
          }
          function Be() {
            (ge || ((ge = !0), e("Trigger event lock on")),
              clearTimeout(Ne),
              (Ne = setTimeout(function () {
                ((ge = !1), e("Trigger event lock off"), e("--"));
              }, X)));
          }
          function $e(t) {
            ((n = p[R]()), (ue = y[j]()), J(n, ue, t));
          }
          function et(t) {
            var i = R;
            ((R = fe), e("Reset trigger event: " + t), Be(), $e("reset"), (R = i));
          }
          function J(t, i, o, d, T) {
            function x() {
              M === T ? (T = ae) : e("Message targetOrigin: " + T);
            }
            function A() {
              var P = t + ":" + i,
                E = H + ":" + P + ":" + o + (M === d ? "" : ":" + d);
              (e("Sending message to host page (" + E + ")"), Te.postMessage(g + E, T));
            }
            (x(), A());
          }
          function tt(t) {
            var i = {
              init: function () {
                ((te = t.data),
                  (Te = t.source),
                  m(),
                  (qe = !1),
                  setTimeout(function () {
                    Se = !1;
                  }, X));
              },
              reset: function () {
                Se
                  ? e("Page reset ignored by init")
                  : (e("Page size reset by host page"), $e("resetPage"));
              },
              resize: function () {
                N("resizeParent", "Parent window requested size check");
              },
              moveToAnchor: function () {
                le.findTarget(T());
              },
              inPageLink: function () {
                this.moveToAnchor();
              },
              pageInfo: function () {
                var O = T();
                (e("PageInfoFromParent called from parent: " + O), Ee(JSON.parse(O)), e(" --"));
              },
              message: function () {
                var O = T();
                (e("onMessage called from parent: " + O), Fe(JSON.parse(O)), e(" --"));
              },
            };
            function o() {
              return g === ("" + t.data).slice(0, Ce);
            }
            function d() {
              return t.data.split("]")[1].split(":")[0];
            }
            function T() {
              return t.data.slice(t.data.indexOf(":") + 1);
            }
            function x() {
              return (
                (!$.exports && "iFrameResize" in window) ||
                (window.jQuery !== M && "iFrameResize" in window.jQuery.prototype)
              );
            }
            function A() {
              return t.data.split(":")[2] in { true: 1, false: 1 };
            }
            function P() {
              var z = d();
              z in i ? i[z]() : !x() && !A() && r("Unexpected message (" + t.data + ")");
            }
            function E() {
              qe === !1
                ? P()
                : A()
                  ? i.init()
                  : e('Ignored message of type "' + d() + '". Received before initialization.');
            }
            o() && E();
          }
          function nt() {
            document.readyState !== "loading" &&
              window.parent.postMessage("[iFrameResizerChild]Ready", "*");
          }
          "iframeResizer" in window ||
            ((window.iframeChildListener = function (t) {
              tt({ data: t });
            }),
            ie(window, "message", tt),
            ie(window, "readystatechange", nt),
            nt());
        })();
      })(Ze)),
    Ze.exports
  );
}
var Ge, rt;
function dt() {
  if (rt) return Ge;
  rt = 1;
  const $ = ft();
  return ((Ge = { iframeResize: $, iframeResizer: $, contentWindow: lt() }), Ge);
}
var at = dt();
const gt = ut(at),
  ht = ct({ __proto__: null, default: gt }, [at]);
export { ht as i };
