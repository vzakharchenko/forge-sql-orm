import { r as Wt, c as qr } from "./react-dom-vendor-DUDfcWRj.js";
import { g as Tr, r as R } from "./client-core-vendor-BYfXJVhY.js";
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
  function s(o) {
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
    const n = s(o);
    fetch(o.href, n);
  }
})();
var ye = { exports: {} },
  T = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $e;
function Br() {
  if ($e) return T;
  $e = 1;
  var e = Wt(),
    t = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    i = Object.prototype.hasOwnProperty,
    o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(c, l, a) {
    var u,
      d = {},
      f = null,
      _ = null;
    (a !== void 0 && (f = "" + a),
      l.key !== void 0 && (f = "" + l.key),
      l.ref !== void 0 && (_ = l.ref));
    for (u in l) i.call(l, u) && !n.hasOwnProperty(u) && (d[u] = l[u]);
    if (c && c.defaultProps) for (u in ((l = c.defaultProps), l)) d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: c, key: f, ref: _, props: d, _owner: o.current };
  }
  return ((T.Fragment = s), (T.jsx = r), (T.jsxs = r), T);
}
var Ge;
function Lr() {
  return (Ge || ((Ge = 1), (ye.exports = Br())), ye.exports);
}
var b = Lr(),
  fe = Wt(),
  be = {},
  Be = function (e, t) {
    return (
      (Be =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (s, i) {
            s.__proto__ = i;
          }) ||
        function (s, i) {
          for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (s[o] = i[o]);
        }),
      Be(e, t)
    );
  };
function Xt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Be(e, t);
  function s() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((s.prototype = t.prototype), new s());
}
var he = function () {
  return (
    (he =
      Object.assign ||
      function (t) {
        for (var s, i = 1, o = arguments.length; i < o; i++) {
          s = arguments[i];
          for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
        }
        return t;
      }),
    he.apply(this, arguments)
  );
};
function Yt(e, t) {
  var s = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
      t.indexOf(i[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[o]) &&
        (s[i[o]] = e[i[o]]);
  return s;
}
function Zt(e, t, s, i) {
  var o = arguments.length,
    n = o < 3 ? t : i === null ? (i = Object.getOwnPropertyDescriptor(t, s)) : i,
    r;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, s, i);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (r = e[c]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, s, n) : r(t, s)) || n);
  return (o > 3 && n && Object.defineProperty(t, s, n), n);
}
function Qt(e, t) {
  return function (s, i) {
    t(s, i, e);
  };
}
function er(e, t, s, i, o, n) {
  function r(p) {
    if (p !== void 0 && typeof p != "function") throw new TypeError("Function expected");
    return p;
  }
  for (
    var c = i.kind,
      l = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      a = !t && e ? (i.static ? e : e.prototype) : null,
      u = t || (a ? Object.getOwnPropertyDescriptor(a, i.name) : {}),
      d,
      f = !1,
      _ = s.length - 1;
    _ >= 0;
    _--
  ) {
    var v = {};
    for (var h in i) v[h] = h === "access" ? {} : i[h];
    for (var h in i.access) v.access[h] = i.access[h];
    v.addInitializer = function (p) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      n.push(r(p || null));
    };
    var g = (0, s[_])(c === "accessor" ? { get: u.get, set: u.set } : u[l], v);
    if (c === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = r(g.get)) && (u.get = d),
        (d = r(g.set)) && (u.set = d),
        (d = r(g.init)) && o.unshift(d));
    } else (d = r(g)) && (c === "field" ? o.unshift(d) : (u[l] = d));
  }
  (a && Object.defineProperty(a, i.name, u), (f = !0));
}
function tr(e, t, s) {
  for (var i = arguments.length > 2, o = 0; o < t.length; o++)
    s = i ? t[o].call(e, s) : t[o].call(e);
  return i ? s : void 0;
}
function rr(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function nr(e, t, s) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: s ? "".concat(s, " ", t) : t })
  );
}
function ir(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function or(e, t, s, i) {
  function o(n) {
    return n instanceof s
      ? n
      : new s(function (r) {
          r(n);
        });
  }
  return new (s || (s = Promise))(function (n, r) {
    function c(u) {
      try {
        a(i.next(u));
      } catch (d) {
        r(d);
      }
    }
    function l(u) {
      try {
        a(i.throw(u));
      } catch (d) {
        r(d);
      }
    }
    function a(u) {
      u.done ? n(u.value) : o(u.value).then(c, l);
    }
    a((i = i.apply(e, t || [])).next());
  });
}
function ar(e, t) {
  var s = {
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
  function c(a) {
    return function (u) {
      return l([a, u]);
    };
  }
  function l(a) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; r && ((r = 0), a[0] && (s = 0)), s; )
      try {
        if (
          ((i = 1),
          o &&
            (n =
              a[0] & 2 ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) &&
            !(n = n.call(o, a[1])).done)
        )
          return n;
        switch (((o = 0), n && (a = [a[0] & 2, n.value]), a[0])) {
          case 0:
          case 1:
            n = a;
            break;
          case 4:
            return (s.label++, { value: a[1], done: !1 });
          case 5:
            (s.label++, (o = a[1]), (a = [0]));
            continue;
          case 7:
            ((a = s.ops.pop()), s.trys.pop());
            continue;
          default:
            if (
              ((n = s.trys), !(n = n.length > 0 && n[n.length - 1]) && (a[0] === 6 || a[0] === 2))
            ) {
              s = 0;
              continue;
            }
            if (a[0] === 3 && (!n || (a[1] > n[0] && a[1] < n[3]))) {
              s.label = a[1];
              break;
            }
            if (a[0] === 6 && s.label < n[1]) {
              ((s.label = n[1]), (n = a));
              break;
            }
            if (n && s.label < n[2]) {
              ((s.label = n[2]), s.ops.push(a));
              break;
            }
            (n[2] && s.ops.pop(), s.trys.pop());
            continue;
        }
        a = t.call(e, s);
      } catch (u) {
        ((a = [6, u]), (o = 0));
      } finally {
        i = n = 0;
      }
    if (a[0] & 5) throw a[1];
    return { value: a[0] ? a[1] : void 0, done: !0 };
  }
}
var pe = Object.create
  ? function (e, t, s, i) {
      i === void 0 && (i = s);
      var o = Object.getOwnPropertyDescriptor(t, s);
      ((!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) &&
        (o = {
          enumerable: !0,
          get: function () {
            return t[s];
          },
        }),
        Object.defineProperty(e, i, o));
    }
  : function (e, t, s, i) {
      (i === void 0 && (i = s), (e[i] = t[s]));
    };
