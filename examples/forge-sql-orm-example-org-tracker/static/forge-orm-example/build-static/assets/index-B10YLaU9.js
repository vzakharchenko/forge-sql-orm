import { r as Rt, c as _r } from "./react-dom-vendor-DUDfcWRj.js";
import { g as hr, r as vr } from "./lodash-vendor-CHXXAK2W.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const a of i.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && o(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
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
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = n(r);
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
 */ var Be;
function br() {
  if (Be) return M;
  Be = 1;
  var e = Rt(),
    t = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, u, s) {
    var l,
      d = {},
      _ = null,
      f = null;
    (s !== void 0 && (_ = "" + s),
      u.key !== void 0 && (_ = "" + u.key),
      u.ref !== void 0 && (f = u.ref));
    for (l in u) o.call(u, l) && !i.hasOwnProperty(l) && (d[l] = u[l]);
    if (c && c.defaultProps) for (l in ((u = c.defaultProps), u)) d[l] === void 0 && (d[l] = u[l]);
    return { $$typeof: t, type: c, key: _, ref: f, props: d, _owner: r.current };
  }
  return ((M.Fragment = n), (M.jsx = a), (M.jsxs = a), M);
}
var Ce;
function yr() {
  return (Ce || ((Ce = 1), (ce.exports = br())), ce.exports);
}
var h = yr(),
  E = Rt(),
  ue = {},
  Re = function (e, t) {
    return (
      (Re =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, o) {
            n.__proto__ = o;
          }) ||
        function (n, o) {
          for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r]);
        }),
      Re(e, t)
    );
  };
