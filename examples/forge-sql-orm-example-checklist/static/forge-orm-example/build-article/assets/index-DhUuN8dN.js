import { r as _n, c as ei } from "./react-dom-vendor-BOEB6BZs.js";
import { g as ti, r as C } from "./client-core-vendor-D3kwrIkk.js";
import { r as ri } from "./lodash-vendor-DXG1mS21.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) u(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const t of a.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && u(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function u(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = s(i);
    fetch(i.href, a);
  }
})();
var $e = { exports: {} },
  x = {};
var qt;
function ni() {
  if (qt) return x;
  qt = 1;
  var e = _n(),
    r = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    u = Object.prototype.hasOwnProperty,
    i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(l, c, n) {
    var o,
      f = {},
      h = null,
      d = null;
    (n !== void 0 && (h = "" + n),
      c.key !== void 0 && (h = "" + c.key),
      c.ref !== void 0 && (d = c.ref));
    for (o in c) u.call(c, o) && !a.hasOwnProperty(o) && (f[o] = c[o]);
    if (l && l.defaultProps) for (o in ((c = l.defaultProps), c)) f[o] === void 0 && (f[o] = c[o]);
    return { $$typeof: r, type: l, key: h, ref: d, props: f, _owner: i.current };
  }
  return ((x.Fragment = s), (x.jsx = t), (x.jsxs = t), x);
}
var At;
function ii() {
  return (At || ((At = 1), ($e.exports = ni())), $e.exports);
}
var R = ii(),
  Ne = _n(),
  Ze = {},
  Ot = function (e, r) {
    return (
      (Ot =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (s, u) {
            s.__proto__ = u;
          }) ||
        function (s, u) {
          for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (s[i] = u[i]);
        }),
      Ot(e, r)
    );
  };
function vn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Ot(e, r);
  function s() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((s.prototype = r.prototype), new s());
}
var xe = function () {
  return (
    (xe =
      Object.assign ||
      function (r) {
        for (var s, u = 1, i = arguments.length; u < i; u++) {
          s = arguments[u];
          for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (r[a] = s[a]);
        }
        return r;
      }),
    xe.apply(this, arguments)
  );
};
function hn(e, r) {
  var s = {};
  for (var u in e) Object.prototype.hasOwnProperty.call(e, u) && r.indexOf(u) < 0 && (s[u] = e[u]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, u = Object.getOwnPropertySymbols(e); i < u.length; i++)
      r.indexOf(u[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, u[i]) &&
        (s[u[i]] = e[u[i]]);
  return s;
}
function gn(e, r, s, u) {
  var i = arguments.length,
    a = i < 3 ? r : u === null ? (u = Object.getOwnPropertyDescriptor(r, s)) : u,
    t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    a = Reflect.decorate(e, r, s, u);
  else
    for (var l = e.length - 1; l >= 0; l--)
      (t = e[l]) && (a = (i < 3 ? t(a) : i > 3 ? t(r, s, a) : t(r, s)) || a);
  return (i > 3 && a && Object.defineProperty(r, s, a), a);
}
function pn(e, r) {
  return function (s, u) {
    r(s, u, e);
  };
}
function yn(e, r, s, u, i, a) {
  function t(g) {
    if (g !== void 0 && typeof g != "function") throw new TypeError("Function expected");
    return g;
  }
  for (
    var l = u.kind,
      c = l === "getter" ? "get" : l === "setter" ? "set" : "value",
      n = !r && e ? (u.static ? e : e.prototype) : null,
      o = r || (n ? Object.getOwnPropertyDescriptor(n, u.name) : {}),
      f,
      h = !1,
      d = s.length - 1;
    d >= 0;
    d--
  ) {
    var p = {};
    for (var _ in u) p[_] = _ === "access" ? {} : u[_];
    for (var _ in u.access) p.access[_] = u.access[_];
    p.addInitializer = function (g) {
      if (h) throw new TypeError("Cannot add initializers after decoration has completed");
      a.push(t(g || null));
    };
    var v = (0, s[d])(l === "accessor" ? { get: o.get, set: o.set } : o[c], p);
    if (l === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      ((f = t(v.get)) && (o.get = f),
        (f = t(v.set)) && (o.set = f),
        (f = t(v.init)) && i.unshift(f));
    } else (f = t(v)) && (l === "field" ? i.unshift(f) : (o[c] = f));
  }
  (n && Object.defineProperty(n, u.name, o), (h = !0));
}
function mn(e, r, s) {
  for (var u = arguments.length > 2, i = 0; i < r.length; i++)
    s = u ? r[i].call(e, s) : r[i].call(e);
  return u ? s : void 0;
}
function bn(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function wn(e, r, s) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: s ? "".concat(s, " ", r) : r })
  );
}
function En(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function On(e, r, s, u) {
  function i(a) {
    return a instanceof s
      ? a
      : new s(function (t) {
          t(a);
        });
  }
  return new (s || (s = Promise))(function (a, t) {
    function l(o) {
      try {
        n(u.next(o));
      } catch (f) {
        t(f);
      }
    }
    function c(o) {
      try {
        n(u.throw(o));
      } catch (f) {
        t(f);
      }
    }
    function n(o) {
      o.done ? a(o.value) : i(o.value).then(l, c);
    }
    n((u = u.apply(e, r || [])).next());
  });
}
function Rn(e, r) {
  var s = {
      label: 0,
      sent: function () {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: [],
    },
    u,
    i,
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
  function l(n) {
    return function (o) {
      return c([n, o]);
    };
  }
  function c(n) {
    if (u) throw new TypeError("Generator is already executing.");
    for (; t && ((t = 0), n[0] && (s = 0)), s; )
      try {
        if (
          ((u = 1),
          i &&
            (a =
              n[0] & 2 ? i.return : n[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) &&
            !(a = a.call(i, n[1])).done)
        )
          return a;
        switch (((i = 0), a && (n = [n[0] & 2, a.value]), n[0])) {
          case 0:
          case 1:
            a = n;
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
              ((a = s.trys), !(a = a.length > 0 && a[a.length - 1]) && (n[0] === 6 || n[0] === 2))
            ) {
              s = 0;
              continue;
            }
            if (n[0] === 3 && (!a || (n[1] > a[0] && n[1] < a[3]))) {
              s.label = n[1];
              break;
            }
            if (n[0] === 6 && s.label < a[1]) {
              ((s.label = a[1]), (a = n));
              break;
            }
            if (a && s.label < a[2]) {
              ((s.label = a[2]), s.ops.push(n));
              break;
            }
            (a[2] && s.ops.pop(), s.trys.pop());
            continue;
        }
        n = r.call(e, s);
      } catch (o) {
        ((n = [6, o]), (i = 0));
      } finally {
        u = a = 0;
      }
    if (n[0] & 5) throw n[1];
    return { value: n[0] ? n[1] : void 0, done: !0 };
  }
}
var He = Object.create
  ? function (e, r, s, u) {
      u === void 0 && (u = s);
      var i = Object.getOwnPropertyDescriptor(r, s);
      ((!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) &&
        (i = {
          enumerable: !0,
          get: function () {
            return r[s];
          },
        }),
        Object.defineProperty(e, u, i));
    }
  : function (e, r, s, u) {
      (u === void 0 && (u = s), (e[u] = r[s]));
    };
function Pn(e, r) {
  for (var s in e) s !== "default" && !Object.prototype.hasOwnProperty.call(r, s) && He(r, e, s);
}
function ze(e) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    s = r && e[r],
    u = 0;
  if (s) return s.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && u >= e.length && (e = void 0), { value: e && e[u++], done: !e });
      },
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function St(e, r) {
  var s = typeof Symbol == "function" && e[Symbol.iterator];
  if (!s) return e;
  var u = s.call(e),
    i,
    a = [],
    t;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = u.next()).done; ) a.push(i.value);
  } catch (l) {
    t = { error: l };
  } finally {
    try {
      i && !i.done && (s = u.return) && s.call(u);
    } finally {
      if (t) throw t.error;
    }
  }
  return a;
}
function Sn() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(St(arguments[r]));
  return e;
}
function In() {
  for (var e = 0, r = 0, s = arguments.length; r < s; r++) e += arguments[r].length;
  for (var u = Array(e), i = 0, r = 0; r < s; r++)
    for (var a = arguments[r], t = 0, l = a.length; t < l; t++, i++) u[i] = a[t];
  return u;
}
function qn(e, r, s) {
  if (s || arguments.length === 2)
    for (var u = 0, i = r.length, a; u < i; u++)
      (a || !(u in r)) && (a || (a = Array.prototype.slice.call(r, 0, u)), (a[u] = r[u]));
  return e.concat(a || Array.prototype.slice.call(r));
}
function G(e) {
  return this instanceof G ? ((this.v = e), this) : new G(e);
}
function An(e, r, s) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var u = s.apply(e, r || []),
    i,
    a = [];
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
    u[d] &&
      ((i[d] = function (_) {
        return new Promise(function (v, g) {
          a.push([d, _, v, g]) > 1 || c(d, _);
        });
      }),
      p && (i[d] = p(i[d])));
  }
  function c(d, p) {
    try {
      n(u[d](p));
    } catch (_) {
      h(a[0][3], _);
    }
  }
  function n(d) {
    d.value instanceof G ? Promise.resolve(d.value.v).then(o, f) : h(a[0][2], d);
  }
  function o(d) {
    c("next", d);
  }
  function f(d) {
    c("throw", d);
  }
  function h(d, p) {
    (d(p), a.shift(), a.length && c(a[0][0], a[0][1]));
  }
}
function jn(e) {
  var r, s;
  return (
    (r = {}),
    u("next"),
    u("throw", function (i) {
      throw i;
    }),
    u("return"),
    (r[Symbol.iterator] = function () {
      return this;
    }),
    r
  );
  function u(i, a) {
    r[i] = e[i]
      ? function (t) {
          return (s = !s) ? { value: G(e[i](t)), done: !1 } : a ? a(t) : t;
        }
      : a;
  }
}
function Cn(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    s;
  return r
    ? r.call(e)
    : ((e = typeof ze == "function" ? ze(e) : e[Symbol.iterator]()),
      (s = {}),
      u("next"),
      u("throw"),
      u("return"),
      (s[Symbol.asyncIterator] = function () {
        return this;
      }),
      s);
  function u(a) {
    s[a] =
      e[a] &&
      function (t) {
        return new Promise(function (l, c) {
          ((t = e[a](t)), i(l, c, t.done, t.value));
        });
      };
  }
  function i(a, t, l, c) {
    Promise.resolve(c).then(function (n) {
      a({ value: n, done: l });
    }, t);
  }
}
function Mn(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var ai = Object.create
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
          var s = [];
          for (var u in r) Object.prototype.hasOwnProperty.call(r, u) && (s[s.length] = u);
          return s;
        }),
      Rt(e)
    );
  };
