import { r as dn, c as Zn } from "./react-dom-vendor-BOEB6BZs.js";
import { g as $n, a as ei, r as F } from "./client-core-vendor-kqFzl-gg.js";
import { r as ti } from "./lodash-vendor-wRvQIJsp.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList")
        for (const t of o.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && s(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(n) {
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
  function s(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = a(n);
    fetch(n.href, o);
  }
})();
var Xe = { exports: {} },
  z = {};
var jt;
function ri() {
  if (jt) return z;
  jt = 1;
  var e = dn(),
    r = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(l, c, i) {
    var u,
      f = {},
      _ = null,
      d = null;
    (i !== void 0 && (_ = "" + i),
      c.key !== void 0 && (_ = "" + c.key),
      c.ref !== void 0 && (d = c.ref));
    for (u in c) s.call(c, u) && !o.hasOwnProperty(u) && (f[u] = c[u]);
    if (l && l.defaultProps) for (u in ((c = l.defaultProps), c)) f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: r, type: l, key: _, ref: d, props: f, _owner: n.current };
  }
  return ((z.Fragment = a), (z.jsx = t), (z.jsxs = t), z);
}
var St;
function ni() {
  return (St || ((St = 1), (Xe.exports = ri())), Xe.exports);
}
var m = ni(),
  C = dn();
const ii = $n(C);
var Ye = {},
  Et = function (e, r) {
    return (
      (Et =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (a, s) {
            a.__proto__ = s;
          }) ||
        function (a, s) {
          for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (a[n] = s[n]);
        }),
      Et(e, r)
    );
  };
function fn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Et(e, r);
  function a() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
}
var Ve = function () {
  return (
    (Ve =
      Object.assign ||
      function (r) {
        for (var a, s = 1, n = arguments.length; s < n; s++) {
          a = arguments[s];
          for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (r[o] = a[o]);
        }
        return r;
      }),
    Ve.apply(this, arguments)
  );
};
function hn(e, r) {
  var a = {};
  for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && r.indexOf(s) < 0 && (a[s] = e[s]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, s = Object.getOwnPropertySymbols(e); n < s.length; n++)
      r.indexOf(s[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, s[n]) &&
        (a[s[n]] = e[s[n]]);
  return a;
}
function gn(e, r, a, s) {
  var n = arguments.length,
    o = n < 3 ? r : s === null ? (s = Object.getOwnPropertyDescriptor(r, a)) : s,
    t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, r, a, s);
  else
    for (var l = e.length - 1; l >= 0; l--)
      (t = e[l]) && (o = (n < 3 ? t(o) : n > 3 ? t(r, a, o) : t(r, a)) || o);
  return (n > 3 && o && Object.defineProperty(r, a, o), o);
}
function _n(e, r) {
  return function (a, s) {
    r(a, s, e);
  };
}
function vn(e, r, a, s, n, o) {
  function t(v) {
    if (v !== void 0 && typeof v != "function") throw new TypeError("Function expected");
    return v;
  }
  for (
    var l = s.kind,
      c = l === "getter" ? "get" : l === "setter" ? "set" : "value",
      i = !r && e ? (s.static ? e : e.prototype) : null,
      u = r || (i ? Object.getOwnPropertyDescriptor(i, s.name) : {}),
      f,
      _ = !1,
      d = a.length - 1;
    d >= 0;
    d--
  ) {
    var p = {};
    for (var h in s) p[h] = h === "access" ? {} : s[h];
    for (var h in s.access) p.access[h] = s.access[h];
    p.addInitializer = function (v) {
      if (_) throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(t(v || null));
    };
    var g = (0, a[d])(l === "accessor" ? { get: u.get, set: u.set } : u[c], p);
    if (l === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((f = t(g.get)) && (u.get = f),
        (f = t(g.set)) && (u.set = f),
        (f = t(g.init)) && n.unshift(f));
    } else (f = t(g)) && (l === "field" ? n.unshift(f) : (u[c] = f));
  }
  (i && Object.defineProperty(i, s.name, u), (_ = !0));
}
function pn(e, r, a) {
  for (var s = arguments.length > 2, n = 0; n < r.length; n++)
    a = s ? r[n].call(e, a) : r[n].call(e);
  return s ? a : void 0;
}
function yn(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function mn(e, r, a) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: a ? "".concat(a, " ", r) : r })
  );
}
function bn(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function wn(e, r, a, s) {
  function n(o) {
    return o instanceof a
      ? o
      : new a(function (t) {
          t(o);
        });
  }
  return new (a || (a = Promise))(function (o, t) {
    function l(u) {
      try {
        i(s.next(u));
      } catch (f) {
        t(f);
      }
    }
    function c(u) {
      try {
        i(s.throw(u));
      } catch (f) {
        t(f);
      }
    }
    function i(u) {
      u.done ? o(u.value) : n(u.value).then(l, c);
    }
    i((s = s.apply(e, r || [])).next());
  });
}
function En(e, r) {
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
    n,
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
  function l(i) {
    return function (u) {
      return c([i, u]);
    };
  }
  function c(i) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; t && ((t = 0), i[0] && (a = 0)), a; )
      try {
        if (
          ((s = 1),
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
            return (a.label++, { value: i[1], done: !1 });
          case 5:
            (a.label++, (n = i[1]), (i = [0]));
            continue;
          case 7:
            ((i = a.ops.pop()), a.trys.pop());
            continue;
          default:
            if (
              ((o = a.trys), !(o = o.length > 0 && o[o.length - 1]) && (i[0] === 6 || i[0] === 2))
            ) {
              a = 0;
              continue;
            }
            if (i[0] === 3 && (!o || (i[1] > o[0] && i[1] < o[3]))) {
              a.label = i[1];
              break;
            }
            if (i[0] === 6 && a.label < o[1]) {
              ((a.label = o[1]), (o = i));
              break;
            }
            if (o && a.label < o[2]) {
              ((a.label = o[2]), a.ops.push(i));
              break;
            }
            (o[2] && a.ops.pop(), a.trys.pop());
            continue;
        }
        i = r.call(e, a);
      } catch (u) {
        ((i = [6, u]), (n = 0));
      } finally {
        s = o = 0;
      }
    if (i[0] & 5) throw i[1];
    return { value: i[0] ? i[1] : void 0, done: !0 };
  }
}
var He = Object.create
  ? function (e, r, a, s) {
      s === void 0 && (s = a);
      var n = Object.getOwnPropertyDescriptor(r, a);
      ((!n || ("get" in n ? !r.__esModule : n.writable || n.configurable)) &&
        (n = {
          enumerable: !0,
          get: function () {
            return r[a];
          },
        }),
        Object.defineProperty(e, s, n));
    }
  : function (e, r, a, s) {
      (s === void 0 && (s = a), (e[s] = r[a]));
    };
function Rn(e, r) {
  for (var a in e) a !== "default" && !Object.prototype.hasOwnProperty.call(r, a) && He(r, e, a);
}
function ze(e) {
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
function Pt(e, r) {
  var a = typeof Symbol == "function" && e[Symbol.iterator];
  if (!a) return e;
  var s = a.call(e),
    n,
    o = [],
    t;
  try {
    for (; (r === void 0 || r-- > 0) && !(n = s.next()).done; ) o.push(n.value);
  } catch (l) {
    t = { error: l };
  } finally {
    try {
      n && !n.done && (a = s.return) && a.call(s);
    } finally {
      if (t) throw t.error;
    }
  }
  return o;
}
function On() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(Pt(arguments[r]));
  return e;
}
function Pn() {
  for (var e = 0, r = 0, a = arguments.length; r < a; r++) e += arguments[r].length;
  for (var s = Array(e), n = 0, r = 0; r < a; r++)
    for (var o = arguments[r], t = 0, l = o.length; t < l; t++, n++) s[n] = o[t];
  return s;
}
function xn(e, r, a) {
  if (a || arguments.length === 2)
    for (var s = 0, n = r.length, o; s < n; s++)
      (o || !(s in r)) && (o || (o = Array.prototype.slice.call(r, 0, s)), (o[s] = r[s]));
  return e.concat(o || Array.prototype.slice.call(r));
}
function G(e) {
  return this instanceof G ? ((this.v = e), this) : new G(e);
}
function jn(e, r, a) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = a.apply(e, r || []),
    n,
    o = [];
  return (
    (n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    l("next"),
    l("throw"),
    l("return", t),
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
  function l(d, p) {
    s[d] &&
      ((n[d] = function (h) {
        return new Promise(function (g, v) {
          o.push([d, h, g, v]) > 1 || c(d, h);
        });
      }),
      p && (n[d] = p(n[d])));
  }
  function c(d, p) {
    try {
      i(s[d](p));
    } catch (h) {
      _(o[0][3], h);
    }
  }
  function i(d) {
    d.value instanceof G ? Promise.resolve(d.value.v).then(u, f) : _(o[0][2], d);
  }
  function u(d) {
    c("next", d);
  }
  function f(d) {
    c("throw", d);
  }
  function _(d, p) {
    (d(p), o.shift(), o.length && c(o[0][0], o[0][1]));
  }
}
function Sn(e) {
  var r, a;
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
  function s(n, o) {
    r[n] = e[n]
      ? function (t) {
          return (a = !a) ? { value: G(e[n](t)), done: !1 } : o ? o(t) : t;
        }
      : o;
  }
}
function Cn(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    a;
  return r
    ? r.call(e)
    : ((e = typeof ze == "function" ? ze(e) : e[Symbol.iterator]()),
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
          ((t = e[o](t)), n(l, c, t.done, t.value));
        });
      };
  }
  function n(o, t, l, c) {
    Promise.resolve(c).then(function (i) {
      o({ value: i, done: l });
    }, t);
  }
}
function In(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var oi = Object.create
    ? function (e, r) {
        Object.defineProperty(e, "default", { enumerable: !0, value: r });
      }
    : function (e, r) {
        e.default = r;
      },
  Rt = function (e) {
    return (
      (Rt =
        Object.getOwnPropertyNames ||
        function (r) {
          var a = [];
          for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (a[a.length] = s);
          return a;
        }),
      Rt(e)
    );
  };
function Bn(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var a = Rt(e), s = 0; s < a.length; s++) a[s] !== "default" && He(r, e, a[s]);
  return (oi(r, e), r);
}
function Fn(e) {
  return e && e.__esModule ? e : { default: e };
}
function An(e, r, a, s) {
  if (a === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !s : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return a === "m" ? s : a === "a" ? s.call(e) : s ? s.value : r.get(e);
}
function qn(e, r, a, s, n) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (s === "a" ? n.call(e, a) : n ? (n.value = a) : r.set(e, a), a);
}
function Mn(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function Dn(e, r, a) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var s, n;
    if (a) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      s = r[Symbol.asyncDispose];
    }
    if (s === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((s = r[Symbol.dispose]), a && (n = s));
    }
    if (typeof s != "function") throw new TypeError("Object not disposable.");
    (n &&
      (s = function () {
        try {
          n.call(this);
        } catch (o) {
          return Promise.reject(o);
        }
      }),
      e.stack.push({ value: r, dispose: s, async: a }));
  } else a && e.stack.push({ async: !0 });
  return r;
}
var ai =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, a) {
        var s = new Error(a);
        return ((s.name = "SuppressedError"), (s.error = e), (s.suppressed = r), s);
      };