function sr(e, t) {
  for (var s in e) s !== "default" && !Object.prototype.hasOwnProperty.call(t, s) && pe(t, e, s);
}
function ve(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    s = t && e[t],
    i = 0;
  if (s) return s.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e });
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ne(e, t) {
  var s = typeof Symbol == "function" && e[Symbol.iterator];
  if (!s) return e;
  var i = s.call(e),
    o,
    n = [],
    r;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = i.next()).done; ) n.push(o.value);
  } catch (c) {
    r = { error: c };
  } finally {
    try {
      o && !o.done && (s = i.return) && s.call(i);
    } finally {
      if (r) throw r.error;
    }
  }
  return n;
}
function ur() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Ne(arguments[t]));
  return e;
}
function lr() {
  for (var e = 0, t = 0, s = arguments.length; t < s; t++) e += arguments[t].length;
  for (var i = Array(e), o = 0, t = 0; t < s; t++)
    for (var n = arguments[t], r = 0, c = n.length; r < c; r++, o++) i[o] = n[r];
  return i;
}
function cr(e, t, s) {
  if (s || arguments.length === 2)
    for (var i = 0, o = t.length, n; i < o; i++)
      (n || !(i in t)) && (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
  return e.concat(n || Array.prototype.slice.call(t));
}
function k(e) {
  return this instanceof k ? ((this.v = e), this) : new k(e);
}
function dr(e, t, s) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = s.apply(e, t || []),
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
    return function (v) {
      return Promise.resolve(v).then(_, d);
    };
  }
  function c(_, v) {
    i[_] &&
      ((o[_] = function (h) {
        return new Promise(function (g, p) {
          n.push([_, h, g, p]) > 1 || l(_, h);
        });
      }),
      v && (o[_] = v(o[_])));
  }
  function l(_, v) {
    try {
      a(i[_](v));
    } catch (h) {
      f(n[0][3], h);
    }
  }
  function a(_) {
    _.value instanceof k ? Promise.resolve(_.value.v).then(u, d) : f(n[0][2], _);
  }
  function u(_) {
    l("next", _);
  }
  function d(_) {
    l("throw", _);
  }
  function f(_, v) {
    (_(v), n.shift(), n.length && l(n[0][0], n[0][1]));
  }
}
function fr(e) {
  var t, s;
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
          return (s = !s) ? { value: k(e[o](r)), done: !1 } : n ? n(r) : r;
        }
      : n;
  }
}
function _r(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    s;
  return t
    ? t.call(e)
    : ((e = typeof ve == "function" ? ve(e) : e[Symbol.iterator]()),
      (s = {}),
      i("next"),
      i("throw"),
      i("return"),
      (s[Symbol.asyncIterator] = function () {
        return this;
      }),
      s);
  function i(n) {
    s[n] =
      e[n] &&
      function (r) {
        return new Promise(function (c, l) {
          ((r = e[n](r)), o(c, l, r.done, r.value));
        });
      };
  }
  function o(n, r, c, l) {
    Promise.resolve(l).then(function (a) {
      n({ value: a, done: c });
    }, r);
  }
}
function hr(e, t) {
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
          var s = [];
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (s[s.length] = i);
          return s;
        }),
      Le(e)
    );
  };
function vr(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var s = Le(e), i = 0; i < s.length; i++) s[i] !== "default" && pe(t, e, s[i]);
  return (Ur(t, e), t);
}
function gr(e) {
  return e && e.__esModule ? e : { default: e };
}
function pr(e, t, s, i) {
  if (s === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return s === "m" ? i : s === "a" ? i.call(e) : i ? i.value : t.get(e);
}
function yr(e, t, s, i, o) {
  if (i === "m") throw new TypeError("Private method is not writable");
  if (i === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (i === "a" ? o.call(e, s) : o ? (o.value = s) : t.set(e, s), s);
}
function br(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function mr(e, t, s) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var i, o;
    if (s) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      i = t[Symbol.asyncDispose];
    }
    if (i === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((i = t[Symbol.dispose]), s && (o = i));
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
      e.stack.push({ value: t, dispose: i, async: s }));
  } else s && e.stack.push({ async: !0 });
  return t;
}
var Nr =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, s) {
        var i = new Error(s);
        return ((i.name = "SuppressedError"), (i.error = e), (i.suppressed = t), i);
      };
