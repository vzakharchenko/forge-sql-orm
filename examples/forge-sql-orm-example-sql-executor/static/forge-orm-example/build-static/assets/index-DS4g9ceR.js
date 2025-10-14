import { r as Jt, c as qr } from "./react-dom-vendor-DUDfcWRj.js";
import { g as Br, r as I } from "./client-core-vendor-BYfXJVhY.js";
import { r as Mr } from "./lodash-vendor-BbpxWQUq.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const n of o)
      if (n.type === "childList")
        for (const r of n.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(o) {
    const n = {};
    return (
      o.integrity && (n.integrity = o.integrity),
      o.referrerPolicy && (n.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (n.credentials = "omit")
          : (n.credentials = "same-origin"),
      n
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const n = a(o);
    fetch(o.href, n);
  }
})();
var ye = { exports: {} },
  M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $e;
function kr() {
  if ($e) return M;
  $e = 1;
  var e = Jt(),
    t = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    i = Object.prototype.hasOwnProperty,
    o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(c, u, s) {
    var l,
      d = {},
      f = null,
      _ = null;
    (s !== void 0 && (f = "" + s),
      u.key !== void 0 && (f = "" + u.key),
      u.ref !== void 0 && (_ = u.ref));
    for (l in u) i.call(u, l) && !n.hasOwnProperty(l) && (d[l] = u[l]);
    if (c && c.defaultProps) for (l in ((u = c.defaultProps), u)) d[l] === void 0 && (d[l] = u[l]);
    return { $$typeof: t, type: c, key: f, ref: _, props: d, _owner: o.current };
  }
  return ((M.Fragment = a), (M.jsx = r), (M.jsxs = r), M);
}
var Ge;
function Lr() {
  return (Ge || ((Ge = 1), (ye.exports = kr())), ye.exports);
}
var p = Lr(),
  C = Jt(),
  be = {},
  Me = function (e, t) {
    return (
      (Me =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (a, i) {
            a.__proto__ = i;
          }) ||
        function (a, i) {
          for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (a[o] = i[o]);
        }),
      Me(e, t)
    );
  };
