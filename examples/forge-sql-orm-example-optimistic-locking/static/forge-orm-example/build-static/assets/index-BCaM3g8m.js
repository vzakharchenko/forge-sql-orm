const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-BJ09gTLk.js",
      "./react-dom-vendor-DTSHKYJW.js",
      "./client-core-vendor-Cqp86jmV.js",
      "./lodash-vendor-C8n-YkpA.js",
      "./body-C3aXNd8H.css",
    ]),
) => i.map((i) => d[i]);
import { r as wt, a as Ko, c as cg } from "./react-dom-vendor-DTSHKYJW.js";
import { g as dr, a as tc, r as lr, b as Mt, s as tt } from "./client-core-vendor-Cqp86jmV.js";
import { r as lg } from "./lodash-vendor-C8n-YkpA.js";
function ug(e, t) {
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
var mi = { exports: {} },
  wn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fc;
function dg() {
  if (Fc) return wn;
  Fc = 1;
  var e = wt(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(c, s, l) {
    var u,
      d = {},
      f = null,
      p = null;
    (l !== void 0 && (f = "" + l),
      s.key !== void 0 && (f = "" + s.key),
      s.ref !== void 0 && (p = s.ref));
    for (u in s) n.call(s, u) && !o.hasOwnProperty(u) && (d[u] = s[u]);
    if (c && c.defaultProps) for (u in ((s = c.defaultProps), s)) d[u] === void 0 && (d[u] = s[u]);
    return { $$typeof: t, type: c, key: f, ref: p, props: d, _owner: a.current };
  }
  return ((wn.Fragment = r), (wn.jsx = i), (wn.jsxs = i), wn);
}
var $c;
function fg() {
  return ($c || (($c = 1), (mi.exports = dg())), mi.exports);
}
var x = fg(),
  _ = wt();
const O = dr(_),
  Bc = ug({ __proto__: null, default: O }, [_]);
var yi = {},
  ws = function (e, t) {
    return (
      (ws =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      ws(e, t)
    );
  };
function Kf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ws(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var Co = function () {
  return (
    (Co =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    Co.apply(this, arguments)
  );
};
function Hf(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function Wf(e, t, r, n) {
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
function Jf(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function Yf(e, t, r, n, a, o) {
  function i(b) {
    if (b !== void 0 && typeof b != "function") throw new TypeError("Function expected");
    return b;
  }
  for (
    var c = n.kind,
      s = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      l = !t && e ? (n.static ? e : e.prototype) : null,
      u = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}),
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
    var g = (0, r[p])(c === "accessor" ? { get: u.get, set: u.set } : u[s], h);
    if (c === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = i(g.get)) && (u.get = d),
        (d = i(g.set)) && (u.set = d),
        (d = i(g.init)) && a.unshift(d));
    } else (d = i(g)) && (c === "field" ? a.unshift(d) : (u[s] = d));
  }
  (l && Object.defineProperty(l, n.name, u), (f = !0));
}
function Xf(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function Zf(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Qf(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function ev(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function tv(e, t, r, n) {
  function a(o) {
    return o instanceof r
      ? o
      : new r(function (i) {
          i(o);
        });
  }
  return new (r || (r = Promise))(function (o, i) {
    function c(u) {
      try {
        l(n.next(u));
      } catch (d) {
        i(d);
      }
    }
    function s(u) {
      try {
        l(n.throw(u));
      } catch (d) {
        i(d);
      }
    }
    function l(u) {
      u.done ? o(u.value) : a(u.value).then(c, s);
    }
    l((n = n.apply(e, t || [])).next());
  });
}
function rv(e, t) {
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
  function c(l) {
    return function (u) {
      return s([l, u]);
    };
  }
  function s(l) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; i && ((i = 0), l[0] && (r = 0)), r; )
      try {
        if (
          ((n = 1),
          a &&
            (o =
              l[0] & 2 ? a.return : l[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) &&
            !(o = o.call(a, l[1])).done)
        )
          return o;
        switch (((a = 0), o && (l = [l[0] & 2, o.value]), l[0])) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return (r.label++, { value: l[1], done: !1 });
          case 5:
            (r.label++, (a = l[1]), (l = [0]));
            continue;
          case 7:
            ((l = r.ops.pop()), r.trys.pop());
            continue;
          default:
            if (
              ((o = r.trys), !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!o || (l[1] > o[0] && l[1] < o[3]))) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < o[1]) {
              ((r.label = o[1]), (o = l));
              break;
            }
            if (o && r.label < o[2]) {
              ((r.label = o[2]), r.ops.push(l));
              break;
            }
            (o[2] && r.ops.pop(), r.trys.pop());
            continue;
        }
        l = t.call(e, r);
      } catch (u) {
        ((l = [6, u]), (a = 0));
      } finally {
        n = o = 0;
      }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
var Ho = Object.create
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
function nv(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Ho(t, e, r);
}
function Ro(e) {
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
function rc(e, t) {
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
function av() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(rc(arguments[t]));
  return e;
}
function ov() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var o = arguments[t], i = 0, c = o.length; i < c; i++, a++) n[a] = o[i];
  return n;
}
function iv(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function an(e) {
  return this instanceof an ? ((this.v = e), this) : new an(e);
}
function sv(e, t, r) {
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
      l(n[p](h));
    } catch (v) {
      f(o[0][3], v);
    }
  }
  function l(p) {
    p.value instanceof an ? Promise.resolve(p.value.v).then(u, d) : f(o[0][2], p);
  }
  function u(p) {
    s("next", p);
  }
  function d(p) {
    s("throw", p);
  }
  function f(p, h) {
    (p(h), o.shift(), o.length && s(o[0][0], o[0][1]));
  }
}
function cv(e) {
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
          return (r = !r) ? { value: an(e[a](i)), done: !1 } : o ? o(i) : i;
        }
      : o;
  }
}
function lv(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof Ro == "function" ? Ro(e) : e[Symbol.iterator]()),
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
    Promise.resolve(s).then(function (l) {
      o({ value: l, done: c });
    }, i);
  }
}
function uv(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var vg = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  ks = function (e) {
    return (
      (ks =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      ks(e)
    );
  };
function dv(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = ks(e), n = 0; n < r.length; n++) r[n] !== "default" && Ho(t, e, r[n]);
  return (vg(t, e), t);
}
function fv(e) {
  return e && e.__esModule ? e : { default: e };
}
function vv(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function pv(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function hv(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function gv(e, t, r) {
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
var pg =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function bv(e) {
  function t(o) {
    ((e.error = e.hasError ? new pg(o, e.error, "An error was suppressed during disposal.") : o),
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
function _v(e, t) {
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
const hg = {
    __extends: Kf,
    __assign: Co,
    __rest: Hf,
    __decorate: Wf,
    __param: Jf,
    __esDecorate: Yf,
    __runInitializers: Xf,
    __propKey: Zf,
    __setFunctionName: Qf,
    __metadata: ev,
    __awaiter: tv,
    __generator: rv,
    __createBinding: Ho,
    __exportStar: nv,
    __values: Ro,
    __read: rc,
    __spread: av,
    __spreadArrays: ov,
    __spreadArray: iv,
    __await: an,
    __asyncGenerator: sv,
    __asyncDelegator: cv,
    __asyncValues: lv,
    __makeTemplateObject: uv,
    __importStar: dv,
    __importDefault: fv,
    __classPrivateFieldGet: vv,
    __classPrivateFieldSet: pv,
    __classPrivateFieldIn: hv,
    __addDisposableResource: gv,
    __disposeResources: bv,
    __rewriteRelativeImportExtension: _v,
  },
  gg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: gv,
        get __assign() {
          return Co;
        },
        __asyncDelegator: cv,
        __asyncGenerator: sv,
        __asyncValues: lv,
        __await: an,
        __awaiter: tv,
        __classPrivateFieldGet: vv,
        __classPrivateFieldIn: hv,
        __classPrivateFieldSet: pv,
        __createBinding: Ho,
        __decorate: Wf,
        __disposeResources: bv,
        __esDecorate: Yf,
        __exportStar: nv,
        __extends: Kf,
        __generator: rv,
        __importDefault: fv,
        __importStar: dv,
        __makeTemplateObject: uv,
        __metadata: ev,
        __param: Jf,
        __propKey: Zf,
        __read: rc,
        __rest: Hf,
        __rewriteRelativeImportExtension: _v,
        __runInitializers: Xf,
        __setFunctionName: Qf,
        __spread: av,
        __spreadArray: iv,
        __spreadArrays: ov,
        __values: Ro,
        default: hg,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ft = tc(gg);
var kn = {},
  zc;
function bg() {
  return (
    zc ||
      ((zc = 1),
      Object.defineProperty(kn, "__esModule", { value: !0 }),
      (kn.NavigationTarget = void 0),
      (kn.NavigationTarget = {
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
    kn
  );
}
var wi = {},
  ki = {},
  On = {},
  Sn = {},
  Uc;
function ft() {
  if (Uc) return Sn;
  ((Uc = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((Sn.BridgeAPIError = e), Sn);
}
var qc;
function xe() {
  if (qc) return On;
  ((qc = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.getCallBridge = void 0));
  const e = ft();
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
  return ((On.getCallBridge = r), On);
}
var xn = {},
  Vc;
function nc() {
  if (Vc) return xn;
  ((Vc = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.withRateLimiter = void 0));
  const e = ft(),
    t = (r, n, a, o) => {
      let i = Date.now(),
        c = 0;
      return async (...s) => {
        const l = Date.now();
        if ((l - i > a && ((i = l), (c = 0)), c >= n))
          throw new e.BridgeAPIError(o || "Too many invocations.");
        return ((c = c + 1), r(...s));
      };
    };
  return ((xn.withRateLimiter = t), xn);
}
var Gc;
function _g() {
  return (
    Gc ||
      ((Gc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = xe(),
          r = ft(),
          n = nc(),
          a = (0, t.getCallBridge)(),
          o = (s) => {
            if (s && Object.values(s).some((l) => typeof l == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          i = (s, l) => {
            if (typeof s != "string") throw new r.BridgeAPIError("functionKey must be a string!");
            return (o(l), a("invoke", { functionKey: s, payload: l }));
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
      })(ki)),
    ki
  );
}
var Kc;
function mg() {
  return (
    Kc ||
      ((Kc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ft.__exportStar(_g(), e));
      })(wi)),
    wi
  );
}
var Oi = {},
  En = {},
  Si = {},
  Hc;
function mv() {
  return (
    Hc ||
      ((Hc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = xe(),
          r = ft(),
          n = nc(),
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
          l = (d) => async (f) => {
            s(f);
            const p = { ...f, invokeType: `ui-${d.toLowerCase()}-fetch` },
              h = await c("invoke", p),
              { success: v, payload: g, error: b } = h ?? {},
              y = { ...(v ? g : b) };
            if (y && y.headers)
              for (const w in y.headers)
                Array.isArray(y.headers[w]) && (y.headers[w] = y.headers[w].join(","));
            return y;
          },
          u = (d) => {
            const f = l(d);
            return (0, n.withRateLimiter)(
              f,
              a,
              i,
              `${d} invocation calls are rate limited at ${a}/${o}s`,
            );
          };
        e._invokeEndpointFn = u;
      })(Si)),
    Si
  );
}
var Wc;
function yg() {
  if (Wc) return En;
  ((Wc = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.invokeRemote = void 0));
  const e = mv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((En.invokeRemote = t), En);
}
var Cn = {},
  Jc;
function wg() {
  if (Jc) return Cn;
  ((Jc = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.invokeService = void 0));
  const e = mv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((Cn.invokeService = t), Cn);
}
var Yc;
function kg() {
  return (
    Yc ||
      ((Yc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ft;
        (t.__exportStar(yg(), e), t.__exportStar(wg(), e));
      })(Oi)),
    Oi
  );
}
var xi = {},
  Rn = {},
  Pn = {},
  Xc;
function Og() {
  if (Xc) return Pn;
  ((Xc = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.submit = void 0));
  const e = xe(),
    t = ft(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((Pn.submit = n), Pn);
}
var An = {},
  Zc;
function Sg() {
  if (Zc) return An;
  ((Zc = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.close = void 0));
  const e = xe(),
    t = ft(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        if ((await r("close", a)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((An.close = n), An);
}
var In = {},
  Qc;
function xg() {
  if (Qc) return In;
  ((Qc = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.open = void 0));
  const e = xe(),
    t = ft(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      try {
        if ((await r("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((In.open = n), In);
}
var jn = {},
  el;
function Eg() {
  if (el) return jn;
  ((el = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.refresh = void 0));
  const e = xe(),
    t = ft(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((jn.refresh = n), jn);
}
var Dn = {},
  tl;
function Cg() {
  if (tl) return Dn;
  ((tl = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.createHistory = void 0));
  const t = (0, xe().getCallBridge)(),
    r = async () => {
      const n = await t("createHistory");
      return (
        n.listen((a) => {
          n.location = a;
        }),
        n
      );
    };
  return ((Dn.createHistory = r), Dn);
}
var Tn = {},
  Ei = {},
  Ut = {},
  rl;
function yv() {
  return (
    rl ||
      ((rl = 1),
      Object.defineProperty(Ut, "__esModule", { value: !0 }),
      (Ut.FORGE_SUPPORTED_LOCALE_CODES =
        Ut.I18N_BUNDLE_FOLDER_NAME =
        Ut.I18N_INFO_FILE_NAME =
          void 0),
      (Ut.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (Ut.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (Ut.FORGE_SUPPORTED_LOCALE_CODES = [
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
    Ut
  );
}
var pr = {},
  nl;
function Rg() {
  if (nl) return pr;
  ((nl = 1),
    Object.defineProperty(pr, "__esModule", { value: !0 }),
    (pr.TranslationsGetter = pr.TranslationGetterError = void 0));
  const e = (n, a) => {
    n.includes(a) || n.push(a);
  };
  class t extends Error {
    constructor(a) {
      (super(a), (this.name = "TranslationGetterError"));
    }
  }
  pr.TranslationGetterError = t;
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
        const l = await this.getTranslationResource(s);
        if (l) return { translations: l, locale: s };
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
        l = c[a];
      return (
        l && Array.isArray(l) && l.length > 0 && s.push(...l),
        e(s, o.fallback.default),
        s.filter((u) => i.includes(u))
      );
    }
  }
  return ((pr.TranslationsGetter = r), pr);
}
var Mn = {},
  Ci = {},
  al;
function wv() {
  return (
    al ||
      ((al = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = Ft.__importDefault(lg()),
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
      })(Ci)),
    Ci
  );
}
var ol;
function Pg() {
  if (ol) return Mn;
  ((ol = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.Translator = void 0));
  const e = wv();
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
  return ((Mn.Translator = t), Mn);
}
var Ln = {},
  il;
function Ag() {
  if (il) return Ln;
  ((il = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.ensureLocale = void 0));
  const e = yv(),
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
  return ((Ln.ensureLocale = a), Ln);
}
var Ri = {},
  sl;
function Ig() {
  return (
    sl ||
      ((sl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (l) => typeof l == "object" && l !== null && !Array.isArray(l),
          r = (l) => typeof l?.i18n == "string",
          n = (l) => l.startsWith("connect-"),
          a = (l) => l.startsWith("core:"),
          o = (l) => {
            const u = new Set(),
              d = (f, p) =>
                !t(f) || u.has(f)
                  ? []
                  : (u.add(f),
                    Object.entries(f).flatMap(([h, v]) => {
                      const g = [...p, h];
                      return r(v)
                        ? [{ propertyPath: g, key: v.i18n }]
                        : Array.isArray(v)
                          ? v.flatMap((b) => d(b, g))
                          : d(v, g);
                    }));
            return d(l, []);
          },
          i = (l) =>
            Object.entries(l).flatMap(([u, d]) =>
              !n(u) && !a(u) && d && Array.isArray(d) && d.length > 0 ? d.map((f) => [f, u]) : [],
            );
        e.getI18nSupportedModuleEntries = i;
        const c = (l) => {
          const u = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(l)) {
            const f = o(d[0]);
            for (const { key: p } of f) u.add(p);
          }
          return u.size > 0 ? Array.from(u) : [];
        };
        e.extractI18nKeysFromModules = c;
        const s = (l) => {
          const u = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(l)) {
            const f = o(d[0]);
            for (const p of f) u.push({ moduleName: d[1], ...p });
          }
          return u;
        };
        e.extractI18nPropertiesFromModules = s;
      })(Ri)),
    Ri
  );
}
var Pi = {},
  cl;
function jg() {
  return (cl || ((cl = 1), Object.defineProperty(Pi, "__esModule", { value: !0 })), Pi);
}
var ll;
function kv() {
  return (
    ll ||
      ((ll = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = Ft;
        (t.__exportStar(yv(), e),
          t.__exportStar(Rg(), e),
          t.__exportStar(Pg(), e),
          t.__exportStar(Ag(), e));
        var r = wv();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Ig();
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
          t.__exportStar(jg(), e));
      })(Ei)),
    Ei
  );
}
var ul;
function Dg() {
  if (ul) return Tn;
  ((ul = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.getContext = void 0));
  const e = xe(),
    t = kv(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const o = await r("getContext"),
        i = o?.locale;
      return (i && (o.locale = (a = (0, t.ensureLocale)(i)) !== null && a !== void 0 ? a : i), o);
    };
  return ((Tn.getContext = n), Tn);
}
var Nn = {},
  dl;
function Tg() {
  if (dl) return Nn;
  ((dl = 1),
    Object.defineProperty(Nn, "__esModule", { value: !0 }),
    (Nn.changeWindowTitle = void 0));
  const e = xe(),
    t = ft(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        await r("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((Nn.changeWindowTitle = n), Nn);
}
var Fn = {},
  fl;
function Mg() {
  if (fl) return Fn;
  ((fl = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.theme = void 0));
  const t = (0, xe().getCallBridge)();
  return ((Fn.theme = { enable: () => t("enableTheming") }), Fn);
}
var $n = {},
  Bn = {},
  Ai = {},
  hr = {},
  vl;
function Ov() {
  if (vl) return hr;
  ((vl = 1),
    Object.defineProperty(hr, "__esModule", { value: !0 }),
    (hr.blobToBase64 = hr.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      o = atob(a),
      i = new Array(o.length);
    for (let s = 0; s < o.length; s++) i[s] = o.charCodeAt(s);
    const c = new Uint8Array(i);
    return new Blob([c], { type: n });
  };
  hr.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, a) => {
      const o = new FileReader();
      ((o.onloadend = () => {
        n(o.result);
      }),
        (o.onerror = a),
        o.readAsDataURL(r));
    });
  return ((hr.blobToBase64 = t), hr);
}
var pl;
function Lg() {
  return (
    pl ||
      ((pl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Ov(),
          r = (l) => {
            if (
              typeof l != "object" ||
              l === null ||
              Object.prototype.toString.call(l) !== "[object Object]"
            )
              return !1;
            const u = Object.getPrototypeOf(l);
            if (u === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(u, "constructor") && u.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(l)
            );
          },
          n = async (l) => ({ data: await (0, t.blobToBase64)(l), type: l.type }),
          a = (l) => (0, t.base64ToBlob)(l.data, l.type),
          o = async (l) => {
            if (l instanceof Blob) return { ...(await n(l)), __isBlobData: !0 };
            if (Array.isArray(l))
              return Promise.all(l.map((u) => (0, e.serialiseBlobsInPayload)(u)));
            if (l && r(l)) {
              const u = await Promise.all(
                Object.entries(l).map(async ([d, f]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(f),
                ]),
              );
              return Object.fromEntries(u);
            }
            return l;
          };
        e.serialiseBlobsInPayload = o;
        const i = (l) => {
          if (l && r(l) && "__isBlobData" in l) {
            const u = l;
            return a({ data: u.data, type: u.type });
          }
          if (Array.isArray(l)) return l.map((u) => (0, e.deserialiseBlobsInPayload)(u));
          if (l && r(l)) {
            const u = {};
            for (const [d, f] of Object.entries(l)) u[d] = (0, e.deserialiseBlobsInPayload)(f);
            return u;
          }
          return l;
        };
        e.deserialiseBlobsInPayload = i;
        const c = (l) =>
          l instanceof Blob
            ? !0
            : Array.isArray(l)
              ? l.some((u) => (0, e.containsBlobs)(u))
              : l && r(l)
                ? Object.values(l).some((u) => (0, e.containsBlobs)(u))
                : !1;
        e.containsBlobs = c;
        const s = (l) =>
          l && r(l) && "__isBlobData" in l
            ? !0
            : Array.isArray(l)
              ? l.some((u) => (0, e.containsSerialisedBlobs)(u))
              : l && r(l)
                ? Object.values(l).some((u) => (0, e.containsSerialisedBlobs)(u))
                : !1;
        e.containsSerialisedBlobs = s;
      })(Ai)),
    Ai
  );
}
var hl;
function Sv() {
  if (hl) return Bn;
  ((hl = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.events = void 0));
  const e = xe(),
    t = Lg(),
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
          let l = s;
          return (
            (0, t.containsSerialisedBlobs)(s) && (l = (0, t.deserialiseBlobsInPayload)(s)),
            i(l)
          );
        },
      });
  return ((Bn.events = { emit: n, on: a }), Bn);
}
var gl;
function Ng() {
  if (gl) return $n;
  ((gl = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.emitReadyEvent = void 0));
  const e = Sv(),
    t = xv(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return (($n.emitReadyEvent = n), $n);
}
var bl;
function xv() {
  if (bl) return Rn;
  ((bl = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.view = void 0));
  const e = Og(),
    t = Sg(),
    r = xg(),
    n = Eg(),
    a = Cg(),
    o = Dg(),
    i = Tg(),
    c = Mg(),
    s = Ng();
  return (
    (Rn.view = {
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
    Rn
  );
}
var _l;
function Ev() {
  return (
    _l ||
      ((_l = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ft.__exportStar(xv(), e));
      })(xi)),
    xi
  );
}
var Ii = {},
  zn = {},
  ml;
function Fg() {
  if (ml) return zn;
  ((ml = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.router = void 0));
  const t = (0, xe().getCallBridge)(),
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
  return ((zn.router = { getUrl: r, navigate: n, open: a, reload: o }), zn);
}
var yl;
function $g() {
  return (
    yl ||
      ((yl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ft.__exportStar(Fg(), e));
      })(Ii)),
    Ii
  );
}
var ji = {},
  Un = {},
  wl;
function Bg() {
  if (wl) return Un;
  ((wl = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.Modal = void 0));
  const e = xe(),
    t = ft(),
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
  return ((Un.Modal = a), Un);
}
var kl;
function zg() {
  return (
    kl ||
      ((kl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ft.__exportStar(Bg(), e));
      })(ji)),
    ji
  );
}
var qt = {},
  qn = {},
  Ol;
function Ug() {
  if (Ol) return qn;
  ((Ol = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.productFetchApi = void 0));
  const e = Ov(),
    t = async (o) => {
      const i = {};
      for (const [c, s] of o.entries())
        if (c === "file") {
          const l = s.name,
            u = s.type;
          ((i.file = await (0, e.blobToBase64)(s)), (i.__fileName = l), (i.__fileType = u));
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
        l = Object.fromEntries(s.headers.entries());
      return {
        body: s.method !== "GET" ? await s.text() : null,
        headers: new Headers(l),
        isMultipartFormData: i,
      };
    },
    a = (o) => {
      const i = async (c, s, l) => {
        const u = r(l),
          { body: d, headers: f, isMultipartFormData: p } = await n(u);
        f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
        const h = {
            product: c,
            restPath: s,
            fetchRequestInit: { ...u, body: d, headers: [...f.entries()] },
            isMultipartFormData: p,
          },
          {
            body: v,
            headers: g,
            statusText: b,
            status: y,
            isAttachment: w,
          } = await o("fetchProduct", h),
          k = w ? (0, e.base64ToBlob)(v, g["content-type"]) : v;
        return new Response(k || null, { headers: g, status: y, statusText: b });
      };
      return {
        requestConfluence: (c, s) => i("confluence", c, s),
        requestJira: (c, s) => i("jira", c, s),
        requestBitbucket: (c, s) => i("bitbucket", c, s),
      };
    };
  return ((qn.productFetchApi = a), qn);
}
var Sl;
function qg() {
  if (Sl) return qt;
  Sl = 1;
  var e;
  (Object.defineProperty(qt, "__esModule", { value: !0 }),
    (qt.requestBitbucket = qt.requestJira = qt.requestConfluence = void 0));
  const t = xe();
  return (
    (e = (0, Ug().productFetchApi)((0, t.getCallBridge)())),
    (qt.requestConfluence = e.requestConfluence),
    (qt.requestJira = e.requestJira),
    (qt.requestBitbucket = e.requestBitbucket),
    qt
  );
}
var Di = {},
  Vn = {},
  xl;
function Vg() {
  if (xl) return Vn;
  ((xl = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.showFlag = void 0));
  const e = xe(),
    t = ft(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var o;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const i = r("showFlag", { ...a, type: (o = a.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await i, r("closeFlag", { id: a.id })) };
    };
  return ((Vn.showFlag = n), Vn);
}
var El;
function Gg() {
  return (
    El ||
      ((El = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = Vg();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(Di)),
    Di
  );
}
var Ti = {},
  Cl;
function Kg() {
  return (
    Cl ||
      ((Cl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ft.__exportStar(Sv(), e));
      })(Ti)),
    Ti
  );
}
var Mi = {},
  Gn = {},
  Rl;
function Hg() {
  if (Rl) return Gn;
  ((Rl = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.realtime = void 0));
  const t = (0, xe().getCallBridge)(),
    r = (i, c, s) => t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s }),
    n = (i, c, s) => t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s }),
    a = (i, c, s) =>
      t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s, isGlobal: !0 }),
    o = (i, c, s) =>
      t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s, isGlobal: !0 });
  return ((Gn.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: o }), Gn);
}
var Li = {},
  Pl;
function Wg() {
  return (
    Pl ||
      ((Pl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Jira = void 0),
          (function (t) {
            ((t.Board = "board"), (t.Issue = "issue"), (t.Project = "project"));
          })(e.Jira || (e.Jira = {})));
      })(Li)),
    Li
  );
}
var Al;
function Jg() {
  return (
    Al ||
      ((Al = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Jira = e.realtime = void 0));
        var t = Hg();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = Wg();
        Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return r.Jira;
          },
        });
      })(Mi)),
    Mi
  );
}
var Vt = {},
  Il;
function Yg() {
  if (Il) return Vt;
  ((Il = 1),
    Object.defineProperty(Vt, "__esModule", { value: !0 }),
    (Vt.createTranslationFunction = Vt.getTranslations = Vt.resetTranslationsCache = void 0));
  const e = kv(),
    t = Ev(),
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
  Vt.resetTranslationsCache = a;
  const o = async (c = null, s = { fallback: !0 }) => {
    let l = c;
    return (l || (l = (await t.view.getContext()).locale), await n.getTranslations(l, s));
  };
  Vt.getTranslations = o;
  const i = async (c = null) => {
    let s = c;
    s || (s = (await t.view.getContext()).locale);
    const l = new e.Translator(s, n);
    return (
      await l.init(),
      (u, d) => {
        var f, p;
        return (p = (f = l.translate(u)) !== null && f !== void 0 ? f : d) !== null && p !== void 0
          ? p
          : u;
      }
    );
  };
  return ((Vt.createTranslationFunction = i), Vt);
}
var Ni = {},
  Kn = {},
  jl;
function Cv() {
  if (jl) return Kn;
  ((jl = 1),
    Object.defineProperty(Kn, "__esModule", { value: !0 }),
    (Kn.initFeatureFlags = void 0));
  const e = xe(),
    t = ft(),
    r = nc(),
    n = 500,
    a = 1e3 * 25,
    o = (0, e.getCallBridge)(),
    i = (s) => {
      if (!s || !s.user)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(s).some((l) => typeof l == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (s) => (i(s), o("initFeatureFlags", { user: s.user }));
  return (
    (Kn.initFeatureFlags = (0, r.withRateLimiter)(
      c,
      n,
      a,
      "Feature flags initialisation calls are rate limited at 500req/25s",
    )),
    Kn
  );
}
var Hn = {},
  gr = {},
  Nr = {},
  eo = {},
  Dl;
function Xg() {
  if (Dl) return eo;
  ((Dl = 1), Object.defineProperty(eo, "__esModule", { value: !0 }));
  const e = lr();
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
      const l =
        this._source === "Bootstrap" && (o = this._bootstrapMetadata) !== null && o !== void 0
          ? o
          : void 0;
      return (l && (i.bootstrapMetadata = l), Object.assign(Object.assign({}, i), { reason: c }));
    }
  }
  return ((eo.default = t), eo);
}
var Fr = {},
  Wn = {},
  Tl;
function Zg() {
  if (Tl) return Wn;
  ((Tl = 1),
    Object.defineProperty(Wn, "__esModule", { value: !0 }),
    (Wn._resolveDeltasResponse = void 0));
  const e = lr(),
    t = 2;
  function r(i, c) {
    const s = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const l = n(i, s),
      u = a(l),
      d = (0, e._DJB2Object)(
        {
          feature_gates: u.feature_gates,
          dynamic_configs: u.dynamic_configs,
          layer_configs: u.layer_configs,
        },
        t,
      );
    return d === s.checksumV2
      ? JSON.stringify(u)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: u,
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
var Ml;
function Rv() {
  if (Ml) return Fr;
  Ml = 1;
  var e =
    (Fr && Fr.__awaiter) ||
    function (a, o, i, c) {
      function s(l) {
        return l instanceof i
          ? l
          : new i(function (u) {
              u(l);
            });
      }
      return new (i || (i = Promise))(function (l, u) {
        function d(h) {
          try {
            p(c.next(h));
          } catch (v) {
            u(v);
          }
        }
        function f(h) {
          try {
            p(c.throw(h));
          } catch (v) {
            u(v);
          }
        }
        function p(h) {
          h.done ? l(h.value) : s(h.value).then(d, f);
        }
        p((c = c.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(Fr, "__esModule", { value: !0 });
  const t = lr(),
    r = Zg();
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
    fetchEvaluations(o, i, c, s, l) {
      return e(this, void 0, void 0, function* () {
        var u, d, f, p, h, v;
        const g = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
        let b = {
          user: s,
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
          const y =
            g?.hash_used !==
            ((v =
              (h = (p = this._option) === null || p === void 0 ? void 0 : p.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && v !== void 0
              ? v
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: l && !y ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && l ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: y ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(o, g, b, c);
      });
    }
    _fetchEvaluations(o, i, c, s) {
      return e(this, void 0, void 0, function* () {
        var l, u;
        const d = yield this.post({
          sdkKey: o,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: s,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (l = d?.body) !== null && l !== void 0 ? l : null;
        if (
          i?.has_updates !== !0 ||
          ((u = d.body) === null || u === void 0 ? void 0 : u.includes('"is_delta":true')) !== !0 ||
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
  return ((Fr.default = n), Fr);
}
var Jn = {},
  Ll;
function Qg() {
  if (Ll) return Jn;
  ((Ll = 1),
    Object.defineProperty(Jn, "__esModule", { value: !0 }),
    (Jn._makeParamStoreGetter = void 0));
  const e = lr(),
    t = { disableExposureLog: !0 };
  function r(u) {
    return u == null || u.disableExposureLog === !1;
  }
  function n(u, d) {
    return d != null && !(0, e._isTypeMatch)(u, d);
  }
  function a(u, d) {
    return u.value;
  }
  function o(u, d, f) {
    return u.getFeatureGate(d.gate_name, r(f) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function i(u, d, f, p) {
    const v = u.getDynamicConfig(d.config_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function c(u, d, f, p) {
    const v = u.getExperiment(d.experiment_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function s(u, d, f, p) {
    const v = u.getLayer(d.layer_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function l(u, d, f) {
    return (p, h) => {
      if (d == null) return h;
      const v = d[p];
      if (v == null || (h != null && (0, e._typeOf)(h) !== v.param_type)) return h;
      switch (v.ref_type) {
        case "static":
          return a(v);
        case "gate":
          return o(u, v, f);
        case "dynamic_config":
          return i(u, v, h, f);
        case "experiment":
          return c(u, v, h, f);
        case "layer":
          return s(u, v, h, f);
        default:
          return h;
      }
    };
  }
  return ((Jn._makeParamStoreGetter = l), Jn);
}
var br = {},
  Nl;
function eb() {
  if (Nl) return br;
  Nl = 1;
  var e =
    (br && br.__awaiter) ||
    function (a, o, i, c) {
      function s(l) {
        return l instanceof i
          ? l
          : new i(function (u) {
              u(l);
            });
      }
      return new (i || (i = Promise))(function (l, u) {
        function d(h) {
          try {
            p(c.next(h));
          } catch (v) {
            u(v);
          }
        }
        function f(h) {
          try {
            p(c.throw(h));
          } catch (v) {
            u(v);
          }
        }
        function p(h) {
          h.done ? l(h.value) : s(h.value).then(d, f);
        }
        p((c = c.apply(a, o || [])).next());
      });
    };
  (Object.defineProperty(br, "__esModule", { value: !0 }),
    (br.StatsigEvaluationsDataAdapter = void 0));
  const t = lr(),
    r = Rv();
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
        var l;
        const u = yield (l = this._network) === null || l === void 0
          ? void 0
          : l.fetchEvaluations(this._getSdkKey(), o, c?.priority, i, s);
        return u ?? null;
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
  return ((br.StatsigEvaluationsDataAdapter = n), br);
}
var Fl;
function tb() {
  if (Fl) return Nr;
  Fl = 1;
  var e =
    (Nr && Nr.__awaiter) ||
    function (c, s, l, u) {
      function d(f) {
        return f instanceof l
          ? f
          : new l(function (p) {
              p(f);
            });
      }
      return new (l || (l = Promise))(function (f, p) {
        function h(b) {
          try {
            g(u.next(b));
          } catch (y) {
            p(y);
          }
        }
        function v(b) {
          try {
            g(u.throw(b));
          } catch (y) {
            p(y);
          }
        }
        function g(b) {
          b.done ? f(b.value) : d(b.value).then(h, v);
        }
        g((u = u.apply(c, s || [])).next());
      });
    };
  Object.defineProperty(Nr, "__esModule", { value: !0 });
  const t = lr(),
    r = Xg(),
    n = Rv(),
    a = Qg(),
    o = eb();
  class i extends t.StatsigClientBase {
    static instance(s) {
      const l = (0, t._getStatsigGlobal)().instance(s);
      return l instanceof i
        ? l
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new i(s ?? "", {}));
    }
    constructor(s, l, u = null) {
      var d, f;
      t.SDKType._setClientType(s, "javascript-client");
      const p = new n.default(u, (v) => {
        this.$emt(v);
      });
      (super(
        s,
        (d = u?.dataAdapter) !== null && d !== void 0 ? d : new o.StatsigEvaluationsDataAdapter(),
        p,
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
        (this._store = new r.default(s)),
        (this._network = p),
        (this._user = this._configureUser(l, u)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (f = u?.plugins) !== null && f !== void 0 ? f : [];
      for (const v of h) v.bind(this);
    }
    initializeSync(s) {
      var l;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : []),
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
    updateUserSync(s, l) {
      const u = performance.now();
      try {
        return this._updateUserSyncImpl(s, l, u);
      } catch (d) {
        const f = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(f, u);
      }
    }
    _updateUserSyncImpl(s, l, u) {
      var d;
      const f = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
      const p = this.dataAdapter.getDataSync(this._user);
      (p == null && f.push("NoCachedValues"),
        this._store.setValues(p, this._user),
        this._finalizeUpdate(p));
      const h = l?.disableBackgroundCacheRefresh;
      return h === !0 || (h == null && p?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          )
        : (this._runPostUpdate(p ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          ));
    }
    updateUserAsync(s, l) {
      return e(this, void 0, void 0, function* () {
        const u = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, l);
        } catch (d) {
          const f = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(f, u);
        }
      });
    }
    _updateUserAsyncImpl(s, l) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(s);
        const u = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(u);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, u, l)),
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
    checkGate(s, l) {
      return this.getFeatureGate(s, l).value;
    }
    logEvent(s, l, u) {
      const d = typeof s == "string" ? { eventName: s, value: l, metadata: u } : s;
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
    _createErrorUpdateDetails(s, l) {
      var u;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - l,
        s,
        null,
        [...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : [])],
      );
    }
    _finalizeUpdate(s) {
      (this._store.finalize(), this._setStatus("Ready", s));
    }
    _runPostUpdate(s, l) {
      this.dataAdapter.getDataAsync(s, l, { priority: "low" }).catch((u) => {
        t.Log.error("An error occurred after update.", u);
      });
    }
    _resetForUser(s) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(s, this._options)));
    }
    _configureUser(s, l) {
      var u;
      const d = (0, t._normalizeUser)(s, l),
        f = (u = d.customIDs) === null || u === void 0 ? void 0 : u.stableID;
      return (f && t.StableID.setOverride(f, this._sdkKey), d);
    }
    _getFeatureGateImpl(s, l) {
      var u, d;
      const { result: f, details: p } = this._store.getGate(s),
        h = (0, t._makeFeatureGate)(s, p, f),
        v =
          (d = (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, h, this._user, l),
        g = v ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          l,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(s, l) {
      var u, d;
      const { result: f, details: p } = this._store.getConfig(s),
        h = (0, t._makeDynamicConfig)(s, p, f),
        v =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(u, h, this._user, l),
        g = v ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          l,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(s, l) {
      var u, d, f, p;
      const { result: h, details: v } = this._store.getConfig(s),
        g = (0, t._makeExperiment)(s, v, h);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (u = g.__evaluation) === null || u === void 0 ? void 0 : u.secondary_exposures) !==
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
            : p.call(f, g, this._user, l),
        y = b ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, y, this._store.getExposureMapping()),
          l,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: y }),
        y
      );
    }
    _getLayerImpl(s, l) {
      var u, d, f;
      const { result: p, details: h } = this._store.getLayer(s),
        v = (0, t._makeLayer)(s, h, p),
        g =
          (d =
            (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, v, this._user, l);
      l?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const b = (0, t._mergeOverride)(
        v,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : v.__value,
        (y) => {
          l?.disableExposureLog ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                y,
                this._store.getExposureMapping(),
              ),
              l,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: b }), b);
    }
    _getParameterStoreImpl(s, l) {
      var u, d;
      const { result: f, details: p } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const h = {
          name: s,
          details: p,
          __configuration: f,
          get: (0, a._makeParamStoreGetter)(this, f, l),
        },
        v =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(u, h, l);
      return (
        v != null &&
          ((h.__configuration = v.config),
          (h.details = v.details),
          (h.get = (0, a._makeParamStoreGetter)(this, v.config, l))),
        h
      );
    }
  }
  return ((Nr.default = i), Nr);
}
var $l;
function rb() {
  return (
    $l ||
      (($l = 1),
      (function (e) {
        var t =
            (gr && gr.__createBinding) ||
            (Object.create
              ? function (i, c, s, l) {
                  l === void 0 && (l = s);
                  var u = Object.getOwnPropertyDescriptor(c, s);
                  ((!u || ("get" in u ? !c.__esModule : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return c[s];
                      },
                    }),
                    Object.defineProperty(i, l, u));
                }
              : function (i, c, s, l) {
                  (l === void 0 && (l = s), (i[l] = c[s]));
                }),
          r =
            (gr && gr.__exportStar) ||
            function (i, c) {
              for (var s in i)
                s !== "default" && !Object.prototype.hasOwnProperty.call(c, s) && t(c, i, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = lr(),
          a = tb();
        ((e.StatsigClient = a.default), r(lr(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(gr)),
    gr
  );
}
var Yn = {},
  Bl;
function nb() {
  if (Bl) return Yn;
  ((Bl = 1),
    Object.defineProperty(Yn, "__esModule", { value: !0 }),
    (Yn.ForgeDataAdapter = void 0));
  const e = Cv();
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
        l = {
          source: "Network",
          data: JSON.stringify(s),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = l), l);
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
  return ((Yn.ForgeDataAdapter = t), Yn);
}
var zl;
function ab() {
  if (zl) return Hn;
  ((zl = 1),
    Object.defineProperty(Hn, "__esModule", { value: !0 }),
    (Hn.ForgeFeatureFlags = void 0));
  const e = rb(),
    t = nb();
  class r {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(a, o = {}) {
      if (this.isInitialized()) return;
      this.dataAdapter = new t.ForgeDataAdapter();
      const i = {
        environment: { tier: o.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(a), i)),
        await this.client.initializeAsync(),
        (this.initialized = !0));
    }
    checkFlag(a) {
      if (!this.isInitialized() || !this.client)
        throw new Error("ForgeFeatureFlags not initialized. Call initialize() first.");
      return this.client.checkGate(a, { disableExposureLog: !0 });
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
    convertUser(a) {
      return {
        userID: a.userId,
        custom: { ...(a.custom || {}), ...(a.attributes || {}) },
        customIDs: a.identifiers || {},
      };
    }
  }
  return ((Hn.ForgeFeatureFlags = r), Hn);
}
var Ul;
function ob() {
  return (
    Ul ||
      ((Ul = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ForgeFeatureFlags = void 0),
          Ft.__exportStar(Cv(), e));
        var r = ab();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.ForgeFeatureFlags;
          },
        });
      })(Ni)),
    Ni
  );
}
var ql;
function ib() {
  return (
    ql ||
      ((ql = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = Ft;
        var r = bg();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(mg(), e),
          t.__exportStar(kg(), e),
          t.__exportStar(Ev(), e),
          t.__exportStar($g(), e),
          t.__exportStar(zg(), e),
          t.__exportStar(qg(), e),
          t.__exportStar(Gg(), e),
          t.__exportStar(Kg(), e),
          t.__exportStar(Jg(), e),
          (e.i18n = t.__importStar(Yg())),
          t.__exportStar(ob(), e));
      })(yi)),
    yi
  );
}
var ja = ib();
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
var sb = {};
function Wo() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : sb;
}
var Pv = Object.assign,
  Po = Object.getOwnPropertyDescriptor,
  At = Object.defineProperty,
  Jo = Object.prototype,
  Os = [];
Object.freeze(Os);
var Av = {};
Object.freeze(Av);
var cb = typeof Proxy < "u",
  lb = Object.toString();
function Iv() {
  cb || W("Proxy not available");
}
function jv(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var en = function () {};
function mt(e) {
  return typeof e == "function";
}
function xr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Yo(e) {
  return e !== null && typeof e == "object";
}
function ur(e) {
  if (!Yo(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === lb;
}
function Dv(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Xo(e, t, r) {
  At(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function Tv(e, t, r) {
  At(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function Ir(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return Yo(n) && n[r] === !0;
    }
  );
}
function hn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function ub(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Jt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var Mv = typeof Object.getOwnPropertySymbols < "u";
function db(e) {
  var t = Object.keys(e);
  if (!Mv) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Jo.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Zo =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : Mv
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function Lv(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Zt(e, t) {
  return Jo.hasOwnProperty.call(e, t);
}
var fb =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Zo(t).forEach(function (n) {
        r[n] = Po(t, n);
      }),
      r
    );
  };
function Ke(e, t) {
  return !!(e & t);
}
function He(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function Vl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, hb(n.key), n));
  }
}
function gn(e, t, r) {
  return (t && vb(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function tn(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = gb(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Er() {
  return (
    (Er = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Er.apply(null, arguments)
  );
}
function Nv(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Ss(e, t));
}
function Ss(e, t) {
  return (
    (Ss = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Ss(e, t)
  );
}
function pb(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function hb(e) {
  var t = pb(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function gb(e, t) {
  if (e) {
    if (typeof e == "string") return Vl(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Vl(e, t)
          : void 0
    );
  }
}
var Pt = Symbol("mobx-stored-annotations");
function It(e) {
  function t(r, n) {
    if (Ga(n)) return e.decorate_20223_(r, n);
    Va(r, n, e);
  }
  return Object.assign(t, e);
}
function Va(e, t, r) {
  (Zt(e, Pt) || Xo(e, Pt, Er({}, e[Pt])), Ob(r) || (e[Pt][t] = r));
}
function bb(e) {
  return (Zt(e, Pt) || Xo(e, Pt, Er({}, e[Pt])), e[Pt]);
}
function Ga(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var N = Symbol("mobx administration"),
  fr = (function () {
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
        return Qv(this);
      }),
      (t.reportChanged = function () {
        (it(), ep(this), st());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      gn(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return Ke(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = He(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Ke(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = He(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Ke(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = He(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
fr.isBeingObservedMask_ = 1;
fr.isPendingUnobservationMask_ = 2;
fr.diffValueMask_ = 4;
var ac = Ir("Atom", fr);
function Fv(e, t, r) {
  (t === void 0 && (t = en), r === void 0 && (r = en));
  var n = new fr(e);
  return (t !== en && R_(n, t), r !== en && op(n, r), n);
}
function _b(e, t) {
  return _p(e, t);
}
function mb(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Ao = { structural: _b, default: mb };
function Cr(e, t, r) {
  return lp(e)
    ? e
    : Array.isArray(e)
      ? ae.array(e, { name: r })
      : ur(e)
        ? ae.object(e, void 0, { name: r })
        : hn(e)
          ? ae.map(e, { name: r })
          : Jt(e)
            ? ae.set(e, { name: r })
            : typeof e == "function" && !on(e) && !Ta(e)
              ? Dv(e)
                ? sn(e)
                : Da(r, e)
              : e;
}
function yb(e, t, r) {
  if (e == null || ii(e) || oi(e) || Dr(e) || Rt(e)) return e;
  if (Array.isArray(e)) return ae.array(e, { name: r, deep: !1 });
  if (ur(e)) return ae.object(e, void 0, { name: r, deep: !1 });
  if (hn(e)) return ae.map(e, { name: r, deep: !1 });
  if (Jt(e)) return ae.set(e, { name: r, deep: !1 });
}
function Qo(e) {
  return e;
}
function wb(e, t) {
  return _p(e, t) ? t : e;
}
var kb = "override";
function Ob(e) {
  return e.annotationType_ === kb;
}
function Ka(e, t) {
  return { annotationType_: e, options_: t, make_: Sb, extend_: xb, decorate_20223_: Eb };
}
function Sb(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (on(r.value)) return 1;
  var o = $v(e, this, t, r, !1);
  return (At(n, t, o), 2);
}
function xb(e, t, r, n) {
  var a = $v(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function Eb(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    o = this,
    i = function (l) {
      var u, d, f, p;
      return Rr(
        (u = (d = o.options_) == null ? void 0 : d.name) != null ? u : n.toString(),
        l,
        (f = (p = o.options_) == null ? void 0 : p.autoAction) != null ? f : !1,
      );
    };
  if (r == "field")
    return function (s) {
      var l,
        u = s;
      return (
        on(u) || (u = i(u)),
        (l = o.options_) != null && l.bound && ((u = u.bind(this)), (u.isMobxAction = !0)),
        u
      );
    };
  if (r == "method") {
    var c;
    return (
      on(e) || (e = i(e)),
      (c = this.options_) != null &&
        c.bound &&
        a(function () {
          var s = this,
            l = s[n].bind(s);
          ((l.isMobxAction = !0), (s[n] = l));
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
function Cb(e, t, r, n) {
  (t.annotationType_, n.value);
}
function $v(e, t, r, n, a) {
  var o, i, c, s, l, u, d;
  (a === void 0 && (a = I.safeDescriptors), Cb(e, t, r, n));
  var f = n.value;
  if ((o = t.options_) != null && o.bound) {
    var p;
    f = f.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return {
    value: Rr(
      (i = (c = t.options_) == null ? void 0 : c.name) != null ? i : r.toString(),
      f,
      (s = (l = t.options_) == null ? void 0 : l.autoAction) != null ? s : !1,
      (u = t.options_) != null && u.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: a ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !a,
  };
}
function Bv(e, t) {
  return { annotationType_: e, options_: t, make_: Rb, extend_: Pb, decorate_20223_: Ab };
}
function Rb(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Zt(e.target_, t) || !Ta(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Ta(r.value)) return 1;
  var o = zv(e, this, t, r, !1, !1);
  return (At(n, t, o), 2);
}
function Pb(e, t, r, n) {
  var a,
    o = zv(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, o, n);
}
function Ab(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    Ta(e) || (e = sn(e)),
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
function Ib(e, t, r, n) {
  (t.annotationType_, n.value);
}
function zv(e, t, r, n, a, o) {
  (o === void 0 && (o = I.safeDescriptors), Ib(e, t, r, n));
  var i = n.value;
  if ((Ta(i) || (i = sn(i)), a)) {
    var c;
    ((i = i.bind((c = e.proxy_) != null ? c : e.target_)), (i.isMobXFlow = !0));
  }
  return { value: i, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function oc(e, t) {
  return { annotationType_: e, options_: t, make_: jb, extend_: Db, decorate_20223_: Tb };
}
function jb(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Db(e, t, r, n) {
  return (
    Mb(e, this, t, r),
    e.defineComputedProperty_(t, Er({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function Tb(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var o = bn(this)[N],
        i = Er({}, r.options_, { get: e, context: this });
      (i.name || (i.name = "ObservableObject." + n.toString()), o.values_.set(n, new yt(i)));
    }),
    function () {
      return this[N].getObservablePropValue_(n);
    }
  );
}
function Mb(e, t, r, n) {
  (t.annotationType_, n.get);
}
function ei(e, t) {
  return { annotationType_: e, options_: t, make_: Lb, extend_: Nb, decorate_20223_: Fb };
}
function Lb(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Nb(e, t, r, n) {
  var a, o;
  return (
    $b(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (o = this.options_) == null ? void 0 : o.enhancer) != null ? a : Cr,
      n,
    )
  );
}
function Fb(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    o = new WeakSet();
  function i(c, s) {
    var l,
      u,
      d = bn(c)[N],
      f = new Or(
        s,
        (l = (u = r.options_) == null ? void 0 : u.enhancer) != null ? l : Cr,
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
function $b(e, t, r, n) {
  t.annotationType_;
}
var Bb = "true",
  zb = Uv();
function Uv(e) {
  return { annotationType_: Bb, options_: e, make_: Ub, extend_: qb, decorate_20223_: Vb };
}
function Ub(e, t, r, n) {
  var a, o;
  if (r.get) return ti.make_(e, t, r, n);
  if (r.set) {
    var i = on(r.set) ? r.set : Rr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: I.safeDescriptors ? e.isPlainObject_ : !0,
          set: i,
        }) === null
        ? 0
        : 2
      : (At(n, t, { configurable: !0, set: i }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var c;
    if (Dv(r.value)) {
      var s,
        l = (s = this.options_) != null && s.autoBind ? sn.bound : sn;
      return l.make_(e, t, r, n);
    }
    var u = (c = this.options_) != null && c.autoBind ? Da.bound : Da;
    return u.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? ae.ref : ae;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function qb(e, t, r, n) {
  var a, o;
  if (r.get) return ti.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: I.safeDescriptors ? e.isPlainObject_ : !0, set: Rr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var i;
    r.value = r.value.bind((i = e.proxy_) != null ? i : e.target_);
  }
  var c = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? ae.ref : ae;
  return c.extend_(e, t, r, n);
}
function Vb(e, t) {
  W("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Gb = "observable",
  Kb = "observable.ref",
  Hb = "observable.shallow",
  Wb = "observable.struct",
  qv = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(qv);
function to(e) {
  return e || qv;
}
var xs = ei(Gb),
  Jb = ei(Kb, { enhancer: Qo }),
  Yb = ei(Hb, { enhancer: yb }),
  Xb = ei(Wb, { enhancer: wb }),
  Vv = It(xs);
function ro(e) {
  return e.deep === !0 ? Cr : e.deep === !1 ? Qo : Qb(e.defaultDecorator);
}
function Zb(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Uv(e)) : void 0;
}
function Qb(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : Cr;
}
function Gv(e, t, r) {
  if (Ga(t)) return xs.decorate_20223_(e, t);
  if (xr(t)) {
    Va(e, t, xs);
    return;
  }
  return lp(e)
    ? e
    : ur(e)
      ? ae.object(e, t, r)
      : Array.isArray(e)
        ? ae.array(e, t)
        : hn(e)
          ? ae.map(e, t)
          : Jt(e)
            ? ae.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : ae.box(e, t);
}
Pv(Gv, Vv);
var e_ = {
    box: function (t, r) {
      var n = to(r);
      return new Or(t, ro(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = to(r);
      return (I.useProxies === !1 || n.proxy === !1 ? Z_ : U_)(t, ro(n), n.name);
    },
    map: function (t, r) {
      var n = to(r);
      return new fp(t, ro(n), n.name);
    },
    set: function (t, r) {
      var n = to(r);
      return new vp(t, ro(n), n.name);
    },
    object: function (t, r, n) {
      return Tr(function () {
        return j_(I.useProxies === !1 || n?.proxy === !1 ? bn({}, n) : $_({}, n), t, r);
      });
    },
    ref: It(Jb),
    shallow: It(Yb),
    deep: Vv,
    struct: It(Xb),
  },
  ae = Pv(Gv, e_),
  Kv = "computed",
  t_ = "computed.struct",
  Es = oc(Kv),
  r_ = oc(t_, { equals: Ao.structural }),
  ti = function (t, r) {
    if (Ga(r)) return Es.decorate_20223_(t, r);
    if (xr(r)) return Va(t, r, Es);
    if (ur(t)) return It(oc(Kv, t));
    var n = ur(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new yt(n));
  };
Object.assign(ti, Es);
ti.struct = It(r_);
var Gl,
  Kl,
  Io = 0,
  n_ = 1,
  a_ =
    (Gl = (Kl = Po(function () {}, "name")) == null ? void 0 : Kl.configurable) != null ? Gl : !1,
  Hl = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function Rr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return o_(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    a_ && ((Hl.value = e), At(a, "name", Hl)),
    a
  );
}
function o_(e, t, r, n, a) {
  var o = i_(e, t);
  try {
    return r.apply(n, a);
  } catch (i) {
    throw ((o.error_ = i), i);
  } finally {
    s_(o);
  }
}
function i_(e, t, r, n) {
  var a = !1,
    o = 0,
    i = I.trackingDerivation,
    c = !t || !i;
  it();
  var s = I.allowStateChanges;
  c && (jr(), (s = ri(!0)));
  var l = ic(!0),
    u = {
      runAsAction_: c,
      prevDerivation_: i,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: l,
      notifySpy_: a,
      startTime_: o,
      actionId_: n_++,
      parentActionId_: Io,
    };
  return ((Io = u.actionId_), u);
}
function s_(e) {
  (Io !== e.actionId_ && W(30),
    (Io = e.parentActionId_),
    e.error_ !== void 0 && (I.suppressReactionErrors = !0),
    ni(e.prevAllowStateChanges_),
    Sa(e.prevAllowStateReads_),
    st(),
    e.runAsAction_ && Qt(e.prevDerivation_),
    (I.suppressReactionErrors = !1));
}
function c_(e, t) {
  var r = ri(e);
  try {
    return t();
  } finally {
    ni(r);
  }
}
function ri(e) {
  var t = I.allowStateChanges;
  return ((I.allowStateChanges = e), t);
}
function ni(e) {
  I.allowStateChanges = e;
}
var Or = (function (e) {
    function t(n, a, o, i, c) {
      var s;
      return (
        o === void 0 && (o = "ObservableValue"),
        c === void 0 && (c = Ao.default),
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
    Nv(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== I.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (at(this)) {
          var o = ot(this, { object: this, type: jt, newValue: a });
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
          bt(this) && _t(this, { type: jt, object: this, newValue: a, oldValue: o }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (a) {
        return Ha(this, a);
      }),
      (r.observe_ = function (a, o) {
        return (
          o &&
            a({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: jt,
              newValue: this.value_,
              oldValue: void 0,
            }),
          Wa(this, a)
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
        return Lv(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(fr),
  yt = (function () {
    function e(r) {
      ((this.dependenciesState_ = Y.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = Y.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new Do(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = jo.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || W(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = Rr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? Ao.structural : Ao.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        v_(this);
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
          Cs(this) &&
            (this.warnAboutUntrackedRead_(), it(), (this.value_ = this.computeValue_(!1)), st());
        else if ((Qv(this), Cs(this))) {
          var n = I.trackingContext;
          (this.keepAlive_ && !n && (I.trackingContext = this),
            this.trackAndCompute() && f_(this),
            (I.trackingContext = n));
        }
        var a = this.value_;
        if (_o(a)) throw a.cause;
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
          i = a || _o(n) || _o(o) || !this.equals_(n, o);
        return (i && (this.value_ = o), i);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = ri(!1),
          o;
        if (n) o = Hv(this, this.derivation, this.scope_);
        else if (I.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (i) {
            o = new Do(i);
          }
        return (ni(a), (this.isComputing = !1), o);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Rs(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var o = this,
          i = !0,
          c = void 0;
        return O_(function () {
          var s = o.get();
          if (!i || a) {
            var l = jr();
            (n({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: jt,
              object: o,
              newValue: s,
              oldValue: c,
            }),
              Qt(l));
          }
          ((i = !1), (c = s));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return Lv(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      gn(e, [
        {
          key: "isComputing",
          get: function () {
            return Ke(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = He(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Ke(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = He(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Ke(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = He(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Ke(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = He(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Ke(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = He(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
yt.isComputingMask_ = 1;
yt.isRunningSetterMask_ = 2;
yt.isBeingObservedMask_ = 4;
yt.isPendingUnobservationMask_ = 8;
yt.diffValueMask_ = 16;
var ai = Ir("ComputedValue", yt),
  Y;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(Y || (Y = {}));
var jo;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(jo || (jo = {}));
var Do = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function _o(e) {
  return e instanceof Do;
}
function Cs(e) {
  switch (e.dependenciesState_) {
    case Y.UP_TO_DATE_:
      return !1;
    case Y.NOT_TRACKING_:
    case Y.STALE_:
      return !0;
    case Y.POSSIBLY_STALE_: {
      for (var t = ic(!0), r = jr(), n = e.observing_, a = n.length, o = 0; o < a; o++) {
        var i = n[o];
        if (ai(i)) {
          if (I.disableErrorBoundaries) i.get();
          else
            try {
              i.get();
            } catch {
              return (Qt(r), Sa(t), !0);
            }
          if (e.dependenciesState_ === Y.STALE_) return (Qt(r), Sa(t), !0);
        }
      }
      return (Jv(e), Qt(r), Sa(t), !1);
    }
  }
}
function Hv(e, t, r) {
  var n = ic(!0);
  (Jv(e),
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
      o = new Do(i);
    }
  return (I.inBatch--, (I.trackingDerivation = a), l_(e), Sa(n), o);
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
    (s.diffValue === 0 && Xv(s, e), (s.diffValue = 0));
  }
  for (; a--; ) {
    var l = r[a];
    l.diffValue === 1 && ((l.diffValue = 0), d_(l, e));
  }
  n !== Y.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function Rs(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Xv(t[r], e);
  e.dependenciesState_ = Y.NOT_TRACKING_;
}
function Wv(e) {
  var t = jr();
  try {
    return e();
  } finally {
    Qt(t);
  }
}
function jr() {
  var e = I.trackingDerivation;
  return ((I.trackingDerivation = null), e);
}
function Qt(e) {
  I.trackingDerivation = e;
}
function ic(e) {
  var t = I.allowStateReads;
  return ((I.allowStateReads = e), t);
}
function Sa(e) {
  I.allowStateReads = e;
}
function Jv(e) {
  if (e.dependenciesState_ !== Y.UP_TO_DATE_) {
    e.dependenciesState_ = Y.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = Y.UP_TO_DATE_;
  }
}
var mo = function () {
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
  yo = !0,
  Yv = !1,
  I = (function () {
    var e = Wo();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (yo = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new mo().version && (yo = !1),
      yo
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new mo()))
        : (setTimeout(function () {
            Yv || W(35);
          }, 1),
          new mo())
    );
  })();
function u_() {
  if (((I.pendingReactions.length || I.inBatch || I.isRunningReactions) && W(36), (Yv = !0), yo)) {
    var e = Wo();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (I = new mo()));
  }
}
function d_(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Xv(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Zv(e));
}
function Zv(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), I.pendingUnobservations.push(e));
}
function it() {
  I.inBatch++;
}
function st() {
  if (--I.inBatch === 0) {
    tp();
    for (var e = I.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof yt && r.suspend_()));
    }
    I.pendingUnobservations = [];
  }
}
function Qv(e) {
  var t = I.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && I.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && I.inBatch > 0 && Zv(e), !1);
}
function ep(e) {
  e.lowestObserverState_ !== Y.STALE_ &&
    ((e.lowestObserverState_ = Y.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === Y.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = Y.STALE_));
    }));
}
function f_(e) {
  e.lowestObserverState_ !== Y.STALE_ &&
    ((e.lowestObserverState_ = Y.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Y.POSSIBLY_STALE_
        ? (t.dependenciesState_ = Y.STALE_)
        : t.dependenciesState_ === Y.UP_TO_DATE_ && (e.lowestObserverState_ = Y.UP_TO_DATE_);
    }));
}
function v_(e) {
  e.lowestObserverState_ === Y.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = Y.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Y.UP_TO_DATE_ &&
        ((t.dependenciesState_ = Y.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var Lt = (function () {
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
      (this.isTracing_ = jo.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), I.pendingReactions.push(this), tp());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (it(), (this.isScheduled = !1));
        var n = I.trackingContext;
        if (((I.trackingContext = this), Cs(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((I.trackingContext = n), st());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (it(), (this.isRunning = !0));
        var a = I.trackingContext;
        I.trackingContext = this;
        var o = Hv(this, n, void 0);
        ((I.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Rs(this),
          _o(o) && this.reportExceptionInDerivation_(o.cause),
          st());
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (it(), Rs(this), st()));
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
    gn(e, [
      {
        key: "isDisposed",
        get: function () {
          return Ke(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = He(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Ke(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = He(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Ke(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = He(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Ke(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = He(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Ke(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = He(this.flags_, e.diffValueMask_, n === 1);
        },
      },
    ])
  );
})();
Lt.isDisposedMask_ = 1;
Lt.isScheduledMask_ = 2;
Lt.isTrackPendingMask_ = 4;
Lt.isRunningMask_ = 8;
Lt.diffValueMask_ = 16;
var p_ = 100,
  Ps = function (t) {
    return t();
  };
function tp() {
  I.inBatch > 0 || I.isRunningReactions || Ps(h_);
}
function h_() {
  I.isRunningReactions = !0;
  for (var e = I.pendingReactions, t = 0; e.length > 0; ) {
    ++t === p_ && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  I.isRunningReactions = !1;
}
var To = Ir("Reaction", Lt);
function g_(e) {
  var t = Ps;
  Ps = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function xa() {
  return !1;
}
function b_(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var rp = "action",
  __ = "action.bound",
  np = "autoAction",
  m_ = "autoAction.bound",
  y_ = "<unnamed action>",
  As = Ka(rp),
  w_ = Ka(__, { bound: !0 }),
  Is = Ka(np, { autoAction: !0 }),
  k_ = Ka(m_, { autoAction: !0, bound: !0 });
function ap(e) {
  var t = function (n, a) {
    if (mt(n)) return Rr(n.name || y_, n, e);
    if (mt(a)) return Rr(n, a, e);
    if (Ga(a)) return (e ? Is : As).decorate_20223_(n, a);
    if (xr(a)) return Va(n, a, e ? Is : As);
    if (xr(n)) return It(Ka(e ? np : rp, { name: n, autoAction: e }));
  };
  return t;
}
var ct = ap(!1);
Object.assign(ct, As);
var Da = ap(!0);
Object.assign(Da, Is);
ct.bound = It(w_);
Da.bound = It(k_);
function on(e) {
  return mt(e) && e.isMobxAction === !0;
}
function O_(e, t) {
  var r, n, a, o;
  t === void 0 && (t = Av);
  var i = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    c = !t.scheduler && !t.delay,
    s;
  if (c)
    s = new Lt(
      i,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var l = x_(t),
      u = !1;
    s = new Lt(
      i,
      function () {
        u ||
          ((u = !0),
          l(function () {
            ((u = !1), s.isDisposed || s.track(d));
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
var S_ = function (t) {
  return t();
};
function x_(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : S_;
}
var E_ = "onBO",
  C_ = "onBUO";
function R_(e, t, r) {
  return ip(E_, e, t, r);
}
function op(e, t, r) {
  return ip(C_, e, t, r);
}
function ip(e, t, r, n) {
  var a = No(t),
    o = mt(n) ? n : r,
    i = e + "L";
  return (
    a[i] ? a[i].add(o) : (a[i] = new Set([o])),
    function () {
      var c = a[i];
      c && (c.delete(o), c.size === 0 && delete a[i]);
    }
  );
}
var P_ = "never",
  no = "always",
  A_ = "observed";
function I_(e) {
  e.isolateGlobalState === !0 && u_();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (I.useProxies = t === no ? !0 : t === P_ ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (I.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === no ? no : r === A_;
    ((I.enforceActions = n), (I.allowStateChanges = !(n === !0 || n === no)));
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
    e.reactionScheduler && g_(e.reactionScheduler));
}
function j_(e, t, r, n) {
  var a = fb(t);
  return (
    Tr(function () {
      var o = bn(e, n)[N];
      Zo(a).forEach(function (i) {
        o.extend_(i, a[i], r && i in r ? r[i] : !0);
      });
    }),
    e
  );
}
function D_(e, t) {
  return sp(No(e, t));
}
function sp(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = T_(e.observing_).map(sp)),
    t
  );
}
function T_(e) {
  return Array.from(new Set(e));
}
var M_ = 0;
function cp() {
  this.message = "FLOW_CANCELLED";
}
cp.prototype = Object.create(Error.prototype);
var Fi = Bv("flow"),
  L_ = Bv("flow.bound", { bound: !0 }),
  sn = Object.assign(function (t, r) {
    if (Ga(r)) return Fi.decorate_20223_(t, r);
    if (xr(r)) return Va(t, r, Fi);
    var n = t,
      a = n.name || "<unnamed flow>",
      o = function () {
        var c = this,
          s = arguments,
          l = ++M_,
          u = ct(a + " - runid: " + l + " - init", n).apply(c, s),
          d,
          f = void 0,
          p = new Promise(function (h, v) {
            var g = 0;
            d = v;
            function b(k) {
              f = void 0;
              var m;
              try {
                m = ct(a + " - runid: " + l + " - yield " + g++, u.next).call(u, k);
              } catch (S) {
                return v(S);
              }
              w(m);
            }
            function y(k) {
              f = void 0;
              var m;
              try {
                m = ct(a + " - runid: " + l + " - yield " + g++, u.throw).call(u, k);
              } catch (S) {
                return v(S);
              }
              w(m);
            }
            function w(k) {
              if (mt(k?.then)) {
                k.then(w, v);
                return;
              }
              return k.done ? h(k.value) : ((f = Promise.resolve(k.value)), f.then(b, y));
            }
            b(void 0);
          });
        return (
          (p.cancel = ct(a + " - runid: " + l + " - cancel", function () {
            try {
              f && Wl(f);
              var h = u.return(void 0),
                v = Promise.resolve(h.value);
              (v.then(en, en), Wl(v), d(new cp()));
            } catch (g) {
              d(g);
            }
          })),
          p
        );
      };
    return ((o.isMobXFlow = !0), o);
  }, Fi);
sn.bound = It(L_);
function Wl(e) {
  mt(e.cancel) && e.cancel();
}
function Ta(e) {
  return e?.isMobXFlow === !0;
}
function N_(e, t) {
  return e ? ii(e) || !!e[N] || ac(e) || To(e) || ai(e) : !1;
}
function lp(e) {
  return N_(e);
}
function Yt(e, t) {
  (t === void 0 && (t = void 0), it());
  try {
    return e.apply(t);
  } finally {
    st();
  }
}
function $r(e) {
  return e[N];
}
var F_ = {
  has: function (t, r) {
    return $r(t).has_(r);
  },
  get: function (t, r) {
    return $r(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return xr(r) ? ((a = $r(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return xr(r) ? ((n = $r(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = $r(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return $r(t).ownKeys_();
  },
  preventExtensions: function (t) {
    W(13);
  },
};
function $_(e, t) {
  var r, n;
  return (
    Iv(),
    (e = bn(e, t)),
    (n = (r = e[N]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, F_))
  );
}
function at(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Ha(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    jv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function ot(e, t) {
  var r = jr();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, o = n.length;
      a < o && ((t = n[a](t)), t && !t.type && W(14), !!t);
      a++
    );
    return t;
  } finally {
    Qt(r);
  }
}
function bt(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Wa(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    jv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function _t(e, t) {
  var r = jr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, o = n.length; a < o; a++) n[a](t);
    Qt(r);
  }
}
function up(e, t, r) {
  return (
    Tr(function () {
      var n,
        a = bn(e, r)[N];
      ((n = t) != null || (t = bb(e)),
        Zo(t).forEach(function (o) {
          return a.make_(o, t[o]);
        }));
    }),
    e
  );
}
var Jl = "splice",
  jt = "update",
  B_ = 1e4,
  z_ = {
    get: function (t, r) {
      var n = t[N];
      return r === N
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Zt(Mo, r)
              ? Mo[r]
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
  sc = (function () {
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
        (this.atom_ = new fr(r)),
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
        return Ha(this, n);
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
          Wa(this, n)
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
          this.legacyMode_ && a > 0 && bp(n + a + 1));
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
          o === void 0 && (o = Os),
          at(this))
        ) {
          var s = ot(this, { object: this.proxy_, type: Jl, index: n, removedCount: a, added: o });
          if (!s) return Os;
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
          var l = o.length - a;
          this.updateArrayLength_(c, l);
        }
        var u = this.spliceItemsIntoValues_(n, a, o);
        return (
          (a !== 0 || o.length !== 0) && this.notifyArraySplice_(n, o, u),
          this.dehanceValues_(u)
        );
      }),
      (t.spliceItemsIntoValues_ = function (n, a, o) {
        if (o.length < B_) {
          var i;
          return (i = this.values_).splice.apply(i, [n, a].concat(o));
        } else {
          var c = this.values_.slice(n, n + a),
            s = this.values_.slice(n + a);
          this.values_.length += o.length - a;
          for (var l = 0; l < o.length; l++) this.values_[n + l] = o[l];
          for (var u = 0; u < s.length; u++) this.values_[n + o.length + u] = s[u];
          return c;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (n, a, o) {
        var i = !this.owned_ && xa(),
          c = bt(this),
          s =
            c || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: jt,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: a,
                  oldValue: o,
                }
              : null;
        (this.atom_.reportChanged(), c && _t(this, s));
      }),
      (t.notifyArraySplice_ = function (n, a, o) {
        var i = !this.owned_ && xa(),
          c = bt(this),
          s =
            c || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Jl,
                  index: n,
                  removed: o,
                  added: a,
                  removedCount: o.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), c && _t(this, s));
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
          if (at(this)) {
            var c = ot(this, { type: jt, object: this.proxy_, index: n, newValue: a });
            if (!c) return;
            a = c.newValue;
          }
          a = this.enhancer_(a, i);
          var s = a !== i;
          s && ((o[n] = a), this.notifyArrayChildUpdate_(n, a, i));
        } else {
          for (var l = new Array(n + 1 - o.length), u = 0; u < l.length - 1; u++) l[u] = void 0;
          ((l[l.length - 1] = a), this.spliceWithArray_(o.length, 0, l));
        }
      }),
      e
    );
  })();
function U_(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    Iv(),
    Tr(function () {
      var a = new sc(r, t, n, !1);
      Tv(a.values_, N, a);
      var o = new Proxy(a.values_, z_);
      return ((a.proxy_ = o), e && e.length && a.spliceWithArray_(0, 0, e), o);
    })
  );
}
var Mo = {
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
ce("at", Ye);
ce("concat", Ye);
ce("flat", Ye);
ce("includes", Ye);
ce("indexOf", Ye);
ce("join", Ye);
ce("lastIndexOf", Ye);
ce("slice", Ye);
ce("toString", Ye);
ce("toLocaleString", Ye);
ce("toSorted", Ye);
ce("toSpliced", Ye);
ce("with", Ye);
ce("every", kt);
ce("filter", kt);
ce("find", kt);
ce("findIndex", kt);
ce("findLast", kt);
ce("findLastIndex", kt);
ce("flatMap", kt);
ce("forEach", kt);
ce("map", kt);
ce("some", kt);
ce("toReversed", kt);
ce("reduce", dp);
ce("reduceRight", dp);
function ce(e, t) {
  typeof Array.prototype[e] == "function" && (Mo[e] = t(e));
}
function Ye(e) {
  return function () {
    var t = this[N];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function kt(e) {
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
function dp(e) {
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
var q_ = Ir("ObservableArrayAdministration", sc);
function oi(e) {
  return Yo(e) && q_(e[N]);
}
var V_ = {},
  sr = "add",
  Lo = "delete",
  fp = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = Cr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[N] = V_),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        mt(Map) || W(18),
        Tr(function () {
          ((o.keysAtom_ = Fv("ObservableMap.keys()")),
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
          var i = (o = new Or(this.has_(n), Qo, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, i),
            op(i, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return o.get();
      }),
      (t.set = function (n, a) {
        var o = this.has_(n);
        if (at(this)) {
          var i = ot(this, { type: o ? jt : sr, object: this, newValue: a, name: n });
          if (!i) return this;
          a = i.newValue;
        }
        return (o ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, at(this))) {
          var o = ot(this, { type: Lo, object: this, name: n });
          if (!o) return !1;
        }
        if (this.has_(n)) {
          var i = xa(),
            c = bt(this),
            s =
              c || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Lo,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Yt(function () {
              var l;
              (a.keysAtom_.reportChanged(), (l = a.hasMap_.get(n)) == null || l.setNewValue_(!1));
              var u = a.data_.get(n);
              (u.setNewValue_(void 0), a.data_.delete(n));
            }),
            c && _t(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var o = this.data_.get(n);
        if (((a = o.prepareNewValue_(a)), a !== I.UNCHANGED)) {
          var i = xa(),
            c = bt(this),
            s =
              c || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: jt,
                    object: this,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), c && _t(this, s));
        }
      }),
      (t.addValue_ = function (n, a) {
        var o = this;
        (this.keysAtom_,
          Yt(function () {
            var l,
              u = new Or(a, o.enhancer_, "ObservableMap.key", !1);
            (o.data_.set(n, u),
              (a = u.value_),
              (l = o.hasMap_.get(n)) == null || l.setNewValue_(!0),
              o.keysAtom_.reportChanged());
          }));
        var i = xa(),
          c = bt(this),
          s =
            c || i
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: sr,
                  object: this,
                  name: n,
                  newValue: a,
                }
              : null;
        c && _t(this, s);
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
        return Yl({
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
        return Yl({
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
        for (var o = tn(this), i; !(i = o()).done; ) {
          var c = i.value,
            s = c[0],
            l = c[1];
          n.call(a, l, s, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          Dr(n) && (n = new Map(n)),
          Yt(function () {
            ur(n)
              ? db(n).forEach(function (o) {
                  return a.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var i = o[0],
                      c = o[1];
                    return a.set(i, c);
                  })
                : hn(n)
                  ? (ub(n) || W(19, n),
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
        Yt(function () {
          Wv(function () {
            for (var a = tn(n.keys()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          Yt(function () {
            for (
              var o = G_(n), i = new Map(), c = !1, s = tn(a.data_.keys()), l;
              !(l = s()).done;

            ) {
              var u = l.value;
              if (!o.has(u)) {
                var d = a.delete(u);
                if (d) c = !0;
                else {
                  var f = a.data_.get(u);
                  i.set(u, f);
                }
              }
            }
            for (var p = tn(o.entries()), h; !(h = p()).done; ) {
              var v = h.value,
                g = v[0],
                b = v[1],
                y = a.data_.has(g);
              if ((a.set(g, b), a.data_.has(g))) {
                var w = a.data_.get(g);
                (i.set(g, w), y || (c = !0));
              }
            }
            if (!c)
              if (a.data_.size !== i.size) a.keysAtom_.reportChanged();
              else
                for (var k = a.data_.keys(), m = i.keys(), S = k.next(), E = m.next(); !S.done; ) {
                  if (S.value !== E.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = k.next()), (E = m.next()));
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
        return Wa(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ha(this, n);
      }),
      gn(e, [
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
  Dr = Ir("ObservableMap", fp);
function Yl(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), lc(e));
}
function G_(e) {
  if (hn(e) || Dr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (ur(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return W(21, e);
}
var K_ = {},
  vp = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = Cr),
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
        mt(Set) || W(22),
        (this.enhancer_ = function (i, c) {
          return n(i, c, a);
        }),
        Tr(function () {
          ((o.atom_ = Fv(o.name_)), r && o.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Yt(function () {
          Wv(function () {
            for (var a = tn(n.data_.values()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var o = tn(this), i; !(i = o()).done; ) {
          var c = i.value;
          n.call(a, c, c, this);
        }
      }),
      (t.add = function (n) {
        var a = this;
        if ((this.atom_, at(this))) {
          var o = ot(this, { type: sr, object: this, newValue: n });
          if (!o) return this;
          n = o.newValue;
        }
        if (!this.has(n)) {
          Yt(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var i = !1,
            c = bt(this),
            s =
              c || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: sr,
                    object: this,
                    newValue: n,
                  }
                : null;
          c && _t(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (at(this)) {
          var o = ot(this, { type: Lo, object: this, oldValue: n });
          if (!o) return !1;
        }
        if (this.has(n)) {
          var i = !1,
            c = bt(this),
            s =
              c || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Lo,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Yt(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            c && _t(this, s),
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
        return Xl({
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
        return Xl({
          next: function () {
            var i = a.next(),
              c = i.value,
              s = i.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(c), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Jt(n) && !Rt(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Jt(n) && !Rt(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Jt(n) && !Rt(n)) return n.symmetricDifference(this);
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
        if (Jt(n) && !Rt(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          Rt(n) && (n = new Set(n)),
          Yt(function () {
            Array.isArray(n)
              ? (a.clear(),
                n.forEach(function (o) {
                  return a.add(o);
                }))
              : Jt(n)
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
        return Wa(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ha(this, n);
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
      gn(e, [
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
  Rt = Ir("ObservableSet", vp);
function Xl(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), lc(e));
}
var Zl = Object.create(null),
  Ql = "remove",
  pp = (function () {
    function e(r, n, a, o) {
      (n === void 0 && (n = new Map()),
        o === void 0 && (o = zb),
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
        (this.keysAtom_ = new fr("ObservableObject.keys")),
        (this.isPlainObject_ = ur(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, a) {
        var o = this.values_.get(n);
        if (o instanceof yt) return (o.set(a), !0);
        if (at(this)) {
          var i = ot(this, { type: jt, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!i) return null;
          a = i.newValue;
        }
        if (((a = o.prepareNewValue_(a)), a !== I.UNCHANGED)) {
          var c = bt(this),
            s = !1,
            l =
              c || s
                ? {
                    type: jt,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), c && _t(this, l));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (I.trackingDerivation && !Zt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, a, o) {
        return (
          o === void 0 && (o = !1),
          Zt(this.target_, n)
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
            ((a = new Or(n in this.target_, Qo, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var o;
            if ((o = this.target_[Pt]) != null && o[n]) return;
            W(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var i = this.target_; i && i !== Jo; ) {
            var c = Po(i, n);
            if (c) {
              var s = a.make_(this, n, c, i);
              if (s === 0) return;
              if (s === 1) break;
            }
            i = Object.getPrototypeOf(i);
          }
          tu(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, o, i) {
        if ((i === void 0 && (i = !1), o === !0 && (o = this.defaultAnnotation_), o === !1))
          return this.defineProperty_(n, a, i);
        var c = o.extend_(this, n, a, i);
        return (c && tu(this, o, n), c);
      }),
      (t.defineProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          it();
          var i = this.delete_(n);
          if (!i) return i;
          if (at(this)) {
            var c = ot(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: sr,
              newValue: a.value,
            });
            if (!c) return null;
            var s = c.newValue;
            a.value !== s && (a = Er({}, a, { value: s }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else At(this.target_, n, a);
          this.notifyPropertyAddition_(n, a.value);
        } finally {
          st();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, a, o, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          it();
          var c = this.delete_(n);
          if (!c) return c;
          if (at(this)) {
            var s = ot(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: sr,
              newValue: a,
            });
            if (!s) return null;
            a = s.newValue;
          }
          var l = eu(n),
            u = {
              configurable: I.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: l.get,
              set: l.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else At(this.target_, n, u);
          var d = new Or(a, o, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          st();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          it();
          var i = this.delete_(n);
          if (!i) return i;
          if (at(this)) {
            var c = ot(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: sr,
              newValue: void 0,
            });
            if (!c) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var s = eu(n),
            l = {
              configurable: I.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else At(this.target_, n, l);
          (this.values_.set(n, new yt(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          st();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Zt(this.target_, n))) return !0;
        if (at(this)) {
          var o = ot(this, { object: this.proxy_ || this.target_, name: n, type: Ql });
          if (!o) return null;
        }
        try {
          var i;
          it();
          var c = bt(this),
            s = !1,
            l = this.values_.get(n),
            u = void 0;
          if (!l && (c || s)) {
            var d;
            u = (d = Po(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (l && (this.values_.delete(n), l instanceof Or && (u = l.value_), ep(l)),
            this.keysAtom_.reportChanged(),
            (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(n in this.target_),
            c || s)
          ) {
            var f = {
              type: Ql,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: u,
              name: n,
            };
            c && _t(this, f);
          }
        } finally {
          st();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return Wa(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ha(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var o,
          i = bt(this),
          c = !1;
        if (i || c) {
          var s =
            i || c
              ? {
                  type: sr,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: a,
                }
              : null;
          i && _t(this, s);
        }
        ((o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), Zo(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function bn(e, t) {
  var r;
  if (Zt(e, N)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new pp(e, new Map(), String(n), Zb(t));
  return (Xo(e, N, a), e);
}
var H_ = Ir("ObservableObjectAdministration", pp);
function eu(e) {
  return (
    Zl[e] ||
    (Zl[e] = {
      get: function () {
        return this[N].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[N].setObservablePropValue_(e, r);
      },
    })
  );
}
function ii(e) {
  return Yo(e) ? H_(e[N]) : !1;
}
function tu(e, t, r) {
  var n;
  (n = e.target_[Pt]) == null || delete n[r];
}
var W_ = gp(0),
  J_ = (function () {
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
  $i = 0,
  hp = function () {};
function Y_(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
Y_(hp, Array.prototype);
var cc = (function (e) {
  function t(n, a, o, i) {
    var c;
    return (
      o === void 0 && (o = "ObservableArray"),
      i === void 0 && (i = !1),
      (c = e.call(this) || this),
      Tr(function () {
        var s = new sc(o, a, i, !0);
        ((s.proxy_ = c),
          Tv(c, N, s),
          n && n.length && c.spliceWithArray(0, 0, n),
          J_ && Object.defineProperty(c, "0", W_));
      }),
      c
    );
  }
  Nv(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[N].atom_.reportObserved();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (c) {
          return oi(c) ? c.slice() : c;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return lc({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    gn(t, [
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
})(hp);
Object.entries(Mo).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Xo(cc.prototype, t, r);
});
function gp(e) {
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
function X_(e) {
  At(cc.prototype, "" + e, gp(e));
}
function bp(e) {
  if (e > $i) {
    for (var t = $i; t < e + 100; t++) X_(t);
    $i = e;
  }
}
bp(1e3);
function Z_(e, t, r) {
  return new cc(e, t, r);
}
function No(e, t) {
  if (typeof e == "object" && e !== null) {
    if (oi(e)) return (t !== void 0 && W(23), e[N].atom_);
    if (Rt(e)) return e.atom_;
    if (Dr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || W(25, t, js(e)), r);
    }
    if (ii(e)) {
      if (!t) return W(26);
      var n = e[N].values_.get(t);
      return (n || W(27, t, js(e)), n);
    }
    if (ac(e) || ai(e) || To(e)) return e;
  } else if (mt(e) && To(e[N])) return e[N];
  W(28);
}
function Q_(e, t) {
  if ((e || W(29), ac(e) || ai(e) || To(e) || Dr(e) || Rt(e))) return e;
  if (e[N]) return e[N];
  W(24, e);
}
function js(e, t) {
  var r;
  if (t !== void 0) r = No(e, t);
  else {
    if (on(e)) return e.name;
    ii(e) || Dr(e) || Rt(e) ? (r = Q_(e)) : (r = No(e));
  }
  return r.name_;
}
function Tr(e) {
  var t = jr(),
    r = ri(!0);
  it();
  try {
    return e();
  } finally {
    (st(), ni(r), Qt(t));
  }
}
var ru = Jo.toString;
function _p(e, t, r) {
  return (r === void 0 && (r = -1), Ds(e, t, r));
}
function Ds(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var i = ru.call(e);
  if (i !== ru.call(t)) return !1;
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
  ((e = nu(e)), (t = nu(t)));
  var c = i === "[object Array]";
  if (!c) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      l = t.constructor;
    if (
      s !== l &&
      !(mt(s) && s instanceof s && mt(l) && l instanceof l) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (r === 0) return !1;
  (r < 0 && (r = -1), (n = n || []), (a = a || []));
  for (var u = n.length; u--; ) if (n[u] === e) return a[u] === t;
  if ((n.push(e), a.push(t), c)) {
    if (((u = e.length), u !== t.length)) return !1;
    for (; u--; ) if (!Ds(e[u], t[u], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var p = 0; p < f; p++) {
      var h = d[p];
      if (!(Zt(t, h) && Ds(e[h], t[h], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function nu(e) {
  return oi(e) ? e.slice() : hn(e) || Dr(e) || Jt(e) || Rt(e) ? Array.from(e.entries()) : e;
}
var au,
  em = ((au = Wo().Iterator) == null ? void 0 : au.prototype) || {};
function lc(e) {
  return ((e[Symbol.iterator] = tm), Object.assign(Object.create(em), e));
}
function tm() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Wo();
  typeof t[e] > "u" && W("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: b_, extras: { getDebugName: js }, $mobx: N });
if (!_.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!up) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function rm(e) {
  e();
}
function nm(e) {
  (e || (e = rm), I_({ reactionScheduler: e }));
}
function am(e) {
  return D_(e);
}
var om = 1e4,
  im = 1e4,
  sm = (function () {
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
            (n === void 0 && (n = om), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, im));
        },
      }),
      e
    );
  })(),
  cm = typeof FinalizationRegistry < "u" ? FinalizationRegistry : sm,
  Ma = new cm(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  Bi = { exports: {} },
  zi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ou;
function lm() {
  if (ou) return zi;
  ou = 1;
  var e = wt();
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
  function l(d, f) {
    return f();
  }
  var u =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? l
      : c;
  return (
    (zi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u),
    zi
  );
}
var iu;
function um() {
  return (iu || ((iu = 1), (Bi.exports = lm())), Bi.exports);
}
var dm = um();
function su(e) {
  e.reaction = new Lt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function fm(e, t) {
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
          Ma.unregister(n),
          (n.onStoreChange = c),
          n.reaction || (su(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (su(a), Ma.register(r, a, a)),
    O.useDebugValue(a.reaction, am),
    dm.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
var Ui,
  qi,
  mp = typeof Symbol == "function" && Symbol.for,
  vm =
    (qi =
      (Ui = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Ui === void 0
        ? void 0
        : Ui.configurable) !== null && qi !== void 0
      ? qi
      : !1,
  cu = mp
    ? Symbol.for("react.forward_ref")
    : typeof _.forwardRef == "function" &&
      _.forwardRef(function (e) {
        return null;
      }).$$typeof,
  lu = mp
    ? Symbol.for("react.memo")
    : typeof _.memo == "function" &&
      _.memo(function (e) {
        return null;
      }).$$typeof;
function pm(e, t) {
  var r;
  if (lu && e.$$typeof === lu)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    o = e.displayName || e.name;
  if (cu && e.$$typeof === cu && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var i = function (c, s) {
    return fm(function () {
      return a(c, s);
    }, o);
  };
  return (
    (i.displayName = e.displayName),
    vm && Object.defineProperty(i, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (i.contextTypes = e.contextTypes),
    n && (i = _.forwardRef(i)),
    (i = _.memo(i)),
    gm(e, i),
    i
  );
}
var hm = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function gm(e, t) {
  Object.keys(e).forEach(function (r) {
    hm[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Vi;
nm(Ko.unstable_batchedUpdates);
Vi = Ma.finalizeAllImmediately;
function bm(e, t) {
  if (uu(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !uu(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function uu(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var du = Symbol("patchMixins"),
  yp = Symbol("patchedDefinition");
function _m(e, t) {
  var r = (e[du] = e[du] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function fu(e, t) {
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
function vu(e, t) {
  var r = function () {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    fu.call.apply(fu, [this, e, t].concat(o));
  };
  return r;
}
function mm(e, t, r) {
  var n = _m(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[yp])) {
    var o = e[t],
      i = wp(e, t, a ? a.enumerable : void 0, n, o);
    Object.defineProperty(e, t, i);
  }
}
function wp(e, t, r, n, a) {
  var o,
    i = vu(a, n);
  return (
    (o = {}),
    (o[yp] = !0),
    (o.get = function () {
      return i;
    }),
    (o.set = function (s) {
      if (this === e) i = vu(s, n);
      else {
        var l = wp(this, t, r, n, s);
        Object.defineProperty(this, t, l);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = r),
    o
  );
}
var pu = Symbol("ObserverAdministration"),
  hu = Symbol("isMobXReactObserver");
function Ts(e) {
  var t;
  return (t = e[pu]) != null
    ? t
    : (e[pu] = {
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
function ym(e) {
  var t = e.prototype;
  if (e[hu]) {
    var r = Ms(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[hu] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== _.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = gu;
    else if (t.shouldComponentUpdate !== gu)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = Ms(e);
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
        value: wm.call(this, n),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var i = this,
        c = Ts(this);
      return (
        (c.mounted = !0),
        Ma.unregister(this),
        (c.forceUpdate = function () {
          return i.forceUpdate();
        }),
        (!c.reaction || c.reactionInvalidatedBeforeMount) && c.forceUpdate(),
        o?.apply(this, arguments)
      );
    }),
    mm(t, "componentWillUnmount", function () {
      var i,
        c = Ts(this);
      ((i = c.reaction) == null || i.dispose(),
        (c.reaction = null),
        (c.forceUpdate = null),
        (c.mounted = !1),
        (c.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function Ms(e) {
  return e.displayName || e.name || "<component>";
}
function wm(e) {
  var t = e.bind(this),
    r = Ts(this);
  function n() {
    r.reaction || ((r.reaction = km(r)), r.mounted || Ma.register(this, r, this));
    var a = void 0,
      o = void 0;
    if (
      (r.reaction.track(function () {
        try {
          o = c_(!1, t);
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
function km(e) {
  return new Lt(e.name + ".render()", function () {
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
function gu(e, t) {
  return this.state !== t ? !0 : !bm(this.props, e);
}
function si(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(_.Component, e) ||
    Object.prototype.isPrototypeOf.call(_.PureComponent, e)
      ? ym(e)
      : pm(e)
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
function Om(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Sm = ["children"],
  bu = O.createContext({});
function kp(e) {
  var t = e.children,
    r = Om(e, Sm),
    n = O.useContext(bu),
    a = O.useRef(Ls({}, n, r)),
    o = a.current;
  return O.createElement(bu.Provider, { value: o }, t);
}
kp.displayName = "MobXProvider";
O.version.split(".")[0];
if (!_.Component) throw new Error("mobx-react requires React to be available");
if (!ae) throw new Error("mobx-react requires mobx to be available");
var xm = Object.defineProperty,
  Em = Object.getOwnPropertyDescriptor,
  Ee = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? Em(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && xm(t, r, a), a);
  };
const Gi = "Loading ...";
class we {
  constructor() {
    ((this.state = "ROOT"),
      (this.isLoading = !0),
      (this.message = Gi),
      (this.testNonVersioningData = ""),
      (this.testNumberVersioningData = ""),
      (this.testDateVersioningData = ""),
      (this.testTimestampVersioningData = ""),
      up(this));
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
    ((this.isLoading = !0), (this.message = t ?? Gi));
  }
  stopLoading() {
    ((this.isLoading = !1), (this.message = Gi));
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
Ee([ct.bound], we.prototype, "saveState", 1);
Ee([ct.bound], we.prototype, "saveResponse", 1);
Ee([ct.bound], we.prototype, "saveUpdateResponse", 1);
Ee([ct.bound], we.prototype, "clearStates", 1);
Ee([ct], we.prototype, "loading", 1);
Ee([ct], we.prototype, "stopLoading", 1);
const Cm = new we();
class Rm {
  constructor() {
    this.stateStore = Cm;
  }
}
const Op = new Rm(),
  Pm = _.createContext(Op),
  ci = () => _.useContext(Pm);
function be(e, t) {
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
function Am(e, t) {
  if (Ue(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ue(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Sp(e) {
  var t = Am(e, "string");
  return Ue(t) == "symbol" ? t : t + "";
}
function _u(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Sp(n.key), n));
  }
}
function _e(e, t, r) {
  return (
    t && _u(e.prototype, t),
    r && _u(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Im(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xe(e, t) {
  if (t && (Ue(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Im(e);
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
function La(e, t) {
  return (
    (La = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    La(e, t)
  );
}
function Ze(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && La(e, t));
}
function C(e, t, r) {
  return (
    (t = Sp(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Ae() {}
function xp(e) {
  if (Array.isArray(e)) return e;
}
function jm(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      a,
      o,
      i,
      c = [],
      s = !0,
      l = !1;
    try {
      if (((o = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = o.call(r)).done) && (c.push(n.value), c.length !== t); s = !0);
    } catch (u) {
      ((l = !0), (a = u));
    } finally {
      try {
        if (!s && r.return != null && ((i = r.return()), Object(i) !== i)) return;
      } finally {
        if (l) throw a;
      }
    }
    return c;
  }
}
function Ns(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function uc(e, t) {
  if (e) {
    if (typeof e == "string") return Ns(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Ns(e, t)
          : void 0
    );
  }
}
function Ep() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J(e, t) {
  return xp(e) || jm(e, t) || uc(e, t) || Ep();
}
var Cp = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  Dm = function (t) {
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
  Fo = function (t, r) {
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
  Tm = function (t, r, n) {
    return t ? { width: r } : {};
  },
  mu = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  Mm = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = t.destination,
      i = t.sourceIndex;
    if (!o) return r;
    var c = mu(i, n, a),
      s = mu(o.index, n, a),
      l = r.slice(),
      u = l.splice(c, 1),
      d = J(u, 1),
      f = d[0];
    return (l.splice(s, 0, f), l);
  };
const Lm = "modulepreload",
  Nm = function (e, t) {
    return new URL(e, t).href;
  },
  yu = {},
  Fm = function (t, r, n) {
    let a = Promise.resolve();
    if (r && r.length > 0) {
      let l = function (u) {
        return Promise.all(
          u.map((d) =>
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
      a = l(
        r.map((u) => {
          if (((u = Nm(u, n)), u in yu)) return;
          yu[u] = !0;
          const d = u.endsWith(".css"),
            f = d ? '[rel="stylesheet"]' : "";
          if (n)
            for (let h = i.length - 1; h >= 0; h--) {
              const v = i[h];
              if (v.href === u && (!d || v.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${u}"]${f}`)) return;
          const p = document.createElement("link");
          if (
            ((p.rel = d ? "stylesheet" : Lm),
            d || (p.as = "script"),
            (p.crossOrigin = ""),
            (p.href = u),
            s && p.setAttribute("nonce", s),
            document.head.appendChild(p),
            d)
          )
            return new Promise((h, v) => {
              (p.addEventListener("load", h),
                p.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${u}`))));
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
function $m(e, t) {
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
    a = $m(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      ((r = o[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function wu(e, t) {
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
function Ki(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Bm = (function () {
  function e(t) {
    var r = this;
    (be(this, e),
      C(this, "_isAnalyticsEvent", !0),
      C(this, "clone", function () {
        var n = Ki({}, r.payload);
        return new e({ payload: n });
      }),
      (this.payload = t.payload));
  }
  return _e(e, [
    {
      key: "update",
      value: function (r) {
        return (
          typeof r == "function" && (this.payload = r(this.payload)),
          Ue(r) === "object" && (this.payload = Ki(Ki({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function zm(e) {
  if (Array.isArray(e)) return Ns(e);
}
function Rp(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function Um() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ge(e) {
  return zm(e) || Rp(e) || uc(e) || Um();
}
function qm(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = X(e)) !== null; );
  return e;
}
function $o() {
  return (
    ($o =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = qm(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    $o.apply(null, arguments)
  );
}
function Vm(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, Pp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
function Gm(e, t, r, n) {
  var a = $o(X(e.prototype), t, r);
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
        be(this, t),
        (n = Vm(this, t, [r])),
        C(n, "_isUIAnalyticsEvent", !0),
        C(n, "clone", function () {
          if (n.hasFired) return null;
          var a = Ge(n.context),
            o = Ge(n.handlers),
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
      Ze(t, e),
      _e(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : Gm(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(Bm),
  Hm = _.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Wm = function () {
    return _.useContext(Hm);
  },
  Bo = function (t) {
    var r = _.useRef(t);
    return ((r.current = t), r);
  };
function Jm(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Ym(e, t) {
  var r = _.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = _.useRef(!0),
    a = _.useRef(r),
    o = n.current || !!(t && a.current.inputs && Jm(t, a.current.inputs)),
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
function Xm(e, t) {
  return Ym(function () {
    return e;
  }, t);
}
function Ap() {
  var e = Wm(),
    t = Xm(
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
function ku(e, t) {
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
function Zm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ku(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ku(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function cn(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    o = e.packageName,
    i = e.packageVersion,
    c = e.analyticsData,
    s = Ap(),
    l = s.createAnalyticsEvent,
    u = Bo(c),
    d = Bo(t),
    f = _.useCallback(
      function (p) {
        var h = l({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: o, packageVersion: i },
          }),
          v = Zm({ componentName: n, packageName: o, packageVersion: i }, u.current);
        h.context.push(v);
        var g = h.clone();
        (g && g.fire("atlaskit"), d.current(p, h));
      },
      [r, n, a, o, i, l, u, d],
    );
  return f;
}
function Ou(e, t) {
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
      ? Ou(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ou(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Su(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    o = e.packageVersion,
    i = e.analyticsData,
    c = Ap(),
    s = c.createAnalyticsEvent,
    l = Bo(i),
    u = Bo(t),
    d = _.useCallback(
      function () {
        var f = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          p = Qm({ componentName: n, packageName: a, packageVersion: o }, l.current);
        f.context.push(p);
        var h = f.clone();
        (h && h.fire("atlaskit"), u.current(f));
      },
      [r, n, a, o, s, l, u],
    );
  return d;
}
var Pr = "ASC",
  zo = "DESC",
  ey = "small",
  Uo = "large",
  Ip = 0.22;
const ty = 5;
function R(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, ty) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function ir(e, t, r) {
  return e ?? "var(--c-, )";
}
var ry = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  ny = _.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      o = e.testId,
      i = e.isLoading,
      c = te(e, ry);
    return _.createElement(
      "table",
      Z(
        {
          inert: i ? "" : void 0,
          style: {
            "--local-dynamic-table-hover-bg":
              "var(--ds-background-neutral-subtle-hovered, #091E420F)",
            "--local-dynamic-table-highlighted-bg": "var(--ds-background-selected, #E9F2FF)",
            "--local-dynamic-table-hover-highlighted-bg":
              "var(--ds-background-selected-hovered, #CCE0FF)",
            "--local-dynamic-table-row-focus-outline": "var(--ds-border-focused, #388BFF)",
          },
          ref: t,
        },
        c,
        {
          "data-testid": o && "".concat(o, "--table"),
          className: R([
            "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
            r && "_1kqm1n9t",
            n && "_179r187z",
          ]),
        },
      ),
      a,
    );
  }),
  ay = function (t) {
    var r = t.children;
    return _.createElement(
      "caption",
      { className: R(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  oy = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: R(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  iy = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: R(["_4t3i1jdh"]),
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
        "data-testid": n && "".concat(n, "--empty-view-container"),
        className: R([
          "_19pk1wug _2hwx1wug _otyr1wug _18u01wug _ca0q19bv _u5f319bv _n3td19bv _19bv19bv _1bsb1ssb _y3gn1h6o",
        ]),
      },
      r,
    );
  },
  cy = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function xu(e, t) {
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
function Eu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ly(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, jp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var Cu = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var o;
      if (r.cells[a] && ((o = r.cells[a]) === null || o === void 0 ? void 0 : o.key) === n) {
        var i;
        return (i = t[a]) === null || i === void 0 ? void 0 : i.key;
      }
    }
  },
  uy = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var o = a === Pr ? 1 : -1,
      i = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      c = Array.from(r);
    return c.sort(function (s, l) {
      var u = Cu(s.cells, t, n),
        d = Cu(l.cells, t, n);
      if (u === void 0 || d === void 0) return o;
      if (Ue(u) !== Ue(d)) {
        if (typeof u == "number") return -1;
        if (typeof d == "number") return 1;
        if (typeof u == "string") return -1;
        if (typeof d == "string") return 1;
      }
      return typeof u == "string" && typeof d == "string"
        ? o * i.compare(u, d)
        : (!u && u !== 0) || u < d
          ? -o
          : (!d && d !== 0) || u > d
            ? o
            : u === d
              ? 0
              : 1;
    });
  };
function dy(e) {
  var t = (function (r) {
    function n() {
      var a;
      be(this, n);
      for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
      return ((a = ly(this, n, [].concat(i))), C(a, "state", { pageRows: [] }), a);
    }
    return (
      Ze(n, r),
      _e(
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
                s = te(o, cy);
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
                l = o.sortKey,
                u = o.sortOrder,
                d = o.page,
                f = o.rowsPerPage,
                p = o.isTotalPagesControlledExternally;
              Fo(l, s);
              var h, v;
              return (
                p ? ((h = c), (v = c)) : ((h = uy(s, c, l, u) || []), (v = Cp(h, d, f))),
                Eu(Eu({}, i), {}, { pageRows: v })
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
var fy = "--local-dynamic-table-width",
  Dp = function (t) {
    var r = t.width;
    return typeof r < "u" ? C({}, fy, "".concat(r, "%")) : void 0;
  },
  vy = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  py = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      o = t.innerRef,
      i = te(t, vy);
    return _.createElement(
      "td",
      Z(
        {
          style: Dp({ width: r }),
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
  hy = ["isHighlighted", "children", "style", "testId", "className"],
  gy = _.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      o = e.testId,
      i = e.className,
      c = te(e, hy);
    return _.createElement(
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
  by = ["cells"],
  _y = ["content", "testId"],
  my = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      o = t.isFixedSize,
      i = t.isHighlighted,
      c = r.cells,
      s = te(r, by);
    return O.createElement(
      gy,
      Z(
        {},
        s,
        { isHighlighted: i },
        i ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(s.key)) },
      ),
      c.map(function (l, u) {
        var d = l.content,
          f = l.testId,
          p = te(l, _y),
          h = (n || { cells: [] }).cells[u] || {},
          v = h.shouldTruncate,
          g = h.width;
        return O.createElement(
          py,
          Z({ "data-testid": f || (a && "".concat(a, "--cell-").concat(u)) }, p, {
            isFixedSize: o,
            key: u,
            shouldTruncate: v,
            width: g,
          }),
          d,
        );
      }),
    );
  };
function yy(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, Tp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Tp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Tp = function () {
    return !!e;
  })();
}
var wy = (function (e) {
    function t() {
      return (be(this, t), yy(this, t, arguments));
    }
    return (
      Ze(t, e),
      _e(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.pageRows,
              o = n.head,
              i = n.isFixedSize,
              c = n.highlightedRowIndex,
              s = n.testId,
              l = n.forwardedRef;
            return O.createElement(
              "tbody",
              { "data-testid": s && "".concat(s, "--body"), ref: l },
              a.map(function (u, d) {
                return O.createElement(my, {
                  head: o,
                  isFixedSize: i,
                  key: u.key || d,
                  row: u,
                  isHighlighted:
                    u.isHighlighted ||
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
  ky = dy(
    O.forwardRef(function (e, t) {
      return O.createElement(wy, Z({}, e, { forwardedRef: t }));
    }),
  );
function Oy(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, Mp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Mp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Mp = function () {
    return !!e;
  })();
}
var Sy = (function (e) {
  function t(r) {
    var n;
    return (be(this, t), (n = Oy(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    Ze(t, e),
    _e(
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
const dc = _.createContext(null);
var Ru = "#FF5630",
  Pu = "#DE350B",
  Br = "#BF2600",
  Au = "#FFC400",
  Iu = "#FFAB00",
  zr = "#FF991F",
  xy = "#DEEBFF",
  ao = "#B3D4FF",
  ju = "#4C9AFF",
  Du = "#2684FF",
  Tu = "#0065FF",
  Wt = "#0052CC",
  Fs = "#0747A6",
  or = "#FFFFFF",
  Fe = "#F4F5F7",
  Ey = "#EBECF0",
  _r = "#A5ADBA",
  Cy = "#8993A4",
  Ry = "#6B778C",
  Py = "#505F79",
  ln = "#42526E",
  rt = "#253858",
  Ur = "#172B4D",
  Xn = "rgba(9, 30, 66, 0.04)",
  Mu = "rgba(9, 30, 66, 0.08)",
  ht = "#9FB0CC",
  Ay = "#8C9CB8",
  Hi = "#67758F",
  Zn = "#3B475C",
  Lu = "#313D52",
  Qn = "#1B2638",
  qr = "#0D1424",
  Iy = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function jy(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(ln, ")")
    : "var(--ds-icon-inverse, ".concat(or, ")");
}
var oo = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  Dy = typeof window > "u" ? _.useEffect : _.useLayoutEffect,
  fc = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "inherit" : n,
        o = t.delay,
        i = o === void 0 ? 0 : o,
        c = t.interactionName,
        s = t.label,
        l = t.size,
        u = l === void 0 ? "medium" : l,
        d = t.testId,
        f = typeof u == "number" ? u : Iy[u],
        p = "".concat(i, "ms"),
        h = jy(a),
        v = _.useContext(dc);
      return (
        Dy(
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
            className: R([oo.wrapperStyles, oo.rotateStyles]),
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
              className: R([oo.loadInStyles]),
            },
            O.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: R([oo.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function Nu(e, t) {
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
function Fu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Nu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var $u = "--contents-opacity",
  Ty = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: R(["_kqswh2mm"]) },
      r,
    );
  },
  My = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: R(["_tzy47hfw _lcxvglyw"]),
        style: Fu(Fu({}, C({}, $u, n)), {}, { "--_cnddr8": ir("var(".concat($u, ")")) }),
      },
      r,
    );
  },
  Ly = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function Ny(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, Lp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Lp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Lp = function () {
    return !!e;
  })();
}
var Np = (function (e) {
  function t() {
    return (be(this, t), Ny(this, t, arguments));
  }
  return (
    Ze(t, e),
    _e(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            a = n.children,
            o = n.isLoading,
            i = n.spinnerSize,
            c = n.contentsOpacity,
            s = n.testId,
            l = n.loadingLabel;
          return O.createElement(
            Ty,
            { testId: s },
            o ? O.createElement(My, { contentsOpacity: c, testId: s }, a) : a,
            o &&
              O.createElement(
                Ly,
                { testId: s },
                O.createElement(fc, {
                  size: i,
                  testId: s && "".concat(s, "--loadingSpinner"),
                  label: l,
                }),
              ),
          );
        },
      },
    ])
  );
})(O.Component);
C(Np, "defaultProps", {
  isLoading: !0,
  spinnerSize: Uo,
  contentsOpacity: Ip,
  loadingLabel: "Loading table",
});
var Fy = ["children", "testId"],
  $y = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = te(e, Fy);
    return _.createElement(
      "div",
      Z({}, a, { "data-testid": n, ref: t, className: R(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  By = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  zy = _.forwardRef(function (e, t) {
    var r = e.children;
    return _.createElement("div", { ref: t, className: R(["_kqswh2mm _152tidpf"]) }, r);
  });
function Uy(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, Fp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Fp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Fp = function () {
    return !!e;
  })();
}
var $p = (function (e) {
  function t() {
    var r;
    be(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = Uy(this, t, [].concat(a))),
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
          l = i.bottom;
        return l <= 0 ? !1 : s < c;
      }),
      C(r, "isFullyVerticallyVisible", function (i, c) {
        var s = i.top,
          l = i.bottom;
        return s >= 0 && l <= c;
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
          l = c.contentsOpacity;
        i &&
          i.style &&
          Ue(i.style) === "object" &&
          ((i.style.pointerEvents = s ? "none" : ""), (i.style.opacity = s ? l.toString() : ""));
      }),
      r
    );
  }
  return (
    Ze(t, e),
    _e(t, [
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
              l = c.getBoundingClientRect(),
              u = l.height,
              d = this.isVerticallyVisible(s, o),
              f = s.top,
              p = s.bottom,
              h = s.height;
            if (d) {
              var v = h >= u * 3;
              if (v && !this.isFullyVerticallyVisible(s, o)) {
                if (f >= 0) {
                  var g = o - f,
                    b = g / 2 + f - u / 2,
                    y = g < u * 3 ? f + u : b;
                  this.translateSpinner(c, y, !0);
                } else if (f < 0 && p > o) {
                  var w = o / 2 - u / 2;
                  this.translateSpinner(c, w, !0);
                } else {
                  var k = p / 2 - u / 2,
                    m = k < u ? k - (u - k) : k;
                  this.translateSpinner(c, m, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(l, o)) return;
            var S = (a = this.containerRef) === null || a === void 0 ? void 0 : a.current;
            if (S && typeof S.getBoundingClientRect == "function") {
              var E = S.getBoundingClientRect().top,
                A = (f - E) / 2;
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
            $y,
            { testId: c && "".concat(c, "--loading--container--advanced"), ref: this.containerRef },
            a,
            o &&
              O.createElement(
                By,
                { testId: c },
                O.createElement(
                  zy,
                  { ref: this.spinnerRef },
                  O.createElement(fc, {
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
C($p, "defaultProps", {
  isLoading: !0,
  spinnerSize: Uo,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Ip), ")"),
  loadingLabel: "Loading table",
});
function qy(e) {
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
    l = _.useCallback(function (u) {
      c.current || i(u);
    }, []);
  return [s, l];
}
var ea = {},
  ta = {};
function Bu(e, t, r, n, a, o, i) {
  try {
    var c = e[o](i),
      s = c.value;
  } catch (l) {
    return void r(l);
  }
  c.done ? t(s) : Promise.resolve(s).then(n, a);
}
function ge(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, a) {
      var o = e.apply(t, r);
      function i(s) {
        Bu(o, n, a, i, c, "next", s);
      }
      function c(s) {
        Bu(o, n, a, i, c, "throw", s);
      }
      i(void 0);
    });
  };
}
var Wi = { exports: {} },
  Ji = { exports: {} },
  zu;
function Bp() {
  return (
    zu ||
      ((zu = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ji)),
    Ji.exports
  );
}
var Yi = { exports: {} },
  Xi = { exports: {} },
  Uu;
function zp() {
  return (
    Uu ||
      ((Uu = 1),
      (function (e) {
        function t(r, n, a, o) {
          var i = Object.defineProperty;
          try {
            i({}, "", {});
          } catch {
            i = 0;
          }
          ((e.exports = t =
            function (s, l, u, d) {
              function f(p, h) {
                t(s, p, function (v) {
                  return this._invoke(p, h, v);
                });
              }
              l
                ? i
                  ? i(s, l, { value: u, enumerable: !d, configurable: !d, writable: !d })
                  : (s[l] = u)
                : (f("next", 0), f("throw", 1), f("return", 2));
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r, n, a, o));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Xi)),
    Xi.exports
  );
}
var qu;
function Up() {
  return (
    qu ||
      ((qu = 1),
      (function (e) {
        var t = zp();
        function r() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var n,
            a,
            o = typeof Symbol == "function" ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.toStringTag || "@@toStringTag";
          function s(g, b, y, w) {
            var k = b && b.prototype instanceof u ? b : u,
              m = Object.create(k.prototype);
            return (
              t(
                m,
                "_invoke",
                (function (S, E, A) {
                  var D,
                    P,
                    M,
                    z = 0,
                    $ = A || [],
                    q = !1,
                    U = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: V,
                      f: V.bind(n, 4),
                      d: function (H, F) {
                        return ((D = H), (P = 0), (M = n), (U.n = F), l);
                      },
                    };
                  function V(G, H) {
                    for (P = G, M = H, a = 0; !q && z && !F && a < $.length; a++) {
                      var F,
                        j = $[a],
                        me = U.p,
                        se = j[2];
                      G > 3
                        ? (F = se === H) &&
                          ((M = j[(P = j[4]) ? 5 : ((P = 3), 3)]), (j[4] = j[5] = n))
                        : j[0] <= me &&
                          ((F = G < 2 && me < j[1])
                            ? ((P = 0), (U.v = H), (U.n = j[1]))
                            : me < se &&
                              (F = G < 3 || j[0] > H || H > se) &&
                              ((j[4] = G), (j[5] = H), (U.n = se), (P = 0)));
                    }
                    if (F || G > 1) return l;
                    throw ((q = !0), H);
                  }
                  return function (G, H, F) {
                    if (z > 1) throw TypeError("Generator is already running");
                    for (q && H === 1 && V(H, F), P = H, M = F; (a = P < 2 ? n : M) || !q; ) {
                      D || (P ? (P < 3 ? (P > 1 && (U.n = -1), V(P, M)) : (U.n = M)) : (U.v = M));
                      try {
                        if (((z = 2), D)) {
                          if ((P || (G = "next"), (a = D[G]))) {
                            if (!(a = a.call(D, M)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((M = a.value), P < 2 && (P = 0));
                          } else
                            (P === 1 && (a = D.return) && a.call(D),
                              P < 2 &&
                                ((M = TypeError(
                                  "The iterator does not provide a '" + G + "' method",
                                )),
                                (P = 1)));
                          D = n;
                        } else if ((a = (q = U.n < 0) ? M : S.call(E, U)) !== l) break;
                      } catch (j) {
                        ((D = n), (P = 1), (M = j));
                      } finally {
                        z = 1;
                      }
                    }
                    return { value: a, done: q };
                  };
                })(g, y, w),
                !0,
              ),
              m
            );
          }
          var l = {};
          function u() {}
          function d() {}
          function f() {}
          a = Object.getPrototypeOf;
          var p = [][i]
              ? a(a([][i]()))
              : (t((a = {}), i, function () {
                  return this;
                }),
                a),
            h = (f.prototype = u.prototype = Object.create(p));
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
      })(Yi)),
    Yi.exports
  );
}
var Zi = { exports: {} },
  Qi = { exports: {} },
  es = { exports: {} },
  Vu;
function qp() {
  return (
    Vu ||
      ((Vu = 1),
      (function (e) {
        var t = Bp(),
          r = zp();
        function n(a, o) {
          function i(s, l, u, d) {
            try {
              var f = a[s](l),
                p = f.value;
              return p instanceof t
                ? o.resolve(p.v).then(
                    function (h) {
                      i("next", h, u, d);
                    },
                    function (h) {
                      i("throw", h, u, d);
                    },
                  )
                : o.resolve(p).then(
                    function (h) {
                      ((f.value = h), u(f));
                    },
                    function (h) {
                      return i("throw", h, u, d);
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
              function (s, l, u) {
                function d() {
                  return new o(function (f, p) {
                    i(s, u, f, p);
                  });
                }
                return (c = c ? c.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(es)),
    es.exports
  );
}
var Gu;
function Vp() {
  return (
    Gu ||
      ((Gu = 1),
      (function (e) {
        var t = Up(),
          r = qp();
        function n(a, o, i, c, s) {
          return new r(t().w(a, o, i, c), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Qi)),
    Qi.exports
  );
}
var Ku;
function Vy() {
  return (
    Ku ||
      ((Ku = 1),
      (function (e) {
        var t = Vp();
        function r(n, a, o, i, c) {
          var s = t(n, a, o, i, c);
          return s.next().then(function (l) {
            return l.done ? l.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Zi)),
    Zi.exports
  );
}
var ts = { exports: {} },
  Hu;
function Gy() {
  return (
    Hu ||
      ((Hu = 1),
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
      })(ts)),
    ts.exports
  );
}
var rs = { exports: {} },
  ns = { exports: {} },
  Wu;
function Ky() {
  return (
    Wu ||
      ((Wu = 1),
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
      })(ns)),
    ns.exports
  );
}
var Ju;
function Hy() {
  return (
    Ju ||
      ((Ju = 1),
      (function (e) {
        var t = Ky().default;
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
      })(rs)),
    rs.exports
  );
}
var Yu;
function Wy() {
  return (
    Yu ||
      ((Yu = 1),
      (function (e) {
        var t = Bp(),
          r = Up(),
          n = Vy(),
          a = Vp(),
          o = qp(),
          i = Gy(),
          c = Hy();
        function s() {
          var l = r(),
            u = l.m(s),
            d = (Object.getPrototypeOf ? Object.getPrototypeOf(u) : u.__proto__).constructor;
          function f(v) {
            var g = typeof v == "function" && v.constructor;
            return !!g && (g === d || (g.displayName || g.name) === "GeneratorFunction");
          }
          var p = { throw: 1, return: 2, break: 3, continue: 3 };
          function h(v) {
            var g, b;
            return function (y) {
              (g ||
                ((g = {
                  stop: function () {
                    return b(y.a, 2);
                  },
                  catch: function () {
                    return y.v;
                  },
                  abrupt: function (k, m) {
                    return b(y.a, p[k], m);
                  },
                  delegateYield: function (k, m, S) {
                    return ((g.resultName = m), b(y.d, c(k), S));
                  },
                  finish: function (k) {
                    return b(y.f, k);
                  },
                }),
                (b = function (k, m, S) {
                  ((y.p = g.prev), (y.n = g.next));
                  try {
                    return k(m, S);
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
                wrap: function (b, y, w, k) {
                  return l.w(h(b), y, w, k && k.reverse());
                },
                isGeneratorFunction: f,
                mark: l.m,
                awrap: function (b, y) {
                  return new t(b, y);
                },
                AsyncIterator: o,
                async: function (b, y, w, k, m) {
                  return (f(y) ? a : n)(h(b), y, w, k, m);
                },
                keys: i,
                values: c,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Wi)),
    Wi.exports
  );
}
var as, Xu;
function Jy() {
  if (Xu) return as;
  Xu = 1;
  var e = Wy()();
  as = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return as;
}
var Yy = Jy();
const B = dr(Yy);
var mr = {},
  Vr = {},
  io = {},
  ra = {},
  Zu;
function Xy() {
  if (Zu) return ra;
  ((Zu = 1),
    Object.defineProperty(ra, "__esModule", { value: !0 }),
    (ra.V1InitializeContainer = void 0));
  const e = Mt();
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
  return ((ra.V1InitializeContainer = t), ra);
}
var na = {},
  Qu;
function Zy() {
  if (Qu) return na;
  ((Qu = 1),
    Object.defineProperty(na, "__esModule", { value: !0 }),
    (na.V2InitializeContainer = void 0));
  const e = Mt();
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
      var a, o, i, c, s, l;
      const u = this._getResultFromLookup(this._values.layer_configs, n);
      return u
        ? {
            name: n,
            value: (a = this._values.values[u.v]) !== null && a !== void 0 ? a : {},
            rule_id: u.r,
            secondary_exposures: (o = u.s) !== null && o !== void 0 ? o : [],
            is_user_in_experiment: u.ue === !0,
            group_name: (i = u.gn) !== null && i !== void 0 ? i : void 0,
            is_experiment_active: u.ea === !0,
            group: u.r,
            is_device_based: u.i === "stableID",
            allocated_experiment_name: (c = u.ae) !== null && c !== void 0 ? c : "",
            explicit_parameters: (s = u.ep) !== null && s !== void 0 ? s : [],
            undelegated_secondary_exposures: (l = u.us) !== null && l !== void 0 ? l : [],
            parameter_rule_ids: u.pr,
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
  return ((na.V2InitializeContainer = t), na);
}
var ed;
function Qy() {
  if (ed) return io;
  ((ed = 1), Object.defineProperty(io, "__esModule", { value: !0 }));
  const e = Mt(),
    t = Xy(),
    r = Zy();
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
      const l = (0, e._typedJsonParse)(o.data, "has_updates", "EvaluationResponse");
      return l == null
        ? !1
        : ((this._source = o.source),
          l?.has_updates !== !0 ||
            ((c = l.time) !== null && c !== void 0 ? c : 0) < this._lcut ||
            ((this._rawValues = o.data),
            (this._lcut = l.time),
            (this._receivedAt = o.receivedAt),
            l.response_format === "init-v2"
              ? (this._values = new r.V2InitializeContainer(l))
              : (this._values = new t.V1InitializeContainer(l)),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(o.source, l)),
            o.source && l.user && this._setWarningState(i, l),
            e.SDKFlags.setFlags(this._sdkKey, (s = l.sdk_flags) !== null && s !== void 0 ? s : {})),
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
      const l = e.StableID.get(this._sdkKey);
      if (
        ((c = o.customIDs) === null || c === void 0 ? void 0 : c.stableID) !== l &&
        ((!((s = o.customIDs) === null || s === void 0) && s.stableID) || l)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in i) {
        const u = i.user,
          d = Object.assign(Object.assign({}, o), {
            analyticsOnlyMetadata: void 0,
            privateAttributes: void 0,
          });
        (0, e._getFullUserHash)(d) !== (0, e._getFullUserHash)(u) &&
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
      let l = s.reason;
      const u = (i = s.warnings) !== null && i !== void 0 ? i : [];
      (this._source === "Bootstrap" && u.length > 0 && (l = l + u[0]),
        l !== "Uninitialized" &&
          l !== "NoValues" &&
          (l = `${l}:${o ? "Unrecognized" : "Recognized"}`));
      const d =
        this._source === "Bootstrap" && (c = this._bootstrapMetadata) !== null && c !== void 0
          ? c
          : void 0;
      return (d && (s.bootstrapMetadata = d), Object.assign(Object.assign({}, s), { reason: l }));
    }
  };
  return ((io.default = n), io);
}
var Gr = {},
  aa = {},
  td;
function e0() {
  if (td) return aa;
  ((td = 1),
    Object.defineProperty(aa, "__esModule", { value: !0 }),
    (aa._resolveDeltasResponse = void 0));
  const e = Mt(),
    t = 2;
  function r(i, c) {
    const s = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const l = n(i, s),
      u = a(l),
      d = (0, e._DJB2Object)(
        {
          feature_gates: u.feature_gates,
          dynamic_configs: u.dynamic_configs,
          layer_configs: u.layer_configs,
        },
        t,
      );
    return d === s.checksumV2
      ? JSON.stringify(u)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: u,
          badFullResponse: s.deltas_full_response,
        };
  }
  aa._resolveDeltasResponse = r;
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
  return aa;
}
var rd;
function Gp() {
  if (rd) return Gr;
  rd = 1;
  var e =
    (Gr && Gr.__awaiter) ||
    function (a, o, i, c) {
      function s(l) {
        return l instanceof i
          ? l
          : new i(function (u) {
              u(l);
            });
      }
      return new (i || (i = Promise))(function (l, u) {
        function d(h) {
          try {
            p(c.next(h));
          } catch (v) {
            u(v);
          }
        }
        function f(h) {
          try {
            p(c.throw(h));
          } catch (v) {
            u(v);
          }
        }
        function p(h) {
          h.done ? l(h.value) : s(h.value).then(d, f);
        }
        p((c = c.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(Gr, "__esModule", { value: !0 });
  const t = Mt(),
    r = e0();
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
    fetchEvaluations(o, i, c, s, l) {
      return e(this, void 0, void 0, function* () {
        var u, d, f, p, h, v;
        const g = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
        let b = {
          user: s,
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
          const y =
            g?.hash_used !==
            ((v =
              (h = (p = this._option) === null || p === void 0 ? void 0 : p.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && v !== void 0
              ? v
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: l && !y ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && l ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: y ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(o, g, b, c);
      });
    }
    _fetchEvaluations(o, i, c, s) {
      return e(this, void 0, void 0, function* () {
        var l, u;
        const d = yield this.post({
          sdkKey: o,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: s,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (l = d?.body) !== null && l !== void 0 ? l : null;
        if (
          i?.has_updates !== !0 ||
          ((u = d.body) === null || u === void 0 ? void 0 : u.includes('"is_delta":true')) !== !0 ||
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
  return ((Gr.default = n), Gr);
}
var oa = {},
  nd;
function t0() {
  if (nd) return oa;
  ((nd = 1),
    Object.defineProperty(oa, "__esModule", { value: !0 }),
    (oa._makeParamStoreGetter = void 0));
  const e = Mt(),
    t = { disableExposureLog: !0 };
  function r(u) {
    return u == null || u.disableExposureLog === !1;
  }
  function n(u, d) {
    return d != null && !(0, e._isTypeMatch)(u, d);
  }
  function a(u, d) {
    return u.value;
  }
  function o(u, d, f) {
    return u.getFeatureGate(d.gate_name, r(f) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function i(u, d, f, p) {
    const v = u.getDynamicConfig(d.config_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function c(u, d, f, p) {
    const v = u.getExperiment(d.experiment_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function s(u, d, f, p) {
    const v = u.getLayer(d.layer_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function l(u, d, f) {
    return (p, h) => {
      if (d == null) return h;
      const v = d[p];
      if (v == null || (h != null && (0, e._typeOf)(h) !== v.param_type)) return h;
      switch (v.ref_type) {
        case "static":
          return a(v);
        case "gate":
          return o(u, v, f);
        case "dynamic_config":
          return i(u, v, h, f);
        case "experiment":
          return c(u, v, h, f);
        case "layer":
          return s(u, v, h, f);
        default:
          return h;
      }
    };
  }
  return ((oa._makeParamStoreGetter = l), oa);
}
var yr = {},
  ad;
function r0() {
  if (ad) return yr;
  ad = 1;
  var e =
    (yr && yr.__awaiter) ||
    function (a, o, i, c) {
      function s(l) {
        return l instanceof i
          ? l
          : new i(function (u) {
              u(l);
            });
      }
      return new (i || (i = Promise))(function (l, u) {
        function d(h) {
          try {
            p(c.next(h));
          } catch (v) {
            u(v);
          }
        }
        function f(h) {
          try {
            p(c.throw(h));
          } catch (v) {
            u(v);
          }
        }
        function p(h) {
          h.done ? l(h.value) : s(h.value).then(d, f);
        }
        p((c = c.apply(a, o || [])).next());
      });
    };
  (Object.defineProperty(yr, "__esModule", { value: !0 }),
    (yr.StatsigEvaluationsDataAdapter = void 0));
  const t = Mt(),
    r = Gp();
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
        var l;
        const u = yield (l = this._network) === null || l === void 0
          ? void 0
          : l.fetchEvaluations(this._getSdkKey(), o, c?.priority, i, s);
        return u ?? null;
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
  return ((yr.StatsigEvaluationsDataAdapter = n), yr);
}
var od;
function n0() {
  if (od) return Vr;
  od = 1;
  var e =
    (Vr && Vr.__awaiter) ||
    function (c, s, l, u) {
      function d(f) {
        return f instanceof l
          ? f
          : new l(function (p) {
              p(f);
            });
      }
      return new (l || (l = Promise))(function (f, p) {
        function h(b) {
          try {
            g(u.next(b));
          } catch (y) {
            p(y);
          }
        }
        function v(b) {
          try {
            g(u.throw(b));
          } catch (y) {
            p(y);
          }
        }
        function g(b) {
          b.done ? f(b.value) : d(b.value).then(h, v);
        }
        g((u = u.apply(c, s || [])).next());
      });
    };
  Object.defineProperty(Vr, "__esModule", { value: !0 });
  const t = Mt(),
    r = Qy(),
    n = Gp(),
    a = t0(),
    o = r0();
  let i = class $s extends t.StatsigClientBase {
    static instance(s) {
      const l = (0, t._getStatsigGlobal)().instance(s);
      return l instanceof $s
        ? l
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new $s(s ?? "", {}));
    }
    constructor(s, l, u = null) {
      var d, f;
      t.SDKType._setClientType(s, "javascript-client");
      const p = new n.default(u, (v) => {
        this.$emt(v);
      });
      (super(
        s,
        (d = u?.dataAdapter) !== null && d !== void 0 ? d : new o.StatsigEvaluationsDataAdapter(),
        p,
        u,
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
        (this._user = this._configureUser(l, u)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (f = u?.plugins) !== null && f !== void 0 ? f : [];
      for (const v of h) v.bind(this);
    }
    initializeSync(s) {
      var l;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : []),
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
    updateUserSync(s, l) {
      const u = performance.now();
      try {
        return this._updateUserSyncImpl(s, l, u);
      } catch (d) {
        const f = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(f, u);
      }
    }
    _updateUserSyncImpl(s, l, u) {
      var d;
      const f = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
      const p = this.dataAdapter.getDataSync(this._user);
      (p == null && f.push("NoCachedValues"),
        this._store.setValues(p, this._user),
        this._finalizeUpdate(p));
      const h = l?.disableBackgroundCacheRefresh;
      return h === !0 || (h == null && p?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          )
        : (this._runPostUpdate(p ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          ));
    }
    updateUserAsync(s, l) {
      return e(this, void 0, void 0, function* () {
        const u = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, l);
        } catch (d) {
          const f = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(f, u);
        }
      });
    }
    _updateUserAsyncImpl(s, l) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(s);
        const u = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(u);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, u, l)),
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
    checkGate(s, l) {
      return this.getFeatureGate(s, l).value;
    }
    logEvent(s, l, u) {
      const d = typeof s == "string" ? { eventName: s, value: l, metadata: u } : s;
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
    _createErrorUpdateDetails(s, l) {
      var u;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - l,
        s,
        null,
        [...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : [])],
      );
    }
    _finalizeUpdate(s) {
      (this._store.finalize(), this._setStatus("Ready", s));
    }
    _runPostUpdate(s, l) {
      this.dataAdapter.getDataAsync(s, l, { priority: "low" }).catch((u) => {
        t.Log.error("An error occurred after update.", u);
      });
    }
    _resetForUser(s) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(s, this._options)));
    }
    _configureUser(s, l) {
      var u, d, f;
      const p = (0, t._normalizeUser)(s, l),
        h = (u = p.customIDs) === null || u === void 0 ? void 0 : u.stableID;
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
    _getFeatureGateImpl(s, l) {
      var u, d;
      const { result: f, details: p } = this._store.getGate(s),
        h = (0, t._makeFeatureGate)(s, p, f),
        v =
          (d = (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, h, this._user, l),
        g = v ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          l,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(s, l) {
      var u, d;
      const { result: f, details: p } = this._store.getConfig(s),
        h = (0, t._makeDynamicConfig)(s, p, f),
        v =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(u, h, this._user, l),
        g = v ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          l,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(s, l) {
      var u, d, f, p;
      const { result: h, details: v } = this._store.getConfig(s),
        g = (0, t._makeExperiment)(s, v, h);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (u = g.__evaluation) === null || u === void 0 ? void 0 : u.secondary_exposures) !==
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
            : p.call(f, g, this._user, l),
        y = b ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, y, this._store.getExposureMapping()),
          l,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: y }),
        y
      );
    }
    _getConfigListImpl() {
      return this._store.getConfigList();
    }
    _getLayerImpl(s, l) {
      var u, d, f;
      const { result: p, details: h } = this._store.getLayer(s),
        v = (0, t._makeLayer)(s, h, p),
        g =
          (d =
            (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, v, this._user, l);
      l?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const b = (0, t._mergeOverride)(
        v,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : v.__value,
        (y) => {
          l?.disableExposureLog ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                y,
                this._store.getExposureMapping(),
              ),
              l,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: b }), b);
    }
    _getParameterStoreImpl(s, l) {
      var u, d;
      const { result: f, details: p } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const h = {
          name: s,
          details: p,
          __configuration: f,
          get: (0, a._makeParamStoreGetter)(this, f, l),
        },
        v =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(u, h, l);
      return (
        v != null &&
          ((h.__configuration = v.config),
          (h.details = v.details),
          (h.get = (0, a._makeParamStoreGetter)(this, v.config, l))),
        h
      );
    }
  };
  return ((Vr.default = i), Vr);
}
var id;
function a0() {
  return (
    id ||
      ((id = 1),
      (function (e) {
        var t =
            (mr && mr.__createBinding) ||
            (Object.create
              ? function (i, c, s, l) {
                  l === void 0 && (l = s);
                  var u = Object.getOwnPropertyDescriptor(c, s);
                  ((!u || ("get" in u ? !c.__esModule : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return c[s];
                      },
                    }),
                    Object.defineProperty(i, l, u));
                }
              : function (i, c, s, l) {
                  (l === void 0 && (l = s), (i[l] = c[s]));
                }),
          r =
            (mr && mr.__exportStar) ||
            function (i, c) {
              for (var s in i)
                s !== "default" && !Object.prototype.hasOwnProperty.call(c, s) && t(c, i, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Mt(),
          a = n0();
        ((e.StatsigClient = a.default), r(Mt(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(mr)),
    mr
  );
}
var gt = a0(),
  os = { exports: {} },
  sd;
function o0() {
  return (
    sd ||
      ((sd = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function a(s, l, u) {
          ((this.fn = s), (this.context = l), (this.once = u || !1));
        }
        function o(s, l, u, d, f) {
          if (typeof u != "function") throw new TypeError("The listener must be a function");
          var p = new a(u, d || s, f),
            h = r ? r + l : l;
          return (
            s._events[h]
              ? s._events[h].fn
                ? (s._events[h] = [s._events[h], p])
                : s._events[h].push(p)
              : ((s._events[h] = p), s._eventsCount++),
            s
          );
        }
        function i(s, l) {
          --s._eventsCount === 0 ? (s._events = new n()) : delete s._events[l];
        }
        function c() {
          ((this._events = new n()), (this._eventsCount = 0));
        }
        ((c.prototype.eventNames = function () {
          var l = [],
            u,
            d;
          if (this._eventsCount === 0) return l;
          for (d in (u = this._events)) t.call(u, d) && l.push(r ? d.slice(1) : d);
          return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(u)) : l;
        }),
          (c.prototype.listeners = function (l) {
            var u = r ? r + l : l,
              d = this._events[u];
            if (!d) return [];
            if (d.fn) return [d.fn];
            for (var f = 0, p = d.length, h = new Array(p); f < p; f++) h[f] = d[f].fn;
            return h;
          }),
          (c.prototype.listenerCount = function (l) {
            var u = r ? r + l : l,
              d = this._events[u];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (c.prototype.emit = function (l, u, d, f, p, h) {
            var v = r ? r + l : l;
            if (!this._events[v]) return !1;
            var g = this._events[v],
              b = arguments.length,
              y,
              w;
            if (g.fn) {
              switch ((g.once && this.removeListener(l, g.fn, void 0, !0), b)) {
                case 1:
                  return (g.fn.call(g.context), !0);
                case 2:
                  return (g.fn.call(g.context, u), !0);
                case 3:
                  return (g.fn.call(g.context, u, d), !0);
                case 4:
                  return (g.fn.call(g.context, u, d, f), !0);
                case 5:
                  return (g.fn.call(g.context, u, d, f, p), !0);
                case 6:
                  return (g.fn.call(g.context, u, d, f, p, h), !0);
              }
              for (w = 1, y = new Array(b - 1); w < b; w++) y[w - 1] = arguments[w];
              g.fn.apply(g.context, y);
            } else {
              var k = g.length,
                m;
              for (w = 0; w < k; w++)
                switch ((g[w].once && this.removeListener(l, g[w].fn, void 0, !0), b)) {
                  case 1:
                    g[w].fn.call(g[w].context);
                    break;
                  case 2:
                    g[w].fn.call(g[w].context, u);
                    break;
                  case 3:
                    g[w].fn.call(g[w].context, u, d);
                    break;
                  case 4:
                    g[w].fn.call(g[w].context, u, d, f);
                    break;
                  default:
                    if (!y) for (m = 1, y = new Array(b - 1); m < b; m++) y[m - 1] = arguments[m];
                    g[w].fn.apply(g[w].context, y);
                }
            }
            return !0;
          }),
          (c.prototype.on = function (l, u, d) {
            return o(this, l, u, d, !1);
          }),
          (c.prototype.once = function (l, u, d) {
            return o(this, l, u, d, !0);
          }),
          (c.prototype.removeListener = function (l, u, d, f) {
            var p = r ? r + l : l;
            if (!this._events[p]) return this;
            if (!u) return (i(this, p), this);
            var h = this._events[p];
            if (h.fn) h.fn === u && (!f || h.once) && (!d || h.context === d) && i(this, p);
            else {
              for (var v = 0, g = [], b = h.length; v < b; v++)
                (h[v].fn !== u || (f && !h[v].once) || (d && h[v].context !== d)) && g.push(h[v]);
              g.length ? (this._events[p] = g.length === 1 ? g[0] : g) : i(this, p);
            }
            return this;
          }),
          (c.prototype.removeAllListeners = function (l) {
            var u;
            return (
              l
                ? ((u = r ? r + l : l), this._events[u] && i(this, u))
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (c.prototype.off = c.prototype.removeListener),
          (c.prototype.addListener = c.prototype.on),
          (c.prefixed = r),
          (c.EventEmitter = c),
          (e.exports = c));
      })(os)),
    os.exports
  );
}
var i0 = o0();
const s0 = dr(i0);
function cd(e, t) {
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
function nr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : cd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var so = "@all-features",
  c0 = (function () {
    function e() {
      (be(this, e), C(this, "eventToValue", new Map()), (this.emitter = new s0()));
    }
    return _e(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, o) {
          var i = this,
            c = a(r, nr(nr({}, o), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, c);
          var s = function () {
            var u = a(r, nr(nr({}, o), {}, { fireGateExposure: !1 })),
              d = i.eventToValue.get(n);
            d !== u && (i.eventToValue.set(n, u), n(u));
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
            l = "".concat(r, ".").concat(n),
            u = i(r, n, a, nr(nr({}, c), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(o) === void 0 && this.eventToValue.set(o, u);
          var d = function () {
            var p = i(r, n, a, nr(nr({}, c), {}, { fireExperimentExposure: !1 })),
              h = s.eventToValue.get(o);
            h !== p && (s.eventToValue.set(o, p), o(p));
          };
          return (
            this.emitter.on(l, d),
            function () {
              s.emitter.off(l, d);
            }
          );
        },
      },
      {
        key: "onAnyUpdated",
        value: function (r) {
          var n = this;
          return (
            this.emitter.on(so, r),
            function () {
              n.emitter.off(so, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(so),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== so;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  l0 = "fedramp-moderate";
function u0() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === l0;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var vc = (function (e) {
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
  wa = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  Na = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  d0 = [
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
function Bs(e) {
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
var co = function (t) {
    return Bs({ perimeter: u0() ? Na.FEDRAMP_MODERATE : Na.COMMERCIAL }, t);
  },
  ia = function (t, r) {
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
        l = J(a[i], 2),
        u = l[1];
      if (s !== u) return !1;
    }
    return !0;
  },
  ud = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  f0 = function (t) {
    var r = t.api,
      n = t.disableCurrentPageLogging,
      a = t.loggingIntervalMillis,
      o = t.loggingBufferMaxSize,
      i = t.localMode,
      c = t.eventLoggingApi,
      s = t.eventLoggingApiForRetries,
      l = t.disableLocalStorage,
      u = t.ignoreWindowUndefined,
      d = t.disableAllLogging;
    (t.initTimeoutMs,
      t.disableNetworkKeepalive,
      t.overrideStableID,
      t.disableErrorLogging,
      t.disableAutoMetricsLogging);
    var f = te(t, d0);
    return Bs(
      Bs({}, f),
      {},
      {
        networkConfig: {
          api: r,
          logEventUrl: c ? c + "rgstr" : void 0,
          logEventFallbackUrls: s ? [s] : void 0,
          preventAllNetworkTraffic: i || (!u && typeof window > "u"),
        },
        includeCurrentPageUrlWithEvents: !n,
        loggingIntervalMs: a,
        loggingBufferMaxSize: o,
        disableStorage: l === void 0 ? i : l,
        disableLogging: d === void 0 ? i : d,
      },
    );
  },
  v0 = Object.entries(vc).map(function (e) {
    var t = J(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  Kp = function (t) {
    var r,
      n,
      a,
      o = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = v0.find(function (i) {
            var c = J(i, 1),
              s = c[0];
            return o.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : vc.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  zs = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  dd = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (be(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = o),
        (this._allocatedExperimentName = i),
        (this._evaluationDetails = a),
        (this._onDefaultValueFallback = c));
    }
    return _e(
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
              var l;
              return a(i)
                ? (this.fireExposure(r), i)
                : ((l = this._onDefaultValueFallback) === null ||
                    l === void 0 ||
                    l.call(this, this, r, c, s),
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
                Kp(r.details),
                zs(
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
  fd = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        s = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        l = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (be(this, e),
        (this._logParameterFunction = o),
        (this._name = t),
        (this._value = JSON.parse(JSON.stringify(r ?? {}))),
        (this._ruleID = n ?? ""),
        (this._evaluationDetails = a),
        (this._secondaryExposures = i),
        (this._undelegatedSecondaryExposures = c),
        (this._allocatedExperimentName = s),
        (this._explicitParameters = l));
    }
    return _e(
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
              l = new e(
                r.name,
                r.__value,
                r.ruleID,
                Kp(r.details),
                function (u, d) {
                  return r.get(d);
                },
                zs(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                zs(
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
            return l;
          },
        },
      ],
    );
  })(),
  rn = "0.0.0-development";
function p0(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Hp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Hp = function () {
    return !!e;
  })();
}
function h0(e, t, r) {
  if (Hp()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && La(a, r.prototype), a);
}
function Us(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Us = function (n) {
      if (n === null || !p0(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return h0(n, arguments, X(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        La(a, n)
      );
    }),
    Us(e)
  );
}
function g0(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, Wp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var vd = (function (e) {
  function t(r) {
    return (be(this, t), g0(this, t, [r]));
  }
  return (Ze(t, e), _e(t));
})(Us(Error));
function pd(e, t) {
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
function b0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var _0 = 5e3,
  m0 = "https://api.atlassian.com/flags",
  y0 = "https://api.stg.atlassian.com/flags",
  w0 = "https://api.dev.atlassian.com/flags",
  k0 = "https://api.stg.atlassian-us-gov-mod.com/flags",
  O0 = "https://api.atlassian-us-gov-mod.com/flags",
  S0 = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  x0 = "oasis-stg.com/flags",
  E0 = "atlassian-isolated.net/flags",
  C0 = "/gateway/api/flags",
  is = (function () {
    function e() {
      be(this, e);
    }
    return _e(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = ge(
            B.mark(function n(a) {
              var o, i;
              return B.wrap(
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
          var t = ge(
            B.mark(function n(a, o, i) {
              var c;
              return B.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          (c = { identifiers: o, customAttributes: i, targetApp: a.targetApp }),
                          (l.prev = 1),
                          (l.next = 4),
                          this.fetchRequest("/api/v2/frontend/experimentValues", "POST", a, c)
                        );
                      case 4:
                        return l.abrupt("return", l.sent);
                      case 7:
                        if (((l.prev = 7), (l.t0 = l.catch(1)), !(l.t0 instanceof Error))) {
                          l.next = 11;
                          break;
                        }
                        throw l.t0;
                      case 11:
                        throw Error("Failed to retrieve experiment values");
                      case 12:
                      case "end":
                        return l.stop();
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
          var t = ge(
            B.mark(function n(a) {
              var o;
              return B.wrap(function (c) {
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
                        new vd(
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
                      throw new vd("Unexpected 204 response");
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
          var t = ge(
            B.mark(function n(a) {
              var o;
              return B.wrap(function (c) {
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
          if (n) return C0;
          if (a === Na.FEDRAMP_MODERATE)
            switch (r) {
              case wa.Production:
                return O0;
              case wa.Staging:
                return k0;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === Na.COMMERCIAL)
            switch (r) {
              case wa.Development:
                return w0;
              case wa.Staging:
                var i = this.getApiUrl(o);
                return i !== null ? i : y0;
              default:
                var c = this.getApiUrl(o);
                return c !== null ? c : m0;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = ge(
            B.mark(function n(a, o, i, c) {
              var s, l, u, d, f;
              return B.wrap(
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
                          (l = i.fetchTimeoutMs || _0),
                          AbortSignal.timeout
                            ? (u = AbortSignal.timeout(l))
                            : AbortController &&
                              ((d = new AbortController()),
                              (u = d.signal),
                              setTimeout(function () {
                                return d.abort();
                              }, l)),
                          (h.next = 5),
                          fetch(
                            "".concat(s).concat(a),
                            b0(
                              {
                                method: o,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": rn,
                                  "X-API-KEY": i.apiKey,
                                },
                                signal: u,
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
          if (n === void 0) return r ? S0.replace("%s", r) : null;
          var a = n.protocol,
            o = n.hostname,
            i = o.match(/([^.]+)\.oasis-stg\.com$/);
          if (i) return "".concat(a, "//api.").concat(i[1], ".").concat(x0);
          var c = o.match(/([^.]+)\.atlassian-isolated\.net$/);
          return c ? "".concat(a, "//api.").concat(c[1], ".").concat(E0) : null;
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
function sa(e) {
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
function R0(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, Jp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Jp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Jp = function () {
    return !!e;
  })();
}
function P0(e, t, r, n) {
  var a = $o(X(e.prototype), t, r);
  return typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var A0 = (function (e) {
  function t() {
    var r;
    return (
      be(this, t),
      (r = R0(this, t, ["NoFetchDataAdapter", "nofetch"])),
      C(r, "bootstrapResult", null),
      r
    );
  }
  return (
    Ze(t, e),
    _e(t, [
      {
        key: "setBootstrapData",
        value: function (n) {
          this.bootstrapResult = n
            ? {
                source: "Bootstrap",
                data: JSON.stringify(n),
                receivedAt: Date.now(),
                stableID: gt.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = ge(
            B.mark(function a(o, i) {
              return B.wrap(function (s) {
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
          var r = ge(
            B.mark(function a(o, i, c) {
              return B.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return l.abrupt(
                          "return",
                          this.bootstrapResult &&
                            sa(
                              sa({}, this.bootstrapResult),
                              {},
                              { fullUserHash: gt._getFullUserHash(i) },
                            ),
                        );
                      case 1:
                      case "end":
                        return l.stop();
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
            sa(sa({}, this.bootstrapResult), {}, { fullUserHash: gt._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = ge(
            B.mark(function a(o, i, c) {
              return B.wrap(function (l) {
                for (;;)
                  switch ((l.prev = l.next)) {
                    case 0:
                      return l.abrupt("return", null);
                    case 1:
                    case "end":
                      return l.stop();
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
          var a = gt._getStorageKey(this._getSdkKey(), n);
          return "".concat(gt.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(a);
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
          P0(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = sa({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(gt.DataAdapterCore);
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
function $e(e) {
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
function I0(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = j0(e)) || t) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (l) {
          throw l;
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
      var l = r.next();
      return ((i = l.done), l);
    },
    e: function (l) {
      ((c = !0), (o = l));
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
function j0(e, t) {
  if (e) {
    if (typeof e == "string") return bd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? bd(e, t)
          : void 0
    );
  }
}
function bd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var ss = "LocalOverride:Recognized",
  D0 = "STATSIG_OVERRIDES",
  _d = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Kr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  nt = function (t, r) {
    return r + ":" + t;
  },
  T0 = (function () {
    function e(t) {
      (be(this, e),
        (this._overrides = Kr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return _e(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Kr();
          } catch {
            return Kr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Kr(), n = arguments.length, a = new Array(n), o = 0; o < n; o++)
            a[o] = arguments[o];
          for (var i = 0, c = a; i < c.length; i++) {
            for (
              var s = c[i],
                l = 0,
                u = Object.entries((d = s.gates) !== null && d !== void 0 ? d : {});
              l < u.length;
              l++
            ) {
              var d,
                f = J(u[l], 2),
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
                y = J(g[v], 2),
                w = y[0],
                k = y[1];
              r.configs[w] = k;
            }
            for (
              var m = 0, S = Object.entries((E = s.layers) !== null && E !== void 0 ? E : {});
              m < S.length;
              m++
            ) {
              var E,
                A = J(S[m], 2),
                D = A[0],
                P = A[1];
              r.layers[D] = P;
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
            this.parseStoredOverrides(_d),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(_d);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var o = a[n],
              i = new Set(Object.keys(o)),
              c = I0(i),
              s;
            try {
              for (c.s(); !(s = c.n()).done; ) {
                var l = s.value,
                  u = tt._DJB2(l);
                i.has(u) && delete o[u];
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
          var n = $e($e({}, Kr()), r);
          this._djb2Map.clear();
          for (var a = 0, o = Object.entries(n); a < o.length; a++)
            for (
              var i = J(o[a], 2), c = i[0], s = i[1], l = 0, u = Object.entries(s);
              l < u.length;
              l++
            ) {
              var d = J(u[l], 2),
                f = d[0],
                p = d[1];
              this._djb2Map.set(nt(tt._DJB2(f), c), p);
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
            this._djb2Map.set(nt(tt._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(nt(tt._DJB2(r), "gates")),
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
                : this._djb2Map.get(nt(r.name, "gates"));
          return o == null
            ? null
            : $e($e({}, r), {}, { value: o, details: $e($e({}, r.details), {}, { reason: ss }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(nt(tt._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(nt(tt._DJB2(r), "configs")),
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
            this._djb2Map.set(nt(tt._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(nt(tt._DJB2(r), "configs")),
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
            this._djb2Map.set(nt(tt._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(nt(tt._DJB2(r), "layers")),
            this.saveOverrides());
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = Kr();
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
                : this._djb2Map.get(nt(r.name, "layers"));
          return o == null
            ? null
            : $e(
                $e({}, r),
                {},
                {
                  __value: o,
                  get: tt._makeTypedGet(r.name, o),
                  details: $e($e({}, r.details), {}, { reason: ss }),
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
                : this._djb2Map.get(nt(r.name, "configs"));
          return o == null
            ? null
            : $e(
                $e({}, r),
                {},
                {
                  value: o,
                  get: tt._makeTypedGet(r.name, o),
                  details: $e($e({}, r.details), {}, { reason: ss }),
                },
              );
        },
      },
    ]);
  })(),
  M0 = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
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
function ar(e) {
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
var yd = "client-default-key",
  L0 = "https://xp.atlassian.com/v1/rgstr",
  N0 = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? D0 : n,
        o = r.overrideAdapter;
      (be(this, e),
        C(this, "initPromise", null),
        C(this, "initCompleted", !1),
        C(this, "initWithDefaults", !1),
        C(this, "hasCheckGateErrorOccurred", !1),
        C(this, "hasGetExperimentErrorOccurred", !1),
        C(this, "hasGetExperimentValueErrorOccurred", !1),
        C(this, "hasGetLayerErrorOccurred", !1),
        C(this, "hasGetLayerValueErrorOccurred", !1),
        C(this, "subscriptions", new c0()),
        C(this, "dataAdapter", new A0()),
        C(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = o || new T0(a)));
    }
    return _e(e, [
      {
        key: "initialize",
        value: (function () {
          var t = ge(
            B.mark(function n(a, o, i) {
              var c = this,
                s,
                l;
              return B.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = co(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          ia(s, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          d.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (l = performance.now()),
                          (this.initOptions = s),
                          (this.initPromise = this.init(s, o, i)
                            .then(function () {
                              ((c.initCompleted = !0), (c.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var f = performance.now(),
                                p = f - l;
                              c.fireClientEvent(l, p, "initialize", c.initCompleted, s.apiKey);
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
          var t = ge(
            B.mark(function n(a, o, i, c) {
              var s = this,
                l,
                u;
              return B.wrap(
                function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        if (((l = co(a)), !this.initPromise)) {
                          f.next = 4;
                          break;
                        }
                        return (
                          ia(l, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          f.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (u = performance.now()),
                          (this.initOptions = l),
                          (this.provider = o),
                          this.provider.setClientVersion(rn),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(l, o, i, c)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var p = performance.now(),
                                h = p - u;
                              s.fireClientEvent(
                                u,
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
              .then(function (l) {
                var u = ar(
                  {
                    targetApp: c.initOptions.targetApp,
                    clientVersion: rn,
                    success: o,
                    startTime: r,
                    totalTime: n,
                  },
                  s && { apiKey: s },
                );
                l.sendOperationalEvent({
                  action: a,
                  actionSubject: "featureGatesClient",
                  attributes: u,
                  tags: ["measurement"],
                  source: "@atlaskit/feature-gate-js-client",
                });
              })
              .catch(function (l) {
                c.initOptions.environment !== wa.Production &&
                  console.error("Analytics web client promise did not resolve", l);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = ge(
            B.mark(function n(a, o, i) {
              var c = this,
                s,
                l,
                u,
                d = arguments;
              return B.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (
                          ((s = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (l = co(a)),
                          !this.initPromise)
                        ) {
                          p.next = 5;
                          break;
                        }
                        return (
                          ia(l, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          p.abrupt("return", this.initPromise)
                        );
                      case 5:
                        return (
                          Object.prototype.hasOwnProperty.call(s, "has_updates") ||
                            (s.has_updates = !0),
                          (u = performance.now()),
                          (this.initOptions = l),
                          (this.initPromise = this.initFromValues(l, o, i, s)
                            .then(function () {
                              ((c.initCompleted = !0), (c.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var h = performance.now(),
                                v = h - u;
                              c.fireClientEvent(u, v, "initializeFromValues", c.initCompleted);
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
          var t = ge(
            B.mark(function n(a, o, i) {
              var c, s;
              return B.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (c = co(a)),
                          (s = function () {
                            return is.fetchExperimentValues(c, o, i).then(function (f) {
                              var p = f.experimentValues,
                                h = f.customAttributes;
                              return { experimentValues: p, customAttributesFromFetch: h };
                            });
                          }),
                          (u.next = 5),
                          this.updateUserUsingInitializeValuesProducer(s, o, i)
                        );
                      case 5:
                      case "end":
                        return u.stop();
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
          var t = ge(
            B.mark(function n(a, o) {
              var i = this;
              return B.wrap(
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
          var t = ge(
            B.mark(function n(a, o) {
              var i,
                c,
                s = arguments;
              return B.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
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
                          (u.next = 5),
                          this.updateUserUsingInitializeValuesProducer(c, a, o)
                        );
                      case 5:
                      case "end":
                        return u.stop();
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
          var t = ge(
            B.mark(function n() {
              return B.wrap(
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
            return dd.fromExperiment(
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
              new dd(r, {}, "", { time: Date.now(), reason: vc.Error })
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
          return ia(this.currentIdentifiers, r) && ia(this.currentAttributes, n);
        },
      },
      {
        key: "onGateUpdated",
        value: function (r, n) {
          var a = this,
            o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            i = function (s) {
              var l = o.fireGateExposure,
                u = l === void 0 ? !0 : l;
              u && a.manuallyLogGateExposure(r);
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
            s = function (u) {
              var d = c.fireExperimentExposure,
                f = d === void 0 ? !0 : d;
              f && i.manuallyLogExperimentExposure(r);
              try {
                o(u);
              } catch (p) {
                console.warn(
                  "Error calling callback for experiment ".concat(r, " with value ").concat(u),
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
          var t = ge(
            B.mark(function n(a, o, i) {
              var c, s, l, u, d, f, p, h;
              return B.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (c = ar({}, a)),
                          (g.prev = 1),
                          (u = is.fetchClientSdk(a).then(function (b) {
                            return (c.sdkKey = b.clientSdkKey);
                          })),
                          (d = is.fetchExperimentValues(a, o, i)),
                          (g.next = 6),
                          Promise.all([u, d])
                        );
                      case 6:
                        ((f = g.sent),
                          (p = J(f, 2)),
                          (h = p[1]),
                          (s = h.experimentValues),
                          (l = h.customAttributes),
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
                        return g.abrupt("return", this.initFromValues(c, o, l, s));
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
          var t = ge(
            B.mark(function n(a, o, i, c) {
              var s, l, u, d, f, p, h, v;
              return B.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (s = ar(ar({}, a), {}, { disableCurrentPageLogging: !0 })),
                          (b.prev = 1),
                          (b.next = 4),
                          o.setProfile(a, i, c)
                        );
                      case 4:
                        return (
                          (d = o.getClientSdkKey().then(function (y) {
                            return (s.sdkKey = y);
                          })),
                          (f = o.getExperimentValues()),
                          (b.next = 8),
                          Promise.all([d, f])
                        );
                      case 8:
                        ((p = b.sent),
                          (h = J(p, 2)),
                          (v = h[1]),
                          (l = v.experimentValues),
                          (u = v.customAttributesFromFetch),
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
                        return b.abrupt("return", this.initFromValues(s, i, u, l));
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
          var t = ge(
            B.mark(function n(a, o, i) {
              var c,
                s,
                l,
                u,
                d,
                f,
                p,
                h = arguments;
              return B.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = h.length > 3 && h[3] !== void 0 ? h[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = o),
                          (this.currentAttributes = i),
                          (l = f0(a)),
                          l.sdkKey || (l.sdkKey = yd),
                          ((c = l.networkConfig) !== null && c !== void 0 && c.logEventUrl) ||
                            (l.networkConfig = ar(
                              ar({}, l.networkConfig),
                              {},
                              { logEventUrl: L0 },
                            )),
                          l.perimeter === Na.FEDRAMP_MODERATE && (l.disableLogging = !0),
                          (u = l.sdkKey),
                          (d = l.environment),
                          l.updateUserCompletionCallback,
                          l.perimeter,
                          (f = te(l, M0)),
                          (this.user = ud(o, i)),
                          (p = ar(
                            ar({}, f),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: gt.LogEventCompressionMode.Forced,
                            },
                          )),
                          o.stableId
                            ? gt.StableID.setOverride(o.stableId, u)
                            : (p.disableStableID = !0),
                          (g.prev = 12),
                          (this.statsigClient = new gt.StatsigClient(u, this.user, p)),
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
                          (this.statsigClient = new gt.StatsigClient(yd, this.user, p)),
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
          var t = ge(
            B.mark(function n(a, o, i) {
              var c = this,
                s,
                l,
                u;
              return B.wrap(
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
                          (l = a()),
                          (u = this.updateStatsigClientUser(l, o, i)),
                          (this.initPromise = u.catch(
                            ge(
                              B.mark(function p() {
                                return B.wrap(function (v) {
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
                          f.abrupt("return", u)
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
          var t = ge(
            B.mark(function n(a, o, i) {
              var c, s, l, u, d, f, p, h, v;
              return B.wrap(
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
                        ((l = b.sent), (u = ud(o, l.customAttributesFromFetch)), (b.next = 13));
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
                          this.dataAdapter.setBootstrapData(l.experimentValues),
                          (this.user = u),
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
          return rn;
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
            return fd.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !o }));
          } catch (i) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: i,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              fd.fromLayer(gt._makeLayer(r, { reason: "Error" }, null))
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
  K = (function () {
    function e() {
      be(this, e);
    }
    return _e(e, null, [
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
T = K;
C(K, "client", new N0());
C(K, "hasCheckGateErrorOccurred", !1);
C(K, "hasGetExperimentValueErrorOccurred", !1);
C(K, "checkGate", function (e, t) {
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
C(K, "getExperimentValue", function (e, t, r, n) {
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
C(K, "initializeCalled", T.client.initializeCalled.bind(T.client));
C(K, "initializeCompleted", T.client.initializeCompleted.bind(T.client));
C(K, "waitUntilInitializeCompleted", T.client.waitUntilInitializeCompleted.bind(T.client));
C(K, "initialize", T.client.initialize.bind(T.client));
C(K, "initializeWithProvider", T.client.initializeWithProvider.bind(T.client));
C(K, "initializeFromValues", T.client.initializeFromValues.bind(T.client));
C(K, "manuallyLogGateExposure", T.client.manuallyLogGateExposure.bind(T.client));
C(K, "getExperiment", T.client.getExperiment.bind(T.client));
C(K, "manuallyLogExperimentExposure", T.client.manuallyLogExperimentExposure.bind(T.client));
C(K, "manuallyLogLayerExposure", T.client.manuallyLogLayerExposure.bind(T.client));
C(K, "shutdownStatsig", T.client.shutdownStatsig.bind(T.client));
C(K, "overrideGate", T.client.overrideGate.bind(T.client));
C(K, "clearGateOverride", T.client.clearGateOverride.bind(T.client));
C(K, "overrideConfig", T.client.overrideConfig.bind(T.client));
C(K, "clearConfigOverride", T.client.clearConfigOverride.bind(T.client));
C(K, "setOverrides", T.client.setOverrides.bind(T.client));
C(K, "getOverrides", T.client.getOverrides.bind(T.client));
C(K, "clearAllOverrides", T.client.clearAllOverrides.bind(T.client));
C(K, "isCurrentUser", T.client.isCurrentUser.bind(T.client));
C(K, "onGateUpdated", T.client.onGateUpdated.bind(T.client));
C(K, "onExperimentValueUpdated", T.client.onExperimentValueUpdated.bind(T.client));
C(K, "onAnyUpdated", T.client.onAnyUpdated.bind(T.client));
C(K, "updateUser", T.client.updateUser.bind(T.client));
C(K, "updateUserWithProvider", T.client.updateUserWithProvider.bind(T.client));
C(K, "updateUserWithValues", T.client.updateUserWithValues.bind(T.client));
C(K, "getPackageVersion", T.client.getPackageVersion.bind(T.client));
C(K, "getLayer", T.client.getLayer.bind(T.client));
C(K, "getLayerValue", T.client.getLayerValue.bind(T.client));
var qs = K;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = K;
  else {
    var lo, cs;
    qs = window.__FEATUREGATES_JS__;
    var wd =
      ((lo = qs) === null || lo === void 0 || (cs = lo.getPackageVersion) === null || cs === void 0
        ? void 0
        : cs.call(lo)) || "4.10.0 or earlier";
    if (wd !== rn) {
      var F0 = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(wd, " when module version ")
        .concat(rn, " was loading.");
      console.warn(F0);
    }
  }
var Hr,
  Wr,
  $0 =
    (globalThis == null ||
    (Hr = globalThis.process) === null ||
    Hr === void 0 ||
    (Hr = Hr.env) === null ||
    Hr === void 0
      ? void 0
      : Hr.JEST_WORKER_ID) !== void 0,
  B0 =
    !$0 &&
    (globalThis == null ||
    (Wr = globalThis.process) === null ||
    Wr === void 0 ||
    (Wr = Wr.env) === null ||
    Wr === void 0
      ? void 0
      : Wr.NODE_ENV) !== "production",
  z0 = function () {
    var t;
    B0 && (t = console).debug.apply(t, arguments);
  },
  pc = {},
  U0 = "@atlaskit/platform-feature-flags",
  Ea = "__PLATFORM_FEATURE_FLAGS__",
  Yp = typeof process < "u" && typeof pc < "u",
  q0 = Yp ? pc.ENABLE_PLATFORM_FF === "true" : !1,
  V0 = Yp ? pc.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  G0 = q0 || V0,
  K0 = { booleanResolver: void 0 },
  Ca = typeof window < "u" ? window : globalThis;
Ca[Ea] = Ca[Ea] || K0;
function H0(e) {
  if (G0)
    return (
      z0(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        U0,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = Ca[Ea]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = Ca[Ea]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return qs.checkGate(e);
    var a = (n = Ca[Ea]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function pe(e) {
  return H0(e);
}
var W0 = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  J0 = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Y0 = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  X0 = { core: 16, utility: 12 },
  Z0 = {
    core: {
      medium: { none: 0, compact: 4, spacious: 4 },
      small: { none: 0, compact: 2.66, spacious: 8 },
    },
    utility: {
      medium: { none: 0, compact: 2, spacious: 6 },
      small: { none: 0, compact: 2, spacious: 6 },
    },
  },
  kd = _.memo(function (t) {
    var r,
      n = t,
      a = n.color,
      o = a === void 0 ? "currentColor" : a,
      i = n.testId,
      c = n.label,
      s = n.LEGACY_primaryColor,
      l = n.LEGACY_secondaryColor,
      u = n.LEGACY_size,
      d = n.LEGACY_fallbackIcon,
      f = n.dangerouslySetGlyph,
      p = n.shouldScale,
      h = n.LEGACY_margin,
      v = n.spacing,
      g = v === void 0 ? "none" : v,
      b = n.name,
      y = f ? { __html: f } : void 0;
    if (d && !pe("platform-visual-refresh-icons"))
      return _.createElement(d, {
        primaryColor: s ?? o,
        secondaryColor: l,
        size: u,
        label: c,
        testId: i,
        UNSAFE_margin: h,
      });
    var w = (r = t.type) !== null && r !== void 0 ? r : "core",
      k = "medium";
    if ("size" in t && t.size !== void 0) {
      if (typeof t.size == "string") k = t.size === "small" || t.size === "medium" ? t.size : k;
      else if (b) {
        var m = t.size(b);
        k = m === "small" || m === "medium" ? m : k;
      }
    }
    var S = X0[w],
      E = Z0[w][k][g],
      A = S + 2 * E;
    return _.createElement(
      "span",
      {
        "data-testid": i,
        role: c ? "img" : void 0,
        "aria-label": c || void 0,
        "aria-hidden": c ? void 0 : !0,
        style: { color: o },
        className: R([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          p && "_1bsb1kw7 _4t3i1kw7",
          (w === "utility" || k === "small") && "_vwz4utpp",
        ]),
      },
      _.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - E, " ")
          .concat(0 - E, " ")
          .concat(A, " ")
          .concat(A),
        role: "presentation",
        dangerouslySetInnerHTML: y,
        className: R([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : w === "utility" ? Y0[g] : k === "small" ? J0[g] : W0[g],
        ]),
      }),
    );
  });
const Q0 = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: kd, default: kd }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  li = tc(Q0);
var Od;
function ew() {
  if (Od) return ta;
  ((Od = 1), Object.defineProperty(ta, "__esModule", { value: !0 }), (ta.default = void 0));
  var e = r(wt()),
    t = r(li);
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
  return ((n.displayName = "ChevronLeftIcon"), (ta.default = n), ta);
}
var ca = {};
function Sd(e, t) {
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
function xd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Sd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var tw = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  Ed = _.memo(function (t) {
    var r = t,
      n = r.glyph,
      a = r.dangerouslySetGlyph,
      o = r.primaryColor,
      i = o === void 0 ? "currentColor" : o,
      c = r.secondaryColor,
      s = r.size,
      l = r.testId,
      u = r.label,
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
          "data-testid": l,
          "data-vc": "icon-".concat(l),
          role: u ? "img" : void 0,
          "aria-label": u || void 0,
          "aria-hidden": u ? void 0 : !0,
          style: xd(
            xd({}, v),
            {},
            { "--icon-primary-color": i, "--icon-secondary-color": c, margin: p },
          ),
        },
        h,
        {
          className: R([
            "_1e0c1o8l _1o9zidpf _vyfuvuon _vwz4kb7n _1szv15vq _1tly15vq _rzyw1osq _17jb1osq _1ksvoz0e _3se1x1jp _re2rglyw _1veoyfq0 _1kg81r31",
            "_jcxd1r8n _gq0g1onz _1trkwc43",
            i === c && "_18hbwc43",
            c === "transparent" && "_4fyi1j28",
            s && tw[s],
          ]),
        },
      ),
    );
  });
const rw = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Ed, default: Ed }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Xp = tc(rw);
var Cd;
function nw() {
  if (Cd) return ca;
  ((Cd = 1), Object.defineProperty(ca, "__esModule", { value: !0 }), (ca.default = void 0));
  var e = r(wt()),
    t = Xp;
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
  return ((n.displayName = "ChevronLeftLargeIcon"), (ca.default = n), ca);
}
var Rd;
function aw() {
  if (Rd) return ea;
  ((Rd = 1), Object.defineProperty(ea, "__esModule", { value: !0 }), (ea.default = void 0));
  var e = n(wt()),
    t = n(ew()),
    r = n(nw());
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  const a = (o) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronLeftIcon", LEGACY_fallbackIcon: r.default }, o),
    );
  return ((a.displayName = "ChevronLeftIconMigration"), (ea.default = a), ea);
}
var ow = aw();
const iw = dr(ow);
var la = {},
  ua = {},
  Pd;
function sw() {
  if (Pd) return ua;
  ((Pd = 1), Object.defineProperty(ua, "__esModule", { value: !0 }), (ua.default = void 0));
  var e = r(wt()),
    t = r(li);
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
  return ((n.displayName = "ChevronRightIcon"), (ua.default = n), ua);
}
var da = {},
  Ad;
function cw() {
  if (Ad) return da;
  ((Ad = 1), Object.defineProperty(da, "__esModule", { value: !0 }), (da.default = void 0));
  var e = r(wt()),
    t = Xp;
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
  return ((n.displayName = "ChevronRightLargeIcon"), (da.default = n), da);
}
var Id;
function lw() {
  if (Id) return la;
  ((Id = 1), Object.defineProperty(la, "__esModule", { value: !0 }), (la.default = void 0));
  var e = n(wt()),
    t = n(sw()),
    r = n(cw());
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  const a = (o) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronRightIcon", LEGACY_fallbackIcon: r.default }, o),
    );
  return ((a.displayName = "ChevronRightIconMigration"), (la.default = a), la);
}
var uw = lw();
const dw = dr(uw);
var hc = _.createContext("elevation.surface"),
  fw = function () {
    return _.useContext(hc);
  };
hc.displayName = "SurfaceProvider";
var vw = [
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
  pw = ["className"],
  hw = {
    "color.background.accent.lime.subtlest": "_bfhkm890",
    "color.background.accent.lime.subtlest.hovered": "_bfhkd4y8",
    "color.background.accent.lime.subtlest.pressed": "_bfhk1fno",
    "color.background.accent.lime.subtler": "_bfhkz2ec",
    "color.background.accent.lime.subtler.hovered": "_bfhk1eds",
    "color.background.accent.lime.subtler.pressed": "_bfhk1hgz",
    "color.background.accent.lime.subtle": "_bfhkbq5w",
    "color.background.accent.lime.subtle.hovered": "_bfhkfoww",
    "color.background.accent.lime.subtle.pressed": "_bfhkhgj8",
    "color.background.accent.lime.bolder": "_bfhktde4",
    "color.background.accent.lime.bolder.hovered": "_bfhknzpa",
    "color.background.accent.lime.bolder.pressed": "_bfhk1b17",
    "color.background.accent.red.subtlest": "_bfhk1vk5",
    "color.background.accent.red.subtlest.hovered": "_bfhk1i6i",
    "color.background.accent.red.subtlest.pressed": "_bfhk1pbw",
    "color.background.accent.red.subtler": "_bfhk1rtt",
    "color.background.accent.red.subtler.hovered": "_bfhkrw5d",
    "color.background.accent.red.subtler.pressed": "_bfhk69rw",
    "color.background.accent.red.subtle": "_bfhkkrt9",
    "color.background.accent.red.subtle.hovered": "_bfhk1sou",
    "color.background.accent.red.subtle.pressed": "_bfhk1tf4",
    "color.background.accent.red.bolder": "_bfhkuibq",
    "color.background.accent.red.bolder.hovered": "_bfhk100f",
    "color.background.accent.red.bolder.pressed": "_bfhkprmn",
    "color.background.accent.orange.subtlest": "_bfhk1g3m",
    "color.background.accent.orange.subtlest.hovered": "_bfhkg4tm",
    "color.background.accent.orange.subtlest.pressed": "_bfhk1ya0",
    "color.background.accent.orange.subtler": "_bfhkf2vu",
    "color.background.accent.orange.subtler.hovered": "_bfhk1lml",
    "color.background.accent.orange.subtler.pressed": "_bfhkuxsx",
    "color.background.accent.orange.subtle": "_bfhk1g6e",
    "color.background.accent.orange.subtle.hovered": "_bfhk1oew",
    "color.background.accent.orange.subtle.pressed": "_bfhk1phk",
    "color.background.accent.orange.bolder": "_bfhkjgng",
    "color.background.accent.orange.bolder.hovered": "_bfhkhi52",
    "color.background.accent.orange.bolder.pressed": "_bfhkf767",
    "color.background.accent.yellow.subtlest": "_bfhk1ozg",
    "color.background.accent.yellow.subtlest.hovered": "_bfhk19g9",
    "color.background.accent.yellow.subtlest.pressed": "_bfhk31d1",
    "color.background.accent.yellow.subtler": "_bfhk3fv2",
    "color.background.accent.yellow.subtler.hovered": "_bfhklg04",
    "color.background.accent.yellow.subtler.pressed": "_bfhk1d44",
    "color.background.accent.yellow.subtle": "_bfhkry5t",
    "color.background.accent.yellow.subtle.hovered": "_bfhk17e6",
    "color.background.accent.yellow.subtle.pressed": "_bfhko0y5",
    "color.background.accent.yellow.bolder": "_bfhk1vop",
    "color.background.accent.yellow.bolder.hovered": "_bfhkkjqf",
    "color.background.accent.yellow.bolder.pressed": "_bfhk32kj",
    "color.background.accent.green.subtlest": "_bfhkn729",
    "color.background.accent.green.subtlest.hovered": "_bfhk3utz",
    "color.background.accent.green.subtlest.pressed": "_bfhkv5yf",
    "color.background.accent.green.subtler": "_bfhk1wnw",
    "color.background.accent.green.subtler.hovered": "_bfhkung8",
    "color.background.accent.green.subtler.pressed": "_bfhk1p19",
    "color.background.accent.green.subtle": "_bfhk1rsu",
    "color.background.accent.green.subtle.hovered": "_bfhk12e3",
    "color.background.accent.green.subtle.pressed": "_bfhk8h4p",
    "color.background.accent.green.bolder": "_bfhk1e5c",
    "color.background.accent.green.bolder.hovered": "_bfhka5yi",
    "color.background.accent.green.bolder.pressed": "_bfhk1azz",
    "color.background.accent.teal.subtlest": "_bfhk7xuz",
    "color.background.accent.teal.subtlest.hovered": "_bfhk108c",
    "color.background.accent.teal.subtlest.pressed": "_bfhk1j2h",
    "color.background.accent.teal.subtler": "_bfhk1a17",
    "color.background.accent.teal.subtler.hovered": "_bfhkg5py",
    "color.background.accent.teal.subtler.pressed": "_bfhkq7li",
    "color.background.accent.teal.subtle": "_bfhktdv8",
    "color.background.accent.teal.subtle.hovered": "_bfhkzh8h",
    "color.background.accent.teal.subtle.pressed": "_bfhk10ai",
    "color.background.accent.teal.bolder": "_bfhk2c8p",
    "color.background.accent.teal.bolder.hovered": "_bfhkl3ve",
    "color.background.accent.teal.bolder.pressed": "_bfhkse6l",
    "color.background.accent.blue.subtlest": "_bfhkavxe",
    "color.background.accent.blue.subtlest.hovered": "_bfhkay3p",
    "color.background.accent.blue.subtlest.pressed": "_bfhk1xmr",
    "color.background.accent.blue.subtler": "_bfhk4v9p",
    "color.background.accent.blue.subtler.hovered": "_bfhk16e6",
    "color.background.accent.blue.subtler.pressed": "_bfhk1uh7",
    "color.background.accent.blue.subtle": "_bfhk1j89",
    "color.background.accent.blue.subtle.hovered": "_bfhk1f4s",
    "color.background.accent.blue.subtle.pressed": "_bfhkqctv",
    "color.background.accent.blue.bolder": "_bfhkc8cv",
    "color.background.accent.blue.bolder.hovered": "_bfhk1cwi",
    "color.background.accent.blue.bolder.pressed": "_bfhkhcrq",
    "color.background.accent.purple.subtlest": "_bfhkp7j4",
    "color.background.accent.purple.subtlest.hovered": "_bfhkm0d5",
    "color.background.accent.purple.subtlest.pressed": "_bfhkgslw",
    "color.background.accent.purple.subtler": "_bfhk1jkz",
    "color.background.accent.purple.subtler.hovered": "_bfhk1wyu",
    "color.background.accent.purple.subtler.pressed": "_bfhk5fkp",
    "color.background.accent.purple.subtle": "_bfhkdh45",
    "color.background.accent.purple.subtle.hovered": "_bfhk1wob",
    "color.background.accent.purple.subtle.pressed": "_bfhkwz05",
    "color.background.accent.purple.bolder": "_bfhkygwo",
    "color.background.accent.purple.bolder.hovered": "_bfhkadgs",
    "color.background.accent.purple.bolder.pressed": "_bfhk1uro",
    "color.background.accent.magenta.subtlest": "_bfhk8tvm",
    "color.background.accent.magenta.subtlest.hovered": "_bfhkr3zd",
    "color.background.accent.magenta.subtlest.pressed": "_bfhk1een",
    "color.background.accent.magenta.subtler": "_bfhkv9ra",
    "color.background.accent.magenta.subtler.hovered": "_bfhk1r0p",
    "color.background.accent.magenta.subtler.pressed": "_bfhkxuzc",
    "color.background.accent.magenta.subtle": "_bfhk1mi6",
    "color.background.accent.magenta.subtle.hovered": "_bfhkrwyz",
    "color.background.accent.magenta.subtle.pressed": "_bfhk1ovh",
    "color.background.accent.magenta.bolder": "_bfhkc3uk",
    "color.background.accent.magenta.bolder.hovered": "_bfhk1ok8",
    "color.background.accent.magenta.bolder.pressed": "_bfhkwaw3",
    "color.background.accent.gray.subtlest": "_bfhk11bn",
    "color.background.accent.gray.subtlest.hovered": "_bfhk12j4",
    "color.background.accent.gray.subtlest.pressed": "_bfhk1lb4",
    "color.background.accent.gray.subtler": "_bfhk1v33",
    "color.background.accent.gray.subtler.hovered": "_bfhk1f7l",
    "color.background.accent.gray.subtler.pressed": "_bfhkd8a2",
    "color.background.accent.gray.subtle": "_bfhk1t05",
    "color.background.accent.gray.subtle.hovered": "_bfhk1a2l",
    "color.background.accent.gray.subtle.pressed": "_bfhk1z0s",
    "color.background.accent.gray.bolder": "_bfhk1t1b",
    "color.background.accent.gray.bolder.hovered": "_bfhke4nv",
    "color.background.accent.gray.bolder.pressed": "_bfhk82ra",
    "color.background.disabled": "_bfhksyzs",
    "color.background.input": "_bfhk1j9a",
    "color.background.input.hovered": "_bfhk1d5g",
    "color.background.input.pressed": "_bfhkr01l",
    "color.background.inverse.subtle": "_bfhk1vck",
    "color.background.inverse.subtle.hovered": "_bfhkmpja",
    "color.background.inverse.subtle.pressed": "_bfhk1gii",
    "color.background.neutral": "_bfhkm7j4",
    "color.background.neutral.hovered": "_bfhk15ej",
    "color.background.neutral.pressed": "_bfhkip91",
    "color.background.neutral.subtle": "_bfhksm61",
    "color.background.neutral.subtle.hovered": "_bfhk166n",
    "color.background.neutral.subtle.pressed": "_bfhk1dty",
    "color.background.neutral.bold": "_bfhkcdhy",
    "color.background.neutral.bold.hovered": "_bfhk1bsc",
    "color.background.neutral.bold.pressed": "_bfhk1b6k",
    "color.background.selected": "_bfhkfg4m",
    "color.background.selected.hovered": "_bfhki1yw",
    "color.background.selected.pressed": "_bfhk19ru",
    "color.background.selected.bold": "_bfhk1fvw",
    "color.background.selected.bold.hovered": "_bfhk18hz",
    "color.background.selected.bold.pressed": "_bfhkgr1v",
    "color.background.brand.subtlest": "_bfhk3wxy",
    "color.background.brand.subtlest.hovered": "_bfhkezq1",
    "color.background.brand.subtlest.pressed": "_bfhk2ggb",
    "color.background.brand.bold": "_bfhkb29m",
    "color.background.brand.bold.hovered": "_bfhku1se",
    "color.background.brand.bold.pressed": "_bfhkqkzo",
    "color.background.brand.boldest": "_bfhk15mt",
    "color.background.brand.boldest.hovered": "_bfhk1uwk",
    "color.background.brand.boldest.pressed": "_bfhk17jr",
    "color.background.danger": "_bfhk1gly",
    "color.background.danger.hovered": "_bfhk1yvi",
    "color.background.danger.pressed": "_bfhk1io2",
    "color.background.danger.bold": "_bfhkybec",
    "color.background.danger.bold.hovered": "_bfhks9hg",
    "color.background.danger.bold.pressed": "_bfhk9pqq",
    "color.background.warning": "_bfhk1tzq",
    "color.background.warning.hovered": "_bfhk1rd4",
    "color.background.warning.pressed": "_bfhk11dh",
    "color.background.warning.bold": "_bfhk190i",
    "color.background.warning.bold.hovered": "_bfhk1i4c",
    "color.background.warning.bold.pressed": "_bfhkrj9s",
    "color.background.success": "_bfhkmv6i",
    "color.background.success.hovered": "_bfhk1jgi",
    "color.background.success.pressed": "_bfhky4f1",
    "color.background.success.bold": "_bfhk8emd",
    "color.background.success.bold.hovered": "_bfhk1q4l",
    "color.background.success.bold.pressed": "_bfhkcrcn",
    "color.background.discovery": "_bfhk1nvp",
    "color.background.discovery.hovered": "_bfhk1xp7",
    "color.background.discovery.pressed": "_bfhkdlkp",
    "color.background.discovery.bold": "_bfhk1lri",
    "color.background.discovery.bold.hovered": "_bfhk1w72",
    "color.background.discovery.bold.pressed": "_bfhkrb53",
    "color.background.information": "_bfhk33gi",
    "color.background.information.hovered": "_bfhk1vps",
    "color.background.information.pressed": "_bfhk1s0z",
    "color.background.information.bold": "_bfhk14wj",
    "color.background.information.bold.hovered": "_bfhk1amz",
    "color.background.information.bold.pressed": "_bfhk5bth",
    "color.blanket": "_bfhk10xm",
    "color.blanket.selected": "_bfhk7wq0",
    "color.blanket.danger": "_bfhkrprw",
    "color.skeleton": "_bfhkn82g",
    "color.skeleton.subtle": "_bfhkh3tw",
    "elevation.surface": "_bfhkvuon",
    "elevation.surface.hovered": "_bfhk108i",
    "elevation.surface.pressed": "_bfhk1ji5",
    "elevation.surface.overlay": "_bfhk1bhr",
    "elevation.surface.overlay.hovered": "_bfhk16qz",
    "elevation.surface.overlay.pressed": "_bfhkvq0a",
    "elevation.surface.raised": "_bfhkhp5a",
    "elevation.surface.raised.hovered": "_bfhk1a0f",
    "elevation.surface.raised.pressed": "_bfhkf7u5",
    "elevation.surface.sunken": "_bfhkqbzx",
    "utility.elevation.surface.current": "_bfhkchd4",
  },
  Zp = {
    "elevation.surface": "_1q1lvuon",
    "elevation.surface.hovered": "_1q1l108i",
    "elevation.surface.pressed": "_1q1l1ji5",
    "elevation.surface.overlay": "_1q1l1bhr",
    "elevation.surface.overlay.hovered": "_1q1l16qz",
    "elevation.surface.overlay.pressed": "_1q1lvq0a",
    "elevation.surface.raised": "_1q1lhp5a",
    "elevation.surface.raised.hovered": "_1q1l1a0f",
    "elevation.surface.raised.pressed": "_1q1lf7u5",
    "elevation.surface.sunken": "_1q1lqbzx",
  },
  gw = {
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
  bw = {
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
  _w = {
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
  mw = {
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
  ui = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "div" : r,
      a = e.children,
      o = e.backgroundColor,
      i = e.padding,
      c = e.paddingBlock,
      s = c === void 0 ? i : c,
      l = e.paddingBlockStart,
      u = l === void 0 ? s : l,
      d = e.paddingBlockEnd,
      f = d === void 0 ? s : d,
      p = e.paddingInline,
      h = p === void 0 ? i : p,
      v = e.paddingInlineStart,
      g = v === void 0 ? h : v,
      b = e.paddingInlineEnd,
      y = b === void 0 ? h : b,
      w = e.style,
      k = e.testId,
      m = e.xcss,
      S = te(e, vw);
    S.className;
    var E = te(S, pw),
      A = _.createElement(
        n,
        Z(
          {
            style: w,
            ref: t,
            className: R([
              "_19itglyw _vchhusvi _r06hglyw",
              o && hw[o],
              o && yw(o) && Zp[o],
              u && gw[u],
              f && bw[f],
              g && _w[g],
              y && mw[y],
              m,
            ]),
          },
          E,
          { "data-testid": k },
        ),
        a,
      );
    return o ? _.createElement(hc.Provider, { value: o }, A) : A;
  });
function yw(e) {
  return e in Zp;
}
const ls = () =>
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
  Qp = (...e) => R(e);
function ww() {
  return {
    css() {
      throw ls();
    },
    cssMap() {
      throw ls();
    },
    cx: Qp,
    XCSSProp() {
      throw ls();
    },
  };
}
var kw = ww(),
  eh = kw.cx,
  Ow = [
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
  jd = {
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
  Dd = {
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
  Sw = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  xw = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  Ew = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  Cw = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  Rw = { root: "_1e0c1txw _vchhusvi" },
  qo = _.memo(
    _.forwardRef(function (e, t) {
      var r = e.as,
        n = r === void 0 ? "div" : r,
        a = e.role,
        o = e.alignItems,
        i = e.justifyContent,
        c = e.gap,
        s = e.columnGap,
        l = e.rowGap,
        u = e.children,
        d = e.testId,
        f = e.direction,
        p = e.wrap,
        h = e.xcss,
        v = te(e, Ow);
      return _.createElement(
        n,
        Z({}, v, {
          role: a,
          className: R([
            Rw.root,
            c && Dd[c],
            s && Dd[s],
            c && jd[c],
            l && jd[l],
            o && Cw[o],
            f && xw[f],
            i && Sw[i],
            p && Ew[p],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        u,
      );
    }),
  );
qo.displayName = "Flex";
var Pw = [
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
  Vs = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  Aw = function (t) {
    var r = t.children;
    return _.createElement("span", { className: R([Vs.separator]) }, r);
  },
  wo = _.memo(
    _.forwardRef(function (e, t) {
      var r = e.as,
        n = e.alignInline,
        a = e.alignBlock,
        o = a === void 0 ? "start" : a,
        i = e.shouldWrap,
        c = i === void 0 ? !1 : i,
        s = e.spread,
        l = e.grow,
        u = e.space,
        d = e.rowSpace,
        f = e.separator,
        p = e.xcss,
        h = e.testId,
        v = e.role,
        g = e.children,
        b = te(e, Pw),
        y = typeof f == "string" ? _.createElement(Aw, null, f) : f,
        w = y
          ? _.Children.toArray(g)
              .filter(Boolean)
              .map(function (k, m) {
                return _.createElement(_.Fragment, { key: m }, f && m > 0 ? y : null, k);
              })
          : g;
      return _.createElement(
        qo,
        Z({}, b, {
          as: r,
          role: v,
          alignItems: o,
          justifyContent: s || n,
          direction: "row",
          gap: u,
          rowGap: d,
          wrap: c ? "wrap" : void 0,
          xcss: eh(l === "hug" && Vs.hug, l === "fill" && Vs.fill, p),
          testId: h,
          ref: t,
        }),
        w,
      );
    }),
  );
wo.displayName = "Inline";
var Iw = "Invariant failed";
function jw(e, t) {
  if (!e) throw new Error(Iw);
}
var th = _.createContext(!1),
  Dw = function () {
    return _.useContext(th);
  },
  Tw = th.Provider,
  Mw = ["span", "p", "strong", "em"],
  Lw = function (t, r) {
    var n = fw();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return Td.hasOwnProperty(n) ? Td[n] : "color.text";
    }
  },
  Jr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  Nw = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  Fw = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  $w = {
    "color.text": "_syaz1fxt",
    "color.text.accent.lime": "_syaz1tco",
    "color.text.accent.lime.bolder": "_syaz1ik3",
    "color.text.accent.red": "_syaz9lu1",
    "color.text.accent.red.bolder": "_syazhwvp",
    "color.text.accent.orange": "_syaz1q28",
    "color.text.accent.orange.bolder": "_syaz1vps",
    "color.text.accent.yellow": "_syazfb2s",
    "color.text.accent.yellow.bolder": "_syazekll",
    "color.text.accent.green": "_syazh55r",
    "color.text.accent.green.bolder": "_syaz1y78",
    "color.text.accent.teal": "_syaz17qg",
    "color.text.accent.teal.bolder": "_syaz12v7",
    "color.text.accent.blue": "_syazpnps",
    "color.text.accent.blue.bolder": "_syazsc1o",
    "color.text.accent.purple": "_syaz10m5",
    "color.text.accent.purple.bolder": "_syaz2ibx",
    "color.text.accent.magenta": "_syaz1s8m",
    "color.text.accent.magenta.bolder": "_syaz1qur",
    "color.text.accent.gray": "_syaz1dyx",
    "color.text.accent.gray.bolder": "_syaz1x9z",
    "color.text.disabled": "_syaz1lh4",
    "color.text.inverse": "_syaz15cr",
    "color.text.selected": "_syazaqb7",
    "color.text.brand": "_syaz1e6v",
    "color.text.danger": "_syaz1tmw",
    "color.text.warning": "_syazwx40",
    "color.text.warning.inverse": "_syazal3n",
    "color.text.success": "_syazy73q",
    "color.text.discovery": "_syazzjem",
    "color.text.information": "_syaze0os",
    "color.text.subtlest": "_syaz131l",
    "color.text.subtle": "_syaz1gjq",
    "color.link": "_syaz14q2",
    "color.link.pressed": "_syaz16c2",
    "color.link.visited": "_syazw7te",
    "color.link.visited.pressed": "_syazg3x0",
  },
  Td = {
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
  rh = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "span" : r,
      a = e.color,
      o = e.align,
      i = e.testId,
      c = e.id,
      s = e.size,
      l = e.weight,
      u = e.maxLines,
      d = e.xcss,
      f = e.children;
    jw(Mw.includes(n));
    var p = Dw(),
      h = Lw(a, p);
    !s && !p && (s = "medium");
    var v = _.createElement(
      n,
      {
        id: c,
        className: R([
          Jr.root,
          s && Nw[s],
          h && $w[h],
          u && Jr.truncation,
          u === 1 && Jr.breakAll,
          o && Jr["textAlign.".concat(o)],
          l && Fw[l],
          n === "em" && Jr["as.em"],
          n === "strong" && Jr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: u },
        "data-testid": i,
        ref: t,
      },
      f,
    );
    return p ? v : _.createElement(Tw, { value: !0 }, v);
  });
function Bw() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var zw = ["as", "children", "isInset", "testId", "style", "xcss"],
  Uw = ["className"],
  gc = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      o = e.isInset,
      i = e.testId,
      c = e.style,
      s = e.xcss,
      l = te(e, zw);
    l.className;
    var u = te(l, Uw);
    return _.createElement(
      n,
      Z({}, u, {
        ref: t,
        className: R([
          "_mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          o && "_1ah31gjf _2mwq1gjf",
          pe("platform_dst_compiled_primitives_outline_reset") && "_ymio1r31 _ypr0glyw _zcxs1o36",
          s,
        ]),
        style: c,
        "data-testid": i,
      }),
      a,
    );
  }),
  qw = [
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
  Vw = ["className"],
  Md = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  nh = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      o = a === void 0 ? "button" : a,
      i = e.onClick,
      c = i === void 0 ? Ae : i,
      s = e.interactionName,
      l = e.componentName,
      u = e.analyticsContext,
      d = e.style,
      f = e.testId,
      p = e.xcss,
      h = e.tabIndex,
      v = te(e, qw),
      g = _.useContext(dc),
      b = _.useCallback(
        function (k, m) {
          (g && g.tracePress(s, k.timeStamp), c(k, m));
        },
        [c, g, s],
      ),
      y = cn({
        fn: b,
        action: "clicked",
        componentName: l || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "15.0.1",
        analyticsData: u,
        actionSubject: "button",
      });
    v.className;
    var w = te(v, Vw);
    return _.createElement(
      gc,
      Z({ as: "button", tabIndex: h ?? (Bw() && !n ? 0 : void 0), style: d }, w, {
        type: o,
        onClick: y,
        disabled: n,
        xcss: Qp(Md.root, n && Md.disabled, p),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  us = {},
  fa = {},
  Ld;
function ah() {
  if (Ld) return fa;
  ((Ld = 1), Object.defineProperty(fa, "__esModule", { value: !0 }), (fa.bind = void 0));
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
  return ((fa.bind = e), fa);
}
var wr = {},
  Nd;
function Gw() {
  if (Nd) return wr;
  Nd = 1;
  var e =
    (wr && wr.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (o) {
            for (var i, c = 1, s = arguments.length; c < s; c++) {
              i = arguments[c];
              for (var l in i) Object.prototype.hasOwnProperty.call(i, l) && (o[l] = i[l]);
            }
            return o;
          }),
        e.apply(this, arguments)
      );
    };
  (Object.defineProperty(wr, "__esModule", { value: !0 }), (wr.bindAll = void 0));
  var t = ah();
  function r(o) {
    if (!(typeof o > "u")) return typeof o == "boolean" ? { capture: o } : o;
  }
  function n(o, i) {
    if (i == null) return o;
    var c = e(e({}, o), { options: e(e({}, r(i)), r(o.options)) });
    return c;
  }
  function a(o, i, c) {
    var s = i.map(function (l) {
      var u = n(l, c);
      return (0, t.bind)(o, u);
    });
    return function () {
      s.forEach(function (u) {
        return u();
      });
    };
  }
  return ((wr.bindAll = a), wr);
}
var Fd;
function Kw() {
  return (
    Fd ||
      ((Fd = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = ah();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = Gw();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(us)),
    us
  );
}
var di = Kw(),
  Hw = {
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
  Ww = "ds",
  Jw = "--".concat(Ww, "-token-not-found");
function Gt(e, t) {
  var r = Hw[e];
  r || (r = Jw);
  var n = t ? "var(".concat(r, ", ").concat(t, ")") : "var(".concat(r, ")");
  return n;
}
var Yw = function () {
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
  oh = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: Yw() });
  },
  Xw = oh(),
  Zw = _.createContext(oh()),
  Qw = function (e) {
    return e.value++;
  },
  ek = function (e) {
    return e ? e.prefix : "";
  },
  tk = function (e) {
    var t = e || Xw,
      r = ek(t),
      n = Qw(t),
      a = r + n,
      o = function (i) {
        return a + t.uid(i);
      };
    return { uid: a, gen: o };
  },
  ih = function () {
    var e = _.useContext(Zw),
      t = _.useState(function () {
        return tk(e);
      })[0];
    return t;
  },
  rk = function () {
    var e = ih().uid;
    return e;
  },
  nk = function () {
    var e = ih().gen;
    return e;
  },
  ds,
  ko = (ds = O.useId) !== null && ds !== void 0 ? ds : void 0;
function sh() {
  return ko && pe("platform-dst-react-18-use-id")
    ? pe("platform-dst-react-18-use-id-selector-safe")
      ? ko().replace(/[:«»]/g, "_")
      : ko()
    : "uid".concat(rk());
}
function ak() {
  if (ko && pe("platform-dst-react-18-use-id")) {
    var e = sh();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return nk();
}
var bc = function (t) {
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
        className: R([
          "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
        ]),
      },
      r,
    );
  },
  ok = {
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
  ik = ["children"];
function sk(e) {
  var t = function (c, s) {
      return c(s);
    },
    r = _.createContext(e);
  function n(i) {
    var c = _.useContext(r),
      s = c || t,
      l = s(i);
    return l;
  }
  function a(i) {
    var c = i.children,
      s = te(i, ik),
      l = n(s);
    return O.createElement(O.Fragment, null, c(l));
  }
  function o(i) {
    var c = _.useContext(r),
      s = i.value || t,
      l = _.useCallback(
        function (u) {
          return s(c, u);
        },
        [c, s],
      );
    return O.createElement(r.Provider, { value: l }, i.children);
  }
  return { Consumer: a, Provider: o, useTheme: n };
}
var ck = sk(function () {
    return { mode: "light" };
  }),
  lk = ck.useTheme;
function uk(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function dk(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var fk = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(dk(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = uk(a);
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
  Vo = "-moz-",
  Q = "-webkit-",
  ch = "comm",
  _c = "rule",
  mc = "decl",
  vk = "@import",
  lh = "@keyframes",
  pk = "@layer",
  hk = Math.abs,
  fi = String.fromCharCode,
  gk = Object.assign;
function bk(e, t) {
  return Se(e, 0) ^ 45
    ? (((((((t << 2) ^ Se(e, 0)) << 2) ^ Se(e, 1)) << 2) ^ Se(e, 2)) << 2) ^ Se(e, 3)
    : 0;
}
function uh(e) {
  return e.trim();
}
function _k(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, r) {
  return e.replace(t, r);
}
function Gs(e, t) {
  return e.indexOf(t);
}
function Se(e, t) {
  return e.charCodeAt(t) | 0;
}
function Fa(e, t, r) {
  return e.slice(t, r);
}
function Et(e) {
  return e.length;
}
function yc(e) {
  return e.length;
}
function uo(e, t) {
  return (t.push(e), e);
}
function mk(e, t) {
  return e.map(t).join("");
}
var vi = 1,
  un = 1,
  dh = 0,
  qe = 0,
  ye = 0,
  _n = "";
function pi(e, t, r, n, a, o, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: o,
    line: vi,
    column: un,
    length: i,
    return: "",
  };
}
function va(e, t) {
  return gk(pi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function yk() {
  return ye;
}
function wk() {
  return ((ye = qe > 0 ? Se(_n, --qe) : 0), un--, ye === 10 && ((un = 1), vi--), ye);
}
function We() {
  return ((ye = qe < dh ? Se(_n, qe++) : 0), un++, ye === 10 && ((un = 1), vi++), ye);
}
function Dt() {
  return Se(_n, qe);
}
function Oo() {
  return qe;
}
function Ja(e, t) {
  return Fa(_n, e, t);
}
function $a(e) {
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
function fh(e) {
  return ((vi = un = 1), (dh = Et((_n = e))), (qe = 0), []);
}
function vh(e) {
  return ((_n = ""), e);
}
function So(e) {
  return uh(Ja(qe - 1, Ks(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function kk(e) {
  for (; (ye = Dt()) && ye < 33; ) We();
  return $a(e) > 2 || $a(ye) > 3 ? "" : " ";
}
function Ok(e, t) {
  for (; --t && We() && !(ye < 48 || ye > 102 || (ye > 57 && ye < 65) || (ye > 70 && ye < 97)); );
  return Ja(e, Oo() + (t < 6 && Dt() == 32 && We() == 32));
}
function Ks(e) {
  for (; We(); )
    switch (ye) {
      case e:
        return qe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ks(ye);
        break;
      case 40:
        e === 41 && Ks(e);
        break;
      case 92:
        We();
        break;
    }
  return qe;
}
function Sk(e, t) {
  for (; We() && e + ye !== 57; ) if (e + ye === 84 && Dt() === 47) break;
  return "/*" + Ja(t, qe - 1) + "*" + fi(e === 47 ? e : We());
}
function xk(e) {
  for (; !$a(Dt()); ) We();
  return Ja(e, qe);
}
function Ek(e) {
  return vh(xo("", null, null, null, [""], (e = fh(e)), 0, [0], e));
}
function xo(e, t, r, n, a, o, i, c, s) {
  for (
    var l = 0,
      u = 0,
      d = i,
      f = 0,
      p = 0,
      h = 0,
      v = 1,
      g = 1,
      b = 1,
      y = 0,
      w = "",
      k = a,
      m = o,
      S = n,
      E = w;
    g;

  )
    switch (((h = y), (y = We()))) {
      case 40:
        if (h != 108 && Se(E, d - 1) == 58) {
          Gs((E += ee(So(y), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += So(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += kk(h);
        break;
      case 92:
        E += Ok(Oo() - 1, 7);
        continue;
      case 47:
        switch (Dt()) {
          case 42:
          case 47:
            uo(Ck(Sk(We(), Oo()), t, r), s);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * v:
        c[l++] = Et(E) * b;
      case 125 * v:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            (b == -1 && (E = ee(E, /\f/g, "")),
              p > 0 &&
                Et(E) - d &&
                uo(p > 32 ? Bd(E + ";", n, r, d - 1) : Bd(ee(E, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            E += ";";
          default:
            if ((uo((S = $d(E, t, r, l, u, a, c, w, (k = []), (m = []), d)), o), y === 123))
              if (u === 0) xo(E, t, S, S, k, o, d, c, m);
              else
                switch (f === 99 && Se(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    xo(
                      e,
                      S,
                      S,
                      n && uo($d(e, S, S, 0, 0, a, c, w, a, (k = []), d), m),
                      a,
                      m,
                      d,
                      c,
                      n ? k : m,
                    );
                    break;
                  default:
                    xo(E, S, S, S, [""], m, 0, c, m);
                }
        }
        ((l = u = p = 0), (v = b = 1), (w = E = ""), (d = i));
        break;
      case 58:
        ((d = 1 + Et(E)), (p = h));
      default:
        if (v < 1) {
          if (y == 123) --v;
          else if (y == 125 && v++ == 0 && wk() == 125) continue;
        }
        switch (((E += fi(y)), y * v)) {
          case 38:
            b = u > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            ((c[l++] = (Et(E) - 1) * b), (b = 1));
            break;
          case 64:
            (Dt() === 45 && (E += So(We())), (f = Dt()), (u = d = Et((w = E += xk(Oo())))), y++);
            break;
          case 45:
            h === 45 && Et(E) == 2 && (v = 0);
        }
    }
  return o;
}
function $d(e, t, r, n, a, o, i, c, s, l, u) {
  for (var d = a - 1, f = a === 0 ? o : [""], p = yc(f), h = 0, v = 0, g = 0; h < n; ++h)
    for (var b = 0, y = Fa(e, d + 1, (d = hk((v = i[h])))), w = e; b < p; ++b)
      (w = uh(v > 0 ? f[b] + " " + y : ee(y, /&\f/g, f[b]))) && (s[g++] = w);
  return pi(e, t, r, a === 0 ? _c : c, s, l, u);
}
function Ck(e, t, r) {
  return pi(e, t, r, ch, fi(yk()), Fa(e, 2, -2), 0);
}
function Bd(e, t, r, n) {
  return pi(e, t, r, mc, Fa(e, 0, n), Fa(e, n + 1, -1), n);
}
function nn(e, t) {
  for (var r = "", n = yc(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function Rk(e, t, r, n) {
  switch (e.type) {
    case pk:
      if (e.children.length) break;
    case vk:
    case mc:
      return (e.return = e.return || e.value);
    case ch:
      return "";
    case lh:
      return (e.return = e.value + "{" + nn(e.children, n) + "}");
    case _c:
      e.value = e.props.join(",");
  }
  return Et((r = nn(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function Pk(e) {
  var t = yc(e);
  return function (r, n, a, o) {
    for (var i = "", c = 0; c < t; c++) i += e[c](r, n, a, o) || "";
    return i;
  };
}
function Ak(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Ik(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var jk = function (t, r, n) {
    for (var a = 0, o = 0; (a = o), (o = Dt()), a === 38 && o === 12 && (r[n] = 1), !$a(o); ) We();
    return Ja(t, qe);
  },
  Dk = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch ($a(a)) {
        case 0:
          (a === 38 && Dt() === 12 && (r[n] = 1), (t[n] += jk(qe - 1, r, n)));
          break;
        case 2:
          t[n] += So(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = Dt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += fi(a);
      }
    while ((a = We()));
    return t;
  },
  Tk = function (t, r) {
    return vh(Dk(fh(t), r));
  },
  zd = new WeakMap(),
  Mk = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !zd.get(n)) && !a) {
        zd.set(t, !0);
        for (var o = [], i = Tk(r, o), c = n.props, s = 0, l = 0; s < i.length; s++)
          for (var u = 0; u < c.length; u++, l++)
            t.props[l] = o[s] ? i[s].replace(/&\f/g, c[u]) : c[u] + " " + i[s];
      }
    }
  },
  Lk = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function ph(e, t) {
  switch (bk(e, t)) {
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
      return Q + e + Vo + e + Pe + e + e;
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
      if (Et(e) - 1 - t > 6)
        switch (Se(e, t + 1)) {
          case 109:
            if (Se(e, t + 4) !== 45) break;
          case 102:
            return (
              ee(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Q + "$2-$3$1" + Vo + (Se(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Gs(e, "stretch") ? ph(ee(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Se(e, t + 1) !== 115) break;
    case 6444:
      switch (Se(e, Et(e) - 3 - (~Gs(e, "!important") && 10))) {
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
var Nk = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case mc:
          t.return = ph(t.value, t.length);
          break;
        case lh:
          return nn([va(t, { value: ee(t.value, "@", "@" + Q) })], a);
        case _c:
          if (t.length)
            return mk(t.props, function (o) {
              switch (_k(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return nn([va(t, { props: [ee(o, /:(read-\w+)/, ":" + Vo + "$1")] })], a);
                case "::placeholder":
                  return nn(
                    [
                      va(t, { props: [ee(o, /:(plac\w+)/, ":" + Q + "input-$1")] }),
                      va(t, { props: [ee(o, /:(plac\w+)/, ":" + Vo + "$1")] }),
                      va(t, { props: [ee(o, /:(plac\w+)/, Pe + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  Fk = [Nk],
  $k = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (v) {
        var g = v.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || Fk,
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
      l = [Mk, Lk];
    {
      var u,
        d = [
          Rk,
          Ak(function (v) {
            u.insert(v);
          }),
        ],
        f = Pk(l.concat(a, d)),
        p = function (g) {
          return nn(Ek(g), f);
        };
      s = function (g, b, y, w) {
        ((u = y), p(g ? g + "{" + b.styles + "}" : b.styles), w && (h.inserted[b.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new fk({
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
  fs = { exports: {} },
  ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ud;
function Bk() {
  if (Ud) return ne;
  Ud = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    n = e ? Symbol.for("react.fragment") : 60107,
    a = e ? Symbol.for("react.strict_mode") : 60108,
    o = e ? Symbol.for("react.profiler") : 60114,
    i = e ? Symbol.for("react.provider") : 60109,
    c = e ? Symbol.for("react.context") : 60110,
    s = e ? Symbol.for("react.async_mode") : 60111,
    l = e ? Symbol.for("react.concurrent_mode") : 60111,
    u = e ? Symbol.for("react.forward_ref") : 60112,
    d = e ? Symbol.for("react.suspense") : 60113,
    f = e ? Symbol.for("react.suspense_list") : 60120,
    p = e ? Symbol.for("react.memo") : 60115,
    h = e ? Symbol.for("react.lazy") : 60116,
    v = e ? Symbol.for("react.block") : 60121,
    g = e ? Symbol.for("react.fundamental") : 60117,
    b = e ? Symbol.for("react.responder") : 60118,
    y = e ? Symbol.for("react.scope") : 60119;
  function w(m) {
    if (typeof m == "object" && m !== null) {
      var S = m.$$typeof;
      switch (S) {
        case t:
          switch (((m = m.type), m)) {
            case s:
            case l:
            case n:
            case o:
            case a:
            case d:
              return m;
            default:
              switch (((m = m && m.$$typeof), m)) {
                case c:
                case u:
                case h:
                case p:
                case i:
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
  function k(m) {
    return w(m) === l;
  }
  return (
    (ne.AsyncMode = s),
    (ne.ConcurrentMode = l),
    (ne.ContextConsumer = c),
    (ne.ContextProvider = i),
    (ne.Element = t),
    (ne.ForwardRef = u),
    (ne.Fragment = n),
    (ne.Lazy = h),
    (ne.Memo = p),
    (ne.Portal = r),
    (ne.Profiler = o),
    (ne.StrictMode = a),
    (ne.Suspense = d),
    (ne.isAsyncMode = function (m) {
      return k(m) || w(m) === s;
    }),
    (ne.isConcurrentMode = k),
    (ne.isContextConsumer = function (m) {
      return w(m) === c;
    }),
    (ne.isContextProvider = function (m) {
      return w(m) === i;
    }),
    (ne.isElement = function (m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }),
    (ne.isForwardRef = function (m) {
      return w(m) === u;
    }),
    (ne.isFragment = function (m) {
      return w(m) === n;
    }),
    (ne.isLazy = function (m) {
      return w(m) === h;
    }),
    (ne.isMemo = function (m) {
      return w(m) === p;
    }),
    (ne.isPortal = function (m) {
      return w(m) === r;
    }),
    (ne.isProfiler = function (m) {
      return w(m) === o;
    }),
    (ne.isStrictMode = function (m) {
      return w(m) === a;
    }),
    (ne.isSuspense = function (m) {
      return w(m) === d;
    }),
    (ne.isValidElementType = function (m) {
      return (
        typeof m == "string" ||
        typeof m == "function" ||
        m === n ||
        m === l ||
        m === o ||
        m === a ||
        m === d ||
        m === f ||
        (typeof m == "object" &&
          m !== null &&
          (m.$$typeof === h ||
            m.$$typeof === p ||
            m.$$typeof === i ||
            m.$$typeof === c ||
            m.$$typeof === u ||
            m.$$typeof === g ||
            m.$$typeof === b ||
            m.$$typeof === y ||
            m.$$typeof === v))
      );
    }),
    (ne.typeOf = w),
    ne
  );
}
var qd;
function zk() {
  return (qd || ((qd = 1), (fs.exports = Bk())), fs.exports);
}
var vs, Vd;
function Uk() {
  if (Vd) return vs;
  Vd = 1;
  var e = zk(),
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
    l = Object.getOwnPropertySymbols,
    u = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    f = Object.prototype;
  function p(h, v, g) {
    if (typeof v != "string") {
      if (f) {
        var b = d(v);
        b && b !== f && p(h, b, g);
      }
      var y = s(v);
      l && (y = y.concat(l(v)));
      for (var w = i(h), k = i(v), m = 0; m < y.length; ++m) {
        var S = y[m];
        if (!r[S] && !(g && g[S]) && !(k && k[S]) && !(w && w[S])) {
          var E = u(v, S);
          try {
            c(h, S, E);
          } catch {}
        }
      }
    }
    return h;
  }
  return ((vs = p), vs);
}
Uk();
var qk = !0;
function hh(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var wc = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || qk === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  gh = function (t, r, n) {
    wc(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do (t.insert(r === o ? "." + a : "", o, t.sheet, !0), (o = o.next));
      while (o !== void 0);
    }
  };
function Vk(e) {
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
var Gk = {
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
  Kk = /[A-Z]|^ms/g,
  Hk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  bh = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Gd = function (t) {
    return t != null && typeof t != "boolean";
  },
  ps = Ik(function (e) {
    return bh(e) ? e : e.replace(Kk, "-$&").toLowerCase();
  }),
  Kd = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(Hk, function (n, a, o) {
            return ((Ct = { name: a, styles: o, next: Ct }), a);
          });
    }
    return Gk[t] !== 1 && !bh(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Ba(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1) return ((Ct = { name: a.name, styles: a.styles, next: Ct }), a.name);
      var o = r;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; )
            ((Ct = { name: i.name, styles: i.styles, next: Ct }), (i = i.next));
        var c = o.styles + ";";
        return c;
      }
      return Wk(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = Ct,
          l = r(e);
        return ((Ct = s), Ba(e, t, l));
      }
      break;
    }
  }
  var u = r;
  if (t == null) return u;
  var d = t[u];
  return d !== void 0 ? d : u;
}
function Wk(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += Ba(e, t, r[a]) + ";";
  else
    for (var o in r) {
      var i = r[o];
      if (typeof i != "object") {
        var c = i;
        t != null && t[c] !== void 0
          ? (n += o + "{" + t[c] + "}")
          : Gd(c) && (n += ps(o) + ":" + Kd(o, c) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var s = 0; s < i.length; s++) Gd(i[s]) && (n += ps(o) + ":" + Kd(o, i[s]) + ";");
      else {
        var l = Ba(e, t, i);
        switch (o) {
          case "animation":
          case "animationName": {
            n += ps(o) + ":" + l + ";";
            break;
          }
          default:
            n += o + "{" + l + "}";
        }
      }
    }
  return n;
}
var Hd = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Ct;
function kc(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  Ct = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) ((n = !1), (a += Ba(r, t, o)));
  else {
    var i = o;
    a += i[0];
  }
  for (var c = 1; c < e.length; c++)
    if (((a += Ba(r, t, e[c])), n)) {
      var s = o;
      a += s[c];
    }
  Hd.lastIndex = 0;
  for (var l = "", u; (u = Hd.exec(a)) !== null; ) l += "-" + u[1];
  var d = Vk(a) + l;
  return { name: d, styles: a, next: Ct };
}
var Jk = function (t) {
    return t();
  },
  Yk = Bc.useInsertionEffect ? Bc.useInsertionEffect : !1,
  _h = Yk || Jk,
  mh = _.createContext(typeof HTMLElement < "u" ? $k({ key: "css" }) : null);
mh.Provider;
var yh = function (t) {
    return _.forwardRef(function (r, n) {
      var a = _.useContext(mh);
      return t(r, a, n);
    });
  },
  wh = _.createContext({}),
  Oc = {}.hasOwnProperty,
  Hs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Xk = function (t, r) {
    var n = {};
    for (var a in r) Oc.call(r, a) && (n[a] = r[a]);
    return ((n[Hs] = t), n);
  },
  Zk = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      wc(r, n, a),
      _h(function () {
        return gh(r, n, a);
      }),
      null
    );
  },
  Qk = yh(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[Hs],
      o = [n],
      i = "";
    typeof e.className == "string"
      ? (i = hh(t.registered, o, e.className))
      : e.className != null && (i = e.className + " ");
    var c = kc(o, void 0, _.useContext(wh));
    i += t.key + "-" + c.name;
    var s = {};
    for (var l in e) Oc.call(e, l) && l !== "css" && l !== Hs && (s[l] = e[l]);
    return (
      (s.className = i),
      r && (s.ref = r),
      _.createElement(
        _.Fragment,
        null,
        _.createElement(Zk, { cache: t, serialized: c, isStringTag: typeof a == "string" }),
        _.createElement(a, s),
      )
    );
  }),
  e1 = Qk,
  Xt = function (t, r) {
    var n = arguments;
    if (r == null || !Oc.call(r, "css")) return _.createElement.apply(void 0, n);
    var a = n.length,
      o = new Array(a);
    ((o[0] = e1), (o[1] = Xk(t, r)));
    for (var i = 2; i < a; i++) o[i] = n[i];
    return _.createElement.apply(null, o);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Xt || (Xt = {}));
function $t() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return kc(t);
}
var t1 = function e(t) {
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
function r1(e, t, r) {
  var n = [],
    a = hh(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var n1 = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      _h(function () {
        for (var a = 0; a < n.length; a++) gh(r, n[a], !1);
      }),
      null
    );
  },
  a1 = yh(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++) l[u] = arguments[u];
        var d = kc(l, t.registered);
        return (r.push(d), wc(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++) l[u] = arguments[u];
        return r1(t.registered, n, t1(l));
      },
      o = { css: n, cx: a, theme: _.useContext(wh) },
      i = e.children(o);
    return _.createElement(
      _.Fragment,
      null,
      _.createElement(n1, { cache: t, serializedArr: r }),
      i,
    );
  });
function kh(e, t) {
  var r = _.useRef(!0);
  _.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Oh = 2,
  Ws = $t({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Oh,
  }),
  Js = $t({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Oh,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  o1 = $t({
    "&:focus": Ws,
    "&:focus-visible": Ws,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  i1 = $t({
    "&:focus": Js,
    "&:focus-visible": Js,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Sh = _.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? Js : Ws,
      o = r ? i1 : o1,
      i = typeof n > "u" ? o : n === "on" && a;
    return Xt(a1, null, function (c) {
      var s = c.css,
        l = c.cx;
      return _.Children.only(
        i ? _.cloneElement(t, { className: l([s(i), t.props.className]) }) : t,
      );
    });
  });
Sh.displayName = "FocusRing";
function Kt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var s1 = 9;
function Wd(e) {
  e.keyCode !== s1 && Kt(e);
}
var c1 = {
    onMouseDownCapture: Kt,
    onMouseUpCapture: Kt,
    onKeyDownCapture: Wd,
    onKeyUpCapture: Wd,
    onTouchStartCapture: Kt,
    onTouchEndCapture: Kt,
    onPointerDownCapture: Kt,
    onPointerUpCapture: Kt,
    onClickCapture: Kt,
    onClick: Kt,
  },
  l1 = {};
function u1(e) {
  var t = e.isInteractive;
  return t ? l1 : c1;
}
var Jd = "rgba(179, 212, 255, 0.6)",
  Yd = {
    background: {
      default: {
        default: {
          light: "var(--ds-background-neutral, ".concat(Xn, ")"),
          dark: "var(--ds-background-neutral, ".concat(Zn, ")"),
        },
        hover: {
          light: "var(--ds-background-neutral-hovered, ".concat(Mu, ")"),
          dark: "var(--ds-background-neutral-hovered, ".concat(Lu, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-pressed, ".concat(Jd, ")"),
          dark: "var(--ds-background-neutral-pressed, ".concat(ao, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Xn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Zn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(rt, ")"),
          dark: "var(--ds-background-selected, ".concat(qr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(rt, ")"),
          dark: "var(--ds-background-selected, ".concat(qr, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-background-brand-bold, ".concat(Wt, ")"),
          dark: "var(--ds-background-brand-bold, ".concat(ju, ")"),
        },
        hover: {
          light: "var(--ds-background-brand-bold-hovered, ".concat(Tu, ")"),
          dark: "var(--ds-background-brand-bold-hovered, ".concat(ao, ")"),
        },
        active: {
          light: "var(--ds-background-brand-bold-pressed, ".concat(Fs, ")"),
          dark: "var(--ds-background-brand-bold-pressed, ".concat(Du, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Xn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Zn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(rt, ")"),
          dark: "var(--ds-background-selected, ".concat(qr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(rt, ")"),
          dark: "var(--ds-background-selected, ".concat(qr, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-background-warning-bold, ".concat(Iu, ")"),
          dark: "var(--ds-background-warning-bold, ".concat(Iu, ")"),
        },
        hover: {
          light: "var(--ds-background-warning-bold-hovered, ".concat(Au, ")"),
          dark: "var(--ds-background-warning-bold-hovered, ".concat(Au, ")"),
        },
        active: {
          light: "var(--ds-background-warning-bold-pressed, ".concat(zr, ")"),
          dark: "var(--ds-background-warning-bold-pressed, ".concat(zr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Xn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Zn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(zr, ")"),
          dark: "var(--ds-background-selected, ".concat(zr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(zr, ")"),
          dark: "var(--ds-background-selected, ".concat(zr, ")"),
        },
      },
      danger: {
        default: {
          light: "var(--ds-background-danger-bold, ".concat(Pu, ")"),
          dark: "var(--ds-background-danger-bold, ".concat(Pu, ")"),
        },
        hover: {
          light: "var(--ds-background-danger-bold-hovered, ".concat(Ru, ")"),
          dark: "var(--ds-background-danger-bold-hovered, ".concat(Ru, ")"),
        },
        active: {
          light: "var(--ds-background-danger-bold-pressed, ".concat(Br, ")"),
          dark: "var(--ds-background-danger-bold-pressed, ".concat(Br, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Xn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Zn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Br, ")"),
          dark: "var(--ds-background-selected, ".concat(Br, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Br, ")"),
          dark: "var(--ds-background-selected, ".concat(Br, ")"),
        },
      },
      link: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(rt, ")"),
          dark: "var(--ds-background-selected, ".concat(Fe, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(rt, ")"),
          dark: "var(--ds-background-selected, ".concat(Fe, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        hover: {
          light: "var(--ds-background-neutral-subtle-hovered, ".concat(Mu, ")"),
          dark: "var(--ds-background-neutral-subtle-hovered, ".concat(Lu, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-subtle-pressed, ".concat(Jd, ")"),
          dark: "var(--ds-background-neutral-subtle-pressed, ".concat(ao, ")"),
        },
        disabled: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(rt, ")"),
          dark: "var(--ds-background-selected, ".concat(qr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(rt, ")"),
          dark: "var(--ds-background-selected, ".concat(qr, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(rt, ")"),
          dark: "var(--ds-background-selected, ".concat(Fe, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(rt, ")"),
          dark: "var(--ds-background-selected, ".concat(Fe, ")"),
        },
      },
    },
    color: {
      default: {
        default: {
          light: "var(--ds-text, ".concat(ln, ")"),
          dark: "var(--ds-text, ".concat(ht, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Wt, ")"),
          dark: "var(--ds-text, ".concat(Wt, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(_r, ")"),
          dark: "var(--ds-text-disabled, ".concat(Qn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Fe, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Fe, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-text-inverse, ".concat(or, ")"),
          dark: "var(--ds-text-inverse, ".concat(Qn, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(_r, ")"),
          dark: "var(--ds-text-disabled, ".concat(Qn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Fe, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Fe, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-text-warning-inverse, ".concat(Ur, ")"),
          dark: "var(--ds-text-warning-inverse, ".concat(Ur, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(_r, ")"),
          dark: "var(--ds-text-disabled, ".concat(Qn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ur, ")"),
          dark: "var(--ds-text-selected, ".concat(Ur, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ur, ")"),
          dark: "var(--ds-text-selected, ".concat(Ur, ")"),
        },
      },
      danger: {
        default: {
          light: "var(--ds-text-inverse, ".concat(or, ")"),
          dark: "var(--ds-text-inverse, ".concat(or, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(_r, ")"),
          dark: "var(--ds-text-disabled, ".concat(Qn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(or, ")"),
          dark: "var(--ds-text-selected, ".concat(or, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(or, ")"),
          dark: "var(--ds-text-selected, ".concat(or, ")"),
        },
      },
      link: {
        default: {
          light: "var(--ds-link, ".concat(Wt, ")"),
          dark: "var(--ds-link, ".concat(ju, ")"),
        },
        hover: {
          light: "var(--ds-link, ".concat(Tu, ")"),
          dark: "var(--ds-link, ".concat(ao, ")"),
        },
        active: {
          light: "var(--ds-link-pressed, ".concat(Fs, ")"),
          dark: "var(--ds-link-pressed, ".concat(Du, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(_r, ")"),
          dark: "var(--ds-text-disabled, ".concat(Hi, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Fe, ")"),
          dark: "var(--ds-text-selected, ".concat(rt, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Fe, ")"),
          dark: "var(--ds-text-selected, ".concat(rt, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-text, ".concat(ln, ")"),
          dark: "var(--ds-text, ".concat(ht, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Wt, ")"),
          dark: "var(--ds-text, ".concat(Wt, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(_r, ")"),
          dark: "var(--ds-text-disabled, ".concat(Hi, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Fe, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Fe, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-text-subtle, ".concat(Ry, ")"),
          dark: "var(--ds-text-subtle, ".concat(ht, ")"),
        },
        hover: {
          light: "var(--ds-text-subtle, ".concat(Cy, ")"),
          dark: "var(--ds-text-subtle, ".concat(xy, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Py, ")"),
          dark: "var(--ds-text, ".concat(Ay, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(_r, ")"),
          dark: "var(--ds-text-disabled, ".concat(Hi, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Fe, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Fe, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
      },
    },
  };
function Xd(e, t) {
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
function ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Xd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var cr = 8,
  hs = ["default", "primary", "danger", "warning"],
  Ys = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  d1 = { default: Ys.default, compact: Ys.compact, none: "inherit" },
  f1 = {
    default: "0 ".concat(cr + cr / 4, "px"),
    compact: "0 ".concat(cr + cr / 4, "px"),
    none: "0",
  },
  v1 = { compact: "0 ".concat(cr / 4, "px"), default: "0 ".concat(cr / 4, "px"), none: "0" },
  p1 = { default: "middle", compact: "middle", none: "baseline" },
  xh = { content: "0 ".concat(cr / 4, "px"), icon: "0 ".concat(cr / 4, "px") },
  Eh = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  h1 = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #172B4D)",
    "&::after": ie(ie({}, Eh), {}, { content: '""', borderColor: "var(--ds-border, #091E4224)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #091E4224)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #091E424F)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  g1 = {
    background: "var(--ds-background-brand-bold, #0C66E4)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #0055CC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #09326C)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #0C66E4)",
    },
  },
  b1 = {
    background: "transparent",
    color: "var(--ds-link, #0C66E4)",
    "&:hover": { color: "var(--ds-link, #0C66E4)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #0055CC)", textDecoration: "underline" },
  },
  _1 = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #091E420F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #091E4224)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  m1 = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": {
      background: "transparent",
      color: "var(--ds-text-subtle, #44546F)",
      textDecoration: "underline",
    },
    "&:active": {
      background: "transparent",
      color: "var(--ds-text, #172B4D)",
      textDecoration: "underline",
    },
  },
  y1 = {
    background: "var(--ds-background-warning-bold, #F5CD47)",
    color: "var(--ds-text-warning-inverse, #172B4D)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #E2B203)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #CF9F02)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #F5CD47)",
    },
  },
  w1 = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #5D1F1A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  k1 = {
    background: "var(--ds-background-selected, #E9F2FF)",
    color: "var(--ds-text-selected, #0C66E4)",
    "&:not([disabled])::after": ie(
      ie({}, Eh),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #0C66E4)" },
    ),
  },
  Zd = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function Qd(e) {
  var t = e.group,
    r = e.key,
    n = e.mode,
    a = t[r] || t.default;
  return a[n];
}
function Yr(e) {
  var t = e.appearance,
    r = e.key,
    n = e.mode;
  return {
    background: Qd({ group: Yd.background[t], key: r, mode: n }),
    color: "".concat(Qd({ group: Yd.color[t], key: r, mode: n }), " !important"),
  };
}
function O1(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.mode,
    a = e.isSelected,
    o = e.shouldFitContainer,
    i = e.isOnlySingleIcon,
    c = Yr({ appearance: t, key: a ? "selected" : "default", mode: n });
  return ie(
    ie(
      ie(
        ie(
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
          },
          !pe("platform-component-visual-refresh") && c,
        ),
        {},
        {
          cursor: "pointer",
          height: Ys[r],
          lineHeight: d1[r],
          padding: i ? v1[r] : f1[r],
          verticalAlign: p1[r],
          width: o ? "100%" : "auto",
          justifyContent: "center",
        },
        !pe("platform-component-visual-refresh") &&
          ie(
            ie(
              {
                "&:visited": ie({}, c),
                "&:hover": ie(
                  ie({}, Yr({ appearance: t, key: a ? "selected" : "hover", mode: n })),
                  {},
                  {
                    textDecoration:
                      !a && (t === "link" || t === "subtle-link") ? "underline" : "inherit",
                    transitionDuration: "0s, 0.15s",
                  },
                ),
                "&:active": ie(
                  ie({}, Yr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                '&[data-firefox-is-active="true"]': ie(
                  ie({}, Yr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                "&[disabled]": ie(
                  ie({}, Yr({ appearance: t, key: "disabled", mode: n })),
                  {},
                  { cursor: "not-allowed", textDecoration: "none" },
                ),
              },
              Zd,
            ),
            {},
            {
              '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active':
                ie({}, Yr({ appearance: t, key: a ? "selected" : "default", mode: n })),
            },
          ),
      ),
      pe("platform-component-visual-refresh") &&
        (a
          ? k1
          : ie(
              ie(
                ie(
                  ie(
                    ie(
                      ie(
                        ie(ie({}, t === "default" && h1), t === "primary" && g1),
                        t === "link" && b1,
                      ),
                      t === "subtle" && _1,
                    ),
                    t === "subtle-link" && m1,
                  ),
                  t === "warning" && y1,
                ),
                t === "danger" && w1,
              ),
              {},
              {
                "&[disabled]": {
                  color: "var(--ds-text-disabled, #091E424F)",
                  backgroundColor: hs.includes(t)
                    ? "var(--ds-background-disabled, #091E4208)"
                    : "transparent",
                  cursor: "not-allowed",
                  textDecoration: "none",
                  "&:hovered": {
                    backgroundColor: hs.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                  "&:active": {
                    backgroundColor: hs.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                },
              },
              Zd,
            )),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function ef(e) {
  var t = e.spacing;
  return $t({
    display: "flex",
    margin: t === "none" ? 0 : xh.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function S1(e) {
  var t = e.spacing;
  return $t({
    margin: t === "none" ? 0 : xh.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function x1(e) {
  var t = e.hasOverlay;
  return $t({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
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
  Sc = function (t) {
    return t && _.isValidElement(t) && t.type === bc;
  },
  C1 = [
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
  R1 = { "> *": { pointerEvents: "none" } },
  P1 = $t({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  A1 = $t({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  tf = function (t, r) {
    return !t || Sc(t) ? null : r;
  },
  I1 = function (t, r) {
    return Sc(t) ? t : t ? Xt("span", { css: r }, t) : null;
  },
  j1 = O.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      a = t.appearance,
      o = a === void 0 ? "default" : a,
      i = t.autoFocus,
      c = i === void 0 ? !1 : i,
      s = t.buttonCss,
      l = t.children,
      u = t.className,
      d = t.href,
      f = t.component,
      p = f === void 0 ? (d ? "a" : "button") : f,
      h = t.iconAfter,
      v = t.iconBefore,
      g = t.interactionName,
      b = t.isDisabled,
      y = b === void 0 ? !1 : b,
      w = t.isSelected,
      k = w === void 0 ? !1 : w,
      m = t.onBlur,
      S = t.onClick,
      E = S === void 0 ? Ae : S,
      A = t.onFocus,
      D = t.onMouseDown,
      P = D === void 0 ? Ae : D,
      M = t.overlay;
    t.shouldFitContainer;
    var z = t.spacing,
      $ = z === void 0 ? "default" : z,
      q = t.tabIndex,
      U = q === void 0 ? 0 : q,
      V = t.type,
      G = V === void 0 ? (d ? void 0 : "button") : V,
      H = t.testId,
      F = te(t, C1),
      j = _.useRef(),
      me = _.useCallback(
        function (ve) {
          if (((j.current = ve), r != null)) {
            if (typeof r == "function") {
              r(ve);
              return;
            }
            r.current = ve;
          }
        },
        [j, r],
      );
    kh(j, c);
    var se = _.useContext(dc),
      le = _.useCallback(
        function (ve, Le) {
          (se && se.tracePress(g, ve.timeStamp), E(ve, Le));
        },
        [E, se, g],
      ),
      fe = cn({
        fn: le,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "23.5.2",
        analyticsData: n,
      }),
      he = _.useCallback(
        function (ve) {
          (ve.preventDefault(), P(ve));
        },
        [P],
      );
    _.useEffect(
      function () {
        var ve = j.current;
        y && ve && ve === document.activeElement && ve.blur();
      },
      [y],
    );
    var ue = !!M,
      Te = $t(x1({ hasOverlay: ue })),
      ke = !y && !ue,
      Me = {};
    return (
      (k || y || o === "warning") &&
        (Me = {
          "[data-theme] & circle": {
            stroke: "".concat(
              k || y
                ? "var(--ds-icon-subtle, ".concat(ln, ")")
                : "var(--ds-icon-warning-inverse, ".concat(ln, ")"),
              " !important",
            ),
          },
        }),
      Xt(
        Sh,
        null,
        Xt(
          p,
          Z(
            {},
            F,
            {
              ref: me,
              className: u,
              css: [s, ke ? null : R1],
              "data-has-overlay": ue ? !0 : void 0,
              "data-testid": H,
              disabled: y,
              href: ke ? d : void 0,
              onBlur: m,
              onClick: fe,
              onFocus: A,
              onMouseDown: he,
              tabIndex: y ? -1 : U,
              type: G,
            },
            u1({ isInteractive: ke }),
          ),
          v ? Xt("span", { css: [Te, ef({ spacing: $ }), tf(l, P1)] }, v) : null,
          I1(l, [Te, S1({ spacing: $ })]),
          h ? Xt("span", { css: [Te, ef({ spacing: $ }), tf(l, A1)] }, h) : null,
          M ? Xt("span", { css: [E1, Me] }, M) : null,
        ),
      )
    );
  });
function D1(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Sc(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var T1 = [
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
  rf = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  xc = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        o = t.children,
        i = t.iconBefore,
        c = t.iconAfter,
        s = t.isSelected,
        l = s === void 0 ? !1 : s,
        u = t.onMouseDown,
        d = u === void 0 ? Ae : u,
        f = t.onMouseUp,
        p = f === void 0 ? Ae : f,
        h = t.shouldFitContainer,
        v = h === void 0 ? !1 : h,
        g = t.spacing,
        b = g === void 0 ? "default" : g,
        y = te(t, T1),
        w = lk(),
        k = w.mode,
        m = D1({ children: o, iconBefore: i, iconAfter: c }),
        S = _.useState(!1),
        E = J(S, 2),
        A = E[0],
        D = E[1],
        P = _.useCallback(
          function ($) {
            (d($), rf && D(!0));
          },
          [d, D],
        ),
        M = _.useCallback(
          function ($) {
            (p($), rf && D(!1));
          },
          [p, D],
        ),
        z = _.useMemo(
          function () {
            return O1({
              appearance: a,
              spacing: b,
              mode: k,
              isSelected: l,
              shouldFitContainer: v,
              isOnlySingleIcon: m,
            });
          },
          [a, b, k, l, v, m],
        );
      return O.createElement(
        j1,
        Z({}, y, {
          ref: r,
          appearance: a,
          buttonCss: z,
          children: o,
          "data-firefox-is-active": A ? !0 : void 0,
          iconAfter: c,
          iconBefore: i,
          isSelected: l,
          onMouseDown: P,
          onMouseUp: M,
          spacing: b,
        }),
      );
    }),
  );
xc.displayName = "Button";
function nf(e) {
  return O.createElement(xc, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function M1(e) {
  return O.createElement(xc, Z({}, e, { appearance: "subtle" }));
}
var L1 = { container: "_1e0c1txw _kqswh2mm" };
function N1(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return O.createElement(
    ui,
    { as: "li", testId: r, key: t, xcss: L1.container, paddingInline: "space.100" },
    O.createElement(
      rh,
      { testId: r && "".concat(r, "-text") },
      O.createElement(bc, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var af = {},
  of =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function F1(e, t) {
  return !!(e === t || (of(e) && of(t)));
}
function $1(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!F1(e[r], t[r])) return !1;
  return !0;
}
function B1(e, t) {
  t === void 0 && (t = $1);
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
    l = s > o,
    u = l && o - 4 < r,
    d = l && r < s - o + 3,
    f = B1(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
      return t.slice(g, b).map(function (y, w) {
        return c(y, g + w, a);
      });
    });
  if (!l) return f(0, s);
  if (u && !d) {
    var p = o - 2;
    return [].concat(
      Ge(f(0, 1)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: s - p })],
      Ge(f(s - p)),
    );
  }
  if (!u && d) {
    var h = o - 2;
    return [].concat(
      Ge(f(0, h)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: h + 1, to: s - 1 })],
      Ge(f(s - 1)),
    );
  }
  var v = o - 4;
  return [].concat(
    Ge(f(0, 1)),
    [
      i({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(v / 2),
      }),
    ],
    Ge(f(r - Math.floor(v / 2), r + v - 1)),
    [i({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: s - 1 })],
    Ge(f(s - 1)),
  );
};
function sf(e, t) {
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
      ? sf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Xs = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  q1 = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.14",
  };
function cf(e) {
  var t = e.chevronDirection,
    r = t === "left" ? iw : dw;
  return O.createElement(
    ui,
    { as: "span", xcss: Xs.navigatorIconWrapper },
    O.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function V1(e, t) {
  var r = e.components,
    n = r === void 0 ? af : r,
    a = e.defaultSelectedIndex,
    o = a === void 0 ? 0 : a,
    i = e.selectedIndex,
    c = e.label,
    s = c === void 0 ? "pagination" : c,
    l = e.pageLabel,
    u = l === void 0 ? "page" : l,
    d = e.previousLabel,
    f = d === void 0 ? "previous" : d,
    p = e.nextLabel,
    h = p === void 0 ? "next" : p,
    v = e.style,
    g = v === void 0 ? af : v,
    b = e.max,
    y = b === void 0 ? 7 : b,
    w = e.onChange,
    k = w === void 0 ? Ae : w,
    m = e.pages,
    S = e.getPageLabel,
    E = e.renderEllipsis,
    A = E === void 0 ? N1 : E,
    D = e.analyticsContext,
    P = e.testId,
    M = e.isDisabled,
    z = qy(i, function () {
      return o || 0;
    }),
    $ = J(z, 2),
    q = $[0],
    U = $[1],
    V = cn(
      U1(
        {
          fn: function (F, j) {
            var me = F.event,
              se = F.selectedPageIndex;
            (i === void 0 && U(se), k && k(me, m[se], j));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: D,
        },
        q1,
      ),
    ),
    G = function (F, j, me) {
      var se = m[q],
        le = "".concat(u, " ").concat(S ? S(F, j) : F),
        fe = F === se;
      return O.createElement(
        wo,
        { as: "li", xcss: Xs.paginationMenuItem, key: "page-".concat(S ? S(F, j) : j) },
        O.createElement(
          M1,
          {
            component: n.Page,
            onClick: function (ue) {
              return V({ event: ue, selectedPageIndex: j });
            },
            "aria-current": fe ? "page" : void 0,
            "aria-label": le,
            isSelected: fe,
            isDisabled: M,
            page: F,
            testId:
              me &&
              ""
                .concat(me, "--")
                .concat(fe ? "current-" : "", "page-")
                .concat(j),
          },
          S ? S(F, j) : F,
        ),
      );
    };
  return O.createElement(
    ui,
    { testId: P, style: g, ref: t, "aria-label": s, as: "nav" },
    O.createElement(
      wo,
      { space: "space.0", alignBlock: "center" },
      O.createElement(nf, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (F) {
          return V({ event: F, selectedPageIndex: q - 1 });
        },
        isDisabled: M || q === 0,
        iconBefore: O.createElement(cf, { chevronDirection: "left" }),
        "aria-label": f,
        testId: P && "".concat(P, "--left-navigator"),
      }),
      O.createElement(
        wo,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Xs.paginationMenu },
        z1(m, q, { max: y, ellipsis: A, transform: G }, P),
      ),
      O.createElement(nf, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (F) {
          return V({ event: F, selectedPageIndex: q + 1 });
        },
        isDisabled: M || q === m.length - 1,
        iconBefore: O.createElement(cf, { chevronDirection: "right" }),
        "aria-label": h,
        testId: P && "".concat(P, "--right-navigator"),
      }),
    ),
  );
}
var G1 = _.memo(_.forwardRef(V1));
function K1(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, Ch() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Ch() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ch = function () {
    return !!e;
  })();
}
var H1 = (function (e) {
    function t() {
      var r;
      be(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return (
        (r = K1(this, t, [].concat(a))),
        C(r, "onChange", function (i, c, s) {
          r.props.onChange(c, s);
        }),
        r
      );
    }
    return (
      Ze(t, e),
      _e(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.total,
              o = n.value,
              i = o === void 0 ? 1 : o,
              c = n.i18n,
              s = n.testId,
              l = n.isDisabled,
              u = Ge(Array(a)).map(function (f, p) {
                return p + 1;
              }),
              d = i - 1;
            return O.createElement(G1, {
              selectedIndex: d,
              isDisabled: l,
              label: c?.label,
              nextLabel: c?.next,
              previousLabel: c?.prev,
              pageLabel: c?.pageLabel,
              onChange: this.onChange,
              pages: u,
              testId: s && "".concat(s, "--pagination"),
            });
          },
        },
      ])
    );
  })(O.Component),
  W1 = ["isRanking", "testId"],
  J1 = [
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
function pa(e) {
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
var uf = "--local-dynamic-table-text-color",
  Y1 = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = te(t, W1);
    return _.createElement(
      "thead",
      Z({ "data-testid": n }, a, { className: R(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  X1 = _.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      o = e.isFixedSize,
      i = e.shouldTruncate;
    e.onClick;
    var c = e.style,
      s = e.testId,
      l = te(e, J1),
      u = pa(
        pa(pa({}, c), r && Dp({ width: r })),
        {},
        C({}, uf, "var(--ds-text-subtlest, #626F86)"),
      ),
      d = a === Pr,
      f = a === zo,
      p = function () {
        if (d) return "ascending";
        if (f) return "descending";
      },
      h = n ? "th" : "td";
    return _.createElement(
      h,
      Z({ "aria-sort": p(), onClick: void 0, ref: t, "data-testid": s }, l, {
        className: R([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r187z _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbi3bv",
          "_1bsb8a2a",
          o && i && "_1bto1l2s _o5721q9c",
          o && "_1reo15vq _18m915vq",
        ]),
        style: pa(
          pa({}, u),
          {},
          { "--_17ckjys": ir("var(--ds-text-subtle, ".concat("var(".concat(uf, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function Z1(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, Rh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Rh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Rh = function () {
    return !!e;
  })();
}
function Q1(e) {
  return (function (t) {
    function r() {
      var n;
      be(this, r);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return (
        (n = Z1(this, r, [].concat(o))),
        C(n, "state", { refWidth: 0, refHeight: 0 }),
        C(n, "innerRef", function (c) {
          c && !n.props.isRanking && (n.ref = c);
        }),
        C(n, "updateDimensions", function () {
          if (n.ref) {
            var c = n.ref.getBoundingClientRect(),
              s = c.width,
              l = c.height;
            (s !== n.state.refWidth || l !== n.state.refHeight) &&
              n.setState({ refWidth: s, refHeight: l });
          }
        }),
        n
      );
    }
    return (
      Ze(r, t),
      _e(r, [
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
var ha = {},
  df;
function eO() {
  if (df) return ha;
  ((df = 1), Object.defineProperty(ha, "__esModule", { value: !0 }), (ha.default = void 0));
  var e = r(wt()),
    t = r(li);
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
  return ((n.displayName = "ArrowDownIcon"), (ha.default = n), ha);
}
var tO = eO();
const rO = dr(tO);
var ga = {},
  ff;
function nO() {
  if (ff) return ga;
  ((ff = 1), Object.defineProperty(ga, "__esModule", { value: !0 }), (ga.default = void 0));
  var e = r(wt()),
    t = r(li);
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
  return ((n.displayName = "ArrowUpIcon"), (ga.default = n), ga);
}
var aO = nO();
const oO = dr(aO);
var iO = "Escape";
function sO(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = _.useRef(!1),
    a = _.useCallback(
      function (i) {
        r || n.current || i.key !== iO || ((n.current = !0), t(i));
      },
      [t, r],
    ),
    o = _.useCallback(function () {
      n.current = !1;
    }, []);
  _.useEffect(
    function () {
      if (!(r && pe("platform_only_attach_escape_handler_on_view")))
        return di.bindAll(
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
function ba(e) {
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
var cO = _.createContext(null),
  lO = _.createContext(null);
function uO() {
  var e = _.useContext(lO);
  return e;
}
function dO(e) {
  var t = e.isOpen,
    r = e.onClose,
    n = _.useContext(cO),
    a = uO();
  _.useEffect(
    function () {
      if (n !== null && t) return n.onClose(r, { namespace: a });
    },
    [n, t, a, r],
  );
}
var ka = { none: 0, small: 100, medium: 350, large: 700 },
  gs = 0.5,
  fO = { none: ka.none, small: ka.small * gs, medium: ka.medium * gs, large: ka.large * gs },
  vO = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  pO = function () {
    if (!vO()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  hO = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  gO = function () {
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
      }, hO(t)),
      _.useCallback(function (n, a) {
        for (var o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), c = 2; c < o; c++)
          i[c - 2] = arguments[c];
        var s = setTimeout.apply(
          void 0,
          [
            function () {
              ((r.current = r.current.filter(function (l) {
                return l !== s;
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
  Ph = { appear: !0, isExiting: !1 },
  Ah = _.createContext(Ph),
  vf = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ph;
    return O.createElement(Ah.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  pf = function (t) {
    var r = [];
    return (
      _.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  bO = function (t, r) {
    for (var n = r.concat([]), a = _O(r), o = 0; o < t.length; o++) {
      var i = t[o],
        c = !a[i.key];
      c && n.splice(o + 1, 0, i);
    }
    return n;
  },
  _O = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  mO = function (t, r) {
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
  Ih = _.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      o = _.useState([null, n]),
      i = J(o, 2),
      c = i[0],
      s = i[1],
      l = _.useState([]),
      u = J(l, 2),
      d = u[0],
      f = u[1],
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
      y = b[0],
      w = b[1],
      k = pf(y),
      m = pf(w);
    w !== n && s([w, n]);
    var S = mO(m, k),
      E = !!S.size,
      A = m;
    if ((E && (A = bO(m, k)), a))
      if (d.length) A = d;
      else {
        var D = A.filter(function (P) {
          return S.has(P.key);
        });
        D.length && f(D);
      }
    return (
      S.size
        ? (A = A.map(function (P) {
            var M = S.has(P.key);
            return vf(P, {
              appear: !0,
              isExiting: M,
              onFinish: M
                ? function () {
                    (S.delete(P.key), S.size === 0 && (s([null, n]), f([])));
                  }
                : void 0,
            });
          }))
        : (A = A.map(function (P) {
            return vf(P, v);
          })),
      A
    );
  }),
  yO = function () {
    return _.useContext(Ah);
  };
Ih.displayName = "ExitingPersistence";
function wO() {
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
var kO = _.createContext(function () {
    return { isReady: !0, delay: 0, ref: Ae };
  }),
  OO = function () {
    var t = wO(),
      r = _.useContext(kO);
    return r(t);
  },
  SO = function (t) {
    var r = t.children,
      n = t.animationTimingFunction,
      a = t.animationTimingFunctionExiting,
      o = a === void 0 ? n : a,
      i = t.enteringAnimation,
      c = t.exitingAnimation,
      s = c === void 0 ? i : c,
      l = t.isPaused,
      u = t.onFinish,
      d = t.duration,
      f = d === void 0 ? "large" : d,
      p = OO(),
      h = yO(),
      v = h.isExiting,
      g = h.onFinish,
      b = h.appear,
      y = gO(),
      w = l || !p.isReady,
      k = v ? 0 : p.delay,
      m = v ? "exiting" : "entering",
      S = _.useState(b),
      E = J(S, 2),
      A = E[0],
      D = E[1];
    return (
      _.useEffect(
        function () {
          var P = !1;
          if (!w) {
            if (!b) {
              u && u(m);
              return;
            }
            var M = function () {
              (m === "exiting" && g?.(), P || D(!1), u?.(m));
            };
            if (pO()) {
              M();
              return;
            }
            return (
              D(!0),
              y(M, v ? fO[f] : ka[f] + k),
              function () {
                P = !0;
              }
            );
          }
        },
        [g, m, v, f, k, w, y],
      ),
      r(
        {
          ref: p.ref,
          className: A
            ? R([
                R(["_1o51eoah _1y0co91m _1bumglyw _sedtglyw"]),
                w && R(["_1y0ctrqk"]),
                f === "small" && R(["_5sag1yx9"]),
                f === "medium" && R(["_5sag1ttt"]),
                f === "large" && R(["_5sagpwmj"]),
                v && f === "small" && R(["_5sag14ed"]),
                v && f === "medium" && R(["_5sagluct"]),
                v && f === "large" && R(["_5sag1ttt"]),
                v && R(["_ju255cps _1o51q7pw"]),
                !v && n === "linear" && R(["_1pglp3kn"]),
                !v && n === "ease-out" && R(["_1pgldkwg"]),
                !v && n === "ease-in" && R(["_1pgl1nzg"]),
                !v && n === "ease-in-40-out" && R(["_1pgl5y64"]),
                !v && n === "ease-in-60-out" && R(["_1pgl1ddy"]),
                !v && n === "ease-in-80-out" && R(["_1pglannl"]),
                !v && n === "ease-in-out" && R(["_1pgl1fu8"]),
                v && n === "linear" && R(["_1pglp3kn"]),
                v && o === "ease-out" && R(["_1pgldkwg"]),
                v && o === "ease-in" && R(["_1pgl1nzg"]),
                v && o === "ease-in-40-out" && R(["_1pgl5y64"]),
                v && o === "ease-in-60-out" && R(["_1pgl1ddy"]),
                v && o === "ease-in-80-out" && R(["_1pglannl"]),
                v && o === "ease-in-out" && R(["_1pgl1fu8"]),
                ((!v && i === "fade-in") || (v && s === "fade-in")) && R(["_j7hq1cgr"]),
                ((!v && i === "fade-out") || (v && s === "fade-out")) && R(["_j7hq1lln"]),
                ((!v && i === "zoom-in") || (v && s === "zoom-in")) && R(["_j7hqe8p0"]),
                ((!v && i === "zoom-out") || (v && s === "zoom-out")) && R(["_j7hqy6ql"]),
                ((!v && i === "slide-in-from-top") || (v && s === "slide-in-from-top")) &&
                  R(["_j7hqqshu"]),
                ((!v && i === "slide-out-from-top") || (v && s === "slide-out-from-top")) &&
                  R(["_j7hq7ri4"]),
                ((!v && i === "slide-in-from-right") || (v && s === "slide-in-from-right")) &&
                  R(["_j7hqdfjr"]),
                ((!v && i === "slide-out-from-right") || (v && s === "slide-out-from-right")) &&
                  R(["_j7hqonfj"]),
                ((!v && i === "slide-in-from-bottom") || (v && s === "slide-in-from-bottom")) &&
                  R(["_j7hq1liq"]),
                ((!v && i === "slide-out-from-bottom") || (v && s === "slide-out-from-bottom")) &&
                  R(["_j7hqhnf1"]),
                ((!v && i === "slide-in-from-left") || (v && s === "slide-in-from-left")) &&
                  R(["_j7hq1bh1"]),
                ((!v && i === "slide-out-from-left") || (v && s === "slide-out-from-left")) &&
                  R(["_j7hqj08w"]),
                ((!v && i === "fade-in-from-top") || (v && s === "fade-in-from-top")) &&
                  R(["_j7hq2iua"]),
                ((!v && i === "fade-out-from-top") || (v && s === "fade-out-from-top")) &&
                  R(["_j7hq39va"]),
                ((!v && i === "fade-in-from-left") || (v && s === "fade-in-from-left")) &&
                  R(["_j7hq15m2"]),
                ((!v && i === "fade-out-from-left") || (v && s === "fade-out-from-left")) &&
                  R(["_j7hq1yiv"]),
                ((!v && i === "fade-in-from-bottom") || (v && s === "fade-in-from-bottom")) &&
                  R(["_j7hq1w00"]),
                ((!v && i === "fade-out-from-bottom") || (v && s === "fade-out-from-bottom")) &&
                  R(["_j7hqzy3z"]),
                ((!v && i === "fade-in-from-right") || (v && s === "fade-in-from-right")) &&
                  R(["_j7hqpqak"]),
                ((!v && i === "fade-out-from-right") || (v && s === "fade-out-from-right")) &&
                  R(["_j7hq1ebg"]),
                ((!v && i === "fade-in-from-top-constant") ||
                  (v && s === "fade-in-from-top-constant")) &&
                  R(["_j7hqm2e2"]),
                ((!v && i === "fade-out-from-top-constant") ||
                  (v && s === "fade-out-from-top-constant")) &&
                  R(["_j7hq97jn"]),
                ((!v && i === "fade-in-from-left-constant") ||
                  (v && s === "fade-in-from-left-constant")) &&
                  R(["_j7hqovgq"]),
                ((!v && i === "fade-out-from-left-constant") ||
                  (v && s === "fade-out-from-left-constant")) &&
                  R(["_j7hq15do"]),
                ((!v && i === "fade-in-from-bottom-constant") ||
                  (v && s === "fade-in-from-bottom-constant")) &&
                  R(["_j7hq797a"]),
                ((!v && i === "fade-out-from-bottom-constant") ||
                  (v && s === "fade-out-from-bottom-constant")) &&
                  R(["_j7hqwo7r"]),
                ((!v && i === "fade-in-from-right-constant") ||
                  (v && s === "fade-in-from-right-constant")) &&
                  R(["_j7hqt8u5"]),
                ((!v && i === "fade-out-from-right-constant") ||
                  (v && s === "fade-out-from-right-constant")) &&
                  R(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(k, "ms") },
        },
        m,
      )
    );
  },
  xO = { top: "bottom", bottom: "top", left: "right", right: "left" },
  EO = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      o = t.entranceDirection,
      i = t.exitDirection,
      c = t.distance,
      s = c === void 0 ? "proportional" : c,
      l = t.onFinish,
      u = t.isPaused,
      d = o !== void 0 ? xO[o] : void 0,
      f =
        i || d
          ? "fade-out-from-".concat(i || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return O.createElement(
      SO,
      {
        duration: a,
        enteringAnimation: o
          ? "fade-in-from-".concat(o).concat(s === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: f,
        animationTimingFunction: "ease-in-out",
        onFinish: l,
        isPaused: u,
      },
      r,
    );
  },
  CO = _.createContext();
_.createContext();
var RO = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  PO = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  AO = function (t, r) {
    if (typeof t == "function") return PO(t, r);
    t != null && (t.current = r);
  },
  hf = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        o = n[1];
      return ((r[a] = o), r);
    }, {});
  },
  gf =
    typeof window < "u" && window.document && window.document.createElement
      ? _.useLayoutEffect
      : _.useEffect,
  Be = "top",
  ut = "bottom",
  dt = "right",
  ze = "left",
  Ec = "auto",
  Ya = [Be, ut, dt, ze],
  dn = "start",
  za = "end",
  IO = "clippingParents",
  jh = "viewport",
  _a = "popper",
  jO = "reference",
  bf = Ya.reduce(function (e, t) {
    return e.concat([t + "-" + dn, t + "-" + za]);
  }, []),
  Dh = [].concat(Ya, [Ec]).reduce(function (e, t) {
    return e.concat([t, t + "-" + dn, t + "-" + za]);
  }, []),
  DO = "beforeRead",
  TO = "read",
  MO = "afterRead",
  LO = "beforeMain",
  NO = "main",
  FO = "afterMain",
  $O = "beforeWrite",
  BO = "write",
  zO = "afterWrite",
  UO = [DO, TO, MO, LO, NO, FO, $O, BO, zO];
function Nt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Je(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Ar(e) {
  var t = Je(e).Element;
  return e instanceof t || e instanceof Element;
}
function lt(e) {
  var t = Je(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Cc(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Je(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function qO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      o = t.elements[r];
    !lt(o) ||
      !Nt(o) ||
      (Object.assign(o.style, n),
      Object.keys(a).forEach(function (i) {
        var c = a[i];
        c === !1 ? o.removeAttribute(i) : o.setAttribute(i, c === !0 ? "" : c);
      }));
  });
}
function VO(e) {
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
          c = i.reduce(function (s, l) {
            return ((s[l] = ""), s);
          }, {});
        !lt(a) ||
          !Nt(a) ||
          (Object.assign(a.style, c),
          Object.keys(o).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const GO = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: qO,
  effect: VO,
  requires: ["computeStyles"],
};
function Tt(e) {
  return e.split("-")[0];
}
var Sr = Math.max,
  Go = Math.min,
  fn = Math.round;
function Zs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Th() {
  return !/^((?!chrome|android).)*safari/i.test(Zs());
}
function vn(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    o = 1;
  t &&
    lt(e) &&
    ((a = (e.offsetWidth > 0 && fn(n.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && fn(n.height) / e.offsetHeight) || 1));
  var i = Ar(e) ? Je(e) : window,
    c = i.visualViewport,
    s = !Th() && r,
    l = (n.left + (s && c ? c.offsetLeft : 0)) / a,
    u = (n.top + (s && c ? c.offsetTop : 0)) / o,
    d = n.width / a,
    f = n.height / o;
  return { width: d, height: f, top: u, right: l + d, bottom: u + f, left: l, x: l, y: u };
}
function Rc(e) {
  var t = vn(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Mh(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Cc(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function er(e) {
  return Je(e).getComputedStyle(e);
}
function KO(e) {
  return ["table", "td", "th"].indexOf(Nt(e)) >= 0;
}
function vr(e) {
  return ((Ar(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function hi(e) {
  return Nt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Cc(e) ? e.host : null) || vr(e);
}
function _f(e) {
  return !lt(e) || er(e).position === "fixed" ? null : e.offsetParent;
}
function HO(e) {
  var t = /firefox/i.test(Zs()),
    r = /Trident/i.test(Zs());
  if (r && lt(e)) {
    var n = er(e);
    if (n.position === "fixed") return null;
  }
  var a = hi(e);
  for (Cc(a) && (a = a.host); lt(a) && ["html", "body"].indexOf(Nt(a)) < 0; ) {
    var o = er(a);
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
function Xa(e) {
  for (var t = Je(e), r = _f(e); r && KO(r) && er(r).position === "static"; ) r = _f(r);
  return r && (Nt(r) === "html" || (Nt(r) === "body" && er(r).position === "static"))
    ? t
    : r || HO(e) || t;
}
function Pc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ra(e, t, r) {
  return Sr(e, Go(t, r));
}
function WO(e, t, r) {
  var n = Ra(e, t, r);
  return n > r ? r : n;
}
function Lh() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Nh(e) {
  return Object.assign({}, Lh(), e);
}
function Fh(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var JO = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Nh(typeof t != "number" ? t : Fh(t, Ya))
  );
};
function YO(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    o = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    c = Tt(r.placement),
    s = Pc(c),
    l = [ze, dt].indexOf(c) >= 0,
    u = l ? "height" : "width";
  if (!(!o || !i)) {
    var d = JO(a.padding, r),
      f = Rc(o),
      p = s === "y" ? Be : ze,
      h = s === "y" ? ut : dt,
      v = r.rects.reference[u] + r.rects.reference[s] - i[s] - r.rects.popper[u],
      g = i[s] - r.rects.reference[s],
      b = Xa(o),
      y = b ? (s === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      w = v / 2 - g / 2,
      k = d[p],
      m = y - f[u] - d[h],
      S = y / 2 - f[u] / 2 + w,
      E = Ra(k, S, m),
      A = s;
    r.modifiersData[n] = ((t = {}), (t[A] = E), (t.centerOffset = E - S), t);
  }
}
function XO(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (Mh(t.elements.popper, a) && (t.elements.arrow = a)));
}
const ZO = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: YO,
  effect: XO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function pn(e) {
  return e.split("-")[1];
}
var QO = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function eS(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: fn(r * a) / a || 0, y: fn(n * a) / a || 0 };
}
function mf(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    a = e.placement,
    o = e.variation,
    i = e.offsets,
    c = e.position,
    s = e.gpuAcceleration,
    l = e.adaptive,
    u = e.roundOffsets,
    d = e.isFixed,
    f = i.x,
    p = f === void 0 ? 0 : f,
    h = i.y,
    v = h === void 0 ? 0 : h,
    g = typeof u == "function" ? u({ x: p, y: v }) : { x: p, y: v };
  ((p = g.x), (v = g.y));
  var b = i.hasOwnProperty("x"),
    y = i.hasOwnProperty("y"),
    w = ze,
    k = Be,
    m = window;
  if (l) {
    var S = Xa(r),
      E = "clientHeight",
      A = "clientWidth";
    if (
      (S === Je(r) &&
        ((S = vr(r)),
        er(S).position !== "static" &&
          c === "absolute" &&
          ((E = "scrollHeight"), (A = "scrollWidth"))),
      (S = S),
      a === Be || ((a === ze || a === dt) && o === za))
    ) {
      k = ut;
      var D = d && S === m && m.visualViewport ? m.visualViewport.height : S[E];
      ((v -= D - n.height), (v *= s ? 1 : -1));
    }
    if (a === ze || ((a === Be || a === ut) && o === za)) {
      w = dt;
      var P = d && S === m && m.visualViewport ? m.visualViewport.width : S[A];
      ((p -= P - n.width), (p *= s ? 1 : -1));
    }
  }
  var M = Object.assign({ position: c }, l && QO),
    z = u === !0 ? eS({ x: p, y: v }, Je(r)) : { x: p, y: v };
  if (((p = z.x), (v = z.y), s)) {
    var $;
    return Object.assign(
      {},
      M,
      (($ = {}),
      ($[k] = y ? "0" : ""),
      ($[w] = b ? "0" : ""),
      ($.transform =
        (m.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + v + "px)"
          : "translate3d(" + p + "px, " + v + "px, 0)"),
      $),
    );
  }
  return Object.assign(
    {},
    M,
    ((t = {}), (t[k] = y ? v + "px" : ""), (t[w] = b ? p + "px" : ""), (t.transform = ""), t),
  );
}
function tS(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    o = r.adaptive,
    i = o === void 0 ? !0 : o,
    c = r.roundOffsets,
    s = c === void 0 ? !0 : c,
    l = {
      placement: Tt(t.placement),
      variation: pn(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      mf(
        Object.assign({}, l, {
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
        mf(
          Object.assign({}, l, {
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
const rS = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: tS, data: {} };
var fo = { passive: !0 };
function nS(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    o = a === void 0 ? !0 : a,
    i = n.resize,
    c = i === void 0 ? !0 : i,
    s = Je(t.elements.popper),
    l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      l.forEach(function (u) {
        u.addEventListener("scroll", r.update, fo);
      }),
    c && s.addEventListener("resize", r.update, fo),
    function () {
      (o &&
        l.forEach(function (u) {
          u.removeEventListener("scroll", r.update, fo);
        }),
        c && s.removeEventListener("resize", r.update, fo));
    }
  );
}
const aS = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: nS,
  data: {},
};
var oS = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Eo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return oS[t];
  });
}
var iS = { start: "end", end: "start" };
function yf(e) {
  return e.replace(/start|end/g, function (t) {
    return iS[t];
  });
}
function Ac(e) {
  var t = Je(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Ic(e) {
  return vn(vr(e)).left + Ac(e).scrollLeft;
}
function sS(e, t) {
  var r = Je(e),
    n = vr(e),
    a = r.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    c = 0,
    s = 0;
  if (a) {
    ((o = a.width), (i = a.height));
    var l = Th();
    (l || (!l && t === "fixed")) && ((c = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: o, height: i, x: c + Ic(e), y: s };
}
function cS(e) {
  var t,
    r = vr(e),
    n = Ac(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = Sr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    i = Sr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    c = -n.scrollLeft + Ic(e),
    s = -n.scrollTop;
  return (
    er(a || r).direction === "rtl" && (c += Sr(r.clientWidth, a ? a.clientWidth : 0) - o),
    { width: o, height: i, x: c, y: s }
  );
}
function jc(e) {
  var t = er(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function $h(e) {
  return ["html", "body", "#document"].indexOf(Nt(e)) >= 0
    ? e.ownerDocument.body
    : lt(e) && jc(e)
      ? e
      : $h(hi(e));
}
function Pa(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = $h(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = Je(n),
    i = a ? [o].concat(o.visualViewport || [], jc(n) ? n : []) : n,
    c = t.concat(i);
  return a ? c : c.concat(Pa(hi(i)));
}
function Qs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function lS(e, t) {
  var r = vn(e, !1, t === "fixed");
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
function wf(e, t, r) {
  return t === jh ? Qs(sS(e, r)) : Ar(t) ? lS(t, r) : Qs(cS(vr(e)));
}
function uS(e) {
  var t = Pa(hi(e)),
    r = ["absolute", "fixed"].indexOf(er(e).position) >= 0,
    n = r && lt(e) ? Xa(e) : e;
  return Ar(n)
    ? t.filter(function (a) {
        return Ar(a) && Mh(a, n) && Nt(a) !== "body";
      })
    : [];
}
function dS(e, t, r, n) {
  var a = t === "clippingParents" ? uS(e) : [].concat(t),
    o = [].concat(a, [r]),
    i = o[0],
    c = o.reduce(
      function (s, l) {
        var u = wf(e, l, n);
        return (
          (s.top = Sr(u.top, s.top)),
          (s.right = Go(u.right, s.right)),
          (s.bottom = Go(u.bottom, s.bottom)),
          (s.left = Sr(u.left, s.left)),
          s
        );
      },
      wf(e, i, n),
    );
  return (
    (c.width = c.right - c.left),
    (c.height = c.bottom - c.top),
    (c.x = c.left),
    (c.y = c.top),
    c
  );
}
function Bh(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? Tt(n) : null,
    o = n ? pn(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    c = t.y + t.height / 2 - r.height / 2,
    s;
  switch (a) {
    case Be:
      s = { x: i, y: t.y - r.height };
      break;
    case ut:
      s = { x: i, y: t.y + t.height };
      break;
    case dt:
      s = { x: t.x + t.width, y: c };
      break;
    case ze:
      s = { x: t.x - r.width, y: c };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var l = a ? Pc(a) : null;
  if (l != null) {
    var u = l === "y" ? "height" : "width";
    switch (o) {
      case dn:
        s[l] = s[l] - (t[u] / 2 - r[u] / 2);
        break;
      case za:
        s[l] = s[l] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return s;
}
function Ua(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    o = r.strategy,
    i = o === void 0 ? e.strategy : o,
    c = r.boundary,
    s = c === void 0 ? IO : c,
    l = r.rootBoundary,
    u = l === void 0 ? jh : l,
    d = r.elementContext,
    f = d === void 0 ? _a : d,
    p = r.altBoundary,
    h = p === void 0 ? !1 : p,
    v = r.padding,
    g = v === void 0 ? 0 : v,
    b = Nh(typeof g != "number" ? g : Fh(g, Ya)),
    y = f === _a ? jO : _a,
    w = e.rects.popper,
    k = e.elements[h ? y : f],
    m = dS(Ar(k) ? k : k.contextElement || vr(e.elements.popper), s, u, i),
    S = vn(e.elements.reference),
    E = Bh({ reference: S, element: w, placement: a }),
    A = Qs(Object.assign({}, w, E)),
    D = f === _a ? A : S,
    P = {
      top: m.top - D.top + b.top,
      bottom: D.bottom - m.bottom + b.bottom,
      left: m.left - D.left + b.left,
      right: D.right - m.right + b.right,
    },
    M = e.modifiersData.offset;
  if (f === _a && M) {
    var z = M[a];
    Object.keys(P).forEach(function ($) {
      var q = [dt, ut].indexOf($) >= 0 ? 1 : -1,
        U = [Be, ut].indexOf($) >= 0 ? "y" : "x";
      P[$] += z[U] * q;
    });
  }
  return P;
}
function fS(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    o = r.rootBoundary,
    i = r.padding,
    c = r.flipVariations,
    s = r.allowedAutoPlacements,
    l = s === void 0 ? Dh : s,
    u = pn(n),
    d = u
      ? c
        ? bf
        : bf.filter(function (h) {
            return pn(h) === u;
          })
      : Ya,
    f = d.filter(function (h) {
      return l.indexOf(h) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (h, v) {
    return ((h[v] = Ua(e, { placement: v, boundary: a, rootBoundary: o, padding: i })[Tt(v)]), h);
  }, {});
  return Object.keys(p).sort(function (h, v) {
    return p[h] - p[v];
  });
}
function vS(e) {
  if (Tt(e) === Ec) return [];
  var t = Eo(e);
  return [yf(e), t, yf(t)];
}
function pS(e) {
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
        l = r.padding,
        u = r.boundary,
        d = r.rootBoundary,
        f = r.altBoundary,
        p = r.flipVariations,
        h = p === void 0 ? !0 : p,
        v = r.allowedAutoPlacements,
        g = t.options.placement,
        b = Tt(g),
        y = b === g,
        w = s || (y || !h ? [Eo(g)] : vS(g)),
        k = [g].concat(w).reduce(function (fe, he) {
          return fe.concat(
            Tt(he) === Ec
              ? fS(t, {
                  placement: he,
                  boundary: u,
                  rootBoundary: d,
                  padding: l,
                  flipVariations: h,
                  allowedAutoPlacements: v,
                })
              : he,
          );
        }, []),
        m = t.rects.reference,
        S = t.rects.popper,
        E = new Map(),
        A = !0,
        D = k[0],
        P = 0;
      P < k.length;
      P++
    ) {
      var M = k[P],
        z = Tt(M),
        $ = pn(M) === dn,
        q = [Be, ut].indexOf(z) >= 0,
        U = q ? "width" : "height",
        V = Ua(t, { placement: M, boundary: u, rootBoundary: d, altBoundary: f, padding: l }),
        G = q ? ($ ? dt : ze) : $ ? ut : Be;
      m[U] > S[U] && (G = Eo(G));
      var H = Eo(G),
        F = [];
      if (
        (o && F.push(V[z] <= 0),
        c && F.push(V[G] <= 0, V[H] <= 0),
        F.every(function (fe) {
          return fe;
        }))
      ) {
        ((D = M), (A = !1));
        break;
      }
      E.set(M, F);
    }
    if (A)
      for (
        var j = h ? 3 : 1,
          me = function (he) {
            var ue = k.find(function (Te) {
              var ke = E.get(Te);
              if (ke)
                return ke.slice(0, he).every(function (Me) {
                  return Me;
                });
            });
            if (ue) return ((D = ue), "break");
          },
          se = j;
        se > 0;
        se--
      ) {
        var le = me(se);
        if (le === "break") break;
      }
    t.placement !== D && ((t.modifiersData[n]._skip = !0), (t.placement = D), (t.reset = !0));
  }
}
const hS = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: pS,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function kf(e, t, r) {
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
function Of(e) {
  return [Be, dt, ut, ze].some(function (t) {
    return e[t] >= 0;
  });
}
function gS(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    i = Ua(t, { elementContext: "reference" }),
    c = Ua(t, { altBoundary: !0 }),
    s = kf(i, n),
    l = kf(c, a, o),
    u = Of(s),
    d = Of(l);
  ((t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: l,
    isReferenceHidden: u,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": d,
    })));
}
const bS = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: gS,
};
function _S(e, t, r) {
  var n = Tt(e),
    a = [ze, Be].indexOf(n) >= 0 ? -1 : 1,
    o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = o[0],
    c = o[1];
  return (
    (i = i || 0),
    (c = (c || 0) * a),
    [ze, dt].indexOf(n) >= 0 ? { x: c, y: i } : { x: i, y: c }
  );
}
function mS(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    o = a === void 0 ? [0, 0] : a,
    i = Dh.reduce(function (u, d) {
      return ((u[d] = _S(d, t.rects, o)), u);
    }, {}),
    c = i[t.placement],
    s = c.x,
    l = c.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += l)),
    (t.modifiersData[n] = i));
}
const yS = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: mS };
function wS(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Bh({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const kS = { name: "popperOffsets", enabled: !0, phase: "read", fn: wS, data: {} };
function OS(e) {
  return e === "x" ? "y" : "x";
}
function SS(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.mainAxis,
    o = a === void 0 ? !0 : a,
    i = r.altAxis,
    c = i === void 0 ? !1 : i,
    s = r.boundary,
    l = r.rootBoundary,
    u = r.altBoundary,
    d = r.padding,
    f = r.tether,
    p = f === void 0 ? !0 : f,
    h = r.tetherOffset,
    v = h === void 0 ? 0 : h,
    g = Ua(t, { boundary: s, rootBoundary: l, padding: d, altBoundary: u }),
    b = Tt(t.placement),
    y = pn(t.placement),
    w = !y,
    k = Pc(b),
    m = OS(k),
    S = t.modifiersData.popperOffsets,
    E = t.rects.reference,
    A = t.rects.popper,
    D = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v,
    P =
      typeof D == "number"
        ? { mainAxis: D, altAxis: D }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
    M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    z = { x: 0, y: 0 };
  if (S) {
    if (o) {
      var $,
        q = k === "y" ? Be : ze,
        U = k === "y" ? ut : dt,
        V = k === "y" ? "height" : "width",
        G = S[k],
        H = G + g[q],
        F = G - g[U],
        j = p ? -A[V] / 2 : 0,
        me = y === dn ? E[V] : A[V],
        se = y === dn ? -A[V] : -E[V],
        le = t.elements.arrow,
        fe = p && le ? Rc(le) : { width: 0, height: 0 },
        he = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Lh(),
        ue = he[q],
        Te = he[U],
        ke = Ra(0, E[V], fe[V]),
        Me = w ? E[V] / 2 - j - ke - ue - P.mainAxis : me - ke - ue - P.mainAxis,
        ve = w ? -E[V] / 2 + j + ke + Te + P.mainAxis : se + ke + Te + P.mainAxis,
        Le = t.elements.arrow && Xa(t.elements.arrow),
        tr = Le ? (k === "y" ? Le.clientTop || 0 : Le.clientLeft || 0) : 0,
        vt = ($ = M?.[k]) != null ? $ : 0,
        Ce = G + Me - vt - tr,
        Re = G + ve - vt,
        Ot = Ra(p ? Go(H, Ce) : H, G, p ? Sr(F, Re) : F);
      ((S[k] = Ot), (z[k] = Ot - G));
    }
    if (c) {
      var Qe,
        Ve = k === "x" ? Be : ze,
        Ne = k === "x" ? ut : dt,
        Ie = S[m],
        re = m === "y" ? "height" : "width",
        Oe = Ie + g[Ve],
        je = Ie - g[Ne],
        St = [Be, ze].indexOf(b) !== -1,
        Mr = (Qe = M?.[m]) != null ? Qe : 0,
        de = St ? Oe : Ie - E[re] - A[re] - Mr + P.altAxis,
        rr = St ? Ie + E[re] + A[re] - Mr - P.altAxis : je,
        et = p && St ? WO(de, Ie, rr) : Ra(p ? de : Oe, Ie, p ? rr : je);
      ((S[m] = et), (z[m] = et - Ie));
    }
    t.modifiersData[n] = z;
  }
}
const xS = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: SS,
  requiresIfExists: ["offset"],
};
function ES(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function CS(e) {
  return e === Je(e) || !lt(e) ? Ac(e) : ES(e);
}
function RS(e) {
  var t = e.getBoundingClientRect(),
    r = fn(t.width) / e.offsetWidth || 1,
    n = fn(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function PS(e, t, r) {
  r === void 0 && (r = !1);
  var n = lt(t),
    a = lt(t) && RS(t),
    o = vr(t),
    i = vn(e, a, r),
    c = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Nt(t) !== "body" || jc(o)) && (c = CS(t)),
      lt(t) ? ((s = vn(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : o && (s.x = Ic(o))),
    {
      x: i.left + c.scrollLeft - s.x,
      y: i.top + c.scrollTop - s.y,
      width: i.width,
      height: i.height,
    }
  );
}
function AS(e) {
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
function IS(e) {
  var t = AS(e);
  return UO.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function jS(e) {
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
function DS(e) {
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
var Sf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function xf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function TS(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    o = a === void 0 ? Sf : a;
  return function (c, s, l) {
    l === void 0 && (l = o);
    var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Sf, o),
        modifiersData: {},
        elements: { reference: c, popper: s },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      p = {
        state: u,
        setOptions: function (b) {
          var y = typeof b == "function" ? b(u.options) : b;
          (v(),
            (u.options = Object.assign({}, o, u.options, y)),
            (u.scrollParents = {
              reference: Ar(c) ? Pa(c) : c.contextElement ? Pa(c.contextElement) : [],
              popper: Pa(s),
            }));
          var w = IS(DS([].concat(n, u.options.modifiers)));
          return (
            (u.orderedModifiers = w.filter(function (k) {
              return k.enabled;
            })),
            h(),
            p.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var b = u.elements,
              y = b.reference,
              w = b.popper;
            if (xf(y, w)) {
              ((u.rects = {
                reference: PS(y, Xa(w), u.options.strategy === "fixed"),
                popper: Rc(w),
              }),
                (u.reset = !1),
                (u.placement = u.options.placement),
                u.orderedModifiers.forEach(function (P) {
                  return (u.modifiersData[P.name] = Object.assign({}, P.data));
                }));
              for (var k = 0; k < u.orderedModifiers.length; k++) {
                if (u.reset === !0) {
                  ((u.reset = !1), (k = -1));
                  continue;
                }
                var m = u.orderedModifiers[k],
                  S = m.fn,
                  E = m.options,
                  A = E === void 0 ? {} : E,
                  D = m.name;
                typeof S == "function" &&
                  (u = S({ state: u, options: A, name: D, instance: p }) || u);
              }
            }
          }
        },
        update: jS(function () {
          return new Promise(function (g) {
            (p.forceUpdate(), g(u));
          });
        }),
        destroy: function () {
          (v(), (f = !0));
        },
      };
    if (!xf(c, s)) return p;
    p.setOptions(l).then(function (g) {
      !f && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function h() {
      u.orderedModifiers.forEach(function (g) {
        var b = g.name,
          y = g.options,
          w = y === void 0 ? {} : y,
          k = g.effect;
        if (typeof k == "function") {
          var m = k({ state: u, name: b, instance: p, options: w }),
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
var MS = [aS, kS, rS, GO, yS, hS, xS, ZO, bS],
  LS = TS({ defaultModifiers: MS }),
  bs,
  Ef;
function NS() {
  if (Ef) return bs;
  Ef = 1;
  var e = typeof Element < "u",
    t = typeof Map == "function",
    r = typeof Set == "function",
    n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function a(o, i) {
    if (o === i) return !0;
    if (o && i && typeof o == "object" && typeof i == "object") {
      if (o.constructor !== i.constructor) return !1;
      var c, s, l;
      if (Array.isArray(o)) {
        if (((c = o.length), c != i.length)) return !1;
        for (s = c; s-- !== 0; ) if (!a(o[s], i[s])) return !1;
        return !0;
      }
      var u;
      if (t && o instanceof Map && i instanceof Map) {
        if (o.size !== i.size) return !1;
        for (u = o.entries(); !(s = u.next()).done; ) if (!i.has(s.value[0])) return !1;
        for (u = o.entries(); !(s = u.next()).done; )
          if (!a(s.value[1], i.get(s.value[0]))) return !1;
        return !0;
      }
      if (r && o instanceof Set && i instanceof Set) {
        if (o.size !== i.size) return !1;
        for (u = o.entries(); !(s = u.next()).done; ) if (!i.has(s.value[0])) return !1;
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
      if (((l = Object.keys(o)), (c = l.length), c !== Object.keys(i).length)) return !1;
      for (s = c; s-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(i, l[s])) return !1;
      if (e && o instanceof Element) return !1;
      for (s = c; s-- !== 0; )
        if (
          !((l[s] === "_owner" || l[s] === "__v" || l[s] === "__o") && o.$$typeof) &&
          !a(o[l[s]], i[l[s]])
        )
          return !1;
      return !0;
    }
    return o !== o && i !== i;
  }
  return (
    (bs = function (i, c) {
      try {
        return a(i, c);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    bs
  );
}
var FS = NS();
const $S = dr(FS);
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
      l = _.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (p) {
            var h = p.state,
              v = Object.keys(h.elements);
            Ko.flushSync(function () {
              s({
                styles: hf(
                  v.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: hf(
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
      u = _.useMemo(
        function () {
          var f = {
            onFirstUpdate: o.onFirstUpdate,
            placement: o.placement,
            strategy: o.strategy,
            modifiers: [].concat(o.modifiers, [l, { name: "applyStyles", enabled: !1 }]),
          };
          return $S(a.current, f) ? a.current || f : ((a.current = f), f);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, l],
      ),
      d = _.useRef();
    return (
      gf(
        function () {
          d.current && d.current.setOptions(u);
        },
        [u],
      ),
      gf(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || LS,
              p = f(t, r, u);
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
  VS = [];
function GS(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    o = e.modifiers,
    i = o === void 0 ? VS : o,
    c = e.referenceElement,
    s = e.onFirstUpdate,
    l = e.innerRef,
    u = e.children,
    d = _.useContext(CO),
    f = _.useState(null),
    p = f[0],
    h = f[1],
    v = _.useState(null),
    g = v[0],
    b = v[1];
  _.useEffect(
    function () {
      AO(l, p);
    },
    [l, p],
  );
  var y = _.useMemo(
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
    w = zS(c || d, p, y),
    k = w.state,
    m = w.styles,
    S = w.forceUpdate,
    E = w.update,
    A = _.useMemo(
      function () {
        return {
          ref: h,
          style: m.popper,
          placement: k ? k.placement : r,
          hasPopperEscaped:
            k && k.modifiersData.hide ? k.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            k && k.modifiersData.hide ? k.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: m.arrow, ref: b },
          forceUpdate: S || US,
          update: E || qS,
        };
      },
      [h, b, r, k, m, E, S],
    );
  return RO(u)(A);
}
function KS(e) {
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
          l = s.modifiersData.maxSizeData;
        if (
          !(
            typeof (l == null || (a = l.viewport) === null || a === void 0 ? void 0 : a.width) !=
              "number" ||
            typeof (l == null || (o = l.viewport) === null || o === void 0 ? void 0 : o.height) !=
              "number"
          )
        ) {
          var u = l.viewport,
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
            b = u.width - 2 * t,
            y = u.height - 2 * t;
          (v === "top" && (y = s.rects.reference.y + g.y - t),
            v === "bottom" && (y = u.height - f.y - t),
            v === "left" && (b = s.rects.reference.x + g.x - t),
            v === "right" && (b = u.width - f.x - t),
            (s.styles.popper.maxWidth = "".concat(b, "px")),
            (s.styles.popper.maxHeight = "".concat(y, "px")));
        }
      },
    },
  ];
}
var ec = 5,
  HS = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: ec,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function WS() {
  return null;
}
var JS = [0, 8];
function YS(e) {
  var t = e.children,
    r = t === void 0 ? WS : t,
    n = e.offset,
    a = n === void 0 ? JS : n,
    o = e.placement,
    i = o === void 0 ? "bottom-start" : o,
    c = e.referenceElement,
    s = c === void 0 ? void 0 : c,
    l = e.modifiers,
    u = e.strategy,
    d = u === void 0 ? "fixed" : u,
    f = e.shouldFitViewport,
    p = f === void 0 ? !1 : f,
    h = J(a, 2),
    v = h[0],
    g = h[1],
    b = _.useMemo(
      function () {
        var w = {
            name: "preventOverflow",
            options: { padding: ec, rootBoundary: p ? "viewport" : "document" },
          },
          k = { name: "offset", options: { offset: [v, g] } },
          m = p ? KS({ viewportPadding: ec }) : [];
        return [].concat(HS, [w, k], Ge(m));
      },
      [v, g, p],
    ),
    y = _.useMemo(
      function () {
        return l == null ? b : [].concat(Ge(b), Ge(l));
      },
      [b, l],
    );
  return O.createElement(GS, { modifiers: y, placement: i, strategy: d, referenceElement: s }, r);
}
var zh = "atlaskit-portal-container",
  Uh = "body > .atlaskit-portal-container",
  qh = "atlaskit-portal",
  XS = function (t) {
    var r = document.createElement("div");
    return ((r.className = qh), (r.style.zIndex = "".concat(t)), r);
  },
  Vh = function () {
    return document.body;
  },
  Gh = function () {
    var t = document.querySelector(Uh);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = zh),
        (n.style.display = "flex"),
        (r = Vh()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  ZS = function (t) {
    Gh().removeChild(t);
  },
  QS = function (t) {
    t.parentElement || Gh().appendChild(t);
  },
  Kh = function () {
    return document !== void 0;
  },
  ex = function (t) {
    if (Kh()) {
      var r = document.createElement("div");
      return ((r.className = qh), (r.style.zIndex = "".concat(t)), r);
    }
  },
  tx = function () {
    if (Kh()) {
      var t = document.querySelector(Uh);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = zh),
          (n.style.display = "flex"),
          (r = Vh()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function rx(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useMemo(
      function () {
        return XS(t);
      },
      [t],
    );
  return (
    QS(n),
    _.useEffect(
      function () {
        return function () {
          ZS(n);
        };
      },
      [n],
    ),
    Ko.createPortal(r, n)
  );
}
var Hh = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function nx(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useState(null),
    a = J(n, 2),
    o = a[0],
    i = a[1];
  Hh(
    function () {
      var s = ex(t);
      i(s);
      var l = tx();
      if (!(!s || !l))
        return (
          l.appendChild(s),
          function () {
            (s && l.removeChild(s), i(null));
          }
        );
    },
    [t],
  );
  var c = O.createElement(_.Suspense, { fallback: null }, r);
  return o ? Ko.createPortal(c, o) : null;
}
var ax = function (t) {
    var r = _.useState(!1),
      n = J(r, 2),
      a = n[0],
      o = n[1],
      i = _.useState(function () {
        return t === "layoutEffect" ? Hh : _.useEffect;
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
  ox = "akPortalMount",
  ix = "akPortalUnmount",
  Cf = {
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
  sx = function (t) {
    return Cf.hasOwnProperty(t) ? Cf[t] : null;
  },
  cx = function (t, r) {
    var n = { layer: sx(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function Rf(e, t) {
  var r = cx(e, t);
  window.dispatchEvent(r);
}
var lx = function (t) {
  var r = Number(t);
  _.useEffect(
    function () {
      return (
        Rf(ox, r),
        function () {
          Rf(ix, r);
        }
      );
    },
    [r],
  );
};
function ux(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    o = a === void 0 ? "effect" : a,
    i = ax(o);
  return (
    lx(r),
    pe("platform_design_system_team_portal_logic_r18_fix")
      ? O.createElement(nx, { zIndex: r }, n)
      : i
        ? O.createElement(rx, { zIndex: r }, n)
        : null
  );
}
var Aa = new Set(),
  qa = null;
function Pf() {
  if (!qa) {
    qa = di.bindAll(window, [
      { type: "dragend", listener: _s },
      { type: "pointerdown", listener: _s },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            _s();
          };
        })(),
      },
    ]);
    var e = Array.from(Aa);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function _s() {
  var e;
  ((e = qa) === null || e === void 0 || e(), (qa = null));
  var t = Array.from(Aa);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function dx() {
  return di.bindAll(window, [
    { type: "dragstart", listener: Pf },
    { type: "dragenter", listener: Pf },
  ]);
}
var vo = null;
function fx(e) {
  return (
    vo || (vo = dx()),
    Aa.add(e),
    e.onRegister({ isDragging: qa !== null }),
    function () {
      if ((Aa.delete(e), Aa.size === 0)) {
        var r;
        ((r = vo) === null || r === void 0 || r(), (vo = null));
      }
    }
  );
}
var Ia = null;
function Oa() {
  Ia != null && (window.clearTimeout(Ia), (Ia = null));
}
function Af(e, t) {
  (Oa(),
    (Ia = window.setTimeout(function () {
      ((Ia = null), e());
    }, t)));
}
var xt = null;
function vx(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(xt && xt.entry === e);
  }
  function n() {
    r() && (Oa(), (xt = null));
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
        ((t = "shown"), Oa());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), Oa(), e.show({ isImmediate: !1 }));
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
          Af(function () {
            ((t = "hide-animating"), e.hide({ isImmediate: !1 }));
          }, e.delay));
      }
    }
  }
  function s() {
    r() && t === "hide-animating" && a();
  }
  function l() {
    return t === "shown" || t === "waiting-to-hide" || t === "hide-animating";
  }
  function u() {
    return e.source.type === "mouse" ? e.source.mouse : null;
  }
  function d() {
    var p = !!(xt && xt.isVisible());
    (xt && (Oa(), xt.entry.hide({ isImmediate: !0 }), xt.entry.done(), (xt = null)),
      (xt = { entry: e, isVisible: l }));
    function h() {
      ((t = "shown"), e.show({ isImmediate: p }));
    }
    if (p) {
      h();
      return;
    }
    ((t = "waiting-to-show"), Af(h, e.delay));
  }
  d();
  var f = {
    keep: i,
    abort: n,
    isActive: r,
    requestHide: c,
    finishHideAnimation: s,
    mousePosition: u(),
  };
  return f;
}
function px(e, t) {
  var r = ak();
  return t ? "".concat(r(e)) : void 0;
}
var If = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81u0j _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d7jlr _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7",
  },
  hx = function (t) {
    var r = t.shortcut;
    return _.createElement(
      "div",
      { className: R([If.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return _.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: R([If.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  Wh = _.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      o = t.children,
      i = t.placement,
      c = t.testId,
      s = t.onMouseOut,
      l = t.onMouseOver,
      u = t.id,
      d = t.shortcut;
    return _.createElement(
      "div",
      { ref: r, style: n, "data-testid": c ? "".concat(c, "--wrapper") : void 0 },
      _.createElement(
        "div",
        {
          role: "tooltip",
          className: R(["_80om73ad", a]),
          onMouseOut: s,
          onMouseOver: l,
          "data-placement": i,
          "data-testid": c,
          id: u,
        },
        o,
        d && pe("platform-dst-tooltip-shortcuts") && _.createElement(hx, { shortcut: d }),
      ),
    );
  });
Wh.displayName = "TooltipPrimitive";
var ms = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _85i5v77o _1q51v77o _y4ti12x7 _bozg12x7 _slp31hna",
    baseRefreshedPadding: "_1q511b66 _85i51b66",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  Jh = _.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      o = t.children,
      i = t.truncate,
      c = t.placement,
      s = t.testId,
      l = t.onMouseOut,
      u = t.onMouseOver,
      d = t.id,
      f = t.shortcut;
    return _.createElement(
      Wh,
      {
        ref: r,
        style: n,
        className: R([
          ms.base,
          pe("platform-dst-tooltip-shortcuts") && ms.baseRefreshedPadding,
          i && ms.truncate,
          a,
        ]),
        placement: c,
        testId: s,
        id: d,
        onMouseOut: l,
        onMouseOver: u,
        shortcut: f,
      },
      o,
    );
  });
Jh.displayName = "TooltipContainer";
function jf(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function Df(e, t) {
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
function Xr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Df(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Df(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var gx = ok.tooltip(),
  Tf = {
    componentName: "tooltip",
    packageName: "@atlaskit/tooltip",
    packageVersion: "0.0.0-development",
  },
  bx = { top: "bottom", bottom: "top", left: "right", right: "left" },
  _x = function (t) {
    return t.split("-")[0];
  };
function mx(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    o = a === void 0 ? "bottom" : a,
    i = e.content,
    c = e.truncate,
    s = c === void 0 ? !1 : c,
    l = e.component,
    u = l === void 0 ? Jh : l,
    d = e.tag,
    f = d === void 0 ? "div" : d,
    p = e.testId,
    h = e.delay,
    v = h === void 0 ? 300 : h,
    g = e.onShow,
    b = g === void 0 ? Ae : g,
    y = e.onHide,
    w = y === void 0 ? Ae : y,
    k = e.canAppear,
    m = e.hideTooltipOnClick,
    S = m === void 0 ? !1 : m,
    E = e.hideTooltipOnMouseDown,
    A = E === void 0 ? !1 : E,
    D = e.analyticsContext,
    P = e.strategy,
    M = P === void 0 ? "fixed" : P,
    z = e.ignoreTooltipPointerEvents,
    $ = z === void 0 ? !1 : z,
    q = e.isScreenReaderAnnouncementDisabled,
    U = q === void 0 ? !1 : q,
    V = e.shortcut,
    G = n === "mouse" ? o : n,
    H = Su(Xr({ fn: b, action: "displayed", analyticsData: D }, Tf)),
    F = Su(Xr({ fn: w, action: "hidden", analyticsData: D }, Tf)),
    j = _.useRef(null),
    me = _.useState("hide"),
    se = J(me, 2),
    le = se[0],
    fe = se[1],
    he = _.useRef(null),
    ue = _.useRef(null),
    Te = function (oe) {
      ((ue.current = oe), (he.current = oe ? oe.firstElementChild : null));
    },
    ke = _.useCallback(function (L) {
      he.current = L;
    }, []),
    Me = ba(le),
    ve = ba(H),
    Le = ba(F),
    tr = ba(v),
    vt = ba(k),
    Ce = _.useRef(!1),
    Re = _.useCallback(function (L) {
      ((j.current = L), (Ce.current = !1));
    }, []),
    Ot = _.useCallback(
      function () {
        j.current &&
          (Ce.current && Le.current(), (j.current = null), (Ce.current = !1), fe("hide"));
      },
      [Le],
    ),
    Qe = _.useCallback(
      function () {
        j.current && (j.current.abort(), Ce.current && Le.current(), (j.current = null));
      },
      [Le],
    );
  _.useEffect(
    function () {
      return function () {
        j.current && Qe();
      };
    },
    [Qe],
  );
  var Ve = _.useRef(!1);
  _.useEffect(function () {
    return fx({
      onRegister: function (oe) {
        var zt = oe.isDragging;
        Ve.current = zt;
      },
      onDragStart: function () {
        var oe;
        ((oe = j.current) === null || oe === void 0 || oe.requestHide({ isImmediate: !0 }),
          (Ve.current = !0));
      },
      onDragEnd: function () {
        Ve.current = !1;
      },
    });
  }, []);
  var Ne = _.useCallback(
      function (L) {
        var oe;
        if (!Ve.current) {
          if ((j.current && !j.current.isActive() && Qe(), j.current && j.current.isActive())) {
            j.current.keep();
            return;
          }
          if (!(vt.current && !((oe = vt.current) !== null && oe !== void 0 && oe.call(vt)))) {
            var zt = {
                source: L,
                delay: tr.current,
                show: function (Lr) {
                  var yn = Lr.isImmediate;
                  (Ce.current || ((Ce.current = !0), ve.current()),
                    fe(yn ? "show-immediate" : "fade-in"));
                },
                hide: function (Lr) {
                  var yn = Lr.isImmediate;
                  fe(yn ? "hide" : "before-fade-out");
                },
                done: Ot,
              },
              bi = vx(zt);
            Re(bi);
          }
        }
      },
      [vt, tr, Ot, Re, Qe, ve],
    ),
    Ie = _.useCallback(
      function () {
        var L;
        (L = j.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
      },
      [j],
    );
  (sO({ onClose: Ie, isDisabled: le === "hide" || le === "fade-out" }),
    _.useEffect(
      function () {
        if (le === "hide") return Ae;
        le === "before-fade-out" && fe("fade-out");
        var L = di.bind(window, {
          type: "scroll",
          listener: function () {
            j.current && j.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return L;
      },
      [le],
    ));
  var re = _.useCallback(
      function () {
        A && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [A],
    ),
    Oe = _.useCallback(
      function () {
        S && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    je = _.useCallback(
      function (L) {
        if (!(ue.current && L.target === ue.current) && !L.defaultPrevented) {
          L.preventDefault();
          var oe =
            n === "mouse"
              ? { type: "mouse", mouse: jf({ left: L.clientX, top: L.clientY }) }
              : { type: "keyboard" };
          Ne(oe);
        }
      },
      [n, Ne],
    ),
    St = _.useCallback(function (L) {
      (ue.current && L.target === ue.current) ||
        L.defaultPrevented ||
        (L.preventDefault(), j.current && j.current.requestHide({ isImmediate: !1 }));
    }, []),
    Mr =
      n === "mouse"
        ? function (L) {
            var oe;
            (oe = j.current) !== null &&
              oe !== void 0 &&
              oe.isActive() &&
              (j.current.mousePosition = jf({ left: L.clientX, top: L.clientY }));
          }
        : void 0,
    de = _.useCallback(function () {
      if (j.current && j.current.isActive()) {
        j.current.keep();
        return;
      }
    }, []),
    rr = _.useCallback(
      function (L) {
        try {
          if (!L.target.matches(":focus-visible") && pe("platform-tooltip-focus-visible-new"))
            return;
        } catch {}
        Ne({ type: "keyboard" });
      },
      [Ne],
    ),
    et = _.useCallback(function () {
      j.current && j.current.requestHide({ isImmediate: !1 });
    }, []),
    Bt = _.useCallback(
      function (L) {
        L === "exiting" &&
          Me.current === "fade-out" &&
          j.current &&
          j.current.finishHideAnimation();
      },
      [Me],
    ),
    Za = f,
    pt = le !== "hide" && !!i,
    Qa = !U && pt,
    Tc = le !== "hide" && le !== "fade-out",
    ig = _.useCallback(function () {
      var L;
      (L = j.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
    }, []);
  dO({ isOpen: pt && Tc, onClose: ig });
  var Mc = function () {
      var oe;
      if (n === "mouse" && (oe = j.current) !== null && oe !== void 0 && oe.mousePosition) {
        var zt;
        return (zt = j.current) === null || zt === void 0 ? void 0 : zt.mousePosition;
      }
      return he.current || void 0;
    },
    mn = px("tooltip", Qa),
    gi = {
      onMouseOver: je,
      onMouseOut: St,
      onMouseMove: Mr,
      onMouseDown: re,
      onClick: Oe,
      onFocus: rr,
      onBlur: et,
    };
  p && (gi["data-testid"] = "".concat(p, "--container"));
  var Lc = typeof t == "function";
  _.useEffect(
    function () {
      if (!Lc) {
        var L = he.current;
        if (!(!L || !mn))
          return (
            L.setAttribute("aria-describedby", mn),
            function () {
              return L.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [Lc, mn],
  );
  var Nc = Qa
    ? O.createElement(
        "span",
        { "data-testid": p ? "".concat(p, "-hidden") : void 0, hidden: !0, id: mn },
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
          t(Xr(Xr({}, gi), {}, { "aria-describedby": mn, ref: ke })),
          Nc,
        )
      : O.createElement(Za, Z({}, gi, { ref: Te, role: "presentation" }), t, Nc),
    pt
      ? O.createElement(
          ux,
          { zIndex: gx },
          O.createElement(YS, { placement: G, referenceElement: Mc(), strategy: M }, function (L) {
            var oe = L.ref,
              zt = L.style,
              bi = L.update,
              _i = L.placement,
              Lr = n === "mouse" ? void 0 : bx[_x(_i)];
            return O.createElement(
              Ih,
              { appear: !0 },
              Tc &&
                O.createElement(
                  EO,
                  {
                    distance: "constant",
                    entranceDirection: Lr,
                    exitDirection: Lr,
                    onFinish: Bt,
                    duration: le !== "show-immediate" ? "medium" : "none",
                  },
                  function (yn) {
                    var sg = yn.className;
                    return O.createElement(
                      u,
                      {
                        ref: oe,
                        className: "Tooltip ".concat(sg),
                        style: Xr(Xr({}, zt), $ && { pointerEvents: "none" }),
                        truncate: s,
                        placement: G,
                        testId: Mc() ? p : p && "".concat(p, "--unresolved"),
                        onMouseOut: St,
                        onMouseOver: de,
                        shortcut: V,
                      },
                      typeof i == "function" ? i({ update: bi }) : i,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var yx = [
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
  ma = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  Mf = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syaz1gjq _k48pmoej" },
  Yh = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var o = t.innerRef,
      i = t.isSortable,
      c = t.sortOrder,
      s = t.onClick,
      l = t.headCellId,
      u = t.activeSortButtonId,
      d = t.ascendingSortTooltip,
      f = d === void 0 ? "Sort ascending" : d,
      p = t.descendingSortTooltip,
      h = p === void 0 ? "Sort descending" : p,
      v = t.buttonAriaRoleDescription,
      g = v === void 0 ? "Sort button" : v,
      b = t.isIconOnlyHeader,
      y = te(t, yx),
      w = _.useState(!1),
      k = J(w, 2),
      m = k[0],
      S = k[1],
      E = _.useState(!1),
      A = J(E, 2),
      D = A[0],
      P = A[1],
      M = l === u || c !== void 0,
      z = m || M || D,
      $ = z && b,
      q = !b || z || (b && !D),
      U = _.useCallback(
        function () {
          P?.(!0);
        },
        [P],
      ),
      V = _.useCallback(
        function () {
          P?.(!1);
        },
        [P],
      ),
      G = _.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      H = _.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      F = O.createElement(
        ui,
        { xcss: Mf.headCellContainer, onMouseEnter: G, onMouseLeave: H, onFocus: U, onBlur: V },
        O.createElement(
          mx,
          { content: c === Pr ? f : h },
          O.createElement(
            nh,
            { onClick: s, xcss: ma.buttonWrapper, "aria-roledescription": g },
            O.createElement(
              qo,
              { xcss: $ ? ma.hideIconHeaderWrapper : ma.visibleHeaderWrapper },
              O.createElement("span", { className: R([Mf.text]) }, r),
            ),
            q &&
              O.createElement(
                qo,
                { xcss: z ? ma.sortIconVisibleWrapper : ma.sortIconHiddenWrapper },
                c === Pr
                  ? O.createElement(oO, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : O.createElement(rO, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return O.createElement(
      X1,
      Z(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof o != "string" ? o : null,
        },
        y,
        { isSortable: i, sortOrder: c },
      ),
      i ? F : r,
    );
  },
  wx = ["isRanking", "refHeight", "refWidth"];
function kx(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, Xh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Xh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Xh = function () {
    return !!e;
  })();
}
var Ox = (function (e) {
    function t() {
      return (be(this, t), kx(this, t, arguments));
    }
    return (
      Ze(t, e),
      _e(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var o = n.refWidth,
              i = te(n, wx),
              c = Tm(a, o);
            return O.createElement(Yh, Z({ inlineStyles: c }, i));
          },
        },
      ])
    );
  })(O.Component),
  Sx = Q1(Ox),
  xx = ["cells"],
  Ex = [
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
function Cx(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, Zh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Zh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Zh = function () {
    return !!e;
  })();
}
var Rx = (function (e) {
    function t(r) {
      var n;
      return (be(this, t), (n = Cx(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Ze(t, e),
      _e(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            Fo(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              Fo(n.sortKey, n.head);
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
              l = a.onSort,
              u = a.isRanking,
              d = a.isRankable,
              f = a.testId,
              p = this.state.activeSortButtonId;
            if (!o) return null;
            var h = d ? Sx : Yh,
              v = o.cells,
              g = te(o, xx);
            return O.createElement(
              Y1,
              Z({}, g, { isRanking: u, testId: f && "".concat(f, "--head") }),
              O.createElement(
                "tr",
                null,
                v.map(function (b, y) {
                  var w = b.ascendingSortTooltip,
                    k = b.buttonAriaRoleDescription,
                    m = b.colSpan,
                    S = b.content,
                    E = b.descendingSortTooltip,
                    A = b.isIconOnlyHeader,
                    D = b.isSortable,
                    P = b.key,
                    M = b.shouldTruncate,
                    z = b.testId,
                    $ = b.width,
                    q = te(b, Ex),
                    U = "head-cell-".concat(y),
                    V = function () {
                      (n.setState({ activeSortButtonId: U }), D && l(b)());
                    };
                  return O.createElement(
                    h,
                    Z(
                      {
                        colSpan: m,
                        content: S,
                        isFixedSize: s,
                        isIconOnlyHeader: A,
                        isSortable: !!D,
                        isRanking: u,
                        key: P || y,
                        headCellId: U,
                        activeSortButtonId: p,
                        onClick: V,
                        testId: z || f,
                        shouldTruncate: M,
                        sortOrder: P === i ? c : void 0,
                        width: $,
                        ascendingSortTooltip: w,
                        descendingSortTooltip: E,
                        buttonAriaRoleDescription: k,
                      },
                      q,
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
  Px = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function Ax(e) {
  switch (e) {
    case zo:
      return Pr;
    case Pr:
      return zo;
    default:
      return e;
  }
}
var Ix = function (t) {
    var r = t.caption,
      n = t.head,
      a = t.highlightedRowIndex,
      o = t.rows,
      i = t.sortKey,
      c = t.sortOrder,
      s = t.loadingLabel,
      l = t.onPageRowsUpdate,
      u = t.testId,
      d = t.totalRows,
      f = t.label,
      p = t.isLoading,
      h = p === void 0 ? !1 : p,
      v = t.isFixedSize,
      g = v === void 0 ? !1 : v,
      b = t.rowsPerPage,
      y = b === void 0 ? 1 / 0 : b,
      w = t.onSetPage,
      k = w === void 0 ? Ae : w,
      m = t.onSort,
      S = m === void 0 ? Ae : m,
      E = t.page,
      A = E === void 0 ? 1 : E,
      D = t.emptyView,
      P = t.isRankable,
      M = P === void 0 ? !1 : P,
      z = t.isRankingDisabled,
      $ = z === void 0 ? !1 : z,
      q = t.onRankStart,
      U = q === void 0 ? Ae : q,
      V = t.onRankEnd,
      G = V === void 0 ? Ae : V,
      H = t.loadingSpinnerSize,
      F = t.paginationi18n,
      j =
        F === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : F,
      me = _.useState(!1),
      se = J(me, 2),
      le = se[0],
      fe = se[1],
      he = _.useRef(null),
      ue = cn({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.2",
      }),
      Te = cn({
        fn: G,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.2",
      });
    _.useEffect(
      function () {
        (Fo(i, n), Dm(n));
      },
      [i, n],
    );
    var ke = function (Oe) {
        return function () {
          var je = Oe.key;
          if (je) {
            if (ue && M && je === i && c === zo) {
              ue({ key: null, sortOrder: null, item: Oe });
              return;
            }
            var St = je !== i ? Pr : Ax(c);
            ue && ue({ key: je, item: Oe, sortOrder: St });
          }
        };
      },
      Me = function (Oe, je) {
        k(Oe, je);
      },
      ve = function (Oe) {
        (fe(!0), U(Oe));
      },
      Le = function (Oe) {
        (fe(!1), Te(Oe));
      },
      tr = function () {
        return H || (Cp(o || [], A, y).length > 2 ? Uo : ey);
      },
      vt = function () {
        return h ? O.createElement(iy, { testId: u }) : D && O.createElement(sy, { testId: u }, D);
      },
      Ce = o && o.length,
      Re,
      Ot = !1;
    (d && Number.isInteger(d) && y && Ce && Ce <= d
      ? ((Re = Math.ceil(d / y)), (Ot = !0))
      : (Re = Ce && y ? Math.ceil(Ce / y) : 0),
      (Re = Re < 1 ? 1 : Re));
    var Qe = A > Re ? Re : A,
      Ve = !!Ce,
      Ne = tr(),
      Ie = vt();
    return O.createElement(
      O.Fragment,
      null,
      O.createElement(
        $p,
        {
          isLoading: h && Ve,
          spinnerSize: Ne,
          targetRef: function () {
            return he.current;
          },
          testId: u,
          loadingLabel: s,
        },
        O.createElement(
          ny,
          { isFixedSize: g, "aria-label": f, hasDataRow: Ve, testId: u, isLoading: h },
          !!r && O.createElement(ay, null, r),
          n &&
            O.createElement(Rx, {
              head: n,
              onSort: ke,
              sortKey: i,
              sortOrder: c,
              isRanking: le,
              isRankable: M,
              testId: u,
            }),
          Ve &&
            O.createElement(Dx, {
              ref: he,
              highlightedRowIndex: a,
              rows: o,
              head: n,
              sortKey: i,
              sortOrder: c,
              rowsPerPage: y,
              page: Qe,
              isFixedSize: g || !1,
              onPageRowsUpdate: l,
              isTotalPagesControlledExternally: Ot,
              testId: u,
              isRankable: M,
              isRanking: le,
              onRankStart: ve,
              onRankEnd: Le,
              isRankingDisabled: $ || h || !1,
            }),
        ),
      ),
      Re <= 1
        ? null
        : O.createElement(
            oy,
            { testId: u },
            O.createElement(H1, {
              value: Qe,
              onChange: Me,
              total: Re,
              i18n: j,
              isDisabled: h,
              testId: u,
            }),
          ),
      !Ve &&
        Ie &&
        O.createElement(Np, { isLoading: h, spinnerSize: Uo, testId: u, loadingLabel: s }, Ie),
    );
  },
  jx = _.lazy(function () {
    return Fm(
      () => import("./body-BJ09gTLk.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  Dx = _.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      o = t.isRanking,
      i = t.onRankStart,
      c = t.onRankEnd,
      s = t.isRankingDisabled,
      l = te(t, Px),
      u = a && !l.sortKey,
      d = _.useState(!1),
      f = J(d, 2),
      p = f[0],
      h = f[1];
    _.useEffect(
      function () {
        u && h(!0);
      },
      [u],
    );
    var v = O.createElement(ky, Z({ ref: r }, l));
    return u && p
      ? O.createElement(
          Sy,
          { fallback: v },
          O.createElement(
            _.Suspense,
            { fallback: v },
            O.createElement(
              jx,
              Z({ ref: r }, l, {
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
function Tx(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, Qh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Qh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Qh = function () {
    return !!e;
  })();
}
var eg = (function (e) {
  function t() {
    var r;
    be(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = Tx(this, t, [].concat(a))),
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
          l = i.item,
          u = i.sortOrder,
          d = r.props.onSort;
        d && (d({ key: s, item: l, sortOrder: u }, c), r.setState({ sortKey: s, sortOrder: u }));
      }),
      C(r, "onRankEndIfExistsHandler", function (i) {
        r.props.onRankEnd && r.props.onRankEnd(i);
      }),
      C(r, "onRankEndHandler", function (i) {
        var c = i.destination,
          s = r.state,
          l = s.rows,
          u = s.page,
          d = r.props.rowsPerPage;
        if (!c || !l) {
          r.onRankEndIfExistsHandler(i);
          return;
        }
        var f = Mm(i, l, u, d);
        (r.setState({ rows: f }), r.onRankEndIfExistsHandler(i));
      }),
      r
    );
  }
  return (
    Ze(t, e),
    _e(t, [
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
            l = s.caption,
            u = s.emptyView,
            d = s.head,
            f = s.highlightedRowIndex,
            p = s.loadingSpinnerSize,
            h = s.isLoading,
            v = s.loadingLabel,
            g = s.isFixedSize,
            b = s.isRankable,
            y = s.isRankingDisabled,
            w = s.rowsPerPage,
            k = s.paginationi18n,
            m = s.onRankStart,
            S = s.onPageRowsUpdate,
            E = s.testId,
            A = s.label;
          return O.createElement(Ix, {
            paginationi18n: k,
            caption: l,
            emptyView: u,
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
            isRankingDisabled: y,
            onRankEnd: this.onRankEndHandler,
            onRankStart: m,
            onPageRowsUpdate: S,
            testId: E,
            label: A,
          });
        },
      },
    ])
  );
})(O.Component);
C(eg, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Ae,
  onSort: Ae,
  rowsPerPage: 1 / 0,
});
const Mx = (e) => {
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
  Lx = (e) => ({ cells: Mx() });
function Nx(e) {
  return function (t) {
    e.forEach(function (r) {
      typeof r == "function" ? r(t) : r !== null && (r.current = t);
    });
  };
}
var tg = _.createContext(void 0),
  Fx = function () {
    var t = _.useContext(tg);
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
function Ht(e) {
  (e.preventDefault(), e.stopPropagation());
}
var $x = 9;
function Lf(e) {
  e.keyCode !== $x && Ht(e);
}
function Bx(e, t) {
  return e
    ? {
        onMouseDownCapture: Ht,
        onMouseUpCapture: Ht,
        onKeyDownCapture: Lf,
        onKeyUpCapture: Lf,
        onTouchStartCapture: Ht,
        onTouchEndCapture: Ht,
        onPointerDownCapture: Ht,
        onPointerUpCapture: Ht,
        onClickCapture: Ht,
        onClick: Ht,
      }
    : t;
}
function zx(e) {
  switch (e) {
    case "compact":
      return "small";
    default:
      return "medium";
  }
}
function Ux(e) {
  var t = e.appearance,
    r = e.isDisabled,
    n = e.isSelected;
  return r || n
    ? "inherit"
    : t === "primary" || t === "danger" || t === "discovery"
      ? "invert"
      : "inherit";
}
function qx(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isDisabled,
    a = e.isSelected,
    o = e.testId;
  return O.createElement(fc, {
    size: zx(r),
    appearance: Ux({ appearance: t, isDisabled: n, isSelected: a }),
    testId: o ? "".concat(o, "--loading-spinner") : void 0,
  });
}
var Vx = [
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
  Gx = ["className", "css", "as", "style"],
  Nf = ", Loading",
  De = {
    base: "_2rkofajl _11c82smr _v5649dqc _189eidpf _1rjc12x7 _1e0c116y _vchhusvi _1bsb1wug _p12f1osq _kqswh2mm _4cvr1q9y _1bah1h6o _gy1p1b66 _1o9zidpf _4t3iviql _k48p1wq8 _y4tiutpp _bozgutpp _y3gn1h6o _s7n4nkob _14mj1kw7 _9v7aze3t _1tv3nqa1 _39yqe4h9 _11fnglyw _18postnw",
    linkDecorationUnset:
      "_4bfu1r31 _1hmsglyw _ajmmnqa1 _1a3b1r31 _4fprglyw _5goinqa1 _9oik1r31 _1bnxglyw _jf4cnqa1 _1nrm1r31 _c2waglyw _1iohnqa1",
    disabled: "_80om13gf _syaz1lh4 _30l31lh4 _9h8h1lh4",
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
  Zr = {
    root: "_bfhk1j54 _syaz10s3 _105310s3 _f8pj10s3 _30l310s3 _9h8h10s3",
    rootRefreshed:
      "_bfhksm61 _syaz1gjq _8l3mmuej _aetrb3bt _10531gjq _f8pj1gjq _30l31gjq _9h8h1gjq",
    interactive: "_irr3yw9d _30l310s3 _1di6ih13 _9h8h10s3",
    interactiveRefreshed: "_irr3166n _30l31gjq _1di61dty _9h8h1gjq",
    disabledRefreshed: "_bfhk1j28 _8l3m13gt _irr31j28 _1di61j28",
  },
  Ff = {
    root: "_bfhkomb0 _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31wqm _9h8h15cr _1di617hq",
  },
  $f = {
    root: "_bfhk1ikc _syazal3n _1053al3n _f8pjal3n _30l3al3n _9h8hal3n",
    interactive: "_30l3al3n _irr31j43 _9h8hal3n _1di6h4op",
  },
  Bf = {
    root: "_bfhk1v7l _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31rwk _9h8h15cr _1di6yycf",
  },
  zf = {
    root: "_bfhk1vbi _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr37gr8 _9h8h15cr _1di61wu2",
  },
  po = {
    root: "_bfhkqtfy _syaz10s3 _105310s3 _f8pj10s3 _30l310s3 _9h8h10s3",
    rootRefreshed: "_bfhkqtfy _syaz1gjq _10531gjq _f8pj1gjq _30l31gjq _9h8h1gjq",
    interactive: "_irr34mfv _30l310s3 _1di619qy _9h8h10s3",
    interactiveRefreshed: "_irr34mfv _30l31gjq _1di619qy _9h8h1gjq",
  },
  kr = {
    root: "_bfhk7btw _syaz1pke _10531pke _f8pj1pke _30l31pke _9h8h1pke",
    rootRefreshed:
      "_bfhkfg4m _syaz1ldt _8l3mcoux _aetrb3bt _10531ldt _f8pj1ldt _30l31ldt _9h8h1ldt",
    insideSplitButton: "_1pbycs5v",
    interactive: "_irr3t71w _30l31pke _1di6yssv _9h8h1pke",
    warning: "_bfhkvdtc _syaz16q2 _30l31pke _irr3vdtc _9h8h1pke _1di6vdtc",
    danger: "_bfhkbeib _syaz1pke _30l31pke _irr3beib _9h8h1pke _1di6beib",
    discovery: "_bfhk1g49 _syaz1pke _30l31pke _irr31g49 _9h8h1pke _1di61g49",
  },
  Kx = O.forwardRef(function (e, t) {
    var r = e.appearance,
      n = e.autoFocus,
      a = n === void 0 ? !1 : n,
      o = e.isDisabled,
      i = o === void 0 ? !1 : o,
      c = e.isLoading,
      s = c === void 0 ? !1 : c,
      l = e.isSelected,
      u = l === void 0 ? !1 : l,
      d = e.isIconButton,
      f = d === void 0 ? !1 : d,
      p = e.isCircle,
      h = p === void 0 ? !1 : p,
      v = e.hasIconBefore,
      g = v === void 0 ? !1 : v,
      b = e.hasIconAfter,
      y = b === void 0 ? !1 : b,
      w = e.shouldFitContainer,
      k = w === void 0 ? !1 : w,
      m = e.spacing,
      S = m === void 0 ? "default" : m,
      E = e.ariaLabel,
      A = e.ariaLabelledBy,
      D = e.children,
      P = e.interactionName,
      M = e.onClick,
      z = e.onMouseDown,
      $ = e.onMouseDownCapture,
      q = e.onMouseUp,
      U = e.onMouseUpCapture,
      V = e.onKeyDown,
      G = e.onKeyDownCapture,
      H = e.onKeyUp,
      F = e.onKeyUpCapture,
      j = e.onTouchStart,
      me = e.onTouchStartCapture,
      se = e.onTouchEnd,
      le = e.onTouchEndCapture,
      fe = e.onPointerDown,
      he = e.onPointerDownCapture,
      ue = e.onPointerUp,
      Te = e.onPointerUpCapture,
      ke = e.onClickCapture,
      Me = e.testId,
      ve = e.analyticsContext,
      Le = e.componentName,
      tr = e.role,
      vt = e.onMouseOver,
      Ce = e.onMouseOut,
      Re = e.onFocus,
      Ot = e.onBlur,
      Qe = e.onMouseMove,
      Ve = e.type,
      Ne = te(e, Vx),
      Ie = _.useRef(null),
      re = Fx(),
      Oe = sh(),
      je = !!re,
      St = re?.isNavigationSplitButton || !1,
      Mr = re?.appearance === "default",
      de =
        Mr && pe("platform-component-visual-refresh") ? "subtle" : r || re?.appearance || "default",
      rr = re?.spacing || S,
      et = re?.isDisabled || i,
      Bt = !et && !s,
      Za = et || s,
      pt = u && !et;
    (kh(Ie, a), Ne.className, Ne.css, Ne.as, Ne.style);
    var Qa = te(Ne, Gx);
    return O.createElement(
      nh,
      Z(
        {},
        Qa,
        {
          componentName: Le || "button",
          analyticsContext: ve,
          role: tr,
          ref: Nx([Ie, t]),
          xcss: eh(
            De.base,
            de === "default" &&
              (pe("platform-component-visual-refresh") ? Zr.rootRefreshed : Zr.root),
            de === "default" &&
              Bt &&
              (pe("platform-component-visual-refresh") ? Zr.interactiveRefreshed : Zr.interactive),
            de === "primary" && Ff.root,
            de === "primary" && Bt && Ff.interactive,
            de === "warning" && $f.root,
            de === "warning" && Bt && $f.interactive,
            de === "danger" && Bf.root,
            de === "danger" && Bt && Bf.interactive,
            de === "discovery" && zf.root,
            de === "discovery" && Bt && zf.interactive,
            de === "subtle" &&
              (pe("platform-component-visual-refresh") ? po.rootRefreshed : po.root),
            de === "subtle" &&
              Bt &&
              (pe("platform-component-visual-refresh") ? po.interactiveRefreshed : po.interactive),
            De.linkDecorationUnset,
            pt && (pe("platform-component-visual-refresh") ? kr.rootRefreshed : kr.root),
            pt && je && kr.insideSplitButton,
            pt && Bt && kr.interactive,
            pt && de === "danger" && kr.danger,
            pt && de === "warning" && kr.warning,
            pt && de === "discovery" && kr.discovery,
            et && De.disabled,
            et &&
              (!pe("platform-component-visual-refresh") || (de !== "default" && de !== "subtle")) &&
              De.sharedDisabled,
            et &&
              de === "default" &&
              (pe("platform-component-visual-refresh") ? Zr.disabledRefreshed : Zr.disabled),
            h && !je && De.circle,
            rr === "compact" && De.spacingCompact,
            g && De.buttonIconBefore,
            k && De.fullWidth,
            y && De.buttonIconAfter,
            f && De.iconButton,
            f && rr === "compact" && De.iconButtonCompact,
            s && De.loading,
            je && De.splitButton,
            St && De.navigationSplitButton,
          ),
          isDisabled: Za,
          "aria-label": s && E && !A ? "".concat(E, " ").concat(Nf) : E,
          "aria-labelledby": s && A ? "".concat(A, " ").concat(Oe) : A,
          onClick: M,
        },
        Bx(Za, {
          onMouseDownCapture: $,
          onMouseUpCapture: U,
          onKeyDownCapture: G,
          onKeyUpCapture: F,
          onTouchStartCapture: me,
          onTouchEndCapture: le,
          onPointerDownCapture: he,
          onPointerUpCapture: Te,
          onClickCapture: ke,
        }),
        {
          testId: Me,
          onMouseOver: vt,
          onFocus: Re,
          onMouseMove: Qe,
          onBlur: Ot,
          type: Ve,
          interactionName: P,
          onMouseDown: z,
          onMouseUp: q,
          onKeyDown: V,
          onMouseOut: Ce,
          onKeyUp: H,
          onTouchStart: j,
          onTouchEnd: se,
          onPointerDown: fe,
          onPointerUp: ue,
        },
      ),
      O.createElement(
        tg.Provider,
        { value: void 0 },
        D,
        s &&
          O.createElement(
            "span",
            { className: R([De.loadingOverlay]) },
            qx({ spacing: rr, appearance: de, isDisabled: et, isSelected: pt, testId: Me }),
          ),
        s && (A || !E) && O.createElement(bc, { id: Oe }, Nf),
      ),
    );
  }),
  Qr = {
    text: "_1reo15vq _18m915vq _16jlkb7n _1o9zkb7n _1bto1l2s _o5721q9c",
    icon: "_1e0c1txw _16jlidpf _1o9zidpf _1wpz1h6o _1wybidpf _vwz4idpf _uiztglyw",
    beforeIcon: "_1he91b66 _w795v77o",
    afterIcon: "_1he9v77o _w7951b66",
    common: "_v564g17y",
    fade: "_tzy4idpf",
  },
  ys = function (t) {
    var r = t.children,
      n = t.type,
      a = n === void 0 ? "text" : n,
      o = t.isLoading,
      i = t.position;
    return O.createElement(
      "span",
      {
        className: R([
          Qr.common,
          a === "text" && Qr.text,
          a === "icon" && Qr.icon,
          o && Qr.fade,
          i === "before" && Qr.beforeIcon,
          i === "after" && Qr.afterIcon,
        ]),
      },
      r,
    );
  };
function Hx(e) {
  return !e.displayName && !e.render && typeof e == "function";
}
var Uf = function (t) {
    var r = t.icon,
      n = Hx(r),
      a = {
        label: "",
        color: "currentColor",
        size: pe("platform_dst_button_chevron_sizing")
          ? function (o) {
              return o.startsWith("Chevron") ? "small" : "medium";
            }
          : void 0,
      };
    return O.createElement(O.Fragment, null, n ? r(a) : O.createElement(r, a));
  },
  Wx = [
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
  Jx = ["className", "css", "as", "style"],
  Dc = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.analyticsContext,
        a = t.appearance,
        o = t["aria-label"],
        i = t["aria-labelledby"],
        c = t.autoFocus,
        s = t.children,
        l = t.iconAfter,
        u = t.iconBefore,
        d = t.interactionName,
        f = t.isDisabled,
        p = t.isLoading,
        h = p === void 0 ? !1 : p,
        v = t.isSelected,
        g = t.onClick,
        b = t.onClickCapture,
        y = t.onKeyDownCapture,
        w = t.onKeyUpCapture,
        k = t.onMouseDownCapture,
        m = t.onMouseUpCapture,
        S = t.onPointerDownCapture,
        E = t.onPointerUpCapture,
        A = t.onTouchEndCapture,
        D = t.onTouchStartCapture,
        P = t.shouldFitContainer,
        M = t.spacing,
        z = t.testId,
        $ = t.type,
        q = $ === void 0 ? "button" : $,
        U = te(t, Wx);
      (U.className, U.css, U.as, U.style);
      var V = te(U, Jx);
      return O.createElement(
        Kx,
        Z(
          {
            analyticsContext: n,
            ref: r,
            appearance: a,
            autoFocus: c,
            isDisabled: f,
            isLoading: h,
            isSelected: v,
            hasIconBefore: !!u,
            hasIconAfter: !!l,
            shouldFitContainer: P,
            spacing: M,
            ariaLabel: o,
            ariaLabelledBy: i,
            onClick: g,
            onClickCapture: b,
            onKeyDownCapture: y,
            onKeyUpCapture: w,
            onMouseDownCapture: k,
            onMouseUpCapture: m,
            onPointerDownCapture: S,
            onPointerUpCapture: E,
            onTouchStartCapture: D,
            onTouchEndCapture: A,
            testId: z,
            componentName: "Button",
            type: q,
            interactionName: d,
          },
          V,
        ),
        O.createElement(
          _.Fragment,
          null,
          u &&
            O.createElement(
              ys,
              { type: "icon", position: "before", isLoading: h },
              O.createElement(Uf, { icon: u }),
            ),
          s && O.createElement(ys, { isLoading: h }, s),
          l &&
            O.createElement(
              ys,
              { type: "icon", position: "after", isLoading: h },
              O.createElement(Uf, { icon: l }),
            ),
        ),
      );
    }),
  );
Dc.displayName = "Button";
const ho = si((e) => {
  const { stateStore: t } = ci(),
    r = Lx();
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
      return x.jsxs("div", { children: ["Unsupported $", e.type] });
  }
  return n
    ? x.jsx("div", {
        children: x.jsxs("div", {
          children: [
            x.jsx(eg, {
              head: r,
              rows: [n].map((a, o) => {
                const i = [
                  { key: "id", content: a.id },
                  { key: "testDateColumn", content: String(a.testDateColumn) },
                  { key: "testNameColumn", content: a.testNameColumn },
                  { key: "version", content: a.version !== void 0 ? String(a.version) : "EMPTY" },
                  {
                    key: "action",
                    content: x.jsx("div", {
                      children: x.jsx(Dc, {
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
              emptyView: x.jsx("div", { children: "Table is EMPTY" }),
              isRankable: !0,
            }),
            x.jsx("br", {}),
            x.jsx("br", {}),
          ],
        }),
      })
    : x.jsx("div", { children: "Try update first" });
});
function Yx(e) {
  return xp(e) || Rp(e) || uc(e) || Ep();
}
var rg = _.createContext(null),
  ng = _.createContext(null),
  ag = _.createContext(null);
function qf(e, t) {
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
function Xx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : qf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Zx = { componentName: "tabs", packageName: "@atlaskit/tabs", packageVersion: "18.2.2" },
  Vf = function (t) {
    var r = t.tabPanel,
      n = t.index,
      a = t.isSelected,
      o = t.tabsId;
    return (
      r &&
      _.createElement(
        ag.Provider,
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
  Qx = function (t) {
    var r = t.shouldUnmountTabPanelOnChange,
      n = r === void 0 ? !1 : r,
      a = t.selected,
      o = t.defaultSelected,
      i = t.onChange,
      c = t.id,
      s = t.analyticsContext,
      l = t.children,
      u = t.testId,
      d = _.useState(a || o || 0),
      f = J(d, 2),
      p = f[0],
      h = f[1],
      v = a === void 0 ? p : a,
      g = _.Children.toArray(l).filter(function (A) {
        return !!A;
      }),
      b = Yx(g),
      y = b[0],
      w = b.slice(1),
      k = _.useRef(new Set([v]));
    k.current.has(v) || k.current.add(v);
    var m = _.useCallback(
        function (A, D) {
          (i && i(A, D), h(A));
        },
        [i],
      ),
      S = cn(Xx({ fn: m, action: "clicked", analyticsData: s }, Zx)),
      E = n
        ? Vf({ tabPanel: w[v], index: v, isSelected: !0, tabsId: c })
        : Array.from(k.current).map(function (A) {
            return Vf({ tabPanel: w[A], index: A, isSelected: A === v, tabsId: c });
          });
    return _.createElement(
      "div",
      {
        "data-testid": u,
        className: R([
          "_1e0c1txw _p12f1osq _1tkeidpf _i0dl1osq _2lx21bp4 _16jlkb7n",
          "_1c3y1txw _ftfaidpf _18i0kb7n _185bglyw",
        ]),
      },
      _.createElement(ng.Provider, { value: { selected: v, onChange: S, tabsId: c } }, y),
      _.createElement(_.Fragment, null, E),
    );
  },
  eE = function () {
    var t = _.useContext(rg);
    if (t == null || typeof t > "u")
      throw Error("@atlaskit/tabs: A Tab must have a TabList parent.");
    return t;
  },
  tE = function () {
    var t = _.useContext(ng);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs: A TabList must have a Tabs parent.");
    return t;
  },
  rE = function () {
    var t = _.useContext(ag);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs:  A TabPanel must have a Tabs parent.");
    return t;
  },
  ya = function (t) {
    var r = t.children,
      n = t.testId,
      a = rE(),
      o = a.role,
      i = a.id,
      c = a.hidden,
      s = a["aria-labelledby"],
      l = a.tabIndex;
    return O.createElement(
      gc,
      {
        as: "div",
        isInset: !0,
        testId: n,
        role: o,
        id: i,
        hidden: c,
        "aria-labelledby": s,
        tabIndex: l,
      },
      O.createElement(_.Fragment, null, r),
    );
  },
  go = _.forwardRef(function (t, r) {
    var n = t.children,
      a = t.testId,
      o = eE(),
      i = o.onClick,
      c = o.id,
      s = o["aria-controls"],
      l = o["aria-posinset"],
      u = o["aria-selected"],
      d = o["aria-setsize"],
      f = o.onKeyDown,
      p = o.role,
      h = o.tabIndex;
    return O.createElement(
      gc,
      {
        as: "div",
        isInset: !0,
        testId: a,
        onClick: i,
        id: c,
        "aria-controls": s,
        "aria-posinset": l,
        "aria-selected": u,
        "aria-setsize": d,
        onKeyDown: f,
        role: p,
        tabIndex: h,
        ref: r,
      },
      O.createElement(rh, { weight: "medium", color: "inherit", maxLines: 1 }, n),
    );
  }),
  nE = function (t) {
    var r = t.children,
      n = tE(),
      a = n.tabsId,
      o = n.selected,
      i = n.onChange,
      c = _.createRef(),
      s = _.Children.toArray(r).filter(Boolean),
      l = s.length,
      u = _.useCallback(
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
            var h = l - 1;
            if (["Home", "End"].includes(p.key)) {
              var v = p.key === "Home" ? 0 : h;
              u(v);
              return;
            }
            var g = parseInt(p.currentTarget.getAttribute("aria-posinset") || "0") - 1,
              b = p.key === "ArrowRight" ? 1 : -1,
              y = g + b;
            ((y < 0 || y >= l) && (y = y < 0 ? h : 0), u(y));
          }
        },
        [l, u],
      ),
      f = _.useCallback(
        function (p) {
          var h = p.tab,
            v = p.isSelected,
            g = p.index;
          return _.createElement(
            rg.Provider,
            {
              value: {
                onClick: function () {
                  return i(g);
                },
                onKeyDown: d,
                "aria-setsize": l,
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
        [l, d, i, a],
      );
    return _.createElement(
      "div",
      {
        role: "tablist",
        ref: c,
        className: R([
          "_1e0c1txw _kqswh2mm _85i5ze3t _1q51ze3t _y4tize3t _bozgze3t",
          "_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _7hip15vq _1fud15vq _bb0mh2mm _1quz1425 _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _1lzu1mrt _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oaz1fgx _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1b8d1mrt _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i2072d1 _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _rsmz12s7 _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiemln51 _pascidpf _eid3idpf _zr3eidpf _fntnidpf _1mp41kw7 _kfgte4h9 _1cs8stnw _1russudh _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc",
        ]),
        style: {
          "--_13a5t4u": ir("var(--ds-text-subtle, ".concat(ln, ")")),
          "--_kkbq40": ir("var(--ds-text-subtle, ".concat(Wt, ")")),
          "--_71dbsd": ir("var(--ds-text, ".concat(Fs, ")")),
          "--_1hfkvbo": ir("var(--ds-text-selected, ".concat(Wt, ")")),
          "--_1c11uqn": ir("3px solid ".concat("var(--ds-border-selected, ".concat(Wt, ")"))),
          "--_lvpq93": ir("var(--ds-border, ".concat(Ey, ")")),
        },
      },
      s.map(function (p, h) {
        return f({ tab: p, index: h, isSelected: h === o });
      }),
    );
  },
  og = ((e) => (
    (e[(e.WITHOUT_VERSIONING = 0)] = "WITHOUT_VERSIONING"),
    (e[(e.OPTIMISTIC_NUMBER = 1)] = "OPTIMISTIC_NUMBER"),
    (e[(e.OPTIMISTIC_DATE = 2)] = "OPTIMISTIC_DATE"),
    (e[(e.OPTIMISTIC_TIMESTAMP = 3)] = "OPTIMISTIC_TIMESTAMP"),
    e
  ))(og || {});
const aE = Object.keys(og).filter((e) => isNaN(Number(e))),
  bo = ({ children: e, testId: t }) =>
    x.jsx("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: Gt("color.background.neutral"),
        borderRadius: "3px",
        color: Gt("color.text.subtlest"),
        font: Gt("font.heading.xxlarge"),
        marginBlockEnd: Gt("space.100", "8px"),
        marginBlockStart: Gt("space.200", "16px"),
        paddingBlockEnd: Gt("space.400", "32px"),
        paddingBlockStart: Gt("space.400", "32px"),
        paddingInlineEnd: Gt("space.400", "32px"),
        paddingInlineStart: Gt("space.400", "32px"),
      },
      "data-testid": t,
      children: e,
    });
function oE() {
  const { stateStore: e } = ci();
  return e.isLoading
    ? "loading...."
    : x.jsxs("div", {
        children: [
          x.jsxs("div", {
            className: "reset-section",
            children: [
              x.jsx("h2", { children: "Reset All" }),
              x.jsx("p", {
                children:
                  "Click the button below to revert all test entities to their initial state. This removes any changes you've made during testing.",
              }),
              x.jsx("br", {}),
              x.jsxs(Dc, {
                appearance: "danger",
                onClick: async () => {
                  try {
                    (e.loading("Clear ..."),
                      await ja.invoke("clearAll", {
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
          x.jsx("br", {}),
          x.jsx("p", {
            children:
              "Use the tabs below to navigate between different examples of optimistic locking. Each tab demonstrates a different versioning approach, along with instructions on how to test the locking behavior.",
          }),
          x.jsx("br", {}),
          x.jsxs(Qx, {
            onChange: (t) => console.log("Selected Tab", t + 1),
            defaultSelected: 1,
            id: "default",
            children: [
              x.jsxs(nE, {
                children: [
                  " ",
                  aE.map((t) => {
                    switch (t) {
                      case "WITHOUT_VERSIONING":
                        return x.jsx(
                          go,
                          { children: "Entity Without Version Column (No Locking)" },
                          t,
                        );
                      case "OPTIMISTIC_NUMBER":
                        return x.jsx(go, { children: "Entity with Numeric Version Column" }, t);
                      case "OPTIMISTIC_DATE":
                        return x.jsx(
                          go,
                          { children: "Entity with Datetime-Based Version Column" },
                          t,
                        );
                      case "OPTIMISTIC_TIMESTAMP":
                        return x.jsx(
                          go,
                          { children: "Entity with Timestamp-BasedVersion Column" },
                          t,
                        );
                    }
                  }),
                ],
              }),
              x.jsx(ya, { children: x.jsx(x.Fragment, {}) }),
              x.jsx(ya, {
                children: x.jsx(bo, {
                  children: x.jsxs("div", {
                    children: [
                      x.jsx("h2", { children: "Entity Without Version Column (No Locking)" }),
                      x.jsx("p", {
                        children:
                          "This entity does not use any versioning or optimistic locking mechanism. When two users open the same record in different browser tabs and both make changes, the last update simply overwrites the previous changes. There is no conflict detection in place.",
                      }),
                      x.jsx("h3", { children: "How to Test" }),
                      x.jsxs("ol", {
                        children: [
                          x.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          x.jsxs("li", {
                            children: [
                              "In the first tab, change any field and click ",
                              x.jsx("strong", { children: "Update" }),
                              ".",
                            ],
                          }),
                          x.jsxs("li", {
                            children: [
                              "In the second tab, also change a field and click ",
                              x.jsx("strong", { children: "Update" }),
                              ".",
                            ],
                          }),
                          x.jsx("li", {
                            children:
                              "Both updates will succeed, and the second update will overwrite the first one.",
                          }),
                        ],
                      }),
                      x.jsx("br", {}),
                      x.jsx(ho, { type: "WITHOUT_VERSIONING" }),
                    ],
                  }),
                }),
              }),
              x.jsx(ya, {
                children: x.jsx(bo, {
                  children: x.jsxs("div", {
                    className: "entity-section",
                    children: [
                      x.jsx("h2", { children: "Entity with Numeric Version Column" }),
                      x.jsx("p", {
                        children:
                          "This entity uses an integer field for optimistic locking. When a user updates the record, the version number increments. A second user with an outdated version will encounter an error upon saving.",
                      }),
                      x.jsx("h3", { children: "How to Test" }),
                      x.jsxs("ol", {
                        children: [
                          x.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          x.jsxs("li", {
                            children: [
                              "In the first tab, change any field and click ",
                              x.jsx("strong", { children: "Update" }),
                              ". This succeeds and increments the version number.",
                            ],
                          }),
                          x.jsx("li", {
                            children:
                              "In the second tab, attempt to update the record without refreshing.",
                          }),
                          x.jsx("li", {
                            children:
                              "The update will fail with an optimistic locking error, indicating the record was modified elsewhere.",
                          }),
                        ],
                      }),
                      x.jsx("br", {}),
                      x.jsx(ho, { type: "OPTIMISTIC_NUMBER" }),
                    ],
                  }),
                }),
              }),
              x.jsx(ya, {
                children: x.jsx(bo, {
                  children: x.jsxs("div", {
                    className: "entity-section",
                    children: [
                      x.jsx("h2", { children: "Entity with DateTime-Based Version Column" }),
                      x.jsx("p", {
                        children:
                          "This entity uses a datetime field for optimistic locking. Whenever the record is updated, the date-based version changes. Any subsequent update with the old date value will fail.",
                      }),
                      x.jsx("h3", { children: "How to Test" }),
                      x.jsxs("ol", {
                        children: [
                          x.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          x.jsxs("li", {
                            children: [
                              "In the first tab, change any field and click ",
                              x.jsx("strong", { children: "Update" }),
                              ". This sets or updates the date-based version.",
                            ],
                          }),
                          x.jsx("li", {
                            children:
                              "In the second tab, try to update the record without refreshing.",
                          }),
                          x.jsx("li", {
                            children:
                              "The second update will fail with an optimistic locking error because the version date has changed.",
                          }),
                        ],
                      }),
                      x.jsx("br", {}),
                      x.jsx(ho, { type: "OPTIMISTIC_DATE" }),
                    ],
                  }),
                }),
              }),
              x.jsx(ya, {
                children: x.jsx(bo, {
                  children: x.jsxs("div", {
                    className: "entity-section",
                    children: [
                      x.jsx("h2", { children: "Entity with Timestamp-Based Version Column" }),
                      x.jsx("p", {
                        children:
                          "This entity uses a timestamp column for optimistic locking. Whenever the record is updated, the timestamp is refreshed. Any subsequent update attempts with an outdated timestamp will fail.",
                      }),
                      x.jsx("h3", { children: "How to Test" }),
                      x.jsxs("ol", {
                        children: [
                          x.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          x.jsxs("li", {
                            children: [
                              "In the first tab, modify any field and click ",
                              x.jsx("strong", { children: "Update" }),
                              ". This refreshes the timestamp.",
                            ],
                          }),
                          x.jsx("li", {
                            children:
                              "In the second tab, try to update the record without reloading the page.",
                          }),
                          x.jsx("li", {
                            children:
                              "The second update will fail, indicating that another process has already changed the record.",
                          }),
                        ],
                      }),
                      x.jsx("br", {}),
                      x.jsx(ho, { type: "OPTIMISTIC_TIMESTAMP" }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
}
const iE = si(oE),
  sE = si((e) => {
    const { stateStore: t } = ci(),
      [r, n] = _.useState(""),
      [a, o] = _.useState({}),
      i = (l) => {
        const { name: u, value: d, type: f } = l.target;
        o((p) => ({ ...p, [u]: f === "number" ? Number(d) : d }));
      },
      c = async (l) => {
        l.preventDefault();
        const u = { ...s };
        (a.testNameColumn && (u.testNameColumn = a.testNameColumn),
          a.testDateColumn && (u.testDateColumn = new Date(a.testDateColumn)));
        const d = await ja.invoke("update", { data: u, objectName: e.type });
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
        return x.jsxs("div", { children: ["Unsupported $", e.type] });
    }
    return x.jsxs("div", {
      children: [
        x.jsx("div", {
          children: x.jsx("button", {
            onClick: async () => {
              try {
                t.loading();
                const l = await ja.invoke("fetchOrCreateIfNotExists");
                t.saveResponse(l);
              } finally {
                t.stopLoading();
              }
              t.saveState("ROOT");
            },
            children: "Back to main",
          }),
        }),
        x.jsx("br", {}),
        x.jsxs("form", {
          onSubmit: c,
          children: [
            x.jsxs(
              "div",
              {
                children: [
                  x.jsx("label", { htmlFor: "testNameColumn", children: "Name" }),
                  x.jsx("br", {}),
                  x.jsx("input", {
                    type: "text",
                    id: "testNameColumn",
                    name: "testNameColumn",
                    defaultValue: s.testNameColumn,
                    onChange: i,
                  }),
                  x.jsx("br", {}),
                ],
              },
              "testNameColumn",
            ),
            x.jsxs(
              "div",
              {
                children: [
                  x.jsx("label", { htmlFor: "testDateColumn", children: "dateTime" }),
                  x.jsx("br", {}),
                  x.jsx("input", {
                    type: "datetime-local",
                    id: "testDateColumn",
                    name: "testDateColumn",
                    defaultValue: String(s.testDateColumn),
                    onChange: i,
                  }),
                  x.jsx("br", {}),
                ],
              },
              "testDateColumn",
            ),
            x.jsx("br", {}),
            x.jsx("input", {
              type: "submit",
              value: "Submit",
              disabled: Object.keys(a).length === 0,
            }),
          ],
        }),
        x.jsx("br", {}),
        x.jsx("br", {}),
        r
          ? x.jsxs("div", {
              children: [x.jsx("p", { children: "STATUS:" }), x.jsxs("b", { children: [" ", r] })],
            })
          : null,
      ],
    });
  });
function cE() {
  const { stateStore: e } = ci();
  if (
    (_.useEffect(() => {
      (async () => {
        try {
          e.loading();
          const r = await ja.invoke("fetchOrCreateIfNotExists");
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
      return x.jsx(iE, {});
    case "WITHOUT_VERSIONING":
    case "OPTIMISTIC_TIMESTAMP":
    case "OPTIMISTIC_DATE":
    case "OPTIMISTIC_NUMBER":
      return x.jsx(sE, { type: e.state });
    default:
      return x.jsxs("div", { children: ["ERROR: unsupprted state $", e.state] });
  }
}
const lE = si(cE),
  uE = document.getElementById("root"),
  dE = cg.createRoot(uE),
  Gf = () => {
    dE.render(x.jsx(kp, { ...Op, children: x.jsx(lE, {}) }));
  };
ja.view.theme
  .enable()
  .then(() => {
    Gf();
  })
  .catch((e) => {
    (console.error(e.message), Gf());
  });
export {
  O as R,
  gy as T,
  Ze as _,
  _e as a,
  Us as b,
  be as c,
  Xe as d,
  X as e,
  J as f,
  C as g,
  te as h,
  di as i,
  Ge as j,
  Z as k,
  jw as l,
  Xt as m,
  $t as n,
  R as o,
  py as p,
  Tm as q,
  _ as r,
  dy as s,
  Q1 as w,
};
