import { r as Or, c as un } from "./react-dom-vendor-BOEB6BZs.js";
import { g as ln, r as j } from "./client-core-vendor-D3kwrIkk.js";
import { r as cn } from "./lodash-vendor-DXG1mS21.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
  new MutationObserver((a) => {
    for (const n of a)
      if (n.type === "childList")
        for (const r of n.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(a) {
    const n = {};
    return (
      a.integrity && (n.integrity = a.integrity),
      a.referrerPolicy && (n.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : a.crossOrigin === "anonymous"
          ? (n.credentials = "omit")
          : (n.credentials = "same-origin"),
      n
    );
  }
  function i(a) {
    if (a.ep) return;
    a.ep = !0;
    const n = s(a);
    fetch(a.href, n);
  }
})();
var Fe = { exports: {} },
  U = {};
var at;
function dn() {
  if (at) return U;
  at = 1;
  var e = Or(),
    t = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    i = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(c, l, o) {
    var u,
      d = {},
      f = null,
      _ = null;
    (o !== void 0 && (f = "" + o),
      l.key !== void 0 && (f = "" + l.key),
      l.ref !== void 0 && (_ = l.ref));
    for (u in l) i.call(l, u) && !n.hasOwnProperty(u) && (d[u] = l[u]);
    if (c && c.defaultProps) for (u in ((l = c.defaultProps), l)) d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: c, key: f, ref: _, props: d, _owner: a.current };
  }
  return ((U.Fragment = s), (U.jsx = r), (U.jsxs = r), U);
}
var st;
function fn() {
  return (st || ((st = 1), (Fe.exports = dn())), Fe.exports);
}
var w = fn(),
  Oe = Or(),
  Te = {},
  tt = function (e, t) {
    return (
      (tt =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (s, i) {
            s.__proto__ = i;
          }) ||
        function (s, i) {
          for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (s[a] = i[a]);
        }),
      tt(e, t)
    );
  };
