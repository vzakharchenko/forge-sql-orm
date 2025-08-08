import { r as Pt, c as dr } from "./react-dom-vendor-CewBCt5Y.js";
import { g as fr, r as _r } from "./lodash-vendor-SQX3M4kY.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = o(r);
    fetch(r.href, i);
  }
})();
var ue = { exports: {} },
  M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Se;
function hr() {
  if (Se) return M;
  Se = 1;
  var e = Pt(),
    t = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, a) {
    var u,
      d = {},
      _ = null,
      f = null;
    (a !== void 0 && (_ = "" + a),
      l.key !== void 0 && (_ = "" + l.key),
      l.ref !== void 0 && (f = l.ref));
    for (u in l) n.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (c && c.defaultProps) for (u in ((l = c.defaultProps), l)) d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: c, key: _, ref: f, props: d, _owner: r.current };
  }
  return ((M.Fragment = o), (M.jsx = s), (M.jsxs = s), M);
}
var Be;
function vr() {
  return (Be || ((Be = 1), (ue.exports = hr())), ue.exports);
}
var h = vr(),
  E = Pt(),
  le = {},
  je = function (e, t) {
    return (
      (je =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (o, n) {
            o.__proto__ = n;
          }) ||
        function (o, n) {
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (o[r] = n[r]);
        }),
      je(e, t)
    );
  };
