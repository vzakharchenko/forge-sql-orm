import { r as Jt, c as Dr } from "./react-dom-vendor-DUDfcWRj.js";
import { g as Ar, a as Tr, r as C } from "./client-core-vendor-DPN4DKZK.js";
import { r as Mr } from "./lodash-vendor-Cev46GZt.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const n of r)
      if (n.type === "childList")
        for (const i of n.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && o(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(r) {
    const n = {};
    return (
      r.integrity && (n.integrity = r.integrity),
      r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (n.credentials = "omit")
          : (n.credentials = "same-origin"),
      n
    );
  }
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const n = a(r);
    fetch(r.href, n);
  }
})();
var be = { exports: {} },
  q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ze;
function kr() {
  if (ze) return q;
  ze = 1;
  var e = Jt(),
    t = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(c, l, s) {
    var u,
      d = {},
      f = null,
      _ = null;
    (s !== void 0 && (f = "" + s),
      l.key !== void 0 && (f = "" + l.key),
      l.ref !== void 0 && (_ = l.ref));
    for (u in l) o.call(l, u) && !n.hasOwnProperty(u) && (d[u] = l[u]);
    if (c && c.defaultProps) for (u in ((l = c.defaultProps), l)) d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: c, key: f, ref: _, props: d, _owner: r.current };
  }
  return ((q.Fragment = a), (q.jsx = i), (q.jsxs = i), q);
}
var Ge;
function qr() {
  return (Ge || ((Ge = 1), (be.exports = kr())), be.exports);
}
var h = qr(),
  R = Jt();
const Lr = Ar(R);
var me = {},
  qe = function (e, t) {
    return (
      (qe =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (a, o) {
            a.__proto__ = o;
          }) ||
        function (a, o) {
          for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (a[r] = o[r]);
        }),
      qe(e, t)
    );
  };
