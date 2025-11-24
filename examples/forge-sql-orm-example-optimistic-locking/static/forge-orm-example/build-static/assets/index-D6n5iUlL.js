const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-rZ54dySn.js",
      "./react-dom-vendor-B_rzBOmK.js",
      "./client-core-vendor-D5B_tUbY.js",
      "./lodash-vendor-htvpa8uV.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as _t, a as Qo, c as Wg } from "./react-dom-vendor-B_rzBOmK.js";
import { g as ir, a as mc, r as ar, b as Dt, s as et } from "./client-core-vendor-D5B_tUbY.js";
import { r as Jg } from "./lodash-vendor-htvpa8uV.js";
function Yg(e, t) {
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
var Ai = { exports: {} },
  dn = {};
var ru;
function Xg() {
  if (ru) return dn;
  ru = 1;
  var e = _t(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(c, s, u) {
    var l,
      d = {},
      p = null,
      v = null;
    (u !== void 0 && (p = "" + u),
      s.key !== void 0 && (p = "" + s.key),
      s.ref !== void 0 && (v = s.ref));
    for (l in s) n.call(s, l) && !o.hasOwnProperty(l) && (d[l] = s[l]);
    if (c && c.defaultProps) for (l in ((s = c.defaultProps), s)) d[l] === void 0 && (d[l] = s[l]);
    return { $$typeof: t, type: c, key: p, ref: v, props: d, _owner: a.current };
  }
  return ((dn.Fragment = r), (dn.jsx = i), (dn.jsxs = i), dn);
}
var nu;
function Zg() {
  return (nu || ((nu = 1), (Ai.exports = Xg())), Ai.exports);
}
var E = Zg(),
  m = _t();
const O = ir(m),
  au = Yg({ __proto__: null, default: O }, [m]);
var Ii = {},
  qs = function (e, t) {
    return (
      (qs =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      qs(e, t)
    );
  };
function Rv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  qs(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var Do = function () {
  return (
    (Do =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    Do.apply(this, arguments)
  );
};
function Pv(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function Av(e, t, r, n) {
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
function Iv(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function jv(e, t, r, n, a, o) {
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
      p = !1,
      v = r.length - 1;
    v >= 0;
    v--
  ) {
    var g = {};
    for (var f in n) g[f] = f === "access" ? {} : n[f];
    for (var f in n.access) g.access[f] = n.access[f];
    g.addInitializer = function (b) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(i(b || null));
    };
    var h = (0, r[v])(c === "accessor" ? { get: l.get, set: l.set } : l[s], g);
    if (c === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      ((d = i(h.get)) && (l.get = d),
        (d = i(h.set)) && (l.set = d),
        (d = i(h.init)) && a.unshift(d));
    } else (d = i(h)) && (c === "field" ? a.unshift(d) : (l[s] = d));
  }
  (u && Object.defineProperty(u, n.name, l), (p = !0));
}
function Dv(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function Tv(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Mv(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function Lv(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Nv(e, t, r, n) {
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
function Bv(e, t) {
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
var ei = Object.create
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
function Fv(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && ei(t, e, r);
}
function To(e) {
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
function yc(e, t) {
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
function qv() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(yc(arguments[t]));
  return e;
}
function Uv() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var o = arguments[t], i = 0, c = o.length; i < c; i++, a++) n[a] = o[i];
  return n;
}
function zv(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function Jr(e) {
  return this instanceof Jr ? ((this.v = e), this) : new Jr(e);
}
function $v(e, t, r) {
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
  function i(v) {
    return function (g) {
      return Promise.resolve(g).then(v, d);
    };
  }
  function c(v, g) {
    n[v] &&
      ((a[v] = function (f) {
        return new Promise(function (h, b) {
          o.push([v, f, h, b]) > 1 || s(v, f);
        });
      }),
      g && (a[v] = g(a[v])));
  }
  function s(v, g) {
    try {
      u(n[v](g));
    } catch (f) {
      p(o[0][3], f);
    }
  }
  function u(v) {
    v.value instanceof Jr ? Promise.resolve(v.value.v).then(l, d) : p(o[0][2], v);
  }
  function l(v) {
    s("next", v);
  }
  function d(v) {
    s("throw", v);
  }
  function p(v, g) {
    (v(g), o.shift(), o.length && s(o[0][0], o[0][1]));
  }
}
function Vv(e) {
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
          return (r = !r) ? { value: Jr(e[a](i)), done: !1 } : o ? o(i) : i;
        }
      : o;
  }
}
function Gv(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof To == "function" ? To(e) : e[Symbol.iterator]()),
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
function Hv(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var Qg = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Us = function (e) {
    return (
      (Us =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      Us(e)
    );
  };
function Kv(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = Us(e), n = 0; n < r.length; n++) r[n] !== "default" && ei(t, e, r[n]);
  return (Qg(t, e), t);
}
function Wv(e) {
  return e && e.__esModule ? e : { default: e };
}
function Jv(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Yv(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function Xv(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Zv(e, t, r) {
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
var eb =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Qv(e) {
  function t(o) {
    ((e.error = e.hasError ? new eb(o, e.error, "An error was suppressed during disposal.") : o),
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
function ep(e, t) {
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
const tb = {
    __extends: Rv,
    __assign: Do,
    __rest: Pv,
    __decorate: Av,
    __param: Iv,
    __esDecorate: jv,
    __runInitializers: Dv,
    __propKey: Tv,
    __setFunctionName: Mv,
    __metadata: Lv,
    __awaiter: Nv,
    __generator: Bv,
    __createBinding: ei,
    __exportStar: Fv,
    __values: To,
    __read: yc,
    __spread: qv,
    __spreadArrays: Uv,
    __spreadArray: zv,
    __await: Jr,
    __asyncGenerator: $v,
    __asyncDelegator: Vv,
    __asyncValues: Gv,
    __makeTemplateObject: Hv,
    __importStar: Kv,
    __importDefault: Wv,
    __classPrivateFieldGet: Jv,
    __classPrivateFieldSet: Yv,
    __classPrivateFieldIn: Xv,
    __addDisposableResource: Zv,
    __disposeResources: Qv,
    __rewriteRelativeImportExtension: ep,
  },
  rb = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Zv,
        get __assign() {
          return Do;
        },
        __asyncDelegator: Vv,
        __asyncGenerator: $v,
        __asyncValues: Gv,
        __await: Jr,
        __awaiter: Nv,
        __classPrivateFieldGet: Jv,
        __classPrivateFieldIn: Xv,
        __classPrivateFieldSet: Yv,
        __createBinding: ei,
        __decorate: Av,
        __disposeResources: Qv,
        __esDecorate: jv,
        __exportStar: Fv,
        __extends: Rv,
        __generator: Bv,
        __importDefault: Wv,
        __importStar: Kv,
        __makeTemplateObject: Hv,
        __metadata: Lv,
        __param: Iv,
        __propKey: Tv,
        __read: yc,
        __rest: Pv,
        __rewriteRelativeImportExtension: ep,
        __runInitializers: Dv,
        __setFunctionName: Mv,
        __spread: qv,
        __spreadArray: zv,
        __spreadArrays: Uv,
        __values: To,
        default: tb,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  mt = mc(rb);
var fn = {},
  ou;
function nb() {
  return (
    ou ||
      ((ou = 1),
      Object.defineProperty(fn, "__esModule", { value: !0 }),
      (fn.NavigationTarget = void 0),
      (fn.NavigationTarget = {
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
    fn
  );
}
var ji = {},
  Di = {},
  vn = {},
  pn = {},
  iu;
function ye() {
  if (iu) return pn;
  ((iu = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((pn.BridgeAPIError = e), pn);
}
var su;
function fe() {
  if (su) return vn;
  ((su = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.getCallBridge = void 0));
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
  return ((vn.getCallBridge = r), vn);
}
var hn = {},
  cu;
function ti() {
  if (cu) return hn;
  ((cu = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.withRateLimiter = void 0));
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
  return ((hn.withRateLimiter = t), hn);
}
var uu;
function ab() {
  return (
    uu ||
      ((uu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = fe(),
          r = ye(),
          n = ti(),
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
      })(Di)),
    Di
  );
}
var lu;
function Ya() {
  return (
    lu ||
      ((lu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), mt.__exportStar(ab(), e));
      })(ji)),
    ji
  );
}
var Ti = {},
  gn = {},
  Mi = {},
  du;
function tp() {
  return (
    du ||
      ((du = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = fe(),
          r = ye(),
          n = ti(),
          a = 500,
          o = 25,
          i = 1e3 * o;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, t.getCallBridge)(),
          s = (d) => {
            if (d && Object.values(d).some((p) => typeof p == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          u = (d) => async (p) => {
            s(p);
            const v = { ...p, invokeType: `ui-${d.toLowerCase()}-fetch` },
              g = await c("invoke", v),
              { success: f, payload: h, error: b } = g ?? {},
              _ = { ...(f ? h : b) };
            if (_ && _.headers)
              for (const y in _.headers)
                Array.isArray(_.headers[y]) && (_.headers[y] = _.headers[y].join(","));
            return _;
          },
          l = (d) => {
            const p = u(d);
            return (0, n.withRateLimiter)(
              p,
              a,
              i,
              `${d} invocation calls are rate limited at ${a}/${o}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(Mi)),
    Mi
  );
}
var fu;
function ob() {
  if (fu) return gn;
  ((fu = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.invokeRemote = void 0));
  const e = tp(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((gn.invokeRemote = t), gn);
}
var bn = {},
  vu;
function ib() {
  if (vu) return bn;
  ((vu = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.invokeService = void 0));
  const e = tp(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((bn.invokeService = t), bn);
}
var pu;
function sb() {
  return (
    pu ||
      ((pu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = mt;
        (t.__exportStar(ob(), e), t.__exportStar(ib(), e));
      })(Ti)),
    Ti
  );
}
var Li = {},
  _n = {},
  mn = {},
  hu;
function cb() {
  if (hu) return mn;
  ((hu = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.submit = void 0));
  const e = fe(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((mn.submit = n), mn);
}
var yn = {},
  gu;
function ub() {
  if (gu) return yn;
  ((gu = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.close = void 0));
  const e = fe(),
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
  return ((yn.close = n), yn);
}
var wn = {},
  bu;
function lb() {
  if (bu) return wn;
  ((bu = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.open = void 0));
  const e = fe(),
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
  return ((wn.open = n), wn);
}
var kn = {},
  _u;
function db() {
  if (_u) return kn;
  ((_u = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.refresh = void 0));
  const e = fe(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((kn.refresh = n), kn);
}
var On = {},
  mu;
function fb() {
  if (mu) return On;
  ((mu = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.createHistory = void 0));
  const t = (0, fe().getCallBridge)(),
    r = async () => {
      const n = await t("createHistory");
      return (
        n.listen((a) => {
          n.location = a;
        }),
        n
      );
    };
  return ((On.createHistory = r), On);
}
var Sn = {},
  Ni = {},
  Ft = {},
  yu;
function rp() {
  return (
    yu ||
      ((yu = 1),
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
var ur = {},
  wu;
function vb() {
  if (wu) return ur;
  ((wu = 1),
    Object.defineProperty(ur, "__esModule", { value: !0 }),
    (ur.TranslationsGetter = ur.TranslationGetterError = void 0));
  const e = (n, a) => {
    n.includes(a) || n.push(a);
  };
  class t extends Error {
    constructor(a) {
      (super(a), (this.name = "TranslationGetterError"));
    }
  }
  ur.TranslationGetterError = t;
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
  return ((ur.TranslationsGetter = r), ur);
}
var En = {},
  Bi = {},
  ku;
function np() {
  return (
    ku ||
      ((ku = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = mt.__importDefault(Jg()),
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
      })(Bi)),
    Bi
  );
}
var Ou;
function pb() {
  if (Ou) return En;
  ((Ou = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.Translator = void 0));
  const e = np();
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
  return ((En.Translator = t), En);
}
var xn = {},
  Su;
function hb() {
  if (Su) return xn;
  ((Su = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.ensureLocale = void 0));
  const e = rp(),
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
  return ((xn.ensureLocale = a), xn);
}
var Fi = {},
  Eu;
function gb() {
  return (
    Eu ||
      ((Eu = 1),
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
              d = (p, v) =>
                !t(p) || l.has(p)
                  ? []
                  : (l.add(p),
                    Object.entries(p).flatMap(([g, f]) => {
                      const h = [...v, g];
                      return r(f)
                        ? [{ propertyPath: h, key: f.i18n }]
                        : Array.isArray(f)
                          ? f.flatMap((b) => d(b, h))
                          : d(f, h);
                    }));
            return d(u, []);
          },
          i = (u) =>
            Object.entries(u).flatMap(([l, d]) =>
              !n(l) && !a(l) && d && Array.isArray(d) && d.length > 0 ? d.map((p) => [p, l]) : [],
            );
        e.getI18nSupportedModuleEntries = i;
        const c = (u) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(u)) {
            const p = o(d[0]);
            for (const { key: v } of p) l.add(v);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = c;
        const s = (u) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(u)) {
            const p = o(d[0]);
            for (const v of p) l.push({ moduleName: d[1], ...v });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = s;
      })(Fi)),
    Fi
  );
}
var qi = {},
  xu;
function bb() {
  return (xu || ((xu = 1), Object.defineProperty(qi, "__esModule", { value: !0 })), qi);
}
var Cu;
function ap() {
  return (
    Cu ||
      ((Cu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = mt;
        (t.__exportStar(rp(), e),
          t.__exportStar(vb(), e),
          t.__exportStar(pb(), e),
          t.__exportStar(hb(), e));
        var r = np();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = gb();
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
          t.__exportStar(bb(), e));
      })(Ni)),
    Ni
  );
}
var Ru;
function _b() {
  if (Ru) return Sn;
  ((Ru = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.getContext = void 0));
  const e = fe(),
    t = ap(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const o = await r("getContext"),
        i = o?.locale;
      return (i && (o.locale = (a = (0, t.ensureLocale)(i)) !== null && a !== void 0 ? a : i), o);
    };
  return ((Sn.getContext = n), Sn);
}
var Cn = {},
  Pu;
function mb() {
  if (Pu) return Cn;
  ((Pu = 1),
    Object.defineProperty(Cn, "__esModule", { value: !0 }),
    (Cn.changeWindowTitle = void 0));
  const e = fe(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        await r("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((Cn.changeWindowTitle = n), Cn);
}
var Rn = {},
  Au;
function yb() {
  if (Au) return Rn;
  ((Au = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.theme = void 0));
  const t = (0, fe().getCallBridge)();
  return ((Rn.theme = { enable: () => t("enableTheming") }), Rn);
}
var Pn = {},
  An = {},
  Ui = {},
  lr = {},
  Iu;
function op() {
  if (Iu) return lr;
  ((Iu = 1),
    Object.defineProperty(lr, "__esModule", { value: !0 }),
    (lr.blobToBase64 = lr.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      o = atob(a),
      i = new Array(o.length);
    for (let s = 0; s < o.length; s++) i[s] = o.charCodeAt(s);
    const c = new Uint8Array(i);
    return new Blob([c], { type: n });
  };
  lr.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, a) => {
      const o = new FileReader();
      ((o.onloadend = () => {
        n(o.result);
      }),
        (o.onerror = a),
        o.readAsDataURL(r));
    });
  return ((lr.blobToBase64 = t), lr);
}
var ju;
function wb() {
  return (
    ju ||
      ((ju = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = op(),
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
                Object.entries(u).map(async ([d, p]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(p),
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
            for (const [d, p] of Object.entries(u)) l[d] = (0, e.deserialiseBlobsInPayload)(p);
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
      })(Ui)),
    Ui
  );
}
var Du;
function ip() {
  if (Du) return An;
  ((Du = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.events = void 0));
  const e = fe(),
    t = wb(),
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
  return ((An.events = { emit: n, on: a }), An);
}
var Tu;
function kb() {
  if (Tu) return Pn;
  ((Tu = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.emitReadyEvent = void 0));
  const e = ip(),
    t = dp(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return ((Pn.emitReadyEvent = n), Pn);
}
const Ob = "modulepreload",
  Sb = function (e, t) {
    return new URL(e, t).href;
  },
  Mu = {},
  sp = function (t, r, n) {
    let a = Promise.resolve();
    if (r && r.length > 0) {
      let u = function (l) {
        return Promise.all(
          l.map((d) =>
            Promise.resolve(d).then(
              (p) => ({ status: "fulfilled", value: p }),
              (p) => ({ status: "rejected", reason: p }),
            ),
          ),
        );
      };
      const i = document.getElementsByTagName("link"),
        c = document.querySelector("meta[property=csp-nonce]"),
        s = c?.nonce || c?.getAttribute("nonce");
      a = u(
        r.map((l) => {
          if (((l = Sb(l, n)), l in Mu)) return;
          Mu[l] = !0;
          const d = l.endsWith(".css"),
            p = d ? '[rel="stylesheet"]' : "";
          if (n)
            for (let g = i.length - 1; g >= 0; g--) {
              const f = i[g];
              if (f.href === l && (!d || f.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${p}`)) return;
          const v = document.createElement("link");
          if (
            ((v.rel = d ? "stylesheet" : Ob),
            d || (v.as = "script"),
            (v.crossOrigin = ""),
            (v.href = l),
            s && v.setAttribute("nonce", s),
            document.head.appendChild(v),
            d)
          )
            return new Promise((g, f) => {
              (v.addEventListener("load", g),
                v.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${l}`))));
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
var In = {},
  zi = {},
  jn = {},
  so = {},
  Lu;
function cp() {
  if (Lu) return so;
  ((Lu = 1), Object.defineProperty(so, "__esModule", { value: !0 }), (so.default = r));
  let e;
  const t = new Uint8Array(16);
  function r() {
    if (
      !e &&
      ((e = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)),
      !e)
    )
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    return e(t);
  }
  return so;
}
var jr = {},
  Dn = {},
  Tn = {},
  Nu;
function Eb() {
  if (Nu) return Tn;
  ((Nu = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((Tn.default = e), Tn);
}
var Bu;
function ri() {
  if (Bu) return Dn;
  ((Bu = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.default = void 0));
  var e = t(Eb());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    return typeof a == "string" && e.default.test(a);
  }
  var n = r;
  return ((Dn.default = n), Dn);
}
var Fu;
function ni() {
  if (Fu) return jr;
  ((Fu = 1),
    Object.defineProperty(jr, "__esModule", { value: !0 }),
    (jr.default = void 0),
    (jr.unsafeStringify = n));
  var e = t(ri());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const r = [];
  for (let i = 0; i < 256; ++i) r.push((i + 256).toString(16).slice(1));
  function n(i, c = 0) {
    return (
      r[i[c + 0]] +
      r[i[c + 1]] +
      r[i[c + 2]] +
      r[i[c + 3]] +
      "-" +
      r[i[c + 4]] +
      r[i[c + 5]] +
      "-" +
      r[i[c + 6]] +
      r[i[c + 7]] +
      "-" +
      r[i[c + 8]] +
      r[i[c + 9]] +
      "-" +
      r[i[c + 10]] +
      r[i[c + 11]] +
      r[i[c + 12]] +
      r[i[c + 13]] +
      r[i[c + 14]] +
      r[i[c + 15]]
    );
  }
  function a(i, c = 0) {
    const s = n(i, c);
    if (!(0, e.default)(s)) throw TypeError("Stringified UUID is invalid");
    return s;
  }
  var o = a;
  return ((jr.default = o), jr);
}
var qu;
function xb() {
  if (qu) return jn;
  ((qu = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.default = void 0));
  var e = r(cp()),
    t = ni();
  function r(u) {
    return u && u.__esModule ? u : { default: u };
  }
  let n,
    a,
    o = 0,
    i = 0;
  function c(u, l, d) {
    let p = (l && d) || 0;
    const v = l || new Array(16);
    u = u || {};
    let g = u.node || n,
      f = u.clockseq !== void 0 ? u.clockseq : a;
    if (g == null || f == null) {
      const w = u.random || (u.rng || e.default)();
      (g == null && (g = n = [w[0] | 1, w[1], w[2], w[3], w[4], w[5]]),
        f == null && (f = a = ((w[6] << 8) | w[7]) & 16383));
    }
    let h = u.msecs !== void 0 ? u.msecs : Date.now(),
      b = u.nsecs !== void 0 ? u.nsecs : i + 1;
    const _ = h - o + (b - i) / 1e4;
    if (
      (_ < 0 && u.clockseq === void 0 && (f = (f + 1) & 16383),
      (_ < 0 || h > o) && u.nsecs === void 0 && (b = 0),
      b >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((o = h), (i = b), (a = f), (h += 122192928e5));
    const y = ((h & 268435455) * 1e4 + b) % 4294967296;
    ((v[p++] = (y >>> 24) & 255),
      (v[p++] = (y >>> 16) & 255),
      (v[p++] = (y >>> 8) & 255),
      (v[p++] = y & 255));
    const k = ((h / 4294967296) * 1e4) & 268435455;
    ((v[p++] = (k >>> 8) & 255),
      (v[p++] = k & 255),
      (v[p++] = ((k >>> 24) & 15) | 16),
      (v[p++] = (k >>> 16) & 255),
      (v[p++] = (f >>> 8) | 128),
      (v[p++] = f & 255));
    for (let w = 0; w < 6; ++w) v[p + w] = g[w];
    return l || (0, t.unsafeStringify)(v);
  }
  var s = c;
  return ((jn.default = s), jn);
}
var Mn = {},
  Zt = {},
  Ln = {},
  Uu;
function up() {
  if (Uu) return Ln;
  ((Uu = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.default = void 0));
  var e = t(ri());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    if (!(0, e.default)(a)) throw TypeError("Invalid UUID");
    let o;
    const i = new Uint8Array(16);
    return (
      (i[0] = (o = parseInt(a.slice(0, 8), 16)) >>> 24),
      (i[1] = (o >>> 16) & 255),
      (i[2] = (o >>> 8) & 255),
      (i[3] = o & 255),
      (i[4] = (o = parseInt(a.slice(9, 13), 16)) >>> 8),
      (i[5] = o & 255),
      (i[6] = (o = parseInt(a.slice(14, 18), 16)) >>> 8),
      (i[7] = o & 255),
      (i[8] = (o = parseInt(a.slice(19, 23), 16)) >>> 8),
      (i[9] = o & 255),
      (i[10] = ((o = parseInt(a.slice(24, 36), 16)) / 1099511627776) & 255),
      (i[11] = (o / 4294967296) & 255),
      (i[12] = (o >>> 24) & 255),
      (i[13] = (o >>> 16) & 255),
      (i[14] = (o >>> 8) & 255),
      (i[15] = o & 255),
      i
    );
  }
  var n = r;
  return ((Ln.default = n), Ln);
}
var zu;
function lp() {
  if (zu) return Zt;
  ((zu = 1),
    Object.defineProperty(Zt, "__esModule", { value: !0 }),
    (Zt.URL = Zt.DNS = void 0),
    (Zt.default = i));
  var e = ni(),
    t = r(up());
  function r(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function n(c) {
    c = unescape(encodeURIComponent(c));
    const s = [];
    for (let u = 0; u < c.length; ++u) s.push(c.charCodeAt(u));
    return s;
  }
  const a = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  Zt.DNS = a;
  const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  Zt.URL = o;
  function i(c, s, u) {
    function l(d, p, v, g) {
      var f;
      if (
        (typeof d == "string" && (d = n(d)),
        typeof p == "string" && (p = (0, t.default)(p)),
        ((f = p) === null || f === void 0 ? void 0 : f.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let h = new Uint8Array(16 + d.length);
      if (
        (h.set(p),
        h.set(d, p.length),
        (h = u(h)),
        (h[6] = (h[6] & 15) | s),
        (h[8] = (h[8] & 63) | 128),
        v)
      ) {
        g = g || 0;
        for (let b = 0; b < 16; ++b) v[g + b] = h[b];
        return v;
      }
      return (0, e.unsafeStringify)(h);
    }
    try {
      l.name = c;
    } catch {}
    return ((l.DNS = a), (l.URL = o), l);
  }
  return Zt;
}
var Nn = {},
  $u;
function Cb() {
  if ($u) return Nn;
  (($u = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.default = void 0));
  function e(v) {
    if (typeof v == "string") {
      const g = unescape(encodeURIComponent(v));
      v = new Uint8Array(g.length);
      for (let f = 0; f < g.length; ++f) v[f] = g.charCodeAt(f);
    }
    return t(n(a(v), v.length * 8));
  }
  function t(v) {
    const g = [],
      f = v.length * 32,
      h = "0123456789abcdef";
    for (let b = 0; b < f; b += 8) {
      const _ = (v[b >> 5] >>> b % 32) & 255,
        y = parseInt(h.charAt((_ >>> 4) & 15) + h.charAt(_ & 15), 16);
      g.push(y);
    }
    return g;
  }
  function r(v) {
    return (((v + 64) >>> 9) << 4) + 14 + 1;
  }
  function n(v, g) {
    ((v[g >> 5] |= 128 << g % 32), (v[r(g) - 1] = g));
    let f = 1732584193,
      h = -271733879,
      b = -1732584194,
      _ = 271733878;
    for (let y = 0; y < v.length; y += 16) {
      const k = f,
        w = h,
        S = b,
        x = _;
      ((f = s(f, h, b, _, v[y], 7, -680876936)),
        (_ = s(_, f, h, b, v[y + 1], 12, -389564586)),
        (b = s(b, _, f, h, v[y + 2], 17, 606105819)),
        (h = s(h, b, _, f, v[y + 3], 22, -1044525330)),
        (f = s(f, h, b, _, v[y + 4], 7, -176418897)),
        (_ = s(_, f, h, b, v[y + 5], 12, 1200080426)),
        (b = s(b, _, f, h, v[y + 6], 17, -1473231341)),
        (h = s(h, b, _, f, v[y + 7], 22, -45705983)),
        (f = s(f, h, b, _, v[y + 8], 7, 1770035416)),
        (_ = s(_, f, h, b, v[y + 9], 12, -1958414417)),
        (b = s(b, _, f, h, v[y + 10], 17, -42063)),
        (h = s(h, b, _, f, v[y + 11], 22, -1990404162)),
        (f = s(f, h, b, _, v[y + 12], 7, 1804603682)),
        (_ = s(_, f, h, b, v[y + 13], 12, -40341101)),
        (b = s(b, _, f, h, v[y + 14], 17, -1502002290)),
        (h = s(h, b, _, f, v[y + 15], 22, 1236535329)),
        (f = u(f, h, b, _, v[y + 1], 5, -165796510)),
        (_ = u(_, f, h, b, v[y + 6], 9, -1069501632)),
        (b = u(b, _, f, h, v[y + 11], 14, 643717713)),
        (h = u(h, b, _, f, v[y], 20, -373897302)),
        (f = u(f, h, b, _, v[y + 5], 5, -701558691)),
        (_ = u(_, f, h, b, v[y + 10], 9, 38016083)),
        (b = u(b, _, f, h, v[y + 15], 14, -660478335)),
        (h = u(h, b, _, f, v[y + 4], 20, -405537848)),
        (f = u(f, h, b, _, v[y + 9], 5, 568446438)),
        (_ = u(_, f, h, b, v[y + 14], 9, -1019803690)),
        (b = u(b, _, f, h, v[y + 3], 14, -187363961)),
        (h = u(h, b, _, f, v[y + 8], 20, 1163531501)),
        (f = u(f, h, b, _, v[y + 13], 5, -1444681467)),
        (_ = u(_, f, h, b, v[y + 2], 9, -51403784)),
        (b = u(b, _, f, h, v[y + 7], 14, 1735328473)),
        (h = u(h, b, _, f, v[y + 12], 20, -1926607734)),
        (f = l(f, h, b, _, v[y + 5], 4, -378558)),
        (_ = l(_, f, h, b, v[y + 8], 11, -2022574463)),
        (b = l(b, _, f, h, v[y + 11], 16, 1839030562)),
        (h = l(h, b, _, f, v[y + 14], 23, -35309556)),
        (f = l(f, h, b, _, v[y + 1], 4, -1530992060)),
        (_ = l(_, f, h, b, v[y + 4], 11, 1272893353)),
        (b = l(b, _, f, h, v[y + 7], 16, -155497632)),
        (h = l(h, b, _, f, v[y + 10], 23, -1094730640)),
        (f = l(f, h, b, _, v[y + 13], 4, 681279174)),
        (_ = l(_, f, h, b, v[y], 11, -358537222)),
        (b = l(b, _, f, h, v[y + 3], 16, -722521979)),
        (h = l(h, b, _, f, v[y + 6], 23, 76029189)),
        (f = l(f, h, b, _, v[y + 9], 4, -640364487)),
        (_ = l(_, f, h, b, v[y + 12], 11, -421815835)),
        (b = l(b, _, f, h, v[y + 15], 16, 530742520)),
        (h = l(h, b, _, f, v[y + 2], 23, -995338651)),
        (f = d(f, h, b, _, v[y], 6, -198630844)),
        (_ = d(_, f, h, b, v[y + 7], 10, 1126891415)),
        (b = d(b, _, f, h, v[y + 14], 15, -1416354905)),
        (h = d(h, b, _, f, v[y + 5], 21, -57434055)),
        (f = d(f, h, b, _, v[y + 12], 6, 1700485571)),
        (_ = d(_, f, h, b, v[y + 3], 10, -1894986606)),
        (b = d(b, _, f, h, v[y + 10], 15, -1051523)),
        (h = d(h, b, _, f, v[y + 1], 21, -2054922799)),
        (f = d(f, h, b, _, v[y + 8], 6, 1873313359)),
        (_ = d(_, f, h, b, v[y + 15], 10, -30611744)),
        (b = d(b, _, f, h, v[y + 6], 15, -1560198380)),
        (h = d(h, b, _, f, v[y + 13], 21, 1309151649)),
        (f = d(f, h, b, _, v[y + 4], 6, -145523070)),
        (_ = d(_, f, h, b, v[y + 11], 10, -1120210379)),
        (b = d(b, _, f, h, v[y + 2], 15, 718787259)),
        (h = d(h, b, _, f, v[y + 9], 21, -343485551)),
        (f = o(f, k)),
        (h = o(h, w)),
        (b = o(b, S)),
        (_ = o(_, x)));
    }
    return [f, h, b, _];
  }
  function a(v) {
    if (v.length === 0) return [];
    const g = v.length * 8,
      f = new Uint32Array(r(g));
    for (let h = 0; h < g; h += 8) f[h >> 5] |= (v[h / 8] & 255) << h % 32;
    return f;
  }
  function o(v, g) {
    const f = (v & 65535) + (g & 65535);
    return (((v >> 16) + (g >> 16) + (f >> 16)) << 16) | (f & 65535);
  }
  function i(v, g) {
    return (v << g) | (v >>> (32 - g));
  }
  function c(v, g, f, h, b, _) {
    return o(i(o(o(g, v), o(h, _)), b), f);
  }
  function s(v, g, f, h, b, _, y) {
    return c((g & f) | (~g & h), v, g, b, _, y);
  }
  function u(v, g, f, h, b, _, y) {
    return c((g & h) | (f & ~h), v, g, b, _, y);
  }
  function l(v, g, f, h, b, _, y) {
    return c(g ^ f ^ h, v, g, b, _, y);
  }
  function d(v, g, f, h, b, _, y) {
    return c(f ^ (g | ~h), v, g, b, _, y);
  }
  var p = e;
  return ((Nn.default = p), Nn);
}
var Vu;
function Rb() {
  if (Vu) return Mn;
  ((Vu = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.default = void 0));
  var e = r(lp()),
    t = r(Cb());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v3", 48, t.default);
  return ((Mn.default = a), Mn);
}
var Bn = {},
  Fn = {},
  Gu;
function Pb() {
  if (Gu) return Fn;
  ((Gu = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.default = void 0));
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((Fn.default = t), Fn);
}
var Hu;
function Ab() {
  if (Hu) return Bn;
  ((Hu = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.default = void 0));
  var e = n(Pb()),
    t = n(cp()),
    r = ni();
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function a(i, c, s) {
    if (e.default.randomUUID && !c && !i) return e.default.randomUUID();
    i = i || {};
    const u = i.random || (i.rng || t.default)();
    if (((u[6] = (u[6] & 15) | 64), (u[8] = (u[8] & 63) | 128), c)) {
      s = s || 0;
      for (let l = 0; l < 16; ++l) c[s + l] = u[l];
      return c;
    }
    return (0, r.unsafeStringify)(u);
  }
  var o = a;
  return ((Bn.default = o), Bn);
}
var qn = {},
  Un = {},
  Ku;
function Ib() {
  if (Ku) return Un;
  ((Ku = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.default = void 0));
  function e(a, o, i, c) {
    switch (a) {
      case 0:
        return (o & i) ^ (~o & c);
      case 1:
        return o ^ i ^ c;
      case 2:
        return (o & i) ^ (o & c) ^ (i & c);
      case 3:
        return o ^ i ^ c;
    }
  }
  function t(a, o) {
    return (a << o) | (a >>> (32 - o));
  }
  function r(a) {
    const o = [1518500249, 1859775393, 2400959708, 3395469782],
      i = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof a == "string") {
      const l = unescape(encodeURIComponent(a));
      a = [];
      for (let d = 0; d < l.length; ++d) a.push(l.charCodeAt(d));
    } else Array.isArray(a) || (a = Array.prototype.slice.call(a));
    a.push(128);
    const c = a.length / 4 + 2,
      s = Math.ceil(c / 16),
      u = new Array(s);
    for (let l = 0; l < s; ++l) {
      const d = new Uint32Array(16);
      for (let p = 0; p < 16; ++p)
        d[p] =
          (a[l * 64 + p * 4] << 24) |
          (a[l * 64 + p * 4 + 1] << 16) |
          (a[l * 64 + p * 4 + 2] << 8) |
          a[l * 64 + p * 4 + 3];
      u[l] = d;
    }
    ((u[s - 1][14] = ((a.length - 1) * 8) / Math.pow(2, 32)),
      (u[s - 1][14] = Math.floor(u[s - 1][14])),
      (u[s - 1][15] = ((a.length - 1) * 8) & 4294967295));
    for (let l = 0; l < s; ++l) {
      const d = new Uint32Array(80);
      for (let b = 0; b < 16; ++b) d[b] = u[l][b];
      for (let b = 16; b < 80; ++b) d[b] = t(d[b - 3] ^ d[b - 8] ^ d[b - 14] ^ d[b - 16], 1);
      let p = i[0],
        v = i[1],
        g = i[2],
        f = i[3],
        h = i[4];
      for (let b = 0; b < 80; ++b) {
        const _ = Math.floor(b / 20),
          y = (t(p, 5) + e(_, v, g, f) + h + o[_] + d[b]) >>> 0;
        ((h = f), (f = g), (g = t(v, 30) >>> 0), (v = p), (p = y));
      }
      ((i[0] = (i[0] + p) >>> 0),
        (i[1] = (i[1] + v) >>> 0),
        (i[2] = (i[2] + g) >>> 0),
        (i[3] = (i[3] + f) >>> 0),
        (i[4] = (i[4] + h) >>> 0));
    }
    return [
      (i[0] >> 24) & 255,
      (i[0] >> 16) & 255,
      (i[0] >> 8) & 255,
      i[0] & 255,
      (i[1] >> 24) & 255,
      (i[1] >> 16) & 255,
      (i[1] >> 8) & 255,
      i[1] & 255,
      (i[2] >> 24) & 255,
      (i[2] >> 16) & 255,
      (i[2] >> 8) & 255,
      i[2] & 255,
      (i[3] >> 24) & 255,
      (i[3] >> 16) & 255,
      (i[3] >> 8) & 255,
      i[3] & 255,
      (i[4] >> 24) & 255,
      (i[4] >> 16) & 255,
      (i[4] >> 8) & 255,
      i[4] & 255,
    ];
  }
  var n = r;
  return ((Un.default = n), Un);
}
var Wu;
function jb() {
  if (Wu) return qn;
  ((Wu = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.default = void 0));
  var e = r(lp()),
    t = r(Ib());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v5", 80, t.default);
  return ((qn.default = a), qn);
}
var zn = {},
  Ju;
function Db() {
  if (Ju) return zn;
  ((Ju = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((zn.default = e), zn);
}
var $n = {},
  Yu;
function Tb() {
  if (Yu) return $n;
  ((Yu = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0));
  var e = t(ri());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    if (!(0, e.default)(a)) throw TypeError("Invalid UUID");
    return parseInt(a.slice(14, 15), 16);
  }
  var n = r;
  return (($n.default = n), $n);
}
var Xu;
function Mb() {
  return (
    Xu ||
      ((Xu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "NIL", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(e, "parse", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(e, "stringify", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(e, "v1", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(e, "v3", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(e, "v4", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(e, "v5", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(e, "validate", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          }),
          Object.defineProperty(e, "version", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }));
        var t = l(xb()),
          r = l(Rb()),
          n = l(Ab()),
          a = l(jb()),
          o = l(Db()),
          i = l(Tb()),
          c = l(ri()),
          s = l(ni()),
          u = l(up());
        function l(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(zi)),
    zi
  );
}
var Zu;
function Lb() {
  if (Zu) return In;
  ((Zu = 1),
    Object.defineProperty(In, "__esModule", { value: !0 }),
    (In.createAdfRendererIframeProps = void 0));
  const e = Mb(),
    t = async (r, n) => {
      const { iframeResizer: a } = await sp(
          async () => {
            const { iframeResizer: u } = await import("./index-2D7JALmr.js").then((l) => l.i);
            return { iframeResizer: u };
          },
          [],
          import.meta.url,
        ),
        o = new URL(document.referrer).origin,
        i = `${o}/forge-apps/adf-renderer`;
      window.addEventListener("load", () => {
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200);
      });
      const c = n || `forge-adf-renderer-iframe-${(0, e.v4)()}`;
      return {
        id: c,
        src: i,
        onLoad: () => {
          var u, l;
          const d = document.getElementById(c),
            p = {
              type: "adf-document",
              document: (u = r.extension.macro) === null || u === void 0 ? void 0 : u.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: r.localId,
            };
          (a(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (v) => {
                var g;
                (g = v?.iFrameResizer) === null || g === void 0 || g.resize();
              },
            },
            d || "",
          ),
            (l = d?.contentWindow) === null || l === void 0 || l.postMessage(p, o));
        },
      };
    };
  return ((In.createAdfRendererIframeProps = t), In);
}
var Qu;
function dp() {
  if (Qu) return _n;
  ((Qu = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.view = void 0));
  const e = cb(),
    t = ub(),
    r = lb(),
    n = db(),
    a = fb(),
    o = _b(),
    i = mb(),
    c = yb(),
    s = kb(),
    u = Lb();
  return (
    (_n.view = {
      submit: e.submit,
      close: t.close,
      open: r.open,
      refresh: n.refresh,
      createHistory: a.createHistory,
      getContext: o.getContext,
      theme: c.theme,
      changeWindowTitle: i.changeWindowTitle,
      emitReadyEvent: s.emitReadyEvent,
      createAdfRendererIframeProps: u.createAdfRendererIframeProps,
    }),
    _n
  );
}
var el;
function wc() {
  return (
    el ||
      ((el = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), mt.__exportStar(dp(), e));
      })(Li)),
    Li
  );
}
var $i = {},
  Vn = {},
  tl;
function Nb() {
  if (tl) return Vn;
  ((tl = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.router = void 0));
  const t = (0, fe().getCallBridge)(),
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
  return ((Vn.router = { getUrl: r, navigate: n, open: a, reload: o }), Vn);
}
var rl;
function Bb() {
  return (
    rl ||
      ((rl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), mt.__exportStar(Nb(), e));
      })($i)),
    $i
  );
}
var Vi = {},
  Gn = {},
  nl;
function Fb() {
  if (nl) return Gn;
  ((nl = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.Modal = void 0));
  const e = fe(),
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
  return ((Gn.Modal = a), Gn);
}
var al;
function qb() {
  return (
    al ||
      ((al = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), mt.__exportStar(Fb(), e));
      })(Vi)),
    Vi
  );
}
var ft = {},
  dr = {},
  ol;
function Ub() {
  if (ol) return dr;
  ((ol = 1),
    Object.defineProperty(dr, "__esModule", { value: !0 }),
    (dr.productFetchApi = dr.remoteFetchApi = void 0));
  const e = op(),
    t = async (i) => {
      const c = {};
      for (const [s, u] of i.entries())
        if (s === "file") {
          const l = u.name,
            d = u.type;
          ((c.file = await (0, e.blobToBase64)(u)), (c.__fileName = l), (c.__fileType = d));
        } else c[s] = u;
      return JSON.stringify(c);
    },
    r = (i) => {
      if (!i) return i;
      if ("signal" in i) {
        const { signal: c, ...s } = i;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          s
        );
      }
      return i;
    },
    n = async (i) => {
      const c = i?.body instanceof FormData,
        s = c ? await t(i?.body) : i?.body,
        u = new Request("", { body: s, method: i?.method, headers: i?.headers }),
        l = Object.fromEntries(u.headers.entries());
      return {
        body: u.method !== "GET" ? await u.text() : null,
        headers: new Headers(l),
        isMultipartFormData: c,
      };
    },
    a = (i) => {
      const c = async (s, u) => {
        const l = r(u),
          { body: d, headers: p, isMultipartFormData: v } = await n(l),
          g = {
            remoteKey: s,
            fetchRequestInit: { ...l, body: d, headers: [...p.entries()] },
            isMultipartFormData: v,
          },
          {
            body: f,
            headers: h,
            statusText: b,
            status: _,
            isAttachment: y,
          } = await i("fetchRemote", g),
          k = y ? (0, e.base64ToBlob)(f, h["content-type"]) : f;
        return new Response(k || null, { headers: h, status: _, statusText: b });
      };
      return { requestRemote: (s, u) => c(s, u) };
    };
  dr.remoteFetchApi = a;
  const o = (i) => {
    const c = async (s, u, l) => {
      const d = r(l),
        { body: p, headers: v, isMultipartFormData: g } = await n(d);
      v.has("X-Atlassian-Token") || v.set("X-Atlassian-Token", "no-check");
      const f = {
          product: s,
          restPath: u,
          fetchRequestInit: { ...d, body: p, headers: [...v.entries()] },
          isMultipartFormData: g,
        },
        {
          body: h,
          headers: b,
          statusText: _,
          status: y,
          isAttachment: k,
        } = await i("fetchProduct", f),
        w = k ? (0, e.base64ToBlob)(h, b["content-type"]) : h;
      return new Response(w || null, { headers: b, status: y, statusText: _ });
    };
    return {
      requestConfluence: (s, u) => c("confluence", s, u),
      requestJira: (s, u) => c("jira", s, u),
      requestBitbucket: (s, u) => c("bitbucket", s, u),
    };
  };
  return ((dr.productFetchApi = o), dr);
}
var il;
function zb() {
  if (il) return ft;
  il = 1;
  var e;
  (Object.defineProperty(ft, "__esModule", { value: !0 }),
    (ft.requestRemote = ft.requestBitbucket = ft.requestJira = ft.requestConfluence = void 0));
  const t = fe(),
    r = Ub();
  return (
    (e = (0, r.productFetchApi)((0, t.getCallBridge)())),
    (ft.requestConfluence = e.requestConfluence),
    (ft.requestJira = e.requestJira),
    (ft.requestBitbucket = e.requestBitbucket),
    (ft.requestRemote = (0, r.remoteFetchApi)((0, t.getCallBridge)()).requestRemote),
    ft
  );
}
var Gi = {},
  Hn = {},
  sl;
function $b() {
  if (sl) return Hn;
  ((sl = 1), Object.defineProperty(Hn, "__esModule", { value: !0 }), (Hn.showFlag = void 0));
  const e = fe(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var o;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const i = r("showFlag", { ...a, type: (o = a.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await i, r("closeFlag", { id: a.id })) };
    };
  return ((Hn.showFlag = n), Hn);
}
var cl;
function Vb() {
  return (
    cl ||
      ((cl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = $b();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(Gi)),
    Gi
  );
}
var Hi = {},
  ul;
function Gb() {
  return (
    ul ||
      ((ul = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), mt.__exportStar(ip(), e));
      })(Hi)),
    Hi
  );
}
var Ki = {},
  Kn = {},
  ll;
function Hb() {
  if (ll) return Kn;
  ((ll = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.realtime = void 0));
  const t = (0, fe().getCallBridge)(),
    r = (i, c, s) => t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s }),
    n = (i, c, s) => t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s }),
    a = (i, c, s) =>
      t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s, isGlobal: !0 }),
    o = (i, c, s) =>
      t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s, isGlobal: !0 });
  return ((Kn.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: o }), Kn);
}
var Wi = {},
  dl;
function Kb() {
  return (
    dl ||
      ((dl = 1),
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
      })(Wi)),
    Wi
  );
}
var fl;
function Wb() {
  return (
    fl ||
      ((fl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = Hb();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = Kb();
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
      })(Ki)),
    Ki
  );
}
var Ji = {},
  Wn = {},
  Yi = {},
  vl;
function Jb() {
  return (
    vl ||
      ((vl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const t = fe(),
          r = ye(),
          n = 30,
          a = (0, t.getCallBridge)();
        e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE =
          "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
        const o = (c) => {
            switch (c.type) {
              case "forge":
                return { agentName: c.agentName, agentKey: c.agentKey, prompt: c.prompt };
              case "atlassian":
                return { agentName: c.agentName, prompt: c.prompt };
              default:
                return { prompt: c.prompt };
            }
          },
          i = async (c) => {
            if (c.type === "forge") {
              if (c.agentName.length > n) throw new Error("rovo agent name too long");
              if (c.agentKey.length > n) throw new Error("rovo agent key too long");
            }
            const s = o(c);
            if ((await a("openRovo", s)) === !1)
              throw new r.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = i;
      })(Yi)),
    Yi
  );
}
var pl;
function Yb() {
  if (pl) return Wn;
  ((pl = 1), Object.defineProperty(Wn, "__esModule", { value: !0 }), (Wn.rovo = void 0));
  const e = Jb();
  return ((Wn.rovo = { open: e.open }), Wn);
}
var hl;
function Xb() {
  return (
    hl ||
      ((hl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), mt.__exportStar(Yb(), e));
      })(Ji)),
    Ji
  );
}
var qt = {},
  gl;
function Zb() {
  if (gl) return qt;
  ((gl = 1),
    Object.defineProperty(qt, "__esModule", { value: !0 }),
    (qt.createTranslationFunction = qt.getTranslations = qt.resetTranslationsCache = void 0));
  const e = ap(),
    t = wc(),
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
  qt.resetTranslationsCache = a;
  const o = async (c = null, s = { fallback: !0 }) => {
    let u = c;
    return (u || (u = (await t.view.getContext()).locale), await n.getTranslations(u, s));
  };
  qt.getTranslations = o;
  const i = async (c = null) => {
    let s = c;
    s || (s = (await t.view.getContext()).locale);
    const u = new e.Translator(s, n);
    return (
      await u.init(),
      (l, d) => {
        var p, v;
        return (v = (p = u.translate(l)) !== null && p !== void 0 ? p : d) !== null && v !== void 0
          ? v
          : l;
      }
    );
  };
  return ((qt.createTranslationFunction = i), qt);
}
var Xi = {},
  Zi = {},
  Qi = {},
  Jn = {},
  Yn = {},
  bl;
function fp() {
  return (
    bl ||
      ((bl = 1),
      Object.defineProperty(Yn, "__esModule", { value: !0 }),
      (Yn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Yn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Yn
  );
}
var _l;
function ai() {
  if (_l) return Jn;
  ((_l = 1),
    Object.defineProperty(Jn, "__esModule", { value: !0 }),
    (Jn.checkRestrictedEnvironment = void 0));
  const e = ye(),
    t = wc(),
    r = fp(),
    n = async () => {
      const { environmentType: a } = await t.view.getContext();
      if (a === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Jn.checkRestrictedEnvironment = n), Jn);
}
var ml;
function Qb() {
  return (
    ml ||
      ((ml = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = Ya(),
          r = ye(),
          n = ai(),
          o = (0, fe().getCallBridge)(),
          i = (l, d) => {
            const p = atob(l),
              v = new Array(p.length);
            for (let f = 0; f < p.length; f++) v[f] = p.charCodeAt(f);
            const g = new Uint8Array(v);
            return new Blob([g], { type: d || "application/octet-stream" });
          },
          c = async (l) => {
            const d = l.size,
              p = await l.arrayBuffer(),
              v = await crypto.subtle.digest("SHA-256", p),
              g = new Uint8Array(v),
              f = btoa(String.fromCharCode(...g));
            return { length: d, checksum: f, checksumType: "SHA256" };
          },
          s = async ({ functionKey: l, objects: d }) => {
            if (!l || l.length === 0)
              throw new r.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(d) || d.length === 0)
              throw new r.BridgeAPIError("objects array is required and must not be empty");
            const p = d.map((_, y) => {
                if (_ instanceof Blob) return _;
                if (!(_ && typeof _ == "object" && "data" in _ && typeof _.data == "string"))
                  throw new r.BridgeAPIError(
                    `Invalid object type at index ${y}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return i(_.data, _.mimeType);
                } catch {
                  throw new r.BridgeAPIError(
                    `Invalid base64 data at index ${y}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              v = await Promise.all(p.map((_) => c(_))),
              g = await (0, t.invoke)(l, { allObjectMetadata: v });
            if (!g || typeof g != "object")
              throw new r.BridgeAPIError("Invalid response from functionKey");
            const f = new Map(),
              h = new Map();
            return (
              p.forEach((_, y) => {
                const k = v[y];
                (f.set(k.checksum, _), h.set(k.checksum, y));
              }),
              Object.entries(g).map(([_, y]) => {
                const { key: k, checksum: w } = y,
                  S = f.get(w),
                  x = h.get(w);
                return x === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: k,
                        error: `Index not found for checksum ${w}`,
                      }),
                      index: -1,
                    }
                  : S
                    ? {
                        promise: (async () => {
                          try {
                            const j = await fetch(_, {
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
                          error: `Blob not found for checksum ${w}`,
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
          const p = await (0, e.createUploadPromises)({ functionKey: l, objects: d });
          return await Promise.all(p.map((g) => g.promise));
        };
        e.upload = u;
      })(Qi)),
    Qi
  );
}
var Xn = {},
  yl;
function e_() {
  if (yl) return Xn;
  ((yl = 1), Object.defineProperty(Xn, "__esModule", { value: !0 }), (Xn.deleteObjects = void 0));
  const e = Ya(),
    t = ye(),
    r = ai(),
    a = (0, fe().getCallBridge)(),
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
  return ((Xn.deleteObjects = o), Xn);
}
var Zn = {},
  wl;
function t_() {
  if (wl) return Zn;
  ((wl = 1), Object.defineProperty(Zn, "__esModule", { value: !0 }), (Zn.download = void 0));
  const e = Ya(),
    t = ye(),
    r = ai(),
    a = (0, fe().getCallBridge)(),
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
      const u = Object.entries(s).map(async ([d, p]) => {
        try {
          const v = await fetch(d, { method: "GET" });
          if (!v.ok)
            return {
              success: !1,
              key: p,
              status: v.status,
              error: `Download failed with status ${v.status}`,
            };
          const g = await v.blob();
          return { success: !0, key: p, blob: g, status: v.status };
        } catch (v) {
          return {
            success: !1,
            key: p,
            status: 503,
            error: v instanceof Error ? v.message : "Download failed",
          };
        }
      });
      return await Promise.all(u);
    };
  return ((Zn.download = o), Zn);
}
var Qn = {},
  kl;
function r_() {
  if (kl) return Qn;
  ((kl = 1), Object.defineProperty(Qn, "__esModule", { value: !0 }), (Qn.getMetadata = void 0));
  const e = Ya(),
    t = ye(),
    r = ai(),
    a = (0, fe().getCallBridge)(),
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
  return ((Qn.getMetadata = o), Qn);
}
var Ol;
function n_() {
  return (
    Ol ||
      ((Ol = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = Qb();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = e_(),
          n = t_(),
          a = r_();
        e.objectStore = {
          upload: t.upload,
          download: n.download,
          getMetadata: a.getMetadata,
          delete: r.deleteObjects,
        };
      })(Zi)),
    Zi
  );
}
var Sl;
function a_() {
  return (
    Sl ||
      ((Sl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = mt;
        (t.__exportStar(n_(), e), t.__exportStar(fp(), e));
      })(Xi)),
    Xi
  );
}
var es = {},
  ea = {},
  fr = {},
  Dr = {},
  co = {},
  El;
function o_() {
  if (El) return co;
  ((El = 1), Object.defineProperty(co, "__esModule", { value: !0 }));
  const e = ar();
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
  return ((co.default = t), co);
}
var Tr = {},
  ta = {},
  xl;
function i_() {
  if (xl) return ta;
  ((xl = 1),
    Object.defineProperty(ta, "__esModule", { value: !0 }),
    (ta._resolveDeltasResponse = void 0));
  const e = ar(),
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
  ta._resolveDeltasResponse = r;
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
  return ta;
}
var Cl;
function vp() {
  if (Cl) return Tr;
  Cl = 1;
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
        function d(g) {
          try {
            v(c.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(c.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? u(g.value) : s(g.value).then(d, p);
        }
        v((c = c.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(Tr, "__esModule", { value: !0 });
  const t = ar(),
    r = i_();
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
        var l, d, p, v, g, f;
        const h = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
        let b = {
          user: s,
          hash:
            (p =
              (d = (l = this._option) === null || l === void 0 ? void 0 : l.networkConfig) ===
                null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && p !== void 0
              ? p
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (h?.has_updates) {
          const _ =
            h?.hash_used !==
            ((f =
              (g = (v = this._option) === null || v === void 0 ? void 0 : v.networkConfig) ===
                null || g === void 0
                ? void 0
                : g.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: u && !_ ? h.time : 0,
            previousDerivedFields: "derived_fields" in h && u ? h.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: h.full_checksum,
            partialUserMatchSinceTime: _ ? 0 : h.time,
          });
        }
        return this._fetchEvaluations(o, h, b, c);
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
        const p = (0, r._resolveDeltasResponse)(i, d.body);
        return typeof p == "string"
          ? p
          : this._fetchEvaluations(
              o,
              i,
              Object.assign(Object.assign(Object.assign({}, c), p), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((Tr.default = n), Tr);
}
var ra = {},
  Rl;
function s_() {
  if (Rl) return ra;
  ((Rl = 1),
    Object.defineProperty(ra, "__esModule", { value: !0 }),
    (ra._makeParamStoreGetter = void 0));
  const e = ar(),
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
  function o(l, d, p) {
    return l.getFeatureGate(d.gate_name, r(p) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function i(l, d, p, v) {
    const f = l.getDynamicConfig(d.config_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function c(l, d, p, v) {
    const f = l.getExperiment(d.experiment_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function s(l, d, p, v) {
    const f = l.getLayer(d.layer_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function u(l, d, p) {
    return (v, g) => {
      if (d == null) return g;
      const f = d[v];
      if (f == null || (g != null && (0, e._typeOf)(g) !== f.param_type)) return g;
      switch (f.ref_type) {
        case "static":
          return a(f);
        case "gate":
          return o(l, f, p);
        case "dynamic_config":
          return i(l, f, g, p);
        case "experiment":
          return c(l, f, g, p);
        case "layer":
          return s(l, f, g, p);
        default:
          return g;
      }
    };
  }
  return ((ra._makeParamStoreGetter = u), ra);
}
var vr = {},
  Pl;
function c_() {
  if (Pl) return vr;
  Pl = 1;
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
        function d(g) {
          try {
            v(c.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(c.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? u(g.value) : s(g.value).then(d, p);
        }
        v((c = c.apply(a, o || [])).next());
      });
    };
  (Object.defineProperty(vr, "__esModule", { value: !0 }),
    (vr.StatsigEvaluationsDataAdapter = void 0));
  const t = ar(),
    r = vp();
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
  return ((vr.StatsigEvaluationsDataAdapter = n), vr);
}
var Al;
function u_() {
  if (Al) return Dr;
  Al = 1;
  var e =
    (Dr && Dr.__awaiter) ||
    function (c, s, u, l) {
      function d(p) {
        return p instanceof u
          ? p
          : new u(function (v) {
              v(p);
            });
      }
      return new (u || (u = Promise))(function (p, v) {
        function g(b) {
          try {
            h(l.next(b));
          } catch (_) {
            v(_);
          }
        }
        function f(b) {
          try {
            h(l.throw(b));
          } catch (_) {
            v(_);
          }
        }
        function h(b) {
          b.done ? p(b.value) : d(b.value).then(g, f);
        }
        h((l = l.apply(c, s || [])).next());
      });
    };
  Object.defineProperty(Dr, "__esModule", { value: !0 });
  const t = ar(),
    r = o_(),
    n = vp(),
    a = s_(),
    o = c_();
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
      var d, p;
      t.SDKType._setClientType(s, "javascript-client");
      const v = new n.default(l, (f) => {
        this.$emt(f);
      });
      (super(
        s,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new o.StatsigEvaluationsDataAdapter(),
        v,
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
        (this._network = v),
        (this._user = this._configureUser(u, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const g = (p = l?.plugins) !== null && p !== void 0 ? p : [];
      for (const f of g) f.bind(this);
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
        const p = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(p, l);
      }
    }
    _updateUserSyncImpl(s, u, l) {
      var d;
      const p = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
      const v = this.dataAdapter.getDataSync(this._user);
      (v == null && p.push("NoCachedValues"),
        this._store.setValues(v, this._user),
        this._finalizeUpdate(v));
      const g = u?.disableBackgroundCacheRefresh;
      return g === !0 || (g == null && v?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            p,
          )
        : (this._runPostUpdate(v ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            p,
          ));
    }
    updateUserAsync(s, u) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, u);
        } catch (d) {
          const p = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(p, l);
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
        let p = !1;
        (d != null &&
          (t.Diagnostics._markInitProcessStart(this._sdkKey),
          (p = this._store.setValues(d, this._user)),
          t.Diagnostics._markInitProcessEnd(this._sdkKey, { success: p })),
          this._finalizeUpdate(d),
          p ||
            (this._errorBoundary.attachErrorIfNoneExists(
              t.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          t.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            p,
            this._store.getCurrentSourceDetails(),
          ));
        const v = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          p,
          this._store.getSource(),
          v,
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
        p = (l = d.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      return (p && t.StableID.setOverride(p, this._sdkKey), d);
    }
    _getFeatureGateImpl(s, u) {
      var l, d;
      const { result: p, details: v } = this._store.getGate(s),
        g = (0, t._makeFeatureGate)(s, v, p),
        f =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, g, this._user, u),
        h = f ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, h, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "gate_evaluation", gate: h }),
        h
      );
    }
    _getDynamicConfigImpl(s, u) {
      var l, d;
      const { result: p, details: v } = this._store.getConfig(s),
        g = (0, t._makeDynamicConfig)(s, v, p),
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, g, this._user, u),
        h = f ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, h, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: h }),
        h
      );
    }
    _getExperimentImpl(s, u) {
      var l, d, p, v;
      const { result: g, details: f } = this._store.getConfig(s),
        h = (0, t._makeExperiment)(s, f, g);
      h.__evaluation != null &&
        (h.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = h.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const b =
          (v =
            (p = this.overrideAdapter) === null || p === void 0
              ? void 0
              : p.getExperimentOverride) === null || v === void 0
            ? void 0
            : v.call(p, h, this._user, u),
        _ = b ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, _, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: _ }),
        _
      );
    }
    _getLayerImpl(s, u) {
      var l, d, p;
      const { result: v, details: g } = this._store.getLayer(s),
        f = (0, t._makeLayer)(s, g, v),
        h =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, f, this._user, u);
      u?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const b = (0, t._mergeOverride)(
        f,
        h,
        (p = h?.__value) !== null && p !== void 0 ? p : f.__value,
        (_) => {
          u?.disableExposureLog ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                _,
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
      const { result: p, details: v } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const g = {
          name: s,
          details: v,
          __configuration: p,
          get: (0, a._makeParamStoreGetter)(this, p, u),
        },
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, g, u);
      return (
        f != null &&
          ((g.__configuration = f.config),
          (g.details = f.details),
          (g.get = (0, a._makeParamStoreGetter)(this, f.config, u))),
        g
      );
    }
  }
  return ((Dr.default = i), Dr);
}
var Il;
function l_() {
  return (
    Il ||
      ((Il = 1),
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
        const n = ar(),
          a = u_();
        ((e.StatsigClient = a.default), r(ar(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(fr)),
    fr
  );
}
var na = {},
  aa = {},
  jl;
function d_() {
  if (jl) return aa;
  ((jl = 1),
    Object.defineProperty(aa, "__esModule", { value: !0 }),
    (aa.initFeatureFlags = void 0));
  const e = fe(),
    t = ye(),
    r = ti(),
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
    (aa.initFeatureFlags = (0, r.withRateLimiter)(
      c,
      n,
      a,
      `Feature flags initialisation calls are rate limited at ${n}req/${a / 1e3}s`,
    )),
    aa
  );
}
var Dl;
function f_() {
  if (Dl) return na;
  ((Dl = 1),
    Object.defineProperty(na, "__esModule", { value: !0 }),
    (na.ForgeDataAdapter = void 0));
  const e = d_();
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
  return ((na.ForgeDataAdapter = t), na);
}
var ts = {},
  Tl;
function pp() {
  return (
    Tl ||
      ((Tl = 1),
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
      })(ts)),
    ts
  );
}
var oa = {},
  Ml;
function v_() {
  if (Ml) return oa;
  ((Ml = 1),
    Object.defineProperty(oa, "__esModule", { value: !0 }),
    (oa.trackFeatureFlagEvent = void 0));
  const e = fe(),
    t = ye(),
    r = pp(),
    n = ti(),
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
    (oa.trackFeatureFlagEvent = (0, n.withRateLimiter)(
      s,
      a,
      o,
      `Feature flags calls are rate limited at ${a}req/${o / 1e3}s`,
    )),
    oa
  );
}
var Ll;
function p_() {
  if (Ll) return ea;
  ((Ll = 1),
    Object.defineProperty(ea, "__esModule", { value: !0 }),
    (ea.ForgeFeatureFlags = void 0));
  const e = l_(),
    t = f_(),
    r = pp(),
    n = v_();
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
  return ((ea.ForgeFeatureFlags = a), ea);
}
var Nl;
function h_() {
  return (
    Nl ||
      ((Nl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = p_();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })(es)),
    es
  );
}
var Bl;
function g_() {
  return (
    Bl ||
      ((Bl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = mt;
        var r = nb();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Ya(), e),
          t.__exportStar(sb(), e),
          t.__exportStar(wc(), e),
          t.__exportStar(Bb(), e),
          t.__exportStar(qb(), e),
          t.__exportStar(zb(), e),
          t.__exportStar(Vb(), e),
          t.__exportStar(Gb(), e),
          t.__exportStar(Wb(), e),
          t.__exportStar(Xb(), e),
          (e.i18n = t.__importStar(Zb())),
          t.__exportStar(a_(), e),
          t.__exportStar(h_(), e));
      })(Ii)),
    Ii
  );
}
var Ba = g_();
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
var b_ = {};
function oi() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : b_;
}
var hp = Object.assign,
  Mo = Object.getOwnPropertyDescriptor,
  Rt = Object.defineProperty,
  ii = Object.prototype,
  zs = [];
Object.freeze(zs);
var gp = {};
Object.freeze(gp);
var __ = typeof Proxy < "u",
  m_ = Object.toString();
function bp() {
  __ || W("Proxy not available");
}
function _p(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Gr = function () {};
function gt(e) {
  return typeof e == "function";
}
function mr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function si(e) {
  return e !== null && typeof e == "object";
}
function or(e) {
  if (!si(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === m_;
}
function mp(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function ci(e, t, r) {
  Rt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function yp(e, t, r) {
  Rt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function xr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return si(n) && n[r] === !0;
    }
  );
}
function an(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function y_(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Vt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var wp = typeof Object.getOwnPropertySymbols < "u";
function w_(e) {
  var t = Object.keys(e);
  if (!wp) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return ii.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var ui =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : wp
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function kp(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Kt(e, t) {
  return ii.hasOwnProperty.call(e, t);
}
var k_ =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      ui(t).forEach(function (n) {
        r[n] = Mo(t, n);
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
function Fl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function O_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, E_(n.key), n));
  }
}
function on(e, t, r) {
  return (t && O_(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Hr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = x_(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yr() {
  return (
    (yr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    yr.apply(null, arguments)
  );
}
function Op(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), $s(e, t));
}
function $s(e, t) {
  return (
    ($s = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    $s(e, t)
  );
}
function S_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function E_(e) {
  var t = S_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function x_(e, t) {
  if (e) {
    if (typeof e == "string") return Fl(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Fl(e, t)
          : void 0
    );
  }
}
var Ct = Symbol("mobx-stored-annotations");
function Pt(e) {
  function t(r, n) {
    if (Za(n)) return e.decorate_20223_(r, n);
    Xa(r, n, e);
  }
  return Object.assign(t, e);
}
function Xa(e, t, r) {
  (Kt(e, Ct) || ci(e, Ct, yr({}, e[Ct])), D_(r) || (e[Ct][t] = r));
}
function C_(e) {
  return (Kt(e, Ct) || ci(e, Ct, yr({}, e[Ct])), e[Ct]);
}
function Za(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var N = Symbol("mobx administration"),
  sr = (function () {
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
        return Fp(this);
      }),
      (t.reportChanged = function () {
        (at(), qp(this), ot());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      on(e, [
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
sr.isBeingObservedMask_ = 1;
sr.isPendingUnobservationMask_ = 2;
sr.diffValueMask_ = 4;
var kc = xr("Atom", sr);
function Sp(e, t, r) {
  (t === void 0 && (t = Gr), r === void 0 && (r = Gr));
  var n = new sr(e);
  return (t !== Gr && Bm(n, t), r !== Gr && Gp(n, r), n);
}
function R_(e, t) {
  return ah(e, t);
}
function P_(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Lo = { structural: R_, default: P_ };
function wr(e, t, r) {
  return Jp(e)
    ? e
    : Array.isArray(e)
      ? ae.array(e, { name: r })
      : or(e)
        ? ae.object(e, void 0, { name: r })
        : an(e)
          ? ae.map(e, { name: r })
          : Vt(e)
            ? ae.set(e, { name: r })
            : typeof e == "function" && !Yr(e) && !qa(e)
              ? mp(e)
                ? Xr(e)
                : Fa(r, e)
              : e;
}
function A_(e, t, r) {
  if (e == null || bi(e) || gi(e) || Rr(e) || xt(e)) return e;
  if (Array.isArray(e)) return ae.array(e, { name: r, deep: !1 });
  if (or(e)) return ae.object(e, void 0, { name: r, deep: !1 });
  if (an(e)) return ae.map(e, { name: r, deep: !1 });
  if (Vt(e)) return ae.set(e, { name: r, deep: !1 });
}
function li(e) {
  return e;
}
function I_(e, t) {
  return ah(e, t) ? t : e;
}
var j_ = "override";
function D_(e) {
  return e.annotationType_ === j_;
}
function Qa(e, t) {
  return { annotationType_: e, options_: t, make_: T_, extend_: M_, decorate_20223_: L_ };
}
function T_(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Yr(r.value)) return 1;
  var o = Ep(e, this, t, r, !1);
  return (Rt(n, t, o), 2);
}
function M_(e, t, r, n) {
  var a = Ep(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function L_(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    o = this,
    i = function (u) {
      var l, d, p, v;
      return kr(
        (l = (d = o.options_) == null ? void 0 : d.name) != null ? l : n.toString(),
        u,
        (p = (v = o.options_) == null ? void 0 : v.autoAction) != null ? p : !1,
      );
    };
  if (r == "field")
    return function (s) {
      var u,
        l = s;
      return (
        Yr(l) || (l = i(l)),
        (u = o.options_) != null && u.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var c;
    return (
      Yr(e) || (e = i(e)),
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
function N_(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Ep(e, t, r, n, a) {
  var o, i, c, s, u, l, d;
  (a === void 0 && (a = I.safeDescriptors), N_(e, t, r, n));
  var p = n.value;
  if ((o = t.options_) != null && o.bound) {
    var v;
    p = p.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return {
    value: kr(
      (i = (c = t.options_) == null ? void 0 : c.name) != null ? i : r.toString(),
      p,
      (s = (u = t.options_) == null ? void 0 : u.autoAction) != null ? s : !1,
      (l = t.options_) != null && l.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: a ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !a,
  };
}
function xp(e, t) {
  return { annotationType_: e, options_: t, make_: B_, extend_: F_, decorate_20223_: q_ };
}
function B_(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Kt(e.target_, t) || !qa(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (qa(r.value)) return 1;
  var o = Cp(e, this, t, r, !1, !1);
  return (Rt(n, t, o), 2);
}
function F_(e, t, r, n) {
  var a,
    o = Cp(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, o, n);
}
function q_(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    qa(e) || (e = Xr(e)),
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
function U_(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Cp(e, t, r, n, a, o) {
  (o === void 0 && (o = I.safeDescriptors), U_(e, t, r, n));
  var i = n.value;
  if ((qa(i) || (i = Xr(i)), a)) {
    var c;
    ((i = i.bind((c = e.proxy_) != null ? c : e.target_)), (i.isMobXFlow = !0));
  }
  return { value: i, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function Oc(e, t) {
  return { annotationType_: e, options_: t, make_: z_, extend_: $_, decorate_20223_: V_ };
}
function z_(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function $_(e, t, r, n) {
  return (
    G_(e, this, t, r),
    e.defineComputedProperty_(t, yr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function V_(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var o = sn(this)[N],
        i = yr({}, r.options_, { get: e, context: this });
      (i.name || (i.name = "ObservableObject." + n.toString()), o.values_.set(n, new bt(i)));
    }),
    function () {
      return this[N].getObservablePropValue_(n);
    }
  );
}
function G_(e, t, r, n) {
  (t.annotationType_, n.get);
}
function di(e, t) {
  return { annotationType_: e, options_: t, make_: H_, extend_: K_, decorate_20223_: W_ };
}
function H_(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function K_(e, t, r, n) {
  var a, o;
  return (
    J_(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (o = this.options_) == null ? void 0 : o.enhancer) != null ? a : wr,
      n,
    )
  );
}
function W_(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    o = new WeakSet();
  function i(c, s) {
    var u,
      l,
      d = sn(c)[N],
      p = new br(
        s,
        (u = (l = r.options_) == null ? void 0 : l.enhancer) != null ? u : wr,
        "ObservableObject." + a.toString(),
        !1,
      );
    (d.values_.set(a, p), o.add(c));
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
function J_(e, t, r, n) {
  t.annotationType_;
}
var Y_ = "true",
  X_ = Rp();
function Rp(e) {
  return { annotationType_: Y_, options_: e, make_: Z_, extend_: Q_, decorate_20223_: em };
}
function Z_(e, t, r, n) {
  var a, o;
  if (r.get) return fi.make_(e, t, r, n);
  if (r.set) {
    var i = Yr(r.set) ? r.set : kr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: I.safeDescriptors ? e.isPlainObject_ : !0,
          set: i,
        }) === null
        ? 0
        : 2
      : (Rt(n, t, { configurable: !0, set: i }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var c;
    if (mp(r.value)) {
      var s,
        u = (s = this.options_) != null && s.autoBind ? Xr.bound : Xr;
      return u.make_(e, t, r, n);
    }
    var l = (c = this.options_) != null && c.autoBind ? Fa.bound : Fa;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? ae.ref : ae;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var p;
    r.value = r.value.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return d.make_(e, t, r, n);
}
function Q_(e, t, r, n) {
  var a, o;
  if (r.get) return fi.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: I.safeDescriptors ? e.isPlainObject_ : !0, set: kr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var i;
    r.value = r.value.bind((i = e.proxy_) != null ? i : e.target_);
  }
  var c = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? ae.ref : ae;
  return c.extend_(e, t, r, n);
}
function em(e, t) {
  W("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var tm = "observable",
  rm = "observable.ref",
  nm = "observable.shallow",
  am = "observable.struct",
  Pp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Pp);
function uo(e) {
  return e || Pp;
}
var Vs = di(tm),
  om = di(rm, { enhancer: li }),
  im = di(nm, { enhancer: A_ }),
  sm = di(am, { enhancer: I_ }),
  Ap = Pt(Vs);
function lo(e) {
  return e.deep === !0 ? wr : e.deep === !1 ? li : um(e.defaultDecorator);
}
function cm(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Rp(e)) : void 0;
}
function um(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : wr;
}
function Ip(e, t, r) {
  if (Za(t)) return Vs.decorate_20223_(e, t);
  if (mr(t)) {
    Xa(e, t, Vs);
    return;
  }
  return Jp(e)
    ? e
    : or(e)
      ? ae.object(e, t, r)
      : Array.isArray(e)
        ? ae.array(e, t)
        : an(e)
          ? ae.map(e, t)
          : Vt(e)
            ? ae.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : ae.box(e, t);
}
hp(Ip, Ap);
var lm = {
    box: function (t, r) {
      var n = uo(r);
      return new br(t, lo(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = uo(r);
      return (I.useProxies === !1 || n.proxy === !1 ? cy : Zm)(t, lo(n), n.name);
    },
    map: function (t, r) {
      var n = uo(r);
      return new Zp(t, lo(n), n.name);
    },
    set: function (t, r) {
      var n = uo(r);
      return new Qp(t, lo(n), n.name);
    },
    object: function (t, r, n) {
      return Pr(function () {
        return zm(I.useProxies === !1 || n?.proxy === !1 ? sn({}, n) : Jm({}, n), t, r);
      });
    },
    ref: Pt(om),
    shallow: Pt(im),
    deep: Ap,
    struct: Pt(sm),
  },
  ae = hp(Ip, lm),
  jp = "computed",
  dm = "computed.struct",
  Gs = Oc(jp),
  fm = Oc(dm, { equals: Lo.structural }),
  fi = function (t, r) {
    if (Za(r)) return Gs.decorate_20223_(t, r);
    if (mr(r)) return Xa(t, r, Gs);
    if (or(t)) return Pt(Oc(jp, t));
    var n = or(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new bt(n));
  };
Object.assign(fi, Gs);
fi.struct = Pt(fm);
var ql,
  Ul,
  No = 0,
  vm = 1,
  pm =
    (ql = (Ul = Mo(function () {}, "name")) == null ? void 0 : Ul.configurable) != null ? ql : !1,
  zl = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function kr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return hm(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    pm && ((zl.value = e), Rt(a, "name", zl)),
    a
  );
}
function hm(e, t, r, n, a) {
  var o = gm(e, t);
  try {
    return r.apply(n, a);
  } catch (i) {
    throw ((o.error_ = i), i);
  } finally {
    bm(o);
  }
}
function gm(e, t, r, n) {
  var a = !1,
    o = 0,
    i = I.trackingDerivation,
    c = !t || !i;
  at();
  var s = I.allowStateChanges;
  c && (Cr(), (s = vi(!0)));
  var u = Sc(!0),
    l = {
      runAsAction_: c,
      prevDerivation_: i,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: u,
      notifySpy_: a,
      startTime_: o,
      actionId_: vm++,
      parentActionId_: No,
    };
  return ((No = l.actionId_), l);
}
function bm(e) {
  (No !== e.actionId_ && W(30),
    (No = e.parentActionId_),
    e.error_ !== void 0 && (I.suppressReactionErrors = !0),
    pi(e.prevAllowStateChanges_),
    Aa(e.prevAllowStateReads_),
    ot(),
    e.runAsAction_ && Wt(e.prevDerivation_),
    (I.suppressReactionErrors = !1));
}
function _m(e, t) {
  var r = vi(e);
  try {
    return t();
  } finally {
    pi(r);
  }
}
function vi(e) {
  var t = I.allowStateChanges;
  return ((I.allowStateChanges = e), t);
}
function pi(e) {
  I.allowStateChanges = e;
}
var br = (function (e) {
    function t(n, a, o, i, c) {
      var s;
      return (
        o === void 0 && (o = "ObservableValue"),
        c === void 0 && (c = Lo.default),
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
    Op(t, e);
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
          var o = nt(this, { object: this, type: At, newValue: a });
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
          pt(this) && ht(this, { type: At, object: this, newValue: a, oldValue: o }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (a) {
        return eo(this, a);
      }),
      (r.observe_ = function (a, o) {
        return (
          o &&
            a({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: At,
              newValue: this.value_,
              oldValue: void 0,
            }),
          to(this, a)
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
        return kp(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(sr),
  bt = (function () {
    function e(r) {
      ((this.dependenciesState_ = Y.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = Y.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new Fo(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Bo.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || W(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = kr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? Lo.structural : Lo.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        Om(this);
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
          Hs(this) &&
            (this.warnAboutUntrackedRead_(), at(), (this.value_ = this.computeValue_(!1)), ot());
        else if ((Fp(this), Hs(this))) {
          var n = I.trackingContext;
          (this.keepAlive_ && !n && (I.trackingContext = this),
            this.trackAndCompute() && km(this),
            (I.trackingContext = n));
        }
        var a = this.value_;
        if (So(a)) throw a.cause;
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
          i = a || So(n) || So(o) || !this.equals_(n, o);
        return (i && (this.value_ = o), i);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = vi(!1),
          o;
        if (n) o = Dp(this, this.derivation, this.scope_);
        else if (I.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (i) {
            o = new Fo(i);
          }
        return (pi(a), (this.isComputing = !1), o);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Ks(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var o = this,
          i = !0,
          c = void 0;
        return Dm(function () {
          var s = o.get();
          if (!i || a) {
            var u = Cr();
            (n({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: At,
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
        return kp(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      on(e, [
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
bt.isComputingMask_ = 1;
bt.isRunningSetterMask_ = 2;
bt.isBeingObservedMask_ = 4;
bt.isPendingUnobservationMask_ = 8;
bt.diffValueMask_ = 16;
var hi = xr("ComputedValue", bt),
  Y;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(Y || (Y = {}));
var Bo;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(Bo || (Bo = {}));
var Fo = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function So(e) {
  return e instanceof Fo;
}
function Hs(e) {
  switch (e.dependenciesState_) {
    case Y.UP_TO_DATE_:
      return !1;
    case Y.NOT_TRACKING_:
    case Y.STALE_:
      return !0;
    case Y.POSSIBLY_STALE_: {
      for (var t = Sc(!0), r = Cr(), n = e.observing_, a = n.length, o = 0; o < a; o++) {
        var i = n[o];
        if (hi(i)) {
          if (I.disableErrorBoundaries) i.get();
          else
            try {
              i.get();
            } catch {
              return (Wt(r), Aa(t), !0);
            }
          if (e.dependenciesState_ === Y.STALE_) return (Wt(r), Aa(t), !0);
        }
      }
      return (Mp(e), Wt(r), Aa(t), !1);
    }
  }
}
function Dp(e, t, r) {
  var n = Sc(!0);
  (Mp(e),
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
      o = new Fo(i);
    }
  return (I.inBatch--, (I.trackingDerivation = a), mm(e), Aa(n), o);
}
function mm(e) {
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
    (s.diffValue === 0 && Np(s, e), (s.diffValue = 0));
  }
  for (; a--; ) {
    var u = r[a];
    u.diffValue === 1 && ((u.diffValue = 0), wm(u, e));
  }
  n !== Y.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function Ks(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Np(t[r], e);
  e.dependenciesState_ = Y.NOT_TRACKING_;
}
function Tp(e) {
  var t = Cr();
  try {
    return e();
  } finally {
    Wt(t);
  }
}
function Cr() {
  var e = I.trackingDerivation;
  return ((I.trackingDerivation = null), e);
}
function Wt(e) {
  I.trackingDerivation = e;
}
function Sc(e) {
  var t = I.allowStateReads;
  return ((I.allowStateReads = e), t);
}
function Aa(e) {
  I.allowStateReads = e;
}
function Mp(e) {
  if (e.dependenciesState_ !== Y.UP_TO_DATE_) {
    e.dependenciesState_ = Y.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = Y.UP_TO_DATE_;
  }
}
var Eo = function () {
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
  xo = !0,
  Lp = !1,
  I = (function () {
    var e = oi();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (xo = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new Eo().version && (xo = !1),
      xo
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Eo()))
        : (setTimeout(function () {
            Lp || W(35);
          }, 1),
          new Eo())
    );
  })();
function ym() {
  if (((I.pendingReactions.length || I.inBatch || I.isRunningReactions) && W(36), (Lp = !0), xo)) {
    var e = oi();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (I = new Eo()));
  }
}
function wm(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Np(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Bp(e));
}
function Bp(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), I.pendingUnobservations.push(e));
}
function at() {
  I.inBatch++;
}
function ot() {
  if (--I.inBatch === 0) {
    Up();
    for (var e = I.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof bt && r.suspend_()));
    }
    I.pendingUnobservations = [];
  }
}
function Fp(e) {
  var t = I.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && I.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && I.inBatch > 0 && Bp(e), !1);
}
function qp(e) {
  e.lowestObserverState_ !== Y.STALE_ &&
    ((e.lowestObserverState_ = Y.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === Y.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = Y.STALE_));
    }));
}
function km(e) {
  e.lowestObserverState_ !== Y.STALE_ &&
    ((e.lowestObserverState_ = Y.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Y.POSSIBLY_STALE_
        ? (t.dependenciesState_ = Y.STALE_)
        : t.dependenciesState_ === Y.UP_TO_DATE_ && (e.lowestObserverState_ = Y.UP_TO_DATE_);
    }));
}
function Om(e) {
  e.lowestObserverState_ === Y.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = Y.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Y.UP_TO_DATE_ &&
        ((t.dependenciesState_ = Y.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var Tt = (function () {
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
      (this.isTracing_ = Bo.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), I.pendingReactions.push(this), Up());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (at(), (this.isScheduled = !1));
        var n = I.trackingContext;
        if (((I.trackingContext = this), Hs(this))) {
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
        var o = Dp(this, n, void 0);
        ((I.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Ks(this),
          So(o) && this.reportExceptionInDerivation_(o.cause),
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (at(), Ks(this), ot()));
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
    on(e, [
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
Tt.isDisposedMask_ = 1;
Tt.isScheduledMask_ = 2;
Tt.isTrackPendingMask_ = 4;
Tt.isRunningMask_ = 8;
Tt.diffValueMask_ = 16;
var Sm = 100,
  Ws = function (t) {
    return t();
  };
function Up() {
  I.inBatch > 0 || I.isRunningReactions || Ws(Em);
}
function Em() {
  I.isRunningReactions = !0;
  for (var e = I.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Sm && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  I.isRunningReactions = !1;
}
var qo = xr("Reaction", Tt);
function xm(e) {
  var t = Ws;
  Ws = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function Ia() {
  return !1;
}
function Cm(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var zp = "action",
  Rm = "action.bound",
  $p = "autoAction",
  Pm = "autoAction.bound",
  Am = "<unnamed action>",
  Js = Qa(zp),
  Im = Qa(Rm, { bound: !0 }),
  Ys = Qa($p, { autoAction: !0 }),
  jm = Qa(Pm, { autoAction: !0, bound: !0 });
function Vp(e) {
  var t = function (n, a) {
    if (gt(n)) return kr(n.name || Am, n, e);
    if (gt(a)) return kr(n, a, e);
    if (Za(a)) return (e ? Ys : Js).decorate_20223_(n, a);
    if (mr(a)) return Xa(n, a, e ? Ys : Js);
    if (mr(n)) return Pt(Qa(e ? $p : zp, { name: n, autoAction: e }));
  };
  return t;
}
var it = Vp(!1);
Object.assign(it, Js);
var Fa = Vp(!0);
Object.assign(Fa, Ys);
it.bound = Pt(Im);
Fa.bound = Pt(jm);
function Yr(e) {
  return gt(e) && e.isMobxAction === !0;
}
function Dm(e, t) {
  var r, n, a, o;
  t === void 0 && (t = gp);
  var i = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    c = !t.scheduler && !t.delay,
    s;
  if (c)
    s = new Tt(
      i,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var u = Mm(t),
      l = !1;
    s = new Tt(
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
var Tm = function (t) {
  return t();
};
function Mm(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Tm;
}
var Lm = "onBO",
  Nm = "onBUO";
function Bm(e, t, r) {
  return Hp(Lm, e, t, r);
}
function Gp(e, t, r) {
  return Hp(Nm, e, t, r);
}
function Hp(e, t, r, n) {
  var a = $o(t),
    o = gt(n) ? n : r,
    i = e + "L";
  return (
    a[i] ? a[i].add(o) : (a[i] = new Set([o])),
    function () {
      var c = a[i];
      c && (c.delete(o), c.size === 0 && delete a[i]);
    }
  );
}
var Fm = "never",
  fo = "always",
  qm = "observed";
function Um(e) {
  e.isolateGlobalState === !0 && ym();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (I.useProxies = t === fo ? !0 : t === Fm ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (I.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === fo ? fo : r === qm;
    ((I.enforceActions = n), (I.allowStateChanges = !(n === !0 || n === fo)));
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
    e.reactionScheduler && xm(e.reactionScheduler));
}
function zm(e, t, r, n) {
  var a = k_(t);
  return (
    Pr(function () {
      var o = sn(e, n)[N];
      ui(a).forEach(function (i) {
        o.extend_(i, a[i], r && i in r ? r[i] : !0);
      });
    }),
    e
  );
}
function $m(e, t) {
  return Kp($o(e, t));
}
function Kp(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = Vm(e.observing_).map(Kp)),
    t
  );
}
function Vm(e) {
  return Array.from(new Set(e));
}
var Gm = 0;
function Wp() {
  this.message = "FLOW_CANCELLED";
}
Wp.prototype = Object.create(Error.prototype);
var rs = xp("flow"),
  Hm = xp("flow.bound", { bound: !0 }),
  Xr = Object.assign(function (t, r) {
    if (Za(r)) return rs.decorate_20223_(t, r);
    if (mr(r)) return Xa(t, r, rs);
    var n = t,
      a = n.name || "<unnamed flow>",
      o = function () {
        var c = this,
          s = arguments,
          u = ++Gm,
          l = it(a + " - runid: " + u + " - init", n).apply(c, s),
          d,
          p = void 0,
          v = new Promise(function (g, f) {
            var h = 0;
            d = f;
            function b(k) {
              p = void 0;
              var w;
              try {
                w = it(a + " - runid: " + u + " - yield " + h++, l.next).call(l, k);
              } catch (S) {
                return f(S);
              }
              y(w);
            }
            function _(k) {
              p = void 0;
              var w;
              try {
                w = it(a + " - runid: " + u + " - yield " + h++, l.throw).call(l, k);
              } catch (S) {
                return f(S);
              }
              y(w);
            }
            function y(k) {
              if (gt(k?.then)) {
                k.then(y, f);
                return;
              }
              return k.done ? g(k.value) : ((p = Promise.resolve(k.value)), p.then(b, _));
            }
            b(void 0);
          });
        return (
          (v.cancel = it(a + " - runid: " + u + " - cancel", function () {
            try {
              p && $l(p);
              var g = l.return(void 0),
                f = Promise.resolve(g.value);
              (f.then(Gr, Gr), $l(f), d(new Wp()));
            } catch (h) {
              d(h);
            }
          })),
          v
        );
      };
    return ((o.isMobXFlow = !0), o);
  }, rs);
Xr.bound = Pt(Hm);
function $l(e) {
  gt(e.cancel) && e.cancel();
}
function qa(e) {
  return e?.isMobXFlow === !0;
}
function Km(e, t) {
  return e ? bi(e) || !!e[N] || kc(e) || qo(e) || hi(e) : !1;
}
function Jp(e) {
  return Km(e);
}
function Gt(e, t) {
  (t === void 0 && (t = void 0), at());
  try {
    return e.apply(t);
  } finally {
    ot();
  }
}
function Mr(e) {
  return e[N];
}
var Wm = {
  has: function (t, r) {
    return Mr(t).has_(r);
  },
  get: function (t, r) {
    return Mr(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return mr(r) ? ((a = Mr(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return mr(r) ? ((n = Mr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = Mr(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return Mr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    W(13);
  },
};
function Jm(e, t) {
  var r, n;
  return (
    bp(),
    (e = sn(e, t)),
    (n = (r = e[N]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, Wm))
  );
}
function rt(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function eo(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    _p(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function nt(e, t) {
  var r = Cr();
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
function pt(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function to(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    _p(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function ht(e, t) {
  var r = Cr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, o = n.length; a < o; a++) n[a](t);
    Wt(r);
  }
}
function Yp(e, t, r) {
  return (
    Pr(function () {
      var n,
        a = sn(e, r)[N];
      ((n = t) != null || (t = C_(e)),
        ui(t).forEach(function (o) {
          return a.make_(o, t[o]);
        }));
    }),
    e
  );
}
var Vl = "splice",
  At = "update",
  Ym = 1e4,
  Xm = {
    get: function (t, r) {
      var n = t[N];
      return r === N
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Kt(Uo, r)
              ? Uo[r]
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
  Ec = (function () {
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
        (this.atom_ = new sr(r)),
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
        return eo(this, n);
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
          to(this, n)
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
          this.legacyMode_ && a > 0 && nh(n + a + 1));
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
          o === void 0 && (o = zs),
          rt(this))
        ) {
          var s = nt(this, { object: this.proxy_, type: Vl, index: n, removedCount: a, added: o });
          if (!s) return zs;
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
        if (o.length < Ym) {
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
        var i = !this.owned_ && Ia(),
          c = pt(this),
          s =
            c || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: At,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: a,
                  oldValue: o,
                }
              : null;
        (this.atom_.reportChanged(), c && ht(this, s));
      }),
      (t.notifyArraySplice_ = function (n, a, o) {
        var i = !this.owned_ && Ia(),
          c = pt(this),
          s =
            c || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Vl,
                  index: n,
                  removed: o,
                  added: a,
                  removedCount: o.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), c && ht(this, s));
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
            var c = nt(this, { type: At, object: this.proxy_, index: n, newValue: a });
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
function Zm(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    bp(),
    Pr(function () {
      var a = new Ec(r, t, n, !1);
      yp(a.values_, N, a);
      var o = new Proxy(a.values_, Xm);
      return ((a.proxy_ = o), e && e.length && a.spliceWithArray_(0, 0, e), o);
    })
  );
}
var Uo = {
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
se("every", yt);
se("filter", yt);
se("find", yt);
se("findIndex", yt);
se("findLast", yt);
se("findLastIndex", yt);
se("flatMap", yt);
se("forEach", yt);
se("map", yt);
se("some", yt);
se("toReversed", yt);
se("reduce", Xp);
se("reduceRight", Xp);
function se(e, t) {
  typeof Array.prototype[e] == "function" && (Uo[e] = t(e));
}
function Je(e) {
  return function () {
    var t = this[N];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function yt(e) {
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
function Xp(e) {
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
var Qm = xr("ObservableArrayAdministration", Ec);
function gi(e) {
  return si(e) && Qm(e[N]);
}
var ey = {},
  rr = "add",
  zo = "delete",
  Zp = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = wr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[N] = ey),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        gt(Map) || W(18),
        Pr(function () {
          ((o.keysAtom_ = Sp("ObservableMap.keys()")),
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
          var i = (o = new br(this.has_(n), li, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, i),
            Gp(i, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return o.get();
      }),
      (t.set = function (n, a) {
        var o = this.has_(n);
        if (rt(this)) {
          var i = nt(this, { type: o ? At : rr, object: this, newValue: a, name: n });
          if (!i) return this;
          a = i.newValue;
        }
        return (o ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, rt(this))) {
          var o = nt(this, { type: zo, object: this, name: n });
          if (!o) return !1;
        }
        if (this.has_(n)) {
          var i = Ia(),
            c = pt(this),
            s =
              c || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: zo,
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
            c && ht(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var o = this.data_.get(n);
        if (((a = o.prepareNewValue_(a)), a !== I.UNCHANGED)) {
          var i = Ia(),
            c = pt(this),
            s =
              c || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: At,
                    object: this,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), c && ht(this, s));
        }
      }),
      (t.addValue_ = function (n, a) {
        var o = this;
        (this.keysAtom_,
          Gt(function () {
            var u,
              l = new br(a, o.enhancer_, "ObservableMap.key", !1);
            (o.data_.set(n, l),
              (a = l.value_),
              (u = o.hasMap_.get(n)) == null || u.setNewValue_(!0),
              o.keysAtom_.reportChanged());
          }));
        var i = Ia(),
          c = pt(this),
          s =
            c || i
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: rr,
                  object: this,
                  name: n,
                  newValue: a,
                }
              : null;
        c && ht(this, s);
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
        return Gl({
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
        return Gl({
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
        for (var o = Hr(this), i; !(i = o()).done; ) {
          var c = i.value,
            s = c[0],
            u = c[1];
          n.call(a, u, s, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          Rr(n) && (n = new Map(n)),
          Gt(function () {
            or(n)
              ? w_(n).forEach(function (o) {
                  return a.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var i = o[0],
                      c = o[1];
                    return a.set(i, c);
                  })
                : an(n)
                  ? (y_(n) || W(19, n),
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
          Tp(function () {
            for (var a = Hr(n.keys()), o; !(o = a()).done; ) {
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
              var o = ty(n), i = new Map(), c = !1, s = Hr(a.data_.keys()), u;
              !(u = s()).done;

            ) {
              var l = u.value;
              if (!o.has(l)) {
                var d = a.delete(l);
                if (d) c = !0;
                else {
                  var p = a.data_.get(l);
                  i.set(l, p);
                }
              }
            }
            for (var v = Hr(o.entries()), g; !(g = v()).done; ) {
              var f = g.value,
                h = f[0],
                b = f[1],
                _ = a.data_.has(h);
              if ((a.set(h, b), a.data_.has(h))) {
                var y = a.data_.get(h);
                (i.set(h, y), _ || (c = !0));
              }
            }
            if (!c)
              if (a.data_.size !== i.size) a.keysAtom_.reportChanged();
              else
                for (var k = a.data_.keys(), w = i.keys(), S = k.next(), x = w.next(); !S.done; ) {
                  if (S.value !== x.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = k.next()), (x = w.next()));
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
        return to(this, n);
      }),
      (t.intercept_ = function (n) {
        return eo(this, n);
      }),
      on(e, [
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
  Rr = xr("ObservableMap", Zp);
function Gl(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Cc(e));
}
function ty(e) {
  if (an(e) || Rr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (or(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return W(21, e);
}
var ry = {},
  Qp = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = wr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[N] = ry),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        gt(Set) || W(22),
        (this.enhancer_ = function (i, c) {
          return n(i, c, a);
        }),
        Pr(function () {
          ((o.atom_ = Sp(o.name_)), r && o.replace(r));
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
          Tp(function () {
            for (var a = Hr(n.data_.values()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var o = Hr(this), i; !(i = o()).done; ) {
          var c = i.value;
          n.call(a, c, c, this);
        }
      }),
      (t.add = function (n) {
        var a = this;
        if ((this.atom_, rt(this))) {
          var o = nt(this, { type: rr, object: this, newValue: n });
          if (!o) return this;
          n = o.newValue;
        }
        if (!this.has(n)) {
          Gt(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var i = !1,
            c = pt(this),
            s =
              c || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: rr,
                    object: this,
                    newValue: n,
                  }
                : null;
          c && ht(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (rt(this)) {
          var o = nt(this, { type: zo, object: this, oldValue: n });
          if (!o) return !1;
        }
        if (this.has(n)) {
          var i = !1,
            c = pt(this),
            s =
              c || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: zo,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Gt(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            c && ht(this, s),
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
        return Hl({
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
        return Hl({
          next: function () {
            var i = a.next(),
              c = i.value,
              s = i.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(c), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Vt(n) && !xt(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Vt(n) && !xt(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Vt(n) && !xt(n)) return n.symmetricDifference(this);
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
        if (Vt(n) && !xt(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          xt(n) && (n = new Set(n)),
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
        return to(this, n);
      }),
      (t.intercept_ = function (n) {
        return eo(this, n);
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
      on(e, [
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
  xt = xr("ObservableSet", Qp);
function Hl(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Cc(e));
}
var Kl = Object.create(null),
  Wl = "remove",
  eh = (function () {
    function e(r, n, a, o) {
      (n === void 0 && (n = new Map()),
        o === void 0 && (o = X_),
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
        (this.keysAtom_ = new sr("ObservableObject.keys")),
        (this.isPlainObject_ = or(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, a) {
        var o = this.values_.get(n);
        if (o instanceof bt) return (o.set(a), !0);
        if (rt(this)) {
          var i = nt(this, { type: At, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!i) return null;
          a = i.newValue;
        }
        if (((a = o.prepareNewValue_(a)), a !== I.UNCHANGED)) {
          var c = pt(this),
            s = !1,
            u =
              c || s
                ? {
                    type: At,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), c && ht(this, u));
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
            ((a = new br(n in this.target_, li, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var o;
            if ((o = this.target_[Ct]) != null && o[n]) return;
            W(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var i = this.target_; i && i !== ii; ) {
            var c = Mo(i, n);
            if (c) {
              var s = a.make_(this, n, c, i);
              if (s === 0) return;
              if (s === 1) break;
            }
            i = Object.getPrototypeOf(i);
          }
          Yl(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, o, i) {
        if ((i === void 0 && (i = !1), o === !0 && (o = this.defaultAnnotation_), o === !1))
          return this.defineProperty_(n, a, i);
        var c = o.extend_(this, n, a, i);
        return (c && Yl(this, o, n), c);
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
              type: rr,
              newValue: a.value,
            });
            if (!c) return null;
            var s = c.newValue;
            a.value !== s && (a = yr({}, a, { value: s }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else Rt(this.target_, n, a);
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
              type: rr,
              newValue: a,
            });
            if (!s) return null;
            a = s.newValue;
          }
          var u = Jl(n),
            l = {
              configurable: I.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: u.get,
              set: u.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else Rt(this.target_, n, l);
          var d = new br(a, o, "ObservableObject.key", !1);
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
              type: rr,
              newValue: void 0,
            });
            if (!c) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var s = Jl(n),
            u = {
              configurable: I.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else Rt(this.target_, n, u);
          (this.values_.set(n, new bt(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          ot();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Kt(this.target_, n))) return !0;
        if (rt(this)) {
          var o = nt(this, { object: this.proxy_ || this.target_, name: n, type: Wl });
          if (!o) return null;
        }
        try {
          var i;
          at();
          var c = pt(this),
            s = !1,
            u = this.values_.get(n),
            l = void 0;
          if (!u && (c || s)) {
            var d;
            l = (d = Mo(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (u && (this.values_.delete(n), u instanceof br && (l = u.value_), qp(u)),
            this.keysAtom_.reportChanged(),
            (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(n in this.target_),
            c || s)
          ) {
            var p = {
              type: Wl,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            c && ht(this, p);
          }
        } finally {
          ot();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return to(this, n);
      }),
      (t.intercept_ = function (n) {
        return eo(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var o,
          i = pt(this),
          c = !1;
        if (i || c) {
          var s =
            i || c
              ? {
                  type: rr,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: a,
                }
              : null;
          i && ht(this, s);
        }
        ((o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), ui(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function sn(e, t) {
  var r;
  if (Kt(e, N)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new eh(e, new Map(), String(n), cm(t));
  return (ci(e, N, a), e);
}
var ny = xr("ObservableObjectAdministration", eh);
function Jl(e) {
  return (
    Kl[e] ||
    (Kl[e] = {
      get: function () {
        return this[N].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[N].setObservablePropValue_(e, r);
      },
    })
  );
}
function bi(e) {
  return si(e) ? ny(e[N]) : !1;
}
function Yl(e, t, r) {
  var n;
  (n = e.target_[Ct]) == null || delete n[r];
}
var ay = rh(0),
  oy = (function () {
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
  ns = 0,
  th = function () {};
function iy(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
iy(th, Array.prototype);
var xc = (function (e) {
  function t(n, a, o, i) {
    var c;
    return (
      o === void 0 && (o = "ObservableArray"),
      i === void 0 && (i = !1),
      (c = e.call(this) || this),
      Pr(function () {
        var s = new Ec(o, a, i, !0);
        ((s.proxy_ = c),
          yp(c, N, s),
          n && n.length && c.spliceWithArray(0, 0, n),
          oy && Object.defineProperty(c, "0", ay));
      }),
      c
    );
  }
  Op(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[N].atom_.reportObserved();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (c) {
          return gi(c) ? c.slice() : c;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return Cc({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    on(t, [
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
})(th);
Object.entries(Uo).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && ci(xc.prototype, t, r);
});
function rh(e) {
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
function sy(e) {
  Rt(xc.prototype, "" + e, rh(e));
}
function nh(e) {
  if (e > ns) {
    for (var t = ns; t < e + 100; t++) sy(t);
    ns = e;
  }
}
nh(1e3);
function cy(e, t, r) {
  return new xc(e, t, r);
}
function $o(e, t) {
  if (typeof e == "object" && e !== null) {
    if (gi(e)) return (t !== void 0 && W(23), e[N].atom_);
    if (xt(e)) return e.atom_;
    if (Rr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || W(25, t, Xs(e)), r);
    }
    if (bi(e)) {
      if (!t) return W(26);
      var n = e[N].values_.get(t);
      return (n || W(27, t, Xs(e)), n);
    }
    if (kc(e) || hi(e) || qo(e)) return e;
  } else if (gt(e) && qo(e[N])) return e[N];
  W(28);
}
function uy(e, t) {
  if ((e || W(29), kc(e) || hi(e) || qo(e) || Rr(e) || xt(e))) return e;
  if (e[N]) return e[N];
  W(24, e);
}
function Xs(e, t) {
  var r;
  if (t !== void 0) r = $o(e, t);
  else {
    if (Yr(e)) return e.name;
    bi(e) || Rr(e) || xt(e) ? (r = uy(e)) : (r = $o(e));
  }
  return r.name_;
}
function Pr(e) {
  var t = Cr(),
    r = vi(!0);
  at();
  try {
    return e();
  } finally {
    (ot(), pi(r), Wt(t));
  }
}
var Xl = ii.toString;
function ah(e, t, r) {
  return (r === void 0 && (r = -1), Zs(e, t, r));
}
function Zs(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var i = Xl.call(e);
  if (i !== Xl.call(t)) return !1;
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
  ((e = Zl(e)), (t = Zl(t)));
  var c = i === "[object Array]";
  if (!c) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      u = t.constructor;
    if (
      s !== u &&
      !(gt(s) && s instanceof s && gt(u) && u instanceof u) &&
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
    for (; l--; ) if (!Zs(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      p = d.length;
    if (Object.keys(t).length !== p) return !1;
    for (var v = 0; v < p; v++) {
      var g = d[v];
      if (!(Kt(t, g) && Zs(e[g], t[g], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function Zl(e) {
  return gi(e) ? e.slice() : an(e) || Rr(e) || Vt(e) || xt(e) ? Array.from(e.entries()) : e;
}
var Ql,
  ly = ((Ql = oi().Iterator) == null ? void 0 : Ql.prototype) || {};
function Cc(e) {
  return ((e[Symbol.iterator] = dy), Object.assign(Object.create(ly), e));
}
function dy() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = oi();
  typeof t[e] > "u" && W("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: Cm, extras: { getDebugName: Xs }, $mobx: N });
if (!m.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Yp) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function fy(e) {
  e();
}
function vy(e) {
  (e || (e = fy), Um({ reactionScheduler: e }));
}
function py(e) {
  return $m(e);
}
var hy = 1e4,
  gy = 1e4,
  by = (function () {
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
            (n === void 0 && (n = hy), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, gy));
        },
      }),
      e
    );
  })(),
  _y = typeof FinalizationRegistry < "u" ? FinalizationRegistry : by,
  Ua = new _y(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  as = { exports: {} },
  os = {};
var ed;
function my() {
  if (ed) return os;
  ed = 1;
  var e = _t();
  function t(d, p) {
    return (d === p && (d !== 0 || 1 / d === 1 / p)) || (d !== d && p !== p);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    a = e.useEffect,
    o = e.useLayoutEffect,
    i = e.useDebugValue;
  function c(d, p) {
    var v = p(),
      g = n({ inst: { value: v, getSnapshot: p } }),
      f = g[0].inst,
      h = g[1];
    return (
      o(
        function () {
          ((f.value = v), (f.getSnapshot = p), s(f) && h({ inst: f }));
        },
        [d, v, p],
      ),
      a(
        function () {
          return (
            s(f) && h({ inst: f }),
            d(function () {
              s(f) && h({ inst: f });
            })
          );
        },
        [d],
      ),
      i(v),
      v
    );
  }
  function s(d) {
    var p = d.getSnapshot;
    d = d.value;
    try {
      var v = p();
      return !r(d, v);
    } catch {
      return !0;
    }
  }
  function u(d, p) {
    return p();
  }
  var l =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? u
      : c;
  return (
    (os.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    os
  );
}
var td;
function yy() {
  return (td || ((td = 1), (as.exports = my())), as.exports);
}
var wy = yy();
function rd(e) {
  e.reaction = new Tt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function ky(e, t) {
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
          Ua.unregister(n),
          (n.onStoreChange = c),
          n.reaction || (rd(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (rd(a), Ua.register(r, a, a)),
    O.useDebugValue(a.reaction, py),
    wy.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
var is,
  ss,
  oh = typeof Symbol == "function" && Symbol.for,
  Oy =
    (ss =
      (is = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || is === void 0
        ? void 0
        : is.configurable) !== null && ss !== void 0
      ? ss
      : !1,
  nd = oh
    ? Symbol.for("react.forward_ref")
    : typeof m.forwardRef == "function" &&
      m.forwardRef(function (e) {
        return null;
      }).$$typeof,
  ad = oh
    ? Symbol.for("react.memo")
    : typeof m.memo == "function" &&
      m.memo(function (e) {
        return null;
      }).$$typeof;
function Sy(e, t) {
  var r;
  if (ad && e.$$typeof === ad)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    o = e.displayName || e.name;
  if (nd && e.$$typeof === nd && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var i = function (c, s) {
    return ky(function () {
      return a(c, s);
    }, o);
  };
  return (
    (i.displayName = e.displayName),
    Oy && Object.defineProperty(i, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (i.contextTypes = e.contextTypes),
    n && (i = m.forwardRef(i)),
    (i = m.memo(i)),
    xy(e, i),
    i
  );
}
var Ey = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function xy(e, t) {
  Object.keys(e).forEach(function (r) {
    Ey[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var cs;
vy(Qo.unstable_batchedUpdates);
cs = Ua.finalizeAllImmediately;
function Cy(e, t) {
  if (od(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !od(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function od(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var id = Symbol("patchMixins"),
  ih = Symbol("patchedDefinition");
function Ry(e, t) {
  var r = (e[id] = e[id] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function sd(e, t) {
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
function cd(e, t) {
  var r = function () {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    sd.call.apply(sd, [this, e, t].concat(o));
  };
  return r;
}
function Py(e, t, r) {
  var n = Ry(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[ih])) {
    var o = e[t],
      i = sh(e, t, a ? a.enumerable : void 0, n, o);
    Object.defineProperty(e, t, i);
  }
}
function sh(e, t, r, n, a) {
  var o,
    i = cd(a, n);
  return (
    (o = {}),
    (o[ih] = !0),
    (o.get = function () {
      return i;
    }),
    (o.set = function (s) {
      if (this === e) i = cd(s, n);
      else {
        var u = sh(this, t, r, n, s);
        Object.defineProperty(this, t, u);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = r),
    o
  );
}
var ud = Symbol("ObserverAdministration"),
  ld = Symbol("isMobXReactObserver");
function Qs(e) {
  var t;
  return (t = e[ud]) != null
    ? t
    : (e[ud] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: ec(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function Ay(e) {
  var t = e.prototype;
  if (e[ld]) {
    var r = ec(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[ld] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== m.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = dd;
    else if (t.shouldComponentUpdate !== dd)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = ec(e);
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
        value: Iy.call(this, n),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var i = this,
        c = Qs(this);
      return (
        (c.mounted = !0),
        Ua.unregister(this),
        (c.forceUpdate = function () {
          return i.forceUpdate();
        }),
        (!c.reaction || c.reactionInvalidatedBeforeMount) && c.forceUpdate(),
        o?.apply(this, arguments)
      );
    }),
    Py(t, "componentWillUnmount", function () {
      var i,
        c = Qs(this);
      ((i = c.reaction) == null || i.dispose(),
        (c.reaction = null),
        (c.forceUpdate = null),
        (c.mounted = !1),
        (c.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function ec(e) {
  return e.displayName || e.name || "<component>";
}
function Iy(e) {
  var t = e.bind(this),
    r = Qs(this);
  function n() {
    r.reaction || ((r.reaction = jy(r)), r.mounted || Ua.register(this, r, this));
    var a = void 0,
      o = void 0;
    if (
      (r.reaction.track(function () {
        try {
          o = _m(!1, t);
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
function jy(e) {
  return new Tt(e.name + ".render()", function () {
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
function dd(e, t) {
  return this.state !== t ? !0 : !Cy(this.props, e);
}
function _i(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(m.Component, e) ||
    Object.prototype.isPrototypeOf.call(m.PureComponent, e)
      ? Ay(e)
      : Sy(e)
  );
}
function tc() {
  return (
    (tc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    tc.apply(null, arguments)
  );
}
function Dy(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Ty = ["children"],
  fd = O.createContext({});
function ch(e) {
  var t = e.children,
    r = Dy(e, Ty),
    n = O.useContext(fd),
    a = O.useRef(tc({}, n, r)),
    o = a.current;
  return O.createElement(fd.Provider, { value: o }, t);
}
ch.displayName = "MobXProvider";
O.version.split(".")[0];
if (!m.Component) throw new Error("mobx-react requires React to be available");
if (!ae) throw new Error("mobx-react requires mobx to be available");
var My = Object.defineProperty,
  Ly = Object.getOwnPropertyDescriptor,
  Ee = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? Ly(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && My(t, r, a), a);
  };
const us = "Loading ...";
class we {
  constructor() {
    ((this.state = "ROOT"),
      (this.isLoading = !0),
      (this.message = us),
      (this.testNonVersioningData = ""),
      (this.testNumberVersioningData = ""),
      (this.testDateVersioningData = ""),
      (this.testTimestampVersioningData = ""),
      Yp(this));
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
    ((this.isLoading = !0), (this.message = t ?? us));
  }
  stopLoading() {
    ((this.isLoading = !1), (this.message = us));
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
const Ny = new we();
class By {
  constructor() {
    this.stateStore = Ny;
  }
}
const uh = new By(),
  Fy = m.createContext(uh),
  mi = () => m.useContext(Fy);
function ge(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function De(e) {
  "@babel/helpers - typeof";
  return (
    (De =
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
    De(e)
  );
}
function qy(e, t) {
  if (De(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (De(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lh(e) {
  var t = qy(e, "string");
  return De(t) == "symbol" ? t : t + "";
}
function vd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, lh(n.key), n));
  }
}
function be(e, t, r) {
  return (
    t && vd(e.prototype, t),
    r && vd(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Uy(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ye(e, t) {
  if (t && (De(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Uy(e);
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
function za(e, t) {
  return (
    (za = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    za(e, t)
  );
}
function Xe(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && za(e, t));
}
function C(e, t, r) {
  return (
    (t = lh(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Pe() {}
function dh(e) {
  if (Array.isArray(e)) return e;
}
function zy(e, t) {
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
function rc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Rc(e, t) {
  if (e) {
    if (typeof e == "string") return rc(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? rc(e, t)
          : void 0
    );
  }
}
function fh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J(e, t) {
  return dh(e) || zy(e, t) || Rc(e, t) || fh();
}
var vh = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  $y = function (t) {
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
  Vo = function (t, r) {
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
  Vy = function (t, r, n) {
    return t ? { width: r } : {};
  },
  pd = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  Gy = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = t.destination,
      i = t.sourceIndex;
    if (!o) return r;
    var c = pd(i, n, a),
      s = pd(o.index, n, a),
      u = r.slice(),
      l = u.splice(c, 1),
      d = J(l, 1),
      p = d[0];
    return (u.splice(s, 0, p), u);
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
function Hy(e, t) {
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
    a = Hy(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      ((r = o[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
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
function ls(e) {
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
var Ky = (function () {
  function e(t) {
    var r = this;
    (ge(this, e),
      C(this, "_isAnalyticsEvent", !0),
      C(this, "clone", function () {
        var n = ls({}, r.payload);
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
          De(r) === "object" && (this.payload = ls(ls({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function Wy(e) {
  if (Array.isArray(e)) return rc(e);
}
function ph(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function Jy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ve(e) {
  return Wy(e) || ph(e) || Rc(e) || Jy();
}
function Yy(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = X(e)) !== null; );
  return e;
}
function Go() {
  return (
    (Go =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = Yy(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    Go.apply(null, arguments)
  );
}
function Xy(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, hh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function hh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (hh = function () {
    return !!e;
  })();
}
function Zy(e, t, r, n) {
  var a = Go(X(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var Qy = (function (e) {
    function t(r) {
      var n;
      return (
        ge(this, t),
        (n = Xy(this, t, [r])),
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
            return this.hasFired ? this : Zy(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(Ky),
  e0 = m.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  t0 = function () {
    return m.useContext(e0);
  },
  Ho = function (t) {
    var r = m.useRef(t);
    return ((r.current = t), r);
  };
function r0(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function n0(e, t) {
  var r = m.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = m.useRef(!0),
    a = m.useRef(r),
    o = n.current || !!(t && a.current.inputs && r0(t, a.current.inputs)),
    i = o ? a.current : { inputs: t, result: e() };
  return (
    m.useEffect(
      function () {
        ((n.current = !1), (a.current = i));
      },
      [i],
    ),
    i.result
  );
}
function a0(e, t) {
  return n0(function () {
    return e;
  }, t);
}
function gh() {
  var e = t0(),
    t = a0(
      function (r) {
        return new Qy({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function gd(e, t) {
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
function o0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Zr(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    o = e.packageName,
    i = e.packageVersion,
    c = e.analyticsData,
    s = gh(),
    u = s.createAnalyticsEvent,
    l = Ho(c),
    d = Ho(t),
    p = m.useCallback(
      function (v) {
        var g = u({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: o, packageVersion: i },
          }),
          f = o0({ componentName: n, packageName: o, packageVersion: i }, l.current);
        g.context.push(f);
        var h = g.clone();
        (h && h.fire("atlaskit"), d.current(v, g));
      },
      [r, n, a, o, i, u, l, d],
    );
  return p;
}
function bd(e, t) {
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
function i0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function _d(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    o = e.packageVersion,
    i = e.analyticsData,
    c = gh(),
    s = c.createAnalyticsEvent,
    u = Ho(i),
    l = Ho(t),
    d = m.useCallback(
      function () {
        var p = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          v = i0({ componentName: n, packageName: a, packageVersion: o }, u.current);
        p.context.push(v);
        var g = p.clone();
        (g && g.fire("atlaskit"), l.current(p));
      },
      [r, n, a, o, s, u, l],
    );
  return d;
}
var Or = "ASC",
  Ko = "DESC",
  s0 = "small",
  Wo = "large",
  bh = 0.22;
const c0 = 5;
function R(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, c0) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function tr(e, t, r) {
  return e ?? "var(--c-, )";
}
var u0 = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  l0 = m.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      o = e.testId,
      i = e.isLoading,
      c = te(e, u0);
    return m.createElement(
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
          className: R([
            "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
            r && "_1kqm1n9t",
            n && "_179r1uh4",
          ]),
        },
      ),
      a,
    );
  }),
  d0 = function (t) {
    var r = t.children;
    return m.createElement(
      "caption",
      { className: R(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  f0 = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: R(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  v0 = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: R(["_4t3i1jdh"]),
      },
      r,
    );
  },
  p0 = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
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
  h0 = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function md(e, t) {
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
function yd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? md(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : md(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function g0(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, _h() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var wd = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var o;
      if (r.cells[a] && ((o = r.cells[a]) === null || o === void 0 ? void 0 : o.key) === n) {
        var i;
        return (i = t[a]) === null || i === void 0 ? void 0 : i.key;
      }
    }
  },
  b0 = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var o = a === Or ? 1 : -1,
      i = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      c = Array.from(r);
    return c.sort(function (s, u) {
      var l = wd(s.cells, t, n),
        d = wd(u.cells, t, n);
      if (l === void 0 || d === void 0) return o;
      if (De(l) !== De(d)) {
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
function _0(e) {
  var t = (function (r) {
    function n() {
      var a;
      ge(this, n);
      for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
      return ((a = g0(this, n, [].concat(i))), C(a, "state", { pageRows: [] }), a);
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
                s = te(o, h0);
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
                p = o.rowsPerPage,
                v = o.isTotalPagesControlledExternally;
              Vo(u, s);
              var g, f;
              return (
                v ? ((g = c), (f = c)) : ((g = b0(s, c, u, l) || []), (f = vh(g, d, p))),
                yd(yd({}, i), {}, { pageRows: f })
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
var m0 = "--local-dynamic-table-width",
  mh = function (t) {
    var r = t.width;
    return typeof r < "u" ? C({}, m0, "".concat(r, "%")) : void 0;
  },
  y0 = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  w0 = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      o = t.innerRef,
      i = te(t, y0);
    return m.createElement(
      "td",
      Z(
        {
          style: mh({ width: r }),
          ref: o,
          className: R([
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
  k0 = ["isHighlighted", "children", "style", "testId", "className"],
  O0 = m.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      o = e.testId,
      i = e.className,
      c = te(e, k0);
    return m.createElement(
      "tr",
      Z(
        {
          style: a,
          className: R([
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
  S0 = ["cells"],
  E0 = ["content", "testId"],
  x0 = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      o = t.isFixedSize,
      i = t.isHighlighted,
      c = r.cells,
      s = te(r, S0);
    return O.createElement(
      O0,
      Z(
        {},
        s,
        { isHighlighted: i },
        i ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(s.key)) },
      ),
      c.map(function (u, l) {
        var d = u.content,
          p = u.testId,
          v = te(u, E0),
          g = (n || { cells: [] }).cells[l] || {},
          f = g.shouldTruncate,
          h = g.width;
        return O.createElement(
          w0,
          Z({ "data-testid": p || (a && "".concat(a, "--cell-").concat(l)) }, v, {
            isFixedSize: o,
            key: l,
            shouldTruncate: f,
            width: h,
          }),
          d,
        );
      }),
    );
  };
function C0(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, yh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function yh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (yh = function () {
    return !!e;
  })();
}
var R0 = (function (e) {
    function t() {
      return (ge(this, t), C0(this, t, arguments));
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
                return O.createElement(x0, {
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
  P0 = _0(
    O.forwardRef(function (e, t) {
      return O.createElement(R0, Z({}, e, { forwardedRef: t }));
    }),
  );
function A0(e, t, r) {
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
var I0 = (function (e) {
  function t(r) {
    var n;
    return (ge(this, t), (n = A0(this, t, [r])), (n.state = { hasError: !1 }), n);
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
const Pc = m.createContext(null);
var ds = "#0052CC",
  j0 = "#0747A6",
  D0 = "#FFFFFF",
  T0 = "#EBECF0",
  Jo = "#42526E",
  M0 = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function L0(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(Jo, ")")
    : "var(--ds-icon-inverse, ".concat(D0, ")");
}
var vo = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  N0 = typeof window > "u" ? m.useEffect : m.useLayoutEffect,
  Ac = O.memo(
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
        p = typeof l == "number" ? l : M0[l],
        v = "".concat(i, "ms"),
        g = L0(a),
        f = m.useContext(Pc);
      return (
        N0(
          function () {
            if (f != null) return f.hold(c);
          },
          [f, c],
        ),
        O.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: v, width: p, height: p },
            className: R([vo.wrapperStyles, vo.rotateStyles]),
          },
          O.createElement(
            "svg",
            {
              height: p,
              width: p,
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
              "data-testid": d,
              ref: r,
              "aria-label": s || void 0,
              style: { animationDelay: v },
              role: s ? "img" : "none",
              className: R([vo.loadInStyles]),
            },
            O.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: g },
              className: R([vo.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function kd(e, t) {
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
function Od(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? kd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : kd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Sd = "--contents-opacity",
  B0 = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: R(["_kqswh2mm"]) },
      r,
    );
  },
  F0 = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: R(["_tzy47hfw _lcxvglyw"]),
        style: Od(Od({}, C({}, Sd, n)), {}, { "--_cnddr8": tr("var(".concat(Sd, ")")) }),
      },
      r,
    );
  },
  q0 = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function U0(e, t, r) {
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
var Oh = (function (e) {
  function t() {
    return (ge(this, t), U0(this, t, arguments));
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
            B0,
            { testId: s },
            o ? O.createElement(F0, { contentsOpacity: c, testId: s }, a) : a,
            o &&
              O.createElement(
                q0,
                { testId: s },
                O.createElement(Ac, {
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
C(Oh, "defaultProps", {
  isLoading: !0,
  spinnerSize: Wo,
  contentsOpacity: bh,
  loadingLabel: "Loading table",
});
var z0 = ["children", "testId"],
  $0 = m.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = te(e, z0);
    return m.createElement(
      "div",
      Z({}, a, { "data-testid": n, ref: t, className: R(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  V0 = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  G0 = m.forwardRef(function (e, t) {
    var r = e.children;
    return m.createElement("div", { ref: t, className: R(["_kqswh2mm _152tidpf"]) }, r);
  });
function H0(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, Sh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Sh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Sh = function () {
    return !!e;
  })();
}
var Eh = (function (e) {
  function t() {
    var r;
    ge(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = H0(this, t, [].concat(a))),
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
          De(i.style) === "object" &&
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
              p = s.top,
              v = s.bottom,
              g = s.height;
            if (d) {
              var f = g >= l * 3;
              if (f && !this.isFullyVerticallyVisible(s, o)) {
                if (p >= 0) {
                  var h = o - p,
                    b = h / 2 + p - l / 2,
                    _ = h < l * 3 ? p + l : b;
                  this.translateSpinner(c, _, !0);
                } else if (p < 0 && v > o) {
                  var y = o / 2 - l / 2;
                  this.translateSpinner(c, y, !0);
                } else {
                  var k = v / 2 - l / 2,
                    w = k < l ? k - (l - k) : k;
                  this.translateSpinner(c, w, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(u, o)) return;
            var S = (a = this.containerRef) === null || a === void 0 ? void 0 : a.current;
            if (S && typeof S.getBoundingClientRect == "function") {
              var x = S.getBoundingClientRect().top,
                A = (p - x) / 2;
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
            $0,
            { testId: c && "".concat(c, "--loading--container--advanced"), ref: this.containerRef },
            a,
            o &&
              O.createElement(
                V0,
                { testId: c },
                O.createElement(
                  G0,
                  { ref: this.spinnerRef },
                  O.createElement(Ac, {
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
C(Eh, "defaultProps", {
  isLoading: !0,
  spinnerSize: Wo,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(bh), ")"),
  loadingLabel: "Loading table",
});
function K0(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = m.useState(t),
    a = J(n, 2),
    o = a[0],
    i = a[1],
    c = m.useRef(r);
  m.useEffect(
    function () {
      c.current = r;
    },
    [r],
  );
  var s = r ? e : o,
    u = m.useCallback(function (l) {
      c.current || i(l);
    }, []);
  return [s, u];
}
var ia = {},
  sa = {};
function Ed(e, t, r, n, a, o, i) {
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
        Ed(o, n, a, i, c, "next", s);
      }
      function c(s) {
        Ed(o, n, a, i, c, "throw", s);
      }
      i(void 0);
    });
  };
}
var fs = { exports: {} },
  vs = { exports: {} },
  xd;
function xh() {
  return (
    xd ||
      ((xd = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(vs)),
    vs.exports
  );
}
var ps = { exports: {} },
  hs = { exports: {} },
  Cd;
function Ch() {
  return (
    Cd ||
      ((Cd = 1),
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
              function p(v, g) {
                t(s, v, function (f) {
                  return this._invoke(v, g, f);
                });
              }
              u
                ? i
                  ? i(s, u, { value: l, enumerable: !d, configurable: !d, writable: !d })
                  : (s[u] = l)
                : (p("next", 0), p("throw", 1), p("return", 2));
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r, n, a, o));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(hs)),
    hs.exports
  );
}
var Rd;
function Rh() {
  return (
    Rd ||
      ((Rd = 1),
      (function (e) {
        var t = Ch();
        function r() {
          var n,
            a,
            o = typeof Symbol == "function" ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.toStringTag || "@@toStringTag";
          function s(h, b, _, y) {
            var k = b && b.prototype instanceof l ? b : l,
              w = Object.create(k.prototype);
            return (
              t(
                w,
                "_invoke",
                (function (S, x, A) {
                  var j,
                    P,
                    M,
                    U = 0,
                    F = A || [],
                    $ = !1,
                    z = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: V,
                      f: V.bind(n, 4),
                      d: function (K, B) {
                        return ((j = K), (P = 0), (M = n), (z.n = B), u);
                      },
                    };
                  function V(G, K) {
                    for (P = G, M = K, a = 0; !$ && U && !B && a < F.length; a++) {
                      var B,
                        D = F[a],
                        _e = z.p,
                        ie = D[2];
                      G > 3
                        ? (B = ie === K) &&
                          ((M = D[(P = D[4]) ? 5 : ((P = 3), 3)]), (D[4] = D[5] = n))
                        : D[0] <= _e &&
                          ((B = G < 2 && _e < D[1])
                            ? ((P = 0), (z.v = K), (z.n = D[1]))
                            : _e < ie &&
                              (B = G < 3 || D[0] > K || K > ie) &&
                              ((D[4] = G), (D[5] = K), (z.n = ie), (P = 0)));
                    }
                    if (B || G > 1) return u;
                    throw (($ = !0), K);
                  }
                  return function (G, K, B) {
                    if (U > 1) throw TypeError("Generator is already running");
                    for ($ && K === 1 && V(K, B), P = K, M = B; (a = P < 2 ? n : M) || !$; ) {
                      j || (P ? (P < 3 ? (P > 1 && (z.n = -1), V(P, M)) : (z.n = M)) : (z.v = M));
                      try {
                        if (((U = 2), j)) {
                          if ((P || (G = "next"), (a = j[G]))) {
                            if (!(a = a.call(j, M)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((M = a.value), P < 2 && (P = 0));
                          } else
                            (P === 1 && (a = j.return) && a.call(j),
                              P < 2 &&
                                ((M = TypeError(
                                  "The iterator does not provide a '" + G + "' method",
                                )),
                                (P = 1)));
                          j = n;
                        } else if ((a = ($ = z.n < 0) ? M : S.call(x, z)) !== u) break;
                      } catch (D) {
                        ((j = n), (P = 1), (M = D));
                      } finally {
                        U = 1;
                      }
                    }
                    return { value: a, done: $ };
                  };
                })(h, _, y),
                !0,
              ),
              w
            );
          }
          var u = {};
          function l() {}
          function d() {}
          function p() {}
          a = Object.getPrototypeOf;
          var v = [][i]
              ? a(a([][i]()))
              : (t((a = {}), i, function () {
                  return this;
                }),
                a),
            g = (p.prototype = l.prototype = Object.create(v));
          function f(h) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(h, p)
                : ((h.__proto__ = p), t(h, c, "GeneratorFunction")),
              (h.prototype = Object.create(g)),
              h
            );
          }
          return (
            (d.prototype = p),
            t(g, "constructor", p),
            t(p, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(p, c, "GeneratorFunction"),
            t(g),
            t(g, c, "Generator"),
            t(g, i, function () {
              return this;
            }),
            t(g, "toString", function () {
              return "[object Generator]";
            }),
            ((e.exports = r =
              function () {
                return { w: s, m: f };
              }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports))()
          );
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ps)),
    ps.exports
  );
}
var gs = { exports: {} },
  bs = { exports: {} },
  _s = { exports: {} },
  Pd;
function Ph() {
  return (
    Pd ||
      ((Pd = 1),
      (function (e) {
        var t = xh(),
          r = Ch();
        function n(a, o) {
          function i(s, u, l, d) {
            try {
              var p = a[s](u),
                v = p.value;
              return v instanceof t
                ? o.resolve(v.v).then(
                    function (g) {
                      i("next", g, l, d);
                    },
                    function (g) {
                      i("throw", g, l, d);
                    },
                  )
                : o.resolve(v).then(
                    function (g) {
                      ((p.value = g), l(p));
                    },
                    function (g) {
                      return i("throw", g, l, d);
                    },
                  );
            } catch (g) {
              d(g);
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
                  return new o(function (p, v) {
                    i(s, l, p, v);
                  });
                }
                return (c = c ? c.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(_s)),
    _s.exports
  );
}
var Ad;
function Ah() {
  return (
    Ad ||
      ((Ad = 1),
      (function (e) {
        var t = Rh(),
          r = Ph();
        function n(a, o, i, c, s) {
          return new r(t().w(a, o, i, c), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(bs)),
    bs.exports
  );
}
var Id;
function W0() {
  return (
    Id ||
      ((Id = 1),
      (function (e) {
        var t = Ah();
        function r(n, a, o, i, c) {
          var s = t(n, a, o, i, c);
          return s.next().then(function (u) {
            return u.done ? u.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(gs)),
    gs.exports
  );
}
var ms = { exports: {} },
  jd;
function J0() {
  return (
    jd ||
      ((jd = 1),
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
      })(ms)),
    ms.exports
  );
}
var ys = { exports: {} },
  ws = { exports: {} },
  Dd;
function Y0() {
  return (
    Dd ||
      ((Dd = 1),
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
      })(ws)),
    ws.exports
  );
}
var Td;
function X0() {
  return (
    Td ||
      ((Td = 1),
      (function (e) {
        var t = Y0().default;
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
      })(ys)),
    ys.exports
  );
}
var Md;
function Z0() {
  return (
    Md ||
      ((Md = 1),
      (function (e) {
        var t = xh(),
          r = Rh(),
          n = W0(),
          a = Ah(),
          o = Ph(),
          i = J0(),
          c = X0();
        function s() {
          var u = r(),
            l = u.m(s),
            d = (Object.getPrototypeOf ? Object.getPrototypeOf(l) : l.__proto__).constructor;
          function p(f) {
            var h = typeof f == "function" && f.constructor;
            return !!h && (h === d || (h.displayName || h.name) === "GeneratorFunction");
          }
          var v = { throw: 1, return: 2, break: 3, continue: 3 };
          function g(f) {
            var h, b;
            return function (_) {
              (h ||
                ((h = {
                  stop: function () {
                    return b(_.a, 2);
                  },
                  catch: function () {
                    return _.v;
                  },
                  abrupt: function (k, w) {
                    return b(_.a, v[k], w);
                  },
                  delegateYield: function (k, w, S) {
                    return ((h.resultName = w), b(_.d, c(k), S));
                  },
                  finish: function (k) {
                    return b(_.f, k);
                  },
                }),
                (b = function (k, w, S) {
                  ((_.p = h.prev), (_.n = h.next));
                  try {
                    return k(w, S);
                  } finally {
                    h.next = _.n;
                  }
                })),
                h.resultName && ((h[h.resultName] = _.v), (h.resultName = void 0)),
                (h.sent = _.v),
                (h.next = _.n));
              try {
                return f.call(this, h);
              } finally {
                ((_.p = h.prev), (_.n = h.next));
              }
            };
          }
          return ((e.exports = s =
            function () {
              return {
                wrap: function (b, _, y, k) {
                  return u.w(g(b), _, y, k && k.reverse());
                },
                isGeneratorFunction: p,
                mark: u.m,
                awrap: function (b, _) {
                  return new t(b, _);
                },
                AsyncIterator: o,
                async: function (b, _, y, k, w) {
                  return (p(_) ? a : n)(g(b), _, y, k, w);
                },
                keys: i,
                values: c,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(fs)),
    fs.exports
  );
}
var ks, Ld;
function Q0() {
  if (Ld) return ks;
  Ld = 1;
  var e = Z0()();
  ks = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return ks;
}
var ew = Q0();
const q = ir(ew);
var pr = {},
  Lr = {},
  po = {},
  ca = {},
  Nd;
function tw() {
  if (Nd) return ca;
  ((Nd = 1),
    Object.defineProperty(ca, "__esModule", { value: !0 }),
    (ca.V1InitializeContainer = void 0));
  const e = Dt();
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
  return ((ca.V1InitializeContainer = t), ca);
}
var ua = {},
  Bd;
function rw() {
  if (Bd) return ua;
  ((Bd = 1),
    Object.defineProperty(ua, "__esModule", { value: !0 }),
    (ua.V2InitializeContainer = void 0));
  const e = Dt();
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
  return ((ua.V2InitializeContainer = t), ua);
}
var Fd;
function nw() {
  if (Fd) return po;
  ((Fd = 1), Object.defineProperty(po, "__esModule", { value: !0 }));
  const e = Dt(),
    t = tw(),
    r = rw();
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
  return ((po.default = n), po);
}
var Nr = {},
  la = {},
  qd;
function aw() {
  if (qd) return la;
  ((qd = 1),
    Object.defineProperty(la, "__esModule", { value: !0 }),
    (la._resolveDeltasResponse = void 0));
  const e = Dt(),
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
  la._resolveDeltasResponse = r;
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
  return la;
}
var Ud;
function Ih() {
  if (Ud) return Nr;
  Ud = 1;
  var e =
    (Nr && Nr.__awaiter) ||
    function (a, o, i, c) {
      function s(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(g) {
          try {
            v(c.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(c.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? u(g.value) : s(g.value).then(d, p);
        }
        v((c = c.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(Nr, "__esModule", { value: !0 });
  const t = Dt(),
    r = aw();
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
        var l, d, p, v, g, f;
        const h = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
        let b = {
          user: s,
          hash:
            (p =
              (d = (l = this._option) === null || l === void 0 ? void 0 : l.networkConfig) ===
                null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && p !== void 0
              ? p
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (h?.has_updates) {
          const _ =
            h?.hash_used !==
            ((f =
              (g = (v = this._option) === null || v === void 0 ? void 0 : v.networkConfig) ===
                null || g === void 0
                ? void 0
                : g.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: u && !_ ? h.time : 0,
            previousDerivedFields: "derived_fields" in h && u ? h.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: h.full_checksum,
            partialUserMatchSinceTime: _ ? 0 : h.time,
          });
        }
        return this._fetchEvaluations(o, h, b, c);
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
        const p = (0, r._resolveDeltasResponse)(i, d.body);
        return typeof p == "string"
          ? p
          : this._fetchEvaluations(
              o,
              i,
              Object.assign(Object.assign(Object.assign({}, c), p), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((Nr.default = n), Nr);
}
var da = {},
  zd;
function ow() {
  if (zd) return da;
  ((zd = 1),
    Object.defineProperty(da, "__esModule", { value: !0 }),
    (da._makeParamStoreGetter = void 0));
  const e = Dt(),
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
  function o(l, d, p) {
    return l.getFeatureGate(d.gate_name, r(p) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function i(l, d, p, v) {
    const f = l.getDynamicConfig(d.config_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function c(l, d, p, v) {
    const f = l.getExperiment(d.experiment_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function s(l, d, p, v) {
    const f = l.getLayer(d.layer_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function u(l, d, p) {
    return (v, g) => {
      if (d == null) return g;
      const f = d[v];
      if (f == null || (g != null && (0, e._typeOf)(g) !== f.param_type)) return g;
      switch (f.ref_type) {
        case "static":
          return a(f);
        case "gate":
          return o(l, f, p);
        case "dynamic_config":
          return i(l, f, g, p);
        case "experiment":
          return c(l, f, g, p);
        case "layer":
          return s(l, f, g, p);
        default:
          return g;
      }
    };
  }
  return ((da._makeParamStoreGetter = u), da);
}
var hr = {},
  $d;
function iw() {
  if ($d) return hr;
  $d = 1;
  var e =
    (hr && hr.__awaiter) ||
    function (a, o, i, c) {
      function s(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(g) {
          try {
            v(c.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(c.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? u(g.value) : s(g.value).then(d, p);
        }
        v((c = c.apply(a, o || [])).next());
      });
    };
  (Object.defineProperty(hr, "__esModule", { value: !0 }),
    (hr.StatsigEvaluationsDataAdapter = void 0));
  const t = Dt(),
    r = Ih();
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
  return ((hr.StatsigEvaluationsDataAdapter = n), hr);
}
var Vd;
function sw() {
  if (Vd) return Lr;
  Vd = 1;
  var e =
    (Lr && Lr.__awaiter) ||
    function (c, s, u, l) {
      function d(p) {
        return p instanceof u
          ? p
          : new u(function (v) {
              v(p);
            });
      }
      return new (u || (u = Promise))(function (p, v) {
        function g(b) {
          try {
            h(l.next(b));
          } catch (_) {
            v(_);
          }
        }
        function f(b) {
          try {
            h(l.throw(b));
          } catch (_) {
            v(_);
          }
        }
        function h(b) {
          b.done ? p(b.value) : d(b.value).then(g, f);
        }
        h((l = l.apply(c, s || [])).next());
      });
    };
  Object.defineProperty(Lr, "__esModule", { value: !0 });
  const t = Dt(),
    r = nw(),
    n = Ih(),
    a = ow(),
    o = iw();
  let i = class nc extends t.StatsigClientBase {
    static instance(s) {
      const u = (0, t._getStatsigGlobal)().instance(s);
      return u instanceof nc
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new nc(s ?? "", {}));
    }
    constructor(s, u, l = null) {
      var d, p;
      t.SDKType._setClientType(s, "javascript-client");
      const v = new n.default(l, (f) => {
        this.$emt(f);
      });
      (super(
        s,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new o.StatsigEvaluationsDataAdapter(),
        v,
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
        (this._network = v),
        (this._user = this._configureUser(u, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const g = (p = l?.plugins) !== null && p !== void 0 ? p : [];
      for (const f of g) f.bind(this);
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
        const p = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(p, l);
      }
    }
    _updateUserSyncImpl(s, u, l) {
      var d;
      const p = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
      const v = this.dataAdapter.getDataSync(this._user);
      (v == null && p.push("NoCachedValues"),
        this._store.setValues(v, this._user),
        this._finalizeUpdate(v));
      const g = u?.disableBackgroundCacheRefresh;
      return g === !0 || (g == null && v?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            p,
          )
        : (this._runPostUpdate(v ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            p,
          ));
    }
    updateUserAsync(s, u) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, u);
        } catch (d) {
          const p = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(p, l);
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
        let p = !1;
        (d != null &&
          (t.Diagnostics._markInitProcessStart(this._sdkKey),
          (p = this._store.setValues(d, this._user)),
          t.Diagnostics._markInitProcessEnd(this._sdkKey, { success: p })),
          this._finalizeUpdate(d),
          p ||
            (this._errorBoundary.attachErrorIfNoneExists(
              t.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          t.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            p,
            this._store.getCurrentSourceDetails(),
          ));
        const v = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          p,
          this._store.getSource(),
          v,
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
      var l, d, p;
      const v = (0, t._normalizeUser)(s, u),
        g = (l = v.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      if (g) {
        const f =
          (p = (d = this.storageProvider).isReadyResolver) === null || p === void 0
            ? void 0
            : p.call(d);
        f
          ? f.then(
              () => t.StableID.setOverride(g, this._sdkKey),
              () => t.StableID.setOverride(g, this._sdkKey),
            )
          : t.StableID.setOverride(g, this._sdkKey);
      }
      return (
        Object.keys(this._possibleFirstTouchMetadata).length > 0 &&
          (v.analyticsOnlyMetadata = Object.assign(
            Object.assign({}, v.analyticsOnlyMetadata),
            this._possibleFirstTouchMetadata,
          )),
        v
      );
    }
    _getFeatureGateImpl(s, u) {
      var l, d;
      const { result: p, details: v } = this._store.getGate(s),
        g = (0, t._makeFeatureGate)(s, v, p),
        f =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, g, this._user, u),
        h = f ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, h, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "gate_evaluation", gate: h }),
        h
      );
    }
    _getDynamicConfigImpl(s, u) {
      var l, d;
      const { result: p, details: v } = this._store.getConfig(s),
        g = (0, t._makeDynamicConfig)(s, v, p),
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, g, this._user, u),
        h = f ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, h, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: h }),
        h
      );
    }
    _getExperimentImpl(s, u) {
      var l, d, p, v;
      const { result: g, details: f } = this._store.getConfig(s),
        h = (0, t._makeExperiment)(s, f, g);
      h.__evaluation != null &&
        (h.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = h.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const b =
          (v =
            (p = this.overrideAdapter) === null || p === void 0
              ? void 0
              : p.getExperimentOverride) === null || v === void 0
            ? void 0
            : v.call(p, h, this._user, u),
        _ = b ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, _, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: _ }),
        _
      );
    }
    _getConfigListImpl() {
      return this._store.getConfigList();
    }
    _getLayerImpl(s, u) {
      var l, d, p;
      const { result: v, details: g } = this._store.getLayer(s),
        f = (0, t._makeLayer)(s, g, v),
        h =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, f, this._user, u);
      u?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const b = (0, t._mergeOverride)(
        f,
        h,
        (p = h?.__value) !== null && p !== void 0 ? p : f.__value,
        (_) => {
          u?.disableExposureLog ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                _,
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
      const { result: p, details: v } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const g = {
          name: s,
          details: v,
          __configuration: p,
          get: (0, a._makeParamStoreGetter)(this, p, u),
        },
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, g, u);
      return (
        f != null &&
          ((g.__configuration = f.config),
          (g.details = f.details),
          (g.get = (0, a._makeParamStoreGetter)(this, f.config, u))),
        g
      );
    }
  };
  return ((Lr.default = i), Lr);
}
var Gd;
function cw() {
  return (
    Gd ||
      ((Gd = 1),
      (function (e) {
        var t =
            (pr && pr.__createBinding) ||
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
            (pr && pr.__exportStar) ||
            function (i, c) {
              for (var s in i)
                s !== "default" && !Object.prototype.hasOwnProperty.call(c, s) && t(c, i, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Dt(),
          a = sw();
        ((e.StatsigClient = a.default), r(Dt(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(pr)),
    pr
  );
}
var vt = cw(),
  Os = { exports: {} },
  Hd;
function uw() {
  return (
    Hd ||
      ((Hd = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function a(s, u, l) {
          ((this.fn = s), (this.context = u), (this.once = l || !1));
        }
        function o(s, u, l, d, p) {
          if (typeof l != "function") throw new TypeError("The listener must be a function");
          var v = new a(l, d || s, p),
            g = r ? r + u : u;
          return (
            s._events[g]
              ? s._events[g].fn
                ? (s._events[g] = [s._events[g], v])
                : s._events[g].push(v)
              : ((s._events[g] = v), s._eventsCount++),
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
            for (var p = 0, v = d.length, g = new Array(v); p < v; p++) g[p] = d[p].fn;
            return g;
          }),
          (c.prototype.listenerCount = function (u) {
            var l = r ? r + u : u,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (c.prototype.emit = function (u, l, d, p, v, g) {
            var f = r ? r + u : u;
            if (!this._events[f]) return !1;
            var h = this._events[f],
              b = arguments.length,
              _,
              y;
            if (h.fn) {
              switch ((h.once && this.removeListener(u, h.fn, void 0, !0), b)) {
                case 1:
                  return (h.fn.call(h.context), !0);
                case 2:
                  return (h.fn.call(h.context, l), !0);
                case 3:
                  return (h.fn.call(h.context, l, d), !0);
                case 4:
                  return (h.fn.call(h.context, l, d, p), !0);
                case 5:
                  return (h.fn.call(h.context, l, d, p, v), !0);
                case 6:
                  return (h.fn.call(h.context, l, d, p, v, g), !0);
              }
              for (y = 1, _ = new Array(b - 1); y < b; y++) _[y - 1] = arguments[y];
              h.fn.apply(h.context, _);
            } else {
              var k = h.length,
                w;
              for (y = 0; y < k; y++)
                switch ((h[y].once && this.removeListener(u, h[y].fn, void 0, !0), b)) {
                  case 1:
                    h[y].fn.call(h[y].context);
                    break;
                  case 2:
                    h[y].fn.call(h[y].context, l);
                    break;
                  case 3:
                    h[y].fn.call(h[y].context, l, d);
                    break;
                  case 4:
                    h[y].fn.call(h[y].context, l, d, p);
                    break;
                  default:
                    if (!_) for (w = 1, _ = new Array(b - 1); w < b; w++) _[w - 1] = arguments[w];
                    h[y].fn.apply(h[y].context, _);
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
          (c.prototype.removeListener = function (u, l, d, p) {
            var v = r ? r + u : u;
            if (!this._events[v]) return this;
            if (!l) return (i(this, v), this);
            var g = this._events[v];
            if (g.fn) g.fn === l && (!p || g.once) && (!d || g.context === d) && i(this, v);
            else {
              for (var f = 0, h = [], b = g.length; f < b; f++)
                (g[f].fn !== l || (p && !g[f].once) || (d && g[f].context !== d)) && h.push(g[f]);
              h.length ? (this._events[v] = h.length === 1 ? h[0] : h) : i(this, v);
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
      })(Os)),
    Os.exports
  );
}
var lw = uw();
const dw = ir(lw);
function Kd(e, t) {
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
      ? Kd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Kd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ho = "@all-features",
  fw = (function () {
    function e() {
      (ge(this, e), C(this, "eventToValue", new Map()), (this.emitter = new dw()));
    }
    return be(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, o) {
          var i = this,
            c = a(r, Qt(Qt({}, o), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, c);
          var s = function () {
            var l = a(r, Qt(Qt({}, o), {}, { fireGateExposure: !1 })),
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
            l = i(r, n, a, Qt(Qt({}, c), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(o) === void 0 && this.eventToValue.set(o, l);
          var d = function () {
            var v = i(r, n, a, Qt(Qt({}, c), {}, { fireExperimentExposure: !1 })),
              g = s.eventToValue.get(o);
            g !== v && (s.eventToValue.set(o, v), o(v));
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
            this.emitter.on(ho, r),
            function () {
              n.emitter.off(ho, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(ho),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== ho;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  vw = "fedramp-moderate";
function pw() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === vw;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Ic = (function (e) {
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
  Ca = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  $a = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  hw = [
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
function Wd(e, t) {
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
function ac(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var go = function (t) {
    return ac({ perimeter: pw() ? $a.FEDRAMP_MODERATE : $a.COMMERCIAL }, t);
  },
  fa = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var o = function (p, v) {
      var g = J(p, 1),
        f = g[0],
        h = J(v, 1),
        b = h[0];
      return f.localeCompare(b);
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
  Jd = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  gw = function (t) {
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
    var p = te(t, hw);
    return ac(
      ac({}, p),
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
  bw = Object.entries(Ic).map(function (e) {
    var t = J(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  jh = function (t) {
    var r,
      n,
      a,
      o = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = bw.find(function (i) {
            var c = J(i, 1),
              s = c[0];
            return o.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Ic.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  oc = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  Yd = (function () {
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
            var c = Array.isArray(n) ? "array" : De(n),
              s = Array.isArray(i) ? "array" : De(i);
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
                jh(r.details),
                oc(
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
  Xd = (function () {
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
              : n == null || (De(i) === De(n) && Array.isArray(n) === Array.isArray(i))
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
                jh(r.details),
                function (l, d) {
                  return r.get(d);
                },
                oc(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                oc(
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
  Kr = "0.0.0-development";
function _w(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Dh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Dh = function () {
    return !!e;
  })();
}
function mw(e, t, r) {
  if (Dh()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && za(a, r.prototype), a);
}
function ic(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (ic = function (n) {
      if (n === null || !_w(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return mw(n, arguments, X(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        za(a, n)
      );
    }),
    ic(e)
  );
}
function yw(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, Th() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Th() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Th = function () {
    return !!e;
  })();
}
var Zd = (function (e) {
  function t(r) {
    return (ge(this, t), yw(this, t, [r]));
  }
  return (Xe(t, e), be(t));
})(ic(Error));
function Qd(e, t) {
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
function ww(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Qd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var kw = 5e3,
  Ow = "https://api.atlassian.com/flags",
  Sw = "https://api.stg.atlassian.com/flags",
  Ew = "https://api.dev.atlassian.com/flags",
  xw = "https://api.stg.atlassian-us-gov-mod.com/flags",
  Cw = "https://api.atlassian-us-gov-mod.com/flags",
  Rw = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  Pw = "oasis-stg.com/flags",
  Aw = "atlassian-isolated.net/flags",
  Iw = "/gateway/api/flags",
  Ss = (function () {
    function e() {
      ge(this, e);
    }
    return be(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = he(
            q.mark(function n(a) {
              var o, i;
              return q.wrap(
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
            q.mark(function n(a, o, i) {
              var c;
              return q.wrap(
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
            q.mark(function n(a) {
              var o;
              return q.wrap(function (c) {
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
                        new Zd(
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
                      throw new Zd("Unexpected 204 response");
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
            q.mark(function n(a) {
              var o;
              return q.wrap(function (c) {
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
          if (n) return Iw;
          if (a === $a.FEDRAMP_MODERATE)
            switch (r) {
              case Ca.Production:
                return Cw;
              case Ca.Staging:
                return xw;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === $a.COMMERCIAL)
            switch (r) {
              case Ca.Development:
                return Ew;
              case Ca.Staging:
                var i = this.getApiUrl(o);
                return i !== null ? i : Sw;
              default:
                var c = this.getApiUrl(o);
                return c !== null ? c : Ow;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = he(
            q.mark(function n(a, o, i, c) {
              var s, u, l, d, p;
              return q.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = e.getBaseUrl(
                            i.environment,
                            i.useGatewayURL,
                            i.perimeter,
                            i.isolationContextId,
                          )),
                          (u = i.fetchTimeoutMs || kw),
                          AbortSignal.timeout
                            ? (l = AbortSignal.timeout(u))
                            : AbortController &&
                              ((d = new AbortController()),
                              (l = d.signal),
                              setTimeout(function () {
                                return d.abort();
                              }, u)),
                          (g.next = 5),
                          fetch(
                            "".concat(s).concat(a),
                            ww(
                              {
                                method: o,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Kr,
                                  "X-API-KEY": i.apiKey,
                                },
                                signal: l,
                              },
                              c && { body: JSON.stringify(c) },
                            ),
                          )
                        );
                      case 5:
                        return ((p = g.sent), (g.next = 8), this.handleResponseError(p));
                      case 8:
                        return ((g.next = 10), this.extractResponseBody(p));
                      case 10:
                        return g.abrupt("return", g.sent);
                      case 11:
                      case "end":
                        return g.stop();
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
          if (n === void 0) return r ? Rw.replace("%s", r) : null;
          var a = n.protocol,
            o = n.hostname,
            i = o.match(/([^.]+)\.oasis-stg\.com$/);
          if (i) return "".concat(a, "//api.").concat(i[1], ".").concat(Pw);
          var c = o.match(/([^.]+)\.atlassian-isolated\.net$/);
          return c ? "".concat(a, "//api.").concat(c[1], ".").concat(Aw) : null;
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
function va(e) {
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
function jw(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, Mh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Mh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Mh = function () {
    return !!e;
  })();
}
function Dw(e, t, r, n) {
  var a = Go(X(e.prototype), t, r);
  return typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var Tw = (function (e) {
  function t() {
    var r;
    return (
      ge(this, t),
      (r = jw(this, t, ["NoFetchDataAdapter", "nofetch"])),
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
                stableID: vt.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = he(
            q.mark(function a(o, i) {
              return q.wrap(function (s) {
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
            q.mark(function a(o, i, c) {
              return q.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return u.abrupt(
                          "return",
                          this.bootstrapResult &&
                            va(
                              va({}, this.bootstrapResult),
                              {},
                              { fullUserHash: vt._getFullUserHash(i) },
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
            va(va({}, this.bootstrapResult), {}, { fullUserHash: vt._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = he(
            q.mark(function a(o, i, c) {
              return q.wrap(function (u) {
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
          var a = vt._getStorageKey(this._getSdkKey(), n);
          return "".concat(vt.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(a);
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
          Dw(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = va({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(vt.DataAdapterCore);
function tf(e, t) {
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
function Be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : tf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Mw(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Lw(e)) || t) {
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
function Lw(e, t) {
  if (e) {
    if (typeof e == "string") return rf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? rf(e, t)
          : void 0
    );
  }
}
function rf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Es = "LocalOverride:Recognized",
  Nw = "STATSIG_OVERRIDES",
  nf = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Br = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  tt = function (t, r) {
    return r + ":" + t;
  },
  Bw = (function () {
    function e(t) {
      (ge(this, e),
        (this._overrides = Br()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return be(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Br();
          } catch {
            return Br();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Br(), n = arguments.length, a = new Array(n), o = 0; o < n; o++)
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
                p = J(l[u], 2),
                v = p[0],
                g = p[1];
              r.gates[v] = g;
            }
            for (
              var f = 0, h = Object.entries((b = s.configs) !== null && b !== void 0 ? b : {});
              f < h.length;
              f++
            ) {
              var b,
                _ = J(h[f], 2),
                y = _[0],
                k = _[1];
              r.configs[y] = k;
            }
            for (
              var w = 0, S = Object.entries((x = s.layers) !== null && x !== void 0 ? x : {});
              w < S.length;
              w++
            ) {
              var x,
                A = J(S[w], 2),
                j = A[0],
                P = A[1];
              r.layers[j] = P;
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
            this.parseStoredOverrides(nf),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(nf);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var o = a[n],
              i = new Set(Object.keys(o)),
              c = Mw(i),
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
          var n = Be(Be({}, Br()), r);
          this._djb2Map.clear();
          for (var a = 0, o = Object.entries(n); a < o.length; a++)
            for (
              var i = J(o[a], 2), c = i[0], s = i[1], u = 0, l = Object.entries(s);
              u < l.length;
              u++
            ) {
              var d = J(l[u], 2),
                p = d[0],
                v = d[1];
              this._djb2Map.set(tt(et._DJB2(p), c), v);
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
            : Be(Be({}, r), {}, { value: o, details: Be(Be({}, r.details), {}, { reason: Es }) });
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
          this._overrides = Br();
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
            : Be(
                Be({}, r),
                {},
                {
                  __value: o,
                  get: et._makeTypedGet(r.name, o),
                  details: Be(Be({}, r.details), {}, { reason: Es }),
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
            : Be(
                Be({}, r),
                {},
                {
                  value: o,
                  get: et._makeTypedGet(r.name, o),
                  details: Be(Be({}, r.details), {}, { reason: Es }),
                },
              );
        },
      },
    ]);
  })(),
  Fw = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function af(e, t) {
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
function er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? af(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : af(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var of = "client-default-key",
  qw = "https://xp.atlassian.com/v1/rgstr",
  Uw = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? Nw : n,
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
        C(this, "subscriptions", new fw()),
        C(this, "dataAdapter", new Tw()),
        C(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = o || new Bw(a)));
    }
    return be(e, [
      {
        key: "initialize",
        value: (function () {
          var t = he(
            q.mark(function n(a, o, i) {
              var c = this,
                s,
                u;
              return q.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = go(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          fa(s, this.initOptions) ||
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
                              var p = performance.now(),
                                v = p - u;
                              c.fireClientEvent(u, v, "initialize", c.initCompleted, s.apiKey);
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
            q.mark(function n(a, o, i, c) {
              var s = this,
                u,
                l;
              return q.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (((u = go(a)), !this.initPromise)) {
                          p.next = 4;
                          break;
                        }
                        return (
                          fa(u, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          p.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (l = performance.now()),
                          (this.initOptions = u),
                          (this.provider = o),
                          this.provider.setClientVersion(Kr),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(u, o, i, c)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var v = performance.now(),
                                g = v - l;
                              s.fireClientEvent(
                                l,
                                g,
                                "initializeWithProvider",
                                s.initCompleted,
                                o.getApiKey ? o.getApiKey() : void 0,
                              );
                            })),
                          p.abrupt("return", this.initPromise)
                        );
                      case 11:
                      case "end":
                        return p.stop();
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
                var l = er(
                  {
                    targetApp: c.initOptions.targetApp,
                    clientVersion: Kr,
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
                c.initOptions.environment !== Ca.Production &&
                  console.error("Analytics web client promise did not resolve", u);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = he(
            q.mark(function n(a, o, i) {
              var c = this,
                s,
                u,
                l,
                d = arguments;
              return q.wrap(
                function (v) {
                  for (;;)
                    switch ((v.prev = v.next)) {
                      case 0:
                        if (
                          ((s = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (u = go(a)),
                          !this.initPromise)
                        ) {
                          v.next = 5;
                          break;
                        }
                        return (
                          fa(u, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          v.abrupt("return", this.initPromise)
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
                              var g = performance.now(),
                                f = g - l;
                              c.fireClientEvent(l, f, "initializeFromValues", c.initCompleted);
                            })),
                          v.abrupt("return", this.initPromise)
                        );
                      case 10:
                      case "end":
                        return v.stop();
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
            q.mark(function n(a, o, i) {
              var c, s;
              return q.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (c = go(a)),
                          (s = function () {
                            return Ss.fetchExperimentValues(c, o, i).then(function (p) {
                              var v = p.experimentValues,
                                g = p.customAttributes;
                              return { experimentValues: v, customAttributesFromFetch: g };
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
            q.mark(function n(a, o) {
              var i = this;
              return q.wrap(
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
            q.mark(function n(a, o) {
              var i,
                c,
                s = arguments;
              return q.wrap(
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
            q.mark(function n() {
              return q.wrap(
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
            return Yd.fromExperiment(
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
              new Yd(r, {}, "", { time: Date.now(), reason: Ic.Error })
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
          return fa(this.currentIdentifiers, r) && fa(this.currentAttributes, n);
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
                p = d === void 0 ? !0 : d;
              p && i.manuallyLogExperimentExposure(r);
              try {
                o(l);
              } catch (v) {
                console.warn(
                  "Error calling callback for experiment ".concat(r, " with value ").concat(l),
                  v,
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
            q.mark(function n(a, o, i) {
              var c, s, u, l, d, p, v, g;
              return q.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (c = er({}, a)),
                          (h.prev = 1),
                          (l = Ss.fetchClientSdk(a).then(function (b) {
                            return (c.sdkKey = b.clientSdkKey);
                          })),
                          (d = Ss.fetchExperimentValues(a, o, i)),
                          (h.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((p = h.sent),
                          (v = J(p, 2)),
                          (g = v[1]),
                          (s = g.experimentValues),
                          (u = g.customAttributes),
                          (h.next = 20));
                        break;
                      case 13:
                        return (
                          (h.prev = 13),
                          (h.t0 = h.catch(1)),
                          h.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to fetch the Feature Gates client values, error: ".concat(
                                h.t0 === null || h.t0 === void 0 ? void 0 : h.t0.message,
                              ),
                            ),
                          console.warn("Initialising Statsig client without values"),
                          (h.next = 19),
                          this.initFromValues(c, o, i)
                        );
                      case 19:
                        throw h.t0;
                      case 20:
                        return h.abrupt("return", this.initFromValues(c, o, u, s));
                      case 21:
                      case "end":
                        return h.stop();
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
            q.mark(function n(a, o, i, c) {
              var s, u, l, d, p, v, g, f;
              return q.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (s = er(er({}, a), {}, { disableCurrentPageLogging: !0 })),
                          (b.prev = 1),
                          (b.next = 4),
                          o.setProfile(a, i, c)
                        );
                      case 4:
                        return (
                          (d = o.getClientSdkKey().then(function (_) {
                            return (s.sdkKey = _);
                          })),
                          (p = o.getExperimentValues()),
                          (b.next = 8),
                          Promise.all([d, p])
                        );
                      case 8:
                        ((v = b.sent),
                          (g = J(v, 2)),
                          (f = g[1]),
                          (u = f.experimentValues),
                          (l = f.customAttributesFromFetch),
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
            q.mark(function n(a, o, i) {
              var c,
                s,
                u,
                l,
                d,
                p,
                v,
                g = arguments;
              return q.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (s = g.length > 3 && g[3] !== void 0 ? g[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = o),
                          (this.currentAttributes = i),
                          (u = gw(a)),
                          u.sdkKey || (u.sdkKey = of),
                          ((c = u.networkConfig) !== null && c !== void 0 && c.logEventUrl) ||
                            (u.networkConfig = er(
                              er({}, u.networkConfig),
                              {},
                              { logEventUrl: qw },
                            )),
                          u.perimeter === $a.FEDRAMP_MODERATE && (u.disableLogging = !0),
                          (l = u.sdkKey),
                          (d = u.environment),
                          u.updateUserCompletionCallback,
                          u.perimeter,
                          (p = te(u, Fw)),
                          (this.user = Jd(o, i)),
                          (v = er(
                            er({}, p),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: vt.LogEventCompressionMode.Forced,
                            },
                          )),
                          o.stableId
                            ? vt.StableID.setOverride(o.stableId, l)
                            : (v.disableStableID = !0),
                          (h.prev = 12),
                          (this.statsigClient = new vt.StatsigClient(l, this.user, v)),
                          this.dataAdapter.setBootstrapData(s),
                          (h.next = 17),
                          this.statsigClient.initializeAsync()
                        );
                      case 17:
                        h.next = 29;
                        break;
                      case 19:
                        return (
                          (h.prev = 19),
                          (h.t0 = h.catch(12)),
                          h.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to initialise the Statsig client, error: ".concat(
                                h.t0 === null || h.t0 === void 0 ? void 0 : h.t0.message,
                              ),
                            ),
                          console.warn(
                            "Initialising Statsig client with default sdk key and without values",
                          ),
                          (this.statsigClient = new vt.StatsigClient(of, this.user, v)),
                          this.dataAdapter.setBootstrapData(),
                          (h.next = 27),
                          this.statsigClient.initializeAsync()
                        );
                      case 27:
                        throw ((this.initWithDefaults = !0), h.t0);
                      case 29:
                      case "end":
                        return h.stop();
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
            q.mark(function n(a, o, i) {
              var c = this,
                s,
                u,
                l;
              return q.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if ((this.assertInitialized(this.statsigClient), this.initPromise)) {
                          p.next = 3;
                          break;
                        }
                        throw new Error(
                          "The client must be initialized before you can update the user.",
                        );
                      case 3:
                        if (!this.isCurrentUser(o, i)) {
                          p.next = 5;
                          break;
                        }
                        return p.abrupt("return", this.initPromise);
                      case 5:
                        return (
                          (s = this.initPromise),
                          (p.prev = 6),
                          (p.next = 9),
                          this.initPromise
                        );
                      case 9:
                        p.next = 13;
                        break;
                      case 11:
                        ((p.prev = 11), (p.t0 = p.catch(6)));
                      case 13:
                        return (
                          (u = a()),
                          (l = this.updateStatsigClientUser(u, o, i)),
                          (this.initPromise = l.catch(
                            he(
                              q.mark(function v() {
                                return q.wrap(function (f) {
                                  for (;;)
                                    switch ((f.prev = f.next)) {
                                      case 0:
                                        if (((c.initPromise = s), !c.provider)) {
                                          f.next = 4;
                                          break;
                                        }
                                        return (
                                          (f.next = 4),
                                          c.provider.setProfile(
                                            c.initOptions,
                                            c.currentIdentifiers,
                                            c.currentAttributes,
                                          )
                                        );
                                      case 4:
                                      case "end":
                                        return f.stop();
                                    }
                                }, v);
                              }),
                            ),
                          )),
                          p.abrupt("return", l)
                        );
                      case 17:
                      case "end":
                        return p.stop();
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
            q.mark(function n(a, o, i) {
              var c, s, u, l, d, p, v, g, f;
              return q.wrap(
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
                        ((u = b.sent), (l = Jd(o, u.customAttributesFromFetch)), (b.next = 13));
                        break;
                      case 8:
                        throw (
                          (b.prev = 8),
                          (b.t0 = b.catch(1)),
                          (v = b.t0 instanceof Error ? b.t0.message : JSON.stringify(b.t0)),
                          (d = (p = this.initOptions).updateUserCompletionCallback) === null ||
                            d === void 0 ||
                            d.call(p, !1, v),
                          b.t0
                        );
                      case 13:
                        if (
                          ((g = !0),
                          (f = null),
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
                        ((b.prev = 23), (b.t1 = b.catch(15)), (g = !1), (f = String(b.t1)));
                      case 27:
                        if (
                          ((c = this.initOptions) === null ||
                            c === void 0 ||
                            (s = c.updateUserCompletionCallback) === null ||
                            s === void 0 ||
                            s.call(c, g, f),
                          !g)
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
          return Kr;
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
            return Xd.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !o }));
          } catch (i) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: i,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Xd.fromLayer(vt._makeLayer(r, { reason: "Error" }, null))
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
C(H, "client", new Uw());
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
var sc = H;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = H;
  else {
    var bo, xs;
    sc = window.__FEATUREGATES_JS__;
    var sf =
      ((bo = sc) === null || bo === void 0 || (xs = bo.getPackageVersion) === null || xs === void 0
        ? void 0
        : xs.call(bo)) || "4.10.0 or earlier";
    if (sf !== Kr) {
      var zw = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(sf, " when module version ")
        .concat(Kr, " was loading.");
      console.warn(zw);
    }
  }
var Fr,
  qr,
  $w =
    (globalThis == null ||
    (Fr = globalThis.process) === null ||
    Fr === void 0 ||
    (Fr = Fr.env) === null ||
    Fr === void 0
      ? void 0
      : Fr.JEST_WORKER_ID) !== void 0,
  Vw =
    !$w &&
    (globalThis == null ||
    (qr = globalThis.process) === null ||
    qr === void 0 ||
    (qr = qr.env) === null ||
    qr === void 0
      ? void 0
      : qr.NODE_ENV) !== "production",
  Gw = function () {
    var t;
    Vw && (t = console).debug.apply(t, arguments);
  },
  jc = {},
  Hw = "@atlaskit/platform-feature-flags",
  ja = "__PLATFORM_FEATURE_FLAGS__",
  Lh = typeof process < "u" && typeof jc < "u",
  Kw = Lh ? jc.ENABLE_PLATFORM_FF === "true" : !1,
  Ww = Lh ? jc.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  Jw = Kw || Ww,
  Yw = { booleanResolver: void 0 },
  Da = typeof window < "u" ? window : globalThis;
Da[ja] = Da[ja] || Yw;
function Xw(e) {
  if (Jw)
    return (
      Gw(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        Hw,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = Da[ja]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = Da[ja]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return sc.checkGate(e);
    var a = (n = Da[ja]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function Sr(e) {
  return Xw(e);
}
var Zw = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Qw = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  e1 = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  cf = m.memo(function (t) {
    var r = t,
      n = r.color,
      a = n === void 0 ? "currentColor" : n,
      o = r.testId,
      i = r.label,
      c = r.LEGACY_primaryColor,
      s = r.LEGACY_secondaryColor,
      u = r.LEGACY_size,
      l = r.LEGACY_fallbackIcon,
      d = r.dangerouslySetGlyph,
      p = r.shouldScale,
      v = r.LEGACY_margin,
      g = r.spacing,
      f = g === void 0 ? "none" : g,
      h = r.name,
      b = d ? { __html: d } : void 0;
    if (l && !Sr("platform-visual-refresh-icons"))
      return m.createElement(l, {
        primaryColor: c ?? a,
        secondaryColor: s,
        size: u,
        label: i,
        testId: o,
        UNSAFE_margin: v,
      });
    var _ = "medium";
    if ("size" in t && t.size !== void 0) {
      if (typeof t.size == "string") _ = t.size === "small" || t.size === "medium" ? t.size : _;
      else if (h) {
        var y = t.size(h);
        _ = y === "small" || y === "medium" ? y : _;
      }
    }
    var k = 16,
      w = e1[_][f],
      S = k + 2 * w;
    return m.createElement(
      "span",
      {
        "data-testid": o,
        role: i ? "img" : void 0,
        "aria-label": i || void 0,
        "aria-hidden": i ? void 0 : !0,
        style: { color: a },
        className: R([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          p && "_1bsb1kw7 _4t3i1kw7",
          _ === "small" && "_vwz4utpp",
        ]),
      },
      m.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - w, " ")
          .concat(0 - w, " ")
          .concat(S, " ")
          .concat(S),
        role: "presentation",
        dangerouslySetInnerHTML: b,
        className: R([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : _ === "small" ? Qw[f] : Zw[f],
        ]),
      }),
    );
  });
const t1 = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: cf, default: cf }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  yi = mc(t1);
var uf;
function r1() {
  if (uf) return sa;
  ((uf = 1), Object.defineProperty(sa, "__esModule", { value: !0 }), (sa.default = void 0));
  var e = r(_t()),
    t = r(yi);
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
  return ((n.displayName = "ChevronLeftIcon"), (sa.default = n), sa);
}
var pa = {};
function lf(e, t) {
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
function df(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? lf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : lf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var n1 = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  ff = m.memo(function (t) {
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
      p = r.height,
      v = r.UNSAFE_margin,
      g = a
        ? { dangerouslySetInnerHTML: { __html: a } }
        : { children: n ? m.createElement(n, { role: "presentation" }) : null },
      f = d && p ? { width: d + "px", height: p + "px" } : null;
    return m.createElement(
      "span",
      Z(
        {
          "data-testid": u,
          "data-vc": "icon-".concat(u),
          role: l ? "img" : void 0,
          "aria-label": l || void 0,
          "aria-hidden": l ? void 0 : !0,
          style: df(
            df({}, f),
            {},
            { "--icon-primary-color": i, "--icon-secondary-color": c, margin: v },
          ),
        },
        g,
        {
          className: R([
            "_1e0c1o8l _1o9zidpf _vyfuvuon _vwz4kb7n _1szv15vq _1tly15vq _rzyw1osq _17jb1osq _1ksvoz0e _3se1x1jp _re2rglyw _1veoyfq0 _1kg81r31",
            "_jcxd1r8n _gq0g1onz _1trkwc43",
            i === c && "_18hbwc43",
            c === "transparent" && "_4fyi1j28",
            s && n1[s],
          ]),
        },
      ),
    );
  });
const a1 = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: ff, default: ff }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Nh = mc(a1);
var vf;
function o1() {
  if (vf) return pa;
  ((vf = 1), Object.defineProperty(pa, "__esModule", { value: !0 }), (pa.default = void 0));
  var e = r(_t()),
    t = Nh;
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
  return ((n.displayName = "ChevronLeftLargeIcon"), (pa.default = n), pa);
}
var pf;
function i1() {
  if (pf) return ia;
  ((pf = 1), Object.defineProperty(ia, "__esModule", { value: !0 }), (ia.default = void 0));
  var e = n(_t()),
    t = n(r1()),
    r = n(o1());
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  const a = (o) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronLeftIcon", LEGACY_fallbackIcon: r.default }, o),
    );
  return ((a.displayName = "ChevronLeftIconMigration"), (ia.default = a), ia);
}
var s1 = i1();
const c1 = ir(s1);
var ha = {},
  ga = {},
  hf;
function u1() {
  if (hf) return ga;
  ((hf = 1), Object.defineProperty(ga, "__esModule", { value: !0 }), (ga.default = void 0));
  var e = r(_t()),
    t = r(yi);
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
  return ((n.displayName = "ChevronRightIcon"), (ga.default = n), ga);
}
var ba = {},
  gf;
function l1() {
  if (gf) return ba;
  ((gf = 1), Object.defineProperty(ba, "__esModule", { value: !0 }), (ba.default = void 0));
  var e = r(_t()),
    t = Nh;
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
  return ((n.displayName = "ChevronRightLargeIcon"), (ba.default = n), ba);
}
var bf;
function d1() {
  if (bf) return ha;
  ((bf = 1), Object.defineProperty(ha, "__esModule", { value: !0 }), (ha.default = void 0));
  var e = n(_t()),
    t = n(u1()),
    r = n(l1());
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  const a = (o) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronRightIcon", LEGACY_fallbackIcon: r.default }, o),
    );
  return ((a.displayName = "ChevronRightIconMigration"), (ha.default = a), ha);
}
var f1 = d1();
const v1 = ir(f1);
var Dc = m.createContext("elevation.surface"),
  p1 = function () {
    return m.useContext(Dc);
  };
Dc.displayName = "SurfaceProvider";
var h1 = [
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
  g1 = ["className"],
  b1 = {
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
  Bh = {
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
  _1 = {
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
  m1 = {
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
  y1 = {
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
  w1 = {
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
  wi = m.forwardRef(function (e, t) {
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
      p = d === void 0 ? s : d,
      v = e.paddingInline,
      g = v === void 0 ? i : v,
      f = e.paddingInlineStart,
      h = f === void 0 ? g : f,
      b = e.paddingInlineEnd,
      _ = b === void 0 ? g : b,
      y = e.style,
      k = e.testId,
      w = e.xcss,
      S = te(e, h1);
    S.className;
    var x = te(S, g1),
      A = m.createElement(
        n,
        Z(
          {
            style: y,
            ref: t,
            className: R([
              "_19itglyw _vchhusvi _r06hglyw",
              o && b1[o],
              o && k1(o) && Bh[o],
              l && _1[l],
              p && m1[p],
              h && y1[h],
              _ && w1[_],
              w,
            ]),
          },
          x,
          { "data-testid": k },
        ),
        a,
      );
    return o ? m.createElement(Dc.Provider, { value: o }, A) : A;
  });
function k1(e) {
  return e in Bh;
}
const Cs = () =>
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
  Fh = (...e) => R(e);
function O1() {
  return {
    css() {
      throw Cs();
    },
    cssMap() {
      throw Cs();
    },
    cx: Fh,
    XCSSProp() {
      throw Cs();
    },
  };
}
var S1 = O1(),
  qh = S1.cx,
  E1 = [
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
  _f = {
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
  mf = {
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
  x1 = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  C1 = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  R1 = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  P1 = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  A1 = { root: "_1e0c1txw _vchhusvi" },
  Yo = m.memo(
    m.forwardRef(function (e, t) {
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
        p = e.direction,
        v = e.wrap,
        g = e.xcss,
        f = te(e, E1);
      return m.createElement(
        n,
        Z({}, f, {
          role: a,
          className: R([
            A1.root,
            c && mf[c],
            s && mf[s],
            c && _f[c],
            u && _f[u],
            o && P1[o],
            p && C1[p],
            i && x1[i],
            v && R1[v],
            g,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
Yo.displayName = "Flex";
var I1 = [
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
  cc = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  j1 = function (t) {
    var r = t.children;
    return m.createElement("span", { className: R([cc.separator]) }, r);
  },
  Co = m.memo(
    m.forwardRef(function (e, t) {
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
        p = e.separator,
        v = e.xcss,
        g = e.testId,
        f = e.role,
        h = e.children,
        b = te(e, I1),
        _ = typeof p == "string" ? m.createElement(j1, null, p) : p,
        y = _
          ? m.Children.toArray(h)
              .filter(Boolean)
              .map(function (k, w) {
                return m.createElement(m.Fragment, { key: w }, p && w > 0 ? _ : null, k);
              })
          : h;
      return m.createElement(
        Yo,
        Z({}, b, {
          as: r,
          role: f,
          alignItems: o,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: c ? "wrap" : void 0,
          xcss: qh(u === "hug" && cc.hug, u === "fill" && cc.fill, v),
          testId: g,
          ref: t,
        }),
        y,
      );
    }),
  );
Co.displayName = "Inline";
var D1 = "Invariant failed";
function T1(e, t) {
  if (!e) throw new Error(D1);
}
var Uh = m.createContext(!1),
  M1 = function () {
    return m.useContext(Uh);
  },
  L1 = Uh.Provider,
  N1 = ["span", "p", "strong", "em"],
  B1 = function (t, r) {
    var n = p1();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return yf.hasOwnProperty(n) ? yf[n] : "color.text";
    }
  },
  Ur = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  F1 = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  q1 = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  U1 = {
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
  yf = {
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
  zh = m.forwardRef(function (e, t) {
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
      p = e.children;
    T1(N1.includes(n));
    var v = M1(),
      g = B1(a, v);
    !s && !v && (s = "medium");
    var f = m.createElement(
      n,
      {
        id: c,
        className: R([
          Ur.root,
          s && F1[s],
          g && U1[g],
          l && Ur.truncation,
          l === 1 && Ur.breakAll,
          o && Ur["textAlign.".concat(o)],
          u && q1[u],
          n === "em" && Ur["as.em"],
          n === "strong" && Ur["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": i,
        ref: t,
      },
      p,
    );
    return v ? f : m.createElement(L1, { value: !0 }, f);
  });
function z1() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var $1 = ["as", "children", "isInset", "testId", "style", "xcss"],
  V1 = ["className"],
  Tc = m.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      o = e.isInset,
      i = e.testId,
      c = e.style,
      s = e.xcss,
      u = te(e, $1);
    u.className;
    var l = te(u, V1);
    return m.createElement(
      n,
      Z({}, l, {
        ref: t,
        className: R([
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
  G1 = [
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
  H1 = ["className"],
  wf = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  $h = m.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      o = a === void 0 ? "button" : a,
      i = e.onClick,
      c = i === void 0 ? Pe : i,
      s = e.interactionName,
      u = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      p = e.testId,
      v = e.xcss,
      g = e.tabIndex,
      f = te(e, G1),
      h = m.useContext(Pc),
      b = m.useCallback(
        function (k, w) {
          (h && h.tracePress(s, k.timeStamp), c(k, w));
        },
        [c, h, s],
      ),
      _ = Zr({
        fn: b,
        action: "clicked",
        componentName: u || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    f.className;
    var y = te(f, H1);
    return m.createElement(
      Tc,
      Z({ as: "button", tabIndex: g ?? (z1() && !n ? 0 : void 0), style: d }, y, {
        type: o,
        onClick: _,
        disabled: n,
        xcss: Fh(wf.root, n && wf.disabled, v),
        testId: p,
        ref: t,
      }),
      r,
    );
  }),
  Rs = {},
  _a = {},
  kf;
function Vh() {
  if (kf) return _a;
  ((kf = 1), Object.defineProperty(_a, "__esModule", { value: !0 }), (_a.bind = void 0));
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
  return ((_a.bind = e), _a);
}
var gr = {},
  Of;
function K1() {
  if (Of) return gr;
  Of = 1;
  var e =
    (gr && gr.__assign) ||
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
  (Object.defineProperty(gr, "__esModule", { value: !0 }), (gr.bindAll = void 0));
  var t = Vh();
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
  return ((gr.bindAll = a), gr);
}
var Sf;
function W1() {
  return (
    Sf ||
      ((Sf = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = Vh();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = K1();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(Rs)),
    Rs
  );
}
var ki = W1(),
  J1 = {
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
    "color.text.danger.bolder": "--ds-text-danger-bolder",
    "color.text.warning": "--ds-text-warning",
    "color.text.warning.inverse": "--ds-text-warning-inverse",
    "color.text.warning.bolder": "--ds-text-warning-bolder",
    "color.text.success": "--ds-text-success",
    "color.text.success.bolder": "--ds-text-success-bolder",
    "color.text.discovery": "--ds-text-discovery",
    "color.text.discovery.bolder": "--ds-text-discovery-bolder",
    "color.text.information": "--ds-text-information",
    "color.text.information.bolder": "--ds-text-information-bolder",
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
    "color.background.danger.subtler": "--ds-background-danger-subtler",
    "color.background.danger.subtler.hovered": "--ds-background-danger-subtler-hovered",
    "color.background.danger.subtler.pressed": "--ds-background-danger-subtler-pressed",
    "color.background.danger.bold": "--ds-background-danger-bold",
    "color.background.danger.bold.hovered": "--ds-background-danger-bold-hovered",
    "color.background.danger.bold.pressed": "--ds-background-danger-bold-pressed",
    "color.background.warning": "--ds-background-warning",
    "color.background.warning.hovered": "--ds-background-warning-hovered",
    "color.background.warning.pressed": "--ds-background-warning-pressed",
    "color.background.warning.subtler": "--ds-background-warning-subtler",
    "color.background.warning.subtler.hovered": "--ds-background-warning-subtler-hovered",
    "color.background.warning.subtler.pressed": "--ds-background-warning-subtler-pressed",
    "color.background.warning.bold": "--ds-background-warning-bold",
    "color.background.warning.bold.hovered": "--ds-background-warning-bold-hovered",
    "color.background.warning.bold.pressed": "--ds-background-warning-bold-pressed",
    "color.background.success": "--ds-background-success",
    "color.background.success.hovered": "--ds-background-success-hovered",
    "color.background.success.pressed": "--ds-background-success-pressed",
    "color.background.success.subtler": "--ds-background-success-subtler",
    "color.background.success.subtler.hovered": "--ds-background-success-subtler-hovered",
    "color.background.success.subtler.pressed": "--ds-background-success-subtler-pressed",
    "color.background.success.bold": "--ds-background-success-bold",
    "color.background.success.bold.hovered": "--ds-background-success-bold-hovered",
    "color.background.success.bold.pressed": "--ds-background-success-bold-pressed",
    "color.background.discovery": "--ds-background-discovery",
    "color.background.discovery.hovered": "--ds-background-discovery-hovered",
    "color.background.discovery.pressed": "--ds-background-discovery-pressed",
    "color.background.discovery.subtler": "--ds-background-discovery-subtler",
    "color.background.discovery.subtler.hovered": "--ds-background-discovery-subtler-hovered",
    "color.background.discovery.subtler.pressed": "--ds-background-discovery-subtler-pressed",
    "color.background.discovery.bold": "--ds-background-discovery-bold",
    "color.background.discovery.bold.hovered": "--ds-background-discovery-bold-hovered",
    "color.background.discovery.bold.pressed": "--ds-background-discovery-bold-pressed",
    "color.background.information": "--ds-background-information",
    "color.background.information.hovered": "--ds-background-information-hovered",
    "color.background.information.pressed": "--ds-background-information-pressed",
    "color.background.information.subtler": "--ds-background-information-subtler",
    "color.background.information.subtler.hovered": "--ds-background-information-subtler-hovered",
    "color.background.information.subtler.pressed": "--ds-background-information-subtler-pressed",
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
    "radius.xxlarge": "--ds-radius-xxlarge",
    "radius.full": "--ds-radius-full",
    "radius.tile": "--ds-radius-tile",
    "border.width": "--ds-border-width",
    "border.width.selected": "--ds-border-width-selected",
    "border.width.focused": "--ds-border-width-focused",
  },
  Y1 = "ds",
  X1 = "--".concat(Y1, "-token-not-found");
function Ut(e, t) {
  var r = J1[e];
  r || (r = X1);
  var n = t ? "var(".concat(r, ", ").concat(t, ")") : "var(".concat(r, ")");
  return n;
}
var Z1 = function () {
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
  Gh = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: Z1() });
  },
  Q1 = Gh(),
  ek = m.createContext(Gh()),
  tk = function (e) {
    return e.value++;
  },
  rk = function (e) {
    return e ? e.prefix : "";
  },
  nk = function (e) {
    var t = e || Q1,
      r = rk(t),
      n = tk(t),
      a = r + n,
      o = function (i) {
        return a + t.uid(i);
      };
    return { uid: a, gen: o };
  },
  Hh = function () {
    var e = m.useContext(ek),
      t = m.useState(function () {
        return nk(e);
      })[0];
    return t;
  },
  ak = function () {
    var e = Hh().uid;
    return e;
  },
  ok = function () {
    var e = Hh().gen;
    return e;
  },
  Ps,
  Ro = (Ps = O.useId) !== null && Ps !== void 0 ? Ps : void 0;
function Kh() {
  return Ro && Sr("platform-dst-react-18-use-id")
    ? Sr("platform-dst-react-18-use-id-selector-safe")
      ? Ro().replace(/[:«»]/g, "_")
      : Ro()
    : "uid".concat(ak());
}
function ik() {
  if (Ro && Sr("platform-dst-react-18-use-id")) {
    var e = Kh();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return ok();
}
var Mc = function (t) {
    var r = t.children,
      n = t.testId,
      a = t.role,
      o = t.id;
    return m.createElement(
      "span",
      {
        id: o,
        "data-testid": n,
        role: a,
        className: R([
          "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
        ]),
      },
      r,
    );
  },
  sk = {
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
  ck = ["children"];
function uk(e) {
  var t = function (c, s) {
      return c(s);
    },
    r = m.createContext(e);
  function n(i) {
    var c = m.useContext(r),
      s = c || t,
      u = s(i);
    return u;
  }
  function a(i) {
    var c = i.children,
      s = te(i, ck),
      u = n(s);
    return O.createElement(O.Fragment, null, c(u));
  }
  function o(i) {
    var c = m.useContext(r),
      s = i.value || t,
      u = m.useCallback(
        function (l) {
          return s(c, l);
        },
        [c, s],
      );
    return O.createElement(r.Provider, { value: u }, i.children);
  }
  return { Consumer: a, Provider: o, useTheme: n };
}
var lk = uk(function () {
    return { mode: "light" };
  }),
  dk = lk.useTheme;
function fk(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function vk(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var pk = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(vk(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = fk(a);
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
  Re = "-ms-",
  Xo = "-moz-",
  Q = "-webkit-",
  Wh = "comm",
  Lc = "rule",
  Nc = "decl",
  hk = "@import",
  Jh = "@keyframes",
  gk = "@layer",
  bk = Math.abs,
  Oi = String.fromCharCode,
  _k = Object.assign;
function mk(e, t) {
  return Se(e, 0) ^ 45
    ? (((((((t << 2) ^ Se(e, 0)) << 2) ^ Se(e, 1)) << 2) ^ Se(e, 2)) << 2) ^ Se(e, 3)
    : 0;
}
function Yh(e) {
  return e.trim();
}
function yk(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, r) {
  return e.replace(t, r);
}
function uc(e, t) {
  return e.indexOf(t);
}
function Se(e, t) {
  return e.charCodeAt(t) | 0;
}
function Va(e, t, r) {
  return e.slice(t, r);
}
function St(e) {
  return e.length;
}
function Bc(e) {
  return e.length;
}
function _o(e, t) {
  return (t.push(e), e);
}
function wk(e, t) {
  return e.map(t).join("");
}
var Si = 1,
  Qr = 1,
  Xh = 0,
  ze = 0,
  me = 0,
  cn = "";
function Ei(e, t, r, n, a, o, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: o,
    line: Si,
    column: Qr,
    length: i,
    return: "",
  };
}
function ma(e, t) {
  return _k(Ei("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function kk() {
  return me;
}
function Ok() {
  return ((me = ze > 0 ? Se(cn, --ze) : 0), Qr--, me === 10 && ((Qr = 1), Si--), me);
}
function Ke() {
  return ((me = ze < Xh ? Se(cn, ze++) : 0), Qr++, me === 10 && ((Qr = 1), Si++), me);
}
function It() {
  return Se(cn, ze);
}
function Po() {
  return ze;
}
function ro(e, t) {
  return Va(cn, e, t);
}
function Ga(e) {
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
function Zh(e) {
  return ((Si = Qr = 1), (Xh = St((cn = e))), (ze = 0), []);
}
function Qh(e) {
  return ((cn = ""), e);
}
function Ao(e) {
  return Yh(ro(ze - 1, lc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Sk(e) {
  for (; (me = It()) && me < 33; ) Ke();
  return Ga(e) > 2 || Ga(me) > 3 ? "" : " ";
}
function Ek(e, t) {
  for (; --t && Ke() && !(me < 48 || me > 102 || (me > 57 && me < 65) || (me > 70 && me < 97)); );
  return ro(e, Po() + (t < 6 && It() == 32 && Ke() == 32));
}
function lc(e) {
  for (; Ke(); )
    switch (me) {
      case e:
        return ze;
      case 34:
      case 39:
        e !== 34 && e !== 39 && lc(me);
        break;
      case 40:
        e === 41 && lc(e);
        break;
      case 92:
        Ke();
        break;
    }
  return ze;
}
function xk(e, t) {
  for (; Ke() && e + me !== 57; ) if (e + me === 84 && It() === 47) break;
  return "/*" + ro(t, ze - 1) + "*" + Oi(e === 47 ? e : Ke());
}
function Ck(e) {
  for (; !Ga(It()); ) Ke();
  return ro(e, ze);
}
function Rk(e) {
  return Qh(Io("", null, null, null, [""], (e = Zh(e)), 0, [0], e));
}
function Io(e, t, r, n, a, o, i, c, s) {
  for (
    var u = 0,
      l = 0,
      d = i,
      p = 0,
      v = 0,
      g = 0,
      f = 1,
      h = 1,
      b = 1,
      _ = 0,
      y = "",
      k = a,
      w = o,
      S = n,
      x = y;
    h;

  )
    switch (((g = _), (_ = Ke()))) {
      case 40:
        if (g != 108 && Se(x, d - 1) == 58) {
          uc((x += ee(Ao(_), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Ao(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += Sk(g);
        break;
      case 92:
        x += Ek(Po() - 1, 7);
        continue;
      case 47:
        switch (It()) {
          case 42:
          case 47:
            _o(Pk(xk(Ke(), Po()), t, r), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * f:
        c[u++] = St(x) * b;
      case 125 * f:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            h = 0;
          case 59 + l:
            (b == -1 && (x = ee(x, /\f/g, "")),
              v > 0 &&
                St(x) - d &&
                _o(v > 32 ? xf(x + ";", n, r, d - 1) : xf(ee(x, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            x += ";";
          default:
            if ((_o((S = Ef(x, t, r, u, l, a, c, y, (k = []), (w = []), d)), o), _ === 123))
              if (l === 0) Io(x, t, S, S, k, o, d, c, w);
              else
                switch (p === 99 && Se(x, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Io(
                      e,
                      S,
                      S,
                      n && _o(Ef(e, S, S, 0, 0, a, c, y, a, (k = []), d), w),
                      a,
                      w,
                      d,
                      c,
                      n ? k : w,
                    );
                    break;
                  default:
                    Io(x, S, S, S, [""], w, 0, c, w);
                }
        }
        ((u = l = v = 0), (f = b = 1), (y = x = ""), (d = i));
        break;
      case 58:
        ((d = 1 + St(x)), (v = g));
      default:
        if (f < 1) {
          if (_ == 123) --f;
          else if (_ == 125 && f++ == 0 && Ok() == 125) continue;
        }
        switch (((x += Oi(_)), _ * f)) {
          case 38:
            b = l > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            ((c[u++] = (St(x) - 1) * b), (b = 1));
            break;
          case 64:
            (It() === 45 && (x += Ao(Ke())), (p = It()), (l = d = St((y = x += Ck(Po())))), _++);
            break;
          case 45:
            g === 45 && St(x) == 2 && (f = 0);
        }
    }
  return o;
}
function Ef(e, t, r, n, a, o, i, c, s, u, l) {
  for (var d = a - 1, p = a === 0 ? o : [""], v = Bc(p), g = 0, f = 0, h = 0; g < n; ++g)
    for (var b = 0, _ = Va(e, d + 1, (d = bk((f = i[g])))), y = e; b < v; ++b)
      (y = Yh(f > 0 ? p[b] + " " + _ : ee(_, /&\f/g, p[b]))) && (s[h++] = y);
  return Ei(e, t, r, a === 0 ? Lc : c, s, u, l);
}
function Pk(e, t, r) {
  return Ei(e, t, r, Wh, Oi(kk()), Va(e, 2, -2), 0);
}
function xf(e, t, r, n) {
  return Ei(e, t, r, Nc, Va(e, 0, n), Va(e, n + 1, -1), n);
}
function Wr(e, t) {
  for (var r = "", n = Bc(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function Ak(e, t, r, n) {
  switch (e.type) {
    case gk:
      if (e.children.length) break;
    case hk:
    case Nc:
      return (e.return = e.return || e.value);
    case Wh:
      return "";
    case Jh:
      return (e.return = e.value + "{" + Wr(e.children, n) + "}");
    case Lc:
      e.value = e.props.join(",");
  }
  return St((r = Wr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function Ik(e) {
  var t = Bc(e);
  return function (r, n, a, o) {
    for (var i = "", c = 0; c < t; c++) i += e[c](r, n, a, o) || "";
    return i;
  };
}
function jk(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Dk(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var Tk = function (t, r, n) {
    for (var a = 0, o = 0; (a = o), (o = It()), a === 38 && o === 12 && (r[n] = 1), !Ga(o); ) Ke();
    return ro(t, ze);
  },
  Mk = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (Ga(a)) {
        case 0:
          (a === 38 && It() === 12 && (r[n] = 1), (t[n] += Tk(ze - 1, r, n)));
          break;
        case 2:
          t[n] += Ao(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = It() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Oi(a);
      }
    while ((a = Ke()));
    return t;
  },
  Lk = function (t, r) {
    return Qh(Mk(Zh(t), r));
  },
  Cf = new WeakMap(),
  Nk = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Cf.get(n)) && !a) {
        Cf.set(t, !0);
        for (var o = [], i = Lk(r, o), c = n.props, s = 0, u = 0; s < i.length; s++)
          for (var l = 0; l < c.length; l++, u++)
            t.props[u] = o[s] ? i[s].replace(/&\f/g, c[l]) : c[l] + " " + i[s];
      }
    }
  },
  Bk = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function eg(e, t) {
  switch (mk(e, t)) {
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
      return Q + e + Xo + e + Re + e + e;
    case 6828:
    case 4268:
      return Q + e + Re + e + e;
    case 6165:
      return Q + e + Re + "flex-" + e + e;
    case 5187:
      return Q + e + ee(e, /(\w+).+(:[^]+)/, Q + "box-$1$2" + Re + "flex-$1$2") + e;
    case 5443:
      return Q + e + Re + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    case 4675:
      return Q + e + Re + "flex-line-pack" + ee(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Q + e + Re + ee(e, "shrink", "negative") + e;
    case 5292:
      return Q + e + Re + ee(e, "basis", "preferred-size") + e;
    case 6060:
      return Q + "box-" + ee(e, "-grow", "") + Q + e + Re + ee(e, "grow", "positive") + e;
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
          ee(e, /(.+:)(flex-)?(.*)/, Q + "box-pack:$3" + Re + "flex-pack:$3"),
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
      if (St(e) - 1 - t > 6)
        switch (Se(e, t + 1)) {
          case 109:
            if (Se(e, t + 4) !== 45) break;
          case 102:
            return (
              ee(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Q + "$2-$3$1" + Xo + (Se(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~uc(e, "stretch") ? eg(ee(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Se(e, t + 1) !== 115) break;
    case 6444:
      switch (Se(e, St(e) - 3 - (~uc(e, "!important") && 10))) {
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
                Re +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (Se(e, t + 11)) {
        case 114:
          return Q + e + Re + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Q + e + Re + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Q + e + Re + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Q + e + Re + e + e;
  }
  return e;
}
var Fk = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Nc:
          t.return = eg(t.value, t.length);
          break;
        case Jh:
          return Wr([ma(t, { value: ee(t.value, "@", "@" + Q) })], a);
        case Lc:
          if (t.length)
            return wk(t.props, function (o) {
              switch (yk(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Wr([ma(t, { props: [ee(o, /:(read-\w+)/, ":" + Xo + "$1")] })], a);
                case "::placeholder":
                  return Wr(
                    [
                      ma(t, { props: [ee(o, /:(plac\w+)/, ":" + Q + "input-$1")] }),
                      ma(t, { props: [ee(o, /:(plac\w+)/, ":" + Xo + "$1")] }),
                      ma(t, { props: [ee(o, /:(plac\w+)/, Re + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  qk = [Fk],
  Uk = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (f) {
        var h = f.getAttribute("data-emotion");
        h.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || qk,
      o = {},
      i,
      c = [];
    ((i = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (f) {
          for (var h = f.getAttribute("data-emotion").split(" "), b = 1; b < h.length; b++)
            o[h[b]] = !0;
          c.push(f);
        },
      ));
    var s,
      u = [Nk, Bk];
    {
      var l,
        d = [
          Ak,
          jk(function (f) {
            l.insert(f);
          }),
        ],
        p = Ik(u.concat(a, d)),
        v = function (h) {
          return Wr(Rk(h), p);
        };
      s = function (h, b, _, y) {
        ((l = _), v(h ? h + "{" + b.styles + "}" : b.styles), y && (g.inserted[b.name] = !0));
      };
    }
    var g = {
      key: r,
      sheet: new pk({
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
    return (g.sheet.hydrate(c), g);
  },
  As = { exports: {} },
  ne = {};
var Rf;
function zk() {
  if (Rf) return ne;
  Rf = 1;
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
    p = e ? Symbol.for("react.suspense_list") : 60120,
    v = e ? Symbol.for("react.memo") : 60115,
    g = e ? Symbol.for("react.lazy") : 60116,
    f = e ? Symbol.for("react.block") : 60121,
    h = e ? Symbol.for("react.fundamental") : 60117,
    b = e ? Symbol.for("react.responder") : 60118,
    _ = e ? Symbol.for("react.scope") : 60119;
  function y(w) {
    if (typeof w == "object" && w !== null) {
      var S = w.$$typeof;
      switch (S) {
        case t:
          switch (((w = w.type), w)) {
            case s:
            case u:
            case n:
            case o:
            case a:
            case d:
              return w;
            default:
              switch (((w = w && w.$$typeof), w)) {
                case c:
                case l:
                case g:
                case v:
                case i:
                  return w;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function k(w) {
    return y(w) === u;
  }
  return (
    (ne.AsyncMode = s),
    (ne.ConcurrentMode = u),
    (ne.ContextConsumer = c),
    (ne.ContextProvider = i),
    (ne.Element = t),
    (ne.ForwardRef = l),
    (ne.Fragment = n),
    (ne.Lazy = g),
    (ne.Memo = v),
    (ne.Portal = r),
    (ne.Profiler = o),
    (ne.StrictMode = a),
    (ne.Suspense = d),
    (ne.isAsyncMode = function (w) {
      return k(w) || y(w) === s;
    }),
    (ne.isConcurrentMode = k),
    (ne.isContextConsumer = function (w) {
      return y(w) === c;
    }),
    (ne.isContextProvider = function (w) {
      return y(w) === i;
    }),
    (ne.isElement = function (w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }),
    (ne.isForwardRef = function (w) {
      return y(w) === l;
    }),
    (ne.isFragment = function (w) {
      return y(w) === n;
    }),
    (ne.isLazy = function (w) {
      return y(w) === g;
    }),
    (ne.isMemo = function (w) {
      return y(w) === v;
    }),
    (ne.isPortal = function (w) {
      return y(w) === r;
    }),
    (ne.isProfiler = function (w) {
      return y(w) === o;
    }),
    (ne.isStrictMode = function (w) {
      return y(w) === a;
    }),
    (ne.isSuspense = function (w) {
      return y(w) === d;
    }),
    (ne.isValidElementType = function (w) {
      return (
        typeof w == "string" ||
        typeof w == "function" ||
        w === n ||
        w === u ||
        w === o ||
        w === a ||
        w === d ||
        w === p ||
        (typeof w == "object" &&
          w !== null &&
          (w.$$typeof === g ||
            w.$$typeof === v ||
            w.$$typeof === i ||
            w.$$typeof === c ||
            w.$$typeof === l ||
            w.$$typeof === h ||
            w.$$typeof === b ||
            w.$$typeof === _ ||
            w.$$typeof === f))
      );
    }),
    (ne.typeOf = y),
    ne
  );
}
var Pf;
function $k() {
  return (Pf || ((Pf = 1), (As.exports = zk())), As.exports);
}
var Is, Af;
function Vk() {
  if (Af) return Is;
  Af = 1;
  var e = $k(),
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
  function i(g) {
    return e.isMemo(g) ? a : o[g.$$typeof] || t;
  }
  var c = Object.defineProperty,
    s = Object.getOwnPropertyNames,
    u = Object.getOwnPropertySymbols,
    l = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    p = Object.prototype;
  function v(g, f, h) {
    if (typeof f != "string") {
      if (p) {
        var b = d(f);
        b && b !== p && v(g, b, h);
      }
      var _ = s(f);
      u && (_ = _.concat(u(f)));
      for (var y = i(g), k = i(f), w = 0; w < _.length; ++w) {
        var S = _[w];
        if (!r[S] && !(h && h[S]) && !(k && k[S]) && !(y && y[S])) {
          var x = l(f, S);
          try {
            c(g, S, x);
          } catch {}
        }
      }
    }
    return g;
  }
  return ((Is = v), Is);
}
Vk();
var Gk = !0;
function tg(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var Fc = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || Gk === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  rg = function (t, r, n) {
    Fc(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do (t.insert(r === o ? "." + a : "", o, t.sheet, !0), (o = o.next));
      while (o !== void 0);
    }
  };
function Hk(e) {
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
var Kk = {
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
  Wk = /[A-Z]|^ms/g,
  Jk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  ng = function (t) {
    return t.charCodeAt(1) === 45;
  },
  If = function (t) {
    return t != null && typeof t != "boolean";
  },
  js = Dk(function (e) {
    return ng(e) ? e : e.replace(Wk, "-$&").toLowerCase();
  }),
  jf = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(Jk, function (n, a, o) {
            return ((Et = { name: a, styles: o, next: Et }), a);
          });
    }
    return Kk[t] !== 1 && !ng(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Ha(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1) return ((Et = { name: a.name, styles: a.styles, next: Et }), a.name);
      var o = r;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; )
            ((Et = { name: i.name, styles: i.styles, next: Et }), (i = i.next));
        var c = o.styles + ";";
        return c;
      }
      return Yk(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = Et,
          u = r(e);
        return ((Et = s), Ha(e, t, u));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function Yk(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += Ha(e, t, r[a]) + ";";
  else
    for (var o in r) {
      var i = r[o];
      if (typeof i != "object") {
        var c = i;
        t != null && t[c] !== void 0
          ? (n += o + "{" + t[c] + "}")
          : If(c) && (n += js(o) + ":" + jf(o, c) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var s = 0; s < i.length; s++) If(i[s]) && (n += js(o) + ":" + jf(o, i[s]) + ";");
      else {
        var u = Ha(e, t, i);
        switch (o) {
          case "animation":
          case "animationName": {
            n += js(o) + ":" + u + ";";
            break;
          }
          default:
            n += o + "{" + u + "}";
        }
      }
    }
  return n;
}
var Df = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Et;
function qc(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  Et = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) ((n = !1), (a += Ha(r, t, o)));
  else {
    var i = o;
    a += i[0];
  }
  for (var c = 1; c < e.length; c++)
    if (((a += Ha(r, t, e[c])), n)) {
      var s = o;
      a += s[c];
    }
  Df.lastIndex = 0;
  for (var u = "", l; (l = Df.exec(a)) !== null; ) u += "-" + l[1];
  var d = Hk(a) + u;
  return { name: d, styles: a, next: Et };
}
var Xk = function (t) {
    return t();
  },
  Zk = au.useInsertionEffect ? au.useInsertionEffect : !1,
  ag = Zk || Xk,
  og = m.createContext(typeof HTMLElement < "u" ? Uk({ key: "css" }) : null);
og.Provider;
var ig = function (t) {
    return m.forwardRef(function (r, n) {
      var a = m.useContext(og);
      return t(r, a, n);
    });
  },
  sg = m.createContext({}),
  Uc = {}.hasOwnProperty,
  dc = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Qk = function (t, r) {
    var n = {};
    for (var a in r) Uc.call(r, a) && (n[a] = r[a]);
    return ((n[dc] = t), n);
  },
  eO = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      Fc(r, n, a),
      ag(function () {
        return rg(r, n, a);
      }),
      null
    );
  },
  tO = ig(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[dc],
      o = [n],
      i = "";
    typeof e.className == "string"
      ? (i = tg(t.registered, o, e.className))
      : e.className != null && (i = e.className + " ");
    var c = qc(o, void 0, m.useContext(sg));
    i += t.key + "-" + c.name;
    var s = {};
    for (var u in e) Uc.call(e, u) && u !== "css" && u !== dc && (s[u] = e[u]);
    return (
      (s.className = i),
      r && (s.ref = r),
      m.createElement(
        m.Fragment,
        null,
        m.createElement(eO, { cache: t, serialized: c, isStringTag: typeof a == "string" }),
        m.createElement(a, s),
      )
    );
  }),
  rO = tO,
  Ht = function (t, r) {
    var n = arguments;
    if (r == null || !Uc.call(r, "css")) return m.createElement.apply(void 0, n);
    var a = n.length,
      o = new Array(a);
    ((o[0] = rO), (o[1] = Qk(t, r)));
    for (var i = 2; i < a; i++) o[i] = n[i];
    return m.createElement.apply(null, o);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Ht || (Ht = {}));
function Lt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return qc(t);
}
var nO = function e(t) {
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
function aO(e, t, r) {
  var n = [],
    a = tg(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var oO = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      ag(function () {
        for (var a = 0; a < n.length; a++) rg(r, n[a], !1);
      }),
      null
    );
  },
  iO = ig(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l];
        var d = qc(u, t.registered);
        return (r.push(d), Fc(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l];
        return aO(t.registered, n, nO(u));
      },
      o = { css: n, cx: a, theme: m.useContext(sg) },
      i = e.children(o);
    return m.createElement(
      m.Fragment,
      null,
      m.createElement(oO, { cache: t, serializedArr: r }),
      i,
    );
  });
function cg(e, t) {
  var r = m.useRef(!0);
  m.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var ug = 2,
  fc = Lt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: ug,
  }),
  vc = Lt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -ug,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  sO = Lt({
    "&:focus": fc,
    "&:focus-visible": fc,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  cO = Lt({
    "&:focus": vc,
    "&:focus-visible": vc,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  lg = m.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? vc : fc,
      o = r ? cO : sO,
      i = typeof n > "u" ? o : n === "on" && a;
    return Ht(iO, null, function (c) {
      var s = c.css,
        u = c.cx;
      return m.Children.only(
        i ? m.cloneElement(t, { className: u([s(i), t.props.className]) }) : t,
      );
    });
  });
lg.displayName = "FocusRing";
function zt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var uO = 9;
function Tf(e) {
  e.keyCode !== uO && zt(e);
}
var lO = {
    onMouseDownCapture: zt,
    onMouseUpCapture: zt,
    onKeyDownCapture: Tf,
    onKeyUpCapture: Tf,
    onTouchStartCapture: zt,
    onTouchEndCapture: zt,
    onPointerDownCapture: zt,
    onPointerUpCapture: zt,
    onClickCapture: zt,
    onClick: zt,
  },
  dO = {};
function fO(e) {
  var t = e.isInteractive;
  return t ? dO : lO;
}
function Mf(e, t) {
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
      ? Mf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Mf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var nr = 8,
  Ds = ["default", "primary", "danger", "warning"],
  pc = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  vO = { default: pc.default, compact: pc.compact, none: "inherit" },
  pO = {
    default: "0 ".concat(nr + nr / 4, "px"),
    compact: "0 ".concat(nr + nr / 4, "px"),
    none: "0",
  },
  hO = { compact: "0 ".concat(nr / 4, "px"), default: "0 ".concat(nr / 4, "px"), none: "0" },
  gO = { default: "middle", compact: "middle", none: "baseline" },
  dg = { content: "0 ".concat(nr / 4, "px"), icon: "0 ".concat(nr / 4, "px") },
  fg = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  bO = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": Fe(Fe({}, fg), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  _O = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  mO = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  yO = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  wO = {
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
  kO = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  OO = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  SO = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": Fe(
      Fe({}, fg),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  EO = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function xO(e) {
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
        height: pc[r],
        lineHeight: vO[r],
        padding: o ? hO[r] : pO[r],
        verticalAlign: gO[r],
        width: a ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? SO
        : Fe(
            Fe(
              Fe(
                Fe(
                  Fe(
                    Fe(
                      Fe(Fe({}, t === "default" && bO), t === "primary" && _O),
                      t === "link" && mO,
                    ),
                    t === "subtle" && yO,
                  ),
                  t === "subtle-link" && wO,
                ),
                t === "warning" && kO,
              ),
              t === "danger" && OO,
            ),
            {},
            {
              "&[disabled]": {
                color: "var(--ds-text-disabled, #080F214A)",
                backgroundColor: Ds.includes(t)
                  ? "var(--ds-background-disabled, #17171708)"
                  : "transparent",
                cursor: "not-allowed",
                textDecoration: "none",
                "&:hovered": {
                  backgroundColor: Ds.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
                "&:active": {
                  backgroundColor: Ds.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
              },
            },
            EO,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function Lf(e) {
  var t = e.spacing;
  return Lt({
    display: "flex",
    margin: t === "none" ? 0 : dg.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function CO(e) {
  var t = e.spacing;
  return Lt({
    margin: t === "none" ? 0 : dg.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function RO(e) {
  var t = e.hasOverlay;
  return Lt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var PO = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  zc = function (t) {
    return t && m.isValidElement(t) && t.type === Mc;
  },
  AO = [
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
  IO = { "> *": { pointerEvents: "none" } },
  jO = Lt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  DO = Lt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  Nf = function (t, r) {
    return !t || zc(t) ? null : r;
  },
  TO = function (t, r) {
    return zc(t) ? t : t ? Ht("span", { css: r }, t) : null;
  },
  MO = O.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      a = t.appearance,
      o = a === void 0 ? "default" : a,
      i = t.autoFocus,
      c = i === void 0 ? !1 : i,
      s = t.buttonCss,
      u = t.children,
      l = t.className,
      d = t.href,
      p = t.component,
      v = p === void 0 ? (d ? "a" : "button") : p,
      g = t.iconAfter,
      f = t.iconBefore,
      h = t.interactionName,
      b = t.isDisabled,
      _ = b === void 0 ? !1 : b,
      y = t.isSelected,
      k = y === void 0 ? !1 : y,
      w = t.onBlur,
      S = t.onClick,
      x = S === void 0 ? Pe : S,
      A = t.onFocus,
      j = t.onMouseDown,
      P = j === void 0 ? Pe : j,
      M = t.overlay;
    t.shouldFitContainer;
    var U = t.spacing,
      F = U === void 0 ? "default" : U,
      $ = t.tabIndex,
      z = $ === void 0 ? 0 : $,
      V = t.type,
      G = V === void 0 ? (d ? void 0 : "button") : V,
      K = t.testId,
      B = te(t, AO),
      D = m.useRef(),
      _e = m.useCallback(
        function (ve) {
          if (((D.current = ve), r != null)) {
            if (typeof r == "function") {
              r(ve);
              return;
            }
            r.current = ve;
          }
        },
        [D, r],
      );
    cg(D, c);
    var ie = m.useContext(Pc),
      ce = m.useCallback(
        function (ve, Le) {
          (ie && ie.tracePress(h, ve.timeStamp), x(ve, Le));
        },
        [x, ie, h],
      ),
      de = Zr({
        fn: ce,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      pe = m.useCallback(
        function (ve) {
          (ve.preventDefault(), P(ve));
        },
        [P],
      );
    m.useEffect(
      function () {
        var ve = D.current;
        _ && ve && ve === document.activeElement && ve.blur();
      },
      [_],
    );
    var ue = !!M,
      Te = Lt(RO({ hasOverlay: ue })),
      ke = !_ && !ue,
      Me = {};
    return (
      (k || _ || o === "warning") &&
        (Me = {
          "[data-theme] & circle": {
            stroke: "".concat(
              k || _
                ? "var(--ds-icon-subtle, ".concat(Jo, ")")
                : "var(--ds-icon-warning-inverse, ".concat(Jo, ")"),
              " !important",
            ),
          },
        }),
      Ht(
        lg,
        null,
        Ht(
          v,
          Z(
            {},
            B,
            {
              ref: _e,
              className: l,
              css: [s, ke ? null : IO],
              "data-has-overlay": ue ? !0 : void 0,
              "data-testid": K,
              disabled: _,
              href: ke ? d : void 0,
              onBlur: w,
              onClick: de,
              onFocus: A,
              onMouseDown: pe,
              tabIndex: _ ? -1 : z,
              type: G,
            },
            fO({ isInteractive: ke }),
          ),
          f ? Ht("span", { css: [Te, Lf({ spacing: F }), Nf(u, jO)] }, f) : null,
          TO(u, [Te, CO({ spacing: F })]),
          g ? Ht("span", { css: [Te, Lf({ spacing: F }), Nf(u, DO)] }, g) : null,
          M ? Ht("span", { css: [PO, Me] }, M) : null,
        ),
      )
    );
  });
function LO(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return zc(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var NO = [
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
  Bf = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  $c = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        o = t.children,
        i = t.iconBefore,
        c = t.iconAfter,
        s = t.isSelected,
        u = s === void 0 ? !1 : s,
        l = t.onMouseDown,
        d = l === void 0 ? Pe : l,
        p = t.onMouseUp,
        v = p === void 0 ? Pe : p,
        g = t.shouldFitContainer,
        f = g === void 0 ? !1 : g,
        h = t.spacing,
        b = h === void 0 ? "default" : h,
        _ = te(t, NO),
        y = dk(),
        k = y.mode,
        w = LO({ children: o, iconBefore: i, iconAfter: c }),
        S = m.useState(!1),
        x = J(S, 2),
        A = x[0],
        j = x[1],
        P = m.useCallback(
          function (F) {
            (d(F), Bf && j(!0));
          },
          [d, j],
        ),
        M = m.useCallback(
          function (F) {
            (v(F), Bf && j(!1));
          },
          [v, j],
        ),
        U = m.useMemo(
          function () {
            return xO({
              appearance: a,
              spacing: b,
              isSelected: u,
              shouldFitContainer: f,
              isOnlySingleIcon: w,
            });
          },
          [a, b, k, u, f, w],
        );
      return O.createElement(
        MO,
        Z({}, _, {
          ref: r,
          appearance: a,
          buttonCss: U,
          children: o,
          "data-firefox-is-active": A ? !0 : void 0,
          iconAfter: c,
          iconBefore: i,
          isSelected: u,
          onMouseDown: P,
          onMouseUp: M,
          spacing: b,
        }),
      );
    }),
  );
$c.displayName = "Button";
function Ff(e) {
  return O.createElement($c, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function BO(e) {
  return O.createElement($c, Z({}, e, { appearance: "subtle" }));
}
var FO = { container: "_1e0c1txw _kqswh2mm" };
function qO(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return O.createElement(
    wi,
    { as: "li", testId: r, key: t, xcss: FO.container, paddingInline: "space.100" },
    O.createElement(
      zh,
      { testId: r && "".concat(r, "-text") },
      O.createElement(Mc, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var qf = {},
  Uf =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function UO(e, t) {
  return !!(e === t || (Uf(e) && Uf(t)));
}
function zO(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!UO(e[r], t[r])) return !1;
  return !0;
}
function $O(e, t) {
  t === void 0 && (t = zO);
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
var VO = function (t, r, n, a) {
  var o = n.max,
    i = n.ellipsis,
    c = n.transform,
    s = t.length,
    u = s > o,
    l = u && o - 4 < r,
    d = u && r < s - o + 3,
    p = $O(function () {
      var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
      return t.slice(h, b).map(function (_, y) {
        return c(_, h + y, a);
      });
    });
  if (!u) return p(0, s);
  if (l && !d) {
    var v = o - 2;
    return [].concat(
      Ve(p(0, 1)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: s - v })],
      Ve(p(s - v)),
    );
  }
  if (!l && d) {
    var g = o - 2;
    return [].concat(
      Ve(p(0, g)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: g + 1, to: s - 1 })],
      Ve(p(s - 1)),
    );
  }
  var f = o - 4;
  return [].concat(
    Ve(p(0, 1)),
    [
      i({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(f / 2),
      }),
    ],
    Ve(p(r - Math.floor(f / 2), r + f - 1)),
    [i({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: s - 1 })],
    Ve(p(s - 1)),
  );
};
function zf(e, t) {
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
function GO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : zf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var hc = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  HO = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "0.0.0-development",
  };
function $f(e) {
  var t = e.chevronDirection,
    r = t === "left" ? c1 : v1;
  return O.createElement(
    wi,
    { as: "span", xcss: hc.navigatorIconWrapper },
    O.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function KO(e, t) {
  var r = e.components,
    n = r === void 0 ? qf : r,
    a = e.defaultSelectedIndex,
    o = a === void 0 ? 0 : a,
    i = e.selectedIndex,
    c = e.label,
    s = c === void 0 ? "pagination" : c,
    u = e.pageLabel,
    l = u === void 0 ? "page" : u,
    d = e.previousLabel,
    p = d === void 0 ? "previous" : d,
    v = e.nextLabel,
    g = v === void 0 ? "next" : v,
    f = e.style,
    h = f === void 0 ? qf : f,
    b = e.max,
    _ = b === void 0 ? 7 : b,
    y = e.onChange,
    k = y === void 0 ? Pe : y,
    w = e.pages,
    S = e.getPageLabel,
    x = e.renderEllipsis,
    A = x === void 0 ? qO : x,
    j = e.analyticsContext,
    P = e.testId,
    M = e.isDisabled,
    U = K0(i, function () {
      return o || 0;
    }),
    F = J(U, 2),
    $ = F[0],
    z = F[1],
    V = Zr(
      GO(
        {
          fn: function (B, D) {
            var _e = B.event,
              ie = B.selectedPageIndex;
            (i === void 0 && z(ie), k && k(_e, w[ie], D));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: j,
        },
        HO,
      ),
    ),
    G = function (B, D, _e) {
      var ie = w[$],
        ce = "".concat(l, " ").concat(S ? S(B, D) : B),
        de = B === ie;
      return O.createElement(
        Co,
        { as: "li", xcss: hc.paginationMenuItem, key: "page-".concat(S ? S(B, D) : D) },
        O.createElement(
          BO,
          {
            component: n.Page,
            onClick: function (ue) {
              return V({ event: ue, selectedPageIndex: D });
            },
            "aria-current": de ? "page" : void 0,
            "aria-label": ce,
            isSelected: de,
            isDisabled: M,
            page: B,
            testId:
              _e &&
              ""
                .concat(_e, "--")
                .concat(de ? "current-" : "", "page-")
                .concat(D),
          },
          S ? S(B, D) : B,
        ),
      );
    };
  return O.createElement(
    wi,
    { testId: P, style: h, ref: t, "aria-label": s, as: "nav" },
    O.createElement(
      Co,
      { space: "space.0", alignBlock: "center" },
      O.createElement(Ff, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (B) {
          return V({ event: B, selectedPageIndex: $ - 1 });
        },
        isDisabled: M || $ === 0,
        iconBefore: O.createElement($f, { chevronDirection: "left" }),
        "aria-label": p,
        testId: P && "".concat(P, "--left-navigator"),
      }),
      O.createElement(
        Co,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: hc.paginationMenu },
        VO(w, $, { max: _, ellipsis: A, transform: G }, P),
      ),
      O.createElement(Ff, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (B) {
          return V({ event: B, selectedPageIndex: $ + 1 });
        },
        isDisabled: M || $ === w.length - 1,
        iconBefore: O.createElement($f, { chevronDirection: "right" }),
        "aria-label": g,
        testId: P && "".concat(P, "--right-navigator"),
      }),
    ),
  );
}
var WO = m.memo(m.forwardRef(KO));
function JO(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, vg() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function vg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (vg = function () {
    return !!e;
  })();
}
var YO = (function (e) {
    function t() {
      var r;
      ge(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return (
        (r = JO(this, t, [].concat(a))),
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
              l = Ve(Array(a)).map(function (p, v) {
                return v + 1;
              }),
              d = i - 1;
            return O.createElement(WO, {
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
  XO = ["isRanking", "testId"],
  ZO = [
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
function Vf(e, t) {
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
function ya(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Gf = "--local-dynamic-table-text-color",
  QO = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = te(t, XO);
    return m.createElement(
      "thead",
      Z({ "data-testid": n }, a, { className: R(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  eS = m.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      o = e.isFixedSize,
      i = e.shouldTruncate;
    e.onClick;
    var c = e.style,
      s = e.testId,
      u = te(e, ZO),
      l = ya(
        ya(ya({}, c), r && mh({ width: r })),
        {},
        C({}, Gf, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = a === Or,
      p = a === Ko,
      v = function () {
        if (d) return "ascending";
        if (p) return "descending";
      },
      g = n ? "th" : "td";
    return m.createElement(
      g,
      Z({ "aria-sort": v(), onClick: void 0, ref: t, "data-testid": s }, u, {
        className: R([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          o && i && "_1bto1l2s _o5721q9c",
          o && "_1reo15vq _18m915vq",
        ]),
        style: ya(
          ya({}, l),
          {},
          { "--_17ckjys": tr("var(--ds-text-subtle, ".concat("var(".concat(Gf, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function tS(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, pg() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function pg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (pg = function () {
    return !!e;
  })();
}
function rS(e) {
  return (function (t) {
    function r() {
      var n;
      ge(this, r);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return (
        (n = tS(this, r, [].concat(o))),
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
var wa = {},
  Hf;
function nS() {
  if (Hf) return wa;
  ((Hf = 1), Object.defineProperty(wa, "__esModule", { value: !0 }), (wa.default = void 0));
  var e = r(_t()),
    t = r(yi);
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
  return ((n.displayName = "ArrowDownIcon"), (wa.default = n), wa);
}
var aS = nS();
const oS = ir(aS);
var ka = {},
  Kf;
function iS() {
  if (Kf) return ka;
  ((Kf = 1), Object.defineProperty(ka, "__esModule", { value: !0 }), (ka.default = void 0));
  var e = r(_t()),
    t = r(yi);
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
  return ((n.displayName = "ArrowUpIcon"), (ka.default = n), ka);
}
var sS = iS();
const cS = ir(sS);
var uS = "Escape";
function lS(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = m.useRef(!1),
    a = m.useCallback(
      function (i) {
        r || n.current || i.key !== uS || ((n.current = !0), t(i));
      },
      [t, r],
    ),
    o = m.useCallback(function () {
      n.current = !1;
    }, []);
  m.useEffect(
    function () {
      if (!r)
        return ki.bindAll(
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
function Oa(e) {
  var t = m.useRef(e);
  return (
    m.useEffect(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
var dS = m.createContext(null),
  fS = m.createContext(null);
function vS() {
  var e = m.useContext(fS);
  return e;
}
function pS(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    a = m.useContext(dS),
    o = vS();
  m.useEffect(
    function () {
      if (a !== null && t) return a.onClose(n, { namespace: o, type: r });
    },
    [a, t, o, n, r],
  );
}
var Ra = { none: 0, small: 100, medium: 350, large: 700 },
  Ts = 0.5,
  hS = { none: Ra.none, small: Ra.small * Ts, medium: Ra.medium * Ts, large: Ra.large * Ts },
  gS = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  bS = function () {
    if (!gS()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  _S = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  mS = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { cleanup: "unmount" },
      r = m.useRef([]);
    return (
      m.useEffect(function () {
        return function () {
          r.current.length &&
            (r.current.forEach(function (n) {
              return clearTimeout(n);
            }),
            (r.current = []));
        };
      }, _S(t)),
      m.useCallback(function (n, a) {
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
  hg = { appear: !0, isExiting: !1 },
  gg = m.createContext(hg),
  Wf = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : hg;
    return O.createElement(gg.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  Jf = function (t) {
    var r = [];
    return (
      m.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  yS = function (t, r) {
    for (var n = r.concat([]), a = wS(r), o = 0; o < t.length; o++) {
      var i = t[o],
        c = !a[i.key];
      c && n.splice(o + 1, 0, i);
    }
    return n;
  },
  wS = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  kS = function (t, r) {
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
  bg = m.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      o = m.useState([null, n]),
      i = J(o, 2),
      c = i[0],
      s = i[1],
      u = m.useState([]),
      l = J(u, 2),
      d = l[0],
      p = l[1],
      v = m.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      g = J(v, 2),
      f = g[0],
      h = g[1];
    if (
      (m.useEffect(function () {
        f.appear || h({ appear: !0, isExiting: !1 });
      }, []),
      typeof c == "boolean")
    )
      return n;
    var b = J(c, 2),
      _ = b[0],
      y = b[1],
      k = Jf(_),
      w = Jf(y);
    y !== n && s([y, n]);
    var S = kS(w, k),
      x = !!S.size,
      A = w;
    if ((x && (A = yS(w, k)), a))
      if (d.length) A = d;
      else {
        var j = A.filter(function (P) {
          return S.has(P.key);
        });
        j.length && p(j);
      }
    return (
      S.size
        ? (A = A.map(function (P) {
            var M = S.has(P.key);
            return Wf(P, {
              appear: !0,
              isExiting: M,
              onFinish: M
                ? function () {
                    (S.delete(P.key), S.size === 0 && (s([null, n]), p([])));
                  }
                : void 0,
            });
          }))
        : (A = A.map(function (P) {
            return Wf(P, f);
          })),
      A
    );
  }),
  OS = function () {
    return m.useContext(gg);
  };
bg.displayName = "ExitingPersistence";
function SS() {
  var e = m.useRef("");
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
var ES = m.createContext(function () {
    return { isReady: !0, delay: 0, ref: Pe };
  }),
  xS = function () {
    var t = SS(),
      r = m.useContext(ES);
    return r(t);
  },
  CS = function (t) {
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
      p = d === void 0 ? "large" : d,
      v = xS(),
      g = OS(),
      f = g.isExiting,
      h = g.onFinish,
      b = g.appear,
      _ = mS(),
      y = u || !v.isReady,
      k = f ? 0 : v.delay,
      w = f ? "exiting" : "entering",
      S = m.useState(b),
      x = J(S, 2),
      A = x[0],
      j = x[1];
    return (
      m.useEffect(
        function () {
          var P = !1;
          if (!y) {
            if (!b) {
              l && l(w);
              return;
            }
            var M = function () {
              (w === "exiting" && h?.(), P || j(!1), l?.(w));
            };
            if (bS()) {
              M();
              return;
            }
            return (
              j(!0),
              _(M, f ? hS[p] : Ra[p] + k),
              function () {
                P = !0;
              }
            );
          }
        },
        [h, w, f, p, k, y, _],
      ),
      r(
        {
          ref: v.ref,
          className: A
            ? R([
                R(["_1o51eoah _1y0co91m _1bumglyw _sedtglyw"]),
                y && R(["_1y0ctrqk"]),
                p === "small" && R(["_5sag1yx9"]),
                p === "medium" && R(["_5sag1ttt"]),
                p === "large" && R(["_5sagpwmj"]),
                f && p === "small" && R(["_5sag14ed"]),
                f && p === "medium" && R(["_5sagluct"]),
                f && p === "large" && R(["_5sag1ttt"]),
                f && R(["_ju255cps _1o51q7pw"]),
                !f && n === "linear" && R(["_1pglp3kn"]),
                !f && n === "ease-out" && R(["_1pgldkwg"]),
                !f && n === "ease-in" && R(["_1pgl1nzg"]),
                !f && n === "ease-in-40-out" && R(["_1pgl5y64"]),
                !f && n === "ease-in-60-out" && R(["_1pgl1ddy"]),
                !f && n === "ease-in-80-out" && R(["_1pglannl"]),
                !f && n === "ease-in-out" && R(["_1pgl1fu8"]),
                f && n === "linear" && R(["_1pglp3kn"]),
                f && o === "ease-out" && R(["_1pgldkwg"]),
                f && o === "ease-in" && R(["_1pgl1nzg"]),
                f && o === "ease-in-40-out" && R(["_1pgl5y64"]),
                f && o === "ease-in-60-out" && R(["_1pgl1ddy"]),
                f && o === "ease-in-80-out" && R(["_1pglannl"]),
                f && o === "ease-in-out" && R(["_1pgl1fu8"]),
                ((!f && i === "fade-in") || (f && s === "fade-in")) && R(["_j7hq1cgr"]),
                ((!f && i === "fade-out") || (f && s === "fade-out")) && R(["_j7hq1lln"]),
                ((!f && i === "zoom-in") || (f && s === "zoom-in")) && R(["_j7hqe8p0"]),
                ((!f && i === "zoom-out") || (f && s === "zoom-out")) && R(["_j7hqy6ql"]),
                ((!f && i === "slide-in-from-top") || (f && s === "slide-in-from-top")) &&
                  R(["_j7hqqshu"]),
                ((!f && i === "slide-out-from-top") || (f && s === "slide-out-from-top")) &&
                  R(["_j7hq7ri4"]),
                ((!f && i === "slide-in-from-right") || (f && s === "slide-in-from-right")) &&
                  R(["_j7hqdfjr"]),
                ((!f && i === "slide-out-from-right") || (f && s === "slide-out-from-right")) &&
                  R(["_j7hqonfj"]),
                ((!f && i === "slide-in-from-bottom") || (f && s === "slide-in-from-bottom")) &&
                  R(["_j7hq1liq"]),
                ((!f && i === "slide-out-from-bottom") || (f && s === "slide-out-from-bottom")) &&
                  R(["_j7hqhnf1"]),
                ((!f && i === "slide-in-from-left") || (f && s === "slide-in-from-left")) &&
                  R(["_j7hq1bh1"]),
                ((!f && i === "slide-out-from-left") || (f && s === "slide-out-from-left")) &&
                  R(["_j7hqj08w"]),
                ((!f && i === "fade-in-from-top") || (f && s === "fade-in-from-top")) &&
                  R(["_j7hq2iua"]),
                ((!f && i === "fade-out-from-top") || (f && s === "fade-out-from-top")) &&
                  R(["_j7hq39va"]),
                ((!f && i === "fade-in-from-left") || (f && s === "fade-in-from-left")) &&
                  R(["_j7hq15m2"]),
                ((!f && i === "fade-out-from-left") || (f && s === "fade-out-from-left")) &&
                  R(["_j7hq1yiv"]),
                ((!f && i === "fade-in-from-bottom") || (f && s === "fade-in-from-bottom")) &&
                  R(["_j7hq1w00"]),
                ((!f && i === "fade-out-from-bottom") || (f && s === "fade-out-from-bottom")) &&
                  R(["_j7hqzy3z"]),
                ((!f && i === "fade-in-from-right") || (f && s === "fade-in-from-right")) &&
                  R(["_j7hqpqak"]),
                ((!f && i === "fade-out-from-right") || (f && s === "fade-out-from-right")) &&
                  R(["_j7hq1ebg"]),
                ((!f && i === "fade-in-from-top-constant") ||
                  (f && s === "fade-in-from-top-constant")) &&
                  R(["_j7hqm2e2"]),
                ((!f && i === "fade-out-from-top-constant") ||
                  (f && s === "fade-out-from-top-constant")) &&
                  R(["_j7hq97jn"]),
                ((!f && i === "fade-in-from-left-constant") ||
                  (f && s === "fade-in-from-left-constant")) &&
                  R(["_j7hqovgq"]),
                ((!f && i === "fade-out-from-left-constant") ||
                  (f && s === "fade-out-from-left-constant")) &&
                  R(["_j7hq15do"]),
                ((!f && i === "fade-in-from-bottom-constant") ||
                  (f && s === "fade-in-from-bottom-constant")) &&
                  R(["_j7hq797a"]),
                ((!f && i === "fade-out-from-bottom-constant") ||
                  (f && s === "fade-out-from-bottom-constant")) &&
                  R(["_j7hqwo7r"]),
                ((!f && i === "fade-in-from-right-constant") ||
                  (f && s === "fade-in-from-right-constant")) &&
                  R(["_j7hqt8u5"]),
                ((!f && i === "fade-out-from-right-constant") ||
                  (f && s === "fade-out-from-right-constant")) &&
                  R(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(k, "ms") },
        },
        w,
      )
    );
  },
  RS = { top: "bottom", bottom: "top", left: "right", right: "left" },
  PS = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      o = t.entranceDirection,
      i = t.exitDirection,
      c = t.distance,
      s = c === void 0 ? "proportional" : c,
      u = t.onFinish,
      l = t.isPaused,
      d = o !== void 0 ? RS[o] : void 0,
      p =
        i || d
          ? "fade-out-from-".concat(i || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return O.createElement(
      CS,
      {
        duration: a,
        enteringAnimation: o
          ? "fade-in-from-".concat(o).concat(s === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: p,
        animationTimingFunction: "ease-in-out",
        onFinish: u,
        isPaused: l,
      },
      r,
    );
  },
  AS = m.createContext();
m.createContext();
var IS = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  jS = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  DS = function (t, r) {
    if (typeof t == "function") return jS(t, r);
    t != null && (t.current = r);
  },
  Yf = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        o = n[1];
      return ((r[a] = o), r);
    }, {});
  },
  Xf =
    typeof window < "u" && window.document && window.document.createElement
      ? m.useLayoutEffect
      : m.useEffect,
  qe = "top",
  ct = "bottom",
  ut = "right",
  Ue = "left",
  Vc = "auto",
  no = [qe, ct, ut, Ue],
  en = "start",
  Ka = "end",
  TS = "clippingParents",
  _g = "viewport",
  Sa = "popper",
  MS = "reference",
  Zf = no.reduce(function (e, t) {
    return e.concat([t + "-" + en, t + "-" + Ka]);
  }, []),
  mg = [].concat(no, [Vc]).reduce(function (e, t) {
    return e.concat([t, t + "-" + en, t + "-" + Ka]);
  }, []),
  LS = "beforeRead",
  NS = "read",
  BS = "afterRead",
  FS = "beforeMain",
  qS = "main",
  US = "afterMain",
  zS = "beforeWrite",
  $S = "write",
  VS = "afterWrite",
  GS = [LS, NS, BS, FS, qS, US, zS, $S, VS];
function Mt(e) {
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
function Er(e) {
  var t = We(e).Element;
  return e instanceof t || e instanceof Element;
}
function st(e) {
  var t = We(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Gc(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = We(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function HS(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      o = t.elements[r];
    !st(o) ||
      !Mt(o) ||
      (Object.assign(o.style, n),
      Object.keys(a).forEach(function (i) {
        var c = a[i];
        c === !1 ? o.removeAttribute(i) : o.setAttribute(i, c === !0 ? "" : c);
      }));
  });
}
function KS(e) {
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
          !Mt(a) ||
          (Object.assign(a.style, c),
          Object.keys(o).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const WS = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: HS,
  effect: KS,
  requires: ["computeStyles"],
};
function jt(e) {
  return e.split("-")[0];
}
var _r = Math.max,
  Zo = Math.min,
  tn = Math.round;
function gc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function yg() {
  return !/^((?!chrome|android).)*safari/i.test(gc());
}
function rn(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    o = 1;
  t &&
    st(e) &&
    ((a = (e.offsetWidth > 0 && tn(n.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && tn(n.height) / e.offsetHeight) || 1));
  var i = Er(e) ? We(e) : window,
    c = i.visualViewport,
    s = !yg() && r,
    u = (n.left + (s && c ? c.offsetLeft : 0)) / a,
    l = (n.top + (s && c ? c.offsetTop : 0)) / o,
    d = n.width / a,
    p = n.height / o;
  return { width: d, height: p, top: l, right: u + d, bottom: l + p, left: u, x: u, y: l };
}
function Hc(e) {
  var t = rn(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function wg(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Gc(r)) {
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
function JS(e) {
  return ["table", "td", "th"].indexOf(Mt(e)) >= 0;
}
function cr(e) {
  return ((Er(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function xi(e) {
  return Mt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Gc(e) ? e.host : null) || cr(e);
}
function Qf(e) {
  return !st(e) || Jt(e).position === "fixed" ? null : e.offsetParent;
}
function YS(e) {
  var t = /firefox/i.test(gc()),
    r = /Trident/i.test(gc());
  if (r && st(e)) {
    var n = Jt(e);
    if (n.position === "fixed") return null;
  }
  var a = xi(e);
  for (Gc(a) && (a = a.host); st(a) && ["html", "body"].indexOf(Mt(a)) < 0; ) {
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
function ao(e) {
  for (var t = We(e), r = Qf(e); r && JS(r) && Jt(r).position === "static"; ) r = Qf(r);
  return r && (Mt(r) === "html" || (Mt(r) === "body" && Jt(r).position === "static"))
    ? t
    : r || YS(e) || t;
}
function Kc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ta(e, t, r) {
  return _r(e, Zo(t, r));
}
function XS(e, t, r) {
  var n = Ta(e, t, r);
  return n > r ? r : n;
}
function kg() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Og(e) {
  return Object.assign({}, kg(), e);
}
function Sg(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var ZS = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Og(typeof t != "number" ? t : Sg(t, no))
  );
};
function QS(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    o = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    c = jt(r.placement),
    s = Kc(c),
    u = [Ue, ut].indexOf(c) >= 0,
    l = u ? "height" : "width";
  if (!(!o || !i)) {
    var d = ZS(a.padding, r),
      p = Hc(o),
      v = s === "y" ? qe : Ue,
      g = s === "y" ? ct : ut,
      f = r.rects.reference[l] + r.rects.reference[s] - i[s] - r.rects.popper[l],
      h = i[s] - r.rects.reference[s],
      b = ao(o),
      _ = b ? (s === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      y = f / 2 - h / 2,
      k = d[v],
      w = _ - p[l] - d[g],
      S = _ / 2 - p[l] / 2 + y,
      x = Ta(k, S, w),
      A = s;
    r.modifiersData[n] = ((t = {}), (t[A] = x), (t.centerOffset = x - S), t);
  }
}
function eE(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (wg(t.elements.popper, a) && (t.elements.arrow = a)));
}
const tE = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: QS,
  effect: eE,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function nn(e) {
  return e.split("-")[1];
}
var rE = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function nE(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: tn(r * a) / a || 0, y: tn(n * a) / a || 0 };
}
function ev(e) {
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
    p = i.x,
    v = p === void 0 ? 0 : p,
    g = i.y,
    f = g === void 0 ? 0 : g,
    h = typeof l == "function" ? l({ x: v, y: f }) : { x: v, y: f };
  ((v = h.x), (f = h.y));
  var b = i.hasOwnProperty("x"),
    _ = i.hasOwnProperty("y"),
    y = Ue,
    k = qe,
    w = window;
  if (u) {
    var S = ao(r),
      x = "clientHeight",
      A = "clientWidth";
    if (
      (S === We(r) &&
        ((S = cr(r)),
        Jt(S).position !== "static" &&
          c === "absolute" &&
          ((x = "scrollHeight"), (A = "scrollWidth"))),
      (S = S),
      a === qe || ((a === Ue || a === ut) && o === Ka))
    ) {
      k = ct;
      var j = d && S === w && w.visualViewport ? w.visualViewport.height : S[x];
      ((f -= j - n.height), (f *= s ? 1 : -1));
    }
    if (a === Ue || ((a === qe || a === ct) && o === Ka)) {
      y = ut;
      var P = d && S === w && w.visualViewport ? w.visualViewport.width : S[A];
      ((v -= P - n.width), (v *= s ? 1 : -1));
    }
  }
  var M = Object.assign({ position: c }, u && rE),
    U = l === !0 ? nE({ x: v, y: f }, We(r)) : { x: v, y: f };
  if (((v = U.x), (f = U.y), s)) {
    var F;
    return Object.assign(
      {},
      M,
      ((F = {}),
      (F[k] = _ ? "0" : ""),
      (F[y] = b ? "0" : ""),
      (F.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + f + "px)"
          : "translate3d(" + v + "px, " + f + "px, 0)"),
      F),
    );
  }
  return Object.assign(
    {},
    M,
    ((t = {}), (t[k] = _ ? f + "px" : ""), (t[y] = b ? v + "px" : ""), (t.transform = ""), t),
  );
}
function aE(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    o = r.adaptive,
    i = o === void 0 ? !0 : o,
    c = r.roundOffsets,
    s = c === void 0 ? !0 : c,
    u = {
      placement: jt(t.placement),
      variation: nn(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      ev(
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
        ev(
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
const oE = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: aE, data: {} };
var mo = { passive: !0 };
function iE(e) {
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
        l.addEventListener("scroll", r.update, mo);
      }),
    c && s.addEventListener("resize", r.update, mo),
    function () {
      (o &&
        u.forEach(function (l) {
          l.removeEventListener("scroll", r.update, mo);
        }),
        c && s.removeEventListener("resize", r.update, mo));
    }
  );
}
const sE = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: iE,
  data: {},
};
var cE = { left: "right", right: "left", bottom: "top", top: "bottom" };
function jo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return cE[t];
  });
}
var uE = { start: "end", end: "start" };
function tv(e) {
  return e.replace(/start|end/g, function (t) {
    return uE[t];
  });
}
function Wc(e) {
  var t = We(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Jc(e) {
  return rn(cr(e)).left + Wc(e).scrollLeft;
}
function lE(e, t) {
  var r = We(e),
    n = cr(e),
    a = r.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    c = 0,
    s = 0;
  if (a) {
    ((o = a.width), (i = a.height));
    var u = yg();
    (u || (!u && t === "fixed")) && ((c = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: o, height: i, x: c + Jc(e), y: s };
}
function dE(e) {
  var t,
    r = cr(e),
    n = Wc(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = _r(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    i = _r(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    c = -n.scrollLeft + Jc(e),
    s = -n.scrollTop;
  return (
    Jt(a || r).direction === "rtl" && (c += _r(r.clientWidth, a ? a.clientWidth : 0) - o),
    { width: o, height: i, x: c, y: s }
  );
}
function Yc(e) {
  var t = Jt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Eg(e) {
  return ["html", "body", "#document"].indexOf(Mt(e)) >= 0
    ? e.ownerDocument.body
    : st(e) && Yc(e)
      ? e
      : Eg(xi(e));
}
function Ma(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Eg(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = We(n),
    i = a ? [o].concat(o.visualViewport || [], Yc(n) ? n : []) : n,
    c = t.concat(i);
  return a ? c : c.concat(Ma(xi(i)));
}
function bc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function fE(e, t) {
  var r = rn(e, !1, t === "fixed");
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
function rv(e, t, r) {
  return t === _g ? bc(lE(e, r)) : Er(t) ? fE(t, r) : bc(dE(cr(e)));
}
function vE(e) {
  var t = Ma(xi(e)),
    r = ["absolute", "fixed"].indexOf(Jt(e).position) >= 0,
    n = r && st(e) ? ao(e) : e;
  return Er(n)
    ? t.filter(function (a) {
        return Er(a) && wg(a, n) && Mt(a) !== "body";
      })
    : [];
}
function pE(e, t, r, n) {
  var a = t === "clippingParents" ? vE(e) : [].concat(t),
    o = [].concat(a, [r]),
    i = o[0],
    c = o.reduce(
      function (s, u) {
        var l = rv(e, u, n);
        return (
          (s.top = _r(l.top, s.top)),
          (s.right = Zo(l.right, s.right)),
          (s.bottom = Zo(l.bottom, s.bottom)),
          (s.left = _r(l.left, s.left)),
          s
        );
      },
      rv(e, i, n),
    );
  return (
    (c.width = c.right - c.left),
    (c.height = c.bottom - c.top),
    (c.x = c.left),
    (c.y = c.top),
    c
  );
}
function xg(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? jt(n) : null,
    o = n ? nn(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    c = t.y + t.height / 2 - r.height / 2,
    s;
  switch (a) {
    case qe:
      s = { x: i, y: t.y - r.height };
      break;
    case ct:
      s = { x: i, y: t.y + t.height };
      break;
    case ut:
      s = { x: t.x + t.width, y: c };
      break;
    case Ue:
      s = { x: t.x - r.width, y: c };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var u = a ? Kc(a) : null;
  if (u != null) {
    var l = u === "y" ? "height" : "width";
    switch (o) {
      case en:
        s[u] = s[u] - (t[l] / 2 - r[l] / 2);
        break;
      case Ka:
        s[u] = s[u] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function Wa(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    o = r.strategy,
    i = o === void 0 ? e.strategy : o,
    c = r.boundary,
    s = c === void 0 ? TS : c,
    u = r.rootBoundary,
    l = u === void 0 ? _g : u,
    d = r.elementContext,
    p = d === void 0 ? Sa : d,
    v = r.altBoundary,
    g = v === void 0 ? !1 : v,
    f = r.padding,
    h = f === void 0 ? 0 : f,
    b = Og(typeof h != "number" ? h : Sg(h, no)),
    _ = p === Sa ? MS : Sa,
    y = e.rects.popper,
    k = e.elements[g ? _ : p],
    w = pE(Er(k) ? k : k.contextElement || cr(e.elements.popper), s, l, i),
    S = rn(e.elements.reference),
    x = xg({ reference: S, element: y, placement: a }),
    A = bc(Object.assign({}, y, x)),
    j = p === Sa ? A : S,
    P = {
      top: w.top - j.top + b.top,
      bottom: j.bottom - w.bottom + b.bottom,
      left: w.left - j.left + b.left,
      right: j.right - w.right + b.right,
    },
    M = e.modifiersData.offset;
  if (p === Sa && M) {
    var U = M[a];
    Object.keys(P).forEach(function (F) {
      var $ = [ut, ct].indexOf(F) >= 0 ? 1 : -1,
        z = [qe, ct].indexOf(F) >= 0 ? "y" : "x";
      P[F] += U[z] * $;
    });
  }
  return P;
}
function hE(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    o = r.rootBoundary,
    i = r.padding,
    c = r.flipVariations,
    s = r.allowedAutoPlacements,
    u = s === void 0 ? mg : s,
    l = nn(n),
    d = l
      ? c
        ? Zf
        : Zf.filter(function (g) {
            return nn(g) === l;
          })
      : no,
    p = d.filter(function (g) {
      return u.indexOf(g) >= 0;
    });
  p.length === 0 && (p = d);
  var v = p.reduce(function (g, f) {
    return ((g[f] = Wa(e, { placement: f, boundary: a, rootBoundary: o, padding: i })[jt(f)]), g);
  }, {});
  return Object.keys(v).sort(function (g, f) {
    return v[g] - v[f];
  });
}
function gE(e) {
  if (jt(e) === Vc) return [];
  var t = jo(e);
  return [tv(e), t, tv(t)];
}
function bE(e) {
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
        p = r.altBoundary,
        v = r.flipVariations,
        g = v === void 0 ? !0 : v,
        f = r.allowedAutoPlacements,
        h = t.options.placement,
        b = jt(h),
        _ = b === h,
        y = s || (_ || !g ? [jo(h)] : gE(h)),
        k = [h].concat(y).reduce(function (de, pe) {
          return de.concat(
            jt(pe) === Vc
              ? hE(t, {
                  placement: pe,
                  boundary: l,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: g,
                  allowedAutoPlacements: f,
                })
              : pe,
          );
        }, []),
        w = t.rects.reference,
        S = t.rects.popper,
        x = new Map(),
        A = !0,
        j = k[0],
        P = 0;
      P < k.length;
      P++
    ) {
      var M = k[P],
        U = jt(M),
        F = nn(M) === en,
        $ = [qe, ct].indexOf(U) >= 0,
        z = $ ? "width" : "height",
        V = Wa(t, { placement: M, boundary: l, rootBoundary: d, altBoundary: p, padding: u }),
        G = $ ? (F ? ut : Ue) : F ? ct : qe;
      w[z] > S[z] && (G = jo(G));
      var K = jo(G),
        B = [];
      if (
        (o && B.push(V[U] <= 0),
        c && B.push(V[G] <= 0, V[K] <= 0),
        B.every(function (de) {
          return de;
        }))
      ) {
        ((j = M), (A = !1));
        break;
      }
      x.set(M, B);
    }
    if (A)
      for (
        var D = g ? 3 : 1,
          _e = function (pe) {
            var ue = k.find(function (Te) {
              var ke = x.get(Te);
              if (ke)
                return ke.slice(0, pe).every(function (Me) {
                  return Me;
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
const _E = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: bE,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function nv(e, t, r) {
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
function av(e) {
  return [qe, ut, ct, Ue].some(function (t) {
    return e[t] >= 0;
  });
}
function mE(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    i = Wa(t, { elementContext: "reference" }),
    c = Wa(t, { altBoundary: !0 }),
    s = nv(i, n),
    u = nv(c, a, o),
    l = av(s),
    d = av(u);
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
const yE = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: mE,
};
function wE(e, t, r) {
  var n = jt(e),
    a = [Ue, qe].indexOf(n) >= 0 ? -1 : 1,
    o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = o[0],
    c = o[1];
  return (
    (i = i || 0),
    (c = (c || 0) * a),
    [Ue, ut].indexOf(n) >= 0 ? { x: c, y: i } : { x: i, y: c }
  );
}
function kE(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    o = a === void 0 ? [0, 0] : a,
    i = mg.reduce(function (l, d) {
      return ((l[d] = wE(d, t.rects, o)), l);
    }, {}),
    c = i[t.placement],
    s = c.x,
    u = c.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[n] = i));
}
const OE = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: kE };
function SE(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = xg({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const EE = { name: "popperOffsets", enabled: !0, phase: "read", fn: SE, data: {} };
function xE(e) {
  return e === "x" ? "y" : "x";
}
function CE(e) {
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
    p = r.tether,
    v = p === void 0 ? !0 : p,
    g = r.tetherOffset,
    f = g === void 0 ? 0 : g,
    h = Wa(t, { boundary: s, rootBoundary: u, padding: d, altBoundary: l }),
    b = jt(t.placement),
    _ = nn(t.placement),
    y = !_,
    k = Kc(b),
    w = xE(k),
    S = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    A = t.rects.popper,
    j = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    P =
      typeof j == "number"
        ? { mainAxis: j, altAxis: j }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, j),
    M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    U = { x: 0, y: 0 };
  if (S) {
    if (o) {
      var F,
        $ = k === "y" ? qe : Ue,
        z = k === "y" ? ct : ut,
        V = k === "y" ? "height" : "width",
        G = S[k],
        K = G + h[$],
        B = G - h[z],
        D = v ? -A[V] / 2 : 0,
        _e = _ === en ? x[V] : A[V],
        ie = _ === en ? -A[V] : -x[V],
        ce = t.elements.arrow,
        de = v && ce ? Hc(ce) : { width: 0, height: 0 },
        pe = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : kg(),
        ue = pe[$],
        Te = pe[z],
        ke = Ta(0, x[V], de[V]),
        Me = y ? x[V] / 2 - D - ke - ue - P.mainAxis : _e - ke - ue - P.mainAxis,
        ve = y ? -x[V] / 2 + D + ke + Te + P.mainAxis : ie + ke + Te + P.mainAxis,
        Le = t.elements.arrow && ao(t.elements.arrow),
        Yt = Le ? (k === "y" ? Le.clientTop || 0 : Le.clientLeft || 0) : 0,
        lt = (F = M?.[k]) != null ? F : 0,
        xe = G + Me - lt - Yt,
        Ce = G + ve - lt,
        wt = Ta(v ? Zo(K, xe) : K, G, v ? _r(B, Ce) : B);
      ((S[k] = wt), (U[k] = wt - G));
    }
    if (c) {
      var Ze,
        $e = k === "x" ? qe : Ue,
        Ne = k === "x" ? ct : ut,
        Ae = S[w],
        re = w === "y" ? "height" : "width",
        Oe = Ae + h[$e],
        Ie = Ae - h[Ne],
        kt = [qe, Ue].indexOf(b) !== -1,
        Ar = (Ze = M?.[w]) != null ? Ze : 0,
        le = kt ? Oe : Ae - x[re] - A[re] - Ar + P.altAxis,
        Xt = kt ? Ae + x[re] + A[re] - Ar - P.altAxis : Ie,
        Qe = v && kt ? XS(le, Ae, Xt) : Ta(v ? le : Oe, Ae, v ? Xt : Ie);
      ((S[w] = Qe), (U[w] = Qe - Ae));
    }
    t.modifiersData[n] = U;
  }
}
const RE = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: CE,
  requiresIfExists: ["offset"],
};
function PE(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function AE(e) {
  return e === We(e) || !st(e) ? Wc(e) : PE(e);
}
function IE(e) {
  var t = e.getBoundingClientRect(),
    r = tn(t.width) / e.offsetWidth || 1,
    n = tn(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function jE(e, t, r) {
  r === void 0 && (r = !1);
  var n = st(t),
    a = st(t) && IE(t),
    o = cr(t),
    i = rn(e, a, r),
    c = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Mt(t) !== "body" || Yc(o)) && (c = AE(t)),
      st(t) ? ((s = rn(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : o && (s.x = Jc(o))),
    {
      x: i.left + c.scrollLeft - s.x,
      y: i.top + c.scrollTop - s.y,
      width: i.width,
      height: i.height,
    }
  );
}
function DE(e) {
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
function TE(e) {
  var t = DE(e);
  return GS.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function ME(e) {
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
function LE(e) {
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
var ov = { placement: "bottom", modifiers: [], strategy: "absolute" };
function iv() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function NE(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    o = a === void 0 ? ov : a;
  return function (c, s, u) {
    u === void 0 && (u = o);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, ov, o),
        modifiersData: {},
        elements: { reference: c, popper: s },
        attributes: {},
        styles: {},
      },
      d = [],
      p = !1,
      v = {
        state: l,
        setOptions: function (b) {
          var _ = typeof b == "function" ? b(l.options) : b;
          (f(),
            (l.options = Object.assign({}, o, l.options, _)),
            (l.scrollParents = {
              reference: Er(c) ? Ma(c) : c.contextElement ? Ma(c.contextElement) : [],
              popper: Ma(s),
            }));
          var y = TE(LE([].concat(n, l.options.modifiers)));
          return (
            (l.orderedModifiers = y.filter(function (k) {
              return k.enabled;
            })),
            g(),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!p) {
            var b = l.elements,
              _ = b.reference,
              y = b.popper;
            if (iv(_, y)) {
              ((l.rects = {
                reference: jE(_, ao(y), l.options.strategy === "fixed"),
                popper: Hc(y),
              }),
                (l.reset = !1),
                (l.placement = l.options.placement),
                l.orderedModifiers.forEach(function (P) {
                  return (l.modifiersData[P.name] = Object.assign({}, P.data));
                }));
              for (var k = 0; k < l.orderedModifiers.length; k++) {
                if (l.reset === !0) {
                  ((l.reset = !1), (k = -1));
                  continue;
                }
                var w = l.orderedModifiers[k],
                  S = w.fn,
                  x = w.options,
                  A = x === void 0 ? {} : x,
                  j = w.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: A, name: j, instance: v }) || l);
              }
            }
          }
        },
        update: ME(function () {
          return new Promise(function (h) {
            (v.forceUpdate(), h(l));
          });
        }),
        destroy: function () {
          (f(), (p = !0));
        },
      };
    if (!iv(c, s)) return v;
    v.setOptions(u).then(function (h) {
      !p && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function g() {
      l.orderedModifiers.forEach(function (h) {
        var b = h.name,
          _ = h.options,
          y = _ === void 0 ? {} : _,
          k = h.effect;
        if (typeof k == "function") {
          var w = k({ state: l, name: b, instance: v, options: y }),
            S = function () {};
          d.push(w || S);
        }
      });
    }
    function f() {
      (d.forEach(function (h) {
        return h();
      }),
        (d = []));
    }
    return v;
  };
}
var BE = [sE, EE, oE, WS, OE, _E, RE, tE, yE],
  FE = NE({ defaultModifiers: BE }),
  Ms,
  sv;
function qE() {
  if (sv) return Ms;
  sv = 1;
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
    (Ms = function (i, c) {
      try {
        return a(i, c);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    Ms
  );
}
var UE = qE();
const zE = ir(UE);
var $E = [],
  VE = function (t, r, n) {
    n === void 0 && (n = {});
    var a = m.useRef(null),
      o = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || $E,
      },
      i = m.useState({
        styles: {
          popper: { position: o.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      c = i[0],
      s = i[1],
      u = m.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (v) {
            var g = v.state,
              f = Object.keys(g.elements);
            Qo.flushSync(function () {
              s({
                styles: Yf(
                  f.map(function (h) {
                    return [h, g.styles[h] || {}];
                  }),
                ),
                attributes: Yf(
                  f.map(function (h) {
                    return [h, g.attributes[h]];
                  }),
                ),
              });
            });
          },
          requires: ["computeStyles"],
        };
      }, []),
      l = m.useMemo(
        function () {
          var p = {
            onFirstUpdate: o.onFirstUpdate,
            placement: o.placement,
            strategy: o.strategy,
            modifiers: [].concat(o.modifiers, [u, { name: "applyStyles", enabled: !1 }]),
          };
          return zE(a.current, p) ? a.current || p : ((a.current = p), p);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, u],
      ),
      d = m.useRef();
    return (
      Xf(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      Xf(
        function () {
          if (!(t == null || r == null)) {
            var p = n.createPopper || FE,
              v = p(t, r, l);
            return (
              (d.current = v),
              function () {
                (v.destroy(), (d.current = null));
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
  GE = function () {},
  HE = function () {
    return Promise.resolve(null);
  },
  KE = [];
function WE(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    o = e.modifiers,
    i = o === void 0 ? KE : o,
    c = e.referenceElement,
    s = e.onFirstUpdate,
    u = e.innerRef,
    l = e.children,
    d = m.useContext(AS),
    p = m.useState(null),
    v = p[0],
    g = p[1],
    f = m.useState(null),
    h = f[0],
    b = f[1];
  m.useEffect(
    function () {
      DS(u, v);
    },
    [u, v],
  );
  var _ = m.useMemo(
      function () {
        return {
          placement: r,
          strategy: a,
          onFirstUpdate: s,
          modifiers: [].concat(i, [{ name: "arrow", enabled: h != null, options: { element: h } }]),
        };
      },
      [r, a, s, i, h],
    ),
    y = VE(c || d, v, _),
    k = y.state,
    w = y.styles,
    S = y.forceUpdate,
    x = y.update,
    A = m.useMemo(
      function () {
        return {
          ref: g,
          style: w.popper,
          placement: k ? k.placement : r,
          hasPopperEscaped:
            k && k.modifiersData.hide ? k.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            k && k.modifiersData.hide ? k.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: w.arrow, ref: b },
          forceUpdate: S || GE,
          update: x || HE,
        };
      },
      [g, b, r, k, w, x, S],
    );
  return IS(l)(A);
}
function JE(e) {
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
            p = d === void 0 ? { x: 0, y: 0 } : d,
            v = s.placement.split("-"),
            g = J(v, 1),
            f = g[0],
            h =
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
            _ = l.height - 2 * t;
          (f === "top" && (_ = s.rects.reference.y + h.y - t),
            f === "bottom" && (_ = l.height - p.y - t),
            f === "left" && (b = s.rects.reference.x + h.x - t),
            f === "right" && (b = l.width - p.x - t),
            (s.styles.popper.maxWidth = "".concat(b, "px")),
            (s.styles.popper.maxHeight = "".concat(_, "px")));
        }
      },
    },
  ];
}
var _c = 5,
  YE = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: _c,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function XE() {
  return null;
}
var ZE = [0, 8];
function QE(e) {
  var t = e.children,
    r = t === void 0 ? XE : t,
    n = e.offset,
    a = n === void 0 ? ZE : n,
    o = e.placement,
    i = o === void 0 ? "bottom-start" : o,
    c = e.referenceElement,
    s = c === void 0 ? void 0 : c,
    u = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    p = e.shouldFitViewport,
    v = p === void 0 ? !1 : p,
    g = J(a, 2),
    f = g[0],
    h = g[1],
    b = m.useMemo(
      function () {
        var y = {
            name: "preventOverflow",
            options: { padding: _c, rootBoundary: v ? "viewport" : "document" },
          },
          k = { name: "offset", options: { offset: [f, h] } },
          w = v ? JE({ viewportPadding: _c }) : [];
        return [].concat(YE, [y, k], Ve(w));
      },
      [f, h, v],
    ),
    _ = m.useMemo(
      function () {
        return u == null ? b : [].concat(Ve(b), Ve(u));
      },
      [b, u],
    );
  return O.createElement(WE, { modifiers: _, placement: i, strategy: d, referenceElement: s }, r);
}
var Cg = "atlaskit-portal-container",
  Rg = "body > .atlaskit-portal-container",
  Pg = "atlaskit-portal",
  ex = function (t) {
    var r = document.createElement("div");
    return ((r.className = Pg), (r.style.zIndex = "".concat(t)), r);
  },
  Ag = function () {
    return document.body;
  },
  Ig = function () {
    var t = document.querySelector(Rg);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = Cg),
        (n.style.display = "flex"),
        (r = Ag()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  tx = function (t) {
    Ig().removeChild(t);
  },
  rx = function (t) {
    t.parentElement || Ig().appendChild(t);
  },
  jg = function () {
    return document !== void 0;
  },
  nx = function (t) {
    if (jg()) {
      var r = document.createElement("div");
      return ((r.className = Pg), (r.style.zIndex = "".concat(t)), r);
    }
  },
  ax = function () {
    if (jg()) {
      var t = document.querySelector(Rg);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = Cg),
          (n.style.display = "flex"),
          (r = Ag()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function ox(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useMemo(
      function () {
        return ex(t);
      },
      [t],
    );
  return (
    rx(n),
    m.useEffect(
      function () {
        return function () {
          tx(n);
        };
      },
      [n],
    ),
    Qo.createPortal(r, n)
  );
}
var Dg = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function ix(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useState(null),
    a = J(n, 2),
    o = a[0],
    i = a[1];
  Dg(
    function () {
      var s = nx(t);
      i(s);
      var u = ax();
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
  var c = O.createElement(m.Suspense, { fallback: null }, r);
  return o ? Qo.createPortal(c, o) : null;
}
var sx = function (t) {
    var r = m.useState(!1),
      n = J(r, 2),
      a = n[0],
      o = n[1],
      i = m.useState(function () {
        return t === "layoutEffect" ? Dg : m.useEffect;
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
  cx = "akPortalMount",
  ux = "akPortalUnmount",
  cv = {
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
  lx = function (t) {
    return cv.hasOwnProperty(t) ? cv[t] : null;
  },
  dx = function (t, r) {
    var n = { layer: lx(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function uv(e, t) {
  var r = dx(e, t);
  window.dispatchEvent(r);
}
var fx = function (t) {
  var r = Number(t);
  m.useEffect(
    function () {
      return (
        uv(cx, r),
        function () {
          uv(ux, r);
        }
      );
    },
    [r],
  );
};
function vx(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    o = a === void 0 ? "effect" : a,
    i = sx(o);
  return (
    fx(r),
    Sr("platform_design_system_team_portal_logic_r18_fix")
      ? O.createElement(ix, { zIndex: r }, n)
      : i
        ? O.createElement(ox, { zIndex: r }, n)
        : null
  );
}
var La = new Set(),
  Ja = null;
function lv() {
  if (!Ja) {
    Ja = ki.bindAll(window, [
      { type: "dragend", listener: Ls },
      { type: "pointerdown", listener: Ls },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            Ls();
          };
        })(),
      },
    ]);
    var e = Array.from(La);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function Ls() {
  var e;
  ((e = Ja) === null || e === void 0 || e(), (Ja = null));
  var t = Array.from(La);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function px() {
  return ki.bindAll(window, [
    { type: "dragstart", listener: lv },
    { type: "dragenter", listener: lv },
  ]);
}
var yo = null;
function hx(e) {
  return (
    yo || (yo = px()),
    La.add(e),
    e.onRegister({ isDragging: Ja !== null }),
    function () {
      if ((La.delete(e), La.size === 0)) {
        var r;
        ((r = yo) === null || r === void 0 || r(), (yo = null));
      }
    }
  );
}
var Na = null;
function Pa() {
  Na != null && (window.clearTimeout(Na), (Na = null));
}
function dv(e, t) {
  (Pa(),
    (Na = window.setTimeout(function () {
      ((Na = null), e());
    }, t)));
}
var Ot = null;
function gx(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(Ot && Ot.entry === e);
  }
  function n() {
    r() && (Pa(), (Ot = null));
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
        ((t = "shown"), Pa());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), Pa(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function c(v) {
    var g = v.isImmediate;
    if (r()) {
      if (t === "waiting-to-show") {
        o();
        return;
      }
      if (t !== "waiting-to-hide") {
        if (g) {
          o();
          return;
        }
        ((t = "waiting-to-hide"),
          dv(function () {
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
    var v = !!(Ot && Ot.isVisible());
    (Ot && (Pa(), Ot.entry.hide({ isImmediate: !0 }), Ot.entry.done(), (Ot = null)),
      (Ot = { entry: e, isVisible: u }));
    function g() {
      ((t = "shown"), e.show({ isImmediate: v }));
    }
    if (v) {
      g();
      return;
    }
    ((t = "waiting-to-show"), dv(g, e.delay));
  }
  d();
  var p = {
    keep: i,
    abort: n,
    isActive: r,
    requestHide: c,
    finishHideAnimation: s,
    mousePosition: l(),
  };
  return p;
}
function bx(e, t) {
  var r = ik();
  return t ? "".concat(r(e)) : void 0;
}
var Ns = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81u0j _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
    regularFont: "_11c81o8v",
  },
  _x = function (t) {
    var r = t.shortcut;
    return m.createElement(
      "div",
      { className: R([Ns.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return m.createElement(
          "kbd",
          {
            key: "".concat(n, "-").concat(a),
            className: R([
              Ns.shortcutSegment,
              Sr("platform-tooltip-shortcuts-regular-font") && Ns.regularFont,
            ]),
          },
          n,
        );
      }),
    );
  },
  Tg = m.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      o = t.children,
      i = t.placement,
      c = t.testId,
      s = t.onMouseOut,
      u = t.onMouseOver,
      l = t.id,
      d = t.shortcut;
    return m.createElement(
      "div",
      { ref: r, style: n, "data-testid": c ? "".concat(c, "--wrapper") : void 0 },
      m.createElement(
        "div",
        {
          role: "tooltip",
          className: R(["_80om73ad", a]),
          onMouseOut: s,
          onMouseOver: u,
          "data-placement": i,
          "data-testid": c,
          id: l,
        },
        o,
        d && m.createElement(_x, { shortcut: d }),
      ),
    );
  });
Tg.displayName = "TooltipPrimitive";
var fv = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  Mg = m.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      o = t.children,
      i = t.truncate,
      c = t.placement,
      s = t.testId,
      u = t.onMouseOut,
      l = t.onMouseOver,
      d = t.id,
      p = t.shortcut;
    return m.createElement(
      Tg,
      {
        ref: r,
        style: n,
        className: R([fv.base, i && fv.truncate, a]),
        placement: c,
        testId: s,
        id: d,
        onMouseOut: u,
        onMouseOver: l,
        shortcut: p,
      },
      o,
    );
  });
Mg.displayName = "TooltipContainer";
function vv(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function pv(e, t) {
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
function zr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pv(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var mx = sk.tooltip(),
  hv = { componentName: "tooltip", packageName: "@atlaskit/tooltip", packageVersion: "20.9.0" },
  yx = { top: "bottom", bottom: "top", left: "right", right: "left" },
  wx = function (t) {
    return t.split("-")[0];
  };
function kx(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    o = a === void 0 ? "bottom" : a,
    i = e.content,
    c = e.truncate,
    s = c === void 0 ? !1 : c,
    u = e.component,
    l = u === void 0 ? Mg : u,
    d = e.tag,
    p = d === void 0 ? "div" : d,
    v = e.testId,
    g = e.delay,
    f = g === void 0 ? 300 : g,
    h = e.onShow,
    b = h === void 0 ? Pe : h,
    _ = e.onHide,
    y = _ === void 0 ? Pe : _,
    k = e.canAppear,
    w = e.hideTooltipOnClick,
    S = w === void 0 ? !1 : w,
    x = e.hideTooltipOnMouseDown,
    A = x === void 0 ? !1 : x,
    j = e.analyticsContext,
    P = e.strategy,
    M = P === void 0 ? "fixed" : P,
    U = e.ignoreTooltipPointerEvents,
    F = U === void 0 ? !1 : U,
    $ = e.isScreenReaderAnnouncementDisabled,
    z = $ === void 0 ? !1 : $,
    V = e.shortcut,
    G = n === "mouse" ? o : n,
    K = _d(zr({ fn: b, action: "displayed", analyticsData: j }, hv)),
    B = _d(zr({ fn: y, action: "hidden", analyticsData: j }, hv)),
    D = m.useRef(null),
    _e = m.useState("hide"),
    ie = J(_e, 2),
    ce = ie[0],
    de = ie[1],
    pe = m.useRef(null),
    ue = m.useRef(null),
    Te = function (oe) {
      ((ue.current = oe), (pe.current = oe ? oe.firstElementChild : null));
    },
    ke = m.useCallback(function (L) {
      pe.current = L;
    }, []),
    Me = Oa(ce),
    ve = Oa(K),
    Le = Oa(B),
    Yt = Oa(f),
    lt = Oa(k),
    xe = m.useRef(!1),
    Ce = m.useCallback(function (L) {
      ((D.current = L), (xe.current = !1));
    }, []),
    wt = m.useCallback(
      function () {
        D.current &&
          (xe.current && Le.current(), (D.current = null), (xe.current = !1), de("hide"));
      },
      [Le],
    ),
    Ze = m.useCallback(
      function () {
        D.current && (D.current.abort(), xe.current && Le.current(), (D.current = null));
      },
      [Le],
    );
  m.useEffect(
    function () {
      return function () {
        D.current && Ze();
      };
    },
    [Ze],
  );
  var $e = m.useRef(!1);
  m.useEffect(function () {
    return hx({
      onRegister: function (oe) {
        var Bt = oe.isDragging;
        $e.current = Bt;
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
  var Ne = m.useCallback(
      function (L) {
        var oe;
        if (!$e.current) {
          if ((D.current && !D.current.isActive() && Ze(), D.current && D.current.isActive())) {
            D.current.keep();
            return;
          }
          if (!(lt.current && !((oe = lt.current) !== null && oe !== void 0 && oe.call(lt)))) {
            var Bt = {
                source: L,
                delay: Yt.current,
                show: function (Ir) {
                  var ln = Ir.isImmediate;
                  (xe.current || ((xe.current = !0), ve.current()),
                    de(ln ? "show-immediate" : "fade-in"));
                },
                hide: function (Ir) {
                  var ln = Ir.isImmediate;
                  de(ln ? "hide" : "before-fade-out");
                },
                done: wt,
              },
              Ri = gx(Bt);
            Ce(Ri);
          }
        }
      },
      [lt, Yt, wt, Ce, Ze, ve],
    ),
    Ae = m.useCallback(
      function () {
        var L;
        (L = D.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
      },
      [D],
    );
  (lS({ onClose: Ae, isDisabled: ce === "hide" || ce === "fade-out" }),
    m.useEffect(
      function () {
        if (ce === "hide") return Pe;
        ce === "before-fade-out" && de("fade-out");
        var L = ki.bind(window, {
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
  var re = m.useCallback(
      function () {
        A && D.current && D.current.requestHide({ isImmediate: !0 });
      },
      [A],
    ),
    Oe = m.useCallback(
      function () {
        S && D.current && D.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    Ie = m.useCallback(
      function (L) {
        if (!(ue.current && L.target === ue.current) && !L.defaultPrevented) {
          L.preventDefault();
          var oe =
            n === "mouse"
              ? { type: "mouse", mouse: vv({ left: L.clientX, top: L.clientY }) }
              : { type: "keyboard" };
          Ne(oe);
        }
      },
      [n, Ne],
    ),
    kt = m.useCallback(function (L) {
      (ue.current && L.target === ue.current) ||
        L.defaultPrevented ||
        (L.preventDefault(), D.current && D.current.requestHide({ isImmediate: !1 }));
    }, []),
    Ar =
      n === "mouse"
        ? function (L) {
            var oe;
            (oe = D.current) !== null &&
              oe !== void 0 &&
              oe.isActive() &&
              (D.current.mousePosition = vv({ left: L.clientX, top: L.clientY }));
          }
        : void 0,
    le = m.useCallback(function () {
      if (D.current && D.current.isActive()) {
        D.current.keep();
        return;
      }
    }, []),
    Xt = m.useCallback(
      function (L) {
        try {
          if (!L.target.matches(":focus-visible")) return;
        } catch {}
        Ne({ type: "keyboard" });
      },
      [Ne],
    ),
    Qe = m.useCallback(function () {
      D.current && D.current.requestHide({ isImmediate: !1 });
    }, []),
    Nt = m.useCallback(
      function (L) {
        L === "exiting" &&
          Me.current === "fade-out" &&
          D.current &&
          D.current.finishHideAnimation();
      },
      [Me],
    ),
    oo = p,
    dt = ce !== "hide" && !!i,
    io = !z && dt,
    Zc = ce !== "hide" && ce !== "fade-out",
    Hg = m.useCallback(function () {
      var L;
      (L = D.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
    }, []);
  pS({ isOpen: dt && Zc, onClose: Hg });
  var Qc = function () {
      var oe;
      if (n === "mouse" && (oe = D.current) !== null && oe !== void 0 && oe.mousePosition) {
        var Bt;
        return (Bt = D.current) === null || Bt === void 0 ? void 0 : Bt.mousePosition;
      }
      return pe.current || void 0;
    },
    un = bx("tooltip", io),
    Ci = {
      onMouseOver: Ie,
      onMouseOut: kt,
      onMouseMove: Ar,
      onMouseDown: re,
      onClick: Oe,
      onFocus: Xt,
      onBlur: Qe,
    };
  v && (Ci["data-testid"] = "".concat(v, "--container"));
  var eu = typeof t == "function";
  m.useEffect(
    function () {
      if (!eu) {
        var L = pe.current;
        if (!(!L || !un))
          return (
            L.setAttribute("aria-describedby", un),
            function () {
              return L.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [eu, un],
  );
  var tu = io
    ? O.createElement(
        "span",
        { "data-testid": v ? "".concat(v, "-hidden") : void 0, hidden: !0, id: un },
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
          t(zr(zr({}, Ci), {}, { "aria-describedby": un, ref: ke })),
          tu,
        )
      : O.createElement(oo, Z({}, Ci, { ref: Te, role: "presentation" }), t, tu),
    dt
      ? O.createElement(
          vx,
          { zIndex: mx },
          O.createElement(QE, { placement: G, referenceElement: Qc(), strategy: M }, function (L) {
            var oe = L.ref,
              Bt = L.style,
              Ri = L.update,
              Pi = L.placement,
              Ir = n === "mouse" ? void 0 : yx[wx(Pi)];
            return O.createElement(
              bg,
              { appear: !0 },
              Zc &&
                O.createElement(
                  PS,
                  {
                    distance: "constant",
                    entranceDirection: Ir,
                    exitDirection: Ir,
                    onFinish: Nt,
                    duration: ce !== "show-immediate" ? "medium" : "none",
                  },
                  function (ln) {
                    var Kg = ln.className;
                    return O.createElement(
                      l,
                      {
                        ref: oe,
                        className: "Tooltip ".concat(Kg),
                        style: zr(zr({}, Bt), F && { pointerEvents: "none" }),
                        truncate: s,
                        placement: G,
                        testId: Qc() ? v : v && "".concat(v, "--unresolved"),
                        onMouseOut: kt,
                        onMouseOver: le,
                        shortcut: V,
                      },
                      typeof i == "function" ? i({ update: Ri }) : i,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var Ox = [
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
  Ea = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  gv = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syazazsu _k48pmoej" },
  Lg = function (t) {
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
      p = d === void 0 ? "Sort ascending" : d,
      v = t.descendingSortTooltip,
      g = v === void 0 ? "Sort descending" : v,
      f = t.buttonAriaRoleDescription,
      h = f === void 0 ? "Sort button" : f,
      b = t.isIconOnlyHeader,
      _ = te(t, Ox),
      y = m.useState(!1),
      k = J(y, 2),
      w = k[0],
      S = k[1],
      x = m.useState(!1),
      A = J(x, 2),
      j = A[0],
      P = A[1],
      M = u === l || c !== void 0,
      U = w || M || j,
      F = U && b,
      $ = !b || U || (b && !j),
      z = m.useCallback(
        function () {
          P?.(!0);
        },
        [P],
      ),
      V = m.useCallback(
        function () {
          P?.(!1);
        },
        [P],
      ),
      G = m.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      K = m.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      B = O.createElement(
        wi,
        { xcss: gv.headCellContainer, onMouseEnter: G, onMouseLeave: K, onFocus: z, onBlur: V },
        O.createElement(
          kx,
          { content: c === Or ? p : g },
          O.createElement(
            $h,
            { onClick: s, xcss: Ea.buttonWrapper, "aria-roledescription": h },
            O.createElement(
              Yo,
              { xcss: F ? Ea.hideIconHeaderWrapper : Ea.visibleHeaderWrapper },
              O.createElement("span", { className: R([gv.text]) }, r),
            ),
            $ &&
              O.createElement(
                Yo,
                { xcss: U ? Ea.sortIconVisibleWrapper : Ea.sortIconHiddenWrapper },
                c === Or
                  ? O.createElement(cS, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : O.createElement(oS, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return O.createElement(
      eS,
      Z(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof o != "string" ? o : null,
        },
        _,
        { isSortable: i, sortOrder: c },
      ),
      i ? B : r,
    );
  },
  Sx = ["isRanking", "refHeight", "refWidth"];
function Ex(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, Ng() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Ng() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ng = function () {
    return !!e;
  })();
}
var xx = (function (e) {
    function t() {
      return (ge(this, t), Ex(this, t, arguments));
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
              i = te(n, Sx),
              c = Vy(a, o);
            return O.createElement(Lg, Z({ inlineStyles: c }, i));
          },
        },
      ])
    );
  })(O.Component),
  Cx = rS(xx),
  Rx = ["cells"],
  Px = [
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
function Ax(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, Bg() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Bg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Bg = function () {
    return !!e;
  })();
}
var Ix = (function (e) {
    function t(r) {
      var n;
      return (ge(this, t), (n = Ax(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Xe(t, e),
      be(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            Vo(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              Vo(n.sortKey, n.head);
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
              p = a.testId,
              v = this.state.activeSortButtonId;
            if (!o) return null;
            var g = d ? Cx : Lg,
              f = o.cells,
              h = te(o, Rx);
            return O.createElement(
              QO,
              Z({}, h, { isRanking: l, testId: p && "".concat(p, "--head") }),
              O.createElement(
                "tr",
                null,
                f.map(function (b, _) {
                  var y = b.ascendingSortTooltip,
                    k = b.buttonAriaRoleDescription,
                    w = b.colSpan,
                    S = b.content,
                    x = b.descendingSortTooltip,
                    A = b.isIconOnlyHeader,
                    j = b.isSortable,
                    P = b.key,
                    M = b.shouldTruncate,
                    U = b.testId,
                    F = b.width,
                    $ = te(b, Px),
                    z = "head-cell-".concat(_),
                    V = function () {
                      (n.setState({ activeSortButtonId: z }), j && u(b)());
                    };
                  return O.createElement(
                    g,
                    Z(
                      {
                        colSpan: w,
                        content: S,
                        isFixedSize: s,
                        isIconOnlyHeader: A,
                        isSortable: !!j,
                        isRanking: l,
                        key: P || _,
                        headCellId: z,
                        activeSortButtonId: v,
                        onClick: V,
                        testId: U || p,
                        shouldTruncate: M,
                        sortOrder: P === i ? c : void 0,
                        width: F,
                        ascendingSortTooltip: y,
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
  jx = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function Dx(e) {
  switch (e) {
    case Ko:
      return Or;
    case Or:
      return Ko;
    default:
      return e;
  }
}
var Tx = function (t) {
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
      p = t.label,
      v = t.isLoading,
      g = v === void 0 ? !1 : v,
      f = t.isFixedSize,
      h = f === void 0 ? !1 : f,
      b = t.rowsPerPage,
      _ = b === void 0 ? 1 / 0 : b,
      y = t.onSetPage,
      k = y === void 0 ? Pe : y,
      w = t.onSort,
      S = w === void 0 ? Pe : w,
      x = t.page,
      A = x === void 0 ? 1 : x,
      j = t.emptyView,
      P = t.isRankable,
      M = P === void 0 ? !1 : P,
      U = t.isRankingDisabled,
      F = U === void 0 ? !1 : U,
      $ = t.onRankStart,
      z = $ === void 0 ? Pe : $,
      V = t.onRankEnd,
      G = V === void 0 ? Pe : V,
      K = t.loadingSpinnerSize,
      B = t.paginationi18n,
      D =
        B === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : B,
      _e = m.useState(!1),
      ie = J(_e, 2),
      ce = ie[0],
      de = ie[1],
      pe = m.useRef(null),
      ue = Zr({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      Te = Zr({
        fn: G,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    m.useEffect(
      function () {
        (Vo(i, n), $y(n));
      },
      [i, n],
    );
    var ke = function (Oe) {
        return function () {
          var Ie = Oe.key;
          if (Ie) {
            if (ue && M && Ie === i && c === Ko) {
              ue({ key: null, sortOrder: null, item: Oe });
              return;
            }
            var kt = Ie !== i ? Or : Dx(c);
            ue && ue({ key: Ie, item: Oe, sortOrder: kt });
          }
        };
      },
      Me = function (Oe, Ie) {
        k(Oe, Ie);
      },
      ve = function (Oe) {
        (de(!0), z(Oe));
      },
      Le = function (Oe) {
        (de(!1), Te(Oe));
      },
      Yt = function () {
        return K || (vh(o || [], A, _).length > 2 ? Wo : s0);
      },
      lt = function () {
        return g ? O.createElement(v0, { testId: l }) : j && O.createElement(p0, { testId: l }, j);
      },
      xe = o && o.length,
      Ce,
      wt = !1;
    (d && Number.isInteger(d) && _ && xe && xe <= d
      ? ((Ce = Math.ceil(d / _)), (wt = !0))
      : (Ce = xe && _ ? Math.ceil(xe / _) : 0),
      (Ce = Ce < 1 ? 1 : Ce));
    var Ze = A > Ce ? Ce : A,
      $e = !!xe,
      Ne = Yt(),
      Ae = lt();
    return O.createElement(
      O.Fragment,
      null,
      O.createElement(
        Eh,
        {
          isLoading: g && $e,
          spinnerSize: Ne,
          targetRef: function () {
            return pe.current;
          },
          testId: l,
          loadingLabel: s,
        },
        O.createElement(
          l0,
          { isFixedSize: h, "aria-label": p, hasDataRow: $e, testId: l, isLoading: g },
          !!r && O.createElement(d0, null, r),
          n &&
            O.createElement(Ix, {
              head: n,
              onSort: ke,
              sortKey: i,
              sortOrder: c,
              isRanking: ce,
              isRankable: M,
              testId: l,
            }),
          $e &&
            O.createElement(Lx, {
              ref: pe,
              highlightedRowIndex: a,
              rows: o,
              head: n,
              sortKey: i,
              sortOrder: c,
              rowsPerPage: _,
              page: Ze,
              isFixedSize: h || !1,
              onPageRowsUpdate: u,
              isTotalPagesControlledExternally: wt,
              testId: l,
              isRankable: M,
              isRanking: ce,
              onRankStart: ve,
              onRankEnd: Le,
              isRankingDisabled: F || g || !1,
            }),
        ),
      ),
      Ce <= 1
        ? null
        : O.createElement(
            f0,
            { testId: l },
            O.createElement(YO, {
              value: Ze,
              onChange: Me,
              total: Ce,
              i18n: D,
              isDisabled: g,
              testId: l,
            }),
          ),
      !$e &&
        Ae &&
        O.createElement(Oh, { isLoading: g, spinnerSize: Wo, testId: l, loadingLabel: s }, Ae),
    );
  },
  Mx = m.lazy(function () {
    return sp(
      () => import("./body-rZ54dySn.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  Lx = m.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      o = t.isRanking,
      i = t.onRankStart,
      c = t.onRankEnd,
      s = t.isRankingDisabled,
      u = te(t, jx),
      l = a && !u.sortKey,
      d = m.useState(!1),
      p = J(d, 2),
      v = p[0],
      g = p[1];
    m.useEffect(
      function () {
        l && g(!0);
      },
      [l],
    );
    var f = O.createElement(P0, Z({ ref: r }, u));
    return l && v
      ? O.createElement(
          I0,
          { fallback: f },
          O.createElement(
            m.Suspense,
            { fallback: f },
            O.createElement(
              Mx,
              Z({ ref: r }, u, {
                isRanking: o,
                onRankStart: i,
                onRankEnd: c,
                isRankingDisabled: s,
              }),
            ),
          ),
        )
      : f;
  });
function Nx(e, t, r) {
  return (
    (t = X(t)),
    Ye(e, Fg() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Fg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Fg = function () {
    return !!e;
  })();
}
var qg = (function (e) {
  function t() {
    var r;
    ge(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = Nx(this, t, [].concat(a))),
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
        var p = Gy(i, u, l, d);
        (r.setState({ rows: p }), r.onRankEndIfExistsHandler(i));
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
            p = s.highlightedRowIndex,
            v = s.loadingSpinnerSize,
            g = s.isLoading,
            f = s.loadingLabel,
            h = s.isFixedSize,
            b = s.isRankable,
            _ = s.isRankingDisabled,
            y = s.rowsPerPage,
            k = s.paginationi18n,
            w = s.onRankStart,
            S = s.onPageRowsUpdate,
            x = s.testId,
            A = s.label;
          return O.createElement(Tx, {
            paginationi18n: k,
            caption: u,
            emptyView: l,
            head: d,
            highlightedRowIndex: p,
            loadingSpinnerSize: v,
            isLoading: g,
            loadingLabel: f,
            isFixedSize: h,
            onSetPage: this.onSetPageHandler,
            onSort: this.onSortHandler,
            page: a,
            rows: c,
            rowsPerPage: y,
            sortKey: o,
            sortOrder: i,
            isRankable: b,
            isRankingDisabled: _,
            onRankEnd: this.onRankEndHandler,
            onRankStart: w,
            onPageRowsUpdate: S,
            testId: x,
            label: A,
          });
        },
      },
    ])
  );
})(O.Component);
C(qg, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Pe,
  onSort: Pe,
  rowsPerPage: 1 / 0,
});
const Bx = (e) => {
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
  Fx = (e) => ({ cells: Bx() });
function qx(e) {
  return function (t) {
    e.forEach(function (r) {
      typeof r == "function" ? r(t) : r !== null && De(r) === "object" && (r.current = t);
    });
  };
}
var Ug = m.createContext(void 0),
  Ux = function () {
    var t = m.useContext(Ug);
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
var zx = 9;
function bv(e) {
  e.keyCode !== zx && $t(e);
}
function $x(e, t) {
  return e
    ? {
        onMouseDownCapture: $t,
        onMouseUpCapture: $t,
        onKeyDownCapture: bv,
        onKeyUpCapture: bv,
        onTouchStartCapture: $t,
        onTouchEndCapture: $t,
        onPointerDownCapture: $t,
        onPointerUpCapture: $t,
        onClickCapture: $t,
        onClick: $t,
      }
    : t;
}
function Vx(e) {
  switch (e) {
    case "compact":
      return "small";
    default:
      return "medium";
  }
}
function Gx(e) {
  var t = e.appearance,
    r = e.isDisabled,
    n = e.isSelected;
  return r || n
    ? "inherit"
    : t === "primary" || t === "danger" || t === "discovery"
      ? "invert"
      : "inherit";
}
function Hx(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isDisabled,
    a = e.isSelected,
    o = e.testId;
  return O.createElement(Ac, {
    size: Vx(r),
    appearance: Gx({ appearance: t, isDisabled: n, isSelected: a }),
    testId: o ? "".concat(o, "--loading-spinner") : void 0,
  });
}
var Kx = [
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
  Wx = ["className", "css", "as", "style"],
  _v = ", Loading",
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
  Bs = {
    root: "_bfhksm61 _syazazsu _8l3m1l7x _aetrb3bt _1053azsu _f8pjazsu _30l3azsu _9h8hazsu",
    interactive: "_irr31dpa _30l3azsu _1di6fcek _9h8hazsu",
    disabled: "_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28",
  },
  mv = {
    root: "_bfhkomb0 _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31wqm _9h8h15cr _1di617hq",
  },
  yv = {
    root: "_bfhk1ikc _syazal3n _1053al3n _f8pjal3n _30l3al3n _9h8hal3n",
    interactive: "_30l3al3n _irr31j43 _9h8hal3n _1di6h4op",
  },
  wv = {
    root: "_bfhk1v7l _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31rwk _9h8h15cr _1di6yycf",
  },
  kv = {
    root: "_bfhk1vbi _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr37gr8 _9h8h15cr _1di61wu2",
  },
  Ov = {
    root: "_bfhkqtfy _syazazsu _1053azsu _f8pjazsu _30l3azsu _9h8hazsu",
    interactive: "_irr34mfv _30l3azsu _1di619qy _9h8hazsu",
  },
  $r = {
    root: "_bfhk15s3 _syaz1ldt _8l3mcoux _aetrb3bt _10531ldt _f8pj1ldt _30l31ldt _9h8h1ldt",
    insideSplitButton: "_1pbycs5v",
    interactive: "_irr3t71w _30l31pke _1di6yssv _9h8h1pke",
    warning: "_bfhkvdtc _syaz16q2 _30l31pke _irr3vdtc _9h8h1pke _1di6vdtc",
    danger: "_bfhkbeib _syaz1pke _30l31pke _irr3beib _9h8h1pke _1di6beib",
    discovery: "_bfhk1g49 _syaz1pke _30l31pke _irr31g49 _9h8h1pke _1di61g49",
  },
  Jx = O.forwardRef(function (e, t) {
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
      p = d === void 0 ? !1 : d,
      v = e.isCircle,
      g = v === void 0 ? !1 : v,
      f = e.hasIconBefore,
      h = f === void 0 ? !1 : f,
      b = e.hasIconAfter,
      _ = b === void 0 ? !1 : b,
      y = e.shouldFitContainer,
      k = y === void 0 ? !1 : y,
      w = e.spacing,
      S = w === void 0 ? "default" : w,
      x = e.ariaLabel,
      A = e.ariaLabelledBy,
      j = e.children,
      P = e.interactionName,
      M = e.onClick,
      U = e.onMouseDown,
      F = e.onMouseDownCapture,
      $ = e.onMouseUp,
      z = e.onMouseUpCapture,
      V = e.onKeyDown,
      G = e.onKeyDownCapture,
      K = e.onKeyUp,
      B = e.onKeyUpCapture,
      D = e.onTouchStart,
      _e = e.onTouchStartCapture,
      ie = e.onTouchEnd,
      ce = e.onTouchEndCapture,
      de = e.onPointerDown,
      pe = e.onPointerDownCapture,
      ue = e.onPointerUp,
      Te = e.onPointerUpCapture,
      ke = e.onClickCapture,
      Me = e.testId,
      ve = e.analyticsContext,
      Le = e.componentName,
      Yt = e.role,
      lt = e.onMouseOver,
      xe = e.onMouseOut,
      Ce = e.onFocus,
      wt = e.onBlur,
      Ze = e.onMouseMove,
      $e = e.type,
      Ne = te(e, Kx),
      Ae = m.useRef(null),
      re = Ux(),
      Oe = Kh(),
      Ie = !!re,
      kt = re?.isNavigationSplitButton || !1,
      Ar = re?.appearance === "default",
      le = Ar ? "subtle" : r || re?.appearance || "default",
      Xt = re?.spacing || S,
      Qe = re?.isDisabled || i,
      Nt = !Qe && !s,
      oo = Qe || s,
      dt = l && !Qe;
    (cg(Ae, a), Ne.className, Ne.css, Ne.as, Ne.style);
    var io = te(Ne, Wx);
    return O.createElement(
      $h,
      Z(
        {},
        io,
        {
          componentName: Le || "button",
          analyticsContext: ve,
          role: Yt,
          ref: qx([Ae, t]),
          xcss: qh(
            je.base,
            le === "default" && Bs.root,
            le === "default" && Nt && Bs.interactive,
            le === "primary" && mv.root,
            le === "primary" && Nt && mv.interactive,
            le === "warning" && yv.root,
            le === "warning" && Nt && yv.interactive,
            le === "danger" && wv.root,
            le === "danger" && Nt && wv.interactive,
            le === "discovery" && kv.root,
            le === "discovery" && Nt && kv.interactive,
            le === "subtle" && Ov.root,
            le === "subtle" && Nt && Ov.interactive,
            je.linkDecorationUnset,
            dt && $r.root,
            dt && Ie && $r.insideSplitButton,
            dt && Nt && $r.interactive,
            dt && le === "danger" && $r.danger,
            dt && le === "warning" && $r.warning,
            dt && le === "discovery" && $r.discovery,
            Qe && je.disabled,
            Qe && le !== "default" && le !== "subtle" && je.sharedDisabled,
            Qe && le === "default" && Bs.disabled,
            g && !Ie && je.circle,
            Xt === "compact" && je.spacingCompact,
            h && je.buttonIconBefore,
            k && je.fullWidth,
            _ && je.buttonIconAfter,
            p && je.iconButton,
            p && Xt === "compact" && je.iconButtonCompact,
            s && je.loading,
            Ie && je.splitButton,
            kt && je.navigationSplitButton,
          ),
          isDisabled: oo,
          "aria-label": s && x && !A ? "".concat(x, " ").concat(_v) : x,
          "aria-labelledby": s && A ? "".concat(A, " ").concat(Oe) : A,
          onClick: M,
        },
        $x(oo, {
          onMouseDownCapture: F,
          onMouseUpCapture: z,
          onKeyDownCapture: G,
          onKeyUpCapture: B,
          onTouchStartCapture: _e,
          onTouchEndCapture: ce,
          onPointerDownCapture: pe,
          onPointerUpCapture: Te,
          onClickCapture: ke,
        }),
        {
          testId: Me,
          onMouseOver: lt,
          onFocus: Ce,
          onMouseMove: Ze,
          onBlur: wt,
          type: $e,
          interactionName: P,
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
        Ug.Provider,
        { value: void 0 },
        j,
        s &&
          O.createElement(
            "span",
            { className: R([je.loadingOverlay]) },
            Hx({ spacing: Xt, appearance: le, isDisabled: Qe, isSelected: dt, testId: Me }),
          ),
        s && (A || !x) && O.createElement(Mc, { id: Oe }, _v),
      ),
    );
  }),
  Vr = {
    text: "_1reo15vq _18m915vq _16jlkb7n _1o9zkb7n _1bto1l2s _o5721q9c",
    icon: "_1e0c1txw _16jlidpf _1o9zidpf _1wpz1h6o _1wybidpf _vwz4idpf _uiztglyw",
    beforeIcon: "_1he91b66 _w795v77o",
    afterIcon: "_1he9v77o _w7951b66",
    common: "_v564g17y",
    fade: "_tzy4idpf",
  },
  Fs = function (t) {
    var r = t.children,
      n = t.type,
      a = n === void 0 ? "text" : n,
      o = t.isLoading,
      i = t.position;
    return O.createElement(
      "span",
      {
        className: R([
          Vr.common,
          a === "text" && Vr.text,
          a === "icon" && Vr.icon,
          o && Vr.fade,
          i === "before" && Vr.beforeIcon,
          i === "after" && Vr.afterIcon,
        ]),
      },
      r,
    );
  };
function Yx(e) {
  return !e.displayName && !e.render && typeof e == "function";
}
var Sv = function (t) {
    var r = t.icon,
      n = Yx(r),
      a = {
        label: "",
        color: "currentColor",
        size: Sr("platform_dst_button_chevron_sizing")
          ? function (o) {
              return o.startsWith("Chevron") ? "small" : "medium";
            }
          : void 0,
      };
    return O.createElement(O.Fragment, null, n ? r(a) : O.createElement(r, a));
  },
  Xx = [
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
  Zx = ["className", "css", "as", "style"],
  Xc = O.memo(
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
        p = t.isDisabled,
        v = t.isLoading,
        g = v === void 0 ? !1 : v,
        f = t.isSelected,
        h = t.onClick,
        b = t.onClickCapture,
        _ = t.onKeyDownCapture,
        y = t.onKeyUpCapture,
        k = t.onMouseDownCapture,
        w = t.onMouseUpCapture,
        S = t.onPointerDownCapture,
        x = t.onPointerUpCapture,
        A = t.onTouchEndCapture,
        j = t.onTouchStartCapture,
        P = t.shouldFitContainer,
        M = t.spacing,
        U = t.testId,
        F = t.type,
        $ = F === void 0 ? "button" : F,
        z = te(t, Xx);
      (z.className, z.css, z.as, z.style);
      var V = te(z, Zx);
      return O.createElement(
        Jx,
        Z(
          {
            analyticsContext: n,
            ref: r,
            appearance: a,
            autoFocus: c,
            isDisabled: p,
            isLoading: g,
            isSelected: f,
            hasIconBefore: !!l,
            hasIconAfter: !!u,
            shouldFitContainer: P,
            spacing: M,
            ariaLabel: o,
            ariaLabelledBy: i,
            onClick: h,
            onClickCapture: b,
            onKeyDownCapture: _,
            onKeyUpCapture: y,
            onMouseDownCapture: k,
            onMouseUpCapture: w,
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
          m.Fragment,
          null,
          l &&
            O.createElement(
              Fs,
              { type: "icon", position: "before", isLoading: g },
              O.createElement(Sv, { icon: l }),
            ),
          s && O.createElement(Fs, { isLoading: g }, s),
          u &&
            O.createElement(
              Fs,
              { type: "icon", position: "after", isLoading: g },
              O.createElement(Sv, { icon: u }),
            ),
        ),
      );
    }),
  );
Xc.displayName = "Button";
const wo = _i((e) => {
  const { stateStore: t } = mi(),
    r = Fx();
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
            E.jsx(qg, {
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
                      children: E.jsx(Xc, {
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
function Qx(e) {
  return dh(e) || ph(e) || Rc(e) || fh();
}
var zg = m.createContext(null),
  $g = m.createContext(null),
  Vg = m.createContext(null);
function Ev(e, t) {
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
function eC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ev(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ev(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var tC = { componentName: "tabs", packageName: "@atlaskit/tabs", packageVersion: "18.2.3" },
  xv = function (t) {
    var r = t.tabPanel,
      n = t.index,
      a = t.isSelected,
      o = t.tabsId;
    return (
      r &&
      m.createElement(
        Vg.Provider,
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
  rC = function (t) {
    var r = t.shouldUnmountTabPanelOnChange,
      n = r === void 0 ? !1 : r,
      a = t.selected,
      o = t.defaultSelected,
      i = t.onChange,
      c = t.id,
      s = t.analyticsContext,
      u = t.children,
      l = t.testId,
      d = m.useState(a || o || 0),
      p = J(d, 2),
      v = p[0],
      g = p[1],
      f = a === void 0 ? v : a,
      h = m.Children.toArray(u).filter(function (A) {
        return !!A;
      }),
      b = Qx(h),
      _ = b[0],
      y = b.slice(1),
      k = m.useRef(new Set([f]));
    k.current.has(f) || k.current.add(f);
    var w = m.useCallback(
        function (A, j) {
          (i && i(A, j), g(A));
        },
        [i],
      ),
      S = Zr(eC({ fn: w, action: "clicked", analyticsData: s }, tC)),
      x = n
        ? xv({ tabPanel: y[f], index: f, isSelected: !0, tabsId: c })
        : Array.from(k.current).map(function (A) {
            return xv({ tabPanel: y[A], index: A, isSelected: A === f, tabsId: c });
          });
    return m.createElement(
      "div",
      {
        "data-testid": l,
        className: R([
          "_1e0c1txw _p12f1osq _1tkeidpf _i0dl1osq _2lx21bp4 _16jlkb7n",
          "_1c3y1txw _ftfaidpf _18i0kb7n _185bglyw",
        ]),
      },
      m.createElement($g.Provider, { value: { selected: f, onChange: S, tabsId: c } }, _),
      m.createElement(m.Fragment, null, x),
    );
  },
  nC = function () {
    var t = m.useContext(zg);
    if (t == null || typeof t > "u")
      throw Error("@atlaskit/tabs: A Tab must have a TabList parent.");
    return t;
  },
  aC = function () {
    var t = m.useContext($g);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs: A TabList must have a Tabs parent.");
    return t;
  },
  oC = function () {
    var t = m.useContext(Vg);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs:  A TabPanel must have a Tabs parent.");
    return t;
  },
  xa = function (t) {
    var r = t.children,
      n = t.testId,
      a = oC(),
      o = a.role,
      i = a.id,
      c = a.hidden,
      s = a["aria-labelledby"],
      u = a.tabIndex;
    return O.createElement(
      Tc,
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
      O.createElement(m.Fragment, null, r),
    );
  },
  ko = m.forwardRef(function (t, r) {
    var n = t.children,
      a = t.testId,
      o = nC(),
      i = o.onClick,
      c = o.id,
      s = o["aria-controls"],
      u = o["aria-posinset"],
      l = o["aria-selected"],
      d = o["aria-setsize"],
      p = o.onKeyDown,
      v = o.role,
      g = o.tabIndex;
    return O.createElement(
      Tc,
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
        onKeyDown: p,
        role: v,
        tabIndex: g,
        ref: r,
      },
      O.createElement(zh, { weight: "medium", color: "inherit", maxLines: 1 }, n),
    );
  }),
  iC = function (t) {
    var r = t.children,
      n = aC(),
      a = n.tabsId,
      o = n.selected,
      i = n.onChange,
      c = m.createRef(),
      s = m.Children.toArray(r).filter(Boolean),
      u = s.length,
      l = m.useCallback(
        function (v) {
          var g,
            f =
              (g = c.current) === null || g === void 0
                ? void 0
                : g.querySelector("[id='".concat(a, "-").concat(v, "']"));
          (f && f.focus(), i(v));
        },
        [a, c, i],
      ),
      d = m.useCallback(
        function (v) {
          if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(v.key)) {
            v.preventDefault();
            var g = u - 1;
            if (["Home", "End"].includes(v.key)) {
              var f = v.key === "Home" ? 0 : g;
              l(f);
              return;
            }
            var h = parseInt(v.currentTarget.getAttribute("aria-posinset") || "0") - 1,
              b = v.key === "ArrowRight" ? 1 : -1,
              _ = h + b;
            ((_ < 0 || _ >= u) && (_ = _ < 0 ? g : 0), l(_));
          }
        },
        [u, l],
      ),
      p = m.useCallback(
        function (v) {
          var g = v.tab,
            f = v.isSelected,
            h = v.index;
          return m.createElement(
            zg.Provider,
            {
              value: {
                onClick: function () {
                  return i(h);
                },
                onKeyDown: d,
                "aria-setsize": u,
                role: "tab",
                id: "".concat(a, "-").concat(h),
                "aria-posinset": h + 1,
                "aria-selected": f,
                "aria-controls": "".concat(a, "-").concat(h, "-tab"),
                tabIndex: f ? 0 : -1,
              },
              key: h,
            },
            g,
          );
        },
        [u, d, i, a],
      );
    return m.createElement(
      "div",
      {
        role: "tablist",
        ref: c,
        className: R([
          "_1e0c1txw _kqswh2mm _85i5ze3t _1q51ze3t _y4tize3t _bozgze3t",
          "_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _7hip15vq _1fud15vq _bb0mh2mm _1quz1425 _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _1lzu1mrt _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oaz1fgx _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1b8d1mrt _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i2072d1 _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _rsmz12s7 _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiemln51 _pascidpf _eid3idpf _zr3eidpf _fntnidpf _1mp41kw7 _kfgte4h9 _1cs8stnw _1russudh _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc",
        ]),
        style: {
          "--_13a5t4u": tr("var(--ds-text-subtle, ".concat(Jo, ")")),
          "--_kkbq40": tr("var(--ds-text-subtle, ".concat(ds, ")")),
          "--_71dbsd": tr("var(--ds-text, ".concat(j0, ")")),
          "--_1hfkvbo": tr("var(--ds-text-selected, ".concat(ds, ")")),
          "--_1c11uqn": tr("3px solid ".concat("var(--ds-border-selected, ".concat(ds, ")"))),
          "--_lvpq93": tr("var(--ds-border, ".concat(T0, ")")),
        },
      },
      s.map(function (v, g) {
        return p({ tab: v, index: g, isSelected: g === o });
      }),
    );
  },
  Gg = ((e) => (
    (e[(e.WITHOUT_VERSIONING = 0)] = "WITHOUT_VERSIONING"),
    (e[(e.OPTIMISTIC_NUMBER = 1)] = "OPTIMISTIC_NUMBER"),
    (e[(e.OPTIMISTIC_DATE = 2)] = "OPTIMISTIC_DATE"),
    (e[(e.OPTIMISTIC_TIMESTAMP = 3)] = "OPTIMISTIC_TIMESTAMP"),
    e
  ))(Gg || {});
const sC = Object.keys(Gg).filter((e) => isNaN(Number(e))),
  Oo = ({ children: e, testId: t }) =>
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
function cC() {
  const { stateStore: e } = mi();
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
              E.jsxs(Xc, {
                appearance: "danger",
                onClick: async () => {
                  try {
                    (e.loading("Clear ..."),
                      await Ba.invoke("clearAll", {
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
          E.jsxs(rC, {
            onChange: (t) => console.log("Selected Tab", t + 1),
            defaultSelected: 1,
            id: "default",
            children: [
              E.jsxs(iC, {
                children: [
                  " ",
                  sC.map((t) => {
                    switch (t) {
                      case "WITHOUT_VERSIONING":
                        return E.jsx(
                          ko,
                          { children: "Entity Without Version Column (No Locking)" },
                          t,
                        );
                      case "OPTIMISTIC_NUMBER":
                        return E.jsx(ko, { children: "Entity with Numeric Version Column" }, t);
                      case "OPTIMISTIC_DATE":
                        return E.jsx(
                          ko,
                          { children: "Entity with Datetime-Based Version Column" },
                          t,
                        );
                      case "OPTIMISTIC_TIMESTAMP":
                        return E.jsx(
                          ko,
                          { children: "Entity with Timestamp-BasedVersion Column" },
                          t,
                        );
                    }
                  }),
                ],
              }),
              E.jsx(xa, { children: E.jsx(E.Fragment, {}) }),
              E.jsx(xa, {
                children: E.jsx(Oo, {
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
                      E.jsx(wo, { type: "WITHOUT_VERSIONING" }),
                    ],
                  }),
                }),
              }),
              E.jsx(xa, {
                children: E.jsx(Oo, {
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
                      E.jsx(wo, { type: "OPTIMISTIC_NUMBER" }),
                    ],
                  }),
                }),
              }),
              E.jsx(xa, {
                children: E.jsx(Oo, {
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
                      E.jsx(wo, { type: "OPTIMISTIC_DATE" }),
                    ],
                  }),
                }),
              }),
              E.jsx(xa, {
                children: E.jsx(Oo, {
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
                      E.jsx(wo, { type: "OPTIMISTIC_TIMESTAMP" }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
}
const uC = _i(cC),
  lC = _i((e) => {
    const { stateStore: t } = mi(),
      [r, n] = m.useState(""),
      [a, o] = m.useState({}),
      i = (u) => {
        const { name: l, value: d, type: p } = u.target;
        o((v) => ({ ...v, [l]: p === "number" ? Number(d) : d }));
      },
      c = async (u) => {
        u.preventDefault();
        const l = { ...s };
        (a.testNameColumn && (l.testNameColumn = a.testNameColumn),
          a.testDateColumn && (l.testDateColumn = new Date(a.testDateColumn)));
        const d = await Ba.invoke("update", { data: l, objectName: e.type });
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
                const u = await Ba.invoke("fetchOrCreateIfNotExists");
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
function dC() {
  const { stateStore: e } = mi();
  if (
    (m.useEffect(() => {
      (async () => {
        try {
          e.loading();
          const r = await Ba.invoke("fetchOrCreateIfNotExists");
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
      return E.jsx(uC, {});
    case "WITHOUT_VERSIONING":
    case "OPTIMISTIC_TIMESTAMP":
    case "OPTIMISTIC_DATE":
    case "OPTIMISTIC_NUMBER":
      return E.jsx(lC, { type: e.state });
    default:
      return E.jsxs("div", { children: ["ERROR: unsupprted state $", e.state] });
  }
}
const fC = _i(dC),
  vC = document.getElementById("root"),
  pC = Wg.createRoot(vC),
  Cv = () => {
    pC.render(E.jsx(ch, { ...uh, children: E.jsx(fC, {}) }));
  };
Ba.view.theme
  .enable()
  .then(() => {
    Cv();
  })
  .catch((e) => {
    (console.error(e.message), Cv());
  });
export {
  O as R,
  O0 as T,
  Xe as _,
  be as a,
  ic as b,
  ge as c,
  Ye as d,
  X as e,
  J as f,
  C as g,
  te as h,
  ki as i,
  Ve as j,
  Z as k,
  T1 as l,
  Ht as m,
  Lt as n,
  R as o,
  w0 as p,
  Vy as q,
  m as r,
  _0 as s,
  rS as w,
};
