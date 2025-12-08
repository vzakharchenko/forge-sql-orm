const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index-Byf9Kz4g.js", "./client-core-vendor-CgCV9aM-.js"]),
) => i.map((i) => d[i]);
import { r as yn, c as ai } from "./react-dom-vendor-BOEB6BZs.js";
import { g as oi, r as B } from "./client-core-vendor-CgCV9aM-.js";
import { r as si } from "./lodash-vendor-FKT_qxrp.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
  new MutationObserver((n) => {
    for (const a of n)
      if (a.type === "childList")
        for (const t of a.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && s(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(n) {
    const a = {};
    return (
      n.integrity && (a.integrity = n.integrity),
      n.referrerPolicy && (a.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : n.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function s(n) {
    if (n.ep) return;
    n.ep = !0;
    const a = o(n);
    fetch(n.href, a);
  }
})();
var Ze = { exports: {} },
  K = {};
var Ct;
function ui() {
  if (Ct) return K;
  Ct = 1;
  var e = yn(),
    r = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(c, l, i) {
    var u,
      f = {},
      h = null,
      d = null;
    (i !== void 0 && (h = "" + i),
      l.key !== void 0 && (h = "" + l.key),
      l.ref !== void 0 && (d = l.ref));
    for (u in l) s.call(l, u) && !a.hasOwnProperty(u) && (f[u] = l[u]);
    if (c && c.defaultProps) for (u in ((l = c.defaultProps), l)) f[u] === void 0 && (f[u] = l[u]);
    return { $$typeof: r, type: c, key: h, ref: d, props: f, _owner: n.current };
  }
  return ((K.Fragment = o), (K.jsx = t), (K.jsxs = t), K);
}
var Mt;
function li() {
  return (Mt || ((Mt = 1), (Ze.exports = ui())), Ze.exports);
}
var w = li(),
  j = yn(),
  Qe = {},
  St = function (e, r) {
    return (
      (St =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (o, s) {
            o.__proto__ = s;
          }) ||
        function (o, s) {
          for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (o[n] = s[n]);
        }),
      St(e, r)
    );
  };
function mn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  St(e, r);
  function o() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((o.prototype = r.prototype), new o());
}
var Ke = function () {
  return (
    (Ke =
      Object.assign ||
      function (r) {
        for (var o, s = 1, n = arguments.length; s < n; s++) {
          o = arguments[s];
          for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a]);
        }
        return r;
      }),
    Ke.apply(this, arguments)
  );
};
function bn(e, r) {
  var o = {};
  for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && r.indexOf(s) < 0 && (o[s] = e[s]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, s = Object.getOwnPropertySymbols(e); n < s.length; n++)
      r.indexOf(s[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, s[n]) &&
        (o[s[n]] = e[s[n]]);
  return o;
}
function wn(e, r, o, s) {
  var n = arguments.length,
    a = n < 3 ? r : s === null ? (s = Object.getOwnPropertyDescriptor(r, o)) : s,
    t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    a = Reflect.decorate(e, r, o, s);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (t = e[c]) && (a = (n < 3 ? t(a) : n > 3 ? t(r, o, a) : t(r, o)) || a);
  return (n > 3 && a && Object.defineProperty(r, o, a), a);
}
function En(e, r) {
  return function (o, s) {
    r(o, s, e);
  };
}
function On(e, r, o, s, n, a) {
  function t(g) {
    if (g !== void 0 && typeof g != "function") throw new TypeError("Function expected");
    return g;
  }
  for (
    var c = s.kind,
      l = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      i = !r && e ? (s.static ? e : e.prototype) : null,
      u = r || (i ? Object.getOwnPropertyDescriptor(i, s.name) : {}),
      f,
      h = !1,
      d = o.length - 1;
    d >= 0;
    d--
  ) {
    var p = {};
    for (var _ in s) p[_] = _ === "access" ? {} : s[_];
    for (var _ in s.access) p.access[_] = s.access[_];
    p.addInitializer = function (g) {
      if (h) throw new TypeError("Cannot add initializers after decoration has completed");
      a.push(t(g || null));
    };
    var v = (0, o[d])(c === "accessor" ? { get: u.get, set: u.set } : u[l], p);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      ((f = t(v.get)) && (u.get = f),
        (f = t(v.set)) && (u.set = f),
        (f = t(v.init)) && n.unshift(f));
    } else (f = t(v)) && (c === "field" ? n.unshift(f) : (u[l] = f));
  }
  (i && Object.defineProperty(i, s.name, u), (h = !0));
}
function Rn(e, r, o) {
  for (var s = arguments.length > 2, n = 0; n < r.length; n++)
    o = s ? r[n].call(e, o) : r[n].call(e);
  return s ? o : void 0;
}
function Sn(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Pn(e, r, o) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: o ? "".concat(o, " ", r) : r })
  );
}
function In(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function jn(e, r, o, s) {
  function n(a) {
    return a instanceof o
      ? a
      : new o(function (t) {
          t(a);
        });
  }
  return new (o || (o = Promise))(function (a, t) {
    function c(u) {
      try {
        i(s.next(u));
      } catch (f) {
        t(f);
      }
    }
    function l(u) {
      try {
        i(s.throw(u));
      } catch (f) {
        t(f);
      }
    }
    function i(u) {
      u.done ? a(u.value) : n(u.value).then(c, l);
    }
    i((s = s.apply(e, r || [])).next());
  });
}
function qn(e, r) {
  var o = {
      label: 0,
      sent: function () {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: [],
    },
    s,
    n,
    a,
    t = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (t.next = c(0)),
    (t.throw = c(1)),
    (t.return = c(2)),
    typeof Symbol == "function" &&
      (t[Symbol.iterator] = function () {
        return this;
      }),
    t
  );
  function c(i) {
    return function (u) {
      return l([i, u]);
    };
  }
  function l(i) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; t && ((t = 0), i[0] && (o = 0)), o; )
      try {
        if (
          ((s = 1),
          n &&
            (a =
              i[0] & 2 ? n.return : i[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) &&
            !(a = a.call(n, i[1])).done)
        )
          return a;
        switch (((n = 0), a && (i = [i[0] & 2, a.value]), i[0])) {
          case 0:
          case 1:
            a = i;
            break;
          case 4:
            return (o.label++, { value: i[1], done: !1 });
          case 5:
            (o.label++, (n = i[1]), (i = [0]));
            continue;
          case 7:
            ((i = o.ops.pop()), o.trys.pop());
            continue;
          default:
            if (
              ((a = o.trys), !(a = a.length > 0 && a[a.length - 1]) && (i[0] === 6 || i[0] === 2))
            ) {
              o = 0;
              continue;
            }
            if (i[0] === 3 && (!a || (i[1] > a[0] && i[1] < a[3]))) {
              o.label = i[1];
              break;
            }
            if (i[0] === 6 && o.label < a[1]) {
              ((o.label = a[1]), (a = i));
              break;
            }
            if (a && o.label < a[2]) {
              ((o.label = a[2]), o.ops.push(i));
              break;
            }
            (a[2] && o.ops.pop(), o.trys.pop());
            continue;
        }
        i = r.call(e, o);
      } catch (u) {
        ((i = [6, u]), (n = 0));
      } finally {
        s = a = 0;
      }
    if (i[0] & 5) throw i[1];
    return { value: i[0] ? i[1] : void 0, done: !0 };
  }
}
var Je = Object.create
  ? function (e, r, o, s) {
      s === void 0 && (s = o);
      var n = Object.getOwnPropertyDescriptor(r, o);
      ((!n || ("get" in n ? !r.__esModule : n.writable || n.configurable)) &&
        (n = {
          enumerable: !0,
          get: function () {
            return r[o];
          },
        }),
        Object.defineProperty(e, s, n));
    }
  : function (e, r, o, s) {
      (s === void 0 && (s = o), (e[s] = r[o]));
    };
function An(e, r) {
  for (var o in e) o !== "default" && !Object.prototype.hasOwnProperty.call(r, o) && Je(r, e, o);
}
function He(e) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    o = r && e[r],
    s = 0;
  if (o) return o.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && s >= e.length && (e = void 0), { value: e && e[s++], done: !e });
      },
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function jt(e, r) {
  var o = typeof Symbol == "function" && e[Symbol.iterator];
  if (!o) return e;
  var s = o.call(e),
    n,
    a = [],
    t;
  try {
    for (; (r === void 0 || r-- > 0) && !(n = s.next()).done; ) a.push(n.value);
  } catch (c) {
    t = { error: c };
  } finally {
    try {
      n && !n.done && (o = s.return) && o.call(s);
    } finally {
      if (t) throw t.error;
    }
  }
  return a;
}
function Cn() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(jt(arguments[r]));
  return e;
}
function Mn() {
  for (var e = 0, r = 0, o = arguments.length; r < o; r++) e += arguments[r].length;
  for (var s = Array(e), n = 0, r = 0; r < o; r++)
    for (var a = arguments[r], t = 0, c = a.length; t < c; t++, n++) s[n] = a[t];
  return s;
}
function Tn(e, r, o) {
  if (o || arguments.length === 2)
    for (var s = 0, n = r.length, a; s < n; s++)
      (a || !(s in r)) && (a || (a = Array.prototype.slice.call(r, 0, s)), (a[s] = r[s]));
  return e.concat(a || Array.prototype.slice.call(r));
}
function z(e) {
  return this instanceof z ? ((this.v = e), this) : new z(e);
}
function Dn(e, r, o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = o.apply(e, r || []),
    n,
    a = [];
  return (
    (n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    c("next"),
    c("throw"),
    c("return", t),
    (n[Symbol.asyncIterator] = function () {
      return this;
    }),
    n
  );
  function t(d) {
    return function (p) {
      return Promise.resolve(p).then(d, f);
    };
  }
  function c(d, p) {
    s[d] &&
      ((n[d] = function (_) {
        return new Promise(function (v, g) {
          a.push([d, _, v, g]) > 1 || l(d, _);
        });
      }),
      p && (n[d] = p(n[d])));
  }
  function l(d, p) {
    try {
      i(s[d](p));
    } catch (_) {
      h(a[0][3], _);
    }
  }
  function i(d) {
    d.value instanceof z ? Promise.resolve(d.value.v).then(u, f) : h(a[0][2], d);
  }
  function u(d) {
    l("next", d);
  }
  function f(d) {
    l("throw", d);
  }
  function h(d, p) {
    (d(p), a.shift(), a.length && l(a[0][0], a[0][1]));
  }
}
function Bn(e) {
  var r, o;
  return (
    (r = {}),
    s("next"),
    s("throw", function (n) {
      throw n;
    }),
    s("return"),
    (r[Symbol.iterator] = function () {
      return this;
    }),
    r
  );
  function s(n, a) {
    r[n] = e[n]
      ? function (t) {
          return (o = !o) ? { value: z(e[n](t)), done: !1 } : a ? a(t) : t;
        }
      : a;
  }
}
function Fn(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    o;
  return r
    ? r.call(e)
    : ((e = typeof He == "function" ? He(e) : e[Symbol.iterator]()),
      (o = {}),
      s("next"),
      s("throw"),
      s("return"),
      (o[Symbol.asyncIterator] = function () {
        return this;
      }),
      o);
  function s(a) {
    o[a] =
      e[a] &&
      function (t) {
        return new Promise(function (c, l) {
          ((t = e[a](t)), n(c, l, t.done, t.value));
        });
      };
  }
  function n(a, t, c, l) {
    Promise.resolve(l).then(function (i) {
      a({ value: i, done: c });
    }, t);
  }
}
function kn(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var ci = Object.create
    ? function (e, r) {
        Object.defineProperty(e, "default", { enumerable: !0, value: r });
      }
    : function (e, r) {
        e.default = r;
      },
  Pt = function (e) {
    return (
      (Pt =
        Object.getOwnPropertyNames ||
        function (r) {
          var o = [];
          for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (o[o.length] = s);
          return o;
        }),
      Pt(e)
    );
  };
function Un(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var o = Pt(e), s = 0; s < o.length; s++) o[s] !== "default" && Je(r, e, o[s]);
  return (ci(r, e), r);
}
function Nn(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ln(e, r, o, s) {
  if (o === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !s : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? s : o === "a" ? s.call(e) : s ? s.value : r.get(e);
}
function xn(e, r, o, s, n) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (s === "a" ? n.call(e, o) : n ? (n.value = o) : r.set(e, o), o);
}
function Gn(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function Vn(e, r, o) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var s, n;
    if (o) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      s = r[Symbol.asyncDispose];
    }
    if (s === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((s = r[Symbol.dispose]), o && (n = s));
    }
    if (typeof s != "function") throw new TypeError("Object not disposable.");
    (n &&
      (s = function () {
        try {
          n.call(this);
        } catch (a) {
          return Promise.reject(a);
        }
      }),
      e.stack.push({ value: r, dispose: s, async: o }));
  } else o && e.stack.push({ async: !0 });
  return r;
}
var di =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, o) {
        var s = new Error(o);
        return ((s.name = "SuppressedError"), (s.error = e), (s.suppressed = r), s);
      };
