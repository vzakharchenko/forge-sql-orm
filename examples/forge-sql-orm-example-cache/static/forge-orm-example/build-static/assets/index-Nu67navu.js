import { r as Zt, c as kr } from "./react-dom-vendor-u1YXTQK9.js";
import { g as qr, a as Lr, r as P } from "./client-core-vendor-DPN4DKZK.js";
import { r as Ur } from "./lodash-vendor-Cev46GZt.js";
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
var we = { exports: {} },
  q = {};
var Ve;
function Nr() {
  if (Ve) return q;
  Ve = 1;
  var e = Zt(),
    t = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(c, l, s) {
    var u,
      d = {},
      h = null,
      g = null;
    (s !== void 0 && (h = "" + s),
      l.key !== void 0 && (h = "" + l.key),
      l.ref !== void 0 && (g = l.ref));
    for (u in l) o.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (c && c.defaultProps) for (u in ((l = c.defaultProps), l)) d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: c, key: h, ref: g, props: d, _owner: n.current };
  }
  return ((q.Fragment = a), (q.jsx = r), (q.jsxs = r), q);
}
var Ke;
function $r() {
  return (Ke || ((Ke = 1), (we.exports = Nr())), we.exports);
}
var f = $r(),
  S = Zt();
const zr = qr(S);
var Ee = {},
  Ne = function (e, t) {
    return (
      (Ne =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (a, o) {
            a.__proto__ = o;
          }) ||
        function (a, o) {
          for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (a[n] = o[n]);
        }),
      Ne(e, t)
    );
  };
