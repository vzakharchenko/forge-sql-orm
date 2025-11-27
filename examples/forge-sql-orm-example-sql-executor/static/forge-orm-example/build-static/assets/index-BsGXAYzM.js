import { r as dn, c as Zn } from "./react-dom-vendor-BOEB6BZs.js";
import { g as $n, r as A } from "./client-core-vendor-D3kwrIkk.js";
import { r as ei } from "./lodash-vendor-DXG1mS21.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) a(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const t of o.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && a(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(i) {
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
  function a(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = s(i);
    fetch(i.href, o);
  }
})();
var Xe = { exports: {} },
  z = {};
var It;
function ti() {
  if (It) return z;
  It = 1;
  var e = dn(),
    r = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(l, c, n) {
    var u,
      f = {},
      h = null,
      d = null;
    (n !== void 0 && (h = "" + n),
      c.key !== void 0 && (h = "" + c.key),
      c.ref !== void 0 && (d = c.ref));
    for (u in c) a.call(c, u) && !o.hasOwnProperty(u) && (f[u] = c[u]);
    if (l && l.defaultProps) for (u in ((c = l.defaultProps), c)) f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: r, type: l, key: h, ref: d, props: f, _owner: i.current };
  }
  return ((z.Fragment = s), (z.jsx = t), (z.jsxs = t), z);
}
var jt;
function ri() {
  return (jt || ((jt = 1), (Xe.exports = ti())), Xe.exports);
}
var w = ri(),
  F = dn(),
  Ye = {},
  Et = function (e, r) {
    return (
      (Et =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (s, a) {
            s.__proto__ = a;
          }) ||
        function (s, a) {
          for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (s[i] = a[i]);
        }),
      Et(e, r)
    );
  };
function fn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Et(e, r);
  function s() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((s.prototype = r.prototype), new s());
}
var Ve = function () {
  return (
    (Ve =
      Object.assign ||
      function (r) {
        for (var s, a = 1, i = arguments.length; a < i; a++) {
          s = arguments[a];
          for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (r[o] = s[o]);
        }
        return r;
      }),
    Ve.apply(this, arguments)
  );
};
function _n(e, r) {
  var s = {};
  for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (s[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, a = Object.getOwnPropertySymbols(e); i < a.length; i++)
      r.indexOf(a[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[i]) &&
        (s[a[i]] = e[a[i]]);
  return s;
}
function vn(e, r, s, a) {
  var i = arguments.length,
    o = i < 3 ? r : a === null ? (a = Object.getOwnPropertyDescriptor(r, s)) : a,
    t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, r, s, a);
  else
    for (var l = e.length - 1; l >= 0; l--)
      (t = e[l]) && (o = (i < 3 ? t(o) : i > 3 ? t(r, s, o) : t(r, s)) || o);
  return (i > 3 && o && Object.defineProperty(r, s, o), o);
}
function hn(e, r) {
  return function (s, a) {
    r(s, a, e);
  };
}
function gn(e, r, s, a, i, o) {
  function t(g) {
    if (g !== void 0 && typeof g != "function") throw new TypeError("Function expected");
    return g;
  }
  for (
    var l = a.kind,
      c = l === "getter" ? "get" : l === "setter" ? "set" : "value",
      n = !r && e ? (a.static ? e : e.prototype) : null,
      u = r || (n ? Object.getOwnPropertyDescriptor(n, a.name) : {}),
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
    var v = (0, s[d])(l === "accessor" ? { get: u.get, set: u.set } : u[c], p);
    if (l === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      ((f = t(v.get)) && (u.get = f),
        (f = t(v.set)) && (u.set = f),
        (f = t(v.init)) && i.unshift(f));
    } else (f = t(v)) && (l === "field" ? i.unshift(f) : (u[c] = f));
  }
  (n && Object.defineProperty(n, a.name, u), (h = !0));
}
function pn(e, r, s) {
  for (var a = arguments.length > 2, i = 0; i < r.length; i++)
    s = a ? r[i].call(e, s) : r[i].call(e);
  return a ? s : void 0;
}
function yn(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function mn(e, r, s) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: s ? "".concat(s, " ", r) : r })
  );
}
function bn(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function wn(e, r, s, a) {
  function i(o) {
    return o instanceof s
      ? o
      : new s(function (t) {
          t(o);
        });
  }
  return new (s || (s = Promise))(function (o, t) {
    function l(u) {
      try {
        n(a.next(u));
      } catch (f) {
        t(f);
      }
    }
    function c(u) {
      try {
        n(a.throw(u));
      } catch (f) {
        t(f);
      }
    }
    function n(u) {
      u.done ? o(u.value) : i(u.value).then(l, c);
    }
    n((a = a.apply(e, r || [])).next());
  });
}
function En(e, r) {
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
    i,
    o,
    t = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (t.next = l(0)),
    (t.throw = l(1)),
    (t.return = l(2)),
    typeof Symbol == "function" &&
      (t[Symbol.iterator] = function () {
        return this;
      }),
    t
  );
  function l(n) {
    return function (u) {
      return c([n, u]);
    };
  }
  function c(n) {
    if (a) throw new TypeError("Generator is already executing.");
    for (; t && ((t = 0), n[0] && (s = 0)), s; )
      try {
        if (
          ((a = 1),
          i &&
            (o =
              n[0] & 2 ? i.return : n[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) &&
            !(o = o.call(i, n[1])).done)
        )
          return o;
        switch (((i = 0), o && (n = [n[0] & 2, o.value]), n[0])) {
          case 0:
          case 1:
            o = n;
            break;
          case 4:
            return (s.label++, { value: n[1], done: !1 });
          case 5:
            (s.label++, (i = n[1]), (n = [0]));
            continue;
          case 7:
            ((n = s.ops.pop()), s.trys.pop());
            continue;
          default:
            if (
              ((o = s.trys), !(o = o.length > 0 && o[o.length - 1]) && (n[0] === 6 || n[0] === 2))
            ) {
              s = 0;
              continue;
            }
            if (n[0] === 3 && (!o || (n[1] > o[0] && n[1] < o[3]))) {
              s.label = n[1];
              break;
            }
            if (n[0] === 6 && s.label < o[1]) {
              ((s.label = o[1]), (o = n));
              break;
            }
            if (o && s.label < o[2]) {
              ((s.label = o[2]), s.ops.push(n));
              break;
            }
            (o[2] && s.ops.pop(), s.trys.pop());
            continue;
        }
        n = r.call(e, s);
      } catch (u) {
        ((n = [6, u]), (i = 0));
      } finally {
        a = o = 0;
      }
    if (n[0] & 5) throw n[1];
    return { value: n[0] ? n[1] : void 0, done: !0 };
  }
}
var He = Object.create
  ? function (e, r, s, a) {
      a === void 0 && (a = s);
      var i = Object.getOwnPropertyDescriptor(r, s);
      ((!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) &&
        (i = {
          enumerable: !0,
          get: function () {
            return r[s];
          },
        }),
        Object.defineProperty(e, a, i));
    }
  : function (e, r, s, a) {
      (a === void 0 && (a = s), (e[a] = r[s]));
    };
function On(e, r) {
  for (var s in e) s !== "default" && !Object.prototype.hasOwnProperty.call(r, s) && He(r, e, s);
}
function ze(e) {
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
function Pt(e, r) {
  var s = typeof Symbol == "function" && e[Symbol.iterator];
  if (!s) return e;
  var a = s.call(e),
    i,
    o = [],
    t;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = a.next()).done; ) o.push(i.value);
  } catch (l) {
    t = { error: l };
  } finally {
    try {
      i && !i.done && (s = a.return) && s.call(a);
    } finally {
      if (t) throw t.error;
    }
  }
  return o;
}
function Rn() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(Pt(arguments[r]));
  return e;
}
function Pn() {
  for (var e = 0, r = 0, s = arguments.length; r < s; r++) e += arguments[r].length;
  for (var a = Array(e), i = 0, r = 0; r < s; r++)
    for (var o = arguments[r], t = 0, l = o.length; t < l; t++, i++) a[i] = o[t];
  return a;
}
function Sn(e, r, s) {
  if (s || arguments.length === 2)
    for (var a = 0, i = r.length, o; a < i; a++)
      (o || !(a in r)) && (o || (o = Array.prototype.slice.call(r, 0, a)), (o[a] = r[a]));
  return e.concat(o || Array.prototype.slice.call(r));
}
function V(e) {
  return this instanceof V ? ((this.v = e), this) : new V(e);
}
function In(e, r, s) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var a = s.apply(e, r || []),
    i,
    o = [];
  return (
    (i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    l("next"),
    l("throw"),
    l("return", t),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function t(d) {
    return function (p) {
      return Promise.resolve(p).then(d, f);
    };
  }
  function l(d, p) {
    a[d] &&
      ((i[d] = function (_) {
        return new Promise(function (v, g) {
          o.push([d, _, v, g]) > 1 || c(d, _);
        });
      }),
      p && (i[d] = p(i[d])));
  }
  function c(d, p) {
    try {
      n(a[d](p));
    } catch (_) {
      h(o[0][3], _);
    }
  }
  function n(d) {
    d.value instanceof V ? Promise.resolve(d.value.v).then(u, f) : h(o[0][2], d);
  }
  function u(d) {
    c("next", d);
  }
  function f(d) {
    c("throw", d);
  }
  function h(d, p) {
    (d(p), o.shift(), o.length && c(o[0][0], o[0][1]));
  }
}
function jn(e) {
  var r, s;
  return (
    (r = {}),
    a("next"),
    a("throw", function (i) {
      throw i;
    }),
    a("return"),
    (r[Symbol.iterator] = function () {
      return this;
    }),
    r
  );
  function a(i, o) {
    r[i] = e[i]
      ? function (t) {
          return (s = !s) ? { value: V(e[i](t)), done: !1 } : o ? o(t) : t;
        }
      : o;
  }
}
function qn(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    s;
  return r
    ? r.call(e)
    : ((e = typeof ze == "function" ? ze(e) : e[Symbol.iterator]()),
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
        return new Promise(function (l, c) {
          ((t = e[o](t)), i(l, c, t.done, t.value));
        });
      };
  }
  function i(o, t, l, c) {
    Promise.resolve(c).then(function (n) {
      o({ value: n, done: l });
    }, t);
  }
}
function Cn(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var ni = Object.create
    ? function (e, r) {
        Object.defineProperty(e, "default", { enumerable: !0, value: r });
      }
    : function (e, r) {
        e.default = r;
      },
  Ot = function (e) {
    return (
      (Ot =
        Object.getOwnPropertyNames ||
        function (r) {
          var s = [];
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (s[s.length] = a);
          return s;
        }),
      Ot(e)
    );
  };
function An(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var s = Ot(e), a = 0; a < s.length; a++) s[a] !== "default" && He(r, e, s[a]);
  return (ni(r, e), r);
}
function Mn(e) {
  return e && e.__esModule ? e : { default: e };
}
function Dn(e, r, s, a) {
  if (s === "a" && !a) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !a : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return s === "m" ? a : s === "a" ? a.call(e) : a ? a.value : r.get(e);
}
function Fn(e, r, s, a, i) {
  if (a === "m") throw new TypeError("Private method is not writable");
  if (a === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !i : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (a === "a" ? i.call(e, s) : i ? (i.value = s) : r.set(e, s), s);
}
function Tn(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function Bn(e, r, s) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var a, i;
    if (s) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      a = r[Symbol.asyncDispose];
    }
    if (a === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((a = r[Symbol.dispose]), s && (i = a));
    }
    if (typeof a != "function") throw new TypeError("Object not disposable.");
    (i &&
      (a = function () {
        try {
          i.call(this);
        } catch (o) {
          return Promise.reject(o);
        }
      }),
      e.stack.push({ value: r, dispose: a, async: s }));
  } else s && e.stack.push({ async: !0 });
  return r;
}
var ii =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, s) {
        var a = new Error(s);
        return ((a.name = "SuppressedError"), (a.error = e), (a.suppressed = r), a);
      };
