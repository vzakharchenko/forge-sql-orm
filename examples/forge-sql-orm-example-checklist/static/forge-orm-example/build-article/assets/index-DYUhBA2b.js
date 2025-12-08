const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index-Byf9Kz4g.js", "./client-core-vendor-CgCV9aM-.js"]),
) => i.map((i) => d[i]);
import { r as pn, c as ii } from "./react-dom-vendor-BOEB6BZs.js";
import { g as oi, r as M } from "./client-core-vendor-CgCV9aM-.js";
import { r as ai } from "./lodash-vendor-FKT_qxrp.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const t of o.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && s(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(i) {
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
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = a(i);
    fetch(i.href, o);
  }
})();
var Ze = { exports: {} },
  x = {};
var jt;
function si() {
  if (jt) return x;
  jt = 1;
  var e = pn(),
    r = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
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
    for (u in c) s.call(c, u) && !o.hasOwnProperty(u) && (f[u] = c[u]);
    if (l && l.defaultProps) for (u in ((c = l.defaultProps), c)) f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: r, type: l, key: h, ref: d, props: f, _owner: i.current };
  }
  return ((x.Fragment = a), (x.jsx = t), (x.jsxs = t), x);
}
var Mt;
function ui() {
  return (Mt || ((Mt = 1), (Ze.exports = si())), Ze.exports);
}
var R = ui(),
  Ge = pn(),
  Qe = {},
  Pt = function (e, r) {
    return (
      (Pt =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (a, s) {
            a.__proto__ = s;
          }) ||
        function (a, s) {
          for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (a[i] = s[i]);
        }),
      Pt(e, r)
    );
  };
