import { r as vn, c as ti } from "./react-dom-vendor-BOEB6BZs.js";
import { g as ri, r as D } from "./client-core-vendor-D3kwrIkk.js";
import { r as ni } from "./lodash-vendor-DXG1mS21.js";
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
var At;
function ii() {
  if (At) return K;
  At = 1;
  var e = vn(),
    r = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(l, c, i) {
    var u,
      f = {},
      h = null,
      d = null;
    (i !== void 0 && (h = "" + i),
      c.key !== void 0 && (h = "" + c.key),
      c.ref !== void 0 && (d = c.ref));
    for (u in c) s.call(c, u) && !a.hasOwnProperty(u) && (f[u] = c[u]);
    if (l && l.defaultProps) for (u in ((c = l.defaultProps), c)) f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: r, type: l, key: h, ref: d, props: f, _owner: n.current };
  }
  return ((K.Fragment = o), (K.jsx = t), (K.jsxs = t), K);
}
var qt;
function ai() {
  return (qt || ((qt = 1), (Ze.exports = ii())), Ze.exports);
}
var w = ai(),
  I = vn(),
  $e = {},
  Ot = function (e, r) {
    return (
      (Ot =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (o, s) {
            o.__proto__ = s;
          }) ||
        function (o, s) {
          for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (o[n] = s[n]);
        }),
      Ot(e, r)
    );
  };
function hn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Ot(e, r);
  function o() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((o.prototype = r.prototype), new o());
}
var ze = function () {
  return (
    (ze =
      Object.assign ||
      function (r) {
        for (var o, s = 1, n = arguments.length; s < n; s++) {
          o = arguments[s];
          for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a]);
        }
        return r;
      }),
    ze.apply(this, arguments)
  );
};
function gn(e, r) {
  var o = {};
  for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && r.indexOf(s) < 0 && (o[s] = e[s]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, s = Object.getOwnPropertySymbols(e); n < s.length; n++)
      r.indexOf(s[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, s[n]) &&
        (o[s[n]] = e[s[n]]);
  return o;
}
function pn(e, r, o, s) {
  var n = arguments.length,
    a = n < 3 ? r : s === null ? (s = Object.getOwnPropertyDescriptor(r, o)) : s,
    t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    a = Reflect.decorate(e, r, o, s);
  else
    for (var l = e.length - 1; l >= 0; l--)
      (t = e[l]) && (a = (n < 3 ? t(a) : n > 3 ? t(r, o, a) : t(r, o)) || a);
  return (n > 3 && a && Object.defineProperty(r, o, a), a);
}
function yn(e, r) {
  return function (o, s) {
    r(o, s, e);
  };
}
function mn(e, r, o, s, n, a) {
  function t(g) {
    if (g !== void 0 && typeof g != "function") throw new TypeError("Function expected");
    return g;
  }
  for (
    var l = s.kind,
      c = l === "getter" ? "get" : l === "setter" ? "set" : "value",
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
    var v = (0, o[d])(l === "accessor" ? { get: u.get, set: u.set } : u[c], p);
    if (l === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      ((f = t(v.get)) && (u.get = f),
        (f = t(v.set)) && (u.set = f),
        (f = t(v.init)) && n.unshift(f));
    } else (f = t(v)) && (l === "field" ? n.unshift(f) : (u[c] = f));
  }
  (i && Object.defineProperty(i, s.name, u), (h = !0));
}
function bn(e, r, o) {
  for (var s = arguments.length > 2, n = 0; n < r.length; n++)
    o = s ? r[n].call(e, o) : r[n].call(e);
  return s ? o : void 0;
}
function wn(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function En(e, r, o) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: o ? "".concat(o, " ", r) : r })
  );
}
function On(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function Rn(e, r, o, s) {
  function n(a) {
    return a instanceof o
      ? a
      : new o(function (t) {
          t(a);
        });
  }
  return new (o || (o = Promise))(function (a, t) {
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
      u.done ? a(u.value) : n(u.value).then(l, c);
    }
    i((s = s.apply(e, r || [])).next());
  });
}
function Sn(e, r) {
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
var He = Object.create
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
function Pn(e, r) {
  for (var o in e) o !== "default" && !Object.prototype.hasOwnProperty.call(r, o) && He(r, e, o);
}
function Ke(e) {
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
function Pt(e, r) {
  var o = typeof Symbol == "function" && e[Symbol.iterator];
  if (!o) return e;
  var s = o.call(e),
    n,
    a = [],
    t;
  try {
    for (; (r === void 0 || r-- > 0) && !(n = s.next()).done; ) a.push(n.value);
  } catch (l) {
    t = { error: l };
  } finally {
    try {
      n && !n.done && (o = s.return) && o.call(s);
    } finally {
      if (t) throw t.error;
    }
  }
  return a;
}
function In() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(Pt(arguments[r]));
  return e;
}
function jn() {
  for (var e = 0, r = 0, o = arguments.length; r < o; r++) e += arguments[r].length;
  for (var s = Array(e), n = 0, r = 0; r < o; r++)
    for (var a = arguments[r], t = 0, l = a.length; t < l; t++, n++) s[n] = a[t];
  return s;
}
function An(e, r, o) {
  if (o || arguments.length === 2)
    for (var s = 0, n = r.length, a; s < n; s++)
      (a || !(s in r)) && (a || (a = Array.prototype.slice.call(r, 0, s)), (a[s] = r[s]));
  return e.concat(a || Array.prototype.slice.call(r));
}
function z(e) {
  return this instanceof z ? ((this.v = e), this) : new z(e);
}
function qn(e, r, o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = o.apply(e, r || []),
    n,
    a = [];
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
      ((n[d] = function (_) {
        return new Promise(function (v, g) {
          a.push([d, _, v, g]) > 1 || c(d, _);
        });
      }),
      p && (n[d] = p(n[d])));
  }
  function c(d, p) {
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
    c("next", d);
  }
  function f(d) {
    c("throw", d);
  }
  function h(d, p) {
    (d(p), a.shift(), a.length && c(a[0][0], a[0][1]));
  }
}
function Cn(e) {
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
function Mn(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    o;
  return r
    ? r.call(e)
    : ((e = typeof Ke == "function" ? Ke(e) : e[Symbol.iterator]()),
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
        return new Promise(function (l, c) {
          ((t = e[a](t)), n(l, c, t.done, t.value));
        });
      };
  }
  function n(a, t, l, c) {
    Promise.resolve(c).then(function (i) {
      a({ value: i, done: l });
    }, t);
  }
}
function Tn(e, r) {
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
          var o = [];
          for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (o[o.length] = s);
          return o;
        }),
      Rt(e)
    );
  };
