import { r as Ot, c as ir } from "./react-dom-vendor-DUDfcWRj.js";
import { g as ar, r as sr } from "./lodash-vendor-CHXXAK2W.js";
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
var se = { exports: {} },
  S = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ie;
function ur() {
  if (Ie) return S;
  Ie = 1;
  var e = Ot(),
    t = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(u, c, s) {
    var l,
      f = {},
      h = null,
      d = null;
    (s !== void 0 && (h = "" + s),
      c.key !== void 0 && (h = "" + c.key),
      c.ref !== void 0 && (d = c.ref));
    for (l in c) o.call(c, l) && !i.hasOwnProperty(l) && (f[l] = c[l]);
    if (u && u.defaultProps) for (l in ((c = u.defaultProps), c)) f[l] === void 0 && (f[l] = c[l]);
    return { $$typeof: t, type: u, key: h, ref: d, props: f, _owner: r.current };
  }
  return ((S.Fragment = n), (S.jsx = a), (S.jsxs = a), S);
}
var Te;
function cr() {
  return (Te || ((Te = 1), (se.exports = ur())), se.exports);
}
var b = cr(),
  te = Ot(),
  ue = {},
  Pe = function (e, t) {
    return (
      (Pe =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, o) {
            n.__proto__ = o;
          }) ||
        function (n, o) {
          for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r]);
        }),
      Pe(e, t)
    );
  };