function It(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Re(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var ie = function () {
  return (
    (ie =
      Object.assign ||
      function (t) {
        for (var n, o = 1, r = arguments.length; o < r; o++) {
          n = arguments[o];
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    ie.apply(this, arguments)
  );
};
function Tt(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
        (n[o[r]] = e[o[r]]);
  return n;
}
function St(e, t, n, o) {
  var r = arguments.length,
    i = r < 3 ? t : o === null ? (o = Object.getOwnPropertyDescriptor(t, n)) : o,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, t, n, o);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
  return (r > 3 && i && Object.defineProperty(t, n, i), i);
}
function Bt(e, t) {
  return function (n, o) {
    t(n, o, e);
  };
}
function Ct(e, t, n, o, r, i) {
  function a(m) {
    if (m !== void 0 && typeof m != "function") throw new TypeError("Function expected");
    return m;
  }
  for (
    var c = o.kind,
      u = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      s = !t && e ? (o.static ? e : e.prototype) : null,
      l = t || (s ? Object.getOwnPropertyDescriptor(s, o.name) : {}),
      d,
      _ = !1,
      f = n.length - 1;
    f >= 0;
    f--
  ) {
    var b = {};
    for (var y in o) b[y] = y === "access" ? {} : o[y];
    for (var y in o.access) b.access[y] = o.access[y];
    b.addInitializer = function (m) {
      if (_) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(a(m || null));
    };
    var g = (0, n[f])(c === "accessor" ? { get: l.get, set: l.set } : l[u], b);
    if (c === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = a(g.get)) && (l.get = d),
        (d = a(g.set)) && (l.set = d),
        (d = a(g.init)) && r.unshift(d));
    } else (d = a(g)) && (c === "field" ? r.unshift(d) : (l[u] = d));
  }
  (s && Object.defineProperty(s, o.name, l), (_ = !0));
}
function qt(e, t, n) {
  for (var o = arguments.length > 2, r = 0; r < t.length; r++)
    n = o ? t[r].call(e, n) : t[r].call(e);
  return o ? n : void 0;
}
function Mt(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function kt(e, t, n) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: n ? "".concat(n, " ", t) : t })
  );
}
function At(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Ft(e, t, n, o) {
  function r(i) {
    return i instanceof n
      ? i
      : new n(function (a) {
          a(i);
        });
  }
  return new (n || (n = Promise))(function (i, a) {
    function c(l) {
      try {
        s(o.next(l));
      } catch (d) {
        a(d);
      }
    }
    function u(l) {
      try {
        s(o.throw(l));
      } catch (d) {
        a(d);
      }
    }
    function s(l) {
      l.done ? i(l.value) : r(l.value).then(c, u);
    }
    s((o = o.apply(e, t || [])).next());
  });
}
function Nt(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    o,
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
    return function (l) {
      return u([s, l]);
    };
  }
  function u(s) {
    if (o) throw new TypeError("Generator is already executing.");
    for (; a && ((a = 0), s[0] && (n = 0)), n; )
      try {
        if (
          ((o = 1),
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
            return (n.label++, { value: s[1], done: !1 });
          case 5:
            (n.label++, (r = s[1]), (s = [0]));
            continue;
          case 7:
            ((s = n.ops.pop()), n.trys.pop());
            continue;
          default:
            if (
              ((i = n.trys), !(i = i.length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (s[0] === 3 && (!i || (s[1] > i[0] && s[1] < i[3]))) {
              n.label = s[1];
              break;
            }
            if (s[0] === 6 && n.label < i[1]) {
              ((n.label = i[1]), (i = s));
              break;
            }
            if (i && n.label < i[2]) {
              ((n.label = i[2]), n.ops.push(s));
              break;
            }
            (i[2] && n.ops.pop(), n.trys.pop());
            continue;
        }
        s = t.call(e, n);
      } catch (l) {
        ((s = [6, l]), (r = 0));
      } finally {
        o = i = 0;
      }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
var se = Object.create
  ? function (e, t, n, o) {
      o === void 0 && (o = n);
      var r = Object.getOwnPropertyDescriptor(t, n);
      ((!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) &&
        (r = {
          enumerable: !0,
          get: function () {
            return t[n];
          },
        }),
        Object.defineProperty(e, o, r));
    }
  : function (e, t, n, o) {
      (o === void 0 && (o = n), (e[o] = t[n]));
    };
function Lt(e, t) {
  for (var n in e) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && se(t, e, n);
}
function ae(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    o = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e });
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Te(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var o = n.call(e),
    r,
    i = [],
    a;
  try {
    for (; (t === void 0 || t-- > 0) && !(r = o.next()).done; ) i.push(r.value);
  } catch (c) {
    a = { error: c };
  } finally {
    try {
      r && !r.done && (n = o.return) && n.call(o);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}
function $t() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Te(arguments[t]));
  return e;
}
function Dt() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var o = Array(e), r = 0, t = 0; t < n; t++)
    for (var i = arguments[t], a = 0, c = i.length; a < c; a++, r++) o[r] = i[a];
  return o;
}
function xt(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, r = t.length, i; o < r; o++)
      (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), (i[o] = t[o]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function q(e) {
  return this instanceof q ? ((this.v = e), this) : new q(e);
}
function Ut(e, t, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var o = n.apply(e, t || []),
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
    return function (b) {
      return Promise.resolve(b).then(f, d);
    };
  }
  function c(f, b) {
    o[f] &&
      ((r[f] = function (y) {
        return new Promise(function (g, m) {
          i.push([f, y, g, m]) > 1 || u(f, y);
        });
      }),
      b && (r[f] = b(r[f])));
  }
  function u(f, b) {
    try {
      s(o[f](b));
    } catch (y) {
      _(i[0][3], y);
    }
  }
  function s(f) {
    f.value instanceof q ? Promise.resolve(f.value.v).then(l, d) : _(i[0][2], f);
  }
  function l(f) {
    u("next", f);
  }
  function d(f) {
    u("throw", f);
  }
  function _(f, b) {
    (f(b), i.shift(), i.length && u(i[0][0], i[0][1]));
  }
}
function Gt(e) {
  var t, n;
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
  function o(r, i) {
    t[r] = e[r]
      ? function (a) {
          return (n = !n) ? { value: q(e[r](a)), done: !1 } : i ? i(a) : a;
        }
      : i;
  }
}
function Vt(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof ae == "function" ? ae(e) : e[Symbol.iterator]()),
      (n = {}),
      o("next"),
      o("throw"),
      o("return"),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function o(i) {
    n[i] =
      e[i] &&
      function (a) {
        return new Promise(function (c, u) {
          ((a = e[i](a)), r(c, u, a.done, a.value));
        });
      };
  }
  function r(i, a, c, u) {
    Promise.resolve(u).then(function (s) {
      i({ value: s, done: c });
    }, a);
  }
}
function zt(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var gr = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Ie = function (e) {
    return (
      (Ie =
        Object.getOwnPropertyNames ||
        function (t) {
          var n = [];
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[n.length] = o);
          return n;
        }),
      Ie(e)
    );
  };
function Ht(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n = Ie(e), o = 0; o < n.length; o++) n[o] !== "default" && se(t, e, n[o]);
  return (gr(t, e), t);
}
function Wt(e) {
  return e && e.__esModule ? e : { default: e };
}
function Jt(e, t, n, o) {
  if (n === "a" && !o) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Kt(e, t, n, o, r) {
  if (o === "m") throw new TypeError("Private method is not writable");
  if (o === "a" && !r) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (o === "a" ? r.call(e, n) : r ? (r.value = n) : t.set(e, n), n);
}
function Xt(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Yt(e, t, n) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var o, r;
    if (n) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      o = t[Symbol.asyncDispose];
    }
    if (o === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((o = t[Symbol.dispose]), n && (r = o));
    }
    if (typeof o != "function") throw new TypeError("Object not disposable.");
    (r &&
      (o = function () {
        try {
          r.call(this);
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      e.stack.push({ value: t, dispose: o, async: n }));
  } else n && e.stack.push({ async: !0 });
  return t;
}
var pr =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, n) {
        var o = new Error(n);
        return ((o.name = "SuppressedError"), (o.error = e), (o.suppressed = t), o);
      };
function Zt(e) {
  function t(i) {
    ((e.error = e.hasError ? new pr(i, e.error, "An error was suppressed during disposal.") : i),
      (e.hasError = !0));
  }
  var n,
    o = 0;
  function r() {
    for (; (n = e.stack.pop()); )
      try {
        if (!n.async && o === 1) return ((o = 0), e.stack.push(n), Promise.resolve().then(r));
        if (n.dispose) {
          var i = n.dispose.call(n.value);
          if (n.async)
            return (
              (o |= 2),
              Promise.resolve(i).then(r, function (a) {
                return (t(a), r());
              })
            );
        } else o |= 1;
      } catch (a) {
        t(a);
      }
    if (o === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return r();
}
function Qt(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (n, o, r, i, a) {
        return o
          ? t
            ? ".jsx"
            : ".js"
          : r && (!i || !a)
            ? n
            : r + i + "." + a.toLowerCase() + "js";
      })
    : e;
}
const mr = {
    __extends: It,
    __assign: ie,
    __rest: Tt,
    __decorate: St,
    __param: Bt,
    __esDecorate: Ct,
    __runInitializers: qt,
    __propKey: Mt,
    __setFunctionName: kt,
    __metadata: At,
    __awaiter: Ft,
    __generator: Nt,
    __createBinding: se,
    __exportStar: Lt,
    __values: ae,
    __read: Te,
    __spread: $t,
    __spreadArrays: Dt,
    __spreadArray: xt,
    __await: q,
    __asyncGenerator: Ut,
    __asyncDelegator: Gt,
    __asyncValues: Vt,
    __makeTemplateObject: zt,
    __importStar: Ht,
    __importDefault: Wt,
    __classPrivateFieldGet: Jt,
    __classPrivateFieldSet: Kt,
    __classPrivateFieldIn: Xt,
    __addDisposableResource: Yt,
    __disposeResources: Zt,
    __rewriteRelativeImportExtension: Qt,
  },
  wr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Yt,
        get __assign() {
          return ie;
        },
        __asyncDelegator: Gt,
        __asyncGenerator: Ut,
        __asyncValues: Vt,
        __await: q,
        __awaiter: Ft,
        __classPrivateFieldGet: Jt,
        __classPrivateFieldIn: Xt,
        __classPrivateFieldSet: Kt,
        __createBinding: se,
        __decorate: St,
        __disposeResources: Zt,
        __esDecorate: Ct,
        __exportStar: Lt,
        __extends: It,
        __generator: Nt,
        __importDefault: Wt,
        __importStar: Ht,
        __makeTemplateObject: zt,
        __metadata: At,
        __param: Bt,
        __propKey: Mt,
        __read: Te,
        __rest: Tt,
        __rewriteRelativeImportExtension: Qt,
        __runInitializers: qt,
        __setFunctionName: kt,
        __spread: $t,
        __spreadArray: xt,
        __spreadArrays: Dt,
        __values: ae,
        default: mr,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  T = hr(wr);
var k = {},
  qe;
function Or() {
  return (
    qe ||
      ((qe = 1),
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
var le = {},
  de = {},
  A = {},
  F = {},
  Me;
function P() {
  if (Me) return F;
  ((Me = 1), Object.defineProperty(F, "__esModule", { value: !0 }), (F.BridgeAPIError = void 0));
  class e extends Error {}
  return ((F.BridgeAPIError = e), F);
}
var ke;
function O() {
  if (ke) return A;
  ((ke = 1), Object.defineProperty(A, "__esModule", { value: !0 }), (A.getCallBridge = void 0));
  const e = P();
  function t(o) {
    return !!o?.callBridge;
  }
  const n = () => {
    if (!t(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((A.getCallBridge = n), A);
}
var N = {},
  Ae;
function er() {
  if (Ae) return N;
  ((Ae = 1), Object.defineProperty(N, "__esModule", { value: !0 }), (N.withRateLimiter = void 0));
  const e = P(),
    t = (n, o, r, i) => {
      let a = Date.now(),
        c = 0;
      return async (...u) => {
        const s = Date.now();
        if ((s - a > r && ((a = s), (c = 0)), c >= o))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((c = c + 1), n(...u));
      };
    };
  return ((N.withRateLimiter = t), N);
}
var Fe;
function Er() {
  return (
    Fe ||
      ((Fe = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = O(),
          n = P(),
          o = er(),
          r = (0, t.getCallBridge)(),
          i = (u) => {
            if (u && Object.values(u).some((s) => typeof s == "function"))
              throw new n.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          a = (u, s) => {
            if (typeof u != "string") throw new n.BridgeAPIError("functionKey must be a string!");
            return (i(s), r("invoke", { functionKey: u, payload: s }));
          };
        e.invoke = (0, o.withRateLimiter)(
          a,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function c() {
          return e.invoke;
        }
        e.makeInvoke = c;
      })(de)),
    de
  );
}
var Ne;
function Pr() {
  return (
    Ne ||
      ((Ne = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), T.__exportStar(Er(), e));
      })(le)),
    le
  );
}
var fe = {},
  L = {},
  _e = {},
  Le;
function tr() {
  return (
    Le ||
      ((Le = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = O(),
          n = P(),
          o = er(),
          r = 500,
          i = 25,
          a = 1e3 * i;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, t.getCallBridge)(),
          u = (d) => {
            if (d && Object.values(d).some((_) => typeof _ == "function"))
              throw new n.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          s = (d) => async (_) => {
            u(_);
            const f = { ..._, invokeType: `ui-${d.toLowerCase()}-fetch` },
              b = await c("invoke", f),
              { success: y, payload: g, error: m } = b ?? {},
              w = { ...(y ? g : m) };
            if (w && w.headers)
              for (const C in w.headers)
                Array.isArray(w.headers[C]) && (w.headers[C] = w.headers[C].join(","));
            return w;
          },
          l = (d) => {
            const _ = s(d);
            return (0, o.withRateLimiter)(
              _,
              r,
              a,
              `${d} invocation calls are rate limited at ${r}/${i}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(_e)),
    _e
  );
}
var $e;
function jr() {
  if ($e) return L;
  (($e = 1), Object.defineProperty(L, "__esModule", { value: !0 }), (L.invokeRemote = void 0));
  const e = tr(),
    t = (n) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(n);
  return ((L.invokeRemote = t), L);
}
var $ = {},
  De;
function Rr() {
  if (De) return $;
  ((De = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.invokeService = void 0));
  const e = tr(),
    t = (n) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(n);
  return (($.invokeService = t), $);
}
var xe;
function Ir() {
  return (
    xe ||
      ((xe = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = T;
        (t.__exportStar(jr(), e), t.__exportStar(Rr(), e));
      })(fe)),
    fe
  );
}
var he = {},
  D = {},
  x = {},
  Ue;
function Tr() {
  if (Ue) return x;
  ((Ue = 1), Object.defineProperty(x, "__esModule", { value: !0 }), (x.submit = void 0));
  const e = O(),
    t = P(),
    n = (0, e.getCallBridge)(),
    o = async (r) => {
      if ((await n("submit", r)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((x.submit = o), x);
}
var U = {},
  Ge;
function Sr() {
  if (Ge) return U;
  ((Ge = 1), Object.defineProperty(U, "__esModule", { value: !0 }), (U.close = void 0));
  const e = O(),
    t = P(),
    n = (0, e.getCallBridge)(),
    o = async (r) => {
      try {
        if ((await n("close", r)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((U.close = o), U);
}
var G = {},
  Ve;
function Br() {
  if (Ve) return G;
  ((Ve = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.open = void 0));
  const e = O(),
    t = P(),
    n = (0, e.getCallBridge)(),
    o = async () => {
      try {
        if ((await n("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((G.open = o), G);
}
var V = {},
  ze;
function Cr() {
  if (ze) return V;
  ((ze = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.refresh = void 0));
  const e = O(),
    t = P(),
    n = (0, e.getCallBridge)(),
    o = async (r) => {
      if ((await n("refresh", r)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((V.refresh = o), V);
}
var z = {},
  He;
function qr() {
  if (He) return z;
  ((He = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.createHistory = void 0));
  const t = (0, O().getCallBridge)(),
    n = async () => {
      const o = await t("createHistory");
      return (
        o.listen((r) => {
          o.location = r;
        }),
        o
      );
    };
  return ((z.createHistory = n), z);
}
var H = {},
  ve = {},
  j = {},
  We;
function rr() {
  return (
    We ||
      ((We = 1),
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
var S = {},
  Je;
function Mr() {
  if (Je) return S;
  ((Je = 1),
    Object.defineProperty(S, "__esModule", { value: !0 }),
    (S.TranslationsGetter = S.TranslationGetterError = void 0));
  const e = (o, r) => {
    o.includes(r) || o.push(r);
  };
  class t extends Error {
    constructor(r) {
      (super(r), (this.name = "TranslationGetterError"));
    }
  }
  S.TranslationGetterError = t;
  class n {
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
        let u;
        return (
          a.locales.includes(r) && (u = await this.getTranslationResource(r)),
          { translations: u ?? null, locale: r }
        );
      }
      for (const u of this.getLocaleLookupOrder(r, a)) {
        const s = await this.getTranslationResource(u);
        if (s) return { translations: s, locale: u };
      }
      return { translations: null, locale: r };
    }
    async getTranslationsByLocaleLookupOrder(r) {
      const i = await this.getI18nInfoConfig(),
        a = this.getLocaleLookupOrder(r, i);
      return await Promise.all(
        a.map(async (c) => {
          const u = await this.getTranslationResource(c);
          return { locale: c, translations: u };
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
        u = [r],
        s = c[r];
      return (
        s && Array.isArray(s) && s.length > 0 && u.push(...s),
        e(u, i.fallback.default),
        u.filter((l) => a.includes(l))
      );
    }
  }
  return ((S.TranslationsGetter = n), S);
}
var W = {},
  be = {},
  Ke;
function nr() {
  return (
    Ke ||
      ((Ke = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const n = T.__importDefault(vr()),
          o = (i, a, c) => {
            const u = i[c];
            return u ? (0, e.getTranslationValueFromContent)(u, a) : null;
          };
        e.getTranslationValue = o;
        const r = (i, a) => {
          let c = i[a];
          if (!c) {
            const u = a.split(".");
            u.length > 1 && (c = (0, n.default)(i, u, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = r;
      })(be)),
    be
  );
}
var Xe;
function kr() {
  if (Xe) return W;
  ((Xe = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.Translator = void 0));
  const e = nr();
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
        for (const { translations: i } of this.localeLookupOrderedTranslations) {
          const a = (0, e.getTranslationValueFromContent)(i, o);
          if (a !== null) {
            r = a;
            break;
          }
        }
        ((r = r ?? null), this.cache.set(o, r));
      }
      return r;
    }
  }
  return ((W.Translator = t), W);
}
var J = {},
  Ye;
function Ar() {
  if (Ye) return J;
  ((Ye = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.ensureLocale = void 0));
  const e = rr(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    n = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    o = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, a) => {
        const [c] = a.split("-");
        return (i[c] || (i[c] = a), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    r = (i) => {
      const a = i.replace("_", "-");
      return t.has(a) ? a : (o[a] ?? n[a] ?? null);
    };
  return ((J.ensureLocale = r), J);
}
var ye = {},
  Ze;
function Fr() {
  return (
    Ze ||
      ((Ze = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (s) => typeof s == "object" && s !== null && !Array.isArray(s),
          n = (s) => typeof s?.i18n == "string",
          o = (s) => s.startsWith("connect-"),
          r = (s) => s.startsWith("core:"),
          i = (s) => {
            const l = new Set(),
              d = (_, f) =>
                !t(_) || l.has(_)
                  ? []
                  : (l.add(_),
                    Object.entries(_).flatMap(([b, y]) => {
                      const g = [...f, b];
                      return n(y)
                        ? [{ propertyPath: g, key: y.i18n }]
                        : Array.isArray(y)
                          ? y.flatMap((m) => d(m, g))
                          : d(y, g);
                    }));
            return d(s, []);
          },
          a = (s) =>
            Object.entries(s).flatMap(([l, d]) =>
              !o(l) && !r(l) && d && Array.isArray(d) && d.length > 0 ? d.map((_) => [_, l]) : [],
            );
        e.getI18nSupportedModuleEntries = a;
        const c = (s) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(s)) {
            const _ = i(d[0]);
            for (const { key: f } of _) l.add(f);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = c;
        const u = (s) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(s)) {
            const _ = i(d[0]);
            for (const f of _) l.push({ moduleName: d[1], ...f });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = u;
      })(ye)),
    ye
  );
}
var ge = {},
  Qe;
function Nr() {
  return (Qe || ((Qe = 1), Object.defineProperty(ge, "__esModule", { value: !0 })), ge);
}
var et;
function or() {
  return (
    et ||
      ((et = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = T;
        (t.__exportStar(rr(), e),
          t.__exportStar(Mr(), e),
          t.__exportStar(kr(), e),
          t.__exportStar(Ar(), e));
        var n = nr();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return n.getTranslationValue;
          },
        });
        var o = Fr();
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
          t.__exportStar(Nr(), e));
      })(ve)),
    ve
  );
}
var tt;
function Lr() {
  if (tt) return H;
  ((tt = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.getContext = void 0));
  const e = O(),
    t = or(),
    n = (0, e.getCallBridge)(),
    o = async () => {
      var r;
      const i = await n("getContext"),
        a = i?.locale;
      return (a && (i.locale = (r = (0, t.ensureLocale)(a)) !== null && r !== void 0 ? r : a), i);
    };
  return ((H.getContext = o), H);
}
var K = {},
  rt;
function $r() {
  if (rt) return K;
  ((rt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.changeWindowTitle = void 0));
  const e = O(),
    t = P(),
    n = (0, e.getCallBridge)(),
    o = async (r) => {
      try {
        await n("changeWindowTitle", r);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((K.changeWindowTitle = o), K);
}
var X = {},
  nt;
function Dr() {
  if (nt) return X;
  ((nt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.theme = void 0));
  const t = (0, O().getCallBridge)();
  return ((X.theme = { enable: () => t("enableTheming") }), X);
}
var Y = {},
  Z = {},
  pe = {},
  B = {},
  ot;
function ir() {
  if (ot) return B;
  ((ot = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.blobToBase64 = B.base64ToBlob = void 0));
  const e = (n, o) => {
    if (!n) return null;
    const r = n.includes(";base64") ? n.split(",")[1] : n,
      i = atob(r),
      a = new Array(i.length);
    for (let u = 0; u < i.length; u++) a[u] = i.charCodeAt(u);
    const c = new Uint8Array(a);
    return new Blob([c], { type: o });
  };
  B.base64ToBlob = e;
  const t = (n) =>
    new Promise((o, r) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        o(i.result);
      }),
        (i.onerror = r),
        i.readAsDataURL(n));
    });
  return ((B.blobToBase64 = t), B);
}
var it;
function xr() {
  return (
    it ||
      ((it = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = ir(),
          n = (s) => {
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
          o = async (s) => ({ data: await (0, t.blobToBase64)(s), type: s.type }),
          r = (s) => (0, t.base64ToBlob)(s.data, s.type),
          i = async (s) => {
            if (s instanceof Blob) return { ...(await o(s)), __isBlobData: !0 };
            if (Array.isArray(s))
              return Promise.all(s.map((l) => (0, e.serialiseBlobsInPayload)(l)));
            if (s && n(s)) {
              const l = await Promise.all(
                Object.entries(s).map(async ([d, _]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(_),
                ]),
              );
              return Object.fromEntries(l);
            }
            return s;
          };
        e.serialiseBlobsInPayload = i;
        const a = (s) => {
          if (s && n(s) && "__isBlobData" in s) {
            const l = s;
            return r({ data: l.data, type: l.type });
          }
          if (Array.isArray(s)) return s.map((l) => (0, e.deserialiseBlobsInPayload)(l));
          if (s && n(s)) {
            const l = {};
            for (const [d, _] of Object.entries(s)) l[d] = (0, e.deserialiseBlobsInPayload)(_);
            return l;
          }
          return s;
        };
        e.deserialiseBlobsInPayload = a;
        const c = (s) =>
          s instanceof Blob
            ? !0
            : Array.isArray(s)
              ? s.some((l) => (0, e.containsBlobs)(l))
              : s && n(s)
                ? Object.values(s).some((l) => (0, e.containsBlobs)(l))
                : !1;
        e.containsBlobs = c;
        const u = (s) =>
          s && n(s) && "__isBlobData" in s
            ? !0
            : Array.isArray(s)
              ? s.some((l) => (0, e.containsSerialisedBlobs)(l))
              : s && n(s)
                ? Object.values(s).some((l) => (0, e.containsSerialisedBlobs)(l))
                : !1;
        e.containsSerialisedBlobs = u;
      })(pe)),
    pe
  );
}
var at;
function ar() {
  if (at) return Z;
  ((at = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.events = void 0));
  const e = O(),
    t = xr(),
    n = (0, e.getCallBridge)(),
    o = async (i, a) => {
      let c = a;
      return (
        (0, t.containsBlobs)(a) && (c = await (0, t.serialiseBlobsInPayload)(a)),
        n("emit", { event: i, payload: c })
      );
    },
    r = (i, a) =>
      n("on", {
        event: i,
        callback: (u) => {
          let s = u;
          return (
            (0, t.containsSerialisedBlobs)(u) && (s = (0, t.deserialiseBlobsInPayload)(u)),
            a(s)
          );
        },
      });
  return ((Z.events = { emit: o, on: r }), Z);
}
var st;
function Ur() {
  if (st) return Y;
  ((st = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.emitReadyEvent = void 0));
  const e = ar(),
    t = sr(),
    n = "EXTENSION_READY",
    o = async () => {
      const r = await t.view.getContext();
      await e.events.emit(n, { localId: r.localId });
    };
  return ((Y.emitReadyEvent = o), Y);
}
var ct;
function sr() {
  if (ct) return D;
  ((ct = 1), Object.defineProperty(D, "__esModule", { value: !0 }), (D.view = void 0));
  const e = Tr(),
    t = Sr(),
    n = Br(),
    o = Cr(),
    r = qr(),
    i = Lr(),
    a = $r(),
    c = Dr(),
    u = Ur();
  return (
    (D.view = {
      submit: e.submit,
      close: t.close,
      open: n.open,
      refresh: o.refresh,
      createHistory: r.createHistory,
      getContext: i.getContext,
      theme: c.theme,
      changeWindowTitle: a.changeWindowTitle,
      emitReadyEvent: u.emitReadyEvent,
    }),
    D
  );
}
var ut;
function cr() {
  return (
    ut ||
      ((ut = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), T.__exportStar(sr(), e));
      })(he)),
    he
  );
}
var me = {},
  Q = {},
  lt;
function Gr() {
  if (lt) return Q;
  ((lt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.router = void 0));
  const t = (0, O().getCallBridge)(),
    n = async (a) => {
      if (!a?.target) throw new Error("target is required for getUrl");
      const c = await t("getUrl", a);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (u) {
        throw new Error(`Failed to parse URL: ${c} (${u})`);
      }
    },
    o = (a) => {
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
  return ((Q.router = { getUrl: n, navigate: o, open: r, reload: i }), Q);
}
var dt;
function Vr() {
  return (
    dt ||
      ((dt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), T.__exportStar(Gr(), e));
      })(me)),
    me
  );
}
var we = {},
  ee = {},
  ft;
function zr() {
  if (ft) return ee;
  ((ft = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.Modal = void 0));
  const e = O(),
    t = P(),
    n = (0, e.getCallBridge)(),
    o = () => {};
  class r {
    constructor(a) {
      var c, u;
      ((this.resource = a?.resource || null),
        (this.onClose = a?.onClose || o),
        (this.size = a?.size || "medium"),
        (this.context = a?.context || {}),
        (this.closeOnEscape = (c = a?.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick =
          (u = a?.closeOnOverlayClick) !== null && u !== void 0 ? u : !0));
    }
    async open() {
      try {
        if (
          (await n("openModal", {
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
var _t;
function Hr() {
  return (
    _t ||
      ((_t = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), T.__exportStar(zr(), e));
      })(we)),
    we
  );
}
var R = {},
  te = {},
  ht;
function Wr() {
  if (ht) return te;
  ((ht = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.productFetchApi = void 0));
  const e = ir(),
    t = async (r) => {
      const i = {};
      for (const [a, c] of r.entries())
        if (a === "file") {
          const u = c.name,
            s = c.type;
          ((i.file = await (0, e.blobToBase64)(c)), (i.__fileName = u), (i.__fileType = s));
        } else i[a] = c;
      return JSON.stringify(i);
    },
    n = async (r) => {
      const i = r?.body instanceof FormData,
        a = i ? await t(r?.body) : r?.body,
        c = new Request("", { body: a, method: r?.method, headers: r?.headers }),
        u = Object.fromEntries(c.headers.entries());
      return {
        body: c.method !== "GET" ? await c.text() : null,
        headers: new Headers(u),
        isMultipartFormData: i,
      };
    },
    o = (r) => {
      const i = async (a, c, u) => {
        const { body: s, headers: l, isMultipartFormData: d } = await n(u);
        l.has("X-Atlassian-Token") || l.set("X-Atlassian-Token", "no-check");
        const _ = {
            product: a,
            restPath: c,
            fetchRequestInit: { ...u, body: s, headers: [...l.entries()] },
            isMultipartFormData: d,
          },
          {
            body: f,
            headers: b,
            statusText: y,
            status: g,
            isAttachment: m,
          } = await r("fetchProduct", _),
          w = m ? (0, e.base64ToBlob)(f, b["content-type"]) : f;
        return new Response(w || null, { headers: b, status: g, statusText: y });
      };
      return {
        requestConfluence: (a, c) => i("confluence", a, c),
        requestJira: (a, c) => i("jira", a, c),
        requestBitbucket: (a, c) => i("bitbucket", a, c),
      };
    };
  return ((te.productFetchApi = o), te);
}
var vt;
function Jr() {
  if (vt) return R;
  vt = 1;
  var e;
  (Object.defineProperty(R, "__esModule", { value: !0 }),
    (R.requestBitbucket = R.requestJira = R.requestConfluence = void 0));
  const t = O();
  return (
    (e = (0, Wr().productFetchApi)((0, t.getCallBridge)())),
    (R.requestConfluence = e.requestConfluence),
    (R.requestJira = e.requestJira),
    (R.requestBitbucket = e.requestBitbucket),
    R
  );
}
var Oe = {},
  re = {},
  bt;
function Kr() {
  if (bt) return re;
  ((bt = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.showFlag = void 0));
  const e = O(),
    t = P(),
    n = (0, e.getCallBridge)(),
    o = (r) => {
      var i;
      if (!r.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const a = n("showFlag", { ...r, type: (i = r.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await a, n("closeFlag", { id: r.id })) };
    };
  return ((re.showFlag = o), re);
}
var yt;
function Xr() {
  return (
    yt ||
      ((yt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = Kr();
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
  gt;
function Yr() {
  return (
    gt ||
      ((gt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), T.__exportStar(ar(), e));
      })(Ee)),
    Ee
  );
}
var Pe = {},
  ne = {},
  pt;
function Zr() {
  if (pt) return ne;
  ((pt = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.realtime = void 0));
  const t = (0, O().getCallBridge)(),
    n = (a, c, u) => t("publishRealtimeChannel", { channelName: a, eventPayload: c, options: u }),
    o = (a, c, u) => t("subscribeRealtimeChannel", { channelName: a, onEvent: c, options: u }),
    r = (a, c, u) =>
      t("publishRealtimeChannel", { channelName: a, eventPayload: c, options: u, isGlobal: !0 }),
    i = (a, c, u) =>
      t("subscribeRealtimeChannel", { channelName: a, onEvent: c, options: u, isGlobal: !0 });
  return ((ne.realtime = { publish: n, subscribe: o, publishGlobal: r, subscribeGlobal: i }), ne);
}
var je = {},
  mt;
function Qr() {
  return (
    mt ||
      ((mt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Jira = void 0),
          (function (t) {
            ((t.Board = "board"), (t.Issue = "issue"), (t.Project = "project"));
          })(e.Jira || (e.Jira = {})));
      })(je)),
    je
  );
}
var wt;
function en() {
  return (
    wt ||
      ((wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Jira = e.realtime = void 0));
        var t = Zr();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var n = Qr();
        Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return n.Jira;
          },
        });
      })(Pe)),
    Pe
  );
}
var I = {},
  Ot;
function tn() {
  if (Ot) return I;
  ((Ot = 1),
    Object.defineProperty(I, "__esModule", { value: !0 }),
    (I.createTranslationFunction = I.getTranslations = I.resetTranslationsCache = void 0));
  const e = or(),
    t = cr(),
    n = {
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
    o = new e.TranslationsGetter(n),
    r = () => {
      o.reset();
    };
  I.resetTranslationsCache = r;
  const i = async (c = null, u = { fallback: !0 }) => {
    let s = c;
    return (s || (s = (await t.view.getContext()).locale), await o.getTranslations(s, u));
  };
  I.getTranslations = i;
  const a = async (c = null) => {
    let u = c;
    u || (u = (await t.view.getContext()).locale);
    const s = new e.Translator(u, o);
    return (
      await s.init(),
      (l, d) => {
        var _, f;
        return (f = (_ = s.translate(l)) !== null && _ !== void 0 ? _ : d) !== null && f !== void 0
          ? f
          : l;
      }
    );
  };
  return ((I.createTranslationFunction = a), I);
}
var Et;
function rn() {
  return (
    Et ||
      ((Et = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = T;
        var n = Or();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return n.NavigationTarget;
          },
        }),
          t.__exportStar(Pr(), e),
          t.__exportStar(Ir(), e),
          t.__exportStar(cr(), e),
          t.__exportStar(Vr(), e),
          t.__exportStar(Hr(), e),
          t.__exportStar(Jr(), e),
          t.__exportStar(Xr(), e),
          t.__exportStar(Yr(), e),
          t.__exportStar(en(), e),
          (e.i18n = t.__importStar(tn())));
      })(ue)),
    ue
  );
}
var oe = rn();
const nn = "_container_16ann_1",
  on = "_header_16ann_9",
  an = "_controls_16ann_20",
  sn = "_searchSection_16ann_28",
  cn = "_searchInput_16ann_34",
  un = "_orgSelect_16ann_35",
  ln = "_input_16ann_36",
  dn = "_select_16ann_37",
  fn = "_addButton_16ann_63",
  _n = "_addForm_16ann_79",
  hn = "_submitButton_16ann_88",
  vn = "_spinner_16ann_108",
  bn = "_spinnerInner_16ann_113",
  yn = "_tableContainer_16ann_117",
  gn = "_table_16ann_117",
  pn = "_stats_16ann_146",
  mn = "_loadingContainer_16ann_155",
  p = {
    container: nn,
    header: on,
    controls: an,
    searchSection: sn,
    searchInput: cn,
    orgSelect: un,
    input: ln,
    select: dn,
    addButton: fn,
    addForm: _n,
    submitButton: hn,
    spinner: vn,
    spinnerInner: bn,
    tableContainer: yn,
    table: gn,
    stats: pn,
    loadingContainer: mn,
  },
  Pt = () =>
    h.jsx("div", { className: p.spinner, children: h.jsx("div", { className: p.spinnerInner }) });
function wn() {
  const [e, t] = E.useState([]),
    [n, o] = E.useState([]),
    [r, i] = E.useState(""),
    [a, c] = E.useState(null),
    [u, s] = E.useState(null),
    [l, d] = E.useState(""),
    [_, f] = E.useState(null),
    [b, y] = E.useState(!1),
    [g, m] = E.useState(!0),
    [w, C] = E.useState(!1),
    ur = async () => {
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
    lr = async () => {
      try {
        const v = await oe.invoke("getOrganizations");
        o(v);
      } catch (v) {
        console.error("Error fetching organizations:", v);
      }
    },
    dr = async () => {
      try {
        const v = await oe.invoke("getUserStats");
        s(v);
      } catch (v) {
        console.error("Error fetching stats:", v);
      }
    },
    Se = async () => {
      m(!0);
      try {
        await Promise.all([ur(), lr(), dr()]);
      } finally {
        m(!1);
      }
    };
  E.useEffect(() => {
    Se();
  }, [r, a]);
  const fr = async () => {
    if (!(!l || !_)) {
      C(!0);
      try {
        (await oe.invoke("createUser", { name: l, organizationId: _ }),
          d(""),
          f(null),
          y(!1),
          await Se());
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
        children: [h.jsx(Pt, {}), h.jsx("p", { children: "Loading data..." })],
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
                      n.map((v) =>
                        h.jsxs(
                          "option",
                          {
                            value: v.id,
                            children: [v.name, " (", u?.orgBreakdown[v.id] || 0, ")"],
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
                onClick: () => y(!b),
                children: b ? "Cancel" : "+ Add User",
              }),
            ],
          }),
          b &&
            h.jsxs("div", {
              className: p.addForm,
              children: [
                h.jsx("input", {
                  type: "text",
                  placeholder: "User Name",
                  value: l,
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
                    n.map((v) => h.jsx("option", { value: v.id, children: v.name }, v.id)),
                  ],
                }),
                h.jsx("button", {
                  onClick: fr,
                  className: p.submitButton,
                  disabled: !l || !_ || w,
                  style: {
                    opacity: !l || !_ || w ? 0.5 : 1,
                    cursor: !l || !_ || w ? "not-allowed" : "pointer",
                  },
                  children: w
                    ? h.jsxs(h.Fragment, {
                        children: [
                          h.jsx(Pt, {}),
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
            children: h.jsxs("p", { children: ["Total Users: ", u?.totalUsers || 0] }),
          }),
        ],
      });
}
const On = document.getElementById("root"),
  En = _r.createRoot(On),
  jt = () => {
    En.render(h.jsx(wn, {}));
  };
oe.view.theme
  .enable()
  .then(() => {
    jt();
  })
  .catch((e) => {
    (console.error(e.message), jt());
  });