function Qt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  qe(e, t);
  function a() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((a.prototype = t.prototype), new a());
}
var pe = function () {
  return (
    (pe =
      Object.assign ||
      function (t) {
        for (var a, o = 1, r = arguments.length; o < r; o++) {
          a = arguments[o];
          for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
        }
        return t;
      }),
    pe.apply(this, arguments)
  );
};
function Yt(e, t) {
  var a = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
        (a[o[r]] = e[o[r]]);
  return a;
}
function Xt(e, t, a, o) {
  var r = arguments.length,
    n = r < 3 ? t : o === null ? (o = Object.getOwnPropertyDescriptor(t, a)) : o,
    i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, a, o);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (i = e[c]) && (n = (r < 3 ? i(n) : r > 3 ? i(t, a, n) : i(t, a)) || n);
  return (r > 3 && n && Object.defineProperty(t, a, n), n);
}
function Zt(e, t) {
  return function (a, o) {
    t(a, o, e);
  };
}
function er(e, t, a, o, r, n) {
  function i(b) {
    if (b !== void 0 && typeof b != "function") throw new TypeError("Function expected");
    return b;
  }
  for (
    var c = o.kind,
      l = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      s = !t && e ? (o.static ? e : e.prototype) : null,
      u = t || (s ? Object.getOwnPropertyDescriptor(s, o.name) : {}),
      d,
      f = !1,
      _ = a.length - 1;
    _ >= 0;
    _--
  ) {
    var g = {};
    for (var p in o) g[p] = p === "access" ? {} : o[p];
    for (var p in o.access) g.access[p] = o.access[p];
    g.addInitializer = function (b) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      n.push(i(b || null));
    };
    var v = (0, a[_])(c === "accessor" ? { get: u.get, set: u.set } : u[l], g);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      ((d = i(v.get)) && (u.get = d),
        (d = i(v.set)) && (u.set = d),
        (d = i(v.init)) && r.unshift(d));
    } else (d = i(v)) && (c === "field" ? r.unshift(d) : (u[l] = d));
  }
  (s && Object.defineProperty(s, o.name, u), (f = !0));
}
function tr(e, t, a) {
  for (var o = arguments.length > 2, r = 0; r < t.length; r++)
    a = o ? t[r].call(e, a) : t[r].call(e);
  return o ? a : void 0;
}
function rr(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function nr(e, t, a) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: a ? "".concat(a, " ", t) : t })
  );
}
function ir(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function or(e, t, a, o) {
  function r(n) {
    return n instanceof a
      ? n
      : new a(function (i) {
          i(n);
        });
  }
  return new (a || (a = Promise))(function (n, i) {
    function c(u) {
      try {
        s(o.next(u));
      } catch (d) {
        i(d);
      }
    }
    function l(u) {
      try {
        s(o.throw(u));
      } catch (d) {
        i(d);
      }
    }
    function s(u) {
      u.done ? n(u.value) : r(u.value).then(c, l);
    }
    s((o = o.apply(e, t || [])).next());
  });
}
function sr(e, t) {
  var a = {
      label: 0,
      sent: function () {
        if (n[0] & 1) throw n[1];
        return n[1];
      },
      trys: [],
      ops: [],
    },
    o,
    r,
    n,
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
  function c(s) {
    return function (u) {
      return l([s, u]);
    };
  }
  function l(s) {
    if (o) throw new TypeError("Generator is already executing.");
    for (; i && ((i = 0), s[0] && (a = 0)), a; )
      try {
        if (
          ((o = 1),
          r &&
            (n =
              s[0] & 2 ? r.return : s[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) &&
            !(n = n.call(r, s[1])).done)
        )
          return n;
        switch (((r = 0), n && (s = [s[0] & 2, n.value]), s[0])) {
          case 0:
          case 1:
            n = s;
            break;
          case 4:
            return (a.label++, { value: s[1], done: !1 });
          case 5:
            (a.label++, (r = s[1]), (s = [0]));
            continue;
          case 7:
            ((s = a.ops.pop()), a.trys.pop());
            continue;
          default:
            if (
              ((n = a.trys), !(n = n.length > 0 && n[n.length - 1]) && (s[0] === 6 || s[0] === 2))
            ) {
              a = 0;
              continue;
            }
            if (s[0] === 3 && (!n || (s[1] > n[0] && s[1] < n[3]))) {
              a.label = s[1];
              break;
            }
            if (s[0] === 6 && a.label < n[1]) {
              ((a.label = n[1]), (n = s));
              break;
            }
            if (n && a.label < n[2]) {
              ((a.label = n[2]), a.ops.push(s));
              break;
            }
            (n[2] && a.ops.pop(), a.trys.pop());
            continue;
        }
        s = t.call(e, a);
      } catch (u) {
        ((s = [6, u]), (r = 0));
      } finally {
        o = n = 0;
      }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
var ye = Object.create
  ? function (e, t, a, o) {
      o === void 0 && (o = a);
      var r = Object.getOwnPropertyDescriptor(t, a);
      ((!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) &&
        (r = {
          enumerable: !0,
          get: function () {
            return t[a];
          },
        }),
        Object.defineProperty(e, o, r));
    }
  : function (e, t, a, o) {
      (o === void 0 && (o = a), (e[o] = t[a]));
    };
function ar(e, t) {
  for (var a in e) a !== "default" && !Object.prototype.hasOwnProperty.call(t, a) && ye(t, e, a);
}
function ve(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    a = t && e[t],
    o = 0;
  if (a) return a.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e });
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ne(e, t) {
  var a = typeof Symbol == "function" && e[Symbol.iterator];
  if (!a) return e;
  var o = a.call(e),
    r,
    n = [],
    i;
  try {
    for (; (t === void 0 || t-- > 0) && !(r = o.next()).done; ) n.push(r.value);
  } catch (c) {
    i = { error: c };
  } finally {
    try {
      r && !r.done && (a = o.return) && a.call(o);
    } finally {
      if (i) throw i.error;
    }
  }
  return n;
}
function lr() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Ne(arguments[t]));
  return e;
}
function ur() {
  for (var e = 0, t = 0, a = arguments.length; t < a; t++) e += arguments[t].length;
  for (var o = Array(e), r = 0, t = 0; t < a; t++)
    for (var n = arguments[t], i = 0, c = n.length; i < c; i++, r++) o[r] = n[i];
  return o;
}
function cr(e, t, a) {
  if (a || arguments.length === 2)
    for (var o = 0, r = t.length, n; o < r; o++)
      (n || !(o in t)) && (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
  return e.concat(n || Array.prototype.slice.call(t));
}
function k(e) {
  return this instanceof k ? ((this.v = e), this) : new k(e);
}
function dr(e, t, a) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var o = a.apply(e, t || []),
    r,
    n = [];
  return (
    (r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    c("next"),
    c("throw"),
    c("return", i),
    (r[Symbol.asyncIterator] = function () {
      return this;
    }),
    r
  );
  function i(_) {
    return function (g) {
      return Promise.resolve(g).then(_, d);
    };
  }
  function c(_, g) {
    o[_] &&
      ((r[_] = function (p) {
        return new Promise(function (v, b) {
          n.push([_, p, v, b]) > 1 || l(_, p);
        });
      }),
      g && (r[_] = g(r[_])));
  }
  function l(_, g) {
    try {
      s(o[_](g));
    } catch (p) {
      f(n[0][3], p);
    }
  }
  function s(_) {
    _.value instanceof k ? Promise.resolve(_.value.v).then(u, d) : f(n[0][2], _);
  }
  function u(_) {
    l("next", _);
  }
  function d(_) {
    l("throw", _);
  }
  function f(_, g) {
    (_(g), n.shift(), n.length && l(n[0][0], n[0][1]));
  }
}
function fr(e) {
  var t, a;
  return (
    (t = {}),
    o("next"),
    o("throw", function (r) {
      throw r;
    }),
    o("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function o(r, n) {
    t[r] = e[r]
      ? function (i) {
          return (a = !a) ? { value: k(e[r](i)), done: !1 } : n ? n(i) : i;
        }
      : n;
  }
}
function hr(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    a;
  return t
    ? t.call(e)
    : ((e = typeof ve == "function" ? ve(e) : e[Symbol.iterator]()),
      (a = {}),
      o("next"),
      o("throw"),
      o("return"),
      (a[Symbol.asyncIterator] = function () {
        return this;
      }),
      a);
  function o(n) {
    a[n] =
      e[n] &&
      function (i) {
        return new Promise(function (c, l) {
          ((i = e[n](i)), r(c, l, i.done, i.value));
        });
      };
  }
  function r(n, i, c, l) {
    Promise.resolve(l).then(function (s) {
      n({ value: s, done: c });
    }, i);
  }
}
function _r(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var Ur = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Le = function (e) {
    return (
      (Le =
        Object.getOwnPropertyNames ||
        function (t) {
          var a = [];
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (a[a.length] = o);
          return a;
        }),
      Le(e)
    );
  };
function gr(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var a = Le(e), o = 0; o < a.length; o++) a[o] !== "default" && ye(t, e, a[o]);
  return (Ur(t, e), t);
}
function pr(e) {
  return e && e.__esModule ? e : { default: e };
}
function vr(e, t, a, o) {
  if (a === "a" && !o) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return a === "m" ? o : a === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function yr(e, t, a, o, r) {
  if (o === "m") throw new TypeError("Private method is not writable");
  if (o === "a" && !r) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (o === "a" ? r.call(e, a) : r ? (r.value = a) : t.set(e, a), a);
}
function br(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function mr(e, t, a) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var o, r;
    if (a) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      o = t[Symbol.asyncDispose];
    }
    if (o === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((o = t[Symbol.dispose]), a && (r = o));
    }
    if (typeof o != "function") throw new TypeError("Object not disposable.");
    (r &&
      (o = function () {
        try {
          r.call(this);
        } catch (n) {
          return Promise.reject(n);
        }
      }),
      e.stack.push({ value: t, dispose: o, async: a }));
  } else a && e.stack.push({ async: !0 });
  return t;
}
var Nr =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, a) {
        var o = new Error(a);
        return ((o.name = "SuppressedError"), (o.error = e), (o.suppressed = t), o);
      };
function wr(e) {
  function t(n) {
    ((e.error = e.hasError ? new Nr(n, e.error, "An error was suppressed during disposal.") : n),
      (e.hasError = !0));
  }
  var a,
    o = 0;
  function r() {
    for (; (a = e.stack.pop()); )
      try {
        if (!a.async && o === 1) return ((o = 0), e.stack.push(a), Promise.resolve().then(r));
        if (a.dispose) {
          var n = a.dispose.call(a.value);
          if (a.async)
            return (
              (o |= 2),
              Promise.resolve(n).then(r, function (i) {
                return (t(i), r());
              })
            );
        } else o |= 1;
      } catch (i) {
        t(i);
      }
    if (o === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return r();
}
function xr(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (a, o, r, n, i) {
        return o
          ? t
            ? ".jsx"
            : ".js"
          : r && (!n || !i)
            ? a
            : r + n + "." + i.toLowerCase() + "js";
      })
    : e;
}
const $r = {
    __extends: Qt,
    __assign: pe,
    __rest: Yt,
    __decorate: Xt,
    __param: Zt,
    __esDecorate: er,
    __runInitializers: tr,
    __propKey: rr,
    __setFunctionName: nr,
    __metadata: ir,
    __awaiter: or,
    __generator: sr,
    __createBinding: ye,
    __exportStar: ar,
    __values: ve,
    __read: Ne,
    __spread: lr,
    __spreadArrays: ur,
    __spreadArray: cr,
    __await: k,
    __asyncGenerator: dr,
    __asyncDelegator: fr,
    __asyncValues: hr,
    __makeTemplateObject: _r,
    __importStar: gr,
    __importDefault: pr,
    __classPrivateFieldGet: vr,
    __classPrivateFieldSet: yr,
    __classPrivateFieldIn: br,
    __addDisposableResource: mr,
    __disposeResources: wr,
    __rewriteRelativeImportExtension: xr,
  },
  zr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: mr,
        get __assign() {
          return pe;
        },
        __asyncDelegator: fr,
        __asyncGenerator: dr,
        __asyncValues: hr,
        __await: k,
        __awaiter: or,
        __classPrivateFieldGet: vr,
        __classPrivateFieldIn: br,
        __classPrivateFieldSet: yr,
        __createBinding: ye,
        __decorate: Xt,
        __disposeResources: wr,
        __esDecorate: er,
        __exportStar: ar,
        __extends: Qt,
        __generator: sr,
        __importDefault: pr,
        __importStar: gr,
        __makeTemplateObject: _r,
        __metadata: ir,
        __param: Zt,
        __propKey: rr,
        __read: Ne,
        __rest: Yt,
        __rewriteRelativeImportExtension: xr,
        __runInitializers: tr,
        __setFunctionName: nr,
        __spread: lr,
        __spreadArray: cr,
        __spreadArrays: ur,
        __values: ve,
        default: $r,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  E = Tr(zr);
var L = {},
  Ve;
function Gr() {
  return (
    Ve ||
      ((Ve = 1),
      Object.defineProperty(L, "__esModule", { value: !0 }),
      (L.NavigationTarget = void 0),
      (L.NavigationTarget = {
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
    L
  );
}
var we = {},
  xe = {},
  U = {},
  N = {},
  Ke;
function x() {
  if (Ke) return N;
  ((Ke = 1), Object.defineProperty(N, "__esModule", { value: !0 }), (N.BridgeAPIError = void 0));
  class e extends Error {}
  return ((N.BridgeAPIError = e), N);
}
var We;
function w() {
  if (We) return U;
  ((We = 1), Object.defineProperty(U, "__esModule", { value: !0 }), (U.getCallBridge = void 0));
  const e = x();
  function t(o) {
    return !!o?.callBridge;
  }
  const a = () => {
    if (!t(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((U.getCallBridge = a), U);
}
var $ = {},
  He;
function $e() {
  if (He) return $;
  ((He = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.withRateLimiter = void 0));
  const e = x(),
    t = (a, o, r, n) => {
      let i = Date.now(),
        c = 0;
      return async (...l) => {
        const s = Date.now();
        if ((s - i > r && ((i = s), (c = 0)), c >= o))
          throw new e.BridgeAPIError(n || "Too many invocations.");
        return ((c = c + 1), a(...l));
      };
    };
  return (($.withRateLimiter = t), $);
}
var Je;
function Vr() {
  return (
    Je ||
      ((Je = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = w(),
          a = x(),
          o = $e(),
          r = (0, t.getCallBridge)(),
          n = (l) => {
            if (l && Object.values(l).some((s) => typeof s == "function"))
              throw new a.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          i = (l, s) => {
            if (typeof l != "string") throw new a.BridgeAPIError("functionKey must be a string!");
            return (n(s), r("invoke", { functionKey: l, payload: s }));
          };
        e.invoke = (0, o.withRateLimiter)(
          i,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function c() {
          return e.invoke;
        }
        e.makeInvoke = c;
      })(xe)),
    xe
  );
}
var Qe;
function Kr() {
  return (
    Qe ||
      ((Qe = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), E.__exportStar(Vr(), e));
      })(we)),
    we
  );
}
var Ee = {},
  z = {},
  je = {},
  Ye;
function Er() {
  return (
    Ye ||
      ((Ye = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = w(),
          a = x(),
          o = $e(),
          r = 500,
          n = 25,
          i = 1e3 * n;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, t.getCallBridge)(),
          l = (d) => {
            if (d && Object.values(d).some((f) => typeof f == "function"))
              throw new a.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          s = (d) => async (f) => {
            l(f);
            const _ = { ...f, invokeType: `ui-${d.toLowerCase()}-fetch` },
              g = await c("invoke", _),
              { success: p, payload: v, error: b } = g ?? {},
              m = { ...(p ? v : b) };
            if (m && m.headers)
              for (const F in m.headers)
                Array.isArray(m.headers[F]) && (m.headers[F] = m.headers[F].join(","));
            return m;
          },
          u = (d) => {
            const f = s(d);
            return (0, o.withRateLimiter)(
              f,
              r,
              i,
              `${d} invocation calls are rate limited at ${r}/${n}s`,
            );
          };
        e._invokeEndpointFn = u;
      })(je)),
    je
  );
}
var Xe;
function Wr() {
  if (Xe) return z;
  ((Xe = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.invokeRemote = void 0));
  const e = Er(),
    t = (a) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(a);
  return ((z.invokeRemote = t), z);
}
var G = {},
  Ze;
function Hr() {
  if (Ze) return G;
  ((Ze = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.invokeService = void 0));
  const e = Er(),
    t = (a) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(a);
  return ((G.invokeService = t), G);
}
var et;
function Jr() {
  return (
    et ||
      ((et = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = E;
        (t.__exportStar(Wr(), e), t.__exportStar(Hr(), e));
      })(Ee)),
    Ee
  );
}
var Oe = {},
  V = {},
  K = {},
  tt;
function Qr() {
  if (tt) return K;
  ((tt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.submit = void 0));
  const e = w(),
    t = x(),
    a = (0, e.getCallBridge)(),
    o = async (r) => {
      if ((await a("submit", r)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((K.submit = o), K);
}
var W = {},
  rt;
function Yr() {
  if (rt) return W;
  ((rt = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.close = void 0));
  const e = w(),
    t = x(),
    a = (0, e.getCallBridge)(),
    o = async (r) => {
      try {
        if ((await a("close", r)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((W.close = o), W);
}
var H = {},
  nt;
function Xr() {
  if (nt) return H;
  ((nt = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.open = void 0));
  const e = w(),
    t = x(),
    a = (0, e.getCallBridge)(),
    o = async () => {
      try {
        if ((await a("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((H.open = o), H);
}
var J = {},
  it;
function Zr() {
  if (it) return J;
  ((it = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.refresh = void 0));
  const e = w(),
    t = x(),
    a = (0, e.getCallBridge)(),
    o = async (r) => {
      if ((await a("refresh", r)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((J.refresh = o), J);
}
var Q = {},
  ot;
function en() {
  if (ot) return Q;
  ((ot = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.createHistory = void 0));
  const t = (0, w().getCallBridge)(),
    a = async () => {
      const o = await t("createHistory");
      return (
        o.listen((r) => {
          o.location = r;
        }),
        o
      );
    };
  return ((Q.createHistory = a), Q);
}
var Y = {},
  Se = {},
  j = {},
  st;
function jr() {
  return (
    st ||
      ((st = 1),
      Object.defineProperty(j, "__esModule", { value: !0 }),
      (j.FORGE_SUPPORTED_LOCALE_CODES = j.I18N_BUNDLE_FOLDER_NAME = j.I18N_INFO_FILE_NAME = void 0),
      (j.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (j.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (j.FORGE_SUPPORTED_LOCALE_CODES = [
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
    j
  );
}
var I = {},
  at;
function tn() {
  if (at) return I;
  ((at = 1),
    Object.defineProperty(I, "__esModule", { value: !0 }),
    (I.TranslationsGetter = I.TranslationGetterError = void 0));
  const e = (o, r) => {
    o.includes(r) || o.push(r);
  };
  class t extends Error {
    constructor(r) {
      (super(r), (this.name = "TranslationGetterError"));
    }
  }
  I.TranslationGetterError = t;
  class a {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(r) {
      this.resourcesAccessor = r;
    }
    async getTranslations(r, n = { fallback: !0 }) {
      const i = await this.getI18nInfoConfig(),
        { fallback: c } = n;
      if (!c) {
        let l;
        return (
          i.locales.includes(r) && (l = await this.getTranslationResource(r)),
          { translations: l ?? null, locale: r }
        );
      }
      for (const l of this.getLocaleLookupOrder(r, i)) {
        const s = await this.getTranslationResource(l);
        if (s) return { translations: s, locale: l };
      }
      return { translations: null, locale: r };
    }
    async getTranslationsByLocaleLookupOrder(r) {
      const n = await this.getI18nInfoConfig(),
        i = this.getLocaleLookupOrder(r, n);
      return await Promise.all(
        i.map(async (c) => {
          const l = await this.getTranslationResource(c);
          return { locale: c, translations: l };
        }),
      );
    }
    reset() {
      ((this.i18nInfoConfig = null), this.translationResources.clear());
    }
    async getTranslationResource(r) {
      let n = this.translationResources.get(r);
      if (!n)
        try {
          ((n = await this.resourcesAccessor.getTranslationResource(r)),
            this.translationResources.set(r, n));
        } catch (i) {
          throw i instanceof t ? i : new t(`Failed to get translation resource for locale: ${r}`);
        }
      return n;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (r) {
          throw r instanceof t ? r : new t("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(r, n) {
      const { locales: i, fallback: c } = n,
        l = [r],
        s = c[r];
      return (
        s && Array.isArray(s) && s.length > 0 && l.push(...s),
        e(l, n.fallback.default),
        l.filter((u) => i.includes(u))
      );
    }
  }
  return ((I.TranslationsGetter = a), I);
}
var X = {},
  Re = {},
  lt;
function Or() {
  return (
    lt ||
      ((lt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const a = E.__importDefault(Mr()),
          o = (n, i, c) => {
            const l = n[c];
            return l ? (0, e.getTranslationValueFromContent)(l, i) : null;
          };
        e.getTranslationValue = o;
        const r = (n, i) => {
          let c = n[i];
          if (!c) {
            const l = i.split(".");
            l.length > 1 && (c = (0, a.default)(n, l, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = r;
      })(Re)),
    Re
  );
}
var ut;
function rn() {
  if (ut) return X;
  ((ut = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.Translator = void 0));
  const e = Or();
  class t {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(o, r) {
      ((this.locale = o), (this.translationsGetter = r));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(o) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let r = this.cache.get(o);
      if (r === void 0) {
        for (const { translations: n } of this.localeLookupOrderedTranslations) {
          const i = (0, e.getTranslationValueFromContent)(n, o);
          if (i !== null) {
            r = i;
            break;
          }
        }
        ((r = r ?? null), this.cache.set(o, r));
      }
      return r;
    }
  }
  return ((X.Translator = t), X);
}
var Z = {},
  ct;
function nn() {
  if (ct) return Z;
  ((ct = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.ensureLocale = void 0));
  const e = jr(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    a = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    o = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (n, i) => {
        const [c] = i.split("-");
        return (n[c] || (n[c] = i), n);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    r = (n) => {
      const i = n.replace("_", "-");
      return t.has(i) ? i : (o[i] ?? a[i] ?? null);
    };
  return ((Z.ensureLocale = r), Z);
}
var Pe = {},
  dt;
function on() {
  return (
    dt ||
      ((dt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (s) => typeof s == "object" && s !== null && !Array.isArray(s),
          a = (s) => typeof s?.i18n == "string",
          o = (s) => s.startsWith("connect-"),
          r = (s) => s.startsWith("core:"),
          n = (s) => {
            const u = new Set(),
              d = (f, _) =>
                !t(f) || u.has(f)
                  ? []
                  : (u.add(f),
                    Object.entries(f).flatMap(([g, p]) => {
                      const v = [..._, g];
                      return a(p)
                        ? [{ propertyPath: v, key: p.i18n }]
                        : Array.isArray(p)
                          ? p.flatMap((b) => d(b, v))
                          : d(p, v);
                    }));
            return d(s, []);
          },
          i = (s) =>
            Object.entries(s).flatMap(([u, d]) =>
              !o(u) && !r(u) && d && Array.isArray(d) && d.length > 0 ? d.map((f) => [f, u]) : [],
            );
        e.getI18nSupportedModuleEntries = i;
        const c = (s) => {
          const u = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(s)) {
            const f = n(d[0]);
            for (const { key: _ } of f) u.add(_);
          }
          return u.size > 0 ? Array.from(u) : [];
        };
        e.extractI18nKeysFromModules = c;
        const l = (s) => {
          const u = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(s)) {
            const f = n(d[0]);
            for (const _ of f) u.push({ moduleName: d[1], ..._ });
          }
          return u;
        };
        e.extractI18nPropertiesFromModules = l;
      })(Pe)),
    Pe
  );
}
var Ce = {},
  ft;
function sn() {
  return (ft || ((ft = 1), Object.defineProperty(Ce, "__esModule", { value: !0 })), Ce);
}
var ht;
function Sr() {
  return (
    ht ||
      ((ht = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = E;
        (t.__exportStar(jr(), e),
          t.__exportStar(tn(), e),
          t.__exportStar(rn(), e),
          t.__exportStar(nn(), e));
        var a = Or();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return a.getTranslationValue;
          },
        });
        var o = on();
        (Object.defineProperty(e, "extractI18nKeysFromModules", {
          enumerable: !0,
          get: function () {
            return o.extractI18nKeysFromModules;
          },
        }),
          Object.defineProperty(e, "extractI18nPropertiesFromModules", {
            enumerable: !0,
            get: function () {
              return o.extractI18nPropertiesFromModules;
            },
          }),
          Object.defineProperty(e, "getI18nSupportedModuleEntries", {
            enumerable: !0,
            get: function () {
              return o.getI18nSupportedModuleEntries;
            },
          }),
          t.__exportStar(sn(), e));
      })(Se)),
    Se
  );
}
var _t;
function an() {
  if (_t) return Y;
  ((_t = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.getContext = void 0));
  const e = w(),
    t = Sr(),
    a = (0, e.getCallBridge)(),
    o = async () => {
      var r;
      const n = await a("getContext"),
        i = n?.locale;
      return (i && (n.locale = (r = (0, t.ensureLocale)(i)) !== null && r !== void 0 ? r : i), n);
    };
  return ((Y.getContext = o), Y);
}
var ee = {},
  gt;
function ln() {
  if (gt) return ee;
  ((gt = 1),
    Object.defineProperty(ee, "__esModule", { value: !0 }),
    (ee.changeWindowTitle = void 0));
  const e = w(),
    t = x(),
    a = (0, e.getCallBridge)(),
    o = async (r) => {
      try {
        await a("changeWindowTitle", r);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((ee.changeWindowTitle = o), ee);
}
var te = {},
  pt;
function un() {
  if (pt) return te;
  ((pt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.theme = void 0));
  const t = (0, w().getCallBridge)();
  return ((te.theme = { enable: () => t("enableTheming") }), te);
}
var re = {},
  ne = {},
  Fe = {},
  B = {},
  vt;
function Rr() {
  if (vt) return B;
  ((vt = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.blobToBase64 = B.base64ToBlob = void 0));
  const e = (a, o) => {
    if (!a) return null;
    const r = a.includes(";base64") ? a.split(",")[1] : a,
      n = atob(r),
      i = new Array(n.length);
    for (let l = 0; l < n.length; l++) i[l] = n.charCodeAt(l);
    const c = new Uint8Array(i);
    return new Blob([c], { type: o });
  };
  B.base64ToBlob = e;
  const t = (a) =>
    new Promise((o, r) => {
      const n = new FileReader();
      ((n.onloadend = () => {
        o(n.result);
      }),
        (n.onerror = r),
        n.readAsDataURL(a));
    });
  return ((B.blobToBase64 = t), B);
}
var yt;
function cn() {
  return (
    yt ||
      ((yt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Rr(),
          a = (s) => {
            if (
              typeof s != "object" ||
              s === null ||
              Object.prototype.toString.call(s) !== "[object Object]"
            )
              return !1;
            const u = Object.getPrototypeOf(s);
            if (u === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(u, "constructor") && u.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(s)
            );
          },
          o = async (s) => ({ data: await (0, t.blobToBase64)(s), type: s.type }),
          r = (s) => (0, t.base64ToBlob)(s.data, s.type),
          n = async (s) => {
            if (s instanceof Blob) return { ...(await o(s)), __isBlobData: !0 };
            if (Array.isArray(s))
              return Promise.all(s.map((u) => (0, e.serialiseBlobsInPayload)(u)));
            if (s && a(s)) {
              const u = await Promise.all(
                Object.entries(s).map(async ([d, f]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(f),
                ]),
              );
              return Object.fromEntries(u);
            }
            return s;
          };
        e.serialiseBlobsInPayload = n;
        const i = (s) => {
          if (s && a(s) && "__isBlobData" in s) {
            const u = s;
            return r({ data: u.data, type: u.type });
          }
          if (Array.isArray(s)) return s.map((u) => (0, e.deserialiseBlobsInPayload)(u));
          if (s && a(s)) {
            const u = {};
            for (const [d, f] of Object.entries(s)) u[d] = (0, e.deserialiseBlobsInPayload)(f);
            return u;
          }
          return s;
        };
        e.deserialiseBlobsInPayload = i;
        const c = (s) =>
          s instanceof Blob
            ? !0
            : Array.isArray(s)
              ? s.some((u) => (0, e.containsBlobs)(u))
              : s && a(s)
                ? Object.values(s).some((u) => (0, e.containsBlobs)(u))
                : !1;
        e.containsBlobs = c;
        const l = (s) =>
          s && a(s) && "__isBlobData" in s
            ? !0
            : Array.isArray(s)
              ? s.some((u) => (0, e.containsSerialisedBlobs)(u))
              : s && a(s)
                ? Object.values(s).some((u) => (0, e.containsSerialisedBlobs)(u))
                : !1;
        e.containsSerialisedBlobs = l;
      })(Fe)),
    Fe
  );
}
var bt;
function Pr() {
  if (bt) return ne;
  ((bt = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.events = void 0));
  const e = w(),
    t = cn(),
    a = (0, e.getCallBridge)(),
    o = async (n, i) => {
      let c = i;
      return (
        (0, t.containsBlobs)(i) && (c = await (0, t.serialiseBlobsInPayload)(i)),
        a("emit", { event: n, payload: c })
      );
    },
    r = (n, i) =>
      a("on", {
        event: n,
        callback: (l) => {
          let s = l;
          return (
            (0, t.containsSerialisedBlobs)(l) && (s = (0, t.deserialiseBlobsInPayload)(l)),
            i(s)
          );
        },
      });
  return ((ne.events = { emit: o, on: r }), ne);
}
var mt;
function dn() {
  if (mt) return re;
  ((mt = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.emitReadyEvent = void 0));
  const e = Pr(),
    t = Cr(),
    a = "EXTENSION_READY",
    o = async () => {
      const r = await t.view.getContext();
      await e.events.emit(a, { localId: r.localId });
    };
  return ((re.emitReadyEvent = o), re);
}
var wt;
function Cr() {
  if (wt) return V;
  ((wt = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.view = void 0));
  const e = Qr(),
    t = Yr(),
    a = Xr(),
    o = Zr(),
    r = en(),
    n = an(),
    i = ln(),
    c = un(),
    l = dn();
  return (
    (V.view = {
      submit: e.submit,
      close: t.close,
      open: a.open,
      refresh: o.refresh,
      createHistory: r.createHistory,
      getContext: n.getContext,
      theme: c.theme,
      changeWindowTitle: i.changeWindowTitle,
      emitReadyEvent: l.emitReadyEvent,
    }),
    V
  );
}
var xt;
function Fr() {
  return (
    xt ||
      ((xt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), E.__exportStar(Cr(), e));
      })(Oe)),
    Oe
  );
}
var Ie = {},
  ie = {},
  Et;
function fn() {
  if (Et) return ie;
  ((Et = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.router = void 0));
  const t = (0, w().getCallBridge)(),
    a = async (i) => {
      if (!i?.target) throw new Error("target is required for getUrl");
      const c = await t("getUrl", i);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (l) {
        throw new Error(`Failed to parse URL: ${c} (${l})`);
      }
    },
    o = (i) => {
      if (typeof i == "string") return t("navigate", { url: i, type: "same-tab" });
      if (!i?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...i, type: "same-tab" });
    },
    r = (i) => {
      if (typeof i == "string") return t("navigate", { url: i, type: "new-tab" });
      if (!i?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...i, type: "new-tab" });
    },
    n = async () => t("reload");
  return ((ie.router = { getUrl: a, navigate: o, open: r, reload: n }), ie);
}
var jt;
function hn() {
  return (
    jt ||
      ((jt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), E.__exportStar(fn(), e));
      })(Ie)),
    Ie
  );
}
var Be = {},
  oe = {},
  Ot;
function _n() {
  if (Ot) return oe;
  ((Ot = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.Modal = void 0));
  const e = w(),
    t = x(),
    a = (0, e.getCallBridge)(),
    o = () => {};
  class r {
    constructor(i) {
      var c, l;
      ((this.resource = i?.resource || null),
        (this.onClose = i?.onClose || o),
        (this.size = i?.size || "medium"),
        (this.context = i?.context || {}),
        (this.closeOnEscape = (c = i?.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick =
          (l = i?.closeOnOverlayClick) !== null && l !== void 0 ? l : !0));
    }
    async open() {
      try {
        if (
          (await a("openModal", {
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
  return ((oe.Modal = r), oe);
}
var St;
function gn() {
  return (
    St ||
      ((St = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), E.__exportStar(_n(), e));
      })(Be)),
    Be
  );
}
var O = {},
  se = {},
  Rt;
function pn() {
  if (Rt) return se;
  ((Rt = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.productFetchApi = void 0));
  const e = Rr(),
    t = async (n) => {
      const i = {};
      for (const [c, l] of n.entries())
        if (c === "file") {
          const s = l.name,
            u = l.type;
          ((i.file = await (0, e.blobToBase64)(l)), (i.__fileName = s), (i.__fileType = u));
        } else i[c] = l;
      return JSON.stringify(i);
    },
    a = (n) => {
      if (!n) return n;
      if ("signal" in n) {
        const { signal: i, ...c } = n;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          c
        );
      }
      return n;
    },
    o = async (n) => {
      const i = n?.body instanceof FormData,
        c = i ? await t(n?.body) : n?.body,
        l = new Request("", { body: c, method: n?.method, headers: n?.headers }),
        s = Object.fromEntries(l.headers.entries());
      return {
        body: l.method !== "GET" ? await l.text() : null,
        headers: new Headers(s),
        isMultipartFormData: i,
      };
    },
    r = (n) => {
      const i = async (c, l, s) => {
        const u = a(s),
          { body: d, headers: f, isMultipartFormData: _ } = await o(u);
        f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
        const g = {
            product: c,
            restPath: l,
            fetchRequestInit: { ...u, body: d, headers: [...f.entries()] },
            isMultipartFormData: _,
          },
          {
            body: p,
            headers: v,
            statusText: b,
            status: m,
            isAttachment: F,
          } = await n("fetchProduct", g),
          y = F ? (0, e.base64ToBlob)(p, v["content-type"]) : p;
        return new Response(y || null, { headers: v, status: m, statusText: b });
      };
      return {
        requestConfluence: (c, l) => i("confluence", c, l),
        requestJira: (c, l) => i("jira", c, l),
        requestBitbucket: (c, l) => i("bitbucket", c, l),
      };
    };
  return ((se.productFetchApi = r), se);
}
var Pt;
function vn() {
  if (Pt) return O;
  Pt = 1;
  var e;
  (Object.defineProperty(O, "__esModule", { value: !0 }),
    (O.requestBitbucket = O.requestJira = O.requestConfluence = void 0));
  const t = w();
  return (
    (e = (0, pn().productFetchApi)((0, t.getCallBridge)())),
    (O.requestConfluence = e.requestConfluence),
    (O.requestJira = e.requestJira),
    (O.requestBitbucket = e.requestBitbucket),
    O
  );
}
var De = {},
  ae = {},
  Ct;
function yn() {
  if (Ct) return ae;
  ((Ct = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.showFlag = void 0));
  const e = w(),
    t = x(),
    a = (0, e.getCallBridge)(),
    o = (r) => {
      var n;
      if (!r.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const i = a("showFlag", { ...r, type: (n = r.type) !== null && n !== void 0 ? n : "info" });
      return { close: async () => (await i, a("closeFlag", { id: r.id })) };
    };
  return ((ae.showFlag = o), ae);
}
var Ft;
function bn() {
  return (
    Ft ||
      ((Ft = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = yn();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(De)),
    De
  );
}
var Ae = {},
  It;
function mn() {
  return (
    It ||
      ((It = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), E.__exportStar(Pr(), e));
      })(Ae)),
    Ae
  );
}
var Te = {},
  le = {},
  Bt;
function wn() {
  if (Bt) return le;
  ((Bt = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.realtime = void 0));
  const t = (0, w().getCallBridge)(),
    a = (i, c, l) => t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: l }),
    o = (i, c, l) => t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: l }),
    r = (i, c, l) =>
      t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: l, isGlobal: !0 }),
    n = (i, c, l) =>
      t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: l, isGlobal: !0 });
  return ((le.realtime = { publish: a, subscribe: o, publishGlobal: r, subscribeGlobal: n }), le);
}
var Me = {},
  Dt;
function xn() {
  return (
    Dt ||
      ((Dt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Jira = void 0),
          (function (t) {
            ((t.Board = "board"), (t.Issue = "issue"), (t.Project = "project"));
          })(e.Jira || (e.Jira = {})));
      })(Me)),
    Me
  );
}
var At;
function En() {
  return (
    At ||
      ((At = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Jira = e.realtime = void 0));
        var t = wn();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var a = xn();
        Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return a.Jira;
          },
        });
      })(Te)),
    Te
  );
}
var S = {},
  Tt;
function jn() {
  if (Tt) return S;
  ((Tt = 1),
    Object.defineProperty(S, "__esModule", { value: !0 }),
    (S.createTranslationFunction = S.getTranslations = S.resetTranslationsCache = void 0));
  const e = Sr(),
    t = Fr(),
    a = {
      getI18nInfoConfig: async () => {
        const c = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!c.ok) throw new Error("Failed to get i18n info config: " + c.statusText);
        return (await c.json()).config;
      },
      getTranslationResource: async (c) => {
        const l = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${c}.json`);
        if (!l.ok) throw new Error(`Failed to get translation resource for locale: ${c}`);
        return l.json();
      },
    },
    o = new e.TranslationsGetter(a),
    r = () => {
      o.reset();
    };
  S.resetTranslationsCache = r;
  const n = async (c = null, l = { fallback: !0 }) => {
    let s = c;
    return (s || (s = (await t.view.getContext()).locale), await o.getTranslations(s, l));
  };
  S.getTranslations = n;
  const i = async (c = null) => {
    let l = c;
    l || (l = (await t.view.getContext()).locale);
    const s = new e.Translator(l, o);
    return (
      await s.init(),
      (u, d) => {
        var f, _;
        return (_ = (f = s.translate(u)) !== null && f !== void 0 ? f : d) !== null && _ !== void 0
          ? _
          : u;
      }
    );
  };
  return ((S.createTranslationFunction = i), S);
}
var ke = {},
  ue = {},
  Mt;
function Ir() {
  if (Mt) return ue;
  ((Mt = 1),
    Object.defineProperty(ue, "__esModule", { value: !0 }),
    (ue.initFeatureFlags = void 0));
  const e = w(),
    t = x(),
    a = $e(),
    o = 500,
    r = 1e3 * 25,
    n = (0, e.getCallBridge)(),
    i = (l) => {
      if (!l || !l.user)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(l).some((s) => typeof s == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (l) => (i(l), n("initFeatureFlags", { user: l.user }));
  return (
    (ue.initFeatureFlags = (0, a.withRateLimiter)(
      c,
      o,
      r,
      "Feature flags initialisation calls are rate limited at 500req/25s",
    )),
    ue
  );
}
var ce = {},
  D = {},
  T = {},
  ge = {},
  kt;
function On() {
  if (kt) return ge;
  ((kt = 1), Object.defineProperty(ge, "__esModule", { value: !0 }));
  const e = C();
  let t = class {
    constructor(o) {
      ((this._sdkKey = o),
        (this._rawValues = null),
        (this._values = null),
        (this._source = "Uninitialized"),
        (this._lcut = 0),
        (this._receivedAt = 0),
        (this._bootstrapMetadata = null),
        (this._warnings = new Set()));
    }
    reset() {
      ((this._values = null),
        (this._rawValues = null),
        (this._source = "Loading"),
        (this._lcut = 0),
        (this._receivedAt = 0),
        (this._bootstrapMetadata = null));
    }
    finalize() {
      this._values || (this._source = "NoValues");
    }
    getValues() {
      return this._rawValues
        ? (0, e._typedJsonParse)(this._rawValues, "has_updates", "EvaluationStoreValues")
        : null;
    }
    setValues(o, r) {
      var n;
      if (!o) return !1;
      const i = (0, e._typedJsonParse)(o.data, "has_updates", "EvaluationResponse");
      return i == null
        ? !1
        : ((this._source = o.source),
          i?.has_updates !== !0 ||
            ((this._rawValues = o.data),
            (this._lcut = i.time),
            (this._receivedAt = o.receivedAt),
            (this._values = i),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(o.source, i)),
            o.source && i.user && this._setWarningState(r, i),
            e.SDKFlags.setFlags(this._sdkKey, (n = i.sdk_flags) !== null && n !== void 0 ? n : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(o) {
      var r;
      return this._getDetailedStoreResult(
        (r = this._values) === null || r === void 0 ? void 0 : r.feature_gates,
        o,
      );
    }
    getConfig(o) {
      var r;
      return this._getDetailedStoreResult(
        (r = this._values) === null || r === void 0 ? void 0 : r.dynamic_configs,
        o,
      );
    }
    getLayer(o) {
      var r;
      return this._getDetailedStoreResult(
        (r = this._values) === null || r === void 0 ? void 0 : r.layer_configs,
        o,
      );
    }
    getParamStore(o) {
      var r;
      return this._getDetailedStoreResult(
        (r = this._values) === null || r === void 0 ? void 0 : r.param_stores,
        o,
      );
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var o;
      return (o = this._values) === null || o === void 0 ? void 0 : o.exposures;
    }
    _extractBootstrapMetadata(o, r) {
      if (o !== "Bootstrap") return null;
      const n = {};
      return (
        r.user && (n.user = r.user),
        r.sdkInfo && (n.generatorSDKInfo = r.sdkInfo),
        (n.lcut = r.time),
        n
      );
    }
    _getDetailedStoreResult(o, r) {
      let n = null;
      return (
        o && (n = o[r] ? o[r] : o[(0, e._DJB2)(r)]),
        { result: n, details: this._getDetails(n == null) }
      );
    }
    _setWarningState(o, r) {
      var n, i;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((n = o.customIDs) === null || n === void 0 ? void 0 : n.stableID) !== c &&
        ((!((i = o.customIDs) === null || i === void 0) && i.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in r) {
        const l = r.user;
        (0, e._getFullUserHash)(o) !== (0, e._getFullUserHash)(l) &&
          this._warnings.add("PartialUserMatch");
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues")
        return { reason: this._source };
      const o = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (o.warnings = Array.from(this._warnings)), o);
    }
    _getDetails(o) {
      var r, n;
      const i = this.getCurrentSourceDetails();
      let c = i.reason;
      const l = (r = i.warnings) !== null && r !== void 0 ? r : [];
      (this._source === "Bootstrap" && l.length > 0 && (c = c + l[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${o ? "Unrecognized" : "Recognized"}`));
      const s =
        this._source === "Bootstrap" && (n = this._bootstrapMetadata) !== null && n !== void 0
          ? n
          : void 0;
      return (s && (i.bootstrapMetadata = s), Object.assign(Object.assign({}, i), { reason: c }));
    }
  };
  return ((ge.default = t), ge);
}
var M = {},
  de = {},
  qt;