function wr(e) {
  function t(n) {
    ((e.error = e.hasError ? new Nr(n, e.error, "An error was suppressed during disposal.") : n),
      (e.hasError = !0));
  }
  var s,
    i = 0;
  function o() {
    for (; (s = e.stack.pop()); )
      try {
        if (!s.async && i === 1) return ((i = 0), e.stack.push(s), Promise.resolve().then(o));
        if (s.dispose) {
          var n = s.dispose.call(s.value);
          if (s.async)
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
function Er(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (s, i, o, n, r) {
        return i
          ? t
            ? ".jsx"
            : ".js"
          : o && (!n || !r)
            ? s
            : o + n + "." + r.toLowerCase() + "js";
      })
    : e;
}
const xr = {
    __extends: Xt,
    __assign: he,
    __rest: Yt,
    __decorate: Zt,
    __param: Qt,
    __esDecorate: er,
    __runInitializers: tr,
    __propKey: rr,
    __setFunctionName: nr,
    __metadata: ir,
    __awaiter: or,
    __generator: ar,
    __createBinding: pe,
    __exportStar: sr,
    __values: ve,
    __read: Ne,
    __spread: ur,
    __spreadArrays: lr,
    __spreadArray: cr,
    __await: k,
    __asyncGenerator: dr,
    __asyncDelegator: fr,
    __asyncValues: _r,
    __makeTemplateObject: hr,
    __importStar: vr,
    __importDefault: gr,
    __classPrivateFieldGet: pr,
    __classPrivateFieldSet: yr,
    __classPrivateFieldIn: br,
    __addDisposableResource: mr,
    __disposeResources: wr,
    __rewriteRelativeImportExtension: Er,
  },
  $r = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: mr,
        get __assign() {
          return he;
        },
        __asyncDelegator: fr,
        __asyncGenerator: dr,
        __asyncValues: _r,
        __await: k,
        __awaiter: or,
        __classPrivateFieldGet: pr,
        __classPrivateFieldIn: br,
        __classPrivateFieldSet: yr,
        __createBinding: pe,
        __decorate: Zt,
        __disposeResources: wr,
        __esDecorate: er,
        __exportStar: sr,
        __extends: Xt,
        __generator: ar,
        __importDefault: gr,
        __importStar: vr,
        __makeTemplateObject: hr,
        __metadata: ir,
        __param: Qt,
        __propKey: rr,
        __read: Ne,
        __rest: Yt,
        __rewriteRelativeImportExtension: Er,
        __runInitializers: tr,
        __setFunctionName: nr,
        __spread: ur,
        __spreadArray: cr,
        __spreadArrays: lr,
        __values: ve,
        default: xr,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  E = Tr($r);
var M = {},
  ze;
function Gr() {
  return (
    ze ||
      ((ze = 1),
      Object.defineProperty(M, "__esModule", { value: !0 }),
      (M.NavigationTarget = void 0),
      (M.NavigationTarget = {
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
    M
  );
}
var me = {},
  we = {},
  B = {},
  L = {},
  Ve;
function w() {
  if (Ve) return L;
  ((Ve = 1), Object.defineProperty(L, "__esModule", { value: !0 }), (L.BridgeAPIError = void 0));
  class e extends Error {}
  return ((L.BridgeAPIError = e), L);
}
var Ke;
function m() {
  if (Ke) return B;
  ((Ke = 1), Object.defineProperty(B, "__esModule", { value: !0 }), (B.getCallBridge = void 0));
  const e = w();
  function t(i) {
    return !!i?.callBridge;
  }
  const s = () => {
    if (!t(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((B.getCallBridge = s), B);
}
var U = {},
  Je;
function xe() {
  if (Je) return U;
  ((Je = 1), Object.defineProperty(U, "__esModule", { value: !0 }), (U.withRateLimiter = void 0));
  const e = w(),
    t = (s, i, o, n) => {
      let r = Date.now(),
        c = 0;
      return async (...l) => {
        const a = Date.now();
        if ((a - r > o && ((r = a), (c = 0)), c >= i))
          throw new e.BridgeAPIError(n || "Too many invocations.");
        return ((c = c + 1), s(...l));
      };
    };
  return ((U.withRateLimiter = t), U);
}
var He;
function zr() {
  return (
    He ||
      ((He = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = m(),
          s = w(),
          i = xe(),
          o = (0, t.getCallBridge)(),
          n = (l) => {
            if (l && Object.values(l).some((a) => typeof a == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          r = (l, a) => {
            if (typeof l != "string") throw new s.BridgeAPIError("functionKey must be a string!");
            return (n(a), o("invoke", { functionKey: l, payload: a }));
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
function Vr() {
  return (
    We ||
      ((We = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), E.__exportStar(zr(), e));
      })(me)),
    me
  );
}
var Ee = {},
  N = {},
  Oe = {},
  Xe;
function Or() {
  return (
    Xe ||
      ((Xe = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = m(),
          s = w(),
          i = xe(),
          o = 500,
          n = 25,
          r = 1e3 * n;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, t.getCallBridge)(),
          l = (d) => {
            if (d && Object.values(d).some((f) => typeof f == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          a = (d) => async (f) => {
            l(f);
            const _ = { ...f, invokeType: `ui-${d.toLowerCase()}-fetch` },
              v = await c("invoke", _),
              { success: h, payload: g, error: p } = v ?? {},
              y = { ...(h ? g : p) };
            if (y && y.headers)
              for (const q in y.headers)
                Array.isArray(y.headers[q]) && (y.headers[q] = y.headers[q].join(","));
            return y;
          },
          u = (d) => {
            const f = a(d);
            return (0, i.withRateLimiter)(
              f,
              o,
              r,
              `${d} invocation calls are rate limited at ${o}/${n}s`,
            );
          };
        e._invokeEndpointFn = u;
      })(Oe)),
    Oe
  );
}
var Ye;
function Kr() {
  if (Ye) return N;
  ((Ye = 1), Object.defineProperty(N, "__esModule", { value: !0 }), (N.invokeRemote = void 0));
  const e = Or(),
    t = (s) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(s);
  return ((N.invokeRemote = t), N);
}
var x = {},
  Ze;
function Jr() {
  if (Ze) return x;
  ((Ze = 1), Object.defineProperty(x, "__esModule", { value: !0 }), (x.invokeService = void 0));
  const e = Or(),
    t = (s) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(s);
  return ((x.invokeService = t), x);
}
var Qe;
function Hr() {
  return (
    Qe ||
      ((Qe = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = E;
        (t.__exportStar(Kr(), e), t.__exportStar(Jr(), e));
      })(Ee)),
    Ee
  );
}
var Se = {},
  $ = {},
  G = {},
  et;
function Wr() {
  if (et) return G;
  ((et = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.submit = void 0));
  const e = m(),
    t = w(),
    s = (0, e.getCallBridge)(),
    i = async (o) => {
      if ((await s("submit", o)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((G.submit = i), G);
}
var z = {},
  tt;
function Xr() {
  if (tt) return z;
  ((tt = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.close = void 0));
  const e = m(),
    t = w(),
    s = (0, e.getCallBridge)(),
    i = async (o) => {
      try {
        if ((await s("close", o)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((z.close = i), z);
}
var V = {},
  rt;
function Yr() {
  if (rt) return V;
  ((rt = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.open = void 0));
  const e = m(),
    t = w(),
    s = (0, e.getCallBridge)(),
    i = async () => {
      try {
        if ((await s("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((V.open = i), V);
}
var K = {},
  nt;
function Zr() {
  if (nt) return K;
  ((nt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.refresh = void 0));
  const e = m(),
    t = w(),
    s = (0, e.getCallBridge)(),
    i = async (o) => {
      if ((await s("refresh", o)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((K.refresh = i), K);
}
var J = {},
  it;
function Qr() {
  if (it) return J;
  ((it = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.createHistory = void 0));
  const t = (0, m().getCallBridge)(),
    s = async () => {
      const i = await t("createHistory");
      return (
        i.listen((o) => {
          i.location = o;
        }),
        i
      );
    };
  return ((J.createHistory = s), J);
}
var H = {},
  Pe = {},
  O = {},
  ot;
function Sr() {
  return (
    ot ||
      ((ot = 1),
      Object.defineProperty(O, "__esModule", { value: !0 }),
      (O.FORGE_SUPPORTED_LOCALE_CODES = O.I18N_BUNDLE_FOLDER_NAME = O.I18N_INFO_FILE_NAME = void 0),
      (O.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (O.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (O.FORGE_SUPPORTED_LOCALE_CODES = [
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
    O
  );
}
var I = {},
  at;
function en() {
  if (at) return I;
  ((at = 1),
    Object.defineProperty(I, "__esModule", { value: !0 }),
    (I.TranslationsGetter = I.TranslationGetterError = void 0));
  const e = (i, o) => {
    i.includes(o) || i.push(o);
  };
  class t extends Error {
    constructor(o) {
      (super(o), (this.name = "TranslationGetterError"));
    }
  }
  I.TranslationGetterError = t;
  class s {
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
        let l;
        return (
          r.locales.includes(o) && (l = await this.getTranslationResource(o)),
          { translations: l ?? null, locale: o }
        );
      }
      for (const l of this.getLocaleLookupOrder(o, r)) {
        const a = await this.getTranslationResource(l);
        if (a) return { translations: a, locale: l };
      }
      return { translations: null, locale: o };
    }
    async getTranslationsByLocaleLookupOrder(o) {
      const n = await this.getI18nInfoConfig(),
        r = this.getLocaleLookupOrder(o, n);
      return await Promise.all(
        r.map(async (c) => {
          const l = await this.getTranslationResource(c);
          return { locale: c, translations: l };
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
        l = [o],
        a = c[o];
      return (
        a && Array.isArray(a) && a.length > 0 && l.push(...a),
        e(l, n.fallback.default),
        l.filter((u) => r.includes(u))
      );
    }
  }
  return ((I.TranslationsGetter = s), I);
}
var W = {},
  Re = {},
  st;
function Pr() {
  return (
    st ||
      ((st = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const s = E.__importDefault(Mr()),
          i = (n, r, c) => {
            const l = n[c];
            return l ? (0, e.getTranslationValueFromContent)(l, r) : null;
          };
        e.getTranslationValue = i;
        const o = (n, r) => {
          let c = n[r];
          if (!c) {
            const l = r.split(".");
            l.length > 1 && (c = (0, s.default)(n, l, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = o;
      })(Re)),
    Re
  );
}
var ut;
function tn() {
  if (ut) return W;
  ((ut = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.Translator = void 0));
  const e = Pr();
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
  return ((W.Translator = t), W);
}
var X = {},
  lt;
function rn() {
  if (lt) return X;
  ((lt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.ensureLocale = void 0));
  const e = Sr(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    s = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    i = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (n, r) => {
        const [c] = r.split("-");
        return (n[c] || (n[c] = r), n);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    o = (n) => {
      const r = n.replace("_", "-");
      return t.has(r) ? r : (i[r] ?? s[r] ?? null);
    };
  return ((X.ensureLocale = o), X);
}
var Ie = {},
  ct;
function nn() {
  return (
    ct ||
      ((ct = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (a) => typeof a == "object" && a !== null && !Array.isArray(a),
          s = (a) => typeof a?.i18n == "string",
          i = (a) => a.startsWith("connect-"),
          o = (a) => a.startsWith("core:"),
          n = (a) => {
            const u = new Set(),
              d = (f, _) =>
                !t(f) || u.has(f)
                  ? []
                  : (u.add(f),
                    Object.entries(f).flatMap(([v, h]) => {
                      const g = [..._, v];
                      return s(h)
                        ? [{ propertyPath: g, key: h.i18n }]
                        : Array.isArray(h)
                          ? h.flatMap((p) => d(p, g))
                          : d(h, g);
                    }));
            return d(a, []);
          },
          r = (a) =>
            Object.entries(a).flatMap(([u, d]) =>
              !i(u) && !o(u) && d && Array.isArray(d) && d.length > 0 ? d.map((f) => [f, u]) : [],
            );
        e.getI18nSupportedModuleEntries = r;
        const c = (a) => {
          const u = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(a)) {
            const f = n(d[0]);
            for (const { key: _ } of f) u.add(_);
          }
          return u.size > 0 ? Array.from(u) : [];
        };
        e.extractI18nKeysFromModules = c;
        const l = (a) => {
          const u = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(a)) {
            const f = n(d[0]);
            for (const _ of f) u.push({ moduleName: d[1], ..._ });
          }
          return u;
        };
        e.extractI18nPropertiesFromModules = l;
      })(Ie)),
    Ie
  );
}
var je = {},
  dt;
function on() {
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
        const t = E;
        (t.__exportStar(Sr(), e),
          t.__exportStar(en(), e),
          t.__exportStar(tn(), e),
          t.__exportStar(rn(), e));
        var s = Pr();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return s.getTranslationValue;
          },
        });
        var i = nn();
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
          t.__exportStar(on(), e));
      })(Pe)),
    Pe
  );
}
var _t;
function an() {
  if (_t) return H;
  ((_t = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.getContext = void 0));
  const e = m(),
    t = Rr(),
    s = (0, e.getCallBridge)(),
    i = async () => {
      var o;
      const n = await s("getContext"),
        r = n?.locale;
      return (r && (n.locale = (o = (0, t.ensureLocale)(r)) !== null && o !== void 0 ? o : r), n);
    };
  return ((H.getContext = i), H);
}
var Y = {},
  ht;
function sn() {
  if (ht) return Y;
  ((ht = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.changeWindowTitle = void 0));
  const e = m(),
    t = w(),
    s = (0, e.getCallBridge)(),
    i = async (o) => {
      try {
        await s("changeWindowTitle", o);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((Y.changeWindowTitle = i), Y);
}
var Z = {},
  vt;
function un() {
  if (vt) return Z;
  ((vt = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.theme = void 0));
  const t = (0, m().getCallBridge)();
  return ((Z.theme = { enable: () => t("enableTheming") }), Z);
}
var Q = {},
  ee = {},
  Ce = {},
  j = {},
  gt;
function Ir() {
  if (gt) return j;
  ((gt = 1),
    Object.defineProperty(j, "__esModule", { value: !0 }),
    (j.blobToBase64 = j.base64ToBlob = void 0));
  const e = (s, i) => {
    if (!s) return null;
    const o = s.includes(";base64") ? s.split(",")[1] : s,
      n = atob(o),
      r = new Array(n.length);
    for (let l = 0; l < n.length; l++) r[l] = n.charCodeAt(l);
    const c = new Uint8Array(r);
    return new Blob([c], { type: i });
  };
  j.base64ToBlob = e;
  const t = (s) =>
    new Promise((i, o) => {
      const n = new FileReader();
      ((n.onloadend = () => {
        i(n.result);
      }),
        (n.onerror = o),
        n.readAsDataURL(s));
    });
  return ((j.blobToBase64 = t), j);
}
var pt;
function ln() {
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
        const t = Ir(),
          s = (a) => {
            if (
              typeof a != "object" ||
              a === null ||
              Object.prototype.toString.call(a) !== "[object Object]"
            )
              return !1;
            const u = Object.getPrototypeOf(a);
            if (u === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(u, "constructor") && u.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(a)
            );
          },
          i = async (a) => ({ data: await (0, t.blobToBase64)(a), type: a.type }),
          o = (a) => (0, t.base64ToBlob)(a.data, a.type),
          n = async (a) => {
            if (a instanceof Blob) return { ...(await i(a)), __isBlobData: !0 };
            if (Array.isArray(a))
              return Promise.all(a.map((u) => (0, e.serialiseBlobsInPayload)(u)));
            if (a && s(a)) {
              const u = await Promise.all(
                Object.entries(a).map(async ([d, f]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(f),
                ]),
              );
              return Object.fromEntries(u);
            }
            return a;
          };
        e.serialiseBlobsInPayload = n;
        const r = (a) => {
          if (a && s(a) && "__isBlobData" in a) {
            const u = a;
            return o({ data: u.data, type: u.type });
          }
          if (Array.isArray(a)) return a.map((u) => (0, e.deserialiseBlobsInPayload)(u));
          if (a && s(a)) {
            const u = {};
            for (const [d, f] of Object.entries(a)) u[d] = (0, e.deserialiseBlobsInPayload)(f);
            return u;
          }
          return a;
        };
        e.deserialiseBlobsInPayload = r;
        const c = (a) =>
          a instanceof Blob
            ? !0
            : Array.isArray(a)
              ? a.some((u) => (0, e.containsBlobs)(u))
              : a && s(a)
                ? Object.values(a).some((u) => (0, e.containsBlobs)(u))
                : !1;
        e.containsBlobs = c;
        const l = (a) =>
          a && s(a) && "__isBlobData" in a
            ? !0
            : Array.isArray(a)
              ? a.some((u) => (0, e.containsSerialisedBlobs)(u))
              : a && s(a)
                ? Object.values(a).some((u) => (0, e.containsSerialisedBlobs)(u))
                : !1;
        e.containsSerialisedBlobs = l;
      })(Ce)),
    Ce
  );
}
var yt;
function jr() {
  if (yt) return ee;
  ((yt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.events = void 0));
  const e = m(),
    t = ln(),
    s = (0, e.getCallBridge)(),
    i = async (n, r) => {
      let c = r;
      return (
        (0, t.containsBlobs)(r) && (c = await (0, t.serialiseBlobsInPayload)(r)),
        s("emit", { event: n, payload: c })
      );
    },
    o = (n, r) =>
      s("on", {
        event: n,
        callback: (l) => {
          let a = l;
          return (
            (0, t.containsSerialisedBlobs)(l) && (a = (0, t.deserialiseBlobsInPayload)(l)),
            r(a)
          );
        },
      });
  return ((ee.events = { emit: i, on: o }), ee);
}
var bt;
function cn() {
  if (bt) return Q;
  ((bt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.emitReadyEvent = void 0));
  const e = jr(),
    t = Cr(),
    s = "EXTENSION_READY",
    i = async () => {
      const o = await t.view.getContext();
      await e.events.emit(s, { localId: o.localId });
    };
  return ((Q.emitReadyEvent = i), Q);
}
var mt;
function Cr() {
  if (mt) return $;
  ((mt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.view = void 0));
  const e = Wr(),
    t = Xr(),
    s = Yr(),
    i = Zr(),
    o = Qr(),
    n = an(),
    r = sn(),
    c = un(),
    l = cn();
  return (
    ($.view = {
      submit: e.submit,
      close: t.close,
      open: s.open,
      refresh: i.refresh,
      createHistory: o.createHistory,
      getContext: n.getContext,
      theme: c.theme,
      changeWindowTitle: r.changeWindowTitle,
      emitReadyEvent: l.emitReadyEvent,
    }),
    $
  );
}
var wt;
function Dr() {
  return (
    wt ||
      ((wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), E.__exportStar(Cr(), e));
      })(Se)),
    Se
  );
}
var De = {},
  te = {},
  Et;
function dn() {
  if (Et) return te;
  ((Et = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.router = void 0));
  const t = (0, m().getCallBridge)(),
    s = async (r) => {
      if (!r?.target) throw new Error("target is required for getUrl");
      const c = await t("getUrl", r);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (l) {
        throw new Error(`Failed to parse URL: ${c} (${l})`);
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
  return ((te.router = { getUrl: s, navigate: i, open: o, reload: n }), te);
}
var Ot;
function fn() {
  return (
    Ot ||
      ((Ot = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), E.__exportStar(dn(), e));
      })(De)),
    De
  );
}
var Fe = {},
  re = {},
  St;
function _n() {
  if (St) return re;
  ((St = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.Modal = void 0));
  const e = m(),
    t = w(),
    s = (0, e.getCallBridge)(),
    i = () => {};
  class o {
    constructor(r) {
      var c, l;
      ((this.resource = r?.resource || null),
        (this.onClose = r?.onClose || i),
        (this.size = r?.size || "medium"),
        (this.context = r?.context || {}),
        (this.closeOnEscape = (c = r?.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick =
          (l = r?.closeOnOverlayClick) !== null && l !== void 0 ? l : !0));
    }
    async open() {
      try {
        if (
          (await s("openModal", {
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
  return ((re.Modal = o), re);
}
var Pt;
function hn() {
  return (
    Pt ||
      ((Pt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), E.__exportStar(_n(), e));
      })(Fe)),
    Fe
  );
}
var S = {},
  ne = {},
  Rt;
function vn() {
  if (Rt) return ne;
  ((Rt = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.productFetchApi = void 0));
  const e = Ir(),
    t = async (n) => {
      const r = {};
      for (const [c, l] of n.entries())
        if (c === "file") {
          const a = l.name,
            u = l.type;
          ((r.file = await (0, e.blobToBase64)(l)), (r.__fileName = a), (r.__fileType = u));
        } else r[c] = l;
      return JSON.stringify(r);
    },
    s = (n) => {
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
        l = new Request("", { body: c, method: n?.method, headers: n?.headers }),
        a = Object.fromEntries(l.headers.entries());
      return {
        body: l.method !== "GET" ? await l.text() : null,
        headers: new Headers(a),
        isMultipartFormData: r,
      };
    },
    o = (n) => {
      const r = async (c, l, a) => {
        const u = s(a),
          { body: d, headers: f, isMultipartFormData: _ } = await i(u);
        f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
        const v = {
            product: c,
            restPath: l,
            fetchRequestInit: { ...u, body: d, headers: [...f.entries()] },
            isMultipartFormData: _,
          },
          {
            body: h,
            headers: g,
            statusText: p,
            status: y,
            isAttachment: q,
          } = await n("fetchProduct", v),
          kr = q ? (0, e.base64ToBlob)(h, g["content-type"]) : h;
        return new Response(kr || null, { headers: g, status: y, statusText: p });
      };
      return {
        requestConfluence: (c, l) => r("confluence", c, l),
        requestJira: (c, l) => r("jira", c, l),
        requestBitbucket: (c, l) => r("bitbucket", c, l),
      };
    };
  return ((ne.productFetchApi = o), ne);
}
var It;
function gn() {
  if (It) return S;
  It = 1;
  var e;
  (Object.defineProperty(S, "__esModule", { value: !0 }),
    (S.requestBitbucket = S.requestJira = S.requestConfluence = void 0));
  const t = m();
  return (
    (e = (0, vn().productFetchApi)((0, t.getCallBridge)())),
    (S.requestConfluence = e.requestConfluence),
    (S.requestJira = e.requestJira),
    (S.requestBitbucket = e.requestBitbucket),
    S
  );
}
var Ae = {},
  ie = {},
  jt;
function pn() {
  if (jt) return ie;
  ((jt = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.showFlag = void 0));
  const e = m(),
    t = w(),
    s = (0, e.getCallBridge)(),
    i = (o) => {
      var n;
      if (!o.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const r = s("showFlag", { ...o, type: (n = o.type) !== null && n !== void 0 ? n : "info" });
      return { close: async () => (await r, s("closeFlag", { id: o.id })) };
    };
  return ((ie.showFlag = i), ie);
}
var Ct;
function yn() {
  return (
    Ct ||
      ((Ct = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = pn();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(Ae)),
    Ae
  );
}
var ke = {},
  Dt;
function bn() {
  return (
    Dt ||
      ((Dt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), E.__exportStar(jr(), e));
      })(ke)),
    ke
  );
}
var qe = {},
  oe = {},
  Ft;
function mn() {
  if (Ft) return oe;
  ((Ft = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.realtime = void 0));
  const t = (0, m().getCallBridge)(),
    s = (r, c, l) => t("publishRealtimeChannel", { channelName: r, eventPayload: c, options: l }),
    i = (r, c, l) => t("subscribeRealtimeChannel", { channelName: r, onEvent: c, options: l }),
    o = (r, c, l) =>
      t("publishRealtimeChannel", { channelName: r, eventPayload: c, options: l, isGlobal: !0 }),
    n = (r, c, l) =>
      t("subscribeRealtimeChannel", { channelName: r, onEvent: c, options: l, isGlobal: !0 });
  return ((oe.realtime = { publish: s, subscribe: i, publishGlobal: o, subscribeGlobal: n }), oe);
}
var Te = {},
  At;
function wn() {
  return (
    At ||
      ((At = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Jira = void 0),
          (function (t) {
            ((t.Board = "board"), (t.Issue = "issue"), (t.Project = "project"));
          })(e.Jira || (e.Jira = {})));
      })(Te)),
    Te
  );
}
var kt;
function En() {
  return (
    kt ||
      ((kt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Jira = e.realtime = void 0));
        var t = mn();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var s = wn();
        Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return s.Jira;
          },
        });
      })(qe)),
    qe
  );
}
var P = {},
  qt;
function On() {
  if (qt) return P;
  ((qt = 1),
    Object.defineProperty(P, "__esModule", { value: !0 }),
    (P.createTranslationFunction = P.getTranslations = P.resetTranslationsCache = void 0));
  const e = Rr(),
    t = Dr(),
    s = {
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
    i = new e.TranslationsGetter(s),
    o = () => {
      i.reset();
    };
  P.resetTranslationsCache = o;
  const n = async (c = null, l = { fallback: !0 }) => {
    let a = c;
    return (a || (a = (await t.view.getContext()).locale), await i.getTranslations(a, l));
  };
  P.getTranslations = n;
  const r = async (c = null) => {
    let l = c;
    l || (l = (await t.view.getContext()).locale);
    const a = new e.Translator(l, i);
    return (
      await a.init(),
      (u, d) => {
        var f, _;
        return (_ = (f = a.translate(u)) !== null && f !== void 0 ? f : d) !== null && _ !== void 0
          ? _
          : u;
      }
    );
  };
  return ((P.createTranslationFunction = r), P);
}
var Me = {},
  ae = {},
  Tt;
function Fr() {
  if (Tt) return ae;
  ((Tt = 1),
    Object.defineProperty(ae, "__esModule", { value: !0 }),
    (ae.initFeatureFlags = void 0));
  const e = m(),
    t = w(),
    s = xe(),
    i = 500,
    o = 1e3 * 25,
    n = (0, e.getCallBridge)(),
    r = (l) => {
      if (!l || !l.user)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(l).some((a) => typeof a == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (l) => (r(l), n("initFeatureFlags", { user: l.user }));
  return (
    (ae.initFeatureFlags = (0, s.withRateLimiter)(
      c,
      i,
      o,
      "Feature flags initialisation calls are rate limited at 500req/25s",
    )),
    ae
  );
}
var se = {},
  C = {},
  F = {},
  _e = {},
  Mt;
function Sn() {
  if (Mt) return _e;
  ((Mt = 1), Object.defineProperty(_e, "__esModule", { value: !0 }));
  const e = R();
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
        const l = o.user;
        (0, e._getFullUserHash)(i) !== (0, e._getFullUserHash)(l) &&
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
      const l = (o = r.warnings) !== null && o !== void 0 ? o : [];
      (this._source === "Bootstrap" && l.length > 0 && (c = c + l[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${i ? "Unrecognized" : "Recognized"}`));
      const a =
        this._source === "Bootstrap" && (n = this._bootstrapMetadata) !== null && n !== void 0
          ? n
          : void 0;
      return (a && (r.bootstrapMetadata = a), Object.assign(Object.assign({}, r), { reason: c }));
    }
  };
  return ((_e.default = t), _e);
}
var A = {},
  ue = {},
  Bt;
function Pn() {
  if (Bt) return ue;
  ((Bt = 1),
    Object.defineProperty(ue, "__esModule", { value: !0 }),
    (ue._resolveDeltasResponse = void 0));
  const e = R(),
    t = 2;
  function s(r, c) {
    const l = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!l) return { hadBadDeltaChecksum: !0 };
    const a = i(r, l),
      u = o(a),
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
  ue._resolveDeltasResponse = s;
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
    r?.forEach((l) => {
      delete c[l];
    });
  }
  return ue;
}
var Lt;
function Ar() {
  if (Lt) return A;
  Lt = 1;
  var e =
    (A && A.__awaiter) ||
    function (o, n, r, c) {
      function l(a) {
        return a instanceof r
          ? a
          : new r(function (u) {
              u(a);
            });
      }
      return new (r || (r = Promise))(function (a, u) {
        function d(v) {
          try {
            _(c.next(v));
          } catch (h) {
            u(h);
          }
        }
        function f(v) {
          try {
            _(c.throw(v));
          } catch (h) {
            u(h);
          }
        }
        function _(v) {
          v.done ? a(v.value) : l(v.value).then(d, f);
        }
        _((c = c.apply(o, n || [])).next());
      });
    };
  Object.defineProperty(A, "__esModule", { value: !0 });
  const t = R(),
    s = Pn();
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
    fetchEvaluations(n, r, c, l, a) {
      return e(this, void 0, void 0, function* () {
        var u, d, f, _, v, h;
        const g = r ? (0, t._typedJsonParse)(r, "has_updates", "InitializeResponse") : null;
        let p = {
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
        if (g?.has_updates) {
          const y =
            g?.hash_used !==
            ((h =
              (v = (_ = this._option) === null || _ === void 0 ? void 0 : _.networkConfig) ===
                null || v === void 0
                ? void 0
                : v.initializeHashAlgorithm) !== null && h !== void 0
              ? h
              : "djb2");
          p = Object.assign(Object.assign({}, p), {
            sinceTime: a && !y ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && a ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: y ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(n, g, p, c);
      });
    }
    _fetchEvaluations(n, r, c, l) {
      return e(this, void 0, void 0, function* () {
        var a, u;
        const d = yield this.post({
          sdkKey: n,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: l,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (a = d?.body) !== null && a !== void 0 ? a : null;
        if (
          r?.has_updates !== !0 ||
          ((u = d.body) === null || u === void 0 ? void 0 : u.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const f = (0, s._resolveDeltasResponse)(r, d.body);
        return typeof f == "string"
          ? f
          : this._fetchEvaluations(
              n,
              r,
              Object.assign(Object.assign(Object.assign({}, c), f), {
                deltasResponseRequested: !1,
              }),
              l,
            );
      });
    }
  }
  return ((A.default = i), A);
}
var le = {},
  Ut;
function Rn() {
  if (Ut) return le;
  ((Ut = 1),
    Object.defineProperty(le, "__esModule", { value: !0 }),
    (le._makeParamStoreGetter = void 0));
  const e = R(),
    t = { disableExposureLog: !0 };
  function s(u) {
    return u == null || u.disableExposureLog === !1;
  }
  function i(u, d) {
    return d != null && !(0, e._isTypeMatch)(u, d);
  }
  function o(u, d) {
    return u.value;
  }
  function n(u, d, f) {
    return u.getFeatureGate(d.gate_name, s(f) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function r(u, d, f, _) {
    const h = u.getDynamicConfig(d.config_name, s(_) ? void 0 : t).get(d.param_name);
    return i(h, f) ? f : h;
  }
  function c(u, d, f, _) {
    const h = u.getExperiment(d.experiment_name, s(_) ? void 0 : t).get(d.param_name);
    return i(h, f) ? f : h;
  }
  function l(u, d, f, _) {
    const h = u.getLayer(d.layer_name, s(_) ? void 0 : t).get(d.param_name);
    return i(h, f) ? f : h;
  }
  function a(u, d, f) {
    return (_, v) => {
      if (d == null) return v;
      const h = d[_];
      if (h == null || (v != null && (0, e._typeOf)(v) !== h.param_type)) return v;
      switch (h.ref_type) {
        case "static":
          return o(h);
        case "gate":
          return n(u, h, f);
        case "dynamic_config":
          return r(u, h, v, f);
        case "experiment":
          return c(u, h, v, f);
        case "layer":
          return l(u, h, v, f);
        default:
          return v;
      }
    };
  }
  return ((le._makeParamStoreGetter = a), le);
}
var D = {},
  Nt;
function In() {
  if (Nt) return D;
  Nt = 1;
  var e =
    (D && D.__awaiter) ||
    function (o, n, r, c) {
      function l(a) {
        return a instanceof r
          ? a
          : new r(function (u) {
              u(a);
            });
      }
      return new (r || (r = Promise))(function (a, u) {
        function d(v) {
          try {
            _(c.next(v));
          } catch (h) {
            u(h);
          }
        }
        function f(v) {
          try {
            _(c.throw(v));
          } catch (h) {
            u(h);
          }
        }
        function _(v) {
          v.done ? a(v.value) : l(v.value).then(d, f);
        }
        _((c = c.apply(o, n || [])).next());
      });
    };
  (Object.defineProperty(D, "__esModule", { value: !0 }),
    (D.StatsigEvaluationsDataAdapter = void 0));
  const t = R(),
    s = Ar();
  let i = class extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(n, r, c) {
      (super.attach(n, r, c),
        c !== null && c instanceof s.default
          ? (this._network = c)
          : (this._network = new s.default(r ?? {})));
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
    _fetchFromNetwork(n, r, c, l) {
      return e(this, void 0, void 0, function* () {
        var a;
        const u = yield (a = this._network) === null || a === void 0
          ? void 0
          : a.fetchEvaluations(this._getSdkKey(), n, c?.priority, r, l);
        return u ?? null;
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
  return ((D.StatsigEvaluationsDataAdapter = i), D);
}
var xt;
function jn() {
  if (xt) return F;
  xt = 1;
  var e =
    (F && F.__awaiter) ||
    function (c, l, a, u) {
      function d(f) {
        return f instanceof a
          ? f
          : new a(function (_) {
              _(f);
            });
      }
      return new (a || (a = Promise))(function (f, _) {
        function v(p) {
          try {
            g(u.next(p));
          } catch (y) {
            _(y);
          }
        }
        function h(p) {
          try {
            g(u.throw(p));
          } catch (y) {
            _(y);
          }
        }
        function g(p) {
          p.done ? f(p.value) : d(p.value).then(v, h);
        }
        g((u = u.apply(c, l || [])).next());
      });
    };
  Object.defineProperty(F, "__esModule", { value: !0 });
  const t = R(),
    s = Sn(),
    i = Ar(),
    o = Rn(),
    n = In();
  let r = class Ue extends t.StatsigClientBase {
    static instance(l) {
      const a = (0, t._getStatsigGlobal)().instance(l);
      return a instanceof Ue
        ? a
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Ue(l ?? "", {}));
    }
    constructor(l, a, u = null) {
      var d, f;
      t.SDKType._setClientType(l, "javascript-client");
      const _ = new i.default(u, (h) => {
        this.$emt(h);
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
        (this._store = new s.default(l)),
        (this._network = _),
        (this._user = this._configureUser(a, u)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const v = (f = u?.plugins) !== null && f !== void 0 ? f : [];
      for (const h of v) h.bind(this);
    }
    initializeSync(l) {
      var a;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((a = this._store.getWarnings()) !== null && a !== void 0 ? a : []),
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
    updateUserSync(l, a) {
      const u = performance.now();
      try {
        return this._updateUserSyncImpl(l, a, u);
      } catch (d) {
        const f = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(f, u);
      }
    }
    _updateUserSyncImpl(l, a, u) {
      var d;
      const f = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(l);
      const _ = this.dataAdapter.getDataSync(this._user);
      (_ == null && f.push("NoCachedValues"),
        this._store.setValues(_, this._user),
        this._finalizeUpdate(_));
      const v = a?.disableBackgroundCacheRefresh;
      return v === !0 || (v == null && _?.source === "Bootstrap")
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
    updateUserAsync(l, a) {
      return e(this, void 0, void 0, function* () {
        const u = performance.now();
        try {
          return yield this._updateUserAsyncImpl(l, a);
        } catch (d) {
          const f = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(f, u);
        }
      });
    }
    _updateUserAsyncImpl(l, a) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(l);
        const u = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(u);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, u, a)),
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
    checkGate(l, a) {
      return this.getFeatureGate(l, a).value;
    }
    logEvent(l, a, u) {
      const d = typeof l == "string" ? { eventName: l, value: a, metadata: u } : l;
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
    _createErrorUpdateDetails(l, a) {
      var u;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - a,
        l,
        null,
        [...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : [])],
      );
    }
    _finalizeUpdate(l) {
      (this._store.finalize(), this._setStatus("Ready", l));
    }
    _runPostUpdate(l, a) {
      this.dataAdapter.getDataAsync(l, a, { priority: "low" }).catch((u) => {
        t.Log.error("An error occurred after update.", u);
      });
    }
    _resetForUser(l) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(l, this._options)));
    }
    _configureUser(l, a) {
      var u;
      const d = (0, t._normalizeUser)(l, a),
        f = (u = d.customIDs) === null || u === void 0 ? void 0 : u.stableID;
      return (f && t.StableID.setOverride(f, this._sdkKey), d);
    }
    _getFeatureGateImpl(l, a) {
      var u, d;
      const { result: f, details: _ } = this._store.getGate(l),
        v = (0, t._makeFeatureGate)(l, _, f),
        h =
          (d = (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, v, this._user, a),
        g = h ?? v;
      return (
        this._enqueueExposure(
          l,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          a,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(l, a) {
      var u, d;
      const { result: f, details: _ } = this._store.getConfig(l),
        v = (0, t._makeDynamicConfig)(l, _, f),
        h =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(u, v, this._user, a),
        g = h ?? v;
      return (
        this._enqueueExposure(
          l,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          a,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(l, a) {
      var u, d, f, _;
      const { result: v, details: h } = this._store.getConfig(l),
        g = (0, t._makeExperiment)(l, h, v);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (u = g.__evaluation) === null || u === void 0 ? void 0 : u.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const p =
          (_ =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || _ === void 0
            ? void 0
            : _.call(f, g, this._user, a),
        y = p ?? g;
      return (
        this._enqueueExposure(
          l,
          (0, t._createConfigExposure)(this._user, y, this._store.getExposureMapping()),
          a,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: y }),
        y
      );
    }
    _getLayerImpl(l, a) {
      var u, d, f;
      const { result: _, details: v } = this._store.getLayer(l),
        h = (0, t._makeLayer)(l, v, _),
        g =
          (d =
            (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, h, this._user, a);
      a?.disableExposureLog && this._logger.incrementNonExposureCount(l);
      const p = (0, t._mergeOverride)(
        h,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : h.__value,
        (y) => {
          a?.disableExposureLog ||
            this._enqueueExposure(
              l,
              (0, t._createLayerParameterExposure)(
                this._user,
                p,
                y,
                this._store.getExposureMapping(),
              ),
              a,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: p }), p);
    }
    _getParameterStoreImpl(l, a) {
      var u, d;
      const { result: f, details: _ } = this._store.getParamStore(l);
      this._logger.incrementNonExposureCount(l);
      const v = {
          name: l,
          details: _,
          __configuration: f,
          get: (0, o._makeParamStoreGetter)(this, f, a),
        },
        h =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(u, v, a);
      return (
        h != null &&
          ((v.__configuration = h.config),
          (v.details = h.details),
          (v.get = (0, o._makeParamStoreGetter)(this, h.config, a))),
        v
      );
    }
  };
  return ((F.default = r), F);
}
var $t;
function Cn() {
  return (
    $t ||
      (($t = 1),
      (function (e) {
        var t =
            (C && C.__createBinding) ||
            (Object.create
              ? function (r, c, l, a) {
                  a === void 0 && (a = l);
                  var u = Object.getOwnPropertyDescriptor(c, l);
                  ((!u || ("get" in u ? !c.__esModule : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return c[l];
                      },
                    }),
                    Object.defineProperty(r, a, u));
                }
              : function (r, c, l, a) {
                  (a === void 0 && (a = l), (r[a] = c[l]));
                }),
          s =
            (C && C.__exportStar) ||
            function (r, c) {
              for (var l in r)
                l !== "default" && !Object.prototype.hasOwnProperty.call(c, l) && t(c, r, l);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const i = R(),
          o = jn();
        ((e.StatsigClient = o.default), s(R(), e));
        const n = Object.assign((0, i._getStatsigGlobal)(), { StatsigClient: o.default });
        e.default = n;
      })(C)),
    C
  );
}
var ce = {},
  Gt;
function Dn() {
  if (Gt) return ce;
  ((Gt = 1),
    Object.defineProperty(ce, "__esModule", { value: !0 }),
    (ce.ForgeDataAdapter = void 0));
  const e = Fr();
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
        l = await (0, e.initFeatureFlags)({ user: c }),
        a = {
          source: "Network",
          data: JSON.stringify(l),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = a), a);
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
  return ((ce.ForgeDataAdapter = t), ce);
}
var zt;
function Fn() {
  if (zt) return se;
  ((zt = 1),
    Object.defineProperty(se, "__esModule", { value: !0 }),
    (se.ForgeFeatureFlags = void 0));
  const e = Cn(),
    t = Dn();
  class s {
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
  return ((se.ForgeFeatureFlags = s), se);
}
var Vt;
function An() {
  return (
    Vt ||
      ((Vt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ForgeFeatureFlags = void 0),
          E.__exportStar(Fr(), e));
        var s = Fn();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return s.ForgeFeatureFlags;
          },
        });
      })(Me)),
    Me
  );
}
var Kt;
function kn() {
  return (
    Kt ||
      ((Kt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = E;
        var s = Gr();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return s.NavigationTarget;
          },
        }),
          t.__exportStar(Vr(), e),
          t.__exportStar(Hr(), e),
          t.__exportStar(Dr(), e),
          t.__exportStar(fn(), e),
          t.__exportStar(hn(), e),
          t.__exportStar(gn(), e),
          t.__exportStar(yn(), e),
          t.__exportStar(bn(), e),
          t.__exportStar(En(), e),
          (e.i18n = t.__importStar(On())),
          t.__exportStar(An(), e));
      })(be)),
    be
  );
}
var ge = kn();
async function de(e, t, s) {
  await ge.showFlag({
    id: `checklist-${Date.now()}`,
    title: e,
    type: s,
    description: t,
    isAutoDismiss: !0,
  });
}
function qn(e) {
  return new Date(e).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
  });
}
function Jt() {
  return b.jsx("div", {
    className: "loading-overlay",
    children: b.jsx("div", { className: "loading-spinner" }),
  });
}
function Tn() {
  const [e, t] = fe.useState({
      checkList: "[]",
      issueId: "",
      updatedAt: new Date(),
      updateDisplayName: "",
      updateId: "",
    }),
    [s, i] = fe.useState(!0),
    [o, n] = fe.useState(!1);
  fe.useEffect(() => {
    r();
  }, []);
  const r = async () => {
      try {
        const a = await ge.invoke("getCheckList");
        t(a);
      } catch {
        await de(
          "Checklist Loading Error",
          "Unable to load the checklist. Please try again later.",
          "error",
        );
      } finally {
        i(!1);
      }
    },
    c = async (a) => {
      try {
        n(!0);
        const u = await ge.invoke(a ? "updateWithOptimisticLocking" : "update", e);
        u.error
          ? u.concurrent
            ? (await de(
                "Concurrent Modification Detected",
                `User ${u.data?.updateDisplayName} has modified the checklist before you. Your changes could not be saved.`,
                "error",
              ),
              await r())
            : await de(
                "Update Failed",
                u.message || "Unable to update the checklist. Please try again later.",
                "error",
              )
          : u.data &&
            (t(u.data),
            await de(
              "Update Successful",
              "The checklist has been successfully updated",
              "success",
            ));
      } catch {
        await de(
          "Update Error",
          "An error occurred while updating the checklist. Please try again later.",
          "error",
        );
      } finally {
        n(!1);
      }
    },
    l = (a) => {
      const u = [...JSON.parse(e.checkList)];
      ((u[a] = { ...u[a], done: !u[a].done }), t({ ...e, checkList: JSON.stringify(u) }));
    };
  return s
    ? b.jsx("div", { className: "checklist-container", children: b.jsx(Jt, {}) })
    : b.jsxs("div", {
        className: "checklist-container",
        children: [
          o && b.jsx(Jt, {}),
          b.jsxs("div", {
            className: "checklist-header",
            children: [
              b.jsx("h2", { children: "Issue Checklist" }),
              b.jsxs("div", {
                className: "last-update",
                children: ["Last updated by ", e.updateDisplayName, " on ", qn(e.updatedAt)],
              }),
            ],
          }),
          b.jsx("div", {
            className: "checklist",
            children: JSON.parse(e.checkList).map((a, u) =>
              b.jsxs(
                "div",
                {
                  className: "checklist-item",
                  children: [
                    b.jsx("input", { type: "checkbox", checked: a.done, onChange: () => l(u) }),
                    b.jsx("span", { children: a.label }),
                  ],
                },
                u,
              ),
            ),
          }),
          b.jsxs("div", {
            className: "buttons",
            children: [
              b.jsx("button", { onClick: () => c(!0), children: "Update with Locking" }),
              b.jsx("button", { onClick: () => c(!1), children: "Update without Locking" }),
            ],
          }),
        ],
      });
}
const Mn = document.getElementById("root"),
  Bn = qr.createRoot(Mn),
  Ht = () => {
    Bn.render(b.jsx(Tn, {}));
  };
ge.view.theme
  .enable()
  .then(() => {
    Ht();
  })
  .catch((e) => {
    (console.error(e.message), Ht());
  });
