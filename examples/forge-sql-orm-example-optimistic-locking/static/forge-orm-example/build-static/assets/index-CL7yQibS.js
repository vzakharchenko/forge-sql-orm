const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-DZ7SWb1z.js",
      "./react-dom-vendor-B_rzBOmK.js",
      "./client-core-vendor-D5B_tUbY.js",
      "./lodash-vendor-htvpa8uV.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as bt, a as Lo, c as rg } from "./react-dom-vendor-B_rzBOmK.js";
import { g as or, a as Ys, r as nr, b as It, s as et } from "./client-core-vendor-D5B_tUbY.js";
import { r as ng } from "./lodash-vendor-htvpa8uV.js";
function ag(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const a in n)
        if (a !== "default" && !(a in e)) {
          const o = Object.getOwnPropertyDescriptor(n, a);
          o && Object.defineProperty(e, a, o.get ? o : { enumerable: !0, get: () => n[a] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) n(a);
  new MutationObserver((a) => {
    for (const o of a)
      if (o.type === "childList")
        for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(a) {
    const o = {};
    return (
      a.integrity && (o.integrity = a.integrity),
      a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : a.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function n(a) {
    if (a.ep) return;
    a.ep = !0;
    const o = r(a);
    fetch(a.href, o);
  }
})();
var di = { exports: {} },
  cn = {};
var Dc;
function og() {
  if (Dc) return cn;
  Dc = 1;
  var e = bt(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(c, s, u) {
    var l,
      d = {},
      f = null,
      p = null;
    (u !== void 0 && (f = "" + u),
      s.key !== void 0 && (f = "" + s.key),
      s.ref !== void 0 && (p = s.ref));
    for (l in s) n.call(s, l) && !o.hasOwnProperty(l) && (d[l] = s[l]);
    if (c && c.defaultProps) for (l in ((s = c.defaultProps), s)) d[l] === void 0 && (d[l] = s[l]);
    return { $$typeof: t, type: c, key: f, ref: p, props: d, _owner: a.current };
  }
  return ((cn.Fragment = r), (cn.jsx = i), (cn.jsxs = i), cn);
}
var Tc;
function ig() {
  return (Tc || ((Tc = 1), (di.exports = og())), di.exports);
}
var E = ig(),
  _ = bt();
const O = or(_),
  Mc = ag({ __proto__: null, default: O }, [_]);
var fi = {},
  bs = function (e, t) {
    return (
      (bs =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      bs(e, t)
    );
  };
function zf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  bs(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var go = function () {
  return (
    (go =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    go.apply(this, arguments)
  );
};
function Uf(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function qf(e, t, r, n) {
  var a = arguments.length,
    o = a < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, r, n);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (i = e[c]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, r, o) : i(t, r)) || o);
  return (a > 3 && o && Object.defineProperty(t, r, o), o);
}
function $f(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function Vf(e, t, r, n, a, o) {
  function i(b) {
    if (b !== void 0 && typeof b != "function") throw new TypeError("Function expected");
    return b;
  }
  for (
    var c = n.kind,
      s = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      u = !t && e ? (n.static ? e : e.prototype) : null,
      l = t || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}),
      d,
      f = !1,
      p = r.length - 1;
    p >= 0;
    p--
  ) {
    var h = {};
    for (var v in n) h[v] = v === "access" ? {} : n[v];
    for (var v in n.access) h.access[v] = n.access[v];
    h.addInitializer = function (b) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(i(b || null));
    };
    var g = (0, r[p])(c === "accessor" ? { get: l.get, set: l.set } : l[s], h);
    if (c === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = i(g.get)) && (l.get = d),
        (d = i(g.set)) && (l.set = d),
        (d = i(g.init)) && a.unshift(d));
    } else (d = i(g)) && (c === "field" ? a.unshift(d) : (l[s] = d));
  }
  (u && Object.defineProperty(u, n.name, l), (f = !0));
}
function Gf(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function Hf(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Kf(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function Wf(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Jf(e, t, r, n) {
  function a(o) {
    return o instanceof r
      ? o
      : new r(function (i) {
          i(o);
        });
  }
  return new (r || (r = Promise))(function (o, i) {
    function c(l) {
      try {
        u(n.next(l));
      } catch (d) {
        i(d);
      }
    }
    function s(l) {
      try {
        u(n.throw(l));
      } catch (d) {
        i(d);
      }
    }
    function u(l) {
      l.done ? o(l.value) : a(l.value).then(c, s);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
function Yf(e, t) {
  var r = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    n,
    a,
    o,
    i = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (i.next = c(0)),
    (i.throw = c(1)),
    (i.return = c(2)),
    typeof Symbol == "function" &&
      (i[Symbol.iterator] = function () {
        return this;
      }),
    i
  );
  function c(u) {
    return function (l) {
      return s([u, l]);
    };
  }
  function s(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; i && ((i = 0), u[0] && (r = 0)), r; )
      try {
        if (
          ((n = 1),
          a &&
            (o =
              u[0] & 2 ? a.return : u[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) &&
            !(o = o.call(a, u[1])).done)
        )
          return o;
        switch (((a = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return (r.label++, { value: u[1], done: !1 });
          case 5:
            (r.label++, (a = u[1]), (u = [0]));
            continue;
          case 7:
            ((u = r.ops.pop()), r.trys.pop());
            continue;
          default:
            if (
              ((o = r.trys), !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              ((r.label = o[1]), (o = u));
              break;
            }
            if (o && r.label < o[2]) {
              ((r.label = o[2]), r.ops.push(u));
              break;
            }
            (o[2] && r.ops.pop(), r.trys.pop());
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        ((u = [6, l]), (a = 0));
      } finally {
        n = o = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var No = Object.create
  ? function (e, t, r, n) {
      n === void 0 && (n = r);
      var a = Object.getOwnPropertyDescriptor(t, r);
      ((!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) &&
        (a = {
          enumerable: !0,
          get: function () {
            return t[r];
          },
        }),
        Object.defineProperty(e, n, a));
    }
  : function (e, t, r, n) {
      (n === void 0 && (n = r), (e[n] = t[r]));
    };
function Xf(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && No(t, e, r);
}
function bo(e) {
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
function Xs(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e),
    a,
    o = [],
    i;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) o.push(a.value);
  } catch (c) {
    i = { error: c };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (i) throw i.error;
    }
  }
  return o;
}
function Zf() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Xs(arguments[t]));
  return e;
}
function Qf() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var o = arguments[t], i = 0, c = o.length; i < c; i++, a++) n[a] = o[i];
  return n;
}
function ev(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function Hr(e) {
  return this instanceof Hr ? ((this.v = e), this) : new Hr(e);
}
function tv(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []),
    a,
    o = [];
  return (
    (a = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    c("next"),
    c("throw"),
    c("return", i),
    (a[Symbol.asyncIterator] = function () {
      return this;
    }),
    a
  );
  function i(p) {
    return function (h) {
      return Promise.resolve(h).then(p, d);
    };
  }
  function c(p, h) {
    n[p] &&
      ((a[p] = function (v) {
        return new Promise(function (g, b) {
          o.push([p, v, g, b]) > 1 || s(p, v);
        });
      }),
      h && (a[p] = h(a[p])));
  }
  function s(p, h) {
    try {
      u(n[p](h));
    } catch (v) {
      f(o[0][3], v);
    }
  }
  function u(p) {
    p.value instanceof Hr ? Promise.resolve(p.value.v).then(l, d) : f(o[0][2], p);
  }
  function l(p) {
    s("next", p);
  }
  function d(p) {
    s("throw", p);
  }
  function f(p, h) {
    (p(h), o.shift(), o.length && s(o[0][0], o[0][1]));
  }
}
function rv(e) {
  var t, r;
  return (
    (t = {}),
    n("next"),
    n("throw", function (a) {
      throw a;
    }),
    n("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function n(a, o) {
    t[a] = e[a]
      ? function (i) {
          return (r = !r) ? { value: Hr(e[a](i)), done: !1 } : o ? o(i) : i;
        }
      : o;
  }
}
function nv(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof bo == "function" ? bo(e) : e[Symbol.iterator]()),
      (r = {}),
      n("next"),
      n("throw"),
      n("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(o) {
    r[o] =
      e[o] &&
      function (i) {
        return new Promise(function (c, s) {
          ((i = e[o](i)), a(c, s, i.done, i.value));
        });
      };
  }
  function a(o, i, c, s) {
    Promise.resolve(s).then(function (u) {
      o({ value: u, done: c });
    }, i);
  }
}
function av(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var sg = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  _s = function (e) {
    return (
      (_s =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      _s(e)
    );
  };
function ov(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = _s(e), n = 0; n < r.length; n++) r[n] !== "default" && No(t, e, r[n]);
  return (sg(t, e), t);
}
function iv(e) {
  return e && e.__esModule ? e : { default: e };
}
function sv(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function cv(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function uv(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function lv(e, t, r) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var n, a;
    if (r) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      n = t[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((n = t[Symbol.dispose]), r && (a = n));
    }
    if (typeof n != "function") throw new TypeError("Object not disposable.");
    (a &&
      (n = function () {
        try {
          a.call(this);
        } catch (o) {
          return Promise.reject(o);
        }
      }),
      e.stack.push({ value: t, dispose: n, async: r }));
  } else r && e.stack.push({ async: !0 });
  return t;
}
var cg =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function dv(e) {
  function t(o) {
    ((e.error = e.hasError ? new cg(o, e.error, "An error was suppressed during disposal.") : o),
      (e.hasError = !0));
  }
  var r,
    n = 0;
  function a() {
    for (; (r = e.stack.pop()); )
      try {
        if (!r.async && n === 1) return ((n = 0), e.stack.push(r), Promise.resolve().then(a));
        if (r.dispose) {
          var o = r.dispose.call(r.value);
          if (r.async)
            return (
              (n |= 2),
              Promise.resolve(o).then(a, function (i) {
                return (t(i), a());
              })
            );
        } else n |= 1;
      } catch (i) {
        t(i);
      }
    if (n === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return a();
}
function fv(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (r, n, a, o, i) {
        return n
          ? t
            ? ".jsx"
            : ".js"
          : a && (!o || !i)
            ? r
            : a + o + "." + i.toLowerCase() + "js";
      })
    : e;
}
const ug = {
    __extends: zf,
    __assign: go,
    __rest: Uf,
    __decorate: qf,
    __param: $f,
    __esDecorate: Vf,
    __runInitializers: Gf,
    __propKey: Hf,
    __setFunctionName: Kf,
    __metadata: Wf,
    __awaiter: Jf,
    __generator: Yf,
    __createBinding: No,
    __exportStar: Xf,
    __values: bo,
    __read: Xs,
    __spread: Zf,
    __spreadArrays: Qf,
    __spreadArray: ev,
    __await: Hr,
    __asyncGenerator: tv,
    __asyncDelegator: rv,
    __asyncValues: nv,
    __makeTemplateObject: av,
    __importStar: ov,
    __importDefault: iv,
    __classPrivateFieldGet: sv,
    __classPrivateFieldSet: cv,
    __classPrivateFieldIn: uv,
    __addDisposableResource: lv,
    __disposeResources: dv,
    __rewriteRelativeImportExtension: fv,
  },
  lg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: lv,
        get __assign() {
          return go;
        },
        __asyncDelegator: rv,
        __asyncGenerator: tv,
        __asyncValues: nv,
        __await: Hr,
        __awaiter: Jf,
        __classPrivateFieldGet: sv,
        __classPrivateFieldIn: uv,
        __classPrivateFieldSet: cv,
        __createBinding: No,
        __decorate: qf,
        __disposeResources: dv,
        __esDecorate: Vf,
        __exportStar: Xf,
        __extends: zf,
        __generator: Yf,
        __importDefault: iv,
        __importStar: ov,
        __makeTemplateObject: av,
        __metadata: Wf,
        __param: $f,
        __propKey: Hf,
        __read: Xs,
        __rest: Uf,
        __rewriteRelativeImportExtension: fv,
        __runInitializers: Gf,
        __setFunctionName: Kf,
        __spread: Zf,
        __spreadArray: ev,
        __spreadArrays: Qf,
        __values: bo,
        default: ug,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Tt = Ys(lg);
var un = {},
  Lc;
function dg() {
  return (
    Lc ||
      ((Lc = 1),
      Object.defineProperty(un, "__esModule", { value: !0 }),
      (un.NavigationTarget = void 0),
      (un.NavigationTarget = {
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
    un
  );
}
var vi = {},
  pi = {},
  ln = {},
  dn = {},
  Nc;
function ye() {
  if (Nc) return dn;
  ((Nc = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((dn.BridgeAPIError = e), dn);
}
var Fc;
function ve() {
  if (Fc) return ln;
  ((Fc = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.getCallBridge = void 0));
  const e = ye();
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
  return ((ln.getCallBridge = r), ln);
}
var fn = {},
  Bc;
function Fo() {
  if (Bc) return fn;
  ((Bc = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.withRateLimiter = void 0));
  const e = ye(),
    t = (r, n, a, o) => {
      let i = Date.now(),
        c = 0;
      return async (...s) => {
        const u = Date.now();
        if ((u - i > a && ((i = u), (c = 0)), c >= n))
          throw new e.BridgeAPIError(o || "Too many invocations.");
        return ((c = c + 1), r(...s));
      };
    };
  return ((fn.withRateLimiter = t), fn);
}
var zc;
function fg() {
  return (
    zc ||
      ((zc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = ve(),
          r = ye(),
          n = Fo(),
          a = (0, t.getCallBridge)(),
          o = (s) => {
            if (s && Object.values(s).some((u) => typeof u == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          i = (s, u) => {
            if (typeof s != "string") throw new r.BridgeAPIError("functionKey must be a string!");
            return (o(u), a("invoke", { functionKey: s, payload: u }));
          };
        e.invoke = (0, n.withRateLimiter)(
          i,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function c() {
          return e.invoke;
        }
        e.makeInvoke = c;
      })(pi)),
    pi
  );
}
var Uc;
function Ta() {
  return (
    Uc ||
      ((Uc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Tt.__exportStar(fg(), e));
      })(vi)),
    vi
  );
}
var hi = {},
  vn = {},
  gi = {},
  qc;
function vv() {
  return (
    qc ||
      ((qc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = ve(),
          r = ye(),
          n = Fo(),
          a = 500,
          o = 25,
          i = 1e3 * o;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, t.getCallBridge)(),
          s = (d) => {
            if (d && Object.values(d).some((f) => typeof f == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          u = (d) => async (f) => {
            s(f);
            const p = { ...f, invokeType: `ui-${d.toLowerCase()}-fetch` },
              h = await c("invoke", p),
              { success: v, payload: g, error: b } = h ?? {},
              m = { ...(v ? g : b) };
            if (m && m.headers)
              for (const w in m.headers)
                Array.isArray(m.headers[w]) && (m.headers[w] = m.headers[w].join(","));
            return m;
          },
          l = (d) => {
            const f = u(d);
            return (0, n.withRateLimiter)(
              f,
              a,
              i,
              `${d} invocation calls are rate limited at ${a}/${o}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(gi)),
    gi
  );
}
var $c;
function vg() {
  if ($c) return vn;
  (($c = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.invokeRemote = void 0));
  const e = vv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((vn.invokeRemote = t), vn);
}
var pn = {},
  Vc;
function pg() {
  if (Vc) return pn;
  ((Vc = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.invokeService = void 0));
  const e = vv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((pn.invokeService = t), pn);
}
var Gc;
function hg() {
  return (
    Gc ||
      ((Gc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Tt;
        (t.__exportStar(vg(), e), t.__exportStar(pg(), e));
      })(hi)),
    hi
  );
}
var bi = {},
  hn = {},
  gn = {},
  Hc;
function gg() {
  if (Hc) return gn;
  ((Hc = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.submit = void 0));
  const e = ve(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((gn.submit = n), gn);
}
var bn = {},
  Kc;
function bg() {
  if (Kc) return bn;
  ((Kc = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.close = void 0));
  const e = ve(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        if ((await r("close", a)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((bn.close = n), bn);
}
var _n = {},
  Wc;
function _g() {
  if (Wc) return _n;
  ((Wc = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.open = void 0));
  const e = ve(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      try {
        if ((await r("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((_n.open = n), _n);
}
var mn = {},
  Jc;
function mg() {
  if (Jc) return mn;
  ((Jc = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.refresh = void 0));
  const e = ve(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((mn.refresh = n), mn);
}
var yn = {},
  Yc;
function yg() {
  if (Yc) return yn;
  ((Yc = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.createHistory = void 0));
  const t = (0, ve().getCallBridge)(),
    r = async () => {
      const n = await t("createHistory");
      return (
        n.listen((a) => {
          n.location = a;
        }),
        n
      );
    };
  return ((yn.createHistory = r), yn);
}
var wn = {},
  _i = {},
  Ft = {},
  Xc;
function pv() {
  return (
    Xc ||
      ((Xc = 1),
      Object.defineProperty(Ft, "__esModule", { value: !0 }),
      (Ft.FORGE_SUPPORTED_LOCALE_CODES =
        Ft.I18N_BUNDLE_FOLDER_NAME =
        Ft.I18N_INFO_FILE_NAME =
          void 0),
      (Ft.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (Ft.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (Ft.FORGE_SUPPORTED_LOCALE_CODES = [
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
    Ft
  );
}
var cr = {},
  Zc;
function wg() {
  if (Zc) return cr;
  ((Zc = 1),
    Object.defineProperty(cr, "__esModule", { value: !0 }),
    (cr.TranslationsGetter = cr.TranslationGetterError = void 0));
  const e = (n, a) => {
    n.includes(a) || n.push(a);
  };
  class t extends Error {
    constructor(a) {
      (super(a), (this.name = "TranslationGetterError"));
    }
  }
  cr.TranslationGetterError = t;
  class r {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(a) {
      this.resourcesAccessor = a;
    }
    async getTranslations(a, o = { fallback: !0 }) {
      const i = await this.getI18nInfoConfig(),
        { fallback: c } = o;
      if (!c) {
        let s;
        return (
          i.locales.includes(a) && (s = await this.getTranslationResource(a)),
          { translations: s ?? null, locale: a }
        );
      }
      for (const s of this.getLocaleLookupOrder(a, i)) {
        const u = await this.getTranslationResource(s);
        if (u) return { translations: u, locale: s };
      }
      return { translations: null, locale: a };
    }
    async getTranslationsByLocaleLookupOrder(a) {
      const o = await this.getI18nInfoConfig(),
        i = this.getLocaleLookupOrder(a, o);
      return await Promise.all(
        i.map(async (c) => {
          const s = await this.getTranslationResource(c);
          return { locale: c, translations: s };
        }),
      );
    }
    reset() {
      ((this.i18nInfoConfig = null), this.translationResources.clear());
    }
    async getTranslationResource(a) {
      let o = this.translationResources.get(a);
      if (!o)
        try {
          ((o = await this.resourcesAccessor.getTranslationResource(a)),
            this.translationResources.set(a, o));
        } catch (i) {
          throw i instanceof t ? i : new t(`Failed to get translation resource for locale: ${a}`);
        }
      return o;
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
    getLocaleLookupOrder(a, o) {
      const { locales: i, fallback: c } = o,
        s = [a],
        u = c[a];
      return (
        u && Array.isArray(u) && u.length > 0 && s.push(...u),
        e(s, o.fallback.default),
        s.filter((l) => i.includes(l))
      );
    }
  }
  return ((cr.TranslationsGetter = r), cr);
}
var kn = {},
  mi = {},
  Qc;
function hv() {
  return (
    Qc ||
      ((Qc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = Tt.__importDefault(ng()),
          n = (o, i, c) => {
            const s = o[c];
            return s ? (0, e.getTranslationValueFromContent)(s, i) : null;
          };
        e.getTranslationValue = n;
        const a = (o, i) => {
          let c = o[i];
          if (!c) {
            const s = i.split(".");
            s.length > 1 && (c = (0, r.default)(o, s, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = a;
      })(mi)),
    mi
  );
}
var eu;
function kg() {
  if (eu) return kn;
  ((eu = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.Translator = void 0));
  const e = hv();
  class t {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(n, a) {
      ((this.locale = n), (this.translationsGetter = a));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(n) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let a = this.cache.get(n);
      if (a === void 0) {
        for (const { translations: o } of this.localeLookupOrderedTranslations) {
          const i = (0, e.getTranslationValueFromContent)(o, n);
          if (i !== null) {
            a = i;
            break;
          }
        }
        ((a = a ?? null), this.cache.set(n, a));
      }
      return a;
    }
  }
  return ((kn.Translator = t), kn);
}
var On = {},
  tu;
function Og() {
  if (tu) return On;
  ((tu = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.ensureLocale = void 0));
  const e = pv(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    r = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    n = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (o, i) => {
        const [c] = i.split("-");
        return (o[c] || (o[c] = i), o);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    a = (o) => {
      const i = o.replace("_", "-");
      return t.has(i) ? i : (n[i] ?? r[i] ?? null);
    };
  return ((On.ensureLocale = a), On);
}
var yi = {},
  ru;
function Sg() {
  return (
    ru ||
      ((ru = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (u) => typeof u == "object" && u !== null && !Array.isArray(u),
          r = (u) => typeof u?.i18n == "string",
          n = (u) => u.startsWith("connect-"),
          a = (u) => u.startsWith("core:"),
          o = (u) => {
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
                          ? v.flatMap((b) => d(b, g))
                          : d(v, g);
                    }));
            return d(u, []);
          },
          i = (u) =>
            Object.entries(u).flatMap(([l, d]) =>
              !n(l) && !a(l) && d && Array.isArray(d) && d.length > 0 ? d.map((f) => [f, l]) : [],
            );
        e.getI18nSupportedModuleEntries = i;
        const c = (u) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(u)) {
            const f = o(d[0]);
            for (const { key: p } of f) l.add(p);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = c;
        const s = (u) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(u)) {
            const f = o(d[0]);
            for (const p of f) l.push({ moduleName: d[1], ...p });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = s;
      })(yi)),
    yi
  );
}
var wi = {},
  nu;
function Eg() {
  return (nu || ((nu = 1), Object.defineProperty(wi, "__esModule", { value: !0 })), wi);
}
var au;
function gv() {
  return (
    au ||
      ((au = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = Tt;
        (t.__exportStar(pv(), e),
          t.__exportStar(wg(), e),
          t.__exportStar(kg(), e),
          t.__exportStar(Og(), e));
        var r = hv();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Sg();
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
          t.__exportStar(Eg(), e));
      })(_i)),
    _i
  );
}
var ou;
function xg() {
  if (ou) return wn;
  ((ou = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.getContext = void 0));
  const e = ve(),
    t = gv(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const o = await r("getContext"),
        i = o?.locale;
      return (i && (o.locale = (a = (0, t.ensureLocale)(i)) !== null && a !== void 0 ? a : i), o);
    };
  return ((wn.getContext = n), wn);
}
var Sn = {},
  iu;
function Cg() {
  if (iu) return Sn;
  ((iu = 1),
    Object.defineProperty(Sn, "__esModule", { value: !0 }),
    (Sn.changeWindowTitle = void 0));
  const e = ve(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        await r("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((Sn.changeWindowTitle = n), Sn);
}
var En = {},
  su;
function Pg() {
  if (su) return En;
  ((su = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.theme = void 0));
  const t = (0, ve().getCallBridge)();
  return ((En.theme = { enable: () => t("enableTheming") }), En);
}
var xn = {},
  Cn = {},
  ki = {},
  ur = {},
  cu;
function bv() {
  if (cu) return ur;
  ((cu = 1),
    Object.defineProperty(ur, "__esModule", { value: !0 }),
    (ur.blobToBase64 = ur.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      o = atob(a),
      i = new Array(o.length);
    for (let s = 0; s < o.length; s++) i[s] = o.charCodeAt(s);
    const c = new Uint8Array(i);
    return new Blob([c], { type: n });
  };
  ur.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, a) => {
      const o = new FileReader();
      ((o.onloadend = () => {
        n(o.result);
      }),
        (o.onerror = a),
        o.readAsDataURL(r));
    });
  return ((ur.blobToBase64 = t), ur);
}
var uu;
function Rg() {
  return (
    uu ||
      ((uu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = bv(),
          r = (u) => {
            if (
              typeof u != "object" ||
              u === null ||
              Object.prototype.toString.call(u) !== "[object Object]"
            )
              return !1;
            const l = Object.getPrototypeOf(u);
            if (l === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(l, "constructor") && l.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(u)
            );
          },
          n = async (u) => ({ data: await (0, t.blobToBase64)(u), type: u.type }),
          a = (u) => (0, t.base64ToBlob)(u.data, u.type),
          o = async (u) => {
            if (u instanceof Blob) return { ...(await n(u)), __isBlobData: !0 };
            if (Array.isArray(u))
              return Promise.all(u.map((l) => (0, e.serialiseBlobsInPayload)(l)));
            if (u && r(u)) {
              const l = await Promise.all(
                Object.entries(u).map(async ([d, f]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(f),
                ]),
              );
              return Object.fromEntries(l);
            }
            return u;
          };
        e.serialiseBlobsInPayload = o;
        const i = (u) => {
          if (u && r(u) && "__isBlobData" in u) {
            const l = u;
            return a({ data: l.data, type: l.type });
          }
          if (Array.isArray(u)) return u.map((l) => (0, e.deserialiseBlobsInPayload)(l));
          if (u && r(u)) {
            const l = {};
            for (const [d, f] of Object.entries(u)) l[d] = (0, e.deserialiseBlobsInPayload)(f);
            return l;
          }
          return u;
        };
        e.deserialiseBlobsInPayload = i;
        const c = (u) =>
          u instanceof Blob
            ? !0
            : Array.isArray(u)
              ? u.some((l) => (0, e.containsBlobs)(l))
              : u && r(u)
                ? Object.values(u).some((l) => (0, e.containsBlobs)(l))
                : !1;
        e.containsBlobs = c;
        const s = (u) =>
          u && r(u) && "__isBlobData" in u
            ? !0
            : Array.isArray(u)
              ? u.some((l) => (0, e.containsSerialisedBlobs)(l))
              : u && r(u)
                ? Object.values(u).some((l) => (0, e.containsSerialisedBlobs)(l))
                : !1;
        e.containsSerialisedBlobs = s;
      })(ki)),
    ki
  );
}
var lu;
function _v() {
  if (lu) return Cn;
  ((lu = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.events = void 0));
  const e = ve(),
    t = Rg(),
    r = (0, e.getCallBridge)(),
    n = async (o, i) => {
      let c = i;
      return (
        (0, t.containsBlobs)(i) && (c = await (0, t.serialiseBlobsInPayload)(i)),
        r("emit", { event: o, payload: c })
      );
    },
    a = (o, i) =>
      r("on", {
        event: o,
        callback: (s) => {
          let u = s;
          return (
            (0, t.containsSerialisedBlobs)(s) && (u = (0, t.deserialiseBlobsInPayload)(s)),
            i(u)
          );
        },
      });
  return ((Cn.events = { emit: n, on: a }), Cn);
}
var du;
function Ag() {
  if (du) return xn;
  ((du = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.emitReadyEvent = void 0));
  const e = _v(),
    t = mv(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return ((xn.emitReadyEvent = n), xn);
}
var fu;
function mv() {
  if (fu) return hn;
  ((fu = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.view = void 0));
  const e = gg(),
    t = bg(),
    r = _g(),
    n = mg(),
    a = yg(),
    o = xg(),
    i = Cg(),
    c = Pg(),
    s = Ag();
  return (
    (hn.view = {
      submit: e.submit,
      close: t.close,
      open: r.open,
      refresh: n.refresh,
      createHistory: a.createHistory,
      getContext: o.getContext,
      theme: c.theme,
      changeWindowTitle: i.changeWindowTitle,
      emitReadyEvent: s.emitReadyEvent,
    }),
    hn
  );
}
var vu;
function Zs() {
  return (
    vu ||
      ((vu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Tt.__exportStar(mv(), e));
      })(bi)),
    bi
  );
}
var Oi = {},
  Pn = {},
  pu;
function Ig() {
  if (pu) return Pn;
  ((pu = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.router = void 0));
  const t = (0, ve().getCallBridge)(),
    r = async (i) => {
      if (!i?.target) throw new Error("target is required for getUrl");
      const c = await t("getUrl", i);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (s) {
        throw new Error(`Failed to parse URL: ${c} (${s})`);
      }
    },
    n = (i) => {
      if (typeof i == "string") return t("navigate", { url: i, type: "same-tab" });
      if (!i?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...i, type: "same-tab" });
    },
    a = (i) => {
      if (typeof i == "string") return t("navigate", { url: i, type: "new-tab" });
      if (!i?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...i, type: "new-tab" });
    },
    o = async () => t("reload");
  return ((Pn.router = { getUrl: r, navigate: n, open: a, reload: o }), Pn);
}
var hu;
function jg() {
  return (
    hu ||
      ((hu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Tt.__exportStar(Ig(), e));
      })(Oi)),
    Oi
  );
}
var Si = {},
  Rn = {},
  gu;
function Dg() {
  if (gu) return Rn;
  ((gu = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.Modal = void 0));
  const e = ve(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = () => {};
  class a {
    constructor(i) {
      var c, s;
      ((this.resource = i?.resource || null),
        (this.onClose = i?.onClose || n),
        (this.size = i?.size || "medium"),
        (this.context = i?.context || {}),
        (this.closeOnEscape = (c = i?.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick =
          (s = i?.closeOnOverlayClick) !== null && s !== void 0 ? s : !0));
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
  return ((Rn.Modal = a), Rn);
}
var bu;
function Tg() {
  return (
    bu ||
      ((bu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Tt.__exportStar(Dg(), e));
      })(Si)),
    Si
  );
}
var Bt = {},
  An = {},
  _u;
function Mg() {
  if (_u) return An;
  ((_u = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.productFetchApi = void 0));
  const e = bv(),
    t = async (o) => {
      const i = {};
      for (const [c, s] of o.entries())
        if (c === "file") {
          const u = s.name,
            l = s.type;
          ((i.file = await (0, e.blobToBase64)(s)), (i.__fileName = u), (i.__fileType = l));
        } else i[c] = s;
      return JSON.stringify(i);
    },
    r = (o) => {
      if (!o) return o;
      if ("signal" in o) {
        const { signal: i, ...c } = o;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          c
        );
      }
      return o;
    },
    n = async (o) => {
      const i = o?.body instanceof FormData,
        c = i ? await t(o?.body) : o?.body,
        s = new Request("", { body: c, method: o?.method, headers: o?.headers }),
        u = Object.fromEntries(s.headers.entries());
      return {
        body: s.method !== "GET" ? await s.text() : null,
        headers: new Headers(u),
        isMultipartFormData: i,
      };
    },
    a = (o) => {
      const i = async (c, s, u) => {
        const l = r(u),
          { body: d, headers: f, isMultipartFormData: p } = await n(l);
        f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
        const h = {
            product: c,
            restPath: s,
            fetchRequestInit: { ...l, body: d, headers: [...f.entries()] },
            isMultipartFormData: p,
          },
          {
            body: v,
            headers: g,
            statusText: b,
            status: m,
            isAttachment: w,
          } = await o("fetchProduct", h),
          k = w ? (0, e.base64ToBlob)(v, g["content-type"]) : v;
        return new Response(k || null, { headers: g, status: m, statusText: b });
      };
      return {
        requestConfluence: (c, s) => i("confluence", c, s),
        requestJira: (c, s) => i("jira", c, s),
        requestBitbucket: (c, s) => i("bitbucket", c, s),
      };
    };
  return ((An.productFetchApi = a), An);
}
var mu;
function Lg() {
  if (mu) return Bt;
  mu = 1;
  var e;
  (Object.defineProperty(Bt, "__esModule", { value: !0 }),
    (Bt.requestBitbucket = Bt.requestJira = Bt.requestConfluence = void 0));
  const t = ve();
  return (
    (e = (0, Mg().productFetchApi)((0, t.getCallBridge)())),
    (Bt.requestConfluence = e.requestConfluence),
    (Bt.requestJira = e.requestJira),
    (Bt.requestBitbucket = e.requestBitbucket),
    Bt
  );
}
var Ei = {},
  In = {},
  yu;
function Ng() {
  if (yu) return In;
  ((yu = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.showFlag = void 0));
  const e = ve(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var o;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const i = r("showFlag", { ...a, type: (o = a.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await i, r("closeFlag", { id: a.id })) };
    };
  return ((In.showFlag = n), In);
}
var wu;
function Fg() {
  return (
    wu ||
      ((wu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = Ng();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(Ei)),
    Ei
  );
}
var xi = {},
  ku;
function Bg() {
  return (
    ku ||
      ((ku = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Tt.__exportStar(_v(), e));
      })(xi)),
    xi
  );
}
var Ci = {},
  jn = {},
  Ou;
function zg() {
  if (Ou) return jn;
  ((Ou = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.realtime = void 0));
  const t = (0, ve().getCallBridge)(),
    r = (i, c, s) => t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s }),
    n = (i, c, s) => t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s }),
    a = (i, c, s) =>
      t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s, isGlobal: !0 }),
    o = (i, c, s) =>
      t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s, isGlobal: !0 });
  return ((jn.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: o }), jn);
}
var Pi = {},
  Su;
function Ug() {
  return (
    Su ||
      ((Su = 1),
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
      })(Pi)),
    Pi
  );
}
var Eu;
function qg() {
  return (
    Eu ||
      ((Eu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = zg();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = Ug();
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
      })(Ci)),
    Ci
  );
}
var zt = {},
  xu;
function $g() {
  if (xu) return zt;
  ((xu = 1),
    Object.defineProperty(zt, "__esModule", { value: !0 }),
    (zt.createTranslationFunction = zt.getTranslations = zt.resetTranslationsCache = void 0));
  const e = gv(),
    t = Zs(),
    r = {
      getI18nInfoConfig: async () => {
        const c = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!c.ok) throw new Error("Failed to get i18n info config: " + c.statusText);
        return (await c.json()).config;
      },
      getTranslationResource: async (c) => {
        const s = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${c}.json`);
        if (!s.ok) throw new Error(`Failed to get translation resource for locale: ${c}`);
        return s.json();
      },
    },
    n = new e.TranslationsGetter(r),
    a = () => {
      n.reset();
    };
  zt.resetTranslationsCache = a;
  const o = async (c = null, s = { fallback: !0 }) => {
    let u = c;
    return (u || (u = (await t.view.getContext()).locale), await n.getTranslations(u, s));
  };
  zt.getTranslations = o;
  const i = async (c = null) => {
    let s = c;
    s || (s = (await t.view.getContext()).locale);
    const u = new e.Translator(s, n);
    return (
      await u.init(),
      (l, d) => {
        var f, p;
        return (p = (f = u.translate(l)) !== null && f !== void 0 ? f : d) !== null && p !== void 0
          ? p
          : l;
      }
    );
  };
  return ((zt.createTranslationFunction = i), zt);
}
var Ri = {},
  Ai = {},
  Ii = {},
  Dn = {},
  Tn = {},
  Cu;
function yv() {
  return (
    Cu ||
      ((Cu = 1),
      Object.defineProperty(Tn, "__esModule", { value: !0 }),
      (Tn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Tn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Tn
  );
}
var Pu;
function Bo() {
  if (Pu) return Dn;
  ((Pu = 1),
    Object.defineProperty(Dn, "__esModule", { value: !0 }),
    (Dn.checkRestrictedEnvironment = void 0));
  const e = ye(),
    t = Zs(),
    r = yv(),
    n = async () => {
      const { environmentType: a } = await t.view.getContext();
      if (a === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Dn.checkRestrictedEnvironment = n), Dn);
}
var Ru;
function Vg() {
  return (
    Ru ||
      ((Ru = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = Ta(),
          r = ye(),
          n = Bo(),
          o = (0, ve().getCallBridge)(),
          i = (l, d) => {
            const f = atob(l),
              p = new Array(f.length);
            for (let v = 0; v < f.length; v++) p[v] = f.charCodeAt(v);
            const h = new Uint8Array(p);
            return new Blob([h], { type: d || "application/octet-stream" });
          },
          c = async (l) => {
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
            const f = d.map((m, w) => {
                if (m instanceof Blob) return m;
                if (!(m && typeof m == "object" && "data" in m && typeof m.data == "string"))
                  throw new r.BridgeAPIError(
                    `Invalid object type at index ${w}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return i(m.data, m.mimeType);
                } catch {
                  throw new r.BridgeAPIError(
                    `Invalid base64 data at index ${w}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              p = await Promise.all(f.map((m) => c(m))),
              h = await (0, t.invoke)(l, { allObjectMetadata: p });
            if (!h || typeof h != "object")
              throw new r.BridgeAPIError("Invalid response from functionKey");
            const v = new Map(),
              g = new Map();
            return (
              f.forEach((m, w) => {
                const k = p[w];
                (v.set(k.checksum, m), g.set(k.checksum, w));
              }),
              Object.entries(h).map(([m, w]) => {
                const { key: k, checksum: y } = w,
                  S = v.get(y),
                  x = g.get(y);
                return x === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: k,
                        error: `Index not found for checksum ${y}`,
                      }),
                      index: -1,
                    }
                  : S
                    ? {
                        promise: (async () => {
                          try {
                            const j = await fetch(m, {
                              method: "PUT",
                              body: S,
                              headers: {
                                "Content-Type": S.type || "application/octet-stream",
                                "Content-Length": S.size.toString(),
                              },
                            });
                            return {
                              success: j.ok,
                              key: k,
                              status: j.status,
                              error: j.ok ? void 0 : `Upload failed with status ${j.status}`,
                            };
                          } catch (j) {
                            return {
                              success: !1,
                              key: k,
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
                          key: k,
                          error: `Blob not found for checksum ${y}`,
                        }),
                        index: x,
                      };
              })
            );
          };
        e.createUploadPromises = s;
        const u = async ({ functionKey: l, objects: d }) => {
          (await (0, n.checkRestrictedEnvironment)(),
            o("trackObjectStoreAction", { action: "upload" }));
          const f = await (0, e.createUploadPromises)({ functionKey: l, objects: d });
          return await Promise.all(f.map((h) => h.promise));
        };
        e.upload = u;
      })(Ii)),
    Ii
  );
}
var Mn = {},
  Au;
function Gg() {
  if (Au) return Mn;
  ((Au = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.deleteObjects = void 0));
  const e = Ta(),
    t = ye(),
    r = Bo(),
    a = (0, ve().getCallBridge)(),
    o = async ({ functionKey: i, keys: c }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        a("trackObjectStoreAction", { action: "delete" }),
        !i || i.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to delete objects");
      if (!Array.isArray(c) || c.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      await Promise.all(
        c.map(async (s) => {
          await (0, e.invoke)(i, { key: s });
        }),
      );
    };
  return ((Mn.deleteObjects = o), Mn);
}
var Ln = {},
  Iu;
function Hg() {
  if (Iu) return Ln;
  ((Iu = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.download = void 0));
  const e = Ta(),
    t = ye(),
    r = Bo(),
    a = (0, ve().getCallBridge)(),
    o = async ({ functionKey: i, keys: c }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        a("trackObjectStoreAction", { action: "download" }),
        !i || i.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(c) || c.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      const s = await (0, e.invoke)(i, { keys: c });
      if (!s || typeof s != "object")
        throw new t.BridgeAPIError("Invalid response from functionKey");
      const u = Object.entries(s).map(async ([d, f]) => {
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
      return await Promise.all(u);
    };
  return ((Ln.download = o), Ln);
}
var Nn = {},
  ju;
function Kg() {
  if (ju) return Nn;
  ((ju = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.getMetadata = void 0));
  const e = Ta(),
    t = ye(),
    r = Bo(),
    a = (0, ve().getCallBridge)(),
    o = async ({ functionKey: i, keys: c }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        a("trackObjectStoreAction", { action: "getMetadata" }),
        !i || i.length === 0)
      )
        throw new t.BridgeAPIError(
          "functionKey is required to filter and generate object metadata",
        );
      if (!Array.isArray(c) || c.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      return await Promise.all(
        c.map(async (u) => {
          const l = await (0, e.invoke)(i, { key: u });
          return !l || typeof l != "object"
            ? { key: u, error: "Invalid response from functionKey" }
            : l;
        }),
      );
    };
  return ((Nn.getMetadata = o), Nn);
}
var Du;
function Wg() {
  return (
    Du ||
      ((Du = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = Vg();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = Gg(),
          n = Hg(),
          a = Kg();
        e.objectStore = {
          upload: t.upload,
          download: n.download,
          getMetadata: a.getMetadata,
          delete: r.deleteObjects,
        };
      })(Ai)),
    Ai
  );
}
var Tu;
function Jg() {
  return (
    Tu ||
      ((Tu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Tt;
        (t.__exportStar(Wg(), e), t.__exportStar(yv(), e));
      })(Ri)),
    Ri
  );
}
var ji = {},
  Fn = {},
  lr = {},
  Ar = {},
  Ga = {},
  Mu;
function Yg() {
  if (Mu) return Ga;
  ((Mu = 1), Object.defineProperty(Ga, "__esModule", { value: !0 }));
  const e = nr();
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
    setValues(n, a) {
      var o;
      if (!n) return !1;
      const i = (0, e._typedJsonParse)(n.data, "has_updates", "EvaluationResponse");
      return i == null
        ? !1
        : ((this._source = n.source),
          i?.has_updates !== !0 ||
            ((this._rawValues = n.data),
            (this._lcut = i.time),
            (this._receivedAt = n.receivedAt),
            (this._values = i),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(n.source, i)),
            n.source && i.user && this._setWarningState(a, i),
            e.SDKFlags.setFlags(this._sdkKey, (o = i.sdk_flags) !== null && o !== void 0 ? o : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(n) {
      var a;
      return this._getDetailedStoreResult(
        (a = this._values) === null || a === void 0 ? void 0 : a.feature_gates,
        n,
      );
    }
    getConfig(n) {
      var a;
      return this._getDetailedStoreResult(
        (a = this._values) === null || a === void 0 ? void 0 : a.dynamic_configs,
        n,
      );
    }
    getLayer(n) {
      var a;
      return this._getDetailedStoreResult(
        (a = this._values) === null || a === void 0 ? void 0 : a.layer_configs,
        n,
      );
    }
    getParamStore(n) {
      var a;
      return this._getDetailedStoreResult(
        (a = this._values) === null || a === void 0 ? void 0 : a.param_stores,
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
    _extractBootstrapMetadata(n, a) {
      if (n !== "Bootstrap") return null;
      const o = {};
      return (
        a.user && (o.user = a.user),
        a.sdkInfo && (o.generatorSDKInfo = a.sdkInfo),
        (o.lcut = a.time),
        o
      );
    }
    _getDetailedStoreResult(n, a) {
      let o = null;
      return (
        n && (o = n[a] ? n[a] : n[(0, e._DJB2)(a)]),
        { result: o, details: this._getDetails(o == null) }
      );
    }
    _setWarningState(n, a) {
      var o, i;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((o = n.customIDs) === null || o === void 0 ? void 0 : o.stableID) !== c &&
        ((!((i = n.customIDs) === null || i === void 0) && i.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in a) {
        const s = a.user;
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
      var a, o;
      const i = this.getCurrentSourceDetails();
      let c = i.reason;
      const s = (a = i.warnings) !== null && a !== void 0 ? a : [];
      (this._source === "Bootstrap" && s.length > 0 && (c = c + s[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${n ? "Unrecognized" : "Recognized"}`));
      const u =
        this._source === "Bootstrap" && (o = this._bootstrapMetadata) !== null && o !== void 0
          ? o
          : void 0;
      return (u && (i.bootstrapMetadata = u), Object.assign(Object.assign({}, i), { reason: c }));
    }
  }
  return ((Ga.default = t), Ga);
}
var Ir = {},
  Bn = {},
  Lu;
function Xg() {
  if (Lu) return Bn;
  ((Lu = 1),
    Object.defineProperty(Bn, "__esModule", { value: !0 }),
    (Bn._resolveDeltasResponse = void 0));
  const e = nr(),
    t = 2;
  function r(i, c) {
    const s = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const u = n(i, s),
      l = a(u),
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
  Bn._resolveDeltasResponse = r;
  function n(i, c) {
    return Object.assign(Object.assign(Object.assign({}, i), c), {
      feature_gates: Object.assign(Object.assign({}, i.feature_gates), c.feature_gates),
      layer_configs: Object.assign(Object.assign({}, i.layer_configs), c.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, i.dynamic_configs), c.dynamic_configs),
    });
  }
  function a(i) {
    const c = i;
    return (
      o(i.deleted_gates, c.feature_gates),
      delete c.deleted_gates,
      o(i.deleted_configs, c.dynamic_configs),
      delete c.deleted_configs,
      o(i.deleted_layers, c.layer_configs),
      delete c.deleted_layers,
      c
    );
  }
  function o(i, c) {
    i?.forEach((s) => {
      delete c[s];
    });
  }
  return Bn;
}
var Nu;
function wv() {
  if (Nu) return Ir;
  Nu = 1;
  var e =
    (Ir && Ir.__awaiter) ||
    function (a, o, i, c) {
      function s(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(h) {
          try {
            p(c.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(c.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? u(h.value) : s(h.value).then(d, f);
        }
        p((c = c.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(Ir, "__esModule", { value: !0 });
  const t = nr(),
    r = Xg();
  class n extends t.NetworkCore {
    constructor(o, i) {
      super(o, i);
      const c = o?.networkConfig;
      ((this._option = o),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          c?.initializeUrl,
          c?.api,
          c?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(o, i, c, s, u) {
      return e(this, void 0, void 0, function* () {
        var l, d, f, p, h, v;
        const g = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
        let b = {
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
          const m =
            g?.hash_used !==
            ((v =
              (h = (p = this._option) === null || p === void 0 ? void 0 : p.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && v !== void 0
              ? v
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: u && !m ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && u ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: m ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(o, g, b, c);
      });
    }
    _fetchEvaluations(o, i, c, s) {
      return e(this, void 0, void 0, function* () {
        var u, l;
        const d = yield this.post({
          sdkKey: o,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: s,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (u = d?.body) !== null && u !== void 0 ? u : null;
        if (
          i?.has_updates !== !0 ||
          ((l = d.body) === null || l === void 0 ? void 0 : l.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const f = (0, r._resolveDeltasResponse)(i, d.body);
        return typeof f == "string"
          ? f
          : this._fetchEvaluations(
              o,
              i,
              Object.assign(Object.assign(Object.assign({}, c), f), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((Ir.default = n), Ir);
}
var zn = {},
  Fu;
function Zg() {
  if (Fu) return zn;
  ((Fu = 1),
    Object.defineProperty(zn, "__esModule", { value: !0 }),
    (zn._makeParamStoreGetter = void 0));
  const e = nr(),
    t = { disableExposureLog: !0 };
  function r(l) {
    return l == null || l.disableExposureLog === !1;
  }
  function n(l, d) {
    return d != null && !(0, e._isTypeMatch)(l, d);
  }
  function a(l, d) {
    return l.value;
  }
  function o(l, d, f) {
    return l.getFeatureGate(d.gate_name, r(f) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function i(l, d, f, p) {
    const v = l.getDynamicConfig(d.config_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function c(l, d, f, p) {
    const v = l.getExperiment(d.experiment_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function s(l, d, f, p) {
    const v = l.getLayer(d.layer_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function u(l, d, f) {
    return (p, h) => {
      if (d == null) return h;
      const v = d[p];
      if (v == null || (h != null && (0, e._typeOf)(h) !== v.param_type)) return h;
      switch (v.ref_type) {
        case "static":
          return a(v);
        case "gate":
          return o(l, v, f);
        case "dynamic_config":
          return i(l, v, h, f);
        case "experiment":
          return c(l, v, h, f);
        case "layer":
          return s(l, v, h, f);
        default:
          return h;
      }
    };
  }
  return ((zn._makeParamStoreGetter = u), zn);
}
var dr = {},
  Bu;
function Qg() {
  if (Bu) return dr;
  Bu = 1;
  var e =
    (dr && dr.__awaiter) ||
    function (a, o, i, c) {
      function s(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(h) {
          try {
            p(c.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(c.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? u(h.value) : s(h.value).then(d, f);
        }
        p((c = c.apply(a, o || [])).next());
      });
    };
  (Object.defineProperty(dr, "__esModule", { value: !0 }),
    (dr.StatsigEvaluationsDataAdapter = void 0));
  const t = nr(),
    r = wv();
  class n extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(o, i, c) {
      (super.attach(o, i, c),
        c !== null && c instanceof r.default
          ? (this._network = c)
          : (this._network = new r.default(i ?? {})));
    }
    getDataAsync(o, i, c) {
      return this._getDataAsyncImpl(o, (0, t._normalizeUser)(i, this._options), c);
    }
    prefetchData(o, i) {
      return this._prefetchDataImpl(o, i);
    }
    setData(o) {
      const i = (0, t._typedJsonParse)(o, "has_updates", "data");
      i && "user" in i
        ? super.setData(o, i.user)
        : t.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(o, i) {
      super.setData(o, i);
    }
    _fetchFromNetwork(o, i, c, s) {
      return e(this, void 0, void 0, function* () {
        var u;
        const l = yield (u = this._network) === null || u === void 0
          ? void 0
          : u.fetchEvaluations(this._getSdkKey(), o, c?.priority, i, s);
        return l ?? null;
      });
    }
    _getCacheKey(o) {
      var i;
      const c = (0, t._getStorageKey)(
        this._getSdkKey(),
        o,
        (i = this._options) === null || i === void 0 ? void 0 : i.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${c}`;
    }
    _isCachedResultValidFor204(o, i) {
      return o.fullUserHash != null && o.fullUserHash === (0, t._getFullUserHash)(i);
    }
  }
  return ((dr.StatsigEvaluationsDataAdapter = n), dr);
}
var zu;
function eb() {
  if (zu) return Ar;
  zu = 1;
  var e =
    (Ar && Ar.__awaiter) ||
    function (c, s, u, l) {
      function d(f) {
        return f instanceof u
          ? f
          : new u(function (p) {
              p(f);
            });
      }
      return new (u || (u = Promise))(function (f, p) {
        function h(b) {
          try {
            g(l.next(b));
          } catch (m) {
            p(m);
          }
        }
        function v(b) {
          try {
            g(l.throw(b));
          } catch (m) {
            p(m);
          }
        }
        function g(b) {
          b.done ? f(b.value) : d(b.value).then(h, v);
        }
        g((l = l.apply(c, s || [])).next());
      });
    };
  Object.defineProperty(Ar, "__esModule", { value: !0 });
  const t = nr(),
    r = Yg(),
    n = wv(),
    a = Zg(),
    o = Qg();
  class i extends t.StatsigClientBase {
    static instance(s) {
      const u = (0, t._getStatsigGlobal)().instance(s);
      return u instanceof i
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new i(s ?? "", {}));
    }
    constructor(s, u, l = null) {
      var d, f;
      t.SDKType._setClientType(s, "javascript-client");
      const p = new n.default(l, (v) => {
        this.$emt(v);
      });
      (super(
        s,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new o.StatsigEvaluationsDataAdapter(),
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
        (this._user = this._configureUser(u, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (f = l?.plugins) !== null && f !== void 0 ? f : [];
      for (const v of h) v.bind(this);
    }
    initializeSync(s) {
      var u;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : []),
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
    updateUserSync(s, u) {
      const l = performance.now();
      try {
        return this._updateUserSyncImpl(s, u, l);
      } catch (d) {
        const f = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(f, l);
      }
    }
    _updateUserSyncImpl(s, u, l) {
      var d;
      const f = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
      const p = this.dataAdapter.getDataSync(this._user);
      (p == null && f.push("NoCachedValues"),
        this._store.setValues(p, this._user),
        this._finalizeUpdate(p));
      const h = u?.disableBackgroundCacheRefresh;
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
    updateUserAsync(s, u) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, u);
        } catch (d) {
          const f = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(f, l);
        }
      });
    }
    _updateUserAsyncImpl(s, u) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(s);
        const l = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(l);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, l, u)),
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
    checkGate(s, u) {
      return this.getFeatureGate(s, u).value;
    }
    logEvent(s, u, l) {
      const d = typeof s == "string" ? { eventName: s, value: u, metadata: l } : s;
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
    _createErrorUpdateDetails(s, u) {
      var l;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - u,
        s,
        null,
        [...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : [])],
      );
    }
    _finalizeUpdate(s) {
      (this._store.finalize(), this._setStatus("Ready", s));
    }
    _runPostUpdate(s, u) {
      this.dataAdapter.getDataAsync(s, u, { priority: "low" }).catch((l) => {
        t.Log.error("An error occurred after update.", l);
      });
    }
    _resetForUser(s) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(s, this._options)));
    }
    _configureUser(s, u) {
      var l;
      const d = (0, t._normalizeUser)(s, u),
        f = (l = d.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      return (f && t.StableID.setOverride(f, this._sdkKey), d);
    }
    _getFeatureGateImpl(s, u) {
      var l, d;
      const { result: f, details: p } = this._store.getGate(s),
        h = (0, t._makeFeatureGate)(s, p, f),
        v =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, u),
        g = v ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(s, u) {
      var l, d;
      const { result: f, details: p } = this._store.getConfig(s),
        h = (0, t._makeDynamicConfig)(s, p, f),
        v =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, this._user, u),
        g = v ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(s, u) {
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
      const b =
          (p =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || p === void 0
            ? void 0
            : p.call(f, g, this._user, u),
        m = b ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, m, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: m }),
        m
      );
    }
    _getLayerImpl(s, u) {
      var l, d, f;
      const { result: p, details: h } = this._store.getLayer(s),
        v = (0, t._makeLayer)(s, h, p),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, v, this._user, u);
      u?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const b = (0, t._mergeOverride)(
        v,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : v.__value,
        (m) => {
          u?.disableExposureLog ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                m,
                this._store.getExposureMapping(),
              ),
              u,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: b }), b);
    }
    _getParameterStoreImpl(s, u) {
      var l, d;
      const { result: f, details: p } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const h = {
          name: s,
          details: p,
          __configuration: f,
          get: (0, a._makeParamStoreGetter)(this, f, u),
        },
        v =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, u);
      return (
        v != null &&
          ((h.__configuration = v.config),
          (h.details = v.details),
          (h.get = (0, a._makeParamStoreGetter)(this, v.config, u))),
        h
      );
    }
  }
  return ((Ar.default = i), Ar);
}
var Uu;
function tb() {
  return (
    Uu ||
      ((Uu = 1),
      (function (e) {
        var t =
            (lr && lr.__createBinding) ||
            (Object.create
              ? function (i, c, s, u) {
                  u === void 0 && (u = s);
                  var l = Object.getOwnPropertyDescriptor(c, s);
                  ((!l || ("get" in l ? !c.__esModule : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return c[s];
                      },
                    }),
                    Object.defineProperty(i, u, l));
                }
              : function (i, c, s, u) {
                  (u === void 0 && (u = s), (i[u] = c[s]));
                }),
          r =
            (lr && lr.__exportStar) ||
            function (i, c) {
              for (var s in i)
                s !== "default" && !Object.prototype.hasOwnProperty.call(c, s) && t(c, i, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = nr(),
          a = eb();
        ((e.StatsigClient = a.default), r(nr(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(lr)),
    lr
  );
}
var Un = {},
  qn = {},
  qu;
function rb() {
  if (qu) return qn;
  ((qu = 1),
    Object.defineProperty(qn, "__esModule", { value: !0 }),
    (qn.initFeatureFlags = void 0));
  const e = ve(),
    t = ye(),
    r = Fo(),
    n = 500,
    a = 1e3 * 25,
    o = (0, e.getCallBridge)(),
    i = (s) => {
      if (!s || !s.user)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(s).some((u) => typeof u == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (s) => (i(s), o("initFeatureFlags", { user: s.user }));
  return (
    (qn.initFeatureFlags = (0, r.withRateLimiter)(
      c,
      n,
      a,
      `Feature flags initialisation calls are rate limited at ${n}req/${a / 1e3}s`,
    )),
    qn
  );
}
var $u;
function nb() {
  if ($u) return Un;
  (($u = 1),
    Object.defineProperty(Un, "__esModule", { value: !0 }),
    (Un.ForgeDataAdapter = void 0));
  const e = rb();
  class t {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(n, a, o) {
      var i;
      if (n) return n;
      this.environment = ((i = this.options) === null || i === void 0 ? void 0 : i.environment) || {
        tier: "development",
      };
      const c = { ...a, statsigEnvironment: this.environment },
        s = await (0, e.initFeatureFlags)({ user: c }),
        u = {
          source: "Network",
          data: JSON.stringify(s),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = u), u);
    }
    getDataSync(n) {
      return this.cache;
    }
    async attach(n, a, o) {
      this.options = a;
    }
    async prefetchData() {}
    async setData(n) {}
    async setDataLegacy(n) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((Un.ForgeDataAdapter = t), Un);
}
var Di = {},
  Vu;
function kv() {
  return (
    Vu ||
      ((Vu = 1),
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
      })(Di)),
    Di
  );
}
var $n = {},
  Gu;
function ab() {
  if (Gu) return $n;
  ((Gu = 1),
    Object.defineProperty($n, "__esModule", { value: !0 }),
    ($n.trackFeatureFlagEvent = void 0));
  const e = ve(),
    t = ye(),
    r = kv(),
    n = Fo(),
    a = 500,
    o = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    c = (u) => {
      if (!u || !u.type || !u.properties)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(u.type.toUpperCase() in r.FeatureFlagEventType))
        throw new t.BridgeAPIError("Event type is not supported");
      if (Object.values(u).some((l) => typeof l == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    s = (u) => (c(u), i("trackFeatureFlagEvent", u));
  return (
    ($n.trackFeatureFlagEvent = (0, n.withRateLimiter)(
      s,
      a,
      o,
      `Feature flags calls are rate limited at ${a}req/${o / 1e3}s`,
    )),
    $n
  );
}
var Hu;
function ob() {
  if (Hu) return Fn;
  ((Hu = 1),
    Object.defineProperty(Fn, "__esModule", { value: !0 }),
    (Fn.ForgeFeatureFlags = void 0));
  const e = tb(),
    t = nb(),
    r = kv(),
    n = ab();
  class a {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.eventProps = {}),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(i, c = {}) {
      var s;
      if (this.isInitialized()) return;
      this.dataAdapter = new t.ForgeDataAdapter();
      const u = {
        environment: { tier: c.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (s = u.environment) === null || s === void 0 ? void 0 : s.tier),
        (this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(i), u)),
        await this.client.initializeAsync(),
        (this.initialized = !0));
    }
    checkFlag(i) {
      if (!this.isInitialized() || !this.client)
        throw (
          this.sendCheckFlagEvent(i, !1),
          new Error("ForgeFeatureFlags not initialized. Call initialize() first.")
        );
      return (this.sendCheckFlagEvent(i, !0), this.client.checkGate(i, { disableExposureLog: !0 }));
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
    convertUser(i) {
      return {
        userID: i.userId,
        custom: { ...(i.custom || {}), ...(i.attributes || {}) },
        customIDs: i.identifiers || {},
      };
    }
    sendCheckFlagEvent(i, c) {
      const s = {
        type: r.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: i,
          success: c,
        },
      };
      (0, n.trackFeatureFlagEvent)(s);
    }
  }
  return ((Fn.ForgeFeatureFlags = a), Fn);
}
var Ku;
function ib() {
  return (
    Ku ||
      ((Ku = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = ob();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })(ji)),
    ji
  );
}
var Wu;
function sb() {
  return (
    Wu ||
      ((Wu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = Tt;
        var r = dg();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Ta(), e),
          t.__exportStar(hg(), e),
          t.__exportStar(Zs(), e),
          t.__exportStar(jg(), e),
          t.__exportStar(Tg(), e),
          t.__exportStar(Lg(), e),
          t.__exportStar(Fg(), e),
          t.__exportStar(Bg(), e),
          t.__exportStar(qg(), e),
          (e.i18n = t.__importStar($g())),
          t.__exportStar(Jg(), e),
          t.__exportStar(ib(), e));
      })(fi)),
    fi
  );
}
var ka = sb();
function W(e) {
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
var cb = {};
function zo() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : cb;
}
var Ov = Object.assign,
  _o = Object.getOwnPropertyDescriptor,
  xt = Object.defineProperty,
  Uo = Object.prototype,
  ms = [];
Object.freeze(ms);
var Sv = {};
Object.freeze(Sv);
var ub = typeof Proxy < "u",
  lb = Object.toString();
function Ev() {
  ub || W("Proxy not available");
}
function xv(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var qr = function () {};
function ht(e) {
  return typeof e == "function";
}
function br(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function qo(e) {
  return e !== null && typeof e == "object";
}
function ar(e) {
  if (!qo(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === lb;
}
function Cv(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function $o(e, t, r) {
  xt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function Pv(e, t, r) {
  xt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function Sr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return qo(n) && n[r] === !0;
    }
  );
}
function tn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function db(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Vt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var Rv = typeof Object.getOwnPropertySymbols < "u";
function fb(e) {
  var t = Object.keys(e);
  if (!Rv) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Uo.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Vo =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : Rv
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function Av(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Kt(e, t) {
  return Uo.hasOwnProperty.call(e, t);
}
var vb =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Vo(t).forEach(function (n) {
        r[n] = _o(t, n);
      }),
      r
    );
  };
function Ge(e, t) {
  return !!(e & t);
}
function He(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function Ju(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, gb(n.key), n));
  }
}
function rn(e, t, r) {
  return (t && pb(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function $r(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = bb(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _r() {
  return (
    (_r = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    _r.apply(null, arguments)
  );
}
function Iv(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), ys(e, t));
}
function ys(e, t) {
  return (
    (ys = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    ys(e, t)
  );
}
function hb(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function gb(e) {
  var t = hb(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function bb(e, t) {
  if (e) {
    if (typeof e == "string") return Ju(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Ju(e, t)
          : void 0
    );
  }
}
var Et = Symbol("mobx-stored-annotations");
function Ct(e) {
  function t(r, n) {
    if (La(n)) return e.decorate_20223_(r, n);
    Ma(r, n, e);
  }
  return Object.assign(t, e);
}
function Ma(e, t, r) {
  (Kt(e, Et) || $o(e, Et, _r({}, e[Et])), Sb(r) || (e[Et][t] = r));
}
function _b(e) {
  return (Kt(e, Et) || $o(e, Et, _r({}, e[Et])), e[Et]);
}
function La(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var N = Symbol("mobx administration"),
  ir = (function () {
    function e(r) {
      (r === void 0 && (r = "Atom"),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = Y.NOT_TRACKING_),
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
        return Kv(this);
      }),
      (t.reportChanged = function () {
        (at(), Wv(this), ot());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      rn(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return Ge(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = He(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Ge(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = He(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Ge(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = He(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
ir.isBeingObservedMask_ = 1;
ir.isPendingUnobservationMask_ = 2;
ir.diffValueMask_ = 4;
var Qs = Sr("Atom", ir);
function jv(e, t, r) {
  (t === void 0 && (t = qr), r === void 0 && (r = qr));
  var n = new ir(e);
  return (t !== qr && R_(n, t), r !== qr && Qv(n, r), n);
}
function mb(e, t) {
  return fp(e, t);
}
function yb(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var mo = { structural: mb, default: yb };
function mr(e, t, r) {
  return np(e)
    ? e
    : Array.isArray(e)
      ? ae.array(e, { name: r })
      : ar(e)
        ? ae.object(e, void 0, { name: r })
        : tn(e)
          ? ae.map(e, { name: r })
          : Vt(e)
            ? ae.set(e, { name: r })
            : typeof e == "function" && !Kr(e) && !Sa(e)
              ? Cv(e)
                ? Wr(e)
                : Oa(r, e)
              : e;
}
function wb(e, t, r) {
  if (e == null || Zo(e) || Xo(e) || xr(e) || St(e)) return e;
  if (Array.isArray(e)) return ae.array(e, { name: r, deep: !1 });
  if (ar(e)) return ae.object(e, void 0, { name: r, deep: !1 });
  if (tn(e)) return ae.map(e, { name: r, deep: !1 });
  if (Vt(e)) return ae.set(e, { name: r, deep: !1 });
}
function Go(e) {
  return e;
}
function kb(e, t) {
  return fp(e, t) ? t : e;
}
var Ob = "override";
function Sb(e) {
  return e.annotationType_ === Ob;
}
function Na(e, t) {
  return { annotationType_: e, options_: t, make_: Eb, extend_: xb, decorate_20223_: Cb };
}
function Eb(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Kr(r.value)) return 1;
  var o = Dv(e, this, t, r, !1);
  return (xt(n, t, o), 2);
}
function xb(e, t, r, n) {
  var a = Dv(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function Cb(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    o = this,
    i = function (u) {
      var l, d, f, p;
      return yr(
        (l = (d = o.options_) == null ? void 0 : d.name) != null ? l : n.toString(),
        u,
        (f = (p = o.options_) == null ? void 0 : p.autoAction) != null ? f : !1,
      );
    };
  if (r == "field")
    return function (s) {
      var u,
        l = s;
      return (
        Kr(l) || (l = i(l)),
        (u = o.options_) != null && u.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var c;
    return (
      Kr(e) || (e = i(e)),
      (c = this.options_) != null &&
        c.bound &&
        a(function () {
          var s = this,
            u = s[n].bind(s);
          ((u.isMobxAction = !0), (s[n] = u));
        }),
      e
    );
  }
  W(
    "Cannot apply '" +
      o.annotationType_ +
      "' to '" +
      String(n) +
      "' (kind: " +
      r +
      "):" +
      (`
'` +
        o.annotationType_ +
        "' can only be used on properties with a function value."),
  );
}
function Pb(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Dv(e, t, r, n, a) {
  var o, i, c, s, u, l, d;
  (a === void 0 && (a = I.safeDescriptors), Pb(e, t, r, n));
  var f = n.value;
  if ((o = t.options_) != null && o.bound) {
    var p;
    f = f.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return {
    value: yr(
      (i = (c = t.options_) == null ? void 0 : c.name) != null ? i : r.toString(),
      f,
      (s = (u = t.options_) == null ? void 0 : u.autoAction) != null ? s : !1,
      (l = t.options_) != null && l.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: a ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !a,
  };
}
function Tv(e, t) {
  return { annotationType_: e, options_: t, make_: Rb, extend_: Ab, decorate_20223_: Ib };
}
function Rb(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Kt(e.target_, t) || !Sa(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Sa(r.value)) return 1;
  var o = Mv(e, this, t, r, !1, !1);
  return (xt(n, t, o), 2);
}
function Ab(e, t, r, n) {
  var a,
    o = Mv(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, o, n);
}
function Ib(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    Sa(e) || (e = Wr(e)),
    (r = this.options_) != null &&
      r.bound &&
      a(function () {
        var o = this,
          i = o[n].bind(o);
        ((i.isMobXFlow = !0), (o[n] = i));
      }),
    e
  );
}
function jb(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Mv(e, t, r, n, a, o) {
  (o === void 0 && (o = I.safeDescriptors), jb(e, t, r, n));
  var i = n.value;
  if ((Sa(i) || (i = Wr(i)), a)) {
    var c;
    ((i = i.bind((c = e.proxy_) != null ? c : e.target_)), (i.isMobXFlow = !0));
  }
  return { value: i, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function ec(e, t) {
  return { annotationType_: e, options_: t, make_: Db, extend_: Tb, decorate_20223_: Mb };
}
function Db(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Tb(e, t, r, n) {
  return (
    Lb(e, this, t, r),
    e.defineComputedProperty_(t, _r({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function Mb(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var o = nn(this)[N],
        i = _r({}, r.options_, { get: e, context: this });
      (i.name || (i.name = "ObservableObject." + n.toString()), o.values_.set(n, new gt(i)));
    }),
    function () {
      return this[N].getObservablePropValue_(n);
    }
  );
}
function Lb(e, t, r, n) {
  (t.annotationType_, n.get);
}
function Ho(e, t) {
  return { annotationType_: e, options_: t, make_: Nb, extend_: Fb, decorate_20223_: Bb };
}
function Nb(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Fb(e, t, r, n) {
  var a, o;
  return (
    zb(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (o = this.options_) == null ? void 0 : o.enhancer) != null ? a : mr,
      n,
    )
  );
}
function Bb(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    o = new WeakSet();
  function i(c, s) {
    var u,
      l,
      d = nn(c)[N],
      f = new hr(
        s,
        (u = (l = r.options_) == null ? void 0 : l.enhancer) != null ? u : mr,
        "ObservableObject." + a.toString(),
        !1,
      );
    (d.values_.set(a, f), o.add(c));
  }
  if (n == "accessor")
    return {
      get: function () {
        return (o.has(this) || i(this, e.get.call(this)), this[N].getObservablePropValue_(a));
      },
      set: function (s) {
        return (o.has(this) || i(this, s), this[N].setObservablePropValue_(a, s));
      },
      init: function (s) {
        return (o.has(this) || i(this, s), s);
      },
    };
}
function zb(e, t, r, n) {
  t.annotationType_;
}
var Ub = "true",
  qb = Lv();
function Lv(e) {
  return { annotationType_: Ub, options_: e, make_: $b, extend_: Vb, decorate_20223_: Gb };
}
function $b(e, t, r, n) {
  var a, o;
  if (r.get) return Ko.make_(e, t, r, n);
  if (r.set) {
    var i = Kr(r.set) ? r.set : yr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: I.safeDescriptors ? e.isPlainObject_ : !0,
          set: i,
        }) === null
        ? 0
        : 2
      : (xt(n, t, { configurable: !0, set: i }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var c;
    if (Cv(r.value)) {
      var s,
        u = (s = this.options_) != null && s.autoBind ? Wr.bound : Wr;
      return u.make_(e, t, r, n);
    }
    var l = (c = this.options_) != null && c.autoBind ? Oa.bound : Oa;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? ae.ref : ae;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function Vb(e, t, r, n) {
  var a, o;
  if (r.get) return Ko.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: I.safeDescriptors ? e.isPlainObject_ : !0, set: yr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var i;
    r.value = r.value.bind((i = e.proxy_) != null ? i : e.target_);
  }
  var c = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? ae.ref : ae;
  return c.extend_(e, t, r, n);
}
function Gb(e, t) {
  W("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Hb = "observable",
  Kb = "observable.ref",
  Wb = "observable.shallow",
  Jb = "observable.struct",
  Nv = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Nv);
function Ha(e) {
  return e || Nv;
}
var ws = Ho(Hb),
  Yb = Ho(Kb, { enhancer: Go }),
  Xb = Ho(Wb, { enhancer: wb }),
  Zb = Ho(Jb, { enhancer: kb }),
  Fv = Ct(ws);
function Ka(e) {
  return e.deep === !0 ? mr : e.deep === !1 ? Go : e_(e.defaultDecorator);
}
function Qb(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Lv(e)) : void 0;
}
function e_(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : mr;
}
function Bv(e, t, r) {
  if (La(t)) return ws.decorate_20223_(e, t);
  if (br(t)) {
    Ma(e, t, ws);
    return;
  }
  return np(e)
    ? e
    : ar(e)
      ? ae.object(e, t, r)
      : Array.isArray(e)
        ? ae.array(e, t)
        : tn(e)
          ? ae.map(e, t)
          : Vt(e)
            ? ae.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : ae.box(e, t);
}
Ov(Bv, Fv);
var t_ = {
    box: function (t, r) {
      var n = Ha(r);
      return new hr(t, Ka(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = Ha(r);
      return (I.useProxies === !1 || n.proxy === !1 ? Q_ : $_)(t, Ka(n), n.name);
    },
    map: function (t, r) {
      var n = Ha(r);
      return new ip(t, Ka(n), n.name);
    },
    set: function (t, r) {
      var n = Ha(r);
      return new sp(t, Ka(n), n.name);
    },
    object: function (t, r, n) {
      return Cr(function () {
        return D_(I.useProxies === !1 || n?.proxy === !1 ? nn({}, n) : z_({}, n), t, r);
      });
    },
    ref: Ct(Yb),
    shallow: Ct(Xb),
    deep: Fv,
    struct: Ct(Zb),
  },
  ae = Ov(Bv, t_),
  zv = "computed",
  r_ = "computed.struct",
  ks = ec(zv),
  n_ = ec(r_, { equals: mo.structural }),
  Ko = function (t, r) {
    if (La(r)) return ks.decorate_20223_(t, r);
    if (br(r)) return Ma(t, r, ks);
    if (ar(t)) return Ct(ec(zv, t));
    var n = ar(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new gt(n));
  };
Object.assign(Ko, ks);
Ko.struct = Ct(n_);
var Yu,
  Xu,
  yo = 0,
  a_ = 1,
  o_ =
    (Yu = (Xu = _o(function () {}, "name")) == null ? void 0 : Xu.configurable) != null ? Yu : !1,
  Zu = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function yr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return i_(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    o_ && ((Zu.value = e), xt(a, "name", Zu)),
    a
  );
}
function i_(e, t, r, n, a) {
  var o = s_(e, t);
  try {
    return r.apply(n, a);
  } catch (i) {
    throw ((o.error_ = i), i);
  } finally {
    c_(o);
  }
}
function s_(e, t, r, n) {
  var a = !1,
    o = 0,
    i = I.trackingDerivation,
    c = !t || !i;
  at();
  var s = I.allowStateChanges;
  c && (Er(), (s = Wo(!0)));
  var u = tc(!0),
    l = {
      runAsAction_: c,
      prevDerivation_: i,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: u,
      notifySpy_: a,
      startTime_: o,
      actionId_: a_++,
      parentActionId_: yo,
    };
  return ((yo = l.actionId_), l);
}
function c_(e) {
  (yo !== e.actionId_ && W(30),
    (yo = e.parentActionId_),
    e.error_ !== void 0 && (I.suppressReactionErrors = !0),
    Jo(e.prevAllowStateChanges_),
    pa(e.prevAllowStateReads_),
    ot(),
    e.runAsAction_ && Wt(e.prevDerivation_),
    (I.suppressReactionErrors = !1));
}
function u_(e, t) {
  var r = Wo(e);
  try {
    return t();
  } finally {
    Jo(r);
  }
}
function Wo(e) {
  var t = I.allowStateChanges;
  return ((I.allowStateChanges = e), t);
}
function Jo(e) {
  I.allowStateChanges = e;
}
var hr = (function (e) {
    function t(n, a, o, i, c) {
      var s;
      return (
        o === void 0 && (o = "ObservableValue"),
        c === void 0 && (c = mo.default),
        (s = e.call(this, o) || this),
        (s.enhancer = void 0),
        (s.name_ = void 0),
        (s.equals = void 0),
        (s.hasUnreportedChange_ = !1),
        (s.interceptors_ = void 0),
        (s.changeListeners_ = void 0),
        (s.value_ = void 0),
        (s.dehancer = void 0),
        (s.enhancer = a),
        (s.name_ = o),
        (s.equals = c),
        (s.value_ = a(n, void 0, o)),
        s
      );
    }
    Iv(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== I.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (rt(this)) {
          var o = nt(this, { object: this, type: Pt, newValue: a });
          if (!o) return I.UNCHANGED;
          a = o.newValue;
        }
        return (
          (a = this.enhancer(a, this.value_, this.name_)),
          this.equals(this.value_, a) ? I.UNCHANGED : a
        );
      }),
      (r.setNewValue_ = function (a) {
        var o = this.value_;
        ((this.value_ = a),
          this.reportChanged(),
          vt(this) && pt(this, { type: Pt, object: this, newValue: a, oldValue: o }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (a) {
        return Fa(this, a);
      }),
      (r.observe_ = function (a, o) {
        return (
          o &&
            a({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: Pt,
              newValue: this.value_,
              oldValue: void 0,
            }),
          Ba(this, a)
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
        return Av(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(ir),
  gt = (function () {
    function e(r) {
      ((this.dependenciesState_ = Y.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = Y.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new ko(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = wo.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || W(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = yr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? mo.structural : mo.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        p_(this);
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
          (this.isComputing && W(32, this.name_, this.derivation),
          I.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          Os(this) &&
            (this.warnAboutUntrackedRead_(), at(), (this.value_ = this.computeValue_(!1)), ot());
        else if ((Kv(this), Os(this))) {
          var n = I.trackingContext;
          (this.keepAlive_ && !n && (I.trackingContext = this),
            this.trackAndCompute() && v_(this),
            (I.trackingContext = n));
        }
        var a = this.value_;
        if (io(a)) throw a.cause;
        return a;
      }),
      (t.set = function (n) {
        if (this.setter_) {
          (this.isRunningSetter && W(33, this.name_), (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, n);
          } finally {
            this.isRunningSetter = !1;
          }
        } else W(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var n = this.value_,
          a = this.dependenciesState_ === Y.NOT_TRACKING_,
          o = this.computeValue_(!0),
          i = a || io(n) || io(o) || !this.equals_(n, o);
        return (i && (this.value_ = o), i);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = Wo(!1),
          o;
        if (n) o = Uv(this, this.derivation, this.scope_);
        else if (I.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (i) {
            o = new ko(i);
          }
        return (Jo(a), (this.isComputing = !1), o);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Ss(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var o = this,
          i = !0,
          c = void 0;
        return S_(function () {
          var s = o.get();
          if (!i || a) {
            var u = Er();
            (n({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: Pt,
              object: o,
              newValue: s,
              oldValue: c,
            }),
              Wt(u));
          }
          ((i = !1), (c = s));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return Av(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      rn(e, [
        {
          key: "isComputing",
          get: function () {
            return Ge(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = He(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Ge(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = He(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Ge(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = He(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Ge(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = He(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Ge(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = He(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
gt.isComputingMask_ = 1;
gt.isRunningSetterMask_ = 2;
gt.isBeingObservedMask_ = 4;
gt.isPendingUnobservationMask_ = 8;
gt.diffValueMask_ = 16;
var Yo = Sr("ComputedValue", gt),
  Y;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(Y || (Y = {}));
var wo;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(wo || (wo = {}));
var ko = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function io(e) {
  return e instanceof ko;
}
function Os(e) {
  switch (e.dependenciesState_) {
    case Y.UP_TO_DATE_:
      return !1;
    case Y.NOT_TRACKING_:
    case Y.STALE_:
      return !0;
    case Y.POSSIBLY_STALE_: {
      for (var t = tc(!0), r = Er(), n = e.observing_, a = n.length, o = 0; o < a; o++) {
        var i = n[o];
        if (Yo(i)) {
          if (I.disableErrorBoundaries) i.get();
          else
            try {
              i.get();
            } catch {
              return (Wt(r), pa(t), !0);
            }
          if (e.dependenciesState_ === Y.STALE_) return (Wt(r), pa(t), !0);
        }
      }
      return ($v(e), Wt(r), pa(t), !1);
    }
  }
}
function Uv(e, t, r) {
  var n = tc(!0);
  ($v(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++I.runId));
  var a = I.trackingDerivation;
  ((I.trackingDerivation = e), I.inBatch++);
  var o;
  if (I.disableErrorBoundaries === !0) o = t.call(r);
  else
    try {
      o = t.call(r);
    } catch (i) {
      o = new ko(i);
    }
  return (I.inBatch--, (I.trackingDerivation = a), l_(e), pa(n), o);
}
function l_(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = Y.UP_TO_DATE_,
      a = 0,
      o = e.unboundDepsCount_,
      i = 0;
    i < o;
    i++
  ) {
    var c = r[i];
    (c.diffValue === 0 && ((c.diffValue = 1), a !== i && (r[a] = c), a++),
      c.dependenciesState_ > n && (n = c.dependenciesState_));
  }
  for (r.length = a, e.newObserving_ = null, o = t.length; o--; ) {
    var s = t[o];
    (s.diffValue === 0 && Gv(s, e), (s.diffValue = 0));
  }
  for (; a--; ) {
    var u = r[a];
    u.diffValue === 1 && ((u.diffValue = 0), f_(u, e));
  }
  n !== Y.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function Ss(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Gv(t[r], e);
  e.dependenciesState_ = Y.NOT_TRACKING_;
}
function qv(e) {
  var t = Er();
  try {
    return e();
  } finally {
    Wt(t);
  }
}
function Er() {
  var e = I.trackingDerivation;
  return ((I.trackingDerivation = null), e);
}
function Wt(e) {
  I.trackingDerivation = e;
}
function tc(e) {
  var t = I.allowStateReads;
  return ((I.allowStateReads = e), t);
}
function pa(e) {
  I.allowStateReads = e;
}
function $v(e) {
  if (e.dependenciesState_ !== Y.UP_TO_DATE_) {
    e.dependenciesState_ = Y.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = Y.UP_TO_DATE_;
  }
}
var so = function () {
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
  co = !0,
  Vv = !1,
  I = (function () {
    var e = zo();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (co = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new so().version && (co = !1),
      co
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new so()))
        : (setTimeout(function () {
            Vv || W(35);
          }, 1),
          new so())
    );
  })();
function d_() {
  if (((I.pendingReactions.length || I.inBatch || I.isRunningReactions) && W(36), (Vv = !0), co)) {
    var e = zo();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (I = new so()));
  }
}
function f_(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Gv(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Hv(e));
}
function Hv(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), I.pendingUnobservations.push(e));
}
function at() {
  I.inBatch++;
}
function ot() {
  if (--I.inBatch === 0) {
    Jv();
    for (var e = I.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof gt && r.suspend_()));
    }
    I.pendingUnobservations = [];
  }
}
function Kv(e) {
  var t = I.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && I.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && I.inBatch > 0 && Hv(e), !1);
}
function Wv(e) {
  e.lowestObserverState_ !== Y.STALE_ &&
    ((e.lowestObserverState_ = Y.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === Y.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = Y.STALE_));
    }));
}
function v_(e) {
  e.lowestObserverState_ !== Y.STALE_ &&
    ((e.lowestObserverState_ = Y.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Y.POSSIBLY_STALE_
        ? (t.dependenciesState_ = Y.STALE_)
        : t.dependenciesState_ === Y.UP_TO_DATE_ && (e.lowestObserverState_ = Y.UP_TO_DATE_);
    }));
}
function p_(e) {
  e.lowestObserverState_ === Y.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = Y.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Y.UP_TO_DATE_ &&
        ((t.dependenciesState_ = Y.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var jt = (function () {
  function e(r, n, a, o) {
    (r === void 0 && (r = "Reaction"),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = Y.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = wo.NONE),
      (this.name_ = r),
      (this.onInvalidate_ = n),
      (this.errorHandler_ = a),
      (this.requiresObservable_ = o));
  }
  var t = e.prototype;
  return (
    (t.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (t.schedule_ = function () {
      this.isScheduled || ((this.isScheduled = !0), I.pendingReactions.push(this), Jv());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (at(), (this.isScheduled = !1));
        var n = I.trackingContext;
        if (((I.trackingContext = this), Os(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((I.trackingContext = n), ot());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (at(), (this.isRunning = !0));
        var a = I.trackingContext;
        I.trackingContext = this;
        var o = Uv(this, n, void 0);
        ((I.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Ss(this),
          io(o) && this.reportExceptionInDerivation_(o.cause),
          ot());
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var a = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (I.disableErrorBoundaries) throw n;
      var o = "[mobx] uncaught error in '" + this + "'";
      (I.suppressReactionErrors || console.error(o, n),
        I.globalReactionErrorHandlers.forEach(function (i) {
          return i(n, a);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (at(), Ss(this), ot()));
    }),
    (t.getDisposer_ = function (n) {
      var a = this,
        o = function i() {
          (a.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", i));
        };
      return (
        n == null || n.addEventListener == null || n.addEventListener("abort", o),
        (o[N] = this),
        "dispose" in Symbol && typeof Symbol.dispose == "symbol" && (o[Symbol.dispose] = o),
        o
      );
    }),
    (t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (t.trace = function (n) {}),
    rn(e, [
      {
        key: "isDisposed",
        get: function () {
          return Ge(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = He(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Ge(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = He(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Ge(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = He(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Ge(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = He(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Ge(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = He(this.flags_, e.diffValueMask_, n === 1);
        },
      },
    ])
  );
})();
jt.isDisposedMask_ = 1;
jt.isScheduledMask_ = 2;
jt.isTrackPendingMask_ = 4;
jt.isRunningMask_ = 8;
jt.diffValueMask_ = 16;
var h_ = 100,
  Es = function (t) {
    return t();
  };
function Jv() {
  I.inBatch > 0 || I.isRunningReactions || Es(g_);
}
function g_() {
  I.isRunningReactions = !0;
  for (var e = I.pendingReactions, t = 0; e.length > 0; ) {
    ++t === h_ && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  I.isRunningReactions = !1;
}
var Oo = Sr("Reaction", jt);
function b_(e) {
  var t = Es;
  Es = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function ha() {
  return !1;
}
function __(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Yv = "action",
  m_ = "action.bound",
  Xv = "autoAction",
  y_ = "autoAction.bound",
  w_ = "<unnamed action>",
  xs = Na(Yv),
  k_ = Na(m_, { bound: !0 }),
  Cs = Na(Xv, { autoAction: !0 }),
  O_ = Na(y_, { autoAction: !0, bound: !0 });
function Zv(e) {
  var t = function (n, a) {
    if (ht(n)) return yr(n.name || w_, n, e);
    if (ht(a)) return yr(n, a, e);
    if (La(a)) return (e ? Cs : xs).decorate_20223_(n, a);
    if (br(a)) return Ma(n, a, e ? Cs : xs);
    if (br(n)) return Ct(Na(e ? Xv : Yv, { name: n, autoAction: e }));
  };
  return t;
}
var it = Zv(!1);
Object.assign(it, xs);
var Oa = Zv(!0);
Object.assign(Oa, Cs);
it.bound = Ct(k_);
Oa.bound = Ct(O_);
function Kr(e) {
  return ht(e) && e.isMobxAction === !0;
}
function S_(e, t) {
  var r, n, a, o;
  t === void 0 && (t = Sv);
  var i = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    c = !t.scheduler && !t.delay,
    s;
  if (c)
    s = new jt(
      i,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var u = x_(t),
      l = !1;
    s = new jt(
      i,
      function () {
        l ||
          ((l = !0),
          u(function () {
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
    ((a = t) != null && (a = a.signal) != null && a.aborted) || s.schedule_(),
    s.getDisposer_((o = t) == null ? void 0 : o.signal)
  );
}
var E_ = function (t) {
  return t();
};
function x_(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : E_;
}
var C_ = "onBO",
  P_ = "onBUO";
function R_(e, t, r) {
  return ep(C_, e, t, r);
}
function Qv(e, t, r) {
  return ep(P_, e, t, r);
}
function ep(e, t, r, n) {
  var a = xo(t),
    o = ht(n) ? n : r,
    i = e + "L";
  return (
    a[i] ? a[i].add(o) : (a[i] = new Set([o])),
    function () {
      var c = a[i];
      c && (c.delete(o), c.size === 0 && delete a[i]);
    }
  );
}
var A_ = "never",
  Wa = "always",
  I_ = "observed";
function j_(e) {
  e.isolateGlobalState === !0 && d_();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (I.useProxies = t === Wa ? !0 : t === A_ ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (I.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Wa ? Wa : r === I_;
    ((I.enforceActions = n), (I.allowStateChanges = !(n === !0 || n === Wa)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (a) {
    a in e && (I[a] = !!e[a]);
  }),
    (I.allowStateReads = !I.observableRequiresReaction),
    e.reactionScheduler && b_(e.reactionScheduler));
}
function D_(e, t, r, n) {
  var a = vb(t);
  return (
    Cr(function () {
      var o = nn(e, n)[N];
      Vo(a).forEach(function (i) {
        o.extend_(i, a[i], r && i in r ? r[i] : !0);
      });
    }),
    e
  );
}
function T_(e, t) {
  return tp(xo(e, t));
}
function tp(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = M_(e.observing_).map(tp)),
    t
  );
}
function M_(e) {
  return Array.from(new Set(e));
}
var L_ = 0;
function rp() {
  this.message = "FLOW_CANCELLED";
}
rp.prototype = Object.create(Error.prototype);
var Ti = Tv("flow"),
  N_ = Tv("flow.bound", { bound: !0 }),
  Wr = Object.assign(function (t, r) {
    if (La(r)) return Ti.decorate_20223_(t, r);
    if (br(r)) return Ma(t, r, Ti);
    var n = t,
      a = n.name || "<unnamed flow>",
      o = function () {
        var c = this,
          s = arguments,
          u = ++L_,
          l = it(a + " - runid: " + u + " - init", n).apply(c, s),
          d,
          f = void 0,
          p = new Promise(function (h, v) {
            var g = 0;
            d = v;
            function b(k) {
              f = void 0;
              var y;
              try {
                y = it(a + " - runid: " + u + " - yield " + g++, l.next).call(l, k);
              } catch (S) {
                return v(S);
              }
              w(y);
            }
            function m(k) {
              f = void 0;
              var y;
              try {
                y = it(a + " - runid: " + u + " - yield " + g++, l.throw).call(l, k);
              } catch (S) {
                return v(S);
              }
              w(y);
            }
            function w(k) {
              if (ht(k?.then)) {
                k.then(w, v);
                return;
              }
              return k.done ? h(k.value) : ((f = Promise.resolve(k.value)), f.then(b, m));
            }
            b(void 0);
          });
        return (
          (p.cancel = it(a + " - runid: " + u + " - cancel", function () {
            try {
              f && Qu(f);
              var h = l.return(void 0),
                v = Promise.resolve(h.value);
              (v.then(qr, qr), Qu(v), d(new rp()));
            } catch (g) {
              d(g);
            }
          })),
          p
        );
      };
    return ((o.isMobXFlow = !0), o);
  }, Ti);
Wr.bound = Ct(N_);
function Qu(e) {
  ht(e.cancel) && e.cancel();
}
function Sa(e) {
  return e?.isMobXFlow === !0;
}
function F_(e, t) {
  return e ? Zo(e) || !!e[N] || Qs(e) || Oo(e) || Yo(e) : !1;
}
function np(e) {
  return F_(e);
}
function Gt(e, t) {
  (t === void 0 && (t = void 0), at());
  try {
    return e.apply(t);
  } finally {
    ot();
  }
}
function jr(e) {
  return e[N];
}
var B_ = {
  has: function (t, r) {
    return jr(t).has_(r);
  },
  get: function (t, r) {
    return jr(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return br(r) ? ((a = jr(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return br(r) ? ((n = jr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = jr(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return jr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    W(13);
  },
};
function z_(e, t) {
  var r, n;
  return (
    Ev(),
    (e = nn(e, t)),
    (n = (r = e[N]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, B_))
  );
}
function rt(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Fa(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    xv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function nt(e, t) {
  var r = Er();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, o = n.length;
      a < o && ((t = n[a](t)), t && !t.type && W(14), !!t);
      a++
    );
    return t;
  } finally {
    Wt(r);
  }
}
function vt(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Ba(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    xv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function pt(e, t) {
  var r = Er(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, o = n.length; a < o; a++) n[a](t);
    Wt(r);
  }
}
function ap(e, t, r) {
  return (
    Cr(function () {
      var n,
        a = nn(e, r)[N];
      ((n = t) != null || (t = _b(e)),
        Vo(t).forEach(function (o) {
          return a.make_(o, t[o]);
        }));
    }),
    e
  );
}
var el = "splice",
  Pt = "update",
  U_ = 1e4,
  q_ = {
    get: function (t, r) {
      var n = t[N];
      return r === N
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Kt(So, r)
              ? So[r]
              : t[r];
    },
    set: function (t, r, n) {
      var a = t[N];
      return (
        r === "length" && a.setArrayLength_(n),
        typeof r == "symbol" || isNaN(r) ? (t[r] = n) : a.set_(parseInt(r), n),
        !0
      );
    },
    preventExtensions: function () {
      W(15);
    },
  },
  rc = (function () {
    function e(r, n, a, o) {
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
        (this.owned_ = a),
        (this.legacyMode_ = o),
        (this.atom_ = new ir(r)),
        (this.enhancer_ = function (i, c) {
          return n(i, c, "ObservableArray[..]");
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
        return Fa(this, n);
      }),
      (t.observe_ = function (n, a) {
        return (
          a === void 0 && (a = !1),
          a &&
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
          Ba(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && W("Out of range: " + n);
        var a = this.values_.length;
        if (n !== a)
          if (n > a) {
            for (var o = new Array(n - a), i = 0; i < n - a; i++) o[i] = void 0;
            this.spliceWithArray_(a, 0, o);
          } else this.spliceWithArray_(n, a - n);
      }),
      (t.updateArrayLength_ = function (n, a) {
        (n !== this.lastKnownLength_ && W(16),
          (this.lastKnownLength_ += a),
          this.legacyMode_ && a > 0 && dp(n + a + 1));
      }),
      (t.spliceWithArray_ = function (n, a, o) {
        var i = this;
        this.atom_;
        var c = this.values_.length;
        if (
          (n === void 0 ? (n = 0) : n > c ? (n = c) : n < 0 && (n = Math.max(0, c + n)),
          arguments.length === 1
            ? (a = c - n)
            : a == null
              ? (a = 0)
              : (a = Math.max(0, Math.min(a, c - n))),
          o === void 0 && (o = ms),
          rt(this))
        ) {
          var s = nt(this, { object: this.proxy_, type: el, index: n, removedCount: a, added: o });
          if (!s) return ms;
          ((a = s.removedCount), (o = s.added));
        }
        if (
          ((o =
            o.length === 0
              ? o
              : o.map(function (d) {
                  return i.enhancer_(d, void 0);
                })),
          this.legacyMode_)
        ) {
          var u = o.length - a;
          this.updateArrayLength_(c, u);
        }
        var l = this.spliceItemsIntoValues_(n, a, o);
        return (
          (a !== 0 || o.length !== 0) && this.notifyArraySplice_(n, o, l),
          this.dehanceValues_(l)
        );
      }),
      (t.spliceItemsIntoValues_ = function (n, a, o) {
        if (o.length < U_) {
          var i;
          return (i = this.values_).splice.apply(i, [n, a].concat(o));
        } else {
          var c = this.values_.slice(n, n + a),
            s = this.values_.slice(n + a);
          this.values_.length += o.length - a;
          for (var u = 0; u < o.length; u++) this.values_[n + u] = o[u];
          for (var l = 0; l < s.length; l++) this.values_[n + o.length + l] = s[l];
          return c;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (n, a, o) {
        var i = !this.owned_ && ha(),
          c = vt(this),
          s =
            c || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: Pt,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: a,
                  oldValue: o,
                }
              : null;
        (this.atom_.reportChanged(), c && pt(this, s));
      }),
      (t.notifyArraySplice_ = function (n, a, o) {
        var i = !this.owned_ && ha(),
          c = vt(this),
          s =
            c || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: el,
                  index: n,
                  removed: o,
                  added: a,
                  removedCount: o.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), c && pt(this, s));
      }),
      (t.get_ = function (n) {
        if (this.legacyMode_ && n >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + n);
          return;
        }
        return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[n]));
      }),
      (t.set_ = function (n, a) {
        var o = this.values_;
        if ((this.legacyMode_ && n > o.length && W(17, n, o.length), n < o.length)) {
          this.atom_;
          var i = o[n];
          if (rt(this)) {
            var c = nt(this, { type: Pt, object: this.proxy_, index: n, newValue: a });
            if (!c) return;
            a = c.newValue;
          }
          a = this.enhancer_(a, i);
          var s = a !== i;
          s && ((o[n] = a), this.notifyArrayChildUpdate_(n, a, i));
        } else {
          for (var u = new Array(n + 1 - o.length), l = 0; l < u.length - 1; l++) u[l] = void 0;
          ((u[u.length - 1] = a), this.spliceWithArray_(o.length, 0, u));
        }
      }),
      e
    );
  })();
function $_(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    Ev(),
    Cr(function () {
      var a = new rc(r, t, n, !1);
      Pv(a.values_, N, a);
      var o = new Proxy(a.values_, q_);
      return ((a.proxy_ = o), e && e.length && a.spliceWithArray_(0, 0, e), o);
    })
  );
}
var So = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var r = this[N];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, r) {
    for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      a[o - 2] = arguments[o];
    var i = this[N];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return i.spliceWithArray_(t);
      case 2:
        return i.spliceWithArray_(t, r);
    }
    return i.spliceWithArray_(t, r, a);
  },
  spliceWithArray: function (t, r, n) {
    return this[N].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (var t = this[N], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return (t.spliceWithArray_(t.values_.length, 0, n), t.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[N].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[N], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return (t.spliceWithArray_(0, 0, n), t.values_.length);
  },
  reverse: function () {
    return (I.trackingDerivation && W(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    I.trackingDerivation && W(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[N],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
se("at", Je);
se("concat", Je);
se("flat", Je);
se("includes", Je);
se("indexOf", Je);
se("join", Je);
se("lastIndexOf", Je);
se("slice", Je);
se("toString", Je);
se("toLocaleString", Je);
se("toSorted", Je);
se("toSpliced", Je);
se("with", Je);
se("every", _t);
se("filter", _t);
se("find", _t);
se("findIndex", _t);
se("findLast", _t);
se("findLastIndex", _t);
se("flatMap", _t);
se("forEach", _t);
se("map", _t);
se("some", _t);
se("toReversed", _t);
se("reduce", op);
se("reduceRight", op);
function se(e, t) {
  typeof Array.prototype[e] == "function" && (So[e] = t(e));
}
function Je(e) {
  return function () {
    var t = this[N];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function _t(e) {
  return function (t, r) {
    var n = this,
      a = this[N];
    a.atom_.reportObserved();
    var o = a.dehanceValues_(a.values_);
    return o[e](function (i, c) {
      return t.call(r, i, c, n);
    });
  };
}
function op(e) {
  return function () {
    var t = this,
      r = this[N];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_),
      a = arguments[0];
    return (
      (arguments[0] = function (o, i, c) {
        return a(o, i, c, t);
      }),
      n[e].apply(n, arguments)
    );
  };
}
var V_ = Sr("ObservableArrayAdministration", rc);
function Xo(e) {
  return qo(e) && V_(e[N]);
}
var G_ = {},
  tr = "add",
  Eo = "delete",
  ip = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = mr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[N] = G_),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        ht(Map) || W(18),
        Cr(function () {
          ((o.keysAtom_ = jv("ObservableMap.keys()")),
            (o.data_ = new Map()),
            (o.hasMap_ = new Map()),
            r && o.merge(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.has_ = function (n) {
        return this.data_.has(n);
      }),
      (t.has = function (n) {
        var a = this;
        if (!I.trackingDerivation) return this.has_(n);
        var o = this.hasMap_.get(n);
        if (!o) {
          var i = (o = new hr(this.has_(n), Go, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, i),
            Qv(i, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return o.get();
      }),
      (t.set = function (n, a) {
        var o = this.has_(n);
        if (rt(this)) {
          var i = nt(this, { type: o ? Pt : tr, object: this, newValue: a, name: n });
          if (!i) return this;
          a = i.newValue;
        }
        return (o ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, rt(this))) {
          var o = nt(this, { type: Eo, object: this, name: n });
          if (!o) return !1;
        }
        if (this.has_(n)) {
          var i = ha(),
            c = vt(this),
            s =
              c || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Eo,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Gt(function () {
              var u;
              (a.keysAtom_.reportChanged(), (u = a.hasMap_.get(n)) == null || u.setNewValue_(!1));
              var l = a.data_.get(n);
              (l.setNewValue_(void 0), a.data_.delete(n));
            }),
            c && pt(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var o = this.data_.get(n);
        if (((a = o.prepareNewValue_(a)), a !== I.UNCHANGED)) {
          var i = ha(),
            c = vt(this),
            s =
              c || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Pt,
                    object: this,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), c && pt(this, s));
        }
      }),
      (t.addValue_ = function (n, a) {
        var o = this;
        (this.keysAtom_,
          Gt(function () {
            var u,
              l = new hr(a, o.enhancer_, "ObservableMap.key", !1);
            (o.data_.set(n, l),
              (a = l.value_),
              (u = o.hasMap_.get(n)) == null || u.setNewValue_(!0),
              o.keysAtom_.reportChanged());
          }));
        var i = ha(),
          c = vt(this),
          s =
            c || i
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: tr,
                  object: this,
                  name: n,
                  newValue: a,
                }
              : null;
        c && pt(this, s);
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
          a = this.keys();
        return tl({
          next: function () {
            var i = a.next(),
              c = i.done,
              s = i.value;
            return { done: c, value: c ? void 0 : n.get(s) };
          },
        });
      }),
      (t.entries = function () {
        var n = this,
          a = this.keys();
        return tl({
          next: function () {
            var i = a.next(),
              c = i.done,
              s = i.value;
            return { done: c, value: c ? void 0 : [s, n.get(s)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (n, a) {
        for (var o = $r(this), i; !(i = o()).done; ) {
          var c = i.value,
            s = c[0],
            u = c[1];
          n.call(a, u, s, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          xr(n) && (n = new Map(n)),
          Gt(function () {
            ar(n)
              ? fb(n).forEach(function (o) {
                  return a.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var i = o[0],
                      c = o[1];
                    return a.set(i, c);
                  })
                : tn(n)
                  ? (db(n) || W(19, n),
                    n.forEach(function (o, i) {
                      return a.set(i, o);
                    }))
                  : n != null && W(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        Gt(function () {
          qv(function () {
            for (var a = $r(n.keys()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          Gt(function () {
            for (
              var o = H_(n), i = new Map(), c = !1, s = $r(a.data_.keys()), u;
              !(u = s()).done;

            ) {
              var l = u.value;
              if (!o.has(l)) {
                var d = a.delete(l);
                if (d) c = !0;
                else {
                  var f = a.data_.get(l);
                  i.set(l, f);
                }
              }
            }
            for (var p = $r(o.entries()), h; !(h = p()).done; ) {
              var v = h.value,
                g = v[0],
                b = v[1],
                m = a.data_.has(g);
              if ((a.set(g, b), a.data_.has(g))) {
                var w = a.data_.get(g);
                (i.set(g, w), m || (c = !0));
              }
            }
            if (!c)
              if (a.data_.size !== i.size) a.keysAtom_.reportChanged();
              else
                for (var k = a.data_.keys(), y = i.keys(), S = k.next(), x = y.next(); !S.done; ) {
                  if (S.value !== x.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = k.next()), (x = y.next()));
                }
            a.data_ = i;
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
      (t.observe_ = function (n, a) {
        return Ba(this, n);
      }),
      (t.intercept_ = function (n) {
        return Fa(this, n);
      }),
      rn(e, [
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
  xr = Sr("ObservableMap", ip);
function tl(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), ac(e));
}
function H_(e) {
  if (tn(e) || xr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (ar(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return W(21, e);
}
var K_ = {},
  sp = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = mr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[N] = K_),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        ht(Set) || W(22),
        (this.enhancer_ = function (i, c) {
          return n(i, c, a);
        }),
        Cr(function () {
          ((o.atom_ = jv(o.name_)), r && o.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Gt(function () {
          qv(function () {
            for (var a = $r(n.data_.values()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var o = $r(this), i; !(i = o()).done; ) {
          var c = i.value;
          n.call(a, c, c, this);
        }
      }),
      (t.add = function (n) {
        var a = this;
        if ((this.atom_, rt(this))) {
          var o = nt(this, { type: tr, object: this, newValue: n });
          if (!o) return this;
          n = o.newValue;
        }
        if (!this.has(n)) {
          Gt(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var i = !1,
            c = vt(this),
            s =
              c || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: tr,
                    object: this,
                    newValue: n,
                  }
                : null;
          c && pt(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (rt(this)) {
          var o = nt(this, { type: Eo, object: this, oldValue: n });
          if (!o) return !1;
        }
        if (this.has(n)) {
          var i = !1,
            c = vt(this),
            s =
              c || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Eo,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Gt(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            c && pt(this, s),
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
        return rl({
          next: function () {
            var o = n.next(),
              i = o.value,
              c = o.done;
            return c ? { value: void 0, done: c } : { value: [i, i], done: c };
          },
        });
      }),
      (t.keys = function () {
        return this.values();
      }),
      (t.values = function () {
        this.atom_.reportObserved();
        var n = this,
          a = this.data_.values();
        return rl({
          next: function () {
            var i = a.next(),
              c = i.value,
              s = i.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(c), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Vt(n) && !St(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Vt(n) && !St(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Vt(n) && !St(n)) return n.symmetricDifference(this);
        var a = new Set(this);
        return a.symmetricDifference(n);
      }),
      (t.isSubsetOf = function (n) {
        return new Set(this).isSubsetOf(n);
      }),
      (t.isSupersetOf = function (n) {
        return new Set(this).isSupersetOf(n);
      }),
      (t.isDisjointFrom = function (n) {
        if (Vt(n) && !St(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          St(n) && (n = new Set(n)),
          Gt(function () {
            Array.isArray(n)
              ? (a.clear(),
                n.forEach(function (o) {
                  return a.add(o);
                }))
              : Vt(n)
                ? (a.clear(),
                  n.forEach(function (o) {
                    return a.add(o);
                  }))
                : n != null && W("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, a) {
        return Ba(this, n);
      }),
      (t.intercept_ = function (n) {
        return Fa(this, n);
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
      rn(e, [
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
  St = Sr("ObservableSet", sp);
function rl(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), ac(e));
}
var nl = Object.create(null),
  al = "remove",
  cp = (function () {
    function e(r, n, a, o) {
      (n === void 0 && (n = new Map()),
        o === void 0 && (o = qb),
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
        (this.name_ = a),
        (this.defaultAnnotation_ = o),
        (this.keysAtom_ = new ir("ObservableObject.keys")),
        (this.isPlainObject_ = ar(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, a) {
        var o = this.values_.get(n);
        if (o instanceof gt) return (o.set(a), !0);
        if (rt(this)) {
          var i = nt(this, { type: Pt, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!i) return null;
          a = i.newValue;
        }
        if (((a = o.prepareNewValue_(a)), a !== I.UNCHANGED)) {
          var c = vt(this),
            s = !1,
            u =
              c || s
                ? {
                    type: Pt,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), c && pt(this, u));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (I.trackingDerivation && !Kt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, a, o) {
        return (
          o === void 0 && (o = !1),
          Kt(this.target_, n)
            ? this.values_.has(n)
              ? this.setObservablePropValue_(n, a)
              : o
                ? Reflect.set(this.target_, n, a)
                : ((this.target_[n] = a), !0)
            : this.extend_(
                n,
                { value: a, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                o,
              )
        );
      }),
      (t.has_ = function (n) {
        if (!I.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var a = this.pendingKeys_.get(n);
        return (
          a ||
            ((a = new hr(n in this.target_, Go, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var o;
            if ((o = this.target_[Et]) != null && o[n]) return;
            W(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var i = this.target_; i && i !== Uo; ) {
            var c = _o(i, n);
            if (c) {
              var s = a.make_(this, n, c, i);
              if (s === 0) return;
              if (s === 1) break;
            }
            i = Object.getPrototypeOf(i);
          }
          il(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, o, i) {
        if ((i === void 0 && (i = !1), o === !0 && (o = this.defaultAnnotation_), o === !1))
          return this.defineProperty_(n, a, i);
        var c = o.extend_(this, n, a, i);
        return (c && il(this, o, n), c);
      }),
      (t.defineProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          at();
          var i = this.delete_(n);
          if (!i) return i;
          if (rt(this)) {
            var c = nt(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: tr,
              newValue: a.value,
            });
            if (!c) return null;
            var s = c.newValue;
            a.value !== s && (a = _r({}, a, { value: s }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else xt(this.target_, n, a);
          this.notifyPropertyAddition_(n, a.value);
        } finally {
          ot();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, a, o, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          at();
          var c = this.delete_(n);
          if (!c) return c;
          if (rt(this)) {
            var s = nt(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: tr,
              newValue: a,
            });
            if (!s) return null;
            a = s.newValue;
          }
          var u = ol(n),
            l = {
              configurable: I.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: u.get,
              set: u.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else xt(this.target_, n, l);
          var d = new hr(a, o, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          ot();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          at();
          var i = this.delete_(n);
          if (!i) return i;
          if (rt(this)) {
            var c = nt(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: tr,
              newValue: void 0,
            });
            if (!c) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var s = ol(n),
            u = {
              configurable: I.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else xt(this.target_, n, u);
          (this.values_.set(n, new gt(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          ot();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Kt(this.target_, n))) return !0;
        if (rt(this)) {
          var o = nt(this, { object: this.proxy_ || this.target_, name: n, type: al });
          if (!o) return null;
        }
        try {
          var i;
          at();
          var c = vt(this),
            s = !1,
            u = this.values_.get(n),
            l = void 0;
          if (!u && (c || s)) {
            var d;
            l = (d = _o(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (u && (this.values_.delete(n), u instanceof hr && (l = u.value_), Wv(u)),
            this.keysAtom_.reportChanged(),
            (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(n in this.target_),
            c || s)
          ) {
            var f = {
              type: al,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            c && pt(this, f);
          }
        } finally {
          ot();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return Ba(this, n);
      }),
      (t.intercept_ = function (n) {
        return Fa(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var o,
          i = vt(this),
          c = !1;
        if (i || c) {
          var s =
            i || c
              ? {
                  type: tr,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: a,
                }
              : null;
          i && pt(this, s);
        }
        ((o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), Vo(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function nn(e, t) {
  var r;
  if (Kt(e, N)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new cp(e, new Map(), String(n), Qb(t));
  return ($o(e, N, a), e);
}
var W_ = Sr("ObservableObjectAdministration", cp);
function ol(e) {
  return (
    nl[e] ||
    (nl[e] = {
      get: function () {
        return this[N].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[N].setObservablePropValue_(e, r);
      },
    })
  );
}
function Zo(e) {
  return qo(e) ? W_(e[N]) : !1;
}
function il(e, t, r) {
  var n;
  (n = e.target_[Et]) == null || delete n[r];
}
var J_ = lp(0),
  Y_ = (function () {
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
  Mi = 0,
  up = function () {};
function X_(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
X_(up, Array.prototype);
var nc = (function (e) {
  function t(n, a, o, i) {
    var c;
    return (
      o === void 0 && (o = "ObservableArray"),
      i === void 0 && (i = !1),
      (c = e.call(this) || this),
      Cr(function () {
        var s = new rc(o, a, i, !0);
        ((s.proxy_ = c),
          Pv(c, N, s),
          n && n.length && c.spliceWithArray(0, 0, n),
          Y_ && Object.defineProperty(c, "0", J_));
      }),
      c
    );
  }
  Iv(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[N].atom_.reportObserved();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (c) {
          return Xo(c) ? c.slice() : c;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return ac({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    rn(t, [
      {
        key: "length",
        get: function () {
          return this[N].getArrayLength_();
        },
        set: function (a) {
          this[N].setArrayLength_(a);
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
})(up);
Object.entries(So).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && $o(nc.prototype, t, r);
});
function lp(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[N].get_(e);
    },
    set: function (r) {
      this[N].set_(e, r);
    },
  };
}
function Z_(e) {
  xt(nc.prototype, "" + e, lp(e));
}
function dp(e) {
  if (e > Mi) {
    for (var t = Mi; t < e + 100; t++) Z_(t);
    Mi = e;
  }
}
dp(1e3);
function Q_(e, t, r) {
  return new nc(e, t, r);
}
function xo(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Xo(e)) return (t !== void 0 && W(23), e[N].atom_);
    if (St(e)) return e.atom_;
    if (xr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || W(25, t, Ps(e)), r);
    }
    if (Zo(e)) {
      if (!t) return W(26);
      var n = e[N].values_.get(t);
      return (n || W(27, t, Ps(e)), n);
    }
    if (Qs(e) || Yo(e) || Oo(e)) return e;
  } else if (ht(e) && Oo(e[N])) return e[N];
  W(28);
}
function em(e, t) {
  if ((e || W(29), Qs(e) || Yo(e) || Oo(e) || xr(e) || St(e))) return e;
  if (e[N]) return e[N];
  W(24, e);
}
function Ps(e, t) {
  var r;
  if (t !== void 0) r = xo(e, t);
  else {
    if (Kr(e)) return e.name;
    Zo(e) || xr(e) || St(e) ? (r = em(e)) : (r = xo(e));
  }
  return r.name_;
}
function Cr(e) {
  var t = Er(),
    r = Wo(!0);
  at();
  try {
    return e();
  } finally {
    (ot(), Jo(r), Wt(t));
  }
}
var sl = Uo.toString;
function fp(e, t, r) {
  return (r === void 0 && (r = -1), Rs(e, t, r));
}
function Rs(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var i = sl.call(e);
  if (i !== sl.call(t)) return !1;
  switch (i) {
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
  ((e = cl(e)), (t = cl(t)));
  var c = i === "[object Array]";
  if (!c) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      u = t.constructor;
    if (
      s !== u &&
      !(ht(s) && s instanceof s && ht(u) && u instanceof u) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (r === 0) return !1;
  (r < 0 && (r = -1), (n = n || []), (a = a || []));
  for (var l = n.length; l--; ) if (n[l] === e) return a[l] === t;
  if ((n.push(e), a.push(t), c)) {
    if (((l = e.length), l !== t.length)) return !1;
    for (; l--; ) if (!Rs(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var p = 0; p < f; p++) {
      var h = d[p];
      if (!(Kt(t, h) && Rs(e[h], t[h], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function cl(e) {
  return Xo(e) ? e.slice() : tn(e) || xr(e) || Vt(e) || St(e) ? Array.from(e.entries()) : e;
}
var ul,
  tm = ((ul = zo().Iterator) == null ? void 0 : ul.prototype) || {};
function ac(e) {
  return ((e[Symbol.iterator] = rm), Object.assign(Object.create(tm), e));
}
function rm() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = zo();
  typeof t[e] > "u" && W("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: __, extras: { getDebugName: Ps }, $mobx: N });
if (!_.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!ap) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function nm(e) {
  e();
}
function am(e) {
  (e || (e = nm), j_({ reactionScheduler: e }));
}
function om(e) {
  return T_(e);
}
var im = 1e4,
  sm = 1e4,
  cm = (function () {
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
            (n === void 0 && (n = im), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
            var a = Date.now();
            (r.registrations.forEach(function (o, i) {
              a - o.registeredAt >= n && (r.finalize(o.value), r.registrations.delete(i));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, sm));
        },
      }),
      e
    );
  })(),
  um = typeof FinalizationRegistry < "u" ? FinalizationRegistry : cm,
  Ea = new um(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  Li = { exports: {} },
  Ni = {};
var ll;
function lm() {
  if (ll) return Ni;
  ll = 1;
  var e = bt();
  function t(d, f) {
    return (d === f && (d !== 0 || 1 / d === 1 / f)) || (d !== d && f !== f);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    a = e.useEffect,
    o = e.useLayoutEffect,
    i = e.useDebugValue;
  function c(d, f) {
    var p = f(),
      h = n({ inst: { value: p, getSnapshot: f } }),
      v = h[0].inst,
      g = h[1];
    return (
      o(
        function () {
          ((v.value = p), (v.getSnapshot = f), s(v) && g({ inst: v }));
        },
        [d, p, f],
      ),
      a(
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
      i(p),
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
  function u(d, f) {
    return f();
  }
  var l =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? u
      : c;
  return (
    (Ni.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    Ni
  );
}
var dl;
function dm() {
  return (dl || ((dl = 1), (Li.exports = lm())), Li.exports);
}
var fm = dm();
function fl(e) {
  e.reaction = new jt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function vm(e, t) {
  t === void 0 && (t = "observed");
  var r = O.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (c) {
        return (
          Ea.unregister(n),
          (n.onStoreChange = c),
          n.reaction || (fl(n), (n.stateVersion = Symbol())),
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
  var a = r.current;
  (a.reaction || (fl(a), Ea.register(r, a, a)),
    O.useDebugValue(a.reaction, om),
    fm.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
  var o, i;
  if (
    (a.reaction.track(function () {
      try {
        o = e();
      } catch (c) {
        i = c;
      }
    }),
    i)
  )
    throw i;
  return o;
}
var Fi,
  Bi,
  vp = typeof Symbol == "function" && Symbol.for,
  pm =
    (Bi =
      (Fi = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Fi === void 0
        ? void 0
        : Fi.configurable) !== null && Bi !== void 0
      ? Bi
      : !1,
  vl = vp
    ? Symbol.for("react.forward_ref")
    : typeof _.forwardRef == "function" &&
      _.forwardRef(function (e) {
        return null;
      }).$$typeof,
  pl = vp
    ? Symbol.for("react.memo")
    : typeof _.memo == "function" &&
      _.memo(function (e) {
        return null;
      }).$$typeof;
function hm(e, t) {
  var r;
  if (pl && e.$$typeof === pl)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    o = e.displayName || e.name;
  if (vl && e.$$typeof === vl && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var i = function (c, s) {
    return vm(function () {
      return a(c, s);
    }, o);
  };
  return (
    (i.displayName = e.displayName),
    pm && Object.defineProperty(i, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (i.contextTypes = e.contextTypes),
    n && (i = _.forwardRef(i)),
    (i = _.memo(i)),
    bm(e, i),
    i
  );
}
var gm = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function bm(e, t) {
  Object.keys(e).forEach(function (r) {
    gm[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var zi;
am(Lo.unstable_batchedUpdates);
zi = Ea.finalizeAllImmediately;
function _m(e, t) {
  if (hl(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !hl(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function hl(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var gl = Symbol("patchMixins"),
  pp = Symbol("patchedDefinition");
function mm(e, t) {
  var r = (e[gl] = e[gl] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function bl(e, t) {
  for (var r = this, n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    a[o - 2] = arguments[o];
  t.locks++;
  try {
    var i;
    return (e != null && (i = e.apply(this, a)), i);
  } finally {
    (t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (c) {
          c.apply(r, a);
        }));
  }
}
function _l(e, t) {
  var r = function () {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    bl.call.apply(bl, [this, e, t].concat(o));
  };
  return r;
}
function ym(e, t, r) {
  var n = mm(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[pp])) {
    var o = e[t],
      i = hp(e, t, a ? a.enumerable : void 0, n, o);
    Object.defineProperty(e, t, i);
  }
}
function hp(e, t, r, n, a) {
  var o,
    i = _l(a, n);
  return (
    (o = {}),
    (o[pp] = !0),
    (o.get = function () {
      return i;
    }),
    (o.set = function (s) {
      if (this === e) i = _l(s, n);
      else {
        var u = hp(this, t, r, n, s);
        Object.defineProperty(this, t, u);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = r),
    o
  );
}
var ml = Symbol("ObserverAdministration"),
  yl = Symbol("isMobXReactObserver");
function As(e) {
  var t;
  return (t = e[ml]) != null
    ? t
    : (e[ml] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: Is(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function wm(e) {
  var t = e.prototype;
  if (e[yl]) {
    var r = Is(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[yl] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== _.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = wl;
    else if (t.shouldComponentUpdate !== wl)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = Is(e);
    throw new Error(
      "[mobx-react] class component (" +
        a +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  t.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: km.call(this, n),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var i = this,
        c = As(this);
      return (
        (c.mounted = !0),
        Ea.unregister(this),
        (c.forceUpdate = function () {
          return i.forceUpdate();
        }),
        (!c.reaction || c.reactionInvalidatedBeforeMount) && c.forceUpdate(),
        o?.apply(this, arguments)
      );
    }),
    ym(t, "componentWillUnmount", function () {
      var i,
        c = As(this);
      ((i = c.reaction) == null || i.dispose(),
        (c.reaction = null),
        (c.forceUpdate = null),
        (c.mounted = !1),
        (c.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function Is(e) {
  return e.displayName || e.name || "<component>";
}
function km(e) {
  var t = e.bind(this),
    r = As(this);
  function n() {
    r.reaction || ((r.reaction = Om(r)), r.mounted || Ea.register(this, r, this));
    var a = void 0,
      o = void 0;
    if (
      (r.reaction.track(function () {
        try {
          o = u_(!1, t);
        } catch (i) {
          a = i;
        }
      }),
      a)
    )
      throw a;
    return o;
  }
  return n;
}
function Om(e) {
  return new jt(e.name + ".render()", function () {
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
function wl(e, t) {
  return this.state !== t ? !0 : !_m(this.props, e);
}
function Qo(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(_.Component, e) ||
    Object.prototype.isPrototypeOf.call(_.PureComponent, e)
      ? wm(e)
      : hm(e)
  );
}
function js() {
  return (
    (js = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    js.apply(null, arguments)
  );
}
function Sm(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Em = ["children"],
  kl = O.createContext({});
function gp(e) {
  var t = e.children,
    r = Sm(e, Em),
    n = O.useContext(kl),
    a = O.useRef(js({}, n, r)),
    o = a.current;
  return O.createElement(kl.Provider, { value: o }, t);
}
gp.displayName = "MobXProvider";
O.version.split(".")[0];
if (!_.Component) throw new Error("mobx-react requires React to be available");
if (!ae) throw new Error("mobx-react requires mobx to be available");
var xm = Object.defineProperty,
  Cm = Object.getOwnPropertyDescriptor,
  Ee = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? Cm(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && xm(t, r, a), a);
  };
const Ui = "Loading ...";
class we {
  constructor() {
    ((this.state = "ROOT"),
      (this.isLoading = !0),
      (this.message = Ui),
      (this.testNonVersioningData = ""),
      (this.testNumberVersioningData = ""),
      (this.testDateVersioningData = ""),
      (this.testTimestampVersioningData = ""),
      ap(this));
  }
  saveState(t) {
    this.state = t;
  }
  saveResponse(t) {
    ((this.testData = t.testDataId),
      (this.testDataOptimisticNumber = t.testDataOptimisticNumberId),
      (this.testDataOptimisticTimeStampId = t.testDataOptimisticTimeStampId),
      (this.testDataOptimisticDateId = t.testDataOptimisticDateId));
  }
  saveUpdateResponse(t, r) {
    switch (t) {
      case "WITHOUT_VERSIONING": {
        this.testNonVersioningData = r;
        return;
      }
      case "OPTIMISTIC_DATE": {
        this.testDateVersioningData = r;
        return;
      }
      case "OPTIMISTIC_NUMBER": {
        this.testNumberVersioningData = r;
        return;
      }
      case "OPTIMISTIC_TIMESTAMP": {
        this.testTimestampVersioningData = r;
        return;
      }
      default:
        throw new Error("unsupported " + t);
    }
  }
  clearStates(t) {
    switch (t) {
      case "WITHOUT_VERSIONING": {
        this.testNonVersioningData = "";
        return;
      }
      case "OPTIMISTIC_DATE": {
        this.testDateVersioningData = "";
        return;
      }
      case "OPTIMISTIC_NUMBER": {
        this.testNumberVersioningData = "";
        return;
      }
      case "OPTIMISTIC_TIMESTAMP": {
        this.testTimestampVersioningData = "";
        return;
      }
      default:
        throw new Error("unsupported " + t);
    }
  }
  loading(t) {
    ((this.isLoading = !0), (this.message = t ?? Ui));
  }
  stopLoading() {
    ((this.isLoading = !1), (this.message = Ui));
  }
}
Ee([ae], we.prototype, "state", 2);
Ee([ae], we.prototype, "isLoading", 2);
Ee([ae], we.prototype, "message", 2);
Ee([ae], we.prototype, "testData", 2);
Ee([ae], we.prototype, "testDataOptimisticNumber", 2);
Ee([ae], we.prototype, "testDataOptimisticDateId", 2);
Ee([ae], we.prototype, "testDataOptimisticTimeStampId", 2);
Ee([ae], we.prototype, "testNonVersioningData", 2);
Ee([ae], we.prototype, "testNumberVersioningData", 2);
Ee([ae], we.prototype, "testDateVersioningData", 2);
Ee([ae], we.prototype, "testTimestampVersioningData", 2);
Ee([it.bound], we.prototype, "saveState", 1);
Ee([it.bound], we.prototype, "saveResponse", 1);
Ee([it.bound], we.prototype, "saveUpdateResponse", 1);
Ee([it.bound], we.prototype, "clearStates", 1);
Ee([it], we.prototype, "loading", 1);
Ee([it], we.prototype, "stopLoading", 1);
const Pm = new we();
class Rm {
  constructor() {
    this.stateStore = Pm;
  }
}
const bp = new Rm(),
  Am = _.createContext(bp),
  ei = () => _.useContext(Am);
function ge(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ue(e) {
  "@babel/helpers - typeof";
  return (
    (Ue =
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
    Ue(e)
  );
}
function Im(e, t) {
  if (Ue(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ue(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _p(e) {
  var t = Im(e, "string");
  return Ue(t) == "symbol" ? t : t + "";
}
function Ol(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, _p(n.key), n));
  }
}
function be(e, t, r) {
  return (
    t && Ol(e.prototype, t),
    r && Ol(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function jm(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ye(e, t) {
  if (t && (Ue(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return jm(e);
}
function X(e) {
  return (
    (X = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    X(e)
  );
}
function xa(e, t) {
  return (
    (xa = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    xa(e, t)
  );
}
function Xe(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && xa(e, t));
}
function C(e, t, r) {
  return (
    (t = _p(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Re() {}
function mp(e) {
  if (Array.isArray(e)) return e;
}
function Dm(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      a,
      o,
      i,
      c = [],
      s = !0,
      u = !1;
    try {
      if (((o = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = o.call(r)).done) && (c.push(n.value), c.length !== t); s = !0);
    } catch (l) {
      ((u = !0), (a = l));
    } finally {
      try {
        if (!s && r.return != null && ((i = r.return()), Object(i) !== i)) return;
      } finally {
        if (u) throw a;
      }
    }
    return c;
  }
}
function Ds(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function oc(e, t) {
  if (e) {
    if (typeof e == "string") return Ds(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Ds(e, t)
          : void 0
    );
  }
}
function yp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J(e, t) {
  return mp(e) || Dm(e, t) || oc(e, t) || yp();
}
var wp = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  Tm = function (t) {
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
  Co = function (t, r) {
    if (t) {
      var n =
        r &&
        r.cells
          .map(function (a) {
            return a.key;
          })
          .includes(t);
      if (!n)
        try {
          throw Error("Cell with ".concat(t, " key not found in head."));
        } catch (a) {
          console.error(a);
        }
    }
  },
  Mm = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Sl = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  Lm = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = t.destination,
      i = t.sourceIndex;
    if (!o) return r;
    var c = Sl(i, n, a),
      s = Sl(o.index, n, a),
      u = r.slice(),
      l = u.splice(c, 1),
      d = J(l, 1),
      f = d[0];
    return (u.splice(s, 0, f), u);
  };
const Nm = "modulepreload",
  Fm = function (e, t) {
    return new URL(e, t).href;
  },
  El = {},
  Bm = function (t, r, n) {
    let a = Promise.resolve();
    if (r && r.length > 0) {
      let u = function (l) {
        return Promise.all(
          l.map((d) =>
            Promise.resolve(d).then(
              (f) => ({ status: "fulfilled", value: f }),
              (f) => ({ status: "rejected", reason: f }),
            ),
          ),
        );
      };
      const i = document.getElementsByTagName("link"),
        c = document.querySelector("meta[property=csp-nonce]"),
        s = c?.nonce || c?.getAttribute("nonce");
      a = u(
        r.map((l) => {
          if (((l = Fm(l, n)), l in El)) return;
          El[l] = !0;
          const d = l.endsWith(".css"),
            f = d ? '[rel="stylesheet"]' : "";
          if (n)
            for (let h = i.length - 1; h >= 0; h--) {
              const v = i[h];
              if (v.href === l && (!d || v.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${f}`)) return;
          const p = document.createElement("link");
          if (
            ((p.rel = d ? "stylesheet" : Nm),
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
    function o(i) {
      const c = new Event("vite:preloadError", { cancelable: !0 });
      if (((c.payload = i), window.dispatchEvent(c), !c.defaultPrevented)) throw i;
    }
    return a.then((i) => {
      for (const c of i || []) c.status === "rejected" && o(c.reason);
      return t().catch(o);
    });
  };
function Z() {
  return (
    (Z = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Z.apply(null, arguments)
  );
}
function zm(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function te(e, t) {
  if (e == null) return {};
  var r,
    n,
    a = zm(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      ((r = o[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function xl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function qi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xl(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Um = (function () {
  function e(t) {
    var r = this;
    (ge(this, e),
      C(this, "_isAnalyticsEvent", !0),
      C(this, "clone", function () {
        var n = qi({}, r.payload);
        return new e({ payload: n });
      }),
      (this.payload = t.payload));
  }
  return be(e, [
    {
      key: "update",
      value: function (r) {
        return (
          typeof r == "function" && (this.payload = r(this.payload)),
          Ue(r) === "object" && (this.payload = qi(qi({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function qm(e) {
  if (Array.isArray(e)) return Ds(e);
}
function kp(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function $m() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ve(e) {
  return qm(e) || kp(e) || oc(e) || $m();
}
function Vm(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = X(e)) !== null; );
  return e;
}
function Po() {
  return (
    (Po =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = Vm(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    Po.apply(null, arguments)
  );
}
function Gm(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, Op() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
function Hm(e, t, r, n) {
  var a = Po(X(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var Km = (function (e) {
    function t(r) {
      var n;
      return (
        ge(this, t),
        (n = Gm(this, t, [r])),
        C(n, "_isUIAnalyticsEvent", !0),
        C(n, "clone", function () {
          if (n.hasFired) return null;
          var a = Ve(n.context),
            o = Ve(n.handlers),
            i = JSON.parse(JSON.stringify(n.payload));
          return new t({ context: a, handlers: o, payload: i });
        }),
        C(n, "fire", function (a) {
          n.hasFired ||
            (n.handlers.forEach(function (o) {
              return o(n, a);
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
      Xe(t, e),
      be(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : Hm(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(Um),
  Wm = _.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Jm = function () {
    return _.useContext(Wm);
  },
  Ro = function (t) {
    var r = _.useRef(t);
    return ((r.current = t), r);
  };
function Ym(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Xm(e, t) {
  var r = _.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = _.useRef(!0),
    a = _.useRef(r),
    o = n.current || !!(t && a.current.inputs && Ym(t, a.current.inputs)),
    i = o ? a.current : { inputs: t, result: e() };
  return (
    _.useEffect(
      function () {
        ((n.current = !1), (a.current = i));
      },
      [i],
    ),
    i.result
  );
}
function Zm(e, t) {
  return Xm(function () {
    return e;
  }, t);
}
function Sp() {
  var e = Jm(),
    t = Zm(
      function (r) {
        return new Km({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function Cl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Qm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cl(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Jr(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    o = e.packageName,
    i = e.packageVersion,
    c = e.analyticsData,
    s = Sp(),
    u = s.createAnalyticsEvent,
    l = Ro(c),
    d = Ro(t),
    f = _.useCallback(
      function (p) {
        var h = u({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: o, packageVersion: i },
          }),
          v = Qm({ componentName: n, packageName: o, packageVersion: i }, l.current);
        h.context.push(v);
        var g = h.clone();
        (g && g.fire("atlaskit"), d.current(p, h));
      },
      [r, n, a, o, i, u, l, d],
    );
  return f;
}
function Pl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ey(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Pl(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Rl(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    o = e.packageVersion,
    i = e.analyticsData,
    c = Sp(),
    s = c.createAnalyticsEvent,
    u = Ro(i),
    l = Ro(t),
    d = _.useCallback(
      function () {
        var f = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          p = ey({ componentName: n, packageName: a, packageVersion: o }, u.current);
        f.context.push(p);
        var h = f.clone();
        (h && h.fire("atlaskit"), l.current(f));
      },
      [r, n, a, o, s, u, l],
    );
  return d;
}
var wr = "ASC",
  Ao = "DESC",
  ty = "small",
  Io = "large",
  Ep = 0.22;
const ry = 5;
function P(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, ry) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function er(e, t, r) {
  return e ?? "var(--c-, )";
}
var ny = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  ay = _.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      o = e.testId,
      i = e.isLoading,
      c = te(e, ny);
    return _.createElement(
      "table",
      Z(
        {
          inert: i ? "" : void 0,
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
        c,
        {
          "data-testid": o && "".concat(o, "--table"),
          className: P([
            "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
            r && "_1kqm1n9t",
            n && "_179r1uh4",
          ]),
        },
      ),
      a,
    );
  }),
  oy = function (t) {
    var r = t.children;
    return _.createElement(
      "caption",
      { className: P(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  iy = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: P(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  sy = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: P(["_4t3i1jdh"]),
      },
      r,
    );
  },
  cy = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-container"),
        className: P([
          "_19pk1wug _2hwx1wug _otyr1wug _18u01wug _ca0q19bv _u5f319bv _n3td19bv _19bv19bv _1bsb1ssb _y3gn1h6o",
        ]),
      },
      r,
    );
  },
  uy = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function Al(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Il(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Al(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Al(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ly(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, xp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function xp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (xp = function () {
    return !!e;
  })();
}
var jl = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var o;
      if (r.cells[a] && ((o = r.cells[a]) === null || o === void 0 ? void 0 : o.key) === n) {
        var i;
        return (i = t[a]) === null || i === void 0 ? void 0 : i.key;
      }
    }
  },
  dy = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var o = a === wr ? 1 : -1,
      i = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      c = Array.from(r);
    return c.sort(function (s, u) {
      var l = jl(s.cells, t, n),
        d = jl(u.cells, t, n);
      if (l === void 0 || d === void 0) return o;
      if (Ue(l) !== Ue(d)) {
        if (typeof l == "number") return -1;
        if (typeof d == "number") return 1;
        if (typeof l == "string") return -1;
        if (typeof d == "string") return 1;
      }
      return typeof l == "string" && typeof d == "string"
        ? o * i.compare(l, d)
        : (!l && l !== 0) || l < d
          ? -o
          : (!d && d !== 0) || l > d
            ? o
            : l === d
              ? 0
              : 1;
    });
  };
function fy(e) {
  var t = (function (r) {
    function n() {
      var a;
      ge(this, n);
      for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
      return ((a = ly(this, n, [].concat(i))), C(a, "state", { pageRows: [] }), a);
    }
    return (
      Xe(n, r),
      be(
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
            value: function (o, i) {
              this.props.onPageRowsUpdate &&
                this.state.pageRows !== i.pageRows &&
                this.props.onPageRowsUpdate(this.state.pageRows);
            },
          },
          {
            key: "render",
            value: function () {
              var o = this.props;
              o.rows;
              var i = o.head;
              (o.sortKey, o.sortOrder, o.rowsPerPage, o.page);
              var c = o.forwardedRef,
                s = te(o, uy);
              return O.createElement(
                e,
                Z({ pageRows: this.state.pageRows, head: i }, s, { ref: c }),
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (o, i) {
              var c = o.rows,
                s = o.head,
                u = o.sortKey,
                l = o.sortOrder,
                d = o.page,
                f = o.rowsPerPage,
                p = o.isTotalPagesControlledExternally;
              Co(u, s);
              var h, v;
              return (
                p ? ((h = c), (v = c)) : ((h = dy(s, c, u, l) || []), (v = wp(h, d, f))),
                Il(Il({}, i), {}, { pageRows: v })
              );
            },
          },
        ],
      )
    );
  })(O.Component);
  return O.forwardRef(function (r, n) {
    return O.createElement(t, Z({}, r, { forwardedRef: n }));
  });
}
var vy = "--local-dynamic-table-width",
  Cp = function (t) {
    var r = t.width;
    return typeof r < "u" ? C({}, vy, "".concat(r, "%")) : void 0;
  },
  py = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  hy = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      o = t.innerRef,
      i = te(t, py);
    return _.createElement(
      "td",
      Z(
        {
          style: Cp({ width: r }),
          ref: o,
          className: P([
            "_1bsb8a2a",
            n && a && "_1bto1l2s _o5721q9c",
            n && "_1reo15vq _18m915vq",
            "_19itglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
            i.className,
          ]),
        },
        i,
      ),
    );
  },
  gy = ["isHighlighted", "children", "style", "testId", "className"],
  by = _.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      o = e.testId,
      i = e.className,
      c = te(e, gy);
    return _.createElement(
      "tr",
      Z(
        {
          style: a,
          className: P([
            "_bfhkqtfy _1ygbsglb _1ah312gs",
            r ? "_bfhktkjs _irr31ae3" : "_irr3s8ts",
            i,
          ]),
        },
        c,
        { ref: t, "data-testid": o },
      ),
      n,
    );
  }),
  _y = ["cells"],
  my = ["content", "testId"],
  yy = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      o = t.isFixedSize,
      i = t.isHighlighted,
      c = r.cells,
      s = te(r, _y);
    return O.createElement(
      by,
      Z(
        {},
        s,
        { isHighlighted: i },
        i ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(s.key)) },
      ),
      c.map(function (u, l) {
        var d = u.content,
          f = u.testId,
          p = te(u, my),
          h = (n || { cells: [] }).cells[l] || {},
          v = h.shouldTruncate,
          g = h.width;
        return O.createElement(
          hy,
          Z({ "data-testid": f || (a && "".concat(a, "--cell-").concat(l)) }, p, {
            isFixedSize: o,
            key: l,
            shouldTruncate: v,
            width: g,
          }),
          d,
        );
      }),
    );
  };
function wy(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, Pp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Pp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Pp = function () {
    return !!e;
  })();
}
var ky = (function (e) {
    function t() {
      return (ge(this, t), wy(this, t, arguments));
    }
    return (
      Xe(t, e),
      be(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.pageRows,
              o = n.head,
              i = n.isFixedSize,
              c = n.highlightedRowIndex,
              s = n.testId,
              u = n.forwardedRef;
            return O.createElement(
              "tbody",
              { "data-testid": s && "".concat(s, "--body"), ref: u },
              a.map(function (l, d) {
                return O.createElement(yy, {
                  head: o,
                  isFixedSize: i,
                  key: l.key || d,
                  row: l,
                  isHighlighted:
                    l.isHighlighted ||
                    (!!c && (typeof c == "number" ? c === d : c.indexOf(d) > -1)),
                  testId: s,
                });
              }),
            );
          },
        },
      ])
    );
  })(O.Component),
  Oy = fy(
    O.forwardRef(function (e, t) {
      return O.createElement(ky, Z({}, e, { forwardedRef: t }));
    }),
  );
function Sy(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, Rp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Rp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Rp = function () {
    return !!e;
  })();
}
var Ey = (function (e) {
  function t(r) {
    var n;
    return (ge(this, t), (n = Sy(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    Xe(t, e),
    be(
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
})(O.Component);
const ic = _.createContext(null);
var $i = "#0052CC",
  xy = "#0747A6",
  Cy = "#FFFFFF",
  Py = "#EBECF0",
  jo = "#42526E",
  Ry = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function Ay(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(jo, ")")
    : "var(--ds-icon-inverse, ".concat(Cy, ")");
}
var Ja = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  Iy = typeof window > "u" ? _.useEffect : _.useLayoutEffect,
  sc = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "inherit" : n,
        o = t.delay,
        i = o === void 0 ? 0 : o,
        c = t.interactionName,
        s = t.label,
        u = t.size,
        l = u === void 0 ? "medium" : u,
        d = t.testId,
        f = typeof l == "number" ? l : Ry[l],
        p = "".concat(i, "ms"),
        h = Ay(a),
        v = _.useContext(ic);
      return (
        Iy(
          function () {
            if (v != null) return v.hold(c);
          },
          [v, c],
        ),
        O.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: p, width: f, height: f },
            className: P([Ja.wrapperStyles, Ja.rotateStyles]),
          },
          O.createElement(
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
              className: P([Ja.loadInStyles]),
            },
            O.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: P([Ja.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function Dl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Tl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dl(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Dl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ml = "--contents-opacity",
  jy = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: P(["_kqswh2mm"]) },
      r,
    );
  },
  Dy = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: P(["_tzy47hfw _lcxvglyw"]),
        style: Tl(Tl({}, C({}, Ml, n)), {}, { "--_cnddr8": er("var(".concat(Ml, ")")) }),
      },
      r,
    );
  },
  Ty = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: P(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function My(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, Ap() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Ap() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ap = function () {
    return !!e;
  })();
}
var Ip = (function (e) {
  function t() {
    return (ge(this, t), My(this, t, arguments));
  }
  return (
    Xe(t, e),
    be(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            a = n.children,
            o = n.isLoading,
            i = n.spinnerSize,
            c = n.contentsOpacity,
            s = n.testId,
            u = n.loadingLabel;
          return O.createElement(
            jy,
            { testId: s },
            o ? O.createElement(Dy, { contentsOpacity: c, testId: s }, a) : a,
            o &&
              O.createElement(
                Ty,
                { testId: s },
                O.createElement(sc, {
                  size: i,
                  testId: s && "".concat(s, "--loadingSpinner"),
                  label: u,
                }),
              ),
          );
        },
      },
    ])
  );
})(O.Component);
C(Ip, "defaultProps", {
  isLoading: !0,
  spinnerSize: Io,
  contentsOpacity: Ep,
  loadingLabel: "Loading table",
});
var Ly = ["children", "testId"],
  Ny = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = te(e, Ly);
    return _.createElement(
      "div",
      Z({}, a, { "data-testid": n, ref: t, className: P(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  Fy = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: P(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  By = _.forwardRef(function (e, t) {
    var r = e.children;
    return _.createElement("div", { ref: t, className: P(["_kqswh2mm _152tidpf"]) }, r);
  });
function zy(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, jp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function jp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (jp = function () {
    return !!e;
  })();
}
var Dp = (function (e) {
  function t() {
    var r;
    ge(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = zy(this, t, [].concat(a))),
      C(r, "spinnerRef", O.createRef()),
      C(r, "containerRef", O.createRef()),
      C(r, "componentDidMount", function () {
        r.props.isLoading &&
          r.hasTargetNode() &&
          (r.attachListeners(), r.updateTargetAppearance(), r.updateSpinnerPosition());
      }),
      C(r, "UNSAFE_componentWillReceiveProps", function (i) {
        !i.isLoading || !r.hasTargetNode(i)
          ? r.detachListeners()
          : r.props.isLoading || r.attachListeners();
      }),
      C(r, "componentDidUpdate", function () {
        r.hasTargetNode() &&
          (r.updateTargetAppearance(), r.props.isLoading && r.updateSpinnerPosition());
      }),
      C(r, "componentWillUnmount", function () {
        r.detachListeners();
      }),
      C(r, "getTargetNode", function () {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r.props,
          c = i.targetRef,
          s = c?.();
        return s || r.containerRef.current;
      }),
      C(r, "hasTargetNode", function (i) {
        return !!r.getTargetNode(i);
      }),
      C(r, "isVerticallyVisible", function (i, c) {
        var s = i.top,
          u = i.bottom;
        return u <= 0 ? !1 : s < c;
      }),
      C(r, "isFullyVerticallyVisible", function (i, c) {
        var s = i.top,
          u = i.bottom;
        return s >= 0 && u <= c;
      }),
      C(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      C(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      C(r, "translateSpinner", function (i, c, s) {
        ((i.style.position = s ? "fixed" : ""),
          (i.style.transform = c !== 0 ? "translate3d(0, ".concat(c, "px, 0)") : ""));
      }),
      C(r, "updateTargetAppearance", function () {
        var i = r.getTargetNode(),
          c = r.props,
          s = c.isLoading,
          u = c.contentsOpacity;
        i &&
          i.style &&
          Ue(i.style) === "object" &&
          ((i.style.pointerEvents = s ? "none" : ""), (i.style.opacity = s ? u.toString() : ""));
      }),
      r
    );
  }
  return (
    Xe(t, e),
    be(t, [
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
            a,
            o = window.innerHeight,
            i = this.getTargetNode(),
            c = (n = this.spinnerRef) === null || n === void 0 ? void 0 : n.current;
          if (!(!i || typeof i.getBoundingClientRect != "function" || !c)) {
            var s = i.getBoundingClientRect(),
              u = c.getBoundingClientRect(),
              l = u.height,
              d = this.isVerticallyVisible(s, o),
              f = s.top,
              p = s.bottom,
              h = s.height;
            if (d) {
              var v = h >= l * 3;
              if (v && !this.isFullyVerticallyVisible(s, o)) {
                if (f >= 0) {
                  var g = o - f,
                    b = g / 2 + f - l / 2,
                    m = g < l * 3 ? f + l : b;
                  this.translateSpinner(c, m, !0);
                } else if (f < 0 && p > o) {
                  var w = o / 2 - l / 2;
                  this.translateSpinner(c, w, !0);
                } else {
                  var k = p / 2 - l / 2,
                    y = k < l ? k - (l - k) : k;
                  this.translateSpinner(c, y, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(u, o)) return;
            var S = (a = this.containerRef) === null || a === void 0 ? void 0 : a.current;
            if (S && typeof S.getBoundingClientRect == "function") {
              var x = S.getBoundingClientRect().top,
                A = (f - x) / 2;
              this.translateSpinner(c, A, !1);
            }
          }
        },
      },
      {
        key: "render",
        value: function () {
          var n = this.props,
            a = n.children,
            o = n.isLoading,
            i = n.spinnerSize,
            c = n.testId,
            s = n.loadingLabel;
          return O.createElement(
            Ny,
            { testId: c && "".concat(c, "--loading--container--advanced"), ref: this.containerRef },
            a,
            o &&
              O.createElement(
                Fy,
                { testId: c },
                O.createElement(
                  By,
                  { ref: this.spinnerRef },
                  O.createElement(sc, {
                    size: i,
                    testId: c && "".concat(c, "--loadingSpinner"),
                    label: s,
                  }),
                ),
              ),
          );
        },
      },
    ])
  );
})(O.Component);
C(Dp, "defaultProps", {
  isLoading: !0,
  spinnerSize: Io,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Ep), ")"),
  loadingLabel: "Loading table",
});
function Uy(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = _.useState(t),
    a = J(n, 2),
    o = a[0],
    i = a[1],
    c = _.useRef(r);
  _.useEffect(
    function () {
      c.current = r;
    },
    [r],
  );
  var s = r ? e : o,
    u = _.useCallback(function (l) {
      c.current || i(l);
    }, []);
  return [s, u];
}
var Vn = {},
  Gn = {};
function Ll(e, t, r, n, a, o, i) {
  try {
    var c = e[o](i),
      s = c.value;
  } catch (u) {
    return void r(u);
  }
  c.done ? t(s) : Promise.resolve(s).then(n, a);
}
function he(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, a) {
      var o = e.apply(t, r);
      function i(s) {
        Ll(o, n, a, i, c, "next", s);
      }
      function c(s) {
        Ll(o, n, a, i, c, "throw", s);
      }
      i(void 0);
    });
  };
}
var Vi = { exports: {} },
  Gi = { exports: {} },
  Nl;
function Tp() {
  return (
    Nl ||
      ((Nl = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Gi)),
    Gi.exports
  );
}
var Hi = { exports: {} },
  Ki = { exports: {} },
  Fl;
function Mp() {
  return (
    Fl ||
      ((Fl = 1),
      (function (e) {
        function t(r, n, a, o) {
          var i = Object.defineProperty;
          try {
            i({}, "", {});
          } catch {
            i = 0;
          }
          ((e.exports = t =
            function (s, u, l, d) {
              function f(p, h) {
                t(s, p, function (v) {
                  return this._invoke(p, h, v);
                });
              }
              u
                ? i
                  ? i(s, u, { value: l, enumerable: !d, configurable: !d, writable: !d })
                  : (s[u] = l)
                : (f("next", 0), f("throw", 1), f("return", 2));
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r, n, a, o));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ki)),
    Ki.exports
  );
}
var Bl;
function Lp() {
  return (
    Bl ||
      ((Bl = 1),
      (function (e) {
        var t = Mp();
        function r() {
          var n,
            a,
            o = typeof Symbol == "function" ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.toStringTag || "@@toStringTag";
          function s(g, b, m, w) {
            var k = b && b.prototype instanceof l ? b : l,
              y = Object.create(k.prototype);
            return (
              t(
                y,
                "_invoke",
                (function (S, x, A) {
                  var j,
                    R,
                    M,
                    U = 0,
                    B = A || [],
                    $ = !1,
                    q = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: V,
                      f: V.bind(n, 4),
                      d: function (K, F) {
                        return ((j = K), (R = 0), (M = n), (q.n = F), u);
                      },
                    };
                  function V(G, K) {
                    for (R = G, M = K, a = 0; !$ && U && !F && a < B.length; a++) {
                      var F,
                        D = B[a],
                        _e = q.p,
                        ie = D[2];
                      G > 3
                        ? (F = ie === K) &&
                          ((M = D[(R = D[4]) ? 5 : ((R = 3), 3)]), (D[4] = D[5] = n))
                        : D[0] <= _e &&
                          ((F = G < 2 && _e < D[1])
                            ? ((R = 0), (q.v = K), (q.n = D[1]))
                            : _e < ie &&
                              (F = G < 3 || D[0] > K || K > ie) &&
                              ((D[4] = G), (D[5] = K), (q.n = ie), (R = 0)));
                    }
                    if (F || G > 1) return u;
                    throw (($ = !0), K);
                  }
                  return function (G, K, F) {
                    if (U > 1) throw TypeError("Generator is already running");
                    for ($ && K === 1 && V(K, F), R = K, M = F; (a = R < 2 ? n : M) || !$; ) {
                      j || (R ? (R < 3 ? (R > 1 && (q.n = -1), V(R, M)) : (q.n = M)) : (q.v = M));
                      try {
                        if (((U = 2), j)) {
                          if ((R || (G = "next"), (a = j[G]))) {
                            if (!(a = a.call(j, M)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((M = a.value), R < 2 && (R = 0));
                          } else
                            (R === 1 && (a = j.return) && a.call(j),
                              R < 2 &&
                                ((M = TypeError(
                                  "The iterator does not provide a '" + G + "' method",
                                )),
                                (R = 1)));
                          j = n;
                        } else if ((a = ($ = q.n < 0) ? M : S.call(x, q)) !== u) break;
                      } catch (D) {
                        ((j = n), (R = 1), (M = D));
                      } finally {
                        U = 1;
                      }
                    }
                    return { value: a, done: $ };
                  };
                })(g, m, w),
                !0,
              ),
              y
            );
          }
          var u = {};
          function l() {}
          function d() {}
          function f() {}
          a = Object.getPrototypeOf;
          var p = [][i]
              ? a(a([][i]()))
              : (t((a = {}), i, function () {
                  return this;
                }),
                a),
            h = (f.prototype = l.prototype = Object.create(p));
          function v(g) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(g, f)
                : ((g.__proto__ = f), t(g, c, "GeneratorFunction")),
              (g.prototype = Object.create(h)),
              g
            );
          }
          return (
            (d.prototype = f),
            t(h, "constructor", f),
            t(f, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(f, c, "GeneratorFunction"),
            t(h),
            t(h, c, "Generator"),
            t(h, i, function () {
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
      })(Hi)),
    Hi.exports
  );
}
var Wi = { exports: {} },
  Ji = { exports: {} },
  Yi = { exports: {} },
  zl;
function Np() {
  return (
    zl ||
      ((zl = 1),
      (function (e) {
        var t = Tp(),
          r = Mp();
        function n(a, o) {
          function i(s, u, l, d) {
            try {
              var f = a[s](u),
                p = f.value;
              return p instanceof t
                ? o.resolve(p.v).then(
                    function (h) {
                      i("next", h, l, d);
                    },
                    function (h) {
                      i("throw", h, l, d);
                    },
                  )
                : o.resolve(p).then(
                    function (h) {
                      ((f.value = h), l(f));
                    },
                    function (h) {
                      return i("throw", h, l, d);
                    },
                  );
            } catch (h) {
              d(h);
            }
          }
          var c;
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
              function (s, u, l) {
                function d() {
                  return new o(function (f, p) {
                    i(s, l, f, p);
                  });
                }
                return (c = c ? c.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Yi)),
    Yi.exports
  );
}
var Ul;
function Fp() {
  return (
    Ul ||
      ((Ul = 1),
      (function (e) {
        var t = Lp(),
          r = Np();
        function n(a, o, i, c, s) {
          return new r(t().w(a, o, i, c), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ji)),
    Ji.exports
  );
}
var ql;
function qy() {
  return (
    ql ||
      ((ql = 1),
      (function (e) {
        var t = Fp();
        function r(n, a, o, i, c) {
          var s = t(n, a, o, i, c);
          return s.next().then(function (u) {
            return u.done ? u.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Wi)),
    Wi.exports
  );
}
var Xi = { exports: {} },
  $l;
function $y() {
  return (
    $l ||
      (($l = 1),
      (function (e) {
        function t(r) {
          var n = Object(r),
            a = [];
          for (var o in n) a.unshift(o);
          return function i() {
            for (; a.length; ) if ((o = a.pop()) in n) return ((i.value = o), (i.done = !1), i);
            return ((i.done = !0), i);
          };
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Xi)),
    Xi.exports
  );
}
var Zi = { exports: {} },
  Qi = { exports: {} },
  Vl;
function Vy() {
  return (
    Vl ||
      ((Vl = 1),
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
      })(Qi)),
    Qi.exports
  );
}
var Gl;
function Gy() {
  return (
    Gl ||
      ((Gl = 1),
      (function (e) {
        var t = Vy().default;
        function r(n) {
          if (n != null) {
            var a = n[(typeof Symbol == "function" && Symbol.iterator) || "@@iterator"],
              o = 0;
            if (a) return a.call(n);
            if (typeof n.next == "function") return n;
            if (!isNaN(n.length))
              return {
                next: function () {
                  return (n && o >= n.length && (n = void 0), { value: n && n[o++], done: !n });
                },
              };
          }
          throw new TypeError(t(n) + " is not iterable");
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Zi)),
    Zi.exports
  );
}
var Hl;
function Hy() {
  return (
    Hl ||
      ((Hl = 1),
      (function (e) {
        var t = Tp(),
          r = Lp(),
          n = qy(),
          a = Fp(),
          o = Np(),
          i = $y(),
          c = Gy();
        function s() {
          var u = r(),
            l = u.m(s),
            d = (Object.getPrototypeOf ? Object.getPrototypeOf(l) : l.__proto__).constructor;
          function f(v) {
            var g = typeof v == "function" && v.constructor;
            return !!g && (g === d || (g.displayName || g.name) === "GeneratorFunction");
          }
          var p = { throw: 1, return: 2, break: 3, continue: 3 };
          function h(v) {
            var g, b;
            return function (m) {
              (g ||
                ((g = {
                  stop: function () {
                    return b(m.a, 2);
                  },
                  catch: function () {
                    return m.v;
                  },
                  abrupt: function (k, y) {
                    return b(m.a, p[k], y);
                  },
                  delegateYield: function (k, y, S) {
                    return ((g.resultName = y), b(m.d, c(k), S));
                  },
                  finish: function (k) {
                    return b(m.f, k);
                  },
                }),
                (b = function (k, y, S) {
                  ((m.p = g.prev), (m.n = g.next));
                  try {
                    return k(y, S);
                  } finally {
                    g.next = m.n;
                  }
                })),
                g.resultName && ((g[g.resultName] = m.v), (g.resultName = void 0)),
                (g.sent = m.v),
                (g.next = m.n));
              try {
                return v.call(this, g);
              } finally {
                ((m.p = g.prev), (m.n = g.next));
              }
            };
          }
          return ((e.exports = s =
            function () {
              return {
                wrap: function (b, m, w, k) {
                  return u.w(h(b), m, w, k && k.reverse());
                },
                isGeneratorFunction: f,
                mark: u.m,
                awrap: function (b, m) {
                  return new t(b, m);
                },
                AsyncIterator: o,
                async: function (b, m, w, k, y) {
                  return (f(m) ? a : n)(h(b), m, w, k, y);
                },
                keys: i,
                values: c,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Vi)),
    Vi.exports
  );
}
var es, Kl;
function Ky() {
  if (Kl) return es;
  Kl = 1;
  var e = Hy()();
  es = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return es;
}
var Wy = Ky();
const z = or(Wy);
var fr = {},
  Dr = {},
  Ya = {},
  Hn = {},
  Wl;
function Jy() {
  if (Wl) return Hn;
  ((Wl = 1),
    Object.defineProperty(Hn, "__esModule", { value: !0 }),
    (Hn.V1InitializeContainer = void 0));
  const e = It();
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
    _getResultFromLookup(n, a) {
      var o, i;
      return n &&
        (i = (o = n[a]) !== null && o !== void 0 ? o : n[(0, e._DJB2)(a)]) !== null &&
        i !== void 0
        ? i
        : null;
    }
  };
  return ((Hn.V1InitializeContainer = t), Hn);
}
var Kn = {},
  Jl;
function Yy() {
  if (Jl) return Kn;
  ((Jl = 1),
    Object.defineProperty(Kn, "__esModule", { value: !0 }),
    (Kn.V2InitializeContainer = void 0));
  const e = It();
  let t = class {
    constructor(n) {
      this._values = n;
    }
    getGate(n) {
      var a, o, i;
      const c = this._getResultFromLookup(this._values.feature_gates, n);
      return c
        ? {
            name: n,
            value: c.v === !0,
            rule_id: (a = c.r) !== null && a !== void 0 ? a : "default",
            secondary_exposures: (o = c.s) !== null && o !== void 0 ? o : [],
            id_type: (i = c.i) !== null && i !== void 0 ? i : "",
          }
        : null;
    }
    getConfig(n) {
      var a, o, i, c;
      const s = this._getResultFromLookup(this._values.dynamic_configs, n);
      return s
        ? {
            name: n,
            value: (a = this._values.values[s.v]) !== null && a !== void 0 ? a : {},
            rule_id: s.r,
            secondary_exposures: (o = s.s) !== null && o !== void 0 ? o : [],
            id_type: (i = s.i) !== null && i !== void 0 ? i : "",
            is_user_in_experiment: s.ue === !0,
            passed: s.p === !0,
            group_name: (c = s.gn) !== null && c !== void 0 ? c : void 0,
            is_experiment_active: s.ea === !0,
            group: s.r,
            is_device_based: s.i === "stableID",
          }
        : null;
    }
    getLayer(n) {
      var a, o, i, c, s, u;
      const l = this._getResultFromLookup(this._values.layer_configs, n);
      return l
        ? {
            name: n,
            value: (a = this._values.values[l.v]) !== null && a !== void 0 ? a : {},
            rule_id: l.r,
            secondary_exposures: (o = l.s) !== null && o !== void 0 ? o : [],
            is_user_in_experiment: l.ue === !0,
            group_name: (i = l.gn) !== null && i !== void 0 ? i : void 0,
            is_experiment_active: l.ea === !0,
            group: l.r,
            is_device_based: l.i === "stableID",
            allocated_experiment_name: (c = l.ae) !== null && c !== void 0 ? c : "",
            explicit_parameters: (s = l.ep) !== null && s !== void 0 ? s : [],
            undelegated_secondary_exposures: (u = l.us) !== null && u !== void 0 ? u : [],
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
    _getResultFromLookup(n, a) {
      var o, i;
      return n &&
        (i = (o = n[a]) !== null && o !== void 0 ? o : n[(0, e._DJB2)(a)]) !== null &&
        i !== void 0
        ? i
        : null;
    }
  };
  return ((Kn.V2InitializeContainer = t), Kn);
}
var Yl;
function Xy() {
  if (Yl) return Ya;
  ((Yl = 1), Object.defineProperty(Ya, "__esModule", { value: !0 }));
  const e = It(),
    t = Jy(),
    r = Yy();
  let n = class {
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
    setValues(o, i) {
      var c, s;
      if (!o) return !1;
      const u = (0, e._typedJsonParse)(o.data, "has_updates", "EvaluationResponse");
      return u == null
        ? !1
        : ((this._source = o.source),
          u?.has_updates !== !0 ||
            ((c = u.time) !== null && c !== void 0 ? c : 0) < this._lcut ||
            ((this._rawValues = o.data),
            (this._lcut = u.time),
            (this._receivedAt = o.receivedAt),
            u.response_format === "init-v2"
              ? (this._values = new r.V2InitializeContainer(u))
              : (this._values = new t.V1InitializeContainer(u)),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(o.source, u)),
            o.source && u.user && this._setWarningState(i, u),
            e.SDKFlags.setFlags(this._sdkKey, (s = u.sdk_flags) !== null && s !== void 0 ? s : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(o) {
      const i = this._values ? this._values.getGate(o) : null;
      return this._getDetailedStoreResult(i);
    }
    getConfig(o) {
      const i = this._values ? this._values.getConfig(o) : null;
      return this._getDetailedStoreResult(i);
    }
    getConfigList() {
      return this._values ? this._values.getConfigList() : [];
    }
    getLayer(o) {
      const i = this._values ? this._values.getLayer(o) : null;
      return this._getDetailedStoreResult(i);
    }
    getParamStore(o) {
      const i = this._values ? this._values.getParamStore(o) : null;
      return this._getDetailedStoreResult(i);
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var o;
      return (o = this._values) === null || o === void 0 ? void 0 : o.getExposureMapping();
    }
    _extractBootstrapMetadata(o, i) {
      if (o !== "Bootstrap") return null;
      const c = {};
      return (
        i.user && (c.user = i.user),
        i.sdkInfo && (c.generatorSDKInfo = i.sdkInfo),
        (c.lcut = i.time),
        c
      );
    }
    _getDetailedStoreResult(o) {
      return { result: o, details: this._getDetails(o == null) };
    }
    _setWarningState(o, i) {
      var c, s;
      const u = e.StableID.get(this._sdkKey);
      if (
        ((c = o.customIDs) === null || c === void 0 ? void 0 : c.stableID) !== u &&
        ((!((s = o.customIDs) === null || s === void 0) && s.stableID) || u)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in i) {
        const l = i.user,
          d = Object.assign(Object.assign({}, o), {
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
      const o = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (o.warnings = Array.from(this._warnings)), o);
    }
    _getDetails(o) {
      var i, c;
      const s = this.getCurrentSourceDetails();
      let u = s.reason;
      const l = (i = s.warnings) !== null && i !== void 0 ? i : [];
      (this._source === "Bootstrap" && l.length > 0 && (u = u + l[0]),
        u !== "Uninitialized" &&
          u !== "NoValues" &&
          (u = `${u}:${o ? "Unrecognized" : "Recognized"}`));
      const d =
        this._source === "Bootstrap" && (c = this._bootstrapMetadata) !== null && c !== void 0
          ? c
          : void 0;
      return (d && (s.bootstrapMetadata = d), Object.assign(Object.assign({}, s), { reason: u }));
    }
  };
  return ((Ya.default = n), Ya);
}
var Tr = {},
  Wn = {},
  Xl;
function Zy() {
  if (Xl) return Wn;
  ((Xl = 1),
    Object.defineProperty(Wn, "__esModule", { value: !0 }),
    (Wn._resolveDeltasResponse = void 0));
  const e = It(),
    t = 2;
  function r(i, c) {
    const s = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const u = n(i, s),
      l = a(u),
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
  Wn._resolveDeltasResponse = r;
  function n(i, c) {
    return Object.assign(Object.assign(Object.assign({}, i), c), {
      feature_gates: Object.assign(Object.assign({}, i.feature_gates), c.feature_gates),
      layer_configs: Object.assign(Object.assign({}, i.layer_configs), c.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, i.dynamic_configs), c.dynamic_configs),
    });
  }
  function a(i) {
    const c = i;
    return (
      o(i.deleted_gates, c.feature_gates),
      delete c.deleted_gates,
      o(i.deleted_configs, c.dynamic_configs),
      delete c.deleted_configs,
      o(i.deleted_layers, c.layer_configs),
      delete c.deleted_layers,
      c
    );
  }
  function o(i, c) {
    i?.forEach((s) => {
      delete c[s];
    });
  }
  return Wn;
}
var Zl;
function Bp() {
  if (Zl) return Tr;
  Zl = 1;
  var e =
    (Tr && Tr.__awaiter) ||
    function (a, o, i, c) {
      function s(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(h) {
          try {
            p(c.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(c.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? u(h.value) : s(h.value).then(d, f);
        }
        p((c = c.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(Tr, "__esModule", { value: !0 });
  const t = It(),
    r = Zy();
  class n extends t.NetworkCore {
    constructor(o, i) {
      super(o, i);
      const c = o?.networkConfig;
      ((this._option = o),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          c?.initializeUrl,
          c?.api,
          c?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(o, i, c, s, u) {
      return e(this, void 0, void 0, function* () {
        var l, d, f, p, h, v;
        const g = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
        let b = {
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
          const m =
            g?.hash_used !==
            ((v =
              (h = (p = this._option) === null || p === void 0 ? void 0 : p.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && v !== void 0
              ? v
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: u && !m ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && u ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: m ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(o, g, b, c);
      });
    }
    _fetchEvaluations(o, i, c, s) {
      return e(this, void 0, void 0, function* () {
        var u, l;
        const d = yield this.post({
          sdkKey: o,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: s,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (u = d?.body) !== null && u !== void 0 ? u : null;
        if (
          i?.has_updates !== !0 ||
          ((l = d.body) === null || l === void 0 ? void 0 : l.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const f = (0, r._resolveDeltasResponse)(i, d.body);
        return typeof f == "string"
          ? f
          : this._fetchEvaluations(
              o,
              i,
              Object.assign(Object.assign(Object.assign({}, c), f), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((Tr.default = n), Tr);
}
var Jn = {},
  Ql;
function Qy() {
  if (Ql) return Jn;
  ((Ql = 1),
    Object.defineProperty(Jn, "__esModule", { value: !0 }),
    (Jn._makeParamStoreGetter = void 0));
  const e = It(),
    t = { disableExposureLog: !0 };
  function r(l) {
    return l == null || l.disableExposureLog === !1;
  }
  function n(l, d) {
    return d != null && !(0, e._isTypeMatch)(l, d);
  }
  function a(l, d) {
    return l.value;
  }
  function o(l, d, f) {
    return l.getFeatureGate(d.gate_name, r(f) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function i(l, d, f, p) {
    const v = l.getDynamicConfig(d.config_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function c(l, d, f, p) {
    const v = l.getExperiment(d.experiment_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function s(l, d, f, p) {
    const v = l.getLayer(d.layer_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function u(l, d, f) {
    return (p, h) => {
      if (d == null) return h;
      const v = d[p];
      if (v == null || (h != null && (0, e._typeOf)(h) !== v.param_type)) return h;
      switch (v.ref_type) {
        case "static":
          return a(v);
        case "gate":
          return o(l, v, f);
        case "dynamic_config":
          return i(l, v, h, f);
        case "experiment":
          return c(l, v, h, f);
        case "layer":
          return s(l, v, h, f);
        default:
          return h;
      }
    };
  }
  return ((Jn._makeParamStoreGetter = u), Jn);
}
var vr = {},
  ed;
function e0() {
  if (ed) return vr;
  ed = 1;
  var e =
    (vr && vr.__awaiter) ||
    function (a, o, i, c) {
      function s(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(h) {
          try {
            p(c.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(c.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? u(h.value) : s(h.value).then(d, f);
        }
        p((c = c.apply(a, o || [])).next());
      });
    };
  (Object.defineProperty(vr, "__esModule", { value: !0 }),
    (vr.StatsigEvaluationsDataAdapter = void 0));
  const t = It(),
    r = Bp();
  let n = class extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(o, i, c) {
      (super.attach(o, i, c),
        c !== null && c instanceof r.default
          ? (this._network = c)
          : (this._network = new r.default(i ?? {})));
    }
    getDataAsync(o, i, c) {
      return this._getDataAsyncImpl(o, (0, t._normalizeUser)(i, this._options), c);
    }
    prefetchData(o, i) {
      return this._prefetchDataImpl(o, i);
    }
    setData(o) {
      const i = (0, t._typedJsonParse)(o, "has_updates", "data");
      i && "user" in i
        ? super.setData(o, i.user)
        : t.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(o, i) {
      super.setData(o, i);
    }
    _fetchFromNetwork(o, i, c, s) {
      return e(this, void 0, void 0, function* () {
        var u;
        const l = yield (u = this._network) === null || u === void 0
          ? void 0
          : u.fetchEvaluations(this._getSdkKey(), o, c?.priority, i, s);
        return l ?? null;
      });
    }
    _getCacheKey(o) {
      var i;
      const c = (0, t._getStorageKey)(
        this._getSdkKey(),
        o,
        (i = this._options) === null || i === void 0 ? void 0 : i.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${c}`;
    }
    _isCachedResultValidFor204(o, i) {
      return o.fullUserHash != null && o.fullUserHash === (0, t._getFullUserHash)(i);
    }
  };
  return ((vr.StatsigEvaluationsDataAdapter = n), vr);
}
var td;
function t0() {
  if (td) return Dr;
  td = 1;
  var e =
    (Dr && Dr.__awaiter) ||
    function (c, s, u, l) {
      function d(f) {
        return f instanceof u
          ? f
          : new u(function (p) {
              p(f);
            });
      }
      return new (u || (u = Promise))(function (f, p) {
        function h(b) {
          try {
            g(l.next(b));
          } catch (m) {
            p(m);
          }
        }
        function v(b) {
          try {
            g(l.throw(b));
          } catch (m) {
            p(m);
          }
        }
        function g(b) {
          b.done ? f(b.value) : d(b.value).then(h, v);
        }
        g((l = l.apply(c, s || [])).next());
      });
    };
  Object.defineProperty(Dr, "__esModule", { value: !0 });
  const t = It(),
    r = Xy(),
    n = Bp(),
    a = Qy(),
    o = e0();
  let i = class Ts extends t.StatsigClientBase {
    static instance(s) {
      const u = (0, t._getStatsigGlobal)().instance(s);
      return u instanceof Ts
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Ts(s ?? "", {}));
    }
    constructor(s, u, l = null) {
      var d, f;
      t.SDKType._setClientType(s, "javascript-client");
      const p = new n.default(l, (v) => {
        this.$emt(v);
      });
      (super(
        s,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new o.StatsigEvaluationsDataAdapter(),
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
        (this._user = this._configureUser(u, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (f = l?.plugins) !== null && f !== void 0 ? f : [];
      for (const v of h) v.bind(this);
    }
    initializeSync(s) {
      var u;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : []),
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
    updateUserSync(s, u) {
      const l = performance.now();
      try {
        return this._updateUserSyncImpl(s, u, l);
      } catch (d) {
        const f = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(f, l);
      }
    }
    _updateUserSyncImpl(s, u, l) {
      var d;
      const f = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
      const p = this.dataAdapter.getDataSync(this._user);
      (p == null && f.push("NoCachedValues"),
        this._store.setValues(p, this._user),
        this._finalizeUpdate(p));
      const h = u?.disableBackgroundCacheRefresh;
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
    updateUserAsync(s, u) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, u);
        } catch (d) {
          const f = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(f, l);
        }
      });
    }
    _updateUserAsyncImpl(s, u) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(s);
        const l = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(l);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, l, u)),
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
    checkGate(s, u) {
      return this.getFeatureGate(s, u).value;
    }
    logEvent(s, u, l) {
      const d = typeof s == "string" ? { eventName: s, value: u, metadata: l } : s;
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
    _createErrorUpdateDetails(s, u) {
      var l;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - u,
        s,
        null,
        [...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : [])],
      );
    }
    _finalizeUpdate(s) {
      (this._store.finalize(), this._setStatus("Ready", s));
    }
    _runPostUpdate(s, u) {
      this.dataAdapter.getDataAsync(s, u, { priority: "low" }).catch((l) => {
        t.Log.error("An error occurred after update.", l);
      });
    }
    _resetForUser(s) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(s, this._options)));
    }
    _configureUser(s, u) {
      var l, d, f;
      const p = (0, t._normalizeUser)(s, u),
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
    _getFeatureGateImpl(s, u) {
      var l, d;
      const { result: f, details: p } = this._store.getGate(s),
        h = (0, t._makeFeatureGate)(s, p, f),
        v =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, u),
        g = v ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(s, u) {
      var l, d;
      const { result: f, details: p } = this._store.getConfig(s),
        h = (0, t._makeDynamicConfig)(s, p, f),
        v =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, this._user, u),
        g = v ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(s, u) {
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
      const b =
          (p =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || p === void 0
            ? void 0
            : p.call(f, g, this._user, u),
        m = b ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, m, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: m }),
        m
      );
    }
    _getConfigListImpl() {
      return this._store.getConfigList();
    }
    _getLayerImpl(s, u) {
      var l, d, f;
      const { result: p, details: h } = this._store.getLayer(s),
        v = (0, t._makeLayer)(s, h, p),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, v, this._user, u);
      u?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const b = (0, t._mergeOverride)(
        v,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : v.__value,
        (m) => {
          u?.disableExposureLog ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                m,
                this._store.getExposureMapping(),
              ),
              u,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: b }), b);
    }
    _getParameterStoreImpl(s, u) {
      var l, d;
      const { result: f, details: p } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const h = {
          name: s,
          details: p,
          __configuration: f,
          get: (0, a._makeParamStoreGetter)(this, f, u),
        },
        v =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, u);
      return (
        v != null &&
          ((h.__configuration = v.config),
          (h.details = v.details),
          (h.get = (0, a._makeParamStoreGetter)(this, v.config, u))),
        h
      );
    }
  };
  return ((Dr.default = i), Dr);
}
var rd;
function r0() {
  return (
    rd ||
      ((rd = 1),
      (function (e) {
        var t =
            (fr && fr.__createBinding) ||
            (Object.create
              ? function (i, c, s, u) {
                  u === void 0 && (u = s);
                  var l = Object.getOwnPropertyDescriptor(c, s);
                  ((!l || ("get" in l ? !c.__esModule : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return c[s];
                      },
                    }),
                    Object.defineProperty(i, u, l));
                }
              : function (i, c, s, u) {
                  (u === void 0 && (u = s), (i[u] = c[s]));
                }),
          r =
            (fr && fr.__exportStar) ||
            function (i, c) {
              for (var s in i)
                s !== "default" && !Object.prototype.hasOwnProperty.call(c, s) && t(c, i, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = It(),
          a = t0();
        ((e.StatsigClient = a.default), r(It(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(fr)),
    fr
  );
}
var ft = r0(),
  ts = { exports: {} },
  nd;
function n0() {
  return (
    nd ||
      ((nd = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function a(s, u, l) {
          ((this.fn = s), (this.context = u), (this.once = l || !1));
        }
        function o(s, u, l, d, f) {
          if (typeof l != "function") throw new TypeError("The listener must be a function");
          var p = new a(l, d || s, f),
            h = r ? r + u : u;
          return (
            s._events[h]
              ? s._events[h].fn
                ? (s._events[h] = [s._events[h], p])
                : s._events[h].push(p)
              : ((s._events[h] = p), s._eventsCount++),
            s
          );
        }
        function i(s, u) {
          --s._eventsCount === 0 ? (s._events = new n()) : delete s._events[u];
        }
        function c() {
          ((this._events = new n()), (this._eventsCount = 0));
        }
        ((c.prototype.eventNames = function () {
          var u = [],
            l,
            d;
          if (this._eventsCount === 0) return u;
          for (d in (l = this._events)) t.call(l, d) && u.push(r ? d.slice(1) : d);
          return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(l)) : u;
        }),
          (c.prototype.listeners = function (u) {
            var l = r ? r + u : u,
              d = this._events[l];
            if (!d) return [];
            if (d.fn) return [d.fn];
            for (var f = 0, p = d.length, h = new Array(p); f < p; f++) h[f] = d[f].fn;
            return h;
          }),
          (c.prototype.listenerCount = function (u) {
            var l = r ? r + u : u,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (c.prototype.emit = function (u, l, d, f, p, h) {
            var v = r ? r + u : u;
            if (!this._events[v]) return !1;
            var g = this._events[v],
              b = arguments.length,
              m,
              w;
            if (g.fn) {
              switch ((g.once && this.removeListener(u, g.fn, void 0, !0), b)) {
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
              for (w = 1, m = new Array(b - 1); w < b; w++) m[w - 1] = arguments[w];
              g.fn.apply(g.context, m);
            } else {
              var k = g.length,
                y;
              for (w = 0; w < k; w++)
                switch ((g[w].once && this.removeListener(u, g[w].fn, void 0, !0), b)) {
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
                    if (!m) for (y = 1, m = new Array(b - 1); y < b; y++) m[y - 1] = arguments[y];
                    g[w].fn.apply(g[w].context, m);
                }
            }
            return !0;
          }),
          (c.prototype.on = function (u, l, d) {
            return o(this, u, l, d, !1);
          }),
          (c.prototype.once = function (u, l, d) {
            return o(this, u, l, d, !0);
          }),
          (c.prototype.removeListener = function (u, l, d, f) {
            var p = r ? r + u : u;
            if (!this._events[p]) return this;
            if (!l) return (i(this, p), this);
            var h = this._events[p];
            if (h.fn) h.fn === l && (!f || h.once) && (!d || h.context === d) && i(this, p);
            else {
              for (var v = 0, g = [], b = h.length; v < b; v++)
                (h[v].fn !== l || (f && !h[v].once) || (d && h[v].context !== d)) && g.push(h[v]);
              g.length ? (this._events[p] = g.length === 1 ? g[0] : g) : i(this, p);
            }
            return this;
          }),
          (c.prototype.removeAllListeners = function (u) {
            var l;
            return (
              u
                ? ((l = r ? r + u : u), this._events[l] && i(this, l))
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (c.prototype.off = c.prototype.removeListener),
          (c.prototype.addListener = c.prototype.on),
          (c.prefixed = r),
          (c.EventEmitter = c),
          (e.exports = c));
      })(ts)),
    ts.exports
  );
}
var a0 = n0();
const o0 = or(a0);
function ad(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Zt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ad(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ad(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Xa = "@all-features",
  i0 = (function () {
    function e() {
      (ge(this, e), C(this, "eventToValue", new Map()), (this.emitter = new o0()));
    }
    return be(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, o) {
          var i = this,
            c = a(r, Zt(Zt({}, o), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, c);
          var s = function () {
            var l = a(r, Zt(Zt({}, o), {}, { fireGateExposure: !1 })),
              d = i.eventToValue.get(n);
            d !== l && (i.eventToValue.set(n, l), n(l));
          };
          return (
            this.emitter.on(r, s),
            function () {
              i.emitter.off(r, s);
            }
          );
        },
      },
      {
        key: "onExperimentValueUpdated",
        value: function (r, n, a, o, i, c) {
          var s = this,
            u = "".concat(r, ".").concat(n),
            l = i(r, n, a, Zt(Zt({}, c), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(o) === void 0 && this.eventToValue.set(o, l);
          var d = function () {
            var p = i(r, n, a, Zt(Zt({}, c), {}, { fireExperimentExposure: !1 })),
              h = s.eventToValue.get(o);
            h !== p && (s.eventToValue.set(o, p), o(p));
          };
          return (
            this.emitter.on(u, d),
            function () {
              s.emitter.off(u, d);
            }
          );
        },
      },
      {
        key: "onAnyUpdated",
        value: function (r) {
          var n = this;
          return (
            this.emitter.on(Xa, r),
            function () {
              n.emitter.off(Xa, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(Xa),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== Xa;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  s0 = "fedramp-moderate";
function c0() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === s0;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var cc = (function (e) {
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
  da = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  Ca = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  u0 = [
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
function od(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ms(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? od(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : od(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Za = function (t) {
    return Ms({ perimeter: c0() ? Ca.FEDRAMP_MODERATE : Ca.COMMERCIAL }, t);
  },
  Yn = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var o = function (f, p) {
      var h = J(f, 1),
        v = h[0],
        g = J(p, 1),
        b = g[0];
      return v.localeCompare(b);
    };
    (n.sort(o), a.sort(o));
    for (var i = 0; i < n.length; i++) {
      var c = J(n[i], 2),
        s = c[1],
        u = J(a[i], 2),
        l = u[1];
      if (s !== l) return !1;
    }
    return !0;
  },
  id = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  l0 = function (t) {
    var r = t.api,
      n = t.disableCurrentPageLogging,
      a = t.loggingIntervalMillis,
      o = t.loggingBufferMaxSize,
      i = t.localMode,
      c = t.eventLoggingApi,
      s = t.eventLoggingApiForRetries,
      u = t.disableLocalStorage,
      l = t.ignoreWindowUndefined,
      d = t.disableAllLogging;
    (t.initTimeoutMs,
      t.disableNetworkKeepalive,
      t.overrideStableID,
      t.disableErrorLogging,
      t.disableAutoMetricsLogging);
    var f = te(t, u0);
    return Ms(
      Ms({}, f),
      {},
      {
        networkConfig: {
          api: r,
          logEventUrl: c ? c + "rgstr" : void 0,
          logEventFallbackUrls: s ? [s] : void 0,
          preventAllNetworkTraffic: i || (!l && typeof window > "u"),
        },
        includeCurrentPageUrlWithEvents: !n,
        loggingIntervalMs: a,
        loggingBufferMaxSize: o,
        disableStorage: u === void 0 ? i : u,
        disableLogging: d === void 0 ? i : d,
      },
    );
  },
  d0 = Object.entries(cc).map(function (e) {
    var t = J(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  zp = function (t) {
    var r,
      n,
      a,
      o = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = d0.find(function (i) {
            var c = J(i, 1),
              s = c[0];
            return o.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : cc.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  Ls = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  sd = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (ge(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = o),
        (this._allocatedExperimentName = i),
        (this._evaluationDetails = a),
        (this._onDefaultValueFallback = c));
    }
    return be(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var o,
              i = this.getValue(r, n);
            if (i == null) return n;
            var c = Array.isArray(n) ? "array" : Ue(n),
              s = Array.isArray(i) ? "array" : Ue(i);
            if (a) {
              var u;
              return a(i)
                ? (this.fireExposure(r), i)
                : ((u = this._onDefaultValueFallback) === null ||
                    u === void 0 ||
                    u.call(this, this, r, c, s),
                  n);
            }
            return n == null || c === s
              ? (this.fireExposure(r), i)
              : ((o = this._onDefaultValueFallback) === null ||
                  o === void 0 ||
                  o.call(this, this, r, c, s),
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
              a,
              o,
              i = new e(
                r.name,
                r.value,
                r.ruleID,
                zp(r.details),
                Ls(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                (o = r.groupName) !== null && o !== void 0 ? o : void 0,
              );
            return ((i.experiment = r), i);
          },
        },
      ],
    );
  })(),
  cd = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        s = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        u = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (ge(this, e),
        (this._logParameterFunction = o),
        (this._name = t),
        (this._value = JSON.parse(JSON.stringify(r ?? {}))),
        (this._ruleID = n ?? ""),
        (this._evaluationDetails = a),
        (this._secondaryExposures = i),
        (this._undelegatedSecondaryExposures = c),
        (this._allocatedExperimentName = s),
        (this._explicitParameters = u));
    }
    return be(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var o = this,
              i = this._value[r];
            if (i == null) return n;
            var c = function () {
              return (o._logLayerParameterExposure(r), i);
            };
            return a
              ? a(i)
                ? c()
                : n
              : n == null || (Ue(i) === Ue(n) && Array.isArray(n) === Array.isArray(i))
                ? c()
                : n;
          },
        },
        {
          key: "getValue",
          value: function (r, n) {
            n == null && (n = null);
            var a = this._value[r];
            return (a != null && this._logLayerParameterExposure(r), a ?? n);
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
              a,
              o,
              i,
              c,
              s,
              u = new e(
                r.name,
                r.__value,
                r.ruleID,
                zp(r.details),
                function (l, d) {
                  return r.get(d);
                },
                Ls(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                Ls(
                  (o =
                    (i = r.__evaluation) === null || i === void 0
                      ? void 0
                      : i.undelegated_secondary_exposures) !== null && o !== void 0
                    ? o
                    : [],
                ),
                (c = r.__evaluation) === null || c === void 0
                  ? void 0
                  : c.allocated_experiment_name,
                (s = r.__evaluation) === null || s === void 0 ? void 0 : s.explicit_parameters,
              );
            return u;
          },
        },
      ],
    );
  })(),
  Vr = "0.0.0-development";
function f0(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Up() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Up = function () {
    return !!e;
  })();
}
function v0(e, t, r) {
  if (Up()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && xa(a, r.prototype), a);
}
function Ns(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Ns = function (n) {
      if (n === null || !f0(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return v0(n, arguments, X(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        xa(a, n)
      );
    }),
    Ns(e)
  );
}
function p0(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, qp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function qp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (qp = function () {
    return !!e;
  })();
}
var ud = (function (e) {
  function t(r) {
    return (ge(this, t), p0(this, t, [r]));
  }
  return (Xe(t, e), be(t));
})(Ns(Error));
function ld(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function h0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ld(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ld(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var g0 = 5e3,
  b0 = "https://api.atlassian.com/flags",
  _0 = "https://api.stg.atlassian.com/flags",
  m0 = "https://api.dev.atlassian.com/flags",
  y0 = "https://api.stg.atlassian-us-gov-mod.com/flags",
  w0 = "https://api.atlassian-us-gov-mod.com/flags",
  k0 = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  O0 = "oasis-stg.com/flags",
  S0 = "atlassian-isolated.net/flags",
  E0 = "/gateway/api/flags",
  rs = (function () {
    function e() {
      ge(this, e);
    }
    return be(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = he(
            z.mark(function n(a) {
              var o, i;
              return z.wrap(
                function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        return (
                          (o = a.targetApp),
                          (i = "/api/v2/frontend/clientSdkKey/".concat(o)),
                          (s.prev = 2),
                          (s.next = 5),
                          this.fetchRequest(i, "GET", a)
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
          var t = he(
            z.mark(function n(a, o, i) {
              var c;
              return z.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return (
                          (c = { identifiers: o, customAttributes: i, targetApp: a.targetApp }),
                          (u.prev = 1),
                          (u.next = 4),
                          this.fetchRequest("/api/v2/frontend/experimentValues", "POST", a, c)
                        );
                      case 4:
                        return u.abrupt("return", u.sent);
                      case 7:
                        if (((u.prev = 7), (u.t0 = u.catch(1)), !(u.t0 instanceof Error))) {
                          u.next = 11;
                          break;
                        }
                        throw u.t0;
                      case 11:
                        throw Error("Failed to retrieve experiment values");
                      case 12:
                      case "end":
                        return u.stop();
                    }
                },
                n,
                this,
                [[1, 7]],
              );
            }),
          );
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "handleResponseError",
        value: (function () {
          var t = he(
            z.mark(function n(a) {
              var o;
              return z.wrap(function (c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                      if (a.ok) {
                        c.next = 5;
                        break;
                      }
                      return ((c.next = 3), a.text());
                    case 3:
                      throw (
                        (o = c.sent),
                        new ud(
                          "Non 2xx response status received, status: "
                            .concat(a.status, ", body: ")
                            .concat(JSON.stringify(o)),
                        )
                      );
                    case 5:
                      if (a.status !== 204) {
                        c.next = 7;
                        break;
                      }
                      throw new ud("Unexpected 204 response");
                    case 7:
                    case "end":
                      return c.stop();
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
          var t = he(
            z.mark(function n(a) {
              var o;
              return z.wrap(function (c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                      return ((c.next = 2), a.text());
                    case 2:
                      return ((o = c.sent), c.abrupt("return", JSON.parse(o)));
                    case 4:
                    case "end":
                      return c.stop();
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
            a = arguments.length > 2 ? arguments[2] : void 0,
            o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          if (n) return E0;
          if (a === Ca.FEDRAMP_MODERATE)
            switch (r) {
              case da.Production:
                return w0;
              case da.Staging:
                return y0;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === Ca.COMMERCIAL)
            switch (r) {
              case da.Development:
                return m0;
              case da.Staging:
                var i = this.getApiUrl(o);
                return i !== null ? i : _0;
              default:
                var c = this.getApiUrl(o);
                return c !== null ? c : b0;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = he(
            z.mark(function n(a, o, i, c) {
              var s, u, l, d, f;
              return z.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (s = e.getBaseUrl(
                            i.environment,
                            i.useGatewayURL,
                            i.perimeter,
                            i.isolationContextId,
                          )),
                          (u = i.fetchTimeoutMs || g0),
                          AbortSignal.timeout
                            ? (l = AbortSignal.timeout(u))
                            : AbortController &&
                              ((d = new AbortController()),
                              (l = d.signal),
                              setTimeout(function () {
                                return d.abort();
                              }, u)),
                          (h.next = 5),
                          fetch(
                            "".concat(s).concat(a),
                            h0(
                              {
                                method: o,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Vr,
                                  "X-API-KEY": i.apiKey,
                                },
                                signal: l,
                              },
                              c && { body: JSON.stringify(c) },
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
          function r(n, a, o, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "getApiUrl",
        value: function (r) {
          var n = this.getWindowLocation();
          if (n === void 0) return r ? k0.replace("%s", r) : null;
          var a = n.protocol,
            o = n.hostname,
            i = o.match(/([^.]+)\.oasis-stg\.com$/);
          if (i) return "".concat(a, "//api.").concat(i[1], ".").concat(O0);
          var c = o.match(/([^.]+)\.atlassian-isolated\.net$/);
          return c ? "".concat(a, "//api.").concat(c[1], ".").concat(S0) : null;
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
function dd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Xn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : dd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function x0(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, $p() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function $p() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return ($p = function () {
    return !!e;
  })();
}
function C0(e, t, r, n) {
  var a = Po(X(e.prototype), t, r);
  return typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var P0 = (function (e) {
  function t() {
    var r;
    return (
      ge(this, t),
      (r = x0(this, t, ["NoFetchDataAdapter", "nofetch"])),
      C(r, "bootstrapResult", null),
      r
    );
  }
  return (
    Xe(t, e),
    be(t, [
      {
        key: "setBootstrapData",
        value: function (n) {
          this.bootstrapResult = n
            ? {
                source: "Bootstrap",
                data: JSON.stringify(n),
                receivedAt: Date.now(),
                stableID: ft.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = he(
            z.mark(function a(o, i) {
              return z.wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                    case "end":
                      return s.stop();
                  }
              }, a);
            }),
          );
          function n(a, o) {
            return r.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: "getDataAsync",
        value: (function () {
          var r = he(
            z.mark(function a(o, i, c) {
              return z.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return u.abrupt(
                          "return",
                          this.bootstrapResult &&
                            Xn(
                              Xn({}, this.bootstrapResult),
                              {},
                              { fullUserHash: ft._getFullUserHash(i) },
                            ),
                        );
                      case 1:
                      case "end":
                        return u.stop();
                    }
                },
                a,
                this,
              );
            }),
          );
          function n(a, o, i) {
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
            Xn(Xn({}, this.bootstrapResult), {}, { fullUserHash: ft._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = he(
            z.mark(function a(o, i, c) {
              return z.wrap(function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                      return u.abrupt("return", null);
                    case 1:
                    case "end":
                      return u.stop();
                  }
              }, a);
            }),
          );
          function n(a, o, i) {
            return r.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: "_getCacheKey",
        value: function (n) {
          var a = ft._getStorageKey(this._getSdkKey(), n);
          return "".concat(ft.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(a);
        },
      },
      {
        key: "_isCachedResultValidFor204",
        value: function (n, a) {
          return !1;
        },
      },
      {
        key: "setDataLegacy",
        value: function (n, a) {
          C0(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = Xn({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(ft.DataAdapterCore);
function fd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : fd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function R0(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = A0(e)) || t) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (u) {
          throw u;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o,
    i = !0,
    c = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var u = r.next();
      return ((i = u.done), u);
    },
    e: function (u) {
      ((c = !0), (o = u));
    },
    f: function () {
      try {
        i || r.return == null || r.return();
      } finally {
        if (c) throw o;
      }
    },
  };
}
function A0(e, t) {
  if (e) {
    if (typeof e == "string") return vd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? vd(e, t)
          : void 0
    );
  }
}
function vd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var ns = "LocalOverride:Recognized",
  I0 = "STATSIG_OVERRIDES",
  pd = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Mr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  tt = function (t, r) {
    return r + ":" + t;
  },
  j0 = (function () {
    function e(t) {
      (ge(this, e),
        (this._overrides = Mr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return be(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Mr();
          } catch {
            return Mr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Mr(), n = arguments.length, a = new Array(n), o = 0; o < n; o++)
            a[o] = arguments[o];
          for (var i = 0, c = a; i < c.length; i++) {
            for (
              var s = c[i],
                u = 0,
                l = Object.entries((d = s.gates) !== null && d !== void 0 ? d : {});
              u < l.length;
              u++
            ) {
              var d,
                f = J(l[u], 2),
                p = f[0],
                h = f[1];
              r.gates[p] = h;
            }
            for (
              var v = 0, g = Object.entries((b = s.configs) !== null && b !== void 0 ? b : {});
              v < g.length;
              v++
            ) {
              var b,
                m = J(g[v], 2),
                w = m[0],
                k = m[1];
              r.configs[w] = k;
            }
            for (
              var y = 0, S = Object.entries((x = s.layers) !== null && x !== void 0 ? x : {});
              y < S.length;
              y++
            ) {
              var x,
                A = J(S[y], 2),
                j = A[0],
                R = A[1];
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
            this.parseStoredOverrides(pd),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(pd);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var o = a[n],
              i = new Set(Object.keys(o)),
              c = R0(i),
              s;
            try {
              for (c.s(); !(s = c.n()).done; ) {
                var u = s.value,
                  l = et._DJB2(u);
                i.has(l) && delete o[l];
              }
            } catch (d) {
              c.e(d);
            } finally {
              c.f();
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
          var n = Ne(Ne({}, Mr()), r);
          this._djb2Map.clear();
          for (var a = 0, o = Object.entries(n); a < o.length; a++)
            for (
              var i = J(o[a], 2), c = i[0], s = i[1], u = 0, l = Object.entries(s);
              u < l.length;
              u++
            ) {
              var d = J(l[u], 2),
                f = d[0],
                p = d[1];
              this._djb2Map.set(tt(et._DJB2(f), c), p);
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
            this._djb2Map.set(tt(et._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(tt(et._DJB2(r), "gates")),
            this.saveOverrides());
        },
      },
      {
        key: "getGateOverride",
        value: function (r, n) {
          var a,
            o =
              (a = this._overrides.gates[r.name]) !== null && a !== void 0
                ? a
                : this._djb2Map.get(tt(r.name, "gates"));
          return o == null
            ? null
            : Ne(Ne({}, r), {}, { value: o, details: Ne(Ne({}, r.details), {}, { reason: ns }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(tt(et._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(tt(et._DJB2(r), "configs")),
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
            this._djb2Map.set(tt(et._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(tt(et._DJB2(r), "configs")),
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
            this._djb2Map.set(tt(et._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(tt(et._DJB2(r), "layers")),
            this.saveOverrides());
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = Mr();
          try {
            window.localStorage.removeItem(this._localStorageKey);
          } catch {}
        },
      },
      {
        key: "getLayerOverride",
        value: function (r, n) {
          var a,
            o =
              (a = this._overrides.layers[r.name]) !== null && a !== void 0
                ? a
                : this._djb2Map.get(tt(r.name, "layers"));
          return o == null
            ? null
            : Ne(
                Ne({}, r),
                {},
                {
                  __value: o,
                  get: et._makeTypedGet(r.name, o),
                  details: Ne(Ne({}, r.details), {}, { reason: ns }),
                },
              );
        },
      },
      {
        key: "_getConfigOverride",
        value: function (r, n) {
          var a,
            o =
              (a = n[r.name]) !== null && a !== void 0
                ? a
                : this._djb2Map.get(tt(r.name, "configs"));
          return o == null
            ? null
            : Ne(
                Ne({}, r),
                {},
                {
                  value: o,
                  get: et._makeTypedGet(r.name, o),
                  details: Ne(Ne({}, r.details), {}, { reason: ns }),
                },
              );
        },
      },
    ]);
  })(),
  D0 = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function hd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : hd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var gd = "client-default-key",
  T0 = "https://xp.atlassian.com/v1/rgstr",
  M0 = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? I0 : n,
        o = r.overrideAdapter;
      (ge(this, e),
        C(this, "initPromise", null),
        C(this, "initCompleted", !1),
        C(this, "initWithDefaults", !1),
        C(this, "hasCheckGateErrorOccurred", !1),
        C(this, "hasGetExperimentErrorOccurred", !1),
        C(this, "hasGetExperimentValueErrorOccurred", !1),
        C(this, "hasGetLayerErrorOccurred", !1),
        C(this, "hasGetLayerValueErrorOccurred", !1),
        C(this, "subscriptions", new i0()),
        C(this, "dataAdapter", new P0()),
        C(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = o || new j0(a)));
    }
    return be(e, [
      {
        key: "initialize",
        value: (function () {
          var t = he(
            z.mark(function n(a, o, i) {
              var c = this,
                s,
                u;
              return z.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = Za(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          Yn(s, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          d.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (u = performance.now()),
                          (this.initOptions = s),
                          (this.initPromise = this.init(s, o, i)
                            .then(function () {
                              ((c.initCompleted = !0), (c.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var f = performance.now(),
                                p = f - u;
                              c.fireClientEvent(u, p, "initialize", c.initCompleted, s.apiKey);
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
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initializeWithProvider",
        value: (function () {
          var t = he(
            z.mark(function n(a, o, i, c) {
              var s = this,
                u,
                l;
              return z.wrap(
                function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        if (((u = Za(a)), !this.initPromise)) {
                          f.next = 4;
                          break;
                        }
                        return (
                          Yn(u, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          f.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (l = performance.now()),
                          (this.initOptions = u),
                          (this.provider = o),
                          this.provider.setClientVersion(Vr),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(u, o, i, c)
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
                                o.getApiKey ? o.getApiKey() : void 0,
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
          function r(n, a, o, i) {
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
        value: function (r, n, a, o) {
          var i,
            c = this,
            s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
          (i = this.initOptions.analyticsWebClient) === null ||
            i === void 0 ||
            i
              .then(function (u) {
                var l = Qt(
                  {
                    targetApp: c.initOptions.targetApp,
                    clientVersion: Vr,
                    success: o,
                    startTime: r,
                    totalTime: n,
                  },
                  s && { apiKey: s },
                );
                u.sendOperationalEvent({
                  action: a,
                  actionSubject: "featureGatesClient",
                  attributes: l,
                  tags: ["measurement"],
                  source: "@atlaskit/feature-gate-js-client",
                });
              })
              .catch(function (u) {
                c.initOptions.environment !== da.Production &&
                  console.error("Analytics web client promise did not resolve", u);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = he(
            z.mark(function n(a, o, i) {
              var c = this,
                s,
                u,
                l,
                d = arguments;
              return z.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (
                          ((s = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (u = Za(a)),
                          !this.initPromise)
                        ) {
                          p.next = 5;
                          break;
                        }
                        return (
                          Yn(u, this.initOptions) ||
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
                          (this.initOptions = u),
                          (this.initPromise = this.initFromValues(u, o, i, s)
                            .then(function () {
                              ((c.initCompleted = !0), (c.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var h = performance.now(),
                                v = h - l;
                              c.fireClientEvent(l, v, "initializeFromValues", c.initCompleted);
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
          function r(n, a, o) {
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
          var t = he(
            z.mark(function n(a, o, i) {
              var c, s;
              return z.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (c = Za(a)),
                          (s = function () {
                            return rs.fetchExperimentValues(c, o, i).then(function (f) {
                              var p = f.experimentValues,
                                h = f.customAttributes;
                              return { experimentValues: p, customAttributesFromFetch: h };
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(s, o, i)
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
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserWithProvider",
        value: (function () {
          var t = he(
            z.mark(function n(a, o) {
              var i = this;
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
                        return ((s.next = 5), this.provider.setProfile(this.initOptions, a, o));
                      case 5:
                        return (
                          (s.next = 7),
                          this.updateUserUsingInitializeValuesProducer(
                            function () {
                              return i.provider.getExperimentValues();
                            },
                            a,
                            o,
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
          function r(n, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserWithValues",
        value: (function () {
          var t = he(
            z.mark(function n(a, o) {
              var i,
                c,
                s = arguments;
              return z.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          (i = s.length > 2 && s[2] !== void 0 ? s[2] : {}),
                          this.assertInitialized(this.statsigClient),
                          (c = function () {
                            return Promise.resolve({
                              experimentValues: i,
                              customAttributesFromFetch: o,
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(c, a, o)
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
          function r(n, a) {
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
          var t = he(
            z.mark(function n() {
              return z.wrap(
                function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        if (this.initPromise) {
                          o.next = 2;
                          break;
                        }
                        throw new Error(
                          "The client must be initialized before you can wait until initialized.",
                        );
                      case 2:
                        if (!this.initCompleted) {
                          o.next = 4;
                          break;
                        }
                        return o.abrupt("return");
                      case 4:
                        return ((o.next = 6), this.initPromise);
                      case 6:
                      case "end":
                        return o.stop();
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
            var a = n.fireGateExposure,
              o = a === void 0 ? !0 : a;
            return this.statsigClient.checkGate(r, { disableExposureLog: !o });
          } catch (i) {
            return (
              this.hasCheckGateErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred checking the feature gate. Only the first occurrence of this error is logged.",
                  gateName: r,
                  error: i,
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
          } catch (a) {
            return (
              console.error("Error occurred when trying to check FeatureGate: ".concat(a)),
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
          } catch (a) {
            return (
              console.error("Error occurred when trying to check Experiment: ".concat(a)),
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
            var a = n.fireExperimentExposure,
              o = a === void 0 ? !0 : a;
            return sd.fromExperiment(
              this.statsigClient.getExperiment(r, { disableExposureLog: !o }),
            );
          } catch (i) {
            return (
              this.hasGetExperimentErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the experiment. Only the first occurrence of this error is logged.",
                  experimentName: r,
                  error: i,
                }),
                (this.hasGetExperimentErrorOccurred = !0)),
              new sd(r, {}, "", { time: Date.now(), reason: cc.Error })
            );
          }
        },
      },
      {
        key: "getExperimentValue",
        value: function (r, n, a) {
          var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            i = this.getExperiment(r, o);
          try {
            var c = o.typeGuard;
            return i.get(n, a, c);
          } catch (s) {
            return (
              this.hasGetExperimentValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the experiment value. Only the first occurrence of this error is logged.",
                  experimentName: r,
                  defaultValue: a,
                  options: o,
                  error: s,
                }),
                (this.hasGetExperimentValueErrorOccurred = !0)),
              a
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
          var a;
          (this.assertInitialized(this.statsigClient),
            (a = this.statsigClient.getLayer(r)) === null || a === void 0 || a.get(n));
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
            var a;
            (a = this.statsigClient) === null ||
              a === void 0 ||
              a.updateUserSync(this.user, { disableBackgroundCacheRefresh: !0 });
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
          return Yn(this.currentIdentifiers, r) && Yn(this.currentAttributes, n);
        },
      },
      {
        key: "onGateUpdated",
        value: function (r, n) {
          var a = this,
            o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            i = function (s) {
              var u = o.fireGateExposure,
                l = u === void 0 ? !0 : u;
              l && a.manuallyLogGateExposure(r);
              try {
                n(s);
              } catch (d) {
                console.warn(
                  "Error calling callback for gate ".concat(r, " with value ").concat(s),
                  d,
                );
              }
            };
          return this.subscriptions.onGateUpdated(r, i, this.checkGate.bind(this), o);
        },
      },
      {
        key: "onExperimentValueUpdated",
        value: function (r, n, a, o) {
          var i = this,
            c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {},
            s = function (l) {
              var d = c.fireExperimentExposure,
                f = d === void 0 ? !0 : d;
              f && i.manuallyLogExperimentExposure(r);
              try {
                o(l);
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
            a,
            s,
            this.getExperimentValue.bind(this),
            c,
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
          var t = he(
            z.mark(function n(a, o, i) {
              var c, s, u, l, d, f, p, h;
              return z.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (c = Qt({}, a)),
                          (g.prev = 1),
                          (l = rs.fetchClientSdk(a).then(function (b) {
                            return (c.sdkKey = b.clientSdkKey);
                          })),
                          (d = rs.fetchExperimentValues(a, o, i)),
                          (g.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((f = g.sent),
                          (p = J(f, 2)),
                          (h = p[1]),
                          (s = h.experimentValues),
                          (u = h.customAttributes),
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
                          this.initFromValues(c, o, i)
                        );
                      case 19:
                        throw g.t0;
                      case 20:
                        return g.abrupt("return", this.initFromValues(c, o, u, s));
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
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initWithProvider",
        value: (function () {
          var t = he(
            z.mark(function n(a, o, i, c) {
              var s, u, l, d, f, p, h, v;
              return z.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (s = Qt(Qt({}, a), {}, { disableCurrentPageLogging: !0 })),
                          (b.prev = 1),
                          (b.next = 4),
                          o.setProfile(a, i, c)
                        );
                      case 4:
                        return (
                          (d = o.getClientSdkKey().then(function (m) {
                            return (s.sdkKey = m);
                          })),
                          (f = o.getExperimentValues()),
                          (b.next = 8),
                          Promise.all([d, f])
                        );
                      case 8:
                        ((p = b.sent),
                          (h = J(p, 2)),
                          (v = h[1]),
                          (u = v.experimentValues),
                          (l = v.customAttributesFromFetch),
                          (b.next = 22));
                        break;
                      case 15:
                        return (
                          (b.prev = 15),
                          (b.t0 = b.catch(1)),
                          b.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to fetch the Feature Gates client values, error: ".concat(
                                b.t0 === null || b.t0 === void 0 ? void 0 : b.t0.message,
                              ),
                            ),
                          console.warn("Initialising Statsig client without values"),
                          (b.next = 21),
                          this.initFromValues(s, i, c)
                        );
                      case 21:
                        throw b.t0;
                      case 22:
                        return b.abrupt("return", this.initFromValues(s, i, l, u));
                      case 23:
                      case "end":
                        return b.stop();
                    }
                },
                n,
                this,
                [[1, 15]],
              );
            }),
          );
          function r(n, a, o, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initFromValues",
        value: (function () {
          var t = he(
            z.mark(function n(a, o, i) {
              var c,
                s,
                u,
                l,
                d,
                f,
                p,
                h = arguments;
              return z.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = h.length > 3 && h[3] !== void 0 ? h[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = o),
                          (this.currentAttributes = i),
                          (u = l0(a)),
                          u.sdkKey || (u.sdkKey = gd),
                          ((c = u.networkConfig) !== null && c !== void 0 && c.logEventUrl) ||
                            (u.networkConfig = Qt(
                              Qt({}, u.networkConfig),
                              {},
                              { logEventUrl: T0 },
                            )),
                          u.perimeter === Ca.FEDRAMP_MODERATE && (u.disableLogging = !0),
                          (l = u.sdkKey),
                          (d = u.environment),
                          u.updateUserCompletionCallback,
                          u.perimeter,
                          (f = te(u, D0)),
                          (this.user = id(o, i)),
                          (p = Qt(
                            Qt({}, f),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: ft.LogEventCompressionMode.Forced,
                            },
                          )),
                          o.stableId
                            ? ft.StableID.setOverride(o.stableId, l)
                            : (p.disableStableID = !0),
                          (g.prev = 12),
                          (this.statsigClient = new ft.StatsigClient(l, this.user, p)),
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
                          (this.statsigClient = new ft.StatsigClient(gd, this.user, p)),
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
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserUsingInitializeValuesProducer",
        value: (function () {
          var t = he(
            z.mark(function n(a, o, i) {
              var c = this,
                s,
                u,
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
                        if (!this.isCurrentUser(o, i)) {
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
                          (u = a()),
                          (l = this.updateStatsigClientUser(u, o, i)),
                          (this.initPromise = l.catch(
                            he(
                              z.mark(function p() {
                                return z.wrap(function (v) {
                                  for (;;)
                                    switch ((v.prev = v.next)) {
                                      case 0:
                                        if (((c.initPromise = s), !c.provider)) {
                                          v.next = 4;
                                          break;
                                        }
                                        return (
                                          (v.next = 4),
                                          c.provider.setProfile(
                                            c.initOptions,
                                            c.currentIdentifiers,
                                            c.currentAttributes,
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
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateStatsigClientUser",
        value: (function () {
          var t = he(
            z.mark(function n(a, o, i) {
              var c, s, u, l, d, f, p, h, v;
              return z.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (b.prev = 1),
                          (b.next = 4),
                          a
                        );
                      case 4:
                        ((u = b.sent), (l = id(o, u.customAttributesFromFetch)), (b.next = 13));
                        break;
                      case 8:
                        throw (
                          (b.prev = 8),
                          (b.t0 = b.catch(1)),
                          (p = b.t0 instanceof Error ? b.t0.message : JSON.stringify(b.t0)),
                          (d = (f = this.initOptions).updateUserCompletionCallback) === null ||
                            d === void 0 ||
                            d.call(f, !1, p),
                          b.t0
                        );
                      case 13:
                        if (
                          ((h = !0),
                          (v = null),
                          (b.prev = 15),
                          this.dataAdapter.setBootstrapData(u.experimentValues),
                          (this.user = l),
                          !this.user)
                        ) {
                          b.next = 21;
                          break;
                        }
                        return ((b.next = 21), this.statsigClient.updateUserAsync(this.user));
                      case 21:
                        b.next = 27;
                        break;
                      case 23:
                        ((b.prev = 23), (b.t1 = b.catch(15)), (h = !1), (v = String(b.t1)));
                      case 27:
                        if (
                          ((c = this.initOptions) === null ||
                            c === void 0 ||
                            (s = c.updateUserCompletionCallback) === null ||
                            s === void 0 ||
                            s.call(c, h, v),
                          !h)
                        ) {
                          b.next = 34;
                          break;
                        }
                        ((this.currentIdentifiers = o),
                          (this.currentAttributes = i),
                          this.subscriptions.anyUpdated(),
                          (b.next = 35));
                        break;
                      case 34:
                        throw new Error("Failed to update user. An unexpected error occured.");
                      case 35:
                      case "end":
                        return b.stop();
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
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "getPackageVersion",
        value: function () {
          return Vr;
        },
      },
      {
        key: "getLayer",
        value: function (r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          try {
            this.assertInitialized(this.statsigClient);
            var a = n.fireLayerExposure,
              o = a === void 0 ? !0 : a;
            return cd.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !o }));
          } catch (i) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: i,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              cd.fromLayer(ft._makeLayer(r, { reason: "Error" }, null))
            );
          }
        },
      },
      {
        key: "getLayerValue",
        value: function (r, n, a) {
          var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            i = this.getLayer(r, o);
          try {
            var c = o.typeGuard;
            return i.get(n, a, c);
          } catch (s) {
            return (
              this.hasGetLayerValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer value. Only the first occurrence of this error is logged.",
                  layerName: r,
                  defaultValue: a,
                  options: o,
                  error: s,
                }),
                (this.hasGetLayerValueErrorOccurred = !0)),
              a
            );
          }
        },
      },
    ]);
  })(),
  T,
  H = (function () {
    function e() {
      ge(this, e);
    }
    return be(e, null, [
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
T = H;
C(H, "client", new M0());
C(H, "hasCheckGateErrorOccurred", !1);
C(H, "hasGetExperimentValueErrorOccurred", !1);
C(H, "checkGate", function (e, t) {
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
    T.hasCheckGateErrorOccurred ||
      (console.warn({
        msg: "An error has occurred checking the feature gate from criterion override. Only the first occurrence of this error is logged.",
        gateName: e,
        error: n,
      }),
      (T.hasCheckGateErrorOccurred = !0));
  }
  return T.client.checkGate(e, t);
});
C(H, "getExperimentValue", function (e, t, r, n) {
  try {
    if (
      typeof window < "u" &&
      window.__CRITERION__ &&
      typeof window.__CRITERION__.getExperimentValueOverride == "function"
    ) {
      var a = window.__CRITERION__.getExperimentValueOverride(e, t);
      if (a != null) return a;
    }
  } catch (o) {
    return (
      T.hasGetExperimentValueErrorOccurred ||
        (console.warn({
          msg: "An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.",
          experimentName: e,
          defaultValue: r,
          options: n,
          error: o,
        }),
        (T.hasGetExperimentValueErrorOccurred = !0)),
      r
    );
  }
  return T.client.getExperimentValue(e, t, r, n);
});
C(H, "initializeCalled", T.client.initializeCalled.bind(T.client));
C(H, "initializeCompleted", T.client.initializeCompleted.bind(T.client));
C(H, "waitUntilInitializeCompleted", T.client.waitUntilInitializeCompleted.bind(T.client));
C(H, "initialize", T.client.initialize.bind(T.client));
C(H, "initializeWithProvider", T.client.initializeWithProvider.bind(T.client));
C(H, "initializeFromValues", T.client.initializeFromValues.bind(T.client));
C(H, "manuallyLogGateExposure", T.client.manuallyLogGateExposure.bind(T.client));
C(H, "getExperiment", T.client.getExperiment.bind(T.client));
C(H, "manuallyLogExperimentExposure", T.client.manuallyLogExperimentExposure.bind(T.client));
C(H, "manuallyLogLayerExposure", T.client.manuallyLogLayerExposure.bind(T.client));
C(H, "shutdownStatsig", T.client.shutdownStatsig.bind(T.client));
C(H, "overrideGate", T.client.overrideGate.bind(T.client));
C(H, "clearGateOverride", T.client.clearGateOverride.bind(T.client));
C(H, "overrideConfig", T.client.overrideConfig.bind(T.client));
C(H, "clearConfigOverride", T.client.clearConfigOverride.bind(T.client));
C(H, "setOverrides", T.client.setOverrides.bind(T.client));
C(H, "getOverrides", T.client.getOverrides.bind(T.client));
C(H, "clearAllOverrides", T.client.clearAllOverrides.bind(T.client));
C(H, "isCurrentUser", T.client.isCurrentUser.bind(T.client));
C(H, "onGateUpdated", T.client.onGateUpdated.bind(T.client));
C(H, "onExperimentValueUpdated", T.client.onExperimentValueUpdated.bind(T.client));
C(H, "onAnyUpdated", T.client.onAnyUpdated.bind(T.client));
C(H, "updateUser", T.client.updateUser.bind(T.client));
C(H, "updateUserWithProvider", T.client.updateUserWithProvider.bind(T.client));
C(H, "updateUserWithValues", T.client.updateUserWithValues.bind(T.client));
C(H, "getPackageVersion", T.client.getPackageVersion.bind(T.client));
C(H, "getLayer", T.client.getLayer.bind(T.client));
C(H, "getLayerValue", T.client.getLayerValue.bind(T.client));
var Fs = H;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = H;
  else {
    var Qa, as;
    Fs = window.__FEATUREGATES_JS__;
    var bd =
      ((Qa = Fs) === null || Qa === void 0 || (as = Qa.getPackageVersion) === null || as === void 0
        ? void 0
        : as.call(Qa)) || "4.10.0 or earlier";
    if (bd !== Vr) {
      var L0 = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(bd, " when module version ")
        .concat(Vr, " was loading.");
      console.warn(L0);
    }
  }
var Lr,
  Nr,
  N0 =
    (globalThis == null ||
    (Lr = globalThis.process) === null ||
    Lr === void 0 ||
    (Lr = Lr.env) === null ||
    Lr === void 0
      ? void 0
      : Lr.JEST_WORKER_ID) !== void 0,
  F0 =
    !N0 &&
    (globalThis == null ||
    (Nr = globalThis.process) === null ||
    Nr === void 0 ||
    (Nr = Nr.env) === null ||
    Nr === void 0
      ? void 0
      : Nr.NODE_ENV) !== "production",
  B0 = function () {
    var t;
    F0 && (t = console).debug.apply(t, arguments);
  },
  uc = {},
  z0 = "@atlaskit/platform-feature-flags",
  ga = "__PLATFORM_FEATURE_FLAGS__",
  Vp = typeof process < "u" && typeof uc < "u",
  U0 = Vp ? uc.ENABLE_PLATFORM_FF === "true" : !1,
  q0 = Vp ? uc.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  $0 = U0 || q0,
  V0 = { booleanResolver: void 0 },
  ba = typeof window < "u" ? window : globalThis;
ba[ga] = ba[ga] || V0;
function G0(e) {
  if ($0)
    return (
      B0(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        z0,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = ba[ga]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = ba[ga]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return Fs.checkGate(e);
    var a = (n = ba[ga]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function kr(e) {
  return G0(e);
}
var H0 = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  K0 = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  W0 = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  J0 = { core: 16, utility: 12 },
  Y0 = {
    core: {
      medium: { none: 0, compact: 4, spacious: 4 },
      small: { none: 0, compact: 2.66, spacious: 8 },
    },
    utility: {
      medium: { none: 0, compact: 2, spacious: 6 },
      small: { none: 0, compact: 2, spacious: 6 },
    },
  },
  _d = _.memo(function (t) {
    var r,
      n = t,
      a = n.color,
      o = a === void 0 ? "currentColor" : a,
      i = n.testId,
      c = n.label,
      s = n.LEGACY_primaryColor,
      u = n.LEGACY_secondaryColor,
      l = n.LEGACY_size,
      d = n.LEGACY_fallbackIcon,
      f = n.dangerouslySetGlyph,
      p = n.shouldScale,
      h = n.LEGACY_margin,
      v = n.spacing,
      g = v === void 0 ? "none" : v,
      b = n.name,
      m = f ? { __html: f } : void 0;
    if (d && !kr("platform-visual-refresh-icons"))
      return _.createElement(d, {
        primaryColor: s ?? o,
        secondaryColor: u,
        size: l,
        label: c,
        testId: i,
        UNSAFE_margin: h,
      });
    var w = (r = t.type) !== null && r !== void 0 ? r : "core",
      k = "medium";
    if ("size" in t && t.size !== void 0) {
      if (typeof t.size == "string") k = t.size === "small" || t.size === "medium" ? t.size : k;
      else if (b) {
        var y = t.size(b);
        k = y === "small" || y === "medium" ? y : k;
      }
    }
    var S = J0[w],
      x = Y0[w][k][g],
      A = S + 2 * x;
    return _.createElement(
      "span",
      {
        "data-testid": i,
        role: c ? "img" : void 0,
        "aria-label": c || void 0,
        "aria-hidden": c ? void 0 : !0,
        style: { color: o },
        className: P([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          p && "_1bsb1kw7 _4t3i1kw7",
          (w === "utility" || k === "small") && "_vwz4utpp",
        ]),
      },
      _.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - x, " ")
          .concat(0 - x, " ")
          .concat(A, " ")
          .concat(A),
        role: "presentation",
        dangerouslySetInnerHTML: m,
        className: P([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : w === "utility" ? W0[g] : k === "small" ? K0[g] : H0[g],
        ]),
      }),
    );
  });
const X0 = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: _d, default: _d }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  ti = Ys(X0);
var md;
function Z0() {
  if (md) return Gn;
  ((md = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.default = void 0));
  var e = r(bt()),
    t = r(ti);
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ChevronLeftIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" d="m9.97 1.47-6 6a.75.75 0 0 0-.052 1.004l.052.056 6 6 1.06-1.06L5.56 8l5.47-5.47z"/>',
        },
        a,
      ),
    );
  return ((n.displayName = "ChevronLeftIcon"), (Gn.default = n), Gn);
}
var Zn = {};
function yd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function wd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Q0 = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  kd = _.memo(function (t) {
    var r = t,
      n = r.glyph,
      a = r.dangerouslySetGlyph,
      o = r.primaryColor,
      i = o === void 0 ? "currentColor" : o,
      c = r.secondaryColor,
      s = r.size,
      u = r.testId,
      l = r.label,
      d = r.width,
      f = r.height,
      p = r.UNSAFE_margin,
      h = a
        ? { dangerouslySetInnerHTML: { __html: a } }
        : { children: n ? _.createElement(n, { role: "presentation" }) : null },
      v = d && f ? { width: d + "px", height: f + "px" } : null;
    return _.createElement(
      "span",
      Z(
        {
          "data-testid": u,
          "data-vc": "icon-".concat(u),
          role: l ? "img" : void 0,
          "aria-label": l || void 0,
          "aria-hidden": l ? void 0 : !0,
          style: wd(
            wd({}, v),
            {},
            { "--icon-primary-color": i, "--icon-secondary-color": c, margin: p },
          ),
        },
        h,
        {
          className: P([
            "_1e0c1o8l _1o9zidpf _vyfuvuon _vwz4kb7n _1szv15vq _1tly15vq _rzyw1osq _17jb1osq _1ksvoz0e _3se1x1jp _re2rglyw _1veoyfq0 _1kg81r31",
            "_jcxd1r8n _gq0g1onz _1trkwc43",
            i === c && "_18hbwc43",
            c === "transparent" && "_4fyi1j28",
            s && Q0[s],
          ]),
        },
      ),
    );
  });
const ew = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: kd, default: kd }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Gp = Ys(ew);
var Od;
function tw() {
  if (Od) return Zn;
  ((Od = 1), Object.defineProperty(Zn, "__esModule", { value: !0 }), (Zn.default = void 0));
  var e = r(bt()),
    t = Gp;
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.Icon,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" fill-rule="evenodd" d="m9.005 10.995 4.593-4.593a.99.99 0 1 1 1.4 1.4l-3.9 3.9 3.9 3.9a.99.99 0 0 1-1.4 1.4L9.005 12.41a1 1 0 0 1 0-1.414"/></svg>',
        },
        a,
      ),
    );
  return ((n.displayName = "ChevronLeftLargeIcon"), (Zn.default = n), Zn);
}
var Sd;
function rw() {
  if (Sd) return Vn;
  ((Sd = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.default = void 0));
  var e = n(bt()),
    t = n(Z0()),
    r = n(tw());
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  const a = (o) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronLeftIcon", LEGACY_fallbackIcon: r.default }, o),
    );
  return ((a.displayName = "ChevronLeftIconMigration"), (Vn.default = a), Vn);
}
var nw = rw();
const aw = or(nw);
var Qn = {},
  ea = {},
  Ed;
function ow() {
  if (Ed) return ea;
  ((Ed = 1), Object.defineProperty(ea, "__esModule", { value: !0 }), (ea.default = void 0));
  var e = r(bt()),
    t = r(ti);
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ChevronRightIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" d="m6.03 1.47 6 6a.75.75 0 0 1 .052 1.004l-.052.056-6 6-1.06-1.06L10.44 8 4.97 2.53z"/>',
        },
        a,
      ),
    );
  return ((n.displayName = "ChevronRightIcon"), (ea.default = n), ea);
}
var ta = {},
  xd;
function iw() {
  if (xd) return ta;
  ((xd = 1), Object.defineProperty(ta, "__esModule", { value: !0 }), (ta.default = void 0));
  var e = r(bt()),
    t = Gp;
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.Icon,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" fill-rule="evenodd" d="M14.995 10.995a1 1 0 0 1 0 1.414l-4.593 4.593a.99.99 0 0 1-1.4-1.4l3.9-3.9-3.9-3.9a.99.99 0 0 1 1.4-1.4z"/></svg>',
        },
        a,
      ),
    );
  return ((n.displayName = "ChevronRightLargeIcon"), (ta.default = n), ta);
}
var Cd;
function sw() {
  if (Cd) return Qn;
  ((Cd = 1), Object.defineProperty(Qn, "__esModule", { value: !0 }), (Qn.default = void 0));
  var e = n(bt()),
    t = n(ow()),
    r = n(iw());
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  const a = (o) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronRightIcon", LEGACY_fallbackIcon: r.default }, o),
    );
  return ((a.displayName = "ChevronRightIconMigration"), (Qn.default = a), Qn);
}
var cw = sw();
const uw = or(cw);
var lc = _.createContext("elevation.surface"),
  lw = function () {
    return _.useContext(lc);
  };
lc.displayName = "SurfaceProvider";
var dw = [
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
  fw = ["className"],
  vw = {
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
  Hp = {
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
  pw = {
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
  hw = {
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
  gw = {
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
  bw = {
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
  ri = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "div" : r,
      a = e.children,
      o = e.backgroundColor,
      i = e.padding,
      c = e.paddingBlock,
      s = c === void 0 ? i : c,
      u = e.paddingBlockStart,
      l = u === void 0 ? s : u,
      d = e.paddingBlockEnd,
      f = d === void 0 ? s : d,
      p = e.paddingInline,
      h = p === void 0 ? i : p,
      v = e.paddingInlineStart,
      g = v === void 0 ? h : v,
      b = e.paddingInlineEnd,
      m = b === void 0 ? h : b,
      w = e.style,
      k = e.testId,
      y = e.xcss,
      S = te(e, dw);
    S.className;
    var x = te(S, fw),
      A = _.createElement(
        n,
        Z(
          {
            style: w,
            ref: t,
            className: P([
              "_19itglyw _vchhusvi _r06hglyw",
              o && vw[o],
              o && _w(o) && Hp[o],
              l && pw[l],
              f && hw[f],
              g && gw[g],
              m && bw[m],
              y,
            ]),
          },
          x,
          { "data-testid": k },
        ),
        a,
      );
    return o ? _.createElement(lc.Provider, { value: o }, A) : A;
  });
function _w(e) {
  return e in Hp;
}
const os = () =>
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
  Kp = (...e) => P(e);
function mw() {
  return {
    css() {
      throw os();
    },
    cssMap() {
      throw os();
    },
    cx: Kp,
    XCSSProp() {
      throw os();
    },
  };
}
var yw = mw(),
  Wp = yw.cx,
  ww = [
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
  Pd = {
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
  Rd = {
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
  kw = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  Ow = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  Sw = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  Ew = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  xw = { root: "_1e0c1txw _vchhusvi" },
  Do = _.memo(
    _.forwardRef(function (e, t) {
      var r = e.as,
        n = r === void 0 ? "div" : r,
        a = e.role,
        o = e.alignItems,
        i = e.justifyContent,
        c = e.gap,
        s = e.columnGap,
        u = e.rowGap,
        l = e.children,
        d = e.testId,
        f = e.direction,
        p = e.wrap,
        h = e.xcss,
        v = te(e, ww);
      return _.createElement(
        n,
        Z({}, v, {
          role: a,
          className: P([
            xw.root,
            c && Rd[c],
            s && Rd[s],
            c && Pd[c],
            u && Pd[u],
            o && Ew[o],
            f && Ow[f],
            i && kw[i],
            p && Sw[p],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
Do.displayName = "Flex";
var Cw = [
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
  Bs = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  Pw = function (t) {
    var r = t.children;
    return _.createElement("span", { className: P([Bs.separator]) }, r);
  },
  uo = _.memo(
    _.forwardRef(function (e, t) {
      var r = e.as,
        n = e.alignInline,
        a = e.alignBlock,
        o = a === void 0 ? "start" : a,
        i = e.shouldWrap,
        c = i === void 0 ? !1 : i,
        s = e.spread,
        u = e.grow,
        l = e.space,
        d = e.rowSpace,
        f = e.separator,
        p = e.xcss,
        h = e.testId,
        v = e.role,
        g = e.children,
        b = te(e, Cw),
        m = typeof f == "string" ? _.createElement(Pw, null, f) : f,
        w = m
          ? _.Children.toArray(g)
              .filter(Boolean)
              .map(function (k, y) {
                return _.createElement(_.Fragment, { key: y }, f && y > 0 ? m : null, k);
              })
          : g;
      return _.createElement(
        Do,
        Z({}, b, {
          as: r,
          role: v,
          alignItems: o,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: c ? "wrap" : void 0,
          xcss: Wp(u === "hug" && Bs.hug, u === "fill" && Bs.fill, p),
          testId: h,
          ref: t,
        }),
        w,
      );
    }),
  );
uo.displayName = "Inline";
var Rw = "Invariant failed";
function Aw(e, t) {
  if (!e) throw new Error(Rw);
}
var Jp = _.createContext(!1),
  Iw = function () {
    return _.useContext(Jp);
  },
  jw = Jp.Provider,
  Dw = ["span", "p", "strong", "em"],
  Tw = function (t, r) {
    var n = lw();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return Ad.hasOwnProperty(n) ? Ad[n] : "color.text";
    }
  },
  Fr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  Mw = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  Lw = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  Nw = {
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
  Ad = {
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
  Yp = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "span" : r,
      a = e.color,
      o = e.align,
      i = e.testId,
      c = e.id,
      s = e.size,
      u = e.weight,
      l = e.maxLines,
      d = e.xcss,
      f = e.children;
    Aw(Dw.includes(n));
    var p = Iw(),
      h = Tw(a, p);
    !s && !p && (s = "medium");
    var v = _.createElement(
      n,
      {
        id: c,
        className: P([
          Fr.root,
          s && Mw[s],
          h && Nw[h],
          l && Fr.truncation,
          l === 1 && Fr.breakAll,
          o && Fr["textAlign.".concat(o)],
          u && Lw[u],
          n === "em" && Fr["as.em"],
          n === "strong" && Fr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": i,
        ref: t,
      },
      f,
    );
    return p ? v : _.createElement(jw, { value: !0 }, v);
  });
function Fw() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var Bw = ["as", "children", "isInset", "testId", "style", "xcss"],
  zw = ["className"],
  dc = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      o = e.isInset,
      i = e.testId,
      c = e.style,
      s = e.xcss,
      u = te(e, Bw);
    u.className;
    var l = te(u, zw);
    return _.createElement(
      n,
      Z({}, l, {
        ref: t,
        className: P([
          "_ymio1r31 _ypr0glyw _zcxs1o36 _mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          o && "_1ah31gjf _2mwq1gjf",
          s,
        ]),
        style: c,
        "data-testid": i,
      }),
      a,
    );
  }),
  Uw = [
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
  qw = ["className"],
  Id = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  Xp = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      o = a === void 0 ? "button" : a,
      i = e.onClick,
      c = i === void 0 ? Re : i,
      s = e.interactionName,
      u = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      f = e.testId,
      p = e.xcss,
      h = e.tabIndex,
      v = te(e, Uw),
      g = _.useContext(ic),
      b = _.useCallback(
        function (k, y) {
          (g && g.tracePress(s, k.timeStamp), c(k, y));
        },
        [c, g, s],
      ),
      m = Jr({
        fn: b,
        action: "clicked",
        componentName: u || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    v.className;
    var w = te(v, qw);
    return _.createElement(
      dc,
      Z({ as: "button", tabIndex: h ?? (Fw() && !n ? 0 : void 0), style: d }, w, {
        type: o,
        onClick: m,
        disabled: n,
        xcss: Kp(Id.root, n && Id.disabled, p),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  is = {},
  ra = {},
  jd;
function Zp() {
  if (jd) return ra;
  ((jd = 1), Object.defineProperty(ra, "__esModule", { value: !0 }), (ra.bind = void 0));
  function e(t, r) {
    var n = r.type,
      a = r.listener,
      o = r.options;
    return (
      t.addEventListener(n, a, o),
      function () {
        t.removeEventListener(n, a, o);
      }
    );
  }
  return ((ra.bind = e), ra);
}
var pr = {},
  Dd;
function $w() {
  if (Dd) return pr;
  Dd = 1;
  var e =
    (pr && pr.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (o) {
            for (var i, c = 1, s = arguments.length; c < s; c++) {
              i = arguments[c];
              for (var u in i) Object.prototype.hasOwnProperty.call(i, u) && (o[u] = i[u]);
            }
            return o;
          }),
        e.apply(this, arguments)
      );
    };
  (Object.defineProperty(pr, "__esModule", { value: !0 }), (pr.bindAll = void 0));
  var t = Zp();
  function r(o) {
    if (!(typeof o > "u")) return typeof o == "boolean" ? { capture: o } : o;
  }
  function n(o, i) {
    if (i == null) return o;
    var c = e(e({}, o), { options: e(e({}, r(i)), r(o.options)) });
    return c;
  }
  function a(o, i, c) {
    var s = i.map(function (u) {
      var l = n(u, c);
      return (0, t.bind)(o, l);
    });
    return function () {
      s.forEach(function (l) {
        return l();
      });
    };
  }
  return ((pr.bindAll = a), pr);
}
var Td;
function Vw() {
  return (
    Td ||
      ((Td = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = Zp();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = $w();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(is)),
    is
  );
}
var ni = Vw(),
  Gw = {
    "color.text": "--ds-text",
    "color.text.accent.lime": "--ds-text-accent-lime",
    "color.text.accent.lime.bolder": "--ds-text-accent-lime-bolder",
    "color.text.accent.red": "--ds-text-accent-red",
    "color.text.accent.red.bolder": "--ds-text-accent-red-bolder",
    "color.text.accent.orange": "--ds-text-accent-orange",
    "color.text.accent.orange.bolder": "--ds-text-accent-orange-bolder",
    "color.text.accent.yellow": "--ds-text-accent-yellow",
    "color.text.accent.yellow.bolder": "--ds-text-accent-yellow-bolder",
    "color.text.accent.green": "--ds-text-accent-green",
    "color.text.accent.green.bolder": "--ds-text-accent-green-bolder",
    "color.text.accent.teal": "--ds-text-accent-teal",
    "color.text.accent.teal.bolder": "--ds-text-accent-teal-bolder",
    "color.text.accent.blue": "--ds-text-accent-blue",
    "color.text.accent.blue.bolder": "--ds-text-accent-blue-bolder",
    "color.text.accent.purple": "--ds-text-accent-purple",
    "color.text.accent.purple.bolder": "--ds-text-accent-purple-bolder",
    "color.text.accent.magenta": "--ds-text-accent-magenta",
    "color.text.accent.magenta.bolder": "--ds-text-accent-magenta-bolder",
    "color.text.accent.gray": "--ds-text-accent-gray",
    "color.text.accent.gray.bolder": "--ds-text-accent-gray-bolder",
    "color.text.disabled": "--ds-text-disabled",
    "color.text.inverse": "--ds-text-inverse",
    "color.text.selected": "--ds-text-selected",
    "color.text.brand": "--ds-text-brand",
    "color.text.danger": "--ds-text-danger",
    "color.text.warning": "--ds-text-warning",
    "color.text.warning.inverse": "--ds-text-warning-inverse",
    "color.text.success": "--ds-text-success",
    "color.text.discovery": "--ds-text-discovery",
    "color.text.information": "--ds-text-information",
    "color.text.subtlest": "--ds-text-subtlest",
    "color.text.subtle": "--ds-text-subtle",
    "color.link": "--ds-link",
    "color.link.pressed": "--ds-link-pressed",
    "color.link.visited": "--ds-link-visited",
    "color.link.visited.pressed": "--ds-link-visited-pressed",
    "color.icon": "--ds-icon",
    "color.icon.accent.lime": "--ds-icon-accent-lime",
    "color.icon.accent.red": "--ds-icon-accent-red",
    "color.icon.accent.orange": "--ds-icon-accent-orange",
    "color.icon.accent.yellow": "--ds-icon-accent-yellow",
    "color.icon.accent.green": "--ds-icon-accent-green",
    "color.icon.accent.teal": "--ds-icon-accent-teal",
    "color.icon.accent.blue": "--ds-icon-accent-blue",
    "color.icon.accent.purple": "--ds-icon-accent-purple",
    "color.icon.accent.magenta": "--ds-icon-accent-magenta",
    "color.icon.accent.gray": "--ds-icon-accent-gray",
    "color.icon.disabled": "--ds-icon-disabled",
    "color.icon.inverse": "--ds-icon-inverse",
    "color.icon.selected": "--ds-icon-selected",
    "color.icon.brand": "--ds-icon-brand",
    "color.icon.danger": "--ds-icon-danger",
    "color.icon.warning": "--ds-icon-warning",
    "color.icon.warning.inverse": "--ds-icon-warning-inverse",
    "color.icon.success": "--ds-icon-success",
    "color.icon.discovery": "--ds-icon-discovery",
    "color.icon.information": "--ds-icon-information",
    "color.icon.subtlest": "--ds-icon-subtlest",
    "color.icon.subtle": "--ds-icon-subtle",
    "color.border": "--ds-border",
    "color.border.accent.lime": "--ds-border-accent-lime",
    "color.border.accent.red": "--ds-border-accent-red",
    "color.border.accent.orange": "--ds-border-accent-orange",
    "color.border.accent.yellow": "--ds-border-accent-yellow",
    "color.border.accent.green": "--ds-border-accent-green",
    "color.border.accent.teal": "--ds-border-accent-teal",
    "color.border.accent.blue": "--ds-border-accent-blue",
    "color.border.accent.purple": "--ds-border-accent-purple",
    "color.border.accent.magenta": "--ds-border-accent-magenta",
    "color.border.accent.gray": "--ds-border-accent-gray",
    "color.border.disabled": "--ds-border-disabled",
    "color.border.focused": "--ds-border-focused",
    "color.border.input": "--ds-border-input",
    "color.border.inverse": "--ds-border-inverse",
    "color.border.selected": "--ds-border-selected",
    "color.border.brand": "--ds-border-brand",
    "color.border.danger": "--ds-border-danger",
    "color.border.warning": "--ds-border-warning",
    "color.border.success": "--ds-border-success",
    "color.border.discovery": "--ds-border-discovery",
    "color.border.information": "--ds-border-information",
    "color.border.bold": "--ds-border-bold",
    "color.background.accent.lime.subtlest": "--ds-background-accent-lime-subtlest",
    "color.background.accent.lime.subtlest.hovered": "--ds-background-accent-lime-subtlest-hovered",
    "color.background.accent.lime.subtlest.pressed": "--ds-background-accent-lime-subtlest-pressed",
    "color.background.accent.lime.subtler": "--ds-background-accent-lime-subtler",
    "color.background.accent.lime.subtler.hovered": "--ds-background-accent-lime-subtler-hovered",
    "color.background.accent.lime.subtler.pressed": "--ds-background-accent-lime-subtler-pressed",
    "color.background.accent.lime.subtle": "--ds-background-accent-lime-subtle",
    "color.background.accent.lime.subtle.hovered": "--ds-background-accent-lime-subtle-hovered",
    "color.background.accent.lime.subtle.pressed": "--ds-background-accent-lime-subtle-pressed",
    "color.background.accent.lime.bolder": "--ds-background-accent-lime-bolder",
    "color.background.accent.lime.bolder.hovered": "--ds-background-accent-lime-bolder-hovered",
    "color.background.accent.lime.bolder.pressed": "--ds-background-accent-lime-bolder-pressed",
    "color.background.accent.red.subtlest": "--ds-background-accent-red-subtlest",
    "color.background.accent.red.subtlest.hovered": "--ds-background-accent-red-subtlest-hovered",
    "color.background.accent.red.subtlest.pressed": "--ds-background-accent-red-subtlest-pressed",
    "color.background.accent.red.subtler": "--ds-background-accent-red-subtler",
    "color.background.accent.red.subtler.hovered": "--ds-background-accent-red-subtler-hovered",
    "color.background.accent.red.subtler.pressed": "--ds-background-accent-red-subtler-pressed",
    "color.background.accent.red.subtle": "--ds-background-accent-red-subtle",
    "color.background.accent.red.subtle.hovered": "--ds-background-accent-red-subtle-hovered",
    "color.background.accent.red.subtle.pressed": "--ds-background-accent-red-subtle-pressed",
    "color.background.accent.red.bolder": "--ds-background-accent-red-bolder",
    "color.background.accent.red.bolder.hovered": "--ds-background-accent-red-bolder-hovered",
    "color.background.accent.red.bolder.pressed": "--ds-background-accent-red-bolder-pressed",
    "color.background.accent.orange.subtlest": "--ds-background-accent-orange-subtlest",
    "color.background.accent.orange.subtlest.hovered":
      "--ds-background-accent-orange-subtlest-hovered",
    "color.background.accent.orange.subtlest.pressed":
      "--ds-background-accent-orange-subtlest-pressed",
    "color.background.accent.orange.subtler": "--ds-background-accent-orange-subtler",
    "color.background.accent.orange.subtler.hovered":
      "--ds-background-accent-orange-subtler-hovered",
    "color.background.accent.orange.subtler.pressed":
      "--ds-background-accent-orange-subtler-pressed",
    "color.background.accent.orange.subtle": "--ds-background-accent-orange-subtle",
    "color.background.accent.orange.subtle.hovered": "--ds-background-accent-orange-subtle-hovered",
    "color.background.accent.orange.subtle.pressed": "--ds-background-accent-orange-subtle-pressed",
    "color.background.accent.orange.bolder": "--ds-background-accent-orange-bolder",
    "color.background.accent.orange.bolder.hovered": "--ds-background-accent-orange-bolder-hovered",
    "color.background.accent.orange.bolder.pressed": "--ds-background-accent-orange-bolder-pressed",
    "color.background.accent.yellow.subtlest": "--ds-background-accent-yellow-subtlest",
    "color.background.accent.yellow.subtlest.hovered":
      "--ds-background-accent-yellow-subtlest-hovered",
    "color.background.accent.yellow.subtlest.pressed":
      "--ds-background-accent-yellow-subtlest-pressed",
    "color.background.accent.yellow.subtler": "--ds-background-accent-yellow-subtler",
    "color.background.accent.yellow.subtler.hovered":
      "--ds-background-accent-yellow-subtler-hovered",
    "color.background.accent.yellow.subtler.pressed":
      "--ds-background-accent-yellow-subtler-pressed",
    "color.background.accent.yellow.subtle": "--ds-background-accent-yellow-subtle",
    "color.background.accent.yellow.subtle.hovered": "--ds-background-accent-yellow-subtle-hovered",
    "color.background.accent.yellow.subtle.pressed": "--ds-background-accent-yellow-subtle-pressed",
    "color.background.accent.yellow.bolder": "--ds-background-accent-yellow-bolder",
    "color.background.accent.yellow.bolder.hovered": "--ds-background-accent-yellow-bolder-hovered",
    "color.background.accent.yellow.bolder.pressed": "--ds-background-accent-yellow-bolder-pressed",
    "color.background.accent.green.subtlest": "--ds-background-accent-green-subtlest",
    "color.background.accent.green.subtlest.hovered":
      "--ds-background-accent-green-subtlest-hovered",
    "color.background.accent.green.subtlest.pressed":
      "--ds-background-accent-green-subtlest-pressed",
    "color.background.accent.green.subtler": "--ds-background-accent-green-subtler",
    "color.background.accent.green.subtler.hovered": "--ds-background-accent-green-subtler-hovered",
    "color.background.accent.green.subtler.pressed": "--ds-background-accent-green-subtler-pressed",
    "color.background.accent.green.subtle": "--ds-background-accent-green-subtle",
    "color.background.accent.green.subtle.hovered": "--ds-background-accent-green-subtle-hovered",
    "color.background.accent.green.subtle.pressed": "--ds-background-accent-green-subtle-pressed",
    "color.background.accent.green.bolder": "--ds-background-accent-green-bolder",
    "color.background.accent.green.bolder.hovered": "--ds-background-accent-green-bolder-hovered",
    "color.background.accent.green.bolder.pressed": "--ds-background-accent-green-bolder-pressed",
    "color.background.accent.teal.subtlest": "--ds-background-accent-teal-subtlest",
    "color.background.accent.teal.subtlest.hovered": "--ds-background-accent-teal-subtlest-hovered",
    "color.background.accent.teal.subtlest.pressed": "--ds-background-accent-teal-subtlest-pressed",
    "color.background.accent.teal.subtler": "--ds-background-accent-teal-subtler",
    "color.background.accent.teal.subtler.hovered": "--ds-background-accent-teal-subtler-hovered",
    "color.background.accent.teal.subtler.pressed": "--ds-background-accent-teal-subtler-pressed",
    "color.background.accent.teal.subtle": "--ds-background-accent-teal-subtle",
    "color.background.accent.teal.subtle.hovered": "--ds-background-accent-teal-subtle-hovered",
    "color.background.accent.teal.subtle.pressed": "--ds-background-accent-teal-subtle-pressed",
    "color.background.accent.teal.bolder": "--ds-background-accent-teal-bolder",
    "color.background.accent.teal.bolder.hovered": "--ds-background-accent-teal-bolder-hovered",
    "color.background.accent.teal.bolder.pressed": "--ds-background-accent-teal-bolder-pressed",
    "color.background.accent.blue.subtlest": "--ds-background-accent-blue-subtlest",
    "color.background.accent.blue.subtlest.hovered": "--ds-background-accent-blue-subtlest-hovered",
    "color.background.accent.blue.subtlest.pressed": "--ds-background-accent-blue-subtlest-pressed",
    "color.background.accent.blue.subtler": "--ds-background-accent-blue-subtler",
    "color.background.accent.blue.subtler.hovered": "--ds-background-accent-blue-subtler-hovered",
    "color.background.accent.blue.subtler.pressed": "--ds-background-accent-blue-subtler-pressed",
    "color.background.accent.blue.subtle": "--ds-background-accent-blue-subtle",
    "color.background.accent.blue.subtle.hovered": "--ds-background-accent-blue-subtle-hovered",
    "color.background.accent.blue.subtle.pressed": "--ds-background-accent-blue-subtle-pressed",
    "color.background.accent.blue.bolder": "--ds-background-accent-blue-bolder",
    "color.background.accent.blue.bolder.hovered": "--ds-background-accent-blue-bolder-hovered",
    "color.background.accent.blue.bolder.pressed": "--ds-background-accent-blue-bolder-pressed",
    "color.background.accent.purple.subtlest": "--ds-background-accent-purple-subtlest",
    "color.background.accent.purple.subtlest.hovered":
      "--ds-background-accent-purple-subtlest-hovered",
    "color.background.accent.purple.subtlest.pressed":
      "--ds-background-accent-purple-subtlest-pressed",
    "color.background.accent.purple.subtler": "--ds-background-accent-purple-subtler",
    "color.background.accent.purple.subtler.hovered":
      "--ds-background-accent-purple-subtler-hovered",
    "color.background.accent.purple.subtler.pressed":
      "--ds-background-accent-purple-subtler-pressed",
    "color.background.accent.purple.subtle": "--ds-background-accent-purple-subtle",
    "color.background.accent.purple.subtle.hovered": "--ds-background-accent-purple-subtle-hovered",
    "color.background.accent.purple.subtle.pressed": "--ds-background-accent-purple-subtle-pressed",
    "color.background.accent.purple.bolder": "--ds-background-accent-purple-bolder",
    "color.background.accent.purple.bolder.hovered": "--ds-background-accent-purple-bolder-hovered",
    "color.background.accent.purple.bolder.pressed": "--ds-background-accent-purple-bolder-pressed",
    "color.background.accent.magenta.subtlest": "--ds-background-accent-magenta-subtlest",
    "color.background.accent.magenta.subtlest.hovered":
      "--ds-background-accent-magenta-subtlest-hovered",
    "color.background.accent.magenta.subtlest.pressed":
      "--ds-background-accent-magenta-subtlest-pressed",
    "color.background.accent.magenta.subtler": "--ds-background-accent-magenta-subtler",
    "color.background.accent.magenta.subtler.hovered":
      "--ds-background-accent-magenta-subtler-hovered",
    "color.background.accent.magenta.subtler.pressed":
      "--ds-background-accent-magenta-subtler-pressed",
    "color.background.accent.magenta.subtle": "--ds-background-accent-magenta-subtle",
    "color.background.accent.magenta.subtle.hovered":
      "--ds-background-accent-magenta-subtle-hovered",
    "color.background.accent.magenta.subtle.pressed":
      "--ds-background-accent-magenta-subtle-pressed",
    "color.background.accent.magenta.bolder": "--ds-background-accent-magenta-bolder",
    "color.background.accent.magenta.bolder.hovered":
      "--ds-background-accent-magenta-bolder-hovered",
    "color.background.accent.magenta.bolder.pressed":
      "--ds-background-accent-magenta-bolder-pressed",
    "color.background.accent.gray.subtlest": "--ds-background-accent-gray-subtlest",
    "color.background.accent.gray.subtlest.hovered": "--ds-background-accent-gray-subtlest-hovered",
    "color.background.accent.gray.subtlest.pressed": "--ds-background-accent-gray-subtlest-pressed",
    "color.background.accent.gray.subtler": "--ds-background-accent-gray-subtler",
    "color.background.accent.gray.subtler.hovered": "--ds-background-accent-gray-subtler-hovered",
    "color.background.accent.gray.subtler.pressed": "--ds-background-accent-gray-subtler-pressed",
    "color.background.accent.gray.subtle": "--ds-background-accent-gray-subtle",
    "color.background.accent.gray.subtle.hovered": "--ds-background-accent-gray-subtle-hovered",
    "color.background.accent.gray.subtle.pressed": "--ds-background-accent-gray-subtle-pressed",
    "color.background.accent.gray.bolder": "--ds-background-accent-gray-bolder",
    "color.background.accent.gray.bolder.hovered": "--ds-background-accent-gray-bolder-hovered",
    "color.background.accent.gray.bolder.pressed": "--ds-background-accent-gray-bolder-pressed",
    "color.background.disabled": "--ds-background-disabled",
    "color.background.input": "--ds-background-input",
    "color.background.input.hovered": "--ds-background-input-hovered",
    "color.background.input.pressed": "--ds-background-input-pressed",
    "color.background.inverse.subtle": "--ds-background-inverse-subtle",
    "color.background.inverse.subtle.hovered": "--ds-background-inverse-subtle-hovered",
    "color.background.inverse.subtle.pressed": "--ds-background-inverse-subtle-pressed",
    "color.background.neutral": "--ds-background-neutral",
    "color.background.neutral.hovered": "--ds-background-neutral-hovered",
    "color.background.neutral.pressed": "--ds-background-neutral-pressed",
    "color.background.neutral.subtle": "--ds-background-neutral-subtle",
    "color.background.neutral.subtle.hovered": "--ds-background-neutral-subtle-hovered",
    "color.background.neutral.subtle.pressed": "--ds-background-neutral-subtle-pressed",
    "color.background.neutral.bold": "--ds-background-neutral-bold",
    "color.background.neutral.bold.hovered": "--ds-background-neutral-bold-hovered",
    "color.background.neutral.bold.pressed": "--ds-background-neutral-bold-pressed",
    "color.background.selected": "--ds-background-selected",
    "color.background.selected.hovered": "--ds-background-selected-hovered",
    "color.background.selected.pressed": "--ds-background-selected-pressed",
    "color.background.selected.bold": "--ds-background-selected-bold",
    "color.background.selected.bold.hovered": "--ds-background-selected-bold-hovered",
    "color.background.selected.bold.pressed": "--ds-background-selected-bold-pressed",
    "color.background.brand.subtlest": "--ds-background-brand-subtlest",
    "color.background.brand.subtlest.hovered": "--ds-background-brand-subtlest-hovered",
    "color.background.brand.subtlest.pressed": "--ds-background-brand-subtlest-pressed",
    "color.background.brand.bold": "--ds-background-brand-bold",
    "color.background.brand.bold.hovered": "--ds-background-brand-bold-hovered",
    "color.background.brand.bold.pressed": "--ds-background-brand-bold-pressed",
    "color.background.brand.boldest": "--ds-background-brand-boldest",
    "color.background.brand.boldest.hovered": "--ds-background-brand-boldest-hovered",
    "color.background.brand.boldest.pressed": "--ds-background-brand-boldest-pressed",
    "color.background.danger": "--ds-background-danger",
    "color.background.danger.hovered": "--ds-background-danger-hovered",
    "color.background.danger.pressed": "--ds-background-danger-pressed",
    "color.background.danger.bold": "--ds-background-danger-bold",
    "color.background.danger.bold.hovered": "--ds-background-danger-bold-hovered",
    "color.background.danger.bold.pressed": "--ds-background-danger-bold-pressed",
    "color.background.warning": "--ds-background-warning",
    "color.background.warning.hovered": "--ds-background-warning-hovered",
    "color.background.warning.pressed": "--ds-background-warning-pressed",
    "color.background.warning.bold": "--ds-background-warning-bold",
    "color.background.warning.bold.hovered": "--ds-background-warning-bold-hovered",
    "color.background.warning.bold.pressed": "--ds-background-warning-bold-pressed",
    "color.background.success": "--ds-background-success",
    "color.background.success.hovered": "--ds-background-success-hovered",
    "color.background.success.pressed": "--ds-background-success-pressed",
    "color.background.success.bold": "--ds-background-success-bold",
    "color.background.success.bold.hovered": "--ds-background-success-bold-hovered",
    "color.background.success.bold.pressed": "--ds-background-success-bold-pressed",
    "color.background.discovery": "--ds-background-discovery",
    "color.background.discovery.hovered": "--ds-background-discovery-hovered",
    "color.background.discovery.pressed": "--ds-background-discovery-pressed",
    "color.background.discovery.bold": "--ds-background-discovery-bold",
    "color.background.discovery.bold.hovered": "--ds-background-discovery-bold-hovered",
    "color.background.discovery.bold.pressed": "--ds-background-discovery-bold-pressed",
    "color.background.information": "--ds-background-information",
    "color.background.information.hovered": "--ds-background-information-hovered",
    "color.background.information.pressed": "--ds-background-information-pressed",
    "color.background.information.bold": "--ds-background-information-bold",
    "color.background.information.bold.hovered": "--ds-background-information-bold-hovered",
    "color.background.information.bold.pressed": "--ds-background-information-bold-pressed",
    "color.blanket": "--ds-blanket",
    "color.blanket.selected": "--ds-blanket-selected",
    "color.blanket.danger": "--ds-blanket-danger",
    "color.interaction.hovered": "--ds-interaction-hovered",
    "color.interaction.pressed": "--ds-interaction-pressed",
    "color.skeleton": "--ds-skeleton",
    "color.skeleton.subtle": "--ds-skeleton-subtle",
    "color.chart.categorical.1": "--ds-chart-categorical-1",
    "color.chart.categorical.1.hovered": "--ds-chart-categorical-1-hovered",
    "color.chart.categorical.2": "--ds-chart-categorical-2",
    "color.chart.categorical.2.hovered": "--ds-chart-categorical-2-hovered",
    "color.chart.categorical.3": "--ds-chart-categorical-3",
    "color.chart.categorical.3.hovered": "--ds-chart-categorical-3-hovered",
    "color.chart.categorical.4": "--ds-chart-categorical-4",
    "color.chart.categorical.4.hovered": "--ds-chart-categorical-4-hovered",
    "color.chart.categorical.5": "--ds-chart-categorical-5",
    "color.chart.categorical.5.hovered": "--ds-chart-categorical-5-hovered",
    "color.chart.categorical.6": "--ds-chart-categorical-6",
    "color.chart.categorical.6.hovered": "--ds-chart-categorical-6-hovered",
    "color.chart.categorical.7": "--ds-chart-categorical-7",
    "color.chart.categorical.7.hovered": "--ds-chart-categorical-7-hovered",
    "color.chart.categorical.8": "--ds-chart-categorical-8",
    "color.chart.categorical.8.hovered": "--ds-chart-categorical-8-hovered",
    "color.chart.lime.bold": "--ds-chart-lime-bold",
    "color.chart.lime.bold.hovered": "--ds-chart-lime-bold-hovered",
    "color.chart.lime.bolder": "--ds-chart-lime-bolder",
    "color.chart.lime.bolder.hovered": "--ds-chart-lime-bolder-hovered",
    "color.chart.lime.boldest": "--ds-chart-lime-boldest",
    "color.chart.lime.boldest.hovered": "--ds-chart-lime-boldest-hovered",
    "color.chart.neutral": "--ds-chart-neutral",
    "color.chart.neutral.hovered": "--ds-chart-neutral-hovered",
    "color.chart.red.bold": "--ds-chart-red-bold",
    "color.chart.red.bold.hovered": "--ds-chart-red-bold-hovered",
    "color.chart.red.bolder": "--ds-chart-red-bolder",
    "color.chart.red.bolder.hovered": "--ds-chart-red-bolder-hovered",
    "color.chart.red.boldest": "--ds-chart-red-boldest",
    "color.chart.red.boldest.hovered": "--ds-chart-red-boldest-hovered",
    "color.chart.orange.bold": "--ds-chart-orange-bold",
    "color.chart.orange.bold.hovered": "--ds-chart-orange-bold-hovered",
    "color.chart.orange.bolder": "--ds-chart-orange-bolder",
    "color.chart.orange.bolder.hovered": "--ds-chart-orange-bolder-hovered",
    "color.chart.orange.boldest": "--ds-chart-orange-boldest",
    "color.chart.orange.boldest.hovered": "--ds-chart-orange-boldest-hovered",
    "color.chart.yellow.bold": "--ds-chart-yellow-bold",
    "color.chart.yellow.bold.hovered": "--ds-chart-yellow-bold-hovered",
    "color.chart.yellow.bolder": "--ds-chart-yellow-bolder",
    "color.chart.yellow.bolder.hovered": "--ds-chart-yellow-bolder-hovered",
    "color.chart.yellow.boldest": "--ds-chart-yellow-boldest",
    "color.chart.yellow.boldest.hovered": "--ds-chart-yellow-boldest-hovered",
    "color.chart.green.bold": "--ds-chart-green-bold",
    "color.chart.green.bold.hovered": "--ds-chart-green-bold-hovered",
    "color.chart.green.bolder": "--ds-chart-green-bolder",
    "color.chart.green.bolder.hovered": "--ds-chart-green-bolder-hovered",
    "color.chart.green.boldest": "--ds-chart-green-boldest",
    "color.chart.green.boldest.hovered": "--ds-chart-green-boldest-hovered",
    "color.chart.teal.bold": "--ds-chart-teal-bold",
    "color.chart.teal.bold.hovered": "--ds-chart-teal-bold-hovered",
    "color.chart.teal.bolder": "--ds-chart-teal-bolder",
    "color.chart.teal.bolder.hovered": "--ds-chart-teal-bolder-hovered",
    "color.chart.teal.boldest": "--ds-chart-teal-boldest",
    "color.chart.teal.boldest.hovered": "--ds-chart-teal-boldest-hovered",
    "color.chart.blue.bold": "--ds-chart-blue-bold",
    "color.chart.blue.bold.hovered": "--ds-chart-blue-bold-hovered",
    "color.chart.blue.bolder": "--ds-chart-blue-bolder",
    "color.chart.blue.bolder.hovered": "--ds-chart-blue-bolder-hovered",
    "color.chart.blue.boldest": "--ds-chart-blue-boldest",
    "color.chart.blue.boldest.hovered": "--ds-chart-blue-boldest-hovered",
    "color.chart.purple.bold": "--ds-chart-purple-bold",
    "color.chart.purple.bold.hovered": "--ds-chart-purple-bold-hovered",
    "color.chart.purple.bolder": "--ds-chart-purple-bolder",
    "color.chart.purple.bolder.hovered": "--ds-chart-purple-bolder-hovered",
    "color.chart.purple.boldest": "--ds-chart-purple-boldest",
    "color.chart.purple.boldest.hovered": "--ds-chart-purple-boldest-hovered",
    "color.chart.magenta.bold": "--ds-chart-magenta-bold",
    "color.chart.magenta.bold.hovered": "--ds-chart-magenta-bold-hovered",
    "color.chart.magenta.bolder": "--ds-chart-magenta-bolder",
    "color.chart.magenta.bolder.hovered": "--ds-chart-magenta-bolder-hovered",
    "color.chart.magenta.boldest": "--ds-chart-magenta-boldest",
    "color.chart.magenta.boldest.hovered": "--ds-chart-magenta-boldest-hovered",
    "color.chart.gray.bold": "--ds-chart-gray-bold",
    "color.chart.gray.bold.hovered": "--ds-chart-gray-bold-hovered",
    "color.chart.gray.bolder": "--ds-chart-gray-bolder",
    "color.chart.gray.bolder.hovered": "--ds-chart-gray-bolder-hovered",
    "color.chart.gray.boldest": "--ds-chart-gray-boldest",
    "color.chart.gray.boldest.hovered": "--ds-chart-gray-boldest-hovered",
    "color.chart.brand": "--ds-chart-brand",
    "color.chart.brand.hovered": "--ds-chart-brand-hovered",
    "color.chart.danger": "--ds-chart-danger",
    "color.chart.danger.hovered": "--ds-chart-danger-hovered",
    "color.chart.danger.bold": "--ds-chart-danger-bold",
    "color.chart.danger.bold.hovered": "--ds-chart-danger-bold-hovered",
    "color.chart.warning": "--ds-chart-warning",
    "color.chart.warning.hovered": "--ds-chart-warning-hovered",
    "color.chart.warning.bold": "--ds-chart-warning-bold",
    "color.chart.warning.bold.hovered": "--ds-chart-warning-bold-hovered",
    "color.chart.success": "--ds-chart-success",
    "color.chart.success.hovered": "--ds-chart-success-hovered",
    "color.chart.success.bold": "--ds-chart-success-bold",
    "color.chart.success.bold.hovered": "--ds-chart-success-bold-hovered",
    "color.chart.discovery": "--ds-chart-discovery",
    "color.chart.discovery.hovered": "--ds-chart-discovery-hovered",
    "color.chart.discovery.bold": "--ds-chart-discovery-bold",
    "color.chart.discovery.bold.hovered": "--ds-chart-discovery-bold-hovered",
    "color.chart.information": "--ds-chart-information",
    "color.chart.information.hovered": "--ds-chart-information-hovered",
    "color.chart.information.bold": "--ds-chart-information-bold",
    "color.chart.information.bold.hovered": "--ds-chart-information-bold-hovered",
    "elevation.surface": "--ds-surface",
    "elevation.surface.hovered": "--ds-surface-hovered",
    "elevation.surface.pressed": "--ds-surface-pressed",
    "elevation.surface.overlay": "--ds-surface-overlay",
    "elevation.surface.overlay.hovered": "--ds-surface-overlay-hovered",
    "elevation.surface.overlay.pressed": "--ds-surface-overlay-pressed",
    "elevation.surface.raised": "--ds-surface-raised",
    "elevation.surface.raised.hovered": "--ds-surface-raised-hovered",
    "elevation.surface.raised.pressed": "--ds-surface-raised-pressed",
    "elevation.surface.sunken": "--ds-surface-sunken",
    "elevation.shadow.overflow": "--ds-shadow-overflow",
    "elevation.shadow.overflow.perimeter": "--ds-shadow-overflow-perimeter",
    "elevation.shadow.overflow.spread": "--ds-shadow-overflow-spread",
    "elevation.shadow.overlay": "--ds-shadow-overlay",
    "elevation.shadow.raised": "--ds-shadow-raised",
    "opacity.disabled": "--ds-opacity-disabled",
    "opacity.loading": "--ds-opacity-loading",
    "utility.UNSAFE.textTransformUppercase": "--ds-UNSAFE-textTransformUppercase",
    "utility.UNSAFE.transparent": "--ds-UNSAFE-transparent",
    "utility.elevation.surface.current": "--ds-elevation-surface-current",
    "space.0": "--ds-space-0",
    "space.025": "--ds-space-025",
    "space.050": "--ds-space-050",
    "space.075": "--ds-space-075",
    "space.100": "--ds-space-100",
    "space.150": "--ds-space-150",
    "space.200": "--ds-space-200",
    "space.250": "--ds-space-250",
    "space.300": "--ds-space-300",
    "space.400": "--ds-space-400",
    "space.500": "--ds-space-500",
    "space.600": "--ds-space-600",
    "space.800": "--ds-space-800",
    "space.1000": "--ds-space-1000",
    "space.negative.025": "--ds-space-negative-025",
    "space.negative.050": "--ds-space-negative-050",
    "space.negative.075": "--ds-space-negative-075",
    "space.negative.100": "--ds-space-negative-100",
    "space.negative.150": "--ds-space-negative-150",
    "space.negative.200": "--ds-space-negative-200",
    "space.negative.250": "--ds-space-negative-250",
    "space.negative.300": "--ds-space-negative-300",
    "space.negative.400": "--ds-space-negative-400",
    "font.heading.xxlarge": "--ds-font-heading-xxlarge",
    "font.heading.xlarge": "--ds-font-heading-xlarge",
    "font.heading.large": "--ds-font-heading-large",
    "font.heading.medium": "--ds-font-heading-medium",
    "font.heading.small": "--ds-font-heading-small",
    "font.heading.xsmall": "--ds-font-heading-xsmall",
    "font.heading.xxsmall": "--ds-font-heading-xxsmall",
    "font.body.large": "--ds-font-body-large",
    "font.body": "--ds-font-body",
    "font.body.small": "--ds-font-body-small",
    "font.body.UNSAFE_small": "--ds-font-body-UNSAFE_small",
    "font.metric.large": "--ds-font-metric-large",
    "font.metric.medium": "--ds-font-metric-medium",
    "font.metric.small": "--ds-font-metric-small",
    "font.code": "--ds-font-code",
    "font.weight.regular": "--ds-font-weight-regular",
    "font.weight.medium": "--ds-font-weight-medium",
    "font.weight.semibold": "--ds-font-weight-semibold",
    "font.weight.bold": "--ds-font-weight-bold",
    "font.family.heading": "--ds-font-family-heading",
    "font.family.body": "--ds-font-family-body",
    "font.family.code": "--ds-font-family-code",
    "font.family.brand.heading": "--ds-font-family-brand-heading",
    "font.family.brand.body": "--ds-font-family-brand-body",
    "radius.xsmall": "--ds-radius-xsmall",
    "radius.small": "--ds-radius-small",
    "radius.medium": "--ds-radius-medium",
    "radius.large": "--ds-radius-large",
    "radius.xlarge": "--ds-radius-xlarge",
    "radius.full": "--ds-radius-full",
    "radius.tile": "--ds-radius-tile",
    "border.width": "--ds-border-width",
    "border.width.selected": "--ds-border-width-selected",
    "border.width.focused": "--ds-border-width-focused",
  },
  Hw = "ds",
  Kw = "--".concat(Hw, "-token-not-found");
function Ut(e, t) {
  var r = Gw[e];
  r || (r = Kw);
  var n = t ? "var(".concat(r, ", ").concat(t, ")") : "var(".concat(r, ")");
  return n;
}
var Ww = function () {
    var e = 1,
      t = new WeakMap(),
      r = function (n, a) {
        return typeof n == "number" || typeof n == "string"
          ? a
            ? "idx-".concat(a)
            : "val-".concat(n)
          : t.has(n)
            ? "uid" + t.get(n)
            : (t.set(n, e++), r(n));
      };
    return r;
  },
  Qp = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: Ww() });
  },
  Jw = Qp(),
  Yw = _.createContext(Qp()),
  Xw = function (e) {
    return e.value++;
  },
  Zw = function (e) {
    return e ? e.prefix : "";
  },
  Qw = function (e) {
    var t = e || Jw,
      r = Zw(t),
      n = Xw(t),
      a = r + n,
      o = function (i) {
        return a + t.uid(i);
      };
    return { uid: a, gen: o };
  },
  eh = function () {
    var e = _.useContext(Yw),
      t = _.useState(function () {
        return Qw(e);
      })[0];
    return t;
  },
  ek = function () {
    var e = eh().uid;
    return e;
  },
  tk = function () {
    var e = eh().gen;
    return e;
  },
  ss,
  lo = (ss = O.useId) !== null && ss !== void 0 ? ss : void 0;
function th() {
  return lo && kr("platform-dst-react-18-use-id")
    ? kr("platform-dst-react-18-use-id-selector-safe")
      ? lo().replace(/[:«»]/g, "_")
      : lo()
    : "uid".concat(ek());
}
function rk() {
  if (lo && kr("platform-dst-react-18-use-id")) {
    var e = th();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return tk();
}
var fc = function (t) {
    var r = t.children,
      n = t.testId,
      a = t.role,
      o = t.id;
    return _.createElement(
      "span",
      {
        id: o,
        "data-testid": n,
        role: a,
        className: P([
          "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
        ]),
      },
      r,
    );
  },
  nk = {
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
  ak = ["children"];
function ok(e) {
  var t = function (c, s) {
      return c(s);
    },
    r = _.createContext(e);
  function n(i) {
    var c = _.useContext(r),
      s = c || t,
      u = s(i);
    return u;
  }
  function a(i) {
    var c = i.children,
      s = te(i, ak),
      u = n(s);
    return O.createElement(O.Fragment, null, c(u));
  }
  function o(i) {
    var c = _.useContext(r),
      s = i.value || t,
      u = _.useCallback(
        function (l) {
          return s(c, l);
        },
        [c, s],
      );
    return O.createElement(r.Provider, { value: u }, i.children);
  }
  return { Consumer: a, Provider: o, useTheme: n };
}
var ik = ok(function () {
    return { mode: "light" };
  }),
  sk = ik.useTheme;
function ck(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function uk(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var lk = (function () {
    function e(r) {
      var n = this;
      ((this._insertTag = function (a) {
        var o;
        (n.tags.length === 0
          ? n.insertionPoint
            ? (o = n.insertionPoint.nextSibling)
            : n.prepend
              ? (o = n.container.firstChild)
              : (o = n.before)
          : (o = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(a, o),
          n.tags.push(a));
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(uk(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = ck(a);
          try {
            o.insertRule(n, o.cssRules.length);
          } catch {}
        } else a.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        (this.tags.forEach(function (n) {
          var a;
          return (a = n.parentNode) == null ? void 0 : a.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0));
      }),
      e
    );
  })(),
  Pe = "-ms-",
  To = "-moz-",
  Q = "-webkit-",
  rh = "comm",
  vc = "rule",
  pc = "decl",
  dk = "@import",
  nh = "@keyframes",
  fk = "@layer",
  vk = Math.abs,
  ai = String.fromCharCode,
  pk = Object.assign;
function hk(e, t) {
  return Se(e, 0) ^ 45
    ? (((((((t << 2) ^ Se(e, 0)) << 2) ^ Se(e, 1)) << 2) ^ Se(e, 2)) << 2) ^ Se(e, 3)
    : 0;
}
function ah(e) {
  return e.trim();
}
function gk(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, r) {
  return e.replace(t, r);
}
function zs(e, t) {
  return e.indexOf(t);
}
function Se(e, t) {
  return e.charCodeAt(t) | 0;
}
function Pa(e, t, r) {
  return e.slice(t, r);
}
function kt(e) {
  return e.length;
}
function hc(e) {
  return e.length;
}
function eo(e, t) {
  return (t.push(e), e);
}
function bk(e, t) {
  return e.map(t).join("");
}
var oi = 1,
  Yr = 1,
  oh = 0,
  qe = 0,
  me = 0,
  an = "";
function ii(e, t, r, n, a, o, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: o,
    line: oi,
    column: Yr,
    length: i,
    return: "",
  };
}
function na(e, t) {
  return pk(ii("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function _k() {
  return me;
}
function mk() {
  return ((me = qe > 0 ? Se(an, --qe) : 0), Yr--, me === 10 && ((Yr = 1), oi--), me);
}
function Ke() {
  return ((me = qe < oh ? Se(an, qe++) : 0), Yr++, me === 10 && ((Yr = 1), oi++), me);
}
function Rt() {
  return Se(an, qe);
}
function fo() {
  return qe;
}
function za(e, t) {
  return Pa(an, e, t);
}
function Ra(e) {
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
function ih(e) {
  return ((oi = Yr = 1), (oh = kt((an = e))), (qe = 0), []);
}
function sh(e) {
  return ((an = ""), e);
}
function vo(e) {
  return ah(za(qe - 1, Us(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function yk(e) {
  for (; (me = Rt()) && me < 33; ) Ke();
  return Ra(e) > 2 || Ra(me) > 3 ? "" : " ";
}
function wk(e, t) {
  for (; --t && Ke() && !(me < 48 || me > 102 || (me > 57 && me < 65) || (me > 70 && me < 97)); );
  return za(e, fo() + (t < 6 && Rt() == 32 && Ke() == 32));
}
function Us(e) {
  for (; Ke(); )
    switch (me) {
      case e:
        return qe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Us(me);
        break;
      case 40:
        e === 41 && Us(e);
        break;
      case 92:
        Ke();
        break;
    }
  return qe;
}
function kk(e, t) {
  for (; Ke() && e + me !== 57; ) if (e + me === 84 && Rt() === 47) break;
  return "/*" + za(t, qe - 1) + "*" + ai(e === 47 ? e : Ke());
}
function Ok(e) {
  for (; !Ra(Rt()); ) Ke();
  return za(e, qe);
}
function Sk(e) {
  return sh(po("", null, null, null, [""], (e = ih(e)), 0, [0], e));
}
function po(e, t, r, n, a, o, i, c, s) {
  for (
    var u = 0,
      l = 0,
      d = i,
      f = 0,
      p = 0,
      h = 0,
      v = 1,
      g = 1,
      b = 1,
      m = 0,
      w = "",
      k = a,
      y = o,
      S = n,
      x = w;
    g;

  )
    switch (((h = m), (m = Ke()))) {
      case 40:
        if (h != 108 && Se(x, d - 1) == 58) {
          zs((x += ee(vo(m), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += vo(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += yk(h);
        break;
      case 92:
        x += wk(fo() - 1, 7);
        continue;
      case 47:
        switch (Rt()) {
          case 42:
          case 47:
            eo(Ek(kk(Ke(), fo()), t, r), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * v:
        c[u++] = kt(x) * b;
      case 125 * v:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            (b == -1 && (x = ee(x, /\f/g, "")),
              p > 0 &&
                kt(x) - d &&
                eo(p > 32 ? Ld(x + ";", n, r, d - 1) : Ld(ee(x, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            x += ";";
          default:
            if ((eo((S = Md(x, t, r, u, l, a, c, w, (k = []), (y = []), d)), o), m === 123))
              if (l === 0) po(x, t, S, S, k, o, d, c, y);
              else
                switch (f === 99 && Se(x, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    po(
                      e,
                      S,
                      S,
                      n && eo(Md(e, S, S, 0, 0, a, c, w, a, (k = []), d), y),
                      a,
                      y,
                      d,
                      c,
                      n ? k : y,
                    );
                    break;
                  default:
                    po(x, S, S, S, [""], y, 0, c, y);
                }
        }
        ((u = l = p = 0), (v = b = 1), (w = x = ""), (d = i));
        break;
      case 58:
        ((d = 1 + kt(x)), (p = h));
      default:
        if (v < 1) {
          if (m == 123) --v;
          else if (m == 125 && v++ == 0 && mk() == 125) continue;
        }
        switch (((x += ai(m)), m * v)) {
          case 38:
            b = l > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            ((c[u++] = (kt(x) - 1) * b), (b = 1));
            break;
          case 64:
            (Rt() === 45 && (x += vo(Ke())), (f = Rt()), (l = d = kt((w = x += Ok(fo())))), m++);
            break;
          case 45:
            h === 45 && kt(x) == 2 && (v = 0);
        }
    }
  return o;
}
function Md(e, t, r, n, a, o, i, c, s, u, l) {
  for (var d = a - 1, f = a === 0 ? o : [""], p = hc(f), h = 0, v = 0, g = 0; h < n; ++h)
    for (var b = 0, m = Pa(e, d + 1, (d = vk((v = i[h])))), w = e; b < p; ++b)
      (w = ah(v > 0 ? f[b] + " " + m : ee(m, /&\f/g, f[b]))) && (s[g++] = w);
  return ii(e, t, r, a === 0 ? vc : c, s, u, l);
}
function Ek(e, t, r) {
  return ii(e, t, r, rh, ai(_k()), Pa(e, 2, -2), 0);
}
function Ld(e, t, r, n) {
  return ii(e, t, r, pc, Pa(e, 0, n), Pa(e, n + 1, -1), n);
}
function Gr(e, t) {
  for (var r = "", n = hc(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function xk(e, t, r, n) {
  switch (e.type) {
    case fk:
      if (e.children.length) break;
    case dk:
    case pc:
      return (e.return = e.return || e.value);
    case rh:
      return "";
    case nh:
      return (e.return = e.value + "{" + Gr(e.children, n) + "}");
    case vc:
      e.value = e.props.join(",");
  }
  return kt((r = Gr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function Ck(e) {
  var t = hc(e);
  return function (r, n, a, o) {
    for (var i = "", c = 0; c < t; c++) i += e[c](r, n, a, o) || "";
    return i;
  };
}
function Pk(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Rk(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var Ak = function (t, r, n) {
    for (var a = 0, o = 0; (a = o), (o = Rt()), a === 38 && o === 12 && (r[n] = 1), !Ra(o); ) Ke();
    return za(t, qe);
  },
  Ik = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (Ra(a)) {
        case 0:
          (a === 38 && Rt() === 12 && (r[n] = 1), (t[n] += Ak(qe - 1, r, n)));
          break;
        case 2:
          t[n] += vo(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = Rt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += ai(a);
      }
    while ((a = Ke()));
    return t;
  },
  jk = function (t, r) {
    return sh(Ik(ih(t), r));
  },
  Nd = new WeakMap(),
  Dk = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Nd.get(n)) && !a) {
        Nd.set(t, !0);
        for (var o = [], i = jk(r, o), c = n.props, s = 0, u = 0; s < i.length; s++)
          for (var l = 0; l < c.length; l++, u++)
            t.props[u] = o[s] ? i[s].replace(/&\f/g, c[l]) : c[l] + " " + i[s];
      }
    }
  },
  Tk = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function ch(e, t) {
  switch (hk(e, t)) {
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
      return Q + e + To + e + Pe + e + e;
    case 6828:
    case 4268:
      return Q + e + Pe + e + e;
    case 6165:
      return Q + e + Pe + "flex-" + e + e;
    case 5187:
      return Q + e + ee(e, /(\w+).+(:[^]+)/, Q + "box-$1$2" + Pe + "flex-$1$2") + e;
    case 5443:
      return Q + e + Pe + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    case 4675:
      return Q + e + Pe + "flex-line-pack" + ee(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Q + e + Pe + ee(e, "shrink", "negative") + e;
    case 5292:
      return Q + e + Pe + ee(e, "basis", "preferred-size") + e;
    case 6060:
      return Q + "box-" + ee(e, "-grow", "") + Q + e + Pe + ee(e, "grow", "positive") + e;
    case 4554:
      return Q + ee(e, /([^-])(transform)/g, "$1" + Q + "$2") + e;
    case 6187:
      return ee(ee(ee(e, /(zoom-|grab)/, Q + "$1"), /(image-set)/, Q + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, Q + "$1$`$1");
    case 4968:
      return (
        ee(
          ee(e, /(.+:)(flex-)?(.*)/, Q + "box-pack:$3" + Pe + "flex-pack:$3"),
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
      return ee(e, /(.+)-inline(.+)/, Q + "$1$2") + e;
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
      if (kt(e) - 1 - t > 6)
        switch (Se(e, t + 1)) {
          case 109:
            if (Se(e, t + 4) !== 45) break;
          case 102:
            return (
              ee(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Q + "$2-$3$1" + To + (Se(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~zs(e, "stretch") ? ch(ee(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Se(e, t + 1) !== 115) break;
    case 6444:
      switch (Se(e, kt(e) - 3 - (~zs(e, "!important") && 10))) {
        case 107:
          return ee(e, ":", ":" + Q) + e;
        case 101:
          return (
            ee(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Q +
                (Se(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Q +
                "$2$3$1" +
                Pe +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (Se(e, t + 11)) {
        case 114:
          return Q + e + Pe + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Q + e + Pe + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Q + e + Pe + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Q + e + Pe + e + e;
  }
  return e;
}
var Mk = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case pc:
          t.return = ch(t.value, t.length);
          break;
        case nh:
          return Gr([na(t, { value: ee(t.value, "@", "@" + Q) })], a);
        case vc:
          if (t.length)
            return bk(t.props, function (o) {
              switch (gk(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Gr([na(t, { props: [ee(o, /:(read-\w+)/, ":" + To + "$1")] })], a);
                case "::placeholder":
                  return Gr(
                    [
                      na(t, { props: [ee(o, /:(plac\w+)/, ":" + Q + "input-$1")] }),
                      na(t, { props: [ee(o, /:(plac\w+)/, ":" + To + "$1")] }),
                      na(t, { props: [ee(o, /:(plac\w+)/, Pe + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  Lk = [Mk],
  Nk = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (v) {
        var g = v.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || Lk,
      o = {},
      i,
      c = [];
    ((i = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (v) {
          for (var g = v.getAttribute("data-emotion").split(" "), b = 1; b < g.length; b++)
            o[g[b]] = !0;
          c.push(v);
        },
      ));
    var s,
      u = [Dk, Tk];
    {
      var l,
        d = [
          xk,
          Pk(function (v) {
            l.insert(v);
          }),
        ],
        f = Ck(u.concat(a, d)),
        p = function (g) {
          return Gr(Sk(g), f);
        };
      s = function (g, b, m, w) {
        ((l = m), p(g ? g + "{" + b.styles + "}" : b.styles), w && (h.inserted[b.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new lk({
        key: r,
        container: i,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: s,
    };
    return (h.sheet.hydrate(c), h);
  },
  cs = { exports: {} },
  ne = {};
var Fd;
function Fk() {
  if (Fd) return ne;
  Fd = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    n = e ? Symbol.for("react.fragment") : 60107,
    a = e ? Symbol.for("react.strict_mode") : 60108,
    o = e ? Symbol.for("react.profiler") : 60114,
    i = e ? Symbol.for("react.provider") : 60109,
    c = e ? Symbol.for("react.context") : 60110,
    s = e ? Symbol.for("react.async_mode") : 60111,
    u = e ? Symbol.for("react.concurrent_mode") : 60111,
    l = e ? Symbol.for("react.forward_ref") : 60112,
    d = e ? Symbol.for("react.suspense") : 60113,
    f = e ? Symbol.for("react.suspense_list") : 60120,
    p = e ? Symbol.for("react.memo") : 60115,
    h = e ? Symbol.for("react.lazy") : 60116,
    v = e ? Symbol.for("react.block") : 60121,
    g = e ? Symbol.for("react.fundamental") : 60117,
    b = e ? Symbol.for("react.responder") : 60118,
    m = e ? Symbol.for("react.scope") : 60119;
  function w(y) {
    if (typeof y == "object" && y !== null) {
      var S = y.$$typeof;
      switch (S) {
        case t:
          switch (((y = y.type), y)) {
            case s:
            case u:
            case n:
            case o:
            case a:
            case d:
              return y;
            default:
              switch (((y = y && y.$$typeof), y)) {
                case c:
                case l:
                case h:
                case p:
                case i:
                  return y;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function k(y) {
    return w(y) === u;
  }
  return (
    (ne.AsyncMode = s),
    (ne.ConcurrentMode = u),
    (ne.ContextConsumer = c),
    (ne.ContextProvider = i),
    (ne.Element = t),
    (ne.ForwardRef = l),
    (ne.Fragment = n),
    (ne.Lazy = h),
    (ne.Memo = p),
    (ne.Portal = r),
    (ne.Profiler = o),
    (ne.StrictMode = a),
    (ne.Suspense = d),
    (ne.isAsyncMode = function (y) {
      return k(y) || w(y) === s;
    }),
    (ne.isConcurrentMode = k),
    (ne.isContextConsumer = function (y) {
      return w(y) === c;
    }),
    (ne.isContextProvider = function (y) {
      return w(y) === i;
    }),
    (ne.isElement = function (y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }),
    (ne.isForwardRef = function (y) {
      return w(y) === l;
    }),
    (ne.isFragment = function (y) {
      return w(y) === n;
    }),
    (ne.isLazy = function (y) {
      return w(y) === h;
    }),
    (ne.isMemo = function (y) {
      return w(y) === p;
    }),
    (ne.isPortal = function (y) {
      return w(y) === r;
    }),
    (ne.isProfiler = function (y) {
      return w(y) === o;
    }),
    (ne.isStrictMode = function (y) {
      return w(y) === a;
    }),
    (ne.isSuspense = function (y) {
      return w(y) === d;
    }),
    (ne.isValidElementType = function (y) {
      return (
        typeof y == "string" ||
        typeof y == "function" ||
        y === n ||
        y === u ||
        y === o ||
        y === a ||
        y === d ||
        y === f ||
        (typeof y == "object" &&
          y !== null &&
          (y.$$typeof === h ||
            y.$$typeof === p ||
            y.$$typeof === i ||
            y.$$typeof === c ||
            y.$$typeof === l ||
            y.$$typeof === g ||
            y.$$typeof === b ||
            y.$$typeof === m ||
            y.$$typeof === v))
      );
    }),
    (ne.typeOf = w),
    ne
  );
}
var Bd;
function Bk() {
  return (Bd || ((Bd = 1), (cs.exports = Fk())), cs.exports);
}
var us, zd;
function zk() {
  if (zd) return us;
  zd = 1;
  var e = Bk(),
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
    a = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    o = {};
  ((o[e.ForwardRef] = n), (o[e.Memo] = a));
  function i(h) {
    return e.isMemo(h) ? a : o[h.$$typeof] || t;
  }
  var c = Object.defineProperty,
    s = Object.getOwnPropertyNames,
    u = Object.getOwnPropertySymbols,
    l = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    f = Object.prototype;
  function p(h, v, g) {
    if (typeof v != "string") {
      if (f) {
        var b = d(v);
        b && b !== f && p(h, b, g);
      }
      var m = s(v);
      u && (m = m.concat(u(v)));
      for (var w = i(h), k = i(v), y = 0; y < m.length; ++y) {
        var S = m[y];
        if (!r[S] && !(g && g[S]) && !(k && k[S]) && !(w && w[S])) {
          var x = l(v, S);
          try {
            c(h, S, x);
          } catch {}
        }
      }
    }
    return h;
  }
  return ((us = p), us);
}
zk();
var Uk = !0;
function uh(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var gc = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || Uk === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  lh = function (t, r, n) {
    gc(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do (t.insert(r === o ? "." + a : "", o, t.sheet, !0), (o = o.next));
      while (o !== void 0);
    }
  };
function qk(e) {
  for (var t = 0, r, n = 0, a = e.length; a >= 4; ++n, a -= 4)
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
  switch (a) {
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
var $k = {
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
  Vk = /[A-Z]|^ms/g,
  Gk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  dh = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Ud = function (t) {
    return t != null && typeof t != "boolean";
  },
  ls = Rk(function (e) {
    return dh(e) ? e : e.replace(Vk, "-$&").toLowerCase();
  }),
  qd = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(Gk, function (n, a, o) {
            return ((Ot = { name: a, styles: o, next: Ot }), a);
          });
    }
    return $k[t] !== 1 && !dh(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Aa(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1) return ((Ot = { name: a.name, styles: a.styles, next: Ot }), a.name);
      var o = r;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; )
            ((Ot = { name: i.name, styles: i.styles, next: Ot }), (i = i.next));
        var c = o.styles + ";";
        return c;
      }
      return Hk(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = Ot,
          u = r(e);
        return ((Ot = s), Aa(e, t, u));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function Hk(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += Aa(e, t, r[a]) + ";";
  else
    for (var o in r) {
      var i = r[o];
      if (typeof i != "object") {
        var c = i;
        t != null && t[c] !== void 0
          ? (n += o + "{" + t[c] + "}")
          : Ud(c) && (n += ls(o) + ":" + qd(o, c) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var s = 0; s < i.length; s++) Ud(i[s]) && (n += ls(o) + ":" + qd(o, i[s]) + ";");
      else {
        var u = Aa(e, t, i);
        switch (o) {
          case "animation":
          case "animationName": {
            n += ls(o) + ":" + u + ";";
            break;
          }
          default:
            n += o + "{" + u + "}";
        }
      }
    }
  return n;
}
var $d = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Ot;
function bc(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  Ot = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) ((n = !1), (a += Aa(r, t, o)));
  else {
    var i = o;
    a += i[0];
  }
  for (var c = 1; c < e.length; c++)
    if (((a += Aa(r, t, e[c])), n)) {
      var s = o;
      a += s[c];
    }
  $d.lastIndex = 0;
  for (var u = "", l; (l = $d.exec(a)) !== null; ) u += "-" + l[1];
  var d = qk(a) + u;
  return { name: d, styles: a, next: Ot };
}
var Kk = function (t) {
    return t();
  },
  Wk = Mc.useInsertionEffect ? Mc.useInsertionEffect : !1,
  fh = Wk || Kk,
  vh = _.createContext(typeof HTMLElement < "u" ? Nk({ key: "css" }) : null);
vh.Provider;
var ph = function (t) {
    return _.forwardRef(function (r, n) {
      var a = _.useContext(vh);
      return t(r, a, n);
    });
  },
  hh = _.createContext({}),
  _c = {}.hasOwnProperty,
  qs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Jk = function (t, r) {
    var n = {};
    for (var a in r) _c.call(r, a) && (n[a] = r[a]);
    return ((n[qs] = t), n);
  },
  Yk = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      gc(r, n, a),
      fh(function () {
        return lh(r, n, a);
      }),
      null
    );
  },
  Xk = ph(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[qs],
      o = [n],
      i = "";
    typeof e.className == "string"
      ? (i = uh(t.registered, o, e.className))
      : e.className != null && (i = e.className + " ");
    var c = bc(o, void 0, _.useContext(hh));
    i += t.key + "-" + c.name;
    var s = {};
    for (var u in e) _c.call(e, u) && u !== "css" && u !== qs && (s[u] = e[u]);
    return (
      (s.className = i),
      r && (s.ref = r),
      _.createElement(
        _.Fragment,
        null,
        _.createElement(Yk, { cache: t, serialized: c, isStringTag: typeof a == "string" }),
        _.createElement(a, s),
      )
    );
  }),
  Zk = Xk,
  Ht = function (t, r) {
    var n = arguments;
    if (r == null || !_c.call(r, "css")) return _.createElement.apply(void 0, n);
    var a = n.length,
      o = new Array(a);
    ((o[0] = Zk), (o[1] = Jk(t, r)));
    for (var i = 2; i < a; i++) o[i] = n[i];
    return _.createElement.apply(null, o);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Ht || (Ht = {}));
function Mt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return bc(t);
}
var Qk = function e(t) {
  for (var r = t.length, n = 0, a = ""; n < r; n++) {
    var o = t[n];
    if (o != null) {
      var i = void 0;
      switch (typeof o) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(o)) i = e(o);
          else {
            i = "";
            for (var c in o) o[c] && c && (i && (i += " "), (i += c));
          }
          break;
        }
        default:
          i = o;
      }
      i && (a && (a += " "), (a += i));
    }
  }
  return a;
};
function e1(e, t, r) {
  var n = [],
    a = uh(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var t1 = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      fh(function () {
        for (var a = 0; a < n.length; a++) lh(r, n[a], !1);
      }),
      null
    );
  },
  r1 = ph(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l];
        var d = bc(u, t.registered);
        return (r.push(d), gc(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l];
        return e1(t.registered, n, Qk(u));
      },
      o = { css: n, cx: a, theme: _.useContext(hh) },
      i = e.children(o);
    return _.createElement(
      _.Fragment,
      null,
      _.createElement(t1, { cache: t, serializedArr: r }),
      i,
    );
  });
function gh(e, t) {
  var r = _.useRef(!0);
  _.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var bh = 2,
  $s = Mt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: bh,
  }),
  Vs = Mt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -bh,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  n1 = Mt({
    "&:focus": $s,
    "&:focus-visible": $s,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  a1 = Mt({
    "&:focus": Vs,
    "&:focus-visible": Vs,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  _h = _.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? Vs : $s,
      o = r ? a1 : n1,
      i = typeof n > "u" ? o : n === "on" && a;
    return Ht(r1, null, function (c) {
      var s = c.css,
        u = c.cx;
      return _.Children.only(
        i ? _.cloneElement(t, { className: u([s(i), t.props.className]) }) : t,
      );
    });
  });
_h.displayName = "FocusRing";
function qt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var o1 = 9;
function Vd(e) {
  e.keyCode !== o1 && qt(e);
}
var i1 = {
    onMouseDownCapture: qt,
    onMouseUpCapture: qt,
    onKeyDownCapture: Vd,
    onKeyUpCapture: Vd,
    onTouchStartCapture: qt,
    onTouchEndCapture: qt,
    onPointerDownCapture: qt,
    onPointerUpCapture: qt,
    onClickCapture: qt,
    onClick: qt,
  },
  s1 = {};
function c1(e) {
  var t = e.isInteractive;
  return t ? s1 : i1;
}
function Gd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Gd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var rr = 8,
  ds = ["default", "primary", "danger", "warning"],
  Gs = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  u1 = { default: Gs.default, compact: Gs.compact, none: "inherit" },
  l1 = {
    default: "0 ".concat(rr + rr / 4, "px"),
    compact: "0 ".concat(rr + rr / 4, "px"),
    none: "0",
  },
  d1 = { compact: "0 ".concat(rr / 4, "px"), default: "0 ".concat(rr / 4, "px"), none: "0" },
  f1 = { default: "middle", compact: "middle", none: "baseline" },
  mh = { content: "0 ".concat(rr / 4, "px"), icon: "0 ".concat(rr / 4, "px") },
  yh = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  v1 = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": Fe(Fe({}, yh), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  p1 = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  h1 = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  g1 = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  b1 = {
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
  _1 = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  m1 = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  y1 = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": Fe(
      Fe({}, yh),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  w1 = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function k1(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isSelected,
    a = e.shouldFitContainer,
    o = e.isOnlySingleIcon;
  return Fe(
    Fe(
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
        height: Gs[r],
        lineHeight: u1[r],
        padding: o ? d1[r] : l1[r],
        verticalAlign: f1[r],
        width: a ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? y1
        : Fe(
            Fe(
              Fe(
                Fe(
                  Fe(
                    Fe(
                      Fe(Fe({}, t === "default" && v1), t === "primary" && p1),
                      t === "link" && h1,
                    ),
                    t === "subtle" && g1,
                  ),
                  t === "subtle-link" && b1,
                ),
                t === "warning" && _1,
              ),
              t === "danger" && m1,
            ),
            {},
            {
              "&[disabled]": {
                color: "var(--ds-text-disabled, #080F214A)",
                backgroundColor: ds.includes(t)
                  ? "var(--ds-background-disabled, #17171708)"
                  : "transparent",
                cursor: "not-allowed",
                textDecoration: "none",
                "&:hovered": {
                  backgroundColor: ds.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
                "&:active": {
                  backgroundColor: ds.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
              },
            },
            w1,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function Hd(e) {
  var t = e.spacing;
  return Mt({
    display: "flex",
    margin: t === "none" ? 0 : mh.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function O1(e) {
  var t = e.spacing;
  return Mt({
    margin: t === "none" ? 0 : mh.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function S1(e) {
  var t = e.hasOverlay;
  return Mt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var E1 = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mc = function (t) {
    return t && _.isValidElement(t) && t.type === fc;
  },
  x1 = [
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
  C1 = { "> *": { pointerEvents: "none" } },
  P1 = Mt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  R1 = Mt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  Kd = function (t, r) {
    return !t || mc(t) ? null : r;
  },
  A1 = function (t, r) {
    return mc(t) ? t : t ? Ht("span", { css: r }, t) : null;
  },
  I1 = O.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      a = t.appearance,
      o = a === void 0 ? "default" : a,
      i = t.autoFocus,
      c = i === void 0 ? !1 : i,
      s = t.buttonCss,
      u = t.children,
      l = t.className,
      d = t.href,
      f = t.component,
      p = f === void 0 ? (d ? "a" : "button") : f,
      h = t.iconAfter,
      v = t.iconBefore,
      g = t.interactionName,
      b = t.isDisabled,
      m = b === void 0 ? !1 : b,
      w = t.isSelected,
      k = w === void 0 ? !1 : w,
      y = t.onBlur,
      S = t.onClick,
      x = S === void 0 ? Re : S,
      A = t.onFocus,
      j = t.onMouseDown,
      R = j === void 0 ? Re : j,
      M = t.overlay;
    t.shouldFitContainer;
    var U = t.spacing,
      B = U === void 0 ? "default" : U,
      $ = t.tabIndex,
      q = $ === void 0 ? 0 : $,
      V = t.type,
      G = V === void 0 ? (d ? void 0 : "button") : V,
      K = t.testId,
      F = te(t, x1),
      D = _.useRef(),
      _e = _.useCallback(
        function (fe) {
          if (((D.current = fe), r != null)) {
            if (typeof r == "function") {
              r(fe);
              return;
            }
            r.current = fe;
          }
        },
        [D, r],
      );
    gh(D, c);
    var ie = _.useContext(ic),
      ce = _.useCallback(
        function (fe, Me) {
          (ie && ie.tracePress(g, fe.timeStamp), x(fe, Me));
        },
        [x, ie, g],
      ),
      de = Jr({
        fn: ce,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      pe = _.useCallback(
        function (fe) {
          (fe.preventDefault(), R(fe));
        },
        [R],
      );
    _.useEffect(
      function () {
        var fe = D.current;
        m && fe && fe === document.activeElement && fe.blur();
      },
      [m],
    );
    var ue = !!M,
      De = Mt(S1({ hasOverlay: ue })),
      ke = !m && !ue,
      Te = {};
    return (
      (k || m || o === "warning") &&
        (Te = {
          "[data-theme] & circle": {
            stroke: "".concat(
              k || m
                ? "var(--ds-icon-subtle, ".concat(jo, ")")
                : "var(--ds-icon-warning-inverse, ".concat(jo, ")"),
              " !important",
            ),
          },
        }),
      Ht(
        _h,
        null,
        Ht(
          p,
          Z(
            {},
            F,
            {
              ref: _e,
              className: l,
              css: [s, ke ? null : C1],
              "data-has-overlay": ue ? !0 : void 0,
              "data-testid": K,
              disabled: m,
              href: ke ? d : void 0,
              onBlur: y,
              onClick: de,
              onFocus: A,
              onMouseDown: pe,
              tabIndex: m ? -1 : q,
              type: G,
            },
            c1({ isInteractive: ke }),
          ),
          v ? Ht("span", { css: [De, Hd({ spacing: B }), Kd(u, P1)] }, v) : null,
          A1(u, [De, O1({ spacing: B })]),
          h ? Ht("span", { css: [De, Hd({ spacing: B }), Kd(u, R1)] }, h) : null,
          M ? Ht("span", { css: [E1, Te] }, M) : null,
        ),
      )
    );
  });
function j1(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return mc(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var D1 = [
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
  Wd = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  yc = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        o = t.children,
        i = t.iconBefore,
        c = t.iconAfter,
        s = t.isSelected,
        u = s === void 0 ? !1 : s,
        l = t.onMouseDown,
        d = l === void 0 ? Re : l,
        f = t.onMouseUp,
        p = f === void 0 ? Re : f,
        h = t.shouldFitContainer,
        v = h === void 0 ? !1 : h,
        g = t.spacing,
        b = g === void 0 ? "default" : g,
        m = te(t, D1),
        w = sk(),
        k = w.mode,
        y = j1({ children: o, iconBefore: i, iconAfter: c }),
        S = _.useState(!1),
        x = J(S, 2),
        A = x[0],
        j = x[1],
        R = _.useCallback(
          function (B) {
            (d(B), Wd && j(!0));
          },
          [d, j],
        ),
        M = _.useCallback(
          function (B) {
            (p(B), Wd && j(!1));
          },
          [p, j],
        ),
        U = _.useMemo(
          function () {
            return k1({
              appearance: a,
              spacing: b,
              isSelected: u,
              shouldFitContainer: v,
              isOnlySingleIcon: y,
            });
          },
          [a, b, k, u, v, y],
        );
      return O.createElement(
        I1,
        Z({}, m, {
          ref: r,
          appearance: a,
          buttonCss: U,
          children: o,
          "data-firefox-is-active": A ? !0 : void 0,
          iconAfter: c,
          iconBefore: i,
          isSelected: u,
          onMouseDown: R,
          onMouseUp: M,
          spacing: b,
        }),
      );
    }),
  );
yc.displayName = "Button";
function Jd(e) {
  return O.createElement(yc, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function T1(e) {
  return O.createElement(yc, Z({}, e, { appearance: "subtle" }));
}
var M1 = { container: "_1e0c1txw _kqswh2mm" };
function L1(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return O.createElement(
    ri,
    { as: "li", testId: r, key: t, xcss: M1.container, paddingInline: "space.100" },
    O.createElement(
      Yp,
      { testId: r && "".concat(r, "-text") },
      O.createElement(fc, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var Yd = {},
  Xd =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function N1(e, t) {
  return !!(e === t || (Xd(e) && Xd(t)));
}
function F1(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!N1(e[r], t[r])) return !1;
  return !0;
}
function B1(e, t) {
  t === void 0 && (t = F1);
  var r = null;
  function n() {
    for (var a = [], o = 0; o < arguments.length; o++) a[o] = arguments[o];
    if (r && r.lastThis === this && t(a, r.lastArgs)) return r.lastResult;
    var i = e.apply(this, a);
    return ((r = { lastResult: i, lastArgs: a, lastThis: this }), i);
  }
  return (
    (n.clear = function () {
      r = null;
    }),
    n
  );
}
var z1 = function (t, r, n, a) {
  var o = n.max,
    i = n.ellipsis,
    c = n.transform,
    s = t.length,
    u = s > o,
    l = u && o - 4 < r,
    d = u && r < s - o + 3,
    f = B1(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
      return t.slice(g, b).map(function (m, w) {
        return c(m, g + w, a);
      });
    });
  if (!u) return f(0, s);
  if (l && !d) {
    var p = o - 2;
    return [].concat(
      Ve(f(0, 1)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: s - p })],
      Ve(f(s - p)),
    );
  }
  if (!l && d) {
    var h = o - 2;
    return [].concat(
      Ve(f(0, h)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: h + 1, to: s - 1 })],
      Ve(f(s - 1)),
    );
  }
  var v = o - 4;
  return [].concat(
    Ve(f(0, 1)),
    [
      i({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(v / 2),
      }),
    ],
    Ve(f(r - Math.floor(v / 2), r + v - 1)),
    [i({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: s - 1 })],
    Ve(f(s - 1)),
  );
};
function Zd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function U1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Hs = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  q1 = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.15",
  };
function Qd(e) {
  var t = e.chevronDirection,
    r = t === "left" ? aw : uw;
  return O.createElement(
    ri,
    { as: "span", xcss: Hs.navigatorIconWrapper },
    O.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function $1(e, t) {
  var r = e.components,
    n = r === void 0 ? Yd : r,
    a = e.defaultSelectedIndex,
    o = a === void 0 ? 0 : a,
    i = e.selectedIndex,
    c = e.label,
    s = c === void 0 ? "pagination" : c,
    u = e.pageLabel,
    l = u === void 0 ? "page" : u,
    d = e.previousLabel,
    f = d === void 0 ? "previous" : d,
    p = e.nextLabel,
    h = p === void 0 ? "next" : p,
    v = e.style,
    g = v === void 0 ? Yd : v,
    b = e.max,
    m = b === void 0 ? 7 : b,
    w = e.onChange,
    k = w === void 0 ? Re : w,
    y = e.pages,
    S = e.getPageLabel,
    x = e.renderEllipsis,
    A = x === void 0 ? L1 : x,
    j = e.analyticsContext,
    R = e.testId,
    M = e.isDisabled,
    U = Uy(i, function () {
      return o || 0;
    }),
    B = J(U, 2),
    $ = B[0],
    q = B[1],
    V = Jr(
      U1(
        {
          fn: function (F, D) {
            var _e = F.event,
              ie = F.selectedPageIndex;
            (i === void 0 && q(ie), k && k(_e, y[ie], D));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: j,
        },
        q1,
      ),
    ),
    G = function (F, D, _e) {
      var ie = y[$],
        ce = "".concat(l, " ").concat(S ? S(F, D) : F),
        de = F === ie;
      return O.createElement(
        uo,
        { as: "li", xcss: Hs.paginationMenuItem, key: "page-".concat(S ? S(F, D) : D) },
        O.createElement(
          T1,
          {
            component: n.Page,
            onClick: function (ue) {
              return V({ event: ue, selectedPageIndex: D });
            },
            "aria-current": de ? "page" : void 0,
            "aria-label": ce,
            isSelected: de,
            isDisabled: M,
            page: F,
            testId:
              _e &&
              ""
                .concat(_e, "--")
                .concat(de ? "current-" : "", "page-")
                .concat(D),
          },
          S ? S(F, D) : F,
        ),
      );
    };
  return O.createElement(
    ri,
    { testId: R, style: g, ref: t, "aria-label": s, as: "nav" },
    O.createElement(
      uo,
      { space: "space.0", alignBlock: "center" },
      O.createElement(Jd, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (F) {
          return V({ event: F, selectedPageIndex: $ - 1 });
        },
        isDisabled: M || $ === 0,
        iconBefore: O.createElement(Qd, { chevronDirection: "left" }),
        "aria-label": f,
        testId: R && "".concat(R, "--left-navigator"),
      }),
      O.createElement(
        uo,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Hs.paginationMenu },
        z1(y, $, { max: m, ellipsis: A, transform: G }, R),
      ),
      O.createElement(Jd, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (F) {
          return V({ event: F, selectedPageIndex: $ + 1 });
        },
        isDisabled: M || $ === y.length - 1,
        iconBefore: O.createElement(Qd, { chevronDirection: "right" }),
        "aria-label": h,
        testId: R && "".concat(R, "--right-navigator"),
      }),
    ),
  );
}
var V1 = _.memo(_.forwardRef($1));
function G1(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, wh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function wh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (wh = function () {
    return !!e;
  })();
}
var H1 = (function (e) {
    function t() {
      var r;
      ge(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return (
        (r = G1(this, t, [].concat(a))),
        C(r, "onChange", function (i, c, s) {
          r.props.onChange(c, s);
        }),
        r
      );
    }
    return (
      Xe(t, e),
      be(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.total,
              o = n.value,
              i = o === void 0 ? 1 : o,
              c = n.i18n,
              s = n.testId,
              u = n.isDisabled,
              l = Ve(Array(a)).map(function (f, p) {
                return p + 1;
              }),
              d = i - 1;
            return O.createElement(V1, {
              selectedIndex: d,
              isDisabled: u,
              label: c?.label,
              nextLabel: c?.next,
              previousLabel: c?.prev,
              pageLabel: c?.pageLabel,
              onChange: this.onChange,
              pages: l,
              testId: s && "".concat(s, "--pagination"),
            });
          },
        },
      ])
    );
  })(O.Component),
  K1 = ["isRanking", "testId"],
  W1 = [
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
function ef(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function aa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ef(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ef(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var tf = "--local-dynamic-table-text-color",
  J1 = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = te(t, K1);
    return _.createElement(
      "thead",
      Z({ "data-testid": n }, a, { className: P(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  Y1 = _.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      o = e.isFixedSize,
      i = e.shouldTruncate;
    e.onClick;
    var c = e.style,
      s = e.testId,
      u = te(e, W1),
      l = aa(
        aa(aa({}, c), r && Cp({ width: r })),
        {},
        C({}, tf, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = a === wr,
      f = a === Ao,
      p = function () {
        if (d) return "ascending";
        if (f) return "descending";
      },
      h = n ? "th" : "td";
    return _.createElement(
      h,
      Z({ "aria-sort": p(), onClick: void 0, ref: t, "data-testid": s }, u, {
        className: P([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          o && i && "_1bto1l2s _o5721q9c",
          o && "_1reo15vq _18m915vq",
        ]),
        style: aa(
          aa({}, l),
          {},
          { "--_17ckjys": er("var(--ds-text-subtle, ".concat("var(".concat(tf, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function X1(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, kh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function kh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (kh = function () {
    return !!e;
  })();
}
function Z1(e) {
  return (function (t) {
    function r() {
      var n;
      ge(this, r);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return (
        (n = X1(this, r, [].concat(o))),
        C(n, "state", { refWidth: 0, refHeight: 0 }),
        C(n, "innerRef", function (c) {
          c && !n.props.isRanking && (n.ref = c);
        }),
        C(n, "updateDimensions", function () {
          if (n.ref) {
            var c = n.ref.getBoundingClientRect(),
              s = c.width,
              u = c.height;
            (s !== n.state.refWidth || u !== n.state.refHeight) &&
              n.setState({ refWidth: s, refHeight: u });
          }
        }),
        n
      );
    }
    return (
      Xe(r, t),
      be(r, [
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (a) {
            var o = this.props.isRanking,
              i = a.isRanking;
            i && !o && this.updateDimensions();
          },
        },
        {
          key: "render",
          value: function () {
            var a = this.state,
              o = a.refWidth,
              i = a.refHeight;
            return O.createElement(
              e,
              Z({ refWidth: o, refHeight: i, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(O.Component);
}
var oa = {},
  rf;
function Q1() {
  if (rf) return oa;
  ((rf = 1), Object.defineProperty(oa, "__esModule", { value: !0 }), (oa.default = void 0));
  var e = r(bt()),
    t = r(ti);
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ArrowDownIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M8.75 1v11.44l3.72-3.72 1.06 1.06-5 5a.75.75 0 0 1-1.06 0l-5-5 1.06-1.06 3.72 3.72V1z" clip-rule="evenodd"/>',
        },
        a,
      ),
    );
  return ((n.displayName = "ArrowDownIcon"), (oa.default = n), oa);
}
var eO = Q1();
const tO = or(eO);
var ia = {},
  nf;
function rO() {
  if (nf) return ia;
  ((nf = 1), Object.defineProperty(ia, "__esModule", { value: !0 }), (ia.default = void 0));
  var e = r(bt()),
    t = r(ti);
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ArrowUpIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M8.75 15V3.56l3.72 3.72 1.06-1.06-5-5a.75.75 0 0 0-1.06 0l-5 5 1.06 1.06 3.72-3.72V15z" clip-rule="evenodd"/>',
        },
        a,
      ),
    );
  return ((n.displayName = "ArrowUpIcon"), (ia.default = n), ia);
}
var nO = rO();
const aO = or(nO);
var oO = "Escape";
function iO(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = _.useRef(!1),
    a = _.useCallback(
      function (i) {
        r || n.current || i.key !== oO || ((n.current = !0), t(i));
      },
      [t, r],
    ),
    o = _.useCallback(function () {
      n.current = !1;
    }, []);
  _.useEffect(
    function () {
      if (!r)
        return ni.bindAll(
          document,
          [
            { type: "keydown", listener: a },
            { type: "keyup", listener: o },
          ],
          { capture: !1 },
        );
    },
    [a, o, r],
  );
}
function sa(e) {
  var t = _.useRef(e);
  return (
    _.useEffect(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
var sO = _.createContext(null),
  cO = _.createContext(null);
function uO() {
  var e = _.useContext(cO);
  return e;
}
function lO(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    a = _.useContext(sO),
    o = uO();
  _.useEffect(
    function () {
      if (a !== null && t) return a.onClose(n, { namespace: o, type: r });
    },
    [a, t, o, n, r],
  );
}
var fa = { none: 0, small: 100, medium: 350, large: 700 },
  fs = 0.5,
  dO = { none: fa.none, small: fa.small * fs, medium: fa.medium * fs, large: fa.large * fs },
  fO = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  vO = function () {
    if (!fO()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  pO = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  hO = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { cleanup: "unmount" },
      r = _.useRef([]);
    return (
      _.useEffect(function () {
        return function () {
          r.current.length &&
            (r.current.forEach(function (n) {
              return clearTimeout(n);
            }),
            (r.current = []));
        };
      }, pO(t)),
      _.useCallback(function (n, a) {
        for (var o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), c = 2; c < o; c++)
          i[c - 2] = arguments[c];
        var s = setTimeout.apply(
          void 0,
          [
            function () {
              ((r.current = r.current.filter(function (u) {
                return u !== s;
              })),
                n());
            },
            a,
          ].concat(i),
        );
        r.current.push(s);
      }, [])
    );
  },
  Oh = { appear: !0, isExiting: !1 },
  Sh = _.createContext(Oh),
  af = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Oh;
    return O.createElement(Sh.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  of = function (t) {
    var r = [];
    return (
      _.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  gO = function (t, r) {
    for (var n = r.concat([]), a = bO(r), o = 0; o < t.length; o++) {
      var i = t[o],
        c = !a[i.key];
      c && n.splice(o + 1, 0, i);
    }
    return n;
  },
  bO = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  _O = function (t, r) {
    for (
      var n = new Set(
          t.map(function (s) {
            return s.key;
          }),
        ),
        a = new Set(),
        o = 0;
      o < r.length;
      o++
    ) {
      var i = r[o],
        c = i.key;
      n.has(c) || a.add(c);
    }
    return a;
  },
  Eh = _.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      o = _.useState([null, n]),
      i = J(o, 2),
      c = i[0],
      s = i[1],
      u = _.useState([]),
      l = J(u, 2),
      d = l[0],
      f = l[1],
      p = _.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      h = J(p, 2),
      v = h[0],
      g = h[1];
    if (
      (_.useEffect(function () {
        v.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      typeof c == "boolean")
    )
      return n;
    var b = J(c, 2),
      m = b[0],
      w = b[1],
      k = of(m),
      y = of(w);
    w !== n && s([w, n]);
    var S = _O(y, k),
      x = !!S.size,
      A = y;
    if ((x && (A = gO(y, k)), a))
      if (d.length) A = d;
      else {
        var j = A.filter(function (R) {
          return S.has(R.key);
        });
        j.length && f(j);
      }
    return (
      S.size
        ? (A = A.map(function (R) {
            var M = S.has(R.key);
            return af(R, {
              appear: !0,
              isExiting: M,
              onFinish: M
                ? function () {
                    (S.delete(R.key), S.size === 0 && (s([null, n]), f([])));
                  }
                : void 0,
            });
          }))
        : (A = A.map(function (R) {
            return af(R, v);
          })),
      A
    );
  }),
  mO = function () {
    return _.useContext(Sh);
  };
Eh.displayName = "ExitingPersistence";
function yO() {
  var e = _.useRef("");
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
var wO = _.createContext(function () {
    return { isReady: !0, delay: 0, ref: Re };
  }),
  kO = function () {
    var t = yO(),
      r = _.useContext(wO);
    return r(t);
  },
  OO = function (t) {
    var r = t.children,
      n = t.animationTimingFunction,
      a = t.animationTimingFunctionExiting,
      o = a === void 0 ? n : a,
      i = t.enteringAnimation,
      c = t.exitingAnimation,
      s = c === void 0 ? i : c,
      u = t.isPaused,
      l = t.onFinish,
      d = t.duration,
      f = d === void 0 ? "large" : d,
      p = kO(),
      h = mO(),
      v = h.isExiting,
      g = h.onFinish,
      b = h.appear,
      m = hO(),
      w = u || !p.isReady,
      k = v ? 0 : p.delay,
      y = v ? "exiting" : "entering",
      S = _.useState(b),
      x = J(S, 2),
      A = x[0],
      j = x[1];
    return (
      _.useEffect(
        function () {
          var R = !1;
          if (!w) {
            if (!b) {
              l && l(y);
              return;
            }
            var M = function () {
              (y === "exiting" && g?.(), R || j(!1), l?.(y));
            };
            if (vO()) {
              M();
              return;
            }
            return (
              j(!0),
              m(M, v ? dO[f] : fa[f] + k),
              function () {
                R = !0;
              }
            );
          }
        },
        [g, y, v, f, k, w, m],
      ),
      r(
        {
          ref: p.ref,
          className: A
            ? P([
                P(["_1o51eoah _1y0co91m _1bumglyw _sedtglyw"]),
                w && P(["_1y0ctrqk"]),
                f === "small" && P(["_5sag1yx9"]),
                f === "medium" && P(["_5sag1ttt"]),
                f === "large" && P(["_5sagpwmj"]),
                v && f === "small" && P(["_5sag14ed"]),
                v && f === "medium" && P(["_5sagluct"]),
                v && f === "large" && P(["_5sag1ttt"]),
                v && P(["_ju255cps _1o51q7pw"]),
                !v && n === "linear" && P(["_1pglp3kn"]),
                !v && n === "ease-out" && P(["_1pgldkwg"]),
                !v && n === "ease-in" && P(["_1pgl1nzg"]),
                !v && n === "ease-in-40-out" && P(["_1pgl5y64"]),
                !v && n === "ease-in-60-out" && P(["_1pgl1ddy"]),
                !v && n === "ease-in-80-out" && P(["_1pglannl"]),
                !v && n === "ease-in-out" && P(["_1pgl1fu8"]),
                v && n === "linear" && P(["_1pglp3kn"]),
                v && o === "ease-out" && P(["_1pgldkwg"]),
                v && o === "ease-in" && P(["_1pgl1nzg"]),
                v && o === "ease-in-40-out" && P(["_1pgl5y64"]),
                v && o === "ease-in-60-out" && P(["_1pgl1ddy"]),
                v && o === "ease-in-80-out" && P(["_1pglannl"]),
                v && o === "ease-in-out" && P(["_1pgl1fu8"]),
                ((!v && i === "fade-in") || (v && s === "fade-in")) && P(["_j7hq1cgr"]),
                ((!v && i === "fade-out") || (v && s === "fade-out")) && P(["_j7hq1lln"]),
                ((!v && i === "zoom-in") || (v && s === "zoom-in")) && P(["_j7hqe8p0"]),
                ((!v && i === "zoom-out") || (v && s === "zoom-out")) && P(["_j7hqy6ql"]),
                ((!v && i === "slide-in-from-top") || (v && s === "slide-in-from-top")) &&
                  P(["_j7hqqshu"]),
                ((!v && i === "slide-out-from-top") || (v && s === "slide-out-from-top")) &&
                  P(["_j7hq7ri4"]),
                ((!v && i === "slide-in-from-right") || (v && s === "slide-in-from-right")) &&
                  P(["_j7hqdfjr"]),
                ((!v && i === "slide-out-from-right") || (v && s === "slide-out-from-right")) &&
                  P(["_j7hqonfj"]),
                ((!v && i === "slide-in-from-bottom") || (v && s === "slide-in-from-bottom")) &&
                  P(["_j7hq1liq"]),
                ((!v && i === "slide-out-from-bottom") || (v && s === "slide-out-from-bottom")) &&
                  P(["_j7hqhnf1"]),
                ((!v && i === "slide-in-from-left") || (v && s === "slide-in-from-left")) &&
                  P(["_j7hq1bh1"]),
                ((!v && i === "slide-out-from-left") || (v && s === "slide-out-from-left")) &&
                  P(["_j7hqj08w"]),
                ((!v && i === "fade-in-from-top") || (v && s === "fade-in-from-top")) &&
                  P(["_j7hq2iua"]),
                ((!v && i === "fade-out-from-top") || (v && s === "fade-out-from-top")) &&
                  P(["_j7hq39va"]),
                ((!v && i === "fade-in-from-left") || (v && s === "fade-in-from-left")) &&
                  P(["_j7hq15m2"]),
                ((!v && i === "fade-out-from-left") || (v && s === "fade-out-from-left")) &&
                  P(["_j7hq1yiv"]),
                ((!v && i === "fade-in-from-bottom") || (v && s === "fade-in-from-bottom")) &&
                  P(["_j7hq1w00"]),
                ((!v && i === "fade-out-from-bottom") || (v && s === "fade-out-from-bottom")) &&
                  P(["_j7hqzy3z"]),
                ((!v && i === "fade-in-from-right") || (v && s === "fade-in-from-right")) &&
                  P(["_j7hqpqak"]),
                ((!v && i === "fade-out-from-right") || (v && s === "fade-out-from-right")) &&
                  P(["_j7hq1ebg"]),
                ((!v && i === "fade-in-from-top-constant") ||
                  (v && s === "fade-in-from-top-constant")) &&
                  P(["_j7hqm2e2"]),
                ((!v && i === "fade-out-from-top-constant") ||
                  (v && s === "fade-out-from-top-constant")) &&
                  P(["_j7hq97jn"]),
                ((!v && i === "fade-in-from-left-constant") ||
                  (v && s === "fade-in-from-left-constant")) &&
                  P(["_j7hqovgq"]),
                ((!v && i === "fade-out-from-left-constant") ||
                  (v && s === "fade-out-from-left-constant")) &&
                  P(["_j7hq15do"]),
                ((!v && i === "fade-in-from-bottom-constant") ||
                  (v && s === "fade-in-from-bottom-constant")) &&
                  P(["_j7hq797a"]),
                ((!v && i === "fade-out-from-bottom-constant") ||
                  (v && s === "fade-out-from-bottom-constant")) &&
                  P(["_j7hqwo7r"]),
                ((!v && i === "fade-in-from-right-constant") ||
                  (v && s === "fade-in-from-right-constant")) &&
                  P(["_j7hqt8u5"]),
                ((!v && i === "fade-out-from-right-constant") ||
                  (v && s === "fade-out-from-right-constant")) &&
                  P(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(k, "ms") },
        },
        y,
      )
    );
  },
  SO = { top: "bottom", bottom: "top", left: "right", right: "left" },
  EO = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      o = t.entranceDirection,
      i = t.exitDirection,
      c = t.distance,
      s = c === void 0 ? "proportional" : c,
      u = t.onFinish,
      l = t.isPaused,
      d = o !== void 0 ? SO[o] : void 0,
      f =
        i || d
          ? "fade-out-from-".concat(i || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return O.createElement(
      OO,
      {
        duration: a,
        enteringAnimation: o
          ? "fade-in-from-".concat(o).concat(s === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: f,
        animationTimingFunction: "ease-in-out",
        onFinish: u,
        isPaused: l,
      },
      r,
    );
  },
  xO = _.createContext();
_.createContext();
var CO = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  PO = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  RO = function (t, r) {
    if (typeof t == "function") return PO(t, r);
    t != null && (t.current = r);
  },
  sf = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        o = n[1];
      return ((r[a] = o), r);
    }, {});
  },
  cf =
    typeof window < "u" && window.document && window.document.createElement
      ? _.useLayoutEffect
      : _.useEffect,
  Be = "top",
  ct = "bottom",
  ut = "right",
  ze = "left",
  wc = "auto",
  Ua = [Be, ct, ut, ze],
  Xr = "start",
  Ia = "end",
  AO = "clippingParents",
  xh = "viewport",
  ca = "popper",
  IO = "reference",
  uf = Ua.reduce(function (e, t) {
    return e.concat([t + "-" + Xr, t + "-" + Ia]);
  }, []),
  Ch = [].concat(Ua, [wc]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Xr, t + "-" + Ia]);
  }, []),
  jO = "beforeRead",
  DO = "read",
  TO = "afterRead",
  MO = "beforeMain",
  LO = "main",
  NO = "afterMain",
  FO = "beforeWrite",
  BO = "write",
  zO = "afterWrite",
  UO = [jO, DO, TO, MO, LO, NO, FO, BO, zO];
function Dt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function We(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Or(e) {
  var t = We(e).Element;
  return e instanceof t || e instanceof Element;
}
function st(e) {
  var t = We(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function kc(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = We(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function qO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      o = t.elements[r];
    !st(o) ||
      !Dt(o) ||
      (Object.assign(o.style, n),
      Object.keys(a).forEach(function (i) {
        var c = a[i];
        c === !1 ? o.removeAttribute(i) : o.setAttribute(i, c === !0 ? "" : c);
      }));
  });
}
function $O(e) {
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
        var a = t.elements[n],
          o = t.attributes[n] || {},
          i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          c = i.reduce(function (s, u) {
            return ((s[u] = ""), s);
          }, {});
        !st(a) ||
          !Dt(a) ||
          (Object.assign(a.style, c),
          Object.keys(o).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const VO = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: qO,
  effect: $O,
  requires: ["computeStyles"],
};
function At(e) {
  return e.split("-")[0];
}
var gr = Math.max,
  Mo = Math.min,
  Zr = Math.round;
function Ks() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Ph() {
  return !/^((?!chrome|android).)*safari/i.test(Ks());
}
function Qr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    o = 1;
  t &&
    st(e) &&
    ((a = (e.offsetWidth > 0 && Zr(n.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && Zr(n.height) / e.offsetHeight) || 1));
  var i = Or(e) ? We(e) : window,
    c = i.visualViewport,
    s = !Ph() && r,
    u = (n.left + (s && c ? c.offsetLeft : 0)) / a,
    l = (n.top + (s && c ? c.offsetTop : 0)) / o,
    d = n.width / a,
    f = n.height / o;
  return { width: d, height: f, top: l, right: u + d, bottom: l + f, left: u, x: u, y: l };
}
function Oc(e) {
  var t = Qr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Rh(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && kc(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Jt(e) {
  return We(e).getComputedStyle(e);
}
function GO(e) {
  return ["table", "td", "th"].indexOf(Dt(e)) >= 0;
}
function sr(e) {
  return ((Or(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function si(e) {
  return Dt(e) === "html" ? e : e.assignedSlot || e.parentNode || (kc(e) ? e.host : null) || sr(e);
}
function lf(e) {
  return !st(e) || Jt(e).position === "fixed" ? null : e.offsetParent;
}
function HO(e) {
  var t = /firefox/i.test(Ks()),
    r = /Trident/i.test(Ks());
  if (r && st(e)) {
    var n = Jt(e);
    if (n.position === "fixed") return null;
  }
  var a = si(e);
  for (kc(a) && (a = a.host); st(a) && ["html", "body"].indexOf(Dt(a)) < 0; ) {
    var o = Jt(a);
    if (
      o.transform !== "none" ||
      o.perspective !== "none" ||
      o.contain === "paint" ||
      ["transform", "perspective"].indexOf(o.willChange) !== -1 ||
      (t && o.willChange === "filter") ||
      (t && o.filter && o.filter !== "none")
    )
      return a;
    a = a.parentNode;
  }
  return null;
}
function qa(e) {
  for (var t = We(e), r = lf(e); r && GO(r) && Jt(r).position === "static"; ) r = lf(r);
  return r && (Dt(r) === "html" || (Dt(r) === "body" && Jt(r).position === "static"))
    ? t
    : r || HO(e) || t;
}
function Sc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function _a(e, t, r) {
  return gr(e, Mo(t, r));
}
function KO(e, t, r) {
  var n = _a(e, t, r);
  return n > r ? r : n;
}
function Ah() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ih(e) {
  return Object.assign({}, Ah(), e);
}
function jh(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var WO = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Ih(typeof t != "number" ? t : jh(t, Ua))
  );
};
function JO(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    o = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    c = At(r.placement),
    s = Sc(c),
    u = [ze, ut].indexOf(c) >= 0,
    l = u ? "height" : "width";
  if (!(!o || !i)) {
    var d = WO(a.padding, r),
      f = Oc(o),
      p = s === "y" ? Be : ze,
      h = s === "y" ? ct : ut,
      v = r.rects.reference[l] + r.rects.reference[s] - i[s] - r.rects.popper[l],
      g = i[s] - r.rects.reference[s],
      b = qa(o),
      m = b ? (s === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      w = v / 2 - g / 2,
      k = d[p],
      y = m - f[l] - d[h],
      S = m / 2 - f[l] / 2 + w,
      x = _a(k, S, y),
      A = s;
    r.modifiersData[n] = ((t = {}), (t[A] = x), (t.centerOffset = x - S), t);
  }
}
function YO(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (Rh(t.elements.popper, a) && (t.elements.arrow = a)));
}
const XO = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: JO,
  effect: YO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function en(e) {
  return e.split("-")[1];
}
var ZO = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function QO(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Zr(r * a) / a || 0, y: Zr(n * a) / a || 0 };
}
function df(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    a = e.placement,
    o = e.variation,
    i = e.offsets,
    c = e.position,
    s = e.gpuAcceleration,
    u = e.adaptive,
    l = e.roundOffsets,
    d = e.isFixed,
    f = i.x,
    p = f === void 0 ? 0 : f,
    h = i.y,
    v = h === void 0 ? 0 : h,
    g = typeof l == "function" ? l({ x: p, y: v }) : { x: p, y: v };
  ((p = g.x), (v = g.y));
  var b = i.hasOwnProperty("x"),
    m = i.hasOwnProperty("y"),
    w = ze,
    k = Be,
    y = window;
  if (u) {
    var S = qa(r),
      x = "clientHeight",
      A = "clientWidth";
    if (
      (S === We(r) &&
        ((S = sr(r)),
        Jt(S).position !== "static" &&
          c === "absolute" &&
          ((x = "scrollHeight"), (A = "scrollWidth"))),
      (S = S),
      a === Be || ((a === ze || a === ut) && o === Ia))
    ) {
      k = ct;
      var j = d && S === y && y.visualViewport ? y.visualViewport.height : S[x];
      ((v -= j - n.height), (v *= s ? 1 : -1));
    }
    if (a === ze || ((a === Be || a === ct) && o === Ia)) {
      w = ut;
      var R = d && S === y && y.visualViewport ? y.visualViewport.width : S[A];
      ((p -= R - n.width), (p *= s ? 1 : -1));
    }
  }
  var M = Object.assign({ position: c }, u && ZO),
    U = l === !0 ? QO({ x: p, y: v }, We(r)) : { x: p, y: v };
  if (((p = U.x), (v = U.y), s)) {
    var B;
    return Object.assign(
      {},
      M,
      ((B = {}),
      (B[k] = m ? "0" : ""),
      (B[w] = b ? "0" : ""),
      (B.transform =
        (y.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + v + "px)"
          : "translate3d(" + p + "px, " + v + "px, 0)"),
      B),
    );
  }
  return Object.assign(
    {},
    M,
    ((t = {}), (t[k] = m ? v + "px" : ""), (t[w] = b ? p + "px" : ""), (t.transform = ""), t),
  );
}
function eS(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    o = r.adaptive,
    i = o === void 0 ? !0 : o,
    c = r.roundOffsets,
    s = c === void 0 ? !0 : c,
    u = {
      placement: At(t.placement),
      variation: en(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      df(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: s,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        df(
          Object.assign({}, u, {
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
const tS = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: eS, data: {} };
var to = { passive: !0 };
function rS(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    o = a === void 0 ? !0 : a,
    i = n.resize,
    c = i === void 0 ? !0 : i,
    s = We(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      u.forEach(function (l) {
        l.addEventListener("scroll", r.update, to);
      }),
    c && s.addEventListener("resize", r.update, to),
    function () {
      (o &&
        u.forEach(function (l) {
          l.removeEventListener("scroll", r.update, to);
        }),
        c && s.removeEventListener("resize", r.update, to));
    }
  );
}
const nS = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: rS,
  data: {},
};
var aS = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ho(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return aS[t];
  });
}
var oS = { start: "end", end: "start" };
function ff(e) {
  return e.replace(/start|end/g, function (t) {
    return oS[t];
  });
}
function Ec(e) {
  var t = We(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function xc(e) {
  return Qr(sr(e)).left + Ec(e).scrollLeft;
}
function iS(e, t) {
  var r = We(e),
    n = sr(e),
    a = r.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    c = 0,
    s = 0;
  if (a) {
    ((o = a.width), (i = a.height));
    var u = Ph();
    (u || (!u && t === "fixed")) && ((c = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: o, height: i, x: c + xc(e), y: s };
}
function sS(e) {
  var t,
    r = sr(e),
    n = Ec(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = gr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    i = gr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    c = -n.scrollLeft + xc(e),
    s = -n.scrollTop;
  return (
    Jt(a || r).direction === "rtl" && (c += gr(r.clientWidth, a ? a.clientWidth : 0) - o),
    { width: o, height: i, x: c, y: s }
  );
}
function Cc(e) {
  var t = Jt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Dh(e) {
  return ["html", "body", "#document"].indexOf(Dt(e)) >= 0
    ? e.ownerDocument.body
    : st(e) && Cc(e)
      ? e
      : Dh(si(e));
}
function ma(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Dh(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = We(n),
    i = a ? [o].concat(o.visualViewport || [], Cc(n) ? n : []) : n,
    c = t.concat(i);
  return a ? c : c.concat(ma(si(i)));
}
function Ws(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function cS(e, t) {
  var r = Qr(e, !1, t === "fixed");
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
function vf(e, t, r) {
  return t === xh ? Ws(iS(e, r)) : Or(t) ? cS(t, r) : Ws(sS(sr(e)));
}
function uS(e) {
  var t = ma(si(e)),
    r = ["absolute", "fixed"].indexOf(Jt(e).position) >= 0,
    n = r && st(e) ? qa(e) : e;
  return Or(n)
    ? t.filter(function (a) {
        return Or(a) && Rh(a, n) && Dt(a) !== "body";
      })
    : [];
}
function lS(e, t, r, n) {
  var a = t === "clippingParents" ? uS(e) : [].concat(t),
    o = [].concat(a, [r]),
    i = o[0],
    c = o.reduce(
      function (s, u) {
        var l = vf(e, u, n);
        return (
          (s.top = gr(l.top, s.top)),
          (s.right = Mo(l.right, s.right)),
          (s.bottom = Mo(l.bottom, s.bottom)),
          (s.left = gr(l.left, s.left)),
          s
        );
      },
      vf(e, i, n),
    );
  return (
    (c.width = c.right - c.left),
    (c.height = c.bottom - c.top),
    (c.x = c.left),
    (c.y = c.top),
    c
  );
}
function Th(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? At(n) : null,
    o = n ? en(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    c = t.y + t.height / 2 - r.height / 2,
    s;
  switch (a) {
    case Be:
      s = { x: i, y: t.y - r.height };
      break;
    case ct:
      s = { x: i, y: t.y + t.height };
      break;
    case ut:
      s = { x: t.x + t.width, y: c };
      break;
    case ze:
      s = { x: t.x - r.width, y: c };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var u = a ? Sc(a) : null;
  if (u != null) {
    var l = u === "y" ? "height" : "width";
    switch (o) {
      case Xr:
        s[u] = s[u] - (t[l] / 2 - r[l] / 2);
        break;
      case Ia:
        s[u] = s[u] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function ja(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    o = r.strategy,
    i = o === void 0 ? e.strategy : o,
    c = r.boundary,
    s = c === void 0 ? AO : c,
    u = r.rootBoundary,
    l = u === void 0 ? xh : u,
    d = r.elementContext,
    f = d === void 0 ? ca : d,
    p = r.altBoundary,
    h = p === void 0 ? !1 : p,
    v = r.padding,
    g = v === void 0 ? 0 : v,
    b = Ih(typeof g != "number" ? g : jh(g, Ua)),
    m = f === ca ? IO : ca,
    w = e.rects.popper,
    k = e.elements[h ? m : f],
    y = lS(Or(k) ? k : k.contextElement || sr(e.elements.popper), s, l, i),
    S = Qr(e.elements.reference),
    x = Th({ reference: S, element: w, placement: a }),
    A = Ws(Object.assign({}, w, x)),
    j = f === ca ? A : S,
    R = {
      top: y.top - j.top + b.top,
      bottom: j.bottom - y.bottom + b.bottom,
      left: y.left - j.left + b.left,
      right: j.right - y.right + b.right,
    },
    M = e.modifiersData.offset;
  if (f === ca && M) {
    var U = M[a];
    Object.keys(R).forEach(function (B) {
      var $ = [ut, ct].indexOf(B) >= 0 ? 1 : -1,
        q = [Be, ct].indexOf(B) >= 0 ? "y" : "x";
      R[B] += U[q] * $;
    });
  }
  return R;
}
function dS(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    o = r.rootBoundary,
    i = r.padding,
    c = r.flipVariations,
    s = r.allowedAutoPlacements,
    u = s === void 0 ? Ch : s,
    l = en(n),
    d = l
      ? c
        ? uf
        : uf.filter(function (h) {
            return en(h) === l;
          })
      : Ua,
    f = d.filter(function (h) {
      return u.indexOf(h) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (h, v) {
    return ((h[v] = ja(e, { placement: v, boundary: a, rootBoundary: o, padding: i })[At(v)]), h);
  }, {});
  return Object.keys(p).sort(function (h, v) {
    return p[h] - p[v];
  });
}
function fS(e) {
  if (At(e) === wc) return [];
  var t = ho(e);
  return [ff(e), t, ff(t)];
}
function vS(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var a = r.mainAxis,
        o = a === void 0 ? !0 : a,
        i = r.altAxis,
        c = i === void 0 ? !0 : i,
        s = r.fallbackPlacements,
        u = r.padding,
        l = r.boundary,
        d = r.rootBoundary,
        f = r.altBoundary,
        p = r.flipVariations,
        h = p === void 0 ? !0 : p,
        v = r.allowedAutoPlacements,
        g = t.options.placement,
        b = At(g),
        m = b === g,
        w = s || (m || !h ? [ho(g)] : fS(g)),
        k = [g].concat(w).reduce(function (de, pe) {
          return de.concat(
            At(pe) === wc
              ? dS(t, {
                  placement: pe,
                  boundary: l,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: h,
                  allowedAutoPlacements: v,
                })
              : pe,
          );
        }, []),
        y = t.rects.reference,
        S = t.rects.popper,
        x = new Map(),
        A = !0,
        j = k[0],
        R = 0;
      R < k.length;
      R++
    ) {
      var M = k[R],
        U = At(M),
        B = en(M) === Xr,
        $ = [Be, ct].indexOf(U) >= 0,
        q = $ ? "width" : "height",
        V = ja(t, { placement: M, boundary: l, rootBoundary: d, altBoundary: f, padding: u }),
        G = $ ? (B ? ut : ze) : B ? ct : Be;
      y[q] > S[q] && (G = ho(G));
      var K = ho(G),
        F = [];
      if (
        (o && F.push(V[U] <= 0),
        c && F.push(V[G] <= 0, V[K] <= 0),
        F.every(function (de) {
          return de;
        }))
      ) {
        ((j = M), (A = !1));
        break;
      }
      x.set(M, F);
    }
    if (A)
      for (
        var D = h ? 3 : 1,
          _e = function (pe) {
            var ue = k.find(function (De) {
              var ke = x.get(De);
              if (ke)
                return ke.slice(0, pe).every(function (Te) {
                  return Te;
                });
            });
            if (ue) return ((j = ue), "break");
          },
          ie = D;
        ie > 0;
        ie--
      ) {
        var ce = _e(ie);
        if (ce === "break") break;
      }
    t.placement !== j && ((t.modifiersData[n]._skip = !0), (t.placement = j), (t.reset = !0));
  }
}
const pS = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: vS,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function pf(e, t, r) {
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
function hf(e) {
  return [Be, ut, ct, ze].some(function (t) {
    return e[t] >= 0;
  });
}
function hS(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    i = ja(t, { elementContext: "reference" }),
    c = ja(t, { altBoundary: !0 }),
    s = pf(i, n),
    u = pf(c, a, o),
    l = hf(s),
    d = hf(u);
  ((t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: u,
    isReferenceHidden: l,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": l,
      "data-popper-escaped": d,
    })));
}
const gS = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hS,
};
function bS(e, t, r) {
  var n = At(e),
    a = [ze, Be].indexOf(n) >= 0 ? -1 : 1,
    o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = o[0],
    c = o[1];
  return (
    (i = i || 0),
    (c = (c || 0) * a),
    [ze, ut].indexOf(n) >= 0 ? { x: c, y: i } : { x: i, y: c }
  );
}
function _S(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    o = a === void 0 ? [0, 0] : a,
    i = Ch.reduce(function (l, d) {
      return ((l[d] = bS(d, t.rects, o)), l);
    }, {}),
    c = i[t.placement],
    s = c.x,
    u = c.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[n] = i));
}
const mS = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: _S };
function yS(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Th({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const wS = { name: "popperOffsets", enabled: !0, phase: "read", fn: yS, data: {} };
function kS(e) {
  return e === "x" ? "y" : "x";
}
function OS(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.mainAxis,
    o = a === void 0 ? !0 : a,
    i = r.altAxis,
    c = i === void 0 ? !1 : i,
    s = r.boundary,
    u = r.rootBoundary,
    l = r.altBoundary,
    d = r.padding,
    f = r.tether,
    p = f === void 0 ? !0 : f,
    h = r.tetherOffset,
    v = h === void 0 ? 0 : h,
    g = ja(t, { boundary: s, rootBoundary: u, padding: d, altBoundary: l }),
    b = At(t.placement),
    m = en(t.placement),
    w = !m,
    k = Sc(b),
    y = kS(k),
    S = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    A = t.rects.popper,
    j = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v,
    R =
      typeof j == "number"
        ? { mainAxis: j, altAxis: j }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, j),
    M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    U = { x: 0, y: 0 };
  if (S) {
    if (o) {
      var B,
        $ = k === "y" ? Be : ze,
        q = k === "y" ? ct : ut,
        V = k === "y" ? "height" : "width",
        G = S[k],
        K = G + g[$],
        F = G - g[q],
        D = p ? -A[V] / 2 : 0,
        _e = m === Xr ? x[V] : A[V],
        ie = m === Xr ? -A[V] : -x[V],
        ce = t.elements.arrow,
        de = p && ce ? Oc(ce) : { width: 0, height: 0 },
        pe = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Ah(),
        ue = pe[$],
        De = pe[q],
        ke = _a(0, x[V], de[V]),
        Te = w ? x[V] / 2 - D - ke - ue - R.mainAxis : _e - ke - ue - R.mainAxis,
        fe = w ? -x[V] / 2 + D + ke + De + R.mainAxis : ie + ke + De + R.mainAxis,
        Me = t.elements.arrow && qa(t.elements.arrow),
        Yt = Me ? (k === "y" ? Me.clientTop || 0 : Me.clientLeft || 0) : 0,
        lt = (B = M?.[k]) != null ? B : 0,
        xe = G + Te - lt - Yt,
        Ce = G + fe - lt,
        mt = _a(p ? Mo(K, xe) : K, G, p ? gr(F, Ce) : F);
      ((S[k] = mt), (U[k] = mt - G));
    }
    if (c) {
      var Ze,
        $e = k === "x" ? Be : ze,
        Le = k === "x" ? ct : ut,
        Ae = S[y],
        re = y === "y" ? "height" : "width",
        Oe = Ae + g[$e],
        Ie = Ae - g[Le],
        yt = [Be, ze].indexOf(b) !== -1,
        Pr = (Ze = M?.[y]) != null ? Ze : 0,
        le = yt ? Oe : Ae - x[re] - A[re] - Pr + R.altAxis,
        Xt = yt ? Ae + x[re] + A[re] - Pr - R.altAxis : Ie,
        Qe = p && yt ? KO(le, Ae, Xt) : _a(p ? le : Oe, Ae, p ? Xt : Ie);
      ((S[y] = Qe), (U[y] = Qe - Ae));
    }
    t.modifiersData[n] = U;
  }
}
const SS = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: OS,
  requiresIfExists: ["offset"],
};
function ES(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function xS(e) {
  return e === We(e) || !st(e) ? Ec(e) : ES(e);
}
function CS(e) {
  var t = e.getBoundingClientRect(),
    r = Zr(t.width) / e.offsetWidth || 1,
    n = Zr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function PS(e, t, r) {
  r === void 0 && (r = !1);
  var n = st(t),
    a = st(t) && CS(t),
    o = sr(t),
    i = Qr(e, a, r),
    c = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Dt(t) !== "body" || Cc(o)) && (c = xS(t)),
      st(t) ? ((s = Qr(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : o && (s.x = xc(o))),
    {
      x: i.left + c.scrollLeft - s.x,
      y: i.top + c.scrollTop - s.y,
      width: i.width,
      height: i.height,
    }
  );
}
function RS(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (o) {
    t.set(o.name, o);
  });
  function a(o) {
    r.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    (i.forEach(function (c) {
      if (!r.has(c)) {
        var s = t.get(c);
        s && a(s);
      }
    }),
      n.push(o));
  }
  return (
    e.forEach(function (o) {
      r.has(o.name) || a(o);
    }),
    n
  );
}
function AS(e) {
  var t = RS(e);
  return UO.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function IS(e) {
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
function jS(e) {
  var t = e.reduce(function (r, n) {
    var a = r[n.name];
    return (
      (r[n.name] = a
        ? Object.assign({}, a, n, {
            options: Object.assign({}, a.options, n.options),
            data: Object.assign({}, a.data, n.data),
          })
        : n),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var gf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function bf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function DS(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    o = a === void 0 ? gf : a;
  return function (c, s, u) {
    u === void 0 && (u = o);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, gf, o),
        modifiersData: {},
        elements: { reference: c, popper: s },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      p = {
        state: l,
        setOptions: function (b) {
          var m = typeof b == "function" ? b(l.options) : b;
          (v(),
            (l.options = Object.assign({}, o, l.options, m)),
            (l.scrollParents = {
              reference: Or(c) ? ma(c) : c.contextElement ? ma(c.contextElement) : [],
              popper: ma(s),
            }));
          var w = AS(jS([].concat(n, l.options.modifiers)));
          return (
            (l.orderedModifiers = w.filter(function (k) {
              return k.enabled;
            })),
            h(),
            p.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var b = l.elements,
              m = b.reference,
              w = b.popper;
            if (bf(m, w)) {
              ((l.rects = {
                reference: PS(m, qa(w), l.options.strategy === "fixed"),
                popper: Oc(w),
              }),
                (l.reset = !1),
                (l.placement = l.options.placement),
                l.orderedModifiers.forEach(function (R) {
                  return (l.modifiersData[R.name] = Object.assign({}, R.data));
                }));
              for (var k = 0; k < l.orderedModifiers.length; k++) {
                if (l.reset === !0) {
                  ((l.reset = !1), (k = -1));
                  continue;
                }
                var y = l.orderedModifiers[k],
                  S = y.fn,
                  x = y.options,
                  A = x === void 0 ? {} : x,
                  j = y.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: A, name: j, instance: p }) || l);
              }
            }
          }
        },
        update: IS(function () {
          return new Promise(function (g) {
            (p.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (v(), (f = !0));
        },
      };
    if (!bf(c, s)) return p;
    p.setOptions(u).then(function (g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      l.orderedModifiers.forEach(function (g) {
        var b = g.name,
          m = g.options,
          w = m === void 0 ? {} : m,
          k = g.effect;
        if (typeof k == "function") {
          var y = k({ state: l, name: b, instance: p, options: w }),
            S = function () {};
          d.push(y || S);
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
var TS = [nS, wS, tS, VO, mS, pS, SS, XO, gS],
  MS = DS({ defaultModifiers: TS }),
  vs,
  _f;
function LS() {
  if (_f) return vs;
  _f = 1;
  var e = typeof Element < "u",
    t = typeof Map == "function",
    r = typeof Set == "function",
    n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function a(o, i) {
    if (o === i) return !0;
    if (o && i && typeof o == "object" && typeof i == "object") {
      if (o.constructor !== i.constructor) return !1;
      var c, s, u;
      if (Array.isArray(o)) {
        if (((c = o.length), c != i.length)) return !1;
        for (s = c; s-- !== 0; ) if (!a(o[s], i[s])) return !1;
        return !0;
      }
      var l;
      if (t && o instanceof Map && i instanceof Map) {
        if (o.size !== i.size) return !1;
        for (l = o.entries(); !(s = l.next()).done; ) if (!i.has(s.value[0])) return !1;
        for (l = o.entries(); !(s = l.next()).done; )
          if (!a(s.value[1], i.get(s.value[0]))) return !1;
        return !0;
      }
      if (r && o instanceof Set && i instanceof Set) {
        if (o.size !== i.size) return !1;
        for (l = o.entries(); !(s = l.next()).done; ) if (!i.has(s.value[0])) return !1;
        return !0;
      }
      if (n && ArrayBuffer.isView(o) && ArrayBuffer.isView(i)) {
        if (((c = o.length), c != i.length)) return !1;
        for (s = c; s-- !== 0; ) if (o[s] !== i[s]) return !1;
        return !0;
      }
      if (o.constructor === RegExp) return o.source === i.source && o.flags === i.flags;
      if (
        o.valueOf !== Object.prototype.valueOf &&
        typeof o.valueOf == "function" &&
        typeof i.valueOf == "function"
      )
        return o.valueOf() === i.valueOf();
      if (
        o.toString !== Object.prototype.toString &&
        typeof o.toString == "function" &&
        typeof i.toString == "function"
      )
        return o.toString() === i.toString();
      if (((u = Object.keys(o)), (c = u.length), c !== Object.keys(i).length)) return !1;
      for (s = c; s-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(i, u[s])) return !1;
      if (e && o instanceof Element) return !1;
      for (s = c; s-- !== 0; )
        if (
          !((u[s] === "_owner" || u[s] === "__v" || u[s] === "__o") && o.$$typeof) &&
          !a(o[u[s]], i[u[s]])
        )
          return !1;
      return !0;
    }
    return o !== o && i !== i;
  }
  return (
    (vs = function (i, c) {
      try {
        return a(i, c);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    vs
  );
}
var NS = LS();
const FS = or(NS);
var BS = [],
  zS = function (t, r, n) {
    n === void 0 && (n = {});
    var a = _.useRef(null),
      o = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || BS,
      },
      i = _.useState({
        styles: {
          popper: { position: o.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      c = i[0],
      s = i[1],
      u = _.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (p) {
            var h = p.state,
              v = Object.keys(h.elements);
            Lo.flushSync(function () {
              s({
                styles: sf(
                  v.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: sf(
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
      l = _.useMemo(
        function () {
          var f = {
            onFirstUpdate: o.onFirstUpdate,
            placement: o.placement,
            strategy: o.strategy,
            modifiers: [].concat(o.modifiers, [u, { name: "applyStyles", enabled: !1 }]),
          };
          return FS(a.current, f) ? a.current || f : ((a.current = f), f);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, u],
      ),
      d = _.useRef();
    return (
      cf(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      cf(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || MS,
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
        styles: c.styles,
        attributes: c.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  },
  US = function () {},
  qS = function () {
    return Promise.resolve(null);
  },
  $S = [];
function VS(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    o = e.modifiers,
    i = o === void 0 ? $S : o,
    c = e.referenceElement,
    s = e.onFirstUpdate,
    u = e.innerRef,
    l = e.children,
    d = _.useContext(xO),
    f = _.useState(null),
    p = f[0],
    h = f[1],
    v = _.useState(null),
    g = v[0],
    b = v[1];
  _.useEffect(
    function () {
      RO(u, p);
    },
    [u, p],
  );
  var m = _.useMemo(
      function () {
        return {
          placement: r,
          strategy: a,
          onFirstUpdate: s,
          modifiers: [].concat(i, [{ name: "arrow", enabled: g != null, options: { element: g } }]),
        };
      },
      [r, a, s, i, g],
    ),
    w = zS(c || d, p, m),
    k = w.state,
    y = w.styles,
    S = w.forceUpdate,
    x = w.update,
    A = _.useMemo(
      function () {
        return {
          ref: h,
          style: y.popper,
          placement: k ? k.placement : r,
          hasPopperEscaped:
            k && k.modifiersData.hide ? k.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            k && k.modifiersData.hide ? k.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: y.arrow, ref: b },
          forceUpdate: S || US,
          update: x || qS,
        };
      },
      [h, b, r, k, y, x, S],
    );
  return CO(l)(A);
}
function GS(e) {
  var t = e.viewportPadding;
  return [
    {
      name: "maxSizeData",
      enabled: !0,
      phase: "read",
      fn: function (n) {
        var a = n.state,
          o = n.name;
        window.visualViewport &&
          (a.modifiersData[o] = {
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
        var a,
          o,
          i,
          c,
          s = n.state,
          u = s.modifiersData.maxSizeData;
        if (
          !(
            typeof (u == null || (a = u.viewport) === null || a === void 0 ? void 0 : a.width) !=
              "number" ||
            typeof (u == null || (o = u.viewport) === null || o === void 0 ? void 0 : o.height) !=
              "number"
          )
        ) {
          var l = u.viewport,
            d = s.modifiersData.popperOffsets,
            f = d === void 0 ? { x: 0, y: 0 } : d,
            p = s.placement.split("-"),
            h = J(p, 1),
            v = h[0],
            g =
              (i =
                (c = s.modifiersData) === null ||
                c === void 0 ||
                (c = c.offset) === null ||
                c === void 0
                  ? void 0
                  : c[s.placement]) !== null && i !== void 0
                ? i
                : { x: 0, y: 0 },
            b = l.width - 2 * t,
            m = l.height - 2 * t;
          (v === "top" && (m = s.rects.reference.y + g.y - t),
            v === "bottom" && (m = l.height - f.y - t),
            v === "left" && (b = s.rects.reference.x + g.x - t),
            v === "right" && (b = l.width - f.x - t),
            (s.styles.popper.maxWidth = "".concat(b, "px")),
            (s.styles.popper.maxHeight = "".concat(m, "px")));
        }
      },
    },
  ];
}
var Js = 5,
  HS = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: Js,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function KS() {
  return null;
}
var WS = [0, 8];
function JS(e) {
  var t = e.children,
    r = t === void 0 ? KS : t,
    n = e.offset,
    a = n === void 0 ? WS : n,
    o = e.placement,
    i = o === void 0 ? "bottom-start" : o,
    c = e.referenceElement,
    s = c === void 0 ? void 0 : c,
    u = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    f = e.shouldFitViewport,
    p = f === void 0 ? !1 : f,
    h = J(a, 2),
    v = h[0],
    g = h[1],
    b = _.useMemo(
      function () {
        var w = {
            name: "preventOverflow",
            options: { padding: Js, rootBoundary: p ? "viewport" : "document" },
          },
          k = { name: "offset", options: { offset: [v, g] } },
          y = p ? GS({ viewportPadding: Js }) : [];
        return [].concat(HS, [w, k], Ve(y));
      },
      [v, g, p],
    ),
    m = _.useMemo(
      function () {
        return u == null ? b : [].concat(Ve(b), Ve(u));
      },
      [b, u],
    );
  return O.createElement(VS, { modifiers: m, placement: i, strategy: d, referenceElement: s }, r);
}
var Mh = "atlaskit-portal-container",
  Lh = "body > .atlaskit-portal-container",
  Nh = "atlaskit-portal",
  YS = function (t) {
    var r = document.createElement("div");
    return ((r.className = Nh), (r.style.zIndex = "".concat(t)), r);
  },
  Fh = function () {
    return document.body;
  },
  Bh = function () {
    var t = document.querySelector(Lh);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = Mh),
        (n.style.display = "flex"),
        (r = Fh()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  XS = function (t) {
    Bh().removeChild(t);
  },
  ZS = function (t) {
    t.parentElement || Bh().appendChild(t);
  },
  zh = function () {
    return document !== void 0;
  },
  QS = function (t) {
    if (zh()) {
      var r = document.createElement("div");
      return ((r.className = Nh), (r.style.zIndex = "".concat(t)), r);
    }
  },
  eE = function () {
    if (zh()) {
      var t = document.querySelector(Lh);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = Mh),
          (n.style.display = "flex"),
          (r = Fh()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function tE(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useMemo(
      function () {
        return YS(t);
      },
      [t],
    );
  return (
    ZS(n),
    _.useEffect(
      function () {
        return function () {
          XS(n);
        };
      },
      [n],
    ),
    Lo.createPortal(r, n)
  );
}
var Uh = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function rE(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useState(null),
    a = J(n, 2),
    o = a[0],
    i = a[1];
  Uh(
    function () {
      var s = QS(t);
      i(s);
      var u = eE();
      if (!(!s || !u))
        return (
          u.appendChild(s),
          function () {
            (s && u.removeChild(s), i(null));
          }
        );
    },
    [t],
  );
  var c = O.createElement(_.Suspense, { fallback: null }, r);
  return o ? Lo.createPortal(c, o) : null;
}
var nE = function (t) {
    var r = _.useState(!1),
      n = J(r, 2),
      a = n[0],
      o = n[1],
      i = _.useState(function () {
        return t === "layoutEffect" ? Uh : _.useEffect;
      }),
      c = J(i, 1),
      s = c[0];
    return (
      s(function () {
        o(!0);
      }, []),
      a
    );
  },
  aE = "akPortalMount",
  oE = "akPortalUnmount",
  mf = {
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
  iE = function (t) {
    return mf.hasOwnProperty(t) ? mf[t] : null;
  },
  sE = function (t, r) {
    var n = { layer: iE(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function yf(e, t) {
  var r = sE(e, t);
  window.dispatchEvent(r);
}
var cE = function (t) {
  var r = Number(t);
  _.useEffect(
    function () {
      return (
        yf(aE, r),
        function () {
          yf(oE, r);
        }
      );
    },
    [r],
  );
};
function uE(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    o = a === void 0 ? "effect" : a,
    i = nE(o);
  return (
    cE(r),
    kr("platform_design_system_team_portal_logic_r18_fix")
      ? O.createElement(rE, { zIndex: r }, n)
      : i
        ? O.createElement(tE, { zIndex: r }, n)
        : null
  );
}
var ya = new Set(),
  Da = null;
function wf() {
  if (!Da) {
    Da = ni.bindAll(window, [
      { type: "dragend", listener: ps },
      { type: "pointerdown", listener: ps },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            ps();
          };
        })(),
      },
    ]);
    var e = Array.from(ya);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function ps() {
  var e;
  ((e = Da) === null || e === void 0 || e(), (Da = null));
  var t = Array.from(ya);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function lE() {
  return ni.bindAll(window, [
    { type: "dragstart", listener: wf },
    { type: "dragenter", listener: wf },
  ]);
}
var ro = null;
function dE(e) {
  return (
    ro || (ro = lE()),
    ya.add(e),
    e.onRegister({ isDragging: Da !== null }),
    function () {
      if ((ya.delete(e), ya.size === 0)) {
        var r;
        ((r = ro) === null || r === void 0 || r(), (ro = null));
      }
    }
  );
}
var wa = null;
function va() {
  wa != null && (window.clearTimeout(wa), (wa = null));
}
function kf(e, t) {
  (va(),
    (wa = window.setTimeout(function () {
      ((wa = null), e());
    }, t)));
}
var wt = null;
function fE(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(wt && wt.entry === e);
  }
  function n() {
    r() && (va(), (wt = null));
  }
  function a() {
    (r() && e.done(), (t = "done"), n());
  }
  function o() {
    (r() && e.hide({ isImmediate: !0 }), a());
  }
  function i() {
    if (r()) {
      if (t === "waiting-to-hide") {
        ((t = "shown"), va());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), va(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function c(p) {
    var h = p.isImmediate;
    if (r()) {
      if (t === "waiting-to-show") {
        o();
        return;
      }
      if (t !== "waiting-to-hide") {
        if (h) {
          o();
          return;
        }
        ((t = "waiting-to-hide"),
          kf(function () {
            ((t = "hide-animating"), e.hide({ isImmediate: !1 }));
          }, e.delay));
      }
    }
  }
  function s() {
    r() && t === "hide-animating" && a();
  }
  function u() {
    return t === "shown" || t === "waiting-to-hide" || t === "hide-animating";
  }
  function l() {
    return e.source.type === "mouse" ? e.source.mouse : null;
  }
  function d() {
    var p = !!(wt && wt.isVisible());
    (wt && (va(), wt.entry.hide({ isImmediate: !0 }), wt.entry.done(), (wt = null)),
      (wt = { entry: e, isVisible: u }));
    function h() {
      ((t = "shown"), e.show({ isImmediate: p }));
    }
    if (p) {
      h();
      return;
    }
    ((t = "waiting-to-show"), kf(h, e.delay));
  }
  d();
  var f = {
    keep: i,
    abort: n,
    isActive: r,
    requestHide: c,
    finishHideAnimation: s,
    mousePosition: l(),
  };
  return f;
}
function vE(e, t) {
  var r = rk();
  return t ? "".concat(r(e)) : void 0;
}
var Of = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81u0j _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  pE = function (t) {
    var r = t.shortcut;
    return _.createElement(
      "div",
      { className: P([Of.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return _.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: P([Of.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  qh = _.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      o = t.children,
      i = t.placement,
      c = t.testId,
      s = t.onMouseOut,
      u = t.onMouseOver,
      l = t.id,
      d = t.shortcut;
    return _.createElement(
      "div",
      { ref: r, style: n, "data-testid": c ? "".concat(c, "--wrapper") : void 0 },
      _.createElement(
        "div",
        {
          role: "tooltip",
          className: P(["_80om73ad", a]),
          onMouseOut: s,
          onMouseOver: u,
          "data-placement": i,
          "data-testid": c,
          id: l,
        },
        o,
        d && _.createElement(pE, { shortcut: d }),
      ),
    );
  });
qh.displayName = "TooltipPrimitive";
var Sf = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  $h = _.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      o = t.children,
      i = t.truncate,
      c = t.placement,
      s = t.testId,
      u = t.onMouseOut,
      l = t.onMouseOver,
      d = t.id,
      f = t.shortcut;
    return _.createElement(
      qh,
      {
        ref: r,
        style: n,
        className: P([Sf.base, i && Sf.truncate, a]),
        placement: c,
        testId: s,
        id: d,
        onMouseOut: u,
        onMouseOver: l,
        shortcut: f,
      },
      o,
    );
  });
$h.displayName = "TooltipContainer";
function Ef(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function xf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var hE = nk.tooltip(),
  Cf = {
    componentName: "tooltip",
    packageName: "@atlaskit/tooltip",
    packageVersion: "0.0.0-development",
  },
  gE = { top: "bottom", bottom: "top", left: "right", right: "left" },
  bE = function (t) {
    return t.split("-")[0];
  };
function _E(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    o = a === void 0 ? "bottom" : a,
    i = e.content,
    c = e.truncate,
    s = c === void 0 ? !1 : c,
    u = e.component,
    l = u === void 0 ? $h : u,
    d = e.tag,
    f = d === void 0 ? "div" : d,
    p = e.testId,
    h = e.delay,
    v = h === void 0 ? 300 : h,
    g = e.onShow,
    b = g === void 0 ? Re : g,
    m = e.onHide,
    w = m === void 0 ? Re : m,
    k = e.canAppear,
    y = e.hideTooltipOnClick,
    S = y === void 0 ? !1 : y,
    x = e.hideTooltipOnMouseDown,
    A = x === void 0 ? !1 : x,
    j = e.analyticsContext,
    R = e.strategy,
    M = R === void 0 ? "fixed" : R,
    U = e.ignoreTooltipPointerEvents,
    B = U === void 0 ? !1 : U,
    $ = e.isScreenReaderAnnouncementDisabled,
    q = $ === void 0 ? !1 : $,
    V = e.shortcut,
    G = n === "mouse" ? o : n,
    K = Rl(Br({ fn: b, action: "displayed", analyticsData: j }, Cf)),
    F = Rl(Br({ fn: w, action: "hidden", analyticsData: j }, Cf)),
    D = _.useRef(null),
    _e = _.useState("hide"),
    ie = J(_e, 2),
    ce = ie[0],
    de = ie[1],
    pe = _.useRef(null),
    ue = _.useRef(null),
    De = function (oe) {
      ((ue.current = oe), (pe.current = oe ? oe.firstElementChild : null));
    },
    ke = _.useCallback(function (L) {
      pe.current = L;
    }, []),
    Te = sa(ce),
    fe = sa(K),
    Me = sa(F),
    Yt = sa(v),
    lt = sa(k),
    xe = _.useRef(!1),
    Ce = _.useCallback(function (L) {
      ((D.current = L), (xe.current = !1));
    }, []),
    mt = _.useCallback(
      function () {
        D.current &&
          (xe.current && Me.current(), (D.current = null), (xe.current = !1), de("hide"));
      },
      [Me],
    ),
    Ze = _.useCallback(
      function () {
        D.current && (D.current.abort(), xe.current && Me.current(), (D.current = null));
      },
      [Me],
    );
  _.useEffect(
    function () {
      return function () {
        D.current && Ze();
      };
    },
    [Ze],
  );
  var $e = _.useRef(!1);
  _.useEffect(function () {
    return dE({
      onRegister: function (oe) {
        var Nt = oe.isDragging;
        $e.current = Nt;
      },
      onDragStart: function () {
        var oe;
        ((oe = D.current) === null || oe === void 0 || oe.requestHide({ isImmediate: !0 }),
          ($e.current = !0));
      },
      onDragEnd: function () {
        $e.current = !1;
      },
    });
  }, []);
  var Le = _.useCallback(
      function (L) {
        var oe;
        if (!$e.current) {
          if ((D.current && !D.current.isActive() && Ze(), D.current && D.current.isActive())) {
            D.current.keep();
            return;
          }
          if (!(lt.current && !((oe = lt.current) !== null && oe !== void 0 && oe.call(lt)))) {
            var Nt = {
                source: L,
                delay: Yt.current,
                show: function (Rr) {
                  var sn = Rr.isImmediate;
                  (xe.current || ((xe.current = !0), fe.current()),
                    de(sn ? "show-immediate" : "fade-in"));
                },
                hide: function (Rr) {
                  var sn = Rr.isImmediate;
                  de(sn ? "hide" : "before-fade-out");
                },
                done: mt,
              },
              ui = fE(Nt);
            Ce(ui);
          }
        }
      },
      [lt, Yt, mt, Ce, Ze, fe],
    ),
    Ae = _.useCallback(
      function () {
        var L;
        (L = D.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
      },
      [D],
    );
  (iO({ onClose: Ae, isDisabled: ce === "hide" || ce === "fade-out" }),
    _.useEffect(
      function () {
        if (ce === "hide") return Re;
        ce === "before-fade-out" && de("fade-out");
        var L = ni.bind(window, {
          type: "scroll",
          listener: function () {
            D.current && D.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return L;
      },
      [ce],
    ));
  var re = _.useCallback(
      function () {
        A && D.current && D.current.requestHide({ isImmediate: !0 });
      },
      [A],
    ),
    Oe = _.useCallback(
      function () {
        S && D.current && D.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    Ie = _.useCallback(
      function (L) {
        if (!(ue.current && L.target === ue.current) && !L.defaultPrevented) {
          L.preventDefault();
          var oe =
            n === "mouse"
              ? { type: "mouse", mouse: Ef({ left: L.clientX, top: L.clientY }) }
              : { type: "keyboard" };
          Le(oe);
        }
      },
      [n, Le],
    ),
    yt = _.useCallback(function (L) {
      (ue.current && L.target === ue.current) ||
        L.defaultPrevented ||
        (L.preventDefault(), D.current && D.current.requestHide({ isImmediate: !1 }));
    }, []),
    Pr =
      n === "mouse"
        ? function (L) {
            var oe;
            (oe = D.current) !== null &&
              oe !== void 0 &&
              oe.isActive() &&
              (D.current.mousePosition = Ef({ left: L.clientX, top: L.clientY }));
          }
        : void 0,
    le = _.useCallback(function () {
      if (D.current && D.current.isActive()) {
        D.current.keep();
        return;
      }
    }, []),
    Xt = _.useCallback(
      function (L) {
        try {
          if (!L.target.matches(":focus-visible") && kr("platform-tooltip-focus-visible-new"))
            return;
        } catch {}
        Le({ type: "keyboard" });
      },
      [Le],
    ),
    Qe = _.useCallback(function () {
      D.current && D.current.requestHide({ isImmediate: !1 });
    }, []),
    Lt = _.useCallback(
      function (L) {
        L === "exiting" &&
          Te.current === "fade-out" &&
          D.current &&
          D.current.finishHideAnimation();
      },
      [Te],
    ),
    $a = f,
    dt = ce !== "hide" && !!i,
    Va = !q && dt,
    Rc = ce !== "hide" && ce !== "fade-out",
    eg = _.useCallback(function () {
      var L;
      (L = D.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
    }, []);
  lO({ isOpen: dt && Rc, onClose: eg });
  var Ac = function () {
      var oe;
      if (n === "mouse" && (oe = D.current) !== null && oe !== void 0 && oe.mousePosition) {
        var Nt;
        return (Nt = D.current) === null || Nt === void 0 ? void 0 : Nt.mousePosition;
      }
      return pe.current || void 0;
    },
    on = vE("tooltip", Va),
    ci = {
      onMouseOver: Ie,
      onMouseOut: yt,
      onMouseMove: Pr,
      onMouseDown: re,
      onClick: Oe,
      onFocus: Xt,
      onBlur: Qe,
    };
  p && (ci["data-testid"] = "".concat(p, "--container"));
  var Ic = typeof t == "function";
  _.useEffect(
    function () {
      if (!Ic) {
        var L = pe.current;
        if (!(!L || !on))
          return (
            L.setAttribute("aria-describedby", on),
            function () {
              return L.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [Ic, on],
  );
  var jc = Va
    ? O.createElement(
        "span",
        { "data-testid": p ? "".concat(p, "-hidden") : void 0, hidden: !0, id: on },
        typeof i == "function" ? i({}) : i,
      )
    : null;
  return O.createElement(
    O.Fragment,
    null,
    typeof t == "function"
      ? O.createElement(
          O.Fragment,
          null,
          t(Br(Br({}, ci), {}, { "aria-describedby": on, ref: ke })),
          jc,
        )
      : O.createElement($a, Z({}, ci, { ref: De, role: "presentation" }), t, jc),
    dt
      ? O.createElement(
          uE,
          { zIndex: hE },
          O.createElement(JS, { placement: G, referenceElement: Ac(), strategy: M }, function (L) {
            var oe = L.ref,
              Nt = L.style,
              ui = L.update,
              li = L.placement,
              Rr = n === "mouse" ? void 0 : gE[bE(li)];
            return O.createElement(
              Eh,
              { appear: !0 },
              Rc &&
                O.createElement(
                  EO,
                  {
                    distance: "constant",
                    entranceDirection: Rr,
                    exitDirection: Rr,
                    onFinish: Lt,
                    duration: ce !== "show-immediate" ? "medium" : "none",
                  },
                  function (sn) {
                    var tg = sn.className;
                    return O.createElement(
                      l,
                      {
                        ref: oe,
                        className: "Tooltip ".concat(tg),
                        style: Br(Br({}, Nt), B && { pointerEvents: "none" }),
                        truncate: s,
                        placement: G,
                        testId: Ac() ? p : p && "".concat(p, "--unresolved"),
                        onMouseOut: yt,
                        onMouseOver: le,
                        shortcut: V,
                      },
                      typeof i == "function" ? i({ update: ui }) : i,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var mE = [
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
  ua = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  Pf = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syazazsu _k48pmoej" },
  Vh = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var o = t.innerRef,
      i = t.isSortable,
      c = t.sortOrder,
      s = t.onClick,
      u = t.headCellId,
      l = t.activeSortButtonId,
      d = t.ascendingSortTooltip,
      f = d === void 0 ? "Sort ascending" : d,
      p = t.descendingSortTooltip,
      h = p === void 0 ? "Sort descending" : p,
      v = t.buttonAriaRoleDescription,
      g = v === void 0 ? "Sort button" : v,
      b = t.isIconOnlyHeader,
      m = te(t, mE),
      w = _.useState(!1),
      k = J(w, 2),
      y = k[0],
      S = k[1],
      x = _.useState(!1),
      A = J(x, 2),
      j = A[0],
      R = A[1],
      M = u === l || c !== void 0,
      U = y || M || j,
      B = U && b,
      $ = !b || U || (b && !j),
      q = _.useCallback(
        function () {
          R?.(!0);
        },
        [R],
      ),
      V = _.useCallback(
        function () {
          R?.(!1);
        },
        [R],
      ),
      G = _.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      K = _.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      F = O.createElement(
        ri,
        { xcss: Pf.headCellContainer, onMouseEnter: G, onMouseLeave: K, onFocus: q, onBlur: V },
        O.createElement(
          _E,
          { content: c === wr ? f : h },
          O.createElement(
            Xp,
            { onClick: s, xcss: ua.buttonWrapper, "aria-roledescription": g },
            O.createElement(
              Do,
              { xcss: B ? ua.hideIconHeaderWrapper : ua.visibleHeaderWrapper },
              O.createElement("span", { className: P([Pf.text]) }, r),
            ),
            $ &&
              O.createElement(
                Do,
                { xcss: U ? ua.sortIconVisibleWrapper : ua.sortIconHiddenWrapper },
                c === wr
                  ? O.createElement(aO, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : O.createElement(tO, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return O.createElement(
      Y1,
      Z(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof o != "string" ? o : null,
        },
        m,
        { isSortable: i, sortOrder: c },
      ),
      i ? F : r,
    );
  },
  yE = ["isRanking", "refHeight", "refWidth"];
function wE(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, Gh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Gh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Gh = function () {
    return !!e;
  })();
}
var kE = (function (e) {
    function t() {
      return (ge(this, t), wE(this, t, arguments));
    }
    return (
      Xe(t, e),
      be(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var o = n.refWidth,
              i = te(n, yE),
              c = Mm(a, o);
            return O.createElement(Vh, Z({ inlineStyles: c }, i));
          },
        },
      ])
    );
  })(O.Component),
  OE = Z1(kE),
  SE = ["cells"],
  EE = [
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
function xE(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, Hh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Hh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Hh = function () {
    return !!e;
  })();
}
var CE = (function (e) {
    function t(r) {
      var n;
      return (ge(this, t), (n = xE(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Xe(t, e),
      be(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            Co(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              Co(n.sortKey, n.head);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              a = this.props,
              o = a.head,
              i = a.sortKey,
              c = a.sortOrder,
              s = a.isFixedSize,
              u = a.onSort,
              l = a.isRanking,
              d = a.isRankable,
              f = a.testId,
              p = this.state.activeSortButtonId;
            if (!o) return null;
            var h = d ? OE : Vh,
              v = o.cells,
              g = te(o, SE);
            return O.createElement(
              J1,
              Z({}, g, { isRanking: l, testId: f && "".concat(f, "--head") }),
              O.createElement(
                "tr",
                null,
                v.map(function (b, m) {
                  var w = b.ascendingSortTooltip,
                    k = b.buttonAriaRoleDescription,
                    y = b.colSpan,
                    S = b.content,
                    x = b.descendingSortTooltip,
                    A = b.isIconOnlyHeader,
                    j = b.isSortable,
                    R = b.key,
                    M = b.shouldTruncate,
                    U = b.testId,
                    B = b.width,
                    $ = te(b, EE),
                    q = "head-cell-".concat(m),
                    V = function () {
                      (n.setState({ activeSortButtonId: q }), j && u(b)());
                    };
                  return O.createElement(
                    h,
                    Z(
                      {
                        colSpan: y,
                        content: S,
                        isFixedSize: s,
                        isIconOnlyHeader: A,
                        isSortable: !!j,
                        isRanking: l,
                        key: R || m,
                        headCellId: q,
                        activeSortButtonId: p,
                        onClick: V,
                        testId: U || f,
                        shouldTruncate: M,
                        sortOrder: R === i ? c : void 0,
                        width: B,
                        ascendingSortTooltip: w,
                        descendingSortTooltip: x,
                        buttonAriaRoleDescription: k,
                      },
                      $,
                    ),
                  );
                }),
              ),
            );
          },
        },
      ])
    );
  })(O.Component),
  PE = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function RE(e) {
  switch (e) {
    case Ao:
      return wr;
    case wr:
      return Ao;
    default:
      return e;
  }
}
var AE = function (t) {
    var r = t.caption,
      n = t.head,
      a = t.highlightedRowIndex,
      o = t.rows,
      i = t.sortKey,
      c = t.sortOrder,
      s = t.loadingLabel,
      u = t.onPageRowsUpdate,
      l = t.testId,
      d = t.totalRows,
      f = t.label,
      p = t.isLoading,
      h = p === void 0 ? !1 : p,
      v = t.isFixedSize,
      g = v === void 0 ? !1 : v,
      b = t.rowsPerPage,
      m = b === void 0 ? 1 / 0 : b,
      w = t.onSetPage,
      k = w === void 0 ? Re : w,
      y = t.onSort,
      S = y === void 0 ? Re : y,
      x = t.page,
      A = x === void 0 ? 1 : x,
      j = t.emptyView,
      R = t.isRankable,
      M = R === void 0 ? !1 : R,
      U = t.isRankingDisabled,
      B = U === void 0 ? !1 : U,
      $ = t.onRankStart,
      q = $ === void 0 ? Re : $,
      V = t.onRankEnd,
      G = V === void 0 ? Re : V,
      K = t.loadingSpinnerSize,
      F = t.paginationi18n,
      D =
        F === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : F,
      _e = _.useState(!1),
      ie = J(_e, 2),
      ce = ie[0],
      de = ie[1],
      pe = _.useRef(null),
      ue = Jr({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.4",
      }),
      De = Jr({
        fn: G,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.4",
      });
    _.useEffect(
      function () {
        (Co(i, n), Tm(n));
      },
      [i, n],
    );
    var ke = function (Oe) {
        return function () {
          var Ie = Oe.key;
          if (Ie) {
            if (ue && M && Ie === i && c === Ao) {
              ue({ key: null, sortOrder: null, item: Oe });
              return;
            }
            var yt = Ie !== i ? wr : RE(c);
            ue && ue({ key: Ie, item: Oe, sortOrder: yt });
          }
        };
      },
      Te = function (Oe, Ie) {
        k(Oe, Ie);
      },
      fe = function (Oe) {
        (de(!0), q(Oe));
      },
      Me = function (Oe) {
        (de(!1), De(Oe));
      },
      Yt = function () {
        return K || (wp(o || [], A, m).length > 2 ? Io : ty);
      },
      lt = function () {
        return h ? O.createElement(sy, { testId: l }) : j && O.createElement(cy, { testId: l }, j);
      },
      xe = o && o.length,
      Ce,
      mt = !1;
    (d && Number.isInteger(d) && m && xe && xe <= d
      ? ((Ce = Math.ceil(d / m)), (mt = !0))
      : (Ce = xe && m ? Math.ceil(xe / m) : 0),
      (Ce = Ce < 1 ? 1 : Ce));
    var Ze = A > Ce ? Ce : A,
      $e = !!xe,
      Le = Yt(),
      Ae = lt();
    return O.createElement(
      O.Fragment,
      null,
      O.createElement(
        Dp,
        {
          isLoading: h && $e,
          spinnerSize: Le,
          targetRef: function () {
            return pe.current;
          },
          testId: l,
          loadingLabel: s,
        },
        O.createElement(
          ay,
          { isFixedSize: g, "aria-label": f, hasDataRow: $e, testId: l, isLoading: h },
          !!r && O.createElement(oy, null, r),
          n &&
            O.createElement(CE, {
              head: n,
              onSort: ke,
              sortKey: i,
              sortOrder: c,
              isRanking: ce,
              isRankable: M,
              testId: l,
            }),
          $e &&
            O.createElement(jE, {
              ref: pe,
              highlightedRowIndex: a,
              rows: o,
              head: n,
              sortKey: i,
              sortOrder: c,
              rowsPerPage: m,
              page: Ze,
              isFixedSize: g || !1,
              onPageRowsUpdate: u,
              isTotalPagesControlledExternally: mt,
              testId: l,
              isRankable: M,
              isRanking: ce,
              onRankStart: fe,
              onRankEnd: Me,
              isRankingDisabled: B || h || !1,
            }),
        ),
      ),
      Ce <= 1
        ? null
        : O.createElement(
            iy,
            { testId: l },
            O.createElement(H1, {
              value: Ze,
              onChange: Te,
              total: Ce,
              i18n: D,
              isDisabled: h,
              testId: l,
            }),
          ),
      !$e &&
        Ae &&
        O.createElement(Ip, { isLoading: h, spinnerSize: Io, testId: l, loadingLabel: s }, Ae),
    );
  },
  IE = _.lazy(function () {
    return Bm(
      () => import("./body-DZ7SWb1z.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  jE = _.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      o = t.isRanking,
      i = t.onRankStart,
      c = t.onRankEnd,
      s = t.isRankingDisabled,
      u = te(t, PE),
      l = a && !u.sortKey,
      d = _.useState(!1),
      f = J(d, 2),
      p = f[0],
      h = f[1];
    _.useEffect(
      function () {
        l && h(!0);
      },
      [l],
    );
    var v = O.createElement(Oy, Z({ ref: r }, u));
    return l && p
      ? O.createElement(
          Ey,
          { fallback: v },
          O.createElement(
            _.Suspense,
            { fallback: v },
            O.createElement(
              IE,
              Z({ ref: r }, u, {
                isRanking: o,
                onRankStart: i,
                onRankEnd: c,
                isRankingDisabled: s,
              }),
            ),
          ),
        )
      : v;
  });
function DE(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, Kh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Kh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Kh = function () {
    return !!e;
  })();
}
var Wh = (function (e) {
  function t() {
    var r;
    ge(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = DE(this, t, [].concat(a))),
      C(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      C(r, "onSetPageHandler", function (i, c) {
        var s = r.props.onSetPage;
        s && (s(i, c), r.setState({ page: i }));
      }),
      C(r, "onSortHandler", function (i, c) {
        var s = i.key,
          u = i.item,
          l = i.sortOrder,
          d = r.props.onSort;
        d && (d({ key: s, item: u, sortOrder: l }, c), r.setState({ sortKey: s, sortOrder: l }));
      }),
      C(r, "onRankEndIfExistsHandler", function (i) {
        r.props.onRankEnd && r.props.onRankEnd(i);
      }),
      C(r, "onRankEndHandler", function (i) {
        var c = i.destination,
          s = r.state,
          u = s.rows,
          l = s.page,
          d = r.props.rowsPerPage;
        if (!c || !u) {
          r.onRankEndIfExistsHandler(i);
          return;
        }
        var f = Lm(i, u, l, d);
        (r.setState({ rows: f }), r.onRankEndIfExistsHandler(i));
      }),
      r
    );
  }
  return (
    Xe(t, e),
    be(t, [
      {
        key: "UNSAFE_componentWillReceiveProps",
        value: function (n) {
          var a = n.sortKey || this.state.sortKey,
            o = n.sortOrder || this.state.sortOrder,
            i = n.page || this.state.page;
          this.setState({ page: i, sortKey: a, sortOrder: o, rows: n.rows });
        },
      },
      {
        key: "render",
        value: function () {
          var n = this.state,
            a = n.page,
            o = n.sortKey,
            i = n.sortOrder,
            c = n.rows,
            s = this.props,
            u = s.caption,
            l = s.emptyView,
            d = s.head,
            f = s.highlightedRowIndex,
            p = s.loadingSpinnerSize,
            h = s.isLoading,
            v = s.loadingLabel,
            g = s.isFixedSize,
            b = s.isRankable,
            m = s.isRankingDisabled,
            w = s.rowsPerPage,
            k = s.paginationi18n,
            y = s.onRankStart,
            S = s.onPageRowsUpdate,
            x = s.testId,
            A = s.label;
          return O.createElement(AE, {
            paginationi18n: k,
            caption: u,
            emptyView: l,
            head: d,
            highlightedRowIndex: f,
            loadingSpinnerSize: p,
            isLoading: h,
            loadingLabel: v,
            isFixedSize: g,
            onSetPage: this.onSetPageHandler,
            onSort: this.onSortHandler,
            page: a,
            rows: c,
            rowsPerPage: w,
            sortKey: o,
            sortOrder: i,
            isRankable: b,
            isRankingDisabled: m,
            onRankEnd: this.onRankEndHandler,
            onRankStart: y,
            onPageRowsUpdate: S,
            testId: x,
            label: A,
          });
        },
      },
    ])
  );
})(O.Component);
C(Wh, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Re,
  onSort: Re,
  rowsPerPage: 1 / 0,
});
const TE = (e) => {
    const t = [];
    return (
      t.push({ key: "id", content: "ID", isSortable: !1, width: 25 }),
      t.push({ key: "testDateColumn", content: "example Datetime", isSortable: !1, width: 25 }),
      t.push({ key: "testNameColumn", content: "Name", isSortable: !1, width: 25 }),
      t.push({ key: "version", content: "Version", isSortable: !1, width: 25 }),
      t.push({ key: "Action", content: "Action", isSortable: !1, width: 25 }),
      t
    );
  },
  ME = (e) => ({ cells: TE() });
function LE(e) {
  return function (t) {
    e.forEach(function (r) {
      typeof r == "function" ? r(t) : r !== null && (r.current = t);
    });
  };
}
var Jh = _.createContext(void 0),
  NE = function () {
    var t = _.useContext(Jh);
    if (t) {
      if (t.appearance === "navigation") {
        var r = {
          spacing: "default",
          appearance: "subtle",
          isDisabled: !1,
          isActiveOverSelected: !1,
          isNavigationSplitButton: !0,
          isHighlighted: t.isHighlighted,
        };
        return r;
      }
      var n = {
        spacing: t.spacing,
        appearance: t.appearance,
        isDisabled: t.isDisabled,
        isActiveOverSelected: !0,
        isNavigationSplitButton: !1,
        isHighlighted: !1,
      };
      return n;
    }
  };
function $t(e) {
  (e.preventDefault(), e.stopPropagation());
}
var FE = 9;
function Rf(e) {
  e.keyCode !== FE && $t(e);
}
function BE(e, t) {
  return e
    ? {
        onMouseDownCapture: $t,
        onMouseUpCapture: $t,
        onKeyDownCapture: Rf,
        onKeyUpCapture: Rf,
        onTouchStartCapture: $t,
        onTouchEndCapture: $t,
        onPointerDownCapture: $t,
        onPointerUpCapture: $t,
        onClickCapture: $t,
        onClick: $t,
      }
    : t;
}
function zE(e) {
  switch (e) {
    case "compact":
      return "small";
    default:
      return "medium";
  }
}
function UE(e) {
  var t = e.appearance,
    r = e.isDisabled,
    n = e.isSelected;
  return r || n
    ? "inherit"
    : t === "primary" || t === "danger" || t === "discovery"
      ? "invert"
      : "inherit";
}
function qE(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isDisabled,
    a = e.isSelected,
    o = e.testId;
  return O.createElement(sc, {
    size: zE(r),
    appearance: UE({ appearance: t, isDisabled: n, isSelected: a }),
    testId: o ? "".concat(o, "--loading-spinner") : void 0,
  });
}
var $E = [
    "appearance",
    "autoFocus",
    "isDisabled",
    "isLoading",
    "isSelected",
    "isIconButton",
    "isCircle",
    "hasIconBefore",
    "hasIconAfter",
    "shouldFitContainer",
    "spacing",
    "ariaLabel",
    "ariaLabelledBy",
    "children",
    "interactionName",
    "onClick",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onClickCapture",
    "testId",
    "analyticsContext",
    "componentName",
    "role",
    "onMouseOver",
    "onMouseOut",
    "onFocus",
    "onBlur",
    "onMouseMove",
    "type",
  ],
  VE = ["className", "css", "as", "style"],
  Af = ", Loading",
  je = {
    base: "_2rkofajl _11c82smr _v5649dqc _189eidpf _1rjc12x7 _1e0c116y _vchhusvi _1bsb1wug _p12f1osq _kqswh2mm _4cvr1q9y _1bah1h6o _gy1p1b66 _1o9zidpf _4t3iviql _k48p1wq8 _y4tiutpp _bozgutpp _y3gn1h6o _s7n4nkob _14mj1kw7 _9v7aze3t _1tv3nqa1 _39yqe4h9 _11fnglyw _18postnw",
    linkDecorationUnset:
      "_4bfu1r31 _1hmsglyw _ajmmnqa1 _1a3b1r31 _4fprglyw _5goinqa1 _9oik1r31 _1bnxglyw _jf4cnqa1 _1nrm1r31 _c2waglyw _1iohnqa1",
    disabled: "_80om13gf _syaz1gmx _30l31gmx _9h8h1gmx",
    sharedDisabled: "_bfhk1fvb _irr31fvb _1di61fvb",
    spacingCompact: "_1rjcv77o _gy1p1b66 _4t3i1k8s _y4tiutpp _bozgutpp _s7n4nkob",
    circle: "_2rko1rr0",
    fullWidth: "_1bsb1osq",
    loading: "_80om15jw",
    iconButton: "_4t3iviql _1bsbviql _y4tize3t _bozgze3t",
    iconButtonCompact: "_4t3i1k8s _1bsb1k8s",
    buttonIconBefore: "_bozgu2gc",
    buttonIconAfter: "_y4tiu2gc",
    splitButton: "_g0pbb4wl",
    loadingOverlay:
      "_1reo15vq _18m915vq _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _u7coze3t _152tze3t _rjxpze3t _1e02ze3t",
    navigationSplitButton: "_1bsb1tcg _bfhksm61 _y4ti12x7 _bozg12x7",
  },
  hs = {
    root: "_bfhksm61 _syazazsu _8l3m1l7x _aetrb3bt _1053azsu _f8pjazsu _30l3azsu _9h8hazsu",
    interactive: "_irr31dpa _30l3azsu _1di6fcek _9h8hazsu",
    disabled: "_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28",
  },
  If = {
    root: "_bfhkomb0 _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31wqm _9h8h15cr _1di617hq",
  },
  jf = {
    root: "_bfhk1ikc _syazal3n _1053al3n _f8pjal3n _30l3al3n _9h8hal3n",
    interactive: "_30l3al3n _irr31j43 _9h8hal3n _1di6h4op",
  },
  Df = {
    root: "_bfhk1v7l _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31rwk _9h8h15cr _1di6yycf",
  },
  Tf = {
    root: "_bfhk1vbi _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr37gr8 _9h8h15cr _1di61wu2",
  },
  Mf = {
    root: "_bfhkqtfy _syazazsu _1053azsu _f8pjazsu _30l3azsu _9h8hazsu",
    interactive: "_irr34mfv _30l3azsu _1di619qy _9h8hazsu",
  },
  zr = {
    root: "_bfhk15s3 _syaz1ldt _8l3mcoux _aetrb3bt _10531ldt _f8pj1ldt _30l31ldt _9h8h1ldt",
    insideSplitButton: "_1pbycs5v",
    interactive: "_irr3t71w _30l31pke _1di6yssv _9h8h1pke",
    warning: "_bfhkvdtc _syaz16q2 _30l31pke _irr3vdtc _9h8h1pke _1di6vdtc",
    danger: "_bfhkbeib _syaz1pke _30l31pke _irr3beib _9h8h1pke _1di6beib",
    discovery: "_bfhk1g49 _syaz1pke _30l31pke _irr31g49 _9h8h1pke _1di61g49",
  },
  GE = O.forwardRef(function (e, t) {
    var r = e.appearance,
      n = e.autoFocus,
      a = n === void 0 ? !1 : n,
      o = e.isDisabled,
      i = o === void 0 ? !1 : o,
      c = e.isLoading,
      s = c === void 0 ? !1 : c,
      u = e.isSelected,
      l = u === void 0 ? !1 : u,
      d = e.isIconButton,
      f = d === void 0 ? !1 : d,
      p = e.isCircle,
      h = p === void 0 ? !1 : p,
      v = e.hasIconBefore,
      g = v === void 0 ? !1 : v,
      b = e.hasIconAfter,
      m = b === void 0 ? !1 : b,
      w = e.shouldFitContainer,
      k = w === void 0 ? !1 : w,
      y = e.spacing,
      S = y === void 0 ? "default" : y,
      x = e.ariaLabel,
      A = e.ariaLabelledBy,
      j = e.children,
      R = e.interactionName,
      M = e.onClick,
      U = e.onMouseDown,
      B = e.onMouseDownCapture,
      $ = e.onMouseUp,
      q = e.onMouseUpCapture,
      V = e.onKeyDown,
      G = e.onKeyDownCapture,
      K = e.onKeyUp,
      F = e.onKeyUpCapture,
      D = e.onTouchStart,
      _e = e.onTouchStartCapture,
      ie = e.onTouchEnd,
      ce = e.onTouchEndCapture,
      de = e.onPointerDown,
      pe = e.onPointerDownCapture,
      ue = e.onPointerUp,
      De = e.onPointerUpCapture,
      ke = e.onClickCapture,
      Te = e.testId,
      fe = e.analyticsContext,
      Me = e.componentName,
      Yt = e.role,
      lt = e.onMouseOver,
      xe = e.onMouseOut,
      Ce = e.onFocus,
      mt = e.onBlur,
      Ze = e.onMouseMove,
      $e = e.type,
      Le = te(e, $E),
      Ae = _.useRef(null),
      re = NE(),
      Oe = th(),
      Ie = !!re,
      yt = re?.isNavigationSplitButton || !1,
      Pr = re?.appearance === "default",
      le = Pr ? "subtle" : r || re?.appearance || "default",
      Xt = re?.spacing || S,
      Qe = re?.isDisabled || i,
      Lt = !Qe && !s,
      $a = Qe || s,
      dt = l && !Qe;
    (gh(Ae, a), Le.className, Le.css, Le.as, Le.style);
    var Va = te(Le, VE);
    return O.createElement(
      Xp,
      Z(
        {},
        Va,
        {
          componentName: Me || "button",
          analyticsContext: fe,
          role: Yt,
          ref: LE([Ae, t]),
          xcss: Wp(
            je.base,
            le === "default" && hs.root,
            le === "default" && Lt && hs.interactive,
            le === "primary" && If.root,
            le === "primary" && Lt && If.interactive,
            le === "warning" && jf.root,
            le === "warning" && Lt && jf.interactive,
            le === "danger" && Df.root,
            le === "danger" && Lt && Df.interactive,
            le === "discovery" && Tf.root,
            le === "discovery" && Lt && Tf.interactive,
            le === "subtle" && Mf.root,
            le === "subtle" && Lt && Mf.interactive,
            je.linkDecorationUnset,
            dt && zr.root,
            dt && Ie && zr.insideSplitButton,
            dt && Lt && zr.interactive,
            dt && le === "danger" && zr.danger,
            dt && le === "warning" && zr.warning,
            dt && le === "discovery" && zr.discovery,
            Qe && je.disabled,
            Qe && le !== "default" && le !== "subtle" && je.sharedDisabled,
            Qe && le === "default" && hs.disabled,
            h && !Ie && je.circle,
            Xt === "compact" && je.spacingCompact,
            g && je.buttonIconBefore,
            k && je.fullWidth,
            m && je.buttonIconAfter,
            f && je.iconButton,
            f && Xt === "compact" && je.iconButtonCompact,
            s && je.loading,
            Ie && je.splitButton,
            yt && je.navigationSplitButton,
          ),
          isDisabled: $a,
          "aria-label": s && x && !A ? "".concat(x, " ").concat(Af) : x,
          "aria-labelledby": s && A ? "".concat(A, " ").concat(Oe) : A,
          onClick: M,
        },
        BE($a, {
          onMouseDownCapture: B,
          onMouseUpCapture: q,
          onKeyDownCapture: G,
          onKeyUpCapture: F,
          onTouchStartCapture: _e,
          onTouchEndCapture: ce,
          onPointerDownCapture: pe,
          onPointerUpCapture: De,
          onClickCapture: ke,
        }),
        {
          testId: Te,
          onMouseOver: lt,
          onFocus: Ce,
          onMouseMove: Ze,
          onBlur: mt,
          type: $e,
          interactionName: R,
          onMouseDown: U,
          onMouseUp: $,
          onKeyDown: V,
          onMouseOut: xe,
          onKeyUp: K,
          onTouchStart: D,
          onTouchEnd: ie,
          onPointerDown: de,
          onPointerUp: ue,
        },
      ),
      O.createElement(
        Jh.Provider,
        { value: void 0 },
        j,
        s &&
          O.createElement(
            "span",
            { className: P([je.loadingOverlay]) },
            qE({ spacing: Xt, appearance: le, isDisabled: Qe, isSelected: dt, testId: Te }),
          ),
        s && (A || !x) && O.createElement(fc, { id: Oe }, Af),
      ),
    );
  }),
  Ur = {
    text: "_1reo15vq _18m915vq _16jlkb7n _1o9zkb7n _1bto1l2s _o5721q9c",
    icon: "_1e0c1txw _16jlidpf _1o9zidpf _1wpz1h6o _1wybidpf _vwz4idpf _uiztglyw",
    beforeIcon: "_1he91b66 _w795v77o",
    afterIcon: "_1he9v77o _w7951b66",
    common: "_v564g17y",
    fade: "_tzy4idpf",
  },
  gs = function (t) {
    var r = t.children,
      n = t.type,
      a = n === void 0 ? "text" : n,
      o = t.isLoading,
      i = t.position;
    return O.createElement(
      "span",
      {
        className: P([
          Ur.common,
          a === "text" && Ur.text,
          a === "icon" && Ur.icon,
          o && Ur.fade,
          i === "before" && Ur.beforeIcon,
          i === "after" && Ur.afterIcon,
        ]),
      },
      r,
    );
  };
function HE(e) {
  return !e.displayName && !e.render && typeof e == "function";
}
var Lf = function (t) {
    var r = t.icon,
      n = HE(r),
      a = {
        label: "",
        color: "currentColor",
        size: kr("platform_dst_button_chevron_sizing")
          ? function (o) {
              return o.startsWith("Chevron") ? "small" : "medium";
            }
          : void 0,
      };
    return O.createElement(O.Fragment, null, n ? r(a) : O.createElement(r, a));
  },
  KE = [
    "analyticsContext",
    "appearance",
    "aria-label",
    "aria-labelledby",
    "autoFocus",
    "children",
    "iconAfter",
    "iconBefore",
    "interactionName",
    "isDisabled",
    "isLoading",
    "isSelected",
    "onClick",
    "onClickCapture",
    "onKeyDownCapture",
    "onKeyUpCapture",
    "onMouseDownCapture",
    "onMouseUpCapture",
    "onPointerDownCapture",
    "onPointerUpCapture",
    "onTouchEndCapture",
    "onTouchStartCapture",
    "shouldFitContainer",
    "spacing",
    "testId",
    "type",
  ],
  WE = ["className", "css", "as", "style"],
  Pc = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.analyticsContext,
        a = t.appearance,
        o = t["aria-label"],
        i = t["aria-labelledby"],
        c = t.autoFocus,
        s = t.children,
        u = t.iconAfter,
        l = t.iconBefore,
        d = t.interactionName,
        f = t.isDisabled,
        p = t.isLoading,
        h = p === void 0 ? !1 : p,
        v = t.isSelected,
        g = t.onClick,
        b = t.onClickCapture,
        m = t.onKeyDownCapture,
        w = t.onKeyUpCapture,
        k = t.onMouseDownCapture,
        y = t.onMouseUpCapture,
        S = t.onPointerDownCapture,
        x = t.onPointerUpCapture,
        A = t.onTouchEndCapture,
        j = t.onTouchStartCapture,
        R = t.shouldFitContainer,
        M = t.spacing,
        U = t.testId,
        B = t.type,
        $ = B === void 0 ? "button" : B,
        q = te(t, KE);
      (q.className, q.css, q.as, q.style);
      var V = te(q, WE);
      return O.createElement(
        GE,
        Z(
          {
            analyticsContext: n,
            ref: r,
            appearance: a,
            autoFocus: c,
            isDisabled: f,
            isLoading: h,
            isSelected: v,
            hasIconBefore: !!l,
            hasIconAfter: !!u,
            shouldFitContainer: R,
            spacing: M,
            ariaLabel: o,
            ariaLabelledBy: i,
            onClick: g,
            onClickCapture: b,
            onKeyDownCapture: m,
            onKeyUpCapture: w,
            onMouseDownCapture: k,
            onMouseUpCapture: y,
            onPointerDownCapture: S,
            onPointerUpCapture: x,
            onTouchStartCapture: j,
            onTouchEndCapture: A,
            testId: U,
            componentName: "Button",
            type: $,
            interactionName: d,
          },
          V,
        ),
        O.createElement(
          _.Fragment,
          null,
          l &&
            O.createElement(
              gs,
              { type: "icon", position: "before", isLoading: h },
              O.createElement(Lf, { icon: l }),
            ),
          s && O.createElement(gs, { isLoading: h }, s),
          u &&
            O.createElement(
              gs,
              { type: "icon", position: "after", isLoading: h },
              O.createElement(Lf, { icon: u }),
            ),
        ),
      );
    }),
  );
Pc.displayName = "Button";
const no = Qo((e) => {
  const { stateStore: t } = ei(),
    r = ME();
  let n;
  switch (e.type) {
    case "WITHOUT_VERSIONING": {
      n = t.testData;
      break;
    }
    case "OPTIMISTIC_NUMBER": {
      n = t.testDataOptimisticNumber;
      break;
    }
    case "OPTIMISTIC_DATE": {
      n = t.testDataOptimisticDateId;
      break;
    }
    case "OPTIMISTIC_TIMESTAMP": {
      n = t.testDataOptimisticTimeStampId;
      break;
    }
    default:
      return E.jsxs("div", { children: ["Unsupported $", e.type] });
  }
  return n
    ? E.jsx("div", {
        children: E.jsxs("div", {
          children: [
            E.jsx(Wh, {
              head: r,
              rows: [n].map((a, o) => {
                const i = [
                  { key: "id", content: a.id },
                  { key: "testDateColumn", content: String(a.testDateColumn) },
                  { key: "testNameColumn", content: a.testNameColumn },
                  { key: "version", content: a.version !== void 0 ? String(a.version) : "EMPTY" },
                  {
                    key: "action",
                    content: E.jsx("div", {
                      children: E.jsx(Pc, {
                        appearance: "warning",
                        onClick: () => t.saveState(e.type),
                        children: "update",
                      }),
                    }),
                  },
                ];
                return { key: `row-${o}-${a.id}`, cells: i };
              }),
              rowsPerPage: 10,
              defaultPage: 1,
              loadingSpinnerSize: "large",
              emptyView: E.jsx("div", { children: "Table is EMPTY" }),
              isRankable: !0,
            }),
            E.jsx("br", {}),
            E.jsx("br", {}),
          ],
        }),
      })
    : E.jsx("div", { children: "Try update first" });
});
function JE(e) {
  return mp(e) || kp(e) || oc(e) || yp();
}
var Yh = _.createContext(null),
  Xh = _.createContext(null),
  Zh = _.createContext(null);
function Nf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function YE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Nf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var XE = { componentName: "tabs", packageName: "@atlaskit/tabs", packageVersion: "18.2.3" },
  Ff = function (t) {
    var r = t.tabPanel,
      n = t.index,
      a = t.isSelected,
      o = t.tabsId;
    return (
      r &&
      _.createElement(
        Zh.Provider,
        {
          value: {
            role: "tabpanel",
            id: "".concat(o, "-").concat(n, "-tab"),
            hidden: a ? void 0 : !0,
            "aria-labelledby": "".concat(o, "-").concat(n),
            tabIndex: a ? 0 : -1,
          },
          key: n,
        },
        r,
      )
    );
  },
  ZE = function (t) {
    var r = t.shouldUnmountTabPanelOnChange,
      n = r === void 0 ? !1 : r,
      a = t.selected,
      o = t.defaultSelected,
      i = t.onChange,
      c = t.id,
      s = t.analyticsContext,
      u = t.children,
      l = t.testId,
      d = _.useState(a || o || 0),
      f = J(d, 2),
      p = f[0],
      h = f[1],
      v = a === void 0 ? p : a,
      g = _.Children.toArray(u).filter(function (A) {
        return !!A;
      }),
      b = JE(g),
      m = b[0],
      w = b.slice(1),
      k = _.useRef(new Set([v]));
    k.current.has(v) || k.current.add(v);
    var y = _.useCallback(
        function (A, j) {
          (i && i(A, j), h(A));
        },
        [i],
      ),
      S = Jr(YE({ fn: y, action: "clicked", analyticsData: s }, XE)),
      x = n
        ? Ff({ tabPanel: w[v], index: v, isSelected: !0, tabsId: c })
        : Array.from(k.current).map(function (A) {
            return Ff({ tabPanel: w[A], index: A, isSelected: A === v, tabsId: c });
          });
    return _.createElement(
      "div",
      {
        "data-testid": l,
        className: P([
          "_1e0c1txw _p12f1osq _1tkeidpf _i0dl1osq _2lx21bp4 _16jlkb7n",
          "_1c3y1txw _ftfaidpf _18i0kb7n _185bglyw",
        ]),
      },
      _.createElement(Xh.Provider, { value: { selected: v, onChange: S, tabsId: c } }, m),
      _.createElement(_.Fragment, null, x),
    );
  },
  QE = function () {
    var t = _.useContext(Yh);
    if (t == null || typeof t > "u")
      throw Error("@atlaskit/tabs: A Tab must have a TabList parent.");
    return t;
  },
  ex = function () {
    var t = _.useContext(Xh);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs: A TabList must have a Tabs parent.");
    return t;
  },
  tx = function () {
    var t = _.useContext(Zh);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs:  A TabPanel must have a Tabs parent.");
    return t;
  },
  la = function (t) {
    var r = t.children,
      n = t.testId,
      a = tx(),
      o = a.role,
      i = a.id,
      c = a.hidden,
      s = a["aria-labelledby"],
      u = a.tabIndex;
    return O.createElement(
      dc,
      {
        as: "div",
        isInset: !0,
        testId: n,
        role: o,
        id: i,
        hidden: c,
        "aria-labelledby": s,
        tabIndex: u,
      },
      O.createElement(_.Fragment, null, r),
    );
  },
  ao = _.forwardRef(function (t, r) {
    var n = t.children,
      a = t.testId,
      o = QE(),
      i = o.onClick,
      c = o.id,
      s = o["aria-controls"],
      u = o["aria-posinset"],
      l = o["aria-selected"],
      d = o["aria-setsize"],
      f = o.onKeyDown,
      p = o.role,
      h = o.tabIndex;
    return O.createElement(
      dc,
      {
        as: "div",
        isInset: !0,
        testId: a,
        onClick: i,
        id: c,
        "aria-controls": s,
        "aria-posinset": u,
        "aria-selected": l,
        "aria-setsize": d,
        onKeyDown: f,
        role: p,
        tabIndex: h,
        ref: r,
      },
      O.createElement(Yp, { weight: "medium", color: "inherit", maxLines: 1 }, n),
    );
  }),
  rx = function (t) {
    var r = t.children,
      n = ex(),
      a = n.tabsId,
      o = n.selected,
      i = n.onChange,
      c = _.createRef(),
      s = _.Children.toArray(r).filter(Boolean),
      u = s.length,
      l = _.useCallback(
        function (p) {
          var h,
            v =
              (h = c.current) === null || h === void 0
                ? void 0
                : h.querySelector("[id='".concat(a, "-").concat(p, "']"));
          (v && v.focus(), i(p));
        },
        [a, c, i],
      ),
      d = _.useCallback(
        function (p) {
          if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(p.key)) {
            p.preventDefault();
            var h = u - 1;
            if (["Home", "End"].includes(p.key)) {
              var v = p.key === "Home" ? 0 : h;
              l(v);
              return;
            }
            var g = parseInt(p.currentTarget.getAttribute("aria-posinset") || "0") - 1,
              b = p.key === "ArrowRight" ? 1 : -1,
              m = g + b;
            ((m < 0 || m >= u) && (m = m < 0 ? h : 0), l(m));
          }
        },
        [u, l],
      ),
      f = _.useCallback(
        function (p) {
          var h = p.tab,
            v = p.isSelected,
            g = p.index;
          return _.createElement(
            Yh.Provider,
            {
              value: {
                onClick: function () {
                  return i(g);
                },
                onKeyDown: d,
                "aria-setsize": u,
                role: "tab",
                id: "".concat(a, "-").concat(g),
                "aria-posinset": g + 1,
                "aria-selected": v,
                "aria-controls": "".concat(a, "-").concat(g, "-tab"),
                tabIndex: v ? 0 : -1,
              },
              key: g,
            },
            h,
          );
        },
        [u, d, i, a],
      );
    return _.createElement(
      "div",
      {
        role: "tablist",
        ref: c,
        className: P([
          "_1e0c1txw _kqswh2mm _85i5ze3t _1q51ze3t _y4tize3t _bozgze3t",
          "_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _7hip15vq _1fud15vq _bb0mh2mm _1quz1425 _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _1lzu1mrt _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oaz1fgx _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1b8d1mrt _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i2072d1 _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _rsmz12s7 _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiemln51 _pascidpf _eid3idpf _zr3eidpf _fntnidpf _1mp41kw7 _kfgte4h9 _1cs8stnw _1russudh _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc",
        ]),
        style: {
          "--_13a5t4u": er("var(--ds-text-subtle, ".concat(jo, ")")),
          "--_kkbq40": er("var(--ds-text-subtle, ".concat($i, ")")),
          "--_71dbsd": er("var(--ds-text, ".concat(xy, ")")),
          "--_1hfkvbo": er("var(--ds-text-selected, ".concat($i, ")")),
          "--_1c11uqn": er("3px solid ".concat("var(--ds-border-selected, ".concat($i, ")"))),
          "--_lvpq93": er("var(--ds-border, ".concat(Py, ")")),
        },
      },
      s.map(function (p, h) {
        return f({ tab: p, index: h, isSelected: h === o });
      }),
    );
  },
  Qh = ((e) => (
    (e[(e.WITHOUT_VERSIONING = 0)] = "WITHOUT_VERSIONING"),
    (e[(e.OPTIMISTIC_NUMBER = 1)] = "OPTIMISTIC_NUMBER"),
    (e[(e.OPTIMISTIC_DATE = 2)] = "OPTIMISTIC_DATE"),
    (e[(e.OPTIMISTIC_TIMESTAMP = 3)] = "OPTIMISTIC_TIMESTAMP"),
    e
  ))(Qh || {});
const nx = Object.keys(Qh).filter((e) => isNaN(Number(e))),
  oo = ({ children: e, testId: t }) =>
    E.jsx("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: Ut("color.background.neutral"),
        borderRadius: "3px",
        color: Ut("color.text.subtlest"),
        font: Ut("font.heading.xxlarge"),
        marginBlockEnd: Ut("space.100", "8px"),
        marginBlockStart: Ut("space.200", "16px"),
        paddingBlockEnd: Ut("space.400", "32px"),
        paddingBlockStart: Ut("space.400", "32px"),
        paddingInlineEnd: Ut("space.400", "32px"),
        paddingInlineStart: Ut("space.400", "32px"),
      },
      "data-testid": t,
      children: e,
    });
function ax() {
  const { stateStore: e } = ei();
  return e.isLoading
    ? "loading...."
    : E.jsxs("div", {
        children: [
          E.jsxs("div", {
            className: "reset-section",
            children: [
              E.jsx("h2", { children: "Reset All" }),
              E.jsx("p", {
                children:
                  "Click the button below to revert all test entities to their initial state. This removes any changes you've made during testing.",
              }),
              E.jsx("br", {}),
              E.jsxs(Pc, {
                appearance: "danger",
                onClick: async () => {
                  try {
                    (e.loading("Clear ..."),
                      await ka.invoke("clearAll", {
                        testDataId: e.testData?.id,
                        testDataOptimisticNumberId: e.testDataOptimisticNumber?.id,
                        testDataOptimisticDateId: e.testDataOptimisticDateId?.id,
                        testDataOptimisticTimeStampId: e.testDataOptimisticTimeStampId?.id,
                      }));
                  } finally {
                    e.stopLoading();
                  }
                  window.location.reload();
                },
                children: [" ", "Reset All"],
              }),
            ],
          }),
          E.jsx("br", {}),
          E.jsx("p", {
            children:
              "Use the tabs below to navigate between different examples of optimistic locking. Each tab demonstrates a different versioning approach, along with instructions on how to test the locking behavior.",
          }),
          E.jsx("br", {}),
          E.jsxs(ZE, {
            onChange: (t) => console.log("Selected Tab", t + 1),
            defaultSelected: 1,
            id: "default",
            children: [
              E.jsxs(rx, {
                children: [
                  " ",
                  nx.map((t) => {
                    switch (t) {
                      case "WITHOUT_VERSIONING":
                        return E.jsx(
                          ao,
                          { children: "Entity Without Version Column (No Locking)" },
                          t,
                        );
                      case "OPTIMISTIC_NUMBER":
                        return E.jsx(ao, { children: "Entity with Numeric Version Column" }, t);
                      case "OPTIMISTIC_DATE":
                        return E.jsx(
                          ao,
                          { children: "Entity with Datetime-Based Version Column" },
                          t,
                        );
                      case "OPTIMISTIC_TIMESTAMP":
                        return E.jsx(
                          ao,
                          { children: "Entity with Timestamp-BasedVersion Column" },
                          t,
                        );
                    }
                  }),
                ],
              }),
              E.jsx(la, { children: E.jsx(E.Fragment, {}) }),
              E.jsx(la, {
                children: E.jsx(oo, {
                  children: E.jsxs("div", {
                    children: [
                      E.jsx("h2", { children: "Entity Without Version Column (No Locking)" }),
                      E.jsx("p", {
                        children:
                          "This entity does not use any versioning or optimistic locking mechanism. When two users open the same record in different browser tabs and both make changes, the last update simply overwrites the previous changes. There is no conflict detection in place.",
                      }),
                      E.jsx("h3", { children: "How to Test" }),
                      E.jsxs("ol", {
                        children: [
                          E.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          E.jsxs("li", {
                            children: [
                              "In the first tab, change any field and click ",
                              E.jsx("strong", { children: "Update" }),
                              ".",
                            ],
                          }),
                          E.jsxs("li", {
                            children: [
                              "In the second tab, also change a field and click ",
                              E.jsx("strong", { children: "Update" }),
                              ".",
                            ],
                          }),
                          E.jsx("li", {
                            children:
                              "Both updates will succeed, and the second update will overwrite the first one.",
                          }),
                        ],
                      }),
                      E.jsx("br", {}),
                      E.jsx(no, { type: "WITHOUT_VERSIONING" }),
                    ],
                  }),
                }),
              }),
              E.jsx(la, {
                children: E.jsx(oo, {
                  children: E.jsxs("div", {
                    className: "entity-section",
                    children: [
                      E.jsx("h2", { children: "Entity with Numeric Version Column" }),
                      E.jsx("p", {
                        children:
                          "This entity uses an integer field for optimistic locking. When a user updates the record, the version number increments. A second user with an outdated version will encounter an error upon saving.",
                      }),
                      E.jsx("h3", { children: "How to Test" }),
                      E.jsxs("ol", {
                        children: [
                          E.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          E.jsxs("li", {
                            children: [
                              "In the first tab, change any field and click ",
                              E.jsx("strong", { children: "Update" }),
                              ". This succeeds and increments the version number.",
                            ],
                          }),
                          E.jsx("li", {
                            children:
                              "In the second tab, attempt to update the record without refreshing.",
                          }),
                          E.jsx("li", {
                            children:
                              "The update will fail with an optimistic locking error, indicating the record was modified elsewhere.",
                          }),
                        ],
                      }),
                      E.jsx("br", {}),
                      E.jsx(no, { type: "OPTIMISTIC_NUMBER" }),
                    ],
                  }),
                }),
              }),
              E.jsx(la, {
                children: E.jsx(oo, {
                  children: E.jsxs("div", {
                    className: "entity-section",
                    children: [
                      E.jsx("h2", { children: "Entity with DateTime-Based Version Column" }),
                      E.jsx("p", {
                        children:
                          "This entity uses a datetime field for optimistic locking. Whenever the record is updated, the date-based version changes. Any subsequent update with the old date value will fail.",
                      }),
                      E.jsx("h3", { children: "How to Test" }),
                      E.jsxs("ol", {
                        children: [
                          E.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          E.jsxs("li", {
                            children: [
                              "In the first tab, change any field and click ",
                              E.jsx("strong", { children: "Update" }),
                              ". This sets or updates the date-based version.",
                            ],
                          }),
                          E.jsx("li", {
                            children:
                              "In the second tab, try to update the record without refreshing.",
                          }),
                          E.jsx("li", {
                            children:
                              "The second update will fail with an optimistic locking error because the version date has changed.",
                          }),
                        ],
                      }),
                      E.jsx("br", {}),
                      E.jsx(no, { type: "OPTIMISTIC_DATE" }),
                    ],
                  }),
                }),
              }),
              E.jsx(la, {
                children: E.jsx(oo, {
                  children: E.jsxs("div", {
                    className: "entity-section",
                    children: [
                      E.jsx("h2", { children: "Entity with Timestamp-Based Version Column" }),
                      E.jsx("p", {
                        children:
                          "This entity uses a timestamp column for optimistic locking. Whenever the record is updated, the timestamp is refreshed. Any subsequent update attempts with an outdated timestamp will fail.",
                      }),
                      E.jsx("h3", { children: "How to Test" }),
                      E.jsxs("ol", {
                        children: [
                          E.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          E.jsxs("li", {
                            children: [
                              "In the first tab, modify any field and click ",
                              E.jsx("strong", { children: "Update" }),
                              ". This refreshes the timestamp.",
                            ],
                          }),
                          E.jsx("li", {
                            children:
                              "In the second tab, try to update the record without reloading the page.",
                          }),
                          E.jsx("li", {
                            children:
                              "The second update will fail, indicating that another process has already changed the record.",
                          }),
                        ],
                      }),
                      E.jsx("br", {}),
                      E.jsx(no, { type: "OPTIMISTIC_TIMESTAMP" }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
}
const ox = Qo(ax),
  ix = Qo((e) => {
    const { stateStore: t } = ei(),
      [r, n] = _.useState(""),
      [a, o] = _.useState({}),
      i = (u) => {
        const { name: l, value: d, type: f } = u.target;
        o((p) => ({ ...p, [l]: f === "number" ? Number(d) : d }));
      },
      c = async (u) => {
        u.preventDefault();
        const l = { ...s };
        (a.testNameColumn && (l.testNameColumn = a.testNameColumn),
          a.testDateColumn && (l.testDateColumn = new Date(a.testDateColumn)));
        const d = await ka.invoke("update", { data: l, objectName: e.type });
        n(d);
      };
    let s;
    switch (e.type) {
      case "WITHOUT_VERSIONING": {
        s = t.testData;
        break;
      }
      case "OPTIMISTIC_NUMBER": {
        s = t.testDataOptimisticNumber;
        break;
      }
      case "OPTIMISTIC_DATE": {
        s = t.testDataOptimisticDateId;
        break;
      }
      case "OPTIMISTIC_TIMESTAMP": {
        s = t.testDataOptimisticTimeStampId;
        break;
      }
      default:
        return E.jsxs("div", { children: ["Unsupported $", e.type] });
    }
    return E.jsxs("div", {
      children: [
        E.jsx("div", {
          children: E.jsx("button", {
            onClick: async () => {
              try {
                t.loading();
                const u = await ka.invoke("fetchOrCreateIfNotExists");
                t.saveResponse(u);
              } finally {
                t.stopLoading();
              }
              t.saveState("ROOT");
            },
            children: "Back to main",
          }),
        }),
        E.jsx("br", {}),
        E.jsxs("form", {
          onSubmit: c,
          children: [
            E.jsxs(
              "div",
              {
                children: [
                  E.jsx("label", { htmlFor: "testNameColumn", children: "Name" }),
                  E.jsx("br", {}),
                  E.jsx("input", {
                    type: "text",
                    id: "testNameColumn",
                    name: "testNameColumn",
                    defaultValue: s.testNameColumn,
                    onChange: i,
                  }),
                  E.jsx("br", {}),
                ],
              },
              "testNameColumn",
            ),
            E.jsxs(
              "div",
              {
                children: [
                  E.jsx("label", { htmlFor: "testDateColumn", children: "dateTime" }),
                  E.jsx("br", {}),
                  E.jsx("input", {
                    type: "datetime-local",
                    id: "testDateColumn",
                    name: "testDateColumn",
                    defaultValue: String(s.testDateColumn),
                    onChange: i,
                  }),
                  E.jsx("br", {}),
                ],
              },
              "testDateColumn",
            ),
            E.jsx("br", {}),
            E.jsx("input", {
              type: "submit",
              value: "Submit",
              disabled: Object.keys(a).length === 0,
            }),
          ],
        }),
        E.jsx("br", {}),
        E.jsx("br", {}),
        r
          ? E.jsxs("div", {
              children: [E.jsx("p", { children: "STATUS:" }), E.jsxs("b", { children: [" ", r] })],
            })
          : null,
      ],
    });
  });
function sx() {
  const { stateStore: e } = ei();
  if (
    (_.useEffect(() => {
      (async () => {
        try {
          e.loading();
          const r = await ka.invoke("fetchOrCreateIfNotExists");
          e.saveResponse(r);
        } finally {
          e.stopLoading();
        }
      })().catch(console.error);
    }, []),
    e.isLoading)
  )
    return e.message;
  switch (e.state) {
    case "ROOT":
      return E.jsx(ox, {});
    case "WITHOUT_VERSIONING":
    case "OPTIMISTIC_TIMESTAMP":
    case "OPTIMISTIC_DATE":
    case "OPTIMISTIC_NUMBER":
      return E.jsx(ix, { type: e.state });
    default:
      return E.jsxs("div", { children: ["ERROR: unsupprted state $", e.state] });
  }
}
const cx = Qo(sx),
  ux = document.getElementById("root"),
  lx = rg.createRoot(ux),
  Bf = () => {
    lx.render(E.jsx(gp, { ...bp, children: E.jsx(cx, {}) }));
  };
ka.view.theme
  .enable()
  .then(() => {
    Bf();
  })
  .catch((e) => {
    (console.error(e.message), Bf());
  });
export {
  O as R,
  by as T,
  Xe as _,
  be as a,
  Ns as b,
  ge as c,
  Ye as d,
  X as e,
  J as f,
  C as g,
  te as h,
  ni as i,
  Ve as j,
  Z as k,
  Aw as l,
  Ht as m,
  Mt as n,
  P as o,
  hy as p,
  Mm as q,
  _ as r,
  fy as s,
  Z1 as w,
};