function Dn(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var s = Rt(e), u = 0; u < s.length; u++) s[u] !== "default" && He(r, e, s[u]);
  return (ai(r, e), r);
}
function kn(e) {
  return e && e.__esModule ? e : { default: e };
}
function Tn(e, r, s, u) {
  if (s === "a" && !u) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !u : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return s === "m" ? u : s === "a" ? u.call(e) : u ? u.value : r.get(e);
}
function Bn(e, r, s, u, i) {
  if (u === "m") throw new TypeError("Private method is not writable");
  if (u === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !i : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (u === "a" ? i.call(e, s) : i ? (i.value = s) : r.set(e, s), s);
}
function Fn(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function Un(e, r, s) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var u, i;
    if (s) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      u = r[Symbol.asyncDispose];
    }
    if (u === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((u = r[Symbol.dispose]), s && (i = u));
    }
    if (typeof u != "function") throw new TypeError("Object not disposable.");
    (i &&
      (u = function () {
        try {
          i.call(this);
        } catch (a) {
          return Promise.reject(a);
        }
      }),
      e.stack.push({ value: r, dispose: u, async: s }));
  } else s && e.stack.push({ async: !0 });
  return r;
}
var oi =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, s) {
        var u = new Error(s);
        return ((u.name = "SuppressedError"), (u.error = e), (u.suppressed = r), u);
      };
