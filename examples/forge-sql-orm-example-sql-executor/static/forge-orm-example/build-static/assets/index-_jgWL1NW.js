import { r as wr, c as an } from "./react-dom-vendor-BOEB6BZs.js";
import { g as sn, r as C } from "./client-core-vendor-D3kwrIkk.js";
import { r as un } from "./lodash-vendor-DXG1mS21.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const n of o)
      if (n.type === "childList")
        for (const r of n.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(o) {
    const n = {};
    return (
      o.integrity && (n.integrity = o.integrity),
      o.referrerPolicy && (n.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (n.credentials = "omit")
          : (n.credentials = "same-origin"),
      n
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const n = s(o);
    fetch(o.href, n);
  }
})();
var Ae = { exports: {} },
  N = {};
var ot;
function ln() {
  if (ot) return N;
  ot = 1;
  var e = wr(),
    t = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    i = Object.prototype.hasOwnProperty,
    o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
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
    return { $$typeof: t, type: c, key: f, ref: _, props: d, _owner: o.current };
  }
  return ((N.Fragment = s), (N.jsx = r), (N.jsxs = r), N);
}
var at;
function cn() {
  return (at || ((at = 1), (Ae.exports = ln())), Ae.exports);
}
var b = cn(),
  D = wr(),
  De = {},
  et = function (e, t) {
    return (
      (et =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (s, i) {
            s.__proto__ = i;
          }) ||
        function (s, i) {
          for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (s[o] = i[o]);
        }),
      et(e, t)
    );
  };
function Er(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  et(e, t);
  function s() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((s.prototype = t.prototype), new s());
}
var Re = function () {
  return (
    (Re =
      Object.assign ||
      function (t) {
        for (var s, i = 1, o = arguments.length; i < o; i++) {
          s = arguments[i];
          for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
        }
        return t;
      }),
    Re.apply(this, arguments)
  );
};
function Or(e, t) {
  var s = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
      t.indexOf(i[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[o]) &&
        (s[i[o]] = e[i[o]]);
  return s;
}
function Pr(e, t, s, i) {
  var o = arguments.length,
    n = o < 3 ? t : i === null ? (i = Object.getOwnPropertyDescriptor(t, s)) : i,
    r;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, s, i);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (r = e[c]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, s, n) : r(t, s)) || n);
  return (o > 3 && n && Object.defineProperty(t, s, n), n);
}
function Sr(e, t) {
  return function (s, i) {
    t(s, i, e);
  };
}
function Rr(e, t, s, i, o, n) {
  function r(m) {
    if (m !== void 0 && typeof m != "function") throw new TypeError("Function expected");
    return m;
  }
  for (
    var c = i.kind,
      u = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      a = !t && e ? (i.static ? e : e.prototype) : null,
      l = t || (a ? Object.getOwnPropertyDescriptor(a, i.name) : {}),
      d,
      f = !1,
      _ = s.length - 1;
    _ >= 0;
    _--
  ) {
    var h = {};
    for (var g in i) h[g] = g === "access" ? {} : i[g];
    for (var g in i.access) h.access[g] = i.access[g];
    h.addInitializer = function (m) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      n.push(r(m || null));
    };
    var v = (0, s[_])(c === "accessor" ? { get: l.get, set: l.set } : l[u], h);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      ((d = r(v.get)) && (l.get = d),
        (d = r(v.set)) && (l.set = d),
        (d = r(v.init)) && o.unshift(d));
    } else (d = r(v)) && (c === "field" ? o.unshift(d) : (l[u] = d));
  }
  (a && Object.defineProperty(a, i.name, l), (f = !0));
}
function Ir(e, t, s) {
  for (var i = arguments.length > 2, o = 0; o < t.length; o++)
    s = i ? t[o].call(e, s) : t[o].call(e);
  return i ? s : void 0;
}
function jr(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Cr(e, t, s) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: s ? "".concat(s, " ", t) : t })
  );
}
function Fr(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Ar(e, t, s, i) {
  function o(n) {
    return n instanceof s
      ? n
      : new s(function (r) {
          r(n);
        });
  }
  return new (s || (s = Promise))(function (n, r) {
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
      l.done ? n(l.value) : o(l.value).then(c, u);
    }
    a((i = i.apply(e, t || [])).next());
  });
}
function Dr(e, t) {
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
    o,
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
    for (; r && ((r = 0), a[0] && (s = 0)), s; )
      try {
        if (
          ((i = 1),
          o &&
            (n =
              a[0] & 2 ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) &&
            !(n = n.call(o, a[1])).done)
        )
          return n;
        switch (((o = 0), n && (a = [a[0] & 2, n.value]), a[0])) {
          case 0:
          case 1:
            n = a;
            break;
          case 4:
            return (s.label++, { value: a[1], done: !1 });
          case 5:
            (s.label++, (o = a[1]), (a = [0]));
            continue;
          case 7:
            ((a = s.ops.pop()), s.trys.pop());
            continue;
          default:
            if (
              ((n = s.trys), !(n = n.length > 0 && n[n.length - 1]) && (a[0] === 6 || a[0] === 2))
            ) {
              s = 0;
              continue;
            }
            if (a[0] === 3 && (!n || (a[1] > n[0] && a[1] < n[3]))) {
              s.label = a[1];
              break;
            }
            if (a[0] === 6 && s.label < n[1]) {
              ((s.label = n[1]), (n = a));
              break;
            }
            if (n && s.label < n[2]) {
              ((s.label = n[2]), s.ops.push(a));
              break;
            }
            (n[2] && s.ops.pop(), s.trys.pop());
            continue;
        }
        a = t.call(e, s);
      } catch (l) {
        ((a = [6, l]), (o = 0));
      } finally {
        i = n = 0;
      }
    if (a[0] & 5) throw a[1];
    return { value: a[0] ? a[1] : void 0, done: !0 };
  }
}
var je = Object.create
  ? function (e, t, s, i) {
      i === void 0 && (i = s);
      var o = Object.getOwnPropertyDescriptor(t, s);
      ((!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) &&
        (o = {
          enumerable: !0,
          get: function () {
            return t[s];
          },
        }),
        Object.defineProperty(e, i, o));
    }
  : function (e, t, s, i) {
      (i === void 0 && (i = s), (e[i] = t[s]));
    };