function Sn() {
  if (qt) return de;
  ((qt = 1),
    Object.defineProperty(de, "__esModule", { value: !0 }),
    (de._resolveDeltasResponse = void 0));
  const e = C(),
    t = 2;
  function a(i, c) {
    const l = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!l) return { hadBadDeltaChecksum: !0 };
    const s = o(i, l),
      u = r(s),
      d = (0, e._DJB2Object)(
        {
          feature_gates: u.feature_gates,
          dynamic_configs: u.dynamic_configs,
          layer_configs: u.layer_configs,
        },
        t,
      );
    return d === l.checksumV2
      ? JSON.stringify(u)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: u,
          badFullResponse: l.deltas_full_response,
        };
  }
  de._resolveDeltasResponse = a;
  function o(i, c) {
    return Object.assign(Object.assign(Object.assign({}, i), c), {
      feature_gates: Object.assign(Object.assign({}, i.feature_gates), c.feature_gates),
      layer_configs: Object.assign(Object.assign({}, i.layer_configs), c.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, i.dynamic_configs), c.dynamic_configs),
    });
  }
  function r(i) {
    const c = i;
    return (
      n(i.deleted_gates, c.feature_gates),
      delete c.deleted_gates,
      n(i.deleted_configs, c.dynamic_configs),
      delete c.deleted_configs,
      n(i.deleted_layers, c.layer_configs),
      delete c.deleted_layers,
      c
    );
  }
  function n(i, c) {
    i?.forEach((l) => {
      delete c[l];
    });
  }
  return de;
}
var Lt;
function Br() {
  if (Lt) return M;
  Lt = 1;
  var e =
    (M && M.__awaiter) ||
    function (r, n, i, c) {
      function l(s) {
        return s instanceof i
          ? s
          : new i(function (u) {
              u(s);
            });
      }
      return new (i || (i = Promise))(function (s, u) {
        function d(g) {
          try {
            _(c.next(g));
          } catch (p) {
            u(p);
          }
        }
        function f(g) {
          try {
            _(c.throw(g));
          } catch (p) {
            u(p);
          }
        }
        function _(g) {
          g.done ? s(g.value) : l(g.value).then(d, f);
        }
        _((c = c.apply(r, n || [])).next());
      });
    };
  Object.defineProperty(M, "__esModule", { value: !0 });
  const t = C(),
    a = Sn();
  class o extends t.NetworkCore {
    constructor(n, i) {
      super(n, i);
      const c = n?.networkConfig;
      ((this._option = n),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          c?.initializeUrl,
          c?.api,
          c?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(n, i, c, l, s) {
      return e(this, void 0, void 0, function* () {
        var u, d, f, _, g, p;
        const v = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
        let b = {
          user: l,
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
        if (v?.has_updates) {
          const m =
            v?.hash_used !==
            ((p =
              (g = (_ = this._option) === null || _ === void 0 ? void 0 : _.networkConfig) ===
                null || g === void 0
                ? void 0
                : g.initializeHashAlgorithm) !== null && p !== void 0
              ? p
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: s && !m ? v.time : 0,
            previousDerivedFields: "derived_fields" in v && s ? v.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: v.full_checksum,
            partialUserMatchSinceTime: m ? 0 : v.time,
          });
        }
        return this._fetchEvaluations(n, v, b, c);
      });
    }
    _fetchEvaluations(n, i, c, l) {
      return e(this, void 0, void 0, function* () {
        var s, u;
        const d = yield this.post({
          sdkKey: n,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: l,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (s = d?.body) !== null && s !== void 0 ? s : null;
        if (
          i?.has_updates !== !0 ||
          ((u = d.body) === null || u === void 0 ? void 0 : u.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const f = (0, a._resolveDeltasResponse)(i, d.body);
        return typeof f == "string"
          ? f
          : this._fetchEvaluations(
              n,
              i,
              Object.assign(Object.assign(Object.assign({}, c), f), {
                deltasResponseRequested: !1,
              }),
              l,
            );
      });
    }
  }
  return ((M.default = o), M);
}
var fe = {},
  Ut;
function Rn() {
  if (Ut) return fe;
  ((Ut = 1),
    Object.defineProperty(fe, "__esModule", { value: !0 }),
    (fe._makeParamStoreGetter = void 0));
  const e = C(),
    t = { disableExposureLog: !0 };
  function a(u) {
    return u == null || u.disableExposureLog === !1;
  }
  function o(u, d) {
    return d != null && !(0, e._isTypeMatch)(u, d);
  }
  function r(u, d) {
    return u.value;
  }
  function n(u, d, f) {
    return u.getFeatureGate(d.gate_name, a(f) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function i(u, d, f, _) {
    const p = u.getDynamicConfig(d.config_name, a(_) ? void 0 : t).get(d.param_name);
    return o(p, f) ? f : p;
  }
  function c(u, d, f, _) {
    const p = u.getExperiment(d.experiment_name, a(_) ? void 0 : t).get(d.param_name);
    return o(p, f) ? f : p;
  }
  function l(u, d, f, _) {
    const p = u.getLayer(d.layer_name, a(_) ? void 0 : t).get(d.param_name);
    return o(p, f) ? f : p;
  }
  function s(u, d, f) {
    return (_, g) => {
      if (d == null) return g;
      const p = d[_];
      if (p == null || (g != null && (0, e._typeOf)(g) !== p.param_type)) return g;
      switch (p.ref_type) {
        case "static":
          return r(p);
        case "gate":
          return n(u, p, f);
        case "dynamic_config":
          return i(u, p, g, f);
        case "experiment":
          return c(u, p, g, f);
        case "layer":
          return l(u, p, g, f);
        default:
          return g;
      }
    };
  }
  return ((fe._makeParamStoreGetter = s), fe);
}
var A = {},
  Nt;
function Pn() {
  if (Nt) return A;
  Nt = 1;
  var e =
    (A && A.__awaiter) ||
    function (r, n, i, c) {
      function l(s) {
        return s instanceof i
          ? s
          : new i(function (u) {
              u(s);
            });
      }
      return new (i || (i = Promise))(function (s, u) {
        function d(g) {
          try {
            _(c.next(g));
          } catch (p) {
            u(p);
          }
        }
        function f(g) {
          try {
            _(c.throw(g));
          } catch (p) {
            u(p);
          }
        }
        function _(g) {
          g.done ? s(g.value) : l(g.value).then(d, f);
        }
        _((c = c.apply(r, n || [])).next());
      });
    };
  (Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.StatsigEvaluationsDataAdapter = void 0));
  const t = C(),
    a = Br();
  let o = class extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(n, i, c) {
      (super.attach(n, i, c),
        c !== null && c instanceof a.default
          ? (this._network = c)
          : (this._network = new a.default(i ?? {})));
    }
    getDataAsync(n, i, c) {
      return this._getDataAsyncImpl(n, (0, t._normalizeUser)(i, this._options), c);
    }
    prefetchData(n, i) {
      return this._prefetchDataImpl(n, i);
    }
    setData(n) {
      const i = (0, t._typedJsonParse)(n, "has_updates", "data");
      i && "user" in i
        ? super.setData(n, i.user)
        : t.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(n, i) {
      super.setData(n, i);
    }
    _fetchFromNetwork(n, i, c, l) {
      return e(this, void 0, void 0, function* () {
        var s;
        const u = yield (s = this._network) === null || s === void 0
          ? void 0
          : s.fetchEvaluations(this._getSdkKey(), n, c?.priority, i, l);
        return u ?? null;
      });
    }
    _getCacheKey(n) {
      var i;
      const c = (0, t._getStorageKey)(
        this._getSdkKey(),
        n,
        (i = this._options) === null || i === void 0 ? void 0 : i.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${c}`;
    }
    _isCachedResultValidFor204(n, i) {
      return n.fullUserHash != null && n.fullUserHash === (0, t._getFullUserHash)(i);
    }
  };
  return ((A.StatsigEvaluationsDataAdapter = o), A);
}
var $t;
function Cn() {
  if ($t) return T;
  $t = 1;
  var e =
    (T && T.__awaiter) ||
    function (c, l, s, u) {
      function d(f) {
        return f instanceof s
          ? f
          : new s(function (_) {
              _(f);
            });
      }
      return new (s || (s = Promise))(function (f, _) {
        function g(b) {
          try {
            v(u.next(b));
          } catch (m) {
            _(m);
          }
        }
        function p(b) {
          try {
            v(u.throw(b));
          } catch (m) {
            _(m);
          }
        }
        function v(b) {
          b.done ? f(b.value) : d(b.value).then(g, p);
        }
        v((u = u.apply(c, l || [])).next());
      });
    };
  Object.defineProperty(T, "__esModule", { value: !0 });
  const t = C(),
    a = On(),
    o = Br(),
    r = Rn(),
    n = Pn();
  let i = class Ue extends t.StatsigClientBase {
    static instance(l) {
      const s = (0, t._getStatsigGlobal)().instance(l);
      return s instanceof Ue
        ? s
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Ue(l ?? "", {}));
    }
    constructor(l, s, u = null) {
      var d, f;
      t.SDKType._setClientType(l, "javascript-client");
      const _ = new o.default(u, (p) => {
        this.$emt(p);
      });
      (super(
        l,
        (d = u?.dataAdapter) !== null && d !== void 0 ? d : new n.StatsigEvaluationsDataAdapter(),
        _,
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
        (this._store = new a.default(l)),
        (this._network = _),
        (this._user = this._configureUser(s, u)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const g = (f = u?.plugins) !== null && f !== void 0 ? f : [];
      for (const p of g) p.bind(this);
    }
    initializeSync(l) {
      var s;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((s = this._store.getWarnings()) !== null && s !== void 0 ? s : []),
          ])
        : (this._logger.start(), this.updateUserSync(this._user, l));
    }
    initializeAsync(l) {
      return e(this, void 0, void 0, function* () {
        return this._initializePromise
          ? this._initializePromise
          : ((this._initializePromise = this._initializeAsyncImpl(l)), this._initializePromise);
      });
    }
    updateUserSync(l, s) {
      const u = performance.now();
      try {
        return this._updateUserSyncImpl(l, s, u);
      } catch (d) {
        const f = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(f, u);
      }
    }
    _updateUserSyncImpl(l, s, u) {
      var d;
      const f = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(l);
      const _ = this.dataAdapter.getDataSync(this._user);
      (_ == null && f.push("NoCachedValues"),
        this._store.setValues(_, this._user),
        this._finalizeUpdate(_));
      const g = s?.disableBackgroundCacheRefresh;
      return g === !0 || (g == null && _?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          )
        : (this._runPostUpdate(_ ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          ));
    }
    updateUserAsync(l, s) {
      return e(this, void 0, void 0, function* () {
        const u = performance.now();
        try {
          return yield this._updateUserAsyncImpl(l, s);
        } catch (d) {
          const f = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(f, u);
        }
      });
    }
    _updateUserAsyncImpl(l, s) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(l);
        const u = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(u);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, u, s)),
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
        (d != null &&
          (t.Diagnostics._markInitProcessStart(this._sdkKey),
          (f = this._store.setValues(d, this._user)),
          t.Diagnostics._markInitProcessEnd(this._sdkKey, { success: f })),
          this._finalizeUpdate(d),
          f ||
            (this._errorBoundary.attachErrorIfNoneExists(
              t.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          t.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            f,
            this._store.getCurrentSourceDetails(),
          ));
        const _ = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          f,
          this._store.getSource(),
          _,
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
        sdkInstanceID: this._sdkInstanceID,
      };
    }
    checkGate(l, s) {
      return this.getFeatureGate(l, s).value;
    }
    logEvent(l, s, u) {
      const d = typeof l == "string" ? { eventName: l, value: s, metadata: u } : l;
      (this.$emt({ name: "log_event_called", event: d }),
        this._logger.enqueue(
          Object.assign(Object.assign({}, d), { user: this._user, time: Date.now() }),
        ));
    }
    _primeReadyRipcord() {
      this.$on("error", () => {
        this.loadingStatus === "Loading" && this._finalizeUpdate(null);
      });
    }
    _initializeAsyncImpl(l) {
      return e(this, void 0, void 0, function* () {
        return (
          t.Storage.isReady() || (yield t.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, l)
        );
      });
    }
    _createErrorUpdateDetails(l, s) {
      var u;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - s,
        l,
        null,
        [...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : [])],
      );
    }
    _finalizeUpdate(l) {
      (this._store.finalize(), this._setStatus("Ready", l));
    }
    _runPostUpdate(l, s) {
      this.dataAdapter.getDataAsync(l, s, { priority: "low" }).catch((u) => {
        t.Log.error("An error occurred after update.", u);
      });
    }
    _resetForUser(l) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(l, this._options)));
    }
    _configureUser(l, s) {
      var u;
      const d = (0, t._normalizeUser)(l, s),
        f = (u = d.customIDs) === null || u === void 0 ? void 0 : u.stableID;
      return (f && t.StableID.setOverride(f, this._sdkKey), d);
    }
    _getFeatureGateImpl(l, s) {
      var u, d;
      const { result: f, details: _ } = this._store.getGate(l),
        g = (0, t._makeFeatureGate)(l, _, f),
        p =
          (d = (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, g, this._user, s),
        v = p ?? g;
      return (
        this._enqueueExposure(
          l,
          (0, t._createGateExposure)(this._user, v, this._store.getExposureMapping()),
          s,
        ),
        this.$emt({ name: "gate_evaluation", gate: v }),
        v
      );
    }
    _getDynamicConfigImpl(l, s) {
      var u, d;
      const { result: f, details: _ } = this._store.getConfig(l),
        g = (0, t._makeDynamicConfig)(l, _, f),
        p =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(u, g, this._user, s),
        v = p ?? g;
      return (
        this._enqueueExposure(
          l,
          (0, t._createConfigExposure)(this._user, v, this._store.getExposureMapping()),
          s,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: v }),
        v
      );
    }
    _getExperimentImpl(l, s) {
      var u, d, f, _;
      const { result: g, details: p } = this._store.getConfig(l),
        v = (0, t._makeExperiment)(l, p, g);
      v.__evaluation != null &&
        (v.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (u = v.__evaluation) === null || u === void 0 ? void 0 : u.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const b =
          (_ =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || _ === void 0
            ? void 0
            : _.call(f, v, this._user, s),
        m = b ?? v;
      return (
        this._enqueueExposure(
          l,
          (0, t._createConfigExposure)(this._user, m, this._store.getExposureMapping()),
          s,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: m }),
        m
      );
    }
    _getLayerImpl(l, s) {
      var u, d, f;
      const { result: _, details: g } = this._store.getLayer(l),
        p = (0, t._makeLayer)(l, g, _),
        v =
          (d =
            (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, p, this._user, s);
      s?.disableExposureLog && this._logger.incrementNonExposureCount(l);
      const b = (0, t._mergeOverride)(
        p,
        v,
        (f = v?.__value) !== null && f !== void 0 ? f : p.__value,
        (m) => {
          s?.disableExposureLog ||
            this._enqueueExposure(
              l,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                m,
                this._store.getExposureMapping(),
              ),
              s,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: b }), b);
    }
    _getParameterStoreImpl(l, s) {
      var u, d;
      const { result: f, details: _ } = this._store.getParamStore(l);
      this._logger.incrementNonExposureCount(l);
      const g = {
          name: l,
          details: _,
          __configuration: f,
          get: (0, r._makeParamStoreGetter)(this, f, s),
        },
        p =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(u, g, s);
      return (
        p != null &&
          ((g.__configuration = p.config),
          (g.details = p.details),
          (g.get = (0, r._makeParamStoreGetter)(this, p.config, s))),
        g
      );
    }
  };
  return ((T.default = i), T);
}
var zt;
function Fn() {
  return (
    zt ||
      ((zt = 1),
      (function (e) {
        var t =
            (D && D.__createBinding) ||
            (Object.create
              ? function (i, c, l, s) {
                  s === void 0 && (s = l);
                  var u = Object.getOwnPropertyDescriptor(c, l);
                  ((!u || ("get" in u ? !c.__esModule : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return c[l];
                      },
                    }),
                    Object.defineProperty(i, s, u));
                }
              : function (i, c, l, s) {
                  (s === void 0 && (s = l), (i[s] = c[l]));
                }),
          a =
            (D && D.__exportStar) ||
            function (i, c) {
              for (var l in i)
                l !== "default" && !Object.prototype.hasOwnProperty.call(c, l) && t(c, i, l);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const o = C(),
          r = Cn();
        ((e.StatsigClient = r.default), a(C(), e));
        const n = Object.assign((0, o._getStatsigGlobal)(), { StatsigClient: r.default });
        e.default = n;
      })(D)),
    D
  );
}
var he = {},
  Gt;
function In() {
  if (Gt) return he;
  ((Gt = 1),
    Object.defineProperty(he, "__esModule", { value: !0 }),
    (he.ForgeDataAdapter = void 0));
  const e = Ir();
  class t {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(o, r, n) {
      var i;
      if (o) return o;
      this.environment = ((i = this.options) === null || i === void 0 ? void 0 : i.environment) || {
        tier: "development",
      };
      const c = { ...r, statsigEnvironment: this.environment },
        l = await (0, e.initFeatureFlags)({ user: c }),
        s = {
          source: "Network",
          data: JSON.stringify(l),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = s), s);
    }
    getDataSync(o) {
      return this.cache;
    }
    async attach(o, r, n) {
      this.options = r;
    }
    async prefetchData() {}
    async setData(o) {}
    async setDataLegacy(o) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((he.ForgeDataAdapter = t), he);
}
var Vt;
function Bn() {
  if (Vt) return ce;
  ((Vt = 1),
    Object.defineProperty(ce, "__esModule", { value: !0 }),
    (ce.ForgeFeatureFlags = void 0));
  const e = Fn(),
    t = In();
  class a {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(r, n = {}) {
      if (this.isInitialized()) return;
      this.dataAdapter = new t.ForgeDataAdapter();
      const i = {
        environment: { tier: n.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(r), i)),
        await this.client.initializeAsync(),
        (this.initialized = !0));
    }
    checkFlag(r) {
      if (!this.isInitialized() || !this.client)
        throw new Error("ForgeFeatureFlags not initialized. Call initialize() first.");
      return this.client.checkGate(r, { disableExposureLog: !0 });
    }
    async shutdown() {
      !this.isInitialized() ||
        !this.client ||
        (await this.client.shutdown(),
        this.dataAdapter && (await this.dataAdapter.shutdown()),
        (this.initialized = !1));
    }
    isInitialized() {
      return this.initialized;
    }
    convertUser(r) {
      return {
        userID: r.userId,
        custom: { ...(r.custom || {}), ...(r.attributes || {}) },
        customIDs: r.identifiers || {},
      };
    }
  }
  return ((ce.ForgeFeatureFlags = a), ce);
}
var Kt;
function Dn() {
  return (
    Kt ||
      ((Kt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ForgeFeatureFlags = void 0),
          E.__exportStar(Ir(), e));
        var a = Bn();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return a.ForgeFeatureFlags;
          },
        });
      })(ke)),
    ke
  );
}
var Wt;
function An() {
  return (
    Wt ||
      ((Wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = E;
        var a = Gr();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return a.NavigationTarget;
          },
        }),
          t.__exportStar(Kr(), e),
          t.__exportStar(Jr(), e),
          t.__exportStar(Fr(), e),
          t.__exportStar(hn(), e),
          t.__exportStar(gn(), e),
          t.__exportStar(vn(), e),
          t.__exportStar(bn(), e),
          t.__exportStar(mn(), e),
          t.__exportStar(En(), e),
          (e.i18n = t.__importStar(jn())),
          t.__exportStar(Dn(), e));
      })(me)),
    me
  );
}
var _e = An();
const Tn = () => {
    const [e, t] = R.useState(null),
      [a, o] = R.useState(null),
      [r, n] = R.useState(!1),
      [i, c] = R.useState(null),
      [l, s] = R.useState(null),
      [u, d] = R.useState(null),
      [f, _] = R.useState(null),
      [g, p] = R.useState({ userName: "", product: "" }),
      v = async (y) => {
        (n(!0), c(null));
        try {
          const P = await _e.invoke("fetch", { cacheable: y });
          t(P);
        } catch (P) {
          c(P instanceof Error ? P.message : "Unknown error occurred");
        } finally {
          n(!1);
        }
      },
      b = async () => {
        if (!g.userName.trim() || !g.product.trim()) {
          s("Please fill in all fields");
          return;
        }
        (n(!0), s(null));
        try {
          (await _e.invoke("insertUserOrOrder", g), s(null), p({ userName: "", product: "" }));
        } catch (y) {
          s(y instanceof Error ? y.message : "Failed to insert user/order");
        } finally {
          n(!1);
        }
      },
      m = async () => {
        (n(!0), d(null));
        try {
          (await _e.invoke("clearCache"), d(null));
        } catch (y) {
          d(y instanceof Error ? y.message : "Failed to clear cache");
        } finally {
          n(!1);
        }
      },
      F = async () => {
        (n(!0), _(null));
        try {
          const y = await _e.invoke("runPerformanceAnalyze");
          (o(y), _(null));
        } catch (y) {
          _(y instanceof Error ? y.message : "Failed to run performance analysis");
        } finally {
          n(!1);
        }
      };
    return h.jsxs("div", {
      style: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
      },
      children: [
        h.jsx("h1", {
          style: { color: "#0052CC", marginBottom: "30px" },
          children: "🚀 Forge SQL ORM Cache Demo",
        }),
        h.jsxs("div", {
          style: {
            padding: "20px",
            backgroundColor: "#F4F5F7",
            borderRadius: "8px",
            marginBottom: "30px",
          },
          children: [
            h.jsx("h3", {
              style: { color: "#172B4D", marginBottom: "15px" },
              children: "How it works:",
            }),
            h.jsxs("ul", {
              style: { color: "#6B778C", lineHeight: "1.6" },
              children: [
                h.jsxs("li", {
                  children: [
                    h.jsx("strong", { children: "Non-Cached Query:" }),
                    " Executes a fresh query with 1-second sleep every time",
                  ],
                }),
                h.jsxs("li", {
                  children: [
                    h.jsx("strong", { children: "Cached Query:" }),
                    " Uses global cache - first execution takes time, subsequent calls are instant",
                  ],
                }),
                h.jsxs("li", {
                  children: [
                    h.jsx("strong", { children: "Add User & Order:" }),
                    " Uses ",
                    h.jsx("code", { children: "executeWithCacheContext" }),
                    " to automatically clear cache after operations",
                  ],
                }),
                h.jsxs("li", {
                  children: [
                    h.jsx("strong", { children: "Cache Management:" }),
                    " Clear cache manually or run performance analysis",
                  ],
                }),
              ],
            }),
          ],
        }),
        h.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            h.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Query Performance Test",
            }),
            h.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Test the difference between cached and non-cached queries. Both queries include a 1-second sleep to demonstrate the performance difference.",
            }),
            h.jsxs("div", {
              style: { display: "flex", gap: "10px", marginBottom: "20px" },
              children: [
                h.jsx("button", {
                  onClick: () => v(!1),
                  disabled: r,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: r ? "not-allowed" : "pointer",
                    opacity: r ? 0.6 : 1,
                  },
                  children: r ? "Loading..." : "🚫 Non-Cached Query",
                }),
                h.jsx("button", {
                  onClick: () => v(!0),
                  disabled: r,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#36B37E",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: r ? "not-allowed" : "pointer",
                    opacity: r ? 0.6 : 1,
                  },
                  children: r ? "Loading..." : "✅ Cached Query",
                }),
              ],
            }),
            i &&
              h.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "20px",
                },
                children: [h.jsx("strong", { children: "Error:" }), " ", i],
              }),
            e &&
              !i &&
              h.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginTop: "10px",
                },
                children: [
                  h.jsxs("h3", {
                    style: { margin: "0 0 10px 0", color: "#172B4D" },
                    children: ["Query Results (", e.times, "ms)"],
                  }),
                  h.jsxs("div", {
                    style: { fontSize: "14px", color: "#6B778C", marginBottom: "10px" },
                    children: ["Found ", e.rows.length, " records"],
                  }),
                  h.jsx("div", {
                    style: { maxHeight: "200px", overflowY: "auto" },
                    children: h.jsxs("table", {
                      style: { width: "100%", borderCollapse: "collapse" },
                      children: [
                        h.jsx("thead", {
                          children: h.jsxs("tr", {
                            style: { backgroundColor: "#E9ECF0" },
                            children: [
                              h.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User ID",
                              }),
                              h.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User Name",
                              }),
                              h.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Product",
                              }),
                              h.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Product ID",
                              }),
                            ],
                          }),
                        }),
                        h.jsx("tbody", {
                          children: e.rows.map((y, P) =>
                            h.jsxs(
                              "tr",
                              {
                                children: [
                                  h.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: y.userId,
                                  }),
                                  h.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: y.userName,
                                  }),
                                  h.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: y.product || "N/A",
                                  }),
                                  h.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: y.productId || "N/A",
                                  }),
                                ],
                              },
                              P,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
          ],
        }),
        h.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            h.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Add User & Order",
            }),
            h.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Add a new user and order. User ID and Product ID are optional - they will be auto-generated if not provided. The system will automatically match existing users and clear cache after operations.",
            }),
            h.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginBottom: "20px",
              },
              children: [
                h.jsxs("div", {
                  children: [
                    h.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User ID (optional):",
                    }),
                    h.jsx("input", {
                      type: "number",
                      value: g.userId || "",
                      onChange: (y) =>
                        p({ ...g, userId: y.target.value ? parseInt(y.target.value) : void 0 }),
                      placeholder: "Leave empty for auto-generated",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
                h.jsxs("div", {
                  children: [
                    h.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User Name:",
                    }),
                    h.jsx("input", {
                      type: "text",
                      value: g.userName,
                      onChange: (y) => p({ ...g, userName: y.target.value }),
                      placeholder: "Enter user name",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
                h.jsxs("div", {
                  children: [
                    h.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product ID (optional):",
                    }),
                    h.jsx("input", {
                      type: "number",
                      value: g.productId || "",
                      onChange: (y) =>
                        p({ ...g, productId: y.target.value ? parseInt(y.target.value) : void 0 }),
                      placeholder: "Leave empty for auto-generated",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
                h.jsxs("div", {
                  children: [
                    h.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product:",
                    }),
                    h.jsx("input", {
                      type: "text",
                      value: g.product,
                      onChange: (y) => p({ ...g, product: y.target.value }),
                      placeholder: "Enter product name",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
              ],
            }),
            h.jsx("button", {
              onClick: b,
              disabled: r,
              style: {
                padding: "12px 24px",
                backgroundColor: "#0052CC",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: r ? "not-allowed" : "pointer",
                opacity: r ? 0.6 : 1,
                fontSize: "16px",
                fontWeight: "bold",
              },
              children: r ? "Processing..." : "➕ Add User & Order",
            }),
            l &&
              h.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginTop: "15px",
                },
                children: [h.jsx("strong", { children: "Error:" }), " ", l],
              }),
          ],
        }),
        h.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            h.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Cache Management",
            }),
            h.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children: "Manage the cache and run performance analysis.",
            }),
            h.jsxs("div", {
              style: { display: "flex", gap: "10px", marginBottom: "15px" },
              children: [
                h.jsx("button", {
                  onClick: m,
                  disabled: r,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: r ? "not-allowed" : "pointer",
                    opacity: r ? 0.6 : 1,
                  },
                  children: r ? "Loading..." : "🗑️ Clear Cache",
                }),
                h.jsx("button", {
                  onClick: F,
                  disabled: r,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF8B00",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: r ? "not-allowed" : "pointer",
                    opacity: r ? 0.6 : 1,
                  },
                  children: r ? "Loading..." : "📊 Run Performance Analysis",
                }),
              ],
            }),
            u &&
              h.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "15px",
                },
                children: [h.jsx("strong", { children: "Error:" }), " ", u],
              }),
            f &&
              h.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "15px",
                },
                children: [h.jsx("strong", { children: "Error:" }), " ", f],
              }),
          ],
        }),
        a &&
          !f &&
          h.jsxs("div", {
            style: {
              marginBottom: "40px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            },
            children: [
              h.jsx("h2", {
                style: { color: "#172B4D", marginBottom: "20px" },
                children: "Performance Analysis Results",
              }),
              h.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginBottom: "20px",
                },
                children: [
                  h.jsxs("div", {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "15px",
                      marginBottom: "20px",
                    },
                    children: [
                      h.jsxs("div", {
                        children: [h.jsx("strong", { children: "Window:" }), " ", a.window],
                      }),
                      h.jsxs("div", {
                        children: [h.jsx("strong", { children: "Top Queries:" }), " ", a.top],
                      }),
                      h.jsxs("div", {
                        children: [
                          h.jsx("strong", { children: "Latency Threshold:" }),
                          " ",
                          a.warnThresholdMs,
                          "ms",
                        ],
                      }),
                      h.jsxs("div", {
                        children: [
                          h.jsx("strong", { children: "Memory Threshold:" }),
                          " ",
                          (a.memoryThresholdBytes / 1024 / 1024).toFixed(1),
                          "MB",
                        ],
                      }),
                      h.jsxs("div", {
                        children: [
                          h.jsx("strong", { children: "Generated:" }),
                          " ",
                          new Date(a.generatedAt).toLocaleString(),
                        ],
                      }),
                    ],
                  }),
                  a.rows.length > 0
                    ? h.jsxs("div", {
                        children: [
                          h.jsxs("h3", {
                            style: { margin: "0 0 15px 0", color: "#172B4D" },
                            children: ["Slow Queries Found (", a.rows.length, ")"],
                          }),
                          a.rows.map((y, P) =>
                            h.jsxs(
                              "div",
                              {
                                style: {
                                  marginBottom: "20px",
                                  padding: "15px",
                                  backgroundColor: "#FFF2CC",
                                  border: "1px solid #FFD700",
                                  borderRadius: "4px",
                                },
                                children: [
                                  h.jsxs("div", {
                                    style: {
                                      display: "grid",
                                      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                                      gap: "10px",
                                      marginBottom: "15px",
                                    },
                                    children: [
                                      h.jsxs("div", {
                                        children: [
                                          h.jsx("strong", { children: "Rank:" }),
                                          " ",
                                          y.rank,
                                        ],
                                      }),
                                      h.jsxs("div", {
                                        children: [
                                          h.jsx("strong", { children: "Type:" }),
                                          " ",
                                          y.stmtType,
                                        ],
                                      }),
                                      h.jsxs("div", {
                                        children: [
                                          h.jsx("strong", { children: "Executions:" }),
                                          " ",
                                          y.execCount,
                                        ],
                                      }),
                                      h.jsxs("div", {
                                        children: [
                                          h.jsx("strong", { children: "Avg Latency:" }),
                                          " ",
                                          y.avgLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      h.jsxs("div", {
                                        children: [
                                          h.jsx("strong", { children: "Max Latency:" }),
                                          " ",
                                          y.maxLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      h.jsxs("div", {
                                        children: [
                                          h.jsx("strong", { children: "Avg Memory:" }),
                                          " ",
                                          y.avgMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      h.jsxs("div", {
                                        children: [
                                          h.jsx("strong", { children: "Max Memory:" }),
                                          " ",
                                          y.maxMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      h.jsxs("div", {
                                        children: [
                                          h.jsx("strong", { children: "Plan Cache:" }),
                                          " ",
                                          y.planInCache ? "Yes" : "No",
                                        ],
                                      }),
                                    ],
                                  }),
                                  h.jsxs("div", {
                                    style: { marginBottom: "10px" },
                                    children: [
                                      h.jsx("strong", { children: "SQL Query:" }),
                                      h.jsx("pre", {
                                        style: {
                                          backgroundColor: "#F8F9FA",
                                          padding: "10px",
                                          borderRadius: "4px",
                                          fontSize: "12px",
                                          overflow: "auto",
                                          marginTop: "5px",
                                        },
                                        children: y.digestText,
                                      }),
                                    ],
                                  }),
                                  h.jsxs("details", {
                                    style: { marginTop: "10px" },
                                    children: [
                                      h.jsx("summary", {
                                        style: {
                                          cursor: "pointer",
                                          fontWeight: "bold",
                                          color: "#0052CC",
                                        },
                                        children: "View Execution Plan",
                                      }),
                                      h.jsx("pre", {
                                        style: {
                                          backgroundColor: "#F8F9FA",
                                          padding: "10px",
                                          borderRadius: "4px",
                                          fontSize: "11px",
                                          overflow: "auto",
                                          marginTop: "10px",
                                          whiteSpace: "pre-wrap",
                                        },
                                        children: y.plan,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              P,
                            ),
                          ),
                        ],
                      })
                    : h.jsxs("div", {
                        style: {
                          padding: "20px",
                          textAlign: "center",
                          color: "#36B37E",
                          backgroundColor: "#E8F5E8",
                          borderRadius: "4px",
                        },
                        children: [
                          h.jsx("strong", { children: "✅ No slow queries found!" }),
                          h.jsx("br", {}),
                          "All queries are performing within the specified thresholds.",
                        ],
                      }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  Mn = document.getElementById("root"),
  kn = Dr.createRoot(Mn),
  Ht = () => {
    kn.render(h.jsx(Lr.StrictMode, { children: h.jsx(Tn, {}) }));
  };
_e.view.theme
  .enable()
  .then(() => {
    Ht();
  })
  .catch((e) => {
    (console.error(e.message), Ht());
  });