function Bn(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var o = Rt(e), s = 0; s < o.length; s++) o[s] !== "default" && He(r, e, o[s]);
  return (oi(r, e), r);
}
function Dn(e) {
  return e && e.__esModule ? e : { default: e };
}
function Fn(e, r, o, s) {
  if (o === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !s : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? s : o === "a" ? s.call(e) : s ? s.value : r.get(e);
}
function kn(e, r, o, s, n) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (s === "a" ? n.call(e, o) : n ? (n.value = o) : r.set(e, o), o);
}
function Un(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function Nn(e, r, o) {
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
var si =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, o) {
        var s = new Error(o);
        return ((s.name = "SuppressedError"), (s.error = e), (s.suppressed = r), s);
      };
function Ln(e) {
  function r(a) {
    ((e.error = e.hasError ? new si(a, e.error, "An error was suppressed during disposal.") : a),
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
function xn(e, r) {
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
const ui = {
    __extends: hn,
    __assign: ze,
    __rest: gn,
    __decorate: pn,
    __param: yn,
    __esDecorate: mn,
    __runInitializers: bn,
    __propKey: wn,
    __setFunctionName: En,
    __metadata: On,
    __awaiter: Rn,
    __generator: Sn,
    __createBinding: He,
    __exportStar: Pn,
    __values: Ke,
    __read: Pt,
    __spread: In,
    __spreadArrays: jn,
    __spreadArray: An,
    __await: z,
    __asyncGenerator: qn,
    __asyncDelegator: Cn,
    __asyncValues: Mn,
    __makeTemplateObject: Tn,
    __importStar: Bn,
    __importDefault: Dn,
    __classPrivateFieldGet: Fn,
    __classPrivateFieldSet: kn,
    __classPrivateFieldIn: Un,
    __addDisposableResource: Nn,
    __disposeResources: Ln,
    __rewriteRelativeImportExtension: xn,
  },
  li = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Nn,
        get __assign() {
          return ze;
        },
        __asyncDelegator: Cn,
        __asyncGenerator: qn,
        __asyncValues: Mn,
        __await: z,
        __awaiter: Rn,
        __classPrivateFieldGet: Fn,
        __classPrivateFieldIn: Un,
        __classPrivateFieldSet: kn,
        __createBinding: He,
        __decorate: pn,
        __disposeResources: Ln,
        __esDecorate: mn,
        __exportStar: Pn,
        __extends: hn,
        __generator: Sn,
        __importDefault: Dn,
        __importStar: Bn,
        __makeTemplateObject: Tn,
        __metadata: On,
        __param: yn,
        __propKey: wn,
        __read: Pt,
        __rest: gn,
        __rewriteRelativeImportExtension: xn,
        __runInitializers: bn,
        __setFunctionName: En,
        __spread: In,
        __spreadArray: An,
        __spreadArrays: jn,
        __values: Ke,
        default: ui,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  A = ri(li);
var H = {},
  Ct;
function ci() {
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
var Qe = {},
  et = {},
  J = {},
  W = {},
  Mt;
function S() {
  if (Mt) return W;
  ((Mt = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.BridgeAPIError = void 0));
  class e extends Error {}
  return ((W.BridgeAPIError = e), W);
}
var Tt;
function O() {
  if (Tt) return J;
  ((Tt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.getCallBridge = void 0));
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
  Bt;
function Je() {
  if (Bt) return X;
  ((Bt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.withRateLimiter = void 0));
  const e = S(),
    r = (o, s, n, a) => {
      let t = Date.now(),
        l = 0;
      return async (...c) => {
        const i = Date.now();
        if ((i - t > n && ((t = i), (l = 0)), l >= s))
          throw new e.BridgeAPIError(a || "Too many invocations.");
        return ((l = l + 1), o(...c));
      };
    };
  return ((X.withRateLimiter = r), X);
}
var Dt;
function di() {
  return (
    Dt ||
      ((Dt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = O(),
          o = S(),
          s = Je(),
          n = (0, r.getCallBridge)(),
          a = (c) => {
            if (c && Object.values(c).some((i) => typeof i == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (c, i) => {
            if (typeof c != "string") throw new o.BridgeAPIError("functionKey must be a string!");
            return (a(i), n("invoke", { functionKey: c, payload: i }));
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
      })(et)),
    et
  );
}
var Ft;
function xe() {
  return (
    Ft ||
      ((Ft = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), A.__exportStar(di(), e));
      })(Qe)),
    Qe
  );
}
var tt = {},
  Y = {},
  rt = {},
  kt;
function Gn() {
  return (
    kt ||
      ((kt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = O(),
          o = S(),
          s = Je(),
          n = 500,
          a = 25,
          t = 1e3 * a;
        (function (f) {
          ((f.REMOTE = "Remote"), (f.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const l = (0, r.getCallBridge)(),
          c = (f) => {
            if (f && Object.values(f).some((h) => typeof h == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          i = (f) => async (h) => {
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
            const h = i(f);
            return (0, s.withRateLimiter)(
              h,
              n,
              t,
              `${f} invocation calls are rate limited at ${n}/${a}s`,
            );
          };
        e._invokeEndpointFn = u;
      })(rt)),
    rt
  );
}
var Ut;
function fi() {
  if (Ut) return Y;
  ((Ut = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.invokeRemote = void 0));
  const e = Gn(),
    r = (o) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(o);
  return ((Y.invokeRemote = r), Y);
}
var Z = {},
  Nt;
function _i() {
  if (Nt) return Z;
  ((Nt = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.invokeService = void 0));
  const e = Gn(),
    r = (o) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(o);
  return ((Z.invokeService = r), Z);
}
var Lt;
function vi() {
  return (
    Lt ||
      ((Lt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = A;
        (r.__exportStar(fi(), e), r.__exportStar(_i(), e));
      })(tt)),
    tt
  );
}
var nt = {},
  $ = {},
  Q = {},
  xt;
function hi() {
  if (xt) return Q;
  ((xt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.submit = void 0));
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
  Gt;
function gi() {
  if (Gt) return ee;
  ((Gt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.close = void 0));
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
  Vt;
function pi() {
  if (Vt) return te;
  ((Vt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.open = void 0));
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
  zt;
function yi() {
  if (zt) return re;
  ((zt = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.refresh = void 0));
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
  Kt;
function mi() {
  if (Kt) return ne;
  ((Kt = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.createHistory = void 0));
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
  it = {},
  C = {},
  Ht;
function Vn() {
  return (
    Ht ||
      ((Ht = 1),
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
  Jt;
function bi() {
  if (Jt) return F;
  ((Jt = 1),
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
        { fallback: l } = a;
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
      const a = await this.getI18nInfoConfig(),
        t = this.getLocaleLookupOrder(n, a);
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
      const { locales: t, fallback: l } = a,
        c = [n],
        i = l[n];
      return (
        i && Array.isArray(i) && i.length > 0 && c.push(...i),
        e(c, a.fallback.default),
        c.filter((u) => t.includes(u))
      );
    }
  }
  return ((F.TranslationsGetter = o), F);
}
var ae = {},
  at = {},
  Wt;
function zn() {
  return (
    Wt ||
      ((Wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const o = A.__importDefault(ni()),
          s = (a, t, l) => {
            const c = a[l];
            return c ? (0, e.getTranslationValueFromContent)(c, t) : null;
          };
        e.getTranslationValue = s;
        const n = (a, t) => {
          let l = a[t];
          if (!l) {
            const c = t.split(".");
            c.length > 1 && (l = (0, o.default)(a, c, null));
          }
          return typeof l == "string" ? l : null;
        };
        e.getTranslationValueFromContent = n;
      })(at)),
    at
  );
}
var Xt;
function wi() {
  if (Xt) return ae;
  ((Xt = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.Translator = void 0));
  const e = zn();
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
  Yt;
function Ei() {
  if (Yt) return oe;
  ((Yt = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.ensureLocale = void 0));
  const e = Vn(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    o = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    s = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (a, t) => {
        const [l] = t.split("-");
        return (a[l] || (a[l] = t), a);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    n = (a) => {
      const t = a.replace("_", "-");
      return r.has(t) ? t : (s[t] ?? o[t] ?? null);
    };
  return ((oe.ensureLocale = n), oe);
}
var ot = {},
  Zt;
function Oi() {
  return (
    Zt ||
      ((Zt = 1),
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
        const l = (i) => {
          const u = new Set();
          for (const f of (0, e.getI18nSupportedModuleEntries)(i)) {
            const h = a(f[0]);
            for (const { key: d } of h) u.add(d);
          }
          return u.size > 0 ? Array.from(u) : [];
        };
        e.extractI18nKeysFromModules = l;
        const c = (i) => {
          const u = [];
          for (const f of (0, e.getI18nSupportedModuleEntries)(i)) {
            const h = a(f[0]);
            for (const d of h) u.push({ moduleName: f[1], ...d });
          }
          return u;
        };
        e.extractI18nPropertiesFromModules = c;
      })(ot)),
    ot
  );
}
var st = {},
  $t;
function Ri() {
  return ($t || (($t = 1), Object.defineProperty(st, "__esModule", { value: !0 })), st);
}
var Qt;
function Kn() {
  return (
    Qt ||
      ((Qt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const r = A;
        (r.__exportStar(Vn(), e),
          r.__exportStar(bi(), e),
          r.__exportStar(wi(), e),
          r.__exportStar(Ei(), e));
        var o = zn();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return o.getTranslationValue;
          },
        });
        var s = Oi();
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
      })(it)),
    it
  );
}
var er;
function Si() {
  if (er) return ie;
  ((er = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.getContext = void 0));
  const e = O(),
    r = Kn(),
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
  tr;
function Pi() {
  if (tr) return se;
  ((tr = 1),
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
  rr;
function Ii() {
  if (rr) return ue;
  ((rr = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.theme = void 0));
  const r = (0, O().getCallBridge)();
  return ((ue.theme = { enable: () => r("enableTheming") }), ue);
}
var le = {},
  ce = {},
  ut = {},
  k = {},
  nr;
function Hn() {
  if (nr) return k;
  ((nr = 1),
    Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.blobToBase64 = k.base64ToBlob = void 0));
  const e = (o, s) => {
    if (!o) return null;
    const n = o.includes(";base64") ? o.split(",")[1] : o,
      a = atob(n),
      t = new Array(a.length);
    for (let c = 0; c < a.length; c++) t[c] = a.charCodeAt(c);
    const l = new Uint8Array(t);
    return new Blob([l], { type: s });
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
var ir;
function ji() {
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
        const r = Hn(),
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
        const l = (i) =>
          i instanceof Blob
            ? !0
            : Array.isArray(i)
              ? i.some((u) => (0, e.containsBlobs)(u))
              : i && o(i)
                ? Object.values(i).some((u) => (0, e.containsBlobs)(u))
                : !1;
        e.containsBlobs = l;
        const c = (i) =>
          i && o(i) && "__isBlobData" in i
            ? !0
            : Array.isArray(i)
              ? i.some((u) => (0, e.containsSerialisedBlobs)(u))
              : i && o(i)
                ? Object.values(i).some((u) => (0, e.containsSerialisedBlobs)(u))
                : !1;
        e.containsSerialisedBlobs = c;
      })(ut)),
    ut
  );
}
var ar;
function Jn() {
  if (ar) return ce;
  ((ar = 1), Object.defineProperty(ce, "__esModule", { value: !0 }), (ce.events = void 0));
  const e = O(),
    r = ji(),
    o = (0, e.getCallBridge)(),
    s = async (a, t) => {
      let l = t;
      return (
        (0, r.containsBlobs)(t) && (l = await (0, r.serialiseBlobsInPayload)(t)),
        o("emit", { event: a, payload: l })
      );
    },
    n = (a, t) =>
      o("on", {
        event: a,
        callback: (c) => {
          let i = c;
          return (
            (0, r.containsSerialisedBlobs)(c) && (i = (0, r.deserialiseBlobsInPayload)(c)),
            t(i)
          );
        },
      });
  return ((ce.events = { emit: s, on: n }), ce);
}
var or;
function Ai() {
  if (or) return le;
  ((or = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.emitReadyEvent = void 0));
  const e = Jn(),
    r = Zn(),
    o = "EXTENSION_READY",
    s = async () => {
      const n = await r.view.getContext();
      await e.events.emit(o, { localId: n.localId });
    };
  return ((le.emitReadyEvent = s), le);
}
const qi = "modulepreload",
  Ci = function (e, r) {
    return new URL(e, r).href;
  },
  sr = {},
  Mi = function (r, o, s) {
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
        l = document.querySelector("meta[property=csp-nonce]"),
        c = l?.nonce || l?.getAttribute("nonce");
      n = i(
        o.map((u) => {
          if (((u = Ci(u, s)), u in sr)) return;
          sr[u] = !0;
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
            ((d.rel = f ? "stylesheet" : qi),
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
    function a(t) {
      const l = new Event("vite:preloadError", { cancelable: !0 });
      if (((l.payload = t), window.dispatchEvent(l), !l.defaultPrevented)) throw t;
    }
    return n.then((t) => {
      for (const l of t || []) l.status === "rejected" && a(l.reason);
      return r().catch(a);
    });
  };
var de = {},
  lt = {},
  fe = {},
  Ge = {},
  ur;
function Wn() {
  if (ur) return Ge;
  ((ur = 1), Object.defineProperty(Ge, "__esModule", { value: !0 }), (Ge.default = o));
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
  return Ge;
}
var x = {},
  _e = {},
  ve = {},
  lr;
function Ti() {
  if (lr) return ve;
  ((lr = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((ve.default = e), ve);
}
var cr;
function We() {
  if (cr) return _e;
  ((cr = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e = r(Ti());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function o(n) {
    return typeof n == "string" && e.default.test(n);
  }
  var s = o;
  return ((_e.default = s), _e);
}
var dr;
function Xe() {
  if (dr) return x;
  ((dr = 1),
    Object.defineProperty(x, "__esModule", { value: !0 }),
    (x.default = void 0),
    (x.unsafeStringify = s));
  var e = r(We());
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }
  const o = [];
  for (let t = 0; t < 256; ++t) o.push((t + 256).toString(16).slice(1));
  function s(t, l = 0) {
    return (
      o[t[l + 0]] +
      o[t[l + 1]] +
      o[t[l + 2]] +
      o[t[l + 3]] +
      "-" +
      o[t[l + 4]] +
      o[t[l + 5]] +
      "-" +
      o[t[l + 6]] +
      o[t[l + 7]] +
      "-" +
      o[t[l + 8]] +
      o[t[l + 9]] +
      "-" +
      o[t[l + 10]] +
      o[t[l + 11]] +
      o[t[l + 12]] +
      o[t[l + 13]] +
      o[t[l + 14]] +
      o[t[l + 15]]
    );
  }
  function n(t, l = 0) {
    const c = s(t, l);
    if (!(0, e.default)(c)) throw TypeError("Stringified UUID is invalid");
    return c;
  }
  var a = n;
  return ((x.default = a), x);
}
var fr;
function Bi() {
  if (fr) return fe;
  ((fr = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  var e = o(Wn()),
    r = Xe();
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  let s,
    n,
    a = 0,
    t = 0;
  function l(i, u, f) {
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
  var c = l;
  return ((fe.default = c), fe);
}
var he = {},
  B = {},
  ge = {},
  _r;
function Xn() {
  if (_r) return ge;
  ((_r = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  var e = r(We());
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
var vr;
function Yn() {
  if (vr) return B;
  ((vr = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.URL = B.DNS = void 0),
    (B.default = t));
  var e = Xe(),
    r = o(Xn());
  function o(l) {
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
  const a = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  B.URL = a;
  function t(l, c, i) {
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
    return ((u.DNS = n), (u.URL = a), u);
  }
  return B;
}
var pe = {},
  hr;
function Di() {
  if (hr) return pe;
  ((hr = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
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
      const y = (d[g >> 5] >>> g % 32) & 255,
        m = parseInt(v.charAt((y >>> 4) & 15) + v.charAt(y & 15), 16);
      p.push(m);
    }
    return p;
  }
  function o(d) {
    return (((d + 64) >>> 9) << 4) + 14 + 1;
  }
  function s(d, p) {
    ((d[p >> 5] |= 128 << p % 32), (d[o(p) - 1] = p));
    let _ = 1732584193,
      v = -271733879,
      g = -1732584194,
      y = 271733878;
    for (let m = 0; m < d.length; m += 16) {
      const R = _,
        E = v,
        q = g,
        T = y;
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
        (g = a(g, q)),
        (y = a(y, T)));
    }
    return [_, v, g, y];
  }
  function n(d) {
    if (d.length === 0) return [];
    const p = d.length * 8,
      _ = new Uint32Array(o(p));
    for (let v = 0; v < p; v += 8) _[v >> 5] |= (d[v / 8] & 255) << v % 32;
    return _;
  }
  function a(d, p) {
    const _ = (d & 65535) + (p & 65535);
    return (((d >> 16) + (p >> 16) + (_ >> 16)) << 16) | (_ & 65535);
  }
  function t(d, p) {
    return (d << p) | (d >>> (32 - p));
  }
  function l(d, p, _, v, g, y) {
    return a(t(a(a(p, d), a(v, y)), g), _);
  }
  function c(d, p, _, v, g, y, m) {
    return l((p & _) | (~p & v), d, p, g, y, m);
  }
  function i(d, p, _, v, g, y, m) {
    return l((p & v) | (_ & ~v), d, p, g, y, m);
  }
  function u(d, p, _, v, g, y, m) {
    return l(p ^ _ ^ v, d, p, g, y, m);
  }
  function f(d, p, _, v, g, y, m) {
    return l(_ ^ (p | ~v), d, p, g, y, m);
  }
  var h = e;
  return ((pe.default = h), pe);
}
var gr;
function Fi() {
  if (gr) return he;
  ((gr = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  var e = o(Yn()),
    r = o(Di());
  function o(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var n = (0, e.default)("v3", 48, r.default);
  return ((he.default = n), he);
}
var ye = {},
  me = {},
  pr;
function ki() {
  if (pr) return me;
  ((pr = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((me.default = r), me);
}
var yr;
function Ui() {
  if (yr) return ye;
  ((yr = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.default = void 0));
  var e = s(ki()),
    r = s(Wn()),
    o = Xe();
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
    return (0, o.unsafeStringify)(i);
  }
  var a = n;
  return ((ye.default = a), ye);
}
var be = {},
  we = {},
  mr;
function Ni() {
  if (mr) return we;
  ((mr = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.default = void 0));
  function e(n, a, t, l) {
    switch (n) {
      case 0:
        return (a & t) ^ (~a & l);
      case 1:
        return a ^ t ^ l;
      case 2:
        return (a & t) ^ (a & l) ^ (t & l);
      case 3:
        return a ^ t ^ l;
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
    const l = n.length / 4 + 2,
      c = Math.ceil(l / 16),
      i = new Array(c);
    for (let u = 0; u < c; ++u) {
      const f = new Uint32Array(16);
      for (let h = 0; h < 16; ++h)
        f[h] =
          (n[u * 64 + h * 4] << 24) |
          (n[u * 64 + h * 4 + 1] << 16) |
          (n[u * 64 + h * 4 + 2] << 8) |
          n[u * 64 + h * 4 + 3];
      i[u] = f;
    }
    ((i[c - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
      (i[c - 1][14] = Math.floor(i[c - 1][14])),
      (i[c - 1][15] = ((n.length - 1) * 8) & 4294967295));
    for (let u = 0; u < c; ++u) {
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
var br;
function Li() {
  if (br) return be;
  ((br = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.default = void 0));
  var e = o(Yn()),
    r = o(Ni());
  function o(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var n = (0, e.default)("v5", 80, r.default);
  return ((be.default = n), be);
}
var Ee = {},
  wr;
function xi() {
  if (wr) return Ee;
  ((wr = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((Ee.default = e), Ee);
}
var Oe = {},
  Er;
function Gi() {
  if (Er) return Oe;
  ((Er = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.default = void 0));
  var e = r(We());
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
var Or;
function Vi() {
  return (
    Or ||
      ((Or = 1),
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
              return l.default;
            },
          }),
          Object.defineProperty(e, "version", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }));
        var r = u(Bi()),
          o = u(Fi()),
          s = u(Ui()),
          n = u(Li()),
          a = u(xi()),
          t = u(Gi()),
          l = u(We()),
          c = u(Xe()),
          i = u(Xn());
        function u(f) {
          return f && f.__esModule ? f : { default: f };
        }
      })(lt)),
    lt
  );
}
var Rr;
function zi() {
  if (Rr) return de;
  ((Rr = 1),
    Object.defineProperty(de, "__esModule", { value: !0 }),
    (de.createAdfRendererIframeProps = void 0));
  const e = Vi(),
    r = async (o, s) => {
      const { iframeResizer: n } = await Mi(
          async () => {
            const { iframeResizer: i } = await import("./index-2D7JALmr.js").then((u) => u.i);
            return { iframeResizer: i };
          },
          [],
          import.meta.url,
        ),
        a = new URL(document.referrer).origin,
        t = `${a}/forge-apps/adf-renderer`;
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
            h = {
              type: "adf-document",
              document: (i = o.extension.macro) === null || i === void 0 ? void 0 : i.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: o.localId,
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
            (u = f?.contentWindow) === null || u === void 0 || u.postMessage(h, a));
        },
      };
    };
  return ((de.createAdfRendererIframeProps = r), de);
}
var Sr;
function Zn() {
  if (Sr) return $;
  ((Sr = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.view = void 0));
  const e = hi(),
    r = gi(),
    o = pi(),
    s = yi(),
    n = mi(),
    a = Si(),
    t = Pi(),
    l = Ii(),
    c = Ai(),
    i = zi();
  return (
    ($.view = {
      submit: e.submit,
      close: r.close,
      open: o.open,
      refresh: s.refresh,
      createHistory: n.createHistory,
      getContext: a.getContext,
      theme: l.theme,
      changeWindowTitle: t.changeWindowTitle,
      emitReadyEvent: c.emitReadyEvent,
      createAdfRendererIframeProps: i.createAdfRendererIframeProps,
    }),
    $
  );
}
var Pr;
function It() {
  return (
    Pr ||
      ((Pr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), A.__exportStar(Zn(), e));
      })(nt)),
    nt
  );
}
var ct = {},
  Re = {},
  Ir;
function Ki() {
  if (Ir) return Re;
  ((Ir = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.router = void 0));
  const r = (0, O().getCallBridge)(),
    o = async (t) => {
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
    a = async () => r("reload");
  return ((Re.router = { getUrl: o, navigate: s, open: n, reload: a }), Re);
}
var jr;
function Hi() {
  return (
    jr ||
      ((jr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), A.__exportStar(Ki(), e));
      })(ct)),
    ct
  );
}
var dt = {},
  Se = {},
  Ar;
function Ji() {
  if (Ar) return Se;
  ((Ar = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.Modal = void 0));
  const e = O(),
    r = S(),
    o = (0, e.getCallBridge)(),
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
var qr;
function Wi() {
  return (
    qr ||
      ((qr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), A.__exportStar(Ji(), e));
      })(dt)),
    dt
  );
}
var j = {},
  U = {},
  Cr;
function Xi() {
  if (Cr) return U;
  ((Cr = 1),
    Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.productFetchApi = U.remoteFetchApi = void 0));
  const e = Hn(),
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
    o = (t) => {
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
        const u = o(i),
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
          R = m ? (0, e.base64ToBlob)(_, v["content-type"]) : _;
        return new Response(R || null, { headers: v, status: y, statusText: g });
      };
      return { requestRemote: (c, i) => l(c, i) };
    };
  U.remoteFetchApi = n;
  const a = (t) => {
    const l = async (c, i, u) => {
      const f = o(u),
        { body: h, headers: d, isMultipartFormData: p } = await s(f);
      d.has("X-Atlassian-Token") || d.set("X-Atlassian-Token", "no-check");
      const _ = {
          product: c,
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
      requestConfluence: (c, i) => l("confluence", c, i),
      requestJira: (c, i) => l("jira", c, i),
      requestBitbucket: (c, i) => l("bitbucket", c, i),
    };
  };
  return ((U.productFetchApi = a), U);
}
var Mr;
function Yi() {
  if (Mr) return j;
  Mr = 1;
  var e;
  (Object.defineProperty(j, "__esModule", { value: !0 }),
    (j.requestRemote = j.requestBitbucket = j.requestJira = j.requestConfluence = void 0));
  const r = O(),
    o = Xi();
  return (
    (e = (0, o.productFetchApi)((0, r.getCallBridge)())),
    (j.requestConfluence = e.requestConfluence),
    (j.requestJira = e.requestJira),
    (j.requestBitbucket = e.requestBitbucket),
    (j.requestRemote = (0, o.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    j
  );
}
var ft = {},
  Pe = {},
  Tr;
function Zi() {
  if (Tr) return Pe;
  ((Tr = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.showFlag = void 0));
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
var Br;
function $i() {
  return (
    Br ||
      ((Br = 1),
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
  Dr;
function Qi() {
  return (
    Dr ||
      ((Dr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), A.__exportStar(Jn(), e));
      })(_t)),
    _t
  );
}
var vt = {},
  Ie = {},
  Fr;
function ea() {
  if (Fr) return Ie;
  ((Fr = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.realtime = void 0));
  const r = (0, O().getCallBridge)(),
    o = (t, l, c) => r("publishRealtimeChannel", { channelName: t, eventPayload: l, options: c }),
    s = (t, l, c) => r("subscribeRealtimeChannel", { channelName: t, onEvent: l, options: c }),
    n = (t, l, c) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: l, options: c, isGlobal: !0 }),
    a = (t, l, c) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: l, options: c, isGlobal: !0 });
  return ((Ie.realtime = { publish: o, subscribe: s, publishGlobal: n, subscribeGlobal: a }), Ie);
}
var ht = {},
  kr;
function ta() {
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
var Ur;
function ra() {
  return (
    Ur ||
      ((Ur = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var r = ea();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return r.realtime;
          },
        });
        var o = ta();
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
      })(vt)),
    vt
  );
}
var gt = {},
  je = {},
  pt = {},
  Nr;
function na() {
  return (
    Nr ||
      ((Nr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = O(),
          o = S(),
          s = 30,
          n = (0, r.getCallBridge)();
        e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE =
          "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
        const a = (l) => {
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
            const c = a(l);
            if ((await n("openRovo", c)) === !1)
              throw new o.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(pt)),
    pt
  );
}
var Lr;
function ia() {
  if (Lr) return je;
  ((Lr = 1), Object.defineProperty(je, "__esModule", { value: !0 }), (je.rovo = void 0));
  const e = na();
  return ((je.rovo = { open: e.open }), je);
}
var xr;
function aa() {
  return (
    xr ||
      ((xr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), A.__exportStar(ia(), e));
      })(gt)),
    gt
  );
}
var M = {},
  Gr;
function oa() {
  if (Gr) return M;
  ((Gr = 1),
    Object.defineProperty(M, "__esModule", { value: !0 }),
    (M.createTranslationFunction = M.getTranslations = M.resetTranslationsCache = void 0));
  const e = Kn(),
    r = It(),
    o = {
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
    s = new e.TranslationsGetter(o),
    n = () => {
      s.reset();
    };
  M.resetTranslationsCache = n;
  const a = async (l = null, c = { fallback: !0 }) => {
    let i = l;
    return (i || (i = (await r.view.getContext()).locale), await s.getTranslations(i, c));
  };
  M.getTranslations = a;
  const t = async (l = null) => {
    let c = l;
    c || (c = (await r.view.getContext()).locale);
    const i = new e.Translator(c, s);
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
var yt = {},
  mt = {},
  bt = {},
  Ae = {},
  qe = {},
  Vr;
function $n() {
  return (
    Vr ||
      ((Vr = 1),
      Object.defineProperty(qe, "__esModule", { value: !0 }),
      (qe.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (qe.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    qe
  );
}
var zr;
function Ye() {
  if (zr) return Ae;
  ((zr = 1),
    Object.defineProperty(Ae, "__esModule", { value: !0 }),
    (Ae.checkRestrictedEnvironment = void 0));
  const e = S(),
    r = It(),
    o = $n(),
    s = async () => {
      const { environmentType: n } = await r.view.getContext();
      if (n === "PRODUCTION")
        throw new e.BridgeAPIError(o.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Ae.checkRestrictedEnvironment = s), Ae);
}
var Kr;
function sa() {
  return (
    Kr ||
      ((Kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = xe(),
          o = S(),
          s = Ye(),
          a = (0, O().getCallBridge)(),
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
              d = await Promise.all(h.map((y) => l(y))),
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
                  q = _.get(E),
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
                  : q
                    ? {
                        promise: (async () => {
                          try {
                            const b = await fetch(y, {
                              method: "PUT",
                              body: q,
                              headers: {
                                "Content-Type": q.type || "application/octet-stream",
                                "Content-Length": q.size.toString(),
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
                        objectType: q.type,
                        objectSize: q.size,
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
        e.createUploadPromises = c;
        const i = async ({ functionKey: u, objects: f }) => {
          (await (0, s.checkRestrictedEnvironment)(),
            a("trackObjectStoreAction", { action: "upload" }));
          const h = await (0, e.createUploadPromises)({ functionKey: u, objects: f });
          return await Promise.all(h.map((p) => p.promise));
        };
        e.upload = i;
      })(bt)),
    bt
  );
}
var Ce = {},
  Hr;
function ua() {
  if (Hr) return Ce;
  ((Hr = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.deleteObjects = void 0));
  const e = xe(),
    r = S(),
    o = Ye(),
    n = (0, O().getCallBridge)(),
    a = async ({ functionKey: t, keys: l }) => {
      if (
        (await (0, o.checkRestrictedEnvironment)(),
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
  return ((Ce.deleteObjects = a), Ce);
}
var Me = {},
  Jr;
function la() {
  if (Jr) return Me;
  ((Jr = 1), Object.defineProperty(Me, "__esModule", { value: !0 }), (Me.download = void 0));
  const e = xe(),
    r = S(),
    o = Ye(),
    n = (0, O().getCallBridge)(),
    a = async ({ functionKey: t, keys: l }) => {
      if (
        (await (0, o.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "download" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(l) || l.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      const c = await (0, e.invoke)(t, { keys: l });
      if (!c || typeof c != "object")
        throw new r.BridgeAPIError("Invalid response from functionKey");
      const i = Object.entries(c).map(async ([f, h]) => {
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
  return ((Me.download = a), Me);
}
var Te = {},
  Wr;
function ca() {
  if (Wr) return Te;
  ((Wr = 1), Object.defineProperty(Te, "__esModule", { value: !0 }), (Te.getMetadata = void 0));
  const e = xe(),
    r = S(),
    o = Ye(),
    n = (0, O().getCallBridge)(),
    a = async ({ functionKey: t, keys: l }) => {
      if (
        (await (0, o.checkRestrictedEnvironment)(),
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
  return ((Te.getMetadata = a), Te);
}
var Xr;
function da() {
  return (
    Xr ||
      ((Xr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const r = sa();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return r.createUploadPromises;
          },
        });
        const o = ua(),
          s = la(),
          n = ca();
        e.objectStore = {
          upload: r.upload,
          download: s.download,
          getMetadata: n.getMetadata,
          delete: o.deleteObjects,
        };
      })(mt)),
    mt
  );
}
var Yr;
function fa() {
  return (
    Yr ||
      ((Yr = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = A;
        (r.__exportStar(da(), e), r.__exportStar($n(), e));
      })(yt)),
    yt
  );
}
var wt = {},
  Be = {},
  N = {},
  G = {},
  Ve = {},
  Zr;
function _a() {
  if (Zr) return Ve;
  ((Zr = 1), Object.defineProperty(Ve, "__esModule", { value: !0 }));
  const e = D();
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
      const l = e.StableID.get(this._sdkKey);
      if (
        ((a = s.customIDs) === null || a === void 0 ? void 0 : a.stableID) !== l &&
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
      var n, a;
      const t = this.getCurrentSourceDetails();
      let l = t.reason;
      const c = (n = t.warnings) !== null && n !== void 0 ? n : [];
      (this._source === "Bootstrap" && c.length > 0 && (l = l + c[0]),
        l !== "Uninitialized" &&
          l !== "NoValues" &&
          (l = `${l}:${s ? "Unrecognized" : "Recognized"}`));
      const i =
        this._source === "Bootstrap" && (a = this._bootstrapMetadata) !== null && a !== void 0
          ? a
          : void 0;
      return (i && (t.bootstrapMetadata = i), Object.assign(Object.assign({}, t), { reason: l }));
    }
  };
  return ((Ve.default = r), Ve);
}
var V = {},
  De = {},
  $r;
function va() {
  if ($r) return De;
  (($r = 1),
    Object.defineProperty(De, "__esModule", { value: !0 }),
    (De._resolveDeltasResponse = void 0));
  const e = D(),
    r = 2;
  function o(t, l) {
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
  De._resolveDeltasResponse = o;
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
      a(t.deleted_gates, l.feature_gates),
      delete l.deleted_gates,
      a(t.deleted_configs, l.dynamic_configs),
      delete l.deleted_configs,
      a(t.deleted_layers, l.layer_configs),
      delete l.deleted_layers,
      l
    );
  }
  function a(t, l) {
    t?.forEach((c) => {
      delete l[c];
    });
  }
  return De;
}
var Qr;
function Qn() {
  if (Qr) return V;
  Qr = 1;
  var e =
    (V && V.__awaiter) ||
    function (n, a, t, l) {
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
          p.done ? i(p.value) : c(p.value).then(f, h);
        }
        d((l = l.apply(n, a || [])).next());
      });
    };
  Object.defineProperty(V, "__esModule", { value: !0 });
  const r = D(),
    o = va();
  class s extends r.NetworkCore {
    constructor(a, t) {
      super(a, t);
      const l = a?.networkConfig;
      ((this._option = a),
        (this._initializeUrlConfig = new r.UrlConfiguration(
          r.Endpoint._initialize,
          l?.initializeUrl,
          l?.api,
          l?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(a, t, l, c, i) {
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
            sinceTime: i && !y ? v.time : 0,
            previousDerivedFields: "derived_fields" in v && i ? v.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: v.full_checksum,
            partialUserMatchSinceTime: y ? 0 : v.time,
          });
        }
        return this._fetchEvaluations(a, v, g, l);
      });
    }
    _fetchEvaluations(a, t, l, c) {
      return e(this, void 0, void 0, function* () {
        var i, u;
        const f = yield this.post({
          sdkKey: a,
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
        const h = (0, o._resolveDeltasResponse)(t, f.body);
        return typeof h == "string"
          ? h
          : this._fetchEvaluations(
              a,
              t,
              Object.assign(Object.assign(Object.assign({}, l), h), {
                deltasResponseRequested: !1,
              }),
              c,
            );
      });
    }
  }
  return ((V.default = s), V);
}
var Fe = {},
  en;
function ha() {
  if (en) return Fe;
  ((en = 1),
    Object.defineProperty(Fe, "__esModule", { value: !0 }),
    (Fe._makeParamStoreGetter = void 0));
  const e = D(),
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
  function l(u, f, h, d) {
    const _ = u.getExperiment(f.experiment_name, o(d) ? void 0 : r).get(f.param_name);
    return s(_, h) ? h : _;
  }
  function c(u, f, h, d) {
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
          return l(u, _, p, h);
        case "layer":
          return c(u, _, p, h);
        default:
          return p;
      }
    };
  }
  return ((Fe._makeParamStoreGetter = i), Fe);
}
var L = {},
  tn;
function ga() {
  if (tn) return L;
  tn = 1;
  var e =
    (L && L.__awaiter) ||
    function (n, a, t, l) {
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
          p.done ? i(p.value) : c(p.value).then(f, h);
        }
        d((l = l.apply(n, a || [])).next());
      });
    };
  (Object.defineProperty(L, "__esModule", { value: !0 }),
    (L.StatsigEvaluationsDataAdapter = void 0));
  const r = D(),
    o = Qn();
  let s = class extends r.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(a, t, l) {
      (super.attach(a, t, l),
        l !== null && l instanceof o.default
          ? (this._network = l)
          : (this._network = new o.default(t ?? {})));
    }
    getDataAsync(a, t, l) {
      return this._getDataAsyncImpl(a, (0, r._normalizeUser)(t, this._options), l);
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
    _fetchFromNetwork(a, t, l, c) {
      return e(this, void 0, void 0, function* () {
        var i;
        const u = yield (i = this._network) === null || i === void 0
          ? void 0
          : i.fetchEvaluations(this._getSdkKey(), a, l?.priority, t, c);
        return u ?? null;
      });
    }
    _getCacheKey(a) {
      var t;
      const l = (0, r._getStorageKey)(
        this._getSdkKey(),
        a,
        (t = this._options) === null || t === void 0 ? void 0 : t.customUserCacheKeyFunc,
      );
      return `${r.DataAdapterCachePrefix}.${this._cacheSuffix}.${l}`;
    }
    _isCachedResultValidFor204(a, t) {
      return a.fullUserHash != null && a.fullUserHash === (0, r._getFullUserHash)(t);
    }
  };
  return ((L.StatsigEvaluationsDataAdapter = s), L);
}
var rn;
function pa() {
  if (rn) return G;
  rn = 1;
  var e =
    (G && G.__awaiter) ||
    function (l, c, i, u) {
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
        v((u = u.apply(l, c || [])).next());
      });
    };
  Object.defineProperty(G, "__esModule", { value: !0 });
  const r = D(),
    o = _a(),
    s = Qn(),
    n = ha(),
    a = ga();
  let t = class St extends r.StatsigClientBase {
    static instance(c) {
      const i = (0, r._getStatsigGlobal)().instance(c);
      return i instanceof St
        ? i
        : (r.Log.warn(
            (0, r._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new St(c ?? "", {}));
    }
    constructor(c, i, u = null) {
      var f, h;
      r.SDKType._setClientType(c, "javascript-client");
      const d = new s.default(u, (_) => {
        this.$emt(_);
      });
      (super(
        c,
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
        (this._store = new o.default(c)),
        (this._network = d),
        (this._user = this._configureUser(i, u)),
        (this._sdkInstanceID = (0, r.getUUID)()));
      const p = (h = u?.plugins) !== null && h !== void 0 ? h : [];
      for (const _ of p) _.bind(this);
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
        const h = f instanceof Error ? f : new Error(String(f));
        return this._createErrorUpdateDetails(h, u);
      }
    }
    _updateUserSyncImpl(c, i, u) {
      var f;
      const h = [...((f = this._store.getWarnings()) !== null && f !== void 0 ? f : [])];
      this._resetForUser(c);
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
    updateUserAsync(c, i) {
      return e(this, void 0, void 0, function* () {
        const u = performance.now();
        try {
          return yield this._updateUserAsyncImpl(c, i);
        } catch (f) {
          const h = f instanceof Error ? f : new Error(String(f));
          return this._createErrorUpdateDetails(h, u);
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
        h = (u = f.customIDs) === null || u === void 0 ? void 0 : u.stableID;
      return (h && r.StableID.setOverride(h, this._sdkKey), f);
    }
    _getFeatureGateImpl(c, i) {
      var u, f;
      const { result: h, details: d } = this._store.getGate(c),
        p = (0, r._makeFeatureGate)(c, d, h),
        _ =
          (f = (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getGateOverride) ===
            null || f === void 0
            ? void 0
            : f.call(u, p, this._user, i),
        v = _ ?? p;
      return (
        this._enqueueExposure(
          c,
          (0, r._createGateExposure)(this._user, v, this._store.getExposureMapping()),
          i,
        ),
        this.$emt({ name: "gate_evaluation", gate: v }),
        v
      );
    }
    _getDynamicConfigImpl(c, i) {
      var u, f;
      const { result: h, details: d } = this._store.getConfig(c),
        p = (0, r._makeDynamicConfig)(c, d, h),
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
          c,
          (0, r._createConfigExposure)(this._user, v, this._store.getExposureMapping()),
          i,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: v }),
        v
      );
    }
    _getExperimentImpl(c, i) {
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
            : d.call(h, v, this._user, i),
        y = g ?? v;
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
      var u, f, h;
      const { result: d, details: p } = this._store.getLayer(c),
        _ = (0, r._makeLayer)(c, p, d),
        v =
          (f =
            (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getLayerOverride) ===
            null || f === void 0
            ? void 0
            : f.call(u, _, this._user, i);
      i?.disableExposureLog && this._logger.incrementNonExposureCount(c);
      const g = (0, r._mergeOverride)(
        _,
        v,
        (h = v?.__value) !== null && h !== void 0 ? h : _.__value,
        (y) => {
          i?.disableExposureLog ||
            this._enqueueExposure(
              c,
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
    _getParameterStoreImpl(c, i) {
      var u, f;
      const { result: h, details: d } = this._store.getParamStore(c);
      this._logger.incrementNonExposureCount(c);
      const p = {
          name: c,
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
var nn;
function ya() {
  return (
    nn ||
      ((nn = 1),
      (function (e) {
        var r =
            (N && N.__createBinding) ||
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
          o =
            (N && N.__exportStar) ||
            function (t, l) {
              for (var c in t)
                c !== "default" && !Object.prototype.hasOwnProperty.call(l, c) && r(l, t, c);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const s = D(),
          n = pa();
        ((e.StatsigClient = n.default), o(D(), e));
        const a = Object.assign((0, s._getStatsigGlobal)(), { StatsigClient: n.default });
        e.default = a;
      })(N)),
    N
  );
}
var ke = {},
  Ue = {},
  an;
function ma() {
  if (an) return Ue;
  ((an = 1),
    Object.defineProperty(Ue, "__esModule", { value: !0 }),
    (Ue.initFeatureFlags = void 0));
  const e = O(),
    r = S(),
    o = Je(),
    s = 500,
    n = 1e3 * 25,
    a = (0, e.getCallBridge)(),
    t = (c) => {
      if (!c || !c.user)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(c).some((i) => typeof i == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    l = (c) => (t(c), a("initFeatureFlags", { user: c.user }));
  return (
    (Ue.initFeatureFlags = (0, o.withRateLimiter)(
      l,
      s,
      n,
      `Feature flags initialisation calls are rate limited at ${s}req/${n / 1e3}s`,
    )),
    Ue
  );
}
var on;
function ba() {
  if (on) return ke;
  ((on = 1),
    Object.defineProperty(ke, "__esModule", { value: !0 }),
    (ke.ForgeDataAdapter = void 0));
  const e = ma();
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
  return ((ke.ForgeDataAdapter = r), ke);
}
var Et = {},
  sn;
function ei() {
  return (
    sn ||
      ((sn = 1),
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
      })(Et)),
    Et
  );
}
var Ne = {},
  un;
function wa() {
  if (un) return Ne;
  ((un = 1),
    Object.defineProperty(Ne, "__esModule", { value: !0 }),
    (Ne.trackFeatureFlagEvent = void 0));
  const e = O(),
    r = S(),
    o = ei(),
    s = Je(),
    n = 500,
    a = 1e3 * 25,
    t = (0, e.getCallBridge)(),
    l = (i) => {
      if (!i || !i.type || !i.properties)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(i.type.toUpperCase() in o.FeatureFlagEventType))
        throw new r.BridgeAPIError("Event type is not supported");
      if (Object.values(i).some((u) => typeof u == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (i) => (l(i), t("trackFeatureFlagEvent", i));
  return (
    (Ne.trackFeatureFlagEvent = (0, s.withRateLimiter)(
      c,
      n,
      a,
      `Feature flags calls are rate limited at ${n}req/${a / 1e3}s`,
    )),
    Ne
  );
}
var ln;
function Ea() {
  if (ln) return Be;
  ((ln = 1),
    Object.defineProperty(Be, "__esModule", { value: !0 }),
    (Be.ForgeFeatureFlags = void 0));
  const e = ya(),
    r = ba(),
    o = ei(),
    s = wa();
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
        type: o.FeatureFlagEventType.CHECKFLAG,
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
  return ((Be.ForgeFeatureFlags = n), Be);
}
var cn;
function Oa() {
  return (
    cn ||
      ((cn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var r = Ea();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.ForgeFeatureFlags;
          },
        });
      })(wt)),
    wt
  );
}
var dn;
function Ra() {
  return (
    dn ||
      ((dn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = A;
        var o = ci();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return o.NavigationTarget;
          },
        }),
          r.__exportStar(xe(), e),
          r.__exportStar(vi(), e),
          r.__exportStar(It(), e),
          r.__exportStar(Hi(), e),
          r.__exportStar(Wi(), e),
          r.__exportStar(Yi(), e),
          r.__exportStar($i(), e),
          r.__exportStar(Qi(), e),
          r.__exportStar(ra(), e),
          r.__exportStar(aa(), e),
          (e.i18n = r.__importStar(oa())),
          r.__exportStar(fa(), e),
          r.__exportStar(Oa(), e));
      })($e)),
    $e
  );
}
var Le = Ra();
const Sa = "_container_16ann_1",
  Pa = "_header_16ann_9",
  Ia = "_controls_16ann_20",
  ja = "_searchSection_16ann_28",
  Aa = "_searchInput_16ann_34",
  qa = "_orgSelect_16ann_35",
  Ca = "_input_16ann_36",
  Ma = "_select_16ann_37",
  Ta = "_addButton_16ann_63",
  Ba = "_addForm_16ann_79",
  Da = "_submitButton_16ann_88",
  Fa = "_spinner_16ann_108",
  ka = "_spinnerInner_16ann_113",
  Ua = "_tableContainer_16ann_117",
  Na = "_table_16ann_117",
  La = "_stats_16ann_146",
  xa = "_loadingContainer_16ann_155",
  P = {
    container: Sa,
    header: Pa,
    controls: Ia,
    searchSection: ja,
    searchInput: Aa,
    orgSelect: qa,
    input: Ca,
    select: Ma,
    addButton: Ta,
    addForm: Ba,
    submitButton: Da,
    spinner: Fa,
    spinnerInner: ka,
    tableContainer: Ua,
    table: Na,
    stats: La,
    loadingContainer: xa,
  },
  fn = () =>
    w.jsx("div", { className: P.spinner, children: w.jsx("div", { className: P.spinnerInner }) });
function Ga() {
  const [e, r] = I.useState([]),
    [o, s] = I.useState([]),
    [n, a] = I.useState(""),
    [t, l] = I.useState(null),
    [c, i] = I.useState(null),
    [u, f] = I.useState(""),
    [h, d] = I.useState(null),
    [p, _] = I.useState(!1),
    [v, g] = I.useState(!0),
    [y, m] = I.useState(!1),
    R = async () => {
      try {
        const b = await Le.invoke("getUsers", {
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
        const b = await Le.invoke("getOrganizations");
        s(b);
      } catch (b) {
        console.error("Error fetching organizations:", b);
      }
    },
    q = async () => {
      try {
        const b = await Le.invoke("getUserStats");
        i(b);
      } catch (b) {
        console.error("Error fetching stats:", b);
      }
    },
    T = async () => {
      g(!0);
      try {
        await Promise.all([R(), E(), q()]);
      } finally {
        g(!1);
      }
    };
  I.useEffect(() => {
    T();
  }, [n, t]);
  const jt = async () => {
    if (!(!u || !h)) {
      m(!0);
      try {
        (await Le.invoke("createUser", { name: u, organizationId: h }),
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
        children: [w.jsx(fn, {}), w.jsx("p", { children: "Loading data..." })],
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
                    onChange: (b) => l(b.target.value ? Number(b.target.value) : null),
                    className: P.orgSelect,
                    children: [
                      w.jsx("option", { value: "", children: "All Organizations" }),
                      o.map((b) =>
                        w.jsxs(
                          "option",
                          {
                            value: b.id,
                            children: [b.name, " (", c?.orgBreakdown[b.id] || 0, ")"],
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
                  onClick: jt,
                  className: P.submitButton,
                  disabled: !u || !h || y,
                  style: {
                    opacity: !u || !h || y ? 0.5 : 1,
                    cursor: !u || !h || y ? "not-allowed" : "pointer",
                  },
                  children: y
                    ? w.jsxs(w.Fragment, {
                        children: [
                          w.jsx(fn, {}),
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
            children: w.jsxs("p", { children: ["Total Users: ", c?.totalUsers || 0] }),
          }),
        ],
      });
}
const Va = document.getElementById("root"),
  za = ti.createRoot(Va),
  _n = () => {
    za.render(w.jsx(Ga, {}));
  };
Le.view.theme
  .enable()
  .then(() => {
    _n();
  })
  .catch((e) => {
    (console.error(e.message), _n());
  });
