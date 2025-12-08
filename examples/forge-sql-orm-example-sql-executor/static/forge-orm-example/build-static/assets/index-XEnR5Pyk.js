const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index-Byf9Kz4g.js", "./client-core-vendor-CgCV9aM-.js"]),
) => i.map((i) => d[i]);
import { r as hn, c as ri } from "./react-dom-vendor-BOEB6BZs.js";
import { g as ni, r as A } from "./client-core-vendor-CgCV9aM-.js";
import { r as ii } from "./lodash-vendor-FKT_qxrp.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList")
        for (const t of o.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && a(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(n) {
    const o = {};
    return (
      n.integrity && (o.integrity = n.integrity),
      n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : n.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function a(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = s(n);
    fetch(n.href, o);
  }
})();
var Ye = { exports: {} },
  z = {};
var qt;
function oi() {
  if (qt) return z;
  qt = 1;
  var e = hn(),
    r = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(c, l, i) {
    var u,
      f = {},
      h = null,
      d = null;
    (i !== void 0 && (h = "" + i),
      l.key !== void 0 && (h = "" + l.key),
      l.ref !== void 0 && (d = l.ref));
    for (u in l) a.call(l, u) && !o.hasOwnProperty(u) && (f[u] = l[u]);
    if (c && c.defaultProps) for (u in ((l = c.defaultProps), l)) f[u] === void 0 && (f[u] = l[u]);
    return { $$typeof: r, type: c, key: h, ref: d, props: f, _owner: n.current };
  }
  return ((z.Fragment = s), (z.jsx = t), (z.jsxs = t), z);
}
var Ct;
function ai() {
  return (Ct || ((Ct = 1), (Ye.exports = oi())), Ye.exports);
}
var w = ai(),
  F = hn(),
  Ze = {},
  Rt = function (e, r) {
    return (
      (Rt =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (s, a) {
            s.__proto__ = a;
          }) ||
        function (s, a) {
          for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (s[n] = a[n]);
        }),
      Rt(e, r)
    );
  };
function gn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Rt(e, r);
  function s() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((s.prototype = r.prototype), new s());
}
var ze = function () {
  return (
    (ze =
      Object.assign ||
      function (r) {
        for (var s, a = 1, n = arguments.length; a < n; a++) {
          s = arguments[a];
          for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (r[o] = s[o]);
        }
        return r;
      }),
    ze.apply(this, arguments)
  );
};
function pn(e, r) {
  var s = {};
  for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (s[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      r.indexOf(a[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
        (s[a[n]] = e[a[n]]);
  return s;
}
function yn(e, r, s, a) {
  var n = arguments.length,
    o = n < 3 ? r : a === null ? (a = Object.getOwnPropertyDescriptor(r, s)) : a,
    t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, r, s, a);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (t = e[c]) && (o = (n < 3 ? t(o) : n > 3 ? t(r, s, o) : t(r, s)) || o);
  return (n > 3 && o && Object.defineProperty(r, s, o), o);
}
function mn(e, r) {
  return function (s, a) {
    r(s, a, e);
  };
}
function bn(e, r, s, a, n, o) {
  function t(g) {
    if (g !== void 0 && typeof g != "function") throw new TypeError("Function expected");
    return g;
  }
  for (
    var c = a.kind,
      l = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      i = !r && e ? (a.static ? e : e.prototype) : null,
      u = r || (i ? Object.getOwnPropertyDescriptor(i, a.name) : {}),
      f,
      h = !1,
      d = s.length - 1;
    d >= 0;
    d--
  ) {
    var p = {};
    for (var _ in a) p[_] = _ === "access" ? {} : a[_];
    for (var _ in a.access) p.access[_] = a.access[_];
    p.addInitializer = function (g) {
      if (h) throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(t(g || null));
    };
    var v = (0, s[d])(c === "accessor" ? { get: u.get, set: u.set } : u[l], p);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      ((f = t(v.get)) && (u.get = f),
        (f = t(v.set)) && (u.set = f),
        (f = t(v.init)) && n.unshift(f));
    } else (f = t(v)) && (c === "field" ? n.unshift(f) : (u[l] = f));
  }
  (i && Object.defineProperty(i, a.name, u), (h = !0));
}
function wn(e, r, s) {
  for (var a = arguments.length > 2, n = 0; n < r.length; n++)
    s = a ? r[n].call(e, s) : r[n].call(e);
  return a ? s : void 0;
}
function En(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function On(e, r, s) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: s ? "".concat(s, " ", r) : r })
  );
}
function Rn(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function Pn(e, r, s, a) {
  function n(o) {
    return o instanceof s
      ? o
      : new s(function (t) {
          t(o);
        });
  }
  return new (s || (s = Promise))(function (o, t) {
    function c(u) {
      try {
        i(a.next(u));
      } catch (f) {
        t(f);
      }
    }
    function l(u) {
      try {
        i(a.throw(u));
      } catch (f) {
        t(f);
      }
    }
    function i(u) {
      u.done ? o(u.value) : n(u.value).then(c, l);
    }
    i((a = a.apply(e, r || [])).next());
  });
}
function Sn(e, r) {
  var s = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    a,
    n,
    o,
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
    if (a) throw new TypeError("Generator is already executing.");
    for (; t && ((t = 0), i[0] && (s = 0)), s; )
      try {
        if (
          ((a = 1),
          n &&
            (o =
              i[0] & 2 ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
            !(o = o.call(n, i[1])).done)
        )
          return o;
        switch (((n = 0), o && (i = [i[0] & 2, o.value]), i[0])) {
          case 0:
          case 1:
            o = i;
            break;
          case 4:
            return (s.label++, { value: i[1], done: !1 });
          case 5:
            (s.label++, (n = i[1]), (i = [0]));
            continue;
          case 7:
            ((i = s.ops.pop()), s.trys.pop());
            continue;
          default:
            if (
              ((o = s.trys), !(o = o.length > 0 && o[o.length - 1]) && (i[0] === 6 || i[0] === 2))
            ) {
              s = 0;
              continue;
            }
            if (i[0] === 3 && (!o || (i[1] > o[0] && i[1] < o[3]))) {
              s.label = i[1];
              break;
            }
            if (i[0] === 6 && s.label < o[1]) {
              ((s.label = o[1]), (o = i));
              break;
            }
            if (o && s.label < o[2]) {
              ((s.label = o[2]), s.ops.push(i));
              break;
            }
            (o[2] && s.ops.pop(), s.trys.pop());
            continue;
        }
        i = r.call(e, s);
      } catch (u) {
        ((i = [6, u]), (n = 0));
      } finally {
        a = o = 0;
      }
    if (i[0] & 5) throw i[1];
    return { value: i[0] ? i[1] : void 0, done: !0 };
  }
}
var Ke = Object.create
  ? function (e, r, s, a) {
      a === void 0 && (a = s);
      var n = Object.getOwnPropertyDescriptor(r, s);
      ((!n || ("get" in n ? !r.__esModule : n.writable || n.configurable)) &&
        (n = {
          enumerable: !0,
          get: function () {
            return r[s];
          },
        }),
        Object.defineProperty(e, a, n));
    }
  : function (e, r, s, a) {
      (a === void 0 && (a = s), (e[a] = r[s]));
    };
function In(e, r) {
  for (var s in e) s !== "default" && !Object.prototype.hasOwnProperty.call(r, s) && Ke(r, e, s);
}
function He(e) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    s = r && e[r],
    a = 0;
  if (s) return s.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && a >= e.length && (e = void 0), { value: e && e[a++], done: !e });
      },
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function It(e, r) {
  var s = typeof Symbol == "function" && e[Symbol.iterator];
  if (!s) return e;
  var a = s.call(e),
    n,
    o = [],
    t;
  try {
    for (; (r === void 0 || r-- > 0) && !(n = a.next()).done; ) o.push(n.value);
  } catch (c) {
    t = { error: c };
  } finally {
    try {
      n && !n.done && (s = a.return) && s.call(a);
    } finally {
      if (t) throw t.error;
    }
  }
  return o;
}
function jn() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(It(arguments[r]));
  return e;
}
function qn() {
  for (var e = 0, r = 0, s = arguments.length; r < s; r++) e += arguments[r].length;
  for (var a = Array(e), n = 0, r = 0; r < s; r++)
    for (var o = arguments[r], t = 0, c = o.length; t < c; t++, n++) a[n] = o[t];
  return a;
}
function Cn(e, r, s) {
  if (s || arguments.length === 2)
    for (var a = 0, n = r.length, o; a < n; a++)
      (o || !(a in r)) && (o || (o = Array.prototype.slice.call(r, 0, a)), (o[a] = r[a]));
  return e.concat(o || Array.prototype.slice.call(r));
}
function V(e) {
  return this instanceof V ? ((this.v = e), this) : new V(e);
}
function An(e, r, s) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var a = s.apply(e, r || []),
    n,
    o = [];
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
    a[d] &&
      ((n[d] = function (_) {
        return new Promise(function (v, g) {
          o.push([d, _, v, g]) > 1 || l(d, _);
        });
      }),
      p && (n[d] = p(n[d])));
  }
  function l(d, p) {
    try {
      i(a[d](p));
    } catch (_) {
      h(o[0][3], _);
    }
  }
  function i(d) {
    d.value instanceof V ? Promise.resolve(d.value.v).then(u, f) : h(o[0][2], d);
  }
  function u(d) {
    l("next", d);
  }
  function f(d) {
    l("throw", d);
  }
  function h(d, p) {
    (d(p), o.shift(), o.length && l(o[0][0], o[0][1]));
  }
}
function Dn(e) {
  var r, s;
  return (
    (r = {}),
    a("next"),
    a("throw", function (n) {
      throw n;
    }),
    a("return"),
    (r[Symbol.iterator] = function () {
      return this;
    }),
    r
  );
  function a(n, o) {
    r[n] = e[n]
      ? function (t) {
          return (s = !s) ? { value: V(e[n](t)), done: !1 } : o ? o(t) : t;
        }
      : o;
  }
}
function Mn(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    s;
  return r
    ? r.call(e)
    : ((e = typeof He == "function" ? He(e) : e[Symbol.iterator]()),
      (s = {}),
      a("next"),
      a("throw"),
      a("return"),
      (s[Symbol.asyncIterator] = function () {
        return this;
      }),
      s);
  function a(o) {
    s[o] =
      e[o] &&
      function (t) {
        return new Promise(function (c, l) {
          ((t = e[o](t)), n(c, l, t.done, t.value));
        });
      };
  }
  function n(o, t, c, l) {
    Promise.resolve(l).then(function (i) {
      o({ value: i, done: c });
    }, t);
  }
}
function Fn(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var si = Object.create
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
          var s = [];
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (s[s.length] = a);
          return s;
        }),
      Pt(e)
    );
  };