function er(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ne(e, t);
  function a() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((a.prototype = t.prototype), new a());
}
var ve = function () {
  return (
    (ve =
      Object.assign ||
      function (t) {
        for (var a, o = 1, n = arguments.length; o < n; o++) {
          a = arguments[o];
          for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
        }
        return t;
      }),
    ve.apply(this, arguments)
  );
};
function tr(e, t) {
  var a = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++)
      t.indexOf(o[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[n]) &&
        (a[o[n]] = e[o[n]]);
  return a;
}
function rr(e, t, a, o) {
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
function nr(e, t) {
  return function (a, o) {
    t(a, o, e);
  };
}
function ir(e, t, a, o, n, i) {
  function r(m) {
    if (m !== void 0 && typeof m != "function") throw new TypeError("Function expected");
    return m;
  }
  for (
    var c = o.kind,
      l = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      s = !t && e ? (o.static ? e : e.prototype) : null,
      u = t || (s ? Object.getOwnPropertyDescriptor(s, o.name) : {}),
      d,
      h = !1,
      g = a.length - 1;
    g >= 0;
    g--
  ) {
    var _ = {};
    for (var p in o) _[p] = p === "access" ? {} : o[p];
    for (var p in o.access) _.access[p] = o.access[p];
    _.addInitializer = function (m) {
      if (h) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(r(m || null));
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
  (s && Object.defineProperty(s, o.name, u), (h = !0));
}
function or(e, t, a) {
  for (var o = arguments.length > 2, n = 0; n < t.length; n++)
    a = o ? t[n].call(e, a) : t[n].call(e);
  return o ? a : void 0;
}
function sr(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function ar(e, t, a) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: a ? "".concat(a, " ", t) : t })
  );
}
function lr(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function ur(e, t, a, o) {
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
function cr(e, t) {
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
var me = Object.create
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
function dr(e, t) {
  for (var a in e) a !== "default" && !Object.prototype.hasOwnProperty.call(t, a) && me(t, e, a);
}
function ye(e) {
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
function Ge(e, t) {
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
function fr() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Ge(arguments[t]));
  return e;
}
function hr() {
  for (var e = 0, t = 0, a = arguments.length; t < a; t++) e += arguments[t].length;
  for (var o = Array(e), n = 0, t = 0; t < a; t++)
    for (var i = arguments[t], r = 0, c = i.length; r < c; r++, n++) o[n] = i[r];
  return o;
}
function gr(e, t, a) {
  if (a || arguments.length === 2)
    for (var o = 0, n = t.length, i; o < n; o++)
      (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), (i[o] = t[o]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function k(e) {
  return this instanceof k ? ((this.v = e), this) : new k(e);
}
function _r(e, t, a) {
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
        return new Promise(function (v, m) {
          i.push([g, p, v, m]) > 1 || l(g, p);
        });
      }),
      _ && (n[g] = _(n[g])));
  }
  function l(g, _) {
    try {
      s(o[g](_));
    } catch (p) {
      h(i[0][3], p);
    }
  }
  function s(g) {
    g.value instanceof k ? Promise.resolve(g.value.v).then(u, d) : h(i[0][2], g);
  }
  function u(g) {
    l("next", g);
  }
  function d(g) {
    l("throw", g);
  }
  function h(g, _) {
    (g(_), i.shift(), i.length && l(i[0][0], i[0][1]));
  }
}
function pr(e) {
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
          return (a = !a) ? { value: k(e[n](r)), done: !1 } : i ? i(r) : r;
        }
      : i;
  }
}
function vr(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    a;
  return t
    ? t.call(e)
    : ((e = typeof ye == "function" ? ye(e) : e[Symbol.iterator]()),
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
function yr(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var Gr = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  $e = function (e) {
    return (
      ($e =
        Object.getOwnPropertyNames ||
        function (t) {
          var a = [];
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (a[a.length] = o);
          return a;
        }),
      $e(e)
    );
  };
function mr(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var a = $e(e), o = 0; o < a.length; o++) a[o] !== "default" && me(t, e, a[o]);
  return (Gr(t, e), t);
}
function br(e) {
  return e && e.__esModule ? e : { default: e };
}
function wr(e, t, a, o) {
  if (a === "a" && !o) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return a === "m" ? o : a === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Er(e, t, a, o, n) {
  if (o === "m") throw new TypeError("Private method is not writable");
  if (o === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (o === "a" ? n.call(e, a) : n ? (n.value = a) : t.set(e, a), a);
}
function xr(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function jr(e, t, a) {
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
var Vr =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, a) {
        var o = new Error(a);
        return ((o.name = "SuppressedError"), (o.error = e), (o.suppressed = t), o);
      };
function Or(e) {
  function t(i) {
    ((e.error = e.hasError ? new Vr(i, e.error, "An error was suppressed during disposal.") : i),
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
function Sr(e, t) {
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
const Kr = {
    __extends: er,
    __assign: ve,
    __rest: tr,
    __decorate: rr,
    __param: nr,
    __esDecorate: ir,
    __runInitializers: or,
    __propKey: sr,
    __setFunctionName: ar,
    __metadata: lr,
    __awaiter: ur,
    __generator: cr,
    __createBinding: me,
    __exportStar: dr,
    __values: ye,
    __read: Ge,
    __spread: fr,
    __spreadArrays: hr,
    __spreadArray: gr,
    __await: k,
    __asyncGenerator: _r,
    __asyncDelegator: pr,
    __asyncValues: vr,
    __makeTemplateObject: yr,
    __importStar: mr,
    __importDefault: br,
    __classPrivateFieldGet: wr,
    __classPrivateFieldSet: Er,
    __classPrivateFieldIn: xr,
    __addDisposableResource: jr,
    __disposeResources: Or,
    __rewriteRelativeImportExtension: Sr,
  },
  Wr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: jr,
        get __assign() {
          return ve;
        },
        __asyncDelegator: pr,
        __asyncGenerator: _r,
        __asyncValues: vr,
        __await: k,
        __awaiter: ur,
        __classPrivateFieldGet: wr,
        __classPrivateFieldIn: xr,
        __classPrivateFieldSet: Er,
        __createBinding: me,
        __decorate: rr,
        __disposeResources: Or,
        __esDecorate: ir,
        __exportStar: dr,
        __extends: er,
        __generator: cr,
        __importDefault: br,
        __importStar: mr,
        __makeTemplateObject: yr,
        __metadata: lr,
        __param: nr,
        __propKey: sr,
        __read: Ge,
        __rest: tr,
        __rewriteRelativeImportExtension: Sr,
        __runInitializers: or,
        __setFunctionName: ar,
        __spread: fr,
        __spreadArray: gr,
        __spreadArrays: hr,
        __values: ye,
        default: Kr,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  C = Lr(Wr);
var L = {},
  We;
function Hr() {
  return (
    We ||
      ((We = 1),
      Object.defineProperty(L, "__esModule", { value: !0 }),
      (L.NavigationTarget = void 0),
      (L.NavigationTarget = {
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
    L
  );
}
var xe = {},
  je = {},
  U = {},
  N = {},
  He;
function E() {
  if (He) return N;
  ((He = 1), Object.defineProperty(N, "__esModule", { value: !0 }), (N.BridgeAPIError = void 0));
  class e extends Error {}
  return ((N.BridgeAPIError = e), N);
}
var Je;
function w() {
  if (Je) return U;
  ((Je = 1), Object.defineProperty(U, "__esModule", { value: !0 }), (U.getCallBridge = void 0));
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
  return ((U.getCallBridge = a), U);
}
var $ = {},
  Qe;
function be() {
  if (Qe) return $;
  ((Qe = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.withRateLimiter = void 0));
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
  return (($.withRateLimiter = t), $);
}
var Ye;
function Jr() {
  return (
    Ye ||
      ((Ye = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = w(),
          a = E(),
          o = be(),
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
      })(je)),
    je
  );
}
var Xe;
function Qr() {
  return (
    Xe ||
      ((Xe = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), C.__exportStar(Jr(), e));
      })(xe)),
    xe
  );
}
var Oe = {},
  z = {},
  Se = {},
  Ze;
function Cr() {
  return (
    Ze ||
      ((Ze = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = w(),
          a = E(),
          o = be(),
          n = 500,
          i = 25,
          r = 1e3 * i;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, t.getCallBridge)(),
          l = (d) => {
            if (d && Object.values(d).some((h) => typeof h == "function"))
              throw new a.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          s = (d) => async (h) => {
            l(h);
            const g = { ...h, invokeType: `ui-${d.toLowerCase()}-fetch` },
              _ = await c("invoke", g),
              { success: p, payload: v, error: m } = _ ?? {},
              b = { ...(p ? v : m) };
            if (b && b.headers)
              for (const F in b.headers)
                Array.isArray(b.headers[F]) && (b.headers[F] = b.headers[F].join(","));
            return b;
          },
          u = (d) => {
            const h = s(d);
            return (0, o.withRateLimiter)(
              h,
              n,
              r,
              `${d} invocation calls are rate limited at ${n}/${i}s`,
            );
          };
        e._invokeEndpointFn = u;
      })(Se)),
    Se
  );
}
var et;
function Yr() {
  if (et) return z;
  ((et = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.invokeRemote = void 0));
  const e = Cr(),
    t = (a) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(a);
  return ((z.invokeRemote = t), z);
}
var G = {},
  tt;
function Xr() {
  if (tt) return G;
  ((tt = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.invokeService = void 0));
  const e = Cr(),
    t = (a) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(a);
  return ((G.invokeService = t), G);
}
var rt;
function Zr() {
  return (
    rt ||
      ((rt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = C;
        (t.__exportStar(Yr(), e), t.__exportStar(Xr(), e));
      })(Oe)),
    Oe
  );
}
var Ce = {},
  V = {},
  K = {},
  nt;
function en() {
  if (nt) return K;
  ((nt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.submit = void 0));
  const e = w(),
    t = E(),
    a = (0, e.getCallBridge)(),
    o = async (n) => {
      if ((await a("submit", n)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((K.submit = o), K);
}
var W = {},
  it;
function tn() {
  if (it) return W;
  ((it = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.close = void 0));
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
  return ((W.close = o), W);
}
var H = {},
  ot;
function rn() {
  if (ot) return H;
  ((ot = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.open = void 0));
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
  return ((H.open = o), H);
}
var J = {},
  st;
function nn() {
  if (st) return J;
  ((st = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.refresh = void 0));
  const e = w(),
    t = E(),
    a = (0, e.getCallBridge)(),
    o = async (n) => {
      if ((await a("refresh", n)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((J.refresh = o), J);
}
var Q = {},
  at;
function on() {
  if (at) return Q;
  ((at = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.createHistory = void 0));
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
  return ((Q.createHistory = a), Q);
}
var Y = {},
  Re = {},
  x = {},
  lt;
function Rr() {
  return (
    lt ||
      ((lt = 1),
      Object.defineProperty(x, "__esModule", { value: !0 }),
      (x.FORGE_SUPPORTED_LOCALE_CODES = x.I18N_BUNDLE_FOLDER_NAME = x.I18N_INFO_FILE_NAME = void 0),
      (x.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (x.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (x.FORGE_SUPPORTED_LOCALE_CODES = [
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
    x
  );
}
var I = {},
  ut;
function sn() {
  if (ut) return I;
  ((ut = 1),
    Object.defineProperty(I, "__esModule", { value: !0 }),
    (I.TranslationsGetter = I.TranslationGetterError = void 0));
  const e = (o, n) => {
    o.includes(n) || o.push(n);
  };
  class t extends Error {
    constructor(n) {
      (super(n), (this.name = "TranslationGetterError"));
    }
  }
  I.TranslationGetterError = t;
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
  return ((I.TranslationsGetter = a), I);
}
var X = {},
  Pe = {},
  ct;
function Pr() {
  return (
    ct ||
      ((ct = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const a = C.__importDefault(Ur()),
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
      })(Pe)),
    Pe
  );
}
var dt;
function an() {
  if (dt) return X;
  ((dt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.Translator = void 0));
  const e = Pr();
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
  return ((X.Translator = t), X);
}
var Z = {},
  ft;
function ln() {
  if (ft) return Z;
  ((ft = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.ensureLocale = void 0));
  const e = Rr(),
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
  return ((Z.ensureLocale = n), Z);
}
var Fe = {},
  ht;
function un() {
  return (
    ht ||
      ((ht = 1),
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
              d = (h, g) =>
                !t(h) || u.has(h)
                  ? []
                  : (u.add(h),
                    Object.entries(h).flatMap(([_, p]) => {
                      const v = [...g, _];
                      return a(p)
                        ? [{ propertyPath: v, key: p.i18n }]
                        : Array.isArray(p)
                          ? p.flatMap((m) => d(m, v))
                          : d(p, v);
                    }));
            return d(s, []);
          },
          r = (s) =>
            Object.entries(s).flatMap(([u, d]) =>
              !o(u) && !n(u) && d && Array.isArray(d) && d.length > 0 ? d.map((h) => [h, u]) : [],
            );
        e.getI18nSupportedModuleEntries = r;
        const c = (s) => {
          const u = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(s)) {
            const h = i(d[0]);
            for (const { key: g } of h) u.add(g);
          }
          return u.size > 0 ? Array.from(u) : [];
        };
        e.extractI18nKeysFromModules = c;
        const l = (s) => {
          const u = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(s)) {
            const h = i(d[0]);
            for (const g of h) u.push({ moduleName: d[1], ...g });
          }
          return u;
        };
        e.extractI18nPropertiesFromModules = l;
      })(Fe)),
    Fe
  );
}
var Ie = {},
  gt;
function cn() {
  return (gt || ((gt = 1), Object.defineProperty(Ie, "__esModule", { value: !0 })), Ie);
}
var _t;
function Fr() {
  return (
    _t ||
      ((_t = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = C;
        (t.__exportStar(Rr(), e),
          t.__exportStar(sn(), e),
          t.__exportStar(an(), e),
          t.__exportStar(ln(), e));
        var a = Pr();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return a.getTranslationValue;
          },
        });
        var o = un();
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
          t.__exportStar(cn(), e));
      })(Re)),
    Re
  );
}
var pt;
function dn() {
  if (pt) return Y;
  ((pt = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.getContext = void 0));
  const e = w(),
    t = Fr(),
    a = (0, e.getCallBridge)(),
    o = async () => {
      var n;
      const i = await a("getContext"),
        r = i?.locale;
      return (r && (i.locale = (n = (0, t.ensureLocale)(r)) !== null && n !== void 0 ? n : r), i);
    };
  return ((Y.getContext = o), Y);
}
var ee = {},
  vt;
function fn() {
  if (vt) return ee;
  ((vt = 1),
    Object.defineProperty(ee, "__esModule", { value: !0 }),
    (ee.changeWindowTitle = void 0));
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
  return ((ee.changeWindowTitle = o), ee);
}
var te = {},
  yt;
function hn() {
  if (yt) return te;
  ((yt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.theme = void 0));
  const t = (0, w().getCallBridge)();
  return ((te.theme = { enable: () => t("enableTheming") }), te);
}
var re = {},
  ne = {},
  Be = {},
  B = {},
  mt;
function Ir() {
  if (mt) return B;
  ((mt = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.blobToBase64 = B.base64ToBlob = void 0));
  const e = (a, o) => {
    if (!a) return null;
    const n = a.includes(";base64") ? a.split(",")[1] : a,
      i = atob(n),
      r = new Array(i.length);
    for (let l = 0; l < i.length; l++) r[l] = i.charCodeAt(l);
    const c = new Uint8Array(r);
    return new Blob([c], { type: o });
  };
  B.base64ToBlob = e;
  const t = (a) =>
    new Promise((o, n) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        o(i.result);
      }),
        (i.onerror = n),
        i.readAsDataURL(a));
    });
  return ((B.blobToBase64 = t), B);
}
var bt;
function gn() {
  return (
    bt ||
      ((bt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Ir(),
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
                Object.entries(s).map(async ([d, h]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(h),
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
            for (const [d, h] of Object.entries(s)) u[d] = (0, e.deserialiseBlobsInPayload)(h);
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
      })(Be)),
    Be
  );
}
var wt;
function Br() {
  if (wt) return ne;
  ((wt = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.events = void 0));
  const e = w(),
    t = gn(),
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
  return ((ne.events = { emit: o, on: n }), ne);
}
var Et;
function _n() {
  if (Et) return re;
  ((Et = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.emitReadyEvent = void 0));
  const e = Br(),
    t = Dr(),
    a = "EXTENSION_READY",
    o = async () => {
      const n = await t.view.getContext();
      await e.events.emit(a, { localId: n.localId });
    };
  return ((re.emitReadyEvent = o), re);
}
var xt;
function Dr() {
  if (xt) return V;
  ((xt = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.view = void 0));
  const e = en(),
    t = tn(),
    a = rn(),
    o = nn(),
    n = on(),
    i = dn(),
    r = fn(),
    c = hn(),
    l = _n();
  return (
    (V.view = {
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
    V
  );
}
var jt;
function Ar() {
  return (
    jt ||
      ((jt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), C.__exportStar(Dr(), e));
      })(Ce)),
    Ce
  );
}
var De = {},
  ie = {},
  Ot;
function pn() {
  if (Ot) return ie;
  ((Ot = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.router = void 0));
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
  return ((ie.router = { getUrl: a, navigate: o, open: n, reload: i }), ie);
}
var St;
function vn() {
  return (
    St ||
      ((St = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), C.__exportStar(pn(), e));
      })(De)),
    De
  );
}
var Ae = {},
  oe = {},
  Ct;
