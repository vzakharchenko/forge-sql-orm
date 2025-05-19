var yo = Object.defineProperty;
var mo = (e, t, n) =>
  t in e ? yo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var re = (e, t, n) => mo(e, typeof t != "symbol" ? t + "" : t, n);
import { r as Sr, a as Oo, c as wo } from "./react-dom-vendor-mZoKt2nW.js";
import { g as So, a as Ao, r as Eo } from "./lodash-vendor-CXyYhtB4.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var $t = { exports: {} },
  Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xr;
function Po() {
  if (xr) return Te;
  xr = 1;
  var e = Sr(),
    t = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    r = Object.prototype.hasOwnProperty,
    i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, u, c) {
    var l,
      f = {},
      v = null,
      h = null;
    c !== void 0 && (v = "" + c),
      u.key !== void 0 && (v = "" + u.key),
      u.ref !== void 0 && (h = u.ref);
    for (l in u) r.call(u, l) && !o.hasOwnProperty(l) && (f[l] = u[l]);
    if (s && s.defaultProps) for (l in ((u = s.defaultProps), u)) f[l] === void 0 && (f[l] = u[l]);
    return { $$typeof: t, type: s, key: v, ref: h, props: f, _owner: i.current };
  }
  return (Te.Fragment = n), (Te.jsx = a), (Te.jsxs = a), Te;
}
var Br;
function jo() {
  return Br || ((Br = 1), ($t.exports = Po())), $t.exports;
}
var S = jo(),
  E = Sr();
const sr = So(E);
var Vt = {},
  ur = function (e, t) {
    return (
      (ur =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, r) {
            n.__proto__ = r;
          }) ||
        function (n, r) {
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
        }),
      ur(e, t)
    );
  };
