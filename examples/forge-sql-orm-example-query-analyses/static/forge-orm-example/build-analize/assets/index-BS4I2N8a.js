const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-DF0sTAq9.js",
      "./react-dom-vendor-B_rzBOmK.js",
      "./client-core-vendor-XcWlv0SX.js",
      "./lodash-vendor-DGqookgi.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as lt, a as wa, c as Sh } from "./react-dom-vendor-B_rzBOmK.js";
import { g as Fs, r as Yt, a as Xt, b as Et, s as Ge } from "./client-core-vendor-XcWlv0SX.js";
import { r as Eh } from "./lodash-vendor-DGqookgi.js";
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
var Za = { exports: {} },
  Jr = {};
var mu;
function xh() {
  if (mu) return Jr;
  mu = 1;
  var e = lt(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, s, c) {
    var l,
      d = {},
      f = null,
      h = null;
    (c !== void 0 && (f = "" + c),
      s.key !== void 0 && (f = "" + s.key),
      s.ref !== void 0 && (h = s.ref));
    for (l in s) n.call(s, l) && !a.hasOwnProperty(l) && (d[l] = s[l]);
    if (u && u.defaultProps) for (l in ((s = u.defaultProps), s)) d[l] === void 0 && (d[l] = s[l]);
    return { $$typeof: t, type: u, key: f, ref: h, props: d, _owner: i.current };
  }
  return ((Jr.Fragment = r), (Jr.jsx = o), (Jr.jsxs = o), Jr);
}
var wu;
function Ch() {
  return (wu || ((wu = 1), (Za.exports = xh())), Za.exports);
}
var k = Ch(),
  eo = {},
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
function gf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ns(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var ra = function () {
  return (
    (ra =
      Object.assign ||
      function (t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
          r = arguments[n];
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
        }
        return t;
      }),
    ra.apply(this, arguments)
  );
};
function _f(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
        (r[n[i]] = e[n[i]]);
  return r;
}
function bf(e, t, r, n) {
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
function yf(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function mf(e, t, r, n, i, a) {
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
      h = r.length - 1;
    h >= 0;
    h--
  ) {
    var v = {};
    for (var p in n) v[p] = p === "access" ? {} : n[p];
    for (var p in n.access) v.access[p] = n.access[p];
    v.addInitializer = function (_) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      a.push(o(_ || null));
    };
    var g = (0, r[h])(u === "accessor" ? { get: l.get, set: l.set } : l[s], v);
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
function wf(e, t, r) {
  for (var n = arguments.length > 2, i = 0; i < t.length; i++)
    r = n ? t[i].call(e, r) : t[i].call(e);
  return n ? r : void 0;
}
function Of(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Sf(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function Ef(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function kf(e, t, r, n) {
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
function xf(e, t) {
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
var Oa = Object.create
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
function Cf(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Oa(t, e, r);
}
function na(e) {
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
function Ns(e, t) {
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
function Rf() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Ns(arguments[t]));
  return e;
}
function Pf() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var a = arguments[t], o = 0, u = a.length; o < u; o++, i++) n[i] = a[o];
  return n;
}
function Af(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), (a[n] = t[n]));
  return e.concat(a || Array.prototype.slice.call(t));
}
function Mr(e) {
  return this instanceof Mr ? ((this.v = e), this) : new Mr(e);
}
function jf(e, t, r) {
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
  function o(h) {
    return function (v) {
      return Promise.resolve(v).then(h, d);
    };
  }
  function u(h, v) {
    n[h] &&
      ((i[h] = function (p) {
        return new Promise(function (g, _) {
          a.push([h, p, g, _]) > 1 || s(h, p);
        });
      }),
      v && (i[h] = v(i[h])));
  }
  function s(h, v) {
    try {
      c(n[h](v));
    } catch (p) {
      f(a[0][3], p);
    }
  }
  function c(h) {
    h.value instanceof Mr ? Promise.resolve(h.value.v).then(l, d) : f(a[0][2], h);
  }
  function l(h) {
    s("next", h);
  }
  function d(h) {
    s("throw", h);
  }
  function f(h, v) {
    (h(v), a.shift(), a.length && s(a[0][0], a[0][1]));
  }
}
function If(e) {
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
          return (r = !r) ? { value: Mr(e[i](o)), done: !1 } : a ? a(o) : o;
        }
      : a;
  }
}
function Df(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof na == "function" ? na(e) : e[Symbol.iterator]()),
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
function Tf(e, t) {
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
function Mf(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = is(e), n = 0; n < r.length; n++) r[n] !== "default" && Oa(t, e, r[n]);
  return (Rh(t, e), t);
}
function Lf(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ff(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Nf(e, t, r, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r);
}
function zf(e, t) {
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
function qf(e) {
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
function Uf(e, t) {
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
    __extends: gf,
    __assign: ra,
    __rest: _f,
    __decorate: bf,
    __param: yf,
    __esDecorate: mf,
    __runInitializers: wf,
    __propKey: Of,
    __setFunctionName: Sf,
    __metadata: Ef,
    __awaiter: kf,
    __generator: xf,
    __createBinding: Oa,
    __exportStar: Cf,
    __values: na,
    __read: Ns,
    __spread: Rf,
    __spreadArrays: Pf,
    __spreadArray: Af,
    __await: Mr,
    __asyncGenerator: jf,
    __asyncDelegator: If,
    __asyncValues: Df,
    __makeTemplateObject: Tf,
    __importStar: Mf,
    __importDefault: Lf,
    __classPrivateFieldGet: Ff,
    __classPrivateFieldSet: Nf,
    __classPrivateFieldIn: zf,
    __addDisposableResource: Bf,
    __disposeResources: qf,
    __rewriteRelativeImportExtension: Uf,
  },
  jh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Bf,
        get __assign() {
          return ra;
        },
        __asyncDelegator: If,
        __asyncGenerator: jf,
        __asyncValues: Df,
        __await: Mr,
        __awaiter: kf,
        __classPrivateFieldGet: Ff,
        __classPrivateFieldIn: zf,
        __classPrivateFieldSet: Nf,
        __createBinding: Oa,
        __decorate: bf,
        __disposeResources: qf,
        __esDecorate: mf,
        __exportStar: Cf,
        __extends: gf,
        __generator: xf,
        __importDefault: Lf,
        __importStar: Mf,
        __makeTemplateObject: Tf,
        __metadata: Ef,
        __param: yf,
        __propKey: Of,
        __read: Ns,
        __rest: _f,
        __rewriteRelativeImportExtension: Uf,
        __runInitializers: wf,
        __setFunctionName: Sf,
        __spread: Rf,
        __spreadArray: Af,
        __spreadArrays: Pf,
        __values: na,
        default: Ah,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ct = Fs(jh);
var Xr = {},
  Ou;
function Ih() {
  return (
    Ou ||
      ((Ou = 1),
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
  Qr = {},
  Zr = {},
  Su;
function be() {
  if (Su) return Zr;
  ((Su = 1), Object.defineProperty(Zr, "__esModule", { value: !0 }), (Zr.BridgeAPIError = void 0));
  class e extends Error {}
  return ((Zr.BridgeAPIError = e), Zr);
}
var Eu;
function ce() {
  if (Eu) return Qr;
  ((Eu = 1), Object.defineProperty(Qr, "__esModule", { value: !0 }), (Qr.getCallBridge = void 0));
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
  return ((Qr.getCallBridge = r), Qr);
}
var en = {},
  ku;
function Sa() {
  if (ku) return en;
  ((ku = 1), Object.defineProperty(en, "__esModule", { value: !0 }), (en.withRateLimiter = void 0));
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
var xu;
function Dh() {
  return (
    xu ||
      ((xu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = ce(),
          r = be(),
          n = Sa(),
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
var Cu;
function Oi() {
  return (
    Cu ||
      ((Cu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ct.__exportStar(Dh(), e));
      })(to)),
    to
  );
}
var no = {},
  tn = {},
  io = {},
  Ru;
function $f() {
  return (
    Ru ||
      ((Ru = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = ce(),
          r = be(),
          n = Sa(),
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
            const h = { ...f, invokeType: `ui-${d.toLowerCase()}-fetch` },
              v = await u("invoke", h),
              { success: p, payload: g, error: _ } = v ?? {},
              y = { ...(p ? g : _) };
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
var Pu;
function Th() {
  if (Pu) return tn;
  ((Pu = 1), Object.defineProperty(tn, "__esModule", { value: !0 }), (tn.invokeRemote = void 0));
  const e = $f(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((tn.invokeRemote = t), tn);
}
var rn = {},
  Au;
function Mh() {
  if (Au) return rn;
  ((Au = 1), Object.defineProperty(rn, "__esModule", { value: !0 }), (rn.invokeService = void 0));
  const e = $f(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((rn.invokeService = t), rn);
}
var ju;
function Lh() {
  return (
    ju ||
      ((ju = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ct;
        (t.__exportStar(Th(), e), t.__exportStar(Mh(), e));
      })(no)),
    no
  );
}
var ao = {},
  nn = {},
  an = {},
  Iu;
function Fh() {
  if (Iu) return an;
  ((Iu = 1), Object.defineProperty(an, "__esModule", { value: !0 }), (an.submit = void 0));
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
  Du;
function Nh() {
  if (Du) return on;
  ((Du = 1), Object.defineProperty(on, "__esModule", { value: !0 }), (on.close = void 0));
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
  Tu;
function zh() {
  if (Tu) return sn;
  ((Tu = 1), Object.defineProperty(sn, "__esModule", { value: !0 }), (sn.open = void 0));
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
  Mu;
function Bh() {
  if (Mu) return un;
  ((Mu = 1), Object.defineProperty(un, "__esModule", { value: !0 }), (un.refresh = void 0));
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
  Lu;
function qh() {
  if (Lu) return cn;
  ((Lu = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.createHistory = void 0));
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
  It = {},
  Fu;
function Vf() {
  return (
    Fu ||
      ((Fu = 1),
      Object.defineProperty(It, "__esModule", { value: !0 }),
      (It.FORGE_SUPPORTED_LOCALE_CODES =
        It.I18N_BUNDLE_FOLDER_NAME =
        It.I18N_INFO_FILE_NAME =
          void 0),
      (It.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (It.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (It.FORGE_SUPPORTED_LOCALE_CODES = [
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
    It
  );
}
var er = {},
  Nu;
function Uh() {
  if (Nu) return er;
  ((Nu = 1),
    Object.defineProperty(er, "__esModule", { value: !0 }),
    (er.TranslationsGetter = er.TranslationGetterError = void 0));
  const e = (n, i) => {
    n.includes(i) || n.push(i);
  };
  class t extends Error {
    constructor(i) {
      (super(i), (this.name = "TranslationGetterError"));
    }
  }
  er.TranslationGetterError = t;
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
  return ((er.TranslationsGetter = r), er);
}
var dn = {},
  so = {},
  zu;
function Gf() {
  return (
    zu ||
      ((zu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = Ct.__importDefault(Eh()),
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
var Bu;
function $h() {
  if (Bu) return dn;
  ((Bu = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.Translator = void 0));
  const e = Gf();
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
  qu;
function Vh() {
  if (qu) return fn;
  ((qu = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.ensureLocale = void 0));
  const e = Vf(),
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
              d = (f, h) =>
                !t(f) || l.has(f)
                  ? []
                  : (l.add(f),
                    Object.entries(f).flatMap(([v, p]) => {
                      const g = [...h, v];
                      return r(p)
                        ? [{ propertyPath: g, key: p.i18n }]
                        : Array.isArray(p)
                          ? p.flatMap((_) => d(_, g))
                          : d(p, g);
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
            for (const { key: h } of f) l.add(h);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = u;
        const s = (c) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(c)) {
            const f = a(d[0]);
            for (const h of f) l.push({ moduleName: d[1], ...h });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = s;
      })(uo)),
    uo
  );
}
var co = {},
  $u;
function Hh() {
  return ($u || (($u = 1), Object.defineProperty(co, "__esModule", { value: !0 })), co);
}
var Vu;
function Hf() {
  return (
    Vu ||
      ((Vu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = Ct;
        (t.__exportStar(Vf(), e),
          t.__exportStar(Uh(), e),
          t.__exportStar($h(), e),
          t.__exportStar(Vh(), e));
        var r = Gf();
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
var Gu;
function Wh() {
  if (Gu) return ln;
  ((Gu = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.getContext = void 0));
  const e = ce(),
    t = Hf(),
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
  Hu;
function Kh() {
  if (Hu) return vn;
  ((Hu = 1),
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
  Wu;
function Yh() {
  if (Wu) return pn;
  ((Wu = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.theme = void 0));
  const t = (0, ce().getCallBridge)();
  return ((pn.theme = { enable: () => t("enableTheming") }), pn);
}
var hn = {},
  gn = {},
  lo = {},
  tr = {},
  Ku;
function Wf() {
  if (Ku) return tr;
  ((Ku = 1),
    Object.defineProperty(tr, "__esModule", { value: !0 }),
    (tr.blobToBase64 = tr.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const i = r.includes(";base64") ? r.split(",")[1] : r,
      a = atob(i),
      o = new Array(a.length);
    for (let s = 0; s < a.length; s++) o[s] = a.charCodeAt(s);
    const u = new Uint8Array(o);
    return new Blob([u], { type: n });
  };
  tr.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, i) => {
      const a = new FileReader();
      ((a.onloadend = () => {
        n(a.result);
      }),
        (a.onerror = i),
        a.readAsDataURL(r));
    });
  return ((tr.blobToBase64 = t), tr);
}
var Yu;
function Jh() {
  return (
    Yu ||
      ((Yu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Wf(),
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
function Kf() {
  if (Ju) return gn;
  ((Ju = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.events = void 0));
  const e = ce(),
    t = Jh(),
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
var Xu;
function Xh() {
  if (Xu) return hn;
  ((Xu = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.emitReadyEvent = void 0));
  const e = Kf(),
    t = Yf(),
    r = "EXTENSION_READY",
    n = async () => {
      const i = await t.view.getContext();
      await e.events.emit(r, { localId: i.localId });
    };
  return ((hn.emitReadyEvent = n), hn);
}
var Qu;
function Yf() {
  if (Qu) return nn;
  ((Qu = 1), Object.defineProperty(nn, "__esModule", { value: !0 }), (nn.view = void 0));
  const e = Fh(),
    t = Nh(),
    r = zh(),
    n = Bh(),
    i = qh(),
    a = Wh(),
    o = Kh(),
    u = Yh(),
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
function zs() {
  return (
    Zu ||
      ((Zu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ct.__exportStar(Yf(), e));
      })(ao)),
    ao
  );
}
var fo = {},
  _n = {},
  ec;
function Qh() {
  if (ec) return _n;
  ((ec = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.router = void 0));
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
var tc;
function Zh() {
  return (
    tc ||
      ((tc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ct.__exportStar(Qh(), e));
      })(fo)),
    fo
  );
}
var vo = {},
  bn = {},
  rc;
function eg() {
  if (rc) return bn;
  ((rc = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.Modal = void 0));
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
var nc;
function tg() {
  return (
    nc ||
      ((nc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ct.__exportStar(eg(), e));
      })(vo)),
    vo
  );
}
var Dt = {},
  yn = {},
  ic;
function rg() {
  if (ic) return yn;
  ((ic = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.productFetchApi = void 0));
  const e = Wf(),
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
          { body: d, headers: f, isMultipartFormData: h } = await n(l);
        f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
        const v = {
            product: u,
            restPath: s,
            fetchRequestInit: { ...l, body: d, headers: [...f.entries()] },
            isMultipartFormData: h,
          },
          {
            body: p,
            headers: g,
            statusText: _,
            status: y,
            isAttachment: w,
          } = await a("fetchProduct", v),
          O = w ? (0, e.base64ToBlob)(p, g["content-type"]) : p;
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
var ac;
function ng() {
  if (ac) return Dt;
  ac = 1;
  var e;
  (Object.defineProperty(Dt, "__esModule", { value: !0 }),
    (Dt.requestBitbucket = Dt.requestJira = Dt.requestConfluence = void 0));
  const t = ce();
  return (
    (e = (0, rg().productFetchApi)((0, t.getCallBridge)())),
    (Dt.requestConfluence = e.requestConfluence),
    (Dt.requestJira = e.requestJira),
    (Dt.requestBitbucket = e.requestBitbucket),
    Dt
  );
}
var po = {},
  mn = {},
  oc;
function ig() {
  if (oc) return mn;
  ((oc = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.showFlag = void 0));
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
var sc;
function ag() {
  return (
    sc ||
      ((sc = 1),
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
  uc;
function og() {
  return (
    uc ||
      ((uc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ct.__exportStar(Kf(), e));
      })(ho)),
    ho
  );
}
var go = {},
  wn = {},
  cc;
function sg() {
  if (cc) return wn;
  ((cc = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.realtime = void 0));
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
  lc;
function ug() {
  return (
    lc ||
      ((lc = 1),
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
var dc;
function cg() {
  return (
    dc ||
      ((dc = 1),
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
var Tt = {},
  fc;
function lg() {
  if (fc) return Tt;
  ((fc = 1),
    Object.defineProperty(Tt, "__esModule", { value: !0 }),
    (Tt.createTranslationFunction = Tt.getTranslations = Tt.resetTranslationsCache = void 0));
  const e = Hf(),
    t = zs(),
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
  Tt.resetTranslationsCache = i;
  const a = async (u = null, s = { fallback: !0 }) => {
    let c = u;
    return (c || (c = (await t.view.getContext()).locale), await n.getTranslations(c, s));
  };
  Tt.getTranslations = a;
  const o = async (u = null) => {
    let s = u;
    s || (s = (await t.view.getContext()).locale);
    const c = new e.Translator(s, n);
    return (
      await c.init(),
      (l, d) => {
        var f, h;
        return (h = (f = c.translate(l)) !== null && f !== void 0 ? f : d) !== null && h !== void 0
          ? h
          : l;
      }
    );
  };
  return ((Tt.createTranslationFunction = o), Tt);
}
var bo = {},
  yo = {},
  mo = {},
  On = {},
  Sn = {},
  vc;
function Jf() {
  return (
    vc ||
      ((vc = 1),
      Object.defineProperty(Sn, "__esModule", { value: !0 }),
      (Sn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Sn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Sn
  );
}
var pc;
function Ea() {
  if (pc) return On;
  ((pc = 1),
    Object.defineProperty(On, "__esModule", { value: !0 }),
    (On.checkRestrictedEnvironment = void 0));
  const e = be(),
    t = zs(),
    r = Jf(),
    n = async () => {
      const { environmentType: i } = await t.view.getContext();
      if (i === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((On.checkRestrictedEnvironment = n), On);
}
var hc;
function dg() {
  return (
    hc ||
      ((hc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = Oi(),
          r = be(),
          n = Ea(),
          a = (0, ce().getCallBridge)(),
          o = (l, d) => {
            const f = atob(l),
              h = new Array(f.length);
            for (let p = 0; p < f.length; p++) h[p] = f.charCodeAt(p);
            const v = new Uint8Array(h);
            return new Blob([v], { type: d || "application/octet-stream" });
          },
          u = async (l) => {
            const d = l.size,
              f = await l.arrayBuffer(),
              h = await crypto.subtle.digest("SHA-256", f),
              v = new Uint8Array(h),
              p = btoa(String.fromCharCode(...v));
            return { length: d, checksum: p, checksumType: "SHA256" };
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
              h = await Promise.all(f.map((y) => u(y))),
              v = await (0, t.invoke)(l, { allObjectMetadata: h });
            if (!v || typeof v != "object")
              throw new r.BridgeAPIError("Invalid response from functionKey");
            const p = new Map(),
              g = new Map();
            return (
              f.forEach((y, w) => {
                const O = h[w];
                (p.set(O.checksum, y), g.set(O.checksum, w));
              }),
              Object.entries(v).map(([y, w]) => {
                const { key: O, checksum: m } = w,
                  S = p.get(m),
                  C = g.get(m);
                return C === void 0
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
                            const I = await fetch(y, {
                              method: "PUT",
                              body: S,
                              headers: {
                                "Content-Type": S.type || "application/octet-stream",
                                "Content-Length": S.size.toString(),
                              },
                            });
                            return {
                              success: I.ok,
                              key: O,
                              status: I.status,
                              error: I.ok ? void 0 : `Upload failed with status ${I.status}`,
                            };
                          } catch (I) {
                            return {
                              success: !1,
                              key: O,
                              status: 503,
                              error: I instanceof Error ? I.message : "Upload failed",
                            };
                          }
                        })(),
                        index: C,
                        objectType: S.type,
                        objectSize: S.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: O,
                          error: `Blob not found for checksum ${m}`,
                        }),
                        index: C,
                      };
              })
            );
          };
        e.createUploadPromises = s;
        const c = async ({ functionKey: l, objects: d }) => {
          (await (0, n.checkRestrictedEnvironment)(),
            a("trackObjectStoreAction", { action: "upload" }));
          const f = await (0, e.createUploadPromises)({ functionKey: l, objects: d });
          return await Promise.all(f.map((v) => v.promise));
        };
        e.upload = c;
      })(mo)),
    mo
  );
}
var En = {},
  gc;
function fg() {
  if (gc) return En;
  ((gc = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.deleteObjects = void 0));
  const e = Oi(),
    t = be(),
    r = Ea(),
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
  _c;
function vg() {
  if (_c) return kn;
  ((_c = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.download = void 0));
  const e = Oi(),
    t = be(),
    r = Ea(),
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
          const h = await fetch(d, { method: "GET" });
          if (!h.ok)
            return {
              success: !1,
              key: f,
              status: h.status,
              error: `Download failed with status ${h.status}`,
            };
          const v = await h.blob();
          return { success: !0, key: f, blob: v, status: h.status };
        } catch (h) {
          return {
            success: !1,
            key: f,
            status: 503,
            error: h instanceof Error ? h.message : "Download failed",
          };
        }
      });
      return await Promise.all(c);
    };
  return ((kn.download = a), kn);
}
var xn = {},
  bc;
function pg() {
  if (bc) return xn;
  ((bc = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.getMetadata = void 0));
  const e = Oi(),
    t = be(),
    r = Ea(),
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
var yc;
function hg() {
  return (
    yc ||
      ((yc = 1),
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
var mc;
function gg() {
  return (
    mc ||
      ((mc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ct;
        (t.__exportStar(hg(), e), t.__exportStar(Jf(), e));
      })(bo)),
    bo
  );
}
var wo = {},
  Cn = {},
  rr = {},
  wr = {},
  Mi = {},
  wc;
function _g() {
  if (wc) return Mi;
  ((wc = 1), Object.defineProperty(Mi, "__esModule", { value: !0 }));
  const e = Yt();
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
  return ((Mi.default = t), Mi);
}
var Or = {},
  Rn = {},
  Oc;
function bg() {
  if (Oc) return Rn;
  ((Oc = 1),
    Object.defineProperty(Rn, "__esModule", { value: !0 }),
    (Rn._resolveDeltasResponse = void 0));
  const e = Yt(),
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
var Sc;
function Xf() {
  if (Sc) return Or;
  Sc = 1;
  var e =
    (Or && Or.__awaiter) ||
    function (i, a, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(v) {
          try {
            h(u.next(v));
          } catch (p) {
            l(p);
          }
        }
        function f(v) {
          try {
            h(u.throw(v));
          } catch (p) {
            l(p);
          }
        }
        function h(v) {
          v.done ? c(v.value) : s(v.value).then(d, f);
        }
        h((u = u.apply(i, a || [])).next());
      });
    };
  Object.defineProperty(Or, "__esModule", { value: !0 });
  const t = Yt(),
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
        var l, d, f, h, v, p;
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
            ((p =
              (v = (h = this._option) === null || h === void 0 ? void 0 : h.networkConfig) ===
                null || v === void 0
                ? void 0
                : v.initializeHashAlgorithm) !== null && p !== void 0
              ? p
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
  return ((Or.default = n), Or);
}
var Pn = {},
  Ec;
function yg() {
  if (Ec) return Pn;
  ((Ec = 1),
    Object.defineProperty(Pn, "__esModule", { value: !0 }),
    (Pn._makeParamStoreGetter = void 0));
  const e = Yt(),
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
  function o(l, d, f, h) {
    const p = l.getDynamicConfig(d.config_name, r(h) ? void 0 : t).get(d.param_name);
    return n(p, f) ? f : p;
  }
  function u(l, d, f, h) {
    const p = l.getExperiment(d.experiment_name, r(h) ? void 0 : t).get(d.param_name);
    return n(p, f) ? f : p;
  }
  function s(l, d, f, h) {
    const p = l.getLayer(d.layer_name, r(h) ? void 0 : t).get(d.param_name);
    return n(p, f) ? f : p;
  }
  function c(l, d, f) {
    return (h, v) => {
      if (d == null) return v;
      const p = d[h];
      if (p == null || (v != null && (0, e._typeOf)(v) !== p.param_type)) return v;
      switch (p.ref_type) {
        case "static":
          return i(p);
        case "gate":
          return a(l, p, f);
        case "dynamic_config":
          return o(l, p, v, f);
        case "experiment":
          return u(l, p, v, f);
        case "layer":
          return s(l, p, v, f);
        default:
          return v;
      }
    };
  }
  return ((Pn._makeParamStoreGetter = c), Pn);
}
var nr = {},
  kc;
function mg() {
  if (kc) return nr;
  kc = 1;
  var e =
    (nr && nr.__awaiter) ||
    function (i, a, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(v) {
          try {
            h(u.next(v));
          } catch (p) {
            l(p);
          }
        }
        function f(v) {
          try {
            h(u.throw(v));
          } catch (p) {
            l(p);
          }
        }
        function h(v) {
          v.done ? c(v.value) : s(v.value).then(d, f);
        }
        h((u = u.apply(i, a || [])).next());
      });
    };
  (Object.defineProperty(nr, "__esModule", { value: !0 }),
    (nr.StatsigEvaluationsDataAdapter = void 0));
  const t = Yt(),
    r = Xf();
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
  return ((nr.StatsigEvaluationsDataAdapter = n), nr);
}
var xc;
function wg() {
  if (xc) return wr;
  xc = 1;
  var e =
    (wr && wr.__awaiter) ||
    function (u, s, c, l) {
      function d(f) {
        return f instanceof c
          ? f
          : new c(function (h) {
              h(f);
            });
      }
      return new (c || (c = Promise))(function (f, h) {
        function v(_) {
          try {
            g(l.next(_));
          } catch (y) {
            h(y);
          }
        }
        function p(_) {
          try {
            g(l.throw(_));
          } catch (y) {
            h(y);
          }
        }
        function g(_) {
          _.done ? f(_.value) : d(_.value).then(v, p);
        }
        g((l = l.apply(u, s || [])).next());
      });
    };
  Object.defineProperty(wr, "__esModule", { value: !0 });
  const t = Yt(),
    r = _g(),
    n = Xf(),
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
      const h = new n.default(l, (p) => {
        this.$emt(p);
      });
      (super(
        s,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new a.StatsigEvaluationsDataAdapter(),
        h,
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
        (this._network = h),
        (this._user = this._configureUser(c, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const v = (f = l?.plugins) !== null && f !== void 0 ? f : [];
      for (const p of v) p.bind(this);
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
      const h = this.dataAdapter.getDataSync(this._user);
      (h == null && f.push("NoCachedValues"),
        this._store.setValues(h, this._user),
        this._finalizeUpdate(h));
      const v = c?.disableBackgroundCacheRefresh;
      return v === !0 || (v == null && h?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          )
        : (this._runPostUpdate(h ?? null, this._user),
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
        const h = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          f,
          this._store.getSource(),
          h,
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
      const { result: f, details: h } = this._store.getGate(s),
        v = (0, t._makeFeatureGate)(s, h, f),
        p =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, v, this._user, c),
        g = p ?? v;
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
      const { result: f, details: h } = this._store.getConfig(s),
        v = (0, t._makeDynamicConfig)(s, h, f),
        p =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, v, this._user, c),
        g = p ?? v;
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
      var l, d, f, h;
      const { result: v, details: p } = this._store.getConfig(s),
        g = (0, t._makeExperiment)(s, p, v);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = g.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const _ =
          (h =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || h === void 0
            ? void 0
            : h.call(f, g, this._user, c),
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
      const { result: h, details: v } = this._store.getLayer(s),
        p = (0, t._makeLayer)(s, v, h),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, p, this._user, c);
      c?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const _ = (0, t._mergeOverride)(
        p,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : p.__value,
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
      const { result: f, details: h } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const v = {
          name: s,
          details: h,
          __configuration: f,
          get: (0, i._makeParamStoreGetter)(this, f, c),
        },
        p =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, v, c);
      return (
        p != null &&
          ((v.__configuration = p.config),
          (v.details = p.details),
          (v.get = (0, i._makeParamStoreGetter)(this, p.config, c))),
        v
      );
    }
  }
  return ((wr.default = o), wr);
}
var Cc;
function Og() {
  return (
    Cc ||
      ((Cc = 1),
      (function (e) {
        var t =
            (rr && rr.__createBinding) ||
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
            (rr && rr.__exportStar) ||
            function (o, u) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(u, s) && t(u, o, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Yt(),
          i = wg();
        ((e.StatsigClient = i.default), r(Yt(), e));
        const a = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = a;
      })(rr)),
    rr
  );
}
var An = {},
  jn = {},
  Rc;
function Sg() {
  if (Rc) return jn;
  ((Rc = 1),
    Object.defineProperty(jn, "__esModule", { value: !0 }),
    (jn.initFeatureFlags = void 0));
  const e = ce(),
    t = be(),
    r = Sa(),
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
var Pc;
function Eg() {
  if (Pc) return An;
  ((Pc = 1),
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
  Ac;
function Qf() {
  return (
    Ac ||
      ((Ac = 1),
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
  jc;
function kg() {
  if (jc) return In;
  ((jc = 1),
    Object.defineProperty(In, "__esModule", { value: !0 }),
    (In.trackFeatureFlagEvent = void 0));
  const e = ce(),
    t = be(),
    r = Qf(),
    n = Sa(),
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
var Ic;
function xg() {
  if (Ic) return Cn;
  ((Ic = 1),
    Object.defineProperty(Cn, "__esModule", { value: !0 }),
    (Cn.ForgeFeatureFlags = void 0));
  const e = Og(),
    t = Eg(),
    r = Qf(),
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
var Dc;
function Cg() {
  return (
    Dc ||
      ((Dc = 1),
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
var Tc;
function Rg() {
  return (
    Tc ||
      ((Tc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = Ct;
        var r = Ih();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Oi(), e),
          t.__exportStar(Lh(), e),
          t.__exportStar(zs(), e),
          t.__exportStar(Zh(), e),
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
var Ce = Rg();
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
var Pg = {};
function ka() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : Pg;
}
var Zf = Object.assign,
  ia = Object.getOwnPropertyDescriptor,
  yt = Object.defineProperty,
  xa = Object.prototype,
  as = [];
Object.freeze(as);
var ev = {};
Object.freeze(ev);
var Ag = typeof Proxy < "u",
  jg = Object.toString();
function tv() {
  Ag || H("Proxy not available");
}
function rv(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var jr = function () {};
function ut(e) {
  return typeof e == "function";
}
function cr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Ca(e) {
  return e !== null && typeof e == "object";
}
function Jt(e) {
  if (!Ca(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === jg;
}
function nv(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Ra(e, t, r) {
  yt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function iv(e, t, r) {
  yt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function hr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return Ca(n) && n[r] === !0;
    }
  );
}
function Vr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function Ig(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Lt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var av = typeof Object.getOwnPropertySymbols < "u";
function Dg(e) {
  var t = Object.keys(e);
  if (!av) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return xa.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Pa =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : av
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function ov(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function zt(e, t) {
  return xa.hasOwnProperty.call(e, t);
}
var Tg =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Pa(t).forEach(function (n) {
        r[n] = ia(t, n);
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
function Mc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Mg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Fg(n.key), n));
  }
}
function Gr(e, t, r) {
  return (t && Mg(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Ir(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Ng(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lr() {
  return (
    (lr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    lr.apply(null, arguments)
  );
}
function sv(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), os(e, t));
}
function os(e, t) {
  return (
    (os = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    os(e, t)
  );
}
function Lg(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Fg(e) {
  var t = Lg(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ng(e, t) {
  if (e) {
    if (typeof e == "string") return Mc(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Mc(e, t)
          : void 0
    );
  }
}
var bt = Symbol("mobx-stored-annotations");
function mt(e) {
  function t(r, n) {
    if (Ei(n)) return e.decorate_20223_(r, n);
    Si(r, n, e);
  }
  return Object.assign(t, e);
}
function Si(e, t, r) {
  (zt(e, bt) || Ra(e, bt, lr({}, e[bt])), Gg(r) || (e[bt][t] = r));
}
function zg(e) {
  return (zt(e, bt) || Ra(e, bt, lr({}, e[bt])), e[bt]);
}
function Ei(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var F = Symbol("mobx administration"),
  Qt = (function () {
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
        return Sv(this);
      }),
      (t.reportChanged = function () {
        (Je(), Ev(this), Xe());
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
Qt.isBeingObservedMask_ = 1;
Qt.isPendingUnobservationMask_ = 2;
Qt.diffValueMask_ = 4;
var Bs = hr("Atom", Qt);
function uv(e, t, r) {
  (t === void 0 && (t = jr), r === void 0 && (r = jr));
  var n = new Qt(e);
  return (t !== jr && J_(n, t), r !== jr && Pv(n, r), n);
}
function Bg(e, t) {
  return qv(e, t);
}
function qg(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var aa = { structural: Bg, default: qg };
function dr(e, t, r) {
  return Dv(e)
    ? e
    : Array.isArray(e)
      ? oe.array(e, { name: r })
      : Jt(e)
        ? oe.object(e, void 0, { name: r })
        : Vr(e)
          ? oe.map(e, { name: r })
          : Lt(e)
            ? oe.set(e, { name: r })
            : typeof e == "function" && !Lr(e) && !di(e)
              ? nv(e)
                ? Fr(e)
                : li(r, e)
              : e;
}
function Ug(e, t, r) {
  if (e == null || Fa(e) || La(e) || _r(e) || _t(e)) return e;
  if (Array.isArray(e)) return oe.array(e, { name: r, deep: !1 });
  if (Jt(e)) return oe.object(e, void 0, { name: r, deep: !1 });
  if (Vr(e)) return oe.map(e, { name: r, deep: !1 });
  if (Lt(e)) return oe.set(e, { name: r, deep: !1 });
}
function Aa(e) {
  return e;
}
function $g(e, t) {
  return qv(e, t) ? t : e;
}
var Vg = "override";
function Gg(e) {
  return e.annotationType_ === Vg;
}
function ki(e, t) {
  return { annotationType_: e, options_: t, make_: Hg, extend_: Wg, decorate_20223_: Kg };
}
function Hg(e, t, r, n) {
  var i;
  if ((i = this.options_) != null && i.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Lr(r.value)) return 1;
  var a = cv(e, this, t, r, !1);
  return (yt(n, t, a), 2);
}
function Wg(e, t, r, n) {
  var i = cv(e, this, t, r);
  return e.defineProperty_(t, i, n);
}
function Kg(e, t) {
  var r = t.kind,
    n = t.name,
    i = t.addInitializer,
    a = this,
    o = function (c) {
      var l, d, f, h;
      return fr(
        (l = (d = a.options_) == null ? void 0 : d.name) != null ? l : n.toString(),
        c,
        (f = (h = a.options_) == null ? void 0 : h.autoAction) != null ? f : !1,
      );
    };
  if (r == "field")
    return function (s) {
      var c,
        l = s;
      return (
        Lr(l) || (l = o(l)),
        (c = a.options_) != null && c.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var u;
    return (
      Lr(e) || (e = o(e)),
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
function Yg(e, t, r, n) {
  (t.annotationType_, n.value);
}
function cv(e, t, r, n, i) {
  var a, o, u, s, c, l, d;
  (i === void 0 && (i = A.safeDescriptors), Yg(e, t, r, n));
  var f = n.value;
  if ((a = t.options_) != null && a.bound) {
    var h;
    f = f.bind((h = e.proxy_) != null ? h : e.target_);
  }
  return {
    value: fr(
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
function lv(e, t) {
  return { annotationType_: e, options_: t, make_: Jg, extend_: Xg, decorate_20223_: Qg };
}
function Jg(e, t, r, n) {
  var i;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (i = this.options_) != null &&
    i.bound &&
    (!zt(e.target_, t) || !di(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (di(r.value)) return 1;
  var a = dv(e, this, t, r, !1, !1);
  return (yt(n, t, a), 2);
}
function Xg(e, t, r, n) {
  var i,
    a = dv(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, a, n);
}
function Qg(e, t) {
  var r,
    n = t.name,
    i = t.addInitializer;
  return (
    di(e) || (e = Fr(e)),
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
function Zg(e, t, r, n) {
  (t.annotationType_, n.value);
}
function dv(e, t, r, n, i, a) {
  (a === void 0 && (a = A.safeDescriptors), Zg(e, t, r, n));
  var o = n.value;
  if ((di(o) || (o = Fr(o)), i)) {
    var u;
    ((o = o.bind((u = e.proxy_) != null ? u : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: a ? e.isPlainObject_ : !0, enumerable: !1, writable: !a };
}
function qs(e, t) {
  return { annotationType_: e, options_: t, make_: e_, extend_: t_, decorate_20223_: r_ };
}
function e_(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function t_(e, t, r, n) {
  return (
    n_(e, this, t, r),
    e.defineComputedProperty_(t, lr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function r_(e, t) {
  var r = this,
    n = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var a = Hr(this)[F],
        o = lr({}, r.options_, { get: e, context: this });
      (o.name || (o.name = "ObservableObject." + n.toString()), a.values_.set(n, new ct(o)));
    }),
    function () {
      return this[F].getObservablePropValue_(n);
    }
  );
}
function n_(e, t, r, n) {
  (t.annotationType_, n.get);
}
function ja(e, t) {
  return { annotationType_: e, options_: t, make_: i_, extend_: a_, decorate_20223_: o_ };
}
function i_(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function a_(e, t, r, n) {
  var i, a;
  return (
    s_(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (i = (a = this.options_) == null ? void 0 : a.enhancer) != null ? i : dr,
      n,
    )
  );
}
function o_(e, t) {
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
        (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : dr,
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
function s_(e, t, r, n) {
  t.annotationType_;
}
var u_ = "true",
  c_ = fv();
function fv(e) {
  return { annotationType_: u_, options_: e, make_: l_, extend_: d_, decorate_20223_: f_ };
}
function l_(e, t, r, n) {
  var i, a;
  if (r.get) return Ia.make_(e, t, r, n);
  if (r.set) {
    var o = Lr(r.set) ? r.set : fr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: A.safeDescriptors ? e.isPlainObject_ : !0,
          set: o,
        }) === null
        ? 0
        : 2
      : (yt(n, t, { configurable: !0, set: o }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var u;
    if (nv(r.value)) {
      var s,
        c = (s = this.options_) != null && s.autoBind ? Fr.bound : Fr;
      return c.make_(e, t, r, n);
    }
    var l = (u = this.options_) != null && u.autoBind ? li.bound : li;
    return l.make_(e, t, r, n);
  }
  var d = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? oe.ref : oe;
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function d_(e, t, r, n) {
  var i, a;
  if (r.get) return Ia.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: A.safeDescriptors ? e.isPlainObject_ : !0, set: fr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var u = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? oe.ref : oe;
  return u.extend_(e, t, r, n);
}
function f_(e, t) {
  H("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var v_ = "observable",
  p_ = "observable.ref",
  h_ = "observable.shallow",
  g_ = "observable.struct",
  vv = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(vv);
function Li(e) {
  return e || vv;
}
var ss = ja(v_),
  __ = ja(p_, { enhancer: Aa }),
  b_ = ja(h_, { enhancer: Ug }),
  y_ = ja(g_, { enhancer: $g }),
  pv = mt(ss);
function Fi(e) {
  return e.deep === !0 ? dr : e.deep === !1 ? Aa : w_(e.defaultDecorator);
}
function m_(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : fv(e)) : void 0;
}
function w_(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : dr;
}
function hv(e, t, r) {
  if (Ei(t)) return ss.decorate_20223_(e, t);
  if (cr(t)) {
    Si(e, t, ss);
    return;
  }
  return Dv(e)
    ? e
    : Jt(e)
      ? oe.object(e, t, r)
      : Array.isArray(e)
        ? oe.array(e, t)
        : Vr(e)
          ? oe.map(e, t)
          : Lt(e)
            ? oe.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : oe.box(e, t);
}
Zf(hv, pv);
var O_ = {
    box: function (t, r) {
      var n = Li(r);
      return new sr(t, Fi(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = Li(r);
      return (A.useProxies === !1 || n.proxy === !1 ? mb : lb)(t, Fi(n), n.name);
    },
    map: function (t, r) {
      var n = Li(r);
      return new Mv(t, Fi(n), n.name);
    },
    set: function (t, r) {
      var n = Li(r);
      return new Lv(t, Fi(n), n.name);
    },
    object: function (t, r, n) {
      return br(function () {
        return eb(A.useProxies === !1 || n?.proxy === !1 ? Hr({}, n) : sb({}, n), t, r);
      });
    },
    ref: mt(__),
    shallow: mt(b_),
    deep: pv,
    struct: mt(y_),
  },
  oe = Zf(hv, O_),
  gv = "computed",
  S_ = "computed.struct",
  us = qs(gv),
  E_ = qs(S_, { equals: aa.structural }),
  Ia = function (t, r) {
    if (Ei(r)) return us.decorate_20223_(t, r);
    if (cr(r)) return Si(t, r, us);
    if (Jt(t)) return mt(qs(gv, t));
    var n = Jt(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new ct(n));
  };
Object.assign(Ia, us);
Ia.struct = mt(E_);
var Lc,
  Fc,
  oa = 0,
  k_ = 1,
  x_ =
    (Lc = (Fc = ia(function () {}, "name")) == null ? void 0 : Fc.configurable) != null ? Lc : !1,
  Nc = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function fr(e, t, r, n) {
  r === void 0 && (r = !1);
  function i() {
    return C_(e, r, t, n || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    x_ && ((Nc.value = e), yt(i, "name", Nc)),
    i
  );
}
function C_(e, t, r, n, i) {
  var a = R_(e, t);
  try {
    return r.apply(n, i);
  } catch (o) {
    throw ((a.error_ = o), o);
  } finally {
    P_(a);
  }
}
function R_(e, t, r, n) {
  var i = !1,
    a = 0,
    o = A.trackingDerivation,
    u = !t || !o;
  Je();
  var s = A.allowStateChanges;
  u && (gr(), (s = Da(!0)));
  var c = Us(!0),
    l = {
      runAsAction_: u,
      prevDerivation_: o,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: c,
      notifySpy_: i,
      startTime_: a,
      actionId_: k_++,
      parentActionId_: oa,
    };
  return ((oa = l.actionId_), l);
}
function P_(e) {
  (oa !== e.actionId_ && H(30),
    (oa = e.parentActionId_),
    e.error_ !== void 0 && (A.suppressReactionErrors = !0),
    Ta(e.prevAllowStateChanges_),
    ri(e.prevAllowStateReads_),
    Xe(),
    e.runAsAction_ && Bt(e.prevDerivation_),
    (A.suppressReactionErrors = !1));
}
function A_(e, t) {
  var r = Da(e);
  try {
    return t();
  } finally {
    Ta(r);
  }
}
function Da(e) {
  var t = A.allowStateChanges;
  return ((A.allowStateChanges = e), t);
}
function Ta(e) {
  A.allowStateChanges = e;
}
var sr = (function (e) {
    function t(n, i, a, o, u) {
      var s;
      return (
        a === void 0 && (a = "ObservableValue"),
        u === void 0 && (u = aa.default),
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
    sv(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (i) {
        return this.dehancer !== void 0 ? this.dehancer(i) : i;
      }),
      (r.set = function (i) {
        (this.value_, (i = this.prepareNewValue_(i)), i !== A.UNCHANGED && this.setNewValue_(i));
      }),
      (r.prepareNewValue_ = function (i) {
        if (Ke(this)) {
          var a = Ye(this, { object: this, type: wt, newValue: i });
          if (!a) return A.UNCHANGED;
          i = a.newValue;
        }
        return (
          (i = this.enhancer(i, this.value_, this.name_)),
          this.equals(this.value_, i) ? A.UNCHANGED : i
        );
      }),
      (r.setNewValue_ = function (i) {
        var a = this.value_;
        ((this.value_ = i),
          this.reportChanged(),
          ot(this) && st(this, { type: wt, object: this, newValue: i, oldValue: a }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (i) {
        return xi(this, i);
      }),
      (r.observe_ = function (i, a) {
        return (
          a &&
            i({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: wt,
              newValue: this.value_,
              oldValue: void 0,
            }),
          Ci(this, i)
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
        return ov(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(Qt),
  ct = (function () {
    function e(r) {
      ((this.dependenciesState_ = W.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = W.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new ua(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = sa.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || H(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = fr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? aa.structural : aa.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        M_(this);
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
          A.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          cs(this) &&
            (this.warnAboutUntrackedRead_(), Je(), (this.value_ = this.computeValue_(!1)), Xe());
        else if ((Sv(this), cs(this))) {
          var n = A.trackingContext;
          (this.keepAlive_ && !n && (A.trackingContext = this),
            this.trackAndCompute() && T_(this),
            (A.trackingContext = n));
        }
        var i = this.value_;
        if (Wi(i)) throw i.cause;
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
          o = i || Wi(n) || Wi(a) || !this.equals_(n, a);
        return (o && (this.value_ = a), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var i = Da(!1),
          a;
        if (n) a = _v(this, this.derivation, this.scope_);
        else if (A.disableErrorBoundaries === !0) a = this.derivation.call(this.scope_);
        else
          try {
            a = this.derivation.call(this.scope_);
          } catch (o) {
            a = new ua(o);
          }
        return (Ta(i), (this.isComputing = !1), a);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (ls(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, i) {
        var a = this,
          o = !0,
          u = void 0;
        return G_(function () {
          var s = a.get();
          if (!o || i) {
            var c = gr();
            (n({
              observableKind: "computed",
              debugObjectName: a.name_,
              type: wt,
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
        return ov(this.get());
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
ct.isComputingMask_ = 1;
ct.isRunningSetterMask_ = 2;
ct.isBeingObservedMask_ = 4;
ct.isPendingUnobservationMask_ = 8;
ct.diffValueMask_ = 16;
var Ma = hr("ComputedValue", ct),
  W;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(W || (W = {}));
var sa;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(sa || (sa = {}));
var ua = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function Wi(e) {
  return e instanceof ua;
}
function cs(e) {
  switch (e.dependenciesState_) {
    case W.UP_TO_DATE_:
      return !1;
    case W.NOT_TRACKING_:
    case W.STALE_:
      return !0;
    case W.POSSIBLY_STALE_: {
      for (var t = Us(!0), r = gr(), n = e.observing_, i = n.length, a = 0; a < i; a++) {
        var o = n[a];
        if (Ma(o)) {
          if (A.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Bt(r), ri(t), !0);
            }
          if (e.dependenciesState_ === W.STALE_) return (Bt(r), ri(t), !0);
        }
      }
      return (yv(e), Bt(r), ri(t), !1);
    }
  }
}
function _v(e, t, r) {
  var n = Us(!0);
  (yv(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++A.runId));
  var i = A.trackingDerivation;
  ((A.trackingDerivation = e), A.inBatch++);
  var a;
  if (A.disableErrorBoundaries === !0) a = t.call(r);
  else
    try {
      a = t.call(r);
    } catch (o) {
      a = new ua(o);
    }
  return (A.inBatch--, (A.trackingDerivation = i), j_(e), ri(n), a);
}
function j_(e) {
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
    (s.diffValue === 0 && wv(s, e), (s.diffValue = 0));
  }
  for (; i--; ) {
    var c = r[i];
    c.diffValue === 1 && ((c.diffValue = 0), D_(c, e));
  }
  n !== W.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function ls(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) wv(t[r], e);
  e.dependenciesState_ = W.NOT_TRACKING_;
}
function bv(e) {
  var t = gr();
  try {
    return e();
  } finally {
    Bt(t);
  }
}
function gr() {
  var e = A.trackingDerivation;
  return ((A.trackingDerivation = null), e);
}
function Bt(e) {
  A.trackingDerivation = e;
}
function Us(e) {
  var t = A.allowStateReads;
  return ((A.allowStateReads = e), t);
}
function ri(e) {
  A.allowStateReads = e;
}
function yv(e) {
  if (e.dependenciesState_ !== W.UP_TO_DATE_) {
    e.dependenciesState_ = W.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = W.UP_TO_DATE_;
  }
}
var Ki = function () {
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
  Yi = !0,
  mv = !1,
  A = (function () {
    var e = ka();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Yi = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new Ki().version && (Yi = !1),
      Yi
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Ki()))
        : (setTimeout(function () {
            mv || H(35);
          }, 1),
          new Ki())
    );
  })();
function I_() {
  if (((A.pendingReactions.length || A.inBatch || A.isRunningReactions) && H(36), (mv = !0), Yi)) {
    var e = ka();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (A = new Ki()));
  }
}
function D_(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function wv(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Ov(e));
}
function Ov(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), A.pendingUnobservations.push(e));
}
function Je() {
  A.inBatch++;
}
function Xe() {
  if (--A.inBatch === 0) {
    kv();
    for (var e = A.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof ct && r.suspend_()));
    }
    A.pendingUnobservations = [];
  }
}
function Sv(e) {
  var t = A.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && A.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && A.inBatch > 0 && Ov(e), !1);
}
function Ev(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === W.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = W.STALE_));
    }));
}
function T_(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.POSSIBLY_STALE_
        ? (t.dependenciesState_ = W.STALE_)
        : t.dependenciesState_ === W.UP_TO_DATE_ && (e.lowestObserverState_ = W.UP_TO_DATE_);
    }));
}
function M_(e) {
  e.lowestObserverState_ === W.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = W.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.UP_TO_DATE_ &&
        ((t.dependenciesState_ = W.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var kt = (function () {
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
      (this.isTracing_ = sa.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), A.pendingReactions.push(this), kv());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Je(), (this.isScheduled = !1));
        var n = A.trackingContext;
        if (((A.trackingContext = this), cs(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (i) {
            this.reportExceptionInDerivation_(i);
          }
        }
        ((A.trackingContext = n), Xe());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (Je(), (this.isRunning = !0));
        var i = A.trackingContext;
        A.trackingContext = this;
        var a = _v(this, n, void 0);
        ((A.trackingContext = i),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && ls(this),
          Wi(a) && this.reportExceptionInDerivation_(a.cause),
          Xe());
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var i = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (A.disableErrorBoundaries) throw n;
      var a = "[mobx] uncaught error in '" + this + "'";
      (A.suppressReactionErrors || console.error(a, n),
        A.globalReactionErrorHandlers.forEach(function (o) {
          return o(n, i);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Je(), ls(this), Xe()));
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
kt.isDisposedMask_ = 1;
kt.isScheduledMask_ = 2;
kt.isTrackPendingMask_ = 4;
kt.isRunningMask_ = 8;
kt.diffValueMask_ = 16;
var L_ = 100,
  ds = function (t) {
    return t();
  };
function kv() {
  A.inBatch > 0 || A.isRunningReactions || ds(F_);
}
function F_() {
  A.isRunningReactions = !0;
  for (var e = A.pendingReactions, t = 0; e.length > 0; ) {
    ++t === L_ && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, i = r.length; n < i; n++) r[n].runReaction_();
  }
  A.isRunningReactions = !1;
}
var ca = hr("Reaction", kt);
function N_(e) {
  var t = ds;
  ds = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function ni() {
  return !1;
}
function z_(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var xv = "action",
  B_ = "action.bound",
  Cv = "autoAction",
  q_ = "autoAction.bound",
  U_ = "<unnamed action>",
  fs = ki(xv),
  $_ = ki(B_, { bound: !0 }),
  vs = ki(Cv, { autoAction: !0 }),
  V_ = ki(q_, { autoAction: !0, bound: !0 });
function Rv(e) {
  var t = function (n, i) {
    if (ut(n)) return fr(n.name || U_, n, e);
    if (ut(i)) return fr(n, i, e);
    if (Ei(i)) return (e ? vs : fs).decorate_20223_(n, i);
    if (cr(i)) return Si(n, i, e ? vs : fs);
    if (cr(n)) return mt(ki(e ? Cv : xv, { name: n, autoAction: e }));
  };
  return t;
}
var Qe = Rv(!1);
Object.assign(Qe, fs);
var li = Rv(!0);
Object.assign(li, vs);
Qe.bound = mt($_);
li.bound = mt(V_);
function Lr(e) {
  return ut(e) && e.isMobxAction === !0;
}
function G_(e, t) {
  var r, n, i, a;
  t === void 0 && (t = ev);
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    u = !t.scheduler && !t.delay,
    s;
  if (u)
    s = new kt(
      o,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var c = W_(t),
      l = !1;
    s = new kt(
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
var H_ = function (t) {
  return t();
};
function W_(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : H_;
}
var K_ = "onBO",
  Y_ = "onBUO";
function J_(e, t, r) {
  return Av(K_, e, t, r);
}
function Pv(e, t, r) {
  return Av(Y_, e, t, r);
}
function Av(e, t, r, n) {
  var i = fa(t),
    a = ut(n) ? n : r,
    o = e + "L";
  return (
    i[o] ? i[o].add(a) : (i[o] = new Set([a])),
    function () {
      var u = i[o];
      u && (u.delete(a), u.size === 0 && delete i[o]);
    }
  );
}
var X_ = "never",
  Ni = "always",
  Q_ = "observed";
function Z_(e) {
  e.isolateGlobalState === !0 && I_();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (A.useProxies = t === Ni ? !0 : t === X_ ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (A.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Ni ? Ni : r === Q_;
    ((A.enforceActions = n), (A.allowStateChanges = !(n === !0 || n === Ni)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (i) {
    i in e && (A[i] = !!e[i]);
  }),
    (A.allowStateReads = !A.observableRequiresReaction),
    e.reactionScheduler && N_(e.reactionScheduler));
}
function eb(e, t, r, n) {
  var i = Tg(t);
  return (
    br(function () {
      var a = Hr(e, n)[F];
      Pa(i).forEach(function (o) {
        a.extend_(o, i[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function tb(e, t) {
  return jv(fa(e, t));
}
function jv(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = rb(e.observing_).map(jv)),
    t
  );
}
function rb(e) {
  return Array.from(new Set(e));
}
var nb = 0;
function Iv() {
  this.message = "FLOW_CANCELLED";
}
Iv.prototype = Object.create(Error.prototype);
var So = lv("flow"),
  ib = lv("flow.bound", { bound: !0 }),
  Fr = Object.assign(function (t, r) {
    if (Ei(r)) return So.decorate_20223_(t, r);
    if (cr(r)) return Si(t, r, So);
    var n = t,
      i = n.name || "<unnamed flow>",
      a = function () {
        var u = this,
          s = arguments,
          c = ++nb,
          l = Qe(i + " - runid: " + c + " - init", n).apply(u, s),
          d,
          f = void 0,
          h = new Promise(function (v, p) {
            var g = 0;
            d = p;
            function _(O) {
              f = void 0;
              var m;
              try {
                m = Qe(i + " - runid: " + c + " - yield " + g++, l.next).call(l, O);
              } catch (S) {
                return p(S);
              }
              w(m);
            }
            function y(O) {
              f = void 0;
              var m;
              try {
                m = Qe(i + " - runid: " + c + " - yield " + g++, l.throw).call(l, O);
              } catch (S) {
                return p(S);
              }
              w(m);
            }
            function w(O) {
              if (ut(O?.then)) {
                O.then(w, p);
                return;
              }
              return O.done ? v(O.value) : ((f = Promise.resolve(O.value)), f.then(_, y));
            }
            _(void 0);
          });
        return (
          (h.cancel = Qe(i + " - runid: " + c + " - cancel", function () {
            try {
              f && zc(f);
              var v = l.return(void 0),
                p = Promise.resolve(v.value);
              (p.then(jr, jr), zc(p), d(new Iv()));
            } catch (g) {
              d(g);
            }
          })),
          h
        );
      };
    return ((a.isMobXFlow = !0), a);
  }, So);
Fr.bound = mt(ib);
function zc(e) {
  ut(e.cancel) && e.cancel();
}
function di(e) {
  return e?.isMobXFlow === !0;
}
function ab(e, t) {
  return e ? Fa(e) || !!e[F] || Bs(e) || ca(e) || Ma(e) : !1;
}
function Dv(e) {
  return ab(e);
}
function Ft(e, t) {
  (t === void 0 && (t = void 0), Je());
  try {
    return e.apply(t);
  } finally {
    Xe();
  }
}
function Sr(e) {
  return e[F];
}
var ob = {
  has: function (t, r) {
    return Sr(t).has_(r);
  },
  get: function (t, r) {
    return Sr(t).get_(r);
  },
  set: function (t, r, n) {
    var i;
    return cr(r) ? ((i = Sr(t).set_(r, n, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return cr(r) ? ((n = Sr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var i;
    return (i = Sr(t).defineProperty_(r, n)) != null ? i : !0;
  },
  ownKeys: function (t) {
    return Sr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    H(13);
  },
};
function sb(e, t) {
  var r, n;
  return (
    tv(),
    (e = Hr(e, t)),
    (n = (r = e[F]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, ob))
  );
}
function Ke(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function xi(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    rv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Ye(e, t) {
  var r = gr();
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
function ot(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Ci(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    rv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function st(e, t) {
  var r = gr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var i = 0, a = n.length; i < a; i++) n[i](t);
    Bt(r);
  }
}
function $s(e, t, r) {
  return (
    br(function () {
      var n,
        i = Hr(e, r)[F];
      ((n = t) != null || (t = zg(e)),
        Pa(t).forEach(function (a) {
          return i.make_(a, t[a]);
        }));
    }),
    e
  );
}
var Bc = "splice",
  wt = "update",
  ub = 1e4,
  cb = {
    get: function (t, r) {
      var n = t[F];
      return r === F
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : zt(la, r)
              ? la[r]
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
  Vs = (function () {
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
        (this.atom_ = new Qt(r)),
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
        return xi(this, n);
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
          Ci(this, n)
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
          this.legacyMode_ && i > 0 && Bv(n + i + 1));
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
          a === void 0 && (a = as),
          Ke(this))
        ) {
          var s = Ye(this, { object: this.proxy_, type: Bc, index: n, removedCount: i, added: a });
          if (!s) return as;
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
        if (a.length < ub) {
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
        var o = !this.owned_ && ni(),
          u = ot(this),
          s =
            u || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: wt,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: i,
                  oldValue: a,
                }
              : null;
        (this.atom_.reportChanged(), u && st(this, s));
      }),
      (t.notifyArraySplice_ = function (n, i, a) {
        var o = !this.owned_ && ni(),
          u = ot(this),
          s =
            u || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Bc,
                  index: n,
                  removed: a,
                  added: i,
                  removedCount: a.length,
                  addedCount: i.length,
                }
              : null;
        (this.atom_.reportChanged(), u && st(this, s));
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
          if (Ke(this)) {
            var u = Ye(this, { type: wt, object: this.proxy_, index: n, newValue: i });
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
function lb(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    tv(),
    br(function () {
      var i = new Vs(r, t, n, !1);
      iv(i.values_, F, i);
      var a = new Proxy(i.values_, cb);
      return ((i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a);
    })
  );
}
var la = {
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
    return (A.trackingDerivation && H(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    A.trackingDerivation && H(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[F],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
ie("at", ze);
ie("concat", ze);
ie("flat", ze);
ie("includes", ze);
ie("indexOf", ze);
ie("join", ze);
ie("lastIndexOf", ze);
ie("slice", ze);
ie("toString", ze);
ie("toLocaleString", ze);
ie("toSorted", ze);
ie("toSpliced", ze);
ie("with", ze);
ie("every", dt);
ie("filter", dt);
ie("find", dt);
ie("findIndex", dt);
ie("findLast", dt);
ie("findLastIndex", dt);
ie("flatMap", dt);
ie("forEach", dt);
ie("map", dt);
ie("some", dt);
ie("toReversed", dt);
ie("reduce", Tv);
ie("reduceRight", Tv);
function ie(e, t) {
  typeof Array.prototype[e] == "function" && (la[e] = t(e));
}
function ze(e) {
  return function () {
    var t = this[F];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function dt(e) {
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
function Tv(e) {
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
var db = hr("ObservableArrayAdministration", Vs);
function La(e) {
  return Ca(e) && db(e[F]);
}
var fb = {},
  Wt = "add",
  da = "delete",
  Mv = (function () {
    function e(r, n, i) {
      var a = this;
      (n === void 0 && (n = dr),
        i === void 0 && (i = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[F] = fb),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = i),
        ut(Map) || H(18),
        br(function () {
          ((a.keysAtom_ = uv("ObservableMap.keys()")),
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
        if (!A.trackingDerivation) return this.has_(n);
        var a = this.hasMap_.get(n);
        if (!a) {
          var o = (a = new sr(this.has_(n), Aa, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            Pv(o, function () {
              return i.hasMap_.delete(n);
            }));
        }
        return a.get();
      }),
      (t.set = function (n, i) {
        var a = this.has_(n);
        if (Ke(this)) {
          var o = Ye(this, { type: a ? wt : Wt, object: this, newValue: i, name: n });
          if (!o) return this;
          i = o.newValue;
        }
        return (a ? this.updateValue_(n, i) : this.addValue_(n, i), this);
      }),
      (t.delete = function (n) {
        var i = this;
        if ((this.keysAtom_, Ke(this))) {
          var a = Ye(this, { type: da, object: this, name: n });
          if (!a) return !1;
        }
        if (this.has_(n)) {
          var o = ni(),
            u = ot(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: da,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Ft(function () {
              var c;
              (i.keysAtom_.reportChanged(), (c = i.hasMap_.get(n)) == null || c.setNewValue_(!1));
              var l = i.data_.get(n);
              (l.setNewValue_(void 0), i.data_.delete(n));
            }),
            u && st(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, i) {
        var a = this.data_.get(n);
        if (((i = a.prepareNewValue_(i)), i !== A.UNCHANGED)) {
          var o = ni(),
            u = ot(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: wt,
                    object: this,
                    oldValue: a.value_,
                    name: n,
                    newValue: i,
                  }
                : null;
          (a.setNewValue_(i), u && st(this, s));
        }
      }),
      (t.addValue_ = function (n, i) {
        var a = this;
        (this.keysAtom_,
          Ft(function () {
            var c,
              l = new sr(i, a.enhancer_, "ObservableMap.key", !1);
            (a.data_.set(n, l),
              (i = l.value_),
              (c = a.hasMap_.get(n)) == null || c.setNewValue_(!0),
              a.keysAtom_.reportChanged());
          }));
        var o = ni(),
          u = ot(this),
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
        u && st(this, s);
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
        return qc({
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
        return qc({
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
        for (var a = Ir(this), o; !(o = a()).done; ) {
          var u = o.value,
            s = u[0],
            c = u[1];
          n.call(i, c, s, this);
        }
      }),
      (t.merge = function (n) {
        var i = this;
        return (
          _r(n) && (n = new Map(n)),
          Ft(function () {
            Jt(n)
              ? Dg(n).forEach(function (a) {
                  return i.set(a, n[a]);
                })
              : Array.isArray(n)
                ? n.forEach(function (a) {
                    var o = a[0],
                      u = a[1];
                    return i.set(o, u);
                  })
                : Vr(n)
                  ? (Ig(n) || H(19, n),
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
        Ft(function () {
          bv(function () {
            for (var i = Ir(n.keys()), a; !(a = i()).done; ) {
              var o = a.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          Ft(function () {
            for (
              var a = vb(n), o = new Map(), u = !1, s = Ir(i.data_.keys()), c;
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
            for (var h = Ir(a.entries()), v; !(v = h()).done; ) {
              var p = v.value,
                g = p[0],
                _ = p[1],
                y = i.data_.has(g);
              if ((i.set(g, _), i.data_.has(g))) {
                var w = i.data_.get(g);
                (o.set(g, w), y || (u = !0));
              }
            }
            if (!u)
              if (i.data_.size !== o.size) i.keysAtom_.reportChanged();
              else
                for (var O = i.data_.keys(), m = o.keys(), S = O.next(), C = m.next(); !S.done; ) {
                  if (S.value !== C.value) {
                    i.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = O.next()), (C = m.next()));
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
        return Ci(this, n);
      }),
      (t.intercept_ = function (n) {
        return xi(this, n);
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
  _r = hr("ObservableMap", Mv);
function qc(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Hs(e));
}
function vb(e) {
  if (Vr(e) || _r(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (Jt(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return H(21, e);
}
var pb = {},
  Lv = (function () {
    function e(r, n, i) {
      var a = this;
      (n === void 0 && (n = dr),
        i === void 0 && (i = "ObservableSet"),
        (this.name_ = void 0),
        (this[F] = pb),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = i),
        ut(Set) || H(22),
        (this.enhancer_ = function (o, u) {
          return n(o, u, i);
        }),
        br(function () {
          ((a.atom_ = uv(a.name_)), r && a.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Ft(function () {
          bv(function () {
            for (var i = Ir(n.data_.values()), a; !(a = i()).done; ) {
              var o = a.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.forEach = function (n, i) {
        for (var a = Ir(this), o; !(o = a()).done; ) {
          var u = o.value;
          n.call(i, u, u, this);
        }
      }),
      (t.add = function (n) {
        var i = this;
        if ((this.atom_, Ke(this))) {
          var a = Ye(this, { type: Wt, object: this, newValue: n });
          if (!a) return this;
          n = a.newValue;
        }
        if (!this.has(n)) {
          Ft(function () {
            (i.data_.add(i.enhancer_(n, void 0)), i.atom_.reportChanged());
          });
          var o = !1,
            u = ot(this),
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
          u && st(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var i = this;
        if (Ke(this)) {
          var a = Ye(this, { type: da, object: this, oldValue: n });
          if (!a) return !1;
        }
        if (this.has(n)) {
          var o = !1,
            u = ot(this),
            s =
              u || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: da,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Ft(function () {
              (i.atom_.reportChanged(), i.data_.delete(n));
            }),
            u && st(this, s),
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
        return Uc({
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
        return Uc({
          next: function () {
            var o = i.next(),
              u = o.value,
              s = o.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(u), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Lt(n) && !_t(n)) return n.intersection(this);
        var i = new Set(this);
        return i.intersection(n);
      }),
      (t.union = function (n) {
        if (Lt(n) && !_t(n)) return n.union(this);
        var i = new Set(this);
        return i.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Lt(n) && !_t(n)) return n.symmetricDifference(this);
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
        if (Lt(n) && !_t(n)) return n.isDisjointFrom(this);
        var i = new Set(this);
        return i.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          _t(n) && (n = new Set(n)),
          Ft(function () {
            Array.isArray(n)
              ? (i.clear(),
                n.forEach(function (a) {
                  return i.add(a);
                }))
              : Lt(n)
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
        return Ci(this, n);
      }),
      (t.intercept_ = function (n) {
        return xi(this, n);
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
  _t = hr("ObservableSet", Lv);
function Uc(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Hs(e));
}
var $c = Object.create(null),
  Vc = "remove",
  Fv = (function () {
    function e(r, n, i, a) {
      (n === void 0 && (n = new Map()),
        a === void 0 && (a = c_),
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
        (this.keysAtom_ = new Qt("ObservableObject.keys")),
        (this.isPlainObject_ = Jt(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, i) {
        var a = this.values_.get(n);
        if (a instanceof ct) return (a.set(i), !0);
        if (Ke(this)) {
          var o = Ye(this, { type: wt, object: this.proxy_ || this.target_, name: n, newValue: i });
          if (!o) return null;
          i = o.newValue;
        }
        if (((i = a.prepareNewValue_(i)), i !== A.UNCHANGED)) {
          var u = ot(this),
            s = !1,
            c =
              u || s
                ? {
                    type: wt,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: a.value_,
                    name: n,
                    newValue: i,
                  }
                : null;
          (a.setNewValue_(i), u && st(this, c));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (A.trackingDerivation && !zt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, i, a) {
        return (
          a === void 0 && (a = !1),
          zt(this.target_, n)
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
        if (!A.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var i = this.pendingKeys_.get(n);
        return (
          i ||
            ((i = new sr(n in this.target_, Aa, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, i)),
          i.get()
        );
      }),
      (t.make_ = function (n, i) {
        if ((i === !0 && (i = this.defaultAnnotation_), i !== !1)) {
          if (!(n in this.target_)) {
            var a;
            if ((a = this.target_[bt]) != null && a[n]) return;
            H(1, i.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== xa; ) {
            var u = ia(o, n);
            if (u) {
              var s = i.make_(this, n, u, o);
              if (s === 0) return;
              if (s === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          Hc(this, i, n);
        }
      }),
      (t.extend_ = function (n, i, a, o) {
        if ((o === void 0 && (o = !1), a === !0 && (a = this.defaultAnnotation_), a === !1))
          return this.defineProperty_(n, i, o);
        var u = a.extend_(this, n, i, o);
        return (u && Hc(this, a, n), u);
      }),
      (t.defineProperty_ = function (n, i, a) {
        (a === void 0 && (a = !1), this.keysAtom_);
        try {
          Je();
          var o = this.delete_(n);
          if (!o) return o;
          if (Ke(this)) {
            var u = Ye(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Wt,
              newValue: i.value,
            });
            if (!u) return null;
            var s = u.newValue;
            i.value !== s && (i = lr({}, i, { value: s }));
          }
          if (a) {
            if (!Reflect.defineProperty(this.target_, n, i)) return !1;
          } else yt(this.target_, n, i);
          this.notifyPropertyAddition_(n, i.value);
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, i, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          Je();
          var u = this.delete_(n);
          if (!u) return u;
          if (Ke(this)) {
            var s = Ye(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Wt,
              newValue: i,
            });
            if (!s) return null;
            i = s.newValue;
          }
          var c = Gc(n),
            l = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: c.get,
              set: c.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else yt(this.target_, n, l);
          var d = new sr(i, a, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, i, a) {
        (a === void 0 && (a = !1), this.keysAtom_);
        try {
          Je();
          var o = this.delete_(n);
          if (!o) return o;
          if (Ke(this)) {
            var u = Ye(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Wt,
              newValue: void 0,
            });
            if (!u) return null;
          }
          (i.name || (i.name = "ObservableObject.key"), (i.context = this.proxy_ || this.target_));
          var s = Gc(n),
            c = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (a) {
            if (!Reflect.defineProperty(this.target_, n, c)) return !1;
          } else yt(this.target_, n, c);
          (this.values_.set(n, new ct(i)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.delete_ = function (n, i) {
        if ((i === void 0 && (i = !1), this.keysAtom_, !zt(this.target_, n))) return !0;
        if (Ke(this)) {
          var a = Ye(this, { object: this.proxy_ || this.target_, name: n, type: Vc });
          if (!a) return null;
        }
        try {
          var o;
          Je();
          var u = ot(this),
            s = !1,
            c = this.values_.get(n),
            l = void 0;
          if (!c && (u || s)) {
            var d;
            l = (d = ia(this.target_, n)) == null ? void 0 : d.value;
          }
          if (i) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c && (this.values_.delete(n), c instanceof sr && (l = c.value_), Ev(c)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            u || s)
          ) {
            var f = {
              type: Vc,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            u && st(this, f);
          }
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.observe_ = function (n, i) {
        return Ci(this, n);
      }),
      (t.intercept_ = function (n) {
        return xi(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, i) {
        var a,
          o = ot(this),
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
          o && st(this, s);
        }
        ((a = this.pendingKeys_) == null || (a = a.get(n)) == null || a.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), Pa(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function Hr(e, t) {
  var r;
  if (zt(e, F)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    i = new Fv(e, new Map(), String(n), m_(t));
  return (Ra(e, F, i), e);
}
var hb = hr("ObservableObjectAdministration", Fv);
function Gc(e) {
  return (
    $c[e] ||
    ($c[e] = {
      get: function () {
        return this[F].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[F].setObservablePropValue_(e, r);
      },
    })
  );
}
function Fa(e) {
  return Ca(e) ? hb(e[F]) : !1;
}
function Hc(e, t, r) {
  var n;
  (n = e.target_[bt]) == null || delete n[r];
}
var gb = zv(0),
  _b = (function () {
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
  Eo = 0,
  Nv = function () {};
function bb(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
bb(Nv, Array.prototype);
var Gs = (function (e) {
  function t(n, i, a, o) {
    var u;
    return (
      a === void 0 && (a = "ObservableArray"),
      o === void 0 && (o = !1),
      (u = e.call(this) || this),
      br(function () {
        var s = new Vs(a, i, o, !0);
        ((s.proxy_ = u),
          iv(u, F, s),
          n && n.length && u.spliceWithArray(0, 0, n),
          _b && Object.defineProperty(u, "0", gb));
      }),
      u
    );
  }
  sv(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[F].atom_.reportObserved();
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        a.map(function (u) {
          return La(u) ? u.slice() : u;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        i = 0;
      return Hs({
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
})(Nv);
Object.entries(la).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Ra(Gs.prototype, t, r);
});
function zv(e) {
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
function yb(e) {
  yt(Gs.prototype, "" + e, zv(e));
}
function Bv(e) {
  if (e > Eo) {
    for (var t = Eo; t < e + 100; t++) yb(t);
    Eo = e;
  }
}
Bv(1e3);
function mb(e, t, r) {
  return new Gs(e, t, r);
}
function fa(e, t) {
  if (typeof e == "object" && e !== null) {
    if (La(e)) return (t !== void 0 && H(23), e[F].atom_);
    if (_t(e)) return e.atom_;
    if (_r(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || H(25, t, ps(e)), r);
    }
    if (Fa(e)) {
      if (!t) return H(26);
      var n = e[F].values_.get(t);
      return (n || H(27, t, ps(e)), n);
    }
    if (Bs(e) || Ma(e) || ca(e)) return e;
  } else if (ut(e) && ca(e[F])) return e[F];
  H(28);
}
function wb(e, t) {
  if ((e || H(29), Bs(e) || Ma(e) || ca(e) || _r(e) || _t(e))) return e;
  if (e[F]) return e[F];
  H(24, e);
}
function ps(e, t) {
  var r;
  if (t !== void 0) r = fa(e, t);
  else {
    if (Lr(e)) return e.name;
    Fa(e) || _r(e) || _t(e) ? (r = wb(e)) : (r = fa(e));
  }
  return r.name_;
}
function br(e) {
  var t = gr(),
    r = Da(!0);
  Je();
  try {
    return e();
  } finally {
    (Xe(), Ta(r), Bt(t));
  }
}
var Wc = xa.toString;
function qv(e, t, r) {
  return (r === void 0 && (r = -1), hs(e, t, r));
}
function hs(e, t, r, n, i) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var a = typeof e;
  if (a !== "function" && a !== "object" && typeof t != "object") return !1;
  var o = Wc.call(e);
  if (o !== Wc.call(t)) return !1;
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
  ((e = Kc(e)), (t = Kc(t)));
  var u = o === "[object Array]";
  if (!u) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      c = t.constructor;
    if (
      s !== c &&
      !(ut(s) && s instanceof s && ut(c) && c instanceof c) &&
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
    for (; l--; ) if (!hs(e[l], t[l], r - 1, n, i)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var h = 0; h < f; h++) {
      var v = d[h];
      if (!(zt(t, v) && hs(e[v], t[v], r - 1, n, i))) return !1;
    }
  }
  return (n.pop(), i.pop(), !0);
}
function Kc(e) {
  return La(e) ? e.slice() : Vr(e) || _r(e) || Lt(e) || _t(e) ? Array.from(e.entries()) : e;
}
var Yc,
  Ob = ((Yc = ka().Iterator) == null ? void 0 : Yc.prototype) || {};
function Hs(e) {
  return ((e[Symbol.iterator] = Sb), Object.assign(Object.create(Ob), e));
}
function Sb() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = ka();
  typeof t[e] > "u" && H("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: z_, extras: { getDebugName: ps }, $mobx: F });
var b = lt();
const E = Xt(b),
  Jc = kh({ __proto__: null, default: E }, [b]);
if (!b.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!$s) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Eb(e) {
  e();
}
function kb(e) {
  (e || (e = Eb), Z_({ reactionScheduler: e }));
}
function xb(e) {
  return tb(e);
}
var Cb = 1e4,
  Rb = 1e4,
  Pb = (function () {
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
            (n === void 0 && (n = Cb), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, Rb));
        },
      }),
      e
    );
  })(),
  Ab = typeof FinalizationRegistry < "u" ? FinalizationRegistry : Pb,
  fi = new Ab(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  ko = { exports: {} },
  xo = {};
var Xc;
function jb() {
  if (Xc) return xo;
  Xc = 1;
  var e = lt();
  function t(d, f) {
    return (d === f && (d !== 0 || 1 / d === 1 / f)) || (d !== d && f !== f);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    i = e.useEffect,
    a = e.useLayoutEffect,
    o = e.useDebugValue;
  function u(d, f) {
    var h = f(),
      v = n({ inst: { value: h, getSnapshot: f } }),
      p = v[0].inst,
      g = v[1];
    return (
      a(
        function () {
          ((p.value = h), (p.getSnapshot = f), s(p) && g({ inst: p }));
        },
        [d, h, f],
      ),
      i(
        function () {
          return (
            s(p) && g({ inst: p }),
            d(function () {
              s(p) && g({ inst: p });
            })
          );
        },
        [d],
      ),
      o(h),
      h
    );
  }
  function s(d) {
    var f = d.getSnapshot;
    d = d.value;
    try {
      var h = f();
      return !r(d, h);
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
    (xo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    xo
  );
}
var Qc;
function Ib() {
  return (Qc || ((Qc = 1), (ko.exports = jb())), ko.exports);
}
var Db = Ib();
function Zc(e) {
  e.reaction = new kt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function Tb(e, t) {
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
          fi.unregister(n),
          (n.onStoreChange = u),
          n.reaction || (Zc(n), (n.stateVersion = Symbol())),
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
  (i.reaction || (Zc(i), fi.register(r, i, i)),
    E.useDebugValue(i.reaction, xb),
    Db.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot));
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
var Co,
  Ro,
  Uv = typeof Symbol == "function" && Symbol.for,
  Mb =
    (Ro =
      (Co = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Co === void 0
        ? void 0
        : Co.configurable) !== null && Ro !== void 0
      ? Ro
      : !1,
  el = Uv
    ? Symbol.for("react.forward_ref")
    : typeof b.forwardRef == "function" &&
      b.forwardRef(function (e) {
        return null;
      }).$$typeof,
  tl = Uv
    ? Symbol.for("react.memo")
    : typeof b.memo == "function" &&
      b.memo(function (e) {
        return null;
      }).$$typeof;
function Lb(e, t) {
  var r;
  if (tl && e.$$typeof === tl)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    i = e,
    a = e.displayName || e.name;
  if (el && e.$$typeof === el && ((n = !0), (i = e.render), typeof i != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (u, s) {
    return Tb(function () {
      return i(u, s);
    }, a);
  };
  return (
    (o.displayName = e.displayName),
    Mb && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = b.forwardRef(o)),
    (o = b.memo(o)),
    Nb(e, o),
    o
  );
}
var Fb = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function Nb(e, t) {
  Object.keys(e).forEach(function (r) {
    Fb[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Po;
kb(wa.unstable_batchedUpdates);
Po = fi.finalizeAllImmediately;
function zb(e, t) {
  if (rl(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var i = 0; i < r.length; i++)
    if (!Object.hasOwnProperty.call(t, r[i]) || !rl(e[r[i]], t[r[i]])) return !1;
  return !0;
}
function rl(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var nl = Symbol("patchMixins"),
  $v = Symbol("patchedDefinition");
function Bb(e, t) {
  var r = (e[nl] = e[nl] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function il(e, t) {
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
function al(e, t) {
  var r = function () {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    il.call.apply(il, [this, e, t].concat(a));
  };
  return r;
}
function qb(e, t, r) {
  var n = Bb(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var i = Object.getOwnPropertyDescriptor(e, t);
  if (!(i && i[$v])) {
    var a = e[t],
      o = Vv(e, t, i ? i.enumerable : void 0, n, a);
    Object.defineProperty(e, t, o);
  }
}
function Vv(e, t, r, n, i) {
  var a,
    o = al(i, n);
  return (
    (a = {}),
    (a[$v] = !0),
    (a.get = function () {
      return o;
    }),
    (a.set = function (s) {
      if (this === e) o = al(s, n);
      else {
        var c = Vv(this, t, r, n, s);
        Object.defineProperty(this, t, c);
      }
    }),
    (a.configurable = !0),
    (a.enumerable = r),
    a
  );
}
var ol = Symbol("ObserverAdministration"),
  sl = Symbol("isMobXReactObserver");
function gs(e) {
  var t;
  return (t = e[ol]) != null
    ? t
    : (e[ol] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: _s(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function Ub(e) {
  var t = e.prototype;
  if (e[sl]) {
    var r = _s(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[sl] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== b.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = ul;
    else if (t.shouldComponentUpdate !== ul)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var i = _s(e);
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
        value: $b.call(this, n),
      }),
      this.render()
    );
  };
  var a = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        u = gs(this);
      return (
        (u.mounted = !0),
        fi.unregister(this),
        (u.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!u.reaction || u.reactionInvalidatedBeforeMount) && u.forceUpdate(),
        a?.apply(this, arguments)
      );
    }),
    qb(t, "componentWillUnmount", function () {
      var o,
        u = gs(this);
      ((o = u.reaction) == null || o.dispose(),
        (u.reaction = null),
        (u.forceUpdate = null),
        (u.mounted = !1),
        (u.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function _s(e) {
  return e.displayName || e.name || "<component>";
}
function $b(e) {
  var t = e.bind(this),
    r = gs(this);
  function n() {
    r.reaction || ((r.reaction = Vb(r)), r.mounted || fi.register(this, r, this));
    var i = void 0,
      a = void 0;
    if (
      (r.reaction.track(function () {
        try {
          a = A_(!1, t);
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
function Vb(e) {
  return new kt(e.name + ".render()", function () {
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
function ul(e, t) {
  return this.state !== t ? !0 : !zb(this.props, e);
}
function Na(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(b.Component, e) ||
    Object.prototype.isPrototypeOf.call(b.PureComponent, e)
      ? Ub(e)
      : Lb(e)
  );
}
function bs() {
  return (
    (bs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    bs.apply(null, arguments)
  );
}
function Gb(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Hb = ["children"],
  cl = E.createContext({});
function Gv(e) {
  var t = e.children,
    r = Gb(e, Hb),
    n = E.useContext(cl),
    i = E.useRef(bs({}, n, r)),
    a = i.current;
  return E.createElement(cl.Provider, { value: a }, t);
}
Gv.displayName = "MobXProvider";
E.version.split(".")[0];
if (!b.Component) throw new Error("mobx-react requires React to be available");
if (!oe) throw new Error("mobx-react requires mobx to be available");
var Wb = Object.defineProperty,
  Kb = Object.getOwnPropertyDescriptor,
  Rt = (e, t, r, n) => {
    for (var i = n > 1 ? void 0 : n ? Kb(t, r) : t, a = e.length - 1, o; a >= 0; a--)
      (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
    return (n && i && Wb(t, r, i), i);
  };
class ft {
  constructor() {
    ((this.isLoading = !1), $s(this));
  }
  showPlan(t, r) {
    ((this.plan = t), (this.planString = r), (this.isLoading = !1));
  }
  saveSlowQuery(t) {
    this.slowQueries = t;
  }
  saveHistory(t) {
    this.history = t;
  }
  loading() {
    this.isLoading = !0;
  }
  stopLoading() {
    this.isLoading = !1;
  }
}
Rt([oe], ft.prototype, "isLoading", 2);
Rt([oe], ft.prototype, "plan", 2);
Rt([oe], ft.prototype, "planString", 2);
Rt([oe], ft.prototype, "slowQueries", 2);
Rt([oe], ft.prototype, "history", 2);
Rt([Qe.bound], ft.prototype, "showPlan", 1);
Rt([Qe.bound], ft.prototype, "saveSlowQuery", 1);
Rt([Qe.bound], ft.prototype, "saveHistory", 1);
Rt([Qe], ft.prototype, "loading", 1);
Rt([Qe], ft.prototype, "stopLoading", 1);
const Yb = new ft();
var Jb = Object.defineProperty,
  Xb = Object.getOwnPropertyDescriptor,
  Ws = (e, t, r, n) => {
    for (var i = n > 1 ? void 0 : n ? Xb(t, r) : t, a = e.length - 1, o; a >= 0; a--)
      (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
    return (n && i && Jb(t, r, i), i);
  };
class za {
  constructor() {
    ((this.state = "ROOT"), (this.lastState = "ROOT"), $s(this));
  }
  saveState(t) {
    ((this.lastState = this.state), (this.state = t));
  }
}
Ws([oe], za.prototype, "state", 2);
Ws([oe], za.prototype, "lastState", 2);
Ws([Qe.bound], za.prototype, "saveState", 1);
const Ks = new za();
class Qb {
  constructor() {
    ((this.usersStore = Yb), (this.stateStore = Ks));
  }
}
const Hv = new Qb(),
  Zb = b.createContext(Hv),
  Ba = () => b.useContext(Zb);
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
function ey(e, t) {
  if (je(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (je(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Wv(e) {
  var t = ey(e, "string");
  return je(t) == "symbol" ? t : t + "";
}
function ll(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Wv(n.key), n));
  }
}
function ve(e, t, r) {
  return (
    t && ll(e.prototype, t),
    r && ll(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ty(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Be(e, t) {
  if (t && (je(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ty(e);
}
function Y(e) {
  return (
    (Y = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Y(e)
  );
}
function vi(e, t) {
  return (
    (vi = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    vi(e, t)
  );
}
function qe(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && vi(e, t));
}
function x(e, t, r) {
  return (
    (t = Wv(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function we() {}
function ry(e) {
  if (Array.isArray(e)) return e;
}
function ny(e, t) {
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
function ys(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Kv(e, t) {
  if (e) {
    if (typeof e == "string") return ys(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? ys(e, t)
          : void 0
    );
  }
}
function iy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(e, t) {
  return ry(e) || ny(e, t) || Kv(e, t) || iy();
}
var Yv = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  ay = function (t) {
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
  va = function (t, r) {
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
  oy = function (t, r, n) {
    return t ? { width: r } : {};
  },
  dl = function (t, r, n) {
    var i = n && isFinite(n) ? (r - 1) * n : 0;
    return t + i;
  },
  sy = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      i = arguments.length > 3 ? arguments[3] : void 0,
      a = t.destination,
      o = t.sourceIndex;
    if (!a) return r;
    var u = dl(o, n, i),
      s = dl(a.index, n, i),
      c = r.slice(),
      l = c.splice(u, 1),
      d = K(l, 1),
      f = d[0];
    return (c.splice(s, 0, f), c);
  };
const uy = "modulepreload",
  cy = function (e, t) {
    return new URL(e, t).href;
  },
  fl = {},
  ly = function (t, r, n) {
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
          if (((l = cy(l, n)), l in fl)) return;
          fl[l] = !0;
          const d = l.endsWith(".css"),
            f = d ? '[rel="stylesheet"]' : "";
          if (n)
            for (let v = o.length - 1; v >= 0; v--) {
              const p = o[v];
              if (p.href === l && (!d || p.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${f}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = d ? "stylesheet" : uy),
            d || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = l),
            s && h.setAttribute("nonce", s),
            document.head.appendChild(h),
            d)
          )
            return new Promise((v, p) => {
              (h.addEventListener("load", v),
                h.addEventListener("error", () => p(new Error(`Unable to preload CSS for ${l}`))));
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
function dy(e, t) {
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
    i = dy(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
  }
  return i;
}
function vl(e, t) {
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
function Ao(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : vl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var fy = (function () {
  function e(t) {
    var r = this;
    (fe(this, e),
      x(this, "_isAnalyticsEvent", !0),
      x(this, "clone", function () {
        var n = Ao({}, r.payload);
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
          je(r) === "object" && (this.payload = Ao(Ao({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function vy(e) {
  if (Array.isArray(e)) return ys(e);
}
function py(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function hy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Te(e) {
  return vy(e) || py(e) || Kv(e) || hy();
}
function gy(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Y(e)) !== null; );
  return e;
}
function pa() {
  return (
    (pa =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = gy(e, t);
            if (n) {
              var i = Object.getOwnPropertyDescriptor(n, t);
              return i.get ? i.get.call(arguments.length < 3 ? e : r) : i.value;
            }
          }),
    pa.apply(null, arguments)
  );
}
function _y(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Jv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Jv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Jv = function () {
    return !!e;
  })();
}
function by(e, t, r, n) {
  var i = pa(Y(e.prototype), t, r);
  return 2 & n && typeof i == "function"
    ? function (a) {
        return i.apply(r, a);
      }
    : i;
}
var yy = (function (e) {
    function t(r) {
      var n;
      return (
        fe(this, t),
        (n = _y(this, t, [r])),
        x(n, "_isUIAnalyticsEvent", !0),
        x(n, "clone", function () {
          if (n.hasFired) return null;
          var i = Te(n.context),
            a = Te(n.handlers),
            o = JSON.parse(JSON.stringify(n.payload));
          return new t({ context: i, handlers: a, payload: o });
        }),
        x(n, "fire", function (i) {
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
      qe(t, e),
      ve(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : by(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(fy),
  my = b.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  wy = function () {
    return b.useContext(my);
  },
  ha = function (t) {
    var r = b.useRef(t);
    return ((r.current = t), r);
  };
function Oy(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Sy(e, t) {
  var r = b.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = b.useRef(!0),
    i = b.useRef(r),
    a = n.current || !!(t && i.current.inputs && Oy(t, i.current.inputs)),
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
function Ey(e, t) {
  return Sy(function () {
    return e;
  }, t);
}
function Xv() {
  var e = wy(),
    t = Ey(
      function (r) {
        return new yy({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function pl(e, t) {
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
function ky(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function pi(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    i = e.actionSubject,
    a = e.packageName,
    o = e.packageVersion,
    u = e.analyticsData,
    s = Xv(),
    c = s.createAnalyticsEvent,
    l = ha(u),
    d = ha(t),
    f = b.useCallback(
      function (h) {
        var v = c({
            action: r,
            actionSubject: i || n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          p = ky({ componentName: n, packageName: a, packageVersion: o }, l.current);
        v.context.push(p);
        var g = v.clone();
        (g && g.fire("atlaskit"), d.current(h, v));
      },
      [r, n, i, a, o, c, l, d],
    );
  return f;
}
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
function xy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : hl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function gl(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    i = e.packageName,
    a = e.packageVersion,
    o = e.analyticsData,
    u = Xv(),
    s = u.createAnalyticsEvent,
    c = ha(o),
    l = ha(t),
    d = b.useCallback(
      function () {
        var f = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: i, packageVersion: a },
          }),
          h = xy({ componentName: n, packageName: i, packageVersion: a }, c.current);
        f.context.push(h);
        var v = f.clone();
        (v && v.fire("atlaskit"), l.current(f));
      },
      [r, n, i, a, s, c, l],
    );
  return d;
}
var vr = "ASC",
  ga = "DESC",
  Cy = "small",
  _a = "large",
  Qv = 0.22;
const Ry = 5;
function R(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const i = n.split(" ");
    for (const a of i) {
      const o = a.startsWith("_") ? a.slice(0, Ry) : a;
      t[o] = a;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function Zv(e, t, r) {
  return e ?? "var(--c-, )";
}
var Py = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  Ay = b.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      i = e.children,
      a = e.testId,
      o = e.isLoading,
      u = ne(e, Py);
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
          className: R([
            "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
            r && "_1kqm1n9t",
            n && "_179r1uh4",
          ]),
        },
      ),
      i,
    );
  }),
  jy = function (t) {
    var r = t.children;
    return b.createElement(
      "caption",
      { className: R(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  Iy = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: R(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  Dy = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: R(["_4t3i1jdh"]),
      },
      r,
    );
  },
  Ty = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-container"),
        className: R([
          "_19pk1wug _2hwx1wug _otyr1wug _18u01wug _ca0q19bv _u5f319bv _n3td19bv _19bv19bv _1bsb1ssb _y3gn1h6o",
        ]),
      },
      r,
    );
  },
  My = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function _l(e, t) {
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
function bl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _l(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _l(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ly(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, ep() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function ep() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ep = function () {
    return !!e;
  })();
}
var yl = function (t, r, n) {
    for (var i = 0; i < t.length; i++) {
      var a;
      if (r.cells[i] && ((a = r.cells[i]) === null || a === void 0 ? void 0 : a.key) === n) {
        var o;
        return (o = t[i]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  Fy = function (t, r, n, i) {
    if (!n || !t) return r;
    if (!r) return [];
    var a = i === vr ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      u = Array.from(r);
    return u.sort(function (s, c) {
      var l = yl(s.cells, t, n),
        d = yl(c.cells, t, n);
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
function Ny(e) {
  var t = (function (r) {
    function n() {
      var i;
      fe(this, n);
      for (var a = arguments.length, o = new Array(a), u = 0; u < a; u++) o[u] = arguments[u];
      return ((i = Ly(this, n, [].concat(o))), x(i, "state", { pageRows: [] }), i);
    }
    return (
      qe(n, r),
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
                s = ne(a, My);
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
                h = a.isTotalPagesControlledExternally;
              va(c, s);
              var v, p;
              return (
                h ? ((v = u), (p = u)) : ((v = Fy(s, u, c, l) || []), (p = Yv(v, d, f))),
                bl(bl({}, o), {}, { pageRows: p })
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
var zy = "--local-dynamic-table-width",
  tp = function (t) {
    var r = t.width;
    return typeof r < "u" ? x({}, zy, "".concat(r, "%")) : void 0;
  },
  By = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  qy = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      i = t.shouldTruncate,
      a = t.innerRef,
      o = ne(t, By);
    return b.createElement(
      "td",
      te(
        {
          style: tp({ width: r }),
          ref: a,
          className: R([
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
  Uy = ["isHighlighted", "children", "style", "testId", "className"],
  $y = b.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      i = e.style,
      a = e.testId,
      o = e.className,
      u = ne(e, Uy);
    return b.createElement(
      "tr",
      te(
        {
          style: i,
          className: R([
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
  Vy = ["cells"],
  Gy = ["content", "testId"],
  Hy = function (t) {
    var r = t.row,
      n = t.head,
      i = t.testId,
      a = t.isFixedSize,
      o = t.isHighlighted,
      u = r.cells,
      s = ne(r, Vy);
    return E.createElement(
      $y,
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
          h = ne(c, Gy),
          v = (n || { cells: [] }).cells[l] || {},
          p = v.shouldTruncate,
          g = v.width;
        return E.createElement(
          qy,
          te({ "data-testid": f || (i && "".concat(i, "--cell-").concat(l)) }, h, {
            isFixedSize: a,
            key: l,
            shouldTruncate: p,
            width: g,
          }),
          d,
        );
      }),
    );
  };
function Wy(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, rp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function rp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (rp = function () {
    return !!e;
  })();
}
var Ky = (function (e) {
    function t() {
      return (fe(this, t), Wy(this, t, arguments));
    }
    return (
      qe(t, e),
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
                return E.createElement(Hy, {
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
  Yy = Ny(
    E.forwardRef(function (e, t) {
      return E.createElement(Ky, te({}, e, { forwardedRef: t }));
    }),
  );
function Jy(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, np() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function np() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (np = function () {
    return !!e;
  })();
}
var Xy = (function (e) {
  function t(r) {
    var n;
    return (fe(this, t), (n = Jy(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    qe(t, e),
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
const Ys = b.createContext(null);
var Qy = "#FFFFFF",
  ms = "#42526E",
  Zy = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function em(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(ms, ")")
    : "var(--ds-icon-inverse, ".concat(Qy, ")");
}
var zi = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  tm = typeof window > "u" ? b.useEffect : b.useLayoutEffect,
  ip = E.memo(
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
        f = typeof l == "number" ? l : Zy[l],
        h = "".concat(o, "ms"),
        v = em(i),
        p = b.useContext(Ys);
      return (
        tm(
          function () {
            if (p != null) return p.hold(u);
          },
          [p, u],
        ),
        E.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: h, width: f, height: f },
            className: R([zi.wrapperStyles, zi.rotateStyles]),
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
              style: { animationDelay: h },
              role: s ? "img" : "none",
              className: R([zi.loadInStyles]),
            },
            E.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: v },
              className: R([zi.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function ml(e, t) {
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
function wl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ml(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ml(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ol = "--contents-opacity",
  rm = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: R(["_kqswh2mm"]) },
      r,
    );
  },
  nm = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      i = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": i && "".concat(i, "--contents--container"),
        className: R(["_tzy47hfw _lcxvglyw"]),
        style: wl(wl({}, x({}, Ol, n)), {}, { "--_cnddr8": Zv("var(".concat(Ol, ")")) }),
      },
      r,
    );
  },
  im = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function am(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, ap() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function ap() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ap = function () {
    return !!e;
  })();
}
var op = (function (e) {
  function t() {
    return (fe(this, t), am(this, t, arguments));
  }
  return (
    qe(t, e),
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
            rm,
            { testId: s },
            a ? E.createElement(nm, { contentsOpacity: u, testId: s }, i) : i,
            a &&
              E.createElement(
                im,
                { testId: s },
                E.createElement(ip, {
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
x(op, "defaultProps", {
  isLoading: !0,
  spinnerSize: _a,
  contentsOpacity: Qv,
  loadingLabel: "Loading table",
});
var om = ["children", "testId"],
  sm = b.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      i = ne(e, om);
    return b.createElement(
      "div",
      te({}, i, { "data-testid": n, ref: t, className: R(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  um = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  cm = b.forwardRef(function (e, t) {
    var r = e.children;
    return b.createElement("div", { ref: t, className: R(["_kqswh2mm _152tidpf"]) }, r);
  });
function lm(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, sp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function sp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (sp = function () {
    return !!e;
  })();
}
var up = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = lm(this, t, [].concat(i))),
      x(r, "spinnerRef", E.createRef()),
      x(r, "containerRef", E.createRef()),
      x(r, "componentDidMount", function () {
        r.props.isLoading &&
          r.hasTargetNode() &&
          (r.attachListeners(), r.updateTargetAppearance(), r.updateSpinnerPosition());
      }),
      x(r, "UNSAFE_componentWillReceiveProps", function (o) {
        !o.isLoading || !r.hasTargetNode(o)
          ? r.detachListeners()
          : r.props.isLoading || r.attachListeners();
      }),
      x(r, "componentDidUpdate", function () {
        r.hasTargetNode() &&
          (r.updateTargetAppearance(), r.props.isLoading && r.updateSpinnerPosition());
      }),
      x(r, "componentWillUnmount", function () {
        r.detachListeners();
      }),
      x(r, "getTargetNode", function () {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r.props,
          u = o.targetRef,
          s = u?.();
        return s || r.containerRef.current;
      }),
      x(r, "hasTargetNode", function (o) {
        return !!r.getTargetNode(o);
      }),
      x(r, "isVerticallyVisible", function (o, u) {
        var s = o.top,
          c = o.bottom;
        return c <= 0 ? !1 : s < u;
      }),
      x(r, "isFullyVerticallyVisible", function (o, u) {
        var s = o.top,
          c = o.bottom;
        return s >= 0 && c <= u;
      }),
      x(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      x(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      x(r, "translateSpinner", function (o, u, s) {
        ((o.style.position = s ? "fixed" : ""),
          (o.style.transform = u !== 0 ? "translate3d(0, ".concat(u, "px, 0)") : ""));
      }),
      x(r, "updateTargetAppearance", function () {
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
    qe(t, e),
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
              h = s.bottom,
              v = s.height;
            if (d) {
              var p = v >= l * 3;
              if (p && !this.isFullyVerticallyVisible(s, a)) {
                if (f >= 0) {
                  var g = a - f,
                    _ = g / 2 + f - l / 2,
                    y = g < l * 3 ? f + l : _;
                  this.translateSpinner(u, y, !0);
                } else if (f < 0 && h > a) {
                  var w = a / 2 - l / 2;
                  this.translateSpinner(u, w, !0);
                } else {
                  var O = h / 2 - l / 2,
                    m = O < l ? O - (l - O) : O;
                  this.translateSpinner(u, m, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(c, a)) return;
            var S = (i = this.containerRef) === null || i === void 0 ? void 0 : i.current;
            if (S && typeof S.getBoundingClientRect == "function") {
              var C = S.getBoundingClientRect().top,
                T = (f - C) / 2;
              this.translateSpinner(u, T, !1);
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
            sm,
            { testId: u && "".concat(u, "--loading--container--advanced"), ref: this.containerRef },
            i,
            a &&
              E.createElement(
                um,
                { testId: u },
                E.createElement(
                  cm,
                  { ref: this.spinnerRef },
                  E.createElement(ip, {
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
x(up, "defaultProps", {
  isLoading: !0,
  spinnerSize: _a,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Qv), ")"),
  loadingLabel: "Loading table",
});
function dm(e) {
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
function Sl(e, t, r, n, i, a, o) {
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
        Sl(a, n, i, o, u, "next", s);
      }
      function u(s) {
        Sl(a, n, i, o, u, "throw", s);
      }
      o(void 0);
    });
  };
}
var jo = { exports: {} },
  Io = { exports: {} },
  El;
function cp() {
  return (
    El ||
      ((El = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Io)),
    Io.exports
  );
}
var Do = { exports: {} },
  To = { exports: {} },
  kl;
function lp() {
  return (
    kl ||
      ((kl = 1),
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
              function f(h, v) {
                t(s, h, function (p) {
                  return this._invoke(h, v, p);
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
      })(To)),
    To.exports
  );
}
var xl;
function dp() {
  return (
    xl ||
      ((xl = 1),
      (function (e) {
        var t = lp();
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
                (function (S, C, T) {
                  var I,
                    P,
                    M,
                    q = 0,
                    B = T || [],
                    V = !1,
                    J = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: G,
                      f: G.bind(n, 4),
                      d: function (X, N) {
                        return ((I = X), (P = 0), (M = n), (J.n = N), c);
                      },
                    };
                  function G($, X) {
                    for (P = $, M = X, i = 0; !V && q && !N && i < B.length; i++) {
                      var N,
                        j = B[i],
                        _e = J.p,
                        ae = j[2];
                      $ > 3
                        ? (N = ae === X) &&
                          ((M = j[(P = j[4]) ? 5 : ((P = 3), 3)]), (j[4] = j[5] = n))
                        : j[0] <= _e &&
                          ((N = $ < 2 && _e < j[1])
                            ? ((P = 0), (J.v = X), (J.n = j[1]))
                            : _e < ae &&
                              (N = $ < 3 || j[0] > X || X > ae) &&
                              ((j[4] = $), (j[5] = X), (J.n = ae), (P = 0)));
                    }
                    if (N || $ > 1) return c;
                    throw ((V = !0), X);
                  }
                  return function ($, X, N) {
                    if (q > 1) throw TypeError("Generator is already running");
                    for (V && X === 1 && G(X, N), P = X, M = N; (i = P < 2 ? n : M) || !V; ) {
                      I || (P ? (P < 3 ? (P > 1 && (J.n = -1), G(P, M)) : (J.n = M)) : (J.v = M));
                      try {
                        if (((q = 2), I)) {
                          if ((P || ($ = "next"), (i = I[$]))) {
                            if (!(i = i.call(I, M)))
                              throw TypeError("iterator result is not an object");
                            if (!i.done) return i;
                            ((M = i.value), P < 2 && (P = 0));
                          } else
                            (P === 1 && (i = I.return) && i.call(I),
                              P < 2 &&
                                ((M = TypeError(
                                  "The iterator does not provide a '" + $ + "' method",
                                )),
                                (P = 1)));
                          I = n;
                        } else if ((i = (V = J.n < 0) ? M : S.call(C, J)) !== c) break;
                      } catch (j) {
                        ((I = n), (P = 1), (M = j));
                      } finally {
                        q = 1;
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
          var h = [][o]
              ? i(i([][o]()))
              : (t((i = {}), o, function () {
                  return this;
                }),
                i),
            v = (f.prototype = l.prototype = Object.create(h));
          function p(g) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(g, f)
                : ((g.__proto__ = f), t(g, u, "GeneratorFunction")),
              (g.prototype = Object.create(v)),
              g
            );
          }
          return (
            (d.prototype = f),
            t(v, "constructor", f),
            t(f, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(f, u, "GeneratorFunction"),
            t(v),
            t(v, u, "Generator"),
            t(v, o, function () {
              return this;
            }),
            t(v, "toString", function () {
              return "[object Generator]";
            }),
            ((e.exports = r =
              function () {
                return { w: s, m: p };
              }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports))()
          );
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Do)),
    Do.exports
  );
}
var Mo = { exports: {} },
  Lo = { exports: {} },
  Fo = { exports: {} },
  Cl;
function fp() {
  return (
    Cl ||
      ((Cl = 1),
      (function (e) {
        var t = cp(),
          r = lp();
        function n(i, a) {
          function o(s, c, l, d) {
            try {
              var f = i[s](c),
                h = f.value;
              return h instanceof t
                ? a.resolve(h.v).then(
                    function (v) {
                      o("next", v, l, d);
                    },
                    function (v) {
                      o("throw", v, l, d);
                    },
                  )
                : a.resolve(h).then(
                    function (v) {
                      ((f.value = v), l(f));
                    },
                    function (v) {
                      return o("throw", v, l, d);
                    },
                  );
            } catch (v) {
              d(v);
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
                  return new a(function (f, h) {
                    o(s, l, f, h);
                  });
                }
                return (u = u ? u.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Fo)),
    Fo.exports
  );
}
var Rl;
function vp() {
  return (
    Rl ||
      ((Rl = 1),
      (function (e) {
        var t = dp(),
          r = fp();
        function n(i, a, o, u, s) {
          return new r(t().w(i, a, o, u), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Lo)),
    Lo.exports
  );
}
var Pl;
function fm() {
  return (
    Pl ||
      ((Pl = 1),
      (function (e) {
        var t = vp();
        function r(n, i, a, o, u) {
          var s = t(n, i, a, o, u);
          return s.next().then(function (c) {
            return c.done ? c.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Mo)),
    Mo.exports
  );
}
var No = { exports: {} },
  Al;
function vm() {
  return (
    Al ||
      ((Al = 1),
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
      })(No)),
    No.exports
  );
}
var zo = { exports: {} },
  Bo = { exports: {} },
  jl;
function pm() {
  return (
    jl ||
      ((jl = 1),
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
      })(Bo)),
    Bo.exports
  );
}
var Il;
function hm() {
  return (
    Il ||
      ((Il = 1),
      (function (e) {
        var t = pm().default;
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
      })(zo)),
    zo.exports
  );
}
var Dl;
function gm() {
  return (
    Dl ||
      ((Dl = 1),
      (function (e) {
        var t = cp(),
          r = dp(),
          n = fm(),
          i = vp(),
          a = fp(),
          o = vm(),
          u = hm();
        function s() {
          var c = r(),
            l = c.m(s),
            d = (Object.getPrototypeOf ? Object.getPrototypeOf(l) : l.__proto__).constructor;
          function f(p) {
            var g = typeof p == "function" && p.constructor;
            return !!g && (g === d || (g.displayName || g.name) === "GeneratorFunction");
          }
          var h = { throw: 1, return: 2, break: 3, continue: 3 };
          function v(p) {
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
                    return _(y.a, h[O], m);
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
                return p.call(this, g);
              } finally {
                ((y.p = g.prev), (y.n = g.next));
              }
            };
          }
          return ((e.exports = s =
            function () {
              return {
                wrap: function (_, y, w, O) {
                  return c.w(v(_), y, w, O && O.reverse());
                },
                isGeneratorFunction: f,
                mark: c.m,
                awrap: function (_, y) {
                  return new t(_, y);
                },
                AsyncIterator: a,
                async: function (_, y, w, O, m) {
                  return (f(y) ? i : n)(v(_), y, w, O, m);
                },
                keys: o,
                values: u,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(jo)),
    jo.exports
  );
}
var qo, Tl;
function _m() {
  if (Tl) return qo;
  Tl = 1;
  var e = gm()();
  qo = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return qo;
}
var bm = _m();
const z = Xt(bm);
var ir = {},
  Er = {},
  Bi = {},
  Mn = {},
  Ml;
function ym() {
  if (Ml) return Mn;
  ((Ml = 1),
    Object.defineProperty(Mn, "__esModule", { value: !0 }),
    (Mn.V1InitializeContainer = void 0));
  const e = Et();
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
  Ll;
function mm() {
  if (Ll) return Ln;
  ((Ll = 1),
    Object.defineProperty(Ln, "__esModule", { value: !0 }),
    (Ln.V2InitializeContainer = void 0));
  const e = Et();
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
var Fl;
function wm() {
  if (Fl) return Bi;
  ((Fl = 1), Object.defineProperty(Bi, "__esModule", { value: !0 }));
  const e = Et(),
    t = ym(),
    r = mm();
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
var kr = {},
  Fn = {},
  Nl;
function Om() {
  if (Nl) return Fn;
  ((Nl = 1),
    Object.defineProperty(Fn, "__esModule", { value: !0 }),
    (Fn._resolveDeltasResponse = void 0));
  const e = Et(),
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
var zl;
function pp() {
  if (zl) return kr;
  zl = 1;
  var e =
    (kr && kr.__awaiter) ||
    function (i, a, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(v) {
          try {
            h(u.next(v));
          } catch (p) {
            l(p);
          }
        }
        function f(v) {
          try {
            h(u.throw(v));
          } catch (p) {
            l(p);
          }
        }
        function h(v) {
          v.done ? c(v.value) : s(v.value).then(d, f);
        }
        h((u = u.apply(i, a || [])).next());
      });
    };
  Object.defineProperty(kr, "__esModule", { value: !0 });
  const t = Et(),
    r = Om();
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
        var l, d, f, h, v, p;
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
            ((p =
              (v = (h = this._option) === null || h === void 0 ? void 0 : h.networkConfig) ===
                null || v === void 0
                ? void 0
                : v.initializeHashAlgorithm) !== null && p !== void 0
              ? p
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
  return ((kr.default = n), kr);
}
var Nn = {},
  Bl;
function Sm() {
  if (Bl) return Nn;
  ((Bl = 1),
    Object.defineProperty(Nn, "__esModule", { value: !0 }),
    (Nn._makeParamStoreGetter = void 0));
  const e = Et(),
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
  function o(l, d, f, h) {
    const p = l.getDynamicConfig(d.config_name, r(h) ? void 0 : t).get(d.param_name);
    return n(p, f) ? f : p;
  }
  function u(l, d, f, h) {
    const p = l.getExperiment(d.experiment_name, r(h) ? void 0 : t).get(d.param_name);
    return n(p, f) ? f : p;
  }
  function s(l, d, f, h) {
    const p = l.getLayer(d.layer_name, r(h) ? void 0 : t).get(d.param_name);
    return n(p, f) ? f : p;
  }
  function c(l, d, f) {
    return (h, v) => {
      if (d == null) return v;
      const p = d[h];
      if (p == null || (v != null && (0, e._typeOf)(v) !== p.param_type)) return v;
      switch (p.ref_type) {
        case "static":
          return i(p);
        case "gate":
          return a(l, p, f);
        case "dynamic_config":
          return o(l, p, v, f);
        case "experiment":
          return u(l, p, v, f);
        case "layer":
          return s(l, p, v, f);
        default:
          return v;
      }
    };
  }
  return ((Nn._makeParamStoreGetter = c), Nn);
}
var ar = {},
  ql;
function Em() {
  if (ql) return ar;
  ql = 1;
  var e =
    (ar && ar.__awaiter) ||
    function (i, a, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(v) {
          try {
            h(u.next(v));
          } catch (p) {
            l(p);
          }
        }
        function f(v) {
          try {
            h(u.throw(v));
          } catch (p) {
            l(p);
          }
        }
        function h(v) {
          v.done ? c(v.value) : s(v.value).then(d, f);
        }
        h((u = u.apply(i, a || [])).next());
      });
    };
  (Object.defineProperty(ar, "__esModule", { value: !0 }),
    (ar.StatsigEvaluationsDataAdapter = void 0));
  const t = Et(),
    r = pp();
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
  return ((ar.StatsigEvaluationsDataAdapter = n), ar);
}
var Ul;
function km() {
  if (Ul) return Er;
  Ul = 1;
  var e =
    (Er && Er.__awaiter) ||
    function (u, s, c, l) {
      function d(f) {
        return f instanceof c
          ? f
          : new c(function (h) {
              h(f);
            });
      }
      return new (c || (c = Promise))(function (f, h) {
        function v(_) {
          try {
            g(l.next(_));
          } catch (y) {
            h(y);
          }
        }
        function p(_) {
          try {
            g(l.throw(_));
          } catch (y) {
            h(y);
          }
        }
        function g(_) {
          _.done ? f(_.value) : d(_.value).then(v, p);
        }
        g((l = l.apply(u, s || [])).next());
      });
    };
  Object.defineProperty(Er, "__esModule", { value: !0 });
  const t = Et(),
    r = wm(),
    n = pp(),
    i = Sm(),
    a = Em();
  let o = class ws extends t.StatsigClientBase {
    static instance(s) {
      const c = (0, t._getStatsigGlobal)().instance(s);
      return c instanceof ws
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new ws(s ?? "", {}));
    }
    constructor(s, c, l = null) {
      var d, f;
      t.SDKType._setClientType(s, "javascript-client");
      const h = new n.default(l, (p) => {
        this.$emt(p);
      });
      (super(
        s,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new a.StatsigEvaluationsDataAdapter(),
        h,
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
        (this._network = h),
        (this._user = this._configureUser(c, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const v = (f = l?.plugins) !== null && f !== void 0 ? f : [];
      for (const p of v) p.bind(this);
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
      const h = this.dataAdapter.getDataSync(this._user);
      (h == null && f.push("NoCachedValues"),
        this._store.setValues(h, this._user),
        this._finalizeUpdate(h));
      const v = c?.disableBackgroundCacheRefresh;
      return v === !0 || (v == null && h?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          )
        : (this._runPostUpdate(h ?? null, this._user),
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
        const h = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          f,
          this._store.getSource(),
          h,
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
      const h = (0, t._normalizeUser)(s, c),
        v = (l = h.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      if (v) {
        const p =
          (f = (d = this.storageProvider).isReadyResolver) === null || f === void 0
            ? void 0
            : f.call(d);
        p
          ? p.then(
              () => t.StableID.setOverride(v, this._sdkKey),
              () => t.StableID.setOverride(v, this._sdkKey),
            )
          : t.StableID.setOverride(v, this._sdkKey);
      }
      return (
        Object.keys(this._possibleFirstTouchMetadata).length > 0 &&
          (h.analyticsOnlyMetadata = Object.assign(
            Object.assign({}, h.analyticsOnlyMetadata),
            this._possibleFirstTouchMetadata,
          )),
        h
      );
    }
    _getFeatureGateImpl(s, c) {
      var l, d;
      const { result: f, details: h } = this._store.getGate(s),
        v = (0, t._makeFeatureGate)(s, h, f),
        p =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, v, this._user, c),
        g = p ?? v;
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
      const { result: f, details: h } = this._store.getConfig(s),
        v = (0, t._makeDynamicConfig)(s, h, f),
        p =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, v, this._user, c),
        g = p ?? v;
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
      var l, d, f, h;
      const { result: v, details: p } = this._store.getConfig(s),
        g = (0, t._makeExperiment)(s, p, v);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = g.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const _ =
          (h =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || h === void 0
            ? void 0
            : h.call(f, g, this._user, c),
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
      const { result: h, details: v } = this._store.getLayer(s),
        p = (0, t._makeLayer)(s, v, h),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, p, this._user, c);
      c?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const _ = (0, t._mergeOverride)(
        p,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : p.__value,
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
      const { result: f, details: h } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const v = {
          name: s,
          details: h,
          __configuration: f,
          get: (0, i._makeParamStoreGetter)(this, f, c),
        },
        p =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, v, c);
      return (
        p != null &&
          ((v.__configuration = p.config),
          (v.details = p.details),
          (v.get = (0, i._makeParamStoreGetter)(this, p.config, c))),
        v
      );
    }
  };
  return ((Er.default = o), Er);
}
var $l;
function xm() {
  return (
    $l ||
      (($l = 1),
      (function (e) {
        var t =
            (ir && ir.__createBinding) ||
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
            (ir && ir.__exportStar) ||
            function (o, u) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(u, s) && t(u, o, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Et(),
          i = km();
        ((e.StatsigClient = i.default), r(Et(), e));
        const a = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = a;
      })(ir)),
    ir
  );
}
var at = xm(),
  Uo = { exports: {} },
  Vl;
function Cm() {
  return (
    Vl ||
      ((Vl = 1),
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
          var h = new i(l, d || s, f),
            v = r ? r + c : c;
          return (
            s._events[v]
              ? s._events[v].fn
                ? (s._events[v] = [s._events[v], h])
                : s._events[v].push(h)
              : ((s._events[v] = h), s._eventsCount++),
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
            for (var f = 0, h = d.length, v = new Array(h); f < h; f++) v[f] = d[f].fn;
            return v;
          }),
          (u.prototype.listenerCount = function (c) {
            var l = r ? r + c : c,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (u.prototype.emit = function (c, l, d, f, h, v) {
            var p = r ? r + c : c;
            if (!this._events[p]) return !1;
            var g = this._events[p],
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
                  return (g.fn.call(g.context, l, d, f, h), !0);
                case 6:
                  return (g.fn.call(g.context, l, d, f, h, v), !0);
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
            var h = r ? r + c : c;
            if (!this._events[h]) return this;
            if (!l) return (o(this, h), this);
            var v = this._events[h];
            if (v.fn) v.fn === l && (!f || v.once) && (!d || v.context === d) && o(this, h);
            else {
              for (var p = 0, g = [], _ = v.length; p < _; p++)
                (v[p].fn !== l || (f && !v[p].once) || (d && v[p].context !== d)) && g.push(v[p]);
              g.length ? (this._events[h] = g.length === 1 ? g[0] : g) : o(this, h);
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
      })(Uo)),
    Uo.exports
  );
}
var Rm = Cm();
const Pm = Xt(Rm);
function Gl(e, t) {
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
      ? Gl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Gl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var qi = "@all-features",
  Am = (function () {
    function e() {
      (fe(this, e), x(this, "eventToValue", new Map()), (this.emitter = new Pm()));
    }
    return ve(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, i, a) {
          var o = this,
            u = i(r, Gt(Gt({}, a), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, u);
          var s = function () {
            var l = i(r, Gt(Gt({}, a), {}, { fireGateExposure: !1 })),
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
            l = o(r, n, i, Gt(Gt({}, u), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(a) === void 0 && this.eventToValue.set(a, l);
          var d = function () {
            var h = o(r, n, i, Gt(Gt({}, u), {}, { fireExperimentExposure: !1 })),
              v = s.eventToValue.get(a);
            v !== h && (s.eventToValue.set(a, h), a(h));
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
            this.emitter.on(qi, r),
            function () {
              n.emitter.off(qi, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(qi),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== qi;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  jm = "fedramp-moderate";
function Im() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === jm;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Js = (function (e) {
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
  Zn = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  hi = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  Dm = [
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
function Hl(e, t) {
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
function Os(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Hl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ui = function (t) {
    return Os({ perimeter: Im() ? hi.FEDRAMP_MODERATE : hi.COMMERCIAL }, t);
  },
  zn = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      i = Object.entries(r);
    if (n.length !== i.length) return !1;
    var a = function (f, h) {
      var v = K(f, 1),
        p = v[0],
        g = K(h, 1),
        _ = g[0];
      return p.localeCompare(_);
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
  Wl = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  Tm = function (t) {
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
    var f = ne(t, Dm);
    return Os(
      Os({}, f),
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
  Mm = Object.entries(Js).map(function (e) {
    var t = K(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  hp = function (t) {
    var r,
      n,
      i,
      a = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = Mm.find(function (o) {
            var u = K(o, 1),
              s = u[0];
            return a.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Js.Unknown,
      time: (i = t.receivedAt) !== null && i !== void 0 ? i : Date.now(),
    };
  },
  Ss = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  Kl = (function () {
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
                hp(r.details),
                Ss(
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
  Yl = (function () {
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
                hp(r.details),
                function (l, d) {
                  return r.get(d);
                },
                Ss(
                  (n =
                    (i = r.__evaluation) === null || i === void 0
                      ? void 0
                      : i.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                Ss(
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
  Dr = "0.0.0-development";
function Lm(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function gp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (gp = function () {
    return !!e;
  })();
}
function Fm(e, t, r) {
  if (gp()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var i = new (e.bind.apply(e, n))();
  return (r && vi(i, r.prototype), i);
}
function Es(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Es = function (n) {
      if (n === null || !Lm(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, i);
      }
      function i() {
        return Fm(n, arguments, Y(this).constructor);
      }
      return (
        (i.prototype = Object.create(n.prototype, {
          constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
        })),
        vi(i, n)
      );
    }),
    Es(e)
  );
}
function Nm(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, _p() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function _p() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (_p = function () {
    return !!e;
  })();
}
var Jl = (function (e) {
  function t(r) {
    return (fe(this, t), Nm(this, t, [r]));
  }
  return (qe(t, e), ve(t));
})(Es(Error));
function Xl(e, t) {
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
function zm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Xl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Bm = 5e3,
  qm = "https://api.atlassian.com/flags",
  Um = "https://api.stg.atlassian.com/flags",
  $m = "https://api.dev.atlassian.com/flags",
  Vm = "https://api.stg.atlassian-us-gov-mod.com/flags",
  Gm = "https://api.atlassian-us-gov-mod.com/flags",
  Hm = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  Wm = "oasis-stg.com/flags",
  Km = "atlassian-isolated.net/flags",
  Ym = "/gateway/api/flags",
  $o = (function () {
    function e() {
      fe(this, e);
    }
    return ve(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = de(
            z.mark(function n(i) {
              var a, o;
              return z.wrap(
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
            z.mark(function n(i, a, o) {
              var u;
              return z.wrap(
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
            z.mark(function n(i) {
              var a;
              return z.wrap(function (u) {
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
                        new Jl(
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
                      throw new Jl("Unexpected 204 response");
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
            z.mark(function n(i) {
              var a;
              return z.wrap(function (u) {
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
          if (n) return Ym;
          if (i === hi.FEDRAMP_MODERATE)
            switch (r) {
              case Zn.Production:
                return Gm;
              case Zn.Staging:
                return Vm;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(i, '" perimeter'),
                );
            }
          else if (i === hi.COMMERCIAL)
            switch (r) {
              case Zn.Development:
                return $m;
              case Zn.Staging:
                var o = this.getApiUrl(a);
                return o !== null ? o : Um;
              default:
                var u = this.getApiUrl(a);
                return u !== null ? u : qm;
            }
          else throw new Error('Invalid perimeter "'.concat(i, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = de(
            z.mark(function n(i, a, o, u) {
              var s, c, l, d, f;
              return z.wrap(
                function (v) {
                  for (;;)
                    switch ((v.prev = v.next)) {
                      case 0:
                        return (
                          (s = e.getBaseUrl(
                            o.environment,
                            o.useGatewayURL,
                            o.perimeter,
                            o.isolationContextId,
                          )),
                          (c = o.fetchTimeoutMs || Bm),
                          AbortSignal.timeout
                            ? (l = AbortSignal.timeout(c))
                            : AbortController &&
                              ((d = new AbortController()),
                              (l = d.signal),
                              setTimeout(function () {
                                return d.abort();
                              }, c)),
                          (v.next = 5),
                          fetch(
                            "".concat(s).concat(i),
                            zm(
                              {
                                method: a,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Dr,
                                  "X-API-KEY": o.apiKey,
                                },
                                signal: l,
                              },
                              u && { body: JSON.stringify(u) },
                            ),
                          )
                        );
                      case 5:
                        return ((f = v.sent), (v.next = 8), this.handleResponseError(f));
                      case 8:
                        return ((v.next = 10), this.extractResponseBody(f));
                      case 10:
                        return v.abrupt("return", v.sent);
                      case 11:
                      case "end":
                        return v.stop();
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
          if (n === void 0) return r ? Hm.replace("%s", r) : null;
          var i = n.protocol,
            a = n.hostname,
            o = a.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(i, "//api.").concat(o[1], ".").concat(Wm);
          var u = a.match(/([^.]+)\.atlassian-isolated\.net$/);
          return u ? "".concat(i, "//api.").concat(u[1], ".").concat(Km) : null;
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
function Ql(e, t) {
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
function Bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ql(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ql(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Jm(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, bp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function bp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (bp = function () {
    return !!e;
  })();
}
function Xm(e, t, r, n) {
  var i = pa(Y(e.prototype), t, r);
  return typeof i == "function"
    ? function (a) {
        return i.apply(r, a);
      }
    : i;
}
var Qm = (function (e) {
  function t() {
    var r;
    return (
      fe(this, t),
      (r = Jm(this, t, ["NoFetchDataAdapter", "nofetch"])),
      x(r, "bootstrapResult", null),
      r
    );
  }
  return (
    qe(t, e),
    ve(t, [
      {
        key: "setBootstrapData",
        value: function (n) {
          this.bootstrapResult = n
            ? {
                source: "Bootstrap",
                data: JSON.stringify(n),
                receivedAt: Date.now(),
                stableID: at.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = de(
            z.mark(function i(a, o) {
              return z.wrap(function (s) {
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
            z.mark(function i(a, o, u) {
              return z.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return c.abrupt(
                          "return",
                          this.bootstrapResult &&
                            Bn(
                              Bn({}, this.bootstrapResult),
                              {},
                              { fullUserHash: at._getFullUserHash(o) },
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
            Bn(Bn({}, this.bootstrapResult), {}, { fullUserHash: at._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = de(
            z.mark(function i(a, o, u) {
              return z.wrap(function (c) {
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
          var i = at._getStorageKey(this._getSdkKey(), n);
          return "".concat(at.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(i);
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
          Xm(t, "setData", this)([n, i]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = Bn({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(at.DataAdapterCore);
function Zl(e, t) {
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
function xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Zm(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = e0(e)) || t) {
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
function e0(e, t) {
  if (e) {
    if (typeof e == "string") return ed(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? ed(e, t)
          : void 0
    );
  }
}
function ed(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Vo = "LocalOverride:Recognized",
  t0 = "STATSIG_OVERRIDES",
  td = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  xr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  He = function (t, r) {
    return r + ":" + t;
  },
  r0 = (function () {
    function e(t) {
      (fe(this, e),
        (this._overrides = xr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return ve(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : xr();
          } catch {
            return xr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = xr(), n = arguments.length, i = new Array(n), a = 0; a < n; a++)
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
                h = f[0],
                v = f[1];
              r.gates[h] = v;
            }
            for (
              var p = 0, g = Object.entries((_ = s.configs) !== null && _ !== void 0 ? _ : {});
              p < g.length;
              p++
            ) {
              var _,
                y = K(g[p], 2),
                w = y[0],
                O = y[1];
              r.configs[w] = O;
            }
            for (
              var m = 0, S = Object.entries((C = s.layers) !== null && C !== void 0 ? C : {});
              m < S.length;
              m++
            ) {
              var C,
                T = K(S[m], 2),
                I = T[0],
                P = T[1];
              r.layers[I] = P;
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
            this.parseStoredOverrides(td),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(td);
          } catch {}
          for (var n = 0, i = Object.values(r); n < i.length; n++) {
            var a = i[n],
              o = new Set(Object.keys(a)),
              u = Zm(o),
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
          var n = xe(xe({}, xr()), r);
          this._djb2Map.clear();
          for (var i = 0, a = Object.entries(n); i < a.length; i++)
            for (
              var o = K(a[i], 2), u = o[0], s = o[1], c = 0, l = Object.entries(s);
              c < l.length;
              c++
            ) {
              var d = K(l[c], 2),
                f = d[0],
                h = d[1];
              this._djb2Map.set(He(Ge._DJB2(f), u), h);
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
            : xe(xe({}, r), {}, { value: a, details: xe(xe({}, r.details), {}, { reason: Vo }) });
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
          this._overrides = xr();
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
            : xe(
                xe({}, r),
                {},
                {
                  __value: a,
                  get: Ge._makeTypedGet(r.name, a),
                  details: xe(xe({}, r.details), {}, { reason: Vo }),
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
            : xe(
                xe({}, r),
                {},
                {
                  value: a,
                  get: Ge._makeTypedGet(r.name, a),
                  details: xe(xe({}, r.details), {}, { reason: Vo }),
                },
              );
        },
      },
    ]);
  })(),
  n0 = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
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
function Ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var nd = "client-default-key",
  i0 = "https://xp.atlassian.com/v1/rgstr",
  a0 = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        i = n === void 0 ? t0 : n,
        a = r.overrideAdapter;
      (fe(this, e),
        x(this, "initPromise", null),
        x(this, "initCompleted", !1),
        x(this, "initWithDefaults", !1),
        x(this, "hasCheckGateErrorOccurred", !1),
        x(this, "hasGetExperimentErrorOccurred", !1),
        x(this, "hasGetExperimentValueErrorOccurred", !1),
        x(this, "hasGetLayerErrorOccurred", !1),
        x(this, "hasGetLayerValueErrorOccurred", !1),
        x(this, "subscriptions", new Am()),
        x(this, "dataAdapter", new Qm()),
        x(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = a || new r0(i)));
    }
    return ve(e, [
      {
        key: "initialize",
        value: (function () {
          var t = de(
            z.mark(function n(i, a, o) {
              var u = this,
                s,
                c;
              return z.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = Ui(i)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          zn(s, this.initOptions) ||
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
                                h = f - c;
                              u.fireClientEvent(c, h, "initialize", u.initCompleted, s.apiKey);
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
            z.mark(function n(i, a, o, u) {
              var s = this,
                c,
                l;
              return z.wrap(
                function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        if (((c = Ui(i)), !this.initPromise)) {
                          f.next = 4;
                          break;
                        }
                        return (
                          zn(c, this.initOptions) ||
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
                          this.provider.setClientVersion(Dr),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(c, a, o, u)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var h = performance.now(),
                                v = h - l;
                              s.fireClientEvent(
                                l,
                                v,
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
                var l = Ht(
                  {
                    targetApp: u.initOptions.targetApp,
                    clientVersion: Dr,
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
                u.initOptions.environment !== Zn.Production &&
                  console.error("Analytics web client promise did not resolve", c);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = de(
            z.mark(function n(i, a, o) {
              var u = this,
                s,
                c,
                l,
                d = arguments;
              return z.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        if (
                          ((s = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (c = Ui(i)),
                          !this.initPromise)
                        ) {
                          h.next = 5;
                          break;
                        }
                        return (
                          zn(c, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          h.abrupt("return", this.initPromise)
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
                              var v = performance.now(),
                                p = v - l;
                              u.fireClientEvent(l, p, "initializeFromValues", u.initCompleted);
                            })),
                          h.abrupt("return", this.initPromise)
                        );
                      case 10:
                      case "end":
                        return h.stop();
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
            z.mark(function n(i, a, o) {
              var u, s;
              return z.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (u = Ui(i)),
                          (s = function () {
                            return $o.fetchExperimentValues(u, a, o).then(function (f) {
                              var h = f.experimentValues,
                                v = f.customAttributes;
                              return { experimentValues: h, customAttributesFromFetch: v };
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
            z.mark(function n(i, a) {
              var o = this;
              return z.wrap(
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
            z.mark(function n(i, a) {
              var o,
                u,
                s = arguments;
              return z.wrap(
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
            z.mark(function n() {
              return z.wrap(
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
            return Kl.fromExperiment(
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
              new Kl(r, {}, "", { time: Date.now(), reason: Js.Error })
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
          return zn(this.currentIdentifiers, r) && zn(this.currentAttributes, n);
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
              } catch (h) {
                console.warn(
                  "Error calling callback for experiment ".concat(r, " with value ").concat(l),
                  h,
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
            z.mark(function n(i, a, o) {
              var u, s, c, l, d, f, h, v;
              return z.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (u = Ht({}, i)),
                          (g.prev = 1),
                          (l = $o.fetchClientSdk(i).then(function (_) {
                            return (u.sdkKey = _.clientSdkKey);
                          })),
                          (d = $o.fetchExperimentValues(i, a, o)),
                          (g.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((f = g.sent),
                          (h = K(f, 2)),
                          (v = h[1]),
                          (s = v.experimentValues),
                          (c = v.customAttributes),
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
            z.mark(function n(i, a, o, u) {
              var s, c, l, d, f, h, v, p;
              return z.wrap(
                function (_) {
                  for (;;)
                    switch ((_.prev = _.next)) {
                      case 0:
                        return (
                          (s = Ht(Ht({}, i), {}, { disableCurrentPageLogging: !0 })),
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
                        ((h = _.sent),
                          (v = K(h, 2)),
                          (p = v[1]),
                          (c = p.experimentValues),
                          (l = p.customAttributesFromFetch),
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
            z.mark(function n(i, a, o) {
              var u,
                s,
                c,
                l,
                d,
                f,
                h,
                v = arguments;
              return z.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = v.length > 3 && v[3] !== void 0 ? v[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = a),
                          (this.currentAttributes = o),
                          (c = Tm(i)),
                          c.sdkKey || (c.sdkKey = nd),
                          ((u = c.networkConfig) !== null && u !== void 0 && u.logEventUrl) ||
                            (c.networkConfig = Ht(
                              Ht({}, c.networkConfig),
                              {},
                              { logEventUrl: i0 },
                            )),
                          c.perimeter === hi.FEDRAMP_MODERATE && (c.disableLogging = !0),
                          (l = c.sdkKey),
                          (d = c.environment),
                          c.updateUserCompletionCallback,
                          c.perimeter,
                          (f = ne(c, n0)),
                          (this.user = Wl(a, o)),
                          (h = Ht(
                            Ht({}, f),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: at.LogEventCompressionMode.Forced,
                            },
                          )),
                          a.stableId
                            ? at.StableID.setOverride(a.stableId, l)
                            : (h.disableStableID = !0),
                          (g.prev = 12),
                          (this.statsigClient = new at.StatsigClient(l, this.user, h)),
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
                          (this.statsigClient = new at.StatsigClient(nd, this.user, h)),
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
            z.mark(function n(i, a, o) {
              var u = this,
                s,
                c,
                l;
              return z.wrap(
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
                              z.mark(function h() {
                                return z.wrap(function (p) {
                                  for (;;)
                                    switch ((p.prev = p.next)) {
                                      case 0:
                                        if (((u.initPromise = s), !u.provider)) {
                                          p.next = 4;
                                          break;
                                        }
                                        return (
                                          (p.next = 4),
                                          u.provider.setProfile(
                                            u.initOptions,
                                            u.currentIdentifiers,
                                            u.currentAttributes,
                                          )
                                        );
                                      case 4:
                                      case "end":
                                        return p.stop();
                                    }
                                }, h);
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
            z.mark(function n(i, a, o) {
              var u, s, c, l, d, f, h, v, p;
              return z.wrap(
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
                        ((c = _.sent), (l = Wl(a, c.customAttributesFromFetch)), (_.next = 13));
                        break;
                      case 8:
                        throw (
                          (_.prev = 8),
                          (_.t0 = _.catch(1)),
                          (h = _.t0 instanceof Error ? _.t0.message : JSON.stringify(_.t0)),
                          (d = (f = this.initOptions).updateUserCompletionCallback) === null ||
                            d === void 0 ||
                            d.call(f, !1, h),
                          _.t0
                        );
                      case 13:
                        if (
                          ((v = !0),
                          (p = null),
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
                        ((_.prev = 23), (_.t1 = _.catch(15)), (v = !1), (p = String(_.t1)));
                      case 27:
                        if (
                          ((u = this.initOptions) === null ||
                            u === void 0 ||
                            (s = u.updateUserCompletionCallback) === null ||
                            s === void 0 ||
                            s.call(u, v, p),
                          !v)
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
          return Dr;
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
            return Yl.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !a }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Yl.fromLayer(at._makeLayer(r, { reason: "Error" }, null))
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
  D,
  U = (function () {
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
D = U;
x(U, "client", new a0());
x(U, "hasCheckGateErrorOccurred", !1);
x(U, "hasGetExperimentValueErrorOccurred", !1);
x(U, "checkGate", function (e, t) {
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
    D.hasCheckGateErrorOccurred ||
      (console.warn({
        msg: "An error has occurred checking the feature gate from criterion override. Only the first occurrence of this error is logged.",
        gateName: e,
        error: n,
      }),
      (D.hasCheckGateErrorOccurred = !0));
  }
  return D.client.checkGate(e, t);
});
x(U, "getExperimentValue", function (e, t, r, n) {
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
      D.hasGetExperimentValueErrorOccurred ||
        (console.warn({
          msg: "An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.",
          experimentName: e,
          defaultValue: r,
          options: n,
          error: a,
        }),
        (D.hasGetExperimentValueErrorOccurred = !0)),
      r
    );
  }
  return D.client.getExperimentValue(e, t, r, n);
});
x(U, "initializeCalled", D.client.initializeCalled.bind(D.client));
x(U, "initializeCompleted", D.client.initializeCompleted.bind(D.client));
x(U, "waitUntilInitializeCompleted", D.client.waitUntilInitializeCompleted.bind(D.client));
x(U, "initialize", D.client.initialize.bind(D.client));
x(U, "initializeWithProvider", D.client.initializeWithProvider.bind(D.client));
x(U, "initializeFromValues", D.client.initializeFromValues.bind(D.client));
x(U, "manuallyLogGateExposure", D.client.manuallyLogGateExposure.bind(D.client));
x(U, "getExperiment", D.client.getExperiment.bind(D.client));
x(U, "manuallyLogExperimentExposure", D.client.manuallyLogExperimentExposure.bind(D.client));
x(U, "manuallyLogLayerExposure", D.client.manuallyLogLayerExposure.bind(D.client));
x(U, "shutdownStatsig", D.client.shutdownStatsig.bind(D.client));
x(U, "overrideGate", D.client.overrideGate.bind(D.client));
x(U, "clearGateOverride", D.client.clearGateOverride.bind(D.client));
x(U, "overrideConfig", D.client.overrideConfig.bind(D.client));
x(U, "clearConfigOverride", D.client.clearConfigOverride.bind(D.client));
x(U, "setOverrides", D.client.setOverrides.bind(D.client));
x(U, "getOverrides", D.client.getOverrides.bind(D.client));
x(U, "clearAllOverrides", D.client.clearAllOverrides.bind(D.client));
x(U, "isCurrentUser", D.client.isCurrentUser.bind(D.client));
x(U, "onGateUpdated", D.client.onGateUpdated.bind(D.client));
x(U, "onExperimentValueUpdated", D.client.onExperimentValueUpdated.bind(D.client));
x(U, "onAnyUpdated", D.client.onAnyUpdated.bind(D.client));
x(U, "updateUser", D.client.updateUser.bind(D.client));
x(U, "updateUserWithProvider", D.client.updateUserWithProvider.bind(D.client));
x(U, "updateUserWithValues", D.client.updateUserWithValues.bind(D.client));
x(U, "getPackageVersion", D.client.getPackageVersion.bind(D.client));
x(U, "getLayer", D.client.getLayer.bind(D.client));
x(U, "getLayerValue", D.client.getLayerValue.bind(D.client));
var ks = U;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = U;
  else {
    var $i, Go;
    ks = window.__FEATUREGATES_JS__;
    var id =
      (($i = ks) === null || $i === void 0 || (Go = $i.getPackageVersion) === null || Go === void 0
        ? void 0
        : Go.call($i)) || "4.10.0 or earlier";
    if (id !== Dr) {
      var o0 = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(id, " when module version ")
        .concat(Dr, " was loading.");
      console.warn(o0);
    }
  }
var Cr,
  Rr,
  s0 =
    (globalThis == null ||
    (Cr = globalThis.process) === null ||
    Cr === void 0 ||
    (Cr = Cr.env) === null ||
    Cr === void 0
      ? void 0
      : Cr.JEST_WORKER_ID) !== void 0,
  u0 =
    !s0 &&
    (globalThis == null ||
    (Rr = globalThis.process) === null ||
    Rr === void 0 ||
    (Rr = Rr.env) === null ||
    Rr === void 0
      ? void 0
      : Rr.NODE_ENV) !== "production",
  c0 = function () {
    var t;
    u0 && (t = console).debug.apply(t, arguments);
  },
  Xs = {},
  l0 = "@atlaskit/platform-feature-flags",
  ii = "__PLATFORM_FEATURE_FLAGS__",
  yp = typeof process < "u" && typeof Xs < "u",
  d0 = yp ? Xs.ENABLE_PLATFORM_FF === "true" : !1,
  f0 = yp ? Xs.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  v0 = d0 || f0,
  p0 = { booleanResolver: void 0 },
  ai = typeof window < "u" ? window : globalThis;
ai[ii] = ai[ii] || p0;
function h0(e) {
  if (v0)
    return (
      c0(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        l0,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = ai[ii]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = ai[ii]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return ks.checkGate(e);
    var i = (n = ai[ii]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof i != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : i;
  } catch {
    return !1;
  }
}
function Nr(e) {
  return h0(e);
}
var g0 = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  _0 = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  b0 = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  ad = b.memo(function (t) {
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
      h = r.LEGACY_margin,
      v = r.spacing,
      p = v === void 0 ? "none" : v,
      g = r.name,
      _ = d ? { __html: d } : void 0;
    if (l && !Nr("platform-visual-refresh-icons"))
      return b.createElement(l, {
        primaryColor: u ?? i,
        secondaryColor: s,
        size: c,
        label: o,
        testId: a,
        UNSAFE_margin: h,
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
      m = b0[y][p],
      S = O + 2 * m;
    return b.createElement(
      "span",
      {
        "data-testid": a,
        role: o ? "img" : void 0,
        "aria-label": o || void 0,
        "aria-hidden": o ? void 0 : !0,
        style: { color: i },
        className: R([
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
        className: R([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          f ? "_1bsb1kw7 _4t3i1kw7" : y === "small" ? _0[p] : g0[p],
        ]),
      }),
    );
  });
const y0 = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: ad, default: ad }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  qa = Fs(y0);
var od;
function m0() {
  if (od) return Tn;
  ((od = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.default = void 0));
  var e = r(lt()),
    t = r(qa);
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
var qn = {};
function sd(e, t) {
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
function ud(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var w0 = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  cd = b.memo(function (t) {
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
      h = r.UNSAFE_margin,
      v = i
        ? { dangerouslySetInnerHTML: { __html: i } }
        : { children: n ? b.createElement(n, { role: "presentation" }) : null },
      p = d && f ? { width: d + "px", height: f + "px" } : null;
    return b.createElement(
      "span",
      te(
        {
          "data-testid": c,
          "data-vc": "icon-".concat(c),
          role: l ? "img" : void 0,
          "aria-label": l || void 0,
          "aria-hidden": l ? void 0 : !0,
          style: ud(
            ud({}, p),
            {},
            { "--icon-primary-color": o, "--icon-secondary-color": u, margin: h },
          ),
        },
        v,
        {
          className: R([
            "_1e0c1o8l _1o9zidpf _vyfuvuon _vwz4kb7n _1szv15vq _1tly15vq _rzyw1osq _17jb1osq _1ksvoz0e _3se1x1jp _re2rglyw _1veoyfq0 _1kg81r31",
            "_jcxd1r8n _gq0g1onz _1trkwc43",
            o === u && "_18hbwc43",
            u === "transparent" && "_4fyi1j28",
            s && w0[s],
          ]),
        },
      ),
    );
  });
const O0 = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: cd, default: cd }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  mp = Fs(O0);
var ld;
function S0() {
  if (ld) return qn;
  ((ld = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.default = void 0));
  var e = r(lt()),
    t = mp;
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
  return ((n.displayName = "ChevronLeftLargeIcon"), (qn.default = n), qn);
}
var dd;
function E0() {
  if (dd) return Dn;
  ((dd = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.default = void 0));
  var e = n(lt()),
    t = n(m0()),
    r = n(S0());
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
var k0 = E0();
const x0 = Xt(k0);
var Un = {},
  $n = {},
  fd;
function C0() {
  if (fd) return $n;
  ((fd = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0));
  var e = r(lt()),
    t = r(qa);
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
  vd;
function R0() {
  if (vd) return Vn;
  ((vd = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.default = void 0));
  var e = r(lt()),
    t = mp;
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
var pd;
function P0() {
  if (pd) return Un;
  ((pd = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.default = void 0));
  var e = n(lt()),
    t = n(C0()),
    r = n(R0());
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const i = (a) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronRightIcon", LEGACY_fallbackIcon: r.default }, a),
    );
  return ((i.displayName = "ChevronRightIconMigration"), (Un.default = i), Un);
}
var A0 = P0();
const j0 = Xt(A0);
var Qs = b.createContext("elevation.surface"),
  I0 = function () {
    return b.useContext(Qs);
  };
Qs.displayName = "SurfaceProvider";
var D0 = [
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
  T0 = ["className"],
  M0 = {
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
  wp = {
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
  L0 = {
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
  F0 = {
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
  N0 = {
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
  z0 = {
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
  Ua = b.forwardRef(function (e, t) {
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
      h = e.paddingInline,
      v = h === void 0 ? o : h,
      p = e.paddingInlineStart,
      g = p === void 0 ? v : p,
      _ = e.paddingInlineEnd,
      y = _ === void 0 ? v : _,
      w = e.style,
      O = e.testId,
      m = e.xcss,
      S = ne(e, D0);
    S.className;
    var C = ne(S, T0),
      T = b.createElement(
        n,
        te(
          {
            style: w,
            ref: t,
            className: R([
              "_19itglyw _vchhusvi _r06hglyw",
              a && M0[a],
              a && B0(a) && wp[a],
              l && L0[l],
              f && F0[f],
              g && N0[g],
              y && z0[y],
              m,
            ]),
          },
          C,
          { "data-testid": O },
        ),
        i,
      );
    return a ? b.createElement(Qs.Provider, { value: a }, T) : T;
  });
function B0(e) {
  return e in wp;
}
const Ho = () =>
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
  Op = (...e) => R(e);
function q0() {
  return {
    css() {
      throw Ho();
    },
    cssMap() {
      throw Ho();
    },
    cx: Op,
    XCSSProp() {
      throw Ho();
    },
  };
}
var U0 = q0(),
  $0 = U0.cx,
  V0 = [
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
  hd = {
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
  gd = {
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
  G0 = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  H0 = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  W0 = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  K0 = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  Y0 = { root: "_1e0c1txw _vchhusvi" },
  ba = b.memo(
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
        h = e.wrap,
        v = e.xcss,
        p = ne(e, V0);
      return b.createElement(
        n,
        te({}, p, {
          role: i,
          className: R([
            Y0.root,
            u && gd[u],
            s && gd[s],
            u && hd[u],
            c && hd[c],
            a && K0[a],
            f && H0[f],
            o && G0[o],
            h && W0[h],
            v,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
ba.displayName = "Flex";
var J0 = [
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
  xs = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  X0 = function (t) {
    var r = t.children;
    return b.createElement("span", { className: R([xs.separator]) }, r);
  },
  Ji = b.memo(
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
        h = e.xcss,
        v = e.testId,
        p = e.role,
        g = e.children,
        _ = ne(e, J0),
        y = typeof f == "string" ? b.createElement(X0, null, f) : f,
        w = y
          ? b.Children.toArray(g)
              .filter(Boolean)
              .map(function (O, m) {
                return b.createElement(b.Fragment, { key: m }, f && m > 0 ? y : null, O);
              })
          : g;
      return b.createElement(
        ba,
        te({}, _, {
          as: r,
          role: p,
          alignItems: a,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: u ? "wrap" : void 0,
          xcss: $0(c === "hug" && xs.hug, c === "fill" && xs.fill, h),
          testId: v,
          ref: t,
        }),
        w,
      );
    }),
  );
Ji.displayName = "Inline";
var Q0 = "Invariant failed";
function Z0(e, t) {
  if (!e) throw new Error(Q0);
}
var Sp = b.createContext(!1),
  ew = function () {
    return b.useContext(Sp);
  },
  tw = Sp.Provider,
  rw = ["span", "p", "strong", "em"],
  nw = function (t, r) {
    var n = I0();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return _d.hasOwnProperty(n) ? _d[n] : "color.text";
    }
  },
  Pr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  iw = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  aw = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  ow = {
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
  _d = {
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
  sw = b.forwardRef(function (e, t) {
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
    Z0(rw.includes(n));
    var h = ew(),
      v = nw(i, h);
    !s && !h && (s = "medium");
    var p = b.createElement(
      n,
      {
        id: u,
        className: R([
          Pr.root,
          s && iw[s],
          v && ow[v],
          l && Pr.truncation,
          l === 1 && Pr.breakAll,
          a && Pr["textAlign.".concat(a)],
          c && aw[c],
          n === "em" && Pr["as.em"],
          n === "strong" && Pr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": o,
        ref: t,
      },
      f,
    );
    return h ? p : b.createElement(tw, { value: !0 }, p);
  });
function uw() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var cw = ["as", "children", "isInset", "testId", "style", "xcss"],
  lw = ["className"],
  dw = b.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      i = e.children,
      a = e.isInset,
      o = e.testId,
      u = e.style,
      s = e.xcss,
      c = ne(e, cw);
    c.className;
    var l = ne(c, lw);
    return b.createElement(
      n,
      te({}, l, {
        ref: t,
        className: R([
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
  fw = [
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
  vw = ["className"],
  bd = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  pw = b.forwardRef(function (e, t) {
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
      h = e.xcss,
      v = e.tabIndex,
      p = ne(e, fw),
      g = b.useContext(Ys),
      _ = b.useCallback(
        function (O, m) {
          (g && g.tracePress(s, O.timeStamp), u(O, m));
        },
        [u, g, s],
      ),
      y = pi({
        fn: _,
        action: "clicked",
        componentName: c || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    p.className;
    var w = ne(p, vw);
    return b.createElement(
      dw,
      te({ as: "button", tabIndex: v ?? (uw() && !n ? 0 : void 0), style: d }, w, {
        type: a,
        onClick: y,
        disabled: n,
        xcss: Op(bd.root, n && bd.disabled, h),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  Wo = {},
  Gn = {},
  yd;
function Ep() {
  if (yd) return Gn;
  ((yd = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.bind = void 0));
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
var or = {},
  md;
function hw() {
  if (md) return or;
  md = 1;
  var e =
    (or && or.__assign) ||
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
  (Object.defineProperty(or, "__esModule", { value: !0 }), (or.bindAll = void 0));
  var t = Ep();
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
  return ((or.bindAll = i), or);
}
var wd;
function gw() {
  return (
    wd ||
      ((wd = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = Ep();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = hw();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(Wo)),
    Wo
  );
}
var $a = gw(),
  _w = function () {
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
  kp = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: _w() });
  },
  bw = kp(),
  yw = b.createContext(kp()),
  mw = function (e) {
    return e.value++;
  },
  ww = function (e) {
    return e ? e.prefix : "";
  },
  Ow = function (e) {
    var t = e || bw,
      r = ww(t),
      n = mw(t),
      i = r + n,
      a = function (o) {
        return i + t.uid(o);
      };
    return { uid: i, gen: a };
  },
  xp = function () {
    var e = b.useContext(yw),
      t = b.useState(function () {
        return Ow(e);
      })[0];
    return t;
  },
  Sw = function () {
    var e = xp().uid;
    return e;
  },
  Ew = function () {
    var e = xp().gen;
    return e;
  },
  Ko,
  Xi = (Ko = E.useId) !== null && Ko !== void 0 ? Ko : void 0;
function kw() {
  return Xi && Nr("platform-dst-react-18-use-id")
    ? Nr("platform-dst-react-18-use-id-selector-safe")
      ? Xi().replace(/[:«»]/g, "_")
      : Xi()
    : "uid".concat(Sw());
}
function xw() {
  if (Xi && Nr("platform-dst-react-18-use-id")) {
    var e = kw();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return Ew();
}
var Cp = function (t) {
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
        className: R([
          "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
        ]),
      },
      r,
    );
  },
  Cw = {
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
  Rw = ["children"];
function Pw(e) {
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
      s = ne(o, Rw),
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
var Aw = Pw(function () {
    return { mode: "light" };
  }),
  jw = Aw.useTheme;
function Iw(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Dw(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Tw = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Dw(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var a = Iw(i);
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
  ya = "-moz-",
  Q = "-webkit-",
  Rp = "comm",
  Zs = "rule",
  eu = "decl",
  Mw = "@import",
  Pp = "@keyframes",
  Lw = "@layer",
  Fw = Math.abs,
  Va = String.fromCharCode,
  Nw = Object.assign;
function zw(e, t) {
  return ye(e, 0) ^ 45
    ? (((((((t << 2) ^ ye(e, 0)) << 2) ^ ye(e, 1)) << 2) ^ ye(e, 2)) << 2) ^ ye(e, 3)
    : 0;
}
function Ap(e) {
  return e.trim();
}
function Bw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Z(e, t, r) {
  return e.replace(t, r);
}
function Cs(e, t) {
  return e.indexOf(t);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function gi(e, t, r) {
  return e.slice(t, r);
}
function ht(e) {
  return e.length;
}
function tu(e) {
  return e.length;
}
function Vi(e, t) {
  return (t.push(e), e);
}
function qw(e, t) {
  return e.map(t).join("");
}
var Ga = 1,
  zr = 1,
  jp = 0,
  Ie = 0,
  he = 0,
  Wr = "";
function Ha(e, t, r, n, i, a, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: i,
    children: a,
    line: Ga,
    column: zr,
    length: o,
    return: "",
  };
}
function Hn(e, t) {
  return Nw(Ha("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Uw() {
  return he;
}
function $w() {
  return ((he = Ie > 0 ? ye(Wr, --Ie) : 0), zr--, he === 10 && ((zr = 1), Ga--), he);
}
function Fe() {
  return ((he = Ie < jp ? ye(Wr, Ie++) : 0), zr++, he === 10 && ((zr = 1), Ga++), he);
}
function Ot() {
  return ye(Wr, Ie);
}
function Qi() {
  return Ie;
}
function Ri(e, t) {
  return gi(Wr, e, t);
}
function _i(e) {
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
function Ip(e) {
  return ((Ga = zr = 1), (jp = ht((Wr = e))), (Ie = 0), []);
}
function Dp(e) {
  return ((Wr = ""), e);
}
function Zi(e) {
  return Ap(Ri(Ie - 1, Rs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Vw(e) {
  for (; (he = Ot()) && he < 33; ) Fe();
  return _i(e) > 2 || _i(he) > 3 ? "" : " ";
}
function Gw(e, t) {
  for (; --t && Fe() && !(he < 48 || he > 102 || (he > 57 && he < 65) || (he > 70 && he < 97)); );
  return Ri(e, Qi() + (t < 6 && Ot() == 32 && Fe() == 32));
}
function Rs(e) {
  for (; Fe(); )
    switch (he) {
      case e:
        return Ie;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Rs(he);
        break;
      case 40:
        e === 41 && Rs(e);
        break;
      case 92:
        Fe();
        break;
    }
  return Ie;
}
function Hw(e, t) {
  for (; Fe() && e + he !== 57; ) if (e + he === 84 && Ot() === 47) break;
  return "/*" + Ri(t, Ie - 1) + "*" + Va(e === 47 ? e : Fe());
}
function Ww(e) {
  for (; !_i(Ot()); ) Fe();
  return Ri(e, Ie);
}
function Kw(e) {
  return Dp(ea("", null, null, null, [""], (e = Ip(e)), 0, [0], e));
}
function ea(e, t, r, n, i, a, o, u, s) {
  for (
    var c = 0,
      l = 0,
      d = o,
      f = 0,
      h = 0,
      v = 0,
      p = 1,
      g = 1,
      _ = 1,
      y = 0,
      w = "",
      O = i,
      m = a,
      S = n,
      C = w;
    g;

  )
    switch (((v = y), (y = Fe()))) {
      case 40:
        if (v != 108 && ye(C, d - 1) == 58) {
          Cs((C += Z(Zi(y), "&", "&\f")), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Zi(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Vw(v);
        break;
      case 92:
        C += Gw(Qi() - 1, 7);
        continue;
      case 47:
        switch (Ot()) {
          case 42:
          case 47:
            Vi(Yw(Hw(Fe(), Qi()), t, r), s);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * p:
        u[c++] = ht(C) * _;
      case 125 * p:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            (_ == -1 && (C = Z(C, /\f/g, "")),
              h > 0 &&
                ht(C) - d &&
                Vi(h > 32 ? Sd(C + ";", n, r, d - 1) : Sd(Z(C, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            C += ";";
          default:
            if ((Vi((S = Od(C, t, r, c, l, i, u, w, (O = []), (m = []), d)), a), y === 123))
              if (l === 0) ea(C, t, S, S, O, a, d, u, m);
              else
                switch (f === 99 && ye(C, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ea(
                      e,
                      S,
                      S,
                      n && Vi(Od(e, S, S, 0, 0, i, u, w, i, (O = []), d), m),
                      i,
                      m,
                      d,
                      u,
                      n ? O : m,
                    );
                    break;
                  default:
                    ea(C, S, S, S, [""], m, 0, u, m);
                }
        }
        ((c = l = h = 0), (p = _ = 1), (w = C = ""), (d = o));
        break;
      case 58:
        ((d = 1 + ht(C)), (h = v));
      default:
        if (p < 1) {
          if (y == 123) --p;
          else if (y == 125 && p++ == 0 && $w() == 125) continue;
        }
        switch (((C += Va(y)), y * p)) {
          case 38:
            _ = l > 0 ? 1 : ((C += "\f"), -1);
            break;
          case 44:
            ((u[c++] = (ht(C) - 1) * _), (_ = 1));
            break;
          case 64:
            (Ot() === 45 && (C += Zi(Fe())), (f = Ot()), (l = d = ht((w = C += Ww(Qi())))), y++);
            break;
          case 45:
            v === 45 && ht(C) == 2 && (p = 0);
        }
    }
  return a;
}
function Od(e, t, r, n, i, a, o, u, s, c, l) {
  for (var d = i - 1, f = i === 0 ? a : [""], h = tu(f), v = 0, p = 0, g = 0; v < n; ++v)
    for (var _ = 0, y = gi(e, d + 1, (d = Fw((p = o[v])))), w = e; _ < h; ++_)
      (w = Ap(p > 0 ? f[_] + " " + y : Z(y, /&\f/g, f[_]))) && (s[g++] = w);
  return Ha(e, t, r, i === 0 ? Zs : u, s, c, l);
}
function Yw(e, t, r) {
  return Ha(e, t, r, Rp, Va(Uw()), gi(e, 2, -2), 0);
}
function Sd(e, t, r, n) {
  return Ha(e, t, r, eu, gi(e, 0, n), gi(e, n + 1, -1), n);
}
function Tr(e, t) {
  for (var r = "", n = tu(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || "";
  return r;
}
function Jw(e, t, r, n) {
  switch (e.type) {
    case Lw:
      if (e.children.length) break;
    case Mw:
    case eu:
      return (e.return = e.return || e.value);
    case Rp:
      return "";
    case Pp:
      return (e.return = e.value + "{" + Tr(e.children, n) + "}");
    case Zs:
      e.value = e.props.join(",");
  }
  return ht((r = Tr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function Xw(e) {
  var t = tu(e);
  return function (r, n, i, a) {
    for (var o = "", u = 0; u < t; u++) o += e[u](r, n, i, a) || "";
    return o;
  };
}
function Qw(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Zw(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var eO = function (t, r, n) {
    for (var i = 0, a = 0; (i = a), (a = Ot()), i === 38 && a === 12 && (r[n] = 1), !_i(a); ) Fe();
    return Ri(t, Ie);
  },
  tO = function (t, r) {
    var n = -1,
      i = 44;
    do
      switch (_i(i)) {
        case 0:
          (i === 38 && Ot() === 12 && (r[n] = 1), (t[n] += eO(Ie - 1, r, n)));
          break;
        case 2:
          t[n] += Zi(i);
          break;
        case 4:
          if (i === 44) {
            ((t[++n] = Ot() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Va(i);
      }
    while ((i = Fe()));
    return t;
  },
  rO = function (t, r) {
    return Dp(tO(Ip(t), r));
  },
  Ed = new WeakMap(),
  nO = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Ed.get(n)) && !i) {
        Ed.set(t, !0);
        for (var a = [], o = rO(r, a), u = n.props, s = 0, c = 0; s < o.length; s++)
          for (var l = 0; l < u.length; l++, c++)
            t.props[c] = a[s] ? o[s].replace(/&\f/g, u[l]) : u[l] + " " + o[s];
      }
    }
  },
  iO = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Tp(e, t) {
  switch (zw(e, t)) {
    case 5103:
      return Q + "print-" + e + e;
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
      return Q + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Q + e + ya + e + me + e + e;
    case 6828:
    case 4268:
      return Q + e + me + e + e;
    case 6165:
      return Q + e + me + "flex-" + e + e;
    case 5187:
      return Q + e + Z(e, /(\w+).+(:[^]+)/, Q + "box-$1$2" + me + "flex-$1$2") + e;
    case 5443:
      return Q + e + me + "flex-item-" + Z(e, /flex-|-self/, "") + e;
    case 4675:
      return Q + e + me + "flex-line-pack" + Z(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Q + e + me + Z(e, "shrink", "negative") + e;
    case 5292:
      return Q + e + me + Z(e, "basis", "preferred-size") + e;
    case 6060:
      return Q + "box-" + Z(e, "-grow", "") + Q + e + me + Z(e, "grow", "positive") + e;
    case 4554:
      return Q + Z(e, /([^-])(transform)/g, "$1" + Q + "$2") + e;
    case 6187:
      return Z(Z(Z(e, /(zoom-|grab)/, Q + "$1"), /(image-set)/, Q + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Z(e, /(image-set\([^]*)/, Q + "$1$`$1");
    case 4968:
      return (
        Z(
          Z(e, /(.+:)(flex-)?(.*)/, Q + "box-pack:$3" + me + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        Q +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Z(e, /(.+)-inline(.+)/, Q + "$1$2") + e;
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
      if (ht(e) - 1 - t > 6)
        switch (ye(e, t + 1)) {
          case 109:
            if (ye(e, t + 4) !== 45) break;
          case 102:
            return (
              Z(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Q + "$2-$3$1" + ya + (ye(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Cs(e, "stretch") ? Tp(Z(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ye(e, t + 1) !== 115) break;
    case 6444:
      switch (ye(e, ht(e) - 3 - (~Cs(e, "!important") && 10))) {
        case 107:
          return Z(e, ":", ":" + Q) + e;
        case 101:
          return (
            Z(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Q +
                (ye(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Q +
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
          return Q + e + me + Z(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Q + e + me + Z(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Q + e + me + Z(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Q + e + me + e + e;
  }
  return e;
}
var aO = function (t, r, n, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case eu:
          t.return = Tp(t.value, t.length);
          break;
        case Pp:
          return Tr([Hn(t, { value: Z(t.value, "@", "@" + Q) })], i);
        case Zs:
          if (t.length)
            return qw(t.props, function (a) {
              switch (Bw(a, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Tr([Hn(t, { props: [Z(a, /:(read-\w+)/, ":" + ya + "$1")] })], i);
                case "::placeholder":
                  return Tr(
                    [
                      Hn(t, { props: [Z(a, /:(plac\w+)/, ":" + Q + "input-$1")] }),
                      Hn(t, { props: [Z(a, /:(plac\w+)/, ":" + ya + "$1")] }),
                      Hn(t, { props: [Z(a, /:(plac\w+)/, me + "input-$1")] }),
                    ],
                    i,
                  );
              }
              return "";
            });
      }
  },
  oO = [aO],
  sO = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (p) {
        var g = p.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || oO,
      a = {},
      o,
      u = [];
    ((o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (p) {
          for (var g = p.getAttribute("data-emotion").split(" "), _ = 1; _ < g.length; _++)
            a[g[_]] = !0;
          u.push(p);
        },
      ));
    var s,
      c = [nO, iO];
    {
      var l,
        d = [
          Jw,
          Qw(function (p) {
            l.insert(p);
          }),
        ],
        f = Xw(c.concat(i, d)),
        h = function (g) {
          return Tr(Kw(g), f);
        };
      s = function (g, _, y, w) {
        ((l = y), h(g ? g + "{" + _.styles + "}" : _.styles), w && (v.inserted[_.name] = !0));
      };
    }
    var v = {
      key: r,
      sheet: new Tw({
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
    return (v.sheet.hydrate(u), v);
  },
  Yo = { exports: {} },
  ee = {};
var kd;
function uO() {
  if (kd) return ee;
  kd = 1;
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
    h = e ? Symbol.for("react.memo") : 60115,
    v = e ? Symbol.for("react.lazy") : 60116,
    p = e ? Symbol.for("react.block") : 60121,
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
                case v:
                case h:
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
    (ee.Lazy = v),
    (ee.Memo = h),
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
      return w(m) === v;
    }),
    (ee.isMemo = function (m) {
      return w(m) === h;
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
          (m.$$typeof === v ||
            m.$$typeof === h ||
            m.$$typeof === o ||
            m.$$typeof === u ||
            m.$$typeof === l ||
            m.$$typeof === g ||
            m.$$typeof === _ ||
            m.$$typeof === y ||
            m.$$typeof === p))
      );
    }),
    (ee.typeOf = w),
    ee
  );
}
var xd;
function cO() {
  return (xd || ((xd = 1), (Yo.exports = uO())), Yo.exports);
}
var Jo, Cd;
function lO() {
  if (Cd) return Jo;
  Cd = 1;
  var e = cO(),
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
  function o(v) {
    return e.isMemo(v) ? i : a[v.$$typeof] || t;
  }
  var u = Object.defineProperty,
    s = Object.getOwnPropertyNames,
    c = Object.getOwnPropertySymbols,
    l = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    f = Object.prototype;
  function h(v, p, g) {
    if (typeof p != "string") {
      if (f) {
        var _ = d(p);
        _ && _ !== f && h(v, _, g);
      }
      var y = s(p);
      c && (y = y.concat(c(p)));
      for (var w = o(v), O = o(p), m = 0; m < y.length; ++m) {
        var S = y[m];
        if (!r[S] && !(g && g[S]) && !(O && O[S]) && !(w && w[S])) {
          var C = l(p, S);
          try {
            u(v, S, C);
          } catch {}
        }
      }
    }
    return v;
  }
  return ((Jo = h), Jo);
}
lO();
var dO = !0;
function Mp(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : i && (n += i + " ");
    }),
    n
  );
}
var ru = function (t, r, n) {
    var i = t.key + "-" + r.name;
    (n === !1 || dO === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
  },
  Lp = function (t, r, n) {
    ru(t, r, n);
    var i = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var a = r;
      do (t.insert(r === a ? "." + i : "", a, t.sheet, !0), (a = a.next));
      while (a !== void 0);
    }
  };
function fO(e) {
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
var vO = {
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
  pO = /[A-Z]|^ms/g,
  hO = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Fp = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Rd = function (t) {
    return t != null && typeof t != "boolean";
  },
  Xo = Zw(function (e) {
    return Fp(e) ? e : e.replace(pO, "-$&").toLowerCase();
  }),
  Pd = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(hO, function (n, i, a) {
            return ((gt = { name: i, styles: a, next: gt }), i);
          });
    }
    return vO[t] !== 1 && !Fp(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function bi(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1) return ((gt = { name: i.name, styles: i.styles, next: gt }), i.name);
      var a = r;
      if (a.styles !== void 0) {
        var o = a.next;
        if (o !== void 0)
          for (; o !== void 0; )
            ((gt = { name: o.name, styles: o.styles, next: gt }), (o = o.next));
        var u = a.styles + ";";
        return u;
      }
      return gO(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = gt,
          c = r(e);
        return ((gt = s), bi(e, t, c));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function gO(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var i = 0; i < r.length; i++) n += bi(e, t, r[i]) + ";";
  else
    for (var a in r) {
      var o = r[a];
      if (typeof o != "object") {
        var u = o;
        t != null && t[u] !== void 0
          ? (n += a + "{" + t[u] + "}")
          : Rd(u) && (n += Xo(a) + ":" + Pd(a, u) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var s = 0; s < o.length; s++) Rd(o[s]) && (n += Xo(a) + ":" + Pd(a, o[s]) + ";");
      else {
        var c = bi(e, t, o);
        switch (a) {
          case "animation":
          case "animationName": {
            n += Xo(a) + ":" + c + ";";
            break;
          }
          default:
            n += a + "{" + c + "}";
        }
      }
    }
  return n;
}
var Ad = /label:\s*([^\s;{]+)\s*(;|$)/g,
  gt;
function nu(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    i = "";
  gt = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0) ((n = !1), (i += bi(r, t, a)));
  else {
    var o = a;
    i += o[0];
  }
  for (var u = 1; u < e.length; u++)
    if (((i += bi(r, t, e[u])), n)) {
      var s = a;
      i += s[u];
    }
  Ad.lastIndex = 0;
  for (var c = "", l; (l = Ad.exec(i)) !== null; ) c += "-" + l[1];
  var d = fO(i) + c;
  return { name: d, styles: i, next: gt };
}
var _O = function (t) {
    return t();
  },
  bO = Jc.useInsertionEffect ? Jc.useInsertionEffect : !1,
  Np = bO || _O,
  zp = b.createContext(typeof HTMLElement < "u" ? sO({ key: "css" }) : null);
zp.Provider;
var Bp = function (t) {
    return b.forwardRef(function (r, n) {
      var i = b.useContext(zp);
      return t(r, i, n);
    });
  },
  qp = b.createContext({}),
  iu = {}.hasOwnProperty,
  Ps = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  yO = function (t, r) {
    var n = {};
    for (var i in r) iu.call(r, i) && (n[i] = r[i]);
    return ((n[Ps] = t), n);
  },
  mO = function (t) {
    var r = t.cache,
      n = t.serialized,
      i = t.isStringTag;
    return (
      ru(r, n, i),
      Np(function () {
        return Lp(r, n, i);
      }),
      null
    );
  },
  wO = Bp(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var i = e[Ps],
      a = [n],
      o = "";
    typeof e.className == "string"
      ? (o = Mp(t.registered, a, e.className))
      : e.className != null && (o = e.className + " ");
    var u = nu(a, void 0, b.useContext(qp));
    o += t.key + "-" + u.name;
    var s = {};
    for (var c in e) iu.call(e, c) && c !== "css" && c !== Ps && (s[c] = e[c]);
    return (
      (s.className = o),
      r && (s.ref = r),
      b.createElement(
        b.Fragment,
        null,
        b.createElement(mO, { cache: t, serialized: u, isStringTag: typeof i == "string" }),
        b.createElement(i, s),
      )
    );
  }),
  OO = wO,
  Nt = function (t, r) {
    var n = arguments;
    if (r == null || !iu.call(r, "css")) return b.createElement.apply(void 0, n);
    var i = n.length,
      a = new Array(i);
    ((a[0] = OO), (a[1] = yO(t, r)));
    for (var o = 2; o < i; o++) a[o] = n[o];
    return b.createElement.apply(null, a);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Nt || (Nt = {}));
function Pt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return nu(t);
}
var SO = function e(t) {
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
function EO(e, t, r) {
  var n = [],
    i = Mp(e, n, r);
  return n.length < 2 ? r : i + t(n);
}
var kO = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Np(function () {
        for (var i = 0; i < n.length; i++) Lp(r, n[i], !1);
      }),
      null
    );
  },
  xO = Bp(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        var d = nu(c, t.registered);
        return (r.push(d), ru(t, d, !1), t.key + "-" + d.name);
      },
      i = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        return EO(t.registered, n, SO(c));
      },
      a = { css: n, cx: i, theme: b.useContext(qp) },
      o = e.children(a);
    return b.createElement(
      b.Fragment,
      null,
      b.createElement(kO, { cache: t, serializedArr: r }),
      o,
    );
  });
function CO(e, t) {
  var r = b.useRef(!0);
  b.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Up = 2,
  As = Pt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Up,
  }),
  js = Pt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Up,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  RO = Pt({
    "&:focus": As,
    "&:focus-visible": As,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  PO = Pt({
    "&:focus": js,
    "&:focus-visible": js,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  $p = b.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      i = r ? js : As,
      a = r ? PO : RO,
      o = typeof n > "u" ? a : n === "on" && i;
    return Nt(xO, null, function (u) {
      var s = u.css,
        c = u.cx;
      return b.Children.only(
        o ? b.cloneElement(t, { className: c([s(o), t.props.className]) }) : t,
      );
    });
  });
$p.displayName = "FocusRing";
function Mt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var AO = 9;
function jd(e) {
  e.keyCode !== AO && Mt(e);
}
var jO = {
    onMouseDownCapture: Mt,
    onMouseUpCapture: Mt,
    onKeyDownCapture: jd,
    onKeyUpCapture: jd,
    onTouchStartCapture: Mt,
    onTouchEndCapture: Mt,
    onPointerDownCapture: Mt,
    onPointerUpCapture: Mt,
    onClickCapture: Mt,
    onClick: Mt,
  },
  IO = {};
function DO(e) {
  var t = e.isInteractive;
  return t ? IO : jO;
}
function Id(e, t) {
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
      ? Id(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Id(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Kt = 8,
  Qo = ["default", "primary", "danger", "warning"],
  Is = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  TO = { default: Is.default, compact: Is.compact, none: "inherit" },
  MO = {
    default: "0 ".concat(Kt + Kt / 4, "px"),
    compact: "0 ".concat(Kt + Kt / 4, "px"),
    none: "0",
  },
  LO = { compact: "0 ".concat(Kt / 4, "px"), default: "0 ".concat(Kt / 4, "px"), none: "0" },
  FO = { default: "middle", compact: "middle", none: "baseline" },
  Vp = { content: "0 ".concat(Kt / 4, "px"), icon: "0 ".concat(Kt / 4, "px") },
  Gp = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  NO = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": Re(Re({}, Gp), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  zO = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  BO = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  qO = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  UO = {
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
  $O = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  VO = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  GO = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": Re(
      Re({}, Gp),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  HO = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function WO(e) {
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
        height: Is[r],
        lineHeight: TO[r],
        padding: a ? LO[r] : MO[r],
        verticalAlign: FO[r],
        width: i ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? GO
        : Re(
            Re(
              Re(
                Re(
                  Re(
                    Re(
                      Re(Re({}, t === "default" && NO), t === "primary" && zO),
                      t === "link" && BO,
                    ),
                    t === "subtle" && qO,
                  ),
                  t === "subtle-link" && UO,
                ),
                t === "warning" && $O,
              ),
              t === "danger" && VO,
            ),
            {},
            {
              "&[disabled]": {
                color: "var(--ds-text-disabled, #080F214A)",
                backgroundColor: Qo.includes(t)
                  ? "var(--ds-background-disabled, #17171708)"
                  : "transparent",
                cursor: "not-allowed",
                textDecoration: "none",
                "&:hovered": {
                  backgroundColor: Qo.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
                "&:active": {
                  backgroundColor: Qo.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
              },
            },
            HO,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function Dd(e) {
  var t = e.spacing;
  return Pt({
    display: "flex",
    margin: t === "none" ? 0 : Vp.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function KO(e) {
  var t = e.spacing;
  return Pt({
    margin: t === "none" ? 0 : Vp.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function YO(e) {
  var t = e.hasOverlay;
  return Pt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var JO = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  au = function (t) {
    return t && b.isValidElement(t) && t.type === Cp;
  },
  XO = [
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
  QO = { "> *": { pointerEvents: "none" } },
  ZO = Pt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  e1 = Pt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  Td = function (t, r) {
    return !t || au(t) ? null : r;
  },
  t1 = function (t, r) {
    return au(t) ? t : t ? Nt("span", { css: r }, t) : null;
  },
  r1 = E.forwardRef(function (t, r) {
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
      h = f === void 0 ? (d ? "a" : "button") : f,
      v = t.iconAfter,
      p = t.iconBefore,
      g = t.interactionName,
      _ = t.isDisabled,
      y = _ === void 0 ? !1 : _,
      w = t.isSelected,
      O = w === void 0 ? !1 : w,
      m = t.onBlur,
      S = t.onClick,
      C = S === void 0 ? we : S,
      T = t.onFocus,
      I = t.onMouseDown,
      P = I === void 0 ? we : I,
      M = t.overlay;
    t.shouldFitContainer;
    var q = t.spacing,
      B = q === void 0 ? "default" : q,
      V = t.tabIndex,
      J = V === void 0 ? 0 : V,
      G = t.type,
      $ = G === void 0 ? (d ? void 0 : "button") : G,
      X = t.testId,
      N = ne(t, XO),
      j = b.useRef(),
      _e = b.useCallback(
        function (pe) {
          if (((j.current = pe), r != null)) {
            if (typeof r == "function") {
              r(pe);
              return;
            }
            r.current = pe;
          }
        },
        [j, r],
      );
    CO(j, u);
    var ae = b.useContext(Ys),
      se = b.useCallback(
        function (pe, $e) {
          (ae && ae.tracePress(g, pe.timeStamp), C(pe, $e));
        },
        [C, ae, g],
      ),
      le = pi({
        fn: se,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "23.6.0",
        analyticsData: n,
      }),
      ge = b.useCallback(
        function (pe) {
          (pe.preventDefault(), P(pe));
        },
        [P],
      );
    b.useEffect(
      function () {
        var pe = j.current;
        y && pe && pe === document.activeElement && pe.blur();
      },
      [y],
    );
    var ue = !!M,
      Ue = Pt(YO({ hasOverlay: ue })),
      Oe = !y && !ue,
      rt = {};
    return (
      (O || y || a === "warning") &&
        (rt = {
          "[data-theme] & circle": {
            stroke: "".concat(
              O || y
                ? "var(--ds-icon-subtle, ".concat(ms, ")")
                : "var(--ds-icon-warning-inverse, ".concat(ms, ")"),
              " !important",
            ),
          },
        }),
      Nt(
        $p,
        null,
        Nt(
          h,
          te(
            {},
            N,
            {
              ref: _e,
              className: l,
              css: [s, Oe ? null : QO],
              "data-has-overlay": ue ? !0 : void 0,
              "data-testid": X,
              disabled: y,
              href: Oe ? d : void 0,
              onBlur: m,
              onClick: le,
              onFocus: T,
              onMouseDown: ge,
              tabIndex: y ? -1 : J,
              type: $,
            },
            DO({ isInteractive: Oe }),
          ),
          p ? Nt("span", { css: [Ue, Dd({ spacing: B }), Td(c, ZO)] }, p) : null,
          t1(c, [Ue, KO({ spacing: B })]),
          v ? Nt("span", { css: [Ue, Dd({ spacing: B }), Td(c, e1)] }, v) : null,
          M ? Nt("span", { css: [JO, rt] }, M) : null,
        ),
      )
    );
  });
function n1(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return au(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var i1 = [
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
  Md = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  ou = E.memo(
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
        h = f === void 0 ? we : f,
        v = t.shouldFitContainer,
        p = v === void 0 ? !1 : v,
        g = t.spacing,
        _ = g === void 0 ? "default" : g,
        y = ne(t, i1),
        w = jw(),
        O = w.mode,
        m = n1({ children: a, iconBefore: o, iconAfter: u }),
        S = b.useState(!1),
        C = K(S, 2),
        T = C[0],
        I = C[1],
        P = b.useCallback(
          function (B) {
            (d(B), Md && I(!0));
          },
          [d, I],
        ),
        M = b.useCallback(
          function (B) {
            (h(B), Md && I(!1));
          },
          [h, I],
        ),
        q = b.useMemo(
          function () {
            return WO({
              appearance: i,
              spacing: _,
              isSelected: c,
              shouldFitContainer: p,
              isOnlySingleIcon: m,
            });
          },
          [i, _, O, c, p, m],
        );
      return E.createElement(
        r1,
        te({}, y, {
          ref: r,
          appearance: i,
          buttonCss: q,
          children: a,
          "data-firefox-is-active": T ? !0 : void 0,
          iconAfter: u,
          iconBefore: o,
          isSelected: c,
          onMouseDown: P,
          onMouseUp: M,
          spacing: _,
        }),
      );
    }),
  );
ou.displayName = "Button";
function Ld(e) {
  return E.createElement(ou, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function a1(e) {
  return E.createElement(ou, te({}, e, { appearance: "subtle" }));
}
var o1 = { container: "_1e0c1txw _kqswh2mm" };
function s1(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    i = e.to;
  return E.createElement(
    Ua,
    { as: "li", testId: r, key: t, xcss: o1.container, paddingInline: "space.100" },
    E.createElement(
      sw,
      { testId: r && "".concat(r, "-text") },
      E.createElement(Cp, null, "Skipped pages from ", n, " to ", i),
      "…",
    ),
  );
}
var Fd = {},
  Nd =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function u1(e, t) {
  return !!(e === t || (Nd(e) && Nd(t)));
}
function c1(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!u1(e[r], t[r])) return !1;
  return !0;
}
function l1(e, t) {
  t === void 0 && (t = c1);
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
var d1 = function (t, r, n, i) {
  var a = n.max,
    o = n.ellipsis,
    u = n.transform,
    s = t.length,
    c = s > a,
    l = c && a - 4 < r,
    d = c && r < s - a + 3,
    f = l1(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
      return t.slice(g, _).map(function (y, w) {
        return u(y, g + w, i);
      });
    });
  if (!c) return f(0, s);
  if (l && !d) {
    var h = a - 2;
    return [].concat(
      Te(f(0, 1)),
      [o({ key: "ellipsis-1", testId: i && "".concat(i, "-ellipsis"), from: 2, to: s - h })],
      Te(f(s - h)),
    );
  }
  if (!l && d) {
    var v = a - 2;
    return [].concat(
      Te(f(0, v)),
      [o({ key: "ellipsis-1", testId: i && "".concat(i, "-ellipsis"), from: v + 1, to: s - 1 })],
      Te(f(s - 1)),
    );
  }
  var p = a - 4;
  return [].concat(
    Te(f(0, 1)),
    [
      o({
        key: "ellipsis-1",
        testId: i && "".concat(i, "-ellipsis"),
        from: 2,
        to: r - Math.floor(p / 2),
      }),
    ],
    Te(f(r - Math.floor(p / 2), r + p - 1)),
    [o({ key: "ellipsis-2", testId: i && "".concat(i, "-ellipsis"), from: r + 3, to: s - 1 })],
    Te(f(s - 1)),
  );
};
function zd(e, t) {
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
function f1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : zd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ds = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  v1 = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.16",
  };
function Bd(e) {
  var t = e.chevronDirection,
    r = t === "left" ? x0 : j0;
  return E.createElement(
    Ua,
    { as: "span", xcss: Ds.navigatorIconWrapper },
    E.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function p1(e, t) {
  var r = e.components,
    n = r === void 0 ? Fd : r,
    i = e.defaultSelectedIndex,
    a = i === void 0 ? 0 : i,
    o = e.selectedIndex,
    u = e.label,
    s = u === void 0 ? "pagination" : u,
    c = e.pageLabel,
    l = c === void 0 ? "page" : c,
    d = e.previousLabel,
    f = d === void 0 ? "previous" : d,
    h = e.nextLabel,
    v = h === void 0 ? "next" : h,
    p = e.style,
    g = p === void 0 ? Fd : p,
    _ = e.max,
    y = _ === void 0 ? 7 : _,
    w = e.onChange,
    O = w === void 0 ? we : w,
    m = e.pages,
    S = e.getPageLabel,
    C = e.renderEllipsis,
    T = C === void 0 ? s1 : C,
    I = e.analyticsContext,
    P = e.testId,
    M = e.isDisabled,
    q = dm(o, function () {
      return a || 0;
    }),
    B = K(q, 2),
    V = B[0],
    J = B[1],
    G = pi(
      f1(
        {
          fn: function (N, j) {
            var _e = N.event,
              ae = N.selectedPageIndex;
            (o === void 0 && J(ae), O && O(_e, m[ae], j));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: I,
        },
        v1,
      ),
    ),
    $ = function (N, j, _e) {
      var ae = m[V],
        se = "".concat(l, " ").concat(S ? S(N, j) : N),
        le = N === ae;
      return E.createElement(
        Ji,
        { as: "li", xcss: Ds.paginationMenuItem, key: "page-".concat(S ? S(N, j) : j) },
        E.createElement(
          a1,
          {
            component: n.Page,
            onClick: function (ue) {
              return G({ event: ue, selectedPageIndex: j });
            },
            "aria-current": le ? "page" : void 0,
            "aria-label": se,
            isSelected: le,
            isDisabled: M,
            page: N,
            testId:
              _e &&
              ""
                .concat(_e, "--")
                .concat(le ? "current-" : "", "page-")
                .concat(j),
          },
          S ? S(N, j) : N,
        ),
      );
    };
  return E.createElement(
    Ua,
    { testId: P, style: g, ref: t, "aria-label": s, as: "nav" },
    E.createElement(
      Ji,
      { space: "space.0", alignBlock: "center" },
      E.createElement(Ld, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (N) {
          return G({ event: N, selectedPageIndex: V - 1 });
        },
        isDisabled: M || V === 0,
        iconBefore: E.createElement(Bd, { chevronDirection: "left" }),
        "aria-label": f,
        testId: P && "".concat(P, "--left-navigator"),
      }),
      E.createElement(
        Ji,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Ds.paginationMenu },
        d1(m, V, { max: y, ellipsis: T, transform: $ }, P),
      ),
      E.createElement(Ld, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (N) {
          return G({ event: N, selectedPageIndex: V + 1 });
        },
        isDisabled: M || V === m.length - 1,
        iconBefore: E.createElement(Bd, { chevronDirection: "right" }),
        "aria-label": v,
        testId: P && "".concat(P, "--right-navigator"),
      }),
    ),
  );
}
var h1 = b.memo(b.forwardRef(p1));
function g1(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Hp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Hp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Hp = function () {
    return !!e;
  })();
}
var _1 = (function (e) {
    function t() {
      var r;
      fe(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
      return (
        (r = g1(this, t, [].concat(i))),
        x(r, "onChange", function (o, u, s) {
          r.props.onChange(u, s);
        }),
        r
      );
    }
    return (
      qe(t, e),
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
              l = Te(Array(i)).map(function (f, h) {
                return h + 1;
              }),
              d = o - 1;
            return E.createElement(h1, {
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
  b1 = ["isRanking", "testId"],
  y1 = [
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
function qd(e, t) {
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
      ? qd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : qd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ud = "--local-dynamic-table-text-color",
  m1 = function (t) {
    var r = t.isRanking,
      n = t.testId,
      i = ne(t, b1);
    return b.createElement(
      "thead",
      te({ "data-testid": n }, i, { className: R(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  w1 = b.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var i = e.sortOrder,
      a = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var u = e.style,
      s = e.testId,
      c = ne(e, y1),
      l = Wn(
        Wn(Wn({}, u), r && tp({ width: r })),
        {},
        x({}, Ud, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = i === vr,
      f = i === ga,
      h = function () {
        if (d) return "ascending";
        if (f) return "descending";
      },
      v = n ? "th" : "td";
    return b.createElement(
      v,
      te({ "aria-sort": h(), onClick: void 0, ref: t, "data-testid": s }, c, {
        className: R([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          a && o && "_1bto1l2s _o5721q9c",
          a && "_1reo15vq _18m915vq",
        ]),
        style: Wn(
          Wn({}, l),
          {},
          { "--_17ckjys": Zv("var(--ds-text-subtle, ".concat("var(".concat(Ud, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function O1(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Wp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Wp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Wp = function () {
    return !!e;
  })();
}
function S1(e) {
  return (function (t) {
    function r() {
      var n;
      fe(this, r);
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return (
        (n = O1(this, r, [].concat(a))),
        x(n, "state", { refWidth: 0, refHeight: 0 }),
        x(n, "innerRef", function (u) {
          u && !n.props.isRanking && (n.ref = u);
        }),
        x(n, "updateDimensions", function () {
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
      qe(r, t),
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
  $d;
function E1() {
  if ($d) return Kn;
  (($d = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.default = void 0));
  var e = r(lt()),
    t = r(qa);
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
var k1 = E1();
const x1 = Xt(k1);
var Yn = {},
  Vd;
function C1() {
  if (Vd) return Yn;
  ((Vd = 1), Object.defineProperty(Yn, "__esModule", { value: !0 }), (Yn.default = void 0));
  var e = r(lt()),
    t = r(qa);
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
  return ((n.displayName = "ArrowUpIcon"), (Yn.default = n), Yn);
}
var R1 = C1();
const P1 = Xt(R1);
var A1 = "Escape";
function j1(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = b.useRef(!1),
    i = b.useCallback(
      function (o) {
        r || n.current || o.key !== A1 || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    a = b.useCallback(function () {
      n.current = !1;
    }, []);
  b.useEffect(
    function () {
      if (!r)
        return $a.bindAll(
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
function Jn(e) {
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
var I1 = b.createContext(null),
  D1 = b.createContext(null);
function T1() {
  var e = b.useContext(D1);
  return e;
}
function M1(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    i = b.useContext(I1),
    a = T1();
  b.useEffect(
    function () {
      if (i !== null && t) return i.onClose(n, { namespace: a, type: r });
    },
    [i, t, a, n, r],
  );
}
var ei = { none: 0, small: 100, medium: 350, large: 700 },
  Zo = 0.5,
  L1 = { none: ei.none, small: ei.small * Zo, medium: ei.medium * Zo, large: ei.large * Zo },
  F1 = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  N1 = function () {
    if (!F1()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  z1 = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  B1 = function () {
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
      }, z1(t)),
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
  Kp = { appear: !0, isExiting: !1 },
  Yp = b.createContext(Kp),
  Gd = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kp;
    return E.createElement(Yp.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  Hd = function (t) {
    var r = [];
    return (
      b.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  q1 = function (t, r) {
    for (var n = r.concat([]), i = U1(r), a = 0; a < t.length; a++) {
      var o = t[a],
        u = !i[o.key];
      u && n.splice(a + 1, 0, o);
    }
    return n;
  },
  U1 = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  $1 = function (t, r) {
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
  Jp = b.memo(function (e) {
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
      h = b.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      v = K(h, 2),
      p = v[0],
      g = v[1];
    if (
      (b.useEffect(function () {
        p.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      typeof u == "boolean")
    )
      return n;
    var _ = K(u, 2),
      y = _[0],
      w = _[1],
      O = Hd(y),
      m = Hd(w);
    w !== n && s([w, n]);
    var S = $1(m, O),
      C = !!S.size,
      T = m;
    if ((C && (T = q1(m, O)), i))
      if (d.length) T = d;
      else {
        var I = T.filter(function (P) {
          return S.has(P.key);
        });
        I.length && f(I);
      }
    return (
      S.size
        ? (T = T.map(function (P) {
            var M = S.has(P.key);
            return Gd(P, {
              appear: !0,
              isExiting: M,
              onFinish: M
                ? function () {
                    (S.delete(P.key), S.size === 0 && (s([null, n]), f([])));
                  }
                : void 0,
            });
          }))
        : (T = T.map(function (P) {
            return Gd(P, p);
          })),
      T
    );
  }),
  V1 = function () {
    return b.useContext(Yp);
  };
Jp.displayName = "ExitingPersistence";
function G1() {
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
var H1 = b.createContext(function () {
    return { isReady: !0, delay: 0, ref: we };
  }),
  W1 = function () {
    var t = G1(),
      r = b.useContext(H1);
    return r(t);
  },
  K1 = function (t) {
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
      h = W1(),
      v = V1(),
      p = v.isExiting,
      g = v.onFinish,
      _ = v.appear,
      y = B1(),
      w = c || !h.isReady,
      O = p ? 0 : h.delay,
      m = p ? "exiting" : "entering",
      S = b.useState(_),
      C = K(S, 2),
      T = C[0],
      I = C[1];
    return (
      b.useEffect(
        function () {
          var P = !1;
          if (!w) {
            if (!_) {
              l && l(m);
              return;
            }
            var M = function () {
              (m === "exiting" && g?.(), P || I(!1), l?.(m));
            };
            if (N1()) {
              M();
              return;
            }
            return (
              I(!0),
              y(M, p ? L1[f] : ei[f] + O),
              function () {
                P = !0;
              }
            );
          }
        },
        [g, m, p, f, O, w, y],
      ),
      r(
        {
          ref: h.ref,
          className: T
            ? R([
                R(["_1o51eoah _1y0co91m _1bumglyw _sedtglyw"]),
                w && R(["_1y0ctrqk"]),
                f === "small" && R(["_5sag1yx9"]),
                f === "medium" && R(["_5sag1ttt"]),
                f === "large" && R(["_5sagpwmj"]),
                p && f === "small" && R(["_5sag14ed"]),
                p && f === "medium" && R(["_5sagluct"]),
                p && f === "large" && R(["_5sag1ttt"]),
                p && R(["_ju255cps _1o51q7pw"]),
                !p && n === "linear" && R(["_1pglp3kn"]),
                !p && n === "ease-out" && R(["_1pgldkwg"]),
                !p && n === "ease-in" && R(["_1pgl1nzg"]),
                !p && n === "ease-in-40-out" && R(["_1pgl5y64"]),
                !p && n === "ease-in-60-out" && R(["_1pgl1ddy"]),
                !p && n === "ease-in-80-out" && R(["_1pglannl"]),
                !p && n === "ease-in-out" && R(["_1pgl1fu8"]),
                p && n === "linear" && R(["_1pglp3kn"]),
                p && a === "ease-out" && R(["_1pgldkwg"]),
                p && a === "ease-in" && R(["_1pgl1nzg"]),
                p && a === "ease-in-40-out" && R(["_1pgl5y64"]),
                p && a === "ease-in-60-out" && R(["_1pgl1ddy"]),
                p && a === "ease-in-80-out" && R(["_1pglannl"]),
                p && a === "ease-in-out" && R(["_1pgl1fu8"]),
                ((!p && o === "fade-in") || (p && s === "fade-in")) && R(["_j7hq1cgr"]),
                ((!p && o === "fade-out") || (p && s === "fade-out")) && R(["_j7hq1lln"]),
                ((!p && o === "zoom-in") || (p && s === "zoom-in")) && R(["_j7hqe8p0"]),
                ((!p && o === "zoom-out") || (p && s === "zoom-out")) && R(["_j7hqy6ql"]),
                ((!p && o === "slide-in-from-top") || (p && s === "slide-in-from-top")) &&
                  R(["_j7hqqshu"]),
                ((!p && o === "slide-out-from-top") || (p && s === "slide-out-from-top")) &&
                  R(["_j7hq7ri4"]),
                ((!p && o === "slide-in-from-right") || (p && s === "slide-in-from-right")) &&
                  R(["_j7hqdfjr"]),
                ((!p && o === "slide-out-from-right") || (p && s === "slide-out-from-right")) &&
                  R(["_j7hqonfj"]),
                ((!p && o === "slide-in-from-bottom") || (p && s === "slide-in-from-bottom")) &&
                  R(["_j7hq1liq"]),
                ((!p && o === "slide-out-from-bottom") || (p && s === "slide-out-from-bottom")) &&
                  R(["_j7hqhnf1"]),
                ((!p && o === "slide-in-from-left") || (p && s === "slide-in-from-left")) &&
                  R(["_j7hq1bh1"]),
                ((!p && o === "slide-out-from-left") || (p && s === "slide-out-from-left")) &&
                  R(["_j7hqj08w"]),
                ((!p && o === "fade-in-from-top") || (p && s === "fade-in-from-top")) &&
                  R(["_j7hq2iua"]),
                ((!p && o === "fade-out-from-top") || (p && s === "fade-out-from-top")) &&
                  R(["_j7hq39va"]),
                ((!p && o === "fade-in-from-left") || (p && s === "fade-in-from-left")) &&
                  R(["_j7hq15m2"]),
                ((!p && o === "fade-out-from-left") || (p && s === "fade-out-from-left")) &&
                  R(["_j7hq1yiv"]),
                ((!p && o === "fade-in-from-bottom") || (p && s === "fade-in-from-bottom")) &&
                  R(["_j7hq1w00"]),
                ((!p && o === "fade-out-from-bottom") || (p && s === "fade-out-from-bottom")) &&
                  R(["_j7hqzy3z"]),
                ((!p && o === "fade-in-from-right") || (p && s === "fade-in-from-right")) &&
                  R(["_j7hqpqak"]),
                ((!p && o === "fade-out-from-right") || (p && s === "fade-out-from-right")) &&
                  R(["_j7hq1ebg"]),
                ((!p && o === "fade-in-from-top-constant") ||
                  (p && s === "fade-in-from-top-constant")) &&
                  R(["_j7hqm2e2"]),
                ((!p && o === "fade-out-from-top-constant") ||
                  (p && s === "fade-out-from-top-constant")) &&
                  R(["_j7hq97jn"]),
                ((!p && o === "fade-in-from-left-constant") ||
                  (p && s === "fade-in-from-left-constant")) &&
                  R(["_j7hqovgq"]),
                ((!p && o === "fade-out-from-left-constant") ||
                  (p && s === "fade-out-from-left-constant")) &&
                  R(["_j7hq15do"]),
                ((!p && o === "fade-in-from-bottom-constant") ||
                  (p && s === "fade-in-from-bottom-constant")) &&
                  R(["_j7hq797a"]),
                ((!p && o === "fade-out-from-bottom-constant") ||
                  (p && s === "fade-out-from-bottom-constant")) &&
                  R(["_j7hqwo7r"]),
                ((!p && o === "fade-in-from-right-constant") ||
                  (p && s === "fade-in-from-right-constant")) &&
                  R(["_j7hqt8u5"]),
                ((!p && o === "fade-out-from-right-constant") ||
                  (p && s === "fade-out-from-right-constant")) &&
                  R(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(O, "ms") },
        },
        m,
      )
    );
  },
  Y1 = { top: "bottom", bottom: "top", left: "right", right: "left" },
  J1 = function (t) {
    var r = t.children,
      n = t.duration,
      i = n === void 0 ? "large" : n,
      a = t.entranceDirection,
      o = t.exitDirection,
      u = t.distance,
      s = u === void 0 ? "proportional" : u,
      c = t.onFinish,
      l = t.isPaused,
      d = a !== void 0 ? Y1[a] : void 0,
      f =
        o || d
          ? "fade-out-from-".concat(o || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return E.createElement(
      K1,
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
  X1 = b.createContext();
b.createContext();
var Q1 = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  Z1 = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
        n[i - 1] = arguments[i];
      return t.apply(void 0, n);
    }
  },
  eS = function (t, r) {
    if (typeof t == "function") return Z1(t, r);
    t != null && (t.current = r);
  },
  Wd = function (t) {
    return t.reduce(function (r, n) {
      var i = n[0],
        a = n[1];
      return ((r[i] = a), r);
    }, {});
  },
  Kd =
    typeof window < "u" && window.document && window.document.createElement
      ? b.useLayoutEffect
      : b.useEffect,
  Pe = "top",
  et = "bottom",
  tt = "right",
  Ae = "left",
  su = "auto",
  Pi = [Pe, et, tt, Ae],
  Br = "start",
  yi = "end",
  tS = "clippingParents",
  Xp = "viewport",
  Xn = "popper",
  rS = "reference",
  Yd = Pi.reduce(function (e, t) {
    return e.concat([t + "-" + Br, t + "-" + yi]);
  }, []),
  Qp = [].concat(Pi, [su]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Br, t + "-" + yi]);
  }, []),
  nS = "beforeRead",
  iS = "read",
  aS = "afterRead",
  oS = "beforeMain",
  sS = "main",
  uS = "afterMain",
  cS = "beforeWrite",
  lS = "write",
  dS = "afterWrite",
  fS = [nS, iS, aS, oS, sS, uS, cS, lS, dS];
function xt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ne(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function pr(e) {
  var t = Ne(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ze(e) {
  var t = Ne(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function uu(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Ne(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function vS(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      i = t.attributes[r] || {},
      a = t.elements[r];
    !Ze(a) ||
      !xt(a) ||
      (Object.assign(a.style, n),
      Object.keys(i).forEach(function (o) {
        var u = i[o];
        u === !1 ? a.removeAttribute(o) : a.setAttribute(o, u === !0 ? "" : u);
      }));
  });
}
function pS(e) {
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
        !Ze(i) ||
          !xt(i) ||
          (Object.assign(i.style, u),
          Object.keys(a).forEach(function (s) {
            i.removeAttribute(s);
          }));
      });
    }
  );
}
const hS = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: vS,
  effect: pS,
  requires: ["computeStyles"],
};
function St(e) {
  return e.split("-")[0];
}
var ur = Math.max,
  ma = Math.min,
  qr = Math.round;
function Ts() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Zp() {
  return !/^((?!chrome|android).)*safari/i.test(Ts());
}
function Ur(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    i = 1,
    a = 1;
  t &&
    Ze(e) &&
    ((i = (e.offsetWidth > 0 && qr(n.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && qr(n.height) / e.offsetHeight) || 1));
  var o = pr(e) ? Ne(e) : window,
    u = o.visualViewport,
    s = !Zp() && r,
    c = (n.left + (s && u ? u.offsetLeft : 0)) / i,
    l = (n.top + (s && u ? u.offsetTop : 0)) / a,
    d = n.width / i,
    f = n.height / a;
  return { width: d, height: f, top: l, right: c + d, bottom: l + f, left: c, x: c, y: l };
}
function cu(e) {
  var t = Ur(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function eh(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && uu(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function qt(e) {
  return Ne(e).getComputedStyle(e);
}
function gS(e) {
  return ["table", "td", "th"].indexOf(xt(e)) >= 0;
}
function Zt(e) {
  return ((pr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Wa(e) {
  return xt(e) === "html" ? e : e.assignedSlot || e.parentNode || (uu(e) ? e.host : null) || Zt(e);
}
function Jd(e) {
  return !Ze(e) || qt(e).position === "fixed" ? null : e.offsetParent;
}
function _S(e) {
  var t = /firefox/i.test(Ts()),
    r = /Trident/i.test(Ts());
  if (r && Ze(e)) {
    var n = qt(e);
    if (n.position === "fixed") return null;
  }
  var i = Wa(e);
  for (uu(i) && (i = i.host); Ze(i) && ["html", "body"].indexOf(xt(i)) < 0; ) {
    var a = qt(i);
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
function Ai(e) {
  for (var t = Ne(e), r = Jd(e); r && gS(r) && qt(r).position === "static"; ) r = Jd(r);
  return r && (xt(r) === "html" || (xt(r) === "body" && qt(r).position === "static"))
    ? t
    : r || _S(e) || t;
}
function lu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function oi(e, t, r) {
  return ur(e, ma(t, r));
}
function bS(e, t, r) {
  var n = oi(e, t, r);
  return n > r ? r : n;
}
function th() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function rh(e) {
  return Object.assign({}, th(), e);
}
function nh(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var yS = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    rh(typeof t != "number" ? t : nh(t, Pi))
  );
};
function mS(e) {
  var t,
    r = e.state,
    n = e.name,
    i = e.options,
    a = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    u = St(r.placement),
    s = lu(u),
    c = [Ae, tt].indexOf(u) >= 0,
    l = c ? "height" : "width";
  if (!(!a || !o)) {
    var d = yS(i.padding, r),
      f = cu(a),
      h = s === "y" ? Pe : Ae,
      v = s === "y" ? et : tt,
      p = r.rects.reference[l] + r.rects.reference[s] - o[s] - r.rects.popper[l],
      g = o[s] - r.rects.reference[s],
      _ = Ai(a),
      y = _ ? (s === "y" ? _.clientHeight || 0 : _.clientWidth || 0) : 0,
      w = p / 2 - g / 2,
      O = d[h],
      m = y - f[l] - d[v],
      S = y / 2 - f[l] / 2 + w,
      C = oi(O, S, m),
      T = s;
    r.modifiersData[n] = ((t = {}), (t[T] = C), (t.centerOffset = C - S), t);
  }
}
function wS(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null &&
    ((typeof i == "string" && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (eh(t.elements.popper, i) && (t.elements.arrow = i)));
}
const OS = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: mS,
  effect: wS,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function $r(e) {
  return e.split("-")[1];
}
var SS = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function ES(e, t) {
  var r = e.x,
    n = e.y,
    i = t.devicePixelRatio || 1;
  return { x: qr(r * i) / i || 0, y: qr(n * i) / i || 0 };
}
function Xd(e) {
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
    h = f === void 0 ? 0 : f,
    v = o.y,
    p = v === void 0 ? 0 : v,
    g = typeof l == "function" ? l({ x: h, y: p }) : { x: h, y: p };
  ((h = g.x), (p = g.y));
  var _ = o.hasOwnProperty("x"),
    y = o.hasOwnProperty("y"),
    w = Ae,
    O = Pe,
    m = window;
  if (c) {
    var S = Ai(r),
      C = "clientHeight",
      T = "clientWidth";
    if (
      (S === Ne(r) &&
        ((S = Zt(r)),
        qt(S).position !== "static" &&
          u === "absolute" &&
          ((C = "scrollHeight"), (T = "scrollWidth"))),
      (S = S),
      i === Pe || ((i === Ae || i === tt) && a === yi))
    ) {
      O = et;
      var I = d && S === m && m.visualViewport ? m.visualViewport.height : S[C];
      ((p -= I - n.height), (p *= s ? 1 : -1));
    }
    if (i === Ae || ((i === Pe || i === et) && a === yi)) {
      w = tt;
      var P = d && S === m && m.visualViewport ? m.visualViewport.width : S[T];
      ((h -= P - n.width), (h *= s ? 1 : -1));
    }
  }
  var M = Object.assign({ position: u }, c && SS),
    q = l === !0 ? ES({ x: h, y: p }, Ne(r)) : { x: h, y: p };
  if (((h = q.x), (p = q.y), s)) {
    var B;
    return Object.assign(
      {},
      M,
      ((B = {}),
      (B[O] = y ? "0" : ""),
      (B[w] = _ ? "0" : ""),
      (B.transform =
        (m.devicePixelRatio || 1) <= 1
          ? "translate(" + h + "px, " + p + "px)"
          : "translate3d(" + h + "px, " + p + "px, 0)"),
      B),
    );
  }
  return Object.assign(
    {},
    M,
    ((t = {}), (t[O] = y ? p + "px" : ""), (t[w] = _ ? h + "px" : ""), (t.transform = ""), t),
  );
}
function kS(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    i = n === void 0 ? !0 : n,
    a = r.adaptive,
    o = a === void 0 ? !0 : a,
    u = r.roundOffsets,
    s = u === void 0 ? !0 : u,
    c = {
      placement: St(t.placement),
      variation: $r(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Xd(
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
        Xd(
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
const xS = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: kS, data: {} };
var Gi = { passive: !0 };
function CS(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    i = n.scroll,
    a = i === void 0 ? !0 : i,
    o = n.resize,
    u = o === void 0 ? !0 : o,
    s = Ne(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    a &&
      c.forEach(function (l) {
        l.addEventListener("scroll", r.update, Gi);
      }),
    u && s.addEventListener("resize", r.update, Gi),
    function () {
      (a &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", r.update, Gi);
        }),
        u && s.removeEventListener("resize", r.update, Gi));
    }
  );
}
const RS = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: CS,
  data: {},
};
var PS = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ta(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return PS[t];
  });
}
var AS = { start: "end", end: "start" };
function Qd(e) {
  return e.replace(/start|end/g, function (t) {
    return AS[t];
  });
}
function du(e) {
  var t = Ne(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function fu(e) {
  return Ur(Zt(e)).left + du(e).scrollLeft;
}
function jS(e, t) {
  var r = Ne(e),
    n = Zt(e),
    i = r.visualViewport,
    a = n.clientWidth,
    o = n.clientHeight,
    u = 0,
    s = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    var c = Zp();
    (c || (!c && t === "fixed")) && ((u = i.offsetLeft), (s = i.offsetTop));
  }
  return { width: a, height: o, x: u + fu(e), y: s };
}
function IS(e) {
  var t,
    r = Zt(e),
    n = du(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    a = ur(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
    o = ur(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
    u = -n.scrollLeft + fu(e),
    s = -n.scrollTop;
  return (
    qt(i || r).direction === "rtl" && (u += ur(r.clientWidth, i ? i.clientWidth : 0) - a),
    { width: a, height: o, x: u, y: s }
  );
}
function vu(e) {
  var t = qt(e),
    r = t.overflow,
    n = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function ih(e) {
  return ["html", "body", "#document"].indexOf(xt(e)) >= 0
    ? e.ownerDocument.body
    : Ze(e) && vu(e)
      ? e
      : ih(Wa(e));
}
function si(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = ih(e),
    i = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = Ne(n),
    o = i ? [a].concat(a.visualViewport || [], vu(n) ? n : []) : n,
    u = t.concat(o);
  return i ? u : u.concat(si(Wa(o)));
}
function Ms(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function DS(e, t) {
  var r = Ur(e, !1, t === "fixed");
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
function Zd(e, t, r) {
  return t === Xp ? Ms(jS(e, r)) : pr(t) ? DS(t, r) : Ms(IS(Zt(e)));
}
function TS(e) {
  var t = si(Wa(e)),
    r = ["absolute", "fixed"].indexOf(qt(e).position) >= 0,
    n = r && Ze(e) ? Ai(e) : e;
  return pr(n)
    ? t.filter(function (i) {
        return pr(i) && eh(i, n) && xt(i) !== "body";
      })
    : [];
}
function MS(e, t, r, n) {
  var i = t === "clippingParents" ? TS(e) : [].concat(t),
    a = [].concat(i, [r]),
    o = a[0],
    u = a.reduce(
      function (s, c) {
        var l = Zd(e, c, n);
        return (
          (s.top = ur(l.top, s.top)),
          (s.right = ma(l.right, s.right)),
          (s.bottom = ma(l.bottom, s.bottom)),
          (s.left = ur(l.left, s.left)),
          s
        );
      },
      Zd(e, o, n),
    );
  return (
    (u.width = u.right - u.left),
    (u.height = u.bottom - u.top),
    (u.x = u.left),
    (u.y = u.top),
    u
  );
}
function ah(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    i = n ? St(n) : null,
    a = n ? $r(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    s;
  switch (i) {
    case Pe:
      s = { x: o, y: t.y - r.height };
      break;
    case et:
      s = { x: o, y: t.y + t.height };
      break;
    case tt:
      s = { x: t.x + t.width, y: u };
      break;
    case Ae:
      s = { x: t.x - r.width, y: u };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var c = i ? lu(i) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (a) {
      case Br:
        s[c] = s[c] - (t[l] / 2 - r[l] / 2);
        break;
      case yi:
        s[c] = s[c] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function mi(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = n === void 0 ? e.placement : n,
    a = r.strategy,
    o = a === void 0 ? e.strategy : a,
    u = r.boundary,
    s = u === void 0 ? tS : u,
    c = r.rootBoundary,
    l = c === void 0 ? Xp : c,
    d = r.elementContext,
    f = d === void 0 ? Xn : d,
    h = r.altBoundary,
    v = h === void 0 ? !1 : h,
    p = r.padding,
    g = p === void 0 ? 0 : p,
    _ = rh(typeof g != "number" ? g : nh(g, Pi)),
    y = f === Xn ? rS : Xn,
    w = e.rects.popper,
    O = e.elements[v ? y : f],
    m = MS(pr(O) ? O : O.contextElement || Zt(e.elements.popper), s, l, o),
    S = Ur(e.elements.reference),
    C = ah({ reference: S, element: w, placement: i }),
    T = Ms(Object.assign({}, w, C)),
    I = f === Xn ? T : S,
    P = {
      top: m.top - I.top + _.top,
      bottom: I.bottom - m.bottom + _.bottom,
      left: m.left - I.left + _.left,
      right: I.right - m.right + _.right,
    },
    M = e.modifiersData.offset;
  if (f === Xn && M) {
    var q = M[i];
    Object.keys(P).forEach(function (B) {
      var V = [tt, et].indexOf(B) >= 0 ? 1 : -1,
        J = [Pe, et].indexOf(B) >= 0 ? "y" : "x";
      P[B] += q[J] * V;
    });
  }
  return P;
}
function LS(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = r.boundary,
    a = r.rootBoundary,
    o = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    c = s === void 0 ? Qp : s,
    l = $r(n),
    d = l
      ? u
        ? Yd
        : Yd.filter(function (v) {
            return $r(v) === l;
          })
      : Pi,
    f = d.filter(function (v) {
      return c.indexOf(v) >= 0;
    });
  f.length === 0 && (f = d);
  var h = f.reduce(function (v, p) {
    return ((v[p] = mi(e, { placement: p, boundary: i, rootBoundary: a, padding: o })[St(p)]), v);
  }, {});
  return Object.keys(h).sort(function (v, p) {
    return h[v] - h[p];
  });
}
function FS(e) {
  if (St(e) === su) return [];
  var t = ta(e);
  return [Qd(e), t, Qd(t)];
}
function NS(e) {
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
        h = r.flipVariations,
        v = h === void 0 ? !0 : h,
        p = r.allowedAutoPlacements,
        g = t.options.placement,
        _ = St(g),
        y = _ === g,
        w = s || (y || !v ? [ta(g)] : FS(g)),
        O = [g].concat(w).reduce(function (le, ge) {
          return le.concat(
            St(ge) === su
              ? LS(t, {
                  placement: ge,
                  boundary: l,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: v,
                  allowedAutoPlacements: p,
                })
              : ge,
          );
        }, []),
        m = t.rects.reference,
        S = t.rects.popper,
        C = new Map(),
        T = !0,
        I = O[0],
        P = 0;
      P < O.length;
      P++
    ) {
      var M = O[P],
        q = St(M),
        B = $r(M) === Br,
        V = [Pe, et].indexOf(q) >= 0,
        J = V ? "width" : "height",
        G = mi(t, { placement: M, boundary: l, rootBoundary: d, altBoundary: f, padding: c }),
        $ = V ? (B ? tt : Ae) : B ? et : Pe;
      m[J] > S[J] && ($ = ta($));
      var X = ta($),
        N = [];
      if (
        (a && N.push(G[q] <= 0),
        u && N.push(G[$] <= 0, G[X] <= 0),
        N.every(function (le) {
          return le;
        }))
      ) {
        ((I = M), (T = !1));
        break;
      }
      C.set(M, N);
    }
    if (T)
      for (
        var j = v ? 3 : 1,
          _e = function (ge) {
            var ue = O.find(function (Ue) {
              var Oe = C.get(Ue);
              if (Oe)
                return Oe.slice(0, ge).every(function (rt) {
                  return rt;
                });
            });
            if (ue) return ((I = ue), "break");
          },
          ae = j;
        ae > 0;
        ae--
      ) {
        var se = _e(ae);
        if (se === "break") break;
      }
    t.placement !== I && ((t.modifiersData[n]._skip = !0), (t.placement = I), (t.reset = !0));
  }
}
const zS = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: NS,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function ef(e, t, r) {
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
function tf(e) {
  return [Pe, tt, et, Ae].some(function (t) {
    return e[t] >= 0;
  });
}
function BS(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    i = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    o = mi(t, { elementContext: "reference" }),
    u = mi(t, { altBoundary: !0 }),
    s = ef(o, n),
    c = ef(u, i, a),
    l = tf(s),
    d = tf(c);
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
const qS = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: BS,
};
function US(e, t, r) {
  var n = St(e),
    i = [Ae, Pe].indexOf(n) >= 0 ? -1 : 1,
    a = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = a[0],
    u = a[1];
  return (
    (o = o || 0),
    (u = (u || 0) * i),
    [Ae, tt].indexOf(n) >= 0 ? { x: u, y: o } : { x: o, y: u }
  );
}
function $S(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    i = r.offset,
    a = i === void 0 ? [0, 0] : i,
    o = Qp.reduce(function (l, d) {
      return ((l[d] = US(d, t.rects, a)), l);
    }, {}),
    u = o[t.placement],
    s = u.x,
    c = u.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o));
}
const VS = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: $S };
function GS(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = ah({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const HS = { name: "popperOffsets", enabled: !0, phase: "read", fn: GS, data: {} };
function WS(e) {
  return e === "x" ? "y" : "x";
}
function KS(e) {
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
    h = f === void 0 ? !0 : f,
    v = r.tetherOffset,
    p = v === void 0 ? 0 : v,
    g = mi(t, { boundary: s, rootBoundary: c, padding: d, altBoundary: l }),
    _ = St(t.placement),
    y = $r(t.placement),
    w = !y,
    O = lu(_),
    m = WS(O),
    S = t.modifiersData.popperOffsets,
    C = t.rects.reference,
    T = t.rects.popper,
    I = typeof p == "function" ? p(Object.assign({}, t.rects, { placement: t.placement })) : p,
    P =
      typeof I == "number"
        ? { mainAxis: I, altAxis: I }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, I),
    M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    q = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var B,
        V = O === "y" ? Pe : Ae,
        J = O === "y" ? et : tt,
        G = O === "y" ? "height" : "width",
        $ = S[O],
        X = $ + g[V],
        N = $ - g[J],
        j = h ? -T[G] / 2 : 0,
        _e = y === Br ? C[G] : T[G],
        ae = y === Br ? -T[G] : -C[G],
        se = t.elements.arrow,
        le = h && se ? cu(se) : { width: 0, height: 0 },
        ge = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : th(),
        ue = ge[V],
        Ue = ge[J],
        Oe = oi(0, C[G], le[G]),
        rt = w ? C[G] / 2 - j - Oe - ue - P.mainAxis : _e - Oe - ue - P.mainAxis,
        pe = w ? -C[G] / 2 + j + Oe + Ue + P.mainAxis : ae + Oe + Ue + P.mainAxis,
        $e = t.elements.arrow && Ai(t.elements.arrow),
        yr = $e ? (O === "y" ? $e.clientTop || 0 : $e.clientLeft || 0) : 0,
        At = (B = M?.[O]) != null ? B : 0,
        Se = $ + rt - At - yr,
        Ee = $ + pe - At,
        Ut = oi(h ? ma(X, Se) : X, $, h ? ur(N, Ee) : N);
      ((S[O] = Ut), (q[O] = Ut - $));
    }
    if (u) {
      var vt,
        nt = O === "x" ? Pe : Ae,
        $t = O === "x" ? et : tt,
        Ve = S[m],
        De = m === "y" ? "height" : "width",
        ke = Ve + g[nt],
        it = Ve - g[$t],
        Vt = [Pe, Ae].indexOf(_) !== -1,
        ji = (vt = M?.[m]) != null ? vt : 0,
        Ii = Vt ? ke : Ve - C[De] - T[De] - ji + P.altAxis,
        Di = Vt ? Ve + C[De] + T[De] - ji - P.altAxis : it,
        Ti = h && Vt ? bS(Ii, Ve, Di) : oi(h ? Ii : ke, Ve, h ? Di : it);
      ((S[m] = Ti), (q[m] = Ti - Ve));
    }
    t.modifiersData[n] = q;
  }
}
const YS = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: KS,
  requiresIfExists: ["offset"],
};
function JS(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function XS(e) {
  return e === Ne(e) || !Ze(e) ? du(e) : JS(e);
}
function QS(e) {
  var t = e.getBoundingClientRect(),
    r = qr(t.width) / e.offsetWidth || 1,
    n = qr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function ZS(e, t, r) {
  r === void 0 && (r = !1);
  var n = Ze(t),
    i = Ze(t) && QS(t),
    a = Zt(t),
    o = Ur(e, i, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((xt(t) !== "body" || vu(a)) && (u = XS(t)),
      Ze(t) ? ((s = Ur(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : a && (s.x = fu(a))),
    {
      x: o.left + u.scrollLeft - s.x,
      y: o.top + u.scrollTop - s.y,
      width: o.width,
      height: o.height,
    }
  );
}
function eE(e) {
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
function tE(e) {
  var t = eE(e);
  return fS.reduce(function (r, n) {
    return r.concat(
      t.filter(function (i) {
        return i.phase === n;
      }),
    );
  }, []);
}
function rE(e) {
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
function nE(e) {
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
var rf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function nf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function iE(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    i = t.defaultOptions,
    a = i === void 0 ? rf : i;
  return function (u, s, c) {
    c === void 0 && (c = a);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, rf, a),
        modifiersData: {},
        elements: { reference: u, popper: s },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      h = {
        state: l,
        setOptions: function (_) {
          var y = typeof _ == "function" ? _(l.options) : _;
          (p(),
            (l.options = Object.assign({}, a, l.options, y)),
            (l.scrollParents = {
              reference: pr(u) ? si(u) : u.contextElement ? si(u.contextElement) : [],
              popper: si(s),
            }));
          var w = tE(nE([].concat(n, l.options.modifiers)));
          return (
            (l.orderedModifiers = w.filter(function (O) {
              return O.enabled;
            })),
            v(),
            h.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var _ = l.elements,
              y = _.reference,
              w = _.popper;
            if (nf(y, w)) {
              ((l.rects = {
                reference: ZS(y, Ai(w), l.options.strategy === "fixed"),
                popper: cu(w),
              }),
                (l.reset = !1),
                (l.placement = l.options.placement),
                l.orderedModifiers.forEach(function (P) {
                  return (l.modifiersData[P.name] = Object.assign({}, P.data));
                }));
              for (var O = 0; O < l.orderedModifiers.length; O++) {
                if (l.reset === !0) {
                  ((l.reset = !1), (O = -1));
                  continue;
                }
                var m = l.orderedModifiers[O],
                  S = m.fn,
                  C = m.options,
                  T = C === void 0 ? {} : C,
                  I = m.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: T, name: I, instance: h }) || l);
              }
            }
          }
        },
        update: rE(function () {
          return new Promise(function (g) {
            (h.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (p(), (f = !0));
        },
      };
    if (!nf(u, s)) return h;
    h.setOptions(c).then(function (g) {
      !f && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function v() {
      l.orderedModifiers.forEach(function (g) {
        var _ = g.name,
          y = g.options,
          w = y === void 0 ? {} : y,
          O = g.effect;
        if (typeof O == "function") {
          var m = O({ state: l, name: _, instance: h, options: w }),
            S = function () {};
          d.push(m || S);
        }
      });
    }
    function p() {
      (d.forEach(function (g) {
        return g();
      }),
        (d = []));
    }
    return h;
  };
}
var aE = [RS, HS, xS, hS, VS, zS, YS, OS, qS],
  oE = iE({ defaultModifiers: aE }),
  es,
  af;
function sE() {
  if (af) return es;
  af = 1;
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
    (es = function (o, u) {
      try {
        return i(o, u);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    es
  );
}
var uE = sE();
const cE = Xt(uE);
var lE = [],
  dE = function (t, r, n) {
    n === void 0 && (n = {});
    var i = b.useRef(null),
      a = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || lE,
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
          fn: function (h) {
            var v = h.state,
              p = Object.keys(v.elements);
            wa.flushSync(function () {
              s({
                styles: Wd(
                  p.map(function (g) {
                    return [g, v.styles[g] || {}];
                  }),
                ),
                attributes: Wd(
                  p.map(function (g) {
                    return [g, v.attributes[g]];
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
          return cE(i.current, f) ? i.current || f : ((i.current = f), f);
        },
        [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, c],
      ),
      d = b.useRef();
    return (
      Kd(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      Kd(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || oE,
              h = f(t, r, l);
            return (
              (d.current = h),
              function () {
                (h.destroy(), (d.current = null));
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
  fE = function () {},
  vE = function () {
    return Promise.resolve(null);
  },
  pE = [];
function hE(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    i = n === void 0 ? "absolute" : n,
    a = e.modifiers,
    o = a === void 0 ? pE : a,
    u = e.referenceElement,
    s = e.onFirstUpdate,
    c = e.innerRef,
    l = e.children,
    d = b.useContext(X1),
    f = b.useState(null),
    h = f[0],
    v = f[1],
    p = b.useState(null),
    g = p[0],
    _ = p[1];
  b.useEffect(
    function () {
      eS(c, h);
    },
    [c, h],
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
    w = dE(u || d, h, y),
    O = w.state,
    m = w.styles,
    S = w.forceUpdate,
    C = w.update,
    T = b.useMemo(
      function () {
        return {
          ref: v,
          style: m.popper,
          placement: O ? O.placement : r,
          hasPopperEscaped:
            O && O.modifiersData.hide ? O.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            O && O.modifiersData.hide ? O.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: m.arrow, ref: _ },
          forceUpdate: S || fE,
          update: C || vE,
        };
      },
      [v, _, r, O, m, C, S],
    );
  return Q1(l)(T);
}
function gE(e) {
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
            h = s.placement.split("-"),
            v = K(h, 1),
            p = v[0],
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
          (p === "top" && (y = s.rects.reference.y + g.y - t),
            p === "bottom" && (y = l.height - f.y - t),
            p === "left" && (_ = s.rects.reference.x + g.x - t),
            p === "right" && (_ = l.width - f.x - t),
            (s.styles.popper.maxWidth = "".concat(_, "px")),
            (s.styles.popper.maxHeight = "".concat(y, "px")));
        }
      },
    },
  ];
}
var Ls = 5,
  _E = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: Ls,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function bE() {
  return null;
}
var yE = [0, 8];
function mE(e) {
  var t = e.children,
    r = t === void 0 ? bE : t,
    n = e.offset,
    i = n === void 0 ? yE : n,
    a = e.placement,
    o = a === void 0 ? "bottom-start" : a,
    u = e.referenceElement,
    s = u === void 0 ? void 0 : u,
    c = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    f = e.shouldFitViewport,
    h = f === void 0 ? !1 : f,
    v = K(i, 2),
    p = v[0],
    g = v[1],
    _ = b.useMemo(
      function () {
        var w = {
            name: "preventOverflow",
            options: { padding: Ls, rootBoundary: h ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [p, g] } },
          m = h ? gE({ viewportPadding: Ls }) : [];
        return [].concat(_E, [w, O], Te(m));
      },
      [p, g, h],
    ),
    y = b.useMemo(
      function () {
        return c == null ? _ : [].concat(Te(_), Te(c));
      },
      [_, c],
    );
  return E.createElement(hE, { modifiers: y, placement: o, strategy: d, referenceElement: s }, r);
}
var oh = "atlaskit-portal-container",
  sh = "body > .atlaskit-portal-container",
  uh = "atlaskit-portal",
  wE = function (t) {
    var r = document.createElement("div");
    return ((r.className = uh), (r.style.zIndex = "".concat(t)), r);
  },
  ch = function () {
    return document.body;
  },
  lh = function () {
    var t = document.querySelector(sh);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = oh),
        (n.style.display = "flex"),
        (r = ch()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  OE = function (t) {
    lh().removeChild(t);
  },
  SE = function (t) {
    t.parentElement || lh().appendChild(t);
  },
  dh = function () {
    return document !== void 0;
  },
  EE = function (t) {
    if (dh()) {
      var r = document.createElement("div");
      return ((r.className = uh), (r.style.zIndex = "".concat(t)), r);
    }
  },
  kE = function () {
    if (dh()) {
      var t = document.querySelector(sh);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = oh),
          (n.style.display = "flex"),
          (r = ch()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function xE(e) {
  var t = e.zIndex,
    r = e.children,
    n = b.useMemo(
      function () {
        return wE(t);
      },
      [t],
    );
  return (
    SE(n),
    b.useEffect(
      function () {
        return function () {
          OE(n);
        };
      },
      [n],
    ),
    wa.createPortal(r, n)
  );
}
var fh = typeof window < "u" ? b.useLayoutEffect : b.useEffect;
function CE(e) {
  var t = e.zIndex,
    r = e.children,
    n = b.useState(null),
    i = K(n, 2),
    a = i[0],
    o = i[1];
  fh(
    function () {
      var s = EE(t);
      o(s);
      var c = kE();
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
  return a ? wa.createPortal(u, a) : null;
}
var RE = function (t) {
    var r = b.useState(!1),
      n = K(r, 2),
      i = n[0],
      a = n[1],
      o = b.useState(function () {
        return t === "layoutEffect" ? fh : b.useEffect;
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
  PE = "akPortalMount",
  AE = "akPortalUnmount",
  of = {
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
  jE = function (t) {
    return of.hasOwnProperty(t) ? of[t] : null;
  },
  IE = function (t, r) {
    var n = { layer: jE(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function sf(e, t) {
  var r = IE(e, t);
  window.dispatchEvent(r);
}
var DE = function (t) {
  var r = Number(t);
  b.useEffect(
    function () {
      return (
        sf(PE, r),
        function () {
          sf(AE, r);
        }
      );
    },
    [r],
  );
};
function TE(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    i = e.mountStrategy,
    a = i === void 0 ? "effect" : i,
    o = RE(a);
  return (
    DE(r),
    Nr("platform_design_system_team_portal_logic_r18_fix")
      ? E.createElement(CE, { zIndex: r }, n)
      : o
        ? E.createElement(xE, { zIndex: r }, n)
        : null
  );
}
var ui = new Set(),
  wi = null;
function uf() {
  if (!wi) {
    wi = $a.bindAll(window, [
      { type: "dragend", listener: ts },
      { type: "pointerdown", listener: ts },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            ts();
          };
        })(),
      },
    ]);
    var e = Array.from(ui);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function ts() {
  var e;
  ((e = wi) === null || e === void 0 || e(), (wi = null));
  var t = Array.from(ui);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function ME() {
  return $a.bindAll(window, [
    { type: "dragstart", listener: uf },
    { type: "dragenter", listener: uf },
  ]);
}
var Hi = null;
function LE(e) {
  return (
    Hi || (Hi = ME()),
    ui.add(e),
    e.onRegister({ isDragging: wi !== null }),
    function () {
      if ((ui.delete(e), ui.size === 0)) {
        var r;
        ((r = Hi) === null || r === void 0 || r(), (Hi = null));
      }
    }
  );
}
var ci = null;
function ti() {
  ci != null && (window.clearTimeout(ci), (ci = null));
}
function cf(e, t) {
  (ti(),
    (ci = window.setTimeout(function () {
      ((ci = null), e());
    }, t)));
}
var pt = null;
function FE(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(pt && pt.entry === e);
  }
  function n() {
    r() && (ti(), (pt = null));
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
  function u(h) {
    var v = h.isImmediate;
    if (r()) {
      if (t === "waiting-to-show") {
        a();
        return;
      }
      if (t !== "waiting-to-hide") {
        if (v) {
          a();
          return;
        }
        ((t = "waiting-to-hide"),
          cf(function () {
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
    var h = !!(pt && pt.isVisible());
    (pt && (ti(), pt.entry.hide({ isImmediate: !0 }), pt.entry.done(), (pt = null)),
      (pt = { entry: e, isVisible: c }));
    function v() {
      ((t = "shown"), e.show({ isImmediate: h }));
    }
    if (h) {
      v();
      return;
    }
    ((t = "waiting-to-show"), cf(v, e.delay));
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
function NE(e, t) {
  var r = xw();
  return t ? "".concat(r(e)) : void 0;
}
var rs = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81u0j _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
    regularFont: "_11c81o8v",
  },
  zE = function (t) {
    var r = t.shortcut;
    return b.createElement(
      "div",
      { className: R([rs.shortcutSegmentsContainer]) },
      r.map(function (n, i) {
        return b.createElement(
          "kbd",
          {
            key: "".concat(n, "-").concat(i),
            className: R([
              rs.shortcutSegment,
              Nr("platform-tooltip-shortcuts-regular-font") && rs.regularFont,
            ]),
          },
          n,
        );
      }),
    );
  },
  vh = b.forwardRef(function (t, r) {
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
          className: R(["_80om73ad", i]),
          onMouseOut: s,
          onMouseOver: c,
          "data-placement": o,
          "data-testid": u,
          id: l,
        },
        a,
        d && b.createElement(zE, { shortcut: d }),
      ),
    );
  });
vh.displayName = "TooltipPrimitive";
var lf = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  ph = b.forwardRef(function (t, r) {
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
      vh,
      {
        ref: r,
        style: n,
        className: R([lf.base, o && lf.truncate, i]),
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
ph.displayName = "TooltipContainer";
function df(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function ff(e, t) {
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
function Ar(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ff(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ff(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var BE = Cw.tooltip(),
  vf = { componentName: "tooltip", packageName: "@atlaskit/tooltip", packageVersion: "20.9.0" },
  qE = { top: "bottom", bottom: "top", left: "right", right: "left" },
  UE = function (t) {
    return t.split("-")[0];
  };
function $E(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    i = e.mousePosition,
    a = i === void 0 ? "bottom" : i,
    o = e.content,
    u = e.truncate,
    s = u === void 0 ? !1 : u,
    c = e.component,
    l = c === void 0 ? ph : c,
    d = e.tag,
    f = d === void 0 ? "div" : d,
    h = e.testId,
    v = e.delay,
    p = v === void 0 ? 300 : v,
    g = e.onShow,
    _ = g === void 0 ? we : g,
    y = e.onHide,
    w = y === void 0 ? we : y,
    O = e.canAppear,
    m = e.hideTooltipOnClick,
    S = m === void 0 ? !1 : m,
    C = e.hideTooltipOnMouseDown,
    T = C === void 0 ? !1 : C,
    I = e.analyticsContext,
    P = e.strategy,
    M = P === void 0 ? "fixed" : P,
    q = e.ignoreTooltipPointerEvents,
    B = q === void 0 ? !1 : q,
    V = e.isScreenReaderAnnouncementDisabled,
    J = V === void 0 ? !1 : V,
    G = e.shortcut,
    $ = n === "mouse" ? a : n,
    X = gl(Ar({ fn: _, action: "displayed", analyticsData: I }, vf)),
    N = gl(Ar({ fn: w, action: "hidden", analyticsData: I }, vf)),
    j = b.useRef(null),
    _e = b.useState("hide"),
    ae = K(_e, 2),
    se = ae[0],
    le = ae[1],
    ge = b.useRef(null),
    ue = b.useRef(null),
    Ue = function (re) {
      ((ue.current = re), (ge.current = re ? re.firstElementChild : null));
    },
    Oe = b.useCallback(function (L) {
      ge.current = L;
    }, []),
    rt = Jn(se),
    pe = Jn(X),
    $e = Jn(N),
    yr = Jn(p),
    At = Jn(O),
    Se = b.useRef(!1),
    Ee = b.useCallback(function (L) {
      ((j.current = L), (Se.current = !1));
    }, []),
    Ut = b.useCallback(
      function () {
        j.current &&
          (Se.current && $e.current(), (j.current = null), (Se.current = !1), le("hide"));
      },
      [$e],
    ),
    vt = b.useCallback(
      function () {
        j.current && (j.current.abort(), Se.current && $e.current(), (j.current = null));
      },
      [$e],
    );
  b.useEffect(
    function () {
      return function () {
        j.current && vt();
      };
    },
    [vt],
  );
  var nt = b.useRef(!1);
  b.useEffect(function () {
    return LE({
      onRegister: function (re) {
        var jt = re.isDragging;
        nt.current = jt;
      },
      onDragStart: function () {
        var re;
        ((re = j.current) === null || re === void 0 || re.requestHide({ isImmediate: !0 }),
          (nt.current = !0));
      },
      onDragEnd: function () {
        nt.current = !1;
      },
    });
  }, []);
  var $t = b.useCallback(
      function (L) {
        var re;
        if (!nt.current) {
          if ((j.current && !j.current.isActive() && vt(), j.current && j.current.isActive())) {
            j.current.keep();
            return;
          }
          if (!(At.current && !((re = At.current) !== null && re !== void 0 && re.call(At)))) {
            var jt = {
                source: L,
                delay: yr.current,
                show: function (mr) {
                  var Yr = mr.isImmediate;
                  (Se.current || ((Se.current = !0), pe.current()),
                    le(Yr ? "show-immediate" : "fade-in"));
                },
                hide: function (mr) {
                  var Yr = mr.isImmediate;
                  le(Yr ? "hide" : "before-fade-out");
                },
                done: Ut,
              },
              Xa = FE(jt);
            Ee(Xa);
          }
        }
      },
      [At, yr, Ut, Ee, vt, pe],
    ),
    Ve = b.useCallback(
      function () {
        var L;
        (L = j.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
      },
      [j],
    );
  (j1({ onClose: Ve, isDisabled: se === "hide" || se === "fade-out" }),
    b.useEffect(
      function () {
        if (se === "hide") return we;
        se === "before-fade-out" && le("fade-out");
        var L = $a.bind(window, {
          type: "scroll",
          listener: function () {
            j.current && j.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return L;
      },
      [se],
    ));
  var De = b.useCallback(
      function () {
        T && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [T],
    ),
    ke = b.useCallback(
      function () {
        S && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    it = b.useCallback(
      function (L) {
        if (!(ue.current && L.target === ue.current) && !L.defaultPrevented) {
          L.preventDefault();
          var re =
            n === "mouse"
              ? { type: "mouse", mouse: df({ left: L.clientX, top: L.clientY }) }
              : { type: "keyboard" };
          $t(re);
        }
      },
      [n, $t],
    ),
    Vt = b.useCallback(function (L) {
      (ue.current && L.target === ue.current) ||
        L.defaultPrevented ||
        (L.preventDefault(), j.current && j.current.requestHide({ isImmediate: !1 }));
    }, []),
    ji =
      n === "mouse"
        ? function (L) {
            var re;
            (re = j.current) !== null &&
              re !== void 0 &&
              re.isActive() &&
              (j.current.mousePosition = df({ left: L.clientX, top: L.clientY }));
          }
        : void 0,
    Ii = b.useCallback(function () {
      if (j.current && j.current.isActive()) {
        j.current.keep();
        return;
      }
    }, []),
    Di = b.useCallback(
      function (L) {
        try {
          if (!L.target.matches(":focus-visible")) return;
        } catch {}
        $t({ type: "keyboard" });
      },
      [$t],
    ),
    Ti = b.useCallback(function () {
      j.current && j.current.requestHide({ isImmediate: !1 });
    }, []),
    yh = b.useCallback(
      function (L) {
        L === "exiting" &&
          rt.current === "fade-out" &&
          j.current &&
          j.current.finishHideAnimation();
      },
      [rt],
    ),
    mh = f,
    Ya = se !== "hide" && !!o,
    hu = !J && Ya,
    gu = se !== "hide" && se !== "fade-out",
    wh = b.useCallback(function () {
      var L;
      (L = j.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
    }, []);
  M1({ isOpen: Ya && gu, onClose: wh });
  var _u = function () {
      var re;
      if (n === "mouse" && (re = j.current) !== null && re !== void 0 && re.mousePosition) {
        var jt;
        return (jt = j.current) === null || jt === void 0 ? void 0 : jt.mousePosition;
      }
      return ge.current || void 0;
    },
    Kr = NE("tooltip", hu),
    Ja = {
      onMouseOver: it,
      onMouseOut: Vt,
      onMouseMove: ji,
      onMouseDown: De,
      onClick: ke,
      onFocus: Di,
      onBlur: Ti,
    };
  h && (Ja["data-testid"] = "".concat(h, "--container"));
  var bu = typeof t == "function";
  b.useEffect(
    function () {
      if (!bu) {
        var L = ge.current;
        if (!(!L || !Kr))
          return (
            L.setAttribute("aria-describedby", Kr),
            function () {
              return L.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [bu, Kr],
  );
  var yu = hu
    ? E.createElement(
        "span",
        { "data-testid": h ? "".concat(h, "-hidden") : void 0, hidden: !0, id: Kr },
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
          t(Ar(Ar({}, Ja), {}, { "aria-describedby": Kr, ref: Oe })),
          yu,
        )
      : E.createElement(mh, te({}, Ja, { ref: Ue, role: "presentation" }), t, yu),
    Ya
      ? E.createElement(
          TE,
          { zIndex: BE },
          E.createElement(mE, { placement: $, referenceElement: _u(), strategy: M }, function (L) {
            var re = L.ref,
              jt = L.style,
              Xa = L.update,
              Qa = L.placement,
              mr = n === "mouse" ? void 0 : qE[UE(Qa)];
            return E.createElement(
              Jp,
              { appear: !0 },
              gu &&
                E.createElement(
                  J1,
                  {
                    distance: "constant",
                    entranceDirection: mr,
                    exitDirection: mr,
                    onFinish: yh,
                    duration: se !== "show-immediate" ? "medium" : "none",
                  },
                  function (Yr) {
                    var Oh = Yr.className;
                    return E.createElement(
                      l,
                      {
                        ref: re,
                        className: "Tooltip ".concat(Oh),
                        style: Ar(Ar({}, jt), B && { pointerEvents: "none" }),
                        truncate: s,
                        placement: $,
                        testId: _u() ? h : h && "".concat(h, "--unresolved"),
                        onMouseOut: Vt,
                        onMouseOver: Ii,
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
var VE = [
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
  Qn = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  pf = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syazazsu _k48pmoej" },
  hh = function (t) {
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
      h = t.descendingSortTooltip,
      v = h === void 0 ? "Sort descending" : h,
      p = t.buttonAriaRoleDescription,
      g = p === void 0 ? "Sort button" : p,
      _ = t.isIconOnlyHeader,
      y = ne(t, VE),
      w = b.useState(!1),
      O = K(w, 2),
      m = O[0],
      S = O[1],
      C = b.useState(!1),
      T = K(C, 2),
      I = T[0],
      P = T[1],
      M = c === l || u !== void 0,
      q = m || M || I,
      B = q && _,
      V = !_ || q || (_ && !I),
      J = b.useCallback(
        function () {
          P?.(!0);
        },
        [P],
      ),
      G = b.useCallback(
        function () {
          P?.(!1);
        },
        [P],
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
      N = E.createElement(
        Ua,
        { xcss: pf.headCellContainer, onMouseEnter: $, onMouseLeave: X, onFocus: J, onBlur: G },
        E.createElement(
          $E,
          { content: u === vr ? f : v },
          E.createElement(
            pw,
            { onClick: s, xcss: Qn.buttonWrapper, "aria-roledescription": g },
            E.createElement(
              ba,
              { xcss: B ? Qn.hideIconHeaderWrapper : Qn.visibleHeaderWrapper },
              E.createElement("span", { className: R([pf.text]) }, r),
            ),
            V &&
              E.createElement(
                ba,
                { xcss: q ? Qn.sortIconVisibleWrapper : Qn.sortIconHiddenWrapper },
                u === vr
                  ? E.createElement(P1, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: i && "".concat(i, "--up--icon"),
                    })
                  : E.createElement(x1, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: i && "".concat(i, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return E.createElement(
      w1,
      te(
        {
          style: n,
          testId: i && "".concat(i, "--head--cell"),
          ref: typeof a != "string" ? a : null,
        },
        y,
        { isSortable: o, sortOrder: u },
      ),
      o ? N : r,
    );
  },
  GE = ["isRanking", "refHeight", "refWidth"];
function HE(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, gh() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function gh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (gh = function () {
    return !!e;
  })();
}
var WE = (function (e) {
    function t() {
      return (fe(this, t), HE(this, t, arguments));
    }
    return (
      qe(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.isRanking;
            n.refHeight;
            var a = n.refWidth,
              o = ne(n, GE),
              u = oy(i, a);
            return E.createElement(hh, te({ inlineStyles: u }, o));
          },
        },
      ])
    );
  })(E.Component),
  KE = S1(WE),
  YE = ["cells"],
  JE = [
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
function XE(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, _h() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function _h() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (_h = function () {
    return !!e;
  })();
}
var QE = (function (e) {
    function t(r) {
      var n;
      return (fe(this, t), (n = XE(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      qe(t, e),
      ve(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            va(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              va(n.sortKey, n.head);
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
              h = this.state.activeSortButtonId;
            if (!a) return null;
            var v = d ? KE : hh,
              p = a.cells,
              g = ne(a, YE);
            return E.createElement(
              m1,
              te({}, g, { isRanking: l, testId: f && "".concat(f, "--head") }),
              E.createElement(
                "tr",
                null,
                p.map(function (_, y) {
                  var w = _.ascendingSortTooltip,
                    O = _.buttonAriaRoleDescription,
                    m = _.colSpan,
                    S = _.content,
                    C = _.descendingSortTooltip,
                    T = _.isIconOnlyHeader,
                    I = _.isSortable,
                    P = _.key,
                    M = _.shouldTruncate,
                    q = _.testId,
                    B = _.width,
                    V = ne(_, JE),
                    J = "head-cell-".concat(y),
                    G = function () {
                      (n.setState({ activeSortButtonId: J }), I && c(_)());
                    };
                  return E.createElement(
                    v,
                    te(
                      {
                        colSpan: m,
                        content: S,
                        isFixedSize: s,
                        isIconOnlyHeader: T,
                        isSortable: !!I,
                        isRanking: l,
                        key: P || y,
                        headCellId: J,
                        activeSortButtonId: h,
                        onClick: G,
                        testId: q || f,
                        shouldTruncate: M,
                        sortOrder: P === o ? u : void 0,
                        width: B,
                        ascendingSortTooltip: w,
                        descendingSortTooltip: C,
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
  ZE = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function ek(e) {
  switch (e) {
    case ga:
      return vr;
    case vr:
      return ga;
    default:
      return e;
  }
}
var tk = function (t) {
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
      h = t.isLoading,
      v = h === void 0 ? !1 : h,
      p = t.isFixedSize,
      g = p === void 0 ? !1 : p,
      _ = t.rowsPerPage,
      y = _ === void 0 ? 1 / 0 : _,
      w = t.onSetPage,
      O = w === void 0 ? we : w,
      m = t.onSort,
      S = m === void 0 ? we : m,
      C = t.page,
      T = C === void 0 ? 1 : C,
      I = t.emptyView,
      P = t.isRankable,
      M = P === void 0 ? !1 : P,
      q = t.isRankingDisabled,
      B = q === void 0 ? !1 : q,
      V = t.onRankStart,
      J = V === void 0 ? we : V,
      G = t.onRankEnd,
      $ = G === void 0 ? we : G,
      X = t.loadingSpinnerSize,
      N = t.paginationi18n,
      j =
        N === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : N,
      _e = b.useState(!1),
      ae = K(_e, 2),
      se = ae[0],
      le = ae[1],
      ge = b.useRef(null),
      ue = pi({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.5",
      }),
      Ue = pi({
        fn: $,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.5",
      });
    b.useEffect(
      function () {
        (va(o, n), ay(n));
      },
      [o, n],
    );
    var Oe = function (ke) {
        return function () {
          var it = ke.key;
          if (it) {
            if (ue && M && it === o && u === ga) {
              ue({ key: null, sortOrder: null, item: ke });
              return;
            }
            var Vt = it !== o ? vr : ek(u);
            ue && ue({ key: it, item: ke, sortOrder: Vt });
          }
        };
      },
      rt = function (ke, it) {
        O(ke, it);
      },
      pe = function (ke) {
        (le(!0), J(ke));
      },
      $e = function (ke) {
        (le(!1), Ue(ke));
      },
      yr = function () {
        return X || (Yv(a || [], T, y).length > 2 ? _a : Cy);
      },
      At = function () {
        return v ? E.createElement(Dy, { testId: l }) : I && E.createElement(Ty, { testId: l }, I);
      },
      Se = a && a.length,
      Ee,
      Ut = !1;
    (d && Number.isInteger(d) && y && Se && Se <= d
      ? ((Ee = Math.ceil(d / y)), (Ut = !0))
      : (Ee = Se && y ? Math.ceil(Se / y) : 0),
      (Ee = Ee < 1 ? 1 : Ee));
    var vt = T > Ee ? Ee : T,
      nt = !!Se,
      $t = yr(),
      Ve = At();
    return E.createElement(
      E.Fragment,
      null,
      E.createElement(
        up,
        {
          isLoading: v && nt,
          spinnerSize: $t,
          targetRef: function () {
            return ge.current;
          },
          testId: l,
          loadingLabel: s,
        },
        E.createElement(
          Ay,
          { isFixedSize: g, "aria-label": f, hasDataRow: nt, testId: l, isLoading: v },
          !!r && E.createElement(jy, null, r),
          n &&
            E.createElement(QE, {
              head: n,
              onSort: Oe,
              sortKey: o,
              sortOrder: u,
              isRanking: se,
              isRankable: M,
              testId: l,
            }),
          nt &&
            E.createElement(nk, {
              ref: ge,
              highlightedRowIndex: i,
              rows: a,
              head: n,
              sortKey: o,
              sortOrder: u,
              rowsPerPage: y,
              page: vt,
              isFixedSize: g || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: Ut,
              testId: l,
              isRankable: M,
              isRanking: se,
              onRankStart: pe,
              onRankEnd: $e,
              isRankingDisabled: B || v || !1,
            }),
        ),
      ),
      Ee <= 1
        ? null
        : E.createElement(
            Iy,
            { testId: l },
            E.createElement(_1, {
              value: vt,
              onChange: rt,
              total: Ee,
              i18n: j,
              isDisabled: v,
              testId: l,
            }),
          ),
      !nt &&
        Ve &&
        E.createElement(op, { isLoading: v, spinnerSize: _a, testId: l, loadingLabel: s }, Ve),
    );
  },
  rk = b.lazy(function () {
    return ly(
      () => import("./body-DF0sTAq9.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  nk = b.forwardRef(function (t, r) {
    var n = t.isRankable,
      i = n === void 0 ? !1 : n,
      a = t.isRanking,
      o = t.onRankStart,
      u = t.onRankEnd,
      s = t.isRankingDisabled,
      c = ne(t, ZE),
      l = i && !c.sortKey,
      d = b.useState(!1),
      f = K(d, 2),
      h = f[0],
      v = f[1];
    b.useEffect(
      function () {
        l && v(!0);
      },
      [l],
    );
    var p = E.createElement(Yy, te({ ref: r }, c));
    return l && h
      ? E.createElement(
          Xy,
          { fallback: p },
          E.createElement(
            b.Suspense,
            { fallback: p },
            E.createElement(
              rk,
              te({ ref: r }, c, {
                isRanking: a,
                onRankStart: o,
                onRankEnd: u,
                isRankingDisabled: s,
              }),
            ),
          ),
        )
      : p;
  });
function ik(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, bh() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function bh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (bh = function () {
    return !!e;
  })();
}
var Ka = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = ik(this, t, [].concat(i))),
      x(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      x(r, "onSetPageHandler", function (o, u) {
        var s = r.props.onSetPage;
        s && (s(o, u), r.setState({ page: o }));
      }),
      x(r, "onSortHandler", function (o, u) {
        var s = o.key,
          c = o.item,
          l = o.sortOrder,
          d = r.props.onSort;
        d && (d({ key: s, item: c, sortOrder: l }, u), r.setState({ sortKey: s, sortOrder: l }));
      }),
      x(r, "onRankEndIfExistsHandler", function (o) {
        r.props.onRankEnd && r.props.onRankEnd(o);
      }),
      x(r, "onRankEndHandler", function (o) {
        var u = o.destination,
          s = r.state,
          c = s.rows,
          l = s.page,
          d = r.props.rowsPerPage;
        if (!u || !c) {
          r.onRankEndIfExistsHandler(o);
          return;
        }
        var f = sy(o, c, l, d);
        (r.setState({ rows: f }), r.onRankEndIfExistsHandler(o));
      }),
      r
    );
  }
  return (
    qe(t, e),
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
            h = s.loadingSpinnerSize,
            v = s.isLoading,
            p = s.loadingLabel,
            g = s.isFixedSize,
            _ = s.isRankable,
            y = s.isRankingDisabled,
            w = s.rowsPerPage,
            O = s.paginationi18n,
            m = s.onRankStart,
            S = s.onPageRowsUpdate,
            C = s.testId,
            T = s.label;
          return E.createElement(tk, {
            paginationi18n: O,
            caption: c,
            emptyView: l,
            head: d,
            highlightedRowIndex: f,
            loadingSpinnerSize: h,
            isLoading: v,
            loadingLabel: p,
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
            testId: C,
            label: T,
          });
        },
      },
    ])
  );
})(E.Component);
x(Ka, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: we,
  onSort: we,
  rowsPerPage: 1 / 0,
});
const ak = (e, t) => {
    const r = [];
    switch (t) {
      case "SLOW_QUERY": {
        (r.push({ key: "time", content: "Time", isSortable: !0, width: 10 }),
          r.push({ key: "query", content: "QUERY", isSortable: !0, width: 10 }),
          r.push({ key: "queryTime", content: "TIME", isSortable: !0, width: 10 }),
          r.push({ key: "resultRows", content: "ROWS", isSortable: !0, width: 10 }),
          r.push({ key: "plan", content: "PLAN", isSortable: !0, width: 25 }));
        break;
      }
      case "HISTORY": {
        (r.push({
          key: "summaryBeginTime",
          content: "summaryBeginTime",
          isSortable: !0,
          width: 10,
        }),
          r.push({ key: "summaryEndTime", content: "summaryEndTime", isSortable: !0, width: 10 }),
          r.push({ key: "stmtType", content: "stmtType", isSortable: !0, width: 10 }),
          r.push({ key: "digestText", content: "digestText", isSortable: !0, width: 10 }),
          r.push({ key: "tableNames", content: "tableNames", isSortable: !0, width: 10 }),
          r.push({ key: "planHint", content: "planHint", isSortable: !0, width: 10 }),
          r.push({ key: "plan", content: "PLAN", isSortable: !0, width: 25 }));
        break;
      }
      case "PLAN":
        (r.push({ key: "id", content: "Id", isSortable: !0, width: 10 }),
          r.push({ key: "estRows", content: "estRows", isSortable: !0, width: 10 }),
          r.push({ key: "estCost", content: "estCost", isSortable: !0, width: 10 }),
          r.push({ key: "actRows", content: "actRows", isSortable: !0, width: 10 }),
          r.push({ key: "task", content: "task", isSortable: !0, width: 10 }),
          r.push({ key: "accessObject", content: "accessObject", isSortable: !0, width: 10 }),
          r.push({ key: "executionInfo", content: "executionInfo", isSortable: !0, width: 10 }),
          r.push({ key: "operatorInfo", content: "operatorInfo", isSortable: !0, width: 10 }),
          r.push({ key: "memory", content: "memory", isSortable: !0, width: 10 }),
          r.push({ key: "disk", content: "disk", isSortable: !0, width: 10 }));
    }
    return r;
  },
  pu = (e, t) => ({ cells: ak(e, t) }),
  ok = Na(() => {
    const { usersStore: e } = Ba(),
      t = pu(!0, "SLOW_QUERY"),
      r = e.slowQueries;
    return !r || r.length === 0
      ? k.jsx("div", { children: "SlowQuery is EMPTY" })
      : k.jsx("div", {
          children: k.jsxs("div", {
            children: [
              k.jsx(Ka, {
                head: t,
                rows: r.map((n, i) => {
                  const a = [
                    { key: "time", content: n.time },
                    { key: "query", content: n.query },
                    { key: "queryTime", content: n.queryTime },
                    { key: "resultRows", content: n.resultRows },
                    {
                      key: "plan",
                      content: n.parsedPlan
                        ? k.jsx(k.Fragment, {
                            children: k.jsx("button", {
                              onClick: () => {
                                n.parsedPlan &&
                                  (e.showPlan(n.parsedPlan, n.plan), Ks.saveState("PLAN"));
                              },
                              children: "Show Plan",
                            }),
                          })
                        : k.jsx("p", {}),
                    },
                  ];
                  return { key: `row-${i}`, cells: a };
                }),
                rowsPerPage: 10,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: k.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              k.jsx("br", {}),
              k.jsx("br", {}),
            ],
          }),
        });
  }),
  sk = Na(() => {
    const { usersStore: e } = Ba(),
      t = pu(!0, "PLAN"),
      r = e.plan;
    return !r || r.length === 0
      ? k.jsxs("div", { children: ["$", e.planString] })
      : k.jsx("div", {
          children: k.jsxs("div", {
            children: [
              k.jsx(Ka, {
                head: t,
                rows: r.map((n, i) => {
                  const a = [
                    { key: "id", content: n.id },
                    { key: "estRows", content: n.estRows },
                    { key: "estCost", content: n.estCost },
                    { key: "actRows", content: n.actRows },
                    { key: "task", content: n.task },
                    { key: "accessObject", content: n.accessObject },
                    { key: "executionInfo", content: n.executionInfo },
                    { key: "operatorInfo", content: n.operatorInfo },
                    { key: "memory", content: n.memory },
                    { key: "disk", content: n.disk },
                  ];
                  return { key: `row-${i}`, cells: a };
                }),
                rowsPerPage: 200,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: k.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              k.jsx("br", {}),
              k.jsx("br", {}),
            ],
          }),
        });
  }),
  uk = Na(() => {
    const { usersStore: e } = Ba(),
      t = pu(!0, "HISTORY"),
      r = e.history;
    return !r || r.length === 0
      ? k.jsx("div", { children: "Query history is EMPTY" })
      : k.jsx("div", {
          children: k.jsxs("div", {
            children: [
              k.jsx(Ka, {
                head: t,
                rows: r.map((n, i) => {
                  const a = [
                    { key: "summaryBeginTime", content: n.summaryBeginTime },
                    { key: "summaryEndTime", content: n.summaryEndTime },
                    { key: "digestText", content: n.digestText },
                    { key: "stmtType", content: n.stmtType },
                    { key: "tableNames", content: n.tableNames },
                    { key: "planHint", content: n.planHint },
                    {
                      key: "plan",
                      content: n.parsedPlan
                        ? k.jsx(k.Fragment, {
                            children: k.jsx("button", {
                              onClick: () => {
                                n.parsedPlan &&
                                  (e.showPlan(n.parsedPlan, n.plan), Ks.saveState("PLAN"));
                              },
                              children: "Show Plan",
                            }),
                          })
                        : k.jsx("p", {}),
                    },
                  ];
                  return { key: `row-${i}`, cells: a };
                }),
                rowsPerPage: 10,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: k.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              k.jsx("br", {}),
              k.jsx("br", {}),
            ],
          }),
        });
  }),
  We = (e, t) => {
    Ce.showFlag({ id: "error-flag", title: e, type: "error", description: t, isAutoDismiss: !0 });
  };
function ck() {
  const { usersStore: e, stateStore: t } = Ba();
  if (e.isLoading) return "loading....";
  const r = async () => {
      e.loading();
      try {
        const v = await Ce.invoke("explain");
        (e.showPlan(v, "Plan does not exists"), t.saveState("PLAN"));
      } catch (v) {
        (console.error(v), We("explain error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    n = async () => {
      e.loading();
      try {
        const v = await Ce.invoke("explainWith");
        (e.showPlan(v, "Plan does not exists"), t.saveState("PLAN"));
      } catch (v) {
        (console.error(v), We("explain error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    i = async () => {
      e.loading();
      try {
        const v = await Ce.invoke("explainAnalyze");
        (e.showPlan(v, "Plan does not exists"), t.saveState("PLAN"));
      } catch (v) {
        (console.error(v), We("explain analyze error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    a = async () => {
      e.loading();
      try {
        const v = await Ce.invoke("explainAnalyzeWith");
        (e.showPlan(v, "Plan does not exists"), t.saveState("PLAN"));
      } catch (v) {
        (console.error(v), We("explain analyze error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    o = async () => {
      e.loading();
      try {
        await Ce.invoke("executeQuery");
      } catch (v) {
        (console.error(v), We("execute query error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    u = async () => {
      e.loading();
      try {
        await Ce.invoke("executeQueryWith");
      } catch (v) {
        (console.error(v), We("execute query error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    s = async () => {
      e.loading();
      try {
        await Ce.invoke("optimizeQuery");
      } catch (v) {
        (console.error(v), We("Optimize error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    c = async () => {
      e.loading();
      try {
        await Ce.invoke("optimizeQueryCTE");
      } catch (v) {
        (console.error(v), We("Optimize error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    l = async () => {
      e.loading();
      try {
        await Ce.invoke("dropStats");
      } catch (v) {
        (console.error(v), We("dropStats error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    d = async () => {
      e.loading();
      try {
        await Ce.invoke("deOptimizeQuery");
      } catch (v) {
        (console.error(v), We("deoptimize error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    f = async () => {
      e.loading();
      try {
        const v = await Ce.invoke("analyzeQueriesHistory", {
          sql: "select `category`.`id` as `a_category_category_id`, `category`.`name` as `a_category_category_name`, `order_item`.`id` as `a_orderitem_order_item_id`, `order_item`.`product_id` as `a_orderitem_order_item_product_id`, `order_item`.`quantity` as `a_orderitem_order_item_quantity`, `product`.`id` as `a_product_product_id`, `product`.`name` as `a_product_product_name`, `product`.`category_id` as `a_product_product_category_id` from `category` left join `product` on `category`.`id` = `product`.`category_id` inner join `order_item` on `order_item`.`product_id` = `product`.`id`",
        });
        (e.saveHistory(v), t.saveState("HISTORY"));
      } catch (v) {
        (console.error(v), We("History error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    h = async () => {
      e.loading();
      try {
        const v = await Ce.invoke("analyzeSlowQueries");
        (e.saveSlowQuery(v), t.saveState("SLOW_QUERY"));
      } catch (v) {
        (console.error(v), We("Slowquery error", v.message));
      } finally {
        e.stopLoading();
      }
    };
  switch (t.state) {
    case "ROOT":
      return k.jsxs("div", {
        className: "query-analysis-container",
        children: [
          k.jsx("div", { className: "section-spacer" }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Stage 1: Initial Query Analysis" }),
              k.jsx("div", {
                className: "query-example",
                children: k.jsx("pre", {
                  children:
                    "SELECT `category`.`name` AS `a_categoryname_name`, `product`.`name` AS `a_productname_name`, `order_item`.`quantity` AS `a_orderitemquantity_quantity` FROM `order_item` LEFT JOIN `product` ON `order_item`.`product_id` = `product`.`id` LEFT JOIN `category` ON `product`.`category_id` = `category`.`id` ORDER BY `order_item`.`created_at` ASC LIMIT 10 OFFSET 50000;",
                }),
              }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsxs("div", {
                  className: "button-row",
                  children: [
                    k.jsx("button", { onClick: o, children: "1. Execute SQL" }),
                    k.jsx("button", { onClick: r, children: "2. Explain (optional) " }),
                    k.jsx("button", { onClick: i, children: "3. Explain Analyze" }),
                  ],
                }),
              }),
            ],
          }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Stage 2: Adding Indexes — Better but Not Yet Great" }),
              k.jsx("div", {
                className: "query-example",
                children: k.jsx("pre", {
                  children:
                    "SELECT `category`.`name` AS `a_categoryname_name`, `product`.`name` AS `a_productname_name`, `order_item`.`quantity` AS `a_orderitemquantity_quantity` FROM `order_item` LEFT JOIN `product` ON `order_item`.`product_id` = `product`.`id` LEFT JOIN `category` ON `product`.`category_id` = `category`.`id` ORDER BY `order_item`.`created_at` ASC LIMIT 10 OFFSET 50000;",
                }),
              }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsxs("div", {
                  className: "button-row",
                  children: [
                    k.jsx("button", { onClick: s, children: "4. Add optimization indexes" }),
                    k.jsx("button", { onClick: o, children: "5. Execute SQL" }),
                    k.jsx("button", { onClick: r, children: "6. Explain (optional) " }),
                    k.jsx("button", { onClick: i, children: "7. Explain Analyze" }),
                  ],
                }),
              }),
            ],
          }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", {
                children: "Stage 3: Optimizing with WITH Clause — Smarter Pagination",
              }),
              k.jsx("div", {
                className: "query-example",
                children: k.jsx("pre", {
                  children:
                    "WITH withQuery AS ( SELECT id, product_id, product_name, quantity, created_at FROM order_item ORDER BY created_at ASC LIMIT 10 OFFSET 350000 ) SELECT category.name, withQuery.quantity, product.name FROM withQuery LEFT JOIN product ON withQuery.product_id = product.id LEFT JOIN category ON category.id = product.category_id;",
                }),
              }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsxs("div", {
                  className: "button-row",
                  children: [
                    k.jsx("button", { onClick: u, children: "8. Execute CTE" }),
                    k.jsx("button", { onClick: n, children: "9. Explain CTE (optional)" }),
                    k.jsx("button", { onClick: a, children: "10. Explain Analyze CTE" }),
                  ],
                }),
              }),
            ],
          }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Stage 4: Final Optimization — Goodbye Full Table Scans" }),
              k.jsx("div", {
                className: "query-example",
                children: k.jsx("pre", {
                  children:
                    "WITH withQuery AS ( SELECT id, product_id, product_name, quantity, created_at FROM order_item ORDER BY created_at ASC LIMIT 10 OFFSET 350000 ) SELECT category.name, withQuery.quantity, product.name FROM withQuery LEFT JOIN product ON withQuery.product_id = product.id LEFT JOIN category ON category.id = product.category_id;",
                }),
              }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsxs("div", {
                  className: "button-row",
                  children: [
                    k.jsx("button", {
                      onClick: c,
                      children: "9. Add optimization indexes for CTE",
                    }),
                    k.jsx("button", { onClick: u, children: "10. Execute CTE" }),
                    k.jsx("button", { onClick: n, children: "11. Explain CTE (optional)" }),
                    k.jsx("button", { onClick: a, children: "12. Explain Analyze CTE" }),
                  ],
                }),
              }),
            ],
          }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Additional action" }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsxs("div", {
                  className: "button-row",
                  children: [
                    k.jsx("button", { onClick: d, children: "Drop indexes(back to Stage 1)" }),
                    k.jsx("button", { onClick: l, children: "DROP STATS from all tables" }),
                  ],
                }),
              }),
            ],
          }),
          k.jsx("div", { className: "section-spacer" }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Query History Analysis" }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsx("button", { onClick: f, children: "Show Query History" }),
              }),
            ],
          }),
          k.jsx("div", { className: "section-spacer" }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Slow Query Analysis" }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsx("button", { onClick: h, children: "Analyze Slow Queries" }),
              }),
            ],
          }),
        ],
      });
    case "SLOW_QUERY":
      return k.jsxs("div", {
        className: "analysis-results",
        children: [
          k.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState("ROOT"),
            children: "Back to Analysis",
          }),
          k.jsx("div", { className: "results-spacer" }),
          k.jsx(ok, {}),
        ],
      });
    case "HISTORY":
      return k.jsxs("div", {
        className: "analysis-results",
        children: [
          k.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState("ROOT"),
            children: "Back to Analysis",
          }),
          k.jsx("div", { className: "results-spacer" }),
          k.jsx(uk, {}),
        ],
      });
    case "PLAN":
      return k.jsxs("div", {
        className: "analysis-results",
        children: [
          k.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState(t.lastState),
            children: "Back to Analysis",
          }),
          k.jsx("div", { className: "results-spacer" }),
          k.jsx(sk, {}),
        ],
      });
    default:
      return k.jsxs("div", { children: ["ERROR: unsupported state ", t.state] });
  }
}
const lk = Na(ck),
  dk = document.getElementById("root"),
  fk = Sh.createRoot(dk),
  hf = () => {
    fk.render(k.jsx(Gv, { ...Hv, children: k.jsx(lk, {}) }));
  };
Ce.view.theme
  .enable()
  .then(() => {
    hf();
  })
  .catch((e) => {
    (console.error(e.message), hf());
  });
export {
  E as R,
  $y as T,
  qe as _,
  ve as a,
  Es as b,
  fe as c,
  Be as d,
  Y as e,
  K as f,
  x as g,
  ne as h,
  $a as i,
  Te as j,
  te as k,
  Z0 as l,
  Nt as m,
  Pt as n,
  R as o,
  qy as p,
  oy as q,
  b as r,
  Ny as s,
  S1 as w,
};