function Ln(e) {
  function r(a) {
    ((e.error = e.hasError ? new oi(a, e.error, "An error was suppressed during disposal.") : a),
      (e.hasError = !0));
  }
  var s,
    u = 0;
  function i() {
    for (; (s = e.stack.pop()); )
      try {
        if (!s.async && u === 1) return ((u = 0), e.stack.push(s), Promise.resolve().then(i));
        if (s.dispose) {
          var a = s.dispose.call(s.value);
          if (s.async)
            return (
              (u |= 2),
              Promise.resolve(a).then(i, function (t) {
                return (r(t), i());
              })
            );
        } else u |= 1;
      } catch (t) {
        r(t);
      }
    if (u === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return i();
}
function Nn(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (s, u, i, a, t) {
        return u
          ? r
            ? ".jsx"
            : ".js"
          : i && (!a || !t)
            ? s
            : i + a + "." + t.toLowerCase() + "js";
      })
    : e;
}
const si = {
    __extends: vn,
    __assign: xe,
    __rest: hn,
    __decorate: gn,
    __param: pn,
    __esDecorate: yn,
    __runInitializers: mn,
    __propKey: bn,
    __setFunctionName: wn,
    __metadata: En,
    __awaiter: On,
    __generator: Rn,
    __createBinding: He,
    __exportStar: Pn,
    __values: ze,
    __read: St,
    __spread: Sn,
    __spreadArrays: In,
    __spreadArray: qn,
    __await: G,
    __asyncGenerator: An,
    __asyncDelegator: jn,
    __asyncValues: Cn,
    __makeTemplateObject: Mn,
    __importStar: Dn,
    __importDefault: kn,
    __classPrivateFieldGet: Tn,
    __classPrivateFieldSet: Bn,
    __classPrivateFieldIn: Fn,
    __addDisposableResource: Un,
    __disposeResources: Ln,
    __rewriteRelativeImportExtension: Nn,
  },
  ui = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Un,
        get __assign() {
          return xe;
        },
        __asyncDelegator: jn,
        __asyncGenerator: An,
        __asyncValues: Cn,
        __await: G,
        __awaiter: On,
        __classPrivateFieldGet: Tn,
        __classPrivateFieldIn: Fn,
        __classPrivateFieldSet: Bn,
        __createBinding: He,
        __decorate: gn,
        __disposeResources: Ln,
        __esDecorate: yn,
        __exportStar: Pn,
        __extends: vn,
        __generator: Rn,
        __importDefault: kn,
        __importStar: Dn,
        __makeTemplateObject: Mn,
        __metadata: En,
        __param: pn,
        __propKey: bn,
        __read: St,
        __rest: hn,
        __rewriteRelativeImportExtension: Nn,
        __runInitializers: mn,
        __setFunctionName: wn,
        __spread: Sn,
        __spreadArray: qn,
        __spreadArrays: In,
        __values: ze,
        default: si,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  S = ti(ui);
var z = {},
  jt;
function li() {
  return (
    jt ||
      ((jt = 1),
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
var Qe = {},
  et = {},
  K = {},
  H = {},
  Ct;
function O() {
  if (Ct) return H;
  ((Ct = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.BridgeAPIError = void 0));
  class e extends Error {}
  return ((H.BridgeAPIError = e), H);
}
var Mt;
function w() {
  if (Mt) return K;
  ((Mt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.getCallBridge = void 0));
  const e = O();
  function r(u) {
    return !!u?.callBridge;
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
var J = {},
  Dt;
function Je() {
  if (Dt) return J;
  ((Dt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.withRateLimiter = void 0));
  const e = O(),
    r = (s, u, i, a) => {
      let t = Date.now(),
        l = 0;
      return async (...c) => {
        const n = Date.now();
        if ((n - t > i && ((t = n), (l = 0)), l >= u))
          throw new e.BridgeAPIError(a || "Too many invocations.");
        return ((l = l + 1), s(...c));
      };
    };
  return ((J.withRateLimiter = r), J);
}
var kt;
function ci() {
  return (
    kt ||
      ((kt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = w(),
          s = O(),
          u = Je(),
          i = (0, r.getCallBridge)(),
          a = (c) => {
            if (c && Object.values(c).some((n) => typeof n == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (c, n) => {
            if (typeof c != "string") throw new s.BridgeAPIError("functionKey must be a string!");
            return (a(n), i("invoke", { functionKey: c, payload: n }));
          };
        e.invoke = (0, u.withRateLimiter)(
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
var Tt;
function Le() {
  return (
    Tt ||
      ((Tt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(ci(), e));
      })(Qe)),
    Qe
  );
}
var tt = {},
  W = {},
  rt = {},
  Bt;
function Gn() {
  return (
    Bt ||
      ((Bt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = w(),
          s = O(),
          u = Je(),
          i = 500,
          a = 25,
          t = 1e3 * a;
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
          o = (f) => {
            const h = n(f);
            return (0, u.withRateLimiter)(
              h,
              i,
              t,
              `${f} invocation calls are rate limited at ${i}/${a}s`,
            );
          };
        e._invokeEndpointFn = o;
      })(rt)),
    rt
  );
}
var Ft;
function di() {
  if (Ft) return W;
  ((Ft = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.invokeRemote = void 0));
  const e = Gn(),
    r = (s) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(s);
  return ((W.invokeRemote = r), W);
}
var X = {},
  Ut;
function fi() {
  if (Ut) return X;
  ((Ut = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.invokeService = void 0));
  const e = Gn(),
    r = (s) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(s);
  return ((X.invokeService = r), X);
}
var Lt;
function _i() {
  return (
    Lt ||
      ((Lt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(di(), e), r.__exportStar(fi(), e));
      })(tt)),
    tt
  );
}
var nt = {},
  Y = {},
  $ = {},
  Nt;
function vi() {
  if (Nt) return $;
  ((Nt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.submit = void 0));
  const e = w(),
    r = O(),
    s = (0, e.getCallBridge)(),
    u = async (i) => {
      if ((await s("submit", i)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return (($.submit = u), $);
}
var Z = {},
  Gt;
function hi() {
  if (Gt) return Z;
  ((Gt = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.close = void 0));
  const e = w(),
    r = O(),
    s = (0, e.getCallBridge)(),
    u = async (i) => {
      try {
        if ((await s("close", i)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((Z.close = u), Z);
}
var Q = {},
  Vt;
function gi() {
  if (Vt) return Q;
  ((Vt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.open = void 0));
  const e = w(),
    r = O(),
    s = (0, e.getCallBridge)(),
    u = async () => {
      try {
        if ((await s("open")) === !1)
          throw new r.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((Q.open = u), Q);
}
var ee = {},
  xt;
function pi() {
  if (xt) return ee;
  ((xt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.refresh = void 0));
  const e = w(),
    r = O(),
    s = (0, e.getCallBridge)(),
    u = async (i) => {
      if ((await s("refresh", i)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((ee.refresh = u), ee);
}
var te = {},
  zt;
function yi() {
  if (zt) return te;
  ((zt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.createHistory = void 0));
  const r = (0, w().getCallBridge)(),
    s = async () => {
      const u = await r("createHistory");
      return (
        u.listen((i) => {
          u.location = i;
        }),
        u
      );
    };
  return ((te.createHistory = s), te);
}
var re = {},
  it = {},
  I = {},
  Kt;
function Vn() {
  return (
    Kt ||
      ((Kt = 1),
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
  Ht;
function mi() {
  if (Ht) return D;
  ((Ht = 1),
    Object.defineProperty(D, "__esModule", { value: !0 }),
    (D.TranslationsGetter = D.TranslationGetterError = void 0));
  const e = (u, i) => {
    u.includes(i) || u.push(i);
  };
  class r extends Error {
    constructor(i) {
      (super(i), (this.name = "TranslationGetterError"));
    }
  }
  D.TranslationGetterError = r;
  class s {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(i) {
      this.resourcesAccessor = i;
    }
    async getTranslations(i, a = { fallback: !0 }) {
      const t = await this.getI18nInfoConfig(),
        { fallback: l } = a;
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
      const a = await this.getI18nInfoConfig(),
        t = this.getLocaleLookupOrder(i, a);
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
      let a = this.translationResources.get(i);
      if (!a)
        try {
          ((a = await this.resourcesAccessor.getTranslationResource(i)),
            this.translationResources.set(i, a));
        } catch (t) {
          throw t instanceof r ? t : new r(`Failed to get translation resource for locale: ${i}`);
        }
      return a;
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
    getLocaleLookupOrder(i, a) {
      const { locales: t, fallback: l } = a,
        c = [i],
        n = l[i];
      return (
        n && Array.isArray(n) && n.length > 0 && c.push(...n),
        e(c, a.fallback.default),
        c.filter((o) => t.includes(o))
      );
    }
  }
  return ((D.TranslationsGetter = s), D);
}
var ne = {},
  at = {},
  Jt;
function xn() {
  return (
    Jt ||
      ((Jt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const s = S.__importDefault(ri()),
          u = (a, t, l) => {
            const c = a[l];
            return c ? (0, e.getTranslationValueFromContent)(c, t) : null;
          };
        e.getTranslationValue = u;
        const i = (a, t) => {
          let l = a[t];
          if (!l) {
            const c = t.split(".");
            c.length > 1 && (l = (0, s.default)(a, c, null));
          }
          return typeof l == "string" ? l : null;
        };
        e.getTranslationValueFromContent = i;
      })(at)),
    at
  );
}
var Wt;
function bi() {
  if (Wt) return ne;
  ((Wt = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.Translator = void 0));
  const e = xn();
  class r {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(u, i) {
      ((this.locale = u), (this.translationsGetter = i));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(u) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let i = this.cache.get(u);
      if (i === void 0) {
        for (const { translations: a } of this.localeLookupOrderedTranslations) {
          const t = (0, e.getTranslationValueFromContent)(a, u);
          if (t !== null) {
            i = t;
            break;
          }
        }
        ((i = i ?? null), this.cache.set(u, i));
      }
      return i;
    }
  }
  return ((ne.Translator = r), ne);
}
var ie = {},
  Xt;
function wi() {
  if (Xt) return ie;
  ((Xt = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.ensureLocale = void 0));
  const e = Vn(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    s = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    u = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (a, t) => {
        const [l] = t.split("-");
        return (a[l] || (a[l] = t), a);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    i = (a) => {
      const t = a.replace("_", "-");
      return r.has(t) ? t : (u[t] ?? s[t] ?? null);
    };
  return ((ie.ensureLocale = i), ie);
}
var ot = {},
  Yt;
function Ei() {
  return (
    Yt ||
      ((Yt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (n) => typeof n == "object" && n !== null && !Array.isArray(n),
          s = (n) => typeof n?.i18n == "string",
          u = (n) => n.startsWith("connect-"),
          i = (n) => n.startsWith("core:"),
          a = (n) => {
            const o = new Set(),
              f = (h, d) =>
                !r(h) || o.has(h)
                  ? []
                  : (o.add(h),
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
            Object.entries(n).flatMap(([o, f]) =>
              !u(o) && !i(o) && f && Array.isArray(f) && f.length > 0 ? f.map((h) => [h, o]) : [],
            );
        e.getI18nSupportedModuleEntries = t;
        const l = (n) => {
          const o = new Set();
          for (const f of (0, e.getI18nSupportedModuleEntries)(n)) {
            const h = a(f[0]);
            for (const { key: d } of h) o.add(d);
          }
          return o.size > 0 ? Array.from(o) : [];
        };
        e.extractI18nKeysFromModules = l;
        const c = (n) => {
          const o = [];
          for (const f of (0, e.getI18nSupportedModuleEntries)(n)) {
            const h = a(f[0]);
            for (const d of h) o.push({ moduleName: f[1], ...d });
          }
          return o;
        };
        e.extractI18nPropertiesFromModules = c;
      })(ot)),
    ot
  );
}
var st = {},
  $t;
function Oi() {
  return ($t || (($t = 1), Object.defineProperty(st, "__esModule", { value: !0 })), st);
}
var Zt;
function zn() {
  return (
    Zt ||
      ((Zt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const r = S;
        (r.__exportStar(Vn(), e),
          r.__exportStar(mi(), e),
          r.__exportStar(bi(), e),
          r.__exportStar(wi(), e));
        var s = xn();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return s.getTranslationValue;
          },
        });
        var u = Ei();
        (Object.defineProperty(e, "extractI18nKeysFromModules", {
          enumerable: !0,
          get: function () {
            return u.extractI18nKeysFromModules;
          },
        }),
          Object.defineProperty(e, "extractI18nPropertiesFromModules", {
            enumerable: !0,
            get: function () {
              return u.extractI18nPropertiesFromModules;
            },
          }),
          Object.defineProperty(e, "getI18nSupportedModuleEntries", {
            enumerable: !0,
            get: function () {
              return u.getI18nSupportedModuleEntries;
            },
          }),
          r.__exportStar(Oi(), e));
      })(it)),
    it
  );
}
var Qt;
function Ri() {
  if (Qt) return re;
  ((Qt = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.getContext = void 0));
  const e = w(),
    r = zn(),
    s = (0, e.getCallBridge)(),
    u = async () => {
      var i;
      const a = await s("getContext"),
        t = a?.locale;
      return (t && (a.locale = (i = (0, r.ensureLocale)(t)) !== null && i !== void 0 ? i : t), a);
    };
  return ((re.getContext = u), re);
}
var ae = {},
  er;
function Pi() {
  if (er) return ae;
  ((er = 1),
    Object.defineProperty(ae, "__esModule", { value: !0 }),
    (ae.changeWindowTitle = void 0));
  const e = w(),
    r = O(),
    s = (0, e.getCallBridge)(),
    u = async (i) => {
      try {
        await s("changeWindowTitle", i);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((ae.changeWindowTitle = u), ae);
}
var oe = {},
  tr;
function Si() {
  if (tr) return oe;
  ((tr = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.theme = void 0));
  const r = (0, w().getCallBridge)();
  return ((oe.theme = { enable: () => r("enableTheming") }), oe);
}
var se = {},
  ue = {},
  ut = {},
  k = {},
  rr;
function Kn() {
  if (rr) return k;
  ((rr = 1),
    Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.blobToBase64 = k.base64ToBlob = void 0));
  const e = (s, u) => {
    if (!s) return null;
    const i = s.includes(";base64") ? s.split(",")[1] : s,
      a = atob(i),
      t = new Array(a.length);
    for (let c = 0; c < a.length; c++) t[c] = a.charCodeAt(c);
    const l = new Uint8Array(t);
    return new Blob([l], { type: u });
  };
  k.base64ToBlob = e;
  const r = (s) =>
    new Promise((u, i) => {
      const a = new FileReader();
      ((a.onloadend = () => {
        u(a.result);
      }),
        (a.onerror = i),
        a.readAsDataURL(s));
    });
  return ((k.blobToBase64 = r), k);
}
var nr;
function Ii() {
  return (
    nr ||
      ((nr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const r = Kn(),
          s = (n) => {
            if (
              typeof n != "object" ||
              n === null ||
              Object.prototype.toString.call(n) !== "[object Object]"
            )
              return !1;
            const o = Object.getPrototypeOf(n);
            if (o === null) return !0;
            const f = Object.prototype.hasOwnProperty.call(o, "constructor") && o.constructor;
            return (
              typeof f == "function" &&
              f instanceof f &&
              Function.prototype.call(f) === Function.prototype.call(n)
            );
          },
          u = async (n) => ({ data: await (0, r.blobToBase64)(n), type: n.type }),
          i = (n) => (0, r.base64ToBlob)(n.data, n.type),
          a = async (n) => {
            if (n instanceof Blob) return { ...(await u(n)), __isBlobData: !0 };
            if (Array.isArray(n))
              return Promise.all(n.map((o) => (0, e.serialiseBlobsInPayload)(o)));
            if (n && s(n)) {
              const o = await Promise.all(
                Object.entries(n).map(async ([f, h]) => [
                  f,
                  await (0, e.serialiseBlobsInPayload)(h),
                ]),
              );
              return Object.fromEntries(o);
            }
            return n;
          };
        e.serialiseBlobsInPayload = a;
        const t = (n) => {
          if (n && s(n) && "__isBlobData" in n) {
            const o = n;
            return i({ data: o.data, type: o.type });
          }
          if (Array.isArray(n)) return n.map((o) => (0, e.deserialiseBlobsInPayload)(o));
          if (n && s(n)) {
            const o = {};
            for (const [f, h] of Object.entries(n)) o[f] = (0, e.deserialiseBlobsInPayload)(h);
            return o;
          }
          return n;
        };
        e.deserialiseBlobsInPayload = t;
        const l = (n) =>
          n instanceof Blob
            ? !0
            : Array.isArray(n)
              ? n.some((o) => (0, e.containsBlobs)(o))
              : n && s(n)
                ? Object.values(n).some((o) => (0, e.containsBlobs)(o))
                : !1;
        e.containsBlobs = l;
        const c = (n) =>
          n && s(n) && "__isBlobData" in n
            ? !0
            : Array.isArray(n)
              ? n.some((o) => (0, e.containsSerialisedBlobs)(o))
              : n && s(n)
                ? Object.values(n).some((o) => (0, e.containsSerialisedBlobs)(o))
                : !1;
        e.containsSerialisedBlobs = c;
      })(ut)),
    ut
  );
}
var ir;
function Hn() {
  if (ir) return ue;
  ((ir = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.events = void 0));
  const e = w(),
    r = Ii(),
    s = (0, e.getCallBridge)(),
    u = async (a, t) => {
      let l = t;
      return (
        (0, r.containsBlobs)(t) && (l = await (0, r.serialiseBlobsInPayload)(t)),
        s("emit", { event: a, payload: l })
      );
    },
    i = (a, t) =>
      s("on", {
        event: a,
        callback: (c) => {
          let n = c;
          return (
            (0, r.containsSerialisedBlobs)(c) && (n = (0, r.deserialiseBlobsInPayload)(c)),
            t(n)
          );
        },
      });
  return ((ue.events = { emit: u, on: i }), ue);
}
var ar;
function qi() {
  if (ar) return se;
  ((ar = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.emitReadyEvent = void 0));
  const e = Hn(),
    r = Yn(),
    s = "EXTENSION_READY",
    u = async () => {
      const i = await r.view.getContext();
      await e.events.emit(s, { localId: i.localId });
    };
  return ((se.emitReadyEvent = u), se);
}
const Ai = "modulepreload",
  ji = function (e, r) {
    return new URL(e, r).href;
  },
  or = {},
  Ci = function (r, s, u) {
    let i = Promise.resolve();
    if (s && s.length > 0) {
      let n = function (o) {
        return Promise.all(
          o.map((f) =>
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
        s.map((o) => {
          if (((o = ji(o, u)), o in or)) return;
          or[o] = !0;
          const f = o.endsWith(".css"),
            h = f ? '[rel="stylesheet"]' : "";
          if (u)
            for (let p = t.length - 1; p >= 0; p--) {
              const _ = t[p];
              if (_.href === o && (!f || _.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${o}"]${h}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = f ? "stylesheet" : Ai),
            f || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = o),
            c && d.setAttribute("nonce", c),
            document.head.appendChild(d),
            f)
          )
            return new Promise((p, _) => {
              (d.addEventListener("load", p),
                d.addEventListener("error", () => _(new Error(`Unable to preload CSS for ${o}`))));
            });
        }),
      );
    }
    function a(t) {
      const l = new Event("vite:preloadError", { cancelable: !0 });
      if (((l.payload = t), window.dispatchEvent(l), !l.defaultPrevented)) throw t;
    }
    return i.then((t) => {
      for (const l of t || []) l.status === "rejected" && a(l.reason);
      return r().catch(a);
    });
  };
var le = {},
  lt = {},
  ce = {},
  Ge = {},
  sr;
function Jn() {
  if (sr) return Ge;
  ((sr = 1), Object.defineProperty(Ge, "__esModule", { value: !0 }), (Ge.default = s));
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
  return Ge;
}
var U = {},
  de = {},
  fe = {},
  ur;
function Mi() {
  if (ur) return fe;
  ((ur = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((fe.default = e), fe);
}
var lr;
function We() {
  if (lr) return de;
  ((lr = 1), Object.defineProperty(de, "__esModule", { value: !0 }), (de.default = void 0));
  var e = r(Mi());
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function s(i) {
    return typeof i == "string" && e.default.test(i);
  }
  var u = s;
  return ((de.default = u), de);
}
var cr;
function Xe() {
  if (cr) return U;
  ((cr = 1),
    Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.default = void 0),
    (U.unsafeStringify = u));
  var e = r(We());
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }
  const s = [];
  for (let t = 0; t < 256; ++t) s.push((t + 256).toString(16).slice(1));
  function u(t, l = 0) {
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
    const c = u(t, l);
    if (!(0, e.default)(c)) throw TypeError("Stringified UUID is invalid");
    return c;
  }
  var a = i;
  return ((U.default = a), U);
}
var dr;
function Di() {
  if (dr) return ce;
  ((dr = 1), Object.defineProperty(ce, "__esModule", { value: !0 }), (ce.default = void 0));
  var e = s(Jn()),
    r = Xe();
  function s(n) {
    return n && n.__esModule ? n : { default: n };
  }
  let u,
    i,
    a = 0,
    t = 0;
  function l(n, o, f) {
    let h = (o && f) || 0;
    const d = o || new Array(16);
    n = n || {};
    let p = n.node || u,
      _ = n.clockseq !== void 0 ? n.clockseq : i;
    if (p == null || _ == null) {
      const b = n.random || (n.rng || e.default)();
      (p == null && (p = u = [b[0] | 1, b[1], b[2], b[3], b[4], b[5]]),
        _ == null && (_ = i = ((b[6] << 8) | b[7]) & 16383));
    }
    let v = n.msecs !== void 0 ? n.msecs : Date.now(),
      g = n.nsecs !== void 0 ? n.nsecs : t + 1;
    const y = v - a + (g - t) / 1e4;
    if (
      (y < 0 && n.clockseq === void 0 && (_ = (_ + 1) & 16383),
      (y < 0 || v > a) && n.nsecs === void 0 && (g = 0),
      g >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((a = v), (t = g), (i = _), (v += 122192928e5));
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
    for (let b = 0; b < 6; ++b) d[h + b] = p[b];
    return o || (0, r.unsafeStringify)(d);
  }
  var c = l;
  return ((ce.default = c), ce);
}
var _e = {},
  j = {},
  ve = {},
  fr;
function Wn() {
  if (fr) return ve;
  ((fr = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  var e = r(We());
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function s(i) {
    if (!(0, e.default)(i)) throw TypeError("Invalid UUID");
    let a;
    const t = new Uint8Array(16);
    return (
      (t[0] = (a = parseInt(i.slice(0, 8), 16)) >>> 24),
      (t[1] = (a >>> 16) & 255),
      (t[2] = (a >>> 8) & 255),
      (t[3] = a & 255),
      (t[4] = (a = parseInt(i.slice(9, 13), 16)) >>> 8),
      (t[5] = a & 255),
      (t[6] = (a = parseInt(i.slice(14, 18), 16)) >>> 8),
      (t[7] = a & 255),
      (t[8] = (a = parseInt(i.slice(19, 23), 16)) >>> 8),
      (t[9] = a & 255),
      (t[10] = ((a = parseInt(i.slice(24, 36), 16)) / 1099511627776) & 255),
      (t[11] = (a / 4294967296) & 255),
      (t[12] = (a >>> 24) & 255),
      (t[13] = (a >>> 16) & 255),
      (t[14] = (a >>> 8) & 255),
      (t[15] = a & 255),
      t
    );
  }
  var u = s;
  return ((ve.default = u), ve);
}
var _r;
function Xn() {
  if (_r) return j;
  ((_r = 1),
    Object.defineProperty(j, "__esModule", { value: !0 }),
    (j.URL = j.DNS = void 0),
    (j.default = t));
  var e = Xe(),
    r = s(Wn());
  function s(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function u(l) {
    l = unescape(encodeURIComponent(l));
    const c = [];
    for (let n = 0; n < l.length; ++n) c.push(l.charCodeAt(n));
    return c;
  }
  const i = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  j.DNS = i;
  const a = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  j.URL = a;
  function t(l, c, n) {
    function o(f, h, d, p) {
      var _;
      if (
        (typeof f == "string" && (f = u(f)),
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
      o.name = l;
    } catch {}
    return ((o.DNS = i), (o.URL = a), o);
  }
  return j;
}
var he = {},
  vr;
function ki() {
  if (vr) return he;
  ((vr = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  function e(d) {
    if (typeof d == "string") {
      const p = unescape(encodeURIComponent(d));
      d = new Uint8Array(p.length);
      for (let _ = 0; _ < p.length; ++_) d[_] = p.charCodeAt(_);
    }
    return r(u(i(d), d.length * 8));
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
  function s(d) {
    return (((d + 64) >>> 9) << 4) + 14 + 1;
  }
  function u(d, p) {
    ((d[p >> 5] |= 128 << p % 32), (d[s(p) - 1] = p));
    let _ = 1732584193,
      v = -271733879,
      g = -1732584194,
      y = 271733878;
    for (let m = 0; m < d.length; m += 16) {
      const E = _,
        b = v,
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
        (_ = o(_, v, g, y, d[m + 5], 4, -378558)),
        (y = o(y, _, v, g, d[m + 8], 11, -2022574463)),
        (g = o(g, y, _, v, d[m + 11], 16, 1839030562)),
        (v = o(v, g, y, _, d[m + 14], 23, -35309556)),
        (_ = o(_, v, g, y, d[m + 1], 4, -1530992060)),
        (y = o(y, _, v, g, d[m + 4], 11, 1272893353)),
        (g = o(g, y, _, v, d[m + 7], 16, -155497632)),
        (v = o(v, g, y, _, d[m + 10], 23, -1094730640)),
        (_ = o(_, v, g, y, d[m + 13], 4, 681279174)),
        (y = o(y, _, v, g, d[m], 11, -358537222)),
        (g = o(g, y, _, v, d[m + 3], 16, -722521979)),
        (v = o(v, g, y, _, d[m + 6], 23, 76029189)),
        (_ = o(_, v, g, y, d[m + 9], 4, -640364487)),
        (y = o(y, _, v, g, d[m + 12], 11, -421815835)),
        (g = o(g, y, _, v, d[m + 15], 16, 530742520)),
        (v = o(v, g, y, _, d[m + 2], 23, -995338651)),
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
        (_ = a(_, E)),
        (v = a(v, b)),
        (g = a(g, A)),
        (y = a(y, V)));
    }
    return [_, v, g, y];
  }
  function i(d) {
    if (d.length === 0) return [];
    const p = d.length * 8,
      _ = new Uint32Array(s(p));
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
  function n(d, p, _, v, g, y, m) {
    return l((p & v) | (_ & ~v), d, p, g, y, m);
  }
  function o(d, p, _, v, g, y, m) {
    return l(p ^ _ ^ v, d, p, g, y, m);
  }
  function f(d, p, _, v, g, y, m) {
    return l(_ ^ (p | ~v), d, p, g, y, m);
  }
  var h = e;
  return ((he.default = h), he);
}
var hr;
function Ti() {
  if (hr) return _e;
  ((hr = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e = s(Xn()),
    r = s(ki());
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var i = (0, e.default)("v3", 48, r.default);
  return ((_e.default = i), _e);
}
var ge = {},
  pe = {},
  gr;
function Bi() {
  if (gr) return pe;
  ((gr = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((pe.default = r), pe);
}
var pr;
function Fi() {
  if (pr) return ge;
  ((pr = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  var e = u(Bi()),
    r = u(Jn()),
    s = Xe();
  function u(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function i(t, l, c) {
    if (e.default.randomUUID && !l && !t) return e.default.randomUUID();
    t = t || {};
    const n = t.random || (t.rng || r.default)();
    if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), l)) {
      c = c || 0;
      for (let o = 0; o < 16; ++o) l[c + o] = n[o];
      return l;
    }
    return (0, s.unsafeStringify)(n);
  }
  var a = i;
  return ((ge.default = a), ge);
}
var ye = {},
  me = {},
  yr;
function Ui() {
  if (yr) return me;
  ((yr = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.default = void 0));
  function e(i, a, t, l) {
    switch (i) {
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
  function r(i, a) {
    return (i << a) | (i >>> (32 - a));
  }
  function s(i) {
    const a = [1518500249, 1859775393, 2400959708, 3395469782],
      t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof i == "string") {
      const o = unescape(encodeURIComponent(i));
      i = [];
      for (let f = 0; f < o.length; ++f) i.push(o.charCodeAt(f));
    } else Array.isArray(i) || (i = Array.prototype.slice.call(i));
    i.push(128);
    const l = i.length / 4 + 2,
      c = Math.ceil(l / 16),
      n = new Array(c);
    for (let o = 0; o < c; ++o) {
      const f = new Uint32Array(16);
      for (let h = 0; h < 16; ++h)
        f[h] =
          (i[o * 64 + h * 4] << 24) |
          (i[o * 64 + h * 4 + 1] << 16) |
          (i[o * 64 + h * 4 + 2] << 8) |
          i[o * 64 + h * 4 + 3];
      n[o] = f;
    }
    ((n[c - 1][14] = ((i.length - 1) * 8) / Math.pow(2, 32)),
      (n[c - 1][14] = Math.floor(n[c - 1][14])),
      (n[c - 1][15] = ((i.length - 1) * 8) & 4294967295));
    for (let o = 0; o < c; ++o) {
      const f = new Uint32Array(80);
      for (let g = 0; g < 16; ++g) f[g] = n[o][g];
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
  var u = s;
  return ((me.default = u), me);
}
var mr;
function Li() {
  if (mr) return ye;
  ((mr = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.default = void 0));
  var e = s(Xn()),
    r = s(Ui());
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var i = (0, e.default)("v5", 80, r.default);
  return ((ye.default = i), ye);
}
var be = {},
  br;
function Ni() {
  if (br) return be;
  ((br = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((be.default = e), be);
}
var we = {},
  wr;
function Gi() {
  if (wr) return we;
  ((wr = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.default = void 0));
  var e = r(We());
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function s(i) {
    if (!(0, e.default)(i)) throw TypeError("Invalid UUID");
    return parseInt(i.slice(14, 15), 16);
  }
  var u = s;
  return ((we.default = u), we);
}
var Er;
function Vi() {
  return (
    Er ||
      ((Er = 1),
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
              return u.default;
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
        var r = o(Di()),
          s = o(Ti()),
          u = o(Fi()),
          i = o(Li()),
          a = o(Ni()),
          t = o(Gi()),
          l = o(We()),
          c = o(Xe()),
          n = o(Wn());
        function o(f) {
          return f && f.__esModule ? f : { default: f };
        }
      })(lt)),
    lt
  );
}
var Or;
function xi() {
  if (Or) return le;
  ((Or = 1),
    Object.defineProperty(le, "__esModule", { value: !0 }),
    (le.createAdfRendererIframeProps = void 0));
  const e = Vi(),
    r = async (s, u) => {
      const { iframeResizer: i } = await Ci(
          async () => {
            const { iframeResizer: n } = await import("./index-2D7JALmr.js").then((o) => o.i);
            return { iframeResizer: n };
          },
          [],
          import.meta.url,
        ),
        a = new URL(document.referrer).origin,
        t = `${a}/forge-apps/adf-renderer`,
        l = u || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        c = () => {
          var n, o;
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
            (o = f?.contentWindow) === null || o === void 0 || o.postMessage(h, a));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: l, src: t, onLoad: c }
      );
    };
  return ((le.createAdfRendererIframeProps = r), le);
}
var Rr;
function Yn() {
  if (Rr) return Y;
  ((Rr = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.view = void 0));
  const e = vi(),
    r = hi(),
    s = gi(),
    u = pi(),
    i = yi(),
    a = Ri(),
    t = Pi(),
    l = Si(),
    c = qi(),
    n = xi();
  return (
    (Y.view = {
      submit: e.submit,
      close: r.close,
      open: s.open,
      refresh: u.refresh,
      createHistory: i.createHistory,
      getContext: a.getContext,
      theme: l.theme,
      changeWindowTitle: t.changeWindowTitle,
      emitReadyEvent: c.emitReadyEvent,
      createAdfRendererIframeProps: n.createAdfRendererIframeProps,
    }),
    Y
  );
}
var Pr;
function It() {
  return (
    Pr ||
      ((Pr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(Yn(), e));
      })(nt)),
    nt
  );
}
var ct = {},
  Ee = {},
  Sr;
function zi() {
  if (Sr) return Ee;
  ((Sr = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.router = void 0));
  const r = (0, w().getCallBridge)(),
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
    u = (t) => {
      if (typeof t == "string") return r("navigate", { url: t, type: "same-tab" });
      if (!t?.target) throw new Error("target is required for navigation");
      return r("navigate", { ...t, type: "same-tab" });
    },
    i = (t) => {
      if (typeof t == "string") return r("navigate", { url: t, type: "new-tab" });
      if (!t?.target) throw new Error("target is required for navigation");
      return r("navigate", { ...t, type: "new-tab" });
    },
    a = async () => r("reload");
  return ((Ee.router = { getUrl: s, navigate: u, open: i, reload: a }), Ee);
}
var Ir;
function Ki() {
  return (
    Ir ||
      ((Ir = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(zi(), e));
      })(ct)),
    ct
  );
}
var dt = {},
  Oe = {},
  qr;
function Hi() {
  if (qr) return Oe;
  ((qr = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.Modal = void 0));
  const e = w(),
    r = O(),
    s = (0, e.getCallBridge)(),
    u = () => {};
  class i {
    constructor(t) {
      var l, c;
      ((this.resource = t?.resource || null),
        (this.onClose = t?.onClose || u),
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
  return ((Oe.Modal = i), Oe);
}
var Ar;
function Ji() {
  return (
    Ar ||
      ((Ar = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(Hi(), e));
      })(dt)),
    dt
  );
}
var P = {},
  T = {},
  jr;
function Wi() {
  if (jr) return T;
  ((jr = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.productFetchApi = T.remoteFetchApi = void 0));
  const e = Kn(),
    r = async (t) => {
      const l = {};
      for (const [c, n] of t.entries())
        if (c === "file") {
          const o = n.name,
            f = n.type;
          ((l.file = await (0, e.blobToBase64)(n)), (l.__fileName = o), (l.__fileType = f));
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
    u = async (t) => {
      const l = t?.body instanceof FormData,
        c = l ? await r(t?.body) : t?.body,
        n = new Request("", { body: c, method: t?.method, headers: t?.headers }),
        o = Object.fromEntries(n.headers.entries());
      return {
        body: n.method !== "GET" ? await n.text() : null,
        headers: new Headers(o),
        isMultipartFormData: l,
      };
    },
    i = (t) => {
      const l = async (c, n) => {
        const o = s(n),
          { body: f, headers: h, isMultipartFormData: d } = await u(o),
          p = {
            remoteKey: c,
            fetchRequestInit: { ...o, body: f, headers: [...h.entries()] },
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
  const a = (t) => {
    const l = async (c, n, o) => {
      const f = s(o),
        { body: h, headers: d, isMultipartFormData: p } = await u(f);
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
        b = E ? (0, e.base64ToBlob)(v, g["content-type"]) : v;
      return new Response(b || null, { headers: g, status: m, statusText: y });
    };
    return {
      requestConfluence: (c, n) => l("confluence", c, n),
      requestJira: (c, n) => l("jira", c, n),
      requestBitbucket: (c, n) => l("bitbucket", c, n),
    };
  };
  return ((T.productFetchApi = a), T);
}
var Cr;
function Xi() {
  if (Cr) return P;
  Cr = 1;
  var e;
  (Object.defineProperty(P, "__esModule", { value: !0 }),
    (P.requestRemote = P.requestBitbucket = P.requestJira = P.requestConfluence = void 0));
  const r = w(),
    s = Wi();
  return (
    (e = (0, s.productFetchApi)((0, r.getCallBridge)())),
    (P.requestConfluence = e.requestConfluence),
    (P.requestJira = e.requestJira),
    (P.requestBitbucket = e.requestBitbucket),
    (P.requestRemote = (0, s.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    P
  );
}
var ft = {},
  Re = {},
  Mr;
function Yi() {
  if (Mr) return Re;
  ((Mr = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.showFlag = void 0));
  const e = w(),
    r = O(),
    s = (0, e.getCallBridge)(),
    u = (i) => {
      var a;
      if (!i.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = s("showFlag", { ...i, type: (a = i.type) !== null && a !== void 0 ? a : "info" });
      return { close: async () => (await t, s("closeFlag", { id: i.id })) };
    };
  return ((Re.showFlag = u), Re);
}
var Dr;
function $i() {
  return (
    Dr ||
      ((Dr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = Yi();
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
  kr;
function Zi() {
  return (
    kr ||
      ((kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(Hn(), e));
      })(_t)),
    _t
  );
}
var vt = {},
  Pe = {},
  Tr;
function Qi() {
  if (Tr) return Pe;
  ((Tr = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.realtime = void 0));
  const r = (0, w().getCallBridge)(),
    s = (t, l, c) => r("publishRealtimeChannel", { channelName: t, eventPayload: l, options: c }),
    u = (t, l, c) => r("subscribeRealtimeChannel", { channelName: t, onEvent: l, options: c }),
    i = (t, l, c) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: l, options: c, isGlobal: !0 }),
    a = (t, l, c) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: l, options: c, isGlobal: !0 });
  return ((Pe.realtime = { publish: s, subscribe: u, publishGlobal: i, subscribeGlobal: a }), Pe);
}
var ht = {},
  Br;
function ea() {
  return (
    Br ||
      ((Br = 1),
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
var Fr;
function ta() {
  return (
    Fr ||
      ((Fr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var r = Qi();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return r.realtime;
          },
        });
        var s = ea();
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
  Se = {},
  pt = {},
  Ur;
function ra() {
  return (
    Ur ||
      ((Ur = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = w(),
          s = O(),
          u = 30,
          i = (0, r.getCallBridge)();
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
              if (l.agentName.length > u) throw new Error("rovo agent name too long");
              if (l.agentKey.length > u) throw new Error("rovo agent key too long");
            }
            const c = a(l);
            if ((await i("openRovo", c)) === !1)
              throw new s.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(pt)),
    pt
  );
}
var Lr;
function na() {
  if (Lr) return Se;
  ((Lr = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.rovo = void 0));
  const e = ra();
  return ((Se.rovo = { open: e.open }), Se);
}
var Nr;
function ia() {
  return (
    Nr ||
      ((Nr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(na(), e));
      })(gt)),
    gt
  );
}
var q = {},
  Gr;
function aa() {
  if (Gr) return q;
  ((Gr = 1),
    Object.defineProperty(q, "__esModule", { value: !0 }),
    (q.createTranslationFunction = q.getTranslations = q.resetTranslationsCache = void 0));
  const e = zn(),
    r = It(),
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
    u = new e.TranslationsGetter(s),
    i = () => {
      u.reset();
    };
  q.resetTranslationsCache = i;
  const a = async (l = null, c = { fallback: !0 }) => {
    let n = l;
    return (n || (n = (await r.view.getContext()).locale), await u.getTranslations(n, c));
  };
  q.getTranslations = a;
  const t = async (l = null) => {
    let c = l;
    c || (c = (await r.view.getContext()).locale);
    const n = new e.Translator(c, u);
    return (
      await n.init(),
      (o, f) => {
        var h, d;
        return (d = (h = n.translate(o)) !== null && h !== void 0 ? h : f) !== null && d !== void 0
          ? d
          : o;
      }
    );
  };
  return ((q.createTranslationFunction = t), q);
}
var yt = {},
  mt = {},
  bt = {},
  Ie = {},
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
var xr;
function Ye() {
  if (xr) return Ie;
  ((xr = 1),
    Object.defineProperty(Ie, "__esModule", { value: !0 }),
    (Ie.checkRestrictedEnvironment = void 0));
  const e = O(),
    r = It(),
    s = $n(),
    u = async () => {
      const { environmentType: i } = await r.view.getContext();
      if (i === "PRODUCTION")
        throw new e.BridgeAPIError(s.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Ie.checkRestrictedEnvironment = u), Ie);
}
var zr;
function oa() {
  return (
    zr ||
      ((zr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = Le(),
          s = O(),
          u = Ye(),
          a = (0, w().getCallBridge)(),
          t = (o, f) => {
            const h = atob(o),
              d = new Array(h.length);
            for (let _ = 0; _ < h.length; _++) d[_] = h.charCodeAt(_);
            const p = new Uint8Array(d);
            return new Blob([p], { type: f || "application/octet-stream" });
          },
          l = async (o) => {
            const f = o.size,
              h = await o.arrayBuffer(),
              d = await crypto.subtle.digest("SHA-256", h),
              p = new Uint8Array(d),
              _ = btoa(String.fromCharCode(...p));
            return { length: f, checksum: _, checksumType: "SHA256" };
          },
          c = async ({ functionKey: o, objects: f }) => {
            if (!o || o.length === 0)
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
              p = await (0, r.invoke)(o, { allObjectMetadata: d });
            if (!p || typeof p != "object")
              throw new s.BridgeAPIError("Invalid response from functionKey");
            const _ = new Map(),
              v = new Map();
            return (
              h.forEach((y, m) => {
                const E = d[m];
                (_.set(E.checksum, y), v.set(E.checksum, m));
              }),
              Object.entries(p).map(([y, m]) => {
                const { key: E, checksum: b } = m,
                  A = _.get(b),
                  V = v.get(b);
                return V === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: E,
                        error: `Index not found for checksum ${b}`,
                      }),
                      index: -1,
                    }
                  : A
                    ? {
                        promise: (async () => {
                          try {
                            const M = await fetch(y, {
                              method: "PUT",
                              body: A,
                              headers: {
                                "Content-Type": A.type || "application/octet-stream",
                                "Content-Length": A.size.toString(),
                              },
                            });
                            return {
                              success: M.ok,
                              key: E,
                              status: M.status,
                              error: M.ok ? void 0 : `Upload failed with status ${M.status}`,
                            };
                          } catch (M) {
                            return {
                              success: !1,
                              key: E,
                              status: 503,
                              error: M instanceof Error ? M.message : "Upload failed",
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
                          error: `Blob not found for checksum ${b}`,
                        }),
                        index: V,
                      };
              })
            );
          };
        e.createUploadPromises = c;
        const n = async ({ functionKey: o, objects: f }) => {
          (await (0, u.checkRestrictedEnvironment)(),
            a("trackObjectStoreAction", { action: "upload" }));
          const h = await (0, e.createUploadPromises)({ functionKey: o, objects: f });
          return await Promise.all(h.map((p) => p.promise));
        };
        e.upload = n;
      })(bt)),
    bt
  );
}
var Ae = {},
  Kr;
function sa() {
  if (Kr) return Ae;
  ((Kr = 1), Object.defineProperty(Ae, "__esModule", { value: !0 }), (Ae.deleteObjects = void 0));
  const e = Le(),
    r = O(),
    s = Ye(),
    i = (0, w().getCallBridge)(),
    a = async ({ functionKey: t, keys: l }) => {
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
  return ((Ae.deleteObjects = a), Ae);
}
var je = {},
  Hr;
function ua() {
  if (Hr) return je;
  ((Hr = 1), Object.defineProperty(je, "__esModule", { value: !0 }), (je.download = void 0));
  const e = Le(),
    r = O(),
    s = Ye(),
    i = (0, w().getCallBridge)(),
    a = async ({ functionKey: t, keys: l }) => {
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
  return ((je.download = a), je);
}
var Ce = {},
  Jr;
function la() {
  if (Jr) return Ce;
  ((Jr = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.getMetadata = void 0));
  const e = Le(),
    r = O(),
    s = Ye(),
    i = (0, w().getCallBridge)(),
    a = async ({ functionKey: t, keys: l }) => {
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
          const o = await (0, e.invoke)(t, { key: n });
          return !o || typeof o != "object"
            ? { key: n, error: "Invalid response from functionKey" }
            : o;
        }),
      );
    };
  return ((Ce.getMetadata = a), Ce);
}
var Wr;
function ca() {
  return (
    Wr ||
      ((Wr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const r = oa();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return r.createUploadPromises;
          },
        });
        const s = sa(),
          u = ua(),
          i = la();
        e.objectStore = {
          upload: r.upload,
          download: u.download,
          getMetadata: i.getMetadata,
          delete: s.deleteObjects,
        };
      })(mt)),
    mt
  );
}
var Xr;
function da() {
  return (
    Xr ||
      ((Xr = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(ca(), e), r.__exportStar($n(), e));
      })(yt)),
    yt
  );
}
var wt = {},
  Me = {},
  B = {},
  L = {},
  Ve = {},
  Yr;
function fa() {
  if (Yr) return Ve;
  ((Yr = 1), Object.defineProperty(Ve, "__esModule", { value: !0 }));
  const e = C();
  let r = class {
    constructor(u) {
      ((this._sdkKey = u),
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
    setValues(u, i) {
      var a;
      if (!u) return !1;
      const t = (0, e._typedJsonParse)(u.data, "has_updates", "EvaluationResponse");
      return t == null
        ? !1
        : ((this._source = u.source),
          t?.has_updates !== !0 ||
            ((this._rawValues = u.data),
            (this._lcut = t.time),
            (this._receivedAt = u.receivedAt),
            (this._values = t),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(u.source, t)),
            u.source && t.user && this._setWarningState(i, t),
            e.SDKFlags.setFlags(this._sdkKey, (a = t.sdk_flags) !== null && a !== void 0 ? a : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(u) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.feature_gates,
        u,
      );
    }
    getConfig(u) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.dynamic_configs,
        u,
      );
    }
    getLayer(u) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.layer_configs,
        u,
      );
    }
    getParamStore(u) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.param_stores,
        u,
      );
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var u;
      return (u = this._values) === null || u === void 0 ? void 0 : u.exposures;
    }
    _extractBootstrapMetadata(u, i) {
      if (u !== "Bootstrap") return null;
      const a = {};
      return (
        i.user && (a.user = i.user),
        i.sdkInfo && (a.generatorSDKInfo = i.sdkInfo),
        (a.lcut = i.time),
        a
      );
    }
    _getDetailedStoreResult(u, i) {
      let a = null;
      return (
        u && (a = u[i] ? u[i] : u[(0, e._DJB2)(i)]),
        { result: a, details: this._getDetails(a == null) }
      );
    }
    _setWarningState(u, i) {
      var a, t;
      const l = e.StableID.get(this._sdkKey);
      if (
        ((a = u.customIDs) === null || a === void 0 ? void 0 : a.stableID) !== l &&
        ((!((t = u.customIDs) === null || t === void 0) && t.stableID) || l)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in i) {
        const c = i.user;
        (0, e._getFullUserHash)(u) !== (0, e._getFullUserHash)(c) &&
          this._warnings.add("PartialUserMatch");
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues")
        return { reason: this._source };
      const u = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (u.warnings = Array.from(this._warnings)), u);
    }
    _getDetails(u) {
      var i, a;
      const t = this.getCurrentSourceDetails();
      let l = t.reason;
      const c = (i = t.warnings) !== null && i !== void 0 ? i : [];
      (this._source === "Bootstrap" && c.length > 0 && (l = l + c[0]),
        l !== "Uninitialized" &&
          l !== "NoValues" &&
          (l = `${l}:${u ? "Unrecognized" : "Recognized"}`));
      const n =
        this._source === "Bootstrap" && (a = this._bootstrapMetadata) !== null && a !== void 0
          ? a
          : void 0;
      return (n && (t.bootstrapMetadata = n), Object.assign(Object.assign({}, t), { reason: l }));
    }
  };
  return ((Ve.default = r), Ve);
}
var N = {},
  De = {},
  $r;
function _a() {
  if ($r) return De;
  (($r = 1),
    Object.defineProperty(De, "__esModule", { value: !0 }),
    (De._resolveDeltasResponse = void 0));
  const e = C(),
    r = 2;
  function s(t, l) {
    const c = (0, e._typedJsonParse)(l, "checksum", "DeltasEvaluationResponse");
    if (!c) return { hadBadDeltaChecksum: !0 };
    const n = u(t, c),
      o = i(n),
      f = (0, e._DJB2Object)(
        {
          feature_gates: o.feature_gates,
          dynamic_configs: o.dynamic_configs,
          layer_configs: o.layer_configs,
        },
        r,
      );
    return f === c.checksumV2
      ? JSON.stringify(o)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: f,
          badMergedConfigs: o,
          badFullResponse: c.deltas_full_response,
        };
  }
  De._resolveDeltasResponse = s;
  function u(t, l) {
    return Object.assign(Object.assign(Object.assign({}, t), l), {
      feature_gates: Object.assign(Object.assign({}, t.feature_gates), l.feature_gates),
      layer_configs: Object.assign(Object.assign({}, t.layer_configs), l.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, t.dynamic_configs), l.dynamic_configs),
    });
  }
  function i(t) {
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
var Zr;
function Zn() {
  if (Zr) return N;
  Zr = 1;
  var e =
    (N && N.__awaiter) ||
    function (i, a, t, l) {
      function c(n) {
        return n instanceof t
          ? n
          : new t(function (o) {
              o(n);
            });
      }
      return new (t || (t = Promise))(function (n, o) {
        function f(p) {
          try {
            d(l.next(p));
          } catch (_) {
            o(_);
          }
        }
        function h(p) {
          try {
            d(l.throw(p));
          } catch (_) {
            o(_);
          }
        }
        function d(p) {
          p.done ? n(p.value) : c(p.value).then(f, h);
        }
        d((l = l.apply(i, a || [])).next());
      });
    };
  Object.defineProperty(N, "__esModule", { value: !0 });
  const r = C(),
    s = _a();
  class u extends r.NetworkCore {
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
    fetchEvaluations(a, t, l, c, n) {
      return e(this, void 0, void 0, function* () {
        var o, f, h, d, p, _;
        const v = t ? (0, r._typedJsonParse)(t, "has_updates", "InitializeResponse") : null;
        let g = {
          user: c,
          hash:
            (h =
              (f = (o = this._option) === null || o === void 0 ? void 0 : o.networkConfig) ===
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
        return this._fetchEvaluations(a, v, g, l);
      });
    }
    _fetchEvaluations(a, t, l, c) {
      return e(this, void 0, void 0, function* () {
        var n, o;
        const f = yield this.post({
          sdkKey: a,
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
          ((o = f.body) === null || o === void 0 ? void 0 : o.includes('"is_delta":true')) !== !0 ||
          l.deltasResponseRequested !== !0
        )
          return f.body;
        const h = (0, s._resolveDeltasResponse)(t, f.body);
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
  return ((N.default = u), N);
}
var ke = {},
  Qr;
function va() {
  if (Qr) return ke;
  ((Qr = 1),
    Object.defineProperty(ke, "__esModule", { value: !0 }),
    (ke._makeParamStoreGetter = void 0));
  const e = C(),
    r = { disableExposureLog: !0 };
  function s(o) {
    return o == null || o.disableExposureLog === !1;
  }
  function u(o, f) {
    return f != null && !(0, e._isTypeMatch)(o, f);
  }
  function i(o, f) {
    return o.value;
  }
  function a(o, f, h) {
    return o.getFeatureGate(f.gate_name, s(h) ? void 0 : r).value ? f.pass_value : f.fail_value;
  }
  function t(o, f, h, d) {
    const _ = o.getDynamicConfig(f.config_name, s(d) ? void 0 : r).get(f.param_name);
    return u(_, h) ? h : _;
  }
  function l(o, f, h, d) {
    const _ = o.getExperiment(f.experiment_name, s(d) ? void 0 : r).get(f.param_name);
    return u(_, h) ? h : _;
  }
  function c(o, f, h, d) {
    const _ = o.getLayer(f.layer_name, s(d) ? void 0 : r).get(f.param_name);
    return u(_, h) ? h : _;
  }
  function n(o, f, h) {
    return (d, p) => {
      if (f == null) return p;
      const _ = f[d];
      if (_ == null || (p != null && (0, e._typeOf)(p) !== _.param_type)) return p;
      switch (_.ref_type) {
        case "static":
          return i(_);
        case "gate":
          return a(o, _, h);
        case "dynamic_config":
          return t(o, _, p, h);
        case "experiment":
          return l(o, _, p, h);
        case "layer":
          return c(o, _, p, h);
        default:
          return p;
      }
    };
  }
  return ((ke._makeParamStoreGetter = n), ke);
}
var F = {},
  en;
function ha() {
  if (en) return F;
  en = 1;
  var e =
    (F && F.__awaiter) ||
    function (i, a, t, l) {
      function c(n) {
        return n instanceof t
          ? n
          : new t(function (o) {
              o(n);
            });
      }
      return new (t || (t = Promise))(function (n, o) {
        function f(p) {
          try {
            d(l.next(p));
          } catch (_) {
            o(_);
          }
        }
        function h(p) {
          try {
            d(l.throw(p));
          } catch (_) {
            o(_);
          }
        }
        function d(p) {
          p.done ? n(p.value) : c(p.value).then(f, h);
        }
        d((l = l.apply(i, a || [])).next());
      });
    };
  (Object.defineProperty(F, "__esModule", { value: !0 }),
    (F.StatsigEvaluationsDataAdapter = void 0));
  const r = C(),
    s = Zn();
  let u = class extends r.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(a, t, l) {
      (super.attach(a, t, l),
        l !== null && l instanceof s.default
          ? (this._network = l)
          : (this._network = new s.default(t ?? {})));
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
        var n;
        const o = yield (n = this._network) === null || n === void 0
          ? void 0
          : n.fetchEvaluations(this._getSdkKey(), a, l?.priority, t, c);
        return o ?? null;
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
  return ((F.StatsigEvaluationsDataAdapter = u), F);
}
var tn;
function ga() {
  if (tn) return L;
  tn = 1;
  var e =
    (L && L.__awaiter) ||
    function (l, c, n, o) {
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
            v(o.next(g));
          } catch (y) {
            d(y);
          }
        }
        function _(g) {
          try {
            v(o.throw(g));
          } catch (y) {
            d(y);
          }
        }
        function v(g) {
          g.done ? h(g.value) : f(g.value).then(p, _);
        }
        v((o = o.apply(l, c || [])).next());
      });
    };
  Object.defineProperty(L, "__esModule", { value: !0 });
  const r = C(),
    s = fa(),
    u = Zn(),
    i = va(),
    a = ha();
  let t = class Pt extends r.StatsigClientBase {
    static instance(c) {
      const n = (0, r._getStatsigGlobal)().instance(c);
      return n instanceof Pt
        ? n
        : (r.Log.warn(
            (0, r._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Pt(c ?? "", {}));
    }
    constructor(c, n, o = null) {
      var f, h;
      r.SDKType._setClientType(c, "javascript-client");
      const d = new u.default(o, (_) => {
        this.$emt(_);
      });
      (super(
        c,
        (f = o?.dataAdapter) !== null && f !== void 0 ? f : new a.StatsigEvaluationsDataAdapter(),
        d,
        o,
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
        (this._user = this._configureUser(n, o)),
        (this._sdkInstanceID = (0, r.getUUID)()));
      const p = (h = o?.plugins) !== null && h !== void 0 ? h : [];
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
      const o = performance.now();
      try {
        return this._updateUserSyncImpl(c, n, o);
      } catch (f) {
        const h = f instanceof Error ? f : new Error(String(f));
        return this._createErrorUpdateDetails(h, o);
      }
    }
    _updateUserSyncImpl(c, n, o) {
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
            performance.now() - o,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            h,
          )
        : (this._runPostUpdate(d ?? null, this._user),
          (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - o,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            h,
          ));
    }
    updateUserAsync(c, n) {
      return e(this, void 0, void 0, function* () {
        const o = performance.now();
        try {
          return yield this._updateUserAsyncImpl(c, n);
        } catch (f) {
          const h = f instanceof Error ? f : new Error(String(f));
          return this._createErrorUpdateDetails(h, o);
        }
      });
    }
    _updateUserAsyncImpl(c, n) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(c);
        const o = this._user;
        r.Diagnostics._markInitOverallStart(this._sdkKey);
        let f = this.dataAdapter.getDataSync(o);
        if (
          (this._store.setValues(f, this._user),
          this._setStatus("Loading", f),
          (f = yield this.dataAdapter.getDataAsync(f, o, n)),
          o !== this._user)
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
    logEvent(c, n, o) {
      const f = typeof c == "string" ? { eventName: c, value: n, metadata: o } : c;
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
      var o;
      return (0, r.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - n,
        c,
        null,
        [...((o = this._store.getWarnings()) !== null && o !== void 0 ? o : [])],
      );
    }
    _finalizeUpdate(c) {
      (this._store.finalize(), this._setStatus("Ready", c));
    }
    _runPostUpdate(c, n) {
      this.dataAdapter.getDataAsync(c, n, { priority: "low" }).catch((o) => {
        r.Log.error("An error occurred after update.", o);
      });
    }
    _resetForUser(c) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(c, this._options)));
    }
    _configureUser(c, n) {
      var o;
      const f = (0, r._normalizeUser)(c, n),
        h = (o = f.customIDs) === null || o === void 0 ? void 0 : o.stableID;
      return (h && r.StableID.setOverride(h, this._sdkKey), f);
    }
    _getFeatureGateImpl(c, n) {
      var o, f;
      const { result: h, details: d } = this._store.getGate(c),
        p = (0, r._makeFeatureGate)(c, d, h),
        _ =
          (f = (o = this.overrideAdapter) === null || o === void 0 ? void 0 : o.getGateOverride) ===
            null || f === void 0
            ? void 0
            : f.call(o, p, this._user, n),
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
      var o, f;
      const { result: h, details: d } = this._store.getConfig(c),
        p = (0, r._makeDynamicConfig)(c, d, h),
        _ =
          (f =
            (o = this.overrideAdapter) === null || o === void 0
              ? void 0
              : o.getDynamicConfigOverride) === null || f === void 0
            ? void 0
            : f.call(o, p, this._user, n),
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
      var o, f, h, d;
      const { result: p, details: _ } = this._store.getConfig(c),
        v = (0, r._makeExperiment)(c, _, p);
      v.__evaluation != null &&
        (v.__evaluation.secondary_exposures = (0, r._mapExposures)(
          (f = (o = v.__evaluation) === null || o === void 0 ? void 0 : o.secondary_exposures) !==
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
      var o, f, h;
      const { result: d, details: p } = this._store.getLayer(c),
        _ = (0, r._makeLayer)(c, p, d),
        v =
          (f =
            (o = this.overrideAdapter) === null || o === void 0 ? void 0 : o.getLayerOverride) ===
            null || f === void 0
            ? void 0
            : f.call(o, _, this._user, n);
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
      var o, f;
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
            (o = this.overrideAdapter) === null || o === void 0
              ? void 0
              : o.getParamStoreOverride) === null || f === void 0
            ? void 0
            : f.call(o, p, n);
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
var rn;
function pa() {
  return (
    rn ||
      ((rn = 1),
      (function (e) {
        var r =
            (B && B.__createBinding) ||
            (Object.create
              ? function (t, l, c, n) {
                  n === void 0 && (n = c);
                  var o = Object.getOwnPropertyDescriptor(l, c);
                  ((!o || ("get" in o ? !l.__esModule : o.writable || o.configurable)) &&
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return l[c];
                      },
                    }),
                    Object.defineProperty(t, n, o));
                }
              : function (t, l, c, n) {
                  (n === void 0 && (n = c), (t[n] = l[c]));
                }),
          s =
            (B && B.__exportStar) ||
            function (t, l) {
              for (var c in t)
                c !== "default" && !Object.prototype.hasOwnProperty.call(l, c) && r(l, t, c);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const u = C(),
          i = ga();
        ((e.StatsigClient = i.default), s(C(), e));
        const a = Object.assign((0, u._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = a;
      })(B)),
    B
  );
}
var Te = {},
  Be = {},
  nn;
function ya() {
  if (nn) return Be;
  ((nn = 1),
    Object.defineProperty(Be, "__esModule", { value: !0 }),
    (Be.initFeatureFlags = void 0));
  const e = w(),
    r = O(),
    s = Je(),
    u = 500,
    i = 1e3 * 25,
    a = (0, e.getCallBridge)(),
    t = (c) => {
      if (!c || !c.user)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(c).some((n) => typeof n == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    l = (c) => (t(c), a("initFeatureFlags", { user: c.user }));
  return (
    (Be.initFeatureFlags = (0, s.withRateLimiter)(
      l,
      u,
      i,
      `Feature flags initialisation calls are rate limited at ${u}req/${i / 1e3}s`,
    )),
    Be
  );
}
var an;
function ma() {
  if (an) return Te;
  ((an = 1),
    Object.defineProperty(Te, "__esModule", { value: !0 }),
    (Te.ForgeDataAdapter = void 0));
  const e = ya();
  class r {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(u, i, a) {
      var t;
      if (u) return u;
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
    getDataSync(u) {
      return this.cache;
    }
    async attach(u, i, a) {
      this.options = i;
    }
    async prefetchData() {}
    async setData(u) {}
    async setDataLegacy(u) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((Te.ForgeDataAdapter = r), Te);
}
var Et = {},
  on;
function Qn() {
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
      })(Et)),
    Et
  );
}
var Fe = {},
  sn;
function ba() {
  if (sn) return Fe;
  ((sn = 1),
    Object.defineProperty(Fe, "__esModule", { value: !0 }),
    (Fe.trackFeatureFlagEvent = void 0));
  const e = w(),
    r = O(),
    s = Qn(),
    u = Je(),
    i = 500,
    a = 1e3 * 25,
    t = (0, e.getCallBridge)(),
    l = (n) => {
      if (!n || !n.type || !n.properties)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(n.type.toUpperCase() in s.FeatureFlagEventType))
        throw new r.BridgeAPIError("Event type is not supported");
      if (Object.values(n).some((o) => typeof o == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (n) => (l(n), t("trackFeatureFlagEvent", n));
  return (
    (Fe.trackFeatureFlagEvent = (0, u.withRateLimiter)(
      c,
      i,
      a,
      `Feature flags calls are rate limited at ${i}req/${a / 1e3}s`,
    )),
    Fe
  );
}
var un;
function wa() {
  if (un) return Me;
  ((un = 1),
    Object.defineProperty(Me, "__esModule", { value: !0 }),
    (Me.ForgeFeatureFlags = void 0));
  const e = pa(),
    r = ma(),
    s = Qn(),
    u = ba();
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
      (0, u.trackFeatureFlagEvent)(c);
    }
  }
  return ((Me.ForgeFeatureFlags = i), Me);
}
var ln;
function Ea() {
  return (
    ln ||
      ((ln = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var r = wa();
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
var cn;
function Oa() {
  return (
    cn ||
      ((cn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = S;
        var s = li();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return s.NavigationTarget;
          },
        }),
          r.__exportStar(Le(), e),
          r.__exportStar(_i(), e),
          r.__exportStar(It(), e),
          r.__exportStar(Ki(), e),
          r.__exportStar(Ji(), e),
          r.__exportStar(Xi(), e),
          r.__exportStar($i(), e),
          r.__exportStar(Zi(), e),
          r.__exportStar(ta(), e),
          r.__exportStar(ia(), e),
          (e.i18n = r.__importStar(aa())),
          r.__exportStar(da(), e),
          r.__exportStar(Ea(), e));
      })(Ze)),
    Ze
  );
}
var Ke = Oa();
async function Ue(e, r, s) {
  await Ke.showFlag({
    id: `checklist-${Date.now()}`,
    title: e,
    type: s,
    description: r,
    isAutoDismiss: !0,
  });
}
function Ra(e) {
  return new Date(e).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
  });
}
function dn() {
  return R.jsx("div", {
    className: "loading-overlay",
    children: R.jsx("div", { className: "loading-spinner" }),
  });
}
function Pa() {
  const [e, r] = Ne.useState({
      checkList: "[]",
      issueId: "",
      updatedAt: new Date(),
      updateDisplayName: "",
      updateId: "",
    }),
    [s, u] = Ne.useState(!0),
    [i, a] = Ne.useState(!1);
  Ne.useEffect(() => {
    t();
  }, []);
  const t = async () => {
      try {
        const n = await Ke.invoke("getCheckList");
        r(n);
      } catch {
        await Ue(
          "Checklist Loading Error",
          "Unable to load the checklist. Please try again later.",
          "error",
        );
      } finally {
        u(!1);
      }
    },
    l = async (n) => {
      try {
        a(!0);
        const o = await Ke.invoke(n ? "updateWithOptimisticLocking" : "update", e);
        o.error
          ? o.concurrent
            ? (await Ue(
                "Concurrent Modification Detected",
                `User ${o.data?.updateDisplayName} has modified the checklist before you. Your changes could not be saved.`,
                "error",
              ),
              await t())
            : await Ue(
                "Update Failed",
                o.message || "Unable to update the checklist. Please try again later.",
                "error",
              )
          : o.data &&
            (r(o.data),
            await Ue(
              "Update Successful",
              "The checklist has been successfully updated",
              "success",
            ));
      } catch {
        await Ue(
          "Update Error",
          "An error occurred while updating the checklist. Please try again later.",
          "error",
        );
      } finally {
        a(!1);
      }
    },
    c = (n) => {
      const o = [...JSON.parse(e.checkList)];
      ((o[n] = { ...o[n], done: !o[n].done }), r({ ...e, checkList: JSON.stringify(o) }));
    };
  return s
    ? R.jsx("div", { className: "checklist-container", children: R.jsx(dn, {}) })
    : R.jsxs("div", {
        className: "checklist-container",
        children: [
          i && R.jsx(dn, {}),
          R.jsxs("div", {
            className: "checklist-header",
            children: [
              R.jsx("h2", { children: "Issue Checklist" }),
              R.jsxs("div", {
                className: "last-update",
                children: ["Last updated by ", e.updateDisplayName, " on ", Ra(e.updatedAt)],
              }),
            ],
          }),
          R.jsx("div", {
            className: "checklist",
            children: JSON.parse(e.checkList).map((n, o) =>
              R.jsxs(
                "div",
                {
                  className: "checklist-item",
                  children: [
                    R.jsx("input", { type: "checkbox", checked: n.done, onChange: () => c(o) }),
                    R.jsx("span", { children: n.label }),
                  ],
                },
                o,
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
const Sa = document.getElementById("root"),
  Ia = ei.createRoot(Sa),
  fn = () => {
    Ia.render(R.jsx(Pa, {}));
  };
Ke.view.theme
  .enable()
  .then(() => {
    fn();
  })
  .catch((e) => {
    (console.error(e.message), fn());
  });