function Tn(e) {
  function r(o) {
    ((e.error = e.hasError ? new ai(o, e.error, "An error was suppressed during disposal.") : o),
      (e.hasError = !0));
  }
  var a,
    s = 0;
  function n() {
    for (; (a = e.stack.pop()); )
      try {
        if (!a.async && s === 1) return ((s = 0), e.stack.push(a), Promise.resolve().then(n));
        if (a.dispose) {
          var o = a.dispose.call(a.value);
          if (a.async)
            return (
              (s |= 2),
              Promise.resolve(o).then(n, function (t) {
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
function kn(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (a, s, n, o, t) {
        return s
          ? r
            ? ".jsx"
            : ".js"
          : n && (!o || !t)
            ? a
            : n + o + "." + t.toLowerCase() + "js";
      })
    : e;
}
const si = {
    __extends: fn,
    __assign: Ve,
    __rest: hn,
    __decorate: gn,
    __param: _n,
    __esDecorate: vn,
    __runInitializers: pn,
    __propKey: yn,
    __setFunctionName: mn,
    __metadata: bn,
    __awaiter: wn,
    __generator: En,
    __createBinding: He,
    __exportStar: Rn,
    __values: ze,
    __read: Pt,
    __spread: On,
    __spreadArrays: Pn,
    __spreadArray: xn,
    __await: G,
    __asyncGenerator: jn,
    __asyncDelegator: Sn,
    __asyncValues: Cn,
    __makeTemplateObject: In,
    __importStar: Bn,
    __importDefault: Fn,
    __classPrivateFieldGet: An,
    __classPrivateFieldSet: qn,
    __classPrivateFieldIn: Mn,
    __addDisposableResource: Dn,
    __disposeResources: Tn,
    __rewriteRelativeImportExtension: kn,
  },
  ui = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Dn,
        get __assign() {
          return Ve;
        },
        __asyncDelegator: Sn,
        __asyncGenerator: jn,
        __asyncValues: Cn,
        __await: G,
        __awaiter: wn,
        __classPrivateFieldGet: An,
        __classPrivateFieldIn: Mn,
        __classPrivateFieldSet: qn,
        __createBinding: He,
        __decorate: gn,
        __disposeResources: Tn,
        __esDecorate: vn,
        __exportStar: Rn,
        __extends: fn,
        __generator: En,
        __importDefault: Fn,
        __importStar: Bn,
        __makeTemplateObject: In,
        __metadata: bn,
        __param: _n,
        __propKey: yn,
        __read: Pt,
        __rest: hn,
        __rewriteRelativeImportExtension: kn,
        __runInitializers: pn,
        __setFunctionName: mn,
        __spread: On,
        __spreadArray: xn,
        __spreadArrays: Pn,
        __values: ze,
        default: si,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  x = ei(ui);
var H = {},
  Ct;
function li() {
  return (
    Ct ||
      ((Ct = 1),
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
  W = {},
  It;
function O() {
  if (It) return W;
  ((It = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.BridgeAPIError = void 0));
  class e extends Error {}
  return ((W.BridgeAPIError = e), W);
}
var Bt;
function R() {
  if (Bt) return K;
  ((Bt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.getCallBridge = void 0));
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
  Ft;
function Ke() {
  if (Ft) return J;
  ((Ft = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.withRateLimiter = void 0));
  const e = O(),
    r = (a, s, n, o) => {
      let t = Date.now(),
        l = 0;
      return async (...c) => {
        const i = Date.now();
        if ((i - t > n && ((t = i), (l = 0)), l >= s))
          throw new e.BridgeAPIError(o || "Too many invocations.");
        return ((l = l + 1), a(...c));
      };
    };
  return ((J.withRateLimiter = r), J);
}
var At;
function ci() {
  return (
    At ||
      ((At = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = R(),
          a = O(),
          s = Ke(),
          n = (0, r.getCallBridge)(),
          o = (c) => {
            if (c && Object.values(c).some((i) => typeof i == "function"))
              throw new a.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (c, i) => {
            if (typeof c != "string") throw new a.BridgeAPIError("functionKey must be a string!");
            return (o(i), n("invoke", { functionKey: c, payload: i }));
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
      })($e)),
    $e
  );
}
var qt;
function Le() {
  return (
    qt ||
      ((qt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), x.__exportStar(ci(), e));
      })(Ze)),
    Ze
  );
}
var et = {},
  Q = {},
  tt = {},
  Mt;
function Un() {
  return (
    Mt ||
      ((Mt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = R(),
          a = O(),
          s = Ke(),
          n = 500,
          o = 25,
          t = 1e3 * o;
        (function (f) {
          ((f.REMOTE = "Remote"), (f.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const l = (0, r.getCallBridge)(),
          c = (f) => {
            if (f && Object.values(f).some((_) => typeof _ == "function"))
              throw new a.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          i = (f) => async (_) => {
            c(_);
            const d = { ..._, invokeType: `ui-${f.toLowerCase()}-fetch` },
              p = await l("invoke", d),
              { success: h, payload: g, error: v } = p ?? {},
              y = { ...(h ? g : v) };
            if (y && y.headers)
              for (const b in y.headers)
                Array.isArray(y.headers[b]) && (y.headers[b] = y.headers[b].join(","));
            return y;
          },
          u = (f) => {
            const _ = i(f);
            return (0, s.withRateLimiter)(
              _,
              n,
              t,
              `${f} invocation calls are rate limited at ${n}/${o}s`,
            );
          };
        e._invokeEndpointFn = u;
      })(tt)),
    tt
  );
}
var Dt;
function di() {
  if (Dt) return Q;
  ((Dt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.invokeRemote = void 0));
  const e = Un(),
    r = (a) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(a);
  return ((Q.invokeRemote = r), Q);
}
var X = {},
  Tt;
function fi() {
  if (Tt) return X;
  ((Tt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.invokeService = void 0));
  const e = Un(),
    r = (a) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(a);
  return ((X.invokeService = r), X);
}
var kt;
function hi() {
  return (
    kt ||
      ((kt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = x;
        (r.__exportStar(di(), e), r.__exportStar(fi(), e));
      })(et)),
    et
  );
}
var rt = {},
  Y = {},
  Z = {},
  Ut;
function gi() {
  if (Ut) return Z;
  ((Ut = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.submit = void 0));
  const e = R(),
    r = O(),
    a = (0, e.getCallBridge)(),
    s = async (n) => {
      if ((await a("submit", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((Z.submit = s), Z);
}
var $ = {},
  Lt;
function _i() {
  if (Lt) return $;
  ((Lt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.close = void 0));
  const e = R(),
    r = O(),
    a = (0, e.getCallBridge)(),
    s = async (n) => {
      try {
        if ((await a("close", n)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return (($.close = s), $);
}
var ee = {},
  Nt;
function vi() {
  if (Nt) return ee;
  ((Nt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.open = void 0));
  const e = R(),
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
  return ((ee.open = s), ee);
}
var te = {},
  Gt;
function pi() {
  if (Gt) return te;
  ((Gt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.refresh = void 0));
  const e = R(),
    r = O(),
    a = (0, e.getCallBridge)(),
    s = async (n) => {
      if ((await a("refresh", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((te.refresh = s), te);
}
var re = {},
  Vt;
function yi() {
  if (Vt) return re;
  ((Vt = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.createHistory = void 0));
  const r = (0, R().getCallBridge)(),
    a = async () => {
      const s = await r("createHistory");
      return (
        s.listen((n) => {
          s.location = n;
        }),
        s
      );
    };
  return ((re.createHistory = a), re);
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
var q = {},
  Ht;
function mi() {
  if (Ht) return q;
  ((Ht = 1),
    Object.defineProperty(q, "__esModule", { value: !0 }),
    (q.TranslationsGetter = q.TranslationGetterError = void 0));
  const e = (s, n) => {
    s.includes(n) || s.push(n);
  };
  class r extends Error {
    constructor(n) {
      (super(n), (this.name = "TranslationGetterError"));
    }
  }
  q.TranslationGetterError = r;
  class a {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(n) {
      this.resourcesAccessor = n;
    }
    async getTranslations(n, o = { fallback: !0 }) {
      const t = await this.getI18nInfoConfig(),
        { fallback: l } = o;
      if (!l) {
        let c;
        return (
          t.locales.includes(n) && (c = await this.getTranslationResource(n)),
          { translations: c ?? null, locale: n }
        );
      }
      for (const c of this.getLocaleLookupOrder(n, t)) {
        const i = await this.getTranslationResource(c);
        if (i) return { translations: i, locale: c };
      }
      return { translations: null, locale: n };
    }
    async getTranslationsByLocaleLookupOrder(n) {
      const o = await this.getI18nInfoConfig(),
        t = this.getLocaleLookupOrder(n, o);
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
      const { locales: t, fallback: l } = o,
        c = [n],
        i = l[n];
      return (
        i && Array.isArray(i) && i.length > 0 && c.push(...i),
        e(c, o.fallback.default),
        c.filter((u) => t.includes(u))
      );
    }
  }
  return ((q.TranslationsGetter = a), q);
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
        const a = x.__importDefault(ti()),
          s = (o, t, l) => {
            const c = o[l];
            return c ? (0, e.getTranslationValueFromContent)(c, t) : null;
          };
        e.getTranslationValue = s;
        const n = (o, t) => {
          let l = o[t];
          if (!l) {
            const c = t.split(".");
            c.length > 1 && (l = (0, a.default)(o, c, null));
          }
          return typeof l == "string" ? l : null;
        };
        e.getTranslationValueFromContent = n;
      })(it)),
    it
  );
}
var Wt;
function bi() {
  if (Wt) return ie;
  ((Wt = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.Translator = void 0));
  const e = Nn();
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
        for (const { translations: o } of this.localeLookupOrderedTranslations) {
          const t = (0, e.getTranslationValueFromContent)(o, s);
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
  return ((ie.Translator = r), ie);
}
var oe = {},
  Jt;
function wi() {
  if (Jt) return oe;
  ((Jt = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.ensureLocale = void 0));
  const e = Ln(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    a = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    s = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (o, t) => {
        const [l] = t.split("-");
        return (o[l] || (o[l] = t), o);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    n = (o) => {
      const t = o.replace("_", "-");
      return r.has(t) ? t : (s[t] ?? a[t] ?? null);
    };
  return ((oe.ensureLocale = n), oe);
}
var ot = {},
  Qt;
function Ei() {
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
          a = (i) => typeof i?.i18n == "string",
          s = (i) => i.startsWith("connect-"),
          n = (i) => i.startsWith("core:"),
          o = (i) => {
            const u = new Set(),
              f = (_, d) =>
                !r(_) || u.has(_)
                  ? []
                  : (u.add(_),
                    Object.entries(_).flatMap(([p, h]) => {
                      const g = [...d, p];
                      return a(h)
                        ? [{ propertyPath: g, key: h.i18n }]
                        : Array.isArray(h)
                          ? h.flatMap((v) => f(v, g))
                          : f(h, g);
                    }));
            return f(i, []);
          },
          t = (i) =>
            Object.entries(i).flatMap(([u, f]) =>
              !s(u) && !n(u) && f && Array.isArray(f) && f.length > 0 ? f.map((_) => [_, u]) : [],
            );
        e.getI18nSupportedModuleEntries = t;
        const l = (i) => {
          const u = new Set();
          for (const f of (0, e.getI18nSupportedModuleEntries)(i)) {
            const _ = o(f[0]);
            for (const { key: d } of _) u.add(d);
          }
          return u.size > 0 ? Array.from(u) : [];
        };
        e.extractI18nKeysFromModules = l;
        const c = (i) => {
          const u = [];
          for (const f of (0, e.getI18nSupportedModuleEntries)(i)) {
            const _ = o(f[0]);
            for (const d of _) u.push({ moduleName: f[1], ...d });
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
function Ri() {
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
        const r = x;
        (r.__exportStar(Ln(), e),
          r.__exportStar(mi(), e),
          r.__exportStar(bi(), e),
          r.__exportStar(wi(), e));
        var a = Nn();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return a.getTranslationValue;
          },
        });
        var s = Ei();
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
          r.__exportStar(Ri(), e));
      })(nt)),
    nt
  );
}
var Zt;
function Oi() {
  if (Zt) return ne;
  ((Zt = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.getContext = void 0));
  const e = R(),
    r = Gn(),
    a = (0, e.getCallBridge)(),
    s = async () => {
      var n;
      const o = await a("getContext"),
        t = o?.locale;
      return (t && (o.locale = (n = (0, r.ensureLocale)(t)) !== null && n !== void 0 ? n : t), o);
    };
  return ((ne.getContext = s), ne);
}
var ae = {},
  $t;
function Pi() {
  if ($t) return ae;
  (($t = 1),
    Object.defineProperty(ae, "__esModule", { value: !0 }),
    (ae.changeWindowTitle = void 0));
  const e = R(),
    r = O(),
    a = (0, e.getCallBridge)(),
    s = async (n) => {
      try {
        await a("changeWindowTitle", n);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((ae.changeWindowTitle = s), ae);
}
var se = {},
  er;
function xi() {
  if (er) return se;
  ((er = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.theme = void 0));
  const r = (0, R().getCallBridge)();
  return ((se.theme = { enable: () => r("enableTheming") }), se);
}
var ue = {},
  le = {},
  st = {},
  M = {},
  tr;
function Vn() {
  if (tr) return M;
  ((tr = 1),
    Object.defineProperty(M, "__esModule", { value: !0 }),
    (M.blobToBase64 = M.base64ToBlob = void 0));
  const e = (a, s) => {
    if (!a) return null;
    const n = a.includes(";base64") ? a.split(",")[1] : a,
      o = atob(n),
      t = new Array(o.length);
    for (let c = 0; c < o.length; c++) t[c] = o.charCodeAt(c);
    const l = new Uint8Array(t);
    return new Blob([l], { type: s });
  };
  M.base64ToBlob = e;
  const r = (a) =>
    new Promise((s, n) => {
      const o = new FileReader();
      ((o.onloadend = () => {
        s(o.result);
      }),
        (o.onerror = n),
        o.readAsDataURL(a));
    });
  return ((M.blobToBase64 = r), M);
}
var rr;
function ji() {
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
          a = (i) => {
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
          o = async (i) => {
            if (i instanceof Blob) return { ...(await s(i)), __isBlobData: !0 };
            if (Array.isArray(i))
              return Promise.all(i.map((u) => (0, e.serialiseBlobsInPayload)(u)));
            if (i && a(i)) {
              const u = await Promise.all(
                Object.entries(i).map(async ([f, _]) => [
                  f,
                  await (0, e.serialiseBlobsInPayload)(_),
                ]),
              );
              return Object.fromEntries(u);
            }
            return i;
          };
        e.serialiseBlobsInPayload = o;
        const t = (i) => {
          if (i && a(i) && "__isBlobData" in i) {
            const u = i;
            return n({ data: u.data, type: u.type });
          }
          if (Array.isArray(i)) return i.map((u) => (0, e.deserialiseBlobsInPayload)(u));
          if (i && a(i)) {
            const u = {};
            for (const [f, _] of Object.entries(i)) u[f] = (0, e.deserialiseBlobsInPayload)(_);
            return u;
          }
          return i;
        };
        e.deserialiseBlobsInPayload = t;
        const l = (i) =>
          i instanceof Blob
            ? !0
            : Array.isArray(i)
              ? i.some((u) => (0, e.containsBlobs)(u))
              : i && a(i)
                ? Object.values(i).some((u) => (0, e.containsBlobs)(u))
                : !1;
        e.containsBlobs = l;
        const c = (i) =>
          i && a(i) && "__isBlobData" in i
            ? !0
            : Array.isArray(i)
              ? i.some((u) => (0, e.containsSerialisedBlobs)(u))
              : i && a(i)
                ? Object.values(i).some((u) => (0, e.containsSerialisedBlobs)(u))
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
  const e = R(),
    r = ji(),
    a = (0, e.getCallBridge)(),
    s = async (o, t) => {
      let l = t;
      return (
        (0, r.containsBlobs)(t) && (l = await (0, r.serialiseBlobsInPayload)(t)),
        a("emit", { event: o, payload: l })
      );
    },
    n = (o, t) =>
      a("on", {
        event: o,
        callback: (c) => {
          let i = c;
          return (
            (0, r.containsSerialisedBlobs)(c) && (i = (0, r.deserialiseBlobsInPayload)(c)),
            t(i)
          );
        },
      });
  return ((le.events = { emit: s, on: n }), le);
}
var ir;
function Si() {
  if (ir) return ue;
  ((ir = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.emitReadyEvent = void 0));
  const e = zn(),
    r = Jn(),
    a = "EXTENSION_READY",
    s = async () => {
      const n = await r.view.getContext();
      await e.events.emit(a, { localId: n.localId });
    };
  return ((ue.emitReadyEvent = s), ue);
}
const Ci = "modulepreload",
  Ii = function (e, r) {
    return new URL(e, r).href;
  },
  or = {},
  Bi = function (r, a, s) {
    let n = Promise.resolve();
    if (a && a.length > 0) {
      let i = function (u) {
        return Promise.all(
          u.map((f) =>
            Promise.resolve(f).then(
              (_) => ({ status: "fulfilled", value: _ }),
              (_) => ({ status: "rejected", reason: _ }),
            ),
          ),
        );
      };
      const t = document.getElementsByTagName("link"),
        l = document.querySelector("meta[property=csp-nonce]"),
        c = l?.nonce || l?.getAttribute("nonce");
      n = i(
        a.map((u) => {
          if (((u = Ii(u, s)), u in or)) return;
          or[u] = !0;
          const f = u.endsWith(".css"),
            _ = f ? '[rel="stylesheet"]' : "";
          if (s)
            for (let p = t.length - 1; p >= 0; p--) {
              const h = t[p];
              if (h.href === u && (!f || h.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${u}"]${_}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = f ? "stylesheet" : Ci),
            f || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = u),
            c && d.setAttribute("nonce", c),
            document.head.appendChild(d),
            f)
          )
            return new Promise((p, h) => {
              (d.addEventListener("load", p),
                d.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${u}`))));
            });
        }),
      );
    }
    function o(t) {
      const l = new Event("vite:preloadError", { cancelable: !0 });
      if (((l.payload = t), window.dispatchEvent(l), !l.defaultPrevented)) throw t;
    }
    return n.then((t) => {
      for (const l of t || []) l.status === "rejected" && o(l.reason);
      return r().catch(o);
    });
  };
var ce = {},
  ut = {},
  de = {},
  Ne = {},
  ar;
function Hn() {
  if (ar) return Ne;
  ((ar = 1), Object.defineProperty(Ne, "__esModule", { value: !0 }), (Ne.default = a));
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
  return Ne;
}
var U = {},
  fe = {},
  he = {},
  sr;
function Fi() {
  if (sr) return he;
  ((sr = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((he.default = e), he);
}
var ur;
function We() {
  if (ur) return fe;
  ((ur = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  var e = r(Fi());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function a(n) {
    return typeof n == "string" && e.default.test(n);
  }
  var s = a;
  return ((fe.default = s), fe);
}
var lr;
function Je() {
  if (lr) return U;
  ((lr = 1),
    Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.default = void 0),
    (U.unsafeStringify = s));
  var e = r(We());
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
  function n(t, l = 0) {
    const c = s(t, l);
    if (!(0, e.default)(c)) throw TypeError("Stringified UUID is invalid");
    return c;
  }
  var o = n;
  return ((U.default = o), U);
}
var cr;
function Ai() {
  if (cr) return de;
  ((cr = 1), Object.defineProperty(de, "__esModule", { value: !0 }), (de.default = void 0));
  var e = a(Hn()),
    r = Je();
  function a(i) {
    return i && i.__esModule ? i : { default: i };
  }
  let s,
    n,
    o = 0,
    t = 0;
  function l(i, u, f) {
    let _ = (u && f) || 0;
    const d = u || new Array(16);
    i = i || {};
    let p = i.node || s,
      h = i.clockseq !== void 0 ? i.clockseq : n;
    if (p == null || h == null) {
      const E = i.random || (i.rng || e.default)();
      (p == null && (p = s = [E[0] | 1, E[1], E[2], E[3], E[4], E[5]]),
        h == null && (h = n = ((E[6] << 8) | E[7]) & 16383));
    }
    let g = i.msecs !== void 0 ? i.msecs : Date.now(),
      v = i.nsecs !== void 0 ? i.nsecs : t + 1;
    const y = g - o + (v - t) / 1e4;
    if (
      (y < 0 && i.clockseq === void 0 && (h = (h + 1) & 16383),
      (y < 0 || g > o) && i.nsecs === void 0 && (v = 0),
      v >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((o = g), (t = v), (n = h), (g += 122192928e5));
    const b = ((g & 268435455) * 1e4 + v) % 4294967296;
    ((d[_++] = (b >>> 24) & 255),
      (d[_++] = (b >>> 16) & 255),
      (d[_++] = (b >>> 8) & 255),
      (d[_++] = b & 255));
    const w = ((g / 4294967296) * 1e4) & 268435455;
    ((d[_++] = (w >>> 8) & 255),
      (d[_++] = w & 255),
      (d[_++] = ((w >>> 24) & 15) | 16),
      (d[_++] = (w >>> 16) & 255),
      (d[_++] = (h >>> 8) | 128),
      (d[_++] = h & 255));
    for (let E = 0; E < 6; ++E) d[_ + E] = p[E];
    return u || (0, r.unsafeStringify)(d);
  }
  var c = l;
  return ((de.default = c), de);
}
var ge = {},
  B = {},
  _e = {},
  dr;
function Kn() {
  if (dr) return _e;
  ((dr = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e = r(We());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function a(n) {
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
  var s = a;
  return ((_e.default = s), _e);
}
var fr;
function Wn() {
  if (fr) return B;
  ((fr = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.URL = B.DNS = void 0),
    (B.default = t));
  var e = Je(),
    r = a(Kn());
  function a(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function s(l) {
    l = unescape(encodeURIComponent(l));
    const c = [];
    for (let i = 0; i < l.length; ++i) c.push(l.charCodeAt(i));
    return c;
  }
  const n = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  B.DNS = n;
  const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  B.URL = o;
  function t(l, c, i) {
    function u(f, _, d, p) {
      var h;
      if (
        (typeof f == "string" && (f = s(f)),
        typeof _ == "string" && (_ = (0, r.default)(_)),
        ((h = _) === null || h === void 0 ? void 0 : h.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let g = new Uint8Array(16 + f.length);
      if (
        (g.set(_),
        g.set(f, _.length),
        (g = i(g)),
        (g[6] = (g[6] & 15) | c),
        (g[8] = (g[8] & 63) | 128),
        d)
      ) {
        p = p || 0;
        for (let v = 0; v < 16; ++v) d[p + v] = g[v];
        return d;
      }
      return (0, e.unsafeStringify)(g);
    }
    try {
      u.name = l;
    } catch {}
    return ((u.DNS = n), (u.URL = o), u);
  }
  return B;
}
var ve = {},
  hr;
function qi() {
  if (hr) return ve;
  ((hr = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  function e(d) {
    if (typeof d == "string") {
      const p = unescape(encodeURIComponent(d));
      d = new Uint8Array(p.length);
      for (let h = 0; h < p.length; ++h) d[h] = p.charCodeAt(h);
    }
    return r(s(n(d), d.length * 8));
  }
  function r(d) {
    const p = [],
      h = d.length * 32,
      g = "0123456789abcdef";
    for (let v = 0; v < h; v += 8) {
      const y = (d[v >> 5] >>> v % 32) & 255,
        b = parseInt(g.charAt((y >>> 4) & 15) + g.charAt(y & 15), 16);
      p.push(b);
    }
    return p;
  }
  function a(d) {
    return (((d + 64) >>> 9) << 4) + 14 + 1;
  }
  function s(d, p) {
    ((d[p >> 5] |= 128 << p % 32), (d[a(p) - 1] = p));
    let h = 1732584193,
      g = -271733879,
      v = -1732584194,
      y = 271733878;
    for (let b = 0; b < d.length; b += 16) {
      const w = h,
        E = g,
        I = v,
        V = y;
      ((h = c(h, g, v, y, d[b], 7, -680876936)),
        (y = c(y, h, g, v, d[b + 1], 12, -389564586)),
        (v = c(v, y, h, g, d[b + 2], 17, 606105819)),
        (g = c(g, v, y, h, d[b + 3], 22, -1044525330)),
        (h = c(h, g, v, y, d[b + 4], 7, -176418897)),
        (y = c(y, h, g, v, d[b + 5], 12, 1200080426)),
        (v = c(v, y, h, g, d[b + 6], 17, -1473231341)),
        (g = c(g, v, y, h, d[b + 7], 22, -45705983)),
        (h = c(h, g, v, y, d[b + 8], 7, 1770035416)),
        (y = c(y, h, g, v, d[b + 9], 12, -1958414417)),
        (v = c(v, y, h, g, d[b + 10], 17, -42063)),
        (g = c(g, v, y, h, d[b + 11], 22, -1990404162)),
        (h = c(h, g, v, y, d[b + 12], 7, 1804603682)),
        (y = c(y, h, g, v, d[b + 13], 12, -40341101)),
        (v = c(v, y, h, g, d[b + 14], 17, -1502002290)),
        (g = c(g, v, y, h, d[b + 15], 22, 1236535329)),
        (h = i(h, g, v, y, d[b + 1], 5, -165796510)),
        (y = i(y, h, g, v, d[b + 6], 9, -1069501632)),
        (v = i(v, y, h, g, d[b + 11], 14, 643717713)),
        (g = i(g, v, y, h, d[b], 20, -373897302)),
        (h = i(h, g, v, y, d[b + 5], 5, -701558691)),
        (y = i(y, h, g, v, d[b + 10], 9, 38016083)),
        (v = i(v, y, h, g, d[b + 15], 14, -660478335)),
        (g = i(g, v, y, h, d[b + 4], 20, -405537848)),
        (h = i(h, g, v, y, d[b + 9], 5, 568446438)),
        (y = i(y, h, g, v, d[b + 14], 9, -1019803690)),
        (v = i(v, y, h, g, d[b + 3], 14, -187363961)),
        (g = i(g, v, y, h, d[b + 8], 20, 1163531501)),
        (h = i(h, g, v, y, d[b + 13], 5, -1444681467)),
        (y = i(y, h, g, v, d[b + 2], 9, -51403784)),
        (v = i(v, y, h, g, d[b + 7], 14, 1735328473)),
        (g = i(g, v, y, h, d[b + 12], 20, -1926607734)),
        (h = u(h, g, v, y, d[b + 5], 4, -378558)),
        (y = u(y, h, g, v, d[b + 8], 11, -2022574463)),
        (v = u(v, y, h, g, d[b + 11], 16, 1839030562)),
        (g = u(g, v, y, h, d[b + 14], 23, -35309556)),
        (h = u(h, g, v, y, d[b + 1], 4, -1530992060)),
        (y = u(y, h, g, v, d[b + 4], 11, 1272893353)),
        (v = u(v, y, h, g, d[b + 7], 16, -155497632)),
        (g = u(g, v, y, h, d[b + 10], 23, -1094730640)),
        (h = u(h, g, v, y, d[b + 13], 4, 681279174)),
        (y = u(y, h, g, v, d[b], 11, -358537222)),
        (v = u(v, y, h, g, d[b + 3], 16, -722521979)),
        (g = u(g, v, y, h, d[b + 6], 23, 76029189)),
        (h = u(h, g, v, y, d[b + 9], 4, -640364487)),
        (y = u(y, h, g, v, d[b + 12], 11, -421815835)),
        (v = u(v, y, h, g, d[b + 15], 16, 530742520)),
        (g = u(g, v, y, h, d[b + 2], 23, -995338651)),
        (h = f(h, g, v, y, d[b], 6, -198630844)),
        (y = f(y, h, g, v, d[b + 7], 10, 1126891415)),
        (v = f(v, y, h, g, d[b + 14], 15, -1416354905)),
        (g = f(g, v, y, h, d[b + 5], 21, -57434055)),
        (h = f(h, g, v, y, d[b + 12], 6, 1700485571)),
        (y = f(y, h, g, v, d[b + 3], 10, -1894986606)),
        (v = f(v, y, h, g, d[b + 10], 15, -1051523)),
        (g = f(g, v, y, h, d[b + 1], 21, -2054922799)),
        (h = f(h, g, v, y, d[b + 8], 6, 1873313359)),
        (y = f(y, h, g, v, d[b + 15], 10, -30611744)),
        (v = f(v, y, h, g, d[b + 6], 15, -1560198380)),
        (g = f(g, v, y, h, d[b + 13], 21, 1309151649)),
        (h = f(h, g, v, y, d[b + 4], 6, -145523070)),
        (y = f(y, h, g, v, d[b + 11], 10, -1120210379)),
        (v = f(v, y, h, g, d[b + 2], 15, 718787259)),
        (g = f(g, v, y, h, d[b + 9], 21, -343485551)),
        (h = o(h, w)),
        (g = o(g, E)),
        (v = o(v, I)),
        (y = o(y, V)));
    }
    return [h, g, v, y];
  }
  function n(d) {
    if (d.length === 0) return [];
    const p = d.length * 8,
      h = new Uint32Array(a(p));
    for (let g = 0; g < p; g += 8) h[g >> 5] |= (d[g / 8] & 255) << g % 32;
    return h;
  }
  function o(d, p) {
    const h = (d & 65535) + (p & 65535);
    return (((d >> 16) + (p >> 16) + (h >> 16)) << 16) | (h & 65535);
  }
  function t(d, p) {
    return (d << p) | (d >>> (32 - p));
  }
  function l(d, p, h, g, v, y) {
    return o(t(o(o(p, d), o(g, y)), v), h);
  }
  function c(d, p, h, g, v, y, b) {
    return l((p & h) | (~p & g), d, p, v, y, b);
  }
  function i(d, p, h, g, v, y, b) {
    return l((p & g) | (h & ~g), d, p, v, y, b);
  }
  function u(d, p, h, g, v, y, b) {
    return l(p ^ h ^ g, d, p, v, y, b);
  }
  function f(d, p, h, g, v, y, b) {
    return l(h ^ (p | ~g), d, p, v, y, b);
  }
  var _ = e;
  return ((ve.default = _), ve);
}
var gr;
function Mi() {
  if (gr) return ge;
  ((gr = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  var e = a(Wn()),
    r = a(qi());
  function a(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var n = (0, e.default)("v3", 48, r.default);
  return ((ge.default = n), ge);
}
var pe = {},
  ye = {},
  _r;
function Di() {
  if (_r) return ye;
  ((_r = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((ye.default = r), ye);
}
var vr;
function Ti() {
  if (vr) return pe;
  ((vr = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  var e = s(Di()),
    r = s(Hn()),
    a = Je();
  function s(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function n(t, l, c) {
    if (e.default.randomUUID && !l && !t) return e.default.randomUUID();
    t = t || {};
    const i = t.random || (t.rng || r.default)();
    if (((i[6] = (i[6] & 15) | 64), (i[8] = (i[8] & 63) | 128), l)) {
      c = c || 0;
      for (let u = 0; u < 16; ++u) l[c + u] = i[u];
      return l;
    }
    return (0, a.unsafeStringify)(i);
  }
  var o = n;
  return ((pe.default = o), pe);
}
var me = {},
  be = {},
  pr;
function ki() {
  if (pr) return be;
  ((pr = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.default = void 0));
  function e(n, o, t, l) {
    switch (n) {
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
  function r(n, o) {
    return (n << o) | (n >>> (32 - o));
  }
  function a(n) {
    const o = [1518500249, 1859775393, 2400959708, 3395469782],
      t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof n == "string") {
      const u = unescape(encodeURIComponent(n));
      n = [];
      for (let f = 0; f < u.length; ++f) n.push(u.charCodeAt(f));
    } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
    n.push(128);
    const l = n.length / 4 + 2,
      c = Math.ceil(l / 16),
      i = new Array(c);
    for (let u = 0; u < c; ++u) {
      const f = new Uint32Array(16);
      for (let _ = 0; _ < 16; ++_)
        f[_] =
          (n[u * 64 + _ * 4] << 24) |
          (n[u * 64 + _ * 4 + 1] << 16) |
          (n[u * 64 + _ * 4 + 2] << 8) |
          n[u * 64 + _ * 4 + 3];
      i[u] = f;
    }
    ((i[c - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
      (i[c - 1][14] = Math.floor(i[c - 1][14])),
      (i[c - 1][15] = ((n.length - 1) * 8) & 4294967295));
    for (let u = 0; u < c; ++u) {
      const f = new Uint32Array(80);
      for (let v = 0; v < 16; ++v) f[v] = i[u][v];
      for (let v = 16; v < 80; ++v) f[v] = r(f[v - 3] ^ f[v - 8] ^ f[v - 14] ^ f[v - 16], 1);
      let _ = t[0],
        d = t[1],
        p = t[2],
        h = t[3],
        g = t[4];
      for (let v = 0; v < 80; ++v) {
        const y = Math.floor(v / 20),
          b = (r(_, 5) + e(y, d, p, h) + g + o[y] + f[v]) >>> 0;
        ((g = h), (h = p), (p = r(d, 30) >>> 0), (d = _), (_ = b));
      }
      ((t[0] = (t[0] + _) >>> 0),
        (t[1] = (t[1] + d) >>> 0),
        (t[2] = (t[2] + p) >>> 0),
        (t[3] = (t[3] + h) >>> 0),
        (t[4] = (t[4] + g) >>> 0));
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
  return ((be.default = s), be);
}
var yr;
function Ui() {
  if (yr) return me;
  ((yr = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.default = void 0));
  var e = a(Wn()),
    r = a(ki());
  function a(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var n = (0, e.default)("v5", 80, r.default);
  return ((me.default = n), me);
}
var we = {},
  mr;
function Li() {
  if (mr) return we;
  ((mr = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((we.default = e), we);
}
var Ee = {},
  br;
function Ni() {
  if (br) return Ee;
  ((br = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.default = void 0));
  var e = r(We());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function a(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    return parseInt(n.slice(14, 15), 16);
  }
  var s = a;
  return ((Ee.default = s), Ee);
}
var wr;
function Gi() {
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
              return i.default;
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
              return n.default;
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
          a = u(Mi()),
          s = u(Ti()),
          n = u(Ui()),
          o = u(Li()),
          t = u(Ni()),
          l = u(We()),
          c = u(Je()),
          i = u(Kn());
        function u(f) {
          return f && f.__esModule ? f : { default: f };
        }
      })(ut)),
    ut
  );
}
var Er;
function Vi() {
  if (Er) return ce;
  ((Er = 1),
    Object.defineProperty(ce, "__esModule", { value: !0 }),
    (ce.createAdfRendererIframeProps = void 0));
  const e = Gi(),
    r = async (a, s) => {
      const { iframeResizer: n } = await Bi(
          async () => {
            const { iframeResizer: i } = await import("./index-2D7JALmr.js").then((u) => u.i);
            return { iframeResizer: i };
          },
          [],
          import.meta.url,
        ),
        o = new URL(document.referrer).origin,
        t = `${o}/forge-apps/adf-renderer`;
      window.addEventListener("load", () => {
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200);
      });
      const l = s || `forge-adf-renderer-iframe-${(0, e.v4)()}`;
      return {
        id: l,
        src: t,
        onLoad: () => {
          var i, u;
          const f = document.getElementById(l),
            _ = {
              type: "adf-document",
              document: (i = a.extension.macro) === null || i === void 0 ? void 0 : i.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: a.localId,
            };
          (n(
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
            (u = f?.contentWindow) === null || u === void 0 || u.postMessage(_, o));
        },
      };
    };
  return ((ce.createAdfRendererIframeProps = r), ce);
}
var Rr;
function Jn() {
  if (Rr) return Y;
  ((Rr = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.view = void 0));
  const e = gi(),
    r = _i(),
    a = vi(),
    s = pi(),
    n = yi(),
    o = Oi(),
    t = Pi(),
    l = xi(),
    c = Si(),
    i = Vi();
  return (
    (Y.view = {
      submit: e.submit,
      close: r.close,
      open: a.open,
      refresh: s.refresh,
      createHistory: n.createHistory,
      getContext: o.getContext,
      theme: l.theme,
      changeWindowTitle: t.changeWindowTitle,
      emitReadyEvent: c.emitReadyEvent,
      createAdfRendererIframeProps: i.createAdfRendererIframeProps,
    }),
    Y
  );
}
var Or;
function xt() {
  return (
    Or ||
      ((Or = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), x.__exportStar(Jn(), e));
      })(rt)),
    rt
  );
}
var lt = {},
  Re = {},
  Pr;
function zi() {
  if (Pr) return Re;
  ((Pr = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.router = void 0));
  const r = (0, R().getCallBridge)(),
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
    n = (t) => {
      if (typeof t == "string") return r("navigate", { url: t, type: "new-tab" });
      if (!t?.target) throw new Error("target is required for navigation");
      return r("navigate", { ...t, type: "new-tab" });
    },
    o = async () => r("reload");
  return ((Re.router = { getUrl: a, navigate: s, open: n, reload: o }), Re);
}
var xr;
function Hi() {
  return (
    xr ||
      ((xr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), x.__exportStar(zi(), e));
      })(lt)),
    lt
  );
}
var ct = {},
  Oe = {},
  jr;
function Ki() {
  if (jr) return Oe;
  ((jr = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.Modal = void 0));
  const e = R(),
    r = O(),
    a = (0, e.getCallBridge)(),
    s = () => {};
  class n {
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
  return ((Oe.Modal = n), Oe);
}
var Sr;
function Wi() {
  return (
    Sr ||
      ((Sr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), x.__exportStar(Ki(), e));
      })(ct)),
    ct
  );
}
var P = {},
  D = {},
  Cr;
function Ji() {
  if (Cr) return D;
  ((Cr = 1),
    Object.defineProperty(D, "__esModule", { value: !0 }),
    (D.productFetchApi = D.remoteFetchApi = void 0));
  const e = Vn(),
    r = async (t) => {
      const l = {};
      for (const [c, i] of t.entries())
        if (c === "file") {
          const u = i.name,
            f = i.type;
          ((l.file = await (0, e.blobToBase64)(i)), (l.__fileName = u), (l.__fileType = f));
        } else l[c] = i;
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
        i = new Request("", { body: c, method: t?.method, headers: t?.headers }),
        u = Object.fromEntries(i.headers.entries());
      return {
        body: i.method !== "GET" ? await i.text() : null,
        headers: new Headers(u),
        isMultipartFormData: l,
      };
    },
    n = (t) => {
      const l = async (c, i) => {
        const u = a(i),
          { body: f, headers: _, isMultipartFormData: d } = await s(u),
          p = {
            remoteKey: c,
            fetchRequestInit: { ...u, body: f, headers: [..._.entries()] },
            isMultipartFormData: d,
          },
          {
            body: h,
            headers: g,
            statusText: v,
            status: y,
            isAttachment: b,
          } = await t("fetchRemote", p),
          w = b ? (0, e.base64ToBlob)(h, g["content-type"]) : h;
        return new Response(w || null, { headers: g, status: y, statusText: v });
      };
      return { requestRemote: (c, i) => l(c, i) };
    };
  D.remoteFetchApi = n;
  const o = (t) => {
    const l = async (c, i, u) => {
      const f = a(u),
        { body: _, headers: d, isMultipartFormData: p } = await s(f);
      d.has("X-Atlassian-Token") || d.set("X-Atlassian-Token", "no-check");
      const h = {
          product: c,
          restPath: i,
          fetchRequestInit: { ...f, body: _, headers: [...d.entries()] },
          isMultipartFormData: p,
        },
        {
          body: g,
          headers: v,
          statusText: y,
          status: b,
          isAttachment: w,
        } = await t("fetchProduct", h),
        E = w ? (0, e.base64ToBlob)(g, v["content-type"]) : g;
      return new Response(E || null, { headers: v, status: b, statusText: y });
    };
    return {
      requestConfluence: (c, i) => l("confluence", c, i),
      requestJira: (c, i) => l("jira", c, i),
      requestBitbucket: (c, i) => l("bitbucket", c, i),
    };
  };
  return ((D.productFetchApi = o), D);
}
var Ir;
function Qi() {
  if (Ir) return P;
  Ir = 1;
  var e;
  (Object.defineProperty(P, "__esModule", { value: !0 }),
    (P.requestRemote = P.requestBitbucket = P.requestJira = P.requestConfluence = void 0));
  const r = R(),
    a = Ji();
  return (
    (e = (0, a.productFetchApi)((0, r.getCallBridge)())),
    (P.requestConfluence = e.requestConfluence),
    (P.requestJira = e.requestJira),
    (P.requestBitbucket = e.requestBitbucket),
    (P.requestRemote = (0, a.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    P
  );
}
var dt = {},
  Pe = {},
  Br;
function Xi() {
  if (Br) return Pe;
  ((Br = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.showFlag = void 0));
  const e = R(),
    r = O(),
    a = (0, e.getCallBridge)(),
    s = (n) => {
      var o;
      if (!n.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = a("showFlag", { ...n, type: (o = n.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await t, a("closeFlag", { id: n.id })) };
    };
  return ((Pe.showFlag = s), Pe);
}
var Fr;
function Yi() {
  return (
    Fr ||
      ((Fr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = Xi();
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
  Ar;
function Zi() {
  return (
    Ar ||
      ((Ar = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), x.__exportStar(zn(), e));
      })(ft)),
    ft
  );
}
var ht = {},
  xe = {},
  qr;
function $i() {
  if (qr) return xe;
  ((qr = 1), Object.defineProperty(xe, "__esModule", { value: !0 }), (xe.realtime = void 0));
  const r = (0, R().getCallBridge)(),
    a = (t, l, c) => r("publishRealtimeChannel", { channelName: t, eventPayload: l, options: c }),
    s = (t, l, c) => r("subscribeRealtimeChannel", { channelName: t, onEvent: l, options: c }),
    n = (t, l, c) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: l, options: c, isGlobal: !0 }),
    o = (t, l, c) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: l, options: c, isGlobal: !0 });
  return ((xe.realtime = { publish: a, subscribe: s, publishGlobal: n, subscribeGlobal: o }), xe);
}
var gt = {},
  Mr;
function eo() {
  return (
    Mr ||
      ((Mr = 1),
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
var Dr;
function to() {
  return (
    Dr ||
      ((Dr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var r = $i();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return r.realtime;
          },
        });
        var a = eo();
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
var _t = {},
  je = {},
  vt = {},
  Tr;
function ro() {
  return (
    Tr ||
      ((Tr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = R(),
          a = O(),
          s = 30,
          n = (0, r.getCallBridge)();
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
            if ((await n("openRovo", c)) === !1)
              throw new a.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(vt)),
    vt
  );
}
var kr;
function no() {
  if (kr) return je;
  ((kr = 1), Object.defineProperty(je, "__esModule", { value: !0 }), (je.rovo = void 0));
  const e = ro();
  return ((je.rovo = { open: e.open }), je);
}
var Ur;
function io() {
  return (
    Ur ||
      ((Ur = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), x.__exportStar(no(), e));
      })(_t)),
    _t
  );
}
var S = {},
  Lr;
function oo() {
  if (Lr) return S;
  ((Lr = 1),
    Object.defineProperty(S, "__esModule", { value: !0 }),
    (S.createTranslationFunction = S.getTranslations = S.resetTranslationsCache = void 0));
  const e = Gn(),
    r = xt(),
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
    n = () => {
      s.reset();
    };
  S.resetTranslationsCache = n;
  const o = async (l = null, c = { fallback: !0 }) => {
    let i = l;
    return (i || (i = (await r.view.getContext()).locale), await s.getTranslations(i, c));
  };
  S.getTranslations = o;
  const t = async (l = null) => {
    let c = l;
    c || (c = (await r.view.getContext()).locale);
    const i = new e.Translator(c, s);
    return (
      await i.init(),
      (u, f) => {
        var _, d;
        return (d = (_ = i.translate(u)) !== null && _ !== void 0 ? _ : f) !== null && d !== void 0
          ? d
          : u;
      }
    );
  };
  return ((S.createTranslationFunction = t), S);
}
var pt = {},
  yt = {},
  mt = {},
  Se = {},
  Ce = {},
  Nr;
function Qn() {
  return (
    Nr ||
      ((Nr = 1),
      Object.defineProperty(Ce, "__esModule", { value: !0 }),
      (Ce.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Ce.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Ce
  );
}
var Gr;
function Qe() {
  if (Gr) return Se;
  ((Gr = 1),
    Object.defineProperty(Se, "__esModule", { value: !0 }),
    (Se.checkRestrictedEnvironment = void 0));
  const e = O(),
    r = xt(),
    a = Qn(),
    s = async () => {
      const { environmentType: n } = await r.view.getContext();
      if (n === "PRODUCTION")
        throw new e.BridgeAPIError(a.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Se.checkRestrictedEnvironment = s), Se);
}
var Vr;
function ao() {
  return (
    Vr ||
      ((Vr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = Le(),
          a = O(),
          s = Qe(),
          o = (0, R().getCallBridge)(),
          t = (u, f) => {
            const _ = atob(u),
              d = new Array(_.length);
            for (let h = 0; h < _.length; h++) d[h] = _.charCodeAt(h);
            const p = new Uint8Array(d);
            return new Blob([p], { type: f || "application/octet-stream" });
          },
          l = async (u) => {
            const f = u.size,
              _ = await u.arrayBuffer(),
              d = await crypto.subtle.digest("SHA-256", _),
              p = new Uint8Array(d),
              h = btoa(String.fromCharCode(...p));
            return { length: f, checksum: h, checksumType: "SHA256" };
          },
          c = async ({ functionKey: u, objects: f }) => {
            if (!u || u.length === 0)
              throw new a.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(f) || f.length === 0)
              throw new a.BridgeAPIError("objects array is required and must not be empty");
            const _ = f.map((y, b) => {
                if (y instanceof Blob) return y;
                if (!(y && typeof y == "object" && "data" in y && typeof y.data == "string"))
                  throw new a.BridgeAPIError(
                    `Invalid object type at index ${b}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return t(y.data, y.mimeType);
                } catch {
                  throw new a.BridgeAPIError(
                    `Invalid base64 data at index ${b}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              d = await Promise.all(_.map((y) => l(y))),
              p = await (0, r.invoke)(u, { allObjectMetadata: d });
            if (!p || typeof p != "object")
              throw new a.BridgeAPIError("Invalid response from functionKey");
            const h = new Map(),
              g = new Map();
            return (
              _.forEach((y, b) => {
                const w = d[b];
                (h.set(w.checksum, y), g.set(w.checksum, b));
              }),
              Object.entries(p).map(([y, b]) => {
                const { key: w, checksum: E } = b,
                  I = h.get(E),
                  V = g.get(E);
                return V === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: w,
                        error: `Index not found for checksum ${E}`,
                      }),
                      index: -1,
                    }
                  : I
                    ? {
                        promise: (async () => {
                          try {
                            const A = await fetch(y, {
                              method: "PUT",
                              body: I,
                              headers: {
                                "Content-Type": I.type || "application/octet-stream",
                                "Content-Length": I.size.toString(),
                              },
                            });
                            return {
                              success: A.ok,
                              key: w,
                              status: A.status,
                              error: A.ok ? void 0 : `Upload failed with status ${A.status}`,
                            };
                          } catch (A) {
                            return {
                              success: !1,
                              key: w,
                              status: 503,
                              error: A instanceof Error ? A.message : "Upload failed",
                            };
                          }
                        })(),
                        index: V,
                        objectType: I.type,
                        objectSize: I.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: w,
                          error: `Blob not found for checksum ${E}`,
                        }),
                        index: V,
                      };
              })
            );
          };
        e.createUploadPromises = c;
        const i = async ({ functionKey: u, objects: f }) => {
          (await (0, s.checkRestrictedEnvironment)(),
            o("trackObjectStoreAction", { action: "upload" }));
          const _ = await (0, e.createUploadPromises)({ functionKey: u, objects: f });
          return await Promise.all(_.map((p) => p.promise));
        };
        e.upload = i;
      })(mt)),
    mt
  );
}
var Ie = {},
  zr;
function so() {
  if (zr) return Ie;
  ((zr = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.deleteObjects = void 0));
  const e = Le(),
    r = O(),
    a = Qe(),
    n = (0, R().getCallBridge)(),
    o = async ({ functionKey: t, keys: l }) => {
      if (
        (await (0, a.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "delete" }),
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
  return ((Ie.deleteObjects = o), Ie);
}
var Be = {},
  Hr;
function uo() {
  if (Hr) return Be;
  ((Hr = 1), Object.defineProperty(Be, "__esModule", { value: !0 }), (Be.download = void 0));
  const e = Le(),
    r = O(),
    a = Qe(),
    n = (0, R().getCallBridge)(),
    o = async ({ functionKey: t, keys: l }) => {
      if (
        (await (0, a.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "download" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(l) || l.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      const c = await (0, e.invoke)(t, { keys: l });
      if (!c || typeof c != "object")
        throw new r.BridgeAPIError("Invalid response from functionKey");
      const i = Object.entries(c).map(async ([f, _]) => {
        try {
          const d = await fetch(f, { method: "GET" });
          if (!d.ok)
            return {
              success: !1,
              key: _,
              status: d.status,
              error: `Download failed with status ${d.status}`,
            };
          const p = await d.blob();
          return { success: !0, key: _, blob: p, status: d.status };
        } catch (d) {
          return {
            success: !1,
            key: _,
            status: 503,
            error: d instanceof Error ? d.message : "Download failed",
          };
        }
      });
      return await Promise.all(i);
    };
  return ((Be.download = o), Be);
}
var Fe = {},
  Kr;
function lo() {
  if (Kr) return Fe;
  ((Kr = 1), Object.defineProperty(Fe, "__esModule", { value: !0 }), (Fe.getMetadata = void 0));
  const e = Le(),
    r = O(),
    a = Qe(),
    n = (0, R().getCallBridge)(),
    o = async ({ functionKey: t, keys: l }) => {
      if (
        (await (0, a.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "getMetadata" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError(
          "functionKey is required to filter and generate object metadata",
        );
      if (!Array.isArray(l) || l.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      return await Promise.all(
        l.map(async (i) => {
          const u = await (0, e.invoke)(t, { key: i });
          return !u || typeof u != "object"
            ? { key: i, error: "Invalid response from functionKey" }
            : u;
        }),
      );
    };
  return ((Fe.getMetadata = o), Fe);
}
var Wr;
function co() {
  return (
    Wr ||
      ((Wr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const r = ao();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return r.createUploadPromises;
          },
        });
        const a = so(),
          s = uo(),
          n = lo();
        e.objectStore = {
          upload: r.upload,
          download: s.download,
          getMetadata: n.getMetadata,
          delete: a.deleteObjects,
        };
      })(yt)),
    yt
  );
}
var Jr;
function fo() {
  return (
    Jr ||
      ((Jr = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = x;
        (r.__exportStar(co(), e), r.__exportStar(Qn(), e));
      })(pt)),
    pt
  );
}
var bt = {},
  Ae = {},
  T = {},
  L = {},
  Ge = {},
  Qr;
function ho() {
  if (Qr) return Ge;
  ((Qr = 1), Object.defineProperty(Ge, "__esModule", { value: !0 }));
  const e = F();
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
            s.source && t.user && this._setWarningState(n, t),
            e.SDKFlags.setFlags(this._sdkKey, (o = t.sdk_flags) !== null && o !== void 0 ? o : {})),
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
      const o = {};
      return (
        n.user && (o.user = n.user),
        n.sdkInfo && (o.generatorSDKInfo = n.sdkInfo),
        (o.lcut = n.time),
        o
      );
    }
    _getDetailedStoreResult(s, n) {
      let o = null;
      return (
        s && (o = s[n] ? s[n] : s[(0, e._DJB2)(n)]),
        { result: o, details: this._getDetails(o == null) }
      );
    }
    _setWarningState(s, n) {
      var o, t;
      const l = e.StableID.get(this._sdkKey);
      if (
        ((o = s.customIDs) === null || o === void 0 ? void 0 : o.stableID) !== l &&
        ((!((t = s.customIDs) === null || t === void 0) && t.stableID) || l)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in n) {
        const c = n.user;
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
      var n, o;
      const t = this.getCurrentSourceDetails();
      let l = t.reason;
      const c = (n = t.warnings) !== null && n !== void 0 ? n : [];
      (this._source === "Bootstrap" && c.length > 0 && (l = l + c[0]),
        l !== "Uninitialized" &&
          l !== "NoValues" &&
          (l = `${l}:${s ? "Unrecognized" : "Recognized"}`));
      const i =
        this._source === "Bootstrap" && (o = this._bootstrapMetadata) !== null && o !== void 0
          ? o
          : void 0;
      return (i && (t.bootstrapMetadata = i), Object.assign(Object.assign({}, t), { reason: l }));
    }
  };
  return ((Ge.default = r), Ge);
}
var N = {},
  qe = {},
  Xr;
function go() {
  if (Xr) return qe;
  ((Xr = 1),
    Object.defineProperty(qe, "__esModule", { value: !0 }),
    (qe._resolveDeltasResponse = void 0));
  const e = F(),
    r = 2;
  function a(t, l) {
    const c = (0, e._typedJsonParse)(l, "checksum", "DeltasEvaluationResponse");
    if (!c) return { hadBadDeltaChecksum: !0 };
    const i = s(t, c),
      u = n(i),
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
  qe._resolveDeltasResponse = a;
  function s(t, l) {
    return Object.assign(Object.assign(Object.assign({}, t), l), {
      feature_gates: Object.assign(Object.assign({}, t.feature_gates), l.feature_gates),
      layer_configs: Object.assign(Object.assign({}, t.layer_configs), l.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, t.dynamic_configs), l.dynamic_configs),
    });
  }
  function n(t) {
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
  return qe;
}
var Yr;
function Xn() {
  if (Yr) return N;
  Yr = 1;
  var e =
    (N && N.__awaiter) ||
    function (n, o, t, l) {
      function c(i) {
        return i instanceof t
          ? i
          : new t(function (u) {
              u(i);
            });
      }
      return new (t || (t = Promise))(function (i, u) {
        function f(p) {
          try {
            d(l.next(p));
          } catch (h) {
            u(h);
          }
        }
        function _(p) {
          try {
            d(l.throw(p));
          } catch (h) {
            u(h);
          }
        }
        function d(p) {
          p.done ? i(p.value) : c(p.value).then(f, _);
        }
        d((l = l.apply(n, o || [])).next());
      });
    };
  Object.defineProperty(N, "__esModule", { value: !0 });
  const r = F(),
    a = go();
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
    fetchEvaluations(o, t, l, c, i) {
      return e(this, void 0, void 0, function* () {
        var u, f, _, d, p, h;
        const g = t ? (0, r._typedJsonParse)(t, "has_updates", "InitializeResponse") : null;
        let v = {
          user: c,
          hash:
            (_ =
              (f = (u = this._option) === null || u === void 0 ? void 0 : u.networkConfig) ===
                null || f === void 0
                ? void 0
                : f.initializeHashAlgorithm) !== null && _ !== void 0
              ? _
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (g?.has_updates) {
          const y =
            g?.hash_used !==
            ((h =
              (p = (d = this._option) === null || d === void 0 ? void 0 : d.networkConfig) ===
                null || p === void 0
                ? void 0
                : p.initializeHashAlgorithm) !== null && h !== void 0
              ? h
              : "djb2");
          v = Object.assign(Object.assign({}, v), {
            sinceTime: i && !y ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && i ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: y ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(o, g, v, l);
      });
    }
    _fetchEvaluations(o, t, l, c) {
      return e(this, void 0, void 0, function* () {
        var i, u;
        const f = yield this.post({
          sdkKey: o,
          urlConfig: this._initializeUrlConfig,
          data: l,
          retries: 2,
          isStatsigEncodable: !0,
          priority: c,
        });
        if (f?.code === 204) return '{"has_updates": false}';
        if (f?.code !== 200) return (i = f?.body) !== null && i !== void 0 ? i : null;
        if (
          t?.has_updates !== !0 ||
          ((u = f.body) === null || u === void 0 ? void 0 : u.includes('"is_delta":true')) !== !0 ||
          l.deltasResponseRequested !== !0
        )
          return f.body;
        const _ = (0, a._resolveDeltasResponse)(t, f.body);
        return typeof _ == "string"
          ? _
          : this._fetchEvaluations(
              o,
              t,
              Object.assign(Object.assign(Object.assign({}, l), _), {
                deltasResponseRequested: !1,
              }),
              c,
            );
      });
    }
  }
  return ((N.default = s), N);
}
var Me = {},
  Zr;
function _o() {
  if (Zr) return Me;
  ((Zr = 1),
    Object.defineProperty(Me, "__esModule", { value: !0 }),
    (Me._makeParamStoreGetter = void 0));
  const e = F(),
    r = { disableExposureLog: !0 };
  function a(u) {
    return u == null || u.disableExposureLog === !1;
  }
  function s(u, f) {
    return f != null && !(0, e._isTypeMatch)(u, f);
  }
  function n(u, f) {
    return u.value;
  }
  function o(u, f, _) {
    return u.getFeatureGate(f.gate_name, a(_) ? void 0 : r).value ? f.pass_value : f.fail_value;
  }
  function t(u, f, _, d) {
    const h = u.getDynamicConfig(f.config_name, a(d) ? void 0 : r).get(f.param_name);
    return s(h, _) ? _ : h;
  }
  function l(u, f, _, d) {
    const h = u.getExperiment(f.experiment_name, a(d) ? void 0 : r).get(f.param_name);
    return s(h, _) ? _ : h;
  }
  function c(u, f, _, d) {
    const h = u.getLayer(f.layer_name, a(d) ? void 0 : r).get(f.param_name);
    return s(h, _) ? _ : h;
  }
  function i(u, f, _) {
    return (d, p) => {
      if (f == null) return p;
      const h = f[d];
      if (h == null || (p != null && (0, e._typeOf)(p) !== h.param_type)) return p;
      switch (h.ref_type) {
        case "static":
          return n(h);
        case "gate":
          return o(u, h, _);
        case "dynamic_config":
          return t(u, h, p, _);
        case "experiment":
          return l(u, h, p, _);
        case "layer":
          return c(u, h, p, _);
        default:
          return p;
      }
    };
  }
  return ((Me._makeParamStoreGetter = i), Me);
}
var k = {},
  $r;
function vo() {
  if ($r) return k;
  $r = 1;
  var e =
    (k && k.__awaiter) ||
    function (n, o, t, l) {
      function c(i) {
        return i instanceof t
          ? i
          : new t(function (u) {
              u(i);
            });
      }
      return new (t || (t = Promise))(function (i, u) {
        function f(p) {
          try {
            d(l.next(p));
          } catch (h) {
            u(h);
          }
        }
        function _(p) {
          try {
            d(l.throw(p));
          } catch (h) {
            u(h);
          }
        }
        function d(p) {
          p.done ? i(p.value) : c(p.value).then(f, _);
        }
        d((l = l.apply(n, o || [])).next());
      });
    };
  (Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.StatsigEvaluationsDataAdapter = void 0));
  const r = F(),
    a = Xn();
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
        var i;
        const u = yield (i = this._network) === null || i === void 0
          ? void 0
          : i.fetchEvaluations(this._getSdkKey(), o, l?.priority, t, c);
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
  return ((k.StatsigEvaluationsDataAdapter = s), k);
}
var en;
function po() {
  if (en) return L;
  en = 1;
  var e =
    (L && L.__awaiter) ||
    function (l, c, i, u) {
      function f(_) {
        return _ instanceof i
          ? _
          : new i(function (d) {
              d(_);
            });
      }
      return new (i || (i = Promise))(function (_, d) {
        function p(v) {
          try {
            g(u.next(v));
          } catch (y) {
            d(y);
          }
        }
        function h(v) {
          try {
            g(u.throw(v));
          } catch (y) {
            d(y);
          }
        }
        function g(v) {
          v.done ? _(v.value) : f(v.value).then(p, h);
        }
        g((u = u.apply(l, c || [])).next());
      });
    };
  Object.defineProperty(L, "__esModule", { value: !0 });
  const r = F(),
    a = ho(),
    s = Xn(),
    n = _o(),
    o = vo();
  let t = class Ot extends r.StatsigClientBase {
    static instance(c) {
      const i = (0, r._getStatsigGlobal)().instance(c);
      return i instanceof Ot
        ? i
        : (r.Log.warn(
            (0, r._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Ot(c ?? "", {}));
    }
    constructor(c, i, u = null) {
      var f, _;
      r.SDKType._setClientType(c, "javascript-client");
      const d = new s.default(u, (h) => {
        this.$emt(h);
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
        (this._user = this._configureUser(i, u)),
        (this._sdkInstanceID = (0, r.getUUID)()));
      const p = (_ = u?.plugins) !== null && _ !== void 0 ? _ : [];
      for (const h of p) h.bind(this);
    }
    initializeSync(c) {
      var i;
      return this.loadingStatus !== "Uninitialized"
        ? (0, r.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((i = this._store.getWarnings()) !== null && i !== void 0 ? i : []),
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
    updateUserSync(c, i) {
      const u = performance.now();
      try {
        return this._updateUserSyncImpl(c, i, u);
      } catch (f) {
        const _ = f instanceof Error ? f : new Error(String(f));
        return this._createErrorUpdateDetails(_, u);
      }
    }
    _updateUserSyncImpl(c, i, u) {
      var f;
      const _ = [...((f = this._store.getWarnings()) !== null && f !== void 0 ? f : [])];
      this._resetForUser(c);
      const d = this.dataAdapter.getDataSync(this._user);
      (d == null && _.push("NoCachedValues"),
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
            _,
          )
        : (this._runPostUpdate(d ?? null, this._user),
          (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            _,
          ));
    }
    updateUserAsync(c, i) {
      return e(this, void 0, void 0, function* () {
        const u = performance.now();
        try {
          return yield this._updateUserAsyncImpl(c, i);
        } catch (f) {
          const _ = f instanceof Error ? f : new Error(String(f));
          return this._createErrorUpdateDetails(_, u);
        }
      });
    }
    _updateUserAsyncImpl(c, i) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(c);
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
        let _ = !1;
        (f != null &&
          (r.Diagnostics._markInitProcessStart(this._sdkKey),
          (_ = this._store.setValues(f, this._user)),
          r.Diagnostics._markInitProcessEnd(this._sdkKey, { success: _ })),
          this._finalizeUpdate(f),
          _ ||
            (this._errorBoundary.attachErrorIfNoneExists(
              r.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          r.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            _,
            this._store.getCurrentSourceDetails(),
          ));
        const d = r.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, r.createUpdateDetails)(
          _,
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
    checkGate(c, i) {
      return this.getFeatureGate(c, i).value;
    }
    logEvent(c, i, u) {
      const f = typeof c == "string" ? { eventName: c, value: i, metadata: u } : c;
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
    _createErrorUpdateDetails(c, i) {
      var u;
      return (0, r.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - i,
        c,
        null,
        [...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : [])],
      );
    }
    _finalizeUpdate(c) {
      (this._store.finalize(), this._setStatus("Ready", c));
    }
    _runPostUpdate(c, i) {
      this.dataAdapter.getDataAsync(c, i, { priority: "low" }).catch((u) => {
        r.Log.error("An error occurred after update.", u);
      });
    }
    _resetForUser(c) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(c, this._options)));
    }
    _configureUser(c, i) {
      var u;
      const f = (0, r._normalizeUser)(c, i),
        _ = (u = f.customIDs) === null || u === void 0 ? void 0 : u.stableID;
      return (_ && r.StableID.setOverride(_, this._sdkKey), f);
    }
    _getFeatureGateImpl(c, i) {
      var u, f;
      const { result: _, details: d } = this._store.getGate(c),
        p = (0, r._makeFeatureGate)(c, d, _),
        h =
          (f = (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getGateOverride) ===
            null || f === void 0
            ? void 0
            : f.call(u, p, this._user, i),
        g = h ?? p;
      return (
        this._enqueueExposure(
          c,
          (0, r._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          i,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(c, i) {
      var u, f;
      const { result: _, details: d } = this._store.getConfig(c),
        p = (0, r._makeDynamicConfig)(c, d, _),
        h =
          (f =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getDynamicConfigOverride) === null || f === void 0
            ? void 0
            : f.call(u, p, this._user, i),
        g = h ?? p;
      return (
        this._enqueueExposure(
          c,
          (0, r._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          i,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(c, i) {
      var u, f, _, d;
      const { result: p, details: h } = this._store.getConfig(c),
        g = (0, r._makeExperiment)(c, h, p);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, r._mapExposures)(
          (f = (u = g.__evaluation) === null || u === void 0 ? void 0 : u.secondary_exposures) !==
            null && f !== void 0
            ? f
            : [],
          this._store.getExposureMapping(),
        ));
      const v =
          (d =
            (_ = this.overrideAdapter) === null || _ === void 0
              ? void 0
              : _.getExperimentOverride) === null || d === void 0
            ? void 0
            : d.call(_, g, this._user, i),
        y = v ?? g;
      return (
        this._enqueueExposure(
          c,
          (0, r._createConfigExposure)(this._user, y, this._store.getExposureMapping()),
          i,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: y }),
        y
      );
    }
    _getLayerImpl(c, i) {
      var u, f, _;
      const { result: d, details: p } = this._store.getLayer(c),
        h = (0, r._makeLayer)(c, p, d),
        g =
          (f =
            (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getLayerOverride) ===
            null || f === void 0
            ? void 0
            : f.call(u, h, this._user, i);
      i?.disableExposureLog && this._logger.incrementNonExposureCount(c);
      const v = (0, r._mergeOverride)(
        h,
        g,
        (_ = g?.__value) !== null && _ !== void 0 ? _ : h.__value,
        (y) => {
          i?.disableExposureLog ||
            this._enqueueExposure(
              c,
              (0, r._createLayerParameterExposure)(
                this._user,
                v,
                y,
                this._store.getExposureMapping(),
              ),
              i,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: v }), v);
    }
    _getParameterStoreImpl(c, i) {
      var u, f;
      const { result: _, details: d } = this._store.getParamStore(c);
      this._logger.incrementNonExposureCount(c);
      const p = {
          name: c,
          details: d,
          __configuration: _,
          get: (0, n._makeParamStoreGetter)(this, _, i),
        },
        h =
          (f =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getParamStoreOverride) === null || f === void 0
            ? void 0
            : f.call(u, p, i);
      return (
        h != null &&
          ((p.__configuration = h.config),
          (p.details = h.details),
          (p.get = (0, n._makeParamStoreGetter)(this, h.config, i))),
        p
      );
    }
  };
  return ((L.default = t), L);
}
var tn;
function yo() {
  return (
    tn ||
      ((tn = 1),
      (function (e) {
        var r =
            (T && T.__createBinding) ||
            (Object.create
              ? function (t, l, c, i) {
                  i === void 0 && (i = c);
                  var u = Object.getOwnPropertyDescriptor(l, c);
                  ((!u || ("get" in u ? !l.__esModule : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return l[c];
                      },
                    }),
                    Object.defineProperty(t, i, u));
                }
              : function (t, l, c, i) {
                  (i === void 0 && (i = c), (t[i] = l[c]));
                }),
          a =
            (T && T.__exportStar) ||
            function (t, l) {
              for (var c in t)
                c !== "default" && !Object.prototype.hasOwnProperty.call(l, c) && r(l, t, c);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const s = F(),
          n = po();
        ((e.StatsigClient = n.default), a(F(), e));
        const o = Object.assign((0, s._getStatsigGlobal)(), { StatsigClient: n.default });
        e.default = o;
      })(T)),
    T
  );
}
var De = {},
  Te = {},
  rn;
function mo() {
  if (rn) return Te;
  ((rn = 1),
    Object.defineProperty(Te, "__esModule", { value: !0 }),
    (Te.initFeatureFlags = void 0));
  const e = R(),
    r = O(),
    a = Ke(),
    s = 500,
    n = 1e3 * 25,
    o = (0, e.getCallBridge)(),
    t = (c) => {
      if (!c || !c.user)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(c).some((i) => typeof i == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    l = (c) => (t(c), o("initFeatureFlags", { user: c.user }));
  return (
    (Te.initFeatureFlags = (0, a.withRateLimiter)(
      l,
      s,
      n,
      `Feature flags initialisation calls are rate limited at ${s}req/${n / 1e3}s`,
    )),
    Te
  );
}
var nn;
function bo() {
  if (nn) return De;
  ((nn = 1),
    Object.defineProperty(De, "__esModule", { value: !0 }),
    (De.ForgeDataAdapter = void 0));
  const e = mo();
  class r {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(s, n, o) {
      var t;
      if (s) return s;
      this.environment = ((t = this.options) === null || t === void 0 ? void 0 : t.environment) || {
        tier: "development",
      };
      const l = { ...n, statsigEnvironment: this.environment },
        c = await (0, e.initFeatureFlags)({ user: l }),
        i = {
          source: "Network",
          data: JSON.stringify(c),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = i), i);
    }
    getDataSync(s) {
      return this.cache;
    }
    async attach(s, n, o) {
      this.options = n;
    }
    async prefetchData() {}
    async setData(s) {}
    async setDataLegacy(s) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((De.ForgeDataAdapter = r), De);
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
      })(wt)),
    wt
  );
}
var ke = {},
  an;
function wo() {
  if (an) return ke;
  ((an = 1),
    Object.defineProperty(ke, "__esModule", { value: !0 }),
    (ke.trackFeatureFlagEvent = void 0));
  const e = R(),
    r = O(),
    a = Yn(),
    s = Ke(),
    n = 500,
    o = 1e3 * 25,
    t = (0, e.getCallBridge)(),
    l = (i) => {
      if (!i || !i.type || !i.properties)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(i.type.toUpperCase() in a.FeatureFlagEventType))
        throw new r.BridgeAPIError("Event type is not supported");
      if (Object.values(i).some((u) => typeof u == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (i) => (l(i), t("trackFeatureFlagEvent", i));
  return (
    (ke.trackFeatureFlagEvent = (0, s.withRateLimiter)(
      c,
      n,
      o,
      `Feature flags calls are rate limited at ${n}req/${o / 1e3}s`,
    )),
    ke
  );
}
var sn;
function Eo() {
  if (sn) return Ae;
  ((sn = 1),
    Object.defineProperty(Ae, "__esModule", { value: !0 }),
    (Ae.ForgeFeatureFlags = void 0));
  const e = yo(),
    r = bo(),
    a = Yn(),
    s = wo();
  class n {
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
      const i = {
        environment: { tier: l.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (c = i.environment) === null || c === void 0 ? void 0 : c.tier),
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
  return ((Ae.ForgeFeatureFlags = n), Ae);
}
var un;
function Ro() {
  return (
    un ||
      ((un = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var r = Eo();
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
function Oo() {
  return (
    ln ||
      ((ln = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = x;
        var a = li();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return a.NavigationTarget;
          },
        }),
          r.__exportStar(Le(), e),
          r.__exportStar(hi(), e),
          r.__exportStar(xt(), e),
          r.__exportStar(Hi(), e),
          r.__exportStar(Wi(), e),
          r.__exportStar(Qi(), e),
          r.__exportStar(Yi(), e),
          r.__exportStar(Zi(), e),
          r.__exportStar(to(), e),
          r.__exportStar(io(), e),
          (e.i18n = r.__importStar(oo())),
          r.__exportStar(fo(), e),
          r.__exportStar(Ro(), e));
      })(Ye)),
    Ye
  );
}
var Ue = Oo();
const Po = () => {
    const [e, r] = C.useState(null),
      [a, s] = C.useState(null),
      [n, o] = C.useState(!1),
      [t, l] = C.useState(null),
      [c, i] = C.useState(null),
      [u, f] = C.useState(null),
      [_, d] = C.useState(null),
      [p, h] = C.useState({ userName: "", product: "" }),
      g = async (w) => {
        (o(!0), l(null));
        try {
          const E = await Ue.invoke("fetch", { action: w });
          r(E);
        } catch (E) {
          l(E instanceof Error ? E.message : "Unknown error occurred");
        } finally {
          o(!1);
        }
      },
      v = async () => {
        if (!p.userName.trim() || !p.product.trim()) {
          i("Please fill in all fields");
          return;
        }
        (o(!0), i(null));
        try {
          (await Ue.invoke("insertUserOrOrder", p), i(null), h({ userName: "", product: "" }));
        } catch (w) {
          i(w instanceof Error ? w.message : "Failed to insert user/order");
        } finally {
          o(!1);
        }
      },
      y = async () => {
        (o(!0), f(null));
        try {
          (await Ue.invoke("clearCache"), f(null));
        } catch (w) {
          f(w instanceof Error ? w.message : "Failed to clear cache");
        } finally {
          o(!1);
        }
      },
      b = async () => {
        (o(!0), d(null));
        try {
          const w = await Ue.invoke("runPerformanceAnalyze");
          (s(w?.DML), d(null));
        } catch (w) {
          d(w instanceof Error ? w.message : "Failed to run performance analysis");
        } finally {
          o(!1);
        }
      };
    return m.jsxs("div", {
      style: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
      },
      children: [
        m.jsx("h1", {
          style: { color: "#0052CC", marginBottom: "30px" },
          children: "🚀 Forge SQL ORM Cache Demo",
        }),
        m.jsxs("div", {
          style: {
            padding: "20px",
            backgroundColor: "#F4F5F7",
            borderRadius: "8px",
            marginBottom: "30px",
          },
          children: [
            m.jsx("h3", {
              style: { color: "#172B4D", marginBottom: "15px" },
              children: "How it works:",
            }),
            m.jsxs("ul", {
              style: { color: "#6B778C", lineHeight: "1.6" },
              children: [
                m.jsxs("li", {
                  children: [
                    m.jsx("strong", { children: "Non-Cached Query:" }),
                    " Executes a fresh query with 1-second sleep every time",
                  ],
                }),
                m.jsxs("li", {
                  children: [
                    m.jsx("strong", { children: "Cached Query:" }),
                    " Uses global cache - first execution takes time, subsequent calls are instant",
                  ],
                }),
                m.jsxs("li", {
                  children: [
                    m.jsx("strong", { children: "Timeout:" }),
                    " Tests query timeout behavior with 10-second sleep",
                  ],
                }),
                m.jsxs("li", {
                  children: [
                    m.jsx("strong", { children: "Out of Memory:" }),
                    " Tests memory limit with large data operations",
                  ],
                }),
                m.jsxs("li", {
                  children: [
                    m.jsx("strong", { children: "Add User & Order:" }),
                    " Uses ",
                    m.jsx("code", { children: "executeWithCacheContext" }),
                    " to automatically clear cache after operations",
                  ],
                }),
                m.jsxs("li", {
                  children: [
                    m.jsx("strong", { children: "Cache Management:" }),
                    " Clear cache manually or run performance analysis",
                  ],
                }),
              ],
            }),
          ],
        }),
        m.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            m.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Query Performance Test",
            }),
            m.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Test the difference between cached and non-cached queries. Both queries include a 1-second sleep to demonstrate the performance difference.",
            }),
            m.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "10px",
                marginBottom: "20px",
              },
              children: [
                m.jsx("button", {
                  onClick: () => g("slow"),
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "🚫 Non-Cached",
                }),
                m.jsx("button", {
                  onClick: () => g("cacheable"),
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#36B37E",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "✅ Cached",
                }),
                m.jsx("button", {
                  onClick: () => g("timeout"),
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF8B00",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "⏱️ Timeout",
                }),
                m.jsx("button", {
                  onClick: () => g("outOfMemory"),
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#C43E37",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "💥 Out of Memory",
                }),
              ],
            }),
            t &&
              m.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "20px",
                },
                children: [m.jsx("strong", { children: "Error:" }), " ", t],
              }),
            e &&
              !t &&
              m.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginTop: "10px",
                },
                children: [
                  m.jsxs("h3", {
                    style: { margin: "0 0 10px 0", color: "#172B4D" },
                    children: ["Query Results (", e.times, "ms)"],
                  }),
                  m.jsxs("div", {
                    style: { fontSize: "14px", color: "#6B778C", marginBottom: "10px" },
                    children: ["Found ", e.rows.length, " records"],
                  }),
                  m.jsx("div", {
                    style: { maxHeight: "200px", overflowY: "auto" },
                    children: m.jsxs("table", {
                      style: { width: "100%", borderCollapse: "collapse" },
                      children: [
                        m.jsx("thead", {
                          children: m.jsxs("tr", {
                            style: { backgroundColor: "#E9ECF0" },
                            children: [
                              m.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User ID",
                              }),
                              m.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User Name",
                              }),
                              m.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Product",
                              }),
                              m.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Product ID",
                              }),
                            ],
                          }),
                        }),
                        m.jsx("tbody", {
                          children: e.rows.map((w, E) =>
                            m.jsxs(
                              "tr",
                              {
                                children: [
                                  m.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: w.userId,
                                  }),
                                  m.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: w.userName,
                                  }),
                                  m.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: w.product || "N/A",
                                  }),
                                  m.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: w.productId || "N/A",
                                  }),
                                ],
                              },
                              E,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
          ],
        }),
        m.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            m.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Add User & Order",
            }),
            m.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Add a new user and order. User ID and Product ID are optional - they will be auto-generated if not provided. The system will automatically match existing users and clear cache after operations.",
            }),
            m.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginBottom: "20px",
              },
              children: [
                m.jsxs("div", {
                  children: [
                    m.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User ID (optional):",
                    }),
                    m.jsx("input", {
                      type: "number",
                      value: p.userId || "",
                      onChange: (w) =>
                        h({ ...p, userId: w.target.value ? parseInt(w.target.value) : void 0 }),
                      placeholder: "Leave empty for auto-generated",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
                m.jsxs("div", {
                  children: [
                    m.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User Name:",
                    }),
                    m.jsx("input", {
                      type: "text",
                      value: p.userName,
                      onChange: (w) => h({ ...p, userName: w.target.value }),
                      placeholder: "Enter user name",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
                m.jsxs("div", {
                  children: [
                    m.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product ID (optional):",
                    }),
                    m.jsx("input", {
                      type: "number",
                      value: p.productId || "",
                      onChange: (w) =>
                        h({ ...p, productId: w.target.value ? parseInt(w.target.value) : void 0 }),
                      placeholder: "Leave empty for auto-generated",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
                m.jsxs("div", {
                  children: [
                    m.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product:",
                    }),
                    m.jsx("input", {
                      type: "text",
                      value: p.product,
                      onChange: (w) => h({ ...p, product: w.target.value }),
                      placeholder: "Enter product name",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
              ],
            }),
            m.jsx("button", {
              onClick: v,
              disabled: n,
              style: {
                padding: "12px 24px",
                backgroundColor: "#0052CC",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: n ? "not-allowed" : "pointer",
                opacity: n ? 0.6 : 1,
                fontSize: "16px",
                fontWeight: "bold",
              },
              children: n ? "Processing..." : "➕ Add User & Order",
            }),
            c &&
              m.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginTop: "15px",
                },
                children: [m.jsx("strong", { children: "Error:" }), " ", c],
              }),
          ],
        }),
        m.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            m.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Cache Management",
            }),
            m.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children: "Manage the cache and run performance analysis.",
            }),
            m.jsxs("div", {
              style: { display: "flex", gap: "10px", marginBottom: "15px" },
              children: [
                m.jsx("button", {
                  onClick: y,
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "🗑️ Clear Cache",
                }),
                m.jsx("button", {
                  onClick: b,
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF8B00",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "📊 Run Performance Analysis",
                }),
              ],
            }),
            u &&
              m.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "15px",
                },
                children: [m.jsx("strong", { children: "Error:" }), " ", u],
              }),
            _ &&
              m.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "15px",
                },
                children: [m.jsx("strong", { children: "Error:" }), " ", _],
              }),
          ],
        }),
        a &&
          !_ &&
          m.jsxs("div", {
            style: {
              marginBottom: "40px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            },
            children: [
              m.jsx("h2", {
                style: { color: "#172B4D", marginBottom: "20px" },
                children: "Performance Analysis Results",
              }),
              m.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginBottom: "20px",
                },
                children: [
                  m.jsxs("div", {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "15px",
                      marginBottom: "20px",
                    },
                    children: [
                      m.jsxs("div", {
                        children: [m.jsx("strong", { children: "Window:" }), " ", a.window],
                      }),
                      m.jsxs("div", {
                        children: [m.jsx("strong", { children: "Top Queries:" }), " ", a.top],
                      }),
                      m.jsxs("div", {
                        children: [
                          m.jsx("strong", { children: "Latency Threshold:" }),
                          " ",
                          a.warnThresholdMs,
                          "ms",
                        ],
                      }),
                      m.jsxs("div", {
                        children: [
                          m.jsx("strong", { children: "Memory Threshold:" }),
                          " ",
                          (a.memoryThresholdBytes / 1024 / 1024).toFixed(1),
                          "MB",
                        ],
                      }),
                      m.jsxs("div", {
                        children: [
                          m.jsx("strong", { children: "Generated:" }),
                          " ",
                          new Date(a.generatedAt).toLocaleString(),
                        ],
                      }),
                    ],
                  }),
                  a.rows.length > 0
                    ? m.jsxs("div", {
                        children: [
                          m.jsxs("h3", {
                            style: { margin: "0 0 15px 0", color: "#172B4D" },
                            children: ["Slow Queries Found (", a.rows.length, ")"],
                          }),
                          a.rows.map((w, E) =>
                            m.jsxs(
                              "div",
                              {
                                style: {
                                  marginBottom: "20px",
                                  padding: "15px",
                                  backgroundColor: "#FFF2CC",
                                  border: "1px solid #FFD700",
                                  borderRadius: "4px",
                                },
                                children: [
                                  m.jsxs("div", {
                                    style: {
                                      display: "grid",
                                      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                                      gap: "10px",
                                      marginBottom: "15px",
                                    },
                                    children: [
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("strong", { children: "Rank:" }),
                                          " ",
                                          w.rank,
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("strong", { children: "Type:" }),
                                          " ",
                                          w.stmtType,
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("strong", { children: "Executions:" }),
                                          " ",
                                          w.execCount,
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("strong", { children: "Avg Latency:" }),
                                          " ",
                                          w.avgLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("strong", { children: "Max Latency:" }),
                                          " ",
                                          w.maxLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("strong", { children: "Avg Memory:" }),
                                          " ",
                                          w.avgMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("strong", { children: "Max Memory:" }),
                                          " ",
                                          w.maxMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("strong", { children: "Plan Cache:" }),
                                          " ",
                                          w.planInCache ? "Yes" : "No",
                                        ],
                                      }),
                                    ],
                                  }),
                                  m.jsxs("div", {
                                    style: { marginBottom: "10px" },
                                    children: [
                                      m.jsx("strong", { children: "SQL Query:" }),
                                      m.jsx("pre", {
                                        style: {
                                          backgroundColor: "#F8F9FA",
                                          padding: "10px",
                                          borderRadius: "4px",
                                          fontSize: "12px",
                                          overflow: "auto",
                                          marginTop: "5px",
                                        },
                                        children: w.digestText,
                                      }),
                                    ],
                                  }),
                                  m.jsxs("details", {
                                    style: { marginTop: "10px" },
                                    children: [
                                      m.jsx("summary", {
                                        style: {
                                          cursor: "pointer",
                                          fontWeight: "bold",
                                          color: "#0052CC",
                                        },
                                        children: "View Execution Plan",
                                      }),
                                      m.jsx("pre", {
                                        style: {
                                          backgroundColor: "#F8F9FA",
                                          padding: "10px",
                                          borderRadius: "4px",
                                          fontSize: "11px",
                                          overflow: "auto",
                                          marginTop: "10px",
                                          whiteSpace: "pre-wrap",
                                        },
                                        children: w.plan,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              E,
                            ),
                          ),
                        ],
                      })
                    : m.jsxs("div", {
                        style: {
                          padding: "20px",
                          textAlign: "center",
                          color: "#36B37E",
                          backgroundColor: "#E8F5E8",
                          borderRadius: "4px",
                        },
                        children: [
                          m.jsx("strong", { children: "✅ No slow queries found!" }),
                          m.jsx("br", {}),
                          "All queries are performing within the specified thresholds.",
                        ],
                      }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  xo = document.getElementById("root"),
  jo = Zn.createRoot(xo),
  cn = () => {
    jo.render(m.jsx(ii.StrictMode, { children: m.jsx(Po, {}) }));
  };
Ue.view.theme
  .enable()
  .then(() => {
    cn();
  })
  .catch((e) => {
    (console.error(e.message), cn());
  });
