const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-BdD-o7_m.js",
      "./react-dom-vendor-B_rzBOmK.js",
      "./client-core-vendor-D5B_tUbY.js",
      "./lodash-vendor-htvpa8uV.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as ut, a as Oa, c as Sh } from "./react-dom-vendor-B_rzBOmK.js";
import { g as Yt, a as Fs, r as Kt, b as wt, s as Ge } from "./client-core-vendor-D5B_tUbY.js";
import { r as Eh } from "./lodash-vendor-htvpa8uV.js";
function kh(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(n, i);
          a && Object.defineProperty(e, i, a.get ? a : { enumerable: !0, get: () => n[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
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
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = r(i);
    fetch(i.href, a);
  }
})();
var Qa = { exports: {} },
  Yr = {};
var bu;
function xh() {
  if (bu) return Yr;
  bu = 1;
  var e = ut(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, s, c) {
    var l,
      d = {},
      f = null,
      p = null;
    (c !== void 0 && (f = "" + c),
      s.key !== void 0 && (f = "" + s.key),
      s.ref !== void 0 && (p = s.ref));
    for (l in s) n.call(s, l) && !a.hasOwnProperty(l) && (d[l] = s[l]);
    if (u && u.defaultProps) for (l in ((s = u.defaultProps), s)) d[l] === void 0 && (d[l] = s[l]);
    return { $$typeof: t, type: u, key: f, ref: p, props: d, _owner: i.current };
  }
  return ((Yr.Fragment = r), (Yr.jsx = o), (Yr.jsxs = o), Yr);
}
var yu;
function Ch() {
  return (yu || ((yu = 1), (Qa.exports = xh())), Qa.exports);
}
var L = Ch(),
  b = ut();
const E = Yt(b),
  mu = kh({ __proto__: null, default: E }, [b]);
var eo = {},
  ns = function (e, t) {
    return (
      (ns =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
        }),
      ns(e, t)
    );
  };
function pf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ns(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var na = function () {
  return (
    (na =
      Object.assign ||
      function (t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
          r = arguments[n];
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
        }
        return t;
      }),
    na.apply(this, arguments)
  );
};
function hf(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
        (r[n[i]] = e[n[i]]);
  return r;
}
function gf(e, t, r, n) {
  var i = arguments.length,
    a = i < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    a = Reflect.decorate(e, t, r, n);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (o = e[u]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
  return (i > 3 && a && Object.defineProperty(t, r, a), a);
}
function _f(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function bf(e, t, r, n, i, a) {
  function o(_) {
    if (_ !== void 0 && typeof _ != "function") throw new TypeError("Function expected");
    return _;
  }
  for (
    var u = n.kind,
      s = u === "getter" ? "get" : u === "setter" ? "set" : "value",
      c = !t && e ? (n.static ? e : e.prototype) : null,
      l = t || (c ? Object.getOwnPropertyDescriptor(c, n.name) : {}),
      d,
      f = !1,
      p = r.length - 1;
    p >= 0;
    p--
  ) {
    var h = {};
    for (var v in n) h[v] = v === "access" ? {} : n[v];
    for (var v in n.access) h.access[v] = n.access[v];
    h.addInitializer = function (_) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      a.push(o(_ || null));
    };
    var g = (0, r[p])(u === "accessor" ? { get: l.get, set: l.set } : l[s], h);
    if (u === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = o(g.get)) && (l.get = d),
        (d = o(g.set)) && (l.set = d),
        (d = o(g.init)) && i.unshift(d));
    } else (d = o(g)) && (u === "field" ? i.unshift(d) : (l[s] = d));
  }
  (c && Object.defineProperty(c, n.name, l), (f = !0));
}
function yf(e, t, r) {
  for (var n = arguments.length > 2, i = 0; i < t.length; i++)
    r = n ? t[i].call(e, r) : t[i].call(e);
  return n ? r : void 0;
}
function mf(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function wf(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function Of(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Sf(e, t, r, n) {
  function i(a) {
    return a instanceof r
      ? a
      : new r(function (o) {
          o(a);
        });
  }
  return new (r || (r = Promise))(function (a, o) {
    function u(l) {
      try {
        c(n.next(l));
      } catch (d) {
        o(d);
      }
    }
    function s(l) {
      try {
        c(n.throw(l));
      } catch (d) {
        o(d);
      }
    }
    function c(l) {
      l.done ? a(l.value) : i(l.value).then(u, s);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function Ef(e, t) {
  var r = {
      label: 0,
      sent: function () {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: [],
    },
    n,
    i,
    a,
    o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (o.next = u(0)),
    (o.throw = u(1)),
    (o.return = u(2)),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function u(c) {
    return function (l) {
      return s([c, l]);
    };
  }
  function s(c) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && ((o = 0), c[0] && (r = 0)), r; )
      try {
        if (
          ((n = 1),
          i &&
            (a =
              c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) &&
            !(a = a.call(i, c[1])).done)
        )
          return a;
        switch (((i = 0), a && (c = [c[0] & 2, a.value]), c[0])) {
          case 0:
          case 1:
            a = c;
            break;
          case 4:
            return (r.label++, { value: c[1], done: !1 });
          case 5:
            (r.label++, (i = c[1]), (c = [0]));
            continue;
          case 7:
            ((c = r.ops.pop()), r.trys.pop());
            continue;
          default:
            if (
              ((a = r.trys), !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!a || (c[1] > a[0] && c[1] < a[3]))) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < a[1]) {
              ((r.label = a[1]), (a = c));
              break;
            }
            if (a && r.label < a[2]) {
              ((r.label = a[2]), r.ops.push(c));
              break;
            }
            (a[2] && r.ops.pop(), r.trys.pop());
            continue;
        }
        c = t.call(e, r);
      } catch (l) {
        ((c = [6, l]), (i = 0));
      } finally {
        n = a = 0;
      }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
var Sa = Object.create
  ? function (e, t, r, n) {
      n === void 0 && (n = r);
      var i = Object.getOwnPropertyDescriptor(t, r);
      ((!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) &&
        (i = {
          enumerable: !0,
          get: function () {
            return t[r];
          },
        }),
        Object.defineProperty(e, n, i));
    }
  : function (e, t, r, n) {
      (n === void 0 && (n = r), (e[n] = t[r]));
    };
function kf(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Sa(t, e, r);
}
function ia(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    r = t && e[t],
    n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e });
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Bs(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e),
    i,
    a = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; ) a.push(i.value);
  } catch (u) {
    o = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function xf() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Bs(arguments[t]));
  return e;
}
function Cf() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var a = arguments[t], o = 0, u = a.length; o < u; o++, i++) n[i] = a[o];
  return n;
}
function Rf(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), (a[n] = t[n]));
  return e.concat(a || Array.prototype.slice.call(t));
}
function Tr(e) {
  return this instanceof Tr ? ((this.v = e), this) : new Tr(e);
}
function Pf(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []),
    i,
    a = [];
  return (
    (i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    u("next"),
    u("throw"),
    u("return", o),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function o(p) {
    return function (h) {
      return Promise.resolve(h).then(p, d);
    };
  }
  function u(p, h) {
    n[p] &&
      ((i[p] = function (v) {
        return new Promise(function (g, _) {
          a.push([p, v, g, _]) > 1 || s(p, v);
        });
      }),
      h && (i[p] = h(i[p])));
  }
  function s(p, h) {
    try {
      c(n[p](h));
    } catch (v) {
      f(a[0][3], v);
    }
  }
  function c(p) {
    p.value instanceof Tr ? Promise.resolve(p.value.v).then(l, d) : f(a[0][2], p);
  }
  function l(p) {
    s("next", p);
  }
  function d(p) {
    s("throw", p);
  }
  function f(p, h) {
    (p(h), a.shift(), a.length && s(a[0][0], a[0][1]));
  }
}
function Af(e) {
  var t, r;
  return (
    (t = {}),
    n("next"),
    n("throw", function (i) {
      throw i;
    }),
    n("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function n(i, a) {
    t[i] = e[i]
      ? function (o) {
          return (r = !r) ? { value: Tr(e[i](o)), done: !1 } : a ? a(o) : o;
        }
      : a;
  }
}
function jf(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof ia == "function" ? ia(e) : e[Symbol.iterator]()),
      (r = {}),
      n("next"),
      n("throw"),
      n("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(a) {
    r[a] =
      e[a] &&
      function (o) {
        return new Promise(function (u, s) {
          ((o = e[a](o)), i(u, s, o.done, o.value));
        });
      };
  }
  function i(a, o, u, s) {
    Promise.resolve(s).then(function (c) {
      a({ value: c, done: u });
    }, o);
  }
}
function If(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var Rh = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  is = function (e) {
    return (
      (is =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      is(e)
    );
  };
function Df(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = is(e), n = 0; n < r.length; n++) r[n] !== "default" && Sa(t, e, r[n]);
  return (Rh(t, e), t);
}
function Tf(e) {
  return e && e.__esModule ? e : { default: e };
}
function Mf(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Lf(e, t, r, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r);
}
function Ff(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Bf(e, t, r) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var n, i;
    if (r) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      n = t[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((n = t[Symbol.dispose]), r && (i = n));
    }
    if (typeof n != "function") throw new TypeError("Object not disposable.");
    (i &&
      (n = function () {
        try {
          i.call(this);
        } catch (a) {
          return Promise.reject(a);
        }
      }),
      e.stack.push({ value: t, dispose: n, async: r }));
  } else r && e.stack.push({ async: !0 });
  return t;
}
var Ph =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Nf(e) {
  function t(a) {
    ((e.error = e.hasError ? new Ph(a, e.error, "An error was suppressed during disposal.") : a),
      (e.hasError = !0));
  }
  var r,
    n = 0;
  function i() {
    for (; (r = e.stack.pop()); )
      try {
        if (!r.async && n === 1) return ((n = 0), e.stack.push(r), Promise.resolve().then(i));
        if (r.dispose) {
          var a = r.dispose.call(r.value);
          if (r.async)
            return (
              (n |= 2),
              Promise.resolve(a).then(i, function (o) {
                return (t(o), i());
              })
            );
        } else n |= 1;
      } catch (o) {
        t(o);
      }
    if (n === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return i();
}
function zf(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (r, n, i, a, o) {
        return n
          ? t
            ? ".jsx"
            : ".js"
          : i && (!a || !o)
            ? r
            : i + a + "." + o.toLowerCase() + "js";
      })
    : e;
}
const Ah = {
    __extends: pf,
    __assign: na,
    __rest: hf,
    __decorate: gf,
    __param: _f,
    __esDecorate: bf,
    __runInitializers: yf,
    __propKey: mf,
    __setFunctionName: wf,
    __metadata: Of,
    __awaiter: Sf,
    __generator: Ef,
    __createBinding: Sa,
    __exportStar: kf,
    __values: ia,
    __read: Bs,
    __spread: xf,
    __spreadArrays: Cf,
    __spreadArray: Rf,
    __await: Tr,
    __asyncGenerator: Pf,
    __asyncDelegator: Af,
    __asyncValues: jf,
    __makeTemplateObject: If,
    __importStar: Df,
    __importDefault: Tf,
    __classPrivateFieldGet: Mf,
    __classPrivateFieldSet: Lf,
    __classPrivateFieldIn: Ff,
    __addDisposableResource: Bf,
    __disposeResources: Nf,
    __rewriteRelativeImportExtension: zf,
  },
  jh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Bf,
        get __assign() {
          return na;
        },
        __asyncDelegator: Af,
        __asyncGenerator: Pf,
        __asyncValues: jf,
        __await: Tr,
        __awaiter: Sf,
        __classPrivateFieldGet: Mf,
        __classPrivateFieldIn: Ff,
        __classPrivateFieldSet: Lf,
        __createBinding: Sa,
        __decorate: gf,
        __disposeResources: Nf,
        __esDecorate: bf,
        __exportStar: kf,
        __extends: pf,
        __generator: Ef,
        __importDefault: Tf,
        __importStar: Df,
        __makeTemplateObject: If,
        __metadata: Of,
        __param: _f,
        __propKey: mf,
        __read: Bs,
        __rest: hf,
        __rewriteRelativeImportExtension: zf,
        __runInitializers: yf,
        __setFunctionName: wf,
        __spread: xf,
        __spreadArray: Rf,
        __spreadArrays: Cf,
        __values: ia,
        default: Ah,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Et = Fs(jh);
var Xr = {},
  wu;
function Ih() {
  return (
    wu ||
      ((wu = 1),
      Object.defineProperty(Xr, "__esModule", { value: !0 }),
      (Xr.NavigationTarget = void 0),
      (Xr.NavigationTarget = {
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
    Xr
  );
}
var to = {},
  ro = {},
  Zr = {},
  Qr = {},
  Ou;
function be() {
  if (Ou) return Qr;
  ((Ou = 1), Object.defineProperty(Qr, "__esModule", { value: !0 }), (Qr.BridgeAPIError = void 0));
  class e extends Error {}
  return ((Qr.BridgeAPIError = e), Qr);
}
var Su;
function ce() {
  if (Su) return Zr;
  ((Su = 1), Object.defineProperty(Zr, "__esModule", { value: !0 }), (Zr.getCallBridge = void 0));
  const e = be();
  function t(n) {
    return !!n?.callBridge;
  }
  const r = () => {
    if (!t(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((Zr.getCallBridge = r), Zr);
}
var en = {},
  Eu;
function Ea() {
  if (Eu) return en;
  ((Eu = 1), Object.defineProperty(en, "__esModule", { value: !0 }), (en.withRateLimiter = void 0));
  const e = be(),
    t = (r, n, i, a) => {
      let o = Date.now(),
        u = 0;
      return async (...s) => {
        const c = Date.now();
        if ((c - o > i && ((o = c), (u = 0)), u >= n))
          throw new e.BridgeAPIError(a || "Too many invocations.");
        return ((u = u + 1), r(...s));
      };
    };
  return ((en.withRateLimiter = t), en);
}
var ku;
function Dh() {
  return (
    ku ||
      ((ku = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = ce(),
          r = be(),
          n = Ea(),
          i = (0, t.getCallBridge)(),
          a = (s) => {
            if (s && Object.values(s).some((c) => typeof c == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          o = (s, c) => {
            if (typeof s != "string") throw new r.BridgeAPIError("functionKey must be a string!");
            return (a(c), i("invoke", { functionKey: s, payload: c }));
          };
        e.invoke = (0, n.withRateLimiter)(
          o,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function u() {
          return e.invoke;
        }
        e.makeInvoke = u;
      })(ro)),
    ro
  );
}
var xu;
function Oi() {
  return (
    xu ||
      ((xu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Et.__exportStar(Dh(), e));
      })(to)),
    to
  );
}
var no = {},
  tn = {},
  io = {},
  Cu;
function Uf() {
  return (
    Cu ||
      ((Cu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = ce(),
          r = be(),
          n = Ea(),
          i = 500,
          a = 25,
          o = 1e3 * a;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const u = (0, t.getCallBridge)(),
          s = (d) => {
            if (d && Object.values(d).some((f) => typeof f == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          c = (d) => async (f) => {
            s(f);
            const p = { ...f, invokeType: `ui-${d.toLowerCase()}-fetch` },
              h = await u("invoke", p),
              { success: v, payload: g, error: _ } = h ?? {},
              y = { ...(v ? g : _) };
            if (y && y.headers)
              for (const w in y.headers)
                Array.isArray(y.headers[w]) && (y.headers[w] = y.headers[w].join(","));
            return y;
          },
          l = (d) => {
            const f = c(d);
            return (0, n.withRateLimiter)(
              f,
              i,
              o,
              `${d} invocation calls are rate limited at ${i}/${a}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(io)),
    io
  );
}
var Ru;
function Th() {
  if (Ru) return tn;
  ((Ru = 1), Object.defineProperty(tn, "__esModule", { value: !0 }), (tn.invokeRemote = void 0));
  const e = Uf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((tn.invokeRemote = t), tn);
}
var rn = {},
  Pu;
function Mh() {
  if (Pu) return rn;
  ((Pu = 1), Object.defineProperty(rn, "__esModule", { value: !0 }), (rn.invokeService = void 0));
  const e = Uf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((rn.invokeService = t), rn);
}
var Au;
function Lh() {
  return (
    Au ||
      ((Au = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Et;
        (t.__exportStar(Th(), e), t.__exportStar(Mh(), e));
      })(no)),
    no
  );
}
var ao = {},
  nn = {},
  an = {},
  ju;
function Fh() {
  if (ju) return an;
  ((ju = 1), Object.defineProperty(an, "__esModule", { value: !0 }), (an.submit = void 0));
  const e = ce(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      if ((await r("submit", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((an.submit = n), an);
}
var on = {},
  Iu;
function Bh() {
  if (Iu) return on;
  ((Iu = 1), Object.defineProperty(on, "__esModule", { value: !0 }), (on.close = void 0));
  const e = ce(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      try {
        if ((await r("close", i)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((on.close = n), on);
}
var sn = {},
  Du;
function Nh() {
  if (Du) return sn;
  ((Du = 1), Object.defineProperty(sn, "__esModule", { value: !0 }), (sn.open = void 0));
  const e = ce(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      try {
        if ((await r("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((sn.open = n), sn);
}
var un = {},
  Tu;
function zh() {
  if (Tu) return un;
  ((Tu = 1), Object.defineProperty(un, "__esModule", { value: !0 }), (un.refresh = void 0));
  const e = ce(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      if ((await r("refresh", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((un.refresh = n), un);
}
var cn = {},
  Mu;
function Uh() {
  if (Mu) return cn;
  ((Mu = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.createHistory = void 0));
  const t = (0, ce().getCallBridge)(),
    r = async () => {
      const n = await t("createHistory");
      return (
        n.listen((i) => {
          n.location = i;
        }),
        n
      );
    };
  return ((cn.createHistory = r), cn);
}
var ln = {},
  oo = {},
  Pt = {},
  Lu;
function qf() {
  return (
    Lu ||
      ((Lu = 1),
      Object.defineProperty(Pt, "__esModule", { value: !0 }),
      (Pt.FORGE_SUPPORTED_LOCALE_CODES =
        Pt.I18N_BUNDLE_FOLDER_NAME =
        Pt.I18N_INFO_FILE_NAME =
          void 0),
      (Pt.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (Pt.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (Pt.FORGE_SUPPORTED_LOCALE_CODES = [
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
    Pt
  );
}
var Qt = {},
  Fu;
function qh() {
  if (Fu) return Qt;
  ((Fu = 1),
    Object.defineProperty(Qt, "__esModule", { value: !0 }),
    (Qt.TranslationsGetter = Qt.TranslationGetterError = void 0));
  const e = (n, i) => {
    n.includes(i) || n.push(i);
  };
  class t extends Error {
    constructor(i) {
      (super(i), (this.name = "TranslationGetterError"));
    }
  }
  Qt.TranslationGetterError = t;
  class r {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(i) {
      this.resourcesAccessor = i;
    }
    async getTranslations(i, a = { fallback: !0 }) {
      const o = await this.getI18nInfoConfig(),
        { fallback: u } = a;
      if (!u) {
        let s;
        return (
          o.locales.includes(i) && (s = await this.getTranslationResource(i)),
          { translations: s ?? null, locale: i }
        );
      }
      for (const s of this.getLocaleLookupOrder(i, o)) {
        const c = await this.getTranslationResource(s);
        if (c) return { translations: c, locale: s };
      }
      return { translations: null, locale: i };
    }
    async getTranslationsByLocaleLookupOrder(i) {
      const a = await this.getI18nInfoConfig(),
        o = this.getLocaleLookupOrder(i, a);
      return await Promise.all(
        o.map(async (u) => {
          const s = await this.getTranslationResource(u);
          return { locale: u, translations: s };
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
        } catch (o) {
          throw o instanceof t ? o : new t(`Failed to get translation resource for locale: ${i}`);
        }
      return a;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (i) {
          throw i instanceof t ? i : new t("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(i, a) {
      const { locales: o, fallback: u } = a,
        s = [i],
        c = u[i];
      return (
        c && Array.isArray(c) && c.length > 0 && s.push(...c),
        e(s, a.fallback.default),
        s.filter((l) => o.includes(l))
      );
    }
  }
  return ((Qt.TranslationsGetter = r), Qt);
}
var dn = {},
  so = {},
  Bu;
function $f() {
  return (
    Bu ||
      ((Bu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = Et.__importDefault(Eh()),
          n = (a, o, u) => {
            const s = a[u];
            return s ? (0, e.getTranslationValueFromContent)(s, o) : null;
          };
        e.getTranslationValue = n;
        const i = (a, o) => {
          let u = a[o];
          if (!u) {
            const s = o.split(".");
            s.length > 1 && (u = (0, r.default)(a, s, null));
          }
          return typeof u == "string" ? u : null;
        };
        e.getTranslationValueFromContent = i;
      })(so)),
    so
  );
}
var Nu;
function $h() {
  if (Nu) return dn;
  ((Nu = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.Translator = void 0));
  const e = $f();
  class t {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(n, i) {
      ((this.locale = n), (this.translationsGetter = i));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(n) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let i = this.cache.get(n);
      if (i === void 0) {
        for (const { translations: a } of this.localeLookupOrderedTranslations) {
          const o = (0, e.getTranslationValueFromContent)(a, n);
          if (o !== null) {
            i = o;
            break;
          }
        }
        ((i = i ?? null), this.cache.set(n, i));
      }
      return i;
    }
  }
  return ((dn.Translator = t), dn);
}
var fn = {},
  zu;
function Vh() {
  if (zu) return fn;
  ((zu = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.ensureLocale = void 0));
  const e = qf(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    r = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    n = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (a, o) => {
        const [u] = o.split("-");
        return (a[u] || (a[u] = o), a);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    i = (a) => {
      const o = a.replace("_", "-");
      return t.has(o) ? o : (n[o] ?? r[o] ?? null);
    };
  return ((fn.ensureLocale = i), fn);
}
var uo = {},
  Uu;
function Gh() {
  return (
    Uu ||
      ((Uu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (c) => typeof c == "object" && c !== null && !Array.isArray(c),
          r = (c) => typeof c?.i18n == "string",
          n = (c) => c.startsWith("connect-"),
          i = (c) => c.startsWith("core:"),
          a = (c) => {
            const l = new Set(),
              d = (f, p) =>
                !t(f) || l.has(f)
                  ? []
                  : (l.add(f),
                    Object.entries(f).flatMap(([h, v]) => {
                      const g = [...p, h];
                      return r(v)
                        ? [{ propertyPath: g, key: v.i18n }]
                        : Array.isArray(v)
                          ? v.flatMap((_) => d(_, g))
                          : d(v, g);
                    }));
            return d(c, []);
          },
          o = (c) =>
            Object.entries(c).flatMap(([l, d]) =>
              !n(l) && !i(l) && d && Array.isArray(d) && d.length > 0 ? d.map((f) => [f, l]) : [],
            );
        e.getI18nSupportedModuleEntries = o;
        const u = (c) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(c)) {
            const f = a(d[0]);
            for (const { key: p } of f) l.add(p);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = u;
        const s = (c) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(c)) {
            const f = a(d[0]);
            for (const p of f) l.push({ moduleName: d[1], ...p });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = s;
      })(uo)),
    uo
  );
}
var co = {},
  qu;
function Hh() {
  return (qu || ((qu = 1), Object.defineProperty(co, "__esModule", { value: !0 })), co);
}
var $u;
function Vf() {
  return (
    $u ||
      (($u = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = Et;
        (t.__exportStar(qf(), e),
          t.__exportStar(qh(), e),
          t.__exportStar($h(), e),
          t.__exportStar(Vh(), e));
        var r = $f();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Gh();
        (Object.defineProperty(e, "extractI18nKeysFromModules", {
          enumerable: !0,
          get: function () {
            return n.extractI18nKeysFromModules;
          },
        }),
          Object.defineProperty(e, "extractI18nPropertiesFromModules", {
            enumerable: !0,
            get: function () {
              return n.extractI18nPropertiesFromModules;
            },
          }),
          Object.defineProperty(e, "getI18nSupportedModuleEntries", {
            enumerable: !0,
            get: function () {
              return n.getI18nSupportedModuleEntries;
            },
          }),
          t.__exportStar(Hh(), e));
      })(oo)),
    oo
  );
}
var Vu;
function Wh() {
  if (Vu) return ln;
  ((Vu = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.getContext = void 0));
  const e = ce(),
    t = Vf(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var i;
      const a = await r("getContext"),
        o = a?.locale;
      return (o && (a.locale = (i = (0, t.ensureLocale)(o)) !== null && i !== void 0 ? i : o), a);
    };
  return ((ln.getContext = n), ln);
}
var vn = {},
  Gu;
function Kh() {
  if (Gu) return vn;
  ((Gu = 1),
    Object.defineProperty(vn, "__esModule", { value: !0 }),
    (vn.changeWindowTitle = void 0));
  const e = ce(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      try {
        await r("changeWindowTitle", i);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((vn.changeWindowTitle = n), vn);
}
var pn = {},
  Hu;
function Jh() {
  if (Hu) return pn;
  ((Hu = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.theme = void 0));
  const t = (0, ce().getCallBridge)();
  return ((pn.theme = { enable: () => t("enableTheming") }), pn);
}
var hn = {},
  gn = {},
  lo = {},
  er = {},
  Wu;
function Gf() {
  if (Wu) return er;
  ((Wu = 1),
    Object.defineProperty(er, "__esModule", { value: !0 }),
    (er.blobToBase64 = er.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const i = r.includes(";base64") ? r.split(",")[1] : r,
      a = atob(i),
      o = new Array(a.length);
    for (let s = 0; s < a.length; s++) o[s] = a.charCodeAt(s);
    const u = new Uint8Array(o);
    return new Blob([u], { type: n });
  };
  er.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, i) => {
      const a = new FileReader();
      ((a.onloadend = () => {
        n(a.result);
      }),
        (a.onerror = i),
        a.readAsDataURL(r));
    });
  return ((er.blobToBase64 = t), er);
}
var Ku;
function Yh() {
  return (
    Ku ||
      ((Ku = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Gf(),
          r = (c) => {
            if (
              typeof c != "object" ||
              c === null ||
              Object.prototype.toString.call(c) !== "[object Object]"
            )
              return !1;
            const l = Object.getPrototypeOf(c);
            if (l === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(l, "constructor") && l.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(c)
            );
          },
          n = async (c) => ({ data: await (0, t.blobToBase64)(c), type: c.type }),
          i = (c) => (0, t.base64ToBlob)(c.data, c.type),
          a = async (c) => {
            if (c instanceof Blob) return { ...(await n(c)), __isBlobData: !0 };
            if (Array.isArray(c))
              return Promise.all(c.map((l) => (0, e.serialiseBlobsInPayload)(l)));
            if (c && r(c)) {
              const l = await Promise.all(
                Object.entries(c).map(async ([d, f]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(f),
                ]),
              );
              return Object.fromEntries(l);
            }
            return c;
          };
        e.serialiseBlobsInPayload = a;
        const o = (c) => {
          if (c && r(c) && "__isBlobData" in c) {
            const l = c;
            return i({ data: l.data, type: l.type });
          }
          if (Array.isArray(c)) return c.map((l) => (0, e.deserialiseBlobsInPayload)(l));
          if (c && r(c)) {
            const l = {};
            for (const [d, f] of Object.entries(c)) l[d] = (0, e.deserialiseBlobsInPayload)(f);
            return l;
          }
          return c;
        };
        e.deserialiseBlobsInPayload = o;
        const u = (c) =>
          c instanceof Blob
            ? !0
            : Array.isArray(c)
              ? c.some((l) => (0, e.containsBlobs)(l))
              : c && r(c)
                ? Object.values(c).some((l) => (0, e.containsBlobs)(l))
                : !1;
        e.containsBlobs = u;
        const s = (c) =>
          c && r(c) && "__isBlobData" in c
            ? !0
            : Array.isArray(c)
              ? c.some((l) => (0, e.containsSerialisedBlobs)(l))
              : c && r(c)
                ? Object.values(c).some((l) => (0, e.containsSerialisedBlobs)(l))
                : !1;
        e.containsSerialisedBlobs = s;
      })(lo)),
    lo
  );
}
var Ju;
function Hf() {
  if (Ju) return gn;
  ((Ju = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.events = void 0));
  const e = ce(),
    t = Yh(),
    r = (0, e.getCallBridge)(),
    n = async (a, o) => {
      let u = o;
      return (
        (0, t.containsBlobs)(o) && (u = await (0, t.serialiseBlobsInPayload)(o)),
        r("emit", { event: a, payload: u })
      );
    },
    i = (a, o) =>
      r("on", {
        event: a,
        callback: (s) => {
          let c = s;
          return (
            (0, t.containsSerialisedBlobs)(s) && (c = (0, t.deserialiseBlobsInPayload)(s)),
            o(c)
          );
        },
      });
  return ((gn.events = { emit: n, on: i }), gn);
}
var Yu;
function Xh() {
  if (Yu) return hn;
  ((Yu = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.emitReadyEvent = void 0));
  const e = Hf(),
    t = Wf(),
    r = "EXTENSION_READY",
    n = async () => {
      const i = await t.view.getContext();
      await e.events.emit(r, { localId: i.localId });
    };
  return ((hn.emitReadyEvent = n), hn);
}
var Xu;
function Wf() {
  if (Xu) return nn;
  ((Xu = 1), Object.defineProperty(nn, "__esModule", { value: !0 }), (nn.view = void 0));
  const e = Fh(),
    t = Bh(),
    r = Nh(),
    n = zh(),
    i = Uh(),
    a = Wh(),
    o = Kh(),
    u = Jh(),
    s = Xh();
  return (
    (nn.view = {
      submit: e.submit,
      close: t.close,
      open: r.open,
      refresh: n.refresh,
      createHistory: i.createHistory,
      getContext: a.getContext,
      theme: u.theme,
      changeWindowTitle: o.changeWindowTitle,
      emitReadyEvent: s.emitReadyEvent,
    }),
    nn
  );
}
var Zu;
function Ns() {
  return (
    Zu ||
      ((Zu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Et.__exportStar(Wf(), e));
      })(ao)),
    ao
  );
}
var fo = {},
  _n = {},
  Qu;
function Zh() {
  if (Qu) return _n;
  ((Qu = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.router = void 0));
  const t = (0, ce().getCallBridge)(),
    r = async (o) => {
      if (!o?.target) throw new Error("target is required for getUrl");
      const u = await t("getUrl", o);
      if (!u) throw new Error("Failed to get URL");
      try {
        return new URL(u);
      } catch (s) {
        throw new Error(`Failed to parse URL: ${u} (${s})`);
      }
    },
    n = (o) => {
      if (typeof o == "string") return t("navigate", { url: o, type: "same-tab" });
      if (!o?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...o, type: "same-tab" });
    },
    i = (o) => {
      if (typeof o == "string") return t("navigate", { url: o, type: "new-tab" });
      if (!o?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...o, type: "new-tab" });
    },
    a = async () => t("reload");
  return ((_n.router = { getUrl: r, navigate: n, open: i, reload: a }), _n);
}
var ec;
function Qh() {
  return (
    ec ||
      ((ec = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Et.__exportStar(Zh(), e));
      })(fo)),
    fo
  );
}
var vo = {},
  bn = {},
  tc;
function eg() {
  if (tc) return bn;
  ((tc = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.Modal = void 0));
  const e = ce(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = () => {};
  class i {
    constructor(o) {
      var u, s;
      ((this.resource = o?.resource || null),
        (this.onClose = o?.onClose || n),
        (this.size = o?.size || "medium"),
        (this.context = o?.context || {}),
        (this.closeOnEscape = (u = o?.closeOnEscape) !== null && u !== void 0 ? u : !0),
        (this.closeOnOverlayClick =
          (s = o?.closeOnOverlayClick) !== null && s !== void 0 ? s : !0));
    }
    async open() {
      try {
        if (
          (await r("openModal", {
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
  return ((bn.Modal = i), bn);
}
var rc;
function tg() {
  return (
    rc ||
      ((rc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Et.__exportStar(eg(), e));
      })(vo)),
    vo
  );
}
var At = {},
  yn = {},
  nc;
function rg() {
  if (nc) return yn;
  ((nc = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.productFetchApi = void 0));
  const e = Gf(),
    t = async (a) => {
      const o = {};
      for (const [u, s] of a.entries())
        if (u === "file") {
          const c = s.name,
            l = s.type;
          ((o.file = await (0, e.blobToBase64)(s)), (o.__fileName = c), (o.__fileType = l));
        } else o[u] = s;
      return JSON.stringify(o);
    },
    r = (a) => {
      if (!a) return a;
      if ("signal" in a) {
        const { signal: o, ...u } = a;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          u
        );
      }
      return a;
    },
    n = async (a) => {
      const o = a?.body instanceof FormData,
        u = o ? await t(a?.body) : a?.body,
        s = new Request("", { body: u, method: a?.method, headers: a?.headers }),
        c = Object.fromEntries(s.headers.entries());
      return {
        body: s.method !== "GET" ? await s.text() : null,
        headers: new Headers(c),
        isMultipartFormData: o,
      };
    },
    i = (a) => {
      const o = async (u, s, c) => {
        const l = r(c),
          { body: d, headers: f, isMultipartFormData: p } = await n(l);
        f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
        const h = {
            product: u,
            restPath: s,
            fetchRequestInit: { ...l, body: d, headers: [...f.entries()] },
            isMultipartFormData: p,
          },
          {
            body: v,
            headers: g,
            statusText: _,
            status: y,
            isAttachment: w,
          } = await a("fetchProduct", h),
          O = w ? (0, e.base64ToBlob)(v, g["content-type"]) : v;
        return new Response(O || null, { headers: g, status: y, statusText: _ });
      };
      return {
        requestConfluence: (u, s) => o("confluence", u, s),
        requestJira: (u, s) => o("jira", u, s),
        requestBitbucket: (u, s) => o("bitbucket", u, s),
      };
    };
  return ((yn.productFetchApi = i), yn);
}
var ic;
function ng() {
  if (ic) return At;
  ic = 1;
  var e;
  (Object.defineProperty(At, "__esModule", { value: !0 }),
    (At.requestBitbucket = At.requestJira = At.requestConfluence = void 0));
  const t = ce();
  return (
    (e = (0, rg().productFetchApi)((0, t.getCallBridge)())),
    (At.requestConfluence = e.requestConfluence),
    (At.requestJira = e.requestJira),
    (At.requestBitbucket = e.requestBitbucket),
    At
  );
}
var po = {},
  mn = {},
  ac;
function ig() {
  if (ac) return mn;
  ((ac = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.showFlag = void 0));
  const e = ce(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = (i) => {
      var a;
      if (!i.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const o = r("showFlag", { ...i, type: (a = i.type) !== null && a !== void 0 ? a : "info" });
      return { close: async () => (await o, r("closeFlag", { id: i.id })) };
    };
  return ((mn.showFlag = n), mn);
}
var oc;
function ag() {
  return (
    oc ||
      ((oc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = ig();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(po)),
    po
  );
}
var ho = {},
  sc;
function og() {
  return (
    sc ||
      ((sc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Et.__exportStar(Hf(), e));
      })(ho)),
    ho
  );
}
var go = {},
  wn = {},
  uc;
function sg() {
  if (uc) return wn;
  ((uc = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.realtime = void 0));
  const t = (0, ce().getCallBridge)(),
    r = (o, u, s) => t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s }),
    n = (o, u, s) => t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s }),
    i = (o, u, s) =>
      t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s, isGlobal: !0 }),
    a = (o, u, s) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s, isGlobal: !0 });
  return ((wn.realtime = { publish: r, subscribe: n, publishGlobal: i, subscribeGlobal: a }), wn);
}
var _o = {},
  cc;
function ug() {
  return (
    cc ||
      ((cc = 1),
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
      })(_o)),
    _o
  );
}
var lc;
function cg() {
  return (
    lc ||
      ((lc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = sg();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = ug();
        (Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return r.Jira;
          },
        }),
          Object.defineProperty(e, "Confluence", {
            enumerable: !0,
            get: function () {
              return r.Confluence;
            },
          }),
          Object.defineProperty(e, "Bitbucket", {
            enumerable: !0,
            get: function () {
              return r.Bitbucket;
            },
          }));
      })(go)),
    go
  );
}
var jt = {},
  dc;
function lg() {
  if (dc) return jt;
  ((dc = 1),
    Object.defineProperty(jt, "__esModule", { value: !0 }),
    (jt.createTranslationFunction = jt.getTranslations = jt.resetTranslationsCache = void 0));
  const e = Vf(),
    t = Ns(),
    r = {
      getI18nInfoConfig: async () => {
        const u = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!u.ok) throw new Error("Failed to get i18n info config: " + u.statusText);
        return (await u.json()).config;
      },
      getTranslationResource: async (u) => {
        const s = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${u}.json`);
        if (!s.ok) throw new Error(`Failed to get translation resource for locale: ${u}`);
        return s.json();
      },
    },
    n = new e.TranslationsGetter(r),
    i = () => {
      n.reset();
    };
  jt.resetTranslationsCache = i;
  const a = async (u = null, s = { fallback: !0 }) => {
    let c = u;
    return (c || (c = (await t.view.getContext()).locale), await n.getTranslations(c, s));
  };
  jt.getTranslations = a;
  const o = async (u = null) => {
    let s = u;
    s || (s = (await t.view.getContext()).locale);
    const c = new e.Translator(s, n);
    return (
      await c.init(),
      (l, d) => {
        var f, p;
        return (p = (f = c.translate(l)) !== null && f !== void 0 ? f : d) !== null && p !== void 0
          ? p
          : l;
      }
    );
  };
  return ((jt.createTranslationFunction = o), jt);
}
var bo = {},
  yo = {},
  mo = {},
  On = {},
  Sn = {},
  fc;
function Kf() {
  return (
    fc ||
      ((fc = 1),
      Object.defineProperty(Sn, "__esModule", { value: !0 }),
      (Sn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Sn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Sn
  );
}
var vc;
function ka() {
  if (vc) return On;
  ((vc = 1),
    Object.defineProperty(On, "__esModule", { value: !0 }),
    (On.checkRestrictedEnvironment = void 0));
  const e = be(),
    t = Ns(),
    r = Kf(),
    n = async () => {
      const { environmentType: i } = await t.view.getContext();
      if (i === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((On.checkRestrictedEnvironment = n), On);
}
var pc;
function dg() {
  return (
    pc ||
      ((pc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = Oi(),
          r = be(),
          n = ka(),
          a = (0, ce().getCallBridge)(),
          o = (l, d) => {
            const f = atob(l),
              p = new Array(f.length);
            for (let v = 0; v < f.length; v++) p[v] = f.charCodeAt(v);
            const h = new Uint8Array(p);
            return new Blob([h], { type: d || "application/octet-stream" });
          },
          u = async (l) => {
            const d = l.size,
              f = await l.arrayBuffer(),
              p = await crypto.subtle.digest("SHA-256", f),
              h = new Uint8Array(p),
              v = btoa(String.fromCharCode(...h));
            return { length: d, checksum: v, checksumType: "SHA256" };
          },
          s = async ({ functionKey: l, objects: d }) => {
            if (!l || l.length === 0)
              throw new r.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(d) || d.length === 0)
              throw new r.BridgeAPIError("objects array is required and must not be empty");
            const f = d.map((y, w) => {
                if (y instanceof Blob) return y;
                if (!(y && typeof y == "object" && "data" in y && typeof y.data == "string"))
                  throw new r.BridgeAPIError(
                    `Invalid object type at index ${w}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return o(y.data, y.mimeType);
                } catch {
                  throw new r.BridgeAPIError(
                    `Invalid base64 data at index ${w}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              p = await Promise.all(f.map((y) => u(y))),
              h = await (0, t.invoke)(l, { allObjectMetadata: p });
            if (!h || typeof h != "object")
              throw new r.BridgeAPIError("Invalid response from functionKey");
            const v = new Map(),
              g = new Map();
            return (
              f.forEach((y, w) => {
                const O = p[w];
                (v.set(O.checksum, y), g.set(O.checksum, w));
              }),
              Object.entries(h).map(([y, w]) => {
                const { key: O, checksum: m } = w,
                  S = v.get(m),
                  x = g.get(m);
                return x === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: O,
                        error: `Index not found for checksum ${m}`,
                      }),
                      index: -1,
                    }
                  : S
                    ? {
                        promise: (async () => {
                          try {
                            const j = await fetch(y, {
                              method: "PUT",
                              body: S,
                              headers: {
                                "Content-Type": S.type || "application/octet-stream",
                                "Content-Length": S.size.toString(),
                              },
                            });
                            return {
                              success: j.ok,
                              key: O,
                              status: j.status,
                              error: j.ok ? void 0 : `Upload failed with status ${j.status}`,
                            };
                          } catch (j) {
                            return {
                              success: !1,
                              key: O,
                              status: 503,
                              error: j instanceof Error ? j.message : "Upload failed",
                            };
                          }
                        })(),
                        index: x,
                        objectType: S.type,
                        objectSize: S.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: O,
                          error: `Blob not found for checksum ${m}`,
                        }),
                        index: x,
                      };
              })
            );
          };
        e.createUploadPromises = s;
        const c = async ({ functionKey: l, objects: d }) => {
          (await (0, n.checkRestrictedEnvironment)(),
            a("trackObjectStoreAction", { action: "upload" }));
          const f = await (0, e.createUploadPromises)({ functionKey: l, objects: d });
          return await Promise.all(f.map((h) => h.promise));
        };
        e.upload = c;
      })(mo)),
    mo
  );
}
var En = {},
  hc;
function fg() {
  if (hc) return En;
  ((hc = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.deleteObjects = void 0));
  const e = Oi(),
    t = be(),
    r = ka(),
    i = (0, ce().getCallBridge)(),
    a = async ({ functionKey: o, keys: u }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        i("trackObjectStoreAction", { action: "delete" }),
        !o || o.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to delete objects");
      if (!Array.isArray(u) || u.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      await Promise.all(
        u.map(async (s) => {
          await (0, e.invoke)(o, { key: s });
        }),
      );
    };
  return ((En.deleteObjects = a), En);
}
var kn = {},
  gc;
function vg() {
  if (gc) return kn;
  ((gc = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.download = void 0));
  const e = Oi(),
    t = be(),
    r = ka(),
    i = (0, ce().getCallBridge)(),
    a = async ({ functionKey: o, keys: u }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        i("trackObjectStoreAction", { action: "download" }),
        !o || o.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(u) || u.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      const s = await (0, e.invoke)(o, { keys: u });
      if (!s || typeof s != "object")
        throw new t.BridgeAPIError("Invalid response from functionKey");
      const c = Object.entries(s).map(async ([d, f]) => {
        try {
          const p = await fetch(d, { method: "GET" });
          if (!p.ok)
            return {
              success: !1,
              key: f,
              status: p.status,
              error: `Download failed with status ${p.status}`,
            };
          const h = await p.blob();
          return { success: !0, key: f, blob: h, status: p.status };
        } catch (p) {
          return {
            success: !1,
            key: f,
            status: 503,
            error: p instanceof Error ? p.message : "Download failed",
          };
        }
      });
      return await Promise.all(c);
    };
  return ((kn.download = a), kn);
}
var xn = {},
  _c;
function pg() {
  if (_c) return xn;
  ((_c = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.getMetadata = void 0));
  const e = Oi(),
    t = be(),
    r = ka(),
    i = (0, ce().getCallBridge)(),
    a = async ({ functionKey: o, keys: u }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        i("trackObjectStoreAction", { action: "getMetadata" }),
        !o || o.length === 0)
      )
        throw new t.BridgeAPIError(
          "functionKey is required to filter and generate object metadata",
        );
      if (!Array.isArray(u) || u.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      return await Promise.all(
        u.map(async (c) => {
          const l = await (0, e.invoke)(o, { key: c });
          return !l || typeof l != "object"
            ? { key: c, error: "Invalid response from functionKey" }
            : l;
        }),
      );
    };
  return ((xn.getMetadata = a), xn);
}
var bc;
function hg() {
  return (
    bc ||
      ((bc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = dg();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = fg(),
          n = vg(),
          i = pg();
        e.objectStore = {
          upload: t.upload,
          download: n.download,
          getMetadata: i.getMetadata,
          delete: r.deleteObjects,
        };
      })(yo)),
    yo
  );
}
var yc;
function gg() {
  return (
    yc ||
      ((yc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Et;
        (t.__exportStar(hg(), e), t.__exportStar(Kf(), e));
      })(bo)),
    bo
  );
}
var wo = {},
  Cn = {},
  tr = {},
  mr = {},
  Li = {},
  mc;
function _g() {
  if (mc) return Li;
  ((mc = 1), Object.defineProperty(Li, "__esModule", { value: !0 }));
  const e = Kt();
  class t {
    constructor(n) {
      ((this._sdkKey = n),
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
    setValues(n, i) {
      var a;
      if (!n) return !1;
      const o = (0, e._typedJsonParse)(n.data, "has_updates", "EvaluationResponse");
      return o == null
        ? !1
        : ((this._source = n.source),
          o?.has_updates !== !0 ||
            ((this._rawValues = n.data),
            (this._lcut = o.time),
            (this._receivedAt = n.receivedAt),
            (this._values = o),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(n.source, o)),
            n.source && o.user && this._setWarningState(i, o),
            e.SDKFlags.setFlags(this._sdkKey, (a = o.sdk_flags) !== null && a !== void 0 ? a : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(n) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.feature_gates,
        n,
      );
    }
    getConfig(n) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.dynamic_configs,
        n,
      );
    }
    getLayer(n) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.layer_configs,
        n,
      );
    }
    getParamStore(n) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.param_stores,
        n,
      );
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var n;
      return (n = this._values) === null || n === void 0 ? void 0 : n.exposures;
    }
    _extractBootstrapMetadata(n, i) {
      if (n !== "Bootstrap") return null;
      const a = {};
      return (
        i.user && (a.user = i.user),
        i.sdkInfo && (a.generatorSDKInfo = i.sdkInfo),
        (a.lcut = i.time),
        a
      );
    }
    _getDetailedStoreResult(n, i) {
      let a = null;
      return (
        n && (a = n[i] ? n[i] : n[(0, e._DJB2)(i)]),
        { result: a, details: this._getDetails(a == null) }
      );
    }
    _setWarningState(n, i) {
      var a, o;
      const u = e.StableID.get(this._sdkKey);
      if (
        ((a = n.customIDs) === null || a === void 0 ? void 0 : a.stableID) !== u &&
        ((!((o = n.customIDs) === null || o === void 0) && o.stableID) || u)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in i) {
        const s = i.user;
        (0, e._getFullUserHash)(n) !== (0, e._getFullUserHash)(s) &&
          this._warnings.add("PartialUserMatch");
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues")
        return { reason: this._source };
      const n = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (n.warnings = Array.from(this._warnings)), n);
    }
    _getDetails(n) {
      var i, a;
      const o = this.getCurrentSourceDetails();
      let u = o.reason;
      const s = (i = o.warnings) !== null && i !== void 0 ? i : [];
      (this._source === "Bootstrap" && s.length > 0 && (u = u + s[0]),
        u !== "Uninitialized" &&
          u !== "NoValues" &&
          (u = `${u}:${n ? "Unrecognized" : "Recognized"}`));
      const c =
        this._source === "Bootstrap" && (a = this._bootstrapMetadata) !== null && a !== void 0
          ? a
          : void 0;
      return (c && (o.bootstrapMetadata = c), Object.assign(Object.assign({}, o), { reason: u }));
    }
  }
  return ((Li.default = t), Li);
}
var wr = {},
  Rn = {},
  wc;
function bg() {
  if (wc) return Rn;
  ((wc = 1),
    Object.defineProperty(Rn, "__esModule", { value: !0 }),
    (Rn._resolveDeltasResponse = void 0));
  const e = Kt(),
    t = 2;
  function r(o, u) {
    const s = (0, e._typedJsonParse)(u, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const c = n(o, s),
      l = i(c),
      d = (0, e._DJB2Object)(
        {
          feature_gates: l.feature_gates,
          dynamic_configs: l.dynamic_configs,
          layer_configs: l.layer_configs,
        },
        t,
      );
    return d === s.checksumV2
      ? JSON.stringify(l)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: l,
          badFullResponse: s.deltas_full_response,
        };
  }
  Rn._resolveDeltasResponse = r;
  function n(o, u) {
    return Object.assign(Object.assign(Object.assign({}, o), u), {
      feature_gates: Object.assign(Object.assign({}, o.feature_gates), u.feature_gates),
      layer_configs: Object.assign(Object.assign({}, o.layer_configs), u.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, o.dynamic_configs), u.dynamic_configs),
    });
  }
  function i(o) {
    const u = o;
    return (
      a(o.deleted_gates, u.feature_gates),
      delete u.deleted_gates,
      a(o.deleted_configs, u.dynamic_configs),
      delete u.deleted_configs,
      a(o.deleted_layers, u.layer_configs),
      delete u.deleted_layers,
      u
    );
  }
  function a(o, u) {
    o?.forEach((s) => {
      delete u[s];
    });
  }
  return Rn;
}
var Oc;
function Jf() {
  if (Oc) return wr;
  Oc = 1;
  var e =
    (wr && wr.__awaiter) ||
    function (i, a, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(h) {
          try {
            p(u.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(u.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? c(h.value) : s(h.value).then(d, f);
        }
        p((u = u.apply(i, a || [])).next());
      });
    };
  Object.defineProperty(wr, "__esModule", { value: !0 });
  const t = Kt(),
    r = bg();
  class n extends t.NetworkCore {
    constructor(a, o) {
      super(a, o);
      const u = a?.networkConfig;
      ((this._option = a),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          u?.initializeUrl,
          u?.api,
          u?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(a, o, u, s, c) {
      return e(this, void 0, void 0, function* () {
        var l, d, f, p, h, v;
        const g = o ? (0, t._typedJsonParse)(o, "has_updates", "InitializeResponse") : null;
        let _ = {
          user: s,
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
          const y =
            g?.hash_used !==
            ((v =
              (h = (p = this._option) === null || p === void 0 ? void 0 : p.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && v !== void 0
              ? v
              : "djb2");
          _ = Object.assign(Object.assign({}, _), {
            sinceTime: c && !y ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && c ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: y ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(a, g, _, u);
      });
    }
    _fetchEvaluations(a, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c, l;
        const d = yield this.post({
          sdkKey: a,
          urlConfig: this._initializeUrlConfig,
          data: u,
          retries: 2,
          isStatsigEncodable: !0,
          priority: s,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (c = d?.body) !== null && c !== void 0 ? c : null;
        if (
          o?.has_updates !== !0 ||
          ((l = d.body) === null || l === void 0 ? void 0 : l.includes('"is_delta":true')) !== !0 ||
          u.deltasResponseRequested !== !0
        )
          return d.body;
        const f = (0, r._resolveDeltasResponse)(o, d.body);
        return typeof f == "string"
          ? f
          : this._fetchEvaluations(
              a,
              o,
              Object.assign(Object.assign(Object.assign({}, u), f), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((wr.default = n), wr);
}
var Pn = {},
  Sc;
function yg() {
  if (Sc) return Pn;
  ((Sc = 1),
    Object.defineProperty(Pn, "__esModule", { value: !0 }),
    (Pn._makeParamStoreGetter = void 0));
  const e = Kt(),
    t = { disableExposureLog: !0 };
  function r(l) {
    return l == null || l.disableExposureLog === !1;
  }
  function n(l, d) {
    return d != null && !(0, e._isTypeMatch)(l, d);
  }
  function i(l, d) {
    return l.value;
  }
  function a(l, d, f) {
    return l.getFeatureGate(d.gate_name, r(f) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function o(l, d, f, p) {
    const v = l.getDynamicConfig(d.config_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function u(l, d, f, p) {
    const v = l.getExperiment(d.experiment_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function s(l, d, f, p) {
    const v = l.getLayer(d.layer_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function c(l, d, f) {
    return (p, h) => {
      if (d == null) return h;
      const v = d[p];
      if (v == null || (h != null && (0, e._typeOf)(h) !== v.param_type)) return h;
      switch (v.ref_type) {
        case "static":
          return i(v);
        case "gate":
          return a(l, v, f);
        case "dynamic_config":
          return o(l, v, h, f);
        case "experiment":
          return u(l, v, h, f);
        case "layer":
          return s(l, v, h, f);
        default:
          return h;
      }
    };
  }
  return ((Pn._makeParamStoreGetter = c), Pn);
}
var rr = {},
  Ec;
function mg() {
  if (Ec) return rr;
  Ec = 1;
  var e =
    (rr && rr.__awaiter) ||
    function (i, a, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(h) {
          try {
            p(u.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(u.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? c(h.value) : s(h.value).then(d, f);
        }
        p((u = u.apply(i, a || [])).next());
      });
    };
  (Object.defineProperty(rr, "__esModule", { value: !0 }),
    (rr.StatsigEvaluationsDataAdapter = void 0));
  const t = Kt(),
    r = Jf();
  class n extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(a, o, u) {
      (super.attach(a, o, u),
        u !== null && u instanceof r.default
          ? (this._network = u)
          : (this._network = new r.default(o ?? {})));
    }
    getDataAsync(a, o, u) {
      return this._getDataAsyncImpl(a, (0, t._normalizeUser)(o, this._options), u);
    }
    prefetchData(a, o) {
      return this._prefetchDataImpl(a, o);
    }
    setData(a) {
      const o = (0, t._typedJsonParse)(a, "has_updates", "data");
      o && "user" in o
        ? super.setData(a, o.user)
        : t.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(a, o) {
      super.setData(a, o);
    }
    _fetchFromNetwork(a, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c;
        const l = yield (c = this._network) === null || c === void 0
          ? void 0
          : c.fetchEvaluations(this._getSdkKey(), a, u?.priority, o, s);
        return l ?? null;
      });
    }
    _getCacheKey(a) {
      var o;
      const u = (0, t._getStorageKey)(
        this._getSdkKey(),
        a,
        (o = this._options) === null || o === void 0 ? void 0 : o.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${u}`;
    }
    _isCachedResultValidFor204(a, o) {
      return a.fullUserHash != null && a.fullUserHash === (0, t._getFullUserHash)(o);
    }
  }
  return ((rr.StatsigEvaluationsDataAdapter = n), rr);
}
var kc;
function wg() {
  if (kc) return mr;
  kc = 1;
  var e =
    (mr && mr.__awaiter) ||
    function (u, s, c, l) {
      function d(f) {
        return f instanceof c
          ? f
          : new c(function (p) {
              p(f);
            });
      }
      return new (c || (c = Promise))(function (f, p) {
        function h(_) {
          try {
            g(l.next(_));
          } catch (y) {
            p(y);
          }
        }
        function v(_) {
          try {
            g(l.throw(_));
          } catch (y) {
            p(y);
          }
        }
        function g(_) {
          _.done ? f(_.value) : d(_.value).then(h, v);
        }
        g((l = l.apply(u, s || [])).next());
      });
    };
  Object.defineProperty(mr, "__esModule", { value: !0 });
  const t = Kt(),
    r = _g(),
    n = Jf(),
    i = yg(),
    a = mg();
  class o extends t.StatsigClientBase {
    static instance(s) {
      const c = (0, t._getStatsigGlobal)().instance(s);
      return c instanceof o
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new o(s ?? "", {}));
    }
    constructor(s, c, l = null) {
      var d, f;
      t.SDKType._setClientType(s, "javascript-client");
      const p = new n.default(l, (v) => {
        this.$emt(v);
      });
      (super(
        s,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new a.StatsigEvaluationsDataAdapter(),
        p,
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
        (this._store = new r.default(s)),
        (this._network = p),
        (this._user = this._configureUser(c, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (f = l?.plugins) !== null && f !== void 0 ? f : [];
      for (const v of h) v.bind(this);
    }
    initializeSync(s) {
      var c;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((c = this._store.getWarnings()) !== null && c !== void 0 ? c : []),
          ])
        : (this._logger.start(), this.updateUserSync(this._user, s));
    }
    initializeAsync(s) {
      return e(this, void 0, void 0, function* () {
        return this._initializePromise
          ? this._initializePromise
          : ((this._initializePromise = this._initializeAsyncImpl(s)), this._initializePromise);
      });
    }
    updateUserSync(s, c) {
      const l = performance.now();
      try {
        return this._updateUserSyncImpl(s, c, l);
      } catch (d) {
        const f = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(f, l);
      }
    }
    _updateUserSyncImpl(s, c, l) {
      var d;
      const f = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
      const p = this.dataAdapter.getDataSync(this._user);
      (p == null && f.push("NoCachedValues"),
        this._store.setValues(p, this._user),
        this._finalizeUpdate(p));
      const h = c?.disableBackgroundCacheRefresh;
      return h === !0 || (h == null && p?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          )
        : (this._runPostUpdate(p ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          ));
    }
    updateUserAsync(s, c) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, c);
        } catch (d) {
          const f = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(f, l);
        }
      });
    }
    _updateUserAsyncImpl(s, c) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(s);
        const l = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(l);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, l, c)),
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
        const p = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          f,
          this._store.getSource(),
          p,
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
    checkGate(s, c) {
      return this.getFeatureGate(s, c).value;
    }
    logEvent(s, c, l) {
      const d = typeof s == "string" ? { eventName: s, value: c, metadata: l } : s;
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
    _initializeAsyncImpl(s) {
      return e(this, void 0, void 0, function* () {
        return (
          t.Storage.isReady() || (yield t.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, s)
        );
      });
    }
    _createErrorUpdateDetails(s, c) {
      var l;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - c,
        s,
        null,
        [...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : [])],
      );
    }
    _finalizeUpdate(s) {
      (this._store.finalize(), this._setStatus("Ready", s));
    }
    _runPostUpdate(s, c) {
      this.dataAdapter.getDataAsync(s, c, { priority: "low" }).catch((l) => {
        t.Log.error("An error occurred after update.", l);
      });
    }
    _resetForUser(s) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(s, this._options)));
    }
    _configureUser(s, c) {
      var l;
      const d = (0, t._normalizeUser)(s, c),
        f = (l = d.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      return (f && t.StableID.setOverride(f, this._sdkKey), d);
    }
    _getFeatureGateImpl(s, c) {
      var l, d;
      const { result: f, details: p } = this._store.getGate(s),
        h = (0, t._makeFeatureGate)(s, p, f),
        v =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, c),
        g = v ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(s, c) {
      var l, d;
      const { result: f, details: p } = this._store.getConfig(s),
        h = (0, t._makeDynamicConfig)(s, p, f),
        v =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, this._user, c),
        g = v ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(s, c) {
      var l, d, f, p;
      const { result: h, details: v } = this._store.getConfig(s),
        g = (0, t._makeExperiment)(s, v, h);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = g.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const _ =
          (p =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || p === void 0
            ? void 0
            : p.call(f, g, this._user, c),
        y = _ ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, y, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: y }),
        y
      );
    }
    _getLayerImpl(s, c) {
      var l, d, f;
      const { result: p, details: h } = this._store.getLayer(s),
        v = (0, t._makeLayer)(s, h, p),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, v, this._user, c);
      c?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const _ = (0, t._mergeOverride)(
        v,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : v.__value,
        (y) => {
          c?.disableExposureLog ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                _,
                y,
                this._store.getExposureMapping(),
              ),
              c,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: _ }), _);
    }
    _getParameterStoreImpl(s, c) {
      var l, d;
      const { result: f, details: p } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const h = {
          name: s,
          details: p,
          __configuration: f,
          get: (0, i._makeParamStoreGetter)(this, f, c),
        },
        v =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, c);
      return (
        v != null &&
          ((h.__configuration = v.config),
          (h.details = v.details),
          (h.get = (0, i._makeParamStoreGetter)(this, v.config, c))),
        h
      );
    }
  }
  return ((mr.default = o), mr);
}
var xc;
function Og() {
  return (
    xc ||
      ((xc = 1),
      (function (e) {
        var t =
            (tr && tr.__createBinding) ||
            (Object.create
              ? function (o, u, s, c) {
                  c === void 0 && (c = s);
                  var l = Object.getOwnPropertyDescriptor(u, s);
                  ((!l || ("get" in l ? !u.__esModule : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return u[s];
                      },
                    }),
                    Object.defineProperty(o, c, l));
                }
              : function (o, u, s, c) {
                  (c === void 0 && (c = s), (o[c] = u[s]));
                }),
          r =
            (tr && tr.__exportStar) ||
            function (o, u) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(u, s) && t(u, o, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Kt(),
          i = wg();
        ((e.StatsigClient = i.default), r(Kt(), e));
        const a = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = a;
      })(tr)),
    tr
  );
}
var An = {},
  jn = {},
  Cc;
function Sg() {
  if (Cc) return jn;
  ((Cc = 1),
    Object.defineProperty(jn, "__esModule", { value: !0 }),
    (jn.initFeatureFlags = void 0));
  const e = ce(),
    t = be(),
    r = Ea(),
    n = 500,
    i = 1e3 * 25,
    a = (0, e.getCallBridge)(),
    o = (s) => {
      if (!s || !s.user)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(s).some((c) => typeof c == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    u = (s) => (o(s), a("initFeatureFlags", { user: s.user }));
  return (
    (jn.initFeatureFlags = (0, r.withRateLimiter)(
      u,
      n,
      i,
      `Feature flags initialisation calls are rate limited at ${n}req/${i / 1e3}s`,
    )),
    jn
  );
}
var Rc;
function Eg() {
  if (Rc) return An;
  ((Rc = 1),
    Object.defineProperty(An, "__esModule", { value: !0 }),
    (An.ForgeDataAdapter = void 0));
  const e = Sg();
  class t {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(n, i, a) {
      var o;
      if (n) return n;
      this.environment = ((o = this.options) === null || o === void 0 ? void 0 : o.environment) || {
        tier: "development",
      };
      const u = { ...i, statsigEnvironment: this.environment },
        s = await (0, e.initFeatureFlags)({ user: u }),
        c = {
          source: "Network",
          data: JSON.stringify(s),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = c), c);
    }
    getDataSync(n) {
      return this.cache;
    }
    async attach(n, i, a) {
      this.options = i;
    }
    async prefetchData() {}
    async setData(n) {}
    async setDataLegacy(n) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((An.ForgeDataAdapter = t), An);
}
var Oo = {},
  Pc;
function Yf() {
  return (
    Pc ||
      ((Pc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = e.ExtensionEnvironment = void 0),
          (function (r) {
            ((r.DEVELOPMENT = "DEVELOPMENT"),
              (r.STAGING = "STAGING"),
              (r.PRODUCTION = "PRODUCTION"));
          })(e.ExtensionEnvironment || (e.ExtensionEnvironment = {})));
        var t;
        ((function (r) {
          r.USER_ACCESS = "USER_ACCESS";
        })(t || (t = {})),
          (function (r) {
            r.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(Oo)),
    Oo
  );
}
var In = {},
  Ac;
function kg() {
  if (Ac) return In;
  ((Ac = 1),
    Object.defineProperty(In, "__esModule", { value: !0 }),
    (In.trackFeatureFlagEvent = void 0));
  const e = ce(),
    t = be(),
    r = Yf(),
    n = Ea(),
    i = 500,
    a = 1e3 * 25,
    o = (0, e.getCallBridge)(),
    u = (c) => {
      if (!c || !c.type || !c.properties)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(c.type.toUpperCase() in r.FeatureFlagEventType))
        throw new t.BridgeAPIError("Event type is not supported");
      if (Object.values(c).some((l) => typeof l == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    s = (c) => (u(c), o("trackFeatureFlagEvent", c));
  return (
    (In.trackFeatureFlagEvent = (0, n.withRateLimiter)(
      s,
      i,
      a,
      `Feature flags calls are rate limited at ${i}req/${a / 1e3}s`,
    )),
    In
  );
}
var jc;
function xg() {
  if (jc) return Cn;
  ((jc = 1),
    Object.defineProperty(Cn, "__esModule", { value: !0 }),
    (Cn.ForgeFeatureFlags = void 0));
  const e = Og(),
    t = Eg(),
    r = Yf(),
    n = kg();
  class i {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.eventProps = {}),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(o, u = {}) {
      var s;
      if (this.isInitialized()) return;
      this.dataAdapter = new t.ForgeDataAdapter();
      const c = {
        environment: { tier: u.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (s = c.environment) === null || s === void 0 ? void 0 : s.tier),
        (this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(o), c)),
        await this.client.initializeAsync(),
        (this.initialized = !0));
    }
    checkFlag(o) {
      if (!this.isInitialized() || !this.client)
        throw (
          this.sendCheckFlagEvent(o, !1),
          new Error("ForgeFeatureFlags not initialized. Call initialize() first.")
        );
      return (this.sendCheckFlagEvent(o, !0), this.client.checkGate(o, { disableExposureLog: !0 }));
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
    convertUser(o) {
      return {
        userID: o.userId,
        custom: { ...(o.custom || {}), ...(o.attributes || {}) },
        customIDs: o.identifiers || {},
      };
    }
    sendCheckFlagEvent(o, u) {
      const s = {
        type: r.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: o,
          success: u,
        },
      };
      (0, n.trackFeatureFlagEvent)(s);
    }
  }
  return ((Cn.ForgeFeatureFlags = i), Cn);
}
var Ic;
function Cg() {
  return (
    Ic ||
      ((Ic = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = xg();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })(wo)),
    wo
  );
}
var Dc;
function Rg() {
  return (
    Dc ||
      ((Dc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = Et;
        var r = Ih();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Oi(), e),
          t.__exportStar(Lh(), e),
          t.__exportStar(Ns(), e),
          t.__exportStar(Qh(), e),
          t.__exportStar(tg(), e),
          t.__exportStar(ng(), e),
          t.__exportStar(ag(), e),
          t.__exportStar(og(), e),
          t.__exportStar(cg(), e),
          (e.i18n = t.__importStar(lg())),
          t.__exportStar(gg(), e),
          t.__exportStar(Cg(), e));
      })(eo)),
    eo
  );
}
var Lt = Rg();
function fe(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function je(e) {
  "@babel/helpers - typeof";
  return (
    (je =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    je(e)
  );
}
function Pg(e, t) {
  if (je(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (je(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Xf(e) {
  var t = Pg(e, "string");
  return je(t) == "symbol" ? t : t + "";
}
function Tc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Xf(n.key), n));
  }
}
function ve(e, t, r) {
  return (
    t && Tc(e.prototype, t),
    r && Tc(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Ag(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ne(e, t) {
  if (t && (je(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ag(e);
}
function J(e) {
  return (
    (J = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    J(e)
  );
}
function li(e, t) {
  return (
    (li = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    li(e, t)
  );
}
function ze(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && li(e, t));
}
function k(e, t, r) {
  return (
    (t = Xf(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function we() {}
function jg(e) {
  if (Array.isArray(e)) return e;
}
function Ig(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (l) {
      ((c = !0), (i = l));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function as(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Zf(e, t) {
  if (e) {
    if (typeof e == "string") return as(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? as(e, t)
          : void 0
    );
  }
}
function Dg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(e, t) {
  return jg(e) || Ig(e, t) || Zf(e, t) || Dg();
}
var Qf = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  Tg = function (t) {
    !t ||
      !t.cells ||
      t.cells.forEach(function (r) {
        if (r.isSortable && !r.key)
          try {
            throw Error("isSortable can't be set to true, if the 'key' prop is missing.");
          } catch (n) {
            console.error(n);
          }
      });
  },
  aa = function (t, r) {
    if (t) {
      var n =
        r &&
        r.cells
          .map(function (i) {
            return i.key;
          })
          .includes(t);
      if (!n)
        try {
          throw Error("Cell with ".concat(t, " key not found in head."));
        } catch (i) {
          console.error(i);
        }
    }
  },
  Mg = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Mc = function (t, r, n) {
    var i = n && isFinite(n) ? (r - 1) * n : 0;
    return t + i;
  },
  Lg = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      i = arguments.length > 3 ? arguments[3] : void 0,
      a = t.destination,
      o = t.sourceIndex;
    if (!a) return r;
    var u = Mc(o, n, i),
      s = Mc(a.index, n, i),
      c = r.slice(),
      l = c.splice(u, 1),
      d = K(l, 1),
      f = d[0];
    return (c.splice(s, 0, f), c);
  };
const Fg = "modulepreload",
  Bg = function (e, t) {
    return new URL(e, t).href;
  },
  Lc = {},
  Ng = function (t, r, n) {
    let i = Promise.resolve();
    if (r && r.length > 0) {
      let c = function (l) {
        return Promise.all(
          l.map((d) =>
            Promise.resolve(d).then(
              (f) => ({ status: "fulfilled", value: f }),
              (f) => ({ status: "rejected", reason: f }),
            ),
          ),
        );
      };
      const o = document.getElementsByTagName("link"),
        u = document.querySelector("meta[property=csp-nonce]"),
        s = u?.nonce || u?.getAttribute("nonce");
      i = c(
        r.map((l) => {
          if (((l = Bg(l, n)), l in Lc)) return;
          Lc[l] = !0;
          const d = l.endsWith(".css"),
            f = d ? '[rel="stylesheet"]' : "";
          if (n)
            for (let h = o.length - 1; h >= 0; h--) {
              const v = o[h];
              if (v.href === l && (!d || v.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${f}`)) return;
          const p = document.createElement("link");
          if (
            ((p.rel = d ? "stylesheet" : Fg),
            d || (p.as = "script"),
            (p.crossOrigin = ""),
            (p.href = l),
            s && p.setAttribute("nonce", s),
            document.head.appendChild(p),
            d)
          )
            return new Promise((h, v) => {
              (p.addEventListener("load", h),
                p.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${l}`))));
            });
        }),
      );
    }
    function a(o) {
      const u = new Event("vite:preloadError", { cancelable: !0 });
      if (((u.payload = o), window.dispatchEvent(u), !u.defaultPrevented)) throw o;
    }
    return i.then((o) => {
      for (const u of o || []) u.status === "rejected" && a(u.reason);
      return t().catch(a);
    });
  };
function te() {
  return (
    (te = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    te.apply(null, arguments)
  );
}
function zg(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function ne(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = zg(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
  }
  return i;
}
function Fc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function So(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Fc(Object(r), !0).forEach(function (n) {
          k(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Fc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ug = (function () {
  function e(t) {
    var r = this;
    (fe(this, e),
      k(this, "_isAnalyticsEvent", !0),
      k(this, "clone", function () {
        var n = So({}, r.payload);
        return new e({ payload: n });
      }),
      (this.payload = t.payload));
  }
  return ve(e, [
    {
      key: "update",
      value: function (r) {
        return (
          typeof r == "function" && (this.payload = r(this.payload)),
          je(r) === "object" && (this.payload = So(So({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function qg(e) {
  if (Array.isArray(e)) return as(e);
}
function $g(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function Vg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Te(e) {
  return qg(e) || $g(e) || Zf(e) || Vg();
}
function Gg(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = J(e)) !== null; );
  return e;
}
function oa() {
  return (
    (oa =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = Gg(e, t);
            if (n) {
              var i = Object.getOwnPropertyDescriptor(n, t);
              return i.get ? i.get.call(arguments.length < 3 ? e : r) : i.value;
            }
          }),
    oa.apply(null, arguments)
  );
}
function Hg(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, ev() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function ev() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ev = function () {
    return !!e;
  })();
}
function Wg(e, t, r, n) {
  var i = oa(J(e.prototype), t, r);
  return 2 & n && typeof i == "function"
    ? function (a) {
        return i.apply(r, a);
      }
    : i;
}
var Kg = (function (e) {
    function t(r) {
      var n;
      return (
        fe(this, t),
        (n = Hg(this, t, [r])),
        k(n, "_isUIAnalyticsEvent", !0),
        k(n, "clone", function () {
          if (n.hasFired) return null;
          var i = Te(n.context),
            a = Te(n.handlers),
            o = JSON.parse(JSON.stringify(n.payload));
          return new t({ context: i, handlers: a, payload: o });
        }),
        k(n, "fire", function (i) {
          n.hasFired ||
            (n.handlers.forEach(function (a) {
              return a(n, i);
            }),
            (n.hasFired = !0));
        }),
        (n.context = r.context || []),
        (n.handlers = r.handlers || []),
        (n.hasFired = !1),
        n
      );
    }
    return (
      ze(t, e),
      ve(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : Wg(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(Ug),
  Jg = b.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Yg = function () {
    return b.useContext(Jg);
  },
  sa = function (t) {
    var r = b.useRef(t);
    return ((r.current = t), r);
  };
function Xg(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Zg(e, t) {
  var r = b.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = b.useRef(!0),
    i = b.useRef(r),
    a = n.current || !!(t && i.current.inputs && Xg(t, i.current.inputs)),
    o = a ? i.current : { inputs: t, result: e() };
  return (
    b.useEffect(
      function () {
        ((n.current = !1), (i.current = o));
      },
      [o],
    ),
    o.result
  );
}
function Qg(e, t) {
  return Zg(function () {
    return e;
  }, t);
}
function tv() {
  var e = Yg(),
    t = Qg(
      function (r) {
        return new Kg({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function Bc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function e_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bc(Object(r), !0).forEach(function (n) {
          k(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Bc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function di(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    i = e.actionSubject,
    a = e.packageName,
    o = e.packageVersion,
    u = e.analyticsData,
    s = tv(),
    c = s.createAnalyticsEvent,
    l = sa(u),
    d = sa(t),
    f = b.useCallback(
      function (p) {
        var h = c({
            action: r,
            actionSubject: i || n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          v = e_({ componentName: n, packageName: a, packageVersion: o }, l.current);
        h.context.push(v);
        var g = h.clone();
        (g && g.fire("atlaskit"), d.current(p, h));
      },
      [r, n, i, a, o, c, l, d],
    );
  return f;
}
function Nc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function t_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nc(Object(r), !0).forEach(function (n) {
          k(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Nc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function zc(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    i = e.packageName,
    a = e.packageVersion,
    o = e.analyticsData,
    u = tv(),
    s = u.createAnalyticsEvent,
    c = sa(o),
    l = sa(t),
    d = b.useCallback(
      function () {
        var f = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: i, packageVersion: a },
          }),
          p = t_({ componentName: n, packageName: i, packageVersion: a }, c.current);
        f.context.push(p);
        var h = f.clone();
        (h && h.fire("atlaskit"), l.current(f));
      },
      [r, n, i, a, s, c, l],
    );
  return d;
}
var ur = "ASC",
  ua = "DESC",
  r_ = "small",
  ca = "large",
  rv = 0.22;
const n_ = 5;
function C(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const i = n.split(" ");
    for (const a of i) {
      const o = a.startsWith("_") ? a.slice(0, n_) : a;
      t[o] = a;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function nv(e, t, r) {
  return e ?? "var(--c-, )";
}
var i_ = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  a_ = b.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      i = e.children,
      a = e.testId,
      o = e.isLoading,
      u = ne(e, i_);
    return b.createElement(
      "table",
      te(
        {
          inert: o ? "" : void 0,
          style: {
            "--local-dynamic-table-hover-bg":
              "var(--ds-background-neutral-subtle-hovered, #0515240F)",
            "--local-dynamic-table-highlighted-bg": "var(--ds-background-selected, #E9F2FE)",
            "--local-dynamic-table-hover-highlighted-bg":
              "var(--ds-background-selected-hovered, #CFE1FD)",
            "--local-dynamic-table-row-focus-outline": "var(--ds-border-focused, #4688EC)",
          },
          ref: t,
        },
        u,
        {
          "data-testid": a && "".concat(a, "--table"),
          className: C([
            "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
            r && "_1kqm1n9t",
            n && "_179r1uh4",
          ]),
        },
      ),
      i,
    );
  }),
  o_ = function (t) {
    var r = t.children;
    return b.createElement(
      "caption",
      { className: C(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  s_ = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: C(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  u_ = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: C(["_4t3i1jdh"]),
      },
      r,
    );
  },
  c_ = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-container"),
        className: C([
          "_19pk1wug _2hwx1wug _otyr1wug _18u01wug _ca0q19bv _u5f319bv _n3td19bv _19bv19bv _1bsb1ssb _y3gn1h6o",
        ]),
      },
      r,
    );
  },
  l_ = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function Uc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function qc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Uc(Object(r), !0).forEach(function (n) {
          k(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Uc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function d_(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, iv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function iv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (iv = function () {
    return !!e;
  })();
}
var $c = function (t, r, n) {
    for (var i = 0; i < t.length; i++) {
      var a;
      if (r.cells[i] && ((a = r.cells[i]) === null || a === void 0 ? void 0 : a.key) === n) {
        var o;
        return (o = t[i]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  f_ = function (t, r, n, i) {
    if (!n || !t) return r;
    if (!r) return [];
    var a = i === ur ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      u = Array.from(r);
    return u.sort(function (s, c) {
      var l = $c(s.cells, t, n),
        d = $c(c.cells, t, n);
      if (l === void 0 || d === void 0) return a;
      if (je(l) !== je(d)) {
        if (typeof l == "number") return -1;
        if (typeof d == "number") return 1;
        if (typeof l == "string") return -1;
        if (typeof d == "string") return 1;
      }
      return typeof l == "string" && typeof d == "string"
        ? a * o.compare(l, d)
        : (!l && l !== 0) || l < d
          ? -a
          : (!d && d !== 0) || l > d
            ? a
            : l === d
              ? 0
              : 1;
    });
  };
function v_(e) {
  var t = (function (r) {
    function n() {
      var i;
      fe(this, n);
      for (var a = arguments.length, o = new Array(a), u = 0; u < a; u++) o[u] = arguments[u];
      return ((i = d_(this, n, [].concat(o))), k(i, "state", { pageRows: [] }), i);
    }
    return (
      ze(n, r),
      ve(
        n,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.props.onPageRowsUpdate && this.props.onPageRowsUpdate(this.state.pageRows);
            },
          },
          {
            key: "componentDidUpdate",
            value: function (a, o) {
              this.props.onPageRowsUpdate &&
                this.state.pageRows !== o.pageRows &&
                this.props.onPageRowsUpdate(this.state.pageRows);
            },
          },
          {
            key: "render",
            value: function () {
              var a = this.props;
              a.rows;
              var o = a.head;
              (a.sortKey, a.sortOrder, a.rowsPerPage, a.page);
              var u = a.forwardedRef,
                s = ne(a, l_);
              return E.createElement(
                e,
                te({ pageRows: this.state.pageRows, head: o }, s, { ref: u }),
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (a, o) {
              var u = a.rows,
                s = a.head,
                c = a.sortKey,
                l = a.sortOrder,
                d = a.page,
                f = a.rowsPerPage,
                p = a.isTotalPagesControlledExternally;
              aa(c, s);
              var h, v;
              return (
                p ? ((h = u), (v = u)) : ((h = f_(s, u, c, l) || []), (v = Qf(h, d, f))),
                qc(qc({}, o), {}, { pageRows: v })
              );
            },
          },
        ],
      )
    );
  })(E.Component);
  return E.forwardRef(function (r, n) {
    return E.createElement(t, te({}, r, { forwardedRef: n }));
  });
}
var p_ = "--local-dynamic-table-width",
  av = function (t) {
    var r = t.width;
    return typeof r < "u" ? k({}, p_, "".concat(r, "%")) : void 0;
  },
  h_ = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  g_ = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      i = t.shouldTruncate,
      a = t.innerRef,
      o = ne(t, h_);
    return b.createElement(
      "td",
      te(
        {
          style: av({ width: r }),
          ref: a,
          className: C([
            "_1bsb8a2a",
            n && i && "_1bto1l2s _o5721q9c",
            n && "_1reo15vq _18m915vq",
            "_19itglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
            o.className,
          ]),
        },
        o,
      ),
    );
  },
  __ = ["isHighlighted", "children", "style", "testId", "className"],
  b_ = b.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      i = e.style,
      a = e.testId,
      o = e.className,
      u = ne(e, __);
    return b.createElement(
      "tr",
      te(
        {
          style: i,
          className: C([
            "_bfhkqtfy _1ygbsglb _1ah312gs",
            r ? "_bfhktkjs _irr31ae3" : "_irr3s8ts",
            o,
          ]),
        },
        u,
        { ref: t, "data-testid": a },
      ),
      n,
    );
  }),
  y_ = ["cells"],
  m_ = ["content", "testId"],
  w_ = function (t) {
    var r = t.row,
      n = t.head,
      i = t.testId,
      a = t.isFixedSize,
      o = t.isHighlighted,
      u = r.cells,
      s = ne(r, y_);
    return E.createElement(
      b_,
      te(
        {},
        s,
        { isHighlighted: o },
        o ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (i && "".concat(i, "--row-").concat(s.key)) },
      ),
      u.map(function (c, l) {
        var d = c.content,
          f = c.testId,
          p = ne(c, m_),
          h = (n || { cells: [] }).cells[l] || {},
          v = h.shouldTruncate,
          g = h.width;
        return E.createElement(
          g_,
          te({ "data-testid": f || (i && "".concat(i, "--cell-").concat(l)) }, p, {
            isFixedSize: a,
            key: l,
            shouldTruncate: v,
            width: g,
          }),
          d,
        );
      }),
    );
  };
function O_(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, ov() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function ov() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ov = function () {
    return !!e;
  })();
}
var S_ = (function (e) {
    function t() {
      return (fe(this, t), O_(this, t, arguments));
    }
    return (
      ze(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.pageRows,
              a = n.head,
              o = n.isFixedSize,
              u = n.highlightedRowIndex,
              s = n.testId,
              c = n.forwardedRef;
            return E.createElement(
              "tbody",
              { "data-testid": s && "".concat(s, "--body"), ref: c },
              i.map(function (l, d) {
                return E.createElement(w_, {
                  head: a,
                  isFixedSize: o,
                  key: l.key || d,
                  row: l,
                  isHighlighted:
                    l.isHighlighted ||
                    (!!u && (typeof u == "number" ? u === d : u.indexOf(d) > -1)),
                  testId: s,
                });
              }),
            );
          },
        },
      ])
    );
  })(E.Component),
  E_ = v_(
    E.forwardRef(function (e, t) {
      return E.createElement(S_, te({}, e, { forwardedRef: t }));
    }),
  );
function k_(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, sv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function sv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (sv = function () {
    return !!e;
  })();
}
var x_ = (function (e) {
  function t(r) {
    var n;
    return (fe(this, t), (n = k_(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    ze(t, e),
    ve(
      t,
      [
        {
          key: "render",
          value: function () {
            return this.state.hasError ? this.props.fallback : this.props.children;
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromError",
          value: function () {
            return { hasError: !0 };
          },
        },
      ],
    )
  );
})(E.Component);
const zs = b.createContext(null);
var C_ = "#FFFFFF",
  os = "#42526E",
  R_ = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function P_(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(os, ")")
    : "var(--ds-icon-inverse, ".concat(C_, ")");
}
var Fi = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  A_ = typeof window > "u" ? b.useEffect : b.useLayoutEffect,
  uv = E.memo(
    E.forwardRef(function (t, r) {
      var n = t.appearance,
        i = n === void 0 ? "inherit" : n,
        a = t.delay,
        o = a === void 0 ? 0 : a,
        u = t.interactionName,
        s = t.label,
        c = t.size,
        l = c === void 0 ? "medium" : c,
        d = t.testId,
        f = typeof l == "number" ? l : R_[l],
        p = "".concat(o, "ms"),
        h = P_(i),
        v = b.useContext(zs);
      return (
        A_(
          function () {
            if (v != null) return v.hold(u);
          },
          [v, u],
        ),
        E.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: p, width: f, height: f },
            className: C([Fi.wrapperStyles, Fi.rotateStyles]),
          },
          E.createElement(
            "svg",
            {
              height: f,
              width: f,
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
              "data-testid": d,
              ref: r,
              "aria-label": s || void 0,
              style: { animationDelay: p },
              role: s ? "img" : "none",
              className: C([Fi.loadInStyles]),
            },
            E.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: C([Fi.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function Vc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Gc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vc(Object(r), !0).forEach(function (n) {
          k(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Hc = "--contents-opacity",
  j_ = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: C(["_kqswh2mm"]) },
      r,
    );
  },
  I_ = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      i = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": i && "".concat(i, "--contents--container"),
        className: C(["_tzy47hfw _lcxvglyw"]),
        style: Gc(Gc({}, k({}, Hc, n)), {}, { "--_cnddr8": nv("var(".concat(Hc, ")")) }),
      },
      r,
    );
  },
  D_ = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: C(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function T_(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, cv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function cv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (cv = function () {
    return !!e;
  })();
}
var lv = (function (e) {
  function t() {
    return (fe(this, t), T_(this, t, arguments));
  }
  return (
    ze(t, e),
    ve(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            i = n.children,
            a = n.isLoading,
            o = n.spinnerSize,
            u = n.contentsOpacity,
            s = n.testId,
            c = n.loadingLabel;
          return E.createElement(
            j_,
            { testId: s },
            a ? E.createElement(I_, { contentsOpacity: u, testId: s }, i) : i,
            a &&
              E.createElement(
                D_,
                { testId: s },
                E.createElement(uv, {
                  size: o,
                  testId: s && "".concat(s, "--loadingSpinner"),
                  label: c,
                }),
              ),
          );
        },
      },
    ])
  );
})(E.Component);
k(lv, "defaultProps", {
  isLoading: !0,
  spinnerSize: ca,
  contentsOpacity: rv,
  loadingLabel: "Loading table",
});
var M_ = ["children", "testId"],
  L_ = b.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      i = ne(e, M_);
    return b.createElement(
      "div",
      te({}, i, { "data-testid": n, ref: t, className: C(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  F_ = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: C(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  B_ = b.forwardRef(function (e, t) {
    var r = e.children;
    return b.createElement("div", { ref: t, className: C(["_kqswh2mm _152tidpf"]) }, r);
  });
function N_(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, dv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function dv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (dv = function () {
    return !!e;
  })();
}
var fv = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = N_(this, t, [].concat(i))),
      k(r, "spinnerRef", E.createRef()),
      k(r, "containerRef", E.createRef()),
      k(r, "componentDidMount", function () {
        r.props.isLoading &&
          r.hasTargetNode() &&
          (r.attachListeners(), r.updateTargetAppearance(), r.updateSpinnerPosition());
      }),
      k(r, "UNSAFE_componentWillReceiveProps", function (o) {
        !o.isLoading || !r.hasTargetNode(o)
          ? r.detachListeners()
          : r.props.isLoading || r.attachListeners();
      }),
      k(r, "componentDidUpdate", function () {
        r.hasTargetNode() &&
          (r.updateTargetAppearance(), r.props.isLoading && r.updateSpinnerPosition());
      }),
      k(r, "componentWillUnmount", function () {
        r.detachListeners();
      }),
      k(r, "getTargetNode", function () {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r.props,
          u = o.targetRef,
          s = u?.();
        return s || r.containerRef.current;
      }),
      k(r, "hasTargetNode", function (o) {
        return !!r.getTargetNode(o);
      }),
      k(r, "isVerticallyVisible", function (o, u) {
        var s = o.top,
          c = o.bottom;
        return c <= 0 ? !1 : s < u;
      }),
      k(r, "isFullyVerticallyVisible", function (o, u) {
        var s = o.top,
          c = o.bottom;
        return s >= 0 && c <= u;
      }),
      k(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      k(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      k(r, "translateSpinner", function (o, u, s) {
        ((o.style.position = s ? "fixed" : ""),
          (o.style.transform = u !== 0 ? "translate3d(0, ".concat(u, "px, 0)") : ""));
      }),
      k(r, "updateTargetAppearance", function () {
        var o = r.getTargetNode(),
          u = r.props,
          s = u.isLoading,
          c = u.contentsOpacity;
        o &&
          o.style &&
          je(o.style) === "object" &&
          ((o.style.pointerEvents = s ? "none" : ""), (o.style.opacity = s ? c.toString() : ""));
      }),
      r
    );
  }
  return (
    ze(t, e),
    ve(t, [
      {
        key: "attachListeners",
        value: function () {
          (window.addEventListener("scroll", this.handleScroll),
            window.addEventListener("resize", this.handleResize));
        },
      },
      {
        key: "detachListeners",
        value: function () {
          (window.removeEventListener("scroll", this.handleScroll),
            window.removeEventListener("resize", this.handleResize));
        },
      },
      {
        key: "updateSpinnerPosition",
        value: function () {
          var n,
            i,
            a = window.innerHeight,
            o = this.getTargetNode(),
            u = (n = this.spinnerRef) === null || n === void 0 ? void 0 : n.current;
          if (!(!o || typeof o.getBoundingClientRect != "function" || !u)) {
            var s = o.getBoundingClientRect(),
              c = u.getBoundingClientRect(),
              l = c.height,
              d = this.isVerticallyVisible(s, a),
              f = s.top,
              p = s.bottom,
              h = s.height;
            if (d) {
              var v = h >= l * 3;
              if (v && !this.isFullyVerticallyVisible(s, a)) {
                if (f >= 0) {
                  var g = a - f,
                    _ = g / 2 + f - l / 2,
                    y = g < l * 3 ? f + l : _;
                  this.translateSpinner(u, y, !0);
                } else if (f < 0 && p > a) {
                  var w = a / 2 - l / 2;
                  this.translateSpinner(u, w, !0);
                } else {
                  var O = p / 2 - l / 2,
                    m = O < l ? O - (l - O) : O;
                  this.translateSpinner(u, m, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(c, a)) return;
            var S = (i = this.containerRef) === null || i === void 0 ? void 0 : i.current;
            if (S && typeof S.getBoundingClientRect == "function") {
              var x = S.getBoundingClientRect().top,
                D = (f - x) / 2;
              this.translateSpinner(u, D, !1);
            }
          }
        },
      },
      {
        key: "render",
        value: function () {
          var n = this.props,
            i = n.children,
            a = n.isLoading,
            o = n.spinnerSize,
            u = n.testId,
            s = n.loadingLabel;
          return E.createElement(
            L_,
            { testId: u && "".concat(u, "--loading--container--advanced"), ref: this.containerRef },
            i,
            a &&
              E.createElement(
                F_,
                { testId: u },
                E.createElement(
                  B_,
                  { ref: this.spinnerRef },
                  E.createElement(uv, {
                    size: o,
                    testId: u && "".concat(u, "--loadingSpinner"),
                    label: s,
                  }),
                ),
              ),
          );
        },
      },
    ])
  );
})(E.Component);
k(fv, "defaultProps", {
  isLoading: !0,
  spinnerSize: ca,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(rv), ")"),
  loadingLabel: "Loading table",
});
function z_(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = b.useState(t),
    i = K(n, 2),
    a = i[0],
    o = i[1],
    u = b.useRef(r);
  b.useEffect(
    function () {
      u.current = r;
    },
    [r],
  );
  var s = r ? e : a,
    c = b.useCallback(function (l) {
      u.current || o(l);
    }, []);
  return [s, c];
}
var Dn = {},
  Tn = {};
function Wc(e, t, r, n, i, a, o) {
  try {
    var u = e[a](o),
      s = u.value;
  } catch (c) {
    return void r(c);
  }
  u.done ? t(s) : Promise.resolve(s).then(n, i);
}
function de(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, i) {
      var a = e.apply(t, r);
      function o(s) {
        Wc(a, n, i, o, u, "next", s);
      }
      function u(s) {
        Wc(a, n, i, o, u, "throw", s);
      }
      o(void 0);
    });
  };
}
var Eo = { exports: {} },
  ko = { exports: {} },
  Kc;
function vv() {
  return (
    Kc ||
      ((Kc = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ko)),
    ko.exports
  );
}
var xo = { exports: {} },
  Co = { exports: {} },
  Jc;
function pv() {
  return (
    Jc ||
      ((Jc = 1),
      (function (e) {
        function t(r, n, i, a) {
          var o = Object.defineProperty;
          try {
            o({}, "", {});
          } catch {
            o = 0;
          }
          ((e.exports = t =
            function (s, c, l, d) {
              function f(p, h) {
                t(s, p, function (v) {
                  return this._invoke(p, h, v);
                });
              }
              c
                ? o
                  ? o(s, c, { value: l, enumerable: !d, configurable: !d, writable: !d })
                  : (s[c] = l)
                : (f("next", 0), f("throw", 1), f("return", 2));
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r, n, i, a));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Co)),
    Co.exports
  );
}
var Yc;
function hv() {
  return (
    Yc ||
      ((Yc = 1),
      (function (e) {
        var t = pv();
        function r() {
          var n,
            i,
            a = typeof Symbol == "function" ? Symbol : {},
            o = a.iterator || "@@iterator",
            u = a.toStringTag || "@@toStringTag";
          function s(g, _, y, w) {
            var O = _ && _.prototype instanceof l ? _ : l,
              m = Object.create(O.prototype);
            return (
              t(
                m,
                "_invoke",
                (function (S, x, D) {
                  var j,
                    R,
                    T,
                    U = 0,
                    z = D || [],
                    V = !1,
                    Y = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: G,
                      f: G.bind(n, 4),
                      d: function (X, B) {
                        return ((j = X), (R = 0), (T = n), (Y.n = B), c);
                      },
                    };
                  function G($, X) {
                    for (R = $, T = X, i = 0; !V && U && !B && i < z.length; i++) {
                      var B,
                        A = z[i],
                        _e = Y.p,
                        ae = A[2];
                      $ > 3
                        ? (B = ae === X) &&
                          ((T = A[(R = A[4]) ? 5 : ((R = 3), 3)]), (A[4] = A[5] = n))
                        : A[0] <= _e &&
                          ((B = $ < 2 && _e < A[1])
                            ? ((R = 0), (Y.v = X), (Y.n = A[1]))
                            : _e < ae &&
                              (B = $ < 3 || A[0] > X || X > ae) &&
                              ((A[4] = $), (A[5] = X), (Y.n = ae), (R = 0)));
                    }
                    if (B || $ > 1) return c;
                    throw ((V = !0), X);
                  }
                  return function ($, X, B) {
                    if (U > 1) throw TypeError("Generator is already running");
                    for (V && X === 1 && G(X, B), R = X, T = B; (i = R < 2 ? n : T) || !V; ) {
                      j || (R ? (R < 3 ? (R > 1 && (Y.n = -1), G(R, T)) : (Y.n = T)) : (Y.v = T));
                      try {
                        if (((U = 2), j)) {
                          if ((R || ($ = "next"), (i = j[$]))) {
                            if (!(i = i.call(j, T)))
                              throw TypeError("iterator result is not an object");
                            if (!i.done) return i;
                            ((T = i.value), R < 2 && (R = 0));
                          } else
                            (R === 1 && (i = j.return) && i.call(j),
                              R < 2 &&
                                ((T = TypeError(
                                  "The iterator does not provide a '" + $ + "' method",
                                )),
                                (R = 1)));
                          j = n;
                        } else if ((i = (V = Y.n < 0) ? T : S.call(x, Y)) !== c) break;
                      } catch (A) {
                        ((j = n), (R = 1), (T = A));
                      } finally {
                        U = 1;
                      }
                    }
                    return { value: i, done: V };
                  };
                })(g, y, w),
                !0,
              ),
              m
            );
          }
          var c = {};
          function l() {}
          function d() {}
          function f() {}
          i = Object.getPrototypeOf;
          var p = [][o]
              ? i(i([][o]()))
              : (t((i = {}), o, function () {
                  return this;
                }),
                i),
            h = (f.prototype = l.prototype = Object.create(p));
          function v(g) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(g, f)
                : ((g.__proto__ = f), t(g, u, "GeneratorFunction")),
              (g.prototype = Object.create(h)),
              g
            );
          }
          return (
            (d.prototype = f),
            t(h, "constructor", f),
            t(f, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(f, u, "GeneratorFunction"),
            t(h),
            t(h, u, "Generator"),
            t(h, o, function () {
              return this;
            }),
            t(h, "toString", function () {
              return "[object Generator]";
            }),
            ((e.exports = r =
              function () {
                return { w: s, m: v };
              }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports))()
          );
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(xo)),
    xo.exports
  );
}
var Ro = { exports: {} },
  Po = { exports: {} },
  Ao = { exports: {} },
  Xc;
function gv() {
  return (
    Xc ||
      ((Xc = 1),
      (function (e) {
        var t = vv(),
          r = pv();
        function n(i, a) {
          function o(s, c, l, d) {
            try {
              var f = i[s](c),
                p = f.value;
              return p instanceof t
                ? a.resolve(p.v).then(
                    function (h) {
                      o("next", h, l, d);
                    },
                    function (h) {
                      o("throw", h, l, d);
                    },
                  )
                : a.resolve(p).then(
                    function (h) {
                      ((f.value = h), l(f));
                    },
                    function (h) {
                      return o("throw", h, l, d);
                    },
                  );
            } catch (h) {
              d(h);
            }
          }
          var u;
          (this.next ||
            (r(n.prototype),
            r(
              n.prototype,
              (typeof Symbol == "function" && Symbol.asyncIterator) || "@asyncIterator",
              function () {
                return this;
              },
            )),
            r(
              this,
              "_invoke",
              function (s, c, l) {
                function d() {
                  return new a(function (f, p) {
                    o(s, l, f, p);
                  });
                }
                return (u = u ? u.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ao)),
    Ao.exports
  );
}
var Zc;
function _v() {
  return (
    Zc ||
      ((Zc = 1),
      (function (e) {
        var t = hv(),
          r = gv();
        function n(i, a, o, u, s) {
          return new r(t().w(i, a, o, u), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Po)),
    Po.exports
  );
}
var Qc;
function U_() {
  return (
    Qc ||
      ((Qc = 1),
      (function (e) {
        var t = _v();
        function r(n, i, a, o, u) {
          var s = t(n, i, a, o, u);
          return s.next().then(function (c) {
            return c.done ? c.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ro)),
    Ro.exports
  );
}
var jo = { exports: {} },
  el;
function q_() {
  return (
    el ||
      ((el = 1),
      (function (e) {
        function t(r) {
          var n = Object(r),
            i = [];
          for (var a in n) i.unshift(a);
          return function o() {
            for (; i.length; ) if ((a = i.pop()) in n) return ((o.value = a), (o.done = !1), o);
            return ((o.done = !0), o);
          };
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(jo)),
    jo.exports
  );
}
var Io = { exports: {} },
  Do = { exports: {} },
  tl;
function $_() {
  return (
    tl ||
      ((tl = 1),
      (function (e) {
        function t(r) {
          "@babel/helpers - typeof";
          return (
            (e.exports = t =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (n) {
                    return typeof n;
                  }
                : function (n) {
                    return n &&
                      typeof Symbol == "function" &&
                      n.constructor === Symbol &&
                      n !== Symbol.prototype
                      ? "symbol"
                      : typeof n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r)
          );
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Do)),
    Do.exports
  );
}
var rl;
function V_() {
  return (
    rl ||
      ((rl = 1),
      (function (e) {
        var t = $_().default;
        function r(n) {
          if (n != null) {
            var i = n[(typeof Symbol == "function" && Symbol.iterator) || "@@iterator"],
              a = 0;
            if (i) return i.call(n);
            if (typeof n.next == "function") return n;
            if (!isNaN(n.length))
              return {
                next: function () {
                  return (n && a >= n.length && (n = void 0), { value: n && n[a++], done: !n });
                },
              };
          }
          throw new TypeError(t(n) + " is not iterable");
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Io)),
    Io.exports
  );
}
var nl;
function G_() {
  return (
    nl ||
      ((nl = 1),
      (function (e) {
        var t = vv(),
          r = hv(),
          n = U_(),
          i = _v(),
          a = gv(),
          o = q_(),
          u = V_();
        function s() {
          var c = r(),
            l = c.m(s),
            d = (Object.getPrototypeOf ? Object.getPrototypeOf(l) : l.__proto__).constructor;
          function f(v) {
            var g = typeof v == "function" && v.constructor;
            return !!g && (g === d || (g.displayName || g.name) === "GeneratorFunction");
          }
          var p = { throw: 1, return: 2, break: 3, continue: 3 };
          function h(v) {
            var g, _;
            return function (y) {
              (g ||
                ((g = {
                  stop: function () {
                    return _(y.a, 2);
                  },
                  catch: function () {
                    return y.v;
                  },
                  abrupt: function (O, m) {
                    return _(y.a, p[O], m);
                  },
                  delegateYield: function (O, m, S) {
                    return ((g.resultName = m), _(y.d, u(O), S));
                  },
                  finish: function (O) {
                    return _(y.f, O);
                  },
                }),
                (_ = function (O, m, S) {
                  ((y.p = g.prev), (y.n = g.next));
                  try {
                    return O(m, S);
                  } finally {
                    g.next = y.n;
                  }
                })),
                g.resultName && ((g[g.resultName] = y.v), (g.resultName = void 0)),
                (g.sent = y.v),
                (g.next = y.n));
              try {
                return v.call(this, g);
              } finally {
                ((y.p = g.prev), (y.n = g.next));
              }
            };
          }
          return ((e.exports = s =
            function () {
              return {
                wrap: function (_, y, w, O) {
                  return c.w(h(_), y, w, O && O.reverse());
                },
                isGeneratorFunction: f,
                mark: c.m,
                awrap: function (_, y) {
                  return new t(_, y);
                },
                AsyncIterator: a,
                async: function (_, y, w, O, m) {
                  return (f(y) ? i : n)(h(_), y, w, O, m);
                },
                keys: o,
                values: u,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Eo)),
    Eo.exports
  );
}
var To, il;
function H_() {
  if (il) return To;
  il = 1;
  var e = G_()();
  To = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return To;
}
var W_ = H_();
const N = Yt(W_);
var nr = {},
  Or = {},
  Bi = {},
  Mn = {},
  al;
function K_() {
  if (al) return Mn;
  ((al = 1),
    Object.defineProperty(Mn, "__esModule", { value: !0 }),
    (Mn.V1InitializeContainer = void 0));
  const e = wt();
  let t = class {
    constructor(n) {
      this._values = n;
    }
    getGate(n) {
      return this._getResultFromLookup(this._values.feature_gates, n);
    }
    getConfig(n) {
      return this._getResultFromLookup(this._values.dynamic_configs, n);
    }
    getLayer(n) {
      return this._getResultFromLookup(this._values.layer_configs, n);
    }
    getParamStore(n) {
      return this._getResultFromLookup(this._values.param_stores, n);
    }
    getConfigList() {
      return Object.keys(this._values.dynamic_configs);
    }
    getExposureMapping() {
      return this._values.exposures;
    }
    _getResultFromLookup(n, i) {
      var a, o;
      return n &&
        (o = (a = n[i]) !== null && a !== void 0 ? a : n[(0, e._DJB2)(i)]) !== null &&
        o !== void 0
        ? o
        : null;
    }
  };
  return ((Mn.V1InitializeContainer = t), Mn);
}
var Ln = {},
  ol;
function J_() {
  if (ol) return Ln;
  ((ol = 1),
    Object.defineProperty(Ln, "__esModule", { value: !0 }),
    (Ln.V2InitializeContainer = void 0));
  const e = wt();
  let t = class {
    constructor(n) {
      this._values = n;
    }
    getGate(n) {
      var i, a, o;
      const u = this._getResultFromLookup(this._values.feature_gates, n);
      return u
        ? {
            name: n,
            value: u.v === !0,
            rule_id: (i = u.r) !== null && i !== void 0 ? i : "default",
            secondary_exposures: (a = u.s) !== null && a !== void 0 ? a : [],
            id_type: (o = u.i) !== null && o !== void 0 ? o : "",
          }
        : null;
    }
    getConfig(n) {
      var i, a, o, u;
      const s = this._getResultFromLookup(this._values.dynamic_configs, n);
      return s
        ? {
            name: n,
            value: (i = this._values.values[s.v]) !== null && i !== void 0 ? i : {},
            rule_id: s.r,
            secondary_exposures: (a = s.s) !== null && a !== void 0 ? a : [],
            id_type: (o = s.i) !== null && o !== void 0 ? o : "",
            is_user_in_experiment: s.ue === !0,
            passed: s.p === !0,
            group_name: (u = s.gn) !== null && u !== void 0 ? u : void 0,
            is_experiment_active: s.ea === !0,
            group: s.r,
            is_device_based: s.i === "stableID",
          }
        : null;
    }
    getLayer(n) {
      var i, a, o, u, s, c;
      const l = this._getResultFromLookup(this._values.layer_configs, n);
      return l
        ? {
            name: n,
            value: (i = this._values.values[l.v]) !== null && i !== void 0 ? i : {},
            rule_id: l.r,
            secondary_exposures: (a = l.s) !== null && a !== void 0 ? a : [],
            is_user_in_experiment: l.ue === !0,
            group_name: (o = l.gn) !== null && o !== void 0 ? o : void 0,
            is_experiment_active: l.ea === !0,
            group: l.r,
            is_device_based: l.i === "stableID",
            allocated_experiment_name: (u = l.ae) !== null && u !== void 0 ? u : "",
            explicit_parameters: (s = l.ep) !== null && s !== void 0 ? s : [],
            undelegated_secondary_exposures: (c = l.us) !== null && c !== void 0 ? c : [],
            parameter_rule_ids: l.pr,
          }
        : null;
    }
    getParamStore(n) {
      return this._getResultFromLookup(this._values.param_stores, n);
    }
    getConfigList() {
      return Object.keys(this._values.dynamic_configs);
    }
    getExposureMapping() {
      return this._values.exposures;
    }
    _getResultFromLookup(n, i) {
      var a, o;
      return n &&
        (o = (a = n[i]) !== null && a !== void 0 ? a : n[(0, e._DJB2)(i)]) !== null &&
        o !== void 0
        ? o
        : null;
    }
  };
  return ((Ln.V2InitializeContainer = t), Ln);
}
var sl;
function Y_() {
  if (sl) return Bi;
  ((sl = 1), Object.defineProperty(Bi, "__esModule", { value: !0 }));
  const e = wt(),
    t = K_(),
    r = J_();
  let n = class {
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
        (this._bootstrapMetadata = null),
        this._warnings.clear());
    }
    finalize() {
      this._values || (this._source = "NoValues");
    }
    getValues() {
      return this._rawValues
        ? (0, e._typedJsonParse)(this._rawValues, "has_updates", "EvaluationStoreValues")
        : null;
    }
    setValues(a, o) {
      var u, s;
      if (!a) return !1;
      const c = (0, e._typedJsonParse)(a.data, "has_updates", "EvaluationResponse");
      return c == null
        ? !1
        : ((this._source = a.source),
          c?.has_updates !== !0 ||
            ((u = c.time) !== null && u !== void 0 ? u : 0) < this._lcut ||
            ((this._rawValues = a.data),
            (this._lcut = c.time),
            (this._receivedAt = a.receivedAt),
            c.response_format === "init-v2"
              ? (this._values = new r.V2InitializeContainer(c))
              : (this._values = new t.V1InitializeContainer(c)),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(a.source, c)),
            a.source && c.user && this._setWarningState(o, c),
            e.SDKFlags.setFlags(this._sdkKey, (s = c.sdk_flags) !== null && s !== void 0 ? s : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(a) {
      const o = this._values ? this._values.getGate(a) : null;
      return this._getDetailedStoreResult(o);
    }
    getConfig(a) {
      const o = this._values ? this._values.getConfig(a) : null;
      return this._getDetailedStoreResult(o);
    }
    getConfigList() {
      return this._values ? this._values.getConfigList() : [];
    }
    getLayer(a) {
      const o = this._values ? this._values.getLayer(a) : null;
      return this._getDetailedStoreResult(o);
    }
    getParamStore(a) {
      const o = this._values ? this._values.getParamStore(a) : null;
      return this._getDetailedStoreResult(o);
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var a;
      return (a = this._values) === null || a === void 0 ? void 0 : a.getExposureMapping();
    }
    _extractBootstrapMetadata(a, o) {
      if (a !== "Bootstrap") return null;
      const u = {};
      return (
        o.user && (u.user = o.user),
        o.sdkInfo && (u.generatorSDKInfo = o.sdkInfo),
        (u.lcut = o.time),
        u
      );
    }
    _getDetailedStoreResult(a) {
      return { result: a, details: this._getDetails(a == null) };
    }
    _setWarningState(a, o) {
      var u, s;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((u = a.customIDs) === null || u === void 0 ? void 0 : u.stableID) !== c &&
        ((!((s = a.customIDs) === null || s === void 0) && s.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in o) {
        const l = o.user,
          d = Object.assign(Object.assign({}, a), {
            analyticsOnlyMetadata: void 0,
            privateAttributes: void 0,
          });
        (0, e._getFullUserHash)(d) !== (0, e._getFullUserHash)(l) &&
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
      var o, u;
      const s = this.getCurrentSourceDetails();
      let c = s.reason;
      const l = (o = s.warnings) !== null && o !== void 0 ? o : [];
      (this._source === "Bootstrap" && l.length > 0 && (c = c + l[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${a ? "Unrecognized" : "Recognized"}`));
      const d =
        this._source === "Bootstrap" && (u = this._bootstrapMetadata) !== null && u !== void 0
          ? u
          : void 0;
      return (d && (s.bootstrapMetadata = d), Object.assign(Object.assign({}, s), { reason: c }));
    }
  };
  return ((Bi.default = n), Bi);
}
var Sr = {},
  Fn = {},
  ul;
function X_() {
  if (ul) return Fn;
  ((ul = 1),
    Object.defineProperty(Fn, "__esModule", { value: !0 }),
    (Fn._resolveDeltasResponse = void 0));
  const e = wt(),
    t = 2;
  function r(o, u) {
    const s = (0, e._typedJsonParse)(u, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const c = n(o, s),
      l = i(c),
      d = (0, e._DJB2Object)(
        {
          feature_gates: l.feature_gates,
          dynamic_configs: l.dynamic_configs,
          layer_configs: l.layer_configs,
        },
        t,
      );
    return d === s.checksumV2
      ? JSON.stringify(l)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: l,
          badFullResponse: s.deltas_full_response,
        };
  }
  Fn._resolveDeltasResponse = r;
  function n(o, u) {
    return Object.assign(Object.assign(Object.assign({}, o), u), {
      feature_gates: Object.assign(Object.assign({}, o.feature_gates), u.feature_gates),
      layer_configs: Object.assign(Object.assign({}, o.layer_configs), u.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, o.dynamic_configs), u.dynamic_configs),
    });
  }
  function i(o) {
    const u = o;
    return (
      a(o.deleted_gates, u.feature_gates),
      delete u.deleted_gates,
      a(o.deleted_configs, u.dynamic_configs),
      delete u.deleted_configs,
      a(o.deleted_layers, u.layer_configs),
      delete u.deleted_layers,
      u
    );
  }
  function a(o, u) {
    o?.forEach((s) => {
      delete u[s];
    });
  }
  return Fn;
}
var cl;
function bv() {
  if (cl) return Sr;
  cl = 1;
  var e =
    (Sr && Sr.__awaiter) ||
    function (i, a, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(h) {
          try {
            p(u.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(u.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? c(h.value) : s(h.value).then(d, f);
        }
        p((u = u.apply(i, a || [])).next());
      });
    };
  Object.defineProperty(Sr, "__esModule", { value: !0 });
  const t = wt(),
    r = X_();
  class n extends t.NetworkCore {
    constructor(a, o) {
      super(a, o);
      const u = a?.networkConfig;
      ((this._option = a),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          u?.initializeUrl,
          u?.api,
          u?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(a, o, u, s, c) {
      return e(this, void 0, void 0, function* () {
        var l, d, f, p, h, v;
        const g = o ? (0, t._typedJsonParse)(o, "has_updates", "InitializeResponse") : null;
        let _ = {
          user: s,
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
          const y =
            g?.hash_used !==
            ((v =
              (h = (p = this._option) === null || p === void 0 ? void 0 : p.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && v !== void 0
              ? v
              : "djb2");
          _ = Object.assign(Object.assign({}, _), {
            sinceTime: c && !y ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && c ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: y ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(a, g, _, u);
      });
    }
    _fetchEvaluations(a, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c, l;
        const d = yield this.post({
          sdkKey: a,
          urlConfig: this._initializeUrlConfig,
          data: u,
          retries: 2,
          isStatsigEncodable: !0,
          priority: s,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (c = d?.body) !== null && c !== void 0 ? c : null;
        if (
          o?.has_updates !== !0 ||
          ((l = d.body) === null || l === void 0 ? void 0 : l.includes('"is_delta":true')) !== !0 ||
          u.deltasResponseRequested !== !0
        )
          return d.body;
        const f = (0, r._resolveDeltasResponse)(o, d.body);
        return typeof f == "string"
          ? f
          : this._fetchEvaluations(
              a,
              o,
              Object.assign(Object.assign(Object.assign({}, u), f), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((Sr.default = n), Sr);
}
var Bn = {},
  ll;
function Z_() {
  if (ll) return Bn;
  ((ll = 1),
    Object.defineProperty(Bn, "__esModule", { value: !0 }),
    (Bn._makeParamStoreGetter = void 0));
  const e = wt(),
    t = { disableExposureLog: !0 };
  function r(l) {
    return l == null || l.disableExposureLog === !1;
  }
  function n(l, d) {
    return d != null && !(0, e._isTypeMatch)(l, d);
  }
  function i(l, d) {
    return l.value;
  }
  function a(l, d, f) {
    return l.getFeatureGate(d.gate_name, r(f) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function o(l, d, f, p) {
    const v = l.getDynamicConfig(d.config_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function u(l, d, f, p) {
    const v = l.getExperiment(d.experiment_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function s(l, d, f, p) {
    const v = l.getLayer(d.layer_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function c(l, d, f) {
    return (p, h) => {
      if (d == null) return h;
      const v = d[p];
      if (v == null || (h != null && (0, e._typeOf)(h) !== v.param_type)) return h;
      switch (v.ref_type) {
        case "static":
          return i(v);
        case "gate":
          return a(l, v, f);
        case "dynamic_config":
          return o(l, v, h, f);
        case "experiment":
          return u(l, v, h, f);
        case "layer":
          return s(l, v, h, f);
        default:
          return h;
      }
    };
  }
  return ((Bn._makeParamStoreGetter = c), Bn);
}
var ir = {},
  dl;
function Q_() {
  if (dl) return ir;
  dl = 1;
  var e =
    (ir && ir.__awaiter) ||
    function (i, a, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(h) {
          try {
            p(u.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(u.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? c(h.value) : s(h.value).then(d, f);
        }
        p((u = u.apply(i, a || [])).next());
      });
    };
  (Object.defineProperty(ir, "__esModule", { value: !0 }),
    (ir.StatsigEvaluationsDataAdapter = void 0));
  const t = wt(),
    r = bv();
  let n = class extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(a, o, u) {
      (super.attach(a, o, u),
        u !== null && u instanceof r.default
          ? (this._network = u)
          : (this._network = new r.default(o ?? {})));
    }
    getDataAsync(a, o, u) {
      return this._getDataAsyncImpl(a, (0, t._normalizeUser)(o, this._options), u);
    }
    prefetchData(a, o) {
      return this._prefetchDataImpl(a, o);
    }
    setData(a) {
      const o = (0, t._typedJsonParse)(a, "has_updates", "data");
      o && "user" in o
        ? super.setData(a, o.user)
        : t.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(a, o) {
      super.setData(a, o);
    }
    _fetchFromNetwork(a, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c;
        const l = yield (c = this._network) === null || c === void 0
          ? void 0
          : c.fetchEvaluations(this._getSdkKey(), a, u?.priority, o, s);
        return l ?? null;
      });
    }
    _getCacheKey(a) {
      var o;
      const u = (0, t._getStorageKey)(
        this._getSdkKey(),
        a,
        (o = this._options) === null || o === void 0 ? void 0 : o.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${u}`;
    }
    _isCachedResultValidFor204(a, o) {
      return a.fullUserHash != null && a.fullUserHash === (0, t._getFullUserHash)(o);
    }
  };
  return ((ir.StatsigEvaluationsDataAdapter = n), ir);
}
var fl;
function eb() {
  if (fl) return Or;
  fl = 1;
  var e =
    (Or && Or.__awaiter) ||
    function (u, s, c, l) {
      function d(f) {
        return f instanceof c
          ? f
          : new c(function (p) {
              p(f);
            });
      }
      return new (c || (c = Promise))(function (f, p) {
        function h(_) {
          try {
            g(l.next(_));
          } catch (y) {
            p(y);
          }
        }
        function v(_) {
          try {
            g(l.throw(_));
          } catch (y) {
            p(y);
          }
        }
        function g(_) {
          _.done ? f(_.value) : d(_.value).then(h, v);
        }
        g((l = l.apply(u, s || [])).next());
      });
    };
  Object.defineProperty(Or, "__esModule", { value: !0 });
  const t = wt(),
    r = Y_(),
    n = bv(),
    i = Z_(),
    a = Q_();
  let o = class ss extends t.StatsigClientBase {
    static instance(s) {
      const c = (0, t._getStatsigGlobal)().instance(s);
      return c instanceof ss
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new ss(s ?? "", {}));
    }
    constructor(s, c, l = null) {
      var d, f;
      t.SDKType._setClientType(s, "javascript-client");
      const p = new n.default(l, (v) => {
        this.$emt(v);
      });
      (super(
        s,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new a.StatsigEvaluationsDataAdapter(),
        p,
        l,
      ),
        (this._possibleFirstTouchMetadata = {}),
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
        (this.getConfigList = this._memoize(
          t.MemoPrefix._configList,
          this._getConfigListImpl.bind(this),
        )),
        (this.getLayer = this._memoize(t.MemoPrefix._layer, this._getLayerImpl.bind(this))),
        (this.getParameterStore = this._memoize(
          t.MemoPrefix._paramStore,
          this._getParameterStoreImpl.bind(this),
        )),
        (this._store = new r.default(s)),
        (this._network = p),
        (this._user = this._configureUser(c, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (f = l?.plugins) !== null && f !== void 0 ? f : [];
      for (const v of h) v.bind(this);
    }
    initializeSync(s) {
      var c;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((c = this._store.getWarnings()) !== null && c !== void 0 ? c : []),
          ])
        : (this._logger.start(), this.updateUserSync(this._user, s));
    }
    initializeAsync(s) {
      return e(this, void 0, void 0, function* () {
        return this._initializePromise
          ? this._initializePromise
          : ((this._initializePromise = this._initializeAsyncImpl(s)), this._initializePromise);
      });
    }
    updateUserSync(s, c) {
      const l = performance.now();
      try {
        return this._updateUserSyncImpl(s, c, l);
      } catch (d) {
        const f = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(f, l);
      }
    }
    _updateUserSyncImpl(s, c, l) {
      var d;
      const f = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
      const p = this.dataAdapter.getDataSync(this._user);
      (p == null && f.push("NoCachedValues"),
        this._store.setValues(p, this._user),
        this._finalizeUpdate(p));
      const h = c?.disableBackgroundCacheRefresh;
      return h === !0 || (h == null && p?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          )
        : (this._runPostUpdate(p ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          ));
    }
    updateUserAsync(s, c) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, c);
        } catch (d) {
          const f = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(f, l);
        }
      });
    }
    _updateUserAsyncImpl(s, c) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(s);
        const l = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(l);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, l, c)),
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
        const p = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          f,
          this._store.getSource(),
          p,
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
    checkGate(s, c) {
      return this.getFeatureGate(s, c).value;
    }
    logEvent(s, c, l) {
      const d = typeof s == "string" ? { eventName: s, value: c, metadata: l } : s;
      (this.$emt({ name: "log_event_called", event: d }),
        this._logger.enqueue(
          Object.assign(Object.assign({}, d), { user: this._user, time: Date.now() }),
        ));
    }
    updateUserWithAnalyticsOnlyMetadata(s) {
      this._user = this._configureUser(
        Object.assign(Object.assign({}, this._user), { analyticsOnlyMetadata: s }),
        this._options,
      );
    }
    _primeReadyRipcord() {
      this.$on("error", () => {
        this.loadingStatus === "Loading" && this._finalizeUpdate(null);
      });
    }
    _initializeAsyncImpl(s) {
      return e(this, void 0, void 0, function* () {
        return (
          t.Storage.isReady() || (yield t.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, s)
        );
      });
    }
    _createErrorUpdateDetails(s, c) {
      var l;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - c,
        s,
        null,
        [...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : [])],
      );
    }
    _finalizeUpdate(s) {
      (this._store.finalize(), this._setStatus("Ready", s));
    }
    _runPostUpdate(s, c) {
      this.dataAdapter.getDataAsync(s, c, { priority: "low" }).catch((l) => {
        t.Log.error("An error occurred after update.", l);
      });
    }
    _resetForUser(s) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(s, this._options)));
    }
    _configureUser(s, c) {
      var l, d, f;
      const p = (0, t._normalizeUser)(s, c),
        h = (l = p.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      if (h) {
        const v =
          (f = (d = this.storageProvider).isReadyResolver) === null || f === void 0
            ? void 0
            : f.call(d);
        v
          ? v.then(
              () => t.StableID.setOverride(h, this._sdkKey),
              () => t.StableID.setOverride(h, this._sdkKey),
            )
          : t.StableID.setOverride(h, this._sdkKey);
      }
      return (
        Object.keys(this._possibleFirstTouchMetadata).length > 0 &&
          (p.analyticsOnlyMetadata = Object.assign(
            Object.assign({}, p.analyticsOnlyMetadata),
            this._possibleFirstTouchMetadata,
          )),
        p
      );
    }
    _getFeatureGateImpl(s, c) {
      var l, d;
      const { result: f, details: p } = this._store.getGate(s),
        h = (0, t._makeFeatureGate)(s, p, f),
        v =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, c),
        g = v ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(s, c) {
      var l, d;
      const { result: f, details: p } = this._store.getConfig(s),
        h = (0, t._makeDynamicConfig)(s, p, f),
        v =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, this._user, c),
        g = v ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(s, c) {
      var l, d, f, p;
      const { result: h, details: v } = this._store.getConfig(s),
        g = (0, t._makeExperiment)(s, v, h);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = g.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const _ =
          (p =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || p === void 0
            ? void 0
            : p.call(f, g, this._user, c),
        y = _ ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, y, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: y }),
        y
      );
    }
    _getConfigListImpl() {
      return this._store.getConfigList();
    }
    _getLayerImpl(s, c) {
      var l, d, f;
      const { result: p, details: h } = this._store.getLayer(s),
        v = (0, t._makeLayer)(s, h, p),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, v, this._user, c);
      c?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const _ = (0, t._mergeOverride)(
        v,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : v.__value,
        (y) => {
          c?.disableExposureLog ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                _,
                y,
                this._store.getExposureMapping(),
              ),
              c,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: _ }), _);
    }
    _getParameterStoreImpl(s, c) {
      var l, d;
      const { result: f, details: p } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const h = {
          name: s,
          details: p,
          __configuration: f,
          get: (0, i._makeParamStoreGetter)(this, f, c),
        },
        v =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, c);
      return (
        v != null &&
          ((h.__configuration = v.config),
          (h.details = v.details),
          (h.get = (0, i._makeParamStoreGetter)(this, v.config, c))),
        h
      );
    }
  };
  return ((Or.default = o), Or);
}
var vl;
function tb() {
  return (
    vl ||
      ((vl = 1),
      (function (e) {
        var t =
            (nr && nr.__createBinding) ||
            (Object.create
              ? function (o, u, s, c) {
                  c === void 0 && (c = s);
                  var l = Object.getOwnPropertyDescriptor(u, s);
                  ((!l || ("get" in l ? !u.__esModule : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return u[s];
                      },
                    }),
                    Object.defineProperty(o, c, l));
                }
              : function (o, u, s, c) {
                  (c === void 0 && (c = s), (o[c] = u[s]));
                }),
          r =
            (nr && nr.__exportStar) ||
            function (o, u) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(u, s) && t(u, o, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = wt(),
          i = eb();
        ((e.StatsigClient = i.default), r(wt(), e));
        const a = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = a;
      })(nr)),
    nr
  );
}
var nt = tb(),
  Mo = { exports: {} },
  pl;
function rb() {
  return (
    pl ||
      ((pl = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function i(s, c, l) {
          ((this.fn = s), (this.context = c), (this.once = l || !1));
        }
        function a(s, c, l, d, f) {
          if (typeof l != "function") throw new TypeError("The listener must be a function");
          var p = new i(l, d || s, f),
            h = r ? r + c : c;
          return (
            s._events[h]
              ? s._events[h].fn
                ? (s._events[h] = [s._events[h], p])
                : s._events[h].push(p)
              : ((s._events[h] = p), s._eventsCount++),
            s
          );
        }
        function o(s, c) {
          --s._eventsCount === 0 ? (s._events = new n()) : delete s._events[c];
        }
        function u() {
          ((this._events = new n()), (this._eventsCount = 0));
        }
        ((u.prototype.eventNames = function () {
          var c = [],
            l,
            d;
          if (this._eventsCount === 0) return c;
          for (d in (l = this._events)) t.call(l, d) && c.push(r ? d.slice(1) : d);
          return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(l)) : c;
        }),
          (u.prototype.listeners = function (c) {
            var l = r ? r + c : c,
              d = this._events[l];
            if (!d) return [];
            if (d.fn) return [d.fn];
            for (var f = 0, p = d.length, h = new Array(p); f < p; f++) h[f] = d[f].fn;
            return h;
          }),
          (u.prototype.listenerCount = function (c) {
            var l = r ? r + c : c,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (u.prototype.emit = function (c, l, d, f, p, h) {
            var v = r ? r + c : c;
            if (!this._events[v]) return !1;
            var g = this._events[v],
              _ = arguments.length,
              y,
              w;
            if (g.fn) {
              switch ((g.once && this.removeListener(c, g.fn, void 0, !0), _)) {
                case 1:
                  return (g.fn.call(g.context), !0);
                case 2:
                  return (g.fn.call(g.context, l), !0);
                case 3:
                  return (g.fn.call(g.context, l, d), !0);
                case 4:
                  return (g.fn.call(g.context, l, d, f), !0);
                case 5:
                  return (g.fn.call(g.context, l, d, f, p), !0);
                case 6:
                  return (g.fn.call(g.context, l, d, f, p, h), !0);
              }
              for (w = 1, y = new Array(_ - 1); w < _; w++) y[w - 1] = arguments[w];
              g.fn.apply(g.context, y);
            } else {
              var O = g.length,
                m;
              for (w = 0; w < O; w++)
                switch ((g[w].once && this.removeListener(c, g[w].fn, void 0, !0), _)) {
                  case 1:
                    g[w].fn.call(g[w].context);
                    break;
                  case 2:
                    g[w].fn.call(g[w].context, l);
                    break;
                  case 3:
                    g[w].fn.call(g[w].context, l, d);
                    break;
                  case 4:
                    g[w].fn.call(g[w].context, l, d, f);
                    break;
                  default:
                    if (!y) for (m = 1, y = new Array(_ - 1); m < _; m++) y[m - 1] = arguments[m];
                    g[w].fn.apply(g[w].context, y);
                }
            }
            return !0;
          }),
          (u.prototype.on = function (c, l, d) {
            return a(this, c, l, d, !1);
          }),
          (u.prototype.once = function (c, l, d) {
            return a(this, c, l, d, !0);
          }),
          (u.prototype.removeListener = function (c, l, d, f) {
            var p = r ? r + c : c;
            if (!this._events[p]) return this;
            if (!l) return (o(this, p), this);
            var h = this._events[p];
            if (h.fn) h.fn === l && (!f || h.once) && (!d || h.context === d) && o(this, p);
            else {
              for (var v = 0, g = [], _ = h.length; v < _; v++)
                (h[v].fn !== l || (f && !h[v].once) || (d && h[v].context !== d)) && g.push(h[v]);
              g.length ? (this._events[p] = g.length === 1 ? g[0] : g) : o(this, p);
            }
            return this;
          }),
          (u.prototype.removeAllListeners = function (c) {
            var l;
            return (
              c
                ? ((l = r ? r + c : c), this._events[l] && o(this, l))
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (u.prototype.off = u.prototype.removeListener),
          (u.prototype.addListener = u.prototype.on),
          (u.prefixed = r),
          (u.EventEmitter = u),
          (e.exports = u));
      })(Mo)),
    Mo.exports
  );
}
var nb = rb();
const ib = Yt(nb);
function hl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hl(Object(r), !0).forEach(function (n) {
          k(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : hl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ni = "@all-features",
  ab = (function () {
    function e() {
      (fe(this, e), k(this, "eventToValue", new Map()), (this.emitter = new ib()));
    }
    return ve(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, i, a) {
          var o = this,
            u = i(r, Vt(Vt({}, a), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, u);
          var s = function () {
            var l = i(r, Vt(Vt({}, a), {}, { fireGateExposure: !1 })),
              d = o.eventToValue.get(n);
            d !== l && (o.eventToValue.set(n, l), n(l));
          };
          return (
            this.emitter.on(r, s),
            function () {
              o.emitter.off(r, s);
            }
          );
        },
      },
      {
        key: "onExperimentValueUpdated",
        value: function (r, n, i, a, o, u) {
          var s = this,
            c = "".concat(r, ".").concat(n),
            l = o(r, n, i, Vt(Vt({}, u), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(a) === void 0 && this.eventToValue.set(a, l);
          var d = function () {
            var p = o(r, n, i, Vt(Vt({}, u), {}, { fireExperimentExposure: !1 })),
              h = s.eventToValue.get(a);
            h !== p && (s.eventToValue.set(a, p), a(p));
          };
          return (
            this.emitter.on(c, d),
            function () {
              s.emitter.off(c, d);
            }
          );
        },
      },
      {
        key: "onAnyUpdated",
        value: function (r) {
          var n = this;
          return (
            this.emitter.on(Ni, r),
            function () {
              n.emitter.off(Ni, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(Ni),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== Ni;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  ob = "fedramp-moderate";
function sb() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === ob;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Us = (function (e) {
    return (
      (e.Error = "Error"),
      (e.LocalOverride = "LocalOverride"),
      (e.Unrecognized = "Unrecognized"),
      (e.Uninitialized = "Uninitialized"),
      (e.NetworkNotModified = "NetworkNotModified"),
      (e.Network = "Network"),
      (e.InvalidBootstrap = "InvalidBootstrap"),
      (e.Bootstrap = "Bootstrap"),
      (e.Cache = "Cache"),
      (e.Unknown = "Unknown"),
      e
    );
  })({}),
  Qn = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  fi = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  ub = [
    "api",
    "disableCurrentPageLogging",
    "loggingIntervalMillis",
    "loggingBufferMaxSize",
    "localMode",
    "eventLoggingApi",
    "eventLoggingApiForRetries",
    "disableLocalStorage",
    "ignoreWindowUndefined",
    "disableAllLogging",
    "initTimeoutMs",
    "disableNetworkKeepalive",
    "overrideStableID",
    "disableErrorLogging",
    "disableAutoMetricsLogging",
  ];
function gl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gl(Object(r), !0).forEach(function (n) {
          k(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var zi = function (t) {
    return us({ perimeter: sb() ? fi.FEDRAMP_MODERATE : fi.COMMERCIAL }, t);
  },
  Nn = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      i = Object.entries(r);
    if (n.length !== i.length) return !1;
    var a = function (f, p) {
      var h = K(f, 1),
        v = h[0],
        g = K(p, 1),
        _ = g[0];
      return v.localeCompare(_);
    };
    (n.sort(a), i.sort(a));
    for (var o = 0; o < n.length; o++) {
      var u = K(n[o], 2),
        s = u[1],
        c = K(i[o], 2),
        l = c[1];
      if (s !== l) return !1;
    }
    return !0;
  },
  _l = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  cb = function (t) {
    var r = t.api,
      n = t.disableCurrentPageLogging,
      i = t.loggingIntervalMillis,
      a = t.loggingBufferMaxSize,
      o = t.localMode,
      u = t.eventLoggingApi,
      s = t.eventLoggingApiForRetries,
      c = t.disableLocalStorage,
      l = t.ignoreWindowUndefined,
      d = t.disableAllLogging;
    (t.initTimeoutMs,
      t.disableNetworkKeepalive,
      t.overrideStableID,
      t.disableErrorLogging,
      t.disableAutoMetricsLogging);
    var f = ne(t, ub);
    return us(
      us({}, f),
      {},
      {
        networkConfig: {
          api: r,
          logEventUrl: u ? u + "rgstr" : void 0,
          logEventFallbackUrls: s ? [s] : void 0,
          preventAllNetworkTraffic: o || (!l && typeof window > "u"),
        },
        includeCurrentPageUrlWithEvents: !n,
        loggingIntervalMs: i,
        loggingBufferMaxSize: a,
        disableStorage: c === void 0 ? o : c,
        disableLogging: d === void 0 ? o : d,
      },
    );
  },
  lb = Object.entries(Us).map(function (e) {
    var t = K(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  yv = function (t) {
    var r,
      n,
      i,
      a = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = lb.find(function (o) {
            var u = K(o, 1),
              s = u[0];
            return a.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Us.Unknown,
      time: (i = t.receivedAt) !== null && i !== void 0 ? i : Date.now(),
    };
  },
  cs = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  bl = (function () {
    function e(t, r, n, i) {
      var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        u = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (fe(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = a),
        (this._allocatedExperimentName = o),
        (this._evaluationDetails = i),
        (this._onDefaultValueFallback = u));
    }
    return ve(
      e,
      [
        {
          key: "get",
          value: function (r, n, i) {
            var a,
              o = this.getValue(r, n);
            if (o == null) return n;
            var u = Array.isArray(n) ? "array" : je(n),
              s = Array.isArray(o) ? "array" : je(o);
            if (i) {
              var c;
              return i(o)
                ? (this.fireExposure(r), o)
                : ((c = this._onDefaultValueFallback) === null ||
                    c === void 0 ||
                    c.call(this, this, r, u, s),
                  n);
            }
            return n == null || u === s
              ? (this.fireExposure(r), o)
              : ((a = this._onDefaultValueFallback) === null ||
                  a === void 0 ||
                  a.call(this, this, r, u, s),
                n);
          },
        },
        {
          key: "getValue",
          value: function (r, n) {
            return r == null
              ? this.value
              : (n == null && (n = null),
                this.value[r] == null ? n : (this.fireExposure(r), this.value[r]));
          },
        },
        {
          key: "fireExposure",
          value: function (r) {
            this.experiment && this.experiment.get(r);
          },
        },
      ],
      [
        {
          key: "fromExperiment",
          value: function (r) {
            var n,
              i,
              a,
              o = new e(
                r.name,
                r.value,
                r.ruleID,
                yv(r.details),
                cs(
                  (n =
                    (i = r.__evaluation) === null || i === void 0
                      ? void 0
                      : i.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                (a = r.groupName) !== null && a !== void 0 ? a : void 0,
              );
            return ((o.experiment = r), o);
          },
        },
      ],
    );
  })(),
  yl = (function () {
    function e(t, r, n, i) {
      var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        u = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        s = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        c = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (fe(this, e),
        (this._logParameterFunction = a),
        (this._name = t),
        (this._value = JSON.parse(JSON.stringify(r ?? {}))),
        (this._ruleID = n ?? ""),
        (this._evaluationDetails = i),
        (this._secondaryExposures = o),
        (this._undelegatedSecondaryExposures = u),
        (this._allocatedExperimentName = s),
        (this._explicitParameters = c));
    }
    return ve(
      e,
      [
        {
          key: "get",
          value: function (r, n, i) {
            var a = this,
              o = this._value[r];
            if (o == null) return n;
            var u = function () {
              return (a._logLayerParameterExposure(r), o);
            };
            return i
              ? i(o)
                ? u()
                : n
              : n == null || (je(o) === je(n) && Array.isArray(n) === Array.isArray(o))
                ? u()
                : n;
          },
        },
        {
          key: "getValue",
          value: function (r, n) {
            n == null && (n = null);
            var i = this._value[r];
            return (i != null && this._logLayerParameterExposure(r), i ?? n);
          },
        },
        {
          key: "_logLayerParameterExposure",
          value: function (r) {
            var n;
            (n = this._logParameterFunction) === null || n === void 0 || n.call(this, this, r);
          },
        },
      ],
      [
        {
          key: "fromLayer",
          value: function (r) {
            var n,
              i,
              a,
              o,
              u,
              s,
              c = new e(
                r.name,
                r.__value,
                r.ruleID,
                yv(r.details),
                function (l, d) {
                  return r.get(d);
                },
                cs(
                  (n =
                    (i = r.__evaluation) === null || i === void 0
                      ? void 0
                      : i.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                cs(
                  (a =
                    (o = r.__evaluation) === null || o === void 0
                      ? void 0
                      : o.undelegated_secondary_exposures) !== null && a !== void 0
                    ? a
                    : [],
                ),
                (u = r.__evaluation) === null || u === void 0
                  ? void 0
                  : u.allocated_experiment_name,
                (s = r.__evaluation) === null || s === void 0 ? void 0 : s.explicit_parameters,
              );
            return c;
          },
        },
      ],
    );
  })(),
  Ir = "0.0.0-development";
function db(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function mv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (mv = function () {
    return !!e;
  })();
}
function fb(e, t, r) {
  if (mv()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var i = new (e.bind.apply(e, n))();
  return (r && li(i, r.prototype), i);
}
function ls(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (ls = function (n) {
      if (n === null || !db(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, i);
      }
      function i() {
        return fb(n, arguments, J(this).constructor);
      }
      return (
        (i.prototype = Object.create(n.prototype, {
          constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
        })),
        li(i, n)
      );
    }),
    ls(e)
  );
}
function vb(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, wv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function wv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (wv = function () {
    return !!e;
  })();
}
var ml = (function (e) {
  function t(r) {
    return (fe(this, t), vb(this, t, [r]));
  }
  return (ze(t, e), ve(t));
})(ls(Error));
function wl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function pb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wl(Object(r), !0).forEach(function (n) {
          k(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var hb = 5e3,
  gb = "https://api.atlassian.com/flags",
  _b = "https://api.stg.atlassian.com/flags",
  bb = "https://api.dev.atlassian.com/flags",
  yb = "https://api.stg.atlassian-us-gov-mod.com/flags",
  mb = "https://api.atlassian-us-gov-mod.com/flags",
  wb = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  Ob = "oasis-stg.com/flags",
  Sb = "atlassian-isolated.net/flags",
  Eb = "/gateway/api/flags",
  Lo = (function () {
    function e() {
      fe(this, e);
    }
    return ve(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = de(
            N.mark(function n(i) {
              var a, o;
              return N.wrap(
                function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        return (
                          (a = i.targetApp),
                          (o = "/api/v2/frontend/clientSdkKey/".concat(a)),
                          (s.prev = 2),
                          (s.next = 5),
                          this.fetchRequest(o, "GET", i)
                        );
                      case 5:
                        return s.abrupt("return", s.sent);
                      case 8:
                        if (((s.prev = 8), (s.t0 = s.catch(2)), !(s.t0 instanceof Error))) {
                          s.next = 12;
                          break;
                        }
                        throw s.t0;
                      case 12:
                        throw Error("Failed to retrieve client sdk key");
                      case 13:
                      case "end":
                        return s.stop();
                    }
                },
                n,
                this,
                [[2, 8]],
              );
            }),
          );
          function r(n) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "fetchExperimentValues",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o) {
              var u;
              return N.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          (u = { identifiers: a, customAttributes: o, targetApp: i.targetApp }),
                          (c.prev = 1),
                          (c.next = 4),
                          this.fetchRequest("/api/v2/frontend/experimentValues", "POST", i, u)
                        );
                      case 4:
                        return c.abrupt("return", c.sent);
                      case 7:
                        if (((c.prev = 7), (c.t0 = c.catch(1)), !(c.t0 instanceof Error))) {
                          c.next = 11;
                          break;
                        }
                        throw c.t0;
                      case 11:
                        throw Error("Failed to retrieve experiment values");
                      case 12:
                      case "end":
                        return c.stop();
                    }
                },
                n,
                this,
                [[1, 7]],
              );
            }),
          );
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "handleResponseError",
        value: (function () {
          var t = de(
            N.mark(function n(i) {
              var a;
              return N.wrap(function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                      if (i.ok) {
                        u.next = 5;
                        break;
                      }
                      return ((u.next = 3), i.text());
                    case 3:
                      throw (
                        (a = u.sent),
                        new ml(
                          "Non 2xx response status received, status: "
                            .concat(i.status, ", body: ")
                            .concat(JSON.stringify(a)),
                        )
                      );
                    case 5:
                      if (i.status !== 204) {
                        u.next = 7;
                        break;
                      }
                      throw new ml("Unexpected 204 response");
                    case 7:
                    case "end":
                      return u.stop();
                  }
              }, n);
            }),
          );
          function r(n) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "extractResponseBody",
        value: (function () {
          var t = de(
            N.mark(function n(i) {
              var a;
              return N.wrap(function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                      return ((u.next = 2), i.text());
                    case 2:
                      return ((a = u.sent), u.abrupt("return", JSON.parse(a)));
                    case 4:
                    case "end":
                      return u.stop();
                  }
              }, n);
            }),
          );
          function r(n) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "getBaseUrl",
        value: function (r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
            i = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          if (n) return Eb;
          if (i === fi.FEDRAMP_MODERATE)
            switch (r) {
              case Qn.Production:
                return mb;
              case Qn.Staging:
                return yb;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(i, '" perimeter'),
                );
            }
          else if (i === fi.COMMERCIAL)
            switch (r) {
              case Qn.Development:
                return bb;
              case Qn.Staging:
                var o = this.getApiUrl(a);
                return o !== null ? o : _b;
              default:
                var u = this.getApiUrl(a);
                return u !== null ? u : gb;
            }
          else throw new Error('Invalid perimeter "'.concat(i, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o, u) {
              var s, c, l, d, f;
              return N.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (s = e.getBaseUrl(
                            o.environment,
                            o.useGatewayURL,
                            o.perimeter,
                            o.isolationContextId,
                          )),
                          (c = o.fetchTimeoutMs || hb),
                          AbortSignal.timeout
                            ? (l = AbortSignal.timeout(c))
                            : AbortController &&
                              ((d = new AbortController()),
                              (l = d.signal),
                              setTimeout(function () {
                                return d.abort();
                              }, c)),
                          (h.next = 5),
                          fetch(
                            "".concat(s).concat(i),
                            pb(
                              {
                                method: a,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Ir,
                                  "X-API-KEY": o.apiKey,
                                },
                                signal: l,
                              },
                              u && { body: JSON.stringify(u) },
                            ),
                          )
                        );
                      case 5:
                        return ((f = h.sent), (h.next = 8), this.handleResponseError(f));
                      case 8:
                        return ((h.next = 10), this.extractResponseBody(f));
                      case 10:
                        return h.abrupt("return", h.sent);
                      case 11:
                      case "end":
                        return h.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, i, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "getApiUrl",
        value: function (r) {
          var n = this.getWindowLocation();
          if (n === void 0) return r ? wb.replace("%s", r) : null;
          var i = n.protocol,
            a = n.hostname,
            o = a.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(i, "//api.").concat(o[1], ".").concat(Ob);
          var u = a.match(/([^.]+)\.atlassian-isolated\.net$/);
          return u ? "".concat(i, "//api.").concat(u[1], ".").concat(Sb) : null;
        },
      },
      {
        key: "getWindowLocation",
        value: function () {
          if (typeof window < "u" && window.location) return window.location;
        },
      },
    ]);
  })();
function Ol(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function zn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ol(Object(r), !0).forEach(function (n) {
          k(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ol(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function kb(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, Ov() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function Ov() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ov = function () {
    return !!e;
  })();
}
function xb(e, t, r, n) {
  var i = oa(J(e.prototype), t, r);
  return typeof i == "function"
    ? function (a) {
        return i.apply(r, a);
      }
    : i;
}
var Cb = (function (e) {
  function t() {
    var r;
    return (
      fe(this, t),
      (r = kb(this, t, ["NoFetchDataAdapter", "nofetch"])),
      k(r, "bootstrapResult", null),
      r
    );
  }
  return (
    ze(t, e),
    ve(t, [
      {
        key: "setBootstrapData",
        value: function (n) {
          this.bootstrapResult = n
            ? {
                source: "Bootstrap",
                data: JSON.stringify(n),
                receivedAt: Date.now(),
                stableID: nt.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = de(
            N.mark(function i(a, o) {
              return N.wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                    case "end":
                      return s.stop();
                  }
              }, i);
            }),
          );
          function n(i, a) {
            return r.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: "getDataAsync",
        value: (function () {
          var r = de(
            N.mark(function i(a, o, u) {
              return N.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return c.abrupt(
                          "return",
                          this.bootstrapResult &&
                            zn(
                              zn({}, this.bootstrapResult),
                              {},
                              { fullUserHash: nt._getFullUserHash(o) },
                            ),
                        );
                      case 1:
                      case "end":
                        return c.stop();
                    }
                },
                i,
                this,
              );
            }),
          );
          function n(i, a, o) {
            return r.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: "getDataSync",
        value: function (n) {
          return (
            this.bootstrapResult &&
            zn(zn({}, this.bootstrapResult), {}, { fullUserHash: nt._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = de(
            N.mark(function i(a, o, u) {
              return N.wrap(function (c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                      return c.abrupt("return", null);
                    case 1:
                    case "end":
                      return c.stop();
                  }
              }, i);
            }),
          );
          function n(i, a, o) {
            return r.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: "_getCacheKey",
        value: function (n) {
          var i = nt._getStorageKey(this._getSdkKey(), n);
          return "".concat(nt.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(i);
        },
      },
      {
        key: "_isCachedResultValidFor204",
        value: function (n, i) {
          return !1;
        },
      },
      {
        key: "setDataLegacy",
        value: function (n, i) {
          xb(t, "setData", this)([n, i]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = zn({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(nt.DataAdapterCore);
function Sl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sl(Object(r), !0).forEach(function (n) {
          k(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Sl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Rb(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Pb(e)) || t) {
      r && (e = r);
      var n = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (c) {
          throw c;
        },
        f: i,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a,
    o = !0,
    u = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var c = r.next();
      return ((o = c.done), c);
    },
    e: function (c) {
      ((u = !0), (a = c));
    },
    f: function () {
      try {
        o || r.return == null || r.return();
      } finally {
        if (u) throw a;
      }
    },
  };
}
function Pb(e, t) {
  if (e) {
    if (typeof e == "string") return El(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? El(e, t)
          : void 0
    );
  }
}
function El(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Fo = "LocalOverride:Recognized",
  Ab = "STATSIG_OVERRIDES",
  kl = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Er = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  He = function (t, r) {
    return r + ":" + t;
  },
  jb = (function () {
    function e(t) {
      (fe(this, e),
        (this._overrides = Er()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return ve(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Er();
          } catch {
            return Er();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Er(), n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
          for (var o = 0, u = i; o < u.length; o++) {
            for (
              var s = u[o],
                c = 0,
                l = Object.entries((d = s.gates) !== null && d !== void 0 ? d : {});
              c < l.length;
              c++
            ) {
              var d,
                f = K(l[c], 2),
                p = f[0],
                h = f[1];
              r.gates[p] = h;
            }
            for (
              var v = 0, g = Object.entries((_ = s.configs) !== null && _ !== void 0 ? _ : {});
              v < g.length;
              v++
            ) {
              var _,
                y = K(g[v], 2),
                w = y[0],
                O = y[1];
              r.configs[w] = O;
            }
            for (
              var m = 0, S = Object.entries((x = s.layers) !== null && x !== void 0 ? x : {});
              m < S.length;
              m++
            ) {
              var x,
                D = K(S[m], 2),
                j = D[0],
                R = D[1];
              r.layers[j] = R;
            }
          }
          return r;
        },
      },
      {
        key: "initFromStoredOverrides",
        value: function () {
          var r = this.mergeOverrides(
            this._overrides,
            this.parseStoredOverrides(kl),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(kl);
          } catch {}
          for (var n = 0, i = Object.values(r); n < i.length; n++) {
            var a = i[n],
              o = new Set(Object.keys(a)),
              u = Rb(o),
              s;
            try {
              for (u.s(); !(s = u.n()).done; ) {
                var c = s.value,
                  l = Ge._DJB2(c);
                o.has(l) && delete a[l];
              }
            } catch (d) {
              u.e(d);
            } finally {
              u.f();
            }
          }
          this.applyOverrides(r);
        },
      },
      {
        key: "saveOverrides",
        value: function () {
          try {
            window.localStorage.setItem(this._localStorageKey, JSON.stringify(this._overrides));
          } catch {}
        },
      },
      {
        key: "getOverrides",
        value: function () {
          return this.mergeOverrides(this._overrides);
        },
      },
      {
        key: "applyOverrides",
        value: function (r) {
          var n = Ce(Ce({}, Er()), r);
          this._djb2Map.clear();
          for (var i = 0, a = Object.entries(n); i < a.length; i++)
            for (
              var o = K(a[i], 2), u = o[0], s = o[1], c = 0, l = Object.entries(s);
              c < l.length;
              c++
            ) {
              var d = K(l[c], 2),
                f = d[0],
                p = d[1];
              this._djb2Map.set(He(Ge._DJB2(f), u), p);
            }
          this._overrides = n;
        },
      },
      {
        key: "setOverrides",
        value: function (r) {
          (this.applyOverrides(r), this.saveOverrides());
        },
      },
      {
        key: "overrideGate",
        value: function (r, n) {
          ((this._overrides.gates[r] = n),
            this._djb2Map.set(He(Ge._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(He(Ge._DJB2(r), "gates")),
            this.saveOverrides());
        },
      },
      {
        key: "getGateOverride",
        value: function (r, n) {
          var i,
            a =
              (i = this._overrides.gates[r.name]) !== null && i !== void 0
                ? i
                : this._djb2Map.get(He(r.name, "gates"));
          return a == null
            ? null
            : Ce(Ce({}, r), {}, { value: a, details: Ce(Ce({}, r.details), {}, { reason: Fo }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(He(Ge._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(He(Ge._DJB2(r), "configs")),
            this.saveOverrides());
        },
      },
      {
        key: "getDynamicConfigOverride",
        value: function (r, n) {
          return this._getConfigOverride(r, this._overrides.configs);
        },
      },
      {
        key: "overrideExperiment",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(He(Ge._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(He(Ge._DJB2(r), "configs")),
            this.saveOverrides());
        },
      },
      {
        key: "getExperimentOverride",
        value: function (r, n) {
          return this._getConfigOverride(r, this._overrides.configs);
        },
      },
      {
        key: "overrideLayer",
        value: function (r, n) {
          ((this._overrides.layers[r] = n),
            this._djb2Map.set(He(Ge._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(He(Ge._DJB2(r), "layers")),
            this.saveOverrides());
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = Er();
          try {
            window.localStorage.removeItem(this._localStorageKey);
          } catch {}
        },
      },
      {
        key: "getLayerOverride",
        value: function (r, n) {
          var i,
            a =
              (i = this._overrides.layers[r.name]) !== null && i !== void 0
                ? i
                : this._djb2Map.get(He(r.name, "layers"));
          return a == null
            ? null
            : Ce(
                Ce({}, r),
                {},
                {
                  __value: a,
                  get: Ge._makeTypedGet(r.name, a),
                  details: Ce(Ce({}, r.details), {}, { reason: Fo }),
                },
              );
        },
      },
      {
        key: "_getConfigOverride",
        value: function (r, n) {
          var i,
            a =
              (i = n[r.name]) !== null && i !== void 0
                ? i
                : this._djb2Map.get(He(r.name, "configs"));
          return a == null
            ? null
            : Ce(
                Ce({}, r),
                {},
                {
                  value: a,
                  get: Ge._makeTypedGet(r.name, a),
                  details: Ce(Ce({}, r.details), {}, { reason: Fo }),
                },
              );
        },
      },
    ]);
  })(),
  Ib = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function xl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Gt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xl(Object(r), !0).forEach(function (n) {
          k(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Cl = "client-default-key",
  Db = "https://xp.atlassian.com/v1/rgstr",
  Tb = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        i = n === void 0 ? Ab : n,
        a = r.overrideAdapter;
      (fe(this, e),
        k(this, "initPromise", null),
        k(this, "initCompleted", !1),
        k(this, "initWithDefaults", !1),
        k(this, "hasCheckGateErrorOccurred", !1),
        k(this, "hasGetExperimentErrorOccurred", !1),
        k(this, "hasGetExperimentValueErrorOccurred", !1),
        k(this, "hasGetLayerErrorOccurred", !1),
        k(this, "hasGetLayerValueErrorOccurred", !1),
        k(this, "subscriptions", new ab()),
        k(this, "dataAdapter", new Cb()),
        k(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = a || new jb(i)));
    }
    return ve(e, [
      {
        key: "initialize",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o) {
              var u = this,
                s,
                c;
              return N.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = zi(i)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          Nn(s, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          d.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (c = performance.now()),
                          (this.initOptions = s),
                          (this.initPromise = this.init(s, a, o)
                            .then(function () {
                              ((u.initCompleted = !0), (u.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var f = performance.now(),
                                p = f - c;
                              u.fireClientEvent(c, p, "initialize", u.initCompleted, s.apiKey);
                            })),
                          d.abrupt("return", this.initPromise)
                        );
                      case 8:
                      case "end":
                        return d.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initializeWithProvider",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o, u) {
              var s = this,
                c,
                l;
              return N.wrap(
                function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        if (((c = zi(i)), !this.initPromise)) {
                          f.next = 4;
                          break;
                        }
                        return (
                          Nn(c, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          f.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (l = performance.now()),
                          (this.initOptions = c),
                          (this.provider = a),
                          this.provider.setClientVersion(Ir),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(c, a, o, u)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var p = performance.now(),
                                h = p - l;
                              s.fireClientEvent(
                                l,
                                h,
                                "initializeWithProvider",
                                s.initCompleted,
                                a.getApiKey ? a.getApiKey() : void 0,
                              );
                            })),
                          f.abrupt("return", this.initPromise)
                        );
                      case 11:
                      case "end":
                        return f.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, i, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "applyUpdateCallback",
        value: function (r) {
          try {
            (this.initCompleted || this.initWithDefaults) &&
              (this.assertInitialized(this.statsigClient),
              this.dataAdapter.setBootstrapData(r.experimentValues),
              this.dataAdapter.setData(JSON.stringify(r.experimentValues)),
              this.statsigValuesUpdated());
          } catch (n) {
            console.warn("Error when attempting to apply update", n);
          }
        },
      },
      {
        key: "fireClientEvent",
        value: function (r, n, i, a) {
          var o,
            u = this,
            s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
          (o = this.initOptions.analyticsWebClient) === null ||
            o === void 0 ||
            o
              .then(function (c) {
                var l = Gt(
                  {
                    targetApp: u.initOptions.targetApp,
                    clientVersion: Ir,
                    success: a,
                    startTime: r,
                    totalTime: n,
                  },
                  s && { apiKey: s },
                );
                c.sendOperationalEvent({
                  action: i,
                  actionSubject: "featureGatesClient",
                  attributes: l,
                  tags: ["measurement"],
                  source: "@atlaskit/feature-gate-js-client",
                });
              })
              .catch(function (c) {
                u.initOptions.environment !== Qn.Production &&
                  console.error("Analytics web client promise did not resolve", c);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o) {
              var u = this,
                s,
                c,
                l,
                d = arguments;
              return N.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (
                          ((s = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (c = zi(i)),
                          !this.initPromise)
                        ) {
                          p.next = 5;
                          break;
                        }
                        return (
                          Nn(c, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          p.abrupt("return", this.initPromise)
                        );
                      case 5:
                        return (
                          Object.prototype.hasOwnProperty.call(s, "has_updates") ||
                            (s.has_updates = !0),
                          (l = performance.now()),
                          (this.initOptions = c),
                          (this.initPromise = this.initFromValues(c, a, o, s)
                            .then(function () {
                              ((u.initCompleted = !0), (u.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var h = performance.now(),
                                v = h - l;
                              u.fireClientEvent(l, v, "initializeFromValues", u.initCompleted);
                            })),
                          p.abrupt("return", this.initPromise)
                        );
                      case 10:
                      case "end":
                        return p.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "assertInitialized",
        value: function (r) {
          if (!r) throw new Error("Client must be initialized before using this method");
        },
      },
      {
        key: "updateUser",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o) {
              var u, s;
              return N.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (u = zi(i)),
                          (s = function () {
                            return Lo.fetchExperimentValues(u, a, o).then(function (f) {
                              var p = f.experimentValues,
                                h = f.customAttributes;
                              return { experimentValues: p, customAttributesFromFetch: h };
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(s, a, o)
                        );
                      case 5:
                      case "end":
                        return l.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserWithProvider",
        value: (function () {
          var t = de(
            N.mark(function n(i, a) {
              var o = this;
              return N.wrap(
                function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        if ((this.assertInitialized(this.statsigClient), this.provider)) {
                          s.next = 3;
                          break;
                        }
                        throw new Error(
                          "Cannot update user using provider as the client was not initialised with a provider",
                        );
                      case 3:
                        return ((s.next = 5), this.provider.setProfile(this.initOptions, i, a));
                      case 5:
                        return (
                          (s.next = 7),
                          this.updateUserUsingInitializeValuesProducer(
                            function () {
                              return o.provider.getExperimentValues();
                            },
                            i,
                            a,
                          )
                        );
                      case 7:
                      case "end":
                        return s.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserWithValues",
        value: (function () {
          var t = de(
            N.mark(function n(i, a) {
              var o,
                u,
                s = arguments;
              return N.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          (o = s.length > 2 && s[2] !== void 0 ? s[2] : {}),
                          this.assertInitialized(this.statsigClient),
                          (u = function () {
                            return Promise.resolve({
                              experimentValues: o,
                              customAttributesFromFetch: a,
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(u, i, a)
                        );
                      case 5:
                      case "end":
                        return l.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initializeCalled",
        value: function () {
          return this.initPromise != null;
        },
      },
      {
        key: "initializeCompleted",
        value: function () {
          return this.initCompleted;
        },
      },
      {
        key: "waitUntilInitializeCompleted",
        value: (function () {
          var t = de(
            N.mark(function n() {
              return N.wrap(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (this.initPromise) {
                          a.next = 2;
                          break;
                        }
                        throw new Error(
                          "The client must be initialized before you can wait until initialized.",
                        );
                      case 2:
                        if (!this.initCompleted) {
                          a.next = 4;
                          break;
                        }
                        return a.abrupt("return");
                      case 4:
                        return ((a.next = 6), this.initPromise);
                      case 6:
                      case "end":
                        return a.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r() {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "checkGate",
        value: function (r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          try {
            this.assertInitialized(this.statsigClient);
            var i = n.fireGateExposure,
              a = i === void 0 ? !0 : i;
            return this.statsigClient.checkGate(r, { disableExposureLog: !a });
          } catch (o) {
            return (
              this.hasCheckGateErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred checking the feature gate. Only the first occurrence of this error is logged.",
                  gateName: r,
                  error: o,
                }),
                (this.hasCheckGateErrorOccurred = !0)),
              !1
            );
          }
        },
      },
      {
        key: "isGateExist",
        value: function (r) {
          try {
            this.assertInitialized(this.statsigClient);
            var n = this.statsigClient.getFeatureGate(r, { disableExposureLog: !0 });
            return !n.details.reason.includes("Unrecognized");
          } catch (i) {
            return (
              console.error("Error occurred when trying to check FeatureGate: ".concat(i)),
              !0
            );
          }
        },
      },
      {
        key: "isExperimentExist",
        value: function (r) {
          try {
            this.assertInitialized(this.statsigClient);
            var n = this.statsigClient.getExperiment(r, { disableExposureLog: !0 });
            return !n.details.reason.includes("Unrecognized");
          } catch (i) {
            return (
              console.error("Error occurred when trying to check Experiment: ".concat(i)),
              !0
            );
          }
        },
      },
      {
        key: "manuallyLogGateExposure",
        value: function (r) {
          (this.assertInitialized(this.statsigClient), this.statsigClient.checkGate(r));
        },
      },
      {
        key: "getExperiment",
        value: function (r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          try {
            this.assertInitialized(this.statsigClient);
            var i = n.fireExperimentExposure,
              a = i === void 0 ? !0 : i;
            return bl.fromExperiment(
              this.statsigClient.getExperiment(r, { disableExposureLog: !a }),
            );
          } catch (o) {
            return (
              this.hasGetExperimentErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the experiment. Only the first occurrence of this error is logged.",
                  experimentName: r,
                  error: o,
                }),
                (this.hasGetExperimentErrorOccurred = !0)),
              new bl(r, {}, "", { time: Date.now(), reason: Us.Error })
            );
          }
        },
      },
      {
        key: "getExperimentValue",
        value: function (r, n, i) {
          var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            o = this.getExperiment(r, a);
          try {
            var u = a.typeGuard;
            return o.get(n, i, u);
          } catch (s) {
            return (
              this.hasGetExperimentValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the experiment value. Only the first occurrence of this error is logged.",
                  experimentName: r,
                  defaultValue: i,
                  options: a,
                  error: s,
                }),
                (this.hasGetExperimentValueErrorOccurred = !0)),
              i
            );
          }
        },
      },
      {
        key: "manuallyLogExperimentExposure",
        value: function (r) {
          (this.assertInitialized(this.statsigClient), this.statsigClient.getExperiment(r));
        },
      },
      {
        key: "manuallyLogLayerExposure",
        value: function (r, n) {
          var i;
          (this.assertInitialized(this.statsigClient),
            (i = this.statsigClient.getLayer(r)) === null || i === void 0 || i.get(n));
        },
      },
      {
        key: "shutdownStatsig",
        value: function () {
          (this.assertInitialized(this.statsigClient), this.statsigClient.shutdown());
        },
      },
      {
        key: "overrideGate",
        value: function (r, n) {
          if ((this.overrideAdapter.overrideGate(r, n), this.user)) {
            var i;
            (i = this.statsigClient) === null ||
              i === void 0 ||
              i.updateUserSync(this.user, { disableBackgroundCacheRefresh: !0 });
          }
          this.statsigValuesUpdated();
        },
      },
      {
        key: "clearGateOverride",
        value: function (r) {
          (this.overrideAdapter.removeGateOverride(r), this.statsigValuesUpdated());
        },
      },
      {
        key: "overrideConfig",
        value: function (r, n) {
          (this.overrideAdapter.overrideDynamicConfig(r, n), this.statsigValuesUpdated());
        },
      },
      {
        key: "clearConfigOverride",
        value: function (r) {
          (this.overrideAdapter.removeDynamicConfigOverride(r), this.statsigValuesUpdated());
        },
      },
      {
        key: "setOverrides",
        value: function (r) {
          (this.overrideAdapter.setOverrides(r), this.statsigValuesUpdated());
        },
      },
      {
        key: "getOverrides",
        value: function () {
          return this.overrideAdapter.getOverrides();
        },
      },
      {
        key: "clearAllOverrides",
        value: function () {
          (this.overrideAdapter.removeAllOverrides(), this.statsigValuesUpdated());
        },
      },
      {
        key: "isCurrentUser",
        value: function (r, n) {
          return Nn(this.currentIdentifiers, r) && Nn(this.currentAttributes, n);
        },
      },
      {
        key: "onGateUpdated",
        value: function (r, n) {
          var i = this,
            a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            o = function (s) {
              var c = a.fireGateExposure,
                l = c === void 0 ? !0 : c;
              l && i.manuallyLogGateExposure(r);
              try {
                n(s);
              } catch (d) {
                console.warn(
                  "Error calling callback for gate ".concat(r, " with value ").concat(s),
                  d,
                );
              }
            };
          return this.subscriptions.onGateUpdated(r, o, this.checkGate.bind(this), a);
        },
      },
      {
        key: "onExperimentValueUpdated",
        value: function (r, n, i, a) {
          var o = this,
            u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {},
            s = function (l) {
              var d = u.fireExperimentExposure,
                f = d === void 0 ? !0 : d;
              f && o.manuallyLogExperimentExposure(r);
              try {
                a(l);
              } catch (p) {
                console.warn(
                  "Error calling callback for experiment ".concat(r, " with value ").concat(l),
                  p,
                );
              }
            };
          return this.subscriptions.onExperimentValueUpdated(
            r,
            n,
            i,
            s,
            this.getExperimentValue.bind(this),
            u,
          );
        },
      },
      {
        key: "onAnyUpdated",
        value: function (r) {
          return this.subscriptions.onAnyUpdated(r);
        },
      },
      {
        key: "init",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o) {
              var u, s, c, l, d, f, p, h;
              return N.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (u = Gt({}, i)),
                          (g.prev = 1),
                          (l = Lo.fetchClientSdk(i).then(function (_) {
                            return (u.sdkKey = _.clientSdkKey);
                          })),
                          (d = Lo.fetchExperimentValues(i, a, o)),
                          (g.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((f = g.sent),
                          (p = K(f, 2)),
                          (h = p[1]),
                          (s = h.experimentValues),
                          (c = h.customAttributes),
                          (g.next = 20));
                        break;
                      case 13:
                        return (
                          (g.prev = 13),
                          (g.t0 = g.catch(1)),
                          g.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to fetch the Feature Gates client values, error: ".concat(
                                g.t0 === null || g.t0 === void 0 ? void 0 : g.t0.message,
                              ),
                            ),
                          console.warn("Initialising Statsig client without values"),
                          (g.next = 19),
                          this.initFromValues(u, a, o)
                        );
                      case 19:
                        throw g.t0;
                      case 20:
                        return g.abrupt("return", this.initFromValues(u, a, c, s));
                      case 21:
                      case "end":
                        return g.stop();
                    }
                },
                n,
                this,
                [[1, 13]],
              );
            }),
          );
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initWithProvider",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o, u) {
              var s, c, l, d, f, p, h, v;
              return N.wrap(
                function (_) {
                  for (;;)
                    switch ((_.prev = _.next)) {
                      case 0:
                        return (
                          (s = Gt(Gt({}, i), {}, { disableCurrentPageLogging: !0 })),
                          (_.prev = 1),
                          (_.next = 4),
                          a.setProfile(i, o, u)
                        );
                      case 4:
                        return (
                          (d = a.getClientSdkKey().then(function (y) {
                            return (s.sdkKey = y);
                          })),
                          (f = a.getExperimentValues()),
                          (_.next = 8),
                          Promise.all([d, f])
                        );
                      case 8:
                        ((p = _.sent),
                          (h = K(p, 2)),
                          (v = h[1]),
                          (c = v.experimentValues),
                          (l = v.customAttributesFromFetch),
                          (_.next = 22));
                        break;
                      case 15:
                        return (
                          (_.prev = 15),
                          (_.t0 = _.catch(1)),
                          _.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to fetch the Feature Gates client values, error: ".concat(
                                _.t0 === null || _.t0 === void 0 ? void 0 : _.t0.message,
                              ),
                            ),
                          console.warn("Initialising Statsig client without values"),
                          (_.next = 21),
                          this.initFromValues(s, o, u)
                        );
                      case 21:
                        throw _.t0;
                      case 22:
                        return _.abrupt("return", this.initFromValues(s, o, l, c));
                      case 23:
                      case "end":
                        return _.stop();
                    }
                },
                n,
                this,
                [[1, 15]],
              );
            }),
          );
          function r(n, i, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initFromValues",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o) {
              var u,
                s,
                c,
                l,
                d,
                f,
                p,
                h = arguments;
              return N.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = h.length > 3 && h[3] !== void 0 ? h[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = a),
                          (this.currentAttributes = o),
                          (c = cb(i)),
                          c.sdkKey || (c.sdkKey = Cl),
                          ((u = c.networkConfig) !== null && u !== void 0 && u.logEventUrl) ||
                            (c.networkConfig = Gt(
                              Gt({}, c.networkConfig),
                              {},
                              { logEventUrl: Db },
                            )),
                          c.perimeter === fi.FEDRAMP_MODERATE && (c.disableLogging = !0),
                          (l = c.sdkKey),
                          (d = c.environment),
                          c.updateUserCompletionCallback,
                          c.perimeter,
                          (f = ne(c, Ib)),
                          (this.user = _l(a, o)),
                          (p = Gt(
                            Gt({}, f),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: nt.LogEventCompressionMode.Forced,
                            },
                          )),
                          a.stableId
                            ? nt.StableID.setOverride(a.stableId, l)
                            : (p.disableStableID = !0),
                          (g.prev = 12),
                          (this.statsigClient = new nt.StatsigClient(l, this.user, p)),
                          this.dataAdapter.setBootstrapData(s),
                          (g.next = 17),
                          this.statsigClient.initializeAsync()
                        );
                      case 17:
                        g.next = 29;
                        break;
                      case 19:
                        return (
                          (g.prev = 19),
                          (g.t0 = g.catch(12)),
                          g.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to initialise the Statsig client, error: ".concat(
                                g.t0 === null || g.t0 === void 0 ? void 0 : g.t0.message,
                              ),
                            ),
                          console.warn(
                            "Initialising Statsig client with default sdk key and without values",
                          ),
                          (this.statsigClient = new nt.StatsigClient(Cl, this.user, p)),
                          this.dataAdapter.setBootstrapData(),
                          (g.next = 27),
                          this.statsigClient.initializeAsync()
                        );
                      case 27:
                        throw ((this.initWithDefaults = !0), g.t0);
                      case 29:
                      case "end":
                        return g.stop();
                    }
                },
                n,
                this,
                [[12, 19]],
              );
            }),
          );
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserUsingInitializeValuesProducer",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o) {
              var u = this,
                s,
                c,
                l;
              return N.wrap(
                function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        if ((this.assertInitialized(this.statsigClient), this.initPromise)) {
                          f.next = 3;
                          break;
                        }
                        throw new Error(
                          "The client must be initialized before you can update the user.",
                        );
                      case 3:
                        if (!this.isCurrentUser(a, o)) {
                          f.next = 5;
                          break;
                        }
                        return f.abrupt("return", this.initPromise);
                      case 5:
                        return (
                          (s = this.initPromise),
                          (f.prev = 6),
                          (f.next = 9),
                          this.initPromise
                        );
                      case 9:
                        f.next = 13;
                        break;
                      case 11:
                        ((f.prev = 11), (f.t0 = f.catch(6)));
                      case 13:
                        return (
                          (c = i()),
                          (l = this.updateStatsigClientUser(c, a, o)),
                          (this.initPromise = l.catch(
                            de(
                              N.mark(function p() {
                                return N.wrap(function (v) {
                                  for (;;)
                                    switch ((v.prev = v.next)) {
                                      case 0:
                                        if (((u.initPromise = s), !u.provider)) {
                                          v.next = 4;
                                          break;
                                        }
                                        return (
                                          (v.next = 4),
                                          u.provider.setProfile(
                                            u.initOptions,
                                            u.currentIdentifiers,
                                            u.currentAttributes,
                                          )
                                        );
                                      case 4:
                                      case "end":
                                        return v.stop();
                                    }
                                }, p);
                              }),
                            ),
                          )),
                          f.abrupt("return", l)
                        );
                      case 17:
                      case "end":
                        return f.stop();
                    }
                },
                n,
                this,
                [[6, 11]],
              );
            }),
          );
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateStatsigClientUser",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o) {
              var u, s, c, l, d, f, p, h, v;
              return N.wrap(
                function (_) {
                  for (;;)
                    switch ((_.prev = _.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (_.prev = 1),
                          (_.next = 4),
                          i
                        );
                      case 4:
                        ((c = _.sent), (l = _l(a, c.customAttributesFromFetch)), (_.next = 13));
                        break;
                      case 8:
                        throw (
                          (_.prev = 8),
                          (_.t0 = _.catch(1)),
                          (p = _.t0 instanceof Error ? _.t0.message : JSON.stringify(_.t0)),
                          (d = (f = this.initOptions).updateUserCompletionCallback) === null ||
                            d === void 0 ||
                            d.call(f, !1, p),
                          _.t0
                        );
                      case 13:
                        if (
                          ((h = !0),
                          (v = null),
                          (_.prev = 15),
                          this.dataAdapter.setBootstrapData(c.experimentValues),
                          (this.user = l),
                          !this.user)
                        ) {
                          _.next = 21;
                          break;
                        }
                        return ((_.next = 21), this.statsigClient.updateUserAsync(this.user));
                      case 21:
                        _.next = 27;
                        break;
                      case 23:
                        ((_.prev = 23), (_.t1 = _.catch(15)), (h = !1), (v = String(_.t1)));
                      case 27:
                        if (
                          ((u = this.initOptions) === null ||
                            u === void 0 ||
                            (s = u.updateUserCompletionCallback) === null ||
                            s === void 0 ||
                            s.call(u, h, v),
                          !h)
                        ) {
                          _.next = 34;
                          break;
                        }
                        ((this.currentIdentifiers = a),
                          (this.currentAttributes = o),
                          this.subscriptions.anyUpdated(),
                          (_.next = 35));
                        break;
                      case 34:
                        throw new Error("Failed to update user. An unexpected error occured.");
                      case 35:
                      case "end":
                        return _.stop();
                    }
                },
                n,
                this,
                [
                  [1, 8],
                  [15, 23],
                ],
              );
            }),
          );
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "getPackageVersion",
        value: function () {
          return Ir;
        },
      },
      {
        key: "getLayer",
        value: function (r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          try {
            this.assertInitialized(this.statsigClient);
            var i = n.fireLayerExposure,
              a = i === void 0 ? !0 : i;
            return yl.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !a }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              yl.fromLayer(nt._makeLayer(r, { reason: "Error" }, null))
            );
          }
        },
      },
      {
        key: "getLayerValue",
        value: function (r, n, i) {
          var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            o = this.getLayer(r, a);
          try {
            var u = a.typeGuard;
            return o.get(n, i, u);
          } catch (s) {
            return (
              this.hasGetLayerValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer value. Only the first occurrence of this error is logged.",
                  layerName: r,
                  defaultValue: i,
                  options: a,
                  error: s,
                }),
                (this.hasGetLayerValueErrorOccurred = !0)),
              i
            );
          }
        },
      },
    ]);
  })(),
  I,
  q = (function () {
    function e() {
      fe(this, e);
    }
    return ve(e, null, [
      {
        key: "isGateExists",
        value: function (r) {
          return this.client.isGateExist(r);
        },
      },
      {
        key: "isExperimentExists",
        value: function (r) {
          return this.client.isExperimentExist(r);
        },
      },
    ]);
  })();
I = q;
k(q, "client", new Tb());
k(q, "hasCheckGateErrorOccurred", !1);
k(q, "hasGetExperimentValueErrorOccurred", !1);
k(q, "checkGate", function (e, t) {
  try {
    if (
      typeof window < "u" &&
      window.__CRITERION__ &&
      typeof window.__CRITERION__.getFeatureFlagOverride == "function"
    ) {
      var r = window.__CRITERION__.getFeatureFlagOverride(e);
      if (r !== void 0) return r;
    }
  } catch (n) {
    I.hasCheckGateErrorOccurred ||
      (console.warn({
        msg: "An error has occurred checking the feature gate from criterion override. Only the first occurrence of this error is logged.",
        gateName: e,
        error: n,
      }),
      (I.hasCheckGateErrorOccurred = !0));
  }
  return I.client.checkGate(e, t);
});
k(q, "getExperimentValue", function (e, t, r, n) {
  try {
    if (
      typeof window < "u" &&
      window.__CRITERION__ &&
      typeof window.__CRITERION__.getExperimentValueOverride == "function"
    ) {
      var i = window.__CRITERION__.getExperimentValueOverride(e, t);
      if (i != null) return i;
    }
  } catch (a) {
    return (
      I.hasGetExperimentValueErrorOccurred ||
        (console.warn({
          msg: "An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.",
          experimentName: e,
          defaultValue: r,
          options: n,
          error: a,
        }),
        (I.hasGetExperimentValueErrorOccurred = !0)),
      r
    );
  }
  return I.client.getExperimentValue(e, t, r, n);
});
k(q, "initializeCalled", I.client.initializeCalled.bind(I.client));
k(q, "initializeCompleted", I.client.initializeCompleted.bind(I.client));
k(q, "waitUntilInitializeCompleted", I.client.waitUntilInitializeCompleted.bind(I.client));
k(q, "initialize", I.client.initialize.bind(I.client));
k(q, "initializeWithProvider", I.client.initializeWithProvider.bind(I.client));
k(q, "initializeFromValues", I.client.initializeFromValues.bind(I.client));
k(q, "manuallyLogGateExposure", I.client.manuallyLogGateExposure.bind(I.client));
k(q, "getExperiment", I.client.getExperiment.bind(I.client));
k(q, "manuallyLogExperimentExposure", I.client.manuallyLogExperimentExposure.bind(I.client));
k(q, "manuallyLogLayerExposure", I.client.manuallyLogLayerExposure.bind(I.client));
k(q, "shutdownStatsig", I.client.shutdownStatsig.bind(I.client));
k(q, "overrideGate", I.client.overrideGate.bind(I.client));
k(q, "clearGateOverride", I.client.clearGateOverride.bind(I.client));
k(q, "overrideConfig", I.client.overrideConfig.bind(I.client));
k(q, "clearConfigOverride", I.client.clearConfigOverride.bind(I.client));
k(q, "setOverrides", I.client.setOverrides.bind(I.client));
k(q, "getOverrides", I.client.getOverrides.bind(I.client));
k(q, "clearAllOverrides", I.client.clearAllOverrides.bind(I.client));
k(q, "isCurrentUser", I.client.isCurrentUser.bind(I.client));
k(q, "onGateUpdated", I.client.onGateUpdated.bind(I.client));
k(q, "onExperimentValueUpdated", I.client.onExperimentValueUpdated.bind(I.client));
k(q, "onAnyUpdated", I.client.onAnyUpdated.bind(I.client));
k(q, "updateUser", I.client.updateUser.bind(I.client));
k(q, "updateUserWithProvider", I.client.updateUserWithProvider.bind(I.client));
k(q, "updateUserWithValues", I.client.updateUserWithValues.bind(I.client));
k(q, "getPackageVersion", I.client.getPackageVersion.bind(I.client));
k(q, "getLayer", I.client.getLayer.bind(I.client));
k(q, "getLayerValue", I.client.getLayerValue.bind(I.client));
var ds = q;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = q;
  else {
    var Ui, Bo;
    ds = window.__FEATUREGATES_JS__;
    var Rl =
      ((Ui = ds) === null || Ui === void 0 || (Bo = Ui.getPackageVersion) === null || Bo === void 0
        ? void 0
        : Bo.call(Ui)) || "4.10.0 or earlier";
    if (Rl !== Ir) {
      var Mb = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(Rl, " when module version ")
        .concat(Ir, " was loading.");
      console.warn(Mb);
    }
  }
var kr,
  xr,
  Lb =
    (globalThis == null ||
    (kr = globalThis.process) === null ||
    kr === void 0 ||
    (kr = kr.env) === null ||
    kr === void 0
      ? void 0
      : kr.JEST_WORKER_ID) !== void 0,
  Fb =
    !Lb &&
    (globalThis == null ||
    (xr = globalThis.process) === null ||
    xr === void 0 ||
    (xr = xr.env) === null ||
    xr === void 0
      ? void 0
      : xr.NODE_ENV) !== "production",
  Bb = function () {
    var t;
    Fb && (t = console).debug.apply(t, arguments);
  },
  qs = {},
  Nb = "@atlaskit/platform-feature-flags",
  ri = "__PLATFORM_FEATURE_FLAGS__",
  Sv = typeof process < "u" && typeof qs < "u",
  zb = Sv ? qs.ENABLE_PLATFORM_FF === "true" : !1,
  Ub = Sv ? qs.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  qb = zb || Ub,
  $b = { booleanResolver: void 0 },
  ni = typeof window < "u" ? window : globalThis;
ni[ri] = ni[ri] || $b;
function Vb(e) {
  if (qb)
    return (
      Bb(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        Nb,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = ni[ri]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = ni[ri]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return ds.checkGate(e);
    var i = (n = ni[ri]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof i != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : i;
  } catch {
    return !1;
  }
}
function Mr(e) {
  return Vb(e);
}
var Gb = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Hb = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Wb = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  Pl = b.memo(function (t) {
    var r = t,
      n = r.color,
      i = n === void 0 ? "currentColor" : n,
      a = r.testId,
      o = r.label,
      u = r.LEGACY_primaryColor,
      s = r.LEGACY_secondaryColor,
      c = r.LEGACY_size,
      l = r.LEGACY_fallbackIcon,
      d = r.dangerouslySetGlyph,
      f = r.shouldScale,
      p = r.LEGACY_margin,
      h = r.spacing,
      v = h === void 0 ? "none" : h,
      g = r.name,
      _ = d ? { __html: d } : void 0;
    if (l && !Mr("platform-visual-refresh-icons"))
      return b.createElement(l, {
        primaryColor: u ?? i,
        secondaryColor: s,
        size: c,
        label: o,
        testId: a,
        UNSAFE_margin: p,
      });
    var y = "medium";
    if ("size" in t && t.size !== void 0) {
      if (typeof t.size == "string") y = t.size === "small" || t.size === "medium" ? t.size : y;
      else if (g) {
        var w = t.size(g);
        y = w === "small" || w === "medium" ? w : y;
      }
    }
    var O = 16,
      m = Wb[y][v],
      S = O + 2 * m;
    return b.createElement(
      "span",
      {
        "data-testid": a,
        role: o ? "img" : void 0,
        "aria-label": o || void 0,
        "aria-hidden": o ? void 0 : !0,
        style: { color: i },
        className: C([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          f && "_1bsb1kw7 _4t3i1kw7",
          y === "small" && "_vwz4utpp",
        ]),
      },
      b.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - m, " ")
          .concat(0 - m, " ")
          .concat(S, " ")
          .concat(S),
        role: "presentation",
        dangerouslySetInnerHTML: _,
        className: C([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          f ? "_1bsb1kw7 _4t3i1kw7" : y === "small" ? Hb[v] : Gb[v],
        ]),
      }),
    );
  });
const Kb = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Pl, default: Pl }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  xa = Fs(Kb);
var Al;
function Jb() {
  if (Al) return Tn;
  ((Al = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.default = void 0));
  var e = r(ut()),
    t = r(xa);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const n = (i) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ChevronLeftIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" d="m9.97 1.47-6 6a.75.75 0 0 0-.052 1.004l.052.056 6 6 1.06-1.06L5.56 8l5.47-5.47z"/>',
        },
        i,
      ),
    );
  return ((n.displayName = "ChevronLeftIcon"), (Tn.default = n), Tn);
}
var Un = {};
function jl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Il(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jl(Object(r), !0).forEach(function (n) {
          k(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Yb = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  Dl = b.memo(function (t) {
    var r = t,
      n = r.glyph,
      i = r.dangerouslySetGlyph,
      a = r.primaryColor,
      o = a === void 0 ? "currentColor" : a,
      u = r.secondaryColor,
      s = r.size,
      c = r.testId,
      l = r.label,
      d = r.width,
      f = r.height,
      p = r.UNSAFE_margin,
      h = i
        ? { dangerouslySetInnerHTML: { __html: i } }
        : { children: n ? b.createElement(n, { role: "presentation" }) : null },
      v = d && f ? { width: d + "px", height: f + "px" } : null;
    return b.createElement(
      "span",
      te(
        {
          "data-testid": c,
          "data-vc": "icon-".concat(c),
          role: l ? "img" : void 0,
          "aria-label": l || void 0,
          "aria-hidden": l ? void 0 : !0,
          style: Il(
            Il({}, v),
            {},
            { "--icon-primary-color": o, "--icon-secondary-color": u, margin: p },
          ),
        },
        h,
        {
          className: C([
            "_1e0c1o8l _1o9zidpf _vyfuvuon _vwz4kb7n _1szv15vq _1tly15vq _rzyw1osq _17jb1osq _1ksvoz0e _3se1x1jp _re2rglyw _1veoyfq0 _1kg81r31",
            "_jcxd1r8n _gq0g1onz _1trkwc43",
            o === u && "_18hbwc43",
            u === "transparent" && "_4fyi1j28",
            s && Yb[s],
          ]),
        },
      ),
    );
  });
const Xb = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Dl, default: Dl }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Ev = Fs(Xb);
var Tl;
function Zb() {
  if (Tl) return Un;
  ((Tl = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.default = void 0));
  var e = r(ut()),
    t = Ev;
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const n = (i) =>
    e.default.createElement(
      t.Icon,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" fill-rule="evenodd" d="m9.005 10.995 4.593-4.593a.99.99 0 1 1 1.4 1.4l-3.9 3.9 3.9 3.9a.99.99 0 0 1-1.4 1.4L9.005 12.41a1 1 0 0 1 0-1.414"/></svg>',
        },
        i,
      ),
    );
  return ((n.displayName = "ChevronLeftLargeIcon"), (Un.default = n), Un);
}
var Ml;
function Qb() {
  if (Ml) return Dn;
  ((Ml = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.default = void 0));
  var e = n(ut()),
    t = n(Jb()),
    r = n(Zb());
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const i = (a) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronLeftIcon", LEGACY_fallbackIcon: r.default }, a),
    );
  return ((i.displayName = "ChevronLeftIconMigration"), (Dn.default = i), Dn);
}
var ey = Qb();
const ty = Yt(ey);
var qn = {},
  $n = {},
  Ll;
function ry() {
  if (Ll) return $n;
  ((Ll = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0));
  var e = r(ut()),
    t = r(xa);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const n = (i) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ChevronRightIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" d="m6.03 1.47 6 6a.75.75 0 0 1 .052 1.004l-.052.056-6 6-1.06-1.06L10.44 8 4.97 2.53z"/>',
        },
        i,
      ),
    );
  return ((n.displayName = "ChevronRightIcon"), ($n.default = n), $n);
}
var Vn = {},
  Fl;
function ny() {
  if (Fl) return Vn;
  ((Fl = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.default = void 0));
  var e = r(ut()),
    t = Ev;
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const n = (i) =>
    e.default.createElement(
      t.Icon,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" fill-rule="evenodd" d="M14.995 10.995a1 1 0 0 1 0 1.414l-4.593 4.593a.99.99 0 0 1-1.4-1.4l3.9-3.9-3.9-3.9a.99.99 0 0 1 1.4-1.4z"/></svg>',
        },
        i,
      ),
    );
  return ((n.displayName = "ChevronRightLargeIcon"), (Vn.default = n), Vn);
}
var Bl;
function iy() {
  if (Bl) return qn;
  ((Bl = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.default = void 0));
  var e = n(ut()),
    t = n(ry()),
    r = n(ny());
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const i = (a) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronRightIcon", LEGACY_fallbackIcon: r.default }, a),
    );
  return ((i.displayName = "ChevronRightIconMigration"), (qn.default = i), qn);
}
var ay = iy();
const oy = Yt(ay);
var $s = b.createContext("elevation.surface"),
  sy = function () {
    return b.useContext($s);
  };
$s.displayName = "SurfaceProvider";
var uy = [
    "as",
    "children",
    "backgroundColor",
    "padding",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "style",
    "testId",
    "xcss",
  ],
  cy = ["className"],
  ly = {
    "color.background.accent.lime.subtlest": "_bfhkm890",
    "color.background.accent.lime.subtlest.hovered": "_bfhkd4y8",
    "color.background.accent.lime.subtlest.pressed": "_bfhkkuup",
    "color.background.accent.lime.subtler": "_bfhkz2ec",
    "color.background.accent.lime.subtler.hovered": "_bfhk1gf0",
    "color.background.accent.lime.subtler.pressed": "_bfhk2kxc",
    "color.background.accent.lime.subtle": "_bfhkbq5w",
    "color.background.accent.lime.subtle.hovered": "_bfhkfoww",
    "color.background.accent.lime.subtle.pressed": "_bfhk1jbd",
    "color.background.accent.lime.bolder": "_bfhktde4",
    "color.background.accent.lime.bolder.hovered": "_bfhknzpa",
    "color.background.accent.lime.bolder.pressed": "_bfhkh0j0",
    "color.background.accent.red.subtlest": "_bfhk1vk5",
    "color.background.accent.red.subtlest.hovered": "_bfhk1i6i",
    "color.background.accent.red.subtlest.pressed": "_bfhknbir",
    "color.background.accent.red.subtler": "_bfhk1rtt",
    "color.background.accent.red.subtler.hovered": "_bfhkaffd",
    "color.background.accent.red.subtler.pressed": "_bfhk1j5a",
    "color.background.accent.red.subtle": "_bfhkkrt9",
    "color.background.accent.red.subtle.hovered": "_bfhk1sou",
    "color.background.accent.red.subtle.pressed": "_bfhk1fnn",
    "color.background.accent.red.bolder": "_bfhkuibq",
    "color.background.accent.red.bolder.hovered": "_bfhk100f",
    "color.background.accent.red.bolder.pressed": "_bfhk1cl6",
    "color.background.accent.orange.subtlest": "_bfhkf5uh",
    "color.background.accent.orange.subtlest.hovered": "_bfhk19yr",
    "color.background.accent.orange.subtlest.pressed": "_bfhkf90x",
    "color.background.accent.orange.subtler": "_bfhk165s",
    "color.background.accent.orange.subtler.hovered": "_bfhk1ei0",
    "color.background.accent.orange.subtler.pressed": "_bfhkdpo3",
    "color.background.accent.orange.subtle": "_bfhk1kkj",
    "color.background.accent.orange.subtle.hovered": "_bfhk9mfs",
    "color.background.accent.orange.subtle.pressed": "_bfhkaxpp",
    "color.background.accent.orange.bolder": "_bfhk1qg1",
    "color.background.accent.orange.bolder.hovered": "_bfhk12qo",
    "color.background.accent.orange.bolder.pressed": "_bfhk1fyq",
    "color.background.accent.yellow.subtlest": "_bfhkibhp",
    "color.background.accent.yellow.subtlest.hovered": "_bfhkaetg",
    "color.background.accent.yellow.subtlest.pressed": "_bfhk1o1l",
    "color.background.accent.yellow.subtler": "_bfhk1773",
    "color.background.accent.yellow.subtler.hovered": "_bfhk1uw7",
    "color.background.accent.yellow.subtler.pressed": "_bfhk1r9w",
    "color.background.accent.yellow.subtle": "_bfhk8y3s",
    "color.background.accent.yellow.subtle.hovered": "_bfhk819w",
    "color.background.accent.yellow.subtle.pressed": "_bfhk1jx0",
    "color.background.accent.yellow.bolder": "_bfhk1vop",
    "color.background.accent.yellow.bolder.hovered": "_bfhkkjqf",
    "color.background.accent.yellow.bolder.pressed": "_bfhk1okt",
    "color.background.accent.green.subtlest": "_bfhkn729",
    "color.background.accent.green.subtlest.hovered": "_bfhk3utz",
    "color.background.accent.green.subtlest.pressed": "_bfhkyfny",
    "color.background.accent.green.subtler": "_bfhk1wnw",
    "color.background.accent.green.subtler.hovered": "_bfhk1e2h",
    "color.background.accent.green.subtler.pressed": "_bfhkybhx",
    "color.background.accent.green.subtle": "_bfhk1rsu",
    "color.background.accent.green.subtle.hovered": "_bfhk12e3",
    "color.background.accent.green.subtle.pressed": "_bfhk1g86",
    "color.background.accent.green.bolder": "_bfhk1e5c",
    "color.background.accent.green.bolder.hovered": "_bfhka5yi",
    "color.background.accent.green.bolder.pressed": "_bfhk1j68",
    "color.background.accent.teal.subtlest": "_bfhk7xuz",
    "color.background.accent.teal.subtlest.hovered": "_bfhk108c",
    "color.background.accent.teal.subtlest.pressed": "_bfhk1cxp",
    "color.background.accent.teal.subtler": "_bfhk1a17",
    "color.background.accent.teal.subtler.hovered": "_bfhkkwwr",
    "color.background.accent.teal.subtler.pressed": "_bfhk1jb0",
    "color.background.accent.teal.subtle": "_bfhktdv8",
    "color.background.accent.teal.subtle.hovered": "_bfhkzh8h",
    "color.background.accent.teal.subtle.pressed": "_bfhk16zl",
    "color.background.accent.teal.bolder": "_bfhk2c8p",
    "color.background.accent.teal.bolder.hovered": "_bfhkl3ve",
    "color.background.accent.teal.bolder.pressed": "_bfhktor0",
    "color.background.accent.blue.subtlest": "_bfhk1s93",
    "color.background.accent.blue.subtlest.hovered": "_bfhkdaj9",
    "color.background.accent.blue.subtlest.pressed": "_bfhkxm0g",
    "color.background.accent.blue.subtler": "_bfhk1dy8",
    "color.background.accent.blue.subtler.hovered": "_bfhk815t",
    "color.background.accent.blue.subtler.pressed": "_bfhkrwxf",
    "color.background.accent.blue.subtle": "_bfhk115i",
    "color.background.accent.blue.subtle.hovered": "_bfhk9pr4",
    "color.background.accent.blue.subtle.pressed": "_bfhknpx7",
    "color.background.accent.blue.bolder": "_bfhk16e3",
    "color.background.accent.blue.bolder.hovered": "_bfhk1vbm",
    "color.background.accent.blue.bolder.pressed": "_bfhk1xwi",
    "color.background.accent.purple.subtlest": "_bfhkp2ly",
    "color.background.accent.purple.subtlest.hovered": "_bfhkkca2",
    "color.background.accent.purple.subtlest.pressed": "_bfhk1jbm",
    "color.background.accent.purple.subtler": "_bfhk1nm4",
    "color.background.accent.purple.subtler.hovered": "_bfhkattl",
    "color.background.accent.purple.subtler.pressed": "_bfhk3nfk",
    "color.background.accent.purple.subtle": "_bfhk18ah",
    "color.background.accent.purple.subtle.hovered": "_bfhk8bp1",
    "color.background.accent.purple.subtle.pressed": "_bfhk1cd2",
    "color.background.accent.purple.bolder": "_bfhkya33",
    "color.background.accent.purple.bolder.hovered": "_bfhk1af5",
    "color.background.accent.purple.bolder.pressed": "_bfhk6cze",
    "color.background.accent.magenta.subtlest": "_bfhk8tvm",
    "color.background.accent.magenta.subtlest.hovered": "_bfhkr3zd",
    "color.background.accent.magenta.subtlest.pressed": "_bfhk1ckf",
    "color.background.accent.magenta.subtler": "_bfhkv9ra",
    "color.background.accent.magenta.subtler.hovered": "_bfhk1axx",
    "color.background.accent.magenta.subtler.pressed": "_bfhk42ri",
    "color.background.accent.magenta.subtle": "_bfhk1mi6",
    "color.background.accent.magenta.subtle.hovered": "_bfhkrwyz",
    "color.background.accent.magenta.subtle.pressed": "_bfhk6c15",
    "color.background.accent.magenta.bolder": "_bfhkc3uk",
    "color.background.accent.magenta.bolder.hovered": "_bfhk1ok8",
    "color.background.accent.magenta.bolder.pressed": "_bfhkeawv",
    "color.background.accent.gray.subtlest": "_bfhkysee",
    "color.background.accent.gray.subtlest.hovered": "_bfhkwejn",
    "color.background.accent.gray.subtlest.pressed": "_bfhk18ut",
    "color.background.accent.gray.subtler": "_bfhk7qp0",
    "color.background.accent.gray.subtler.hovered": "_bfhk10ef",
    "color.background.accent.gray.subtler.pressed": "_bfhk1rk9",
    "color.background.accent.gray.subtle": "_bfhk18j9",
    "color.background.accent.gray.subtle.hovered": "_bfhk1nv3",
    "color.background.accent.gray.subtle.pressed": "_bfhkq9tj",
    "color.background.accent.gray.bolder": "_bfhk1i45",
    "color.background.accent.gray.bolder.hovered": "_bfhkbyip",
    "color.background.accent.gray.bolder.pressed": "_bfhk1van",
    "color.background.disabled": "_bfhkby5v",
    "color.background.input": "_bfhk1j9a",
    "color.background.input.hovered": "_bfhkl4ek",
    "color.background.input.pressed": "_bfhkr01l",
    "color.background.inverse.subtle": "_bfhk1vck",
    "color.background.inverse.subtle.hovered": "_bfhkmpja",
    "color.background.inverse.subtle.pressed": "_bfhk1gii",
    "color.background.neutral": "_bfhki8nm",
    "color.background.neutral.hovered": "_bfhkplhp",
    "color.background.neutral.pressed": "_bfhk1gdz",
    "color.background.neutral.subtle": "_bfhksm61",
    "color.background.neutral.subtle.hovered": "_bfhk1dpa",
    "color.background.neutral.subtle.pressed": "_bfhkfcek",
    "color.background.neutral.bold": "_bfhk1aqn",
    "color.background.neutral.bold.hovered": "_bfhk1ibz",
    "color.background.neutral.bold.pressed": "_bfhkof27",
    "color.background.selected": "_bfhk15s3",
    "color.background.selected.hovered": "_bfhkufnl",
    "color.background.selected.pressed": "_bfhknozp",
    "color.background.selected.bold": "_bfhkjmqp",
    "color.background.selected.bold.hovered": "_bfhk1q28",
    "color.background.selected.bold.pressed": "_bfhk12kk",
    "color.background.brand.subtlest": "_bfhk1gmr",
    "color.background.brand.subtlest.hovered": "_bfhk3v15",
    "color.background.brand.subtlest.pressed": "_bfhku02c",
    "color.background.brand.bold": "_bfhk1856",
    "color.background.brand.bold.hovered": "_bfhkhf2y",
    "color.background.brand.bold.pressed": "_bfhkg6ey",
    "color.background.brand.boldest": "_bfhk1o4i",
    "color.background.brand.boldest.hovered": "_bfhklefx",
    "color.background.brand.boldest.pressed": "_bfhk16k6",
    "color.background.danger": "_bfhk1gly",
    "color.background.danger.hovered": "_bfhk1yvi",
    "color.background.danger.pressed": "_bfhk1r4b",
    "color.background.danger.bold": "_bfhkybec",
    "color.background.danger.bold.hovered": "_bfhks9hg",
    "color.background.danger.bold.pressed": "_bfhk13a9",
    "color.background.warning": "_bfhk1917",
    "color.background.warning.hovered": "_bfhk19zu",
    "color.background.warning.pressed": "_bfhkzr32",
    "color.background.warning.bold": "_bfhk1kmu",
    "color.background.warning.bold.hovered": "_bfhk1spp",
    "color.background.warning.bold.pressed": "_bfhk4m4m",
    "color.background.success": "_bfhk1y9u",
    "color.background.success.hovered": "_bfhk1vfx",
    "color.background.success.pressed": "_bfhk1wl5",
    "color.background.success.bold": "_bfhkkcmj",
    "color.background.success.bold.hovered": "_bfhky7x8",
    "color.background.success.bold.pressed": "_bfhkwcbh",
    "color.background.discovery": "_bfhk6vm6",
    "color.background.discovery.hovered": "_bfhk12eq",
    "color.background.discovery.pressed": "_bfhk18vq",
    "color.background.discovery.bold": "_bfhku5tj",
    "color.background.discovery.bold.hovered": "_bfhkfqeg",
    "color.background.discovery.bold.pressed": "_bfhk1f1m",
    "color.background.information": "_bfhk19ip",
    "color.background.information.hovered": "_bfhk86z5",
    "color.background.information.pressed": "_bfhk1c1j",
    "color.background.information.bold": "_bfhkx4w0",
    "color.background.information.bold.hovered": "_bfhkq2ii",
    "color.background.information.bold.pressed": "_bfhkf89v",
    "color.blanket": "_bfhk1i5c",
    "color.blanket.selected": "_bfhk7wq0",
    "color.blanket.danger": "_bfhkrprw",
    "color.skeleton": "_bfhkizff",
    "color.skeleton.subtle": "_bfhkvkf5",
    "elevation.surface": "_bfhkvuon",
    "elevation.surface.hovered": "_bfhk19i6",
    "elevation.surface.pressed": "_bfhk13ro",
    "elevation.surface.overlay": "_bfhk1bhr",
    "elevation.surface.overlay.hovered": "_bfhk6o2t",
    "elevation.surface.overlay.pressed": "_bfhkm8nx",
    "elevation.surface.raised": "_bfhkhp5a",
    "elevation.surface.raised.hovered": "_bfhk116u",
    "elevation.surface.raised.pressed": "_bfhk14aj",
    "elevation.surface.sunken": "_bfhkhfxm",
    "utility.elevation.surface.current": "_bfhkchd4",
  },
  kv = {
    "elevation.surface": "_1q1lvuon",
    "elevation.surface.hovered": "_1q1l19i6",
    "elevation.surface.pressed": "_1q1l13ro",
    "elevation.surface.overlay": "_1q1l1bhr",
    "elevation.surface.overlay.hovered": "_1q1l6o2t",
    "elevation.surface.overlay.pressed": "_1q1lm8nx",
    "elevation.surface.raised": "_1q1lhp5a",
    "elevation.surface.raised.hovered": "_1q1l116u",
    "elevation.surface.raised.pressed": "_1q1l14aj",
    "elevation.surface.sunken": "_1q1lhfxm",
  },
  dy = {
    "space.0": "_1q51ze3t",
    "space.025": "_1q51v77o",
    "space.050": "_1q511b66",
    "space.075": "_1q5112x7",
    "space.100": "_1q51u2gc",
    "space.150": "_1q51utpp",
    "space.200": "_1q51pxbi",
    "space.250": "_1q51v47k",
    "space.300": "_1q511ejb",
    "space.400": "_1q51xy5q",
    "space.500": "_1q511jfw",
    "space.600": "_1q51oahv",
    "space.800": "_1q51xncg",
    "space.1000": "_1q511epz",
  },
  fy = {
    "space.0": "_85i5ze3t",
    "space.025": "_85i5v77o",
    "space.050": "_85i51b66",
    "space.075": "_85i512x7",
    "space.100": "_85i5u2gc",
    "space.150": "_85i5utpp",
    "space.200": "_85i5pxbi",
    "space.250": "_85i5v47k",
    "space.300": "_85i51ejb",
    "space.400": "_85i5xy5q",
    "space.500": "_85i51jfw",
    "space.600": "_85i5oahv",
    "space.800": "_85i5xncg",
    "space.1000": "_85i51epz",
  },
  vy = {
    "space.0": "_bozgze3t",
    "space.025": "_bozgv77o",
    "space.050": "_bozg1b66",
    "space.075": "_bozg12x7",
    "space.100": "_bozgu2gc",
    "space.150": "_bozgutpp",
    "space.200": "_bozgpxbi",
    "space.250": "_bozgv47k",
    "space.300": "_bozg1ejb",
    "space.400": "_bozgxy5q",
    "space.500": "_bozg1jfw",
    "space.600": "_bozgoahv",
    "space.800": "_bozgxncg",
    "space.1000": "_bozg1epz",
  },
  py = {
    "space.0": "_y4tize3t",
    "space.025": "_y4tiv77o",
    "space.050": "_y4ti1b66",
    "space.075": "_y4ti12x7",
    "space.100": "_y4tiu2gc",
    "space.150": "_y4tiutpp",
    "space.200": "_y4tipxbi",
    "space.250": "_y4tiv47k",
    "space.300": "_y4ti1ejb",
    "space.400": "_y4tixy5q",
    "space.500": "_y4ti1jfw",
    "space.600": "_y4tioahv",
    "space.800": "_y4tixncg",
    "space.1000": "_y4ti1epz",
  },
  Ca = b.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "div" : r,
      i = e.children,
      a = e.backgroundColor,
      o = e.padding,
      u = e.paddingBlock,
      s = u === void 0 ? o : u,
      c = e.paddingBlockStart,
      l = c === void 0 ? s : c,
      d = e.paddingBlockEnd,
      f = d === void 0 ? s : d,
      p = e.paddingInline,
      h = p === void 0 ? o : p,
      v = e.paddingInlineStart,
      g = v === void 0 ? h : v,
      _ = e.paddingInlineEnd,
      y = _ === void 0 ? h : _,
      w = e.style,
      O = e.testId,
      m = e.xcss,
      S = ne(e, uy);
    S.className;
    var x = ne(S, cy),
      D = b.createElement(
        n,
        te(
          {
            style: w,
            ref: t,
            className: C([
              "_19itglyw _vchhusvi _r06hglyw",
              a && ly[a],
              a && hy(a) && kv[a],
              l && dy[l],
              f && fy[f],
              g && vy[g],
              y && py[y],
              m,
            ]),
          },
          x,
          { "data-testid": O },
        ),
        i,
      );
    return a ? b.createElement($s.Provider, { value: a }, D) : D;
  });
function hy(e) {
  return e in kv;
}
const No = () =>
    new Error(`
 ██████╗ ██████╗ ███╗   ███╗██████╗ ██╗██╗     ███████╗██████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██║██║     ██╔════╝██╔══██╗
██║     ██║   ██║██╔████╔██║██████╔╝██║██║     █████╗  ██║  ██║
██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║██║     ██╔══╝  ██║  ██║
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║███████╗███████╗██████╔╝
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝╚═════╝

  @compiled/react

  Code was executed when it shouldn't have. To resolve make sure to:

  1. Set up Compiled.
  2. Configure importSources in your Compiled config to point to the module that exports the output of createStrictAPI().

  For more information visit https://compiledcssinjs.com/docs/installation and follow the instructions.
`),
  xv = (...e) => C(e);
function gy() {
  return {
    css() {
      throw No();
    },
    cssMap() {
      throw No();
    },
    cx: xv,
    XCSSProp() {
      throw No();
    },
  };
}
var _y = gy(),
  by = _y.cx,
  yy = [
    "as",
    "role",
    "alignItems",
    "justifyContent",
    "gap",
    "columnGap",
    "rowGap",
    "children",
    "testId",
    "direction",
    "wrap",
    "xcss",
  ],
  Nl = {
    "space.0": "_1p57ze3t",
    "space.025": "_1p57v77o",
    "space.050": "_1p571b66",
    "space.075": "_1p5712x7",
    "space.100": "_1p57u2gc",
    "space.150": "_1p57utpp",
    "space.200": "_1p57pxbi",
    "space.250": "_1p57v47k",
    "space.300": "_1p571ejb",
    "space.400": "_1p57xy5q",
    "space.500": "_1p571jfw",
    "space.600": "_1p57oahv",
    "space.800": "_1p57xncg",
    "space.1000": "_1p571epz",
  },
  zl = {
    "space.0": "_gy1pze3t",
    "space.025": "_gy1pv77o",
    "space.050": "_gy1p1b66",
    "space.075": "_gy1p12x7",
    "space.100": "_gy1pu2gc",
    "space.150": "_gy1putpp",
    "space.200": "_gy1ppxbi",
    "space.250": "_gy1pv47k",
    "space.300": "_gy1p1ejb",
    "space.400": "_gy1pxy5q",
    "space.500": "_gy1p1jfw",
    "space.600": "_gy1poahv",
    "space.800": "_gy1pxncg",
    "space.1000": "_gy1p1epz",
  },
  my = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  wy = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  Oy = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  Sy = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  Ey = { root: "_1e0c1txw _vchhusvi" },
  la = b.memo(
    b.forwardRef(function (e, t) {
      var r = e.as,
        n = r === void 0 ? "div" : r,
        i = e.role,
        a = e.alignItems,
        o = e.justifyContent,
        u = e.gap,
        s = e.columnGap,
        c = e.rowGap,
        l = e.children,
        d = e.testId,
        f = e.direction,
        p = e.wrap,
        h = e.xcss,
        v = ne(e, yy);
      return b.createElement(
        n,
        te({}, v, {
          role: i,
          className: C([
            Ey.root,
            u && zl[u],
            s && zl[s],
            u && Nl[u],
            c && Nl[c],
            a && Sy[a],
            f && wy[f],
            o && my[o],
            p && Oy[p],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
la.displayName = "Flex";
var ky = [
    "as",
    "alignInline",
    "alignBlock",
    "shouldWrap",
    "spread",
    "grow",
    "space",
    "rowSpace",
    "separator",
    "xcss",
    "testId",
    "role",
    "children",
  ],
  fs = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  xy = function (t) {
    var r = t.children;
    return b.createElement("span", { className: C([fs.separator]) }, r);
  },
  Ki = b.memo(
    b.forwardRef(function (e, t) {
      var r = e.as,
        n = e.alignInline,
        i = e.alignBlock,
        a = i === void 0 ? "start" : i,
        o = e.shouldWrap,
        u = o === void 0 ? !1 : o,
        s = e.spread,
        c = e.grow,
        l = e.space,
        d = e.rowSpace,
        f = e.separator,
        p = e.xcss,
        h = e.testId,
        v = e.role,
        g = e.children,
        _ = ne(e, ky),
        y = typeof f == "string" ? b.createElement(xy, null, f) : f,
        w = y
          ? b.Children.toArray(g)
              .filter(Boolean)
              .map(function (O, m) {
                return b.createElement(b.Fragment, { key: m }, f && m > 0 ? y : null, O);
              })
          : g;
      return b.createElement(
        la,
        te({}, _, {
          as: r,
          role: v,
          alignItems: a,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: u ? "wrap" : void 0,
          xcss: by(c === "hug" && fs.hug, c === "fill" && fs.fill, p),
          testId: h,
          ref: t,
        }),
        w,
      );
    }),
  );
Ki.displayName = "Inline";
var Cy = "Invariant failed";
function Ry(e, t) {
  if (!e) throw new Error(Cy);
}
var Cv = b.createContext(!1),
  Py = function () {
    return b.useContext(Cv);
  },
  Ay = Cv.Provider,
  jy = ["span", "p", "strong", "em"],
  Iy = function (t, r) {
    var n = sy();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return Ul.hasOwnProperty(n) ? Ul[n] : "color.text";
    }
  },
  Cr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  Dy = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  Ty = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  My = {
    "color.text": "_syazi7uo",
    "color.text.accent.lime": "_syaz1tco",
    "color.text.accent.lime.bolder": "_syaz1ik3",
    "color.text.accent.red": "_syaz9lu1",
    "color.text.accent.red.bolder": "_syazhwvp",
    "color.text.accent.orange": "_syazp1lv",
    "color.text.accent.orange.bolder": "_syaz7i1p",
    "color.text.accent.yellow": "_syazfb2s",
    "color.text.accent.yellow.bolder": "_syazekll",
    "color.text.accent.green": "_syazh55r",
    "color.text.accent.green.bolder": "_syaz1y78",
    "color.text.accent.teal": "_syaz17qg",
    "color.text.accent.teal.bolder": "_syaz12v7",
    "color.text.accent.blue": "_syaz16jw",
    "color.text.accent.blue.bolder": "_syaz1kyx",
    "color.text.accent.purple": "_syazqmo9",
    "color.text.accent.purple.bolder": "_syaz1mn1",
    "color.text.accent.magenta": "_syaz1s8m",
    "color.text.accent.magenta.bolder": "_syaz1qur",
    "color.text.accent.gray": "_syaz1sqi",
    "color.text.accent.gray.bolder": "_syaz1tmo",
    "color.text.disabled": "_syaz1gmx",
    "color.text.inverse": "_syaz15cr",
    "color.text.selected": "_syaz6x5g",
    "color.text.brand": "_syaz1oa5",
    "color.text.danger": "_syaz1tmw",
    "color.text.warning": "_syaz1xn9",
    "color.text.warning.inverse": "_syaz1yd3",
    "color.text.success": "_syazgsak",
    "color.text.discovery": "_syazdv2p",
    "color.text.information": "_syazu3tg",
    "color.text.subtlest": "_syaz1rpy",
    "color.text.subtle": "_syazazsu",
    "color.link": "_syaz13af",
    "color.link.pressed": "_syaz12zz",
    "color.link.visited": "_syaz1ra0",
    "color.link.visited.pressed": "_syaz17z1",
  },
  Ul = {
    "color.background.neutral.bold": "color.text.inverse",
    "color.background.neutral.bold.hovered": "color.text.inverse",
    "color.background.neutral.bold.pressed": "color.text.inverse",
    "color.background.selected.bold": "color.text.inverse",
    "color.background.selected.bold.hovered": "color.text.inverse",
    "color.background.selected.bold.pressed": "color.text.inverse",
    "color.background.brand.bold": "color.text.inverse",
    "color.background.brand.bold.hovered": "color.text.inverse",
    "color.background.brand.bold.pressed": "color.text.inverse",
    "color.background.brand.boldest": "color.text.inverse",
    "color.background.brand.boldest.hovered": "color.text.inverse",
    "color.background.brand.boldest.pressed": "color.text.inverse",
    "color.background.danger.bold": "color.text.inverse",
    "color.background.danger.bold.hovered": "color.text.inverse",
    "color.background.danger.bold.pressed": "color.text.inverse",
    "color.background.warning.bold": "color.text.warning.inverse",
    "color.background.warning.bold.hovered": "color.text.warning.inverse",
    "color.background.warning.bold.pressed": "color.text.warning.inverse",
    "color.background.success.bold": "color.text.inverse",
    "color.background.success.bold.hovered": "color.text.inverse",
    "color.background.success.bold.pressed": "color.text.inverse",
    "color.background.discovery.bold": "color.text.inverse",
    "color.background.discovery.bold.hovered": "color.text.inverse",
    "color.background.discovery.bold.pressed": "color.text.inverse",
    "color.background.information.bold": "color.text.inverse",
    "color.background.information.bold.hovered": "color.text.inverse",
    "color.background.information.bold.pressed": "color.text.inverse",
  },
  Ly = b.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "span" : r,
      i = e.color,
      a = e.align,
      o = e.testId,
      u = e.id,
      s = e.size,
      c = e.weight,
      l = e.maxLines,
      d = e.xcss,
      f = e.children;
    Ry(jy.includes(n));
    var p = Py(),
      h = Iy(i, p);
    !s && !p && (s = "medium");
    var v = b.createElement(
      n,
      {
        id: u,
        className: C([
          Cr.root,
          s && Dy[s],
          h && My[h],
          l && Cr.truncation,
          l === 1 && Cr.breakAll,
          a && Cr["textAlign.".concat(a)],
          c && Ty[c],
          n === "em" && Cr["as.em"],
          n === "strong" && Cr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": o,
        ref: t,
      },
      f,
    );
    return p ? v : b.createElement(Ay, { value: !0 }, v);
  });
function Fy() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var By = ["as", "children", "isInset", "testId", "style", "xcss"],
  Ny = ["className"],
  zy = b.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      i = e.children,
      a = e.isInset,
      o = e.testId,
      u = e.style,
      s = e.xcss,
      c = ne(e, By);
    c.className;
    var l = ne(c, Ny);
    return b.createElement(
      n,
      te({}, l, {
        ref: t,
        className: C([
          "_ymio1r31 _ypr0glyw _zcxs1o36 _mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          a && "_1ah31gjf _2mwq1gjf",
          s,
        ]),
        style: u,
        "data-testid": o,
      }),
      i,
    );
  }),
  Uy = [
    "children",
    "isDisabled",
    "type",
    "onClick",
    "interactionName",
    "componentName",
    "analyticsContext",
    "style",
    "testId",
    "xcss",
    "tabIndex",
  ],
  qy = ["className"],
  ql = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  $y = b.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      i = e.type,
      a = i === void 0 ? "button" : i,
      o = e.onClick,
      u = o === void 0 ? we : o,
      s = e.interactionName,
      c = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      f = e.testId,
      p = e.xcss,
      h = e.tabIndex,
      v = ne(e, Uy),
      g = b.useContext(zs),
      _ = b.useCallback(
        function (O, m) {
          (g && g.tracePress(s, O.timeStamp), u(O, m));
        },
        [u, g, s],
      ),
      y = di({
        fn: _,
        action: "clicked",
        componentName: c || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    v.className;
    var w = ne(v, qy);
    return b.createElement(
      zy,
      te({ as: "button", tabIndex: h ?? (Fy() && !n ? 0 : void 0), style: d }, w, {
        type: a,
        onClick: y,
        disabled: n,
        xcss: xv(ql.root, n && ql.disabled, p),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  zo = {},
  Gn = {},
  $l;
function Rv() {
  if ($l) return Gn;
  (($l = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.bind = void 0));
  function e(t, r) {
    var n = r.type,
      i = r.listener,
      a = r.options;
    return (
      t.addEventListener(n, i, a),
      function () {
        t.removeEventListener(n, i, a);
      }
    );
  }
  return ((Gn.bind = e), Gn);
}
var ar = {},
  Vl;
function Vy() {
  if (Vl) return ar;
  Vl = 1;
  var e =
    (ar && ar.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (a) {
            for (var o, u = 1, s = arguments.length; u < s; u++) {
              o = arguments[u];
              for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (a[c] = o[c]);
            }
            return a;
          }),
        e.apply(this, arguments)
      );
    };
  (Object.defineProperty(ar, "__esModule", { value: !0 }), (ar.bindAll = void 0));
  var t = Rv();
  function r(a) {
    if (!(typeof a > "u")) return typeof a == "boolean" ? { capture: a } : a;
  }
  function n(a, o) {
    if (o == null) return a;
    var u = e(e({}, a), { options: e(e({}, r(o)), r(a.options)) });
    return u;
  }
  function i(a, o, u) {
    var s = o.map(function (c) {
      var l = n(c, u);
      return (0, t.bind)(a, l);
    });
    return function () {
      s.forEach(function (l) {
        return l();
      });
    };
  }
  return ((ar.bindAll = i), ar);
}
var Gl;
function Gy() {
  return (
    Gl ||
      ((Gl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = Rv();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = Vy();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(zo)),
    zo
  );
}
var Ra = Gy(),
  Hy = function () {
    var e = 1,
      t = new WeakMap(),
      r = function (n, i) {
        return typeof n == "number" || typeof n == "string"
          ? i
            ? "idx-".concat(i)
            : "val-".concat(n)
          : t.has(n)
            ? "uid" + t.get(n)
            : (t.set(n, e++), r(n));
      };
    return r;
  },
  Pv = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: Hy() });
  },
  Wy = Pv(),
  Ky = b.createContext(Pv()),
  Jy = function (e) {
    return e.value++;
  },
  Yy = function (e) {
    return e ? e.prefix : "";
  },
  Xy = function (e) {
    var t = e || Wy,
      r = Yy(t),
      n = Jy(t),
      i = r + n,
      a = function (o) {
        return i + t.uid(o);
      };
    return { uid: i, gen: a };
  },
  Av = function () {
    var e = b.useContext(Ky),
      t = b.useState(function () {
        return Xy(e);
      })[0];
    return t;
  },
  Zy = function () {
    var e = Av().uid;
    return e;
  },
  Qy = function () {
    var e = Av().gen;
    return e;
  },
  Uo,
  Ji = (Uo = E.useId) !== null && Uo !== void 0 ? Uo : void 0;
function em() {
  return Ji && Mr("platform-dst-react-18-use-id")
    ? Mr("platform-dst-react-18-use-id-selector-safe")
      ? Ji().replace(/[:«»]/g, "_")
      : Ji()
    : "uid".concat(Zy());
}
function tm() {
  if (Ji && Mr("platform-dst-react-18-use-id")) {
    var e = em();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return Qy();
}
var jv = function (t) {
    var r = t.children,
      n = t.testId,
      i = t.role,
      a = t.id;
    return b.createElement(
      "span",
      {
        id: a,
        "data-testid": n,
        role: i,
        className: C([
          "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
        ]),
      },
      r,
    );
  },
  rm = {
    card: function () {
      return 100;
    },
    navigation: function () {
      return 200;
    },
    dialog: function () {
      return 300;
    },
    layer: function () {
      return 400;
    },
    blanket: function () {
      return 500;
    },
    modal: function () {
      return 510;
    },
    flag: function () {
      return 600;
    },
    spotlight: function () {
      return 700;
    },
    tooltip: function () {
      return 9999;
    },
  },
  nm = ["children"];
function im(e) {
  var t = function (u, s) {
      return u(s);
    },
    r = b.createContext(e);
  function n(o) {
    var u = b.useContext(r),
      s = u || t,
      c = s(o);
    return c;
  }
  function i(o) {
    var u = o.children,
      s = ne(o, nm),
      c = n(s);
    return E.createElement(E.Fragment, null, u(c));
  }
  function a(o) {
    var u = b.useContext(r),
      s = o.value || t,
      c = b.useCallback(
        function (l) {
          return s(u, l);
        },
        [u, s],
      );
    return E.createElement(r.Provider, { value: c }, o.children);
  }
  return { Consumer: i, Provider: a, useTheme: n };
}
var am = im(function () {
    return { mode: "light" };
  }),
  om = am.useTheme;
function sm(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function um(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var cm = (function () {
    function e(r) {
      var n = this;
      ((this._insertTag = function (i) {
        var a;
        (n.tags.length === 0
          ? n.insertionPoint
            ? (a = n.insertionPoint.nextSibling)
            : n.prepend
              ? (a = n.container.firstChild)
              : (a = n.before)
          : (a = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(i, a),
          n.tags.push(i));
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null));
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(um(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var a = sm(i);
          try {
            a.insertRule(n, a.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        (this.tags.forEach(function (n) {
          var i;
          return (i = n.parentNode) == null ? void 0 : i.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0));
      }),
      e
    );
  })(),
  me = "-ms-",
  da = "-moz-",
  Z = "-webkit-",
  Iv = "comm",
  Vs = "rule",
  Gs = "decl",
  lm = "@import",
  Dv = "@keyframes",
  dm = "@layer",
  fm = Math.abs,
  Pa = String.fromCharCode,
  vm = Object.assign;
function pm(e, t) {
  return ye(e, 0) ^ 45
    ? (((((((t << 2) ^ ye(e, 0)) << 2) ^ ye(e, 1)) << 2) ^ ye(e, 2)) << 2) ^ ye(e, 3)
    : 0;
}
function Tv(e) {
  return e.trim();
}
function hm(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, r) {
  return e.replace(t, r);
}
function vs(e, t) {
  return e.indexOf(t);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function vi(e, t, r) {
  return e.slice(t, r);
}
function ft(e) {
  return e.length;
}
function Hs(e) {
  return e.length;
}
function qi(e, t) {
  return (t.push(e), e);
}
function gm(e, t) {
  return e.map(t).join("");
}
var Aa = 1,
  Lr = 1,
  Mv = 0,
  Ie = 0,
  he = 0,
  $r = "";
function ja(e, t, r, n, i, a, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: i,
    children: a,
    line: Aa,
    column: Lr,
    length: o,
    return: "",
  };
}
function Hn(e, t) {
  return vm(ja("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function _m() {
  return he;
}
function bm() {
  return ((he = Ie > 0 ? ye($r, --Ie) : 0), Lr--, he === 10 && ((Lr = 1), Aa--), he);
}
function Fe() {
  return ((he = Ie < Mv ? ye($r, Ie++) : 0), Lr++, he === 10 && ((Lr = 1), Aa++), he);
}
function gt() {
  return ye($r, Ie);
}
function Yi() {
  return Ie;
}
function Si(e, t) {
  return vi($r, e, t);
}
function pi(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Lv(e) {
  return ((Aa = Lr = 1), (Mv = ft(($r = e))), (Ie = 0), []);
}
function Fv(e) {
  return (($r = ""), e);
}
function Xi(e) {
  return Tv(Si(Ie - 1, ps(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ym(e) {
  for (; (he = gt()) && he < 33; ) Fe();
  return pi(e) > 2 || pi(he) > 3 ? "" : " ";
}
function mm(e, t) {
  for (; --t && Fe() && !(he < 48 || he > 102 || (he > 57 && he < 65) || (he > 70 && he < 97)); );
  return Si(e, Yi() + (t < 6 && gt() == 32 && Fe() == 32));
}
function ps(e) {
  for (; Fe(); )
    switch (he) {
      case e:
        return Ie;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ps(he);
        break;
      case 40:
        e === 41 && ps(e);
        break;
      case 92:
        Fe();
        break;
    }
  return Ie;
}
function wm(e, t) {
  for (; Fe() && e + he !== 57; ) if (e + he === 84 && gt() === 47) break;
  return "/*" + Si(t, Ie - 1) + "*" + Pa(e === 47 ? e : Fe());
}
function Om(e) {
  for (; !pi(gt()); ) Fe();
  return Si(e, Ie);
}
function Sm(e) {
  return Fv(Zi("", null, null, null, [""], (e = Lv(e)), 0, [0], e));
}
function Zi(e, t, r, n, i, a, o, u, s) {
  for (
    var c = 0,
      l = 0,
      d = o,
      f = 0,
      p = 0,
      h = 0,
      v = 1,
      g = 1,
      _ = 1,
      y = 0,
      w = "",
      O = i,
      m = a,
      S = n,
      x = w;
    g;

  )
    switch (((h = y), (y = Fe()))) {
      case 40:
        if (h != 108 && ye(x, d - 1) == 58) {
          vs((x += Q(Xi(y), "&", "&\f")), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Xi(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += ym(h);
        break;
      case 92:
        x += mm(Yi() - 1, 7);
        continue;
      case 47:
        switch (gt()) {
          case 42:
          case 47:
            qi(Em(wm(Fe(), Yi()), t, r), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * v:
        u[c++] = ft(x) * _;
      case 125 * v:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            (_ == -1 && (x = Q(x, /\f/g, "")),
              p > 0 &&
                ft(x) - d &&
                qi(p > 32 ? Wl(x + ";", n, r, d - 1) : Wl(Q(x, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            x += ";";
          default:
            if ((qi((S = Hl(x, t, r, c, l, i, u, w, (O = []), (m = []), d)), a), y === 123))
              if (l === 0) Zi(x, t, S, S, O, a, d, u, m);
              else
                switch (f === 99 && ye(x, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Zi(
                      e,
                      S,
                      S,
                      n && qi(Hl(e, S, S, 0, 0, i, u, w, i, (O = []), d), m),
                      i,
                      m,
                      d,
                      u,
                      n ? O : m,
                    );
                    break;
                  default:
                    Zi(x, S, S, S, [""], m, 0, u, m);
                }
        }
        ((c = l = p = 0), (v = _ = 1), (w = x = ""), (d = o));
        break;
      case 58:
        ((d = 1 + ft(x)), (p = h));
      default:
        if (v < 1) {
          if (y == 123) --v;
          else if (y == 125 && v++ == 0 && bm() == 125) continue;
        }
        switch (((x += Pa(y)), y * v)) {
          case 38:
            _ = l > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            ((u[c++] = (ft(x) - 1) * _), (_ = 1));
            break;
          case 64:
            (gt() === 45 && (x += Xi(Fe())), (f = gt()), (l = d = ft((w = x += Om(Yi())))), y++);
            break;
          case 45:
            h === 45 && ft(x) == 2 && (v = 0);
        }
    }
  return a;
}
function Hl(e, t, r, n, i, a, o, u, s, c, l) {
  for (var d = i - 1, f = i === 0 ? a : [""], p = Hs(f), h = 0, v = 0, g = 0; h < n; ++h)
    for (var _ = 0, y = vi(e, d + 1, (d = fm((v = o[h])))), w = e; _ < p; ++_)
      (w = Tv(v > 0 ? f[_] + " " + y : Q(y, /&\f/g, f[_]))) && (s[g++] = w);
  return ja(e, t, r, i === 0 ? Vs : u, s, c, l);
}
function Em(e, t, r) {
  return ja(e, t, r, Iv, Pa(_m()), vi(e, 2, -2), 0);
}
function Wl(e, t, r, n) {
  return ja(e, t, r, Gs, vi(e, 0, n), vi(e, n + 1, -1), n);
}
function Dr(e, t) {
  for (var r = "", n = Hs(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || "";
  return r;
}
function km(e, t, r, n) {
  switch (e.type) {
    case dm:
      if (e.children.length) break;
    case lm:
    case Gs:
      return (e.return = e.return || e.value);
    case Iv:
      return "";
    case Dv:
      return (e.return = e.value + "{" + Dr(e.children, n) + "}");
    case Vs:
      e.value = e.props.join(",");
  }
  return ft((r = Dr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function xm(e) {
  var t = Hs(e);
  return function (r, n, i, a) {
    for (var o = "", u = 0; u < t; u++) o += e[u](r, n, i, a) || "";
    return o;
  };
}
function Cm(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Rm(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var Pm = function (t, r, n) {
    for (var i = 0, a = 0; (i = a), (a = gt()), i === 38 && a === 12 && (r[n] = 1), !pi(a); ) Fe();
    return Si(t, Ie);
  },
  Am = function (t, r) {
    var n = -1,
      i = 44;
    do
      switch (pi(i)) {
        case 0:
          (i === 38 && gt() === 12 && (r[n] = 1), (t[n] += Pm(Ie - 1, r, n)));
          break;
        case 2:
          t[n] += Xi(i);
          break;
        case 4:
          if (i === 44) {
            ((t[++n] = gt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Pa(i);
      }
    while ((i = Fe()));
    return t;
  },
  jm = function (t, r) {
    return Fv(Am(Lv(t), r));
  },
  Kl = new WeakMap(),
  Im = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Kl.get(n)) && !i) {
        Kl.set(t, !0);
        for (var a = [], o = jm(r, a), u = n.props, s = 0, c = 0; s < o.length; s++)
          for (var l = 0; l < u.length; l++, c++)
            t.props[c] = a[s] ? o[s].replace(/&\f/g, u[l]) : u[l] + " " + o[s];
      }
    }
  },
  Dm = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Bv(e, t) {
  switch (pm(e, t)) {
    case 5103:
      return Z + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Z + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Z + e + da + e + me + e + e;
    case 6828:
    case 4268:
      return Z + e + me + e + e;
    case 6165:
      return Z + e + me + "flex-" + e + e;
    case 5187:
      return Z + e + Q(e, /(\w+).+(:[^]+)/, Z + "box-$1$2" + me + "flex-$1$2") + e;
    case 5443:
      return Z + e + me + "flex-item-" + Q(e, /flex-|-self/, "") + e;
    case 4675:
      return Z + e + me + "flex-line-pack" + Q(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Z + e + me + Q(e, "shrink", "negative") + e;
    case 5292:
      return Z + e + me + Q(e, "basis", "preferred-size") + e;
    case 6060:
      return Z + "box-" + Q(e, "-grow", "") + Z + e + me + Q(e, "grow", "positive") + e;
    case 4554:
      return Z + Q(e, /([^-])(transform)/g, "$1" + Z + "$2") + e;
    case 6187:
      return Q(Q(Q(e, /(zoom-|grab)/, Z + "$1"), /(image-set)/, Z + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Q(e, /(image-set\([^]*)/, Z + "$1$`$1");
    case 4968:
      return (
        Q(
          Q(e, /(.+:)(flex-)?(.*)/, Z + "box-pack:$3" + me + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        Z +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Q(e, /(.+)-inline(.+)/, Z + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ft(e) - 1 - t > 6)
        switch (ye(e, t + 1)) {
          case 109:
            if (ye(e, t + 4) !== 45) break;
          case 102:
            return (
              Q(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Z + "$2-$3$1" + da + (ye(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~vs(e, "stretch") ? Bv(Q(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ye(e, t + 1) !== 115) break;
    case 6444:
      switch (ye(e, ft(e) - 3 - (~vs(e, "!important") && 10))) {
        case 107:
          return Q(e, ":", ":" + Z) + e;
        case 101:
          return (
            Q(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Z +
                (ye(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Z +
                "$2$3$1" +
                me +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (ye(e, t + 11)) {
        case 114:
          return Z + e + me + Q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Z + e + me + Q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Z + e + me + Q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Z + e + me + e + e;
  }
  return e;
}
var Tm = function (t, r, n, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Gs:
          t.return = Bv(t.value, t.length);
          break;
        case Dv:
          return Dr([Hn(t, { value: Q(t.value, "@", "@" + Z) })], i);
        case Vs:
          if (t.length)
            return gm(t.props, function (a) {
              switch (hm(a, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Dr([Hn(t, { props: [Q(a, /:(read-\w+)/, ":" + da + "$1")] })], i);
                case "::placeholder":
                  return Dr(
                    [
                      Hn(t, { props: [Q(a, /:(plac\w+)/, ":" + Z + "input-$1")] }),
                      Hn(t, { props: [Q(a, /:(plac\w+)/, ":" + da + "$1")] }),
                      Hn(t, { props: [Q(a, /:(plac\w+)/, me + "input-$1")] }),
                    ],
                    i,
                  );
              }
              return "";
            });
      }
  },
  Mm = [Tm],
  Lm = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (v) {
        var g = v.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || Mm,
      a = {},
      o,
      u = [];
    ((o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (v) {
          for (var g = v.getAttribute("data-emotion").split(" "), _ = 1; _ < g.length; _++)
            a[g[_]] = !0;
          u.push(v);
        },
      ));
    var s,
      c = [Im, Dm];
    {
      var l,
        d = [
          km,
          Cm(function (v) {
            l.insert(v);
          }),
        ],
        f = xm(c.concat(i, d)),
        p = function (g) {
          return Dr(Sm(g), f);
        };
      s = function (g, _, y, w) {
        ((l = y), p(g ? g + "{" + _.styles + "}" : _.styles), w && (h.inserted[_.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new cm({
        key: r,
        container: o,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: a,
      registered: {},
      insert: s,
    };
    return (h.sheet.hydrate(u), h);
  },
  qo = { exports: {} },
  ee = {};
var Jl;
function Fm() {
  if (Jl) return ee;
  Jl = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    n = e ? Symbol.for("react.fragment") : 60107,
    i = e ? Symbol.for("react.strict_mode") : 60108,
    a = e ? Symbol.for("react.profiler") : 60114,
    o = e ? Symbol.for("react.provider") : 60109,
    u = e ? Symbol.for("react.context") : 60110,
    s = e ? Symbol.for("react.async_mode") : 60111,
    c = e ? Symbol.for("react.concurrent_mode") : 60111,
    l = e ? Symbol.for("react.forward_ref") : 60112,
    d = e ? Symbol.for("react.suspense") : 60113,
    f = e ? Symbol.for("react.suspense_list") : 60120,
    p = e ? Symbol.for("react.memo") : 60115,
    h = e ? Symbol.for("react.lazy") : 60116,
    v = e ? Symbol.for("react.block") : 60121,
    g = e ? Symbol.for("react.fundamental") : 60117,
    _ = e ? Symbol.for("react.responder") : 60118,
    y = e ? Symbol.for("react.scope") : 60119;
  function w(m) {
    if (typeof m == "object" && m !== null) {
      var S = m.$$typeof;
      switch (S) {
        case t:
          switch (((m = m.type), m)) {
            case s:
            case c:
            case n:
            case a:
            case i:
            case d:
              return m;
            default:
              switch (((m = m && m.$$typeof), m)) {
                case u:
                case l:
                case h:
                case p:
                case o:
                  return m;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function O(m) {
    return w(m) === c;
  }
  return (
    (ee.AsyncMode = s),
    (ee.ConcurrentMode = c),
    (ee.ContextConsumer = u),
    (ee.ContextProvider = o),
    (ee.Element = t),
    (ee.ForwardRef = l),
    (ee.Fragment = n),
    (ee.Lazy = h),
    (ee.Memo = p),
    (ee.Portal = r),
    (ee.Profiler = a),
    (ee.StrictMode = i),
    (ee.Suspense = d),
    (ee.isAsyncMode = function (m) {
      return O(m) || w(m) === s;
    }),
    (ee.isConcurrentMode = O),
    (ee.isContextConsumer = function (m) {
      return w(m) === u;
    }),
    (ee.isContextProvider = function (m) {
      return w(m) === o;
    }),
    (ee.isElement = function (m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }),
    (ee.isForwardRef = function (m) {
      return w(m) === l;
    }),
    (ee.isFragment = function (m) {
      return w(m) === n;
    }),
    (ee.isLazy = function (m) {
      return w(m) === h;
    }),
    (ee.isMemo = function (m) {
      return w(m) === p;
    }),
    (ee.isPortal = function (m) {
      return w(m) === r;
    }),
    (ee.isProfiler = function (m) {
      return w(m) === a;
    }),
    (ee.isStrictMode = function (m) {
      return w(m) === i;
    }),
    (ee.isSuspense = function (m) {
      return w(m) === d;
    }),
    (ee.isValidElementType = function (m) {
      return (
        typeof m == "string" ||
        typeof m == "function" ||
        m === n ||
        m === c ||
        m === a ||
        m === i ||
        m === d ||
        m === f ||
        (typeof m == "object" &&
          m !== null &&
          (m.$$typeof === h ||
            m.$$typeof === p ||
            m.$$typeof === o ||
            m.$$typeof === u ||
            m.$$typeof === l ||
            m.$$typeof === g ||
            m.$$typeof === _ ||
            m.$$typeof === y ||
            m.$$typeof === v))
      );
    }),
    (ee.typeOf = w),
    ee
  );
}
var Yl;
function Bm() {
  return (Yl || ((Yl = 1), (qo.exports = Fm())), qo.exports);
}
var $o, Xl;
function Nm() {
  if (Xl) return $o;
  Xl = 1;
  var e = Bm(),
    t = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    r = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    n = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    i = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    a = {};
  ((a[e.ForwardRef] = n), (a[e.Memo] = i));
  function o(h) {
    return e.isMemo(h) ? i : a[h.$$typeof] || t;
  }
  var u = Object.defineProperty,
    s = Object.getOwnPropertyNames,
    c = Object.getOwnPropertySymbols,
    l = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    f = Object.prototype;
  function p(h, v, g) {
    if (typeof v != "string") {
      if (f) {
        var _ = d(v);
        _ && _ !== f && p(h, _, g);
      }
      var y = s(v);
      c && (y = y.concat(c(v)));
      for (var w = o(h), O = o(v), m = 0; m < y.length; ++m) {
        var S = y[m];
        if (!r[S] && !(g && g[S]) && !(O && O[S]) && !(w && w[S])) {
          var x = l(v, S);
          try {
            u(h, S, x);
          } catch {}
        }
      }
    }
    return h;
  }
  return (($o = p), $o);
}
Nm();
var zm = !0;
function Nv(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : i && (n += i + " ");
    }),
    n
  );
}
var Ws = function (t, r, n) {
    var i = t.key + "-" + r.name;
    (n === !1 || zm === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
  },
  zv = function (t, r, n) {
    Ws(t, r, n);
    var i = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var a = r;
      do (t.insert(r === a ? "." + i : "", a, t.sheet, !0), (a = a.next));
      while (a !== void 0);
    }
  };
function Um(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    ((r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      ((t ^= e.charCodeAt(n) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var qm = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  $m = /[A-Z]|^ms/g,
  Vm = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Uv = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Zl = function (t) {
    return t != null && typeof t != "boolean";
  },
  Vo = Rm(function (e) {
    return Uv(e) ? e : e.replace($m, "-$&").toLowerCase();
  }),
  Ql = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(Vm, function (n, i, a) {
            return ((vt = { name: i, styles: a, next: vt }), i);
          });
    }
    return qm[t] !== 1 && !Uv(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function hi(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1) return ((vt = { name: i.name, styles: i.styles, next: vt }), i.name);
      var a = r;
      if (a.styles !== void 0) {
        var o = a.next;
        if (o !== void 0)
          for (; o !== void 0; )
            ((vt = { name: o.name, styles: o.styles, next: vt }), (o = o.next));
        var u = a.styles + ";";
        return u;
      }
      return Gm(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = vt,
          c = r(e);
        return ((vt = s), hi(e, t, c));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function Gm(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var i = 0; i < r.length; i++) n += hi(e, t, r[i]) + ";";
  else
    for (var a in r) {
      var o = r[a];
      if (typeof o != "object") {
        var u = o;
        t != null && t[u] !== void 0
          ? (n += a + "{" + t[u] + "}")
          : Zl(u) && (n += Vo(a) + ":" + Ql(a, u) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var s = 0; s < o.length; s++) Zl(o[s]) && (n += Vo(a) + ":" + Ql(a, o[s]) + ";");
      else {
        var c = hi(e, t, o);
        switch (a) {
          case "animation":
          case "animationName": {
            n += Vo(a) + ":" + c + ";";
            break;
          }
          default:
            n += a + "{" + c + "}";
        }
      }
    }
  return n;
}
var ed = /label:\s*([^\s;{]+)\s*(;|$)/g,
  vt;
function Ks(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    i = "";
  vt = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0) ((n = !1), (i += hi(r, t, a)));
  else {
    var o = a;
    i += o[0];
  }
  for (var u = 1; u < e.length; u++)
    if (((i += hi(r, t, e[u])), n)) {
      var s = a;
      i += s[u];
    }
  ed.lastIndex = 0;
  for (var c = "", l; (l = ed.exec(i)) !== null; ) c += "-" + l[1];
  var d = Um(i) + c;
  return { name: d, styles: i, next: vt };
}
var Hm = function (t) {
    return t();
  },
  Wm = mu.useInsertionEffect ? mu.useInsertionEffect : !1,
  qv = Wm || Hm,
  $v = b.createContext(typeof HTMLElement < "u" ? Lm({ key: "css" }) : null);
$v.Provider;
var Vv = function (t) {
    return b.forwardRef(function (r, n) {
      var i = b.useContext($v);
      return t(r, i, n);
    });
  },
  Gv = b.createContext({}),
  Js = {}.hasOwnProperty,
  hs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Km = function (t, r) {
    var n = {};
    for (var i in r) Js.call(r, i) && (n[i] = r[i]);
    return ((n[hs] = t), n);
  },
  Jm = function (t) {
    var r = t.cache,
      n = t.serialized,
      i = t.isStringTag;
    return (
      Ws(r, n, i),
      qv(function () {
        return zv(r, n, i);
      }),
      null
    );
  },
  Ym = Vv(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var i = e[hs],
      a = [n],
      o = "";
    typeof e.className == "string"
      ? (o = Nv(t.registered, a, e.className))
      : e.className != null && (o = e.className + " ");
    var u = Ks(a, void 0, b.useContext(Gv));
    o += t.key + "-" + u.name;
    var s = {};
    for (var c in e) Js.call(e, c) && c !== "css" && c !== hs && (s[c] = e[c]);
    return (
      (s.className = o),
      r && (s.ref = r),
      b.createElement(
        b.Fragment,
        null,
        b.createElement(Jm, { cache: t, serialized: u, isStringTag: typeof i == "string" }),
        b.createElement(i, s),
      )
    );
  }),
  Xm = Ym,
  Dt = function (t, r) {
    var n = arguments;
    if (r == null || !Js.call(r, "css")) return b.createElement.apply(void 0, n);
    var i = n.length,
      a = new Array(i);
    ((a[0] = Xm), (a[1] = Km(t, r)));
    for (var o = 2; o < i; o++) a[o] = n[o];
    return b.createElement.apply(null, a);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Dt || (Dt = {}));
function kt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Ks(t);
}
var Zm = function e(t) {
  for (var r = t.length, n = 0, i = ""; n < r; n++) {
    var a = t[n];
    if (a != null) {
      var o = void 0;
      switch (typeof a) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(a)) o = e(a);
          else {
            o = "";
            for (var u in a) a[u] && u && (o && (o += " "), (o += u));
          }
          break;
        }
        default:
          o = a;
      }
      o && (i && (i += " "), (i += o));
    }
  }
  return i;
};
function Qm(e, t, r) {
  var n = [],
    i = Nv(e, n, r);
  return n.length < 2 ? r : i + t(n);
}
var e0 = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      qv(function () {
        for (var i = 0; i < n.length; i++) zv(r, n[i], !1);
      }),
      null
    );
  },
  t0 = Vv(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        var d = Ks(c, t.registered);
        return (r.push(d), Ws(t, d, !1), t.key + "-" + d.name);
      },
      i = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        return Qm(t.registered, n, Zm(c));
      },
      a = { css: n, cx: i, theme: b.useContext(Gv) },
      o = e.children(a);
    return b.createElement(
      b.Fragment,
      null,
      b.createElement(e0, { cache: t, serializedArr: r }),
      o,
    );
  });
function r0(e, t) {
  var r = b.useRef(!0);
  b.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Hv = 2,
  gs = kt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Hv,
  }),
  _s = kt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Hv,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  n0 = kt({
    "&:focus": gs,
    "&:focus-visible": gs,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  i0 = kt({
    "&:focus": _s,
    "&:focus-visible": _s,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Wv = b.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      i = r ? _s : gs,
      a = r ? i0 : n0,
      o = typeof n > "u" ? a : n === "on" && i;
    return Dt(t0, null, function (u) {
      var s = u.css,
        c = u.cx;
      return b.Children.only(
        o ? b.cloneElement(t, { className: c([s(o), t.props.className]) }) : t,
      );
    });
  });
Wv.displayName = "FocusRing";
function It(e) {
  (e.preventDefault(), e.stopPropagation());
}
var a0 = 9;
function td(e) {
  e.keyCode !== a0 && It(e);
}
var o0 = {
    onMouseDownCapture: It,
    onMouseUpCapture: It,
    onKeyDownCapture: td,
    onKeyUpCapture: td,
    onTouchStartCapture: It,
    onTouchEndCapture: It,
    onPointerDownCapture: It,
    onPointerUpCapture: It,
    onClickCapture: It,
    onClick: It,
  },
  s0 = {};
function u0(e) {
  var t = e.isInteractive;
  return t ? s0 : o0;
}
function rd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rd(Object(r), !0).forEach(function (n) {
          k(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ht = 8,
  Go = ["default", "primary", "danger", "warning"],
  bs = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  c0 = { default: bs.default, compact: bs.compact, none: "inherit" },
  l0 = {
    default: "0 ".concat(Ht + Ht / 4, "px"),
    compact: "0 ".concat(Ht + Ht / 4, "px"),
    none: "0",
  },
  d0 = { compact: "0 ".concat(Ht / 4, "px"), default: "0 ".concat(Ht / 4, "px"), none: "0" },
  f0 = { default: "middle", compact: "middle", none: "baseline" },
  Kv = { content: "0 ".concat(Ht / 4, "px"), icon: "0 ".concat(Ht / 4, "px") },
  Jv = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  v0 = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": Re(Re({}, Jv), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  p0 = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  h0 = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  g0 = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  _0 = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": {
      background: "transparent",
      color: "var(--ds-text-subtle, #505258)",
      textDecoration: "underline",
    },
    "&:active": {
      background: "transparent",
      color: "var(--ds-text, #292A2E)",
      textDecoration: "underline",
    },
  },
  b0 = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  y0 = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  m0 = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": Re(
      Re({}, Jv),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  w0 = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function O0(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isSelected,
    i = e.shouldFitContainer,
    a = e.isOnlySingleIcon;
  return Re(
    Re(
      {
        alignItems: "baseline",
        borderWidth: 0,
        borderRadius: "var(--ds-radius-small, 3px)",
        boxSizing: "border-box",
        display: "inline-flex",
        fontSize: "inherit",
        fontStyle: "normal",
        fontFamily: "inherit",
        fontWeight: "var(--ds-font-weight-medium, 500)",
        maxWidth: "100%",
        position: "relative",
        textAlign: "center",
        textDecoration: "none",
        transition:
          "background 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38)",
        whiteSpace: "nowrap",
        cursor: "pointer",
        height: bs[r],
        lineHeight: c0[r],
        padding: a ? d0[r] : l0[r],
        verticalAlign: f0[r],
        width: i ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? m0
        : Re(
            Re(
              Re(
                Re(
                  Re(
                    Re(
                      Re(Re({}, t === "default" && v0), t === "primary" && p0),
                      t === "link" && h0,
                    ),
                    t === "subtle" && g0,
                  ),
                  t === "subtle-link" && _0,
                ),
                t === "warning" && b0,
              ),
              t === "danger" && y0,
            ),
            {},
            {
              "&[disabled]": {
                color: "var(--ds-text-disabled, #080F214A)",
                backgroundColor: Go.includes(t)
                  ? "var(--ds-background-disabled, #17171708)"
                  : "transparent",
                cursor: "not-allowed",
                textDecoration: "none",
                "&:hovered": {
                  backgroundColor: Go.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
                "&:active": {
                  backgroundColor: Go.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
              },
            },
            w0,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function nd(e) {
  var t = e.spacing;
  return kt({
    display: "flex",
    margin: t === "none" ? 0 : Kv.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function S0(e) {
  var t = e.spacing;
  return kt({
    margin: t === "none" ? 0 : Kv.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function E0(e) {
  var t = e.hasOverlay;
  return kt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var k0 = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Ys = function (t) {
    return t && b.isValidElement(t) && t.type === jv;
  },
  x0 = [
    "analyticsContext",
    "appearance",
    "autoFocus",
    "buttonCss",
    "children",
    "className",
    "href",
    "component",
    "iconAfter",
    "iconBefore",
    "interactionName",
    "isDisabled",
    "isSelected",
    "onBlur",
    "onClick",
    "onFocus",
    "onMouseDown",
    "overlay",
    "shouldFitContainer",
    "spacing",
    "tabIndex",
    "type",
    "testId",
  ],
  C0 = { "> *": { pointerEvents: "none" } },
  R0 = kt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  P0 = kt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  id = function (t, r) {
    return !t || Ys(t) ? null : r;
  },
  A0 = function (t, r) {
    return Ys(t) ? t : t ? Dt("span", { css: r }, t) : null;
  },
  j0 = E.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      i = t.appearance,
      a = i === void 0 ? "default" : i,
      o = t.autoFocus,
      u = o === void 0 ? !1 : o,
      s = t.buttonCss,
      c = t.children,
      l = t.className,
      d = t.href,
      f = t.component,
      p = f === void 0 ? (d ? "a" : "button") : f,
      h = t.iconAfter,
      v = t.iconBefore,
      g = t.interactionName,
      _ = t.isDisabled,
      y = _ === void 0 ? !1 : _,
      w = t.isSelected,
      O = w === void 0 ? !1 : w,
      m = t.onBlur,
      S = t.onClick,
      x = S === void 0 ? we : S,
      D = t.onFocus,
      j = t.onMouseDown,
      R = j === void 0 ? we : j,
      T = t.overlay;
    t.shouldFitContainer;
    var U = t.spacing,
      z = U === void 0 ? "default" : U,
      V = t.tabIndex,
      Y = V === void 0 ? 0 : V,
      G = t.type,
      $ = G === void 0 ? (d ? void 0 : "button") : G,
      X = t.testId,
      B = ne(t, x0),
      A = b.useRef(),
      _e = b.useCallback(
        function (pe) {
          if (((A.current = pe), r != null)) {
            if (typeof r == "function") {
              r(pe);
              return;
            }
            r.current = pe;
          }
        },
        [A, r],
      );
    r0(A, u);
    var ae = b.useContext(zs),
      se = b.useCallback(
        function (pe, $e) {
          (ae && ae.tracePress(g, pe.timeStamp), x(pe, $e));
        },
        [x, ae, g],
      ),
      le = di({
        fn: se,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "23.6.0",
        analyticsData: n,
      }),
      ge = b.useCallback(
        function (pe) {
          (pe.preventDefault(), R(pe));
        },
        [R],
      );
    b.useEffect(
      function () {
        var pe = A.current;
        y && pe && pe === document.activeElement && pe.blur();
      },
      [y],
    );
    var ue = !!T,
      qe = kt(E0({ hasOverlay: ue })),
      Oe = !y && !ue,
      et = {};
    return (
      (O || y || a === "warning") &&
        (et = {
          "[data-theme] & circle": {
            stroke: "".concat(
              O || y
                ? "var(--ds-icon-subtle, ".concat(os, ")")
                : "var(--ds-icon-warning-inverse, ".concat(os, ")"),
              " !important",
            ),
          },
        }),
      Dt(
        Wv,
        null,
        Dt(
          p,
          te(
            {},
            B,
            {
              ref: _e,
              className: l,
              css: [s, Oe ? null : C0],
              "data-has-overlay": ue ? !0 : void 0,
              "data-testid": X,
              disabled: y,
              href: Oe ? d : void 0,
              onBlur: m,
              onClick: le,
              onFocus: D,
              onMouseDown: ge,
              tabIndex: y ? -1 : Y,
              type: $,
            },
            u0({ isInteractive: Oe }),
          ),
          v ? Dt("span", { css: [qe, nd({ spacing: z }), id(c, R0)] }, v) : null,
          A0(c, [qe, S0({ spacing: z })]),
          h ? Dt("span", { css: [qe, nd({ spacing: z }), id(c, P0)] }, h) : null,
          T ? Dt("span", { css: [k0, et] }, T) : null,
        ),
      )
    );
  });
function I0(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Ys(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var D0 = [
    "appearance",
    "children",
    "iconBefore",
    "iconAfter",
    "isSelected",
    "onMouseDown",
    "onMouseUp",
    "shouldFitContainer",
    "spacing",
  ],
  ad = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  Xs = E.memo(
    E.forwardRef(function (t, r) {
      var n = t.appearance,
        i = n === void 0 ? "default" : n,
        a = t.children,
        o = t.iconBefore,
        u = t.iconAfter,
        s = t.isSelected,
        c = s === void 0 ? !1 : s,
        l = t.onMouseDown,
        d = l === void 0 ? we : l,
        f = t.onMouseUp,
        p = f === void 0 ? we : f,
        h = t.shouldFitContainer,
        v = h === void 0 ? !1 : h,
        g = t.spacing,
        _ = g === void 0 ? "default" : g,
        y = ne(t, D0),
        w = om(),
        O = w.mode,
        m = I0({ children: a, iconBefore: o, iconAfter: u }),
        S = b.useState(!1),
        x = K(S, 2),
        D = x[0],
        j = x[1],
        R = b.useCallback(
          function (z) {
            (d(z), ad && j(!0));
          },
          [d, j],
        ),
        T = b.useCallback(
          function (z) {
            (p(z), ad && j(!1));
          },
          [p, j],
        ),
        U = b.useMemo(
          function () {
            return O0({
              appearance: i,
              spacing: _,
              isSelected: c,
              shouldFitContainer: v,
              isOnlySingleIcon: m,
            });
          },
          [i, _, O, c, v, m],
        );
      return E.createElement(
        j0,
        te({}, y, {
          ref: r,
          appearance: i,
          buttonCss: U,
          children: a,
          "data-firefox-is-active": D ? !0 : void 0,
          iconAfter: u,
          iconBefore: o,
          isSelected: c,
          onMouseDown: R,
          onMouseUp: T,
          spacing: _,
        }),
      );
    }),
  );
Xs.displayName = "Button";
function od(e) {
  return E.createElement(Xs, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function T0(e) {
  return E.createElement(Xs, te({}, e, { appearance: "subtle" }));
}
var M0 = { container: "_1e0c1txw _kqswh2mm" };
function L0(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    i = e.to;
  return E.createElement(
    Ca,
    { as: "li", testId: r, key: t, xcss: M0.container, paddingInline: "space.100" },
    E.createElement(
      Ly,
      { testId: r && "".concat(r, "-text") },
      E.createElement(jv, null, "Skipped pages from ", n, " to ", i),
      "…",
    ),
  );
}
var sd = {},
  ud =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function F0(e, t) {
  return !!(e === t || (ud(e) && ud(t)));
}
function B0(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!F0(e[r], t[r])) return !1;
  return !0;
}
function N0(e, t) {
  t === void 0 && (t = B0);
  var r = null;
  function n() {
    for (var i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
    if (r && r.lastThis === this && t(i, r.lastArgs)) return r.lastResult;
    var o = e.apply(this, i);
    return ((r = { lastResult: o, lastArgs: i, lastThis: this }), o);
  }
  return (
    (n.clear = function () {
      r = null;
    }),
    n
  );
}
var z0 = function (t, r, n, i) {
  var a = n.max,
    o = n.ellipsis,
    u = n.transform,
    s = t.length,
    c = s > a,
    l = c && a - 4 < r,
    d = c && r < s - a + 3,
    f = N0(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
      return t.slice(g, _).map(function (y, w) {
        return u(y, g + w, i);
      });
    });
  if (!c) return f(0, s);
  if (l && !d) {
    var p = a - 2;
    return [].concat(
      Te(f(0, 1)),
      [o({ key: "ellipsis-1", testId: i && "".concat(i, "-ellipsis"), from: 2, to: s - p })],
      Te(f(s - p)),
    );
  }
  if (!l && d) {
    var h = a - 2;
    return [].concat(
      Te(f(0, h)),
      [o({ key: "ellipsis-1", testId: i && "".concat(i, "-ellipsis"), from: h + 1, to: s - 1 })],
      Te(f(s - 1)),
    );
  }
  var v = a - 4;
  return [].concat(
    Te(f(0, 1)),
    [
      o({
        key: "ellipsis-1",
        testId: i && "".concat(i, "-ellipsis"),
        from: 2,
        to: r - Math.floor(v / 2),
      }),
    ],
    Te(f(r - Math.floor(v / 2), r + v - 1)),
    [o({ key: "ellipsis-2", testId: i && "".concat(i, "-ellipsis"), from: r + 3, to: s - 1 })],
    Te(f(s - 1)),
  );
};
function cd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function U0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cd(Object(r), !0).forEach(function (n) {
          k(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : cd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ys = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  q0 = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.16",
  };
function ld(e) {
  var t = e.chevronDirection,
    r = t === "left" ? ty : oy;
  return E.createElement(
    Ca,
    { as: "span", xcss: ys.navigatorIconWrapper },
    E.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function $0(e, t) {
  var r = e.components,
    n = r === void 0 ? sd : r,
    i = e.defaultSelectedIndex,
    a = i === void 0 ? 0 : i,
    o = e.selectedIndex,
    u = e.label,
    s = u === void 0 ? "pagination" : u,
    c = e.pageLabel,
    l = c === void 0 ? "page" : c,
    d = e.previousLabel,
    f = d === void 0 ? "previous" : d,
    p = e.nextLabel,
    h = p === void 0 ? "next" : p,
    v = e.style,
    g = v === void 0 ? sd : v,
    _ = e.max,
    y = _ === void 0 ? 7 : _,
    w = e.onChange,
    O = w === void 0 ? we : w,
    m = e.pages,
    S = e.getPageLabel,
    x = e.renderEllipsis,
    D = x === void 0 ? L0 : x,
    j = e.analyticsContext,
    R = e.testId,
    T = e.isDisabled,
    U = z_(o, function () {
      return a || 0;
    }),
    z = K(U, 2),
    V = z[0],
    Y = z[1],
    G = di(
      U0(
        {
          fn: function (B, A) {
            var _e = B.event,
              ae = B.selectedPageIndex;
            (o === void 0 && Y(ae), O && O(_e, m[ae], A));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: j,
        },
        q0,
      ),
    ),
    $ = function (B, A, _e) {
      var ae = m[V],
        se = "".concat(l, " ").concat(S ? S(B, A) : B),
        le = B === ae;
      return E.createElement(
        Ki,
        { as: "li", xcss: ys.paginationMenuItem, key: "page-".concat(S ? S(B, A) : A) },
        E.createElement(
          T0,
          {
            component: n.Page,
            onClick: function (ue) {
              return G({ event: ue, selectedPageIndex: A });
            },
            "aria-current": le ? "page" : void 0,
            "aria-label": se,
            isSelected: le,
            isDisabled: T,
            page: B,
            testId:
              _e &&
              ""
                .concat(_e, "--")
                .concat(le ? "current-" : "", "page-")
                .concat(A),
          },
          S ? S(B, A) : B,
        ),
      );
    };
  return E.createElement(
    Ca,
    { testId: R, style: g, ref: t, "aria-label": s, as: "nav" },
    E.createElement(
      Ki,
      { space: "space.0", alignBlock: "center" },
      E.createElement(od, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (B) {
          return G({ event: B, selectedPageIndex: V - 1 });
        },
        isDisabled: T || V === 0,
        iconBefore: E.createElement(ld, { chevronDirection: "left" }),
        "aria-label": f,
        testId: R && "".concat(R, "--left-navigator"),
      }),
      E.createElement(
        Ki,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: ys.paginationMenu },
        z0(m, V, { max: y, ellipsis: D, transform: $ }, R),
      ),
      E.createElement(od, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (B) {
          return G({ event: B, selectedPageIndex: V + 1 });
        },
        isDisabled: T || V === m.length - 1,
        iconBefore: E.createElement(ld, { chevronDirection: "right" }),
        "aria-label": h,
        testId: R && "".concat(R, "--right-navigator"),
      }),
    ),
  );
}
var V0 = b.memo(b.forwardRef($0));
function G0(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, Yv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function Yv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Yv = function () {
    return !!e;
  })();
}
var H0 = (function (e) {
    function t() {
      var r;
      fe(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
      return (
        (r = G0(this, t, [].concat(i))),
        k(r, "onChange", function (o, u, s) {
          r.props.onChange(u, s);
        }),
        r
      );
    }
    return (
      ze(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.total,
              a = n.value,
              o = a === void 0 ? 1 : a,
              u = n.i18n,
              s = n.testId,
              c = n.isDisabled,
              l = Te(Array(i)).map(function (f, p) {
                return p + 1;
              }),
              d = o - 1;
            return E.createElement(V0, {
              selectedIndex: d,
              isDisabled: c,
              label: u?.label,
              nextLabel: u?.next,
              previousLabel: u?.prev,
              pageLabel: u?.pageLabel,
              onChange: this.onChange,
              pages: l,
              testId: s && "".concat(s, "--pagination"),
            });
          },
        },
      ])
    );
  })(E.Component),
  W0 = ["isRanking", "testId"],
  K0 = [
    "width",
    "children",
    "isSortable",
    "sortOrder",
    "isFixedSize",
    "shouldTruncate",
    "onClick",
    "style",
    "testId",
  ];
function dd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Wn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dd(Object(r), !0).forEach(function (n) {
          k(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : dd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var fd = "--local-dynamic-table-text-color",
  J0 = function (t) {
    var r = t.isRanking,
      n = t.testId,
      i = ne(t, W0);
    return b.createElement(
      "thead",
      te({ "data-testid": n }, i, { className: C(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  Y0 = b.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var i = e.sortOrder,
      a = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var u = e.style,
      s = e.testId,
      c = ne(e, K0),
      l = Wn(
        Wn(Wn({}, u), r && av({ width: r })),
        {},
        k({}, fd, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = i === ur,
      f = i === ua,
      p = function () {
        if (d) return "ascending";
        if (f) return "descending";
      },
      h = n ? "th" : "td";
    return b.createElement(
      h,
      te({ "aria-sort": p(), onClick: void 0, ref: t, "data-testid": s }, c, {
        className: C([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          a && o && "_1bto1l2s _o5721q9c",
          a && "_1reo15vq _18m915vq",
        ]),
        style: Wn(
          Wn({}, l),
          {},
          { "--_17ckjys": nv("var(--ds-text-subtle, ".concat("var(".concat(fd, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function X0(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, Xv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function Xv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Xv = function () {
    return !!e;
  })();
}
function Z0(e) {
  return (function (t) {
    function r() {
      var n;
      fe(this, r);
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return (
        (n = X0(this, r, [].concat(a))),
        k(n, "state", { refWidth: 0, refHeight: 0 }),
        k(n, "innerRef", function (u) {
          u && !n.props.isRanking && (n.ref = u);
        }),
        k(n, "updateDimensions", function () {
          if (n.ref) {
            var u = n.ref.getBoundingClientRect(),
              s = u.width,
              c = u.height;
            (s !== n.state.refWidth || c !== n.state.refHeight) &&
              n.setState({ refWidth: s, refHeight: c });
          }
        }),
        n
      );
    }
    return (
      ze(r, t),
      ve(r, [
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (i) {
            var a = this.props.isRanking,
              o = i.isRanking;
            o && !a && this.updateDimensions();
          },
        },
        {
          key: "render",
          value: function () {
            var i = this.state,
              a = i.refWidth,
              o = i.refHeight;
            return E.createElement(
              e,
              te({ refWidth: a, refHeight: o, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(E.Component);
}
var Kn = {},
  vd;
function Q0() {
  if (vd) return Kn;
  ((vd = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.default = void 0));
  var e = r(ut()),
    t = r(xa);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const n = (i) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ArrowDownIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M8.75 1v11.44l3.72-3.72 1.06 1.06-5 5a.75.75 0 0 1-1.06 0l-5-5 1.06-1.06 3.72 3.72V1z" clip-rule="evenodd"/>',
        },
        i,
      ),
    );
  return ((n.displayName = "ArrowDownIcon"), (Kn.default = n), Kn);
}
var ew = Q0();
const tw = Yt(ew);
var Jn = {},
  pd;
function rw() {
  if (pd) return Jn;
  ((pd = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.default = void 0));
  var e = r(ut()),
    t = r(xa);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const n = (i) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ArrowUpIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M8.75 15V3.56l3.72 3.72 1.06-1.06-5-5a.75.75 0 0 0-1.06 0l-5 5 1.06 1.06 3.72-3.72V15z" clip-rule="evenodd"/>',
        },
        i,
      ),
    );
  return ((n.displayName = "ArrowUpIcon"), (Jn.default = n), Jn);
}
var nw = rw();
const iw = Yt(nw);
var aw = "Escape";
function ow(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = b.useRef(!1),
    i = b.useCallback(
      function (o) {
        r || n.current || o.key !== aw || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    a = b.useCallback(function () {
      n.current = !1;
    }, []);
  b.useEffect(
    function () {
      if (!r)
        return Ra.bindAll(
          document,
          [
            { type: "keydown", listener: i },
            { type: "keyup", listener: a },
          ],
          { capture: !1 },
        );
    },
    [i, a, r],
  );
}
function Yn(e) {
  var t = b.useRef(e);
  return (
    b.useEffect(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
var sw = b.createContext(null),
  uw = b.createContext(null);
function cw() {
  var e = b.useContext(uw);
  return e;
}
function lw(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    i = b.useContext(sw),
    a = cw();
  b.useEffect(
    function () {
      if (i !== null && t) return i.onClose(n, { namespace: a, type: r });
    },
    [i, t, a, n, r],
  );
}
var ei = { none: 0, small: 100, medium: 350, large: 700 },
  Ho = 0.5,
  dw = { none: ei.none, small: ei.small * Ho, medium: ei.medium * Ho, large: ei.large * Ho },
  fw = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  vw = function () {
    if (!fw()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  pw = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  hw = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { cleanup: "unmount" },
      r = b.useRef([]);
    return (
      b.useEffect(function () {
        return function () {
          r.current.length &&
            (r.current.forEach(function (n) {
              return clearTimeout(n);
            }),
            (r.current = []));
        };
      }, pw(t)),
      b.useCallback(function (n, i) {
        for (var a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), u = 2; u < a; u++)
          o[u - 2] = arguments[u];
        var s = setTimeout.apply(
          void 0,
          [
            function () {
              ((r.current = r.current.filter(function (c) {
                return c !== s;
              })),
                n());
            },
            i,
          ].concat(o),
        );
        r.current.push(s);
      }, [])
    );
  },
  Zv = { appear: !0, isExiting: !1 },
  Qv = b.createContext(Zv),
  hd = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zv;
    return E.createElement(Qv.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  gd = function (t) {
    var r = [];
    return (
      b.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  gw = function (t, r) {
    for (var n = r.concat([]), i = _w(r), a = 0; a < t.length; a++) {
      var o = t[a],
        u = !i[o.key];
      u && n.splice(a + 1, 0, o);
    }
    return n;
  },
  _w = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  bw = function (t, r) {
    for (
      var n = new Set(
          t.map(function (s) {
            return s.key;
          }),
        ),
        i = new Set(),
        a = 0;
      a < r.length;
      a++
    ) {
      var o = r[a],
        u = o.key;
      n.has(u) || i.add(u);
    }
    return i;
  },
  ep = b.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      i = e.exitThenEnter,
      a = b.useState([null, n]),
      o = K(a, 2),
      u = o[0],
      s = o[1],
      c = b.useState([]),
      l = K(c, 2),
      d = l[0],
      f = l[1],
      p = b.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      h = K(p, 2),
      v = h[0],
      g = h[1];
    if (
      (b.useEffect(function () {
        v.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      typeof u == "boolean")
    )
      return n;
    var _ = K(u, 2),
      y = _[0],
      w = _[1],
      O = gd(y),
      m = gd(w);
    w !== n && s([w, n]);
    var S = bw(m, O),
      x = !!S.size,
      D = m;
    if ((x && (D = gw(m, O)), i))
      if (d.length) D = d;
      else {
        var j = D.filter(function (R) {
          return S.has(R.key);
        });
        j.length && f(j);
      }
    return (
      S.size
        ? (D = D.map(function (R) {
            var T = S.has(R.key);
            return hd(R, {
              appear: !0,
              isExiting: T,
              onFinish: T
                ? function () {
                    (S.delete(R.key), S.size === 0 && (s([null, n]), f([])));
                  }
                : void 0,
            });
          }))
        : (D = D.map(function (R) {
            return hd(R, v);
          })),
      D
    );
  }),
  yw = function () {
    return b.useContext(Qv);
  };
ep.displayName = "ExitingPersistence";
function mw() {
  var e = b.useRef("");
  return (
    e.current ||
      (e.current =
        "_" +
        (
          Number(String(Math.random()).slice(2)) +
          Date.now() +
          Math.round(performance.now())
        ).toString(36)),
    e.current
  );
}
var ww = b.createContext(function () {
    return { isReady: !0, delay: 0, ref: we };
  }),
  Ow = function () {
    var t = mw(),
      r = b.useContext(ww);
    return r(t);
  },
  Sw = function (t) {
    var r = t.children,
      n = t.animationTimingFunction,
      i = t.animationTimingFunctionExiting,
      a = i === void 0 ? n : i,
      o = t.enteringAnimation,
      u = t.exitingAnimation,
      s = u === void 0 ? o : u,
      c = t.isPaused,
      l = t.onFinish,
      d = t.duration,
      f = d === void 0 ? "large" : d,
      p = Ow(),
      h = yw(),
      v = h.isExiting,
      g = h.onFinish,
      _ = h.appear,
      y = hw(),
      w = c || !p.isReady,
      O = v ? 0 : p.delay,
      m = v ? "exiting" : "entering",
      S = b.useState(_),
      x = K(S, 2),
      D = x[0],
      j = x[1];
    return (
      b.useEffect(
        function () {
          var R = !1;
          if (!w) {
            if (!_) {
              l && l(m);
              return;
            }
            var T = function () {
              (m === "exiting" && g?.(), R || j(!1), l?.(m));
            };
            if (vw()) {
              T();
              return;
            }
            return (
              j(!0),
              y(T, v ? dw[f] : ei[f] + O),
              function () {
                R = !0;
              }
            );
          }
        },
        [g, m, v, f, O, w, y],
      ),
      r(
        {
          ref: p.ref,
          className: D
            ? C([
                C(["_1o51eoah _1y0co91m _1bumglyw _sedtglyw"]),
                w && C(["_1y0ctrqk"]),
                f === "small" && C(["_5sag1yx9"]),
                f === "medium" && C(["_5sag1ttt"]),
                f === "large" && C(["_5sagpwmj"]),
                v && f === "small" && C(["_5sag14ed"]),
                v && f === "medium" && C(["_5sagluct"]),
                v && f === "large" && C(["_5sag1ttt"]),
                v && C(["_ju255cps _1o51q7pw"]),
                !v && n === "linear" && C(["_1pglp3kn"]),
                !v && n === "ease-out" && C(["_1pgldkwg"]),
                !v && n === "ease-in" && C(["_1pgl1nzg"]),
                !v && n === "ease-in-40-out" && C(["_1pgl5y64"]),
                !v && n === "ease-in-60-out" && C(["_1pgl1ddy"]),
                !v && n === "ease-in-80-out" && C(["_1pglannl"]),
                !v && n === "ease-in-out" && C(["_1pgl1fu8"]),
                v && n === "linear" && C(["_1pglp3kn"]),
                v && a === "ease-out" && C(["_1pgldkwg"]),
                v && a === "ease-in" && C(["_1pgl1nzg"]),
                v && a === "ease-in-40-out" && C(["_1pgl5y64"]),
                v && a === "ease-in-60-out" && C(["_1pgl1ddy"]),
                v && a === "ease-in-80-out" && C(["_1pglannl"]),
                v && a === "ease-in-out" && C(["_1pgl1fu8"]),
                ((!v && o === "fade-in") || (v && s === "fade-in")) && C(["_j7hq1cgr"]),
                ((!v && o === "fade-out") || (v && s === "fade-out")) && C(["_j7hq1lln"]),
                ((!v && o === "zoom-in") || (v && s === "zoom-in")) && C(["_j7hqe8p0"]),
                ((!v && o === "zoom-out") || (v && s === "zoom-out")) && C(["_j7hqy6ql"]),
                ((!v && o === "slide-in-from-top") || (v && s === "slide-in-from-top")) &&
                  C(["_j7hqqshu"]),
                ((!v && o === "slide-out-from-top") || (v && s === "slide-out-from-top")) &&
                  C(["_j7hq7ri4"]),
                ((!v && o === "slide-in-from-right") || (v && s === "slide-in-from-right")) &&
                  C(["_j7hqdfjr"]),
                ((!v && o === "slide-out-from-right") || (v && s === "slide-out-from-right")) &&
                  C(["_j7hqonfj"]),
                ((!v && o === "slide-in-from-bottom") || (v && s === "slide-in-from-bottom")) &&
                  C(["_j7hq1liq"]),
                ((!v && o === "slide-out-from-bottom") || (v && s === "slide-out-from-bottom")) &&
                  C(["_j7hqhnf1"]),
                ((!v && o === "slide-in-from-left") || (v && s === "slide-in-from-left")) &&
                  C(["_j7hq1bh1"]),
                ((!v && o === "slide-out-from-left") || (v && s === "slide-out-from-left")) &&
                  C(["_j7hqj08w"]),
                ((!v && o === "fade-in-from-top") || (v && s === "fade-in-from-top")) &&
                  C(["_j7hq2iua"]),
                ((!v && o === "fade-out-from-top") || (v && s === "fade-out-from-top")) &&
                  C(["_j7hq39va"]),
                ((!v && o === "fade-in-from-left") || (v && s === "fade-in-from-left")) &&
                  C(["_j7hq15m2"]),
                ((!v && o === "fade-out-from-left") || (v && s === "fade-out-from-left")) &&
                  C(["_j7hq1yiv"]),
                ((!v && o === "fade-in-from-bottom") || (v && s === "fade-in-from-bottom")) &&
                  C(["_j7hq1w00"]),
                ((!v && o === "fade-out-from-bottom") || (v && s === "fade-out-from-bottom")) &&
                  C(["_j7hqzy3z"]),
                ((!v && o === "fade-in-from-right") || (v && s === "fade-in-from-right")) &&
                  C(["_j7hqpqak"]),
                ((!v && o === "fade-out-from-right") || (v && s === "fade-out-from-right")) &&
                  C(["_j7hq1ebg"]),
                ((!v && o === "fade-in-from-top-constant") ||
                  (v && s === "fade-in-from-top-constant")) &&
                  C(["_j7hqm2e2"]),
                ((!v && o === "fade-out-from-top-constant") ||
                  (v && s === "fade-out-from-top-constant")) &&
                  C(["_j7hq97jn"]),
                ((!v && o === "fade-in-from-left-constant") ||
                  (v && s === "fade-in-from-left-constant")) &&
                  C(["_j7hqovgq"]),
                ((!v && o === "fade-out-from-left-constant") ||
                  (v && s === "fade-out-from-left-constant")) &&
                  C(["_j7hq15do"]),
                ((!v && o === "fade-in-from-bottom-constant") ||
                  (v && s === "fade-in-from-bottom-constant")) &&
                  C(["_j7hq797a"]),
                ((!v && o === "fade-out-from-bottom-constant") ||
                  (v && s === "fade-out-from-bottom-constant")) &&
                  C(["_j7hqwo7r"]),
                ((!v && o === "fade-in-from-right-constant") ||
                  (v && s === "fade-in-from-right-constant")) &&
                  C(["_j7hqt8u5"]),
                ((!v && o === "fade-out-from-right-constant") ||
                  (v && s === "fade-out-from-right-constant")) &&
                  C(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(O, "ms") },
        },
        m,
      )
    );
  },
  Ew = { top: "bottom", bottom: "top", left: "right", right: "left" },
  kw = function (t) {
    var r = t.children,
      n = t.duration,
      i = n === void 0 ? "large" : n,
      a = t.entranceDirection,
      o = t.exitDirection,
      u = t.distance,
      s = u === void 0 ? "proportional" : u,
      c = t.onFinish,
      l = t.isPaused,
      d = a !== void 0 ? Ew[a] : void 0,
      f =
        o || d
          ? "fade-out-from-".concat(o || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return E.createElement(
      Sw,
      {
        duration: i,
        enteringAnimation: a
          ? "fade-in-from-".concat(a).concat(s === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: f,
        animationTimingFunction: "ease-in-out",
        onFinish: c,
        isPaused: l,
      },
      r,
    );
  },
  xw = b.createContext();
b.createContext();
var Cw = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  Rw = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
        n[i - 1] = arguments[i];
      return t.apply(void 0, n);
    }
  },
  Pw = function (t, r) {
    if (typeof t == "function") return Rw(t, r);
    t != null && (t.current = r);
  },
  _d = function (t) {
    return t.reduce(function (r, n) {
      var i = n[0],
        a = n[1];
      return ((r[i] = a), r);
    }, {});
  },
  bd =
    typeof window < "u" && window.document && window.document.createElement
      ? b.useLayoutEffect
      : b.useEffect,
  Pe = "top",
  Ze = "bottom",
  Qe = "right",
  Ae = "left",
  Zs = "auto",
  Ei = [Pe, Ze, Qe, Ae],
  Fr = "start",
  gi = "end",
  Aw = "clippingParents",
  tp = "viewport",
  Xn = "popper",
  jw = "reference",
  yd = Ei.reduce(function (e, t) {
    return e.concat([t + "-" + Fr, t + "-" + gi]);
  }, []),
  rp = [].concat(Ei, [Zs]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Fr, t + "-" + gi]);
  }, []),
  Iw = "beforeRead",
  Dw = "read",
  Tw = "afterRead",
  Mw = "beforeMain",
  Lw = "main",
  Fw = "afterMain",
  Bw = "beforeWrite",
  Nw = "write",
  zw = "afterWrite",
  Uw = [Iw, Dw, Tw, Mw, Lw, Fw, Bw, Nw, zw];
function Ot(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Be(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function cr(e) {
  var t = Be(e).Element;
  return e instanceof t || e instanceof Element;
}
function Xe(e) {
  var t = Be(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Qs(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Be(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function qw(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      i = t.attributes[r] || {},
      a = t.elements[r];
    !Xe(a) ||
      !Ot(a) ||
      (Object.assign(a.style, n),
      Object.keys(i).forEach(function (o) {
        var u = i[o];
        u === !1 ? a.removeAttribute(o) : a.setAttribute(o, u === !0 ? "" : u);
      }));
  });
}
function $w(e) {
  var t = e.state,
    r = {
      popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var i = t.elements[n],
          a = t.attributes[n] || {},
          o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          u = o.reduce(function (s, c) {
            return ((s[c] = ""), s);
          }, {});
        !Xe(i) ||
          !Ot(i) ||
          (Object.assign(i.style, u),
          Object.keys(a).forEach(function (s) {
            i.removeAttribute(s);
          }));
      });
    }
  );
}
const Vw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: qw,
  effect: $w,
  requires: ["computeStyles"],
};
function _t(e) {
  return e.split("-")[0];
}
var or = Math.max,
  fa = Math.min,
  Br = Math.round;
function ms() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function np() {
  return !/^((?!chrome|android).)*safari/i.test(ms());
}
function Nr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    i = 1,
    a = 1;
  t &&
    Xe(e) &&
    ((i = (e.offsetWidth > 0 && Br(n.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && Br(n.height) / e.offsetHeight) || 1));
  var o = cr(e) ? Be(e) : window,
    u = o.visualViewport,
    s = !np() && r,
    c = (n.left + (s && u ? u.offsetLeft : 0)) / i,
    l = (n.top + (s && u ? u.offsetTop : 0)) / a,
    d = n.width / i,
    f = n.height / a;
  return { width: d, height: f, top: l, right: c + d, bottom: l + f, left: c, x: c, y: l };
}
function eu(e) {
  var t = Nr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function ip(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Qs(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Nt(e) {
  return Be(e).getComputedStyle(e);
}
function Gw(e) {
  return ["table", "td", "th"].indexOf(Ot(e)) >= 0;
}
function Xt(e) {
  return ((cr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ia(e) {
  return Ot(e) === "html" ? e : e.assignedSlot || e.parentNode || (Qs(e) ? e.host : null) || Xt(e);
}
function md(e) {
  return !Xe(e) || Nt(e).position === "fixed" ? null : e.offsetParent;
}
function Hw(e) {
  var t = /firefox/i.test(ms()),
    r = /Trident/i.test(ms());
  if (r && Xe(e)) {
    var n = Nt(e);
    if (n.position === "fixed") return null;
  }
  var i = Ia(e);
  for (Qs(i) && (i = i.host); Xe(i) && ["html", "body"].indexOf(Ot(i)) < 0; ) {
    var a = Nt(i);
    if (
      a.transform !== "none" ||
      a.perspective !== "none" ||
      a.contain === "paint" ||
      ["transform", "perspective"].indexOf(a.willChange) !== -1 ||
      (t && a.willChange === "filter") ||
      (t && a.filter && a.filter !== "none")
    )
      return i;
    i = i.parentNode;
  }
  return null;
}
function ki(e) {
  for (var t = Be(e), r = md(e); r && Gw(r) && Nt(r).position === "static"; ) r = md(r);
  return r && (Ot(r) === "html" || (Ot(r) === "body" && Nt(r).position === "static"))
    ? t
    : r || Hw(e) || t;
}
function tu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ii(e, t, r) {
  return or(e, fa(t, r));
}
function Ww(e, t, r) {
  var n = ii(e, t, r);
  return n > r ? r : n;
}
function ap() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function op(e) {
  return Object.assign({}, ap(), e);
}
function sp(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var Kw = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    op(typeof t != "number" ? t : sp(t, Ei))
  );
};
function Jw(e) {
  var t,
    r = e.state,
    n = e.name,
    i = e.options,
    a = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    u = _t(r.placement),
    s = tu(u),
    c = [Ae, Qe].indexOf(u) >= 0,
    l = c ? "height" : "width";
  if (!(!a || !o)) {
    var d = Kw(i.padding, r),
      f = eu(a),
      p = s === "y" ? Pe : Ae,
      h = s === "y" ? Ze : Qe,
      v = r.rects.reference[l] + r.rects.reference[s] - o[s] - r.rects.popper[l],
      g = o[s] - r.rects.reference[s],
      _ = ki(a),
      y = _ ? (s === "y" ? _.clientHeight || 0 : _.clientWidth || 0) : 0,
      w = v / 2 - g / 2,
      O = d[p],
      m = y - f[l] - d[h],
      S = y / 2 - f[l] / 2 + w,
      x = ii(O, S, m),
      D = s;
    r.modifiersData[n] = ((t = {}), (t[D] = x), (t.centerOffset = x - S), t);
  }
}
function Yw(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null &&
    ((typeof i == "string" && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (ip(t.elements.popper, i) && (t.elements.arrow = i)));
}
const Xw = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Jw,
  effect: Yw,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function zr(e) {
  return e.split("-")[1];
}
var Zw = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Qw(e, t) {
  var r = e.x,
    n = e.y,
    i = t.devicePixelRatio || 1;
  return { x: Br(r * i) / i || 0, y: Br(n * i) / i || 0 };
}
function wd(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    i = e.placement,
    a = e.variation,
    o = e.offsets,
    u = e.position,
    s = e.gpuAcceleration,
    c = e.adaptive,
    l = e.roundOffsets,
    d = e.isFixed,
    f = o.x,
    p = f === void 0 ? 0 : f,
    h = o.y,
    v = h === void 0 ? 0 : h,
    g = typeof l == "function" ? l({ x: p, y: v }) : { x: p, y: v };
  ((p = g.x), (v = g.y));
  var _ = o.hasOwnProperty("x"),
    y = o.hasOwnProperty("y"),
    w = Ae,
    O = Pe,
    m = window;
  if (c) {
    var S = ki(r),
      x = "clientHeight",
      D = "clientWidth";
    if (
      (S === Be(r) &&
        ((S = Xt(r)),
        Nt(S).position !== "static" &&
          u === "absolute" &&
          ((x = "scrollHeight"), (D = "scrollWidth"))),
      (S = S),
      i === Pe || ((i === Ae || i === Qe) && a === gi))
    ) {
      O = Ze;
      var j = d && S === m && m.visualViewport ? m.visualViewport.height : S[x];
      ((v -= j - n.height), (v *= s ? 1 : -1));
    }
    if (i === Ae || ((i === Pe || i === Ze) && a === gi)) {
      w = Qe;
      var R = d && S === m && m.visualViewport ? m.visualViewport.width : S[D];
      ((p -= R - n.width), (p *= s ? 1 : -1));
    }
  }
  var T = Object.assign({ position: u }, c && Zw),
    U = l === !0 ? Qw({ x: p, y: v }, Be(r)) : { x: p, y: v };
  if (((p = U.x), (v = U.y), s)) {
    var z;
    return Object.assign(
      {},
      T,
      ((z = {}),
      (z[O] = y ? "0" : ""),
      (z[w] = _ ? "0" : ""),
      (z.transform =
        (m.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + v + "px)"
          : "translate3d(" + p + "px, " + v + "px, 0)"),
      z),
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}), (t[O] = y ? v + "px" : ""), (t[w] = _ ? p + "px" : ""), (t.transform = ""), t),
  );
}
function eO(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    i = n === void 0 ? !0 : n,
    a = r.adaptive,
    o = a === void 0 ? !0 : a,
    u = r.roundOffsets,
    s = u === void 0 ? !0 : u,
    c = {
      placement: _t(t.placement),
      variation: zr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      wd(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: o,
          roundOffsets: s,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        wd(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: s,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    })));
}
const tO = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: eO, data: {} };
var $i = { passive: !0 };
function rO(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    i = n.scroll,
    a = i === void 0 ? !0 : i,
    o = n.resize,
    u = o === void 0 ? !0 : o,
    s = Be(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    a &&
      c.forEach(function (l) {
        l.addEventListener("scroll", r.update, $i);
      }),
    u && s.addEventListener("resize", r.update, $i),
    function () {
      (a &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", r.update, $i);
        }),
        u && s.removeEventListener("resize", r.update, $i));
    }
  );
}
const nO = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: rO,
  data: {},
};
var iO = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Qi(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return iO[t];
  });
}
var aO = { start: "end", end: "start" };
function Od(e) {
  return e.replace(/start|end/g, function (t) {
    return aO[t];
  });
}
function ru(e) {
  var t = Be(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function nu(e) {
  return Nr(Xt(e)).left + ru(e).scrollLeft;
}
function oO(e, t) {
  var r = Be(e),
    n = Xt(e),
    i = r.visualViewport,
    a = n.clientWidth,
    o = n.clientHeight,
    u = 0,
    s = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    var c = np();
    (c || (!c && t === "fixed")) && ((u = i.offsetLeft), (s = i.offsetTop));
  }
  return { width: a, height: o, x: u + nu(e), y: s };
}
function sO(e) {
  var t,
    r = Xt(e),
    n = ru(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    a = or(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
    o = or(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
    u = -n.scrollLeft + nu(e),
    s = -n.scrollTop;
  return (
    Nt(i || r).direction === "rtl" && (u += or(r.clientWidth, i ? i.clientWidth : 0) - a),
    { width: a, height: o, x: u, y: s }
  );
}
function iu(e) {
  var t = Nt(e),
    r = t.overflow,
    n = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function up(e) {
  return ["html", "body", "#document"].indexOf(Ot(e)) >= 0
    ? e.ownerDocument.body
    : Xe(e) && iu(e)
      ? e
      : up(Ia(e));
}
function ai(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = up(e),
    i = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = Be(n),
    o = i ? [a].concat(a.visualViewport || [], iu(n) ? n : []) : n,
    u = t.concat(o);
  return i ? u : u.concat(ai(Ia(o)));
}
function ws(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function uO(e, t) {
  var r = Nr(e, !1, t === "fixed");
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function Sd(e, t, r) {
  return t === tp ? ws(oO(e, r)) : cr(t) ? uO(t, r) : ws(sO(Xt(e)));
}
function cO(e) {
  var t = ai(Ia(e)),
    r = ["absolute", "fixed"].indexOf(Nt(e).position) >= 0,
    n = r && Xe(e) ? ki(e) : e;
  return cr(n)
    ? t.filter(function (i) {
        return cr(i) && ip(i, n) && Ot(i) !== "body";
      })
    : [];
}
function lO(e, t, r, n) {
  var i = t === "clippingParents" ? cO(e) : [].concat(t),
    a = [].concat(i, [r]),
    o = a[0],
    u = a.reduce(
      function (s, c) {
        var l = Sd(e, c, n);
        return (
          (s.top = or(l.top, s.top)),
          (s.right = fa(l.right, s.right)),
          (s.bottom = fa(l.bottom, s.bottom)),
          (s.left = or(l.left, s.left)),
          s
        );
      },
      Sd(e, o, n),
    );
  return (
    (u.width = u.right - u.left),
    (u.height = u.bottom - u.top),
    (u.x = u.left),
    (u.y = u.top),
    u
  );
}
function cp(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    i = n ? _t(n) : null,
    a = n ? zr(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    s;
  switch (i) {
    case Pe:
      s = { x: o, y: t.y - r.height };
      break;
    case Ze:
      s = { x: o, y: t.y + t.height };
      break;
    case Qe:
      s = { x: t.x + t.width, y: u };
      break;
    case Ae:
      s = { x: t.x - r.width, y: u };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var c = i ? tu(i) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (a) {
      case Fr:
        s[c] = s[c] - (t[l] / 2 - r[l] / 2);
        break;
      case gi:
        s[c] = s[c] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function _i(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = n === void 0 ? e.placement : n,
    a = r.strategy,
    o = a === void 0 ? e.strategy : a,
    u = r.boundary,
    s = u === void 0 ? Aw : u,
    c = r.rootBoundary,
    l = c === void 0 ? tp : c,
    d = r.elementContext,
    f = d === void 0 ? Xn : d,
    p = r.altBoundary,
    h = p === void 0 ? !1 : p,
    v = r.padding,
    g = v === void 0 ? 0 : v,
    _ = op(typeof g != "number" ? g : sp(g, Ei)),
    y = f === Xn ? jw : Xn,
    w = e.rects.popper,
    O = e.elements[h ? y : f],
    m = lO(cr(O) ? O : O.contextElement || Xt(e.elements.popper), s, l, o),
    S = Nr(e.elements.reference),
    x = cp({ reference: S, element: w, placement: i }),
    D = ws(Object.assign({}, w, x)),
    j = f === Xn ? D : S,
    R = {
      top: m.top - j.top + _.top,
      bottom: j.bottom - m.bottom + _.bottom,
      left: m.left - j.left + _.left,
      right: j.right - m.right + _.right,
    },
    T = e.modifiersData.offset;
  if (f === Xn && T) {
    var U = T[i];
    Object.keys(R).forEach(function (z) {
      var V = [Qe, Ze].indexOf(z) >= 0 ? 1 : -1,
        Y = [Pe, Ze].indexOf(z) >= 0 ? "y" : "x";
      R[z] += U[Y] * V;
    });
  }
  return R;
}
function dO(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = r.boundary,
    a = r.rootBoundary,
    o = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    c = s === void 0 ? rp : s,
    l = zr(n),
    d = l
      ? u
        ? yd
        : yd.filter(function (h) {
            return zr(h) === l;
          })
      : Ei,
    f = d.filter(function (h) {
      return c.indexOf(h) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (h, v) {
    return ((h[v] = _i(e, { placement: v, boundary: i, rootBoundary: a, padding: o })[_t(v)]), h);
  }, {});
  return Object.keys(p).sort(function (h, v) {
    return p[h] - p[v];
  });
}
function fO(e) {
  if (_t(e) === Zs) return [];
  var t = Qi(e);
  return [Od(e), t, Od(t)];
}
function vO(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var i = r.mainAxis,
        a = i === void 0 ? !0 : i,
        o = r.altAxis,
        u = o === void 0 ? !0 : o,
        s = r.fallbackPlacements,
        c = r.padding,
        l = r.boundary,
        d = r.rootBoundary,
        f = r.altBoundary,
        p = r.flipVariations,
        h = p === void 0 ? !0 : p,
        v = r.allowedAutoPlacements,
        g = t.options.placement,
        _ = _t(g),
        y = _ === g,
        w = s || (y || !h ? [Qi(g)] : fO(g)),
        O = [g].concat(w).reduce(function (le, ge) {
          return le.concat(
            _t(ge) === Zs
              ? dO(t, {
                  placement: ge,
                  boundary: l,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: h,
                  allowedAutoPlacements: v,
                })
              : ge,
          );
        }, []),
        m = t.rects.reference,
        S = t.rects.popper,
        x = new Map(),
        D = !0,
        j = O[0],
        R = 0;
      R < O.length;
      R++
    ) {
      var T = O[R],
        U = _t(T),
        z = zr(T) === Fr,
        V = [Pe, Ze].indexOf(U) >= 0,
        Y = V ? "width" : "height",
        G = _i(t, { placement: T, boundary: l, rootBoundary: d, altBoundary: f, padding: c }),
        $ = V ? (z ? Qe : Ae) : z ? Ze : Pe;
      m[Y] > S[Y] && ($ = Qi($));
      var X = Qi($),
        B = [];
      if (
        (a && B.push(G[U] <= 0),
        u && B.push(G[$] <= 0, G[X] <= 0),
        B.every(function (le) {
          return le;
        }))
      ) {
        ((j = T), (D = !1));
        break;
      }
      x.set(T, B);
    }
    if (D)
      for (
        var A = h ? 3 : 1,
          _e = function (ge) {
            var ue = O.find(function (qe) {
              var Oe = x.get(qe);
              if (Oe)
                return Oe.slice(0, ge).every(function (et) {
                  return et;
                });
            });
            if (ue) return ((j = ue), "break");
          },
          ae = A;
        ae > 0;
        ae--
      ) {
        var se = _e(ae);
        if (se === "break") break;
      }
    t.placement !== j && ((t.modifiersData[n]._skip = !0), (t.placement = j), (t.reset = !0));
  }
}
const pO = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: vO,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Ed(e, t, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  );
}
function kd(e) {
  return [Pe, Qe, Ze, Ae].some(function (t) {
    return e[t] >= 0;
  });
}
function hO(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    i = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    o = _i(t, { elementContext: "reference" }),
    u = _i(t, { altBoundary: !0 }),
    s = Ed(o, n),
    c = Ed(u, i, a),
    l = kd(s),
    d = kd(c);
  ((t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: c,
    isReferenceHidden: l,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": l,
      "data-popper-escaped": d,
    })));
}
const gO = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hO,
};
function _O(e, t, r) {
  var n = _t(e),
    i = [Ae, Pe].indexOf(n) >= 0 ? -1 : 1,
    a = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = a[0],
    u = a[1];
  return (
    (o = o || 0),
    (u = (u || 0) * i),
    [Ae, Qe].indexOf(n) >= 0 ? { x: u, y: o } : { x: o, y: u }
  );
}
function bO(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    i = r.offset,
    a = i === void 0 ? [0, 0] : i,
    o = rp.reduce(function (l, d) {
      return ((l[d] = _O(d, t.rects, a)), l);
    }, {}),
    u = o[t.placement],
    s = u.x,
    c = u.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o));
}
const yO = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: bO };
function mO(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = cp({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const wO = { name: "popperOffsets", enabled: !0, phase: "read", fn: mO, data: {} };
function OO(e) {
  return e === "x" ? "y" : "x";
}
function SO(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    i = r.mainAxis,
    a = i === void 0 ? !0 : i,
    o = r.altAxis,
    u = o === void 0 ? !1 : o,
    s = r.boundary,
    c = r.rootBoundary,
    l = r.altBoundary,
    d = r.padding,
    f = r.tether,
    p = f === void 0 ? !0 : f,
    h = r.tetherOffset,
    v = h === void 0 ? 0 : h,
    g = _i(t, { boundary: s, rootBoundary: c, padding: d, altBoundary: l }),
    _ = _t(t.placement),
    y = zr(t.placement),
    w = !y,
    O = tu(_),
    m = OO(O),
    S = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    D = t.rects.popper,
    j = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v,
    R =
      typeof j == "number"
        ? { mainAxis: j, altAxis: j }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, j),
    T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    U = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var z,
        V = O === "y" ? Pe : Ae,
        Y = O === "y" ? Ze : Qe,
        G = O === "y" ? "height" : "width",
        $ = S[O],
        X = $ + g[V],
        B = $ - g[Y],
        A = p ? -D[G] / 2 : 0,
        _e = y === Fr ? x[G] : D[G],
        ae = y === Fr ? -D[G] : -x[G],
        se = t.elements.arrow,
        le = p && se ? eu(se) : { width: 0, height: 0 },
        ge = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : ap(),
        ue = ge[V],
        qe = ge[Y],
        Oe = ii(0, x[G], le[G]),
        et = w ? x[G] / 2 - A - Oe - ue - R.mainAxis : _e - Oe - ue - R.mainAxis,
        pe = w ? -x[G] / 2 + A + Oe + qe + R.mainAxis : ae + Oe + qe + R.mainAxis,
        $e = t.elements.arrow && ki(t.elements.arrow),
        br = $e ? (O === "y" ? $e.clientTop || 0 : $e.clientLeft || 0) : 0,
        Ct = (z = T?.[O]) != null ? z : 0,
        Ee = $ + et - Ct - br,
        ke = $ + pe - Ct,
        Ut = ii(p ? fa(X, Ee) : X, $, p ? or(B, ke) : B);
      ((S[O] = Ut), (U[O] = Ut - $));
    }
    if (u) {
      var lt,
        tt = O === "x" ? Pe : Ae,
        qt = O === "x" ? Ze : Qe,
        Ve = S[m],
        De = m === "y" ? "height" : "width",
        xe = Ve + g[tt],
        rt = Ve - g[qt],
        $t = [Pe, Ae].indexOf(_) !== -1,
        Ii = (lt = T?.[m]) != null ? lt : 0,
        Di = $t ? xe : Ve - x[De] - D[De] - Ii + R.altAxis,
        Ti = $t ? Ve + x[De] + D[De] - Ii - R.altAxis : rt,
        Mi = p && $t ? Ww(Di, Ve, Ti) : ii(p ? Di : xe, Ve, p ? Ti : rt);
      ((S[m] = Mi), (U[m] = Mi - Ve));
    }
    t.modifiersData[n] = U;
  }
}
const EO = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: SO,
  requiresIfExists: ["offset"],
};
function kO(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function xO(e) {
  return e === Be(e) || !Xe(e) ? ru(e) : kO(e);
}
function CO(e) {
  var t = e.getBoundingClientRect(),
    r = Br(t.width) / e.offsetWidth || 1,
    n = Br(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function RO(e, t, r) {
  r === void 0 && (r = !1);
  var n = Xe(t),
    i = Xe(t) && CO(t),
    a = Xt(t),
    o = Nr(e, i, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Ot(t) !== "body" || iu(a)) && (u = xO(t)),
      Xe(t) ? ((s = Nr(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : a && (s.x = nu(a))),
    {
      x: o.left + u.scrollLeft - s.x,
      y: o.top + u.scrollTop - s.y,
      width: o.width,
      height: o.height,
    }
  );
}
function PO(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (a) {
    t.set(a.name, a);
  });
  function i(a) {
    r.add(a.name);
    var o = [].concat(a.requires || [], a.requiresIfExists || []);
    (o.forEach(function (u) {
      if (!r.has(u)) {
        var s = t.get(u);
        s && i(s);
      }
    }),
      n.push(a));
  }
  return (
    e.forEach(function (a) {
      r.has(a.name) || i(a);
    }),
    n
  );
}
function AO(e) {
  var t = PO(e);
  return Uw.reduce(function (r, n) {
    return r.concat(
      t.filter(function (i) {
        return i.phase === n;
      }),
    );
  }, []);
}
function jO(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            ((t = void 0), r(e()));
          });
        })),
      t
    );
  };
}
function IO(e) {
  var t = e.reduce(function (r, n) {
    var i = r[n.name];
    return (
      (r[n.name] = i
        ? Object.assign({}, i, n, {
            options: Object.assign({}, i.options, n.options),
            data: Object.assign({}, i.data, n.data),
          })
        : n),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var xd = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Cd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function DO(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    i = t.defaultOptions,
    a = i === void 0 ? xd : i;
  return function (u, s, c) {
    c === void 0 && (c = a);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, xd, a),
        modifiersData: {},
        elements: { reference: u, popper: s },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      p = {
        state: l,
        setOptions: function (_) {
          var y = typeof _ == "function" ? _(l.options) : _;
          (v(),
            (l.options = Object.assign({}, a, l.options, y)),
            (l.scrollParents = {
              reference: cr(u) ? ai(u) : u.contextElement ? ai(u.contextElement) : [],
              popper: ai(s),
            }));
          var w = AO(IO([].concat(n, l.options.modifiers)));
          return (
            (l.orderedModifiers = w.filter(function (O) {
              return O.enabled;
            })),
            h(),
            p.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var _ = l.elements,
              y = _.reference,
              w = _.popper;
            if (Cd(y, w)) {
              ((l.rects = {
                reference: RO(y, ki(w), l.options.strategy === "fixed"),
                popper: eu(w),
              }),
                (l.reset = !1),
                (l.placement = l.options.placement),
                l.orderedModifiers.forEach(function (R) {
                  return (l.modifiersData[R.name] = Object.assign({}, R.data));
                }));
              for (var O = 0; O < l.orderedModifiers.length; O++) {
                if (l.reset === !0) {
                  ((l.reset = !1), (O = -1));
                  continue;
                }
                var m = l.orderedModifiers[O],
                  S = m.fn,
                  x = m.options,
                  D = x === void 0 ? {} : x,
                  j = m.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: D, name: j, instance: p }) || l);
              }
            }
          }
        },
        update: jO(function () {
          return new Promise(function (g) {
            (p.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (v(), (f = !0));
        },
      };
    if (!Cd(u, s)) return p;
    p.setOptions(c).then(function (g) {
      !f && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function h() {
      l.orderedModifiers.forEach(function (g) {
        var _ = g.name,
          y = g.options,
          w = y === void 0 ? {} : y,
          O = g.effect;
        if (typeof O == "function") {
          var m = O({ state: l, name: _, instance: p, options: w }),
            S = function () {};
          d.push(m || S);
        }
      });
    }
    function v() {
      (d.forEach(function (g) {
        return g();
      }),
        (d = []));
    }
    return p;
  };
}
var TO = [nO, wO, tO, Vw, yO, pO, EO, Xw, gO],
  MO = DO({ defaultModifiers: TO }),
  Wo,
  Rd;
function LO() {
  if (Rd) return Wo;
  Rd = 1;
  var e = typeof Element < "u",
    t = typeof Map == "function",
    r = typeof Set == "function",
    n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function i(a, o) {
    if (a === o) return !0;
    if (a && o && typeof a == "object" && typeof o == "object") {
      if (a.constructor !== o.constructor) return !1;
      var u, s, c;
      if (Array.isArray(a)) {
        if (((u = a.length), u != o.length)) return !1;
        for (s = u; s-- !== 0; ) if (!i(a[s], o[s])) return !1;
        return !0;
      }
      var l;
      if (t && a instanceof Map && o instanceof Map) {
        if (a.size !== o.size) return !1;
        for (l = a.entries(); !(s = l.next()).done; ) if (!o.has(s.value[0])) return !1;
        for (l = a.entries(); !(s = l.next()).done; )
          if (!i(s.value[1], o.get(s.value[0]))) return !1;
        return !0;
      }
      if (r && a instanceof Set && o instanceof Set) {
        if (a.size !== o.size) return !1;
        for (l = a.entries(); !(s = l.next()).done; ) if (!o.has(s.value[0])) return !1;
        return !0;
      }
      if (n && ArrayBuffer.isView(a) && ArrayBuffer.isView(o)) {
        if (((u = a.length), u != o.length)) return !1;
        for (s = u; s-- !== 0; ) if (a[s] !== o[s]) return !1;
        return !0;
      }
      if (a.constructor === RegExp) return a.source === o.source && a.flags === o.flags;
      if (
        a.valueOf !== Object.prototype.valueOf &&
        typeof a.valueOf == "function" &&
        typeof o.valueOf == "function"
      )
        return a.valueOf() === o.valueOf();
      if (
        a.toString !== Object.prototype.toString &&
        typeof a.toString == "function" &&
        typeof o.toString == "function"
      )
        return a.toString() === o.toString();
      if (((c = Object.keys(a)), (u = c.length), u !== Object.keys(o).length)) return !1;
      for (s = u; s-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(o, c[s])) return !1;
      if (e && a instanceof Element) return !1;
      for (s = u; s-- !== 0; )
        if (
          !((c[s] === "_owner" || c[s] === "__v" || c[s] === "__o") && a.$$typeof) &&
          !i(a[c[s]], o[c[s]])
        )
          return !1;
      return !0;
    }
    return a !== a && o !== o;
  }
  return (
    (Wo = function (o, u) {
      try {
        return i(o, u);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    Wo
  );
}
var FO = LO();
const BO = Yt(FO);
var NO = [],
  zO = function (t, r, n) {
    n === void 0 && (n = {});
    var i = b.useRef(null),
      a = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || NO,
      },
      o = b.useState({
        styles: {
          popper: { position: a.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      u = o[0],
      s = o[1],
      c = b.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (p) {
            var h = p.state,
              v = Object.keys(h.elements);
            Oa.flushSync(function () {
              s({
                styles: _d(
                  v.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: _d(
                  v.map(function (g) {
                    return [g, h.attributes[g]];
                  }),
                ),
              });
            });
          },
          requires: ["computeStyles"],
        };
      }, []),
      l = b.useMemo(
        function () {
          var f = {
            onFirstUpdate: a.onFirstUpdate,
            placement: a.placement,
            strategy: a.strategy,
            modifiers: [].concat(a.modifiers, [c, { name: "applyStyles", enabled: !1 }]),
          };
          return BO(i.current, f) ? i.current || f : ((i.current = f), f);
        },
        [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, c],
      ),
      d = b.useRef();
    return (
      bd(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      bd(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || MO,
              p = f(t, r, l);
            return (
              (d.current = p),
              function () {
                (p.destroy(), (d.current = null));
              }
            );
          }
        },
        [t, r, n.createPopper],
      ),
      {
        state: d.current ? d.current.state : null,
        styles: u.styles,
        attributes: u.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  },
  UO = function () {},
  qO = function () {
    return Promise.resolve(null);
  },
  $O = [];
function VO(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    i = n === void 0 ? "absolute" : n,
    a = e.modifiers,
    o = a === void 0 ? $O : a,
    u = e.referenceElement,
    s = e.onFirstUpdate,
    c = e.innerRef,
    l = e.children,
    d = b.useContext(xw),
    f = b.useState(null),
    p = f[0],
    h = f[1],
    v = b.useState(null),
    g = v[0],
    _ = v[1];
  b.useEffect(
    function () {
      Pw(c, p);
    },
    [c, p],
  );
  var y = b.useMemo(
      function () {
        return {
          placement: r,
          strategy: i,
          onFirstUpdate: s,
          modifiers: [].concat(o, [{ name: "arrow", enabled: g != null, options: { element: g } }]),
        };
      },
      [r, i, s, o, g],
    ),
    w = zO(u || d, p, y),
    O = w.state,
    m = w.styles,
    S = w.forceUpdate,
    x = w.update,
    D = b.useMemo(
      function () {
        return {
          ref: h,
          style: m.popper,
          placement: O ? O.placement : r,
          hasPopperEscaped:
            O && O.modifiersData.hide ? O.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            O && O.modifiersData.hide ? O.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: m.arrow, ref: _ },
          forceUpdate: S || UO,
          update: x || qO,
        };
      },
      [h, _, r, O, m, x, S],
    );
  return Cw(l)(D);
}
function GO(e) {
  var t = e.viewportPadding;
  return [
    {
      name: "maxSizeData",
      enabled: !0,
      phase: "read",
      fn: function (n) {
        var i = n.state,
          a = n.name;
        window.visualViewport &&
          (i.modifiersData[a] = {
            viewport: { width: window.visualViewport.width, height: window.visualViewport.height },
          });
      },
    },
    {
      name: "maxSize",
      enabled: !0,
      phase: "beforeWrite",
      requiresIfExists: ["offset", "preventOverflow", "flip"],
      fn: function (n) {
        var i,
          a,
          o,
          u,
          s = n.state,
          c = s.modifiersData.maxSizeData;
        if (
          !(
            typeof (c == null || (i = c.viewport) === null || i === void 0 ? void 0 : i.width) !=
              "number" ||
            typeof (c == null || (a = c.viewport) === null || a === void 0 ? void 0 : a.height) !=
              "number"
          )
        ) {
          var l = c.viewport,
            d = s.modifiersData.popperOffsets,
            f = d === void 0 ? { x: 0, y: 0 } : d,
            p = s.placement.split("-"),
            h = K(p, 1),
            v = h[0],
            g =
              (o =
                (u = s.modifiersData) === null ||
                u === void 0 ||
                (u = u.offset) === null ||
                u === void 0
                  ? void 0
                  : u[s.placement]) !== null && o !== void 0
                ? o
                : { x: 0, y: 0 },
            _ = l.width - 2 * t,
            y = l.height - 2 * t;
          (v === "top" && (y = s.rects.reference.y + g.y - t),
            v === "bottom" && (y = l.height - f.y - t),
            v === "left" && (_ = s.rects.reference.x + g.x - t),
            v === "right" && (_ = l.width - f.x - t),
            (s.styles.popper.maxWidth = "".concat(_, "px")),
            (s.styles.popper.maxHeight = "".concat(y, "px")));
        }
      },
    },
  ];
}
var Os = 5,
  HO = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: Os,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function WO() {
  return null;
}
var KO = [0, 8];
function JO(e) {
  var t = e.children,
    r = t === void 0 ? WO : t,
    n = e.offset,
    i = n === void 0 ? KO : n,
    a = e.placement,
    o = a === void 0 ? "bottom-start" : a,
    u = e.referenceElement,
    s = u === void 0 ? void 0 : u,
    c = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    f = e.shouldFitViewport,
    p = f === void 0 ? !1 : f,
    h = K(i, 2),
    v = h[0],
    g = h[1],
    _ = b.useMemo(
      function () {
        var w = {
            name: "preventOverflow",
            options: { padding: Os, rootBoundary: p ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [v, g] } },
          m = p ? GO({ viewportPadding: Os }) : [];
        return [].concat(HO, [w, O], Te(m));
      },
      [v, g, p],
    ),
    y = b.useMemo(
      function () {
        return c == null ? _ : [].concat(Te(_), Te(c));
      },
      [_, c],
    );
  return E.createElement(VO, { modifiers: y, placement: o, strategy: d, referenceElement: s }, r);
}
var lp = "atlaskit-portal-container",
  dp = "body > .atlaskit-portal-container",
  fp = "atlaskit-portal",
  YO = function (t) {
    var r = document.createElement("div");
    return ((r.className = fp), (r.style.zIndex = "".concat(t)), r);
  },
  vp = function () {
    return document.body;
  },
  pp = function () {
    var t = document.querySelector(dp);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = lp),
        (n.style.display = "flex"),
        (r = vp()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  XO = function (t) {
    pp().removeChild(t);
  },
  ZO = function (t) {
    t.parentElement || pp().appendChild(t);
  },
  hp = function () {
    return document !== void 0;
  },
  QO = function (t) {
    if (hp()) {
      var r = document.createElement("div");
      return ((r.className = fp), (r.style.zIndex = "".concat(t)), r);
    }
  },
  e1 = function () {
    if (hp()) {
      var t = document.querySelector(dp);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = lp),
          (n.style.display = "flex"),
          (r = vp()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function t1(e) {
  var t = e.zIndex,
    r = e.children,
    n = b.useMemo(
      function () {
        return YO(t);
      },
      [t],
    );
  return (
    ZO(n),
    b.useEffect(
      function () {
        return function () {
          XO(n);
        };
      },
      [n],
    ),
    Oa.createPortal(r, n)
  );
}
var gp = typeof window < "u" ? b.useLayoutEffect : b.useEffect;
function r1(e) {
  var t = e.zIndex,
    r = e.children,
    n = b.useState(null),
    i = K(n, 2),
    a = i[0],
    o = i[1];
  gp(
    function () {
      var s = QO(t);
      o(s);
      var c = e1();
      if (!(!s || !c))
        return (
          c.appendChild(s),
          function () {
            (s && c.removeChild(s), o(null));
          }
        );
    },
    [t],
  );
  var u = E.createElement(b.Suspense, { fallback: null }, r);
  return a ? Oa.createPortal(u, a) : null;
}
var n1 = function (t) {
    var r = b.useState(!1),
      n = K(r, 2),
      i = n[0],
      a = n[1],
      o = b.useState(function () {
        return t === "layoutEffect" ? gp : b.useEffect;
      }),
      u = K(o, 1),
      s = u[0];
    return (
      s(function () {
        a(!0);
      }, []),
      i
    );
  },
  i1 = "akPortalMount",
  a1 = "akPortalUnmount",
  Pd = {
    100: "card",
    200: "navigation",
    300: "dialog",
    400: "layer",
    500: "blanket",
    510: "modal",
    600: "flag",
    700: "spotlight",
    9999: "tooltip",
  },
  o1 = function (t) {
    return Pd.hasOwnProperty(t) ? Pd[t] : null;
  },
  s1 = function (t, r) {
    var n = { layer: o1(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function Ad(e, t) {
  var r = s1(e, t);
  window.dispatchEvent(r);
}
var u1 = function (t) {
  var r = Number(t);
  b.useEffect(
    function () {
      return (
        Ad(i1, r),
        function () {
          Ad(a1, r);
        }
      );
    },
    [r],
  );
};
function c1(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    i = e.mountStrategy,
    a = i === void 0 ? "effect" : i,
    o = n1(a);
  return (
    u1(r),
    Mr("platform_design_system_team_portal_logic_r18_fix")
      ? E.createElement(r1, { zIndex: r }, n)
      : o
        ? E.createElement(t1, { zIndex: r }, n)
        : null
  );
}
var oi = new Set(),
  bi = null;
function jd() {
  if (!bi) {
    bi = Ra.bindAll(window, [
      { type: "dragend", listener: Ko },
      { type: "pointerdown", listener: Ko },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            Ko();
          };
        })(),
      },
    ]);
    var e = Array.from(oi);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function Ko() {
  var e;
  ((e = bi) === null || e === void 0 || e(), (bi = null));
  var t = Array.from(oi);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function l1() {
  return Ra.bindAll(window, [
    { type: "dragstart", listener: jd },
    { type: "dragenter", listener: jd },
  ]);
}
var Vi = null;
function d1(e) {
  return (
    Vi || (Vi = l1()),
    oi.add(e),
    e.onRegister({ isDragging: bi !== null }),
    function () {
      if ((oi.delete(e), oi.size === 0)) {
        var r;
        ((r = Vi) === null || r === void 0 || r(), (Vi = null));
      }
    }
  );
}
var si = null;
function ti() {
  si != null && (window.clearTimeout(si), (si = null));
}
function Id(e, t) {
  (ti(),
    (si = window.setTimeout(function () {
      ((si = null), e());
    }, t)));
}
var dt = null;
function f1(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(dt && dt.entry === e);
  }
  function n() {
    r() && (ti(), (dt = null));
  }
  function i() {
    (r() && e.done(), (t = "done"), n());
  }
  function a() {
    (r() && e.hide({ isImmediate: !0 }), i());
  }
  function o() {
    if (r()) {
      if (t === "waiting-to-hide") {
        ((t = "shown"), ti());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), ti(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function u(p) {
    var h = p.isImmediate;
    if (r()) {
      if (t === "waiting-to-show") {
        a();
        return;
      }
      if (t !== "waiting-to-hide") {
        if (h) {
          a();
          return;
        }
        ((t = "waiting-to-hide"),
          Id(function () {
            ((t = "hide-animating"), e.hide({ isImmediate: !1 }));
          }, e.delay));
      }
    }
  }
  function s() {
    r() && t === "hide-animating" && i();
  }
  function c() {
    return t === "shown" || t === "waiting-to-hide" || t === "hide-animating";
  }
  function l() {
    return e.source.type === "mouse" ? e.source.mouse : null;
  }
  function d() {
    var p = !!(dt && dt.isVisible());
    (dt && (ti(), dt.entry.hide({ isImmediate: !0 }), dt.entry.done(), (dt = null)),
      (dt = { entry: e, isVisible: c }));
    function h() {
      ((t = "shown"), e.show({ isImmediate: p }));
    }
    if (p) {
      h();
      return;
    }
    ((t = "waiting-to-show"), Id(h, e.delay));
  }
  d();
  var f = {
    keep: o,
    abort: n,
    isActive: r,
    requestHide: u,
    finishHideAnimation: s,
    mousePosition: l(),
  };
  return f;
}
function v1(e, t) {
  var r = tm();
  return t ? "".concat(r(e)) : void 0;
}
var Jo = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81u0j _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
    regularFont: "_11c81o8v",
  },
  p1 = function (t) {
    var r = t.shortcut;
    return b.createElement(
      "div",
      { className: C([Jo.shortcutSegmentsContainer]) },
      r.map(function (n, i) {
        return b.createElement(
          "kbd",
          {
            key: "".concat(n, "-").concat(i),
            className: C([
              Jo.shortcutSegment,
              Mr("platform-tooltip-shortcuts-regular-font") && Jo.regularFont,
            ]),
          },
          n,
        );
      }),
    );
  },
  _p = b.forwardRef(function (t, r) {
    var n = t.style,
      i = t.className,
      a = t.children,
      o = t.placement,
      u = t.testId,
      s = t.onMouseOut,
      c = t.onMouseOver,
      l = t.id,
      d = t.shortcut;
    return b.createElement(
      "div",
      { ref: r, style: n, "data-testid": u ? "".concat(u, "--wrapper") : void 0 },
      b.createElement(
        "div",
        {
          role: "tooltip",
          className: C(["_80om73ad", i]),
          onMouseOut: s,
          onMouseOver: c,
          "data-placement": o,
          "data-testid": u,
          id: l,
        },
        a,
        d && b.createElement(p1, { shortcut: d }),
      ),
    );
  });
_p.displayName = "TooltipPrimitive";
var Dd = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  bp = b.forwardRef(function (t, r) {
    var n = t.style,
      i = t.className,
      a = t.children,
      o = t.truncate,
      u = t.placement,
      s = t.testId,
      c = t.onMouseOut,
      l = t.onMouseOver,
      d = t.id,
      f = t.shortcut;
    return b.createElement(
      _p,
      {
        ref: r,
        style: n,
        className: C([Dd.base, o && Dd.truncate, i]),
        placement: u,
        testId: s,
        id: d,
        onMouseOut: c,
        onMouseOver: l,
        shortcut: f,
      },
      a,
    );
  });
bp.displayName = "TooltipContainer";
function Td(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function Md(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Md(Object(r), !0).forEach(function (n) {
          k(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Md(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var h1 = rm.tooltip(),
  Ld = { componentName: "tooltip", packageName: "@atlaskit/tooltip", packageVersion: "20.9.0" },
  g1 = { top: "bottom", bottom: "top", left: "right", right: "left" },
  _1 = function (t) {
    return t.split("-")[0];
  };
function b1(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    i = e.mousePosition,
    a = i === void 0 ? "bottom" : i,
    o = e.content,
    u = e.truncate,
    s = u === void 0 ? !1 : u,
    c = e.component,
    l = c === void 0 ? bp : c,
    d = e.tag,
    f = d === void 0 ? "div" : d,
    p = e.testId,
    h = e.delay,
    v = h === void 0 ? 300 : h,
    g = e.onShow,
    _ = g === void 0 ? we : g,
    y = e.onHide,
    w = y === void 0 ? we : y,
    O = e.canAppear,
    m = e.hideTooltipOnClick,
    S = m === void 0 ? !1 : m,
    x = e.hideTooltipOnMouseDown,
    D = x === void 0 ? !1 : x,
    j = e.analyticsContext,
    R = e.strategy,
    T = R === void 0 ? "fixed" : R,
    U = e.ignoreTooltipPointerEvents,
    z = U === void 0 ? !1 : U,
    V = e.isScreenReaderAnnouncementDisabled,
    Y = V === void 0 ? !1 : V,
    G = e.shortcut,
    $ = n === "mouse" ? a : n,
    X = zc(Rr({ fn: _, action: "displayed", analyticsData: j }, Ld)),
    B = zc(Rr({ fn: w, action: "hidden", analyticsData: j }, Ld)),
    A = b.useRef(null),
    _e = b.useState("hide"),
    ae = K(_e, 2),
    se = ae[0],
    le = ae[1],
    ge = b.useRef(null),
    ue = b.useRef(null),
    qe = function (re) {
      ((ue.current = re), (ge.current = re ? re.firstElementChild : null));
    },
    Oe = b.useCallback(function (M) {
      ge.current = M;
    }, []),
    et = Yn(se),
    pe = Yn(X),
    $e = Yn(B),
    br = Yn(v),
    Ct = Yn(O),
    Ee = b.useRef(!1),
    ke = b.useCallback(function (M) {
      ((A.current = M), (Ee.current = !1));
    }, []),
    Ut = b.useCallback(
      function () {
        A.current &&
          (Ee.current && $e.current(), (A.current = null), (Ee.current = !1), le("hide"));
      },
      [$e],
    ),
    lt = b.useCallback(
      function () {
        A.current && (A.current.abort(), Ee.current && $e.current(), (A.current = null));
      },
      [$e],
    );
  b.useEffect(
    function () {
      return function () {
        A.current && lt();
      };
    },
    [lt],
  );
  var tt = b.useRef(!1);
  b.useEffect(function () {
    return d1({
      onRegister: function (re) {
        var Rt = re.isDragging;
        tt.current = Rt;
      },
      onDragStart: function () {
        var re;
        ((re = A.current) === null || re === void 0 || re.requestHide({ isImmediate: !0 }),
          (tt.current = !0));
      },
      onDragEnd: function () {
        tt.current = !1;
      },
    });
  }, []);
  var qt = b.useCallback(
      function (M) {
        var re;
        if (!tt.current) {
          if ((A.current && !A.current.isActive() && lt(), A.current && A.current.isActive())) {
            A.current.keep();
            return;
          }
          if (!(Ct.current && !((re = Ct.current) !== null && re !== void 0 && re.call(Ct)))) {
            var Rt = {
                source: M,
                delay: br.current,
                show: function (yr) {
                  var Jr = yr.isImmediate;
                  (Ee.current || ((Ee.current = !0), pe.current()),
                    le(Jr ? "show-immediate" : "fade-in"));
                },
                hide: function (yr) {
                  var Jr = yr.isImmediate;
                  le(Jr ? "hide" : "before-fade-out");
                },
                done: Ut,
              },
              Xa = f1(Rt);
            ke(Xa);
          }
        }
      },
      [Ct, br, Ut, ke, lt, pe],
    ),
    Ve = b.useCallback(
      function () {
        var M;
        (M = A.current) === null || M === void 0 || M.requestHide({ isImmediate: !0 });
      },
      [A],
    );
  (ow({ onClose: Ve, isDisabled: se === "hide" || se === "fade-out" }),
    b.useEffect(
      function () {
        if (se === "hide") return we;
        se === "before-fade-out" && le("fade-out");
        var M = Ra.bind(window, {
          type: "scroll",
          listener: function () {
            A.current && A.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return M;
      },
      [se],
    ));
  var De = b.useCallback(
      function () {
        D && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [D],
    ),
    xe = b.useCallback(
      function () {
        S && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    rt = b.useCallback(
      function (M) {
        if (!(ue.current && M.target === ue.current) && !M.defaultPrevented) {
          M.preventDefault();
          var re =
            n === "mouse"
              ? { type: "mouse", mouse: Td({ left: M.clientX, top: M.clientY }) }
              : { type: "keyboard" };
          qt(re);
        }
      },
      [n, qt],
    ),
    $t = b.useCallback(function (M) {
      (ue.current && M.target === ue.current) ||
        M.defaultPrevented ||
        (M.preventDefault(), A.current && A.current.requestHide({ isImmediate: !1 }));
    }, []),
    Ii =
      n === "mouse"
        ? function (M) {
            var re;
            (re = A.current) !== null &&
              re !== void 0 &&
              re.isActive() &&
              (A.current.mousePosition = Td({ left: M.clientX, top: M.clientY }));
          }
        : void 0,
    Di = b.useCallback(function () {
      if (A.current && A.current.isActive()) {
        A.current.keep();
        return;
      }
    }, []),
    Ti = b.useCallback(
      function (M) {
        try {
          if (!M.target.matches(":focus-visible")) return;
        } catch {}
        qt({ type: "keyboard" });
      },
      [qt],
    ),
    Mi = b.useCallback(function () {
      A.current && A.current.requestHide({ isImmediate: !1 });
    }, []),
    yh = b.useCallback(
      function (M) {
        M === "exiting" &&
          et.current === "fade-out" &&
          A.current &&
          A.current.finishHideAnimation();
      },
      [et],
    ),
    mh = f,
    Ja = se !== "hide" && !!o,
    vu = !Y && Ja,
    pu = se !== "hide" && se !== "fade-out",
    wh = b.useCallback(function () {
      var M;
      (M = A.current) === null || M === void 0 || M.requestHide({ isImmediate: !0 });
    }, []);
  lw({ isOpen: Ja && pu, onClose: wh });
  var hu = function () {
      var re;
      if (n === "mouse" && (re = A.current) !== null && re !== void 0 && re.mousePosition) {
        var Rt;
        return (Rt = A.current) === null || Rt === void 0 ? void 0 : Rt.mousePosition;
      }
      return ge.current || void 0;
    },
    Kr = v1("tooltip", vu),
    Ya = {
      onMouseOver: rt,
      onMouseOut: $t,
      onMouseMove: Ii,
      onMouseDown: De,
      onClick: xe,
      onFocus: Ti,
      onBlur: Mi,
    };
  p && (Ya["data-testid"] = "".concat(p, "--container"));
  var gu = typeof t == "function";
  b.useEffect(
    function () {
      if (!gu) {
        var M = ge.current;
        if (!(!M || !Kr))
          return (
            M.setAttribute("aria-describedby", Kr),
            function () {
              return M.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [gu, Kr],
  );
  var _u = vu
    ? E.createElement(
        "span",
        { "data-testid": p ? "".concat(p, "-hidden") : void 0, hidden: !0, id: Kr },
        typeof o == "function" ? o({}) : o,
      )
    : null;
  return E.createElement(
    E.Fragment,
    null,
    typeof t == "function"
      ? E.createElement(
          E.Fragment,
          null,
          t(Rr(Rr({}, Ya), {}, { "aria-describedby": Kr, ref: Oe })),
          _u,
        )
      : E.createElement(mh, te({}, Ya, { ref: qe, role: "presentation" }), t, _u),
    Ja
      ? E.createElement(
          c1,
          { zIndex: h1 },
          E.createElement(JO, { placement: $, referenceElement: hu(), strategy: T }, function (M) {
            var re = M.ref,
              Rt = M.style,
              Xa = M.update,
              Za = M.placement,
              yr = n === "mouse" ? void 0 : g1[_1(Za)];
            return E.createElement(
              ep,
              { appear: !0 },
              pu &&
                E.createElement(
                  kw,
                  {
                    distance: "constant",
                    entranceDirection: yr,
                    exitDirection: yr,
                    onFinish: yh,
                    duration: se !== "show-immediate" ? "medium" : "none",
                  },
                  function (Jr) {
                    var Oh = Jr.className;
                    return E.createElement(
                      l,
                      {
                        ref: re,
                        className: "Tooltip ".concat(Oh),
                        style: Rr(Rr({}, Rt), z && { pointerEvents: "none" }),
                        truncate: s,
                        placement: $,
                        testId: hu() ? p : p && "".concat(p, "--unresolved"),
                        onMouseOut: $t,
                        onMouseOver: Di,
                        shortcut: G,
                      },
                      typeof o == "function" ? o({ update: Xa }) : o,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var y1 = [
    "content",
    "inlineStyles",
    "testId",
    "isRanking",
    "innerRef",
    "isSortable",
    "sortOrder",
    "onClick",
    "headCellId",
    "activeSortButtonId",
    "ascendingSortTooltip",
    "descendingSortTooltip",
    "buttonAriaRoleDescription",
    "isIconOnlyHeader",
  ],
  Zn = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  Fd = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syazazsu _k48pmoej" },
  yp = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      i = t.testId;
    t.isRanking;
    var a = t.innerRef,
      o = t.isSortable,
      u = t.sortOrder,
      s = t.onClick,
      c = t.headCellId,
      l = t.activeSortButtonId,
      d = t.ascendingSortTooltip,
      f = d === void 0 ? "Sort ascending" : d,
      p = t.descendingSortTooltip,
      h = p === void 0 ? "Sort descending" : p,
      v = t.buttonAriaRoleDescription,
      g = v === void 0 ? "Sort button" : v,
      _ = t.isIconOnlyHeader,
      y = ne(t, y1),
      w = b.useState(!1),
      O = K(w, 2),
      m = O[0],
      S = O[1],
      x = b.useState(!1),
      D = K(x, 2),
      j = D[0],
      R = D[1],
      T = c === l || u !== void 0,
      U = m || T || j,
      z = U && _,
      V = !_ || U || (_ && !j),
      Y = b.useCallback(
        function () {
          R?.(!0);
        },
        [R],
      ),
      G = b.useCallback(
        function () {
          R?.(!1);
        },
        [R],
      ),
      $ = b.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      X = b.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      B = E.createElement(
        Ca,
        { xcss: Fd.headCellContainer, onMouseEnter: $, onMouseLeave: X, onFocus: Y, onBlur: G },
        E.createElement(
          b1,
          { content: u === ur ? f : h },
          E.createElement(
            $y,
            { onClick: s, xcss: Zn.buttonWrapper, "aria-roledescription": g },
            E.createElement(
              la,
              { xcss: z ? Zn.hideIconHeaderWrapper : Zn.visibleHeaderWrapper },
              E.createElement("span", { className: C([Fd.text]) }, r),
            ),
            V &&
              E.createElement(
                la,
                { xcss: U ? Zn.sortIconVisibleWrapper : Zn.sortIconHiddenWrapper },
                u === ur
                  ? E.createElement(iw, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: i && "".concat(i, "--up--icon"),
                    })
                  : E.createElement(tw, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: i && "".concat(i, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return E.createElement(
      Y0,
      te(
        {
          style: n,
          testId: i && "".concat(i, "--head--cell"),
          ref: typeof a != "string" ? a : null,
        },
        y,
        { isSortable: o, sortOrder: u },
      ),
      o ? B : r,
    );
  },
  m1 = ["isRanking", "refHeight", "refWidth"];
function w1(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, mp() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function mp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (mp = function () {
    return !!e;
  })();
}
var O1 = (function (e) {
    function t() {
      return (fe(this, t), w1(this, t, arguments));
    }
    return (
      ze(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.isRanking;
            n.refHeight;
            var a = n.refWidth,
              o = ne(n, m1),
              u = Mg(i, a);
            return E.createElement(yp, te({ inlineStyles: u }, o));
          },
        },
      ])
    );
  })(E.Component),
  S1 = Z0(O1),
  E1 = ["cells"],
  k1 = [
    "ascendingSortTooltip",
    "buttonAriaRoleDescription",
    "colSpan",
    "content",
    "descendingSortTooltip",
    "isIconOnlyHeader",
    "isSortable",
    "key",
    "shouldTruncate",
    "testId",
    "width",
  ];
function x1(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, wp() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function wp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (wp = function () {
    return !!e;
  })();
}
var C1 = (function (e) {
    function t(r) {
      var n;
      return (fe(this, t), (n = x1(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      ze(t, e),
      ve(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            aa(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              aa(n.sortKey, n.head);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.head,
              o = i.sortKey,
              u = i.sortOrder,
              s = i.isFixedSize,
              c = i.onSort,
              l = i.isRanking,
              d = i.isRankable,
              f = i.testId,
              p = this.state.activeSortButtonId;
            if (!a) return null;
            var h = d ? S1 : yp,
              v = a.cells,
              g = ne(a, E1);
            return E.createElement(
              J0,
              te({}, g, { isRanking: l, testId: f && "".concat(f, "--head") }),
              E.createElement(
                "tr",
                null,
                v.map(function (_, y) {
                  var w = _.ascendingSortTooltip,
                    O = _.buttonAriaRoleDescription,
                    m = _.colSpan,
                    S = _.content,
                    x = _.descendingSortTooltip,
                    D = _.isIconOnlyHeader,
                    j = _.isSortable,
                    R = _.key,
                    T = _.shouldTruncate,
                    U = _.testId,
                    z = _.width,
                    V = ne(_, k1),
                    Y = "head-cell-".concat(y),
                    G = function () {
                      (n.setState({ activeSortButtonId: Y }), j && c(_)());
                    };
                  return E.createElement(
                    h,
                    te(
                      {
                        colSpan: m,
                        content: S,
                        isFixedSize: s,
                        isIconOnlyHeader: D,
                        isSortable: !!j,
                        isRanking: l,
                        key: R || y,
                        headCellId: Y,
                        activeSortButtonId: p,
                        onClick: G,
                        testId: U || f,
                        shouldTruncate: T,
                        sortOrder: R === o ? u : void 0,
                        width: z,
                        ascendingSortTooltip: w,
                        descendingSortTooltip: x,
                        buttonAriaRoleDescription: O,
                      },
                      V,
                    ),
                  );
                }),
              ),
            );
          },
        },
      ])
    );
  })(E.Component),
  R1 = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function P1(e) {
  switch (e) {
    case ua:
      return ur;
    case ur:
      return ua;
    default:
      return e;
  }
}
var A1 = function (t) {
    var r = t.caption,
      n = t.head,
      i = t.highlightedRowIndex,
      a = t.rows,
      o = t.sortKey,
      u = t.sortOrder,
      s = t.loadingLabel,
      c = t.onPageRowsUpdate,
      l = t.testId,
      d = t.totalRows,
      f = t.label,
      p = t.isLoading,
      h = p === void 0 ? !1 : p,
      v = t.isFixedSize,
      g = v === void 0 ? !1 : v,
      _ = t.rowsPerPage,
      y = _ === void 0 ? 1 / 0 : _,
      w = t.onSetPage,
      O = w === void 0 ? we : w,
      m = t.onSort,
      S = m === void 0 ? we : m,
      x = t.page,
      D = x === void 0 ? 1 : x,
      j = t.emptyView,
      R = t.isRankable,
      T = R === void 0 ? !1 : R,
      U = t.isRankingDisabled,
      z = U === void 0 ? !1 : U,
      V = t.onRankStart,
      Y = V === void 0 ? we : V,
      G = t.onRankEnd,
      $ = G === void 0 ? we : G,
      X = t.loadingSpinnerSize,
      B = t.paginationi18n,
      A =
        B === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : B,
      _e = b.useState(!1),
      ae = K(_e, 2),
      se = ae[0],
      le = ae[1],
      ge = b.useRef(null),
      ue = di({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.5",
      }),
      qe = di({
        fn: $,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.5",
      });
    b.useEffect(
      function () {
        (aa(o, n), Tg(n));
      },
      [o, n],
    );
    var Oe = function (xe) {
        return function () {
          var rt = xe.key;
          if (rt) {
            if (ue && T && rt === o && u === ua) {
              ue({ key: null, sortOrder: null, item: xe });
              return;
            }
            var $t = rt !== o ? ur : P1(u);
            ue && ue({ key: rt, item: xe, sortOrder: $t });
          }
        };
      },
      et = function (xe, rt) {
        O(xe, rt);
      },
      pe = function (xe) {
        (le(!0), Y(xe));
      },
      $e = function (xe) {
        (le(!1), qe(xe));
      },
      br = function () {
        return X || (Qf(a || [], D, y).length > 2 ? ca : r_);
      },
      Ct = function () {
        return h ? E.createElement(u_, { testId: l }) : j && E.createElement(c_, { testId: l }, j);
      },
      Ee = a && a.length,
      ke,
      Ut = !1;
    (d && Number.isInteger(d) && y && Ee && Ee <= d
      ? ((ke = Math.ceil(d / y)), (Ut = !0))
      : (ke = Ee && y ? Math.ceil(Ee / y) : 0),
      (ke = ke < 1 ? 1 : ke));
    var lt = D > ke ? ke : D,
      tt = !!Ee,
      qt = br(),
      Ve = Ct();
    return E.createElement(
      E.Fragment,
      null,
      E.createElement(
        fv,
        {
          isLoading: h && tt,
          spinnerSize: qt,
          targetRef: function () {
            return ge.current;
          },
          testId: l,
          loadingLabel: s,
        },
        E.createElement(
          a_,
          { isFixedSize: g, "aria-label": f, hasDataRow: tt, testId: l, isLoading: h },
          !!r && E.createElement(o_, null, r),
          n &&
            E.createElement(C1, {
              head: n,
              onSort: Oe,
              sortKey: o,
              sortOrder: u,
              isRanking: se,
              isRankable: T,
              testId: l,
            }),
          tt &&
            E.createElement(I1, {
              ref: ge,
              highlightedRowIndex: i,
              rows: a,
              head: n,
              sortKey: o,
              sortOrder: u,
              rowsPerPage: y,
              page: lt,
              isFixedSize: g || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: Ut,
              testId: l,
              isRankable: T,
              isRanking: se,
              onRankStart: pe,
              onRankEnd: $e,
              isRankingDisabled: z || h || !1,
            }),
        ),
      ),
      ke <= 1
        ? null
        : E.createElement(
            s_,
            { testId: l },
            E.createElement(H0, {
              value: lt,
              onChange: et,
              total: ke,
              i18n: A,
              isDisabled: h,
              testId: l,
            }),
          ),
      !tt &&
        Ve &&
        E.createElement(lv, { isLoading: h, spinnerSize: ca, testId: l, loadingLabel: s }, Ve),
    );
  },
  j1 = b.lazy(function () {
    return Ng(
      () => import("./body-BdD-o7_m.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  I1 = b.forwardRef(function (t, r) {
    var n = t.isRankable,
      i = n === void 0 ? !1 : n,
      a = t.isRanking,
      o = t.onRankStart,
      u = t.onRankEnd,
      s = t.isRankingDisabled,
      c = ne(t, R1),
      l = i && !c.sortKey,
      d = b.useState(!1),
      f = K(d, 2),
      p = f[0],
      h = f[1];
    b.useEffect(
      function () {
        l && h(!0);
      },
      [l],
    );
    var v = E.createElement(E_, te({ ref: r }, c));
    return l && p
      ? E.createElement(
          x_,
          { fallback: v },
          E.createElement(
            b.Suspense,
            { fallback: v },
            E.createElement(
              j1,
              te({ ref: r }, c, {
                isRanking: a,
                onRankStart: o,
                onRankEnd: u,
                isRankingDisabled: s,
              }),
            ),
          ),
        )
      : v;
  });
function D1(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, Op() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function Op() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Op = function () {
    return !!e;
  })();
}
var au = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = D1(this, t, [].concat(i))),
      k(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      k(r, "onSetPageHandler", function (o, u) {
        var s = r.props.onSetPage;
        s && (s(o, u), r.setState({ page: o }));
      }),
      k(r, "onSortHandler", function (o, u) {
        var s = o.key,
          c = o.item,
          l = o.sortOrder,
          d = r.props.onSort;
        d && (d({ key: s, item: c, sortOrder: l }, u), r.setState({ sortKey: s, sortOrder: l }));
      }),
      k(r, "onRankEndIfExistsHandler", function (o) {
        r.props.onRankEnd && r.props.onRankEnd(o);
      }),
      k(r, "onRankEndHandler", function (o) {
        var u = o.destination,
          s = r.state,
          c = s.rows,
          l = s.page,
          d = r.props.rowsPerPage;
        if (!u || !c) {
          r.onRankEndIfExistsHandler(o);
          return;
        }
        var f = Lg(o, c, l, d);
        (r.setState({ rows: f }), r.onRankEndIfExistsHandler(o));
      }),
      r
    );
  }
  return (
    ze(t, e),
    ve(t, [
      {
        key: "UNSAFE_componentWillReceiveProps",
        value: function (n) {
          var i = n.sortKey || this.state.sortKey,
            a = n.sortOrder || this.state.sortOrder,
            o = n.page || this.state.page;
          this.setState({ page: o, sortKey: i, sortOrder: a, rows: n.rows });
        },
      },
      {
        key: "render",
        value: function () {
          var n = this.state,
            i = n.page,
            a = n.sortKey,
            o = n.sortOrder,
            u = n.rows,
            s = this.props,
            c = s.caption,
            l = s.emptyView,
            d = s.head,
            f = s.highlightedRowIndex,
            p = s.loadingSpinnerSize,
            h = s.isLoading,
            v = s.loadingLabel,
            g = s.isFixedSize,
            _ = s.isRankable,
            y = s.isRankingDisabled,
            w = s.rowsPerPage,
            O = s.paginationi18n,
            m = s.onRankStart,
            S = s.onPageRowsUpdate,
            x = s.testId,
            D = s.label;
          return E.createElement(A1, {
            paginationi18n: O,
            caption: c,
            emptyView: l,
            head: d,
            highlightedRowIndex: f,
            loadingSpinnerSize: p,
            isLoading: h,
            loadingLabel: v,
            isFixedSize: g,
            onSetPage: this.onSetPageHandler,
            onSort: this.onSortHandler,
            page: i,
            rows: u,
            rowsPerPage: w,
            sortKey: a,
            sortOrder: o,
            isRankable: _,
            isRankingDisabled: y,
            onRankEnd: this.onRankEndHandler,
            onRankStart: m,
            onPageRowsUpdate: S,
            testId: x,
            label: D,
          });
        },
      },
    ])
  );
})(E.Component);
k(au, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: we,
  onSort: we,
  rowsPerPage: 1 / 0,
});
const T1 = (e, t, r, n) => {
    const i = Object.keys(n).map((a) => ({ key: a, content: a, isSortable: t, width: 25 }));
    return (r && i.push({ key: "delete", content: "Delete", isSortable: t, width: 25 }), i);
  },
  Sp = (e, t, r, n) => ({ cells: T1(e, t, r, n) });
function H(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw new Error(
    typeof e == "number"
      ? "[MobX] minified error nr: " +
        e +
        (r.length ? " " + r.map(String).join(",") : "") +
        ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
      : "[MobX] " + e,
  );
}
var M1 = {};
function Da() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : M1;
}
var Ep = Object.assign,
  va = Object.getOwnPropertyDescriptor,
  bt = Object.defineProperty,
  Ta = Object.prototype,
  Ss = [];
Object.freeze(Ss);
var kp = {};
Object.freeze(kp);
var L1 = typeof Proxy < "u",
  F1 = Object.toString();
function xp() {
  L1 || H("Proxy not available");
}
function Cp(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Ar = function () {};
function ot(e) {
  return typeof e == "function";
}
function lr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Ma(e) {
  return e !== null && typeof e == "object";
}
function Jt(e) {
  if (!Ma(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === F1;
}
function Rp(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function La(e, t, r) {
  bt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function Pp(e, t, r) {
  bt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function pr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return Ma(n) && n[r] === !0;
    }
  );
}
function Vr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function B1(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Tt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var Ap = typeof Object.getOwnPropertySymbols < "u";
function N1(e) {
  var t = Object.keys(e);
  if (!Ap) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Ta.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Fa =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : Ap
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function jp(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Ft(e, t) {
  return Ta.hasOwnProperty.call(e, t);
}
var z1 =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Fa(t).forEach(function (n) {
        r[n] = va(t, n);
      }),
      r
    );
  };
function Me(e, t) {
  return !!(e & t);
}
function Le(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function Bd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function U1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, $1(n.key), n));
  }
}
function Gr(e, t, r) {
  return (t && U1(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function jr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = V1(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dr() {
  return (
    (dr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    dr.apply(null, arguments)
  );
}
function Ip(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Es(e, t));
}
function Es(e, t) {
  return (
    (Es = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Es(e, t)
  );
}
function q1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function $1(e) {
  var t = q1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function V1(e, t) {
  if (e) {
    if (typeof e == "string") return Bd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Bd(e, t)
          : void 0
    );
  }
}
var ht = Symbol("mobx-stored-annotations");
function yt(e) {
  function t(r, n) {
    if (Ci(n)) return e.decorate_20223_(r, n);
    xi(r, n, e);
  }
  return Object.assign(t, e);
}
function xi(e, t, r) {
  (Ft(e, ht) || La(e, ht, dr({}, e[ht])), X1(r) || (e[ht][t] = r));
}
function G1(e) {
  return (Ft(e, ht) || La(e, ht, dr({}, e[ht])), e[ht]);
}
function Ci(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var F = Symbol("mobx administration"),
  Zt = (function () {
    function e(r) {
      (r === void 0 && (r = "Atom"),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = W.NOT_TRACKING_),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        (this.name_ = r));
    }
    var t = e.prototype;
    return (
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (n) {
            return n();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (n) {
            return n();
          });
      }),
      (t.reportObserved = function () {
        return Kp(this);
      }),
      (t.reportChanged = function () {
        (Je(), Jp(this), Ye());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      Gr(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return Me(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Me(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Me(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
Zt.isBeingObservedMask_ = 1;
Zt.isPendingUnobservationMask_ = 2;
Zt.diffValueMask_ = 4;
var ou = pr("Atom", Zt);
function Dp(e, t, r) {
  (t === void 0 && (t = Ar), r === void 0 && (r = Ar));
  var n = new Zt(e);
  return (t !== Ar && rE(n, t), r !== Ar && eh(n, r), n);
}
function H1(e, t) {
  return fh(e, t);
}
function W1(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var pa = { structural: H1, default: W1 };
function fr(e, t, r) {
  return ih(e)
    ? e
    : Array.isArray(e)
      ? oe.array(e, { name: r })
      : Jt(e)
        ? oe.object(e, void 0, { name: r })
        : Vr(e)
          ? oe.map(e, { name: r })
          : Tt(e)
            ? oe.set(e, { name: r })
            : typeof e == "function" && !Ur(e) && !mi(e)
              ? Rp(e)
                ? qr(e)
                : yi(r, e)
              : e;
}
function K1(e, t, r) {
  if (e == null || Ha(e) || Ga(e) || gr(e) || pt(e)) return e;
  if (Array.isArray(e)) return oe.array(e, { name: r, deep: !1 });
  if (Jt(e)) return oe.object(e, void 0, { name: r, deep: !1 });
  if (Vr(e)) return oe.map(e, { name: r, deep: !1 });
  if (Tt(e)) return oe.set(e, { name: r, deep: !1 });
}
function Ba(e) {
  return e;
}
function J1(e, t) {
  return fh(e, t) ? t : e;
}
var Y1 = "override";
function X1(e) {
  return e.annotationType_ === Y1;
}
function Ri(e, t) {
  return { annotationType_: e, options_: t, make_: Z1, extend_: Q1, decorate_20223_: eS };
}
function Z1(e, t, r, n) {
  var i;
  if ((i = this.options_) != null && i.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Ur(r.value)) return 1;
  var a = Tp(e, this, t, r, !1);
  return (bt(n, t, a), 2);
}
function Q1(e, t, r, n) {
  var i = Tp(e, this, t, r);
  return e.defineProperty_(t, i, n);
}
function eS(e, t) {
  var r = t.kind,
    n = t.name,
    i = t.addInitializer,
    a = this,
    o = function (c) {
      var l, d, f, p;
      return vr(
        (l = (d = a.options_) == null ? void 0 : d.name) != null ? l : n.toString(),
        c,
        (f = (p = a.options_) == null ? void 0 : p.autoAction) != null ? f : !1,
      );
    };
  if (r == "field")
    return function (s) {
      var c,
        l = s;
      return (
        Ur(l) || (l = o(l)),
        (c = a.options_) != null && c.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var u;
    return (
      Ur(e) || (e = o(e)),
      (u = this.options_) != null &&
        u.bound &&
        i(function () {
          var s = this,
            c = s[n].bind(s);
          ((c.isMobxAction = !0), (s[n] = c));
        }),
      e
    );
  }
  H(
    "Cannot apply '" +
      a.annotationType_ +
      "' to '" +
      String(n) +
      "' (kind: " +
      r +
      "):" +
      (`
'` +
        a.annotationType_ +
        "' can only be used on properties with a function value."),
  );
}
function tS(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Tp(e, t, r, n, i) {
  var a, o, u, s, c, l, d;
  (i === void 0 && (i = P.safeDescriptors), tS(e, t, r, n));
  var f = n.value;
  if ((a = t.options_) != null && a.bound) {
    var p;
    f = f.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return {
    value: vr(
      (o = (u = t.options_) == null ? void 0 : u.name) != null ? o : r.toString(),
      f,
      (s = (c = t.options_) == null ? void 0 : c.autoAction) != null ? s : !1,
      (l = t.options_) != null && l.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: i ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !i,
  };
}
function Mp(e, t) {
  return { annotationType_: e, options_: t, make_: rS, extend_: nS, decorate_20223_: iS };
}
function rS(e, t, r, n) {
  var i;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (i = this.options_) != null &&
    i.bound &&
    (!Ft(e.target_, t) || !mi(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (mi(r.value)) return 1;
  var a = Lp(e, this, t, r, !1, !1);
  return (bt(n, t, a), 2);
}
function nS(e, t, r, n) {
  var i,
    a = Lp(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, a, n);
}
function iS(e, t) {
  var r,
    n = t.name,
    i = t.addInitializer;
  return (
    mi(e) || (e = qr(e)),
    (r = this.options_) != null &&
      r.bound &&
      i(function () {
        var a = this,
          o = a[n].bind(a);
        ((o.isMobXFlow = !0), (a[n] = o));
      }),
    e
  );
}
function aS(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Lp(e, t, r, n, i, a) {
  (a === void 0 && (a = P.safeDescriptors), aS(e, t, r, n));
  var o = n.value;
  if ((mi(o) || (o = qr(o)), i)) {
    var u;
    ((o = o.bind((u = e.proxy_) != null ? u : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: a ? e.isPlainObject_ : !0, enumerable: !1, writable: !a };
}
function su(e, t) {
  return { annotationType_: e, options_: t, make_: oS, extend_: sS, decorate_20223_: uS };
}
function oS(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function sS(e, t, r, n) {
  return (
    cS(e, this, t, r),
    e.defineComputedProperty_(t, dr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function uS(e, t) {
  var r = this,
    n = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var a = Hr(this)[F],
        o = dr({}, r.options_, { get: e, context: this });
      (o.name || (o.name = "ObservableObject." + n.toString()), a.values_.set(n, new st(o)));
    }),
    function () {
      return this[F].getObservablePropValue_(n);
    }
  );
}
function cS(e, t, r, n) {
  (t.annotationType_, n.get);
}
function Na(e, t) {
  return { annotationType_: e, options_: t, make_: lS, extend_: dS, decorate_20223_: fS };
}
function lS(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function dS(e, t, r, n) {
  var i, a;
  return (
    vS(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (i = (a = this.options_) == null ? void 0 : a.enhancer) != null ? i : fr,
      n,
    )
  );
}
function fS(e, t) {
  var r = this,
    n = t.kind,
    i = t.name,
    a = new WeakSet();
  function o(u, s) {
    var c,
      l,
      d = Hr(u)[F],
      f = new sr(
        s,
        (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : fr,
        "ObservableObject." + i.toString(),
        !1,
      );
    (d.values_.set(i, f), a.add(u));
  }
  if (n == "accessor")
    return {
      get: function () {
        return (a.has(this) || o(this, e.get.call(this)), this[F].getObservablePropValue_(i));
      },
      set: function (s) {
        return (a.has(this) || o(this, s), this[F].setObservablePropValue_(i, s));
      },
      init: function (s) {
        return (a.has(this) || o(this, s), s);
      },
    };
}
function vS(e, t, r, n) {
  t.annotationType_;
}
var pS = "true",
  hS = Fp();
function Fp(e) {
  return { annotationType_: pS, options_: e, make_: gS, extend_: _S, decorate_20223_: bS };
}
function gS(e, t, r, n) {
  var i, a;
  if (r.get) return za.make_(e, t, r, n);
  if (r.set) {
    var o = Ur(r.set) ? r.set : vr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: P.safeDescriptors ? e.isPlainObject_ : !0,
          set: o,
        }) === null
        ? 0
        : 2
      : (bt(n, t, { configurable: !0, set: o }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var u;
    if (Rp(r.value)) {
      var s,
        c = (s = this.options_) != null && s.autoBind ? qr.bound : qr;
      return c.make_(e, t, r, n);
    }
    var l = (u = this.options_) != null && u.autoBind ? yi.bound : yi;
    return l.make_(e, t, r, n);
  }
  var d = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? oe.ref : oe;
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function _S(e, t, r, n) {
  var i, a;
  if (r.get) return za.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: P.safeDescriptors ? e.isPlainObject_ : !0, set: vr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var u = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? oe.ref : oe;
  return u.extend_(e, t, r, n);
}
function bS(e, t) {
  H("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var yS = "observable",
  mS = "observable.ref",
  wS = "observable.shallow",
  OS = "observable.struct",
  Bp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Bp);
function Gi(e) {
  return e || Bp;
}
var ks = Na(yS),
  SS = Na(mS, { enhancer: Ba }),
  ES = Na(wS, { enhancer: K1 }),
  kS = Na(OS, { enhancer: J1 }),
  Np = yt(ks);
function Hi(e) {
  return e.deep === !0 ? fr : e.deep === !1 ? Ba : CS(e.defaultDecorator);
}
function xS(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Fp(e)) : void 0;
}
function CS(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : fr;
}
function zp(e, t, r) {
  if (Ci(t)) return ks.decorate_20223_(e, t);
  if (lr(t)) {
    xi(e, t, ks);
    return;
  }
  return ih(e)
    ? e
    : Jt(e)
      ? oe.object(e, t, r)
      : Array.isArray(e)
        ? oe.array(e, t)
        : Vr(e)
          ? oe.map(e, t)
          : Tt(e)
            ? oe.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : oe.box(e, t);
}
Ep(zp, Np);
var RS = {
    box: function (t, r) {
      var n = Gi(r);
      return new sr(t, Hi(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = Gi(r);
      return (P.useProxies === !1 || n.proxy === !1 ? xE : gE)(t, Hi(n), n.name);
    },
    map: function (t, r) {
      var n = Gi(r);
      return new oh(t, Hi(n), n.name);
    },
    set: function (t, r) {
      var n = Gi(r);
      return new sh(t, Hi(n), n.name);
    },
    object: function (t, r, n) {
      return _r(function () {
        return oE(P.useProxies === !1 || n?.proxy === !1 ? Hr({}, n) : vE({}, n), t, r);
      });
    },
    ref: yt(SS),
    shallow: yt(ES),
    deep: Np,
    struct: yt(kS),
  },
  oe = Ep(zp, RS),
  Up = "computed",
  PS = "computed.struct",
  xs = su(Up),
  AS = su(PS, { equals: pa.structural }),
  za = function (t, r) {
    if (Ci(r)) return xs.decorate_20223_(t, r);
    if (lr(r)) return xi(t, r, xs);
    if (Jt(t)) return yt(su(Up, t));
    var n = Jt(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new st(n));
  };
Object.assign(za, xs);
za.struct = yt(AS);
var Nd,
  zd,
  ha = 0,
  jS = 1,
  IS =
    (Nd = (zd = va(function () {}, "name")) == null ? void 0 : zd.configurable) != null ? Nd : !1,
  Ud = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function vr(e, t, r, n) {
  r === void 0 && (r = !1);
  function i() {
    return DS(e, r, t, n || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    IS && ((Ud.value = e), bt(i, "name", Ud)),
    i
  );
}
function DS(e, t, r, n, i) {
  var a = TS(e, t);
  try {
    return r.apply(n, i);
  } catch (o) {
    throw ((a.error_ = o), o);
  } finally {
    MS(a);
  }
}
function TS(e, t, r, n) {
  var i = !1,
    a = 0,
    o = P.trackingDerivation,
    u = !t || !o;
  Je();
  var s = P.allowStateChanges;
  u && (hr(), (s = Ua(!0)));
  var c = uu(!0),
    l = {
      runAsAction_: u,
      prevDerivation_: o,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: c,
      notifySpy_: i,
      startTime_: a,
      actionId_: jS++,
      parentActionId_: ha,
    };
  return ((ha = l.actionId_), l);
}
function MS(e) {
  (ha !== e.actionId_ && H(30),
    (ha = e.parentActionId_),
    e.error_ !== void 0 && (P.suppressReactionErrors = !0),
    qa(e.prevAllowStateChanges_),
    ui(e.prevAllowStateReads_),
    Ye(),
    e.runAsAction_ && Bt(e.prevDerivation_),
    (P.suppressReactionErrors = !1));
}
function LS(e, t) {
  var r = Ua(e);
  try {
    return t();
  } finally {
    qa(r);
  }
}
function Ua(e) {
  var t = P.allowStateChanges;
  return ((P.allowStateChanges = e), t);
}
function qa(e) {
  P.allowStateChanges = e;
}
var sr = (function (e) {
    function t(n, i, a, o, u) {
      var s;
      return (
        a === void 0 && (a = "ObservableValue"),
        u === void 0 && (u = pa.default),
        (s = e.call(this, a) || this),
        (s.enhancer = void 0),
        (s.name_ = void 0),
        (s.equals = void 0),
        (s.hasUnreportedChange_ = !1),
        (s.interceptors_ = void 0),
        (s.changeListeners_ = void 0),
        (s.value_ = void 0),
        (s.dehancer = void 0),
        (s.enhancer = i),
        (s.name_ = a),
        (s.equals = u),
        (s.value_ = i(n, void 0, a)),
        s
      );
    }
    Ip(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (i) {
        return this.dehancer !== void 0 ? this.dehancer(i) : i;
      }),
      (r.set = function (i) {
        (this.value_, (i = this.prepareNewValue_(i)), i !== P.UNCHANGED && this.setNewValue_(i));
      }),
      (r.prepareNewValue_ = function (i) {
        if (We(this)) {
          var a = Ke(this, { object: this, type: mt, newValue: i });
          if (!a) return P.UNCHANGED;
          i = a.newValue;
        }
        return (
          (i = this.enhancer(i, this.value_, this.name_)),
          this.equals(this.value_, i) ? P.UNCHANGED : i
        );
      }),
      (r.setNewValue_ = function (i) {
        var a = this.value_;
        ((this.value_ = i),
          this.reportChanged(),
          it(this) && at(this, { type: mt, object: this, newValue: i, oldValue: a }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (i) {
        return Pi(this, i);
      }),
      (r.observe_ = function (i, a) {
        return (
          a &&
            i({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: mt,
              newValue: this.value_,
              oldValue: void 0,
            }),
          Ai(this, i)
        );
      }),
      (r.raw = function () {
        return this.value_;
      }),
      (r.toJSON = function () {
        return this.get();
      }),
      (r.toString = function () {
        return this.name_ + "[" + this.value_ + "]";
      }),
      (r.valueOf = function () {
        return jp(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(Zt),
  st = (function () {
    function e(r) {
      ((this.dependenciesState_ = W.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = W.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new _a(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = ga.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || H(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = vr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? pa.structural : pa.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        US(this);
      }),
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (n) {
            return n();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (n) {
            return n();
          });
      }),
      (t.get = function () {
        if (
          (this.isComputing && H(32, this.name_, this.derivation),
          P.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          Cs(this) &&
            (this.warnAboutUntrackedRead_(), Je(), (this.value_ = this.computeValue_(!1)), Ye());
        else if ((Kp(this), Cs(this))) {
          var n = P.trackingContext;
          (this.keepAlive_ && !n && (P.trackingContext = this),
            this.trackAndCompute() && zS(this),
            (P.trackingContext = n));
        }
        var i = this.value_;
        if (ea(i)) throw i.cause;
        return i;
      }),
      (t.set = function (n) {
        if (this.setter_) {
          (this.isRunningSetter && H(33, this.name_), (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, n);
          } finally {
            this.isRunningSetter = !1;
          }
        } else H(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var n = this.value_,
          i = this.dependenciesState_ === W.NOT_TRACKING_,
          a = this.computeValue_(!0),
          o = i || ea(n) || ea(a) || !this.equals_(n, a);
        return (o && (this.value_ = a), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var i = Ua(!1),
          a;
        if (n) a = qp(this, this.derivation, this.scope_);
        else if (P.disableErrorBoundaries === !0) a = this.derivation.call(this.scope_);
        else
          try {
            a = this.derivation.call(this.scope_);
          } catch (o) {
            a = new _a(o);
          }
        return (qa(i), (this.isComputing = !1), a);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Rs(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, i) {
        var a = this,
          o = !0,
          u = void 0;
        return XS(function () {
          var s = a.get();
          if (!o || i) {
            var c = hr();
            (n({
              observableKind: "computed",
              debugObjectName: a.name_,
              type: mt,
              object: a,
              newValue: s,
              oldValue: u,
            }),
              Bt(c));
          }
          ((o = !1), (u = s));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return jp(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      Gr(e, [
        {
          key: "isComputing",
          get: function () {
            return Me(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Me(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Me(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Me(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Me(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
st.isComputingMask_ = 1;
st.isRunningSetterMask_ = 2;
st.isBeingObservedMask_ = 4;
st.isPendingUnobservationMask_ = 8;
st.diffValueMask_ = 16;
var $a = pr("ComputedValue", st),
  W;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(W || (W = {}));
var ga;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(ga || (ga = {}));
var _a = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function ea(e) {
  return e instanceof _a;
}
function Cs(e) {
  switch (e.dependenciesState_) {
    case W.UP_TO_DATE_:
      return !1;
    case W.NOT_TRACKING_:
    case W.STALE_:
      return !0;
    case W.POSSIBLY_STALE_: {
      for (var t = uu(!0), r = hr(), n = e.observing_, i = n.length, a = 0; a < i; a++) {
        var o = n[a];
        if ($a(o)) {
          if (P.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Bt(r), ui(t), !0);
            }
          if (e.dependenciesState_ === W.STALE_) return (Bt(r), ui(t), !0);
        }
      }
      return (Vp(e), Bt(r), ui(t), !1);
    }
  }
}
function qp(e, t, r) {
  var n = uu(!0);
  (Vp(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++P.runId));
  var i = P.trackingDerivation;
  ((P.trackingDerivation = e), P.inBatch++);
  var a;
  if (P.disableErrorBoundaries === !0) a = t.call(r);
  else
    try {
      a = t.call(r);
    } catch (o) {
      a = new _a(o);
    }
  return (P.inBatch--, (P.trackingDerivation = i), FS(e), ui(n), a);
}
function FS(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = W.UP_TO_DATE_,
      i = 0,
      a = e.unboundDepsCount_,
      o = 0;
    o < a;
    o++
  ) {
    var u = r[o];
    (u.diffValue === 0 && ((u.diffValue = 1), i !== o && (r[i] = u), i++),
      u.dependenciesState_ > n && (n = u.dependenciesState_));
  }
  for (r.length = i, e.newObserving_ = null, a = t.length; a--; ) {
    var s = t[a];
    (s.diffValue === 0 && Hp(s, e), (s.diffValue = 0));
  }
  for (; i--; ) {
    var c = r[i];
    c.diffValue === 1 && ((c.diffValue = 0), NS(c, e));
  }
  n !== W.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function Rs(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Hp(t[r], e);
  e.dependenciesState_ = W.NOT_TRACKING_;
}
function $p(e) {
  var t = hr();
  try {
    return e();
  } finally {
    Bt(t);
  }
}
function hr() {
  var e = P.trackingDerivation;
  return ((P.trackingDerivation = null), e);
}
function Bt(e) {
  P.trackingDerivation = e;
}
function uu(e) {
  var t = P.allowStateReads;
  return ((P.allowStateReads = e), t);
}
function ui(e) {
  P.allowStateReads = e;
}
function Vp(e) {
  if (e.dependenciesState_ !== W.UP_TO_DATE_) {
    e.dependenciesState_ = W.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = W.UP_TO_DATE_;
  }
}
var ta = function () {
    ((this.version = 6),
      (this.UNCHANGED = {}),
      (this.trackingDerivation = null),
      (this.trackingContext = null),
      (this.runId = 0),
      (this.mobxGuid = 0),
      (this.inBatch = 0),
      (this.pendingUnobservations = []),
      (this.pendingReactions = []),
      (this.isRunningReactions = !1),
      (this.allowStateChanges = !1),
      (this.allowStateReads = !0),
      (this.enforceActions = !0),
      (this.spyListeners = []),
      (this.globalReactionErrorHandlers = []),
      (this.computedRequiresReaction = !1),
      (this.reactionRequiresObservable = !1),
      (this.observableRequiresReaction = !1),
      (this.disableErrorBoundaries = !1),
      (this.suppressReactionErrors = !1),
      (this.useProxies = !0),
      (this.verifyProxies = !1),
      (this.safeDescriptors = !0));
  },
  ra = !0,
  Gp = !1,
  P = (function () {
    var e = Da();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ra = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new ta().version && (ra = !1),
      ra
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ta()))
        : (setTimeout(function () {
            Gp || H(35);
          }, 1),
          new ta())
    );
  })();
function BS() {
  if (((P.pendingReactions.length || P.inBatch || P.isRunningReactions) && H(36), (Gp = !0), ra)) {
    var e = Da();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (P = new ta()));
  }
}
function NS(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Hp(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Wp(e));
}
function Wp(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), P.pendingUnobservations.push(e));
}
function Je() {
  P.inBatch++;
}
function Ye() {
  if (--P.inBatch === 0) {
    Yp();
    for (var e = P.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof st && r.suspend_()));
    }
    P.pendingUnobservations = [];
  }
}
function Kp(e) {
  var t = P.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && P.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && P.inBatch > 0 && Wp(e), !1);
}
function Jp(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === W.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = W.STALE_));
    }));
}
function zS(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.POSSIBLY_STALE_
        ? (t.dependenciesState_ = W.STALE_)
        : t.dependenciesState_ === W.UP_TO_DATE_ && (e.lowestObserverState_ = W.UP_TO_DATE_);
    }));
}
function US(e) {
  e.lowestObserverState_ === W.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = W.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.UP_TO_DATE_ &&
        ((t.dependenciesState_ = W.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var St = (function () {
  function e(r, n, i, a) {
    (r === void 0 && (r = "Reaction"),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = W.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = ga.NONE),
      (this.name_ = r),
      (this.onInvalidate_ = n),
      (this.errorHandler_ = i),
      (this.requiresObservable_ = a));
  }
  var t = e.prototype;
  return (
    (t.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (t.schedule_ = function () {
      this.isScheduled || ((this.isScheduled = !0), P.pendingReactions.push(this), Yp());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Je(), (this.isScheduled = !1));
        var n = P.trackingContext;
        if (((P.trackingContext = this), Cs(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (i) {
            this.reportExceptionInDerivation_(i);
          }
        }
        ((P.trackingContext = n), Ye());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (Je(), (this.isRunning = !0));
        var i = P.trackingContext;
        P.trackingContext = this;
        var a = qp(this, n, void 0);
        ((P.trackingContext = i),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Rs(this),
          ea(a) && this.reportExceptionInDerivation_(a.cause),
          Ye());
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var i = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (P.disableErrorBoundaries) throw n;
      var a = "[mobx] uncaught error in '" + this + "'";
      (P.suppressReactionErrors || console.error(a, n),
        P.globalReactionErrorHandlers.forEach(function (o) {
          return o(n, i);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Je(), Rs(this), Ye()));
    }),
    (t.getDisposer_ = function (n) {
      var i = this,
        a = function o() {
          (i.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", o));
        };
      return (
        n == null || n.addEventListener == null || n.addEventListener("abort", a),
        (a[F] = this),
        "dispose" in Symbol && typeof Symbol.dispose == "symbol" && (a[Symbol.dispose] = a),
        a
      );
    }),
    (t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (t.trace = function (n) {}),
    Gr(e, [
      {
        key: "isDisposed",
        get: function () {
          return Me(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Me(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Me(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Me(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Me(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.diffValueMask_, n === 1);
        },
      },
    ])
  );
})();
St.isDisposedMask_ = 1;
St.isScheduledMask_ = 2;
St.isTrackPendingMask_ = 4;
St.isRunningMask_ = 8;
St.diffValueMask_ = 16;
var qS = 100,
  Ps = function (t) {
    return t();
  };
function Yp() {
  P.inBatch > 0 || P.isRunningReactions || Ps($S);
}
function $S() {
  P.isRunningReactions = !0;
  for (var e = P.pendingReactions, t = 0; e.length > 0; ) {
    ++t === qS && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, i = r.length; n < i; n++) r[n].runReaction_();
  }
  P.isRunningReactions = !1;
}
var ba = pr("Reaction", St);
function VS(e) {
  var t = Ps;
  Ps = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function ci() {
  return !1;
}
function GS(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Xp = "action",
  HS = "action.bound",
  Zp = "autoAction",
  WS = "autoAction.bound",
  KS = "<unnamed action>",
  As = Ri(Xp),
  JS = Ri(HS, { bound: !0 }),
  js = Ri(Zp, { autoAction: !0 }),
  YS = Ri(WS, { autoAction: !0, bound: !0 });
function Qp(e) {
  var t = function (n, i) {
    if (ot(n)) return vr(n.name || KS, n, e);
    if (ot(i)) return vr(n, i, e);
    if (Ci(i)) return (e ? js : As).decorate_20223_(n, i);
    if (lr(i)) return xi(n, i, e ? js : As);
    if (lr(n)) return yt(Ri(e ? Zp : Xp, { name: n, autoAction: e }));
  };
  return t;
}
var Se = Qp(!1);
Object.assign(Se, As);
var yi = Qp(!0);
Object.assign(yi, js);
Se.bound = yt(JS);
yi.bound = yt(YS);
function Ur(e) {
  return ot(e) && e.isMobxAction === !0;
}
function XS(e, t) {
  var r, n, i, a;
  t === void 0 && (t = kp);
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    u = !t.scheduler && !t.delay,
    s;
  if (u)
    s = new St(
      o,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var c = QS(t),
      l = !1;
    s = new St(
      o,
      function () {
        l ||
          ((l = !0),
          c(function () {
            ((l = !1), s.isDisposed || s.track(d));
          }));
      },
      t.onError,
      t.requiresObservable,
    );
  }
  function d() {
    e(s);
  }
  return (
    ((i = t) != null && (i = i.signal) != null && i.aborted) || s.schedule_(),
    s.getDisposer_((a = t) == null ? void 0 : a.signal)
  );
}
var ZS = function (t) {
  return t();
};
function QS(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : ZS;
}
var eE = "onBO",
  tE = "onBUO";
function rE(e, t, r) {
  return th(eE, e, t, r);
}
function eh(e, t, r) {
  return th(tE, e, t, r);
}
function th(e, t, r, n) {
  var i = wa(t),
    a = ot(n) ? n : r,
    o = e + "L";
  return (
    i[o] ? i[o].add(a) : (i[o] = new Set([a])),
    function () {
      var u = i[o];
      u && (u.delete(a), u.size === 0 && delete i[o]);
    }
  );
}
var nE = "never",
  Wi = "always",
  iE = "observed";
function aE(e) {
  e.isolateGlobalState === !0 && BS();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (P.useProxies = t === Wi ? !0 : t === nE ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (P.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Wi ? Wi : r === iE;
    ((P.enforceActions = n), (P.allowStateChanges = !(n === !0 || n === Wi)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (i) {
    i in e && (P[i] = !!e[i]);
  }),
    (P.allowStateReads = !P.observableRequiresReaction),
    e.reactionScheduler && VS(e.reactionScheduler));
}
function oE(e, t, r, n) {
  var i = z1(t);
  return (
    _r(function () {
      var a = Hr(e, n)[F];
      Fa(i).forEach(function (o) {
        a.extend_(o, i[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function sE(e, t) {
  return rh(wa(e, t));
}
function rh(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = uE(e.observing_).map(rh)),
    t
  );
}
function uE(e) {
  return Array.from(new Set(e));
}
var cE = 0;
function nh() {
  this.message = "FLOW_CANCELLED";
}
nh.prototype = Object.create(Error.prototype);
var Yo = Mp("flow"),
  lE = Mp("flow.bound", { bound: !0 }),
  qr = Object.assign(function (t, r) {
    if (Ci(r)) return Yo.decorate_20223_(t, r);
    if (lr(r)) return xi(t, r, Yo);
    var n = t,
      i = n.name || "<unnamed flow>",
      a = function () {
        var u = this,
          s = arguments,
          c = ++cE,
          l = Se(i + " - runid: " + c + " - init", n).apply(u, s),
          d,
          f = void 0,
          p = new Promise(function (h, v) {
            var g = 0;
            d = v;
            function _(O) {
              f = void 0;
              var m;
              try {
                m = Se(i + " - runid: " + c + " - yield " + g++, l.next).call(l, O);
              } catch (S) {
                return v(S);
              }
              w(m);
            }
            function y(O) {
              f = void 0;
              var m;
              try {
                m = Se(i + " - runid: " + c + " - yield " + g++, l.throw).call(l, O);
              } catch (S) {
                return v(S);
              }
              w(m);
            }
            function w(O) {
              if (ot(O?.then)) {
                O.then(w, v);
                return;
              }
              return O.done ? h(O.value) : ((f = Promise.resolve(O.value)), f.then(_, y));
            }
            _(void 0);
          });
        return (
          (p.cancel = Se(i + " - runid: " + c + " - cancel", function () {
            try {
              f && qd(f);
              var h = l.return(void 0),
                v = Promise.resolve(h.value);
              (v.then(Ar, Ar), qd(v), d(new nh()));
            } catch (g) {
              d(g);
            }
          })),
          p
        );
      };
    return ((a.isMobXFlow = !0), a);
  }, Yo);
qr.bound = yt(lE);
function qd(e) {
  ot(e.cancel) && e.cancel();
}
function mi(e) {
  return e?.isMobXFlow === !0;
}
function dE(e, t) {
  return e ? Ha(e) || !!e[F] || ou(e) || ba(e) || $a(e) : !1;
}
function ih(e) {
  return dE(e);
}
function Mt(e, t) {
  (t === void 0 && (t = void 0), Je());
  try {
    return e.apply(t);
  } finally {
    Ye();
  }
}
function Pr(e) {
  return e[F];
}
var fE = {
  has: function (t, r) {
    return Pr(t).has_(r);
  },
  get: function (t, r) {
    return Pr(t).get_(r);
  },
  set: function (t, r, n) {
    var i;
    return lr(r) ? ((i = Pr(t).set_(r, n, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return lr(r) ? ((n = Pr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var i;
    return (i = Pr(t).defineProperty_(r, n)) != null ? i : !0;
  },
  ownKeys: function (t) {
    return Pr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    H(13);
  },
};
function vE(e, t) {
  var r, n;
  return (
    xp(),
    (e = Hr(e, t)),
    (n = (r = e[F]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, fE))
  );
}
function We(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Pi(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    Cp(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Ke(e, t) {
  var r = hr();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), i = 0, a = n.length;
      i < a && ((t = n[i](t)), t && !t.type && H(14), !!t);
      i++
    );
    return t;
  } finally {
    Bt(r);
  }
}
function it(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Ai(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    Cp(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function at(e, t) {
  var r = hr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var i = 0, a = n.length; i < a; i++) n[i](t);
    Bt(r);
  }
}
function Va(e, t, r) {
  return (
    _r(function () {
      var n,
        i = Hr(e, r)[F];
      ((n = t) != null || (t = G1(e)),
        Fa(t).forEach(function (a) {
          return i.make_(a, t[a]);
        }));
    }),
    e
  );
}
var $d = "splice",
  mt = "update",
  pE = 1e4,
  hE = {
    get: function (t, r) {
      var n = t[F];
      return r === F
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Ft(ya, r)
              ? ya[r]
              : t[r];
    },
    set: function (t, r, n) {
      var i = t[F];
      return (
        r === "length" && i.setArrayLength_(n),
        typeof r == "symbol" || isNaN(r) ? (t[r] = n) : i.set_(parseInt(r), n),
        !0
      );
    },
    preventExtensions: function () {
      H(15);
    },
  },
  cu = (function () {
    function e(r, n, i, a) {
      (r === void 0 && (r = "ObservableArray"),
        (this.owned_ = void 0),
        (this.legacyMode_ = void 0),
        (this.atom_ = void 0),
        (this.values_ = []),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.enhancer_ = void 0),
        (this.dehancer = void 0),
        (this.proxy_ = void 0),
        (this.lastKnownLength_ = 0),
        (this.owned_ = i),
        (this.legacyMode_ = a),
        (this.atom_ = new Zt(r)),
        (this.enhancer_ = function (o, u) {
          return n(o, u, "ObservableArray[..]");
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.dehanceValues_ = function (n) {
        return this.dehancer !== void 0 && n.length > 0 ? n.map(this.dehancer) : n;
      }),
      (t.intercept_ = function (n) {
        return Pi(this, n);
      }),
      (t.observe_ = function (n, i) {
        return (
          i === void 0 && (i = !1),
          i &&
            n({
              observableKind: "array",
              object: this.proxy_,
              debugObjectName: this.atom_.name_,
              type: "splice",
              index: 0,
              added: this.values_.slice(),
              addedCount: this.values_.length,
              removed: [],
              removedCount: 0,
            }),
          Ai(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && H("Out of range: " + n);
        var i = this.values_.length;
        if (n !== i)
          if (n > i) {
            for (var a = new Array(n - i), o = 0; o < n - i; o++) a[o] = void 0;
            this.spliceWithArray_(i, 0, a);
          } else this.spliceWithArray_(n, i - n);
      }),
      (t.updateArrayLength_ = function (n, i) {
        (n !== this.lastKnownLength_ && H(16),
          (this.lastKnownLength_ += i),
          this.legacyMode_ && i > 0 && dh(n + i + 1));
      }),
      (t.spliceWithArray_ = function (n, i, a) {
        var o = this;
        this.atom_;
        var u = this.values_.length;
        if (
          (n === void 0 ? (n = 0) : n > u ? (n = u) : n < 0 && (n = Math.max(0, u + n)),
          arguments.length === 1
            ? (i = u - n)
            : i == null
              ? (i = 0)
              : (i = Math.max(0, Math.min(i, u - n))),
          a === void 0 && (a = Ss),
          We(this))
        ) {
          var s = Ke(this, { object: this.proxy_, type: $d, index: n, removedCount: i, added: a });
          if (!s) return Ss;
          ((i = s.removedCount), (a = s.added));
        }
        if (
          ((a =
            a.length === 0
              ? a
              : a.map(function (d) {
                  return o.enhancer_(d, void 0);
                })),
          this.legacyMode_)
        ) {
          var c = a.length - i;
          this.updateArrayLength_(u, c);
        }
        var l = this.spliceItemsIntoValues_(n, i, a);
        return (
          (i !== 0 || a.length !== 0) && this.notifyArraySplice_(n, a, l),
          this.dehanceValues_(l)
        );
      }),
      (t.spliceItemsIntoValues_ = function (n, i, a) {
        if (a.length < pE) {
          var o;
          return (o = this.values_).splice.apply(o, [n, i].concat(a));
        } else {
          var u = this.values_.slice(n, n + i),
            s = this.values_.slice(n + i);
          this.values_.length += a.length - i;
          for (var c = 0; c < a.length; c++) this.values_[n + c] = a[c];
          for (var l = 0; l < s.length; l++) this.values_[n + a.length + l] = s[l];
          return u;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (n, i, a) {
        var o = !this.owned_ && ci(),
          u = it(this),
          s =
            u || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: mt,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: i,
                  oldValue: a,
                }
              : null;
        (this.atom_.reportChanged(), u && at(this, s));
      }),
      (t.notifyArraySplice_ = function (n, i, a) {
        var o = !this.owned_ && ci(),
          u = it(this),
          s =
            u || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: $d,
                  index: n,
                  removed: a,
                  added: i,
                  removedCount: a.length,
                  addedCount: i.length,
                }
              : null;
        (this.atom_.reportChanged(), u && at(this, s));
      }),
      (t.get_ = function (n) {
        if (this.legacyMode_ && n >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + n);
          return;
        }
        return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[n]));
      }),
      (t.set_ = function (n, i) {
        var a = this.values_;
        if ((this.legacyMode_ && n > a.length && H(17, n, a.length), n < a.length)) {
          this.atom_;
          var o = a[n];
          if (We(this)) {
            var u = Ke(this, { type: mt, object: this.proxy_, index: n, newValue: i });
            if (!u) return;
            i = u.newValue;
          }
          i = this.enhancer_(i, o);
          var s = i !== o;
          s && ((a[n] = i), this.notifyArrayChildUpdate_(n, i, o));
        } else {
          for (var c = new Array(n + 1 - a.length), l = 0; l < c.length - 1; l++) c[l] = void 0;
          ((c[c.length - 1] = i), this.spliceWithArray_(a.length, 0, c));
        }
      }),
      e
    );
  })();
function gE(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    xp(),
    _r(function () {
      var i = new cu(r, t, n, !1);
      Pp(i.values_, F, i);
      var a = new Proxy(i.values_, hE);
      return ((i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a);
    })
  );
}
var ya = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var r = this[F];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, r) {
    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
      i[a - 2] = arguments[a];
    var o = this[F];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return o.spliceWithArray_(t);
      case 2:
        return o.spliceWithArray_(t, r);
    }
    return o.spliceWithArray_(t, r, i);
  },
  spliceWithArray: function (t, r, n) {
    return this[F].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (var t = this[F], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return (t.spliceWithArray_(t.values_.length, 0, n), t.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[F].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[F], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return (t.spliceWithArray_(0, 0, n), t.values_.length);
  },
  reverse: function () {
    return (P.trackingDerivation && H(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    P.trackingDerivation && H(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[F],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
ie("at", Ue);
ie("concat", Ue);
ie("flat", Ue);
ie("includes", Ue);
ie("indexOf", Ue);
ie("join", Ue);
ie("lastIndexOf", Ue);
ie("slice", Ue);
ie("toString", Ue);
ie("toLocaleString", Ue);
ie("toSorted", Ue);
ie("toSpliced", Ue);
ie("with", Ue);
ie("every", ct);
ie("filter", ct);
ie("find", ct);
ie("findIndex", ct);
ie("findLast", ct);
ie("findLastIndex", ct);
ie("flatMap", ct);
ie("forEach", ct);
ie("map", ct);
ie("some", ct);
ie("toReversed", ct);
ie("reduce", ah);
ie("reduceRight", ah);
function ie(e, t) {
  typeof Array.prototype[e] == "function" && (ya[e] = t(e));
}
function Ue(e) {
  return function () {
    var t = this[F];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function ct(e) {
  return function (t, r) {
    var n = this,
      i = this[F];
    i.atom_.reportObserved();
    var a = i.dehanceValues_(i.values_);
    return a[e](function (o, u) {
      return t.call(r, o, u, n);
    });
  };
}
function ah(e) {
  return function () {
    var t = this,
      r = this[F];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_),
      i = arguments[0];
    return (
      (arguments[0] = function (a, o, u) {
        return i(a, o, u, t);
      }),
      n[e].apply(n, arguments)
    );
  };
}
var _E = pr("ObservableArrayAdministration", cu);
function Ga(e) {
  return Ma(e) && _E(e[F]);
}
var bE = {},
  Wt = "add",
  ma = "delete",
  oh = (function () {
    function e(r, n, i) {
      var a = this;
      (n === void 0 && (n = fr),
        i === void 0 && (i = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[F] = bE),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = i),
        ot(Map) || H(18),
        _r(function () {
          ((a.keysAtom_ = Dp("ObservableMap.keys()")),
            (a.data_ = new Map()),
            (a.hasMap_ = new Map()),
            r && a.merge(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.has_ = function (n) {
        return this.data_.has(n);
      }),
      (t.has = function (n) {
        var i = this;
        if (!P.trackingDerivation) return this.has_(n);
        var a = this.hasMap_.get(n);
        if (!a) {
          var o = (a = new sr(this.has_(n), Ba, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            eh(o, function () {
              return i.hasMap_.delete(n);
            }));
        }
        return a.get();
      }),
      (t.set = function (n, i) {
        var a = this.has_(n);
        if (We(this)) {
          var o = Ke(this, { type: a ? mt : Wt, object: this, newValue: i, name: n });
          if (!o) return this;
          i = o.newValue;
        }
        return (a ? this.updateValue_(n, i) : this.addValue_(n, i), this);
      }),
      (t.delete = function (n) {
        var i = this;
        if ((this.keysAtom_, We(this))) {
          var a = Ke(this, { type: ma, object: this, name: n });
          if (!a) return !1;
        }
        if (this.has_(n)) {
          var o = ci(),
            u = it(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: ma,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Mt(function () {
              var c;
              (i.keysAtom_.reportChanged(), (c = i.hasMap_.get(n)) == null || c.setNewValue_(!1));
              var l = i.data_.get(n);
              (l.setNewValue_(void 0), i.data_.delete(n));
            }),
            u && at(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, i) {
        var a = this.data_.get(n);
        if (((i = a.prepareNewValue_(i)), i !== P.UNCHANGED)) {
          var o = ci(),
            u = it(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: mt,
                    object: this,
                    oldValue: a.value_,
                    name: n,
                    newValue: i,
                  }
                : null;
          (a.setNewValue_(i), u && at(this, s));
        }
      }),
      (t.addValue_ = function (n, i) {
        var a = this;
        (this.keysAtom_,
          Mt(function () {
            var c,
              l = new sr(i, a.enhancer_, "ObservableMap.key", !1);
            (a.data_.set(n, l),
              (i = l.value_),
              (c = a.hasMap_.get(n)) == null || c.setNewValue_(!0),
              a.keysAtom_.reportChanged());
          }));
        var o = ci(),
          u = it(this),
          s =
            u || o
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Wt,
                  object: this,
                  name: n,
                  newValue: i,
                }
              : null;
        u && at(this, s);
      }),
      (t.get = function (n) {
        return this.has(n)
          ? this.dehanceValue_(this.data_.get(n).get())
          : this.dehanceValue_(void 0);
      }),
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.keys = function () {
        return (this.keysAtom_.reportObserved(), this.data_.keys());
      }),
      (t.values = function () {
        var n = this,
          i = this.keys();
        return Vd({
          next: function () {
            var o = i.next(),
              u = o.done,
              s = o.value;
            return { done: u, value: u ? void 0 : n.get(s) };
          },
        });
      }),
      (t.entries = function () {
        var n = this,
          i = this.keys();
        return Vd({
          next: function () {
            var o = i.next(),
              u = o.done,
              s = o.value;
            return { done: u, value: u ? void 0 : [s, n.get(s)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (n, i) {
        for (var a = jr(this), o; !(o = a()).done; ) {
          var u = o.value,
            s = u[0],
            c = u[1];
          n.call(i, c, s, this);
        }
      }),
      (t.merge = function (n) {
        var i = this;
        return (
          gr(n) && (n = new Map(n)),
          Mt(function () {
            Jt(n)
              ? N1(n).forEach(function (a) {
                  return i.set(a, n[a]);
                })
              : Array.isArray(n)
                ? n.forEach(function (a) {
                    var o = a[0],
                      u = a[1];
                    return i.set(o, u);
                  })
                : Vr(n)
                  ? (B1(n) || H(19, n),
                    n.forEach(function (a, o) {
                      return i.set(o, a);
                    }))
                  : n != null && H(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        Mt(function () {
          $p(function () {
            for (var i = jr(n.keys()), a; !(a = i()).done; ) {
              var o = a.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          Mt(function () {
            for (
              var a = yE(n), o = new Map(), u = !1, s = jr(i.data_.keys()), c;
              !(c = s()).done;

            ) {
              var l = c.value;
              if (!a.has(l)) {
                var d = i.delete(l);
                if (d) u = !0;
                else {
                  var f = i.data_.get(l);
                  o.set(l, f);
                }
              }
            }
            for (var p = jr(a.entries()), h; !(h = p()).done; ) {
              var v = h.value,
                g = v[0],
                _ = v[1],
                y = i.data_.has(g);
              if ((i.set(g, _), i.data_.has(g))) {
                var w = i.data_.get(g);
                (o.set(g, w), y || (u = !0));
              }
            }
            if (!u)
              if (i.data_.size !== o.size) i.keysAtom_.reportChanged();
              else
                for (var O = i.data_.keys(), m = o.keys(), S = O.next(), x = m.next(); !S.done; ) {
                  if (S.value !== x.value) {
                    i.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = O.next()), (x = m.next()));
                }
            i.data_ = o;
          }),
          this
        );
      }),
      (t.toString = function () {
        return "[object ObservableMap]";
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.observe_ = function (n, i) {
        return Ai(this, n);
      }),
      (t.intercept_ = function (n) {
        return Pi(this, n);
      }),
      Gr(e, [
        {
          key: "size",
          get: function () {
            return (this.keysAtom_.reportObserved(), this.data_.size);
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Map";
          },
        },
      ])
    );
  })(),
  gr = pr("ObservableMap", oh);
function Vd(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), du(e));
}
function yE(e) {
  if (Vr(e) || gr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (Jt(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return H(21, e);
}
var mE = {},
  sh = (function () {
    function e(r, n, i) {
      var a = this;
      (n === void 0 && (n = fr),
        i === void 0 && (i = "ObservableSet"),
        (this.name_ = void 0),
        (this[F] = mE),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = i),
        ot(Set) || H(22),
        (this.enhancer_ = function (o, u) {
          return n(o, u, i);
        }),
        _r(function () {
          ((a.atom_ = Dp(a.name_)), r && a.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Mt(function () {
          $p(function () {
            for (var i = jr(n.data_.values()), a; !(a = i()).done; ) {
              var o = a.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.forEach = function (n, i) {
        for (var a = jr(this), o; !(o = a()).done; ) {
          var u = o.value;
          n.call(i, u, u, this);
        }
      }),
      (t.add = function (n) {
        var i = this;
        if ((this.atom_, We(this))) {
          var a = Ke(this, { type: Wt, object: this, newValue: n });
          if (!a) return this;
          n = a.newValue;
        }
        if (!this.has(n)) {
          Mt(function () {
            (i.data_.add(i.enhancer_(n, void 0)), i.atom_.reportChanged());
          });
          var o = !1,
            u = it(this),
            s =
              u || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Wt,
                    object: this,
                    newValue: n,
                  }
                : null;
          u && at(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var i = this;
        if (We(this)) {
          var a = Ke(this, { type: ma, object: this, oldValue: n });
          if (!a) return !1;
        }
        if (this.has(n)) {
          var o = !1,
            u = it(this),
            s =
              u || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: ma,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Mt(function () {
              (i.atom_.reportChanged(), i.data_.delete(n));
            }),
            u && at(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.has = function (n) {
        return (this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(n)));
      }),
      (t.entries = function () {
        var n = this.values();
        return Gd({
          next: function () {
            var a = n.next(),
              o = a.value,
              u = a.done;
            return u ? { value: void 0, done: u } : { value: [o, o], done: u };
          },
        });
      }),
      (t.keys = function () {
        return this.values();
      }),
      (t.values = function () {
        this.atom_.reportObserved();
        var n = this,
          i = this.data_.values();
        return Gd({
          next: function () {
            var o = i.next(),
              u = o.value,
              s = o.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(u), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Tt(n) && !pt(n)) return n.intersection(this);
        var i = new Set(this);
        return i.intersection(n);
      }),
      (t.union = function (n) {
        if (Tt(n) && !pt(n)) return n.union(this);
        var i = new Set(this);
        return i.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Tt(n) && !pt(n)) return n.symmetricDifference(this);
        var i = new Set(this);
        return i.symmetricDifference(n);
      }),
      (t.isSubsetOf = function (n) {
        return new Set(this).isSubsetOf(n);
      }),
      (t.isSupersetOf = function (n) {
        return new Set(this).isSupersetOf(n);
      }),
      (t.isDisjointFrom = function (n) {
        if (Tt(n) && !pt(n)) return n.isDisjointFrom(this);
        var i = new Set(this);
        return i.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          pt(n) && (n = new Set(n)),
          Mt(function () {
            Array.isArray(n)
              ? (i.clear(),
                n.forEach(function (a) {
                  return i.add(a);
                }))
              : Tt(n)
                ? (i.clear(),
                  n.forEach(function (a) {
                    return i.add(a);
                  }))
                : n != null && H("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, i) {
        return Ai(this, n);
      }),
      (t.intercept_ = function (n) {
        return Pi(this, n);
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.toString = function () {
        return "[object ObservableSet]";
      }),
      (t[Symbol.iterator] = function () {
        return this.values();
      }),
      Gr(e, [
        {
          key: "size",
          get: function () {
            return (this.atom_.reportObserved(), this.data_.size);
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Set";
          },
        },
      ])
    );
  })(),
  pt = pr("ObservableSet", sh);
function Gd(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), du(e));
}
var Hd = Object.create(null),
  Wd = "remove",
  uh = (function () {
    function e(r, n, i, a) {
      (n === void 0 && (n = new Map()),
        a === void 0 && (a = hS),
        (this.target_ = void 0),
        (this.values_ = void 0),
        (this.name_ = void 0),
        (this.defaultAnnotation_ = void 0),
        (this.keysAtom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.proxy_ = void 0),
        (this.isPlainObject_ = void 0),
        (this.appliedAnnotations_ = void 0),
        (this.pendingKeys_ = void 0),
        (this.target_ = r),
        (this.values_ = n),
        (this.name_ = i),
        (this.defaultAnnotation_ = a),
        (this.keysAtom_ = new Zt("ObservableObject.keys")),
        (this.isPlainObject_ = Jt(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, i) {
        var a = this.values_.get(n);
        if (a instanceof st) return (a.set(i), !0);
        if (We(this)) {
          var o = Ke(this, { type: mt, object: this.proxy_ || this.target_, name: n, newValue: i });
          if (!o) return null;
          i = o.newValue;
        }
        if (((i = a.prepareNewValue_(i)), i !== P.UNCHANGED)) {
          var u = it(this),
            s = !1,
            c =
              u || s
                ? {
                    type: mt,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: a.value_,
                    name: n,
                    newValue: i,
                  }
                : null;
          (a.setNewValue_(i), u && at(this, c));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (P.trackingDerivation && !Ft(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, i, a) {
        return (
          a === void 0 && (a = !1),
          Ft(this.target_, n)
            ? this.values_.has(n)
              ? this.setObservablePropValue_(n, i)
              : a
                ? Reflect.set(this.target_, n, i)
                : ((this.target_[n] = i), !0)
            : this.extend_(
                n,
                { value: i, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                a,
              )
        );
      }),
      (t.has_ = function (n) {
        if (!P.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var i = this.pendingKeys_.get(n);
        return (
          i ||
            ((i = new sr(n in this.target_, Ba, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, i)),
          i.get()
        );
      }),
      (t.make_ = function (n, i) {
        if ((i === !0 && (i = this.defaultAnnotation_), i !== !1)) {
          if (!(n in this.target_)) {
            var a;
            if ((a = this.target_[ht]) != null && a[n]) return;
            H(1, i.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== Ta; ) {
            var u = va(o, n);
            if (u) {
              var s = i.make_(this, n, u, o);
              if (s === 0) return;
              if (s === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          Jd(this, i, n);
        }
      }),
      (t.extend_ = function (n, i, a, o) {
        if ((o === void 0 && (o = !1), a === !0 && (a = this.defaultAnnotation_), a === !1))
          return this.defineProperty_(n, i, o);
        var u = a.extend_(this, n, i, o);
        return (u && Jd(this, a, n), u);
      }),
      (t.defineProperty_ = function (n, i, a) {
        (a === void 0 && (a = !1), this.keysAtom_);
        try {
          Je();
          var o = this.delete_(n);
          if (!o) return o;
          if (We(this)) {
            var u = Ke(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Wt,
              newValue: i.value,
            });
            if (!u) return null;
            var s = u.newValue;
            i.value !== s && (i = dr({}, i, { value: s }));
          }
          if (a) {
            if (!Reflect.defineProperty(this.target_, n, i)) return !1;
          } else bt(this.target_, n, i);
          this.notifyPropertyAddition_(n, i.value);
        } finally {
          Ye();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, i, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          Je();
          var u = this.delete_(n);
          if (!u) return u;
          if (We(this)) {
            var s = Ke(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Wt,
              newValue: i,
            });
            if (!s) return null;
            i = s.newValue;
          }
          var c = Kd(n),
            l = {
              configurable: P.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: c.get,
              set: c.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else bt(this.target_, n, l);
          var d = new sr(i, a, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          Ye();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, i, a) {
        (a === void 0 && (a = !1), this.keysAtom_);
        try {
          Je();
          var o = this.delete_(n);
          if (!o) return o;
          if (We(this)) {
            var u = Ke(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Wt,
              newValue: void 0,
            });
            if (!u) return null;
          }
          (i.name || (i.name = "ObservableObject.key"), (i.context = this.proxy_ || this.target_));
          var s = Kd(n),
            c = {
              configurable: P.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (a) {
            if (!Reflect.defineProperty(this.target_, n, c)) return !1;
          } else bt(this.target_, n, c);
          (this.values_.set(n, new st(i)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          Ye();
        }
        return !0;
      }),
      (t.delete_ = function (n, i) {
        if ((i === void 0 && (i = !1), this.keysAtom_, !Ft(this.target_, n))) return !0;
        if (We(this)) {
          var a = Ke(this, { object: this.proxy_ || this.target_, name: n, type: Wd });
          if (!a) return null;
        }
        try {
          var o;
          Je();
          var u = it(this),
            s = !1,
            c = this.values_.get(n),
            l = void 0;
          if (!c && (u || s)) {
            var d;
            l = (d = va(this.target_, n)) == null ? void 0 : d.value;
          }
          if (i) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c && (this.values_.delete(n), c instanceof sr && (l = c.value_), Jp(c)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            u || s)
          ) {
            var f = {
              type: Wd,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            u && at(this, f);
          }
        } finally {
          Ye();
        }
        return !0;
      }),
      (t.observe_ = function (n, i) {
        return Ai(this, n);
      }),
      (t.intercept_ = function (n) {
        return Pi(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, i) {
        var a,
          o = it(this),
          u = !1;
        if (o || u) {
          var s =
            o || u
              ? {
                  type: Wt,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: i,
                }
              : null;
          o && at(this, s);
        }
        ((a = this.pendingKeys_) == null || (a = a.get(n)) == null || a.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), Fa(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function Hr(e, t) {
  var r;
  if (Ft(e, F)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    i = new uh(e, new Map(), String(n), xS(t));
  return (La(e, F, i), e);
}
var wE = pr("ObservableObjectAdministration", uh);
function Kd(e) {
  return (
    Hd[e] ||
    (Hd[e] = {
      get: function () {
        return this[F].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[F].setObservablePropValue_(e, r);
      },
    })
  );
}
function Ha(e) {
  return Ma(e) ? wE(e[F]) : !1;
}
function Jd(e, t, r) {
  var n;
  (n = e.target_[ht]) == null || delete n[r];
}
var OE = lh(0),
  SE = (function () {
    var e = !1,
      t = {};
    return (
      Object.defineProperty(t, "0", {
        set: function () {
          e = !0;
        },
      }),
      (Object.create(t)[0] = 1),
      e === !1
    );
  })(),
  Xo = 0,
  ch = function () {};
function EE(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
EE(ch, Array.prototype);
var lu = (function (e) {
  function t(n, i, a, o) {
    var u;
    return (
      a === void 0 && (a = "ObservableArray"),
      o === void 0 && (o = !1),
      (u = e.call(this) || this),
      _r(function () {
        var s = new cu(a, i, o, !0);
        ((s.proxy_ = u),
          Pp(u, F, s),
          n && n.length && u.spliceWithArray(0, 0, n),
          SE && Object.defineProperty(u, "0", OE));
      }),
      u
    );
  }
  Ip(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[F].atom_.reportObserved();
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        a.map(function (u) {
          return Ga(u) ? u.slice() : u;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        i = 0;
      return du({
        next: function () {
          return i < n.length ? { value: n[i++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    Gr(t, [
      {
        key: "length",
        get: function () {
          return this[F].getArrayLength_();
        },
        set: function (i) {
          this[F].setArrayLength_(i);
        },
      },
      {
        key: Symbol.toStringTag,
        get: function () {
          return "Array";
        },
      },
    ])
  );
})(ch);
Object.entries(ya).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && La(lu.prototype, t, r);
});
function lh(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[F].get_(e);
    },
    set: function (r) {
      this[F].set_(e, r);
    },
  };
}
function kE(e) {
  bt(lu.prototype, "" + e, lh(e));
}
function dh(e) {
  if (e > Xo) {
    for (var t = Xo; t < e + 100; t++) kE(t);
    Xo = e;
  }
}
dh(1e3);
function xE(e, t, r) {
  return new lu(e, t, r);
}
function wa(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Ga(e)) return (t !== void 0 && H(23), e[F].atom_);
    if (pt(e)) return e.atom_;
    if (gr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || H(25, t, Is(e)), r);
    }
    if (Ha(e)) {
      if (!t) return H(26);
      var n = e[F].values_.get(t);
      return (n || H(27, t, Is(e)), n);
    }
    if (ou(e) || $a(e) || ba(e)) return e;
  } else if (ot(e) && ba(e[F])) return e[F];
  H(28);
}
function CE(e, t) {
  if ((e || H(29), ou(e) || $a(e) || ba(e) || gr(e) || pt(e))) return e;
  if (e[F]) return e[F];
  H(24, e);
}
function Is(e, t) {
  var r;
  if (t !== void 0) r = wa(e, t);
  else {
    if (Ur(e)) return e.name;
    Ha(e) || gr(e) || pt(e) ? (r = CE(e)) : (r = wa(e));
  }
  return r.name_;
}
function _r(e) {
  var t = hr(),
    r = Ua(!0);
  Je();
  try {
    return e();
  } finally {
    (Ye(), qa(r), Bt(t));
  }
}
var Yd = Ta.toString;
function fh(e, t, r) {
  return (r === void 0 && (r = -1), Ds(e, t, r));
}
function Ds(e, t, r, n, i) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var a = typeof e;
  if (a !== "function" && a !== "object" && typeof t != "object") return !1;
  var o = Yd.call(e);
  if (o !== Yd.call(t)) return !1;
  switch (o) {
    case "[object RegExp]":
    case "[object String]":
      return "" + e == "" + t;
    case "[object Number]":
      return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
    case "[object Date]":
    case "[object Boolean]":
      return +e == +t;
    case "[object Symbol]":
      return typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
    case "[object Map]":
    case "[object Set]":
      r >= 0 && r++;
      break;
  }
  ((e = Xd(e)), (t = Xd(t)));
  var u = o === "[object Array]";
  if (!u) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      c = t.constructor;
    if (
      s !== c &&
      !(ot(s) && s instanceof s && ot(c) && c instanceof c) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (r === 0) return !1;
  (r < 0 && (r = -1), (n = n || []), (i = i || []));
  for (var l = n.length; l--; ) if (n[l] === e) return i[l] === t;
  if ((n.push(e), i.push(t), u)) {
    if (((l = e.length), l !== t.length)) return !1;
    for (; l--; ) if (!Ds(e[l], t[l], r - 1, n, i)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var p = 0; p < f; p++) {
      var h = d[p];
      if (!(Ft(t, h) && Ds(e[h], t[h], r - 1, n, i))) return !1;
    }
  }
  return (n.pop(), i.pop(), !0);
}
function Xd(e) {
  return Ga(e) ? e.slice() : Vr(e) || gr(e) || Tt(e) || pt(e) ? Array.from(e.entries()) : e;
}
var Zd,
  RE = ((Zd = Da().Iterator) == null ? void 0 : Zd.prototype) || {};
function du(e) {
  return ((e[Symbol.iterator] = PE), Object.assign(Object.create(RE), e));
}
function PE() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Da();
  typeof t[e] > "u" && H("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: GS, extras: { getDebugName: Is }, $mobx: F });
if (!b.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Va) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function AE(e) {
  e();
}
function jE(e) {
  (e || (e = AE), aE({ reactionScheduler: e }));
}
function IE(e) {
  return sE(e);
}
var DE = 1e4,
  TE = 1e4,
  ME = (function () {
    function e(t) {
      var r = this;
      (Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (n) {
            (n === void 0 && (n = DE), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
            var i = Date.now();
            (r.registrations.forEach(function (a, o) {
              i - a.registeredAt >= n && (r.finalize(a.value), r.registrations.delete(o));
            }),
              r.registrations.size > 0 && r.scheduleSweep());
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            r.sweep(0);
          },
        }));
    }
    return (
      Object.defineProperty(e.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t, r, n) {
          (this.registrations.set(n, { value: r, registeredAt: Date.now() }), this.scheduleSweep());
        },
      }),
      Object.defineProperty(e.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t) {
          this.registrations.delete(t);
        },
      }),
      Object.defineProperty(e.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, TE));
        },
      }),
      e
    );
  })(),
  LE = typeof FinalizationRegistry < "u" ? FinalizationRegistry : ME,
  wi = new LE(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  Zo = { exports: {} },
  Qo = {};
var Qd;
function FE() {
  if (Qd) return Qo;
  Qd = 1;
  var e = ut();
  function t(d, f) {
    return (d === f && (d !== 0 || 1 / d === 1 / f)) || (d !== d && f !== f);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    i = e.useEffect,
    a = e.useLayoutEffect,
    o = e.useDebugValue;
  function u(d, f) {
    var p = f(),
      h = n({ inst: { value: p, getSnapshot: f } }),
      v = h[0].inst,
      g = h[1];
    return (
      a(
        function () {
          ((v.value = p), (v.getSnapshot = f), s(v) && g({ inst: v }));
        },
        [d, p, f],
      ),
      i(
        function () {
          return (
            s(v) && g({ inst: v }),
            d(function () {
              s(v) && g({ inst: v });
            })
          );
        },
        [d],
      ),
      o(p),
      p
    );
  }
  function s(d) {
    var f = d.getSnapshot;
    d = d.value;
    try {
      var p = f();
      return !r(d, p);
    } catch {
      return !0;
    }
  }
  function c(d, f) {
    return f();
  }
  var l =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? c
      : u;
  return (
    (Qo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    Qo
  );
}
var ef;
function BE() {
  return (ef || ((ef = 1), (Zo.exports = FE())), Zo.exports);
}
var NE = BE();
function tf(e) {
  e.reaction = new St("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function zE(e, t) {
  t === void 0 && (t = "observed");
  var r = E.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (u) {
        return (
          wi.unregister(n),
          (n.onStoreChange = u),
          n.reaction || (tf(n), (n.stateVersion = Symbol())),
          function () {
            var s;
            ((n.onStoreChange = null),
              (s = n.reaction) === null || s === void 0 || s.dispose(),
              (n.reaction = null));
          }
        );
      },
      getSnapshot: function () {
        return n.stateVersion;
      },
    };
    r.current = n;
  }
  var i = r.current;
  (i.reaction || (tf(i), wi.register(r, i, i)),
    E.useDebugValue(i.reaction, IE),
    NE.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot));
  var a, o;
  if (
    (i.reaction.track(function () {
      try {
        a = e();
      } catch (u) {
        o = u;
      }
    }),
    o)
  )
    throw o;
  return a;
}
var es,
  ts,
  vh = typeof Symbol == "function" && Symbol.for,
  UE =
    (ts =
      (es = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || es === void 0
        ? void 0
        : es.configurable) !== null && ts !== void 0
      ? ts
      : !1,
  rf = vh
    ? Symbol.for("react.forward_ref")
    : typeof b.forwardRef == "function" &&
      b.forwardRef(function (e) {
        return null;
      }).$$typeof,
  nf = vh
    ? Symbol.for("react.memo")
    : typeof b.memo == "function" &&
      b.memo(function (e) {
        return null;
      }).$$typeof;
function qE(e, t) {
  var r;
  if (nf && e.$$typeof === nf)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    i = e,
    a = e.displayName || e.name;
  if (rf && e.$$typeof === rf && ((n = !0), (i = e.render), typeof i != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (u, s) {
    return zE(function () {
      return i(u, s);
    }, a);
  };
  return (
    (o.displayName = e.displayName),
    UE && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = b.forwardRef(o)),
    (o = b.memo(o)),
    VE(e, o),
    o
  );
}
var $E = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function VE(e, t) {
  Object.keys(e).forEach(function (r) {
    $E[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var rs;
jE(Oa.unstable_batchedUpdates);
rs = wi.finalizeAllImmediately;
function GE(e, t) {
  if (af(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var i = 0; i < r.length; i++)
    if (!Object.hasOwnProperty.call(t, r[i]) || !af(e[r[i]], t[r[i]])) return !1;
  return !0;
}
function af(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var of = Symbol("patchMixins"),
  ph = Symbol("patchedDefinition");
function HE(e, t) {
  var r = (e[of] = e[of] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function sf(e, t) {
  for (var r = this, n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  t.locks++;
  try {
    var o;
    return (e != null && (o = e.apply(this, i)), o);
  } finally {
    (t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (u) {
          u.apply(r, i);
        }));
  }
}
function uf(e, t) {
  var r = function () {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    sf.call.apply(sf, [this, e, t].concat(a));
  };
  return r;
}
function WE(e, t, r) {
  var n = HE(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var i = Object.getOwnPropertyDescriptor(e, t);
  if (!(i && i[ph])) {
    var a = e[t],
      o = hh(e, t, i ? i.enumerable : void 0, n, a);
    Object.defineProperty(e, t, o);
  }
}
function hh(e, t, r, n, i) {
  var a,
    o = uf(i, n);
  return (
    (a = {}),
    (a[ph] = !0),
    (a.get = function () {
      return o;
    }),
    (a.set = function (s) {
      if (this === e) o = uf(s, n);
      else {
        var c = hh(this, t, r, n, s);
        Object.defineProperty(this, t, c);
      }
    }),
    (a.configurable = !0),
    (a.enumerable = r),
    a
  );
}
var cf = Symbol("ObserverAdministration"),
  lf = Symbol("isMobXReactObserver");
function Ts(e) {
  var t;
  return (t = e[cf]) != null
    ? t
    : (e[cf] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: Ms(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function KE(e) {
  var t = e.prototype;
  if (e[lf]) {
    var r = Ms(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[lf] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== b.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = df;
    else if (t.shouldComponentUpdate !== df)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var i = Ms(e);
    throw new Error(
      "[mobx-react] class component (" +
        i +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  t.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: JE.call(this, n),
      }),
      this.render()
    );
  };
  var a = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        u = Ts(this);
      return (
        (u.mounted = !0),
        wi.unregister(this),
        (u.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!u.reaction || u.reactionInvalidatedBeforeMount) && u.forceUpdate(),
        a?.apply(this, arguments)
      );
    }),
    WE(t, "componentWillUnmount", function () {
      var o,
        u = Ts(this);
      ((o = u.reaction) == null || o.dispose(),
        (u.reaction = null),
        (u.forceUpdate = null),
        (u.mounted = !1),
        (u.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function Ms(e) {
  return e.displayName || e.name || "<component>";
}
function JE(e) {
  var t = e.bind(this),
    r = Ts(this);
  function n() {
    r.reaction || ((r.reaction = YE(r)), r.mounted || wi.register(this, r, this));
    var i = void 0,
      a = void 0;
    if (
      (r.reaction.track(function () {
        try {
          a = LS(!1, t);
        } catch (o) {
          i = o;
        }
      }),
      i)
    )
      throw i;
    return a;
  }
  return n;
}
function YE(e) {
  return new St(e.name + ".render()", function () {
    if (!e.mounted) {
      e.reactionInvalidatedBeforeMount = !0;
      return;
    }
    try {
      e.forceUpdate == null || e.forceUpdate();
    } catch {
      var t;
      ((t = e.reaction) == null || t.dispose(), (e.reaction = null));
    }
  });
}
function df(e, t) {
  return this.state !== t ? !0 : !GE(this.props, e);
}
function Wa(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(b.Component, e) ||
    Object.prototype.isPrototypeOf.call(b.PureComponent, e)
      ? KE(e)
      : qE(e)
  );
}
function Ls() {
  return (
    (Ls = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ls.apply(null, arguments)
  );
}
function XE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var ZE = ["children"],
  ff = E.createContext({});
function gh(e) {
  var t = e.children,
    r = XE(e, ZE),
    n = E.useContext(ff),
    i = E.useRef(Ls({}, n, r)),
    a = i.current;
  return E.createElement(ff.Provider, { value: a }, t);
}
gh.displayName = "MobXProvider";
E.version.split(".")[0];
if (!b.Component) throw new Error("mobx-react requires React to be available");
if (!oe) throw new Error("mobx-react requires mobx to be available");
var QE = Object.defineProperty,
  ek = Object.getOwnPropertyDescriptor,
  zt = (e, t, r, n) => {
    for (var i = n > 1 ? void 0 : n ? ek(t, r) : t, a = e.length - 1, o; a >= 0; a--)
      (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
    return (n && i && QE(t, r, i), i);
  };
let xt = class {
  constructor() {
    ((this.isLoading = !0), Va(this));
  }
  saveUsers(t) {
    ((this.users = t), (this.isLoading = !1));
  }
  saveSort(t) {
    this.sort = t;
  }
  saveDuplicates(t) {
    this.duplicates = t;
  }
  loading() {
    this.isLoading = !0;
  }
  stopLoading() {
    this.isLoading = !1;
  }
};
zt([oe], xt.prototype, "isLoading", 2);
zt([oe], xt.prototype, "users", 2);
zt([oe], xt.prototype, "duplicates", 2);
zt([oe], xt.prototype, "sort", 2);
zt([Se.bound], xt.prototype, "saveUsers", 1);
zt([Se.bound], xt.prototype, "saveSort", 1);
zt([Se.bound], xt.prototype, "saveDuplicates", 1);
zt([Se], xt.prototype, "loading", 1);
zt([Se], xt.prototype, "stopLoading", 1);
const tk = new xt();
var rk = Object.defineProperty,
  nk = Object.getOwnPropertyDescriptor,
  ji = (e, t, r, n) => {
    for (var i = n > 1 ? void 0 : n ? nk(t, r) : t, a = e.length - 1, o; a >= 0; a--)
      (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
    return (n && i && rk(t, r, i), i);
  };
class Wr {
  constructor() {
    ((this.isLoading = !0), Va(this));
  }
  saveMetadata(t) {
    ((this.metadata = t), (this.isLoading = !1));
  }
  loading() {
    this.isLoading = !0;
  }
  stopLoading() {
    this.isLoading = !1;
  }
}
ji([oe], Wr.prototype, "isLoading", 2);
ji([oe], Wr.prototype, "metadata", 2);
ji([Se.bound], Wr.prototype, "saveMetadata", 1);
ji([Se], Wr.prototype, "loading", 1);
ji([Se], Wr.prototype, "stopLoading", 1);
const ik = new Wr();
var ak = Object.defineProperty,
  ok = Object.getOwnPropertyDescriptor,
  _h = (e, t, r, n) => {
    for (var i = n > 1 ? void 0 : n ? ok(t, r) : t, a = e.length - 1, o; a >= 0; a--)
      (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
    return (n && i && ak(t, r, i), i);
  };
class fu {
  constructor() {
    ((this.state = "ROOT"), Va(this));
  }
  saveState(t) {
    this.state = t;
  }
}
_h([oe], fu.prototype, "state", 2);
_h([Se.bound], fu.prototype, "saveState", 1);
const sk = new fu();
class uk {
  constructor() {
    ((this.usersStore = tk), (this.usersMetadata = ik), (this.stateStore = sk));
  }
}
const bh = new uk(),
  ck = b.createContext(bh),
  Ka = () => b.useContext(ck),
  lk = Wa(() => {
    const { usersStore: e, usersMetadata: t, stateStore: r } = Ka(),
      n = Sp(!0, !0, !0, t.metadata.user.properties),
      i = e.users;
    return !i || i.length === 0
      ? L.jsx("div", { children: "User Table is EMPTY" })
      : L.jsx("div", {
          children: L.jsxs("div", {
            children: [
              L.jsx(au, {
                head: n,
                onSort: async (a) => {
                  let o = { name: a.key, sortType: a.sortOrder };
                  e.loading();
                  try {
                    const u = await Lt.invoke("fetch", { sortType: o });
                    (e.saveUsers(u), e.saveSort(o));
                  } finally {
                    e.stopLoading();
                  }
                },
                rows: i.map((a, o) => {
                  const u = Object.keys(a.fields).map((s) => ({ key: s, content: a.fields[s] }));
                  return (
                    u.push({
                      key: "delete",
                      content: L.jsx("div", {
                        children: L.jsx("button", {
                          onClick: async () => {
                            try {
                              (e.loading(), await Lt.invoke("delete", { id: a.id }));
                              const s = await Lt.invoke("fetch", { sortType: e.sort });
                              e.saveUsers(s);
                            } finally {
                              e.stopLoading();
                            }
                          },
                          children: "delete",
                        }),
                      }),
                    }),
                    { key: `row-${o}-${a.id}`, cells: u }
                  );
                }),
                rowsPerPage: 5,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: L.jsx("div", { children: "User Table is EMPTY" }),
                isRankable: !0,
              }),
              L.jsx("br", {}),
              L.jsx("br", {}),
              L.jsx("button", {
                onClick: async () => {
                  e.loading();
                  try {
                    const a = await Lt.invoke("duplicate");
                    (e.saveDuplicates(a), r.saveState("DUPLICATE"));
                  } finally {
                    e.stopLoading();
                  }
                },
                children: "Search Duplicates",
              }),
            ],
          }),
        });
  }),
  dk = Wa(() => {
    const { usersMetadata: e, usersStore: t, stateStore: r } = Ka(),
      [n, i] = b.useState({}),
      a = (u) => {
        const { name: s, value: c, type: l } = u.target;
        i((d) => ({ ...d, [s]: l === "number" ? Number(c) : c }));
      },
      o = async (u) => {
        (u.preventDefault(),
          console.log("Form Data:", n),
          await Lt.invoke("create", { data: n }),
          t.loading());
        try {
          (t.saveUsers(await Lt.invoke("fetch", { sortType: t.sort })), r.saveState("ROOT"));
        } finally {
          t.stopLoading();
        }
      };
    return L.jsx("div", {
      children: L.jsxs("form", {
        onSubmit: o,
        children: [
          Object.keys(e.metadata.user.properties).map((u) => {
            let s = e.metadata.user.properties[u];
            return L.jsxs(
              "div",
              {
                children: [
                  L.jsx("label", { htmlFor: u, children: u }),
                  L.jsx("br", {}),
                  L.jsx("input", {
                    type: s.type === "integer" || s.type === "smallint" ? "number" : "text",
                    id: u,
                    name: u,
                    onChange: a,
                  }),
                  L.jsx("br", {}),
                ],
              },
              u,
            );
          }),
          L.jsx("input", { type: "submit", value: "Submit" }),
        ],
      }),
    });
  }),
  fk = Wa(() => {
    const { usersStore: e, usersMetadata: t } = Ka(),
      r = Sp(!0, !1, !1, t.metadata.duplicate.properties),
      n = e.duplicates;
    return !n || n.length === 0
      ? L.jsx("div", { children: "Duplicate Table is EMPTY" })
      : L.jsx("div", {
          children: L.jsxs("div", {
            children: [
              L.jsx(au, {
                head: r,
                rows: n.map((i, a) => {
                  const o = Object.keys(i.fields).map((u) => ({ key: u, content: i.fields[u] }));
                  return { key: `row-${a}-1`, cells: o };
                }),
                rowsPerPage: 5,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: L.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              L.jsx("br", {}),
              L.jsx("br", {}),
            ],
          }),
        });
  });
function vk() {
  const { usersStore: e, usersMetadata: t, stateStore: r } = Ka();
  if (
    (b.useEffect(() => {
      (async () => {
        try {
          t.saveMetadata(await Lt.invoke("fetchMetadata"));
          const i = await Lt.invoke("fetch", { type: "USER", sortType: e.sort });
          e.saveUsers(i);
        } finally {
          (t.stopLoading(), e.stopLoading());
        }
      })().catch(console.error);
    }, []),
    e.isLoading || t.isLoading)
  )
    return "loading....";
  if (!t.metadata) return L.jsx("div", { children: "Loading Error" });
  switch (r.state) {
    case "ROOT":
      return L.jsx("div", {
        children: L.jsxs("div", {
          children: [
            L.jsx("button", { onClick: () => r.saveState("ADD_USER"), children: "Add a new User" }),
            L.jsx("br", {}),
            L.jsx("br", {}),
            L.jsx(lk, {}),
          ],
        }),
      });
    case "DUPLICATE":
      return L.jsx("div", {
        children: L.jsxs("div", {
          children: [
            L.jsx("button", { onClick: () => r.saveState("ROOT"), children: "back" }),
            L.jsx("br", {}),
            L.jsx("br", {}),
            L.jsx(fk, {}),
          ],
        }),
      });
    case "ADD_USER":
      return L.jsx("div", {
        children: L.jsxs("div", {
          children: [
            L.jsx("button", { onClick: () => r.saveState("ROOT"), children: "back" }),
            L.jsx("br", {}),
            L.jsx("br", {}),
            L.jsx(dk, {}),
          ],
        }),
      });
    default:
      return L.jsxs("div", { children: ["ERROR: unsupprted state $", r.state] });
  }
}
const pk = Wa(vk),
  hk = document.getElementById("root"),
  gk = Sh.createRoot(hk),
  vf = () => {
    gk.render(L.jsx(gh, { ...bh, children: L.jsx(pk, {}) }));
  };
Lt.view.theme
  .enable()
  .then(() => {
    vf();
  })
  .catch((e) => {
    (console.error(e.message), vf());
  });
export {
  E as R,
  b_ as T,
  ze as _,
  ve as a,
  ls as b,
  fe as c,
  Ne as d,
  J as e,
  K as f,
  k as g,
  ne as h,
  Ra as i,
  Te as j,
  te as k,
  Ry as l,
  Dt as m,
  kt as n,
  C as o,
  g_ as p,
  Mg as q,
  b as r,
  v_ as s,
  Z0 as w,
};