function Et(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Pe(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var re = function () {
  return (
    (re =
      Object.assign ||
      function (t) {
        for (var n, o = 1, r = arguments.length; o < r; o++) {
          n = arguments[o];
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    re.apply(this, arguments)
  );
};
function Pt(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
        (n[o[r]] = e[o[r]]);
  return n;
}
function Rt(e, t, n, o) {
  var r = arguments.length,
    i = r < 3 ? t : o === null ? (o = Object.getOwnPropertyDescriptor(t, n)) : o,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, t, n, o);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (a = e[u]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
  return (r > 3 && i && Object.defineProperty(t, n, i), i);
}
function jt(e, t) {
  return function (n, o) {
    t(n, o, e);
  };
}
function It(e, t, n, o, r, i) {
  function a(p) {
    if (p !== void 0 && typeof p != "function") throw new TypeError("Function expected");
    return p;
  }
  for (
    var u = o.kind,
      c = u === "getter" ? "get" : u === "setter" ? "set" : "value",
      s = !t && e ? (o.static ? e : e.prototype) : null,
      l = t || (s ? Object.getOwnPropertyDescriptor(s, o.name) : {}),
      f,
      h = !1,
      d = n.length - 1;
    d >= 0;
    d--
  ) {
    var v = {};
    for (var _ in o) v[_] = _ === "access" ? {} : o[_];
    for (var _ in o.access) v.access[_] = o.access[_];
    v.addInitializer = function (p) {
      if (h) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(a(p || null));
    };
    var y = (0, n[d])(u === "accessor" ? { get: l.get, set: l.set } : l[c], v);
    if (u === "accessor") {
      if (y === void 0) continue;
      if (y === null || typeof y != "object") throw new TypeError("Object expected");
      ((f = a(y.get)) && (l.get = f),
        (f = a(y.set)) && (l.set = f),
        (f = a(y.init)) && r.unshift(f));
    } else (f = a(y)) && (u === "field" ? r.unshift(f) : (l[c] = f));
  }
  (s && Object.defineProperty(s, o.name, l), (h = !0));
}
function Tt(e, t, n) {
  for (var o = arguments.length > 2, r = 0; r < t.length; r++)
    n = o ? t[r].call(e, n) : t[r].call(e);
  return o ? n : void 0;
}
function St(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Bt(e, t, n) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: n ? "".concat(n, " ", t) : t })
  );
}
function qt(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Ct(e, t, n, o) {
  function r(i) {
    return i instanceof n
      ? i
      : new n(function (a) {
          a(i);
        });
  }
  return new (n || (n = Promise))(function (i, a) {
    function u(l) {
      try {
        s(o.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(o.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? i(l.value) : r(l.value).then(u, c);
    }
    s((o = o.apply(e, t || [])).next());
  });
}
function kt(e, t) {
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
    (a.next = u(0)),
    (a.throw = u(1)),
    (a.return = u(2)),
    typeof Symbol == "function" &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function u(s) {
    return function (l) {
      return c([s, l]);
    };
  }
  function c(s) {
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
var ie = Object.create
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
function Mt(e, t) {
  for (var n in e) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && ie(t, e, n);
}
function ne(e) {
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
function je(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var o = n.call(e),
    r,
    i = [],
    a;
  try {
    for (; (t === void 0 || t-- > 0) && !(r = o.next()).done; ) i.push(r.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      r && !r.done && (n = o.return) && n.call(o);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}
function At() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(je(arguments[t]));
  return e;
}
function Ft() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var o = Array(e), r = 0, t = 0; t < n; t++)
    for (var i = arguments[t], a = 0, u = i.length; a < u; a++, r++) o[r] = i[a];
  return o;
}
function Lt(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, r = t.length, i; o < r; o++)
      (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), (i[o] = t[o]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function T(e) {
  return this instanceof T ? ((this.v = e), this) : new T(e);
}
function Nt(e, t, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var o = n.apply(e, t || []),
    r,
    i = [];
  return (
    (r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    u("next"),
    u("throw"),
    u("return", a),
    (r[Symbol.asyncIterator] = function () {
      return this;
    }),
    r
  );
  function a(d) {
    return function (v) {
      return Promise.resolve(v).then(d, f);
    };
  }
  function u(d, v) {
    o[d] &&
      ((r[d] = function (_) {
        return new Promise(function (y, p) {
          i.push([d, _, y, p]) > 1 || c(d, _);
        });
      }),
      v && (r[d] = v(r[d])));
  }
  function c(d, v) {
    try {
      s(o[d](v));
    } catch (_) {
      h(i[0][3], _);
    }
  }
  function s(d) {
    d.value instanceof T ? Promise.resolve(d.value.v).then(l, f) : h(i[0][2], d);
  }
  function l(d) {
    c("next", d);
  }
  function f(d) {
    c("throw", d);
  }
  function h(d, v) {
    (d(v), i.shift(), i.length && c(i[0][0], i[0][1]));
  }
}
function Dt(e) {
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
          return (n = !n) ? { value: T(e[r](a)), done: !1 } : i ? i(a) : a;
        }
      : i;
  }
}
function $t(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof ne == "function" ? ne(e) : e[Symbol.iterator]()),
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
        return new Promise(function (u, c) {
          ((a = e[i](a)), r(u, c, a.done, a.value));
        });
      };
  }
  function r(i, a, u, c) {
    Promise.resolve(c).then(function (s) {
      i({ value: s, done: u });
    }, a);
  }
}
function Ut(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var lr = Object.create
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
          var n = [];
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[n.length] = o);
          return n;
        }),
      Re(e)
    );
  };
function Gt(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n = Re(e), o = 0; o < n.length; o++) n[o] !== "default" && ie(t, e, n[o]);
  return (lr(t, e), t);
}
function xt(e) {
  return e && e.__esModule ? e : { default: e };
}
function Vt(e, t, n, o) {
  if (n === "a" && !o) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Ht(e, t, n, o, r) {
  if (o === "m") throw new TypeError("Private method is not writable");
  if (o === "a" && !r) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (o === "a" ? r.call(e, n) : r ? (r.value = n) : t.set(e, n), n);
}
function Wt(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Jt(e, t, n) {
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
var fr =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, n) {
        var o = new Error(n);
        return ((o.name = "SuppressedError"), (o.error = e), (o.suppressed = t), o);
      };
function Kt(e) {
  function t(i) {
    ((e.error = e.hasError ? new fr(i, e.error, "An error was suppressed during disposal.") : i),
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
function zt(e, t) {
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
const dr = {
    __extends: Et,
    __assign: re,
    __rest: Pt,
    __decorate: Rt,
    __param: jt,
    __esDecorate: It,
    __runInitializers: Tt,
    __propKey: St,
    __setFunctionName: Bt,
    __metadata: qt,
    __awaiter: Ct,
    __generator: kt,
    __createBinding: ie,
    __exportStar: Mt,
    __values: ne,
    __read: je,
    __spread: At,
    __spreadArrays: Ft,
    __spreadArray: Lt,
    __await: T,
    __asyncGenerator: Nt,
    __asyncDelegator: Dt,
    __asyncValues: $t,
    __makeTemplateObject: Ut,
    __importStar: Gt,
    __importDefault: xt,
    __classPrivateFieldGet: Vt,
    __classPrivateFieldSet: Ht,
    __classPrivateFieldIn: Wt,
    __addDisposableResource: Jt,
    __disposeResources: Kt,
    __rewriteRelativeImportExtension: zt,
  },
  hr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Jt,
        get __assign() {
          return re;
        },
        __asyncDelegator: Dt,
        __asyncGenerator: Nt,
        __asyncValues: $t,
        __await: T,
        __awaiter: Ct,
        __classPrivateFieldGet: Vt,
        __classPrivateFieldIn: Wt,
        __classPrivateFieldSet: Ht,
        __createBinding: ie,
        __decorate: Rt,
        __disposeResources: Kt,
        __esDecorate: It,
        __exportStar: Mt,
        __extends: Et,
        __generator: kt,
        __importDefault: xt,
        __importStar: Gt,
        __makeTemplateObject: Ut,
        __metadata: qt,
        __param: jt,
        __propKey: St,
        __read: je,
        __rest: Pt,
        __rewriteRelativeImportExtension: zt,
        __runInitializers: Tt,
        __setFunctionName: Bt,
        __spread: At,
        __spreadArray: Lt,
        __spreadArrays: Ft,
        __values: ne,
        default: dr,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  m = ar(hr);
var B = {},
  Se;
function vr() {
  return (
    Se ||
      ((Se = 1),
      Object.defineProperty(B, "__esModule", { value: !0 }),
      (B.NavigationTarget = void 0),
      (B.NavigationTarget = {
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
    B
  );
}
var ce = {},
  le = {},
  q = {},
  C = {},
  Be;
function w() {
  if (Be) return C;
  ((Be = 1), Object.defineProperty(C, "__esModule", { value: !0 }), (C.BridgeAPIError = void 0));
  class e extends Error {}
  return ((C.BridgeAPIError = e), C);
}
var qe;
function g() {
  if (qe) return q;
  ((qe = 1), Object.defineProperty(q, "__esModule", { value: !0 }), (q.getCallBridge = void 0));
  const e = w();
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
  return ((q.getCallBridge = n), q);
}
var k = {},
  Ce;
function Xt() {
  if (Ce) return k;
  ((Ce = 1), Object.defineProperty(k, "__esModule", { value: !0 }), (k.withRateLimiter = void 0));
  const e = w(),
    t = (n, o, r, i) => {
      let a = Date.now(),
        u = 0;
      return async (...c) => {
        const s = Date.now();
        if ((s - a > r && ((a = s), (u = 0)), u >= o))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((u = u + 1), n(...c));
      };
    };
  return ((k.withRateLimiter = t), k);
}
var ke;
function _r() {
  return (
    ke ||
      ((ke = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = g(),
          n = w(),
          o = Xt(),
          r = (0, t.getCallBridge)(),
          i = (c) => {
            if (c && Object.values(c).some((s) => typeof s == "function"))
              throw new n.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          a = (c, s) => {
            if (typeof c != "string") throw new n.BridgeAPIError("functionKey must be a string!");
            return (i(s), r("invoke", { functionKey: c, payload: s }));
          };
        e.invoke = (0, o.withRateLimiter)(
          a,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function u() {
          return e.invoke;
        }
        e.makeInvoke = u;
      })(le)),
    le
  );
}
var Me;
function yr() {
  return (
    Me ||
      ((Me = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), m.__exportStar(_r(), e));
      })(ce)),
    ce
  );
}
var fe = {},
  M = {},
  de = {},
  Ae;
function Yt() {
  return (
    Ae ||
      ((Ae = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = g(),
          n = w(),
          o = Xt(),
          r = 500,
          i = 25,
          a = 1e3 * i;
        (function (f) {
          ((f.REMOTE = "Remote"), (f.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const u = (0, t.getCallBridge)(),
          c = (f) => {
            if (f && Object.values(f).some((h) => typeof h == "function"))
              throw new n.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          s = (f) => async (h) => {
            c(h);
            const d = { ...h, invokeType: `ui-${f.toLowerCase()}-fetch` },
              v = await u("invoke", d),
              { success: _, payload: y, error: p } = v ?? {},
              O = { ...(_ ? y : p) };
            if (O && O.headers)
              for (const ae in O.headers)
                Array.isArray(O.headers[ae]) && (O.headers[ae] = O.headers[ae].join(","));
            return O;
          },
          l = (f) => {
            const h = s(f);
            return (0, o.withRateLimiter)(
              h,
              r,
              a,
              `${f} invocation calls are rate limited at ${r}/${i}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(de)),
    de
  );
}
var Fe;
function br() {
  if (Fe) return M;
  ((Fe = 1), Object.defineProperty(M, "__esModule", { value: !0 }), (M.invokeRemote = void 0));
  const e = Yt(),
    t = (n) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(n);
  return ((M.invokeRemote = t), M);
}
var A = {},
  Le;
function gr() {
  if (Le) return A;
  ((Le = 1), Object.defineProperty(A, "__esModule", { value: !0 }), (A.invokeService = void 0));
  const e = Yt(),
    t = (n) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(n);
  return ((A.invokeService = t), A);
}
var Ne;
function pr() {
  return (
    Ne ||
      ((Ne = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = m;
        (t.__exportStar(br(), e), t.__exportStar(gr(), e));
      })(fe)),
    fe
  );
}
var he = {},
  F = {},
  L = {},
  De;
function wr() {
  if (De) return L;
  ((De = 1), Object.defineProperty(L, "__esModule", { value: !0 }), (L.submit = void 0));
  const e = g(),
    t = w(),
    n = (0, e.getCallBridge)(),
    o = async (r) => {
      if ((await n("submit", r)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((L.submit = o), L);
}
var N = {},
  $e;
function mr() {
  if ($e) return N;
  (($e = 1), Object.defineProperty(N, "__esModule", { value: !0 }), (N.close = void 0));
  const e = g(),
    t = w(),
    n = (0, e.getCallBridge)(),
    o = async (r) => {
      try {
        if ((await n("close", r)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((N.close = o), N);
}
var D = {},
  Ue;
function Or() {
  if (Ue) return D;
  ((Ue = 1), Object.defineProperty(D, "__esModule", { value: !0 }), (D.open = void 0));
  const e = g(),
    t = w(),
    n = (0, e.getCallBridge)(),
    o = async () => {
      try {
        if ((await n("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((D.open = o), D);
}
var $ = {},
  Ge;
function Er() {
  if (Ge) return $;
  ((Ge = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.refresh = void 0));
  const e = g(),
    t = w(),
    n = (0, e.getCallBridge)(),
    o = async (r) => {
      if ((await n("refresh", r)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return (($.refresh = o), $);
}
var U = {},
  xe;
function Pr() {
  if (xe) return U;
  ((xe = 1), Object.defineProperty(U, "__esModule", { value: !0 }), (U.createHistory = void 0));
  const t = (0, g().getCallBridge)(),
    n = async () => {
      const o = await t("createHistory");
      return (
        o.listen((r) => {
          o.location = r;
        }),
        o
      );
    };
  return ((U.createHistory = n), U);
}
var G = {},
  ve = {},
  E = {},
  Ve;
function Zt() {
  return (
    Ve ||
      ((Ve = 1),
      Object.defineProperty(E, "__esModule", { value: !0 }),
      (E.FORGE_SUPPORTED_LOCALE_CODES = E.I18N_BUNDLE_FOLDER_NAME = E.I18N_INFO_FILE_NAME = void 0),
      (E.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (E.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (E.FORGE_SUPPORTED_LOCALE_CODES = [
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
    E
  );
}
var j = {},
  He;
function Rr() {
  if (He) return j;
  ((He = 1),
    Object.defineProperty(j, "__esModule", { value: !0 }),
    (j.TranslationsGetter = j.TranslationGetterError = void 0));
  const e = (o, r) => {
    o.includes(r) || o.push(r);
  };
  class t extends Error {
    constructor(r) {
      (super(r), (this.name = "TranslationGetterError"));
    }
  }
  j.TranslationGetterError = t;
  class n {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(r) {
      this.resourcesAccessor = r;
    }
    async getTranslations(r, i = { fallback: !0 }) {
      const a = await this.getI18nInfoConfig(),
        { fallback: u } = i;
      if (!u) {
        let c;
        return (
          a.locales.includes(r) && (c = await this.getTranslationResource(r)),
          { translations: c ?? null, locale: r }
        );
      }
      for (const c of this.getLocaleLookupOrder(r, a)) {
        const s = await this.getTranslationResource(c);
        if (s) return { translations: s, locale: c };
      }
      return { translations: null, locale: r };
    }
    async getTranslationsByLocaleLookupOrder(r) {
      const i = await this.getI18nInfoConfig(),
        a = this.getLocaleLookupOrder(r, i);
      return await Promise.all(
        a.map(async (u) => {
          const c = await this.getTranslationResource(u);
          return { locale: u, translations: c };
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
      const { locales: a, fallback: u } = i,
        c = [r],
        s = u[r];
      return (
        s && Array.isArray(s) && s.length > 0 && c.push(...s),
        e(c, i.fallback.default),
        c.filter((l) => a.includes(l))
      );
    }
  }
  return ((j.TranslationsGetter = n), j);
}
var x = {},
  _e = {},
  We;
function Qt() {
  return (
    We ||
      ((We = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const n = m.__importDefault(sr()),
          o = (i, a, u) => {
            const c = i[u];
            return c ? (0, e.getTranslationValueFromContent)(c, a) : null;
          };
        e.getTranslationValue = o;
        const r = (i, a) => {
          let u = i[a];
          if (!u) {
            const c = a.split(".");
            c.length > 1 && (u = (0, n.default)(i, c, null));
          }
          return typeof u == "string" ? u : null;
        };
        e.getTranslationValueFromContent = r;
      })(_e)),
    _e
  );
}
var Je;
function jr() {
  if (Je) return x;
  ((Je = 1), Object.defineProperty(x, "__esModule", { value: !0 }), (x.Translator = void 0));
  const e = Qt();
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
  return ((x.Translator = t), x);
}
var V = {},
  Ke;
function Ir() {
  if (Ke) return V;
  ((Ke = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.ensureLocale = void 0));
  const e = Zt(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    n = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    o = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, a) => {
        const [u] = a.split("-");
        return (i[u] || (i[u] = a), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    r = (i) => {
      const a = i.replace("_", "-");
      return t.has(a) ? a : (o[a] ?? n[a] ?? null);
    };
  return ((V.ensureLocale = r), V);
}
var ye = {},
  ze;
function Tr() {
  return (
    ze ||
      ((ze = 1),
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
              f = (h, d) =>
                !t(h) || l.has(h)
                  ? []
                  : (l.add(h),
                    Object.entries(h).flatMap(([v, _]) => {
                      const y = [...d, v];
                      return n(_)
                        ? [{ propertyPath: y, key: _.i18n }]
                        : Array.isArray(_)
                          ? _.flatMap((p) => f(p, y))
                          : f(_, y);
                    }));
            return f(s, []);
          },
          a = (s) =>
            Object.entries(s).flatMap(([l, f]) =>
              !o(l) && !r(l) && f && Array.isArray(f) && f.length > 0 ? f.map((h) => [h, l]) : [],
            );
        e.getI18nSupportedModuleEntries = a;
        const u = (s) => {
          const l = new Set();
          for (const f of (0, e.getI18nSupportedModuleEntries)(s)) {
            const h = i(f[0]);
            for (const { key: d } of h) l.add(d);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = u;
        const c = (s) => {
          const l = [];
          for (const f of (0, e.getI18nSupportedModuleEntries)(s)) {
            const h = i(f[0]);
            for (const d of h) l.push({ moduleName: f[1], ...d });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = c;
      })(ye)),
    ye
  );
}
var be = {},
  Xe;
function Sr() {
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
        const t = m;
        (t.__exportStar(Zt(), e),
          t.__exportStar(Rr(), e),
          t.__exportStar(jr(), e),
          t.__exportStar(Ir(), e));
        var n = Qt();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return n.getTranslationValue;
          },
        });
        var o = Tr();
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
          t.__exportStar(Sr(), e));
      })(ve)),
    ve
  );
}
var Ze;
function Br() {
  if (Ze) return G;
  ((Ze = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.getContext = void 0));
  const e = g(),
    t = er(),
    n = (0, e.getCallBridge)(),
    o = async () => {
      var r;
      const i = await n("getContext"),
        a = i?.locale;
      return (a && (i.locale = (r = (0, t.ensureLocale)(a)) !== null && r !== void 0 ? r : a), i);
    };
  return ((G.getContext = o), G);
}
var H = {},
  Qe;
function qr() {
  if (Qe) return H;
  ((Qe = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.changeWindowTitle = void 0));
  const e = g(),
    t = w(),
    n = (0, e.getCallBridge)(),
    o = async (r) => {
      try {
        await n("changeWindowTitle", r);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((H.changeWindowTitle = o), H);
}
var W = {},
  et;
function Cr() {
  if (et) return W;
  ((et = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.theme = void 0));
  const t = (0, g().getCallBridge)();
  return ((W.theme = { enable: () => t("enableTheming") }), W);
}
var J = {},
  K = {},
  ge = {},
  I = {},
  tt;
function tr() {
  if (tt) return I;
  ((tt = 1),
    Object.defineProperty(I, "__esModule", { value: !0 }),
    (I.blobToBase64 = I.base64ToBlob = void 0));
  const e = (n, o) => {
    if (!n) return null;
    const r = n.includes(";base64") ? n.split(",")[1] : n,
      i = atob(r),
      a = new Array(i.length);
    for (let c = 0; c < i.length; c++) a[c] = i.charCodeAt(c);
    const u = new Uint8Array(a);
    return new Blob([u], { type: o });
  };
  I.base64ToBlob = e;
  const t = (n) =>
    new Promise((o, r) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        o(i.result);
      }),
        (i.onerror = r),
        i.readAsDataURL(n));
    });
  return ((I.blobToBase64 = t), I);
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
          n = (s) => {
            if (
              typeof s != "object" ||
              s === null ||
              Object.prototype.toString.call(s) !== "[object Object]"
            )
              return !1;
            const l = Object.getPrototypeOf(s);
            if (l === null) return !0;
            const f = Object.prototype.hasOwnProperty.call(l, "constructor") && l.constructor;
            return (
              typeof f == "function" &&
              f instanceof f &&
              Function.prototype.call(f) === Function.prototype.call(s)
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
                Object.entries(s).map(async ([f, h]) => [
                  f,
                  await (0, e.serialiseBlobsInPayload)(h),
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
            for (const [f, h] of Object.entries(s)) l[f] = (0, e.deserialiseBlobsInPayload)(h);
            return l;
          }
          return s;
        };
        e.deserialiseBlobsInPayload = a;
        const u = (s) =>
          s instanceof Blob
            ? !0
            : Array.isArray(s)
              ? s.some((l) => (0, e.containsBlobs)(l))
              : s && n(s)
                ? Object.values(s).some((l) => (0, e.containsBlobs)(l))
                : !1;
        e.containsBlobs = u;
        const c = (s) =>
          s && n(s) && "__isBlobData" in s
            ? !0
            : Array.isArray(s)
              ? s.some((l) => (0, e.containsSerialisedBlobs)(l))
              : s && n(s)
                ? Object.values(s).some((l) => (0, e.containsSerialisedBlobs)(l))
                : !1;
        e.containsSerialisedBlobs = c;
      })(ge)),
    ge
  );
}
var nt;
function rr() {
  if (nt) return K;
  ((nt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.events = void 0));
  const e = g(),
    t = kr(),
    n = (0, e.getCallBridge)(),
    o = async (i, a) => {
      let u = a;
      return (
        (0, t.containsBlobs)(a) && (u = await (0, t.serialiseBlobsInPayload)(a)),
        n("emit", { event: i, payload: u })
      );
    },
    r = (i, a) =>
      n("on", {
        event: i,
        callback: (c) => {
          let s = c;
          return (
            (0, t.containsSerialisedBlobs)(c) && (s = (0, t.deserialiseBlobsInPayload)(c)),
            a(s)
          );
        },
      });
  return ((K.events = { emit: o, on: r }), K);
}
var ot;
function Mr() {
  if (ot) return J;
  ((ot = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.emitReadyEvent = void 0));
  const e = rr(),
    t = nr(),
    n = "EXTENSION_READY",
    o = async () => {
      const r = await t.view.getContext();
      await e.events.emit(n, { localId: r.localId });
    };
  return ((J.emitReadyEvent = o), J);
}
var it;
function nr() {
  if (it) return F;
  ((it = 1), Object.defineProperty(F, "__esModule", { value: !0 }), (F.view = void 0));
  const e = wr(),
    t = mr(),
    n = Or(),
    o = Er(),
    r = Pr(),
    i = Br(),
    a = qr(),
    u = Cr(),
    c = Mr();
  return (
    (F.view = {
      submit: e.submit,
      close: t.close,
      open: n.open,
      refresh: o.refresh,
      createHistory: r.createHistory,
      getContext: i.getContext,
      theme: u.theme,
      changeWindowTitle: a.changeWindowTitle,
      emitReadyEvent: c.emitReadyEvent,
    }),
    F
  );
}
var at;
function or() {
  return (
    at ||
      ((at = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), m.__exportStar(nr(), e));
      })(he)),
    he
  );
}
var pe = {},
  z = {},
  st;
function Ar() {
  if (st) return z;
  ((st = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.router = void 0));
  const t = (0, g().getCallBridge)(),
    n = async (a) => {
      if (!a?.target) throw new Error("target is required for getUrl");
      const u = await t("getUrl", a);
      if (!u) throw new Error("Failed to get URL");
      try {
        return new URL(u);
      } catch (c) {
        throw new Error(`Failed to parse URL: ${u} (${c})`);
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
  return ((z.router = { getUrl: n, navigate: o, open: r, reload: i }), z);
}
var ut;
function Fr() {
  return (
    ut ||
      ((ut = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), m.__exportStar(Ar(), e));
      })(pe)),
    pe
  );
}
var we = {},
  X = {},
  ct;
function Lr() {
  if (ct) return X;
  ((ct = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.Modal = void 0));
  const e = g(),
    t = w(),
    n = (0, e.getCallBridge)(),
    o = () => {};
  class r {
    constructor(a) {
      var u, c;
      ((this.resource = a?.resource || null),
        (this.onClose = a?.onClose || o),
        (this.size = a?.size || "medium"),
        (this.context = a?.context || {}),
        (this.closeOnEscape = (u = a?.closeOnEscape) !== null && u !== void 0 ? u : !0),
        (this.closeOnOverlayClick =
          (c = a?.closeOnOverlayClick) !== null && c !== void 0 ? c : !0));
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
  return ((X.Modal = r), X);
}
var lt;
function Nr() {
  return (
    lt ||
      ((lt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), m.__exportStar(Lr(), e));
      })(we)),
    we
  );
}
var P = {},
  Y = {},
  ft;
function Dr() {
  if (ft) return Y;
  ((ft = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.productFetchApi = void 0));
  const e = tr(),
    t = async (r) => {
      const i = {};
      for (const [a, u] of r.entries())
        if (a === "file") {
          const c = u.name,
            s = u.type;
          ((i.file = await (0, e.blobToBase64)(u)), (i.__fileName = c), (i.__fileType = s));
        } else i[a] = u;
      return JSON.stringify(i);
    },
    n = async (r) => {
      const i = r?.body instanceof FormData,
        a = i ? await t(r?.body) : r?.body,
        u = new Request("", { body: a, method: r?.method, headers: r?.headers }),
        c = Object.fromEntries(u.headers.entries());
      return {
        body: u.method !== "GET" ? await u.text() : null,
        headers: new Headers(c),
        isMultipartFormData: i,
      };
    },
    o = (r) => {
      const i = async (a, u, c) => {
        const { body: s, headers: l, isMultipartFormData: f } = await n(c);
        l.has("X-Atlassian-Token") || l.set("X-Atlassian-Token", "no-check");
        const h = {
            product: a,
            restPath: u,
            fetchRequestInit: { ...c, body: s, headers: [...l.entries()] },
            isMultipartFormData: f,
          },
          {
            body: d,
            headers: v,
            statusText: _,
            status: y,
            isAttachment: p,
          } = await r("fetchProduct", h),
          O = p ? (0, e.base64ToBlob)(d, v["content-type"]) : d;
        return new Response(O || null, { headers: v, status: y, statusText: _ });
      };
      return {
        requestConfluence: (a, u) => i("confluence", a, u),
        requestJira: (a, u) => i("jira", a, u),
        requestBitbucket: (a, u) => i("bitbucket", a, u),
      };
    };
  return ((Y.productFetchApi = o), Y);
}
var dt;
function $r() {
  if (dt) return P;
  dt = 1;
  var e;
  (Object.defineProperty(P, "__esModule", { value: !0 }),
    (P.requestBitbucket = P.requestJira = P.requestConfluence = void 0));
  const t = g();
  return (
    (e = (0, Dr().productFetchApi)((0, t.getCallBridge)())),
    (P.requestConfluence = e.requestConfluence),
    (P.requestJira = e.requestJira),
    (P.requestBitbucket = e.requestBitbucket),
    P
  );
}
var me = {},
  Z = {},
  ht;
function Ur() {
  if (ht) return Z;
  ((ht = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.showFlag = void 0));
  const e = g(),
    t = w(),
    n = (0, e.getCallBridge)(),
    o = (r) => {
      var i;
      if (!r.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const a = n("showFlag", { ...r, type: (i = r.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await a, n("closeFlag", { id: r.id })) };
    };
  return ((Z.showFlag = o), Z);
}
var vt;
function Gr() {
  return (
    vt ||
      ((vt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = Ur();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(me)),
    me
  );
}
var Oe = {},
  _t;
function xr() {
  return (
    _t ||
      ((_t = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), m.__exportStar(rr(), e));
      })(Oe)),
    Oe
  );
}
var Ee = {},
  Q = {},
  yt;
function Vr() {
  if (yt) return Q;
  ((yt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.realtime = void 0));
  const t = (0, g().getCallBridge)(),
    n = (a, u, c) => t("publishRealtimeChannel", { channelName: a, eventPayload: u, options: c }),
    o = (a, u, c) => t("subscribeRealtimeChannel", { channelName: a, onEvent: u, options: c }),
    r = (a, u, c) =>
      t("publishRealtimeChannel", { channelName: a, eventPayload: u, options: c, isGlobal: !0 }),
    i = (a, u, c) =>
      t("subscribeRealtimeChannel", { channelName: a, onEvent: u, options: c, isGlobal: !0 });
  return ((Q.realtime = { publish: n, subscribe: o, publishGlobal: r, subscribeGlobal: i }), Q);
}
var bt;
function Hr() {
  return (
    bt ||
      ((bt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), m.__exportStar(Vr(), e));
      })(Ee)),
    Ee
  );
}
var R = {},
  gt;
function Wr() {
  if (gt) return R;
  ((gt = 1),
    Object.defineProperty(R, "__esModule", { value: !0 }),
    (R.createTranslationFunction = R.getTranslations = R.resetTranslationsCache = void 0));
  const e = er(),
    t = or(),
    n = {
      getI18nInfoConfig: async () => {
        const u = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!u.ok) throw new Error("Failed to get i18n info config: " + u.statusText);
        return (await u.json()).config;
      },
      getTranslationResource: async (u) => {
        const c = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${u}.json`);
        if (!c.ok) throw new Error(`Failed to get translation resource for locale: ${u}`);
        return c.json();
      },
    },
    o = new e.TranslationsGetter(n),
    r = () => {
      o.reset();
    };
  R.resetTranslationsCache = r;
  const i = async (u = null, c = { fallback: !0 }) => {
    let s = u;
    return (s || (s = (await t.view.getContext()).locale), await o.getTranslations(s, c));
  };
  R.getTranslations = i;
  const a = async (u = null) => {
    let c = u;
    c || (c = (await t.view.getContext()).locale);
    const s = new e.Translator(c, o);
    return (
      await s.init(),
      (l, f) => {
        var h, d;
        return (d = (h = s.translate(l)) !== null && h !== void 0 ? h : f) !== null && d !== void 0
          ? d
          : l;
      }
    );
  };
  return ((R.createTranslationFunction = a), R);
}
var pt;
function Jr() {
  return (
    pt ||
      ((pt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = m;
        var n = vr();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return n.NavigationTarget;
          },
        }),
          t.__exportStar(yr(), e),
          t.__exportStar(pr(), e),
          t.__exportStar(or(), e),
          t.__exportStar(Fr(), e),
          t.__exportStar(Nr(), e),
          t.__exportStar($r(), e),
          t.__exportStar(Gr(), e),
          t.__exportStar(xr(), e),
          t.__exportStar(Hr(), e),
          (e.i18n = t.__importStar(Wr())));
      })(ue)),
    ue
  );
}
var oe = Jr();
async function ee(e, t, n) {
  await oe.showFlag({
    id: `checklist-${Date.now()}`,
    title: e,
    type: n,
    description: t,
    isAutoDismiss: !0,
  });
}
function Kr(e) {
  return new Date(e).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
  });
}
function wt() {
  return b.jsx("div", {
    className: "loading-overlay",
    children: b.jsx("div", { className: "loading-spinner" }),
  });
}
function zr() {
  const [e, t] = te.useState({
      checkList: "[]",
      issueId: "",
      updatedAt: new Date(),
      updateDisplayName: "",
      updateId: "",
    }),
    [n, o] = te.useState(!0),
    [r, i] = te.useState(!1);
  te.useEffect(() => {
    a();
  }, []);
  const a = async () => {
      try {
        const s = await oe.invoke("getCheckList");
        t(s);
      } catch {
        await ee(
          "Checklist Loading Error",
          "Unable to load the checklist. Please try again later.",
          "error",
        );
      } finally {
        o(!1);
      }
    },
    u = async (s) => {
      try {
        i(!0);
        const l = await oe.invoke(s ? "updateWithOptimisticLocking" : "update", e);
        l.error
          ? l.concurrent
            ? (await ee(
                "Concurrent Modification Detected",
                `User ${l.data?.updateDisplayName} has modified the checklist before you. Your changes could not be saved.`,
                "error",
              ),
              await a())
            : await ee(
                "Update Failed",
                l.message || "Unable to update the checklist. Please try again later.",
                "error",
              )
          : l.data &&
            (t(l.data),
            await ee(
              "Update Successful",
              "The checklist has been successfully updated",
              "success",
            ));
      } catch {
        await ee(
          "Update Error",
          "An error occurred while updating the checklist. Please try again later.",
          "error",
        );
      } finally {
        i(!1);
      }
    },
    c = (s) => {
      const l = [...JSON.parse(e.checkList)];
      ((l[s] = { ...l[s], done: !l[s].done }), t({ ...e, checkList: JSON.stringify(l) }));
    };
  return n
    ? b.jsx("div", { className: "checklist-container", children: b.jsx(wt, {}) })
    : b.jsxs("div", {
        className: "checklist-container",
        children: [
          r && b.jsx(wt, {}),
          b.jsxs("div", {
            className: "checklist-header",
            children: [
              b.jsx("h2", { children: "Issue Checklist" }),
              b.jsxs("div", {
                className: "last-update",
                children: ["Last updated by ", e.updateDisplayName, " on ", Kr(e.updatedAt)],
              }),
            ],
          }),
          b.jsx("div", {
            className: "checklist",
            children: JSON.parse(e.checkList).map((s, l) =>
              b.jsxs(
                "div",
                {
                  className: "checklist-item",
                  children: [
                    b.jsx("input", { type: "checkbox", checked: s.done, onChange: () => c(l) }),
                    b.jsx("span", { children: s.label }),
                  ],
                },
                l,
              ),
            ),
          }),
          b.jsxs("div", {
            className: "buttons",
            children: [
              b.jsx("button", { onClick: () => u(!0), children: "Update with Locking" }),
              b.jsx("button", { onClick: () => u(!1), children: "Update without Locking" }),
            ],
          }),
        ],
      });
}
const Xr = document.getElementById("root"),
  Yr = ir.createRoot(Xr),
  mt = () => {
    Yr.render(b.jsx(zr, {}));
  };
oe.view.theme
  .enable()
  .then(() => {
    mt();
  })
  .catch((e) => {
    (console.error(e.message), mt());
  });