function Tr(e, t) {
  for (var s in e) s !== "default" && !Object.prototype.hasOwnProperty.call(t, s) && je(t, e, s);
}
function Ie(e) {
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
function nt(e, t) {
  var s = typeof Symbol == "function" && e[Symbol.iterator];
  if (!s) return e;
  var i = s.call(e),
    o,
    n = [],
    r;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = i.next()).done; ) n.push(o.value);
  } catch (c) {
    r = { error: c };
  } finally {
    try {
      o && !o.done && (s = i.return) && s.call(i);
    } finally {
      if (r) throw r.error;
    }
  }
  return n;
}
function Br() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(nt(arguments[t]));
  return e;
}
function kr() {
  for (var e = 0, t = 0, s = arguments.length; t < s; t++) e += arguments[t].length;
  for (var i = Array(e), o = 0, t = 0; t < s; t++)
    for (var n = arguments[t], r = 0, c = n.length; r < c; r++, o++) i[o] = n[r];
  return i;
}
function qr(e, t, s) {
  if (s || arguments.length === 2)
    for (var i = 0, o = t.length, n; i < o; i++)
      (n || !(i in t)) && (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
  return e.concat(n || Array.prototype.slice.call(t));
}
function L(e) {
  return this instanceof L ? ((this.v = e), this) : new L(e);
}
function Mr(e, t, s) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = s.apply(e, t || []),
    o,
    n = [];
  return (
    (o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    c("next"),
    c("throw"),
    c("return", r),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function r(_) {
    return function (h) {
      return Promise.resolve(h).then(_, d);
    };
  }
  function c(_, h) {
    i[_] &&
      ((o[_] = function (g) {
        return new Promise(function (v, m) {
          n.push([_, g, v, m]) > 1 || u(_, g);
        });
      }),
      h && (o[_] = h(o[_])));
  }
  function u(_, h) {
    try {
      a(i[_](h));
    } catch (g) {
      f(n[0][3], g);
    }
  }
  function a(_) {
    _.value instanceof L ? Promise.resolve(_.value.v).then(l, d) : f(n[0][2], _);
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
function xr(e) {
  var t, s;
  return (
    (t = {}),
    i("next"),
    i("throw", function (o) {
      throw o;
    }),
    i("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function i(o, n) {
    t[o] = e[o]
      ? function (r) {
          return (s = !s) ? { value: L(e[o](r)), done: !1 } : n ? n(r) : r;
        }
      : n;
  }
}
function Lr(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    s;
  return t
    ? t.call(e)
    : ((e = typeof Ie == "function" ? Ie(e) : e[Symbol.iterator]()),
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
        return new Promise(function (c, u) {
          ((r = e[n](r)), o(c, u, r.done, r.value));
        });
      };
  }
  function o(n, r, c, u) {
    Promise.resolve(u).then(function (a) {
      n({ value: a, done: c });
    }, r);
  }
}
function Ur(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var dn = Object.create
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
          var s = [];
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (s[s.length] = i);
          return s;
        }),
      tt(e)
    );
  };
function Nr(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var s = tt(e), i = 0; i < s.length; i++) s[i] !== "default" && je(t, e, s[i]);
  return (dn(t, e), t);
}
function Gr(e) {
  return e && e.__esModule ? e : { default: e };
}
function zr(e, t, s, i) {
  if (s === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return s === "m" ? i : s === "a" ? i.call(e) : i ? i.value : t.get(e);
}
function Vr(e, t, s, i, o) {
  if (i === "m") throw new TypeError("Private method is not writable");
  if (i === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (i === "a" ? o.call(e, s) : o ? (o.value = s) : t.set(e, s), s);
}
function Hr(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Kr(e, t, s) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var i, o;
    if (s) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      i = t[Symbol.asyncDispose];
    }
    if (i === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((i = t[Symbol.dispose]), s && (o = i));
    }
    if (typeof i != "function") throw new TypeError("Object not disposable.");
    (o &&
      (i = function () {
        try {
          o.call(this);
        } catch (n) {
          return Promise.reject(n);
        }
      }),
      e.stack.push({ value: t, dispose: i, async: s }));
  } else s && e.stack.push({ async: !0 });
  return t;
}
var fn =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, s) {
        var i = new Error(s);
        return ((i.name = "SuppressedError"), (i.error = e), (i.suppressed = t), i);
      };
