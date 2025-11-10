import { r as wr, c as sn } from "./react-dom-vendor-BOEB6BZs.js";
import { g as an, a as ln, r as F } from "./client-core-vendor-kqFzl-gg.js";
import { r as un } from "./lodash-vendor-wRvQIJsp.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) o(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const r of i.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && o(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(n) {
    const i = {};
    return (
      n.integrity && (i.integrity = n.integrity),
      n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : n.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function o(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = a(n);
    fetch(n.href, i);
  }
})();
var Ie = { exports: {} },
  U = {};
var ot;
function cn() {
  if (ot) return U;
  ot = 1;
  var e = wr(),
    t = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(c, l, s) {
    var u,
      d = {},
      f = null,
      g = null;
    (s !== void 0 && (f = "" + s),
      l.key !== void 0 && (f = "" + l.key),
      l.ref !== void 0 && (g = l.ref));
    for (u in l) o.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (c && c.defaultProps) for (u in ((l = c.defaultProps), l)) d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: c, key: f, ref: g, props: d, _owner: n.current };
  }
  return ((U.Fragment = a), (U.jsx = r), (U.jsxs = r), U);
}
var st;
function dn() {
  return (st || ((st = 1), (Ie.exports = cn())), Ie.exports);
}
var h = dn(),
  C = wr();
const fn = an(C);
var Be = {},
  et = function (e, t) {
    return (
      (et =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (a, o) {
            a.__proto__ = o;
          }) ||
        function (a, o) {
          for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (a[n] = o[n]);
        }),
      et(e, t)
    );
  };