function zn(e) {
  function r(a) {
    ((e.error = e.hasError ? new di(a, e.error, "An error was suppressed during disposal.") : a),
      (e.hasError = !0));
  }
  var o,
    s = 0;
  function n() {
    for (; (o = e.stack.pop()); )
      try {
        if (!o.async && s === 1) return ((s = 0), e.stack.push(o), Promise.resolve().then(n));
        if (o.dispose) {
          var a = o.dispose.call(o.value);
          if (o.async)
            return (
              (s |= 2),
              Promise.resolve(a).then(n, function (t) {
                return (r(t), n());
              })
            );
        } else s |= 1;
      } catch (t) {
        r(t);
      }
    if (s === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return n();
}
function Kn(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (o, s, n, a, t) {
        return s
          ? r
            ? ".jsx"
            : ".js"
          : n && (!a || !t)
            ? o
            : n + a + "." + t.toLowerCase() + "js";
      })
    : e;
}
const fi = {
    __extends: mn,
    __assign: Ke,
    __rest: bn,
    __decorate: wn,
    __param: En,
    __esDecorate: On,
    __runInitializers: Rn,
    __propKey: Sn,
    __setFunctionName: Pn,
    __metadata: In,
    __awaiter: jn,
    __generator: qn,
    __createBinding: Je,
    __exportStar: An,
    __values: He,
    __read: jt,
    __spread: Cn,
    __spreadArrays: Mn,
    __spreadArray: Tn,
    __await: z,
    __asyncGenerator: Dn,
    __asyncDelegator: Bn,
    __asyncValues: Fn,
    __makeTemplateObject: kn,
    __importStar: Un,
    __importDefault: Nn,
    __classPrivateFieldGet: Ln,
    __classPrivateFieldSet: xn,
    __classPrivateFieldIn: Gn,
    __addDisposableResource: Vn,
    __disposeResources: zn,
    __rewriteRelativeImportExtension: Kn,
  },
  _i = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Vn,
        get __assign() {
          return Ke;
        },
        __asyncDelegator: Bn,
        __asyncGenerator: Dn,
        __asyncValues: Fn,
        __await: z,
        __awaiter: jn,
        __classPrivateFieldGet: Ln,
        __classPrivateFieldIn: Gn,
        __classPrivateFieldSet: xn,
        __createBinding: Je,
        __decorate: wn,
        __disposeResources: zn,
        __esDecorate: On,
        __exportStar: An,
        __extends: mn,
        __generator: qn,
        __importDefault: Nn,
        __importStar: Un,
        __makeTemplateObject: kn,
        __metadata: In,
        __param: En,
        __propKey: Sn,
        __read: jt,
        __rest: bn,
        __rewriteRelativeImportExtension: Kn,
        __runInitializers: Rn,
        __setFunctionName: Pn,
        __spread: Cn,
        __spreadArray: Tn,
        __spreadArrays: Mn,
        __values: He,
        default: fi,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  I = oi(_i);
var H = {},
  Tt;
function vi() {
  return (
    Tt ||
      ((Tt = 1),
      Object.defineProperty(H, "__esModule", { value: !0 }),
      (H.NavigationTarget = void 0),
      (H.NavigationTarget = {
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
    H
  );
}
var et = {},
  tt = {},
  J = {},
  W = {},
  Dt;
function S() {
  if (Dt) return W;
  ((Dt = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.BridgeAPIError = void 0));
  class e extends Error {}
  return ((W.BridgeAPIError = e), W);
}
var Bt;
function O() {
  if (Bt) return J;
  ((Bt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.getCallBridge = void 0));
  const e = S();
  function r(s) {
    return !!s?.callBridge;
  }
  const o = () => {
    if (!r(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((J.getCallBridge = o), J);
}
var X = {},
  Ft;
function We() {
  if (Ft) return X;
  ((Ft = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.withRateLimiter = void 0));
  const e = S(),
    r = (o, s, n, a) => {
      let t = Date.now(),
        c = 0;
      return async (...l) => {
        const i = Date.now();
        if ((i - t > n && ((t = i), (c = 0)), c >= s))
          throw new e.BridgeAPIError(a || "Too many invocations.");
        return ((c = c + 1), o(...l));
      };
    };
  return ((X.withRateLimiter = r), X);
}
var kt;
function hi() {
  return (
    kt ||
      ((kt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = O(),
          o = S(),
          s = We(),
          n = (0, r.getCallBridge)(),
          a = (l) => {
            if (l && Object.values(l).some((i) => typeof i == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (l, i) => {
            if (typeof l != "string") throw new o.BridgeAPIError("functionKey must be a string!");
            return (a(i), n("invoke", { functionKey: l, payload: i }));
          };
        e.invoke = (0, s.withRateLimiter)(
          t,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function c() {
          return e.invoke;
        }
        e.makeInvoke = c;
      })(tt)),
    tt
  );
}
var Ut;
function Ge() {
  return (
    Ut ||
      ((Ut = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(hi(), e));
      })(et)),
    et
  );
}
var rt = {},
  Y = {},
  nt = {},
  Nt;
function Hn() {
  return (
    Nt ||
      ((Nt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = O(),
          o = S(),
          s = We(),
          n = 500,
          a = 25,
          t = 1e3 * a;
        (function (f) {
          ((f.REMOTE = "Remote"), (f.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, r.getCallBridge)(),
          l = (f) => {
            if (f && Object.values(f).some((h) => typeof h == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          i = (f) => async (h) => {
            l(h);
            const d = { ...h, invokeType: `ui-${f.toLowerCase()}-fetch` },
              p = await c("invoke", d),
              { success: _, payload: v, error: g } = p ?? {},
              y = { ...(_ ? v : g) };
            if (y && y.headers)
              for (const m in y.headers)
                Array.isArray(y.headers[m]) && (y.headers[m] = y.headers[m].join(","));
            return y;
          },
          u = (f) => {
            const h = i(f);
            return (0, s.withRateLimiter)(
              h,
              n,
              t,
              `${f} invocation calls are rate limited at ${n}/${a}s`,
            );
          };
        e._invokeEndpointFn = u;
      })(nt)),
    nt
  );
}
var Lt;
function gi() {
  if (Lt) return Y;
  ((Lt = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.invokeRemote = void 0));
  const e = Hn(),
    r = (o) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(o);
  return ((Y.invokeRemote = r), Y);
}
var $ = {},
  xt;
function pi() {
  if (xt) return $;
  ((xt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.invokeService = void 0));
  const e = Hn(),
    r = (o) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(o);
  return (($.invokeService = r), $);
}
var Gt;
function yi() {
  return (
    Gt ||
      ((Gt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = I;
        (r.__exportStar(gi(), e), r.__exportStar(pi(), e));
      })(rt)),
    rt
  );
}
var it = {},
  Z = {},
  Q = {},
  Vt;
function mi() {
  if (Vt) return Q;
  ((Vt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.submit = void 0));
  const e = O(),
    r = S(),
    o = (0, e.getCallBridge)(),
    s = async (n) => {
      if ((await o("submit", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((Q.submit = s), Q);
}
var ee = {},
  zt;
function bi() {
  if (zt) return ee;
  ((zt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.close = void 0));
  const e = O(),
    r = S(),
    o = (0, e.getCallBridge)(),
    s = async (n) => {
      try {
        if ((await o("close", n)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((ee.close = s), ee);
}
var te = {},
  Kt;
function wi() {
  if (Kt) return te;
  ((Kt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.open = void 0));
  const e = O(),
    r = S(),
    o = (0, e.getCallBridge)(),
    s = async () => {
      try {
        if ((await o("open")) === !1)
          throw new r.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((te.open = s), te);
}
var re = {},
  Ht;
function Ei() {
  if (Ht) return re;
  ((Ht = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.refresh = void 0));
  const e = O(),
    r = S(),
    o = (0, e.getCallBridge)(),
    s = async (n) => {
      if ((await o("refresh", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((re.refresh = s), re);
}
var ne = {},
  Jt;
function Oi() {
  if (Jt) return ne;
  ((Jt = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.createHistory = void 0));
  const r = (0, O().getCallBridge)(),
    o = async () => {
      const s = await r("createHistory");
      return (
        s.listen((n) => {
          s.location = n;
        }),
        s
      );
    };
  return ((ne.createHistory = o), ne);
}
var ie = {},
  at = {},
  C = {},
  Wt;
function Jn() {
  return (
    Wt ||
      ((Wt = 1),
      Object.defineProperty(C, "__esModule", { value: !0 }),
      (C.FORGE_SUPPORTED_LOCALE_CODES = C.I18N_BUNDLE_FOLDER_NAME = C.I18N_INFO_FILE_NAME = void 0),
      (C.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (C.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (C.FORGE_SUPPORTED_LOCALE_CODES = [
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
    C
  );
}
var F = {},
  Xt;
function Ri() {
  if (Xt) return F;
  ((Xt = 1),
    Object.defineProperty(F, "__esModule", { value: !0 }),
    (F.TranslationsGetter = F.TranslationGetterError = void 0));
  const e = (s, n) => {
    s.includes(n) || s.push(n);
  };
  class r extends Error {
    constructor(n) {
      (super(n), (this.name = "TranslationGetterError"));
    }
  }
  F.TranslationGetterError = r;
  class o {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(n) {
      this.resourcesAccessor = n;
    }
    async getTranslations(n, a = { fallback: !0 }) {
      const t = await this.getI18nInfoConfig(),
        { fallback: c } = a;
      if (!c) {
        let l;
        return (
          t.locales.includes(n) && (l = await this.getTranslationResource(n)),
          { translations: l ?? null, locale: n }
        );
      }
      for (const l of this.getLocaleLookupOrder(n, t)) {
        const i = await this.getTranslationResource(l);
        if (i) return { translations: i, locale: l };
      }
      return { translations: null, locale: n };
    }
    async getTranslationsByLocaleLookupOrder(n) {
      const a = await this.getI18nInfoConfig(),
        t = this.getLocaleLookupOrder(n, a);
      return await Promise.all(
        t.map(async (c) => {
          const l = await this.getTranslationResource(c);
          return { locale: c, translations: l };
        }),
      );
    }
    reset() {
      ((this.i18nInfoConfig = null), this.translationResources.clear());
    }
    async getTranslationResource(n) {
      let a = this.translationResources.get(n);
      if (!a)
        try {
          ((a = await this.resourcesAccessor.getTranslationResource(n)),
            this.translationResources.set(n, a));
        } catch (t) {
          throw t instanceof r ? t : new r(`Failed to get translation resource for locale: ${n}`);
        }
      return a;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (n) {
          throw n instanceof r ? n : new r("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(n, a) {
      const { locales: t, fallback: c } = a,
        l = [n],
        i = c[n];
      return (
        i && Array.isArray(i) && i.length > 0 && l.push(...i),
        e(l, a.fallback.default),
        l.filter((u) => t.includes(u))
      );
    }
  }
  return ((F.TranslationsGetter = o), F);
}
var ae = {},
  ot = {},
  Yt;
function Wn() {
  return (
    Yt ||
      ((Yt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const o = I.__importDefault(si()),
          s = (a, t, c) => {
            const l = a[c];
            return l ? (0, e.getTranslationValueFromContent)(l, t) : null;
          };
        e.getTranslationValue = s;
        const n = (a, t) => {
          let c = a[t];
          if (!c) {
            const l = t.split(".");
            l.length > 1 && (c = (0, o.default)(a, l, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = n;
      })(ot)),
    ot
  );
}
var $t;
function Si() {
  if ($t) return ae;
  (($t = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.Translator = void 0));
  const e = Wn();
  class r {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(s, n) {
      ((this.locale = s), (this.translationsGetter = n));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(s) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let n = this.cache.get(s);
      if (n === void 0) {
        for (const { translations: a } of this.localeLookupOrderedTranslations) {
          const t = (0, e.getTranslationValueFromContent)(a, s);
          if (t !== null) {
            n = t;
            break;
          }
        }
        ((n = n ?? null), this.cache.set(s, n));
      }
      return n;
    }
  }
  return ((ae.Translator = r), ae);
}
var oe = {},
  Zt;
function Pi() {
  if (Zt) return oe;
  ((Zt = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.ensureLocale = void 0));
  const e = Jn(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    o = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    s = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (a, t) => {
        const [c] = t.split("-");
        return (a[c] || (a[c] = t), a);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    n = (a) => {
      const t = a.replace("_", "-");
      return r.has(t) ? t : (s[t] ?? o[t] ?? null);
    };
  return ((oe.ensureLocale = n), oe);
}
var st = {},
  Qt;
function Ii() {
  return (
    Qt ||
      ((Qt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (i) => typeof i == "object" && i !== null && !Array.isArray(i),
          o = (i) => typeof i?.i18n == "string",
          s = (i) => i.startsWith("connect-"),
          n = (i) => i.startsWith("core:"),
          a = (i) => {
            const u = new Set(),
              f = (h, d) =>
                !r(h) || u.has(h)
                  ? []
                  : (u.add(h),
                    Object.entries(h).flatMap(([p, _]) => {
                      const v = [...d, p];
                      return o(_)
                        ? [{ propertyPath: v, key: _.i18n }]
                        : Array.isArray(_)
                          ? _.flatMap((g) => f(g, v))
                          : f(_, v);
                    }));
            return f(i, []);
          },
          t = (i) =>
            Object.entries(i).flatMap(([u, f]) =>
              !s(u) && !n(u) && f && Array.isArray(f) && f.length > 0 ? f.map((h) => [h, u]) : [],
            );
        e.getI18nSupportedModuleEntries = t;
        const c = (i) => {
          const u = new Set();
          for (const f of (0, e.getI18nSupportedModuleEntries)(i)) {
            const h = a(f[0]);
            for (const { key: d } of h) u.add(d);
          }
          return u.size > 0 ? Array.from(u) : [];
        };
        e.extractI18nKeysFromModules = c;
        const l = (i) => {
          const u = [];
          for (const f of (0, e.getI18nSupportedModuleEntries)(i)) {
            const h = a(f[0]);
            for (const d of h) u.push({ moduleName: f[1], ...d });
          }
          return u;
        };
        e.extractI18nPropertiesFromModules = l;
      })(st)),
    st
  );
}
var ut = {},
  er;
function ji() {
  return (er || ((er = 1), Object.defineProperty(ut, "__esModule", { value: !0 })), ut);
}
var tr;
function Xn() {
  return (
    tr ||
      ((tr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const r = I;
        (r.__exportStar(Jn(), e),
          r.__exportStar(Ri(), e),
          r.__exportStar(Si(), e),
          r.__exportStar(Pi(), e));
        var o = Wn();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return o.getTranslationValue;
          },
        });
        var s = Ii();
        (Object.defineProperty(e, "extractI18nKeysFromModules", {
          enumerable: !0,
          get: function () {
            return s.extractI18nKeysFromModules;
          },
        }),
          Object.defineProperty(e, "extractI18nPropertiesFromModules", {
            enumerable: !0,
            get: function () {
              return s.extractI18nPropertiesFromModules;
            },
          }),
          Object.defineProperty(e, "getI18nSupportedModuleEntries", {
            enumerable: !0,
            get: function () {
              return s.getI18nSupportedModuleEntries;
            },
          }),
          r.__exportStar(ji(), e));
      })(at)),
    at
  );
}
var rr;
function qi() {
  if (rr) return ie;
  ((rr = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.getContext = void 0));
  const e = O(),
    r = Xn(),
    o = (0, e.getCallBridge)(),
    s = async () => {
      var n;
      const a = await o("getContext"),
        t = a?.locale;
      return (t && (a.locale = (n = (0, r.ensureLocale)(t)) !== null && n !== void 0 ? n : t), a);
    };
  return ((ie.getContext = s), ie);
}
var se = {},
  nr;
function Ai() {
  if (nr) return se;
  ((nr = 1),
    Object.defineProperty(se, "__esModule", { value: !0 }),
    (se.changeWindowTitle = void 0));
  const e = O(),
    r = S(),
    o = (0, e.getCallBridge)(),
    s = async (n) => {
      try {
        await o("changeWindowTitle", n);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((se.changeWindowTitle = s), se);
}
var ue = {},
  ir;
function Ci() {
  if (ir) return ue;
  ((ir = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.theme = void 0));
  const r = (0, O().getCallBridge)();
  return ((ue.theme = { enable: () => r("enableTheming") }), ue);
}
var le = {},
  ce = {},
  lt = {},
  k = {},
  ar;
function Yn() {
  if (ar) return k;
  ((ar = 1),
    Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.blobToBase64 = k.base64ToBlob = void 0));
  const e = (o, s) => {
    if (!o) return null;
    const n = o.includes(";base64") ? o.split(",")[1] : o,
      a = atob(n),
      t = new Array(a.length);
    for (let l = 0; l < a.length; l++) t[l] = a.charCodeAt(l);
    const c = new Uint8Array(t);
    return new Blob([c], { type: s });
  };
  k.base64ToBlob = e;
  const r = (o) =>
    new Promise((s, n) => {
      const a = new FileReader();
      ((a.onloadend = () => {
        s(a.result);
      }),
        (a.onerror = n),
        a.readAsDataURL(o));
    });
  return ((k.blobToBase64 = r), k);
}
var or;
function Mi() {
  return (
    or ||
      ((or = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const r = Yn(),
          o = (i) => {
            if (
              typeof i != "object" ||
              i === null ||
              Object.prototype.toString.call(i) !== "[object Object]"
            )
              return !1;
            const u = Object.getPrototypeOf(i);
            if (u === null) return !0;
            const f = Object.prototype.hasOwnProperty.call(u, "constructor") && u.constructor;
            return (
              typeof f == "function" &&
              f instanceof f &&
              Function.prototype.call(f) === Function.prototype.call(i)
            );
          },
          s = async (i) => ({ data: await (0, r.blobToBase64)(i), type: i.type }),
          n = (i) => (0, r.base64ToBlob)(i.data, i.type),
          a = async (i) => {
            if (i instanceof Blob) return { ...(await s(i)), __isBlobData: !0 };
            if (Array.isArray(i))
              return Promise.all(i.map((u) => (0, e.serialiseBlobsInPayload)(u)));
            if (i && o(i)) {
              const u = await Promise.all(
                Object.entries(i).map(async ([f, h]) => [
                  f,
                  await (0, e.serialiseBlobsInPayload)(h),
                ]),
              );
              return Object.fromEntries(u);
            }
            return i;
          };
        e.serialiseBlobsInPayload = a;
        const t = (i) => {
          if (i && o(i) && "__isBlobData" in i) {
            const u = i;
            return n({ data: u.data, type: u.type });
          }
          if (Array.isArray(i)) return i.map((u) => (0, e.deserialiseBlobsInPayload)(u));
          if (i && o(i)) {
            const u = {};
            for (const [f, h] of Object.entries(i)) u[f] = (0, e.deserialiseBlobsInPayload)(h);
            return u;
          }
          return i;
        };
        e.deserialiseBlobsInPayload = t;
        const c = (i) =>
          i instanceof Blob
            ? !0
            : Array.isArray(i)
              ? i.some((u) => (0, e.containsBlobs)(u))
              : i && o(i)
                ? Object.values(i).some((u) => (0, e.containsBlobs)(u))
                : !1;
        e.containsBlobs = c;
        const l = (i) =>
          i && o(i) && "__isBlobData" in i
            ? !0
            : Array.isArray(i)
              ? i.some((u) => (0, e.containsSerialisedBlobs)(u))
              : i && o(i)
                ? Object.values(i).some((u) => (0, e.containsSerialisedBlobs)(u))
                : !1;
        e.containsSerialisedBlobs = l;
      })(lt)),
    lt
  );
}
var sr;
function $n() {
  if (sr) return ce;
  ((sr = 1), Object.defineProperty(ce, "__esModule", { value: !0 }), (ce.events = void 0));
  const e = O(),
    r = Mi(),
    o = (0, e.getCallBridge)(),
    s = async (a, t) => {
      let c = t;
      return (
        (0, r.containsBlobs)(t) && (c = await (0, r.serialiseBlobsInPayload)(t)),
        o("emit", { event: a, payload: c })
      );
    },
    n = (a, t) =>
      o("on", {
        event: a,
        callback: (l) => {
          let i = l;
          return (
            (0, r.containsSerialisedBlobs)(l) && (i = (0, r.deserialiseBlobsInPayload)(l)),
            t(i)
          );
        },
      });
  return ((ce.events = { emit: s, on: n }), ce);
}
var ur;
function Ti() {
  if (ur) return le;
  ((ur = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.emitReadyEvent = void 0));
  const e = $n(),
    r = ti(),
    o = "EXTENSION_READY",
    s = async () => {
      const n = await r.view.getContext();
      await e.events.emit(o, { localId: n.localId });
    };
  return ((le.emitReadyEvent = s), le);
}
const Di = "modulepreload",
  Bi = function (e, r) {
    return new URL(e, r).href;
  },
  lr = {},
  Fi = function (r, o, s) {
    let n = Promise.resolve();
    if (o && o.length > 0) {
      let i = function (u) {
        return Promise.all(
          u.map((f) =>
            Promise.resolve(f).then(
              (h) => ({ status: "fulfilled", value: h }),
              (h) => ({ status: "rejected", reason: h }),
            ),
          ),
        );
      };
      const t = document.getElementsByTagName("link"),
        c = document.querySelector("meta[property=csp-nonce]"),
        l = c?.nonce || c?.getAttribute("nonce");
      n = i(
        o.map((u) => {
          if (((u = Bi(u, s)), u in lr)) return;
          lr[u] = !0;
          const f = u.endsWith(".css"),
            h = f ? '[rel="stylesheet"]' : "";
          if (s)
            for (let p = t.length - 1; p >= 0; p--) {
              const _ = t[p];
              if (_.href === u && (!f || _.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${u}"]${h}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = f ? "stylesheet" : Di),
            f || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = u),
            l && d.setAttribute("nonce", l),
            document.head.appendChild(d),
            f)
          )
            return new Promise((p, _) => {
              (d.addEventListener("load", p),
                d.addEventListener("error", () => _(new Error(`Unable to preload CSS for ${u}`))));
            });
        }),
      );
    }
    function a(t) {
      const c = new Event("vite:preloadError", { cancelable: !0 });
      if (((c.payload = t), window.dispatchEvent(c), !c.defaultPrevented)) throw t;
    }
    return n.then((t) => {
      for (const c of t || []) c.status === "rejected" && a(c.reason);
      return r().catch(a);
    });
  };
var de = {},
  ct = {},
  fe = {},
  Ve = {},
  cr;
function Zn() {
  if (cr) return Ve;
  ((cr = 1), Object.defineProperty(Ve, "__esModule", { value: !0 }), (Ve.default = o));
  let e;
  const r = new Uint8Array(16);
  function o() {
    if (
      !e &&
      ((e = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)),
      !e)
    )
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    return e(r);
  }
  return Ve;
}
var x = {},
  _e = {},
  ve = {},
  dr;
function ki() {
  if (dr) return ve;
  ((dr = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((ve.default = e), ve);
}
var fr;
function Xe() {
  if (fr) return _e;
  ((fr = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e = r(ki());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function o(n) {
    return typeof n == "string" && e.default.test(n);
  }
  var s = o;
  return ((_e.default = s), _e);
}
var _r;
function Ye() {
  if (_r) return x;
  ((_r = 1),
    Object.defineProperty(x, "__esModule", { value: !0 }),
    (x.default = void 0),
    (x.unsafeStringify = s));
  var e = r(Xe());
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }
  const o = [];
  for (let t = 0; t < 256; ++t) o.push((t + 256).toString(16).slice(1));
  function s(t, c = 0) {
    return (
      o[t[c + 0]] +
      o[t[c + 1]] +
      o[t[c + 2]] +
      o[t[c + 3]] +
      "-" +
      o[t[c + 4]] +
      o[t[c + 5]] +
      "-" +
      o[t[c + 6]] +
      o[t[c + 7]] +
      "-" +
      o[t[c + 8]] +
      o[t[c + 9]] +
      "-" +
      o[t[c + 10]] +
      o[t[c + 11]] +
      o[t[c + 12]] +
      o[t[c + 13]] +
      o[t[c + 14]] +
      o[t[c + 15]]
    );
  }
  function n(t, c = 0) {
    const l = s(t, c);
    if (!(0, e.default)(l)) throw TypeError("Stringified UUID is invalid");
    return l;
  }
  var a = n;
  return ((x.default = a), x);
}
var vr;
function Ui() {
  if (vr) return fe;
  ((vr = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  var e = o(Zn()),
    r = Ye();
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  let s,
    n,
    a = 0,
    t = 0;
  function c(i, u, f) {
    let h = (u && f) || 0;
    const d = u || new Array(16);
    i = i || {};
    let p = i.node || s,
      _ = i.clockseq !== void 0 ? i.clockseq : n;
    if (p == null || _ == null) {
      const E = i.random || (i.rng || e.default)();
      (p == null && (p = s = [E[0] | 1, E[1], E[2], E[3], E[4], E[5]]),
        _ == null && (_ = n = ((E[6] << 8) | E[7]) & 16383));
    }
    let v = i.msecs !== void 0 ? i.msecs : Date.now(),
      g = i.nsecs !== void 0 ? i.nsecs : t + 1;
    const y = v - a + (g - t) / 1e4;
    if (
      (y < 0 && i.clockseq === void 0 && (_ = (_ + 1) & 16383),
      (y < 0 || v > a) && i.nsecs === void 0 && (g = 0),
      g >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((a = v), (t = g), (n = _), (v += 122192928e5));
    const m = ((v & 268435455) * 1e4 + g) % 4294967296;
    ((d[h++] = (m >>> 24) & 255),
      (d[h++] = (m >>> 16) & 255),
      (d[h++] = (m >>> 8) & 255),
      (d[h++] = m & 255));
    const R = ((v / 4294967296) * 1e4) & 268435455;
    ((d[h++] = (R >>> 8) & 255),
      (d[h++] = R & 255),
      (d[h++] = ((R >>> 24) & 15) | 16),
      (d[h++] = (R >>> 16) & 255),
      (d[h++] = (_ >>> 8) | 128),
      (d[h++] = _ & 255));
    for (let E = 0; E < 6; ++E) d[h + E] = p[E];
    return u || (0, r.unsafeStringify)(d);
  }
  var l = c;
  return ((fe.default = l), fe);
}
var he = {},
  D = {},
  ge = {},
  hr;
function Qn() {
  if (hr) return ge;
  ((hr = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  var e = r(Xe());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function o(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    let a;
    const t = new Uint8Array(16);
    return (
      (t[0] = (a = parseInt(n.slice(0, 8), 16)) >>> 24),
      (t[1] = (a >>> 16) & 255),
      (t[2] = (a >>> 8) & 255),
      (t[3] = a & 255),
      (t[4] = (a = parseInt(n.slice(9, 13), 16)) >>> 8),
      (t[5] = a & 255),
      (t[6] = (a = parseInt(n.slice(14, 18), 16)) >>> 8),
      (t[7] = a & 255),
      (t[8] = (a = parseInt(n.slice(19, 23), 16)) >>> 8),
      (t[9] = a & 255),
      (t[10] = ((a = parseInt(n.slice(24, 36), 16)) / 1099511627776) & 255),
      (t[11] = (a / 4294967296) & 255),
      (t[12] = (a >>> 24) & 255),
      (t[13] = (a >>> 16) & 255),
      (t[14] = (a >>> 8) & 255),
      (t[15] = a & 255),
      t
    );
  }
  var s = o;
  return ((ge.default = s), ge);
}
var gr;
function ei() {
  if (gr) return D;
  ((gr = 1),
    Object.defineProperty(D, "__esModule", { value: !0 }),
    (D.URL = D.DNS = void 0),
    (D.default = t));
  var e = Ye(),
    r = o(Qn());
  function o(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function s(c) {
    c = unescape(encodeURIComponent(c));
    const l = [];
    for (let i = 0; i < c.length; ++i) l.push(c.charCodeAt(i));
    return l;
  }
  const n = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  D.DNS = n;
  const a = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  D.URL = a;
  function t(c, l, i) {
    function u(f, h, d, p) {
      var _;
      if (
        (typeof f == "string" && (f = s(f)),
        typeof h == "string" && (h = (0, r.default)(h)),
        ((_ = h) === null || _ === void 0 ? void 0 : _.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let v = new Uint8Array(16 + f.length);
      if (
        (v.set(h),
        v.set(f, h.length),
        (v = i(v)),
        (v[6] = (v[6] & 15) | l),
        (v[8] = (v[8] & 63) | 128),
        d)
      ) {
        p = p || 0;
        for (let g = 0; g < 16; ++g) d[p + g] = v[g];
        return d;
      }
      return (0, e.unsafeStringify)(v);
    }
    try {
      u.name = c;
    } catch {}
    return ((u.DNS = n), (u.URL = a), u);
  }
  return D;
}
var pe = {},
  pr;
function Ni() {
  if (pr) return pe;
  ((pr = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  function e(d) {
    if (typeof d == "string") {
      const p = unescape(encodeURIComponent(d));
      d = new Uint8Array(p.length);
      for (let _ = 0; _ < p.length; ++_) d[_] = p.charCodeAt(_);
    }
    return r(s(n(d), d.length * 8));
  }
  function r(d) {
    const p = [],
      _ = d.length * 32,
      v = "0123456789abcdef";
    for (let g = 0; g < _; g += 8) {
      const y = (d[g >> 5] >>> (g % 32)) & 255,
        m = parseInt(v.charAt((y >>> 4) & 15) + v.charAt(y & 15), 16);
      p.push(m);
    }
    return p;
  }
  function o(d) {
    return (((d + 64) >>> 9) << 4) + 14 + 1;
  }
  function s(d, p) {
    ((d[p >> 5] |= 128 << (p % 32)), (d[o(p) - 1] = p));
    let _ = 1732584193,
      v = -271733879,
      g = -1732584194,
      y = 271733878;
    for (let m = 0; m < d.length; m += 16) {
      const R = _,
        E = v,
        A = g,
        T = y;
      ((_ = l(_, v, g, y, d[m], 7, -680876936)),
        (y = l(y, _, v, g, d[m + 1], 12, -389564586)),
        (g = l(g, y, _, v, d[m + 2], 17, 606105819)),
        (v = l(v, g, y, _, d[m + 3], 22, -1044525330)),
        (_ = l(_, v, g, y, d[m + 4], 7, -176418897)),
        (y = l(y, _, v, g, d[m + 5], 12, 1200080426)),
        (g = l(g, y, _, v, d[m + 6], 17, -1473231341)),
        (v = l(v, g, y, _, d[m + 7], 22, -45705983)),
        (_ = l(_, v, g, y, d[m + 8], 7, 1770035416)),
        (y = l(y, _, v, g, d[m + 9], 12, -1958414417)),
        (g = l(g, y, _, v, d[m + 10], 17, -42063)),
        (v = l(v, g, y, _, d[m + 11], 22, -1990404162)),
        (_ = l(_, v, g, y, d[m + 12], 7, 1804603682)),
        (y = l(y, _, v, g, d[m + 13], 12, -40341101)),
        (g = l(g, y, _, v, d[m + 14], 17, -1502002290)),
        (v = l(v, g, y, _, d[m + 15], 22, 1236535329)),
        (_ = i(_, v, g, y, d[m + 1], 5, -165796510)),
        (y = i(y, _, v, g, d[m + 6], 9, -1069501632)),
        (g = i(g, y, _, v, d[m + 11], 14, 643717713)),
        (v = i(v, g, y, _, d[m], 20, -373897302)),
        (_ = i(_, v, g, y, d[m + 5], 5, -701558691)),
        (y = i(y, _, v, g, d[m + 10], 9, 38016083)),
        (g = i(g, y, _, v, d[m + 15], 14, -660478335)),
        (v = i(v, g, y, _, d[m + 4], 20, -405537848)),
        (_ = i(_, v, g, y, d[m + 9], 5, 568446438)),
        (y = i(y, _, v, g, d[m + 14], 9, -1019803690)),
        (g = i(g, y, _, v, d[m + 3], 14, -187363961)),
        (v = i(v, g, y, _, d[m + 8], 20, 1163531501)),
        (_ = i(_, v, g, y, d[m + 13], 5, -1444681467)),
        (y = i(y, _, v, g, d[m + 2], 9, -51403784)),
        (g = i(g, y, _, v, d[m + 7], 14, 1735328473)),
        (v = i(v, g, y, _, d[m + 12], 20, -1926607734)),
        (_ = u(_, v, g, y, d[m + 5], 4, -378558)),
        (y = u(y, _, v, g, d[m + 8], 11, -2022574463)),
        (g = u(g, y, _, v, d[m + 11], 16, 1839030562)),
        (v = u(v, g, y, _, d[m + 14], 23, -35309556)),
        (_ = u(_, v, g, y, d[m + 1], 4, -1530992060)),
        (y = u(y, _, v, g, d[m + 4], 11, 1272893353)),
        (g = u(g, y, _, v, d[m + 7], 16, -155497632)),
        (v = u(v, g, y, _, d[m + 10], 23, -1094730640)),
        (_ = u(_, v, g, y, d[m + 13], 4, 681279174)),
        (y = u(y, _, v, g, d[m], 11, -358537222)),
        (g = u(g, y, _, v, d[m + 3], 16, -722521979)),
        (v = u(v, g, y, _, d[m + 6], 23, 76029189)),
        (_ = u(_, v, g, y, d[m + 9], 4, -640364487)),
        (y = u(y, _, v, g, d[m + 12], 11, -421815835)),
        (g = u(g, y, _, v, d[m + 15], 16, 530742520)),
        (v = u(v, g, y, _, d[m + 2], 23, -995338651)),
        (_ = f(_, v, g, y, d[m], 6, -198630844)),
        (y = f(y, _, v, g, d[m + 7], 10, 1126891415)),
        (g = f(g, y, _, v, d[m + 14], 15, -1416354905)),
        (v = f(v, g, y, _, d[m + 5], 21, -57434055)),
        (_ = f(_, v, g, y, d[m + 12], 6, 1700485571)),
        (y = f(y, _, v, g, d[m + 3], 10, -1894986606)),
        (g = f(g, y, _, v, d[m + 10], 15, -1051523)),
        (v = f(v, g, y, _, d[m + 1], 21, -2054922799)),
        (_ = f(_, v, g, y, d[m + 8], 6, 1873313359)),
        (y = f(y, _, v, g, d[m + 15], 10, -30611744)),
        (g = f(g, y, _, v, d[m + 6], 15, -1560198380)),
        (v = f(v, g, y, _, d[m + 13], 21, 1309151649)),
        (_ = f(_, v, g, y, d[m + 4], 6, -145523070)),
        (y = f(y, _, v, g, d[m + 11], 10, -1120210379)),
        (g = f(g, y, _, v, d[m + 2], 15, 718787259)),
        (v = f(v, g, y, _, d[m + 9], 21, -343485551)),
        (_ = a(_, R)),
        (v = a(v, E)),
        (g = a(g, A)),
        (y = a(y, T)));
    }
    return [_, v, g, y];
  }
  function n(d) {
    if (d.length === 0) return [];
    const p = d.length * 8,
      _ = new Uint32Array(o(p));
    for (let v = 0; v < p; v += 8) _[v >> 5] |= (d[v / 8] & 255) << (v % 32);
    return _;
  }
  function a(d, p) {
    const _ = (d & 65535) + (p & 65535);
    return (((d >> 16) + (p >> 16) + (_ >> 16)) << 16) | (_ & 65535);
  }
  function t(d, p) {
    return (d << p) | (d >>> (32 - p));
  }
  function c(d, p, _, v, g, y) {
    return a(t(a(a(p, d), a(v, y)), g), _);
  }
  function l(d, p, _, v, g, y, m) {
    return c((p & _) | (~p & v), d, p, g, y, m);
  }
  function i(d, p, _, v, g, y, m) {
    return c((p & v) | (_ & ~v), d, p, g, y, m);
  }
  function u(d, p, _, v, g, y, m) {
    return c(p ^ _ ^ v, d, p, g, y, m);
  }
  function f(d, p, _, v, g, y, m) {
    return c(_ ^ (p | ~v), d, p, g, y, m);
  }
  var h = e;
  return ((pe.default = h), pe);
}
var yr;
function Li() {
  if (yr) return he;
  ((yr = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  var e = o(ei()),
    r = o(Ni());
  function o(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var n = (0, e.default)("v3", 48, r.default);
  return ((he.default = n), he);
}
var ye = {},
  me = {},
  mr;
function xi() {
  if (mr) return me;
  ((mr = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((me.default = r), me);
}
var br;
function Gi() {
  if (br) return ye;
  ((br = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.default = void 0));
  var e = s(xi()),
    r = s(Zn()),
    o = Ye();
  function s(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function n(t, c, l) {
    if (e.default.randomUUID && !c && !t) return e.default.randomUUID();
    t = t || {};
    const i = t.random || (t.rng || r.default)();
    if (((i[6] = (i[6] & 15) | 64), (i[8] = (i[8] & 63) | 128), c)) {
      l = l || 0;
      for (let u = 0; u < 16; ++u) c[l + u] = i[u];
      return c;
    }
    return (0, o.unsafeStringify)(i);
  }
  var a = n;
  return ((ye.default = a), ye);
}
var be = {},
  we = {},
  wr;
function Vi() {
  if (wr) return we;
  ((wr = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.default = void 0));
  function e(n, a, t, c) {
    switch (n) {
      case 0:
        return (a & t) ^ (~a & c);
      case 1:
        return a ^ t ^ c;
      case 2:
        return (a & t) ^ (a & c) ^ (t & c);
      case 3:
        return a ^ t ^ c;
    }
  }
  function r(n, a) {
    return (n << a) | (n >>> (32 - a));
  }
  function o(n) {
    const a = [1518500249, 1859775393, 2400959708, 3395469782],
      t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof n == "string") {
      const u = unescape(encodeURIComponent(n));
      n = [];
      for (let f = 0; f < u.length; ++f) n.push(u.charCodeAt(f));
    } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
    n.push(128);
    const c = n.length / 4 + 2,
      l = Math.ceil(c / 16),
      i = new Array(l);
    for (let u = 0; u < l; ++u) {
      const f = new Uint32Array(16);
      for (let h = 0; h < 16; ++h)
        f[h] =
          (n[u * 64 + h * 4] << 24) |
          (n[u * 64 + h * 4 + 1] << 16) |
          (n[u * 64 + h * 4 + 2] << 8) |
          n[u * 64 + h * 4 + 3];
      i[u] = f;
    }
    ((i[l - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
      (i[l - 1][14] = Math.floor(i[l - 1][14])),
      (i[l - 1][15] = ((n.length - 1) * 8) & 4294967295));
    for (let u = 0; u < l; ++u) {
      const f = new Uint32Array(80);
      for (let g = 0; g < 16; ++g) f[g] = i[u][g];
      for (let g = 16; g < 80; ++g) f[g] = r(f[g - 3] ^ f[g - 8] ^ f[g - 14] ^ f[g - 16], 1);
      let h = t[0],
        d = t[1],
        p = t[2],
        _ = t[3],
        v = t[4];
      for (let g = 0; g < 80; ++g) {
        const y = Math.floor(g / 20),
          m = (r(h, 5) + e(y, d, p, _) + v + a[y] + f[g]) >>> 0;
        ((v = _), (_ = p), (p = r(d, 30) >>> 0), (d = h), (h = m));
      }
      ((t[0] = (t[0] + h) >>> 0),
        (t[1] = (t[1] + d) >>> 0),
        (t[2] = (t[2] + p) >>> 0),
        (t[3] = (t[3] + _) >>> 0),
        (t[4] = (t[4] + v) >>> 0));
    }
    return [
      (t[0] >> 24) & 255,
      (t[0] >> 16) & 255,
      (t[0] >> 8) & 255,
      t[0] & 255,
      (t[1] >> 24) & 255,
      (t[1] >> 16) & 255,
      (t[1] >> 8) & 255,
      t[1] & 255,
      (t[2] >> 24) & 255,
      (t[2] >> 16) & 255,
      (t[2] >> 8) & 255,
      t[2] & 255,
      (t[3] >> 24) & 255,
      (t[3] >> 16) & 255,
      (t[3] >> 8) & 255,
      t[3] & 255,
      (t[4] >> 24) & 255,
      (t[4] >> 16) & 255,
      (t[4] >> 8) & 255,
      t[4] & 255,
    ];
  }
  var s = o;
  return ((we.default = s), we);
}
var Er;
function zi() {
  if (Er) return be;
  ((Er = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.default = void 0));
  var e = o(ei()),
    r = o(Vi());
  function o(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var n = (0, e.default)("v5", 80, r.default);
  return ((be.default = n), be);
}
var Ee = {},
  Or;
function Ki() {
  if (Or) return Ee;
  ((Or = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((Ee.default = e), Ee);
}
var Oe = {},
  Rr;
function Hi() {
  if (Rr) return Oe;
  ((Rr = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.default = void 0));
  var e = r(Xe());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function o(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    return parseInt(n.slice(14, 15), 16);
  }
  var s = o;
  return ((Oe.default = s), Oe);
}
var Sr;
function Ji() {
  return (
    Sr ||
      ((Sr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "NIL", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(e, "parse", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(e, "stringify", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(e, "v1", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(e, "v3", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(e, "v4", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(e, "v5", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(e, "validate", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          }),
          Object.defineProperty(e, "version", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }));
        var r = u(Ui()),
          o = u(Li()),
          s = u(Gi()),
          n = u(zi()),
          a = u(Ki()),
          t = u(Hi()),
          c = u(Xe()),
          l = u(Ye()),
          i = u(Qn());
        function u(f) {
          return f && f.__esModule ? f : { default: f };
        }
      })(ct)),
    ct
  );
}
var Pr;
function Wi() {
  if (Pr) return de;
  ((Pr = 1),
    Object.defineProperty(de, "__esModule", { value: !0 }),
    (de.createAdfRendererIframeProps = void 0));
  const e = Ji(),
    r = async (o, s) => {
      const n = await Fi(
          () => import("./index-Byf9Kz4g.js").then((u) => u.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        a = n.default || n,
        t = new URL(document.referrer).origin,
        c = `${t}/forge-apps/adf-renderer`,
        l = s || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        i = () => {
          var u, f;
          const h = document.getElementById(l),
            d = {
              type: "adf-document",
              document: (u = o.extension.macro) === null || u === void 0 ? void 0 : u.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: o.localId,
            };
          (a.iframeResizer(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (p) => {
                var _;
                (_ = p?.iFrameResizer) === null || _ === void 0 || _.resize();
              },
            },
            h || "",
          ),
            (f = h?.contentWindow) === null || f === void 0 || f.postMessage(d, t));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: l, src: c, onLoad: i }
      );
    };
  return ((de.createAdfRendererIframeProps = r), de);
}
var Ir;
function ti() {
  if (Ir) return Z;
  ((Ir = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.view = void 0));
  const e = mi(),
    r = bi(),
    o = wi(),
    s = Ei(),
    n = Oi(),
    a = qi(),
    t = Ai(),
    c = Ci(),
    l = Ti(),
    i = Wi();
  return (
    (Z.view = {
      submit: e.submit,
      close: r.close,
      open: o.open,
      refresh: s.refresh,
      createHistory: n.createHistory,
      getContext: a.getContext,
      theme: c.theme,
      changeWindowTitle: t.changeWindowTitle,
      emitReadyEvent: l.emitReadyEvent,
      createAdfRendererIframeProps: i.createAdfRendererIframeProps,
    }),
    Z
  );
}
var jr;
function qt() {
  return (
    jr ||
      ((jr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(ti(), e));
      })(it)),
    it
  );
}
var dt = {},
  Re = {},
  qr;
function Xi() {
  if (qr) return Re;
  ((qr = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.router = void 0));
  const r = (0, O().getCallBridge)(),
    o = async (t) => {
      if (!t?.target) throw new Error("target is required for getUrl");
      const c = await r("getUrl", t);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (l) {
        throw new Error(`Failed to parse URL: ${c} (${l})`);
      }
    },
    s = (t) => {
      if (typeof t == "string") return r("navigate", { url: t, type: "same-tab" });
      if (!t?.target) throw new Error("target is required for navigation");
      return r("navigate", { ...t, type: "same-tab" });
    },
    n = (t) => {
      if (typeof t == "string") return r("navigate", { url: t, type: "new-tab" });
      if (!t?.target) throw new Error("target is required for navigation");
      return r("navigate", { ...t, type: "new-tab" });
    },
    a = async () => r("reload");
  return ((Re.router = { getUrl: o, navigate: s, open: n, reload: a }), Re);
}
var Ar;
function Yi() {
  return (
    Ar ||
      ((Ar = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(Xi(), e));
      })(dt)),
    dt
  );
}
var ft = {},
  Se = {},
  Cr;
function $i() {
  if (Cr) return Se;
  ((Cr = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.Modal = void 0));
  const e = O(),
    r = S(),
    o = (0, e.getCallBridge)(),
    s = () => {};
  class n {
    constructor(t) {
      var c, l;
      ((this.resource = t?.resource || null),
        (this.onClose = t?.onClose || s),
        (this.size = t?.size || "medium"),
        (this.context = t?.context || {}),
        (this.closeOnEscape = (c = t?.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick =
          (l = t?.closeOnOverlayClick) !== null && l !== void 0 ? l : !0));
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
          throw new r.BridgeAPIError("Unable to open modal.");
      } catch {
        throw new r.BridgeAPIError("Unable to open modal.");
      }
    }
  }
  return ((Se.Modal = n), Se);
}
var Mr;
function Zi() {
  return (
    Mr ||
      ((Mr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar($i(), e));
      })(ft)),
    ft
  );
}
var q = {},
  U = {},
  Tr;
function Qi() {
  if (Tr) return U;
  ((Tr = 1),
    Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.productFetchApi = U.remoteFetchApi = void 0));
  const e = Yn(),
    r = async (t) => {
      const c = {};
      for (const [l, i] of t.entries())
        if (l === "file") {
          const u = i.name,
            f = i.type;
          ((c.file = await (0, e.blobToBase64)(i)), (c.__fileName = u), (c.__fileType = f));
        } else c[l] = i;
      return JSON.stringify(c);
    },
    o = (t) => {
      if (!t) return t;
      if ("signal" in t) {
        const { signal: c, ...l } = t;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          l
        );
      }
      return t;
    },
    s = async (t) => {
      const c = t?.body instanceof FormData,
        l = c ? await r(t?.body) : t?.body,
        i = new Request("", { body: l, method: t?.method, headers: t?.headers }),
        u = Object.fromEntries(i.headers.entries());
      return {
        body: i.method !== "GET" ? await i.text() : null,
        headers: new Headers(u),
        isMultipartFormData: c,
      };
    },
    n = (t) => {
      const c = async (l, i) => {
        const u = o(i),
          { body: f, headers: h, isMultipartFormData: d } = await s(u),
          p = {
            remoteKey: l,
            fetchRequestInit: { ...u, body: f, headers: [...h.entries()] },
            isMultipartFormData: d,
          },
          {
            body: _,
            headers: v,
            statusText: g,
            status: y,
            isAttachment: m,
          } = await t("fetchRemote", p),
          R = m ? (0, e.base64ToBlob)(_, v["content-type"]) : _;
        return new Response(R || null, { headers: v, status: y, statusText: g });
      };
      return { requestRemote: (l, i) => c(l, i) };
    };
  U.remoteFetchApi = n;
  const a = (t) => {
    const c = async (l, i, u) => {
      const f = o(u),
        { body: h, headers: d, isMultipartFormData: p } = await s(f);
      d.has("X-Atlassian-Token") || d.set("X-Atlassian-Token", "no-check");
      const _ = {
          product: l,
          restPath: i,
          fetchRequestInit: { ...f, body: h, headers: [...d.entries()] },
          isMultipartFormData: p,
        },
        {
          body: v,
          headers: g,
          statusText: y,
          status: m,
          isAttachment: R,
        } = await t("fetchProduct", _),
        E = R ? (0, e.base64ToBlob)(v, g["content-type"]) : v;
      return new Response(E || null, { headers: g, status: m, statusText: y });
    };
    return {
      requestConfluence: (l, i) => c("confluence", l, i),
      requestJira: (l, i) => c("jira", l, i),
      requestBitbucket: (l, i) => c("bitbucket", l, i),
    };
  };
  return ((U.productFetchApi = a), U);
}
var Dr;
function ea() {
  if (Dr) return q;
  Dr = 1;
  var e;
  (Object.defineProperty(q, "__esModule", { value: !0 }),
    (q.requestRemote = q.requestBitbucket = q.requestJira = q.requestConfluence = void 0));
  const r = O(),
    o = Qi();
  return (
    (e = (0, o.productFetchApi)((0, r.getCallBridge)())),
    (q.requestConfluence = e.requestConfluence),
    (q.requestJira = e.requestJira),
    (q.requestBitbucket = e.requestBitbucket),
    (q.requestRemote = (0, o.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    q
  );
}
var _t = {},
  Pe = {},
  Br;
function ta() {
  if (Br) return Pe;
  ((Br = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.showFlag = void 0));
  const e = O(),
    r = S(),
    o = (0, e.getCallBridge)(),
    s = (n) => {
      var a;
      if (!n.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = o("showFlag", { ...n, type: (a = n.type) !== null && a !== void 0 ? a : "info" });
      return { close: async () => (await t, o("closeFlag", { id: n.id })) };
    };
  return ((Pe.showFlag = s), Pe);
}
var Fr;
function ra() {
  return (
    Fr ||
      ((Fr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = ta();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return r.showFlag;
          },
        });
      })(_t)),
    _t
  );
}
var vt = {},
  kr;
function na() {
  return (
    kr ||
      ((kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar($n(), e));
      })(vt)),
    vt
  );
}
var ht = {},
  Ie = {},
  Ur;
function ia() {
  if (Ur) return Ie;
  ((Ur = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.realtime = void 0));
  const r = (0, O().getCallBridge)(),
    o = (t, c, l) => r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: l }),
    s = (t, c, l) => r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: l }),
    n = (t, c, l) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: l, isGlobal: !0 }),
    a = (t, c, l) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: l, isGlobal: !0 });
  return ((Ie.realtime = { publish: o, subscribe: s, publishGlobal: n, subscribeGlobal: a }), Ie);
}
var gt = {},
  Nr;
function aa() {
  return (
    Nr ||
      ((Nr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = void 0),
          (function (r) {
            ((r.Board = "board"), (r.Issue = "issue"), (r.Project = "project"));
          })(e.Jira || (e.Jira = {})),
          (function (r) {
            ((r.Content = "content"), (r.Space = "space"));
          })(e.Confluence || (e.Confluence = {})),
          (function (r) {
            ((r.Repository = "repository"), (r.PullRequest = "pullRequest"));
          })(e.Bitbucket || (e.Bitbucket = {})));
      })(gt)),
    gt
  );
}
var Lr;
function oa() {
  return (
    Lr ||
      ((Lr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var r = ia();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return r.realtime;
          },
        });
        var o = aa();
        (Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return o.Jira;
          },
        }),
          Object.defineProperty(e, "Confluence", {
            enumerable: !0,
            get: function () {
              return o.Confluence;
            },
          }),
          Object.defineProperty(e, "Bitbucket", {
            enumerable: !0,
            get: function () {
              return o.Bitbucket;
            },
          }));
      })(ht)),
    ht
  );
}
var pt = {},
  je = {},
  yt = {},
  xr;
function sa() {
  return (
    xr ||
      ((xr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = O(),
          o = S(),
          s = 30,
          n = (0, r.getCallBridge)();
        e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE =
          "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
        const a = (c) => {
            switch (c.type) {
              case "forge":
                return { agentName: c.agentName, agentKey: c.agentKey, prompt: c.prompt };
              case "atlassian":
                return { agentName: c.agentName, prompt: c.prompt };
              default:
                return { prompt: c.prompt };
            }
          },
          t = async (c) => {
            if (c.type === "forge") {
              if (c.agentName.length > s) throw new Error("rovo agent name too long");
              if (c.agentKey.length > s) throw new Error("rovo agent key too long");
            }
            const l = a(c);
            if ((await n("openRovo", l)) === !1)
              throw new o.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(yt)),
    yt
  );
}
var Gr;
function ua() {
  if (Gr) return je;
  ((Gr = 1), Object.defineProperty(je, "__esModule", { value: !0 }), (je.rovo = void 0));
  const e = sa();
  return ((je.rovo = { open: e.open }), je);
}
var Vr;
function la() {
  return (
    Vr ||
      ((Vr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(ua(), e));
      })(pt)),
    pt
  );
}
var M = {},
  zr;
function ca() {
  if (zr) return M;
  ((zr = 1),
    Object.defineProperty(M, "__esModule", { value: !0 }),
    (M.createTranslationFunction = M.getTranslations = M.resetTranslationsCache = void 0));
  const e = Xn(),
    r = qt(),
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
    s = new e.TranslationsGetter(o),
    n = () => {
      s.reset();
    };
  M.resetTranslationsCache = n;
  const a = async (c = null, l = { fallback: !0 }) => {
    let i = c;
    return (i || (i = (await r.view.getContext()).locale), await s.getTranslations(i, l));
  };
  M.getTranslations = a;
  const t = async (c = null) => {
    let l = c;
    l || (l = (await r.view.getContext()).locale);
    const i = new e.Translator(l, s);
    return (
      await i.init(),
      (u, f) => {
        var h, d;
        return (d = (h = i.translate(u)) !== null && h !== void 0 ? h : f) !== null && d !== void 0
          ? d
          : u;
      }
    );
  };
  return ((M.createTranslationFunction = t), M);
}
var mt = {},
  qe = {},
  Kr;
function da() {
  if (Kr) return qe;
  ((Kr = 1), Object.defineProperty(qe, "__esModule", { value: !0 }), (qe.permissions = void 0));
  const r = (0, O().getCallBridge)(),
    o = async (l) => r("__permission__egressGet", l),
    s = async (l) => r("__permission__egressSet", l),
    n = async (l) => r("__permission__egressDeleteDomain", l),
    a = async (l) => r("__permission__egressDeleteGroup", l),
    t = async (l) => r("__permission__remoteGet", l),
    c = async (l) => r("__permission__remoteSet", l);
  return (
    (qe.permissions = {
      egress: { get: o, set: s, deleteDomain: n, deleteGroup: a },
      remote: { get: t, set: c },
    }),
    qe
  );
}
var Hr;
function fa() {
  return (
    Hr ||
      ((Hr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(da(), e));
      })(mt)),
    mt
  );
}
var bt = {},
  wt = {},
  Et = {},
  Ae = {},
  Ce = {},
  Jr;
function ri() {
  return (
    Jr ||
      ((Jr = 1),
      Object.defineProperty(Ce, "__esModule", { value: !0 }),
      (Ce.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Ce.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Ce
  );
}
var Wr;
function $e() {
  if (Wr) return Ae;
  ((Wr = 1),
    Object.defineProperty(Ae, "__esModule", { value: !0 }),
    (Ae.checkRestrictedEnvironment = void 0));
  const e = S(),
    r = qt(),
    o = ri(),
    s = async () => {
      const { environmentType: n } = await r.view.getContext();
      if (n === "PRODUCTION")
        throw new e.BridgeAPIError(o.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Ae.checkRestrictedEnvironment = s), Ae);
}
var Xr;
function _a() {
  return (
    Xr ||
      ((Xr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = Ge(),
          o = S(),
          s = $e(),
          a = (0, O().getCallBridge)(),
          t = (u, f) => {
            const h = atob(u),
              d = new Array(h.length);
            for (let _ = 0; _ < h.length; _++) d[_] = h.charCodeAt(_);
            const p = new Uint8Array(d);
            return new Blob([p], { type: f || "application/octet-stream" });
          },
          c = async (u) => {
            const f = u.size,
              h = await u.arrayBuffer(),
              d = await crypto.subtle.digest("SHA-256", h),
              p = new Uint8Array(d),
              _ = btoa(String.fromCharCode(...p));
            return { length: f, checksum: _, checksumType: "SHA256" };
          },
          l = async ({ functionKey: u, objects: f }) => {
            if (!u || u.length === 0)
              throw new o.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(f) || f.length === 0)
              throw new o.BridgeAPIError("objects array is required and must not be empty");
            const h = f.map((y, m) => {
                if (y instanceof Blob) return y;
                if (!(y && typeof y == "object" && "data" in y && typeof y.data == "string"))
                  throw new o.BridgeAPIError(
                    `Invalid object type at index ${m}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return t(y.data, y.mimeType);
                } catch {
                  throw new o.BridgeAPIError(
                    `Invalid base64 data at index ${m}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              d = await Promise.all(h.map((y) => c(y))),
              p = await (0, r.invoke)(u, { allObjectMetadata: d });
            if (!p || typeof p != "object")
              throw new o.BridgeAPIError("Invalid response from functionKey");
            const _ = new Map(),
              v = new Map();
            return (
              h.forEach((y, m) => {
                const R = d[m];
                (_.set(R.checksum, y), v.set(R.checksum, m));
              }),
              Object.entries(p).map(([y, m]) => {
                const { key: R, checksum: E } = m,
                  A = _.get(E),
                  T = v.get(E);
                return T === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: R,
                        error: `Index not found for checksum ${E}`,
                      }),
                      index: -1,
                    }
                  : A
                    ? {
                        promise: (async () => {
                          try {
                            const b = await fetch(y, {
                              method: "PUT",
                              body: A,
                              headers: {
                                "Content-Type": A.type || "application/octet-stream",
                                "Content-Length": A.size.toString(),
                              },
                            });
                            return {
                              success: b.ok,
                              key: R,
                              status: b.status,
                              error: b.ok ? void 0 : `Upload failed with status ${b.status}`,
                            };
                          } catch (b) {
                            return {
                              success: !1,
                              key: R,
                              status: 503,
                              error: b instanceof Error ? b.message : "Upload failed",
                            };
                          }
                        })(),
                        index: T,
                        objectType: A.type,
                        objectSize: A.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: R,
                          error: `Blob not found for checksum ${E}`,
                        }),
                        index: T,
                      };
              })
            );
          };
        e.createUploadPromises = l;
        const i = async ({ functionKey: u, objects: f }) => {
          (await (0, s.checkRestrictedEnvironment)(),
            a("trackObjectStoreAction", { action: "upload" }));
          const h = await (0, e.createUploadPromises)({ functionKey: u, objects: f });
          return await Promise.all(h.map((p) => p.promise));
        };
        e.upload = i;
      })(Et)),
    Et
  );
}
var Me = {},
  Yr;
function va() {
  if (Yr) return Me;
  ((Yr = 1), Object.defineProperty(Me, "__esModule", { value: !0 }), (Me.deleteObjects = void 0));
  const e = Ge(),
    r = S(),
    o = $e(),
    n = (0, O().getCallBridge)(),
    a = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, o.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "delete" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to delete objects");
      if (!Array.isArray(c) || c.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      await Promise.all(
        c.map(async (l) => {
          await (0, e.invoke)(t, { key: l });
        }),
      );
    };
  return ((Me.deleteObjects = a), Me);
}
var Te = {},
  $r;
function ha() {
  if ($r) return Te;
  (($r = 1), Object.defineProperty(Te, "__esModule", { value: !0 }), (Te.download = void 0));
  const e = Ge(),
    r = S(),
    o = $e(),
    n = (0, O().getCallBridge)(),
    a = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, o.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "download" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(c) || c.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      const l = await (0, e.invoke)(t, { keys: c });
      if (!l || typeof l != "object")
        throw new r.BridgeAPIError("Invalid response from functionKey");
      const i = Object.entries(l).map(async ([f, h]) => {
        try {
          const d = await fetch(f, { method: "GET" });
          if (!d.ok)
            return {
              success: !1,
              key: h,
              status: d.status,
              error: `Download failed with status ${d.status}`,
            };
          const p = await d.blob();
          return { success: !0, key: h, blob: p, status: d.status };
        } catch (d) {
          return {
            success: !1,
            key: h,
            status: 503,
            error: d instanceof Error ? d.message : "Download failed",
          };
        }
      });
      return await Promise.all(i);
    };
  return ((Te.download = a), Te);
}
var De = {},
  Zr;
function ga() {
  if (Zr) return De;
  ((Zr = 1), Object.defineProperty(De, "__esModule", { value: !0 }), (De.getMetadata = void 0));
  const e = Ge(),
    r = S(),
    o = $e(),
    n = (0, O().getCallBridge)(),
    a = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, o.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "getMetadata" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError(
          "functionKey is required to filter and generate object metadata",
        );
      if (!Array.isArray(c) || c.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      return await Promise.all(
        c.map(async (i) => {
          const u = await (0, e.invoke)(t, { key: i });
          return !u || typeof u != "object"
            ? { key: i, error: "Invalid response from functionKey" }
            : u;
        }),
      );
    };
  return ((De.getMetadata = a), De);
}
var Qr;
function pa() {
  return (
    Qr ||
      ((Qr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const r = _a();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return r.createUploadPromises;
          },
        });
        const o = va(),
          s = ha(),
          n = ga();
        e.objectStore = {
          upload: r.upload,
          download: s.download,
          getMetadata: n.getMetadata,
          delete: o.deleteObjects,
        };
      })(wt)),
    wt
  );
}
var en;
function ya() {
  return (
    en ||
      ((en = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = I;
        (r.__exportStar(pa(), e), r.__exportStar(ri(), e));
      })(bt)),
    bt
  );
}
var Ot = {},
  Be = {},
  N = {},
  G = {},
  ze = {},
  tn;
function ma() {
  if (tn) return ze;
  ((tn = 1), Object.defineProperty(ze, "__esModule", { value: !0 }));
  const e = B();
  let r = class {
    constructor(s) {
      ((this._sdkKey = s),
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
    setValues(s, n) {
      var a;
      if (!s) return !1;
      const t = (0, e._typedJsonParse)(s.data, "has_updates", "EvaluationResponse");
      return t == null
        ? !1
        : ((this._source = s.source),
          t?.has_updates !== !0 ||
            ((this._rawValues = s.data),
            (this._lcut = t.time),
            (this._receivedAt = s.receivedAt),
            (this._values = t),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(s.source, t)),
            s.source && t.user && this._setWarningState(n, t),
            e.SDKFlags.setFlags(this._sdkKey, (a = t.sdk_flags) !== null && a !== void 0 ? a : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(s) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.feature_gates,
        s,
      );
    }
    getConfig(s) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.dynamic_configs,
        s,
      );
    }
    getLayer(s) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.layer_configs,
        s,
      );
    }
    getParamStore(s) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.param_stores,
        s,
      );
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var s;
      return (s = this._values) === null || s === void 0 ? void 0 : s.exposures;
    }
    _extractBootstrapMetadata(s, n) {
      if (s !== "Bootstrap") return null;
      const a = {};
      return (
        n.user && (a.user = n.user),
        n.sdkInfo && (a.generatorSDKInfo = n.sdkInfo),
        (a.lcut = n.time),
        a
      );
    }
    _getDetailedStoreResult(s, n) {
      let a = null;
      return (
        s && (a = s[n] ? s[n] : s[(0, e._DJB2)(n)]),
        { result: a, details: this._getDetails(a == null) }
      );
    }
    _setWarningState(s, n) {
      var a, t;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((a = s.customIDs) === null || a === void 0 ? void 0 : a.stableID) !== c &&
        ((!((t = s.customIDs) === null || t === void 0) && t.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in n) {
        const l = n.user;
        (0, e._getFullUserHash)(s) !== (0, e._getFullUserHash)(l) &&
          this._warnings.add("PartialUserMatch");
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues")
        return { reason: this._source };
      const s = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (s.warnings = Array.from(this._warnings)), s);
    }
    _getDetails(s) {
      var n, a;
      const t = this.getCurrentSourceDetails();
      let c = t.reason;
      const l = (n = t.warnings) !== null && n !== void 0 ? n : [];
      (this._source === "Bootstrap" && l.length > 0 && (c = c + l[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${s ? "Unrecognized" : "Recognized"}`));
      const i =
        this._source === "Bootstrap" && (a = this._bootstrapMetadata) !== null && a !== void 0
          ? a
          : void 0;
      return (i && (t.bootstrapMetadata = i), Object.assign(Object.assign({}, t), { reason: c }));
    }
  };
  return ((ze.default = r), ze);
}
var V = {},
  Fe = {},
  rn;
function ba() {
  if (rn) return Fe;
  ((rn = 1),
    Object.defineProperty(Fe, "__esModule", { value: !0 }),
    (Fe._resolveDeltasResponse = void 0));
  const e = B(),
    r = 2;
  function o(t, c) {
    const l = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!l) return { hadBadDeltaChecksum: !0 };
    const i = s(t, l),
      u = n(i),
      f = (0, e._DJB2Object)(
        {
          feature_gates: u.feature_gates,
          dynamic_configs: u.dynamic_configs,
          layer_configs: u.layer_configs,
        },
        r,
      );
    return f === l.checksumV2
      ? JSON.stringify(u)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: f,
          badMergedConfigs: u,
          badFullResponse: l.deltas_full_response,
        };
  }
  Fe._resolveDeltasResponse = o;
  function s(t, c) {
    return Object.assign(Object.assign(Object.assign({}, t), c), {
      feature_gates: Object.assign(Object.assign({}, t.feature_gates), c.feature_gates),
      layer_configs: Object.assign(Object.assign({}, t.layer_configs), c.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, t.dynamic_configs), c.dynamic_configs),
    });
  }
  function n(t) {
    const c = t;
    return (
      a(t.deleted_gates, c.feature_gates),
      delete c.deleted_gates,
      a(t.deleted_configs, c.dynamic_configs),
      delete c.deleted_configs,
      a(t.deleted_layers, c.layer_configs),
      delete c.deleted_layers,
      c
    );
  }
  function a(t, c) {
    t?.forEach((l) => {
      delete c[l];
    });
  }
  return Fe;
}
var nn;
function ni() {
  if (nn) return V;
  nn = 1;
  var e =
    (V && V.__awaiter) ||
    function (n, a, t, c) {
      function l(i) {
        return i instanceof t
          ? i
          : new t(function (u) {
              u(i);
            });
      }
      return new (t || (t = Promise))(function (i, u) {
        function f(p) {
          try {
            d(c.next(p));
          } catch (_) {
            u(_);
          }
        }
        function h(p) {
          try {
            d(c.throw(p));
          } catch (_) {
            u(_);
          }
        }
        function d(p) {
          p.done ? i(p.value) : l(p.value).then(f, h);
        }
        d((c = c.apply(n, a || [])).next());
      });
    };
  Object.defineProperty(V, "__esModule", { value: !0 });
  const r = B(),
    o = ba();
  class s extends r.NetworkCore {
    constructor(a, t) {
      super(a, t);
      const c = a?.networkConfig;
      ((this._option = a),
        (this._initializeUrlConfig = new r.UrlConfiguration(
          r.Endpoint._initialize,
          c?.initializeUrl,
          c?.api,
          c?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(a, t, c, l, i) {
      return e(this, void 0, void 0, function* () {
        var u, f, h, d, p, _;
        const v = t ? (0, r._typedJsonParse)(t, "has_updates", "InitializeResponse") : null;
        let g = {
          user: l,
          hash:
            (h =
              (f = (u = this._option) === null || u === void 0 ? void 0 : u.networkConfig) ===
                null || f === void 0
                ? void 0
                : f.initializeHashAlgorithm) !== null && h !== void 0
              ? h
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (v?.has_updates) {
          const y =
            v?.hash_used !==
            ((_ =
              (p = (d = this._option) === null || d === void 0 ? void 0 : d.networkConfig) ===
                null || p === void 0
                ? void 0
                : p.initializeHashAlgorithm) !== null && _ !== void 0
              ? _
              : "djb2");
          g = Object.assign(Object.assign({}, g), {
            sinceTime: i && !y ? v.time : 0,
            previousDerivedFields: "derived_fields" in v && i ? v.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: v.full_checksum,
            partialUserMatchSinceTime: y ? 0 : v.time,
          });
        }
        return this._fetchEvaluations(a, v, g, c);
      });
    }
    _fetchEvaluations(a, t, c, l) {
      return e(this, void 0, void 0, function* () {
        var i, u;
        const f = yield this.post({
          sdkKey: a,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: l,
        });
        if (f?.code === 204) return '{"has_updates": false}';
        if (f?.code !== 200) return (i = f?.body) !== null && i !== void 0 ? i : null;
        if (
          t?.has_updates !== !0 ||
          ((u = f.body) === null || u === void 0 ? void 0 : u.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return f.body;
        const h = (0, o._resolveDeltasResponse)(t, f.body);
        return typeof h == "string"
          ? h
          : this._fetchEvaluations(
              a,
              t,
              Object.assign(Object.assign(Object.assign({}, c), h), {
                deltasResponseRequested: !1,
              }),
              l,
            );
      });
    }
  }
  return ((V.default = s), V);
}
var ke = {},
  an;
function wa() {
  if (an) return ke;
  ((an = 1),
    Object.defineProperty(ke, "__esModule", { value: !0 }),
    (ke._makeParamStoreGetter = void 0));
  const e = B(),
    r = { disableExposureLog: !0 };
  function o(u) {
    return u == null || u.disableExposureLog === !1;
  }
  function s(u, f) {
    return f != null && !(0, e._isTypeMatch)(u, f);
  }
  function n(u, f) {
    return u.value;
  }
  function a(u, f, h) {
    return u.getFeatureGate(f.gate_name, o(h) ? void 0 : r).value ? f.pass_value : f.fail_value;
  }
  function t(u, f, h, d) {
    const _ = u.getDynamicConfig(f.config_name, o(d) ? void 0 : r).get(f.param_name);
    return s(_, h) ? h : _;
  }
  function c(u, f, h, d) {
    const _ = u.getExperiment(f.experiment_name, o(d) ? void 0 : r).get(f.param_name);
    return s(_, h) ? h : _;
  }
  function l(u, f, h, d) {
    const _ = u.getLayer(f.layer_name, o(d) ? void 0 : r).get(f.param_name);
    return s(_, h) ? h : _;
  }
  function i(u, f, h) {
    return (d, p) => {
      if (f == null) return p;
      const _ = f[d];
      if (_ == null || (p != null && (0, e._typeOf)(p) !== _.param_type)) return p;
      switch (_.ref_type) {
        case "static":
          return n(_);
        case "gate":
          return a(u, _, h);
        case "dynamic_config":
          return t(u, _, p, h);
        case "experiment":
          return c(u, _, p, h);
        case "layer":
          return l(u, _, p, h);
        default:
          return p;
      }
    };
  }
  return ((ke._makeParamStoreGetter = i), ke);
}
var L = {},
  on;
function Ea() {
  if (on) return L;
  on = 1;
  var e =
    (L && L.__awaiter) ||
    function (n, a, t, c) {
      function l(i) {
        return i instanceof t
          ? i
          : new t(function (u) {
              u(i);
            });
      }
      return new (t || (t = Promise))(function (i, u) {
        function f(p) {
          try {
            d(c.next(p));
          } catch (_) {
            u(_);
          }
        }
        function h(p) {
          try {
            d(c.throw(p));
          } catch (_) {
            u(_);
          }
        }
        function d(p) {
          p.done ? i(p.value) : l(p.value).then(f, h);
        }
        d((c = c.apply(n, a || [])).next());
      });
    };
  (Object.defineProperty(L, "__esModule", { value: !0 }),
    (L.StatsigEvaluationsDataAdapter = void 0));
  const r = B(),
    o = ni();
  let s = class extends r.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(a, t, c) {
      (super.attach(a, t, c),
        c !== null && c instanceof o.default
          ? (this._network = c)
          : (this._network = new o.default(t ?? {})));
    }
    getDataAsync(a, t, c) {
      return this._getDataAsyncImpl(a, (0, r._normalizeUser)(t, this._options), c);
    }
    prefetchData(a, t) {
      return this._prefetchDataImpl(a, t);
    }
    setData(a) {
      const t = (0, r._typedJsonParse)(a, "has_updates", "data");
      t && "user" in t
        ? super.setData(a, t.user)
        : r.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(a, t) {
      super.setData(a, t);
    }
    _fetchFromNetwork(a, t, c, l) {
      return e(this, void 0, void 0, function* () {
        var i;
        const u = yield (i = this._network) === null || i === void 0
          ? void 0
          : i.fetchEvaluations(this._getSdkKey(), a, c?.priority, t, l);
        return u ?? null;
      });
    }
    _getCacheKey(a) {
      var t;
      const c = (0, r._getStorageKey)(
        this._getSdkKey(),
        a,
        (t = this._options) === null || t === void 0 ? void 0 : t.customUserCacheKeyFunc,
      );
      return `${r.DataAdapterCachePrefix}.${this._cacheSuffix}.${c}`;
    }
    _isCachedResultValidFor204(a, t) {
      return a.fullUserHash != null && a.fullUserHash === (0, r._getFullUserHash)(t);
    }
  };
  return ((L.StatsigEvaluationsDataAdapter = s), L);
}
var sn;
function Oa() {
  if (sn) return G;
  sn = 1;
  var e =
    (G && G.__awaiter) ||
    function (c, l, i, u) {
      function f(h) {
        return h instanceof i
          ? h
          : new i(function (d) {
              d(h);
            });
      }
      return new (i || (i = Promise))(function (h, d) {
        function p(g) {
          try {
            v(u.next(g));
          } catch (y) {
            d(y);
          }
        }
        function _(g) {
          try {
            v(u.throw(g));
          } catch (y) {
            d(y);
          }
        }
        function v(g) {
          g.done ? h(g.value) : f(g.value).then(p, _);
        }
        v((u = u.apply(c, l || [])).next());
      });
    };
  Object.defineProperty(G, "__esModule", { value: !0 });
  const r = B(),
    o = ma(),
    s = ni(),
    n = wa(),
    a = Ea();
  let t = class It extends r.StatsigClientBase {
    static instance(l) {
      const i = (0, r._getStatsigGlobal)().instance(l);
      return i instanceof It
        ? i
        : (r.Log.warn(
            (0, r._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new It(l ?? "", {}));
    }
    constructor(l, i, u = null) {
      var f, h;
      r.SDKType._setClientType(l, "javascript-client");
      const d = new s.default(u, (_) => {
        this.$emt(_);
      });
      (super(
        l,
        (f = u?.dataAdapter) !== null && f !== void 0 ? f : new a.StatsigEvaluationsDataAdapter(),
        d,
        u,
      ),
        (this.getFeatureGate = this._memoize(
          r.MemoPrefix._gate,
          this._getFeatureGateImpl.bind(this),
        )),
        (this.getDynamicConfig = this._memoize(
          r.MemoPrefix._dynamicConfig,
          this._getDynamicConfigImpl.bind(this),
        )),
        (this.getExperiment = this._memoize(
          r.MemoPrefix._experiment,
          this._getExperimentImpl.bind(this),
        )),
        (this.getLayer = this._memoize(r.MemoPrefix._layer, this._getLayerImpl.bind(this))),
        (this.getParameterStore = this._memoize(
          r.MemoPrefix._paramStore,
          this._getParameterStoreImpl.bind(this),
        )),
        (this._store = new o.default(l)),
        (this._network = d),
        (this._user = this._configureUser(i, u)),
        (this._sdkInstanceID = (0, r.getUUID)()));
      const p = (h = u?.plugins) !== null && h !== void 0 ? h : [];
      for (const _ of p) _.bind(this);
    }
    initializeSync(l) {
      var i;
      return this.loadingStatus !== "Uninitialized"
        ? (0, r.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((i = this._store.getWarnings()) !== null && i !== void 0 ? i : []),
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
    updateUserSync(l, i) {
      const u = performance.now();
      try {
        return this._updateUserSyncImpl(l, i, u);
      } catch (f) {
        const h = f instanceof Error ? f : new Error(String(f));
        return this._createErrorUpdateDetails(h, u);
      }
    }
    _updateUserSyncImpl(l, i, u) {
      var f;
      const h = [...((f = this._store.getWarnings()) !== null && f !== void 0 ? f : [])];
      this._resetForUser(l);
      const d = this.dataAdapter.getDataSync(this._user);
      (d == null && h.push("NoCachedValues"),
        this._store.setValues(d, this._user),
        this._finalizeUpdate(d));
      const p = i?.disableBackgroundCacheRefresh;
      return p === !0 || (p == null && d?.source === "Bootstrap")
        ? (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            h,
          )
        : (this._runPostUpdate(d ?? null, this._user),
          (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            h,
          ));
    }
    updateUserAsync(l, i) {
      return e(this, void 0, void 0, function* () {
        const u = performance.now();
        try {
          return yield this._updateUserAsyncImpl(l, i);
        } catch (f) {
          const h = f instanceof Error ? f : new Error(String(f));
          return this._createErrorUpdateDetails(h, u);
        }
      });
    }
    _updateUserAsyncImpl(l, i) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(l);
        const u = this._user;
        r.Diagnostics._markInitOverallStart(this._sdkKey);
        let f = this.dataAdapter.getDataSync(u);
        if (
          (this._store.setValues(f, this._user),
          this._setStatus("Loading", f),
          (f = yield this.dataAdapter.getDataAsync(f, u, i)),
          u !== this._user)
        )
          return (0, r.createUpdateDetails)(
            !1,
            this._store.getSource(),
            -1,
            new Error("User changed during update"),
            this._network.getLastUsedInitUrlAndReset(),
          );
        let h = !1;
        (f != null &&
          (r.Diagnostics._markInitProcessStart(this._sdkKey),
          (h = this._store.setValues(f, this._user)),
          r.Diagnostics._markInitProcessEnd(this._sdkKey, { success: h })),
          this._finalizeUpdate(f),
          h ||
            (this._errorBoundary.attachErrorIfNoneExists(
              r.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          r.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            h,
            this._store.getCurrentSourceDetails(),
          ));
        const d = r.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, r.createUpdateDetails)(
          h,
          this._store.getSource(),
          d,
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
        session: r.StatsigSession.get(this._sdkKey),
        stableID: r.StableID.get(this._sdkKey),
        sdkInstanceID: this._sdkInstanceID,
      };
    }
    checkGate(l, i) {
      return this.getFeatureGate(l, i).value;
    }
    logEvent(l, i, u) {
      const f = typeof l == "string" ? { eventName: l, value: i, metadata: u } : l;
      (this.$emt({ name: "log_event_called", event: f }),
        this._logger.enqueue(
          Object.assign(Object.assign({}, f), { user: this._user, time: Date.now() }),
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
          r.Storage.isReady() || (yield r.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, l)
        );
      });
    }
    _createErrorUpdateDetails(l, i) {
      var u;
      return (0, r.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - i,
        l,
        null,
        [...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : [])],
      );
    }
    _finalizeUpdate(l) {
      (this._store.finalize(), this._setStatus("Ready", l));
    }
    _runPostUpdate(l, i) {
      this.dataAdapter.getDataAsync(l, i, { priority: "low" }).catch((u) => {
        r.Log.error("An error occurred after update.", u);
      });
    }
    _resetForUser(l) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(l, this._options)));
    }
    _configureUser(l, i) {
      var u;
      const f = (0, r._normalizeUser)(l, i),
        h = (u = f.customIDs) === null || u === void 0 ? void 0 : u.stableID;
      return (h && r.StableID.setOverride(h, this._sdkKey), f);
    }
    _getFeatureGateImpl(l, i) {
      var u, f;
      const { result: h, details: d } = this._store.getGate(l),
        p = (0, r._makeFeatureGate)(l, d, h),
        _ =
          (f = (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getGateOverride) ===
            null || f === void 0
            ? void 0
            : f.call(u, p, this._user, i),
        v = _ ?? p;
      return (
        this._enqueueExposure(
          l,
          (0, r._createGateExposure)(this._user, v, this._store.getExposureMapping()),
          i,
        ),
        this.$emt({ name: "gate_evaluation", gate: v }),
        v
      );
    }
    _getDynamicConfigImpl(l, i) {
      var u, f;
      const { result: h, details: d } = this._store.getConfig(l),
        p = (0, r._makeDynamicConfig)(l, d, h),
        _ =
          (f =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getDynamicConfigOverride) === null || f === void 0
            ? void 0
            : f.call(u, p, this._user, i),
        v = _ ?? p;
      return (
        this._enqueueExposure(
          l,
          (0, r._createConfigExposure)(this._user, v, this._store.getExposureMapping()),
          i,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: v }),
        v
      );
    }
    _getExperimentImpl(l, i) {
      var u, f, h, d;
      const { result: p, details: _ } = this._store.getConfig(l),
        v = (0, r._makeExperiment)(l, _, p);
      v.__evaluation != null &&
        (v.__evaluation.secondary_exposures = (0, r._mapExposures)(
          (f = (u = v.__evaluation) === null || u === void 0 ? void 0 : u.secondary_exposures) !==
            null && f !== void 0
            ? f
            : [],
          this._store.getExposureMapping(),
        ));
      const g =
          (d =
            (h = this.overrideAdapter) === null || h === void 0
              ? void 0
              : h.getExperimentOverride) === null || d === void 0
            ? void 0
            : d.call(h, v, this._user, i),
        y = g ?? v;
      return (
        this._enqueueExposure(
          l,
          (0, r._createConfigExposure)(this._user, y, this._store.getExposureMapping()),
          i,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: y }),
        y
      );
    }
    _getLayerImpl(l, i) {
      var u, f, h;
      const { result: d, details: p } = this._store.getLayer(l),
        _ = (0, r._makeLayer)(l, p, d),
        v =
          (f =
            (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getLayerOverride) ===
            null || f === void 0
            ? void 0
            : f.call(u, _, this._user, i);
      i?.disableExposureLog && this._logger.incrementNonExposureCount(l);
      const g = (0, r._mergeOverride)(
        _,
        v,
        (h = v?.__value) !== null && h !== void 0 ? h : _.__value,
        (y) => {
          i?.disableExposureLog ||
            this._enqueueExposure(
              l,
              (0, r._createLayerParameterExposure)(
                this._user,
                g,
                y,
                this._store.getExposureMapping(),
              ),
              i,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: g }), g);
    }
    _getParameterStoreImpl(l, i) {
      var u, f;
      const { result: h, details: d } = this._store.getParamStore(l);
      this._logger.incrementNonExposureCount(l);
      const p = {
          name: l,
          details: d,
          __configuration: h,
          get: (0, n._makeParamStoreGetter)(this, h, i),
        },
        _ =
          (f =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getParamStoreOverride) === null || f === void 0
            ? void 0
            : f.call(u, p, i);
      return (
        _ != null &&
          ((p.__configuration = _.config),
          (p.details = _.details),
          (p.get = (0, n._makeParamStoreGetter)(this, _.config, i))),
        p
      );
    }
  };
  return ((G.default = t), G);
}
var un;
function Ra() {
  return (
    un ||
      ((un = 1),
      (function (e) {
        var r =
            (N && N.__createBinding) ||
            (Object.create
              ? function (t, c, l, i) {
                  i === void 0 && (i = l);
                  var u = Object.getOwnPropertyDescriptor(c, l);
                  ((!u || ("get" in u ? !c.__esModule : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return c[l];
                      },
                    }),
                    Object.defineProperty(t, i, u));
                }
              : function (t, c, l, i) {
                  (i === void 0 && (i = l), (t[i] = c[l]));
                }),
          o =
            (N && N.__exportStar) ||
            function (t, c) {
              for (var l in t)
                l !== "default" && !Object.prototype.hasOwnProperty.call(c, l) && r(c, t, l);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const s = B(),
          n = Oa();
        ((e.StatsigClient = n.default), o(B(), e));
        const a = Object.assign((0, s._getStatsigGlobal)(), { StatsigClient: n.default });
        e.default = a;
      })(N)),
    N
  );
}
var Ue = {},
  Ne = {},
  ln;
function Sa() {
  if (ln) return Ne;
  ((ln = 1),
    Object.defineProperty(Ne, "__esModule", { value: !0 }),
    (Ne.initFeatureFlags = void 0));
  const e = O(),
    r = S(),
    o = We(),
    s = 500,
    n = 1e3 * 25,
    a = (0, e.getCallBridge)(),
    t = (l) => {
      if (!l || !l.user)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(l).some((i) => typeof i == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (l) => (t(l), a("initFeatureFlags", { user: l.user }));
  return (
    (Ne.initFeatureFlags = (0, o.withRateLimiter)(
      c,
      s,
      n,
      `Feature flags initialisation calls are rate limited at ${s}req/${n / 1e3}s`,
    )),
    Ne
  );
}
var cn;
function Pa() {
  if (cn) return Ue;
  ((cn = 1),
    Object.defineProperty(Ue, "__esModule", { value: !0 }),
    (Ue.ForgeDataAdapter = void 0));
  const e = Sa();
  class r {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(s, n, a) {
      var t;
      if (s) return s;
      this.environment = ((t = this.options) === null || t === void 0 ? void 0 : t.environment) || {
        tier: "development",
      };
      const c = { ...n, statsigEnvironment: this.environment },
        l = await (0, e.initFeatureFlags)({ user: c }),
        i = {
          source: "Network",
          data: JSON.stringify(l),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = i), i);
    }
    getDataSync(s) {
      return this.cache;
    }
    async attach(s, n, a) {
      this.options = n;
    }
    async prefetchData() {}
    async setData(s) {}
    async setDataLegacy(s) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((Ue.ForgeDataAdapter = r), Ue);
}
var Rt = {},
  dn;
function ii() {
  return (
    dn ||
      ((dn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = e.ExtensionEnvironment = void 0),
          (function (o) {
            ((o.DEVELOPMENT = "DEVELOPMENT"),
              (o.STAGING = "STAGING"),
              (o.PRODUCTION = "PRODUCTION"));
          })(e.ExtensionEnvironment || (e.ExtensionEnvironment = {})));
        var r;
        ((function (o) {
          o.USER_ACCESS = "USER_ACCESS";
        })(r || (r = {})),
          (function (o) {
            o.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(Rt)),
    Rt
  );
}
var Le = {},
  fn;
function Ia() {
  if (fn) return Le;
  ((fn = 1),
    Object.defineProperty(Le, "__esModule", { value: !0 }),
    (Le.trackFeatureFlagEvent = void 0));
  const e = O(),
    r = S(),
    o = ii(),
    s = We(),
    n = 500,
    a = 1e3 * 25,
    t = (0, e.getCallBridge)(),
    c = (i) => {
      if (!i || !i.type || !i.properties)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(i.type.toUpperCase() in o.FeatureFlagEventType))
        throw new r.BridgeAPIError("Event type is not supported");
      if (Object.values(i).some((u) => typeof u == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    l = (i) => (c(i), t("trackFeatureFlagEvent", i));
  return (
    (Le.trackFeatureFlagEvent = (0, s.withRateLimiter)(
      l,
      n,
      a,
      `Feature flags calls are rate limited at ${n}req/${a / 1e3}s`,
    )),
    Le
  );
}
var _n;
function ja() {
  if (_n) return Be;
  ((_n = 1),
    Object.defineProperty(Be, "__esModule", { value: !0 }),
    (Be.ForgeFeatureFlags = void 0));
  const e = Ra(),
    r = Pa(),
    o = ii(),
    s = Ia();
  class n {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.eventProps = {}),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(t, c = {}) {
      var l;
      if (this.isInitialized()) return;
      this.dataAdapter = new r.ForgeDataAdapter();
      const i = {
        environment: { tier: c.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (l = i.environment) === null || l === void 0 ? void 0 : l.tier),
        (this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(t), i)),
        await this.client.initializeAsync(),
        (this.initialized = !0));
    }
    checkFlag(t) {
      if (!this.isInitialized() || !this.client)
        throw (
          this.sendCheckFlagEvent(t, !1),
          new Error("ForgeFeatureFlags not initialized. Call initialize() first.")
        );
      return (this.sendCheckFlagEvent(t, !0), this.client.checkGate(t, { disableExposureLog: !0 }));
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
    convertUser(t) {
      return {
        userID: t.userId,
        custom: { ...(t.custom || {}), ...(t.attributes || {}) },
        customIDs: t.identifiers || {},
      };
    }
    sendCheckFlagEvent(t, c) {
      const l = {
        type: o.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: t,
          success: c,
        },
      };
      (0, s.trackFeatureFlagEvent)(l);
    }
  }
  return ((Be.ForgeFeatureFlags = n), Be);
}
var vn;
function qa() {
  return (
    vn ||
      ((vn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var r = ja();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.ForgeFeatureFlags;
          },
        });
      })(Ot)),
    Ot
  );
}
var hn;
function Aa() {
  return (
    hn ||
      ((hn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = I;
        var o = vi();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return o.NavigationTarget;
          },
        }),
          r.__exportStar(Ge(), e),
          r.__exportStar(yi(), e),
          r.__exportStar(qt(), e),
          r.__exportStar(Yi(), e),
          r.__exportStar(Zi(), e),
          r.__exportStar(ea(), e),
          r.__exportStar(ra(), e),
          r.__exportStar(na(), e),
          r.__exportStar(oa(), e),
          r.__exportStar(la(), e),
          (e.i18n = r.__importStar(ca())),
          r.__exportStar(fa(), e),
          r.__exportStar(ya(), e),
          r.__exportStar(qa(), e));
      })(Qe)),
    Qe
  );
}
var xe = Aa();
const Ca = "_container_16ann_1",
  Ma = "_header_16ann_9",
  Ta = "_controls_16ann_20",
  Da = "_searchSection_16ann_28",
  Ba = "_searchInput_16ann_34",
  Fa = "_orgSelect_16ann_35",
  ka = "_input_16ann_36",
  Ua = "_select_16ann_37",
  Na = "_addButton_16ann_63",
  La = "_addForm_16ann_79",
  xa = "_submitButton_16ann_88",
  Ga = "_spinner_16ann_108",
  Va = "_spinnerInner_16ann_113",
  za = "_tableContainer_16ann_117",
  Ka = "_table_16ann_117",
  Ha = "_stats_16ann_146",
  Ja = "_loadingContainer_16ann_155",
  P = {
    container: Ca,
    header: Ma,
    controls: Ta,
    searchSection: Da,
    searchInput: Ba,
    orgSelect: Fa,
    input: ka,
    select: Ua,
    addButton: Na,
    addForm: La,
    submitButton: xa,
    spinner: Ga,
    spinnerInner: Va,
    tableContainer: za,
    table: Ka,
    stats: Ha,
    loadingContainer: Ja,
  },
  gn = () =>
    w.jsx("div", { className: P.spinner, children: w.jsx("div", { className: P.spinnerInner }) });
function Wa() {
  const [e, r] = j.useState([]),
    [o, s] = j.useState([]),
    [n, a] = j.useState(""),
    [t, c] = j.useState(null),
    [l, i] = j.useState(null),
    [u, f] = j.useState(""),
    [h, d] = j.useState(null),
    [p, _] = j.useState(!1),
    [v, g] = j.useState(!0),
    [y, m] = j.useState(!1),
    R = async () => {
      try {
        const b = await xe.invoke("getUsers", {
          searchTerm: n || void 0,
          organizationId: t || void 0,
        });
        r(b);
      } catch (b) {
        console.error("Error fetching users:", b);
      }
    },
    E = async () => {
      try {
        const b = await xe.invoke("getOrganizations");
        s(b);
      } catch (b) {
        console.error("Error fetching organizations:", b);
      }
    },
    A = async () => {
      try {
        const b = await xe.invoke("getUserStats");
        i(b);
      } catch (b) {
        console.error("Error fetching stats:", b);
      }
    },
    T = async () => {
      g(!0);
      try {
        await Promise.all([R(), E(), A()]);
      } finally {
        g(!1);
      }
    };
  j.useEffect(() => {
    T();
  }, [n, t]);
  const At = async () => {
    if (!(!u || !h)) {
      m(!0);
      try {
        (await xe.invoke("createUser", { name: u, organizationId: h }),
          f(""),
          d(null),
          _(!1),
          await T());
      } catch (b) {
        console.error("Error adding user:", b);
      } finally {
        m(!1);
      }
    }
  };
  return v
    ? w.jsxs("div", {
        className: P.loadingContainer,
        children: [w.jsx(gn, {}), w.jsx("p", { children: "Loading data..." })],
      })
    : w.jsxs("div", {
        className: P.container,
        children: [
          w.jsx("header", {
            className: P.header,
            children: w.jsx("h1", { children: "OrgTracker" }),
          }),
          w.jsxs("div", {
            className: P.controls,
            children: [
              w.jsxs("div", {
                className: P.searchSection,
                children: [
                  w.jsx("input", {
                    type: "text",
                    placeholder: "🔍 Search by name...",
                    value: n,
                    onChange: (b) => a(b.target.value),
                    className: P.searchInput,
                  }),
                  w.jsxs("select", {
                    value: t || "",
                    onChange: (b) => c(b.target.value ? Number(b.target.value) : null),
                    className: P.orgSelect,
                    children: [
                      w.jsx("option", { value: "", children: "All Organizations" }),
                      o.map((b) =>
                        w.jsxs(
                          "option",
                          {
                            value: b.id,
                            children: [b.name, " (", l?.orgBreakdown[b.id] || 0, ")"],
                          },
                          b.id,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              w.jsx("button", {
                className: P.addButton,
                onClick: () => _(!p),
                children: p ? "Cancel" : "+ Add User",
              }),
            ],
          }),
          p &&
            w.jsxs("div", {
              className: P.addForm,
              children: [
                w.jsx("input", {
                  type: "text",
                  placeholder: "User Name",
                  value: u,
                  onChange: (b) => f(b.target.value),
                  className: P.input,
                  disabled: y,
                }),
                w.jsxs("select", {
                  value: h || "",
                  onChange: (b) => d(Number(b.target.value)),
                  className: P.select,
                  disabled: y,
                  children: [
                    w.jsx("option", { value: "", children: "Select Organization" }),
                    o.map((b) => w.jsx("option", { value: b.id, children: b.name }, b.id)),
                  ],
                }),
                w.jsx("button", {
                  onClick: At,
                  className: P.submitButton,
                  disabled: !u || !h || y,
                  style: {
                    opacity: !u || !h || y ? 0.5 : 1,
                    cursor: !u || !h || y ? "not-allowed" : "pointer",
                  },
                  children: y
                    ? w.jsxs(w.Fragment, {
                        children: [
                          w.jsx(gn, {}),
                          w.jsx("span", { style: { marginLeft: "8px" }, children: "Adding..." }),
                        ],
                      })
                    : "Add User",
                }),
              ],
            }),
          w.jsx("div", {
            className: P.tableContainer,
            children: w.jsxs("table", {
              className: P.table,
              children: [
                w.jsx("thead", {
                  children: w.jsxs("tr", {
                    children: [
                      w.jsx("th", { children: "👤 User Name" }),
                      w.jsx("th", { children: "🏢 Organization" }),
                    ],
                  }),
                }),
                w.jsx("tbody", {
                  children: e.map((b) =>
                    w.jsxs(
                      "tr",
                      {
                        children: [
                          w.jsx("td", { children: b.users.name }),
                          w.jsx("td", { children: b.organization.name }),
                        ],
                      },
                      b.users.id,
                    ),
                  ),
                }),
              ],
            }),
          }),
          w.jsx("div", {
            className: P.stats,
            children: w.jsxs("p", { children: ["Total Users: ", l?.totalUsers || 0] }),
          }),
        ],
      });
}
const Xa = document.getElementById("root"),
  Ya = ai.createRoot(Xa),
  pn = () => {
    Ya.render(w.jsx(Wa, {}));
  };
xe.view.theme
  .enable()
  .then(() => {
    pn();
  })
  .catch((e) => {
    (console.error(e.message), pn());
  });
