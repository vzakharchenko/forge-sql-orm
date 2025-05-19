var Kt = Object.defineProperty;
var Jt = (e, t, s) =>
  t in e ? Kt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s);
var I = (e, t, s) => Jt(e, typeof t != "symbol" ? t + "" : t, s);
import { r as dt, c as Xt } from "./react-dom-vendor-CSB7S32g.js";
import { g as Yt, r as Zt } from "./lodash-vendor-rseMP-CI.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const n of r)
      if (n.type === "childList")
        for (const a of n.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && o(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(r) {
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
    const n = s(r);
    fetch(r.href, n);
  }
})();
var se = { exports: {} },
  B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var je;
function Qt() {
  if (je) return B;
  je = 1;
  var e = dt(),
    t = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(i, u, c) {
    var l,
      f = {},
      _ = null,
      d = null;
    c !== void 0 && (_ = "" + c),
      u.key !== void 0 && (_ = "" + u.key),
      u.ref !== void 0 && (d = u.ref);
    for (l in u) o.call(u, l) && !n.hasOwnProperty(l) && (f[l] = u[l]);
    if (i && i.defaultProps) for (l in ((u = i.defaultProps), u)) f[l] === void 0 && (f[l] = u[l]);
    return { $$typeof: t, type: i, key: _, ref: d, props: f, _owner: r.current };
  }
  return (B.Fragment = s), (B.jsx = a), (B.jsxs = a), B;
}
var Ee;
function er() {
  return Ee || ((Ee = 1), (se.exports = Qt())), se.exports;
}
var h = er(),
  O = dt(),
  ae = {},
  pe = function (e, t) {
    return (
      (pe =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (s, o) {
            s.__proto__ = o;
          }) ||
        function (s, o) {
          for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (s[r] = o[r]);
        }),
      pe(e, t)
    );
  };