function Pr(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  tt(e, t);
  function s() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((s.prototype = t.prototype), new s());
}
var Se = function () {
  return (
    (Se =
      Object.assign ||
      function (t) {
        for (var s, i = 1, a = arguments.length; i < a; i++) {
          s = arguments[i];
          for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
        }
        return t;
      }),
    Se.apply(this, arguments)
  );
};
function Sr(e, t) {
  var s = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, i = Object.getOwnPropertySymbols(e); a < i.length; a++)
      t.indexOf(i[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[a]) &&
        (s[i[a]] = e[i[a]]);
  return s;
}
function Rr(e, t, s, i) {
  var a = arguments.length,
    n = a < 3 ? t : i === null ? (i = Object.getOwnPropertyDescriptor(t, s)) : i,
    r;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, s, i);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (r = e[c]) && (n = (a < 3 ? r(n) : a > 3 ? r(t, s, n) : r(t, s)) || n);
  return (a > 3 && n && Object.defineProperty(t, s, n), n);
}
function Ir(e, t) {
  return function (s, i) {
    t(s, i, e);
  };
}
function jr(e, t, s, i, a, n) {
  function r(y) {
    if (y !== void 0 && typeof y != "function") throw new TypeError("Function expected");
    return y;
  }
  for (
    var c = i.kind,
      l = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      o = !t && e ? (i.static ? e : e.prototype) : null,
      u = t || (o ? Object.getOwnPropertyDescriptor(o, i.name) : {}),
      d,
      f = !1,
      _ = s.length - 1;
    _ >= 0;
    _--
  ) {
    var h = {};
    for (var v in i) h[v] = v === "access" ? {} : i[v];
    for (var v in i.access) h.access[v] = i.access[v];
    h.addInitializer = function (y) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      n.push(r(y || null));
    };
    var g = (0, s[_])(c === "accessor" ? { get: u.get, set: u.set } : u[l], h);
    if (c === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = r(g.get)) && (u.get = d),
        (d = r(g.set)) && (u.set = d),
        (d = r(g.init)) && a.unshift(d));
    } else (d = r(g)) && (c === "field" ? a.unshift(d) : (u[l] = d));
  }
  (o && Object.defineProperty(o, i.name, u), (f = !0));
}
function Cr(e, t, s) {
  for (var i = arguments.length > 2, a = 0; a < t.length; a++)
    s = i ? t[a].call(e, s) : t[a].call(e);
  return i ? s : void 0;
}
function kr(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Ar(e, t, s) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: s ? "".concat(s, " ", t) : t })
  );
}
function Fr(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Tr(e, t, s, i) {
  function a(n) {
    return n instanceof s
      ? n
      : new s(function (r) {
          r(n);
        });
  }
  return new (s || (s = Promise))(function (n, r) {
    function c(u) {
      try {
        o(i.next(u));
      } catch (d) {
        r(d);
      }
    }
    function l(u) {
      try {
        o(i.throw(u));
      } catch (d) {
        r(d);
      }
    }
    function o(u) {
      u.done ? n(u.value) : a(u.value).then(c, l);
    }
    o((i = i.apply(e, t || [])).next());
  });
}
function Br(e, t) {
  var s = {
      label: 0,
      sent: function () {
        if (n[0] & 1) throw n[1];
        return n[1];
      },
      trys: [],
      ops: [],
    },
    i,
    a,
    n,
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
  function c(o) {
    return function (u) {
      return l([o, u]);
    };
  }
  function l(o) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; r && ((r = 0), o[0] && (s = 0)), s; )
      try {
        if (
          ((i = 1),
          a &&
            (n =
              o[0] & 2 ? a.return : o[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) &&
            !(n = n.call(a, o[1])).done)
        )
          return n;
        switch (((a = 0), n && (o = [o[0] & 2, n.value]), o[0])) {
          case 0:
          case 1:
            n = o;
            break;
          case 4:
            return (s.label++, { value: o[1], done: !1 });
          case 5:
            (s.label++, (a = o[1]), (o = [0]));
            continue;
          case 7:
            ((o = s.ops.pop()), s.trys.pop());
            continue;
          default:
            if (
              ((n = s.trys), !(n = n.length > 0 && n[n.length - 1]) && (o[0] === 6 || o[0] === 2))
            ) {
              s = 0;
              continue;
            }
            if (o[0] === 3 && (!n || (o[1] > n[0] && o[1] < n[3]))) {
              s.label = o[1];
              break;
            }
            if (o[0] === 6 && s.label < n[1]) {
              ((s.label = n[1]), (n = o));
              break;
            }
            if (n && s.label < n[2]) {
              ((s.label = n[2]), s.ops.push(o));
              break;
            }
            (n[2] && s.ops.pop(), s.trys.pop());
            continue;
        }
        o = t.call(e, s);
      } catch (u) {
        ((o = [6, u]), (a = 0));
      } finally {
        i = n = 0;
      }
    if (o[0] & 5) throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}
var je = Object.create
  ? function (e, t, s, i) {
      i === void 0 && (i = s);
      var a = Object.getOwnPropertyDescriptor(t, s);
      ((!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) &&
        (a = {
          enumerable: !0,
          get: function () {
            return t[s];
          },
        }),
        Object.defineProperty(e, i, a));
    }
  : function (e, t, s, i) {
      (i === void 0 && (i = s), (e[i] = t[s]));
    };
function Dr(e, t) {
  for (var s in e) s !== "default" && !Object.prototype.hasOwnProperty.call(t, s) && je(t, e, s);
}
function Re(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    s = t && e[t],
    i = 0;
  if (s) return s.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e });
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function it(e, t) {
  var s = typeof Symbol == "function" && e[Symbol.iterator];
  if (!s) return e;
  var i = s.call(e),
    a,
    n = [],
    r;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = i.next()).done; ) n.push(a.value);
  } catch (c) {
    r = { error: c };
  } finally {
    try {
      a && !a.done && (s = i.return) && s.call(i);
    } finally {
      if (r) throw r.error;
    }
  }
  return n;
}
function qr() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(it(arguments[t]));
  return e;
}
function Mr() {
  for (var e = 0, t = 0, s = arguments.length; t < s; t++) e += arguments[t].length;
  for (var i = Array(e), a = 0, t = 0; t < s; t++)
    for (var n = arguments[t], r = 0, c = n.length; r < c; r++, a++) i[a] = n[r];
  return i;
}
function Lr(e, t, s) {
  if (s || arguments.length === 2)
    for (var i = 0, a = t.length, n; i < a; i++)
      (n || !(i in t)) && (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
  return e.concat(n || Array.prototype.slice.call(t));
}
function M(e) {
  return this instanceof M ? ((this.v = e), this) : new M(e);
}
function Ur(e, t, s) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = s.apply(e, t || []),
    a,
    n = [];
  return (
    (a = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    c("next"),
    c("throw"),
    c("return", r),
    (a[Symbol.asyncIterator] = function () {
      return this;
    }),
    a
  );
  function r(_) {
    return function (h) {
      return Promise.resolve(h).then(_, d);
    };
  }
  function c(_, h) {
    i[_] &&
      ((a[_] = function (v) {
        return new Promise(function (g, y) {
          n.push([_, v, g, y]) > 1 || l(_, v);
        });
      }),
      h && (a[_] = h(a[_])));
  }
  function l(_, h) {
    try {
      o(i[_](h));
    } catch (v) {
      f(n[0][3], v);
    }
  }
  function o(_) {
    _.value instanceof M ? Promise.resolve(_.value.v).then(u, d) : f(n[0][2], _);
  }
  function u(_) {
    l("next", _);
  }
  function d(_) {
    l("throw", _);
  }
  function f(_, h) {
    (_(h), n.shift(), n.length && l(n[0][0], n[0][1]));
  }
}
function Nr(e) {
  var t, s;
  return (
    (t = {}),
    i("next"),
    i("throw", function (a) {
      throw a;
    }),
    i("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function i(a, n) {
    t[a] = e[a]
      ? function (r) {
          return (s = !s) ? { value: M(e[a](r)), done: !1 } : n ? n(r) : r;
        }
      : n;
  }
}
function Gr(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    s;
  return t
    ? t.call(e)
    : ((e = typeof Re == "function" ? Re(e) : e[Symbol.iterator]()),
      (s = {}),
      i("next"),
      i("throw"),
      i("return"),
      (s[Symbol.asyncIterator] = function () {
        return this;
      }),
      s);
  function i(n) {
    s[n] =
      e[n] &&
      function (r) {
        return new Promise(function (c, l) {
          ((r = e[n](r)), a(c, l, r.done, r.value));
        });
      };
  }
  function a(n, r, c, l) {
    Promise.resolve(l).then(function (o) {
      n({ value: o, done: c });
    }, r);
  }
}
function xr(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var _n = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  rt = function (e) {
    return (
      (rt =
        Object.getOwnPropertyNames ||
        function (t) {
          var s = [];
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (s[s.length] = i);
          return s;
        }),
      rt(e)
    );
  };
function zr(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var s = rt(e), i = 0; i < s.length; i++) s[i] !== "default" && je(t, e, s[i]);
  return (_n(t, e), t);
}
function Vr(e) {
  return e && e.__esModule ? e : { default: e };
}
function Kr(e, t, s, i) {
  if (s === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return s === "m" ? i : s === "a" ? i.call(e) : i ? i.value : t.get(e);
}
function Jr(e, t, s, i, a) {
  if (i === "m") throw new TypeError("Private method is not writable");
  if (i === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (i === "a" ? a.call(e, s) : a ? (a.value = s) : t.set(e, s), s);
}
function Hr(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Wr(e, t, s) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var i, a;
    if (s) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      i = t[Symbol.asyncDispose];
    }
    if (i === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((i = t[Symbol.dispose]), s && (a = i));
    }
    if (typeof i != "function") throw new TypeError("Object not disposable.");
    (a &&
      (i = function () {
        try {
          a.call(this);
        } catch (n) {
          return Promise.reject(n);
        }
      }),
      e.stack.push({ value: t, dispose: i, async: s }));
  } else s && e.stack.push({ async: !0 });
  return t;
}
var hn =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, s) {
        var i = new Error(s);
        return ((i.name = "SuppressedError"), (i.error = e), (i.suppressed = t), i);
      };
function Xr(e) {
  function t(n) {
    ((e.error = e.hasError ? new hn(n, e.error, "An error was suppressed during disposal.") : n),
      (e.hasError = !0));
  }
  var s,
    i = 0;
  function a() {
    for (; (s = e.stack.pop()); )
      try {
        if (!s.async && i === 1) return ((i = 0), e.stack.push(s), Promise.resolve().then(a));
        if (s.dispose) {
          var n = s.dispose.call(s.value);
          if (s.async)
            return (
              (i |= 2),
              Promise.resolve(n).then(a, function (r) {
                return (t(r), a());
              })
            );
        } else i |= 1;
      } catch (r) {
        t(r);
      }
    if (i === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return a();
}
function Yr(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (s, i, a, n, r) {
        return i
          ? t
            ? ".jsx"
            : ".js"
          : a && (!n || !r)
            ? s
            : a + n + "." + r.toLowerCase() + "js";
      })
    : e;
}
const vn = {
    __extends: Pr,
    __assign: Se,
    __rest: Sr,
    __decorate: Rr,
    __param: Ir,
    __esDecorate: jr,
    __runInitializers: Cr,
    __propKey: kr,
    __setFunctionName: Ar,
    __metadata: Fr,
    __awaiter: Tr,
    __generator: Br,
    __createBinding: je,
    __exportStar: Dr,
    __values: Re,
    __read: it,
    __spread: qr,
    __spreadArrays: Mr,
    __spreadArray: Lr,
    __await: M,
    __asyncGenerator: Ur,
    __asyncDelegator: Nr,
    __asyncValues: Gr,
    __makeTemplateObject: xr,
    __importStar: zr,
    __importDefault: Vr,
    __classPrivateFieldGet: Kr,
    __classPrivateFieldSet: Jr,
    __classPrivateFieldIn: Hr,
    __addDisposableResource: Wr,
    __disposeResources: Xr,
    __rewriteRelativeImportExtension: Yr,
  },
  gn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Wr,
        get __assign() {
          return Se;
        },
        __asyncDelegator: Nr,
        __asyncGenerator: Ur,
        __asyncValues: Gr,
        __await: M,
        __awaiter: Tr,
        __classPrivateFieldGet: Kr,
        __classPrivateFieldIn: Hr,
        __classPrivateFieldSet: Jr,
        __createBinding: je,
        __decorate: Rr,
        __disposeResources: Xr,
        __esDecorate: jr,
        __exportStar: Dr,
        __extends: Pr,
        __generator: Br,
        __importDefault: Vr,
        __importStar: zr,
        __makeTemplateObject: xr,
        __metadata: Fr,
        __param: Ir,
        __propKey: kr,
        __read: it,
        __rest: Sr,
        __rewriteRelativeImportExtension: Yr,
        __runInitializers: Cr,
        __setFunctionName: Ar,
        __spread: qr,
        __spreadArray: Lr,
        __spreadArrays: Mr,
        __values: Re,
        default: vn,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  P = ln(gn);
var N = {},
  ut;
function pn() {
  return (
    ut ||
      ((ut = 1),
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
var Be = {},
  De = {},
  G = {},
  x = {},
  lt;
function m() {
  if (lt) return x;
  ((lt = 1), Object.defineProperty(x, "__esModule", { value: !0 }), (x.BridgeAPIError = void 0));
  class e extends Error {}
  return ((x.BridgeAPIError = e), x);
}
var ct;
function b() {
  if (ct) return G;
  ((ct = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.getCallBridge = void 0));
  const e = m();
  function t(i) {
    return !!i?.callBridge;
  }
  const s = () => {
    if (!t(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((G.getCallBridge = s), G);
}
var z = {},
  dt;
function Ce() {
  if (dt) return z;
  ((dt = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.withRateLimiter = void 0));
  const e = m(),
    t = (s, i, a, n) => {
      let r = Date.now(),
        c = 0;
      return async (...l) => {
        const o = Date.now();
        if ((o - r > a && ((r = o), (c = 0)), c >= i))
          throw new e.BridgeAPIError(n || "Too many invocations.");
        return ((c = c + 1), s(...l));
      };
    };
  return ((z.withRateLimiter = t), z);
}
var ft;
function yn() {
  return (
    ft ||
      ((ft = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = b(),
          s = m(),
          i = Ce(),
          a = (0, t.getCallBridge)(),
          n = (l) => {
            if (l && Object.values(l).some((o) => typeof o == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          r = (l, o) => {
            if (typeof l != "string") throw new s.BridgeAPIError("functionKey must be a string!");
            return (n(o), a("invoke", { functionKey: l, payload: o }));
          };
        e.invoke = (0, i.withRateLimiter)(
          r,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function c() {
          return e.invoke;
        }
        e.makeInvoke = c;
      })(De)),
    De
  );
}
var _t;
function Ee() {
  return (
    _t ||
      ((_t = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(yn(), e));
      })(Be)),
    Be
  );
}
var qe = {},
  V = {},
  Me = {},
  ht;
function Zr() {
  return (
    ht ||
      ((ht = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = b(),
          s = m(),
          i = Ce(),
          a = 500,
          n = 25,
          r = 1e3 * n;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, t.getCallBridge)(),
          l = (d) => {
            if (d && Object.values(d).some((f) => typeof f == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          o = (d) => async (f) => {
            l(f);
            const _ = { ...f, invokeType: `ui-${d.toLowerCase()}-fetch` },
              h = await c("invoke", _),
              { success: v, payload: g, error: y } = h ?? {},
              p = { ...(v ? g : y) };
            if (p && p.headers)
              for (const E in p.headers)
                Array.isArray(p.headers[E]) && (p.headers[E] = p.headers[E].join(","));
            return p;
          },
          u = (d) => {
            const f = o(d);
            return (0, i.withRateLimiter)(
              f,
              a,
              r,
              `${d} invocation calls are rate limited at ${a}/${n}s`,
            );
          };
        e._invokeEndpointFn = u;
      })(Me)),
    Me
  );
}
var vt;
function bn() {
  if (vt) return V;
  ((vt = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.invokeRemote = void 0));
  const e = Zr(),
    t = (s) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(s);
  return ((V.invokeRemote = t), V);
}
var K = {},
  gt;
function mn() {
  if (gt) return K;
  ((gt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.invokeService = void 0));
  const e = Zr(),
    t = (s) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(s);
  return ((K.invokeService = t), K);
}
var pt;
function wn() {
  return (
    pt ||
      ((pt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = P;
        (t.__exportStar(bn(), e), t.__exportStar(mn(), e));
      })(qe)),
    qe
  );
}
var Le = {},
  J = {},
  H = {},
  yt;
function En() {
  if (yt) return H;
  ((yt = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.submit = void 0));
  const e = b(),
    t = m(),
    s = (0, e.getCallBridge)(),
    i = async (a) => {
      if ((await s("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((H.submit = i), H);
}
var W = {},
  bt;
function On() {
  if (bt) return W;
  ((bt = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.close = void 0));
  const e = b(),
    t = m(),
    s = (0, e.getCallBridge)(),
    i = async (a) => {
      try {
        if ((await s("close", a)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((W.close = i), W);
}
var X = {},
  mt;
function Pn() {
  if (mt) return X;
  ((mt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.open = void 0));
  const e = b(),
    t = m(),
    s = (0, e.getCallBridge)(),
    i = async () => {
      try {
        if ((await s("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((X.open = i), X);
}
var Y = {},
  wt;
function Sn() {
  if (wt) return Y;
  ((wt = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.refresh = void 0));
  const e = b(),
    t = m(),
    s = (0, e.getCallBridge)(),
    i = async (a) => {
      if ((await s("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((Y.refresh = i), Y);
}
var Z = {},
  Et;
function Rn() {
  if (Et) return Z;
  ((Et = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.createHistory = void 0));
  const t = (0, b().getCallBridge)(),
    s = async () => {
      const i = await t("createHistory");
      return (
        i.listen((a) => {
          i.location = a;
        }),
        i
      );
    };
  return ((Z.createHistory = s), Z);
}
var Q = {},
  Ue = {},
  S = {},
  Ot;
function Qr() {
  return (
    Ot ||
      ((Ot = 1),
      Object.defineProperty(S, "__esModule", { value: !0 }),
      (S.FORGE_SUPPORTED_LOCALE_CODES = S.I18N_BUNDLE_FOLDER_NAME = S.I18N_INFO_FILE_NAME = void 0),
      (S.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (S.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (S.FORGE_SUPPORTED_LOCALE_CODES = [
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
    S
  );
}
var k = {},
  Pt;
function In() {
  if (Pt) return k;
  ((Pt = 1),
    Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.TranslationsGetter = k.TranslationGetterError = void 0));
  const e = (i, a) => {
    i.includes(a) || i.push(a);
  };
  class t extends Error {
    constructor(a) {
      (super(a), (this.name = "TranslationGetterError"));
    }
  }
  k.TranslationGetterError = t;
  class s {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(a) {
      this.resourcesAccessor = a;
    }
    async getTranslations(a, n = { fallback: !0 }) {
      const r = await this.getI18nInfoConfig(),
        { fallback: c } = n;
      if (!c) {
        let l;
        return (
          r.locales.includes(a) && (l = await this.getTranslationResource(a)),
          { translations: l ?? null, locale: a }
        );
      }
      for (const l of this.getLocaleLookupOrder(a, r)) {
        const o = await this.getTranslationResource(l);
        if (o) return { translations: o, locale: l };
      }
      return { translations: null, locale: a };
    }
    async getTranslationsByLocaleLookupOrder(a) {
      const n = await this.getI18nInfoConfig(),
        r = this.getLocaleLookupOrder(a, n);
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
    async getTranslationResource(a) {
      let n = this.translationResources.get(a);
      if (!n)
        try {
          ((n = await this.resourcesAccessor.getTranslationResource(a)),
            this.translationResources.set(a, n));
        } catch (r) {
          throw r instanceof t ? r : new t(`Failed to get translation resource for locale: ${a}`);
        }
      return n;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (a) {
          throw a instanceof t ? a : new t("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(a, n) {
      const { locales: r, fallback: c } = n,
        l = [a],
        o = c[a];
      return (
        o && Array.isArray(o) && o.length > 0 && l.push(...o),
        e(l, n.fallback.default),
        l.filter((u) => r.includes(u))
      );
    }
  }
  return ((k.TranslationsGetter = s), k);
}
var $ = {},
  Ne = {},
  St;
function $r() {
  return (
    St ||
      ((St = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const s = P.__importDefault(cn()),
          i = (n, r, c) => {
            const l = n[c];
            return l ? (0, e.getTranslationValueFromContent)(l, r) : null;
          };
        e.getTranslationValue = i;
        const a = (n, r) => {
          let c = n[r];
          if (!c) {
            const l = r.split(".");
            l.length > 1 && (c = (0, s.default)(n, l, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = a;
      })(Ne)),
    Ne
  );
}
var Rt;
function jn() {
  if (Rt) return $;
  ((Rt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.Translator = void 0));
  const e = $r();
  class t {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(i, a) {
      ((this.locale = i), (this.translationsGetter = a));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(i) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let a = this.cache.get(i);
      if (a === void 0) {
        for (const { translations: n } of this.localeLookupOrderedTranslations) {
          const r = (0, e.getTranslationValueFromContent)(n, i);
          if (r !== null) {
            a = r;
            break;
          }
        }
        ((a = a ?? null), this.cache.set(i, a));
      }
      return a;
    }
  }
  return (($.Translator = t), $);
}
var ee = {},
  It;
function Cn() {
  if (It) return ee;
  ((It = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.ensureLocale = void 0));
  const e = Qr(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    s = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    i = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (n, r) => {
        const [c] = r.split("-");
        return (n[c] || (n[c] = r), n);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    a = (n) => {
      const r = n.replace("_", "-");
      return t.has(r) ? r : (i[r] ?? s[r] ?? null);
    };
  return ((ee.ensureLocale = a), ee);
}
var Ge = {},
  jt;
function kn() {
  return (
    jt ||
      ((jt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (o) => typeof o == "object" && o !== null && !Array.isArray(o),
          s = (o) => typeof o?.i18n == "string",
          i = (o) => o.startsWith("connect-"),
          a = (o) => o.startsWith("core:"),
          n = (o) => {
            const u = new Set(),
              d = (f, _) =>
                !t(f) || u.has(f)
                  ? []
                  : (u.add(f),
                    Object.entries(f).flatMap(([h, v]) => {
                      const g = [..._, h];
                      return s(v)
                        ? [{ propertyPath: g, key: v.i18n }]
                        : Array.isArray(v)
                          ? v.flatMap((y) => d(y, g))
                          : d(v, g);
                    }));
            return d(o, []);
          },
          r = (o) =>
            Object.entries(o).flatMap(([u, d]) =>
              !i(u) && !a(u) && d && Array.isArray(d) && d.length > 0 ? d.map((f) => [f, u]) : [],
            );
        e.getI18nSupportedModuleEntries = r;
        const c = (o) => {
          const u = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(o)) {
            const f = n(d[0]);
            for (const { key: _ } of f) u.add(_);
          }
          return u.size > 0 ? Array.from(u) : [];
        };
        e.extractI18nKeysFromModules = c;
        const l = (o) => {
          const u = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(o)) {
            const f = n(d[0]);
            for (const _ of f) u.push({ moduleName: d[1], ..._ });
          }
          return u;
        };
        e.extractI18nPropertiesFromModules = l;
      })(Ge)),
    Ge
  );
}
var xe = {},
  Ct;
function An() {
  return (Ct || ((Ct = 1), Object.defineProperty(xe, "__esModule", { value: !0 })), xe);
}
var kt;
function en() {
  return (
    kt ||
      ((kt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = P;
        (t.__exportStar(Qr(), e),
          t.__exportStar(In(), e),
          t.__exportStar(jn(), e),
          t.__exportStar(Cn(), e));
        var s = $r();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return s.getTranslationValue;
          },
        });
        var i = kn();
        (Object.defineProperty(e, "extractI18nKeysFromModules", {
          enumerable: !0,
          get: function () {
            return i.extractI18nKeysFromModules;
          },
        }),
          Object.defineProperty(e, "extractI18nPropertiesFromModules", {
            enumerable: !0,
            get: function () {
              return i.extractI18nPropertiesFromModules;
            },
          }),
          Object.defineProperty(e, "getI18nSupportedModuleEntries", {
            enumerable: !0,
            get: function () {
              return i.getI18nSupportedModuleEntries;
            },
          }),
          t.__exportStar(An(), e));
      })(Ue)),
    Ue
  );
}
var At;
function Fn() {
  if (At) return Q;
  ((At = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.getContext = void 0));
  const e = b(),
    t = en(),
    s = (0, e.getCallBridge)(),
    i = async () => {
      var a;
      const n = await s("getContext"),
        r = n?.locale;
      return (r && (n.locale = (a = (0, t.ensureLocale)(r)) !== null && a !== void 0 ? a : r), n);
    };
  return ((Q.getContext = i), Q);
}
var te = {},
  Ft;
function Tn() {
  if (Ft) return te;
  ((Ft = 1),
    Object.defineProperty(te, "__esModule", { value: !0 }),
    (te.changeWindowTitle = void 0));
  const e = b(),
    t = m(),
    s = (0, e.getCallBridge)(),
    i = async (a) => {
      try {
        await s("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((te.changeWindowTitle = i), te);
}
var re = {},
  Tt;
function Bn() {
  if (Tt) return re;
  ((Tt = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.theme = void 0));
  const t = (0, b().getCallBridge)();
  return ((re.theme = { enable: () => t("enableTheming") }), re);
}
var ne = {},
  ie = {},
  ze = {},
  A = {},
  Bt;
function tn() {
  if (Bt) return A;
  ((Bt = 1),
    Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.blobToBase64 = A.base64ToBlob = void 0));
  const e = (s, i) => {
    if (!s) return null;
    const a = s.includes(";base64") ? s.split(",")[1] : s,
      n = atob(a),
      r = new Array(n.length);
    for (let l = 0; l < n.length; l++) r[l] = n.charCodeAt(l);
    const c = new Uint8Array(r);
    return new Blob([c], { type: i });
  };
  A.base64ToBlob = e;
  const t = (s) =>
    new Promise((i, a) => {
      const n = new FileReader();
      ((n.onloadend = () => {
        i(n.result);
      }),
        (n.onerror = a),
        n.readAsDataURL(s));
    });
  return ((A.blobToBase64 = t), A);
}
var Dt;
function Dn() {
  return (
    Dt ||
      ((Dt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = tn(),
          s = (o) => {
            if (
              typeof o != "object" ||
              o === null ||
              Object.prototype.toString.call(o) !== "[object Object]"
            )
              return !1;
            const u = Object.getPrototypeOf(o);
            if (u === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(u, "constructor") && u.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(o)
            );
          },
          i = async (o) => ({ data: await (0, t.blobToBase64)(o), type: o.type }),
          a = (o) => (0, t.base64ToBlob)(o.data, o.type),
          n = async (o) => {
            if (o instanceof Blob) return { ...(await i(o)), __isBlobData: !0 };
            if (Array.isArray(o))
              return Promise.all(o.map((u) => (0, e.serialiseBlobsInPayload)(u)));
            if (o && s(o)) {
              const u = await Promise.all(
                Object.entries(o).map(async ([d, f]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(f),
                ]),
              );
              return Object.fromEntries(u);
            }
            return o;
          };
        e.serialiseBlobsInPayload = n;
        const r = (o) => {
          if (o && s(o) && "__isBlobData" in o) {
            const u = o;
            return a({ data: u.data, type: u.type });
          }
          if (Array.isArray(o)) return o.map((u) => (0, e.deserialiseBlobsInPayload)(u));
          if (o && s(o)) {
            const u = {};
            for (const [d, f] of Object.entries(o)) u[d] = (0, e.deserialiseBlobsInPayload)(f);
            return u;
          }
          return o;
        };
        e.deserialiseBlobsInPayload = r;
        const c = (o) =>
          o instanceof Blob
            ? !0
            : Array.isArray(o)
              ? o.some((u) => (0, e.containsBlobs)(u))
              : o && s(o)
                ? Object.values(o).some((u) => (0, e.containsBlobs)(u))
                : !1;
        e.containsBlobs = c;
        const l = (o) =>
          o && s(o) && "__isBlobData" in o
            ? !0
            : Array.isArray(o)
              ? o.some((u) => (0, e.containsSerialisedBlobs)(u))
              : o && s(o)
                ? Object.values(o).some((u) => (0, e.containsSerialisedBlobs)(u))
                : !1;
        e.containsSerialisedBlobs = l;
      })(ze)),
    ze
  );
}
var qt;
function rn() {
  if (qt) return ie;
  ((qt = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.events = void 0));
  const e = b(),
    t = Dn(),
    s = (0, e.getCallBridge)(),
    i = async (n, r) => {
      let c = r;
      return (
        (0, t.containsBlobs)(r) && (c = await (0, t.serialiseBlobsInPayload)(r)),
        s("emit", { event: n, payload: c })
      );
    },
    a = (n, r) =>
      s("on", {
        event: n,
        callback: (l) => {
          let o = l;
          return (
            (0, t.containsSerialisedBlobs)(l) && (o = (0, t.deserialiseBlobsInPayload)(l)),
            r(o)
          );
        },
      });
  return ((ie.events = { emit: i, on: a }), ie);
}
var Mt;
function qn() {
  if (Mt) return ne;
  ((Mt = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.emitReadyEvent = void 0));
  const e = rn(),
    t = nn(),
    s = "EXTENSION_READY",
    i = async () => {
      const a = await t.view.getContext();
      await e.events.emit(s, { localId: a.localId });
    };
  return ((ne.emitReadyEvent = i), ne);
}
var Lt;
function nn() {
  if (Lt) return J;
  ((Lt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.view = void 0));
  const e = En(),
    t = On(),
    s = Pn(),
    i = Sn(),
    a = Rn(),
    n = Fn(),
    r = Tn(),
    c = Bn(),
    l = qn();
  return (
    (J.view = {
      submit: e.submit,
      close: t.close,
      open: s.open,
      refresh: i.refresh,
      createHistory: a.createHistory,
      getContext: n.getContext,
      theme: c.theme,
      changeWindowTitle: r.changeWindowTitle,
      emitReadyEvent: l.emitReadyEvent,
    }),
    J
  );
}
var Ut;
function ot() {
  return (
    Ut ||
      ((Ut = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(nn(), e));
      })(Le)),
    Le
  );
}
var Ve = {},
  oe = {},
  Nt;
function Mn() {
  if (Nt) return oe;
  ((Nt = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.router = void 0));
  const t = (0, b().getCallBridge)(),
    s = async (r) => {
      if (!r?.target) throw new Error("target is required for getUrl");
      const c = await t("getUrl", r);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (l) {
        throw new Error(`Failed to parse URL: ${c} (${l})`);
      }
    },
    i = (r) => {
      if (typeof r == "string") return t("navigate", { url: r, type: "same-tab" });
      if (!r?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...r, type: "same-tab" });
    },
    a = (r) => {
      if (typeof r == "string") return t("navigate", { url: r, type: "new-tab" });
      if (!r?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...r, type: "new-tab" });
    },
    n = async () => t("reload");
  return ((oe.router = { getUrl: s, navigate: i, open: a, reload: n }), oe);
}
var Gt;
function Ln() {
  return (
    Gt ||
      ((Gt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Mn(), e));
      })(Ve)),
    Ve
  );
}
var Ke = {},
  ae = {},
  xt;
function Un() {
  if (xt) return ae;
  ((xt = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.Modal = void 0));
  const e = b(),
    t = m(),
    s = (0, e.getCallBridge)(),
    i = () => {};
  class a {
    constructor(r) {
      var c, l;
      ((this.resource = r?.resource || null),
        (this.onClose = r?.onClose || i),
        (this.size = r?.size || "medium"),
        (this.context = r?.context || {}),
        (this.closeOnEscape = (c = r?.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick =
          (l = r?.closeOnOverlayClick) !== null && l !== void 0 ? l : !0));
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
  return ((ae.Modal = a), ae);
}
var zt;
function Nn() {
  return (
    zt ||
      ((zt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Un(), e));
      })(Ke)),
    Ke
  );
}
var R = {},
  se = {},
  Vt;
function Gn() {
  if (Vt) return se;
  ((Vt = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.productFetchApi = void 0));
  const e = tn(),
    t = async (n) => {
      const r = {};
      for (const [c, l] of n.entries())
        if (c === "file") {
          const o = l.name,
            u = l.type;
          ((r.file = await (0, e.blobToBase64)(l)), (r.__fileName = o), (r.__fileType = u));
        } else r[c] = l;
      return JSON.stringify(r);
    },
    s = (n) => {
      if (!n) return n;
      if ("signal" in n) {
        const { signal: r, ...c } = n;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          c
        );
      }
      return n;
    },
    i = async (n) => {
      const r = n?.body instanceof FormData,
        c = r ? await t(n?.body) : n?.body,
        l = new Request("", { body: c, method: n?.method, headers: n?.headers }),
        o = Object.fromEntries(l.headers.entries());
      return {
        body: l.method !== "GET" ? await l.text() : null,
        headers: new Headers(o),
        isMultipartFormData: r,
      };
    },
    a = (n) => {
      const r = async (c, l, o) => {
        const u = s(o),
          { body: d, headers: f, isMultipartFormData: _ } = await i(u);
        f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
        const h = {
            product: c,
            restPath: l,
            fetchRequestInit: { ...u, body: d, headers: [...f.entries()] },
            isMultipartFormData: _,
          },
          {
            body: v,
            headers: g,
            statusText: y,
            status: p,
            isAttachment: E,
          } = await n("fetchProduct", h),
          O = E ? (0, e.base64ToBlob)(v, g["content-type"]) : v;
        return new Response(O || null, { headers: g, status: p, statusText: y });
      };
      return {
        requestConfluence: (c, l) => r("confluence", c, l),
        requestJira: (c, l) => r("jira", c, l),
        requestBitbucket: (c, l) => r("bitbucket", c, l),
      };
    };
  return ((se.productFetchApi = a), se);
}
var Kt;
function xn() {
  if (Kt) return R;
  Kt = 1;
  var e;
  (Object.defineProperty(R, "__esModule", { value: !0 }),
    (R.requestBitbucket = R.requestJira = R.requestConfluence = void 0));
  const t = b();
  return (
    (e = (0, Gn().productFetchApi)((0, t.getCallBridge)())),
    (R.requestConfluence = e.requestConfluence),
    (R.requestJira = e.requestJira),
    (R.requestBitbucket = e.requestBitbucket),
    R
  );
}
var Je = {},
  ue = {},
  Jt;
function zn() {
  if (Jt) return ue;
  ((Jt = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.showFlag = void 0));
  const e = b(),
    t = m(),
    s = (0, e.getCallBridge)(),
    i = (a) => {
      var n;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const r = s("showFlag", { ...a, type: (n = a.type) !== null && n !== void 0 ? n : "info" });
      return { close: async () => (await r, s("closeFlag", { id: a.id })) };
    };
  return ((ue.showFlag = i), ue);
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
      })(Je)),
    Je
  );
}
var He = {},
  Wt;
function Kn() {
  return (
    Wt ||
      ((Wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(rn(), e));
      })(He)),
    He
  );
}
var We = {},
  le = {},
  Xt;
function Jn() {
  if (Xt) return le;
  ((Xt = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.realtime = void 0));
  const t = (0, b().getCallBridge)(),
    s = (r, c, l) => t("publishRealtimeChannel", { channelName: r, eventPayload: c, options: l }),
    i = (r, c, l) => t("subscribeRealtimeChannel", { channelName: r, onEvent: c, options: l }),
    a = (r, c, l) =>
      t("publishRealtimeChannel", { channelName: r, eventPayload: c, options: l, isGlobal: !0 }),
    n = (r, c, l) =>
      t("subscribeRealtimeChannel", { channelName: r, onEvent: c, options: l, isGlobal: !0 });
  return ((le.realtime = { publish: s, subscribe: i, publishGlobal: a, subscribeGlobal: n }), le);
}
var Xe = {},
  Yt;
function Hn() {
  return (
    Yt ||
      ((Yt = 1),
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
      })(Xe)),
    Xe
  );
}
var Zt;
function Wn() {
  return (
    Zt ||
      ((Zt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = Jn();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var s = Hn();
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
      })(We)),
    We
  );
}
var I = {},
  Qt;
function Xn() {
  if (Qt) return I;
  ((Qt = 1),
    Object.defineProperty(I, "__esModule", { value: !0 }),
    (I.createTranslationFunction = I.getTranslations = I.resetTranslationsCache = void 0));
  const e = en(),
    t = ot(),
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
    i = new e.TranslationsGetter(s),
    a = () => {
      i.reset();
    };
  I.resetTranslationsCache = a;
  const n = async (c = null, l = { fallback: !0 }) => {
    let o = c;
    return (o || (o = (await t.view.getContext()).locale), await i.getTranslations(o, l));
  };
  I.getTranslations = n;
  const r = async (c = null) => {
    let l = c;
    l || (l = (await t.view.getContext()).locale);
    const o = new e.Translator(l, i);
    return (
      await o.init(),
      (u, d) => {
        var f, _;
        return (_ = (f = o.translate(u)) !== null && f !== void 0 ? f : d) !== null && _ !== void 0
          ? _
          : u;
      }
    );
  };
  return ((I.createTranslationFunction = r), I);
}
var Ye = {},
  Ze = {},
  Qe = {},
  ce = {},
  de = {},
  $t;
function on() {
  return (
    $t ||
      (($t = 1),
      Object.defineProperty(de, "__esModule", { value: !0 }),
      (de.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (de.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    de
  );
}
var er;
function ke() {
  if (er) return ce;
  ((er = 1),
    Object.defineProperty(ce, "__esModule", { value: !0 }),
    (ce.checkRestrictedEnvironment = void 0));
  const e = m(),
    t = ot(),
    s = on(),
    i = async () => {
      const { environmentType: a } = await t.view.getContext();
      if (a === "PRODUCTION")
        throw new e.BridgeAPIError(s.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((ce.checkRestrictedEnvironment = i), ce);
}
var tr;
function Yn() {
  return (
    tr ||
      ((tr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = Ee(),
          s = m(),
          i = ke(),
          n = (0, b().getCallBridge)(),
          r = (u, d) => {
            const f = atob(u),
              _ = new Array(f.length);
            for (let v = 0; v < f.length; v++) _[v] = f.charCodeAt(v);
            const h = new Uint8Array(_);
            return new Blob([h], { type: d || "application/octet-stream" });
          },
          c = async (u) => {
            const d = u.size,
              f = await u.arrayBuffer(),
              _ = await crypto.subtle.digest("SHA-256", f),
              h = new Uint8Array(_),
              v = btoa(String.fromCharCode(...h));
            return { length: d, checksum: v, checksumType: "SHA256" };
          },
          l = async ({ functionKey: u, objects: d }) => {
            if (!u || u.length === 0)
              throw new s.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(d) || d.length === 0)
              throw new s.BridgeAPIError("objects array is required and must not be empty");
            const f = d.map((p, E) => {
                if (p instanceof Blob) return p;
                if (!(p && typeof p == "object" && "data" in p && typeof p.data == "string"))
                  throw new s.BridgeAPIError(
                    `Invalid object type at index ${E}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return r(p.data, p.mimeType);
                } catch {
                  throw new s.BridgeAPIError(
                    `Invalid base64 data at index ${E}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              _ = await Promise.all(f.map((p) => c(p))),
              h = await (0, t.invoke)(u, { allObjectMetadata: _ });
            if (!h || typeof h != "object")
              throw new s.BridgeAPIError("Invalid response from functionKey");
            const v = new Map(),
              g = new Map();
            return (
              f.forEach((p, E) => {
                const O = _[E];
                (v.set(O.checksum, p), g.set(O.checksum, E));
              }),
              Object.entries(h).map(([p, E]) => {
                const { key: O, checksum: L } = E,
                  B = v.get(L),
                  Ae = g.get(L);
                return Ae === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: O,
                        error: `Index not found for checksum ${L}`,
                      }),
                      index: -1,
                    }
                  : B
                    ? {
                        promise: (async () => {
                          try {
                            const C = await fetch(p, {
                              method: "PUT",
                              body: B,
                              headers: {
                                "Content-Type": B.type || "application/octet-stream",
                                "Content-Length": B.size.toString(),
                              },
                            });
                            return {
                              success: C.ok,
                              key: O,
                              status: C.status,
                              error: C.ok ? void 0 : `Upload failed with status ${C.status}`,
                            };
                          } catch (C) {
                            return {
                              success: !1,
                              key: O,
                              status: 503,
                              error: C instanceof Error ? C.message : "Upload failed",
                            };
                          }
                        })(),
                        index: Ae,
                        objectType: B.type,
                        objectSize: B.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: O,
                          error: `Blob not found for checksum ${L}`,
                        }),
                        index: Ae,
                      };
              })
            );
          };
        e.createUploadPromises = l;
        const o = async ({ functionKey: u, objects: d }) => {
          (await (0, i.checkRestrictedEnvironment)(),
            n("trackObjectStoreAction", { action: "upload" }));
          const f = await (0, e.createUploadPromises)({ functionKey: u, objects: d });
          return await Promise.all(f.map((h) => h.promise));
        };
        e.upload = o;
      })(Qe)),
    Qe
  );
}
var fe = {},
  rr;
function Zn() {
  if (rr) return fe;
  ((rr = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.deleteObjects = void 0));
  const e = Ee(),
    t = m(),
    s = ke(),
    a = (0, b().getCallBridge)(),
    n = async ({ functionKey: r, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        a("trackObjectStoreAction", { action: "delete" }),
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
  return ((fe.deleteObjects = n), fe);
}
var _e = {},
  nr;
function Qn() {
  if (nr) return _e;
  ((nr = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.download = void 0));
  const e = Ee(),
    t = m(),
    s = ke(),
    a = (0, b().getCallBridge)(),
    n = async ({ functionKey: r, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        a("trackObjectStoreAction", { action: "download" }),
        !r || r.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(c) || c.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      const l = await (0, e.invoke)(r, { keys: c });
      if (!l || typeof l != "object")
        throw new t.BridgeAPIError("Invalid response from functionKey");
      const o = Object.entries(l).map(async ([d, f]) => {
        try {
          const _ = await fetch(d, { method: "GET" });
          if (!_.ok)
            return {
              success: !1,
              key: f,
              status: _.status,
              error: `Download failed with status ${_.status}`,
            };
          const h = await _.blob();
          return { success: !0, key: f, blob: h, status: _.status };
        } catch (_) {
          return {
            success: !1,
            key: f,
            status: 503,
            error: _ instanceof Error ? _.message : "Download failed",
          };
        }
      });
      return await Promise.all(o);
    };
  return ((_e.download = n), _e);
}
var he = {},
  ir;
function $n() {
  if (ir) return he;
  ((ir = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.getMetadata = void 0));
  const e = Ee(),
    t = m(),
    s = ke(),
    a = (0, b().getCallBridge)(),
    n = async ({ functionKey: r, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        a("trackObjectStoreAction", { action: "getMetadata" }),
        !r || r.length === 0)
      )
        throw new t.BridgeAPIError(
          "functionKey is required to filter and generate object metadata",
        );
      if (!Array.isArray(c) || c.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      return await Promise.all(
        c.map(async (o) => {
          const u = await (0, e.invoke)(r, { key: o });
          return !u || typeof u != "object"
            ? { key: o, error: "Invalid response from functionKey" }
            : u;
        }),
      );
    };
  return ((he.getMetadata = n), he);
}
var or;
function ei() {
  return (
    or ||
      ((or = 1),
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
        const s = Zn(),
          i = Qn(),
          a = $n();
        e.objectStore = {
          upload: t.upload,
          download: i.download,
          getMetadata: a.getMetadata,
          delete: s.deleteObjects,
        };
      })(Ze)),
    Ze
  );
}
var ar;
function ti() {
  return (
    ar ||
      ((ar = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = P;
        (t.__exportStar(ei(), e), t.__exportStar(on(), e));
      })(Ye)),
    Ye
  );
}
var $e = {},
  ve = {},
  F = {},
  D = {},
  Pe = {},
  sr;
function ri() {
  if (sr) return Pe;
  ((sr = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }));
  const e = j();
  let t = class {
    constructor(i) {
      ((this._sdkKey = i),
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
    setValues(i, a) {
      var n;
      if (!i) return !1;
      const r = (0, e._typedJsonParse)(i.data, "has_updates", "EvaluationResponse");
      return r == null
        ? !1
        : ((this._source = i.source),
          r?.has_updates !== !0 ||
            ((this._rawValues = i.data),
            (this._lcut = r.time),
            (this._receivedAt = i.receivedAt),
            (this._values = r),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(i.source, r)),
            i.source && r.user && this._setWarningState(a, r),
            e.SDKFlags.setFlags(this._sdkKey, (n = r.sdk_flags) !== null && n !== void 0 ? n : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(i) {
      var a;
      return this._getDetailedStoreResult(
        (a = this._values) === null || a === void 0 ? void 0 : a.feature_gates,
        i,
      );
    }
    getConfig(i) {
      var a;
      return this._getDetailedStoreResult(
        (a = this._values) === null || a === void 0 ? void 0 : a.dynamic_configs,
        i,
      );
    }
    getLayer(i) {
      var a;
      return this._getDetailedStoreResult(
        (a = this._values) === null || a === void 0 ? void 0 : a.layer_configs,
        i,
      );
    }
    getParamStore(i) {
      var a;
      return this._getDetailedStoreResult(
        (a = this._values) === null || a === void 0 ? void 0 : a.param_stores,
        i,
      );
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var i;
      return (i = this._values) === null || i === void 0 ? void 0 : i.exposures;
    }
    _extractBootstrapMetadata(i, a) {
      if (i !== "Bootstrap") return null;
      const n = {};
      return (
        a.user && (n.user = a.user),
        a.sdkInfo && (n.generatorSDKInfo = a.sdkInfo),
        (n.lcut = a.time),
        n
      );
    }
    _getDetailedStoreResult(i, a) {
      let n = null;
      return (
        i && (n = i[a] ? i[a] : i[(0, e._DJB2)(a)]),
        { result: n, details: this._getDetails(n == null) }
      );
    }
    _setWarningState(i, a) {
      var n, r;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((n = i.customIDs) === null || n === void 0 ? void 0 : n.stableID) !== c &&
        ((!((r = i.customIDs) === null || r === void 0) && r.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in a) {
        const l = a.user;
        (0, e._getFullUserHash)(i) !== (0, e._getFullUserHash)(l) &&
          this._warnings.add("PartialUserMatch");
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues")
        return { reason: this._source };
      const i = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (i.warnings = Array.from(this._warnings)), i);
    }
    _getDetails(i) {
      var a, n;
      const r = this.getCurrentSourceDetails();
      let c = r.reason;
      const l = (a = r.warnings) !== null && a !== void 0 ? a : [];
      (this._source === "Bootstrap" && l.length > 0 && (c = c + l[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${i ? "Unrecognized" : "Recognized"}`));
      const o =
        this._source === "Bootstrap" && (n = this._bootstrapMetadata) !== null && n !== void 0
          ? n
          : void 0;
      return (o && (r.bootstrapMetadata = o), Object.assign(Object.assign({}, r), { reason: c }));
    }
  };
  return ((Pe.default = t), Pe);
}
var q = {},
  ge = {},
  ur;
function ni() {
  if (ur) return ge;
  ((ur = 1),
    Object.defineProperty(ge, "__esModule", { value: !0 }),
    (ge._resolveDeltasResponse = void 0));
  const e = j(),
    t = 2;
  function s(r, c) {
    const l = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!l) return { hadBadDeltaChecksum: !0 };
    const o = i(r, l),
      u = a(o),
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
  ge._resolveDeltasResponse = s;
  function i(r, c) {
    return Object.assign(Object.assign(Object.assign({}, r), c), {
      feature_gates: Object.assign(Object.assign({}, r.feature_gates), c.feature_gates),
      layer_configs: Object.assign(Object.assign({}, r.layer_configs), c.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, r.dynamic_configs), c.dynamic_configs),
    });
  }
  function a(r) {
    const c = r;
    return (
      n(r.deleted_gates, c.feature_gates),
      delete c.deleted_gates,
      n(r.deleted_configs, c.dynamic_configs),
      delete c.deleted_configs,
      n(r.deleted_layers, c.layer_configs),
      delete c.deleted_layers,
      c
    );
  }
  function n(r, c) {
    r?.forEach((l) => {
      delete c[l];
    });
  }
  return ge;
}
var lr;
function an() {
  if (lr) return q;
  lr = 1;
  var e =
    (q && q.__awaiter) ||
    function (a, n, r, c) {
      function l(o) {
        return o instanceof r
          ? o
          : new r(function (u) {
              u(o);
            });
      }
      return new (r || (r = Promise))(function (o, u) {
        function d(h) {
          try {
            _(c.next(h));
          } catch (v) {
            u(v);
          }
        }
        function f(h) {
          try {
            _(c.throw(h));
          } catch (v) {
            u(v);
          }
        }
        function _(h) {
          h.done ? o(h.value) : l(h.value).then(d, f);
        }
        _((c = c.apply(a, n || [])).next());
      });
    };
  Object.defineProperty(q, "__esModule", { value: !0 });
  const t = j(),
    s = ni();
  class i extends t.NetworkCore {
    constructor(n, r) {
      super(n, r);
      const c = n?.networkConfig;
      ((this._option = n),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          c?.initializeUrl,
          c?.api,
          c?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(n, r, c, l, o) {
      return e(this, void 0, void 0, function* () {
        var u, d, f, _, h, v;
        const g = r ? (0, t._typedJsonParse)(r, "has_updates", "InitializeResponse") : null;
        let y = {
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
        if (g?.has_updates) {
          const p =
            g?.hash_used !==
            ((v =
              (h = (_ = this._option) === null || _ === void 0 ? void 0 : _.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && v !== void 0
              ? v
              : "djb2");
          y = Object.assign(Object.assign({}, y), {
            sinceTime: o && !p ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && o ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: p ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(n, g, y, c);
      });
    }
    _fetchEvaluations(n, r, c, l) {
      return e(this, void 0, void 0, function* () {
        var o, u;
        const d = yield this.post({
          sdkKey: n,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: l,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (o = d?.body) !== null && o !== void 0 ? o : null;
        if (
          r?.has_updates !== !0 ||
          ((u = d.body) === null || u === void 0 ? void 0 : u.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const f = (0, s._resolveDeltasResponse)(r, d.body);
        return typeof f == "string"
          ? f
          : this._fetchEvaluations(
              n,
              r,
              Object.assign(Object.assign(Object.assign({}, c), f), {
                deltasResponseRequested: !1,
              }),
              l,
            );
      });
    }
  }
  return ((q.default = i), q);
}
var pe = {},
  cr;
function ii() {
  if (cr) return pe;
  ((cr = 1),
    Object.defineProperty(pe, "__esModule", { value: !0 }),
    (pe._makeParamStoreGetter = void 0));
  const e = j(),
    t = { disableExposureLog: !0 };
  function s(u) {
    return u == null || u.disableExposureLog === !1;
  }
  function i(u, d) {
    return d != null && !(0, e._isTypeMatch)(u, d);
  }
  function a(u, d) {
    return u.value;
  }
  function n(u, d, f) {
    return u.getFeatureGate(d.gate_name, s(f) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function r(u, d, f, _) {
    const v = u.getDynamicConfig(d.config_name, s(_) ? void 0 : t).get(d.param_name);
    return i(v, f) ? f : v;
  }
  function c(u, d, f, _) {
    const v = u.getExperiment(d.experiment_name, s(_) ? void 0 : t).get(d.param_name);
    return i(v, f) ? f : v;
  }
  function l(u, d, f, _) {
    const v = u.getLayer(d.layer_name, s(_) ? void 0 : t).get(d.param_name);
    return i(v, f) ? f : v;
  }
  function o(u, d, f) {
    return (_, h) => {
      if (d == null) return h;
      const v = d[_];
      if (v == null || (h != null && (0, e._typeOf)(h) !== v.param_type)) return h;
      switch (v.ref_type) {
        case "static":
          return a(v);
        case "gate":
          return n(u, v, f);
        case "dynamic_config":
          return r(u, v, h, f);
        case "experiment":
          return c(u, v, h, f);
        case "layer":
          return l(u, v, h, f);
        default:
          return h;
      }
    };
  }
  return ((pe._makeParamStoreGetter = o), pe);
}
var T = {},
  dr;
function oi() {
  if (dr) return T;
  dr = 1;
  var e =
    (T && T.__awaiter) ||
    function (a, n, r, c) {
      function l(o) {
        return o instanceof r
          ? o
          : new r(function (u) {
              u(o);
            });
      }
      return new (r || (r = Promise))(function (o, u) {
        function d(h) {
          try {
            _(c.next(h));
          } catch (v) {
            u(v);
          }
        }
        function f(h) {
          try {
            _(c.throw(h));
          } catch (v) {
            u(v);
          }
        }
        function _(h) {
          h.done ? o(h.value) : l(h.value).then(d, f);
        }
        _((c = c.apply(a, n || [])).next());
      });
    };
  (Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.StatsigEvaluationsDataAdapter = void 0));
  const t = j(),
    s = an();
  let i = class extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(n, r, c) {
      (super.attach(n, r, c),
        c !== null && c instanceof s.default
          ? (this._network = c)
          : (this._network = new s.default(r ?? {})));
    }
    getDataAsync(n, r, c) {
      return this._getDataAsyncImpl(n, (0, t._normalizeUser)(r, this._options), c);
    }
    prefetchData(n, r) {
      return this._prefetchDataImpl(n, r);
    }
    setData(n) {
      const r = (0, t._typedJsonParse)(n, "has_updates", "data");
      r && "user" in r
        ? super.setData(n, r.user)
        : t.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(n, r) {
      super.setData(n, r);
    }
    _fetchFromNetwork(n, r, c, l) {
      return e(this, void 0, void 0, function* () {
        var o;
        const u = yield (o = this._network) === null || o === void 0
          ? void 0
          : o.fetchEvaluations(this._getSdkKey(), n, c?.priority, r, l);
        return u ?? null;
      });
    }
    _getCacheKey(n) {
      var r;
      const c = (0, t._getStorageKey)(
        this._getSdkKey(),
        n,
        (r = this._options) === null || r === void 0 ? void 0 : r.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${c}`;
    }
    _isCachedResultValidFor204(n, r) {
      return n.fullUserHash != null && n.fullUserHash === (0, t._getFullUserHash)(r);
    }
  };
  return ((T.StatsigEvaluationsDataAdapter = i), T);
}
var fr;
function ai() {
  if (fr) return D;
  fr = 1;
  var e =
    (D && D.__awaiter) ||
    function (c, l, o, u) {
      function d(f) {
        return f instanceof o
          ? f
          : new o(function (_) {
              _(f);
            });
      }
      return new (o || (o = Promise))(function (f, _) {
        function h(y) {
          try {
            g(u.next(y));
          } catch (p) {
            _(p);
          }
        }
        function v(y) {
          try {
            g(u.throw(y));
          } catch (p) {
            _(p);
          }
        }
        function g(y) {
          y.done ? f(y.value) : d(y.value).then(h, v);
        }
        g((u = u.apply(c, l || [])).next());
      });
    };
  Object.defineProperty(D, "__esModule", { value: !0 });
  const t = j(),
    s = ri(),
    i = an(),
    a = ii(),
    n = oi();
  let r = class nt extends t.StatsigClientBase {
    static instance(l) {
      const o = (0, t._getStatsigGlobal)().instance(l);
      return o instanceof nt
        ? o
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new nt(l ?? "", {}));
    }
    constructor(l, o, u = null) {
      var d, f;
      t.SDKType._setClientType(l, "javascript-client");
      const _ = new i.default(u, (v) => {
        this.$emt(v);
      });
      (super(
        l,
        (d = u?.dataAdapter) !== null && d !== void 0 ? d : new n.StatsigEvaluationsDataAdapter(),
        _,
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
        (this._store = new s.default(l)),
        (this._network = _),
        (this._user = this._configureUser(o, u)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (f = u?.plugins) !== null && f !== void 0 ? f : [];
      for (const v of h) v.bind(this);
    }
    initializeSync(l) {
      var o;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((o = this._store.getWarnings()) !== null && o !== void 0 ? o : []),
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
    updateUserSync(l, o) {
      const u = performance.now();
      try {
        return this._updateUserSyncImpl(l, o, u);
      } catch (d) {
        const f = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(f, u);
      }
    }
    _updateUserSyncImpl(l, o, u) {
      var d;
      const f = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(l);
      const _ = this.dataAdapter.getDataSync(this._user);
      (_ == null && f.push("NoCachedValues"),
        this._store.setValues(_, this._user),
        this._finalizeUpdate(_));
      const h = o?.disableBackgroundCacheRefresh;
      return h === !0 || (h == null && _?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          )
        : (this._runPostUpdate(_ ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          ));
    }
    updateUserAsync(l, o) {
      return e(this, void 0, void 0, function* () {
        const u = performance.now();
        try {
          return yield this._updateUserAsyncImpl(l, o);
        } catch (d) {
          const f = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(f, u);
        }
      });
    }
    _updateUserAsyncImpl(l, o) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(l);
        const u = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(u);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, u, o)),
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
        const _ = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          f,
          this._store.getSource(),
          _,
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
    checkGate(l, o) {
      return this.getFeatureGate(l, o).value;
    }
    logEvent(l, o, u) {
      const d = typeof l == "string" ? { eventName: l, value: o, metadata: u } : l;
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
    _createErrorUpdateDetails(l, o) {
      var u;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - o,
        l,
        null,
        [...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : [])],
      );
    }
    _finalizeUpdate(l) {
      (this._store.finalize(), this._setStatus("Ready", l));
    }
    _runPostUpdate(l, o) {
      this.dataAdapter.getDataAsync(l, o, { priority: "low" }).catch((u) => {
        t.Log.error("An error occurred after update.", u);
      });
    }
    _resetForUser(l) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(l, this._options)));
    }
    _configureUser(l, o) {
      var u;
      const d = (0, t._normalizeUser)(l, o),
        f = (u = d.customIDs) === null || u === void 0 ? void 0 : u.stableID;
      return (f && t.StableID.setOverride(f, this._sdkKey), d);
    }
    _getFeatureGateImpl(l, o) {
      var u, d;
      const { result: f, details: _ } = this._store.getGate(l),
        h = (0, t._makeFeatureGate)(l, _, f),
        v =
          (d = (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, h, this._user, o),
        g = v ?? h;
      return (
        this._enqueueExposure(
          l,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          o,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(l, o) {
      var u, d;
      const { result: f, details: _ } = this._store.getConfig(l),
        h = (0, t._makeDynamicConfig)(l, _, f),
        v =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(u, h, this._user, o),
        g = v ?? h;
      return (
        this._enqueueExposure(
          l,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          o,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(l, o) {
      var u, d, f, _;
      const { result: h, details: v } = this._store.getConfig(l),
        g = (0, t._makeExperiment)(l, v, h);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (u = g.__evaluation) === null || u === void 0 ? void 0 : u.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const y =
          (_ =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || _ === void 0
            ? void 0
            : _.call(f, g, this._user, o),
        p = y ?? g;
      return (
        this._enqueueExposure(
          l,
          (0, t._createConfigExposure)(this._user, p, this._store.getExposureMapping()),
          o,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: p }),
        p
      );
    }
    _getLayerImpl(l, o) {
      var u, d, f;
      const { result: _, details: h } = this._store.getLayer(l),
        v = (0, t._makeLayer)(l, h, _),
        g =
          (d =
            (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, v, this._user, o);
      o?.disableExposureLog && this._logger.incrementNonExposureCount(l);
      const y = (0, t._mergeOverride)(
        v,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : v.__value,
        (p) => {
          o?.disableExposureLog ||
            this._enqueueExposure(
              l,
              (0, t._createLayerParameterExposure)(
                this._user,
                y,
                p,
                this._store.getExposureMapping(),
              ),
              o,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: y }), y);
    }
    _getParameterStoreImpl(l, o) {
      var u, d;
      const { result: f, details: _ } = this._store.getParamStore(l);
      this._logger.incrementNonExposureCount(l);
      const h = {
          name: l,
          details: _,
          __configuration: f,
          get: (0, a._makeParamStoreGetter)(this, f, o),
        },
        v =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(u, h, o);
      return (
        v != null &&
          ((h.__configuration = v.config),
          (h.details = v.details),
          (h.get = (0, a._makeParamStoreGetter)(this, v.config, o))),
        h
      );
    }
  };
  return ((D.default = r), D);
}
var _r;
function si() {
  return (
    _r ||
      ((_r = 1),
      (function (e) {
        var t =
            (F && F.__createBinding) ||
            (Object.create
              ? function (r, c, l, o) {
                  o === void 0 && (o = l);
                  var u = Object.getOwnPropertyDescriptor(c, l);
                  ((!u || ("get" in u ? !c.__esModule : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return c[l];
                      },
                    }),
                    Object.defineProperty(r, o, u));
                }
              : function (r, c, l, o) {
                  (o === void 0 && (o = l), (r[o] = c[l]));
                }),
          s =
            (F && F.__exportStar) ||
            function (r, c) {
              for (var l in r)
                l !== "default" && !Object.prototype.hasOwnProperty.call(c, l) && t(c, r, l);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const i = j(),
          a = ai();
        ((e.StatsigClient = a.default), s(j(), e));
        const n = Object.assign((0, i._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = n;
      })(F)),
    F
  );
}
var ye = {},
  be = {},
  hr;
function ui() {
  if (hr) return be;
  ((hr = 1),
    Object.defineProperty(be, "__esModule", { value: !0 }),
    (be.initFeatureFlags = void 0));
  const e = b(),
    t = m(),
    s = Ce(),
    i = 500,
    a = 1e3 * 25,
    n = (0, e.getCallBridge)(),
    r = (l) => {
      if (!l || !l.user)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(l).some((o) => typeof o == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (l) => (r(l), n("initFeatureFlags", { user: l.user }));
  return (
    (be.initFeatureFlags = (0, s.withRateLimiter)(
      c,
      i,
      a,
      `Feature flags initialisation calls are rate limited at ${i}req/${a / 1e3}s`,
    )),
    be
  );
}
var vr;
function li() {
  if (vr) return ye;
  ((vr = 1),
    Object.defineProperty(ye, "__esModule", { value: !0 }),
    (ye.ForgeDataAdapter = void 0));
  const e = ui();
  class t {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(i, a, n) {
      var r;
      if (i) return i;
      this.environment = ((r = this.options) === null || r === void 0 ? void 0 : r.environment) || {
        tier: "development",
      };
      const c = { ...a, statsigEnvironment: this.environment },
        l = await (0, e.initFeatureFlags)({ user: c }),
        o = {
          source: "Network",
          data: JSON.stringify(l),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = o), o);
    }
    getDataSync(i) {
      return this.cache;
    }
    async attach(i, a, n) {
      this.options = a;
    }
    async prefetchData() {}
    async setData(i) {}
    async setDataLegacy(i) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((ye.ForgeDataAdapter = t), ye);
}
var et = {},
  gr;
function sn() {
  return (
    gr ||
      ((gr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = e.ExtensionEnvironment = void 0),
          (function (s) {
            ((s.DEVELOPMENT = "DEVELOPMENT"),
              (s.STAGING = "STAGING"),
              (s.PRODUCTION = "PRODUCTION"));
          })(e.ExtensionEnvironment || (e.ExtensionEnvironment = {})));
        var t;
        ((function (s) {
          s.USER_ACCESS = "USER_ACCESS";
        })(t || (t = {})),
          (function (s) {
            s.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(et)),
    et
  );
}
var me = {},
  pr;
function ci() {
  if (pr) return me;
  ((pr = 1),
    Object.defineProperty(me, "__esModule", { value: !0 }),
    (me.trackFeatureFlagEvent = void 0));
  const e = b(),
    t = m(),
    s = sn(),
    i = Ce(),
    a = 500,
    n = 1e3 * 25,
    r = (0, e.getCallBridge)(),
    c = (o) => {
      if (!o || !o.type || !o.properties)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(o.type.toUpperCase() in s.FeatureFlagEventType))
        throw new t.BridgeAPIError("Event type is not supported");
      if (Object.values(o).some((u) => typeof u == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    l = (o) => (c(o), r("trackFeatureFlagEvent", o));
  return (
    (me.trackFeatureFlagEvent = (0, i.withRateLimiter)(
      l,
      a,
      n,
      `Feature flags calls are rate limited at ${a}req/${n / 1e3}s`,
    )),
    me
  );
}
var yr;
function di() {
  if (yr) return ve;
  ((yr = 1),
    Object.defineProperty(ve, "__esModule", { value: !0 }),
    (ve.ForgeFeatureFlags = void 0));
  const e = si(),
    t = li(),
    s = sn(),
    i = ci();
  class a {
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
      const o = {
        environment: { tier: c.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (l = o.environment) === null || l === void 0 ? void 0 : l.tier),
        (this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(r), o)),
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
        type: s.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: r,
          success: c,
        },
      };
      (0, i.trackFeatureFlagEvent)(l);
    }
  }
  return ((ve.ForgeFeatureFlags = a), ve);
}
var br;
function fi() {
  return (
    br ||
      ((br = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = di();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })($e)),
    $e
  );
}
var mr;
function _i() {
  return (
    mr ||
      ((mr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = P;
        var s = pn();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return s.NavigationTarget;
          },
        }),
          t.__exportStar(Ee(), e),
          t.__exportStar(wn(), e),
          t.__exportStar(ot(), e),
          t.__exportStar(Ln(), e),
          t.__exportStar(Nn(), e),
          t.__exportStar(xn(), e),
          t.__exportStar(Vn(), e),
          t.__exportStar(Kn(), e),
          t.__exportStar(Wn(), e),
          (e.i18n = t.__importStar(Xn())),
          t.__exportStar(ti(), e),
          t.__exportStar(fi(), e));
      })(Te)),
    Te
  );
}
var Ie = _i();
async function we(e, t, s) {
  await Ie.showFlag({
    id: `checklist-${Date.now()}`,
    title: e,
    type: s,
    description: t,
    isAutoDismiss: !0,
  });
}
function hi(e) {
  return new Date(e).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
  });
}
function wr() {
  return w.jsx("div", {
    className: "loading-overlay",
    children: w.jsx("div", { className: "loading-spinner" }),
  });
}
function vi() {
  const [e, t] = Oe.useState({
      checkList: "[]",
      issueId: "",
      updatedAt: new Date(),
      updateDisplayName: "",
      updateId: "",
    }),
    [s, i] = Oe.useState(!0),
    [a, n] = Oe.useState(!1);
  Oe.useEffect(() => {
    r();
  }, []);
  const r = async () => {
      try {
        const o = await Ie.invoke("getCheckList");
        t(o);
      } catch {
        await we(
          "Checklist Loading Error",
          "Unable to load the checklist. Please try again later.",
          "error",
        );
      } finally {
        i(!1);
      }
    },
    c = async (o) => {
      try {
        n(!0);
        const u = await Ie.invoke(o ? "updateWithOptimisticLocking" : "update", e);
        u.error
          ? u.concurrent
            ? (await we(
                "Concurrent Modification Detected",
                `User ${u.data?.updateDisplayName} has modified the checklist before you. Your changes could not be saved.`,
                "error",
              ),
              await r())
            : await we(
                "Update Failed",
                u.message || "Unable to update the checklist. Please try again later.",
                "error",
              )
          : u.data &&
            (t(u.data),
            await we(
              "Update Successful",
              "The checklist has been successfully updated",
              "success",
            ));
      } catch {
        await we(
          "Update Error",
          "An error occurred while updating the checklist. Please try again later.",
          "error",
        );
      } finally {
        n(!1);
      }
    },
    l = (o) => {
      const u = [...JSON.parse(e.checkList)];
      ((u[o] = { ...u[o], done: !u[o].done }), t({ ...e, checkList: JSON.stringify(u) }));
    };
  return s
    ? w.jsx("div", { className: "checklist-container", children: w.jsx(wr, {}) })
    : w.jsxs("div", {
        className: "checklist-container",
        children: [
          a && w.jsx(wr, {}),
          w.jsxs("div", {
            className: "checklist-header",
            children: [
              w.jsx("h2", { children: "Issue Checklist" }),
              w.jsxs("div", {
                className: "last-update",
                children: ["Last updated by ", e.updateDisplayName, " on ", hi(e.updatedAt)],
              }),
            ],
          }),
          w.jsx("div", {
            className: "checklist",
            children: JSON.parse(e.checkList).map((o, u) =>
              w.jsxs(
                "div",
                {
                  className: "checklist-item",
                  children: [
                    w.jsx("input", { type: "checkbox", checked: o.done, onChange: () => l(u) }),
                    w.jsx("span", { children: o.label }),
                  ],
                },
                u,
              ),
            ),
          }),
          w.jsxs("div", {
            className: "buttons",
            children: [
              w.jsx("button", { onClick: () => c(!0), children: "Update with Locking" }),
              w.jsx("button", { onClick: () => c(!1), children: "Update without Locking" }),
            ],
          }),
        ],
      });
}
const gi = document.getElementById("root"),
  pi = un.createRoot(gi),
  Er = () => {
    pi.render(w.jsx(vi, {}));
  };
Ie.view.theme
  .enable()
  .then(() => {
    Er();
  })
  .catch((e) => {
    (console.error(e.message), Er());
  });