function jt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  je(e, t);
  function o() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((o.prototype = t.prototype), new o());
}
var se = function () {
  return (
    (se =
      Object.assign ||
      function (t) {
        for (var o, n = 1, r = arguments.length; n < r; n++) {
          o = arguments[n];
          for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
        }
        return t;
      }),
    se.apply(this, arguments)
  );
};
function Rt(e, t) {
  var o = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
      t.indexOf(n[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
        (o[n[r]] = e[n[r]]);
  return o;
}
function It(e, t, o, n) {
  var r = arguments.length,
    i = r < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, o)) : n,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, t, o, n);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (s = e[c]) && (i = (r < 3 ? s(i) : r > 3 ? s(t, o, i) : s(t, o)) || i);
  return (r > 3 && i && Object.defineProperty(t, o, i), i);
}
function Tt(e, t) {
  return function (o, n) {
    t(o, n, e);
  };
}
function St(e, t, o, n, r, i) {
  function s(w) {
    if (w !== void 0 && typeof w != "function") throw new TypeError("Function expected");
    return w;
  }
  for (
    var c = n.kind,
      l = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      a = !t && e ? (n.static ? e : e.prototype) : null,
      u = t || (a ? Object.getOwnPropertyDescriptor(a, n.name) : {}),
      d,
      _ = !1,
      f = o.length - 1;
    f >= 0;
    f--
  ) {
    var y = {};
    for (var b in n) y[b] = b === "access" ? {} : n[b];
    for (var b in n.access) y.access[b] = n.access[b];
    y.addInitializer = function (w) {
      if (_) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(s(w || null));
    };
    var g = (0, o[f])(c === "accessor" ? { get: u.get, set: u.set } : u[l], y);
    if (c === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = s(g.get)) && (u.get = d),
        (d = s(g.set)) && (u.set = d),
        (d = s(g.init)) && r.unshift(d));
    } else (d = s(g)) && (c === "field" ? r.unshift(d) : (u[l] = d));
  }
  (a && Object.defineProperty(a, n.name, u), (_ = !0));
}
function Bt(e, t, o) {
  for (var n = arguments.length > 2, r = 0; r < t.length; r++)
    o = n ? t[r].call(e, o) : t[r].call(e);
  return n ? o : void 0;
}
function Ct(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function qt(e, t, o) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: o ? "".concat(o, " ", t) : t })
  );
}
function Mt(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function At(e, t, o, n) {
  function r(i) {
    return i instanceof o
      ? i
      : new o(function (s) {
          s(i);
        });
  }
  return new (o || (o = Promise))(function (i, s) {
    function c(u) {
      try {
        a(n.next(u));
      } catch (d) {
        s(d);
      }
    }
    function l(u) {
      try {
        a(n.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function a(u) {
      u.done ? i(u.value) : r(u.value).then(c, l);
    }
    a((n = n.apply(e, t || [])).next());
  });
}
function Ft(e, t) {
  var o = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    n,
    r,
    i,
    s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (s.next = c(0)),
    (s.throw = c(1)),
    (s.return = c(2)),
    typeof Symbol == "function" &&
      (s[Symbol.iterator] = function () {
        return this;
      }),
    s
  );
  function c(a) {
    return function (u) {
      return l([a, u]);
    };
  }
  function l(a) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; s && ((s = 0), a[0] && (o = 0)), o; )
      try {
        if (
          ((n = 1),
          r &&
            (i =
              a[0] & 2 ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) &&
            !(i = i.call(r, a[1])).done)
        )
          return i;
        switch (((r = 0), i && (a = [a[0] & 2, i.value]), a[0])) {
          case 0:
          case 1:
            i = a;
            break;
          case 4:
            return (o.label++, { value: a[1], done: !1 });
          case 5:
            (o.label++, (r = a[1]), (a = [0]));
            continue;
          case 7:
            ((a = o.ops.pop()), o.trys.pop());
            continue;
          default:
            if (
              ((i = o.trys), !(i = i.length > 0 && i[i.length - 1]) && (a[0] === 6 || a[0] === 2))
            ) {
              o = 0;
              continue;
            }
            if (a[0] === 3 && (!i || (a[1] > i[0] && a[1] < i[3]))) {
              o.label = a[1];
              break;
            }
            if (a[0] === 6 && o.label < i[1]) {
              ((o.label = i[1]), (i = a));
              break;
            }
            if (i && o.label < i[2]) {
              ((o.label = i[2]), o.ops.push(a));
              break;
            }
            (i[2] && o.ops.pop(), o.trys.pop());
            continue;
        }
        a = t.call(e, o);
      } catch (u) {
        ((a = [6, u]), (r = 0));
      } finally {
        n = i = 0;
      }
    if (a[0] & 5) throw a[1];
    return { value: a[0] ? a[1] : void 0, done: !0 };
  }
}
var ce = Object.create
  ? function (e, t, o, n) {
      n === void 0 && (n = o);
      var r = Object.getOwnPropertyDescriptor(t, o);
      ((!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) &&
        (r = {
          enumerable: !0,
          get: function () {
            return t[o];
          },
        }),
        Object.defineProperty(e, n, r));
    }
  : function (e, t, o, n) {
      (n === void 0 && (n = o), (e[n] = t[o]));
    };
function kt(e, t) {
  for (var o in e) o !== "default" && !Object.prototype.hasOwnProperty.call(t, o) && ce(t, e, o);
}
function ae(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    o = t && e[t],
    n = 0;
  if (o) return o.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e });
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ie(e, t) {
  var o = typeof Symbol == "function" && e[Symbol.iterator];
  if (!o) return e;
  var n = o.call(e),
    r,
    i = [],
    s;
  try {
    for (; (t === void 0 || t-- > 0) && !(r = n.next()).done; ) i.push(r.value);
  } catch (c) {
    s = { error: c };
  } finally {
    try {
      r && !r.done && (o = n.return) && o.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}
function Nt() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Ie(arguments[t]));
  return e;
}
function Lt() {
  for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
  for (var n = Array(e), r = 0, t = 0; t < o; t++)
    for (var i = arguments[t], s = 0, c = i.length; s < c; s++, r++) n[r] = i[s];
  return n;
}
function $t(e, t, o) {
  if (o || arguments.length === 2)
    for (var n = 0, r = t.length, i; n < r; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function q(e) {
  return this instanceof q ? ((this.v = e), this) : new q(e);
}
function xt(e, t, o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = o.apply(e, t || []),
    r,
    i = [];
  return (
    (r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    c("next"),
    c("throw"),
    c("return", s),
    (r[Symbol.asyncIterator] = function () {
      return this;
    }),
    r
  );
  function s(f) {
    return function (y) {
      return Promise.resolve(y).then(f, d);
    };
  }
  function c(f, y) {
    n[f] &&
      ((r[f] = function (b) {
        return new Promise(function (g, w) {
          i.push([f, b, g, w]) > 1 || l(f, b);
        });
      }),
      y && (r[f] = y(r[f])));
  }
  function l(f, y) {
    try {
      a(n[f](y));
    } catch (b) {
      _(i[0][3], b);
    }
  }
  function a(f) {
    f.value instanceof q ? Promise.resolve(f.value.v).then(u, d) : _(i[0][2], f);
  }
  function u(f) {
    l("next", f);
  }
  function d(f) {
    l("throw", f);
  }
  function _(f, y) {
    (f(y), i.shift(), i.length && l(i[0][0], i[0][1]));
  }
}
function Dt(e) {
  var t, o;
  return (
    (t = {}),
    n("next"),
    n("throw", function (r) {
      throw r;
    }),
    n("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function n(r, i) {
    t[r] = e[r]
      ? function (s) {
          return (o = !o) ? { value: q(e[r](s)), done: !1 } : i ? i(s) : s;
        }
      : i;
  }
}
function Ut(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    o;
  return t
    ? t.call(e)
    : ((e = typeof ae == "function" ? ae(e) : e[Symbol.iterator]()),
      (o = {}),
      n("next"),
      n("throw"),
      n("return"),
      (o[Symbol.asyncIterator] = function () {
        return this;
      }),
      o);
  function n(i) {
    o[i] =
      e[i] &&
      function (s) {
        return new Promise(function (c, l) {
          ((s = e[i](s)), r(c, l, s.done, s.value));
        });
      };
  }
  function r(i, s, c, l) {
    Promise.resolve(l).then(function (a) {
      i({ value: a, done: c });
    }, s);
  }
}
function Gt(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var yr = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Re = function (e) {
    return (
      (Re =
        Object.getOwnPropertyNames ||
        function (t) {
          var o = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (o[o.length] = n);
          return o;
        }),
      Re(e)
    );
  };
function Vt(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var o = Re(e), n = 0; n < o.length; n++) o[n] !== "default" && ce(t, e, o[n]);
  return (yr(t, e), t);
}
function zt(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ht(e, t, o, n) {
  if (o === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? n : o === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Wt(e, t, o, n, r) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !r) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? r.call(e, o) : r ? (r.value = o) : t.set(e, o), o);
}
function Kt(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Jt(e, t, o) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var n, r;
    if (o) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      n = t[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((n = t[Symbol.dispose]), o && (r = n));
    }
    if (typeof n != "function") throw new TypeError("Object not disposable.");
    (r &&
      (n = function () {
        try {
          r.call(this);
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      e.stack.push({ value: t, dispose: n, async: o }));
  } else o && e.stack.push({ async: !0 });
  return t;
}
var br =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, o) {
        var n = new Error(o);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Xt(e) {
  function t(i) {
    ((e.error = e.hasError ? new br(i, e.error, "An error was suppressed during disposal.") : i),
      (e.hasError = !0));
  }
  var o,
    n = 0;
  function r() {
    for (; (o = e.stack.pop()); )
      try {
        if (!o.async && n === 1) return ((n = 0), e.stack.push(o), Promise.resolve().then(r));
        if (o.dispose) {
          var i = o.dispose.call(o.value);
          if (o.async)
            return (
              (n |= 2),
              Promise.resolve(i).then(r, function (s) {
                return (t(s), r());
              })
            );
        } else n |= 1;
      } catch (s) {
        t(s);
      }
    if (n === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return r();
}
function Yt(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (o, n, r, i, s) {
        return n
          ? t
            ? ".jsx"
            : ".js"
          : r && (!i || !s)
            ? o
            : r + i + "." + s.toLowerCase() + "js";
      })
    : e;
}
const gr = {
    __extends: jt,
    __assign: se,
    __rest: Rt,
    __decorate: It,
    __param: Tt,
    __esDecorate: St,
    __runInitializers: Bt,
    __propKey: Ct,
    __setFunctionName: qt,
    __metadata: Mt,
    __awaiter: At,
    __generator: Ft,
    __createBinding: ce,
    __exportStar: kt,
    __values: ae,
    __read: Ie,
    __spread: Nt,
    __spreadArrays: Lt,
    __spreadArray: $t,
    __await: q,
    __asyncGenerator: xt,
    __asyncDelegator: Dt,
    __asyncValues: Ut,
    __makeTemplateObject: Gt,
    __importStar: Vt,
    __importDefault: zt,
    __classPrivateFieldGet: Ht,
    __classPrivateFieldSet: Wt,
    __classPrivateFieldIn: Kt,
    __addDisposableResource: Jt,
    __disposeResources: Xt,
    __rewriteRelativeImportExtension: Yt,
  },
  pr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Jt,
        get __assign() {
          return se;
        },
        __asyncDelegator: Dt,
        __asyncGenerator: xt,
        __asyncValues: Ut,
        __await: q,
        __awaiter: At,
        __classPrivateFieldGet: Ht,
        __classPrivateFieldIn: Kt,
        __classPrivateFieldSet: Wt,
        __createBinding: ce,
        __decorate: It,
        __disposeResources: Xt,
        __esDecorate: St,
        __exportStar: kt,
        __extends: jt,
        __generator: Ft,
        __importDefault: zt,
        __importStar: Vt,
        __makeTemplateObject: Gt,
        __metadata: Mt,
        __param: Tt,
        __propKey: Ct,
        __read: Ie,
        __rest: Rt,
        __rewriteRelativeImportExtension: Yt,
        __runInitializers: Bt,
        __setFunctionName: qt,
        __spread: Nt,
        __spreadArray: $t,
        __spreadArrays: Lt,
        __values: ae,
        default: gr,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  j = fr(pr);
var A = {},
  Ce;
function wr() {
  return (
    Ce ||
      ((Ce = 1),
      Object.defineProperty(A, "__esModule", { value: !0 }),
      (A.NavigationTarget = void 0),
      (A.NavigationTarget = {
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
    A
  );
}
var de = {},
  F = {},
  k = {},
  N = {},
  qe;
function P() {
  if (qe) return N;
  ((qe = 1), Object.defineProperty(N, "__esModule", { value: !0 }), (N.BridgeAPIError = void 0));
  class e extends Error {}
  return ((N.BridgeAPIError = e), N);
}
var Me;
function O() {
  if (Me) return k;
  ((Me = 1), Object.defineProperty(k, "__esModule", { value: !0 }), (k.getCallBridge = void 0));
  const e = P();
  function t(n) {
    return !!n?.callBridge;
  }
  const o = () => {
    if (!t(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((k.getCallBridge = o), k);
}
var L = {},
  Ae;
function Zt() {
  if (Ae) return L;
  ((Ae = 1), Object.defineProperty(L, "__esModule", { value: !0 }), (L.withRateLimiter = void 0));
  const e = P(),
    t = (o, n, r, i) => {
      let s = Date.now(),
        c = 0;
      return async (...l) => {
        const a = Date.now();
        if ((a - s > r && ((s = a), (c = 0)), c >= n))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((c = c + 1), o(...l));
      };
    };
  return ((L.withRateLimiter = t), L);
}
var Fe;
function mr() {
  if (Fe) return F;
  ((Fe = 1), Object.defineProperty(F, "__esModule", { value: !0 }), (F.invoke = void 0));
  const e = O(),
    t = P(),
    o = Zt(),
    n = (0, e.getCallBridge)(),
    r = (s) => {
      if (s && Object.values(s).some((c) => typeof c == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    i = (s, c) => {
      if (typeof s != "string") throw new t.BridgeAPIError("functionKey must be a string!");
      return (r(c), n("invoke", { functionKey: s, payload: c }));
    };
  return (
    (F.invoke = (0, o.withRateLimiter)(
      i,
      500,
      1e3 * 25,
      "Resolver calls are rate limited at 500req/25s",
    )),
    F
  );
}
var ke;
function Or() {
  return (
    ke ||
      ((ke = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(mr(), e));
      })(de)),
    de
  );
}
var fe = {},
  $ = {},
  _e = {},
  Ne;
function Qt() {
  return (
    Ne ||
      ((Ne = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = O(),
          o = P(),
          n = Zt(),
          r = 500,
          i = 25,
          s = 1e3 * i;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, t.getCallBridge)(),
          l = (d) => {
            if (d && Object.values(d).some((_) => typeof _ == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          a = (d) => async (_) => {
            l(_);
            const f = { ..._, invokeType: `ui-${d.toLowerCase()}-fetch` },
              y = await c("invoke", f),
              { success: b, payload: g, error: w } = y ?? {},
              m = { ...(b ? g : w) };
            if (m && m.headers)
              for (const C in m.headers)
                Array.isArray(m.headers[C]) && (m.headers[C] = m.headers[C].join(","));
            return m;
          },
          u = (d) => {
            const _ = a(d);
            return (0, n.withRateLimiter)(
              _,
              r,
              s,
              `${d} invocation calls are rate limited at ${r}/${i}s`,
            );
          };
        e._invokeEndpointFn = u;
      })(_e)),
    _e
  );
}
var Le;
function Er() {
  if (Le) return $;
  ((Le = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.invokeRemote = void 0));
  const e = Qt(),
    t = (o) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(o);
  return (($.invokeRemote = t), $);
}
var x = {},
  $e;
function Pr() {
  if ($e) return x;
  (($e = 1), Object.defineProperty(x, "__esModule", { value: !0 }), (x.invokeService = void 0));
  const e = Qt(),
    t = (o) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(o);
  return ((x.invokeService = t), x);
}
var xe;
function jr() {
  return (
    xe ||
      ((xe = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = j;
        (t.__exportStar(Er(), e), t.__exportStar(Pr(), e));
      })(fe)),
    fe
  );
}
var he = {},
  D = {},
  U = {},
  De;
function Rr() {
  if (De) return U;
  ((De = 1), Object.defineProperty(U, "__esModule", { value: !0 }), (U.submit = void 0));
  const e = O(),
    t = P(),
    o = (0, e.getCallBridge)(),
    n = async (r) => {
      if ((await o("submit", r)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((U.submit = n), U);
}
var G = {},
  Ue;
function Ir() {
  if (Ue) return G;
  ((Ue = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.close = void 0));
  const e = O(),
    t = P(),
    o = (0, e.getCallBridge)(),
    n = async (r) => {
      try {
        if ((await o("close", r)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((G.close = n), G);
}
var V = {},
  Ge;
function Tr() {
  if (Ge) return V;
  ((Ge = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.open = void 0));
  const e = O(),
    t = P(),
    o = (0, e.getCallBridge)(),
    n = async () => {
      try {
        if ((await o("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((V.open = n), V);
}
var z = {},
  Ve;
function Sr() {
  if (Ve) return z;
  ((Ve = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.refresh = void 0));
  const e = O(),
    t = P(),
    o = (0, e.getCallBridge)(),
    n = async (r) => {
      if ((await o("refresh", r)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((z.refresh = n), z);
}
var H = {},
  ze;
function Br() {
  if (ze) return H;
  ((ze = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.createHistory = void 0));
  const t = (0, O().getCallBridge)(),
    o = async () => {
      const n = await t("createHistory");
      return (
        n.listen((r) => {
          n.location = r;
        }),
        n
      );
    };
  return ((H.createHistory = o), H);
}
var W = {},
  ve = {},
  R = {},
  He;
function er() {
  return (
    He ||
      ((He = 1),
      Object.defineProperty(R, "__esModule", { value: !0 }),
      (R.FORGE_SUPPORTED_LOCALE_CODES = R.I18N_BUNDLE_FOLDER_NAME = R.I18N_INFO_FILE_NAME = void 0),
      (R.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (R.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (R.FORGE_SUPPORTED_LOCALE_CODES = [
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
    R
  );
}
var S = {},
  We;
function Cr() {
  if (We) return S;
  ((We = 1),
    Object.defineProperty(S, "__esModule", { value: !0 }),
    (S.TranslationsGetter = S.TranslationGetterError = void 0));
  const e = (n, r) => {
    n.includes(r) || n.push(r);
  };
  class t extends Error {
    constructor(r) {
      (super(r), (this.name = "TranslationGetterError"));
    }
  }
  S.TranslationGetterError = t;
  class o {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(r) {
      this.resourcesAccessor = r;
    }
    async getTranslations(r, i = { fallback: !0 }) {
      const s = await this.getI18nInfoConfig(),
        { fallback: c } = i;
      if (!c) {
        let l;
        return (
          s.locales.includes(r) && (l = await this.getTranslationResource(r)),
          { translations: l ?? null, locale: r }
        );
      }
      for (const l of this.getLocaleLookupOrder(r, s)) {
        const a = await this.getTranslationResource(l);
        if (a) return { translations: a, locale: l };
      }
      return { translations: null, locale: r };
    }
    async getTranslationsByLocaleLookupOrder(r) {
      const i = await this.getI18nInfoConfig(),
        s = this.getLocaleLookupOrder(r, i);
      return await Promise.all(
        s.map(async (c) => {
          const l = await this.getTranslationResource(c);
          return { locale: c, translations: l };
        }),
      );
    }
    reset() {
      ((this.i18nInfoConfig = null), this.translationResources.clear());
    }
    async getTranslationResource(r) {
      let i = this.translationResources.get(r);
      if (!i)
        try {
          ((i = await this.resourcesAccessor.getTranslationResource(r)),
            this.translationResources.set(r, i));
        } catch (s) {
          throw s instanceof t ? s : new t(`Failed to get translation resource for locale: ${r}`);
        }
      return i;
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
    getLocaleLookupOrder(r, i) {
      const { locales: s, fallback: c } = i,
        l = [r],
        a = c[r];
      return (
        a && Array.isArray(a) && a.length > 0 && l.push(...a),
        e(l, i.fallback.default),
        l.filter((u) => s.includes(u))
      );
    }
  }
  return ((S.TranslationsGetter = o), S);
}
var K = {},
  ye = {},
  Ke;
function tr() {
  return (
    Ke ||
      ((Ke = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const o = j.__importDefault(_r()),
          n = (i, s, c) => {
            const l = i[c];
            return l ? (0, e.getTranslationValueFromContent)(l, s) : null;
          };
        e.getTranslationValue = n;
        const r = (i, s) => {
          let c = i[s];
          if (!c) {
            const l = s.split(".");
            l.length > 1 && (c = (0, o.default)(i, l, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = r;
      })(ye)),
    ye
  );
}
var Je;
function qr() {
  if (Je) return K;
  ((Je = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.Translator = void 0));
  const e = tr();
  class t {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(n, r) {
      ((this.locale = n), (this.translationsGetter = r));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(n) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let r = this.cache.get(n);
      if (r === void 0) {
        for (const { translations: i } of this.localeLookupOrderedTranslations) {
          const s = (0, e.getTranslationValueFromContent)(i, n);
          if (s !== null) {
            r = s;
            break;
          }
        }
        ((r = r ?? null), this.cache.set(n, r));
      }
      return r;
    }
  }
  return ((K.Translator = t), K);
}
var J = {},
  Xe;
function Mr() {
  if (Xe) return J;
  ((Xe = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.ensureLocale = void 0));
  const e = er(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    o = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    n = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, s) => {
        const [c] = s.split("-");
        return (i[c] || (i[c] = s), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    r = (i) => {
      const s = i.replace("_", "-");
      return t.has(s) ? s : (n[s] ?? o[s] ?? null);
    };
  return ((J.ensureLocale = r), J);
}
var be = {},
  Ye;
function Ar() {
  return (
    Ye ||
      ((Ye = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (a) => typeof a == "object" && a !== null && !Array.isArray(a),
          o = (a) => typeof a?.i18n == "string",
          n = (a) => a.startsWith("connect-"),
          r = (a) => a.startsWith("core:"),
          i = (a) => {
            const u = new Set(),
              d = (_, f) =>
                !t(_) || u.has(_)
                  ? []
                  : (u.add(_),
                    Object.entries(_).flatMap(([y, b]) => {
                      const g = [...f, y];
                      return o(b)
                        ? [{ propertyPath: g, key: b.i18n }]
                        : Array.isArray(b)
                          ? b.flatMap((w) => d(w, g))
                          : d(b, g);
                    }));
            return d(a, []);
          },
          s = (a) =>
            Object.entries(a).flatMap(([u, d]) =>
              !n(u) && !r(u) && d && Array.isArray(d) && d.length > 0 ? d.map((_) => [_, u]) : [],
            );
        e.getI18nSupportedModuleEntries = s;
        const c = (a) => {
          const u = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(a)) {
            const _ = i(d[0]);
            for (const { key: f } of _) u.add(f);
          }
          return u.size > 0 ? Array.from(u) : [];
        };
        e.extractI18nKeysFromModules = c;
        const l = (a) => {
          const u = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(a)) {
            const _ = i(d[0]);
            for (const f of _) u.push({ moduleName: d[1], ...f });
          }
          return u;
        };
        e.extractI18nPropertiesFromModules = l;
      })(be)),
    be
  );
}
var ge = {},
  Ze;
function Fr() {
  return (Ze || ((Ze = 1), Object.defineProperty(ge, "__esModule", { value: !0 })), ge);
}
var Qe;
function rr() {
  return (
    Qe ||
      ((Qe = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = j;
        (t.__exportStar(er(), e),
          t.__exportStar(Cr(), e),
          t.__exportStar(qr(), e),
          t.__exportStar(Mr(), e));
        var o = tr();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return o.getTranslationValue;
          },
        });
        var n = Ar();
        (Object.defineProperty(e, "extractI18nKeysFromModules", {
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
          t.__exportStar(Fr(), e));
      })(ve)),
    ve
  );
}
var et;
function kr() {
  if (et) return W;
  ((et = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.getContext = void 0));
  const e = O(),
    t = rr(),
    o = (0, e.getCallBridge)(),
    n = async () => {
      var r;
      const i = await o("getContext"),
        s = i?.locale;
      return (s && (i.locale = (r = (0, t.ensureLocale)(s)) !== null && r !== void 0 ? r : s), i);
    };
  return ((W.getContext = n), W);
}
var X = {},
  tt;
function Nr() {
  if (tt) return X;
  ((tt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.changeWindowTitle = void 0));
  const e = O(),
    t = P(),
    o = (0, e.getCallBridge)(),
    n = async (r) => {
      try {
        await o("changeWindowTitle", r);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((X.changeWindowTitle = n), X);
}
var Y = {},
  rt;
function Lr() {
  if (rt) return Y;
  ((rt = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.theme = void 0));
  const t = (0, O().getCallBridge)();
  return ((Y.theme = { enable: () => t("enableTheming") }), Y);
}
var Z = {},
  Q = {},
  pe = {},
  B = {},
  nt;
function nr() {
  if (nt) return B;
  ((nt = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.blobToBase64 = B.base64ToBlob = void 0));
  const e = (o, n) => {
    if (!o) return null;
    const r = o.includes(";base64") ? o.split(",")[1] : o,
      i = atob(r),
      s = new Array(i.length);
    for (let l = 0; l < i.length; l++) s[l] = i.charCodeAt(l);
    const c = new Uint8Array(s);
    return new Blob([c], { type: n });
  };
  B.base64ToBlob = e;
  const t = (o) =>
    new Promise((n, r) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        n(i.result);
      }),
        (i.onerror = r),
        i.readAsDataURL(o));
    });
  return ((B.blobToBase64 = t), B);
}
var ot;
function $r() {
  return (
    ot ||
      ((ot = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = nr(),
          o = (a) => {
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
          n = async (a) => ({ data: await (0, t.blobToBase64)(a), type: a.type }),
          r = (a) => (0, t.base64ToBlob)(a.data, a.type),
          i = async (a) => {
            if (a instanceof Blob) return { ...(await n(a)), __isBlobData: !0 };
            if (Array.isArray(a))
              return Promise.all(a.map((u) => (0, e.serialiseBlobsInPayload)(u)));
            if (a && o(a)) {
              const u = await Promise.all(
                Object.entries(a).map(async ([d, _]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(_),
                ]),
              );
              return Object.fromEntries(u);
            }
            return a;
          };
        e.serialiseBlobsInPayload = i;
        const s = (a) => {
          if (a && o(a) && "__isBlobData" in a) {
            const u = a;
            return r({ data: u.data, type: u.type });
          }
          if (Array.isArray(a)) return a.map((u) => (0, e.deserialiseBlobsInPayload)(u));
          if (a && o(a)) {
            const u = {};
            for (const [d, _] of Object.entries(a)) u[d] = (0, e.deserialiseBlobsInPayload)(_);
            return u;
          }
          return a;
        };
        e.deserialiseBlobsInPayload = s;
        const c = (a) =>
          a instanceof Blob
            ? !0
            : Array.isArray(a)
              ? a.some((u) => (0, e.containsBlobs)(u))
              : a && o(a)
                ? Object.values(a).some((u) => (0, e.containsBlobs)(u))
                : !1;
        e.containsBlobs = c;
        const l = (a) =>
          a && o(a) && "__isBlobData" in a
            ? !0
            : Array.isArray(a)
              ? a.some((u) => (0, e.containsSerialisedBlobs)(u))
              : a && o(a)
                ? Object.values(a).some((u) => (0, e.containsSerialisedBlobs)(u))
                : !1;
        e.containsSerialisedBlobs = l;
      })(pe)),
    pe
  );
}
var it;
function or() {
  if (it) return Q;
  ((it = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.events = void 0));
  const e = O(),
    t = $r(),
    o = (0, e.getCallBridge)(),
    n = async (i, s) => {
      let c = s;
      return (
        (0, t.containsBlobs)(s) && (c = await (0, t.serialiseBlobsInPayload)(s)),
        o("emit", { event: i, payload: c })
      );
    },
    r = (i, s) =>
      o("on", {
        event: i,
        callback: (l) => {
          let a = l;
          return (
            (0, t.containsSerialisedBlobs)(l) && (a = (0, t.deserialiseBlobsInPayload)(l)),
            s(a)
          );
        },
      });
  return ((Q.events = { emit: n, on: r }), Q);
}
var st;
function xr() {
  if (st) return Z;
  ((st = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.emitReadyEvent = void 0));
  const e = or(),
    t = ir(),
    o = "EXTENSION_READY",
    n = async () => {
      const r = await t.view.getContext();
      await e.events.emit(o, { localId: r.localId });
    };
  return ((Z.emitReadyEvent = n), Z);
}
var at;
function ir() {
  if (at) return D;
  ((at = 1), Object.defineProperty(D, "__esModule", { value: !0 }), (D.view = void 0));
  const e = Rr(),
    t = Ir(),
    o = Tr(),
    n = Sr(),
    r = Br(),
    i = kr(),
    s = Nr(),
    c = Lr(),
    l = xr();
  return (
    (D.view = {
      submit: e.submit,
      close: t.close,
      open: o.open,
      refresh: n.refresh,
      createHistory: r.createHistory,
      getContext: i.getContext,
      theme: c.theme,
      changeWindowTitle: s.changeWindowTitle,
      emitReadyEvent: l.emitReadyEvent,
    }),
    D
  );
}
var ct;
function sr() {
  return (
    ct ||
      ((ct = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(ir(), e));
      })(he)),
    he
  );
}
var we = {},
  ee = {},
  ut;
function Dr() {
  if (ut) return ee;
  ((ut = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.router = void 0));
  const t = (0, O().getCallBridge)(),
    o = async (s) => {
      if (!s?.target) throw new Error("target is required for getUrl");
      const c = await t("getUrl", s);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (l) {
        throw new Error(`Failed to parse URL: ${c} (${l})`);
      }
    },
    n = (s) => {
      if (typeof s == "string") return t("navigate", { url: s, type: "same-tab" });
      if (!s?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...s, type: "same-tab" });
    },
    r = (s) => {
      if (typeof s == "string") return t("navigate", { url: s, type: "new-tab" });
      if (!s?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...s, type: "new-tab" });
    },
    i = async () => t("reload");
  return ((ee.router = { getUrl: o, navigate: n, open: r, reload: i }), ee);
}
var lt;
function Ur() {
  return (
    lt ||
      ((lt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(Dr(), e));
      })(we)),
    we
  );
}
var me = {},
  te = {},
  dt;
function Gr() {
  if (dt) return te;
  ((dt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.Modal = void 0));
  const e = O(),
    t = P(),
    o = (0, e.getCallBridge)(),
    n = () => {};
  class r {
    constructor(s) {
      var c, l;
      ((this.resource = s?.resource || null),
        (this.onClose = s?.onClose || n),
        (this.size = s?.size || "medium"),
        (this.context = s?.context || {}),
        (this.closeOnEscape = (c = s?.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick =
          (l = s?.closeOnOverlayClick) !== null && l !== void 0 ? l : !0));
    }
    async open() {
      try {
        if (
          (await o("openModal", {
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
  return ((te.Modal = r), te);
}
var ft;
function Vr() {
  return (
    ft ||
      ((ft = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(Gr(), e));
      })(me)),
    me
  );
}
var I = {},
  re = {},
  _t;
function zr() {
  if (_t) return re;
  ((_t = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.productFetchApi = void 0));
  const e = nr(),
    t = async (r) => {
      const i = {};
      for (const [s, c] of r.entries())
        if (s === "file") {
          const l = c.name,
            a = c.type;
          ((i.file = await (0, e.blobToBase64)(c)), (i.__fileName = l), (i.__fileType = a));
        } else i[s] = c;
      return JSON.stringify(i);
    },
    o = async (r) => {
      const i = r?.body instanceof FormData,
        s = i ? await t(r?.body) : r?.body,
        c = new Request("", { body: s, method: r?.method, headers: r?.headers }),
        l = Object.fromEntries(c.headers.entries());
      return {
        body: c.method !== "GET" ? await c.text() : null,
        headers: new Headers(l),
        isMultipartFormData: i,
      };
    },
    n = (r) => {
      const i = async (s, c, l) => {
        const { body: a, headers: u, isMultipartFormData: d } = await o(l);
        u.has("X-Atlassian-Token") || u.set("X-Atlassian-Token", "no-check");
        const _ = {
            product: s,
            restPath: c,
            fetchRequestInit: { ...l, body: a, headers: [...u.entries()] },
            isMultipartFormData: d,
          },
          {
            body: f,
            headers: y,
            statusText: b,
            status: g,
            isAttachment: w,
          } = await r("fetchProduct", _),
          m = w ? (0, e.base64ToBlob)(f, y["content-type"]) : f;
        return new Response(m || null, { headers: y, status: g, statusText: b });
      };
      return {
        requestConfluence: (s, c) => i("confluence", s, c),
        requestJira: (s, c) => i("jira", s, c),
        requestBitbucket: (s, c) => i("bitbucket", s, c),
      };
    };
  return ((re.productFetchApi = n), re);
}
var ht;
function Hr() {
  if (ht) return I;
  ht = 1;
  var e;
  (Object.defineProperty(I, "__esModule", { value: !0 }),
    (I.requestBitbucket = I.requestJira = I.requestConfluence = void 0));
  const t = O();
  return (
    (e = (0, zr().productFetchApi)((0, t.getCallBridge)())),
    (I.requestConfluence = e.requestConfluence),
    (I.requestJira = e.requestJira),
    (I.requestBitbucket = e.requestBitbucket),
    I
  );
}
var Oe = {},
  ne = {},
  vt;
function Wr() {
  if (vt) return ne;
  ((vt = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.showFlag = void 0));
  const e = O(),
    t = P(),
    o = (0, e.getCallBridge)(),
    n = (r) => {
      var i;
      if (!r.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const s = o("showFlag", { ...r, type: (i = r.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await s, o("closeFlag", { id: r.id })) };
    };
  return ((ne.showFlag = n), ne);
}
var yt;
function Kr() {
  return (
    yt ||
      ((yt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = Wr();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(Oe)),
    Oe
  );
}
var Ee = {},
  bt;
function Jr() {
  return (
    bt ||
      ((bt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(or(), e));
      })(Ee)),
    Ee
  );
}
var Pe = {},
  oe = {},
  gt;
function Xr() {
  if (gt) return oe;
  ((gt = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.__realtime = void 0));
  const t = (0, O().getCallBridge)(),
    o = (r, i) => t("publishRealtimeChannel", { channelName: r, eventPayload: i }),
    n = (r, i) => t("subscribeRealtimeChannel", { channelName: r, onEvent: i });
  return ((oe.__realtime = { publish: o, subscribe: n }), oe);
}
var pt;
function Yr() {
  return (
    pt ||
      ((pt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(Xr(), e));
      })(Pe)),
    Pe
  );
}
var T = {},
  wt;
function Zr() {
  if (wt) return T;
  ((wt = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.createTranslationFunction = T.getTranslations = T.resetTranslationsCache = void 0));
  const e = rr(),
    t = sr(),
    o = {
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
    n = new e.TranslationsGetter(o),
    r = () => {
      n.reset();
    };
  T.resetTranslationsCache = r;
  const i = async (c = null, l = { fallback: !0 }) => {
    let a = c;
    return (a || (a = (await t.view.getContext()).locale), await n.getTranslations(a, l));
  };
  T.getTranslations = i;
  const s = async (c = null) => {
    let l = c;
    l || (l = (await t.view.getContext()).locale);
    const a = new e.Translator(l, n);
    return (
      await a.init(),
      (u, d) => {
        var _, f;
        return (f = (_ = a.translate(u)) !== null && _ !== void 0 ? _ : d) !== null && f !== void 0
          ? f
          : u;
      }
    );
  };
  return ((T.createTranslationFunction = s), T);
}
var mt;
function Qr() {
  return (
    mt ||
      ((mt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = j;
        var o = wr();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return o.NavigationTarget;
          },
        }),
          t.__exportStar(Or(), e),
          t.__exportStar(jr(), e),
          t.__exportStar(sr(), e),
          t.__exportStar(Ur(), e),
          t.__exportStar(Vr(), e),
          t.__exportStar(Hr(), e),
          t.__exportStar(Kr(), e),
          t.__exportStar(Jr(), e),
          t.__exportStar(Yr(), e),
          (e.i18n = t.__importStar(Zr())));
      })(le)),
    le
  );
}
var ie = Qr();
const en = "_container_16ann_1",
  tn = "_header_16ann_9",
  rn = "_controls_16ann_20",
  nn = "_searchSection_16ann_28",
  on = "_searchInput_16ann_34",
  sn = "_orgSelect_16ann_35",
  an = "_input_16ann_36",
  cn = "_select_16ann_37",
  un = "_addButton_16ann_63",
  ln = "_addForm_16ann_79",
  dn = "_submitButton_16ann_88",
  fn = "_spinner_16ann_108",
  _n = "_spinnerInner_16ann_113",
  hn = "_tableContainer_16ann_117",
  vn = "_table_16ann_117",
  yn = "_stats_16ann_146",
  bn = "_loadingContainer_16ann_155",
  p = {
    container: en,
    header: tn,
    controls: rn,
    searchSection: nn,
    searchInput: on,
    orgSelect: sn,
    input: an,
    select: cn,
    addButton: un,
    addForm: ln,
    submitButton: dn,
    spinner: fn,
    spinnerInner: _n,
    tableContainer: hn,
    table: vn,
    stats: yn,
    loadingContainer: bn,
  },
  Ot = () =>
    h.jsx("div", { className: p.spinner, children: h.jsx("div", { className: p.spinnerInner }) });
function gn() {
  const [e, t] = E.useState([]),
    [o, n] = E.useState([]),
    [r, i] = E.useState(""),
    [s, c] = E.useState(null),
    [l, a] = E.useState(null),
    [u, d] = E.useState(""),
    [_, f] = E.useState(null),
    [y, b] = E.useState(!1),
    [g, w] = E.useState(!0),
    [m, C] = E.useState(!1),
    ar = async () => {
      try {
        const v = await ie.invoke("getUsers", {
          searchTerm: r || void 0,
          organizationId: s || void 0,
        });
        t(v);
      } catch (v) {
        console.error("Error fetching users:", v);
      }
    },
    cr = async () => {
      try {
        const v = await ie.invoke("getOrganizations");
        n(v);
      } catch (v) {
        console.error("Error fetching organizations:", v);
      }
    },
    ur = async () => {
      try {
        const v = await ie.invoke("getUserStats");
        a(v);
      } catch (v) {
        console.error("Error fetching stats:", v);
      }
    },
    Te = async () => {
      w(!0);
      try {
        await Promise.all([ar(), cr(), ur()]);
      } finally {
        w(!1);
      }
    };
  E.useEffect(() => {
    Te();
  }, [r, s]);
  const lr = async () => {
    if (!(!u || !_)) {
      C(!0);
      try {
        (await ie.invoke("createUser", { name: u, organizationId: _ }),
          d(""),
          f(null),
          b(!1),
          await Te());
      } catch (v) {
        console.error("Error adding user:", v);
      } finally {
        C(!1);
      }
    }
  };
  return g
    ? h.jsxs("div", {
        className: p.loadingContainer,
        children: [h.jsx(Ot, {}), h.jsx("p", { children: "Loading data..." })],
      })
    : h.jsxs("div", {
        className: p.container,
        children: [
          h.jsx("header", {
            className: p.header,
            children: h.jsx("h1", { children: "OrgTracker" }),
          }),
          h.jsxs("div", {
            className: p.controls,
            children: [
              h.jsxs("div", {
                className: p.searchSection,
                children: [
                  h.jsx("input", {
                    type: "text",
                    placeholder: "🔍 Search by name...",
                    value: r,
                    onChange: (v) => i(v.target.value),
                    className: p.searchInput,
                  }),
                  h.jsxs("select", {
                    value: s || "",
                    onChange: (v) => c(v.target.value ? Number(v.target.value) : null),
                    className: p.orgSelect,
                    children: [
                      h.jsx("option", { value: "", children: "All Organizations" }),
                      o.map((v) =>
                        h.jsxs(
                          "option",
                          {
                            value: v.id,
                            children: [v.name, " (", l?.orgBreakdown[v.id] || 0, ")"],
                          },
                          v.id,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              h.jsx("button", {
                className: p.addButton,
                onClick: () => b(!y),
                children: y ? "Cancel" : "+ Add User",
              }),
            ],
          }),
          y &&
            h.jsxs("div", {
              className: p.addForm,
              children: [
                h.jsx("input", {
                  type: "text",
                  placeholder: "User Name",
                  value: u,
                  onChange: (v) => d(v.target.value),
                  className: p.input,
                  disabled: m,
                }),
                h.jsxs("select", {
                  value: _ || "",
                  onChange: (v) => f(Number(v.target.value)),
                  className: p.select,
                  disabled: m,
                  children: [
                    h.jsx("option", { value: "", children: "Select Organization" }),
                    o.map((v) => h.jsx("option", { value: v.id, children: v.name }, v.id)),
                  ],
                }),
                h.jsx("button", {
                  onClick: lr,
                  className: p.submitButton,
                  disabled: !u || !_ || m,
                  style: {
                    opacity: !u || !_ || m ? 0.5 : 1,
                    cursor: !u || !_ || m ? "not-allowed" : "pointer",
                  },
                  children: m
                    ? h.jsxs(h.Fragment, {
                        children: [
                          h.jsx(Ot, {}),
                          h.jsx("span", { style: { marginLeft: "8px" }, children: "Adding..." }),
                        ],
                      })
                    : "Add User",
                }),
              ],
            }),
          h.jsx("div", {
            className: p.tableContainer,
            children: h.jsxs("table", {
              className: p.table,
              children: [
                h.jsx("thead", {
                  children: h.jsxs("tr", {
                    children: [
                      h.jsx("th", { children: "👤 User Name" }),
                      h.jsx("th", { children: "🏢 Organization" }),
                    ],
                  }),
                }),
                h.jsx("tbody", {
                  children: e.map((v) =>
                    h.jsxs(
                      "tr",
                      {
                        children: [
                          h.jsx("td", { children: v.users.name }),
                          h.jsx("td", { children: v.organization.name }),
                        ],
                      },
                      v.users.id,
                    ),
                  ),
                }),
              ],
            }),
          }),
          h.jsx("div", {
            className: p.stats,
            children: h.jsxs("p", { children: ["Total Users: ", l?.totalUsers || 0] }),
          }),
        ],
      });
}
const pn = document.getElementById("root"),
  wn = dr.createRoot(pn),
  Et = () => {
    wn.render(h.jsx(gn, {}));
  };
ie.view.theme
  .enable()
  .then(() => {
    Et();
  })
  .catch((e) => {
    (console.error(e.message), Et());
  });