function yn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Pt(e, r);
  function a() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
}
var ze = function () {
  return (
    (ze =
      Object.assign ||
      function (r) {
        for (var a, s = 1, i = arguments.length; s < i; s++) {
          a = arguments[s];
          for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (r[o] = a[o]);
        }
        return r;
      }),
    ze.apply(this, arguments)
  );
};
function mn(e, r) {
  var a = {};
  for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && r.indexOf(s) < 0 && (a[s] = e[s]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, s = Object.getOwnPropertySymbols(e); i < s.length; i++)
      r.indexOf(s[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, s[i]) &&
        (a[s[i]] = e[s[i]]);
  return a;
}
function bn(e, r, a, s) {
  var i = arguments.length,
    o = i < 3 ? r : s === null ? (s = Object.getOwnPropertyDescriptor(r, a)) : s,
    t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, r, a, s);
  else
    for (var l = e.length - 1; l >= 0; l--)
      (t = e[l]) && (o = (i < 3 ? t(o) : i > 3 ? t(r, a, o) : t(r, a)) || o);
  return (i > 3 && o && Object.defineProperty(r, a, o), o);
}
function wn(e, r) {
  return function (a, s) {
    r(a, s, e);
  };
}
function En(e, r, a, s, i, o) {
  function t(g) {
    if (g !== void 0 && typeof g != "function") throw new TypeError("Function expected");
    return g;
  }
  for (
    var l = s.kind,
      c = l === "getter" ? "get" : l === "setter" ? "set" : "value",
      n = !r && e ? (s.static ? e : e.prototype) : null,
      u = r || (n ? Object.getOwnPropertyDescriptor(n, s.name) : {}),
      f,
      h = !1,
      d = a.length - 1;
    d >= 0;
    d--
  ) {
    var p = {};
    for (var _ in s) p[_] = _ === "access" ? {} : s[_];
    for (var _ in s.access) p.access[_] = s.access[_];
    p.addInitializer = function (g) {
      if (h) throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(t(g || null));
    };
    var v = (0, a[d])(l === "accessor" ? { get: u.get, set: u.set } : u[c], p);
    if (l === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      ((f = t(v.get)) && (u.get = f),
        (f = t(v.set)) && (u.set = f),
        (f = t(v.init)) && i.unshift(f));
    } else (f = t(v)) && (l === "field" ? i.unshift(f) : (u[c] = f));
  }
  (n && Object.defineProperty(n, s.name, u), (h = !0));
}
function On(e, r, a) {
  for (var s = arguments.length > 2, i = 0; i < r.length; i++)
    a = s ? r[i].call(e, a) : r[i].call(e);
  return s ? a : void 0;
}
function Rn(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Pn(e, r, a) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: a ? "".concat(a, " ", r) : r })
  );
}
function Sn(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function In(e, r, a, s) {
  function i(o) {
    return o instanceof a
      ? o
      : new a(function (t) {
          t(o);
        });
  }
  return new (a || (a = Promise))(function (o, t) {
    function l(u) {
      try {
        n(s.next(u));
      } catch (f) {
        t(f);
      }
    }
    function c(u) {
      try {
        n(s.throw(u));
      } catch (f) {
        t(f);
      }
    }
    function n(u) {
      u.done ? o(u.value) : i(u.value).then(l, c);
    }
    n((s = s.apply(e, r || [])).next());
  });
}
function qn(e, r) {
  var a = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    s,
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
    if (s) throw new TypeError("Generator is already executing.");
    for (; t && ((t = 0), n[0] && (a = 0)), a; )
      try {
        if (
          ((s = 1),
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
            return (a.label++, { value: n[1], done: !1 });
          case 5:
            (a.label++, (i = n[1]), (n = [0]));
            continue;
          case 7:
            ((n = a.ops.pop()), a.trys.pop());
            continue;
          default:
            if (
              ((o = a.trys), !(o = o.length > 0 && o[o.length - 1]) && (n[0] === 6 || n[0] === 2))
            ) {
              a = 0;
              continue;
            }
            if (n[0] === 3 && (!o || (n[1] > o[0] && n[1] < o[3]))) {
              a.label = n[1];
              break;
            }
            if (n[0] === 6 && a.label < o[1]) {
              ((a.label = o[1]), (o = n));
              break;
            }
            if (o && a.label < o[2]) {
              ((a.label = o[2]), a.ops.push(n));
              break;
            }
            (o[2] && a.ops.pop(), a.trys.pop());
            continue;
        }
        n = r.call(e, a);
      } catch (u) {
        ((n = [6, u]), (i = 0));
      } finally {
        s = o = 0;
      }
    if (n[0] & 5) throw n[1];
    return { value: n[0] ? n[1] : void 0, done: !0 };
  }
}
var Je = Object.create
  ? function (e, r, a, s) {
      s === void 0 && (s = a);
      var i = Object.getOwnPropertyDescriptor(r, a);
      ((!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) &&
        (i = {
          enumerable: !0,
          get: function () {
            return r[a];
          },
        }),
        Object.defineProperty(e, s, i));
    }
  : function (e, r, a, s) {
      (s === void 0 && (s = a), (e[s] = r[a]));
    };
function An(e, r) {
  for (var a in e) a !== "default" && !Object.prototype.hasOwnProperty.call(r, a) && Je(r, e, a);
}
function Ke(e) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    a = r && e[r],
    s = 0;
  if (a) return a.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && s >= e.length && (e = void 0), { value: e && e[s++], done: !e });
      },
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function qt(e, r) {
  var a = typeof Symbol == "function" && e[Symbol.iterator];
  if (!a) return e;
  var s = a.call(e),
    i,
    o = [],
    t;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = s.next()).done; ) o.push(i.value);
  } catch (l) {
    t = { error: l };
  } finally {
    try {
      i && !i.done && (a = s.return) && a.call(s);
    } finally {
      if (t) throw t.error;
    }
  }
  return o;
}
function jn() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(qt(arguments[r]));
  return e;
}
function Mn() {
  for (var e = 0, r = 0, a = arguments.length; r < a; r++) e += arguments[r].length;
  for (var s = Array(e), i = 0, r = 0; r < a; r++)
    for (var o = arguments[r], t = 0, l = o.length; t < l; t++, i++) s[i] = o[t];
  return s;
}
function Cn(e, r, a) {
  if (a || arguments.length === 2)
    for (var s = 0, i = r.length, o; s < i; s++)
      (o || !(s in r)) && (o || (o = Array.prototype.slice.call(r, 0, s)), (o[s] = r[s]));
  return e.concat(o || Array.prototype.slice.call(r));
}
function G(e) {
  return this instanceof G ? ((this.v = e), this) : new G(e);
}
function Dn(e, r, a) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = a.apply(e, r || []),
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
    s[d] &&
      ((i[d] = function (_) {
        return new Promise(function (v, g) {
          o.push([d, _, v, g]) > 1 || c(d, _);
        });
      }),
      p && (i[d] = p(i[d])));
  }
  function c(d, p) {
    try {
      n(s[d](p));
    } catch (_) {
      h(o[0][3], _);
    }
  }
  function n(d) {
    d.value instanceof G ? Promise.resolve(d.value.v).then(u, f) : h(o[0][2], d);
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
function kn(e) {
  var r, a;
  return (
    (r = {}),
    s("next"),
    s("throw", function (i) {
      throw i;
    }),
    s("return"),
    (r[Symbol.iterator] = function () {
      return this;
    }),
    r
  );
  function s(i, o) {
    r[i] = e[i]
      ? function (t) {
          return (a = !a) ? { value: G(e[i](t)), done: !1 } : o ? o(t) : t;
        }
      : o;
  }
}
function Tn(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    a;
  return r
    ? r.call(e)
    : ((e = typeof Ke == "function" ? Ke(e) : e[Symbol.iterator]()),
      (a = {}),
      s("next"),
      s("throw"),
      s("return"),
      (a[Symbol.asyncIterator] = function () {
        return this;
      }),
      a);
  function s(o) {
    a[o] =
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
function Bn(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var li = Object.create
    ? function (e, r) {
        Object.defineProperty(e, "default", { enumerable: !0, value: r });
      }
    : function (e, r) {
        e.default = r;
      },
  St = function (e) {
    return (
      (St =
        Object.getOwnPropertyNames ||
        function (r) {
          var a = [];
          for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (a[a.length] = s);
          return a;
        }),
      St(e)
    );
  };
function Fn(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var a = St(e), s = 0; s < a.length; s++) a[s] !== "default" && Je(r, e, a[s]);
  return (li(r, e), r);
}
function Un(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ln(e, r, a, s) {
  if (a === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !s : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return a === "m" ? s : a === "a" ? s.call(e) : s ? s.value : r.get(e);
}
function Nn(e, r, a, s, i) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !i : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (s === "a" ? i.call(e, a) : i ? (i.value = a) : r.set(e, a), a);
}
function Gn(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function Vn(e, r, a) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var s, i;
    if (a) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      s = r[Symbol.asyncDispose];
    }
    if (s === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((s = r[Symbol.dispose]), a && (i = s));
    }
    if (typeof s != "function") throw new TypeError("Object not disposable.");
    (i &&
      (s = function () {
        try {
          i.call(this);
        } catch (o) {
          return Promise.reject(o);
        }
      }),
      e.stack.push({ value: r, dispose: s, async: a }));
  } else a && e.stack.push({ async: !0 });
  return r;
}
var ci =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, a) {
        var s = new Error(a);
        return ((s.name = "SuppressedError"), (s.error = e), (s.suppressed = r), s);
      };
function xn(e) {
  function r(o) {
    ((e.error = e.hasError ? new ci(o, e.error, "An error was suppressed during disposal.") : o),
      (e.hasError = !0));
  }
  var a,
    s = 0;
  function i() {
    for (; (a = e.stack.pop()); )
      try {
        if (!a.async && s === 1) return ((s = 0), e.stack.push(a), Promise.resolve().then(i));
        if (a.dispose) {
          var o = a.dispose.call(a.value);
          if (a.async)
            return (
              (s |= 2),
              Promise.resolve(o).then(i, function (t) {
                return (r(t), i());
              })
            );
        } else s |= 1;
      } catch (t) {
        r(t);
      }
    if (s === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return i();
}
function zn(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (a, s, i, o, t) {
        return s
          ? r
            ? ".jsx"
            : ".js"
          : i && (!o || !t)
            ? a
            : i + o + "." + t.toLowerCase() + "js";
      })
    : e;
}
const di = {
    __extends: yn,
    __assign: ze,
    __rest: mn,
    __decorate: bn,
    __param: wn,
    __esDecorate: En,
    __runInitializers: On,
    __propKey: Rn,
    __setFunctionName: Pn,
    __metadata: Sn,
    __awaiter: In,
    __generator: qn,
    __createBinding: Je,
    __exportStar: An,
    __values: Ke,
    __read: qt,
    __spread: jn,
    __spreadArrays: Mn,
    __spreadArray: Cn,
    __await: G,
    __asyncGenerator: Dn,
    __asyncDelegator: kn,
    __asyncValues: Tn,
    __makeTemplateObject: Bn,
    __importStar: Fn,
    __importDefault: Un,
    __classPrivateFieldGet: Ln,
    __classPrivateFieldSet: Nn,
    __classPrivateFieldIn: Gn,
    __addDisposableResource: Vn,
    __disposeResources: xn,
    __rewriteRelativeImportExtension: zn,
  },
  fi = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Vn,
        get __assign() {
          return ze;
        },
        __asyncDelegator: kn,
        __asyncGenerator: Dn,
        __asyncValues: Tn,
        __await: G,
        __awaiter: In,
        __classPrivateFieldGet: Ln,
        __classPrivateFieldIn: Gn,
        __classPrivateFieldSet: Nn,
        __createBinding: Je,
        __decorate: bn,
        __disposeResources: xn,
        __esDecorate: En,
        __exportStar: An,
        __extends: yn,
        __generator: qn,
        __importDefault: Un,
        __importStar: Fn,
        __makeTemplateObject: Bn,
        __metadata: Sn,
        __param: wn,
        __propKey: Rn,
        __read: qt,
        __rest: mn,
        __rewriteRelativeImportExtension: zn,
        __runInitializers: On,
        __setFunctionName: Pn,
        __spread: jn,
        __spreadArray: Cn,
        __spreadArrays: Mn,
        __values: Ke,
        default: di,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  P = oi(fi);
var z = {},
  Ct;
function _i() {
  return (
    Ct ||
      ((Ct = 1),
      Object.defineProperty(z, "__esModule", { value: !0 }),
      (z.NavigationTarget = void 0),
      (z.NavigationTarget = {
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
    z
  );
}
var et = {},
  tt = {},
  K = {},
  H = {},
  Dt;
function O() {
  if (Dt) return H;
  ((Dt = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.BridgeAPIError = void 0));
  class e extends Error {}
  return ((H.BridgeAPIError = e), H);
}
var kt;
function b() {
  if (kt) return K;
  ((kt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.getCallBridge = void 0));
  const e = O();
  function r(s) {
    return !!s?.callBridge;
  }
  const a = () => {
    if (!r(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((K.getCallBridge = a), K);
}
var J = {},
  Tt;
function We() {
  if (Tt) return J;
  ((Tt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.withRateLimiter = void 0));
  const e = O(),
    r = (a, s, i, o) => {
      let t = Date.now(),
        l = 0;
      return async (...c) => {
        const n = Date.now();
        if ((n - t > i && ((t = n), (l = 0)), l >= s))
          throw new e.BridgeAPIError(o || "Too many invocations.");
        return ((l = l + 1), a(...c));
      };
    };
  return ((J.withRateLimiter = r), J);
}
var Bt;
function vi() {
  return (
    Bt ||
      ((Bt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = b(),
          a = O(),
          s = We(),
          i = (0, r.getCallBridge)(),
          o = (c) => {
            if (c && Object.values(c).some((n) => typeof n == "function"))
              throw new a.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (c, n) => {
            if (typeof c != "string") throw new a.BridgeAPIError("functionKey must be a string!");
            return (o(n), i("invoke", { functionKey: c, payload: n }));
          };
        e.invoke = (0, s.withRateLimiter)(
          t,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function l() {
          return e.invoke;
        }
        e.makeInvoke = l;
      })(tt)),
    tt
  );
}
var Ft;
function Ne() {
  return (
    Ft ||
      ((Ft = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(vi(), e));
      })(et)),
    et
  );
}
var rt = {},
  W = {},
  nt = {},
  Ut;
function Kn() {
  return (
    Ut ||
      ((Ut = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = b(),
          a = O(),
          s = We(),
          i = 500,
          o = 25,
          t = 1e3 * o;
        (function (f) {
          ((f.REMOTE = "Remote"), (f.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const l = (0, r.getCallBridge)(),
          c = (f) => {
            if (f && Object.values(f).some((h) => typeof h == "function"))
              throw new a.BridgeAPIError(
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
            return (0, s.withRateLimiter)(
              h,
              i,
              t,
              `${f} invocation calls are rate limited at ${i}/${o}s`,
            );
          };
        e._invokeEndpointFn = u;
      })(nt)),
    nt
  );
}
var Lt;
function hi() {
  if (Lt) return W;
  ((Lt = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.invokeRemote = void 0));
  const e = Kn(),
    r = (a) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(a);
  return ((W.invokeRemote = r), W);
}
var X = {},
  Nt;
function gi() {
  if (Nt) return X;
  ((Nt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.invokeService = void 0));
  const e = Kn(),
    r = (a) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(a);
  return ((X.invokeService = r), X);
}
var Gt;
function pi() {
  return (
    Gt ||
      ((Gt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(hi(), e), r.__exportStar(gi(), e));
      })(rt)),
    rt
  );
}
var it = {},
  Y = {},
  $ = {},
  Vt;
function yi() {
  if (Vt) return $;
  ((Vt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.submit = void 0));
  const e = b(),
    r = O(),
    a = (0, e.getCallBridge)(),
    s = async (i) => {
      if ((await a("submit", i)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return (($.submit = s), $);
}
var Z = {},
  xt;
function mi() {
  if (xt) return Z;
  ((xt = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.close = void 0));
  const e = b(),
    r = O(),
    a = (0, e.getCallBridge)(),
    s = async (i) => {
      try {
        if ((await a("close", i)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((Z.close = s), Z);
}
var Q = {},
  zt;
function bi() {
  if (zt) return Q;
  ((zt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.open = void 0));
  const e = b(),
    r = O(),
    a = (0, e.getCallBridge)(),
    s = async () => {
      try {
        if ((await a("open")) === !1)
          throw new r.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((Q.open = s), Q);
}
var ee = {},
  Kt;
function wi() {
  if (Kt) return ee;
  ((Kt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.refresh = void 0));
  const e = b(),
    r = O(),
    a = (0, e.getCallBridge)(),
    s = async (i) => {
      if ((await a("refresh", i)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((ee.refresh = s), ee);
}
var te = {},
  Ht;
function Ei() {
  if (Ht) return te;
  ((Ht = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.createHistory = void 0));
  const r = (0, b().getCallBridge)(),
    a = async () => {
      const s = await r("createHistory");
      return (
        s.listen((i) => {
          s.location = i;
        }),
        s
      );
    };
  return ((te.createHistory = a), te);
}
var re = {},
  ot = {},
  I = {},
  Jt;
function Hn() {
  return (
    Jt ||
      ((Jt = 1),
      Object.defineProperty(I, "__esModule", { value: !0 }),
      (I.FORGE_SUPPORTED_LOCALE_CODES = I.I18N_BUNDLE_FOLDER_NAME = I.I18N_INFO_FILE_NAME = void 0),
      (I.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (I.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (I.FORGE_SUPPORTED_LOCALE_CODES = [
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
    I
  );
}
var D = {},
  Wt;
function Oi() {
  if (Wt) return D;
  ((Wt = 1),
    Object.defineProperty(D, "__esModule", { value: !0 }),
    (D.TranslationsGetter = D.TranslationGetterError = void 0));
  const e = (s, i) => {
    s.includes(i) || s.push(i);
  };
  class r extends Error {
    constructor(i) {
      (super(i), (this.name = "TranslationGetterError"));
    }
  }
  D.TranslationGetterError = r;
  class a {
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
  return ((D.TranslationsGetter = a), D);
}
var ne = {},
  at = {},
  Xt;
function Jn() {
  return (
    Xt ||
      ((Xt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const a = P.__importDefault(ai()),
          s = (o, t, l) => {
            const c = o[l];
            return c ? (0, e.getTranslationValueFromContent)(c, t) : null;
          };
        e.getTranslationValue = s;
        const i = (o, t) => {
          let l = o[t];
          if (!l) {
            const c = t.split(".");
            c.length > 1 && (l = (0, a.default)(o, c, null));
          }
          return typeof l == "string" ? l : null;
        };
        e.getTranslationValueFromContent = i;
      })(at)),
    at
  );
}
var Yt;
function Ri() {
  if (Yt) return ne;
  ((Yt = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.Translator = void 0));
  const e = Jn();
  class r {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(s, i) {
      ((this.locale = s), (this.translationsGetter = i));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(s) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let i = this.cache.get(s);
      if (i === void 0) {
        for (const { translations: o } of this.localeLookupOrderedTranslations) {
          const t = (0, e.getTranslationValueFromContent)(o, s);
          if (t !== null) {
            i = t;
            break;
          }
        }
        ((i = i ?? null), this.cache.set(s, i));
      }
      return i;
    }
  }
  return ((ne.Translator = r), ne);
}
var ie = {},
  $t;
function Pi() {
  if ($t) return ie;
  (($t = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.ensureLocale = void 0));
  const e = Hn(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    a = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    s = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (o, t) => {
        const [l] = t.split("-");
        return (o[l] || (o[l] = t), o);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    i = (o) => {
      const t = o.replace("_", "-");
      return r.has(t) ? t : (s[t] ?? a[t] ?? null);
    };
  return ((ie.ensureLocale = i), ie);
}
var st = {},
  Zt;
function Si() {
  return (
    Zt ||
      ((Zt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (n) => typeof n == "object" && n !== null && !Array.isArray(n),
          a = (n) => typeof n?.i18n == "string",
          s = (n) => n.startsWith("connect-"),
          i = (n) => n.startsWith("core:"),
          o = (n) => {
            const u = new Set(),
              f = (h, d) =>
                !r(h) || u.has(h)
                  ? []
                  : (u.add(h),
                    Object.entries(h).flatMap(([p, _]) => {
                      const v = [...d, p];
                      return a(_)
                        ? [{ propertyPath: v, key: _.i18n }]
                        : Array.isArray(_)
                          ? _.flatMap((g) => f(g, v))
                          : f(_, v);
                    }));
            return f(n, []);
          },
          t = (n) =>
            Object.entries(n).flatMap(([u, f]) =>
              !s(u) && !i(u) && f && Array.isArray(f) && f.length > 0 ? f.map((h) => [h, u]) : [],
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
      })(st)),
    st
  );
}
var ut = {},
  Qt;
function Ii() {
  return (Qt || ((Qt = 1), Object.defineProperty(ut, "__esModule", { value: !0 })), ut);
}
var er;
function Wn() {
  return (
    er ||
      ((er = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const r = P;
        (r.__exportStar(Hn(), e),
          r.__exportStar(Oi(), e),
          r.__exportStar(Ri(), e),
          r.__exportStar(Pi(), e));
        var a = Jn();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return a.getTranslationValue;
          },
        });
        var s = Si();
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
          r.__exportStar(Ii(), e));
      })(ot)),
    ot
  );
}
var tr;
function qi() {
  if (tr) return re;
  ((tr = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.getContext = void 0));
  const e = b(),
    r = Wn(),
    a = (0, e.getCallBridge)(),
    s = async () => {
      var i;
      const o = await a("getContext"),
        t = o?.locale;
      return (t && (o.locale = (i = (0, r.ensureLocale)(t)) !== null && i !== void 0 ? i : t), o);
    };
  return ((re.getContext = s), re);
}
var oe = {},
  rr;
function Ai() {
  if (rr) return oe;
  ((rr = 1),
    Object.defineProperty(oe, "__esModule", { value: !0 }),
    (oe.changeWindowTitle = void 0));
  const e = b(),
    r = O(),
    a = (0, e.getCallBridge)(),
    s = async (i) => {
      try {
        await a("changeWindowTitle", i);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((oe.changeWindowTitle = s), oe);
}
var ae = {},
  nr;
function ji() {
  if (nr) return ae;
  ((nr = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.theme = void 0));
  const r = (0, b().getCallBridge)();
  return ((ae.theme = { enable: () => r("enableTheming") }), ae);
}
var se = {},
  ue = {},
  lt = {},
  k = {},
  ir;
function Xn() {
  if (ir) return k;
  ((ir = 1),
    Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.blobToBase64 = k.base64ToBlob = void 0));
  const e = (a, s) => {
    if (!a) return null;
    const i = a.includes(";base64") ? a.split(",")[1] : a,
      o = atob(i),
      t = new Array(o.length);
    for (let c = 0; c < o.length; c++) t[c] = o.charCodeAt(c);
    const l = new Uint8Array(t);
    return new Blob([l], { type: s });
  };
  k.base64ToBlob = e;
  const r = (a) =>
    new Promise((s, i) => {
      const o = new FileReader();
      ((o.onloadend = () => {
        s(o.result);
      }),
        (o.onerror = i),
        o.readAsDataURL(a));
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
        const r = Xn(),
          a = (n) => {
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
          s = async (n) => ({ data: await (0, r.blobToBase64)(n), type: n.type }),
          i = (n) => (0, r.base64ToBlob)(n.data, n.type),
          o = async (n) => {
            if (n instanceof Blob) return { ...(await s(n)), __isBlobData: !0 };
            if (Array.isArray(n))
              return Promise.all(n.map((u) => (0, e.serialiseBlobsInPayload)(u)));
            if (n && a(n)) {
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
          if (n && a(n) && "__isBlobData" in n) {
            const u = n;
            return i({ data: u.data, type: u.type });
          }
          if (Array.isArray(n)) return n.map((u) => (0, e.deserialiseBlobsInPayload)(u));
          if (n && a(n)) {
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
              : n && a(n)
                ? Object.values(n).some((u) => (0, e.containsBlobs)(u))
                : !1;
        e.containsBlobs = l;
        const c = (n) =>
          n && a(n) && "__isBlobData" in n
            ? !0
            : Array.isArray(n)
              ? n.some((u) => (0, e.containsSerialisedBlobs)(u))
              : n && a(n)
                ? Object.values(n).some((u) => (0, e.containsSerialisedBlobs)(u))
                : !1;
        e.containsSerialisedBlobs = c;
      })(lt)),
    lt
  );
}
var ar;
function Yn() {
  if (ar) return ue;
  ((ar = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.events = void 0));
  const e = b(),
    r = Mi(),
    a = (0, e.getCallBridge)(),
    s = async (o, t) => {
      let l = t;
      return (
        (0, r.containsBlobs)(t) && (l = await (0, r.serialiseBlobsInPayload)(t)),
        a("emit", { event: o, payload: l })
      );
    },
    i = (o, t) =>
      a("on", {
        event: o,
        callback: (c) => {
          let n = c;
          return (
            (0, r.containsSerialisedBlobs)(c) && (n = (0, r.deserialiseBlobsInPayload)(c)),
            t(n)
          );
        },
      });
  return ((ue.events = { emit: s, on: i }), ue);
}
var sr;
function Ci() {
  if (sr) return se;
  ((sr = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.emitReadyEvent = void 0));
  const e = Yn(),
    r = ei(),
    a = "EXTENSION_READY",
    s = async () => {
      const i = await r.view.getContext();
      await e.events.emit(a, { localId: i.localId });
    };
  return ((se.emitReadyEvent = s), se);
}
const Di = "modulepreload",
  ki = function (e, r) {
    return new URL(e, r).href;
  },
  ur = {},
  Ti = function (r, a, s) {
    let i = Promise.resolve();
    if (a && a.length > 0) {
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
        a.map((u) => {
          if (((u = ki(u, s)), u in ur)) return;
          ur[u] = !0;
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
var le = {},
  ct = {},
  ce = {},
  Ve = {},
  lr;
function $n() {
  if (lr) return Ve;
  ((lr = 1), Object.defineProperty(Ve, "__esModule", { value: !0 }), (Ve.default = a));
  let e;
  const r = new Uint8Array(16);
  function a() {
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
var U = {},
  de = {},
  fe = {},
  cr;
function Bi() {
  if (cr) return fe;
  ((cr = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((fe.default = e), fe);
}
var dr;
function Xe() {
  if (dr) return de;
  ((dr = 1), Object.defineProperty(de, "__esModule", { value: !0 }), (de.default = void 0));
  var e = r(Bi());
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function a(i) {
    return typeof i == "string" && e.default.test(i);
  }
  var s = a;
  return ((de.default = s), de);
}
var fr;
function Ye() {
  if (fr) return U;
  ((fr = 1),
    Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.default = void 0),
    (U.unsafeStringify = s));
  var e = r(Xe());
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }
  const a = [];
  for (let t = 0; t < 256; ++t) a.push((t + 256).toString(16).slice(1));
  function s(t, l = 0) {
    return (
      a[t[l + 0]] +
      a[t[l + 1]] +
      a[t[l + 2]] +
      a[t[l + 3]] +
      "-" +
      a[t[l + 4]] +
      a[t[l + 5]] +
      "-" +
      a[t[l + 6]] +
      a[t[l + 7]] +
      "-" +
      a[t[l + 8]] +
      a[t[l + 9]] +
      "-" +
      a[t[l + 10]] +
      a[t[l + 11]] +
      a[t[l + 12]] +
      a[t[l + 13]] +
      a[t[l + 14]] +
      a[t[l + 15]]
    );
  }
  function i(t, l = 0) {
    const c = s(t, l);
    if (!(0, e.default)(c)) throw TypeError("Stringified UUID is invalid");
    return c;
  }
  var o = i;
  return ((U.default = o), U);
}
var _r;
function Fi() {
  if (_r) return ce;
  ((_r = 1), Object.defineProperty(ce, "__esModule", { value: !0 }), (ce.default = void 0));
  var e = a($n()),
    r = Ye();
  function a(n) {
    return n && n.__esModule ? n : { default: n };
  }
  let s,
    i,
    o = 0,
    t = 0;
  function l(n, u, f) {
    let h = (u && f) || 0;
    const d = u || new Array(16);
    n = n || {};
    let p = n.node || s,
      _ = n.clockseq !== void 0 ? n.clockseq : i;
    if (p == null || _ == null) {
      const w = n.random || (n.rng || e.default)();
      (p == null && (p = s = [w[0] | 1, w[1], w[2], w[3], w[4], w[5]]),
        _ == null && (_ = i = ((w[6] << 8) | w[7]) & 16383));
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
    const E = ((v / 4294967296) * 1e4) & 268435455;
    ((d[h++] = (E >>> 8) & 255),
      (d[h++] = E & 255),
      (d[h++] = ((E >>> 24) & 15) | 16),
      (d[h++] = (E >>> 16) & 255),
      (d[h++] = (_ >>> 8) | 128),
      (d[h++] = _ & 255));
    for (let w = 0; w < 6; ++w) d[h + w] = p[w];
    return u || (0, r.unsafeStringify)(d);
  }
  var c = l;
  return ((ce.default = c), ce);
}
var _e = {},
  j = {},
  ve = {},
  vr;
function Zn() {
  if (vr) return ve;
  ((vr = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  var e = r(Xe());
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function a(i) {
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
  var s = a;
  return ((ve.default = s), ve);
}
var hr;
function Qn() {
  if (hr) return j;
  ((hr = 1),
    Object.defineProperty(j, "__esModule", { value: !0 }),
    (j.URL = j.DNS = void 0),
    (j.default = t));
  var e = Ye(),
    r = a(Zn());
  function a(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function s(l) {
    l = unescape(encodeURIComponent(l));
    const c = [];
    for (let n = 0; n < l.length; ++n) c.push(l.charCodeAt(n));
    return c;
  }
  const i = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  j.DNS = i;
  const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  j.URL = o;
  function t(l, c, n) {
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
  return j;
}
var he = {},
  gr;
function Ui() {
  if (gr) return he;
  ((gr = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  function e(d) {
    if (typeof d == "string") {
      const p = unescape(encodeURIComponent(d));
      d = new Uint8Array(p.length);
      for (let _ = 0; _ < p.length; ++_) d[_] = p.charCodeAt(_);
    }
    return r(s(i(d), d.length * 8));
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
  function a(d) {
    return (((d + 64) >>> 9) << 4) + 14 + 1;
  }
  function s(d, p) {
    ((d[p >> 5] |= 128 << (p % 32)), (d[a(p) - 1] = p));
    let _ = 1732584193,
      v = -271733879,
      g = -1732584194,
      y = 271733878;
    for (let m = 0; m < d.length; m += 16) {
      const E = _,
        w = v,
        A = g,
        V = y;
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
        (_ = o(_, E)),
        (v = o(v, w)),
        (g = o(g, A)),
        (y = o(y, V)));
    }
    return [_, v, g, y];
  }
  function i(d) {
    if (d.length === 0) return [];
    const p = d.length * 8,
      _ = new Uint32Array(a(p));
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
  return ((he.default = h), he);
}
var pr;
function Li() {
  if (pr) return _e;
  ((pr = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e = a(Qn()),
    r = a(Ui());
  function a(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var i = (0, e.default)("v3", 48, r.default);
  return ((_e.default = i), _e);
}
var ge = {},
  pe = {},
  yr;
function Ni() {
  if (yr) return pe;
  ((yr = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((pe.default = r), pe);
}
var mr;
function Gi() {
  if (mr) return ge;
  ((mr = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  var e = s(Ni()),
    r = s($n()),
    a = Ye();
  function s(t) {
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
    return (0, a.unsafeStringify)(n);
  }
  var o = i;
  return ((ge.default = o), ge);
}
var ye = {},
  me = {},
  br;
function Vi() {
  if (br) return me;
  ((br = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.default = void 0));
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
  function a(i) {
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
  var s = a;
  return ((me.default = s), me);
}
var wr;
function xi() {
  if (wr) return ye;
  ((wr = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.default = void 0));
  var e = a(Qn()),
    r = a(Vi());
  function a(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var i = (0, e.default)("v5", 80, r.default);
  return ((ye.default = i), ye);
}
var be = {},
  Er;
function zi() {
  if (Er) return be;
  ((Er = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((be.default = e), be);
}
var we = {},
  Or;
function Ki() {
  if (Or) return we;
  ((Or = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.default = void 0));
  var e = r(Xe());
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function a(i) {
    if (!(0, e.default)(i)) throw TypeError("Invalid UUID");
    return parseInt(i.slice(14, 15), 16);
  }
  var s = a;
  return ((we.default = s), we);
}
var Rr;
function Hi() {
  return (
    Rr ||
      ((Rr = 1),
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
              return a.default;
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
        var r = u(Fi()),
          a = u(Li()),
          s = u(Gi()),
          i = u(xi()),
          o = u(zi()),
          t = u(Ki()),
          l = u(Xe()),
          c = u(Ye()),
          n = u(Zn());
        function u(f) {
          return f && f.__esModule ? f : { default: f };
        }
      })(ct)),
    ct
  );
}
var Pr;
function Ji() {
  if (Pr) return le;
  ((Pr = 1),
    Object.defineProperty(le, "__esModule", { value: !0 }),
    (le.createAdfRendererIframeProps = void 0));
  const e = Hi(),
    r = async (a, s) => {
      const i = await Ti(
          () => import("./index-Byf9Kz4g.js").then((u) => u.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        o = i.default || i,
        t = new URL(document.referrer).origin,
        l = `${t}/forge-apps/adf-renderer`,
        c = s || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        n = () => {
          var u, f;
          const h = document.getElementById(c),
            d = {
              type: "adf-document",
              document: (u = a.extension.macro) === null || u === void 0 ? void 0 : u.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: a.localId,
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
        { id: c, src: l, onLoad: n }
      );
    };
  return ((le.createAdfRendererIframeProps = r), le);
}
var Sr;
function ei() {
  if (Sr) return Y;
  ((Sr = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.view = void 0));
  const e = yi(),
    r = mi(),
    a = bi(),
    s = wi(),
    i = Ei(),
    o = qi(),
    t = Ai(),
    l = ji(),
    c = Ci(),
    n = Ji();
  return (
    (Y.view = {
      submit: e.submit,
      close: r.close,
      open: a.open,
      refresh: s.refresh,
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
var Ir;
function At() {
  return (
    Ir ||
      ((Ir = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(ei(), e));
      })(it)),
    it
  );
}
var dt = {},
  Ee = {},
  qr;
function Wi() {
  if (qr) return Ee;
  ((qr = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.router = void 0));
  const r = (0, b().getCallBridge)(),
    a = async (t) => {
      if (!t?.target) throw new Error("target is required for getUrl");
      const l = await r("getUrl", t);
      if (!l) throw new Error("Failed to get URL");
      try {
        return new URL(l);
      } catch (c) {
        throw new Error(`Failed to parse URL: ${l} (${c})`);
      }
    },
    s = (t) => {
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
  return ((Ee.router = { getUrl: a, navigate: s, open: i, reload: o }), Ee);
}
var Ar;
function Xi() {
  return (
    Ar ||
      ((Ar = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Wi(), e));
      })(dt)),
    dt
  );
}
var ft = {},
  Oe = {},
  jr;
function Yi() {
  if (jr) return Oe;
  ((jr = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.Modal = void 0));
  const e = b(),
    r = O(),
    a = (0, e.getCallBridge)(),
    s = () => {};
  class i {
    constructor(t) {
      var l, c;
      ((this.resource = t?.resource || null),
        (this.onClose = t?.onClose || s),
        (this.size = t?.size || "medium"),
        (this.context = t?.context || {}),
        (this.closeOnEscape = (l = t?.closeOnEscape) !== null && l !== void 0 ? l : !0),
        (this.closeOnOverlayClick =
          (c = t?.closeOnOverlayClick) !== null && c !== void 0 ? c : !0));
    }
    async open() {
      try {
        if (
          (await a("openModal", {
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
  return ((Oe.Modal = i), Oe);
}
var Mr;
function $i() {
  return (
    Mr ||
      ((Mr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Yi(), e));
      })(ft)),
    ft
  );
}
var S = {},
  T = {},
  Cr;
function Zi() {
  if (Cr) return T;
  ((Cr = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.productFetchApi = T.remoteFetchApi = void 0));
  const e = Xn(),
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
    a = (t) => {
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
    s = async (t) => {
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
        const u = a(n),
          { body: f, headers: h, isMultipartFormData: d } = await s(u),
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
          E = m ? (0, e.base64ToBlob)(_, v["content-type"]) : _;
        return new Response(E || null, { headers: v, status: y, statusText: g });
      };
      return { requestRemote: (c, n) => l(c, n) };
    };
  T.remoteFetchApi = i;
  const o = (t) => {
    const l = async (c, n, u) => {
      const f = a(u),
        { body: h, headers: d, isMultipartFormData: p } = await s(f);
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
          isAttachment: E,
        } = await t("fetchProduct", _),
        w = E ? (0, e.base64ToBlob)(v, g["content-type"]) : v;
      return new Response(w || null, { headers: g, status: m, statusText: y });
    };
    return {
      requestConfluence: (c, n) => l("confluence", c, n),
      requestJira: (c, n) => l("jira", c, n),
      requestBitbucket: (c, n) => l("bitbucket", c, n),
    };
  };
  return ((T.productFetchApi = o), T);
}
var Dr;
function Qi() {
  if (Dr) return S;
  Dr = 1;
  var e;
  (Object.defineProperty(S, "__esModule", { value: !0 }),
    (S.requestRemote = S.requestBitbucket = S.requestJira = S.requestConfluence = void 0));
  const r = b(),
    a = Zi();
  return (
    (e = (0, a.productFetchApi)((0, r.getCallBridge)())),
    (S.requestConfluence = e.requestConfluence),
    (S.requestJira = e.requestJira),
    (S.requestBitbucket = e.requestBitbucket),
    (S.requestRemote = (0, a.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    S
  );
}
var _t = {},
  Re = {},
  kr;
function eo() {
  if (kr) return Re;
  ((kr = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.showFlag = void 0));
  const e = b(),
    r = O(),
    a = (0, e.getCallBridge)(),
    s = (i) => {
      var o;
      if (!i.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = a("showFlag", { ...i, type: (o = i.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await t, a("closeFlag", { id: i.id })) };
    };
  return ((Re.showFlag = s), Re);
}
var Tr;
function to() {
  return (
    Tr ||
      ((Tr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = eo();
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
  Br;
function ro() {
  return (
    Br ||
      ((Br = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Yn(), e));
      })(vt)),
    vt
  );
}
var ht = {},
  Pe = {},
  Fr;
function no() {
  if (Fr) return Pe;
  ((Fr = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.realtime = void 0));
  const r = (0, b().getCallBridge)(),
    a = (t, l, c) => r("publishRealtimeChannel", { channelName: t, eventPayload: l, options: c }),
    s = (t, l, c) => r("subscribeRealtimeChannel", { channelName: t, onEvent: l, options: c }),
    i = (t, l, c) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: l, options: c, isGlobal: !0 }),
    o = (t, l, c) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: l, options: c, isGlobal: !0 });
  return ((Pe.realtime = { publish: a, subscribe: s, publishGlobal: i, subscribeGlobal: o }), Pe);
}
var gt = {},
  Ur;
function io() {
  return (
    Ur ||
      ((Ur = 1),
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
function oo() {
  return (
    Lr ||
      ((Lr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var r = no();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return r.realtime;
          },
        });
        var a = io();
        (Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return a.Jira;
          },
        }),
          Object.defineProperty(e, "Confluence", {
            enumerable: !0,
            get: function () {
              return a.Confluence;
            },
          }),
          Object.defineProperty(e, "Bitbucket", {
            enumerable: !0,
            get: function () {
              return a.Bitbucket;
            },
          }));
      })(ht)),
    ht
  );
}
var pt = {},
  Se = {},
  yt = {},
  Nr;
function ao() {
  return (
    Nr ||
      ((Nr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = b(),
          a = O(),
          s = 30,
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
              if (l.agentName.length > s) throw new Error("rovo agent name too long");
              if (l.agentKey.length > s) throw new Error("rovo agent key too long");
            }
            const c = o(l);
            if ((await i("openRovo", c)) === !1)
              throw new a.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(yt)),
    yt
  );
}
var Gr;
function so() {
  if (Gr) return Se;
  ((Gr = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.rovo = void 0));
  const e = ao();
  return ((Se.rovo = { open: e.open }), Se);
}
var Vr;
function uo() {
  return (
    Vr ||
      ((Vr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(so(), e));
      })(pt)),
    pt
  );
}
var q = {},
  xr;
function lo() {
  if (xr) return q;
  ((xr = 1),
    Object.defineProperty(q, "__esModule", { value: !0 }),
    (q.createTranslationFunction = q.getTranslations = q.resetTranslationsCache = void 0));
  const e = Wn(),
    r = At(),
    a = {
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
    s = new e.TranslationsGetter(a),
    i = () => {
      s.reset();
    };
  q.resetTranslationsCache = i;
  const o = async (l = null, c = { fallback: !0 }) => {
    let n = l;
    return (n || (n = (await r.view.getContext()).locale), await s.getTranslations(n, c));
  };
  q.getTranslations = o;
  const t = async (l = null) => {
    let c = l;
    c || (c = (await r.view.getContext()).locale);
    const n = new e.Translator(c, s);
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
var mt = {},
  Ie = {},
  zr;
function co() {
  if (zr) return Ie;
  ((zr = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.permissions = void 0));
  const r = (0, b().getCallBridge)(),
    a = async (c) => r("__permission__egressGet", c),
    s = async (c) => r("__permission__egressSet", c),
    i = async (c) => r("__permission__egressDeleteDomain", c),
    o = async (c) => r("__permission__egressDeleteGroup", c),
    t = async (c) => r("__permission__remoteGet", c),
    l = async (c) => r("__permission__remoteSet", c);
  return (
    (Ie.permissions = {
      egress: { get: a, set: s, deleteDomain: i, deleteGroup: o },
      remote: { get: t, set: l },
    }),
    Ie
  );
}
var Kr;
function fo() {
  return (
    Kr ||
      ((Kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(co(), e));
      })(mt)),
    mt
  );
}
var bt = {},
  wt = {},
  Et = {},
  qe = {},
  Ae = {},
  Hr;
function ti() {
  return (
    Hr ||
      ((Hr = 1),
      Object.defineProperty(Ae, "__esModule", { value: !0 }),
      (Ae.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Ae.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Ae
  );
}
var Jr;
function $e() {
  if (Jr) return qe;
  ((Jr = 1),
    Object.defineProperty(qe, "__esModule", { value: !0 }),
    (qe.checkRestrictedEnvironment = void 0));
  const e = O(),
    r = At(),
    a = ti(),
    s = async () => {
      const { environmentType: i } = await r.view.getContext();
      if (i === "PRODUCTION")
        throw new e.BridgeAPIError(a.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((qe.checkRestrictedEnvironment = s), qe);
}
var Wr;
function _o() {
  return (
    Wr ||
      ((Wr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = Ne(),
          a = O(),
          s = $e(),
          o = (0, b().getCallBridge)(),
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
              throw new a.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(f) || f.length === 0)
              throw new a.BridgeAPIError("objects array is required and must not be empty");
            const h = f.map((y, m) => {
                if (y instanceof Blob) return y;
                if (!(y && typeof y == "object" && "data" in y && typeof y.data == "string"))
                  throw new a.BridgeAPIError(
                    `Invalid object type at index ${m}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return t(y.data, y.mimeType);
                } catch {
                  throw new a.BridgeAPIError(
                    `Invalid base64 data at index ${m}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              d = await Promise.all(h.map((y) => l(y))),
              p = await (0, r.invoke)(u, { allObjectMetadata: d });
            if (!p || typeof p != "object")
              throw new a.BridgeAPIError("Invalid response from functionKey");
            const _ = new Map(),
              v = new Map();
            return (
              h.forEach((y, m) => {
                const E = d[m];
                (_.set(E.checksum, y), v.set(E.checksum, m));
              }),
              Object.entries(p).map(([y, m]) => {
                const { key: E, checksum: w } = m,
                  A = _.get(w),
                  V = v.get(w);
                return V === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: E,
                        error: `Index not found for checksum ${w}`,
                      }),
                      index: -1,
                    }
                  : A
                    ? {
                        promise: (async () => {
                          try {
                            const C = await fetch(y, {
                              method: "PUT",
                              body: A,
                              headers: {
                                "Content-Type": A.type || "application/octet-stream",
                                "Content-Length": A.size.toString(),
                              },
                            });
                            return {
                              success: C.ok,
                              key: E,
                              status: C.status,
                              error: C.ok ? void 0 : `Upload failed with status ${C.status}`,
                            };
                          } catch (C) {
                            return {
                              success: !1,
                              key: E,
                              status: 503,
                              error: C instanceof Error ? C.message : "Upload failed",
                            };
                          }
                        })(),
                        index: V,
                        objectType: A.type,
                        objectSize: A.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: E,
                          error: `Blob not found for checksum ${w}`,
                        }),
                        index: V,
                      };
              })
            );
          };
        e.createUploadPromises = c;
        const n = async ({ functionKey: u, objects: f }) => {
          (await (0, s.checkRestrictedEnvironment)(),
            o("trackObjectStoreAction", { action: "upload" }));
          const h = await (0, e.createUploadPromises)({ functionKey: u, objects: f });
          return await Promise.all(h.map((p) => p.promise));
        };
        e.upload = n;
      })(Et)),
    Et
  );
}
var je = {},
  Xr;
function vo() {
  if (Xr) return je;
  ((Xr = 1), Object.defineProperty(je, "__esModule", { value: !0 }), (je.deleteObjects = void 0));
  const e = Ne(),
    r = O(),
    a = $e(),
    i = (0, b().getCallBridge)(),
    o = async ({ functionKey: t, keys: l }) => {
      if (
        (await (0, a.checkRestrictedEnvironment)(),
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
  return ((je.deleteObjects = o), je);
}
var Me = {},
  Yr;
function ho() {
  if (Yr) return Me;
  ((Yr = 1), Object.defineProperty(Me, "__esModule", { value: !0 }), (Me.download = void 0));
  const e = Ne(),
    r = O(),
    a = $e(),
    i = (0, b().getCallBridge)(),
    o = async ({ functionKey: t, keys: l }) => {
      if (
        (await (0, a.checkRestrictedEnvironment)(),
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
  return ((Me.download = o), Me);
}
var Ce = {},
  $r;
function go() {
  if ($r) return Ce;
  (($r = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.getMetadata = void 0));
  const e = Ne(),
    r = O(),
    a = $e(),
    i = (0, b().getCallBridge)(),
    o = async ({ functionKey: t, keys: l }) => {
      if (
        (await (0, a.checkRestrictedEnvironment)(),
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
  return ((Ce.getMetadata = o), Ce);
}
var Zr;
function po() {
  return (
    Zr ||
      ((Zr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const r = _o();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return r.createUploadPromises;
          },
        });
        const a = vo(),
          s = ho(),
          i = go();
        e.objectStore = {
          upload: r.upload,
          download: s.download,
          getMetadata: i.getMetadata,
          delete: a.deleteObjects,
        };
      })(wt)),
    wt
  );
}
var Qr;
function yo() {
  return (
    Qr ||
      ((Qr = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(po(), e), r.__exportStar(ti(), e));
      })(bt)),
    bt
  );
}
var Ot = {},
  De = {},
  B = {},
  L = {},
  xe = {},
  en;
function mo() {
  if (en) return xe;
  ((en = 1), Object.defineProperty(xe, "__esModule", { value: !0 }));
  const e = M();
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
    setValues(s, i) {
      var o;
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
            s.source && t.user && this._setWarningState(i, t),
            e.SDKFlags.setFlags(this._sdkKey, (o = t.sdk_flags) !== null && o !== void 0 ? o : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(s) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.feature_gates,
        s,
      );
    }
    getConfig(s) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.dynamic_configs,
        s,
      );
    }
    getLayer(s) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.layer_configs,
        s,
      );
    }
    getParamStore(s) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.param_stores,
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
    _extractBootstrapMetadata(s, i) {
      if (s !== "Bootstrap") return null;
      const o = {};
      return (
        i.user && (o.user = i.user),
        i.sdkInfo && (o.generatorSDKInfo = i.sdkInfo),
        (o.lcut = i.time),
        o
      );
    }
    _getDetailedStoreResult(s, i) {
      let o = null;
      return (
        s && (o = s[i] ? s[i] : s[(0, e._DJB2)(i)]),
        { result: o, details: this._getDetails(o == null) }
      );
    }
    _setWarningState(s, i) {
      var o, t;
      const l = e.StableID.get(this._sdkKey);
      if (
        ((o = s.customIDs) === null || o === void 0 ? void 0 : o.stableID) !== l &&
        ((!((t = s.customIDs) === null || t === void 0) && t.stableID) || l)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in i) {
        const c = i.user;
        (0, e._getFullUserHash)(s) !== (0, e._getFullUserHash)(c) &&
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
      var i, o;
      const t = this.getCurrentSourceDetails();
      let l = t.reason;
      const c = (i = t.warnings) !== null && i !== void 0 ? i : [];
      (this._source === "Bootstrap" && c.length > 0 && (l = l + c[0]),
        l !== "Uninitialized" &&
          l !== "NoValues" &&
          (l = `${l}:${s ? "Unrecognized" : "Recognized"}`));
      const n =
        this._source === "Bootstrap" && (o = this._bootstrapMetadata) !== null && o !== void 0
          ? o
          : void 0;
      return (n && (t.bootstrapMetadata = n), Object.assign(Object.assign({}, t), { reason: l }));
    }
  };
  return ((xe.default = r), xe);
}
var N = {},
  ke = {},
  tn;
function bo() {
  if (tn) return ke;
  ((tn = 1),
    Object.defineProperty(ke, "__esModule", { value: !0 }),
    (ke._resolveDeltasResponse = void 0));
  const e = M(),
    r = 2;
  function a(t, l) {
    const c = (0, e._typedJsonParse)(l, "checksum", "DeltasEvaluationResponse");
    if (!c) return { hadBadDeltaChecksum: !0 };
    const n = s(t, c),
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
  ke._resolveDeltasResponse = a;
  function s(t, l) {
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
  return ke;
}
var rn;
function ri() {
  if (rn) return N;
  rn = 1;
  var e =
    (N && N.__awaiter) ||
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
  Object.defineProperty(N, "__esModule", { value: !0 });
  const r = M(),
    a = bo();
  class s extends r.NetworkCore {
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
        const h = (0, a._resolveDeltasResponse)(t, f.body);
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
  return ((N.default = s), N);
}
var Te = {},
  nn;
function wo() {
  if (nn) return Te;
  ((nn = 1),
    Object.defineProperty(Te, "__esModule", { value: !0 }),
    (Te._makeParamStoreGetter = void 0));
  const e = M(),
    r = { disableExposureLog: !0 };
  function a(u) {
    return u == null || u.disableExposureLog === !1;
  }
  function s(u, f) {
    return f != null && !(0, e._isTypeMatch)(u, f);
  }
  function i(u, f) {
    return u.value;
  }
  function o(u, f, h) {
    return u.getFeatureGate(f.gate_name, a(h) ? void 0 : r).value ? f.pass_value : f.fail_value;
  }
  function t(u, f, h, d) {
    const _ = u.getDynamicConfig(f.config_name, a(d) ? void 0 : r).get(f.param_name);
    return s(_, h) ? h : _;
  }
  function l(u, f, h, d) {
    const _ = u.getExperiment(f.experiment_name, a(d) ? void 0 : r).get(f.param_name);
    return s(_, h) ? h : _;
  }
  function c(u, f, h, d) {
    const _ = u.getLayer(f.layer_name, a(d) ? void 0 : r).get(f.param_name);
    return s(_, h) ? h : _;
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
var F = {},
  on;
function Eo() {
  if (on) return F;
  on = 1;
  var e =
    (F && F.__awaiter) ||
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
  (Object.defineProperty(F, "__esModule", { value: !0 }),
    (F.StatsigEvaluationsDataAdapter = void 0));
  const r = M(),
    a = ri();
  let s = class extends r.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(o, t, l) {
      (super.attach(o, t, l),
        l !== null && l instanceof a.default
          ? (this._network = l)
          : (this._network = new a.default(t ?? {})));
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
  return ((F.StatsigEvaluationsDataAdapter = s), F);
}
var an;
function Oo() {
  if (an) return L;
  an = 1;
  var e =
    (L && L.__awaiter) ||
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
  Object.defineProperty(L, "__esModule", { value: !0 });
  const r = M(),
    a = mo(),
    s = ri(),
    i = wo(),
    o = Eo();
  let t = class It extends r.StatsigClientBase {
    static instance(c) {
      const n = (0, r._getStatsigGlobal)().instance(c);
      return n instanceof It
        ? n
        : (r.Log.warn(
            (0, r._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new It(c ?? "", {}));
    }
    constructor(c, n, u = null) {
      var f, h;
      r.SDKType._setClientType(c, "javascript-client");
      const d = new s.default(u, (_) => {
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
        (this._store = new a.default(c)),
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
  return ((L.default = t), L);
}
var sn;
function Ro() {
  return (
    sn ||
      ((sn = 1),
      (function (e) {
        var r =
            (B && B.__createBinding) ||
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
          a =
            (B && B.__exportStar) ||
            function (t, l) {
              for (var c in t)
                c !== "default" && !Object.prototype.hasOwnProperty.call(l, c) && r(l, t, c);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const s = M(),
          i = Oo();
        ((e.StatsigClient = i.default), a(M(), e));
        const o = Object.assign((0, s._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = o;
      })(B)),
    B
  );
}
var Be = {},
  Fe = {},
  un;
function Po() {
  if (un) return Fe;
  ((un = 1),
    Object.defineProperty(Fe, "__esModule", { value: !0 }),
    (Fe.initFeatureFlags = void 0));
  const e = b(),
    r = O(),
    a = We(),
    s = 500,
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
    (Fe.initFeatureFlags = (0, a.withRateLimiter)(
      l,
      s,
      i,
      `Feature flags initialisation calls are rate limited at ${s}req/${i / 1e3}s`,
    )),
    Fe
  );
}
var ln;
function So() {
  if (ln) return Be;
  ((ln = 1),
    Object.defineProperty(Be, "__esModule", { value: !0 }),
    (Be.ForgeDataAdapter = void 0));
  const e = Po();
  class r {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(s, i, o) {
      var t;
      if (s) return s;
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
    getDataSync(s) {
      return this.cache;
    }
    async attach(s, i, o) {
      this.options = i;
    }
    async prefetchData() {}
    async setData(s) {}
    async setDataLegacy(s) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((Be.ForgeDataAdapter = r), Be);
}
var Rt = {},
  cn;
function ni() {
  return (
    cn ||
      ((cn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = e.ExtensionEnvironment = void 0),
          (function (a) {
            ((a.DEVELOPMENT = "DEVELOPMENT"),
              (a.STAGING = "STAGING"),
              (a.PRODUCTION = "PRODUCTION"));
          })(e.ExtensionEnvironment || (e.ExtensionEnvironment = {})));
        var r;
        ((function (a) {
          a.USER_ACCESS = "USER_ACCESS";
        })(r || (r = {})),
          (function (a) {
            a.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(Rt)),
    Rt
  );
}
var Ue = {},
  dn;
function Io() {
  if (dn) return Ue;
  ((dn = 1),
    Object.defineProperty(Ue, "__esModule", { value: !0 }),
    (Ue.trackFeatureFlagEvent = void 0));
  const e = b(),
    r = O(),
    a = ni(),
    s = We(),
    i = 500,
    o = 1e3 * 25,
    t = (0, e.getCallBridge)(),
    l = (n) => {
      if (!n || !n.type || !n.properties)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(n.type.toUpperCase() in a.FeatureFlagEventType))
        throw new r.BridgeAPIError("Event type is not supported");
      if (Object.values(n).some((u) => typeof u == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (n) => (l(n), t("trackFeatureFlagEvent", n));
  return (
    (Ue.trackFeatureFlagEvent = (0, s.withRateLimiter)(
      c,
      i,
      o,
      `Feature flags calls are rate limited at ${i}req/${o / 1e3}s`,
    )),
    Ue
  );
}
var fn;
function qo() {
  if (fn) return De;
  ((fn = 1),
    Object.defineProperty(De, "__esModule", { value: !0 }),
    (De.ForgeFeatureFlags = void 0));
  const e = Ro(),
    r = So(),
    a = ni(),
    s = Io();
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
        type: a.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: t,
          success: l,
        },
      };
      (0, s.trackFeatureFlagEvent)(c);
    }
  }
  return ((De.ForgeFeatureFlags = i), De);
}
var _n;
function Ao() {
  return (
    _n ||
      ((_n = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var r = qo();
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
var vn;
function jo() {
  return (
    vn ||
      ((vn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = P;
        var a = _i();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return a.NavigationTarget;
          },
        }),
          r.__exportStar(Ne(), e),
          r.__exportStar(pi(), e),
          r.__exportStar(At(), e),
          r.__exportStar(Xi(), e),
          r.__exportStar($i(), e),
          r.__exportStar(Qi(), e),
          r.__exportStar(to(), e),
          r.__exportStar(ro(), e),
          r.__exportStar(oo(), e),
          r.__exportStar(uo(), e),
          (e.i18n = r.__importStar(lo())),
          r.__exportStar(fo(), e),
          r.__exportStar(yo(), e),
          r.__exportStar(Ao(), e));
      })(Qe)),
    Qe
  );
}
var He = jo();
async function Le(e, r, a) {
  await He.showFlag({
    id: `checklist-${Date.now()}`,
    title: e,
    type: a,
    description: r,
    isAutoDismiss: !0,
  });
}
function Mo(e) {
  return new Date(e).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
  });
}
function hn() {
  return R.jsx("div", {
    className: "loading-overlay",
    children: R.jsx("div", { className: "loading-spinner" }),
  });
}
function Co() {
  const [e, r] = Ge.useState({
      checkList: "[]",
      issueId: "",
      updatedAt: new Date(),
      updateDisplayName: "",
      updateId: "",
    }),
    [a, s] = Ge.useState(!0),
    [i, o] = Ge.useState(!1);
  Ge.useEffect(() => {
    t();
  }, []);
  const t = async () => {
      try {
        const n = await He.invoke("getCheckList");
        r(n);
      } catch {
        await Le(
          "Checklist Loading Error",
          "Unable to load the checklist. Please try again later.",
          "error",
        );
      } finally {
        s(!1);
      }
    },
    l = async (n) => {
      try {
        o(!0);
        const u = await He.invoke(n ? "updateWithOptimisticLocking" : "update", e);
        u.error
          ? u.concurrent
            ? (await Le(
                "Concurrent Modification Detected",
                `User ${u.data?.updateDisplayName} has modified the checklist before you. Your changes could not be saved.`,
                "error",
              ),
              await t())
            : await Le(
                "Update Failed",
                u.message || "Unable to update the checklist. Please try again later.",
                "error",
              )
          : u.data &&
            (r(u.data),
            await Le(
              "Update Successful",
              "The checklist has been successfully updated",
              "success",
            ));
      } catch {
        await Le(
          "Update Error",
          "An error occurred while updating the checklist. Please try again later.",
          "error",
        );
      } finally {
        o(!1);
      }
    },
    c = (n) => {
      const u = [...JSON.parse(e.checkList)];
      ((u[n] = { ...u[n], done: !u[n].done }), r({ ...e, checkList: JSON.stringify(u) }));
    };
  return a
    ? R.jsx("div", { className: "checklist-container", children: R.jsx(hn, {}) })
    : R.jsxs("div", {
        className: "checklist-container",
        children: [
          i && R.jsx(hn, {}),
          R.jsxs("div", {
            className: "checklist-header",
            children: [
              R.jsx("h2", { children: "Issue Checklist" }),
              R.jsxs("div", {
                className: "last-update",
                children: ["Last updated by ", e.updateDisplayName, " on ", Mo(e.updatedAt)],
              }),
            ],
          }),
          R.jsx("div", {
            className: "checklist",
            children: JSON.parse(e.checkList).map((n, u) =>
              R.jsxs(
                "div",
                {
                  className: "checklist-item",
                  children: [
                    R.jsx("input", { type: "checkbox", checked: n.done, onChange: () => c(u) }),
                    R.jsx("span", { children: n.label }),
                  ],
                },
                u,
              ),
            ),
          }),
          R.jsxs("div", {
            className: "buttons",
            children: [
              R.jsx("button", { onClick: () => l(!0), children: "Update with Locking" }),
              R.jsx("button", { onClick: () => l(!1), children: "Update without Locking" }),
            ],
          }),
        ],
      });
}
const Do = document.getElementById("root"),
  ko = ii.createRoot(Do),
  gn = () => {
    ko.render(R.jsx(Co, {}));
  };
He.view.theme
  .enable()
  .then(() => {
    gn();
  })
  .catch((e) => {
    (console.error(e.message), gn());
  });