function Tn(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var s = Pt(e), a = 0; a < s.length; a++) s[a] !== "default" && Ke(r, e, s[a]);
  return (si(r, e), r);
}
function Bn(e) {
  return e && e.__esModule ? e : { default: e };
}
function kn(e, r, s, a) {
  if (s === "a" && !a) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !a : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return s === "m" ? a : s === "a" ? a.call(e) : a ? a.value : r.get(e);
}
function xn(e, r, s, a, n) {
  if (a === "m") throw new TypeError("Private method is not writable");
  if (a === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (a === "a" ? n.call(e, s) : n ? (n.value = s) : r.set(e, s), s);
}
function Un(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function Ln(e, r, s) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var a, n;
    if (s) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      a = r[Symbol.asyncDispose];
    }
    if (a === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((a = r[Symbol.dispose]), s && (n = a));
    }
    if (typeof a != "function") throw new TypeError("Object not disposable.");
    (n &&
      (a = function () {
        try {
          n.call(this);
        } catch (o) {
          return Promise.reject(o);
        }
      }),
      e.stack.push({ value: r, dispose: a, async: s }));
  } else s && e.stack.push({ async: !0 });
  return r;
}
var ui =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, s) {
        var a = new Error(s);
        return ((a.name = "SuppressedError"), (a.error = e), (a.suppressed = r), a);
      };