function Hn(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ur(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var _t = function () {
  return (
    (_t =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    _t.apply(this, arguments)
  );
};
function Jn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function Xn(e, t, n, r) {
  var i = arguments.length,
    o = i < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, n)) : r,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, n, r);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (a = e[s]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
  return i > 3 && o && Object.defineProperty(t, n, o), o;
}
function Yn(e, t) {
  return function (n, r) {
    t(n, r, e);
  };
}
function Zn(e, t, n, r, i, o) {
  function a(A) {
    if (A !== void 0 && typeof A != "function") throw new TypeError("Function expected");
    return A;
  }
  for (
    var s = r.kind,
      u = s === "getter" ? "get" : s === "setter" ? "set" : "value",
      c = !t && e ? (r.static ? e : e.prototype) : null,
      l = t || (c ? Object.getOwnPropertyDescriptor(c, r.name) : {}),
      f,
      v = !1,
      h = n.length - 1;
    h >= 0;
    h--
  ) {
    var b = {};
    for (var p in r) b[p] = p === "access" ? {} : r[p];
    for (var p in r.access) b.access[p] = r.access[p];
    b.addInitializer = function (A) {
      if (v) throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(a(A || null));
    };
    var m = (0, n[h])(s === "accessor" ? { get: l.get, set: l.set } : l[u], b);
    if (s === "accessor") {
      if (m === void 0) continue;
      if (m === null || typeof m != "object") throw new TypeError("Object expected");
      (f = a(m.get)) && (l.get = f), (f = a(m.set)) && (l.set = f), (f = a(m.init)) && i.unshift(f);
    } else (f = a(m)) && (s === "field" ? i.unshift(f) : (l[u] = f));
  }
  c && Object.defineProperty(c, r.name, l), (v = !0);
}
function Qn(e, t, n) {
  for (var r = arguments.length > 2, i = 0; i < t.length; i++)
    n = r ? t[i].call(e, n) : t[i].call(e);
  return r ? n : void 0;
}
function ei(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function ti(e, t, n) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: n ? "".concat(n, " ", t) : t })
  );
}
function ri(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function ni(e, t, n, r) {
  function i(o) {
    return o instanceof n
      ? o
      : new n(function (a) {
          a(o);
        });
  }
  return new (n || (n = Promise))(function (o, a) {
    function s(l) {
      try {
        c(r.next(l));
      } catch (f) {
        a(f);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      l.done ? o(l.value) : i(l.value).then(s, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function ii(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    r,
    i,
    o,
    a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (a.next = s(0)),
    (a.throw = s(1)),
    (a.return = s(2)),
    typeof Symbol == "function" &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function s(c) {
    return function (l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; a && ((a = 0), c[0] && (n = 0)), n; )
      try {
        if (
          ((r = 1),
          i &&
            (o =
              c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) &&
            !(o = o.call(i, c[1])).done)
        )
          return o;
        switch (((i = 0), o && (c = [c[0] & 2, o.value]), c[0])) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, (i = c[1]), (c = [0]);
            continue;
          case 7:
            (c = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (
              ((o = n.trys), !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!o || (c[1] > o[0] && c[1] < o[3]))) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < o[1]) {
              (n.label = o[1]), (o = c);
              break;
            }
            if (o && n.label < o[2]) {
              (n.label = o[2]), n.ops.push(c);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = t.call(e, n);
      } catch (l) {
        (c = [6, l]), (i = 0);
      } finally {
        r = o = 0;
      }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
var jt = Object.create
  ? function (e, t, n, r) {
      r === void 0 && (r = n);
      var i = Object.getOwnPropertyDescriptor(t, n);
      (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) &&
        (i = {
          enumerable: !0,
          get: function () {
            return t[n];
          },
        }),
        Object.defineProperty(e, r, i);
    }
  : function (e, t, n, r) {
      r === void 0 && (r = n), (e[r] = t[n]);
    };
function oi(e, t) {
  for (var n in e) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && jt(t, e, n);
}
function pt(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ar(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e),
    i,
    o = [],
    a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (a) throw a.error;
    }
  }
  return o;
}
function ai() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Ar(arguments[t]));
  return e;
}
function si() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
  return r;
}
function ui(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function we(e) {
  return this instanceof we ? ((this.v = e), this) : new we(e);
}
function ci(e, t, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []),
    i,
    o = [];
  return (
    (i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    s("next"),
    s("throw"),
    s("return", a),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function a(h) {
    return function (b) {
      return Promise.resolve(b).then(h, f);
    };
  }
  function s(h, b) {
    r[h] &&
      ((i[h] = function (p) {
        return new Promise(function (m, A) {
          o.push([h, p, m, A]) > 1 || u(h, p);
        });
      }),
      b && (i[h] = b(i[h])));
  }
  function u(h, b) {
    try {
      c(r[h](b));
    } catch (p) {
      v(o[0][3], p);
    }
  }
  function c(h) {
    h.value instanceof we ? Promise.resolve(h.value.v).then(l, f) : v(o[0][2], h);
  }
  function l(h) {
    u("next", h);
  }
  function f(h) {
    u("throw", h);
  }
  function v(h, b) {
    h(b), o.shift(), o.length && u(o[0][0], o[0][1]);
  }
}
function li(e) {
  var t, n;
  return (
    (t = {}),
    r("next"),
    r("throw", function (i) {
      throw i;
    }),
    r("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function r(i, o) {
    t[i] = e[i]
      ? function (a) {
          return (n = !n) ? { value: we(e[i](a)), done: !1 } : o ? o(a) : a;
        }
      : o;
  }
}
function fi(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof pt == "function" ? pt(e) : e[Symbol.iterator]()),
      (n = {}),
      r("next"),
      r("throw"),
      r("return"),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(o) {
    n[o] =
      e[o] &&
      function (a) {
        return new Promise(function (s, u) {
          (a = e[o](a)), i(s, u, a.done, a.value);
        });
      };
  }
  function i(o, a, s, u) {
    Promise.resolve(u).then(function (c) {
      o({ value: c, done: s });
    }, a);
  }
}
function di(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
}
var Ro = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  cr = function (e) {
    return (
      (cr =
        Object.getOwnPropertyNames ||
        function (t) {
          var n = [];
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[n.length] = r);
          return n;
        }),
      cr(e)
    );
  };
function hi(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n = cr(e), r = 0; r < n.length; r++) n[r] !== "default" && jt(t, e, n[r]);
  return Ro(t, e), t;
}
function vi(e) {
  return e && e.__esModule ? e : { default: e };
}
function _i(e, t, n, r) {
  if (n === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function pi(e, t, n, r, i) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
}
function bi(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function gi(e, t, n) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var r, i;
    if (n) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = t[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      (r = t[Symbol.dispose]), n && (i = r);
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    i &&
      (r = function () {
        try {
          i.call(this);
        } catch (o) {
          return Promise.reject(o);
        }
      }),
      e.stack.push({ value: t, dispose: r, async: n });
  } else n && e.stack.push({ async: !0 });
  return t;
}
var To =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, n) {
        var r = new Error(n);
        return (r.name = "SuppressedError"), (r.error = e), (r.suppressed = t), r;
      };
function yi(e) {
  function t(o) {
    (e.error = e.hasError ? new To(o, e.error, "An error was suppressed during disposal.") : o),
      (e.hasError = !0);
  }
  var n,
    r = 0;
  function i() {
    for (; (n = e.stack.pop()); )
      try {
        if (!n.async && r === 1) return (r = 0), e.stack.push(n), Promise.resolve().then(i);
        if (n.dispose) {
          var o = n.dispose.call(n.value);
          if (n.async)
            return (
              (r |= 2),
              Promise.resolve(o).then(i, function (a) {
                return t(a), i();
              })
            );
        } else r |= 1;
      } catch (a) {
        t(a);
      }
    if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return i();
}
function mi(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (n, r, i, o, a) {
        return r
          ? t
            ? ".jsx"
            : ".js"
          : i && (!o || !a)
            ? n
            : i + o + "." + a.toLowerCase() + "js";
      })
    : e;
}
const Mo = {
    __extends: Hn,
    __assign: _t,
    __rest: Jn,
    __decorate: Xn,
    __param: Yn,
    __esDecorate: Zn,
    __runInitializers: Qn,
    __propKey: ei,
    __setFunctionName: ti,
    __metadata: ri,
    __awaiter: ni,
    __generator: ii,
    __createBinding: jt,
    __exportStar: oi,
    __values: pt,
    __read: Ar,
    __spread: ai,
    __spreadArrays: si,
    __spreadArray: ui,
    __await: we,
    __asyncGenerator: ci,
    __asyncDelegator: li,
    __asyncValues: fi,
    __makeTemplateObject: di,
    __importStar: hi,
    __importDefault: vi,
    __classPrivateFieldGet: _i,
    __classPrivateFieldSet: pi,
    __classPrivateFieldIn: bi,
    __addDisposableResource: gi,
    __disposeResources: yi,
    __rewriteRelativeImportExtension: mi,
  },
  Co = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: gi,
        get __assign() {
          return _t;
        },
        __asyncDelegator: li,
        __asyncGenerator: ci,
        __asyncValues: fi,
        __await: we,
        __awaiter: ni,
        __classPrivateFieldGet: _i,
        __classPrivateFieldIn: bi,
        __classPrivateFieldSet: pi,
        __createBinding: jt,
        __decorate: Xn,
        __disposeResources: yi,
        __esDecorate: Zn,
        __exportStar: oi,
        __extends: Hn,
        __generator: ii,
        __importDefault: vi,
        __importStar: hi,
        __makeTemplateObject: di,
        __metadata: ri,
        __param: Yn,
        __propKey: ei,
        __read: Ar,
        __rest: Jn,
        __rewriteRelativeImportExtension: mi,
        __runInitializers: Qn,
        __setFunctionName: ti,
        __spread: ai,
        __spreadArray: ui,
        __spreadArrays: si,
        __values: pt,
        default: Mo,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ee = Ao(Co);
var Me = {},
  Ir;
function xo() {
  return (
    Ir ||
      ((Ir = 1),
      Object.defineProperty(Me, "__esModule", { value: !0 }),
      (Me.NavigationTarget = void 0),
      (Me.NavigationTarget = {
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
    Me
  );
}
var Ut = {},
  Ce = {},
  xe = {},
  Be = {},
  Dr;
function z() {
  if (Dr) return Be;
  (Dr = 1), Object.defineProperty(Be, "__esModule", { value: !0 }), (Be.BridgeAPIError = void 0);
  class e extends Error {}
  return (Be.BridgeAPIError = e), Be;
}
var Lr;
function P() {
  if (Lr) return xe;
  (Lr = 1), Object.defineProperty(xe, "__esModule", { value: !0 }), (xe.getCallBridge = void 0);
  const e = z();
  function t(r) {
    return !!(r != null && r.callBridge);
  }
  const n = () => {
    if (!t(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return (xe.getCallBridge = n), xe;
}
var Ie = {},
  Nr;
function Oi() {
  if (Nr) return Ie;
  (Nr = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.withRateLimiter = void 0);
  const e = z(),
    t = (n, r, i, o) => {
      let a = Date.now(),
        s = 0;
      return async (...u) => {
        const c = Date.now();
        if ((c - a > i && ((a = c), (s = 0)), s >= r))
          throw new e.BridgeAPIError(o || "Too many invocations.");
        return (s = s + 1), n(...u);
      };
    };
  return (Ie.withRateLimiter = t), Ie;
}
var kr;
function Bo() {
  if (kr) return Ce;
  (kr = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.invoke = void 0);
  const e = P(),
    t = z(),
    n = Oi(),
    r = (0, e.getCallBridge)(),
    i = (a) => {
      if (a && Object.values(a).some((s) => typeof s == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    o = (a, s) => {
      if (typeof a != "string") throw new t.BridgeAPIError("functionKey must be a string!");
      return i(s), r("invoke", { functionKey: a, payload: s });
    };
  return (
    (Ce.invoke = (0, n.withRateLimiter)(
      o,
      500,
      1e3 * 25,
      "Resolver calls are rate limited at 500req/25s",
    )),
    Ce
  );
}
var qr;
function Io() {
  return (
    qr ||
      ((qr = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), ee.__exportStar(Bo(), e);
      })(Ut)),
    Ut
  );
}
var Gt = {},
  De = {},
  Fr;
function Do() {
  if (Fr) return De;
  (Fr = 1), Object.defineProperty(De, "__esModule", { value: !0 }), (De.invokeRemote = void 0);
  const e = P(),
    t = z(),
    n = Oi(),
    r = 500,
    i = 1e3 * 25,
    o = (0, e.getCallBridge)(),
    a = (u) => {
      if (u && Object.values(u).some((c) => typeof c == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    s = async (u) => {
      var c;
      a(u);
      const {
          success: l,
          payload: f,
          error: v,
        } = (c = await o("invoke", u)) !== null && c !== void 0 ? c : {},
        h = { ...(l ? f : v) };
      if (h && h.headers)
        for (const b in h.headers)
          Array.isArray(h.headers[b]) && (h.headers[b] = h.headers[b].join(","));
      return h;
    };
  return (
    (De.invokeRemote = (0, n.withRateLimiter)(
      s,
      r,
      i,
      "Remote invocation calls are rate limited at 500req/25s",
    )),
    De
  );
}
var $r;
function Lo() {
  return (
    $r ||
      (($r = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), ee.__exportStar(Do(), e);
      })(Gt)),
    Gt
  );
}
var Kt = {},
  Le = {},
  Ne = {},
  Vr;
function No() {
  if (Vr) return Ne;
  (Vr = 1), Object.defineProperty(Ne, "__esModule", { value: !0 }), (Ne.submit = void 0);
  const e = P(),
    t = z(),
    n = (0, e.getCallBridge)(),
    r = async (i) => {
      if ((await n("submit", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return (Ne.submit = r), Ne;
}
var ke = {},
  Ur;
function ko() {
  if (Ur) return ke;
  (Ur = 1), Object.defineProperty(ke, "__esModule", { value: !0 }), (ke.close = void 0);
  const e = P(),
    t = z(),
    n = (0, e.getCallBridge)(),
    r = async (i) => {
      try {
        if ((await n("close", i)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return (ke.close = r), ke;
}
var qe = {},
  Gr;
function qo() {
  if (Gr) return qe;
  (Gr = 1), Object.defineProperty(qe, "__esModule", { value: !0 }), (qe.refresh = void 0);
  const e = P(),
    t = z(),
    n = (0, e.getCallBridge)(),
    r = async (i) => {
      if ((await n("refresh", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return (qe.refresh = r), qe;
}
var Fe = {},
  Kr;
function Fo() {
  if (Kr) return Fe;
  (Kr = 1), Object.defineProperty(Fe, "__esModule", { value: !0 }), (Fe.createHistory = void 0);
  const t = (0, P().getCallBridge)(),
    n = async () => {
      const r = await t("createHistory");
      return (
        r.listen((i) => {
          r.location = i;
        }),
        r
      );
    };
  return (Fe.createHistory = n), Fe;
}
var $e = {},
  zt = {},
  W = {},
  zr;
function wi() {
  return (
    zr ||
      ((zr = 1),
      Object.defineProperty(W, "__esModule", { value: !0 }),
      (W.FORGE_SUPPORTED_LOCALE_CODES = W.I18N_BUNDLE_FOLDER_NAME = W.I18N_INFO_FILE_NAME = void 0),
      (W.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (W.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (W.FORGE_SUPPORTED_LOCALE_CODES = [
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
    W
  );
}
var se = {},
  Wr;
function $o() {
  if (Wr) return se;
  (Wr = 1),
    Object.defineProperty(se, "__esModule", { value: !0 }),
    (se.TranslationsGetter = se.TranslationGetterError = void 0);
  const e = (r, i) => {
    r.includes(i) || r.push(i);
  };
  class t extends Error {
    constructor(i) {
      super(i), (this.name = "TranslationGetterError");
    }
  }
  se.TranslationGetterError = t;
  class n {
    constructor(i) {
      re(this, "resourcesAccessor");
      re(this, "i18nInfoConfig", null);
      re(this, "translationResources", new Map());
      this.resourcesAccessor = i;
    }
    async getTranslations(i, o = { fallback: !0 }) {
      const a = await this.getI18nInfoConfig(),
        { fallback: s } = o;
      if (!s) {
        let u;
        return (
          a.locales.includes(i) && (u = await this.getTranslationResource(i)),
          { translations: u ?? null, locale: i }
        );
      }
      for (const u of this.getLocaleLookupOrder(i, a)) {
        const c = await this.getTranslationResource(u);
        if (c) return { translations: c, locale: u };
      }
      return { translations: null, locale: i };
    }
    async getTranslationsByLocaleLookupOrder(i) {
      const o = await this.getI18nInfoConfig(),
        a = this.getLocaleLookupOrder(i, o);
      return await Promise.all(
        a.map(async (s) => {
          const u = await this.getTranslationResource(s);
          return { locale: s, translations: u };
        }),
      );
    }
    reset() {
      (this.i18nInfoConfig = null), this.translationResources.clear();
    }
    async getTranslationResource(i) {
      let o = this.translationResources.get(i);
      if (!o)
        try {
          (o = await this.resourcesAccessor.getTranslationResource(i)),
            this.translationResources.set(i, o);
        } catch (a) {
          throw a instanceof t ? a : new t(`Failed to get translation resource for locale: ${i}`);
        }
      return o;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (i) {
          throw i instanceof t ? i : new t("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(i, o) {
      const { locales: a, fallback: s } = o,
        u = [i],
        c = s[i];
      return (
        c && Array.isArray(c) && c.length > 0 && u.push(...c),
        e(u, o.fallback.default),
        u.filter((l) => a.includes(l))
      );
    }
  }
  return (se.TranslationsGetter = n), se;
}
var Ve = {},
  Wt = {},
  Hr;
function Si() {
  return (
    Hr ||
      ((Hr = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0);
        const n = ee.__importDefault(Eo()),
          r = (o, a, s) => {
            const u = o[s];
            return u ? (0, e.getTranslationValueFromContent)(u, a) : null;
          };
        e.getTranslationValue = r;
        const i = (o, a) => {
          let s = o[a];
          if (!s) {
            const u = a.split(".");
            u.length > 1 && (s = (0, n.default)(o, u, null));
          }
          return typeof s == "string" ? s : null;
        };
        e.getTranslationValueFromContent = i;
      })(Wt)),
    Wt
  );
}
var Jr;
function Vo() {
  if (Jr) return Ve;
  (Jr = 1), Object.defineProperty(Ve, "__esModule", { value: !0 }), (Ve.Translator = void 0);
  const e = Si();
  class t {
    constructor(r, i) {
      re(this, "locale");
      re(this, "translationsGetter");
      re(this, "localeLookupOrderedTranslations", null);
      re(this, "cache", new Map());
      (this.locale = r), (this.translationsGetter = i);
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(r) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let i = this.cache.get(r);
      if (i === void 0) {
        for (const { translations: o } of this.localeLookupOrderedTranslations) {
          const a = (0, e.getTranslationValueFromContent)(o, r);
          if (a !== null) {
            i = a;
            break;
          }
        }
        (i = i ?? null), this.cache.set(r, i);
      }
      return i;
    }
  }
  return (Ve.Translator = t), Ve;
}
var Ue = {},
  Xr;
function Uo() {
  if (Xr) return Ue;
  (Xr = 1), Object.defineProperty(Ue, "__esModule", { value: !0 }), (Ue.ensureLocale = void 0);
  const e = wi(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    n = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    r = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (o, a) => {
        const [s] = a.split("-");
        return o[s] || (o[s] = a), o;
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    i = (o) => {
      const a = o.replace("_", "-");
      return t.has(a) ? a : (r[a] ?? n[a] ?? null);
    };
  return (Ue.ensureLocale = i), Ue;
}
var Ht = {},
  Yr;
function Go() {
  return (
    Yr ||
      ((Yr = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0);
        const t = (c) => typeof c == "object" && c !== null && !Array.isArray(c),
          n = (c) => typeof (c == null ? void 0 : c.i18n) == "string",
          r = (c) => c.startsWith("connect-"),
          i = (c) => c.startsWith("core:"),
          o = (c) => {
            const l = new Set(),
              f = (v, h) =>
                !t(v) || l.has(v)
                  ? []
                  : (l.add(v),
                    Object.entries(v).flatMap(([b, p]) => {
                      const m = [...h, b];
                      return n(p)
                        ? [{ propertyPath: m, key: p.i18n }]
                        : Array.isArray(p)
                          ? p.flatMap((A) => f(A, m))
                          : f(p, m);
                    }));
            return f(c, []);
          },
          a = (c) =>
            Object.entries(c).flatMap(([l, f]) =>
              !r(l) && !i(l) && f && Array.isArray(f) && f.length > 0 ? f.map((v) => [v, l]) : [],
            );
        e.getI18nSupportedModuleEntries = a;
        const s = (c) => {
          const l = new Set();
          for (const f of (0, e.getI18nSupportedModuleEntries)(c)) {
            const v = o(f[0]);
            for (const { key: h } of v) l.add(h);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = s;
        const u = (c) => {
          const l = [];
          for (const f of (0, e.getI18nSupportedModuleEntries)(c)) {
            const v = o(f[0]);
            for (const h of v) l.push({ moduleName: f[1], ...h });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = u;
      })(Ht)),
    Ht
  );
}
var Jt = {},
  Zr;
function Ko() {
  return Zr || ((Zr = 1), Object.defineProperty(Jt, "__esModule", { value: !0 })), Jt;
}
var Qr;
function Ai() {
  return (
    Qr ||
      ((Qr = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0);
        const t = ee;
        t.__exportStar(wi(), e),
          t.__exportStar($o(), e),
          t.__exportStar(Vo(), e),
          t.__exportStar(Uo(), e);
        var n = Si();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return n.getTranslationValue;
          },
        });
        var r = Go();
        Object.defineProperty(e, "extractI18nKeysFromModules", {
          enumerable: !0,
          get: function () {
            return r.extractI18nKeysFromModules;
          },
        }),
          Object.defineProperty(e, "extractI18nPropertiesFromModules", {
            enumerable: !0,
            get: function () {
              return r.extractI18nPropertiesFromModules;
            },
          }),
          Object.defineProperty(e, "getI18nSupportedModuleEntries", {
            enumerable: !0,
            get: function () {
              return r.getI18nSupportedModuleEntries;
            },
          }),
          t.__exportStar(Ko(), e);
      })(zt)),
    zt
  );
}
var en;
function zo() {
  if (en) return $e;
  (en = 1), Object.defineProperty($e, "__esModule", { value: !0 }), ($e.getContext = void 0);
  const e = P(),
    t = Ai(),
    n = (0, e.getCallBridge)(),
    r = async () => {
      var i;
      const o = await n("getContext"),
        a = o == null ? void 0 : o.locale;
      return a && (o.locale = (i = (0, t.ensureLocale)(a)) !== null && i !== void 0 ? i : a), o;
    };
  return ($e.getContext = r), $e;
}
var Ge = {},
  tn;
function Wo() {
  if (tn) return Ge;
  (tn = 1), Object.defineProperty(Ge, "__esModule", { value: !0 }), (Ge.changeWindowTitle = void 0);
  const e = P(),
    t = z(),
    n = (0, e.getCallBridge)(),
    r = async (i) => {
      try {
        await n("changeWindowTitle", i);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return (Ge.changeWindowTitle = r), Ge;
}
var Ke = {},
  rn;
function Ho() {
  if (rn) return Ke;
  (rn = 1), Object.defineProperty(Ke, "__esModule", { value: !0 }), (Ke.theme = void 0);
  const t = (0, P().getCallBridge)();
  return (Ke.theme = { enable: () => t("enableTheming") }), Ke;
}
var nn;
function Jo() {
  if (nn) return Le;
  (nn = 1), Object.defineProperty(Le, "__esModule", { value: !0 }), (Le.view = void 0);
  const e = No(),
    t = ko(),
    n = qo(),
    r = Fo(),
    i = zo(),
    o = Wo(),
    a = Ho();
  return (
    (Le.view = {
      submit: e.submit,
      close: t.close,
      refresh: n.refresh,
      createHistory: r.createHistory,
      getContext: i.getContext,
      theme: a.theme,
      changeWindowTitle: o.changeWindowTitle,
    }),
    Le
  );
}
var on;
function Ei() {
  return (
    on ||
      ((on = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), ee.__exportStar(Jo(), e);
      })(Kt)),
    Kt
  );
}
var Xt = {},
  ze = {},
  an;
function Xo() {
  if (an) return ze;
  (an = 1), Object.defineProperty(ze, "__esModule", { value: !0 }), (ze.router = void 0);
  const t = (0, P().getCallBridge)(),
    n = async (o) => {
      if (typeof o == "string") return t("navigate", { url: o, type: "same-tab" });
      if (!(o != null && o.target)) throw new Error("target is required for navigation");
      return t("navigate", { ...o, type: "same-tab" });
    },
    r = async (o) => {
      if (typeof o == "string") return t("navigate", { url: o, type: "new-tab" });
      if (!(o != null && o.target)) throw new Error("target is required for navigation");
      return t("navigate", { ...o, type: "new-tab" });
    },
    i = async () => t("reload");
  return (ze.router = { navigate: n, open: r, reload: i }), ze;
}
var sn;
function Yo() {
  return (
    sn ||
      ((sn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), ee.__exportStar(Xo(), e);
      })(Xt)),
    Xt
  );
}
var Yt = {},
  We = {},
  un;
function Zo() {
  if (un) return We;
  (un = 1), Object.defineProperty(We, "__esModule", { value: !0 }), (We.Modal = void 0);
  const e = P(),
    t = z(),
    n = (0, e.getCallBridge)(),
    r = () => {};
  class i {
    constructor(a) {
      var s, u;
      (this.resource = (a == null ? void 0 : a.resource) || null),
        (this.onClose = (a == null ? void 0 : a.onClose) || r),
        (this.size = (a == null ? void 0 : a.size) || "medium"),
        (this.context = (a == null ? void 0 : a.context) || {}),
        (this.closeOnEscape =
          (s = a == null ? void 0 : a.closeOnEscape) !== null && s !== void 0 ? s : !0),
        (this.closeOnOverlayClick =
          (u = a == null ? void 0 : a.closeOnOverlayClick) !== null && u !== void 0 ? u : !0);
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
  return (We.Modal = i), We;
}
var cn;
function Qo() {
  return (
    cn ||
      ((cn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), ee.__exportStar(Zo(), e);
      })(Yt)),
    Yt
  );
}
var H = {},
  He = {},
  ue = {},
  ln;
function ea() {
  if (ln) return ue;
  (ln = 1),
    Object.defineProperty(ue, "__esModule", { value: !0 }),
    (ue.blobToBase64 = ue.base64ToBlob = void 0);
  const e = (n, r) => {
    if (!n) return null;
    const i = n.includes(";base64") ? n.split(",")[1] : n,
      o = atob(i),
      a = new Array(o.length);
    for (let u = 0; u < o.length; u++) a[u] = o.charCodeAt(u);
    const s = new Uint8Array(a);
    return new Blob([s], { type: r });
  };
  ue.base64ToBlob = e;
  const t = (n) =>
    new Promise((r, i) => {
      const o = new FileReader();
      (o.onloadend = () => {
        r(o.result);
      }),
        (o.onerror = i),
        o.readAsDataURL(n);
    });
  return (ue.blobToBase64 = t), ue;
}
var fn;
function ta() {
  if (fn) return He;
  (fn = 1), Object.defineProperty(He, "__esModule", { value: !0 }), (He.productFetchApi = void 0);
  const e = ea(),
    t = async (i) => {
      const o = {};
      for (const [a, s] of i.entries())
        if (a === "file") {
          const u = s.name,
            c = s.type;
          (o.file = await (0, e.blobToBase64)(s)), (o.__fileName = u), (o.__fileType = c);
        } else o[a] = s;
      return JSON.stringify(o);
    },
    n = async (i) => {
      const o = (i == null ? void 0 : i.body) instanceof FormData,
        a = o ? await t(i == null ? void 0 : i.body) : i == null ? void 0 : i.body,
        s = new Request("", {
          body: a,
          method: i == null ? void 0 : i.method,
          headers: i == null ? void 0 : i.headers,
        }),
        u = Object.fromEntries(s.headers.entries());
      return {
        body: s.method !== "GET" ? await s.text() : null,
        headers: new Headers(u),
        isMultipartFormData: o,
      };
    },
    r = (i) => {
      const o = async (a, s, u) => {
        const { body: c, headers: l, isMultipartFormData: f } = await n(u);
        l.has("X-Atlassian-Token") || l.set("X-Atlassian-Token", "no-check");
        const v = {
            product: a,
            restPath: s,
            fetchRequestInit: { ...u, body: c, headers: [...l.entries()] },
            isMultipartFormData: f,
          },
          {
            body: h,
            headers: b,
            statusText: p,
            status: m,
            isAttachment: A,
          } = await i("fetchProduct", v),
          je = A ? (0, e.base64ToBlob)(h, b["content-type"]) : h;
        return new Response(je || null, { headers: b, status: m, statusText: p });
      };
      return {
        requestConfluence: (a, s) => o("confluence", a, s),
        requestJira: (a, s) => o("jira", a, s),
        requestBitbucket: (a, s) => o("bitbucket", a, s),
      };
    };
  return (He.productFetchApi = r), He;
}
var dn;
function ra() {
  if (dn) return H;
  dn = 1;
  var e;
  Object.defineProperty(H, "__esModule", { value: !0 }),
    (H.requestBitbucket = H.requestJira = H.requestConfluence = void 0);
  const t = P();
  return (
    (e = (0, ta().productFetchApi)((0, t.getCallBridge)())),
    (H.requestConfluence = e.requestConfluence),
    (H.requestJira = e.requestJira),
    (H.requestBitbucket = e.requestBitbucket),
    H
  );
}
var Zt = {},
  Je = {},
  hn;
function na() {
  if (hn) return Je;
  (hn = 1), Object.defineProperty(Je, "__esModule", { value: !0 }), (Je.showFlag = void 0);
  const e = P(),
    t = z(),
    n = (0, e.getCallBridge)(),
    r = (i) => {
      var o;
      if (!i.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const a = n("showFlag", { ...i, type: (o = i.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await a, n("closeFlag", { id: i.id })) };
    };
  return (Je.showFlag = r), Je;
}
var vn;
function ia() {
  return (
    vn ||
      ((vn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0);
        var t = na();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(Zt)),
    Zt
  );
}
var Qt = {},
  Xe = {},
  _n;
function oa() {
  if (_n) return Xe;
  (_n = 1), Object.defineProperty(Xe, "__esModule", { value: !0 }), (Xe.events = void 0);
  const t = (0, P().getCallBridge)(),
    n = (i, o) => t("emit", { event: i, payload: o }),
    r = (i, o) => t("on", { event: i, callback: o });
  return (Xe.events = { emit: n, on: r }), Xe;
}
var pn;
function aa() {
  return (
    pn ||
      ((pn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), ee.__exportStar(oa(), e);
      })(Qt)),
    Qt
  );
}
var J = {},
  bn;
function sa() {
  if (bn) return J;
  (bn = 1),
    Object.defineProperty(J, "__esModule", { value: !0 }),
    (J.createTranslationFunction = J.getTranslations = J.resetTranslationsCache = void 0);
  const e = Ai(),
    t = Ei(),
    n = {
      getI18nInfoConfig: async () => {
        const s = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!s.ok) throw new Error("Failed to get i18n info config: " + s.statusText);
        return (await s.json()).config;
      },
      getTranslationResource: async (s) => {
        const u = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${s}.json`);
        if (!u.ok) throw new Error(`Failed to get translation resource for locale: ${s}`);
        return u.json();
      },
    },
    r = new e.TranslationsGetter(n),
    i = () => {
      r.reset();
    };
  J.resetTranslationsCache = i;
  const o = async (s = null, u = { fallback: !0 }) => {
    let c = s;
    return c || (c = (await t.view.getContext()).locale), await r.getTranslations(c, u);
  };
  J.getTranslations = o;
  const a = async (s = null) => {
    let u = s;
    u || (u = (await t.view.getContext()).locale);
    const c = new e.Translator(u, r);
    return (
      await c.init(),
      (l, f) => {
        var v, h;
        return (h = (v = c.translate(l)) !== null && v !== void 0 ? v : f) !== null && h !== void 0
          ? h
          : l;
      }
    );
  };
  return (J.createTranslationFunction = a), J;
}
var gn;
function ua() {
  return (
    gn ||
      ((gn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0);
        const t = ee;
        var n = xo();
        Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return n.NavigationTarget;
          },
        }),
          t.__exportStar(Io(), e),
          t.__exportStar(Lo(), e),
          t.__exportStar(Ei(), e),
          t.__exportStar(Yo(), e),
          t.__exportStar(Qo(), e),
          t.__exportStar(ra(), e),
          t.__exportStar(ia(), e),
          t.__exportStar(aa(), e),
          (e.i18n = t.__importStar(sa()));
      })(Vt)),
    Vt
  );
}
var bt = ua();
function g(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  throw new Error(
    typeof e == "number"
      ? "[MobX] minified error nr: " +
        e +
        (n.length ? " " + n.map(String).join(",") : "") +
        ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
      : "[MobX] " + e,
  );
}
var ca = {};
function Rt() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : ca;
}
var Pi = Object.assign,
  gt = Object.getOwnPropertyDescriptor,
  V = Object.defineProperty,
  Tt = Object.prototype,
  lr = [];
Object.freeze(lr);
var ji = {};
Object.freeze(ji);
var la = typeof Proxy < "u",
  fa = Object.toString();
function Ri() {
  la || g("Proxy not available");
}
function Ti(e) {
  var t = !1;
  return function () {
    if (!t) return (t = !0), e.apply(this, arguments);
  };
}
var ye = function () {};
function N(e) {
  return typeof e == "function";
}
function le(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Mt(e) {
  return e !== null && typeof e == "object";
}
function ie(e) {
  if (!Mt(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n.toString() === fa;
}
function Mi(e) {
  var t = e == null ? void 0 : e.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Ct(e, t, n) {
  V(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function Ci(e, t, n) {
  V(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function ve(e, t) {
  var n = "isMobX" + e;
  return (
    (t.prototype[n] = !0),
    function (r) {
      return Mt(r) && r[n] === !0;
    }
  );
}
function Ae(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function da(e) {
  var t = Object.getPrototypeOf(e),
    n = Object.getPrototypeOf(t),
    r = Object.getPrototypeOf(n);
  return r === null;
}
function X(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var xi = typeof Object.getOwnPropertySymbols < "u";
function ha(e) {
  var t = Object.keys(e);
  if (!xi) return t;
  var n = Object.getOwnPropertySymbols(e);
  return n.length
    ? [].concat(
        t,
        n.filter(function (r) {
          return Tt.propertyIsEnumerable.call(e, r);
        }),
      )
    : t;
}
var xt =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : xi
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function Bi(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Z(e, t) {
  return Tt.hasOwnProperty.call(e, t);
}
var va =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var n = {};
    return (
      xt(t).forEach(function (r) {
        n[r] = gt(t, r);
      }),
      n
    );
  };
function R(e, t) {
  return !!(e & t);
}
function T(e, t, n) {
  return n ? (e |= t) : (e &= ~t), e;
}
function yn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function _a(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, ba(r.key), r);
  }
}
function Ee(e, t, n) {
  return t && _a(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function me(e, t) {
  var n = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n) return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = ga(e)) || t) {
    n && (e = n);
    var r = 0;
    return function () {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fe() {
  return (
    (fe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fe.apply(null, arguments)
  );
}
function Ii(e, t) {
  (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), fr(e, t);
}
function fr(e, t) {
  return (
    (fr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    fr(e, t)
  );
}
function pa(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function ba(e) {
  var t = pa(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ga(e, t) {
  if (e) {
    if (typeof e == "string") return yn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set"
        ? Array.from(e)
        : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? yn(e, t)
          : void 0
    );
  }
}
var $ = Symbol("mobx-stored-annotations");
function U(e) {
  function t(n, r) {
    if (ot(r)) return e.decorate_20223_(n, r);
    it(n, r, e);
  }
  return Object.assign(t, e);
}
function it(e, t, n) {
  Z(e, $) || Ct(e, $, fe({}, e[$])), Ea(n) || (e[$][t] = n);
}
function ya(e) {
  return Z(e, $) || Ct(e, $, fe({}, e[$])), e[$];
}
function ot(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var _ = Symbol("mobx administration"),
  oe = (function () {
    function e(n) {
      n === void 0 && (n = "Atom"),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = y.NOT_TRACKING_),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        (this.name_ = n);
    }
    var t = e.prototype;
    return (
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (r) {
            return r();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (r) {
            return r();
          });
      }),
      (t.reportObserved = function () {
        return Xi(this);
      }),
      (t.reportChanged = function () {
        B(), Yi(this), I();
      }),
      (t.toString = function () {
        return this.name_;
      }),
      Ee(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return R(this.flags_, e.isBeingObservedMask_);
          },
          set: function (r) {
            this.flags_ = T(this.flags_, e.isBeingObservedMask_, r);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return R(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (r) {
            this.flags_ = T(this.flags_, e.isPendingUnobservationMask_, r);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return R(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (r) {
            this.flags_ = T(this.flags_, e.diffValueMask_, r === 1);
          },
        },
      ])
    );
  })();
oe.isBeingObservedMask_ = 1;
oe.isPendingUnobservationMask_ = 2;
oe.diffValueMask_ = 4;
var Er = ve("Atom", oe);
function Di(e, t, n) {
  t === void 0 && (t = ye), n === void 0 && (n = ye);
  var r = new oe(e);
  return t !== ye && Ms(r, t), n !== ye && ro(r, n), r;
}
function ma(e, t) {
  return _o(e, t);
}
function Oa(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var yt = { structural: ma, default: Oa };
function de(e, t, n) {
  return ao(e)
    ? e
    : Array.isArray(e)
      ? w.array(e, { name: n })
      : ie(e)
        ? w.object(e, void 0, { name: n })
        : Ae(e)
          ? w.map(e, { name: n })
          : X(e)
            ? w.set(e, { name: n })
            : typeof e == "function" && !tt(e) && !rt(e)
              ? Mi(e)
                ? Se(e)
                : et(n, e)
              : e;
}
function wa(e, t, n) {
  if (e == null || Ft(e) || qt(e) || pe(e) || F(e)) return e;
  if (Array.isArray(e)) return w.array(e, { name: n, deep: !1 });
  if (ie(e)) return w.object(e, void 0, { name: n, deep: !1 });
  if (Ae(e)) return w.map(e, { name: n, deep: !1 });
  if (X(e)) return w.set(e, { name: n, deep: !1 });
}
function Bt(e) {
  return e;
}
function Sa(e, t) {
  return _o(e, t) ? t : e;
}
var Aa = "override";
function Ea(e) {
  return e.annotationType_ === Aa;
}
function at(e, t) {
  return { annotationType_: e, options_: t, make_: Pa, extend_: ja, decorate_20223_: Ra };
}
function Pa(e, t, n, r) {
  var i;
  if ((i = this.options_) != null && i.bound) return this.extend_(e, t, n, !1) === null ? 0 : 1;
  if (r === e.target_) return this.extend_(e, t, n, !1) === null ? 0 : 2;
  if (tt(n.value)) return 1;
  var o = Li(e, this, t, n, !1);
  return V(r, t, o), 2;
}
function ja(e, t, n, r) {
  var i = Li(e, this, t, n);
  return e.defineProperty_(t, i, r);
}
function Ra(e, t) {
  var n = t.kind,
    r = t.name,
    i = t.addInitializer,
    o = this,
    a = function (c) {
      var l, f, v, h;
      return he(
        (l = (f = o.options_) == null ? void 0 : f.name) != null ? l : r.toString(),
        c,
        (v = (h = o.options_) == null ? void 0 : h.autoAction) != null ? v : !1,
      );
    };
  if (n == "field")
    return function (u) {
      var c,
        l = u;
      return (
        tt(l) || (l = a(l)),
        (c = o.options_) != null && c.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (n == "method") {
    var s;
    return (
      tt(e) || (e = a(e)),
      (s = this.options_) != null &&
        s.bound &&
        i(function () {
          var u = this,
            c = u[r].bind(u);
          (c.isMobxAction = !0), (u[r] = c);
        }),
      e
    );
  }
  g(
    "Cannot apply '" +
      o.annotationType_ +
      "' to '" +
      String(r) +
      "' (kind: " +
      n +
      "):" +
      (`
'` +
        o.annotationType_ +
        "' can only be used on properties with a function value."),
  );
}
function Ta(e, t, n, r) {
  t.annotationType_, r.value;
}
function Li(e, t, n, r, i) {
  var o, a, s, u, c, l, f;
  i === void 0 && (i = d.safeDescriptors), Ta(e, t, n, r);
  var v = r.value;
  if ((o = t.options_) != null && o.bound) {
    var h;
    v = v.bind((h = e.proxy_) != null ? h : e.target_);
  }
  return {
    value: he(
      (a = (s = t.options_) == null ? void 0 : s.name) != null ? a : n.toString(),
      v,
      (u = (c = t.options_) == null ? void 0 : c.autoAction) != null ? u : !1,
      (l = t.options_) != null && l.bound ? ((f = e.proxy_) != null ? f : e.target_) : void 0,
    ),
    configurable: i ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !i,
  };
}
function Ni(e, t) {
  return { annotationType_: e, options_: t, make_: Ma, extend_: Ca, decorate_20223_: xa };
}
function Ma(e, t, n, r) {
  var i;
  if (r === e.target_) return this.extend_(e, t, n, !1) === null ? 0 : 2;
  if (
    (i = this.options_) != null &&
    i.bound &&
    (!Z(e.target_, t) || !rt(e.target_[t])) &&
    this.extend_(e, t, n, !1) === null
  )
    return 0;
  if (rt(n.value)) return 1;
  var o = ki(e, this, t, n, !1, !1);
  return V(r, t, o), 2;
}
function Ca(e, t, n, r) {
  var i,
    o = ki(e, this, t, n, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, o, r);
}
function xa(e, t) {
  var n,
    r = t.name,
    i = t.addInitializer;
  return (
    rt(e) || (e = Se(e)),
    (n = this.options_) != null &&
      n.bound &&
      i(function () {
        var o = this,
          a = o[r].bind(o);
        (a.isMobXFlow = !0), (o[r] = a);
      }),
    e
  );
}
function Ba(e, t, n, r) {
  t.annotationType_, r.value;
}
function ki(e, t, n, r, i, o) {
  o === void 0 && (o = d.safeDescriptors), Ba(e, t, n, r);
  var a = r.value;
  if ((rt(a) || (a = Se(a)), i)) {
    var s;
    (a = a.bind((s = e.proxy_) != null ? s : e.target_)), (a.isMobXFlow = !0);
  }
  return { value: a, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function Pr(e, t) {
  return { annotationType_: e, options_: t, make_: Ia, extend_: Da, decorate_20223_: La };
}
function Ia(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function Da(e, t, n, r) {
  return (
    Na(e, this, t, n),
    e.defineComputedProperty_(t, fe({}, this.options_, { get: n.get, set: n.set }), r)
  );
}
function La(e, t) {
  var n = this,
    r = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var o = Pe(this)[_],
        a = fe({}, n.options_, { get: e, context: this });
      a.name || (a.name = "ObservableObject." + r.toString()), o.values_.set(r, new k(a));
    }),
    function () {
      return this[_].getObservablePropValue_(r);
    }
  );
}
function Na(e, t, n, r) {
  t.annotationType_, r.get;
}
function It(e, t) {
  return { annotationType_: e, options_: t, make_: ka, extend_: qa, decorate_20223_: Fa };
}
function ka(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function qa(e, t, n, r) {
  var i, o;
  return (
    $a(e, this),
    e.defineObservableProperty_(
      t,
      n.value,
      (i = (o = this.options_) == null ? void 0 : o.enhancer) != null ? i : de,
      r,
    )
  );
}
function Fa(e, t) {
  var n = this,
    r = t.kind,
    i = t.name,
    o = new WeakSet();
  function a(s, u) {
    var c,
      l,
      f = Pe(s)[_],
      v = new ce(
        u,
        (c = (l = n.options_) == null ? void 0 : l.enhancer) != null ? c : de,
        "ObservableObject." + i.toString(),
        !1,
      );
    f.values_.set(i, v), o.add(s);
  }
  if (r == "accessor")
    return {
      get: function () {
        return o.has(this) || a(this, e.get.call(this)), this[_].getObservablePropValue_(i);
      },
      set: function (u) {
        return o.has(this) || a(this, u), this[_].setObservablePropValue_(i, u);
      },
      init: function (u) {
        return o.has(this) || a(this, u), u;
      },
    };
}
function $a(e, t, n, r) {
  t.annotationType_;
}
var Va = "true",
  Ua = qi();
function qi(e) {
  return { annotationType_: Va, options_: e, make_: Ga, extend_: Ka, decorate_20223_: za };
}
function Ga(e, t, n, r) {
  var i, o;
  if (n.get) return Dt.make_(e, t, n, r);
  if (n.set) {
    var a = he(t.toString(), n.set);
    return r === e.target_
      ? e.defineProperty_(t, {
          configurable: d.safeDescriptors ? e.isPlainObject_ : !0,
          set: a,
        }) === null
        ? 0
        : 2
      : (V(r, t, { configurable: !0, set: a }), 2);
  }
  if (r !== e.target_ && typeof n.value == "function") {
    var s;
    if (Mi(n.value)) {
      var u,
        c = (u = this.options_) != null && u.autoBind ? Se.bound : Se;
      return c.make_(e, t, n, r);
    }
    var l = (s = this.options_) != null && s.autoBind ? et.bound : et;
    return l.make_(e, t, n, r);
  }
  var f = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? w.ref : w;
  if (typeof n.value == "function" && (o = this.options_) != null && o.autoBind) {
    var v;
    n.value = n.value.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return f.make_(e, t, n, r);
}
function Ka(e, t, n, r) {
  var i, o;
  if (n.get) return Dt.extend_(e, t, n, r);
  if (n.set)
    return e.defineProperty_(
      t,
      { configurable: d.safeDescriptors ? e.isPlainObject_ : !0, set: he(t.toString(), n.set) },
      r,
    );
  if (typeof n.value == "function" && (i = this.options_) != null && i.autoBind) {
    var a;
    n.value = n.value.bind((a = e.proxy_) != null ? a : e.target_);
  }
  var s = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? w.ref : w;
  return s.extend_(e, t, n, r);
}
function za(e, t) {
  g("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Wa = "observable",
  Ha = "observable.ref",
  Ja = "observable.shallow",
  Xa = "observable.struct",
  Fi = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Fi);
function ct(e) {
  return e || Fi;
}
var dr = It(Wa),
  Ya = It(Ha, { enhancer: Bt }),
  Za = It(Ja, { enhancer: wa }),
  Qa = It(Xa, { enhancer: Sa }),
  $i = U(dr);
function lt(e) {
  return e.deep === !0 ? de : e.deep === !1 ? Bt : ts(e.defaultDecorator);
}
function es(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : qi(e)) : void 0;
}
function ts(e) {
  var t, n;
  return e && (t = (n = e.options_) == null ? void 0 : n.enhancer) != null ? t : de;
}
function Vi(e, t, n) {
  if (ot(t)) return dr.decorate_20223_(e, t);
  if (le(t)) {
    it(e, t, dr);
    return;
  }
  return ao(e)
    ? e
    : ie(e)
      ? w.object(e, t, n)
      : Array.isArray(e)
        ? w.array(e, t)
        : Ae(e)
          ? w.map(e, t)
          : X(e)
            ? w.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : w.box(e, t);
}
Pi(Vi, $i);
var rs = {
    box: function (t, n) {
      var r = ct(n);
      return new ce(t, lt(r), r.name, !0, r.equals);
    },
    array: function (t, n) {
      var r = ct(n);
      return (d.useProxies === !1 || r.proxy === !1 ? tu : Ks)(t, lt(r), r.name);
    },
    map: function (t, n) {
      var r = ct(n);
      return new uo(t, lt(r), r.name);
    },
    set: function (t, n) {
      var r = ct(n);
      return new co(t, lt(r), r.name);
    },
    object: function (t, n, r) {
      return be(function () {
        return Is(
          d.useProxies === !1 || (r == null ? void 0 : r.proxy) === !1 ? Pe({}, r) : $s({}, r),
          t,
          n,
        );
      });
    },
    ref: U(Ya),
    shallow: U(Za),
    deep: $i,
    struct: U(Qa),
  },
  w = Pi(Vi, rs),
  Ui = "computed",
  ns = "computed.struct",
  hr = Pr(Ui),
  is = Pr(ns, { equals: yt.structural }),
  Dt = function (t, n) {
    if (ot(n)) return hr.decorate_20223_(t, n);
    if (le(n)) return it(t, n, hr);
    if (ie(t)) return U(Pr(Ui, t));
    var r = ie(n) ? n : {};
    return (r.get = t), r.name || (r.name = t.name || ""), new k(r);
  };
Object.assign(Dt, hr);
Dt.struct = U(is);
var mn,
  On,
  mt = 0,
  os = 1,
  as =
    (mn = (On = gt(function () {}, "name")) == null ? void 0 : On.configurable) != null ? mn : !1,
  wn = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function he(e, t, n, r) {
  n === void 0 && (n = !1);
  function i() {
    return ss(e, n, t, r || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    as && ((wn.value = e), V(i, "name", wn)),
    i
  );
}
function ss(e, t, n, r, i) {
  var o = us(e, t);
  try {
    return n.apply(r, i);
  } catch (a) {
    throw ((o.error_ = a), a);
  } finally {
    cs(o);
  }
}
function us(e, t, n, r) {
  var i = !1,
    o = 0,
    a = d.trackingDerivation,
    s = !t || !a;
  B();
  var u = d.allowStateChanges;
  s && (_e(), (u = Lt(!0)));
  var c = jr(!0),
    l = {
      runAsAction_: s,
      prevDerivation_: a,
      prevAllowStateChanges_: u,
      prevAllowStateReads_: c,
      notifySpy_: i,
      startTime_: o,
      actionId_: os++,
      parentActionId_: mt,
    };
  return (mt = l.actionId_), l;
}
function cs(e) {
  mt !== e.actionId_ && g(30),
    (mt = e.parentActionId_),
    e.error_ !== void 0 && (d.suppressReactionErrors = !0),
    Nt(e.prevAllowStateChanges_),
    Ze(e.prevAllowStateReads_),
    I(),
    e.runAsAction_ && Q(e.prevDerivation_),
    (d.suppressReactionErrors = !1);
}
function ls(e, t) {
  var n = Lt(e);
  try {
    return t();
  } finally {
    Nt(n);
  }
}
function Lt(e) {
  var t = d.allowStateChanges;
  return (d.allowStateChanges = e), t;
}
function Nt(e) {
  d.allowStateChanges = e;
}
var ce = (function (e) {
    function t(r, i, o, a, s) {
      var u;
      return (
        o === void 0 && (o = "ObservableValue"),
        s === void 0 && (s = yt.default),
        (u = e.call(this, o) || this),
        (u.enhancer = void 0),
        (u.name_ = void 0),
        (u.equals = void 0),
        (u.hasUnreportedChange_ = !1),
        (u.interceptors_ = void 0),
        (u.changeListeners_ = void 0),
        (u.value_ = void 0),
        (u.dehancer = void 0),
        (u.enhancer = i),
        (u.name_ = o),
        (u.equals = s),
        (u.value_ = i(r, void 0, o)),
        u
      );
    }
    Ii(t, e);
    var n = t.prototype;
    return (
      (n.dehanceValue = function (i) {
        return this.dehancer !== void 0 ? this.dehancer(i) : i;
      }),
      (n.set = function (i) {
        this.value_, (i = this.prepareNewValue_(i)), i !== d.UNCHANGED && this.setNewValue_(i);
      }),
      (n.prepareNewValue_ = function (i) {
        if (C(this)) {
          var o = x(this, { object: this, type: G, newValue: i });
          if (!o) return d.UNCHANGED;
          i = o.newValue;
        }
        return (
          (i = this.enhancer(i, this.value_, this.name_)),
          this.equals(this.value_, i) ? d.UNCHANGED : i
        );
      }),
      (n.setNewValue_ = function (i) {
        var o = this.value_;
        (this.value_ = i),
          this.reportChanged(),
          D(this) && L(this, { type: G, object: this, newValue: i, oldValue: o });
      }),
      (n.get = function () {
        return this.reportObserved(), this.dehanceValue(this.value_);
      }),
      (n.intercept_ = function (i) {
        return st(this, i);
      }),
      (n.observe_ = function (i, o) {
        return (
          o &&
            i({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: G,
              newValue: this.value_,
              oldValue: void 0,
            }),
          ut(this, i)
        );
      }),
      (n.raw = function () {
        return this.value_;
      }),
      (n.toJSON = function () {
        return this.get();
      }),
      (n.toString = function () {
        return this.name_ + "[" + this.value_ + "]";
      }),
      (n.valueOf = function () {
        return Bi(this.get());
      }),
      (n[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(oe),
  k = (function () {
    function e(n) {
      (this.dependenciesState_ = y.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = y.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new wt(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Ot.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        n.get || g(31),
        (this.derivation = n.get),
        (this.name_ = n.name || "ComputedValue"),
        n.set && (this.setter_ = he("ComputedValue-setter", n.set)),
        (this.equals_ = n.equals || (n.compareStructural || n.struct ? yt.structural : yt.default)),
        (this.scope_ = n.context),
        (this.requiresReaction_ = n.requiresReaction),
        (this.keepAlive_ = !!n.keepAlive);
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        _s(this);
      }),
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (r) {
            return r();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (r) {
            return r();
          });
      }),
      (t.get = function () {
        if (
          (this.isComputing && g(32, this.name_, this.derivation),
          d.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          vr(this) &&
            (this.warnAboutUntrackedRead_(), B(), (this.value_ = this.computeValue_(!1)), I());
        else if ((Xi(this), vr(this))) {
          var r = d.trackingContext;
          this.keepAlive_ && !r && (d.trackingContext = this),
            this.trackAndCompute() && vs(this),
            (d.trackingContext = r);
        }
        var i = this.value_;
        if (dt(i)) throw i.cause;
        return i;
      }),
      (t.set = function (r) {
        if (this.setter_) {
          this.isRunningSetter && g(33, this.name_), (this.isRunningSetter = !0);
          try {
            this.setter_.call(this.scope_, r);
          } finally {
            this.isRunningSetter = !1;
          }
        } else g(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var r = this.value_,
          i = this.dependenciesState_ === y.NOT_TRACKING_,
          o = this.computeValue_(!0),
          a = i || dt(r) || dt(o) || !this.equals_(r, o);
        return a && (this.value_ = o), a;
      }),
      (t.computeValue_ = function (r) {
        this.isComputing = !0;
        var i = Lt(!1),
          o;
        if (r) o = Gi(this, this.derivation, this.scope_);
        else if (d.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (a) {
            o = new wt(a);
          }
        return Nt(i), (this.isComputing = !1), o;
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (_r(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (r, i) {
        var o = this,
          a = !0,
          s = void 0;
        return Es(function () {
          var u = o.get();
          if (!a || i) {
            var c = _e();
            r({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: G,
              object: o,
              newValue: u,
              oldValue: s,
            }),
              Q(c);
          }
          (a = !1), (s = u);
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return Bi(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      Ee(e, [
        {
          key: "isComputing",
          get: function () {
            return R(this.flags_, e.isComputingMask_);
          },
          set: function (r) {
            this.flags_ = T(this.flags_, e.isComputingMask_, r);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return R(this.flags_, e.isRunningSetterMask_);
          },
          set: function (r) {
            this.flags_ = T(this.flags_, e.isRunningSetterMask_, r);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return R(this.flags_, e.isBeingObservedMask_);
          },
          set: function (r) {
            this.flags_ = T(this.flags_, e.isBeingObservedMask_, r);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return R(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (r) {
            this.flags_ = T(this.flags_, e.isPendingUnobservationMask_, r);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return R(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (r) {
            this.flags_ = T(this.flags_, e.diffValueMask_, r === 1);
          },
        },
      ])
    );
  })();
k.isComputingMask_ = 1;
k.isRunningSetterMask_ = 2;
k.isBeingObservedMask_ = 4;
k.isPendingUnobservationMask_ = 8;
k.diffValueMask_ = 16;
var kt = ve("ComputedValue", k),
  y;
(function (e) {
  (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_");
})(y || (y = {}));
var Ot;
(function (e) {
  (e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK");
})(Ot || (Ot = {}));
var wt = function (t) {
  (this.cause = void 0), (this.cause = t);
};
function dt(e) {
  return e instanceof wt;
}
function vr(e) {
  switch (e.dependenciesState_) {
    case y.UP_TO_DATE_:
      return !1;
    case y.NOT_TRACKING_:
    case y.STALE_:
      return !0;
    case y.POSSIBLY_STALE_: {
      for (var t = jr(!0), n = _e(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
        var a = r[o];
        if (kt(a)) {
          if (d.disableErrorBoundaries) a.get();
          else
            try {
              a.get();
            } catch {
              return Q(n), Ze(t), !0;
            }
          if (e.dependenciesState_ === y.STALE_) return Q(n), Ze(t), !0;
        }
      }
      return zi(e), Q(n), Ze(t), !1;
    }
  }
}
function Gi(e, t, n) {
  var r = jr(!0);
  zi(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++d.runId);
  var i = d.trackingDerivation;
  (d.trackingDerivation = e), d.inBatch++;
  var o;
  if (d.disableErrorBoundaries === !0) o = t.call(n);
  else
    try {
      o = t.call(n);
    } catch (a) {
      o = new wt(a);
    }
  return d.inBatch--, (d.trackingDerivation = i), fs(e), Ze(r), o;
}
function fs(e) {
  for (
    var t = e.observing_,
      n = (e.observing_ = e.newObserving_),
      r = y.UP_TO_DATE_,
      i = 0,
      o = e.unboundDepsCount_,
      a = 0;
    a < o;
    a++
  ) {
    var s = n[a];
    s.diffValue === 0 && ((s.diffValue = 1), i !== a && (n[i] = s), i++),
      s.dependenciesState_ > r && (r = s.dependenciesState_);
  }
  for (n.length = i, e.newObserving_ = null, o = t.length; o--; ) {
    var u = t[o];
    u.diffValue === 0 && Hi(u, e), (u.diffValue = 0);
  }
  for (; i--; ) {
    var c = n[i];
    c.diffValue === 1 && ((c.diffValue = 0), hs(c, e));
  }
  r !== y.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
}
function _r(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var n = t.length; n--; ) Hi(t[n], e);
  e.dependenciesState_ = y.NOT_TRACKING_;
}
function Ki(e) {
  var t = _e();
  try {
    return e();
  } finally {
    Q(t);
  }
}
function _e() {
  var e = d.trackingDerivation;
  return (d.trackingDerivation = null), e;
}
function Q(e) {
  d.trackingDerivation = e;
}
function jr(e) {
  var t = d.allowStateReads;
  return (d.allowStateReads = e), t;
}
function Ze(e) {
  d.allowStateReads = e;
}
function zi(e) {
  if (e.dependenciesState_ !== y.UP_TO_DATE_) {
    e.dependenciesState_ = y.UP_TO_DATE_;
    for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = y.UP_TO_DATE_;
  }
}
var ht = function () {
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
  vt = !0,
  Wi = !1,
  d = (function () {
    var e = Rt();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (vt = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new ht().version && (vt = !1),
      vt
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ht()))
        : (setTimeout(function () {
            Wi || g(35);
          }, 1),
          new ht())
    );
  })();
function ds() {
  if (((d.pendingReactions.length || d.inBatch || d.isRunningReactions) && g(36), (Wi = !0), vt)) {
    var e = Rt();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (d = new ht());
  }
}
function hs(e, t) {
  e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_);
}
function Hi(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && Ji(e);
}
function Ji(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), d.pendingUnobservations.push(e));
}
function B() {
  d.inBatch++;
}
function I() {
  if (--d.inBatch === 0) {
    Zi();
    for (var e = d.pendingUnobservations, t = 0; t < e.length; t++) {
      var n = e[t];
      (n.isPendingUnobservation = !1),
        n.observers_.size === 0 &&
          (n.isBeingObserved && ((n.isBeingObserved = !1), n.onBUO()),
          n instanceof k && n.suspend_());
    }
    d.pendingUnobservations = [];
  }
}
function Xi(e) {
  var t = d.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && d.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && d.inBatch > 0 && Ji(e), !1);
}
function Yi(e) {
  e.lowestObserverState_ !== y.STALE_ &&
    ((e.lowestObserverState_ = y.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === y.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = y.STALE_);
    }));
}
function vs(e) {
  e.lowestObserverState_ !== y.STALE_ &&
    ((e.lowestObserverState_ = y.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === y.POSSIBLY_STALE_
        ? (t.dependenciesState_ = y.STALE_)
        : t.dependenciesState_ === y.UP_TO_DATE_ && (e.lowestObserverState_ = y.UP_TO_DATE_);
    }));
}
function _s(e) {
  e.lowestObserverState_ === y.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = y.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === y.UP_TO_DATE_ &&
        ((t.dependenciesState_ = y.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var K = (function () {
  function e(n, r, i, o) {
    n === void 0 && (n = "Reaction"),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = y.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = Ot.NONE),
      (this.name_ = n),
      (this.onInvalidate_ = r),
      (this.errorHandler_ = i),
      (this.requiresObservable_ = o);
  }
  var t = e.prototype;
  return (
    (t.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (t.schedule_ = function () {
      this.isScheduled || ((this.isScheduled = !0), d.pendingReactions.push(this), Zi());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        B(), (this.isScheduled = !1);
        var r = d.trackingContext;
        if (((d.trackingContext = this), vr(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (i) {
            this.reportExceptionInDerivation_(i);
          }
        }
        (d.trackingContext = r), I();
      }
    }),
    (t.track = function (r) {
      if (!this.isDisposed) {
        B(), (this.isRunning = !0);
        var i = d.trackingContext;
        d.trackingContext = this;
        var o = Gi(this, r, void 0);
        (d.trackingContext = i),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && _r(this),
          dt(o) && this.reportExceptionInDerivation_(o.cause),
          I();
      }
    }),
    (t.reportExceptionInDerivation_ = function (r) {
      var i = this;
      if (this.errorHandler_) {
        this.errorHandler_(r, this);
        return;
      }
      if (d.disableErrorBoundaries) throw r;
      var o = "[mobx] uncaught error in '" + this + "'";
      d.suppressReactionErrors || console.error(o, r),
        d.globalReactionErrorHandlers.forEach(function (a) {
          return a(r, i);
        });
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (B(), _r(this), I()));
    }),
    (t.getDisposer_ = function (r) {
      var i = this,
        o = function a() {
          i.dispose(),
            r == null || r.removeEventListener == null || r.removeEventListener("abort", a);
        };
      return (
        r == null || r.addEventListener == null || r.addEventListener("abort", o), (o[_] = this), o
      );
    }),
    (t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (t.trace = function (r) {}),
    Ee(e, [
      {
        key: "isDisposed",
        get: function () {
          return R(this.flags_, e.isDisposedMask_);
        },
        set: function (r) {
          this.flags_ = T(this.flags_, e.isDisposedMask_, r);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return R(this.flags_, e.isScheduledMask_);
        },
        set: function (r) {
          this.flags_ = T(this.flags_, e.isScheduledMask_, r);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return R(this.flags_, e.isTrackPendingMask_);
        },
        set: function (r) {
          this.flags_ = T(this.flags_, e.isTrackPendingMask_, r);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return R(this.flags_, e.isRunningMask_);
        },
        set: function (r) {
          this.flags_ = T(this.flags_, e.isRunningMask_, r);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return R(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (r) {
          this.flags_ = T(this.flags_, e.diffValueMask_, r === 1);
        },
      },
    ])
  );
})();
K.isDisposedMask_ = 1;
K.isScheduledMask_ = 2;
K.isTrackPendingMask_ = 4;
K.isRunningMask_ = 8;
K.diffValueMask_ = 16;
var ps = 100,
  pr = function (t) {
    return t();
  };
function Zi() {
  d.inBatch > 0 || d.isRunningReactions || pr(bs);
}
function bs() {
  d.isRunningReactions = !0;
  for (var e = d.pendingReactions, t = 0; e.length > 0; ) {
    ++t === ps && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
  }
  d.isRunningReactions = !1;
}
var St = ve("Reaction", K);
function gs(e) {
  var t = pr;
  pr = function (r) {
    return e(function () {
      return t(r);
    });
  };
}
function Qe() {
  return !1;
}
function ys(e) {
  return console.warn("[mobx.spy] Is a no-op in production builds"), function () {};
}
var Qi = "action",
  ms = "action.bound",
  eo = "autoAction",
  Os = "autoAction.bound",
  ws = "<unnamed action>",
  br = at(Qi),
  Ss = at(ms, { bound: !0 }),
  gr = at(eo, { autoAction: !0 }),
  As = at(Os, { autoAction: !0, bound: !0 });
function to(e) {
  var t = function (r, i) {
    if (N(r)) return he(r.name || ws, r, e);
    if (N(i)) return he(r, i, e);
    if (ot(i)) return (e ? gr : br).decorate_20223_(r, i);
    if (le(i)) return it(r, i, e ? gr : br);
    if (le(r)) return U(at(e ? eo : Qi, { name: r, autoAction: e }));
  };
  return t;
}
var Oe = to(!1);
Object.assign(Oe, br);
var et = to(!0);
Object.assign(et, gr);
Oe.bound = U(Ss);
et.bound = U(As);
function tt(e) {
  return N(e) && e.isMobxAction === !0;
}
function Es(e, t) {
  var n, r, i, o;
  t === void 0 && (t = ji);
  var a = (n = (r = t) == null ? void 0 : r.name) != null ? n : "Autorun",
    s = !t.scheduler && !t.delay,
    u;
  if (s)
    u = new K(
      a,
      function () {
        this.track(f);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var c = js(t),
      l = !1;
    u = new K(
      a,
      function () {
        l ||
          ((l = !0),
          c(function () {
            (l = !1), u.isDisposed || u.track(f);
          }));
      },
      t.onError,
      t.requiresObservable,
    );
  }
  function f() {
    e(u);
  }
  return (
    ((i = t) != null && (i = i.signal) != null && i.aborted) || u.schedule_(),
    u.getDisposer_((o = t) == null ? void 0 : o.signal)
  );
}
var Ps = function (t) {
  return t();
};
function js(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Ps;
}
var Rs = "onBO",
  Ts = "onBUO";
function Ms(e, t, n) {
  return no(Rs, e, t, n);
}
function ro(e, t, n) {
  return no(Ts, e, t, n);
}
function no(e, t, n, r) {
  var i = Pt(t),
    o = N(r) ? r : n,
    a = e + "L";
  return (
    i[a] ? i[a].add(o) : (i[a] = new Set([o])),
    function () {
      var s = i[a];
      s && (s.delete(o), s.size === 0 && delete i[a]);
    }
  );
}
var Cs = "never",
  ft = "always",
  xs = "observed";
function Bs(e) {
  e.isolateGlobalState === !0 && ds();
  var t = e.useProxies,
    n = e.enforceActions;
  if (
    (t !== void 0 && (d.useProxies = t === ft ? !0 : t === Cs ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (d.verifyProxies = !0),
    n !== void 0)
  ) {
    var r = n === ft ? ft : n === xs;
    (d.enforceActions = r), (d.allowStateChanges = !(r === !0 || r === ft));
  }
  [
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (i) {
    i in e && (d[i] = !!e[i]);
  }),
    (d.allowStateReads = !d.observableRequiresReaction),
    e.reactionScheduler && gs(e.reactionScheduler);
}
function Is(e, t, n, r) {
  var i = va(t);
  return (
    be(function () {
      var o = Pe(e, r)[_];
      xt(i).forEach(function (a) {
        o.extend_(a, i[a], n && a in n ? n[a] : !0);
      });
    }),
    e
  );
}
function Ds(e, t) {
  return io(Pt(e, t));
}
function io(e) {
  var t = { name: e.name_ };
  return e.observing_ && e.observing_.length > 0 && (t.dependencies = Ls(e.observing_).map(io)), t;
}
function Ls(e) {
  return Array.from(new Set(e));
}
var Ns = 0;
function oo() {
  this.message = "FLOW_CANCELLED";
}
oo.prototype = Object.create(Error.prototype);
var er = Ni("flow"),
  ks = Ni("flow.bound", { bound: !0 }),
  Se = Object.assign(function (t, n) {
    if (ot(n)) return er.decorate_20223_(t, n);
    if (le(n)) return it(t, n, er);
    var r = t,
      i = r.name || "<unnamed flow>",
      o = function () {
        var s = this,
          u = arguments,
          c = ++Ns,
          l = Oe(i + " - runid: " + c + " - init", r).apply(s, u),
          f,
          v = void 0,
          h = new Promise(function (b, p) {
            var m = 0;
            f = p;
            function A(j) {
              v = void 0;
              var te;
              try {
                te = Oe(i + " - runid: " + c + " - yield " + m++, l.next).call(l, j);
              } catch (ae) {
                return p(ae);
              }
              Re(te);
            }
            function je(j) {
              v = void 0;
              var te;
              try {
                te = Oe(i + " - runid: " + c + " - yield " + m++, l.throw).call(l, j);
              } catch (ae) {
                return p(ae);
              }
              Re(te);
            }
            function Re(j) {
              if (N(j == null ? void 0 : j.then)) {
                j.then(Re, p);
                return;
              }
              return j.done ? b(j.value) : ((v = Promise.resolve(j.value)), v.then(A, je));
            }
            A(void 0);
          });
        return (
          (h.cancel = Oe(i + " - runid: " + c + " - cancel", function () {
            try {
              v && Sn(v);
              var b = l.return(void 0),
                p = Promise.resolve(b.value);
              p.then(ye, ye), Sn(p), f(new oo());
            } catch (m) {
              f(m);
            }
          })),
          h
        );
      };
    return (o.isMobXFlow = !0), o;
  }, er);
Se.bound = U(ks);
function Sn(e) {
  N(e.cancel) && e.cancel();
}
function rt(e) {
  return (e == null ? void 0 : e.isMobXFlow) === !0;
}
function qs(e, t) {
  return e ? Ft(e) || !!e[_] || Er(e) || St(e) || kt(e) : !1;
}
function ao(e) {
  return qs(e);
}
function Y(e, t) {
  t === void 0 && (t = void 0), B();
  try {
    return e.apply(t);
  } finally {
    I();
  }
}
function ge(e) {
  return e[_];
}
var Fs = {
  has: function (t, n) {
    return ge(t).has_(n);
  },
  get: function (t, n) {
    return ge(t).get_(n);
  },
  set: function (t, n, r) {
    var i;
    return le(n) ? ((i = ge(t).set_(n, r, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function (t, n) {
    var r;
    return le(n) ? ((r = ge(t).delete_(n, !0)) != null ? r : !0) : !1;
  },
  defineProperty: function (t, n, r) {
    var i;
    return (i = ge(t).defineProperty_(n, r)) != null ? i : !0;
  },
  ownKeys: function (t) {
    return ge(t).ownKeys_();
  },
  preventExtensions: function (t) {
    g(13);
  },
};
function $s(e, t) {
  var n, r;
  return Ri(), (e = Pe(e, t)), (r = (n = e[_]).proxy_) != null ? r : (n.proxy_ = new Proxy(e, Fs));
}
function C(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function st(e, t) {
  var n = e.interceptors_ || (e.interceptors_ = []);
  return (
    n.push(t),
    Ti(function () {
      var r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    })
  );
}
function x(e, t) {
  var n = _e();
  try {
    for (
      var r = [].concat(e.interceptors_ || []), i = 0, o = r.length;
      i < o && ((t = r[i](t)), t && !t.type && g(14), !!t);
      i++
    );
    return t;
  } finally {
    Q(n);
  }
}
function D(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function ut(e, t) {
  var n = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    n.push(t),
    Ti(function () {
      var r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    })
  );
}
function L(e, t) {
  var n = _e(),
    r = e.changeListeners_;
  if (r) {
    r = r.slice();
    for (var i = 0, o = r.length; i < o; i++) r[i](t);
    Q(n);
  }
}
function Vs(e, t, n) {
  return (
    be(function () {
      var r,
        i = Pe(e, n)[_];
      (r = t) != null || (t = ya(e)),
        xt(t).forEach(function (o) {
          return i.make_(o, t[o]);
        });
    }),
    e
  );
}
var An = "splice",
  G = "update",
  Us = 1e4,
  Gs = {
    get: function (t, n) {
      var r = t[_];
      return n === _
        ? r
        : n === "length"
          ? r.getArrayLength_()
          : typeof n == "string" && !isNaN(n)
            ? r.get_(parseInt(n))
            : Z(At, n)
              ? At[n]
              : t[n];
    },
    set: function (t, n, r) {
      var i = t[_];
      return (
        n === "length" && i.setArrayLength_(r),
        typeof n == "symbol" || isNaN(n) ? (t[n] = r) : i.set_(parseInt(n), r),
        !0
      );
    },
    preventExtensions: function () {
      g(15);
    },
  },
  Rr = (function () {
    function e(n, r, i, o) {
      n === void 0 && (n = "ObservableArray"),
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
        (this.owned_ = i),
        (this.legacyMode_ = o),
        (this.atom_ = new oe(n)),
        (this.enhancer_ = function (a, s) {
          return r(a, s, "ObservableArray[..]");
        });
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r;
      }),
      (t.dehanceValues_ = function (r) {
        return this.dehancer !== void 0 && r.length > 0 ? r.map(this.dehancer) : r;
      }),
      (t.intercept_ = function (r) {
        return st(this, r);
      }),
      (t.observe_ = function (r, i) {
        return (
          i === void 0 && (i = !1),
          i &&
            r({
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
          ut(this, r)
        );
      }),
      (t.getArrayLength_ = function () {
        return this.atom_.reportObserved(), this.values_.length;
      }),
      (t.setArrayLength_ = function (r) {
        (typeof r != "number" || isNaN(r) || r < 0) && g("Out of range: " + r);
        var i = this.values_.length;
        if (r !== i)
          if (r > i) {
            for (var o = new Array(r - i), a = 0; a < r - i; a++) o[a] = void 0;
            this.spliceWithArray_(i, 0, o);
          } else this.spliceWithArray_(r, i - r);
      }),
      (t.updateArrayLength_ = function (r, i) {
        r !== this.lastKnownLength_ && g(16),
          (this.lastKnownLength_ += i),
          this.legacyMode_ && i > 0 && vo(r + i + 1);
      }),
      (t.spliceWithArray_ = function (r, i, o) {
        var a = this;
        this.atom_;
        var s = this.values_.length;
        if (
          (r === void 0 ? (r = 0) : r > s ? (r = s) : r < 0 && (r = Math.max(0, s + r)),
          arguments.length === 1
            ? (i = s - r)
            : i == null
              ? (i = 0)
              : (i = Math.max(0, Math.min(i, s - r))),
          o === void 0 && (o = lr),
          C(this))
        ) {
          var u = x(this, { object: this.proxy_, type: An, index: r, removedCount: i, added: o });
          if (!u) return lr;
          (i = u.removedCount), (o = u.added);
        }
        if (
          ((o =
            o.length === 0
              ? o
              : o.map(function (f) {
                  return a.enhancer_(f, void 0);
                })),
          this.legacyMode_)
        ) {
          var c = o.length - i;
          this.updateArrayLength_(s, c);
        }
        var l = this.spliceItemsIntoValues_(r, i, o);
        return (
          (i !== 0 || o.length !== 0) && this.notifyArraySplice_(r, o, l), this.dehanceValues_(l)
        );
      }),
      (t.spliceItemsIntoValues_ = function (r, i, o) {
        if (o.length < Us) {
          var a;
          return (a = this.values_).splice.apply(a, [r, i].concat(o));
        } else {
          var s = this.values_.slice(r, r + i),
            u = this.values_.slice(r + i);
          this.values_.length += o.length - i;
          for (var c = 0; c < o.length; c++) this.values_[r + c] = o[c];
          for (var l = 0; l < u.length; l++) this.values_[r + o.length + l] = u[l];
          return s;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (r, i, o) {
        var a = !this.owned_ && Qe(),
          s = D(this),
          u =
            s || a
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: G,
                  debugObjectName: this.atom_.name_,
                  index: r,
                  newValue: i,
                  oldValue: o,
                }
              : null;
        this.atom_.reportChanged(), s && L(this, u);
      }),
      (t.notifyArraySplice_ = function (r, i, o) {
        var a = !this.owned_ && Qe(),
          s = D(this),
          u =
            s || a
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: An,
                  index: r,
                  removed: o,
                  added: i,
                  removedCount: o.length,
                  addedCount: i.length,
                }
              : null;
        this.atom_.reportChanged(), s && L(this, u);
      }),
      (t.get_ = function (r) {
        if (this.legacyMode_ && r >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + r);
          return;
        }
        return this.atom_.reportObserved(), this.dehanceValue_(this.values_[r]);
      }),
      (t.set_ = function (r, i) {
        var o = this.values_;
        if ((this.legacyMode_ && r > o.length && g(17, r, o.length), r < o.length)) {
          this.atom_;
          var a = o[r];
          if (C(this)) {
            var s = x(this, { type: G, object: this.proxy_, index: r, newValue: i });
            if (!s) return;
            i = s.newValue;
          }
          i = this.enhancer_(i, a);
          var u = i !== a;
          u && ((o[r] = i), this.notifyArrayChildUpdate_(r, i, a));
        } else {
          for (var c = new Array(r + 1 - o.length), l = 0; l < c.length - 1; l++) c[l] = void 0;
          (c[c.length - 1] = i), this.spliceWithArray_(o.length, 0, c);
        }
      }),
      e
    );
  })();
function Ks(e, t, n, r) {
  return (
    n === void 0 && (n = "ObservableArray"),
    r === void 0 && (r = !1),
    Ri(),
    be(function () {
      var i = new Rr(n, t, r, !1);
      Ci(i.values_, _, i);
      var o = new Proxy(i.values_, Gs);
      return (i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o;
    })
  );
}
var At = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var n = this[_];
    return n.spliceWithArray_(0, n.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, n) {
    for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
      i[o - 2] = arguments[o];
    var a = this[_];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return a.spliceWithArray_(t);
      case 2:
        return a.spliceWithArray_(t, n);
    }
    return a.spliceWithArray_(t, n, i);
  },
  spliceWithArray: function (t, n, r) {
    return this[_].spliceWithArray_(t, n, r);
  },
  push: function () {
    for (var t = this[_], n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return t.spliceWithArray_(t.values_.length, 0, r), t.values_.length;
  },
  pop: function () {
    return this.splice(Math.max(this[_].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[_], n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return t.spliceWithArray_(0, 0, r), t.values_.length;
  },
  reverse: function () {
    return d.trackingDerivation && g(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function () {
    d.trackingDerivation && g(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function (t) {
    var n = this[_],
      r = n.dehanceValues_(n.values_).indexOf(t);
    return r > -1 ? (this.splice(r, 1), !0) : !1;
  },
};
O("at", M);
O("concat", M);
O("flat", M);
O("includes", M);
O("indexOf", M);
O("join", M);
O("lastIndexOf", M);
O("slice", M);
O("toString", M);
O("toLocaleString", M);
O("toSorted", M);
O("toSpliced", M);
O("with", M);
O("every", q);
O("filter", q);
O("find", q);
O("findIndex", q);
O("findLast", q);
O("findLastIndex", q);
O("flatMap", q);
O("forEach", q);
O("map", q);
O("some", q);
O("toReversed", q);
O("reduce", so);
O("reduceRight", so);
function O(e, t) {
  typeof Array.prototype[e] == "function" && (At[e] = t(e));
}
function M(e) {
  return function () {
    var t = this[_];
    t.atom_.reportObserved();
    var n = t.dehanceValues_(t.values_);
    return n[e].apply(n, arguments);
  };
}
function q(e) {
  return function (t, n) {
    var r = this,
      i = this[_];
    i.atom_.reportObserved();
    var o = i.dehanceValues_(i.values_);
    return o[e](function (a, s) {
      return t.call(n, a, s, r);
    });
  };
}
function so(e) {
  return function () {
    var t = this,
      n = this[_];
    n.atom_.reportObserved();
    var r = n.dehanceValues_(n.values_),
      i = arguments[0];
    return (
      (arguments[0] = function (o, a, s) {
        return i(o, a, s, t);
      }),
      r[e].apply(r, arguments)
    );
  };
}
var zs = ve("ObservableArrayAdministration", Rr);
function qt(e) {
  return Mt(e) && zs(e[_]);
}
var Ws = {},
  ne = "add",
  Et = "delete",
  uo = (function () {
    function e(n, r, i) {
      var o = this;
      r === void 0 && (r = de),
        i === void 0 && (i = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[_] = Ws),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = r),
        (this.name_ = i),
        N(Map) || g(18),
        be(function () {
          (o.keysAtom_ = Di("ObservableMap.keys()")),
            (o.data_ = new Map()),
            (o.hasMap_ = new Map()),
            n && o.merge(n);
        });
    }
    var t = e.prototype;
    return (
      (t.has_ = function (r) {
        return this.data_.has(r);
      }),
      (t.has = function (r) {
        var i = this;
        if (!d.trackingDerivation) return this.has_(r);
        var o = this.hasMap_.get(r);
        if (!o) {
          var a = (o = new ce(this.has_(r), Bt, "ObservableMap.key?", !1));
          this.hasMap_.set(r, a),
            ro(a, function () {
              return i.hasMap_.delete(r);
            });
        }
        return o.get();
      }),
      (t.set = function (r, i) {
        var o = this.has_(r);
        if (C(this)) {
          var a = x(this, { type: o ? G : ne, object: this, newValue: i, name: r });
          if (!a) return this;
          i = a.newValue;
        }
        return o ? this.updateValue_(r, i) : this.addValue_(r, i), this;
      }),
      (t.delete = function (r) {
        var i = this;
        if ((this.keysAtom_, C(this))) {
          var o = x(this, { type: Et, object: this, name: r });
          if (!o) return !1;
        }
        if (this.has_(r)) {
          var a = Qe(),
            s = D(this),
            u =
              s || a
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Et,
                    object: this,
                    oldValue: this.data_.get(r).value_,
                    name: r,
                  }
                : null;
          return (
            Y(function () {
              var c;
              i.keysAtom_.reportChanged(), (c = i.hasMap_.get(r)) == null || c.setNewValue_(!1);
              var l = i.data_.get(r);
              l.setNewValue_(void 0), i.data_.delete(r);
            }),
            s && L(this, u),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (r, i) {
        var o = this.data_.get(r);
        if (((i = o.prepareNewValue_(i)), i !== d.UNCHANGED)) {
          var a = Qe(),
            s = D(this),
            u =
              s || a
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: G,
                    object: this,
                    oldValue: o.value_,
                    name: r,
                    newValue: i,
                  }
                : null;
          o.setNewValue_(i), s && L(this, u);
        }
      }),
      (t.addValue_ = function (r, i) {
        var o = this;
        this.keysAtom_,
          Y(function () {
            var c,
              l = new ce(i, o.enhancer_, "ObservableMap.key", !1);
            o.data_.set(r, l),
              (i = l.value_),
              (c = o.hasMap_.get(r)) == null || c.setNewValue_(!0),
              o.keysAtom_.reportChanged();
          });
        var a = Qe(),
          s = D(this),
          u =
            s || a
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: ne,
                  object: this,
                  name: r,
                  newValue: i,
                }
              : null;
        s && L(this, u);
      }),
      (t.get = function (r) {
        return this.has(r)
          ? this.dehanceValue_(this.data_.get(r).get())
          : this.dehanceValue_(void 0);
      }),
      (t.dehanceValue_ = function (r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r;
      }),
      (t.keys = function () {
        return this.keysAtom_.reportObserved(), this.data_.keys();
      }),
      (t.values = function () {
        var r = this,
          i = this.keys();
        return En({
          next: function () {
            var a = i.next(),
              s = a.done,
              u = a.value;
            return { done: s, value: s ? void 0 : r.get(u) };
          },
        });
      }),
      (t.entries = function () {
        var r = this,
          i = this.keys();
        return En({
          next: function () {
            var a = i.next(),
              s = a.done,
              u = a.value;
            return { done: s, value: s ? void 0 : [u, r.get(u)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (r, i) {
        for (var o = me(this), a; !(a = o()).done; ) {
          var s = a.value,
            u = s[0],
            c = s[1];
          r.call(i, c, u, this);
        }
      }),
      (t.merge = function (r) {
        var i = this;
        return (
          pe(r) && (r = new Map(r)),
          Y(function () {
            ie(r)
              ? ha(r).forEach(function (o) {
                  return i.set(o, r[o]);
                })
              : Array.isArray(r)
                ? r.forEach(function (o) {
                    var a = o[0],
                      s = o[1];
                    return i.set(a, s);
                  })
                : Ae(r)
                  ? (da(r) || g(19, r),
                    r.forEach(function (o, a) {
                      return i.set(a, o);
                    }))
                  : r != null && g(20, r);
          }),
          this
        );
      }),
      (t.clear = function () {
        var r = this;
        Y(function () {
          Ki(function () {
            for (var i = me(r.keys()), o; !(o = i()).done; ) {
              var a = o.value;
              r.delete(a);
            }
          });
        });
      }),
      (t.replace = function (r) {
        var i = this;
        return (
          Y(function () {
            for (
              var o = Hs(r), a = new Map(), s = !1, u = me(i.data_.keys()), c;
              !(c = u()).done;

            ) {
              var l = c.value;
              if (!o.has(l)) {
                var f = i.delete(l);
                if (f) s = !0;
                else {
                  var v = i.data_.get(l);
                  a.set(l, v);
                }
              }
            }
            for (var h = me(o.entries()), b; !(b = h()).done; ) {
              var p = b.value,
                m = p[0],
                A = p[1],
                je = i.data_.has(m);
              if ((i.set(m, A), i.data_.has(m))) {
                var Re = i.data_.get(m);
                a.set(m, Re), je || (s = !0);
              }
            }
            if (!s)
              if (i.data_.size !== a.size) i.keysAtom_.reportChanged();
              else
                for (
                  var j = i.data_.keys(), te = a.keys(), ae = j.next(), Cr = te.next();
                  !ae.done;

                ) {
                  if (ae.value !== Cr.value) {
                    i.keysAtom_.reportChanged();
                    break;
                  }
                  (ae = j.next()), (Cr = te.next());
                }
            i.data_ = a;
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
      (t.observe_ = function (r, i) {
        return ut(this, r);
      }),
      (t.intercept_ = function (r) {
        return st(this, r);
      }),
      Ee(e, [
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
  pe = ve("ObservableMap", uo);
function En(e) {
  return (e[Symbol.toStringTag] = "MapIterator"), Mr(e);
}
function Hs(e) {
  if (Ae(e) || pe(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (ie(e)) {
    var t = new Map();
    for (var n in e) t.set(n, e[n]);
    return t;
  } else return g(21, e);
}
var Js = {},
  co = (function () {
    function e(n, r, i) {
      var o = this;
      r === void 0 && (r = de),
        i === void 0 && (i = "ObservableSet"),
        (this.name_ = void 0),
        (this[_] = Js),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = i),
        N(Set) || g(22),
        (this.enhancer_ = function (a, s) {
          return r(a, s, i);
        }),
        be(function () {
          (o.atom_ = Di(o.name_)), n && o.replace(n);
        });
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r;
      }),
      (t.clear = function () {
        var r = this;
        Y(function () {
          Ki(function () {
            for (var i = me(r.data_.values()), o; !(o = i()).done; ) {
              var a = o.value;
              r.delete(a);
            }
          });
        });
      }),
      (t.forEach = function (r, i) {
        for (var o = me(this), a; !(a = o()).done; ) {
          var s = a.value;
          r.call(i, s, s, this);
        }
      }),
      (t.add = function (r) {
        var i = this;
        if ((this.atom_, C(this))) {
          var o = x(this, { type: ne, object: this, newValue: r });
          if (!o) return this;
          r = o.newValue;
        }
        if (!this.has(r)) {
          Y(function () {
            i.data_.add(i.enhancer_(r, void 0)), i.atom_.reportChanged();
          });
          var a = !1,
            s = D(this),
            u =
              s || a
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: ne,
                    object: this,
                    newValue: r,
                  }
                : null;
          s && L(this, u);
        }
        return this;
      }),
      (t.delete = function (r) {
        var i = this;
        if (C(this)) {
          var o = x(this, { type: Et, object: this, oldValue: r });
          if (!o) return !1;
        }
        if (this.has(r)) {
          var a = !1,
            s = D(this),
            u =
              s || a
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Et,
                    object: this,
                    oldValue: r,
                  }
                : null;
          return (
            Y(function () {
              i.atom_.reportChanged(), i.data_.delete(r);
            }),
            s && L(this, u),
            !0
          );
        }
        return !1;
      }),
      (t.has = function (r) {
        return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(r));
      }),
      (t.entries = function () {
        var r = this.values();
        return Pn({
          next: function () {
            var o = r.next(),
              a = o.value,
              s = o.done;
            return s ? { value: void 0, done: s } : { value: [a, a], done: s };
          },
        });
      }),
      (t.keys = function () {
        return this.values();
      }),
      (t.values = function () {
        this.atom_.reportObserved();
        var r = this,
          i = this.data_.values();
        return Pn({
          next: function () {
            var a = i.next(),
              s = a.value,
              u = a.done;
            return u ? { value: void 0, done: u } : { value: r.dehanceValue_(s), done: u };
          },
        });
      }),
      (t.intersection = function (r) {
        if (X(r) && !F(r)) return r.intersection(this);
        var i = new Set(this);
        return i.intersection(r);
      }),
      (t.union = function (r) {
        if (X(r) && !F(r)) return r.union(this);
        var i = new Set(this);
        return i.union(r);
      }),
      (t.difference = function (r) {
        return new Set(this).difference(r);
      }),
      (t.symmetricDifference = function (r) {
        if (X(r) && !F(r)) return r.symmetricDifference(this);
        var i = new Set(this);
        return i.symmetricDifference(r);
      }),
      (t.isSubsetOf = function (r) {
        return new Set(this).isSubsetOf(r);
      }),
      (t.isSupersetOf = function (r) {
        return new Set(this).isSupersetOf(r);
      }),
      (t.isDisjointFrom = function (r) {
        if (X(r) && !F(r)) return r.isDisjointFrom(this);
        var i = new Set(this);
        return i.isDisjointFrom(r);
      }),
      (t.replace = function (r) {
        var i = this;
        return (
          F(r) && (r = new Set(r)),
          Y(function () {
            Array.isArray(r)
              ? (i.clear(),
                r.forEach(function (o) {
                  return i.add(o);
                }))
              : X(r)
                ? (i.clear(),
                  r.forEach(function (o) {
                    return i.add(o);
                  }))
                : r != null && g("Cannot initialize set from " + r);
          }),
          this
        );
      }),
      (t.observe_ = function (r, i) {
        return ut(this, r);
      }),
      (t.intercept_ = function (r) {
        return st(this, r);
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
      Ee(e, [
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
  F = ve("ObservableSet", co);
function Pn(e) {
  return (e[Symbol.toStringTag] = "SetIterator"), Mr(e);
}
var jn = Object.create(null),
  Rn = "remove",
  lo = (function () {
    function e(n, r, i, o) {
      r === void 0 && (r = new Map()),
        o === void 0 && (o = Ua),
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
        (this.target_ = n),
        (this.values_ = r),
        (this.name_ = i),
        (this.defaultAnnotation_ = o),
        (this.keysAtom_ = new oe("ObservableObject.keys")),
        (this.isPlainObject_ = ie(this.target_));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (r) {
        return this.values_.get(r).get();
      }),
      (t.setObservablePropValue_ = function (r, i) {
        var o = this.values_.get(r);
        if (o instanceof k) return o.set(i), !0;
        if (C(this)) {
          var a = x(this, { type: G, object: this.proxy_ || this.target_, name: r, newValue: i });
          if (!a) return null;
          i = a.newValue;
        }
        if (((i = o.prepareNewValue_(i)), i !== d.UNCHANGED)) {
          var s = D(this),
            u = !1,
            c =
              s || u
                ? {
                    type: G,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: o.value_,
                    name: r,
                    newValue: i,
                  }
                : null;
          o.setNewValue_(i), s && L(this, c);
        }
        return !0;
      }),
      (t.get_ = function (r) {
        return d.trackingDerivation && !Z(this.target_, r) && this.has_(r), this.target_[r];
      }),
      (t.set_ = function (r, i, o) {
        return (
          o === void 0 && (o = !1),
          Z(this.target_, r)
            ? this.values_.has(r)
              ? this.setObservablePropValue_(r, i)
              : o
                ? Reflect.set(this.target_, r, i)
                : ((this.target_[r] = i), !0)
            : this.extend_(
                r,
                { value: i, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                o,
              )
        );
      }),
      (t.has_ = function (r) {
        if (!d.trackingDerivation) return r in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var i = this.pendingKeys_.get(r);
        return (
          i ||
            ((i = new ce(r in this.target_, Bt, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(r, i)),
          i.get()
        );
      }),
      (t.make_ = function (r, i) {
        if ((i === !0 && (i = this.defaultAnnotation_), i !== !1)) {
          if (!(r in this.target_)) {
            var o;
            if ((o = this.target_[$]) != null && o[r]) return;
            g(1, i.annotationType_, this.name_ + "." + r.toString());
          }
          for (var a = this.target_; a && a !== Tt; ) {
            var s = gt(a, r);
            if (s) {
              var u = i.make_(this, r, s, a);
              if (u === 0) return;
              if (u === 1) break;
            }
            a = Object.getPrototypeOf(a);
          }
          Mn(this, i, r);
        }
      }),
      (t.extend_ = function (r, i, o, a) {
        if ((a === void 0 && (a = !1), o === !0 && (o = this.defaultAnnotation_), o === !1))
          return this.defineProperty_(r, i, a);
        var s = o.extend_(this, r, i, a);
        return s && Mn(this, o, r), s;
      }),
      (t.defineProperty_ = function (r, i, o) {
        o === void 0 && (o = !1), this.keysAtom_;
        try {
          B();
          var a = this.delete_(r);
          if (!a) return a;
          if (C(this)) {
            var s = x(this, {
              object: this.proxy_ || this.target_,
              name: r,
              type: ne,
              newValue: i.value,
            });
            if (!s) return null;
            var u = s.newValue;
            i.value !== u && (i = fe({}, i, { value: u }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, r, i)) return !1;
          } else V(this.target_, r, i);
          this.notifyPropertyAddition_(r, i.value);
        } finally {
          I();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (r, i, o, a) {
        a === void 0 && (a = !1), this.keysAtom_;
        try {
          B();
          var s = this.delete_(r);
          if (!s) return s;
          if (C(this)) {
            var u = x(this, {
              object: this.proxy_ || this.target_,
              name: r,
              type: ne,
              newValue: i,
            });
            if (!u) return null;
            i = u.newValue;
          }
          var c = Tn(r),
            l = {
              configurable: d.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: c.get,
              set: c.set,
            };
          if (a) {
            if (!Reflect.defineProperty(this.target_, r, l)) return !1;
          } else V(this.target_, r, l);
          var f = new ce(i, o, "ObservableObject.key", !1);
          this.values_.set(r, f), this.notifyPropertyAddition_(r, f.value_);
        } finally {
          I();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (r, i, o) {
        o === void 0 && (o = !1), this.keysAtom_;
        try {
          B();
          var a = this.delete_(r);
          if (!a) return a;
          if (C(this)) {
            var s = x(this, {
              object: this.proxy_ || this.target_,
              name: r,
              type: ne,
              newValue: void 0,
            });
            if (!s) return null;
          }
          i.name || (i.name = "ObservableObject.key"), (i.context = this.proxy_ || this.target_);
          var u = Tn(r),
            c = {
              configurable: d.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: u.get,
              set: u.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, r, c)) return !1;
          } else V(this.target_, r, c);
          this.values_.set(r, new k(i)), this.notifyPropertyAddition_(r, void 0);
        } finally {
          I();
        }
        return !0;
      }),
      (t.delete_ = function (r, i) {
        if ((i === void 0 && (i = !1), this.keysAtom_, !Z(this.target_, r))) return !0;
        if (C(this)) {
          var o = x(this, { object: this.proxy_ || this.target_, name: r, type: Rn });
          if (!o) return null;
        }
        try {
          var a;
          B();
          var s = D(this),
            u = !1,
            c = this.values_.get(r),
            l = void 0;
          if (!c && (s || u)) {
            var f;
            l = (f = gt(this.target_, r)) == null ? void 0 : f.value;
          }
          if (i) {
            if (!Reflect.deleteProperty(this.target_, r)) return !1;
          } else delete this.target_[r];
          if (
            (c && (this.values_.delete(r), c instanceof ce && (l = c.value_), Yi(c)),
            this.keysAtom_.reportChanged(),
            (a = this.pendingKeys_) == null || (a = a.get(r)) == null || a.set(r in this.target_),
            s || u)
          ) {
            var v = {
              type: Rn,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: r,
            };
            s && L(this, v);
          }
        } finally {
          I();
        }
        return !0;
      }),
      (t.observe_ = function (r, i) {
        return ut(this, r);
      }),
      (t.intercept_ = function (r) {
        return st(this, r);
      }),
      (t.notifyPropertyAddition_ = function (r, i) {
        var o,
          a = D(this),
          s = !1;
        if (a || s) {
          var u =
            a || s
              ? {
                  type: ne,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: r,
                  newValue: i,
                }
              : null;
          a && L(this, u);
        }
        (o = this.pendingKeys_) == null || (o = o.get(r)) == null || o.set(!0),
          this.keysAtom_.reportChanged();
      }),
      (t.ownKeys_ = function () {
        return this.keysAtom_.reportObserved(), xt(this.target_);
      }),
      (t.keys_ = function () {
        return this.keysAtom_.reportObserved(), Object.keys(this.target_);
      }),
      e
    );
  })();
function Pe(e, t) {
  var n;
  if (Z(e, _)) return e;
  var r = (n = t == null ? void 0 : t.name) != null ? n : "ObservableObject",
    i = new lo(e, new Map(), String(r), es(t));
  return Ct(e, _, i), e;
}
var Xs = ve("ObservableObjectAdministration", lo);
function Tn(e) {
  return (
    jn[e] ||
    (jn[e] = {
      get: function () {
        return this[_].getObservablePropValue_(e);
      },
      set: function (n) {
        return this[_].setObservablePropValue_(e, n);
      },
    })
  );
}
function Ft(e) {
  return Mt(e) ? Xs(e[_]) : !1;
}
function Mn(e, t, n) {
  var r;
  (r = e.target_[$]) == null || delete r[n];
}
var Ys = ho(0),
  Zs = (function () {
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
  tr = 0,
  fo = function () {};
function Qs(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
Qs(fo, Array.prototype);
var Tr = (function (e) {
  function t(r, i, o, a) {
    var s;
    return (
      o === void 0 && (o = "ObservableArray"),
      a === void 0 && (a = !1),
      (s = e.call(this) || this),
      be(function () {
        var u = new Rr(o, i, a, !0);
        (u.proxy_ = s),
          Ci(s, _, u),
          r && r.length && s.spliceWithArray(0, 0, r),
          Zs && Object.defineProperty(s, "0", Ys);
      }),
      s
    );
  }
  Ii(t, e);
  var n = t.prototype;
  return (
    (n.concat = function () {
      this[_].atom_.reportObserved();
      for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (s) {
          return qt(s) ? s.slice() : s;
        }),
      );
    }),
    (n[Symbol.iterator] = function () {
      var r = this,
        i = 0;
      return Mr({
        next: function () {
          return i < r.length ? { value: r[i++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    Ee(t, [
      {
        key: "length",
        get: function () {
          return this[_].getArrayLength_();
        },
        set: function (i) {
          this[_].setArrayLength_(i);
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
})(fo);
Object.entries(At).forEach(function (e) {
  var t = e[0],
    n = e[1];
  t !== "concat" && Ct(Tr.prototype, t, n);
});
function ho(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[_].get_(e);
    },
    set: function (n) {
      this[_].set_(e, n);
    },
  };
}
function eu(e) {
  V(Tr.prototype, "" + e, ho(e));
}
function vo(e) {
  if (e > tr) {
    for (var t = tr; t < e + 100; t++) eu(t);
    tr = e;
  }
}
vo(1e3);
function tu(e, t, n) {
  return new Tr(e, t, n);
}
function Pt(e, t) {
  if (typeof e == "object" && e !== null) {
    if (qt(e)) return t !== void 0 && g(23), e[_].atom_;
    if (F(e)) return e.atom_;
    if (pe(e)) {
      if (t === void 0) return e.keysAtom_;
      var n = e.data_.get(t) || e.hasMap_.get(t);
      return n || g(25, t, yr(e)), n;
    }
    if (Ft(e)) {
      if (!t) return g(26);
      var r = e[_].values_.get(t);
      return r || g(27, t, yr(e)), r;
    }
    if (Er(e) || kt(e) || St(e)) return e;
  } else if (N(e) && St(e[_])) return e[_];
  g(28);
}
function ru(e, t) {
  if ((e || g(29), Er(e) || kt(e) || St(e) || pe(e) || F(e))) return e;
  if (e[_]) return e[_];
  g(24, e);
}
function yr(e, t) {
  var n;
  if (t !== void 0) n = Pt(e, t);
  else {
    if (tt(e)) return e.name;
    Ft(e) || pe(e) || F(e) ? (n = ru(e)) : (n = Pt(e));
  }
  return n.name_;
}
function be(e) {
  var t = _e(),
    n = Lt(!0);
  B();
  try {
    return e();
  } finally {
    I(), Nt(n), Q(t);
  }
}
var Cn = Tt.toString;
function _o(e, t, n) {
  return n === void 0 && (n = -1), mr(e, t, n);
}
function mr(e, t, n, r, i) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var a = Cn.call(e);
  if (a !== Cn.call(t)) return !1;
  switch (a) {
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
      n >= 0 && n++;
      break;
  }
  (e = xn(e)), (t = xn(t));
  var s = a === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var u = e.constructor,
      c = t.constructor;
    if (
      u !== c &&
      !(N(u) && u instanceof u && N(c) && c instanceof c) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (n === 0) return !1;
  n < 0 && (n = -1), (r = r || []), (i = i || []);
  for (var l = r.length; l--; ) if (r[l] === e) return i[l] === t;
  if ((r.push(e), i.push(t), s)) {
    if (((l = e.length), l !== t.length)) return !1;
    for (; l--; ) if (!mr(e[l], t[l], n - 1, r, i)) return !1;
  } else {
    var f = Object.keys(e),
      v = f.length;
    if (Object.keys(t).length !== v) return !1;
    for (var h = 0; h < v; h++) {
      var b = f[h];
      if (!(Z(t, b) && mr(e[b], t[b], n - 1, r, i))) return !1;
    }
  }
  return r.pop(), i.pop(), !0;
}
function xn(e) {
  return qt(e) ? e.slice() : Ae(e) || pe(e) || X(e) || F(e) ? Array.from(e.entries()) : e;
}
var Bn,
  nu = ((Bn = Rt().Iterator) == null ? void 0 : Bn.prototype) || {};
function Mr(e) {
  return (e[Symbol.iterator] = iu), Object.assign(Object.create(nu), e);
}
function iu() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Rt();
  typeof t[e] > "u" && g("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: ys, extras: { getDebugName: yr }, $mobx: _ });
if (!E.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Vs) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function ou(e) {
  e();
}
function au(e) {
  e || (e = ou), Bs({ reactionScheduler: e });
}
function su(e) {
  return Ds(e);
}
var uu = 1e4,
  cu = 1e4,
  lu = (function () {
    function e(t) {
      var n = this;
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
          value: function (r) {
            r === void 0 && (r = uu), clearTimeout(n.sweepTimeout), (n.sweepTimeout = void 0);
            var i = Date.now();
            n.registrations.forEach(function (o, a) {
              i - o.registeredAt >= r && (n.finalize(o.value), n.registrations.delete(a));
            }),
              n.registrations.size > 0 && n.scheduleSweep();
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            n.sweep(0);
          },
        });
    }
    return (
      Object.defineProperty(e.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t, n, r) {
          this.registrations.set(r, { value: n, registeredAt: Date.now() }), this.scheduleSweep();
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, cu));
        },
      }),
      e
    );
  })(),
  fu = typeof FinalizationRegistry < "u" ? FinalizationRegistry : lu,
  nt = new fu(function (e) {
    var t;
    (t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null);
  }),
  rr = { exports: {} },
  nr = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var In;
function du() {
  if (In) return nr;
  In = 1;
  var e = Sr();
  function t(f, v) {
    return (f === v && (f !== 0 || 1 / f === 1 / v)) || (f !== f && v !== v);
  }
  var n = typeof Object.is == "function" ? Object.is : t,
    r = e.useState,
    i = e.useEffect,
    o = e.useLayoutEffect,
    a = e.useDebugValue;
  function s(f, v) {
    var h = v(),
      b = r({ inst: { value: h, getSnapshot: v } }),
      p = b[0].inst,
      m = b[1];
    return (
      o(
        function () {
          (p.value = h), (p.getSnapshot = v), u(p) && m({ inst: p });
        },
        [f, h, v],
      ),
      i(
        function () {
          return (
            u(p) && m({ inst: p }),
            f(function () {
              u(p) && m({ inst: p });
            })
          );
        },
        [f],
      ),
      a(h),
      h
    );
  }
  function u(f) {
    var v = f.getSnapshot;
    f = f.value;
    try {
      var h = v();
      return !n(f, h);
    } catch {
      return !0;
    }
  }
  function c(f, v) {
    return v();
  }
  var l =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? c
      : s;
  return (
    (nr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l), nr
  );
}
var Dn;
function hu() {
  return Dn || ((Dn = 1), (rr.exports = du())), rr.exports;
}
var vu = hu();
function Ln(e) {
  e.reaction = new K("observer".concat(e.name), function () {
    var t;
    (e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e);
  });
}
function _u(e, t) {
  t === void 0 && (t = "observed");
  var n = sr.useRef(null);
  if (!n.current) {
    var r = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (s) {
        return (
          nt.unregister(r),
          (r.onStoreChange = s),
          r.reaction || (Ln(r), (r.stateVersion = Symbol())),
          function () {
            var u;
            (r.onStoreChange = null),
              (u = r.reaction) === null || u === void 0 || u.dispose(),
              (r.reaction = null);
          }
        );
      },
      getSnapshot: function () {
        return r.stateVersion;
      },
    };
    n.current = r;
  }
  var i = n.current;
  i.reaction || (Ln(i), nt.register(n, i, i)),
    sr.useDebugValue(i.reaction, su),
    vu.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot);
  var o, a;
  if (
    (i.reaction.track(function () {
      try {
        o = e();
      } catch (s) {
        a = s;
      }
    }),
    a)
  )
    throw a;
  return o;
}
var ir,
  or,
  po = typeof Symbol == "function" && Symbol.for,
  pu =
    (or =
      (ir = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || ir === void 0
        ? void 0
        : ir.configurable) !== null && or !== void 0
      ? or
      : !1,
  Nn = po
    ? Symbol.for("react.forward_ref")
    : typeof E.forwardRef == "function" &&
      E.forwardRef(function (e) {
        return null;
      }).$$typeof,
  kn = po
    ? Symbol.for("react.memo")
    : typeof E.memo == "function" &&
      E.memo(function (e) {
        return null;
      }).$$typeof;
function bu(e, t) {
  var n;
  if (kn && e.$$typeof === kn)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var r = (n = void 0) !== null && n !== void 0 ? n : !1,
    i = e,
    o = e.displayName || e.name;
  if (Nn && e.$$typeof === Nn && ((r = !0), (i = e.render), typeof i != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var a = function (s, u) {
    return _u(function () {
      return i(s, u);
    }, o);
  };
  return (
    (a.displayName = e.displayName),
    pu && Object.defineProperty(a, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (a.contextTypes = e.contextTypes),
    r && (a = E.forwardRef(a)),
    (a = E.memo(a)),
    yu(e, a),
    a
  );
}
var gu = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function yu(e, t) {
  Object.keys(e).forEach(function (n) {
    gu[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
  });
}
var ar;
au(Oo.unstable_batchedUpdates);
ar = nt.finalizeAllImmediately;
function mu(e, t) {
  if (qn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (var i = 0; i < n.length; i++)
    if (!Object.hasOwnProperty.call(t, n[i]) || !qn(e[n[i]], t[n[i]])) return !1;
  return !0;
}
function qn(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Fn = Symbol("patchMixins"),
  bo = Symbol("patchedDefinition");
function Ou(e, t) {
  var n = (e[Fn] = e[Fn] || {}),
    r = (n[t] = n[t] || {});
  return (r.locks = r.locks || 0), (r.methods = r.methods || []), r;
}
function $n(e, t) {
  for (var n = this, r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    i[o - 2] = arguments[o];
  t.locks++;
  try {
    var a;
    return e != null && (a = e.apply(this, i)), a;
  } finally {
    t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (s) {
          s.apply(n, i);
        });
  }
}
function Vn(e, t) {
  var n = function () {
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
    $n.call.apply($n, [this, e, t].concat(o));
  };
  return n;
}
function wu(e, t, n) {
  var r = Ou(e, t);
  r.methods.indexOf(n) < 0 && r.methods.push(n);
  var i = Object.getOwnPropertyDescriptor(e, t);
  if (!(i && i[bo])) {
    var o = e[t],
      a = go(e, t, i ? i.enumerable : void 0, r, o);
    Object.defineProperty(e, t, a);
  }
}
function go(e, t, n, r, i) {
  var o,
    a = Vn(i, r);
  return (
    (o = {}),
    (o[bo] = !0),
    (o.get = function () {
      return a;
    }),
    (o.set = function (u) {
      if (this === e) a = Vn(u, r);
      else {
        var c = go(this, t, n, r, u);
        Object.defineProperty(this, t, c);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = n),
    o
  );
}
var Un = Symbol("ObserverAdministration"),
  Gn = Symbol("isMobXReactObserver");
function Or(e) {
  var t;
  return (t = e[Un]) != null
    ? t
    : (e[Un] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: wr(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function Su(e) {
  var t = e.prototype;
  if (e[Gn]) {
    var n = wr(e);
    throw new Error(
      "The provided component class (" +
        n +
        ") has already been declared as an observer component.",
    );
  } else e[Gn] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== E.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Kn;
    else if (t.shouldComponentUpdate !== Kn)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var r = t.render;
  if (typeof r != "function") {
    var i = wr(e);
    throw new Error(
      "[mobx-react] class component (" +
        i +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  t.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: Au.call(this, r),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var a = this,
        s = Or(this);
      return (
        (s.mounted = !0),
        nt.unregister(this),
        (s.forceUpdate = function () {
          return a.forceUpdate();
        }),
        (!s.reaction || s.reactionInvalidatedBeforeMount) && s.forceUpdate(),
        o == null ? void 0 : o.apply(this, arguments)
      );
    }),
    wu(t, "componentWillUnmount", function () {
      var a,
        s = Or(this);
      (a = s.reaction) == null || a.dispose(),
        (s.reaction = null),
        (s.forceUpdate = null),
        (s.mounted = !1),
        (s.reactionInvalidatedBeforeMount = !1);
    }),
    e
  );
}
function wr(e) {
  return e.displayName || e.name || "<component>";
}
function Au(e) {
  var t = e.bind(this),
    n = Or(this);
  function r() {
    n.reaction || ((n.reaction = Eu(n)), n.mounted || nt.register(this, n, this));
    var i = void 0,
      o = void 0;
    if (
      (n.reaction.track(function () {
        try {
          o = ls(!1, t);
        } catch (a) {
          i = a;
        }
      }),
      i)
    )
      throw i;
    return o;
  }
  return r;
}
function Eu(e) {
  return new K(e.name + ".render()", function () {
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
function Kn(e, t) {
  return this.state !== t ? !0 : !mu(this.props, e);
}
function Pu(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(E.Component, e) ||
    Object.prototype.isPrototypeOf.call(E.PureComponent, e)
      ? Su(e)
      : bu(e)
  );
}
sr.version.split(".")[0];
if (!E.Component) throw new Error("mobx-react requires React to be available");
if (!w) throw new Error("mobx-react requires mobx to be available");
async function Ye(e, t, n) {
  await bt.showFlag({
    id: `checklist-${Date.now()}`,
    title: e,
    type: n,
    description: t,
    isAutoDismiss: !0,
  });
}
function ju(e) {
  return new Date(e).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
  });
}
function zn() {
  return S.jsx("div", {
    className: "loading-overlay",
    children: S.jsx("div", { className: "loading-spinner" }),
  });
}
function Ru() {
  const [e, t] = E.useState({
      checkList: "[]",
      issueId: "",
      updatedAt: new Date(),
      updateDisplayName: "",
      updateId: "",
    }),
    [n, r] = E.useState(!0),
    [i, o] = E.useState(!1);
  E.useEffect(() => {
    a();
  }, []);
  const a = async () => {
      try {
        const c = await bt.invoke("getCheckList");
        t(c);
      } catch {
        await Ye(
          "Checklist Loading Error",
          "Unable to load the checklist. Please try again later.",
          "error",
        );
      } finally {
        r(!1);
      }
    },
    s = async (c) => {
      var l;
      try {
        o(!0);
        const f = await bt.invoke(c ? "updateWithOptimisticLocking" : "update", e);
        f.error
          ? f.concurrent
            ? (await Ye(
                "Concurrent Modification Detected",
                `User ${(l = f.data) == null ? void 0 : l.updateDisplayName} has modified the checklist before you. Your changes could not be saved.`,
                "error",
              ),
              await a())
            : await Ye(
                "Update Failed",
                f.message || "Unable to update the checklist. Please try again later.",
                "error",
              )
          : f.data &&
            (t(f.data),
            await Ye(
              "Update Successful",
              "The checklist has been successfully updated",
              "success",
            ));
      } catch {
        await Ye(
          "Update Error",
          "An error occurred while updating the checklist. Please try again later.",
          "error",
        );
      } finally {
        o(!1);
      }
    },
    u = (c) => {
      const l = [...JSON.parse(e.checkList)];
      (l[c] = { ...l[c], done: !l[c].done }), t({ ...e, checkList: JSON.stringify(l) });
    };
  return n
    ? S.jsx("div", { className: "checklist-container", children: S.jsx(zn, {}) })
    : S.jsxs("div", {
        className: "checklist-container",
        children: [
          i && S.jsx(zn, {}),
          S.jsxs("div", {
            className: "checklist-header",
            children: [
              S.jsx("h2", { children: "Issue Checklist" }),
              S.jsxs("div", {
                className: "last-update",
                children: ["Last updated by ", e.updateDisplayName, " on ", ju(e.updatedAt)],
              }),
            ],
          }),
          S.jsx("div", {
            className: "checklist",
            children: JSON.parse(e.checkList).map((c, l) =>
              S.jsxs(
                "div",
                {
                  className: "checklist-item",
                  children: [
                    S.jsx("input", { type: "checkbox", checked: c.done, onChange: () => u(l) }),
                    S.jsx("span", { children: c.label }),
                  ],
                },
                l,
              ),
            ),
          }),
          S.jsxs("div", {
            className: "buttons",
            children: [
              S.jsx("button", { onClick: () => s(!0), children: "Update with Locking" }),
              S.jsx("button", { onClick: () => s(!1), children: "Update without Locking" }),
            ],
          }),
        ],
      });
}
const Tu = Pu(Ru),
  Mu = document.getElementById("root"),
  Cu = wo.createRoot(Mu),
  Wn = () => {
    Cu.render(S.jsx(Tu, {}));
  };
bt.view.theme
  .enable()
  .then(() => {
    Wn();
  })
  .catch((e) => {
    console.error(e.message), Wn();
  });