function yn() {
  if (Ct) return oe;
  ((Ct = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.Modal = void 0));
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
  return ((oe.Modal = n), oe);
}
var Rt;
function mn() {
  return (
    Rt ||
      ((Rt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), C.__exportStar(yn(), e));
      })(Ae)),
    Ae
  );
}
var j = {},
  se = {},
  Pt;
function bn() {
  if (Pt) return se;
  ((Pt = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.productFetchApi = void 0));
  const e = Ir(),
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
          { body: d, headers: h, isMultipartFormData: g } = await o(u);
        h.has("X-Atlassian-Token") || h.set("X-Atlassian-Token", "no-check");
        const _ = {
            product: c,
            restPath: l,
            fetchRequestInit: { ...u, body: d, headers: [...h.entries()] },
            isMultipartFormData: g,
          },
          {
            body: p,
            headers: v,
            statusText: m,
            status: b,
            isAttachment: F,
          } = await i("fetchProduct", _),
          y = F ? (0, e.base64ToBlob)(p, v["content-type"]) : p;
        return new Response(y || null, { headers: v, status: b, statusText: m });
      };
      return {
        requestConfluence: (c, l) => r("confluence", c, l),
        requestJira: (c, l) => r("jira", c, l),
        requestBitbucket: (c, l) => r("bitbucket", c, l),
      };
    };
  return ((se.productFetchApi = n), se);
}
var Ft;
function wn() {
  if (Ft) return j;
  Ft = 1;
  var e;
  (Object.defineProperty(j, "__esModule", { value: !0 }),
    (j.requestBitbucket = j.requestJira = j.requestConfluence = void 0));
  const t = w();
  return (
    (e = (0, bn().productFetchApi)((0, t.getCallBridge)())),
    (j.requestConfluence = e.requestConfluence),
    (j.requestJira = e.requestJira),
    (j.requestBitbucket = e.requestBitbucket),
    j
  );
}
var Te = {},
  ae = {},
  It;