function kn(e) {
  function r(o) {
    ((e.error = e.hasError ? new ii(o, e.error, "An error was suppressed during disposal.") : o),
      (e.hasError = !0));
  }
  var s,
    a = 0;
  function i() {
    for (; (s = e.stack.pop()); )
      try {
        if (!s.async && a === 1) return ((a = 0), e.stack.push(s), Promise.resolve().then(i));
        if (s.dispose) {
          var o = s.dispose.call(s.value);
          if (s.async)
            return (
              (a |= 2),
              Promise.resolve(o).then(i, function (t) {
                return (r(t), i());
              })
            );
        } else a |= 1;
      } catch (t) {
        r(t);
      }
    if (a === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return i();
}
function xn(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (s, a, i, o, t) {
        return a
          ? r
            ? ".jsx"
            : ".js"
          : i && (!o || !t)
            ? s
            : i + o + "." + t.toLowerCase() + "js";
      })
    : e;
}
const oi = {
    __extends: fn,
    __assign: Ve,
    __rest: _n,
    __decorate: vn,
    __param: hn,
    __esDecorate: gn,
    __runInitializers: pn,
    __propKey: yn,
    __setFunctionName: mn,
    __metadata: bn,
    __awaiter: wn,
    __generator: En,
    __createBinding: He,
    __exportStar: On,
    __values: ze,
    __read: Pt,
    __spread: Rn,
    __spreadArrays: Pn,
    __spreadArray: Sn,
    __await: V,
    __asyncGenerator: In,
    __asyncDelegator: jn,
    __asyncValues: qn,
    __makeTemplateObject: Cn,
    __importStar: An,
    __importDefault: Mn,
    __classPrivateFieldGet: Dn,
    __classPrivateFieldSet: Fn,
    __classPrivateFieldIn: Tn,
    __addDisposableResource: Bn,
    __disposeResources: kn,
    __rewriteRelativeImportExtension: xn,
  },
  ai = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Bn,
        get __assign() {
          return Ve;
        },
        __asyncDelegator: jn,
        __asyncGenerator: In,
        __asyncValues: qn,
        __await: V,
        __awaiter: wn,
        __classPrivateFieldGet: Dn,
        __classPrivateFieldIn: Tn,
        __classPrivateFieldSet: Fn,
        __createBinding: He,
        __decorate: vn,
        __disposeResources: kn,
        __esDecorate: gn,
        __exportStar: On,
        __extends: fn,
        __generator: En,
        __importDefault: Mn,
        __importStar: An,
        __makeTemplateObject: Cn,
        __metadata: bn,
        __param: hn,
        __propKey: yn,
        __read: Pt,
        __rest: _n,
        __rewriteRelativeImportExtension: xn,
        __runInitializers: pn,
        __setFunctionName: mn,
        __spread: Rn,
        __spreadArray: Sn,
        __spreadArrays: Pn,
        __values: ze,
        default: oi,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  S = $n(ai);
var H = {},
  qt;
function si() {
  return (
    qt ||
      ((qt = 1),
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
var Ze = {},
  $e = {},
  K = {},
  J = {},
  Ct;
function R() {
  if (Ct) return J;
  ((Ct = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.BridgeAPIError = void 0));
  class e extends Error {}
  return ((J.BridgeAPIError = e), J);
}
var At;
function O() {
  if (At) return K;
  ((At = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.getCallBridge = void 0));
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
  Mt;
function Ke() {
  if (Mt) return W;
  ((Mt = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.withRateLimiter = void 0));
  const e = R(),
    r = (s, a, i, o) => {
      let t = Date.now(),
        l = 0;
      return async (...c) => {
        const n = Date.now();
        if ((n - t > i && ((t = n), (l = 0)), l >= a))
          throw new e.BridgeAPIError(o || "Too many invocations.");
        return ((l = l + 1), s(...c));
      };
    };
  return ((W.withRateLimiter = r), W);
}
var Dt;
function ui() {
  return (
    Dt ||
      ((Dt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = O(),
          s = R(),
          a = Ke(),
          i = (0, r.getCallBridge)(),
          o = (c) => {
            if (c && Object.values(c).some((n) => typeof n == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (c, n) => {
            if (typeof c != "string") throw new s.BridgeAPIError("functionKey must be a string!");
            return (o(n), i("invoke", { functionKey: c, payload: n }));
          };
        e.invoke = (0, a.withRateLimiter)(
          t,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function l() {
          return e.invoke;
        }
        e.makeInvoke = l;
      })($e)),
    $e
  );
}
var Ft;
function Ue() {
  return (
    Ft ||
      ((Ft = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(ui(), e));
      })(Ze)),
    Ze
  );
}
var et = {},
  Q = {},
  tt = {},
  Tt;
function Un() {
  return (
    Tt ||
      ((Tt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = O(),
          s = R(),
          a = Ke(),
          i = 500,
          o = 25,
          t = 1e3 * o;
        (function (f) {
          ((f.REMOTE = "Remote"), (f.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const l = (0, r.getCallBridge)(),
          c = (f) => {
            if (f && Object.values(f).some((h) => typeof h == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          n = (f) => async (h) => {
            c(h);
            const d = { ...h, invokeType: `ui-${f.toLowerCase()}-fetch` },
              p = await l("invoke", d),
              { success: _, payload: v, error: g } = p ?? {},
              y = { ...(_ ? v : g) };
            if (y && y.headers)
              for (const m in y.headers)
                Array.isArray(y.headers[m]) && (y.headers[m] = y.headers[m].join(","));
            return y;
          },
          u = (f) => {
            const h = n(f);
            return (0, a.withRateLimiter)(
              h,
              i,
              t,
              `${f} invocation calls are rate limited at ${i}/${o}s`,
            );
          };
        e._invokeEndpointFn = u;
      })(tt)),
    tt
  );
}
var Bt;
function li() {
  if (Bt) return Q;
  ((Bt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.invokeRemote = void 0));
  const e = Un(),
    r = (s) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(s);
  return ((Q.invokeRemote = r), Q);
}
var X = {},
  kt;
function ci() {
  if (kt) return X;
  ((kt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.invokeService = void 0));
  const e = Un(),
    r = (s) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(s);
  return ((X.invokeService = r), X);
}
var xt;
function di() {
  return (
    xt ||
      ((xt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(li(), e), r.__exportStar(ci(), e));
      })(et)),
    et
  );
}
var rt = {},
  Y = {},
  Z = {},
  Ut;
function fi() {
  if (Ut) return Z;
  ((Ut = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.submit = void 0));
  const e = O(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = async (i) => {
      if ((await s("submit", i)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((Z.submit = a), Z);
}
var $ = {},
  Lt;
function _i() {
  if (Lt) return $;
  ((Lt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.close = void 0));
  const e = O(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = async (i) => {
      try {
        if ((await s("close", i)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return (($.close = a), $);
}
var ee = {},
  Nt;
function vi() {
  if (Nt) return ee;
  ((Nt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.open = void 0));
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
  Gt;
function hi() {
  if (Gt) return te;
  ((Gt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.refresh = void 0));
  const e = O(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = async (i) => {
      if ((await s("refresh", i)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((te.refresh = a), te);
}
var re = {},
  Vt;
function gi() {
  if (Vt) return re;
  ((Vt = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.createHistory = void 0));
  const r = (0, O().getCallBridge)(),
    s = async () => {
      const a = await r("createHistory");
      return (
        a.listen((i) => {
          a.location = i;
        }),
        a
      );
    };
  return ((re.createHistory = s), re);
}
var ne = {},
  nt = {},
  j = {},
  zt;
function Ln() {
  return (
    zt ||
      ((zt = 1),
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
  Ht;
function pi() {
  if (Ht) return T;
  ((Ht = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.TranslationsGetter = T.TranslationGetterError = void 0));
  const e = (a, i) => {
    a.includes(i) || a.push(i);
  };
  class r extends Error {
    constructor(i) {
      (super(i), (this.name = "TranslationGetterError"));
    }
  }
  T.TranslationGetterError = r;
  class s {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(i) {
      this.resourcesAccessor = i;
    }
    async getTranslations(i, o = { fallback: !0 }) {
      const t = await this.getI18nInfoConfig(),
        { fallback: l } = o;
      if (!l) {
        let c;
        return (
          t.locales.includes(i) && (c = await this.getTranslationResource(i)),
          { translations: c ?? null, locale: i }
        );
      }
      for (const c of this.getLocaleLookupOrder(i, t)) {
        const n = await this.getTranslationResource(c);
        if (n) return { translations: n, locale: c };
      }
      return { translations: null, locale: i };
    }
    async getTranslationsByLocaleLookupOrder(i) {
      const o = await this.getI18nInfoConfig(),
        t = this.getLocaleLookupOrder(i, o);
      return await Promise.all(
        t.map(async (l) => {
          const c = await this.getTranslationResource(l);
          return { locale: l, translations: c };
        }),
      );
    }
    reset() {
      ((this.i18nInfoConfig = null), this.translationResources.clear());
    }
    async getTranslationResource(i) {
      let o = this.translationResources.get(i);
      if (!o)
        try {
          ((o = await this.resourcesAccessor.getTranslationResource(i)),
            this.translationResources.set(i, o));
        } catch (t) {
          throw t instanceof r ? t : new r(`Failed to get translation resource for locale: ${i}`);
        }
      return o;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (i) {
          throw i instanceof r ? i : new r("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(i, o) {
      const { locales: t, fallback: l } = o,
        c = [i],
        n = l[i];
      return (
        n && Array.isArray(n) && n.length > 0 && c.push(...n),
        e(c, o.fallback.default),
        c.filter((u) => t.includes(u))
      );
    }
  }
  return ((T.TranslationsGetter = s), T);
}
var ie = {},
  it = {},
  Kt;
function Nn() {
  return (
    Kt ||
      ((Kt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const s = S.__importDefault(ei()),
          a = (o, t, l) => {
            const c = o[l];
            return c ? (0, e.getTranslationValueFromContent)(c, t) : null;
          };
        e.getTranslationValue = a;
        const i = (o, t) => {
          let l = o[t];
          if (!l) {
            const c = t.split(".");
            c.length > 1 && (l = (0, s.default)(o, c, null));
          }
          return typeof l == "string" ? l : null;
        };
        e.getTranslationValueFromContent = i;
      })(it)),
    it
  );
}
var Jt;
function yi() {
  if (Jt) return ie;
  ((Jt = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.Translator = void 0));
  const e = Nn();
  class r {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(a, i) {
      ((this.locale = a), (this.translationsGetter = i));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(a) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let i = this.cache.get(a);
      if (i === void 0) {
        for (const { translations: o } of this.localeLookupOrderedTranslations) {
          const t = (0, e.getTranslationValueFromContent)(o, a);
          if (t !== null) {
            i = t;
            break;
          }
        }
        ((i = i ?? null), this.cache.set(a, i));
      }
      return i;
    }
  }
  return ((ie.Translator = r), ie);
}
var oe = {},
  Wt;
function mi() {
  if (Wt) return oe;
  ((Wt = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.ensureLocale = void 0));
  const e = Ln(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    s = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    a = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (o, t) => {
        const [l] = t.split("-");
        return (o[l] || (o[l] = t), o);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    i = (o) => {
      const t = o.replace("_", "-");
      return r.has(t) ? t : (a[t] ?? s[t] ?? null);
    };
  return ((oe.ensureLocale = i), oe);
}
var ot = {},
  Qt;
function bi() {
  return (
    Qt ||
      ((Qt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (n) => typeof n == "object" && n !== null && !Array.isArray(n),
          s = (n) => typeof n?.i18n == "string",
          a = (n) => n.startsWith("connect-"),
          i = (n) => n.startsWith("core:"),
          o = (n) => {
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
            return f(n, []);
          },
          t = (n) =>
            Object.entries(n).flatMap(([u, f]) =>
              !a(u) && !i(u) && f && Array.isArray(f) && f.length > 0 ? f.map((h) => [h, u]) : [],
            );
        e.getI18nSupportedModuleEntries = t;
        const l = (n) => {
          const u = new Set();
          for (const f of (0, e.getI18nSupportedModuleEntries)(n)) {
            const h = o(f[0]);
            for (const { key: d } of h) u.add(d);
          }
          return u.size > 0 ? Array.from(u) : [];
        };
        e.extractI18nKeysFromModules = l;
        const c = (n) => {
          const u = [];
          for (const f of (0, e.getI18nSupportedModuleEntries)(n)) {
            const h = o(f[0]);
            for (const d of h) u.push({ moduleName: f[1], ...d });
          }
          return u;
        };
        e.extractI18nPropertiesFromModules = c;
      })(ot)),
    ot
  );
}
var at = {},
  Xt;
function wi() {
  return (Xt || ((Xt = 1), Object.defineProperty(at, "__esModule", { value: !0 })), at);
}
var Yt;
function Gn() {
  return (
    Yt ||
      ((Yt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const r = S;
        (r.__exportStar(Ln(), e),
          r.__exportStar(pi(), e),
          r.__exportStar(yi(), e),
          r.__exportStar(mi(), e));
        var s = Nn();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return s.getTranslationValue;
          },
        });
        var a = bi();
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
          r.__exportStar(wi(), e));
      })(nt)),
    nt
  );
}
var Zt;
function Ei() {
  if (Zt) return ne;
  ((Zt = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.getContext = void 0));
  const e = O(),
    r = Gn(),
    s = (0, e.getCallBridge)(),
    a = async () => {
      var i;
      const o = await s("getContext"),
        t = o?.locale;
      return (t && (o.locale = (i = (0, r.ensureLocale)(t)) !== null && i !== void 0 ? i : t), o);
    };
  return ((ne.getContext = a), ne);
}
var ae = {},
  $t;
function Oi() {
  if ($t) return ae;
  (($t = 1),
    Object.defineProperty(ae, "__esModule", { value: !0 }),
    (ae.changeWindowTitle = void 0));
  const e = O(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = async (i) => {
      try {
        await s("changeWindowTitle", i);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((ae.changeWindowTitle = a), ae);
}
var se = {},
  er;
function Ri() {
  if (er) return se;
  ((er = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.theme = void 0));
  const r = (0, O().getCallBridge)();
  return ((se.theme = { enable: () => r("enableTheming") }), se);
}
var ue = {},
  le = {},
  st = {},
  B = {},
  tr;
function Vn() {
  if (tr) return B;
  ((tr = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.blobToBase64 = B.base64ToBlob = void 0));
  const e = (s, a) => {
    if (!s) return null;
    const i = s.includes(";base64") ? s.split(",")[1] : s,
      o = atob(i),
      t = new Array(o.length);
    for (let c = 0; c < o.length; c++) t[c] = o.charCodeAt(c);
    const l = new Uint8Array(t);
    return new Blob([l], { type: a });
  };
  B.base64ToBlob = e;
  const r = (s) =>
    new Promise((a, i) => {
      const o = new FileReader();
      ((o.onloadend = () => {
        a(o.result);
      }),
        (o.onerror = i),
        o.readAsDataURL(s));
    });
  return ((B.blobToBase64 = r), B);
}
var rr;
function Pi() {
  return (
    rr ||
      ((rr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const r = Vn(),
          s = (n) => {
            if (
              typeof n != "object" ||
              n === null ||
              Object.prototype.toString.call(n) !== "[object Object]"
            )
              return !1;
            const u = Object.getPrototypeOf(n);
            if (u === null) return !0;
            const f = Object.prototype.hasOwnProperty.call(u, "constructor") && u.constructor;
            return (
              typeof f == "function" &&
              f instanceof f &&
              Function.prototype.call(f) === Function.prototype.call(n)
            );
          },
          a = async (n) => ({ data: await (0, r.blobToBase64)(n), type: n.type }),
          i = (n) => (0, r.base64ToBlob)(n.data, n.type),
          o = async (n) => {
            if (n instanceof Blob) return { ...(await a(n)), __isBlobData: !0 };
            if (Array.isArray(n))
              return Promise.all(n.map((u) => (0, e.serialiseBlobsInPayload)(u)));
            if (n && s(n)) {
              const u = await Promise.all(
                Object.entries(n).map(async ([f, h]) => [
                  f,
                  await (0, e.serialiseBlobsInPayload)(h),
                ]),
              );
              return Object.fromEntries(u);
            }
            return n;
          };
        e.serialiseBlobsInPayload = o;
        const t = (n) => {
          if (n && s(n) && "__isBlobData" in n) {
            const u = n;
            return i({ data: u.data, type: u.type });
          }
          if (Array.isArray(n)) return n.map((u) => (0, e.deserialiseBlobsInPayload)(u));
          if (n && s(n)) {
            const u = {};
            for (const [f, h] of Object.entries(n)) u[f] = (0, e.deserialiseBlobsInPayload)(h);
            return u;
          }
          return n;
        };
        e.deserialiseBlobsInPayload = t;
        const l = (n) =>
          n instanceof Blob
            ? !0
            : Array.isArray(n)
              ? n.some((u) => (0, e.containsBlobs)(u))
              : n && s(n)
                ? Object.values(n).some((u) => (0, e.containsBlobs)(u))
                : !1;
        e.containsBlobs = l;
        const c = (n) =>
          n && s(n) && "__isBlobData" in n
            ? !0
            : Array.isArray(n)
              ? n.some((u) => (0, e.containsSerialisedBlobs)(u))
              : n && s(n)
                ? Object.values(n).some((u) => (0, e.containsSerialisedBlobs)(u))
                : !1;
        e.containsSerialisedBlobs = c;
      })(st)),
    st
  );
}
var nr;
function zn() {
  if (nr) return le;
  ((nr = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.events = void 0));
  const e = O(),
    r = Pi(),
    s = (0, e.getCallBridge)(),
    a = async (o, t) => {
      let l = t;
      return (
        (0, r.containsBlobs)(t) && (l = await (0, r.serialiseBlobsInPayload)(t)),
        s("emit", { event: o, payload: l })
      );
    },
    i = (o, t) =>
      s("on", {
        event: o,
        callback: (c) => {
          let n = c;
          return (
            (0, r.containsSerialisedBlobs)(c) && (n = (0, r.deserialiseBlobsInPayload)(c)),
            t(n)
          );
        },
      });
  return ((le.events = { emit: a, on: i }), le);
}
var ir;
function Si() {
  if (ir) return ue;
  ((ir = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.emitReadyEvent = void 0));
  const e = zn(),
    r = Wn(),
    s = "EXTENSION_READY",
    a = async () => {
      const i = await r.view.getContext();
      await e.events.emit(s, { localId: i.localId });
    };
  return ((ue.emitReadyEvent = a), ue);
}
const Ii = "modulepreload",
  ji = function (e, r) {
    return new URL(e, r).href;
  },
  or = {},
  qi = function (r, s, a) {
    let i = Promise.resolve();
    if (s && s.length > 0) {
      let n = function (u) {
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
        l = document.querySelector("meta[property=csp-nonce]"),
        c = l?.nonce || l?.getAttribute("nonce");
      i = n(
        s.map((u) => {
          if (((u = ji(u, a)), u in or)) return;
          or[u] = !0;
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
            ((d.rel = f ? "stylesheet" : Ii),
            f || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = u),
            c && d.setAttribute("nonce", c),
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
      const l = new Event("vite:preloadError", { cancelable: !0 });
      if (((l.payload = t), window.dispatchEvent(l), !l.defaultPrevented)) throw t;
    }
    return i.then((t) => {
      for (const l of t || []) l.status === "rejected" && o(l.reason);
      return r().catch(o);
    });
  };
var ce = {},
  ut = {},
  de = {},
  Le = {},
  ar;
function Hn() {
  if (ar) return Le;
  ((ar = 1), Object.defineProperty(Le, "__esModule", { value: !0 }), (Le.default = s));
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
  return Le;
}
var L = {},
  fe = {},
  _e = {},
  sr;
function Ci() {
  if (sr) return _e;
  ((sr = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((_e.default = e), _e);
}
var ur;
function Je() {
  if (ur) return fe;
  ((ur = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  var e = r(Ci());
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function s(i) {
    return typeof i == "string" && e.default.test(i);
  }
  var a = s;
  return ((fe.default = a), fe);
}
var lr;
function We() {
  if (lr) return L;
  ((lr = 1),
    Object.defineProperty(L, "__esModule", { value: !0 }),
    (L.default = void 0),
    (L.unsafeStringify = a));
  var e = r(Je());
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }
  const s = [];
  for (let t = 0; t < 256; ++t) s.push((t + 256).toString(16).slice(1));
  function a(t, l = 0) {
    return (
      s[t[l + 0]] +
      s[t[l + 1]] +
      s[t[l + 2]] +
      s[t[l + 3]] +
      "-" +
      s[t[l + 4]] +
      s[t[l + 5]] +
      "-" +
      s[t[l + 6]] +
      s[t[l + 7]] +
      "-" +
      s[t[l + 8]] +
      s[t[l + 9]] +
      "-" +
      s[t[l + 10]] +
      s[t[l + 11]] +
      s[t[l + 12]] +
      s[t[l + 13]] +
      s[t[l + 14]] +
      s[t[l + 15]]
    );
  }
  function i(t, l = 0) {
    const c = a(t, l);
    if (!(0, e.default)(c)) throw TypeError("Stringified UUID is invalid");
    return c;
  }
  var o = i;
  return ((L.default = o), L);
}
var cr;
function Ai() {
  if (cr) return de;
  ((cr = 1), Object.defineProperty(de, "__esModule", { value: !0 }), (de.default = void 0));
  var e = s(Hn()),
    r = We();
  function s(n) {
    return n && n.__esModule ? n : { default: n };
  }
  let a,
    i,
    o = 0,
    t = 0;
  function l(n, u, f) {
    let h = (u && f) || 0;
    const d = u || new Array(16);
    n = n || {};
    let p = n.node || a,
      _ = n.clockseq !== void 0 ? n.clockseq : i;
    if (p == null || _ == null) {
      const E = n.random || (n.rng || e.default)();
      (p == null && (p = a = [E[0] | 1, E[1], E[2], E[3], E[4], E[5]]),
        _ == null && (_ = i = ((E[6] << 8) | E[7]) & 16383));
    }
    let v = n.msecs !== void 0 ? n.msecs : Date.now(),
      g = n.nsecs !== void 0 ? n.nsecs : t + 1;
    const y = v - o + (g - t) / 1e4;
    if (
      (y < 0 && n.clockseq === void 0 && (_ = (_ + 1) & 16383),
      (y < 0 || v > o) && n.nsecs === void 0 && (g = 0),
      g >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((o = v), (t = g), (i = _), (v += 122192928e5));
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
  var c = l;
  return ((de.default = c), de);
}
var ve = {},
  C = {},
  he = {},
  dr;
function Kn() {
  if (dr) return he;
  ((dr = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  var e = r(Je());
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function s(i) {
    if (!(0, e.default)(i)) throw TypeError("Invalid UUID");
    let o;
    const t = new Uint8Array(16);
    return (
      (t[0] = (o = parseInt(i.slice(0, 8), 16)) >>> 24),
      (t[1] = (o >>> 16) & 255),
      (t[2] = (o >>> 8) & 255),
      (t[3] = o & 255),
      (t[4] = (o = parseInt(i.slice(9, 13), 16)) >>> 8),
      (t[5] = o & 255),
      (t[6] = (o = parseInt(i.slice(14, 18), 16)) >>> 8),
      (t[7] = o & 255),
      (t[8] = (o = parseInt(i.slice(19, 23), 16)) >>> 8),
      (t[9] = o & 255),
      (t[10] = ((o = parseInt(i.slice(24, 36), 16)) / 1099511627776) & 255),
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
var fr;
function Jn() {
  if (fr) return C;
  ((fr = 1),
    Object.defineProperty(C, "__esModule", { value: !0 }),
    (C.URL = C.DNS = void 0),
    (C.default = t));
  var e = We(),
    r = s(Kn());
  function s(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function a(l) {
    l = unescape(encodeURIComponent(l));
    const c = [];
    for (let n = 0; n < l.length; ++n) c.push(l.charCodeAt(n));
    return c;
  }
  const i = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  C.DNS = i;
  const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  C.URL = o;
  function t(l, c, n) {
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
        (v = n(v)),
        (v[6] = (v[6] & 15) | c),
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
      u.name = l;
    } catch {}
    return ((u.DNS = i), (u.URL = o), u);
  }
  return C;
}
var ge = {},
  _r;
function Mi() {
  if (_r) return ge;
  ((_r = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  function e(d) {
    if (typeof d == "string") {
      const p = unescape(encodeURIComponent(d));
      d = new Uint8Array(p.length);
      for (let _ = 0; _ < p.length; ++_) d[_] = p.charCodeAt(_);
    }
    return r(a(i(d), d.length * 8));
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
        M = y;
      ((_ = c(_, v, g, y, d[m], 7, -680876936)),
        (y = c(y, _, v, g, d[m + 1], 12, -389564586)),
        (g = c(g, y, _, v, d[m + 2], 17, 606105819)),
        (v = c(v, g, y, _, d[m + 3], 22, -1044525330)),
        (_ = c(_, v, g, y, d[m + 4], 7, -176418897)),
        (y = c(y, _, v, g, d[m + 5], 12, 1200080426)),
        (g = c(g, y, _, v, d[m + 6], 17, -1473231341)),
        (v = c(v, g, y, _, d[m + 7], 22, -45705983)),
        (_ = c(_, v, g, y, d[m + 8], 7, 1770035416)),
        (y = c(y, _, v, g, d[m + 9], 12, -1958414417)),
        (g = c(g, y, _, v, d[m + 10], 17, -42063)),
        (v = c(v, g, y, _, d[m + 11], 22, -1990404162)),
        (_ = c(_, v, g, y, d[m + 12], 7, 1804603682)),
        (y = c(y, _, v, g, d[m + 13], 12, -40341101)),
        (g = c(g, y, _, v, d[m + 14], 17, -1502002290)),
        (v = c(v, g, y, _, d[m + 15], 22, 1236535329)),
        (_ = n(_, v, g, y, d[m + 1], 5, -165796510)),
        (y = n(y, _, v, g, d[m + 6], 9, -1069501632)),
        (g = n(g, y, _, v, d[m + 11], 14, 643717713)),
        (v = n(v, g, y, _, d[m], 20, -373897302)),
        (_ = n(_, v, g, y, d[m + 5], 5, -701558691)),
        (y = n(y, _, v, g, d[m + 10], 9, 38016083)),
        (g = n(g, y, _, v, d[m + 15], 14, -660478335)),
        (v = n(v, g, y, _, d[m + 4], 20, -405537848)),
        (_ = n(_, v, g, y, d[m + 9], 5, 568446438)),
        (y = n(y, _, v, g, d[m + 14], 9, -1019803690)),
        (g = n(g, y, _, v, d[m + 3], 14, -187363961)),
        (v = n(v, g, y, _, d[m + 8], 20, 1163531501)),
        (_ = n(_, v, g, y, d[m + 13], 5, -1444681467)),
        (y = n(y, _, v, g, d[m + 2], 9, -51403784)),
        (g = n(g, y, _, v, d[m + 7], 14, 1735328473)),
        (v = n(v, g, y, _, d[m + 12], 20, -1926607734)),
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
        (y = o(y, M)));
    }
    return [_, v, g, y];
  }
  function i(d) {
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
  function l(d, p, _, v, g, y) {
    return o(t(o(o(p, d), o(v, y)), g), _);
  }
  function c(d, p, _, v, g, y, m) {
    return l((p & _) | (~p & v), d, p, g, y, m);
  }
  function n(d, p, _, v, g, y, m) {
    return l((p & v) | (_ & ~v), d, p, g, y, m);
  }
  function u(d, p, _, v, g, y, m) {
    return l(p ^ _ ^ v, d, p, g, y, m);
  }
  function f(d, p, _, v, g, y, m) {
    return l(_ ^ (p | ~v), d, p, g, y, m);
  }
  var h = e;
  return ((ge.default = h), ge);
}
var vr;
function Di() {
  if (vr) return ve;
  ((vr = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  var e = s(Jn()),
    r = s(Mi());
  function s(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var i = (0, e.default)("v3", 48, r.default);
  return ((ve.default = i), ve);
}
var pe = {},
  ye = {},
  hr;
function Fi() {
  if (hr) return ye;
  ((hr = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((ye.default = r), ye);
}
var gr;
function Ti() {
  if (gr) return pe;
  ((gr = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  var e = a(Fi()),
    r = a(Hn()),
    s = We();
  function a(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function i(t, l, c) {
    if (e.default.randomUUID && !l && !t) return e.default.randomUUID();
    t = t || {};
    const n = t.random || (t.rng || r.default)();
    if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), l)) {
      c = c || 0;
      for (let u = 0; u < 16; ++u) l[c + u] = n[u];
      return l;
    }
    return (0, s.unsafeStringify)(n);
  }
  var o = i;
  return ((pe.default = o), pe);
}
var me = {},
  be = {},
  pr;
function Bi() {
  if (pr) return be;
  ((pr = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.default = void 0));
  function e(i, o, t, l) {
    switch (i) {
      case 0:
        return (o & t) ^ (~o & l);
      case 1:
        return o ^ t ^ l;
      case 2:
        return (o & t) ^ (o & l) ^ (t & l);
      case 3:
        return o ^ t ^ l;
    }
  }
  function r(i, o) {
    return (i << o) | (i >>> (32 - o));
  }
  function s(i) {
    const o = [1518500249, 1859775393, 2400959708, 3395469782],
      t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof i == "string") {
      const u = unescape(encodeURIComponent(i));
      i = [];
      for (let f = 0; f < u.length; ++f) i.push(u.charCodeAt(f));
    } else Array.isArray(i) || (i = Array.prototype.slice.call(i));
    i.push(128);
    const l = i.length / 4 + 2,
      c = Math.ceil(l / 16),
      n = new Array(c);
    for (let u = 0; u < c; ++u) {
      const f = new Uint32Array(16);
      for (let h = 0; h < 16; ++h)
        f[h] =
          (i[u * 64 + h * 4] << 24) |
          (i[u * 64 + h * 4 + 1] << 16) |
          (i[u * 64 + h * 4 + 2] << 8) |
          i[u * 64 + h * 4 + 3];
      n[u] = f;
    }
    ((n[c - 1][14] = ((i.length - 1) * 8) / Math.pow(2, 32)),
      (n[c - 1][14] = Math.floor(n[c - 1][14])),
      (n[c - 1][15] = ((i.length - 1) * 8) & 4294967295));
    for (let u = 0; u < c; ++u) {
      const f = new Uint32Array(80);
      for (let g = 0; g < 16; ++g) f[g] = n[u][g];
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
var yr;
function ki() {
  if (yr) return me;
  ((yr = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.default = void 0));
  var e = s(Jn()),
    r = s(Bi());
  function s(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var i = (0, e.default)("v5", 80, r.default);
  return ((me.default = i), me);
}
var we = {},
  mr;
function xi() {
  if (mr) return we;
  ((mr = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((we.default = e), we);
}
var Ee = {},
  br;
function Ui() {
  if (br) return Ee;
  ((br = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.default = void 0));
  var e = r(Je());
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function s(i) {
    if (!(0, e.default)(i)) throw TypeError("Invalid UUID");
    return parseInt(i.slice(14, 15), 16);
  }
  var a = s;
  return ((Ee.default = a), Ee);
}
var wr;
function Li() {
  return (
    wr ||
      ((wr = 1),
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
              return n.default;
            },
          }),
          Object.defineProperty(e, "stringify", {
            enumerable: !0,
            get: function () {
              return c.default;
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
              return i.default;
            },
          }),
          Object.defineProperty(e, "validate", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(e, "version", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }));
        var r = u(Ai()),
          s = u(Di()),
          a = u(Ti()),
          i = u(ki()),
          o = u(xi()),
          t = u(Ui()),
          l = u(Je()),
          c = u(We()),
          n = u(Kn());
        function u(f) {
          return f && f.__esModule ? f : { default: f };
        }
      })(ut)),
    ut
  );
}
var Er;
function Ni() {
  if (Er) return ce;
  ((Er = 1),
    Object.defineProperty(ce, "__esModule", { value: !0 }),
    (ce.createAdfRendererIframeProps = void 0));
  const e = Li(),
    r = async (s, a) => {
      const { iframeResizer: i } = await qi(
          async () => {
            const { iframeResizer: n } = await import("./index-2D7JALmr.js").then((u) => u.i);
            return { iframeResizer: n };
          },
          [],
          import.meta.url,
        ),
        o = new URL(document.referrer).origin,
        t = `${o}/forge-apps/adf-renderer`,
        l = a || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        c = () => {
          var n, u;
          const f = document.getElementById(l),
            h = {
              type: "adf-document",
              document: (n = s.extension.macro) === null || n === void 0 ? void 0 : n.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: s.localId,
            };
          (i(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (d) => {
                var p;
                (p = d?.iFrameResizer) === null || p === void 0 || p.resize();
              },
            },
            f || "",
          ),
            (u = f?.contentWindow) === null || u === void 0 || u.postMessage(h, o));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: l, src: t, onLoad: c }
      );
    };
  return ((ce.createAdfRendererIframeProps = r), ce);
}
var Or;
function Wn() {
  if (Or) return Y;
  ((Or = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.view = void 0));
  const e = fi(),
    r = _i(),
    s = vi(),
    a = hi(),
    i = gi(),
    o = Ei(),
    t = Oi(),
    l = Ri(),
    c = Si(),
    n = Ni();
  return (
    (Y.view = {
      submit: e.submit,
      close: r.close,
      open: s.open,
      refresh: a.refresh,
      createHistory: i.createHistory,
      getContext: o.getContext,
      theme: l.theme,
      changeWindowTitle: t.changeWindowTitle,
      emitReadyEvent: c.emitReadyEvent,
      createAdfRendererIframeProps: n.createAdfRendererIframeProps,
    }),
    Y
  );
}
var Rr;
function St() {
  return (
    Rr ||
      ((Rr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(Wn(), e));
      })(rt)),
    rt
  );
}
var lt = {},
  Oe = {},
  Pr;
function Gi() {
  if (Pr) return Oe;
  ((Pr = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.router = void 0));
  const r = (0, O().getCallBridge)(),
    s = async (t) => {
      if (!t?.target) throw new Error("target is required for getUrl");
      const l = await r("getUrl", t);
      if (!l) throw new Error("Failed to get URL");
      try {
        return new URL(l);
      } catch (c) {
        throw new Error(`Failed to parse URL: ${l} (${c})`);
      }
    },
    a = (t) => {
      if (typeof t == "string") return r("navigate", { url: t, type: "same-tab" });
      if (!t?.target) throw new Error("target is required for navigation");
      return r("navigate", { ...t, type: "same-tab" });
    },
    i = (t) => {
      if (typeof t == "string") return r("navigate", { url: t, type: "new-tab" });
      if (!t?.target) throw new Error("target is required for navigation");
      return r("navigate", { ...t, type: "new-tab" });
    },
    o = async () => r("reload");
  return ((Oe.router = { getUrl: s, navigate: a, open: i, reload: o }), Oe);
}
var Sr;
function Vi() {
  return (
    Sr ||
      ((Sr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(Gi(), e));
      })(lt)),
    lt
  );
}
var ct = {},
  Re = {},
  Ir;
function zi() {
  if (Ir) return Re;
  ((Ir = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.Modal = void 0));
  const e = O(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = () => {};
  class i {
    constructor(t) {
      var l, c;
      ((this.resource = t?.resource || null),
        (this.onClose = t?.onClose || a),
        (this.size = t?.size || "medium"),
        (this.context = t?.context || {}),
        (this.closeOnEscape = (l = t?.closeOnEscape) !== null && l !== void 0 ? l : !0),
        (this.closeOnOverlayClick =
          (c = t?.closeOnOverlayClick) !== null && c !== void 0 ? c : !0));
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
  return ((Re.Modal = i), Re);
}
var jr;
function Hi() {
  return (
    jr ||
      ((jr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(zi(), e));
      })(ct)),
    ct
  );
}
var P = {},
  k = {},
  qr;
function Ki() {
  if (qr) return k;
  ((qr = 1),
    Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.productFetchApi = k.remoteFetchApi = void 0));
  const e = Vn(),
    r = async (t) => {
      const l = {};
      for (const [c, n] of t.entries())
        if (c === "file") {
          const u = n.name,
            f = n.type;
          ((l.file = await (0, e.blobToBase64)(n)), (l.__fileName = u), (l.__fileType = f));
        } else l[c] = n;
      return JSON.stringify(l);
    },
    s = (t) => {
      if (!t) return t;
      if ("signal" in t) {
        const { signal: l, ...c } = t;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          c
        );
      }
      return t;
    },
    a = async (t) => {
      const l = t?.body instanceof FormData,
        c = l ? await r(t?.body) : t?.body,
        n = new Request("", { body: c, method: t?.method, headers: t?.headers }),
        u = Object.fromEntries(n.headers.entries());
      return {
        body: n.method !== "GET" ? await n.text() : null,
        headers: new Headers(u),
        isMultipartFormData: l,
      };
    },
    i = (t) => {
      const l = async (c, n) => {
        const u = s(n),
          { body: f, headers: h, isMultipartFormData: d } = await a(u),
          p = {
            remoteKey: c,
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
      return { requestRemote: (c, n) => l(c, n) };
    };
  k.remoteFetchApi = i;
  const o = (t) => {
    const l = async (c, n, u) => {
      const f = s(u),
        { body: h, headers: d, isMultipartFormData: p } = await a(f);
      d.has("X-Atlassian-Token") || d.set("X-Atlassian-Token", "no-check");
      const _ = {
          product: c,
          restPath: n,
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
      requestConfluence: (c, n) => l("confluence", c, n),
      requestJira: (c, n) => l("jira", c, n),
      requestBitbucket: (c, n) => l("bitbucket", c, n),
    };
  };
  return ((k.productFetchApi = o), k);
}
var Cr;
function Ji() {
  if (Cr) return P;
  Cr = 1;
  var e;
  (Object.defineProperty(P, "__esModule", { value: !0 }),
    (P.requestRemote = P.requestBitbucket = P.requestJira = P.requestConfluence = void 0));
  const r = O(),
    s = Ki();
  return (
    (e = (0, s.productFetchApi)((0, r.getCallBridge)())),
    (P.requestConfluence = e.requestConfluence),
    (P.requestJira = e.requestJira),
    (P.requestBitbucket = e.requestBitbucket),
    (P.requestRemote = (0, s.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    P
  );
}
var dt = {},
  Pe = {},
  Ar;
function Wi() {
  if (Ar) return Pe;
  ((Ar = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.showFlag = void 0));
  const e = O(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = (i) => {
      var o;
      if (!i.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = s("showFlag", { ...i, type: (o = i.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await t, s("closeFlag", { id: i.id })) };
    };
  return ((Pe.showFlag = a), Pe);
}
var Mr;
function Qi() {
  return (
    Mr ||
      ((Mr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = Wi();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return r.showFlag;
          },
        });
      })(dt)),
    dt
  );
}
var ft = {},
  Dr;
function Xi() {
  return (
    Dr ||
      ((Dr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(zn(), e));
      })(ft)),
    ft
  );
}
var _t = {},
  Se = {},
  Fr;
function Yi() {
  if (Fr) return Se;
  ((Fr = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.realtime = void 0));
  const r = (0, O().getCallBridge)(),
    s = (t, l, c) => r("publishRealtimeChannel", { channelName: t, eventPayload: l, options: c }),
    a = (t, l, c) => r("subscribeRealtimeChannel", { channelName: t, onEvent: l, options: c }),
    i = (t, l, c) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: l, options: c, isGlobal: !0 }),
    o = (t, l, c) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: l, options: c, isGlobal: !0 });
  return ((Se.realtime = { publish: s, subscribe: a, publishGlobal: i, subscribeGlobal: o }), Se);
}
var vt = {},
  Tr;
function Zi() {
  return (
    Tr ||
      ((Tr = 1),
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
      })(vt)),
    vt
  );
}
var Br;
function $i() {
  return (
    Br ||
      ((Br = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var r = Yi();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return r.realtime;
          },
        });
        var s = Zi();
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
      })(_t)),
    _t
  );
}
var ht = {},
  Ie = {},
  gt = {},
  kr;
function eo() {
  return (
    kr ||
      ((kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = O(),
          s = R(),
          a = 30,
          i = (0, r.getCallBridge)();
        e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE =
          "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
        const o = (l) => {
            switch (l.type) {
              case "forge":
                return { agentName: l.agentName, agentKey: l.agentKey, prompt: l.prompt };
              case "atlassian":
                return { agentName: l.agentName, prompt: l.prompt };
              default:
                return { prompt: l.prompt };
            }
          },
          t = async (l) => {
            if (l.type === "forge") {
              if (l.agentName.length > a) throw new Error("rovo agent name too long");
              if (l.agentKey.length > a) throw new Error("rovo agent key too long");
            }
            const c = o(l);
            if ((await i("openRovo", c)) === !1)
              throw new s.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(gt)),
    gt
  );
}
var xr;
function to() {
  if (xr) return Ie;
  ((xr = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.rovo = void 0));
  const e = eo();
  return ((Ie.rovo = { open: e.open }), Ie);
}
var Ur;
function ro() {
  return (
    Ur ||
      ((Ur = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(to(), e));
      })(ht)),
    ht
  );
}
var q = {},
  Lr;
function no() {
  if (Lr) return q;
  ((Lr = 1),
    Object.defineProperty(q, "__esModule", { value: !0 }),
    (q.createTranslationFunction = q.getTranslations = q.resetTranslationsCache = void 0));
  const e = Gn(),
    r = St(),
    s = {
      getI18nInfoConfig: async () => {
        const l = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!l.ok) throw new Error("Failed to get i18n info config: " + l.statusText);
        return (await l.json()).config;
      },
      getTranslationResource: async (l) => {
        const c = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${l}.json`);
        if (!c.ok) throw new Error(`Failed to get translation resource for locale: ${l}`);
        return c.json();
      },
    },
    a = new e.TranslationsGetter(s),
    i = () => {
      a.reset();
    };
  q.resetTranslationsCache = i;
  const o = async (l = null, c = { fallback: !0 }) => {
    let n = l;
    return (n || (n = (await r.view.getContext()).locale), await a.getTranslations(n, c));
  };
  q.getTranslations = o;
  const t = async (l = null) => {
    let c = l;
    c || (c = (await r.view.getContext()).locale);
    const n = new e.Translator(c, a);
    return (
      await n.init(),
      (u, f) => {
        var h, d;
        return (d = (h = n.translate(u)) !== null && h !== void 0 ? h : f) !== null && d !== void 0
          ? d
          : u;
      }
    );
  };
  return ((q.createTranslationFunction = t), q);
}
var pt = {},
  yt = {},
  mt = {},
  je = {},
  qe = {},
  Nr;
function Qn() {
  return (
    Nr ||
      ((Nr = 1),
      Object.defineProperty(qe, "__esModule", { value: !0 }),
      (qe.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (qe.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    qe
  );
}
var Gr;
function Qe() {
  if (Gr) return je;
  ((Gr = 1),
    Object.defineProperty(je, "__esModule", { value: !0 }),
    (je.checkRestrictedEnvironment = void 0));
  const e = R(),
    r = St(),
    s = Qn(),
    a = async () => {
      const { environmentType: i } = await r.view.getContext();
      if (i === "PRODUCTION")
        throw new e.BridgeAPIError(s.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((je.checkRestrictedEnvironment = a), je);
}
var Vr;
function io() {
  return (
    Vr ||
      ((Vr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = Ue(),
          s = R(),
          a = Qe(),
          o = (0, O().getCallBridge)(),
          t = (u, f) => {
            const h = atob(u),
              d = new Array(h.length);
            for (let _ = 0; _ < h.length; _++) d[_] = h.charCodeAt(_);
            const p = new Uint8Array(d);
            return new Blob([p], { type: f || "application/octet-stream" });
          },
          l = async (u) => {
            const f = u.size,
              h = await u.arrayBuffer(),
              d = await crypto.subtle.digest("SHA-256", h),
              p = new Uint8Array(d),
              _ = btoa(String.fromCharCode(...p));
            return { length: f, checksum: _, checksumType: "SHA256" };
          },
          c = async ({ functionKey: u, objects: f }) => {
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
              d = await Promise.all(h.map((y) => l(y))),
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
                  M = v.get(E);
                return M === void 0
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
                            const D = await fetch(y, {
                              method: "PUT",
                              body: I,
                              headers: {
                                "Content-Type": I.type || "application/octet-stream",
                                "Content-Length": I.size.toString(),
                              },
                            });
                            return {
                              success: D.ok,
                              key: b,
                              status: D.status,
                              error: D.ok ? void 0 : `Upload failed with status ${D.status}`,
                            };
                          } catch (D) {
                            return {
                              success: !1,
                              key: b,
                              status: 503,
                              error: D instanceof Error ? D.message : "Upload failed",
                            };
                          }
                        })(),
                        index: M,
                        objectType: I.type,
                        objectSize: I.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: b,
                          error: `Blob not found for checksum ${E}`,
                        }),
                        index: M,
                      };
              })
            );
          };
        e.createUploadPromises = c;
        const n = async ({ functionKey: u, objects: f }) => {
          (await (0, a.checkRestrictedEnvironment)(),
            o("trackObjectStoreAction", { action: "upload" }));
          const h = await (0, e.createUploadPromises)({ functionKey: u, objects: f });
          return await Promise.all(h.map((p) => p.promise));
        };
        e.upload = n;
      })(mt)),
    mt
  );
}
var Ce = {},
  zr;
function oo() {
  if (zr) return Ce;
  ((zr = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.deleteObjects = void 0));
  const e = Ue(),
    r = R(),
    s = Qe(),
    i = (0, O().getCallBridge)(),
    o = async ({ functionKey: t, keys: l }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        i("trackObjectStoreAction", { action: "delete" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to delete objects");
      if (!Array.isArray(l) || l.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      await Promise.all(
        l.map(async (c) => {
          await (0, e.invoke)(t, { key: c });
        }),
      );
    };
  return ((Ce.deleteObjects = o), Ce);
}
var Ae = {},
  Hr;
function ao() {
  if (Hr) return Ae;
  ((Hr = 1), Object.defineProperty(Ae, "__esModule", { value: !0 }), (Ae.download = void 0));
  const e = Ue(),
    r = R(),
    s = Qe(),
    i = (0, O().getCallBridge)(),
    o = async ({ functionKey: t, keys: l }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        i("trackObjectStoreAction", { action: "download" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(l) || l.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      const c = await (0, e.invoke)(t, { keys: l });
      if (!c || typeof c != "object")
        throw new r.BridgeAPIError("Invalid response from functionKey");
      const n = Object.entries(c).map(async ([f, h]) => {
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
      return await Promise.all(n);
    };
  return ((Ae.download = o), Ae);
}
var Me = {},
  Kr;
function so() {
  if (Kr) return Me;
  ((Kr = 1), Object.defineProperty(Me, "__esModule", { value: !0 }), (Me.getMetadata = void 0));
  const e = Ue(),
    r = R(),
    s = Qe(),
    i = (0, O().getCallBridge)(),
    o = async ({ functionKey: t, keys: l }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        i("trackObjectStoreAction", { action: "getMetadata" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError(
          "functionKey is required to filter and generate object metadata",
        );
      if (!Array.isArray(l) || l.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      return await Promise.all(
        l.map(async (n) => {
          const u = await (0, e.invoke)(t, { key: n });
          return !u || typeof u != "object"
            ? { key: n, error: "Invalid response from functionKey" }
            : u;
        }),
      );
    };
  return ((Me.getMetadata = o), Me);
}
var Jr;
function uo() {
  return (
    Jr ||
      ((Jr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const r = io();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return r.createUploadPromises;
          },
        });
        const s = oo(),
          a = ao(),
          i = so();
        e.objectStore = {
          upload: r.upload,
          download: a.download,
          getMetadata: i.getMetadata,
          delete: s.deleteObjects,
        };
      })(yt)),
    yt
  );
}
var Wr;
function lo() {
  return (
    Wr ||
      ((Wr = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(uo(), e), r.__exportStar(Qn(), e));
      })(pt)),
    pt
  );
}
var bt = {},
  De = {},
  x = {},
  N = {},
  Ne = {},
  Qr;
function co() {
  if (Qr) return Ne;
  ((Qr = 1), Object.defineProperty(Ne, "__esModule", { value: !0 }));
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
    setValues(a, i) {
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
            a.source && t.user && this._setWarningState(i, t),
            e.SDKFlags.setFlags(this._sdkKey, (o = t.sdk_flags) !== null && o !== void 0 ? o : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(a) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.feature_gates,
        a,
      );
    }
    getConfig(a) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.dynamic_configs,
        a,
      );
    }
    getLayer(a) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.layer_configs,
        a,
      );
    }
    getParamStore(a) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.param_stores,
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
    _extractBootstrapMetadata(a, i) {
      if (a !== "Bootstrap") return null;
      const o = {};
      return (
        i.user && (o.user = i.user),
        i.sdkInfo && (o.generatorSDKInfo = i.sdkInfo),
        (o.lcut = i.time),
        o
      );
    }
    _getDetailedStoreResult(a, i) {
      let o = null;
      return (
        a && (o = a[i] ? a[i] : a[(0, e._DJB2)(i)]),
        { result: o, details: this._getDetails(o == null) }
      );
    }
    _setWarningState(a, i) {
      var o, t;
      const l = e.StableID.get(this._sdkKey);
      if (
        ((o = a.customIDs) === null || o === void 0 ? void 0 : o.stableID) !== l &&
        ((!((t = a.customIDs) === null || t === void 0) && t.stableID) || l)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in i) {
        const c = i.user;
        (0, e._getFullUserHash)(a) !== (0, e._getFullUserHash)(c) &&
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
      var i, o;
      const t = this.getCurrentSourceDetails();
      let l = t.reason;
      const c = (i = t.warnings) !== null && i !== void 0 ? i : [];
      (this._source === "Bootstrap" && c.length > 0 && (l = l + c[0]),
        l !== "Uninitialized" &&
          l !== "NoValues" &&
          (l = `${l}:${a ? "Unrecognized" : "Recognized"}`));
      const n =
        this._source === "Bootstrap" && (o = this._bootstrapMetadata) !== null && o !== void 0
          ? o
          : void 0;
      return (n && (t.bootstrapMetadata = n), Object.assign(Object.assign({}, t), { reason: l }));
    }
  };
  return ((Ne.default = r), Ne);
}
var G = {},
  Fe = {},
  Xr;
function fo() {
  if (Xr) return Fe;
  ((Xr = 1),
    Object.defineProperty(Fe, "__esModule", { value: !0 }),
    (Fe._resolveDeltasResponse = void 0));
  const e = A(),
    r = 2;
  function s(t, l) {
    const c = (0, e._typedJsonParse)(l, "checksum", "DeltasEvaluationResponse");
    if (!c) return { hadBadDeltaChecksum: !0 };
    const n = a(t, c),
      u = i(n),
      f = (0, e._DJB2Object)(
        {
          feature_gates: u.feature_gates,
          dynamic_configs: u.dynamic_configs,
          layer_configs: u.layer_configs,
        },
        r,
      );
    return f === c.checksumV2
      ? JSON.stringify(u)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: f,
          badMergedConfigs: u,
          badFullResponse: c.deltas_full_response,
        };
  }
  Fe._resolveDeltasResponse = s;
  function a(t, l) {
    return Object.assign(Object.assign(Object.assign({}, t), l), {
      feature_gates: Object.assign(Object.assign({}, t.feature_gates), l.feature_gates),
      layer_configs: Object.assign(Object.assign({}, t.layer_configs), l.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, t.dynamic_configs), l.dynamic_configs),
    });
  }
  function i(t) {
    const l = t;
    return (
      o(t.deleted_gates, l.feature_gates),
      delete l.deleted_gates,
      o(t.deleted_configs, l.dynamic_configs),
      delete l.deleted_configs,
      o(t.deleted_layers, l.layer_configs),
      delete l.deleted_layers,
      l
    );
  }
  function o(t, l) {
    t?.forEach((c) => {
      delete l[c];
    });
  }
  return Fe;
}
var Yr;
function Xn() {
  if (Yr) return G;
  Yr = 1;
  var e =
    (G && G.__awaiter) ||
    function (i, o, t, l) {
      function c(n) {
        return n instanceof t
          ? n
          : new t(function (u) {
              u(n);
            });
      }
      return new (t || (t = Promise))(function (n, u) {
        function f(p) {
          try {
            d(l.next(p));
          } catch (_) {
            u(_);
          }
        }
        function h(p) {
          try {
            d(l.throw(p));
          } catch (_) {
            u(_);
          }
        }
        function d(p) {
          p.done ? n(p.value) : c(p.value).then(f, h);
        }
        d((l = l.apply(i, o || [])).next());
      });
    };
  Object.defineProperty(G, "__esModule", { value: !0 });
  const r = A(),
    s = fo();
  class a extends r.NetworkCore {
    constructor(o, t) {
      super(o, t);
      const l = o?.networkConfig;
      ((this._option = o),
        (this._initializeUrlConfig = new r.UrlConfiguration(
          r.Endpoint._initialize,
          l?.initializeUrl,
          l?.api,
          l?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(o, t, l, c, n) {
      return e(this, void 0, void 0, function* () {
        var u, f, h, d, p, _;
        const v = t ? (0, r._typedJsonParse)(t, "has_updates", "InitializeResponse") : null;
        let g = {
          user: c,
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
            sinceTime: n && !y ? v.time : 0,
            previousDerivedFields: "derived_fields" in v && n ? v.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: v.full_checksum,
            partialUserMatchSinceTime: y ? 0 : v.time,
          });
        }
        return this._fetchEvaluations(o, v, g, l);
      });
    }
    _fetchEvaluations(o, t, l, c) {
      return e(this, void 0, void 0, function* () {
        var n, u;
        const f = yield this.post({
          sdkKey: o,
          urlConfig: this._initializeUrlConfig,
          data: l,
          retries: 2,
          isStatsigEncodable: !0,
          priority: c,
        });
        if (f?.code === 204) return '{"has_updates": false}';
        if (f?.code !== 200) return (n = f?.body) !== null && n !== void 0 ? n : null;
        if (
          t?.has_updates !== !0 ||
          ((u = f.body) === null || u === void 0 ? void 0 : u.includes('"is_delta":true')) !== !0 ||
          l.deltasResponseRequested !== !0
        )
          return f.body;
        const h = (0, s._resolveDeltasResponse)(t, f.body);
        return typeof h == "string"
          ? h
          : this._fetchEvaluations(
              o,
              t,
              Object.assign(Object.assign(Object.assign({}, l), h), {
                deltasResponseRequested: !1,
              }),
              c,
            );
      });
    }
  }
  return ((G.default = a), G);
}
var Te = {},
  Zr;
function _o() {
  if (Zr) return Te;
  ((Zr = 1),
    Object.defineProperty(Te, "__esModule", { value: !0 }),
    (Te._makeParamStoreGetter = void 0));
  const e = A(),
    r = { disableExposureLog: !0 };
  function s(u) {
    return u == null || u.disableExposureLog === !1;
  }
  function a(u, f) {
    return f != null && !(0, e._isTypeMatch)(u, f);
  }
  function i(u, f) {
    return u.value;
  }
  function o(u, f, h) {
    return u.getFeatureGate(f.gate_name, s(h) ? void 0 : r).value ? f.pass_value : f.fail_value;
  }
  function t(u, f, h, d) {
    const _ = u.getDynamicConfig(f.config_name, s(d) ? void 0 : r).get(f.param_name);
    return a(_, h) ? h : _;
  }
  function l(u, f, h, d) {
    const _ = u.getExperiment(f.experiment_name, s(d) ? void 0 : r).get(f.param_name);
    return a(_, h) ? h : _;
  }
  function c(u, f, h, d) {
    const _ = u.getLayer(f.layer_name, s(d) ? void 0 : r).get(f.param_name);
    return a(_, h) ? h : _;
  }
  function n(u, f, h) {
    return (d, p) => {
      if (f == null) return p;
      const _ = f[d];
      if (_ == null || (p != null && (0, e._typeOf)(p) !== _.param_type)) return p;
      switch (_.ref_type) {
        case "static":
          return i(_);
        case "gate":
          return o(u, _, h);
        case "dynamic_config":
          return t(u, _, p, h);
        case "experiment":
          return l(u, _, p, h);
        case "layer":
          return c(u, _, p, h);
        default:
          return p;
      }
    };
  }
  return ((Te._makeParamStoreGetter = n), Te);
}
var U = {},
  $r;
function vo() {
  if ($r) return U;
  $r = 1;
  var e =
    (U && U.__awaiter) ||
    function (i, o, t, l) {
      function c(n) {
        return n instanceof t
          ? n
          : new t(function (u) {
              u(n);
            });
      }
      return new (t || (t = Promise))(function (n, u) {
        function f(p) {
          try {
            d(l.next(p));
          } catch (_) {
            u(_);
          }
        }
        function h(p) {
          try {
            d(l.throw(p));
          } catch (_) {
            u(_);
          }
        }
        function d(p) {
          p.done ? n(p.value) : c(p.value).then(f, h);
        }
        d((l = l.apply(i, o || [])).next());
      });
    };
  (Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.StatsigEvaluationsDataAdapter = void 0));
  const r = A(),
    s = Xn();
  let a = class extends r.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(o, t, l) {
      (super.attach(o, t, l),
        l !== null && l instanceof s.default
          ? (this._network = l)
          : (this._network = new s.default(t ?? {})));
    }
    getDataAsync(o, t, l) {
      return this._getDataAsyncImpl(o, (0, r._normalizeUser)(t, this._options), l);
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
    _fetchFromNetwork(o, t, l, c) {
      return e(this, void 0, void 0, function* () {
        var n;
        const u = yield (n = this._network) === null || n === void 0
          ? void 0
          : n.fetchEvaluations(this._getSdkKey(), o, l?.priority, t, c);
        return u ?? null;
      });
    }
    _getCacheKey(o) {
      var t;
      const l = (0, r._getStorageKey)(
        this._getSdkKey(),
        o,
        (t = this._options) === null || t === void 0 ? void 0 : t.customUserCacheKeyFunc,
      );
      return `${r.DataAdapterCachePrefix}.${this._cacheSuffix}.${l}`;
    }
    _isCachedResultValidFor204(o, t) {
      return o.fullUserHash != null && o.fullUserHash === (0, r._getFullUserHash)(t);
    }
  };
  return ((U.StatsigEvaluationsDataAdapter = a), U);
}
var en;
function ho() {
  if (en) return N;
  en = 1;
  var e =
    (N && N.__awaiter) ||
    function (l, c, n, u) {
      function f(h) {
        return h instanceof n
          ? h
          : new n(function (d) {
              d(h);
            });
      }
      return new (n || (n = Promise))(function (h, d) {
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
        v((u = u.apply(l, c || [])).next());
      });
    };
  Object.defineProperty(N, "__esModule", { value: !0 });
  const r = A(),
    s = co(),
    a = Xn(),
    i = _o(),
    o = vo();
  let t = class Rt extends r.StatsigClientBase {
    static instance(c) {
      const n = (0, r._getStatsigGlobal)().instance(c);
      return n instanceof Rt
        ? n
        : (r.Log.warn(
            (0, r._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Rt(c ?? "", {}));
    }
    constructor(c, n, u = null) {
      var f, h;
      r.SDKType._setClientType(c, "javascript-client");
      const d = new a.default(u, (_) => {
        this.$emt(_);
      });
      (super(
        c,
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
        (this._store = new s.default(c)),
        (this._network = d),
        (this._user = this._configureUser(n, u)),
        (this._sdkInstanceID = (0, r.getUUID)()));
      const p = (h = u?.plugins) !== null && h !== void 0 ? h : [];
      for (const _ of p) _.bind(this);
    }
    initializeSync(c) {
      var n;
      return this.loadingStatus !== "Uninitialized"
        ? (0, r.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((n = this._store.getWarnings()) !== null && n !== void 0 ? n : []),
          ])
        : (this._logger.start(), this.updateUserSync(this._user, c));
    }
    initializeAsync(c) {
      return e(this, void 0, void 0, function* () {
        return this._initializePromise
          ? this._initializePromise
          : ((this._initializePromise = this._initializeAsyncImpl(c)), this._initializePromise);
      });
    }
    updateUserSync(c, n) {
      const u = performance.now();
      try {
        return this._updateUserSyncImpl(c, n, u);
      } catch (f) {
        const h = f instanceof Error ? f : new Error(String(f));
        return this._createErrorUpdateDetails(h, u);
      }
    }
    _updateUserSyncImpl(c, n, u) {
      var f;
      const h = [...((f = this._store.getWarnings()) !== null && f !== void 0 ? f : [])];
      this._resetForUser(c);
      const d = this.dataAdapter.getDataSync(this._user);
      (d == null && h.push("NoCachedValues"),
        this._store.setValues(d, this._user),
        this._finalizeUpdate(d));
      const p = n?.disableBackgroundCacheRefresh;
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
    updateUserAsync(c, n) {
      return e(this, void 0, void 0, function* () {
        const u = performance.now();
        try {
          return yield this._updateUserAsyncImpl(c, n);
        } catch (f) {
          const h = f instanceof Error ? f : new Error(String(f));
          return this._createErrorUpdateDetails(h, u);
        }
      });
    }
    _updateUserAsyncImpl(c, n) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(c);
        const u = this._user;
        r.Diagnostics._markInitOverallStart(this._sdkKey);
        let f = this.dataAdapter.getDataSync(u);
        if (
          (this._store.setValues(f, this._user),
          this._setStatus("Loading", f),
          (f = yield this.dataAdapter.getDataAsync(f, u, n)),
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
    checkGate(c, n) {
      return this.getFeatureGate(c, n).value;
    }
    logEvent(c, n, u) {
      const f = typeof c == "string" ? { eventName: c, value: n, metadata: u } : c;
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
    _initializeAsyncImpl(c) {
      return e(this, void 0, void 0, function* () {
        return (
          r.Storage.isReady() || (yield r.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, c)
        );
      });
    }
    _createErrorUpdateDetails(c, n) {
      var u;
      return (0, r.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - n,
        c,
        null,
        [...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : [])],
      );
    }
    _finalizeUpdate(c) {
      (this._store.finalize(), this._setStatus("Ready", c));
    }
    _runPostUpdate(c, n) {
      this.dataAdapter.getDataAsync(c, n, { priority: "low" }).catch((u) => {
        r.Log.error("An error occurred after update.", u);
      });
    }
    _resetForUser(c) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(c, this._options)));
    }
    _configureUser(c, n) {
      var u;
      const f = (0, r._normalizeUser)(c, n),
        h = (u = f.customIDs) === null || u === void 0 ? void 0 : u.stableID;
      return (h && r.StableID.setOverride(h, this._sdkKey), f);
    }
    _getFeatureGateImpl(c, n) {
      var u, f;
      const { result: h, details: d } = this._store.getGate(c),
        p = (0, r._makeFeatureGate)(c, d, h),
        _ =
          (f = (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getGateOverride) ===
            null || f === void 0
            ? void 0
            : f.call(u, p, this._user, n),
        v = _ ?? p;
      return (
        this._enqueueExposure(
          c,
          (0, r._createGateExposure)(this._user, v, this._store.getExposureMapping()),
          n,
        ),
        this.$emt({ name: "gate_evaluation", gate: v }),
        v
      );
    }
    _getDynamicConfigImpl(c, n) {
      var u, f;
      const { result: h, details: d } = this._store.getConfig(c),
        p = (0, r._makeDynamicConfig)(c, d, h),
        _ =
          (f =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getDynamicConfigOverride) === null || f === void 0
            ? void 0
            : f.call(u, p, this._user, n),
        v = _ ?? p;
      return (
        this._enqueueExposure(
          c,
          (0, r._createConfigExposure)(this._user, v, this._store.getExposureMapping()),
          n,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: v }),
        v
      );
    }
    _getExperimentImpl(c, n) {
      var u, f, h, d;
      const { result: p, details: _ } = this._store.getConfig(c),
        v = (0, r._makeExperiment)(c, _, p);
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
            : d.call(h, v, this._user, n),
        y = g ?? v;
      return (
        this._enqueueExposure(
          c,
          (0, r._createConfigExposure)(this._user, y, this._store.getExposureMapping()),
          n,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: y }),
        y
      );
    }
    _getLayerImpl(c, n) {
      var u, f, h;
      const { result: d, details: p } = this._store.getLayer(c),
        _ = (0, r._makeLayer)(c, p, d),
        v =
          (f =
            (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getLayerOverride) ===
            null || f === void 0
            ? void 0
            : f.call(u, _, this._user, n);
      n?.disableExposureLog && this._logger.incrementNonExposureCount(c);
      const g = (0, r._mergeOverride)(
        _,
        v,
        (h = v?.__value) !== null && h !== void 0 ? h : _.__value,
        (y) => {
          n?.disableExposureLog ||
            this._enqueueExposure(
              c,
              (0, r._createLayerParameterExposure)(
                this._user,
                g,
                y,
                this._store.getExposureMapping(),
              ),
              n,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: g }), g);
    }
    _getParameterStoreImpl(c, n) {
      var u, f;
      const { result: h, details: d } = this._store.getParamStore(c);
      this._logger.incrementNonExposureCount(c);
      const p = {
          name: c,
          details: d,
          __configuration: h,
          get: (0, i._makeParamStoreGetter)(this, h, n),
        },
        _ =
          (f =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getParamStoreOverride) === null || f === void 0
            ? void 0
            : f.call(u, p, n);
      return (
        _ != null &&
          ((p.__configuration = _.config),
          (p.details = _.details),
          (p.get = (0, i._makeParamStoreGetter)(this, _.config, n))),
        p
      );
    }
  };
  return ((N.default = t), N);
}
var tn;
function go() {
  return (
    tn ||
      ((tn = 1),
      (function (e) {
        var r =
            (x && x.__createBinding) ||
            (Object.create
              ? function (t, l, c, n) {
                  n === void 0 && (n = c);
                  var u = Object.getOwnPropertyDescriptor(l, c);
                  ((!u || ("get" in u ? !l.__esModule : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return l[c];
                      },
                    }),
                    Object.defineProperty(t, n, u));
                }
              : function (t, l, c, n) {
                  (n === void 0 && (n = c), (t[n] = l[c]));
                }),
          s =
            (x && x.__exportStar) ||
            function (t, l) {
              for (var c in t)
                c !== "default" && !Object.prototype.hasOwnProperty.call(l, c) && r(l, t, c);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const a = A(),
          i = ho();
        ((e.StatsigClient = i.default), s(A(), e));
        const o = Object.assign((0, a._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = o;
      })(x)),
    x
  );
}
var Be = {},
  ke = {},
  rn;
function po() {
  if (rn) return ke;
  ((rn = 1),
    Object.defineProperty(ke, "__esModule", { value: !0 }),
    (ke.initFeatureFlags = void 0));
  const e = O(),
    r = R(),
    s = Ke(),
    a = 500,
    i = 1e3 * 25,
    o = (0, e.getCallBridge)(),
    t = (c) => {
      if (!c || !c.user)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(c).some((n) => typeof n == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    l = (c) => (t(c), o("initFeatureFlags", { user: c.user }));
  return (
    (ke.initFeatureFlags = (0, s.withRateLimiter)(
      l,
      a,
      i,
      `Feature flags initialisation calls are rate limited at ${a}req/${i / 1e3}s`,
    )),
    ke
  );
}
var nn;
function yo() {
  if (nn) return Be;
  ((nn = 1),
    Object.defineProperty(Be, "__esModule", { value: !0 }),
    (Be.ForgeDataAdapter = void 0));
  const e = po();
  class r {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(a, i, o) {
      var t;
      if (a) return a;
      this.environment = ((t = this.options) === null || t === void 0 ? void 0 : t.environment) || {
        tier: "development",
      };
      const l = { ...i, statsigEnvironment: this.environment },
        c = await (0, e.initFeatureFlags)({ user: l }),
        n = {
          source: "Network",
          data: JSON.stringify(c),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = n), n);
    }
    getDataSync(a) {
      return this.cache;
    }
    async attach(a, i, o) {
      this.options = i;
    }
    async prefetchData() {}
    async setData(a) {}
    async setDataLegacy(a) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((Be.ForgeDataAdapter = r), Be);
}
var wt = {},
  on;
function Yn() {
  return (
    on ||
      ((on = 1),
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
      })(wt)),
    wt
  );
}
var xe = {},
  an;
function mo() {
  if (an) return xe;
  ((an = 1),
    Object.defineProperty(xe, "__esModule", { value: !0 }),
    (xe.trackFeatureFlagEvent = void 0));
  const e = O(),
    r = R(),
    s = Yn(),
    a = Ke(),
    i = 500,
    o = 1e3 * 25,
    t = (0, e.getCallBridge)(),
    l = (n) => {
      if (!n || !n.type || !n.properties)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(n.type.toUpperCase() in s.FeatureFlagEventType))
        throw new r.BridgeAPIError("Event type is not supported");
      if (Object.values(n).some((u) => typeof u == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (n) => (l(n), t("trackFeatureFlagEvent", n));
  return (
    (xe.trackFeatureFlagEvent = (0, a.withRateLimiter)(
      c,
      i,
      o,
      `Feature flags calls are rate limited at ${i}req/${o / 1e3}s`,
    )),
    xe
  );
}
var sn;
function bo() {
  if (sn) return De;
  ((sn = 1),
    Object.defineProperty(De, "__esModule", { value: !0 }),
    (De.ForgeFeatureFlags = void 0));
  const e = go(),
    r = yo(),
    s = Yn(),
    a = mo();
  class i {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.eventProps = {}),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(t, l = {}) {
      var c;
      if (this.isInitialized()) return;
      this.dataAdapter = new r.ForgeDataAdapter();
      const n = {
        environment: { tier: l.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (c = n.environment) === null || c === void 0 ? void 0 : c.tier),
        (this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(t), n)),
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
    sendCheckFlagEvent(t, l) {
      const c = {
        type: s.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: t,
          success: l,
        },
      };
      (0, a.trackFeatureFlagEvent)(c);
    }
  }
  return ((De.ForgeFeatureFlags = i), De);
}
var un;
function wo() {
  return (
    un ||
      ((un = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var r = bo();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.ForgeFeatureFlags;
          },
        });
      })(bt)),
    bt
  );
}
var ln;
function Eo() {
  return (
    ln ||
      ((ln = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = S;
        var s = si();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return s.NavigationTarget;
          },
        }),
          r.__exportStar(Ue(), e),
          r.__exportStar(di(), e),
          r.__exportStar(St(), e),
          r.__exportStar(Vi(), e),
          r.__exportStar(Hi(), e),
          r.__exportStar(Ji(), e),
          r.__exportStar(Qi(), e),
          r.__exportStar(Xi(), e),
          r.__exportStar($i(), e),
          r.__exportStar(ro(), e),
          (e.i18n = r.__importStar(no())),
          r.__exportStar(lo(), e),
          r.__exportStar(wo(), e));
      })(Ye)),
    Ye
  );
}
var Ge = Eo();
function Oo() {
  const [e, r] = F.useState(""),
    [s, a] = F.useState(""),
    [i, o] = F.useState(""),
    [t, l] = F.useState(!1),
    [c, n] = F.useState(!1),
    [u, f] = F.useState(!1),
    [h, d] = F.useState([]),
    p = (b, E, I) => {
      d((M) => [{ id: Date.now(), query: b, result: E, timestamp: new Date(), type: I }, ...M]);
    },
    _ = async () => {
      try {
        (o(""), l(!0));
        const b = await Ge.invoke("execute", { query: e });
        (a(b), p(e, b, "SQL"));
      } catch (b) {
        (o(b instanceof Error ? b.message : "An error occurred"), a(""));
      } finally {
        l(!1);
      }
    },
    v = async () => {
      try {
        (o(""), n(!0));
        const b = await Ge.invoke("executeDDL", { query: e });
        (a(b), p(e, b, "DDL"));
      } catch (b) {
        (o(b instanceof Error ? b.message : "An error occurred"), a(""));
      } finally {
        n(!1);
      }
    },
    g = async () => {
      try {
        (o(""), f(!0));
        const b = await Ge.invoke("executeCommand", { command: e });
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
                disabled: t || c || u,
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
                disabled: t || c || u,
                style: {
                  padding: "10px 20px",
                  backgroundColor: c ? "#36B37E80" : "#36B37E",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: c ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: c
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
                disabled: t || c || u,
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
      i &&
        w.jsx("div", {
          style: {
            padding: "10px",
            backgroundColor: "#FFEBE6",
            border: "1px solid #DE350B",
            borderRadius: "3px",
            marginBottom: "20px",
            color: "#DE350B",
          },
          children: i,
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
const Ro = document.getElementById("root"),
  Po = Zn.createRoot(Ro),
  cn = () => {
    Po.render(w.jsx(Oo, {}));
  };
Ge.view.theme
  .enable()
  .then(() => {
    cn();
  })
  .catch((e) => {
    (console.error(e.message), cn());
  });