function Er(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  et(e, t);
  function a() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((a.prototype = t.prototype), new a());
}
var Oe = function () {
  return (
    (Oe =
      Object.assign ||
      function (t) {
        for (var a, o = 1, n = arguments.length; o < n; o++) {
          a = arguments[o];
          for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
        }
        return t;
      }),
    Oe.apply(this, arguments)
  );
};
function xr(e, t) {
  var a = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++)
      t.indexOf(o[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[n]) &&
        (a[o[n]] = e[o[n]]);
  return a;
}
function jr(e, t, a, o) {
  var n = arguments.length,
    i = n < 3 ? t : o === null ? (o = Object.getOwnPropertyDescriptor(t, a)) : o,
    r;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, t, a, o);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (r = e[c]) && (i = (n < 3 ? r(i) : n > 3 ? r(t, a, i) : r(t, a)) || i);
  return (n > 3 && i && Object.defineProperty(t, a, i), i);
}
function Or(e, t) {
  return function (a, o) {
    t(a, o, e);
  };
}
function Pr(e, t, a, o, n, i) {
  function r(b) {
    if (b !== void 0 && typeof b != "function") throw new TypeError("Function expected");
    return b;
  }
  for (
    var c = o.kind,
      l = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      s = !t && e ? (o.static ? e : e.prototype) : null,
      u = t || (s ? Object.getOwnPropertyDescriptor(s, o.name) : {}),
      d,
      f = !1,
      g = a.length - 1;
    g >= 0;
    g--
  ) {
    var _ = {};
    for (var p in o) _[p] = p === "access" ? {} : o[p];
    for (var p in o.access) _.access[p] = o.access[p];
    _.addInitializer = function (b) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(r(b || null));
    };
    var v = (0, a[g])(c === "accessor" ? { get: u.get, set: u.set } : u[l], _);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      ((d = r(v.get)) && (u.get = d),
        (d = r(v.set)) && (u.set = d),
        (d = r(v.init)) && n.unshift(d));
    } else (d = r(v)) && (c === "field" ? n.unshift(d) : (u[l] = d));
  }
  (s && Object.defineProperty(s, o.name, u), (f = !0));
}
function Rr(e, t, a) {
  for (var o = arguments.length > 2, n = 0; n < t.length; n++)
    a = o ? t[n].call(e, a) : t[n].call(e);
  return o ? a : void 0;
}
function Sr(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Cr(e, t, a) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: a ? "".concat(a, " ", t) : t })
  );
}
function Fr(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Ir(e, t, a, o) {
  function n(i) {
    return i instanceof a
      ? i
      : new a(function (r) {
          r(i);
        });
  }
  return new (a || (a = Promise))(function (i, r) {
    function c(u) {
      try {
        s(o.next(u));
      } catch (d) {
        r(d);
      }
    }
    function l(u) {
      try {
        s(o.throw(u));
      } catch (d) {
        r(d);
      }
    }
    function s(u) {
      u.done ? i(u.value) : n(u.value).then(c, l);
    }
    s((o = o.apply(e, t || [])).next());
  });
}
function Br(e, t) {
  var a = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    o,
    n,
    i,
    r = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (r.next = c(0)),
    (r.throw = c(1)),
    (r.return = c(2)),
    typeof Symbol == "function" &&
      (r[Symbol.iterator] = function () {
        return this;
      }),
    r
  );
  function c(s) {
    return function (u) {
      return l([s, u]);
    };
  }
  function l(s) {
    if (o) throw new TypeError("Generator is already executing.");
    for (; r && ((r = 0), s[0] && (a = 0)), a; )
      try {
        if (
          ((o = 1),
          n &&
            (i =
              s[0] & 2 ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
            !(i = i.call(n, s[1])).done)
        )
          return i;
        switch (((n = 0), i && (s = [s[0] & 2, i.value]), s[0])) {
          case 0:
          case 1:
            i = s;
            break;
          case 4:
            return (a.label++, { value: s[1], done: !1 });
          case 5:
            (a.label++, (n = s[1]), (s = [0]));
            continue;
          case 7:
            ((s = a.ops.pop()), a.trys.pop());
            continue;
          default:
            if (
              ((i = a.trys), !(i = i.length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2))
            ) {
              a = 0;
              continue;
            }
            if (s[0] === 3 && (!i || (s[1] > i[0] && s[1] < i[3]))) {
              a.label = s[1];
              break;
            }
            if (s[0] === 6 && a.label < i[1]) {
              ((a.label = i[1]), (i = s));
              break;
            }
            if (i && a.label < i[2]) {
              ((a.label = i[2]), a.ops.push(s));
              break;
            }
            (i[2] && a.ops.pop(), a.trys.pop());
            continue;
        }
        s = t.call(e, a);
      } catch (u) {
        ((s = [6, u]), (n = 0));
      } finally {
        o = i = 0;
      }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
var Re = Object.create
  ? function (e, t, a, o) {
      o === void 0 && (o = a);
      var n = Object.getOwnPropertyDescriptor(t, a);
      ((!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) &&
        (n = {
          enumerable: !0,
          get: function () {
            return t[a];
          },
        }),
        Object.defineProperty(e, o, n));
    }
  : function (e, t, a, o) {
      (o === void 0 && (o = a), (e[o] = t[a]));
    };
function Ar(e, t) {
  for (var a in e) a !== "default" && !Object.prototype.hasOwnProperty.call(t, a) && Re(t, e, a);
}
function Pe(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    a = t && e[t],
    o = 0;
  if (a) return a.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e });
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function nt(e, t) {
  var a = typeof Symbol == "function" && e[Symbol.iterator];
  if (!a) return e;
  var o = a.call(e),
    n,
    i = [],
    r;
  try {
    for (; (t === void 0 || t-- > 0) && !(n = o.next()).done; ) i.push(n.value);
  } catch (c) {
    r = { error: c };
  } finally {
    try {
      n && !n.done && (a = o.return) && a.call(o);
    } finally {
      if (r) throw r.error;
    }
  }
  return i;
}
function Tr() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(nt(arguments[t]));
  return e;
}
function kr() {
  for (var e = 0, t = 0, a = arguments.length; t < a; t++) e += arguments[t].length;
  for (var o = Array(e), n = 0, t = 0; t < a; t++)
    for (var i = arguments[t], r = 0, c = i.length; r < c; r++, n++) o[n] = i[r];
  return o;
}
function Dr(e, t, a) {
  if (a || arguments.length === 2)
    for (var o = 0, n = t.length, i; o < n; o++)
      (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), (i[o] = t[o]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function L(e) {
  return this instanceof L ? ((this.v = e), this) : new L(e);
}
function Mr(e, t, a) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var o = a.apply(e, t || []),
    n,
    i = [];
  return (
    (n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    c("next"),
    c("throw"),
    c("return", r),
    (n[Symbol.asyncIterator] = function () {
      return this;
    }),
    n
  );
  function r(g) {
    return function (_) {
      return Promise.resolve(_).then(g, d);
    };
  }
  function c(g, _) {
    o[g] &&
      ((n[g] = function (p) {
        return new Promise(function (v, b) {
          i.push([g, p, v, b]) > 1 || l(g, p);
        });
      }),
      _ && (n[g] = _(n[g])));
  }
  function l(g, _) {
    try {
      s(o[g](_));
    } catch (p) {
      f(i[0][3], p);
    }
  }
  function s(g) {
    g.value instanceof L ? Promise.resolve(g.value.v).then(u, d) : f(i[0][2], g);
  }
  function u(g) {
    l("next", g);
  }
  function d(g) {
    l("throw", g);
  }
  function f(g, _) {
    (g(_), i.shift(), i.length && l(i[0][0], i[0][1]));
  }
}
function qr(e) {
  var t, a;
  return (
    (t = {}),
    o("next"),
    o("throw", function (n) {
      throw n;
    }),
    o("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function o(n, i) {
    t[n] = e[n]
      ? function (r) {
          return (a = !a) ? { value: L(e[n](r)), done: !1 } : i ? i(r) : r;
        }
      : i;
  }
}
function Lr(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    a;
  return t
    ? t.call(e)
    : ((e = typeof Pe == "function" ? Pe(e) : e[Symbol.iterator]()),
      (a = {}),
      o("next"),
      o("throw"),
      o("return"),
      (a[Symbol.asyncIterator] = function () {
        return this;
      }),
      a);
  function o(i) {
    a[i] =
      e[i] &&
      function (r) {
        return new Promise(function (c, l) {
          ((r = e[i](r)), n(c, l, r.done, r.value));
        });
      };
  }
  function n(i, r, c, l) {
    Promise.resolve(l).then(function (s) {
      i({ value: s, done: c });
    }, r);
  }
}
function Ur(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var hn = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  tt = function (e) {
    return (
      (tt =
        Object.getOwnPropertyNames ||
        function (t) {
          var a = [];
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (a[a.length] = o);
          return a;
        }),
      tt(e)
    );
  };
function Nr(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var a = tt(e), o = 0; o < a.length; o++) a[o] !== "default" && Re(t, e, a[o]);
  return (hn(t, e), t);
}
function Gr(e) {
  return e && e.__esModule ? e : { default: e };
}
function zr(e, t, a, o) {
  if (a === "a" && !o) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return a === "m" ? o : a === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Vr(e, t, a, o, n) {
  if (o === "m") throw new TypeError("Private method is not writable");
  if (o === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (o === "a" ? n.call(e, a) : n ? (n.value = a) : t.set(e, a), a);
}
function Kr(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Hr(e, t, a) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var o, n;
    if (a) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      o = t[Symbol.asyncDispose];
    }
    if (o === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((o = t[Symbol.dispose]), a && (n = o));
    }
    if (typeof o != "function") throw new TypeError("Object not disposable.");
    (n &&
      (o = function () {
        try {
          n.call(this);
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      e.stack.push({ value: t, dispose: o, async: a }));
  } else a && e.stack.push({ async: !0 });
  return t;
}
var gn =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, a) {
        var o = new Error(a);
        return ((o.name = "SuppressedError"), (o.error = e), (o.suppressed = t), o);
      };
function Wr(e) {
  function t(i) {
    ((e.error = e.hasError ? new gn(i, e.error, "An error was suppressed during disposal.") : i),
      (e.hasError = !0));
  }
  var a,
    o = 0;
  function n() {
    for (; (a = e.stack.pop()); )
      try {
        if (!a.async && o === 1) return ((o = 0), e.stack.push(a), Promise.resolve().then(n));
        if (a.dispose) {
          var i = a.dispose.call(a.value);
          if (a.async)
            return (
              (o |= 2),
              Promise.resolve(i).then(n, function (r) {
                return (t(r), n());
              })
            );
        } else o |= 1;
      } catch (r) {
        t(r);
      }
    if (o === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return n();
}
function Jr(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (a, o, n, i, r) {
        return o
          ? t
            ? ".jsx"
            : ".js"
          : n && (!i || !r)
            ? a
            : n + i + "." + r.toLowerCase() + "js";
      })
    : e;
}
const _n = {
    __extends: Er,
    __assign: Oe,
    __rest: xr,
    __decorate: jr,
    __param: Or,
    __esDecorate: Pr,
    __runInitializers: Rr,
    __propKey: Sr,
    __setFunctionName: Cr,
    __metadata: Fr,
    __awaiter: Ir,
    __generator: Br,
    __createBinding: Re,
    __exportStar: Ar,
    __values: Pe,
    __read: nt,
    __spread: Tr,
    __spreadArrays: kr,
    __spreadArray: Dr,
    __await: L,
    __asyncGenerator: Mr,
    __asyncDelegator: qr,
    __asyncValues: Lr,
    __makeTemplateObject: Ur,
    __importStar: Nr,
    __importDefault: Gr,
    __classPrivateFieldGet: zr,
    __classPrivateFieldSet: Vr,
    __classPrivateFieldIn: Kr,
    __addDisposableResource: Hr,
    __disposeResources: Wr,
    __rewriteRelativeImportExtension: Jr,
  },
  pn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Hr,
        get __assign() {
          return Oe;
        },
        __asyncDelegator: qr,
        __asyncGenerator: Mr,
        __asyncValues: Lr,
        __await: L,
        __awaiter: Ir,
        __classPrivateFieldGet: zr,
        __classPrivateFieldIn: Kr,
        __classPrivateFieldSet: Vr,
        __createBinding: Re,
        __decorate: jr,
        __disposeResources: Wr,
        __esDecorate: Pr,
        __exportStar: Ar,
        __extends: Er,
        __generator: Br,
        __importDefault: Gr,
        __importStar: Nr,
        __makeTemplateObject: Ur,
        __metadata: Fr,
        __param: Or,
        __propKey: Sr,
        __read: nt,
        __rest: xr,
        __rewriteRelativeImportExtension: Jr,
        __runInitializers: Rr,
        __setFunctionName: Cr,
        __spread: Tr,
        __spreadArray: Dr,
        __spreadArrays: kr,
        __values: Pe,
        default: _n,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  O = ln(pn);
var N = {},
  at;
function vn() {
  return (
    at ||
      ((at = 1),
      Object.defineProperty(N, "__esModule", { value: !0 }),
      (N.NavigationTarget = void 0),
      (N.NavigationTarget = {
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
    N
  );
}
var Ae = {},
  Te = {},
  G = {},
  z = {},
  lt;
function E() {
  if (lt) return z;
  ((lt = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.BridgeAPIError = void 0));
  class e extends Error {}
  return ((z.BridgeAPIError = e), z);
}
var ut;
function w() {
  if (ut) return G;
  ((ut = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.getCallBridge = void 0));
  const e = E();
  function t(o) {
    return !!o?.callBridge;
  }
  const a = () => {
    if (!t(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((G.getCallBridge = a), G);
}
var V = {},
  ct;
function Se() {
  if (ct) return V;
  ((ct = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.withRateLimiter = void 0));
  const e = E(),
    t = (a, o, n, i) => {
      let r = Date.now(),
        c = 0;
      return async (...l) => {
        const s = Date.now();
        if ((s - r > n && ((r = s), (c = 0)), c >= o))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((c = c + 1), a(...l));
      };
    };
  return ((V.withRateLimiter = t), V);
}
var dt;
function yn() {
  return (
    dt ||
      ((dt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = w(),
          a = E(),
          o = Se(),
          n = (0, t.getCallBridge)(),
          i = (l) => {
            if (l && Object.values(l).some((s) => typeof s == "function"))
              throw new a.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          r = (l, s) => {
            if (typeof l != "string") throw new a.BridgeAPIError("functionKey must be a string!");
            return (i(s), n("invoke", { functionKey: l, payload: s }));
          };
        e.invoke = (0, o.withRateLimiter)(
          r,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function c() {
          return e.invoke;
        }
        e.makeInvoke = c;
      })(Te)),
    Te
  );
}
var ft;
function xe() {
  return (
    ft ||
      ((ft = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), O.__exportStar(yn(), e));
      })(Ae)),
    Ae
  );
}
var ke = {},
  K = {},
  De = {},
  ht;
function Qr() {
  return (
    ht ||
      ((ht = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = w(),
          a = E(),
          o = Se(),
          n = 500,
          i = 25,
          r = 1e3 * i;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, t.getCallBridge)(),
          l = (d) => {
            if (d && Object.values(d).some((f) => typeof f == "function"))
              throw new a.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          s = (d) => async (f) => {
            l(f);
            const g = { ...f, invokeType: `ui-${d.toLowerCase()}-fetch` },
              _ = await c("invoke", g),
              { success: p, payload: v, error: b } = _ ?? {},
              m = { ...(p ? v : b) };
            if (m && m.headers)
              for (const x in m.headers)
                Array.isArray(m.headers[x]) && (m.headers[x] = m.headers[x].join(","));
            return m;
          },
          u = (d) => {
            const f = s(d);
            return (0, o.withRateLimiter)(
              f,
              n,
              r,
              `${d} invocation calls are rate limited at ${n}/${i}s`,
            );
          };
        e._invokeEndpointFn = u;
      })(De)),
    De
  );
}
var gt;
function mn() {
  if (gt) return K;
  ((gt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.invokeRemote = void 0));
  const e = Qr(),
    t = (a) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(a);
  return ((K.invokeRemote = t), K);
}
var H = {},
  _t;
function bn() {
  if (_t) return H;
  ((_t = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.invokeService = void 0));
  const e = Qr(),
    t = (a) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(a);
  return ((H.invokeService = t), H);
}
var pt;
function wn() {
  return (
    pt ||
      ((pt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = O;
        (t.__exportStar(mn(), e), t.__exportStar(bn(), e));
      })(ke)),
    ke
  );
}
var Me = {},
  W = {},
  J = {},
  vt;
function En() {
  if (vt) return J;
  ((vt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.submit = void 0));
  const e = w(),
    t = E(),
    a = (0, e.getCallBridge)(),
    o = async (n) => {
      if ((await a("submit", n)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((J.submit = o), J);
}
var Q = {},
  yt;
function xn() {
  if (yt) return Q;
  ((yt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.close = void 0));
  const e = w(),
    t = E(),
    a = (0, e.getCallBridge)(),
    o = async (n) => {
      try {
        if ((await a("close", n)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((Q.close = o), Q);
}
var Y = {},
  mt;
function jn() {
  if (mt) return Y;
  ((mt = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.open = void 0));
  const e = w(),
    t = E(),
    a = (0, e.getCallBridge)(),
    o = async () => {
      try {
        if ((await a("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((Y.open = o), Y);
}
var X = {},
  bt;
function On() {
  if (bt) return X;
  ((bt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.refresh = void 0));
  const e = w(),
    t = E(),
    a = (0, e.getCallBridge)(),
    o = async (n) => {
      if ((await a("refresh", n)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((X.refresh = o), X);
}
var Z = {},
  wt;
function Pn() {
  if (wt) return Z;
  ((wt = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.createHistory = void 0));
  const t = (0, w().getCallBridge)(),
    a = async () => {
      const o = await t("createHistory");
      return (
        o.listen((n) => {
          o.location = n;
        }),
        o
      );
    };
  return ((Z.createHistory = a), Z);
}
var $ = {},
  qe = {},
  P = {},
  Et;
function Yr() {
  return (
    Et ||
      ((Et = 1),
      Object.defineProperty(P, "__esModule", { value: !0 }),
      (P.FORGE_SUPPORTED_LOCALE_CODES = P.I18N_BUNDLE_FOLDER_NAME = P.I18N_INFO_FILE_NAME = void 0),
      (P.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (P.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (P.FORGE_SUPPORTED_LOCALE_CODES = [
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
    P
  );
}
var B = {},
  xt;
function Rn() {
  if (xt) return B;
  ((xt = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.TranslationsGetter = B.TranslationGetterError = void 0));
  const e = (o, n) => {
    o.includes(n) || o.push(n);
  };
  class t extends Error {
    constructor(n) {
      (super(n), (this.name = "TranslationGetterError"));
    }
  }
  B.TranslationGetterError = t;
  class a {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(n) {
      this.resourcesAccessor = n;
    }
    async getTranslations(n, i = { fallback: !0 }) {
      const r = await this.getI18nInfoConfig(),
        { fallback: c } = i;
      if (!c) {
        let l;
        return (
          r.locales.includes(n) && (l = await this.getTranslationResource(n)),
          { translations: l ?? null, locale: n }
        );
      }
      for (const l of this.getLocaleLookupOrder(n, r)) {
        const s = await this.getTranslationResource(l);
        if (s) return { translations: s, locale: l };
      }
      return { translations: null, locale: n };
    }
    async getTranslationsByLocaleLookupOrder(n) {
      const i = await this.getI18nInfoConfig(),
        r = this.getLocaleLookupOrder(n, i);
      return await Promise.all(
        r.map(async (c) => {
          const l = await this.getTranslationResource(c);
          return { locale: c, translations: l };
        }),
      );
    }
    reset() {
      ((this.i18nInfoConfig = null), this.translationResources.clear());
    }
    async getTranslationResource(n) {
      let i = this.translationResources.get(n);
      if (!i)
        try {
          ((i = await this.resourcesAccessor.getTranslationResource(n)),
            this.translationResources.set(n, i));
        } catch (r) {
          throw r instanceof t ? r : new t(`Failed to get translation resource for locale: ${n}`);
        }
      return i;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (n) {
          throw n instanceof t ? n : new t("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(n, i) {
      const { locales: r, fallback: c } = i,
        l = [n],
        s = c[n];
      return (
        s && Array.isArray(s) && s.length > 0 && l.push(...s),
        e(l, i.fallback.default),
        l.filter((u) => r.includes(u))
      );
    }
  }
  return ((B.TranslationsGetter = a), B);
}
var ee = {},
  Le = {},
  jt;
function Xr() {
  return (
    jt ||
      ((jt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const a = O.__importDefault(un()),
          o = (i, r, c) => {
            const l = i[c];
            return l ? (0, e.getTranslationValueFromContent)(l, r) : null;
          };
        e.getTranslationValue = o;
        const n = (i, r) => {
          let c = i[r];
          if (!c) {
            const l = r.split(".");
            l.length > 1 && (c = (0, a.default)(i, l, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = n;
      })(Le)),
    Le
  );
}
var Ot;
function Sn() {
  if (Ot) return ee;
  ((Ot = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.Translator = void 0));
  const e = Xr();
  class t {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(o, n) {
      ((this.locale = o), (this.translationsGetter = n));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(o) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let n = this.cache.get(o);
      if (n === void 0) {
        for (const { translations: i } of this.localeLookupOrderedTranslations) {
          const r = (0, e.getTranslationValueFromContent)(i, o);
          if (r !== null) {
            n = r;
            break;
          }
        }
        ((n = n ?? null), this.cache.set(o, n));
      }
      return n;
    }
  }
  return ((ee.Translator = t), ee);
}
var te = {},
  Pt;
function Cn() {
  if (Pt) return te;
  ((Pt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.ensureLocale = void 0));
  const e = Yr(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    a = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    o = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, r) => {
        const [c] = r.split("-");
        return (i[c] || (i[c] = r), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    n = (i) => {
      const r = i.replace("_", "-");
      return t.has(r) ? r : (o[r] ?? a[r] ?? null);
    };
  return ((te.ensureLocale = n), te);
}
var Ue = {},
  Rt;
function Fn() {
  return (
    Rt ||
      ((Rt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (s) => typeof s == "object" && s !== null && !Array.isArray(s),
          a = (s) => typeof s?.i18n == "string",
          o = (s) => s.startsWith("connect-"),
          n = (s) => s.startsWith("core:"),
          i = (s) => {
            const u = new Set(),
              d = (f, g) =>
                !t(f) || u.has(f)
                  ? []
                  : (u.add(f),
                    Object.entries(f).flatMap(([_, p]) => {
                      const v = [...g, _];
                      return a(p)
                        ? [{ propertyPath: v, key: p.i18n }]
                        : Array.isArray(p)
                          ? p.flatMap((b) => d(b, v))
                          : d(p, v);
                    }));
            return d(s, []);
          },
          r = (s) =>
            Object.entries(s).flatMap(([u, d]) =>
              !o(u) && !n(u) && d && Array.isArray(d) && d.length > 0 ? d.map((f) => [f, u]) : [],
            );
        e.getI18nSupportedModuleEntries = r;
        const c = (s) => {
          const u = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(s)) {
            const f = i(d[0]);
            for (const { key: g } of f) u.add(g);
          }
          return u.size > 0 ? Array.from(u) : [];
        };
        e.extractI18nKeysFromModules = c;
        const l = (s) => {
          const u = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(s)) {
            const f = i(d[0]);
            for (const g of f) u.push({ moduleName: d[1], ...g });
          }
          return u;
        };
        e.extractI18nPropertiesFromModules = l;
      })(Ue)),
    Ue
  );
}
var Ne = {},
  St;
function In() {
  return (St || ((St = 1), Object.defineProperty(Ne, "__esModule", { value: !0 })), Ne);
}
var Ct;
function Zr() {
  return (
    Ct ||
      ((Ct = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = O;
        (t.__exportStar(Yr(), e),
          t.__exportStar(Rn(), e),
          t.__exportStar(Sn(), e),
          t.__exportStar(Cn(), e));
        var a = Xr();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return a.getTranslationValue;
          },
        });
        var o = Fn();
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
          t.__exportStar(In(), e));
      })(qe)),
    qe
  );
}
var Ft;
function Bn() {
  if (Ft) return $;
  ((Ft = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.getContext = void 0));
  const e = w(),
    t = Zr(),
    a = (0, e.getCallBridge)(),
    o = async () => {
      var n;
      const i = await a("getContext"),
        r = i?.locale;
      return (r && (i.locale = (n = (0, t.ensureLocale)(r)) !== null && n !== void 0 ? n : r), i);
    };
  return (($.getContext = o), $);
}
var re = {},
  It;
function An() {
  if (It) return re;
  ((It = 1),
    Object.defineProperty(re, "__esModule", { value: !0 }),
    (re.changeWindowTitle = void 0));
  const e = w(),
    t = E(),
    a = (0, e.getCallBridge)(),
    o = async (n) => {
      try {
        await a("changeWindowTitle", n);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((re.changeWindowTitle = o), re);
}
var ne = {},
  Bt;
function Tn() {
  if (Bt) return ne;
  ((Bt = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.theme = void 0));
  const t = (0, w().getCallBridge)();
  return ((ne.theme = { enable: () => t("enableTheming") }), ne);
}
var ie = {},
  oe = {},
  Ge = {},
  A = {},
  At;
function $r() {
  if (At) return A;
  ((At = 1),
    Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.blobToBase64 = A.base64ToBlob = void 0));
  const e = (a, o) => {
    if (!a) return null;
    const n = a.includes(";base64") ? a.split(",")[1] : a,
      i = atob(n),
      r = new Array(i.length);
    for (let l = 0; l < i.length; l++) r[l] = i.charCodeAt(l);
    const c = new Uint8Array(r);
    return new Blob([c], { type: o });
  };
  A.base64ToBlob = e;
  const t = (a) =>
    new Promise((o, n) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        o(i.result);
      }),
        (i.onerror = n),
        i.readAsDataURL(a));
    });
  return ((A.blobToBase64 = t), A);
}
var Tt;
function kn() {
  return (
    Tt ||
      ((Tt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = $r(),
          a = (s) => {
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
          o = async (s) => ({ data: await (0, t.blobToBase64)(s), type: s.type }),
          n = (s) => (0, t.base64ToBlob)(s.data, s.type),
          i = async (s) => {
            if (s instanceof Blob) return { ...(await o(s)), __isBlobData: !0 };
            if (Array.isArray(s))
              return Promise.all(s.map((u) => (0, e.serialiseBlobsInPayload)(u)));
            if (s && a(s)) {
              const u = await Promise.all(
                Object.entries(s).map(async ([d, f]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(f),
                ]),
              );
              return Object.fromEntries(u);
            }
            return s;
          };
        e.serialiseBlobsInPayload = i;
        const r = (s) => {
          if (s && a(s) && "__isBlobData" in s) {
            const u = s;
            return n({ data: u.data, type: u.type });
          }
          if (Array.isArray(s)) return s.map((u) => (0, e.deserialiseBlobsInPayload)(u));
          if (s && a(s)) {
            const u = {};
            for (const [d, f] of Object.entries(s)) u[d] = (0, e.deserialiseBlobsInPayload)(f);
            return u;
          }
          return s;
        };
        e.deserialiseBlobsInPayload = r;
        const c = (s) =>
          s instanceof Blob
            ? !0
            : Array.isArray(s)
              ? s.some((u) => (0, e.containsBlobs)(u))
              : s && a(s)
                ? Object.values(s).some((u) => (0, e.containsBlobs)(u))
                : !1;
        e.containsBlobs = c;
        const l = (s) =>
          s && a(s) && "__isBlobData" in s
            ? !0
            : Array.isArray(s)
              ? s.some((u) => (0, e.containsSerialisedBlobs)(u))
              : s && a(s)
                ? Object.values(s).some((u) => (0, e.containsSerialisedBlobs)(u))
                : !1;
        e.containsSerialisedBlobs = l;
      })(Ge)),
    Ge
  );
}
var kt;
function en() {
  if (kt) return oe;
  ((kt = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.events = void 0));
  const e = w(),
    t = kn(),
    a = (0, e.getCallBridge)(),
    o = async (i, r) => {
      let c = r;
      return (
        (0, t.containsBlobs)(r) && (c = await (0, t.serialiseBlobsInPayload)(r)),
        a("emit", { event: i, payload: c })
      );
    },
    n = (i, r) =>
      a("on", {
        event: i,
        callback: (l) => {
          let s = l;
          return (
            (0, t.containsSerialisedBlobs)(l) && (s = (0, t.deserialiseBlobsInPayload)(l)),
            r(s)
          );
        },
      });
  return ((oe.events = { emit: o, on: n }), oe);
}
var Dt;
function Dn() {
  if (Dt) return ie;
  ((Dt = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.emitReadyEvent = void 0));
  const e = en(),
    t = tn(),
    a = "EXTENSION_READY",
    o = async () => {
      const n = await t.view.getContext();
      await e.events.emit(a, { localId: n.localId });
    };
  return ((ie.emitReadyEvent = o), ie);
}
var Mt;
function tn() {
  if (Mt) return W;
  ((Mt = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.view = void 0));
  const e = En(),
    t = xn(),
    a = jn(),
    o = On(),
    n = Pn(),
    i = Bn(),
    r = An(),
    c = Tn(),
    l = Dn();
  return (
    (W.view = {
      submit: e.submit,
      close: t.close,
      open: a.open,
      refresh: o.refresh,
      createHistory: n.createHistory,
      getContext: i.getContext,
      theme: c.theme,
      changeWindowTitle: r.changeWindowTitle,
      emitReadyEvent: l.emitReadyEvent,
    }),
    W
  );
}
var qt;
function it() {
  return (
    qt ||
      ((qt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), O.__exportStar(tn(), e));
      })(Me)),
    Me
  );
}
var ze = {},
  se = {},
  Lt;
function Mn() {
  if (Lt) return se;
  ((Lt = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.router = void 0));
  const t = (0, w().getCallBridge)(),
    a = async (r) => {
      if (!r?.target) throw new Error("target is required for getUrl");
      const c = await t("getUrl", r);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (l) {
        throw new Error(`Failed to parse URL: ${c} (${l})`);
      }
    },
    o = (r) => {
      if (typeof r == "string") return t("navigate", { url: r, type: "same-tab" });
      if (!r?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...r, type: "same-tab" });
    },
    n = (r) => {
      if (typeof r == "string") return t("navigate", { url: r, type: "new-tab" });
      if (!r?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...r, type: "new-tab" });
    },
    i = async () => t("reload");
  return ((se.router = { getUrl: a, navigate: o, open: n, reload: i }), se);
}
var Ut;
function qn() {
  return (
    Ut ||
      ((Ut = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), O.__exportStar(Mn(), e));
      })(ze)),
    ze
  );
}
var Ve = {},
  ae = {},
  Nt;
function Ln() {
  if (Nt) return ae;
  ((Nt = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.Modal = void 0));
  const e = w(),
    t = E(),
    a = (0, e.getCallBridge)(),
    o = () => {};
  class n {
    constructor(r) {
      var c, l;
      ((this.resource = r?.resource || null),
        (this.onClose = r?.onClose || o),
        (this.size = r?.size || "medium"),
        (this.context = r?.context || {}),
        (this.closeOnEscape = (c = r?.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick =
          (l = r?.closeOnOverlayClick) !== null && l !== void 0 ? l : !0));
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
          throw new t.BridgeAPIError("Unable to open modal.");
      } catch {
        throw new t.BridgeAPIError("Unable to open modal.");
      }
    }
  }
  return ((ae.Modal = n), ae);
}
var Gt;
function Un() {
  return (
    Gt ||
      ((Gt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), O.__exportStar(Ln(), e));
      })(Ve)),
    Ve
  );
}
var R = {},
  le = {},
  zt;
function Nn() {
  if (zt) return le;
  ((zt = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.productFetchApi = void 0));
  const e = $r(),
    t = async (i) => {
      const r = {};
      for (const [c, l] of i.entries())
        if (c === "file") {
          const s = l.name,
            u = l.type;
          ((r.file = await (0, e.blobToBase64)(l)), (r.__fileName = s), (r.__fileType = u));
        } else r[c] = l;
      return JSON.stringify(r);
    },
    a = (i) => {
      if (!i) return i;
      if ("signal" in i) {
        const { signal: r, ...c } = i;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          c
        );
      }
      return i;
    },
    o = async (i) => {
      const r = i?.body instanceof FormData,
        c = r ? await t(i?.body) : i?.body,
        l = new Request("", { body: c, method: i?.method, headers: i?.headers }),
        s = Object.fromEntries(l.headers.entries());
      return {
        body: l.method !== "GET" ? await l.text() : null,
        headers: new Headers(s),
        isMultipartFormData: r,
      };
    },
    n = (i) => {
      const r = async (c, l, s) => {
        const u = a(s),
          { body: d, headers: f, isMultipartFormData: g } = await o(u);
        f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
        const _ = {
            product: c,
            restPath: l,
            fetchRequestInit: { ...u, body: d, headers: [...f.entries()] },
            isMultipartFormData: g,
          },
          {
            body: p,
            headers: v,
            statusText: b,
            status: m,
            isAttachment: x,
          } = await i("fetchProduct", _),
          y = x ? (0, e.base64ToBlob)(p, v["content-type"]) : p;
        return new Response(y || null, { headers: v, status: m, statusText: b });
      };
      return {
        requestConfluence: (c, l) => r("confluence", c, l),
        requestJira: (c, l) => r("jira", c, l),
        requestBitbucket: (c, l) => r("bitbucket", c, l),
      };
    };
  return ((le.productFetchApi = n), le);
}
var Vt;
function Gn() {
  if (Vt) return R;
  Vt = 1;
  var e;
  (Object.defineProperty(R, "__esModule", { value: !0 }),
    (R.requestBitbucket = R.requestJira = R.requestConfluence = void 0));
  const t = w();
  return (
    (e = (0, Nn().productFetchApi)((0, t.getCallBridge)())),
    (R.requestConfluence = e.requestConfluence),
    (R.requestJira = e.requestJira),
    (R.requestBitbucket = e.requestBitbucket),
    R
  );
}
var Ke = {},
  ue = {},
  Kt;
function zn() {
  if (Kt) return ue;
  ((Kt = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.showFlag = void 0));
  const e = w(),
    t = E(),
    a = (0, e.getCallBridge)(),
    o = (n) => {
      var i;
      if (!n.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const r = a("showFlag", { ...n, type: (i = n.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await r, a("closeFlag", { id: n.id })) };
    };
  return ((ue.showFlag = o), ue);
}
var Ht;
function Vn() {
  return (
    Ht ||
      ((Ht = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = zn();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(Ke)),
    Ke
  );
}
var He = {},
  Wt;
function Kn() {
  return (
    Wt ||
      ((Wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), O.__exportStar(en(), e));
      })(He)),
    He
  );
}
var We = {},
  ce = {},
  Jt;
function Hn() {
  if (Jt) return ce;
  ((Jt = 1), Object.defineProperty(ce, "__esModule", { value: !0 }), (ce.realtime = void 0));
  const t = (0, w().getCallBridge)(),
    a = (r, c, l) => t("publishRealtimeChannel", { channelName: r, eventPayload: c, options: l }),
    o = (r, c, l) => t("subscribeRealtimeChannel", { channelName: r, onEvent: c, options: l }),
    n = (r, c, l) =>
      t("publishRealtimeChannel", { channelName: r, eventPayload: c, options: l, isGlobal: !0 }),
    i = (r, c, l) =>
      t("subscribeRealtimeChannel", { channelName: r, onEvent: c, options: l, isGlobal: !0 });
  return ((ce.realtime = { publish: a, subscribe: o, publishGlobal: n, subscribeGlobal: i }), ce);
}
var Je = {},
  Qt;
function Wn() {
  return (
    Qt ||
      ((Qt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = void 0),
          (function (t) {
            ((t.Board = "board"), (t.Issue = "issue"), (t.Project = "project"));
          })(e.Jira || (e.Jira = {})),
          (function (t) {
            ((t.Content = "content"), (t.Space = "space"));
          })(e.Confluence || (e.Confluence = {})),
          (function (t) {
            ((t.Repository = "repository"), (t.PullRequest = "pullRequest"));
          })(e.Bitbucket || (e.Bitbucket = {})));
      })(Je)),
    Je
  );
}
var Yt;
function Jn() {
  return (
    Yt ||
      ((Yt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = Hn();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var a = Wn();
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
      })(We)),
    We
  );
}
var S = {},
  Xt;
function Qn() {
  if (Xt) return S;
  ((Xt = 1),
    Object.defineProperty(S, "__esModule", { value: !0 }),
    (S.createTranslationFunction = S.getTranslations = S.resetTranslationsCache = void 0));
  const e = Zr(),
    t = it(),
    a = {
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
    o = new e.TranslationsGetter(a),
    n = () => {
      o.reset();
    };
  S.resetTranslationsCache = n;
  const i = async (c = null, l = { fallback: !0 }) => {
    let s = c;
    return (s || (s = (await t.view.getContext()).locale), await o.getTranslations(s, l));
  };
  S.getTranslations = i;
  const r = async (c = null) => {
    let l = c;
    l || (l = (await t.view.getContext()).locale);
    const s = new e.Translator(l, o);
    return (
      await s.init(),
      (u, d) => {
        var f, g;
        return (g = (f = s.translate(u)) !== null && f !== void 0 ? f : d) !== null && g !== void 0
          ? g
          : u;
      }
    );
  };
  return ((S.createTranslationFunction = r), S);
}
var Qe = {},
  Ye = {},
  Xe = {},
  de = {},
  fe = {},
  Zt;
function rn() {
  return (
    Zt ||
      ((Zt = 1),
      Object.defineProperty(fe, "__esModule", { value: !0 }),
      (fe.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (fe.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    fe
  );
}
var $t;
function Ce() {
  if ($t) return de;
  (($t = 1),
    Object.defineProperty(de, "__esModule", { value: !0 }),
    (de.checkRestrictedEnvironment = void 0));
  const e = E(),
    t = it(),
    a = rn(),
    o = async () => {
      const { environmentType: n } = await t.view.getContext();
      if (n === "PRODUCTION")
        throw new e.BridgeAPIError(a.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((de.checkRestrictedEnvironment = o), de);
}
var er;
function Yn() {
  return (
    er ||
      ((er = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = xe(),
          a = E(),
          o = Ce(),
          i = (0, w().getCallBridge)(),
          r = (u, d) => {
            const f = atob(u),
              g = new Array(f.length);
            for (let p = 0; p < f.length; p++) g[p] = f.charCodeAt(p);
            const _ = new Uint8Array(g);
            return new Blob([_], { type: d || "application/octet-stream" });
          },
          c = async (u) => {
            const d = u.size,
              f = await u.arrayBuffer(),
              g = await crypto.subtle.digest("SHA-256", f),
              _ = new Uint8Array(g),
              p = btoa(String.fromCharCode(..._));
            return { length: d, checksum: p, checksumType: "SHA256" };
          },
          l = async ({ functionKey: u, objects: d }) => {
            if (!u || u.length === 0)
              throw new a.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(d) || d.length === 0)
              throw new a.BridgeAPIError("objects array is required and must not be empty");
            const f = d.map((m, x) => {
                if (m instanceof Blob) return m;
                if (!(m && typeof m == "object" && "data" in m && typeof m.data == "string"))
                  throw new a.BridgeAPIError(
                    `Invalid object type at index ${x}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return r(m.data, m.mimeType);
                } catch {
                  throw new a.BridgeAPIError(
                    `Invalid base64 data at index ${x}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              g = await Promise.all(f.map((m) => c(m))),
              _ = await (0, t.invoke)(u, { allObjectMetadata: g });
            if (!_ || typeof _ != "object")
              throw new a.BridgeAPIError("Invalid response from functionKey");
            const p = new Map(),
              v = new Map();
            return (
              f.forEach((m, x) => {
                const y = g[x];
                (p.set(y.checksum, m), v.set(y.checksum, x));
              }),
              Object.entries(_).map(([m, x]) => {
                const { key: y, checksum: j } = x,
                  D = p.get(j),
                  Fe = v.get(j);
                return Fe === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: y,
                        error: `Index not found for checksum ${j}`,
                      }),
                      index: -1,
                    }
                  : D
                    ? {
                        promise: (async () => {
                          try {
                            const I = await fetch(m, {
                              method: "PUT",
                              body: D,
                              headers: {
                                "Content-Type": D.type || "application/octet-stream",
                                "Content-Length": D.size.toString(),
                              },
                            });
                            return {
                              success: I.ok,
                              key: y,
                              status: I.status,
                              error: I.ok ? void 0 : `Upload failed with status ${I.status}`,
                            };
                          } catch (I) {
                            return {
                              success: !1,
                              key: y,
                              status: 503,
                              error: I instanceof Error ? I.message : "Upload failed",
                            };
                          }
                        })(),
                        index: Fe,
                        objectType: D.type,
                        objectSize: D.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: y,
                          error: `Blob not found for checksum ${j}`,
                        }),
                        index: Fe,
                      };
              })
            );
          };
        e.createUploadPromises = l;
        const s = async ({ functionKey: u, objects: d }) => {
          (await (0, o.checkRestrictedEnvironment)(),
            i("trackObjectStoreAction", { action: "upload" }));
          const f = await (0, e.createUploadPromises)({ functionKey: u, objects: d });
          return await Promise.all(f.map((_) => _.promise));
        };
        e.upload = s;
      })(Xe)),
    Xe
  );
}
var he = {},
  tr;
function Xn() {
  if (tr) return he;
  ((tr = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.deleteObjects = void 0));
  const e = xe(),
    t = E(),
    a = Ce(),
    n = (0, w().getCallBridge)(),
    i = async ({ functionKey: r, keys: c }) => {
      if (
        (await (0, a.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "delete" }),
        !r || r.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to delete objects");
      if (!Array.isArray(c) || c.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      await Promise.all(
        c.map(async (l) => {
          await (0, e.invoke)(r, { key: l });
        }),
      );
    };
  return ((he.deleteObjects = i), he);
}
var ge = {},
  rr;
function Zn() {
  if (rr) return ge;
  ((rr = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.download = void 0));
  const e = xe(),
    t = E(),
    a = Ce(),
    n = (0, w().getCallBridge)(),
    i = async ({ functionKey: r, keys: c }) => {
      if (
        (await (0, a.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "download" }),
        !r || r.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(c) || c.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      const l = await (0, e.invoke)(r, { keys: c });
      if (!l || typeof l != "object")
        throw new t.BridgeAPIError("Invalid response from functionKey");
      const s = Object.entries(l).map(async ([d, f]) => {
        try {
          const g = await fetch(d, { method: "GET" });
          if (!g.ok)
            return {
              success: !1,
              key: f,
              status: g.status,
              error: `Download failed with status ${g.status}`,
            };
          const _ = await g.blob();
          return { success: !0, key: f, blob: _, status: g.status };
        } catch (g) {
          return {
            success: !1,
            key: f,
            status: 503,
            error: g instanceof Error ? g.message : "Download failed",
          };
        }
      });
      return await Promise.all(s);
    };
  return ((ge.download = i), ge);
}
var _e = {},
  nr;
function $n() {
  if (nr) return _e;
  ((nr = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.getMetadata = void 0));
  const e = xe(),
    t = E(),
    a = Ce(),
    n = (0, w().getCallBridge)(),
    i = async ({ functionKey: r, keys: c }) => {
      if (
        (await (0, a.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "getMetadata" }),
        !r || r.length === 0)
      )
        throw new t.BridgeAPIError(
          "functionKey is required to filter and generate object metadata",
        );
      if (!Array.isArray(c) || c.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      return await Promise.all(
        c.map(async (s) => {
          const u = await (0, e.invoke)(r, { key: s });
          return !u || typeof u != "object"
            ? { key: s, error: "Invalid response from functionKey" }
            : u;
        }),
      );
    };
  return ((_e.getMetadata = i), _e);
}
var ir;
function ei() {
  return (
    ir ||
      ((ir = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = Yn();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const a = Xn(),
          o = Zn(),
          n = $n();
        e.objectStore = {
          upload: t.upload,
          download: o.download,
          getMetadata: n.getMetadata,
          delete: a.deleteObjects,
        };
      })(Ye)),
    Ye
  );
}
var or;
function ti() {
  return (
    or ||
      ((or = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = O;
        (t.__exportStar(ei(), e), t.__exportStar(rn(), e));
      })(Qe)),
    Qe
  );
}
var Ze = {},
  pe = {},
  T = {},
  M = {},
  je = {},
  sr;
function ri() {
  if (sr) return je;
  ((sr = 1), Object.defineProperty(je, "__esModule", { value: !0 }));
  const e = F();
  let t = class {
    constructor(o) {
      ((this._sdkKey = o),
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
    setValues(o, n) {
      var i;
      if (!o) return !1;
      const r = (0, e._typedJsonParse)(o.data, "has_updates", "EvaluationResponse");
      return r == null
        ? !1
        : ((this._source = o.source),
          r?.has_updates !== !0 ||
            ((this._rawValues = o.data),
            (this._lcut = r.time),
            (this._receivedAt = o.receivedAt),
            (this._values = r),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(o.source, r)),
            o.source && r.user && this._setWarningState(n, r),
            e.SDKFlags.setFlags(this._sdkKey, (i = r.sdk_flags) !== null && i !== void 0 ? i : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(o) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.feature_gates,
        o,
      );
    }
    getConfig(o) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.dynamic_configs,
        o,
      );
    }
    getLayer(o) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.layer_configs,
        o,
      );
    }
    getParamStore(o) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.param_stores,
        o,
      );
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var o;
      return (o = this._values) === null || o === void 0 ? void 0 : o.exposures;
    }
    _extractBootstrapMetadata(o, n) {
      if (o !== "Bootstrap") return null;
      const i = {};
      return (
        n.user && (i.user = n.user),
        n.sdkInfo && (i.generatorSDKInfo = n.sdkInfo),
        (i.lcut = n.time),
        i
      );
    }
    _getDetailedStoreResult(o, n) {
      let i = null;
      return (
        o && (i = o[n] ? o[n] : o[(0, e._DJB2)(n)]),
        { result: i, details: this._getDetails(i == null) }
      );
    }
    _setWarningState(o, n) {
      var i, r;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((i = o.customIDs) === null || i === void 0 ? void 0 : i.stableID) !== c &&
        ((!((r = o.customIDs) === null || r === void 0) && r.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in n) {
        const l = n.user;
        (0, e._getFullUserHash)(o) !== (0, e._getFullUserHash)(l) &&
          this._warnings.add("PartialUserMatch");
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues")
        return { reason: this._source };
      const o = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (o.warnings = Array.from(this._warnings)), o);
    }
    _getDetails(o) {
      var n, i;
      const r = this.getCurrentSourceDetails();
      let c = r.reason;
      const l = (n = r.warnings) !== null && n !== void 0 ? n : [];
      (this._source === "Bootstrap" && l.length > 0 && (c = c + l[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${o ? "Unrecognized" : "Recognized"}`));
      const s =
        this._source === "Bootstrap" && (i = this._bootstrapMetadata) !== null && i !== void 0
          ? i
          : void 0;
      return (s && (r.bootstrapMetadata = s), Object.assign(Object.assign({}, r), { reason: c }));
    }
  };
  return ((je.default = t), je);
}
var q = {},
  ve = {},
  ar;
function ni() {
  if (ar) return ve;
  ((ar = 1),
    Object.defineProperty(ve, "__esModule", { value: !0 }),
    (ve._resolveDeltasResponse = void 0));
  const e = F(),
    t = 2;
  function a(r, c) {
    const l = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!l) return { hadBadDeltaChecksum: !0 };
    const s = o(r, l),
      u = n(s),
      d = (0, e._DJB2Object)(
        {
          feature_gates: u.feature_gates,
          dynamic_configs: u.dynamic_configs,
          layer_configs: u.layer_configs,
        },
        t,
      );
    return d === l.checksumV2
      ? JSON.stringify(u)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: u,
          badFullResponse: l.deltas_full_response,
        };
  }
  ve._resolveDeltasResponse = a;
  function o(r, c) {
    return Object.assign(Object.assign(Object.assign({}, r), c), {
      feature_gates: Object.assign(Object.assign({}, r.feature_gates), c.feature_gates),
      layer_configs: Object.assign(Object.assign({}, r.layer_configs), c.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, r.dynamic_configs), c.dynamic_configs),
    });
  }
  function n(r) {
    const c = r;
    return (
      i(r.deleted_gates, c.feature_gates),
      delete c.deleted_gates,
      i(r.deleted_configs, c.dynamic_configs),
      delete c.deleted_configs,
      i(r.deleted_layers, c.layer_configs),
      delete c.deleted_layers,
      c
    );
  }
  function i(r, c) {
    r?.forEach((l) => {
      delete c[l];
    });
  }
  return ve;
}
var lr;
function nn() {
  if (lr) return q;
  lr = 1;
  var e =
    (q && q.__awaiter) ||
    function (n, i, r, c) {
      function l(s) {
        return s instanceof r
          ? s
          : new r(function (u) {
              u(s);
            });
      }
      return new (r || (r = Promise))(function (s, u) {
        function d(_) {
          try {
            g(c.next(_));
          } catch (p) {
            u(p);
          }
        }
        function f(_) {
          try {
            g(c.throw(_));
          } catch (p) {
            u(p);
          }
        }
        function g(_) {
          _.done ? s(_.value) : l(_.value).then(d, f);
        }
        g((c = c.apply(n, i || [])).next());
      });
    };
  Object.defineProperty(q, "__esModule", { value: !0 });
  const t = F(),
    a = ni();
  class o extends t.NetworkCore {
    constructor(i, r) {
      super(i, r);
      const c = i?.networkConfig;
      ((this._option = i),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          c?.initializeUrl,
          c?.api,
          c?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(i, r, c, l, s) {
      return e(this, void 0, void 0, function* () {
        var u, d, f, g, _, p;
        const v = r ? (0, t._typedJsonParse)(r, "has_updates", "InitializeResponse") : null;
        let b = {
          user: l,
          hash:
            (f =
              (d = (u = this._option) === null || u === void 0 ? void 0 : u.networkConfig) ===
                null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (v?.has_updates) {
          const m =
            v?.hash_used !==
            ((p =
              (_ = (g = this._option) === null || g === void 0 ? void 0 : g.networkConfig) ===
                null || _ === void 0
                ? void 0
                : _.initializeHashAlgorithm) !== null && p !== void 0
              ? p
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: s && !m ? v.time : 0,
            previousDerivedFields: "derived_fields" in v && s ? v.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: v.full_checksum,
            partialUserMatchSinceTime: m ? 0 : v.time,
          });
        }
        return this._fetchEvaluations(i, v, b, c);
      });
    }
    _fetchEvaluations(i, r, c, l) {
      return e(this, void 0, void 0, function* () {
        var s, u;
        const d = yield this.post({
          sdkKey: i,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: l,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (s = d?.body) !== null && s !== void 0 ? s : null;
        if (
          r?.has_updates !== !0 ||
          ((u = d.body) === null || u === void 0 ? void 0 : u.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const f = (0, a._resolveDeltasResponse)(r, d.body);
        return typeof f == "string"
          ? f
          : this._fetchEvaluations(
              i,
              r,
              Object.assign(Object.assign(Object.assign({}, c), f), {
                deltasResponseRequested: !1,
              }),
              l,
            );
      });
    }
  }
  return ((q.default = o), q);
}
var ye = {},
  ur;
function ii() {
  if (ur) return ye;
  ((ur = 1),
    Object.defineProperty(ye, "__esModule", { value: !0 }),
    (ye._makeParamStoreGetter = void 0));
  const e = F(),
    t = { disableExposureLog: !0 };
  function a(u) {
    return u == null || u.disableExposureLog === !1;
  }
  function o(u, d) {
    return d != null && !(0, e._isTypeMatch)(u, d);
  }
  function n(u, d) {
    return u.value;
  }
  function i(u, d, f) {
    return u.getFeatureGate(d.gate_name, a(f) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function r(u, d, f, g) {
    const p = u.getDynamicConfig(d.config_name, a(g) ? void 0 : t).get(d.param_name);
    return o(p, f) ? f : p;
  }
  function c(u, d, f, g) {
    const p = u.getExperiment(d.experiment_name, a(g) ? void 0 : t).get(d.param_name);
    return o(p, f) ? f : p;
  }
  function l(u, d, f, g) {
    const p = u.getLayer(d.layer_name, a(g) ? void 0 : t).get(d.param_name);
    return o(p, f) ? f : p;
  }
  function s(u, d, f) {
    return (g, _) => {
      if (d == null) return _;
      const p = d[g];
      if (p == null || (_ != null && (0, e._typeOf)(_) !== p.param_type)) return _;
      switch (p.ref_type) {
        case "static":
          return n(p);
        case "gate":
          return i(u, p, f);
        case "dynamic_config":
          return r(u, p, _, f);
        case "experiment":
          return c(u, p, _, f);
        case "layer":
          return l(u, p, _, f);
        default:
          return _;
      }
    };
  }
  return ((ye._makeParamStoreGetter = s), ye);
}
var k = {},
  cr;
function oi() {
  if (cr) return k;
  cr = 1;
  var e =
    (k && k.__awaiter) ||
    function (n, i, r, c) {
      function l(s) {
        return s instanceof r
          ? s
          : new r(function (u) {
              u(s);
            });
      }
      return new (r || (r = Promise))(function (s, u) {
        function d(_) {
          try {
            g(c.next(_));
          } catch (p) {
            u(p);
          }
        }
        function f(_) {
          try {
            g(c.throw(_));
          } catch (p) {
            u(p);
          }
        }
        function g(_) {
          _.done ? s(_.value) : l(_.value).then(d, f);
        }
        g((c = c.apply(n, i || [])).next());
      });
    };
  (Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.StatsigEvaluationsDataAdapter = void 0));
  const t = F(),
    a = nn();
  let o = class extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(i, r, c) {
      (super.attach(i, r, c),
        c !== null && c instanceof a.default
          ? (this._network = c)
          : (this._network = new a.default(r ?? {})));
    }
    getDataAsync(i, r, c) {
      return this._getDataAsyncImpl(i, (0, t._normalizeUser)(r, this._options), c);
    }
    prefetchData(i, r) {
      return this._prefetchDataImpl(i, r);
    }
    setData(i) {
      const r = (0, t._typedJsonParse)(i, "has_updates", "data");
      r && "user" in r
        ? super.setData(i, r.user)
        : t.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(i, r) {
      super.setData(i, r);
    }
    _fetchFromNetwork(i, r, c, l) {
      return e(this, void 0, void 0, function* () {
        var s;
        const u = yield (s = this._network) === null || s === void 0
          ? void 0
          : s.fetchEvaluations(this._getSdkKey(), i, c?.priority, r, l);
        return u ?? null;
      });
    }
    _getCacheKey(i) {
      var r;
      const c = (0, t._getStorageKey)(
        this._getSdkKey(),
        i,
        (r = this._options) === null || r === void 0 ? void 0 : r.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${c}`;
    }
    _isCachedResultValidFor204(i, r) {
      return i.fullUserHash != null && i.fullUserHash === (0, t._getFullUserHash)(r);
    }
  };
  return ((k.StatsigEvaluationsDataAdapter = o), k);
}
var dr;
function si() {
  if (dr) return M;
  dr = 1;
  var e =
    (M && M.__awaiter) ||
    function (c, l, s, u) {
      function d(f) {
        return f instanceof s
          ? f
          : new s(function (g) {
              g(f);
            });
      }
      return new (s || (s = Promise))(function (f, g) {
        function _(b) {
          try {
            v(u.next(b));
          } catch (m) {
            g(m);
          }
        }
        function p(b) {
          try {
            v(u.throw(b));
          } catch (m) {
            g(m);
          }
        }
        function v(b) {
          b.done ? f(b.value) : d(b.value).then(_, p);
        }
        v((u = u.apply(c, l || [])).next());
      });
    };
  Object.defineProperty(M, "__esModule", { value: !0 });
  const t = F(),
    a = ri(),
    o = nn(),
    n = ii(),
    i = oi();
  let r = class rt extends t.StatsigClientBase {
    static instance(l) {
      const s = (0, t._getStatsigGlobal)().instance(l);
      return s instanceof rt
        ? s
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new rt(l ?? "", {}));
    }
    constructor(l, s, u = null) {
      var d, f;
      t.SDKType._setClientType(l, "javascript-client");
      const g = new o.default(u, (p) => {
        this.$emt(p);
      });
      (super(
        l,
        (d = u?.dataAdapter) !== null && d !== void 0 ? d : new i.StatsigEvaluationsDataAdapter(),
        g,
        u,
      ),
        (this.getFeatureGate = this._memoize(
          t.MemoPrefix._gate,
          this._getFeatureGateImpl.bind(this),
        )),
        (this.getDynamicConfig = this._memoize(
          t.MemoPrefix._dynamicConfig,
          this._getDynamicConfigImpl.bind(this),
        )),
        (this.getExperiment = this._memoize(
          t.MemoPrefix._experiment,
          this._getExperimentImpl.bind(this),
        )),
        (this.getLayer = this._memoize(t.MemoPrefix._layer, this._getLayerImpl.bind(this))),
        (this.getParameterStore = this._memoize(
          t.MemoPrefix._paramStore,
          this._getParameterStoreImpl.bind(this),
        )),
        (this._store = new a.default(l)),
        (this._network = g),
        (this._user = this._configureUser(s, u)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const _ = (f = u?.plugins) !== null && f !== void 0 ? f : [];
      for (const p of _) p.bind(this);
    }
    initializeSync(l) {
      var s;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((s = this._store.getWarnings()) !== null && s !== void 0 ? s : []),
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
    updateUserSync(l, s) {
      const u = performance.now();
      try {
        return this._updateUserSyncImpl(l, s, u);
      } catch (d) {
        const f = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(f, u);
      }
    }
    _updateUserSyncImpl(l, s, u) {
      var d;
      const f = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(l);
      const g = this.dataAdapter.getDataSync(this._user);
      (g == null && f.push("NoCachedValues"),
        this._store.setValues(g, this._user),
        this._finalizeUpdate(g));
      const _ = s?.disableBackgroundCacheRefresh;
      return _ === !0 || (_ == null && g?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          )
        : (this._runPostUpdate(g ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          ));
    }
    updateUserAsync(l, s) {
      return e(this, void 0, void 0, function* () {
        const u = performance.now();
        try {
          return yield this._updateUserAsyncImpl(l, s);
        } catch (d) {
          const f = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(f, u);
        }
      });
    }
    _updateUserAsyncImpl(l, s) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(l);
        const u = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(u);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, u, s)),
          u !== this._user)
        )
          return (0, t.createUpdateDetails)(
            !1,
            this._store.getSource(),
            -1,
            new Error("User changed during update"),
            this._network.getLastUsedInitUrlAndReset(),
          );
        let f = !1;
        (d != null &&
          (t.Diagnostics._markInitProcessStart(this._sdkKey),
          (f = this._store.setValues(d, this._user)),
          t.Diagnostics._markInitProcessEnd(this._sdkKey, { success: f })),
          this._finalizeUpdate(d),
          f ||
            (this._errorBoundary.attachErrorIfNoneExists(
              t.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          t.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            f,
            this._store.getCurrentSourceDetails(),
          ));
        const g = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          f,
          this._store.getSource(),
          g,
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
        session: t.StatsigSession.get(this._sdkKey),
        stableID: t.StableID.get(this._sdkKey),
        sdkInstanceID: this._sdkInstanceID,
      };
    }
    checkGate(l, s) {
      return this.getFeatureGate(l, s).value;
    }
    logEvent(l, s, u) {
      const d = typeof l == "string" ? { eventName: l, value: s, metadata: u } : l;
      (this.$emt({ name: "log_event_called", event: d }),
        this._logger.enqueue(
          Object.assign(Object.assign({}, d), { user: this._user, time: Date.now() }),
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
          t.Storage.isReady() || (yield t.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, l)
        );
      });
    }
    _createErrorUpdateDetails(l, s) {
      var u;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - s,
        l,
        null,
        [...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : [])],
      );
    }
    _finalizeUpdate(l) {
      (this._store.finalize(), this._setStatus("Ready", l));
    }
    _runPostUpdate(l, s) {
      this.dataAdapter.getDataAsync(l, s, { priority: "low" }).catch((u) => {
        t.Log.error("An error occurred after update.", u);
      });
    }
    _resetForUser(l) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(l, this._options)));
    }
    _configureUser(l, s) {
      var u;
      const d = (0, t._normalizeUser)(l, s),
        f = (u = d.customIDs) === null || u === void 0 ? void 0 : u.stableID;
      return (f && t.StableID.setOverride(f, this._sdkKey), d);
    }
    _getFeatureGateImpl(l, s) {
      var u, d;
      const { result: f, details: g } = this._store.getGate(l),
        _ = (0, t._makeFeatureGate)(l, g, f),
        p =
          (d = (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, _, this._user, s),
        v = p ?? _;
      return (
        this._enqueueExposure(
          l,
          (0, t._createGateExposure)(this._user, v, this._store.getExposureMapping()),
          s,
        ),
        this.$emt({ name: "gate_evaluation", gate: v }),
        v
      );
    }
    _getDynamicConfigImpl(l, s) {
      var u, d;
      const { result: f, details: g } = this._store.getConfig(l),
        _ = (0, t._makeDynamicConfig)(l, g, f),
        p =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(u, _, this._user, s),
        v = p ?? _;
      return (
        this._enqueueExposure(
          l,
          (0, t._createConfigExposure)(this._user, v, this._store.getExposureMapping()),
          s,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: v }),
        v
      );
    }
    _getExperimentImpl(l, s) {
      var u, d, f, g;
      const { result: _, details: p } = this._store.getConfig(l),
        v = (0, t._makeExperiment)(l, p, _);
      v.__evaluation != null &&
        (v.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (u = v.__evaluation) === null || u === void 0 ? void 0 : u.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const b =
          (g =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || g === void 0
            ? void 0
            : g.call(f, v, this._user, s),
        m = b ?? v;
      return (
        this._enqueueExposure(
          l,
          (0, t._createConfigExposure)(this._user, m, this._store.getExposureMapping()),
          s,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: m }),
        m
      );
    }
    _getLayerImpl(l, s) {
      var u, d, f;
      const { result: g, details: _ } = this._store.getLayer(l),
        p = (0, t._makeLayer)(l, _, g),
        v =
          (d =
            (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, p, this._user, s);
      s?.disableExposureLog && this._logger.incrementNonExposureCount(l);
      const b = (0, t._mergeOverride)(
        p,
        v,
        (f = v?.__value) !== null && f !== void 0 ? f : p.__value,
        (m) => {
          s?.disableExposureLog ||
            this._enqueueExposure(
              l,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                m,
                this._store.getExposureMapping(),
              ),
              s,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: b }), b);
    }
    _getParameterStoreImpl(l, s) {
      var u, d;
      const { result: f, details: g } = this._store.getParamStore(l);
      this._logger.incrementNonExposureCount(l);
      const _ = {
          name: l,
          details: g,
          __configuration: f,
          get: (0, n._makeParamStoreGetter)(this, f, s),
        },
        p =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(u, _, s);
      return (
        p != null &&
          ((_.__configuration = p.config),
          (_.details = p.details),
          (_.get = (0, n._makeParamStoreGetter)(this, p.config, s))),
        _
      );
    }
  };
  return ((M.default = r), M);
}
var fr;
function ai() {
  return (
    fr ||
      ((fr = 1),
      (function (e) {
        var t =
            (T && T.__createBinding) ||
            (Object.create
              ? function (r, c, l, s) {
                  s === void 0 && (s = l);
                  var u = Object.getOwnPropertyDescriptor(c, l);
                  ((!u || ("get" in u ? !c.__esModule : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return c[l];
                      },
                    }),
                    Object.defineProperty(r, s, u));
                }
              : function (r, c, l, s) {
                  (s === void 0 && (s = l), (r[s] = c[l]));
                }),
          a =
            (T && T.__exportStar) ||
            function (r, c) {
              for (var l in r)
                l !== "default" && !Object.prototype.hasOwnProperty.call(c, l) && t(c, r, l);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const o = F(),
          n = si();
        ((e.StatsigClient = n.default), a(F(), e));
        const i = Object.assign((0, o._getStatsigGlobal)(), { StatsigClient: n.default });
        e.default = i;
      })(T)),
    T
  );
}
var me = {},
  be = {},
  hr;
function li() {
  if (hr) return be;
  ((hr = 1),
    Object.defineProperty(be, "__esModule", { value: !0 }),
    (be.initFeatureFlags = void 0));
  const e = w(),
    t = E(),
    a = Se(),
    o = 500,
    n = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    r = (l) => {
      if (!l || !l.user)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(l).some((s) => typeof s == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (l) => (r(l), i("initFeatureFlags", { user: l.user }));
  return (
    (be.initFeatureFlags = (0, a.withRateLimiter)(
      c,
      o,
      n,
      `Feature flags initialisation calls are rate limited at ${o}req/${n / 1e3}s`,
    )),
    be
  );
}
var gr;
function ui() {
  if (gr) return me;
  ((gr = 1),
    Object.defineProperty(me, "__esModule", { value: !0 }),
    (me.ForgeDataAdapter = void 0));
  const e = li();
  class t {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(o, n, i) {
      var r;
      if (o) return o;
      this.environment = ((r = this.options) === null || r === void 0 ? void 0 : r.environment) || {
        tier: "development",
      };
      const c = { ...n, statsigEnvironment: this.environment },
        l = await (0, e.initFeatureFlags)({ user: c }),
        s = {
          source: "Network",
          data: JSON.stringify(l),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = s), s);
    }
    getDataSync(o) {
      return this.cache;
    }
    async attach(o, n, i) {
      this.options = n;
    }
    async prefetchData() {}
    async setData(o) {}
    async setDataLegacy(o) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((me.ForgeDataAdapter = t), me);
}
var $e = {},
  _r;
function on() {
  return (
    _r ||
      ((_r = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = e.ExtensionEnvironment = void 0),
          (function (a) {
            ((a.DEVELOPMENT = "DEVELOPMENT"),
              (a.STAGING = "STAGING"),
              (a.PRODUCTION = "PRODUCTION"));
          })(e.ExtensionEnvironment || (e.ExtensionEnvironment = {})));
        var t;
        ((function (a) {
          a.USER_ACCESS = "USER_ACCESS";
        })(t || (t = {})),
          (function (a) {
            a.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })($e)),
    $e
  );
}
var we = {},
  pr;
function ci() {
  if (pr) return we;
  ((pr = 1),
    Object.defineProperty(we, "__esModule", { value: !0 }),
    (we.trackFeatureFlagEvent = void 0));
  const e = w(),
    t = E(),
    a = on(),
    o = Se(),
    n = 500,
    i = 1e3 * 25,
    r = (0, e.getCallBridge)(),
    c = (s) => {
      if (!s || !s.type || !s.properties)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(s.type.toUpperCase() in a.FeatureFlagEventType))
        throw new t.BridgeAPIError("Event type is not supported");
      if (Object.values(s).some((u) => typeof u == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    l = (s) => (c(s), r("trackFeatureFlagEvent", s));
  return (
    (we.trackFeatureFlagEvent = (0, o.withRateLimiter)(
      l,
      n,
      i,
      `Feature flags calls are rate limited at ${n}req/${i / 1e3}s`,
    )),
    we
  );
}
var vr;
function di() {
  if (vr) return pe;
  ((vr = 1),
    Object.defineProperty(pe, "__esModule", { value: !0 }),
    (pe.ForgeFeatureFlags = void 0));
  const e = ai(),
    t = ui(),
    a = on(),
    o = ci();
  class n {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.eventProps = {}),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(r, c = {}) {
      var l;
      if (this.isInitialized()) return;
      this.dataAdapter = new t.ForgeDataAdapter();
      const s = {
        environment: { tier: c.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (l = s.environment) === null || l === void 0 ? void 0 : l.tier),
        (this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(r), s)),
        await this.client.initializeAsync(),
        (this.initialized = !0));
    }
    checkFlag(r) {
      if (!this.isInitialized() || !this.client)
        throw (
          this.sendCheckFlagEvent(r, !1),
          new Error("ForgeFeatureFlags not initialized. Call initialize() first.")
        );
      return (this.sendCheckFlagEvent(r, !0), this.client.checkGate(r, { disableExposureLog: !0 }));
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
    convertUser(r) {
      return {
        userID: r.userId,
        custom: { ...(r.custom || {}), ...(r.attributes || {}) },
        customIDs: r.identifiers || {},
      };
    }
    sendCheckFlagEvent(r, c) {
      const l = {
        type: a.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: r,
          success: c,
        },
      };
      (0, o.trackFeatureFlagEvent)(l);
    }
  }
  return ((pe.ForgeFeatureFlags = n), pe);
}
var yr;
function fi() {
  return (
    yr ||
      ((yr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = di();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })(Ze)),
    Ze
  );
}
var mr;
function hi() {
  return (
    mr ||
      ((mr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = O;
        var a = vn();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return a.NavigationTarget;
          },
        }),
          t.__exportStar(xe(), e),
          t.__exportStar(wn(), e),
          t.__exportStar(it(), e),
          t.__exportStar(qn(), e),
          t.__exportStar(Un(), e),
          t.__exportStar(Gn(), e),
          t.__exportStar(Vn(), e),
          t.__exportStar(Kn(), e),
          t.__exportStar(Jn(), e),
          (e.i18n = t.__importStar(Qn())),
          t.__exportStar(ti(), e),
          t.__exportStar(fi(), e));
      })(Be)),
    Be
  );
}
var Ee = hi();
const gi = () => {
    const [e, t] = C.useState(null),
      [a, o] = C.useState(null),
      [n, i] = C.useState(!1),
      [r, c] = C.useState(null),
      [l, s] = C.useState(null),
      [u, d] = C.useState(null),
      [f, g] = C.useState(null),
      [_, p] = C.useState({ userName: "", product: "" }),
      v = async (y) => {
        (i(!0), c(null));
        try {
          const j = await Ee.invoke("fetch", { action: y });
          t(j);
        } catch (j) {
          c(j instanceof Error ? j.message : "Unknown error occurred");
        } finally {
          i(!1);
        }
      },
      b = async () => {
        if (!_.userName.trim() || !_.product.trim()) {
          s("Please fill in all fields");
          return;
        }
        (i(!0), s(null));
        try {
          (await Ee.invoke("insertUserOrOrder", _), s(null), p({ userName: "", product: "" }));
        } catch (y) {
          s(y instanceof Error ? y.message : "Failed to insert user/order");
        } finally {
          i(!1);
        }
      },
      m = async () => {
        (i(!0), d(null));
        try {
          (await Ee.invoke("clearCache"), d(null));
        } catch (y) {
          d(y instanceof Error ? y.message : "Failed to clear cache");
        } finally {
          i(!1);
        }
      },
      x = async () => {
        (i(!0), g(null));
        try {
          const y = await Ee.invoke("runPerformanceAnalyze");
          (o(y?.DML), g(null));
        } catch (y) {
          g(y instanceof Error ? y.message : "Failed to run performance analysis");
        } finally {
          i(!1);
        }
      };
    return h.jsxs("div", {
      style: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
      },
      children: [
        h.jsx("h1", {
          style: { color: "#0052CC", marginBottom: "30px" },
          children: "🚀 Forge SQL ORM Cache Demo",
        }),
        h.jsxs("div", {
          style: {
            padding: "20px",
            backgroundColor: "#F4F5F7",
            borderRadius: "8px",
            marginBottom: "30px",
          },
          children: [
            h.jsx("h3", {
              style: { color: "#172B4D", marginBottom: "15px" },
              children: "How it works:",
            }),
            h.jsxs("ul", {
              style: { color: "#6B778C", lineHeight: "1.6" },
              children: [
                h.jsxs("li", {
                  children: [
                    h.jsx("strong", { children: "Non-Cached Query:" }),
                    " Executes a fresh query with 1-second sleep every time",
                  ],
                }),
                h.jsxs("li", {
                  children: [
                    h.jsx("strong", { children: "Cached Query:" }),
                    " Uses global cache - first execution takes time, subsequent calls are instant",
                  ],
                }),
                h.jsxs("li", {
                  children: [
                    h.jsx("strong", { children: "Timeout:" }),
                    " Tests query timeout behavior with 10-second sleep",
                  ],
                }),
                h.jsxs("li", {
                  children: [
                    h.jsx("strong", { children: "Out of Memory:" }),
                    " Tests memory limit with large data operations",
                  ],
                }),
                h.jsxs("li", {
                  children: [
                    h.jsx("strong", { children: "Add User & Order:" }),
                    " Uses ",
                    h.jsx("code", { children: "executeWithCacheContext" }),
                    " to automatically clear cache after operations",
                  ],
                }),
                h.jsxs("li", {
                  children: [
                    h.jsx("strong", { children: "Cache Management:" }),
                    " Clear cache manually or run performance analysis",
                  ],
                }),
              ],
            }),
          ],
        }),
        h.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            h.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Query Performance Test",
            }),
            h.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Test the difference between cached and non-cached queries. Both queries include a 1-second sleep to demonstrate the performance difference.",
            }),
            h.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "10px",
                marginBottom: "20px",
              },
              children: [
                h.jsx("button", {
                  onClick: () => v("slow"),
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
                h.jsx("button", {
                  onClick: () => v("cacheable"),
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
                h.jsx("button", {
                  onClick: () => v("timeout"),
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
                h.jsx("button", {
                  onClick: () => v("outOfMemory"),
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
            r &&
              h.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "20px",
                },
                children: [h.jsx("strong", { children: "Error:" }), " ", r],
              }),
            e &&
              !r &&
              h.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginTop: "10px",
                },
                children: [
                  h.jsxs("h3", {
                    style: { margin: "0 0 10px 0", color: "#172B4D" },
                    children: ["Query Results (", e.times, "ms)"],
                  }),
                  h.jsxs("div", {
                    style: { fontSize: "14px", color: "#6B778C", marginBottom: "10px" },
                    children: ["Found ", e.rows.length, " records"],
                  }),
                  h.jsx("div", {
                    style: { maxHeight: "200px", overflowY: "auto" },
                    children: h.jsxs("table", {
                      style: { width: "100%", borderCollapse: "collapse" },
                      children: [
                        h.jsx("thead", {
                          children: h.jsxs("tr", {
                            style: { backgroundColor: "#E9ECF0" },
                            children: [
                              h.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User ID",
                              }),
                              h.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User Name",
                              }),
                              h.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Product",
                              }),
                              h.jsx("th", {
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
                        h.jsx("tbody", {
                          children: e.rows.map((y, j) =>
                            h.jsxs(
                              "tr",
                              {
                                children: [
                                  h.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: y.userId,
                                  }),
                                  h.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: y.userName,
                                  }),
                                  h.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: y.product || "N/A",
                                  }),
                                  h.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: y.productId || "N/A",
                                  }),
                                ],
                              },
                              j,
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
        h.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            h.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Add User & Order",
            }),
            h.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Add a new user and order. User ID and Product ID are optional - they will be auto-generated if not provided. The system will automatically match existing users and clear cache after operations.",
            }),
            h.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginBottom: "20px",
              },
              children: [
                h.jsxs("div", {
                  children: [
                    h.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User ID (optional):",
                    }),
                    h.jsx("input", {
                      type: "number",
                      value: _.userId || "",
                      onChange: (y) =>
                        p({ ..._, userId: y.target.value ? parseInt(y.target.value) : void 0 }),
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
                h.jsxs("div", {
                  children: [
                    h.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User Name:",
                    }),
                    h.jsx("input", {
                      type: "text",
                      value: _.userName,
                      onChange: (y) => p({ ..._, userName: y.target.value }),
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
                h.jsxs("div", {
                  children: [
                    h.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product ID (optional):",
                    }),
                    h.jsx("input", {
                      type: "number",
                      value: _.productId || "",
                      onChange: (y) =>
                        p({ ..._, productId: y.target.value ? parseInt(y.target.value) : void 0 }),
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
                h.jsxs("div", {
                  children: [
                    h.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product:",
                    }),
                    h.jsx("input", {
                      type: "text",
                      value: _.product,
                      onChange: (y) => p({ ..._, product: y.target.value }),
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
            h.jsx("button", {
              onClick: b,
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
            l &&
              h.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginTop: "15px",
                },
                children: [h.jsx("strong", { children: "Error:" }), " ", l],
              }),
          ],
        }),
        h.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            h.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Cache Management",
            }),
            h.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children: "Manage the cache and run performance analysis.",
            }),
            h.jsxs("div", {
              style: { display: "flex", gap: "10px", marginBottom: "15px" },
              children: [
                h.jsx("button", {
                  onClick: m,
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
                h.jsx("button", {
                  onClick: x,
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
              h.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "15px",
                },
                children: [h.jsx("strong", { children: "Error:" }), " ", u],
              }),
            f &&
              h.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "15px",
                },
                children: [h.jsx("strong", { children: "Error:" }), " ", f],
              }),
          ],
        }),
        a &&
          !f &&
          h.jsxs("div", {
            style: {
              marginBottom: "40px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            },
            children: [
              h.jsx("h2", {
                style: { color: "#172B4D", marginBottom: "20px" },
                children: "Performance Analysis Results",
              }),
              h.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginBottom: "20px",
                },
                children: [
                  h.jsxs("div", {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "15px",
                      marginBottom: "20px",
                    },
                    children: [
                      h.jsxs("div", {
                        children: [h.jsx("strong", { children: "Window:" }), " ", a.window],
                      }),
                      h.jsxs("div", {
                        children: [h.jsx("strong", { children: "Top Queries:" }), " ", a.top],
                      }),
                      h.jsxs("div", {
                        children: [
                          h.jsx("strong", { children: "Latency Threshold:" }),
                          " ",
                          a.warnThresholdMs,
                          "ms",
                        ],
                      }),
                      h.jsxs("div", {
                        children: [
                          h.jsx("strong", { children: "Memory Threshold:" }),
                          " ",
                          (a.memoryThresholdBytes / 1024 / 1024).toFixed(1),
                          "MB",
                        ],
                      }),
                      h.jsxs("div", {
                        children: [
                          h.jsx("strong", { children: "Generated:" }),
                          " ",
                          new Date(a.generatedAt).toLocaleString(),
                        ],
                      }),
                    ],
                  }),
                  a.rows.length > 0
                    ? h.jsxs("div", {
                        children: [
                          h.jsxs("h3", {
                            style: { margin: "0 0 15px 0", color: "#172B4D" },
                            children: ["Slow Queries Found (", a.rows.length, ")"],
                          }),
                          a.rows.map((y, j) =>
                            h.jsxs(
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
                                  h.jsxs("div", {
                                    style: {
                                      display: "grid",
                                      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                                      gap: "10px",
                                      marginBottom: "15px",
                                    },
                                    children: [
                                      h.jsxs("div", {
                                        children: [
                                          h.jsx("strong", { children: "Rank:" }),
                                          " ",
                                          y.rank,
                                        ],
                                      }),
                                      h.jsxs("div", {
                                        children: [
                                          h.jsx("strong", { children: "Type:" }),
                                          " ",
                                          y.stmtType,
                                        ],
                                      }),
                                      h.jsxs("div", {
                                        children: [
                                          h.jsx("strong", { children: "Executions:" }),
                                          " ",
                                          y.execCount,
                                        ],
                                      }),
                                      h.jsxs("div", {
                                        children: [
                                          h.jsx("strong", { children: "Avg Latency:" }),
                                          " ",
                                          y.avgLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      h.jsxs("div", {
                                        children: [
                                          h.jsx("strong", { children: "Max Latency:" }),
                                          " ",
                                          y.maxLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      h.jsxs("div", {
                                        children: [
                                          h.jsx("strong", { children: "Avg Memory:" }),
                                          " ",
                                          y.avgMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      h.jsxs("div", {
                                        children: [
                                          h.jsx("strong", { children: "Max Memory:" }),
                                          " ",
                                          y.maxMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      h.jsxs("div", {
                                        children: [
                                          h.jsx("strong", { children: "Plan Cache:" }),
                                          " ",
                                          y.planInCache ? "Yes" : "No",
                                        ],
                                      }),
                                    ],
                                  }),
                                  h.jsxs("div", {
                                    style: { marginBottom: "10px" },
                                    children: [
                                      h.jsx("strong", { children: "SQL Query:" }),
                                      h.jsx("pre", {
                                        style: {
                                          backgroundColor: "#F8F9FA",
                                          padding: "10px",
                                          borderRadius: "4px",
                                          fontSize: "12px",
                                          overflow: "auto",
                                          marginTop: "5px",
                                        },
                                        children: y.digestText,
                                      }),
                                    ],
                                  }),
                                  h.jsxs("details", {
                                    style: { marginTop: "10px" },
                                    children: [
                                      h.jsx("summary", {
                                        style: {
                                          cursor: "pointer",
                                          fontWeight: "bold",
                                          color: "#0052CC",
                                        },
                                        children: "View Execution Plan",
                                      }),
                                      h.jsx("pre", {
                                        style: {
                                          backgroundColor: "#F8F9FA",
                                          padding: "10px",
                                          borderRadius: "4px",
                                          fontSize: "11px",
                                          overflow: "auto",
                                          marginTop: "10px",
                                          whiteSpace: "pre-wrap",
                                        },
                                        children: y.plan,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              j,
                            ),
                          ),
                        ],
                      })
                    : h.jsxs("div", {
                        style: {
                          padding: "20px",
                          textAlign: "center",
                          color: "#36B37E",
                          backgroundColor: "#E8F5E8",
                          borderRadius: "4px",
                        },
                        children: [
                          h.jsx("strong", { children: "✅ No slow queries found!" }),
                          h.jsx("br", {}),
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
  _i = document.getElementById("root"),
  pi = sn.createRoot(_i),
  br = () => {
    pi.render(h.jsx(fn.StrictMode, { children: h.jsx(gi, {}) }));
  };
Ee.view.theme
  .enable()
  .then(() => {
    br();
  })
  .catch((e) => {
    (console.error(e.message), br());
  });