function En() {
  if (It) return ae;
  ((It = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.showFlag = void 0));
  const e = w(),
    t = E(),
    a = (0, e.getCallBridge)(),
    o = (n) => {
      var i;
      if (!n.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const r = a("showFlag", { ...n, type: (i = n.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await r, a("closeFlag", { id: n.id })) };
    };
  return ((ae.showFlag = o), ae);
}
var Bt;
function xn() {
  return (
    Bt ||
      ((Bt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = En();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(Te)),
    Te
  );
}
var Me = {},
  Dt;
function jn() {
  return (
    Dt ||
      ((Dt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), C.__exportStar(Br(), e));
      })(Me)),
    Me
  );
}
var ke = {},
  le = {},
  At;
function On() {
  if (At) return le;
  ((At = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.realtime = void 0));
  const t = (0, w().getCallBridge)(),
    a = (r, c, l) => t("publishRealtimeChannel", { channelName: r, eventPayload: c, options: l }),
    o = (r, c, l) => t("subscribeRealtimeChannel", { channelName: r, onEvent: c, options: l }),
    n = (r, c, l) =>
      t("publishRealtimeChannel", { channelName: r, eventPayload: c, options: l, isGlobal: !0 }),
    i = (r, c, l) =>
      t("subscribeRealtimeChannel", { channelName: r, onEvent: c, options: l, isGlobal: !0 });
  return ((le.realtime = { publish: a, subscribe: o, publishGlobal: n, subscribeGlobal: i }), le);
}
var qe = {},
  Tt;
function Sn() {
  return (
    Tt ||
      ((Tt = 1),
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
      })(qe)),
    qe
  );
}
var Mt;
function Cn() {
  return (
    Mt ||
      ((Mt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = On();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var a = Sn();
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
      })(ke)),
    ke
  );
}
var O = {},
  kt;
function Rn() {
  if (kt) return O;
  ((kt = 1),
    Object.defineProperty(O, "__esModule", { value: !0 }),
    (O.createTranslationFunction = O.getTranslations = O.resetTranslationsCache = void 0));
  const e = Fr(),
    t = Ar(),
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
  O.resetTranslationsCache = n;
  const i = async (c = null, l = { fallback: !0 }) => {
    let s = c;
    return (s || (s = (await t.view.getContext()).locale), await o.getTranslations(s, l));
  };
  O.getTranslations = i;
  const r = async (c = null) => {
    let l = c;
    l || (l = (await t.view.getContext()).locale);
    const s = new e.Translator(l, o);
    return (
      await s.init(),
      (u, d) => {
        var h, g;
        return (g = (h = s.translate(u)) !== null && h !== void 0 ? h : d) !== null && g !== void 0
          ? g
          : u;
      }
    );
  };
  return ((O.createTranslationFunction = r), O);
}
var Le = {},
  ue = {},
  D = {},
  T = {},
  pe = {},
  qt;
