const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-fFk08U1Y.js",
      "./react-dom-vendor-mZoKt2nW.js",
      "./client-core-vendor-CC-5grB7.js",
      "./lodash-vendor-DZoGCnbE.js",
      "./body-BBWlFbG-.css",
    ]),
) => i.map((i) => d[i]);
var fh = Object.defineProperty;
var vh = (e, t, r) =>
  t in e ? fh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r);
var ar = (e, t, r) => vh(e, typeof t != "symbol" ? t + "" : t, r);
import { r as _t, a as Do, c as ph } from "./react-dom-vendor-mZoKt2nW.js";
import { g as Rr, a as Rs, r as lr, s as rt } from "./client-core-vendor-CC-5grB7.js";
import { r as hh } from "./lodash-vendor-DZoGCnbE.js";
function gh(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const a in n)
        if (a !== "default" && !(a in e)) {
          const o = Object.getOwnPropertyDescriptor(n, a);
          o && Object.defineProperty(e, a, o.get ? o : { enumerable: !0, get: () => n[a] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) n(a);
  new MutationObserver((a) => {
    for (const o of a)
      if (o.type === "childList")
        for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(a) {
    const o = {};
    return (
      a.integrity && (o.integrity = a.integrity),
      a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : a.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function n(a) {
    if (a.ep) return;
    a.ep = !0;
    const o = r(a);
    fetch(a.href, o);
  }
})();
var si = { exports: {} },
  gn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uc;
function bh() {
  if (uc) return gn;
  uc = 1;
  var e = _t(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(c, s, l) {
    var u,
      d = {},
      f = null,
      v = null;
    l !== void 0 && (f = "" + l),
      s.key !== void 0 && (f = "" + s.key),
      s.ref !== void 0 && (v = s.ref);
    for (u in s) n.call(s, u) && !o.hasOwnProperty(u) && (d[u] = s[u]);
    if (c && c.defaultProps) for (u in ((s = c.defaultProps), s)) d[u] === void 0 && (d[u] = s[u]);
    return { $$typeof: t, type: c, key: f, ref: v, props: d, _owner: a.current };
  }
  return (gn.Fragment = r), (gn.jsx = i), (gn.jsxs = i), gn;
}
var dc;
function mh() {
  return dc || ((dc = 1), (si.exports = bh())), si.exports;
}
var C = mh(),
  m = _t();
const k = Rr(m),
  fc = gh({ __proto__: null, default: k }, [m]);
var ci = {},
  Ki = function (e, t) {
    return (
      (Ki =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      Ki(e, t)
    );
  };
function Xd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ki(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var uo = function () {
  return (
    (uo =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    uo.apply(this, arguments)
  );
};
function Zd(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function Qd(e, t, r, n) {
  var a = arguments.length,
    o = a < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, r, n);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (i = e[c]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, r, o) : i(t, r)) || o);
  return a > 3 && o && Object.defineProperty(t, r, o), o;
}
function ef(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function tf(e, t, r, n, a, o) {
  function i(b) {
    if (b !== void 0 && typeof b != "function") throw new TypeError("Function expected");
    return b;
  }
  for (
    var c = n.kind,
      s = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      l = !t && e ? (n.static ? e : e.prototype) : null,
      u = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}),
      d,
      f = !1,
      v = r.length - 1;
    v >= 0;
    v--
  ) {
    var h = {};
    for (var p in n) h[p] = p === "access" ? {} : n[p];
    for (var p in n.access) h.access[p] = n.access[p];
    h.addInitializer = function (b) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(i(b || null));
    };
    var g = (0, r[v])(c === "accessor" ? { get: u.get, set: u.set } : u[s], h);
    if (c === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      (d = i(g.get)) && (u.get = d), (d = i(g.set)) && (u.set = d), (d = i(g.init)) && a.unshift(d);
    } else (d = i(g)) && (c === "field" ? a.unshift(d) : (u[s] = d));
  }
  l && Object.defineProperty(l, n.name, u), (f = !0);
}
function rf(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function nf(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function af(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function of(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function sf(e, t, r, n) {
  function a(o) {
    return o instanceof r
      ? o
      : new r(function (i) {
          i(o);
        });
  }
  return new (r || (r = Promise))(function (o, i) {
    function c(u) {
      try {
        l(n.next(u));
      } catch (d) {
        i(d);
      }
    }
    function s(u) {
      try {
        l(n.throw(u));
      } catch (d) {
        i(d);
      }
    }
    function l(u) {
      u.done ? o(u.value) : a(u.value).then(c, s);
    }
    l((n = n.apply(e, t || [])).next());
  });
}
function cf(e, t) {
  var r = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    n,
    a,
    o,
    i = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (i.next = c(0)),
    (i.throw = c(1)),
    (i.return = c(2)),
    typeof Symbol == "function" &&
      (i[Symbol.iterator] = function () {
        return this;
      }),
    i
  );
  function c(l) {
    return function (u) {
      return s([l, u]);
    };
  }
  function s(l) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; i && ((i = 0), l[0] && (r = 0)), r; )
      try {
        if (
          ((n = 1),
          a &&
            (o =
              l[0] & 2 ? a.return : l[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) &&
            !(o = o.call(a, l[1])).done)
        )
          return o;
        switch (((a = 0), o && (l = [l[0] & 2, o.value]), l[0])) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, (a = l[1]), (l = [0]);
            continue;
          case 7:
            (l = r.ops.pop()), r.trys.pop();
            continue;
          default:
            if (
              ((o = r.trys), !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!o || (l[1] > o[0] && l[1] < o[3]))) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < o[1]) {
              (r.label = o[1]), (o = l);
              break;
            }
            if (o && r.label < o[2]) {
              (r.label = o[2]), r.ops.push(l);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = t.call(e, r);
      } catch (u) {
        (l = [6, u]), (a = 0);
      } finally {
        n = o = 0;
      }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
var To = Object.create
  ? function (e, t, r, n) {
      n === void 0 && (n = r);
      var a = Object.getOwnPropertyDescriptor(t, r);
      (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) &&
        (a = {
          enumerable: !0,
          get: function () {
            return t[r];
          },
        }),
        Object.defineProperty(e, n, a);
    }
  : function (e, t, r, n) {
      n === void 0 && (n = r), (e[n] = t[r]);
    };
function lf(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && To(t, e, r);
}
function fo(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    r = t && e[t],
    n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function As(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e),
    a,
    o = [],
    i;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) o.push(a.value);
  } catch (c) {
    i = { error: c };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (i) throw i.error;
    }
  }
  return o;
}
function uf() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(As(arguments[t]));
  return e;
}
function df() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var o = arguments[t], i = 0, c = o.length; i < c; i++, a++) n[a] = o[i];
  return n;
}
function ff(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function en(e) {
  return this instanceof en ? ((this.v = e), this) : new en(e);
}
function vf(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []),
    a,
    o = [];
  return (
    (a = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    c("next"),
    c("throw"),
    c("return", i),
    (a[Symbol.asyncIterator] = function () {
      return this;
    }),
    a
  );
  function i(v) {
    return function (h) {
      return Promise.resolve(h).then(v, d);
    };
  }
  function c(v, h) {
    n[v] &&
      ((a[v] = function (p) {
        return new Promise(function (g, b) {
          o.push([v, p, g, b]) > 1 || s(v, p);
        });
      }),
      h && (a[v] = h(a[v])));
  }
  function s(v, h) {
    try {
      l(n[v](h));
    } catch (p) {
      f(o[0][3], p);
    }
  }
  function l(v) {
    v.value instanceof en ? Promise.resolve(v.value.v).then(u, d) : f(o[0][2], v);
  }
  function u(v) {
    s("next", v);
  }
  function d(v) {
    s("throw", v);
  }
  function f(v, h) {
    v(h), o.shift(), o.length && s(o[0][0], o[0][1]);
  }
}
function pf(e) {
  var t, r;
  return (
    (t = {}),
    n("next"),
    n("throw", function (a) {
      throw a;
    }),
    n("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function n(a, o) {
    t[a] = e[a]
      ? function (i) {
          return (r = !r) ? { value: en(e[a](i)), done: !1 } : o ? o(i) : i;
        }
      : o;
  }
}
function hf(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof fo == "function" ? fo(e) : e[Symbol.iterator]()),
      (r = {}),
      n("next"),
      n("throw"),
      n("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(o) {
    r[o] =
      e[o] &&
      function (i) {
        return new Promise(function (c, s) {
          (i = e[o](i)), a(c, s, i.done, i.value);
        });
      };
  }
  function a(o, i, c, s) {
    Promise.resolve(s).then(function (l) {
      o({ value: l, done: c });
    }, i);
  }
}
function gf(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
}
var yh = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Yi = function (e) {
    return (
      (Yi =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      Yi(e)
    );
  };
function bf(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = Yi(e), n = 0; n < r.length; n++) r[n] !== "default" && To(t, e, r[n]);
  return yh(t, e), t;
}
function mf(e) {
  return e && e.__esModule ? e : { default: e };
}
function yf(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function _f(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r;
}
function wf(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function kf(e, t, r) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var n, a;
    if (r) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      n = t[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      (n = t[Symbol.dispose]), r && (a = n);
    }
    if (typeof n != "function") throw new TypeError("Object not disposable.");
    a &&
      (n = function () {
        try {
          a.call(this);
        } catch (o) {
          return Promise.reject(o);
        }
      }),
      e.stack.push({ value: t, dispose: n, async: r });
  } else r && e.stack.push({ async: !0 });
  return t;
}
var _h =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return (n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n;
      };
function Of(e) {
  function t(o) {
    (e.error = e.hasError ? new _h(o, e.error, "An error was suppressed during disposal.") : o),
      (e.hasError = !0);
  }
  var r,
    n = 0;
  function a() {
    for (; (r = e.stack.pop()); )
      try {
        if (!r.async && n === 1) return (n = 0), e.stack.push(r), Promise.resolve().then(a);
        if (r.dispose) {
          var o = r.dispose.call(r.value);
          if (r.async)
            return (
              (n |= 2),
              Promise.resolve(o).then(a, function (i) {
                return t(i), a();
              })
            );
        } else n |= 1;
      } catch (i) {
        t(i);
      }
    if (n === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return a();
}
function Sf(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (r, n, a, o, i) {
        return n
          ? t
            ? ".jsx"
            : ".js"
          : a && (!o || !i)
            ? r
            : a + o + "." + i.toLowerCase() + "js";
      })
    : e;
}
const wh = {
    __extends: Xd,
    __assign: uo,
    __rest: Zd,
    __decorate: Qd,
    __param: ef,
    __esDecorate: tf,
    __runInitializers: rf,
    __propKey: nf,
    __setFunctionName: af,
    __metadata: of,
    __awaiter: sf,
    __generator: cf,
    __createBinding: To,
    __exportStar: lf,
    __values: fo,
    __read: As,
    __spread: uf,
    __spreadArrays: df,
    __spreadArray: ff,
    __await: en,
    __asyncGenerator: vf,
    __asyncDelegator: pf,
    __asyncValues: hf,
    __makeTemplateObject: gf,
    __importStar: bf,
    __importDefault: mf,
    __classPrivateFieldGet: yf,
    __classPrivateFieldSet: _f,
    __classPrivateFieldIn: wf,
    __addDisposableResource: kf,
    __disposeResources: Of,
    __rewriteRelativeImportExtension: Sf,
  },
  kh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: kf,
        get __assign() {
          return uo;
        },
        __asyncDelegator: pf,
        __asyncGenerator: vf,
        __asyncValues: hf,
        __await: en,
        __awaiter: sf,
        __classPrivateFieldGet: yf,
        __classPrivateFieldIn: wf,
        __classPrivateFieldSet: _f,
        __createBinding: To,
        __decorate: Qd,
        __disposeResources: Of,
        __esDecorate: tf,
        __exportStar: lf,
        __extends: Xd,
        __generator: cf,
        __importDefault: mf,
        __importStar: bf,
        __makeTemplateObject: gf,
        __metadata: of,
        __param: ef,
        __propKey: nf,
        __read: As,
        __rest: Zd,
        __rewriteRelativeImportExtension: Sf,
        __runInitializers: rf,
        __setFunctionName: af,
        __spread: uf,
        __spreadArray: ff,
        __spreadArrays: df,
        __values: fo,
        default: wh,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  rr = Rs(kh);
var bn = {},
  vc;
function Oh() {
  return (
    vc ||
      ((vc = 1),
      Object.defineProperty(bn, "__esModule", { value: !0 }),
      (bn.NavigationTarget = void 0),
      (bn.NavigationTarget = {
        ContentView: "contentView",
        ContentEdit: "contentEdit",
        ContentList: "contentList",
        SpaceView: "spaceView",
        Module: "module",
        UserProfile: "userProfile",
        Dashboard: "dashboard",
        Issue: "issue",
        ProjectSettingsDetails: "projectSettingsDetails",
      })),
    bn
  );
}
var li = {},
  mn = {},
  yn = {},
  _n = {},
  pc;
function zt() {
  if (pc) return _n;
  (pc = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.BridgeAPIError = void 0);
  class e extends Error {}
  return (_n.BridgeAPIError = e), _n;
}
var hc;
function Be() {
  if (hc) return yn;
  (hc = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.getCallBridge = void 0);
  const e = zt();
  function t(n) {
    return !!(n != null && n.callBridge);
  }
  const r = () => {
    if (!t(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return (yn.getCallBridge = r), yn;
}
var wn = {},
  gc;
function xf() {
  if (gc) return wn;
  (gc = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.withRateLimiter = void 0);
  const e = zt(),
    t = (r, n, a, o) => {
      let i = Date.now(),
        c = 0;
      return async (...s) => {
        const l = Date.now();
        if ((l - i > a && ((i = l), (c = 0)), c >= n))
          throw new e.BridgeAPIError(o || "Too many invocations.");
        return (c = c + 1), r(...s);
      };
    };
  return (wn.withRateLimiter = t), wn;
}
var bc;
function Sh() {
  if (bc) return mn;
  (bc = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.invoke = void 0);
  const e = Be(),
    t = zt(),
    r = xf(),
    n = (0, e.getCallBridge)(),
    a = (i) => {
      if (i && Object.values(i).some((c) => typeof c == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    o = (i, c) => {
      if (typeof i != "string") throw new t.BridgeAPIError("functionKey must be a string!");
      return a(c), n("invoke", { functionKey: i, payload: c });
    };
  return (
    (mn.invoke = (0, r.withRateLimiter)(
      o,
      500,
      1e3 * 25,
      "Resolver calls are rate limited at 500req/25s",
    )),
    mn
  );
}
var mc;
function xh() {
  return (
    mc ||
      ((mc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), rr.__exportStar(Sh(), e);
      })(li)),
    li
  );
}
var ui = {},
  kn = {},
  yc;
function Eh() {
  if (yc) return kn;
  (yc = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.invokeRemote = void 0);
  const e = Be(),
    t = zt(),
    r = xf(),
    n = 500,
    a = 1e3 * 25,
    o = (0, e.getCallBridge)(),
    i = (s) => {
      if (s && Object.values(s).some((l) => typeof l == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = async (s) => {
      var l;
      i(s);
      const {
          success: u,
          payload: d,
          error: f,
        } = (l = await o("invoke", s)) !== null && l !== void 0 ? l : {},
        v = { ...(u ? d : f) };
      if (v && v.headers)
        for (const h in v.headers)
          Array.isArray(v.headers[h]) && (v.headers[h] = v.headers[h].join(","));
      return v;
    };
  return (
    (kn.invokeRemote = (0, r.withRateLimiter)(
      c,
      n,
      a,
      "Remote invocation calls are rate limited at 500req/25s",
    )),
    kn
  );
}
var _c;
function Ch() {
  return (
    _c ||
      ((_c = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), rr.__exportStar(Eh(), e);
      })(ui)),
    ui
  );
}
var di = {},
  On = {},
  Sn = {},
  wc;
function Ph() {
  if (wc) return Sn;
  (wc = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.submit = void 0);
  const e = Be(),
    t = zt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return (Sn.submit = n), Sn;
}
var xn = {},
  kc;
function Rh() {
  if (kc) return xn;
  (kc = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.close = void 0);
  const e = Be(),
    t = zt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        if ((await r("close", a)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return (xn.close = n), xn;
}
var En = {},
  Oc;
function Ah() {
  if (Oc) return En;
  (Oc = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.refresh = void 0);
  const e = Be(),
    t = zt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return (En.refresh = n), En;
}
var Cn = {},
  Sc;
function jh() {
  if (Sc) return Cn;
  (Sc = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.createHistory = void 0);
  const t = (0, Be().getCallBridge)(),
    r = async () => {
      const n = await t("createHistory");
      return (
        n.listen((a) => {
          n.location = a;
        }),
        n
      );
    };
  return (Cn.createHistory = r), Cn;
}
var Pn = {},
  fi = {},
  Vt = {},
  xc;
function Ef() {
  return (
    xc ||
      ((xc = 1),
      Object.defineProperty(Vt, "__esModule", { value: !0 }),
      (Vt.FORGE_SUPPORTED_LOCALE_CODES =
        Vt.I18N_BUNDLE_FOLDER_NAME =
        Vt.I18N_INFO_FILE_NAME =
          void 0),
      (Vt.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (Vt.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (Vt.FORGE_SUPPORTED_LOCALE_CODES = [
        "zh-CN",
        "zh-TW",
        "cs-CZ",
        "da-DK",
        "nl-NL",
        "en-US",
        "en-GB",
        "et-EE",
        "fi-FI",
        "fr-FR",
        "de-DE",
        "hu-HU",
        "is-IS",
        "it-IT",
        "ja-JP",
        "ko-KR",
        "no-NO",
        "pl-PL",
        "pt-BR",
        "pt-PT",
        "ro-RO",
        "ru-RU",
        "sk-SK",
        "tr-TR",
        "es-ES",
        "sv-SE",
      ])),
    Vt
  );
}
var vr = {},
  Ec;
function Ih() {
  if (Ec) return vr;
  (Ec = 1),
    Object.defineProperty(vr, "__esModule", { value: !0 }),
    (vr.TranslationsGetter = vr.TranslationGetterError = void 0);
  const e = (n, a) => {
    n.includes(a) || n.push(a);
  };
  class t extends Error {
    constructor(a) {
      super(a), (this.name = "TranslationGetterError");
    }
  }
  vr.TranslationGetterError = t;
  class r {
    constructor(a) {
      ar(this, "resourcesAccessor");
      ar(this, "i18nInfoConfig", null);
      ar(this, "translationResources", new Map());
      this.resourcesAccessor = a;
    }
    async getTranslations(a, o = { fallback: !0 }) {
      const i = await this.getI18nInfoConfig(),
        { fallback: c } = o;
      if (!c) {
        let s;
        return (
          i.locales.includes(a) && (s = await this.getTranslationResource(a)),
          { translations: s ?? null, locale: a }
        );
      }
      for (const s of this.getLocaleLookupOrder(a, i)) {
        const l = await this.getTranslationResource(s);
        if (l) return { translations: l, locale: s };
      }
      return { translations: null, locale: a };
    }
    async getTranslationsByLocaleLookupOrder(a) {
      const o = await this.getI18nInfoConfig(),
        i = this.getLocaleLookupOrder(a, o);
      return await Promise.all(
        i.map(async (c) => {
          const s = await this.getTranslationResource(c);
          return { locale: c, translations: s };
        }),
      );
    }
    reset() {
      (this.i18nInfoConfig = null), this.translationResources.clear();
    }
    async getTranslationResource(a) {
      let o = this.translationResources.get(a);
      if (!o)
        try {
          (o = await this.resourcesAccessor.getTranslationResource(a)),
            this.translationResources.set(a, o);
        } catch (i) {
          throw i instanceof t ? i : new t(`Failed to get translation resource for locale: ${a}`);
        }
      return o;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (a) {
          throw a instanceof t ? a : new t("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(a, o) {
      const { locales: i, fallback: c } = o,
        s = [a],
        l = c[a];
      return (
        l && Array.isArray(l) && l.length > 0 && s.push(...l),
        e(s, o.fallback.default),
        s.filter((u) => i.includes(u))
      );
    }
  }
  return (vr.TranslationsGetter = r), vr;
}
var Rn = {},
  vi = {},
  Cc;
function Cf() {
  return (
    Cc ||
      ((Cc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0);
        const r = rr.__importDefault(hh()),
          n = (o, i, c) => {
            const s = o[c];
            return s ? (0, e.getTranslationValueFromContent)(s, i) : null;
          };
        e.getTranslationValue = n;
        const a = (o, i) => {
          let c = o[i];
          if (!c) {
            const s = i.split(".");
            s.length > 1 && (c = (0, r.default)(o, s, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = a;
      })(vi)),
    vi
  );
}
var Pc;
function Dh() {
  if (Pc) return Rn;
  (Pc = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.Translator = void 0);
  const e = Cf();
  class t {
    constructor(n, a) {
      ar(this, "locale");
      ar(this, "translationsGetter");
      ar(this, "localeLookupOrderedTranslations", null);
      ar(this, "cache", new Map());
      (this.locale = n), (this.translationsGetter = a);
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(n) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let a = this.cache.get(n);
      if (a === void 0) {
        for (const { translations: o } of this.localeLookupOrderedTranslations) {
          const i = (0, e.getTranslationValueFromContent)(o, n);
          if (i !== null) {
            a = i;
            break;
          }
        }
        (a = a ?? null), this.cache.set(n, a);
      }
      return a;
    }
  }
  return (Rn.Translator = t), Rn;
}
var An = {},
  Rc;
function Th() {
  if (Rc) return An;
  (Rc = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.ensureLocale = void 0);
  const e = Ef(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    r = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    n = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (o, i) => {
        const [c] = i.split("-");
        return o[c] || (o[c] = i), o;
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    a = (o) => {
      const i = o.replace("_", "-");
      return t.has(i) ? i : (n[i] ?? r[i] ?? null);
    };
  return (An.ensureLocale = a), An;
}
var pi = {},
  Ac;
function Mh() {
  return (
    Ac ||
      ((Ac = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0);
        const t = (l) => typeof l == "object" && l !== null && !Array.isArray(l),
          r = (l) => typeof (l == null ? void 0 : l.i18n) == "string",
          n = (l) => l.startsWith("connect-"),
          a = (l) => l.startsWith("core:"),
          o = (l) => {
            const u = new Set(),
              d = (f, v) =>
                !t(f) || u.has(f)
                  ? []
                  : (u.add(f),
                    Object.entries(f).flatMap(([h, p]) => {
                      const g = [...v, h];
                      return r(p)
                        ? [{ propertyPath: g, key: p.i18n }]
                        : Array.isArray(p)
                          ? p.flatMap((b) => d(b, g))
                          : d(p, g);
                    }));
            return d(l, []);
          },
          i = (l) =>
            Object.entries(l).flatMap(([u, d]) =>
              !n(u) && !a(u) && d && Array.isArray(d) && d.length > 0 ? d.map((f) => [f, u]) : [],
            );
        e.getI18nSupportedModuleEntries = i;
        const c = (l) => {
          const u = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(l)) {
            const f = o(d[0]);
            for (const { key: v } of f) u.add(v);
          }
          return u.size > 0 ? Array.from(u) : [];
        };
        e.extractI18nKeysFromModules = c;
        const s = (l) => {
          const u = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(l)) {
            const f = o(d[0]);
            for (const v of f) u.push({ moduleName: d[1], ...v });
          }
          return u;
        };
        e.extractI18nPropertiesFromModules = s;
      })(pi)),
    pi
  );
}
var hi = {},
  jc;
function Lh() {
  return jc || ((jc = 1), Object.defineProperty(hi, "__esModule", { value: !0 })), hi;
}
var Ic;
function Pf() {
  return (
    Ic ||
      ((Ic = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0);
        const t = rr;
        t.__exportStar(Ef(), e),
          t.__exportStar(Ih(), e),
          t.__exportStar(Dh(), e),
          t.__exportStar(Th(), e);
        var r = Cf();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Mh();
        Object.defineProperty(e, "extractI18nKeysFromModules", {
          enumerable: !0,
          get: function () {
            return n.extractI18nKeysFromModules;
          },
        }),
          Object.defineProperty(e, "extractI18nPropertiesFromModules", {
            enumerable: !0,
            get: function () {
              return n.extractI18nPropertiesFromModules;
            },
          }),
          Object.defineProperty(e, "getI18nSupportedModuleEntries", {
            enumerable: !0,
            get: function () {
              return n.getI18nSupportedModuleEntries;
            },
          }),
          t.__exportStar(Lh(), e);
      })(fi)),
    fi
  );
}
var Dc;
function Nh() {
  if (Dc) return Pn;
  (Dc = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.getContext = void 0);
  const e = Be(),
    t = Pf(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const o = await r("getContext"),
        i = o == null ? void 0 : o.locale;
      return i && (o.locale = (a = (0, t.ensureLocale)(i)) !== null && a !== void 0 ? a : i), o;
    };
  return (Pn.getContext = n), Pn;
}
var jn = {},
  Tc;
function $h() {
  if (Tc) return jn;
  (Tc = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.changeWindowTitle = void 0);
  const e = Be(),
    t = zt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        await r("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return (jn.changeWindowTitle = n), jn;
}
var In = {},
  Mc;
function Fh() {
  if (Mc) return In;
  (Mc = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.theme = void 0);
  const t = (0, Be().getCallBridge)();
  return (In.theme = { enable: () => t("enableTheming") }), In;
}
var Lc;
function zh() {
  if (Lc) return On;
  (Lc = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.view = void 0);
  const e = Ph(),
    t = Rh(),
    r = Ah(),
    n = jh(),
    a = Nh(),
    o = $h(),
    i = Fh();
  return (
    (On.view = {
      submit: e.submit,
      close: t.close,
      refresh: r.refresh,
      createHistory: n.createHistory,
      getContext: a.getContext,
      theme: i.theme,
      changeWindowTitle: o.changeWindowTitle,
    }),
    On
  );
}
var Nc;
function Rf() {
  return (
    Nc ||
      ((Nc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), rr.__exportStar(zh(), e);
      })(di)),
    di
  );
}
var gi = {},
  Dn = {},
  $c;
function Bh() {
  if ($c) return Dn;
  ($c = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.router = void 0);
  const t = (0, Be().getCallBridge)(),
    r = async (o) => {
      if (typeof o == "string") return t("navigate", { url: o, type: "same-tab" });
      if (!(o != null && o.target)) throw new Error("target is required for navigation");
      return t("navigate", { ...o, type: "same-tab" });
    },
    n = async (o) => {
      if (typeof o == "string") return t("navigate", { url: o, type: "new-tab" });
      if (!(o != null && o.target)) throw new Error("target is required for navigation");
      return t("navigate", { ...o, type: "new-tab" });
    },
    a = async () => t("reload");
  return (Dn.router = { navigate: r, open: n, reload: a }), Dn;
}
var Fc;
function qh() {
  return (
    Fc ||
      ((Fc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), rr.__exportStar(Bh(), e);
      })(gi)),
    gi
  );
}
var bi = {},
  Tn = {},
  zc;
function Uh() {
  if (zc) return Tn;
  (zc = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.Modal = void 0);
  const e = Be(),
    t = zt(),
    r = (0, e.getCallBridge)(),
    n = () => {};
  class a {
    constructor(i) {
      var c, s;
      (this.resource = (i == null ? void 0 : i.resource) || null),
        (this.onClose = (i == null ? void 0 : i.onClose) || n),
        (this.size = (i == null ? void 0 : i.size) || "medium"),
        (this.context = (i == null ? void 0 : i.context) || {}),
        (this.closeOnEscape =
          (c = i == null ? void 0 : i.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick =
          (s = i == null ? void 0 : i.closeOnOverlayClick) !== null && s !== void 0 ? s : !0);
    }
    async open() {
      try {
        if (
          (await r("openModal", {
            resource: this.resource,
            onClose: this.onClose,
            size: this.size,
            context: this.context,
            closeOnEscape: this.closeOnEscape,
            closeOnOverlayClick: this.closeOnOverlayClick,
          })) === !1
        )
          throw new t.BridgeAPIError("Unable to open modal.");
      } catch {
        throw new t.BridgeAPIError("Unable to open modal.");
      }
    }
  }
  return (Tn.Modal = a), Tn;
}
var Bc;
function Vh() {
  return (
    Bc ||
      ((Bc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), rr.__exportStar(Uh(), e);
      })(bi)),
    bi
  );
}
var Gt = {},
  Mn = {},
  pr = {},
  qc;
function Gh() {
  if (qc) return pr;
  (qc = 1),
    Object.defineProperty(pr, "__esModule", { value: !0 }),
    (pr.blobToBase64 = pr.base64ToBlob = void 0);
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      o = atob(a),
      i = new Array(o.length);
    for (let s = 0; s < o.length; s++) i[s] = o.charCodeAt(s);
    const c = new Uint8Array(i);
    return new Blob([c], { type: n });
  };
  pr.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, a) => {
      const o = new FileReader();
      (o.onloadend = () => {
        n(o.result);
      }),
        (o.onerror = a),
        o.readAsDataURL(r);
    });
  return (pr.blobToBase64 = t), pr;
}
var Uc;
function Hh() {
  if (Uc) return Mn;
  (Uc = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.productFetchApi = void 0);
  const e = Gh(),
    t = async (a) => {
      const o = {};
      for (const [i, c] of a.entries())
        if (i === "file") {
          const s = c.name,
            l = c.type;
          (o.file = await (0, e.blobToBase64)(c)), (o.__fileName = s), (o.__fileType = l);
        } else o[i] = c;
      return JSON.stringify(o);
    },
    r = async (a) => {
      const o = (a == null ? void 0 : a.body) instanceof FormData,
        i = o ? await t(a == null ? void 0 : a.body) : a == null ? void 0 : a.body,
        c = new Request("", {
          body: i,
          method: a == null ? void 0 : a.method,
          headers: a == null ? void 0 : a.headers,
        }),
        s = Object.fromEntries(c.headers.entries());
      return {
        body: c.method !== "GET" ? await c.text() : null,
        headers: new Headers(s),
        isMultipartFormData: o,
      };
    },
    n = (a) => {
      const o = async (i, c, s) => {
        const { body: l, headers: u, isMultipartFormData: d } = await r(s);
        u.has("X-Atlassian-Token") || u.set("X-Atlassian-Token", "no-check");
        const f = {
            product: i,
            restPath: c,
            fetchRequestInit: { ...s, body: l, headers: [...u.entries()] },
            isMultipartFormData: d,
          },
          {
            body: v,
            headers: h,
            statusText: p,
            status: g,
            isAttachment: b,
          } = await a("fetchProduct", f),
          y = b ? (0, e.base64ToBlob)(v, h["content-type"]) : v;
        return new Response(y || null, { headers: h, status: g, statusText: p });
      };
      return {
        requestConfluence: (i, c) => o("confluence", i, c),
        requestJira: (i, c) => o("jira", i, c),
        requestBitbucket: (i, c) => o("bitbucket", i, c),
      };
    };
  return (Mn.productFetchApi = n), Mn;
}
var Vc;
function Wh() {
  if (Vc) return Gt;
  Vc = 1;
  var e;
  Object.defineProperty(Gt, "__esModule", { value: !0 }),
    (Gt.requestBitbucket = Gt.requestJira = Gt.requestConfluence = void 0);
  const t = Be();
  return (
    (e = (0, Hh().productFetchApi)((0, t.getCallBridge)())),
    (Gt.requestConfluence = e.requestConfluence),
    (Gt.requestJira = e.requestJira),
    (Gt.requestBitbucket = e.requestBitbucket),
    Gt
  );
}
var mi = {},
  Ln = {},
  Gc;
function Kh() {
  if (Gc) return Ln;
  (Gc = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.showFlag = void 0);
  const e = Be(),
    t = zt(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var o;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const i = r("showFlag", { ...a, type: (o = a.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await i, r("closeFlag", { id: a.id })) };
    };
  return (Ln.showFlag = n), Ln;
}
var Hc;
function Yh() {
  return (
    Hc ||
      ((Hc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0);
        var t = Kh();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(mi)),
    mi
  );
}
var yi = {},
  Nn = {},
  Wc;
function Jh() {
  if (Wc) return Nn;
  (Wc = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.events = void 0);
  const t = (0, Be().getCallBridge)(),
    r = (a, o) => t("emit", { event: a, payload: o }),
    n = (a, o) => t("on", { event: a, callback: o });
  return (Nn.events = { emit: r, on: n }), Nn;
}
var Kc;
function Xh() {
  return (
    Kc ||
      ((Kc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), rr.__exportStar(Jh(), e);
      })(yi)),
    yi
  );
}
var Ht = {},
  Yc;
function Zh() {
  if (Yc) return Ht;
  (Yc = 1),
    Object.defineProperty(Ht, "__esModule", { value: !0 }),
    (Ht.createTranslationFunction = Ht.getTranslations = Ht.resetTranslationsCache = void 0);
  const e = Pf(),
    t = Rf(),
    r = {
      getI18nInfoConfig: async () => {
        const c = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!c.ok) throw new Error("Failed to get i18n info config: " + c.statusText);
        return (await c.json()).config;
      },
      getTranslationResource: async (c) => {
        const s = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${c}.json`);
        if (!s.ok) throw new Error(`Failed to get translation resource for locale: ${c}`);
        return s.json();
      },
    },
    n = new e.TranslationsGetter(r),
    a = () => {
      n.reset();
    };
  Ht.resetTranslationsCache = a;
  const o = async (c = null, s = { fallback: !0 }) => {
    let l = c;
    return l || (l = (await t.view.getContext()).locale), await n.getTranslations(l, s);
  };
  Ht.getTranslations = o;
  const i = async (c = null) => {
    let s = c;
    s || (s = (await t.view.getContext()).locale);
    const l = new e.Translator(s, n);
    return (
      await l.init(),
      (u, d) => {
        var f, v;
        return (v = (f = l.translate(u)) !== null && f !== void 0 ? f : d) !== null && v !== void 0
          ? v
          : u;
      }
    );
  };
  return (Ht.createTranslationFunction = i), Ht;
}
var Jc;
function Qh() {
  return (
    Jc ||
      ((Jc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0);
        const t = rr;
        var r = Oh();
        Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(xh(), e),
          t.__exportStar(Ch(), e),
          t.__exportStar(Rf(), e),
          t.__exportStar(qh(), e),
          t.__exportStar(Vh(), e),
          t.__exportStar(Wh(), e),
          t.__exportStar(Yh(), e),
          t.__exportStar(Xh(), e),
          (e.i18n = t.__importStar(Zh()));
      })(ci)),
    ci
  );
}
var ma = Qh();
function Q(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw new Error(
    typeof e == "number"
      ? "[MobX] minified error nr: " +
        e +
        (r.length ? " " + r.map(String).join(",") : "") +
        ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
      : "[MobX] " + e,
  );
}
var eg = {};
function Mo() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : eg;
}
var Af = Object.assign,
  vo = Object.getOwnPropertyDescriptor,
  Dt = Object.defineProperty,
  Lo = Object.prototype,
  Ji = [];
Object.freeze(Ji);
var jf = {};
Object.freeze(jf);
var tg = typeof Proxy < "u",
  rg = Object.toString();
function If() {
  tg || Q("Proxy not available");
}
function Df(e) {
  var t = !1;
  return function () {
    if (!t) return (t = !0), e.apply(this, arguments);
  };
}
var Jr = function () {};
function mt(e) {
  return typeof e == "function";
}
function Or(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function No(e) {
  return e !== null && typeof e == "object";
}
function ur(e) {
  if (!No(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === rg;
}
function Tf(e) {
  var t = e == null ? void 0 : e.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function $o(e, t, r) {
  Dt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function Mf(e, t, r) {
  Dt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function Ar(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return No(n) && n[r] === !0;
    }
  );
}
function un(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function ng(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Xt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var Lf = typeof Object.getOwnPropertySymbols < "u";
function ag(e) {
  var t = Object.keys(e);
  if (!Lf) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Lo.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Fo =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : Lf
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function Nf(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Qt(e, t) {
  return Lo.hasOwnProperty.call(e, t);
}
var og =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Fo(t).forEach(function (n) {
        r[n] = vo(t, n);
      }),
      r
    );
  };
function We(e, t) {
  return !!(e & t);
}
function Ke(e, t, r) {
  return r ? (e |= t) : (e &= ~t), e;
}
function Xc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ig(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, cg(n.key), n);
  }
}
function dn(e, t, r) {
  return t && ig(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Xr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = lg(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sr() {
  return (
    (Sr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Sr.apply(null, arguments)
  );
}
function $f(e, t) {
  (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Xi(e, t);
}
function Xi(e, t) {
  return (
    (Xi = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    Xi(e, t)
  );
}
function sg(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function cg(e) {
  var t = sg(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function lg(e, t) {
  if (e) {
    if (typeof e == "string") return Xc(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Xc(e, t)
          : void 0
    );
  }
}
var It = Symbol("mobx-stored-annotations");
function Tt(e) {
  function t(r, n) {
    if (Ia(n)) return e.decorate_20223_(r, n);
    ja(r, n, e);
  }
  return Object.assign(t, e);
}
function ja(e, t, r) {
  Qt(e, It) || $o(e, It, Sr({}, e[It])), gg(r) || (e[It][t] = r);
}
function ug(e) {
  return Qt(e, It) || $o(e, It, Sr({}, e[It])), e[It];
}
function Ia(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var G = Symbol("mobx administration"),
  dr = (function () {
    function e(r) {
      r === void 0 && (r = "Atom"),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = te.NOT_TRACKING_),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        (this.name_ = r);
    }
    var t = e.prototype;
    return (
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (n) {
            return n();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (n) {
            return n();
          });
      }),
      (t.reportObserved = function () {
        return ev(this);
      }),
      (t.reportChanged = function () {
        st(), tv(this), ct();
      }),
      (t.toString = function () {
        return this.name_;
      }),
      dn(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return We(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return We(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return We(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
dr.isBeingObservedMask_ = 1;
dr.isPendingUnobservationMask_ = 2;
dr.diffValueMask_ = 4;
var js = Ar("Atom", dr);
function Ff(e, t, r) {
  t === void 0 && (t = Jr), r === void 0 && (r = Jr);
  var n = new dr(e);
  return t !== Jr && wb(n, t), r !== Jr && iv(n, r), n;
}
function dg(e, t) {
  return yv(e, t);
}
function fg(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var po = { structural: dg, default: fg };
function xr(e, t, r) {
  return uv(e)
    ? e
    : Array.isArray(e)
      ? ce.array(e, { name: r })
      : ur(e)
        ? ce.object(e, void 0, { name: r })
        : un(e)
          ? ce.map(e, { name: r })
          : Xt(e)
            ? ce.set(e, { name: r })
            : typeof e == "function" && !_a(e) && !wa(e)
              ? Tf(e)
                ? tn(e)
                : ya(r, e)
              : e;
}
function vg(e, t, r) {
  if (e == null || Wo(e) || Ho(e) || Ir(e) || jt(e)) return e;
  if (Array.isArray(e)) return ce.array(e, { name: r, deep: !1 });
  if (ur(e)) return ce.object(e, void 0, { name: r, deep: !1 });
  if (un(e)) return ce.map(e, { name: r, deep: !1 });
  if (Xt(e)) return ce.set(e, { name: r, deep: !1 });
}
function zo(e) {
  return e;
}
function pg(e, t) {
  return yv(e, t) ? t : e;
}
var hg = "override";
function gg(e) {
  return e.annotationType_ === hg;
}
function Da(e, t) {
  return { annotationType_: e, options_: t, make_: bg, extend_: mg, decorate_20223_: yg };
}
function bg(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (_a(r.value)) return 1;
  var o = zf(e, this, t, r, !1);
  return Dt(n, t, o), 2;
}
function mg(e, t, r, n) {
  var a = zf(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function yg(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    o = this,
    i = function (l) {
      var u, d, f, v;
      return Er(
        (u = (d = o.options_) == null ? void 0 : d.name) != null ? u : n.toString(),
        l,
        (f = (v = o.options_) == null ? void 0 : v.autoAction) != null ? f : !1,
      );
    };
  if (r == "field")
    return function (s) {
      var l,
        u = s;
      return (
        _a(u) || (u = i(u)),
        (l = o.options_) != null && l.bound && ((u = u.bind(this)), (u.isMobxAction = !0)),
        u
      );
    };
  if (r == "method") {
    var c;
    return (
      _a(e) || (e = i(e)),
      (c = this.options_) != null &&
        c.bound &&
        a(function () {
          var s = this,
            l = s[n].bind(s);
          (l.isMobxAction = !0), (s[n] = l);
        }),
      e
    );
  }
  Q(
    "Cannot apply '" +
      o.annotationType_ +
      "' to '" +
      String(n) +
      "' (kind: " +
      r +
      "):" +
      (`
'` +
        o.annotationType_ +
        "' can only be used on properties with a function value."),
  );
}
function _g(e, t, r, n) {
  t.annotationType_, n.value;
}
function zf(e, t, r, n, a) {
  var o, i, c, s, l, u, d;
  a === void 0 && (a = L.safeDescriptors), _g(e, t, r, n);
  var f = n.value;
  if ((o = t.options_) != null && o.bound) {
    var v;
    f = f.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return {
    value: Er(
      (i = (c = t.options_) == null ? void 0 : c.name) != null ? i : r.toString(),
      f,
      (s = (l = t.options_) == null ? void 0 : l.autoAction) != null ? s : !1,
      (u = t.options_) != null && u.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: a ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !a,
  };
}
function Bf(e, t) {
  return { annotationType_: e, options_: t, make_: wg, extend_: kg, decorate_20223_: Og };
}
function wg(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Qt(e.target_, t) || !wa(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (wa(r.value)) return 1;
  var o = qf(e, this, t, r, !1, !1);
  return Dt(n, t, o), 2;
}
function kg(e, t, r, n) {
  var a,
    o = qf(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, o, n);
}
function Og(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    wa(e) || (e = tn(e)),
    (r = this.options_) != null &&
      r.bound &&
      a(function () {
        var o = this,
          i = o[n].bind(o);
        (i.isMobXFlow = !0), (o[n] = i);
      }),
    e
  );
}
function Sg(e, t, r, n) {
  t.annotationType_, n.value;
}
function qf(e, t, r, n, a, o) {
  o === void 0 && (o = L.safeDescriptors), Sg(e, t, r, n);
  var i = n.value;
  if ((wa(i) || (i = tn(i)), a)) {
    var c;
    (i = i.bind((c = e.proxy_) != null ? c : e.target_)), (i.isMobXFlow = !0);
  }
  return { value: i, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function Is(e, t) {
  return { annotationType_: e, options_: t, make_: xg, extend_: Eg, decorate_20223_: Cg };
}
function xg(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Eg(e, t, r, n) {
  return (
    Pg(e, this, t, r),
    e.defineComputedProperty_(t, Sr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function Cg(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var o = fn(this)[G],
        i = Sr({}, r.options_, { get: e, context: this });
      i.name || (i.name = "ObservableObject." + n.toString()), o.values_.set(n, new yt(i));
    }),
    function () {
      return this[G].getObservablePropValue_(n);
    }
  );
}
function Pg(e, t, r, n) {
  t.annotationType_, n.get;
}
function Bo(e, t) {
  return { annotationType_: e, options_: t, make_: Rg, extend_: Ag, decorate_20223_: jg };
}
function Rg(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Ag(e, t, r, n) {
  var a, o;
  return (
    Ig(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (o = this.options_) == null ? void 0 : o.enhancer) != null ? a : xr,
      n,
    )
  );
}
function jg(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    o = new WeakSet();
  function i(c, s) {
    var l,
      u,
      d = fn(c)[G],
      f = new wr(
        s,
        (l = (u = r.options_) == null ? void 0 : u.enhancer) != null ? l : xr,
        "ObservableObject." + a.toString(),
        !1,
      );
    d.values_.set(a, f), o.add(c);
  }
  if (n == "accessor")
    return {
      get: function () {
        return o.has(this) || i(this, e.get.call(this)), this[G].getObservablePropValue_(a);
      },
      set: function (s) {
        return o.has(this) || i(this, s), this[G].setObservablePropValue_(a, s);
      },
      init: function (s) {
        return o.has(this) || i(this, s), s;
      },
    };
}
function Ig(e, t, r, n) {
  t.annotationType_;
}
var Dg = "true",
  Tg = Uf();
function Uf(e) {
  return { annotationType_: Dg, options_: e, make_: Mg, extend_: Lg, decorate_20223_: Ng };
}
function Mg(e, t, r, n) {
  var a, o;
  if (r.get) return qo.make_(e, t, r, n);
  if (r.set) {
    var i = Er(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: L.safeDescriptors ? e.isPlainObject_ : !0,
          set: i,
        }) === null
        ? 0
        : 2
      : (Dt(n, t, { configurable: !0, set: i }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var c;
    if (Tf(r.value)) {
      var s,
        l = (s = this.options_) != null && s.autoBind ? tn.bound : tn;
      return l.make_(e, t, r, n);
    }
    var u = (c = this.options_) != null && c.autoBind ? ya.bound : ya;
    return u.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? ce.ref : ce;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function Lg(e, t, r, n) {
  var a, o;
  if (r.get) return qo.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: L.safeDescriptors ? e.isPlainObject_ : !0, set: Er(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var i;
    r.value = r.value.bind((i = e.proxy_) != null ? i : e.target_);
  }
  var c = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? ce.ref : ce;
  return c.extend_(e, t, r, n);
}
function Ng(e, t) {
  Q("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var $g = "observable",
  Fg = "observable.ref",
  zg = "observable.shallow",
  Bg = "observable.struct",
  Vf = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Vf);
function za(e) {
  return e || Vf;
}
var Zi = Bo($g),
  qg = Bo(Fg, { enhancer: zo }),
  Ug = Bo(zg, { enhancer: vg }),
  Vg = Bo(Bg, { enhancer: pg }),
  Gf = Tt(Zi);
function Ba(e) {
  return e.deep === !0 ? xr : e.deep === !1 ? zo : Hg(e.defaultDecorator);
}
function Gg(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Uf(e)) : void 0;
}
function Hg(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : xr;
}
function Hf(e, t, r) {
  if (Ia(t)) return Zi.decorate_20223_(e, t);
  if (Or(t)) {
    ja(e, t, Zi);
    return;
  }
  return uv(e)
    ? e
    : ur(e)
      ? ce.object(e, t, r)
      : Array.isArray(e)
        ? ce.array(e, t)
        : un(e)
          ? ce.map(e, t)
          : Xt(e)
            ? ce.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : ce.box(e, t);
}
Af(Hf, Gf);
var Wg = {
    box: function (t, r) {
      var n = za(r);
      return new wr(t, Ba(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = za(r);
      return (L.useProxies === !1 || n.proxy === !1 ? Gb : Mb)(t, Ba(n), n.name);
    },
    map: function (t, r) {
      var n = za(r);
      return new vv(t, Ba(n), n.name);
    },
    set: function (t, r) {
      var n = za(r);
      return new pv(t, Ba(n), n.name);
    },
    object: function (t, r, n) {
      return Dr(function () {
        return xb(
          L.useProxies === !1 || (n == null ? void 0 : n.proxy) === !1 ? fn({}, n) : Ib({}, n),
          t,
          r,
        );
      });
    },
    ref: Tt(qg),
    shallow: Tt(Ug),
    deep: Gf,
    struct: Tt(Vg),
  },
  ce = Af(Hf, Wg),
  Wf = "computed",
  Kg = "computed.struct",
  Qi = Is(Wf),
  Yg = Is(Kg, { equals: po.structural }),
  qo = function (t, r) {
    if (Ia(r)) return Qi.decorate_20223_(t, r);
    if (Or(r)) return ja(t, r, Qi);
    if (ur(t)) return Tt(Is(Wf, t));
    var n = ur(r) ? r : {};
    return (n.get = t), n.name || (n.name = t.name || ""), new yt(n);
  };
Object.assign(qo, Qi);
qo.struct = Tt(Yg);
var Zc,
  Qc,
  ho = 0,
  Jg = 1,
  Xg =
    (Zc = (Qc = vo(function () {}, "name")) == null ? void 0 : Qc.configurable) != null ? Zc : !1,
  el = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function Er(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return Zg(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    Xg && ((el.value = e), Dt(a, "name", el)),
    a
  );
}
function Zg(e, t, r, n, a) {
  var o = Qg(e, t);
  try {
    return r.apply(n, a);
  } catch (i) {
    throw ((o.error_ = i), i);
  } finally {
    eb(o);
  }
}
function Qg(e, t, r, n) {
  var a = !1,
    o = 0,
    i = L.trackingDerivation,
    c = !t || !i;
  st();
  var s = L.allowStateChanges;
  c && (jr(), (s = Uo(!0)));
  var l = Ds(!0),
    u = {
      runAsAction_: c,
      prevDerivation_: i,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: l,
      notifySpy_: a,
      startTime_: o,
      actionId_: Jg++,
      parentActionId_: ho,
    };
  return (ho = u.actionId_), u;
}
function eb(e) {
  ho !== e.actionId_ && Q(30),
    (ho = e.parentActionId_),
    e.error_ !== void 0 && (L.suppressReactionErrors = !0),
    Vo(e.prevAllowStateChanges_),
    ua(e.prevAllowStateReads_),
    ct(),
    e.runAsAction_ && er(e.prevDerivation_),
    (L.suppressReactionErrors = !1);
}
function tb(e, t) {
  var r = Uo(e);
  try {
    return t();
  } finally {
    Vo(r);
  }
}
function Uo(e) {
  var t = L.allowStateChanges;
  return (L.allowStateChanges = e), t;
}
function Vo(e) {
  L.allowStateChanges = e;
}
var wr = (function (e) {
    function t(n, a, o, i, c) {
      var s;
      return (
        o === void 0 && (o = "ObservableValue"),
        c === void 0 && (c = po.default),
        (s = e.call(this, o) || this),
        (s.enhancer = void 0),
        (s.name_ = void 0),
        (s.equals = void 0),
        (s.hasUnreportedChange_ = !1),
        (s.interceptors_ = void 0),
        (s.changeListeners_ = void 0),
        (s.value_ = void 0),
        (s.dehancer = void 0),
        (s.enhancer = a),
        (s.name_ = o),
        (s.equals = c),
        (s.value_ = a(n, void 0, o)),
        s
      );
    }
    $f(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        this.value_, (a = this.prepareNewValue_(a)), a !== L.UNCHANGED && this.setNewValue_(a);
      }),
      (r.prepareNewValue_ = function (a) {
        if (ot(this)) {
          var o = it(this, { object: this, type: Mt, newValue: a });
          if (!o) return L.UNCHANGED;
          a = o.newValue;
        }
        return (
          (a = this.enhancer(a, this.value_, this.name_)),
          this.equals(this.value_, a) ? L.UNCHANGED : a
        );
      }),
      (r.setNewValue_ = function (a) {
        var o = this.value_;
        (this.value_ = a),
          this.reportChanged(),
          gt(this) && bt(this, { type: Mt, object: this, newValue: a, oldValue: o });
      }),
      (r.get = function () {
        return this.reportObserved(), this.dehanceValue(this.value_);
      }),
      (r.intercept_ = function (a) {
        return Ta(this, a);
      }),
      (r.observe_ = function (a, o) {
        return (
          o &&
            a({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: Mt,
              newValue: this.value_,
              oldValue: void 0,
            }),
          Ma(this, a)
        );
      }),
      (r.raw = function () {
        return this.value_;
      }),
      (r.toJSON = function () {
        return this.get();
      }),
      (r.toString = function () {
        return this.name_ + "[" + this.value_ + "]";
      }),
      (r.valueOf = function () {
        return Nf(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(dr),
  yt = (function () {
    function e(r) {
      (this.dependenciesState_ = te.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = te.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new bo(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = go.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || Q(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = Er("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? po.structural : po.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive);
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        ib(this);
      }),
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (n) {
            return n();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (n) {
            return n();
          });
      }),
      (t.get = function () {
        if (
          (this.isComputing && Q(32, this.name_, this.derivation),
          L.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          es(this) &&
            (this.warnAboutUntrackedRead_(), st(), (this.value_ = this.computeValue_(!1)), ct());
        else if ((ev(this), es(this))) {
          var n = L.trackingContext;
          this.keepAlive_ && !n && (L.trackingContext = this),
            this.trackAndCompute() && ob(this),
            (L.trackingContext = n);
        }
        var a = this.value_;
        if (ro(a)) throw a.cause;
        return a;
      }),
      (t.set = function (n) {
        if (this.setter_) {
          this.isRunningSetter && Q(33, this.name_), (this.isRunningSetter = !0);
          try {
            this.setter_.call(this.scope_, n);
          } finally {
            this.isRunningSetter = !1;
          }
        } else Q(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var n = this.value_,
          a = this.dependenciesState_ === te.NOT_TRACKING_,
          o = this.computeValue_(!0),
          i = a || ro(n) || ro(o) || !this.equals_(n, o);
        return i && (this.value_ = o), i;
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = Uo(!1),
          o;
        if (n) o = Kf(this, this.derivation, this.scope_);
        else if (L.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (i) {
            o = new bo(i);
          }
        return Vo(a), (this.isComputing = !1), o;
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (ts(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var o = this,
          i = !0,
          c = void 0;
        return gb(function () {
          var s = o.get();
          if (!i || a) {
            var l = jr();
            n({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: Mt,
              object: o,
              newValue: s,
              oldValue: c,
            }),
              er(l);
          }
          (i = !1), (c = s);
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return Nf(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      dn(e, [
        {
          key: "isComputing",
          get: function () {
            return We(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return We(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return We(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return We(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return We(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
yt.isComputingMask_ = 1;
yt.isRunningSetterMask_ = 2;
yt.isBeingObservedMask_ = 4;
yt.isPendingUnobservationMask_ = 8;
yt.diffValueMask_ = 16;
var Go = Ar("ComputedValue", yt),
  te;
(function (e) {
  (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_");
})(te || (te = {}));
var go;
(function (e) {
  (e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK");
})(go || (go = {}));
var bo = function (t) {
  (this.cause = void 0), (this.cause = t);
};
function ro(e) {
  return e instanceof bo;
}
function es(e) {
  switch (e.dependenciesState_) {
    case te.UP_TO_DATE_:
      return !1;
    case te.NOT_TRACKING_:
    case te.STALE_:
      return !0;
    case te.POSSIBLY_STALE_: {
      for (var t = Ds(!0), r = jr(), n = e.observing_, a = n.length, o = 0; o < a; o++) {
        var i = n[o];
        if (Go(i)) {
          if (L.disableErrorBoundaries) i.get();
          else
            try {
              i.get();
            } catch {
              return er(r), ua(t), !0;
            }
          if (e.dependenciesState_ === te.STALE_) return er(r), ua(t), !0;
        }
      }
      return Jf(e), er(r), ua(t), !1;
    }
  }
}
function Kf(e, t, r) {
  var n = Ds(!0);
  Jf(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++L.runId);
  var a = L.trackingDerivation;
  (L.trackingDerivation = e), L.inBatch++;
  var o;
  if (L.disableErrorBoundaries === !0) o = t.call(r);
  else
    try {
      o = t.call(r);
    } catch (i) {
      o = new bo(i);
    }
  return L.inBatch--, (L.trackingDerivation = a), rb(e), ua(n), o;
}
function rb(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = te.UP_TO_DATE_,
      a = 0,
      o = e.unboundDepsCount_,
      i = 0;
    i < o;
    i++
  ) {
    var c = r[i];
    c.diffValue === 0 && ((c.diffValue = 1), a !== i && (r[a] = c), a++),
      c.dependenciesState_ > n && (n = c.dependenciesState_);
  }
  for (r.length = a, e.newObserving_ = null, o = t.length; o--; ) {
    var s = t[o];
    s.diffValue === 0 && Zf(s, e), (s.diffValue = 0);
  }
  for (; a--; ) {
    var l = r[a];
    l.diffValue === 1 && ((l.diffValue = 0), ab(l, e));
  }
  n !== te.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function ts(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Zf(t[r], e);
  e.dependenciesState_ = te.NOT_TRACKING_;
}
function Yf(e) {
  var t = jr();
  try {
    return e();
  } finally {
    er(t);
  }
}
function jr() {
  var e = L.trackingDerivation;
  return (L.trackingDerivation = null), e;
}
function er(e) {
  L.trackingDerivation = e;
}
function Ds(e) {
  var t = L.allowStateReads;
  return (L.allowStateReads = e), t;
}
function ua(e) {
  L.allowStateReads = e;
}
function Jf(e) {
  if (e.dependenciesState_ !== te.UP_TO_DATE_) {
    e.dependenciesState_ = te.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = te.UP_TO_DATE_;
  }
}
var no = function () {
    (this.version = 6),
      (this.UNCHANGED = {}),
      (this.trackingDerivation = null),
      (this.trackingContext = null),
      (this.runId = 0),
      (this.mobxGuid = 0),
      (this.inBatch = 0),
      (this.pendingUnobservations = []),
      (this.pendingReactions = []),
      (this.isRunningReactions = !1),
      (this.allowStateChanges = !1),
      (this.allowStateReads = !0),
      (this.enforceActions = !0),
      (this.spyListeners = []),
      (this.globalReactionErrorHandlers = []),
      (this.computedRequiresReaction = !1),
      (this.reactionRequiresObservable = !1),
      (this.observableRequiresReaction = !1),
      (this.disableErrorBoundaries = !1),
      (this.suppressReactionErrors = !1),
      (this.useProxies = !0),
      (this.verifyProxies = !1),
      (this.safeDescriptors = !0);
  },
  ao = !0,
  Xf = !1,
  L = (function () {
    var e = Mo();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ao = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new no().version && (ao = !1),
      ao
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new no()))
        : (setTimeout(function () {
            Xf || Q(35);
          }, 1),
          new no())
    );
  })();
function nb() {
  if (((L.pendingReactions.length || L.inBatch || L.isRunningReactions) && Q(36), (Xf = !0), ao)) {
    var e = Mo();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (L = new no());
  }
}
function ab(e, t) {
  e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_);
}
function Zf(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && Qf(e);
}
function Qf(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), L.pendingUnobservations.push(e));
}
function st() {
  L.inBatch++;
}
function ct() {
  if (--L.inBatch === 0) {
    rv();
    for (var e = L.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      (r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof yt && r.suspend_());
    }
    L.pendingUnobservations = [];
  }
}
function ev(e) {
  var t = L.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && L.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && L.inBatch > 0 && Qf(e), !1);
}
function tv(e) {
  e.lowestObserverState_ !== te.STALE_ &&
    ((e.lowestObserverState_ = te.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === te.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = te.STALE_);
    }));
}
function ob(e) {
  e.lowestObserverState_ !== te.STALE_ &&
    ((e.lowestObserverState_ = te.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === te.POSSIBLY_STALE_
        ? (t.dependenciesState_ = te.STALE_)
        : t.dependenciesState_ === te.UP_TO_DATE_ && (e.lowestObserverState_ = te.UP_TO_DATE_);
    }));
}
function ib(e) {
  e.lowestObserverState_ === te.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = te.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === te.UP_TO_DATE_ &&
        ((t.dependenciesState_ = te.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var $t = (function () {
  function e(r, n, a, o) {
    r === void 0 && (r = "Reaction"),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = te.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = go.NONE),
      (this.name_ = r),
      (this.onInvalidate_ = n),
      (this.errorHandler_ = a),
      (this.requiresObservable_ = o);
  }
  var t = e.prototype;
  return (
    (t.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (t.schedule_ = function () {
      this.isScheduled || ((this.isScheduled = !0), L.pendingReactions.push(this), rv());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        st(), (this.isScheduled = !1);
        var n = L.trackingContext;
        if (((L.trackingContext = this), es(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        (L.trackingContext = n), ct();
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        st(), (this.isRunning = !0);
        var a = L.trackingContext;
        L.trackingContext = this;
        var o = Kf(this, n, void 0);
        (L.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && ts(this),
          ro(o) && this.reportExceptionInDerivation_(o.cause),
          ct();
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var a = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (L.disableErrorBoundaries) throw n;
      var o = "[mobx] uncaught error in '" + this + "'";
      L.suppressReactionErrors || console.error(o, n),
        L.globalReactionErrorHandlers.forEach(function (i) {
          return i(n, a);
        });
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (st(), ts(this), ct()));
    }),
    (t.getDisposer_ = function (n) {
      var a = this,
        o = function i() {
          a.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", i);
        };
      return (
        n == null || n.addEventListener == null || n.addEventListener("abort", o), (o[G] = this), o
      );
    }),
    (t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (t.trace = function (n) {}),
    dn(e, [
      {
        key: "isDisposed",
        get: function () {
          return We(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return We(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return We(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return We(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return We(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.diffValueMask_, n === 1);
        },
      },
    ])
  );
})();
$t.isDisposedMask_ = 1;
$t.isScheduledMask_ = 2;
$t.isTrackPendingMask_ = 4;
$t.isRunningMask_ = 8;
$t.diffValueMask_ = 16;
var sb = 100,
  rs = function (t) {
    return t();
  };
function rv() {
  L.inBatch > 0 || L.isRunningReactions || rs(cb);
}
function cb() {
  L.isRunningReactions = !0;
  for (var e = L.pendingReactions, t = 0; e.length > 0; ) {
    ++t === sb && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  L.isRunningReactions = !1;
}
var mo = Ar("Reaction", $t);
function lb(e) {
  var t = rs;
  rs = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function da() {
  return !1;
}
function ub(e) {
  return console.warn("[mobx.spy] Is a no-op in production builds"), function () {};
}
var nv = "action",
  db = "action.bound",
  av = "autoAction",
  fb = "autoAction.bound",
  vb = "<unnamed action>",
  ns = Da(nv),
  pb = Da(db, { bound: !0 }),
  as = Da(av, { autoAction: !0 }),
  hb = Da(fb, { autoAction: !0, bound: !0 });
function ov(e) {
  var t = function (n, a) {
    if (mt(n)) return Er(n.name || vb, n, e);
    if (mt(a)) return Er(n, a, e);
    if (Ia(a)) return (e ? as : ns).decorate_20223_(n, a);
    if (Or(a)) return ja(n, a, e ? as : ns);
    if (Or(n)) return Tt(Da(e ? av : nv, { name: n, autoAction: e }));
  };
  return t;
}
var lt = ov(!1);
Object.assign(lt, ns);
var ya = ov(!0);
Object.assign(ya, as);
lt.bound = Tt(pb);
ya.bound = Tt(hb);
function _a(e) {
  return mt(e) && e.isMobxAction === !0;
}
function gb(e, t) {
  var r, n, a, o;
  t === void 0 && (t = jf);
  var i = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    c = !t.scheduler && !t.delay,
    s;
  if (c)
    s = new $t(
      i,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var l = mb(t),
      u = !1;
    s = new $t(
      i,
      function () {
        u ||
          ((u = !0),
          l(function () {
            (u = !1), s.isDisposed || s.track(d);
          }));
      },
      t.onError,
      t.requiresObservable,
    );
  }
  function d() {
    e(s);
  }
  return (
    ((a = t) != null && (a = a.signal) != null && a.aborted) || s.schedule_(),
    s.getDisposer_((o = t) == null ? void 0 : o.signal)
  );
}
var bb = function (t) {
  return t();
};
function mb(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : bb;
}
var yb = "onBO",
  _b = "onBUO";
function wb(e, t, r) {
  return sv(yb, e, t, r);
}
function iv(e, t, r) {
  return sv(_b, e, t, r);
}
function sv(e, t, r, n) {
  var a = wo(t),
    o = mt(n) ? n : r,
    i = e + "L";
  return (
    a[i] ? a[i].add(o) : (a[i] = new Set([o])),
    function () {
      var c = a[i];
      c && (c.delete(o), c.size === 0 && delete a[i]);
    }
  );
}
var kb = "never",
  qa = "always",
  Ob = "observed";
function Sb(e) {
  e.isolateGlobalState === !0 && nb();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (L.useProxies = t === qa ? !0 : t === kb ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (L.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === qa ? qa : r === Ob;
    (L.enforceActions = n), (L.allowStateChanges = !(n === !0 || n === qa));
  }
  [
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (a) {
    a in e && (L[a] = !!e[a]);
  }),
    (L.allowStateReads = !L.observableRequiresReaction),
    e.reactionScheduler && lb(e.reactionScheduler);
}
function xb(e, t, r, n) {
  var a = og(t);
  return (
    Dr(function () {
      var o = fn(e, n)[G];
      Fo(a).forEach(function (i) {
        o.extend_(i, a[i], r && i in r ? r[i] : !0);
      });
    }),
    e
  );
}
function Eb(e, t) {
  return cv(wo(e, t));
}
function cv(e) {
  var t = { name: e.name_ };
  return e.observing_ && e.observing_.length > 0 && (t.dependencies = Cb(e.observing_).map(cv)), t;
}
function Cb(e) {
  return Array.from(new Set(e));
}
var Pb = 0;
function lv() {
  this.message = "FLOW_CANCELLED";
}
lv.prototype = Object.create(Error.prototype);
var _i = Bf("flow"),
  Rb = Bf("flow.bound", { bound: !0 }),
  tn = Object.assign(function (t, r) {
    if (Ia(r)) return _i.decorate_20223_(t, r);
    if (Or(r)) return ja(t, r, _i);
    var n = t,
      a = n.name || "<unnamed flow>",
      o = function () {
        var c = this,
          s = arguments,
          l = ++Pb,
          u = lt(a + " - runid: " + l + " - init", n).apply(c, s),
          d,
          f = void 0,
          v = new Promise(function (h, p) {
            var g = 0;
            d = p;
            function b(w) {
              f = void 0;
              var _;
              try {
                _ = lt(a + " - runid: " + l + " - yield " + g++, u.next).call(u, w);
              } catch (S) {
                return p(S);
              }
              O(_);
            }
            function y(w) {
              f = void 0;
              var _;
              try {
                _ = lt(a + " - runid: " + l + " - yield " + g++, u.throw).call(u, w);
              } catch (S) {
                return p(S);
              }
              O(_);
            }
            function O(w) {
              if (mt(w == null ? void 0 : w.then)) {
                w.then(O, p);
                return;
              }
              return w.done ? h(w.value) : ((f = Promise.resolve(w.value)), f.then(b, y));
            }
            b(void 0);
          });
        return (
          (v.cancel = lt(a + " - runid: " + l + " - cancel", function () {
            try {
              f && tl(f);
              var h = u.return(void 0),
                p = Promise.resolve(h.value);
              p.then(Jr, Jr), tl(p), d(new lv());
            } catch (g) {
              d(g);
            }
          })),
          v
        );
      };
    return (o.isMobXFlow = !0), o;
  }, _i);
tn.bound = Tt(Rb);
function tl(e) {
  mt(e.cancel) && e.cancel();
}
function wa(e) {
  return (e == null ? void 0 : e.isMobXFlow) === !0;
}
function Ab(e, t) {
  return e ? Wo(e) || !!e[G] || js(e) || mo(e) || Go(e) : !1;
}
function uv(e) {
  return Ab(e);
}
function Zt(e, t) {
  t === void 0 && (t = void 0), st();
  try {
    return e.apply(t);
  } finally {
    ct();
  }
}
function Nr(e) {
  return e[G];
}
var jb = {
  has: function (t, r) {
    return Nr(t).has_(r);
  },
  get: function (t, r) {
    return Nr(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return Or(r) ? ((a = Nr(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return Or(r) ? ((n = Nr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = Nr(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return Nr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    Q(13);
  },
};
function Ib(e, t) {
  var r, n;
  return If(), (e = fn(e, t)), (n = (r = e[G]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, jb));
}
function ot(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Ta(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    Df(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function it(e, t) {
  var r = jr();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, o = n.length;
      a < o && ((t = n[a](t)), t && !t.type && Q(14), !!t);
      a++
    );
    return t;
  } finally {
    er(r);
  }
}
function gt(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Ma(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    Df(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function bt(e, t) {
  var r = jr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, o = n.length; a < o; a++) n[a](t);
    er(r);
  }
}
function dv(e, t, r) {
  return (
    Dr(function () {
      var n,
        a = fn(e, r)[G];
      (n = t) != null || (t = ug(e)),
        Fo(t).forEach(function (o) {
          return a.make_(o, t[o]);
        });
    }),
    e
  );
}
var rl = "splice",
  Mt = "update",
  Db = 1e4,
  Tb = {
    get: function (t, r) {
      var n = t[G];
      return r === G
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Qt(yo, r)
              ? yo[r]
              : t[r];
    },
    set: function (t, r, n) {
      var a = t[G];
      return (
        r === "length" && a.setArrayLength_(n),
        typeof r == "symbol" || isNaN(r) ? (t[r] = n) : a.set_(parseInt(r), n),
        !0
      );
    },
    preventExtensions: function () {
      Q(15);
    },
  },
  Ts = (function () {
    function e(r, n, a, o) {
      r === void 0 && (r = "ObservableArray"),
        (this.owned_ = void 0),
        (this.legacyMode_ = void 0),
        (this.atom_ = void 0),
        (this.values_ = []),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.enhancer_ = void 0),
        (this.dehancer = void 0),
        (this.proxy_ = void 0),
        (this.lastKnownLength_ = 0),
        (this.owned_ = a),
        (this.legacyMode_ = o),
        (this.atom_ = new dr(r)),
        (this.enhancer_ = function (i, c) {
          return n(i, c, "ObservableArray[..]");
        });
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.dehanceValues_ = function (n) {
        return this.dehancer !== void 0 && n.length > 0 ? n.map(this.dehancer) : n;
      }),
      (t.intercept_ = function (n) {
        return Ta(this, n);
      }),
      (t.observe_ = function (n, a) {
        return (
          a === void 0 && (a = !1),
          a &&
            n({
              observableKind: "array",
              object: this.proxy_,
              debugObjectName: this.atom_.name_,
              type: "splice",
              index: 0,
              added: this.values_.slice(),
              addedCount: this.values_.length,
              removed: [],
              removedCount: 0,
            }),
          Ma(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return this.atom_.reportObserved(), this.values_.length;
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && Q("Out of range: " + n);
        var a = this.values_.length;
        if (n !== a)
          if (n > a) {
            for (var o = new Array(n - a), i = 0; i < n - a; i++) o[i] = void 0;
            this.spliceWithArray_(a, 0, o);
          } else this.spliceWithArray_(n, a - n);
      }),
      (t.updateArrayLength_ = function (n, a) {
        n !== this.lastKnownLength_ && Q(16),
          (this.lastKnownLength_ += a),
          this.legacyMode_ && a > 0 && mv(n + a + 1);
      }),
      (t.spliceWithArray_ = function (n, a, o) {
        var i = this;
        this.atom_;
        var c = this.values_.length;
        if (
          (n === void 0 ? (n = 0) : n > c ? (n = c) : n < 0 && (n = Math.max(0, c + n)),
          arguments.length === 1
            ? (a = c - n)
            : a == null
              ? (a = 0)
              : (a = Math.max(0, Math.min(a, c - n))),
          o === void 0 && (o = Ji),
          ot(this))
        ) {
          var s = it(this, { object: this.proxy_, type: rl, index: n, removedCount: a, added: o });
          if (!s) return Ji;
          (a = s.removedCount), (o = s.added);
        }
        if (
          ((o =
            o.length === 0
              ? o
              : o.map(function (d) {
                  return i.enhancer_(d, void 0);
                })),
          this.legacyMode_)
        ) {
          var l = o.length - a;
          this.updateArrayLength_(c, l);
        }
        var u = this.spliceItemsIntoValues_(n, a, o);
        return (
          (a !== 0 || o.length !== 0) && this.notifyArraySplice_(n, o, u), this.dehanceValues_(u)
        );
      }),
      (t.spliceItemsIntoValues_ = function (n, a, o) {
        if (o.length < Db) {
          var i;
          return (i = this.values_).splice.apply(i, [n, a].concat(o));
        } else {
          var c = this.values_.slice(n, n + a),
            s = this.values_.slice(n + a);
          this.values_.length += o.length - a;
          for (var l = 0; l < o.length; l++) this.values_[n + l] = o[l];
          for (var u = 0; u < s.length; u++) this.values_[n + o.length + u] = s[u];
          return c;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (n, a, o) {
        var i = !this.owned_ && da(),
          c = gt(this),
          s =
            c || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: Mt,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: a,
                  oldValue: o,
                }
              : null;
        this.atom_.reportChanged(), c && bt(this, s);
      }),
      (t.notifyArraySplice_ = function (n, a, o) {
        var i = !this.owned_ && da(),
          c = gt(this),
          s =
            c || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: rl,
                  index: n,
                  removed: o,
                  added: a,
                  removedCount: o.length,
                  addedCount: a.length,
                }
              : null;
        this.atom_.reportChanged(), c && bt(this, s);
      }),
      (t.get_ = function (n) {
        if (this.legacyMode_ && n >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + n);
          return;
        }
        return this.atom_.reportObserved(), this.dehanceValue_(this.values_[n]);
      }),
      (t.set_ = function (n, a) {
        var o = this.values_;
        if ((this.legacyMode_ && n > o.length && Q(17, n, o.length), n < o.length)) {
          this.atom_;
          var i = o[n];
          if (ot(this)) {
            var c = it(this, { type: Mt, object: this.proxy_, index: n, newValue: a });
            if (!c) return;
            a = c.newValue;
          }
          a = this.enhancer_(a, i);
          var s = a !== i;
          s && ((o[n] = a), this.notifyArrayChildUpdate_(n, a, i));
        } else {
          for (var l = new Array(n + 1 - o.length), u = 0; u < l.length - 1; u++) l[u] = void 0;
          (l[l.length - 1] = a), this.spliceWithArray_(o.length, 0, l);
        }
      }),
      e
    );
  })();
function Mb(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    If(),
    Dr(function () {
      var a = new Ts(r, t, n, !1);
      Mf(a.values_, G, a);
      var o = new Proxy(a.values_, Tb);
      return (a.proxy_ = o), e && e.length && a.spliceWithArray_(0, 0, e), o;
    })
  );
}
var yo = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var r = this[G];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, r) {
    for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      a[o - 2] = arguments[o];
    var i = this[G];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return i.spliceWithArray_(t);
      case 2:
        return i.spliceWithArray_(t, r);
    }
    return i.spliceWithArray_(t, r, a);
  },
  spliceWithArray: function (t, r, n) {
    return this[G].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (var t = this[G], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.spliceWithArray_(t.values_.length, 0, n), t.values_.length;
  },
  pop: function () {
    return this.splice(Math.max(this[G].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[G], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.spliceWithArray_(0, 0, n), t.values_.length;
  },
  reverse: function () {
    return L.trackingDerivation && Q(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function () {
    L.trackingDerivation && Q(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function (t) {
    var r = this[G],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
fe("at", Xe);
fe("concat", Xe);
fe("flat", Xe);
fe("includes", Xe);
fe("indexOf", Xe);
fe("join", Xe);
fe("lastIndexOf", Xe);
fe("slice", Xe);
fe("toString", Xe);
fe("toLocaleString", Xe);
fe("toSorted", Xe);
fe("toSpliced", Xe);
fe("with", Xe);
fe("every", wt);
fe("filter", wt);
fe("find", wt);
fe("findIndex", wt);
fe("findLast", wt);
fe("findLastIndex", wt);
fe("flatMap", wt);
fe("forEach", wt);
fe("map", wt);
fe("some", wt);
fe("toReversed", wt);
fe("reduce", fv);
fe("reduceRight", fv);
function fe(e, t) {
  typeof Array.prototype[e] == "function" && (yo[e] = t(e));
}
function Xe(e) {
  return function () {
    var t = this[G];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function wt(e) {
  return function (t, r) {
    var n = this,
      a = this[G];
    a.atom_.reportObserved();
    var o = a.dehanceValues_(a.values_);
    return o[e](function (i, c) {
      return t.call(r, i, c, n);
    });
  };
}
function fv(e) {
  return function () {
    var t = this,
      r = this[G];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_),
      a = arguments[0];
    return (
      (arguments[0] = function (o, i, c) {
        return a(o, i, c, t);
      }),
      n[e].apply(n, arguments)
    );
  };
}
var Lb = Ar("ObservableArrayAdministration", Ts);
function Ho(e) {
  return No(e) && Lb(e[G]);
}
var Nb = {},
  sr = "add",
  _o = "delete",
  vv = (function () {
    function e(r, n, a) {
      var o = this;
      n === void 0 && (n = xr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[G] = Nb),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        mt(Map) || Q(18),
        Dr(function () {
          (o.keysAtom_ = Ff("ObservableMap.keys()")),
            (o.data_ = new Map()),
            (o.hasMap_ = new Map()),
            r && o.merge(r);
        });
    }
    var t = e.prototype;
    return (
      (t.has_ = function (n) {
        return this.data_.has(n);
      }),
      (t.has = function (n) {
        var a = this;
        if (!L.trackingDerivation) return this.has_(n);
        var o = this.hasMap_.get(n);
        if (!o) {
          var i = (o = new wr(this.has_(n), zo, "ObservableMap.key?", !1));
          this.hasMap_.set(n, i),
            iv(i, function () {
              return a.hasMap_.delete(n);
            });
        }
        return o.get();
      }),
      (t.set = function (n, a) {
        var o = this.has_(n);
        if (ot(this)) {
          var i = it(this, { type: o ? Mt : sr, object: this, newValue: a, name: n });
          if (!i) return this;
          a = i.newValue;
        }
        return o ? this.updateValue_(n, a) : this.addValue_(n, a), this;
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, ot(this))) {
          var o = it(this, { type: _o, object: this, name: n });
          if (!o) return !1;
        }
        if (this.has_(n)) {
          var i = da(),
            c = gt(this),
            s =
              c || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: _o,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Zt(function () {
              var l;
              a.keysAtom_.reportChanged(), (l = a.hasMap_.get(n)) == null || l.setNewValue_(!1);
              var u = a.data_.get(n);
              u.setNewValue_(void 0), a.data_.delete(n);
            }),
            c && bt(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var o = this.data_.get(n);
        if (((a = o.prepareNewValue_(a)), a !== L.UNCHANGED)) {
          var i = da(),
            c = gt(this),
            s =
              c || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Mt,
                    object: this,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          o.setNewValue_(a), c && bt(this, s);
        }
      }),
      (t.addValue_ = function (n, a) {
        var o = this;
        this.keysAtom_,
          Zt(function () {
            var l,
              u = new wr(a, o.enhancer_, "ObservableMap.key", !1);
            o.data_.set(n, u),
              (a = u.value_),
              (l = o.hasMap_.get(n)) == null || l.setNewValue_(!0),
              o.keysAtom_.reportChanged();
          });
        var i = da(),
          c = gt(this),
          s =
            c || i
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: sr,
                  object: this,
                  name: n,
                  newValue: a,
                }
              : null;
        c && bt(this, s);
      }),
      (t.get = function (n) {
        return this.has(n)
          ? this.dehanceValue_(this.data_.get(n).get())
          : this.dehanceValue_(void 0);
      }),
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.keys = function () {
        return this.keysAtom_.reportObserved(), this.data_.keys();
      }),
      (t.values = function () {
        var n = this,
          a = this.keys();
        return nl({
          next: function () {
            var i = a.next(),
              c = i.done,
              s = i.value;
            return { done: c, value: c ? void 0 : n.get(s) };
          },
        });
      }),
      (t.entries = function () {
        var n = this,
          a = this.keys();
        return nl({
          next: function () {
            var i = a.next(),
              c = i.done,
              s = i.value;
            return { done: c, value: c ? void 0 : [s, n.get(s)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (n, a) {
        for (var o = Xr(this), i; !(i = o()).done; ) {
          var c = i.value,
            s = c[0],
            l = c[1];
          n.call(a, l, s, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          Ir(n) && (n = new Map(n)),
          Zt(function () {
            ur(n)
              ? ag(n).forEach(function (o) {
                  return a.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var i = o[0],
                      c = o[1];
                    return a.set(i, c);
                  })
                : un(n)
                  ? (ng(n) || Q(19, n),
                    n.forEach(function (o, i) {
                      return a.set(i, o);
                    }))
                  : n != null && Q(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        Zt(function () {
          Yf(function () {
            for (var a = Xr(n.keys()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          Zt(function () {
            for (
              var o = $b(n), i = new Map(), c = !1, s = Xr(a.data_.keys()), l;
              !(l = s()).done;

            ) {
              var u = l.value;
              if (!o.has(u)) {
                var d = a.delete(u);
                if (d) c = !0;
                else {
                  var f = a.data_.get(u);
                  i.set(u, f);
                }
              }
            }
            for (var v = Xr(o.entries()), h; !(h = v()).done; ) {
              var p = h.value,
                g = p[0],
                b = p[1],
                y = a.data_.has(g);
              if ((a.set(g, b), a.data_.has(g))) {
                var O = a.data_.get(g);
                i.set(g, O), y || (c = !0);
              }
            }
            if (!c)
              if (a.data_.size !== i.size) a.keysAtom_.reportChanged();
              else
                for (var w = a.data_.keys(), _ = i.keys(), S = w.next(), x = _.next(); !S.done; ) {
                  if (S.value !== x.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  (S = w.next()), (x = _.next());
                }
            a.data_ = i;
          }),
          this
        );
      }),
      (t.toString = function () {
        return "[object ObservableMap]";
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.observe_ = function (n, a) {
        return Ma(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ta(this, n);
      }),
      dn(e, [
        {
          key: "size",
          get: function () {
            return this.keysAtom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Map";
          },
        },
      ])
    );
  })(),
  Ir = Ar("ObservableMap", vv);
function nl(e) {
  return (e[Symbol.toStringTag] = "MapIterator"), Ls(e);
}
function $b(e) {
  if (un(e) || Ir(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (ur(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return Q(21, e);
}
var Fb = {},
  pv = (function () {
    function e(r, n, a) {
      var o = this;
      n === void 0 && (n = xr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[G] = Fb),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        mt(Set) || Q(22),
        (this.enhancer_ = function (i, c) {
          return n(i, c, a);
        }),
        Dr(function () {
          (o.atom_ = Ff(o.name_)), r && o.replace(r);
        });
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Zt(function () {
          Yf(function () {
            for (var a = Xr(n.data_.values()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var o = Xr(this), i; !(i = o()).done; ) {
          var c = i.value;
          n.call(a, c, c, this);
        }
      }),
      (t.add = function (n) {
        var a = this;
        if ((this.atom_, ot(this))) {
          var o = it(this, { type: sr, object: this, newValue: n });
          if (!o) return this;
          n = o.newValue;
        }
        if (!this.has(n)) {
          Zt(function () {
            a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged();
          });
          var i = !1,
            c = gt(this),
            s =
              c || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: sr,
                    object: this,
                    newValue: n,
                  }
                : null;
          c && bt(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (ot(this)) {
          var o = it(this, { type: _o, object: this, oldValue: n });
          if (!o) return !1;
        }
        if (this.has(n)) {
          var i = !1,
            c = gt(this),
            s =
              c || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: _o,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Zt(function () {
              a.atom_.reportChanged(), a.data_.delete(n);
            }),
            c && bt(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.has = function (n) {
        return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(n));
      }),
      (t.entries = function () {
        var n = this.values();
        return al({
          next: function () {
            var o = n.next(),
              i = o.value,
              c = o.done;
            return c ? { value: void 0, done: c } : { value: [i, i], done: c };
          },
        });
      }),
      (t.keys = function () {
        return this.values();
      }),
      (t.values = function () {
        this.atom_.reportObserved();
        var n = this,
          a = this.data_.values();
        return al({
          next: function () {
            var i = a.next(),
              c = i.value,
              s = i.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(c), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Xt(n) && !jt(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Xt(n) && !jt(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Xt(n) && !jt(n)) return n.symmetricDifference(this);
        var a = new Set(this);
        return a.symmetricDifference(n);
      }),
      (t.isSubsetOf = function (n) {
        return new Set(this).isSubsetOf(n);
      }),
      (t.isSupersetOf = function (n) {
        return new Set(this).isSupersetOf(n);
      }),
      (t.isDisjointFrom = function (n) {
        if (Xt(n) && !jt(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          jt(n) && (n = new Set(n)),
          Zt(function () {
            Array.isArray(n)
              ? (a.clear(),
                n.forEach(function (o) {
                  return a.add(o);
                }))
              : Xt(n)
                ? (a.clear(),
                  n.forEach(function (o) {
                    return a.add(o);
                  }))
                : n != null && Q("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, a) {
        return Ma(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ta(this, n);
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.toString = function () {
        return "[object ObservableSet]";
      }),
      (t[Symbol.iterator] = function () {
        return this.values();
      }),
      dn(e, [
        {
          key: "size",
          get: function () {
            return this.atom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Set";
          },
        },
      ])
    );
  })(),
  jt = Ar("ObservableSet", pv);
function al(e) {
  return (e[Symbol.toStringTag] = "SetIterator"), Ls(e);
}
var ol = Object.create(null),
  il = "remove",
  hv = (function () {
    function e(r, n, a, o) {
      n === void 0 && (n = new Map()),
        o === void 0 && (o = Tg),
        (this.target_ = void 0),
        (this.values_ = void 0),
        (this.name_ = void 0),
        (this.defaultAnnotation_ = void 0),
        (this.keysAtom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.proxy_ = void 0),
        (this.isPlainObject_ = void 0),
        (this.appliedAnnotations_ = void 0),
        (this.pendingKeys_ = void 0),
        (this.target_ = r),
        (this.values_ = n),
        (this.name_ = a),
        (this.defaultAnnotation_ = o),
        (this.keysAtom_ = new dr("ObservableObject.keys")),
        (this.isPlainObject_ = ur(this.target_));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, a) {
        var o = this.values_.get(n);
        if (o instanceof yt) return o.set(a), !0;
        if (ot(this)) {
          var i = it(this, { type: Mt, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!i) return null;
          a = i.newValue;
        }
        if (((a = o.prepareNewValue_(a)), a !== L.UNCHANGED)) {
          var c = gt(this),
            s = !1,
            l =
              c || s
                ? {
                    type: Mt,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          o.setNewValue_(a), c && bt(this, l);
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return L.trackingDerivation && !Qt(this.target_, n) && this.has_(n), this.target_[n];
      }),
      (t.set_ = function (n, a, o) {
        return (
          o === void 0 && (o = !1),
          Qt(this.target_, n)
            ? this.values_.has(n)
              ? this.setObservablePropValue_(n, a)
              : o
                ? Reflect.set(this.target_, n, a)
                : ((this.target_[n] = a), !0)
            : this.extend_(
                n,
                { value: a, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                o,
              )
        );
      }),
      (t.has_ = function (n) {
        if (!L.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var a = this.pendingKeys_.get(n);
        return (
          a ||
            ((a = new wr(n in this.target_, zo, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var o;
            if ((o = this.target_[It]) != null && o[n]) return;
            Q(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var i = this.target_; i && i !== Lo; ) {
            var c = vo(i, n);
            if (c) {
              var s = a.make_(this, n, c, i);
              if (s === 0) return;
              if (s === 1) break;
            }
            i = Object.getPrototypeOf(i);
          }
          cl(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, o, i) {
        if ((i === void 0 && (i = !1), o === !0 && (o = this.defaultAnnotation_), o === !1))
          return this.defineProperty_(n, a, i);
        var c = o.extend_(this, n, a, i);
        return c && cl(this, o, n), c;
      }),
      (t.defineProperty_ = function (n, a, o) {
        o === void 0 && (o = !1), this.keysAtom_;
        try {
          st();
          var i = this.delete_(n);
          if (!i) return i;
          if (ot(this)) {
            var c = it(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: sr,
              newValue: a.value,
            });
            if (!c) return null;
            var s = c.newValue;
            a.value !== s && (a = Sr({}, a, { value: s }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else Dt(this.target_, n, a);
          this.notifyPropertyAddition_(n, a.value);
        } finally {
          ct();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, a, o, i) {
        i === void 0 && (i = !1), this.keysAtom_;
        try {
          st();
          var c = this.delete_(n);
          if (!c) return c;
          if (ot(this)) {
            var s = it(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: sr,
              newValue: a,
            });
            if (!s) return null;
            a = s.newValue;
          }
          var l = sl(n),
            u = {
              configurable: L.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: l.get,
              set: l.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else Dt(this.target_, n, u);
          var d = new wr(a, o, "ObservableObject.key", !1);
          this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_);
        } finally {
          ct();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, a, o) {
        o === void 0 && (o = !1), this.keysAtom_;
        try {
          st();
          var i = this.delete_(n);
          if (!i) return i;
          if (ot(this)) {
            var c = it(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: sr,
              newValue: void 0,
            });
            if (!c) return null;
          }
          a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_);
          var s = sl(n),
            l = {
              configurable: L.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else Dt(this.target_, n, l);
          this.values_.set(n, new yt(a)), this.notifyPropertyAddition_(n, void 0);
        } finally {
          ct();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Qt(this.target_, n))) return !0;
        if (ot(this)) {
          var o = it(this, { object: this.proxy_ || this.target_, name: n, type: il });
          if (!o) return null;
        }
        try {
          var i;
          st();
          var c = gt(this),
            s = !1,
            l = this.values_.get(n),
            u = void 0;
          if (!l && (c || s)) {
            var d;
            u = (d = vo(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (l && (this.values_.delete(n), l instanceof wr && (u = l.value_), tv(l)),
            this.keysAtom_.reportChanged(),
            (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(n in this.target_),
            c || s)
          ) {
            var f = {
              type: il,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: u,
              name: n,
            };
            c && bt(this, f);
          }
        } finally {
          ct();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return Ma(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ta(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var o,
          i = gt(this),
          c = !1;
        if (i || c) {
          var s =
            i || c
              ? {
                  type: sr,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: a,
                }
              : null;
          i && bt(this, s);
        }
        (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(!0),
          this.keysAtom_.reportChanged();
      }),
      (t.ownKeys_ = function () {
        return this.keysAtom_.reportObserved(), Fo(this.target_);
      }),
      (t.keys_ = function () {
        return this.keysAtom_.reportObserved(), Object.keys(this.target_);
      }),
      e
    );
  })();
function fn(e, t) {
  var r;
  if (Qt(e, G)) return e;
  var n = (r = t == null ? void 0 : t.name) != null ? r : "ObservableObject",
    a = new hv(e, new Map(), String(n), Gg(t));
  return $o(e, G, a), e;
}
var zb = Ar("ObservableObjectAdministration", hv);
function sl(e) {
  return (
    ol[e] ||
    (ol[e] = {
      get: function () {
        return this[G].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[G].setObservablePropValue_(e, r);
      },
    })
  );
}
function Wo(e) {
  return No(e) ? zb(e[G]) : !1;
}
function cl(e, t, r) {
  var n;
  (n = e.target_[It]) == null || delete n[r];
}
var Bb = bv(0),
  qb = (function () {
    var e = !1,
      t = {};
    return (
      Object.defineProperty(t, "0", {
        set: function () {
          e = !0;
        },
      }),
      (Object.create(t)[0] = 1),
      e === !1
    );
  })(),
  wi = 0,
  gv = function () {};
function Ub(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
Ub(gv, Array.prototype);
var Ms = (function (e) {
  function t(n, a, o, i) {
    var c;
    return (
      o === void 0 && (o = "ObservableArray"),
      i === void 0 && (i = !1),
      (c = e.call(this) || this),
      Dr(function () {
        var s = new Ts(o, a, i, !0);
        (s.proxy_ = c),
          Mf(c, G, s),
          n && n.length && c.spliceWithArray(0, 0, n),
          qb && Object.defineProperty(c, "0", Bb);
      }),
      c
    );
  }
  $f(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[G].atom_.reportObserved();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (c) {
          return Ho(c) ? c.slice() : c;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return Ls({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    dn(t, [
      {
        key: "length",
        get: function () {
          return this[G].getArrayLength_();
        },
        set: function (a) {
          this[G].setArrayLength_(a);
        },
      },
      {
        key: Symbol.toStringTag,
        get: function () {
          return "Array";
        },
      },
    ])
  );
})(gv);
Object.entries(yo).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && $o(Ms.prototype, t, r);
});
function bv(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[G].get_(e);
    },
    set: function (r) {
      this[G].set_(e, r);
    },
  };
}
function Vb(e) {
  Dt(Ms.prototype, "" + e, bv(e));
}
function mv(e) {
  if (e > wi) {
    for (var t = wi; t < e + 100; t++) Vb(t);
    wi = e;
  }
}
mv(1e3);
function Gb(e, t, r) {
  return new Ms(e, t, r);
}
function wo(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Ho(e)) return t !== void 0 && Q(23), e[G].atom_;
    if (jt(e)) return e.atom_;
    if (Ir(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return r || Q(25, t, os(e)), r;
    }
    if (Wo(e)) {
      if (!t) return Q(26);
      var n = e[G].values_.get(t);
      return n || Q(27, t, os(e)), n;
    }
    if (js(e) || Go(e) || mo(e)) return e;
  } else if (mt(e) && mo(e[G])) return e[G];
  Q(28);
}
function Hb(e, t) {
  if ((e || Q(29), js(e) || Go(e) || mo(e) || Ir(e) || jt(e))) return e;
  if (e[G]) return e[G];
  Q(24, e);
}
function os(e, t) {
  var r;
  if (t !== void 0) r = wo(e, t);
  else {
    if (_a(e)) return e.name;
    Wo(e) || Ir(e) || jt(e) ? (r = Hb(e)) : (r = wo(e));
  }
  return r.name_;
}
function Dr(e) {
  var t = jr(),
    r = Uo(!0);
  st();
  try {
    return e();
  } finally {
    ct(), Vo(r), er(t);
  }
}
var ll = Lo.toString;
function yv(e, t, r) {
  return r === void 0 && (r = -1), is(e, t, r);
}
function is(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var i = ll.call(e);
  if (i !== ll.call(t)) return !1;
  switch (i) {
    case "[object RegExp]":
    case "[object String]":
      return "" + e == "" + t;
    case "[object Number]":
      return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
    case "[object Date]":
    case "[object Boolean]":
      return +e == +t;
    case "[object Symbol]":
      return typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
    case "[object Map]":
    case "[object Set]":
      r >= 0 && r++;
      break;
  }
  (e = ul(e)), (t = ul(t));
  var c = i === "[object Array]";
  if (!c) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      l = t.constructor;
    if (
      s !== l &&
      !(mt(s) && s instanceof s && mt(l) && l instanceof l) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (r === 0) return !1;
  r < 0 && (r = -1), (n = n || []), (a = a || []);
  for (var u = n.length; u--; ) if (n[u] === e) return a[u] === t;
  if ((n.push(e), a.push(t), c)) {
    if (((u = e.length), u !== t.length)) return !1;
    for (; u--; ) if (!is(e[u], t[u], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var v = 0; v < f; v++) {
      var h = d[v];
      if (!(Qt(t, h) && is(e[h], t[h], r - 1, n, a))) return !1;
    }
  }
  return n.pop(), a.pop(), !0;
}
function ul(e) {
  return Ho(e) ? e.slice() : un(e) || Ir(e) || Xt(e) || jt(e) ? Array.from(e.entries()) : e;
}
var dl,
  Wb = ((dl = Mo().Iterator) == null ? void 0 : dl.prototype) || {};
function Ls(e) {
  return (e[Symbol.iterator] = Kb), Object.assign(Object.create(Wb), e);
}
function Kb() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Mo();
  typeof t[e] > "u" && Q("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: ub, extras: { getDebugName: os }, $mobx: G });
if (!m.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!dv) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Yb(e) {
  e();
}
function Jb(e) {
  e || (e = Yb), Sb({ reactionScheduler: e });
}
function Xb(e) {
  return Eb(e);
}
var Zb = 1e4,
  Qb = 1e4,
  em = (function () {
    function e(t) {
      var r = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (n) {
            n === void 0 && (n = Zb), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0);
            var a = Date.now();
            r.registrations.forEach(function (o, i) {
              a - o.registeredAt >= n && (r.finalize(o.value), r.registrations.delete(i));
            }),
              r.registrations.size > 0 && r.scheduleSweep();
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            r.sweep(0);
          },
        });
    }
    return (
      Object.defineProperty(e.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t, r, n) {
          this.registrations.set(n, { value: r, registeredAt: Date.now() }), this.scheduleSweep();
        },
      }),
      Object.defineProperty(e.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t) {
          this.registrations.delete(t);
        },
      }),
      Object.defineProperty(e.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, Qb));
        },
      }),
      e
    );
  })(),
  tm = typeof FinalizationRegistry < "u" ? FinalizationRegistry : em,
  ka = new tm(function (e) {
    var t;
    (t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null);
  }),
  ki = { exports: {} },
  Oi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fl;
function rm() {
  if (fl) return Oi;
  fl = 1;
  var e = _t();
  function t(d, f) {
    return (d === f && (d !== 0 || 1 / d === 1 / f)) || (d !== d && f !== f);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    a = e.useEffect,
    o = e.useLayoutEffect,
    i = e.useDebugValue;
  function c(d, f) {
    var v = f(),
      h = n({ inst: { value: v, getSnapshot: f } }),
      p = h[0].inst,
      g = h[1];
    return (
      o(
        function () {
          (p.value = v), (p.getSnapshot = f), s(p) && g({ inst: p });
        },
        [d, v, f],
      ),
      a(
        function () {
          return (
            s(p) && g({ inst: p }),
            d(function () {
              s(p) && g({ inst: p });
            })
          );
        },
        [d],
      ),
      i(v),
      v
    );
  }
  function s(d) {
    var f = d.getSnapshot;
    d = d.value;
    try {
      var v = f();
      return !r(d, v);
    } catch {
      return !0;
    }
  }
  function l(d, f) {
    return f();
  }
  var u =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? l
      : c;
  return (
    (Oi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u), Oi
  );
}
var vl;
function nm() {
  return vl || ((vl = 1), (ki.exports = rm())), ki.exports;
}
var am = nm();
function pl(e) {
  e.reaction = new $t("observer".concat(e.name), function () {
    var t;
    (e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e);
  });
}
function om(e, t) {
  t === void 0 && (t = "observed");
  var r = k.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (c) {
        return (
          ka.unregister(n),
          (n.onStoreChange = c),
          n.reaction || (pl(n), (n.stateVersion = Symbol())),
          function () {
            var s;
            (n.onStoreChange = null),
              (s = n.reaction) === null || s === void 0 || s.dispose(),
              (n.reaction = null);
          }
        );
      },
      getSnapshot: function () {
        return n.stateVersion;
      },
    };
    r.current = n;
  }
  var a = r.current;
  a.reaction || (pl(a), ka.register(r, a, a)),
    k.useDebugValue(a.reaction, Xb),
    am.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot);
  var o, i;
  if (
    (a.reaction.track(function () {
      try {
        o = e();
      } catch (c) {
        i = c;
      }
    }),
    i)
  )
    throw i;
  return o;
}
var Si,
  xi,
  _v = typeof Symbol == "function" && Symbol.for,
  im =
    (xi =
      (Si = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Si === void 0
        ? void 0
        : Si.configurable) !== null && xi !== void 0
      ? xi
      : !1,
  hl = _v
    ? Symbol.for("react.forward_ref")
    : typeof m.forwardRef == "function" &&
      m.forwardRef(function (e) {
        return null;
      }).$$typeof,
  gl = _v
    ? Symbol.for("react.memo")
    : typeof m.memo == "function" &&
      m.memo(function (e) {
        return null;
      }).$$typeof;
function sm(e, t) {
  var r;
  if (gl && e.$$typeof === gl)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    o = e.displayName || e.name;
  if (hl && e.$$typeof === hl && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var i = function (c, s) {
    return om(function () {
      return a(c, s);
    }, o);
  };
  return (
    (i.displayName = e.displayName),
    im && Object.defineProperty(i, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (i.contextTypes = e.contextTypes),
    n && (i = m.forwardRef(i)),
    (i = m.memo(i)),
    lm(e, i),
    i
  );
}
var cm = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function lm(e, t) {
  Object.keys(e).forEach(function (r) {
    cm[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Ei;
Jb(Do.unstable_batchedUpdates);
Ei = ka.finalizeAllImmediately;
function um(e, t) {
  if (bl(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !bl(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function bl(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var ml = Symbol("patchMixins"),
  wv = Symbol("patchedDefinition");
function dm(e, t) {
  var r = (e[ml] = e[ml] || {}),
    n = (r[t] = r[t] || {});
  return (n.locks = n.locks || 0), (n.methods = n.methods || []), n;
}
function yl(e, t) {
  for (var r = this, n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    a[o - 2] = arguments[o];
  t.locks++;
  try {
    var i;
    return e != null && (i = e.apply(this, a)), i;
  } finally {
    t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (c) {
          c.apply(r, a);
        });
  }
}
function _l(e, t) {
  var r = function () {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    yl.call.apply(yl, [this, e, t].concat(o));
  };
  return r;
}
function fm(e, t, r) {
  var n = dm(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[wv])) {
    var o = e[t],
      i = kv(e, t, a ? a.enumerable : void 0, n, o);
    Object.defineProperty(e, t, i);
  }
}
function kv(e, t, r, n, a) {
  var o,
    i = _l(a, n);
  return (
    (o = {}),
    (o[wv] = !0),
    (o.get = function () {
      return i;
    }),
    (o.set = function (s) {
      if (this === e) i = _l(s, n);
      else {
        var l = kv(this, t, r, n, s);
        Object.defineProperty(this, t, l);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = r),
    o
  );
}
var wl = Symbol("ObserverAdministration"),
  kl = Symbol("isMobXReactObserver");
function ss(e) {
  var t;
  return (t = e[wl]) != null
    ? t
    : (e[wl] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: cs(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function vm(e) {
  var t = e.prototype;
  if (e[kl]) {
    var r = cs(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[kl] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== m.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Ol;
    else if (t.shouldComponentUpdate !== Ol)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = cs(e);
    throw new Error(
      "[mobx-react] class component (" +
        a +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  t.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: pm.call(this, n),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var i = this,
        c = ss(this);
      return (
        (c.mounted = !0),
        ka.unregister(this),
        (c.forceUpdate = function () {
          return i.forceUpdate();
        }),
        (!c.reaction || c.reactionInvalidatedBeforeMount) && c.forceUpdate(),
        o == null ? void 0 : o.apply(this, arguments)
      );
    }),
    fm(t, "componentWillUnmount", function () {
      var i,
        c = ss(this);
      (i = c.reaction) == null || i.dispose(),
        (c.reaction = null),
        (c.forceUpdate = null),
        (c.mounted = !1),
        (c.reactionInvalidatedBeforeMount = !1);
    }),
    e
  );
}
function cs(e) {
  return e.displayName || e.name || "<component>";
}
function pm(e) {
  var t = e.bind(this),
    r = ss(this);
  function n() {
    r.reaction || ((r.reaction = hm(r)), r.mounted || ka.register(this, r, this));
    var a = void 0,
      o = void 0;
    if (
      (r.reaction.track(function () {
        try {
          o = tb(!1, t);
        } catch (i) {
          a = i;
        }
      }),
      a)
    )
      throw a;
    return o;
  }
  return n;
}
function hm(e) {
  return new $t(e.name + ".render()", function () {
    if (!e.mounted) {
      e.reactionInvalidatedBeforeMount = !0;
      return;
    }
    try {
      e.forceUpdate == null || e.forceUpdate();
    } catch {
      var t;
      (t = e.reaction) == null || t.dispose(), (e.reaction = null);
    }
  });
}
function Ol(e, t) {
  return this.state !== t ? !0 : !um(this.props, e);
}
function Ko(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(m.Component, e) ||
    Object.prototype.isPrototypeOf.call(m.PureComponent, e)
      ? vm(e)
      : sm(e)
  );
}
function ls() {
  return (
    (ls = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ls.apply(null, arguments)
  );
}
function gm(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var bm = ["children"],
  Sl = k.createContext({});
function Ov(e) {
  var t = e.children,
    r = gm(e, bm),
    n = k.useContext(Sl),
    a = k.useRef(ls({}, n, r)),
    o = a.current;
  return k.createElement(Sl.Provider, { value: o }, t);
}
Ov.displayName = "MobXProvider";
k.version.split(".")[0];
if (!m.Component) throw new Error("mobx-react requires React to be available");
if (!ce) throw new Error("mobx-react requires mobx to be available");
var mm = Object.defineProperty,
  ym = Object.getOwnPropertyDescriptor,
  Ce = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? ym(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return n && a && mm(t, r, a), a;
  };
const Ci = "Loading ...";
class Se {
  constructor() {
    (this.state = "ROOT"),
      (this.isLoading = !0),
      (this.message = Ci),
      (this.testNonVersioningData = ""),
      (this.testNumberVersioningData = ""),
      (this.testDateVersioningData = ""),
      (this.testTimestampVersioningData = ""),
      dv(this);
  }
  saveState(t) {
    this.state = t;
  }
  saveResponse(t) {
    (this.testData = t.testDataId),
      (this.testDataOptimisticNumber = t.testDataOptimisticNumberId),
      (this.testDataOptimisticTimeStampId = t.testDataOptimisticTimeStampId),
      (this.testDataOptimisticDateId = t.testDataOptimisticDateId);
  }
  saveUpdateResponse(t, r) {
    switch (t) {
      case "WITHOUT_VERSIONING": {
        this.testNonVersioningData = r;
        return;
      }
      case "OPTIMISTIC_DATE": {
        this.testDateVersioningData = r;
        return;
      }
      case "OPTIMISTIC_NUMBER": {
        this.testNumberVersioningData = r;
        return;
      }
      case "OPTIMISTIC_TIMESTAMP": {
        this.testTimestampVersioningData = r;
        return;
      }
      default:
        throw new Error("unsupported " + t);
    }
  }
  clearStates(t) {
    switch (t) {
      case "WITHOUT_VERSIONING": {
        this.testNonVersioningData = "";
        return;
      }
      case "OPTIMISTIC_DATE": {
        this.testDateVersioningData = "";
        return;
      }
      case "OPTIMISTIC_NUMBER": {
        this.testNumberVersioningData = "";
        return;
      }
      case "OPTIMISTIC_TIMESTAMP": {
        this.testTimestampVersioningData = "";
        return;
      }
      default:
        throw new Error("unsupported " + t);
    }
  }
  loading(t) {
    (this.isLoading = !0), (this.message = t ?? Ci);
  }
  stopLoading() {
    (this.isLoading = !1), (this.message = Ci);
  }
}
Ce([ce], Se.prototype, "state", 2);
Ce([ce], Se.prototype, "isLoading", 2);
Ce([ce], Se.prototype, "message", 2);
Ce([ce], Se.prototype, "testData", 2);
Ce([ce], Se.prototype, "testDataOptimisticNumber", 2);
Ce([ce], Se.prototype, "testDataOptimisticDateId", 2);
Ce([ce], Se.prototype, "testDataOptimisticTimeStampId", 2);
Ce([ce], Se.prototype, "testNonVersioningData", 2);
Ce([ce], Se.prototype, "testNumberVersioningData", 2);
Ce([ce], Se.prototype, "testDateVersioningData", 2);
Ce([ce], Se.prototype, "testTimestampVersioningData", 2);
Ce([lt.bound], Se.prototype, "saveState", 1);
Ce([lt.bound], Se.prototype, "saveResponse", 1);
Ce([lt.bound], Se.prototype, "saveUpdateResponse", 1);
Ce([lt.bound], Se.prototype, "clearStates", 1);
Ce([lt], Se.prototype, "loading", 1);
Ce([lt], Se.prototype, "stopLoading", 1);
const _m = new Se();
class wm {
  constructor() {
    this.stateStore = _m;
  }
}
const Sv = new wm(),
  km = m.createContext(Sv),
  Yo = () => m.useContext(km);
function ge(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Fe(e) {
  "@babel/helpers - typeof";
  return (
    (Fe =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Fe(e)
  );
}
function Om(e, t) {
  if (Fe(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fe(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xv(e) {
  var t = Om(e, "string");
  return Fe(t) == "symbol" ? t : t + "";
}
function xl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, xv(n.key), n);
  }
}
function be(e, t, r) {
  return (
    t && xl(e.prototype, t),
    r && xl(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Sm(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qe(e, t) {
  if (t && (Fe(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Sm(e);
}
function Z(e) {
  return (
    (Z = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Z(e)
  );
}
function Oa(e, t) {
  return (
    (Oa = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    Oa(e, t)
  );
}
function Ue(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Oa(e, t);
}
function P(e, t, r) {
  return (
    (t = xv(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function je() {}
function Ev(e) {
  if (Array.isArray(e)) return e;
}
function xm(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      a,
      o,
      i,
      c = [],
      s = !0,
      l = !1;
    try {
      if (((o = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = o.call(r)).done) && (c.push(n.value), c.length !== t); s = !0);
    } catch (u) {
      (l = !0), (a = u);
    } finally {
      try {
        if (!s && r.return != null && ((i = r.return()), Object(i) !== i)) return;
      } finally {
        if (l) throw a;
      }
    }
    return c;
  }
}
function us(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ns(e, t) {
  if (e) {
    if (typeof e == "string") return us(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? us(e, t)
          : void 0
    );
  }
}
function Cv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ee(e, t) {
  return Ev(e) || xm(e, t) || Ns(e, t) || Cv();
}
var Pv = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  Em = function (t) {
    !t ||
      !t.cells ||
      t.cells.forEach(function (r) {
        if (r.isSortable && !r.key)
          try {
            throw Error("isSortable can't be set to true, if the 'key' prop is missing.");
          } catch (n) {
            console.error(n);
          }
      });
  },
  ko = function (t, r) {
    if (t) {
      var n =
        r &&
        r.cells
          .map(function (a) {
            return a.key;
          })
          .includes(t);
      if (!n)
        try {
          throw Error("Cell with ".concat(t, " key not found in head."));
        } catch (a) {
          console.error(a);
        }
    }
  },
  Rv = function (t, r, n) {
    return t ? { width: r } : {};
  },
  El = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  Cm = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = t.destination,
      i = t.sourceIndex;
    if (!o) return r;
    var c = El(i, n, a),
      s = El(o.index, n, a),
      l = r.slice(),
      u = l.splice(c, 1),
      d = ee(u, 1),
      f = d[0];
    return l.splice(s, 0, f), l;
  };
const Pm = "modulepreload",
  Rm = function (e, t) {
    return new URL(e, t).href;
  },
  Cl = {},
  Am = function (t, r, n) {
    let a = Promise.resolve();
    if (r && r.length > 0) {
      let i = function (u) {
        return Promise.all(
          u.map((d) =>
            Promise.resolve(d).then(
              (f) => ({ status: "fulfilled", value: f }),
              (f) => ({ status: "rejected", reason: f }),
            ),
          ),
        );
      };
      const c = document.getElementsByTagName("link"),
        s = document.querySelector("meta[property=csp-nonce]"),
        l = (s == null ? void 0 : s.nonce) || (s == null ? void 0 : s.getAttribute("nonce"));
      a = i(
        r.map((u) => {
          if (((u = Rm(u, n)), u in Cl)) return;
          Cl[u] = !0;
          const d = u.endsWith(".css"),
            f = d ? '[rel="stylesheet"]' : "";
          if (!!n)
            for (let p = c.length - 1; p >= 0; p--) {
              const g = c[p];
              if (g.href === u && (!d || g.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${u}"]${f}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = d ? "stylesheet" : Pm),
            d || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = u),
            l && h.setAttribute("nonce", l),
            document.head.appendChild(h),
            d)
          )
            return new Promise((p, g) => {
              h.addEventListener("load", p),
                h.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${u}`)));
            });
        }),
      );
    }
    function o(i) {
      const c = new Event("vite:preloadError", { cancelable: !0 });
      if (((c.payload = i), window.dispatchEvent(c), !c.defaultPrevented)) throw i;
    }
    return a.then((i) => {
      for (const c of i || []) c.status === "rejected" && o(c.reason);
      return t().catch(o);
    });
  };
function Y() {
  return (
    (Y = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Y.apply(null, arguments)
  );
}
function jm(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function re(e, t) {
  if (e == null) return {};
  var r,
    n,
    a = jm(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      (r = o[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  }
  return a;
}
function Pl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Pi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Pl(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Im = (function () {
  function e(t) {
    var r = this;
    ge(this, e),
      P(this, "_isAnalyticsEvent", !0),
      P(this, "clone", function () {
        var n = Pi({}, r.payload);
        return new e({ payload: n });
      }),
      (this.payload = t.payload);
  }
  return be(e, [
    {
      key: "update",
      value: function (r) {
        return (
          typeof r == "function" && (this.payload = r(this.payload)),
          Fe(r) === "object" && (this.payload = Pi(Pi({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function Dm(e) {
  if (Array.isArray(e)) return us(e);
}
function Av(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function Tm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function He(e) {
  return Dm(e) || Av(e) || Ns(e) || Tm();
}
function Mm(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Z(e)) !== null; );
  return e;
}
function Oo() {
  return (
    (Oo =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = Mm(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    Oo.apply(null, arguments)
  );
}
function Lm(e, t, r) {
  return (t = Z(t)), qe(e, jv() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r));
}
function jv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (jv = function () {
    return !!e;
  })();
}
function Nm(e, t, r, n) {
  var a = Oo(Z(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var $m = (function (e) {
  function t(r) {
    var n;
    return (
      ge(this, t),
      (n = Lm(this, t, [r])),
      P(n, "_isUIAnalyticsEvent", !0),
      P(n, "clone", function () {
        if (n.hasFired) return null;
        var a = He(n.context),
          o = He(n.handlers),
          i = JSON.parse(JSON.stringify(n.payload));
        return new t({ context: a, handlers: o, payload: i });
      }),
      P(n, "fire", function (a) {
        n.hasFired ||
          (n.handlers.forEach(function (o) {
            return o(n, a);
          }),
          (n.hasFired = !0));
      }),
      (n.context = r.context || []),
      (n.handlers = r.handlers || []),
      (n.hasFired = !1),
      n
    );
  }
  return (
    Ue(t, e),
    be(t, [
      {
        key: "update",
        value: function (n) {
          return this.hasFired ? this : Nm(t, "update", this, 3)([n]);
        },
      },
    ])
  );
})(Im);
function Rl(e, t, r, n, a, o, i) {
  try {
    var c = e[o](i),
      s = c.value;
  } catch (l) {
    return void r(l);
  }
  c.done ? t(s) : Promise.resolve(s).then(n, a);
}
function we(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, a) {
      var o = e.apply(t, r);
      function i(s) {
        Rl(o, n, a, i, c, "next", s);
      }
      function c(s) {
        Rl(o, n, a, i, c, "throw", s);
      }
      i(void 0);
    });
  };
}
var Ri = { exports: {} },
  Ai = { exports: {} },
  Al;
function Fm() {
  return (
    Al ||
      ((Al = 1),
      (function (e) {
        function t(r) {
          "@babel/helpers - typeof";
          return (
            (e.exports = t =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (n) {
                    return typeof n;
                  }
                : function (n) {
                    return n &&
                      typeof Symbol == "function" &&
                      n.constructor === Symbol &&
                      n !== Symbol.prototype
                      ? "symbol"
                      : typeof n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r)
          );
        }
        (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
      })(Ai)),
    Ai.exports
  );
}
var jl;
function zm() {
  return (
    jl ||
      ((jl = 1),
      (function (e) {
        var t = Fm().default;
        function r() {
          (e.exports = r =
            function () {
              return a;
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
          var n,
            a = {},
            o = Object.prototype,
            i = o.hasOwnProperty,
            c = typeof Symbol == "function" ? Symbol : {},
            s = c.iterator || "@@iterator",
            l = c.asyncIterator || "@@asyncIterator",
            u = c.toStringTag || "@@toStringTag";
          function d(R, E, I, D) {
            return Object.defineProperty(R, E, {
              value: I,
              enumerable: !D,
              configurable: !D,
              writable: !D,
            });
          }
          try {
            d({}, "");
          } catch {
            d = function (I, D, N) {
              return (I[D] = N);
            };
          }
          function f(R, E, I, D) {
            var N = E && E.prototype instanceof p ? E : p,
              z = Object.create(N.prototype);
            return (
              d(
                z,
                "_invoke",
                (function (j, K, q) {
                  var U = 1;
                  return function (oe, J) {
                    if (U === 3) throw Error("Generator is already running");
                    if (U === 4) {
                      if (oe === "throw") throw J;
                      return { value: n, done: !0 };
                    }
                    for (q.method = oe, q.arg = J; ; ) {
                      var ve = q.delegate;
                      if (ve) {
                        var pe = A(ve, q);
                        if (pe) {
                          if (pe === h) continue;
                          return pe;
                        }
                      }
                      if (q.method === "next") q.sent = q._sent = q.arg;
                      else if (q.method === "throw") {
                        if (U === 1) throw ((U = 4), q.arg);
                        q.dispatchException(q.arg);
                      } else q.method === "return" && q.abrupt("return", q.arg);
                      U = 3;
                      var _e = v(j, K, q);
                      if (_e.type === "normal") {
                        if (((U = q.done ? 4 : 2), _e.arg === h)) continue;
                        return { value: _e.arg, done: q.done };
                      }
                      _e.type === "throw" && ((U = 4), (q.method = "throw"), (q.arg = _e.arg));
                    }
                  };
                })(R, I, new B(D || [])),
                !0,
              ),
              z
            );
          }
          function v(R, E, I) {
            try {
              return { type: "normal", arg: R.call(E, I) };
            } catch (D) {
              return { type: "throw", arg: D };
            }
          }
          a.wrap = f;
          var h = {};
          function p() {}
          function g() {}
          function b() {}
          var y = {};
          d(y, s, function () {
            return this;
          });
          var O = Object.getPrototypeOf,
            w = O && O(O(H([])));
          w && w !== o && i.call(w, s) && (y = w);
          var _ = (b.prototype = p.prototype = Object.create(y));
          function S(R) {
            ["next", "throw", "return"].forEach(function (E) {
              d(R, E, function (I) {
                return this._invoke(E, I);
              });
            });
          }
          function x(R, E) {
            function I(N, z, j, K) {
              var q = v(R[N], R, z);
              if (q.type !== "throw") {
                var U = q.arg,
                  oe = U.value;
                return oe && t(oe) == "object" && i.call(oe, "__await")
                  ? E.resolve(oe.__await).then(
                      function (J) {
                        I("next", J, j, K);
                      },
                      function (J) {
                        I("throw", J, j, K);
                      },
                    )
                  : E.resolve(oe).then(
                      function (J) {
                        (U.value = J), j(U);
                      },
                      function (J) {
                        return I("throw", J, j, K);
                      },
                    );
              }
              K(q.arg);
            }
            var D;
            d(
              this,
              "_invoke",
              function (N, z) {
                function j() {
                  return new E(function (K, q) {
                    I(N, z, K, q);
                  });
                }
                return (D = D ? D.then(j, j) : j());
              },
              !0,
            );
          }
          function A(R, E) {
            var I = E.method,
              D = R.i[I];
            if (D === n)
              return (
                (E.delegate = null),
                (I === "throw" &&
                  R.i.return &&
                  ((E.method = "return"), (E.arg = n), A(R, E), E.method === "throw")) ||
                  (I !== "return" &&
                    ((E.method = "throw"),
                    (E.arg = new TypeError("The iterator does not provide a '" + I + "' method")))),
                h
              );
            var N = v(D, R.i, E.arg);
            if (N.type === "throw")
              return (E.method = "throw"), (E.arg = N.arg), (E.delegate = null), h;
            var z = N.arg;
            return z
              ? z.done
                ? ((E[R.r] = z.value),
                  (E.next = R.n),
                  E.method !== "return" && ((E.method = "next"), (E.arg = n)),
                  (E.delegate = null),
                  h)
                : z
              : ((E.method = "throw"),
                (E.arg = new TypeError("iterator result is not an object")),
                (E.delegate = null),
                h);
          }
          function $(R) {
            this.tryEntries.push(R);
          }
          function M(R) {
            var E = R[4] || {};
            (E.type = "normal"), (E.arg = n), (R[4] = E);
          }
          function B(R) {
            (this.tryEntries = [[-1]]), R.forEach($, this), this.reset(!0);
          }
          function H(R) {
            if (R != null) {
              var E = R[s];
              if (E) return E.call(R);
              if (typeof R.next == "function") return R;
              if (!isNaN(R.length)) {
                var I = -1,
                  D = function N() {
                    for (; ++I < R.length; )
                      if (i.call(R, I)) return (N.value = R[I]), (N.done = !1), N;
                    return (N.value = n), (N.done = !0), N;
                  };
                return (D.next = D);
              }
            }
            throw new TypeError(t(R) + " is not iterable");
          }
          return (
            (g.prototype = b),
            d(_, "constructor", b),
            d(b, "constructor", g),
            (g.displayName = d(b, u, "GeneratorFunction")),
            (a.isGeneratorFunction = function (R) {
              var E = typeof R == "function" && R.constructor;
              return !!E && (E === g || (E.displayName || E.name) === "GeneratorFunction");
            }),
            (a.mark = function (R) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(R, b)
                  : ((R.__proto__ = b), d(R, u, "GeneratorFunction")),
                (R.prototype = Object.create(_)),
                R
              );
            }),
            (a.awrap = function (R) {
              return { __await: R };
            }),
            S(x.prototype),
            d(x.prototype, l, function () {
              return this;
            }),
            (a.AsyncIterator = x),
            (a.async = function (R, E, I, D, N) {
              N === void 0 && (N = Promise);
              var z = new x(f(R, E, I, D), N);
              return a.isGeneratorFunction(E)
                ? z
                : z.next().then(function (j) {
                    return j.done ? j.value : z.next();
                  });
            }),
            S(_),
            d(_, u, "Generator"),
            d(_, s, function () {
              return this;
            }),
            d(_, "toString", function () {
              return "[object Generator]";
            }),
            (a.keys = function (R) {
              var E = Object(R),
                I = [];
              for (var D in E) I.unshift(D);
              return function N() {
                for (; I.length; ) if ((D = I.pop()) in E) return (N.value = D), (N.done = !1), N;
                return (N.done = !0), N;
              };
            }),
            (a.values = H),
            (B.prototype = {
              constructor: B,
              reset: function (E) {
                if (
                  ((this.prev = this.next = 0),
                  (this.sent = this._sent = n),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = n),
                  this.tryEntries.forEach(M),
                  !E)
                )
                  for (var I in this)
                    I.charAt(0) === "t" && i.call(this, I) && !isNaN(+I.slice(1)) && (this[I] = n);
              },
              stop: function () {
                this.done = !0;
                var E = this.tryEntries[0][4];
                if (E.type === "throw") throw E.arg;
                return this.rval;
              },
              dispatchException: function (E) {
                if (this.done) throw E;
                var I = this;
                function D(oe) {
                  (j.type = "throw"), (j.arg = E), (I.next = oe);
                }
                for (var N = I.tryEntries.length - 1; N >= 0; --N) {
                  var z = this.tryEntries[N],
                    j = z[4],
                    K = this.prev,
                    q = z[1],
                    U = z[2];
                  if (z[0] === -1) return D("end"), !1;
                  if (!q && !U) throw Error("try statement without catch or finally");
                  if (z[0] != null && z[0] <= K) {
                    if (K < q) return (this.method = "next"), (this.arg = n), D(q), !0;
                    if (K < U) return D(U), !1;
                  }
                }
              },
              abrupt: function (E, I) {
                for (var D = this.tryEntries.length - 1; D >= 0; --D) {
                  var N = this.tryEntries[D];
                  if (N[0] > -1 && N[0] <= this.prev && this.prev < N[2]) {
                    var z = N;
                    break;
                  }
                }
                z && (E === "break" || E === "continue") && z[0] <= I && I <= z[2] && (z = null);
                var j = z ? z[4] : {};
                return (
                  (j.type = E),
                  (j.arg = I),
                  z ? ((this.method = "next"), (this.next = z[2]), h) : this.complete(j)
                );
              },
              complete: function (E, I) {
                if (E.type === "throw") throw E.arg;
                return (
                  E.type === "break" || E.type === "continue"
                    ? (this.next = E.arg)
                    : E.type === "return"
                      ? ((this.rval = this.arg = E.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : E.type === "normal" && I && (this.next = I),
                  h
                );
              },
              finish: function (E) {
                for (var I = this.tryEntries.length - 1; I >= 0; --I) {
                  var D = this.tryEntries[I];
                  if (D[2] === E) return this.complete(D[4], D[3]), M(D), h;
                }
              },
              catch: function (E) {
                for (var I = this.tryEntries.length - 1; I >= 0; --I) {
                  var D = this.tryEntries[I];
                  if (D[0] === E) {
                    var N = D[4];
                    if (N.type === "throw") {
                      var z = N.arg;
                      M(D);
                    }
                    return z;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function (E, I, D) {
                return (
                  (this.delegate = { i: H(E), r: I, n: D }),
                  this.method === "next" && (this.arg = n),
                  h
                );
              },
            }),
            a
          );
        }
        (e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports);
      })(Ri)),
    Ri.exports
  );
}
var ji, Il;
function Bm() {
  if (Il) return ji;
  Il = 1;
  var e = zm()();
  ji = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return ji;
}
var qm = Bm();
const W = Rr(qm);
var hr = {},
  $r = {},
  Ua = {},
  Dl;
function Um() {
  if (Dl) return Ua;
  (Dl = 1), Object.defineProperty(Ua, "__esModule", { value: !0 });
  const e = lr();
  let t = class {
    constructor(n) {
      (this._sdkKey = n),
        (this._rawValues = null),
        (this._values = null),
        (this._source = "Uninitialized"),
        (this._lcut = 0),
        (this._receivedAt = 0),
        (this._bootstrapMetadata = null),
        (this._warnings = new Set());
    }
    reset() {
      (this._values = null),
        (this._rawValues = null),
        (this._source = "Loading"),
        (this._lcut = 0),
        (this._receivedAt = 0),
        (this._bootstrapMetadata = null);
    }
    finalize() {
      this._values || (this._source = "NoValues");
    }
    getValues() {
      return this._rawValues
        ? (0, e._typedJsonParse)(this._rawValues, "has_updates", "EvaluationStoreValues")
        : null;
    }
    setValues(n, a) {
      var o;
      if (!n) return !1;
      const i = (0, e._typedJsonParse)(n.data, "has_updates", "EvaluationResponse");
      return i == null
        ? !1
        : ((this._source = n.source),
          (i == null ? void 0 : i.has_updates) !== !0 ||
            ((this._rawValues = n.data),
            (this._lcut = i.time),
            (this._receivedAt = n.receivedAt),
            (this._values = i),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(n.source, i)),
            n.source && i.user && this._setWarningState(a, i),
            e.SDKFlags.setFlags(this._sdkKey, (o = i.sdk_flags) !== null && o !== void 0 ? o : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(n) {
      var a;
      return this._getDetailedStoreResult(
        (a = this._values) === null || a === void 0 ? void 0 : a.feature_gates,
        n,
      );
    }
    getConfig(n) {
      var a;
      return this._getDetailedStoreResult(
        (a = this._values) === null || a === void 0 ? void 0 : a.dynamic_configs,
        n,
      );
    }
    getLayer(n) {
      var a;
      return this._getDetailedStoreResult(
        (a = this._values) === null || a === void 0 ? void 0 : a.layer_configs,
        n,
      );
    }
    getParamStore(n) {
      var a;
      return this._getDetailedStoreResult(
        (a = this._values) === null || a === void 0 ? void 0 : a.param_stores,
        n,
      );
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var n;
      return (n = this._values) === null || n === void 0 ? void 0 : n.exposures;
    }
    _extractBootstrapMetadata(n, a) {
      if (n !== "Bootstrap") return null;
      const o = {};
      return (
        a.user && (o.user = a.user),
        a.sdkInfo && (o.generatorSDKInfo = a.sdkInfo),
        (o.lcut = a.time),
        o
      );
    }
    _getDetailedStoreResult(n, a) {
      let o = null;
      return (
        n && (o = n[a] ? n[a] : n[(0, e._DJB2)(a)]),
        { result: o, details: this._getDetails(o == null) }
      );
    }
    _setWarningState(n, a) {
      var o, i;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((o = n.customIDs) === null || o === void 0 ? void 0 : o.stableID) !== c &&
        ((!((i = n.customIDs) === null || i === void 0) && i.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in a) {
        const s = a.user;
        (0, e._getFullUserHash)(n) !== (0, e._getFullUserHash)(s) &&
          this._warnings.add("PartialUserMatch");
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues")
        return { reason: this._source };
      const n = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return this._warnings.size > 0 && (n.warnings = Array.from(this._warnings)), n;
    }
    _getDetails(n) {
      var a, o;
      const i = this.getCurrentSourceDetails();
      let c = i.reason;
      const s = (a = i.warnings) !== null && a !== void 0 ? a : [];
      this._source === "Bootstrap" && s.length > 0 && (c = c + s[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${n ? "Unrecognized" : "Recognized"}`);
      const l =
        this._source === "Bootstrap" && (o = this._bootstrapMetadata) !== null && o !== void 0
          ? o
          : void 0;
      return l && (i.bootstrapMetadata = l), Object.assign(Object.assign({}, i), { reason: c });
    }
  };
  return (Ua.default = t), Ua;
}
var Fr = {},
  $n = {},
  Tl;
function Vm() {
  if (Tl) return $n;
  (Tl = 1),
    Object.defineProperty($n, "__esModule", { value: !0 }),
    ($n._resolveDeltasResponse = void 0);
  const e = lr(),
    t = 2;
  function r(i, c) {
    const s = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const l = n(i, s),
      u = a(l),
      d = (0, e._DJB2Object)(
        {
          feature_gates: u.feature_gates,
          dynamic_configs: u.dynamic_configs,
          layer_configs: u.layer_configs,
        },
        t,
      );
    return d === s.checksumV2
      ? JSON.stringify(u)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: u,
          badFullResponse: s.deltas_full_response,
        };
  }
  $n._resolveDeltasResponse = r;
  function n(i, c) {
    return Object.assign(Object.assign(Object.assign({}, i), c), {
      feature_gates: Object.assign(Object.assign({}, i.feature_gates), c.feature_gates),
      layer_configs: Object.assign(Object.assign({}, i.layer_configs), c.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, i.dynamic_configs), c.dynamic_configs),
    });
  }
  function a(i) {
    const c = i;
    return (
      o(i.deleted_gates, c.feature_gates),
      delete c.deleted_gates,
      o(i.deleted_configs, c.dynamic_configs),
      delete c.deleted_configs,
      o(i.deleted_layers, c.layer_configs),
      delete c.deleted_layers,
      c
    );
  }
  function o(i, c) {
    i == null ||
      i.forEach((s) => {
        delete c[s];
      });
  }
  return $n;
}
var Ml;
function Iv() {
  if (Ml) return Fr;
  Ml = 1;
  var e =
    (Fr && Fr.__awaiter) ||
    function (a, o, i, c) {
      function s(l) {
        return l instanceof i
          ? l
          : new i(function (u) {
              u(l);
            });
      }
      return new (i || (i = Promise))(function (l, u) {
        function d(h) {
          try {
            v(c.next(h));
          } catch (p) {
            u(p);
          }
        }
        function f(h) {
          try {
            v(c.throw(h));
          } catch (p) {
            u(p);
          }
        }
        function v(h) {
          h.done ? l(h.value) : s(h.value).then(d, f);
        }
        v((c = c.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(Fr, "__esModule", { value: !0 });
  const t = lr(),
    r = Vm();
  class n extends t.NetworkCore {
    constructor(o, i) {
      super(o, i);
      const c = o == null ? void 0 : o.networkConfig;
      (this._option = o),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          c == null ? void 0 : c.initializeUrl,
          c == null ? void 0 : c.api,
          c == null ? void 0 : c.initializeFallbackUrls,
        ));
    }
    fetchEvaluations(o, i, c, s, l) {
      var u, d, f, v, h, p;
      return e(this, void 0, void 0, function* () {
        const g = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
        let b = {
          user: s,
          hash:
            (f =
              (d = (u = this._option) === null || u === void 0 ? void 0 : u.networkConfig) ===
                null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (g != null && g.has_updates) {
          const y =
            (g == null ? void 0 : g.hash_used) !==
            ((p =
              (h = (v = this._option) === null || v === void 0 ? void 0 : v.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && p !== void 0
              ? p
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: l && !y ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && l ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: y ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(o, g, b, c);
      });
    }
    _fetchEvaluations(o, i, c, s) {
      var l, u;
      return e(this, void 0, void 0, function* () {
        const d = yield this.post({
          sdkKey: o,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: s,
        });
        if ((d == null ? void 0 : d.code) === 204) return '{"has_updates": false}';
        if ((d == null ? void 0 : d.code) !== 200)
          return (l = d == null ? void 0 : d.body) !== null && l !== void 0 ? l : null;
        if (
          (i == null ? void 0 : i.has_updates) !== !0 ||
          ((u = d.body) === null || u === void 0 ? void 0 : u.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const f = (0, r._resolveDeltasResponse)(i, d.body);
        return typeof f == "string"
          ? f
          : this._fetchEvaluations(
              o,
              i,
              Object.assign(Object.assign(Object.assign({}, c), f), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return (Fr.default = n), Fr;
}
var Fn = {},
  Ll;
function Gm() {
  if (Ll) return Fn;
  (Ll = 1),
    Object.defineProperty(Fn, "__esModule", { value: !0 }),
    (Fn._makeParamStoreGetter = void 0);
  const e = lr(),
    t = { disableExposureLog: !0 };
  function r(u) {
    return u == null || u.disableExposureLog === !1;
  }
  function n(u, d) {
    return d != null && !(0, e._isTypeMatch)(u, d);
  }
  function a(u, d) {
    return u.value;
  }
  function o(u, d, f) {
    return u.getFeatureGate(d.gate_name, r(f) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function i(u, d, f, v) {
    const p = u.getDynamicConfig(d.config_name, r(v) ? void 0 : t).get(d.param_name);
    return n(p, f) ? f : p;
  }
  function c(u, d, f, v) {
    const p = u.getExperiment(d.experiment_name, r(v) ? void 0 : t).get(d.param_name);
    return n(p, f) ? f : p;
  }
  function s(u, d, f, v) {
    const p = u.getLayer(d.layer_name, r(v) ? void 0 : t).get(d.param_name);
    return n(p, f) ? f : p;
  }
  function l(u, d, f) {
    return (v, h) => {
      if (d == null) return h;
      const p = d[v];
      if (p == null || (h != null && (0, e._typeOf)(h) !== p.param_type)) return h;
      switch (p.ref_type) {
        case "static":
          return a(p);
        case "gate":
          return o(u, p, f);
        case "dynamic_config":
          return i(u, p, h, f);
        case "experiment":
          return c(u, p, h, f);
        case "layer":
          return s(u, p, h, f);
        default:
          return h;
      }
    };
  }
  return (Fn._makeParamStoreGetter = l), Fn;
}
var gr = {},
  Nl;
function Hm() {
  if (Nl) return gr;
  Nl = 1;
  var e =
    (gr && gr.__awaiter) ||
    function (a, o, i, c) {
      function s(l) {
        return l instanceof i
          ? l
          : new i(function (u) {
              u(l);
            });
      }
      return new (i || (i = Promise))(function (l, u) {
        function d(h) {
          try {
            v(c.next(h));
          } catch (p) {
            u(p);
          }
        }
        function f(h) {
          try {
            v(c.throw(h));
          } catch (p) {
            u(p);
          }
        }
        function v(h) {
          h.done ? l(h.value) : s(h.value).then(d, f);
        }
        v((c = c.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(gr, "__esModule", { value: !0 }),
    (gr.StatsigEvaluationsDataAdapter = void 0);
  const t = lr(),
    r = Iv();
  let n = class extends t.DataAdapterCore {
    constructor() {
      super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null);
    }
    attach(o, i, c) {
      super.attach(o, i, c),
        c !== null && c instanceof r.default
          ? (this._network = c)
          : (this._network = new r.default(i ?? {}));
    }
    getDataAsync(o, i, c) {
      return this._getDataAsyncImpl(o, (0, t._normalizeUser)(i, this._options), c);
    }
    prefetchData(o, i) {
      return this._prefetchDataImpl(o, i);
    }
    setData(o) {
      const i = (0, t._typedJsonParse)(o, "has_updates", "data");
      i && "user" in i
        ? super.setData(o, i.user)
        : t.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(o, i) {
      super.setData(o, i);
    }
    _fetchFromNetwork(o, i, c, s) {
      var l;
      return e(this, void 0, void 0, function* () {
        const u = yield (l = this._network) === null || l === void 0
          ? void 0
          : l.fetchEvaluations(this._getSdkKey(), o, c == null ? void 0 : c.priority, i, s);
        return u ?? null;
      });
    }
    _getCacheKey(o) {
      var i;
      const c = (0, t._getStorageKey)(
        this._getSdkKey(),
        o,
        (i = this._options) === null || i === void 0 ? void 0 : i.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${c}`;
    }
    _isCachedResultValidFor204(o, i) {
      return o.fullUserHash != null && o.fullUserHash === (0, t._getFullUserHash)(i);
    }
  };
  return (gr.StatsigEvaluationsDataAdapter = n), gr;
}
var $l;
function Wm() {
  if ($l) return $r;
  $l = 1;
  var e =
    ($r && $r.__awaiter) ||
    function (c, s, l, u) {
      function d(f) {
        return f instanceof l
          ? f
          : new l(function (v) {
              v(f);
            });
      }
      return new (l || (l = Promise))(function (f, v) {
        function h(b) {
          try {
            g(u.next(b));
          } catch (y) {
            v(y);
          }
        }
        function p(b) {
          try {
            g(u.throw(b));
          } catch (y) {
            v(y);
          }
        }
        function g(b) {
          b.done ? f(b.value) : d(b.value).then(h, p);
        }
        g((u = u.apply(c, s || [])).next());
      });
    };
  Object.defineProperty($r, "__esModule", { value: !0 });
  const t = lr(),
    r = Um(),
    n = Iv(),
    a = Gm(),
    o = Hm();
  let i = class ds extends t.StatsigClientBase {
    static instance(s) {
      const l = (0, t._getStatsigGlobal)().instance(s);
      return l instanceof ds
        ? l
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new ds(s ?? "", {}));
    }
    constructor(s, l, u = null) {
      var d, f;
      t.SDKType._setClientType(s, "javascript-client");
      const v = new n.default(u, (p) => {
        this.$emt(p);
      });
      super(
        s,
        (d = u == null ? void 0 : u.dataAdapter) !== null && d !== void 0
          ? d
          : new o.StatsigEvaluationsDataAdapter(),
        v,
        u,
      ),
        (this.getFeatureGate = this._memoize(
          t.MemoPrefix._gate,
          this._getFeatureGateImpl.bind(this),
        )),
        (this.getDynamicConfig = this._memoize(
          t.MemoPrefix._dynamicConfig,
          this._getDynamicConfigImpl.bind(this),
        )),
        (this.getExperiment = this._memoize(
          t.MemoPrefix._experiment,
          this._getExperimentImpl.bind(this),
        )),
        (this.getLayer = this._memoize(t.MemoPrefix._layer, this._getLayerImpl.bind(this))),
        (this.getParameterStore = this._memoize(
          t.MemoPrefix._paramStore,
          this._getParameterStoreImpl.bind(this),
        )),
        (this._store = new r.default(s)),
        (this._network = v),
        (this._user = this._configureUser(l, u));
      const h = (f = u == null ? void 0 : u.plugins) !== null && f !== void 0 ? f : [];
      for (const p of h) p.bind(this);
    }
    initializeSync(s) {
      var l;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : []),
          ])
        : (this._logger.start(), this.updateUserSync(this._user, s));
    }
    initializeAsync(s) {
      return e(this, void 0, void 0, function* () {
        return this._initializePromise
          ? this._initializePromise
          : ((this._initializePromise = this._initializeAsyncImpl(s)), this._initializePromise);
      });
    }
    updateUserSync(s, l) {
      var u;
      const d = performance.now(),
        f = [...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : [])];
      this._resetForUser(s);
      const v = this.dataAdapter.getDataSync(this._user);
      v == null && f.push("NoCachedValues"),
        this._store.setValues(v, this._user),
        this._finalizeUpdate(v);
      const h = l == null ? void 0 : l.disableBackgroundCacheRefresh;
      return h === !0 || (h == null && (v == null ? void 0 : v.source) === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - d,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          )
        : (this._runPostUpdate(v ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - d,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          ));
    }
    updateUserAsync(s, l) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(s);
        const u = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(u);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, u, l)),
          u !== this._user)
        )
          return (0, t.createUpdateDetails)(
            !1,
            this._store.getSource(),
            -1,
            new Error("User changed during update"),
            this._network.getLastUsedInitUrlAndReset(),
          );
        let f = !1;
        d != null &&
          (t.Diagnostics._markInitProcessStart(this._sdkKey),
          (f = this._store.setValues(d, this._user)),
          t.Diagnostics._markInitProcessEnd(this._sdkKey, { success: f })),
          this._finalizeUpdate(d),
          f ||
            (this._errorBoundary.attachErrorIfNoneExists(
              t.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          t.Diagnostics._markInitOverallEnd(this._sdkKey, f, this._store.getCurrentSourceDetails());
        const v = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          f,
          this._store.getSource(),
          v,
          this._errorBoundary.getLastSeenErrorAndReset(),
          this._network.getLastUsedInitUrlAndReset(),
          this._store.getWarnings(),
        );
      });
    }
    getContext() {
      return {
        sdkKey: this._sdkKey,
        options: this._options,
        values: this._store.getValues(),
        user: JSON.parse(JSON.stringify(this._user)),
        errorBoundary: this._errorBoundary,
        session: t.StatsigSession.get(this._sdkKey),
        stableID: t.StableID.get(this._sdkKey),
      };
    }
    checkGate(s, l) {
      return this.getFeatureGate(s, l).value;
    }
    logEvent(s, l, u) {
      const d = typeof s == "string" ? { eventName: s, value: l, metadata: u } : s;
      this.$emt({ name: "log_event_called", event: d }),
        this._logger.enqueue(
          Object.assign(Object.assign({}, d), { user: this._user, time: Date.now() }),
        );
    }
    _primeReadyRipcord() {
      this.$on("error", () => {
        this.loadingStatus === "Loading" && this._finalizeUpdate(null);
      });
    }
    _initializeAsyncImpl(s) {
      return e(this, void 0, void 0, function* () {
        return (
          t.Storage.isReady() || (yield t.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, s)
        );
      });
    }
    _finalizeUpdate(s) {
      this._store.finalize(), this._setStatus("Ready", s);
    }
    _runPostUpdate(s, l) {
      this.dataAdapter.getDataAsync(s, l, { priority: "low" }).catch((u) => {
        t.Log.error("An error occurred after update.", u);
      });
    }
    _resetForUser(s) {
      this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(s, this._options));
    }
    _configureUser(s, l) {
      var u;
      const d = (0, t._normalizeUser)(s, l),
        f = (u = d.customIDs) === null || u === void 0 ? void 0 : u.stableID;
      return f && t.StableID.setOverride(f, this._sdkKey), d;
    }
    _getFeatureGateImpl(s, l) {
      var u, d;
      const { result: f, details: v } = this._store.getGate(s),
        h = (0, t._makeFeatureGate)(s, v, f),
        p =
          (d = (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, h, this._user, l),
        g = p ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          l,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(s, l) {
      var u, d;
      const { result: f, details: v } = this._store.getConfig(s),
        h = (0, t._makeDynamicConfig)(s, v, f),
        p =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(u, h, this._user, l),
        g = p ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          l,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(s, l) {
      var u, d, f, v;
      const { result: h, details: p } = this._store.getConfig(s),
        g = (0, t._makeExperiment)(s, p, h);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (u = g.__evaluation) === null || u === void 0 ? void 0 : u.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const b =
          (v =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || v === void 0
            ? void 0
            : v.call(f, g, this._user, l),
        y = b ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, y, this._store.getExposureMapping()),
          l,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: y }),
        y
      );
    }
    _getLayerImpl(s, l) {
      var u, d, f;
      const { result: v, details: h } = this._store.getLayer(s),
        p = (0, t._makeLayer)(s, h, v),
        g =
          (d =
            (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, p, this._user, l);
      l != null && l.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const b = (0, t._mergeOverride)(
        p,
        g,
        (f = g == null ? void 0 : g.__value) !== null && f !== void 0 ? f : p.__value,
        (y) => {
          (l != null && l.disableExposureLog) ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                y,
                this._store.getExposureMapping(),
              ),
              l,
            );
        },
      );
      return this.$emt({ name: "layer_evaluation", layer: b }), b;
    }
    _getParameterStoreImpl(s, l) {
      var u, d;
      const { result: f, details: v } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const h = {
          name: s,
          details: v,
          __configuration: f,
          get: (0, a._makeParamStoreGetter)(this, f, l),
        },
        p =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(u, h, l);
      return (
        p != null &&
          ((h.__configuration = p.config),
          (h.details = p.details),
          (h.get = (0, a._makeParamStoreGetter)(this, p.config, l))),
        h
      );
    }
  };
  return ($r.default = i), $r;
}
var Fl;
function Km() {
  return (
    Fl ||
      ((Fl = 1),
      (function (e) {
        var t =
            (hr && hr.__createBinding) ||
            (Object.create
              ? function (i, c, s, l) {
                  l === void 0 && (l = s);
                  var u = Object.getOwnPropertyDescriptor(c, s);
                  (!u || ("get" in u ? !c.__esModule : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return c[s];
                      },
                    }),
                    Object.defineProperty(i, l, u);
                }
              : function (i, c, s, l) {
                  l === void 0 && (l = s), (i[l] = c[s]);
                }),
          r =
            (hr && hr.__exportStar) ||
            function (i, c) {
              for (var s in i)
                s !== "default" && !Object.prototype.hasOwnProperty.call(c, s) && t(c, i, s);
            };
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0);
        const n = lr(),
          a = Wm();
        (e.StatsigClient = a.default), r(lr(), e);
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(hr)),
    hr
  );
}
var Ct = Km(),
  Ii = { exports: {} };
/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */ var zl;
function Ym() {
  return (
    zl ||
      ((zl = 1),
      (function (e, t) {
        (function (r) {
          var n = Array.isArray
              ? Array.isArray
              : function (f) {
                  return Object.prototype.toString.call(f) === "[object Array]";
                },
            a = 10;
          function o() {
            (this._events = {}), this._conf && i.call(this, this._conf);
          }
          function i(d) {
            d
              ? ((this._conf = d),
                d.delimiter && (this.delimiter = d.delimiter),
                (this._maxListeners = d.maxListeners !== r ? d.maxListeners : a),
                d.wildcard && (this.wildcard = d.wildcard),
                d.newListener && (this.newListener = d.newListener),
                d.verboseMemoryLeak && (this.verboseMemoryLeak = d.verboseMemoryLeak),
                this.wildcard && (this.listenerTree = {}))
              : (this._maxListeners = a);
          }
          function c(d, f) {
            var v =
              "(node) warning: possible EventEmitter memory leak detected. " +
              d +
              " listeners added. Use emitter.setMaxListeners() to increase limit.";
            if (
              (this.verboseMemoryLeak && (v += " Event name: " + f + "."),
              typeof process < "u" && process.emitWarning)
            ) {
              var h = new Error(v);
              (h.name = "MaxListenersExceededWarning"),
                (h.emitter = this),
                (h.count = d),
                process.emitWarning(h);
            } else console.error(v), console.trace && console.trace();
          }
          function s(d) {
            (this._events = {}),
              (this.newListener = !1),
              (this.verboseMemoryLeak = !1),
              i.call(this, d);
          }
          s.EventEmitter2 = s;
          function l(d, f, v, h) {
            if (!v) return [];
            var p = [],
              g,
              b,
              y,
              O,
              w,
              _,
              S,
              x = f.length,
              A = f[h],
              $ = f[h + 1];
            if (h === x && v._listeners) {
              if (typeof v._listeners == "function") return d && d.push(v._listeners), [v];
              for (g = 0, b = v._listeners.length; g < b; g++) d && d.push(v._listeners[g]);
              return [v];
            }
            if (A === "*" || A === "**" || v[A]) {
              if (A === "*") {
                for (y in v)
                  y !== "_listeners" && v.hasOwnProperty(y) && (p = p.concat(l(d, f, v[y], h + 1)));
                return p;
              } else if (A === "**") {
                (S = h + 1 === x || (h + 2 === x && $ === "*")),
                  S && v._listeners && (p = p.concat(l(d, f, v, x)));
                for (y in v)
                  y !== "_listeners" &&
                    v.hasOwnProperty(y) &&
                    (y === "*" || y === "**"
                      ? (v[y]._listeners && !S && (p = p.concat(l(d, f, v[y], x))),
                        (p = p.concat(l(d, f, v[y], h))))
                      : y === $
                        ? (p = p.concat(l(d, f, v[y], h + 2)))
                        : (p = p.concat(l(d, f, v[y], h))));
                return p;
              }
              p = p.concat(l(d, f, v[A], h + 1));
            }
            if (((O = v["*"]), O && l(d, f, O, h + 1), (w = v["**"]), w))
              if (h < x) {
                w._listeners && l(d, f, w, x);
                for (y in w)
                  y !== "_listeners" &&
                    w.hasOwnProperty(y) &&
                    (y === $
                      ? l(d, f, w[y], h + 2)
                      : y === A
                        ? l(d, f, w[y], h + 1)
                        : ((_ = {}), (_[y] = w[y]), l(d, f, { "**": _ }, h + 1)));
              } else
                w._listeners ? l(d, f, w, x) : w["*"] && w["*"]._listeners && l(d, f, w["*"], x);
            return p;
          }
          function u(d, f) {
            d = typeof d == "string" ? d.split(this.delimiter) : d.slice();
            for (var v = 0, h = d.length; v + 1 < h; v++)
              if (d[v] === "**" && d[v + 1] === "**") return;
            for (var p = this.listenerTree, g = d.shift(); g !== r; ) {
              if ((p[g] || (p[g] = {}), (p = p[g]), d.length === 0))
                return (
                  p._listeners
                    ? (typeof p._listeners == "function" && (p._listeners = [p._listeners]),
                      p._listeners.push(f),
                      !p._listeners.warned &&
                        this._maxListeners > 0 &&
                        p._listeners.length > this._maxListeners &&
                        ((p._listeners.warned = !0), c.call(this, p._listeners.length, g)))
                    : (p._listeners = f),
                  !0
                );
              g = d.shift();
            }
            return !0;
          }
          (s.prototype.delimiter = "."),
            (s.prototype.setMaxListeners = function (d) {
              d !== r &&
                ((this._maxListeners = d),
                this._conf || (this._conf = {}),
                (this._conf.maxListeners = d));
            }),
            (s.prototype.event = ""),
            (s.prototype.once = function (d, f) {
              return this._once(d, f, !1);
            }),
            (s.prototype.prependOnceListener = function (d, f) {
              return this._once(d, f, !0);
            }),
            (s.prototype._once = function (d, f, v) {
              return this._many(d, 1, f, v), this;
            }),
            (s.prototype.many = function (d, f, v) {
              return this._many(d, f, v, !1);
            }),
            (s.prototype.prependMany = function (d, f, v) {
              return this._many(d, f, v, !0);
            }),
            (s.prototype._many = function (d, f, v, h) {
              var p = this;
              if (typeof v != "function")
                throw new Error("many only accepts instances of Function");
              function g() {
                return --f === 0 && p.off(d, g), v.apply(this, arguments);
              }
              return (g._origin = v), this._on(d, g, h), p;
            }),
            (s.prototype.emit = function () {
              this._events || o.call(this);
              var d = arguments[0];
              if (d === "newListener" && !this.newListener && !this._events.newListener) return !1;
              var f = arguments.length,
                v,
                h,
                p,
                g,
                b;
              if (this._all && this._all.length) {
                if (((b = this._all.slice()), f > 3))
                  for (v = new Array(f), g = 0; g < f; g++) v[g] = arguments[g];
                for (p = 0, h = b.length; p < h; p++)
                  switch (((this.event = d), f)) {
                    case 1:
                      b[p].call(this, d);
                      break;
                    case 2:
                      b[p].call(this, d, arguments[1]);
                      break;
                    case 3:
                      b[p].call(this, d, arguments[1], arguments[2]);
                      break;
                    default:
                      b[p].apply(this, v);
                  }
              }
              if (this.wildcard) {
                b = [];
                var y = typeof d == "string" ? d.split(this.delimiter) : d.slice();
                l.call(this, b, y, this.listenerTree, 0);
              } else if (((b = this._events[d]), typeof b == "function")) {
                switch (((this.event = d), f)) {
                  case 1:
                    b.call(this);
                    break;
                  case 2:
                    b.call(this, arguments[1]);
                    break;
                  case 3:
                    b.call(this, arguments[1], arguments[2]);
                    break;
                  default:
                    for (v = new Array(f - 1), g = 1; g < f; g++) v[g - 1] = arguments[g];
                    b.apply(this, v);
                }
                return !0;
              } else b && (b = b.slice());
              if (b && b.length) {
                if (f > 3) for (v = new Array(f - 1), g = 1; g < f; g++) v[g - 1] = arguments[g];
                for (p = 0, h = b.length; p < h; p++)
                  switch (((this.event = d), f)) {
                    case 1:
                      b[p].call(this);
                      break;
                    case 2:
                      b[p].call(this, arguments[1]);
                      break;
                    case 3:
                      b[p].call(this, arguments[1], arguments[2]);
                      break;
                    default:
                      b[p].apply(this, v);
                  }
                return !0;
              } else if (!this._all && d === "error")
                throw arguments[1] instanceof Error
                  ? arguments[1]
                  : new Error("Uncaught, unspecified 'error' event.");
              return !!this._all;
            }),
            (s.prototype.emitAsync = function () {
              this._events || o.call(this);
              var d = arguments[0];
              if (d === "newListener" && !this.newListener && !this._events.newListener)
                return Promise.resolve([!1]);
              var f = [],
                v = arguments.length,
                h,
                p,
                g,
                b,
                y;
              if (this._all) {
                if (v > 3) for (h = new Array(v), b = 1; b < v; b++) h[b] = arguments[b];
                for (g = 0, p = this._all.length; g < p; g++)
                  switch (((this.event = d), v)) {
                    case 1:
                      f.push(this._all[g].call(this, d));
                      break;
                    case 2:
                      f.push(this._all[g].call(this, d, arguments[1]));
                      break;
                    case 3:
                      f.push(this._all[g].call(this, d, arguments[1], arguments[2]));
                      break;
                    default:
                      f.push(this._all[g].apply(this, h));
                  }
              }
              if (this.wildcard) {
                y = [];
                var O = typeof d == "string" ? d.split(this.delimiter) : d.slice();
                l.call(this, y, O, this.listenerTree, 0);
              } else y = this._events[d];
              if (typeof y == "function")
                switch (((this.event = d), v)) {
                  case 1:
                    f.push(y.call(this));
                    break;
                  case 2:
                    f.push(y.call(this, arguments[1]));
                    break;
                  case 3:
                    f.push(y.call(this, arguments[1], arguments[2]));
                    break;
                  default:
                    for (h = new Array(v - 1), b = 1; b < v; b++) h[b - 1] = arguments[b];
                    f.push(y.apply(this, h));
                }
              else if (y && y.length) {
                if (((y = y.slice()), v > 3))
                  for (h = new Array(v - 1), b = 1; b < v; b++) h[b - 1] = arguments[b];
                for (g = 0, p = y.length; g < p; g++)
                  switch (((this.event = d), v)) {
                    case 1:
                      f.push(y[g].call(this));
                      break;
                    case 2:
                      f.push(y[g].call(this, arguments[1]));
                      break;
                    case 3:
                      f.push(y[g].call(this, arguments[1], arguments[2]));
                      break;
                    default:
                      f.push(y[g].apply(this, h));
                  }
              } else if (!this._all && d === "error")
                return arguments[1] instanceof Error
                  ? Promise.reject(arguments[1])
                  : Promise.reject("Uncaught, unspecified 'error' event.");
              return Promise.all(f);
            }),
            (s.prototype.on = function (d, f) {
              return this._on(d, f, !1);
            }),
            (s.prototype.prependListener = function (d, f) {
              return this._on(d, f, !0);
            }),
            (s.prototype.onAny = function (d) {
              return this._onAny(d, !1);
            }),
            (s.prototype.prependAny = function (d) {
              return this._onAny(d, !0);
            }),
            (s.prototype.addListener = s.prototype.on),
            (s.prototype._onAny = function (d, f) {
              if (typeof d != "function")
                throw new Error("onAny only accepts instances of Function");
              return (
                this._all || (this._all = []), f ? this._all.unshift(d) : this._all.push(d), this
              );
            }),
            (s.prototype._on = function (d, f, v) {
              if (typeof d == "function") return this._onAny(d, f), this;
              if (typeof f != "function") throw new Error("on only accepts instances of Function");
              return (
                this._events || o.call(this),
                this.emit("newListener", d, f),
                this.wildcard
                  ? (u.call(this, d, f), this)
                  : (this._events[d]
                      ? (typeof this._events[d] == "function" &&
                          (this._events[d] = [this._events[d]]),
                        v ? this._events[d].unshift(f) : this._events[d].push(f),
                        !this._events[d].warned &&
                          this._maxListeners > 0 &&
                          this._events[d].length > this._maxListeners &&
                          ((this._events[d].warned = !0), c.call(this, this._events[d].length, d)))
                      : (this._events[d] = f),
                    this)
              );
            }),
            (s.prototype.off = function (d, f) {
              if (typeof f != "function")
                throw new Error("removeListener only takes instances of Function");
              var v,
                h = [];
              if (this.wildcard) {
                var p = typeof d == "string" ? d.split(this.delimiter) : d.slice();
                h = l.call(this, null, p, this.listenerTree, 0);
              } else {
                if (!this._events[d]) return this;
                (v = this._events[d]), h.push({ _listeners: v });
              }
              for (var g = 0; g < h.length; g++) {
                var b = h[g];
                if (((v = b._listeners), n(v))) {
                  for (var y = -1, O = 0, w = v.length; O < w; O++)
                    if (
                      v[O] === f ||
                      (v[O].listener && v[O].listener === f) ||
                      (v[O]._origin && v[O]._origin === f)
                    ) {
                      y = O;
                      break;
                    }
                  if (y < 0) continue;
                  return (
                    this.wildcard ? b._listeners.splice(y, 1) : this._events[d].splice(y, 1),
                    v.length === 0 &&
                      (this.wildcard ? delete b._listeners : delete this._events[d]),
                    this.emit("removeListener", d, f),
                    this
                  );
                } else
                  (v === f || (v.listener && v.listener === f) || (v._origin && v._origin === f)) &&
                    (this.wildcard ? delete b._listeners : delete this._events[d],
                    this.emit("removeListener", d, f));
              }
              function _(S) {
                if (S !== r) {
                  var x = Object.keys(S);
                  for (var A in x) {
                    var $ = x[A],
                      M = S[$];
                    M instanceof Function ||
                      typeof M != "object" ||
                      M === null ||
                      (Object.keys(M).length > 0 && _(S[$]),
                      Object.keys(M).length === 0 && delete S[$]);
                  }
                }
              }
              return _(this.listenerTree), this;
            }),
            (s.prototype.offAny = function (d) {
              var f = 0,
                v = 0,
                h;
              if (d && this._all && this._all.length > 0) {
                for (h = this._all, f = 0, v = h.length; f < v; f++)
                  if (d === h[f]) return h.splice(f, 1), this.emit("removeListenerAny", d), this;
              } else {
                for (h = this._all, f = 0, v = h.length; f < v; f++)
                  this.emit("removeListenerAny", h[f]);
                this._all = [];
              }
              return this;
            }),
            (s.prototype.removeListener = s.prototype.off),
            (s.prototype.removeAllListeners = function (d) {
              if (arguments.length === 0) return !this._events || o.call(this), this;
              if (this.wildcard)
                for (
                  var f = typeof d == "string" ? d.split(this.delimiter) : d.slice(),
                    v = l.call(this, null, f, this.listenerTree, 0),
                    h = 0;
                  h < v.length;
                  h++
                ) {
                  var p = v[h];
                  p._listeners = null;
                }
              else this._events && (this._events[d] = null);
              return this;
            }),
            (s.prototype.listeners = function (d) {
              if (this.wildcard) {
                var f = [],
                  v = typeof d == "string" ? d.split(this.delimiter) : d.slice();
                return l.call(this, f, v, this.listenerTree, 0), f;
              }
              return (
                this._events || o.call(this),
                this._events[d] || (this._events[d] = []),
                n(this._events[d]) || (this._events[d] = [this._events[d]]),
                this._events[d]
              );
            }),
            (s.prototype.eventNames = function () {
              return Object.keys(this._events);
            }),
            (s.prototype.listenerCount = function (d) {
              return this.listeners(d).length;
            }),
            (s.prototype.listenersAny = function () {
              return this._all ? this._all : [];
            }),
            (e.exports = s);
        })();
      })(Ii)),
    Ii.exports
  );
}
var Jm = Ym();
function Bl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function or(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bl(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Bl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Va = "@all-features",
  Xm = (function () {
    function e() {
      ge(this, e), P(this, "eventToValue", new Map()), (this.emitter = new Jm.EventEmitter2());
    }
    return be(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, o) {
          var i = this,
            c = a(r, or(or({}, o), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, c);
          var s = function () {
            var u = a(r, or(or({}, o), {}, { fireGateExposure: !1 })),
              d = i.eventToValue.get(n);
            d !== u && (i.eventToValue.set(n, u), n(u));
          };
          return (
            this.emitter.on(r, s),
            function () {
              i.emitter.off(r, s);
            }
          );
        },
      },
      {
        key: "onExperimentValueUpdated",
        value: function (r, n, a, o, i, c) {
          var s = this,
            l = "".concat(r, ".").concat(n),
            u = i(r, n, a, or(or({}, c), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(o) === void 0 && this.eventToValue.set(o, u);
          var d = function () {
            var v = i(r, n, a, or(or({}, c), {}, { fireExperimentExposure: !1 })),
              h = s.eventToValue.get(o);
            h !== v && (s.eventToValue.set(o, v), o(v));
          };
          return (
            this.emitter.on(l, d),
            function () {
              s.emitter.off(l, d);
            }
          );
        },
      },
      {
        key: "onAnyUpdated",
        value: function (r) {
          var n = this;
          return (
            this.emitter.on(Va, r),
            function () {
              n.emitter.off(Va, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          this.emitter.emit(Va),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== Va;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              });
        },
      },
    ]);
  })(),
  Zm = "fedramp-moderate";
function Qm() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === Zm;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var $s = (function (e) {
    return (
      (e.Error = "Error"),
      (e.LocalOverride = "LocalOverride"),
      (e.Unrecognized = "Unrecognized"),
      (e.Uninitialized = "Uninitialized"),
      (e.NetworkNotModified = "NetworkNotModified"),
      (e.Network = "Network"),
      (e.InvalidBootstrap = "InvalidBootstrap"),
      (e.Bootstrap = "Bootstrap"),
      (e.Cache = "Cache"),
      (e.Unknown = "Unknown"),
      e
    );
  })({}),
  ia = (function (e) {
    return (
      (e.Development = "development"), (e.Staging = "staging"), (e.Production = "production"), e
    );
  })({}),
  Sa = (function (e) {
    return (e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e;
  })({}),
  ey = [
    "api",
    "disableCurrentPageLogging",
    "loggingIntervalMillis",
    "loggingBufferMaxSize",
    "localMode",
    "eventLoggingApi",
    "eventLoggingApiForRetries",
    "disableLocalStorage",
    "ignoreWindowUndefined",
    "disableAllLogging",
    "initTimeoutMs",
    "disableNetworkKeepalive",
    "overrideStableID",
    "disableErrorLogging",
    "disableAutoMetricsLogging",
  ];
function ql(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function So(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ql(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ql(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ga = function (t) {
    return So({ perimeter: Qm() ? Sa.FEDRAMP_MODERATE : Sa.COMMERCIAL }, t);
  },
  zn = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var o = function (f, v) {
      var h = ee(f, 1),
        p = h[0],
        g = ee(v, 1),
        b = g[0];
      return p.localeCompare(b);
    };
    n.sort(o), a.sort(o);
    for (var i = 0; i < n.length; i++) {
      var c = ee(n[i], 2),
        s = c[1],
        l = ee(a[i], 2),
        u = l[1];
      if (s !== u) return !1;
    }
    return !0;
  },
  Ul = function (t, r, n) {
    var a = {
      customIDs: !(r != null && r.stableID) && n ? So({ stableID: Ct.StableID.get(n) }, t) : t,
      custom: r,
    };
    return t.atlassianAccountId && (a.userID = t.atlassianAccountId), a;
  },
  ty = function (t) {
    var r = t.api,
      n = t.disableCurrentPageLogging,
      a = t.loggingIntervalMillis,
      o = t.loggingBufferMaxSize,
      i = t.localMode,
      c = t.eventLoggingApi,
      s = t.eventLoggingApiForRetries,
      l = t.disableLocalStorage,
      u = t.ignoreWindowUndefined,
      d = t.disableAllLogging;
    t.initTimeoutMs,
      t.disableNetworkKeepalive,
      t.overrideStableID,
      t.disableErrorLogging,
      t.disableAutoMetricsLogging;
    var f = re(t, ey);
    return So(
      So({}, f),
      {},
      {
        networkConfig: {
          api: r,
          logEventUrl: c ? c + "rgstr" : void 0,
          logEventFallbackUrls: s ? [s] : void 0,
          preventAllNetworkTraffic: i || (!u && typeof window > "u"),
        },
        includeCurrentPageUrlWithEvents: !n,
        loggingIntervalMs: a,
        loggingBufferMaxSize: o,
        disableStorage: l === void 0 ? i : l,
        disableLogging: d === void 0 ? i : d,
      },
    );
  },
  ry = Object.entries($s).map(function (e) {
    var t = ee(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  Dv = function (t) {
    var r,
      n,
      a,
      o = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = ry.find(function (i) {
            var c = ee(i, 1),
              s = c[0];
            return o.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : $s.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  Vl = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      ge(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = o),
        (this._allocatedExperimentName = i),
        (this._evaluationDetails = a),
        (this._onDefaultValueFallback = c);
    }
    return be(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var o,
              i = this.getValue(r, n);
            if (i == null) return n;
            var c = Array.isArray(n) ? "array" : Fe(n),
              s = Array.isArray(i) ? "array" : Fe(i);
            if (a) {
              var l;
              return a(i)
                ? (this.fireExposure(r), i)
                : ((l = this._onDefaultValueFallback) === null ||
                    l === void 0 ||
                    l.call(this, this, r, c, s),
                  n);
            }
            return n == null || c === s
              ? (this.fireExposure(r), i)
              : ((o = this._onDefaultValueFallback) === null ||
                  o === void 0 ||
                  o.call(this, this, r, c, s),
                n);
          },
        },
        {
          key: "getValue",
          value: function (r, n) {
            return r == null
              ? this.value
              : (n == null && (n = null),
                this.value[r] == null ? n : (this.fireExposure(r), this.value[r]));
          },
        },
        {
          key: "fireExposure",
          value: function (r) {
            this.experiment && this.experiment.get(r);
          },
        },
      ],
      [
        {
          key: "fromExperiment",
          value: function (r) {
            var n,
              a,
              o = new e(
                r.name,
                r.value,
                r.ruleID,
                Dv(r.details),
                (n = r.__evaluation) === null || n === void 0 ? void 0 : n.secondary_exposures,
                (a = r.groupName) !== null && a !== void 0 ? a : void 0,
              );
            return (o.experiment = r), o;
          },
        },
      ],
    );
  })(),
  Gl = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        s = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        l = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      ge(this, e),
        (this._logParameterFunction = o),
        (this._name = t),
        (this._value = JSON.parse(JSON.stringify(r ?? {}))),
        (this._ruleID = n ?? ""),
        (this._evaluationDetails = a),
        (this._secondaryExposures = i),
        (this._undelegatedSecondaryExposures = c),
        (this._allocatedExperimentName = s),
        (this._explicitParameters = l);
    }
    return be(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var o = this,
              i = this._value[r];
            if (i == null) return n;
            var c = function () {
              return o._logLayerParameterExposure(r), i;
            };
            return a
              ? a(i)
                ? c()
                : n
              : n == null || (Fe(i) === Fe(n) && Array.isArray(n) === Array.isArray(i))
                ? c()
                : n;
          },
        },
        {
          key: "getValue",
          value: function (r, n) {
            n == null && (n = null);
            var a = this._value[r];
            return a != null && this._logLayerParameterExposure(r), a ?? n;
          },
        },
        {
          key: "_logLayerParameterExposure",
          value: function (r) {
            var n;
            (n = this._logParameterFunction) === null || n === void 0 || n.call(this, this, r);
          },
        },
      ],
      [
        {
          key: "fromLayer",
          value: function (r) {
            var n,
              a,
              o,
              i,
              c = new e(
                r.name,
                r.__value,
                r.ruleID,
                Dv(r.details),
                function (s, l) {
                  return r.get(l);
                },
                (n = r.__evaluation) === null || n === void 0 ? void 0 : n.secondary_exposures,
                (a = r.__evaluation) === null || a === void 0
                  ? void 0
                  : a.undelegated_secondary_exposures,
                (o = r.__evaluation) === null || o === void 0
                  ? void 0
                  : o.allocated_experiment_name,
                (i = r.__evaluation) === null || i === void 0 ? void 0 : i.explicit_parameters,
              );
            return c;
          },
        },
      ],
    );
  })(),
  Zr = "5.3.0";
function ny(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Tv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Tv = function () {
    return !!e;
  })();
}
function ay(e, t, r) {
  if (Tv()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return r && Oa(a, r.prototype), a;
}
function fs(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (fs = function (n) {
      if (n === null || !ny(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return ay(n, arguments, Z(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        Oa(a, n)
      );
    }),
    fs(e)
  );
}
function oy(e, t, r) {
  return (t = Z(t)), qe(e, Mv() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r));
}
function Mv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Mv = function () {
    return !!e;
  })();
}
var Hl = (function (e) {
  function t(r) {
    return ge(this, t), oy(this, t, [r]);
  }
  return Ue(t, e), be(t);
})(fs(Error));
function Wl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function iy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wl(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var sy = 5e3,
  cy = "https://api.atlassian.com/flags",
  ly = "https://api.stg.atlassian.com/flags",
  uy = "https://api.dev.atlassian.com/flags",
  dy = "https://api.stg.atlassian-us-gov-mod.com/flags",
  fy = "https://api.atlassian-us-gov-mod.com/flags",
  vy = "/gateway/api/flags",
  Di = (function () {
    function e() {
      ge(this, e);
    }
    return be(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = we(
            W.mark(function n(a) {
              var o, i;
              return W.wrap(
                function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        return (
                          (o = a.targetApp),
                          (i = "/api/v2/frontend/clientSdkKey/".concat(o)),
                          (s.prev = 2),
                          (s.next = 5),
                          this.fetchRequest(i, "GET", a)
                        );
                      case 5:
                        return s.abrupt("return", s.sent);
                      case 8:
                        if (((s.prev = 8), (s.t0 = s.catch(2)), !(s.t0 instanceof Error))) {
                          s.next = 12;
                          break;
                        }
                        throw s.t0;
                      case 12:
                        throw Error("Failed to retrieve client sdk key");
                      case 13:
                      case "end":
                        return s.stop();
                    }
                },
                n,
                this,
                [[2, 8]],
              );
            }),
          );
          function r(n) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "fetchExperimentValues",
        value: (function () {
          var t = we(
            W.mark(function n(a, o, i) {
              var c;
              return W.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          (c = { identifiers: o, customAttributes: i, targetApp: a.targetApp }),
                          (l.prev = 1),
                          (l.next = 4),
                          this.fetchRequest("/api/v2/frontend/experimentValues", "POST", a, c)
                        );
                      case 4:
                        return l.abrupt("return", l.sent);
                      case 7:
                        if (((l.prev = 7), (l.t0 = l.catch(1)), !(l.t0 instanceof Error))) {
                          l.next = 11;
                          break;
                        }
                        throw l.t0;
                      case 11:
                        throw Error("Failed to retrieve experiment values");
                      case 12:
                      case "end":
                        return l.stop();
                    }
                },
                n,
                this,
                [[1, 7]],
              );
            }),
          );
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "handleResponseError",
        value: (function () {
          var t = we(
            W.mark(function n(a) {
              var o;
              return W.wrap(function (c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                      if (a.ok) {
                        c.next = 5;
                        break;
                      }
                      return (c.next = 3), a.text();
                    case 3:
                      throw (
                        ((o = c.sent),
                        new Hl(
                          "Non 2xx response status received, status: "
                            .concat(a.status, ", body: ")
                            .concat(JSON.stringify(o)),
                        ))
                      );
                    case 5:
                      if (a.status !== 204) {
                        c.next = 7;
                        break;
                      }
                      throw new Hl("Unexpected 204 response");
                    case 7:
                    case "end":
                      return c.stop();
                  }
              }, n);
            }),
          );
          function r(n) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "extractResponseBody",
        value: (function () {
          var t = we(
            W.mark(function n(a) {
              var o;
              return W.wrap(function (c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                      return (c.next = 2), a.text();
                    case 2:
                      return (o = c.sent), c.abrupt("return", JSON.parse(o));
                    case 4:
                    case "end":
                      return c.stop();
                  }
              }, n);
            }),
          );
          function r(n) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "getBaseUrl",
        value: function (r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
            a = arguments.length > 2 ? arguments[2] : void 0;
          if (n) return vy;
          if (a === Sa.FEDRAMP_MODERATE)
            switch (r) {
              case ia.Production:
                return fy;
              case ia.Staging:
                return dy;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === Sa.COMMERCIAL)
            switch (r) {
              case ia.Development:
                return uy;
              case ia.Staging:
                return ly;
              default:
                return cy;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = we(
            W.mark(function n(a, o, i, c) {
              var s, l, u, d, f;
              return W.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (s = e.getBaseUrl(i.environment, i.useGatewayURL, i.perimeter)),
                          (l = i.fetchTimeoutMs || sy),
                          AbortSignal.timeout
                            ? (u = AbortSignal.timeout(l))
                            : AbortController &&
                              ((d = new AbortController()),
                              (u = d.signal),
                              setTimeout(function () {
                                return d.abort();
                              }, l)),
                          (h.next = 5),
                          fetch(
                            "".concat(s).concat(a),
                            iy(
                              {
                                method: o,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Zr,
                                  "X-API-KEY": i.apiKey,
                                },
                                signal: u,
                              },
                              c && { body: JSON.stringify(c) },
                            ),
                          )
                        );
                      case 5:
                        return (f = h.sent), (h.next = 8), this.handleResponseError(f);
                      case 8:
                        return (h.next = 10), this.extractResponseBody(f);
                      case 10:
                        return h.abrupt("return", h.sent);
                      case 11:
                      case "end":
                        return h.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, a, o, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
    ]);
  })();
function Kl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kl(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Kl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function py(e, t, r) {
  return (t = Z(t)), qe(e, Lv() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r));
}
function Lv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Lv = function () {
    return !!e;
  })();
}
function hy(e, t, r, n) {
  var a = Oo(Z(e.prototype), t, r);
  return typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var gy = (function (e) {
  function t() {
    var r;
    return (
      ge(this, t),
      (r = py(this, t, ["NoFetchDataAdapter", "nofetch"])),
      P(r, "bootstrapResult", null),
      r
    );
  }
  return (
    Ue(t, e),
    be(t, [
      {
        key: "setBootstrapData",
        value: function (n) {
          this.bootstrapResult = n
            ? {
                source: "Bootstrap",
                data: JSON.stringify(n),
                receivedAt: Date.now(),
                stableID: Ct.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = we(
            W.mark(function a(o, i) {
              return W.wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                    case "end":
                      return s.stop();
                  }
              }, a);
            }),
          );
          function n(a, o) {
            return r.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: "getDataAsync",
        value: (function () {
          var r = we(
            W.mark(function a(o, i, c) {
              return W.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return l.abrupt(
                          "return",
                          this.bootstrapResult &&
                            Bn(
                              Bn({}, this.bootstrapResult),
                              {},
                              { fullUserHash: Ct._getFullUserHash(i) },
                            ),
                        );
                      case 1:
                      case "end":
                        return l.stop();
                    }
                },
                a,
                this,
              );
            }),
          );
          function n(a, o, i) {
            return r.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: "getDataSync",
        value: function (n) {
          return (
            this.bootstrapResult &&
            Bn(Bn({}, this.bootstrapResult), {}, { fullUserHash: Ct._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = we(
            W.mark(function a(o, i, c) {
              return W.wrap(function (l) {
                for (;;)
                  switch ((l.prev = l.next)) {
                    case 0:
                      return l.abrupt("return", null);
                    case 1:
                    case "end":
                      return l.stop();
                  }
              }, a);
            }),
          );
          function n(a, o, i) {
            return r.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: "_getCacheKey",
        value: function (n) {
          var a = Ct._getStorageKey(this._getSdkKey(), n);
          return "".concat(Ct.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(a);
        },
      },
      {
        key: "_isCachedResultValidFor204",
        value: function (n, a) {
          return !1;
        },
      },
      {
        key: "setDataLegacy",
        value: function (n, a) {
          hy(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = Bn({}, this);
          return delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n;
        },
      },
    ])
  );
})(Ct.DataAdapterCore);
function Yl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yl(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Yl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function by(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = my(e)) || t) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (l) {
          throw l;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o,
    i = !0,
    c = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var l = r.next();
      return (i = l.done), l;
    },
    e: function (l) {
      (c = !0), (o = l);
    },
    f: function () {
      try {
        i || r.return == null || r.return();
      } finally {
        if (c) throw o;
      }
    },
  };
}
function my(e, t) {
  if (e) {
    if (typeof e == "string") return Jl(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Jl(e, t)
          : void 0
    );
  }
}
function Jl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Ti = "LocalOverride:Recognized",
  yy = "STATSIG_OVERRIDES",
  Xl = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  zr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  nt = function (t, r) {
    return r + ":" + t;
  },
  _y = (function () {
    function e(t) {
      ge(this, e),
        (this._overrides = zr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t);
    }
    return be(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : zr();
          } catch {
            return zr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = zr(), n = arguments.length, a = new Array(n), o = 0; o < n; o++)
            a[o] = arguments[o];
          for (var i = 0, c = a; i < c.length; i++) {
            for (
              var s = c[i],
                l = 0,
                u = Object.entries((d = s.gates) !== null && d !== void 0 ? d : {});
              l < u.length;
              l++
            ) {
              var d,
                f = ee(u[l], 2),
                v = f[0],
                h = f[1];
              r.gates[v] = h;
            }
            for (
              var p = 0, g = Object.entries((b = s.configs) !== null && b !== void 0 ? b : {});
              p < g.length;
              p++
            ) {
              var b,
                y = ee(g[p], 2),
                O = y[0],
                w = y[1];
              r.configs[O] = w;
            }
            for (
              var _ = 0, S = Object.entries((x = s.layers) !== null && x !== void 0 ? x : {});
              _ < S.length;
              _++
            ) {
              var x,
                A = ee(S[_], 2),
                $ = A[0],
                M = A[1];
              r.layers[$] = M;
            }
          }
          return r;
        },
      },
      {
        key: "initFromStoredOverrides",
        value: function () {
          var r = this.mergeOverrides(
            this._overrides,
            this.parseStoredOverrides(Xl),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Xl);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var o = a[n],
              i = new Set(Object.keys(o)),
              c = by(i),
              s;
            try {
              for (c.s(); !(s = c.n()).done; ) {
                var l = s.value,
                  u = rt._DJB2(l);
                i.has(u) && delete o[u];
              }
            } catch (d) {
              c.e(d);
            } finally {
              c.f();
            }
          }
          this.applyOverrides(r);
        },
      },
      {
        key: "saveOverrides",
        value: function () {
          try {
            window.localStorage.setItem(this._localStorageKey, JSON.stringify(this._overrides));
          } catch {}
        },
      },
      {
        key: "getOverrides",
        value: function () {
          return this.mergeOverrides(this._overrides);
        },
      },
      {
        key: "applyOverrides",
        value: function (r) {
          var n = Te(Te({}, zr()), r);
          this._djb2Map.clear();
          for (var a = 0, o = Object.entries(n); a < o.length; a++)
            for (
              var i = ee(o[a], 2), c = i[0], s = i[1], l = 0, u = Object.entries(s);
              l < u.length;
              l++
            ) {
              var d = ee(u[l], 2),
                f = d[0],
                v = d[1];
              this._djb2Map.set(nt(rt._DJB2(f), c), v);
            }
          this._overrides = n;
        },
      },
      {
        key: "setOverrides",
        value: function (r) {
          this.applyOverrides(r), this.saveOverrides();
        },
      },
      {
        key: "overrideGate",
        value: function (r, n) {
          (this._overrides.gates[r] = n),
            this._djb2Map.set(nt(rt._DJB2(r), "gates"), n),
            this.saveOverrides();
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          delete this._overrides.gates[r],
            this._djb2Map.delete(nt(rt._DJB2(r), "gates")),
            this.saveOverrides();
        },
      },
      {
        key: "getGateOverride",
        value: function (r, n) {
          var a,
            o =
              (a = this._overrides.gates[r.name]) !== null && a !== void 0
                ? a
                : this._djb2Map.get(nt(r.name, "gates"));
          return o == null
            ? null
            : Te(Te({}, r), {}, { value: o, details: Te(Te({}, r.details), {}, { reason: Ti }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          (this._overrides.configs[r] = n),
            this._djb2Map.set(nt(rt._DJB2(r), "configs"), n),
            this.saveOverrides();
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          delete this._overrides.configs[r],
            this._djb2Map.delete(nt(rt._DJB2(r), "configs")),
            this.saveOverrides();
        },
      },
      {
        key: "getDynamicConfigOverride",
        value: function (r, n) {
          return this._getConfigOverride(r, this._overrides.configs);
        },
      },
      {
        key: "overrideExperiment",
        value: function (r, n) {
          (this._overrides.configs[r] = n),
            this._djb2Map.set(nt(rt._DJB2(r), "configs"), n),
            this.saveOverrides();
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          delete this._overrides.configs[r],
            this._djb2Map.delete(nt(rt._DJB2(r), "configs")),
            this.saveOverrides();
        },
      },
      {
        key: "getExperimentOverride",
        value: function (r, n) {
          return this._getConfigOverride(r, this._overrides.configs);
        },
      },
      {
        key: "overrideLayer",
        value: function (r, n) {
          (this._overrides.layers[r] = n),
            this._djb2Map.set(nt(rt._DJB2(r), "layers"), n),
            this.saveOverrides();
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          delete this._overrides.layers[r],
            this._djb2Map.delete(nt(rt._DJB2(r), "layers")),
            this.saveOverrides();
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = zr();
          try {
            window.localStorage.removeItem(this._localStorageKey);
          } catch {}
        },
      },
      {
        key: "getLayerOverride",
        value: function (r, n) {
          var a,
            o =
              (a = this._overrides.layers[r.name]) !== null && a !== void 0
                ? a
                : this._djb2Map.get(nt(r.name, "layers"));
          return o == null
            ? null
            : Te(
                Te({}, r),
                {},
                {
                  __value: o,
                  get: rt._makeTypedGet(r.name, o),
                  details: Te(Te({}, r.details), {}, { reason: Ti }),
                },
              );
        },
      },
      {
        key: "_getConfigOverride",
        value: function (r, n) {
          var a,
            o =
              (a = n[r.name]) !== null && a !== void 0
                ? a
                : this._djb2Map.get(nt(r.name, "configs"));
          return o == null
            ? null
            : Te(
                Te({}, r),
                {},
                {
                  value: o,
                  get: rt._makeTypedGet(r.name, o),
                  details: Te(Te({}, r.details), {}, { reason: Ti }),
                },
              );
        },
      },
    ]);
  })(),
  wy = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function Zl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ir(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zl(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ql = "client-default-key",
  ky = "https://xp.atlassian.com/v1/rgstr",
  Oy = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? yy : n,
        o = r.overrideAdapter;
      ge(this, e),
        P(this, "initPromise", null),
        P(this, "initCompleted", !1),
        P(this, "initWithDefaults", !1),
        P(this, "hasCheckGateErrorOccurred", !1),
        P(this, "hasGetExperimentErrorOccurred", !1),
        P(this, "hasGetExperimentValueErrorOccurred", !1),
        P(this, "hasGetLayerErrorOccurred", !1),
        P(this, "hasGetLayerValueErrorOccurred", !1),
        P(this, "subscriptions", new Xm()),
        P(this, "dataAdapter", new gy()),
        P(this, "statsigValuesUpdated", function () {
          t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated();
        }),
        (this.overrideAdapter = o || new _y(a));
    }
    return be(e, [
      {
        key: "initialize",
        value: (function () {
          var t = we(
            W.mark(function n(a, o, i) {
              var c = this,
                s,
                l;
              return W.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = Ga(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          zn(s, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          d.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (l = performance.now()),
                          (this.initOptions = s),
                          (this.initPromise = this.init(s, o, i)
                            .then(function () {
                              (c.initCompleted = !0), (c.initWithDefaults = !0);
                            })
                            .finally(function () {
                              var f = performance.now(),
                                v = f - l;
                              c.fireClientEvent(l, v, "initialize", c.initCompleted, s.apiKey);
                            })),
                          d.abrupt("return", this.initPromise)
                        );
                      case 8:
                      case "end":
                        return d.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initializeWithProvider",
        value: (function () {
          var t = we(
            W.mark(function n(a, o, i, c) {
              var s = this,
                l,
                u;
              return W.wrap(
                function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        if (((l = Ga(a)), !this.initPromise)) {
                          f.next = 4;
                          break;
                        }
                        return (
                          zn(l, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          f.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (u = performance.now()),
                          (this.initOptions = l),
                          (this.provider = o),
                          this.provider.setClientVersion(Zr),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(l, o, i, c)
                            .then(function () {
                              (s.initCompleted = !0), (s.initWithDefaults = !0);
                            })
                            .finally(function () {
                              var v = performance.now(),
                                h = v - u;
                              s.fireClientEvent(
                                u,
                                h,
                                "initializeWithProvider",
                                s.initCompleted,
                                o.getApiKey ? o.getApiKey() : void 0,
                              );
                            })),
                          f.abrupt("return", this.initPromise)
                        );
                      case 11:
                      case "end":
                        return f.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, a, o, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "applyUpdateCallback",
        value: function (r) {
          try {
            (this.initCompleted || this.initWithDefaults) &&
              (this.assertInitialized(this.statsigClient),
              this.dataAdapter.setBootstrapData(r.experimentValues),
              this.dataAdapter.setData(JSON.stringify(r.experimentValues)),
              this.statsigValuesUpdated());
          } catch (n) {
            console.warn("Error when attempting to apply update", n);
          }
        },
      },
      {
        key: "fireClientEvent",
        value: function (r, n, a, o) {
          var i,
            c = this,
            s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
          (i = this.initOptions.analyticsWebClient) === null ||
            i === void 0 ||
            i
              .then(function (l) {
                var u = ir(
                  {
                    targetApp: c.initOptions.targetApp,
                    clientVersion: Zr,
                    success: o,
                    startTime: r,
                    totalTime: n,
                  },
                  s && { apiKey: s },
                );
                l.sendOperationalEvent({
                  action: a,
                  actionSubject: "featureGatesClient",
                  attributes: u,
                  tags: ["measurement"],
                  source: "@atlaskit/feature-gate-js-client",
                });
              })
              .catch(function (l) {
                c.initOptions.environment !== ia.Production &&
                  console.error("Analytics web client promise did not resolve", l);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = we(
            W.mark(function n(a, o, i) {
              var c = this,
                s,
                l,
                u,
                d = arguments;
              return W.wrap(
                function (v) {
                  for (;;)
                    switch ((v.prev = v.next)) {
                      case 0:
                        if (
                          ((s = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (l = Ga(a)),
                          !this.initPromise)
                        ) {
                          v.next = 5;
                          break;
                        }
                        return (
                          zn(l, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          v.abrupt("return", this.initPromise)
                        );
                      case 5:
                        return (
                          Object.prototype.hasOwnProperty.call(s, "has_updates") ||
                            (s.has_updates = !0),
                          (u = performance.now()),
                          (this.initOptions = l),
                          (this.initPromise = this.initFromValues(l, o, i, s)
                            .then(function () {
                              (c.initCompleted = !0), (c.initWithDefaults = !0);
                            })
                            .finally(function () {
                              var h = performance.now(),
                                p = h - u;
                              c.fireClientEvent(u, p, "initializeFromValues", c.initCompleted);
                            })),
                          v.abrupt("return", this.initPromise)
                        );
                      case 10:
                      case "end":
                        return v.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "assertInitialized",
        value: function (r) {
          if (!r) throw new Error("Client must be initialized before using this method");
        },
      },
      {
        key: "updateUser",
        value: (function () {
          var t = we(
            W.mark(function n(a, o, i) {
              var c, s;
              return W.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (c = Ga(a)),
                          (s = function () {
                            return Di.fetchExperimentValues(c, o, i).then(function (f) {
                              var v = f.experimentValues,
                                h = f.customAttributes;
                              return { experimentValues: v, customAttributesFromFetch: h };
                            });
                          }),
                          (u.next = 5),
                          this.updateUserUsingInitializeValuesProducer(s, o, i)
                        );
                      case 5:
                      case "end":
                        return u.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserWithProvider",
        value: (function () {
          var t = we(
            W.mark(function n(a, o) {
              var i = this;
              return W.wrap(
                function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        if ((this.assertInitialized(this.statsigClient), this.provider)) {
                          s.next = 3;
                          break;
                        }
                        throw new Error(
                          "Cannot update user using provider as the client was not initialised with a provider",
                        );
                      case 3:
                        return (s.next = 5), this.provider.setProfile(this.initOptions, a, o);
                      case 5:
                        return (
                          (s.next = 7),
                          this.updateUserUsingInitializeValuesProducer(
                            function () {
                              return i.provider.getExperimentValues();
                            },
                            a,
                            o,
                          )
                        );
                      case 7:
                      case "end":
                        return s.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserWithValues",
        value: (function () {
          var t = we(
            W.mark(function n(a, o) {
              var i,
                c,
                s = arguments;
              return W.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return (
                          (i = s.length > 2 && s[2] !== void 0 ? s[2] : {}),
                          this.assertInitialized(this.statsigClient),
                          (c = function () {
                            return Promise.resolve({
                              experimentValues: i,
                              customAttributesFromFetch: o,
                            });
                          }),
                          (u.next = 5),
                          this.updateUserUsingInitializeValuesProducer(c, a, o)
                        );
                      case 5:
                      case "end":
                        return u.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initializeCalled",
        value: function () {
          return this.initPromise != null;
        },
      },
      {
        key: "initializeCompleted",
        value: function () {
          return this.initCompleted;
        },
      },
      {
        key: "checkGate",
        value: function (r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          try {
            this.assertInitialized(this.statsigClient);
            var a = n.fireGateExposure,
              o = a === void 0 ? !0 : a;
            return this.statsigClient.checkGate(r, { disableExposureLog: !o });
          } catch (i) {
            return (
              this.hasCheckGateErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred checking the feature gate. Only the first occurrence of this error is logged.",
                  gateName: r,
                  error: i,
                }),
                (this.hasCheckGateErrorOccurred = !0)),
              !1
            );
          }
        },
      },
      {
        key: "isGateExist",
        value: function (r) {
          try {
            this.assertInitialized(this.statsigClient);
            var n = this.statsigClient.getFeatureGate(r, { disableExposureLog: !0 });
            return !n.details.reason.includes("Unrecognized");
          } catch (a) {
            return console.error("Error occurred when trying to check FeatureGate: ".concat(a)), !0;
          }
        },
      },
      {
        key: "isExperimentExist",
        value: function (r) {
          try {
            this.assertInitialized(this.statsigClient);
            var n = this.statsigClient.getExperiment(r, { disableExposureLog: !0 });
            return !n.details.reason.includes("Unrecognized");
          } catch (a) {
            return console.error("Error occurred when trying to check Experiment: ".concat(a)), !0;
          }
        },
      },
      {
        key: "manuallyLogGateExposure",
        value: function (r) {
          this.assertInitialized(this.statsigClient), this.statsigClient.checkGate(r);
        },
      },
      {
        key: "getExperiment",
        value: function (r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          try {
            this.assertInitialized(this.statsigClient);
            var a = n.fireExperimentExposure,
              o = a === void 0 ? !0 : a;
            return Vl.fromExperiment(
              this.statsigClient.getExperiment(r, { disableExposureLog: !o }),
            );
          } catch (i) {
            return (
              this.hasGetExperimentErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the experiment. Only the first occurrence of this error is logged.",
                  experimentName: r,
                  error: i,
                }),
                (this.hasGetExperimentErrorOccurred = !0)),
              new Vl(r, {}, "", { time: Date.now(), reason: $s.Error })
            );
          }
        },
      },
      {
        key: "getExperimentValue",
        value: function (r, n, a) {
          var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            i = this.getExperiment(r, o);
          try {
            var c = o.typeGuard;
            return i.get(n, a, c);
          } catch (s) {
            return (
              this.hasGetExperimentValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the experiment value. Only the first occurrence of this error is logged.",
                  experimentName: r,
                  defaultValue: a,
                  options: o,
                  error: s,
                }),
                (this.hasGetExperimentValueErrorOccurred = !0)),
              a
            );
          }
        },
      },
      {
        key: "manuallyLogExperimentExposure",
        value: function (r) {
          this.assertInitialized(this.statsigClient), this.statsigClient.getExperiment(r);
        },
      },
      {
        key: "manuallyLogLayerExposure",
        value: function (r, n) {
          var a;
          this.assertInitialized(this.statsigClient),
            (a = this.statsigClient.getLayer(r)) === null || a === void 0 || a.get(n);
        },
      },
      {
        key: "shutdownStatsig",
        value: function () {
          this.assertInitialized(this.statsigClient), this.statsigClient.shutdown();
        },
      },
      {
        key: "overrideGate",
        value: function (r, n) {
          if ((this.overrideAdapter.overrideGate(r, n), this.user)) {
            var a;
            (a = this.statsigClient) === null ||
              a === void 0 ||
              a.updateUserSync(this.user, { disableBackgroundCacheRefresh: !0 });
          }
          this.statsigValuesUpdated();
        },
      },
      {
        key: "clearGateOverride",
        value: function (r) {
          this.overrideAdapter.removeGateOverride(r), this.statsigValuesUpdated();
        },
      },
      {
        key: "overrideConfig",
        value: function (r, n) {
          this.overrideAdapter.overrideDynamicConfig(r, n), this.statsigValuesUpdated();
        },
      },
      {
        key: "clearConfigOverride",
        value: function (r) {
          this.overrideAdapter.removeDynamicConfigOverride(r), this.statsigValuesUpdated();
        },
      },
      {
        key: "setOverrides",
        value: function (r) {
          this.overrideAdapter.setOverrides(r), this.statsigValuesUpdated();
        },
      },
      {
        key: "getOverrides",
        value: function () {
          return this.overrideAdapter.getOverrides();
        },
      },
      {
        key: "clearAllOverrides",
        value: function () {
          this.overrideAdapter.removeAllOverrides(), this.statsigValuesUpdated();
        },
      },
      {
        key: "isCurrentUser",
        value: function (r, n) {
          return zn(this.currentIdentifiers, r) && zn(this.currentAttributes, n);
        },
      },
      {
        key: "onGateUpdated",
        value: function (r, n) {
          var a = this,
            o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            i = function (s) {
              var l = o.fireGateExposure,
                u = l === void 0 ? !0 : l;
              u && a.manuallyLogGateExposure(r);
              try {
                n(s);
              } catch (d) {
                console.warn(
                  "Error calling callback for gate ".concat(r, " with value ").concat(s),
                  d,
                );
              }
            };
          return this.subscriptions.onGateUpdated(r, i, this.checkGate.bind(this), o);
        },
      },
      {
        key: "onExperimentValueUpdated",
        value: function (r, n, a, o) {
          var i = this,
            c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {},
            s = function (u) {
              var d = c.fireExperimentExposure,
                f = d === void 0 ? !0 : d;
              f && i.manuallyLogExperimentExposure(r);
              try {
                o(u);
              } catch (v) {
                console.warn(
                  "Error calling callback for experiment ".concat(r, " with value ").concat(u),
                  v,
                );
              }
            };
          return this.subscriptions.onExperimentValueUpdated(
            r,
            n,
            a,
            s,
            this.getExperimentValue.bind(this),
            c,
          );
        },
      },
      {
        key: "onAnyUpdated",
        value: function (r) {
          return this.subscriptions.onAnyUpdated(r);
        },
      },
      {
        key: "init",
        value: (function () {
          var t = we(
            W.mark(function n(a, o, i) {
              var c, s, l, u, d, f, v, h;
              return W.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (c = ir({}, a)),
                          (g.prev = 1),
                          (u = Di.fetchClientSdk(a).then(function (b) {
                            return (c.sdkKey = b.clientSdkKey);
                          })),
                          (d = Di.fetchExperimentValues(a, o, i)),
                          (g.next = 6),
                          Promise.all([u, d])
                        );
                      case 6:
                        (f = g.sent),
                          (v = ee(f, 2)),
                          (h = v[1]),
                          (s = h.experimentValues),
                          (l = h.customAttributes),
                          (g.next = 20);
                        break;
                      case 13:
                        return (
                          (g.prev = 13),
                          (g.t0 = g.catch(1)),
                          g.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to fetch the Feature Gates client values, error: ".concat(
                                g.t0 === null || g.t0 === void 0 ? void 0 : g.t0.message,
                              ),
                            ),
                          console.warn("Initialising Statsig client without values"),
                          (g.next = 19),
                          this.initFromValues(c, o, i)
                        );
                      case 19:
                        throw g.t0;
                      case 20:
                        return g.abrupt("return", this.initFromValues(c, o, l, s));
                      case 21:
                      case "end":
                        return g.stop();
                    }
                },
                n,
                this,
                [[1, 13]],
              );
            }),
          );
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initWithProvider",
        value: (function () {
          var t = we(
            W.mark(function n(a, o, i, c) {
              var s, l, u, d, f, v, h, p;
              return W.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (s = ir(ir({}, a), {}, { disableCurrentPageLogging: !0 })),
                          (b.prev = 1),
                          (b.next = 4),
                          o.setProfile(a, i, c)
                        );
                      case 4:
                        return (
                          (d = o.getClientSdkKey().then(function (y) {
                            return (s.sdkKey = y);
                          })),
                          (f = o.getExperimentValues()),
                          (b.next = 8),
                          Promise.all([d, f])
                        );
                      case 8:
                        (v = b.sent),
                          (h = ee(v, 2)),
                          (p = h[1]),
                          (l = p.experimentValues),
                          (u = p.customAttributesFromFetch),
                          (b.next = 22);
                        break;
                      case 15:
                        return (
                          (b.prev = 15),
                          (b.t0 = b.catch(1)),
                          b.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to fetch the Feature Gates client values, error: ".concat(
                                b.t0 === null || b.t0 === void 0 ? void 0 : b.t0.message,
                              ),
                            ),
                          console.warn("Initialising Statsig client without values"),
                          (b.next = 21),
                          this.initFromValues(s, i, c)
                        );
                      case 21:
                        throw b.t0;
                      case 22:
                        return b.abrupt("return", this.initFromValues(s, i, u, l));
                      case 23:
                      case "end":
                        return b.stop();
                    }
                },
                n,
                this,
                [[1, 15]],
              );
            }),
          );
          function r(n, a, o, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initFromValues",
        value: (function () {
          var t = we(
            W.mark(function n(a, o, i) {
              var c,
                s,
                l,
                u,
                d,
                f,
                v,
                h = arguments;
              return W.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = h.length > 3 && h[3] !== void 0 ? h[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = o),
                          (this.currentAttributes = i),
                          (l = ty(a)),
                          l.sdkKey || (l.sdkKey = Ql),
                          ((c = l.networkConfig) !== null && c !== void 0 && c.logEventUrl) ||
                            (l.networkConfig = ir(
                              ir({}, l.networkConfig),
                              {},
                              { logEventUrl: ky },
                            )),
                          l.perimeter === Sa.FEDRAMP_MODERATE && (l.disableLogging = !0),
                          (u = l.sdkKey),
                          (d = l.environment),
                          l.updateUserCompletionCallback,
                          l.perimeter,
                          (f = re(l, wy)),
                          (this.sdkKey = u),
                          (this.user = Ul(o, i, this.sdkKey)),
                          (v = ir(
                            ir({}, f),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                            },
                          )),
                          (g.prev = 12),
                          (this.statsigClient = new Ct.StatsigClient(u, this.user, v)),
                          this.dataAdapter.setBootstrapData(s),
                          (g.next = 17),
                          this.statsigClient.initializeAsync()
                        );
                      case 17:
                        g.next = 29;
                        break;
                      case 19:
                        return (
                          (g.prev = 19),
                          (g.t0 = g.catch(12)),
                          g.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to initialise the Statsig client, error: ".concat(
                                g.t0 === null || g.t0 === void 0 ? void 0 : g.t0.message,
                              ),
                            ),
                          console.warn(
                            "Initialising Statsig client with default sdk key and without values",
                          ),
                          (this.statsigClient = new Ct.StatsigClient(Ql, this.user, v)),
                          this.dataAdapter.setBootstrapData(),
                          (g.next = 27),
                          this.statsigClient.initializeAsync()
                        );
                      case 27:
                        throw ((this.initWithDefaults = !0), g.t0);
                      case 29:
                      case "end":
                        return g.stop();
                    }
                },
                n,
                this,
                [[12, 19]],
              );
            }),
          );
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserUsingInitializeValuesProducer",
        value: (function () {
          var t = we(
            W.mark(function n(a, o, i) {
              var c = this,
                s,
                l,
                u;
              return W.wrap(
                function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        if ((this.assertInitialized(this.statsigClient), this.initPromise)) {
                          f.next = 3;
                          break;
                        }
                        throw new Error(
                          "The client must be initialized before you can update the user.",
                        );
                      case 3:
                        if (!this.isCurrentUser(o, i)) {
                          f.next = 5;
                          break;
                        }
                        return f.abrupt("return", this.initPromise);
                      case 5:
                        return (s = this.initPromise), (f.prev = 6), (f.next = 9), this.initPromise;
                      case 9:
                        f.next = 13;
                        break;
                      case 11:
                        (f.prev = 11), (f.t0 = f.catch(6));
                      case 13:
                        return (
                          (l = a()),
                          (u = this.updateStatsigClientUser(l, o, i)),
                          (this.initPromise = u.catch(
                            we(
                              W.mark(function v() {
                                return W.wrap(function (p) {
                                  for (;;)
                                    switch ((p.prev = p.next)) {
                                      case 0:
                                        if (((c.initPromise = s), !c.provider)) {
                                          p.next = 4;
                                          break;
                                        }
                                        return (
                                          (p.next = 4),
                                          c.provider.setProfile(
                                            c.initOptions,
                                            c.currentIdentifiers,
                                            c.currentAttributes,
                                          )
                                        );
                                      case 4:
                                      case "end":
                                        return p.stop();
                                    }
                                }, v);
                              }),
                            ),
                          )),
                          f.abrupt("return", u)
                        );
                      case 17:
                      case "end":
                        return f.stop();
                    }
                },
                n,
                this,
                [[6, 11]],
              );
            }),
          );
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateStatsigClientUser",
        value: (function () {
          var t = we(
            W.mark(function n(a, o, i) {
              var c, s, l, u, d, f, v, h, p;
              return W.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient), (b.prev = 1), (b.next = 4), a
                        );
                      case 4:
                        (l = b.sent),
                          (u = Ul(o, l.customAttributesFromFetch, this.sdkKey)),
                          (b.next = 13);
                        break;
                      case 8:
                        throw (
                          ((b.prev = 8),
                          (b.t0 = b.catch(1)),
                          (v = b.t0 instanceof Error ? b.t0.message : JSON.stringify(b.t0)),
                          (d = (f = this.initOptions).updateUserCompletionCallback) === null ||
                            d === void 0 ||
                            d.call(f, !1, v),
                          b.t0)
                        );
                      case 13:
                        return (
                          (h = !0),
                          (p = null),
                          (b.prev = 15),
                          this.dataAdapter.setBootstrapData(l.experimentValues),
                          (this.user = u),
                          (b.next = 20),
                          this.statsigClient.updateUserAsync(this.user)
                        );
                      case 20:
                        b.next = 26;
                        break;
                      case 22:
                        (b.prev = 22), (b.t1 = b.catch(15)), (h = !1), (p = String(b.t1));
                      case 26:
                        if (
                          ((c = this.initOptions) === null ||
                            c === void 0 ||
                            (s = c.updateUserCompletionCallback) === null ||
                            s === void 0 ||
                            s.call(c, h, p),
                          !h)
                        ) {
                          b.next = 33;
                          break;
                        }
                        (this.currentIdentifiers = o),
                          (this.currentAttributes = i),
                          this.subscriptions.anyUpdated(),
                          (b.next = 34);
                        break;
                      case 33:
                        throw new Error("Failed to update user. An unexpected error occured.");
                      case 34:
                      case "end":
                        return b.stop();
                    }
                },
                n,
                this,
                [
                  [1, 8],
                  [15, 22],
                ],
              );
            }),
          );
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "getPackageVersion",
        value: function () {
          return Zr;
        },
      },
      {
        key: "getLayer",
        value: function (r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          try {
            this.assertInitialized(this.statsigClient);
            var a = n.fireLayerExposure,
              o = a === void 0 ? !0 : a;
            return Gl.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !o }));
          } catch (i) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: i,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Gl.fromLayer(Ct._makeLayer(r, { reason: "Error" }, null))
            );
          }
        },
      },
      {
        key: "getLayerValue",
        value: function (r, n, a) {
          var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            i = this.getLayer(r, o);
          try {
            var c = o.typeGuard;
            return i.get(n, a, c);
          } catch (s) {
            return (
              this.hasGetLayerValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer value. Only the first occurrence of this error is logged.",
                  layerName: r,
                  defaultValue: a,
                  options: o,
                  error: s,
                }),
                (this.hasGetLayerValueErrorOccurred = !0)),
              a
            );
          }
        },
      },
    ]);
  })(),
  F,
  X = (function () {
    function e() {
      ge(this, e);
    }
    return be(e, null, [
      {
        key: "isGateExists",
        value: function (r) {
          return this.client.isGateExist(r);
        },
      },
      {
        key: "isExperimentExists",
        value: function (r) {
          return this.client.isExperimentExist(r);
        },
      },
    ]);
  })();
F = X;
P(X, "client", new Oy());
P(X, "hasCheckGateErrorOccurred", !1);
P(X, "hasGetExperimentValueErrorOccurred", !1);
P(X, "checkGate", function (e, t) {
  try {
    if (
      typeof window < "u" &&
      window.__CRITERION__ &&
      typeof window.__CRITERION__.getFeatureFlagOverride == "function"
    ) {
      var r = window.__CRITERION__.getFeatureFlagOverride(e);
      if (r !== void 0) return r;
    }
  } catch (n) {
    F.hasCheckGateErrorOccurred ||
      (console.warn({
        msg: "An error has occurred checking the feature gate from criterion override. Only the first occurrence of this error is logged.",
        gateName: e,
        error: n,
      }),
      (F.hasCheckGateErrorOccurred = !0));
  }
  return F.client.checkGate(e, t);
});
P(X, "getExperimentValue", function (e, t, r, n) {
  try {
    if (
      typeof window < "u" &&
      window.__CRITERION__ &&
      typeof window.__CRITERION__.getExperimentValueOverride == "function"
    ) {
      var a = window.__CRITERION__.getExperimentValueOverride(e, t);
      if (a != null) return a;
    }
  } catch (o) {
    return (
      F.hasGetExperimentValueErrorOccurred ||
        (console.warn({
          msg: "An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.",
          experimentName: e,
          defaultValue: r,
          options: n,
          error: o,
        }),
        (F.hasGetExperimentValueErrorOccurred = !0)),
      r
    );
  }
  return F.client.getExperimentValue(e, t, r, n);
});
P(X, "initializeCalled", F.client.initializeCalled.bind(F.client));
P(X, "initializeCompleted", F.client.initializeCompleted.bind(F.client));
P(X, "initialize", F.client.initialize.bind(F.client));
P(X, "initializeWithProvider", F.client.initializeWithProvider.bind(F.client));
P(X, "initializeFromValues", F.client.initializeFromValues.bind(F.client));
P(X, "manuallyLogGateExposure", F.client.manuallyLogGateExposure.bind(F.client));
P(X, "getExperiment", F.client.getExperiment.bind(F.client));
P(X, "manuallyLogExperimentExposure", F.client.manuallyLogExperimentExposure.bind(F.client));
P(X, "manuallyLogLayerExposure", F.client.manuallyLogLayerExposure.bind(F.client));
P(X, "shutdownStatsig", F.client.shutdownStatsig.bind(F.client));
P(X, "overrideGate", F.client.overrideGate.bind(F.client));
P(X, "clearGateOverride", F.client.clearGateOverride.bind(F.client));
P(X, "overrideConfig", F.client.overrideConfig.bind(F.client));
P(X, "clearConfigOverride", F.client.clearConfigOverride.bind(F.client));
P(X, "setOverrides", F.client.setOverrides.bind(F.client));
P(X, "getOverrides", F.client.getOverrides.bind(F.client));
P(X, "clearAllOverrides", F.client.clearAllOverrides.bind(F.client));
P(X, "isCurrentUser", F.client.isCurrentUser.bind(F.client));
P(X, "onGateUpdated", F.client.onGateUpdated.bind(F.client));
P(X, "onExperimentValueUpdated", F.client.onExperimentValueUpdated.bind(F.client));
P(X, "onAnyUpdated", F.client.onAnyUpdated.bind(F.client));
P(X, "updateUser", F.client.updateUser.bind(F.client));
P(X, "updateUserWithProvider", F.client.updateUserWithProvider.bind(F.client));
P(X, "updateUserWithValues", F.client.updateUserWithValues.bind(F.client));
P(X, "getPackageVersion", F.client.getPackageVersion.bind(F.client));
P(X, "getLayer", F.client.getLayer.bind(F.client));
P(X, "getLayerValue", F.client.getLayerValue.bind(F.client));
var vs = X;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = X;
  else {
    var Ha, Mi;
    vs = window.__FEATUREGATES_JS__;
    var eu =
      ((Ha = vs) === null || Ha === void 0 || (Mi = Ha.getPackageVersion) === null || Mi === void 0
        ? void 0
        : Mi.call(Ha)) || "4.10.0 or earlier";
    if (eu !== Zr) {
      var Sy = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(eu, " when module version ")
        .concat(Zr, " was loading.");
      console.warn(Sy);
    }
  }
var Br,
  qr,
  xy =
    (globalThis == null ||
    (Br = globalThis.process) === null ||
    Br === void 0 ||
    (Br = Br.env) === null ||
    Br === void 0
      ? void 0
      : Br.JEST_WORKER_ID) !== void 0,
  Ey =
    !xy &&
    (globalThis == null ||
    (qr = globalThis.process) === null ||
    qr === void 0 ||
    (qr = qr.env) === null ||
    qr === void 0
      ? void 0
      : qr.NODE_ENV) !== "production",
  Cy = function () {
    var t;
    Ey && (t = console).debug.apply(t, arguments);
  },
  Fs = {},
  Py = "@atlaskit/platform-feature-flags",
  fa = "__PLATFORM_FEATURE_FLAGS__",
  Nv = typeof process < "u" && typeof Fs < "u",
  Ry = Nv ? Fs.ENABLE_PLATFORM_FF === "true" : !1,
  Ay = Nv ? Fs.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  jy = Ry || Ay,
  Iy = { booleanResolver: void 0 },
  va = typeof window < "u" ? window : globalThis;
va[fa] = va[fa] || Iy;
function Dy(e) {
  if (jy)
    return (
      Cy(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        Py,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = va[fa]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = va[fa]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return vs.checkGate(e);
    var a = (n = va[fa]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function de(e) {
  return Dy(e);
}
var Ty = m.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  My = function () {
    return m.useContext(Ty);
  },
  xo = function (t) {
    var r = m.useRef(t);
    return (r.current = t), r;
  };
function Ly(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Ny(e, t) {
  var r = m.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = m.useRef(!0),
    a = m.useRef(r),
    o = n.current || !!(t && a.current.inputs && Ly(t, a.current.inputs)),
    i = o ? a.current : { inputs: t, result: e() };
  return (
    m.useEffect(
      function () {
        (n.current = !1), (a.current = i);
      },
      [i],
    ),
    i.result
  );
}
function $y(e, t) {
  return Ny(function () {
    return e;
  }, t);
}
function $v() {
  var e = My(),
    t = $y(
      function (r) {
        return new $m({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function tu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Fy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tu(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : tu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function rn(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    o = e.packageName,
    i = e.packageVersion,
    c = e.analyticsData,
    s = $v(),
    l = s.createAnalyticsEvent,
    u = xo(c),
    d = xo(t),
    f = m.useCallback(
      function (v) {
        var h = l({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: o, packageVersion: i },
          }),
          p = Fy({ componentName: n, packageName: o, packageVersion: i }, u.current);
        h.context.push(p);
        var g = h.clone();
        g && g.fire("atlaskit"), d.current(v, h);
      },
      [r, n, a, o, i, l, u, d],
    );
  return f;
}
function ru(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function zy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ru(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ru(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function nu(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    o = e.packageVersion,
    i = e.analyticsData,
    c = $v(),
    s = c.createAnalyticsEvent,
    l = xo(i),
    u = xo(t),
    d = m.useCallback(
      function () {
        var f = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          v = zy({ componentName: n, packageName: a, packageVersion: o }, l.current);
        f.context.push(v);
        var h = f.clone();
        h && h.fire("atlaskit"), u.current(f);
      },
      [r, n, a, o, s, l, u],
    );
  return d;
}
var Cr = "ASC",
  Eo = "DESC",
  By = "small",
  Co = "large",
  Fv = 0.22;
const qy = 5;
function T(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, qy) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function ye(e, t, r) {
  return e ?? "var(--c-, )";
}
var au = "#FF5630",
  ou = "#DE350B",
  Ur = "#BF2600",
  iu = "#FFC400",
  su = "#FFAB00",
  Vr = "#FF991F",
  zv = "#DEEBFF",
  sa = "#B3D4FF",
  Po = "#4C9AFF",
  cu = "#2684FF",
  lu = "#0065FF",
  Pt = "#0052CC",
  ps = "#0747A6",
  Jt = "#FFFFFF",
  Uy = "#FAFBFC",
  Me = "#F4F5F7",
  Vy = "#EBECF0",
  hs = "#DFE1E6",
  br = "#A5ADBA",
  Gy = "#8993A4",
  Hy = "#6B778C",
  uu = "#5E6C84",
  Wy = "#505F79",
  nn = "#42526E",
  at = "#253858",
  _r = "#172B4D",
  qn = "rgba(9, 30, 66, 0.04)",
  gs = "rgba(9, 30, 66, 0.08)",
  tx = "rgba(9, 30, 66, 0.25)",
  rx = "rgba(9, 30, 66, 0.31)",
  pt = "#9FB0CC",
  Ky = "#8C9CB8",
  Li = "#67758F",
  Un = "#3B475C",
  du = "#313D52",
  Vn = "#1B2638",
  Gr = "#0D1424",
  Yy = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"];
function fu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function vu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fu(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : fu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Jy = m.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      o = e.testId,
      i = e.isLoading,
      c = re(e, Yy);
    return m.createElement(
      "table",
      Y({ inert: i ? "" : void 0, ref: t }, c, {
        "data-testid": o && "".concat(o, "--table"),
        className: T([
          "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
          r && "_1kqm1n9t",
          n && "_179rralu",
        ]),
        style: vu(
          vu(
            {},
            {
              "--local-dynamic-table-hover-bg":
                "var(--ds-background-neutral-subtle-hovered, ".concat(Uy, ")"),
              "--local-dynamic-table-highlighted-bg": "var(--ds-background-selected, ".concat(
                zv,
                ")",
              ),
              "--local-dynamic-table-hover-highlighted-bg":
                "var(--ds-background-selected-hovered, ".concat(sa, ")"),
              "--local-dynamic-table-row-focus-outline": "var(--ds-border-focused, ".concat(
                Po,
                ")",
              ),
            },
          ),
          {},
          { "--_k02y3n": ye("2px solid ".concat("var(--ds-border, ".concat(hs, ")"))) },
        ),
      }),
      a,
    );
  }),
  Xy = function (t) {
    var r = t.children;
    return m.createElement(
      "caption",
      { className: T(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  Zy = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: T(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  Qy = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: T(["_4t3i1jdh"]),
      },
      r,
    );
  },
  e_ = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-container"),
        className: T([
          "_19pk1wug _2hwx1wug _otyr1wug _18u01wug _ca0q19bv _u5f319bv _n3td19bv _19bv19bv _1bsb1ssb _y3gn1h6o",
        ]),
      },
      r,
    );
  },
  t_ = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function pu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function hu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pu(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function r_(e, t, r) {
  return (t = Z(t)), qe(e, Bv() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r));
}
function Bv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Bv = function () {
    return !!e;
  })();
}
var gu = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var o;
      if (r.cells[a] && ((o = r.cells[a]) === null || o === void 0 ? void 0 : o.key) === n) {
        var i;
        return (i = t[a]) === null || i === void 0 ? void 0 : i.key;
      }
    }
  },
  n_ = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var o = a === Cr ? 1 : -1,
      i = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      c = Array.from(r);
    return c.sort(function (s, l) {
      var u = gu(s.cells, t, n),
        d = gu(l.cells, t, n);
      if (u === void 0 || d === void 0) return o;
      if (Fe(u) !== Fe(d)) {
        if (typeof u == "number") return -1;
        if (typeof d == "number") return 1;
        if (typeof u == "string") return -1;
        if (typeof d == "string") return 1;
      }
      return typeof u == "string" && typeof d == "string"
        ? o * i.compare(u, d)
        : (!u && u !== 0) || u < d
          ? -o
          : (!d && d !== 0) || u > d
            ? o
            : u === d
              ? 0
              : 1;
    });
  };
function a_(e) {
  var t = (function (r) {
    function n() {
      var a;
      ge(this, n);
      for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
      return (a = r_(this, n, [].concat(i))), P(a, "state", { pageRows: [] }), a;
    }
    return (
      Ue(n, r),
      be(
        n,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.props.onPageRowsUpdate && this.props.onPageRowsUpdate(this.state.pageRows);
            },
          },
          {
            key: "componentDidUpdate",
            value: function (o, i) {
              this.props.onPageRowsUpdate &&
                this.state.pageRows !== i.pageRows &&
                this.props.onPageRowsUpdate(this.state.pageRows);
            },
          },
          {
            key: "render",
            value: function () {
              var o = this.props;
              o.rows;
              var i = o.head;
              o.sortKey, o.sortOrder, o.rowsPerPage, o.page;
              var c = o.forwardedRef,
                s = re(o, t_);
              return k.createElement(
                e,
                Y({ pageRows: this.state.pageRows, head: i }, s, { ref: c }),
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (o, i) {
              var c = o.rows,
                s = o.head,
                l = o.sortKey,
                u = o.sortOrder,
                d = o.page,
                f = o.rowsPerPage,
                v = o.isTotalPagesControlledExternally;
              ko(l, s);
              var h, p;
              return (
                v ? ((h = c), (p = c)) : ((h = n_(s, c, l, u) || []), (p = Pv(h, d, f))),
                hu(hu({}, i), {}, { pageRows: p })
              );
            },
          },
        ],
      )
    );
  })(k.Component);
  return k.forwardRef(function (r, n) {
    return k.createElement(t, Y({}, r, { forwardedRef: n }));
  });
}
var o_ = "--local-dynamic-table-width",
  qv = function (t) {
    var r = t.width;
    return typeof r < "u" ? P({}, o_, "".concat(r, "%")) : void 0;
  },
  i_ = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  s_ = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      o = t.innerRef,
      i = re(t, i_);
    return m.createElement(
      "td",
      Y(
        {
          style: qv({ width: r }),
          ref: o,
          className: T([
            "_1bsb8a2a",
            n && a && "_1bto1l2s _o5721q9c",
            n && "_1reo15vq _18m915vq",
            "_19itglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
            i.className,
          ]),
        },
        i,
      ),
    );
  },
  c_ = ["isHighlighted", "children", "style", "testId", "className"];
function bu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function mu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bu(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var l_ = m.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      o = e.testId,
      i = e.className,
      c = re(e, c_);
    return m.createElement(
      "tr",
      Y(
        {
          className: T([
            "_bfhkqtfy _1ygb1852 _1ah312gs",
            r ? "_bfhktkjs _irr31ae3" : "_irr3s8ts",
            i,
          ]),
        },
        c,
        {
          ref: t,
          "data-testid": o,
          style: mu(
            mu({}, a),
            {},
            {
              "--_akp1ox": ye(
                "2px solid ".concat(
                  "var(--ds-border-focused, var(--local-dynamic-table-hover-bg))",
                ),
              ),
            },
          ),
        },
      ),
      n,
    );
  }),
  u_ = ["cells"],
  d_ = ["content", "testId"],
  f_ = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      o = t.isFixedSize,
      i = t.isHighlighted,
      c = r.cells,
      s = re(r, u_);
    return k.createElement(
      l_,
      Y(
        {},
        s,
        { isHighlighted: i },
        i ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(s.key)) },
      ),
      c.map(function (l, u) {
        var d = l.content,
          f = l.testId,
          v = re(l, d_),
          h = (n || { cells: [] }).cells[u] || {},
          p = h.shouldTruncate,
          g = h.width;
        return k.createElement(
          s_,
          Y({ "data-testid": f || (a && "".concat(a, "--cell-").concat(u)) }, v, {
            isFixedSize: o,
            key: u,
            shouldTruncate: p,
            width: g,
          }),
          d,
        );
      }),
    );
  };
function v_(e, t, r) {
  return (t = Z(t)), qe(e, Uv() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r));
}
function Uv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Uv = function () {
    return !!e;
  })();
}
var p_ = (function (e) {
    function t() {
      return ge(this, t), v_(this, t, arguments);
    }
    return (
      Ue(t, e),
      be(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.pageRows,
              o = n.head,
              i = n.isFixedSize,
              c = n.highlightedRowIndex,
              s = n.testId,
              l = n.forwardedRef;
            return k.createElement(
              "tbody",
              { "data-testid": s && "".concat(s, "--body"), ref: l },
              a.map(function (u, d) {
                return k.createElement(f_, {
                  head: o,
                  isFixedSize: i,
                  key: u.key || d,
                  row: u,
                  isHighlighted:
                    u.isHighlighted ||
                    (!!c && (typeof c == "number" ? c === d : c.indexOf(d) > -1)),
                  testId: s,
                });
              }),
            );
          },
        },
      ])
    );
  })(k.Component),
  h_ = a_(
    k.forwardRef(function (e, t) {
      return k.createElement(p_, Y({}, e, { forwardedRef: t }));
    }),
  );
function g_(e, t, r) {
  return (t = Z(t)), qe(e, Vv() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r));
}
function Vv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Vv = function () {
    return !!e;
  })();
}
var b_ = (function (e) {
  function t(r) {
    var n;
    return ge(this, t), (n = g_(this, t, [r])), (n.state = { hasError: !1 }), n;
  }
  return (
    Ue(t, e),
    be(
      t,
      [
        {
          key: "render",
          value: function () {
            return this.state.hasError ? this.props.fallback : this.props.children;
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromError",
          value: function () {
            return { hasError: !0 };
          },
        },
      ],
    )
  );
})(k.Component);
const zs = m.createContext(null);
var m_ = { xsmall: 8, small: 16, medium: 24, large: 48, xlarge: 96 };
function y_(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(nn, ")")
    : "var(--ds-icon-inverse, ".concat(Jt, ")");
}
var Wa = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1eco _5sag9cwz _1pgl1ytf _1o51q7pw _tzy4idpf",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _opj11kw7 _134c892t _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  __ = typeof window > "u" ? m.useEffect : m.useLayoutEffect,
  Bs = k.memo(
    k.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "inherit" : n,
        o = t.delay,
        i = o === void 0 ? 0 : o,
        c = t.interactionName,
        s = t.label,
        l = t.size,
        u = l === void 0 ? "medium" : l,
        d = t.testId,
        f = typeof u == "number" ? u : m_[u],
        v = "".concat(i, "ms"),
        h = y_(a),
        p = m.useContext(zs);
      return (
        __(
          function () {
            if (p != null) return p.hold(c);
          },
          [p, c],
        ),
        k.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: v, width: f, height: f },
            className: T([Wa.wrapperStyles, Wa.rotateStyles]),
          },
          k.createElement(
            "svg",
            {
              height: f,
              width: f,
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
              "data-testid": d,
              ref: r,
              "aria-label": s || void 0,
              style: { animationDelay: v },
              role: s ? "img" : "none",
              className: T([Wa.loadInStyles]),
            },
            k.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: T([Wa.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function yu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function _u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yu(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var wu = "--contents-opacity",
  w_ = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: T(["_kqswh2mm"]) },
      r,
    );
  },
  k_ = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: T(["_tzy47hfw _lcxvglyw"]),
        style: _u(_u({}, P({}, wu, n)), {}, { "--_cnddr8": ye("var(".concat(wu, ")")) }),
      },
      r,
    );
  },
  O_ = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: T(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function S_(e, t, r) {
  return (t = Z(t)), qe(e, Gv() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r));
}
function Gv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Gv = function () {
    return !!e;
  })();
}
var Hv = (function (e) {
  function t() {
    return ge(this, t), S_(this, t, arguments);
  }
  return (
    Ue(t, e),
    be(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            a = n.children,
            o = n.isLoading,
            i = n.spinnerSize,
            c = n.contentsOpacity,
            s = n.testId,
            l = n.loadingLabel;
          return k.createElement(
            w_,
            { testId: s },
            o ? k.createElement(k_, { contentsOpacity: c, testId: s }, a) : a,
            o &&
              k.createElement(
                O_,
                { testId: s },
                k.createElement(Bs, {
                  size: i,
                  testId: s && "".concat(s, "--loadingSpinner"),
                  label: l,
                }),
              ),
          );
        },
      },
    ])
  );
})(k.Component);
P(Hv, "defaultProps", {
  isLoading: !0,
  spinnerSize: Co,
  contentsOpacity: Fv,
  loadingLabel: "Loading table",
});
var x_ = ["children", "testId"],
  E_ = m.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = re(e, x_);
    return m.createElement(
      "div",
      Y({}, a, { "data-testid": n, ref: t, className: T(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  C_ = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: T(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  P_ = m.forwardRef(function (e, t) {
    var r = e.children;
    return m.createElement("div", { ref: t, className: T(["_kqswh2mm _152tidpf"]) }, r);
  });
function R_(e, t, r) {
  return (t = Z(t)), qe(e, Wv() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r));
}
function Wv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Wv = function () {
    return !!e;
  })();
}
var Kv = (function (e) {
  function t() {
    var r;
    ge(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = R_(this, t, [].concat(a))),
      P(r, "spinnerRef", k.createRef()),
      P(r, "containerRef", k.createRef()),
      P(r, "componentDidMount", function () {
        r.props.isLoading &&
          r.hasTargetNode() &&
          (r.attachListeners(), r.updateTargetAppearance(), r.updateSpinnerPosition());
      }),
      P(r, "UNSAFE_componentWillReceiveProps", function (i) {
        !i.isLoading || !r.hasTargetNode(i)
          ? r.detachListeners()
          : r.props.isLoading || r.attachListeners();
      }),
      P(r, "componentDidUpdate", function () {
        r.hasTargetNode() &&
          (r.updateTargetAppearance(), r.props.isLoading && r.updateSpinnerPosition());
      }),
      P(r, "componentWillUnmount", function () {
        r.detachListeners();
      }),
      P(r, "getTargetNode", function () {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r.props,
          c = i.targetRef,
          s = c == null ? void 0 : c();
        return s || r.containerRef.current;
      }),
      P(r, "hasTargetNode", function (i) {
        return !!r.getTargetNode(i);
      }),
      P(r, "isVerticallyVisible", function (i, c) {
        var s = i.top,
          l = i.bottom;
        return l <= 0 ? !1 : s < c;
      }),
      P(r, "isFullyVerticallyVisible", function (i, c) {
        var s = i.top,
          l = i.bottom;
        return s >= 0 && l <= c;
      }),
      P(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      P(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      P(r, "translateSpinner", function (i, c, s) {
        (i.style.position = s ? "fixed" : ""),
          (i.style.transform = c !== 0 ? "translate3d(0, ".concat(c, "px, 0)") : "");
      }),
      P(r, "updateTargetAppearance", function () {
        var i = r.getTargetNode(),
          c = r.props,
          s = c.isLoading,
          l = c.contentsOpacity;
        i &&
          i.style &&
          Fe(i.style) === "object" &&
          ((i.style.pointerEvents = s ? "none" : ""), (i.style.opacity = s ? l.toString() : ""));
      }),
      r
    );
  }
  return (
    Ue(t, e),
    be(t, [
      {
        key: "attachListeners",
        value: function () {
          window.addEventListener("scroll", this.handleScroll),
            window.addEventListener("resize", this.handleResize);
        },
      },
      {
        key: "detachListeners",
        value: function () {
          window.removeEventListener("scroll", this.handleScroll),
            window.removeEventListener("resize", this.handleResize);
        },
      },
      {
        key: "updateSpinnerPosition",
        value: function () {
          var n,
            a,
            o = window.innerHeight,
            i = this.getTargetNode(),
            c = (n = this.spinnerRef) === null || n === void 0 ? void 0 : n.current;
          if (!(!i || typeof i.getBoundingClientRect != "function" || !c)) {
            var s = i.getBoundingClientRect(),
              l = c.getBoundingClientRect(),
              u = l.height,
              d = this.isVerticallyVisible(s, o),
              f = s.top,
              v = s.bottom,
              h = s.height;
            if (d) {
              var p = h >= u * 3;
              if (p && !this.isFullyVerticallyVisible(s, o)) {
                if (f >= 0) {
                  var g = o - f,
                    b = g / 2 + f - u / 2,
                    y = g < u * 3 ? f + u : b;
                  this.translateSpinner(c, y, !0);
                } else if (f < 0 && v > o) {
                  var O = o / 2 - u / 2;
                  this.translateSpinner(c, O, !0);
                } else {
                  var w = v / 2 - u / 2,
                    _ = w < u ? w - (u - w) : w;
                  this.translateSpinner(c, _, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(l, o)) return;
            var S = (a = this.containerRef) === null || a === void 0 ? void 0 : a.current;
            if (S && typeof S.getBoundingClientRect == "function") {
              var x = S.getBoundingClientRect().top,
                A = (f - x) / 2;
              this.translateSpinner(c, A, !1);
            }
          }
        },
      },
      {
        key: "render",
        value: function () {
          var n = this.props,
            a = n.children,
            o = n.isLoading,
            i = n.spinnerSize,
            c = n.testId,
            s = n.loadingLabel;
          return k.createElement(
            E_,
            { testId: c && "".concat(c, "--loading--container--advanced"), ref: this.containerRef },
            a,
            o &&
              k.createElement(
                C_,
                { testId: c },
                k.createElement(
                  P_,
                  { ref: this.spinnerRef },
                  k.createElement(Bs, {
                    size: i,
                    testId: c && "".concat(c, "--loadingSpinner"),
                    label: s,
                  }),
                ),
              ),
          );
        },
      },
    ])
  );
})(k.Component);
P(Kv, "defaultProps", {
  isLoading: !0,
  spinnerSize: Co,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Fv), ")"),
  loadingLabel: "Loading table",
});
function A_(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = m.useState(t),
    a = ee(n, 2),
    o = a[0],
    i = a[1],
    c = m.useRef(r);
  m.useEffect(
    function () {
      c.current = r;
    },
    [r],
  );
  var s = r ? e : o,
    l = m.useCallback(function (u) {
      c.current || i(u);
    }, []);
  return [s, l];
}
var Gn = {},
  Hn = {},
  j_ = { none: "_1bsbpxbi _4t3ipxbi", compact: "", spacious: "_1bsb1ejb _4t3i1ejb" },
  I_ = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  D_ = { core: 16, utility: 12 },
  ku = { core: { none: 0, spacious: 4 }, utility: { none: 0, compact: 2, spacious: 6 } },
  Ou = m.memo(function (t) {
    var r,
      n,
      a,
      o = t,
      i = o.color,
      c = i === void 0 ? "currentColor" : i,
      s = o.testId,
      l = o.label,
      u = o.LEGACY_primaryColor,
      d = o.LEGACY_secondaryColor,
      f = o.LEGACY_size,
      v = o.LEGACY_fallbackIcon,
      h = o.dangerouslySetGlyph,
      p = o.shouldScale,
      g = o.LEGACY_margin,
      b = h ? { __html: h } : void 0;
    if (v && !de("platform-visual-refresh-icons"))
      return m.createElement(v, {
        primaryColor: u ?? c,
        secondaryColor: d,
        size: f,
        label: l,
        testId: s,
        UNSAFE_margin: g,
      });
    var y = D_[(r = t.type) !== null && r !== void 0 ? r : "core"],
      O;
    if (t.type === "utility") {
      var w;
      O = ku[t.type][(w = t.spacing) !== null && w !== void 0 ? w : "none"];
    } else {
      var _;
      O = ku.core[(_ = t.spacing) !== null && _ !== void 0 ? _ : "none"];
    }
    var S = y + 2 * O;
    return m.createElement(
      "span",
      {
        "data-testid": s,
        role: l ? "img" : void 0,
        "aria-label": l || void 0,
        "aria-hidden": l ? void 0 : !0,
        style: { color: c },
        className: T([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          p && "_1bsb1kw7 _4t3i1kw7",
          t.type === "utility" && "_vwz4utpp",
        ]),
      },
      m.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - O, " ")
          .concat(0 - O, " ")
          .concat(S, " ")
          .concat(S),
        role: "presentation",
        dangerouslySetInnerHTML: b,
        className: T([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p
            ? "_1bsb1kw7 _4t3i1kw7"
            : t.type === "utility"
              ? I_[(n = t.spacing) !== null && n !== void 0 ? n : "none"]
              : j_[(a = t.spacing) !== null && a !== void 0 ? a : "none"],
        ]),
      }),
    );
  });
const T_ = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Ou, default: Ou }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Jo = Rs(T_);
var Su;
function Yv() {
  if (Su) return Hn;
  (Su = 1), Object.defineProperty(Hn, "__esModule", { value: !0 }), (Hn.default = void 0);
  var e = r(_t()),
    t = r(Jo);
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="m4.06 6 3.97-3.97L6.97.97l-4.5 4.5a.75.75 0 0 0 0 1.06l4.5 4.5 1.06-1.06z" clip-rule="evenodd"/>',
          type: "utility",
        },
        a,
      ),
    );
  return (n.displayName = "ChevronLeftIcon"), (Hn.default = n), Hn;
}
var Wn = {};
function xu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Eu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xu(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var M_ = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  bs = m.memo(function (t) {
    var r = t,
      n = r.glyph,
      a = r.dangerouslySetGlyph,
      o = r.primaryColor,
      i = o === void 0 ? "currentColor" : o,
      c = r.secondaryColor,
      s = r.size,
      l = r.testId,
      u = r.label,
      d = r.width,
      f = r.height,
      v = r.UNSAFE_margin,
      h = a
        ? { dangerouslySetInnerHTML: { __html: a } }
        : { children: n ? m.createElement(n, { role: "presentation" }) : null },
      p = d && f ? { width: d + "px", height: f + "px" } : null;
    return m.createElement(
      "span",
      Y(
        {
          "data-testid": l,
          "data-vc": "icon-".concat(l),
          role: u ? "img" : void 0,
          "aria-label": u || void 0,
          "aria-hidden": u ? void 0 : !0,
          style: Eu(
            Eu({}, p),
            {},
            { "--icon-primary-color": i, "--icon-secondary-color": c, margin: v },
          ),
        },
        h,
        {
          className: T([
            "_1e0c1o8l _1o9zidpf _vyfuvuon _vwz4kb7n _1szv15vq _1tly15vq _rzyw1osq _17jb1osq _1ksvoz0e _3se1x1jp _re2rglyw _1veoyfq0 _1kg81r31",
            "_jcxd1r8n _gq0g1onz _1trkwc43",
            i === c && "_18hbwc43",
            c === "transparent" && "_4fyi1j28",
            s && M_[s],
          ]),
        },
      ),
    );
  }),
  L_ = ["dangerouslySetGlyph"],
  Cu = {
    utility: { small: "compact", medium: "spacious" },
    core: { small: "none", medium: "spacious" },
  },
  N_ = m.memo(function (t) {
    var r,
      n = t.dangerouslySetGlyph,
      a = re(t, L_),
      o = a.newIcon,
      i = (r = a.size) !== null && r !== void 0 ? r : "medium",
      c = !a.isFacadeDisabled && de("platform-visual-refresh-icons-legacy-facade");
    if (c && o && (i === "small" || i === "medium"))
      if (a.iconType === "utility") {
        var s = o;
        return k.createElement(
          s,
          Y({}, a, {
            spacing: de("platform-visual-refresh-icons-facade-button-fix") ? Cu.utility[i] : "none",
            color: a.primaryColor || "currentColor",
            type: a.iconType,
          }),
        );
      } else {
        var l = o;
        return k.createElement(
          l,
          Y({}, a, {
            spacing: Cu.core[i],
            color: a.primaryColor || "currentColor",
            type: a.iconType,
          }),
        );
      }
    return k.createElement(bs, Y({ dangerouslySetGlyph: n }, a));
  });
const $_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, Icon: bs, IconFacade: N_, default: bs },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Jv = Rs($_);
var Pu;
function F_() {
  if (Pu) return Wn;
  (Pu = 1), Object.defineProperty(Wn, "__esModule", { value: !0 }), (Wn.default = void 0);
  var e = n(_t()),
    t = Jv,
    r = n(Yv());
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  const a = (o) =>
    e.default.createElement(
      t.IconFacade,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" fill-rule="evenodd" d="m9.005 10.995 4.593-4.593a.99.99 0 1 1 1.4 1.4l-3.9 3.9 3.9 3.9a.99.99 0 0 1-1.4 1.4L9.005 12.41a1 1 0 0 1 0-1.414"/></svg>',
        },
        o,
        { newIcon: r.default, iconType: "utility" },
      ),
    );
  return (a.displayName = "ChevronLeftLargeIcon"), (Wn.default = a), Wn;
}
var Ru;
function z_() {
  if (Ru) return Gn;
  (Ru = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.default = void 0);
  var e = n(_t()),
    t = n(Yv()),
    r = n(F_());
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  const a = (o) =>
    e.default.createElement(t.default, Object.assign({ LEGACY_fallbackIcon: r.default }, o));
  return (a.Name = "ChevronLeftIconMigration"), (Gn.default = a), Gn;
}
var B_ = z_();
const q_ = Rr(B_);
var Kn = {},
  Yn = {},
  Au;
function Xv() {
  if (Au) return Yn;
  (Au = 1), Object.defineProperty(Yn, "__esModule", { value: !0 }), (Yn.default = void 0);
  var e = r(_t()),
    t = r(Jo);
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M7.94 6 3.97 2.03 5.03.97l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5-1.06-1.06z" clip-rule="evenodd"/>',
          type: "utility",
        },
        a,
      ),
    );
  return (n.displayName = "ChevronRightIcon"), (Yn.default = n), Yn;
}
var Jn = {},
  ju;
function U_() {
  if (ju) return Jn;
  (ju = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.default = void 0);
  var e = n(_t()),
    t = Jv,
    r = n(Xv());
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  const a = (o) =>
    e.default.createElement(
      t.IconFacade,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" fill-rule="evenodd" d="M14.995 10.995a1 1 0 0 1 0 1.414l-4.593 4.593a.99.99 0 0 1-1.4-1.4l3.9-3.9-3.9-3.9a.99.99 0 0 1 1.4-1.4z"/></svg>',
        },
        o,
        { newIcon: r.default, iconType: "utility" },
      ),
    );
  return (a.displayName = "ChevronRightLargeIcon"), (Jn.default = a), Jn;
}
var Iu;
function V_() {
  if (Iu) return Kn;
  (Iu = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.default = void 0);
  var e = n(_t()),
    t = n(Xv()),
    r = n(U_());
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  const a = (o) =>
    e.default.createElement(t.default, Object.assign({ LEGACY_fallbackIcon: r.default }, o));
  return (a.Name = "ChevronRightIconMigration"), (Kn.default = a), Kn;
}
var G_ = V_();
const H_ = Rr(G_);
var qs = m.createContext("elevation.surface"),
  W_ = function () {
    return m.useContext(qs);
  };
qs.displayName = "SurfaceProvider";
var K_ = [
    "as",
    "children",
    "backgroundColor",
    "padding",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "style",
    "testId",
    "xcss",
  ],
  Y_ = ["className"],
  J_ = {
    "color.background.accent.lime.subtlest": "_bfhkm890",
    "color.background.accent.lime.subtlest.hovered": "_bfhkd4y8",
    "color.background.accent.lime.subtlest.pressed": "_bfhk1fno",
    "color.background.accent.lime.subtler": "_bfhkz2ec",
    "color.background.accent.lime.subtler.hovered": "_bfhk1eds",
    "color.background.accent.lime.subtler.pressed": "_bfhk1hgz",
    "color.background.accent.lime.subtle": "_bfhkbq5w",
    "color.background.accent.lime.subtle.hovered": "_bfhkfoww",
    "color.background.accent.lime.subtle.pressed": "_bfhkhgj8",
    "color.background.accent.lime.bolder": "_bfhktde4",
    "color.background.accent.lime.bolder.hovered": "_bfhknzpa",
    "color.background.accent.lime.bolder.pressed": "_bfhk1b17",
    "color.background.accent.red.subtlest": "_bfhk1vk5",
    "color.background.accent.red.subtlest.hovered": "_bfhk1i6i",
    "color.background.accent.red.subtlest.pressed": "_bfhk1pbw",
    "color.background.accent.red.subtler": "_bfhk1rtt",
    "color.background.accent.red.subtler.hovered": "_bfhkrw5d",
    "color.background.accent.red.subtler.pressed": "_bfhk69rw",
    "color.background.accent.red.subtle": "_bfhkkrt9",
    "color.background.accent.red.subtle.hovered": "_bfhk1sou",
    "color.background.accent.red.subtle.pressed": "_bfhk1tf4",
    "color.background.accent.red.bolder": "_bfhkuibq",
    "color.background.accent.red.bolder.hovered": "_bfhk100f",
    "color.background.accent.red.bolder.pressed": "_bfhkprmn",
    "color.background.accent.orange.subtlest": "_bfhk1g3m",
    "color.background.accent.orange.subtlest.hovered": "_bfhkg4tm",
    "color.background.accent.orange.subtlest.pressed": "_bfhk1ya0",
    "color.background.accent.orange.subtler": "_bfhkf2vu",
    "color.background.accent.orange.subtler.hovered": "_bfhk1lml",
    "color.background.accent.orange.subtler.pressed": "_bfhkuxsx",
    "color.background.accent.orange.subtle": "_bfhk1g6e",
    "color.background.accent.orange.subtle.hovered": "_bfhk1oew",
    "color.background.accent.orange.subtle.pressed": "_bfhk1phk",
    "color.background.accent.orange.bolder": "_bfhkjgng",
    "color.background.accent.orange.bolder.hovered": "_bfhkhi52",
    "color.background.accent.orange.bolder.pressed": "_bfhkf767",
    "color.background.accent.yellow.subtlest": "_bfhk1ozg",
    "color.background.accent.yellow.subtlest.hovered": "_bfhk19g9",
    "color.background.accent.yellow.subtlest.pressed": "_bfhk31d1",
    "color.background.accent.yellow.subtler": "_bfhk3fv2",
    "color.background.accent.yellow.subtler.hovered": "_bfhklg04",
    "color.background.accent.yellow.subtler.pressed": "_bfhk1d44",
    "color.background.accent.yellow.subtle": "_bfhkry5t",
    "color.background.accent.yellow.subtle.hovered": "_bfhk17e6",
    "color.background.accent.yellow.subtle.pressed": "_bfhko0y5",
    "color.background.accent.yellow.bolder": "_bfhk1vop",
    "color.background.accent.yellow.bolder.hovered": "_bfhkkjqf",
    "color.background.accent.yellow.bolder.pressed": "_bfhk32kj",
    "color.background.accent.green.subtlest": "_bfhkn729",
    "color.background.accent.green.subtlest.hovered": "_bfhk3utz",
    "color.background.accent.green.subtlest.pressed": "_bfhkv5yf",
    "color.background.accent.green.subtler": "_bfhk1wnw",
    "color.background.accent.green.subtler.hovered": "_bfhkung8",
    "color.background.accent.green.subtler.pressed": "_bfhk1p19",
    "color.background.accent.green.subtle": "_bfhk1rsu",
    "color.background.accent.green.subtle.hovered": "_bfhk12e3",
    "color.background.accent.green.subtle.pressed": "_bfhk8h4p",
    "color.background.accent.green.bolder": "_bfhk1e5c",
    "color.background.accent.green.bolder.hovered": "_bfhka5yi",
    "color.background.accent.green.bolder.pressed": "_bfhk1azz",
    "color.background.accent.teal.subtlest": "_bfhk7xuz",
    "color.background.accent.teal.subtlest.hovered": "_bfhk108c",
    "color.background.accent.teal.subtlest.pressed": "_bfhk1j2h",
    "color.background.accent.teal.subtler": "_bfhk1a17",
    "color.background.accent.teal.subtler.hovered": "_bfhkg5py",
    "color.background.accent.teal.subtler.pressed": "_bfhkq7li",
    "color.background.accent.teal.subtle": "_bfhktdv8",
    "color.background.accent.teal.subtle.hovered": "_bfhkzh8h",
    "color.background.accent.teal.subtle.pressed": "_bfhk10ai",
    "color.background.accent.teal.bolder": "_bfhk2c8p",
    "color.background.accent.teal.bolder.hovered": "_bfhkl3ve",
    "color.background.accent.teal.bolder.pressed": "_bfhkse6l",
    "color.background.accent.blue.subtlest": "_bfhkavxe",
    "color.background.accent.blue.subtlest.hovered": "_bfhkay3p",
    "color.background.accent.blue.subtlest.pressed": "_bfhk1xmr",
    "color.background.accent.blue.subtler": "_bfhk4v9p",
    "color.background.accent.blue.subtler.hovered": "_bfhk16e6",
    "color.background.accent.blue.subtler.pressed": "_bfhk1uh7",
    "color.background.accent.blue.subtle": "_bfhk1j89",
    "color.background.accent.blue.subtle.hovered": "_bfhk1f4s",
    "color.background.accent.blue.subtle.pressed": "_bfhkqctv",
    "color.background.accent.blue.bolder": "_bfhkc8cv",
    "color.background.accent.blue.bolder.hovered": "_bfhk1cwi",
    "color.background.accent.blue.bolder.pressed": "_bfhkhcrq",
    "color.background.accent.purple.subtlest": "_bfhkp7j4",
    "color.background.accent.purple.subtlest.hovered": "_bfhkm0d5",
    "color.background.accent.purple.subtlest.pressed": "_bfhkgslw",
    "color.background.accent.purple.subtler": "_bfhk1jkz",
    "color.background.accent.purple.subtler.hovered": "_bfhk1wyu",
    "color.background.accent.purple.subtler.pressed": "_bfhk5fkp",
    "color.background.accent.purple.subtle": "_bfhkdh45",
    "color.background.accent.purple.subtle.hovered": "_bfhk1wob",
    "color.background.accent.purple.subtle.pressed": "_bfhkwz05",
    "color.background.accent.purple.bolder": "_bfhkygwo",
    "color.background.accent.purple.bolder.hovered": "_bfhkadgs",
    "color.background.accent.purple.bolder.pressed": "_bfhk1uro",
    "color.background.accent.magenta.subtlest": "_bfhk8tvm",
    "color.background.accent.magenta.subtlest.hovered": "_bfhkr3zd",
    "color.background.accent.magenta.subtlest.pressed": "_bfhk1een",
    "color.background.accent.magenta.subtler": "_bfhkv9ra",
    "color.background.accent.magenta.subtler.hovered": "_bfhk1r0p",
    "color.background.accent.magenta.subtler.pressed": "_bfhkxuzc",
    "color.background.accent.magenta.subtle": "_bfhk1mi6",
    "color.background.accent.magenta.subtle.hovered": "_bfhkrwyz",
    "color.background.accent.magenta.subtle.pressed": "_bfhk1ovh",
    "color.background.accent.magenta.bolder": "_bfhkc3uk",
    "color.background.accent.magenta.bolder.hovered": "_bfhk1ok8",
    "color.background.accent.magenta.bolder.pressed": "_bfhkwaw3",
    "color.background.accent.gray.subtlest": "_bfhk11bn",
    "color.background.accent.gray.subtlest.hovered": "_bfhk12j4",
    "color.background.accent.gray.subtlest.pressed": "_bfhk1lb4",
    "color.background.accent.gray.subtler": "_bfhk1v33",
    "color.background.accent.gray.subtler.hovered": "_bfhk1f7l",
    "color.background.accent.gray.subtler.pressed": "_bfhkd8a2",
    "color.background.accent.gray.subtle": "_bfhk1t05",
    "color.background.accent.gray.subtle.hovered": "_bfhk1a2l",
    "color.background.accent.gray.subtle.pressed": "_bfhk1z0s",
    "color.background.accent.gray.bolder": "_bfhk1t1b",
    "color.background.accent.gray.bolder.hovered": "_bfhke4nv",
    "color.background.accent.gray.bolder.pressed": "_bfhk82ra",
    "color.background.disabled": "_bfhksyzs",
    "color.background.input": "_bfhk1j9a",
    "color.background.input.hovered": "_bfhk1d5g",
    "color.background.input.pressed": "_bfhkr01l",
    "color.background.inverse.subtle": "_bfhk1vck",
    "color.background.inverse.subtle.hovered": "_bfhkmpja",
    "color.background.inverse.subtle.pressed": "_bfhk1gii",
    "color.background.neutral": "_bfhkm7j4",
    "color.background.neutral.hovered": "_bfhk15ej",
    "color.background.neutral.pressed": "_bfhkip91",
    "color.background.neutral.subtle": "_bfhksm61",
    "color.background.neutral.subtle.hovered": "_bfhk166n",
    "color.background.neutral.subtle.pressed": "_bfhk1dty",
    "color.background.neutral.bold": "_bfhkcdhy",
    "color.background.neutral.bold.hovered": "_bfhk1bsc",
    "color.background.neutral.bold.pressed": "_bfhk1b6k",
    "color.background.selected": "_bfhkfg4m",
    "color.background.selected.hovered": "_bfhki1yw",
    "color.background.selected.pressed": "_bfhk19ru",
    "color.background.selected.bold": "_bfhk1fvw",
    "color.background.selected.bold.hovered": "_bfhk18hz",
    "color.background.selected.bold.pressed": "_bfhkgr1v",
    "color.background.brand.subtlest": "_bfhk3wxy",
    "color.background.brand.subtlest.hovered": "_bfhkezq1",
    "color.background.brand.subtlest.pressed": "_bfhk2ggb",
    "color.background.brand.bold": "_bfhkb29m",
    "color.background.brand.bold.hovered": "_bfhku1se",
    "color.background.brand.bold.pressed": "_bfhkqkzo",
    "color.background.brand.boldest": "_bfhk15mt",
    "color.background.brand.boldest.hovered": "_bfhk1uwk",
    "color.background.brand.boldest.pressed": "_bfhk17jr",
    "color.background.danger": "_bfhk1gly",
    "color.background.danger.hovered": "_bfhk1yvi",
    "color.background.danger.pressed": "_bfhk1io2",
    "color.background.danger.bold": "_bfhkybec",
    "color.background.danger.bold.hovered": "_bfhks9hg",
    "color.background.danger.bold.pressed": "_bfhk9pqq",
    "color.background.warning": "_bfhk1tzq",
    "color.background.warning.hovered": "_bfhk1rd4",
    "color.background.warning.pressed": "_bfhk11dh",
    "color.background.warning.bold": "_bfhk190i",
    "color.background.warning.bold.hovered": "_bfhk1i4c",
    "color.background.warning.bold.pressed": "_bfhkrj9s",
    "color.background.success": "_bfhkmv6i",
    "color.background.success.hovered": "_bfhk1jgi",
    "color.background.success.pressed": "_bfhky4f1",
    "color.background.success.bold": "_bfhk8emd",
    "color.background.success.bold.hovered": "_bfhk1q4l",
    "color.background.success.bold.pressed": "_bfhkcrcn",
    "color.background.discovery": "_bfhk1nvp",
    "color.background.discovery.hovered": "_bfhk1xp7",
    "color.background.discovery.pressed": "_bfhkdlkp",
    "color.background.discovery.bold": "_bfhk1lri",
    "color.background.discovery.bold.hovered": "_bfhk1w72",
    "color.background.discovery.bold.pressed": "_bfhkrb53",
    "color.background.information": "_bfhk33gi",
    "color.background.information.hovered": "_bfhk1vps",
    "color.background.information.pressed": "_bfhk1s0z",
    "color.background.information.bold": "_bfhk14wj",
    "color.background.information.bold.hovered": "_bfhk1amz",
    "color.background.information.bold.pressed": "_bfhk5bth",
    "color.blanket": "_bfhk10xm",
    "color.blanket.selected": "_bfhk7wq0",
    "color.blanket.danger": "_bfhkrprw",
    "color.skeleton": "_bfhkn82g",
    "color.skeleton.subtle": "_bfhkh3tw",
    "elevation.surface": "_bfhkvuon",
    "elevation.surface.hovered": "_bfhk108i",
    "elevation.surface.pressed": "_bfhk1ji5",
    "elevation.surface.overlay": "_bfhk1bhr",
    "elevation.surface.overlay.hovered": "_bfhk16qz",
    "elevation.surface.overlay.pressed": "_bfhkvq0a",
    "elevation.surface.raised": "_bfhkhp5a",
    "elevation.surface.raised.hovered": "_bfhk1a0f",
    "elevation.surface.raised.pressed": "_bfhkf7u5",
    "elevation.surface.sunken": "_bfhkqbzx",
    "utility.elevation.surface.current": "_bfhkchd4",
  },
  Zv = {
    "elevation.surface": "_1q1lvuon",
    "elevation.surface.hovered": "_1q1l108i",
    "elevation.surface.pressed": "_1q1l1ji5",
    "elevation.surface.overlay": "_1q1l1bhr",
    "elevation.surface.overlay.hovered": "_1q1l16qz",
    "elevation.surface.overlay.pressed": "_1q1lvq0a",
    "elevation.surface.raised": "_1q1lhp5a",
    "elevation.surface.raised.hovered": "_1q1l1a0f",
    "elevation.surface.raised.pressed": "_1q1lf7u5",
    "elevation.surface.sunken": "_1q1lqbzx",
  },
  X_ = {
    "space.0": "_1q51ze3t",
    "space.025": "_1q51v77o",
    "space.050": "_1q511b66",
    "space.075": "_1q5112x7",
    "space.100": "_1q51u2gc",
    "space.150": "_1q51utpp",
    "space.200": "_1q51pxbi",
    "space.250": "_1q51v47k",
    "space.300": "_1q511ejb",
    "space.400": "_1q51xy5q",
    "space.500": "_1q511jfw",
    "space.600": "_1q51oahv",
    "space.800": "_1q51xncg",
    "space.1000": "_1q511epz",
  },
  Z_ = {
    "space.0": "_85i5ze3t",
    "space.025": "_85i5v77o",
    "space.050": "_85i51b66",
    "space.075": "_85i512x7",
    "space.100": "_85i5u2gc",
    "space.150": "_85i5utpp",
    "space.200": "_85i5pxbi",
    "space.250": "_85i5v47k",
    "space.300": "_85i51ejb",
    "space.400": "_85i5xy5q",
    "space.500": "_85i51jfw",
    "space.600": "_85i5oahv",
    "space.800": "_85i5xncg",
    "space.1000": "_85i51epz",
  },
  Q_ = {
    "space.0": "_bozgze3t",
    "space.025": "_bozgv77o",
    "space.050": "_bozg1b66",
    "space.075": "_bozg12x7",
    "space.100": "_bozgu2gc",
    "space.150": "_bozgutpp",
    "space.200": "_bozgpxbi",
    "space.250": "_bozgv47k",
    "space.300": "_bozg1ejb",
    "space.400": "_bozgxy5q",
    "space.500": "_bozg1jfw",
    "space.600": "_bozgoahv",
    "space.800": "_bozgxncg",
    "space.1000": "_bozg1epz",
  },
  ew = {
    "space.0": "_y4tize3t",
    "space.025": "_y4tiv77o",
    "space.050": "_y4ti1b66",
    "space.075": "_y4ti12x7",
    "space.100": "_y4tiu2gc",
    "space.150": "_y4tiutpp",
    "space.200": "_y4tipxbi",
    "space.250": "_y4tiv47k",
    "space.300": "_y4ti1ejb",
    "space.400": "_y4tixy5q",
    "space.500": "_y4ti1jfw",
    "space.600": "_y4tioahv",
    "space.800": "_y4tixncg",
    "space.1000": "_y4ti1epz",
  },
  Xo = m.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "div" : r,
      a = e.children,
      o = e.backgroundColor,
      i = e.padding,
      c = e.paddingBlock,
      s = c === void 0 ? i : c,
      l = e.paddingBlockStart,
      u = l === void 0 ? s : l,
      d = e.paddingBlockEnd,
      f = d === void 0 ? s : d,
      v = e.paddingInline,
      h = v === void 0 ? i : v,
      p = e.paddingInlineStart,
      g = p === void 0 ? h : p,
      b = e.paddingInlineEnd,
      y = b === void 0 ? h : b,
      O = e.style,
      w = e.testId,
      _ = e.xcss,
      S = re(e, K_);
    S.className;
    var x = re(S, Y_),
      A = m.createElement(
        n,
        Y(
          {
            style: O,
            ref: t,
            className: T([
              "_19itglyw _vchhusvi _r06hglyw",
              o && J_[o],
              o && tw(o) && Zv[o],
              u && X_[u],
              f && Z_[f],
              g && Q_[g],
              y && ew[y],
              _,
            ]),
          },
          x,
          { "data-testid": w },
        ),
        a,
      );
    return o ? m.createElement(qs.Provider, { value: o }, A) : A;
  });
function tw(e) {
  return e in Zv;
}
const Ni = () =>
    new Error(`
 ██████╗ ██████╗ ███╗   ███╗██████╗ ██╗██╗     ███████╗██████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██║██║     ██╔════╝██╔══██╗
██║     ██║   ██║██╔████╔██║██████╔╝██║██║     █████╗  ██║  ██║
██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║██║     ██╔══╝  ██║  ██║
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║███████╗███████╗██████╔╝
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝╚═════╝

  @compiled/react

  Code was executed when it shouldn't have. To resolve make sure to:

  1. Set up Compiled.
  2. Configure importSources in your Compiled config to point to the module that exports the output of createStrictAPI().

  For more information visit https://compiledcssinjs.com/docs/installation and follow the instructions.
`),
  Qv = (...e) => T(e);
function rw() {
  return {
    css() {
      throw Ni();
    },
    cssMap() {
      throw Ni();
    },
    cx: Qv,
    XCSSProp() {
      throw Ni();
    },
  };
}
var nw = rw(),
  ep = nw.cx,
  Du = {
    "space.0": "_1p57ze3t",
    "space.025": "_1p57v77o",
    "space.050": "_1p571b66",
    "space.075": "_1p5712x7",
    "space.100": "_1p57u2gc",
    "space.150": "_1p57utpp",
    "space.200": "_1p57pxbi",
    "space.250": "_1p57v47k",
    "space.300": "_1p571ejb",
    "space.400": "_1p57xy5q",
    "space.500": "_1p571jfw",
    "space.600": "_1p57oahv",
    "space.800": "_1p57xncg",
    "space.1000": "_1p571epz",
  },
  Tu = {
    "space.0": "_gy1pze3t",
    "space.025": "_gy1pv77o",
    "space.050": "_gy1p1b66",
    "space.075": "_gy1p12x7",
    "space.100": "_gy1pu2gc",
    "space.150": "_gy1putpp",
    "space.200": "_gy1ppxbi",
    "space.250": "_gy1pv47k",
    "space.300": "_gy1p1ejb",
    "space.400": "_gy1pxy5q",
    "space.500": "_gy1p1jfw",
    "space.600": "_gy1poahv",
    "space.800": "_gy1pxncg",
    "space.1000": "_gy1p1epz",
  },
  aw = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  ow = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  iw = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  sw = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  cw = { root: "_1e0c1txw _vchhusvi" },
  Ro = m.memo(
    m.forwardRef(function (e, t) {
      var r = e.as,
        n = r === void 0 ? "div" : r,
        a = e.role,
        o = e.alignItems,
        i = e.justifyContent,
        c = e.gap,
        s = e.columnGap,
        l = e.rowGap,
        u = e.children,
        d = e.testId,
        f = e.direction,
        v = e.wrap,
        h = e.xcss;
      return m.createElement(
        n,
        {
          role: a,
          className: T([
            cw.root,
            c && Tu[c],
            s && Tu[s],
            c && Du[c],
            l && Du[l],
            o && sw[o],
            f && ow[f],
            i && aw[i],
            v && iw[v],
            h,
          ]),
          "data-testid": d,
          ref: t,
        },
        u,
      );
    }),
  );
Ro.displayName = "Flex";
var ms = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  lw = function (t) {
    var r = t.children;
    return m.createElement("span", { className: T([ms.separator]) }, r);
  },
  oo = m.memo(
    m.forwardRef(function (e, t) {
      var r = e.as,
        n = e.alignInline,
        a = e.alignBlock,
        o = a === void 0 ? "start" : a,
        i = e.shouldWrap,
        c = i === void 0 ? !1 : i,
        s = e.spread,
        l = e.grow,
        u = e.space,
        d = e.rowSpace,
        f = e.separator,
        v = e.xcss,
        h = e.testId,
        p = e.role,
        g = e.children,
        b = typeof f == "string" ? m.createElement(lw, null, f) : f,
        y = b
          ? m.Children.toArray(g)
              .filter(Boolean)
              .map(function (O, w) {
                return m.createElement(m.Fragment, { key: w }, f && w > 0 ? b : null, O);
              })
          : g;
      return m.createElement(
        Ro,
        {
          as: r,
          role: p,
          alignItems: o,
          justifyContent: s || n,
          direction: "row",
          gap: u,
          rowGap: d,
          wrap: c ? "wrap" : void 0,
          xcss: ep(l === "hug" && ms.hug, l === "fill" && ms.fill, v),
          testId: h,
          ref: t,
        },
        y,
      );
    }),
  );
oo.displayName = "Inline";
var uw = "Invariant failed";
function dw(e, t) {
  if (!e) throw new Error(uw);
}
var tp = m.createContext(!1),
  fw = function () {
    return m.useContext(tp);
  },
  vw = tp.Provider,
  pw = ["span", "p", "strong", "em"],
  hw = function (t, r) {
    var n = W_();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return Mu.hasOwnProperty(n) ? Mu[n] : "color.text";
    }
  },
  Hr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  gw = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  bw = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  mw = {
    "color.text": "_syaz1fxt",
    "color.text.accent.lime": "_syaz1tco",
    "color.text.accent.lime.bolder": "_syaz1ik3",
    "color.text.accent.red": "_syaz9lu1",
    "color.text.accent.red.bolder": "_syazhwvp",
    "color.text.accent.orange": "_syaz1q28",
    "color.text.accent.orange.bolder": "_syaz1vps",
    "color.text.accent.yellow": "_syazfb2s",
    "color.text.accent.yellow.bolder": "_syazekll",
    "color.text.accent.green": "_syazh55r",
    "color.text.accent.green.bolder": "_syaz1y78",
    "color.text.accent.teal": "_syaz17qg",
    "color.text.accent.teal.bolder": "_syaz12v7",
    "color.text.accent.blue": "_syazpnps",
    "color.text.accent.blue.bolder": "_syazsc1o",
    "color.text.accent.purple": "_syaz10m5",
    "color.text.accent.purple.bolder": "_syaz2ibx",
    "color.text.accent.magenta": "_syaz1s8m",
    "color.text.accent.magenta.bolder": "_syaz1qur",
    "color.text.accent.gray": "_syaz1dyx",
    "color.text.accent.gray.bolder": "_syaz1x9z",
    "color.text.disabled": "_syaz1lh4",
    "color.text.inverse": "_syaz15cr",
    "color.text.selected": "_syazaqb7",
    "color.text.brand": "_syaz1e6v",
    "color.text.danger": "_syaz1tmw",
    "color.text.warning": "_syazwx40",
    "color.text.warning.inverse": "_syazal3n",
    "color.text.success": "_syazy73q",
    "color.text.discovery": "_syazzjem",
    "color.text.information": "_syaze0os",
    "color.text.subtlest": "_syaz131l",
    "color.text.subtle": "_syaz1gjq",
    "color.link": "_syaz14q2",
    "color.link.pressed": "_syaz16c2",
    "color.link.visited": "_syazw7te",
    "color.link.visited.pressed": "_syazg3x0",
  },
  Mu = {
    "color.background.neutral.bold": "color.text.inverse",
    "color.background.neutral.bold.hovered": "color.text.inverse",
    "color.background.neutral.bold.pressed": "color.text.inverse",
    "color.background.selected.bold": "color.text.inverse",
    "color.background.selected.bold.hovered": "color.text.inverse",
    "color.background.selected.bold.pressed": "color.text.inverse",
    "color.background.brand.bold": "color.text.inverse",
    "color.background.brand.bold.hovered": "color.text.inverse",
    "color.background.brand.bold.pressed": "color.text.inverse",
    "color.background.brand.boldest": "color.text.inverse",
    "color.background.brand.boldest.hovered": "color.text.inverse",
    "color.background.brand.boldest.pressed": "color.text.inverse",
    "color.background.danger.bold": "color.text.inverse",
    "color.background.danger.bold.hovered": "color.text.inverse",
    "color.background.danger.bold.pressed": "color.text.inverse",
    "color.background.warning.bold": "color.text.warning.inverse",
    "color.background.warning.bold.hovered": "color.text.warning.inverse",
    "color.background.warning.bold.pressed": "color.text.warning.inverse",
    "color.background.success.bold": "color.text.inverse",
    "color.background.success.bold.hovered": "color.text.inverse",
    "color.background.success.bold.pressed": "color.text.inverse",
    "color.background.discovery.bold": "color.text.inverse",
    "color.background.discovery.bold.hovered": "color.text.inverse",
    "color.background.discovery.bold.pressed": "color.text.inverse",
    "color.background.information.bold": "color.text.inverse",
    "color.background.information.bold.hovered": "color.text.inverse",
    "color.background.information.bold.pressed": "color.text.inverse",
  },
  Us = m.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "span" : r,
      a = e.color,
      o = e.align,
      i = e.testId,
      c = e.id,
      s = e.size,
      l = e.weight,
      u = e.maxLines,
      d = e.xcss,
      f = e.children;
    dw(pw.includes(n));
    var v = fw(),
      h = hw(a, v);
    !s && !v && (s = "medium");
    var p = m.createElement(
      n,
      {
        id: c,
        className: T([
          Hr.root,
          s && gw[s],
          h && mw[h],
          u && Hr.truncation,
          u === 1 && Hr.breakAll,
          o && Hr["textAlign.".concat(o)],
          l && bw[l],
          n === "em" && Hr["as.em"],
          n === "strong" && Hr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: u },
        "data-testid": i,
        ref: t,
      },
      f,
    );
    return v ? p : m.createElement(vw, { value: !0 }, p);
  });
function yw() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var _w = ["as", "children", "isInset", "testId", "style", "xcss"],
  ww = ["className"];
function Lu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Nu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lu(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Lu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var kw = m.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      o = e.isInset,
      i = e.testId,
      c = e.style,
      s = e.xcss,
      l = re(e, _w);
    l.className;
    var u = re(l, ww);
    return m.createElement(
      n,
      Y({}, u, {
        ref: t,
        className: T([
          "_mizu194a _1ah31bk5 _ra3xnqa1 _128m1bk5 _1cvmnqa1 _4davt94y",
          o && "_1ah3115h _2mwq115h",
          s,
        ]),
        "data-testid": i,
        style: Nu(
          Nu({}, c),
          {},
          { "--_1203r2w": ye("calc(0px - ".concat("var(--ds-border-width-outline, 2px)", ")")) },
        ),
      }),
      a,
    );
  }),
  Ow = [
    "children",
    "isDisabled",
    "type",
    "onClick",
    "interactionName",
    "componentName",
    "analyticsContext",
    "style",
    "testId",
    "xcss",
    "tabIndex",
  ],
  Sw = ["className"],
  $u = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  rp = m.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      o = a === void 0 ? "button" : a,
      i = e.onClick,
      c = i === void 0 ? je : i,
      s = e.interactionName,
      l = e.componentName,
      u = e.analyticsContext,
      d = e.style,
      f = e.testId,
      v = e.xcss,
      h = e.tabIndex,
      p = re(e, Ow),
      g = m.useContext(zs),
      b = m.useCallback(
        function (w, _) {
          g && g.tracePress(s, w.timeStamp), c(w, _);
        },
        [c, g, s],
      ),
      y = rn({
        fn: b,
        action: "clicked",
        componentName: l || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "14.7.3",
        analyticsData: u,
        actionSubject: "button",
      });
    p.className;
    var O = re(p, Sw);
    return m.createElement(
      kw,
      Y({ as: "button", tabIndex: h ?? (yw() && !n ? 0 : void 0), style: d }, O, {
        type: o,
        onClick: y,
        disabled: n,
        xcss: Qv($u.root, n && $u.disabled, v),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  $i = {},
  Xn = {},
  Fu;
function np() {
  if (Fu) return Xn;
  (Fu = 1), Object.defineProperty(Xn, "__esModule", { value: !0 }), (Xn.bind = void 0);
  function e(t, r) {
    var n = r.type,
      a = r.listener,
      o = r.options;
    return (
      t.addEventListener(n, a, o),
      function () {
        t.removeEventListener(n, a, o);
      }
    );
  }
  return (Xn.bind = e), Xn;
}
var mr = {},
  zu;
function xw() {
  if (zu) return mr;
  zu = 1;
  var e =
    (mr && mr.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (o) {
            for (var i, c = 1, s = arguments.length; c < s; c++) {
              i = arguments[c];
              for (var l in i) Object.prototype.hasOwnProperty.call(i, l) && (o[l] = i[l]);
            }
            return o;
          }),
        e.apply(this, arguments)
      );
    };
  Object.defineProperty(mr, "__esModule", { value: !0 }), (mr.bindAll = void 0);
  var t = np();
  function r(o) {
    if (!(typeof o > "u")) return typeof o == "boolean" ? { capture: o } : o;
  }
  function n(o, i) {
    if (i == null) return o;
    var c = e(e({}, o), { options: e(e({}, r(i)), r(o.options)) });
    return c;
  }
  function a(o, i, c) {
    var s = i.map(function (l) {
      var u = n(l, c);
      return (0, t.bind)(o, u);
    });
    return function () {
      s.forEach(function (u) {
        return u();
      });
    };
  }
  return (mr.bindAll = a), mr;
}
var Bu;
function Ew() {
  return (
    Bu ||
      ((Bu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0);
        var t = np();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = xw();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })($i)),
    $i
  );
}
var Zo = Ew(),
  Cw = {
    "color.text": "--ds-text",
    "color.text.accent.lime": "--ds-text-accent-lime",
    "color.text.accent.lime.bolder": "--ds-text-accent-lime-bolder",
    "color.text.accent.red": "--ds-text-accent-red",
    "color.text.accent.red.bolder": "--ds-text-accent-red-bolder",
    "color.text.accent.orange": "--ds-text-accent-orange",
    "color.text.accent.orange.bolder": "--ds-text-accent-orange-bolder",
    "color.text.accent.yellow": "--ds-text-accent-yellow",
    "color.text.accent.yellow.bolder": "--ds-text-accent-yellow-bolder",
    "color.text.accent.green": "--ds-text-accent-green",
    "color.text.accent.green.bolder": "--ds-text-accent-green-bolder",
    "color.text.accent.teal": "--ds-text-accent-teal",
    "color.text.accent.teal.bolder": "--ds-text-accent-teal-bolder",
    "color.text.accent.blue": "--ds-text-accent-blue",
    "color.text.accent.blue.bolder": "--ds-text-accent-blue-bolder",
    "color.text.accent.purple": "--ds-text-accent-purple",
    "color.text.accent.purple.bolder": "--ds-text-accent-purple-bolder",
    "color.text.accent.magenta": "--ds-text-accent-magenta",
    "color.text.accent.magenta.bolder": "--ds-text-accent-magenta-bolder",
    "color.text.accent.gray": "--ds-text-accent-gray",
    "color.text.accent.gray.bolder": "--ds-text-accent-gray-bolder",
    "color.text.disabled": "--ds-text-disabled",
    "color.text.inverse": "--ds-text-inverse",
    "color.text.selected": "--ds-text-selected",
    "color.text.brand": "--ds-text-brand",
    "color.text.danger": "--ds-text-danger",
    "color.text.warning": "--ds-text-warning",
    "color.text.warning.inverse": "--ds-text-warning-inverse",
    "color.text.success": "--ds-text-success",
    "color.text.discovery": "--ds-text-discovery",
    "color.text.information": "--ds-text-information",
    "color.text.subtlest": "--ds-text-subtlest",
    "color.text.subtle": "--ds-text-subtle",
    "color.link": "--ds-link",
    "color.link.pressed": "--ds-link-pressed",
    "color.link.visited": "--ds-link-visited",
    "color.link.visited.pressed": "--ds-link-visited-pressed",
    "color.icon": "--ds-icon",
    "color.icon.accent.lime": "--ds-icon-accent-lime",
    "color.icon.accent.red": "--ds-icon-accent-red",
    "color.icon.accent.orange": "--ds-icon-accent-orange",
    "color.icon.accent.yellow": "--ds-icon-accent-yellow",
    "color.icon.accent.green": "--ds-icon-accent-green",
    "color.icon.accent.teal": "--ds-icon-accent-teal",
    "color.icon.accent.blue": "--ds-icon-accent-blue",
    "color.icon.accent.purple": "--ds-icon-accent-purple",
    "color.icon.accent.magenta": "--ds-icon-accent-magenta",
    "color.icon.accent.gray": "--ds-icon-accent-gray",
    "color.icon.disabled": "--ds-icon-disabled",
    "color.icon.inverse": "--ds-icon-inverse",
    "color.icon.selected": "--ds-icon-selected",
    "color.icon.brand": "--ds-icon-brand",
    "color.icon.danger": "--ds-icon-danger",
    "color.icon.warning": "--ds-icon-warning",
    "color.icon.warning.inverse": "--ds-icon-warning-inverse",
    "color.icon.success": "--ds-icon-success",
    "color.icon.discovery": "--ds-icon-discovery",
    "color.icon.information": "--ds-icon-information",
    "color.icon.subtlest": "--ds-icon-subtlest",
    "color.icon.subtle": "--ds-icon-subtle",
    "color.border": "--ds-border",
    "color.border.accent.lime": "--ds-border-accent-lime",
    "color.border.accent.red": "--ds-border-accent-red",
    "color.border.accent.orange": "--ds-border-accent-orange",
    "color.border.accent.yellow": "--ds-border-accent-yellow",
    "color.border.accent.green": "--ds-border-accent-green",
    "color.border.accent.teal": "--ds-border-accent-teal",
    "color.border.accent.blue": "--ds-border-accent-blue",
    "color.border.accent.purple": "--ds-border-accent-purple",
    "color.border.accent.magenta": "--ds-border-accent-magenta",
    "color.border.accent.gray": "--ds-border-accent-gray",
    "color.border.disabled": "--ds-border-disabled",
    "color.border.focused": "--ds-border-focused",
    "color.border.input": "--ds-border-input",
    "color.border.inverse": "--ds-border-inverse",
    "color.border.selected": "--ds-border-selected",
    "color.border.brand": "--ds-border-brand",
    "color.border.danger": "--ds-border-danger",
    "color.border.warning": "--ds-border-warning",
    "color.border.success": "--ds-border-success",
    "color.border.discovery": "--ds-border-discovery",
    "color.border.information": "--ds-border-information",
    "color.border.bold": "--ds-border-bold",
    "color.background.accent.lime.subtlest": "--ds-background-accent-lime-subtlest",
    "color.background.accent.lime.subtlest.hovered": "--ds-background-accent-lime-subtlest-hovered",
    "color.background.accent.lime.subtlest.pressed": "--ds-background-accent-lime-subtlest-pressed",
    "color.background.accent.lime.subtler": "--ds-background-accent-lime-subtler",
    "color.background.accent.lime.subtler.hovered": "--ds-background-accent-lime-subtler-hovered",
    "color.background.accent.lime.subtler.pressed": "--ds-background-accent-lime-subtler-pressed",
    "color.background.accent.lime.subtle": "--ds-background-accent-lime-subtle",
    "color.background.accent.lime.subtle.hovered": "--ds-background-accent-lime-subtle-hovered",
    "color.background.accent.lime.subtle.pressed": "--ds-background-accent-lime-subtle-pressed",
    "color.background.accent.lime.bolder": "--ds-background-accent-lime-bolder",
    "color.background.accent.lime.bolder.hovered": "--ds-background-accent-lime-bolder-hovered",
    "color.background.accent.lime.bolder.pressed": "--ds-background-accent-lime-bolder-pressed",
    "color.background.accent.red.subtlest": "--ds-background-accent-red-subtlest",
    "color.background.accent.red.subtlest.hovered": "--ds-background-accent-red-subtlest-hovered",
    "color.background.accent.red.subtlest.pressed": "--ds-background-accent-red-subtlest-pressed",
    "color.background.accent.red.subtler": "--ds-background-accent-red-subtler",
    "color.background.accent.red.subtler.hovered": "--ds-background-accent-red-subtler-hovered",
    "color.background.accent.red.subtler.pressed": "--ds-background-accent-red-subtler-pressed",
    "color.background.accent.red.subtle": "--ds-background-accent-red-subtle",
    "color.background.accent.red.subtle.hovered": "--ds-background-accent-red-subtle-hovered",
    "color.background.accent.red.subtle.pressed": "--ds-background-accent-red-subtle-pressed",
    "color.background.accent.red.bolder": "--ds-background-accent-red-bolder",
    "color.background.accent.red.bolder.hovered": "--ds-background-accent-red-bolder-hovered",
    "color.background.accent.red.bolder.pressed": "--ds-background-accent-red-bolder-pressed",
    "color.background.accent.orange.subtlest": "--ds-background-accent-orange-subtlest",
    "color.background.accent.orange.subtlest.hovered":
      "--ds-background-accent-orange-subtlest-hovered",
    "color.background.accent.orange.subtlest.pressed":
      "--ds-background-accent-orange-subtlest-pressed",
    "color.background.accent.orange.subtler": "--ds-background-accent-orange-subtler",
    "color.background.accent.orange.subtler.hovered":
      "--ds-background-accent-orange-subtler-hovered",
    "color.background.accent.orange.subtler.pressed":
      "--ds-background-accent-orange-subtler-pressed",
    "color.background.accent.orange.subtle": "--ds-background-accent-orange-subtle",
    "color.background.accent.orange.subtle.hovered": "--ds-background-accent-orange-subtle-hovered",
    "color.background.accent.orange.subtle.pressed": "--ds-background-accent-orange-subtle-pressed",
    "color.background.accent.orange.bolder": "--ds-background-accent-orange-bolder",
    "color.background.accent.orange.bolder.hovered": "--ds-background-accent-orange-bolder-hovered",
    "color.background.accent.orange.bolder.pressed": "--ds-background-accent-orange-bolder-pressed",
    "color.background.accent.yellow.subtlest": "--ds-background-accent-yellow-subtlest",
    "color.background.accent.yellow.subtlest.hovered":
      "--ds-background-accent-yellow-subtlest-hovered",
    "color.background.accent.yellow.subtlest.pressed":
      "--ds-background-accent-yellow-subtlest-pressed",
    "color.background.accent.yellow.subtler": "--ds-background-accent-yellow-subtler",
    "color.background.accent.yellow.subtler.hovered":
      "--ds-background-accent-yellow-subtler-hovered",
    "color.background.accent.yellow.subtler.pressed":
      "--ds-background-accent-yellow-subtler-pressed",
    "color.background.accent.yellow.subtle": "--ds-background-accent-yellow-subtle",
    "color.background.accent.yellow.subtle.hovered": "--ds-background-accent-yellow-subtle-hovered",
    "color.background.accent.yellow.subtle.pressed": "--ds-background-accent-yellow-subtle-pressed",
    "color.background.accent.yellow.bolder": "--ds-background-accent-yellow-bolder",
    "color.background.accent.yellow.bolder.hovered": "--ds-background-accent-yellow-bolder-hovered",
    "color.background.accent.yellow.bolder.pressed": "--ds-background-accent-yellow-bolder-pressed",
    "color.background.accent.green.subtlest": "--ds-background-accent-green-subtlest",
    "color.background.accent.green.subtlest.hovered":
      "--ds-background-accent-green-subtlest-hovered",
    "color.background.accent.green.subtlest.pressed":
      "--ds-background-accent-green-subtlest-pressed",
    "color.background.accent.green.subtler": "--ds-background-accent-green-subtler",
    "color.background.accent.green.subtler.hovered": "--ds-background-accent-green-subtler-hovered",
    "color.background.accent.green.subtler.pressed": "--ds-background-accent-green-subtler-pressed",
    "color.background.accent.green.subtle": "--ds-background-accent-green-subtle",
    "color.background.accent.green.subtle.hovered": "--ds-background-accent-green-subtle-hovered",
    "color.background.accent.green.subtle.pressed": "--ds-background-accent-green-subtle-pressed",
    "color.background.accent.green.bolder": "--ds-background-accent-green-bolder",
    "color.background.accent.green.bolder.hovered": "--ds-background-accent-green-bolder-hovered",
    "color.background.accent.green.bolder.pressed": "--ds-background-accent-green-bolder-pressed",
    "color.background.accent.teal.subtlest": "--ds-background-accent-teal-subtlest",
    "color.background.accent.teal.subtlest.hovered": "--ds-background-accent-teal-subtlest-hovered",
    "color.background.accent.teal.subtlest.pressed": "--ds-background-accent-teal-subtlest-pressed",
    "color.background.accent.teal.subtler": "--ds-background-accent-teal-subtler",
    "color.background.accent.teal.subtler.hovered": "--ds-background-accent-teal-subtler-hovered",
    "color.background.accent.teal.subtler.pressed": "--ds-background-accent-teal-subtler-pressed",
    "color.background.accent.teal.subtle": "--ds-background-accent-teal-subtle",
    "color.background.accent.teal.subtle.hovered": "--ds-background-accent-teal-subtle-hovered",
    "color.background.accent.teal.subtle.pressed": "--ds-background-accent-teal-subtle-pressed",
    "color.background.accent.teal.bolder": "--ds-background-accent-teal-bolder",
    "color.background.accent.teal.bolder.hovered": "--ds-background-accent-teal-bolder-hovered",
    "color.background.accent.teal.bolder.pressed": "--ds-background-accent-teal-bolder-pressed",
    "color.background.accent.blue.subtlest": "--ds-background-accent-blue-subtlest",
    "color.background.accent.blue.subtlest.hovered": "--ds-background-accent-blue-subtlest-hovered",
    "color.background.accent.blue.subtlest.pressed": "--ds-background-accent-blue-subtlest-pressed",
    "color.background.accent.blue.subtler": "--ds-background-accent-blue-subtler",
    "color.background.accent.blue.subtler.hovered": "--ds-background-accent-blue-subtler-hovered",
    "color.background.accent.blue.subtler.pressed": "--ds-background-accent-blue-subtler-pressed",
    "color.background.accent.blue.subtle": "--ds-background-accent-blue-subtle",
    "color.background.accent.blue.subtle.hovered": "--ds-background-accent-blue-subtle-hovered",
    "color.background.accent.blue.subtle.pressed": "--ds-background-accent-blue-subtle-pressed",
    "color.background.accent.blue.bolder": "--ds-background-accent-blue-bolder",
    "color.background.accent.blue.bolder.hovered": "--ds-background-accent-blue-bolder-hovered",
    "color.background.accent.blue.bolder.pressed": "--ds-background-accent-blue-bolder-pressed",
    "color.background.accent.purple.subtlest": "--ds-background-accent-purple-subtlest",
    "color.background.accent.purple.subtlest.hovered":
      "--ds-background-accent-purple-subtlest-hovered",
    "color.background.accent.purple.subtlest.pressed":
      "--ds-background-accent-purple-subtlest-pressed",
    "color.background.accent.purple.subtler": "--ds-background-accent-purple-subtler",
    "color.background.accent.purple.subtler.hovered":
      "--ds-background-accent-purple-subtler-hovered",
    "color.background.accent.purple.subtler.pressed":
      "--ds-background-accent-purple-subtler-pressed",
    "color.background.accent.purple.subtle": "--ds-background-accent-purple-subtle",
    "color.background.accent.purple.subtle.hovered": "--ds-background-accent-purple-subtle-hovered",
    "color.background.accent.purple.subtle.pressed": "--ds-background-accent-purple-subtle-pressed",
    "color.background.accent.purple.bolder": "--ds-background-accent-purple-bolder",
    "color.background.accent.purple.bolder.hovered": "--ds-background-accent-purple-bolder-hovered",
    "color.background.accent.purple.bolder.pressed": "--ds-background-accent-purple-bolder-pressed",
    "color.background.accent.magenta.subtlest": "--ds-background-accent-magenta-subtlest",
    "color.background.accent.magenta.subtlest.hovered":
      "--ds-background-accent-magenta-subtlest-hovered",
    "color.background.accent.magenta.subtlest.pressed":
      "--ds-background-accent-magenta-subtlest-pressed",
    "color.background.accent.magenta.subtler": "--ds-background-accent-magenta-subtler",
    "color.background.accent.magenta.subtler.hovered":
      "--ds-background-accent-magenta-subtler-hovered",
    "color.background.accent.magenta.subtler.pressed":
      "--ds-background-accent-magenta-subtler-pressed",
    "color.background.accent.magenta.subtle": "--ds-background-accent-magenta-subtle",
    "color.background.accent.magenta.subtle.hovered":
      "--ds-background-accent-magenta-subtle-hovered",
    "color.background.accent.magenta.subtle.pressed":
      "--ds-background-accent-magenta-subtle-pressed",
    "color.background.accent.magenta.bolder": "--ds-background-accent-magenta-bolder",
    "color.background.accent.magenta.bolder.hovered":
      "--ds-background-accent-magenta-bolder-hovered",
    "color.background.accent.magenta.bolder.pressed":
      "--ds-background-accent-magenta-bolder-pressed",
    "color.background.accent.gray.subtlest": "--ds-background-accent-gray-subtlest",
    "color.background.accent.gray.subtlest.hovered": "--ds-background-accent-gray-subtlest-hovered",
    "color.background.accent.gray.subtlest.pressed": "--ds-background-accent-gray-subtlest-pressed",
    "color.background.accent.gray.subtler": "--ds-background-accent-gray-subtler",
    "color.background.accent.gray.subtler.hovered": "--ds-background-accent-gray-subtler-hovered",
    "color.background.accent.gray.subtler.pressed": "--ds-background-accent-gray-subtler-pressed",
    "color.background.accent.gray.subtle": "--ds-background-accent-gray-subtle",
    "color.background.accent.gray.subtle.hovered": "--ds-background-accent-gray-subtle-hovered",
    "color.background.accent.gray.subtle.pressed": "--ds-background-accent-gray-subtle-pressed",
    "color.background.accent.gray.bolder": "--ds-background-accent-gray-bolder",
    "color.background.accent.gray.bolder.hovered": "--ds-background-accent-gray-bolder-hovered",
    "color.background.accent.gray.bolder.pressed": "--ds-background-accent-gray-bolder-pressed",
    "color.background.disabled": "--ds-background-disabled",
    "color.background.input": "--ds-background-input",
    "color.background.input.hovered": "--ds-background-input-hovered",
    "color.background.input.pressed": "--ds-background-input-pressed",
    "color.background.inverse.subtle": "--ds-background-inverse-subtle",
    "color.background.inverse.subtle.hovered": "--ds-background-inverse-subtle-hovered",
    "color.background.inverse.subtle.pressed": "--ds-background-inverse-subtle-pressed",
    "color.background.neutral": "--ds-background-neutral",
    "color.background.neutral.hovered": "--ds-background-neutral-hovered",
    "color.background.neutral.pressed": "--ds-background-neutral-pressed",
    "color.background.neutral.subtle": "--ds-background-neutral-subtle",
    "color.background.neutral.subtle.hovered": "--ds-background-neutral-subtle-hovered",
    "color.background.neutral.subtle.pressed": "--ds-background-neutral-subtle-pressed",
    "color.background.neutral.bold": "--ds-background-neutral-bold",
    "color.background.neutral.bold.hovered": "--ds-background-neutral-bold-hovered",
    "color.background.neutral.bold.pressed": "--ds-background-neutral-bold-pressed",
    "color.background.selected": "--ds-background-selected",
    "color.background.selected.hovered": "--ds-background-selected-hovered",
    "color.background.selected.pressed": "--ds-background-selected-pressed",
    "color.background.selected.bold": "--ds-background-selected-bold",
    "color.background.selected.bold.hovered": "--ds-background-selected-bold-hovered",
    "color.background.selected.bold.pressed": "--ds-background-selected-bold-pressed",
    "color.background.brand.subtlest": "--ds-background-brand-subtlest",
    "color.background.brand.subtlest.hovered": "--ds-background-brand-subtlest-hovered",
    "color.background.brand.subtlest.pressed": "--ds-background-brand-subtlest-pressed",
    "color.background.brand.bold": "--ds-background-brand-bold",
    "color.background.brand.bold.hovered": "--ds-background-brand-bold-hovered",
    "color.background.brand.bold.pressed": "--ds-background-brand-bold-pressed",
    "color.background.brand.boldest": "--ds-background-brand-boldest",
    "color.background.brand.boldest.hovered": "--ds-background-brand-boldest-hovered",
    "color.background.brand.boldest.pressed": "--ds-background-brand-boldest-pressed",
    "color.background.danger": "--ds-background-danger",
    "color.background.danger.hovered": "--ds-background-danger-hovered",
    "color.background.danger.pressed": "--ds-background-danger-pressed",
    "color.background.danger.bold": "--ds-background-danger-bold",
    "color.background.danger.bold.hovered": "--ds-background-danger-bold-hovered",
    "color.background.danger.bold.pressed": "--ds-background-danger-bold-pressed",
    "color.background.warning": "--ds-background-warning",
    "color.background.warning.hovered": "--ds-background-warning-hovered",
    "color.background.warning.pressed": "--ds-background-warning-pressed",
    "color.background.warning.bold": "--ds-background-warning-bold",
    "color.background.warning.bold.hovered": "--ds-background-warning-bold-hovered",
    "color.background.warning.bold.pressed": "--ds-background-warning-bold-pressed",
    "color.background.success": "--ds-background-success",
    "color.background.success.hovered": "--ds-background-success-hovered",
    "color.background.success.pressed": "--ds-background-success-pressed",
    "color.background.success.bold": "--ds-background-success-bold",
    "color.background.success.bold.hovered": "--ds-background-success-bold-hovered",
    "color.background.success.bold.pressed": "--ds-background-success-bold-pressed",
    "color.background.discovery": "--ds-background-discovery",
    "color.background.discovery.hovered": "--ds-background-discovery-hovered",
    "color.background.discovery.pressed": "--ds-background-discovery-pressed",
    "color.background.discovery.bold": "--ds-background-discovery-bold",
    "color.background.discovery.bold.hovered": "--ds-background-discovery-bold-hovered",
    "color.background.discovery.bold.pressed": "--ds-background-discovery-bold-pressed",
    "color.background.information": "--ds-background-information",
    "color.background.information.hovered": "--ds-background-information-hovered",
    "color.background.information.pressed": "--ds-background-information-pressed",
    "color.background.information.bold": "--ds-background-information-bold",
    "color.background.information.bold.hovered": "--ds-background-information-bold-hovered",
    "color.background.information.bold.pressed": "--ds-background-information-bold-pressed",
    "color.blanket": "--ds-blanket",
    "color.blanket.selected": "--ds-blanket-selected",
    "color.blanket.danger": "--ds-blanket-danger",
    "color.interaction.hovered": "--ds-interaction-hovered",
    "color.interaction.pressed": "--ds-interaction-pressed",
    "color.skeleton": "--ds-skeleton",
    "color.skeleton.subtle": "--ds-skeleton-subtle",
    "color.chart.categorical.1": "--ds-chart-categorical-1",
    "color.chart.categorical.1.hovered": "--ds-chart-categorical-1-hovered",
    "color.chart.categorical.2": "--ds-chart-categorical-2",
    "color.chart.categorical.2.hovered": "--ds-chart-categorical-2-hovered",
    "color.chart.categorical.3": "--ds-chart-categorical-3",
    "color.chart.categorical.3.hovered": "--ds-chart-categorical-3-hovered",
    "color.chart.categorical.4": "--ds-chart-categorical-4",
    "color.chart.categorical.4.hovered": "--ds-chart-categorical-4-hovered",
    "color.chart.categorical.5": "--ds-chart-categorical-5",
    "color.chart.categorical.5.hovered": "--ds-chart-categorical-5-hovered",
    "color.chart.categorical.6": "--ds-chart-categorical-6",
    "color.chart.categorical.6.hovered": "--ds-chart-categorical-6-hovered",
    "color.chart.categorical.7": "--ds-chart-categorical-7",
    "color.chart.categorical.7.hovered": "--ds-chart-categorical-7-hovered",
    "color.chart.categorical.8": "--ds-chart-categorical-8",
    "color.chart.categorical.8.hovered": "--ds-chart-categorical-8-hovered",
    "color.chart.lime.bold": "--ds-chart-lime-bold",
    "color.chart.lime.bold.hovered": "--ds-chart-lime-bold-hovered",
    "color.chart.lime.bolder": "--ds-chart-lime-bolder",
    "color.chart.lime.bolder.hovered": "--ds-chart-lime-bolder-hovered",
    "color.chart.lime.boldest": "--ds-chart-lime-boldest",
    "color.chart.lime.boldest.hovered": "--ds-chart-lime-boldest-hovered",
    "color.chart.neutral": "--ds-chart-neutral",
    "color.chart.neutral.hovered": "--ds-chart-neutral-hovered",
    "color.chart.red.bold": "--ds-chart-red-bold",
    "color.chart.red.bold.hovered": "--ds-chart-red-bold-hovered",
    "color.chart.red.bolder": "--ds-chart-red-bolder",
    "color.chart.red.bolder.hovered": "--ds-chart-red-bolder-hovered",
    "color.chart.red.boldest": "--ds-chart-red-boldest",
    "color.chart.red.boldest.hovered": "--ds-chart-red-boldest-hovered",
    "color.chart.orange.bold": "--ds-chart-orange-bold",
    "color.chart.orange.bold.hovered": "--ds-chart-orange-bold-hovered",
    "color.chart.orange.bolder": "--ds-chart-orange-bolder",
    "color.chart.orange.bolder.hovered": "--ds-chart-orange-bolder-hovered",
    "color.chart.orange.boldest": "--ds-chart-orange-boldest",
    "color.chart.orange.boldest.hovered": "--ds-chart-orange-boldest-hovered",
    "color.chart.yellow.bold": "--ds-chart-yellow-bold",
    "color.chart.yellow.bold.hovered": "--ds-chart-yellow-bold-hovered",
    "color.chart.yellow.bolder": "--ds-chart-yellow-bolder",
    "color.chart.yellow.bolder.hovered": "--ds-chart-yellow-bolder-hovered",
    "color.chart.yellow.boldest": "--ds-chart-yellow-boldest",
    "color.chart.yellow.boldest.hovered": "--ds-chart-yellow-boldest-hovered",
    "color.chart.green.bold": "--ds-chart-green-bold",
    "color.chart.green.bold.hovered": "--ds-chart-green-bold-hovered",
    "color.chart.green.bolder": "--ds-chart-green-bolder",
    "color.chart.green.bolder.hovered": "--ds-chart-green-bolder-hovered",
    "color.chart.green.boldest": "--ds-chart-green-boldest",
    "color.chart.green.boldest.hovered": "--ds-chart-green-boldest-hovered",
    "color.chart.teal.bold": "--ds-chart-teal-bold",
    "color.chart.teal.bold.hovered": "--ds-chart-teal-bold-hovered",
    "color.chart.teal.bolder": "--ds-chart-teal-bolder",
    "color.chart.teal.bolder.hovered": "--ds-chart-teal-bolder-hovered",
    "color.chart.teal.boldest": "--ds-chart-teal-boldest",
    "color.chart.teal.boldest.hovered": "--ds-chart-teal-boldest-hovered",
    "color.chart.blue.bold": "--ds-chart-blue-bold",
    "color.chart.blue.bold.hovered": "--ds-chart-blue-bold-hovered",
    "color.chart.blue.bolder": "--ds-chart-blue-bolder",
    "color.chart.blue.bolder.hovered": "--ds-chart-blue-bolder-hovered",
    "color.chart.blue.boldest": "--ds-chart-blue-boldest",
    "color.chart.blue.boldest.hovered": "--ds-chart-blue-boldest-hovered",
    "color.chart.purple.bold": "--ds-chart-purple-bold",
    "color.chart.purple.bold.hovered": "--ds-chart-purple-bold-hovered",
    "color.chart.purple.bolder": "--ds-chart-purple-bolder",
    "color.chart.purple.bolder.hovered": "--ds-chart-purple-bolder-hovered",
    "color.chart.purple.boldest": "--ds-chart-purple-boldest",
    "color.chart.purple.boldest.hovered": "--ds-chart-purple-boldest-hovered",
    "color.chart.magenta.bold": "--ds-chart-magenta-bold",
    "color.chart.magenta.bold.hovered": "--ds-chart-magenta-bold-hovered",
    "color.chart.magenta.bolder": "--ds-chart-magenta-bolder",
    "color.chart.magenta.bolder.hovered": "--ds-chart-magenta-bolder-hovered",
    "color.chart.magenta.boldest": "--ds-chart-magenta-boldest",
    "color.chart.magenta.boldest.hovered": "--ds-chart-magenta-boldest-hovered",
    "color.chart.gray.bold": "--ds-chart-gray-bold",
    "color.chart.gray.bold.hovered": "--ds-chart-gray-bold-hovered",
    "color.chart.gray.bolder": "--ds-chart-gray-bolder",
    "color.chart.gray.bolder.hovered": "--ds-chart-gray-bolder-hovered",
    "color.chart.gray.boldest": "--ds-chart-gray-boldest",
    "color.chart.gray.boldest.hovered": "--ds-chart-gray-boldest-hovered",
    "color.chart.brand": "--ds-chart-brand",
    "color.chart.brand.hovered": "--ds-chart-brand-hovered",
    "color.chart.danger": "--ds-chart-danger",
    "color.chart.danger.hovered": "--ds-chart-danger-hovered",
    "color.chart.danger.bold": "--ds-chart-danger-bold",
    "color.chart.danger.bold.hovered": "--ds-chart-danger-bold-hovered",
    "color.chart.warning": "--ds-chart-warning",
    "color.chart.warning.hovered": "--ds-chart-warning-hovered",
    "color.chart.warning.bold": "--ds-chart-warning-bold",
    "color.chart.warning.bold.hovered": "--ds-chart-warning-bold-hovered",
    "color.chart.success": "--ds-chart-success",
    "color.chart.success.hovered": "--ds-chart-success-hovered",
    "color.chart.success.bold": "--ds-chart-success-bold",
    "color.chart.success.bold.hovered": "--ds-chart-success-bold-hovered",
    "color.chart.discovery": "--ds-chart-discovery",
    "color.chart.discovery.hovered": "--ds-chart-discovery-hovered",
    "color.chart.discovery.bold": "--ds-chart-discovery-bold",
    "color.chart.discovery.bold.hovered": "--ds-chart-discovery-bold-hovered",
    "color.chart.information": "--ds-chart-information",
    "color.chart.information.hovered": "--ds-chart-information-hovered",
    "color.chart.information.bold": "--ds-chart-information-bold",
    "color.chart.information.bold.hovered": "--ds-chart-information-bold-hovered",
    "elevation.surface": "--ds-surface",
    "elevation.surface.hovered": "--ds-surface-hovered",
    "elevation.surface.pressed": "--ds-surface-pressed",
    "elevation.surface.overlay": "--ds-surface-overlay",
    "elevation.surface.overlay.hovered": "--ds-surface-overlay-hovered",
    "elevation.surface.overlay.pressed": "--ds-surface-overlay-pressed",
    "elevation.surface.raised": "--ds-surface-raised",
    "elevation.surface.raised.hovered": "--ds-surface-raised-hovered",
    "elevation.surface.raised.pressed": "--ds-surface-raised-pressed",
    "elevation.surface.sunken": "--ds-surface-sunken",
    "elevation.shadow.overflow": "--ds-shadow-overflow",
    "elevation.shadow.overflow.perimeter": "--ds-shadow-overflow-perimeter",
    "elevation.shadow.overflow.spread": "--ds-shadow-overflow-spread",
    "elevation.shadow.overlay": "--ds-shadow-overlay",
    "elevation.shadow.raised": "--ds-shadow-raised",
    "opacity.disabled": "--ds-opacity-disabled",
    "opacity.loading": "--ds-opacity-loading",
    "utility.UNSAFE.textTransformUppercase": "--ds-UNSAFE-textTransformUppercase",
    "utility.UNSAFE.transparent": "--ds-UNSAFE-transparent",
    "utility.elevation.surface.current": "--ds-elevation-surface-current",
    "border.radius.050": "--ds-border-radius-050",
    "border.radius": "--ds-border-radius",
    "border.radius.100": "--ds-border-radius-100",
    "border.radius.200": "--ds-border-radius-200",
    "border.radius.300": "--ds-border-radius-300",
    "border.radius.400": "--ds-border-radius-400",
    "border.radius.circle": "--ds-border-radius-circle",
    "border.width": "--ds-border-width",
    "border.width.0": "--ds-border-width-0",
    "border.width.indicator": "--ds-border-width-indicator",
    "border.width.outline": "--ds-border-width-outline",
    "space.0": "--ds-space-0",
    "space.025": "--ds-space-025",
    "space.050": "--ds-space-050",
    "space.075": "--ds-space-075",
    "space.100": "--ds-space-100",
    "space.150": "--ds-space-150",
    "space.200": "--ds-space-200",
    "space.250": "--ds-space-250",
    "space.300": "--ds-space-300",
    "space.400": "--ds-space-400",
    "space.500": "--ds-space-500",
    "space.600": "--ds-space-600",
    "space.800": "--ds-space-800",
    "space.1000": "--ds-space-1000",
    "space.negative.025": "--ds-space-negative-025",
    "space.negative.050": "--ds-space-negative-050",
    "space.negative.075": "--ds-space-negative-075",
    "space.negative.100": "--ds-space-negative-100",
    "space.negative.150": "--ds-space-negative-150",
    "space.negative.200": "--ds-space-negative-200",
    "space.negative.250": "--ds-space-negative-250",
    "space.negative.300": "--ds-space-negative-300",
    "space.negative.400": "--ds-space-negative-400",
    "font.heading.xxlarge": "--ds-font-heading-xxlarge",
    "font.heading.xlarge": "--ds-font-heading-xlarge",
    "font.heading.large": "--ds-font-heading-large",
    "font.heading.medium": "--ds-font-heading-medium",
    "font.heading.small": "--ds-font-heading-small",
    "font.heading.xsmall": "--ds-font-heading-xsmall",
    "font.heading.xxsmall": "--ds-font-heading-xxsmall",
    "font.body.large": "--ds-font-body-large",
    "font.body": "--ds-font-body",
    "font.body.small": "--ds-font-body-small",
    "font.body.UNSAFE_small": "--ds-font-body-UNSAFE_small",
    "font.code": "--ds-font-code",
    "font.weight.regular": "--ds-font-weight-regular",
    "font.weight.medium": "--ds-font-weight-medium",
    "font.weight.semibold": "--ds-font-weight-semibold",
    "font.weight.bold": "--ds-font-weight-bold",
    "font.family.heading": "--ds-font-family-heading",
    "font.family.body": "--ds-font-family-body",
    "font.family.code": "--ds-font-family-code",
    "font.family.brand.heading": "--ds-font-family-brand-heading",
    "font.family.brand.body": "--ds-font-family-brand-body",
  },
  Pw = "ds",
  Rw = "--".concat(Pw, "-token-not-found");
function Wt(e, t) {
  var r = Cw[e];
  r || (r = Rw);
  var n = t ? "var(".concat(r, ", ").concat(t, ")") : "var(".concat(r, ")");
  return n;
}
var Aw = function () {
    var e = 1,
      t = new WeakMap(),
      r = function (n, a) {
        return typeof n == "number" || typeof n == "string"
          ? a
            ? "idx-".concat(a)
            : "val-".concat(n)
          : t.has(n)
            ? "uid" + t.get(n)
            : (t.set(n, e++), r(n));
      };
    return r;
  },
  ap = function (e) {
    return e === void 0 && (e = ""), { value: 1, prefix: e, uid: Aw() };
  },
  jw = ap(),
  Iw = m.createContext(ap()),
  Dw = function (e) {
    return e.value++;
  },
  Tw = function (e) {
    return e ? e.prefix : "";
  },
  Mw = function (e) {
    var t = e || jw,
      r = Tw(t),
      n = Dw(t),
      a = r + n,
      o = function (i) {
        return a + t.uid(i);
      };
    return { uid: a, gen: o };
  },
  op = function () {
    var e = m.useContext(Iw),
      t = m.useState(function () {
        return Mw(e);
      })[0];
    return t;
  },
  Lw = function () {
    var e = op().uid;
    return e;
  },
  Nw = function () {
    var e = op().gen;
    return e;
  },
  Fi,
  Ao = (Fi = k.useId) !== null && Fi !== void 0 ? Fi : void 0;
function $w() {
  return Ao && de("platform-dst-react-18-use-id") ? Ao() : "uid".concat(Lw());
}
function Fw() {
  if (Ao && de("platform-dst-react-18-use-id")) {
    var e = Ao();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return Nw();
}
var Vs = function (t) {
    var r = t.children,
      n = t.testId,
      a = t.role,
      o = t.id;
    return m.createElement(
      "span",
      {
        id: o,
        "data-testid": n,
        role: a,
        className: T([
          "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
        ]),
      },
      r,
    );
  },
  zw = function () {
    return 8;
  },
  ip = {
    card: function () {
      return 100;
    },
    navigation: function () {
      return 200;
    },
    dialog: function () {
      return 300;
    },
    layer: function () {
      return 400;
    },
    blanket: function () {
      return 500;
    },
    modal: function () {
      return 510;
    },
    flag: function () {
      return 600;
    },
    spotlight: function () {
      return 700;
    },
    tooltip: function () {
      return 9999;
    },
  },
  Bw = ["children"];
function qw(e) {
  var t = function (c, s) {
      return c(s);
    },
    r = m.createContext(e);
  function n(i) {
    var c = m.useContext(r),
      s = c || t,
      l = s(i);
    return l;
  }
  function a(i) {
    var c = i.children,
      s = re(i, Bw),
      l = n(s);
    return k.createElement(k.Fragment, null, c(l));
  }
  function o(i) {
    var c = m.useContext(r),
      s = i.value || t,
      l = m.useCallback(
        function (u) {
          return s(c, u);
        },
        [c, s],
      );
    return k.createElement(r.Provider, { value: l }, i.children);
  }
  return { Consumer: a, Provider: o, useTheme: n };
}
var Uw = qw(function () {
    return { mode: "light" };
  }),
  Vw = Uw.useTheme;
function Gw(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Hw(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Ww = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (a) {
        var o;
        n.tags.length === 0
          ? n.insertionPoint
            ? (o = n.insertionPoint.nextSibling)
            : n.prepend
              ? (o = n.container.firstChild)
              : (o = n.before)
          : (o = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(a, o),
          n.tags.push(a);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Hw(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = Gw(a);
          try {
            o.insertRule(n, o.cssRules.length);
          } catch {}
        } else a.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          var a;
          return (a = n.parentNode) == null ? void 0 : a.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Ae = "-ms-",
  jo = "-moz-",
  ne = "-webkit-",
  sp = "comm",
  Gs = "rule",
  Hs = "decl",
  Kw = "@import",
  cp = "@keyframes",
  Yw = "@layer",
  Jw = Math.abs,
  Qo = String.fromCharCode,
  Xw = Object.assign;
function Zw(e, t) {
  return Ee(e, 0) ^ 45
    ? (((((((t << 2) ^ Ee(e, 0)) << 2) ^ Ee(e, 1)) << 2) ^ Ee(e, 2)) << 2) ^ Ee(e, 3)
    : 0;
}
function lp(e) {
  return e.trim();
}
function Qw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ae(e, t, r) {
  return e.replace(t, r);
}
function ys(e, t) {
  return e.indexOf(t);
}
function Ee(e, t) {
  return e.charCodeAt(t) | 0;
}
function xa(e, t, r) {
  return e.slice(t, r);
}
function Rt(e) {
  return e.length;
}
function Ws(e) {
  return e.length;
}
function Ka(e, t) {
  return t.push(e), e;
}
function e0(e, t) {
  return e.map(t).join("");
}
var ei = 1,
  an = 1,
  up = 0,
  ze = 0,
  ke = 0,
  vn = "";
function ti(e, t, r, n, a, o, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: o,
    line: ei,
    column: an,
    length: i,
    return: "",
  };
}
function Zn(e, t) {
  return Xw(ti("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function t0() {
  return ke;
}
function r0() {
  return (ke = ze > 0 ? Ee(vn, --ze) : 0), an--, ke === 10 && ((an = 1), ei--), ke;
}
function Ye() {
  return (ke = ze < up ? Ee(vn, ze++) : 0), an++, ke === 10 && ((an = 1), ei++), ke;
}
function Lt() {
  return Ee(vn, ze);
}
function io() {
  return ze;
}
function La(e, t) {
  return xa(vn, e, t);
}
function Ea(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function dp(e) {
  return (ei = an = 1), (up = Rt((vn = e))), (ze = 0), [];
}
function fp(e) {
  return (vn = ""), e;
}
function so(e) {
  return lp(La(ze - 1, _s(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function n0(e) {
  for (; (ke = Lt()) && ke < 33; ) Ye();
  return Ea(e) > 2 || Ea(ke) > 3 ? "" : " ";
}
function a0(e, t) {
  for (; --t && Ye() && !(ke < 48 || ke > 102 || (ke > 57 && ke < 65) || (ke > 70 && ke < 97)); );
  return La(e, io() + (t < 6 && Lt() == 32 && Ye() == 32));
}
function _s(e) {
  for (; Ye(); )
    switch (ke) {
      case e:
        return ze;
      case 34:
      case 39:
        e !== 34 && e !== 39 && _s(ke);
        break;
      case 40:
        e === 41 && _s(e);
        break;
      case 92:
        Ye();
        break;
    }
  return ze;
}
function o0(e, t) {
  for (; Ye() && e + ke !== 57; ) if (e + ke === 84 && Lt() === 47) break;
  return "/*" + La(t, ze - 1) + "*" + Qo(e === 47 ? e : Ye());
}
function i0(e) {
  for (; !Ea(Lt()); ) Ye();
  return La(e, ze);
}
function s0(e) {
  return fp(co("", null, null, null, [""], (e = dp(e)), 0, [0], e));
}
function co(e, t, r, n, a, o, i, c, s) {
  for (
    var l = 0,
      u = 0,
      d = i,
      f = 0,
      v = 0,
      h = 0,
      p = 1,
      g = 1,
      b = 1,
      y = 0,
      O = "",
      w = a,
      _ = o,
      S = n,
      x = O;
    g;

  )
    switch (((h = y), (y = Ye()))) {
      case 40:
        if (h != 108 && Ee(x, d - 1) == 58) {
          ys((x += ae(so(y), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += so(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += n0(h);
        break;
      case 92:
        x += a0(io() - 1, 7);
        continue;
      case 47:
        switch (Lt()) {
          case 42:
          case 47:
            Ka(c0(o0(Ye(), io()), t, r), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * p:
        c[l++] = Rt(x) * b;
      case 125 * p:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            b == -1 && (x = ae(x, /\f/g, "")),
              v > 0 &&
                Rt(x) - d &&
                Ka(v > 32 ? Uu(x + ";", n, r, d - 1) : Uu(ae(x, " ", "") + ";", n, r, d - 2), s);
            break;
          case 59:
            x += ";";
          default:
            if ((Ka((S = qu(x, t, r, l, u, a, c, O, (w = []), (_ = []), d)), o), y === 123))
              if (u === 0) co(x, t, S, S, w, o, d, c, _);
              else
                switch (f === 99 && Ee(x, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    co(
                      e,
                      S,
                      S,
                      n && Ka(qu(e, S, S, 0, 0, a, c, O, a, (w = []), d), _),
                      a,
                      _,
                      d,
                      c,
                      n ? w : _,
                    );
                    break;
                  default:
                    co(x, S, S, S, [""], _, 0, c, _);
                }
        }
        (l = u = v = 0), (p = b = 1), (O = x = ""), (d = i);
        break;
      case 58:
        (d = 1 + Rt(x)), (v = h);
      default:
        if (p < 1) {
          if (y == 123) --p;
          else if (y == 125 && p++ == 0 && r0() == 125) continue;
        }
        switch (((x += Qo(y)), y * p)) {
          case 38:
            b = u > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            (c[l++] = (Rt(x) - 1) * b), (b = 1);
            break;
          case 64:
            Lt() === 45 && (x += so(Ye())), (f = Lt()), (u = d = Rt((O = x += i0(io())))), y++;
            break;
          case 45:
            h === 45 && Rt(x) == 2 && (p = 0);
        }
    }
  return o;
}
function qu(e, t, r, n, a, o, i, c, s, l, u) {
  for (var d = a - 1, f = a === 0 ? o : [""], v = Ws(f), h = 0, p = 0, g = 0; h < n; ++h)
    for (var b = 0, y = xa(e, d + 1, (d = Jw((p = i[h])))), O = e; b < v; ++b)
      (O = lp(p > 0 ? f[b] + " " + y : ae(y, /&\f/g, f[b]))) && (s[g++] = O);
  return ti(e, t, r, a === 0 ? Gs : c, s, l, u);
}
function c0(e, t, r) {
  return ti(e, t, r, sp, Qo(t0()), xa(e, 2, -2), 0);
}
function Uu(e, t, r, n) {
  return ti(e, t, r, Hs, xa(e, 0, n), xa(e, n + 1, -1), n);
}
function Qr(e, t) {
  for (var r = "", n = Ws(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function l0(e, t, r, n) {
  switch (e.type) {
    case Yw:
      if (e.children.length) break;
    case Kw:
    case Hs:
      return (e.return = e.return || e.value);
    case sp:
      return "";
    case cp:
      return (e.return = e.value + "{" + Qr(e.children, n) + "}");
    case Gs:
      e.value = e.props.join(",");
  }
  return Rt((r = Qr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function u0(e) {
  var t = Ws(e);
  return function (r, n, a, o) {
    for (var i = "", c = 0; c < t; c++) i += e[c](r, n, a, o) || "";
    return i;
  };
}
function d0(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function f0(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var v0 = function (t, r, n) {
    for (var a = 0, o = 0; (a = o), (o = Lt()), a === 38 && o === 12 && (r[n] = 1), !Ea(o); ) Ye();
    return La(t, ze);
  },
  p0 = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (Ea(a)) {
        case 0:
          a === 38 && Lt() === 12 && (r[n] = 1), (t[n] += v0(ze - 1, r, n));
          break;
        case 2:
          t[n] += so(a);
          break;
        case 4:
          if (a === 44) {
            (t[++n] = Lt() === 58 ? "&\f" : ""), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += Qo(a);
      }
    while ((a = Ye()));
    return t;
  },
  h0 = function (t, r) {
    return fp(p0(dp(t), r));
  },
  Vu = new WeakMap(),
  g0 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Vu.get(n)) && !a) {
        Vu.set(t, !0);
        for (var o = [], i = h0(r, o), c = n.props, s = 0, l = 0; s < i.length; s++)
          for (var u = 0; u < c.length; u++, l++)
            t.props[l] = o[s] ? i[s].replace(/&\f/g, c[u]) : c[u] + " " + i[s];
      }
    }
  },
  b0 = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function vp(e, t) {
  switch (Zw(e, t)) {
    case 5103:
      return ne + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ne + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ne + e + jo + e + Ae + e + e;
    case 6828:
    case 4268:
      return ne + e + Ae + e + e;
    case 6165:
      return ne + e + Ae + "flex-" + e + e;
    case 5187:
      return ne + e + ae(e, /(\w+).+(:[^]+)/, ne + "box-$1$2" + Ae + "flex-$1$2") + e;
    case 5443:
      return ne + e + Ae + "flex-item-" + ae(e, /flex-|-self/, "") + e;
    case 4675:
      return ne + e + Ae + "flex-line-pack" + ae(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ne + e + Ae + ae(e, "shrink", "negative") + e;
    case 5292:
      return ne + e + Ae + ae(e, "basis", "preferred-size") + e;
    case 6060:
      return ne + "box-" + ae(e, "-grow", "") + ne + e + Ae + ae(e, "grow", "positive") + e;
    case 4554:
      return ne + ae(e, /([^-])(transform)/g, "$1" + ne + "$2") + e;
    case 6187:
      return ae(ae(ae(e, /(zoom-|grab)/, ne + "$1"), /(image-set)/, ne + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ae(e, /(image-set\([^]*)/, ne + "$1$`$1");
    case 4968:
      return (
        ae(
          ae(e, /(.+:)(flex-)?(.*)/, ne + "box-pack:$3" + Ae + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        ne +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ae(e, /(.+)-inline(.+)/, ne + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Rt(e) - 1 - t > 6)
        switch (Ee(e, t + 1)) {
          case 109:
            if (Ee(e, t + 4) !== 45) break;
          case 102:
            return (
              ae(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + ne + "$2-$3$1" + jo + (Ee(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~ys(e, "stretch") ? vp(ae(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ee(e, t + 1) !== 115) break;
    case 6444:
      switch (Ee(e, Rt(e) - 3 - (~ys(e, "!important") && 10))) {
        case 107:
          return ae(e, ":", ":" + ne) + e;
        case 101:
          return (
            ae(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                ne +
                (Ee(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ne +
                "$2$3$1" +
                Ae +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ee(e, t + 11)) {
        case 114:
          return ne + e + Ae + ae(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ne + e + Ae + ae(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ne + e + Ae + ae(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ne + e + Ae + e + e;
  }
  return e;
}
var m0 = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Hs:
          t.return = vp(t.value, t.length);
          break;
        case cp:
          return Qr([Zn(t, { value: ae(t.value, "@", "@" + ne) })], a);
        case Gs:
          if (t.length)
            return e0(t.props, function (o) {
              switch (Qw(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Qr([Zn(t, { props: [ae(o, /:(read-\w+)/, ":" + jo + "$1")] })], a);
                case "::placeholder":
                  return Qr(
                    [
                      Zn(t, { props: [ae(o, /:(plac\w+)/, ":" + ne + "input-$1")] }),
                      Zn(t, { props: [ae(o, /:(plac\w+)/, ":" + jo + "$1")] }),
                      Zn(t, { props: [ae(o, /:(plac\w+)/, Ae + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  y0 = [m0],
  _0 = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (p) {
        var g = p.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || y0,
      o = {},
      i,
      c = [];
    (i = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (p) {
          for (var g = p.getAttribute("data-emotion").split(" "), b = 1; b < g.length; b++)
            o[g[b]] = !0;
          c.push(p);
        },
      );
    var s,
      l = [g0, b0];
    {
      var u,
        d = [
          l0,
          d0(function (p) {
            u.insert(p);
          }),
        ],
        f = u0(l.concat(a, d)),
        v = function (g) {
          return Qr(s0(g), f);
        };
      s = function (g, b, y, O) {
        (u = y), v(g ? g + "{" + b.styles + "}" : b.styles), O && (h.inserted[b.name] = !0);
      };
    }
    var h = {
      key: r,
      sheet: new Ww({
        key: r,
        container: i,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: s,
    };
    return h.sheet.hydrate(c), h;
  },
  zi = { exports: {} },
  se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gu;
function w0() {
  if (Gu) return se;
  Gu = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    n = e ? Symbol.for("react.fragment") : 60107,
    a = e ? Symbol.for("react.strict_mode") : 60108,
    o = e ? Symbol.for("react.profiler") : 60114,
    i = e ? Symbol.for("react.provider") : 60109,
    c = e ? Symbol.for("react.context") : 60110,
    s = e ? Symbol.for("react.async_mode") : 60111,
    l = e ? Symbol.for("react.concurrent_mode") : 60111,
    u = e ? Symbol.for("react.forward_ref") : 60112,
    d = e ? Symbol.for("react.suspense") : 60113,
    f = e ? Symbol.for("react.suspense_list") : 60120,
    v = e ? Symbol.for("react.memo") : 60115,
    h = e ? Symbol.for("react.lazy") : 60116,
    p = e ? Symbol.for("react.block") : 60121,
    g = e ? Symbol.for("react.fundamental") : 60117,
    b = e ? Symbol.for("react.responder") : 60118,
    y = e ? Symbol.for("react.scope") : 60119;
  function O(_) {
    if (typeof _ == "object" && _ !== null) {
      var S = _.$$typeof;
      switch (S) {
        case t:
          switch (((_ = _.type), _)) {
            case s:
            case l:
            case n:
            case o:
            case a:
            case d:
              return _;
            default:
              switch (((_ = _ && _.$$typeof), _)) {
                case c:
                case u:
                case h:
                case v:
                case i:
                  return _;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function w(_) {
    return O(_) === l;
  }
  return (
    (se.AsyncMode = s),
    (se.ConcurrentMode = l),
    (se.ContextConsumer = c),
    (se.ContextProvider = i),
    (se.Element = t),
    (se.ForwardRef = u),
    (se.Fragment = n),
    (se.Lazy = h),
    (se.Memo = v),
    (se.Portal = r),
    (se.Profiler = o),
    (se.StrictMode = a),
    (se.Suspense = d),
    (se.isAsyncMode = function (_) {
      return w(_) || O(_) === s;
    }),
    (se.isConcurrentMode = w),
    (se.isContextConsumer = function (_) {
      return O(_) === c;
    }),
    (se.isContextProvider = function (_) {
      return O(_) === i;
    }),
    (se.isElement = function (_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }),
    (se.isForwardRef = function (_) {
      return O(_) === u;
    }),
    (se.isFragment = function (_) {
      return O(_) === n;
    }),
    (se.isLazy = function (_) {
      return O(_) === h;
    }),
    (se.isMemo = function (_) {
      return O(_) === v;
    }),
    (se.isPortal = function (_) {
      return O(_) === r;
    }),
    (se.isProfiler = function (_) {
      return O(_) === o;
    }),
    (se.isStrictMode = function (_) {
      return O(_) === a;
    }),
    (se.isSuspense = function (_) {
      return O(_) === d;
    }),
    (se.isValidElementType = function (_) {
      return (
        typeof _ == "string" ||
        typeof _ == "function" ||
        _ === n ||
        _ === l ||
        _ === o ||
        _ === a ||
        _ === d ||
        _ === f ||
        (typeof _ == "object" &&
          _ !== null &&
          (_.$$typeof === h ||
            _.$$typeof === v ||
            _.$$typeof === i ||
            _.$$typeof === c ||
            _.$$typeof === u ||
            _.$$typeof === g ||
            _.$$typeof === b ||
            _.$$typeof === y ||
            _.$$typeof === p))
      );
    }),
    (se.typeOf = O),
    se
  );
}
var Hu;
function k0() {
  return Hu || ((Hu = 1), (zi.exports = w0())), zi.exports;
}
var Bi, Wu;
function O0() {
  if (Wu) return Bi;
  Wu = 1;
  var e = k0(),
    t = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    r = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    n = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    a = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    o = {};
  (o[e.ForwardRef] = n), (o[e.Memo] = a);
  function i(h) {
    return e.isMemo(h) ? a : o[h.$$typeof] || t;
  }
  var c = Object.defineProperty,
    s = Object.getOwnPropertyNames,
    l = Object.getOwnPropertySymbols,
    u = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    f = Object.prototype;
  function v(h, p, g) {
    if (typeof p != "string") {
      if (f) {
        var b = d(p);
        b && b !== f && v(h, b, g);
      }
      var y = s(p);
      l && (y = y.concat(l(p)));
      for (var O = i(h), w = i(p), _ = 0; _ < y.length; ++_) {
        var S = y[_];
        if (!r[S] && !(g && g[S]) && !(w && w[S]) && !(O && O[S])) {
          var x = u(p, S);
          try {
            c(h, S, x);
          } catch {}
        }
      }
    }
    return h;
  }
  return (Bi = v), Bi;
}
O0();
var S0 = !0;
function pp(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var Ks = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || S0 === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  hp = function (t, r, n) {
    Ks(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do t.insert(r === o ? "." + a : "", o, t.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function x0(e) {
  for (var t = 0, r, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var E0 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  C0 = /[A-Z]|^ms/g,
  P0 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  gp = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Ku = function (t) {
    return t != null && typeof t != "boolean";
  },
  qi = f0(function (e) {
    return gp(e) ? e : e.replace(C0, "-$&").toLowerCase();
  }),
  Yu = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(P0, function (n, a, o) {
            return (At = { name: a, styles: o, next: At }), a;
          });
    }
    return E0[t] !== 1 && !gp(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Ca(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1) return (At = { name: a.name, styles: a.styles, next: At }), a.name;
      var o = r;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; ) (At = { name: i.name, styles: i.styles, next: At }), (i = i.next);
        var c = o.styles + ";";
        return c;
      }
      return R0(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = At,
          l = r(e);
        return (At = s), Ca(e, t, l);
      }
      break;
    }
  }
  var u = r;
  if (t == null) return u;
  var d = t[u];
  return d !== void 0 ? d : u;
}
function R0(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += Ca(e, t, r[a]) + ";";
  else
    for (var o in r) {
      var i = r[o];
      if (typeof i != "object") {
        var c = i;
        t != null && t[c] !== void 0
          ? (n += o + "{" + t[c] + "}")
          : Ku(c) && (n += qi(o) + ":" + Yu(o, c) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var s = 0; s < i.length; s++) Ku(i[s]) && (n += qi(o) + ":" + Yu(o, i[s]) + ";");
      else {
        var l = Ca(e, t, i);
        switch (o) {
          case "animation":
          case "animationName": {
            n += qi(o) + ":" + l + ";";
            break;
          }
          default:
            n += o + "{" + l + "}";
        }
      }
    }
  return n;
}
var Ju = /label:\s*([^\s;{]+)\s*(;|$)/g,
  At;
function Ys(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  At = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) (n = !1), (a += Ca(r, t, o));
  else {
    var i = o;
    a += i[0];
  }
  for (var c = 1; c < e.length; c++)
    if (((a += Ca(r, t, e[c])), n)) {
      var s = o;
      a += s[c];
    }
  Ju.lastIndex = 0;
  for (var l = "", u; (u = Ju.exec(a)) !== null; ) l += "-" + u[1];
  var d = x0(a) + l;
  return { name: d, styles: a, next: At };
}
var A0 = function (t) {
    return t();
  },
  j0 = fc.useInsertionEffect ? fc.useInsertionEffect : !1,
  bp = j0 || A0,
  mp = m.createContext(typeof HTMLElement < "u" ? _0({ key: "css" }) : null);
mp.Provider;
var yp = function (t) {
    return m.forwardRef(function (r, n) {
      var a = m.useContext(mp);
      return t(r, a, n);
    });
  },
  _p = m.createContext({}),
  Js = {}.hasOwnProperty,
  ws = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  I0 = function (t, r) {
    var n = {};
    for (var a in r) Js.call(r, a) && (n[a] = r[a]);
    return (n[ws] = t), n;
  },
  D0 = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      Ks(r, n, a),
      bp(function () {
        return hp(r, n, a);
      }),
      null
    );
  },
  T0 = yp(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[ws],
      o = [n],
      i = "";
    typeof e.className == "string"
      ? (i = pp(t.registered, o, e.className))
      : e.className != null && (i = e.className + " ");
    var c = Ys(o, void 0, m.useContext(_p));
    i += t.key + "-" + c.name;
    var s = {};
    for (var l in e) Js.call(e, l) && l !== "css" && l !== ws && (s[l] = e[l]);
    return (
      (s.className = i),
      r && (s.ref = r),
      m.createElement(
        m.Fragment,
        null,
        m.createElement(D0, { cache: t, serialized: c, isStringTag: typeof a == "string" }),
        m.createElement(a, s),
      )
    );
  }),
  M0 = T0,
  ht = function (t, r) {
    var n = arguments;
    if (r == null || !Js.call(r, "css")) return m.createElement.apply(void 0, n);
    var a = n.length,
      o = new Array(a);
    (o[0] = M0), (o[1] = I0(t, r));
    for (var i = 2; i < a; i++) o[i] = n[i];
    return m.createElement.apply(null, o);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(ht || (ht = {}));
function kt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Ys(t);
}
var L0 = function e(t) {
  for (var r = t.length, n = 0, a = ""; n < r; n++) {
    var o = t[n];
    if (o != null) {
      var i = void 0;
      switch (typeof o) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(o)) i = e(o);
          else {
            i = "";
            for (var c in o) o[c] && c && (i && (i += " "), (i += c));
          }
          break;
        }
        default:
          i = o;
      }
      i && (a && (a += " "), (a += i));
    }
  }
  return a;
};
function N0(e, t, r) {
  var n = [],
    a = pp(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var $0 = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      bp(function () {
        for (var a = 0; a < n.length; a++) hp(r, n[a], !1);
      }),
      null
    );
  },
  F0 = yp(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++) l[u] = arguments[u];
        var d = Ys(l, t.registered);
        return r.push(d), Ks(t, d, !1), t.key + "-" + d.name;
      },
      a = function () {
        for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++) l[u] = arguments[u];
        return N0(t.registered, n, L0(l));
      },
      o = { css: n, cx: a, theme: m.useContext(_p) },
      i = e.children(o);
    return m.createElement(
      m.Fragment,
      null,
      m.createElement($0, { cache: t, serializedArr: r }),
      i,
    );
  });
function wp(e, t) {
  var r = m.useRef(!0);
  m.useEffect(
    function () {
      e && r.current && t && e.current && e.current.focus(), (r.current = !1);
    },
    [t, e],
  );
}
var Xu = 2,
  ks = kt({
    outline: "".concat(Xu, "px solid ", "var(--ds-border-focused, #2684FF)"),
    outlineOffset: Xu,
  }),
  Os = kt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -2,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-outline, 2px)",
  }),
  z0 = kt({
    "&:focus": ks,
    "&:focus-visible": ks,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "1px solid" },
    },
  }),
  B0 = kt({
    "&:focus": Os,
    "&:focus-visible": Os,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "1px solid", outlineOffset: "-1px" },
    },
  }),
  ri = m.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? Os : ks,
      o = r ? B0 : z0,
      i = typeof n > "u" ? o : n === "on" && a;
    return ht(F0, null, function (c) {
      var s = c.css,
        l = c.cx;
      return m.Children.only(
        i ? m.cloneElement(t, { className: l([s(i), t.props.className]) }) : t,
      );
    });
  });
ri.displayName = "FocusRing";
function Kt(e) {
  e.preventDefault(), e.stopPropagation();
}
var q0 = 9;
function Zu(e) {
  e.keyCode !== q0 && Kt(e);
}
var U0 = {
    onMouseDownCapture: Kt,
    onMouseUpCapture: Kt,
    onKeyDownCapture: Zu,
    onKeyUpCapture: Zu,
    onTouchStartCapture: Kt,
    onTouchEndCapture: Kt,
    onPointerDownCapture: Kt,
    onPointerUpCapture: Kt,
    onClickCapture: Kt,
    onClick: Kt,
  },
  V0 = {};
function G0(e) {
  var t = e.isInteractive;
  return t ? V0 : U0;
}
var Qu = "rgba(179, 212, 255, 0.6)",
  ed = {
    background: {
      default: {
        default: {
          light: "var(--ds-background-neutral, ".concat(qn, ")"),
          dark: "var(--ds-background-neutral, ".concat(Un, ")"),
        },
        hover: {
          light: "var(--ds-background-neutral-hovered, ".concat(gs, ")"),
          dark: "var(--ds-background-neutral-hovered, ".concat(du, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-pressed, ".concat(Qu, ")"),
          dark: "var(--ds-background-neutral-pressed, ".concat(sa, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(qn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Un, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Gr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Gr, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-background-brand-bold, ".concat(Pt, ")"),
          dark: "var(--ds-background-brand-bold, ".concat(Po, ")"),
        },
        hover: {
          light: "var(--ds-background-brand-bold-hovered, ".concat(lu, ")"),
          dark: "var(--ds-background-brand-bold-hovered, ".concat(sa, ")"),
        },
        active: {
          light: "var(--ds-background-brand-bold-pressed, ".concat(ps, ")"),
          dark: "var(--ds-background-brand-bold-pressed, ".concat(cu, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(qn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Un, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Gr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Gr, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-background-warning-bold, ".concat(su, ")"),
          dark: "var(--ds-background-warning-bold, ".concat(su, ")"),
        },
        hover: {
          light: "var(--ds-background-warning-bold-hovered, ".concat(iu, ")"),
          dark: "var(--ds-background-warning-bold-hovered, ".concat(iu, ")"),
        },
        active: {
          light: "var(--ds-background-warning-bold-pressed, ".concat(Vr, ")"),
          dark: "var(--ds-background-warning-bold-pressed, ".concat(Vr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(qn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Un, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Vr, ")"),
          dark: "var(--ds-background-selected, ".concat(Vr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Vr, ")"),
          dark: "var(--ds-background-selected, ".concat(Vr, ")"),
        },
      },
      danger: {
        default: {
          light: "var(--ds-background-danger-bold, ".concat(ou, ")"),
          dark: "var(--ds-background-danger-bold, ".concat(ou, ")"),
        },
        hover: {
          light: "var(--ds-background-danger-bold-hovered, ".concat(au, ")"),
          dark: "var(--ds-background-danger-bold-hovered, ".concat(au, ")"),
        },
        active: {
          light: "var(--ds-background-danger-bold-pressed, ".concat(Ur, ")"),
          dark: "var(--ds-background-danger-bold-pressed, ".concat(Ur, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(qn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Un, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ur, ")"),
          dark: "var(--ds-background-selected, ".concat(Ur, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ur, ")"),
          dark: "var(--ds-background-selected, ".concat(Ur, ")"),
        },
      },
      link: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Me, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Me, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        hover: {
          light: "var(--ds-background-neutral-subtle-hovered, ".concat(gs, ")"),
          dark: "var(--ds-background-neutral-subtle-hovered, ".concat(du, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-subtle-pressed, ".concat(Qu, ")"),
          dark: "var(--ds-background-neutral-subtle-pressed, ".concat(sa, ")"),
        },
        disabled: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Gr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Gr, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Me, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Me, ")"),
        },
      },
    },
    color: {
      default: {
        default: {
          light: "var(--ds-text, ".concat(nn, ")"),
          dark: "var(--ds-text, ".concat(pt, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Pt, ")"),
          dark: "var(--ds-text, ".concat(Pt, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Vn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Me, ")"),
          dark: "var(--ds-text-selected, ".concat(pt, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Me, ")"),
          dark: "var(--ds-text-selected, ".concat(pt, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Jt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Vn, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Vn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Me, ")"),
          dark: "var(--ds-text-selected, ".concat(pt, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Me, ")"),
          dark: "var(--ds-text-selected, ".concat(pt, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-text-warning-inverse, ".concat(_r, ")"),
          dark: "var(--ds-text-warning-inverse, ".concat(_r, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Vn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(_r, ")"),
          dark: "var(--ds-text-selected, ".concat(_r, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(_r, ")"),
          dark: "var(--ds-text-selected, ".concat(_r, ")"),
        },
      },
      danger: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Jt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Jt, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Vn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Jt, ")"),
          dark: "var(--ds-text-selected, ".concat(Jt, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Jt, ")"),
          dark: "var(--ds-text-selected, ".concat(Jt, ")"),
        },
      },
      link: {
        default: {
          light: "var(--ds-link, ".concat(Pt, ")"),
          dark: "var(--ds-link, ".concat(Po, ")"),
        },
        hover: {
          light: "var(--ds-link, ".concat(lu, ")"),
          dark: "var(--ds-link, ".concat(sa, ")"),
        },
        active: {
          light: "var(--ds-link-pressed, ".concat(ps, ")"),
          dark: "var(--ds-link-pressed, ".concat(cu, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Li, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Me, ")"),
          dark: "var(--ds-text-selected, ".concat(at, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Me, ")"),
          dark: "var(--ds-text-selected, ".concat(at, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-text, ".concat(nn, ")"),
          dark: "var(--ds-text, ".concat(pt, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Pt, ")"),
          dark: "var(--ds-text, ".concat(Pt, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Li, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Me, ")"),
          dark: "var(--ds-text-selected, ".concat(pt, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Me, ")"),
          dark: "var(--ds-text-selected, ".concat(pt, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-text-subtle, ".concat(Hy, ")"),
          dark: "var(--ds-text-subtle, ".concat(pt, ")"),
        },
        hover: {
          light: "var(--ds-text-subtle, ".concat(Gy, ")"),
          dark: "var(--ds-text-subtle, ".concat(zv, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Wy, ")"),
          dark: "var(--ds-text, ".concat(Ky, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Li, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Me, ")"),
          dark: "var(--ds-text-selected, ".concat(pt, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Me, ")"),
          dark: "var(--ds-text-selected, ".concat(pt, ")"),
        },
      },
    },
  };
function td(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? td(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : td(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var cr = zw(),
  Ui = ["default", "primary", "danger", "warning"],
  Ss = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  H0 = { default: Ss.default, compact: Ss.compact, none: "inherit" },
  W0 = {
    default: "0 ".concat(cr + cr / 4, "px"),
    compact: "0 ".concat(cr + cr / 4, "px"),
    none: "0",
  },
  K0 = { compact: "0 ".concat(cr / 4, "px"), default: "0 ".concat(cr / 4, "px"), none: "0" },
  Y0 = { default: "middle", compact: "middle", none: "baseline" },
  kp = { content: "0 ".concat(cr / 4, "px"), icon: "0 ".concat(cr / 4, "px") },
  Op = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  J0 = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #172B4D)",
    "&:not([disabled])::after": le(
      le({}, Op),
      {},
      { content: '""', borderColor: "var(--ds-border, #091E4224)" },
    ),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #091E4224)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #091E424F)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
  },
  X0 = {
    background: "var(--ds-background-brand-bold, #0C66E4)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #0055CC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #09326C)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #0C66E4)",
    },
  },
  Z0 = {
    background: "transparent",
    color: "var(--ds-link, #0C66E4)",
    "&:hover": { color: "var(--ds-link, #0C66E4)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #0055CC)", textDecoration: "underline" },
  },
  Q0 = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #091E420F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #091E4224)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  ek = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": {
      background: "transparent",
      color: "var(--ds-text-subtle, #44546F)",
      textDecoration: "underline",
    },
    "&:active": {
      background: "transparent",
      color: "var(--ds-text, #172B4D)",
      textDecoration: "underline",
    },
  },
  tk = {
    background: "var(--ds-background-warning-bold, #F5CD47)",
    color: "var(--ds-text-warning-inverse, #172B4D)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #E2B203)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #CF9F02)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #F5CD47)",
    },
  },
  rk = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #5D1F1A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  nk = {
    background: "var(--ds-background-selected, #E9F2FF)",
    color: "var(--ds-text-selected, #0C66E4)",
    "&:not([disabled])::after": le(
      le({}, Op),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #0C66E4)" },
    ),
  },
  rd = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function nd(e) {
  var t = e.group,
    r = e.key,
    n = e.mode,
    a = t[r] || t.default;
  return a[n];
}
function Wr(e) {
  var t = e.appearance,
    r = e.key,
    n = e.mode;
  return {
    background: nd({ group: ed.background[t], key: r, mode: n }),
    color: "".concat(nd({ group: ed.color[t], key: r, mode: n }), " !important"),
  };
}
function ak(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.mode,
    a = e.isSelected,
    o = e.shouldFitContainer,
    i = e.isOnlySingleIcon,
    c = Wr({ appearance: t, key: a ? "selected" : "default", mode: n });
  return le(
    le(
      le(
        le(
          {
            alignItems: "baseline",
            borderWidth: 0,
            borderRadius: "var(--ds-border-radius, 3px)",
            boxSizing: "border-box",
            display: "inline-flex",
            fontSize: "inherit",
            fontStyle: "normal",
            fontFamily: "inherit",
            fontWeight: "var(--ds-font-weight-medium, 500)",
            maxWidth: "100%",
            position: "relative",
            textAlign: "center",
            textDecoration: "none",
            transition:
              "background 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38)",
            whiteSpace: "nowrap",
          },
          !de("platform-component-visual-refresh") && c,
        ),
        {},
        {
          cursor: "pointer",
          height: Ss[r],
          lineHeight: H0[r],
          padding: i ? K0[r] : W0[r],
          verticalAlign: Y0[r],
          width: o ? "100%" : "auto",
          justifyContent: "center",
        },
        !de("platform-component-visual-refresh") &&
          le(
            le(
              {
                "&:visited": le({}, c),
                "&:hover": le(
                  le({}, Wr({ appearance: t, key: a ? "selected" : "hover", mode: n })),
                  {},
                  {
                    textDecoration:
                      !a && (t === "link" || t === "subtle-link") ? "underline" : "inherit",
                    transitionDuration: "0s, 0.15s",
                  },
                ),
                "&:active": le(
                  le({}, Wr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                '&[data-firefox-is-active="true"]': le(
                  le({}, Wr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                "&[disabled]": le(
                  le({}, Wr({ appearance: t, key: "disabled", mode: n })),
                  {},
                  { cursor: "not-allowed", textDecoration: "none" },
                ),
              },
              rd,
            ),
            {},
            {
              '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active':
                le({}, Wr({ appearance: t, key: a ? "selected" : "default", mode: n })),
            },
          ),
      ),
      de("platform-component-visual-refresh") &&
        (a
          ? nk
          : le(
              le(
                le(
                  le(
                    le(
                      le(
                        le(le({}, t === "default" && J0), t === "primary" && X0),
                        t === "link" && Z0,
                      ),
                      t === "subtle" && Q0,
                    ),
                    t === "subtle-link" && ek,
                  ),
                  t === "warning" && tk,
                ),
                t === "danger" && rk,
              ),
              {},
              {
                "&[disabled]": {
                  color: "var(--ds-text-disabled, #091E424F)",
                  backgroundColor: Ui.includes(t)
                    ? "var(--ds-background-disabled, #091E4208)"
                    : "transparent",
                  cursor: "not-allowed",
                  textDecoration: "none",
                  "&:hovered": {
                    backgroundColor: Ui.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                  "&:active": {
                    backgroundColor: Ui.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                },
              },
              rd,
            )),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function ad(e) {
  var t = e.spacing;
  return kt({
    display: "flex",
    margin: t === "none" ? 0 : kp.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function ok(e) {
  var t = e.spacing;
  return kt({
    margin: t === "none" ? 0 : kp.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function ik(e) {
  var t = e.hasOverlay;
  return kt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var sk = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Xs = function (t) {
    return t && m.isValidElement(t) && t.type === Vs;
  },
  ck = [
    "analyticsContext",
    "appearance",
    "autoFocus",
    "buttonCss",
    "children",
    "className",
    "href",
    "component",
    "iconAfter",
    "iconBefore",
    "interactionName",
    "isDisabled",
    "isSelected",
    "onBlur",
    "onClick",
    "onFocus",
    "onMouseDown",
    "overlay",
    "shouldFitContainer",
    "spacing",
    "tabIndex",
    "type",
    "testId",
  ],
  lk = { "> *": { pointerEvents: "none" } },
  uk = kt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  dk = kt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  od = function (t, r) {
    return !t || Xs(t) ? null : r;
  },
  fk = function (t, r) {
    return Xs(t) ? t : t ? ht("span", { css: r }, t) : null;
  },
  vk = k.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      a = t.appearance,
      o = a === void 0 ? "default" : a,
      i = t.autoFocus,
      c = i === void 0 ? !1 : i,
      s = t.buttonCss,
      l = t.children,
      u = t.className,
      d = t.href,
      f = t.component,
      v = f === void 0 ? (d ? "a" : "button") : f,
      h = t.iconAfter,
      p = t.iconBefore,
      g = t.interactionName,
      b = t.isDisabled,
      y = b === void 0 ? !1 : b,
      O = t.isSelected,
      w = O === void 0 ? !1 : O,
      _ = t.onBlur,
      S = t.onClick,
      x = S === void 0 ? je : S,
      A = t.onFocus,
      $ = t.onMouseDown,
      M = $ === void 0 ? je : $,
      B = t.overlay;
    t.shouldFitContainer;
    var H = t.spacing,
      R = H === void 0 ? "default" : H,
      E = t.tabIndex,
      I = E === void 0 ? 0 : E,
      D = t.type,
      N = D === void 0 ? (d ? void 0 : "button") : D,
      z = t.testId,
      j = re(t, ck),
      K = m.useRef(),
      q = m.useCallback(
        function (he) {
          if (((K.current = he), r != null)) {
            if (typeof r == "function") {
              r(he);
              return;
            }
            r.current = he;
          }
        },
        [K, r],
      );
    wp(K, c);
    var U = m.useContext(zs),
      oe = m.useCallback(
        function (he, Ze) {
          U && U.tracePress(g, he.timeStamp), x(he, Ze);
        },
        [x, U, g],
      ),
      J = rn({
        fn: oe,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "23.0.8",
        analyticsData: n,
      }),
      ve = m.useCallback(
        function (he) {
          he.preventDefault(), M(he);
        },
        [M],
      );
    m.useEffect(
      function () {
        var he = K.current;
        y && he && he === document.activeElement && he.blur();
      },
      [y],
    );
    var pe = !!B,
      _e = kt(ik({ hasOverlay: pe })),
      Oe = !y && !pe,
      De = {};
    return (
      (w || y || o === "warning") &&
        (De = {
          "[data-theme] & circle": {
            stroke: "".concat(
              w || y
                ? "var(--ds-icon-subtle, ".concat(nn, ")")
                : "var(--ds-icon-warning-inverse, ".concat(nn, ")"),
              " !important",
            ),
          },
        }),
      ht(
        ri,
        null,
        ht(
          v,
          Y(
            {},
            j,
            {
              ref: q,
              className: u,
              css: [s, Oe ? null : lk],
              "data-has-overlay": pe ? !0 : void 0,
              "data-testid": z,
              disabled: y,
              href: Oe ? d : void 0,
              onBlur: _,
              onClick: J,
              onFocus: A,
              onMouseDown: ve,
              tabIndex: y ? -1 : I,
              type: N,
            },
            G0({ isInteractive: Oe }),
          ),
          p ? ht("span", { css: [_e, ad({ spacing: R }), od(l, uk)] }, p) : null,
          fk(l, [_e, ok({ spacing: R })]),
          h ? ht("span", { css: [_e, ad({ spacing: R }), od(l, dk)] }, h) : null,
          B ? ht("span", { css: [sk, De] }, B) : null,
        ),
      )
    );
  });
function pk(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Xs(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var hk = [
    "appearance",
    "children",
    "iconBefore",
    "iconAfter",
    "isSelected",
    "onMouseDown",
    "onMouseUp",
    "shouldFitContainer",
    "spacing",
  ],
  id = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  Zs = k.memo(
    k.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        o = t.children,
        i = t.iconBefore,
        c = t.iconAfter,
        s = t.isSelected,
        l = s === void 0 ? !1 : s,
        u = t.onMouseDown,
        d = u === void 0 ? je : u,
        f = t.onMouseUp,
        v = f === void 0 ? je : f,
        h = t.shouldFitContainer,
        p = h === void 0 ? !1 : h,
        g = t.spacing,
        b = g === void 0 ? "default" : g,
        y = re(t, hk),
        O = Vw(),
        w = O.mode,
        _ = pk({ children: o, iconBefore: i, iconAfter: c }),
        S = m.useState(!1),
        x = ee(S, 2),
        A = x[0],
        $ = x[1],
        M = m.useCallback(
          function (R) {
            d(R), id && $(!0);
          },
          [d, $],
        ),
        B = m.useCallback(
          function (R) {
            v(R), id && $(!1);
          },
          [v, $],
        ),
        H = m.useMemo(
          function () {
            return ak({
              appearance: a,
              spacing: b,
              mode: w,
              isSelected: l,
              shouldFitContainer: p,
              isOnlySingleIcon: _,
            });
          },
          [a, b, w, l, p, _],
        );
      return k.createElement(
        vk,
        Y({}, y, {
          ref: r,
          appearance: a,
          buttonCss: H,
          children: o,
          "data-firefox-is-active": A ? !0 : void 0,
          iconAfter: c,
          iconBefore: i,
          isSelected: l,
          onMouseDown: M,
          onMouseUp: B,
          spacing: b,
        }),
      );
    }),
  );
Zs.displayName = "Button";
function sd(e) {
  return k.createElement(Zs, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function gk(e) {
  return k.createElement(Zs, Y({}, e, { appearance: "subtle" }));
}
var bk = { container: "_1e0c1txw _kqswh2mm" };
function mk(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return k.createElement(
    Xo,
    { as: "li", testId: r, key: t, xcss: bk.container, paddingInline: "space.100" },
    k.createElement(
      Us,
      { testId: r && "".concat(r, "-text") },
      k.createElement(Vs, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var cd = {},
  ld =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function yk(e, t) {
  return !!(e === t || (ld(e) && ld(t)));
}
function _k(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!yk(e[r], t[r])) return !1;
  return !0;
}
function wk(e, t) {
  t === void 0 && (t = _k);
  var r = null;
  function n() {
    for (var a = [], o = 0; o < arguments.length; o++) a[o] = arguments[o];
    if (r && r.lastThis === this && t(a, r.lastArgs)) return r.lastResult;
    var i = e.apply(this, a);
    return (r = { lastResult: i, lastArgs: a, lastThis: this }), i;
  }
  return (
    (n.clear = function () {
      r = null;
    }),
    n
  );
}
var kk = function (t, r, n, a) {
  var o = n.max,
    i = n.ellipsis,
    c = n.transform,
    s = t.length,
    l = s > o,
    u = l && o - 4 < r,
    d = l && r < s - o + 3,
    f = wk(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
      return t.slice(g, b).map(function (y, O) {
        return c(y, g + O, a);
      });
    });
  if (!l) return f(0, s);
  if (u && !d) {
    var v = o - 2;
    return [].concat(
      He(f(0, 1)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: s - v })],
      He(f(s - v)),
    );
  }
  if (!u && d) {
    var h = o - 2;
    return [].concat(
      He(f(0, h)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: h + 1, to: s - 1 })],
      He(f(s - 1)),
    );
  }
  var p = o - 4;
  return [].concat(
    He(f(0, 1)),
    [
      i({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(p / 2),
      }),
    ],
    He(f(r - Math.floor(p / 2), r + p - 1)),
    [i({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: s - 1 })],
    He(f(s - 1)),
  );
};
function ud(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ok(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ud(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ud(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var xs = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  Sk = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.1",
  };
function dd(e) {
  var t = e.chevronDirection,
    r = t === "left" ? q_ : H_;
  return k.createElement(
    Xo,
    { as: "span", xcss: xs.navigatorIconWrapper },
    k.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
    }),
  );
}
function xk(e, t) {
  var r = e.components,
    n = r === void 0 ? cd : r,
    a = e.defaultSelectedIndex,
    o = a === void 0 ? 0 : a,
    i = e.selectedIndex,
    c = e.label,
    s = c === void 0 ? "pagination" : c,
    l = e.pageLabel,
    u = l === void 0 ? "page" : l,
    d = e.previousLabel,
    f = d === void 0 ? "previous" : d,
    v = e.nextLabel,
    h = v === void 0 ? "next" : v,
    p = e.style,
    g = p === void 0 ? cd : p,
    b = e.max,
    y = b === void 0 ? 7 : b,
    O = e.onChange,
    w = O === void 0 ? je : O,
    _ = e.pages,
    S = e.getPageLabel,
    x = e.renderEllipsis,
    A = x === void 0 ? mk : x,
    $ = e.analyticsContext,
    M = e.testId,
    B = e.isDisabled,
    H = A_(i, function () {
      return o || 0;
    }),
    R = ee(H, 2),
    E = R[0],
    I = R[1],
    D = rn(
      Ok(
        {
          fn: function (j, K) {
            var q = j.event,
              U = j.selectedPageIndex;
            i === void 0 && I(U), w && w(q, _[U], K);
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: $,
        },
        Sk,
      ),
    ),
    N = function (j, K, q) {
      var U = _[E],
        oe = "".concat(u, " ").concat(S ? S(j, K) : j),
        J = j === U;
      return k.createElement(
        oo,
        { as: "li", xcss: xs.paginationMenuItem, key: "page-".concat(S ? S(j, K) : K) },
        k.createElement(
          gk,
          {
            component: n.Page,
            onClick: function (pe) {
              return D({ event: pe, selectedPageIndex: K });
            },
            "aria-current": J ? "page" : void 0,
            "aria-label": oe,
            isSelected: J,
            isDisabled: B,
            page: j,
            testId:
              q &&
              ""
                .concat(q, "--")
                .concat(J ? "current-" : "", "page-")
                .concat(K),
          },
          S ? S(j, K) : j,
        ),
      );
    };
  return k.createElement(
    Xo,
    { testId: M, style: g, ref: t, "aria-label": s, as: "nav" },
    k.createElement(
      oo,
      { space: "space.0", alignBlock: "center" },
      k.createElement(sd, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (j) {
          return D({ event: j, selectedPageIndex: E - 1 });
        },
        isDisabled: B || E === 0,
        iconBefore: k.createElement(dd, { chevronDirection: "left" }),
        "aria-label": f,
        testId: M && "".concat(M, "--left-navigator"),
      }),
      k.createElement(
        oo,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: xs.paginationMenu },
        kk(_, E, { max: y, ellipsis: A, transform: N }, M),
      ),
      k.createElement(sd, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (j) {
          return D({ event: j, selectedPageIndex: E + 1 });
        },
        isDisabled: B || E === _.length - 1,
        iconBefore: k.createElement(dd, { chevronDirection: "right" }),
        "aria-label": h,
        testId: M && "".concat(M, "--right-navigator"),
      }),
    ),
  );
}
var Ek = m.memo(m.forwardRef(xk));
function Ck(e, t, r) {
  return (t = Z(t)), qe(e, Sp() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r));
}
function Sp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Sp = function () {
    return !!e;
  })();
}
var Pk = (function (e) {
    function t() {
      var r;
      ge(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return (
        (r = Ck(this, t, [].concat(a))),
        P(r, "onChange", function (i, c, s) {
          r.props.onChange(c, s);
        }),
        r
      );
    }
    return (
      Ue(t, e),
      be(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.total,
              o = n.value,
              i = o === void 0 ? 1 : o,
              c = n.i18n,
              s = n.testId,
              l = n.isDisabled,
              u = He(Array(a)).map(function (f, v) {
                return v + 1;
              }),
              d = i - 1;
            return k.createElement(Ek, {
              selectedIndex: d,
              isDisabled: l,
              label: c == null ? void 0 : c.label,
              nextLabel: c == null ? void 0 : c.next,
              previousLabel: c == null ? void 0 : c.prev,
              pageLabel: c == null ? void 0 : c.pageLabel,
              onChange: this.onChange,
              pages: u,
              testId: s && "".concat(s, "--pagination"),
            });
          },
        },
      ])
    );
  })(k.Component),
  Rk = ["isRanking", "testId"],
  Ak = [
    "width",
    "children",
    "isSortable",
    "sortOrder",
    "isFixedSize",
    "shouldTruncate",
    "onClick",
    "style",
    "testId",
  ];
function fd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Qn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fd(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : fd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var vd = "--local-dynamic-table-text-color",
  jk = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = re(t, Rk);
    return m.createElement(
      "thead",
      Y({ "data-testid": n }, a, { className: T(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  xp = m.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children,
      a = e.isSortable,
      o = e.sortOrder,
      i = e.isFixedSize,
      c = e.shouldTruncate,
      s = e.onClick,
      l = e.style,
      u = e.testId,
      d = re(e, Ak),
      f = Qn(
        Qn(Qn({}, l), r && qv({ width: r })),
        {},
        P({}, vd, "var(--ds-text-subtlest, ".concat(uu, ")")),
      ),
      v = o === Cr,
      h = o === Eo,
      p = function () {
        if (v) return "ascending";
        if (h) return "descending";
      },
      g = n ? "th" : "td",
      b = de("platform-component-visual-refresh");
    return m.createElement(
      g,
      Y({ "aria-sort": p(), onClick: b ? void 0 : s, ref: t, "data-testid": u }, d, {
        className: T([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          b
            ? "_11c8dcr7 _179rralu _mqm2glyw _vchhusvi _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbuwsq"
            : "_11c8dcr7 _179rralu _mqm2glyw _t51zglyw _191wglyw _vchhusvi _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4jp4b _1ygbuwsq",
          !b && s && "_irr3bfnf _d0altlke",
          "_1bsb8a2a",
          i && c && "_1bto1l2s _o5721q9c",
          i && "_1reo15vq _18m915vq",
          !b &&
            a &&
            "_173zglyw _pw6dglyw _1xgk1j28 _1wfn1j28 _y9yonqa1 _997wnqa1 _sklb1l7b _1j091l7b _19w61ule _1w611ule _1hvvidpf _n56nidpf _wyc4idpf _1d4oidpf _no7mstnw _qh32stnw _4b5mb3bt _hn3bb3bt _14gsx0bf _cigmx0bf _c77k1f6e _qzvtu2gc _f4731f6e _1fpyidpf _a04fh2mm _xv14glyw _58ej1kw7 _1ay31kw7 _mdbq1kw7 _10pp1kw7 _1yw3ze3t _n2fdze3t _8607ze3t _szhwze3t _1g2wwc43 _ze9fwc43 _1lcgnqa1 _at5qnqa1 _o4d71l7b _npl51l7b _1rp11onz _1iornqa1 _oi051l7b _1ehx1onz _19t8nqa1 _1bog1l7b",
          !b && v && "_c77k2wk4 _142s94yt",
          !b && h && "_f4732wk4 _17x894yt",
        ]),
        style: Qn(
          Qn({}, f),
          {},
          {
            "--_k02y3n": ye("2px solid ".concat("var(--ds-border, ".concat(hs, ")"))),
            "--_17ckjys": ye("var(--ds-text-subtle, ".concat("var(".concat(vd, ")"), ")")),
            "--_jz8ahf": ye("solid 2px ".concat("var(--ds-border-focused, ".concat(Po, ")"))),
            "--_6j4ewu": ye("var(--ds-background-neutral-hovered, ".concat(gs, ")")),
            "--_1rdacuj": ye("3px solid ".concat("var(--ds-icon-disabled, ".concat(hs, ")"))),
            "--_1qca9zt": ye("3px solid ".concat("var(--ds-icon-subtle, ".concat(uu, ")"))),
          },
        ),
      }),
      n,
    );
  });
function Ik(e, t, r) {
  return (t = Z(t)), qe(e, Ep() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r));
}
function Ep() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ep = function () {
    return !!e;
  })();
}
function Cp(e) {
  return (function (t) {
    function r() {
      var n;
      ge(this, r);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return (
        (n = Ik(this, r, [].concat(o))),
        P(n, "state", { refWidth: 0, refHeight: 0 }),
        P(n, "innerRef", function (c) {
          c && !n.props.isRanking && (n.ref = c);
        }),
        P(n, "updateDimensions", function () {
          if (n.ref) {
            var c = n.ref.getBoundingClientRect(),
              s = c.width,
              l = c.height;
            (s !== n.state.refWidth || l !== n.state.refHeight) &&
              n.setState({ refWidth: s, refHeight: l });
          }
        }),
        n
      );
    }
    return (
      Ue(r, t),
      be(r, [
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (a) {
            var o = this.props.isRanking,
              i = a.isRanking;
            i && !o && this.updateDimensions();
          },
        },
        {
          key: "render",
          value: function () {
            var a = this.state,
              o = a.refWidth,
              i = a.refHeight;
            return k.createElement(
              e,
              Y({ refWidth: o, refHeight: i, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(k.Component);
}
var ea = {},
  pd;
function Dk() {
  if (pd) return ea;
  (pd = 1), Object.defineProperty(ea, "__esModule", { value: !0 }), (ea.default = void 0);
  var e = r(_t()),
    t = r(Jo);
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M8.75 1v11.44l3.72-3.72 1.06 1.06-5 5a.75.75 0 0 1-1.06 0l-5-5 1.06-1.06 3.72 3.72V1z" clip-rule="evenodd"/>',
        },
        a,
      ),
    );
  return (n.displayName = "ArrowDownIcon"), (ea.default = n), ea;
}
var Tk = Dk();
const Mk = Rr(Tk);
var ta = {},
  hd;
function Lk() {
  if (hd) return ta;
  (hd = 1), Object.defineProperty(ta, "__esModule", { value: !0 }), (ta.default = void 0);
  var e = r(_t()),
    t = r(Jo);
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M8.75 15V3.56l3.72 3.72 1.06-1.06-5-5a.75.75 0 0 0-1.06 0l-5 5 1.06 1.06 3.72-3.72V15z" clip-rule="evenodd"/>',
        },
        a,
      ),
    );
  return (n.displayName = "ArrowUpIcon"), (ta.default = n), ta;
}
var Nk = Lk();
const $k = Rr(Nk);
var Fk = "Escape";
function zk(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = m.useRef(!1),
    a = m.useCallback(
      function (i) {
        r || n.current || i.key !== Fk || ((n.current = !0), t(i));
      },
      [t, r],
    ),
    o = m.useCallback(function () {
      n.current = !1;
    }, []);
  m.useEffect(
    function () {
      return Zo.bindAll(
        document,
        [
          { type: "keydown", listener: a },
          { type: "keyup", listener: o },
        ],
        { capture: !1 },
      );
    },
    [a, o],
  );
}
function ra(e) {
  var t = m.useRef(e);
  return (
    m.useEffect(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
var Bk = m.createContext(null),
  qk = m.createContext(null);
function Uk() {
  var e = m.useContext(qk);
  return e;
}
function Vk(e) {
  var t = e.isOpen,
    r = e.onClose,
    n = m.useContext(Bk),
    a = Uk();
  m.useEffect(
    function () {
      if (!de("platform_dst_open_layer_observer_close_layers") && n !== null && t)
        return (
          n.increment(),
          function () {
            n.decrement();
          }
        );
    },
    [n, t, a],
  ),
    m.useEffect(
      function () {
        if (de("platform_dst_open_layer_observer_close_layers") && n !== null && t)
          return n.onClose(r, { namespace: a });
      },
      [n, t, a, r],
    );
}
var ca = { none: 0, small: 100, medium: 350, large: 700 },
  Vi = 0.5,
  Gk = { none: ca.none, small: ca.small * Vi, medium: ca.medium * Vi, large: ca.large * Vi },
  Hk = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  Pp = function () {
    if (!Hk()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  Wk = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  Kk = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { cleanup: "unmount" },
      r = m.useRef([]);
    return (
      m.useEffect(function () {
        return function () {
          r.current.length &&
            (r.current.forEach(function (n) {
              return clearTimeout(n);
            }),
            (r.current = []));
        };
      }, Wk(t)),
      m.useCallback(function (n, a) {
        for (var o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), c = 2; c < o; c++)
          i[c - 2] = arguments[c];
        var s = setTimeout.apply(
          void 0,
          [
            function () {
              (r.current = r.current.filter(function (l) {
                return l !== s;
              })),
                n();
            },
            a,
          ].concat(i),
        );
        r.current.push(s);
      }, [])
    );
  },
  Rp = { appear: !0, isExiting: !1 },
  Ap = m.createContext(Rp),
  gd = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rp;
    return k.createElement(Ap.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  bd = function (t) {
    var r = [];
    return (
      m.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  Yk = function (t, r) {
    for (var n = r.concat([]), a = Jk(r), o = 0; o < t.length; o++) {
      var i = t[o],
        c = !a[i.key];
      c && n.splice(o + 1, 0, i);
    }
    return n;
  },
  Jk = function (t) {
    return t.reduce(function (r, n) {
      return (r[n.key] = n), r;
    }, {});
  },
  Xk = function (t, r) {
    for (
      var n = new Set(
          t.map(function (s) {
            return s.key;
          }),
        ),
        a = new Set(),
        o = 0;
      o < r.length;
      o++
    ) {
      var i = r[o],
        c = i.key;
      n.has(c) || a.add(c);
    }
    return a;
  },
  jp = m.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      o = m.useState([null, n]),
      i = ee(o, 2),
      c = i[0],
      s = i[1],
      l = m.useState([]),
      u = ee(l, 2),
      d = u[0],
      f = u[1],
      v = m.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      h = ee(v, 2),
      p = h[0],
      g = h[1];
    if (
      (m.useEffect(function () {
        p.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      (Pp() && !de("platform_design_system_motion_on_finish_fix")) || typeof c == "boolean")
    )
      return n;
    var b = ee(c, 2),
      y = b[0],
      O = b[1],
      w = bd(y),
      _ = bd(O);
    O !== n && s([O, n]);
    var S = Xk(_, w),
      x = !!S.size,
      A = _;
    if ((x && (A = Yk(_, w)), a))
      if (d.length) A = d;
      else {
        var $ = A.filter(function (M) {
          return S.has(M.key);
        });
        $.length && f($);
      }
    return (
      S.size
        ? (A = A.map(function (M) {
            var B = S.has(M.key);
            return gd(M, {
              appear: !0,
              isExiting: B,
              onFinish: B
                ? function () {
                    S.delete(M.key), S.size === 0 && (s([null, n]), f([]));
                  }
                : void 0,
            });
          }))
        : (A = A.map(function (M) {
            return gd(M, p);
          })),
      A
    );
  }),
  Zk = function () {
    return m.useContext(Ap);
  };
jp.displayName = "ExitingPersistence";
function Qk() {
  var e = m.useRef("");
  return (
    e.current ||
      (e.current =
        "_" +
        (
          Number(String(Math.random()).slice(2)) +
          Date.now() +
          Math.round(performance.now())
        ).toString(36)),
    e.current
  );
}
var e1 = m.createContext(function () {
    return { isReady: !0, delay: 0, ref: je };
  }),
  t1 = function () {
    var t = Qk(),
      r = m.useContext(e1);
    return r(t);
  },
  r1 = function (t) {
    var r = t.children,
      n = t.animationTimingFunction,
      a = t.animationTimingFunctionExiting,
      o = a === void 0 ? n : a,
      i = t.enteringAnimation,
      c = t.exitingAnimation,
      s = c === void 0 ? i : c,
      l = t.isPaused,
      u = t.onFinish,
      d = t.duration,
      f = d === void 0 ? "large" : d,
      v = t1(),
      h = Zk(),
      p = h.isExiting,
      g = h.onFinish,
      b = h.appear,
      y = Kk(),
      O = l || !v.isReady,
      w = p ? 0 : v.delay,
      _ = p ? "exiting" : "entering",
      S = m.useState(b),
      x = ee(S, 2),
      A = x[0],
      $ = x[1];
    return (
      m.useEffect(
        function () {
          var M = !1;
          if (!O) {
            if (!b) {
              u && u(_);
              return;
            }
            var B = function () {
              _ === "exiting" && (g == null || g()), M || $(!1), u == null || u(_);
            };
            if (Pp() && de("platform_design_system_motion_on_finish_fix")) {
              B();
              return;
            }
            return (
              $(!0),
              y(B, p ? Gk[f] : ca[f] + w),
              function () {
                M = !0;
              }
            );
          }
        },
        [g, _, p, f, w, O, y],
      ),
      r(
        {
          ref: v.ref,
          className: A
            ? T([
                T(["_1o51eoah _1y0co91m _1bumglyw _sedtglyw"]),
                O && T(["_1y0ctrqk"]),
                f === "small" && T(["_5sag1yx9"]),
                f === "medium" && T(["_5sag1ttt"]),
                f === "large" && T(["_5sagpwmj"]),
                p && f === "small" && T(["_5sag14ed"]),
                p && f === "medium" && T(["_5sagluct"]),
                p && f === "large" && T(["_5sag1ttt"]),
                p && T(["_ju255cps _1o51q7pw"]),
                !p && n === "linear" && T(["_1pglp3kn"]),
                !p && n === "ease-out" && T(["_1pgldkwg"]),
                !p && n === "ease-in" && T(["_1pgl1nzg"]),
                !p && n === "ease-in-out" && T(["_1pgl1fu8"]),
                p && n === "linear" && T(["_1pglp3kn"]),
                p && o === "ease-out" && T(["_1pgldkwg"]),
                p && o === "ease-in" && T(["_1pgl1nzg"]),
                p && o === "ease-in-out" && T(["_1pgl1fu8"]),
                ((!p && i === "fade-in") || (p && s === "fade-in")) && T(["_j7hq1cgr"]),
                ((!p && i === "fade-out") || (p && s === "fade-out")) && T(["_j7hq1lln"]),
                ((!p && i === "zoom-in") || (p && s === "zoom-in")) && T(["_j7hqe8p0"]),
                ((!p && i === "zoom-out") || (p && s === "zoom-out")) && T(["_j7hqy6ql"]),
                ((!p && i === "slide-in-from-top") || (p && s === "slide-in-from-top")) &&
                  T(["_j7hqqshu"]),
                ((!p && i === "slide-out-from-top") || (p && s === "slide-out-from-top")) &&
                  T(["_j7hq7ri4"]),
                ((!p && i === "slide-in-from-right") || (p && s === "slide-in-from-right")) &&
                  T(["_j7hqdfjr"]),
                ((!p && i === "slide-out-from-right") || (p && s === "slide-out-from-right")) &&
                  T(["_j7hqonfj"]),
                ((!p && i === "slide-in-from-bottom") || (p && s === "slide-in-from-bottom")) &&
                  T(["_j7hq1liq"]),
                ((!p && i === "slide-out-from-bottom") || (p && s === "slide-out-from-bottom")) &&
                  T(["_j7hqhnf1"]),
                ((!p && i === "slide-in-from-left") || (p && s === "slide-in-from-left")) &&
                  T(["_j7hq1bh1"]),
                ((!p && i === "slide-out-from-left") || (p && s === "slide-out-from-left")) &&
                  T(["_j7hqj08w"]),
                ((!p && i === "fade-in-from-top") || (p && s === "fade-in-from-top")) &&
                  T(["_j7hq2iua"]),
                ((!p && i === "fade-out-from-top") || (p && s === "fade-out-from-top")) &&
                  T(["_j7hq39va"]),
                ((!p && i === "fade-in-from-left") || (p && s === "fade-in-from-left")) &&
                  T(["_j7hq15m2"]),
                ((!p && i === "fade-out-from-left") || (p && s === "fade-out-from-left")) &&
                  T(["_j7hq1yiv"]),
                ((!p && i === "fade-in-from-bottom") || (p && s === "fade-in-from-bottom")) &&
                  T(["_j7hq1w00"]),
                ((!p && i === "fade-out-from-bottom") || (p && s === "fade-out-from-bottom")) &&
                  T(["_j7hqzy3z"]),
                ((!p && i === "fade-in-from-right") || (p && s === "fade-in-from-right")) &&
                  T(["_j7hqpqak"]),
                ((!p && i === "fade-out-from-right") || (p && s === "fade-out-from-right")) &&
                  T(["_j7hq1ebg"]),
                ((!p && i === "fade-in-from-top-constant") ||
                  (p && s === "fade-in-from-top-constant")) &&
                  T(["_j7hqm2e2"]),
                ((!p && i === "fade-out-from-top-constant") ||
                  (p && s === "fade-out-from-top-constant")) &&
                  T(["_j7hq97jn"]),
                ((!p && i === "fade-in-from-left-constant") ||
                  (p && s === "fade-in-from-left-constant")) &&
                  T(["_j7hqovgq"]),
                ((!p && i === "fade-out-from-left-constant") ||
                  (p && s === "fade-out-from-left-constant")) &&
                  T(["_j7hq15do"]),
                ((!p && i === "fade-in-from-bottom-constant") ||
                  (p && s === "fade-in-from-bottom-constant")) &&
                  T(["_j7hq797a"]),
                ((!p && i === "fade-out-from-bottom-constant") ||
                  (p && s === "fade-out-from-bottom-constant")) &&
                  T(["_j7hqwo7r"]),
                ((!p && i === "fade-in-from-right-constant") ||
                  (p && s === "fade-in-from-right-constant")) &&
                  T(["_j7hqt8u5"]),
                ((!p && i === "fade-out-from-right-constant") ||
                  (p && s === "fade-out-from-right-constant")) &&
                  T(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(w, "ms") },
        },
        _,
      )
    );
  },
  n1 = { top: "bottom", bottom: "top", left: "right", right: "left" },
  a1 = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      o = t.entranceDirection,
      i = t.exitDirection,
      c = t.distance,
      s = c === void 0 ? "proportional" : c,
      l = t.onFinish,
      u = t.isPaused,
      d = o !== void 0 ? n1[o] : void 0,
      f =
        i || d
          ? "fade-out-from-".concat(i || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return k.createElement(
      r1,
      {
        duration: a,
        enteringAnimation: o
          ? "fade-in-from-".concat(o).concat(s === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: f,
        animationTimingFunction: "ease-in-out",
        onFinish: l,
        isPaused: u,
      },
      r,
    );
  },
  o1 = m.createContext();
m.createContext();
var i1 = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  s1 = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  c1 = function (t, r) {
    if (typeof t == "function") return s1(t, r);
    t != null && (t.current = r);
  },
  md = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        o = n[1];
      return (r[a] = o), r;
    }, {});
  },
  yd =
    typeof window < "u" && window.document && window.document.createElement
      ? m.useLayoutEffect
      : m.useEffect,
  Ne = "top",
  dt = "bottom",
  ft = "right",
  $e = "left",
  Qs = "auto",
  Na = [Ne, dt, ft, $e],
  on = "start",
  Pa = "end",
  l1 = "clippingParents",
  Ip = "viewport",
  na = "popper",
  u1 = "reference",
  _d = Na.reduce(function (e, t) {
    return e.concat([t + "-" + on, t + "-" + Pa]);
  }, []),
  Dp = [].concat(Na, [Qs]).reduce(function (e, t) {
    return e.concat([t, t + "-" + on, t + "-" + Pa]);
  }, []),
  d1 = "beforeRead",
  f1 = "read",
  v1 = "afterRead",
  p1 = "beforeMain",
  h1 = "main",
  g1 = "afterMain",
  b1 = "beforeWrite",
  m1 = "write",
  y1 = "afterWrite",
  _1 = [d1, f1, v1, p1, h1, g1, b1, m1, y1];
function Ft(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Je(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Pr(e) {
  var t = Je(e).Element;
  return e instanceof t || e instanceof Element;
}
function ut(e) {
  var t = Je(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ec(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Je(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function w1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      o = t.elements[r];
    !ut(o) ||
      !Ft(o) ||
      (Object.assign(o.style, n),
      Object.keys(a).forEach(function (i) {
        var c = a[i];
        c === !1 ? o.removeAttribute(i) : o.setAttribute(i, c === !0 ? "" : c);
      }));
  });
}
function k1(e) {
  var t = e.state,
    r = {
      popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var a = t.elements[n],
          o = t.attributes[n] || {},
          i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          c = i.reduce(function (s, l) {
            return (s[l] = ""), s;
          }, {});
        !ut(a) ||
          !Ft(a) ||
          (Object.assign(a.style, c),
          Object.keys(o).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const O1 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: w1,
  effect: k1,
  requires: ["computeStyles"],
};
function Nt(e) {
  return e.split("-")[0];
}
var kr = Math.max,
  Io = Math.min,
  sn = Math.round;
function Es() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Tp() {
  return !/^((?!chrome|android).)*safari/i.test(Es());
}
function cn(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(),
    a = 1,
    o = 1;
  t &&
    ut(e) &&
    ((a = (e.offsetWidth > 0 && sn(n.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && sn(n.height) / e.offsetHeight) || 1));
  var i = Pr(e) ? Je(e) : window,
    c = i.visualViewport,
    s = !Tp() && r,
    l = (n.left + (s && c ? c.offsetLeft : 0)) / a,
    u = (n.top + (s && c ? c.offsetTop : 0)) / o,
    d = n.width / a,
    f = n.height / o;
  return { width: d, height: f, top: u, right: l + d, bottom: u + f, left: l, x: l, y: u };
}
function tc(e) {
  var t = cn(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Mp(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && ec(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function tr(e) {
  return Je(e).getComputedStyle(e);
}
function S1(e) {
  return ["table", "td", "th"].indexOf(Ft(e)) >= 0;
}
function fr(e) {
  return ((Pr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ni(e) {
  return Ft(e) === "html" ? e : e.assignedSlot || e.parentNode || (ec(e) ? e.host : null) || fr(e);
}
function wd(e) {
  return !ut(e) || tr(e).position === "fixed" ? null : e.offsetParent;
}
function x1(e) {
  var t = /firefox/i.test(Es()),
    r = /Trident/i.test(Es());
  if (r && ut(e)) {
    var n = tr(e);
    if (n.position === "fixed") return null;
  }
  var a = ni(e);
  for (ec(a) && (a = a.host); ut(a) && ["html", "body"].indexOf(Ft(a)) < 0; ) {
    var o = tr(a);
    if (
      o.transform !== "none" ||
      o.perspective !== "none" ||
      o.contain === "paint" ||
      ["transform", "perspective"].indexOf(o.willChange) !== -1 ||
      (t && o.willChange === "filter") ||
      (t && o.filter && o.filter !== "none")
    )
      return a;
    a = a.parentNode;
  }
  return null;
}
function $a(e) {
  for (var t = Je(e), r = wd(e); r && S1(r) && tr(r).position === "static"; ) r = wd(r);
  return r && (Ft(r) === "html" || (Ft(r) === "body" && tr(r).position === "static"))
    ? t
    : r || x1(e) || t;
}
function rc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function pa(e, t, r) {
  return kr(e, Io(t, r));
}
function E1(e, t, r) {
  var n = pa(e, t, r);
  return n > r ? r : n;
}
function Lp() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Np(e) {
  return Object.assign({}, Lp(), e);
}
function $p(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r;
  }, {});
}
var C1 = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Np(typeof t != "number" ? t : $p(t, Na))
  );
};
function P1(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    o = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    c = Nt(r.placement),
    s = rc(c),
    l = [$e, ft].indexOf(c) >= 0,
    u = l ? "height" : "width";
  if (!(!o || !i)) {
    var d = C1(a.padding, r),
      f = tc(o),
      v = s === "y" ? Ne : $e,
      h = s === "y" ? dt : ft,
      p = r.rects.reference[u] + r.rects.reference[s] - i[s] - r.rects.popper[u],
      g = i[s] - r.rects.reference[s],
      b = $a(o),
      y = b ? (s === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      O = p / 2 - g / 2,
      w = d[v],
      _ = y - f[u] - d[h],
      S = y / 2 - f[u] / 2 + O,
      x = pa(w, S, _),
      A = s;
    r.modifiersData[n] = ((t = {}), (t[A] = x), (t.centerOffset = x - S), t);
  }
}
function R1(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (Mp(t.elements.popper, a) && (t.elements.arrow = a)));
}
const A1 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: P1,
  effect: R1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function ln(e) {
  return e.split("-")[1];
}
var j1 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function I1(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: sn(r * a) / a || 0, y: sn(n * a) / a || 0 };
}
function kd(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    a = e.placement,
    o = e.variation,
    i = e.offsets,
    c = e.position,
    s = e.gpuAcceleration,
    l = e.adaptive,
    u = e.roundOffsets,
    d = e.isFixed,
    f = i.x,
    v = f === void 0 ? 0 : f,
    h = i.y,
    p = h === void 0 ? 0 : h,
    g = typeof u == "function" ? u({ x: v, y: p }) : { x: v, y: p };
  (v = g.x), (p = g.y);
  var b = i.hasOwnProperty("x"),
    y = i.hasOwnProperty("y"),
    O = $e,
    w = Ne,
    _ = window;
  if (l) {
    var S = $a(r),
      x = "clientHeight",
      A = "clientWidth";
    if (
      (S === Je(r) &&
        ((S = fr(r)),
        tr(S).position !== "static" &&
          c === "absolute" &&
          ((x = "scrollHeight"), (A = "scrollWidth"))),
      (S = S),
      a === Ne || ((a === $e || a === ft) && o === Pa))
    ) {
      w = dt;
      var $ = d && S === _ && _.visualViewport ? _.visualViewport.height : S[x];
      (p -= $ - n.height), (p *= s ? 1 : -1);
    }
    if (a === $e || ((a === Ne || a === dt) && o === Pa)) {
      O = ft;
      var M = d && S === _ && _.visualViewport ? _.visualViewport.width : S[A];
      (v -= M - n.width), (v *= s ? 1 : -1);
    }
  }
  var B = Object.assign({ position: c }, l && j1),
    H = u === !0 ? I1({ x: v, y: p }, Je(r)) : { x: v, y: p };
  if (((v = H.x), (p = H.y), s)) {
    var R;
    return Object.assign(
      {},
      B,
      ((R = {}),
      (R[w] = y ? "0" : ""),
      (R[O] = b ? "0" : ""),
      (R.transform =
        (_.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + p + "px)"
          : "translate3d(" + v + "px, " + p + "px, 0)"),
      R),
    );
  }
  return Object.assign(
    {},
    B,
    ((t = {}), (t[w] = y ? p + "px" : ""), (t[O] = b ? v + "px" : ""), (t.transform = ""), t),
  );
}
function D1(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    o = r.adaptive,
    i = o === void 0 ? !0 : o,
    c = r.roundOffsets,
    s = c === void 0 ? !0 : c,
    l = {
      placement: Nt(t.placement),
      variation: ln(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      kd(
        Object.assign({}, l, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: s,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        kd(
          Object.assign({}, l, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: s,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const T1 = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: D1, data: {} };
var Ya = { passive: !0 };
function M1(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    o = a === void 0 ? !0 : a,
    i = n.resize,
    c = i === void 0 ? !0 : i,
    s = Je(t.elements.popper),
    l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      l.forEach(function (u) {
        u.addEventListener("scroll", r.update, Ya);
      }),
    c && s.addEventListener("resize", r.update, Ya),
    function () {
      o &&
        l.forEach(function (u) {
          u.removeEventListener("scroll", r.update, Ya);
        }),
        c && s.removeEventListener("resize", r.update, Ya);
    }
  );
}
const L1 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: M1,
  data: {},
};
var N1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function lo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return N1[t];
  });
}
var $1 = { start: "end", end: "start" };
function Od(e) {
  return e.replace(/start|end/g, function (t) {
    return $1[t];
  });
}
function nc(e) {
  var t = Je(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function ac(e) {
  return cn(fr(e)).left + nc(e).scrollLeft;
}
function F1(e, t) {
  var r = Je(e),
    n = fr(e),
    a = r.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    c = 0,
    s = 0;
  if (a) {
    (o = a.width), (i = a.height);
    var l = Tp();
    (l || (!l && t === "fixed")) && ((c = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: o, height: i, x: c + ac(e), y: s };
}
function z1(e) {
  var t,
    r = fr(e),
    n = nc(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = kr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    i = kr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    c = -n.scrollLeft + ac(e),
    s = -n.scrollTop;
  return (
    tr(a || r).direction === "rtl" && (c += kr(r.clientWidth, a ? a.clientWidth : 0) - o),
    { width: o, height: i, x: c, y: s }
  );
}
function oc(e) {
  var t = tr(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Fp(e) {
  return ["html", "body", "#document"].indexOf(Ft(e)) >= 0
    ? e.ownerDocument.body
    : ut(e) && oc(e)
      ? e
      : Fp(ni(e));
}
function ha(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Fp(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = Je(n),
    i = a ? [o].concat(o.visualViewport || [], oc(n) ? n : []) : n,
    c = t.concat(i);
  return a ? c : c.concat(ha(ni(i)));
}
function Cs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function B1(e, t) {
  var r = cn(e, !1, t === "fixed");
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function Sd(e, t, r) {
  return t === Ip ? Cs(F1(e, r)) : Pr(t) ? B1(t, r) : Cs(z1(fr(e)));
}
function q1(e) {
  var t = ha(ni(e)),
    r = ["absolute", "fixed"].indexOf(tr(e).position) >= 0,
    n = r && ut(e) ? $a(e) : e;
  return Pr(n)
    ? t.filter(function (a) {
        return Pr(a) && Mp(a, n) && Ft(a) !== "body";
      })
    : [];
}
function U1(e, t, r, n) {
  var a = t === "clippingParents" ? q1(e) : [].concat(t),
    o = [].concat(a, [r]),
    i = o[0],
    c = o.reduce(
      function (s, l) {
        var u = Sd(e, l, n);
        return (
          (s.top = kr(u.top, s.top)),
          (s.right = Io(u.right, s.right)),
          (s.bottom = Io(u.bottom, s.bottom)),
          (s.left = kr(u.left, s.left)),
          s
        );
      },
      Sd(e, i, n),
    );
  return (
    (c.width = c.right - c.left), (c.height = c.bottom - c.top), (c.x = c.left), (c.y = c.top), c
  );
}
function zp(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? Nt(n) : null,
    o = n ? ln(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    c = t.y + t.height / 2 - r.height / 2,
    s;
  switch (a) {
    case Ne:
      s = { x: i, y: t.y - r.height };
      break;
    case dt:
      s = { x: i, y: t.y + t.height };
      break;
    case ft:
      s = { x: t.x + t.width, y: c };
      break;
    case $e:
      s = { x: t.x - r.width, y: c };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var l = a ? rc(a) : null;
  if (l != null) {
    var u = l === "y" ? "height" : "width";
    switch (o) {
      case on:
        s[l] = s[l] - (t[u] / 2 - r[u] / 2);
        break;
      case Pa:
        s[l] = s[l] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return s;
}
function Ra(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    o = r.strategy,
    i = o === void 0 ? e.strategy : o,
    c = r.boundary,
    s = c === void 0 ? l1 : c,
    l = r.rootBoundary,
    u = l === void 0 ? Ip : l,
    d = r.elementContext,
    f = d === void 0 ? na : d,
    v = r.altBoundary,
    h = v === void 0 ? !1 : v,
    p = r.padding,
    g = p === void 0 ? 0 : p,
    b = Np(typeof g != "number" ? g : $p(g, Na)),
    y = f === na ? u1 : na,
    O = e.rects.popper,
    w = e.elements[h ? y : f],
    _ = U1(Pr(w) ? w : w.contextElement || fr(e.elements.popper), s, u, i),
    S = cn(e.elements.reference),
    x = zp({ reference: S, element: O, placement: a }),
    A = Cs(Object.assign({}, O, x)),
    $ = f === na ? A : S,
    M = {
      top: _.top - $.top + b.top,
      bottom: $.bottom - _.bottom + b.bottom,
      left: _.left - $.left + b.left,
      right: $.right - _.right + b.right,
    },
    B = e.modifiersData.offset;
  if (f === na && B) {
    var H = B[a];
    Object.keys(M).forEach(function (R) {
      var E = [ft, dt].indexOf(R) >= 0 ? 1 : -1,
        I = [Ne, dt].indexOf(R) >= 0 ? "y" : "x";
      M[R] += H[I] * E;
    });
  }
  return M;
}
function V1(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    o = r.rootBoundary,
    i = r.padding,
    c = r.flipVariations,
    s = r.allowedAutoPlacements,
    l = s === void 0 ? Dp : s,
    u = ln(n),
    d = u
      ? c
        ? _d
        : _d.filter(function (h) {
            return ln(h) === u;
          })
      : Na,
    f = d.filter(function (h) {
      return l.indexOf(h) >= 0;
    });
  f.length === 0 && (f = d);
  var v = f.reduce(function (h, p) {
    return (h[p] = Ra(e, { placement: p, boundary: a, rootBoundary: o, padding: i })[Nt(p)]), h;
  }, {});
  return Object.keys(v).sort(function (h, p) {
    return v[h] - v[p];
  });
}
function G1(e) {
  if (Nt(e) === Qs) return [];
  var t = lo(e);
  return [Od(e), t, Od(t)];
}
function H1(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var a = r.mainAxis,
        o = a === void 0 ? !0 : a,
        i = r.altAxis,
        c = i === void 0 ? !0 : i,
        s = r.fallbackPlacements,
        l = r.padding,
        u = r.boundary,
        d = r.rootBoundary,
        f = r.altBoundary,
        v = r.flipVariations,
        h = v === void 0 ? !0 : v,
        p = r.allowedAutoPlacements,
        g = t.options.placement,
        b = Nt(g),
        y = b === g,
        O = s || (y || !h ? [lo(g)] : G1(g)),
        w = [g].concat(O).reduce(function (J, ve) {
          return J.concat(
            Nt(ve) === Qs
              ? V1(t, {
                  placement: ve,
                  boundary: u,
                  rootBoundary: d,
                  padding: l,
                  flipVariations: h,
                  allowedAutoPlacements: p,
                })
              : ve,
          );
        }, []),
        _ = t.rects.reference,
        S = t.rects.popper,
        x = new Map(),
        A = !0,
        $ = w[0],
        M = 0;
      M < w.length;
      M++
    ) {
      var B = w[M],
        H = Nt(B),
        R = ln(B) === on,
        E = [Ne, dt].indexOf(H) >= 0,
        I = E ? "width" : "height",
        D = Ra(t, { placement: B, boundary: u, rootBoundary: d, altBoundary: f, padding: l }),
        N = E ? (R ? ft : $e) : R ? dt : Ne;
      _[I] > S[I] && (N = lo(N));
      var z = lo(N),
        j = [];
      if (
        (o && j.push(D[H] <= 0),
        c && j.push(D[N] <= 0, D[z] <= 0),
        j.every(function (J) {
          return J;
        }))
      ) {
        ($ = B), (A = !1);
        break;
      }
      x.set(B, j);
    }
    if (A)
      for (
        var K = h ? 3 : 1,
          q = function (ve) {
            var pe = w.find(function (_e) {
              var Oe = x.get(_e);
              if (Oe)
                return Oe.slice(0, ve).every(function (De) {
                  return De;
                });
            });
            if (pe) return ($ = pe), "break";
          },
          U = K;
        U > 0;
        U--
      ) {
        var oe = q(U);
        if (oe === "break") break;
      }
    t.placement !== $ && ((t.modifiersData[n]._skip = !0), (t.placement = $), (t.reset = !0));
  }
}
const W1 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: H1,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function xd(e, t, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  );
}
function Ed(e) {
  return [Ne, ft, dt, $e].some(function (t) {
    return e[t] >= 0;
  });
}
function K1(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    i = Ra(t, { elementContext: "reference" }),
    c = Ra(t, { altBoundary: !0 }),
    s = xd(i, n),
    l = xd(c, a, o),
    u = Ed(s),
    d = Ed(l);
  (t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: l,
    isReferenceHidden: u,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": d,
    }));
}
const Y1 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: K1,
};
function J1(e, t, r) {
  var n = Nt(e),
    a = [$e, Ne].indexOf(n) >= 0 ? -1 : 1,
    o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = o[0],
    c = o[1];
  return (
    (i = i || 0), (c = (c || 0) * a), [$e, ft].indexOf(n) >= 0 ? { x: c, y: i } : { x: i, y: c }
  );
}
function X1(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    o = a === void 0 ? [0, 0] : a,
    i = Dp.reduce(function (u, d) {
      return (u[d] = J1(d, t.rects, o)), u;
    }, {}),
    c = i[t.placement],
    s = c.x,
    l = c.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += l)),
    (t.modifiersData[n] = i);
}
const Z1 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: X1 };
function Q1(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = zp({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const eO = { name: "popperOffsets", enabled: !0, phase: "read", fn: Q1, data: {} };
function tO(e) {
  return e === "x" ? "y" : "x";
}
function rO(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.mainAxis,
    o = a === void 0 ? !0 : a,
    i = r.altAxis,
    c = i === void 0 ? !1 : i,
    s = r.boundary,
    l = r.rootBoundary,
    u = r.altBoundary,
    d = r.padding,
    f = r.tether,
    v = f === void 0 ? !0 : f,
    h = r.tetherOffset,
    p = h === void 0 ? 0 : h,
    g = Ra(t, { boundary: s, rootBoundary: l, padding: d, altBoundary: u }),
    b = Nt(t.placement),
    y = ln(t.placement),
    O = !y,
    w = rc(b),
    _ = tO(w),
    S = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    A = t.rects.popper,
    $ = typeof p == "function" ? p(Object.assign({}, t.rects, { placement: t.placement })) : p,
    M =
      typeof $ == "number"
        ? { mainAxis: $, altAxis: $ }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, $),
    B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    H = { x: 0, y: 0 };
  if (S) {
    if (o) {
      var R,
        E = w === "y" ? Ne : $e,
        I = w === "y" ? dt : ft,
        D = w === "y" ? "height" : "width",
        N = S[w],
        z = N + g[E],
        j = N - g[I],
        K = v ? -A[D] / 2 : 0,
        q = y === on ? x[D] : A[D],
        U = y === on ? -A[D] : -x[D],
        oe = t.elements.arrow,
        J = v && oe ? tc(oe) : { width: 0, height: 0 },
        ve = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Lp(),
        pe = ve[E],
        _e = ve[I],
        Oe = pa(0, x[D], J[D]),
        De = O ? x[D] / 2 - K - Oe - pe - M.mainAxis : q - Oe - pe - M.mainAxis,
        he = O ? -x[D] / 2 + K + Oe + _e + M.mainAxis : U + Oe + _e + M.mainAxis,
        Ze = t.elements.arrow && $a(t.elements.arrow),
        Ot = Ze ? (w === "y" ? Ze.clientTop || 0 : Ze.clientLeft || 0) : 0,
        Ve = (R = B == null ? void 0 : B[w]) != null ? R : 0,
        Qe = N + De - Ve - Ot,
        Pe = N + he - Ve,
        et = pa(v ? Io(z, Qe) : z, N, v ? kr(j, Pe) : j);
      (S[w] = et), (H[w] = et - N);
    }
    if (c) {
      var tt,
        Ge = w === "x" ? Ne : $e,
        vt = w === "x" ? dt : ft,
        Ie = S[_],
        ie = _ === "y" ? "height" : "width",
        xe = Ie + g[Ge],
        Re = Ie - g[vt],
        Bt = [Ne, $e].indexOf(b) !== -1,
        Tr = (tt = B == null ? void 0 : B[_]) != null ? tt : 0,
        me = Bt ? xe : Ie - x[ie] - A[ie] - Tr + M.altAxis,
        nr = Bt ? Ie + x[ie] + A[ie] - Tr - M.altAxis : Re,
        St = v && Bt ? E1(me, Ie, nr) : pa(v ? me : xe, Ie, v ? nr : Re);
      (S[_] = St), (H[_] = St - Ie);
    }
    t.modifiersData[n] = H;
  }
}
const nO = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: rO,
  requiresIfExists: ["offset"],
};
function aO(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function oO(e) {
  return e === Je(e) || !ut(e) ? nc(e) : aO(e);
}
function iO(e) {
  var t = e.getBoundingClientRect(),
    r = sn(t.width) / e.offsetWidth || 1,
    n = sn(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function sO(e, t, r) {
  r === void 0 && (r = !1);
  var n = ut(t),
    a = ut(t) && iO(t),
    o = fr(t),
    i = cn(e, a, r),
    c = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Ft(t) !== "body" || oc(o)) && (c = oO(t)),
      ut(t) ? ((s = cn(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : o && (s.x = ac(o))),
    {
      x: i.left + c.scrollLeft - s.x,
      y: i.top + c.scrollTop - s.y,
      width: i.width,
      height: i.height,
    }
  );
}
function cO(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (o) {
    t.set(o.name, o);
  });
  function a(o) {
    r.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function (c) {
      if (!r.has(c)) {
        var s = t.get(c);
        s && a(s);
      }
    }),
      n.push(o);
  }
  return (
    e.forEach(function (o) {
      r.has(o.name) || a(o);
    }),
    n
  );
}
function lO(e) {
  var t = cO(e);
  return _1.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function uO(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            (t = void 0), r(e());
          });
        })),
      t
    );
  };
}
function dO(e) {
  var t = e.reduce(function (r, n) {
    var a = r[n.name];
    return (
      (r[n.name] = a
        ? Object.assign({}, a, n, {
            options: Object.assign({}, a.options, n.options),
            data: Object.assign({}, a.data, n.data),
          })
        : n),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var Cd = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Pd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function fO(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    o = a === void 0 ? Cd : a;
  return function (c, s, l) {
    l === void 0 && (l = o);
    var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Cd, o),
        modifiersData: {},
        elements: { reference: c, popper: s },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      v = {
        state: u,
        setOptions: function (b) {
          var y = typeof b == "function" ? b(u.options) : b;
          p(),
            (u.options = Object.assign({}, o, u.options, y)),
            (u.scrollParents = {
              reference: Pr(c) ? ha(c) : c.contextElement ? ha(c.contextElement) : [],
              popper: ha(s),
            });
          var O = lO(dO([].concat(n, u.options.modifiers)));
          return (
            (u.orderedModifiers = O.filter(function (w) {
              return w.enabled;
            })),
            h(),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var b = u.elements,
              y = b.reference,
              O = b.popper;
            if (Pd(y, O)) {
              (u.rects = {
                reference: sO(y, $a(O), u.options.strategy === "fixed"),
                popper: tc(O),
              }),
                (u.reset = !1),
                (u.placement = u.options.placement),
                u.orderedModifiers.forEach(function (M) {
                  return (u.modifiersData[M.name] = Object.assign({}, M.data));
                });
              for (var w = 0; w < u.orderedModifiers.length; w++) {
                if (u.reset === !0) {
                  (u.reset = !1), (w = -1);
                  continue;
                }
                var _ = u.orderedModifiers[w],
                  S = _.fn,
                  x = _.options,
                  A = x === void 0 ? {} : x,
                  $ = _.name;
                typeof S == "function" &&
                  (u = S({ state: u, options: A, name: $, instance: v }) || u);
              }
            }
          }
        },
        update: uO(function () {
          return new Promise(function (g) {
            v.forceUpdate(), g(u);
          });
        }),
        destroy: function () {
          p(), (f = !0);
        },
      };
    if (!Pd(c, s)) return v;
    v.setOptions(l).then(function (g) {
      !f && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function h() {
      u.orderedModifiers.forEach(function (g) {
        var b = g.name,
          y = g.options,
          O = y === void 0 ? {} : y,
          w = g.effect;
        if (typeof w == "function") {
          var _ = w({ state: u, name: b, instance: v, options: O }),
            S = function () {};
          d.push(_ || S);
        }
      });
    }
    function p() {
      d.forEach(function (g) {
        return g();
      }),
        (d = []);
    }
    return v;
  };
}
var vO = [L1, eO, T1, O1, Z1, W1, nO, A1, Y1],
  pO = fO({ defaultModifiers: vO }),
  Gi,
  Rd;
function hO() {
  if (Rd) return Gi;
  Rd = 1;
  var e = typeof Element < "u",
    t = typeof Map == "function",
    r = typeof Set == "function",
    n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function a(o, i) {
    if (o === i) return !0;
    if (o && i && typeof o == "object" && typeof i == "object") {
      if (o.constructor !== i.constructor) return !1;
      var c, s, l;
      if (Array.isArray(o)) {
        if (((c = o.length), c != i.length)) return !1;
        for (s = c; s-- !== 0; ) if (!a(o[s], i[s])) return !1;
        return !0;
      }
      var u;
      if (t && o instanceof Map && i instanceof Map) {
        if (o.size !== i.size) return !1;
        for (u = o.entries(); !(s = u.next()).done; ) if (!i.has(s.value[0])) return !1;
        for (u = o.entries(); !(s = u.next()).done; )
          if (!a(s.value[1], i.get(s.value[0]))) return !1;
        return !0;
      }
      if (r && o instanceof Set && i instanceof Set) {
        if (o.size !== i.size) return !1;
        for (u = o.entries(); !(s = u.next()).done; ) if (!i.has(s.value[0])) return !1;
        return !0;
      }
      if (n && ArrayBuffer.isView(o) && ArrayBuffer.isView(i)) {
        if (((c = o.length), c != i.length)) return !1;
        for (s = c; s-- !== 0; ) if (o[s] !== i[s]) return !1;
        return !0;
      }
      if (o.constructor === RegExp) return o.source === i.source && o.flags === i.flags;
      if (
        o.valueOf !== Object.prototype.valueOf &&
        typeof o.valueOf == "function" &&
        typeof i.valueOf == "function"
      )
        return o.valueOf() === i.valueOf();
      if (
        o.toString !== Object.prototype.toString &&
        typeof o.toString == "function" &&
        typeof i.toString == "function"
      )
        return o.toString() === i.toString();
      if (((l = Object.keys(o)), (c = l.length), c !== Object.keys(i).length)) return !1;
      for (s = c; s-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(i, l[s])) return !1;
      if (e && o instanceof Element) return !1;
      for (s = c; s-- !== 0; )
        if (
          !((l[s] === "_owner" || l[s] === "__v" || l[s] === "__o") && o.$$typeof) &&
          !a(o[l[s]], i[l[s]])
        )
          return !1;
      return !0;
    }
    return o !== o && i !== i;
  }
  return (
    (Gi = function (i, c) {
      try {
        return a(i, c);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw s;
      }
    }),
    Gi
  );
}
var gO = hO();
const bO = Rr(gO);
var mO = [],
  yO = function (t, r, n) {
    n === void 0 && (n = {});
    var a = m.useRef(null),
      o = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || mO,
      },
      i = m.useState({
        styles: {
          popper: { position: o.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      c = i[0],
      s = i[1],
      l = m.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (v) {
            var h = v.state,
              p = Object.keys(h.elements);
            Do.flushSync(function () {
              s({
                styles: md(
                  p.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: md(
                  p.map(function (g) {
                    return [g, h.attributes[g]];
                  }),
                ),
              });
            });
          },
          requires: ["computeStyles"],
        };
      }, []),
      u = m.useMemo(
        function () {
          var f = {
            onFirstUpdate: o.onFirstUpdate,
            placement: o.placement,
            strategy: o.strategy,
            modifiers: [].concat(o.modifiers, [l, { name: "applyStyles", enabled: !1 }]),
          };
          return bO(a.current, f) ? a.current || f : ((a.current = f), f);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, l],
      ),
      d = m.useRef();
    return (
      yd(
        function () {
          d.current && d.current.setOptions(u);
        },
        [u],
      ),
      yd(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || pO,
              v = f(t, r, u);
            return (
              (d.current = v),
              function () {
                v.destroy(), (d.current = null);
              }
            );
          }
        },
        [t, r, n.createPopper],
      ),
      {
        state: d.current ? d.current.state : null,
        styles: c.styles,
        attributes: c.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  },
  _O = function () {},
  wO = function () {
    return Promise.resolve(null);
  },
  kO = [];
function OO(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    o = e.modifiers,
    i = o === void 0 ? kO : o,
    c = e.referenceElement,
    s = e.onFirstUpdate,
    l = e.innerRef,
    u = e.children,
    d = m.useContext(o1),
    f = m.useState(null),
    v = f[0],
    h = f[1],
    p = m.useState(null),
    g = p[0],
    b = p[1];
  m.useEffect(
    function () {
      c1(l, v);
    },
    [l, v],
  );
  var y = m.useMemo(
      function () {
        return {
          placement: r,
          strategy: a,
          onFirstUpdate: s,
          modifiers: [].concat(i, [{ name: "arrow", enabled: g != null, options: { element: g } }]),
        };
      },
      [r, a, s, i, g],
    ),
    O = yO(c || d, v, y),
    w = O.state,
    _ = O.styles,
    S = O.forceUpdate,
    x = O.update,
    A = m.useMemo(
      function () {
        return {
          ref: h,
          style: _.popper,
          placement: w ? w.placement : r,
          hasPopperEscaped:
            w && w.modifiersData.hide ? w.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            w && w.modifiersData.hide ? w.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: _.arrow, ref: b },
          forceUpdate: S || _O,
          update: x || wO,
        };
      },
      [h, b, r, w, _, x, S],
    );
  return i1(u)(A);
}
function SO(e) {
  var t = e.viewportPadding;
  return [
    {
      name: "maxSizeData",
      enabled: !0,
      phase: "read",
      fn: function (n) {
        var a = n.state,
          o = n.name;
        window.visualViewport &&
          (a.modifiersData[o] = {
            viewport: { width: window.visualViewport.width, height: window.visualViewport.height },
          });
      },
    },
    {
      name: "maxSize",
      enabled: !0,
      phase: "beforeWrite",
      requiresIfExists: ["offset", "preventOverflow", "flip"],
      fn: function (n) {
        var a,
          o,
          i,
          c,
          s = n.state,
          l = s.modifiersData.maxSizeData;
        if (
          !(
            typeof (l == null || (a = l.viewport) === null || a === void 0 ? void 0 : a.width) !=
              "number" ||
            typeof (l == null || (o = l.viewport) === null || o === void 0 ? void 0 : o.height) !=
              "number"
          )
        ) {
          var u = l.viewport,
            d = s.modifiersData.popperOffsets,
            f = d === void 0 ? { x: 0, y: 0 } : d,
            v = s.placement.split("-"),
            h = ee(v, 1),
            p = h[0],
            g =
              (i =
                (c = s.modifiersData) === null ||
                c === void 0 ||
                (c = c.offset) === null ||
                c === void 0
                  ? void 0
                  : c[s.placement]) !== null && i !== void 0
                ? i
                : { x: 0, y: 0 },
            b = u.width - 2 * t,
            y = u.height - 2 * t;
          p === "top" && (y = s.rects.reference.y + g.y - t),
            p === "bottom" && (y = u.height - f.y - t),
            p === "left" && (b = s.rects.reference.x + g.x - t),
            p === "right" && (b = u.width - f.x - t),
            (s.styles.popper.maxWidth = "".concat(b, "px")),
            (s.styles.popper.maxHeight = "".concat(y, "px"));
        }
      },
    },
  ];
}
var Ps = 5,
  xO = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: Ps,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function EO() {
  return null;
}
var CO = [0, 8];
function PO(e) {
  var t = e.children,
    r = t === void 0 ? EO : t,
    n = e.offset,
    a = n === void 0 ? CO : n,
    o = e.placement,
    i = o === void 0 ? "bottom-start" : o,
    c = e.referenceElement,
    s = c === void 0 ? void 0 : c,
    l = e.modifiers,
    u = e.strategy,
    d = u === void 0 ? "fixed" : u,
    f = e.shouldFitViewport,
    v = f === void 0 ? !1 : f,
    h = ee(a, 2),
    p = h[0],
    g = h[1],
    b = m.useMemo(
      function () {
        var O = {
            name: "preventOverflow",
            options: { padding: Ps, rootBoundary: v ? "viewport" : "document" },
          },
          w = { name: "offset", options: { offset: [p, g] } },
          _ = v ? SO({ viewportPadding: Ps }) : [];
        return [].concat(xO, [O, w], He(_));
      },
      [p, g, v],
    ),
    y = m.useMemo(
      function () {
        return l == null ? b : [].concat(He(b), He(l));
      },
      [b, l],
    );
  return k.createElement(OO, { modifiers: y, placement: i, strategy: d, referenceElement: s }, r);
}
var Bp = "atlaskit-portal-container",
  qp = "body > .atlaskit-portal-container",
  Up = "atlaskit-portal",
  RO = function (t) {
    var r = document.createElement("div");
    return (r.className = Up), (r.style.zIndex = "".concat(t)), r;
  },
  Vp = function () {
    return document.body;
  },
  Gp = function () {
    var t = document.querySelector(qp);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = Bp),
        (n.style.display = "flex"),
        (r = Vp()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  AO = function (t) {
    Gp().removeChild(t);
  },
  jO = function (t) {
    t.parentElement || Gp().appendChild(t);
  },
  Hp = function () {
    return document !== void 0;
  },
  IO = function (t) {
    if (Hp()) {
      var r = document.createElement("div");
      return (r.className = Up), (r.style.zIndex = "".concat(t)), r;
    }
  },
  DO = function () {
    if (Hp()) {
      var t = document.querySelector(qp);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = Bp),
          (n.style.display = "flex"),
          (r = Vp()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function TO(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useMemo(
      function () {
        return RO(t);
      },
      [t],
    );
  return (
    jO(n),
    m.useEffect(
      function () {
        return function () {
          AO(n);
        };
      },
      [n],
    ),
    Do.createPortal(r, n)
  );
}
var Wp = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function MO(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useState(null),
    a = ee(n, 2),
    o = a[0],
    i = a[1];
  Wp(
    function () {
      var s = IO(t);
      i(s);
      var l = DO();
      if (!(!s || !l))
        return (
          l.appendChild(s),
          function () {
            s && l.removeChild(s), i(null);
          }
        );
    },
    [t],
  );
  var c = k.createElement(m.Suspense, { fallback: null }, r);
  return o ? Do.createPortal(c, o) : null;
}
var LO = function (t) {
    var r = m.useState(!1),
      n = ee(r, 2),
      a = n[0],
      o = n[1],
      i = m.useState(function () {
        return t === "layoutEffect" ? Wp : m.useEffect;
      }),
      c = ee(i, 1),
      s = c[0];
    return (
      s(function () {
        o(!0);
      }, []),
      a
    );
  },
  NO = "akPortalMount",
  $O = "akPortalUnmount",
  Ad = {
    100: "card",
    200: "navigation",
    300: "dialog",
    400: "layer",
    500: "blanket",
    510: "modal",
    600: "flag",
    700: "spotlight",
    9999: "tooltip",
  },
  FO = function (t) {
    return Ad.hasOwnProperty(t) ? Ad[t] : null;
  },
  zO = function (t, r) {
    var n = { layer: FO(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function jd(e, t) {
  var r = zO(e, t);
  window.dispatchEvent(r);
}
var BO = function (t) {
  var r = Number(t);
  m.useEffect(
    function () {
      return (
        jd(NO, r),
        function () {
          jd($O, r);
        }
      );
    },
    [r],
  );
};
function qO(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    o = a === void 0 ? "effect" : a,
    i = LO(o);
  return (
    BO(r),
    de("platform_design_system_team_portal_logic_r18_fix")
      ? k.createElement(MO, { zIndex: r }, n)
      : i
        ? k.createElement(TO, { zIndex: r }, n)
        : null
  );
}
var ga = new Set(),
  Aa = null;
function Id() {
  if (!Aa) {
    Aa = Zo.bindAll(window, [
      { type: "dragend", listener: Hi },
      { type: "pointerdown", listener: Hi },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            Hi();
          };
        })(),
      },
    ]);
    var e = Array.from(ga);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function Hi() {
  var e;
  (e = Aa) === null || e === void 0 || e(), (Aa = null);
  var t = Array.from(ga);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function UO() {
  return Zo.bindAll(window, [
    { type: "dragstart", listener: Id },
    { type: "dragenter", listener: Id },
  ]);
}
var Ja = null;
function VO(e) {
  return (
    Ja || (Ja = UO()),
    ga.add(e),
    e.onRegister({ isDragging: Aa !== null }),
    function () {
      if ((ga.delete(e), ga.size === 0)) {
        var r;
        (r = Ja) === null || r === void 0 || r(), (Ja = null);
      }
    }
  );
}
var ba = null;
function la() {
  ba != null && (window.clearTimeout(ba), (ba = null));
}
function Dd(e, t) {
  la(),
    (ba = window.setTimeout(function () {
      (ba = null), e();
    }, t));
}
var Et = null;
function GO(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(Et && Et.entry === e);
  }
  function n() {
    r() && (la(), (Et = null));
  }
  function a() {
    r() && e.done(), (t = "done"), n();
  }
  function o() {
    r() && e.hide({ isImmediate: !0 }), a();
  }
  function i() {
    if (r()) {
      if (t === "waiting-to-hide") {
        (t = "shown"), la();
        return;
      }
      if (t === "hide-animating") {
        (t = "shown"), la(), e.show({ isImmediate: !1 });
        return;
      }
    }
  }
  function c(v) {
    var h = v.isImmediate;
    if (r()) {
      if (t === "waiting-to-show") {
        o();
        return;
      }
      if (t !== "waiting-to-hide") {
        if (h) {
          o();
          return;
        }
        (t = "waiting-to-hide"),
          Dd(function () {
            (t = "hide-animating"), e.hide({ isImmediate: !1 });
          }, e.delay);
      }
    }
  }
  function s() {
    r() && t === "hide-animating" && a();
  }
  function l() {
    return t === "shown" || t === "waiting-to-hide" || t === "hide-animating";
  }
  function u() {
    return e.source.type === "mouse" ? e.source.mouse : null;
  }
  function d() {
    var v = !!(Et && Et.isVisible());
    Et && (la(), Et.entry.hide({ isImmediate: !0 }), Et.entry.done(), (Et = null)),
      (Et = { entry: e, isVisible: l });
    function h() {
      (t = "shown"), e.show({ isImmediate: v });
    }
    if (v) {
      h();
      return;
    }
    (t = "waiting-to-show"), Dd(h, e.delay);
  }
  d();
  var f = {
    keep: i,
    abort: n,
    isActive: r,
    requestHide: c,
    finishHideAnimation: s,
    mousePosition: u(),
  };
  return f;
}
function HO(e, t) {
  var r = Fw();
  return t ? "".concat(r(e)) : void 0;
}
function Td(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Md(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Td(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Td(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Kp = "tooltipPrimitiveZindex",
  WO = kt({ zindex: "var(".concat(Kp, ")"), cursor: "default" }),
  Yp = m.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      o = t.children,
      i = t.placement,
      c = t.testId,
      s = t.onMouseOut,
      l = t.onMouseOver,
      u = t.id,
      d = Md(Md({}, n), {}, P({}, Kp, ip.tooltip()));
    return ht(
      "div",
      { ref: r, style: d, "data-testid": c ? "".concat(c, "--wrapper") : void 0 },
      ht(
        "div",
        {
          role: "tooltip",
          className: a,
          onMouseOut: s,
          onMouseOver: l,
          css: WO,
          "data-placement": i,
          "data-testid": c,
          id: u,
        },
        o,
      ),
    );
  });
Yp.displayName = "TooltipPrimitive";
function Ld(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Nd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ld(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ld(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Jp = m.forwardRef(function (t, r) {
  var n = t.style,
    a = t.className,
    o = t.children,
    i = t.truncate,
    c = t.placement,
    s = t.testId,
    l = t.onMouseOut,
    u = t.onMouseOver,
    d = t.id;
  return m.createElement(
    Yp,
    {
      ref: r,
      className: T([
        "_2rko1sit _11c8dcr7 _vchhusvi _p12fp3fh _bfhkpioe _syaz1i9p _152tze3t _1e02ze3t _1i4q1hna _85i5v77o _1q51v77o _y4ti12x7 _bozg12x7 _slp31hna",
        i && "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
        a,
      ]),
      placement: c,
      testId: s,
      id: d,
      onMouseOut: l,
      onMouseOver: u,
      style: Nd(
        Nd({}, n),
        {},
        {
          "--_yr7xfv": ye("var(--ds-background-neutral-bold, ".concat(_r, ")")),
          "--_ywovvi": ye("var(--ds-text-inverse, ".concat(Jt, ")")),
        },
      ),
    },
    o,
  );
});
Jp.displayName = "TooltipContainer";
function $d(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function Fd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Kr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Fd(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Fd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var KO = ip.tooltip(),
  zd = { componentName: "tooltip", packageName: "@atlaskit/tooltip", packageVersion: "20.0.6" },
  YO = { top: "bottom", bottom: "top", left: "right", right: "left" },
  JO = function (t) {
    return t.split("-")[0];
  };
function Xp(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    o = a === void 0 ? "bottom" : a,
    i = e.content,
    c = e.truncate,
    s = c === void 0 ? !1 : c,
    l = e.component,
    u = l === void 0 ? Jp : l,
    d = e.tag,
    f = d === void 0 ? "div" : d,
    v = e.testId,
    h = e.delay,
    p = h === void 0 ? 300 : h,
    g = e.onShow,
    b = g === void 0 ? je : g,
    y = e.onHide,
    O = y === void 0 ? je : y,
    w = e.canAppear,
    _ = e.hideTooltipOnClick,
    S = _ === void 0 ? !1 : _,
    x = e.hideTooltipOnMouseDown,
    A = x === void 0 ? !1 : x,
    $ = e.analyticsContext,
    M = e.strategy,
    B = M === void 0 ? "fixed" : M,
    H = e.ignoreTooltipPointerEvents,
    R = H === void 0 ? !1 : H,
    E = e.isScreenReaderAnnouncementDisabled,
    I = E === void 0 ? !1 : E,
    D = n === "mouse" ? o : n,
    N = nu(Kr({ fn: b, action: "displayed", analyticsData: $ }, zd)),
    z = nu(Kr({ fn: O, action: "hidden", analyticsData: $ }, zd)),
    j = m.useRef(null),
    K = m.useState("hide"),
    q = ee(K, 2),
    U = q[0],
    oe = q[1],
    J = m.useRef(null),
    ve = m.useRef(null),
    pe = function (ue) {
      (ve.current = ue), (J.current = ue ? ue.firstElementChild : null);
    },
    _e = m.useCallback(function (V) {
      J.current = V;
    }, []),
    Oe = ra(U),
    De = ra(N),
    he = ra(z),
    Ze = ra(p),
    Ot = ra(w),
    Ve = m.useRef(!1),
    Qe = m.useCallback(function (V) {
      (j.current = V), (Ve.current = !1);
    }, []),
    Pe = m.useCallback(
      function () {
        j.current &&
          (Ve.current && he.current(), (j.current = null), (Ve.current = !1), oe("hide"));
      },
      [he],
    ),
    et = m.useCallback(
      function () {
        j.current && (j.current.abort(), Ve.current && he.current(), (j.current = null));
      },
      [he],
    );
  m.useEffect(
    function () {
      return function () {
        j.current && et();
      };
    },
    [et],
  );
  var tt = m.useRef(!1);
  m.useEffect(function () {
    return VO({
      onRegister: function (ue) {
        var Ut = ue.isDragging;
        tt.current = Ut;
      },
      onDragStart: function () {
        var ue;
        (ue = j.current) === null || ue === void 0 || ue.requestHide({ isImmediate: !0 }),
          (tt.current = !0);
      },
      onDragEnd: function () {
        tt.current = !1;
      },
    });
  }, []);
  var Ge = m.useCallback(
      function (V) {
        var ue;
        if (!tt.current) {
          if ((j.current && !j.current.isActive() && et(), j.current && j.current.isActive())) {
            j.current.keep();
            return;
          }
          if (!(Ot.current && !((ue = Ot.current) !== null && ue !== void 0 && ue.call(Ot)))) {
            var Ut = {
                source: V,
                delay: Ze.current,
                show: function (Lr) {
                  var hn = Lr.isImmediate;
                  Ve.current || ((Ve.current = !0), De.current()),
                    oe(hn ? "show-immediate" : "fade-in");
                },
                hide: function (Lr) {
                  var hn = Lr.isImmediate;
                  oe(hn ? "hide" : "before-fade-out");
                },
                done: Pe,
              },
              oi = GO(Ut);
            Qe(oi);
          }
        }
      },
      [Ot, Ze, Pe, Qe, et, De],
    ),
    vt = m.useCallback(
      function () {
        var V;
        (V = j.current) === null || V === void 0 || V.requestHide({ isImmediate: !0 });
      },
      [j],
    );
  zk({ onClose: vt, isDisabled: U === "hide" || U === "fade-out" }),
    m.useEffect(
      function () {
        if (U === "hide") return je;
        U === "before-fade-out" && oe("fade-out");
        var V = Zo.bind(window, {
          type: "scroll",
          listener: function () {
            j.current && j.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return V;
      },
      [U],
    );
  var Ie = m.useCallback(
      function () {
        A && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [A],
    ),
    ie = m.useCallback(
      function () {
        S && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    xe = m.useCallback(
      function (V) {
        if (!(ve.current && V.target === ve.current) && !V.defaultPrevented) {
          V.preventDefault();
          var ue =
            n === "mouse"
              ? { type: "mouse", mouse: $d({ left: V.clientX, top: V.clientY }) }
              : { type: "keyboard" };
          Ge(ue);
        }
      },
      [n, Ge],
    ),
    Re = m.useCallback(function (V) {
      (ve.current && V.target === ve.current) ||
        V.defaultPrevented ||
        (V.preventDefault(), j.current && j.current.requestHide({ isImmediate: !1 }));
    }, []),
    Bt =
      n === "mouse"
        ? function (V) {
            var ue;
            (ue = j.current) !== null &&
              ue !== void 0 &&
              ue.isActive() &&
              (j.current.mousePosition = $d({ left: V.clientX, top: V.clientY }));
          }
        : void 0,
    Tr = m.useCallback(function () {
      if (j.current && j.current.isActive()) {
        j.current.keep();
        return;
      }
    }, []),
    me = m.useCallback(
      function () {
        try {
          if (
            J.current &&
            !J.current.matches(":focus-visible") &&
            de("platform-tooltip-focus-visible")
          )
            return;
        } catch {}
        Ge({ type: "keyboard" });
      },
      [Ge],
    ),
    nr = m.useCallback(function () {
      j.current && j.current.requestHide({ isImmediate: !1 });
    }, []),
    St = m.useCallback(
      function (V) {
        V === "exiting" &&
          Oe.current === "fade-out" &&
          j.current &&
          j.current.finishHideAnimation();
      },
      [Oe],
    ),
    qt = f,
    Mr = U !== "hide" && !!i,
    xt = !I && Mr,
    Fa = U !== "hide" && U !== "fade-out",
    uh = m.useCallback(function () {
      var V;
      (V = j.current) === null || V === void 0 || V.requestHide({ isImmediate: !0 });
    }, []);
  Vk({
    isOpen: Mr && (de("platform_dst_open_layer_observer_close_layers") ? Fa : !0),
    onClose: uh,
  });
  var sc = function () {
      var ue;
      if (n === "mouse" && (ue = j.current) !== null && ue !== void 0 && ue.mousePosition) {
        var Ut;
        return (Ut = j.current) === null || Ut === void 0 ? void 0 : Ut.mousePosition;
      }
      return J.current || void 0;
    },
    pn = HO("tooltip", xt),
    ai = {
      onMouseOver: xe,
      onMouseOut: Re,
      onMouseMove: Bt,
      onMouseDown: Ie,
      onClick: ie,
      onFocus: me,
      onBlur: nr,
    };
  v && (ai["data-testid"] = "".concat(v, "--container"));
  var cc = typeof t == "function";
  m.useEffect(
    function () {
      if (!cc) {
        var V = J.current;
        if (!(!V || !pn))
          return (
            V.setAttribute("aria-describedby", pn),
            function () {
              return V.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [cc, pn],
  );
  var lc = xt
    ? k.createElement(
        "span",
        { "data-testid": v ? "".concat(v, "-hidden") : void 0, hidden: !0, id: pn },
        typeof i == "function" ? i({}) : i,
      )
    : null;
  return k.createElement(
    k.Fragment,
    null,
    typeof t == "function"
      ? k.createElement(
          k.Fragment,
          null,
          t(Kr(Kr({}, ai), {}, { "aria-describedby": pn, ref: _e })),
          lc,
        )
      : k.createElement(qt, Y({}, ai, { ref: pe, role: "presentation" }), t, lc),
    Mr
      ? k.createElement(
          qO,
          { zIndex: KO },
          k.createElement(PO, { placement: D, referenceElement: sc(), strategy: B }, function (V) {
            var ue = V.ref,
              Ut = V.style,
              oi = V.update,
              ii = V.placement,
              Lr = n === "mouse" ? void 0 : YO[JO(ii)];
            return k.createElement(
              jp,
              { appear: !0 },
              Fa &&
                k.createElement(
                  a1,
                  {
                    distance: "constant",
                    entranceDirection: Lr,
                    exitDirection: Lr,
                    onFinish: St,
                    duration: U !== "show-immediate" ? "medium" : "none",
                  },
                  function (hn) {
                    var dh = hn.className;
                    return k.createElement(
                      u,
                      {
                        ref: ue,
                        className: "Tooltip ".concat(dh),
                        style: Kr(Kr({}, Ut), R && { pointerEvents: "none" }),
                        truncate: s,
                        placement: D,
                        testId: sc() ? v : v && "".concat(v, "--unresolved"),
                        onMouseOut: Re,
                        onMouseOver: Tr,
                      },
                      typeof i == "function" ? i({ update: oi }) : i,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
Xp.displayName = "Tooltip";
var XO = [
    "content",
    "inlineStyles",
    "testId",
    "isRanking",
    "innerRef",
    "isSortable",
    "sortOrder",
    "onClick",
    "headCellId",
    "activeSortButtonId",
    "ascendingSortTooltip",
    "descendingSortTooltip",
    "buttonAriaRoleDescription",
    "isIconOnlyHeader",
  ],
  aa = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  ZO = { headCellContainer: "_1e0c1txw _4cvr1h6o" },
  Zp = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var o = t.innerRef,
      i = t.isSortable,
      c = t.sortOrder,
      s = t.onClick,
      l = t.headCellId,
      u = t.activeSortButtonId,
      d = t.ascendingSortTooltip,
      f = d === void 0 ? "Sort ascending" : d,
      v = t.descendingSortTooltip,
      h = v === void 0 ? "Sort descending" : v,
      p = t.buttonAriaRoleDescription,
      g = p === void 0 ? "Sort button" : p,
      b = t.isIconOnlyHeader,
      y = re(t, XO),
      O = m.useState(!1),
      w = ee(O, 2),
      _ = w[0],
      S = w[1],
      x = m.useState(!1),
      A = ee(x, 2),
      $ = A[0],
      M = A[1],
      B = l === u || c !== void 0,
      H = _ || B || $,
      R = H && b,
      E = !b || H || (b && !$),
      I = m.useCallback(
        function () {
          M == null || M(!0);
        },
        [M],
      ),
      D = m.useCallback(
        function () {
          M == null || M(!1);
        },
        [M],
      ),
      N = m.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      z = m.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      j = k.createElement(
        Xo,
        { xcss: ZO.headCellContainer, onMouseEnter: N, onMouseLeave: z, onFocus: I, onBlur: D },
        k.createElement(
          Xp,
          { content: c === Cr ? f : h },
          k.createElement(
            rp,
            { onClick: s, xcss: aa.buttonWrapper, "aria-roledescription": g },
            k.createElement(
              Ro,
              { xcss: R ? aa.hideIconHeaderWrapper : aa.visibleHeaderWrapper },
              k.createElement(
                Us,
                { size: "small", color: "color.text.subtle", weight: "bold", maxLines: 1 },
                r,
              ),
            ),
            E &&
              k.createElement(
                Ro,
                { xcss: H ? aa.sortIconVisibleWrapper : aa.sortIconHiddenWrapper },
                c === Cr
                  ? k.createElement($k, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : k.createElement(Mk, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return k.createElement(
      xp,
      Y(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof o != "string" ? o : null,
        },
        y,
        { isSortable: i, sortOrder: c },
      ),
      i ? j : r,
    );
  },
  QO = ["isRanking", "refHeight", "refWidth"];
function eS(e, t, r) {
  return (t = Z(t)), qe(e, Qp() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r));
}
function Qp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Qp = function () {
    return !!e;
  })();
}
var tS = (function (e) {
    function t() {
      return ge(this, t), eS(this, t, arguments);
    }
    return (
      Ue(t, e),
      be(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var o = n.refWidth,
              i = re(n, QO),
              c = Rv(a, o);
            return k.createElement(Zp, Y({ inlineStyles: c }, i));
          },
        },
      ])
    );
  })(k.Component),
  rS = Cp(tS),
  nS = ["content", "inlineStyles", "testId", "isRanking", "innerRef", "isSortable", "onClick"],
  eh = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var o = t.innerRef,
      i = t.isSortable,
      c = t.onClick,
      s = re(t, nS);
    return k.createElement(
      xp,
      Y(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof o != "string" ? o : null,
        },
        s,
        { onClick: c, isSortable: i },
      ),
      i
        ? k.createElement("button", { type: "button", "aria-roledescription": "Sort button" }, r)
        : r,
    );
  },
  aS = ["isRanking", "refHeight", "refWidth"];
function oS(e, t, r) {
  return (t = Z(t)), qe(e, th() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r));
}
function th() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (th = function () {
    return !!e;
  })();
}
var iS = (function (e) {
    function t() {
      return ge(this, t), oS(this, t, arguments);
    }
    return (
      Ue(t, e),
      be(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var o = n.refWidth,
              i = re(n, aS),
              c = Rv(a, o);
            return k.createElement(eh, Y({ inlineStyles: c }, i));
          },
        },
      ])
    );
  })(k.Component),
  sS = Cp(iS),
  cS = ["cells"],
  lS = [
    "ascendingSortTooltip",
    "buttonAriaRoleDescription",
    "colSpan",
    "content",
    "descendingSortTooltip",
    "isIconOnlyHeader",
    "isSortable",
    "key",
    "shouldTruncate",
    "testId",
    "width",
  ];
function uS(e, t, r) {
  return (t = Z(t)), qe(e, rh() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r));
}
function rh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (rh = function () {
    return !!e;
  })();
}
var dS = (function (e) {
    function t(r) {
      var n;
      return ge(this, t), (n = uS(this, t, [r])), (n.state = { activeSortButtonId: null }), n;
    }
    return (
      Ue(t, e),
      be(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            ko(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              ko(n.sortKey, n.head);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              a = this.props,
              o = a.head,
              i = a.sortKey,
              c = a.sortOrder,
              s = a.isFixedSize,
              l = a.onSort,
              u = a.isRanking,
              d = a.isRankable,
              f = a.testId,
              v = this.state.activeSortButtonId;
            if (!o) return null;
            var h = d ? sS : eh,
              p = d ? rS : Zp,
              g = o.cells,
              b = re(o, cS);
            return k.createElement(
              jk,
              Y({}, b, { isRanking: u, testId: f && "".concat(f, "--head") }),
              k.createElement(
                "tr",
                null,
                g.map(function (y, O) {
                  var w = y.ascendingSortTooltip,
                    _ = y.buttonAriaRoleDescription,
                    S = y.colSpan,
                    x = y.content,
                    A = y.descendingSortTooltip,
                    $ = y.isIconOnlyHeader,
                    M = y.isSortable,
                    B = y.key,
                    H = y.shouldTruncate,
                    R = y.testId,
                    E = y.width,
                    I = re(y, lS),
                    D = "head-cell-".concat(O),
                    N = function () {
                      n.setState({ activeSortButtonId: D }), M && l(y)();
                    };
                  return de("platform-component-visual-refresh")
                    ? k.createElement(
                        p,
                        Y(
                          {
                            colSpan: S,
                            content: x,
                            isFixedSize: s,
                            isIconOnlyHeader: $,
                            isSortable: !!M,
                            isRanking: u,
                            key: B || O,
                            headCellId: D,
                            activeSortButtonId: v,
                            onClick: N,
                            testId: R || f,
                            shouldTruncate: H,
                            sortOrder: B === i ? c : void 0,
                            width: E,
                            ascendingSortTooltip: w,
                            descendingSortTooltip: A,
                            buttonAriaRoleDescription: _,
                          },
                          I,
                        ),
                      )
                    : k.createElement(
                        h,
                        Y(
                          {
                            colSpan: S,
                            content: x,
                            isFixedSize: s,
                            isSortable: !!M,
                            isRanking: u,
                            key: B || O,
                            onClick: M ? l(y) : void 0,
                            testId: R || f,
                            shouldTruncate: H,
                            sortOrder: B === i ? c : void 0,
                            width: E,
                          },
                          I,
                        ),
                      );
                }),
              ),
            );
          },
        },
      ])
    );
  })(k.Component),
  fS = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function vS(e) {
  switch (e) {
    case Eo:
      return Cr;
    case Cr:
      return Eo;
    default:
      return e;
  }
}
var pS = function (t) {
    var r = t.caption,
      n = t.head,
      a = t.highlightedRowIndex,
      o = t.rows,
      i = t.sortKey,
      c = t.sortOrder,
      s = t.loadingLabel,
      l = t.onPageRowsUpdate,
      u = t.testId,
      d = t.totalRows,
      f = t.label,
      v = t.isLoading,
      h = v === void 0 ? !1 : v,
      p = t.isFixedSize,
      g = p === void 0 ? !1 : p,
      b = t.rowsPerPage,
      y = b === void 0 ? 1 / 0 : b,
      O = t.onSetPage,
      w = O === void 0 ? je : O,
      _ = t.onSort,
      S = _ === void 0 ? je : _,
      x = t.page,
      A = x === void 0 ? 1 : x,
      $ = t.emptyView,
      M = t.isRankable,
      B = M === void 0 ? !1 : M,
      H = t.isRankingDisabled,
      R = H === void 0 ? !1 : H,
      E = t.onRankStart,
      I = E === void 0 ? je : E,
      D = t.onRankEnd,
      N = D === void 0 ? je : D,
      z = t.loadingSpinnerSize,
      j = t.paginationi18n,
      K =
        j === void 0
          ? {
              prev: de("eax-1131_fix_a11y_issues_global_issues_settings")
                ? "Previous Page"
                : "Previous",
              next: de("eax-1131_fix_a11y_issues_global_issues_settings") ? "Next Page" : "Next",
              label: "Pagination",
              pageLabel: "Page",
            }
          : j,
      q = m.useState(!1),
      U = ee(q, 2),
      oe = U[0],
      J = U[1],
      ve = m.useRef(null),
      pe = rn({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.1.1",
      }),
      _e = rn({
        fn: N,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.1.1",
      });
    m.useEffect(
      function () {
        ko(i, n), Em(n);
      },
      [i, n],
    );
    var Oe = function (xe) {
        return function () {
          var Re = xe.key;
          if (Re) {
            if (pe && B && Re === i && c === Eo) {
              pe({ key: null, sortOrder: null, item: xe });
              return;
            }
            var Bt = Re !== i ? Cr : vS(c);
            pe && pe({ key: Re, item: xe, sortOrder: Bt });
          }
        };
      },
      De = function (xe, Re) {
        w(xe, Re);
      },
      he = function (xe) {
        J(!0), I(xe);
      },
      Ze = function (xe) {
        J(!1), _e(xe);
      },
      Ot = function () {
        return z || (Pv(o || [], A, y).length > 2 ? Co : By);
      },
      Ve = function () {
        return h ? k.createElement(Qy, { testId: u }) : $ && k.createElement(e_, { testId: u }, $);
      },
      Qe = o && o.length,
      Pe,
      et = !1;
    d && Number.isInteger(d) && y && Qe && Qe <= d
      ? ((Pe = Math.ceil(d / y)), (et = !0))
      : (Pe = Qe && y ? Math.ceil(Qe / y) : 0),
      (Pe = Pe < 1 ? 1 : Pe);
    var tt = A > Pe ? Pe : A,
      Ge = !!Qe,
      vt = Ot(),
      Ie = Ve();
    return k.createElement(
      k.Fragment,
      null,
      k.createElement(
        Kv,
        {
          isLoading: h && Ge,
          spinnerSize: vt,
          targetRef: function () {
            return ve.current;
          },
          testId: u,
          loadingLabel: s,
        },
        k.createElement(
          Jy,
          { isFixedSize: g, "aria-label": f, hasDataRow: Ge, testId: u, isLoading: h },
          !!r && k.createElement(Xy, null, r),
          n &&
            k.createElement(dS, {
              head: n,
              onSort: Oe,
              sortKey: i,
              sortOrder: c,
              isRanking: oe,
              isRankable: B,
              testId: u,
            }),
          Ge &&
            k.createElement(gS, {
              ref: ve,
              highlightedRowIndex: a,
              rows: o,
              head: n,
              sortKey: i,
              sortOrder: c,
              rowsPerPage: y,
              page: tt,
              isFixedSize: g || !1,
              onPageRowsUpdate: l,
              isTotalPagesControlledExternally: et,
              testId: u,
              isRankable: B,
              isRanking: oe,
              onRankStart: he,
              onRankEnd: Ze,
              isRankingDisabled: R || h || !1,
            }),
        ),
      ),
      Pe <= 1
        ? null
        : k.createElement(
            Zy,
            { testId: u },
            k.createElement(Pk, {
              value: tt,
              onChange: De,
              total: Pe,
              i18n: K,
              isDisabled: h,
              testId: u,
            }),
          ),
      !Ge &&
        Ie &&
        k.createElement(Hv, { isLoading: h, spinnerSize: Co, testId: u, loadingLabel: s }, Ie),
    );
  },
  hS = m.lazy(function () {
    return Am(
      () => import("./body-fFk08U1Y.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  gS = m.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      o = t.isRanking,
      i = t.onRankStart,
      c = t.onRankEnd,
      s = t.isRankingDisabled,
      l = re(t, fS),
      u = a && !l.sortKey,
      d = m.useState(!1),
      f = ee(d, 2),
      v = f[0],
      h = f[1];
    m.useEffect(
      function () {
        u && h(!0);
      },
      [u],
    );
    var p = k.createElement(h_, Y({ ref: r }, l));
    return u && v
      ? k.createElement(
          b_,
          { fallback: p },
          k.createElement(
            m.Suspense,
            { fallback: p },
            k.createElement(
              hS,
              Y({ ref: r }, l, {
                isRanking: o,
                onRankStart: i,
                onRankEnd: c,
                isRankingDisabled: s,
              }),
            ),
          ),
        )
      : p;
  });
function bS(e, t, r) {
  return (t = Z(t)), qe(e, nh() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r));
}
function nh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (nh = function () {
    return !!e;
  })();
}
var ah = (function (e) {
  function t() {
    var r;
    ge(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = bS(this, t, [].concat(a))),
      P(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      P(r, "onSetPageHandler", function (i, c) {
        var s = r.props.onSetPage;
        s && (s(i, c), r.setState({ page: i }));
      }),
      P(r, "onSortHandler", function (i, c) {
        var s = i.key,
          l = i.item,
          u = i.sortOrder,
          d = r.props.onSort;
        d && (d({ key: s, item: l, sortOrder: u }, c), r.setState({ sortKey: s, sortOrder: u }));
      }),
      P(r, "onRankEndIfExistsHandler", function (i) {
        r.props.onRankEnd && r.props.onRankEnd(i);
      }),
      P(r, "onRankEndHandler", function (i) {
        var c = i.destination,
          s = r.state,
          l = s.rows,
          u = s.page,
          d = r.props.rowsPerPage;
        if (!c || !l) {
          r.onRankEndIfExistsHandler(i);
          return;
        }
        var f = Cm(i, l, u, d);
        r.setState({ rows: f }), r.onRankEndIfExistsHandler(i);
      }),
      r
    );
  }
  return (
    Ue(t, e),
    be(t, [
      {
        key: "UNSAFE_componentWillReceiveProps",
        value: function (n) {
          var a = n.sortKey || this.state.sortKey,
            o = n.sortOrder || this.state.sortOrder,
            i = n.page || this.state.page;
          this.setState({ page: i, sortKey: a, sortOrder: o, rows: n.rows });
        },
      },
      {
        key: "render",
        value: function () {
          var n = this.state,
            a = n.page,
            o = n.sortKey,
            i = n.sortOrder,
            c = n.rows,
            s = this.props,
            l = s.caption,
            u = s.emptyView,
            d = s.head,
            f = s.highlightedRowIndex,
            v = s.loadingSpinnerSize,
            h = s.isLoading,
            p = s.loadingLabel,
            g = s.isFixedSize,
            b = s.isRankable,
            y = s.isRankingDisabled,
            O = s.rowsPerPage,
            w = s.paginationi18n,
            _ = s.onRankStart,
            S = s.onPageRowsUpdate,
            x = s.testId,
            A = s.label;
          return k.createElement(pS, {
            paginationi18n: w,
            caption: l,
            emptyView: u,
            head: d,
            highlightedRowIndex: f,
            loadingSpinnerSize: v,
            isLoading: h,
            loadingLabel: p,
            isFixedSize: g,
            onSetPage: this.onSetPageHandler,
            onSort: this.onSortHandler,
            page: a,
            rows: c,
            rowsPerPage: O,
            sortKey: o,
            sortOrder: i,
            isRankable: b,
            isRankingDisabled: y,
            onRankEnd: this.onRankEndHandler,
            onRankStart: _,
            onPageRowsUpdate: S,
            testId: x,
            label: A,
          });
        },
      },
    ])
  );
})(k.Component);
P(ah, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: je,
  onSort: je,
  rowsPerPage: 1 / 0,
});
const mS = (e) => {
    const t = [];
    return (
      t.push({ key: "id", content: "ID", isSortable: !1, width: 25 }),
      t.push({ key: "testDateColumn", content: "example Datetime", isSortable: !1, width: 25 }),
      t.push({ key: "testNameColumn", content: "Name", isSortable: !1, width: 25 }),
      t.push({ key: "version", content: "Version", isSortable: !1, width: 25 }),
      t.push({ key: "Action", content: "Action", isSortable: !1, width: 25 }),
      t
    );
  },
  yS = (e) => ({ cells: mS() });
function _S(e) {
  return function (t) {
    e.forEach(function (r) {
      typeof r == "function" ? r(t) : r !== null && (r.current = t);
    });
  };
}
var oh = m.createContext(void 0),
  wS = function () {
    var t = m.useContext(oh);
    if (t) {
      if (t.appearance === "navigation") {
        var r = {
          spacing: "default",
          appearance: "subtle",
          isDisabled: !1,
          isActiveOverSelected: !1,
          isNavigationSplitButton: !0,
          isHighlighted: t.isHighlighted,
        };
        return r;
      }
      var n = {
        spacing: t.spacing,
        appearance: t.appearance,
        isDisabled: t.isDisabled,
        isActiveOverSelected: !0,
        isNavigationSplitButton: !1,
        isHighlighted: !1,
      };
      return n;
    }
  };
function Yt(e) {
  e.preventDefault(), e.stopPropagation();
}
var kS = 9;
function Bd(e) {
  e.keyCode !== kS && Yt(e);
}
function OS(e, t) {
  return e
    ? {
        onMouseDownCapture: Yt,
        onMouseUpCapture: Yt,
        onKeyDownCapture: Bd,
        onKeyUpCapture: Bd,
        onTouchStartCapture: Yt,
        onTouchEndCapture: Yt,
        onPointerDownCapture: Yt,
        onPointerUpCapture: Yt,
        onClickCapture: Yt,
        onClick: Yt,
      }
    : t;
}
function SS(e) {
  switch (e) {
    case "compact":
      return "small";
    default:
      return "medium";
  }
}
function xS(e) {
  var t = e.appearance,
    r = e.isDisabled,
    n = e.isSelected;
  return r || n
    ? "inherit"
    : t === "primary" || t === "danger" || t === "discovery"
      ? "invert"
      : "inherit";
}
function ES(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isDisabled,
    a = e.isSelected,
    o = e.testId;
  return k.createElement(Bs, {
    size: SS(r),
    appearance: xS({ appearance: t, isDisabled: n, isSelected: a }),
    testId: o ? "".concat(o, "--loading-spinner") : void 0,
  });
}
var CS = [
    "appearance",
    "autoFocus",
    "isDisabled",
    "isLoading",
    "isSelected",
    "isIconButton",
    "isCircle",
    "hasIconBefore",
    "hasIconAfter",
    "shouldFitContainer",
    "spacing",
    "ariaLabel",
    "ariaLabelledBy",
    "children",
    "interactionName",
    "onClick",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onClickCapture",
    "testId",
    "analyticsContext",
    "componentName",
    "role",
    "onMouseOver",
    "onMouseOut",
    "onFocus",
    "onBlur",
    "onMouseMove",
    "type",
  ],
  PS = ["className", "css", "as", "style"],
  qd = ", Loading",
  Le = {
    base: "_2rkosqtm _11c82smr _v5649dqc _189eidpf _1rjc12x7 _1e0c116y _vchhusvi _1bsb1wug _p12f1osq _kqswh2mm _4cvr1q9y _1bah1h6o _gy1p1b66 _1o9zidpf _4t3iviql _k48p1wq8 _y4tiutpp _bozgutpp _y3gn1h6o _s7n4nkob _14mj1kw7 _9v7aze3t _1tv3nqa1 _39yqe4h9 _11fnglyw _18postnw",
    linkDecorationUnset:
      "_4bfu1r31 _1hmsglyw _ajmmnqa1 _1a3b1r31 _4fprglyw _5goinqa1 _9oik1r31 _1bnxglyw _jf4cnqa1 _1nrm1r31 _c2waglyw _1iohnqa1",
    disabled: "_80om13gf _bfhk1fvb _syaz1lh4 _aetrglyw _irr31fvb _30l31lh4 _1di61fvb _9h8h1lh4",
    spacingCompact: "_1rjcv77o _gy1p1b66 _4t3i1k8s _y4tiutpp _bozgutpp _s7n4nkob",
    circle: "_2rko14q2",
    fullWidth: "_1bsb1osq",
    loading: "_80om15jw",
    iconButton: "_4t3iviql _1bsbviql _y4tize3t _bozgze3t",
    iconButtonCompact: "_4t3i1k8s _1bsb1k8s",
    buttonIconBefore: "_bozgu2gc",
    buttonIconAfter: "_y4tiu2gc",
    splitButton: "_g0pbb4wl",
    loadingOverlay:
      "_1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _u7coze3t _152tze3t _rjxpze3t _1e02ze3t",
    navigationSplitButton: "_1bsb1tcg _bfhksm61 _y4ti12x7 _bozg12x7",
  },
  Xa = {
    root: "_bfhk1j54 _syaz10s3 _105310s3 _f8pj10s3 _30l310s3 _9h8h10s3",
    rootRefreshed:
      "_bfhksm61 _syaz1gjq _8l3mmuej _aetrb3bt _10531gjq _f8pj1gjq _30l31gjq _9h8h1gjq",
    interactive: "_irr3yw9d _30l310s3 _1di6ih13 _9h8h10s3",
    interactiveRefreshed: "_irr3166n _30l31gjq _1di61dty _9h8h1gjq",
  },
  Ud = {
    root: "_bfhkomb0 _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31wqm _9h8h15cr _1di617hq",
  },
  Vd = {
    root: "_bfhk1ikc _syazal3n _1053al3n _f8pjal3n _30l3al3n _9h8hal3n",
    interactive: "_30l3al3n _irr31j43 _9h8hal3n _1di6h4op",
  },
  Gd = {
    root: "_bfhk1v7l _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31rwk _9h8h15cr _1di6yycf",
  },
  Hd = {
    root: "_bfhk1vbi _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr37gr8 _9h8h15cr _1di61wu2",
  },
  Za = {
    root: "_bfhkqtfy _syaz10s3 _105310s3 _f8pj10s3 _30l310s3 _9h8h10s3",
    rootRefreshed: "_bfhkqtfy _syaz1gjq _10531gjq _f8pj1gjq _30l31gjq _9h8h1gjq",
    interactive: "_irr34mfv _30l310s3 _1di619qy _9h8h10s3",
    interactiveRefreshed: "_irr34mfv _30l31gjq _1di619qy _9h8h1gjq",
  },
  yr = {
    root: "_bfhk7btw _syaz1pke _10531pke _f8pj1pke _30l31pke _9h8h1pke",
    rootRefreshed:
      "_bfhkfg4m _syaz1ldt _8l3mcoux _aetrb3bt _10531ldt _f8pj1ldt _30l31ldt _9h8h1ldt",
    insideSplitButton: "_1pbycs5v",
    interactive: "_irr3t71w _30l31pke _1di6yssv _9h8h1pke",
    warning: "_bfhkvdtc _syaz16q2 _30l31pke _irr3vdtc _9h8h1pke _1di6vdtc",
    danger: "_bfhkbeib _syaz1pke _30l31pke _irr3beib _9h8h1pke _1di6beib",
    discovery: "_bfhk1g49 _syaz1pke _30l31pke _irr31g49 _9h8h1pke _1di61g49",
  },
  RS = k.forwardRef(function (e, t) {
    var r = e.appearance,
      n = e.autoFocus,
      a = n === void 0 ? !1 : n,
      o = e.isDisabled,
      i = o === void 0 ? !1 : o,
      c = e.isLoading,
      s = c === void 0 ? !1 : c,
      l = e.isSelected,
      u = l === void 0 ? !1 : l,
      d = e.isIconButton,
      f = d === void 0 ? !1 : d,
      v = e.isCircle,
      h = v === void 0 ? !1 : v,
      p = e.hasIconBefore,
      g = p === void 0 ? !1 : p,
      b = e.hasIconAfter,
      y = b === void 0 ? !1 : b,
      O = e.shouldFitContainer,
      w = O === void 0 ? !1 : O,
      _ = e.spacing,
      S = _ === void 0 ? "default" : _,
      x = e.ariaLabel,
      A = e.ariaLabelledBy,
      $ = e.children,
      M = e.interactionName,
      B = e.onClick,
      H = e.onMouseDown,
      R = e.onMouseDownCapture,
      E = e.onMouseUp,
      I = e.onMouseUpCapture,
      D = e.onKeyDown,
      N = e.onKeyDownCapture,
      z = e.onKeyUp,
      j = e.onKeyUpCapture,
      K = e.onTouchStart,
      q = e.onTouchStartCapture,
      U = e.onTouchEnd,
      oe = e.onTouchEndCapture,
      J = e.onPointerDown,
      ve = e.onPointerDownCapture,
      pe = e.onPointerUp,
      _e = e.onPointerUpCapture,
      Oe = e.onClickCapture,
      De = e.testId,
      he = e.analyticsContext,
      Ze = e.componentName,
      Ot = e.role,
      Ve = e.onMouseOver,
      Qe = e.onMouseOut,
      Pe = e.onFocus,
      et = e.onBlur,
      tt = e.onMouseMove,
      Ge = e.type,
      vt = re(e, CS),
      Ie = m.useRef(null),
      ie = wS(),
      xe = $w(),
      Re = !!ie,
      Bt = (ie == null ? void 0 : ie.isNavigationSplitButton) || !1,
      Tr = (ie == null ? void 0 : ie.appearance) === "default",
      me =
        Tr && de("platform-component-visual-refresh")
          ? "subtle"
          : r || (ie == null ? void 0 : ie.appearance) || "default",
      nr = (ie == null ? void 0 : ie.spacing) || S,
      St = (ie == null ? void 0 : ie.isDisabled) || i,
      qt = !St && !s,
      Mr = St || s,
      xt = u && !St;
    wp(Ie, a), vt.className, vt.css, vt.as, vt.style;
    var Fa = re(vt, PS);
    return k.createElement(
      rp,
      Y(
        {},
        Fa,
        {
          componentName: Ze || "button",
          analyticsContext: he,
          role: Ot,
          ref: _S([Ie, t]),
          xcss: ep(
            Le.base,
            me === "default" &&
              (de("platform-component-visual-refresh") ? Xa.rootRefreshed : Xa.root),
            me === "default" &&
              qt &&
              (de("platform-component-visual-refresh") ? Xa.interactiveRefreshed : Xa.interactive),
            me === "primary" && Ud.root,
            me === "primary" && qt && Ud.interactive,
            me === "warning" && Vd.root,
            me === "warning" && qt && Vd.interactive,
            me === "danger" && Gd.root,
            me === "danger" && qt && Gd.interactive,
            me === "discovery" && Hd.root,
            me === "discovery" && qt && Hd.interactive,
            me === "subtle" &&
              (de("platform-component-visual-refresh") ? Za.rootRefreshed : Za.root),
            me === "subtle" &&
              qt &&
              (de("platform-component-visual-refresh") ? Za.interactiveRefreshed : Za.interactive),
            Le.linkDecorationUnset,
            xt && (de("platform-component-visual-refresh") ? yr.rootRefreshed : yr.root),
            xt && Re && yr.insideSplitButton,
            xt && qt && yr.interactive,
            xt && me === "danger" && yr.danger,
            xt && me === "warning" && yr.warning,
            xt && me === "discovery" && yr.discovery,
            St && Le.disabled,
            h && !Re && Le.circle,
            nr === "compact" && Le.spacingCompact,
            g && Le.buttonIconBefore,
            w && Le.fullWidth,
            y && Le.buttonIconAfter,
            f && Le.iconButton,
            f && nr === "compact" && Le.iconButtonCompact,
            s && Le.loading,
            Re && Le.splitButton,
            Bt && Le.navigationSplitButton,
          ),
          isDisabled: Mr,
          "aria-label": s && x && !A ? "".concat(x, " ").concat(qd) : x,
          "aria-labelledby": s && A ? "".concat(A, " ").concat(xe) : A,
          onClick: B,
        },
        OS(Mr, {
          onMouseDownCapture: R,
          onMouseUpCapture: I,
          onKeyDownCapture: N,
          onKeyUpCapture: j,
          onTouchStartCapture: q,
          onTouchEndCapture: oe,
          onPointerDownCapture: ve,
          onPointerUpCapture: _e,
          onClickCapture: Oe,
        }),
        {
          testId: De,
          onMouseOver: Ve,
          onFocus: Pe,
          onMouseMove: tt,
          onBlur: et,
          type: Ge,
          interactionName: M,
          onMouseDown: H,
          onMouseUp: E,
          onKeyDown: D,
          onMouseOut: Qe,
          onKeyUp: z,
          onTouchStart: K,
          onTouchEnd: U,
          onPointerDown: J,
          onPointerUp: pe,
        },
      ),
      k.createElement(
        oh.Provider,
        { value: void 0 },
        $,
        s &&
          k.createElement(
            "span",
            { className: T([Le.loadingOverlay]) },
            ES({ spacing: nr, appearance: me, isDisabled: St, isSelected: xt, testId: De }),
          ),
        s && (A || !x) && k.createElement(Vs, { id: xe }, qd),
      ),
    );
  }),
  Yr = {
    text: "_1reo15vq _18m915vq _16jlkb7n _1o9zkb7n _1bto1l2s _o5721q9c",
    icon: "_1e0c1txw _16jlidpf _1o9zidpf _1wpz1h6o _1wybidpf _vwz4idpf _uiztglyw",
    beforeIcon: "_1he91b66 _w795v77o",
    afterIcon: "_1he9v77o _w7951b66",
    common: "_v564g17y",
    fade: "_tzy4idpf",
  },
  Wi = function (t) {
    var r = t.children,
      n = t.type,
      a = n === void 0 ? "text" : n,
      o = t.isLoading,
      i = t.position;
    return k.createElement(
      "span",
      {
        className: T([
          Yr.common,
          a === "text" && Yr.text,
          a === "icon" && Yr.icon,
          o && Yr.fade,
          i === "before" && Yr.beforeIcon,
          i === "after" && Yr.afterIcon,
        ]),
      },
      r,
    );
  };
function AS(e) {
  return !e.displayName && !e.render && typeof e == "function";
}
var Wd = function (t) {
    var r = t.icon;
    return k.createElement(
      k.Fragment,
      null,
      AS(r)
        ? r({ label: "", color: "currentColor" })
        : k.createElement(r, { label: "", color: "currentColor" }),
    );
  },
  jS = [
    "analyticsContext",
    "appearance",
    "aria-label",
    "aria-labelledby",
    "autoFocus",
    "children",
    "iconAfter",
    "iconBefore",
    "interactionName",
    "isDisabled",
    "isLoading",
    "isSelected",
    "onClick",
    "onClickCapture",
    "onKeyDownCapture",
    "onKeyUpCapture",
    "onMouseDownCapture",
    "onMouseUpCapture",
    "onPointerDownCapture",
    "onPointerUpCapture",
    "onTouchEndCapture",
    "onTouchStartCapture",
    "shouldFitContainer",
    "spacing",
    "testId",
    "type",
  ],
  IS = ["className", "css", "as", "style"],
  ic = k.memo(
    k.forwardRef(function (t, r) {
      var n = t.analyticsContext,
        a = t.appearance,
        o = t["aria-label"],
        i = t["aria-labelledby"],
        c = t.autoFocus,
        s = t.children,
        l = t.iconAfter,
        u = t.iconBefore,
        d = t.interactionName,
        f = t.isDisabled,
        v = t.isLoading,
        h = v === void 0 ? !1 : v,
        p = t.isSelected,
        g = t.onClick,
        b = t.onClickCapture,
        y = t.onKeyDownCapture,
        O = t.onKeyUpCapture,
        w = t.onMouseDownCapture,
        _ = t.onMouseUpCapture,
        S = t.onPointerDownCapture,
        x = t.onPointerUpCapture,
        A = t.onTouchEndCapture,
        $ = t.onTouchStartCapture,
        M = t.shouldFitContainer,
        B = t.spacing,
        H = t.testId,
        R = t.type,
        E = R === void 0 ? "button" : R,
        I = re(t, jS);
      I.className, I.css, I.as, I.style;
      var D = re(I, IS);
      return k.createElement(
        RS,
        Y(
          {
            analyticsContext: n,
            ref: r,
            appearance: a,
            autoFocus: c,
            isDisabled: f,
            isLoading: h,
            isSelected: p,
            hasIconBefore: !!u,
            hasIconAfter: !!l,
            shouldFitContainer: M,
            spacing: B,
            ariaLabel: o,
            ariaLabelledBy: i,
            onClick: g,
            onClickCapture: b,
            onKeyDownCapture: y,
            onKeyUpCapture: O,
            onMouseDownCapture: w,
            onMouseUpCapture: _,
            onPointerDownCapture: S,
            onPointerUpCapture: x,
            onTouchStartCapture: $,
            onTouchEndCapture: A,
            testId: H,
            componentName: "Button",
            type: E,
            interactionName: d,
          },
          D,
        ),
        k.createElement(
          m.Fragment,
          null,
          u &&
            k.createElement(
              Wi,
              { type: "icon", position: "before", isLoading: h },
              k.createElement(Wd, { icon: u }),
            ),
          s && k.createElement(Wi, { isLoading: h }, s),
          l &&
            k.createElement(
              Wi,
              { type: "icon", position: "after", isLoading: h },
              k.createElement(Wd, { icon: l }),
            ),
        ),
      );
    }),
  );
ic.displayName = "Button";
const Qa = Ko((e) => {
  const { stateStore: t } = Yo(),
    r = yS();
  let n;
  switch (e.type) {
    case "WITHOUT_VERSIONING": {
      n = t.testData;
      break;
    }
    case "OPTIMISTIC_NUMBER": {
      n = t.testDataOptimisticNumber;
      break;
    }
    case "OPTIMISTIC_DATE": {
      n = t.testDataOptimisticDateId;
      break;
    }
    case "OPTIMISTIC_TIMESTAMP": {
      n = t.testDataOptimisticTimeStampId;
      break;
    }
    default:
      return C.jsxs("div", { children: ["Unsupported $", e.type] });
  }
  return n
    ? C.jsx("div", {
        children: C.jsxs("div", {
          children: [
            C.jsx(ah, {
              head: r,
              rows: [n].map((a, o) => {
                const i = [
                  { key: "id", content: a.id },
                  { key: "testDateColumn", content: String(a.testDateColumn) },
                  { key: "testNameColumn", content: a.testNameColumn },
                  { key: "version", content: a.version !== void 0 ? String(a.version) : "EMPTY" },
                  {
                    key: "action",
                    content: C.jsx("div", {
                      children: C.jsx(ic, {
                        appearance: "warning",
                        onClick: () => t.saveState(e.type),
                        children: "update",
                      }),
                    }),
                  },
                ];
                return { key: `row-${o}-${a.id}`, cells: i };
              }),
              rowsPerPage: 10,
              defaultPage: 1,
              loadingSpinnerSize: "large",
              emptyView: C.jsx("div", { children: "Table is EMPTY" }),
              isRankable: !0,
            }),
            C.jsx("br", {}),
            C.jsx("br", {}),
          ],
        }),
      })
    : C.jsx("div", { children: "Try update first" });
});
function DS(e) {
  return Ev(e) || Av(e) || Ns(e) || Cv();
}
var ih = m.createContext(null),
  sh = m.createContext(null),
  ch = m.createContext(null);
function Kd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function TS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kd(Object(r), !0).forEach(function (n) {
          P(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Kd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var MS = { componentName: "tabs", packageName: "@atlaskit/tabs", packageVersion: "18.0.3" },
  Yd = function (t) {
    var r = t.tabPanel,
      n = t.index,
      a = t.isSelected,
      o = t.tabsId;
    return (
      r &&
      m.createElement(
        ch.Provider,
        {
          value: {
            role: "tabpanel",
            id: "".concat(o, "-").concat(n, "-tab"),
            hidden: a ? void 0 : !0,
            "aria-labelledby": "".concat(o, "-").concat(n),
            tabIndex: a ? 0 : -1,
          },
          key: n,
        },
        r,
      )
    );
  },
  LS = function (t) {
    var r = t.shouldUnmountTabPanelOnChange,
      n = r === void 0 ? !1 : r,
      a = t.selected,
      o = t.defaultSelected,
      i = t.onChange,
      c = t.id,
      s = t.analyticsContext,
      l = t.children,
      u = t.testId,
      d = m.useState(a || o || 0),
      f = ee(d, 2),
      v = f[0],
      h = f[1],
      p = a === void 0 ? v : a,
      g = m.Children.toArray(l).filter(function (A) {
        return !!A;
      }),
      b = DS(g),
      y = b[0],
      O = b.slice(1),
      w = m.useRef(new Set([p]));
    w.current.has(p) || w.current.add(p);
    var _ = m.useCallback(
        function (A, $) {
          i && i(A, $), h(A);
        },
        [i],
      ),
      S = rn(TS({ fn: _, action: "clicked", analyticsData: s }, MS)),
      x = n
        ? Yd({ tabPanel: O[p], index: p, isSelected: !0, tabsId: c })
        : Array.from(w.current).map(function (A) {
            return Yd({ tabPanel: O[A], index: A, isSelected: A === p, tabsId: c });
          });
    return m.createElement(
      "div",
      {
        "data-testid": u,
        className: T([
          "_1e0c1txw _p12f1osq _1tkeidpf _i0dl1osq _2lx21bp4 _16jlkb7n",
          "_1c3y1txw _ftfaidpf _18i0kb7n _185bglyw",
        ]),
      },
      m.createElement(sh.Provider, { value: { selected: p, onChange: S, tabsId: c } }, y),
      m.createElement(m.Fragment, null, x),
    );
  },
  NS = function () {
    var t = m.useContext(ih);
    if (t == null || typeof t > "u")
      throw Error("@atlaskit/tabs: A Tab must have a TabList parent.");
    return t;
  },
  $S = function () {
    var t = m.useContext(sh);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs: A TabList must have a Tabs parent.");
    return t;
  },
  FS = function () {
    var t = m.useContext(ch);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs:  A TabPanel must have a Tabs parent.");
    return t;
  },
  oa = function (t) {
    var r = t.children,
      n = t.testId,
      a = FS(),
      o = a.role,
      i = a.id,
      c = a.hidden,
      s = a["aria-labelledby"],
      l = a.tabIndex;
    return k.createElement(
      ri,
      { isInset: !0 },
      k.createElement(
        "div",
        { "data-testid": n, role: o, id: i, hidden: c, "aria-labelledby": s, tabIndex: l },
        k.createElement(m.Fragment, null, r),
      ),
    );
  },
  eo = m.forwardRef(function (t, r) {
    var n = t.children,
      a = t.testId,
      o = NS(),
      i = o.onClick,
      c = o.id,
      s = o["aria-controls"],
      l = o["aria-posinset"],
      u = o["aria-selected"],
      d = o["aria-setsize"],
      f = o.onKeyDown,
      v = o.role,
      h = o.tabIndex;
    return k.createElement(
      ri,
      { isInset: !0 },
      k.createElement(
        "div",
        {
          "data-testid": a,
          onClick: i,
          id: c,
          "aria-controls": s,
          "aria-posinset": l,
          "aria-selected": u,
          "aria-setsize": d,
          onKeyDown: f,
          role: v,
          tabIndex: h,
          ref: r,
        },
        k.createElement(Us, { weight: "medium", color: "inherit", maxLines: 1 }, n),
      ),
    );
  }),
  zS = function (t) {
    var r = t.children,
      n = $S(),
      a = n.tabsId,
      o = n.selected,
      i = n.onChange,
      c = m.createRef(),
      s = m.Children.toArray(r).filter(Boolean),
      l = s.length,
      u = m.useCallback(
        function (v) {
          var h,
            p =
              (h = c.current) === null || h === void 0
                ? void 0
                : h.querySelector("[id='".concat(a, "-").concat(v, "']"));
          p && p.focus(), i(v);
        },
        [a, c, i],
      ),
      d = m.useCallback(
        function (v) {
          if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(v.key)) {
            v.preventDefault();
            var h = l - 1;
            if (["Home", "End"].includes(v.key)) {
              var p = v.key === "Home" ? 0 : h;
              u(p);
              return;
            }
            var g = parseInt(v.currentTarget.getAttribute("aria-posinset") || "0") - 1,
              b = v.key === "ArrowRight" ? 1 : -1,
              y = g + b;
            (y < 0 || y >= l) && (y = y < 0 ? h : 0), u(y);
          }
        },
        [l, u],
      ),
      f = m.useCallback(
        function (v) {
          var h = v.tab,
            p = v.isSelected,
            g = v.index;
          return m.createElement(
            ih.Provider,
            {
              value: {
                onClick: function () {
                  return i(g);
                },
                onKeyDown: d,
                "aria-setsize": l,
                role: "tab",
                id: "".concat(a, "-").concat(g),
                "aria-posinset": g + 1,
                "aria-selected": p,
                "aria-controls": "".concat(a, "-").concat(g, "-tab"),
                tabIndex: p ? 0 : -1,
              },
              key: g,
            },
            h,
          );
        },
        [l, d, i, a],
      );
    return m.createElement(
      "div",
      {
        role: "tablist",
        ref: c,
        className: T([
          "_1e0c1txw _kqswh2mm _85i5ze3t _1q51ze3t _y4tize3t _bozgze3t",
          de("platform-component-visual-refresh")
            ? "_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _7hip15vq _1fud15vq _bb0mh2mm _1quz1425 _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _1lzu1hjo _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oaz1fgx _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1b8d1hjo _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i2072d1 _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _rsmzmfou _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiemln51 _pascidpf _eid3idpf _zr3eidpf _fntnidpf _1mp41kw7 _kfgte4h9 _1cs8stnw _1russudh _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc"
            : "_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _7hip15vq _1fud15vq _bb0mh2mm _1quz1425 _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _17hygqwt _1lzupl7t _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oaz1fgx _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1jakgqwt _1b8dpl7t _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i2072d1 _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _9r9ugqwt _rsmz8hos _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiemln51 _pascidpf _eid3idpf _zr3eidpf _fntnidpf _rfx3gqwt _1mp41kw7 _kfgt1bk5 _1cs8stnw _1russudh _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc",
        ]),
        style: {
          "--_13a5t4u": ye("var(--ds-text-subtle, ".concat(nn, ")")),
          "--_kkbq40": ye("var(--ds-text-subtle, ".concat(Pt, ")")),
          "--_1nddtxm": ye(
            "var(--ds-border-width-indicator, 3px)".concat(
              " solid ",
              "var(--ds-border, transparent)",
            ),
          ),
          "--_71dbsd": ye("var(--ds-text, ".concat(ps, ")")),
          "--_1hfkvbo": ye("var(--ds-text-selected, ".concat(Pt, ")")),
          "--_hdabma": ye(
            "var(--ds-border-width-indicator, 3px)".concat(
              " solid ",
              "var(--ds-border-selected, ".concat(Pt, ")"),
            ),
          ),
          "--_lvpq93": ye("var(--ds-border, ".concat(Vy, ")")),
          "--_1b4y4br": ye(
            "var(--ds-border-width-outline, 2px)".concat(
              " solid ",
              "var(--ds-border, transparent)",
            ),
          ),
          "--_1rlpysg": ye(
            "var(--ds-border-width-outline, 2px)".concat(
              " solid ",
              "var(--ds-border-selected, ".concat(Pt, ")"),
            ),
          ),
        },
      },
      s.map(function (v, h) {
        return f({ tab: v, index: h, isSelected: h === o });
      }),
    );
  },
  lh = ((e) => (
    (e[(e.WITHOUT_VERSIONING = 0)] = "WITHOUT_VERSIONING"),
    (e[(e.OPTIMISTIC_NUMBER = 1)] = "OPTIMISTIC_NUMBER"),
    (e[(e.OPTIMISTIC_DATE = 2)] = "OPTIMISTIC_DATE"),
    (e[(e.OPTIMISTIC_TIMESTAMP = 3)] = "OPTIMISTIC_TIMESTAMP"),
    e
  ))(lh || {});
const BS = Object.keys(lh).filter((e) => isNaN(Number(e))),
  to = ({ children: e, testId: t }) =>
    C.jsx("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: Wt("color.background.neutral"),
        borderRadius: "3px",
        color: Wt("color.text.subtlest"),
        font: Wt("font.heading.xxlarge"),
        marginBlockEnd: Wt("space.100", "8px"),
        marginBlockStart: Wt("space.200", "16px"),
        paddingBlockEnd: Wt("space.400", "32px"),
        paddingBlockStart: Wt("space.400", "32px"),
        paddingInlineEnd: Wt("space.400", "32px"),
        paddingInlineStart: Wt("space.400", "32px"),
      },
      "data-testid": t,
      children: e,
    });
function qS() {
  const { stateStore: e } = Yo();
  return e.isLoading
    ? "loading...."
    : C.jsxs("div", {
        children: [
          C.jsxs("div", {
            className: "reset-section",
            children: [
              C.jsx("h2", { children: "Reset All" }),
              C.jsx("p", {
                children:
                  "Click the button below to revert all test entities to their initial state. This removes any changes you've made during testing.",
              }),
              C.jsx("br", {}),
              C.jsxs(ic, {
                appearance: "danger",
                onClick: async () => {
                  var t, r, n, a;
                  try {
                    e.loading("Clear ..."),
                      await ma.invoke("clearAll", {
                        testDataId: (t = e.testData) == null ? void 0 : t.id,
                        testDataOptimisticNumberId:
                          (r = e.testDataOptimisticNumber) == null ? void 0 : r.id,
                        testDataOptimisticDateId:
                          (n = e.testDataOptimisticDateId) == null ? void 0 : n.id,
                        testDataOptimisticTimeStampId:
                          (a = e.testDataOptimisticTimeStampId) == null ? void 0 : a.id,
                      });
                  } finally {
                    e.stopLoading();
                  }
                  window.location.reload();
                },
                children: [" ", "Reset All"],
              }),
            ],
          }),
          C.jsx("br", {}),
          C.jsx("p", {
            children:
              "Use the tabs below to navigate between different examples of optimistic locking. Each tab demonstrates a different versioning approach, along with instructions on how to test the locking behavior.",
          }),
          C.jsx("br", {}),
          C.jsxs(LS, {
            onChange: (t) => console.log("Selected Tab", t + 1),
            defaultSelected: 1,
            id: "default",
            children: [
              C.jsxs(zS, {
                children: [
                  " ",
                  BS.map((t) => {
                    switch (t) {
                      case "WITHOUT_VERSIONING":
                        return C.jsx(
                          eo,
                          { children: "Entity Without Version Column (No Locking)" },
                          t,
                        );
                      case "OPTIMISTIC_NUMBER":
                        return C.jsx(eo, { children: "Entity with Numeric Version Column" }, t);
                      case "OPTIMISTIC_DATE":
                        return C.jsx(
                          eo,
                          { children: "Entity with Datetime-Based Version Column" },
                          t,
                        );
                      case "OPTIMISTIC_TIMESTAMP":
                        return C.jsx(
                          eo,
                          { children: "Entity with Timestamp-BasedVersion Column" },
                          t,
                        );
                    }
                  }),
                ],
              }),
              C.jsx(oa, { children: C.jsx(C.Fragment, {}) }),
              C.jsx(oa, {
                children: C.jsx(to, {
                  children: C.jsxs("div", {
                    children: [
                      C.jsx("h2", { children: "Entity Without Version Column (No Locking)" }),
                      C.jsx("p", {
                        children:
                          "This entity does not use any versioning or optimistic locking mechanism. When two users open the same record in different browser tabs and both make changes, the last update simply overwrites the previous changes. There is no conflict detection in place.",
                      }),
                      C.jsx("h3", { children: "How to Test" }),
                      C.jsxs("ol", {
                        children: [
                          C.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          C.jsxs("li", {
                            children: [
                              "In the first tab, change any field and click ",
                              C.jsx("strong", { children: "Update" }),
                              ".",
                            ],
                          }),
                          C.jsxs("li", {
                            children: [
                              "In the second tab, also change a field and click ",
                              C.jsx("strong", { children: "Update" }),
                              ".",
                            ],
                          }),
                          C.jsx("li", {
                            children:
                              "Both updates will succeed, and the second update will overwrite the first one.",
                          }),
                        ],
                      }),
                      C.jsx("br", {}),
                      C.jsx(Qa, { type: "WITHOUT_VERSIONING" }),
                    ],
                  }),
                }),
              }),
              C.jsx(oa, {
                children: C.jsx(to, {
                  children: C.jsxs("div", {
                    className: "entity-section",
                    children: [
                      C.jsx("h2", { children: "Entity with Numeric Version Column" }),
                      C.jsx("p", {
                        children:
                          "This entity uses an integer field for optimistic locking. When a user updates the record, the version number increments. A second user with an outdated version will encounter an error upon saving.",
                      }),
                      C.jsx("h3", { children: "How to Test" }),
                      C.jsxs("ol", {
                        children: [
                          C.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          C.jsxs("li", {
                            children: [
                              "In the first tab, change any field and click ",
                              C.jsx("strong", { children: "Update" }),
                              ". This succeeds and increments the version number.",
                            ],
                          }),
                          C.jsx("li", {
                            children:
                              "In the second tab, attempt to update the record without refreshing.",
                          }),
                          C.jsx("li", {
                            children:
                              "The update will fail with an optimistic locking error, indicating the record was modified elsewhere.",
                          }),
                        ],
                      }),
                      C.jsx("br", {}),
                      C.jsx(Qa, { type: "OPTIMISTIC_NUMBER" }),
                    ],
                  }),
                }),
              }),
              C.jsx(oa, {
                children: C.jsx(to, {
                  children: C.jsxs("div", {
                    className: "entity-section",
                    children: [
                      C.jsx("h2", { children: "Entity with DateTime-Based Version Column" }),
                      C.jsx("p", {
                        children:
                          "This entity uses a datetime field for optimistic locking. Whenever the record is updated, the date-based version changes. Any subsequent update with the old date value will fail.",
                      }),
                      C.jsx("h3", { children: "How to Test" }),
                      C.jsxs("ol", {
                        children: [
                          C.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          C.jsxs("li", {
                            children: [
                              "In the first tab, change any field and click ",
                              C.jsx("strong", { children: "Update" }),
                              ". This sets or updates the date-based version.",
                            ],
                          }),
                          C.jsx("li", {
                            children:
                              "In the second tab, try to update the record without refreshing.",
                          }),
                          C.jsx("li", {
                            children:
                              "The second update will fail with an optimistic locking error because the version date has changed.",
                          }),
                        ],
                      }),
                      C.jsx("br", {}),
                      C.jsx(Qa, { type: "OPTIMISTIC_DATE" }),
                    ],
                  }),
                }),
              }),
              C.jsx(oa, {
                children: C.jsx(to, {
                  children: C.jsxs("div", {
                    className: "entity-section",
                    children: [
                      C.jsx("h2", { children: "Entity with Timestamp-Based Version Column" }),
                      C.jsx("p", {
                        children:
                          "This entity uses a timestamp column for optimistic locking. Whenever the record is updated, the timestamp is refreshed. Any subsequent update attempts with an outdated timestamp will fail.",
                      }),
                      C.jsx("h3", { children: "How to Test" }),
                      C.jsxs("ol", {
                        children: [
                          C.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          C.jsxs("li", {
                            children: [
                              "In the first tab, modify any field and click ",
                              C.jsx("strong", { children: "Update" }),
                              ". This refreshes the timestamp.",
                            ],
                          }),
                          C.jsx("li", {
                            children:
                              "In the second tab, try to update the record without reloading the page.",
                          }),
                          C.jsx("li", {
                            children:
                              "The second update will fail, indicating that another process has already changed the record.",
                          }),
                        ],
                      }),
                      C.jsx("br", {}),
                      C.jsx(Qa, { type: "OPTIMISTIC_TIMESTAMP" }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
}
const US = Ko(qS),
  VS = Ko((e) => {
    const { stateStore: t } = Yo(),
      [r, n] = m.useState(""),
      [a, o] = m.useState({}),
      i = (l) => {
        const { name: u, value: d, type: f } = l.target;
        o((v) => ({ ...v, [u]: f === "number" ? Number(d) : d }));
      },
      c = async (l) => {
        l.preventDefault();
        const u = { ...s };
        a.testNameColumn && (u.testNameColumn = a.testNameColumn),
          a.testDateColumn && (u.testDateColumn = new Date(a.testDateColumn));
        const d = await ma.invoke("update", { data: u, objectName: e.type });
        n(d);
      };
    let s;
    switch (e.type) {
      case "WITHOUT_VERSIONING": {
        s = t.testData;
        break;
      }
      case "OPTIMISTIC_NUMBER": {
        s = t.testDataOptimisticNumber;
        break;
      }
      case "OPTIMISTIC_DATE": {
        s = t.testDataOptimisticDateId;
        break;
      }
      case "OPTIMISTIC_TIMESTAMP": {
        s = t.testDataOptimisticTimeStampId;
        break;
      }
      default:
        return C.jsxs("div", { children: ["Unsupported $", e.type] });
    }
    return C.jsxs("div", {
      children: [
        C.jsx("div", {
          children: C.jsx("button", {
            onClick: async () => {
              try {
                t.loading();
                const l = await ma.invoke("fetchOrCreateIfNotExists");
                t.saveResponse(l);
              } finally {
                t.stopLoading();
              }
              t.saveState("ROOT");
            },
            children: "Back to main",
          }),
        }),
        C.jsx("br", {}),
        C.jsxs("form", {
          onSubmit: c,
          children: [
            C.jsxs(
              "div",
              {
                children: [
                  C.jsx("label", { htmlFor: "testNameColumn", children: "Name" }),
                  C.jsx("br", {}),
                  C.jsx("input", {
                    type: "text",
                    id: "testNameColumn",
                    name: "testNameColumn",
                    defaultValue: s.testNameColumn,
                    onChange: i,
                  }),
                  C.jsx("br", {}),
                ],
              },
              "testNameColumn",
            ),
            C.jsxs(
              "div",
              {
                children: [
                  C.jsx("label", { htmlFor: "testDateColumn", children: "dateTime" }),
                  C.jsx("br", {}),
                  C.jsx("input", {
                    type: "datetime-local",
                    id: "testDateColumn",
                    name: "testDateColumn",
                    defaultValue: String(s.testDateColumn),
                    onChange: i,
                  }),
                  C.jsx("br", {}),
                ],
              },
              "testDateColumn",
            ),
            C.jsx("br", {}),
            C.jsx("input", {
              type: "submit",
              value: "Submit",
              disabled: Object.keys(a).length === 0,
            }),
          ],
        }),
        C.jsx("br", {}),
        C.jsx("br", {}),
        r
          ? C.jsxs("div", {
              children: [C.jsx("p", { children: "STATUS:" }), C.jsxs("b", { children: [" ", r] })],
            })
          : null,
      ],
    });
  });
function GS() {
  const { stateStore: e } = Yo();
  if (
    (m.useEffect(() => {
      (async () => {
        try {
          e.loading();
          const r = await ma.invoke("fetchOrCreateIfNotExists");
          e.saveResponse(r);
        } finally {
          e.stopLoading();
        }
      })().catch(console.error);
    }, []),
    e.isLoading)
  )
    return e.message;
  switch (e.state) {
    case "ROOT":
      return C.jsx(US, {});
    case "WITHOUT_VERSIONING":
    case "OPTIMISTIC_TIMESTAMP":
    case "OPTIMISTIC_DATE":
    case "OPTIMISTIC_NUMBER":
      return C.jsx(VS, { type: e.state });
    default:
      return C.jsxs("div", { children: ["ERROR: unsupprted state $", e.state] });
  }
}
const HS = Ko(GS),
  WS = document.getElementById("root"),
  KS = ph.createRoot(WS),
  Jd = () => {
    KS.render(C.jsx(Ov, { ...Sv, children: C.jsx(HS, {}) }));
  };
ma.view.theme
  .enable()
  .then(() => {
    Jd();
  })
  .catch((e) => {
    console.error(e.message), Jd();
  });
export {
  Po as B,
  tx as N,
  k as R,
  l_ as T,
  Ue as _,
  be as a,
  fs as b,
  ge as c,
  qe as d,
  Z as e,
  ee as f,
  P as g,
  re as h,
  Zo as i,
  He as j,
  Y as k,
  dw as l,
  ht as m,
  kt as n,
  ye as o,
  T as p,
  rx as q,
  m as r,
  Me as s,
  s_ as t,
  Rv as u,
  a_ as v,
  Cp as w,
};