function ft(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  pe(e, t);
  function s() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((s.prototype = t.prototype), new s());
}
var re = function () {
  return (
    (re =
      Object.assign ||
      function (t) {
        for (var s, o = 1, r = arguments.length; o < r; o++) {
          s = arguments[o];
          for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
        }
        return t;
      }),
    re.apply(this, arguments)
  );
};
function ht(e, t) {
  var s = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
        (s[o[r]] = e[o[r]]);
  return s;
}
function _t(e, t, s, o) {
  var r = arguments.length,
    n = r < 3 ? t : o === null ? (o = Object.getOwnPropertyDescriptor(t, s)) : o,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, s, o);
  else
    for (var i = e.length - 1; i >= 0; i--)
      (a = e[i]) && (n = (r < 3 ? a(n) : r > 3 ? a(t, s, n) : a(t, s)) || n);
  return r > 3 && n && Object.defineProperty(t, s, n), n;
}
function yt(e, t) {
  return function (s, o) {
    t(s, o, e);
  };
}
function gt(e, t, s, o, r, n) {
  function a(m) {
    if (m !== void 0 && typeof m != "function") throw new TypeError("Function expected");
    return m;
  }
  for (
    var i = o.kind,
      u = i === "getter" ? "get" : i === "setter" ? "set" : "value",
      c = !t && e ? (o.static ? e : e.prototype) : null,
      l = t || (c ? Object.getOwnPropertyDescriptor(c, o.name) : {}),
      f,
      _ = !1,
      d = s.length - 1;
    d >= 0;
    d--
  ) {
    var g = {};
    for (var v in o) g[v] = v === "access" ? {} : o[v];
    for (var v in o.access) g.access[v] = o.access[v];
    g.addInitializer = function (m) {
      if (_) throw new TypeError("Cannot add initializers after decoration has completed");
      n.push(a(m || null));
    };
    var p = (0, s[d])(i === "accessor" ? { get: l.get, set: l.set } : l[u], g);
    if (i === "accessor") {
      if (p === void 0) continue;
      if (p === null || typeof p != "object") throw new TypeError("Object expected");
      (f = a(p.get)) && (l.get = f), (f = a(p.set)) && (l.set = f), (f = a(p.init)) && r.unshift(f);
    } else (f = a(p)) && (i === "field" ? r.unshift(f) : (l[u] = f));
  }
  c && Object.defineProperty(c, o.name, l), (_ = !0);
}
function vt(e, t, s) {
  for (var o = arguments.length > 2, r = 0; r < t.length; r++)
    s = o ? t[r].call(e, s) : t[r].call(e);
  return o ? s : void 0;
}
function pt(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function bt(e, t, s) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: s ? "".concat(s, " ", t) : t })
  );
}
function mt(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function wt(e, t, s, o) {
  function r(n) {
    return n instanceof s
      ? n
      : new s(function (a) {
          a(n);
        });
  }
  return new (s || (s = Promise))(function (n, a) {
    function i(l) {
      try {
        c(o.next(l));
      } catch (f) {
        a(f);
      }
    }
    function u(l) {
      try {
        c(o.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      l.done ? n(l.value) : r(l.value).then(i, u);
    }
    c((o = o.apply(e, t || [])).next());
  });
}
function Ot(e, t) {
  var s = {
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
    a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (a.next = i(0)),
    (a.throw = i(1)),
    (a.return = i(2)),
    typeof Symbol == "function" &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function i(c) {
    return function (l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (o) throw new TypeError("Generator is already executing.");
    for (; a && ((a = 0), c[0] && (s = 0)), s; )
      try {
        if (
          ((o = 1),
          r &&
            (n =
              c[0] & 2 ? r.return : c[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) &&
            !(n = n.call(r, c[1])).done)
        )
          return n;
        switch (((r = 0), n && (c = [c[0] & 2, n.value]), c[0])) {
          case 0:
          case 1:
            n = c;
            break;
          case 4:
            return s.label++, { value: c[1], done: !1 };
          case 5:
            s.label++, (r = c[1]), (c = [0]);
            continue;
          case 7:
            (c = s.ops.pop()), s.trys.pop();
            continue;
          default:
            if (
              ((n = s.trys), !(n = n.length > 0 && n[n.length - 1]) && (c[0] === 6 || c[0] === 2))
            ) {
              s = 0;
              continue;
            }
            if (c[0] === 3 && (!n || (c[1] > n[0] && c[1] < n[3]))) {
              s.label = c[1];
              break;
            }
            if (c[0] === 6 && s.label < n[1]) {
              (s.label = n[1]), (n = c);
              break;
            }
            if (n && s.label < n[2]) {
              (s.label = n[2]), s.ops.push(c);
              break;
            }
            n[2] && s.ops.pop(), s.trys.pop();
            continue;
        }
        c = t.call(e, s);
      } catch (l) {
        (c = [6, l]), (r = 0);
      } finally {
        o = n = 0;
      }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
var oe = Object.create
  ? function (e, t, s, o) {
      o === void 0 && (o = s);
      var r = Object.getOwnPropertyDescriptor(t, s);
      (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) &&
        (r = {
          enumerable: !0,
          get: function () {
            return t[s];
          },
        }),
        Object.defineProperty(e, o, r);
    }
  : function (e, t, s, o) {
      o === void 0 && (o = s), (e[o] = t[s]);
    };
function jt(e, t) {
  for (var s in e) s !== "default" && !Object.prototype.hasOwnProperty.call(t, s) && oe(t, e, s);
}
function ne(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    s = t && e[t],
    o = 0;
  if (s) return s.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e };
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function me(e, t) {
  var s = typeof Symbol == "function" && e[Symbol.iterator];
  if (!s) return e;
  var o = s.call(e),
    r,
    n = [],
    a;
  try {
    for (; (t === void 0 || t-- > 0) && !(r = o.next()).done; ) n.push(r.value);
  } catch (i) {
    a = { error: i };
  } finally {
    try {
      r && !r.done && (s = o.return) && s.call(o);
    } finally {
      if (a) throw a.error;
    }
  }
  return n;
}
function Et() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(me(arguments[t]));
  return e;
}
function Pt() {
  for (var e = 0, t = 0, s = arguments.length; t < s; t++) e += arguments[t].length;
  for (var o = Array(e), r = 0, t = 0; t < s; t++)
    for (var n = arguments[t], a = 0, i = n.length; a < i; a++, r++) o[r] = n[a];
  return o;
}
function Tt(e, t, s) {
  if (s || arguments.length === 2)
    for (var o = 0, r = t.length, n; o < r; o++)
      (n || !(o in t)) && (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
  return e.concat(n || Array.prototype.slice.call(t));
}
function M(e) {
  return this instanceof M ? ((this.v = e), this) : new M(e);
}
function Rt(e, t, s) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var o = s.apply(e, t || []),
    r,
    n = [];
  return (
    (r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    i("next"),
    i("throw"),
    i("return", a),
    (r[Symbol.asyncIterator] = function () {
      return this;
    }),
    r
  );
  function a(d) {
    return function (g) {
      return Promise.resolve(g).then(d, f);
    };
  }
  function i(d, g) {
    o[d] &&
      ((r[d] = function (v) {
        return new Promise(function (p, m) {
          n.push([d, v, p, m]) > 1 || u(d, v);
        });
      }),
      g && (r[d] = g(r[d])));
  }
  function u(d, g) {
    try {
      c(o[d](g));
    } catch (v) {
      _(n[0][3], v);
    }
  }
  function c(d) {
    d.value instanceof M ? Promise.resolve(d.value.v).then(l, f) : _(n[0][2], d);
  }
  function l(d) {
    u("next", d);
  }
  function f(d) {
    u("throw", d);
  }
  function _(d, g) {
    d(g), n.shift(), n.length && u(n[0][0], n[0][1]);
  }
}
function St(e) {
  var t, s;
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
      ? function (a) {
          return (s = !s) ? { value: M(e[r](a)), done: !1 } : n ? n(a) : a;
        }
      : n;
  }
}
function It(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    s;
  return t
    ? t.call(e)
    : ((e = typeof ne == "function" ? ne(e) : e[Symbol.iterator]()),
      (s = {}),
      o("next"),
      o("throw"),
      o("return"),
      (s[Symbol.asyncIterator] = function () {
        return this;
      }),
      s);
  function o(n) {
    s[n] =
      e[n] &&
      function (a) {
        return new Promise(function (i, u) {
          (a = e[n](a)), r(i, u, a.done, a.value);
        });
      };
  }
  function r(n, a, i, u) {
    Promise.resolve(u).then(function (c) {
      n({ value: c, done: i });
    }, a);
  }
}
function Ct(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
}
var tr = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  be = function (e) {
    return (
      (be =
        Object.getOwnPropertyNames ||
        function (t) {
          var s = [];
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (s[s.length] = o);
          return s;
        }),
      be(e)
    );
  };
function qt(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var s = be(e), o = 0; o < s.length; o++) s[o] !== "default" && oe(t, e, s[o]);
  return tr(t, e), t;
}
function Mt(e) {
  return e && e.__esModule ? e : { default: e };
}
function Bt(e, t, s, o) {
  if (s === "a" && !o) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return s === "m" ? o : s === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Ft(e, t, s, o, r) {
  if (o === "m") throw new TypeError("Private method is not writable");
  if (o === "a" && !r) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return o === "a" ? r.call(e, s) : r ? (r.value = s) : t.set(e, s), s;
}
function At(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function xt(e, t, s) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var o, r;
    if (s) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      o = t[Symbol.asyncDispose];
    }
    if (o === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      (o = t[Symbol.dispose]), s && (r = o);
    }
    if (typeof o != "function") throw new TypeError("Object not disposable.");
    r &&
      (o = function () {
        try {
          r.call(this);
        } catch (n) {
          return Promise.reject(n);
        }
      }),
      e.stack.push({ value: t, dispose: o, async: s });
  } else s && e.stack.push({ async: !0 });
  return t;
}
var rr =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, s) {
        var o = new Error(s);
        return (o.name = "SuppressedError"), (o.error = e), (o.suppressed = t), o;
      };
function Nt(e) {
  function t(n) {
    (e.error = e.hasError ? new rr(n, e.error, "An error was suppressed during disposal.") : n),
      (e.hasError = !0);
  }
  var s,
    o = 0;
  function r() {
    for (; (s = e.stack.pop()); )
      try {
        if (!s.async && o === 1) return (o = 0), e.stack.push(s), Promise.resolve().then(r);
        if (s.dispose) {
          var n = s.dispose.call(s.value);
          if (s.async)
            return (
              (o |= 2),
              Promise.resolve(n).then(r, function (a) {
                return t(a), r();
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
function Lt(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (s, o, r, n, a) {
        return o
          ? t
            ? ".jsx"
            : ".js"
          : r && (!n || !a)
            ? s
            : r + n + "." + a.toLowerCase() + "js";
      })
    : e;
}
const nr = {
    __extends: ft,
    __assign: re,
    __rest: ht,
    __decorate: _t,
    __param: yt,
    __esDecorate: gt,
    __runInitializers: vt,
    __propKey: pt,
    __setFunctionName: bt,
    __metadata: mt,
    __awaiter: wt,
    __generator: Ot,
    __createBinding: oe,
    __exportStar: jt,
    __values: ne,
    __read: me,
    __spread: Et,
    __spreadArrays: Pt,
    __spreadArray: Tt,
    __await: M,
    __asyncGenerator: Rt,
    __asyncDelegator: St,
    __asyncValues: It,
    __makeTemplateObject: Ct,
    __importStar: qt,
    __importDefault: Mt,
    __classPrivateFieldGet: Bt,
    __classPrivateFieldSet: Ft,
    __classPrivateFieldIn: At,
    __addDisposableResource: xt,
    __disposeResources: Nt,
    __rewriteRelativeImportExtension: Lt,
  },
  or = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: xt,
        get __assign() {
          return re;
        },
        __asyncDelegator: St,
        __asyncGenerator: Rt,
        __asyncValues: It,
        __await: M,
        __awaiter: wt,
        __classPrivateFieldGet: Bt,
        __classPrivateFieldIn: At,
        __classPrivateFieldSet: Ft,
        __createBinding: oe,
        __decorate: _t,
        __disposeResources: Nt,
        __esDecorate: gt,
        __exportStar: jt,
        __extends: ft,
        __generator: Ot,
        __importDefault: Mt,
        __importStar: qt,
        __makeTemplateObject: Ct,
        __metadata: mt,
        __param: yt,
        __propKey: pt,
        __read: me,
        __rest: ht,
        __rewriteRelativeImportExtension: Lt,
        __runInitializers: vt,
        __setFunctionName: bt,
        __spread: Et,
        __spreadArray: Tt,
        __spreadArrays: Pt,
        __values: ne,
        default: nr,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  R = Yt(or);
var F = {},
  Pe;
function sr() {
  return (
    Pe ||
      ((Pe = 1),
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
var ie = {},
  A = {},
  x = {},
  N = {},
  Te;
function j() {
  if (Te) return N;
  (Te = 1), Object.defineProperty(N, "__esModule", { value: !0 }), (N.BridgeAPIError = void 0);
  class e extends Error {}
  return (N.BridgeAPIError = e), N;
}
var Re;
function w() {
  if (Re) return x;
  (Re = 1), Object.defineProperty(x, "__esModule", { value: !0 }), (x.getCallBridge = void 0);
  const e = j();
  function t(o) {
    return !!(o != null && o.callBridge);
  }
  const s = () => {
    if (!t(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return (x.getCallBridge = s), x;
}
var L = {},
  Se;
function kt() {
  if (Se) return L;
  (Se = 1), Object.defineProperty(L, "__esModule", { value: !0 }), (L.withRateLimiter = void 0);
  const e = j(),
    t = (s, o, r, n) => {
      let a = Date.now(),
        i = 0;
      return async (...u) => {
        const c = Date.now();
        if ((c - a > r && ((a = c), (i = 0)), i >= o))
          throw new e.BridgeAPIError(n || "Too many invocations.");
        return (i = i + 1), s(...u);
      };
    };
  return (L.withRateLimiter = t), L;
}
var Ie;
function ar() {
  if (Ie) return A;
  (Ie = 1), Object.defineProperty(A, "__esModule", { value: !0 }), (A.invoke = void 0);
  const e = w(),
    t = j(),
    s = kt(),
    o = (0, e.getCallBridge)(),
    r = (a) => {
      if (a && Object.values(a).some((i) => typeof i == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    n = (a, i) => {
      if (typeof a != "string") throw new t.BridgeAPIError("functionKey must be a string!");
      return r(i), o("invoke", { functionKey: a, payload: i });
    };
  return (
    (A.invoke = (0, s.withRateLimiter)(
      n,
      500,
      1e3 * 25,
      "Resolver calls are rate limited at 500req/25s",
    )),
    A
  );
}
var Ce;
function ir() {
  return (
    Ce ||
      ((Ce = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), R.__exportStar(ar(), e);
      })(ie)),
    ie
  );
}
var ce = {},
  k = {},
  qe;
function cr() {
  if (qe) return k;
  (qe = 1), Object.defineProperty(k, "__esModule", { value: !0 }), (k.invokeRemote = void 0);
  const e = w(),
    t = j(),
    s = kt(),
    o = 500,
    r = 1e3 * 25,
    n = (0, e.getCallBridge)(),
    a = (u) => {
      if (u && Object.values(u).some((c) => typeof c == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    i = async (u) => {
      var c;
      a(u);
      const {
          success: l,
          payload: f,
          error: _,
        } = (c = await n("invoke", u)) !== null && c !== void 0 ? c : {},
        d = { ...(l ? f : _) };
      if (d && d.headers)
        for (const g in d.headers)
          Array.isArray(d.headers[g]) && (d.headers[g] = d.headers[g].join(","));
      return d;
    };
  return (
    (k.invokeRemote = (0, s.withRateLimiter)(
      i,
      o,
      r,
      "Remote invocation calls are rate limited at 500req/25s",
    )),
    k
  );
}
var Me;
function ur() {
  return (
    Me ||
      ((Me = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), R.__exportStar(cr(), e);
      })(ce)),
    ce
  );
}
var ue = {},
  $ = {},
  D = {},
  Be;
function lr() {
  if (Be) return D;
  (Be = 1), Object.defineProperty(D, "__esModule", { value: !0 }), (D.submit = void 0);
  const e = w(),
    t = j(),
    s = (0, e.getCallBridge)(),
    o = async (r) => {
      if ((await s("submit", r)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return (D.submit = o), D;
}
var U = {},
  Fe;
function dr() {
  if (Fe) return U;
  (Fe = 1), Object.defineProperty(U, "__esModule", { value: !0 }), (U.close = void 0);
  const e = w(),
    t = j(),
    s = (0, e.getCallBridge)(),
    o = async (r) => {
      try {
        if ((await s("close", r)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return (U.close = o), U;
}
var G = {},
  Ae;
function fr() {
  if (Ae) return G;
  (Ae = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.refresh = void 0);
  const e = w(),
    t = j(),
    s = (0, e.getCallBridge)(),
    o = async (r) => {
      if ((await s("refresh", r)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return (G.refresh = o), G;
}
var V = {},
  xe;
function hr() {
  if (xe) return V;
  (xe = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.createHistory = void 0);
  const t = (0, w().getCallBridge)(),
    s = async () => {
      const o = await t("createHistory");
      return (
        o.listen((r) => {
          o.location = r;
        }),
        o
      );
    };
  return (V.createHistory = s), V;
}
var z = {},
  le = {},
  E = {},
  Ne;
function $t() {
  return (
    Ne ||
      ((Ne = 1),
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
var C = {},
  Le;
function _r() {
  if (Le) return C;
  (Le = 1),
    Object.defineProperty(C, "__esModule", { value: !0 }),
    (C.TranslationsGetter = C.TranslationGetterError = void 0);
  const e = (o, r) => {
    o.includes(r) || o.push(r);
  };
  class t extends Error {
    constructor(r) {
      super(r), (this.name = "TranslationGetterError");
    }
  }
  C.TranslationGetterError = t;
  class s {
    constructor(r) {
      I(this, "resourcesAccessor");
      I(this, "i18nInfoConfig", null);
      I(this, "translationResources", new Map());
      this.resourcesAccessor = r;
    }
    async getTranslations(r, n = { fallback: !0 }) {
      const a = await this.getI18nInfoConfig(),
        { fallback: i } = n;
      if (!i) {
        let u;
        return (
          a.locales.includes(r) && (u = await this.getTranslationResource(r)),
          { translations: u ?? null, locale: r }
        );
      }
      for (const u of this.getLocaleLookupOrder(r, a)) {
        const c = await this.getTranslationResource(u);
        if (c) return { translations: c, locale: u };
      }
      return { translations: null, locale: r };
    }
    async getTranslationsByLocaleLookupOrder(r) {
      const n = await this.getI18nInfoConfig(),
        a = this.getLocaleLookupOrder(r, n);
      return await Promise.all(
        a.map(async (i) => {
          const u = await this.getTranslationResource(i);
          return { locale: i, translations: u };
        }),
      );
    }
    reset() {
      (this.i18nInfoConfig = null), this.translationResources.clear();
    }
    async getTranslationResource(r) {
      let n = this.translationResources.get(r);
      if (!n)
        try {
          (n = await this.resourcesAccessor.getTranslationResource(r)),
            this.translationResources.set(r, n);
        } catch (a) {
          throw a instanceof t ? a : new t(`Failed to get translation resource for locale: ${r}`);
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
      const { locales: a, fallback: i } = n,
        u = [r],
        c = i[r];
      return (
        c && Array.isArray(c) && c.length > 0 && u.push(...c),
        e(u, n.fallback.default),
        u.filter((l) => a.includes(l))
      );
    }
  }
  return (C.TranslationsGetter = s), C;
}
var H = {},
  de = {},
  ke;
function Dt() {
  return (
    ke ||
      ((ke = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0);
        const s = R.__importDefault(Zt()),
          o = (n, a, i) => {
            const u = n[i];
            return u ? (0, e.getTranslationValueFromContent)(u, a) : null;
          };
        e.getTranslationValue = o;
        const r = (n, a) => {
          let i = n[a];
          if (!i) {
            const u = a.split(".");
            u.length > 1 && (i = (0, s.default)(n, u, null));
          }
          return typeof i == "string" ? i : null;
        };
        e.getTranslationValueFromContent = r;
      })(de)),
    de
  );
}
var $e;
function yr() {
  if ($e) return H;
  ($e = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.Translator = void 0);
  const e = Dt();
  class t {
    constructor(o, r) {
      I(this, "locale");
      I(this, "translationsGetter");
      I(this, "localeLookupOrderedTranslations", null);
      I(this, "cache", new Map());
      (this.locale = o), (this.translationsGetter = r);
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
          const a = (0, e.getTranslationValueFromContent)(n, o);
          if (a !== null) {
            r = a;
            break;
          }
        }
        (r = r ?? null), this.cache.set(o, r);
      }
      return r;
    }
  }
  return (H.Translator = t), H;
}
var W = {},
  De;
function gr() {
  if (De) return W;
  (De = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.ensureLocale = void 0);
  const e = $t(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    s = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    o = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (n, a) => {
        const [i] = a.split("-");
        return n[i] || (n[i] = a), n;
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    r = (n) => {
      const a = n.replace("_", "-");
      return t.has(a) ? a : (o[a] ?? s[a] ?? null);
    };
  return (W.ensureLocale = r), W;
}
var fe = {},
  Ue;
function vr() {
  return (
    Ue ||
      ((Ue = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0);
        const t = (c) => typeof c == "object" && c !== null && !Array.isArray(c),
          s = (c) => typeof (c == null ? void 0 : c.i18n) == "string",
          o = (c) => c.startsWith("connect-"),
          r = (c) => c.startsWith("core:"),
          n = (c) => {
            const l = new Set(),
              f = (_, d) =>
                !t(_) || l.has(_)
                  ? []
                  : (l.add(_),
                    Object.entries(_).flatMap(([g, v]) => {
                      const p = [...d, g];
                      return s(v)
                        ? [{ propertyPath: p, key: v.i18n }]
                        : Array.isArray(v)
                          ? v.flatMap((m) => f(m, p))
                          : f(v, p);
                    }));
            return f(c, []);
          },
          a = (c) =>
            Object.entries(c).flatMap(([l, f]) =>
              !o(l) && !r(l) && f && Array.isArray(f) && f.length > 0 ? f.map((_) => [_, l]) : [],
            );
        e.getI18nSupportedModuleEntries = a;
        const i = (c) => {
          const l = new Set();
          for (const f of (0, e.getI18nSupportedModuleEntries)(c)) {
            const _ = n(f[0]);
            for (const { key: d } of _) l.add(d);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = i;
        const u = (c) => {
          const l = [];
          for (const f of (0, e.getI18nSupportedModuleEntries)(c)) {
            const _ = n(f[0]);
            for (const d of _) l.push({ moduleName: f[1], ...d });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = u;
      })(fe)),
    fe
  );
}
var he = {},
  Ge;
function pr() {
  return Ge || ((Ge = 1), Object.defineProperty(he, "__esModule", { value: !0 })), he;
}
var Ve;
function Ut() {
  return (
    Ve ||
      ((Ve = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0);
        const t = R;
        t.__exportStar($t(), e),
          t.__exportStar(_r(), e),
          t.__exportStar(yr(), e),
          t.__exportStar(gr(), e);
        var s = Dt();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return s.getTranslationValue;
          },
        });
        var o = vr();
        Object.defineProperty(e, "extractI18nKeysFromModules", {
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
          t.__exportStar(pr(), e);
      })(le)),
    le
  );
}
var ze;
function br() {
  if (ze) return z;
  (ze = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.getContext = void 0);
  const e = w(),
    t = Ut(),
    s = (0, e.getCallBridge)(),
    o = async () => {
      var r;
      const n = await s("getContext"),
        a = n == null ? void 0 : n.locale;
      return a && (n.locale = (r = (0, t.ensureLocale)(a)) !== null && r !== void 0 ? r : a), n;
    };
  return (z.getContext = o), z;
}
var K = {},
  He;
function mr() {
  if (He) return K;
  (He = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.changeWindowTitle = void 0);
  const e = w(),
    t = j(),
    s = (0, e.getCallBridge)(),
    o = async (r) => {
      try {
        await s("changeWindowTitle", r);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return (K.changeWindowTitle = o), K;
}
var J = {},
  We;
function wr() {
  if (We) return J;
  (We = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.theme = void 0);
  const t = (0, w().getCallBridge)();
  return (J.theme = { enable: () => t("enableTheming") }), J;
}
var Ke;
function Or() {
  if (Ke) return $;
  (Ke = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.view = void 0);
  const e = lr(),
    t = dr(),
    s = fr(),
    o = hr(),
    r = br(),
    n = mr(),
    a = wr();
  return (
    ($.view = {
      submit: e.submit,
      close: t.close,
      refresh: s.refresh,
      createHistory: o.createHistory,
      getContext: r.getContext,
      theme: a.theme,
      changeWindowTitle: n.changeWindowTitle,
    }),
    $
  );
}
var Je;
function Gt() {
  return (
    Je ||
      ((Je = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), R.__exportStar(Or(), e);
      })(ue)),
    ue
  );
}
var _e = {},
  X = {},
  Xe;
function jr() {
  if (Xe) return X;
  (Xe = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.router = void 0);
  const t = (0, w().getCallBridge)(),
    s = async (n) => {
      if (typeof n == "string") return t("navigate", { url: n, type: "same-tab" });
      if (!(n != null && n.target)) throw new Error("target is required for navigation");
      return t("navigate", { ...n, type: "same-tab" });
    },
    o = async (n) => {
      if (typeof n == "string") return t("navigate", { url: n, type: "new-tab" });
      if (!(n != null && n.target)) throw new Error("target is required for navigation");
      return t("navigate", { ...n, type: "new-tab" });
    },
    r = async () => t("reload");
  return (X.router = { navigate: s, open: o, reload: r }), X;
}
var Ye;
function Er() {
  return (
    Ye ||
      ((Ye = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), R.__exportStar(jr(), e);
      })(_e)),
    _e
  );
}
var ye = {},
  Y = {},
  Ze;
function Pr() {
  if (Ze) return Y;
  (Ze = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.Modal = void 0);
  const e = w(),
    t = j(),
    s = (0, e.getCallBridge)(),
    o = () => {};
  class r {
    constructor(a) {
      var i, u;
      (this.resource = (a == null ? void 0 : a.resource) || null),
        (this.onClose = (a == null ? void 0 : a.onClose) || o),
        (this.size = (a == null ? void 0 : a.size) || "medium"),
        (this.context = (a == null ? void 0 : a.context) || {}),
        (this.closeOnEscape =
          (i = a == null ? void 0 : a.closeOnEscape) !== null && i !== void 0 ? i : !0),
        (this.closeOnOverlayClick =
          (u = a == null ? void 0 : a.closeOnOverlayClick) !== null && u !== void 0 ? u : !0);
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
  return (Y.Modal = r), Y;
}
var Qe;
function Tr() {
  return (
    Qe ||
      ((Qe = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), R.__exportStar(Pr(), e);
      })(ye)),
    ye
  );
}
var P = {},
  Z = {},
  q = {},
  et;
function Rr() {
  if (et) return q;
  (et = 1),
    Object.defineProperty(q, "__esModule", { value: !0 }),
    (q.blobToBase64 = q.base64ToBlob = void 0);
  const e = (s, o) => {
    if (!s) return null;
    const r = s.includes(";base64") ? s.split(",")[1] : s,
      n = atob(r),
      a = new Array(n.length);
    for (let u = 0; u < n.length; u++) a[u] = n.charCodeAt(u);
    const i = new Uint8Array(a);
    return new Blob([i], { type: o });
  };
  q.base64ToBlob = e;
  const t = (s) =>
    new Promise((o, r) => {
      const n = new FileReader();
      (n.onloadend = () => {
        o(n.result);
      }),
        (n.onerror = r),
        n.readAsDataURL(s);
    });
  return (q.blobToBase64 = t), q;
}
var tt;
function Sr() {
  if (tt) return Z;
  (tt = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.productFetchApi = void 0);
  const e = Rr(),
    t = async (r) => {
      const n = {};
      for (const [a, i] of r.entries())
        if (a === "file") {
          const u = i.name,
            c = i.type;
          (n.file = await (0, e.blobToBase64)(i)), (n.__fileName = u), (n.__fileType = c);
        } else n[a] = i;
      return JSON.stringify(n);
    },
    s = async (r) => {
      const n = (r == null ? void 0 : r.body) instanceof FormData,
        a = n ? await t(r == null ? void 0 : r.body) : r == null ? void 0 : r.body,
        i = new Request("", {
          body: a,
          method: r == null ? void 0 : r.method,
          headers: r == null ? void 0 : r.headers,
        }),
        u = Object.fromEntries(i.headers.entries());
      return {
        body: i.method !== "GET" ? await i.text() : null,
        headers: new Headers(u),
        isMultipartFormData: n,
      };
    },
    o = (r) => {
      const n = async (a, i, u) => {
        const { body: c, headers: l, isMultipartFormData: f } = await s(u);
        l.has("X-Atlassian-Token") || l.set("X-Atlassian-Token", "no-check");
        const _ = {
            product: a,
            restPath: i,
            fetchRequestInit: { ...u, body: c, headers: [...l.entries()] },
            isMultipartFormData: f,
          },
          {
            body: d,
            headers: g,
            statusText: v,
            status: p,
            isAttachment: m,
          } = await r("fetchProduct", _),
          S = m ? (0, e.base64ToBlob)(d, g["content-type"]) : d;
        return new Response(S || null, { headers: g, status: p, statusText: v });
      };
      return {
        requestConfluence: (a, i) => n("confluence", a, i),
        requestJira: (a, i) => n("jira", a, i),
        requestBitbucket: (a, i) => n("bitbucket", a, i),
      };
    };
  return (Z.productFetchApi = o), Z;
}
var rt;
function Ir() {
  if (rt) return P;
  rt = 1;
  var e;
  Object.defineProperty(P, "__esModule", { value: !0 }),
    (P.requestBitbucket = P.requestJira = P.requestConfluence = void 0);
  const t = w();
  return (
    (e = (0, Sr().productFetchApi)((0, t.getCallBridge)())),
    (P.requestConfluence = e.requestConfluence),
    (P.requestJira = e.requestJira),
    (P.requestBitbucket = e.requestBitbucket),
    P
  );
}
var ge = {},
  Q = {},
  nt;
function Cr() {
  if (nt) return Q;
  (nt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.showFlag = void 0);
  const e = w(),
    t = j(),
    s = (0, e.getCallBridge)(),
    o = (r) => {
      var n;
      if (!r.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const a = s("showFlag", { ...r, type: (n = r.type) !== null && n !== void 0 ? n : "info" });
      return { close: async () => (await a, s("closeFlag", { id: r.id })) };
    };
  return (Q.showFlag = o), Q;
}
var ot;
function qr() {
  return (
    ot ||
      ((ot = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0);
        var t = Cr();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(ge)),
    ge
  );
}
var ve = {},
  ee = {},
  st;
function Mr() {
  if (st) return ee;
  (st = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.events = void 0);
  const t = (0, w().getCallBridge)(),
    s = (r, n) => t("emit", { event: r, payload: n }),
    o = (r, n) => t("on", { event: r, callback: n });
  return (ee.events = { emit: s, on: o }), ee;
}
var at;
function Br() {
  return (
    at ||
      ((at = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), R.__exportStar(Mr(), e);
      })(ve)),
    ve
  );
}
var T = {},
  it;
function Fr() {
  if (it) return T;
  (it = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.createTranslationFunction = T.getTranslations = T.resetTranslationsCache = void 0);
  const e = Ut(),
    t = Gt(),
    s = {
      getI18nInfoConfig: async () => {
        const i = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!i.ok) throw new Error("Failed to get i18n info config: " + i.statusText);
        return (await i.json()).config;
      },
      getTranslationResource: async (i) => {
        const u = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${i}.json`);
        if (!u.ok) throw new Error(`Failed to get translation resource for locale: ${i}`);
        return u.json();
      },
    },
    o = new e.TranslationsGetter(s),
    r = () => {
      o.reset();
    };
  T.resetTranslationsCache = r;
  const n = async (i = null, u = { fallback: !0 }) => {
    let c = i;
    return c || (c = (await t.view.getContext()).locale), await o.getTranslations(c, u);
  };
  T.getTranslations = n;
  const a = async (i = null) => {
    let u = i;
    u || (u = (await t.view.getContext()).locale);
    const c = new e.Translator(u, o);
    return (
      await c.init(),
      (l, f) => {
        var _, d;
        return (d = (_ = c.translate(l)) !== null && _ !== void 0 ? _ : f) !== null && d !== void 0
          ? d
          : l;
      }
    );
  };
  return (T.createTranslationFunction = a), T;
}
var ct;
function Ar() {
  return (
    ct ||
      ((ct = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0);
        const t = R;
        var s = sr();
        Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return s.NavigationTarget;
          },
        }),
          t.__exportStar(ir(), e),
          t.__exportStar(ur(), e),
          t.__exportStar(Gt(), e),
          t.__exportStar(Er(), e),
          t.__exportStar(Tr(), e),
          t.__exportStar(Ir(), e),
          t.__exportStar(qr(), e),
          t.__exportStar(Br(), e),
          (e.i18n = t.__importStar(Fr()));
      })(ae)),
    ae
  );
}
var te = Ar();
const xr = "_container_5yme6_1",
  Nr = "_header_5yme6_8",
  Lr = "_controls_5yme6_19",
  kr = "_searchSection_5yme6_27",
  $r = "_searchInput_5yme6_33",
  Dr = "_orgSelect_5yme6_34",
  Ur = "_input_5yme6_35",
  Gr = "_select_5yme6_36",
  Vr = "_addButton_5yme6_62",
  zr = "_addForm_5yme6_78",
  Hr = "_submitButton_5yme6_87",
  Wr = "_spinner_5yme6_107",
  Kr = "_spinnerInner_5yme6_112",
  Jr = "_tableContainer_5yme6_116",
  Xr = "_table_5yme6_116",
  Yr = "_stats_5yme6_145",
  Zr = "_loadingContainer_5yme6_154",
  b = {
    container: xr,
    header: Nr,
    controls: Lr,
    searchSection: kr,
    searchInput: $r,
    orgSelect: Dr,
    input: Ur,
    select: Gr,
    addButton: Vr,
    addForm: zr,
    submitButton: Hr,
    spinner: Wr,
    spinnerInner: Kr,
    tableContainer: Jr,
    table: Xr,
    stats: Yr,
    loadingContainer: Zr,
  },
  ut = () =>
    h.jsx("div", { className: b.spinner, children: h.jsx("div", { className: b.spinnerInner }) });
function Qr() {
  const [e, t] = O.useState([]),
    [s, o] = O.useState([]),
    [r, n] = O.useState(""),
    [a, i] = O.useState(null),
    [u, c] = O.useState(null),
    [l, f] = O.useState(""),
    [_, d] = O.useState(null),
    [g, v] = O.useState(!1),
    [p, m] = O.useState(!0),
    [S, we] = O.useState(!1),
    Vt = async () => {
      try {
        const y = await te.invoke("getUsers", {
          searchTerm: r || void 0,
          organizationId: a || void 0,
        });
        t(y);
      } catch (y) {
        console.error("Error fetching users:", y);
      }
    },
    zt = async () => {
      try {
        const y = await te.invoke("getOrganizations");
        o(y);
      } catch (y) {
        console.error("Error fetching organizations:", y);
      }
    },
    Ht = async () => {
      try {
        const y = await te.invoke("getUserStats");
        c(y);
      } catch (y) {
        console.error("Error fetching stats:", y);
      }
    },
    Oe = async () => {
      m(!0);
      try {
        await Promise.all([Vt(), zt(), Ht()]);
      } finally {
        m(!1);
      }
    };
  O.useEffect(() => {
    Oe();
  }, [r, a]);
  const Wt = async () => {
    if (!(!l || !_)) {
      we(!0);
      try {
        await te.invoke("createUser", { name: l, organizationId: _ }),
          f(""),
          d(null),
          v(!1),
          await Oe();
      } catch (y) {
        console.error("Error adding user:", y);
      } finally {
        we(!1);
      }
    }
  };
  return p
    ? h.jsxs("div", {
        className: b.loadingContainer,
        children: [h.jsx(ut, {}), h.jsx("p", { children: "Loading data..." })],
      })
    : h.jsxs("div", {
        className: b.container,
        children: [
          h.jsx("header", {
            className: b.header,
            children: h.jsx("h1", { children: "OrgTracker" }),
          }),
          h.jsxs("div", {
            className: b.controls,
            children: [
              h.jsxs("div", {
                className: b.searchSection,
                children: [
                  h.jsx("input", {
                    type: "text",
                    placeholder: "🔍 Search by name...",
                    value: r,
                    onChange: (y) => n(y.target.value),
                    className: b.searchInput,
                  }),
                  h.jsxs("select", {
                    value: a || "",
                    onChange: (y) => i(y.target.value ? Number(y.target.value) : null),
                    className: b.orgSelect,
                    children: [
                      h.jsx("option", { value: "", children: "All Organizations" }),
                      s.map((y) =>
                        h.jsxs(
                          "option",
                          {
                            value: y.id,
                            children: [
                              y.name,
                              " (",
                              (u == null ? void 0 : u.orgBreakdown[y.id]) || 0,
                              ")",
                            ],
                          },
                          y.id,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              h.jsx("button", {
                className: b.addButton,
                onClick: () => v(!g),
                children: g ? "Cancel" : "+ Add User",
              }),
            ],
          }),
          g &&
            h.jsxs("div", {
              className: b.addForm,
              children: [
                h.jsx("input", {
                  type: "text",
                  placeholder: "User Name",
                  value: l,
                  onChange: (y) => f(y.target.value),
                  className: b.input,
                  disabled: S,
                }),
                h.jsxs("select", {
                  value: _ || "",
                  onChange: (y) => d(Number(y.target.value)),
                  className: b.select,
                  disabled: S,
                  children: [
                    h.jsx("option", { value: "", children: "Select Organization" }),
                    s.map((y) => h.jsx("option", { value: y.id, children: y.name }, y.id)),
                  ],
                }),
                h.jsx("button", {
                  onClick: Wt,
                  className: b.submitButton,
                  disabled: !l || !_ || S,
                  style: {
                    opacity: !l || !_ || S ? 0.5 : 1,
                    cursor: !l || !_ || S ? "not-allowed" : "pointer",
                  },
                  children: S
                    ? h.jsxs(h.Fragment, {
                        children: [
                          h.jsx(ut, {}),
                          h.jsx("span", { style: { marginLeft: "8px" }, children: "Adding..." }),
                        ],
                      })
                    : "Add User",
                }),
              ],
            }),
          h.jsx("div", {
            className: b.tableContainer,
            children: h.jsxs("table", {
              className: b.table,
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
                  children: e.map((y) =>
                    h.jsxs(
                      "tr",
                      {
                        children: [
                          h.jsx("td", { children: y.users.name }),
                          h.jsx("td", { children: y.organization.name }),
                        ],
                      },
                      y.users.id,
                    ),
                  ),
                }),
              ],
            }),
          }),
          h.jsx("div", {
            className: b.stats,
            children: h.jsxs("p", {
              children: ["Total Users: ", (u == null ? void 0 : u.totalUsers) || 0],
            }),
          }),
        ],
      });
}
const en = document.getElementById("root"),
  tn = Xt.createRoot(en),
  lt = () => {
    tn.render(h.jsx(Qr, {}));
  };
te.view.theme
  .enable()
  .then(() => {
    lt();
  })
  .catch((e) => {
    console.error(e.message), lt();
  });