function Pn() {
  if (qt) return pe;
  ((qt = 1), Object.defineProperty(pe, "__esModule", { value: !0 }));
  const e = P();
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
  return ((pe.default = t), pe);
}
var M = {},
  ce = {},
  Lt;
function Fn() {
  if (Lt) return ce;
  ((Lt = 1),
    Object.defineProperty(ce, "__esModule", { value: !0 }),
    (ce._resolveDeltasResponse = void 0));
  const e = P(),
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
  ce._resolveDeltasResponse = a;
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
  return ce;
}
var Ut;
function Tr() {
  if (Ut) return M;
  Ut = 1;
  var e =
    (M && M.__awaiter) ||
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
        function h(_) {
          try {
            g(c.throw(_));
          } catch (p) {
            u(p);
          }
        }
        function g(_) {
          _.done ? s(_.value) : l(_.value).then(d, h);
        }
        g((c = c.apply(n, i || [])).next());
      });
    };
  Object.defineProperty(M, "__esModule", { value: !0 });
  const t = P(),
    a = Fn();
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
        var u, d, h, g, _, p;
        const v = r ? (0, t._typedJsonParse)(r, "has_updates", "InitializeResponse") : null;
        let m = {
          user: l,
          hash:
            (h =
              (d = (u = this._option) === null || u === void 0 ? void 0 : u.networkConfig) ===
                null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && h !== void 0
              ? h
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (v?.has_updates) {
          const b =
            v?.hash_used !==
            ((p =
              (_ = (g = this._option) === null || g === void 0 ? void 0 : g.networkConfig) ===
                null || _ === void 0
                ? void 0
                : _.initializeHashAlgorithm) !== null && p !== void 0
              ? p
              : "djb2");
          m = Object.assign(Object.assign({}, m), {
            sinceTime: s && !b ? v.time : 0,
            previousDerivedFields: "derived_fields" in v && s ? v.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: v.full_checksum,
            partialUserMatchSinceTime: b ? 0 : v.time,
          });
        }
        return this._fetchEvaluations(i, v, m, c);
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
        const h = (0, a._resolveDeltasResponse)(r, d.body);
        return typeof h == "string"
          ? h
          : this._fetchEvaluations(
              i,
              r,
              Object.assign(Object.assign(Object.assign({}, c), h), {
                deltasResponseRequested: !1,
              }),
              l,
            );
      });
    }
  }
  return ((M.default = o), M);
}
var de = {},
  Nt;