function Wt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Me(e, t);
  function a() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((a.prototype = t.prototype), new a());
}
var ge = function () {
  return (
    (ge =
      Object.assign ||
      function (t) {
        for (var a, i = 1, o = arguments.length; i < o; i++) {
          a = arguments[i];
          for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
        }
        return t;
      }),
    ge.apply(this, arguments)
  );
};
function Qt(e, t) {
  var a = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (a[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
      t.indexOf(i[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[o]) &&
        (a[i[o]] = e[i[o]]);
  return a;
}
function Xt(e, t, a, i) {
  var o = arguments.length,
    n = o < 3 ? t : i === null ? (i = Object.getOwnPropertyDescriptor(t, a)) : i,
    r;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, a, i);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (r = e[c]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, a, n) : r(t, a)) || n);
  return (o > 3 && n && Object.defineProperty(t, a, n), n);
}
function Yt(e, t) {
  return function (a, i) {
    t(a, i, e);
  };
}
function Zt(e, t, a, i, o, n) {
  function r(y) {
    if (y !== void 0 && typeof y != "function") throw new TypeError("Function expected");
    return y;
  }
  for (
    var c = i.kind,
      u = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      s = !t && e ? (i.static ? e : e.prototype) : null,
      l = t || (s ? Object.getOwnPropertyDescriptor(s, i.name) : {}),
      d,
      f = !1,
      _ = a.length - 1;
    _ >= 0;
    _--
  ) {
    var h = {};
    for (var g in i) h[g] = g === "access" ? {} : i[g];
    for (var g in i.access) h.access[g] = i.access[g];
    h.addInitializer = function (y) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      n.push(r(y || null));
    };
    var v = (0, a[_])(c === "accessor" ? { get: l.get, set: l.set } : l[u], h);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      ((d = r(v.get)) && (l.get = d),
        (d = r(v.set)) && (l.set = d),
        (d = r(v.init)) && o.unshift(d));
    } else (d = r(v)) && (c === "field" ? o.unshift(d) : (l[u] = d));
  }
  (s && Object.defineProperty(s, i.name, l), (f = !0));
}
function er(e, t, a) {
  for (var i = arguments.length > 2, o = 0; o < t.length; o++)
    a = i ? t[o].call(e, a) : t[o].call(e);
  return i ? a : void 0;
}
function tr(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function rr(e, t, a) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: a ? "".concat(a, " ", t) : t })
  );
}
function nr(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function ir(e, t, a, i) {
  function o(n) {
    return n instanceof a
      ? n
      : new a(function (r) {
          r(n);
        });
  }
  return new (a || (a = Promise))(function (n, r) {
    function c(l) {
      try {
        s(i.next(l));
      } catch (d) {
        r(d);
      }
    }
    function u(l) {
      try {
        s(i.throw(l));
      } catch (d) {
        r(d);
      }
    }
    function s(l) {
      l.done ? n(l.value) : o(l.value).then(c, u);
    }
    s((i = i.apply(e, t || [])).next());
  });
}
function or(e, t) {
  var a = {
      label: 0,
      sent: function () {
        if (n[0] & 1) throw n[1];
        return n[1];
      },
      trys: [],
      ops: [],
    },
    i,
    o,
    n,
    r = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (r.next = c(0)),
    (r.throw = c(1)),
    (r.return = c(2)),
    typeof Symbol == "function" &&
      (r[Symbol.iterator] = function () {
        return this;
      }),
    r
  );
  function c(s) {
    return function (l) {
      return u([s, l]);
    };
  }
  function u(s) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; r && ((r = 0), s[0] && (a = 0)), a; )
      try {
        if (
          ((i = 1),
          o &&
            (n =
              s[0] & 2 ? o.return : s[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) &&
            !(n = n.call(o, s[1])).done)
        )
          return n;
        switch (((o = 0), n && (s = [s[0] & 2, n.value]), s[0])) {
          case 0:
          case 1:
            n = s;
            break;
          case 4:
            return (a.label++, { value: s[1], done: !1 });
          case 5:
            (a.label++, (o = s[1]), (s = [0]));
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
      } catch (l) {
        ((s = [6, l]), (o = 0));
      } finally {
        i = n = 0;
      }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
var pe = Object.create
  ? function (e, t, a, i) {
      i === void 0 && (i = a);
      var o = Object.getOwnPropertyDescriptor(t, a);
      ((!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) &&
        (o = {
          enumerable: !0,
          get: function () {
            return t[a];
          },
        }),
        Object.defineProperty(e, i, o));
    }
  : function (e, t, a, i) {
      (i === void 0 && (i = a), (e[i] = t[a]));
    };
function sr(e, t) {
  for (var a in e) a !== "default" && !Object.prototype.hasOwnProperty.call(t, a) && pe(t, e, a);
}
function ve(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    a = t && e[t],
    i = 0;
  if (a) return a.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e });
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ue(e, t) {
  var a = typeof Symbol == "function" && e[Symbol.iterator];
  if (!a) return e;
  var i = a.call(e),
    o,
    n = [],
    r;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = i.next()).done; ) n.push(o.value);
  } catch (c) {
    r = { error: c };
  } finally {
    try {
      o && !o.done && (a = i.return) && a.call(i);
    } finally {
      if (r) throw r.error;
    }
  }
  return n;
}
function ar() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Ue(arguments[t]));
  return e;
}
function ur() {
  for (var e = 0, t = 0, a = arguments.length; t < a; t++) e += arguments[t].length;
  for (var i = Array(e), o = 0, t = 0; t < a; t++)
    for (var n = arguments[t], r = 0, c = n.length; r < c; r++, o++) i[o] = n[r];
  return i;
}
function lr(e, t, a) {
  if (a || arguments.length === 2)
    for (var i = 0, o = t.length, n; i < o; i++)
      (n || !(i in t)) && (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
  return e.concat(n || Array.prototype.slice.call(t));
}
function B(e) {
  return this instanceof B ? ((this.v = e), this) : new B(e);
}
function cr(e, t, a) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = a.apply(e, t || []),
    o,
    n = [];
  return (
    (o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    c("next"),
    c("throw"),
    c("return", r),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function r(_) {
    return function (h) {
      return Promise.resolve(h).then(_, d);
    };
  }
  function c(_, h) {
    i[_] &&
      ((o[_] = function (g) {
        return new Promise(function (v, y) {
          n.push([_, g, v, y]) > 1 || u(_, g);
        });
      }),
      h && (o[_] = h(o[_])));
  }
  function u(_, h) {
    try {
      s(i[_](h));
    } catch (g) {
      f(n[0][3], g);
    }
  }
  function s(_) {
    _.value instanceof B ? Promise.resolve(_.value.v).then(l, d) : f(n[0][2], _);
  }
  function l(_) {
    u("next", _);
  }
  function d(_) {
    u("throw", _);
  }
  function f(_, h) {
    (_(h), n.shift(), n.length && u(n[0][0], n[0][1]));
  }
}
function dr(e) {
  var t, a;
  return (
    (t = {}),
    i("next"),
    i("throw", function (o) {
      throw o;
    }),
    i("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function i(o, n) {
    t[o] = e[o]
      ? function (r) {
          return (a = !a) ? { value: B(e[o](r)), done: !1 } : n ? n(r) : r;
        }
      : n;
  }
}
function fr(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    a;
  return t
    ? t.call(e)
    : ((e = typeof ve == "function" ? ve(e) : e[Symbol.iterator]()),
      (a = {}),
      i("next"),
      i("throw"),
      i("return"),
      (a[Symbol.asyncIterator] = function () {
        return this;
      }),
      a);
  function i(n) {
    a[n] =
      e[n] &&
      function (r) {
        return new Promise(function (c, u) {
          ((r = e[n](r)), o(c, u, r.done, r.value));
        });
      };
  }
  function o(n, r, c, u) {
    Promise.resolve(u).then(function (s) {
      n({ value: s, done: c });
    }, r);
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
  ke = function (e) {
    return (
      (ke =
        Object.getOwnPropertyNames ||
        function (t) {
          var a = [];
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (a[a.length] = i);
          return a;
        }),
      ke(e)
    );
  };
function hr(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var a = ke(e), i = 0; i < a.length; i++) a[i] !== "default" && pe(t, e, a[i]);
  return (Ur(t, e), t);
}
function gr(e) {
  return e && e.__esModule ? e : { default: e };
}
function vr(e, t, a, i) {
  if (a === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return a === "m" ? i : a === "a" ? i.call(e) : i ? i.value : t.get(e);
}
function pr(e, t, a, i, o) {
  if (i === "m") throw new TypeError("Private method is not writable");
  if (i === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (i === "a" ? o.call(e, a) : o ? (o.value = a) : t.set(e, a), a);
}
function yr(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function br(e, t, a) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var i, o;
    if (a) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      i = t[Symbol.asyncDispose];
    }
    if (i === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((i = t[Symbol.dispose]), a && (o = i));
    }
    if (typeof i != "function") throw new TypeError("Object not disposable.");
    (o &&
      (i = function () {
        try {
          o.call(this);
        } catch (n) {
          return Promise.reject(n);
        }
      }),
      e.stack.push({ value: t, dispose: i, async: a }));
  } else a && e.stack.push({ async: !0 });
  return t;
}
var Nr =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, a) {
        var i = new Error(a);
        return ((i.name = "SuppressedError"), (i.error = e), (i.suppressed = t), i);
      };
function mr(e) {
  function t(n) {
    ((e.error = e.hasError ? new Nr(n, e.error, "An error was suppressed during disposal.") : n),
      (e.hasError = !0));
  }
  var a,
    i = 0;
  function o() {
    for (; (a = e.stack.pop()); )
      try {
        if (!a.async && i === 1) return ((i = 0), e.stack.push(a), Promise.resolve().then(o));
        if (a.dispose) {
          var n = a.dispose.call(a.value);
          if (a.async)
            return (
              (i |= 2),
              Promise.resolve(n).then(o, function (r) {
                return (t(r), o());
              })
            );
        } else i |= 1;
      } catch (r) {
        t(r);
      }
    if (i === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return o();
}
function wr(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (a, i, o, n, r) {
        return i
          ? t
            ? ".jsx"
            : ".js"
          : o && (!n || !r)
            ? a
            : o + n + "." + r.toLowerCase() + "js";
      })
    : e;
}
const $r = {
    __extends: Wt,
    __assign: ge,
    __rest: Qt,
    __decorate: Xt,
    __param: Yt,
    __esDecorate: Zt,
    __runInitializers: er,
    __propKey: tr,
    __setFunctionName: rr,
    __metadata: nr,
    __awaiter: ir,
    __generator: or,
    __createBinding: pe,
    __exportStar: sr,
    __values: ve,
    __read: Ue,
    __spread: ar,
    __spreadArrays: ur,
    __spreadArray: lr,
    __await: B,
    __asyncGenerator: cr,
    __asyncDelegator: dr,
    __asyncValues: fr,
    __makeTemplateObject: _r,
    __importStar: hr,
    __importDefault: gr,
    __classPrivateFieldGet: vr,
    __classPrivateFieldSet: pr,
    __classPrivateFieldIn: yr,
    __addDisposableResource: br,
    __disposeResources: mr,
    __rewriteRelativeImportExtension: wr,
  },
  Gr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: br,
        get __assign() {
          return ge;
        },
        __asyncDelegator: dr,
        __asyncGenerator: cr,
        __asyncValues: fr,
        __await: B,
        __awaiter: ir,
        __classPrivateFieldGet: vr,
        __classPrivateFieldIn: yr,
        __classPrivateFieldSet: pr,
        __createBinding: pe,
        __decorate: Xt,
        __disposeResources: mr,
        __esDecorate: Zt,
        __exportStar: sr,
        __extends: Wt,
        __generator: or,
        __importDefault: gr,
        __importStar: hr,
        __makeTemplateObject: _r,
        __metadata: nr,
        __param: Yt,
        __propKey: tr,
        __read: Ue,
        __rest: Qt,
        __rewriteRelativeImportExtension: wr,
        __runInitializers: er,
        __setFunctionName: rr,
        __spread: ar,
        __spreadArray: lr,
        __spreadArrays: ur,
        __values: ve,
        default: $r,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  O = Br(Gr);
var k = {},
  ze;
function zr() {
  return (
    ze ||
      ((ze = 1),
      Object.defineProperty(k, "__esModule", { value: !0 }),
      (k.NavigationTarget = void 0),
      (k.NavigationTarget = {
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
    k
  );
}
var me = {},
  we = {},
  L = {},
  U = {},
  Ve;
function E() {
  if (Ve) return U;
  ((Ve = 1), Object.defineProperty(U, "__esModule", { value: !0 }), (U.BridgeAPIError = void 0));
  class e extends Error {}
  return ((U.BridgeAPIError = e), U);
}
var He;
function w() {
  if (He) return L;
  ((He = 1), Object.defineProperty(L, "__esModule", { value: !0 }), (L.getCallBridge = void 0));
  const e = E();
  function t(i) {
    return !!i?.callBridge;
  }
  const a = () => {
    if (!t(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((L.getCallBridge = a), L);
}
var N = {},
  Ke;
function Ne() {
  if (Ke) return N;
  ((Ke = 1), Object.defineProperty(N, "__esModule", { value: !0 }), (N.withRateLimiter = void 0));
  const e = E(),
    t = (a, i, o, n) => {
      let r = Date.now(),
        c = 0;
      return async (...u) => {
        const s = Date.now();
        if ((s - r > o && ((r = s), (c = 0)), c >= i))
          throw new e.BridgeAPIError(n || "Too many invocations.");
        return ((c = c + 1), a(...u));
      };
    };
  return ((N.withRateLimiter = t), N);
}
var Je;
function Vr() {
  return (
    Je ||
      ((Je = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = w(),
          a = E(),
          i = Ne(),
          o = (0, t.getCallBridge)(),
          n = (u) => {
            if (u && Object.values(u).some((s) => typeof s == "function"))
              throw new a.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          r = (u, s) => {
            if (typeof u != "string") throw new a.BridgeAPIError("functionKey must be a string!");
            return (n(s), o("invoke", { functionKey: u, payload: s }));
          };
        e.invoke = (0, i.withRateLimiter)(
          r,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function c() {
          return e.invoke;
        }
        e.makeInvoke = c;
      })(we)),
    we
  );
}
var We;
function Hr() {
  return (
    We ||
      ((We = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), O.__exportStar(Vr(), e));
      })(me)),
    me
  );
}
var Ee = {},
  $ = {},
  Oe = {},
  Qe;
function Er() {
  return (
    Qe ||
      ((Qe = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = w(),
          a = E(),
          i = Ne(),
          o = 500,
          n = 25,
          r = 1e3 * n;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, t.getCallBridge)(),
          u = (d) => {
            if (d && Object.values(d).some((f) => typeof f == "function"))
              throw new a.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          s = (d) => async (f) => {
            u(f);
            const _ = { ...f, invokeType: `ui-${d.toLowerCase()}-fetch` },
              h = await c("invoke", _),
              { success: g, payload: v, error: y } = h ?? {},
              m = { ...(g ? v : y) };
            if (m && m.headers)
              for (const j in m.headers)
                Array.isArray(m.headers[j]) && (m.headers[j] = m.headers[j].join(","));
            return m;
          },
          l = (d) => {
            const f = s(d);
            return (0, i.withRateLimiter)(
              f,
              o,
              r,
              `${d} invocation calls are rate limited at ${o}/${n}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(Oe)),
    Oe
  );
}
var Xe;
function Kr() {
  if (Xe) return $;
  ((Xe = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.invokeRemote = void 0));
  const e = Er(),
    t = (a) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(a);
  return (($.invokeRemote = t), $);
}
var G = {},
  Ye;
function Jr() {
  if (Ye) return G;
  ((Ye = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.invokeService = void 0));
  const e = Er(),
    t = (a) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(a);
  return ((G.invokeService = t), G);
}
var Ze;
function Wr() {
  return (
    Ze ||
      ((Ze = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = O;
        (t.__exportStar(Kr(), e), t.__exportStar(Jr(), e));
      })(Ee)),
    Ee
  );
}
var Se = {},
  z = {},
  V = {},
  et;
function Qr() {
  if (et) return V;
  ((et = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.submit = void 0));
  const e = w(),
    t = E(),
    a = (0, e.getCallBridge)(),
    i = async (o) => {
      if ((await a("submit", o)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((V.submit = i), V);
}
var H = {},
  tt;
function Xr() {
  if (tt) return H;
  ((tt = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.close = void 0));
  const e = w(),
    t = E(),
    a = (0, e.getCallBridge)(),
    i = async (o) => {
      try {
        if ((await a("close", o)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((H.close = i), H);
}
var K = {},
  rt;
function Yr() {
  if (rt) return K;
  ((rt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.open = void 0));
  const e = w(),
    t = E(),
    a = (0, e.getCallBridge)(),
    i = async () => {
      try {
        if ((await a("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((K.open = i), K);
}
var J = {},
  nt;
function Zr() {
  if (nt) return J;
  ((nt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.refresh = void 0));
  const e = w(),
    t = E(),
    a = (0, e.getCallBridge)(),
    i = async (o) => {
      if ((await a("refresh", o)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((J.refresh = i), J);
}
var W = {},
  it;
function en() {
  if (it) return W;
  ((it = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.createHistory = void 0));
  const t = (0, w().getCallBridge)(),
    a = async () => {
      const i = await t("createHistory");
      return (
        i.listen((o) => {
          i.location = o;
        }),
        i
      );
    };
  return ((W.createHistory = a), W);
}
var Q = {},
  Re = {},
  S = {},
  ot;
function Or() {
  return (
    ot ||
      ((ot = 1),
      Object.defineProperty(S, "__esModule", { value: !0 }),
      (S.FORGE_SUPPORTED_LOCALE_CODES = S.I18N_BUNDLE_FOLDER_NAME = S.I18N_INFO_FILE_NAME = void 0),
      (S.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (S.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (S.FORGE_SUPPORTED_LOCALE_CODES = [
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
    S
  );
}
var D = {},
  st;
function tn() {
  if (st) return D;
  ((st = 1),
    Object.defineProperty(D, "__esModule", { value: !0 }),
    (D.TranslationsGetter = D.TranslationGetterError = void 0));
  const e = (i, o) => {
    i.includes(o) || i.push(o);
  };
  class t extends Error {
    constructor(o) {
      (super(o), (this.name = "TranslationGetterError"));
    }
  }
  D.TranslationGetterError = t;
  class a {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(o) {
      this.resourcesAccessor = o;
    }
    async getTranslations(o, n = { fallback: !0 }) {
      const r = await this.getI18nInfoConfig(),
        { fallback: c } = n;
      if (!c) {
        let u;
        return (
          r.locales.includes(o) && (u = await this.getTranslationResource(o)),
          { translations: u ?? null, locale: o }
        );
      }
      for (const u of this.getLocaleLookupOrder(o, r)) {
        const s = await this.getTranslationResource(u);
        if (s) return { translations: s, locale: u };
      }
      return { translations: null, locale: o };
    }
    async getTranslationsByLocaleLookupOrder(o) {
      const n = await this.getI18nInfoConfig(),
        r = this.getLocaleLookupOrder(o, n);
      return await Promise.all(
        r.map(async (c) => {
          const u = await this.getTranslationResource(c);
          return { locale: c, translations: u };
        }),
      );
    }
    reset() {
      ((this.i18nInfoConfig = null), this.translationResources.clear());
    }
    async getTranslationResource(o) {
      let n = this.translationResources.get(o);
      if (!n)
        try {
          ((n = await this.resourcesAccessor.getTranslationResource(o)),
            this.translationResources.set(o, n));
        } catch (r) {
          throw r instanceof t ? r : new t(`Failed to get translation resource for locale: ${o}`);
        }
      return n;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (o) {
          throw o instanceof t ? o : new t("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(o, n) {
      const { locales: r, fallback: c } = n,
        u = [o],
        s = c[o];
      return (
        s && Array.isArray(s) && s.length > 0 && u.push(...s),
        e(u, n.fallback.default),
        u.filter((l) => r.includes(l))
      );
    }
  }
  return ((D.TranslationsGetter = a), D);
}
var X = {},
  Pe = {},
  at;
function Sr() {
  return (
    at ||
      ((at = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const a = O.__importDefault(Mr()),
          i = (n, r, c) => {
            const u = n[c];
            return u ? (0, e.getTranslationValueFromContent)(u, r) : null;
          };
        e.getTranslationValue = i;
        const o = (n, r) => {
          let c = n[r];
          if (!c) {
            const u = r.split(".");
            u.length > 1 && (c = (0, a.default)(n, u, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = o;
      })(Pe)),
    Pe
  );
}
var ut;
function rn() {
  if (ut) return X;
  ((ut = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.Translator = void 0));
  const e = Sr();
  class t {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(i, o) {
      ((this.locale = i), (this.translationsGetter = o));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(i) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let o = this.cache.get(i);
      if (o === void 0) {
        for (const { translations: n } of this.localeLookupOrderedTranslations) {
          const r = (0, e.getTranslationValueFromContent)(n, i);
          if (r !== null) {
            o = r;
            break;
          }
        }
        ((o = o ?? null), this.cache.set(i, o));
      }
      return o;
    }
  }
  return ((X.Translator = t), X);
}
var Y = {},
  lt;
function nn() {
  if (lt) return Y;
  ((lt = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.ensureLocale = void 0));
  const e = Or(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    a = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    i = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (n, r) => {
        const [c] = r.split("-");
        return (n[c] || (n[c] = r), n);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    o = (n) => {
      const r = n.replace("_", "-");
      return t.has(r) ? r : (i[r] ?? a[r] ?? null);
    };
  return ((Y.ensureLocale = o), Y);
}
var Ie = {},
  ct;
function on() {
  return (
    ct ||
      ((ct = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (s) => typeof s == "object" && s !== null && !Array.isArray(s),
          a = (s) => typeof s?.i18n == "string",
          i = (s) => s.startsWith("connect-"),
          o = (s) => s.startsWith("core:"),
          n = (s) => {
            const l = new Set(),
              d = (f, _) =>
                !t(f) || l.has(f)
                  ? []
                  : (l.add(f),
                    Object.entries(f).flatMap(([h, g]) => {
                      const v = [..._, h];
                      return a(g)
                        ? [{ propertyPath: v, key: g.i18n }]
                        : Array.isArray(g)
                          ? g.flatMap((y) => d(y, v))
                          : d(g, v);
                    }));
            return d(s, []);
          },
          r = (s) =>
            Object.entries(s).flatMap(([l, d]) =>
              !i(l) && !o(l) && d && Array.isArray(d) && d.length > 0 ? d.map((f) => [f, l]) : [],
            );
        e.getI18nSupportedModuleEntries = r;
        const c = (s) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(s)) {
            const f = n(d[0]);
            for (const { key: _ } of f) l.add(_);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = c;
        const u = (s) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(s)) {
            const f = n(d[0]);
            for (const _ of f) l.push({ moduleName: d[1], ..._ });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = u;
      })(Ie)),
    Ie
  );
}
var je = {},
  dt;
function sn() {
  return (dt || ((dt = 1), Object.defineProperty(je, "__esModule", { value: !0 })), je);
}
var ft;
function Rr() {
  return (
    ft ||
      ((ft = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = O;
        (t.__exportStar(Or(), e),
          t.__exportStar(tn(), e),
          t.__exportStar(rn(), e),
          t.__exportStar(nn(), e));
        var a = Sr();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return a.getTranslationValue;
          },
        });
        var i = on();
        (Object.defineProperty(e, "extractI18nKeysFromModules", {
          enumerable: !0,
          get: function () {
            return i.extractI18nKeysFromModules;
          },
        }),
          Object.defineProperty(e, "extractI18nPropertiesFromModules", {
            enumerable: !0,
            get: function () {
              return i.extractI18nPropertiesFromModules;
            },
          }),
          Object.defineProperty(e, "getI18nSupportedModuleEntries", {
            enumerable: !0,
            get: function () {
              return i.getI18nSupportedModuleEntries;
            },
          }),
          t.__exportStar(sn(), e));
      })(Re)),
    Re
  );
}
var _t;
function an() {
  if (_t) return Q;
  ((_t = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.getContext = void 0));
  const e = w(),
    t = Rr(),
    a = (0, e.getCallBridge)(),
    i = async () => {
      var o;
      const n = await a("getContext"),
        r = n?.locale;
      return (r && (n.locale = (o = (0, t.ensureLocale)(r)) !== null && o !== void 0 ? o : r), n);
    };
  return ((Q.getContext = i), Q);
}
var Z = {},
  ht;
function un() {
  if (ht) return Z;
  ((ht = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.changeWindowTitle = void 0));
  const e = w(),
    t = E(),
    a = (0, e.getCallBridge)(),
    i = async (o) => {
      try {
        await a("changeWindowTitle", o);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((Z.changeWindowTitle = i), Z);
}
var ee = {},
  gt;
function ln() {
  if (gt) return ee;
  ((gt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.theme = void 0));
  const t = (0, w().getCallBridge)();
  return ((ee.theme = { enable: () => t("enableTheming") }), ee);
}
var te = {},
  re = {},
  Ce = {},
  F = {},
  vt;
function Pr() {
  if (vt) return F;
  ((vt = 1),
    Object.defineProperty(F, "__esModule", { value: !0 }),
    (F.blobToBase64 = F.base64ToBlob = void 0));
  const e = (a, i) => {
    if (!a) return null;
    const o = a.includes(";base64") ? a.split(",")[1] : a,
      n = atob(o),
      r = new Array(n.length);
    for (let u = 0; u < n.length; u++) r[u] = n.charCodeAt(u);
    const c = new Uint8Array(r);
    return new Blob([c], { type: i });
  };
  F.base64ToBlob = e;
  const t = (a) =>
    new Promise((i, o) => {
      const n = new FileReader();
      ((n.onloadend = () => {
        i(n.result);
      }),
        (n.onerror = o),
        n.readAsDataURL(a));
    });
  return ((F.blobToBase64 = t), F);
}
var pt;
function cn() {
  return (
    pt ||
      ((pt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Pr(),
          a = (s) => {
            if (
              typeof s != "object" ||
              s === null ||
              Object.prototype.toString.call(s) !== "[object Object]"
            )
              return !1;
            const l = Object.getPrototypeOf(s);
            if (l === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(l, "constructor") && l.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(s)
            );
          },
          i = async (s) => ({ data: await (0, t.blobToBase64)(s), type: s.type }),
          o = (s) => (0, t.base64ToBlob)(s.data, s.type),
          n = async (s) => {
            if (s instanceof Blob) return { ...(await i(s)), __isBlobData: !0 };
            if (Array.isArray(s))
              return Promise.all(s.map((l) => (0, e.serialiseBlobsInPayload)(l)));
            if (s && a(s)) {
              const l = await Promise.all(
                Object.entries(s).map(async ([d, f]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(f),
                ]),
              );
              return Object.fromEntries(l);
            }
            return s;
          };
        e.serialiseBlobsInPayload = n;
        const r = (s) => {
          if (s && a(s) && "__isBlobData" in s) {
            const l = s;
            return o({ data: l.data, type: l.type });
          }
          if (Array.isArray(s)) return s.map((l) => (0, e.deserialiseBlobsInPayload)(l));
          if (s && a(s)) {
            const l = {};
            for (const [d, f] of Object.entries(s)) l[d] = (0, e.deserialiseBlobsInPayload)(f);
            return l;
          }
          return s;
        };
        e.deserialiseBlobsInPayload = r;
        const c = (s) =>
          s instanceof Blob
            ? !0
            : Array.isArray(s)
              ? s.some((l) => (0, e.containsBlobs)(l))
              : s && a(s)
                ? Object.values(s).some((l) => (0, e.containsBlobs)(l))
                : !1;
        e.containsBlobs = c;
        const u = (s) =>
          s && a(s) && "__isBlobData" in s
            ? !0
            : Array.isArray(s)
              ? s.some((l) => (0, e.containsSerialisedBlobs)(l))
              : s && a(s)
                ? Object.values(s).some((l) => (0, e.containsSerialisedBlobs)(l))
                : !1;
        e.containsSerialisedBlobs = u;
      })(Ce)),
    Ce
  );
}
var yt;
function Ir() {
  if (yt) return re;
  ((yt = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.events = void 0));
  const e = w(),
    t = cn(),
    a = (0, e.getCallBridge)(),
    i = async (n, r) => {
      let c = r;
      return (
        (0, t.containsBlobs)(r) && (c = await (0, t.serialiseBlobsInPayload)(r)),
        a("emit", { event: n, payload: c })
      );
    },
    o = (n, r) =>
      a("on", {
        event: n,
        callback: (u) => {
          let s = u;
          return (
            (0, t.containsSerialisedBlobs)(u) && (s = (0, t.deserialiseBlobsInPayload)(u)),
            r(s)
          );
        },
      });
  return ((re.events = { emit: i, on: o }), re);
}
var bt;
function dn() {
  if (bt) return te;
  ((bt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.emitReadyEvent = void 0));
  const e = Ir(),
    t = jr(),
    a = "EXTENSION_READY",
    i = async () => {
      const o = await t.view.getContext();
      await e.events.emit(a, { localId: o.localId });
    };
  return ((te.emitReadyEvent = i), te);
}
var mt;
function jr() {
  if (mt) return z;
  ((mt = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.view = void 0));
  const e = Qr(),
    t = Xr(),
    a = Yr(),
    i = Zr(),
    o = en(),
    n = an(),
    r = un(),
    c = ln(),
    u = dn();
  return (
    (z.view = {
      submit: e.submit,
      close: t.close,
      open: a.open,
      refresh: i.refresh,
      createHistory: o.createHistory,
      getContext: n.getContext,
      theme: c.theme,
      changeWindowTitle: r.changeWindowTitle,
      emitReadyEvent: u.emitReadyEvent,
    }),
    z
  );
}
var wt;
function Cr() {
  return (
    wt ||
      ((wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), O.__exportStar(jr(), e));
      })(Se)),
    Se
  );
}
var De = {},
  ne = {},
  Et;
function fn() {
  if (Et) return ne;
  ((Et = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.router = void 0));
  const t = (0, w().getCallBridge)(),
    a = async (r) => {
      if (!r?.target) throw new Error("target is required for getUrl");
      const c = await t("getUrl", r);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (u) {
        throw new Error(`Failed to parse URL: ${c} (${u})`);
      }
    },
    i = (r) => {
      if (typeof r == "string") return t("navigate", { url: r, type: "same-tab" });
      if (!r?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...r, type: "same-tab" });
    },
    o = (r) => {
      if (typeof r == "string") return t("navigate", { url: r, type: "new-tab" });
      if (!r?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...r, type: "new-tab" });
    },
    n = async () => t("reload");
  return ((ne.router = { getUrl: a, navigate: i, open: o, reload: n }), ne);
}
var Ot;
function _n() {
  return (
    Ot ||
      ((Ot = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), O.__exportStar(fn(), e));
      })(De)),
    De
  );
}
var Fe = {},
  ie = {},
  St;
function hn() {
  if (St) return ie;
  ((St = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.Modal = void 0));
  const e = w(),
    t = E(),
    a = (0, e.getCallBridge)(),
    i = () => {};
  class o {
    constructor(r) {
      var c, u;
      ((this.resource = r?.resource || null),
        (this.onClose = r?.onClose || i),
        (this.size = r?.size || "medium"),
        (this.context = r?.context || {}),
        (this.closeOnEscape = (c = r?.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick =
          (u = r?.closeOnOverlayClick) !== null && u !== void 0 ? u : !0));
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
  return ((ie.Modal = o), ie);
}
var Rt;
function gn() {
  return (
    Rt ||
      ((Rt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), O.__exportStar(hn(), e));
      })(Fe)),
    Fe
  );
}
var R = {},
  oe = {},
  Pt;
function vn() {
  if (Pt) return oe;
  ((Pt = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.productFetchApi = void 0));
  const e = Pr(),
    t = async (n) => {
      const r = {};
      for (const [c, u] of n.entries())
        if (c === "file") {
          const s = u.name,
            l = u.type;
          ((r.file = await (0, e.blobToBase64)(u)), (r.__fileName = s), (r.__fileType = l));
        } else r[c] = u;
      return JSON.stringify(r);
    },
    a = (n) => {
      if (!n) return n;
      if ("signal" in n) {
        const { signal: r, ...c } = n;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          c
        );
      }
      return n;
    },
    i = async (n) => {
      const r = n?.body instanceof FormData,
        c = r ? await t(n?.body) : n?.body,
        u = new Request("", { body: c, method: n?.method, headers: n?.headers }),
        s = Object.fromEntries(u.headers.entries());
      return {
        body: u.method !== "GET" ? await u.text() : null,
        headers: new Headers(s),
        isMultipartFormData: r,
      };
    },
    o = (n) => {
      const r = async (c, u, s) => {
        const l = a(s),
          { body: d, headers: f, isMultipartFormData: _ } = await i(l);
        f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
        const h = {
            product: c,
            restPath: u,
            fetchRequestInit: { ...l, body: d, headers: [...f.entries()] },
            isMultipartFormData: _,
          },
          {
            body: g,
            headers: v,
            statusText: y,
            status: m,
            isAttachment: j,
          } = await n("fetchProduct", h),
          b = j ? (0, e.base64ToBlob)(g, v["content-type"]) : g;
        return new Response(b || null, { headers: v, status: m, statusText: y });
      };
      return {
        requestConfluence: (c, u) => r("confluence", c, u),
        requestJira: (c, u) => r("jira", c, u),
        requestBitbucket: (c, u) => r("bitbucket", c, u),
      };
    };
  return ((oe.productFetchApi = o), oe);
}
var It;
function pn() {
  if (It) return R;
  It = 1;
  var e;
  (Object.defineProperty(R, "__esModule", { value: !0 }),
    (R.requestBitbucket = R.requestJira = R.requestConfluence = void 0));
  const t = w();
  return (
    (e = (0, vn().productFetchApi)((0, t.getCallBridge)())),
    (R.requestConfluence = e.requestConfluence),
    (R.requestJira = e.requestJira),
    (R.requestBitbucket = e.requestBitbucket),
    R
  );
}
var xe = {},
  se = {},
  jt;
function yn() {
  if (jt) return se;
  ((jt = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.showFlag = void 0));
  const e = w(),
    t = E(),
    a = (0, e.getCallBridge)(),
    i = (o) => {
      var n;
      if (!o.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const r = a("showFlag", { ...o, type: (n = o.type) !== null && n !== void 0 ? n : "info" });
      return { close: async () => (await r, a("closeFlag", { id: o.id })) };
    };
  return ((se.showFlag = i), se);
}
var Ct;
function bn() {
  return (
    Ct ||
      ((Ct = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = yn();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(xe)),
    xe
  );
}
var Ae = {},
  Dt;
function mn() {
  return (
    Dt ||
      ((Dt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), O.__exportStar(Ir(), e));
      })(Ae)),
    Ae
  );
}
var Te = {},
  ae = {},
  Ft;
function wn() {
  if (Ft) return ae;
  ((Ft = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.realtime = void 0));
  const t = (0, w().getCallBridge)(),
    a = (r, c, u) => t("publishRealtimeChannel", { channelName: r, eventPayload: c, options: u }),
    i = (r, c, u) => t("subscribeRealtimeChannel", { channelName: r, onEvent: c, options: u }),
    o = (r, c, u) =>
      t("publishRealtimeChannel", { channelName: r, eventPayload: c, options: u, isGlobal: !0 }),
    n = (r, c, u) =>
      t("subscribeRealtimeChannel", { channelName: r, onEvent: c, options: u, isGlobal: !0 });
  return ((ae.realtime = { publish: a, subscribe: i, publishGlobal: o, subscribeGlobal: n }), ae);
}
var qe = {},
  xt;
function En() {
  return (
    xt ||
      ((xt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Jira = void 0),
          (function (t) {
            ((t.Board = "board"), (t.Issue = "issue"), (t.Project = "project"));
          })(e.Jira || (e.Jira = {})));
      })(qe)),
    qe
  );
}
var At;
function On() {
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
        var a = En();
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
var P = {},
  Tt;
function Sn() {
  if (Tt) return P;
  ((Tt = 1),
    Object.defineProperty(P, "__esModule", { value: !0 }),
    (P.createTranslationFunction = P.getTranslations = P.resetTranslationsCache = void 0));
  const e = Rr(),
    t = Cr(),
    a = {
      getI18nInfoConfig: async () => {
        const c = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!c.ok) throw new Error("Failed to get i18n info config: " + c.statusText);
        return (await c.json()).config;
      },
      getTranslationResource: async (c) => {
        const u = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${c}.json`);
        if (!u.ok) throw new Error(`Failed to get translation resource for locale: ${c}`);
        return u.json();
      },
    },
    i = new e.TranslationsGetter(a),
    o = () => {
      i.reset();
    };
  P.resetTranslationsCache = o;
  const n = async (c = null, u = { fallback: !0 }) => {
    let s = c;
    return (s || (s = (await t.view.getContext()).locale), await i.getTranslations(s, u));
  };
  P.getTranslations = n;
  const r = async (c = null) => {
    let u = c;
    u || (u = (await t.view.getContext()).locale);
    const s = new e.Translator(u, i);
    return (
      await s.init(),
      (l, d) => {
        var f, _;
        return (_ = (f = s.translate(l)) !== null && f !== void 0 ? f : d) !== null && _ !== void 0
          ? _
          : l;
      }
    );
  };
  return ((P.createTranslationFunction = r), P);
}
var Be = {},
  ue = {},
  qt;
function Dr() {
  if (qt) return ue;
  ((qt = 1),
    Object.defineProperty(ue, "__esModule", { value: !0 }),
    (ue.initFeatureFlags = void 0));
  const e = w(),
    t = E(),
    a = Ne(),
    i = 500,
    o = 1e3 * 25,
    n = (0, e.getCallBridge)(),
    r = (u) => {
      if (!u || !u.user)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(u).some((s) => typeof s == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (u) => (r(u), n("initFeatureFlags", { user: u.user }));
  return (
    (ue.initFeatureFlags = (0, a.withRateLimiter)(
      c,
      i,
      o,
      "Feature flags initialisation calls are rate limited at 500req/25s",
    )),
    ue
  );
}
var le = {},
  x = {},
  T = {},
  _e = {},
  Bt;
function Rn() {
  if (Bt) return _e;
  ((Bt = 1), Object.defineProperty(_e, "__esModule", { value: !0 }));
  const e = I();
  let t = class {
    constructor(i) {
      ((this._sdkKey = i),
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
    setValues(i, o) {
      var n;
      if (!i) return !1;
      const r = (0, e._typedJsonParse)(i.data, "has_updates", "EvaluationResponse");
      return r == null
        ? !1
        : ((this._source = i.source),
          r?.has_updates !== !0 ||
            ((this._rawValues = i.data),
            (this._lcut = r.time),
            (this._receivedAt = i.receivedAt),
            (this._values = r),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(i.source, r)),
            i.source && r.user && this._setWarningState(o, r),
            e.SDKFlags.setFlags(this._sdkKey, (n = r.sdk_flags) !== null && n !== void 0 ? n : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(i) {
      var o;
      return this._getDetailedStoreResult(
        (o = this._values) === null || o === void 0 ? void 0 : o.feature_gates,
        i,
      );
    }
    getConfig(i) {
      var o;
      return this._getDetailedStoreResult(
        (o = this._values) === null || o === void 0 ? void 0 : o.dynamic_configs,
        i,
      );
    }
    getLayer(i) {
      var o;
      return this._getDetailedStoreResult(
        (o = this._values) === null || o === void 0 ? void 0 : o.layer_configs,
        i,
      );
    }
    getParamStore(i) {
      var o;
      return this._getDetailedStoreResult(
        (o = this._values) === null || o === void 0 ? void 0 : o.param_stores,
        i,
      );
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var i;
      return (i = this._values) === null || i === void 0 ? void 0 : i.exposures;
    }
    _extractBootstrapMetadata(i, o) {
      if (i !== "Bootstrap") return null;
      const n = {};
      return (
        o.user && (n.user = o.user),
        o.sdkInfo && (n.generatorSDKInfo = o.sdkInfo),
        (n.lcut = o.time),
        n
      );
    }
    _getDetailedStoreResult(i, o) {
      let n = null;
      return (
        i && (n = i[o] ? i[o] : i[(0, e._DJB2)(o)]),
        { result: n, details: this._getDetails(n == null) }
      );
    }
    _setWarningState(i, o) {
      var n, r;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((n = i.customIDs) === null || n === void 0 ? void 0 : n.stableID) !== c &&
        ((!((r = i.customIDs) === null || r === void 0) && r.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in o) {
        const u = o.user;
        (0, e._getFullUserHash)(i) !== (0, e._getFullUserHash)(u) &&
          this._warnings.add("PartialUserMatch");
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues")
        return { reason: this._source };
      const i = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (i.warnings = Array.from(this._warnings)), i);
    }
    _getDetails(i) {
      var o, n;
      const r = this.getCurrentSourceDetails();
      let c = r.reason;
      const u = (o = r.warnings) !== null && o !== void 0 ? o : [];
      (this._source === "Bootstrap" && u.length > 0 && (c = c + u[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${i ? "Unrecognized" : "Recognized"}`));
      const s =
        this._source === "Bootstrap" && (n = this._bootstrapMetadata) !== null && n !== void 0
          ? n
          : void 0;
      return (s && (r.bootstrapMetadata = s), Object.assign(Object.assign({}, r), { reason: c }));
    }
  };
  return ((_e.default = t), _e);
}
var q = {},
  ce = {},
  Mt;
function Pn() {
  if (Mt) return ce;
  ((Mt = 1),
    Object.defineProperty(ce, "__esModule", { value: !0 }),
    (ce._resolveDeltasResponse = void 0));
  const e = I(),
    t = 2;
  function a(r, c) {
    const u = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!u) return { hadBadDeltaChecksum: !0 };
    const s = i(r, u),
      l = o(s),
      d = (0, e._DJB2Object)(
        {
          feature_gates: l.feature_gates,
          dynamic_configs: l.dynamic_configs,
          layer_configs: l.layer_configs,
        },
        t,
      );
    return d === u.checksumV2
      ? JSON.stringify(l)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: l,
          badFullResponse: u.deltas_full_response,
        };
  }
  ce._resolveDeltasResponse = a;
  function i(r, c) {
    return Object.assign(Object.assign(Object.assign({}, r), c), {
      feature_gates: Object.assign(Object.assign({}, r.feature_gates), c.feature_gates),
      layer_configs: Object.assign(Object.assign({}, r.layer_configs), c.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, r.dynamic_configs), c.dynamic_configs),
    });
  }
  function o(r) {
    const c = r;
    return (
      n(r.deleted_gates, c.feature_gates),
      delete c.deleted_gates,
      n(r.deleted_configs, c.dynamic_configs),
      delete c.deleted_configs,
      n(r.deleted_layers, c.layer_configs),
      delete c.deleted_layers,
      c
    );
  }
  function n(r, c) {
    r?.forEach((u) => {
      delete c[u];
    });
  }
  return ce;
}
var kt;
function Fr() {
  if (kt) return q;
  kt = 1;
  var e =
    (q && q.__awaiter) ||
    function (o, n, r, c) {
      function u(s) {
        return s instanceof r
          ? s
          : new r(function (l) {
              l(s);
            });
      }
      return new (r || (r = Promise))(function (s, l) {
        function d(h) {
          try {
            _(c.next(h));
          } catch (g) {
            l(g);
          }
        }
        function f(h) {
          try {
            _(c.throw(h));
          } catch (g) {
            l(g);
          }
        }
        function _(h) {
          h.done ? s(h.value) : u(h.value).then(d, f);
        }
        _((c = c.apply(o, n || [])).next());
      });
    };
  Object.defineProperty(q, "__esModule", { value: !0 });
  const t = I(),
    a = Pn();
  class i extends t.NetworkCore {
    constructor(n, r) {
      super(n, r);
      const c = n?.networkConfig;
      ((this._option = n),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          c?.initializeUrl,
          c?.api,
          c?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(n, r, c, u, s) {
      return e(this, void 0, void 0, function* () {
        var l, d, f, _, h, g;
        const v = r ? (0, t._typedJsonParse)(r, "has_updates", "InitializeResponse") : null;
        let y = {
          user: u,
          hash:
            (f =
              (d = (l = this._option) === null || l === void 0 ? void 0 : l.networkConfig) ===
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
            ((g =
              (h = (_ = this._option) === null || _ === void 0 ? void 0 : _.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && g !== void 0
              ? g
              : "djb2");
          y = Object.assign(Object.assign({}, y), {
            sinceTime: s && !m ? v.time : 0,
            previousDerivedFields: "derived_fields" in v && s ? v.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: v.full_checksum,
            partialUserMatchSinceTime: m ? 0 : v.time,
          });
        }
        return this._fetchEvaluations(n, v, y, c);
      });
    }
    _fetchEvaluations(n, r, c, u) {
      return e(this, void 0, void 0, function* () {
        var s, l;
        const d = yield this.post({
          sdkKey: n,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: u,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (s = d?.body) !== null && s !== void 0 ? s : null;
        if (
          r?.has_updates !== !0 ||
          ((l = d.body) === null || l === void 0 ? void 0 : l.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const f = (0, a._resolveDeltasResponse)(r, d.body);
        return typeof f == "string"
          ? f
          : this._fetchEvaluations(
              n,
              r,
              Object.assign(Object.assign(Object.assign({}, c), f), {
                deltasResponseRequested: !1,
              }),
              u,
            );
      });
    }
  }
  return ((q.default = i), q);
}
var de = {},
  Lt;
function In() {
  if (Lt) return de;
  ((Lt = 1),
    Object.defineProperty(de, "__esModule", { value: !0 }),
    (de._makeParamStoreGetter = void 0));
  const e = I(),
    t = { disableExposureLog: !0 };
  function a(l) {
    return l == null || l.disableExposureLog === !1;
  }
  function i(l, d) {
    return d != null && !(0, e._isTypeMatch)(l, d);
  }
  function o(l, d) {
    return l.value;
  }
  function n(l, d, f) {
    return l.getFeatureGate(d.gate_name, a(f) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function r(l, d, f, _) {
    const g = l.getDynamicConfig(d.config_name, a(_) ? void 0 : t).get(d.param_name);
    return i(g, f) ? f : g;
  }
  function c(l, d, f, _) {
    const g = l.getExperiment(d.experiment_name, a(_) ? void 0 : t).get(d.param_name);
    return i(g, f) ? f : g;
  }
  function u(l, d, f, _) {
    const g = l.getLayer(d.layer_name, a(_) ? void 0 : t).get(d.param_name);
    return i(g, f) ? f : g;
  }
  function s(l, d, f) {
    return (_, h) => {
      if (d == null) return h;
      const g = d[_];
      if (g == null || (h != null && (0, e._typeOf)(h) !== g.param_type)) return h;
      switch (g.ref_type) {
        case "static":
          return o(g);
        case "gate":
          return n(l, g, f);
        case "dynamic_config":
          return r(l, g, h, f);
        case "experiment":
          return c(l, g, h, f);
        case "layer":
          return u(l, g, h, f);
        default:
          return h;
      }
    };
  }
  return ((de._makeParamStoreGetter = s), de);
}
var A = {},
  Ut;
function jn() {
  if (Ut) return A;
  Ut = 1;
  var e =
    (A && A.__awaiter) ||
    function (o, n, r, c) {
      function u(s) {
        return s instanceof r
          ? s
          : new r(function (l) {
              l(s);
            });
      }
      return new (r || (r = Promise))(function (s, l) {
        function d(h) {
          try {
            _(c.next(h));
          } catch (g) {
            l(g);
          }
        }
        function f(h) {
          try {
            _(c.throw(h));
          } catch (g) {
            l(g);
          }
        }
        function _(h) {
          h.done ? s(h.value) : u(h.value).then(d, f);
        }
        _((c = c.apply(o, n || [])).next());
      });
    };
  (Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.StatsigEvaluationsDataAdapter = void 0));
  const t = I(),
    a = Fr();
  let i = class extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(n, r, c) {
      (super.attach(n, r, c),
        c !== null && c instanceof a.default
          ? (this._network = c)
          : (this._network = new a.default(r ?? {})));
    }
    getDataAsync(n, r, c) {
      return this._getDataAsyncImpl(n, (0, t._normalizeUser)(r, this._options), c);
    }
    prefetchData(n, r) {
      return this._prefetchDataImpl(n, r);
    }
    setData(n) {
      const r = (0, t._typedJsonParse)(n, "has_updates", "data");
      r && "user" in r
        ? super.setData(n, r.user)
        : t.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(n, r) {
      super.setData(n, r);
    }
    _fetchFromNetwork(n, r, c, u) {
      return e(this, void 0, void 0, function* () {
        var s;
        const l = yield (s = this._network) === null || s === void 0
          ? void 0
          : s.fetchEvaluations(this._getSdkKey(), n, c?.priority, r, u);
        return l ?? null;
      });
    }
    _getCacheKey(n) {
      var r;
      const c = (0, t._getStorageKey)(
        this._getSdkKey(),
        n,
        (r = this._options) === null || r === void 0 ? void 0 : r.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${c}`;
    }
    _isCachedResultValidFor204(n, r) {
      return n.fullUserHash != null && n.fullUserHash === (0, t._getFullUserHash)(r);
    }
  };
  return ((A.StatsigEvaluationsDataAdapter = i), A);
}
var Nt;
function Cn() {
  if (Nt) return T;
  Nt = 1;
  var e =
    (T && T.__awaiter) ||
    function (c, u, s, l) {
      function d(f) {
        return f instanceof s
          ? f
          : new s(function (_) {
              _(f);
            });
      }
      return new (s || (s = Promise))(function (f, _) {
        function h(y) {
          try {
            v(l.next(y));
          } catch (m) {
            _(m);
          }
        }
        function g(y) {
          try {
            v(l.throw(y));
          } catch (m) {
            _(m);
          }
        }
        function v(y) {
          y.done ? f(y.value) : d(y.value).then(h, g);
        }
        v((l = l.apply(c, u || [])).next());
      });
    };
  Object.defineProperty(T, "__esModule", { value: !0 });
  const t = I(),
    a = Rn(),
    i = Fr(),
    o = In(),
    n = jn();
  let r = class Le extends t.StatsigClientBase {
    static instance(u) {
      const s = (0, t._getStatsigGlobal)().instance(u);
      return s instanceof Le
        ? s
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Le(u ?? "", {}));
    }
    constructor(u, s, l = null) {
      var d, f;
      t.SDKType._setClientType(u, "javascript-client");
      const _ = new i.default(l, (g) => {
        this.$emt(g);
      });
      (super(
        u,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new n.StatsigEvaluationsDataAdapter(),
        _,
        l,
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
        (this._store = new a.default(u)),
        (this._network = _),
        (this._user = this._configureUser(s, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (f = l?.plugins) !== null && f !== void 0 ? f : [];
      for (const g of h) g.bind(this);
    }
    initializeSync(u) {
      var s;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((s = this._store.getWarnings()) !== null && s !== void 0 ? s : []),
          ])
        : (this._logger.start(), this.updateUserSync(this._user, u));
    }
    initializeAsync(u) {
      return e(this, void 0, void 0, function* () {
        return this._initializePromise
          ? this._initializePromise
          : ((this._initializePromise = this._initializeAsyncImpl(u)), this._initializePromise);
      });
    }
    updateUserSync(u, s) {
      const l = performance.now();
      try {
        return this._updateUserSyncImpl(u, s, l);
      } catch (d) {
        const f = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(f, l);
      }
    }
    _updateUserSyncImpl(u, s, l) {
      var d;
      const f = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(u);
      const _ = this.dataAdapter.getDataSync(this._user);
      (_ == null && f.push("NoCachedValues"),
        this._store.setValues(_, this._user),
        this._finalizeUpdate(_));
      const h = s?.disableBackgroundCacheRefresh;
      return h === !0 || (h == null && _?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          )
        : (this._runPostUpdate(_ ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          ));
    }
    updateUserAsync(u, s) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(u, s);
        } catch (d) {
          const f = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(f, l);
        }
      });
    }
    _updateUserAsyncImpl(u, s) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(u);
        const l = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(l);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, l, s)),
          l !== this._user)
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
    checkGate(u, s) {
      return this.getFeatureGate(u, s).value;
    }
    logEvent(u, s, l) {
      const d = typeof u == "string" ? { eventName: u, value: s, metadata: l } : u;
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
    _initializeAsyncImpl(u) {
      return e(this, void 0, void 0, function* () {
        return (
          t.Storage.isReady() || (yield t.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, u)
        );
      });
    }
    _createErrorUpdateDetails(u, s) {
      var l;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - s,
        u,
        null,
        [...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : [])],
      );
    }
    _finalizeUpdate(u) {
      (this._store.finalize(), this._setStatus("Ready", u));
    }
    _runPostUpdate(u, s) {
      this.dataAdapter.getDataAsync(u, s, { priority: "low" }).catch((l) => {
        t.Log.error("An error occurred after update.", l);
      });
    }
    _resetForUser(u) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(u, this._options)));
    }
    _configureUser(u, s) {
      var l;
      const d = (0, t._normalizeUser)(u, s),
        f = (l = d.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      return (f && t.StableID.setOverride(f, this._sdkKey), d);
    }
    _getFeatureGateImpl(u, s) {
      var l, d;
      const { result: f, details: _ } = this._store.getGate(u),
        h = (0, t._makeFeatureGate)(u, _, f),
        g =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, s),
        v = g ?? h;
      return (
        this._enqueueExposure(
          u,
          (0, t._createGateExposure)(this._user, v, this._store.getExposureMapping()),
          s,
        ),
        this.$emt({ name: "gate_evaluation", gate: v }),
        v
      );
    }
    _getDynamicConfigImpl(u, s) {
      var l, d;
      const { result: f, details: _ } = this._store.getConfig(u),
        h = (0, t._makeDynamicConfig)(u, _, f),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, this._user, s),
        v = g ?? h;
      return (
        this._enqueueExposure(
          u,
          (0, t._createConfigExposure)(this._user, v, this._store.getExposureMapping()),
          s,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: v }),
        v
      );
    }
    _getExperimentImpl(u, s) {
      var l, d, f, _;
      const { result: h, details: g } = this._store.getConfig(u),
        v = (0, t._makeExperiment)(u, g, h);
      v.__evaluation != null &&
        (v.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = v.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const y =
          (_ =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || _ === void 0
            ? void 0
            : _.call(f, v, this._user, s),
        m = y ?? v;
      return (
        this._enqueueExposure(
          u,
          (0, t._createConfigExposure)(this._user, m, this._store.getExposureMapping()),
          s,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: m }),
        m
      );
    }
    _getLayerImpl(u, s) {
      var l, d, f;
      const { result: _, details: h } = this._store.getLayer(u),
        g = (0, t._makeLayer)(u, h, _),
        v =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, g, this._user, s);
      s?.disableExposureLog && this._logger.incrementNonExposureCount(u);
      const y = (0, t._mergeOverride)(
        g,
        v,
        (f = v?.__value) !== null && f !== void 0 ? f : g.__value,
        (m) => {
          s?.disableExposureLog ||
            this._enqueueExposure(
              u,
              (0, t._createLayerParameterExposure)(
                this._user,
                y,
                m,
                this._store.getExposureMapping(),
              ),
              s,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: y }), y);
    }
    _getParameterStoreImpl(u, s) {
      var l, d;
      const { result: f, details: _ } = this._store.getParamStore(u);
      this._logger.incrementNonExposureCount(u);
      const h = {
          name: u,
          details: _,
          __configuration: f,
          get: (0, o._makeParamStoreGetter)(this, f, s),
        },
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, s);
      return (
        g != null &&
          ((h.__configuration = g.config),
          (h.details = g.details),
          (h.get = (0, o._makeParamStoreGetter)(this, g.config, s))),
        h
      );
    }
  };
  return ((T.default = r), T);
}
var $t;
function Dn() {
  return (
    $t ||
      (($t = 1),
      (function (e) {
        var t =
            (x && x.__createBinding) ||
            (Object.create
              ? function (r, c, u, s) {
                  s === void 0 && (s = u);
                  var l = Object.getOwnPropertyDescriptor(c, u);
                  ((!l || ("get" in l ? !c.__esModule : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return c[u];
                      },
                    }),
                    Object.defineProperty(r, s, l));
                }
              : function (r, c, u, s) {
                  (s === void 0 && (s = u), (r[s] = c[u]));
                }),
          a =
            (x && x.__exportStar) ||
            function (r, c) {
              for (var u in r)
                u !== "default" && !Object.prototype.hasOwnProperty.call(c, u) && t(c, r, u);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const i = I(),
          o = Cn();
        ((e.StatsigClient = o.default), a(I(), e));
        const n = Object.assign((0, i._getStatsigGlobal)(), { StatsigClient: o.default });
        e.default = n;
      })(x)),
    x
  );
}
var fe = {},
  Gt;
function Fn() {
  if (Gt) return fe;
  ((Gt = 1),
    Object.defineProperty(fe, "__esModule", { value: !0 }),
    (fe.ForgeDataAdapter = void 0));
  const e = Dr();
  class t {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(i, o, n) {
      var r;
      if (i) return i;
      this.environment = ((r = this.options) === null || r === void 0 ? void 0 : r.environment) || {
        tier: "development",
      };
      const c = { ...o, statsigEnvironment: this.environment },
        u = await (0, e.initFeatureFlags)({ user: c }),
        s = {
          source: "Network",
          data: JSON.stringify(u),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = s), s);
    }
    getDataSync(i) {
      return this.cache;
    }
    async attach(i, o, n) {
      this.options = o;
    }
    async prefetchData() {}
    async setData(i) {}
    async setDataLegacy(i) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((fe.ForgeDataAdapter = t), fe);
}
var zt;
function xn() {
  if (zt) return le;
  ((zt = 1),
    Object.defineProperty(le, "__esModule", { value: !0 }),
    (le.ForgeFeatureFlags = void 0));
  const e = Dn(),
    t = Fn();
  class a {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(o, n = {}) {
      if (this.isInitialized()) return;
      this.dataAdapter = new t.ForgeDataAdapter();
      const r = {
        environment: { tier: n.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(o), r)),
        await this.client.initializeAsync(),
        (this.initialized = !0));
    }
    checkFlag(o) {
      if (!this.isInitialized() || !this.client)
        throw new Error("ForgeFeatureFlags not initialized. Call initialize() first.");
      return this.client.checkGate(o, { disableExposureLog: !0 });
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
    convertUser(o) {
      return {
        userID: o.userId,
        custom: { ...(o.custom || {}), ...(o.attributes || {}) },
        customIDs: o.identifiers || {},
      };
    }
  }
  return ((le.ForgeFeatureFlags = a), le);
}
var Vt;
function An() {
  return (
    Vt ||
      ((Vt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ForgeFeatureFlags = void 0),
          O.__exportStar(Dr(), e));
        var a = xn();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return a.ForgeFeatureFlags;
          },
        });
      })(Be)),
    Be
  );
}
var Ht;
function Tn() {
  return (
    Ht ||
      ((Ht = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = O;
        var a = zr();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return a.NavigationTarget;
          },
        }),
          t.__exportStar(Hr(), e),
          t.__exportStar(Wr(), e),
          t.__exportStar(Cr(), e),
          t.__exportStar(_n(), e),
          t.__exportStar(gn(), e),
          t.__exportStar(pn(), e),
          t.__exportStar(bn(), e),
          t.__exportStar(mn(), e),
          t.__exportStar(On(), e),
          (e.i18n = t.__importStar(Sn())),
          t.__exportStar(An(), e));
      })(be)),
    be
  );
}
var he = Tn();
function qn() {
  const [e, t] = C.useState(""),
    [a, i] = C.useState(""),
    [o, n] = C.useState(""),
    [r, c] = C.useState(!1),
    [u, s] = C.useState(!1),
    [l, d] = C.useState(!1),
    [f, _] = C.useState([]),
    h = (b, xr, Ar) => {
      _((Tr) => [{ id: Date.now(), query: b, result: xr, timestamp: new Date(), type: Ar }, ...Tr]);
    },
    g = async () => {
      try {
        (n(""), c(!0));
        const b = await he.invoke("execute", { query: e });
        (i(b), h(e, b, "SQL"));
      } catch (b) {
        (n(b instanceof Error ? b.message : "An error occurred"), i(""));
      } finally {
        c(!1);
      }
    },
    v = async () => {
      try {
        (n(""), s(!0));
        const b = await he.invoke("executeDDL", { query: e });
        (i(b), h(e, b, "DDL"));
      } catch (b) {
        (n(b instanceof Error ? b.message : "An error occurred"), i(""));
      } finally {
        s(!1);
      }
    },
    y = async () => {
      try {
        (n(""), d(!0));
        const b = await he.invoke("executeCommand", { command: e });
        (i(b), h(e, b, "COMMAND"));
      } catch (b) {
        (n(b instanceof Error ? b.message : "An error occurred"), i(""));
      } finally {
        d(!1);
      }
    },
    m = (b) =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1,
      }).format(b),
    j = (b) => {
      switch (b) {
        case "SQL":
          return "#0052CC";
        case "DDL":
          return "#36B37E";
        case "COMMAND":
          return "#FF5630";
        default:
          return "#0052CC";
      }
    };
  return p.jsxs("div", {
    style: { padding: "20px", maxWidth: "800px", margin: "0 auto" },
    children: [
      p.jsx("h1", { children: "SQL Query Executor" }),
      p.jsxs("div", {
        style: { marginBottom: "20px" },
        children: [
          p.jsx("textarea", {
            value: e,
            onChange: (b) => t(b.target.value),
            placeholder: "Enter your SQL query here...",
            style: {
              width: "100%",
              minHeight: "150px",
              padding: "10px",
              marginBottom: "10px",
              fontFamily: "monospace",
              fontSize: "14px",
            },
          }),
          p.jsxs("div", {
            style: { display: "flex", gap: "10px" },
            children: [
              p.jsx("button", {
                onClick: g,
                disabled: r || u || l,
                style: {
                  padding: "10px 20px",
                  backgroundColor: r ? "#0052CC80" : "#0052CC",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: r ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: r
                  ? p.jsxs(p.Fragment, {
                      children: [
                        p.jsx("div", {
                          style: {
                            width: "16px",
                            height: "16px",
                            border: "2px solid #ffffff",
                            borderTop: "2px solid transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          },
                        }),
                        "Executing...",
                      ],
                    })
                  : "Execute Query",
              }),
              p.jsx("button", {
                onClick: v,
                disabled: r || u || l,
                style: {
                  padding: "10px 20px",
                  backgroundColor: u ? "#36B37E80" : "#36B37E",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: u ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: u
                  ? p.jsxs(p.Fragment, {
                      children: [
                        p.jsx("div", {
                          style: {
                            width: "16px",
                            height: "16px",
                            border: "2px solid #ffffff",
                            borderTop: "2px solid transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          },
                        }),
                        "Executing...",
                      ],
                    })
                  : "Execute DDL",
              }),
              p.jsx("button", {
                onClick: y,
                disabled: r || u || l,
                style: {
                  padding: "10px 20px",
                  backgroundColor: l ? "#FF563080" : "#FF5630",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: l ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: l
                  ? p.jsxs(p.Fragment, {
                      children: [
                        p.jsx("div", {
                          style: {
                            width: "16px",
                            height: "16px",
                            border: "2px solid #ffffff",
                            borderTop: "2px solid transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          },
                        }),
                        "Executing...",
                      ],
                    })
                  : "Execute Command",
              }),
            ],
          }),
        ],
      }),
      o &&
        p.jsx("div", {
          style: {
            padding: "10px",
            backgroundColor: "#FFEBE6",
            border: "1px solid #DE350B",
            borderRadius: "3px",
            marginBottom: "20px",
            color: "#DE350B",
          },
          children: o,
        }),
      a &&
        p.jsxs("div", {
          children: [
            p.jsx("h3", { children: "Result:" }),
            p.jsx("pre", {
              style: {
                backgroundColor: "#F4F5F7",
                padding: "15px",
                borderRadius: "3px",
                overflow: "auto",
                maxHeight: "400px",
              },
              children: a,
            }),
          ],
        }),
      f.length > 0 &&
        p.jsxs("div", {
          style: { marginTop: "30px" },
          children: [
            p.jsx("h2", { children: "Query History" }),
            p.jsx("div", {
              style: { display: "flex", flexDirection: "column", gap: "20px" },
              children: f.map((b) =>
                p.jsxs(
                  "div",
                  {
                    style: { border: "1px solid #DFE1E6", borderRadius: "3px", overflow: "hidden" },
                    children: [
                      p.jsxs("div", {
                        style: {
                          padding: "10px",
                          backgroundColor: j(b.type),
                          color: "white",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                        children: [
                          p.jsxs("span", {
                            style: { fontWeight: "bold" },
                            children: [b.type, " Query"],
                          }),
                          p.jsx("span", { children: m(b.timestamp) }),
                        ],
                      }),
                      p.jsxs("div", {
                        style: { padding: "15px" },
                        children: [
                          p.jsxs("div", {
                            style: { marginBottom: "10px" },
                            children: [
                              p.jsx("h4", { style: { margin: "0 0 5px 0" }, children: "Query:" }),
                              p.jsx("pre", {
                                style: {
                                  backgroundColor: "#F4F5F7",
                                  padding: "10px",
                                  borderRadius: "3px",
                                  margin: 0,
                                  overflow: "auto",
                                  maxHeight: "200px",
                                },
                                children: b.query,
                              }),
                            ],
                          }),
                          p.jsxs("div", {
                            children: [
                              p.jsx("h4", { style: { margin: "0 0 5px 0" }, children: "Result:" }),
                              p.jsx("pre", {
                                style: {
                                  backgroundColor: "#F4F5F7",
                                  padding: "10px",
                                  borderRadius: "3px",
                                  margin: 0,
                                  overflow: "auto",
                                  maxHeight: "200px",
                                },
                                children: b.result,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  b.id,
                ),
              ),
            }),
          ],
        }),
      p.jsx("style", {
        children: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `,
      }),
    ],
  });
}
const Bn = document.getElementById("root"),
  Mn = qr.createRoot(Bn),
  Kt = () => {
    Mn.render(p.jsx(qn, {}));
  };
he.view.theme
  .enable()
  .then(() => {
    Kt();
  })
  .catch((e) => {
    (console.error(e.message), Kt());
  });