function Nn(e) {
  function r(o) {
    ((e.error = e.hasError ? new ui(o, e.error, "An error was suppressed during disposal.") : o),
      (e.hasError = !0));
  }
  var s,
    a = 0;
  function n() {
    for (; (s = e.stack.pop()); )
      try {
        if (!s.async && a === 1) return ((a = 0), e.stack.push(s), Promise.resolve().then(n));
        if (s.dispose) {
          var o = s.dispose.call(s.value);
          if (s.async)
            return (
              (a |= 2),
              Promise.resolve(o).then(n, function (t) {
                return (r(t), n());
              })
            );
        } else a |= 1;
      } catch (t) {
        r(t);
      }
    if (a === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return n();
}
function Gn(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (s, a, n, o, t) {
        return a
          ? r
            ? ".jsx"
            : ".js"
          : n && (!o || !t)
            ? s
            : n + o + "." + t.toLowerCase() + "js";
      })
    : e;
}
const li = {
    __extends: gn,
    __assign: ze,
    __rest: pn,
    __decorate: yn,
    __param: mn,
    __esDecorate: bn,
    __runInitializers: wn,
    __propKey: En,
    __setFunctionName: On,
    __metadata: Rn,
    __awaiter: Pn,
    __generator: Sn,
    __createBinding: Ke,
    __exportStar: In,
    __values: He,
    __read: It,
    __spread: jn,
    __spreadArrays: qn,
    __spreadArray: Cn,
    __await: V,
    __asyncGenerator: An,
    __asyncDelegator: Dn,
    __asyncValues: Mn,
    __makeTemplateObject: Fn,
    __importStar: Tn,
    __importDefault: Bn,
    __classPrivateFieldGet: kn,
    __classPrivateFieldSet: xn,
    __classPrivateFieldIn: Un,
    __addDisposableResource: Ln,
    __disposeResources: Nn,
    __rewriteRelativeImportExtension: Gn,
  },
  ci = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Ln,
        get __assign() {
          return ze;
        },
        __asyncDelegator: Dn,
        __asyncGenerator: An,
        __asyncValues: Mn,
        __await: V,
        __awaiter: Pn,
        __classPrivateFieldGet: kn,
        __classPrivateFieldIn: Un,
        __classPrivateFieldSet: xn,
        __createBinding: Ke,
        __decorate: yn,
        __disposeResources: Nn,
        __esDecorate: bn,
        __exportStar: In,
        __extends: gn,
        __generator: Sn,
        __importDefault: Bn,
        __importStar: Tn,
        __makeTemplateObject: Fn,
        __metadata: Rn,
        __param: mn,
        __propKey: En,
        __read: It,
        __rest: pn,
        __rewriteRelativeImportExtension: Gn,
        __runInitializers: wn,
        __setFunctionName: On,
        __spread: jn,
        __spreadArray: Cn,
        __spreadArrays: qn,
        __values: He,
        default: li,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  P = ni(ci);
var H = {},
  At;
function di() {
  return (
    At ||
      ((At = 1),
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
var $e = {},
  et = {},
  K = {},
  J = {},
  Dt;
function R() {
  if (Dt) return J;
  ((Dt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.BridgeAPIError = void 0));
  class e extends Error {}
  return ((J.BridgeAPIError = e), J);
}
var Mt;
function O() {
  if (Mt) return K;
  ((Mt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.getCallBridge = void 0));
  const e = R();
  function r(a) {
    return !!a?.callBridge;
  }
  const s = () => {
    if (!r(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((K.getCallBridge = s), K);
}
var W = {},
  Ft;
function Je() {
  if (Ft) return W;
  ((Ft = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.withRateLimiter = void 0));
  const e = R(),
    r = (s, a, n, o) => {
      let t = Date.now(),
        c = 0;
      return async (...l) => {
        const i = Date.now();
        if ((i - t > n && ((t = i), (c = 0)), c >= a))
          throw new e.BridgeAPIError(o || "Too many invocations.");
        return ((c = c + 1), s(...l));
      };
    };
  return ((W.withRateLimiter = r), W);
}
var Tt;
function fi() {
  return (
    Tt ||
      ((Tt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = O(),
          s = R(),
          a = Je(),
          n = (0, r.getCallBridge)(),
          o = (l) => {
            if (l && Object.values(l).some((i) => typeof i == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (l, i) => {
            if (typeof l != "string") throw new s.BridgeAPIError("functionKey must be a string!");
            return (o(i), n("invoke", { functionKey: l, payload: i }));
          };
        e.invoke = (0, a.withRateLimiter)(
          t,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function c() {
          return e.invoke;
        }
        e.makeInvoke = c;
      })(et)),
    et
  );
}
var Bt;
function Le() {
  return (
    Bt ||
      ((Bt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(fi(), e));
      })($e)),
    $e
  );
}
var tt = {},
  Q = {},
  rt = {},
  kt;
function Vn() {
  return (
    kt ||
      ((kt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = O(),
          s = R(),
          a = Je(),
          n = 500,
          o = 25,
          t = 1e3 * o;
        (function (f) {
          ((f.REMOTE = "Remote"), (f.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, r.getCallBridge)(),
          l = (f) => {
            if (f && Object.values(f).some((h) => typeof h == "function"))
              throw new s.BridgeAPIError(
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
            return (0, a.withRateLimiter)(
              h,
              n,
              t,
              `${f} invocation calls are rate limited at ${n}/${o}s`,
            );
          };
        e._invokeEndpointFn = u;
      })(rt)),
    rt
  );
}
var xt;
function _i() {
  if (xt) return Q;
  ((xt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.invokeRemote = void 0));
  const e = Vn(),
    r = (s) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(s);
  return ((Q.invokeRemote = r), Q);
}
var X = {},
  Ut;
function vi() {
  if (Ut) return X;
  ((Ut = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.invokeService = void 0));
  const e = Vn(),
    r = (s) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(s);
  return ((X.invokeService = r), X);
}
var Lt;
function hi() {
  return (
    Lt ||
      ((Lt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(_i(), e), r.__exportStar(vi(), e));
      })(tt)),
    tt
  );
}
var nt = {},
  Y = {},
  Z = {},
  Nt;
function gi() {
  if (Nt) return Z;
  ((Nt = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.submit = void 0));
  const e = O(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = async (n) => {
      if ((await s("submit", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((Z.submit = a), Z);
}
var $ = {},
  Gt;
function pi() {
  if (Gt) return $;
  ((Gt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.close = void 0));
  const e = O(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        if ((await s("close", n)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return (($.close = a), $);
}
var ee = {},
  Vt;
function yi() {
  if (Vt) return ee;
  ((Vt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.open = void 0));
  const e = O(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = async () => {
      try {
        if ((await s("open")) === !1)
          throw new r.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((ee.open = a), ee);
}
var te = {},
  zt;
function mi() {
  if (zt) return te;
  ((zt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.refresh = void 0));
  const e = O(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = async (n) => {
      if ((await s("refresh", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((te.refresh = a), te);
}
var re = {},
  Ht;
function bi() {
  if (Ht) return re;
  ((Ht = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.createHistory = void 0));
  const r = (0, O().getCallBridge)(),
    s = async () => {
      const a = await r("createHistory");
      return (
        a.listen((n) => {
          a.location = n;
        }),
        a
      );
    };
  return ((re.createHistory = s), re);
}
var ne = {},
  it = {},
  j = {},
  Kt;
function zn() {
  return (
    Kt ||
      ((Kt = 1),
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
var T = {},
  Jt;
function wi() {
  if (Jt) return T;
  ((Jt = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.TranslationsGetter = T.TranslationGetterError = void 0));
  const e = (a, n) => {
    a.includes(n) || a.push(n);
  };
  class r extends Error {
    constructor(n) {
      (super(n), (this.name = "TranslationGetterError"));
    }
  }
  T.TranslationGetterError = r;
  class s {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(n) {
      this.resourcesAccessor = n;
    }
    async getTranslations(n, o = { fallback: !0 }) {
      const t = await this.getI18nInfoConfig(),
        { fallback: c } = o;
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
      const o = await this.getI18nInfoConfig(),
        t = this.getLocaleLookupOrder(n, o);
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
      let o = this.translationResources.get(n);
      if (!o)
        try {
          ((o = await this.resourcesAccessor.getTranslationResource(n)),
            this.translationResources.set(n, o));
        } catch (t) {
          throw t instanceof r ? t : new r(`Failed to get translation resource for locale: ${n}`);
        }
      return o;
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
    getLocaleLookupOrder(n, o) {
      const { locales: t, fallback: c } = o,
        l = [n],
        i = c[n];
      return (
        i && Array.isArray(i) && i.length > 0 && l.push(...i),
        e(l, o.fallback.default),
        l.filter((u) => t.includes(u))
      );
    }
  }
  return ((T.TranslationsGetter = s), T);
}
var ie = {},
  ot = {},
  Wt;
function Hn() {
  return (
    Wt ||
      ((Wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const s = P.__importDefault(ii()),
          a = (o, t, c) => {
            const l = o[c];
            return l ? (0, e.getTranslationValueFromContent)(l, t) : null;
          };
        e.getTranslationValue = a;
        const n = (o, t) => {
          let c = o[t];
          if (!c) {
            const l = t.split(".");
            l.length > 1 && (c = (0, s.default)(o, l, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = n;
      })(ot)),
    ot
  );
}
var Qt;
function Ei() {
  if (Qt) return ie;
  ((Qt = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.Translator = void 0));
  const e = Hn();
  class r {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(a, n) {
      ((this.locale = a), (this.translationsGetter = n));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(a) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let n = this.cache.get(a);
      if (n === void 0) {
        for (const { translations: o } of this.localeLookupOrderedTranslations) {
          const t = (0, e.getTranslationValueFromContent)(o, a);
          if (t !== null) {
            n = t;
            break;
          }
        }
        ((n = n ?? null), this.cache.set(a, n));
      }
      return n;
    }
  }
  return ((ie.Translator = r), ie);
}
var oe = {},
  Xt;
function Oi() {
  if (Xt) return oe;
  ((Xt = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.ensureLocale = void 0));
  const e = zn(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    s = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    a = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (o, t) => {
        const [c] = t.split("-");
        return (o[c] || (o[c] = t), o);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    n = (o) => {
      const t = o.replace("_", "-");
      return r.has(t) ? t : (a[t] ?? s[t] ?? null);
    };
  return ((oe.ensureLocale = n), oe);
}
var at = {},
  Yt;
function Ri() {
  return (
    Yt ||
      ((Yt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (i) => typeof i == "object" && i !== null && !Array.isArray(i),
          s = (i) => typeof i?.i18n == "string",
          a = (i) => i.startsWith("connect-"),
          n = (i) => i.startsWith("core:"),
          o = (i) => {
            const u = new Set(),
              f = (h, d) =>
                !r(h) || u.has(h)
                  ? []
                  : (u.add(h),
                    Object.entries(h).flatMap(([p, _]) => {
                      const v = [...d, p];
                      return s(_)
                        ? [{ propertyPath: v, key: _.i18n }]
                        : Array.isArray(_)
                          ? _.flatMap((g) => f(g, v))
                          : f(_, v);
                    }));
            return f(i, []);
          },
          t = (i) =>
            Object.entries(i).flatMap(([u, f]) =>
              !a(u) && !n(u) && f && Array.isArray(f) && f.length > 0 ? f.map((h) => [h, u]) : [],
            );
        e.getI18nSupportedModuleEntries = t;
        const c = (i) => {
          const u = new Set();
          for (const f of (0, e.getI18nSupportedModuleEntries)(i)) {
            const h = o(f[0]);
            for (const { key: d } of h) u.add(d);
          }
          return u.size > 0 ? Array.from(u) : [];
        };
        e.extractI18nKeysFromModules = c;
        const l = (i) => {
          const u = [];
          for (const f of (0, e.getI18nSupportedModuleEntries)(i)) {
            const h = o(f[0]);
            for (const d of h) u.push({ moduleName: f[1], ...d });
          }
          return u;
        };
        e.extractI18nPropertiesFromModules = l;
      })(at)),
    at
  );
}
var st = {},
  Zt;
function Pi() {
  return (Zt || ((Zt = 1), Object.defineProperty(st, "__esModule", { value: !0 })), st);
}
var $t;
function Kn() {
  return (
    $t ||
      (($t = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const r = P;
        (r.__exportStar(zn(), e),
          r.__exportStar(wi(), e),
          r.__exportStar(Ei(), e),
          r.__exportStar(Oi(), e));
        var s = Hn();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return s.getTranslationValue;
          },
        });
        var a = Ri();
        (Object.defineProperty(e, "extractI18nKeysFromModules", {
          enumerable: !0,
          get: function () {
            return a.extractI18nKeysFromModules;
          },
        }),
          Object.defineProperty(e, "extractI18nPropertiesFromModules", {
            enumerable: !0,
            get: function () {
              return a.extractI18nPropertiesFromModules;
            },
          }),
          Object.defineProperty(e, "getI18nSupportedModuleEntries", {
            enumerable: !0,
            get: function () {
              return a.getI18nSupportedModuleEntries;
            },
          }),
          r.__exportStar(Pi(), e));
      })(it)),
    it
  );
}
var er;
function Si() {
  if (er) return ne;
  ((er = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.getContext = void 0));
  const e = O(),
    r = Kn(),
    s = (0, e.getCallBridge)(),
    a = async () => {
      var n;
      const o = await s("getContext"),
        t = o?.locale;
      return (t && (o.locale = (n = (0, r.ensureLocale)(t)) !== null && n !== void 0 ? n : t), o);
    };
  return ((ne.getContext = a), ne);
}
var ae = {},
  tr;
function Ii() {
  if (tr) return ae;
  ((tr = 1),
    Object.defineProperty(ae, "__esModule", { value: !0 }),
    (ae.changeWindowTitle = void 0));
  const e = O(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        await s("changeWindowTitle", n);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((ae.changeWindowTitle = a), ae);
}
var se = {},
  rr;
function ji() {
  if (rr) return se;
  ((rr = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.theme = void 0));
  const r = (0, O().getCallBridge)();
  return ((se.theme = { enable: () => r("enableTheming") }), se);
}
var ue = {},
  le = {},
  ut = {},
  B = {},
  nr;
function Jn() {
  if (nr) return B;
  ((nr = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.blobToBase64 = B.base64ToBlob = void 0));
  const e = (s, a) => {
    if (!s) return null;
    const n = s.includes(";base64") ? s.split(",")[1] : s,
      o = atob(n),
      t = new Array(o.length);
    for (let l = 0; l < o.length; l++) t[l] = o.charCodeAt(l);
    const c = new Uint8Array(t);
    return new Blob([c], { type: a });
  };
  B.base64ToBlob = e;
  const r = (s) =>
    new Promise((a, n) => {
      const o = new FileReader();
      ((o.onloadend = () => {
        a(o.result);
      }),
        (o.onerror = n),
        o.readAsDataURL(s));
    });
  return ((B.blobToBase64 = r), B);
}
var ir;
function qi() {
  return (
    ir ||
      ((ir = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const r = Jn(),
          s = (i) => {
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
          a = async (i) => ({ data: await (0, r.blobToBase64)(i), type: i.type }),
          n = (i) => (0, r.base64ToBlob)(i.data, i.type),
          o = async (i) => {
            if (i instanceof Blob) return { ...(await a(i)), __isBlobData: !0 };
            if (Array.isArray(i))
              return Promise.all(i.map((u) => (0, e.serialiseBlobsInPayload)(u)));
            if (i && s(i)) {
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
        e.serialiseBlobsInPayload = o;
        const t = (i) => {
          if (i && s(i) && "__isBlobData" in i) {
            const u = i;
            return n({ data: u.data, type: u.type });
          }
          if (Array.isArray(i)) return i.map((u) => (0, e.deserialiseBlobsInPayload)(u));
          if (i && s(i)) {
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
              : i && s(i)
                ? Object.values(i).some((u) => (0, e.containsBlobs)(u))
                : !1;
        e.containsBlobs = c;
        const l = (i) =>
          i && s(i) && "__isBlobData" in i
            ? !0
            : Array.isArray(i)
              ? i.some((u) => (0, e.containsSerialisedBlobs)(u))
              : i && s(i)
                ? Object.values(i).some((u) => (0, e.containsSerialisedBlobs)(u))
                : !1;
        e.containsSerialisedBlobs = l;
      })(ut)),
    ut
  );
}
var or;
function Wn() {
  if (or) return le;
  ((or = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.events = void 0));
  const e = O(),
    r = qi(),
    s = (0, e.getCallBridge)(),
    a = async (o, t) => {
      let c = t;
      return (
        (0, r.containsBlobs)(t) && (c = await (0, r.serialiseBlobsInPayload)(t)),
        s("emit", { event: o, payload: c })
      );
    },
    n = (o, t) =>
      s("on", {
        event: o,
        callback: (l) => {
          let i = l;
          return (
            (0, r.containsSerialisedBlobs)(l) && (i = (0, r.deserialiseBlobsInPayload)(l)),
            t(i)
          );
        },
      });
  return ((le.events = { emit: a, on: n }), le);
}
var ar;
function Ci() {
  if (ar) return ue;
  ((ar = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.emitReadyEvent = void 0));
  const e = Wn(),
    r = Zn(),
    s = "EXTENSION_READY",
    a = async () => {
      const n = await r.view.getContext();
      await e.events.emit(s, { localId: n.localId });
    };
  return ((ue.emitReadyEvent = a), ue);
}
const Ai = "modulepreload",
  Di = function (e, r) {
    return new URL(e, r).href;
  },
  sr = {},
  Mi = function (r, s, a) {
    let n = Promise.resolve();
    if (s && s.length > 0) {
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
        s.map((u) => {
          if (((u = Di(u, a)), u in sr)) return;
          sr[u] = !0;
          const f = u.endsWith(".css"),
            h = f ? '[rel="stylesheet"]' : "";
          if (a)
            for (let p = t.length - 1; p >= 0; p--) {
              const _ = t[p];
              if (_.href === u && (!f || _.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${u}"]${h}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = f ? "stylesheet" : Ai),
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
    function o(t) {
      const c = new Event("vite:preloadError", { cancelable: !0 });
      if (((c.payload = t), window.dispatchEvent(c), !c.defaultPrevented)) throw t;
    }
    return n.then((t) => {
      for (const c of t || []) c.status === "rejected" && o(c.reason);
      return r().catch(o);
    });
  };
var ce = {},
  lt = {},
  de = {},
  Ne = {},
  ur;
function Qn() {
  if (ur) return Ne;
  ((ur = 1), Object.defineProperty(Ne, "__esModule", { value: !0 }), (Ne.default = s));
  let e;
  const r = new Uint8Array(16);
  function s() {
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
  return Ne;
}
var L = {},
  fe = {},
  _e = {},
  lr;
function Fi() {
  if (lr) return _e;
  ((lr = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((_e.default = e), _e);
}
var cr;
function We() {
  if (cr) return fe;
  ((cr = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  var e = r(Fi());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function s(n) {
    return typeof n == "string" && e.default.test(n);
  }
  var a = s;
  return ((fe.default = a), fe);
}
var dr;
function Qe() {
  if (dr) return L;
  ((dr = 1),
    Object.defineProperty(L, "__esModule", { value: !0 }),
    (L.default = void 0),
    (L.unsafeStringify = a));
  var e = r(We());
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }
  const s = [];
  for (let t = 0; t < 256; ++t) s.push((t + 256).toString(16).slice(1));
  function a(t, c = 0) {
    return (
      s[t[c + 0]] +
      s[t[c + 1]] +
      s[t[c + 2]] +
      s[t[c + 3]] +
      "-" +
      s[t[c + 4]] +
      s[t[c + 5]] +
      "-" +
      s[t[c + 6]] +
      s[t[c + 7]] +
      "-" +
      s[t[c + 8]] +
      s[t[c + 9]] +
      "-" +
      s[t[c + 10]] +
      s[t[c + 11]] +
      s[t[c + 12]] +
      s[t[c + 13]] +
      s[t[c + 14]] +
      s[t[c + 15]]
    );
  }
  function n(t, c = 0) {
    const l = a(t, c);
    if (!(0, e.default)(l)) throw TypeError("Stringified UUID is invalid");
    return l;
  }
  var o = n;
  return ((L.default = o), L);
}
var fr;
function Ti() {
  if (fr) return de;
  ((fr = 1), Object.defineProperty(de, "__esModule", { value: !0 }), (de.default = void 0));
  var e = s(Qn()),
    r = Qe();
  function s(i) {
    return i && i.__esModule ? i : { default: i };
  }
  let a,
    n,
    o = 0,
    t = 0;
  function c(i, u, f) {
    let h = (u && f) || 0;
    const d = u || new Array(16);
    i = i || {};
    let p = i.node || a,
      _ = i.clockseq !== void 0 ? i.clockseq : n;
    if (p == null || _ == null) {
      const E = i.random || (i.rng || e.default)();
      (p == null && (p = a = [E[0] | 1, E[1], E[2], E[3], E[4], E[5]]),
        _ == null && (_ = n = ((E[6] << 8) | E[7]) & 16383));
    }
    let v = i.msecs !== void 0 ? i.msecs : Date.now(),
      g = i.nsecs !== void 0 ? i.nsecs : t + 1;
    const y = v - o + (g - t) / 1e4;
    if (
      (y < 0 && i.clockseq === void 0 && (_ = (_ + 1) & 16383),
      (y < 0 || v > o) && i.nsecs === void 0 && (g = 0),
      g >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((o = v), (t = g), (n = _), (v += 122192928e5));
    const m = ((v & 268435455) * 1e4 + g) % 4294967296;
    ((d[h++] = (m >>> 24) & 255),
      (d[h++] = (m >>> 16) & 255),
      (d[h++] = (m >>> 8) & 255),
      (d[h++] = m & 255));
    const b = ((v / 4294967296) * 1e4) & 268435455;
    ((d[h++] = (b >>> 8) & 255),
      (d[h++] = b & 255),
      (d[h++] = ((b >>> 24) & 15) | 16),
      (d[h++] = (b >>> 16) & 255),
      (d[h++] = (_ >>> 8) | 128),
      (d[h++] = _ & 255));
    for (let E = 0; E < 6; ++E) d[h + E] = p[E];
    return u || (0, r.unsafeStringify)(d);
  }
  var l = c;
  return ((de.default = l), de);
}
var ve = {},
  C = {},
  he = {},
  _r;
function Xn() {
  if (_r) return he;
  ((_r = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  var e = r(We());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function s(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    let o;
    const t = new Uint8Array(16);
    return (
      (t[0] = (o = parseInt(n.slice(0, 8), 16)) >>> 24),
      (t[1] = (o >>> 16) & 255),
      (t[2] = (o >>> 8) & 255),
      (t[3] = o & 255),
      (t[4] = (o = parseInt(n.slice(9, 13), 16)) >>> 8),
      (t[5] = o & 255),
      (t[6] = (o = parseInt(n.slice(14, 18), 16)) >>> 8),
      (t[7] = o & 255),
      (t[8] = (o = parseInt(n.slice(19, 23), 16)) >>> 8),
      (t[9] = o & 255),
      (t[10] = ((o = parseInt(n.slice(24, 36), 16)) / 1099511627776) & 255),
      (t[11] = (o / 4294967296) & 255),
      (t[12] = (o >>> 24) & 255),
      (t[13] = (o >>> 16) & 255),
      (t[14] = (o >>> 8) & 255),
      (t[15] = o & 255),
      t
    );
  }
  var a = s;
  return ((he.default = a), he);
}
var vr;
function Yn() {
  if (vr) return C;
  ((vr = 1),
    Object.defineProperty(C, "__esModule", { value: !0 }),
    (C.URL = C.DNS = void 0),
    (C.default = t));
  var e = Qe(),
    r = s(Xn());
  function s(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function a(c) {
    c = unescape(encodeURIComponent(c));
    const l = [];
    for (let i = 0; i < c.length; ++i) l.push(c.charCodeAt(i));
    return l;
  }
  const n = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  C.DNS = n;
  const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  C.URL = o;
  function t(c, l, i) {
    function u(f, h, d, p) {
      var _;
      if (
        (typeof f == "string" && (f = a(f)),
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
    return ((u.DNS = n), (u.URL = o), u);
  }
  return C;
}
var ge = {},
  hr;
function Bi() {
  if (hr) return ge;
  ((hr = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  function e(d) {
    if (typeof d == "string") {
      const p = unescape(encodeURIComponent(d));
      d = new Uint8Array(p.length);
      for (let _ = 0; _ < p.length; ++_) d[_] = p.charCodeAt(_);
    }
    return r(a(n(d), d.length * 8));
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
  function s(d) {
    return (((d + 64) >>> 9) << 4) + 14 + 1;
  }
  function a(d, p) {
    ((d[p >> 5] |= 128 << (p % 32)), (d[s(p) - 1] = p));
    let _ = 1732584193,
      v = -271733879,
      g = -1732584194,
      y = 271733878;
    for (let m = 0; m < d.length; m += 16) {
      const b = _,
        E = v,
        I = g,
        D = y;
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
        (_ = o(_, b)),
        (v = o(v, E)),
        (g = o(g, I)),
        (y = o(y, D)));
    }
    return [_, v, g, y];
  }
  function n(d) {
    if (d.length === 0) return [];
    const p = d.length * 8,
      _ = new Uint32Array(s(p));
    for (let v = 0; v < p; v += 8) _[v >> 5] |= (d[v / 8] & 255) << (v % 32);
    return _;
  }
  function o(d, p) {
    const _ = (d & 65535) + (p & 65535);
    return (((d >> 16) + (p >> 16) + (_ >> 16)) << 16) | (_ & 65535);
  }
  function t(d, p) {
    return (d << p) | (d >>> (32 - p));
  }
  function c(d, p, _, v, g, y) {
    return o(t(o(o(p, d), o(v, y)), g), _);
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
  return ((ge.default = h), ge);
}
var gr;
function ki() {
  if (gr) return ve;
  ((gr = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  var e = s(Yn()),
    r = s(Bi());
  function s(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var n = (0, e.default)("v3", 48, r.default);
  return ((ve.default = n), ve);
}
var pe = {},
  ye = {},
  pr;
function xi() {
  if (pr) return ye;
  ((pr = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((ye.default = r), ye);
}
var yr;
function Ui() {
  if (yr) return pe;
  ((yr = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  var e = a(xi()),
    r = a(Qn()),
    s = Qe();
  function a(t) {
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
    return (0, s.unsafeStringify)(i);
  }
  var o = n;
  return ((pe.default = o), pe);
}
var me = {},
  be = {},
  mr;
function Li() {
  if (mr) return be;
  ((mr = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.default = void 0));
  function e(n, o, t, c) {
    switch (n) {
      case 0:
        return (o & t) ^ (~o & c);
      case 1:
        return o ^ t ^ c;
      case 2:
        return (o & t) ^ (o & c) ^ (t & c);
      case 3:
        return o ^ t ^ c;
    }
  }
  function r(n, o) {
    return (n << o) | (n >>> (32 - o));
  }
  function s(n) {
    const o = [1518500249, 1859775393, 2400959708, 3395469782],
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
          m = (r(h, 5) + e(y, d, p, _) + v + o[y] + f[g]) >>> 0;
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
  var a = s;
  return ((be.default = a), be);
}
var br;
function Ni() {
  if (br) return me;
  ((br = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.default = void 0));
  var e = s(Yn()),
    r = s(Li());
  function s(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var n = (0, e.default)("v5", 80, r.default);
  return ((me.default = n), me);
}
var we = {},
  wr;
function Gi() {
  if (wr) return we;
  ((wr = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((we.default = e), we);
}
var Ee = {},
  Er;
function Vi() {
  if (Er) return Ee;
  ((Er = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.default = void 0));
  var e = r(We());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function s(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    return parseInt(n.slice(14, 15), 16);
  }
  var a = s;
  return ((Ee.default = a), Ee);
}
var Or;
function zi() {
  return (
    Or ||
      ((Or = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "NIL", {
            enumerable: !0,
            get: function () {
              return o.default;
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
              return s.default;
            },
          }),
          Object.defineProperty(e, "v4", {
            enumerable: !0,
            get: function () {
              return a.default;
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
        var r = u(Ti()),
          s = u(ki()),
          a = u(Ui()),
          n = u(Ni()),
          o = u(Gi()),
          t = u(Vi()),
          c = u(We()),
          l = u(Qe()),
          i = u(Xn());
        function u(f) {
          return f && f.__esModule ? f : { default: f };
        }
      })(lt)),
    lt
  );
}
var Rr;
function Hi() {
  if (Rr) return ce;
  ((Rr = 1),
    Object.defineProperty(ce, "__esModule", { value: !0 }),
    (ce.createAdfRendererIframeProps = void 0));
  const e = zi(),
    r = async (s, a) => {
      const n = await Mi(
          () => import("./index-Byf9Kz4g.js").then((u) => u.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        o = n.default || n,
        t = new URL(document.referrer).origin,
        c = `${t}/forge-apps/adf-renderer`,
        l = a || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        i = () => {
          var u, f;
          const h = document.getElementById(l),
            d = {
              type: "adf-document",
              document: (u = s.extension.macro) === null || u === void 0 ? void 0 : u.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: s.localId,
            };
          (o.iframeResizer(
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
  return ((ce.createAdfRendererIframeProps = r), ce);
}
var Pr;
function Zn() {
  if (Pr) return Y;
  ((Pr = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.view = void 0));
  const e = gi(),
    r = pi(),
    s = yi(),
    a = mi(),
    n = bi(),
    o = Si(),
    t = Ii(),
    c = ji(),
    l = Ci(),
    i = Hi();
  return (
    (Y.view = {
      submit: e.submit,
      close: r.close,
      open: s.open,
      refresh: a.refresh,
      createHistory: n.createHistory,
      getContext: o.getContext,
      theme: c.theme,
      changeWindowTitle: t.changeWindowTitle,
      emitReadyEvent: l.emitReadyEvent,
      createAdfRendererIframeProps: i.createAdfRendererIframeProps,
    }),
    Y
  );
}
var Sr;
function jt() {
  return (
    Sr ||
      ((Sr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Zn(), e));
      })(nt)),
    nt
  );
}
var ct = {},
  Oe = {},
  Ir;
function Ki() {
  if (Ir) return Oe;
  ((Ir = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.router = void 0));
  const r = (0, O().getCallBridge)(),
    s = async (t) => {
      if (!t?.target) throw new Error("target is required for getUrl");
      const c = await r("getUrl", t);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (l) {
        throw new Error(`Failed to parse URL: ${c} (${l})`);
      }
    },
    a = (t) => {
      if (typeof t == "string") return r("navigate", { url: t, type: "same-tab" });
      if (!t?.target) throw new Error("target is required for navigation");
      return r("navigate", { ...t, type: "same-tab" });
    },
    n = (t) => {
      if (typeof t == "string") return r("navigate", { url: t, type: "new-tab" });
      if (!t?.target) throw new Error("target is required for navigation");
      return r("navigate", { ...t, type: "new-tab" });
    },
    o = async () => r("reload");
  return ((Oe.router = { getUrl: s, navigate: a, open: n, reload: o }), Oe);
}
var jr;
function Ji() {
  return (
    jr ||
      ((jr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Ki(), e));
      })(ct)),
    ct
  );
}
var dt = {},
  Re = {},
  qr;
function Wi() {
  if (qr) return Re;
  ((qr = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.Modal = void 0));
  const e = O(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = () => {};
  class n {
    constructor(t) {
      var c, l;
      ((this.resource = t?.resource || null),
        (this.onClose = t?.onClose || a),
        (this.size = t?.size || "medium"),
        (this.context = t?.context || {}),
        (this.closeOnEscape = (c = t?.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick =
          (l = t?.closeOnOverlayClick) !== null && l !== void 0 ? l : !0));
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
          throw new r.BridgeAPIError("Unable to open modal.");
      } catch {
        throw new r.BridgeAPIError("Unable to open modal.");
      }
    }
  }
  return ((Re.Modal = n), Re);
}
var Cr;
function Qi() {
  return (
    Cr ||
      ((Cr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Wi(), e));
      })(dt)),
    dt
  );
}
var S = {},
  k = {},
  Ar;
function Xi() {
  if (Ar) return k;
  ((Ar = 1),
    Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.productFetchApi = k.remoteFetchApi = void 0));
  const e = Jn(),
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
    s = (t) => {
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
    a = async (t) => {
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
        const u = s(i),
          { body: f, headers: h, isMultipartFormData: d } = await a(u),
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
          b = m ? (0, e.base64ToBlob)(_, v["content-type"]) : _;
        return new Response(b || null, { headers: v, status: y, statusText: g });
      };
      return { requestRemote: (l, i) => c(l, i) };
    };
  k.remoteFetchApi = n;
  const o = (t) => {
    const c = async (l, i, u) => {
      const f = s(u),
        { body: h, headers: d, isMultipartFormData: p } = await a(f);
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
          isAttachment: b,
        } = await t("fetchProduct", _),
        E = b ? (0, e.base64ToBlob)(v, g["content-type"]) : v;
      return new Response(E || null, { headers: g, status: m, statusText: y });
    };
    return {
      requestConfluence: (l, i) => c("confluence", l, i),
      requestJira: (l, i) => c("jira", l, i),
      requestBitbucket: (l, i) => c("bitbucket", l, i),
    };
  };
  return ((k.productFetchApi = o), k);
}
var Dr;
function Yi() {
  if (Dr) return S;
  Dr = 1;
  var e;
  (Object.defineProperty(S, "__esModule", { value: !0 }),
    (S.requestRemote = S.requestBitbucket = S.requestJira = S.requestConfluence = void 0));
  const r = O(),
    s = Xi();
  return (
    (e = (0, s.productFetchApi)((0, r.getCallBridge)())),
    (S.requestConfluence = e.requestConfluence),
    (S.requestJira = e.requestJira),
    (S.requestBitbucket = e.requestBitbucket),
    (S.requestRemote = (0, s.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    S
  );
}
var ft = {},
  Pe = {},
  Mr;
function Zi() {
  if (Mr) return Pe;
  ((Mr = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.showFlag = void 0));
  const e = O(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = (n) => {
      var o;
      if (!n.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = s("showFlag", { ...n, type: (o = n.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await t, s("closeFlag", { id: n.id })) };
    };
  return ((Pe.showFlag = a), Pe);
}
var Fr;
function $i() {
  return (
    Fr ||
      ((Fr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = Zi();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return r.showFlag;
          },
        });
      })(ft)),
    ft
  );
}
var _t = {},
  Tr;
function eo() {
  return (
    Tr ||
      ((Tr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Wn(), e));
      })(_t)),
    _t
  );
}
var vt = {},
  Se = {},
  Br;
function to() {
  if (Br) return Se;
  ((Br = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.realtime = void 0));
  const r = (0, O().getCallBridge)(),
    s = (t, c, l) => r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: l }),
    a = (t, c, l) => r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: l }),
    n = (t, c, l) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: l, isGlobal: !0 }),
    o = (t, c, l) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: l, isGlobal: !0 });
  return ((Se.realtime = { publish: s, subscribe: a, publishGlobal: n, subscribeGlobal: o }), Se);
}
var ht = {},
  kr;
function ro() {
  return (
    kr ||
      ((kr = 1),
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
      })(ht)),
    ht
  );
}
var xr;
function no() {
  return (
    xr ||
      ((xr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var r = to();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return r.realtime;
          },
        });
        var s = ro();
        (Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return s.Jira;
          },
        }),
          Object.defineProperty(e, "Confluence", {
            enumerable: !0,
            get: function () {
              return s.Confluence;
            },
          }),
          Object.defineProperty(e, "Bitbucket", {
            enumerable: !0,
            get: function () {
              return s.Bitbucket;
            },
          }));
      })(vt)),
    vt
  );
}
var gt = {},
  Ie = {},
  pt = {},
  Ur;
function io() {
  return (
    Ur ||
      ((Ur = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = O(),
          s = R(),
          a = 30,
          n = (0, r.getCallBridge)();
        e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE =
          "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
        const o = (c) => {
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
              if (c.agentName.length > a) throw new Error("rovo agent name too long");
              if (c.agentKey.length > a) throw new Error("rovo agent key too long");
            }
            const l = o(c);
            if ((await n("openRovo", l)) === !1)
              throw new s.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(pt)),
    pt
  );
}
var Lr;
function oo() {
  if (Lr) return Ie;
  ((Lr = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.rovo = void 0));
  const e = io();
  return ((Ie.rovo = { open: e.open }), Ie);
}
var Nr;
function ao() {
  return (
    Nr ||
      ((Nr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(oo(), e));
      })(gt)),
    gt
  );
}
var q = {},
  Gr;
function so() {
  if (Gr) return q;
  ((Gr = 1),
    Object.defineProperty(q, "__esModule", { value: !0 }),
    (q.createTranslationFunction = q.getTranslations = q.resetTranslationsCache = void 0));
  const e = Kn(),
    r = jt(),
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
    a = new e.TranslationsGetter(s),
    n = () => {
      a.reset();
    };
  q.resetTranslationsCache = n;
  const o = async (c = null, l = { fallback: !0 }) => {
    let i = c;
    return (i || (i = (await r.view.getContext()).locale), await a.getTranslations(i, l));
  };
  q.getTranslations = o;
  const t = async (c = null) => {
    let l = c;
    l || (l = (await r.view.getContext()).locale);
    const i = new e.Translator(l, a);
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
  return ((q.createTranslationFunction = t), q);
}
var yt = {},
  je = {},
  Vr;
function uo() {
  if (Vr) return je;
  ((Vr = 1), Object.defineProperty(je, "__esModule", { value: !0 }), (je.permissions = void 0));
  const r = (0, O().getCallBridge)(),
    s = async (l) => r("__permission__egressGet", l),
    a = async (l) => r("__permission__egressSet", l),
    n = async (l) => r("__permission__egressDeleteDomain", l),
    o = async (l) => r("__permission__egressDeleteGroup", l),
    t = async (l) => r("__permission__remoteGet", l),
    c = async (l) => r("__permission__remoteSet", l);
  return (
    (je.permissions = {
      egress: { get: s, set: a, deleteDomain: n, deleteGroup: o },
      remote: { get: t, set: c },
    }),
    je
  );
}
var zr;
function lo() {
  return (
    zr ||
      ((zr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(uo(), e));
      })(yt)),
    yt
  );
}
var mt = {},
  bt = {},
  wt = {},
  qe = {},
  Ce = {},
  Hr;
function $n() {
  return (
    Hr ||
      ((Hr = 1),
      Object.defineProperty(Ce, "__esModule", { value: !0 }),
      (Ce.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Ce.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Ce
  );
}
var Kr;
function Xe() {
  if (Kr) return qe;
  ((Kr = 1),
    Object.defineProperty(qe, "__esModule", { value: !0 }),
    (qe.checkRestrictedEnvironment = void 0));
  const e = R(),
    r = jt(),
    s = $n(),
    a = async () => {
      const { environmentType: n } = await r.view.getContext();
      if (n === "PRODUCTION")
        throw new e.BridgeAPIError(s.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((qe.checkRestrictedEnvironment = a), qe);
}
var Jr;
function co() {
  return (
    Jr ||
      ((Jr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = Le(),
          s = R(),
          a = Xe(),
          o = (0, O().getCallBridge)(),
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
              throw new s.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(f) || f.length === 0)
              throw new s.BridgeAPIError("objects array is required and must not be empty");
            const h = f.map((y, m) => {
                if (y instanceof Blob) return y;
                if (!(y && typeof y == "object" && "data" in y && typeof y.data == "string"))
                  throw new s.BridgeAPIError(
                    `Invalid object type at index ${m}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return t(y.data, y.mimeType);
                } catch {
                  throw new s.BridgeAPIError(
                    `Invalid base64 data at index ${m}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              d = await Promise.all(h.map((y) => c(y))),
              p = await (0, r.invoke)(u, { allObjectMetadata: d });
            if (!p || typeof p != "object")
              throw new s.BridgeAPIError("Invalid response from functionKey");
            const _ = new Map(),
              v = new Map();
            return (
              h.forEach((y, m) => {
                const b = d[m];
                (_.set(b.checksum, y), v.set(b.checksum, m));
              }),
              Object.entries(p).map(([y, m]) => {
                const { key: b, checksum: E } = m,
                  I = _.get(E),
                  D = v.get(E);
                return D === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: b,
                        error: `Index not found for checksum ${E}`,
                      }),
                      index: -1,
                    }
                  : I
                    ? {
                        promise: (async () => {
                          try {
                            const M = await fetch(y, {
                              method: "PUT",
                              body: I,
                              headers: {
                                "Content-Type": I.type || "application/octet-stream",
                                "Content-Length": I.size.toString(),
                              },
                            });
                            return {
                              success: M.ok,
                              key: b,
                              status: M.status,
                              error: M.ok ? void 0 : `Upload failed with status ${M.status}`,
                            };
                          } catch (M) {
                            return {
                              success: !1,
                              key: b,
                              status: 503,
                              error: M instanceof Error ? M.message : "Upload failed",
                            };
                          }
                        })(),
                        index: D,
                        objectType: I.type,
                        objectSize: I.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: b,
                          error: `Blob not found for checksum ${E}`,
                        }),
                        index: D,
                      };
              })
            );
          };
        e.createUploadPromises = l;
        const i = async ({ functionKey: u, objects: f }) => {
          (await (0, a.checkRestrictedEnvironment)(),
            o("trackObjectStoreAction", { action: "upload" }));
          const h = await (0, e.createUploadPromises)({ functionKey: u, objects: f });
          return await Promise.all(h.map((p) => p.promise));
        };
        e.upload = i;
      })(wt)),
    wt
  );
}
var Ae = {},
  Wr;
function fo() {
  if (Wr) return Ae;
  ((Wr = 1), Object.defineProperty(Ae, "__esModule", { value: !0 }), (Ae.deleteObjects = void 0));
  const e = Le(),
    r = R(),
    s = Xe(),
    n = (0, O().getCallBridge)(),
    o = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
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
  return ((Ae.deleteObjects = o), Ae);
}
var De = {},
  Qr;
function _o() {
  if (Qr) return De;
  ((Qr = 1), Object.defineProperty(De, "__esModule", { value: !0 }), (De.download = void 0));
  const e = Le(),
    r = R(),
    s = Xe(),
    n = (0, O().getCallBridge)(),
    o = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
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
  return ((De.download = o), De);
}
var Me = {},
  Xr;
function vo() {
  if (Xr) return Me;
  ((Xr = 1), Object.defineProperty(Me, "__esModule", { value: !0 }), (Me.getMetadata = void 0));
  const e = Le(),
    r = R(),
    s = Xe(),
    n = (0, O().getCallBridge)(),
    o = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
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
  return ((Me.getMetadata = o), Me);
}
var Yr;
function ho() {
  return (
    Yr ||
      ((Yr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const r = co();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return r.createUploadPromises;
          },
        });
        const s = fo(),
          a = _o(),
          n = vo();
        e.objectStore = {
          upload: r.upload,
          download: a.download,
          getMetadata: n.getMetadata,
          delete: s.deleteObjects,
        };
      })(bt)),
    bt
  );
}
var Zr;
function go() {
  return (
    Zr ||
      ((Zr = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(ho(), e), r.__exportStar($n(), e));
      })(mt)),
    mt
  );
}
var Et = {},
  Fe = {},
  x = {},
  N = {},
  Ge = {},
  $r;
function po() {
  if ($r) return Ge;
  (($r = 1), Object.defineProperty(Ge, "__esModule", { value: !0 }));
  const e = A();
  let r = class {
    constructor(a) {
      ((this._sdkKey = a),
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
    setValues(a, n) {
      var o;
      if (!a) return !1;
      const t = (0, e._typedJsonParse)(a.data, "has_updates", "EvaluationResponse");
      return t == null
        ? !1
        : ((this._source = a.source),
          t?.has_updates !== !0 ||
            ((this._rawValues = a.data),
            (this._lcut = t.time),
            (this._receivedAt = a.receivedAt),
            (this._values = t),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(a.source, t)),
            a.source && t.user && this._setWarningState(n, t),
            e.SDKFlags.setFlags(this._sdkKey, (o = t.sdk_flags) !== null && o !== void 0 ? o : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(a) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.feature_gates,
        a,
      );
    }
    getConfig(a) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.dynamic_configs,
        a,
      );
    }
    getLayer(a) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.layer_configs,
        a,
      );
    }
    getParamStore(a) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.param_stores,
        a,
      );
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var a;
      return (a = this._values) === null || a === void 0 ? void 0 : a.exposures;
    }
    _extractBootstrapMetadata(a, n) {
      if (a !== "Bootstrap") return null;
      const o = {};
      return (
        n.user && (o.user = n.user),
        n.sdkInfo && (o.generatorSDKInfo = n.sdkInfo),
        (o.lcut = n.time),
        o
      );
    }
    _getDetailedStoreResult(a, n) {
      let o = null;
      return (
        a && (o = a[n] ? a[n] : a[(0, e._DJB2)(n)]),
        { result: o, details: this._getDetails(o == null) }
      );
    }
    _setWarningState(a, n) {
      var o, t;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((o = a.customIDs) === null || o === void 0 ? void 0 : o.stableID) !== c &&
        ((!((t = a.customIDs) === null || t === void 0) && t.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in n) {
        const l = n.user;
        (0, e._getFullUserHash)(a) !== (0, e._getFullUserHash)(l) &&
          this._warnings.add("PartialUserMatch");
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues")
        return { reason: this._source };
      const a = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (a.warnings = Array.from(this._warnings)), a);
    }
    _getDetails(a) {
      var n, o;
      const t = this.getCurrentSourceDetails();
      let c = t.reason;
      const l = (n = t.warnings) !== null && n !== void 0 ? n : [];
      (this._source === "Bootstrap" && l.length > 0 && (c = c + l[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${a ? "Unrecognized" : "Recognized"}`));
      const i =
        this._source === "Bootstrap" && (o = this._bootstrapMetadata) !== null && o !== void 0
          ? o
          : void 0;
      return (i && (t.bootstrapMetadata = i), Object.assign(Object.assign({}, t), { reason: c }));
    }
  };
  return ((Ge.default = r), Ge);
}
var G = {},
  Te = {},
  en;
function yo() {
  if (en) return Te;
  ((en = 1),
    Object.defineProperty(Te, "__esModule", { value: !0 }),
    (Te._resolveDeltasResponse = void 0));
  const e = A(),
    r = 2;
  function s(t, c) {
    const l = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!l) return { hadBadDeltaChecksum: !0 };
    const i = a(t, l),
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
  Te._resolveDeltasResponse = s;
  function a(t, c) {
    return Object.assign(Object.assign(Object.assign({}, t), c), {
      feature_gates: Object.assign(Object.assign({}, t.feature_gates), c.feature_gates),
      layer_configs: Object.assign(Object.assign({}, t.layer_configs), c.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, t.dynamic_configs), c.dynamic_configs),
    });
  }
  function n(t) {
    const c = t;
    return (
      o(t.deleted_gates, c.feature_gates),
      delete c.deleted_gates,
      o(t.deleted_configs, c.dynamic_configs),
      delete c.deleted_configs,
      o(t.deleted_layers, c.layer_configs),
      delete c.deleted_layers,
      c
    );
  }
  function o(t, c) {
    t?.forEach((l) => {
      delete c[l];
    });
  }
  return Te;
}
var tn;
function ei() {
  if (tn) return G;
  tn = 1;
  var e =
    (G && G.__awaiter) ||
    function (n, o, t, c) {
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
        d((c = c.apply(n, o || [])).next());
      });
    };
  Object.defineProperty(G, "__esModule", { value: !0 });
  const r = A(),
    s = yo();
  class a extends r.NetworkCore {
    constructor(o, t) {
      super(o, t);
      const c = o?.networkConfig;
      ((this._option = o),
        (this._initializeUrlConfig = new r.UrlConfiguration(
          r.Endpoint._initialize,
          c?.initializeUrl,
          c?.api,
          c?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(o, t, c, l, i) {
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
        return this._fetchEvaluations(o, v, g, c);
      });
    }
    _fetchEvaluations(o, t, c, l) {
      return e(this, void 0, void 0, function* () {
        var i, u;
        const f = yield this.post({
          sdkKey: o,
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
        const h = (0, s._resolveDeltasResponse)(t, f.body);
        return typeof h == "string"
          ? h
          : this._fetchEvaluations(
              o,
              t,
              Object.assign(Object.assign(Object.assign({}, c), h), {
                deltasResponseRequested: !1,
              }),
              l,
            );
      });
    }
  }
  return ((G.default = a), G);
}
var Be = {},
  rn;
function mo() {
  if (rn) return Be;
  ((rn = 1),
    Object.defineProperty(Be, "__esModule", { value: !0 }),
    (Be._makeParamStoreGetter = void 0));
  const e = A(),
    r = { disableExposureLog: !0 };
  function s(u) {
    return u == null || u.disableExposureLog === !1;
  }
  function a(u, f) {
    return f != null && !(0, e._isTypeMatch)(u, f);
  }
  function n(u, f) {
    return u.value;
  }
  function o(u, f, h) {
    return u.getFeatureGate(f.gate_name, s(h) ? void 0 : r).value ? f.pass_value : f.fail_value;
  }
  function t(u, f, h, d) {
    const _ = u.getDynamicConfig(f.config_name, s(d) ? void 0 : r).get(f.param_name);
    return a(_, h) ? h : _;
  }
  function c(u, f, h, d) {
    const _ = u.getExperiment(f.experiment_name, s(d) ? void 0 : r).get(f.param_name);
    return a(_, h) ? h : _;
  }
  function l(u, f, h, d) {
    const _ = u.getLayer(f.layer_name, s(d) ? void 0 : r).get(f.param_name);
    return a(_, h) ? h : _;
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
          return o(u, _, h);
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
  return ((Be._makeParamStoreGetter = i), Be);
}
var U = {},
  nn;
function bo() {
  if (nn) return U;
  nn = 1;
  var e =
    (U && U.__awaiter) ||
    function (n, o, t, c) {
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
        d((c = c.apply(n, o || [])).next());
      });
    };
  (Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.StatsigEvaluationsDataAdapter = void 0));
  const r = A(),
    s = ei();
  let a = class extends r.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(o, t, c) {
      (super.attach(o, t, c),
        c !== null && c instanceof s.default
          ? (this._network = c)
          : (this._network = new s.default(t ?? {})));
    }
    getDataAsync(o, t, c) {
      return this._getDataAsyncImpl(o, (0, r._normalizeUser)(t, this._options), c);
    }
    prefetchData(o, t) {
      return this._prefetchDataImpl(o, t);
    }
    setData(o) {
      const t = (0, r._typedJsonParse)(o, "has_updates", "data");
      t && "user" in t
        ? super.setData(o, t.user)
        : r.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(o, t) {
      super.setData(o, t);
    }
    _fetchFromNetwork(o, t, c, l) {
      return e(this, void 0, void 0, function* () {
        var i;
        const u = yield (i = this._network) === null || i === void 0
          ? void 0
          : i.fetchEvaluations(this._getSdkKey(), o, c?.priority, t, l);
        return u ?? null;
      });
    }
    _getCacheKey(o) {
      var t;
      const c = (0, r._getStorageKey)(
        this._getSdkKey(),
        o,
        (t = this._options) === null || t === void 0 ? void 0 : t.customUserCacheKeyFunc,
      );
      return `${r.DataAdapterCachePrefix}.${this._cacheSuffix}.${c}`;
    }
    _isCachedResultValidFor204(o, t) {
      return o.fullUserHash != null && o.fullUserHash === (0, r._getFullUserHash)(t);
    }
  };
  return ((U.StatsigEvaluationsDataAdapter = a), U);
}
var on;
function wo() {
  if (on) return N;
  on = 1;
  var e =
    (N && N.__awaiter) ||
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
  Object.defineProperty(N, "__esModule", { value: !0 });
  const r = A(),
    s = po(),
    a = ei(),
    n = mo(),
    o = bo();
  let t = class St extends r.StatsigClientBase {
    static instance(l) {
      const i = (0, r._getStatsigGlobal)().instance(l);
      return i instanceof St
        ? i
        : (r.Log.warn(
            (0, r._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new St(l ?? "", {}));
    }
    constructor(l, i, u = null) {
      var f, h;
      r.SDKType._setClientType(l, "javascript-client");
      const d = new a.default(u, (_) => {
        this.$emt(_);
      });
      (super(
        l,
        (f = u?.dataAdapter) !== null && f !== void 0 ? f : new o.StatsigEvaluationsDataAdapter(),
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
        (this._store = new s.default(l)),
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
  return ((N.default = t), N);
}
var an;
function Eo() {
  return (
    an ||
      ((an = 1),
      (function (e) {
        var r =
            (x && x.__createBinding) ||
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
          s =
            (x && x.__exportStar) ||
            function (t, c) {
              for (var l in t)
                l !== "default" && !Object.prototype.hasOwnProperty.call(c, l) && r(c, t, l);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const a = A(),
          n = wo();
        ((e.StatsigClient = n.default), s(A(), e));
        const o = Object.assign((0, a._getStatsigGlobal)(), { StatsigClient: n.default });
        e.default = o;
      })(x)),
    x
  );
}
var ke = {},
  xe = {},
  sn;
function Oo() {
  if (sn) return xe;
  ((sn = 1),
    Object.defineProperty(xe, "__esModule", { value: !0 }),
    (xe.initFeatureFlags = void 0));
  const e = O(),
    r = R(),
    s = Je(),
    a = 500,
    n = 1e3 * 25,
    o = (0, e.getCallBridge)(),
    t = (l) => {
      if (!l || !l.user)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(l).some((i) => typeof i == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (l) => (t(l), o("initFeatureFlags", { user: l.user }));
  return (
    (xe.initFeatureFlags = (0, s.withRateLimiter)(
      c,
      a,
      n,
      `Feature flags initialisation calls are rate limited at ${a}req/${n / 1e3}s`,
    )),
    xe
  );
}
var un;
function Ro() {
  if (un) return ke;
  ((un = 1),
    Object.defineProperty(ke, "__esModule", { value: !0 }),
    (ke.ForgeDataAdapter = void 0));
  const e = Oo();
  class r {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(a, n, o) {
      var t;
      if (a) return a;
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
    getDataSync(a) {
      return this.cache;
    }
    async attach(a, n, o) {
      this.options = n;
    }
    async prefetchData() {}
    async setData(a) {}
    async setDataLegacy(a) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((ke.ForgeDataAdapter = r), ke);
}
var Ot = {},
  ln;
function ti() {
  return (
    ln ||
      ((ln = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = e.ExtensionEnvironment = void 0),
          (function (s) {
            ((s.DEVELOPMENT = "DEVELOPMENT"),
              (s.STAGING = "STAGING"),
              (s.PRODUCTION = "PRODUCTION"));
          })(e.ExtensionEnvironment || (e.ExtensionEnvironment = {})));
        var r;
        ((function (s) {
          s.USER_ACCESS = "USER_ACCESS";
        })(r || (r = {})),
          (function (s) {
            s.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(Ot)),
    Ot
  );
}
var Ue = {},
  cn;
function Po() {
  if (cn) return Ue;
  ((cn = 1),
    Object.defineProperty(Ue, "__esModule", { value: !0 }),
    (Ue.trackFeatureFlagEvent = void 0));
  const e = O(),
    r = R(),
    s = ti(),
    a = Je(),
    n = 500,
    o = 1e3 * 25,
    t = (0, e.getCallBridge)(),
    c = (i) => {
      if (!i || !i.type || !i.properties)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(i.type.toUpperCase() in s.FeatureFlagEventType))
        throw new r.BridgeAPIError("Event type is not supported");
      if (Object.values(i).some((u) => typeof u == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    l = (i) => (c(i), t("trackFeatureFlagEvent", i));
  return (
    (Ue.trackFeatureFlagEvent = (0, a.withRateLimiter)(
      l,
      n,
      o,
      `Feature flags calls are rate limited at ${n}req/${o / 1e3}s`,
    )),
    Ue
  );
}
var dn;
function So() {
  if (dn) return Fe;
  ((dn = 1),
    Object.defineProperty(Fe, "__esModule", { value: !0 }),
    (Fe.ForgeFeatureFlags = void 0));
  const e = Eo(),
    r = Ro(),
    s = ti(),
    a = Po();
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
        type: s.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: t,
          success: c,
        },
      };
      (0, a.trackFeatureFlagEvent)(l);
    }
  }
  return ((Fe.ForgeFeatureFlags = n), Fe);
}
var fn;
function Io() {
  return (
    fn ||
      ((fn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var r = So();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.ForgeFeatureFlags;
          },
        });
      })(Et)),
    Et
  );
}
var _n;
function jo() {
  return (
    _n ||
      ((_n = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = P;
        var s = di();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return s.NavigationTarget;
          },
        }),
          r.__exportStar(Le(), e),
          r.__exportStar(hi(), e),
          r.__exportStar(jt(), e),
          r.__exportStar(Ji(), e),
          r.__exportStar(Qi(), e),
          r.__exportStar(Yi(), e),
          r.__exportStar($i(), e),
          r.__exportStar(eo(), e),
          r.__exportStar(no(), e),
          r.__exportStar(ao(), e),
          (e.i18n = r.__importStar(so())),
          r.__exportStar(lo(), e),
          r.__exportStar(go(), e),
          r.__exportStar(Io(), e));
      })(Ze)),
    Ze
  );
}
var Ve = jo();
function qo() {
  const [e, r] = F.useState(""),
    [s, a] = F.useState(""),
    [n, o] = F.useState(""),
    [t, c] = F.useState(!1),
    [l, i] = F.useState(!1),
    [u, f] = F.useState(!1),
    [h, d] = F.useState([]),
    p = (b, E, I) => {
      d((D) => [{ id: Date.now(), query: b, result: E, timestamp: new Date(), type: I }, ...D]);
    },
    _ = async () => {
      try {
        (o(""), c(!0));
        const b = await Ve.invoke("execute", { query: e });
        (a(b), p(e, b, "SQL"));
      } catch (b) {
        (o(b instanceof Error ? b.message : "An error occurred"), a(""));
      } finally {
        c(!1);
      }
    },
    v = async () => {
      try {
        (o(""), i(!0));
        const b = await Ve.invoke("executeDDL", { query: e });
        (a(b), p(e, b, "DDL"));
      } catch (b) {
        (o(b instanceof Error ? b.message : "An error occurred"), a(""));
      } finally {
        i(!1);
      }
    },
    g = async () => {
      try {
        (o(""), f(!0));
        const b = await Ve.invoke("executeCommand", { command: e });
        (a(b), p(e, b, "COMMAND"));
      } catch (b) {
        (o(b instanceof Error ? b.message : "An error occurred"), a(""));
      } finally {
        f(!1);
      }
    },
    y = (b) =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1,
      }).format(b),
    m = (b) => {
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
  return w.jsxs("div", {
    style: { padding: "20px", maxWidth: "800px", margin: "0 auto" },
    children: [
      w.jsx("h1", { children: "SQL Query Executor" }),
      w.jsxs("div", {
        style: { marginBottom: "20px" },
        children: [
          w.jsx("textarea", {
            value: e,
            onChange: (b) => r(b.target.value),
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
          w.jsxs("div", {
            style: { display: "flex", gap: "10px" },
            children: [
              w.jsx("button", {
                onClick: _,
                disabled: t || l || u,
                style: {
                  padding: "10px 20px",
                  backgroundColor: t ? "#0052CC80" : "#0052CC",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: t ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: t
                  ? w.jsxs(w.Fragment, {
                      children: [
                        w.jsx("div", {
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
              w.jsx("button", {
                onClick: v,
                disabled: t || l || u,
                style: {
                  padding: "10px 20px",
                  backgroundColor: l ? "#36B37E80" : "#36B37E",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: l ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: l
                  ? w.jsxs(w.Fragment, {
                      children: [
                        w.jsx("div", {
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
              w.jsx("button", {
                onClick: g,
                disabled: t || l || u,
                style: {
                  padding: "10px 20px",
                  backgroundColor: u ? "#FF563080" : "#FF5630",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: u ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: u
                  ? w.jsxs(w.Fragment, {
                      children: [
                        w.jsx("div", {
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
      n &&
        w.jsx("div", {
          style: {
            padding: "10px",
            backgroundColor: "#FFEBE6",
            border: "1px solid #DE350B",
            borderRadius: "3px",
            marginBottom: "20px",
            color: "#DE350B",
          },
          children: n,
        }),
      s &&
        w.jsxs("div", {
          children: [
            w.jsx("h3", { children: "Result:" }),
            w.jsx("pre", {
              style: {
                backgroundColor: "#F4F5F7",
                padding: "15px",
                borderRadius: "3px",
                overflow: "auto",
                maxHeight: "400px",
              },
              children: s,
            }),
          ],
        }),
      h.length > 0 &&
        w.jsxs("div", {
          style: { marginTop: "30px" },
          children: [
            w.jsx("h2", { children: "Query History" }),
            w.jsx("div", {
              style: { display: "flex", flexDirection: "column", gap: "20px" },
              children: h.map((b) =>
                w.jsxs(
                  "div",
                  {
                    style: { border: "1px solid #DFE1E6", borderRadius: "3px", overflow: "hidden" },
                    children: [
                      w.jsxs("div", {
                        style: {
                          padding: "10px",
                          backgroundColor: m(b.type),
                          color: "white",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                        children: [
                          w.jsxs("span", {
                            style: { fontWeight: "bold" },
                            children: [b.type, " Query"],
                          }),
                          w.jsx("span", { children: y(b.timestamp) }),
                        ],
                      }),
                      w.jsxs("div", {
                        style: { padding: "15px" },
                        children: [
                          w.jsxs("div", {
                            style: { marginBottom: "10px" },
                            children: [
                              w.jsx("h4", { style: { margin: "0 0 5px 0" }, children: "Query:" }),
                              w.jsx("pre", {
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
                          w.jsxs("div", {
                            children: [
                              w.jsx("h4", { style: { margin: "0 0 5px 0" }, children: "Result:" }),
                              w.jsx("pre", {
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
      w.jsx("style", {
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
const Co = document.getElementById("root"),
  Ao = ri.createRoot(Co),
  vn = () => {
    Ao.render(w.jsx(qo, {}));
  };
Ve.view.theme
  .enable()
  .then(() => {
    vn();
  })
  .catch((e) => {
    (console.error(e.message), vn());
  });