function In() {
  if (Nt) return de;
  ((Nt = 1),
    Object.defineProperty(de, "__esModule", { value: !0 }),
    (de._makeParamStoreGetter = void 0));
  const e = P(),
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
  function i(u, d, h) {
    return u.getFeatureGate(d.gate_name, a(h) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function r(u, d, h, g) {
    const p = u.getDynamicConfig(d.config_name, a(g) ? void 0 : t).get(d.param_name);
    return o(p, h) ? h : p;
  }
  function c(u, d, h, g) {
    const p = u.getExperiment(d.experiment_name, a(g) ? void 0 : t).get(d.param_name);
    return o(p, h) ? h : p;
  }
  function l(u, d, h, g) {
    const p = u.getLayer(d.layer_name, a(g) ? void 0 : t).get(d.param_name);
    return o(p, h) ? h : p;
  }
  function s(u, d, h) {
    return (g, _) => {
      if (d == null) return _;
      const p = d[g];
      if (p == null || (_ != null && (0, e._typeOf)(_) !== p.param_type)) return _;
      switch (p.ref_type) {
        case "static":
          return n(p);
        case "gate":
          return i(u, p, h);
        case "dynamic_config":
          return r(u, p, _, h);
        case "experiment":
          return c(u, p, _, h);
        case "layer":
          return l(u, p, _, h);
        default:
          return _;
      }
    };
  }
  return ((de._makeParamStoreGetter = s), de);
}
var A = {},
  $t;
function Bn() {
  if ($t) return A;
  $t = 1;
  var e =
    (A && A.__awaiter) ||
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
        function h(_) {
          try {
            g(c.throw(_));
          } catch (p) {
            u(p);
          }
        }
        function g(_) {
          _.done ? s(_.value) : l(_.value).then(d, h);
        }
        g((c = c.apply(n, i || [])).next());
      });
    };
  (Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.StatsigEvaluationsDataAdapter = void 0));
  const t = P(),
    a = Tr();
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
  return ((A.StatsigEvaluationsDataAdapter = o), A);
}
var zt;
function Dn() {
  if (zt) return T;
  zt = 1;
  var e =
    (T && T.__awaiter) ||
    function (c, l, s, u) {
      function d(h) {
        return h instanceof s
          ? h
          : new s(function (g) {
              g(h);
            });
      }
      return new (s || (s = Promise))(function (h, g) {
        function _(m) {
          try {
            v(u.next(m));
          } catch (b) {
            g(b);
          }
        }
        function p(m) {
          try {
            v(u.throw(m));
          } catch (b) {
            g(b);
          }
        }
        function v(m) {
          m.done ? h(m.value) : d(m.value).then(_, p);
        }
        v((u = u.apply(c, l || [])).next());
      });
    };
  Object.defineProperty(T, "__esModule", { value: !0 });
  const t = P(),
    a = Pn(),
    o = Tr(),
    n = In(),
    i = Bn();
  let r = class ze extends t.StatsigClientBase {
    static instance(l) {
      const s = (0, t._getStatsigGlobal)().instance(l);
      return s instanceof ze
        ? s
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new ze(l ?? "", {}));
    }
    constructor(l, s, u = null) {
      var d, h;
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
      const _ = (h = u?.plugins) !== null && h !== void 0 ? h : [];
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
        const h = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(h, u);
      }
    }
    _updateUserSyncImpl(l, s, u) {
      var d;
      const h = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(l);
      const g = this.dataAdapter.getDataSync(this._user);
      (g == null && h.push("NoCachedValues"),
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
            h,
          )
        : (this._runPostUpdate(g ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            h,
          ));
    }
    updateUserAsync(l, s) {
      return e(this, void 0, void 0, function* () {
        const u = performance.now();
        try {
          return yield this._updateUserAsyncImpl(l, s);
        } catch (d) {
          const h = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(h, u);
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
        let h = !1;
        (d != null &&
          (t.Diagnostics._markInitProcessStart(this._sdkKey),
          (h = this._store.setValues(d, this._user)),
          t.Diagnostics._markInitProcessEnd(this._sdkKey, { success: h })),
          this._finalizeUpdate(d),
          h ||
            (this._errorBoundary.attachErrorIfNoneExists(
              t.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          t.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            h,
            this._store.getCurrentSourceDetails(),
          ));
        const g = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          h,
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
        h = (u = d.customIDs) === null || u === void 0 ? void 0 : u.stableID;
      return (h && t.StableID.setOverride(h, this._sdkKey), d);
    }
    _getFeatureGateImpl(l, s) {
      var u, d;
      const { result: h, details: g } = this._store.getGate(l),
        _ = (0, t._makeFeatureGate)(l, g, h),
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
      const { result: h, details: g } = this._store.getConfig(l),
        _ = (0, t._makeDynamicConfig)(l, g, h),
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
      var u, d, h, g;
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
      const m =
          (g =
            (h = this.overrideAdapter) === null || h === void 0
              ? void 0
              : h.getExperimentOverride) === null || g === void 0
            ? void 0
            : g.call(h, v, this._user, s),
        b = m ?? v;
      return (
        this._enqueueExposure(
          l,
          (0, t._createConfigExposure)(this._user, b, this._store.getExposureMapping()),
          s,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: b }),
        b
      );
    }
    _getLayerImpl(l, s) {
      var u, d, h;
      const { result: g, details: _ } = this._store.getLayer(l),
        p = (0, t._makeLayer)(l, _, g),
        v =
          (d =
            (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, p, this._user, s);
      s?.disableExposureLog && this._logger.incrementNonExposureCount(l);
      const m = (0, t._mergeOverride)(
        p,
        v,
        (h = v?.__value) !== null && h !== void 0 ? h : p.__value,
        (b) => {
          s?.disableExposureLog ||
            this._enqueueExposure(
              l,
              (0, t._createLayerParameterExposure)(
                this._user,
                m,
                b,
                this._store.getExposureMapping(),
              ),
              s,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: m }), m);
    }
    _getParameterStoreImpl(l, s) {
      var u, d;
      const { result: h, details: g } = this._store.getParamStore(l);
      this._logger.incrementNonExposureCount(l);
      const _ = {
          name: l,
          details: g,
          __configuration: h,
          get: (0, n._makeParamStoreGetter)(this, h, s),
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
  return ((T.default = r), T);
}
var Gt;
function An() {
  return (
    Gt ||
      ((Gt = 1),
      (function (e) {
        var t =
            (D && D.__createBinding) ||
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
            (D && D.__exportStar) ||
            function (r, c) {
              for (var l in r)
                l !== "default" && !Object.prototype.hasOwnProperty.call(c, l) && t(c, r, l);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const o = P(),
          n = Dn();
        ((e.StatsigClient = n.default), a(P(), e));
        const i = Object.assign((0, o._getStatsigGlobal)(), { StatsigClient: n.default });
        e.default = i;
      })(D)),
    D
  );
}
var fe = {},
  he = {},
  Vt;
function Tn() {
  if (Vt) return he;
  ((Vt = 1),
    Object.defineProperty(he, "__esModule", { value: !0 }),
    (he.initFeatureFlags = void 0));
  const e = w(),
    t = E(),
    a = be(),
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
    (he.initFeatureFlags = (0, a.withRateLimiter)(
      c,
      o,
      n,
      `Feature flags initialisation calls are rate limited at ${o}req/${n / 1e3}s`,
    )),
    he
  );
}
var Kt;
function Mn() {
  if (Kt) return fe;
  ((Kt = 1),
    Object.defineProperty(fe, "__esModule", { value: !0 }),
    (fe.ForgeDataAdapter = void 0));
  const e = Tn();
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
  return ((fe.ForgeDataAdapter = t), fe);
}
var Ue = {},
  Wt;
function Mr() {
  return (
    Wt ||
      ((Wt = 1),
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
      })(Ue)),
    Ue
  );
}
var ge = {},
  Ht;
function kn() {
  if (Ht) return ge;
  ((Ht = 1),
    Object.defineProperty(ge, "__esModule", { value: !0 }),
    (ge.trackFeatureFlagEvent = void 0));
  const e = w(),
    t = E(),
    a = Mr(),
    o = be(),
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
    (ge.trackFeatureFlagEvent = (0, o.withRateLimiter)(
      l,
      n,
      i,
      `Feature flags calls are rate limited at ${n}req/${i / 1e3}s`,
    )),
    ge
  );
}
var Jt;
function qn() {
  if (Jt) return ue;
  ((Jt = 1),
    Object.defineProperty(ue, "__esModule", { value: !0 }),
    (ue.ForgeFeatureFlags = void 0));
  const e = An(),
    t = Mn(),
    a = Mr(),
    o = kn();
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
  return ((ue.ForgeFeatureFlags = n), ue);
}
var Qt;
function Ln() {
  return (
    Qt ||
      ((Qt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = qn();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })(Le)),
    Le
  );
}
var Yt;
function Un() {
  return (
    Yt ||
      ((Yt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = C;
        var a = Hr();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return a.NavigationTarget;
          },
        }),
          t.__exportStar(Qr(), e),
          t.__exportStar(Zr(), e),
          t.__exportStar(Ar(), e),
          t.__exportStar(vn(), e),
          t.__exportStar(mn(), e),
          t.__exportStar(wn(), e),
          t.__exportStar(xn(), e),
          t.__exportStar(jn(), e),
          t.__exportStar(Cn(), e),
          (e.i18n = t.__importStar(Rn())),
          t.__exportStar(Ln(), e));
      })(Ee)),
    Ee
  );
}
var _e = Un();
const Nn = () => {
    const [e, t] = S.useState(null),
      [a, o] = S.useState(null),
      [n, i] = S.useState(!1),
      [r, c] = S.useState(null),
      [l, s] = S.useState(null),
      [u, d] = S.useState(null),
      [h, g] = S.useState(null),
      [_, p] = S.useState({ userName: "", product: "" }),
      v = async (y) => {
        (i(!0), c(null));
        try {
          const R = await _e.invoke("fetch", { action: y });
          t(R);
        } catch (R) {
          c(R instanceof Error ? R.message : "Unknown error occurred");
        } finally {
          i(!1);
        }
      },
      m = async () => {
        if (!_.userName.trim() || !_.product.trim()) {
          s("Please fill in all fields");
          return;
        }
        (i(!0), s(null));
        try {
          (await _e.invoke("insertUserOrOrder", _), s(null), p({ userName: "", product: "" }));
        } catch (y) {
          s(y instanceof Error ? y.message : "Failed to insert user/order");
        } finally {
          i(!1);
        }
      },
      b = async () => {
        (i(!0), d(null));
        try {
          (await _e.invoke("clearCache"), d(null));
        } catch (y) {
          d(y instanceof Error ? y.message : "Failed to clear cache");
        } finally {
          i(!1);
        }
      },
      F = async () => {
        (i(!0), g(null));
        try {
          const y = await _e.invoke("runPerformanceAnalyze");
          (o(y?.DML), g(null));
        } catch (y) {
          g(y instanceof Error ? y.message : "Failed to run performance analysis");
        } finally {
          i(!1);
        }
      };
    return f.jsxs("div", {
      style: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
      },
      children: [
        f.jsx("h1", {
          style: { color: "#0052CC", marginBottom: "30px" },
          children: "🚀 Forge SQL ORM Cache Demo",
        }),
        f.jsxs("div", {
          style: {
            padding: "20px",
            backgroundColor: "#F4F5F7",
            borderRadius: "8px",
            marginBottom: "30px",
          },
          children: [
            f.jsx("h3", {
              style: { color: "#172B4D", marginBottom: "15px" },
              children: "How it works:",
            }),
            f.jsxs("ul", {
              style: { color: "#6B778C", lineHeight: "1.6" },
              children: [
                f.jsxs("li", {
                  children: [
                    f.jsx("strong", { children: "Non-Cached Query:" }),
                    " Executes a fresh query with 1-second sleep every time",
                  ],
                }),
                f.jsxs("li", {
                  children: [
                    f.jsx("strong", { children: "Cached Query:" }),
                    " Uses global cache - first execution takes time, subsequent calls are instant",
                  ],
                }),
                f.jsxs("li", {
                  children: [
                    f.jsx("strong", { children: "Timeout:" }),
                    " Tests query timeout behavior with 10-second sleep",
                  ],
                }),
                f.jsxs("li", {
                  children: [
                    f.jsx("strong", { children: "Out of Memory:" }),
                    " Tests memory limit with large data operations",
                  ],
                }),
                f.jsxs("li", {
                  children: [
                    f.jsx("strong", { children: "Add User & Order:" }),
                    " Uses ",
                    f.jsx("code", { children: "executeWithCacheContext" }),
                    " to automatically clear cache after operations",
                  ],
                }),
                f.jsxs("li", {
                  children: [
                    f.jsx("strong", { children: "Cache Management:" }),
                    " Clear cache manually or run performance analysis",
                  ],
                }),
              ],
            }),
          ],
        }),
        f.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            f.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Query Performance Test",
            }),
            f.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Test the difference between cached and non-cached queries. Both queries include a 1-second sleep to demonstrate the performance difference.",
            }),
            f.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "10px",
                marginBottom: "20px",
              },
              children: [
                f.jsx("button", {
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
                f.jsx("button", {
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
                f.jsx("button", {
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
                f.jsx("button", {
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
              f.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "20px",
                },
                children: [f.jsx("strong", { children: "Error:" }), " ", r],
              }),
            e &&
              !r &&
              f.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginTop: "10px",
                },
                children: [
                  f.jsxs("h3", {
                    style: { margin: "0 0 10px 0", color: "#172B4D" },
                    children: ["Query Results (", e.times, "ms)"],
                  }),
                  f.jsxs("div", {
                    style: { fontSize: "14px", color: "#6B778C", marginBottom: "10px" },
                    children: ["Found ", e.rows.length, " records"],
                  }),
                  f.jsx("div", {
                    style: { maxHeight: "200px", overflowY: "auto" },
                    children: f.jsxs("table", {
                      style: { width: "100%", borderCollapse: "collapse" },
                      children: [
                        f.jsx("thead", {
                          children: f.jsxs("tr", {
                            style: { backgroundColor: "#E9ECF0" },
                            children: [
                              f.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User ID",
                              }),
                              f.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User Name",
                              }),
                              f.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Product",
                              }),
                              f.jsx("th", {
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
                        f.jsx("tbody", {
                          children: e.rows.map((y, R) =>
                            f.jsxs(
                              "tr",
                              {
                                children: [
                                  f.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: y.userId,
                                  }),
                                  f.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: y.userName,
                                  }),
                                  f.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: y.product || "N/A",
                                  }),
                                  f.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: y.productId || "N/A",
                                  }),
                                ],
                              },
                              R,
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
        f.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            f.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Add User & Order",
            }),
            f.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Add a new user and order. User ID and Product ID are optional - they will be auto-generated if not provided. The system will automatically match existing users and clear cache after operations.",
            }),
            f.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginBottom: "20px",
              },
              children: [
                f.jsxs("div", {
                  children: [
                    f.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User ID (optional):",
                    }),
                    f.jsx("input", {
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
                f.jsxs("div", {
                  children: [
                    f.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User Name:",
                    }),
                    f.jsx("input", {
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
                f.jsxs("div", {
                  children: [
                    f.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product ID (optional):",
                    }),
                    f.jsx("input", {
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
                f.jsxs("div", {
                  children: [
                    f.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product:",
                    }),
                    f.jsx("input", {
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
            f.jsx("button", {
              onClick: m,
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
              f.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginTop: "15px",
                },
                children: [f.jsx("strong", { children: "Error:" }), " ", l],
              }),
          ],
        }),
        f.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            f.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Cache Management",
            }),
            f.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children: "Manage the cache and run performance analysis.",
            }),
            f.jsxs("div", {
              style: { display: "flex", gap: "10px", marginBottom: "15px" },
              children: [
                f.jsx("button", {
                  onClick: b,
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
                f.jsx("button", {
                  onClick: F,
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
              f.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "15px",
                },
                children: [f.jsx("strong", { children: "Error:" }), " ", u],
              }),
            h &&
              f.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "15px",
                },
                children: [f.jsx("strong", { children: "Error:" }), " ", h],
              }),
          ],
        }),
        a &&
          !h &&
          f.jsxs("div", {
            style: {
              marginBottom: "40px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            },
            children: [
              f.jsx("h2", {
                style: { color: "#172B4D", marginBottom: "20px" },
                children: "Performance Analysis Results",
              }),
              f.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginBottom: "20px",
                },
                children: [
                  f.jsxs("div", {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "15px",
                      marginBottom: "20px",
                    },
                    children: [
                      f.jsxs("div", {
                        children: [f.jsx("strong", { children: "Window:" }), " ", a.window],
                      }),
                      f.jsxs("div", {
                        children: [f.jsx("strong", { children: "Top Queries:" }), " ", a.top],
                      }),
                      f.jsxs("div", {
                        children: [
                          f.jsx("strong", { children: "Latency Threshold:" }),
                          " ",
                          a.warnThresholdMs,
                          "ms",
                        ],
                      }),
                      f.jsxs("div", {
                        children: [
                          f.jsx("strong", { children: "Memory Threshold:" }),
                          " ",
                          (a.memoryThresholdBytes / 1024 / 1024).toFixed(1),
                          "MB",
                        ],
                      }),
                      f.jsxs("div", {
                        children: [
                          f.jsx("strong", { children: "Generated:" }),
                          " ",
                          new Date(a.generatedAt).toLocaleString(),
                        ],
                      }),
                    ],
                  }),
                  a.rows.length > 0
                    ? f.jsxs("div", {
                        children: [
                          f.jsxs("h3", {
                            style: { margin: "0 0 15px 0", color: "#172B4D" },
                            children: ["Slow Queries Found (", a.rows.length, ")"],
                          }),
                          a.rows.map((y, R) =>
                            f.jsxs(
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
                                  f.jsxs("div", {
                                    style: {
                                      display: "grid",
                                      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                                      gap: "10px",
                                      marginBottom: "15px",
                                    },
                                    children: [
                                      f.jsxs("div", {
                                        children: [
                                          f.jsx("strong", { children: "Rank:" }),
                                          " ",
                                          y.rank,
                                        ],
                                      }),
                                      f.jsxs("div", {
                                        children: [
                                          f.jsx("strong", { children: "Type:" }),
                                          " ",
                                          y.stmtType,
                                        ],
                                      }),
                                      f.jsxs("div", {
                                        children: [
                                          f.jsx("strong", { children: "Executions:" }),
                                          " ",
                                          y.execCount,
                                        ],
                                      }),
                                      f.jsxs("div", {
                                        children: [
                                          f.jsx("strong", { children: "Avg Latency:" }),
                                          " ",
                                          y.avgLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      f.jsxs("div", {
                                        children: [
                                          f.jsx("strong", { children: "Max Latency:" }),
                                          " ",
                                          y.maxLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      f.jsxs("div", {
                                        children: [
                                          f.jsx("strong", { children: "Avg Memory:" }),
                                          " ",
                                          y.avgMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      f.jsxs("div", {
                                        children: [
                                          f.jsx("strong", { children: "Max Memory:" }),
                                          " ",
                                          y.maxMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      f.jsxs("div", {
                                        children: [
                                          f.jsx("strong", { children: "Plan Cache:" }),
                                          " ",
                                          y.planInCache ? "Yes" : "No",
                                        ],
                                      }),
                                    ],
                                  }),
                                  f.jsxs("div", {
                                    style: { marginBottom: "10px" },
                                    children: [
                                      f.jsx("strong", { children: "SQL Query:" }),
                                      f.jsx("pre", {
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
                                  f.jsxs("details", {
                                    style: { marginTop: "10px" },
                                    children: [
                                      f.jsx("summary", {
                                        style: {
                                          cursor: "pointer",
                                          fontWeight: "bold",
                                          color: "#0052CC",
                                        },
                                        children: "View Execution Plan",
                                      }),
                                      f.jsx("pre", {
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
                              R,
                            ),
                          ),
                        ],
                      })
                    : f.jsxs("div", {
                        style: {
                          padding: "20px",
                          textAlign: "center",
                          color: "#36B37E",
                          backgroundColor: "#E8F5E8",
                          borderRadius: "4px",
                        },
                        children: [
                          f.jsx("strong", { children: "✅ No slow queries found!" }),
                          f.jsx("br", {}),
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
  $n = document.getElementById("root"),
  zn = kr.createRoot($n),
  Xt = () => {
    zn.render(f.jsx(zr.StrictMode, { children: f.jsx(Nn, {}) }));
  };
_e.view.theme
  .enable()
  .then(() => {
    Xt();
  })
  .catch((e) => {
    (console.error(e.message), Xt());
  });
