import { r as Ot, c as ur } from "./react-dom-vendor-CewBCt5Y.js";
import { g as lr, r as dr } from "./lodash-vendor-SQX3M4kY.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const a of i.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
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
var ce = { exports: {} },
  M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Te;
function fr() {
  if (Te) return M;
  Te = 1;
  var e = Ot(),
    t = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, l, s) {
    var u,
      d = {},
      _ = null,
      f = null;
    (s !== void 0 && (_ = "" + s),
      l.key !== void 0 && (_ = "" + l.key),
      l.ref !== void 0 && (f = l.ref));
    for (u in l) n.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (c && c.defaultProps) for (u in ((l = c.defaultProps), l)) d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: c, key: _, ref: f, props: d, _owner: r.current };
  }
  return ((M.Fragment = o), (M.jsx = a), (M.jsxs = a), M);
}
var Se;
function _r() {
  return (Se || ((Se = 1), (ce.exports = fr())), ce.exports);
}
var h = _r(),
  E = Ot(),
  ue = {},
  Pe = function (e, t) {
    return (
      (Pe =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (o, n) {
            o.__proto__ = n;
          }) ||
        function (o, n) {
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (o[r] = n[r]);
        }),
      Pe(e, t)
    );
  };
function Et(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Pe(e, t);
  function o() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((o.prototype = t.prototype), new o());
}
var ie = function () {
  return (
    (ie =
      Object.assign ||
      function (t) {
        for (var o, n = 1, r = arguments.length; n < r; n++) {
          o = arguments[n];
          for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
        }
        return t;
      }),
    ie.apply(this, arguments)
  );
};
function Pt(e, t) {
  var o = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
      t.indexOf(n[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
        (o[n[r]] = e[n[r]]);
  return o;
}
function jt(e, t, o, n) {
  var r = arguments.length,
    i = r < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, o)) : n,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, t, o, n);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
  return (r > 3 && i && Object.defineProperty(t, o, i), i);
}
function Rt(e, t) {
  return function (o, n) {
    t(o, n, e);
  };
}
function It(e, t, o, n, r, i) {
  function a(m) {
    if (m !== void 0 && typeof m != "function") throw new TypeError("Function expected");
    return m;
  }
  for (
    var c = n.kind,
      l = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      s = !t && e ? (n.static ? e : e.prototype) : null,
      u = t || (s ? Object.getOwnPropertyDescriptor(s, n.name) : {}),
      d,
      _ = !1,
      f = o.length - 1;
    f >= 0;
    f--
  ) {
    var y = {};
    for (var b in n) y[b] = b === "access" ? {} : n[b];
    for (var b in n.access) y.access[b] = n.access[b];
    y.addInitializer = function (m) {
      if (_) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(a(m || null));
    };
    var g = (0, o[f])(c === "accessor" ? { get: u.get, set: u.set } : u[l], y);
    if (c === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = a(g.get)) && (u.get = d),
        (d = a(g.set)) && (u.set = d),
        (d = a(g.init)) && r.unshift(d));
    } else (d = a(g)) && (c === "field" ? r.unshift(d) : (u[l] = d));
  }
  (s && Object.defineProperty(s, n.name, u), (_ = !0));
}
function Tt(e, t, o) {
  for (var n = arguments.length > 2, r = 0; r < t.length; r++)
    o = n ? t[r].call(e, o) : t[r].call(e);
  return n ? o : void 0;
}
function St(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Bt(e, t, o) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: o ? "".concat(o, " ", t) : t })
  );
}
function Ct(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function qt(e, t, o, n) {
  function r(i) {
    return i instanceof o
      ? i
      : new o(function (a) {
          a(i);
        });
  }
  return new (o || (o = Promise))(function (i, a) {
    function c(u) {
      try {
        s(n.next(u));
      } catch (d) {
        a(d);
      }
    }
    function l(u) {
      try {
        s(n.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function s(u) {
      u.done ? i(u.value) : r(u.value).then(c, l);
    }
    s((n = n.apply(e, t || [])).next());
  });
}
function Mt(e, t) {
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
    a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (a.next = c(0)),
    (a.throw = c(1)),
    (a.return = c(2)),
    typeof Symbol == "function" &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function c(s) {
    return function (u) {
      return l([s, u]);
    };
  }
  function l(s) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; a && ((a = 0), s[0] && (o = 0)), o; )
      try {
        if (
          ((n = 1),
          r &&
            (i =
              s[0] & 2 ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) &&
            !(i = i.call(r, s[1])).done)
        )
          return i;
        switch (((r = 0), i && (s = [s[0] & 2, i.value]), s[0])) {
          case 0:
          case 1:
            i = s;
            break;
          case 4:
            return (o.label++, { value: s[1], done: !1 });
          case 5:
            (o.label++, (r = s[1]), (s = [0]));
            continue;
          case 7:
            ((s = o.ops.pop()), o.trys.pop());
            continue;
          default:
            if (
              ((i = o.trys), !(i = i.length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2))
            ) {
              o = 0;
              continue;
            }
            if (s[0] === 3 && (!i || (s[1] > i[0] && s[1] < i[3]))) {
              o.label = s[1];
              break;
            }
            if (s[0] === 6 && o.label < i[1]) {
              ((o.label = i[1]), (i = s));
              break;
            }
            if (i && o.label < i[2]) {
              ((o.label = i[2]), o.ops.push(s));
              break;
            }
            (i[2] && o.ops.pop(), o.trys.pop());
            continue;
        }
        s = t.call(e, o);
      } catch (u) {
        ((s = [6, u]), (r = 0));
      } finally {
        n = i = 0;
      }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
var se = Object.create
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
function Ft(e, t) {
  for (var o in e) o !== "default" && !Object.prototype.hasOwnProperty.call(t, o) && se(t, e, o);
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
function Re(e, t) {
  var o = typeof Symbol == "function" && e[Symbol.iterator];
  if (!o) return e;
  var n = o.call(e),
    r,
    i = [],
    a;
  try {
    for (; (t === void 0 || t-- > 0) && !(r = n.next()).done; ) i.push(r.value);
  } catch (c) {
    a = { error: c };
  } finally {
    try {
      r && !r.done && (o = n.return) && o.call(n);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}
function At() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Re(arguments[t]));
  return e;
}
function kt() {
  for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
  for (var n = Array(e), r = 0, t = 0; t < o; t++)
    for (var i = arguments[t], a = 0, c = i.length; a < c; a++, r++) n[r] = i[a];
  return n;
}
function Nt(e, t, o) {
  if (o || arguments.length === 2)
    for (var n = 0, r = t.length, i; n < r; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function q(e) {
  return this instanceof q ? ((this.v = e), this) : new q(e);
}
function Lt(e, t, o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = o.apply(e, t || []),
    r,
    i = [];
  return (
    (r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    c("next"),
    c("throw"),
    c("return", a),
    (r[Symbol.asyncIterator] = function () {
      return this;
    }),
    r
  );
  function a(f) {
    return function (y) {
      return Promise.resolve(y).then(f, d);
    };
  }
  function c(f, y) {
    n[f] &&
      ((r[f] = function (b) {
        return new Promise(function (g, m) {
          i.push([f, b, g, m]) > 1 || l(f, b);
        });
      }),
      y && (r[f] = y(r[f])));
  }
  function l(f, y) {
    try {
      s(n[f](y));
    } catch (b) {
      _(i[0][3], b);
    }
  }
  function s(f) {
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
function xt(e) {
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
      ? function (a) {
          return (o = !o) ? { value: q(e[r](a)), done: !1 } : i ? i(a) : a;
        }
      : i;
  }
}
function $t(e) {
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
      function (a) {
        return new Promise(function (c, l) {
          ((a = e[i](a)), r(c, l, a.done, a.value));
        });
      };
  }
  function r(i, a, c, l) {
    Promise.resolve(l).then(function (s) {
      i({ value: s, done: c });
    }, a);
  }
}
function Dt(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var hr = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  je = function (e) {
    return (
      (je =
        Object.getOwnPropertyNames ||
        function (t) {
          var o = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (o[o.length] = n);
          return o;
        }),
      je(e)
    );
  };
function Ut(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var o = je(e), n = 0; n < o.length; n++) o[n] !== "default" && se(t, e, o[n]);
  return (hr(t, e), t);
}
function Gt(e) {
  return e && e.__esModule ? e : { default: e };
}
function Vt(e, t, o, n) {
  if (o === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? n : o === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function zt(e, t, o, n, r) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !r) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? r.call(e, o) : r ? (r.value = o) : t.set(e, o), o);
}
function Ht(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Wt(e, t, o) {
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
var vr =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, o) {
        var n = new Error(o);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Kt(e) {
  function t(i) {
    ((e.error = e.hasError ? new vr(i, e.error, "An error was suppressed during disposal.") : i),
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
              Promise.resolve(i).then(r, function (a) {
                return (t(a), r());
              })
            );
        } else n |= 1;
      } catch (a) {
        t(a);
      }
    if (n === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return r();
}
function Jt(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (o, n, r, i, a) {
        return n
          ? t
            ? ".jsx"
            : ".js"
          : r && (!i || !a)
            ? o
            : r + i + "." + a.toLowerCase() + "js";
      })
    : e;
}
const yr = {
    __extends: Et,
    __assign: ie,
    __rest: Pt,
    __decorate: jt,
    __param: Rt,
    __esDecorate: It,
    __runInitializers: Tt,
    __propKey: St,
    __setFunctionName: Bt,
    __metadata: Ct,
    __awaiter: qt,
    __generator: Mt,
    __createBinding: se,
    __exportStar: Ft,
    __values: ae,
    __read: Re,
    __spread: At,
    __spreadArrays: kt,
    __spreadArray: Nt,
    __await: q,
    __asyncGenerator: Lt,
    __asyncDelegator: xt,
    __asyncValues: $t,
    __makeTemplateObject: Dt,
    __importStar: Ut,
    __importDefault: Gt,
    __classPrivateFieldGet: Vt,
    __classPrivateFieldSet: zt,
    __classPrivateFieldIn: Ht,
    __addDisposableResource: Wt,
    __disposeResources: Kt,
    __rewriteRelativeImportExtension: Jt,
  },
  br = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Wt,
        get __assign() {
          return ie;
        },
        __asyncDelegator: xt,
        __asyncGenerator: Lt,
        __asyncValues: $t,
        __await: q,
        __awaiter: qt,
        __classPrivateFieldGet: Vt,
        __classPrivateFieldIn: Ht,
        __classPrivateFieldSet: zt,
        __createBinding: se,
        __decorate: jt,
        __disposeResources: Kt,
        __esDecorate: It,
        __exportStar: Ft,
        __extends: Et,
        __generator: Mt,
        __importDefault: Gt,
        __importStar: Ut,
        __makeTemplateObject: Dt,
        __metadata: Ct,
        __param: Rt,
        __propKey: St,
        __read: Re,
        __rest: Pt,
        __rewriteRelativeImportExtension: Jt,
        __runInitializers: Tt,
        __setFunctionName: Bt,
        __spread: At,
        __spreadArray: Nt,
        __spreadArrays: kt,
        __values: ae,
        default: yr,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  P = lr(br);
var F = {},
  Be;
function gr() {
  return (
    Be ||
      ((Be = 1),
      Object.defineProperty(F, "__esModule", { value: !0 }),
      (F.NavigationTarget = void 0),
      (F.NavigationTarget = {
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
    F
  );
}
var le = {},
  A = {},
  k = {},
  N = {},
  Ce;
function j() {
  if (Ce) return N;
  ((Ce = 1), Object.defineProperty(N, "__esModule", { value: !0 }), (N.BridgeAPIError = void 0));
  class e extends Error {}
  return ((N.BridgeAPIError = e), N);
}
var qe;
function O() {
  if (qe) return k;
  ((qe = 1), Object.defineProperty(k, "__esModule", { value: !0 }), (k.getCallBridge = void 0));
  const e = j();
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
  Me;
function Xt() {
  if (Me) return L;
  ((Me = 1), Object.defineProperty(L, "__esModule", { value: !0 }), (L.withRateLimiter = void 0));
  const e = j(),
    t = (o, n, r, i) => {
      let a = Date.now(),
        c = 0;
      return async (...l) => {
        const s = Date.now();
        if ((s - a > r && ((a = s), (c = 0)), c >= n))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((c = c + 1), o(...l));
      };
    };
  return ((L.withRateLimiter = t), L);
}
var Fe;
function pr() {
  if (Fe) return A;
  ((Fe = 1), Object.defineProperty(A, "__esModule", { value: !0 }), (A.invoke = void 0));
  const e = O(),
    t = j(),
    o = Xt(),
    n = (0, e.getCallBridge)(),
    r = (a) => {
      if (a && Object.values(a).some((c) => typeof c == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    i = (a, c) => {
      if (typeof a != "string") throw new t.BridgeAPIError("functionKey must be a string!");
      return (r(c), n("invoke", { functionKey: a, payload: c }));
    };
  return (
    (A.invoke = (0, o.withRateLimiter)(
      i,
      500,
      1e3 * 25,
      "Resolver calls are rate limited at 500req/25s",
    )),
    A
  );
}
var Ae;
function mr() {
  return (
    Ae ||
      ((Ae = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(pr(), e));
      })(le)),
    le
  );
}
var de = {},
  x = {},
  fe = {},
  ke;
function Yt() {
  return (
    ke ||
      ((ke = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = O(),
          o = j(),
          n = Xt(),
          r = 500,
          i = 25,
          a = 1e3 * i;
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
          s = (d) => async (_) => {
            l(_);
            const f = { ..._, invokeType: `ui-${d.toLowerCase()}-fetch` },
              y = await c("invoke", f),
              { success: b, payload: g, error: m } = y ?? {},
              w = { ...(b ? g : m) };
            if (w && w.headers)
              for (const C in w.headers)
                Array.isArray(w.headers[C]) && (w.headers[C] = w.headers[C].join(","));
            return w;
          },
          u = (d) => {
            const _ = s(d);
            return (0, n.withRateLimiter)(
              _,
              r,
              a,
              `${d} invocation calls are rate limited at ${r}/${i}s`,
            );
          };
        e._invokeEndpointFn = u;
      })(fe)),
    fe
  );
}
var Ne;
function wr() {
  if (Ne) return x;
  ((Ne = 1), Object.defineProperty(x, "__esModule", { value: !0 }), (x.invokeRemote = void 0));
  const e = Yt(),
    t = (o) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(o);
  return ((x.invokeRemote = t), x);
}
var $ = {},
  Le;
function Or() {
  if (Le) return $;
  ((Le = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.invokeService = void 0));
  const e = Yt(),
    t = (o) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(o);
  return (($.invokeService = t), $);
}
var xe;
function Er() {
  return (
    xe ||
      ((xe = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = P;
        (t.__exportStar(wr(), e), t.__exportStar(Or(), e));
      })(de)),
    de
  );
}
var _e = {},
  D = {},
  U = {},
  $e;
function Pr() {
  if ($e) return U;
  (($e = 1), Object.defineProperty(U, "__esModule", { value: !0 }), (U.submit = void 0));
  const e = O(),
    t = j(),
    o = (0, e.getCallBridge)(),
    n = async (r) => {
      if ((await o("submit", r)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((U.submit = n), U);
}
var G = {},
  De;
function jr() {
  if (De) return G;
  ((De = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.close = void 0));
  const e = O(),
    t = j(),
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
  Ue;
function Rr() {
  if (Ue) return V;
  ((Ue = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.refresh = void 0));
  const e = O(),
    t = j(),
    o = (0, e.getCallBridge)(),
    n = async (r) => {
      if ((await o("refresh", r)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((V.refresh = n), V);
}
var z = {},
  Ge;
function Ir() {
  if (Ge) return z;
  ((Ge = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.createHistory = void 0));
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
  return ((z.createHistory = o), z);
}
var H = {},
  he = {},
  R = {},
  Ve;
function Zt() {
  return (
    Ve ||
      ((Ve = 1),
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
  ze;
function Tr() {
  if (ze) return S;
  ((ze = 1),
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
      const a = await this.getI18nInfoConfig(),
        { fallback: c } = i;
      if (!c) {
        let l;
        return (
          a.locales.includes(r) && (l = await this.getTranslationResource(r)),
          { translations: l ?? null, locale: r }
        );
      }
      for (const l of this.getLocaleLookupOrder(r, a)) {
        const s = await this.getTranslationResource(l);
        if (s) return { translations: s, locale: l };
      }
      return { translations: null, locale: r };
    }
    async getTranslationsByLocaleLookupOrder(r) {
      const i = await this.getI18nInfoConfig(),
        a = this.getLocaleLookupOrder(r, i);
      return await Promise.all(
        a.map(async (c) => {
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
        } catch (a) {
          throw a instanceof t ? a : new t(`Failed to get translation resource for locale: ${r}`);
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
      const { locales: a, fallback: c } = i,
        l = [r],
        s = c[r];
      return (
        s && Array.isArray(s) && s.length > 0 && l.push(...s),
        e(l, i.fallback.default),
        l.filter((u) => a.includes(u))
      );
    }
  }
  return ((S.TranslationsGetter = o), S);
}
var W = {},
  ve = {},
  He;
function Qt() {
  return (
    He ||
      ((He = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const o = P.__importDefault(dr()),
          n = (i, a, c) => {
            const l = i[c];
            return l ? (0, e.getTranslationValueFromContent)(l, a) : null;
          };
        e.getTranslationValue = n;
        const r = (i, a) => {
          let c = i[a];
          if (!c) {
            const l = a.split(".");
            l.length > 1 && (c = (0, o.default)(i, l, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = r;
      })(ve)),
    ve
  );
}
var We;
function Sr() {
  if (We) return W;
  ((We = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.Translator = void 0));
  const e = Qt();
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
          const a = (0, e.getTranslationValueFromContent)(i, n);
          if (a !== null) {
            r = a;
            break;
          }
        }
        ((r = r ?? null), this.cache.set(n, r));
      }
      return r;
    }
  }
  return ((W.Translator = t), W);
}
var K = {},
  Ke;
function Br() {
  if (Ke) return K;
  ((Ke = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.ensureLocale = void 0));
  const e = Zt(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    o = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    n = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, a) => {
        const [c] = a.split("-");
        return (i[c] || (i[c] = a), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    r = (i) => {
      const a = i.replace("_", "-");
      return t.has(a) ? a : (n[a] ?? o[a] ?? null);
    };
  return ((K.ensureLocale = r), K);
}
var ye = {},
  Je;
function Cr() {
  return (
    Je ||
      ((Je = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (s) => typeof s == "object" && s !== null && !Array.isArray(s),
          o = (s) => typeof s?.i18n == "string",
          n = (s) => s.startsWith("connect-"),
          r = (s) => s.startsWith("core:"),
          i = (s) => {
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
                          ? b.flatMap((m) => d(m, g))
                          : d(b, g);
                    }));
            return d(s, []);
          },
          a = (s) =>
            Object.entries(s).flatMap(([u, d]) =>
              !n(u) && !r(u) && d && Array.isArray(d) && d.length > 0 ? d.map((_) => [_, u]) : [],
            );
        e.getI18nSupportedModuleEntries = a;
        const c = (s) => {
          const u = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(s)) {
            const _ = i(d[0]);
            for (const { key: f } of _) u.add(f);
          }
          return u.size > 0 ? Array.from(u) : [];
        };
        e.extractI18nKeysFromModules = c;
        const l = (s) => {
          const u = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(s)) {
            const _ = i(d[0]);
            for (const f of _) u.push({ moduleName: d[1], ...f });
          }
          return u;
        };
        e.extractI18nPropertiesFromModules = l;
      })(ye)),
    ye
  );
}
var be = {},
  Xe;
function qr() {
  return (Xe || ((Xe = 1), Object.defineProperty(be, "__esModule", { value: !0 })), be);
}
var Ye;
function er() {
  return (
    Ye ||
      ((Ye = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = P;
        (t.__exportStar(Zt(), e),
          t.__exportStar(Tr(), e),
          t.__exportStar(Sr(), e),
          t.__exportStar(Br(), e));
        var o = Qt();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return o.getTranslationValue;
          },
        });
        var n = Cr();
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
          t.__exportStar(qr(), e));
      })(he)),
    he
  );
}
var Ze;
function Mr() {
  if (Ze) return H;
  ((Ze = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.getContext = void 0));
  const e = O(),
    t = er(),
    o = (0, e.getCallBridge)(),
    n = async () => {
      var r;
      const i = await o("getContext"),
        a = i?.locale;
      return (a && (i.locale = (r = (0, t.ensureLocale)(a)) !== null && r !== void 0 ? r : a), i);
    };
  return ((H.getContext = n), H);
}
var J = {},
  Qe;
function Fr() {
  if (Qe) return J;
  ((Qe = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.changeWindowTitle = void 0));
  const e = O(),
    t = j(),
    o = (0, e.getCallBridge)(),
    n = async (r) => {
      try {
        await o("changeWindowTitle", r);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((J.changeWindowTitle = n), J);
}
var X = {},
  et;
function Ar() {
  if (et) return X;
  ((et = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.theme = void 0));
  const t = (0, O().getCallBridge)();
  return ((X.theme = { enable: () => t("enableTheming") }), X);
}
var Y = {},
  Z = {},
  ge = {},
  B = {},
  tt;
function tr() {
  if (tt) return B;
  ((tt = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.blobToBase64 = B.base64ToBlob = void 0));
  const e = (o, n) => {
    if (!o) return null;
    const r = o.includes(";base64") ? o.split(",")[1] : o,
      i = atob(r),
      a = new Array(i.length);
    for (let l = 0; l < i.length; l++) a[l] = i.charCodeAt(l);
    const c = new Uint8Array(a);
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
var rt;
function kr() {
  return (
    rt ||
      ((rt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = tr(),
          o = (s) => {
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
          n = async (s) => ({ data: await (0, t.blobToBase64)(s), type: s.type }),
          r = (s) => (0, t.base64ToBlob)(s.data, s.type),
          i = async (s) => {
            if (s instanceof Blob) return { ...(await n(s)), __isBlobData: !0 };
            if (Array.isArray(s))
              return Promise.all(s.map((u) => (0, e.serialiseBlobsInPayload)(u)));
            if (s && o(s)) {
              const u = await Promise.all(
                Object.entries(s).map(async ([d, _]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(_),
                ]),
              );
              return Object.fromEntries(u);
            }
            return s;
          };
        e.serialiseBlobsInPayload = i;
        const a = (s) => {
          if (s && o(s) && "__isBlobData" in s) {
            const u = s;
            return r({ data: u.data, type: u.type });
          }
          if (Array.isArray(s)) return s.map((u) => (0, e.deserialiseBlobsInPayload)(u));
          if (s && o(s)) {
            const u = {};
            for (const [d, _] of Object.entries(s)) u[d] = (0, e.deserialiseBlobsInPayload)(_);
            return u;
          }
          return s;
        };
        e.deserialiseBlobsInPayload = a;
        const c = (s) =>
          s instanceof Blob
            ? !0
            : Array.isArray(s)
              ? s.some((u) => (0, e.containsBlobs)(u))
              : s && o(s)
                ? Object.values(s).some((u) => (0, e.containsBlobs)(u))
                : !1;
        e.containsBlobs = c;
        const l = (s) =>
          s && o(s) && "__isBlobData" in s
            ? !0
            : Array.isArray(s)
              ? s.some((u) => (0, e.containsSerialisedBlobs)(u))
              : s && o(s)
                ? Object.values(s).some((u) => (0, e.containsSerialisedBlobs)(u))
                : !1;
        e.containsSerialisedBlobs = l;
      })(ge)),
    ge
  );
}
var nt;
function rr() {
  if (nt) return Z;
  ((nt = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.events = void 0));
  const e = O(),
    t = kr(),
    o = (0, e.getCallBridge)(),
    n = async (i, a) => {
      let c = a;
      return (
        (0, t.containsBlobs)(a) && (c = await (0, t.serialiseBlobsInPayload)(a)),
        o("emit", { event: i, payload: c })
      );
    },
    r = (i, a) =>
      o("on", {
        event: i,
        callback: (l) => {
          let s = l;
          return (
            (0, t.containsSerialisedBlobs)(l) && (s = (0, t.deserialiseBlobsInPayload)(l)),
            a(s)
          );
        },
      });
  return ((Z.events = { emit: n, on: r }), Z);
}
var ot;
function Nr() {
  if (ot) return Y;
  ((ot = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.emitReadyEvent = void 0));
  const e = rr(),
    t = nr(),
    o = "EXTENSION_READY",
    n = async () => {
      const r = await t.view.getContext();
      await e.events.emit(o, { localId: r.localId });
    };
  return ((Y.emitReadyEvent = n), Y);
}
var it;
function nr() {
  if (it) return D;
  ((it = 1), Object.defineProperty(D, "__esModule", { value: !0 }), (D.view = void 0));
  const e = Pr(),
    t = jr(),
    o = Rr(),
    n = Ir(),
    r = Mr(),
    i = Fr(),
    a = Ar(),
    c = Nr();
  return (
    (D.view = {
      submit: e.submit,
      close: t.close,
      refresh: o.refresh,
      createHistory: n.createHistory,
      getContext: r.getContext,
      theme: a.theme,
      changeWindowTitle: i.changeWindowTitle,
      emitReadyEvent: c.emitReadyEvent,
    }),
    D
  );
}
var at;
function or() {
  return (
    at ||
      ((at = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(nr(), e));
      })(_e)),
    _e
  );
}
var pe = {},
  Q = {},
  st;
function Lr() {
  if (st) return Q;
  ((st = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.router = void 0));
  const t = (0, O().getCallBridge)(),
    o = async (a) => {
      if (!a?.target) throw new Error("target is required for getUrl");
      const c = await t("getUrl", a);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (l) {
        throw new Error(`Failed to parse URL: ${c} (${l})`);
      }
    },
    n = (a) => {
      if (typeof a == "string") return t("navigate", { url: a, type: "same-tab" });
      if (!a?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...a, type: "same-tab" });
    },
    r = (a) => {
      if (typeof a == "string") return t("navigate", { url: a, type: "new-tab" });
      if (!a?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...a, type: "new-tab" });
    },
    i = async () => t("reload");
  return ((Q.router = { getUrl: o, navigate: n, open: r, reload: i }), Q);
}
var ct;
function xr() {
  return (
    ct ||
      ((ct = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Lr(), e));
      })(pe)),
    pe
  );
}
var me = {},
  ee = {},
  ut;
function $r() {
  if (ut) return ee;
  ((ut = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.Modal = void 0));
  const e = O(),
    t = j(),
    o = (0, e.getCallBridge)(),
    n = () => {};
  class r {
    constructor(a) {
      var c, l;
      ((this.resource = a?.resource || null),
        (this.onClose = a?.onClose || n),
        (this.size = a?.size || "medium"),
        (this.context = a?.context || {}),
        (this.closeOnEscape = (c = a?.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick =
          (l = a?.closeOnOverlayClick) !== null && l !== void 0 ? l : !0));
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
  return ((ee.Modal = r), ee);
}
var lt;
function Dr() {
  return (
    lt ||
      ((lt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar($r(), e));
      })(me)),
    me
  );
}
var I = {},
  te = {},
  dt;
function Ur() {
  if (dt) return te;
  ((dt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.productFetchApi = void 0));
  const e = tr(),
    t = async (r) => {
      const i = {};
      for (const [a, c] of r.entries())
        if (a === "file") {
          const l = c.name,
            s = c.type;
          ((i.file = await (0, e.blobToBase64)(c)), (i.__fileName = l), (i.__fileType = s));
        } else i[a] = c;
      return JSON.stringify(i);
    },
    o = async (r) => {
      const i = r?.body instanceof FormData,
        a = i ? await t(r?.body) : r?.body,
        c = new Request("", { body: a, method: r?.method, headers: r?.headers }),
        l = Object.fromEntries(c.headers.entries());
      return {
        body: c.method !== "GET" ? await c.text() : null,
        headers: new Headers(l),
        isMultipartFormData: i,
      };
    },
    n = (r) => {
      const i = async (a, c, l) => {
        const { body: s, headers: u, isMultipartFormData: d } = await o(l);
        u.has("X-Atlassian-Token") || u.set("X-Atlassian-Token", "no-check");
        const _ = {
            product: a,
            restPath: c,
            fetchRequestInit: { ...l, body: s, headers: [...u.entries()] },
            isMultipartFormData: d,
          },
          {
            body: f,
            headers: y,
            statusText: b,
            status: g,
            isAttachment: m,
          } = await r("fetchProduct", _),
          w = m ? (0, e.base64ToBlob)(f, y["content-type"]) : f;
        return new Response(w || null, { headers: y, status: g, statusText: b });
      };
      return {
        requestConfluence: (a, c) => i("confluence", a, c),
        requestJira: (a, c) => i("jira", a, c),
        requestBitbucket: (a, c) => i("bitbucket", a, c),
      };
    };
  return ((te.productFetchApi = n), te);
}
var ft;
function Gr() {
  if (ft) return I;
  ft = 1;
  var e;
  (Object.defineProperty(I, "__esModule", { value: !0 }),
    (I.requestBitbucket = I.requestJira = I.requestConfluence = void 0));
  const t = O();
  return (
    (e = (0, Ur().productFetchApi)((0, t.getCallBridge)())),
    (I.requestConfluence = e.requestConfluence),
    (I.requestJira = e.requestJira),
    (I.requestBitbucket = e.requestBitbucket),
    I
  );
}
var we = {},
  re = {},
  _t;
function Vr() {
  if (_t) return re;
  ((_t = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.showFlag = void 0));
  const e = O(),
    t = j(),
    o = (0, e.getCallBridge)(),
    n = (r) => {
      var i;
      if (!r.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const a = o("showFlag", { ...r, type: (i = r.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await a, o("closeFlag", { id: r.id })) };
    };
  return ((re.showFlag = n), re);
}
var ht;
function zr() {
  return (
    ht ||
      ((ht = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = Vr();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(we)),
    we
  );
}
var Oe = {},
  vt;
function Hr() {
  return (
    vt ||
      ((vt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(rr(), e));
      })(Oe)),
    Oe
  );
}
var Ee = {},
  ne = {},
  yt;
function Wr() {
  if (yt) return ne;
  ((yt = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.__realtime = void 0));
  const t = (0, O().getCallBridge)(),
    o = (r, i) => t("publishRealtimeChannel", { channelName: r, eventPayload: i }),
    n = (r, i) => t("subscribeRealtimeChannel", { channelName: r, onEvent: i });
  return ((ne.__realtime = { publish: o, subscribe: n }), ne);
}
var bt;
function Kr() {
  return (
    bt ||
      ((bt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Wr(), e));
      })(Ee)),
    Ee
  );
}
var T = {},
  gt;
function Jr() {
  if (gt) return T;
  ((gt = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.createTranslationFunction = T.getTranslations = T.resetTranslationsCache = void 0));
  const e = er(),
    t = or(),
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
    let s = c;
    return (s || (s = (await t.view.getContext()).locale), await n.getTranslations(s, l));
  };
  T.getTranslations = i;
  const a = async (c = null) => {
    let l = c;
    l || (l = (await t.view.getContext()).locale);
    const s = new e.Translator(l, n);
    return (
      await s.init(),
      (u, d) => {
        var _, f;
        return (f = (_ = s.translate(u)) !== null && _ !== void 0 ? _ : d) !== null && f !== void 0
          ? f
          : u;
      }
    );
  };
  return ((T.createTranslationFunction = a), T);
}
var pt;
function Xr() {
  return (
    pt ||
      ((pt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = P;
        var o = gr();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return o.NavigationTarget;
          },
        }),
          t.__exportStar(mr(), e),
          t.__exportStar(Er(), e),
          t.__exportStar(or(), e),
          t.__exportStar(xr(), e),
          t.__exportStar(Dr(), e),
          t.__exportStar(Gr(), e),
          t.__exportStar(zr(), e),
          t.__exportStar(Hr(), e),
          t.__exportStar(Kr(), e),
          (e.i18n = t.__importStar(Jr())));
      })(ue)),
    ue
  );
}
var oe = Xr();
const Yr = "_container_16ann_1",
  Zr = "_header_16ann_9",
  Qr = "_controls_16ann_20",
  en = "_searchSection_16ann_28",
  tn = "_searchInput_16ann_34",
  rn = "_orgSelect_16ann_35",
  nn = "_input_16ann_36",
  on = "_select_16ann_37",
  an = "_addButton_16ann_63",
  sn = "_addForm_16ann_79",
  cn = "_submitButton_16ann_88",
  un = "_spinner_16ann_108",
  ln = "_spinnerInner_16ann_113",
  dn = "_tableContainer_16ann_117",
  fn = "_table_16ann_117",
  _n = "_stats_16ann_146",
  hn = "_loadingContainer_16ann_155",
  p = {
    container: Yr,
    header: Zr,
    controls: Qr,
    searchSection: en,
    searchInput: tn,
    orgSelect: rn,
    input: nn,
    select: on,
    addButton: an,
    addForm: sn,
    submitButton: cn,
    spinner: un,
    spinnerInner: ln,
    tableContainer: dn,
    table: fn,
    stats: _n,
    loadingContainer: hn,
  },
  mt = () =>
    h.jsx("div", { className: p.spinner, children: h.jsx("div", { className: p.spinnerInner }) });
function vn() {
  const [e, t] = E.useState([]),
    [o, n] = E.useState([]),
    [r, i] = E.useState(""),
    [a, c] = E.useState(null),
    [l, s] = E.useState(null),
    [u, d] = E.useState(""),
    [_, f] = E.useState(null),
    [y, b] = E.useState(!1),
    [g, m] = E.useState(!0),
    [w, C] = E.useState(!1),
    ir = async () => {
      try {
        const v = await oe.invoke("getUsers", {
          searchTerm: r || void 0,
          organizationId: a || void 0,
        });
        t(v);
      } catch (v) {
        console.error("Error fetching users:", v);
      }
    },
    ar = async () => {
      try {
        const v = await oe.invoke("getOrganizations");
        n(v);
      } catch (v) {
        console.error("Error fetching organizations:", v);
      }
    },
    sr = async () => {
      try {
        const v = await oe.invoke("getUserStats");
        s(v);
      } catch (v) {
        console.error("Error fetching stats:", v);
      }
    },
    Ie = async () => {
      m(!0);
      try {
        await Promise.all([ir(), ar(), sr()]);
      } finally {
        m(!1);
      }
    };
  E.useEffect(() => {
    Ie();
  }, [r, a]);
  const cr = async () => {
    if (!(!u || !_)) {
      C(!0);
      try {
        (await oe.invoke("createUser", { name: u, organizationId: _ }),
          d(""),
          f(null),
          b(!1),
          await Ie());
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
        children: [h.jsx(mt, {}), h.jsx("p", { children: "Loading data..." })],
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
                    value: a || "",
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
                  disabled: w,
                }),
                h.jsxs("select", {
                  value: _ || "",
                  onChange: (v) => f(Number(v.target.value)),
                  className: p.select,
                  disabled: w,
                  children: [
                    h.jsx("option", { value: "", children: "Select Organization" }),
                    o.map((v) => h.jsx("option", { value: v.id, children: v.name }, v.id)),
                  ],
                }),
                h.jsx("button", {
                  onClick: cr,
                  className: p.submitButton,
                  disabled: !u || !_ || w,
                  style: {
                    opacity: !u || !_ || w ? 0.5 : 1,
                    cursor: !u || !_ || w ? "not-allowed" : "pointer",
                  },
                  children: w
                    ? h.jsxs(h.Fragment, {
                        children: [
                          h.jsx(mt, {}),
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
const yn = document.getElementById("root"),
  bn = ur.createRoot(yn),
  wt = () => {
    bn.render(h.jsx(vn, {}));
  };
oe.view.theme
  .enable()
  .then(() => {
    wt();
  })
  .catch((e) => {
    (console.error(e.message), wt());
  });
