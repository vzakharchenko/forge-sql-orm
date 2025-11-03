const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-ybeaJMoI.js",
      "./react-dom-vendor-DTSHKYJW.js",
      "./client-core-vendor-CJaY3VOv.js",
      "./lodash-vendor-C90NrQdG.js",
      "./body-C3aXNd8H.css",
    ]),
) => i.map((i) => d[i]);
import { r as wt, a as Ho, c as fg } from "./react-dom-vendor-DTSHKYJW.js";
import { g as dr, a as ac, r as lr, b as Mt, s as rt } from "./client-core-vendor-CJaY3VOv.js";
import { r as vg } from "./lodash-vendor-C90NrQdG.js";
function pg(e, t) {
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
var wi = { exports: {} },
  wn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bc;
function hg() {
  if (Bc) return wn;
  Bc = 1;
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
var zc;
function gg() {
  return (zc || ((zc = 1), (wi.exports = hg())), wi.exports);
}
var E = gg(),
  _ = wt();
const O = dr(_),
  qc = pg({ __proto__: null, default: O }, [_]);
var ki = {},
  Ss = function (e, t) {
    return (
      (Ss =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      Ss(e, t)
    );
  };
function Yf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ss(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var Po = function () {
  return (
    (Po =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    Po.apply(this, arguments)
  );
};
function Xf(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function Zf(e, t, r, n) {
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
function Qf(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function ev(e, t, r, n, a, o) {
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
function tv(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function rv(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function nv(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function av(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function ov(e, t, r, n) {
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
function iv(e, t) {
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
var Wo = Object.create
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
function sv(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Wo(t, e, r);
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
function oc(e, t) {
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
function cv() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(oc(arguments[t]));
  return e;
}
function lv() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var o = arguments[t], i = 0, c = o.length; i < c; i++, a++) n[a] = o[i];
  return n;
}
function uv(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function an(e) {
  return this instanceof an ? ((this.v = e), this) : new an(e);
}
function dv(e, t, r) {
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
function fv(e) {
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
function vv(e) {
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
function pv(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var bg = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Es = function (e) {
    return (
      (Es =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      Es(e)
    );
  };
function hv(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = Es(e), n = 0; n < r.length; n++) r[n] !== "default" && Wo(t, e, r[n]);
  return (bg(t, e), t);
}
function gv(e) {
  return e && e.__esModule ? e : { default: e };
}
function bv(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function _v(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function mv(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function yv(e, t, r) {
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
var _g =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function wv(e) {
  function t(o) {
    ((e.error = e.hasError ? new _g(o, e.error, "An error was suppressed during disposal.") : o),
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
function kv(e, t) {
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
const mg = {
    __extends: Yf,
    __assign: Po,
    __rest: Xf,
    __decorate: Zf,
    __param: Qf,
    __esDecorate: ev,
    __runInitializers: tv,
    __propKey: rv,
    __setFunctionName: nv,
    __metadata: av,
    __awaiter: ov,
    __generator: iv,
    __createBinding: Wo,
    __exportStar: sv,
    __values: Ro,
    __read: oc,
    __spread: cv,
    __spreadArrays: lv,
    __spreadArray: uv,
    __await: an,
    __asyncGenerator: dv,
    __asyncDelegator: fv,
    __asyncValues: vv,
    __makeTemplateObject: pv,
    __importStar: hv,
    __importDefault: gv,
    __classPrivateFieldGet: bv,
    __classPrivateFieldSet: _v,
    __classPrivateFieldIn: mv,
    __addDisposableResource: yv,
    __disposeResources: wv,
    __rewriteRelativeImportExtension: kv,
  },
  yg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: yv,
        get __assign() {
          return Po;
        },
        __asyncDelegator: fv,
        __asyncGenerator: dv,
        __asyncValues: vv,
        __await: an,
        __awaiter: ov,
        __classPrivateFieldGet: bv,
        __classPrivateFieldIn: mv,
        __classPrivateFieldSet: _v,
        __createBinding: Wo,
        __decorate: Zf,
        __disposeResources: wv,
        __esDecorate: ev,
        __exportStar: sv,
        __extends: Yf,
        __generator: iv,
        __importDefault: gv,
        __importStar: hv,
        __makeTemplateObject: pv,
        __metadata: av,
        __param: Qf,
        __propKey: rv,
        __read: oc,
        __rest: Xf,
        __rewriteRelativeImportExtension: kv,
        __runInitializers: tv,
        __setFunctionName: nv,
        __spread: cv,
        __spreadArray: uv,
        __spreadArrays: lv,
        __values: Ro,
        default: mg,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  er = ac(yg);
var kn = {},
  Uc;
function wg() {
  return (
    Uc ||
      ((Uc = 1),
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
var Oi = {},
  Si = {},
  On = {},
  Sn = {},
  Vc;
function Ye() {
  if (Vc) return Sn;
  ((Vc = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((Sn.BridgeAPIError = e), Sn);
}
var Gc;
function we() {
  if (Gc) return On;
  ((Gc = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.getCallBridge = void 0));
  const e = Ye();
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
var En = {},
  Kc;
function Jo() {
  if (Kc) return En;
  ((Kc = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.withRateLimiter = void 0));
  const e = Ye(),
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
  return ((En.withRateLimiter = t), En);
}
var Hc;
function kg() {
  return (
    Hc ||
      ((Hc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = we(),
          r = Ye(),
          n = Jo(),
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
      })(Si)),
    Si
  );
}
var Wc;
function Og() {
  return (
    Wc ||
      ((Wc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), er.__exportStar(kg(), e));
      })(Oi)),
    Oi
  );
}
var Ei = {},
  xn = {},
  xi = {},
  Jc;
function Ov() {
  return (
    Jc ||
      ((Jc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = we(),
          r = Ye(),
          n = Jo(),
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
      })(xi)),
    xi
  );
}
var Yc;
function Sg() {
  if (Yc) return xn;
  ((Yc = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.invokeRemote = void 0));
  const e = Ov(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((xn.invokeRemote = t), xn);
}
var Cn = {},
  Xc;
function Eg() {
  if (Xc) return Cn;
  ((Xc = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.invokeService = void 0));
  const e = Ov(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((Cn.invokeService = t), Cn);
}
var Zc;
function xg() {
  return (
    Zc ||
      ((Zc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = er;
        (t.__exportStar(Sg(), e), t.__exportStar(Eg(), e));
      })(Ei)),
    Ei
  );
}
var Ci = {},
  Pn = {},
  Rn = {},
  Qc;
function Cg() {
  if (Qc) return Rn;
  ((Qc = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.submit = void 0));
  const e = we(),
    t = Ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((Rn.submit = n), Rn);
}
var An = {},
  el;
function Pg() {
  if (el) return An;
  ((el = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.close = void 0));
  const e = we(),
    t = Ye(),
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
  tl;
function Rg() {
  if (tl) return In;
  ((tl = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.open = void 0));
  const e = we(),
    t = Ye(),
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
  rl;
function Ag() {
  if (rl) return jn;
  ((rl = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.refresh = void 0));
  const e = we(),
    t = Ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((jn.refresh = n), jn);
}
var Dn = {},
  nl;
function Ig() {
  if (nl) return Dn;
  ((nl = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.createHistory = void 0));
  const t = (0, we().getCallBridge)(),
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
  Pi = {},
  zt = {},
  al;
function Sv() {
  return (
    al ||
      ((al = 1),
      Object.defineProperty(zt, "__esModule", { value: !0 }),
      (zt.FORGE_SUPPORTED_LOCALE_CODES =
        zt.I18N_BUNDLE_FOLDER_NAME =
        zt.I18N_INFO_FILE_NAME =
          void 0),
      (zt.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (zt.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (zt.FORGE_SUPPORTED_LOCALE_CODES = [
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
    zt
  );
}
var pr = {},
  ol;
function jg() {
  if (ol) return pr;
  ((ol = 1),
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
  Ri = {},
  il;
function Ev() {
  return (
    il ||
      ((il = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = er.__importDefault(vg()),
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
      })(Ri)),
    Ri
  );
}
var sl;
function Dg() {
  if (sl) return Mn;
  ((sl = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.Translator = void 0));
  const e = Ev();
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
var Fn = {},
  cl;
function Tg() {
  if (cl) return Fn;
  ((cl = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.ensureLocale = void 0));
  const e = Sv(),
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
  return ((Fn.ensureLocale = a), Fn);
}
var Ai = {},
  ll;
function Mg() {
  return (
    ll ||
      ((ll = 1),
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
      })(Ai)),
    Ai
  );
}
var Ii = {},
  ul;
function Fg() {
  return (ul || ((ul = 1), Object.defineProperty(Ii, "__esModule", { value: !0 })), Ii);
}
var dl;
function xv() {
  return (
    dl ||
      ((dl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = er;
        (t.__exportStar(Sv(), e),
          t.__exportStar(jg(), e),
          t.__exportStar(Dg(), e),
          t.__exportStar(Tg(), e));
        var r = Ev();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Mg();
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
          t.__exportStar(Fg(), e));
      })(Pi)),
    Pi
  );
}
var fl;
function Lg() {
  if (fl) return Tn;
  ((fl = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.getContext = void 0));
  const e = we(),
    t = xv(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const o = await r("getContext"),
        i = o?.locale;
      return (i && (o.locale = (a = (0, t.ensureLocale)(i)) !== null && a !== void 0 ? a : i), o);
    };
  return ((Tn.getContext = n), Tn);
}
var Ln = {},
  vl;
function Ng() {
  if (vl) return Ln;
  ((vl = 1),
    Object.defineProperty(Ln, "__esModule", { value: !0 }),
    (Ln.changeWindowTitle = void 0));
  const e = we(),
    t = Ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        await r("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((Ln.changeWindowTitle = n), Ln);
}
var Nn = {},
  pl;
function $g() {
  if (pl) return Nn;
  ((pl = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.theme = void 0));
  const t = (0, we().getCallBridge)();
  return ((Nn.theme = { enable: () => t("enableTheming") }), Nn);
}
var $n = {},
  Bn = {},
  ji = {},
  hr = {},
  hl;
function Cv() {
  if (hl) return hr;
  ((hl = 1),
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
var gl;
function Bg() {
  return (
    gl ||
      ((gl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Cv(),
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
      })(ji)),
    ji
  );
}
var bl;
function Pv() {
  if (bl) return Bn;
  ((bl = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.events = void 0));
  const e = we(),
    t = Bg(),
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
var _l;
function zg() {
  if (_l) return $n;
  ((_l = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.emitReadyEvent = void 0));
  const e = Pv(),
    t = Rv(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return (($n.emitReadyEvent = n), $n);
}
var ml;
function Rv() {
  if (ml) return Pn;
  ((ml = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.view = void 0));
  const e = Cg(),
    t = Pg(),
    r = Rg(),
    n = Ag(),
    a = Ig(),
    o = Lg(),
    i = Ng(),
    c = $g(),
    s = zg();
  return (
    (Pn.view = {
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
    Pn
  );
}
var yl;
function Av() {
  return (
    yl ||
      ((yl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), er.__exportStar(Rv(), e));
      })(Ci)),
    Ci
  );
}
var Di = {},
  zn = {},
  wl;
function qg() {
  if (wl) return zn;
  ((wl = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.router = void 0));
  const t = (0, we().getCallBridge)(),
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
var kl;
function Ug() {
  return (
    kl ||
      ((kl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), er.__exportStar(qg(), e));
      })(Di)),
    Di
  );
}
var Ti = {},
  qn = {},
  Ol;
function Vg() {
  if (Ol) return qn;
  ((Ol = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.Modal = void 0));
  const e = we(),
    t = Ye(),
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
  return ((qn.Modal = a), qn);
}
var Sl;
function Gg() {
  return (
    Sl ||
      ((Sl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), er.__exportStar(Vg(), e));
      })(Ti)),
    Ti
  );
}
var qt = {},
  Un = {},
  El;
function Kg() {
  if (El) return Un;
  ((El = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.productFetchApi = void 0));
  const e = Cv(),
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
  return ((Un.productFetchApi = a), Un);
}
var xl;
function Hg() {
  if (xl) return qt;
  xl = 1;
  var e;
  (Object.defineProperty(qt, "__esModule", { value: !0 }),
    (qt.requestBitbucket = qt.requestJira = qt.requestConfluence = void 0));
  const t = we();
  return (
    (e = (0, Kg().productFetchApi)((0, t.getCallBridge)())),
    (qt.requestConfluence = e.requestConfluence),
    (qt.requestJira = e.requestJira),
    (qt.requestBitbucket = e.requestBitbucket),
    qt
  );
}
var Mi = {},
  Vn = {},
  Cl;
function Wg() {
  if (Cl) return Vn;
  ((Cl = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.showFlag = void 0));
  const e = we(),
    t = Ye(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var o;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const i = r("showFlag", { ...a, type: (o = a.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await i, r("closeFlag", { id: a.id })) };
    };
  return ((Vn.showFlag = n), Vn);
}
var Pl;
function Jg() {
  return (
    Pl ||
      ((Pl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = Wg();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(Mi)),
    Mi
  );
}
var Fi = {},
  Rl;
function Yg() {
  return (
    Rl ||
      ((Rl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), er.__exportStar(Pv(), e));
      })(Fi)),
    Fi
  );
}
var Li = {},
  Gn = {},
  Al;
function Xg() {
  if (Al) return Gn;
  ((Al = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.realtime = void 0));
  const t = (0, we().getCallBridge)(),
    r = (i, c, s) => t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s }),
    n = (i, c, s) => t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s }),
    a = (i, c, s) =>
      t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s, isGlobal: !0 }),
    o = (i, c, s) =>
      t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s, isGlobal: !0 });
  return ((Gn.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: o }), Gn);
}
var Ni = {},
  Il;
function Zg() {
  return (
    Il ||
      ((Il = 1),
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
      })(Ni)),
    Ni
  );
}
var jl;
function Qg() {
  return (
    jl ||
      ((jl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = Xg();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = Zg();
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
      })(Li)),
    Li
  );
}
var Ut = {},
  Dl;
function eb() {
  if (Dl) return Ut;
  ((Dl = 1),
    Object.defineProperty(Ut, "__esModule", { value: !0 }),
    (Ut.createTranslationFunction = Ut.getTranslations = Ut.resetTranslationsCache = void 0));
  const e = xv(),
    t = Av(),
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
  Ut.resetTranslationsCache = a;
  const o = async (c = null, s = { fallback: !0 }) => {
    let l = c;
    return (l || (l = (await t.view.getContext()).locale), await n.getTranslations(l, s));
  };
  Ut.getTranslations = o;
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
  return ((Ut.createTranslationFunction = i), Ut);
}
var $i = {},
  Kn = {},
  gr = {},
  Lr = {},
  to = {},
  Tl;
function tb() {
  if (Tl) return to;
  ((Tl = 1), Object.defineProperty(to, "__esModule", { value: !0 }));
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
  return ((to.default = t), to);
}
var Nr = {},
  Hn = {},
  Ml;
function rb() {
  if (Ml) return Hn;
  ((Ml = 1),
    Object.defineProperty(Hn, "__esModule", { value: !0 }),
    (Hn._resolveDeltasResponse = void 0));
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
  Hn._resolveDeltasResponse = r;
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
  return Hn;
}
var Fl;
function Iv() {
  if (Fl) return Nr;
  Fl = 1;
  var e =
    (Nr && Nr.__awaiter) ||
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
  Object.defineProperty(Nr, "__esModule", { value: !0 });
  const t = lr(),
    r = rb();
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
  return ((Nr.default = n), Nr);
}
var Wn = {},
  Ll;
function nb() {
  if (Ll) return Wn;
  ((Ll = 1),
    Object.defineProperty(Wn, "__esModule", { value: !0 }),
    (Wn._makeParamStoreGetter = void 0));
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
  return ((Wn._makeParamStoreGetter = l), Wn);
}
var br = {},
  Nl;
function ab() {
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
    r = Iv();
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
var $l;
function ob() {
  if ($l) return Lr;
  $l = 1;
  var e =
    (Lr && Lr.__awaiter) ||
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
  Object.defineProperty(Lr, "__esModule", { value: !0 });
  const t = lr(),
    r = tb(),
    n = Iv(),
    a = nb(),
    o = ab();
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
  return ((Lr.default = i), Lr);
}
var Bl;
function ib() {
  return (
    Bl ||
      ((Bl = 1),
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
          a = ob();
        ((e.StatsigClient = a.default), r(lr(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(gr)),
    gr
  );
}
var Jn = {},
  Yn = {},
  zl;
function sb() {
  if (zl) return Yn;
  ((zl = 1),
    Object.defineProperty(Yn, "__esModule", { value: !0 }),
    (Yn.initFeatureFlags = void 0));
  const e = we(),
    t = Ye(),
    r = Jo(),
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
    (Yn.initFeatureFlags = (0, r.withRateLimiter)(
      c,
      n,
      a,
      `Feature flags initialisation calls are rate limited at ${n}req/${a / 1e3}s`,
    )),
    Yn
  );
}
var ql;
function cb() {
  if (ql) return Jn;
  ((ql = 1),
    Object.defineProperty(Jn, "__esModule", { value: !0 }),
    (Jn.ForgeDataAdapter = void 0));
  const e = sb();
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
  return ((Jn.ForgeDataAdapter = t), Jn);
}
var Bi = {},
  Ul;
function jv() {
  return (
    Ul ||
      ((Ul = 1),
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
      })(Bi)),
    Bi
  );
}
var Xn = {},
  Vl;
function lb() {
  if (Vl) return Xn;
  ((Vl = 1),
    Object.defineProperty(Xn, "__esModule", { value: !0 }),
    (Xn.trackFeatureFlagEvent = void 0));
  const e = we(),
    t = Ye(),
    r = jv(),
    n = Jo(),
    a = 500,
    o = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    c = (l) => {
      if (!l || !l.type || !l.properties)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(l.type.toUpperCase() in r.FeatureFlagEventType))
        throw new t.BridgeAPIError("Event type is not supported");
      if (Object.values(l).some((u) => typeof u == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    s = (l) => (c(l), i("trackFeatureFlagEvent", l));
  return (
    (Xn.trackFeatureFlagEvent = (0, n.withRateLimiter)(
      s,
      a,
      o,
      `Feature flags calls are rate limited at ${a}req/${o / 1e3}s`,
    )),
    Xn
  );
}
var Gl;
function ub() {
  if (Gl) return Kn;
  ((Gl = 1),
    Object.defineProperty(Kn, "__esModule", { value: !0 }),
    (Kn.ForgeFeatureFlags = void 0));
  const e = ib(),
    t = cb(),
    r = jv(),
    n = lb();
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
      const l = {
        environment: { tier: c.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (s = l.environment) === null || s === void 0 ? void 0 : s.tier),
        (this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(i), l)),
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
  return ((Kn.ForgeFeatureFlags = a), Kn);
}
var Kl;
function db() {
  return (
    Kl ||
      ((Kl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = ub();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })($i)),
    $i
  );
}
var Hl;
function fb() {
  return (
    Hl ||
      ((Hl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = er;
        var r = wg();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Og(), e),
          t.__exportStar(xg(), e),
          t.__exportStar(Av(), e),
          t.__exportStar(Ug(), e),
          t.__exportStar(Gg(), e),
          t.__exportStar(Hg(), e),
          t.__exportStar(Jg(), e),
          t.__exportStar(Yg(), e),
          t.__exportStar(Qg(), e),
          (e.i18n = t.__importStar(eb())),
          t.__exportStar(db(), e));
      })(ki)),
    ki
  );
}
var Da = fb();
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
var vb = {};
function Yo() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : vb;
}
var Dv = Object.assign,
  Ao = Object.getOwnPropertyDescriptor,
  At = Object.defineProperty,
  Xo = Object.prototype,
  xs = [];
Object.freeze(xs);
var Tv = {};
Object.freeze(Tv);
var pb = typeof Proxy < "u",
  hb = Object.toString();
function Mv() {
  pb || W("Proxy not available");
}
function Fv(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var en = function () {};
function mt(e) {
  return typeof e == "function";
}
function Er(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Zo(e) {
  return e !== null && typeof e == "object";
}
function ur(e) {
  if (!Zo(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === hb;
}
function Lv(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Qo(e, t, r) {
  At(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function Nv(e, t, r) {
  At(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function Ir(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return Zo(n) && n[r] === !0;
    }
  );
}
function hn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function gb(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Wt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var $v = typeof Object.getOwnPropertySymbols < "u";
function bb(e) {
  var t = Object.keys(e);
  if (!$v) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Xo.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var ei =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : $v
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function Bv(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Xt(e, t) {
  return Xo.hasOwnProperty.call(e, t);
}
var _b =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      ei(t).forEach(function (n) {
        r[n] = Ao(t, n);
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
function Wl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, wb(n.key), n));
  }
}
function gn(e, t, r) {
  return (t && mb(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function tn(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = kb(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xr() {
  return (
    (xr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    xr.apply(null, arguments)
  );
}
function zv(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Cs(e, t));
}
function Cs(e, t) {
  return (
    (Cs = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Cs(e, t)
  );
}
function yb(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function wb(e) {
  var t = yb(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function kb(e, t) {
  if (e) {
    if (typeof e == "string") return Wl(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Wl(e, t)
          : void 0
    );
  }
}
var Rt = Symbol("mobx-stored-annotations");
function It(e) {
  function t(r, n) {
    if (Ka(n)) return e.decorate_20223_(r, n);
    Ga(r, n, e);
  }
  return Object.assign(t, e);
}
function Ga(e, t, r) {
  (Xt(e, Rt) || Qo(e, Rt, xr({}, e[Rt])), Rb(r) || (e[Rt][t] = r));
}
function Ob(e) {
  return (Xt(e, Rt) || Qo(e, Rt, xr({}, e[Rt])), e[Rt]);
}
function Ka(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var L = Symbol("mobx administration"),
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
        return np(this);
      }),
      (t.reportChanged = function () {
        (st(), ap(this), ct());
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
var ic = Ir("Atom", fr);
function qv(e, t, r) {
  (t === void 0 && (t = en), r === void 0 && (r = en));
  var n = new fr(e);
  return (t !== en && T_(n, t), r !== en && lp(n, r), n);
}
function Sb(e, t) {
  return kp(e, t);
}
function Eb(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Io = { structural: Sb, default: Eb };
function Cr(e, t, r) {
  return vp(e)
    ? e
    : Array.isArray(e)
      ? ae.array(e, { name: r })
      : ur(e)
        ? ae.object(e, void 0, { name: r })
        : hn(e)
          ? ae.map(e, { name: r })
          : Wt(e)
            ? ae.set(e, { name: r })
            : typeof e == "function" && !on(e) && !Ma(e)
              ? Lv(e)
                ? sn(e)
                : Ta(r, e)
              : e;
}
function xb(e, t, r) {
  if (e == null || ci(e) || si(e) || Dr(e) || Pt(e)) return e;
  if (Array.isArray(e)) return ae.array(e, { name: r, deep: !1 });
  if (ur(e)) return ae.object(e, void 0, { name: r, deep: !1 });
  if (hn(e)) return ae.map(e, { name: r, deep: !1 });
  if (Wt(e)) return ae.set(e, { name: r, deep: !1 });
}
function ti(e) {
  return e;
}
function Cb(e, t) {
  return kp(e, t) ? t : e;
}
var Pb = "override";
function Rb(e) {
  return e.annotationType_ === Pb;
}
function Ha(e, t) {
  return { annotationType_: e, options_: t, make_: Ab, extend_: Ib, decorate_20223_: jb };
}
function Ab(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (on(r.value)) return 1;
  var o = Uv(e, this, t, r, !1);
  return (At(n, t, o), 2);
}
function Ib(e, t, r, n) {
  var a = Uv(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function jb(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    o = this,
    i = function (l) {
      var u, d, f, p;
      return Pr(
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
function Db(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Uv(e, t, r, n, a) {
  var o, i, c, s, l, u, d;
  (a === void 0 && (a = I.safeDescriptors), Db(e, t, r, n));
  var f = n.value;
  if ((o = t.options_) != null && o.bound) {
    var p;
    f = f.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return {
    value: Pr(
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
function Vv(e, t) {
  return { annotationType_: e, options_: t, make_: Tb, extend_: Mb, decorate_20223_: Fb };
}
function Tb(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Xt(e.target_, t) || !Ma(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Ma(r.value)) return 1;
  var o = Gv(e, this, t, r, !1, !1);
  return (At(n, t, o), 2);
}
function Mb(e, t, r, n) {
  var a,
    o = Gv(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, o, n);
}
function Fb(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    Ma(e) || (e = sn(e)),
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
function Lb(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Gv(e, t, r, n, a, o) {
  (o === void 0 && (o = I.safeDescriptors), Lb(e, t, r, n));
  var i = n.value;
  if ((Ma(i) || (i = sn(i)), a)) {
    var c;
    ((i = i.bind((c = e.proxy_) != null ? c : e.target_)), (i.isMobXFlow = !0));
  }
  return { value: i, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function sc(e, t) {
  return { annotationType_: e, options_: t, make_: Nb, extend_: $b, decorate_20223_: Bb };
}
function Nb(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function $b(e, t, r, n) {
  return (
    zb(e, this, t, r),
    e.defineComputedProperty_(t, xr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function Bb(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var o = bn(this)[L],
        i = xr({}, r.options_, { get: e, context: this });
      (i.name || (i.name = "ObservableObject." + n.toString()), o.values_.set(n, new yt(i)));
    }),
    function () {
      return this[L].getObservablePropValue_(n);
    }
  );
}
function zb(e, t, r, n) {
  (t.annotationType_, n.get);
}
function ri(e, t) {
  return { annotationType_: e, options_: t, make_: qb, extend_: Ub, decorate_20223_: Vb };
}
function qb(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Ub(e, t, r, n) {
  var a, o;
  return (
    Gb(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (o = this.options_) == null ? void 0 : o.enhancer) != null ? a : Cr,
      n,
    )
  );
}
function Vb(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    o = new WeakSet();
  function i(c, s) {
    var l,
      u,
      d = bn(c)[L],
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
        return (o.has(this) || i(this, e.get.call(this)), this[L].getObservablePropValue_(a));
      },
      set: function (s) {
        return (o.has(this) || i(this, s), this[L].setObservablePropValue_(a, s));
      },
      init: function (s) {
        return (o.has(this) || i(this, s), s);
      },
    };
}
function Gb(e, t, r, n) {
  t.annotationType_;
}
var Kb = "true",
  Hb = Kv();
function Kv(e) {
  return { annotationType_: Kb, options_: e, make_: Wb, extend_: Jb, decorate_20223_: Yb };
}
function Wb(e, t, r, n) {
  var a, o;
  if (r.get) return ni.make_(e, t, r, n);
  if (r.set) {
    var i = on(r.set) ? r.set : Pr(t.toString(), r.set);
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
    if (Lv(r.value)) {
      var s,
        l = (s = this.options_) != null && s.autoBind ? sn.bound : sn;
      return l.make_(e, t, r, n);
    }
    var u = (c = this.options_) != null && c.autoBind ? Ta.bound : Ta;
    return u.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? ae.ref : ae;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function Jb(e, t, r, n) {
  var a, o;
  if (r.get) return ni.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: I.safeDescriptors ? e.isPlainObject_ : !0, set: Pr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var i;
    r.value = r.value.bind((i = e.proxy_) != null ? i : e.target_);
  }
  var c = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? ae.ref : ae;
  return c.extend_(e, t, r, n);
}
function Yb(e, t) {
  W("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Xb = "observable",
  Zb = "observable.ref",
  Qb = "observable.shallow",
  e_ = "observable.struct",
  Hv = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Hv);
function ro(e) {
  return e || Hv;
}
var Ps = ri(Xb),
  t_ = ri(Zb, { enhancer: ti }),
  r_ = ri(Qb, { enhancer: xb }),
  n_ = ri(e_, { enhancer: Cb }),
  Wv = It(Ps);
function no(e) {
  return e.deep === !0 ? Cr : e.deep === !1 ? ti : o_(e.defaultDecorator);
}
function a_(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Kv(e)) : void 0;
}
function o_(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : Cr;
}
function Jv(e, t, r) {
  if (Ka(t)) return Ps.decorate_20223_(e, t);
  if (Er(t)) {
    Ga(e, t, Ps);
    return;
  }
  return vp(e)
    ? e
    : ur(e)
      ? ae.object(e, t, r)
      : Array.isArray(e)
        ? ae.array(e, t)
        : hn(e)
          ? ae.map(e, t)
          : Wt(e)
            ? ae.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : ae.box(e, t);
}
Dv(Jv, Wv);
var i_ = {
    box: function (t, r) {
      var n = ro(r);
      return new Or(t, no(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = ro(r);
      return (I.useProxies === !1 || n.proxy === !1 ? am : W_)(t, no(n), n.name);
    },
    map: function (t, r) {
      var n = ro(r);
      return new gp(t, no(n), n.name);
    },
    set: function (t, r) {
      var n = ro(r);
      return new bp(t, no(n), n.name);
    },
    object: function (t, r, n) {
      return Tr(function () {
        return N_(I.useProxies === !1 || n?.proxy === !1 ? bn({}, n) : G_({}, n), t, r);
      });
    },
    ref: It(t_),
    shallow: It(r_),
    deep: Wv,
    struct: It(n_),
  },
  ae = Dv(Jv, i_),
  Yv = "computed",
  s_ = "computed.struct",
  Rs = sc(Yv),
  c_ = sc(s_, { equals: Io.structural }),
  ni = function (t, r) {
    if (Ka(r)) return Rs.decorate_20223_(t, r);
    if (Er(r)) return Ga(t, r, Rs);
    if (ur(t)) return It(sc(Yv, t));
    var n = ur(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new yt(n));
  };
Object.assign(ni, Rs);
ni.struct = It(c_);
var Jl,
  Yl,
  jo = 0,
  l_ = 1,
  u_ =
    (Jl = (Yl = Ao(function () {}, "name")) == null ? void 0 : Yl.configurable) != null ? Jl : !1,
  Xl = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function Pr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return d_(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    u_ && ((Xl.value = e), At(a, "name", Xl)),
    a
  );
}
function d_(e, t, r, n, a) {
  var o = f_(e, t);
  try {
    return r.apply(n, a);
  } catch (i) {
    throw ((o.error_ = i), i);
  } finally {
    v_(o);
  }
}
function f_(e, t, r, n) {
  var a = !1,
    o = 0,
    i = I.trackingDerivation,
    c = !t || !i;
  st();
  var s = I.allowStateChanges;
  c && (jr(), (s = ai(!0)));
  var l = cc(!0),
    u = {
      runAsAction_: c,
      prevDerivation_: i,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: l,
      notifySpy_: a,
      startTime_: o,
      actionId_: l_++,
      parentActionId_: jo,
    };
  return ((jo = u.actionId_), u);
}
function v_(e) {
  (jo !== e.actionId_ && W(30),
    (jo = e.parentActionId_),
    e.error_ !== void 0 && (I.suppressReactionErrors = !0),
    oi(e.prevAllowStateChanges_),
    Ea(e.prevAllowStateReads_),
    ct(),
    e.runAsAction_ && Zt(e.prevDerivation_),
    (I.suppressReactionErrors = !1));
}
function p_(e, t) {
  var r = ai(e);
  try {
    return t();
  } finally {
    oi(r);
  }
}
function ai(e) {
  var t = I.allowStateChanges;
  return ((I.allowStateChanges = e), t);
}
function oi(e) {
  I.allowStateChanges = e;
}
var Or = (function (e) {
    function t(n, a, o, i, c) {
      var s;
      return (
        o === void 0 && (o = "ObservableValue"),
        c === void 0 && (c = Io.default),
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
    zv(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== I.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (ot(this)) {
          var o = it(this, { object: this, type: jt, newValue: a });
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
        return Wa(this, a);
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
          Ja(this, a)
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
        return Bv(this.get());
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
        (this.value_ = new To(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Do.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || W(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = Pr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? Io.structural : Io.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        m_(this);
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
          As(this) &&
            (this.warnAboutUntrackedRead_(), st(), (this.value_ = this.computeValue_(!1)), ct());
        else if ((np(this), As(this))) {
          var n = I.trackingContext;
          (this.keepAlive_ && !n && (I.trackingContext = this),
            this.trackAndCompute() && __(this),
            (I.trackingContext = n));
        }
        var a = this.value_;
        if (mo(a)) throw a.cause;
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
          i = a || mo(n) || mo(o) || !this.equals_(n, o);
        return (i && (this.value_ = o), i);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = ai(!1),
          o;
        if (n) o = Xv(this, this.derivation, this.scope_);
        else if (I.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (i) {
            o = new To(i);
          }
        return (oi(a), (this.isComputing = !1), o);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Is(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var o = this,
          i = !0,
          c = void 0;
        return R_(function () {
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
              Zt(l));
          }
          ((i = !1), (c = s));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return Bv(this.get());
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
var ii = Ir("ComputedValue", yt),
  Y;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(Y || (Y = {}));
var Do;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(Do || (Do = {}));
var To = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function mo(e) {
  return e instanceof To;
}
function As(e) {
  switch (e.dependenciesState_) {
    case Y.UP_TO_DATE_:
      return !1;
    case Y.NOT_TRACKING_:
    case Y.STALE_:
      return !0;
    case Y.POSSIBLY_STALE_: {
      for (var t = cc(!0), r = jr(), n = e.observing_, a = n.length, o = 0; o < a; o++) {
        var i = n[o];
        if (ii(i)) {
          if (I.disableErrorBoundaries) i.get();
          else
            try {
              i.get();
            } catch {
              return (Zt(r), Ea(t), !0);
            }
          if (e.dependenciesState_ === Y.STALE_) return (Zt(r), Ea(t), !0);
        }
      }
      return (Qv(e), Zt(r), Ea(t), !1);
    }
  }
}
function Xv(e, t, r) {
  var n = cc(!0);
  (Qv(e),
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
      o = new To(i);
    }
  return (I.inBatch--, (I.trackingDerivation = a), h_(e), Ea(n), o);
}
function h_(e) {
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
    (s.diffValue === 0 && tp(s, e), (s.diffValue = 0));
  }
  for (; a--; ) {
    var l = r[a];
    l.diffValue === 1 && ((l.diffValue = 0), b_(l, e));
  }
  n !== Y.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function Is(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) tp(t[r], e);
  e.dependenciesState_ = Y.NOT_TRACKING_;
}
function Zv(e) {
  var t = jr();
  try {
    return e();
  } finally {
    Zt(t);
  }
}
function jr() {
  var e = I.trackingDerivation;
  return ((I.trackingDerivation = null), e);
}
function Zt(e) {
  I.trackingDerivation = e;
}
function cc(e) {
  var t = I.allowStateReads;
  return ((I.allowStateReads = e), t);
}
function Ea(e) {
  I.allowStateReads = e;
}
function Qv(e) {
  if (e.dependenciesState_ !== Y.UP_TO_DATE_) {
    e.dependenciesState_ = Y.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = Y.UP_TO_DATE_;
  }
}
var yo = function () {
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
  wo = !0,
  ep = !1,
  I = (function () {
    var e = Yo();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (wo = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new yo().version && (wo = !1),
      wo
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new yo()))
        : (setTimeout(function () {
            ep || W(35);
          }, 1),
          new yo())
    );
  })();
function g_() {
  if (((I.pendingReactions.length || I.inBatch || I.isRunningReactions) && W(36), (ep = !0), wo)) {
    var e = Yo();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (I = new yo()));
  }
}
function b_(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function tp(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && rp(e));
}
function rp(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), I.pendingUnobservations.push(e));
}
function st() {
  I.inBatch++;
}
function ct() {
  if (--I.inBatch === 0) {
    op();
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
function np(e) {
  var t = I.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && I.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && I.inBatch > 0 && rp(e), !1);
}
function ap(e) {
  e.lowestObserverState_ !== Y.STALE_ &&
    ((e.lowestObserverState_ = Y.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === Y.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = Y.STALE_));
    }));
}
function __(e) {
  e.lowestObserverState_ !== Y.STALE_ &&
    ((e.lowestObserverState_ = Y.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Y.POSSIBLY_STALE_
        ? (t.dependenciesState_ = Y.STALE_)
        : t.dependenciesState_ === Y.UP_TO_DATE_ && (e.lowestObserverState_ = Y.UP_TO_DATE_);
    }));
}
function m_(e) {
  e.lowestObserverState_ === Y.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = Y.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Y.UP_TO_DATE_ &&
        ((t.dependenciesState_ = Y.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var Ft = (function () {
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
      (this.isTracing_ = Do.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), I.pendingReactions.push(this), op());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (st(), (this.isScheduled = !1));
        var n = I.trackingContext;
        if (((I.trackingContext = this), As(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((I.trackingContext = n), ct());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (st(), (this.isRunning = !0));
        var a = I.trackingContext;
        I.trackingContext = this;
        var o = Xv(this, n, void 0);
        ((I.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Is(this),
          mo(o) && this.reportExceptionInDerivation_(o.cause),
          ct());
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (st(), Is(this), ct()));
    }),
    (t.getDisposer_ = function (n) {
      var a = this,
        o = function i() {
          (a.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", i));
        };
      return (
        n == null || n.addEventListener == null || n.addEventListener("abort", o),
        (o[L] = this),
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
Ft.isDisposedMask_ = 1;
Ft.isScheduledMask_ = 2;
Ft.isTrackPendingMask_ = 4;
Ft.isRunningMask_ = 8;
Ft.diffValueMask_ = 16;
var y_ = 100,
  js = function (t) {
    return t();
  };
function op() {
  I.inBatch > 0 || I.isRunningReactions || js(w_);
}
function w_() {
  I.isRunningReactions = !0;
  for (var e = I.pendingReactions, t = 0; e.length > 0; ) {
    ++t === y_ && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  I.isRunningReactions = !1;
}
var Mo = Ir("Reaction", Ft);
function k_(e) {
  var t = js;
  js = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function xa() {
  return !1;
}
function O_(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var ip = "action",
  S_ = "action.bound",
  sp = "autoAction",
  E_ = "autoAction.bound",
  x_ = "<unnamed action>",
  Ds = Ha(ip),
  C_ = Ha(S_, { bound: !0 }),
  Ts = Ha(sp, { autoAction: !0 }),
  P_ = Ha(E_, { autoAction: !0, bound: !0 });
function cp(e) {
  var t = function (n, a) {
    if (mt(n)) return Pr(n.name || x_, n, e);
    if (mt(a)) return Pr(n, a, e);
    if (Ka(a)) return (e ? Ts : Ds).decorate_20223_(n, a);
    if (Er(a)) return Ga(n, a, e ? Ts : Ds);
    if (Er(n)) return It(Ha(e ? sp : ip, { name: n, autoAction: e }));
  };
  return t;
}
var lt = cp(!1);
Object.assign(lt, Ds);
var Ta = cp(!0);
Object.assign(Ta, Ts);
lt.bound = It(C_);
Ta.bound = It(P_);
function on(e) {
  return mt(e) && e.isMobxAction === !0;
}
function R_(e, t) {
  var r, n, a, o;
  t === void 0 && (t = Tv);
  var i = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    c = !t.scheduler && !t.delay,
    s;
  if (c)
    s = new Ft(
      i,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var l = I_(t),
      u = !1;
    s = new Ft(
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
var A_ = function (t) {
  return t();
};
function I_(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : A_;
}
var j_ = "onBO",
  D_ = "onBUO";
function T_(e, t, r) {
  return up(j_, e, t, r);
}
function lp(e, t, r) {
  return up(D_, e, t, r);
}
function up(e, t, r, n) {
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
var M_ = "never",
  ao = "always",
  F_ = "observed";
function L_(e) {
  e.isolateGlobalState === !0 && g_();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (I.useProxies = t === ao ? !0 : t === M_ ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (I.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === ao ? ao : r === F_;
    ((I.enforceActions = n), (I.allowStateChanges = !(n === !0 || n === ao)));
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
    e.reactionScheduler && k_(e.reactionScheduler));
}
function N_(e, t, r, n) {
  var a = _b(t);
  return (
    Tr(function () {
      var o = bn(e, n)[L];
      ei(a).forEach(function (i) {
        o.extend_(i, a[i], r && i in r ? r[i] : !0);
      });
    }),
    e
  );
}
function $_(e, t) {
  return dp(No(e, t));
}
function dp(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = B_(e.observing_).map(dp)),
    t
  );
}
function B_(e) {
  return Array.from(new Set(e));
}
var z_ = 0;
function fp() {
  this.message = "FLOW_CANCELLED";
}
fp.prototype = Object.create(Error.prototype);
var zi = Vv("flow"),
  q_ = Vv("flow.bound", { bound: !0 }),
  sn = Object.assign(function (t, r) {
    if (Ka(r)) return zi.decorate_20223_(t, r);
    if (Er(r)) return Ga(t, r, zi);
    var n = t,
      a = n.name || "<unnamed flow>",
      o = function () {
        var c = this,
          s = arguments,
          l = ++z_,
          u = lt(a + " - runid: " + l + " - init", n).apply(c, s),
          d,
          f = void 0,
          p = new Promise(function (h, v) {
            var g = 0;
            d = v;
            function b(k) {
              f = void 0;
              var m;
              try {
                m = lt(a + " - runid: " + l + " - yield " + g++, u.next).call(u, k);
              } catch (S) {
                return v(S);
              }
              w(m);
            }
            function y(k) {
              f = void 0;
              var m;
              try {
                m = lt(a + " - runid: " + l + " - yield " + g++, u.throw).call(u, k);
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
          (p.cancel = lt(a + " - runid: " + l + " - cancel", function () {
            try {
              f && Zl(f);
              var h = u.return(void 0),
                v = Promise.resolve(h.value);
              (v.then(en, en), Zl(v), d(new fp()));
            } catch (g) {
              d(g);
            }
          })),
          p
        );
      };
    return ((o.isMobXFlow = !0), o);
  }, zi);
sn.bound = It(q_);
function Zl(e) {
  mt(e.cancel) && e.cancel();
}
function Ma(e) {
  return e?.isMobXFlow === !0;
}
function U_(e, t) {
  return e ? ci(e) || !!e[L] || ic(e) || Mo(e) || ii(e) : !1;
}
function vp(e) {
  return U_(e);
}
function Jt(e, t) {
  (t === void 0 && (t = void 0), st());
  try {
    return e.apply(t);
  } finally {
    ct();
  }
}
function $r(e) {
  return e[L];
}
var V_ = {
  has: function (t, r) {
    return $r(t).has_(r);
  },
  get: function (t, r) {
    return $r(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return Er(r) ? ((a = $r(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return Er(r) ? ((n = $r(t).delete_(r, !0)) != null ? n : !0) : !1;
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
function G_(e, t) {
  var r, n;
  return (
    Mv(),
    (e = bn(e, t)),
    (n = (r = e[L]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, V_))
  );
}
function ot(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Wa(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    Fv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function it(e, t) {
  var r = jr();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, o = n.length;
      a < o && ((t = n[a](t)), t && !t.type && W(14), !!t);
      a++
    );
    return t;
  } finally {
    Zt(r);
  }
}
function bt(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Ja(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    Fv(function () {
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
    Zt(r);
  }
}
function pp(e, t, r) {
  return (
    Tr(function () {
      var n,
        a = bn(e, r)[L];
      ((n = t) != null || (t = Ob(e)),
        ei(t).forEach(function (o) {
          return a.make_(o, t[o]);
        }));
    }),
    e
  );
}
var Ql = "splice",
  jt = "update",
  K_ = 1e4,
  H_ = {
    get: function (t, r) {
      var n = t[L];
      return r === L
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Xt(Fo, r)
              ? Fo[r]
              : t[r];
    },
    set: function (t, r, n) {
      var a = t[L];
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
  lc = (function () {
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
        return Wa(this, n);
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
          Ja(this, n)
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
          this.legacyMode_ && a > 0 && wp(n + a + 1));
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
          o === void 0 && (o = xs),
          ot(this))
        ) {
          var s = it(this, { object: this.proxy_, type: Ql, index: n, removedCount: a, added: o });
          if (!s) return xs;
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
        if (o.length < K_) {
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
                  type: Ql,
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
          if (ot(this)) {
            var c = it(this, { type: jt, object: this.proxy_, index: n, newValue: a });
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
function W_(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    Mv(),
    Tr(function () {
      var a = new lc(r, t, n, !1);
      Nv(a.values_, L, a);
      var o = new Proxy(a.values_, H_);
      return ((a.proxy_ = o), e && e.length && a.spliceWithArray_(0, 0, e), o);
    })
  );
}
var Fo = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var r = this[L];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, r) {
    for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      a[o - 2] = arguments[o];
    var i = this[L];
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
    return this[L].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (var t = this[L], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return (t.spliceWithArray_(t.values_.length, 0, n), t.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[L].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[L], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
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
    var r = this[L],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
ce("at", Xe);
ce("concat", Xe);
ce("flat", Xe);
ce("includes", Xe);
ce("indexOf", Xe);
ce("join", Xe);
ce("lastIndexOf", Xe);
ce("slice", Xe);
ce("toString", Xe);
ce("toLocaleString", Xe);
ce("toSorted", Xe);
ce("toSpliced", Xe);
ce("with", Xe);
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
ce("reduce", hp);
ce("reduceRight", hp);
function ce(e, t) {
  typeof Array.prototype[e] == "function" && (Fo[e] = t(e));
}
function Xe(e) {
  return function () {
    var t = this[L];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function kt(e) {
  return function (t, r) {
    var n = this,
      a = this[L];
    a.atom_.reportObserved();
    var o = a.dehanceValues_(a.values_);
    return o[e](function (i, c) {
      return t.call(r, i, c, n);
    });
  };
}
function hp(e) {
  return function () {
    var t = this,
      r = this[L];
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
var J_ = Ir("ObservableArrayAdministration", lc);
function si(e) {
  return Zo(e) && J_(e[L]);
}
var Y_ = {},
  sr = "add",
  Lo = "delete",
  gp = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = Cr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[L] = Y_),
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
          ((o.keysAtom_ = qv("ObservableMap.keys()")),
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
          var i = (o = new Or(this.has_(n), ti, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, i),
            lp(i, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return o.get();
      }),
      (t.set = function (n, a) {
        var o = this.has_(n);
        if (ot(this)) {
          var i = it(this, { type: o ? jt : sr, object: this, newValue: a, name: n });
          if (!i) return this;
          a = i.newValue;
        }
        return (o ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, ot(this))) {
          var o = it(this, { type: Lo, object: this, name: n });
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
            Jt(function () {
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
          Jt(function () {
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
        return eu({
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
        return eu({
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
          Jt(function () {
            ur(n)
              ? bb(n).forEach(function (o) {
                  return a.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var i = o[0],
                      c = o[1];
                    return a.set(i, c);
                  })
                : hn(n)
                  ? (gb(n) || W(19, n),
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
        Jt(function () {
          Zv(function () {
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
          Jt(function () {
            for (
              var o = X_(n), i = new Map(), c = !1, s = tn(a.data_.keys()), l;
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
                for (var k = a.data_.keys(), m = i.keys(), S = k.next(), x = m.next(); !S.done; ) {
                  if (S.value !== x.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = k.next()), (x = m.next()));
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
        return Ja(this, n);
      }),
      (t.intercept_ = function (n) {
        return Wa(this, n);
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
  Dr = Ir("ObservableMap", gp);
function eu(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), dc(e));
}
function X_(e) {
  if (hn(e) || Dr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (ur(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return W(21, e);
}
var Z_ = {},
  bp = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = Cr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[L] = Z_),
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
          ((o.atom_ = qv(o.name_)), r && o.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Jt(function () {
          Zv(function () {
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
        if ((this.atom_, ot(this))) {
          var o = it(this, { type: sr, object: this, newValue: n });
          if (!o) return this;
          n = o.newValue;
        }
        if (!this.has(n)) {
          Jt(function () {
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
        if (ot(this)) {
          var o = it(this, { type: Lo, object: this, oldValue: n });
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
            Jt(function () {
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
        return tu({
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
        return tu({
          next: function () {
            var i = a.next(),
              c = i.value,
              s = i.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(c), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Wt(n) && !Pt(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Wt(n) && !Pt(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Wt(n) && !Pt(n)) return n.symmetricDifference(this);
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
        if (Wt(n) && !Pt(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          Pt(n) && (n = new Set(n)),
          Jt(function () {
            Array.isArray(n)
              ? (a.clear(),
                n.forEach(function (o) {
                  return a.add(o);
                }))
              : Wt(n)
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
        return Ja(this, n);
      }),
      (t.intercept_ = function (n) {
        return Wa(this, n);
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
  Pt = Ir("ObservableSet", bp);
function tu(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), dc(e));
}
var ru = Object.create(null),
  nu = "remove",
  _p = (function () {
    function e(r, n, a, o) {
      (n === void 0 && (n = new Map()),
        o === void 0 && (o = Hb),
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
        if (ot(this)) {
          var i = it(this, { type: jt, object: this.proxy_ || this.target_, name: n, newValue: a });
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
        return (I.trackingDerivation && !Xt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, a, o) {
        return (
          o === void 0 && (o = !1),
          Xt(this.target_, n)
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
            ((a = new Or(n in this.target_, ti, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var o;
            if ((o = this.target_[Rt]) != null && o[n]) return;
            W(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var i = this.target_; i && i !== Xo; ) {
            var c = Ao(i, n);
            if (c) {
              var s = a.make_(this, n, c, i);
              if (s === 0) return;
              if (s === 1) break;
            }
            i = Object.getPrototypeOf(i);
          }
          ou(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, o, i) {
        if ((i === void 0 && (i = !1), o === !0 && (o = this.defaultAnnotation_), o === !1))
          return this.defineProperty_(n, a, i);
        var c = o.extend_(this, n, a, i);
        return (c && ou(this, o, n), c);
      }),
      (t.defineProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          st();
          var i = this.delete_(n);
          if (!i) return i;
          if (ot(this)) {
            var c = it(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: sr,
              newValue: a.value,
            });
            if (!c) return null;
            var s = c.newValue;
            a.value !== s && (a = xr({}, a, { value: s }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else At(this.target_, n, a);
          this.notifyPropertyAddition_(n, a.value);
        } finally {
          ct();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, a, o, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          st();
          var c = this.delete_(n);
          if (!c) return c;
          if (ot(this)) {
            var s = it(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: sr,
              newValue: a,
            });
            if (!s) return null;
            a = s.newValue;
          }
          var l = au(n),
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
          ct();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          st();
          var i = this.delete_(n);
          if (!i) return i;
          if (ot(this)) {
            var c = it(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: sr,
              newValue: void 0,
            });
            if (!c) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var s = au(n),
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
          ct();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Xt(this.target_, n))) return !0;
        if (ot(this)) {
          var o = it(this, { object: this.proxy_ || this.target_, name: n, type: nu });
          if (!o) return null;
        }
        try {
          var i;
          st();
          var c = bt(this),
            s = !1,
            l = this.values_.get(n),
            u = void 0;
          if (!l && (c || s)) {
            var d;
            u = (d = Ao(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (l && (this.values_.delete(n), l instanceof Or && (u = l.value_), ap(l)),
            this.keysAtom_.reportChanged(),
            (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(n in this.target_),
            c || s)
          ) {
            var f = {
              type: nu,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: u,
              name: n,
            };
            c && _t(this, f);
          }
        } finally {
          ct();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return Ja(this, n);
      }),
      (t.intercept_ = function (n) {
        return Wa(this, n);
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
        return (this.keysAtom_.reportObserved(), ei(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function bn(e, t) {
  var r;
  if (Xt(e, L)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new _p(e, new Map(), String(n), a_(t));
  return (Qo(e, L, a), e);
}
var Q_ = Ir("ObservableObjectAdministration", _p);
function au(e) {
  return (
    ru[e] ||
    (ru[e] = {
      get: function () {
        return this[L].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[L].setObservablePropValue_(e, r);
      },
    })
  );
}
function ci(e) {
  return Zo(e) ? Q_(e[L]) : !1;
}
function ou(e, t, r) {
  var n;
  (n = e.target_[Rt]) == null || delete n[r];
}
var em = yp(0),
  tm = (function () {
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
  qi = 0,
  mp = function () {};
function rm(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
rm(mp, Array.prototype);
var uc = (function (e) {
  function t(n, a, o, i) {
    var c;
    return (
      o === void 0 && (o = "ObservableArray"),
      i === void 0 && (i = !1),
      (c = e.call(this) || this),
      Tr(function () {
        var s = new lc(o, a, i, !0);
        ((s.proxy_ = c),
          Nv(c, L, s),
          n && n.length && c.spliceWithArray(0, 0, n),
          tm && Object.defineProperty(c, "0", em));
      }),
      c
    );
  }
  zv(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[L].atom_.reportObserved();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (c) {
          return si(c) ? c.slice() : c;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return dc({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    gn(t, [
      {
        key: "length",
        get: function () {
          return this[L].getArrayLength_();
        },
        set: function (a) {
          this[L].setArrayLength_(a);
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
})(mp);
Object.entries(Fo).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Qo(uc.prototype, t, r);
});
function yp(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[L].get_(e);
    },
    set: function (r) {
      this[L].set_(e, r);
    },
  };
}
function nm(e) {
  At(uc.prototype, "" + e, yp(e));
}
function wp(e) {
  if (e > qi) {
    for (var t = qi; t < e + 100; t++) nm(t);
    qi = e;
  }
}
wp(1e3);
function am(e, t, r) {
  return new uc(e, t, r);
}
function No(e, t) {
  if (typeof e == "object" && e !== null) {
    if (si(e)) return (t !== void 0 && W(23), e[L].atom_);
    if (Pt(e)) return e.atom_;
    if (Dr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || W(25, t, Ms(e)), r);
    }
    if (ci(e)) {
      if (!t) return W(26);
      var n = e[L].values_.get(t);
      return (n || W(27, t, Ms(e)), n);
    }
    if (ic(e) || ii(e) || Mo(e)) return e;
  } else if (mt(e) && Mo(e[L])) return e[L];
  W(28);
}
function om(e, t) {
  if ((e || W(29), ic(e) || ii(e) || Mo(e) || Dr(e) || Pt(e))) return e;
  if (e[L]) return e[L];
  W(24, e);
}
function Ms(e, t) {
  var r;
  if (t !== void 0) r = No(e, t);
  else {
    if (on(e)) return e.name;
    ci(e) || Dr(e) || Pt(e) ? (r = om(e)) : (r = No(e));
  }
  return r.name_;
}
function Tr(e) {
  var t = jr(),
    r = ai(!0);
  st();
  try {
    return e();
  } finally {
    (ct(), oi(r), Zt(t));
  }
}
var iu = Xo.toString;
function kp(e, t, r) {
  return (r === void 0 && (r = -1), Fs(e, t, r));
}
function Fs(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var i = iu.call(e);
  if (i !== iu.call(t)) return !1;
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
  ((e = su(e)), (t = su(t)));
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
    for (; u--; ) if (!Fs(e[u], t[u], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var p = 0; p < f; p++) {
      var h = d[p];
      if (!(Xt(t, h) && Fs(e[h], t[h], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function su(e) {
  return si(e) ? e.slice() : hn(e) || Dr(e) || Wt(e) || Pt(e) ? Array.from(e.entries()) : e;
}
var cu,
  im = ((cu = Yo().Iterator) == null ? void 0 : cu.prototype) || {};
function dc(e) {
  return ((e[Symbol.iterator] = sm), Object.assign(Object.create(im), e));
}
function sm() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Yo();
  typeof t[e] > "u" && W("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: O_, extras: { getDebugName: Ms }, $mobx: L });
if (!_.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!pp) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function cm(e) {
  e();
}
function lm(e) {
  (e || (e = cm), L_({ reactionScheduler: e }));
}
function um(e) {
  return $_(e);
}
var dm = 1e4,
  fm = 1e4,
  vm = (function () {
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
            (n === void 0 && (n = dm), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, fm));
        },
      }),
      e
    );
  })(),
  pm = typeof FinalizationRegistry < "u" ? FinalizationRegistry : vm,
  Fa = new pm(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  Ui = { exports: {} },
  Vi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lu;
function hm() {
  if (lu) return Vi;
  lu = 1;
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
    (Vi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u),
    Vi
  );
}
var uu;
function gm() {
  return (uu || ((uu = 1), (Ui.exports = hm())), Ui.exports);
}
var bm = gm();
function du(e) {
  e.reaction = new Ft("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function _m(e, t) {
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
          Fa.unregister(n),
          (n.onStoreChange = c),
          n.reaction || (du(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (du(a), Fa.register(r, a, a)),
    O.useDebugValue(a.reaction, um),
    bm.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
var Gi,
  Ki,
  Op = typeof Symbol == "function" && Symbol.for,
  mm =
    (Ki =
      (Gi = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Gi === void 0
        ? void 0
        : Gi.configurable) !== null && Ki !== void 0
      ? Ki
      : !1,
  fu = Op
    ? Symbol.for("react.forward_ref")
    : typeof _.forwardRef == "function" &&
      _.forwardRef(function (e) {
        return null;
      }).$$typeof,
  vu = Op
    ? Symbol.for("react.memo")
    : typeof _.memo == "function" &&
      _.memo(function (e) {
        return null;
      }).$$typeof;
function ym(e, t) {
  var r;
  if (vu && e.$$typeof === vu)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    o = e.displayName || e.name;
  if (fu && e.$$typeof === fu && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var i = function (c, s) {
    return _m(function () {
      return a(c, s);
    }, o);
  };
  return (
    (i.displayName = e.displayName),
    mm && Object.defineProperty(i, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (i.contextTypes = e.contextTypes),
    n && (i = _.forwardRef(i)),
    (i = _.memo(i)),
    km(e, i),
    i
  );
}
var wm = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function km(e, t) {
  Object.keys(e).forEach(function (r) {
    wm[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Hi;
lm(Ho.unstable_batchedUpdates);
Hi = Fa.finalizeAllImmediately;
function Om(e, t) {
  if (pu(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !pu(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function pu(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var hu = Symbol("patchMixins"),
  Sp = Symbol("patchedDefinition");
function Sm(e, t) {
  var r = (e[hu] = e[hu] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function gu(e, t) {
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
function bu(e, t) {
  var r = function () {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    gu.call.apply(gu, [this, e, t].concat(o));
  };
  return r;
}
function Em(e, t, r) {
  var n = Sm(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[Sp])) {
    var o = e[t],
      i = Ep(e, t, a ? a.enumerable : void 0, n, o);
    Object.defineProperty(e, t, i);
  }
}
function Ep(e, t, r, n, a) {
  var o,
    i = bu(a, n);
  return (
    (o = {}),
    (o[Sp] = !0),
    (o.get = function () {
      return i;
    }),
    (o.set = function (s) {
      if (this === e) i = bu(s, n);
      else {
        var l = Ep(this, t, r, n, s);
        Object.defineProperty(this, t, l);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = r),
    o
  );
}
var _u = Symbol("ObserverAdministration"),
  mu = Symbol("isMobXReactObserver");
function Ls(e) {
  var t;
  return (t = e[_u]) != null
    ? t
    : (e[_u] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: Ns(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function xm(e) {
  var t = e.prototype;
  if (e[mu]) {
    var r = Ns(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[mu] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== _.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = yu;
    else if (t.shouldComponentUpdate !== yu)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = Ns(e);
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
        value: Cm.call(this, n),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var i = this,
        c = Ls(this);
      return (
        (c.mounted = !0),
        Fa.unregister(this),
        (c.forceUpdate = function () {
          return i.forceUpdate();
        }),
        (!c.reaction || c.reactionInvalidatedBeforeMount) && c.forceUpdate(),
        o?.apply(this, arguments)
      );
    }),
    Em(t, "componentWillUnmount", function () {
      var i,
        c = Ls(this);
      ((i = c.reaction) == null || i.dispose(),
        (c.reaction = null),
        (c.forceUpdate = null),
        (c.mounted = !1),
        (c.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function Ns(e) {
  return e.displayName || e.name || "<component>";
}
function Cm(e) {
  var t = e.bind(this),
    r = Ls(this);
  function n() {
    r.reaction || ((r.reaction = Pm(r)), r.mounted || Fa.register(this, r, this));
    var a = void 0,
      o = void 0;
    if (
      (r.reaction.track(function () {
        try {
          o = p_(!1, t);
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
function Pm(e) {
  return new Ft(e.name + ".render()", function () {
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
function yu(e, t) {
  return this.state !== t ? !0 : !Om(this.props, e);
}
function li(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(_.Component, e) ||
    Object.prototype.isPrototypeOf.call(_.PureComponent, e)
      ? xm(e)
      : ym(e)
  );
}
function $s() {
  return (
    ($s = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    $s.apply(null, arguments)
  );
}
function Rm(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Am = ["children"],
  wu = O.createContext({});
function xp(e) {
  var t = e.children,
    r = Rm(e, Am),
    n = O.useContext(wu),
    a = O.useRef($s({}, n, r)),
    o = a.current;
  return O.createElement(wu.Provider, { value: o }, t);
}
xp.displayName = "MobXProvider";
O.version.split(".")[0];
if (!_.Component) throw new Error("mobx-react requires React to be available");
if (!ae) throw new Error("mobx-react requires mobx to be available");
var Im = Object.defineProperty,
  jm = Object.getOwnPropertyDescriptor,
  xe = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? jm(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && Im(t, r, a), a);
  };
const Wi = "Loading ...";
class ke {
  constructor() {
    ((this.state = "ROOT"),
      (this.isLoading = !0),
      (this.message = Wi),
      (this.testNonVersioningData = ""),
      (this.testNumberVersioningData = ""),
      (this.testDateVersioningData = ""),
      (this.testTimestampVersioningData = ""),
      pp(this));
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
    ((this.isLoading = !0), (this.message = t ?? Wi));
  }
  stopLoading() {
    ((this.isLoading = !1), (this.message = Wi));
  }
}
xe([ae], ke.prototype, "state", 2);
xe([ae], ke.prototype, "isLoading", 2);
xe([ae], ke.prototype, "message", 2);
xe([ae], ke.prototype, "testData", 2);
xe([ae], ke.prototype, "testDataOptimisticNumber", 2);
xe([ae], ke.prototype, "testDataOptimisticDateId", 2);
xe([ae], ke.prototype, "testDataOptimisticTimeStampId", 2);
xe([ae], ke.prototype, "testNonVersioningData", 2);
xe([ae], ke.prototype, "testNumberVersioningData", 2);
xe([ae], ke.prototype, "testDateVersioningData", 2);
xe([ae], ke.prototype, "testTimestampVersioningData", 2);
xe([lt.bound], ke.prototype, "saveState", 1);
xe([lt.bound], ke.prototype, "saveResponse", 1);
xe([lt.bound], ke.prototype, "saveUpdateResponse", 1);
xe([lt.bound], ke.prototype, "clearStates", 1);
xe([lt], ke.prototype, "loading", 1);
xe([lt], ke.prototype, "stopLoading", 1);
const Dm = new ke();
class Tm {
  constructor() {
    this.stateStore = Dm;
  }
}
const Cp = new Tm(),
  Mm = _.createContext(Cp),
  ui = () => _.useContext(Mm);
function be(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function qe(e) {
  "@babel/helpers - typeof";
  return (
    (qe =
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
    qe(e)
  );
}
function Fm(e, t) {
  if (qe(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qe(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pp(e) {
  var t = Fm(e, "string");
  return qe(t) == "symbol" ? t : t + "";
}
function ku(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Pp(n.key), n));
  }
}
function _e(e, t, r) {
  return (
    t && ku(e.prototype, t),
    r && ku(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Lm(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ze(e, t) {
  if (t && (qe(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Lm(e);
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
function Qe(e, t) {
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
    (t = Pp(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Ae() {}
function Rp(e) {
  if (Array.isArray(e)) return e;
}
function Nm(e, t) {
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
function Bs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function fc(e, t) {
  if (e) {
    if (typeof e == "string") return Bs(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Bs(e, t)
          : void 0
    );
  }
}
function Ap() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J(e, t) {
  return Rp(e) || Nm(e, t) || fc(e, t) || Ap();
}
var Ip = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  $m = function (t) {
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
  $o = function (t, r) {
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
  Bm = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Ou = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  zm = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = t.destination,
      i = t.sourceIndex;
    if (!o) return r;
    var c = Ou(i, n, a),
      s = Ou(o.index, n, a),
      l = r.slice(),
      u = l.splice(c, 1),
      d = J(u, 1),
      f = d[0];
    return (l.splice(s, 0, f), l);
  };
const qm = "modulepreload",
  Um = function (e, t) {
    return new URL(e, t).href;
  },
  Su = {},
  Vm = function (t, r, n) {
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
          if (((u = Um(u, n)), u in Su)) return;
          Su[u] = !0;
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
            ((p.rel = d ? "stylesheet" : qm),
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
function Gm(e, t) {
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
    a = Gm(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      ((r = o[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function Eu(e, t) {
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
function Ji(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Eu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Eu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Km = (function () {
  function e(t) {
    var r = this;
    (be(this, e),
      C(this, "_isAnalyticsEvent", !0),
      C(this, "clone", function () {
        var n = Ji({}, r.payload);
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
          qe(r) === "object" && (this.payload = Ji(Ji({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function Hm(e) {
  if (Array.isArray(e)) return Bs(e);
}
function jp(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function Wm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ge(e) {
  return Hm(e) || jp(e) || fc(e) || Wm();
}
function Jm(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = X(e)) !== null; );
  return e;
}
function Bo() {
  return (
    (Bo =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = Jm(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    Bo.apply(null, arguments)
  );
}
function Ym(e, t, r) {
  return (
    (t = X(t)),
    Ze(e, Dp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Dp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Dp = function () {
    return !!e;
  })();
}
function Xm(e, t, r, n) {
  var a = Bo(X(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var Zm = (function (e) {
    function t(r) {
      var n;
      return (
        be(this, t),
        (n = Ym(this, t, [r])),
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
      Qe(t, e),
      _e(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : Xm(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(Km),
  Qm = _.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  ey = function () {
    return _.useContext(Qm);
  },
  zo = function (t) {
    var r = _.useRef(t);
    return ((r.current = t), r);
  };
function ty(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function ry(e, t) {
  var r = _.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = _.useRef(!0),
    a = _.useRef(r),
    o = n.current || !!(t && a.current.inputs && ty(t, a.current.inputs)),
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
function ny(e, t) {
  return ry(function () {
    return e;
  }, t);
}
function Tp() {
  var e = ey(),
    t = ny(
      function (r) {
        return new Zm({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
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
function ay(e) {
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
function cn(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    o = e.packageName,
    i = e.packageVersion,
    c = e.analyticsData,
    s = Tp(),
    l = s.createAnalyticsEvent,
    u = zo(c),
    d = zo(t),
    f = _.useCallback(
      function (p) {
        var h = l({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: o, packageVersion: i },
          }),
          v = ay({ componentName: n, packageName: o, packageVersion: i }, u.current);
        h.context.push(v);
        var g = h.clone();
        (g && g.fire("atlaskit"), d.current(p, h));
      },
      [r, n, a, o, i, l, u, d],
    );
  return f;
}
function Cu(e, t) {
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
function oy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Pu(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    o = e.packageVersion,
    i = e.analyticsData,
    c = Tp(),
    s = c.createAnalyticsEvent,
    l = zo(i),
    u = zo(t),
    d = _.useCallback(
      function () {
        var f = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          p = oy({ componentName: n, packageName: a, packageVersion: o }, l.current);
        f.context.push(p);
        var h = f.clone();
        (h && h.fire("atlaskit"), u.current(f));
      },
      [r, n, a, o, s, l, u],
    );
  return d;
}
var Rr = "ASC",
  qo = "DESC",
  iy = "small",
  Uo = "large",
  Mp = 0.22;
const sy = 5;
function P(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, sy) : o;
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
var cy = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  ly = _.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      o = e.testId,
      i = e.isLoading,
      c = te(e, cy);
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
          className: P([
            "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
            r && "_1kqm1n9t",
            n && "_179r187z",
          ]),
        },
      ),
      a,
    );
  }),
  uy = function (t) {
    var r = t.children;
    return _.createElement(
      "caption",
      { className: P(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  dy = function (t) {
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
  fy = function (t) {
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
  vy = function (t) {
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
  py = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function Ru(e, t) {
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
function Au(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ru(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ru(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function hy(e, t, r) {
  return (
    (t = X(t)),
    Ze(e, Fp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var Iu = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var o;
      if (r.cells[a] && ((o = r.cells[a]) === null || o === void 0 ? void 0 : o.key) === n) {
        var i;
        return (i = t[a]) === null || i === void 0 ? void 0 : i.key;
      }
    }
  },
  gy = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var o = a === Rr ? 1 : -1,
      i = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      c = Array.from(r);
    return c.sort(function (s, l) {
      var u = Iu(s.cells, t, n),
        d = Iu(l.cells, t, n);
      if (u === void 0 || d === void 0) return o;
      if (qe(u) !== qe(d)) {
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
function by(e) {
  var t = (function (r) {
    function n() {
      var a;
      be(this, n);
      for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
      return ((a = hy(this, n, [].concat(i))), C(a, "state", { pageRows: [] }), a);
    }
    return (
      Qe(n, r),
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
                s = te(o, py);
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
              $o(l, s);
              var h, v;
              return (
                p ? ((h = c), (v = c)) : ((h = gy(s, c, l, u) || []), (v = Ip(h, d, f))),
                Au(Au({}, i), {}, { pageRows: v })
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
var _y = "--local-dynamic-table-width",
  Lp = function (t) {
    var r = t.width;
    return typeof r < "u" ? C({}, _y, "".concat(r, "%")) : void 0;
  },
  my = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  yy = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      o = t.innerRef,
      i = te(t, my);
    return _.createElement(
      "td",
      Z(
        {
          style: Lp({ width: r }),
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
  wy = ["isHighlighted", "children", "style", "testId", "className"],
  ky = _.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      o = e.testId,
      i = e.className,
      c = te(e, wy);
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
  Oy = ["cells"],
  Sy = ["content", "testId"],
  Ey = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      o = t.isFixedSize,
      i = t.isHighlighted,
      c = r.cells,
      s = te(r, Oy);
    return O.createElement(
      ky,
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
          p = te(l, Sy),
          h = (n || { cells: [] }).cells[u] || {},
          v = h.shouldTruncate,
          g = h.width;
        return O.createElement(
          yy,
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
function xy(e, t, r) {
  return (
    (t = X(t)),
    Ze(e, Np() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Np() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Np = function () {
    return !!e;
  })();
}
var Cy = (function (e) {
    function t() {
      return (be(this, t), xy(this, t, arguments));
    }
    return (
      Qe(t, e),
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
                return O.createElement(Ey, {
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
  Py = by(
    O.forwardRef(function (e, t) {
      return O.createElement(Cy, Z({}, e, { forwardedRef: t }));
    }),
  );
function Ry(e, t, r) {
  return (
    (t = X(t)),
    Ze(e, $p() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var Ay = (function (e) {
  function t(r) {
    var n;
    return (be(this, t), (n = Ry(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    Qe(t, e),
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
const vc = _.createContext(null);
var ju = "#FF5630",
  Du = "#DE350B",
  Br = "#BF2600",
  Tu = "#FFC400",
  Mu = "#FFAB00",
  zr = "#FF991F",
  Iy = "#DEEBFF",
  oo = "#B3D4FF",
  Fu = "#4C9AFF",
  Lu = "#2684FF",
  Nu = "#0065FF",
  Ht = "#0052CC",
  zs = "#0747A6",
  or = "#FFFFFF",
  Ne = "#F4F5F7",
  jy = "#EBECF0",
  _r = "#A5ADBA",
  Dy = "#8993A4",
  Ty = "#6B778C",
  My = "#505F79",
  ln = "#42526E",
  nt = "#253858",
  qr = "#172B4D",
  Zn = "rgba(9, 30, 66, 0.04)",
  $u = "rgba(9, 30, 66, 0.08)",
  ht = "#9FB0CC",
  Fy = "#8C9CB8",
  Yi = "#67758F",
  Qn = "#3B475C",
  Bu = "#313D52",
  ea = "#1B2638",
  Ur = "#0D1424",
  Ly = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function Ny(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(ln, ")")
    : "var(--ds-icon-inverse, ".concat(or, ")");
}
var io = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  $y = typeof window > "u" ? _.useEffect : _.useLayoutEffect,
  pc = O.memo(
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
        f = typeof u == "number" ? u : Ly[u],
        p = "".concat(i, "ms"),
        h = Ny(a),
        v = _.useContext(vc);
      return (
        $y(
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
            className: P([io.wrapperStyles, io.rotateStyles]),
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
              className: P([io.loadInStyles]),
            },
            O.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: P([io.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function zu(e, t) {
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
function qu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : zu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Uu = "--contents-opacity",
  By = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: P(["_kqswh2mm"]) },
      r,
    );
  },
  zy = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: P(["_tzy47hfw _lcxvglyw"]),
        style: qu(qu({}, C({}, Uu, n)), {}, { "--_cnddr8": ir("var(".concat(Uu, ")")) }),
      },
      r,
    );
  },
  qy = function (t) {
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
function Uy(e, t, r) {
  return (
    (t = X(t)),
    Ze(e, Bp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Bp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Bp = function () {
    return !!e;
  })();
}
var zp = (function (e) {
  function t() {
    return (be(this, t), Uy(this, t, arguments));
  }
  return (
    Qe(t, e),
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
            By,
            { testId: s },
            o ? O.createElement(zy, { contentsOpacity: c, testId: s }, a) : a,
            o &&
              O.createElement(
                qy,
                { testId: s },
                O.createElement(pc, {
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
C(zp, "defaultProps", {
  isLoading: !0,
  spinnerSize: Uo,
  contentsOpacity: Mp,
  loadingLabel: "Loading table",
});
var Vy = ["children", "testId"],
  Gy = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = te(e, Vy);
    return _.createElement(
      "div",
      Z({}, a, { "data-testid": n, ref: t, className: P(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  Ky = function (t) {
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
  Hy = _.forwardRef(function (e, t) {
    var r = e.children;
    return _.createElement("div", { ref: t, className: P(["_kqswh2mm _152tidpf"]) }, r);
  });
function Wy(e, t, r) {
  return (
    (t = X(t)),
    Ze(e, qp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var Up = (function (e) {
  function t() {
    var r;
    be(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = Wy(this, t, [].concat(a))),
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
          qe(i.style) === "object" &&
          ((i.style.pointerEvents = s ? "none" : ""), (i.style.opacity = s ? l.toString() : ""));
      }),
      r
    );
  }
  return (
    Qe(t, e),
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
            Gy,
            { testId: c && "".concat(c, "--loading--container--advanced"), ref: this.containerRef },
            a,
            o &&
              O.createElement(
                Ky,
                { testId: c },
                O.createElement(
                  Hy,
                  { ref: this.spinnerRef },
                  O.createElement(pc, {
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
C(Up, "defaultProps", {
  isLoading: !0,
  spinnerSize: Uo,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Mp), ")"),
  loadingLabel: "Loading table",
});
function Jy(e) {
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
var ta = {},
  ra = {};
function Vu(e, t, r, n, a, o, i) {
  try {
    var c = e[o](i),
      s = c.value;
  } catch (l) {
    return void r(l);
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
        Vu(o, n, a, i, c, "next", s);
      }
      function c(s) {
        Vu(o, n, a, i, c, "throw", s);
      }
      i(void 0);
    });
  };
}
var Xi = { exports: {} },
  Zi = { exports: {} },
  Gu;
function Vp() {
  return (
    Gu ||
      ((Gu = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Zi)),
    Zi.exports
  );
}
var Qi = { exports: {} },
  es = { exports: {} },
  Ku;
function Gp() {
  return (
    Ku ||
      ((Ku = 1),
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
      })(es)),
    es.exports
  );
}
var Hu;
function Kp() {
  return (
    Hu ||
      ((Hu = 1),
      (function (e) {
        var t = Gp();
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
                (function (S, x, A) {
                  var D,
                    R,
                    M,
                    z = 0,
                    $ = A || [],
                    U = !1,
                    q = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: V,
                      f: V.bind(n, 4),
                      d: function (H, N) {
                        return ((D = H), (R = 0), (M = n), (q.n = N), l);
                      },
                    };
                  function V(G, H) {
                    for (R = G, M = H, a = 0; !U && z && !N && a < $.length; a++) {
                      var N,
                        j = $[a],
                        me = q.p,
                        se = j[2];
                      G > 3
                        ? (N = se === H) &&
                          ((M = j[(R = j[4]) ? 5 : ((R = 3), 3)]), (j[4] = j[5] = n))
                        : j[0] <= me &&
                          ((N = G < 2 && me < j[1])
                            ? ((R = 0), (q.v = H), (q.n = j[1]))
                            : me < se &&
                              (N = G < 3 || j[0] > H || H > se) &&
                              ((j[4] = G), (j[5] = H), (q.n = se), (R = 0)));
                    }
                    if (N || G > 1) return l;
                    throw ((U = !0), H);
                  }
                  return function (G, H, N) {
                    if (z > 1) throw TypeError("Generator is already running");
                    for (U && H === 1 && V(H, N), R = H, M = N; (a = R < 2 ? n : M) || !U; ) {
                      D || (R ? (R < 3 ? (R > 1 && (q.n = -1), V(R, M)) : (q.n = M)) : (q.v = M));
                      try {
                        if (((z = 2), D)) {
                          if ((R || (G = "next"), (a = D[G]))) {
                            if (!(a = a.call(D, M)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((M = a.value), R < 2 && (R = 0));
                          } else
                            (R === 1 && (a = D.return) && a.call(D),
                              R < 2 &&
                                ((M = TypeError(
                                  "The iterator does not provide a '" + G + "' method",
                                )),
                                (R = 1)));
                          D = n;
                        } else if ((a = (U = q.n < 0) ? M : S.call(x, q)) !== l) break;
                      } catch (j) {
                        ((D = n), (R = 1), (M = j));
                      } finally {
                        z = 1;
                      }
                    }
                    return { value: a, done: U };
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
      })(Qi)),
    Qi.exports
  );
}
var ts = { exports: {} },
  rs = { exports: {} },
  ns = { exports: {} },
  Wu;
function Hp() {
  return (
    Wu ||
      ((Wu = 1),
      (function (e) {
        var t = Vp(),
          r = Gp();
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
      })(ns)),
    ns.exports
  );
}
var Ju;
function Wp() {
  return (
    Ju ||
      ((Ju = 1),
      (function (e) {
        var t = Kp(),
          r = Hp();
        function n(a, o, i, c, s) {
          return new r(t().w(a, o, i, c), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(rs)),
    rs.exports
  );
}
var Yu;
function Yy() {
  return (
    Yu ||
      ((Yu = 1),
      (function (e) {
        var t = Wp();
        function r(n, a, o, i, c) {
          var s = t(n, a, o, i, c);
          return s.next().then(function (l) {
            return l.done ? l.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ts)),
    ts.exports
  );
}
var as = { exports: {} },
  Xu;
function Xy() {
  return (
    Xu ||
      ((Xu = 1),
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
      })(as)),
    as.exports
  );
}
var os = { exports: {} },
  is = { exports: {} },
  Zu;
function Zy() {
  return (
    Zu ||
      ((Zu = 1),
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
      })(is)),
    is.exports
  );
}
var Qu;
function Qy() {
  return (
    Qu ||
      ((Qu = 1),
      (function (e) {
        var t = Zy().default;
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
      })(os)),
    os.exports
  );
}
var ed;
function e0() {
  return (
    ed ||
      ((ed = 1),
      (function (e) {
        var t = Vp(),
          r = Kp(),
          n = Yy(),
          a = Wp(),
          o = Hp(),
          i = Xy(),
          c = Qy();
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
      })(Xi)),
    Xi.exports
  );
}
var ss, td;
function t0() {
  if (td) return ss;
  td = 1;
  var e = e0()();
  ss = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return ss;
}
var r0 = t0();
const B = dr(r0);
var mr = {},
  Vr = {},
  so = {},
  na = {},
  rd;
function n0() {
  if (rd) return na;
  ((rd = 1),
    Object.defineProperty(na, "__esModule", { value: !0 }),
    (na.V1InitializeContainer = void 0));
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
  return ((na.V1InitializeContainer = t), na);
}
var aa = {},
  nd;
function a0() {
  if (nd) return aa;
  ((nd = 1),
    Object.defineProperty(aa, "__esModule", { value: !0 }),
    (aa.V2InitializeContainer = void 0));
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
  return ((aa.V2InitializeContainer = t), aa);
}
var ad;
function o0() {
  if (ad) return so;
  ((ad = 1), Object.defineProperty(so, "__esModule", { value: !0 }));
  const e = Mt(),
    t = n0(),
    r = a0();
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
  return ((so.default = n), so);
}
var Gr = {},
  oa = {},
  od;
function i0() {
  if (od) return oa;
  ((od = 1),
    Object.defineProperty(oa, "__esModule", { value: !0 }),
    (oa._resolveDeltasResponse = void 0));
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
  oa._resolveDeltasResponse = r;
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
  return oa;
}
var id;
function Jp() {
  if (id) return Gr;
  id = 1;
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
    r = i0();
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
var ia = {},
  sd;
function s0() {
  if (sd) return ia;
  ((sd = 1),
    Object.defineProperty(ia, "__esModule", { value: !0 }),
    (ia._makeParamStoreGetter = void 0));
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
  return ((ia._makeParamStoreGetter = l), ia);
}
var yr = {},
  cd;
function c0() {
  if (cd) return yr;
  cd = 1;
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
    r = Jp();
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
var ld;
function l0() {
  if (ld) return Vr;
  ld = 1;
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
    r = o0(),
    n = Jp(),
    a = s0(),
    o = c0();
  let i = class qs extends t.StatsigClientBase {
    static instance(s) {
      const l = (0, t._getStatsigGlobal)().instance(s);
      return l instanceof qs
        ? l
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new qs(s ?? "", {}));
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
var ud;
function u0() {
  return (
    ud ||
      ((ud = 1),
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
          a = l0();
        ((e.StatsigClient = a.default), r(Mt(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(mr)),
    mr
  );
}
var gt = u0(),
  cs = { exports: {} },
  dd;
function d0() {
  return (
    dd ||
      ((dd = 1),
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
      })(cs)),
    cs.exports
  );
}
var f0 = d0();
const v0 = dr(f0);
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
function nr(e) {
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
var co = "@all-features",
  p0 = (function () {
    function e() {
      (be(this, e), C(this, "eventToValue", new Map()), (this.emitter = new v0()));
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
            this.emitter.on(co, r),
            function () {
              n.emitter.off(co, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(co),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== co;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  h0 = "fedramp-moderate";
function g0() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === h0;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var hc = (function (e) {
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
  ka = (function (e) {
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
  b0 = [
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
function vd(e, t) {
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
function Us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : vd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var lo = function (t) {
    return Us({ perimeter: g0() ? Na.FEDRAMP_MODERATE : Na.COMMERCIAL }, t);
  },
  sa = function (t, r) {
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
  pd = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  _0 = function (t) {
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
    var f = te(t, b0);
    return Us(
      Us({}, f),
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
  m0 = Object.entries(hc).map(function (e) {
    var t = J(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  Yp = function (t) {
    var r,
      n,
      a,
      o = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = m0.find(function (i) {
            var c = J(i, 1),
              s = c[0];
            return o.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : hc.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  Vs = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  hd = (function () {
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
            var c = Array.isArray(n) ? "array" : qe(n),
              s = Array.isArray(i) ? "array" : qe(i);
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
                Yp(r.details),
                Vs(
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
  gd = (function () {
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
              : n == null || (qe(i) === qe(n) && Array.isArray(n) === Array.isArray(i))
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
                Yp(r.details),
                function (u, d) {
                  return r.get(d);
                },
                Vs(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                Vs(
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
function y0(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Xp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Xp = function () {
    return !!e;
  })();
}
function w0(e, t, r) {
  if (Xp()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && La(a, r.prototype), a);
}
function Gs(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Gs = function (n) {
      if (n === null || !y0(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return w0(n, arguments, X(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        La(a, n)
      );
    }),
    Gs(e)
  );
}
function k0(e, t, r) {
  return (
    (t = X(t)),
    Ze(e, Zp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Zp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Zp = function () {
    return !!e;
  })();
}
var bd = (function (e) {
  function t(r) {
    return (be(this, t), k0(this, t, [r]));
  }
  return (Qe(t, e), _e(t));
})(Gs(Error));
function _d(e, t) {
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
function O0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _d(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _d(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var S0 = 5e3,
  E0 = "https://api.atlassian.com/flags",
  x0 = "https://api.stg.atlassian.com/flags",
  C0 = "https://api.dev.atlassian.com/flags",
  P0 = "https://api.stg.atlassian-us-gov-mod.com/flags",
  R0 = "https://api.atlassian-us-gov-mod.com/flags",
  A0 = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  I0 = "oasis-stg.com/flags",
  j0 = "atlassian-isolated.net/flags",
  D0 = "/gateway/api/flags",
  ls = (function () {
    function e() {
      be(this, e);
    }
    return _e(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = he(
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
          var t = he(
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
          var t = he(
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
                        new bd(
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
                      throw new bd("Unexpected 204 response");
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
          if (n) return D0;
          if (a === Na.FEDRAMP_MODERATE)
            switch (r) {
              case ka.Production:
                return R0;
              case ka.Staging:
                return P0;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === Na.COMMERCIAL)
            switch (r) {
              case ka.Development:
                return C0;
              case ka.Staging:
                var i = this.getApiUrl(o);
                return i !== null ? i : x0;
              default:
                var c = this.getApiUrl(o);
                return c !== null ? c : E0;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = he(
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
                          (l = i.fetchTimeoutMs || S0),
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
                            O0(
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
          if (n === void 0) return r ? A0.replace("%s", r) : null;
          var a = n.protocol,
            o = n.hostname,
            i = o.match(/([^.]+)\.oasis-stg\.com$/);
          if (i) return "".concat(a, "//api.").concat(i[1], ".").concat(I0);
          var c = o.match(/([^.]+)\.atlassian-isolated\.net$/);
          return c ? "".concat(a, "//api.").concat(c[1], ".").concat(j0) : null;
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
function ca(e) {
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
function T0(e, t, r) {
  return (
    (t = X(t)),
    Ze(e, Qp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Qp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Qp = function () {
    return !!e;
  })();
}
function M0(e, t, r, n) {
  var a = Bo(X(e.prototype), t, r);
  return typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var F0 = (function (e) {
  function t() {
    var r;
    return (
      be(this, t),
      (r = T0(this, t, ["NoFetchDataAdapter", "nofetch"])),
      C(r, "bootstrapResult", null),
      r
    );
  }
  return (
    Qe(t, e),
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
          var r = he(
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
          var r = he(
            B.mark(function a(o, i, c) {
              return B.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return l.abrupt(
                          "return",
                          this.bootstrapResult &&
                            ca(
                              ca({}, this.bootstrapResult),
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
            ca(ca({}, this.bootstrapResult), {}, { fullUserHash: gt._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = he(
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
          M0(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = ca({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(gt.DataAdapterCore);
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
function $e(e) {
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
function L0(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = N0(e)) || t) {
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
function N0(e, t) {
  if (e) {
    if (typeof e == "string") return wd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? wd(e, t)
          : void 0
    );
  }
}
function wd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var us = "LocalOverride:Recognized",
  $0 = "STATSIG_OVERRIDES",
  kd = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Kr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  at = function (t, r) {
    return r + ":" + t;
  },
  B0 = (function () {
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
              var m = 0, S = Object.entries((x = s.layers) !== null && x !== void 0 ? x : {});
              m < S.length;
              m++
            ) {
              var x,
                A = J(S[m], 2),
                D = A[0],
                R = A[1];
              r.layers[D] = R;
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
            this.parseStoredOverrides(kd),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(kd);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var o = a[n],
              i = new Set(Object.keys(o)),
              c = L0(i),
              s;
            try {
              for (c.s(); !(s = c.n()).done; ) {
                var l = s.value,
                  u = rt._DJB2(l);
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
              this._djb2Map.set(at(rt._DJB2(f), c), p);
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
            this._djb2Map.set(at(rt._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(at(rt._DJB2(r), "gates")),
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
                : this._djb2Map.get(at(r.name, "gates"));
          return o == null
            ? null
            : $e($e({}, r), {}, { value: o, details: $e($e({}, r.details), {}, { reason: us }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(at(rt._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(at(rt._DJB2(r), "configs")),
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
            this._djb2Map.set(at(rt._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(at(rt._DJB2(r), "configs")),
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
            this._djb2Map.set(at(rt._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(at(rt._DJB2(r), "layers")),
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
                : this._djb2Map.get(at(r.name, "layers"));
          return o == null
            ? null
            : $e(
                $e({}, r),
                {},
                {
                  __value: o,
                  get: rt._makeTypedGet(r.name, o),
                  details: $e($e({}, r.details), {}, { reason: us }),
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
                : this._djb2Map.get(at(r.name, "configs"));
          return o == null
            ? null
            : $e(
                $e({}, r),
                {},
                {
                  value: o,
                  get: rt._makeTypedGet(r.name, o),
                  details: $e($e({}, r.details), {}, { reason: us }),
                },
              );
        },
      },
    ]);
  })(),
  z0 = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function Od(e, t) {
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
      ? Od(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Od(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Sd = "client-default-key",
  q0 = "https://xp.atlassian.com/v1/rgstr",
  U0 = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? $0 : n,
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
        C(this, "subscriptions", new p0()),
        C(this, "dataAdapter", new F0()),
        C(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = o || new B0(a)));
    }
    return _e(e, [
      {
        key: "initialize",
        value: (function () {
          var t = he(
            B.mark(function n(a, o, i) {
              var c = this,
                s,
                l;
              return B.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = lo(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          sa(s, this.initOptions) ||
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
          var t = he(
            B.mark(function n(a, o, i, c) {
              var s = this,
                l,
                u;
              return B.wrap(
                function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        if (((l = lo(a)), !this.initPromise)) {
                          f.next = 4;
                          break;
                        }
                        return (
                          sa(l, this.initOptions) ||
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
                c.initOptions.environment !== ka.Production &&
                  console.error("Analytics web client promise did not resolve", l);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = he(
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
                          (l = lo(a)),
                          !this.initPromise)
                        ) {
                          p.next = 5;
                          break;
                        }
                        return (
                          sa(l, this.initOptions) ||
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
          var t = he(
            B.mark(function n(a, o, i) {
              var c, s;
              return B.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (c = lo(a)),
                          (s = function () {
                            return ls.fetchExperimentValues(c, o, i).then(function (f) {
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
          var t = he(
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
          var t = he(
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
          var t = he(
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
            return hd.fromExperiment(
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
              new hd(r, {}, "", { time: Date.now(), reason: hc.Error })
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
          return sa(this.currentIdentifiers, r) && sa(this.currentAttributes, n);
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
          var t = he(
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
                          (u = ls.fetchClientSdk(a).then(function (b) {
                            return (c.sdkKey = b.clientSdkKey);
                          })),
                          (d = ls.fetchExperimentValues(a, o, i)),
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
          var t = he(
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
          var t = he(
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
                          (l = _0(a)),
                          l.sdkKey || (l.sdkKey = Sd),
                          ((c = l.networkConfig) !== null && c !== void 0 && c.logEventUrl) ||
                            (l.networkConfig = ar(
                              ar({}, l.networkConfig),
                              {},
                              { logEventUrl: q0 },
                            )),
                          l.perimeter === Na.FEDRAMP_MODERATE && (l.disableLogging = !0),
                          (u = l.sdkKey),
                          (d = l.environment),
                          l.updateUserCompletionCallback,
                          l.perimeter,
                          (f = te(l, z0)),
                          (this.user = pd(o, i)),
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
                          (this.statsigClient = new gt.StatsigClient(Sd, this.user, p)),
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
                            he(
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
          var t = he(
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
                        ((l = b.sent), (u = pd(o, l.customAttributesFromFetch)), (b.next = 13));
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
            return gd.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !o }));
          } catch (i) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: i,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              gd.fromLayer(gt._makeLayer(r, { reason: "Error" }, null))
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
C(K, "client", new U0());
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
var Ks = K;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = K;
  else {
    var uo, ds;
    Ks = window.__FEATUREGATES_JS__;
    var Ed =
      ((uo = Ks) === null || uo === void 0 || (ds = uo.getPackageVersion) === null || ds === void 0
        ? void 0
        : ds.call(uo)) || "4.10.0 or earlier";
    if (Ed !== rn) {
      var V0 = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(Ed, " when module version ")
        .concat(rn, " was loading.");
      console.warn(V0);
    }
  }
var Hr,
  Wr,
  G0 =
    (globalThis == null ||
    (Hr = globalThis.process) === null ||
    Hr === void 0 ||
    (Hr = Hr.env) === null ||
    Hr === void 0
      ? void 0
      : Hr.JEST_WORKER_ID) !== void 0,
  K0 =
    !G0 &&
    (globalThis == null ||
    (Wr = globalThis.process) === null ||
    Wr === void 0 ||
    (Wr = Wr.env) === null ||
    Wr === void 0
      ? void 0
      : Wr.NODE_ENV) !== "production",
  H0 = function () {
    var t;
    K0 && (t = console).debug.apply(t, arguments);
  },
  gc = {},
  W0 = "@atlaskit/platform-feature-flags",
  Ca = "__PLATFORM_FEATURE_FLAGS__",
  eh = typeof process < "u" && typeof gc < "u",
  J0 = eh ? gc.ENABLE_PLATFORM_FF === "true" : !1,
  Y0 = eh ? gc.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  X0 = J0 || Y0,
  Z0 = { booleanResolver: void 0 },
  Pa = typeof window < "u" ? window : globalThis;
Pa[Ca] = Pa[Ca] || Z0;
function Q0(e) {
  if (X0)
    return (
      H0(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        W0,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = Pa[Ca]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = Pa[Ca]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return Ks.checkGate(e);
    var a = (n = Pa[Ca]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function ge(e) {
  return Q0(e);
}
var ew = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  tw = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  rw = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  nw = { core: 16, utility: 12 },
  aw = {
    core: {
      medium: { none: 0, compact: 4, spacious: 4 },
      small: { none: 0, compact: 2.66, spacious: 8 },
    },
    utility: {
      medium: { none: 0, compact: 2, spacious: 6 },
      small: { none: 0, compact: 2, spacious: 6 },
    },
  },
  xd = _.memo(function (t) {
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
    if (d && !ge("platform-visual-refresh-icons"))
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
    var S = nw[w],
      x = aw[w][k][g],
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
        dangerouslySetInnerHTML: y,
        className: P([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : w === "utility" ? rw[g] : k === "small" ? tw[g] : ew[g],
        ]),
      }),
    );
  });
const ow = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: xd, default: xd }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  di = ac(ow);
var Cd;
function iw() {
  if (Cd) return ra;
  ((Cd = 1), Object.defineProperty(ra, "__esModule", { value: !0 }), (ra.default = void 0));
  var e = r(wt()),
    t = r(di);
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
  return ((n.displayName = "ChevronLeftIcon"), (ra.default = n), ra);
}
var la = {};
function Pd(e, t) {
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
function Rd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Pd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var sw = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  Ad = _.memo(function (t) {
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
          style: Rd(
            Rd({}, v),
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
            s && sw[s],
          ]),
        },
      ),
    );
  });
const cw = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Ad, default: Ad }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  th = ac(cw);
var Id;
function lw() {
  if (Id) return la;
  ((Id = 1), Object.defineProperty(la, "__esModule", { value: !0 }), (la.default = void 0));
  var e = r(wt()),
    t = th;
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
  return ((n.displayName = "ChevronLeftLargeIcon"), (la.default = n), la);
}
var jd;
function uw() {
  if (jd) return ta;
  ((jd = 1), Object.defineProperty(ta, "__esModule", { value: !0 }), (ta.default = void 0));
  var e = n(wt()),
    t = n(iw()),
    r = n(lw());
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  const a = (o) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronLeftIcon", LEGACY_fallbackIcon: r.default }, o),
    );
  return ((a.displayName = "ChevronLeftIconMigration"), (ta.default = a), ta);
}
var dw = uw();
const fw = dr(dw);
var ua = {},
  da = {},
  Dd;
function vw() {
  if (Dd) return da;
  ((Dd = 1), Object.defineProperty(da, "__esModule", { value: !0 }), (da.default = void 0));
  var e = r(wt()),
    t = r(di);
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
  return ((n.displayName = "ChevronRightIcon"), (da.default = n), da);
}
var fa = {},
  Td;
function pw() {
  if (Td) return fa;
  ((Td = 1), Object.defineProperty(fa, "__esModule", { value: !0 }), (fa.default = void 0));
  var e = r(wt()),
    t = th;
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
  return ((n.displayName = "ChevronRightLargeIcon"), (fa.default = n), fa);
}
var Md;
function hw() {
  if (Md) return ua;
  ((Md = 1), Object.defineProperty(ua, "__esModule", { value: !0 }), (ua.default = void 0));
  var e = n(wt()),
    t = n(vw()),
    r = n(pw());
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  const a = (o) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronRightIcon", LEGACY_fallbackIcon: r.default }, o),
    );
  return ((a.displayName = "ChevronRightIconMigration"), (ua.default = a), ua);
}
var gw = hw();
const bw = dr(gw);
var bc = _.createContext("elevation.surface"),
  _w = function () {
    return _.useContext(bc);
  };
bc.displayName = "SurfaceProvider";
var mw = [
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
  yw = ["className"],
  ww = {
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
  rh = {
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
  kw = {
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
  Ow = {
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
  Sw = {
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
  Ew = {
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
  fi = _.forwardRef(function (e, t) {
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
      S = te(e, mw);
    S.className;
    var x = te(S, yw),
      A = _.createElement(
        n,
        Z(
          {
            style: w,
            ref: t,
            className: P([
              "_19itglyw _vchhusvi _r06hglyw",
              o && ww[o],
              o && xw(o) && rh[o],
              u && kw[u],
              f && Ow[f],
              g && Sw[g],
              y && Ew[y],
              m,
            ]),
          },
          x,
          { "data-testid": k },
        ),
        a,
      );
    return o ? _.createElement(bc.Provider, { value: o }, A) : A;
  });
function xw(e) {
  return e in rh;
}
const fs = () =>
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
  nh = (...e) => P(e);
function Cw() {
  return {
    css() {
      throw fs();
    },
    cssMap() {
      throw fs();
    },
    cx: nh,
    XCSSProp() {
      throw fs();
    },
  };
}
var Pw = Cw(),
  ah = Pw.cx,
  Rw = [
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
  Fd = {
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
  Ld = {
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
  Aw = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  Iw = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  jw = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  Dw = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  Tw = { root: "_1e0c1txw _vchhusvi" },
  Vo = _.memo(
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
        v = te(e, Rw);
      return _.createElement(
        n,
        Z({}, v, {
          role: a,
          className: P([
            Tw.root,
            c && Ld[c],
            s && Ld[s],
            c && Fd[c],
            l && Fd[l],
            o && Dw[o],
            f && Iw[f],
            i && Aw[i],
            p && jw[p],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        u,
      );
    }),
  );
Vo.displayName = "Flex";
var Mw = [
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
  Hs = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  Fw = function (t) {
    var r = t.children;
    return _.createElement("span", { className: P([Hs.separator]) }, r);
  },
  ko = _.memo(
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
        b = te(e, Mw),
        y = typeof f == "string" ? _.createElement(Fw, null, f) : f,
        w = y
          ? _.Children.toArray(g)
              .filter(Boolean)
              .map(function (k, m) {
                return _.createElement(_.Fragment, { key: m }, f && m > 0 ? y : null, k);
              })
          : g;
      return _.createElement(
        Vo,
        Z({}, b, {
          as: r,
          role: v,
          alignItems: o,
          justifyContent: s || n,
          direction: "row",
          gap: u,
          rowGap: d,
          wrap: c ? "wrap" : void 0,
          xcss: ah(l === "hug" && Hs.hug, l === "fill" && Hs.fill, p),
          testId: h,
          ref: t,
        }),
        w,
      );
    }),
  );
ko.displayName = "Inline";
var Lw = "Invariant failed";
function Nw(e, t) {
  if (!e) throw new Error(Lw);
}
var oh = _.createContext(!1),
  $w = function () {
    return _.useContext(oh);
  },
  Bw = oh.Provider,
  zw = ["span", "p", "strong", "em"],
  qw = function (t, r) {
    var n = _w();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return Nd.hasOwnProperty(n) ? Nd[n] : "color.text";
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
  Uw = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  Vw = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  Gw = {
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
  Nd = {
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
  ih = _.forwardRef(function (e, t) {
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
    Nw(zw.includes(n));
    var p = $w(),
      h = qw(a, p);
    !s && !p && (s = "medium");
    var v = _.createElement(
      n,
      {
        id: c,
        className: P([
          Jr.root,
          s && Uw[s],
          h && Gw[h],
          u && Jr.truncation,
          u === 1 && Jr.breakAll,
          o && Jr["textAlign.".concat(o)],
          l && Vw[l],
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
    return p ? v : _.createElement(Bw, { value: !0 }, v);
  });
function Kw() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var Hw = ["as", "children", "isInset", "testId", "style", "xcss"],
  Ww = ["className"],
  _c = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      o = e.isInset,
      i = e.testId,
      c = e.style,
      s = e.xcss,
      l = te(e, Hw);
    l.className;
    var u = te(l, Ww);
    return _.createElement(
      n,
      Z({}, u, {
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
  Jw = [
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
  Yw = ["className"],
  $d = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  sh = _.forwardRef(function (e, t) {
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
      v = te(e, Jw),
      g = _.useContext(vc),
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
        packageVersion: "16.0.2",
        analyticsData: u,
        actionSubject: "button",
      });
    v.className;
    var w = te(v, Yw);
    return _.createElement(
      _c,
      Z({ as: "button", tabIndex: h ?? (Kw() && !n ? 0 : void 0), style: d }, w, {
        type: o,
        onClick: y,
        disabled: n,
        xcss: nh($d.root, n && $d.disabled, p),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  vs = {},
  va = {},
  Bd;
function ch() {
  if (Bd) return va;
  ((Bd = 1), Object.defineProperty(va, "__esModule", { value: !0 }), (va.bind = void 0));
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
  return ((va.bind = e), va);
}
var wr = {},
  zd;
function Xw() {
  if (zd) return wr;
  zd = 1;
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
  var t = ch();
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
var qd;
function Zw() {
  return (
    qd ||
      ((qd = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = ch();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = Xw();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(vs)),
    vs
  );
}
var vi = Zw(),
  Qw = {
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
  ek = "ds",
  tk = "--".concat(ek, "-token-not-found");
function Vt(e, t) {
  var r = Qw[e];
  r || (r = tk);
  var n = t ? "var(".concat(r, ", ").concat(t, ")") : "var(".concat(r, ")");
  return n;
}
var rk = function () {
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
  lh = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: rk() });
  },
  nk = lh(),
  ak = _.createContext(lh()),
  ok = function (e) {
    return e.value++;
  },
  ik = function (e) {
    return e ? e.prefix : "";
  },
  sk = function (e) {
    var t = e || nk,
      r = ik(t),
      n = ok(t),
      a = r + n,
      o = function (i) {
        return a + t.uid(i);
      };
    return { uid: a, gen: o };
  },
  uh = function () {
    var e = _.useContext(ak),
      t = _.useState(function () {
        return sk(e);
      })[0];
    return t;
  },
  ck = function () {
    var e = uh().uid;
    return e;
  },
  lk = function () {
    var e = uh().gen;
    return e;
  },
  ps,
  Oo = (ps = O.useId) !== null && ps !== void 0 ? ps : void 0;
function dh() {
  return Oo && ge("platform-dst-react-18-use-id")
    ? ge("platform-dst-react-18-use-id-selector-safe")
      ? Oo().replace(/[:«»]/g, "_")
      : Oo()
    : "uid".concat(ck());
}
function uk() {
  if (Oo && ge("platform-dst-react-18-use-id")) {
    var e = dh();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return lk();
}
var mc = function (t) {
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
  dk = {
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
  fk = ["children"];
function vk(e) {
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
      s = te(i, fk),
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
var pk = vk(function () {
    return { mode: "light" };
  }),
  hk = pk.useTheme;
function gk(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function bk(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var _k = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(bk(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = gk(a);
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
  Go = "-moz-",
  Q = "-webkit-",
  fh = "comm",
  yc = "rule",
  wc = "decl",
  mk = "@import",
  vh = "@keyframes",
  yk = "@layer",
  wk = Math.abs,
  pi = String.fromCharCode,
  kk = Object.assign;
function Ok(e, t) {
  return Ee(e, 0) ^ 45
    ? (((((((t << 2) ^ Ee(e, 0)) << 2) ^ Ee(e, 1)) << 2) ^ Ee(e, 2)) << 2) ^ Ee(e, 3)
    : 0;
}
function ph(e) {
  return e.trim();
}
function Sk(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, r) {
  return e.replace(t, r);
}
function Ws(e, t) {
  return e.indexOf(t);
}
function Ee(e, t) {
  return e.charCodeAt(t) | 0;
}
function $a(e, t, r) {
  return e.slice(t, r);
}
function xt(e) {
  return e.length;
}
function kc(e) {
  return e.length;
}
function fo(e, t) {
  return (t.push(e), e);
}
function Ek(e, t) {
  return e.map(t).join("");
}
var hi = 1,
  un = 1,
  hh = 0,
  Ue = 0,
  ye = 0,
  _n = "";
function gi(e, t, r, n, a, o, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: o,
    line: hi,
    column: un,
    length: i,
    return: "",
  };
}
function pa(e, t) {
  return kk(gi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function xk() {
  return ye;
}
function Ck() {
  return ((ye = Ue > 0 ? Ee(_n, --Ue) : 0), un--, ye === 10 && ((un = 1), hi--), ye);
}
function We() {
  return ((ye = Ue < hh ? Ee(_n, Ue++) : 0), un++, ye === 10 && ((un = 1), hi++), ye);
}
function Dt() {
  return Ee(_n, Ue);
}
function So() {
  return Ue;
}
function Ya(e, t) {
  return $a(_n, e, t);
}
function Ba(e) {
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
function gh(e) {
  return ((hi = un = 1), (hh = xt((_n = e))), (Ue = 0), []);
}
function bh(e) {
  return ((_n = ""), e);
}
function Eo(e) {
  return ph(Ya(Ue - 1, Js(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Pk(e) {
  for (; (ye = Dt()) && ye < 33; ) We();
  return Ba(e) > 2 || Ba(ye) > 3 ? "" : " ";
}
function Rk(e, t) {
  for (; --t && We() && !(ye < 48 || ye > 102 || (ye > 57 && ye < 65) || (ye > 70 && ye < 97)); );
  return Ya(e, So() + (t < 6 && Dt() == 32 && We() == 32));
}
function Js(e) {
  for (; We(); )
    switch (ye) {
      case e:
        return Ue;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Js(ye);
        break;
      case 40:
        e === 41 && Js(e);
        break;
      case 92:
        We();
        break;
    }
  return Ue;
}
function Ak(e, t) {
  for (; We() && e + ye !== 57; ) if (e + ye === 84 && Dt() === 47) break;
  return "/*" + Ya(t, Ue - 1) + "*" + pi(e === 47 ? e : We());
}
function Ik(e) {
  for (; !Ba(Dt()); ) We();
  return Ya(e, Ue);
}
function jk(e) {
  return bh(xo("", null, null, null, [""], (e = gh(e)), 0, [0], e));
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
      x = w;
    g;

  )
    switch (((h = y), (y = We()))) {
      case 40:
        if (h != 108 && Ee(x, d - 1) == 58) {
          Ws((x += ee(Eo(y), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Eo(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += Pk(h);
        break;
      case 92:
        x += Rk(So() - 1, 7);
        continue;
      case 47:
        switch (Dt()) {
          case 42:
          case 47:
            fo(Dk(Ak(We(), So()), t, r), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * v:
        c[l++] = xt(x) * b;
      case 125 * v:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            (b == -1 && (x = ee(x, /\f/g, "")),
              p > 0 &&
                xt(x) - d &&
                fo(p > 32 ? Vd(x + ";", n, r, d - 1) : Vd(ee(x, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            x += ";";
          default:
            if ((fo((S = Ud(x, t, r, l, u, a, c, w, (k = []), (m = []), d)), o), y === 123))
              if (u === 0) xo(x, t, S, S, k, o, d, c, m);
              else
                switch (f === 99 && Ee(x, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    xo(
                      e,
                      S,
                      S,
                      n && fo(Ud(e, S, S, 0, 0, a, c, w, a, (k = []), d), m),
                      a,
                      m,
                      d,
                      c,
                      n ? k : m,
                    );
                    break;
                  default:
                    xo(x, S, S, S, [""], m, 0, c, m);
                }
        }
        ((l = u = p = 0), (v = b = 1), (w = x = ""), (d = i));
        break;
      case 58:
        ((d = 1 + xt(x)), (p = h));
      default:
        if (v < 1) {
          if (y == 123) --v;
          else if (y == 125 && v++ == 0 && Ck() == 125) continue;
        }
        switch (((x += pi(y)), y * v)) {
          case 38:
            b = u > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            ((c[l++] = (xt(x) - 1) * b), (b = 1));
            break;
          case 64:
            (Dt() === 45 && (x += Eo(We())), (f = Dt()), (u = d = xt((w = x += Ik(So())))), y++);
            break;
          case 45:
            h === 45 && xt(x) == 2 && (v = 0);
        }
    }
  return o;
}
function Ud(e, t, r, n, a, o, i, c, s, l, u) {
  for (var d = a - 1, f = a === 0 ? o : [""], p = kc(f), h = 0, v = 0, g = 0; h < n; ++h)
    for (var b = 0, y = $a(e, d + 1, (d = wk((v = i[h])))), w = e; b < p; ++b)
      (w = ph(v > 0 ? f[b] + " " + y : ee(y, /&\f/g, f[b]))) && (s[g++] = w);
  return gi(e, t, r, a === 0 ? yc : c, s, l, u);
}
function Dk(e, t, r) {
  return gi(e, t, r, fh, pi(xk()), $a(e, 2, -2), 0);
}
function Vd(e, t, r, n) {
  return gi(e, t, r, wc, $a(e, 0, n), $a(e, n + 1, -1), n);
}
function nn(e, t) {
  for (var r = "", n = kc(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function Tk(e, t, r, n) {
  switch (e.type) {
    case yk:
      if (e.children.length) break;
    case mk:
    case wc:
      return (e.return = e.return || e.value);
    case fh:
      return "";
    case vh:
      return (e.return = e.value + "{" + nn(e.children, n) + "}");
    case yc:
      e.value = e.props.join(",");
  }
  return xt((r = nn(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function Mk(e) {
  var t = kc(e);
  return function (r, n, a, o) {
    for (var i = "", c = 0; c < t; c++) i += e[c](r, n, a, o) || "";
    return i;
  };
}
function Fk(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Lk(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var Nk = function (t, r, n) {
    for (var a = 0, o = 0; (a = o), (o = Dt()), a === 38 && o === 12 && (r[n] = 1), !Ba(o); ) We();
    return Ya(t, Ue);
  },
  $k = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (Ba(a)) {
        case 0:
          (a === 38 && Dt() === 12 && (r[n] = 1), (t[n] += Nk(Ue - 1, r, n)));
          break;
        case 2:
          t[n] += Eo(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = Dt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += pi(a);
      }
    while ((a = We()));
    return t;
  },
  Bk = function (t, r) {
    return bh($k(gh(t), r));
  },
  Gd = new WeakMap(),
  zk = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Gd.get(n)) && !a) {
        Gd.set(t, !0);
        for (var o = [], i = Bk(r, o), c = n.props, s = 0, l = 0; s < i.length; s++)
          for (var u = 0; u < c.length; u++, l++)
            t.props[l] = o[s] ? i[s].replace(/&\f/g, c[u]) : c[u] + " " + i[s];
      }
    }
  },
  qk = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function _h(e, t) {
  switch (Ok(e, t)) {
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
      return Q + e + Go + e + Re + e + e;
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
      if (xt(e) - 1 - t > 6)
        switch (Ee(e, t + 1)) {
          case 109:
            if (Ee(e, t + 4) !== 45) break;
          case 102:
            return (
              ee(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Q + "$2-$3$1" + Go + (Ee(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Ws(e, "stretch") ? _h(ee(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ee(e, t + 1) !== 115) break;
    case 6444:
      switch (Ee(e, xt(e) - 3 - (~Ws(e, "!important") && 10))) {
        case 107:
          return ee(e, ":", ":" + Q) + e;
        case 101:
          return (
            ee(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Q +
                (Ee(e, 14) === 45 ? "inline-" : "") +
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
      switch (Ee(e, t + 11)) {
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
var Uk = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case wc:
          t.return = _h(t.value, t.length);
          break;
        case vh:
          return nn([pa(t, { value: ee(t.value, "@", "@" + Q) })], a);
        case yc:
          if (t.length)
            return Ek(t.props, function (o) {
              switch (Sk(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return nn([pa(t, { props: [ee(o, /:(read-\w+)/, ":" + Go + "$1")] })], a);
                case "::placeholder":
                  return nn(
                    [
                      pa(t, { props: [ee(o, /:(plac\w+)/, ":" + Q + "input-$1")] }),
                      pa(t, { props: [ee(o, /:(plac\w+)/, ":" + Go + "$1")] }),
                      pa(t, { props: [ee(o, /:(plac\w+)/, Re + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  Vk = [Uk],
  Gk = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (v) {
        var g = v.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || Vk,
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
      l = [zk, qk];
    {
      var u,
        d = [
          Tk,
          Fk(function (v) {
            u.insert(v);
          }),
        ],
        f = Mk(l.concat(a, d)),
        p = function (g) {
          return nn(jk(g), f);
        };
      s = function (g, b, y, w) {
        ((u = y), p(g ? g + "{" + b.styles + "}" : b.styles), w && (h.inserted[b.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new _k({
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
  hs = { exports: {} },
  ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kd;
function Kk() {
  if (Kd) return ne;
  Kd = 1;
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
var Hd;
function Hk() {
  return (Hd || ((Hd = 1), (hs.exports = Kk())), hs.exports);
}
var gs, Wd;
function Wk() {
  if (Wd) return gs;
  Wd = 1;
  var e = Hk(),
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
          var x = u(v, S);
          try {
            c(h, S, x);
          } catch {}
        }
      }
    }
    return h;
  }
  return ((gs = p), gs);
}
Wk();
var Jk = !0;
function mh(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var Oc = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || Jk === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  yh = function (t, r, n) {
    Oc(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do (t.insert(r === o ? "." + a : "", o, t.sheet, !0), (o = o.next));
      while (o !== void 0);
    }
  };
function Yk(e) {
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
var Xk = {
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
  Zk = /[A-Z]|^ms/g,
  Qk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  wh = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Jd = function (t) {
    return t != null && typeof t != "boolean";
  },
  bs = Lk(function (e) {
    return wh(e) ? e : e.replace(Zk, "-$&").toLowerCase();
  }),
  Yd = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(Qk, function (n, a, o) {
            return ((Ct = { name: a, styles: o, next: Ct }), a);
          });
    }
    return Xk[t] !== 1 && !wh(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function za(e, t, r) {
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
      return e1(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = Ct,
          l = r(e);
        return ((Ct = s), za(e, t, l));
      }
      break;
    }
  }
  var u = r;
  if (t == null) return u;
  var d = t[u];
  return d !== void 0 ? d : u;
}
function e1(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += za(e, t, r[a]) + ";";
  else
    for (var o in r) {
      var i = r[o];
      if (typeof i != "object") {
        var c = i;
        t != null && t[c] !== void 0
          ? (n += o + "{" + t[c] + "}")
          : Jd(c) && (n += bs(o) + ":" + Yd(o, c) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var s = 0; s < i.length; s++) Jd(i[s]) && (n += bs(o) + ":" + Yd(o, i[s]) + ";");
      else {
        var l = za(e, t, i);
        switch (o) {
          case "animation":
          case "animationName": {
            n += bs(o) + ":" + l + ";";
            break;
          }
          default:
            n += o + "{" + l + "}";
        }
      }
    }
  return n;
}
var Xd = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Ct;
function Sc(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  Ct = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) ((n = !1), (a += za(r, t, o)));
  else {
    var i = o;
    a += i[0];
  }
  for (var c = 1; c < e.length; c++)
    if (((a += za(r, t, e[c])), n)) {
      var s = o;
      a += s[c];
    }
  Xd.lastIndex = 0;
  for (var l = "", u; (u = Xd.exec(a)) !== null; ) l += "-" + u[1];
  var d = Yk(a) + l;
  return { name: d, styles: a, next: Ct };
}
var t1 = function (t) {
    return t();
  },
  r1 = qc.useInsertionEffect ? qc.useInsertionEffect : !1,
  kh = r1 || t1,
  Oh = _.createContext(typeof HTMLElement < "u" ? Gk({ key: "css" }) : null);
Oh.Provider;
var Sh = function (t) {
    return _.forwardRef(function (r, n) {
      var a = _.useContext(Oh);
      return t(r, a, n);
    });
  },
  Eh = _.createContext({}),
  Ec = {}.hasOwnProperty,
  Ys = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  n1 = function (t, r) {
    var n = {};
    for (var a in r) Ec.call(r, a) && (n[a] = r[a]);
    return ((n[Ys] = t), n);
  },
  a1 = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      Oc(r, n, a),
      kh(function () {
        return yh(r, n, a);
      }),
      null
    );
  },
  o1 = Sh(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[Ys],
      o = [n],
      i = "";
    typeof e.className == "string"
      ? (i = mh(t.registered, o, e.className))
      : e.className != null && (i = e.className + " ");
    var c = Sc(o, void 0, _.useContext(Eh));
    i += t.key + "-" + c.name;
    var s = {};
    for (var l in e) Ec.call(e, l) && l !== "css" && l !== Ys && (s[l] = e[l]);
    return (
      (s.className = i),
      r && (s.ref = r),
      _.createElement(
        _.Fragment,
        null,
        _.createElement(a1, { cache: t, serialized: c, isStringTag: typeof a == "string" }),
        _.createElement(a, s),
      )
    );
  }),
  i1 = o1,
  Yt = function (t, r) {
    var n = arguments;
    if (r == null || !Ec.call(r, "css")) return _.createElement.apply(void 0, n);
    var a = n.length,
      o = new Array(a);
    ((o[0] = i1), (o[1] = n1(t, r)));
    for (var i = 2; i < a; i++) o[i] = n[i];
    return _.createElement.apply(null, o);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Yt || (Yt = {}));
function Nt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Sc(t);
}
var s1 = function e(t) {
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
function c1(e, t, r) {
  var n = [],
    a = mh(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var l1 = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      kh(function () {
        for (var a = 0; a < n.length; a++) yh(r, n[a], !1);
      }),
      null
    );
  },
  u1 = Sh(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++) l[u] = arguments[u];
        var d = Sc(l, t.registered);
        return (r.push(d), Oc(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++) l[u] = arguments[u];
        return c1(t.registered, n, s1(l));
      },
      o = { css: n, cx: a, theme: _.useContext(Eh) },
      i = e.children(o);
    return _.createElement(
      _.Fragment,
      null,
      _.createElement(l1, { cache: t, serializedArr: r }),
      i,
    );
  });
function xh(e, t) {
  var r = _.useRef(!0);
  _.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Ch = 2,
  Xs = Nt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Ch,
  }),
  Zs = Nt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Ch,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  d1 = Nt({
    "&:focus": Xs,
    "&:focus-visible": Xs,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  f1 = Nt({
    "&:focus": Zs,
    "&:focus-visible": Zs,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Ph = _.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? Zs : Xs,
      o = r ? f1 : d1,
      i = typeof n > "u" ? o : n === "on" && a;
    return Yt(u1, null, function (c) {
      var s = c.css,
        l = c.cx;
      return _.Children.only(
        i ? _.cloneElement(t, { className: l([s(i), t.props.className]) }) : t,
      );
    });
  });
Ph.displayName = "FocusRing";
function Gt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var v1 = 9;
function Zd(e) {
  e.keyCode !== v1 && Gt(e);
}
var p1 = {
    onMouseDownCapture: Gt,
    onMouseUpCapture: Gt,
    onKeyDownCapture: Zd,
    onKeyUpCapture: Zd,
    onTouchStartCapture: Gt,
    onTouchEndCapture: Gt,
    onPointerDownCapture: Gt,
    onPointerUpCapture: Gt,
    onClickCapture: Gt,
    onClick: Gt,
  },
  h1 = {};
function g1(e) {
  var t = e.isInteractive;
  return t ? h1 : p1;
}
var Qd = "rgba(179, 212, 255, 0.6)",
  ef = {
    background: {
      default: {
        default: {
          light: "var(--ds-background-neutral, ".concat(Zn, ")"),
          dark: "var(--ds-background-neutral, ".concat(Qn, ")"),
        },
        hover: {
          light: "var(--ds-background-neutral-hovered, ".concat($u, ")"),
          dark: "var(--ds-background-neutral-hovered, ".concat(Bu, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-pressed, ".concat(Qd, ")"),
          dark: "var(--ds-background-neutral-pressed, ".concat(oo, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Zn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Qn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(nt, ")"),
          dark: "var(--ds-background-selected, ".concat(Ur, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(nt, ")"),
          dark: "var(--ds-background-selected, ".concat(Ur, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-background-brand-bold, ".concat(Ht, ")"),
          dark: "var(--ds-background-brand-bold, ".concat(Fu, ")"),
        },
        hover: {
          light: "var(--ds-background-brand-bold-hovered, ".concat(Nu, ")"),
          dark: "var(--ds-background-brand-bold-hovered, ".concat(oo, ")"),
        },
        active: {
          light: "var(--ds-background-brand-bold-pressed, ".concat(zs, ")"),
          dark: "var(--ds-background-brand-bold-pressed, ".concat(Lu, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Zn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Qn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(nt, ")"),
          dark: "var(--ds-background-selected, ".concat(Ur, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(nt, ")"),
          dark: "var(--ds-background-selected, ".concat(Ur, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-background-warning-bold, ".concat(Mu, ")"),
          dark: "var(--ds-background-warning-bold, ".concat(Mu, ")"),
        },
        hover: {
          light: "var(--ds-background-warning-bold-hovered, ".concat(Tu, ")"),
          dark: "var(--ds-background-warning-bold-hovered, ".concat(Tu, ")"),
        },
        active: {
          light: "var(--ds-background-warning-bold-pressed, ".concat(zr, ")"),
          dark: "var(--ds-background-warning-bold-pressed, ".concat(zr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Zn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Qn, ")"),
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
          light: "var(--ds-background-danger-bold, ".concat(Du, ")"),
          dark: "var(--ds-background-danger-bold, ".concat(Du, ")"),
        },
        hover: {
          light: "var(--ds-background-danger-bold-hovered, ".concat(ju, ")"),
          dark: "var(--ds-background-danger-bold-hovered, ".concat(ju, ")"),
        },
        active: {
          light: "var(--ds-background-danger-bold-pressed, ".concat(Br, ")"),
          dark: "var(--ds-background-danger-bold-pressed, ".concat(Br, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Zn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Qn, ")"),
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
          light: "var(--ds-background-selected, ".concat(nt, ")"),
          dark: "var(--ds-background-selected, ".concat(Ne, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(nt, ")"),
          dark: "var(--ds-background-selected, ".concat(Ne, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        hover: {
          light: "var(--ds-background-neutral-subtle-hovered, ".concat($u, ")"),
          dark: "var(--ds-background-neutral-subtle-hovered, ".concat(Bu, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-subtle-pressed, ".concat(Qd, ")"),
          dark: "var(--ds-background-neutral-subtle-pressed, ".concat(oo, ")"),
        },
        disabled: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(nt, ")"),
          dark: "var(--ds-background-selected, ".concat(Ur, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(nt, ")"),
          dark: "var(--ds-background-selected, ".concat(Ur, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(nt, ")"),
          dark: "var(--ds-background-selected, ".concat(Ne, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(nt, ")"),
          dark: "var(--ds-background-selected, ".concat(Ne, ")"),
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
          light: "var(--ds-text, ".concat(Ht, ")"),
          dark: "var(--ds-text, ".concat(Ht, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(_r, ")"),
          dark: "var(--ds-text-disabled, ".concat(ea, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ne, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ne, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-text-inverse, ".concat(or, ")"),
          dark: "var(--ds-text-inverse, ".concat(ea, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(_r, ")"),
          dark: "var(--ds-text-disabled, ".concat(ea, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ne, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ne, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-text-warning-inverse, ".concat(qr, ")"),
          dark: "var(--ds-text-warning-inverse, ".concat(qr, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(_r, ")"),
          dark: "var(--ds-text-disabled, ".concat(ea, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(qr, ")"),
          dark: "var(--ds-text-selected, ".concat(qr, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(qr, ")"),
          dark: "var(--ds-text-selected, ".concat(qr, ")"),
        },
      },
      danger: {
        default: {
          light: "var(--ds-text-inverse, ".concat(or, ")"),
          dark: "var(--ds-text-inverse, ".concat(or, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(_r, ")"),
          dark: "var(--ds-text-disabled, ".concat(ea, ")"),
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
          light: "var(--ds-link, ".concat(Ht, ")"),
          dark: "var(--ds-link, ".concat(Fu, ")"),
        },
        hover: {
          light: "var(--ds-link, ".concat(Nu, ")"),
          dark: "var(--ds-link, ".concat(oo, ")"),
        },
        active: {
          light: "var(--ds-link-pressed, ".concat(zs, ")"),
          dark: "var(--ds-link-pressed, ".concat(Lu, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(_r, ")"),
          dark: "var(--ds-text-disabled, ".concat(Yi, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ne, ")"),
          dark: "var(--ds-text-selected, ".concat(nt, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ne, ")"),
          dark: "var(--ds-text-selected, ".concat(nt, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-text, ".concat(ln, ")"),
          dark: "var(--ds-text, ".concat(ht, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Ht, ")"),
          dark: "var(--ds-text, ".concat(Ht, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(_r, ")"),
          dark: "var(--ds-text-disabled, ".concat(Yi, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ne, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ne, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-text-subtle, ".concat(Ty, ")"),
          dark: "var(--ds-text-subtle, ".concat(ht, ")"),
        },
        hover: {
          light: "var(--ds-text-subtle, ".concat(Dy, ")"),
          dark: "var(--ds-text-subtle, ".concat(Iy, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(My, ")"),
          dark: "var(--ds-text, ".concat(Fy, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(_r, ")"),
          dark: "var(--ds-text-disabled, ".concat(Yi, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ne, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ne, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
      },
    },
  };
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
function ie(e) {
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
var cr = 8,
  _s = ["default", "primary", "danger", "warning"],
  Qs = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  b1 = { default: Qs.default, compact: Qs.compact, none: "inherit" },
  _1 = {
    default: "0 ".concat(cr + cr / 4, "px"),
    compact: "0 ".concat(cr + cr / 4, "px"),
    none: "0",
  },
  m1 = { compact: "0 ".concat(cr / 4, "px"), default: "0 ".concat(cr / 4, "px"), none: "0" },
  y1 = { default: "middle", compact: "middle", none: "baseline" },
  Rh = { content: "0 ".concat(cr / 4, "px"), icon: "0 ".concat(cr / 4, "px") },
  Ah = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  w1 = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #172B4D)",
    "&::after": ie(ie({}, Ah), {}, { content: '""', borderColor: "var(--ds-border, #091E4224)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #091E4224)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #091E424F)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  k1 = {
    background: "var(--ds-background-brand-bold, #0C66E4)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #0055CC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #09326C)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #0C66E4)",
    },
  },
  O1 = {
    background: "transparent",
    color: "var(--ds-link, #0C66E4)",
    "&:hover": { color: "var(--ds-link, #0C66E4)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #0055CC)", textDecoration: "underline" },
  },
  S1 = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #091E420F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #091E4224)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  E1 = {
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
  x1 = {
    background: "var(--ds-background-warning-bold, #F5CD47)",
    color: "var(--ds-text-warning-inverse, #172B4D)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #E2B203)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #CF9F02)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #F5CD47)",
    },
  },
  C1 = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #5D1F1A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  P1 = {
    background: "var(--ds-background-selected, #E9F2FF)",
    color: "var(--ds-text-selected, #0C66E4)",
    "&:not([disabled])::after": ie(
      ie({}, Ah),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #0C66E4)" },
    ),
  },
  rf = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function nf(e) {
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
    background: nf({ group: ef.background[t], key: r, mode: n }),
    color: "".concat(nf({ group: ef.color[t], key: r, mode: n }), " !important"),
  };
}
function R1(e) {
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
          !ge("platform-component-visual-refresh") && c,
        ),
        {},
        {
          cursor: "pointer",
          height: Qs[r],
          lineHeight: b1[r],
          padding: i ? m1[r] : _1[r],
          verticalAlign: y1[r],
          width: o ? "100%" : "auto",
          justifyContent: "center",
        },
        !ge("platform-component-visual-refresh") &&
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
              rf,
            ),
            {},
            {
              '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active':
                ie({}, Yr({ appearance: t, key: a ? "selected" : "default", mode: n })),
            },
          ),
      ),
      ge("platform-component-visual-refresh") &&
        (a
          ? P1
          : ie(
              ie(
                ie(
                  ie(
                    ie(
                      ie(
                        ie(ie({}, t === "default" && w1), t === "primary" && k1),
                        t === "link" && O1,
                      ),
                      t === "subtle" && S1,
                    ),
                    t === "subtle-link" && E1,
                  ),
                  t === "warning" && x1,
                ),
                t === "danger" && C1,
              ),
              {},
              {
                "&[disabled]": {
                  color: "var(--ds-text-disabled, #091E424F)",
                  backgroundColor: _s.includes(t)
                    ? "var(--ds-background-disabled, #091E4208)"
                    : "transparent",
                  cursor: "not-allowed",
                  textDecoration: "none",
                  "&:hovered": {
                    backgroundColor: _s.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                  "&:active": {
                    backgroundColor: _s.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                },
              },
              rf,
            )),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function af(e) {
  var t = e.spacing;
  return Nt({
    display: "flex",
    margin: t === "none" ? 0 : Rh.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function A1(e) {
  var t = e.spacing;
  return Nt({
    margin: t === "none" ? 0 : Rh.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function I1(e) {
  var t = e.hasOverlay;
  return Nt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var j1 = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  xc = function (t) {
    return t && _.isValidElement(t) && t.type === mc;
  },
  D1 = [
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
  T1 = { "> *": { pointerEvents: "none" } },
  M1 = Nt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  F1 = Nt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  of = function (t, r) {
    return !t || xc(t) ? null : r;
  },
  L1 = function (t, r) {
    return xc(t) ? t : t ? Yt("span", { css: r }, t) : null;
  },
  N1 = O.forwardRef(function (t, r) {
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
      x = S === void 0 ? Ae : S,
      A = t.onFocus,
      D = t.onMouseDown,
      R = D === void 0 ? Ae : D,
      M = t.overlay;
    t.shouldFitContainer;
    var z = t.spacing,
      $ = z === void 0 ? "default" : z,
      U = t.tabIndex,
      q = U === void 0 ? 0 : U,
      V = t.type,
      G = V === void 0 ? (d ? void 0 : "button") : V,
      H = t.testId,
      N = te(t, D1),
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
    xh(j, c);
    var se = _.useContext(vc),
      le = _.useCallback(
        function (ve, Fe) {
          (se && se.tracePress(g, ve.timeStamp), x(ve, Fe));
        },
        [x, se, g],
      ),
      fe = cn({
        fn: le,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      pe = _.useCallback(
        function (ve) {
          (ve.preventDefault(), R(ve));
        },
        [R],
      );
    _.useEffect(
      function () {
        var ve = j.current;
        y && ve && ve === document.activeElement && ve.blur();
      },
      [y],
    );
    var ue = !!M,
      Te = Nt(I1({ hasOverlay: ue })),
      Oe = !y && !ue,
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
      Yt(
        Ph,
        null,
        Yt(
          p,
          Z(
            {},
            N,
            {
              ref: me,
              className: u,
              css: [s, Oe ? null : T1],
              "data-has-overlay": ue ? !0 : void 0,
              "data-testid": H,
              disabled: y,
              href: Oe ? d : void 0,
              onBlur: m,
              onClick: fe,
              onFocus: A,
              onMouseDown: pe,
              tabIndex: y ? -1 : q,
              type: G,
            },
            g1({ isInteractive: Oe }),
          ),
          v ? Yt("span", { css: [Te, af({ spacing: $ }), of(l, M1)] }, v) : null,
          L1(l, [Te, A1({ spacing: $ })]),
          h ? Yt("span", { css: [Te, af({ spacing: $ }), of(l, F1)] }, h) : null,
          M ? Yt("span", { css: [j1, Me] }, M) : null,
        ),
      )
    );
  });
function $1(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return xc(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var B1 = [
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
  sf = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  Cc = O.memo(
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
        y = te(t, B1),
        w = hk(),
        k = w.mode,
        m = $1({ children: o, iconBefore: i, iconAfter: c }),
        S = _.useState(!1),
        x = J(S, 2),
        A = x[0],
        D = x[1],
        R = _.useCallback(
          function ($) {
            (d($), sf && D(!0));
          },
          [d, D],
        ),
        M = _.useCallback(
          function ($) {
            (p($), sf && D(!1));
          },
          [p, D],
        ),
        z = _.useMemo(
          function () {
            return R1({
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
        N1,
        Z({}, y, {
          ref: r,
          appearance: a,
          buttonCss: z,
          children: o,
          "data-firefox-is-active": A ? !0 : void 0,
          iconAfter: c,
          iconBefore: i,
          isSelected: l,
          onMouseDown: R,
          onMouseUp: M,
          spacing: b,
        }),
      );
    }),
  );
Cc.displayName = "Button";
function cf(e) {
  return O.createElement(Cc, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function z1(e) {
  return O.createElement(Cc, Z({}, e, { appearance: "subtle" }));
}
var q1 = { container: "_1e0c1txw _kqswh2mm" };
function U1(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return O.createElement(
    fi,
    { as: "li", testId: r, key: t, xcss: q1.container, paddingInline: "space.100" },
    O.createElement(
      ih,
      { testId: r && "".concat(r, "-text") },
      O.createElement(mc, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var lf = {},
  uf =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function V1(e, t) {
  return !!(e === t || (uf(e) && uf(t)));
}
function G1(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!V1(e[r], t[r])) return !1;
  return !0;
}
function K1(e, t) {
  t === void 0 && (t = G1);
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
var H1 = function (t, r, n, a) {
  var o = n.max,
    i = n.ellipsis,
    c = n.transform,
    s = t.length,
    l = s > o,
    u = l && o - 4 < r,
    d = l && r < s - o + 3,
    f = K1(function () {
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
function df(e, t) {
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
function W1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? df(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : df(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ec = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  J1 = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.14",
  };
function ff(e) {
  var t = e.chevronDirection,
    r = t === "left" ? fw : bw;
  return O.createElement(
    fi,
    { as: "span", xcss: ec.navigatorIconWrapper },
    O.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function Y1(e, t) {
  var r = e.components,
    n = r === void 0 ? lf : r,
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
    g = v === void 0 ? lf : v,
    b = e.max,
    y = b === void 0 ? 7 : b,
    w = e.onChange,
    k = w === void 0 ? Ae : w,
    m = e.pages,
    S = e.getPageLabel,
    x = e.renderEllipsis,
    A = x === void 0 ? U1 : x,
    D = e.analyticsContext,
    R = e.testId,
    M = e.isDisabled,
    z = Jy(i, function () {
      return o || 0;
    }),
    $ = J(z, 2),
    U = $[0],
    q = $[1],
    V = cn(
      W1(
        {
          fn: function (N, j) {
            var me = N.event,
              se = N.selectedPageIndex;
            (i === void 0 && q(se), k && k(me, m[se], j));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: D,
        },
        J1,
      ),
    ),
    G = function (N, j, me) {
      var se = m[U],
        le = "".concat(u, " ").concat(S ? S(N, j) : N),
        fe = N === se;
      return O.createElement(
        ko,
        { as: "li", xcss: ec.paginationMenuItem, key: "page-".concat(S ? S(N, j) : j) },
        O.createElement(
          z1,
          {
            component: n.Page,
            onClick: function (ue) {
              return V({ event: ue, selectedPageIndex: j });
            },
            "aria-current": fe ? "page" : void 0,
            "aria-label": le,
            isSelected: fe,
            isDisabled: M,
            page: N,
            testId:
              me &&
              ""
                .concat(me, "--")
                .concat(fe ? "current-" : "", "page-")
                .concat(j),
          },
          S ? S(N, j) : N,
        ),
      );
    };
  return O.createElement(
    fi,
    { testId: R, style: g, ref: t, "aria-label": s, as: "nav" },
    O.createElement(
      ko,
      { space: "space.0", alignBlock: "center" },
      O.createElement(cf, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (N) {
          return V({ event: N, selectedPageIndex: U - 1 });
        },
        isDisabled: M || U === 0,
        iconBefore: O.createElement(ff, { chevronDirection: "left" }),
        "aria-label": f,
        testId: R && "".concat(R, "--left-navigator"),
      }),
      O.createElement(
        ko,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: ec.paginationMenu },
        H1(m, U, { max: y, ellipsis: A, transform: G }, R),
      ),
      O.createElement(cf, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (N) {
          return V({ event: N, selectedPageIndex: U + 1 });
        },
        isDisabled: M || U === m.length - 1,
        iconBefore: O.createElement(ff, { chevronDirection: "right" }),
        "aria-label": h,
        testId: R && "".concat(R, "--right-navigator"),
      }),
    ),
  );
}
var X1 = _.memo(_.forwardRef(Y1));
function Z1(e, t, r) {
  return (
    (t = X(t)),
    Ze(e, Ih() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Ih() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ih = function () {
    return !!e;
  })();
}
var Q1 = (function (e) {
    function t() {
      var r;
      be(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return (
        (r = Z1(this, t, [].concat(a))),
        C(r, "onChange", function (i, c, s) {
          r.props.onChange(c, s);
        }),
        r
      );
    }
    return (
      Qe(t, e),
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
            return O.createElement(X1, {
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
  eO = ["isRanking", "testId"],
  tO = [
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
function vf(e, t) {
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
function ha(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : vf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var pf = "--local-dynamic-table-text-color",
  rO = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = te(t, eO);
    return _.createElement(
      "thead",
      Z({ "data-testid": n }, a, { className: P(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  nO = _.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      o = e.isFixedSize,
      i = e.shouldTruncate;
    e.onClick;
    var c = e.style,
      s = e.testId,
      l = te(e, tO),
      u = ha(
        ha(ha({}, c), r && Lp({ width: r })),
        {},
        C({}, pf, "var(--ds-text-subtlest, #626F86)"),
      ),
      d = a === Rr,
      f = a === qo,
      p = function () {
        if (d) return "ascending";
        if (f) return "descending";
      },
      h = n ? "th" : "td";
    return _.createElement(
      h,
      Z({ "aria-sort": p(), onClick: void 0, ref: t, "data-testid": s }, l, {
        className: P([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r187z _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbi3bv",
          "_1bsb8a2a",
          o && i && "_1bto1l2s _o5721q9c",
          o && "_1reo15vq _18m915vq",
        ]),
        style: ha(
          ha({}, u),
          {},
          { "--_17ckjys": ir("var(--ds-text-subtle, ".concat("var(".concat(pf, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function aO(e, t, r) {
  return (
    (t = X(t)),
    Ze(e, jh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function jh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (jh = function () {
    return !!e;
  })();
}
function oO(e) {
  return (function (t) {
    function r() {
      var n;
      be(this, r);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return (
        (n = aO(this, r, [].concat(o))),
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
      Qe(r, t),
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
var ga = {},
  hf;
function iO() {
  if (hf) return ga;
  ((hf = 1), Object.defineProperty(ga, "__esModule", { value: !0 }), (ga.default = void 0));
  var e = r(wt()),
    t = r(di);
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
  return ((n.displayName = "ArrowDownIcon"), (ga.default = n), ga);
}
var sO = iO();
const cO = dr(sO);
var ba = {},
  gf;
function lO() {
  if (gf) return ba;
  ((gf = 1), Object.defineProperty(ba, "__esModule", { value: !0 }), (ba.default = void 0));
  var e = r(wt()),
    t = r(di);
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
  return ((n.displayName = "ArrowUpIcon"), (ba.default = n), ba);
}
var uO = lO();
const dO = dr(uO);
var fO = "Escape";
function vO(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = _.useRef(!1),
    a = _.useCallback(
      function (i) {
        r || n.current || i.key !== fO || ((n.current = !0), t(i));
      },
      [t, r],
    ),
    o = _.useCallback(function () {
      n.current = !1;
    }, []);
  _.useEffect(
    function () {
      if (!(r && ge("platform_only_attach_escape_handler_on_view")))
        return vi.bindAll(
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
function _a(e) {
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
var pO = _.createContext(null),
  hO = _.createContext(null);
function gO() {
  var e = _.useContext(hO);
  return e;
}
function bO(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    a = _.useContext(pO),
    o = gO();
  _.useEffect(
    function () {
      if (a !== null && t) return a.onClose(n, { namespace: o, type: r });
    },
    [a, t, o, n, r],
  );
}
var Oa = { none: 0, small: 100, medium: 350, large: 700 },
  ms = 0.5,
  _O = { none: Oa.none, small: Oa.small * ms, medium: Oa.medium * ms, large: Oa.large * ms },
  mO = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  yO = function () {
    if (!mO()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  wO = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  kO = function () {
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
      }, wO(t)),
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
  Dh = { appear: !0, isExiting: !1 },
  Th = _.createContext(Dh),
  bf = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dh;
    return O.createElement(Th.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  _f = function (t) {
    var r = [];
    return (
      _.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  OO = function (t, r) {
    for (var n = r.concat([]), a = SO(r), o = 0; o < t.length; o++) {
      var i = t[o],
        c = !a[i.key];
      c && n.splice(o + 1, 0, i);
    }
    return n;
  },
  SO = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  EO = function (t, r) {
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
  Mh = _.memo(function (e) {
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
      k = _f(y),
      m = _f(w);
    w !== n && s([w, n]);
    var S = EO(m, k),
      x = !!S.size,
      A = m;
    if ((x && (A = OO(m, k)), a))
      if (d.length) A = d;
      else {
        var D = A.filter(function (R) {
          return S.has(R.key);
        });
        D.length && f(D);
      }
    return (
      S.size
        ? (A = A.map(function (R) {
            var M = S.has(R.key);
            return bf(R, {
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
            return bf(R, v);
          })),
      A
    );
  }),
  xO = function () {
    return _.useContext(Th);
  };
Mh.displayName = "ExitingPersistence";
function CO() {
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
var PO = _.createContext(function () {
    return { isReady: !0, delay: 0, ref: Ae };
  }),
  RO = function () {
    var t = CO(),
      r = _.useContext(PO);
    return r(t);
  },
  AO = function (t) {
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
      p = RO(),
      h = xO(),
      v = h.isExiting,
      g = h.onFinish,
      b = h.appear,
      y = kO(),
      w = l || !p.isReady,
      k = v ? 0 : p.delay,
      m = v ? "exiting" : "entering",
      S = _.useState(b),
      x = J(S, 2),
      A = x[0],
      D = x[1];
    return (
      _.useEffect(
        function () {
          var R = !1;
          if (!w) {
            if (!b) {
              u && u(m);
              return;
            }
            var M = function () {
              (m === "exiting" && g?.(), R || D(!1), u?.(m));
            };
            if (yO()) {
              M();
              return;
            }
            return (
              D(!0),
              y(M, v ? _O[f] : Oa[f] + k),
              function () {
                R = !0;
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
        m,
      )
    );
  },
  IO = { top: "bottom", bottom: "top", left: "right", right: "left" },
  jO = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      o = t.entranceDirection,
      i = t.exitDirection,
      c = t.distance,
      s = c === void 0 ? "proportional" : c,
      l = t.onFinish,
      u = t.isPaused,
      d = o !== void 0 ? IO[o] : void 0,
      f =
        i || d
          ? "fade-out-from-".concat(i || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return O.createElement(
      AO,
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
  DO = _.createContext();
_.createContext();
var TO = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  MO = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  FO = function (t, r) {
    if (typeof t == "function") return MO(t, r);
    t != null && (t.current = r);
  },
  mf = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        o = n[1];
      return ((r[a] = o), r);
    }, {});
  },
  yf =
    typeof window < "u" && window.document && window.document.createElement
      ? _.useLayoutEffect
      : _.useEffect,
  Be = "top",
  dt = "bottom",
  ft = "right",
  ze = "left",
  Pc = "auto",
  Xa = [Be, dt, ft, ze],
  dn = "start",
  qa = "end",
  LO = "clippingParents",
  Fh = "viewport",
  ma = "popper",
  NO = "reference",
  wf = Xa.reduce(function (e, t) {
    return e.concat([t + "-" + dn, t + "-" + qa]);
  }, []),
  Lh = [].concat(Xa, [Pc]).reduce(function (e, t) {
    return e.concat([t, t + "-" + dn, t + "-" + qa]);
  }, []),
  $O = "beforeRead",
  BO = "read",
  zO = "afterRead",
  qO = "beforeMain",
  UO = "main",
  VO = "afterMain",
  GO = "beforeWrite",
  KO = "write",
  HO = "afterWrite",
  WO = [$O, BO, zO, qO, UO, VO, GO, KO, HO];
function Lt(e) {
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
function ut(e) {
  var t = Je(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Rc(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Je(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function JO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      o = t.elements[r];
    !ut(o) ||
      !Lt(o) ||
      (Object.assign(o.style, n),
      Object.keys(a).forEach(function (i) {
        var c = a[i];
        c === !1 ? o.removeAttribute(i) : o.setAttribute(i, c === !0 ? "" : c);
      }));
  });
}
function YO(e) {
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
        !ut(a) ||
          !Lt(a) ||
          (Object.assign(a.style, c),
          Object.keys(o).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const XO = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: JO,
  effect: YO,
  requires: ["computeStyles"],
};
function Tt(e) {
  return e.split("-")[0];
}
var Sr = Math.max,
  Ko = Math.min,
  fn = Math.round;
function tc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Nh() {
  return !/^((?!chrome|android).)*safari/i.test(tc());
}
function vn(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    o = 1;
  t &&
    ut(e) &&
    ((a = (e.offsetWidth > 0 && fn(n.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && fn(n.height) / e.offsetHeight) || 1));
  var i = Ar(e) ? Je(e) : window,
    c = i.visualViewport,
    s = !Nh() && r,
    l = (n.left + (s && c ? c.offsetLeft : 0)) / a,
    u = (n.top + (s && c ? c.offsetTop : 0)) / o,
    d = n.width / a,
    f = n.height / o;
  return { width: d, height: f, top: u, right: l + d, bottom: u + f, left: l, x: l, y: u };
}
function Ac(e) {
  var t = vn(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function $h(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Rc(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Qt(e) {
  return Je(e).getComputedStyle(e);
}
function ZO(e) {
  return ["table", "td", "th"].indexOf(Lt(e)) >= 0;
}
function vr(e) {
  return ((Ar(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function bi(e) {
  return Lt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Rc(e) ? e.host : null) || vr(e);
}
function kf(e) {
  return !ut(e) || Qt(e).position === "fixed" ? null : e.offsetParent;
}
function QO(e) {
  var t = /firefox/i.test(tc()),
    r = /Trident/i.test(tc());
  if (r && ut(e)) {
    var n = Qt(e);
    if (n.position === "fixed") return null;
  }
  var a = bi(e);
  for (Rc(a) && (a = a.host); ut(a) && ["html", "body"].indexOf(Lt(a)) < 0; ) {
    var o = Qt(a);
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
function Za(e) {
  for (var t = Je(e), r = kf(e); r && ZO(r) && Qt(r).position === "static"; ) r = kf(r);
  return r && (Lt(r) === "html" || (Lt(r) === "body" && Qt(r).position === "static"))
    ? t
    : r || QO(e) || t;
}
function Ic(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ra(e, t, r) {
  return Sr(e, Ko(t, r));
}
function eS(e, t, r) {
  var n = Ra(e, t, r);
  return n > r ? r : n;
}
function Bh() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function zh(e) {
  return Object.assign({}, Bh(), e);
}
function qh(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var tS = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    zh(typeof t != "number" ? t : qh(t, Xa))
  );
};
function rS(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    o = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    c = Tt(r.placement),
    s = Ic(c),
    l = [ze, ft].indexOf(c) >= 0,
    u = l ? "height" : "width";
  if (!(!o || !i)) {
    var d = tS(a.padding, r),
      f = Ac(o),
      p = s === "y" ? Be : ze,
      h = s === "y" ? dt : ft,
      v = r.rects.reference[u] + r.rects.reference[s] - i[s] - r.rects.popper[u],
      g = i[s] - r.rects.reference[s],
      b = Za(o),
      y = b ? (s === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      w = v / 2 - g / 2,
      k = d[p],
      m = y - f[u] - d[h],
      S = y / 2 - f[u] / 2 + w,
      x = Ra(k, S, m),
      A = s;
    r.modifiersData[n] = ((t = {}), (t[A] = x), (t.centerOffset = x - S), t);
  }
}
function nS(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      ($h(t.elements.popper, a) && (t.elements.arrow = a)));
}
const aS = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: rS,
  effect: nS,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function pn(e) {
  return e.split("-")[1];
}
var oS = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function iS(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: fn(r * a) / a || 0, y: fn(n * a) / a || 0 };
}
function Of(e) {
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
    var S = Za(r),
      x = "clientHeight",
      A = "clientWidth";
    if (
      (S === Je(r) &&
        ((S = vr(r)),
        Qt(S).position !== "static" &&
          c === "absolute" &&
          ((x = "scrollHeight"), (A = "scrollWidth"))),
      (S = S),
      a === Be || ((a === ze || a === ft) && o === qa))
    ) {
      k = dt;
      var D = d && S === m && m.visualViewport ? m.visualViewport.height : S[x];
      ((v -= D - n.height), (v *= s ? 1 : -1));
    }
    if (a === ze || ((a === Be || a === dt) && o === qa)) {
      w = ft;
      var R = d && S === m && m.visualViewport ? m.visualViewport.width : S[A];
      ((p -= R - n.width), (p *= s ? 1 : -1));
    }
  }
  var M = Object.assign({ position: c }, l && oS),
    z = u === !0 ? iS({ x: p, y: v }, Je(r)) : { x: p, y: v };
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
function sS(e) {
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
      Of(
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
        Of(
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
const cS = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: sS, data: {} };
var vo = { passive: !0 };
function lS(e) {
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
        u.addEventListener("scroll", r.update, vo);
      }),
    c && s.addEventListener("resize", r.update, vo),
    function () {
      (o &&
        l.forEach(function (u) {
          u.removeEventListener("scroll", r.update, vo);
        }),
        c && s.removeEventListener("resize", r.update, vo));
    }
  );
}
const uS = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: lS,
  data: {},
};
var dS = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Co(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return dS[t];
  });
}
var fS = { start: "end", end: "start" };
function Sf(e) {
  return e.replace(/start|end/g, function (t) {
    return fS[t];
  });
}
function jc(e) {
  var t = Je(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Dc(e) {
  return vn(vr(e)).left + jc(e).scrollLeft;
}
function vS(e, t) {
  var r = Je(e),
    n = vr(e),
    a = r.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    c = 0,
    s = 0;
  if (a) {
    ((o = a.width), (i = a.height));
    var l = Nh();
    (l || (!l && t === "fixed")) && ((c = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: o, height: i, x: c + Dc(e), y: s };
}
function pS(e) {
  var t,
    r = vr(e),
    n = jc(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = Sr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    i = Sr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    c = -n.scrollLeft + Dc(e),
    s = -n.scrollTop;
  return (
    Qt(a || r).direction === "rtl" && (c += Sr(r.clientWidth, a ? a.clientWidth : 0) - o),
    { width: o, height: i, x: c, y: s }
  );
}
function Tc(e) {
  var t = Qt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Uh(e) {
  return ["html", "body", "#document"].indexOf(Lt(e)) >= 0
    ? e.ownerDocument.body
    : ut(e) && Tc(e)
      ? e
      : Uh(bi(e));
}
function Aa(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Uh(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = Je(n),
    i = a ? [o].concat(o.visualViewport || [], Tc(n) ? n : []) : n,
    c = t.concat(i);
  return a ? c : c.concat(Aa(bi(i)));
}
function rc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function hS(e, t) {
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
function Ef(e, t, r) {
  return t === Fh ? rc(vS(e, r)) : Ar(t) ? hS(t, r) : rc(pS(vr(e)));
}
function gS(e) {
  var t = Aa(bi(e)),
    r = ["absolute", "fixed"].indexOf(Qt(e).position) >= 0,
    n = r && ut(e) ? Za(e) : e;
  return Ar(n)
    ? t.filter(function (a) {
        return Ar(a) && $h(a, n) && Lt(a) !== "body";
      })
    : [];
}
function bS(e, t, r, n) {
  var a = t === "clippingParents" ? gS(e) : [].concat(t),
    o = [].concat(a, [r]),
    i = o[0],
    c = o.reduce(
      function (s, l) {
        var u = Ef(e, l, n);
        return (
          (s.top = Sr(u.top, s.top)),
          (s.right = Ko(u.right, s.right)),
          (s.bottom = Ko(u.bottom, s.bottom)),
          (s.left = Sr(u.left, s.left)),
          s
        );
      },
      Ef(e, i, n),
    );
  return (
    (c.width = c.right - c.left),
    (c.height = c.bottom - c.top),
    (c.x = c.left),
    (c.y = c.top),
    c
  );
}
function Vh(e) {
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
    case dt:
      s = { x: i, y: t.y + t.height };
      break;
    case ft:
      s = { x: t.x + t.width, y: c };
      break;
    case ze:
      s = { x: t.x - r.width, y: c };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var l = a ? Ic(a) : null;
  if (l != null) {
    var u = l === "y" ? "height" : "width";
    switch (o) {
      case dn:
        s[l] = s[l] - (t[u] / 2 - r[u] / 2);
        break;
      case qa:
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
    s = c === void 0 ? LO : c,
    l = r.rootBoundary,
    u = l === void 0 ? Fh : l,
    d = r.elementContext,
    f = d === void 0 ? ma : d,
    p = r.altBoundary,
    h = p === void 0 ? !1 : p,
    v = r.padding,
    g = v === void 0 ? 0 : v,
    b = zh(typeof g != "number" ? g : qh(g, Xa)),
    y = f === ma ? NO : ma,
    w = e.rects.popper,
    k = e.elements[h ? y : f],
    m = bS(Ar(k) ? k : k.contextElement || vr(e.elements.popper), s, u, i),
    S = vn(e.elements.reference),
    x = Vh({ reference: S, element: w, placement: a }),
    A = rc(Object.assign({}, w, x)),
    D = f === ma ? A : S,
    R = {
      top: m.top - D.top + b.top,
      bottom: D.bottom - m.bottom + b.bottom,
      left: m.left - D.left + b.left,
      right: D.right - m.right + b.right,
    },
    M = e.modifiersData.offset;
  if (f === ma && M) {
    var z = M[a];
    Object.keys(R).forEach(function ($) {
      var U = [ft, dt].indexOf($) >= 0 ? 1 : -1,
        q = [Be, dt].indexOf($) >= 0 ? "y" : "x";
      R[$] += z[q] * U;
    });
  }
  return R;
}
function _S(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    o = r.rootBoundary,
    i = r.padding,
    c = r.flipVariations,
    s = r.allowedAutoPlacements,
    l = s === void 0 ? Lh : s,
    u = pn(n),
    d = u
      ? c
        ? wf
        : wf.filter(function (h) {
            return pn(h) === u;
          })
      : Xa,
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
function mS(e) {
  if (Tt(e) === Pc) return [];
  var t = Co(e);
  return [Sf(e), t, Sf(t)];
}
function yS(e) {
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
        w = s || (y || !h ? [Co(g)] : mS(g)),
        k = [g].concat(w).reduce(function (fe, pe) {
          return fe.concat(
            Tt(pe) === Pc
              ? _S(t, {
                  placement: pe,
                  boundary: u,
                  rootBoundary: d,
                  padding: l,
                  flipVariations: h,
                  allowedAutoPlacements: v,
                })
              : pe,
          );
        }, []),
        m = t.rects.reference,
        S = t.rects.popper,
        x = new Map(),
        A = !0,
        D = k[0],
        R = 0;
      R < k.length;
      R++
    ) {
      var M = k[R],
        z = Tt(M),
        $ = pn(M) === dn,
        U = [Be, dt].indexOf(z) >= 0,
        q = U ? "width" : "height",
        V = Ua(t, { placement: M, boundary: u, rootBoundary: d, altBoundary: f, padding: l }),
        G = U ? ($ ? ft : ze) : $ ? dt : Be;
      m[q] > S[q] && (G = Co(G));
      var H = Co(G),
        N = [];
      if (
        (o && N.push(V[z] <= 0),
        c && N.push(V[G] <= 0, V[H] <= 0),
        N.every(function (fe) {
          return fe;
        }))
      ) {
        ((D = M), (A = !1));
        break;
      }
      x.set(M, N);
    }
    if (A)
      for (
        var j = h ? 3 : 1,
          me = function (pe) {
            var ue = k.find(function (Te) {
              var Oe = x.get(Te);
              if (Oe)
                return Oe.slice(0, pe).every(function (Me) {
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
const wS = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: yS,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function xf(e, t, r) {
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
function Cf(e) {
  return [Be, ft, dt, ze].some(function (t) {
    return e[t] >= 0;
  });
}
function kS(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    i = Ua(t, { elementContext: "reference" }),
    c = Ua(t, { altBoundary: !0 }),
    s = xf(i, n),
    l = xf(c, a, o),
    u = Cf(s),
    d = Cf(l);
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
const OS = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: kS,
};
function SS(e, t, r) {
  var n = Tt(e),
    a = [ze, Be].indexOf(n) >= 0 ? -1 : 1,
    o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = o[0],
    c = o[1];
  return (
    (i = i || 0),
    (c = (c || 0) * a),
    [ze, ft].indexOf(n) >= 0 ? { x: c, y: i } : { x: i, y: c }
  );
}
function ES(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    o = a === void 0 ? [0, 0] : a,
    i = Lh.reduce(function (u, d) {
      return ((u[d] = SS(d, t.rects, o)), u);
    }, {}),
    c = i[t.placement],
    s = c.x,
    l = c.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += l)),
    (t.modifiersData[n] = i));
}
const xS = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: ES };
function CS(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Vh({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const PS = { name: "popperOffsets", enabled: !0, phase: "read", fn: CS, data: {} };
function RS(e) {
  return e === "x" ? "y" : "x";
}
function AS(e) {
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
    k = Ic(b),
    m = RS(k),
    S = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    A = t.rects.popper,
    D = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v,
    R =
      typeof D == "number"
        ? { mainAxis: D, altAxis: D }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
    M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    z = { x: 0, y: 0 };
  if (S) {
    if (o) {
      var $,
        U = k === "y" ? Be : ze,
        q = k === "y" ? dt : ft,
        V = k === "y" ? "height" : "width",
        G = S[k],
        H = G + g[U],
        N = G - g[q],
        j = p ? -A[V] / 2 : 0,
        me = y === dn ? x[V] : A[V],
        se = y === dn ? -A[V] : -x[V],
        le = t.elements.arrow,
        fe = p && le ? Ac(le) : { width: 0, height: 0 },
        pe = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Bh(),
        ue = pe[U],
        Te = pe[q],
        Oe = Ra(0, x[V], fe[V]),
        Me = w ? x[V] / 2 - j - Oe - ue - R.mainAxis : me - Oe - ue - R.mainAxis,
        ve = w ? -x[V] / 2 + j + Oe + Te + R.mainAxis : se + Oe + Te + R.mainAxis,
        Fe = t.elements.arrow && Za(t.elements.arrow),
        tr = Fe ? (k === "y" ? Fe.clientTop || 0 : Fe.clientLeft || 0) : 0,
        vt = ($ = M?.[k]) != null ? $ : 0,
        Ce = G + Me - vt - tr,
        Pe = G + ve - vt,
        Ot = Ra(p ? Ko(H, Ce) : H, G, p ? Sr(N, Pe) : N);
      ((S[k] = Ot), (z[k] = Ot - G));
    }
    if (c) {
      var et,
        Ve = k === "x" ? Be : ze,
        Le = k === "x" ? dt : ft,
        Ie = S[m],
        re = m === "y" ? "height" : "width",
        Se = Ie + g[Ve],
        je = Ie - g[Le],
        St = [Be, ze].indexOf(b) !== -1,
        Mr = (et = M?.[m]) != null ? et : 0,
        de = St ? Se : Ie - x[re] - A[re] - Mr + R.altAxis,
        rr = St ? Ie + x[re] + A[re] - Mr - R.altAxis : je,
        tt = p && St ? eS(de, Ie, rr) : Ra(p ? de : Se, Ie, p ? rr : je);
      ((S[m] = tt), (z[m] = tt - Ie));
    }
    t.modifiersData[n] = z;
  }
}
const IS = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: AS,
  requiresIfExists: ["offset"],
};
function jS(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function DS(e) {
  return e === Je(e) || !ut(e) ? jc(e) : jS(e);
}
function TS(e) {
  var t = e.getBoundingClientRect(),
    r = fn(t.width) / e.offsetWidth || 1,
    n = fn(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function MS(e, t, r) {
  r === void 0 && (r = !1);
  var n = ut(t),
    a = ut(t) && TS(t),
    o = vr(t),
    i = vn(e, a, r),
    c = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Lt(t) !== "body" || Tc(o)) && (c = DS(t)),
      ut(t) ? ((s = vn(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : o && (s.x = Dc(o))),
    {
      x: i.left + c.scrollLeft - s.x,
      y: i.top + c.scrollTop - s.y,
      width: i.width,
      height: i.height,
    }
  );
}
function FS(e) {
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
function LS(e) {
  var t = FS(e);
  return WO.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function NS(e) {
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
function $S(e) {
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
var Pf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Rf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function BS(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    o = a === void 0 ? Pf : a;
  return function (c, s, l) {
    l === void 0 && (l = o);
    var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Pf, o),
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
              reference: Ar(c) ? Aa(c) : c.contextElement ? Aa(c.contextElement) : [],
              popper: Aa(s),
            }));
          var w = LS($S([].concat(n, u.options.modifiers)));
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
            if (Rf(y, w)) {
              ((u.rects = {
                reference: MS(y, Za(w), u.options.strategy === "fixed"),
                popper: Ac(w),
              }),
                (u.reset = !1),
                (u.placement = u.options.placement),
                u.orderedModifiers.forEach(function (R) {
                  return (u.modifiersData[R.name] = Object.assign({}, R.data));
                }));
              for (var k = 0; k < u.orderedModifiers.length; k++) {
                if (u.reset === !0) {
                  ((u.reset = !1), (k = -1));
                  continue;
                }
                var m = u.orderedModifiers[k],
                  S = m.fn,
                  x = m.options,
                  A = x === void 0 ? {} : x,
                  D = m.name;
                typeof S == "function" &&
                  (u = S({ state: u, options: A, name: D, instance: p }) || u);
              }
            }
          }
        },
        update: NS(function () {
          return new Promise(function (g) {
            (p.forceUpdate(), g(u));
          });
        }),
        destroy: function () {
          (v(), (f = !0));
        },
      };
    if (!Rf(c, s)) return p;
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
var zS = [uS, PS, cS, XO, xS, wS, IS, aS, OS],
  qS = BS({ defaultModifiers: zS }),
  ys,
  Af;
function US() {
  if (Af) return ys;
  Af = 1;
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
    (ys = function (i, c) {
      try {
        return a(i, c);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    ys
  );
}
var VS = US();
const GS = dr(VS);
var KS = [],
  HS = function (t, r, n) {
    n === void 0 && (n = {});
    var a = _.useRef(null),
      o = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || KS,
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
            Ho.flushSync(function () {
              s({
                styles: mf(
                  v.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: mf(
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
          return GS(a.current, f) ? a.current || f : ((a.current = f), f);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, l],
      ),
      d = _.useRef();
    return (
      yf(
        function () {
          d.current && d.current.setOptions(u);
        },
        [u],
      ),
      yf(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || qS,
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
  WS = function () {},
  JS = function () {
    return Promise.resolve(null);
  },
  YS = [];
function XS(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    o = e.modifiers,
    i = o === void 0 ? YS : o,
    c = e.referenceElement,
    s = e.onFirstUpdate,
    l = e.innerRef,
    u = e.children,
    d = _.useContext(DO),
    f = _.useState(null),
    p = f[0],
    h = f[1],
    v = _.useState(null),
    g = v[0],
    b = v[1];
  _.useEffect(
    function () {
      FO(l, p);
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
    w = HS(c || d, p, y),
    k = w.state,
    m = w.styles,
    S = w.forceUpdate,
    x = w.update,
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
          forceUpdate: S || WS,
          update: x || JS,
        };
      },
      [h, b, r, k, m, x, S],
    );
  return TO(u)(A);
}
function ZS(e) {
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
var nc = 5,
  QS = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: nc,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function eE() {
  return null;
}
var tE = [0, 8];
function rE(e) {
  var t = e.children,
    r = t === void 0 ? eE : t,
    n = e.offset,
    a = n === void 0 ? tE : n,
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
            options: { padding: nc, rootBoundary: p ? "viewport" : "document" },
          },
          k = { name: "offset", options: { offset: [v, g] } },
          m = p ? ZS({ viewportPadding: nc }) : [];
        return [].concat(QS, [w, k], Ge(m));
      },
      [v, g, p],
    ),
    y = _.useMemo(
      function () {
        return l == null ? b : [].concat(Ge(b), Ge(l));
      },
      [b, l],
    );
  return O.createElement(XS, { modifiers: y, placement: i, strategy: d, referenceElement: s }, r);
}
var Gh = "atlaskit-portal-container",
  Kh = "body > .atlaskit-portal-container",
  Hh = "atlaskit-portal",
  nE = function (t) {
    var r = document.createElement("div");
    return ((r.className = Hh), (r.style.zIndex = "".concat(t)), r);
  },
  Wh = function () {
    return document.body;
  },
  Jh = function () {
    var t = document.querySelector(Kh);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = Gh),
        (n.style.display = "flex"),
        (r = Wh()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  aE = function (t) {
    Jh().removeChild(t);
  },
  oE = function (t) {
    t.parentElement || Jh().appendChild(t);
  },
  Yh = function () {
    return document !== void 0;
  },
  iE = function (t) {
    if (Yh()) {
      var r = document.createElement("div");
      return ((r.className = Hh), (r.style.zIndex = "".concat(t)), r);
    }
  },
  sE = function () {
    if (Yh()) {
      var t = document.querySelector(Kh);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = Gh),
          (n.style.display = "flex"),
          (r = Wh()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function cE(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useMemo(
      function () {
        return nE(t);
      },
      [t],
    );
  return (
    oE(n),
    _.useEffect(
      function () {
        return function () {
          aE(n);
        };
      },
      [n],
    ),
    Ho.createPortal(r, n)
  );
}
var Xh = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function lE(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useState(null),
    a = J(n, 2),
    o = a[0],
    i = a[1];
  Xh(
    function () {
      var s = iE(t);
      i(s);
      var l = sE();
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
  return o ? Ho.createPortal(c, o) : null;
}
var uE = function (t) {
    var r = _.useState(!1),
      n = J(r, 2),
      a = n[0],
      o = n[1],
      i = _.useState(function () {
        return t === "layoutEffect" ? Xh : _.useEffect;
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
  dE = "akPortalMount",
  fE = "akPortalUnmount",
  If = {
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
  vE = function (t) {
    return If.hasOwnProperty(t) ? If[t] : null;
  },
  pE = function (t, r) {
    var n = { layer: vE(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function jf(e, t) {
  var r = pE(e, t);
  window.dispatchEvent(r);
}
var hE = function (t) {
  var r = Number(t);
  _.useEffect(
    function () {
      return (
        jf(dE, r),
        function () {
          jf(fE, r);
        }
      );
    },
    [r],
  );
};
function gE(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    o = a === void 0 ? "effect" : a,
    i = uE(o);
  return (
    hE(r),
    ge("platform_design_system_team_portal_logic_r18_fix")
      ? O.createElement(lE, { zIndex: r }, n)
      : i
        ? O.createElement(cE, { zIndex: r }, n)
        : null
  );
}
var Ia = new Set(),
  Va = null;
function Df() {
  if (!Va) {
    Va = vi.bindAll(window, [
      { type: "dragend", listener: ws },
      { type: "pointerdown", listener: ws },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            ws();
          };
        })(),
      },
    ]);
    var e = Array.from(Ia);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function ws() {
  var e;
  ((e = Va) === null || e === void 0 || e(), (Va = null));
  var t = Array.from(Ia);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function bE() {
  return vi.bindAll(window, [
    { type: "dragstart", listener: Df },
    { type: "dragenter", listener: Df },
  ]);
}
var po = null;
function _E(e) {
  return (
    po || (po = bE()),
    Ia.add(e),
    e.onRegister({ isDragging: Va !== null }),
    function () {
      if ((Ia.delete(e), Ia.size === 0)) {
        var r;
        ((r = po) === null || r === void 0 || r(), (po = null));
      }
    }
  );
}
var ja = null;
function Sa() {
  ja != null && (window.clearTimeout(ja), (ja = null));
}
function Tf(e, t) {
  (Sa(),
    (ja = window.setTimeout(function () {
      ((ja = null), e());
    }, t)));
}
var Et = null;
function mE(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(Et && Et.entry === e);
  }
  function n() {
    r() && (Sa(), (Et = null));
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
        ((t = "shown"), Sa());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), Sa(), e.show({ isImmediate: !1 }));
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
          Tf(function () {
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
    var p = !!(Et && Et.isVisible());
    (Et && (Sa(), Et.entry.hide({ isImmediate: !0 }), Et.entry.done(), (Et = null)),
      (Et = { entry: e, isVisible: l }));
    function h() {
      ((t = "shown"), e.show({ isImmediate: p }));
    }
    if (p) {
      h();
      return;
    }
    ((t = "waiting-to-show"), Tf(h, e.delay));
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
function yE(e, t) {
  var r = uk();
  return t ? "".concat(r(e)) : void 0;
}
var Mf = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81u0j _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d7jlr _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  wE = function (t) {
    var r = t.shortcut;
    return _.createElement(
      "div",
      { className: P([Mf.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return _.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: P([Mf.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  Zh = _.forwardRef(function (t, r) {
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
          className: P(["_80om73ad", a]),
          onMouseOut: s,
          onMouseOver: l,
          "data-placement": i,
          "data-testid": c,
          id: u,
        },
        o,
        d && ge("platform-dst-tooltip-shortcuts") && _.createElement(wE, { shortcut: d }),
      ),
    );
  });
Zh.displayName = "TooltipPrimitive";
var ks = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _85i5v77o _1q51v77o _y4ti12x7 _bozg12x7 _slp31hna",
    baseRefreshedPadding: "_1q511b66 _85i51b66",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  Qh = _.forwardRef(function (t, r) {
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
      Zh,
      {
        ref: r,
        style: n,
        className: P([
          ks.base,
          ge("platform-dst-tooltip-shortcuts") && ks.baseRefreshedPadding,
          i && ks.truncate,
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
Qh.displayName = "TooltipContainer";
function Ff(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function Lf(e, t) {
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
      ? Lf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Lf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var kE = dk.tooltip(),
  Nf = { componentName: "tooltip", packageName: "@atlaskit/tooltip", packageVersion: "20.7.0" },
  OE = { top: "bottom", bottom: "top", left: "right", right: "left" },
  SE = function (t) {
    return t.split("-")[0];
  };
function EE(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    o = a === void 0 ? "bottom" : a,
    i = e.content,
    c = e.truncate,
    s = c === void 0 ? !1 : c,
    l = e.component,
    u = l === void 0 ? Qh : l,
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
    x = e.hideTooltipOnMouseDown,
    A = x === void 0 ? !1 : x,
    D = e.analyticsContext,
    R = e.strategy,
    M = R === void 0 ? "fixed" : R,
    z = e.ignoreTooltipPointerEvents,
    $ = z === void 0 ? !1 : z,
    U = e.isScreenReaderAnnouncementDisabled,
    q = U === void 0 ? !1 : U,
    V = e.shortcut,
    G = n === "mouse" ? o : n,
    H = Pu(Xr({ fn: b, action: "displayed", analyticsData: D }, Nf)),
    N = Pu(Xr({ fn: w, action: "hidden", analyticsData: D }, Nf)),
    j = _.useRef(null),
    me = _.useState("hide"),
    se = J(me, 2),
    le = se[0],
    fe = se[1],
    pe = _.useRef(null),
    ue = _.useRef(null),
    Te = function (oe) {
      ((ue.current = oe), (pe.current = oe ? oe.firstElementChild : null));
    },
    Oe = _.useCallback(function (F) {
      pe.current = F;
    }, []),
    Me = _a(le),
    ve = _a(H),
    Fe = _a(N),
    tr = _a(v),
    vt = _a(k),
    Ce = _.useRef(!1),
    Pe = _.useCallback(function (F) {
      ((j.current = F), (Ce.current = !1));
    }, []),
    Ot = _.useCallback(
      function () {
        j.current &&
          (Ce.current && Fe.current(), (j.current = null), (Ce.current = !1), fe("hide"));
      },
      [Fe],
    ),
    et = _.useCallback(
      function () {
        j.current && (j.current.abort(), Ce.current && Fe.current(), (j.current = null));
      },
      [Fe],
    );
  _.useEffect(
    function () {
      return function () {
        j.current && et();
      };
    },
    [et],
  );
  var Ve = _.useRef(!1);
  _.useEffect(function () {
    return _E({
      onRegister: function (oe) {
        var Bt = oe.isDragging;
        Ve.current = Bt;
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
  var Le = _.useCallback(
      function (F) {
        var oe;
        if (!Ve.current) {
          if ((j.current && !j.current.isActive() && et(), j.current && j.current.isActive())) {
            j.current.keep();
            return;
          }
          if (!(vt.current && !((oe = vt.current) !== null && oe !== void 0 && oe.call(vt)))) {
            var Bt = {
                source: F,
                delay: tr.current,
                show: function (Fr) {
                  var yn = Fr.isImmediate;
                  (Ce.current || ((Ce.current = !0), ve.current()),
                    fe(yn ? "show-immediate" : "fade-in"));
                },
                hide: function (Fr) {
                  var yn = Fr.isImmediate;
                  fe(yn ? "hide" : "before-fade-out");
                },
                done: Ot,
              },
              mi = mE(Bt);
            Pe(mi);
          }
        }
      },
      [vt, tr, Ot, Pe, et, ve],
    ),
    Ie = _.useCallback(
      function () {
        var F;
        (F = j.current) === null || F === void 0 || F.requestHide({ isImmediate: !0 });
      },
      [j],
    );
  (vO({ onClose: Ie, isDisabled: le === "hide" || le === "fade-out" }),
    _.useEffect(
      function () {
        if (le === "hide") return Ae;
        le === "before-fade-out" && fe("fade-out");
        var F = vi.bind(window, {
          type: "scroll",
          listener: function () {
            j.current && j.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return F;
      },
      [le],
    ));
  var re = _.useCallback(
      function () {
        A && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [A],
    ),
    Se = _.useCallback(
      function () {
        S && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    je = _.useCallback(
      function (F) {
        if (!(ue.current && F.target === ue.current) && !F.defaultPrevented) {
          F.preventDefault();
          var oe =
            n === "mouse"
              ? { type: "mouse", mouse: Ff({ left: F.clientX, top: F.clientY }) }
              : { type: "keyboard" };
          Le(oe);
        }
      },
      [n, Le],
    ),
    St = _.useCallback(function (F) {
      (ue.current && F.target === ue.current) ||
        F.defaultPrevented ||
        (F.preventDefault(), j.current && j.current.requestHide({ isImmediate: !1 }));
    }, []),
    Mr =
      n === "mouse"
        ? function (F) {
            var oe;
            (oe = j.current) !== null &&
              oe !== void 0 &&
              oe.isActive() &&
              (j.current.mousePosition = Ff({ left: F.clientX, top: F.clientY }));
          }
        : void 0,
    de = _.useCallback(function () {
      if (j.current && j.current.isActive()) {
        j.current.keep();
        return;
      }
    }, []),
    rr = _.useCallback(
      function (F) {
        try {
          if (!F.target.matches(":focus-visible") && ge("platform-tooltip-focus-visible-new"))
            return;
        } catch {}
        Le({ type: "keyboard" });
      },
      [Le],
    ),
    tt = _.useCallback(function () {
      j.current && j.current.requestHide({ isImmediate: !1 });
    }, []),
    $t = _.useCallback(
      function (F) {
        F === "exiting" &&
          Me.current === "fade-out" &&
          j.current &&
          j.current.finishHideAnimation();
      },
      [Me],
    ),
    Qa = f,
    pt = le !== "hide" && !!i,
    eo = !q && pt,
    Fc = le !== "hide" && le !== "fade-out",
    ug = _.useCallback(function () {
      var F;
      (F = j.current) === null || F === void 0 || F.requestHide({ isImmediate: !0 });
    }, []);
  bO({ isOpen: pt && Fc, onClose: ug });
  var Lc = function () {
      var oe;
      if (n === "mouse" && (oe = j.current) !== null && oe !== void 0 && oe.mousePosition) {
        var Bt;
        return (Bt = j.current) === null || Bt === void 0 ? void 0 : Bt.mousePosition;
      }
      return pe.current || void 0;
    },
    mn = yE("tooltip", eo),
    _i = {
      onMouseOver: je,
      onMouseOut: St,
      onMouseMove: Mr,
      onMouseDown: re,
      onClick: Se,
      onFocus: rr,
      onBlur: tt,
    };
  p && (_i["data-testid"] = "".concat(p, "--container"));
  var Nc = typeof t == "function";
  _.useEffect(
    function () {
      if (!Nc) {
        var F = pe.current;
        if (!(!F || !mn))
          return (
            F.setAttribute("aria-describedby", mn),
            function () {
              return F.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [Nc, mn],
  );
  var $c = eo
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
          t(Xr(Xr({}, _i), {}, { "aria-describedby": mn, ref: Oe })),
          $c,
        )
      : O.createElement(Qa, Z({}, _i, { ref: Te, role: "presentation" }), t, $c),
    pt
      ? O.createElement(
          gE,
          { zIndex: kE },
          O.createElement(rE, { placement: G, referenceElement: Lc(), strategy: M }, function (F) {
            var oe = F.ref,
              Bt = F.style,
              mi = F.update,
              yi = F.placement,
              Fr = n === "mouse" ? void 0 : OE[SE(yi)];
            return O.createElement(
              Mh,
              { appear: !0 },
              Fc &&
                O.createElement(
                  jO,
                  {
                    distance: "constant",
                    entranceDirection: Fr,
                    exitDirection: Fr,
                    onFinish: $t,
                    duration: le !== "show-immediate" ? "medium" : "none",
                  },
                  function (yn) {
                    var dg = yn.className;
                    return O.createElement(
                      u,
                      {
                        ref: oe,
                        className: "Tooltip ".concat(dg),
                        style: Xr(Xr({}, Bt), $ && { pointerEvents: "none" }),
                        truncate: s,
                        placement: G,
                        testId: Lc() ? p : p && "".concat(p, "--unresolved"),
                        onMouseOut: St,
                        onMouseOver: de,
                        shortcut: V,
                      },
                      typeof i == "function" ? i({ update: mi }) : i,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var xE = [
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
  ya = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  $f = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syaz1gjq _k48pmoej" },
  eg = function (t) {
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
      y = te(t, xE),
      w = _.useState(!1),
      k = J(w, 2),
      m = k[0],
      S = k[1],
      x = _.useState(!1),
      A = J(x, 2),
      D = A[0],
      R = A[1],
      M = l === u || c !== void 0,
      z = m || M || D,
      $ = z && b,
      U = !b || z || (b && !D),
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
      H = _.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      N = O.createElement(
        fi,
        { xcss: $f.headCellContainer, onMouseEnter: G, onMouseLeave: H, onFocus: q, onBlur: V },
        O.createElement(
          EE,
          { content: c === Rr ? f : h },
          O.createElement(
            sh,
            { onClick: s, xcss: ya.buttonWrapper, "aria-roledescription": g },
            O.createElement(
              Vo,
              { xcss: $ ? ya.hideIconHeaderWrapper : ya.visibleHeaderWrapper },
              O.createElement("span", { className: P([$f.text]) }, r),
            ),
            U &&
              O.createElement(
                Vo,
                { xcss: z ? ya.sortIconVisibleWrapper : ya.sortIconHiddenWrapper },
                c === Rr
                  ? O.createElement(dO, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : O.createElement(cO, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return O.createElement(
      nO,
      Z(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof o != "string" ? o : null,
        },
        y,
        { isSortable: i, sortOrder: c },
      ),
      i ? N : r,
    );
  },
  CE = ["isRanking", "refHeight", "refWidth"];
function PE(e, t, r) {
  return (
    (t = X(t)),
    Ze(e, tg() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function tg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (tg = function () {
    return !!e;
  })();
}
var RE = (function (e) {
    function t() {
      return (be(this, t), PE(this, t, arguments));
    }
    return (
      Qe(t, e),
      _e(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var o = n.refWidth,
              i = te(n, CE),
              c = Bm(a, o);
            return O.createElement(eg, Z({ inlineStyles: c }, i));
          },
        },
      ])
    );
  })(O.Component),
  AE = oO(RE),
  IE = ["cells"],
  jE = [
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
function DE(e, t, r) {
  return (
    (t = X(t)),
    Ze(e, rg() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function rg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (rg = function () {
    return !!e;
  })();
}
var TE = (function (e) {
    function t(r) {
      var n;
      return (be(this, t), (n = DE(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Qe(t, e),
      _e(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            $o(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              $o(n.sortKey, n.head);
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
            var h = d ? AE : eg,
              v = o.cells,
              g = te(o, IE);
            return O.createElement(
              rO,
              Z({}, g, { isRanking: u, testId: f && "".concat(f, "--head") }),
              O.createElement(
                "tr",
                null,
                v.map(function (b, y) {
                  var w = b.ascendingSortTooltip,
                    k = b.buttonAriaRoleDescription,
                    m = b.colSpan,
                    S = b.content,
                    x = b.descendingSortTooltip,
                    A = b.isIconOnlyHeader,
                    D = b.isSortable,
                    R = b.key,
                    M = b.shouldTruncate,
                    z = b.testId,
                    $ = b.width,
                    U = te(b, jE),
                    q = "head-cell-".concat(y),
                    V = function () {
                      (n.setState({ activeSortButtonId: q }), D && l(b)());
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
                        key: R || y,
                        headCellId: q,
                        activeSortButtonId: p,
                        onClick: V,
                        testId: z || f,
                        shouldTruncate: M,
                        sortOrder: R === i ? c : void 0,
                        width: $,
                        ascendingSortTooltip: w,
                        descendingSortTooltip: x,
                        buttonAriaRoleDescription: k,
                      },
                      U,
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
  ME = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function FE(e) {
  switch (e) {
    case qo:
      return Rr;
    case Rr:
      return qo;
    default:
      return e;
  }
}
var LE = function (t) {
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
      x = t.page,
      A = x === void 0 ? 1 : x,
      D = t.emptyView,
      R = t.isRankable,
      M = R === void 0 ? !1 : R,
      z = t.isRankingDisabled,
      $ = z === void 0 ? !1 : z,
      U = t.onRankStart,
      q = U === void 0 ? Ae : U,
      V = t.onRankEnd,
      G = V === void 0 ? Ae : V,
      H = t.loadingSpinnerSize,
      N = t.paginationi18n,
      j =
        N === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : N,
      me = _.useState(!1),
      se = J(me, 2),
      le = se[0],
      fe = se[1],
      pe = _.useRef(null),
      ue = cn({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      Te = cn({
        fn: G,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    _.useEffect(
      function () {
        ($o(i, n), $m(n));
      },
      [i, n],
    );
    var Oe = function (Se) {
        return function () {
          var je = Se.key;
          if (je) {
            if (ue && M && je === i && c === qo) {
              ue({ key: null, sortOrder: null, item: Se });
              return;
            }
            var St = je !== i ? Rr : FE(c);
            ue && ue({ key: je, item: Se, sortOrder: St });
          }
        };
      },
      Me = function (Se, je) {
        k(Se, je);
      },
      ve = function (Se) {
        (fe(!0), q(Se));
      },
      Fe = function (Se) {
        (fe(!1), Te(Se));
      },
      tr = function () {
        return H || (Ip(o || [], A, y).length > 2 ? Uo : iy);
      },
      vt = function () {
        return h ? O.createElement(fy, { testId: u }) : D && O.createElement(vy, { testId: u }, D);
      },
      Ce = o && o.length,
      Pe,
      Ot = !1;
    (d && Number.isInteger(d) && y && Ce && Ce <= d
      ? ((Pe = Math.ceil(d / y)), (Ot = !0))
      : (Pe = Ce && y ? Math.ceil(Ce / y) : 0),
      (Pe = Pe < 1 ? 1 : Pe));
    var et = A > Pe ? Pe : A,
      Ve = !!Ce,
      Le = tr(),
      Ie = vt();
    return O.createElement(
      O.Fragment,
      null,
      O.createElement(
        Up,
        {
          isLoading: h && Ve,
          spinnerSize: Le,
          targetRef: function () {
            return pe.current;
          },
          testId: u,
          loadingLabel: s,
        },
        O.createElement(
          ly,
          { isFixedSize: g, "aria-label": f, hasDataRow: Ve, testId: u, isLoading: h },
          !!r && O.createElement(uy, null, r),
          n &&
            O.createElement(TE, {
              head: n,
              onSort: Oe,
              sortKey: i,
              sortOrder: c,
              isRanking: le,
              isRankable: M,
              testId: u,
            }),
          Ve &&
            O.createElement($E, {
              ref: pe,
              highlightedRowIndex: a,
              rows: o,
              head: n,
              sortKey: i,
              sortOrder: c,
              rowsPerPage: y,
              page: et,
              isFixedSize: g || !1,
              onPageRowsUpdate: l,
              isTotalPagesControlledExternally: Ot,
              testId: u,
              isRankable: M,
              isRanking: le,
              onRankStart: ve,
              onRankEnd: Fe,
              isRankingDisabled: $ || h || !1,
            }),
        ),
      ),
      Pe <= 1
        ? null
        : O.createElement(
            dy,
            { testId: u },
            O.createElement(Q1, {
              value: et,
              onChange: Me,
              total: Pe,
              i18n: j,
              isDisabled: h,
              testId: u,
            }),
          ),
      !Ve &&
        Ie &&
        O.createElement(zp, { isLoading: h, spinnerSize: Uo, testId: u, loadingLabel: s }, Ie),
    );
  },
  NE = _.lazy(function () {
    return Vm(
      () => import("./body-ybeaJMoI.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  $E = _.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      o = t.isRanking,
      i = t.onRankStart,
      c = t.onRankEnd,
      s = t.isRankingDisabled,
      l = te(t, ME),
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
    var v = O.createElement(Py, Z({ ref: r }, l));
    return u && p
      ? O.createElement(
          Ay,
          { fallback: v },
          O.createElement(
            _.Suspense,
            { fallback: v },
            O.createElement(
              NE,
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
function BE(e, t, r) {
  return (
    (t = X(t)),
    Ze(e, ng() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function ng() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ng = function () {
    return !!e;
  })();
}
var ag = (function (e) {
  function t() {
    var r;
    be(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = BE(this, t, [].concat(a))),
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
        var f = zm(i, l, u, d);
        (r.setState({ rows: f }), r.onRankEndIfExistsHandler(i));
      }),
      r
    );
  }
  return (
    Qe(t, e),
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
            x = s.testId,
            A = s.label;
          return O.createElement(LE, {
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
            testId: x,
            label: A,
          });
        },
      },
    ])
  );
})(O.Component);
C(ag, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Ae,
  onSort: Ae,
  rowsPerPage: 1 / 0,
});
const zE = (e) => {
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
  qE = (e) => ({ cells: zE() });
function UE(e) {
  return function (t) {
    e.forEach(function (r) {
      typeof r == "function" ? r(t) : r !== null && (r.current = t);
    });
  };
}
var og = _.createContext(void 0),
  VE = function () {
    var t = _.useContext(og);
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
function Kt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var GE = 9;
function Bf(e) {
  e.keyCode !== GE && Kt(e);
}
function KE(e, t) {
  return e
    ? {
        onMouseDownCapture: Kt,
        onMouseUpCapture: Kt,
        onKeyDownCapture: Bf,
        onKeyUpCapture: Bf,
        onTouchStartCapture: Kt,
        onTouchEndCapture: Kt,
        onPointerDownCapture: Kt,
        onPointerUpCapture: Kt,
        onClickCapture: Kt,
        onClick: Kt,
      }
    : t;
}
function HE(e) {
  switch (e) {
    case "compact":
      return "small";
    default:
      return "medium";
  }
}
function WE(e) {
  var t = e.appearance,
    r = e.isDisabled,
    n = e.isSelected;
  return r || n
    ? "inherit"
    : t === "primary" || t === "danger" || t === "discovery"
      ? "invert"
      : "inherit";
}
function JE(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isDisabled,
    a = e.isSelected,
    o = e.testId;
  return O.createElement(pc, {
    size: HE(r),
    appearance: WE({ appearance: t, isDisabled: n, isSelected: a }),
    testId: o ? "".concat(o, "--loading-spinner") : void 0,
  });
}
var YE = [
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
  XE = ["className", "css", "as", "style"],
  zf = ", Loading",
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
  qf = {
    root: "_bfhkomb0 _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31wqm _9h8h15cr _1di617hq",
  },
  Uf = {
    root: "_bfhk1ikc _syazal3n _1053al3n _f8pjal3n _30l3al3n _9h8hal3n",
    interactive: "_30l3al3n _irr31j43 _9h8hal3n _1di6h4op",
  },
  Vf = {
    root: "_bfhk1v7l _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31rwk _9h8h15cr _1di6yycf",
  },
  Gf = {
    root: "_bfhk1vbi _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr37gr8 _9h8h15cr _1di61wu2",
  },
  ho = {
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
  ZE = O.forwardRef(function (e, t) {
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
      x = e.ariaLabel,
      A = e.ariaLabelledBy,
      D = e.children,
      R = e.interactionName,
      M = e.onClick,
      z = e.onMouseDown,
      $ = e.onMouseDownCapture,
      U = e.onMouseUp,
      q = e.onMouseUpCapture,
      V = e.onKeyDown,
      G = e.onKeyDownCapture,
      H = e.onKeyUp,
      N = e.onKeyUpCapture,
      j = e.onTouchStart,
      me = e.onTouchStartCapture,
      se = e.onTouchEnd,
      le = e.onTouchEndCapture,
      fe = e.onPointerDown,
      pe = e.onPointerDownCapture,
      ue = e.onPointerUp,
      Te = e.onPointerUpCapture,
      Oe = e.onClickCapture,
      Me = e.testId,
      ve = e.analyticsContext,
      Fe = e.componentName,
      tr = e.role,
      vt = e.onMouseOver,
      Ce = e.onMouseOut,
      Pe = e.onFocus,
      Ot = e.onBlur,
      et = e.onMouseMove,
      Ve = e.type,
      Le = te(e, YE),
      Ie = _.useRef(null),
      re = VE(),
      Se = dh(),
      je = !!re,
      St = re?.isNavigationSplitButton || !1,
      Mr = re?.appearance === "default",
      de =
        Mr && ge("platform-component-visual-refresh") ? "subtle" : r || re?.appearance || "default",
      rr = re?.spacing || S,
      tt = re?.isDisabled || i,
      $t = !tt && !s,
      Qa = tt || s,
      pt = u && !tt;
    (xh(Ie, a), Le.className, Le.css, Le.as, Le.style);
    var eo = te(Le, XE);
    return O.createElement(
      sh,
      Z(
        {},
        eo,
        {
          componentName: Fe || "button",
          analyticsContext: ve,
          role: tr,
          ref: UE([Ie, t]),
          xcss: ah(
            De.base,
            de === "default" &&
              (ge("platform-component-visual-refresh") ? Zr.rootRefreshed : Zr.root),
            de === "default" &&
              $t &&
              (ge("platform-component-visual-refresh") ? Zr.interactiveRefreshed : Zr.interactive),
            de === "primary" && qf.root,
            de === "primary" && $t && qf.interactive,
            de === "warning" && Uf.root,
            de === "warning" && $t && Uf.interactive,
            de === "danger" && Vf.root,
            de === "danger" && $t && Vf.interactive,
            de === "discovery" && Gf.root,
            de === "discovery" && $t && Gf.interactive,
            de === "subtle" &&
              (ge("platform-component-visual-refresh") ? ho.rootRefreshed : ho.root),
            de === "subtle" &&
              $t &&
              (ge("platform-component-visual-refresh") ? ho.interactiveRefreshed : ho.interactive),
            De.linkDecorationUnset,
            pt && (ge("platform-component-visual-refresh") ? kr.rootRefreshed : kr.root),
            pt && je && kr.insideSplitButton,
            pt && $t && kr.interactive,
            pt && de === "danger" && kr.danger,
            pt && de === "warning" && kr.warning,
            pt && de === "discovery" && kr.discovery,
            tt && De.disabled,
            tt &&
              (!ge("platform-component-visual-refresh") || (de !== "default" && de !== "subtle")) &&
              De.sharedDisabled,
            tt &&
              de === "default" &&
              (ge("platform-component-visual-refresh") ? Zr.disabledRefreshed : Zr.disabled),
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
          isDisabled: Qa,
          "aria-label": s && x && !A ? "".concat(x, " ").concat(zf) : x,
          "aria-labelledby": s && A ? "".concat(A, " ").concat(Se) : A,
          onClick: M,
        },
        KE(Qa, {
          onMouseDownCapture: $,
          onMouseUpCapture: q,
          onKeyDownCapture: G,
          onKeyUpCapture: N,
          onTouchStartCapture: me,
          onTouchEndCapture: le,
          onPointerDownCapture: pe,
          onPointerUpCapture: Te,
          onClickCapture: Oe,
        }),
        {
          testId: Me,
          onMouseOver: vt,
          onFocus: Pe,
          onMouseMove: et,
          onBlur: Ot,
          type: Ve,
          interactionName: R,
          onMouseDown: z,
          onMouseUp: U,
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
        og.Provider,
        { value: void 0 },
        D,
        s &&
          O.createElement(
            "span",
            { className: P([De.loadingOverlay]) },
            JE({ spacing: rr, appearance: de, isDisabled: tt, isSelected: pt, testId: Me }),
          ),
        s && (A || !x) && O.createElement(mc, { id: Se }, zf),
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
  Os = function (t) {
    var r = t.children,
      n = t.type,
      a = n === void 0 ? "text" : n,
      o = t.isLoading,
      i = t.position;
    return O.createElement(
      "span",
      {
        className: P([
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
function QE(e) {
  return !e.displayName && !e.render && typeof e == "function";
}
var Kf = function (t) {
    var r = t.icon,
      n = QE(r),
      a = {
        label: "",
        color: "currentColor",
        size: ge("platform_dst_button_chevron_sizing")
          ? function (o) {
              return o.startsWith("Chevron") ? "small" : "medium";
            }
          : void 0,
      };
    return O.createElement(O.Fragment, null, n ? r(a) : O.createElement(r, a));
  },
  ex = [
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
  tx = ["className", "css", "as", "style"],
  Mc = O.memo(
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
        x = t.onPointerUpCapture,
        A = t.onTouchEndCapture,
        D = t.onTouchStartCapture,
        R = t.shouldFitContainer,
        M = t.spacing,
        z = t.testId,
        $ = t.type,
        U = $ === void 0 ? "button" : $,
        q = te(t, ex);
      (q.className, q.css, q.as, q.style);
      var V = te(q, tx);
      return O.createElement(
        ZE,
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
            shouldFitContainer: R,
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
            onPointerUpCapture: x,
            onTouchStartCapture: D,
            onTouchEndCapture: A,
            testId: z,
            componentName: "Button",
            type: U,
            interactionName: d,
          },
          V,
        ),
        O.createElement(
          _.Fragment,
          null,
          u &&
            O.createElement(
              Os,
              { type: "icon", position: "before", isLoading: h },
              O.createElement(Kf, { icon: u }),
            ),
          s && O.createElement(Os, { isLoading: h }, s),
          l &&
            O.createElement(
              Os,
              { type: "icon", position: "after", isLoading: h },
              O.createElement(Kf, { icon: l }),
            ),
        ),
      );
    }),
  );
Mc.displayName = "Button";
const go = li((e) => {
  const { stateStore: t } = ui(),
    r = qE();
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
            E.jsx(ag, {
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
                      children: E.jsx(Mc, {
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
function rx(e) {
  return Rp(e) || jp(e) || fc(e) || Ap();
}
var ig = _.createContext(null),
  sg = _.createContext(null),
  cg = _.createContext(null);
function Hf(e, t) {
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
function nx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Hf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ax = { componentName: "tabs", packageName: "@atlaskit/tabs", packageVersion: "18.2.2" },
  Wf = function (t) {
    var r = t.tabPanel,
      n = t.index,
      a = t.isSelected,
      o = t.tabsId;
    return (
      r &&
      _.createElement(
        cg.Provider,
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
  ox = function (t) {
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
      b = rx(g),
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
      S = cn(nx({ fn: m, action: "clicked", analyticsData: s }, ax)),
      x = n
        ? Wf({ tabPanel: w[v], index: v, isSelected: !0, tabsId: c })
        : Array.from(k.current).map(function (A) {
            return Wf({ tabPanel: w[A], index: A, isSelected: A === v, tabsId: c });
          });
    return _.createElement(
      "div",
      {
        "data-testid": u,
        className: P([
          "_1e0c1txw _p12f1osq _1tkeidpf _i0dl1osq _2lx21bp4 _16jlkb7n",
          "_1c3y1txw _ftfaidpf _18i0kb7n _185bglyw",
        ]),
      },
      _.createElement(sg.Provider, { value: { selected: v, onChange: S, tabsId: c } }, y),
      _.createElement(_.Fragment, null, x),
    );
  },
  ix = function () {
    var t = _.useContext(ig);
    if (t == null || typeof t > "u")
      throw Error("@atlaskit/tabs: A Tab must have a TabList parent.");
    return t;
  },
  sx = function () {
    var t = _.useContext(sg);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs: A TabList must have a Tabs parent.");
    return t;
  },
  cx = function () {
    var t = _.useContext(cg);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs:  A TabPanel must have a Tabs parent.");
    return t;
  },
  wa = function (t) {
    var r = t.children,
      n = t.testId,
      a = cx(),
      o = a.role,
      i = a.id,
      c = a.hidden,
      s = a["aria-labelledby"],
      l = a.tabIndex;
    return O.createElement(
      _c,
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
  bo = _.forwardRef(function (t, r) {
    var n = t.children,
      a = t.testId,
      o = ix(),
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
      _c,
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
      O.createElement(ih, { weight: "medium", color: "inherit", maxLines: 1 }, n),
    );
  }),
  lx = function (t) {
    var r = t.children,
      n = sx(),
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
            ig.Provider,
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
        className: P([
          "_1e0c1txw _kqswh2mm _85i5ze3t _1q51ze3t _y4tize3t _bozgze3t",
          "_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _7hip15vq _1fud15vq _bb0mh2mm _1quz1425 _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _1lzu1mrt _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oaz1fgx _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1b8d1mrt _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i2072d1 _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _rsmz12s7 _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiemln51 _pascidpf _eid3idpf _zr3eidpf _fntnidpf _1mp41kw7 _kfgte4h9 _1cs8stnw _1russudh _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc",
        ]),
        style: {
          "--_13a5t4u": ir("var(--ds-text-subtle, ".concat(ln, ")")),
          "--_kkbq40": ir("var(--ds-text-subtle, ".concat(Ht, ")")),
          "--_71dbsd": ir("var(--ds-text, ".concat(zs, ")")),
          "--_1hfkvbo": ir("var(--ds-text-selected, ".concat(Ht, ")")),
          "--_1c11uqn": ir("3px solid ".concat("var(--ds-border-selected, ".concat(Ht, ")"))),
          "--_lvpq93": ir("var(--ds-border, ".concat(jy, ")")),
        },
      },
      s.map(function (p, h) {
        return f({ tab: p, index: h, isSelected: h === o });
      }),
    );
  },
  lg = ((e) => (
    (e[(e.WITHOUT_VERSIONING = 0)] = "WITHOUT_VERSIONING"),
    (e[(e.OPTIMISTIC_NUMBER = 1)] = "OPTIMISTIC_NUMBER"),
    (e[(e.OPTIMISTIC_DATE = 2)] = "OPTIMISTIC_DATE"),
    (e[(e.OPTIMISTIC_TIMESTAMP = 3)] = "OPTIMISTIC_TIMESTAMP"),
    e
  ))(lg || {});
const ux = Object.keys(lg).filter((e) => isNaN(Number(e))),
  _o = ({ children: e, testId: t }) =>
    E.jsx("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: Vt("color.background.neutral"),
        borderRadius: "3px",
        color: Vt("color.text.subtlest"),
        font: Vt("font.heading.xxlarge"),
        marginBlockEnd: Vt("space.100", "8px"),
        marginBlockStart: Vt("space.200", "16px"),
        paddingBlockEnd: Vt("space.400", "32px"),
        paddingBlockStart: Vt("space.400", "32px"),
        paddingInlineEnd: Vt("space.400", "32px"),
        paddingInlineStart: Vt("space.400", "32px"),
      },
      "data-testid": t,
      children: e,
    });
function dx() {
  const { stateStore: e } = ui();
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
              E.jsxs(Mc, {
                appearance: "danger",
                onClick: async () => {
                  try {
                    (e.loading("Clear ..."),
                      await Da.invoke("clearAll", {
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
          E.jsxs(ox, {
            onChange: (t) => console.log("Selected Tab", t + 1),
            defaultSelected: 1,
            id: "default",
            children: [
              E.jsxs(lx, {
                children: [
                  " ",
                  ux.map((t) => {
                    switch (t) {
                      case "WITHOUT_VERSIONING":
                        return E.jsx(
                          bo,
                          { children: "Entity Without Version Column (No Locking)" },
                          t,
                        );
                      case "OPTIMISTIC_NUMBER":
                        return E.jsx(bo, { children: "Entity with Numeric Version Column" }, t);
                      case "OPTIMISTIC_DATE":
                        return E.jsx(
                          bo,
                          { children: "Entity with Datetime-Based Version Column" },
                          t,
                        );
                      case "OPTIMISTIC_TIMESTAMP":
                        return E.jsx(
                          bo,
                          { children: "Entity with Timestamp-BasedVersion Column" },
                          t,
                        );
                    }
                  }),
                ],
              }),
              E.jsx(wa, { children: E.jsx(E.Fragment, {}) }),
              E.jsx(wa, {
                children: E.jsx(_o, {
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
                      E.jsx(go, { type: "WITHOUT_VERSIONING" }),
                    ],
                  }),
                }),
              }),
              E.jsx(wa, {
                children: E.jsx(_o, {
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
                      E.jsx(go, { type: "OPTIMISTIC_NUMBER" }),
                    ],
                  }),
                }),
              }),
              E.jsx(wa, {
                children: E.jsx(_o, {
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
                      E.jsx(go, { type: "OPTIMISTIC_DATE" }),
                    ],
                  }),
                }),
              }),
              E.jsx(wa, {
                children: E.jsx(_o, {
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
                      E.jsx(go, { type: "OPTIMISTIC_TIMESTAMP" }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
}
const fx = li(dx),
  vx = li((e) => {
    const { stateStore: t } = ui(),
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
        const d = await Da.invoke("update", { data: u, objectName: e.type });
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
                const l = await Da.invoke("fetchOrCreateIfNotExists");
                t.saveResponse(l);
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
function px() {
  const { stateStore: e } = ui();
  if (
    (_.useEffect(() => {
      (async () => {
        try {
          e.loading();
          const r = await Da.invoke("fetchOrCreateIfNotExists");
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
      return E.jsx(fx, {});
    case "WITHOUT_VERSIONING":
    case "OPTIMISTIC_TIMESTAMP":
    case "OPTIMISTIC_DATE":
    case "OPTIMISTIC_NUMBER":
      return E.jsx(vx, { type: e.state });
    default:
      return E.jsxs("div", { children: ["ERROR: unsupprted state $", e.state] });
  }
}
const hx = li(px),
  gx = document.getElementById("root"),
  bx = fg.createRoot(gx),
  Jf = () => {
    bx.render(E.jsx(xp, { ...Cp, children: E.jsx(hx, {}) }));
  };
Da.view.theme
  .enable()
  .then(() => {
    Jf();
  })
  .catch((e) => {
    (console.error(e.message), Jf());
  });
export {
  O as R,
  ky as T,
  Qe as _,
  _e as a,
  Gs as b,
  be as c,
  Ze as d,
  X as e,
  J as f,
  C as g,
  te as h,
  vi as i,
  Ge as j,
  Z as k,
  Nw as l,
  Yt as m,
  Nt as n,
  P as o,
  yy as p,
  Bm as q,
  _ as r,
  by as s,
  oO as w,
};
