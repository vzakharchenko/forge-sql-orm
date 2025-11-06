import { r as rr, c as zr } from "./react-dom-vendor-u1YXTQK9.js";
import { g as Gr, r as F } from "./client-core-vendor-BYfXJVhY.js";
import { r as Vr } from "./lodash-vendor-BbpxWQUq.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const n of s)
      if (n.type === "childList")
        for (const r of n.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(s) {
    const n = {};
    return (
      s.integrity && (n.integrity = s.integrity),
      s.referrerPolicy && (n.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (n.credentials = "omit")
          : (n.credentials = "same-origin"),
      n
    );
  }
  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const n = o(s);
    fetch(s.href, n);
  }
})();
var Ee = { exports: {} },
  L = {};
var He;
function Kr() {
  if (He) return L;
  He = 1;
  var e = rr(),
    t = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    i = Object.prototype.hasOwnProperty,
    s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(c, u, a) {
    var l,
      d = {},
      f = null,
      _ = null;
    (a !== void 0 && (f = "" + a),
      u.key !== void 0 && (f = "" + u.key),
      u.ref !== void 0 && (_ = u.ref));
    for (l in u) i.call(u, l) && !n.hasOwnProperty(l) && (d[l] = u[l]);
    if (c && c.defaultProps) for (l in ((u = c.defaultProps), u)) d[l] === void 0 && (d[l] = u[l]);
    return { $$typeof: t, type: c, key: f, ref: _, props: d, _owner: s.current };
  }
  return ((L.Fragment = o), (L.jsx = r), (L.jsxs = r), L);
}
var Je;
function Hr() {
  return (Je || ((Je = 1), (Ee.exports = Kr())), Ee.exports);
}
var p = Hr(),
  S = rr(),
  Oe = {},
  $e = function (e, t) {
    return (
      ($e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (o, i) {
            o.__proto__ = i;
          }) ||
        function (o, i) {
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (o[s] = i[s]);
        }),
      $e(e, t)
    );
  };
function nr(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  $e(e, t);
  function o() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((o.prototype = t.prototype), new o());
}
var pe = function () {
  return (
    (pe =
      Object.assign ||
      function (t) {
        for (var o, i = 1, s = arguments.length; i < s; i++) {
          o = arguments[i];
          for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
        }
        return t;
      }),
    pe.apply(this, arguments)
  );
};
function ir(e, t) {
  var o = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (o[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++)
      t.indexOf(i[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
        (o[i[s]] = e[i[s]]);
  return o;
}
function sr(e, t, o, i) {
  var s = arguments.length,
    n = s < 3 ? t : i === null ? (i = Object.getOwnPropertyDescriptor(t, o)) : i,
    r;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, o, i);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (r = e[c]) && (n = (s < 3 ? r(n) : s > 3 ? r(t, o, n) : r(t, o)) || n);
  return (s > 3 && n && Object.defineProperty(t, o, n), n);
}
function ar(e, t) {
  return function (o, i) {
    t(o, i, e);
  };
}
function or(e, t, o, i, s, n) {
  function r(y) {
    if (y !== void 0 && typeof y != "function") throw new TypeError("Function expected");
    return y;
  }
  for (
    var c = i.kind,
      u = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      a = !t && e ? (i.static ? e : e.prototype) : null,
      l = t || (a ? Object.getOwnPropertyDescriptor(a, i.name) : {}),
      d,
      f = !1,
      _ = o.length - 1;
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
    var g = (0, o[_])(c === "accessor" ? { get: l.get, set: l.set } : l[u], h);
    if (c === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = r(g.get)) && (l.get = d),
        (d = r(g.set)) && (l.set = d),
        (d = r(g.init)) && s.unshift(d));
    } else (d = r(g)) && (c === "field" ? s.unshift(d) : (l[u] = d));
  }
  (a && Object.defineProperty(a, i.name, l), (f = !0));
}
function ur(e, t, o) {
  for (var i = arguments.length > 2, s = 0; s < t.length; s++)
    o = i ? t[s].call(e, o) : t[s].call(e);
  return i ? o : void 0;
}
function lr(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function cr(e, t, o) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: o ? "".concat(o, " ", t) : t })
  );
}
function dr(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function fr(e, t, o, i) {
  function s(n) {
    return n instanceof o
      ? n
      : new o(function (r) {
          r(n);
        });
  }
  return new (o || (o = Promise))(function (n, r) {
    function c(l) {
      try {
        a(i.next(l));
      } catch (d) {
        r(d);
      }
    }
    function u(l) {
      try {
        a(i.throw(l));
      } catch (d) {
        r(d);
      }
    }
    function a(l) {
      l.done ? n(l.value) : s(l.value).then(c, u);
    }
    a((i = i.apply(e, t || [])).next());
  });
}
function _r(e, t) {
  var o = {
      label: 0,
      sent: function () {
        if (n[0] & 1) throw n[1];
        return n[1];
      },
      trys: [],
      ops: [],
    },
    i,
    s,
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
  function c(a) {
    return function (l) {
      return u([a, l]);
    };
  }
  function u(a) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; r && ((r = 0), a[0] && (o = 0)), o; )
      try {
        if (
          ((i = 1),
          s &&
            (n =
              a[0] & 2 ? s.return : a[0] ? s.throw || ((n = s.return) && n.call(s), 0) : s.next) &&
            !(n = n.call(s, a[1])).done)
        )
          return n;
        switch (((s = 0), n && (a = [a[0] & 2, n.value]), a[0])) {
          case 0:
          case 1:
            n = a;
            break;
          case 4:
            return (o.label++, { value: a[1], done: !1 });
          case 5:
            (o.label++, (s = a[1]), (a = [0]));
            continue;
          case 7:
            ((a = o.ops.pop()), o.trys.pop());
            continue;
          default:
            if (
              ((n = o.trys), !(n = n.length > 0 && n[n.length - 1]) && (a[0] === 6 || a[0] === 2))
            ) {
              o = 0;
              continue;
            }
            if (a[0] === 3 && (!n || (a[1] > n[0] && a[1] < n[3]))) {
              o.label = a[1];
              break;
            }
            if (a[0] === 6 && o.label < n[1]) {
              ((o.label = n[1]), (n = a));
              break;
            }
            if (n && o.label < n[2]) {
              ((o.label = n[2]), o.ops.push(a));
              break;
            }
            (n[2] && o.ops.pop(), o.trys.pop());
            continue;
        }
        a = t.call(e, o);
      } catch (l) {
        ((a = [6, l]), (s = 0));
      } finally {
        i = n = 0;
      }
    if (a[0] & 5) throw a[1];
    return { value: a[0] ? a[1] : void 0, done: !0 };
  }
}
var be = Object.create
  ? function (e, t, o, i) {
      i === void 0 && (i = o);
      var s = Object.getOwnPropertyDescriptor(t, o);
      ((!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) &&
        (s = {
          enumerable: !0,
          get: function () {
            return t[o];
          },
        }),
        Object.defineProperty(e, i, s));
    }
  : function (e, t, o, i) {
      (i === void 0 && (i = o), (e[i] = t[o]));
    };