function Jr(e) {
  function t(n) {
    ((e.error = e.hasError ? new fn(n, e.error, "An error was suppressed during disposal.") : n),
      (e.hasError = !0));
  }
  var s,
    i = 0;
  function o() {
    for (; (s = e.stack.pop()); )
      try {
        if (!s.async && i === 1) return ((i = 0), e.stack.push(s), Promise.resolve().then(o));
        if (s.dispose) {
          var n = s.dispose.call(s.value);
          if (s.async)
            return (
              (i |= 2),
              Promise.resolve(n).then(o, function (r) {
                return (t(r), o());
              })
            );
        } else i |= 1;
      } catch (r) {
        t(r);
      }
    if (i === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return o();
}
function Wr(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (s, i, o, n, r) {
        return i
          ? t
            ? ".jsx"
            : ".js"
          : o && (!n || !r)
            ? s
            : o + n + "." + r.toLowerCase() + "js";
      })
    : e;
}
const _n = {
    __extends: Er,
    __assign: Re,
    __rest: Or,
    __decorate: Pr,
    __param: Sr,
    __esDecorate: Rr,
    __runInitializers: Ir,
    __propKey: jr,
    __setFunctionName: Cr,
    __metadata: Fr,
    __awaiter: Ar,
    __generator: Dr,
    __createBinding: je,
    __exportStar: Tr,
    __values: Ie,
    __read: nt,
    __spread: Br,
    __spreadArrays: kr,
    __spreadArray: qr,
    __await: L,
    __asyncGenerator: Mr,
    __asyncDelegator: xr,
    __asyncValues: Lr,
    __makeTemplateObject: Ur,
    __importStar: Nr,
    __importDefault: Gr,
    __classPrivateFieldGet: zr,
    __classPrivateFieldSet: Vr,
    __classPrivateFieldIn: Hr,
    __addDisposableResource: Kr,
    __disposeResources: Jr,
    __rewriteRelativeImportExtension: Wr,
  },
  hn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Kr,
        get __assign() {
          return Re;
        },
        __asyncDelegator: xr,
        __asyncGenerator: Mr,
        __asyncValues: Lr,
        __await: L,
        __awaiter: Ar,
        __classPrivateFieldGet: zr,
        __classPrivateFieldIn: Hr,
        __classPrivateFieldSet: Vr,
        __createBinding: je,
        __decorate: Pr,
        __disposeResources: Jr,
        __esDecorate: Rr,
        __exportStar: Tr,
        __extends: Er,
        __generator: Dr,
        __importDefault: Gr,
        __importStar: Nr,
        __makeTemplateObject: Ur,
        __metadata: Fr,
        __param: Sr,
        __propKey: jr,
        __read: nt,
        __rest: Or,
        __rewriteRelativeImportExtension: Wr,
        __runInitializers: Ir,
        __setFunctionName: Cr,
        __spread: Br,
        __spreadArray: qr,
        __spreadArrays: kr,
        __values: Ie,
        default: _n,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  P = sn(hn);
var G = {},
  st;
function gn() {
  return (
    st ||
      ((st = 1),
      Object.defineProperty(G, "__esModule", { value: !0 }),
      (G.NavigationTarget = void 0),
      (G.NavigationTarget = {
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
    G
  );
}
var Te = {},
  Be = {},
  z = {},
  V = {},
  ut;
function E() {
  if (ut) return V;
  ((ut = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.BridgeAPIError = void 0));
  class e extends Error {}
  return ((V.BridgeAPIError = e), V);
}
var lt;
function w() {
  if (lt) return z;
  ((lt = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.getCallBridge = void 0));
  const e = E();
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
  return ((z.getCallBridge = s), z);
}
var H = {},
  ct;
function Ce() {
  if (ct) return H;
  ((ct = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.withRateLimiter = void 0));
  const e = E(),
    t = (s, i, o, n) => {
      let r = Date.now(),
        c = 0;
      return async (...u) => {
        const a = Date.now();
        if ((a - r > o && ((r = a), (c = 0)), c >= i))
          throw new e.BridgeAPIError(n || "Too many invocations.");
        return ((c = c + 1), s(...u));
      };
    };
  return ((H.withRateLimiter = t), H);
}
var dt;
function vn() {
  return (
    dt ||
      ((dt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = w(),
          s = E(),
          i = Ce(),
          o = (0, t.getCallBridge)(),
          n = (u) => {
            if (u && Object.values(u).some((a) => typeof a == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          r = (u, a) => {
            if (typeof u != "string") throw new s.BridgeAPIError("functionKey must be a string!");
            return (n(a), o("invoke", { functionKey: u, payload: a }));
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
      })(Be)),
    Be
  );
}
var ft;
function Oe() {
  return (
    ft ||
      ((ft = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(vn(), e));
      })(Te)),
    Te
  );
}
var ke = {},
  K = {},
  qe = {},
  _t;
function Qr() {
  return (
    _t ||
      ((_t = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = w(),
          s = E(),
          i = Ce(),
          o = 500,
          n = 25,
          r = 1e3 * n;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, t.getCallBridge)(),
          u = (d) => {
            if (d && Object.values(d).some((f) => typeof f == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          a = (d) => async (f) => {
            u(f);
            const _ = { ...f, invokeType: `ui-${d.toLowerCase()}-fetch` },
              h = await c("invoke", _),
              { success: g, payload: v, error: m } = h ?? {},
              y = { ...(g ? v : m) };
            if (y && y.headers)
              for (const O in y.headers)
                Array.isArray(y.headers[O]) && (y.headers[O] = y.headers[O].join(","));
            return y;
          },
          l = (d) => {
            const f = a(d);
            return (0, i.withRateLimiter)(
              f,
              o,
              r,
              `${d} invocation calls are rate limited at ${o}/${n}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(qe)),
    qe
  );
}
var ht;
function pn() {
  if (ht) return K;
  ((ht = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.invokeRemote = void 0));
  const e = Qr(),
    t = (s) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(s);
  return ((K.invokeRemote = t), K);
}
var J = {},
  gt;
function yn() {
  if (gt) return J;
  ((gt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.invokeService = void 0));
  const e = Qr(),
    t = (s) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(s);
  return ((J.invokeService = t), J);
}
var vt;
function bn() {
  return (
    vt ||
      ((vt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = P;
        (t.__exportStar(pn(), e), t.__exportStar(yn(), e));
      })(ke)),
    ke
  );
}
var Me = {},
  W = {},
  Q = {},
  pt;
function mn() {
  if (pt) return Q;
  ((pt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.submit = void 0));
  const e = w(),
    t = E(),
    s = (0, e.getCallBridge)(),
    i = async (o) => {
      if ((await s("submit", o)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((Q.submit = i), Q);
}
var X = {},
  yt;
function wn() {
  if (yt) return X;
  ((yt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.close = void 0));
  const e = w(),
    t = E(),
    s = (0, e.getCallBridge)(),
    i = async (o) => {
      try {
        if ((await s("close", o)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((X.close = i), X);
}
var Y = {},
  bt;
function En() {
  if (bt) return Y;
  ((bt = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.open = void 0));
  const e = w(),
    t = E(),
    s = (0, e.getCallBridge)(),
    i = async () => {
      try {
        if ((await s("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((Y.open = i), Y);
}
var Z = {},
  mt;
function On() {
  if (mt) return Z;
  ((mt = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.refresh = void 0));
  const e = w(),
    t = E(),
    s = (0, e.getCallBridge)(),
    i = async (o) => {
      if ((await s("refresh", o)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((Z.refresh = i), Z);
}
var $ = {},
  wt;
function Pn() {
  if (wt) return $;
  ((wt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.createHistory = void 0));
  const t = (0, w().getCallBridge)(),
    s = async () => {
      const i = await t("createHistory");
      return (
        i.listen((o) => {
          i.location = o;
        }),
        i
      );
    };
  return (($.createHistory = s), $);
}
var ee = {},
  xe = {},
  S = {},
  Et;
function Xr() {
  return (
    Et ||
      ((Et = 1),
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
var T = {},
  Ot;
function Sn() {
  if (Ot) return T;
  ((Ot = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.TranslationsGetter = T.TranslationGetterError = void 0));
  const e = (i, o) => {
    i.includes(o) || i.push(o);
  };
  class t extends Error {
    constructor(o) {
      (super(o), (this.name = "TranslationGetterError"));
    }
  }
  T.TranslationGetterError = t;
  class s {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(o) {
      this.resourcesAccessor = o;
    }
    async getTranslations(o, n = { fallback: !0 }) {
      const r = await this.getI18nInfoConfig(),
        { fallback: c } = n;
      if (!c) {
        let u;
        return (
          r.locales.includes(o) && (u = await this.getTranslationResource(o)),
          { translations: u ?? null, locale: o }
        );
      }
      for (const u of this.getLocaleLookupOrder(o, r)) {
        const a = await this.getTranslationResource(u);
        if (a) return { translations: a, locale: u };
      }
      return { translations: null, locale: o };
    }
    async getTranslationsByLocaleLookupOrder(o) {
      const n = await this.getI18nInfoConfig(),
        r = this.getLocaleLookupOrder(o, n);
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
    async getTranslationResource(o) {
      let n = this.translationResources.get(o);
      if (!n)
        try {
          ((n = await this.resourcesAccessor.getTranslationResource(o)),
            this.translationResources.set(o, n));
        } catch (r) {
          throw r instanceof t ? r : new t(`Failed to get translation resource for locale: ${o}`);
        }
      return n;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (o) {
          throw o instanceof t ? o : new t("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(o, n) {
      const { locales: r, fallback: c } = n,
        u = [o],
        a = c[o];
      return (
        a && Array.isArray(a) && a.length > 0 && u.push(...a),
        e(u, n.fallback.default),
        u.filter((l) => r.includes(l))
      );
    }
  }
  return ((T.TranslationsGetter = s), T);
}
var te = {},
  Le = {},
  Pt;
function Yr() {
  return (
    Pt ||
      ((Pt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const s = P.__importDefault(un()),
          i = (n, r, c) => {
            const u = n[c];
            return u ? (0, e.getTranslationValueFromContent)(u, r) : null;
          };
        e.getTranslationValue = i;
        const o = (n, r) => {
          let c = n[r];
          if (!c) {
            const u = r.split(".");
            u.length > 1 && (c = (0, s.default)(n, u, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = o;
      })(Le)),
    Le
  );
}
var St;
function Rn() {
  if (St) return te;
  ((St = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.Translator = void 0));
  const e = Yr();
  class t {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(i, o) {
      ((this.locale = i), (this.translationsGetter = o));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(i) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let o = this.cache.get(i);
      if (o === void 0) {
        for (const { translations: n } of this.localeLookupOrderedTranslations) {
          const r = (0, e.getTranslationValueFromContent)(n, i);
          if (r !== null) {
            o = r;
            break;
          }
        }
        ((o = o ?? null), this.cache.set(i, o));
      }
      return o;
    }
  }
  return ((te.Translator = t), te);
}
var re = {},
  Rt;
function In() {
  if (Rt) return re;
  ((Rt = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.ensureLocale = void 0));
  const e = Xr(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    s = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    i = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (n, r) => {
        const [c] = r.split("-");
        return (n[c] || (n[c] = r), n);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    o = (n) => {
      const r = n.replace("_", "-");
      return t.has(r) ? r : (i[r] ?? s[r] ?? null);
    };
  return ((re.ensureLocale = o), re);
}
var Ue = {},
  It;
function jn() {
  return (
    It ||
      ((It = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (a) => typeof a == "object" && a !== null && !Array.isArray(a),
          s = (a) => typeof a?.i18n == "string",
          i = (a) => a.startsWith("connect-"),
          o = (a) => a.startsWith("core:"),
          n = (a) => {
            const l = new Set(),
              d = (f, _) =>
                !t(f) || l.has(f)
                  ? []
                  : (l.add(f),
                    Object.entries(f).flatMap(([h, g]) => {
                      const v = [..._, h];
                      return s(g)
                        ? [{ propertyPath: v, key: g.i18n }]
                        : Array.isArray(g)
                          ? g.flatMap((m) => d(m, v))
                          : d(g, v);
                    }));
            return d(a, []);
          },
          r = (a) =>
            Object.entries(a).flatMap(([l, d]) =>
              !i(l) && !o(l) && d && Array.isArray(d) && d.length > 0 ? d.map((f) => [f, l]) : [],
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
      })(Ue)),
    Ue
  );
}
var Ne = {},
  jt;
function Cn() {
  return (jt || ((jt = 1), Object.defineProperty(Ne, "__esModule", { value: !0 })), Ne);
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
        const t = P;
        (t.__exportStar(Xr(), e),
          t.__exportStar(Sn(), e),
          t.__exportStar(Rn(), e),
          t.__exportStar(In(), e));
        var s = Yr();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return s.getTranslationValue;
          },
        });
        var i = jn();
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
          t.__exportStar(Cn(), e));
      })(xe)),
    xe
  );
}
var Ft;
function Fn() {
  if (Ft) return ee;
  ((Ft = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.getContext = void 0));
  const e = w(),
    t = Zr(),
    s = (0, e.getCallBridge)(),
    i = async () => {
      var o;
      const n = await s("getContext"),
        r = n?.locale;
      return (r && (n.locale = (o = (0, t.ensureLocale)(r)) !== null && o !== void 0 ? o : r), n);
    };
  return ((ee.getContext = i), ee);
}
var ne = {},
  At;
function An() {
  if (At) return ne;
  ((At = 1),
    Object.defineProperty(ne, "__esModule", { value: !0 }),
    (ne.changeWindowTitle = void 0));
  const e = w(),
    t = E(),
    s = (0, e.getCallBridge)(),
    i = async (o) => {
      try {
        await s("changeWindowTitle", o);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((ne.changeWindowTitle = i), ne);
}
var ie = {},
  Dt;
function Dn() {
  if (Dt) return ie;
  ((Dt = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.theme = void 0));
  const t = (0, w().getCallBridge)();
  return ((ie.theme = { enable: () => t("enableTheming") }), ie);
}
var oe = {},
  ae = {},
  Ge = {},
  B = {},
  Tt;
function $r() {
  if (Tt) return B;
  ((Tt = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.blobToBase64 = B.base64ToBlob = void 0));
  const e = (s, i) => {
    if (!s) return null;
    const o = s.includes(";base64") ? s.split(",")[1] : s,
      n = atob(o),
      r = new Array(n.length);
    for (let u = 0; u < n.length; u++) r[u] = n.charCodeAt(u);
    const c = new Uint8Array(r);
    return new Blob([c], { type: i });
  };
  B.base64ToBlob = e;
  const t = (s) =>
    new Promise((i, o) => {
      const n = new FileReader();
      ((n.onloadend = () => {
        i(n.result);
      }),
        (n.onerror = o),
        n.readAsDataURL(s));
    });
  return ((B.blobToBase64 = t), B);
}
var Bt;
function Tn() {
  return (
    Bt ||
      ((Bt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = $r(),
          s = (a) => {
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
          o = (a) => (0, t.base64ToBlob)(a.data, a.type),
          n = async (a) => {
            if (a instanceof Blob) return { ...(await i(a)), __isBlobData: !0 };
            if (Array.isArray(a))
              return Promise.all(a.map((l) => (0, e.serialiseBlobsInPayload)(l)));
            if (a && s(a)) {
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
          if (a && s(a) && "__isBlobData" in a) {
            const l = a;
            return o({ data: l.data, type: l.type });
          }
          if (Array.isArray(a)) return a.map((l) => (0, e.deserialiseBlobsInPayload)(l));
          if (a && s(a)) {
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
              : a && s(a)
                ? Object.values(a).some((l) => (0, e.containsBlobs)(l))
                : !1;
        e.containsBlobs = c;
        const u = (a) =>
          a && s(a) && "__isBlobData" in a
            ? !0
            : Array.isArray(a)
              ? a.some((l) => (0, e.containsSerialisedBlobs)(l))
              : a && s(a)
                ? Object.values(a).some((l) => (0, e.containsSerialisedBlobs)(l))
                : !1;
        e.containsSerialisedBlobs = u;
      })(Ge)),
    Ge
  );
}
var kt;
function en() {
  if (kt) return ae;
  ((kt = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.events = void 0));
  const e = w(),
    t = Tn(),
    s = (0, e.getCallBridge)(),
    i = async (n, r) => {
      let c = r;
      return (
        (0, t.containsBlobs)(r) && (c = await (0, t.serialiseBlobsInPayload)(r)),
        s("emit", { event: n, payload: c })
      );
    },
    o = (n, r) =>
      s("on", {
        event: n,
        callback: (u) => {
          let a = u;
          return (
            (0, t.containsSerialisedBlobs)(u) && (a = (0, t.deserialiseBlobsInPayload)(u)),
            r(a)
          );
        },
      });
  return ((ae.events = { emit: i, on: o }), ae);
}
var qt;
function Bn() {
  if (qt) return oe;
  ((qt = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.emitReadyEvent = void 0));
  const e = en(),
    t = tn(),
    s = "EXTENSION_READY",
    i = async () => {
      const o = await t.view.getContext();
      await e.events.emit(s, { localId: o.localId });
    };
  return ((oe.emitReadyEvent = i), oe);
}
var Mt;
function tn() {
  if (Mt) return W;
  ((Mt = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.view = void 0));
  const e = mn(),
    t = wn(),
    s = En(),
    i = On(),
    o = Pn(),
    n = Fn(),
    r = An(),
    c = Dn(),
    u = Bn();
  return (
    (W.view = {
      submit: e.submit,
      close: t.close,
      open: s.open,
      refresh: i.refresh,
      createHistory: o.createHistory,
      getContext: n.getContext,
      theme: c.theme,
      changeWindowTitle: r.changeWindowTitle,
      emitReadyEvent: u.emitReadyEvent,
    }),
    W
  );
}
var xt;
function it() {
  return (
    xt ||
      ((xt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(tn(), e));
      })(Me)),
    Me
  );
}
var ze = {},
  se = {},
  Lt;
function kn() {
  if (Lt) return se;
  ((Lt = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.router = void 0));
  const t = (0, w().getCallBridge)(),
    s = async (r) => {
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
    o = (r) => {
      if (typeof r == "string") return t("navigate", { url: r, type: "new-tab" });
      if (!r?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...r, type: "new-tab" });
    },
    n = async () => t("reload");
  return ((se.router = { getUrl: s, navigate: i, open: o, reload: n }), se);
}
var Ut;
function qn() {
  return (
    Ut ||
      ((Ut = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(kn(), e));
      })(ze)),
    ze
  );
}
var Ve = {},
  ue = {},
  Nt;
function Mn() {
  if (Nt) return ue;
  ((Nt = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.Modal = void 0));
  const e = w(),
    t = E(),
    s = (0, e.getCallBridge)(),
    i = () => {};
  class o {
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
  return ((ue.Modal = o), ue);
}
var Gt;
function xn() {
  return (
    Gt ||
      ((Gt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Mn(), e));
      })(Ve)),
    Ve
  );
}
var R = {},
  le = {},
  zt;
function Ln() {
  if (zt) return le;
  ((zt = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.productFetchApi = void 0));
  const e = $r(),
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
        u = new Request("", { body: c, method: n?.method, headers: n?.headers }),
        a = Object.fromEntries(u.headers.entries());
      return {
        body: u.method !== "GET" ? await u.text() : null,
        headers: new Headers(a),
        isMultipartFormData: r,
      };
    },
    o = (n) => {
      const r = async (c, u, a) => {
        const l = s(a),
          { body: d, headers: f, isMultipartFormData: _ } = await i(l);
        f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
        const h = {
            product: c,
            restPath: u,
            fetchRequestInit: { ...l, body: d, headers: [...f.entries()] },
            isMultipartFormData: _,
          },
          {
            body: g,
            headers: v,
            statusText: m,
            status: y,
            isAttachment: O,
          } = await n("fetchProduct", h),
          p = O ? (0, e.base64ToBlob)(g, v["content-type"]) : g;
        return new Response(p || null, { headers: v, status: y, statusText: m });
      };
      return {
        requestConfluence: (c, u) => r("confluence", c, u),
        requestJira: (c, u) => r("jira", c, u),
        requestBitbucket: (c, u) => r("bitbucket", c, u),
      };
    };
  return ((le.productFetchApi = o), le);
}
var Vt;
function Un() {
  if (Vt) return R;
  Vt = 1;
  var e;
  (Object.defineProperty(R, "__esModule", { value: !0 }),
    (R.requestBitbucket = R.requestJira = R.requestConfluence = void 0));
  const t = w();
  return (
    (e = (0, Ln().productFetchApi)((0, t.getCallBridge)())),
    (R.requestConfluence = e.requestConfluence),
    (R.requestJira = e.requestJira),
    (R.requestBitbucket = e.requestBitbucket),
    R
  );
}
var He = {},
  ce = {},
  Ht;
function Nn() {
  if (Ht) return ce;
  ((Ht = 1), Object.defineProperty(ce, "__esModule", { value: !0 }), (ce.showFlag = void 0));
  const e = w(),
    t = E(),
    s = (0, e.getCallBridge)(),
    i = (o) => {
      var n;
      if (!o.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const r = s("showFlag", { ...o, type: (n = o.type) !== null && n !== void 0 ? n : "info" });
      return { close: async () => (await r, s("closeFlag", { id: o.id })) };
    };
  return ((ce.showFlag = i), ce);
}
var Kt;
function Gn() {
  return (
    Kt ||
      ((Kt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = Nn();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(He)),
    He
  );
}
var Ke = {},
  Jt;
function zn() {
  return (
    Jt ||
      ((Jt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(en(), e));
      })(Ke)),
    Ke
  );
}
var Je = {},
  de = {},
  Wt;
function Vn() {
  if (Wt) return de;
  ((Wt = 1), Object.defineProperty(de, "__esModule", { value: !0 }), (de.realtime = void 0));
  const t = (0, w().getCallBridge)(),
    s = (r, c, u) => t("publishRealtimeChannel", { channelName: r, eventPayload: c, options: u }),
    i = (r, c, u) => t("subscribeRealtimeChannel", { channelName: r, onEvent: c, options: u }),
    o = (r, c, u) =>
      t("publishRealtimeChannel", { channelName: r, eventPayload: c, options: u, isGlobal: !0 }),
    n = (r, c, u) =>
      t("subscribeRealtimeChannel", { channelName: r, onEvent: c, options: u, isGlobal: !0 });
  return ((de.realtime = { publish: s, subscribe: i, publishGlobal: o, subscribeGlobal: n }), de);
}
var We = {},
  Qt;
function Hn() {
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
      })(We)),
    We
  );
}
var Xt;
function Kn() {
  return (
    Xt ||
      ((Xt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = Vn();
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
      })(Je)),
    Je
  );
}
var I = {},
  Yt;
function Jn() {
  if (Yt) return I;
  ((Yt = 1),
    Object.defineProperty(I, "__esModule", { value: !0 }),
    (I.createTranslationFunction = I.getTranslations = I.resetTranslationsCache = void 0));
  const e = Zr(),
    t = it(),
    s = {
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
    i = new e.TranslationsGetter(s),
    o = () => {
      i.reset();
    };
  I.resetTranslationsCache = o;
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
var Qe = {},
  Xe = {},
  Ye = {},
  fe = {},
  _e = {},
  Zt;
function rn() {
  return (
    Zt ||
      ((Zt = 1),
      Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (_e.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    _e
  );
}
var $t;
function Fe() {
  if ($t) return fe;
  (($t = 1),
    Object.defineProperty(fe, "__esModule", { value: !0 }),
    (fe.checkRestrictedEnvironment = void 0));
  const e = E(),
    t = it(),
    s = rn(),
    i = async () => {
      const { environmentType: o } = await t.view.getContext();
      if (o === "PRODUCTION")
        throw new e.BridgeAPIError(s.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((fe.checkRestrictedEnvironment = i), fe);
}
var er;
function Wn() {
  return (
    er ||
      ((er = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = Oe(),
          s = E(),
          i = Fe(),
          n = (0, w().getCallBridge)(),
          r = (l, d) => {
            const f = atob(l),
              _ = new Array(f.length);
            for (let g = 0; g < f.length; g++) _[g] = f.charCodeAt(g);
            const h = new Uint8Array(_);
            return new Blob([h], { type: d || "application/octet-stream" });
          },
          c = async (l) => {
            const d = l.size,
              f = await l.arrayBuffer(),
              _ = await crypto.subtle.digest("SHA-256", f),
              h = new Uint8Array(_),
              g = btoa(String.fromCharCode(...h));
            return { length: d, checksum: g, checksumType: "SHA256" };
          },
          u = async ({ functionKey: l, objects: d }) => {
            if (!l || l.length === 0)
              throw new s.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(d) || d.length === 0)
              throw new s.BridgeAPIError("objects array is required and must not be empty");
            const f = d.map((y, O) => {
                if (y instanceof Blob) return y;
                if (!(y && typeof y == "object" && "data" in y && typeof y.data == "string"))
                  throw new s.BridgeAPIError(
                    `Invalid object type at index ${O}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return r(y.data, y.mimeType);
                } catch {
                  throw new s.BridgeAPIError(
                    `Invalid base64 data at index ${O}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              _ = await Promise.all(f.map((y) => c(y))),
              h = await (0, t.invoke)(l, { allObjectMetadata: _ });
            if (!h || typeof h != "object")
              throw new s.BridgeAPIError("Invalid response from functionKey");
            const g = new Map(),
              v = new Map();
            return (
              f.forEach((y, O) => {
                const p = _[O];
                (g.set(p.checksum, y), v.set(p.checksum, O));
              }),
              Object.entries(h).map(([y, O]) => {
                const { key: p, checksum: F } = O,
                  j = g.get(F),
                  U = v.get(F);
                return U === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: p,
                        error: `Index not found for checksum ${F}`,
                      }),
                      index: -1,
                    }
                  : j
                    ? {
                        promise: (async () => {
                          try {
                            const A = await fetch(y, {
                              method: "PUT",
                              body: j,
                              headers: {
                                "Content-Type": j.type || "application/octet-stream",
                                "Content-Length": j.size.toString(),
                              },
                            });
                            return {
                              success: A.ok,
                              key: p,
                              status: A.status,
                              error: A.ok ? void 0 : `Upload failed with status ${A.status}`,
                            };
                          } catch (A) {
                            return {
                              success: !1,
                              key: p,
                              status: 503,
                              error: A instanceof Error ? A.message : "Upload failed",
                            };
                          }
                        })(),
                        index: U,
                        objectType: j.type,
                        objectSize: j.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: p,
                          error: `Blob not found for checksum ${F}`,
                        }),
                        index: U,
                      };
              })
            );
          };
        e.createUploadPromises = u;
        const a = async ({ functionKey: l, objects: d }) => {
          (await (0, i.checkRestrictedEnvironment)(),
            n("trackObjectStoreAction", { action: "upload" }));
          const f = await (0, e.createUploadPromises)({ functionKey: l, objects: d });
          return await Promise.all(f.map((h) => h.promise));
        };
        e.upload = a;
      })(Ye)),
    Ye
  );
}
var he = {},
  tr;
function Qn() {
  if (tr) return he;
  ((tr = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.deleteObjects = void 0));
  const e = Oe(),
    t = E(),
    s = Fe(),
    o = (0, w().getCallBridge)(),
    n = async ({ functionKey: r, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        o("trackObjectStoreAction", { action: "delete" }),
        !r || r.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to delete objects");
      if (!Array.isArray(c) || c.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      await Promise.all(
        c.map(async (u) => {
          await (0, e.invoke)(r, { key: u });
        }),
      );
    };
  return ((he.deleteObjects = n), he);
}
var ge = {},
  rr;
function Xn() {
  if (rr) return ge;
  ((rr = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.download = void 0));
  const e = Oe(),
    t = E(),
    s = Fe(),
    o = (0, w().getCallBridge)(),
    n = async ({ functionKey: r, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        o("trackObjectStoreAction", { action: "download" }),
        !r || r.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(c) || c.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      const u = await (0, e.invoke)(r, { keys: c });
      if (!u || typeof u != "object")
        throw new t.BridgeAPIError("Invalid response from functionKey");
      const a = Object.entries(u).map(async ([d, f]) => {
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
      return await Promise.all(a);
    };
  return ((ge.download = n), ge);
}
var ve = {},
  nr;
function Yn() {
  if (nr) return ve;
  ((nr = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.getMetadata = void 0));
  const e = Oe(),
    t = E(),
    s = Fe(),
    o = (0, w().getCallBridge)(),
    n = async ({ functionKey: r, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        o("trackObjectStoreAction", { action: "getMetadata" }),
        !r || r.length === 0)
      )
        throw new t.BridgeAPIError(
          "functionKey is required to filter and generate object metadata",
        );
      if (!Array.isArray(c) || c.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      return await Promise.all(
        c.map(async (a) => {
          const l = await (0, e.invoke)(r, { key: a });
          return !l || typeof l != "object"
            ? { key: a, error: "Invalid response from functionKey" }
            : l;
        }),
      );
    };
  return ((ve.getMetadata = n), ve);
}
var ir;
function Zn() {
  return (
    ir ||
      ((ir = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = Wn();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const s = Qn(),
          i = Xn(),
          o = Yn();
        e.objectStore = {
          upload: t.upload,
          download: i.download,
          getMetadata: o.getMetadata,
          delete: s.deleteObjects,
        };
      })(Xe)),
    Xe
  );
}
var or;
function $n() {
  return (
    or ||
      ((or = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = P;
        (t.__exportStar(Zn(), e), t.__exportStar(rn(), e));
      })(Qe)),
    Qe
  );
}
var Ze = {},
  pe = {},
  k = {},
  M = {},
  Pe = {},
  ar;
function ei() {
  if (ar) return Pe;
  ((ar = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }));
  const e = C();
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
    setValues(i, o) {
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
            i.source && r.user && this._setWarningState(o, r),
            e.SDKFlags.setFlags(this._sdkKey, (n = r.sdk_flags) !== null && n !== void 0 ? n : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(i) {
      var o;
      return this._getDetailedStoreResult(
        (o = this._values) === null || o === void 0 ? void 0 : o.feature_gates,
        i,
      );
    }
    getConfig(i) {
      var o;
      return this._getDetailedStoreResult(
        (o = this._values) === null || o === void 0 ? void 0 : o.dynamic_configs,
        i,
      );
    }
    getLayer(i) {
      var o;
      return this._getDetailedStoreResult(
        (o = this._values) === null || o === void 0 ? void 0 : o.layer_configs,
        i,
      );
    }
    getParamStore(i) {
      var o;
      return this._getDetailedStoreResult(
        (o = this._values) === null || o === void 0 ? void 0 : o.param_stores,
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
    _extractBootstrapMetadata(i, o) {
      if (i !== "Bootstrap") return null;
      const n = {};
      return (
        o.user && (n.user = o.user),
        o.sdkInfo && (n.generatorSDKInfo = o.sdkInfo),
        (n.lcut = o.time),
        n
      );
    }
    _getDetailedStoreResult(i, o) {
      let n = null;
      return (
        i && (n = i[o] ? i[o] : i[(0, e._DJB2)(o)]),
        { result: n, details: this._getDetails(n == null) }
      );
    }
    _setWarningState(i, o) {
      var n, r;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((n = i.customIDs) === null || n === void 0 ? void 0 : n.stableID) !== c &&
        ((!((r = i.customIDs) === null || r === void 0) && r.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in o) {
        const u = o.user;
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
      var o, n;
      const r = this.getCurrentSourceDetails();
      let c = r.reason;
      const u = (o = r.warnings) !== null && o !== void 0 ? o : [];
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
  return ((Pe.default = t), Pe);
}
var x = {},
  ye = {},
  sr;
function ti() {
  if (sr) return ye;
  ((sr = 1),
    Object.defineProperty(ye, "__esModule", { value: !0 }),
    (ye._resolveDeltasResponse = void 0));
  const e = C(),
    t = 2;
  function s(r, c) {
    const u = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!u) return { hadBadDeltaChecksum: !0 };
    const a = i(r, u),
      l = o(a),
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
  ye._resolveDeltasResponse = s;
  function i(r, c) {
    return Object.assign(Object.assign(Object.assign({}, r), c), {
      feature_gates: Object.assign(Object.assign({}, r.feature_gates), c.feature_gates),
      layer_configs: Object.assign(Object.assign({}, r.layer_configs), c.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, r.dynamic_configs), c.dynamic_configs),
    });
  }
  function o(r) {
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
  return ye;
}
var ur;
function nn() {
  if (ur) return x;
  ur = 1;
  var e =
    (x && x.__awaiter) ||
    function (o, n, r, c) {
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
          } catch (g) {
            l(g);
          }
        }
        function f(h) {
          try {
            _(c.throw(h));
          } catch (g) {
            l(g);
          }
        }
        function _(h) {
          h.done ? a(h.value) : u(h.value).then(d, f);
        }
        _((c = c.apply(o, n || [])).next());
      });
    };
  Object.defineProperty(x, "__esModule", { value: !0 });
  const t = C(),
    s = ti();
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
        var l, d, f, _, h, g;
        const v = r ? (0, t._typedJsonParse)(r, "has_updates", "InitializeResponse") : null;
        let m = {
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
        if (v?.has_updates) {
          const y =
            v?.hash_used !==
            ((g =
              (h = (_ = this._option) === null || _ === void 0 ? void 0 : _.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && g !== void 0
              ? g
              : "djb2");
          m = Object.assign(Object.assign({}, m), {
            sinceTime: a && !y ? v.time : 0,
            previousDerivedFields: "derived_fields" in v && a ? v.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: v.full_checksum,
            partialUserMatchSinceTime: y ? 0 : v.time,
          });
        }
        return this._fetchEvaluations(n, v, m, c);
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
        const f = (0, s._resolveDeltasResponse)(r, d.body);
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
  return ((x.default = i), x);
}
var be = {},
  lr;
function ri() {
  if (lr) return be;
  ((lr = 1),
    Object.defineProperty(be, "__esModule", { value: !0 }),
    (be._makeParamStoreGetter = void 0));
  const e = C(),
    t = { disableExposureLog: !0 };
  function s(l) {
    return l == null || l.disableExposureLog === !1;
  }
  function i(l, d) {
    return d != null && !(0, e._isTypeMatch)(l, d);
  }
  function o(l, d) {
    return l.value;
  }
  function n(l, d, f) {
    return l.getFeatureGate(d.gate_name, s(f) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function r(l, d, f, _) {
    const g = l.getDynamicConfig(d.config_name, s(_) ? void 0 : t).get(d.param_name);
    return i(g, f) ? f : g;
  }
  function c(l, d, f, _) {
    const g = l.getExperiment(d.experiment_name, s(_) ? void 0 : t).get(d.param_name);
    return i(g, f) ? f : g;
  }
  function u(l, d, f, _) {
    const g = l.getLayer(d.layer_name, s(_) ? void 0 : t).get(d.param_name);
    return i(g, f) ? f : g;
  }
  function a(l, d, f) {
    return (_, h) => {
      if (d == null) return h;
      const g = d[_];
      if (g == null || (h != null && (0, e._typeOf)(h) !== g.param_type)) return h;
      switch (g.ref_type) {
        case "static":
          return o(g);
        case "gate":
          return n(l, g, f);
        case "dynamic_config":
          return r(l, g, h, f);
        case "experiment":
          return c(l, g, h, f);
        case "layer":
          return u(l, g, h, f);
        default:
          return h;
      }
    };
  }
  return ((be._makeParamStoreGetter = a), be);
}
var q = {},
  cr;
function ni() {
  if (cr) return q;
  cr = 1;
  var e =
    (q && q.__awaiter) ||
    function (o, n, r, c) {
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
          } catch (g) {
            l(g);
          }
        }
        function f(h) {
          try {
            _(c.throw(h));
          } catch (g) {
            l(g);
          }
        }
        function _(h) {
          h.done ? a(h.value) : u(h.value).then(d, f);
        }
        _((c = c.apply(o, n || [])).next());
      });
    };
  (Object.defineProperty(q, "__esModule", { value: !0 }),
    (q.StatsigEvaluationsDataAdapter = void 0));
  const t = C(),
    s = nn();
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
var dr;
function ii() {
  if (dr) return M;
  dr = 1;
  var e =
    (M && M.__awaiter) ||
    function (c, u, a, l) {
      function d(f) {
        return f instanceof a
          ? f
          : new a(function (_) {
              _(f);
            });
      }
      return new (a || (a = Promise))(function (f, _) {
        function h(m) {
          try {
            v(l.next(m));
          } catch (y) {
            _(y);
          }
        }
        function g(m) {
          try {
            v(l.throw(m));
          } catch (y) {
            _(y);
          }
        }
        function v(m) {
          m.done ? f(m.value) : d(m.value).then(h, g);
        }
        v((l = l.apply(c, u || [])).next());
      });
    };
  Object.defineProperty(M, "__esModule", { value: !0 });
  const t = C(),
    s = ei(),
    i = nn(),
    o = ri(),
    n = ni();
  let r = class rt extends t.StatsigClientBase {
    static instance(u) {
      const a = (0, t._getStatsigGlobal)().instance(u);
      return a instanceof rt
        ? a
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new rt(u ?? "", {}));
    }
    constructor(u, a, l = null) {
      var d, f;
      t.SDKType._setClientType(u, "javascript-client");
      const _ = new i.default(l, (g) => {
        this.$emt(g);
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
        (this._store = new s.default(u)),
        (this._network = _),
        (this._user = this._configureUser(a, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (f = l?.plugins) !== null && f !== void 0 ? f : [];
      for (const g of h) g.bind(this);
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
        g =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, a),
        v = g ?? h;
      return (
        this._enqueueExposure(
          u,
          (0, t._createGateExposure)(this._user, v, this._store.getExposureMapping()),
          a,
        ),
        this.$emt({ name: "gate_evaluation", gate: v }),
        v
      );
    }
    _getDynamicConfigImpl(u, a) {
      var l, d;
      const { result: f, details: _ } = this._store.getConfig(u),
        h = (0, t._makeDynamicConfig)(u, _, f),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, this._user, a),
        v = g ?? h;
      return (
        this._enqueueExposure(
          u,
          (0, t._createConfigExposure)(this._user, v, this._store.getExposureMapping()),
          a,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: v }),
        v
      );
    }
    _getExperimentImpl(u, a) {
      var l, d, f, _;
      const { result: h, details: g } = this._store.getConfig(u),
        v = (0, t._makeExperiment)(u, g, h);
      v.__evaluation != null &&
        (v.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = v.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const m =
          (_ =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || _ === void 0
            ? void 0
            : _.call(f, v, this._user, a),
        y = m ?? v;
      return (
        this._enqueueExposure(
          u,
          (0, t._createConfigExposure)(this._user, y, this._store.getExposureMapping()),
          a,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: y }),
        y
      );
    }
    _getLayerImpl(u, a) {
      var l, d, f;
      const { result: _, details: h } = this._store.getLayer(u),
        g = (0, t._makeLayer)(u, h, _),
        v =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, g, this._user, a);
      a?.disableExposureLog && this._logger.incrementNonExposureCount(u);
      const m = (0, t._mergeOverride)(
        g,
        v,
        (f = v?.__value) !== null && f !== void 0 ? f : g.__value,
        (y) => {
          a?.disableExposureLog ||
            this._enqueueExposure(
              u,
              (0, t._createLayerParameterExposure)(
                this._user,
                m,
                y,
                this._store.getExposureMapping(),
              ),
              a,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: m }), m);
    }
    _getParameterStoreImpl(u, a) {
      var l, d;
      const { result: f, details: _ } = this._store.getParamStore(u);
      this._logger.incrementNonExposureCount(u);
      const h = {
          name: u,
          details: _,
          __configuration: f,
          get: (0, o._makeParamStoreGetter)(this, f, a),
        },
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, a);
      return (
        g != null &&
          ((h.__configuration = g.config),
          (h.details = g.details),
          (h.get = (0, o._makeParamStoreGetter)(this, g.config, a))),
        h
      );
    }
  };
  return ((M.default = r), M);
}
var fr;
function oi() {
  return (
    fr ||
      ((fr = 1),
      (function (e) {
        var t =
            (k && k.__createBinding) ||
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
          s =
            (k && k.__exportStar) ||
            function (r, c) {
              for (var u in r)
                u !== "default" && !Object.prototype.hasOwnProperty.call(c, u) && t(c, r, u);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const i = C(),
          o = ii();
        ((e.StatsigClient = o.default), s(C(), e));
        const n = Object.assign((0, i._getStatsigGlobal)(), { StatsigClient: o.default });
        e.default = n;
      })(k)),
    k
  );
}
var me = {},
  we = {},
  _r;
function ai() {
  if (_r) return we;
  ((_r = 1),
    Object.defineProperty(we, "__esModule", { value: !0 }),
    (we.initFeatureFlags = void 0));
  const e = w(),
    t = E(),
    s = Ce(),
    i = 500,
    o = 1e3 * 25,
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
    (we.initFeatureFlags = (0, s.withRateLimiter)(
      c,
      i,
      o,
      `Feature flags initialisation calls are rate limited at ${i}req/${o / 1e3}s`,
    )),
    we
  );
}
var hr;
function si() {
  if (hr) return me;
  ((hr = 1),
    Object.defineProperty(me, "__esModule", { value: !0 }),
    (me.ForgeDataAdapter = void 0));
  const e = ai();
  class t {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(i, o, n) {
      var r;
      if (i) return i;
      this.environment = ((r = this.options) === null || r === void 0 ? void 0 : r.environment) || {
        tier: "development",
      };
      const c = { ...o, statsigEnvironment: this.environment },
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
    async attach(i, o, n) {
      this.options = o;
    }
    async prefetchData() {}
    async setData(i) {}
    async setDataLegacy(i) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((me.ForgeDataAdapter = t), me);
}
var $e = {},
  gr;
function on() {
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
      })($e)),
    $e
  );
}
var Ee = {},
  vr;
function ui() {
  if (vr) return Ee;
  ((vr = 1),
    Object.defineProperty(Ee, "__esModule", { value: !0 }),
    (Ee.trackFeatureFlagEvent = void 0));
  const e = w(),
    t = E(),
    s = on(),
    i = Ce(),
    o = 500,
    n = 1e3 * 25,
    r = (0, e.getCallBridge)(),
    c = (a) => {
      if (!a || !a.type || !a.properties)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(a.type.toUpperCase() in s.FeatureFlagEventType))
        throw new t.BridgeAPIError("Event type is not supported");
      if (Object.values(a).some((l) => typeof l == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    u = (a) => (c(a), r("trackFeatureFlagEvent", a));
  return (
    (Ee.trackFeatureFlagEvent = (0, i.withRateLimiter)(
      u,
      o,
      n,
      `Feature flags calls are rate limited at ${o}req/${n / 1e3}s`,
    )),
    Ee
  );
}
var pr;
function li() {
  if (pr) return pe;
  ((pr = 1),
    Object.defineProperty(pe, "__esModule", { value: !0 }),
    (pe.ForgeFeatureFlags = void 0));
  const e = oi(),
    t = si(),
    s = on(),
    i = ui();
  class o {
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
        type: s.FeatureFlagEventType.CHECKFLAG,
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
  return ((pe.ForgeFeatureFlags = o), pe);
}
var yr;
function ci() {
  return (
    yr ||
      ((yr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = li();
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
var br;
function di() {
  return (
    br ||
      ((br = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = P;
        var s = gn();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return s.NavigationTarget;
          },
        }),
          t.__exportStar(Oe(), e),
          t.__exportStar(bn(), e),
          t.__exportStar(it(), e),
          t.__exportStar(qn(), e),
          t.__exportStar(xn(), e),
          t.__exportStar(Un(), e),
          t.__exportStar(Gn(), e),
          t.__exportStar(zn(), e),
          t.__exportStar(Kn(), e),
          (e.i18n = t.__importStar(Jn())),
          t.__exportStar($n(), e),
          t.__exportStar(ci(), e));
      })(De)),
    De
  );
}
var Se = di();
function fi() {
  const [e, t] = D.useState(""),
    [s, i] = D.useState(""),
    [o, n] = D.useState(""),
    [r, c] = D.useState(!1),
    [u, a] = D.useState(!1),
    [l, d] = D.useState(!1),
    [f, _] = D.useState([]),
    h = (p, F, j) => {
      _((U) => [{ id: Date.now(), query: p, result: F, timestamp: new Date(), type: j }, ...U]);
    },
    g = async () => {
      try {
        (n(""), c(!0));
        const p = await Se.invoke("execute", { query: e });
        (i(p), h(e, p, "SQL"));
      } catch (p) {
        (n(p instanceof Error ? p.message : "An error occurred"), i(""));
      } finally {
        c(!1);
      }
    },
    v = async () => {
      try {
        (n(""), a(!0));
        const p = await Se.invoke("executeDDL", { query: e });
        (i(p), h(e, p, "DDL"));
      } catch (p) {
        (n(p instanceof Error ? p.message : "An error occurred"), i(""));
      } finally {
        a(!1);
      }
    },
    m = async () => {
      try {
        (n(""), d(!0));
        const p = await Se.invoke("executeCommand", { command: e });
        (i(p), h(e, p, "COMMAND"));
      } catch (p) {
        (n(p instanceof Error ? p.message : "An error occurred"), i(""));
      } finally {
        d(!1);
      }
    },
    y = (p) =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1,
      }).format(p),
    O = (p) => {
      switch (p) {
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
  return b.jsxs("div", {
    style: { padding: "20px", maxWidth: "800px", margin: "0 auto" },
    children: [
      b.jsx("h1", { children: "SQL Query Executor" }),
      b.jsxs("div", {
        style: { marginBottom: "20px" },
        children: [
          b.jsx("textarea", {
            value: e,
            onChange: (p) => t(p.target.value),
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
          b.jsxs("div", {
            style: { display: "flex", gap: "10px" },
            children: [
              b.jsx("button", {
                onClick: g,
                disabled: r || u || l,
                style: {
                  padding: "10px 20px",
                  backgroundColor: r ? "#0052CC80" : "#0052CC",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: r ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: r
                  ? b.jsxs(b.Fragment, {
                      children: [
                        b.jsx("div", {
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
              b.jsx("button", {
                onClick: v,
                disabled: r || u || l,
                style: {
                  padding: "10px 20px",
                  backgroundColor: u ? "#36B37E80" : "#36B37E",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: u ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: u
                  ? b.jsxs(b.Fragment, {
                      children: [
                        b.jsx("div", {
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
              b.jsx("button", {
                onClick: m,
                disabled: r || u || l,
                style: {
                  padding: "10px 20px",
                  backgroundColor: l ? "#FF563080" : "#FF5630",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: l ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: l
                  ? b.jsxs(b.Fragment, {
                      children: [
                        b.jsx("div", {
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
      o &&
        b.jsx("div", {
          style: {
            padding: "10px",
            backgroundColor: "#FFEBE6",
            border: "1px solid #DE350B",
            borderRadius: "3px",
            marginBottom: "20px",
            color: "#DE350B",
          },
          children: o,
        }),
      s &&
        b.jsxs("div", {
          children: [
            b.jsx("h3", { children: "Result:" }),
            b.jsx("pre", {
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
      f.length > 0 &&
        b.jsxs("div", {
          style: { marginTop: "30px" },
          children: [
            b.jsx("h2", { children: "Query History" }),
            b.jsx("div", {
              style: { display: "flex", flexDirection: "column", gap: "20px" },
              children: f.map((p) =>
                b.jsxs(
                  "div",
                  {
                    style: { border: "1px solid #DFE1E6", borderRadius: "3px", overflow: "hidden" },
                    children: [
                      b.jsxs("div", {
                        style: {
                          padding: "10px",
                          backgroundColor: O(p.type),
                          color: "white",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                        children: [
                          b.jsxs("span", {
                            style: { fontWeight: "bold" },
                            children: [p.type, " Query"],
                          }),
                          b.jsx("span", { children: y(p.timestamp) }),
                        ],
                      }),
                      b.jsxs("div", {
                        style: { padding: "15px" },
                        children: [
                          b.jsxs("div", {
                            style: { marginBottom: "10px" },
                            children: [
                              b.jsx("h4", { style: { margin: "0 0 5px 0" }, children: "Query:" }),
                              b.jsx("pre", {
                                style: {
                                  backgroundColor: "#F4F5F7",
                                  padding: "10px",
                                  borderRadius: "3px",
                                  margin: 0,
                                  overflow: "auto",
                                  maxHeight: "200px",
                                },
                                children: p.query,
                              }),
                            ],
                          }),
                          b.jsxs("div", {
                            children: [
                              b.jsx("h4", { style: { margin: "0 0 5px 0" }, children: "Result:" }),
                              b.jsx("pre", {
                                style: {
                                  backgroundColor: "#F4F5F7",
                                  padding: "10px",
                                  borderRadius: "3px",
                                  margin: 0,
                                  overflow: "auto",
                                  maxHeight: "200px",
                                },
                                children: p.result,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  p.id,
                ),
              ),
            }),
          ],
        }),
      b.jsx("style", {
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
const _i = document.getElementById("root"),
  hi = an.createRoot(_i),
  mr = () => {
    hi.render(b.jsx(fi, {}));
  };
Se.view.theme
  .enable()
  .then(() => {
    mr();
  })
  .catch((e) => {
    (console.error(e.message), mr());
  });