function hr(e, t) {
  for (var o in e) o !== "default" && !Object.prototype.hasOwnProperty.call(t, o) && be(t, e, o);
}
function ye(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    o = t && e[t],
    i = 0;
  if (o) return o.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e });
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ve(e, t) {
  var o = typeof Symbol == "function" && e[Symbol.iterator];
  if (!o) return e;
  var i = o.call(e),
    s,
    n = [],
    r;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = i.next()).done; ) n.push(s.value);
  } catch (c) {
    r = { error: c };
  } finally {
    try {
      s && !s.done && (o = i.return) && o.call(i);
    } finally {
      if (r) throw r.error;
    }
  }
  return n;
}
function vr() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Ve(arguments[t]));
  return e;
}
function gr() {
  for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
  for (var i = Array(e), s = 0, t = 0; t < o; t++)
    for (var n = arguments[t], r = 0, c = n.length; r < c; r++, s++) i[s] = n[r];
  return i;
}
function pr(e, t, o) {
  if (o || arguments.length === 2)
    for (var i = 0, s = t.length, n; i < s; i++)
      (n || !(i in t)) && (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
  return e.concat(n || Array.prototype.slice.call(t));
}
function k(e) {
  return this instanceof k ? ((this.v = e), this) : new k(e);
}
function yr(e, t, o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = o.apply(e, t || []),
    s,
    n = [];
  return (
    (s = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    c("next"),
    c("throw"),
    c("return", r),
    (s[Symbol.asyncIterator] = function () {
      return this;
    }),
    s
  );
  function r(_) {
    return function (h) {
      return Promise.resolve(h).then(_, d);
    };
  }
  function c(_, h) {
    i[_] &&
      ((s[_] = function (v) {
        return new Promise(function (g, y) {
          n.push([_, v, g, y]) > 1 || u(_, v);
        });
      }),
      h && (s[_] = h(s[_])));
  }
  function u(_, h) {
    try {
      a(i[_](h));
    } catch (v) {
      f(n[0][3], v);
    }
  }
  function a(_) {
    _.value instanceof k ? Promise.resolve(_.value.v).then(l, d) : f(n[0][2], _);
  }
  function l(_) {
    u("next", _);
  }
  function d(_) {
    u("throw", _);
  }
  function f(_, h) {
    (_(h), n.shift(), n.length && u(n[0][0], n[0][1]));
  }
}
function br(e) {
  var t, o;
  return (
    (t = {}),
    i("next"),
    i("throw", function (s) {
      throw s;
    }),
    i("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function i(s, n) {
    t[s] = e[s]
      ? function (r) {
          return (o = !o) ? { value: k(e[s](r)), done: !1 } : n ? n(r) : r;
        }
      : n;
  }
}
function mr(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    o;
  return t
    ? t.call(e)
    : ((e = typeof ye == "function" ? ye(e) : e[Symbol.iterator]()),
      (o = {}),
      i("next"),
      i("throw"),
      i("return"),
      (o[Symbol.asyncIterator] = function () {
        return this;
      }),
      o);
  function i(n) {
    o[n] =
      e[n] &&
      function (r) {
        return new Promise(function (c, u) {
          ((r = e[n](r)), s(c, u, r.done, r.value));
        });
      };
  }
  function s(n, r, c, u) {
    Promise.resolve(u).then(function (a) {
      n({ value: a, done: c });
    }, r);
  }
}
function wr(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var Jr = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  ze = function (e) {
    return (
      (ze =
        Object.getOwnPropertyNames ||
        function (t) {
          var o = [];
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (o[o.length] = i);
          return o;
        }),
      ze(e)
    );
  };
function Er(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var o = ze(e), i = 0; i < o.length; i++) o[i] !== "default" && be(t, e, o[i]);
  return (Jr(t, e), t);
}
function Or(e) {
  return e && e.__esModule ? e : { default: e };
}
function Sr(e, t, o, i) {
  if (o === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? i : o === "a" ? i.call(e) : i ? i.value : t.get(e);
}
function Pr(e, t, o, i, s) {
  if (i === "m") throw new TypeError("Private method is not writable");
  if (i === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !s : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (i === "a" ? s.call(e, o) : s ? (s.value = o) : t.set(e, o), o);
}
function Rr(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Ir(e, t, o) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var i, s;
    if (o) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      i = t[Symbol.asyncDispose];
    }
    if (i === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((i = t[Symbol.dispose]), o && (s = i));
    }
    if (typeof i != "function") throw new TypeError("Object not disposable.");
    (s &&
      (i = function () {
        try {
          s.call(this);
        } catch (n) {
          return Promise.reject(n);
        }
      }),
      e.stack.push({ value: t, dispose: i, async: o }));
  } else o && e.stack.push({ async: !0 });
  return t;
}
var Wr =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, o) {
        var i = new Error(o);
        return ((i.name = "SuppressedError"), (i.error = e), (i.suppressed = t), i);
      };
function jr(e) {
  function t(n) {
    ((e.error = e.hasError ? new Wr(n, e.error, "An error was suppressed during disposal.") : n),
      (e.hasError = !0));
  }
  var o,
    i = 0;
  function s() {
    for (; (o = e.stack.pop()); )
      try {
        if (!o.async && i === 1) return ((i = 0), e.stack.push(o), Promise.resolve().then(s));
        if (o.dispose) {
          var n = o.dispose.call(o.value);
          if (o.async)
            return (
              (i |= 2),
              Promise.resolve(n).then(s, function (r) {
                return (t(r), s());
              })
            );
        } else i |= 1;
      } catch (r) {
        t(r);
      }
    if (i === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return s();
}
function Cr(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (o, i, s, n, r) {
        return i
          ? t
            ? ".jsx"
            : ".js"
          : s && (!n || !r)
            ? o
            : s + n + "." + r.toLowerCase() + "js";
      })
    : e;
}
const Xr = {
    __extends: nr,
    __assign: pe,
    __rest: ir,
    __decorate: sr,
    __param: ar,
    __esDecorate: or,
    __runInitializers: ur,
    __propKey: lr,
    __setFunctionName: cr,
    __metadata: dr,
    __awaiter: fr,
    __generator: _r,
    __createBinding: be,
    __exportStar: hr,
    __values: ye,
    __read: Ve,
    __spread: vr,
    __spreadArrays: gr,
    __spreadArray: pr,
    __await: k,
    __asyncGenerator: yr,
    __asyncDelegator: br,
    __asyncValues: mr,
    __makeTemplateObject: wr,
    __importStar: Er,
    __importDefault: Or,
    __classPrivateFieldGet: Sr,
    __classPrivateFieldSet: Pr,
    __classPrivateFieldIn: Rr,
    __addDisposableResource: Ir,
    __disposeResources: jr,
    __rewriteRelativeImportExtension: Cr,
  },
  Yr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Ir,
        get __assign() {
          return pe;
        },
        __asyncDelegator: br,
        __asyncGenerator: yr,
        __asyncValues: mr,
        __await: k,
        __awaiter: fr,
        __classPrivateFieldGet: Sr,
        __classPrivateFieldIn: Rr,
        __classPrivateFieldSet: Pr,
        __createBinding: be,
        __decorate: sr,
        __disposeResources: jr,
        __esDecorate: or,
        __exportStar: hr,
        __extends: nr,
        __generator: _r,
        __importDefault: Or,
        __importStar: Er,
        __makeTemplateObject: wr,
        __metadata: dr,
        __param: ar,
        __propKey: lr,
        __read: Ve,
        __rest: ir,
        __rewriteRelativeImportExtension: Cr,
        __runInitializers: ur,
        __setFunctionName: cr,
        __spread: vr,
        __spreadArray: pr,
        __spreadArrays: gr,
        __values: ye,
        default: Xr,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  j = Gr(Yr);
var U = {},
  We;
function Zr() {
  return (
    We ||
      ((We = 1),
      Object.defineProperty(U, "__esModule", { value: !0 }),
      (U.NavigationTarget = void 0),
      (U.NavigationTarget = {
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
    U
  );
}
var Se = {},
  Pe = {},
  N = {},
  x = {},
  Xe;
function O() {
  if (Xe) return x;
  ((Xe = 1), Object.defineProperty(x, "__esModule", { value: !0 }), (x.BridgeAPIError = void 0));
  class e extends Error {}
  return ((x.BridgeAPIError = e), x);
}
var Ye;
function w() {
  if (Ye) return N;
  ((Ye = 1), Object.defineProperty(N, "__esModule", { value: !0 }), (N.getCallBridge = void 0));
  const e = O();
  function t(i) {
    return !!i?.callBridge;
  }
  const o = () => {
    if (!t(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((N.getCallBridge = o), N);
}
var $ = {},
  Ze;
function me() {
  if (Ze) return $;
  ((Ze = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.withRateLimiter = void 0));
  const e = O(),
    t = (o, i, s, n) => {
      let r = Date.now(),
        c = 0;
      return async (...u) => {
        const a = Date.now();
        if ((a - r > s && ((r = a), (c = 0)), c >= i))
          throw new e.BridgeAPIError(n || "Too many invocations.");
        return ((c = c + 1), o(...u));
      };
    };
  return (($.withRateLimiter = t), $);
}
var Qe;
function Qr() {
  return (
    Qe ||
      ((Qe = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = w(),
          o = O(),
          i = me(),
          s = (0, t.getCallBridge)(),
          n = (u) => {
            if (u && Object.values(u).some((a) => typeof a == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          r = (u, a) => {
            if (typeof u != "string") throw new o.BridgeAPIError("functionKey must be a string!");
            return (n(a), s("invoke", { functionKey: u, payload: a }));
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
      })(Pe)),
    Pe
  );
}
var et;
function en() {
  return (
    et ||
      ((et = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(Qr(), e));
      })(Se)),
    Se
  );
}
var Re = {},
  z = {},
  Ie = {},
  tt;
function Fr() {
  return (
    tt ||
      ((tt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = w(),
          o = O(),
          i = me(),
          s = 500,
          n = 25,
          r = 1e3 * n;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, t.getCallBridge)(),
          u = (d) => {
            if (d && Object.values(d).some((f) => typeof f == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          a = (d) => async (f) => {
            u(f);
            const _ = { ...f, invokeType: `ui-${d.toLowerCase()}-fetch` },
              h = await c("invoke", _),
              { success: v, payload: g, error: y } = h ?? {},
              m = { ...(v ? g : y) };
            if (m && m.headers)
              for (const C in m.headers)
                Array.isArray(m.headers[C]) && (m.headers[C] = m.headers[C].join(","));
            return m;
          },
          l = (d) => {
            const f = a(d);
            return (0, i.withRateLimiter)(
              f,
              s,
              r,
              `${d} invocation calls are rate limited at ${s}/${n}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(Ie)),
    Ie
  );
}
var rt;
function tn() {
  if (rt) return z;
  ((rt = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.invokeRemote = void 0));
  const e = Fr(),
    t = (o) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(o);
  return ((z.invokeRemote = t), z);
}
var G = {},
  nt;
function rn() {
  if (nt) return G;
  ((nt = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.invokeService = void 0));
  const e = Fr(),
    t = (o) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(o);
  return ((G.invokeService = t), G);
}
var it;
function nn() {
  return (
    it ||
      ((it = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = j;
        (t.__exportStar(tn(), e), t.__exportStar(rn(), e));
      })(Re)),
    Re
  );
}
var je = {},
  V = {},
  K = {},
  st;
function sn() {
  if (st) return K;
  ((st = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.submit = void 0));
  const e = w(),
    t = O(),
    o = (0, e.getCallBridge)(),
    i = async (s) => {
      if ((await o("submit", s)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((K.submit = i), K);
}
var H = {},
  at;
function an() {
  if (at) return H;
  ((at = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.close = void 0));
  const e = w(),
    t = O(),
    o = (0, e.getCallBridge)(),
    i = async (s) => {
      try {
        if ((await o("close", s)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((H.close = i), H);
}
var J = {},
  ot;
function on() {
  if (ot) return J;
  ((ot = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.open = void 0));
  const e = w(),
    t = O(),
    o = (0, e.getCallBridge)(),
    i = async () => {
      try {
        if ((await o("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((J.open = i), J);
}
var W = {},
  ut;
function un() {
  if (ut) return W;
  ((ut = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.refresh = void 0));
  const e = w(),
    t = O(),
    o = (0, e.getCallBridge)(),
    i = async (s) => {
      if ((await o("refresh", s)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((W.refresh = i), W);
}
var X = {},
  lt;
function ln() {
  if (lt) return X;
  ((lt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.createHistory = void 0));
  const t = (0, w().getCallBridge)(),
    o = async () => {
      const i = await t("createHistory");
      return (
        i.listen((s) => {
          i.location = s;
        }),
        i
      );
    };
  return ((X.createHistory = o), X);
}
var Y = {},
  Ce = {},
  P = {},
  ct;
function Ar() {
  return (
    ct ||
      ((ct = 1),
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
var A = {},
  dt;
function cn() {
  if (dt) return A;
  ((dt = 1),
    Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.TranslationsGetter = A.TranslationGetterError = void 0));
  const e = (i, s) => {
    i.includes(s) || i.push(s);
  };
  class t extends Error {
    constructor(s) {
      (super(s), (this.name = "TranslationGetterError"));
    }
  }
  A.TranslationGetterError = t;
  class o {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(s) {
      this.resourcesAccessor = s;
    }
    async getTranslations(s, n = { fallback: !0 }) {
      const r = await this.getI18nInfoConfig(),
        { fallback: c } = n;
      if (!c) {
        let u;
        return (
          r.locales.includes(s) && (u = await this.getTranslationResource(s)),
          { translations: u ?? null, locale: s }
        );
      }
      for (const u of this.getLocaleLookupOrder(s, r)) {
        const a = await this.getTranslationResource(u);
        if (a) return { translations: a, locale: u };
      }
      return { translations: null, locale: s };
    }
    async getTranslationsByLocaleLookupOrder(s) {
      const n = await this.getI18nInfoConfig(),
        r = this.getLocaleLookupOrder(s, n);
      return await Promise.all(
        r.map(async (c) => {
          const u = await this.getTranslationResource(c);
          return { locale: c, translations: u };
        }),
      );
    }
    reset() {
      ((this.i18nInfoConfig = null), this.translationResources.clear());
    }
    async getTranslationResource(s) {
      let n = this.translationResources.get(s);
      if (!n)
        try {
          ((n = await this.resourcesAccessor.getTranslationResource(s)),
            this.translationResources.set(s, n));
        } catch (r) {
          throw r instanceof t ? r : new t(`Failed to get translation resource for locale: ${s}`);
        }
      return n;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (s) {
          throw s instanceof t ? s : new t("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(s, n) {
      const { locales: r, fallback: c } = n,
        u = [s],
        a = c[s];
      return (
        a && Array.isArray(a) && a.length > 0 && u.push(...a),
        e(u, n.fallback.default),
        u.filter((l) => r.includes(l))
      );
    }
  }
  return ((A.TranslationsGetter = o), A);
}
var Z = {},
  Fe = {},
  ft;
function Dr() {
  return (
    ft ||
      ((ft = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const o = j.__importDefault(Vr()),
          i = (n, r, c) => {
            const u = n[c];
            return u ? (0, e.getTranslationValueFromContent)(u, r) : null;
          };
        e.getTranslationValue = i;
        const s = (n, r) => {
          let c = n[r];
          if (!c) {
            const u = r.split(".");
            u.length > 1 && (c = (0, o.default)(n, u, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = s;
      })(Fe)),
    Fe
  );
}
var _t;
function dn() {
  if (_t) return Z;
  ((_t = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.Translator = void 0));
  const e = Dr();
  class t {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(i, s) {
      ((this.locale = i), (this.translationsGetter = s));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(i) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let s = this.cache.get(i);
      if (s === void 0) {
        for (const { translations: n } of this.localeLookupOrderedTranslations) {
          const r = (0, e.getTranslationValueFromContent)(n, i);
          if (r !== null) {
            s = r;
            break;
          }
        }
        ((s = s ?? null), this.cache.set(i, s));
      }
      return s;
    }
  }
  return ((Z.Translator = t), Z);
}
var Q = {},
  ht;
function fn() {
  if (ht) return Q;
  ((ht = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.ensureLocale = void 0));
  const e = Ar(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    o = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    i = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (n, r) => {
        const [c] = r.split("-");
        return (n[c] || (n[c] = r), n);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    s = (n) => {
      const r = n.replace("_", "-");
      return t.has(r) ? r : (i[r] ?? o[r] ?? null);
    };
  return ((Q.ensureLocale = s), Q);
}
var Ae = {},
  vt;
function _n() {
  return (
    vt ||
      ((vt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (a) => typeof a == "object" && a !== null && !Array.isArray(a),
          o = (a) => typeof a?.i18n == "string",
          i = (a) => a.startsWith("connect-"),
          s = (a) => a.startsWith("core:"),
          n = (a) => {
            const l = new Set(),
              d = (f, _) =>
                !t(f) || l.has(f)
                  ? []
                  : (l.add(f),
                    Object.entries(f).flatMap(([h, v]) => {
                      const g = [..._, h];
                      return o(v)
                        ? [{ propertyPath: g, key: v.i18n }]
                        : Array.isArray(v)
                          ? v.flatMap((y) => d(y, g))
                          : d(v, g);
                    }));
            return d(a, []);
          },
          r = (a) =>
            Object.entries(a).flatMap(([l, d]) =>
              !i(l) && !s(l) && d && Array.isArray(d) && d.length > 0 ? d.map((f) => [f, l]) : [],
            );
        e.getI18nSupportedModuleEntries = r;
        const c = (a) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(a)) {
            const f = n(d[0]);
            for (const { key: _ } of f) l.add(_);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = c;
        const u = (a) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(a)) {
            const f = n(d[0]);
            for (const _ of f) l.push({ moduleName: d[1], ..._ });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = u;
      })(Ae)),
    Ae
  );
}
var De = {},
  gt;
function hn() {
  return (gt || ((gt = 1), Object.defineProperty(De, "__esModule", { value: !0 })), De);
}
var pt;
function Tr() {
  return (
    pt ||
      ((pt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = j;
        (t.__exportStar(Ar(), e),
          t.__exportStar(cn(), e),
          t.__exportStar(dn(), e),
          t.__exportStar(fn(), e));
        var o = Dr();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return o.getTranslationValue;
          },
        });
        var i = _n();
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
          t.__exportStar(hn(), e));
      })(Ce)),
    Ce
  );
}
var yt;
function vn() {
  if (yt) return Y;
  ((yt = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.getContext = void 0));
  const e = w(),
    t = Tr(),
    o = (0, e.getCallBridge)(),
    i = async () => {
      var s;
      const n = await o("getContext"),
        r = n?.locale;
      return (r && (n.locale = (s = (0, t.ensureLocale)(r)) !== null && s !== void 0 ? s : r), n);
    };
  return ((Y.getContext = i), Y);
}
var ee = {},
  bt;
function gn() {
  if (bt) return ee;
  ((bt = 1),
    Object.defineProperty(ee, "__esModule", { value: !0 }),
    (ee.changeWindowTitle = void 0));
  const e = w(),
    t = O(),
    o = (0, e.getCallBridge)(),
    i = async (s) => {
      try {
        await o("changeWindowTitle", s);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((ee.changeWindowTitle = i), ee);
}
var te = {},
  mt;
function pn() {
  if (mt) return te;
  ((mt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.theme = void 0));
  const t = (0, w().getCallBridge)();
  return ((te.theme = { enable: () => t("enableTheming") }), te);
}
var re = {},
  ne = {},
  Te = {},
  D = {},
  wt;
function qr() {
  if (wt) return D;
  ((wt = 1),
    Object.defineProperty(D, "__esModule", { value: !0 }),
    (D.blobToBase64 = D.base64ToBlob = void 0));
  const e = (o, i) => {
    if (!o) return null;
    const s = o.includes(";base64") ? o.split(",")[1] : o,
      n = atob(s),
      r = new Array(n.length);
    for (let u = 0; u < n.length; u++) r[u] = n.charCodeAt(u);
    const c = new Uint8Array(r);
    return new Blob([c], { type: i });
  };
  D.base64ToBlob = e;
  const t = (o) =>
    new Promise((i, s) => {
      const n = new FileReader();
      ((n.onloadend = () => {
        i(n.result);
      }),
        (n.onerror = s),
        n.readAsDataURL(o));
    });
  return ((D.blobToBase64 = t), D);
}
var Et;
function yn() {
  return (
    Et ||
      ((Et = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = qr(),
          o = (a) => {
            if (
              typeof a != "object" ||
              a === null ||
              Object.prototype.toString.call(a) !== "[object Object]"
            )
              return !1;
            const l = Object.getPrototypeOf(a);
            if (l === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(l, "constructor") && l.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(a)
            );
          },
          i = async (a) => ({ data: await (0, t.blobToBase64)(a), type: a.type }),
          s = (a) => (0, t.base64ToBlob)(a.data, a.type),
          n = async (a) => {
            if (a instanceof Blob) return { ...(await i(a)), __isBlobData: !0 };
            if (Array.isArray(a))
              return Promise.all(a.map((l) => (0, e.serialiseBlobsInPayload)(l)));
            if (a && o(a)) {
              const l = await Promise.all(
                Object.entries(a).map(async ([d, f]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(f),
                ]),
              );
              return Object.fromEntries(l);
            }
            return a;
          };
        e.serialiseBlobsInPayload = n;
        const r = (a) => {
          if (a && o(a) && "__isBlobData" in a) {
            const l = a;
            return s({ data: l.data, type: l.type });
          }
          if (Array.isArray(a)) return a.map((l) => (0, e.deserialiseBlobsInPayload)(l));
          if (a && o(a)) {
            const l = {};
            for (const [d, f] of Object.entries(a)) l[d] = (0, e.deserialiseBlobsInPayload)(f);
            return l;
          }
          return a;
        };
        e.deserialiseBlobsInPayload = r;
        const c = (a) =>
          a instanceof Blob
            ? !0
            : Array.isArray(a)
              ? a.some((l) => (0, e.containsBlobs)(l))
              : a && o(a)
                ? Object.values(a).some((l) => (0, e.containsBlobs)(l))
                : !1;
        e.containsBlobs = c;
        const u = (a) =>
          a && o(a) && "__isBlobData" in a
            ? !0
            : Array.isArray(a)
              ? a.some((l) => (0, e.containsSerialisedBlobs)(l))
              : a && o(a)
                ? Object.values(a).some((l) => (0, e.containsSerialisedBlobs)(l))
                : !1;
        e.containsSerialisedBlobs = u;
      })(Te)),
    Te
  );
}
var Ot;
function Br() {
  if (Ot) return ne;
  ((Ot = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.events = void 0));
  const e = w(),
    t = yn(),
    o = (0, e.getCallBridge)(),
    i = async (n, r) => {
      let c = r;
      return (
        (0, t.containsBlobs)(r) && (c = await (0, t.serialiseBlobsInPayload)(r)),
        o("emit", { event: n, payload: c })
      );
    },
    s = (n, r) =>
      o("on", {
        event: n,
        callback: (u) => {
          let a = u;
          return (
            (0, t.containsSerialisedBlobs)(u) && (a = (0, t.deserialiseBlobsInPayload)(u)),
            r(a)
          );
        },
      });
  return ((ne.events = { emit: i, on: s }), ne);
}
var St;
function bn() {
  if (St) return re;
  ((St = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.emitReadyEvent = void 0));
  const e = Br(),
    t = Mr(),
    o = "EXTENSION_READY",
    i = async () => {
      const s = await t.view.getContext();
      await e.events.emit(o, { localId: s.localId });
    };
  return ((re.emitReadyEvent = i), re);
}
var Pt;
function Mr() {
  if (Pt) return V;
  ((Pt = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.view = void 0));
  const e = sn(),
    t = an(),
    o = on(),
    i = un(),
    s = ln(),
    n = vn(),
    r = gn(),
    c = pn(),
    u = bn();
  return (
    (V.view = {
      submit: e.submit,
      close: t.close,
      open: o.open,
      refresh: i.refresh,
      createHistory: s.createHistory,
      getContext: n.getContext,
      theme: c.theme,
      changeWindowTitle: r.changeWindowTitle,
      emitReadyEvent: u.emitReadyEvent,
    }),
    V
  );
}
var Rt;
function kr() {
  return (
    Rt ||
      ((Rt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(Mr(), e));
      })(je)),
    je
  );
}
var qe = {},
  ie = {},
  It;
function mn() {
  if (It) return ie;
  ((It = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.router = void 0));
  const t = (0, w().getCallBridge)(),
    o = async (r) => {
      if (!r?.target) throw new Error("target is required for getUrl");
      const c = await t("getUrl", r);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (u) {
        throw new Error(`Failed to parse URL: ${c} (${u})`);
      }
    },
    i = (r) => {
      if (typeof r == "string") return t("navigate", { url: r, type: "same-tab" });
      if (!r?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...r, type: "same-tab" });
    },
    s = (r) => {
      if (typeof r == "string") return t("navigate", { url: r, type: "new-tab" });
      if (!r?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...r, type: "new-tab" });
    },
    n = async () => t("reload");
  return ((ie.router = { getUrl: o, navigate: i, open: s, reload: n }), ie);
}
var jt;
function wn() {
  return (
    jt ||
      ((jt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(mn(), e));
      })(qe)),
    qe
  );
}
var Be = {},
  se = {},
  Ct;
function En() {
  if (Ct) return se;
  ((Ct = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.Modal = void 0));
  const e = w(),
    t = O(),
    o = (0, e.getCallBridge)(),
    i = () => {};
  class s {
    constructor(r) {
      var c, u;
      ((this.resource = r?.resource || null),
        (this.onClose = r?.onClose || i),
        (this.size = r?.size || "medium"),
        (this.context = r?.context || {}),
        (this.closeOnEscape = (c = r?.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick =
          (u = r?.closeOnOverlayClick) !== null && u !== void 0 ? u : !0));
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
          throw new t.BridgeAPIError("Unable to open modal.");
      } catch {
        throw new t.BridgeAPIError("Unable to open modal.");
      }
    }
  }
  return ((se.Modal = s), se);
}
var Ft;
function On() {
  return (
    Ft ||
      ((Ft = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(En(), e));
      })(Be)),
    Be
  );
}
var R = {},
  ae = {},
  At;
function Sn() {
  if (At) return ae;
  ((At = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.productFetchApi = void 0));
  const e = qr(),
    t = async (n) => {
      const r = {};
      for (const [c, u] of n.entries())
        if (c === "file") {
          const a = u.name,
            l = u.type;
          ((r.file = await (0, e.blobToBase64)(u)), (r.__fileName = a), (r.__fileType = l));
        } else r[c] = u;
      return JSON.stringify(r);
    },
    o = (n) => {
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
        u = new Request("", { body: c, method: n?.method, headers: n?.headers }),
        a = Object.fromEntries(u.headers.entries());
      return {
        body: u.method !== "GET" ? await u.text() : null,
        headers: new Headers(a),
        isMultipartFormData: r,
      };
    },
    s = (n) => {
      const r = async (c, u, a) => {
        const l = o(a),
          { body: d, headers: f, isMultipartFormData: _ } = await i(l);
        f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
        const h = {
            product: c,
            restPath: u,
            fetchRequestInit: { ...l, body: d, headers: [...f.entries()] },
            isMultipartFormData: _,
          },
          {
            body: v,
            headers: g,
            statusText: y,
            status: m,
            isAttachment: C,
          } = await n("fetchProduct", h),
          we = C ? (0, e.base64ToBlob)(v, g["content-type"]) : v;
        return new Response(we || null, { headers: g, status: m, statusText: y });
      };
      return {
        requestConfluence: (c, u) => r("confluence", c, u),
        requestJira: (c, u) => r("jira", c, u),
        requestBitbucket: (c, u) => r("bitbucket", c, u),
      };
    };
  return ((ae.productFetchApi = s), ae);
}
var Dt;
function Pn() {
  if (Dt) return R;
  Dt = 1;
  var e;
  (Object.defineProperty(R, "__esModule", { value: !0 }),
    (R.requestBitbucket = R.requestJira = R.requestConfluence = void 0));
  const t = w();
  return (
    (e = (0, Sn().productFetchApi)((0, t.getCallBridge)())),
    (R.requestConfluence = e.requestConfluence),
    (R.requestJira = e.requestJira),
    (R.requestBitbucket = e.requestBitbucket),
    R
  );
}
var Me = {},
  oe = {},
  Tt;
function Rn() {
  if (Tt) return oe;
  ((Tt = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.showFlag = void 0));
  const e = w(),
    t = O(),
    o = (0, e.getCallBridge)(),
    i = (s) => {
      var n;
      if (!s.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const r = o("showFlag", { ...s, type: (n = s.type) !== null && n !== void 0 ? n : "info" });
      return { close: async () => (await r, o("closeFlag", { id: s.id })) };
    };
  return ((oe.showFlag = i), oe);
}
var qt;
function In() {
  return (
    qt ||
      ((qt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = Rn();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(Me)),
    Me
  );
}
var ke = {},
  Bt;
function jn() {
  return (
    Bt ||
      ((Bt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(Br(), e));
      })(ke)),
    ke
  );
}
var Le = {},
  ue = {},
  Mt;
function Cn() {
  if (Mt) return ue;
  ((Mt = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.realtime = void 0));
  const t = (0, w().getCallBridge)(),
    o = (r, c, u) => t("publishRealtimeChannel", { channelName: r, eventPayload: c, options: u }),
    i = (r, c, u) => t("subscribeRealtimeChannel", { channelName: r, onEvent: c, options: u }),
    s = (r, c, u) =>
      t("publishRealtimeChannel", { channelName: r, eventPayload: c, options: u, isGlobal: !0 }),
    n = (r, c, u) =>
      t("subscribeRealtimeChannel", { channelName: r, onEvent: c, options: u, isGlobal: !0 });
  return ((ue.realtime = { publish: o, subscribe: i, publishGlobal: s, subscribeGlobal: n }), ue);
}
var Ue = {},
  kt;
function Fn() {
  return (
    kt ||
      ((kt = 1),
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
      })(Ue)),
    Ue
  );
}
var Lt;
function An() {
  return (
    Lt ||
      ((Lt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = Cn();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var o = Fn();
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
      })(Le)),
    Le
  );
}
var I = {},
  Ut;
function Dn() {
  if (Ut) return I;
  ((Ut = 1),
    Object.defineProperty(I, "__esModule", { value: !0 }),
    (I.createTranslationFunction = I.getTranslations = I.resetTranslationsCache = void 0));
  const e = Tr(),
    t = kr(),
    o = {
      getI18nInfoConfig: async () => {
        const c = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!c.ok) throw new Error("Failed to get i18n info config: " + c.statusText);
        return (await c.json()).config;
      },
      getTranslationResource: async (c) => {
        const u = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${c}.json`);
        if (!u.ok) throw new Error(`Failed to get translation resource for locale: ${c}`);
        return u.json();
      },
    },
    i = new e.TranslationsGetter(o),
    s = () => {
      i.reset();
    };
  I.resetTranslationsCache = s;
  const n = async (c = null, u = { fallback: !0 }) => {
    let a = c;
    return (a || (a = (await t.view.getContext()).locale), await i.getTranslations(a, u));
  };
  I.getTranslations = n;
  const r = async (c = null) => {
    let u = c;
    u || (u = (await t.view.getContext()).locale);
    const a = new e.Translator(u, i);
    return (
      await a.init(),
      (l, d) => {
        var f, _;
        return (_ = (f = a.translate(l)) !== null && f !== void 0 ? f : d) !== null && _ !== void 0
          ? _
          : l;
      }
    );
  };
  return ((I.createTranslationFunction = r), I);
}
var Ne = {},
  le = {},
  T = {},
  B = {},
  ge = {},
  Nt;
function Tn() {
  if (Nt) return ge;
  ((Nt = 1), Object.defineProperty(ge, "__esModule", { value: !0 }));
  const e = F();
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
    setValues(i, s) {
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
            i.source && r.user && this._setWarningState(s, r),
            e.SDKFlags.setFlags(this._sdkKey, (n = r.sdk_flags) !== null && n !== void 0 ? n : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(i) {
      var s;
      return this._getDetailedStoreResult(
        (s = this._values) === null || s === void 0 ? void 0 : s.feature_gates,
        i,
      );
    }
    getConfig(i) {
      var s;
      return this._getDetailedStoreResult(
        (s = this._values) === null || s === void 0 ? void 0 : s.dynamic_configs,
        i,
      );
    }
    getLayer(i) {
      var s;
      return this._getDetailedStoreResult(
        (s = this._values) === null || s === void 0 ? void 0 : s.layer_configs,
        i,
      );
    }
    getParamStore(i) {
      var s;
      return this._getDetailedStoreResult(
        (s = this._values) === null || s === void 0 ? void 0 : s.param_stores,
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
    _extractBootstrapMetadata(i, s) {
      if (i !== "Bootstrap") return null;
      const n = {};
      return (
        s.user && (n.user = s.user),
        s.sdkInfo && (n.generatorSDKInfo = s.sdkInfo),
        (n.lcut = s.time),
        n
      );
    }
    _getDetailedStoreResult(i, s) {
      let n = null;
      return (
        i && (n = i[s] ? i[s] : i[(0, e._DJB2)(s)]),
        { result: n, details: this._getDetails(n == null) }
      );
    }
    _setWarningState(i, s) {
      var n, r;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((n = i.customIDs) === null || n === void 0 ? void 0 : n.stableID) !== c &&
        ((!((r = i.customIDs) === null || r === void 0) && r.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in s) {
        const u = s.user;
        (0, e._getFullUserHash)(i) !== (0, e._getFullUserHash)(u) &&
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
      var s, n;
      const r = this.getCurrentSourceDetails();
      let c = r.reason;
      const u = (s = r.warnings) !== null && s !== void 0 ? s : [];
      (this._source === "Bootstrap" && u.length > 0 && (c = c + u[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${i ? "Unrecognized" : "Recognized"}`));
      const a =
        this._source === "Bootstrap" && (n = this._bootstrapMetadata) !== null && n !== void 0
          ? n
          : void 0;
      return (a && (r.bootstrapMetadata = a), Object.assign(Object.assign({}, r), { reason: c }));
    }
  };
  return ((ge.default = t), ge);
}
var M = {},
  ce = {},
  xt;
function qn() {
  if (xt) return ce;
  ((xt = 1),
    Object.defineProperty(ce, "__esModule", { value: !0 }),
    (ce._resolveDeltasResponse = void 0));
  const e = F(),
    t = 2;
  function o(r, c) {
    const u = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!u) return { hadBadDeltaChecksum: !0 };
    const a = i(r, u),
      l = s(a),
      d = (0, e._DJB2Object)(
        {
          feature_gates: l.feature_gates,
          dynamic_configs: l.dynamic_configs,
          layer_configs: l.layer_configs,
        },
        t,
      );
    return d === u.checksumV2
      ? JSON.stringify(l)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: l,
          badFullResponse: u.deltas_full_response,
        };
  }
  ce._resolveDeltasResponse = o;
  function i(r, c) {
    return Object.assign(Object.assign(Object.assign({}, r), c), {
      feature_gates: Object.assign(Object.assign({}, r.feature_gates), c.feature_gates),
      layer_configs: Object.assign(Object.assign({}, r.layer_configs), c.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, r.dynamic_configs), c.dynamic_configs),
    });
  }
  function s(r) {
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
    r?.forEach((u) => {
      delete c[u];
    });
  }
  return ce;
}
var $t;
function Lr() {
  if ($t) return M;
  $t = 1;
  var e =
    (M && M.__awaiter) ||
    function (s, n, r, c) {
      function u(a) {
        return a instanceof r
          ? a
          : new r(function (l) {
              l(a);
            });
      }
      return new (r || (r = Promise))(function (a, l) {
        function d(h) {
          try {
            _(c.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            _(c.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function _(h) {
          h.done ? a(h.value) : u(h.value).then(d, f);
        }
        _((c = c.apply(s, n || [])).next());
      });
    };
  Object.defineProperty(M, "__esModule", { value: !0 });
  const t = F(),
    o = qn();
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
    fetchEvaluations(n, r, c, u, a) {
      return e(this, void 0, void 0, function* () {
        var l, d, f, _, h, v;
        const g = r ? (0, t._typedJsonParse)(r, "has_updates", "InitializeResponse") : null;
        let y = {
          user: u,
          hash:
            (f =
              (d = (l = this._option) === null || l === void 0 ? void 0 : l.networkConfig) ===
                null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (g?.has_updates) {
          const m =
            g?.hash_used !==
            ((v =
              (h = (_ = this._option) === null || _ === void 0 ? void 0 : _.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && v !== void 0
              ? v
              : "djb2");
          y = Object.assign(Object.assign({}, y), {
            sinceTime: a && !m ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && a ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: m ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(n, g, y, c);
      });
    }
    _fetchEvaluations(n, r, c, u) {
      return e(this, void 0, void 0, function* () {
        var a, l;
        const d = yield this.post({
          sdkKey: n,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: u,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (a = d?.body) !== null && a !== void 0 ? a : null;
        if (
          r?.has_updates !== !0 ||
          ((l = d.body) === null || l === void 0 ? void 0 : l.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const f = (0, o._resolveDeltasResponse)(r, d.body);
        return typeof f == "string"
          ? f
          : this._fetchEvaluations(
              n,
              r,
              Object.assign(Object.assign(Object.assign({}, c), f), {
                deltasResponseRequested: !1,
              }),
              u,
            );
      });
    }
  }
  return ((M.default = i), M);
}
var de = {},
  zt;
function Bn() {
  if (zt) return de;
  ((zt = 1),
    Object.defineProperty(de, "__esModule", { value: !0 }),
    (de._makeParamStoreGetter = void 0));
  const e = F(),
    t = { disableExposureLog: !0 };
  function o(l) {
    return l == null || l.disableExposureLog === !1;
  }
  function i(l, d) {
    return d != null && !(0, e._isTypeMatch)(l, d);
  }
  function s(l, d) {
    return l.value;
  }
  function n(l, d, f) {
    return l.getFeatureGate(d.gate_name, o(f) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function r(l, d, f, _) {
    const v = l.getDynamicConfig(d.config_name, o(_) ? void 0 : t).get(d.param_name);
    return i(v, f) ? f : v;
  }
  function c(l, d, f, _) {
    const v = l.getExperiment(d.experiment_name, o(_) ? void 0 : t).get(d.param_name);
    return i(v, f) ? f : v;
  }
  function u(l, d, f, _) {
    const v = l.getLayer(d.layer_name, o(_) ? void 0 : t).get(d.param_name);
    return i(v, f) ? f : v;
  }
  function a(l, d, f) {
    return (_, h) => {
      if (d == null) return h;
      const v = d[_];
      if (v == null || (h != null && (0, e._typeOf)(h) !== v.param_type)) return h;
      switch (v.ref_type) {
        case "static":
          return s(v);
        case "gate":
          return n(l, v, f);
        case "dynamic_config":
          return r(l, v, h, f);
        case "experiment":
          return c(l, v, h, f);
        case "layer":
          return u(l, v, h, f);
        default:
          return h;
      }
    };
  }
  return ((de._makeParamStoreGetter = a), de);
}
var q = {},
  Gt;
function Mn() {
  if (Gt) return q;
  Gt = 1;
  var e =
    (q && q.__awaiter) ||
    function (s, n, r, c) {
      function u(a) {
        return a instanceof r
          ? a
          : new r(function (l) {
              l(a);
            });
      }
      return new (r || (r = Promise))(function (a, l) {
        function d(h) {
          try {
            _(c.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            _(c.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function _(h) {
          h.done ? a(h.value) : u(h.value).then(d, f);
        }
        _((c = c.apply(s, n || [])).next());
      });
    };
  (Object.defineProperty(q, "__esModule", { value: !0 }),
    (q.StatsigEvaluationsDataAdapter = void 0));
  const t = F(),
    o = Lr();
  let i = class extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(n, r, c) {
      (super.attach(n, r, c),
        c !== null && c instanceof o.default
          ? (this._network = c)
          : (this._network = new o.default(r ?? {})));
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
    _fetchFromNetwork(n, r, c, u) {
      return e(this, void 0, void 0, function* () {
        var a;
        const l = yield (a = this._network) === null || a === void 0
          ? void 0
          : a.fetchEvaluations(this._getSdkKey(), n, c?.priority, r, u);
        return l ?? null;
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
  return ((q.StatsigEvaluationsDataAdapter = i), q);
}
var Vt;
function kn() {
  if (Vt) return B;
  Vt = 1;
  var e =
    (B && B.__awaiter) ||
    function (c, u, a, l) {
      function d(f) {
        return f instanceof a
          ? f
          : new a(function (_) {
              _(f);
            });
      }
      return new (a || (a = Promise))(function (f, _) {
        function h(y) {
          try {
            g(l.next(y));
          } catch (m) {
            _(m);
          }
        }
        function v(y) {
          try {
            g(l.throw(y));
          } catch (m) {
            _(m);
          }
        }
        function g(y) {
          y.done ? f(y.value) : d(y.value).then(h, v);
        }
        g((l = l.apply(c, u || [])).next());
      });
    };
  Object.defineProperty(B, "__esModule", { value: !0 });
  const t = F(),
    o = Tn(),
    i = Lr(),
    s = Bn(),
    n = Mn();
  let r = class Ge extends t.StatsigClientBase {
    static instance(u) {
      const a = (0, t._getStatsigGlobal)().instance(u);
      return a instanceof Ge
        ? a
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Ge(u ?? "", {}));
    }
    constructor(u, a, l = null) {
      var d, f;
      t.SDKType._setClientType(u, "javascript-client");
      const _ = new i.default(l, (v) => {
        this.$emt(v);
      });
      (super(
        u,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new n.StatsigEvaluationsDataAdapter(),
        _,
        l,
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
        (this._store = new o.default(u)),
        (this._network = _),
        (this._user = this._configureUser(a, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (f = l?.plugins) !== null && f !== void 0 ? f : [];
      for (const v of h) v.bind(this);
    }
    initializeSync(u) {
      var a;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((a = this._store.getWarnings()) !== null && a !== void 0 ? a : []),
          ])
        : (this._logger.start(), this.updateUserSync(this._user, u));
    }
    initializeAsync(u) {
      return e(this, void 0, void 0, function* () {
        return this._initializePromise
          ? this._initializePromise
          : ((this._initializePromise = this._initializeAsyncImpl(u)), this._initializePromise);
      });
    }
    updateUserSync(u, a) {
      const l = performance.now();
      try {
        return this._updateUserSyncImpl(u, a, l);
      } catch (d) {
        const f = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(f, l);
      }
    }
    _updateUserSyncImpl(u, a, l) {
      var d;
      const f = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(u);
      const _ = this.dataAdapter.getDataSync(this._user);
      (_ == null && f.push("NoCachedValues"),
        this._store.setValues(_, this._user),
        this._finalizeUpdate(_));
      const h = a?.disableBackgroundCacheRefresh;
      return h === !0 || (h == null && _?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          )
        : (this._runPostUpdate(_ ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          ));
    }
    updateUserAsync(u, a) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(u, a);
        } catch (d) {
          const f = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(f, l);
        }
      });
    }
    _updateUserAsyncImpl(u, a) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(u);
        const l = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(l);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, l, a)),
          l !== this._user)
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
    checkGate(u, a) {
      return this.getFeatureGate(u, a).value;
    }
    logEvent(u, a, l) {
      const d = typeof u == "string" ? { eventName: u, value: a, metadata: l } : u;
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
    _initializeAsyncImpl(u) {
      return e(this, void 0, void 0, function* () {
        return (
          t.Storage.isReady() || (yield t.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, u)
        );
      });
    }
    _createErrorUpdateDetails(u, a) {
      var l;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - a,
        u,
        null,
        [...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : [])],
      );
    }
    _finalizeUpdate(u) {
      (this._store.finalize(), this._setStatus("Ready", u));
    }
    _runPostUpdate(u, a) {
      this.dataAdapter.getDataAsync(u, a, { priority: "low" }).catch((l) => {
        t.Log.error("An error occurred after update.", l);
      });
    }
    _resetForUser(u) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(u, this._options)));
    }
    _configureUser(u, a) {
      var l;
      const d = (0, t._normalizeUser)(u, a),
        f = (l = d.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      return (f && t.StableID.setOverride(f, this._sdkKey), d);
    }
    _getFeatureGateImpl(u, a) {
      var l, d;
      const { result: f, details: _ } = this._store.getGate(u),
        h = (0, t._makeFeatureGate)(u, _, f),
        v =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, a),
        g = v ?? h;
      return (
        this._enqueueExposure(
          u,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          a,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(u, a) {
      var l, d;
      const { result: f, details: _ } = this._store.getConfig(u),
        h = (0, t._makeDynamicConfig)(u, _, f),
        v =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, this._user, a),
        g = v ?? h;
      return (
        this._enqueueExposure(
          u,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          a,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(u, a) {
      var l, d, f, _;
      const { result: h, details: v } = this._store.getConfig(u),
        g = (0, t._makeExperiment)(u, v, h);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = g.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
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
            : _.call(f, g, this._user, a),
        m = y ?? g;
      return (
        this._enqueueExposure(
          u,
          (0, t._createConfigExposure)(this._user, m, this._store.getExposureMapping()),
          a,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: m }),
        m
      );
    }
    _getLayerImpl(u, a) {
      var l, d, f;
      const { result: _, details: h } = this._store.getLayer(u),
        v = (0, t._makeLayer)(u, h, _),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, v, this._user, a);
      a?.disableExposureLog && this._logger.incrementNonExposureCount(u);
      const y = (0, t._mergeOverride)(
        v,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : v.__value,
        (m) => {
          a?.disableExposureLog ||
            this._enqueueExposure(
              u,
              (0, t._createLayerParameterExposure)(
                this._user,
                y,
                m,
                this._store.getExposureMapping(),
              ),
              a,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: y }), y);
    }
    _getParameterStoreImpl(u, a) {
      var l, d;
      const { result: f, details: _ } = this._store.getParamStore(u);
      this._logger.incrementNonExposureCount(u);
      const h = {
          name: u,
          details: _,
          __configuration: f,
          get: (0, s._makeParamStoreGetter)(this, f, a),
        },
        v =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, a);
      return (
        v != null &&
          ((h.__configuration = v.config),
          (h.details = v.details),
          (h.get = (0, s._makeParamStoreGetter)(this, v.config, a))),
        h
      );
    }
  };
  return ((B.default = r), B);
}
var Kt;
function Ln() {
  return (
    Kt ||
      ((Kt = 1),
      (function (e) {
        var t =
            (T && T.__createBinding) ||
            (Object.create
              ? function (r, c, u, a) {
                  a === void 0 && (a = u);
                  var l = Object.getOwnPropertyDescriptor(c, u);
                  ((!l || ("get" in l ? !c.__esModule : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return c[u];
                      },
                    }),
                    Object.defineProperty(r, a, l));
                }
              : function (r, c, u, a) {
                  (a === void 0 && (a = u), (r[a] = c[u]));
                }),
          o =
            (T && T.__exportStar) ||
            function (r, c) {
              for (var u in r)
                u !== "default" && !Object.prototype.hasOwnProperty.call(c, u) && t(c, r, u);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const i = F(),
          s = kn();
        ((e.StatsigClient = s.default), o(F(), e));
        const n = Object.assign((0, i._getStatsigGlobal)(), { StatsigClient: s.default });
        e.default = n;
      })(T)),
    T
  );
}
var fe = {},
  _e = {},
  Ht;
function Un() {
  if (Ht) return _e;
  ((Ht = 1),
    Object.defineProperty(_e, "__esModule", { value: !0 }),
    (_e.initFeatureFlags = void 0));
  const e = w(),
    t = O(),
    o = me(),
    i = 500,
    s = 1e3 * 25,
    n = (0, e.getCallBridge)(),
    r = (u) => {
      if (!u || !u.user)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(u).some((a) => typeof a == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (u) => (r(u), n("initFeatureFlags", { user: u.user }));
  return (
    (_e.initFeatureFlags = (0, o.withRateLimiter)(
      c,
      i,
      s,
      `Feature flags initialisation calls are rate limited at ${i}req/${s / 1e3}s`,
    )),
    _e
  );
}
var Jt;
function Nn() {
  if (Jt) return fe;
  ((Jt = 1),
    Object.defineProperty(fe, "__esModule", { value: !0 }),
    (fe.ForgeDataAdapter = void 0));
  const e = Un();
  class t {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(i, s, n) {
      var r;
      if (i) return i;
      this.environment = ((r = this.options) === null || r === void 0 ? void 0 : r.environment) || {
        tier: "development",
      };
      const c = { ...s, statsigEnvironment: this.environment },
        u = await (0, e.initFeatureFlags)({ user: c }),
        a = {
          source: "Network",
          data: JSON.stringify(u),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = a), a);
    }
    getDataSync(i) {
      return this.cache;
    }
    async attach(i, s, n) {
      this.options = s;
    }
    async prefetchData() {}
    async setData(i) {}
    async setDataLegacy(i) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((fe.ForgeDataAdapter = t), fe);
}
var xe = {},
  Wt;
function Ur() {
  return (
    Wt ||
      ((Wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = e.ExtensionEnvironment = void 0),
          (function (o) {
            ((o.DEVELOPMENT = "DEVELOPMENT"),
              (o.STAGING = "STAGING"),
              (o.PRODUCTION = "PRODUCTION"));
          })(e.ExtensionEnvironment || (e.ExtensionEnvironment = {})));
        var t;
        ((function (o) {
          o.USER_ACCESS = "USER_ACCESS";
        })(t || (t = {})),
          (function (o) {
            o.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(xe)),
    xe
  );
}
var he = {},
  Xt;
function xn() {
  if (Xt) return he;
  ((Xt = 1),
    Object.defineProperty(he, "__esModule", { value: !0 }),
    (he.trackFeatureFlagEvent = void 0));
  const e = w(),
    t = O(),
    o = Ur(),
    i = me(),
    s = 500,
    n = 1e3 * 25,
    r = (0, e.getCallBridge)(),
    c = (a) => {
      if (!a || !a.type || !a.properties)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(a.type.toUpperCase() in o.FeatureFlagEventType))
        throw new t.BridgeAPIError("Event type is not supported");
      if (Object.values(a).some((l) => typeof l == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    u = (a) => (c(a), r("trackFeatureFlagEvent", a));
  return (
    (he.trackFeatureFlagEvent = (0, i.withRateLimiter)(
      u,
      s,
      n,
      `Feature flags calls are rate limited at ${s}req/${n / 1e3}s`,
    )),
    he
  );
}
var Yt;
function $n() {
  if (Yt) return le;
  ((Yt = 1),
    Object.defineProperty(le, "__esModule", { value: !0 }),
    (le.ForgeFeatureFlags = void 0));
  const e = Ln(),
    t = Nn(),
    o = Ur(),
    i = xn();
  class s {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.eventProps = {}),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(r, c = {}) {
      var u;
      if (this.isInitialized()) return;
      this.dataAdapter = new t.ForgeDataAdapter();
      const a = {
        environment: { tier: c.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (u = a.environment) === null || u === void 0 ? void 0 : u.tier),
        (this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(r), a)),
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
      const u = {
        type: o.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: r,
          success: c,
        },
      };
      (0, i.trackFeatureFlagEvent)(u);
    }
  }
  return ((le.ForgeFeatureFlags = s), le);
}
var Zt;
function zn() {
  return (
    Zt ||
      ((Zt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = $n();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })(Ne)),
    Ne
  );
}
var Qt;
function Gn() {
  return (
    Qt ||
      ((Qt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = j;
        var o = Zr();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return o.NavigationTarget;
          },
        }),
          t.__exportStar(en(), e),
          t.__exportStar(nn(), e),
          t.__exportStar(kr(), e),
          t.__exportStar(wn(), e),
          t.__exportStar(On(), e),
          t.__exportStar(Pn(), e),
          t.__exportStar(In(), e),
          t.__exportStar(jn(), e),
          t.__exportStar(An(), e),
          (e.i18n = t.__importStar(Dn())),
          t.__exportStar(zn(), e));
      })(Oe)),
    Oe
  );
}
var ve = Gn();
const Vn = "_container_16ann_1",
  Kn = "_header_16ann_9",
  Hn = "_controls_16ann_20",
  Jn = "_searchSection_16ann_28",
  Wn = "_searchInput_16ann_34",
  Xn = "_orgSelect_16ann_35",
  Yn = "_input_16ann_36",
  Zn = "_select_16ann_37",
  Qn = "_addButton_16ann_63",
  ei = "_addForm_16ann_79",
  ti = "_submitButton_16ann_88",
  ri = "_spinner_16ann_108",
  ni = "_spinnerInner_16ann_113",
  ii = "_tableContainer_16ann_117",
  si = "_table_16ann_117",
  ai = "_stats_16ann_146",
  oi = "_loadingContainer_16ann_155",
  E = {
    container: Vn,
    header: Kn,
    controls: Hn,
    searchSection: Jn,
    searchInput: Wn,
    orgSelect: Xn,
    input: Yn,
    select: Zn,
    addButton: Qn,
    addForm: ei,
    submitButton: ti,
    spinner: ri,
    spinnerInner: ni,
    tableContainer: ii,
    table: si,
    stats: ai,
    loadingContainer: oi,
  },
  er = () =>
    p.jsx("div", { className: E.spinner, children: p.jsx("div", { className: E.spinnerInner }) });
function ui() {
  const [e, t] = S.useState([]),
    [o, i] = S.useState([]),
    [s, n] = S.useState(""),
    [r, c] = S.useState(null),
    [u, a] = S.useState(null),
    [l, d] = S.useState(""),
    [f, _] = S.useState(null),
    [h, v] = S.useState(!1),
    [g, y] = S.useState(!0),
    [m, C] = S.useState(!1),
    we = async () => {
      try {
        const b = await ve.invoke("getUsers", {
          searchTerm: s || void 0,
          organizationId: r || void 0,
        });
        t(b);
      } catch (b) {
        console.error("Error fetching users:", b);
      }
    },
    Nr = async () => {
      try {
        const b = await ve.invoke("getOrganizations");
        i(b);
      } catch (b) {
        console.error("Error fetching organizations:", b);
      }
    },
    xr = async () => {
      try {
        const b = await ve.invoke("getUserStats");
        a(b);
      } catch (b) {
        console.error("Error fetching stats:", b);
      }
    },
    Ke = async () => {
      y(!0);
      try {
        await Promise.all([we(), Nr(), xr()]);
      } finally {
        y(!1);
      }
    };
  S.useEffect(() => {
    Ke();
  }, [s, r]);
  const $r = async () => {
    if (!(!l || !f)) {
      C(!0);
      try {
        (await ve.invoke("createUser", { name: l, organizationId: f }),
          d(""),
          _(null),
          v(!1),
          await Ke());
      } catch (b) {
        console.error("Error adding user:", b);
      } finally {
        C(!1);
      }
    }
  };
  return g
    ? p.jsxs("div", {
        className: E.loadingContainer,
        children: [p.jsx(er, {}), p.jsx("p", { children: "Loading data..." })],
      })
    : p.jsxs("div", {
        className: E.container,
        children: [
          p.jsx("header", {
            className: E.header,
            children: p.jsx("h1", { children: "OrgTracker" }),
          }),
          p.jsxs("div", {
            className: E.controls,
            children: [
              p.jsxs("div", {
                className: E.searchSection,
                children: [
                  p.jsx("input", {
                    type: "text",
                    placeholder: "🔍 Search by name...",
                    value: s,
                    onChange: (b) => n(b.target.value),
                    className: E.searchInput,
                  }),
                  p.jsxs("select", {
                    value: r || "",
                    onChange: (b) => c(b.target.value ? Number(b.target.value) : null),
                    className: E.orgSelect,
                    children: [
                      p.jsx("option", { value: "", children: "All Organizations" }),
                      o.map((b) =>
                        p.jsxs(
                          "option",
                          {
                            value: b.id,
                            children: [b.name, " (", u?.orgBreakdown[b.id] || 0, ")"],
                          },
                          b.id,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              p.jsx("button", {
                className: E.addButton,
                onClick: () => v(!h),
                children: h ? "Cancel" : "+ Add User",
              }),
            ],
          }),
          h &&
            p.jsxs("div", {
              className: E.addForm,
              children: [
                p.jsx("input", {
                  type: "text",
                  placeholder: "User Name",
                  value: l,
                  onChange: (b) => d(b.target.value),
                  className: E.input,
                  disabled: m,
                }),
                p.jsxs("select", {
                  value: f || "",
                  onChange: (b) => _(Number(b.target.value)),
                  className: E.select,
                  disabled: m,
                  children: [
                    p.jsx("option", { value: "", children: "Select Organization" }),
                    o.map((b) => p.jsx("option", { value: b.id, children: b.name }, b.id)),
                  ],
                }),
                p.jsx("button", {
                  onClick: $r,
                  className: E.submitButton,
                  disabled: !l || !f || m,
                  style: {
                    opacity: !l || !f || m ? 0.5 : 1,
                    cursor: !l || !f || m ? "not-allowed" : "pointer",
                  },
                  children: m
                    ? p.jsxs(p.Fragment, {
                        children: [
                          p.jsx(er, {}),
                          p.jsx("span", { style: { marginLeft: "8px" }, children: "Adding..." }),
                        ],
                      })
                    : "Add User",
                }),
              ],
            }),
          p.jsx("div", {
            className: E.tableContainer,
            children: p.jsxs("table", {
              className: E.table,
              children: [
                p.jsx("thead", {
                  children: p.jsxs("tr", {
                    children: [
                      p.jsx("th", { children: "👤 User Name" }),
                      p.jsx("th", { children: "🏢 Organization" }),
                    ],
                  }),
                }),
                p.jsx("tbody", {
                  children: e.map((b) =>
                    p.jsxs(
                      "tr",
                      {
                        children: [
                          p.jsx("td", { children: b.users.name }),
                          p.jsx("td", { children: b.organization.name }),
                        ],
                      },
                      b.users.id,
                    ),
                  ),
                }),
              ],
            }),
          }),
          p.jsx("div", {
            className: E.stats,
            children: p.jsxs("p", { children: ["Total Users: ", u?.totalUsers || 0] }),
          }),
        ],
      });
}
const li = document.getElementById("root"),
  ci = zr.createRoot(li),
  tr = () => {
    ci.render(p.jsx(ui, {}));
  };
ve.view.theme
  .enable()
  .then(() => {
    tr();
  })
  .catch((e) => {
    (console.error(e.message), tr());
  });
