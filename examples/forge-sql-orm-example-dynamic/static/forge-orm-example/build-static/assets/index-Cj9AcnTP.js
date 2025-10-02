const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-CNnI0Dt3.js",
      "./react-dom-vendor-DTSHKYJW.js",
      "./client-core-vendor-Bz5kMKC-.js",
      "./lodash-vendor-Ce0R6Syi.js",
      "./body-C3aXNd8H.css",
    ]),
) => i.map((i) => d[i]);
import { r as dt, a as yi, c as th } from "./react-dom-vendor-DTSHKYJW.js";
import { g as er, a as xs, r as Zt, s as He } from "./client-core-vendor-Bz5kMKC-.js";
import { r as rh } from "./lodash-vendor-Ce0R6Syi.js";
function nh(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const a in n)
        if (a !== "default" && !(a in e)) {
          const i = Object.getOwnPropertyDescriptor(n, a);
          i && Object.defineProperty(e, a, i.get ? i : { enumerable: !0, get: () => n[a] });
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
    for (const i of a)
      if (i.type === "childList")
        for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(a) {
    const i = {};
    return (
      a.integrity && (i.integrity = a.integrity),
      a.referrerPolicy && (i.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : a.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function n(a) {
    if (a.ep) return;
    a.ep = !0;
    const i = r(a);
    fetch(a.href, i);
  }
})();
var Wi = { exports: {} },
  rn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ou;
function ah() {
  if (ou) return rn;
  ou = 1;
  var e = dt(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, u, c) {
    var l,
      d = {},
      f = null,
      p = null;
    (c !== void 0 && (f = "" + c),
      u.key !== void 0 && (f = "" + u.key),
      u.ref !== void 0 && (p = u.ref));
    for (l in u) n.call(u, l) && !i.hasOwnProperty(l) && (d[l] = u[l]);
    if (s && s.defaultProps) for (l in ((u = s.defaultProps), u)) d[l] === void 0 && (d[l] = u[l]);
    return { $$typeof: t, type: s, key: f, ref: p, props: d, _owner: a.current };
  }
  return ((rn.Fragment = r), (rn.jsx = o), (rn.jsxs = o), rn);
}
var su;
function ih() {
  return (su || ((su = 1), (Wi.exports = ah())), Wi.exports);
}
var L = ih(),
  y = dt();
const k = er(y),
  uu = nh({ __proto__: null, default: k }, [y]);
var Ki = {},
  Wo = function (e, t) {
    return (
      (Wo =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      Wo(e, t)
    );
  };
function Hd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Wo(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var Qa = function () {
  return (
    (Qa =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }),
    Qa.apply(this, arguments)
  );
};
function Wd(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function Kd(e, t, r, n) {
  var a = arguments.length,
    i = a < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, t, r, n);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
  return (a > 3 && i && Object.defineProperty(t, r, i), i);
}
function Yd(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function Jd(e, t, r, n, a, i) {
  function o(b) {
    if (b !== void 0 && typeof b != "function") throw new TypeError("Function expected");
    return b;
  }
  for (
    var s = n.kind,
      u = s === "getter" ? "get" : s === "setter" ? "set" : "value",
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
    h.addInitializer = function (b) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(o(b || null));
    };
    var g = (0, r[p])(s === "accessor" ? { get: l.get, set: l.set } : l[u], h);
    if (s === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = o(g.get)) && (l.get = d),
        (d = o(g.set)) && (l.set = d),
        (d = o(g.init)) && a.unshift(d));
    } else (d = o(g)) && (s === "field" ? a.unshift(d) : (l[u] = d));
  }
  (c && Object.defineProperty(c, n.name, l), (f = !0));
}
function Xd(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function Zd(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Qd(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function ef(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function tf(e, t, r, n) {
  function a(i) {
    return i instanceof r
      ? i
      : new r(function (o) {
          o(i);
        });
  }
  return new (r || (r = Promise))(function (i, o) {
    function s(l) {
      try {
        c(n.next(l));
      } catch (d) {
        o(d);
      }
    }
    function u(l) {
      try {
        c(n.throw(l));
      } catch (d) {
        o(d);
      }
    }
    function c(l) {
      l.done ? i(l.value) : a(l.value).then(s, u);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function rf(e, t) {
  var r = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    n,
    a,
    i,
    o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (o.next = s(0)),
    (o.throw = s(1)),
    (o.return = s(2)),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function s(c) {
    return function (l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && ((o = 0), c[0] && (r = 0)), r; )
      try {
        if (
          ((n = 1),
          a &&
            (i =
              c[0] & 2 ? a.return : c[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) &&
            !(i = i.call(a, c[1])).done)
        )
          return i;
        switch (((a = 0), i && (c = [c[0] & 2, i.value]), c[0])) {
          case 0:
          case 1:
            i = c;
            break;
          case 4:
            return (r.label++, { value: c[1], done: !1 });
          case 5:
            (r.label++, (a = c[1]), (c = [0]));
            continue;
          case 7:
            ((c = r.ops.pop()), r.trys.pop());
            continue;
          default:
            if (
              ((i = r.trys), !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!i || (c[1] > i[0] && c[1] < i[3]))) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < i[1]) {
              ((r.label = i[1]), (i = c));
              break;
            }
            if (i && r.label < i[2]) {
              ((r.label = i[2]), r.ops.push(c));
              break;
            }
            (i[2] && r.ops.pop(), r.trys.pop());
            continue;
        }
        c = t.call(e, r);
      } catch (l) {
        ((c = [6, l]), (a = 0));
      } finally {
        n = i = 0;
      }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
var _i = Object.create
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
function nf(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && _i(t, e, r);
}
function ei(e) {
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
function Cs(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e),
    a,
    i = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) i.push(a.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}
function af() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Cs(arguments[t]));
  return e;
}
function of() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var i = arguments[t], o = 0, s = i.length; o < s; o++, a++) n[a] = i[o];
  return n;
}
function sf(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, i; n < a; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function zr(e) {
  return this instanceof zr ? ((this.v = e), this) : new zr(e);
}
function uf(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []),
    a,
    i = [];
  return (
    (a = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    s("next"),
    s("throw"),
    s("return", o),
    (a[Symbol.asyncIterator] = function () {
      return this;
    }),
    a
  );
  function o(p) {
    return function (h) {
      return Promise.resolve(h).then(p, d);
    };
  }
  function s(p, h) {
    n[p] &&
      ((a[p] = function (v) {
        return new Promise(function (g, b) {
          i.push([p, v, g, b]) > 1 || u(p, v);
        });
      }),
      h && (a[p] = h(a[p])));
  }
  function u(p, h) {
    try {
      c(n[p](h));
    } catch (v) {
      f(i[0][3], v);
    }
  }
  function c(p) {
    p.value instanceof zr ? Promise.resolve(p.value.v).then(l, d) : f(i[0][2], p);
  }
  function l(p) {
    u("next", p);
  }
  function d(p) {
    u("throw", p);
  }
  function f(p, h) {
    (p(h), i.shift(), i.length && u(i[0][0], i[0][1]));
  }
}
function cf(e) {
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
  function n(a, i) {
    t[a] = e[a]
      ? function (o) {
          return (r = !r) ? { value: zr(e[a](o)), done: !1 } : i ? i(o) : o;
        }
      : i;
  }
}
function lf(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof ei == "function" ? ei(e) : e[Symbol.iterator]()),
      (r = {}),
      n("next"),
      n("throw"),
      n("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(i) {
    r[i] =
      e[i] &&
      function (o) {
        return new Promise(function (s, u) {
          ((o = e[i](o)), a(s, u, o.done, o.value));
        });
      };
  }
  function a(i, o, s, u) {
    Promise.resolve(u).then(function (c) {
      i({ value: c, done: s });
    }, o);
  }
}
function df(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var oh = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Ko = function (e) {
    return (
      (Ko =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      Ko(e)
    );
  };
function ff(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = Ko(e), n = 0; n < r.length; n++) r[n] !== "default" && _i(t, e, r[n]);
  return (oh(t, e), t);
}
function vf(e) {
  return e && e.__esModule ? e : { default: e };
}
function pf(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function hf(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function gf(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function bf(e, t, r) {
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
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      e.stack.push({ value: t, dispose: n, async: r }));
  } else r && e.stack.push({ async: !0 });
  return t;
}
var sh =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function yf(e) {
  function t(i) {
    ((e.error = e.hasError ? new sh(i, e.error, "An error was suppressed during disposal.") : i),
      (e.hasError = !0));
  }
  var r,
    n = 0;
  function a() {
    for (; (r = e.stack.pop()); )
      try {
        if (!r.async && n === 1) return ((n = 0), e.stack.push(r), Promise.resolve().then(a));
        if (r.dispose) {
          var i = r.dispose.call(r.value);
          if (r.async)
            return (
              (n |= 2),
              Promise.resolve(i).then(a, function (o) {
                return (t(o), a());
              })
            );
        } else n |= 1;
      } catch (o) {
        t(o);
      }
    if (n === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return a();
}
function _f(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (r, n, a, i, o) {
        return n
          ? t
            ? ".jsx"
            : ".js"
          : a && (!i || !o)
            ? r
            : a + i + "." + o.toLowerCase() + "js";
      })
    : e;
}
const uh = {
    __extends: Hd,
    __assign: Qa,
    __rest: Wd,
    __decorate: Kd,
    __param: Yd,
    __esDecorate: Jd,
    __runInitializers: Xd,
    __propKey: Zd,
    __setFunctionName: Qd,
    __metadata: ef,
    __awaiter: tf,
    __generator: rf,
    __createBinding: _i,
    __exportStar: nf,
    __values: ei,
    __read: Cs,
    __spread: af,
    __spreadArrays: of,
    __spreadArray: sf,
    __await: zr,
    __asyncGenerator: uf,
    __asyncDelegator: cf,
    __asyncValues: lf,
    __makeTemplateObject: df,
    __importStar: ff,
    __importDefault: vf,
    __classPrivateFieldGet: pf,
    __classPrivateFieldSet: hf,
    __classPrivateFieldIn: gf,
    __addDisposableResource: bf,
    __disposeResources: yf,
    __rewriteRelativeImportExtension: _f,
  },
  ch = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: bf,
        get __assign() {
          return Qa;
        },
        __asyncDelegator: cf,
        __asyncGenerator: uf,
        __asyncValues: lf,
        __await: zr,
        __awaiter: tf,
        __classPrivateFieldGet: pf,
        __classPrivateFieldIn: gf,
        __classPrivateFieldSet: hf,
        __createBinding: _i,
        __decorate: Kd,
        __disposeResources: yf,
        __esDecorate: Jd,
        __exportStar: nf,
        __extends: Hd,
        __generator: rf,
        __importDefault: vf,
        __importStar: ff,
        __makeTemplateObject: df,
        __metadata: ef,
        __param: Yd,
        __propKey: Zd,
        __read: Cs,
        __rest: Wd,
        __rewriteRelativeImportExtension: _f,
        __runInitializers: Xd,
        __setFunctionName: Qd,
        __spread: af,
        __spreadArray: sf,
        __spreadArrays: of,
        __values: ei,
        default: uh,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  qt = xs(ch);
var nn = {},
  cu;
function lh() {
  return (
    cu ||
      ((cu = 1),
      Object.defineProperty(nn, "__esModule", { value: !0 }),
      (nn.NavigationTarget = void 0),
      (nn.NavigationTarget = {
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
    nn
  );
}
var Yi = {},
  Ji = {},
  an = {},
  on = {},
  lu;
function ft() {
  if (lu) return on;
  ((lu = 1), Object.defineProperty(on, "__esModule", { value: !0 }), (on.BridgeAPIError = void 0));
  class e extends Error {}
  return ((on.BridgeAPIError = e), on);
}
var du;
function we() {
  if (du) return an;
  ((du = 1), Object.defineProperty(an, "__esModule", { value: !0 }), (an.getCallBridge = void 0));
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
  return ((an.getCallBridge = r), an);
}
var sn = {},
  fu;
function mf() {
  if (fu) return sn;
  ((fu = 1), Object.defineProperty(sn, "__esModule", { value: !0 }), (sn.withRateLimiter = void 0));
  const e = ft(),
    t = (r, n, a, i) => {
      let o = Date.now(),
        s = 0;
      return async (...u) => {
        const c = Date.now();
        if ((c - o > a && ((o = c), (s = 0)), s >= n))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((s = s + 1), r(...u));
      };
    };
  return ((sn.withRateLimiter = t), sn);
}
var vu;
function dh() {
  return (
    vu ||
      ((vu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = we(),
          r = ft(),
          n = mf(),
          a = (0, t.getCallBridge)(),
          i = (u) => {
            if (u && Object.values(u).some((c) => typeof c == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          o = (u, c) => {
            if (typeof u != "string") throw new r.BridgeAPIError("functionKey must be a string!");
            return (i(c), a("invoke", { functionKey: u, payload: c }));
          };
        e.invoke = (0, n.withRateLimiter)(
          o,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function s() {
          return e.invoke;
        }
        e.makeInvoke = s;
      })(Ji)),
    Ji
  );
}
var pu;
function fh() {
  return (
    pu ||
      ((pu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), qt.__exportStar(dh(), e));
      })(Yi)),
    Yi
  );
}
var Xi = {},
  un = {},
  Zi = {},
  hu;
function wf() {
  return (
    hu ||
      ((hu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = we(),
          r = ft(),
          n = mf(),
          a = 500,
          i = 25,
          o = 1e3 * i;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const s = (0, t.getCallBridge)(),
          u = (d) => {
            if (d && Object.values(d).some((f) => typeof f == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          c = (d) => async (f) => {
            u(f);
            const p = { ...f, invokeType: `ui-${d.toLowerCase()}-fetch` },
              h = await s("invoke", p),
              { success: v, payload: g, error: b } = h ?? {},
              m = { ...(v ? g : b) };
            if (m && m.headers)
              for (const w in m.headers)
                Array.isArray(m.headers[w]) && (m.headers[w] = m.headers[w].join(","));
            return m;
          },
          l = (d) => {
            const f = c(d);
            return (0, n.withRateLimiter)(
              f,
              a,
              o,
              `${d} invocation calls are rate limited at ${a}/${i}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(Zi)),
    Zi
  );
}
var gu;
function vh() {
  if (gu) return un;
  ((gu = 1), Object.defineProperty(un, "__esModule", { value: !0 }), (un.invokeRemote = void 0));
  const e = wf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((un.invokeRemote = t), un);
}
var cn = {},
  bu;
function ph() {
  if (bu) return cn;
  ((bu = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.invokeService = void 0));
  const e = wf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((cn.invokeService = t), cn);
}
var yu;
function hh() {
  return (
    yu ||
      ((yu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = qt;
        (t.__exportStar(vh(), e), t.__exportStar(ph(), e));
      })(Xi)),
    Xi
  );
}
var Qi = {},
  ln = {},
  dn = {},
  _u;
function gh() {
  if (_u) return dn;
  ((_u = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.submit = void 0));
  const e = we(),
    t = ft(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((dn.submit = n), dn);
}
var fn = {},
  mu;
function bh() {
  if (mu) return fn;
  ((mu = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.close = void 0));
  const e = we(),
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
  return ((fn.close = n), fn);
}
var vn = {},
  wu;
function yh() {
  if (wu) return vn;
  ((wu = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.open = void 0));
  const e = we(),
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
  return ((vn.open = n), vn);
}
var pn = {},
  Ou;
function _h() {
  if (Ou) return pn;
  ((Ou = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.refresh = void 0));
  const e = we(),
    t = ft(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((pn.refresh = n), pn);
}
var hn = {},
  ku;
function mh() {
  if (ku) return hn;
  ((ku = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.createHistory = void 0));
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
  return ((hn.createHistory = r), hn);
}
var gn = {},
  eo = {},
  jt = {},
  Su;
function Of() {
  return (
    Su ||
      ((Su = 1),
      Object.defineProperty(jt, "__esModule", { value: !0 }),
      (jt.FORGE_SUPPORTED_LOCALE_CODES =
        jt.I18N_BUNDLE_FOLDER_NAME =
        jt.I18N_INFO_FILE_NAME =
          void 0),
      (jt.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (jt.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (jt.FORGE_SUPPORTED_LOCALE_CODES = [
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
    jt
  );
}
var nr = {},
  Eu;
function wh() {
  if (Eu) return nr;
  ((Eu = 1),
    Object.defineProperty(nr, "__esModule", { value: !0 }),
    (nr.TranslationsGetter = nr.TranslationGetterError = void 0));
  const e = (n, a) => {
    n.includes(a) || n.push(a);
  };
  class t extends Error {
    constructor(a) {
      (super(a), (this.name = "TranslationGetterError"));
    }
  }
  nr.TranslationGetterError = t;
  class r {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(a) {
      this.resourcesAccessor = a;
    }
    async getTranslations(a, i = { fallback: !0 }) {
      const o = await this.getI18nInfoConfig(),
        { fallback: s } = i;
      if (!s) {
        let u;
        return (
          o.locales.includes(a) && (u = await this.getTranslationResource(a)),
          { translations: u ?? null, locale: a }
        );
      }
      for (const u of this.getLocaleLookupOrder(a, o)) {
        const c = await this.getTranslationResource(u);
        if (c) return { translations: c, locale: u };
      }
      return { translations: null, locale: a };
    }
    async getTranslationsByLocaleLookupOrder(a) {
      const i = await this.getI18nInfoConfig(),
        o = this.getLocaleLookupOrder(a, i);
      return await Promise.all(
        o.map(async (s) => {
          const u = await this.getTranslationResource(s);
          return { locale: s, translations: u };
        }),
      );
    }
    reset() {
      ((this.i18nInfoConfig = null), this.translationResources.clear());
    }
    async getTranslationResource(a) {
      let i = this.translationResources.get(a);
      if (!i)
        try {
          ((i = await this.resourcesAccessor.getTranslationResource(a)),
            this.translationResources.set(a, i));
        } catch (o) {
          throw o instanceof t ? o : new t(`Failed to get translation resource for locale: ${a}`);
        }
      return i;
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
    getLocaleLookupOrder(a, i) {
      const { locales: o, fallback: s } = i,
        u = [a],
        c = s[a];
      return (
        c && Array.isArray(c) && c.length > 0 && u.push(...c),
        e(u, i.fallback.default),
        u.filter((l) => o.includes(l))
      );
    }
  }
  return ((nr.TranslationsGetter = r), nr);
}
var bn = {},
  to = {},
  xu;
function kf() {
  return (
    xu ||
      ((xu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = qt.__importDefault(rh()),
          n = (i, o, s) => {
            const u = i[s];
            return u ? (0, e.getTranslationValueFromContent)(u, o) : null;
          };
        e.getTranslationValue = n;
        const a = (i, o) => {
          let s = i[o];
          if (!s) {
            const u = o.split(".");
            u.length > 1 && (s = (0, r.default)(i, u, null));
          }
          return typeof s == "string" ? s : null;
        };
        e.getTranslationValueFromContent = a;
      })(to)),
    to
  );
}
var Cu;
function Oh() {
  if (Cu) return bn;
  ((Cu = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.Translator = void 0));
  const e = kf();
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
        for (const { translations: i } of this.localeLookupOrderedTranslations) {
          const o = (0, e.getTranslationValueFromContent)(i, n);
          if (o !== null) {
            a = o;
            break;
          }
        }
        ((a = a ?? null), this.cache.set(n, a));
      }
      return a;
    }
  }
  return ((bn.Translator = t), bn);
}
var yn = {},
  Ru;
function kh() {
  if (Ru) return yn;
  ((Ru = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.ensureLocale = void 0));
  const e = Of(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    r = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    n = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, o) => {
        const [s] = o.split("-");
        return (i[s] || (i[s] = o), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    a = (i) => {
      const o = i.replace("_", "-");
      return t.has(o) ? o : (n[o] ?? r[o] ?? null);
    };
  return ((yn.ensureLocale = a), yn);
}
var ro = {},
  Pu;
function Sh() {
  return (
    Pu ||
      ((Pu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (c) => typeof c == "object" && c !== null && !Array.isArray(c),
          r = (c) => typeof c?.i18n == "string",
          n = (c) => c.startsWith("connect-"),
          a = (c) => c.startsWith("core:"),
          i = (c) => {
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
            return d(c, []);
          },
          o = (c) =>
            Object.entries(c).flatMap(([l, d]) =>
              !n(l) && !a(l) && d && Array.isArray(d) && d.length > 0 ? d.map((f) => [f, l]) : [],
            );
        e.getI18nSupportedModuleEntries = o;
        const s = (c) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(c)) {
            const f = i(d[0]);
            for (const { key: p } of f) l.add(p);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = s;
        const u = (c) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(c)) {
            const f = i(d[0]);
            for (const p of f) l.push({ moduleName: d[1], ...p });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = u;
      })(ro)),
    ro
  );
}
var no = {},
  Au;
function Eh() {
  return (Au || ((Au = 1), Object.defineProperty(no, "__esModule", { value: !0 })), no);
}
var ju;
function Sf() {
  return (
    ju ||
      ((ju = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = qt;
        (t.__exportStar(Of(), e),
          t.__exportStar(wh(), e),
          t.__exportStar(Oh(), e),
          t.__exportStar(kh(), e));
        var r = kf();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Sh();
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
          t.__exportStar(Eh(), e));
      })(eo)),
    eo
  );
}
var Iu;
function xh() {
  if (Iu) return gn;
  ((Iu = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.getContext = void 0));
  const e = we(),
    t = Sf(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const i = await r("getContext"),
        o = i?.locale;
      return (o && (i.locale = (a = (0, t.ensureLocale)(o)) !== null && a !== void 0 ? a : o), i);
    };
  return ((gn.getContext = n), gn);
}
var _n = {},
  Du;
function Ch() {
  if (Du) return _n;
  ((Du = 1),
    Object.defineProperty(_n, "__esModule", { value: !0 }),
    (_n.changeWindowTitle = void 0));
  const e = we(),
    t = ft(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        await r("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((_n.changeWindowTitle = n), _n);
}
var mn = {},
  Tu;
function Rh() {
  if (Tu) return mn;
  ((Tu = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.theme = void 0));
  const t = (0, we().getCallBridge)();
  return ((mn.theme = { enable: () => t("enableTheming") }), mn);
}
var wn = {},
  On = {},
  ao = {},
  ar = {},
  Mu;
function Ef() {
  if (Mu) return ar;
  ((Mu = 1),
    Object.defineProperty(ar, "__esModule", { value: !0 }),
    (ar.blobToBase64 = ar.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      i = atob(a),
      o = new Array(i.length);
    for (let u = 0; u < i.length; u++) o[u] = i.charCodeAt(u);
    const s = new Uint8Array(o);
    return new Blob([s], { type: n });
  };
  ar.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, a) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        n(i.result);
      }),
        (i.onerror = a),
        i.readAsDataURL(r));
    });
  return ((ar.blobToBase64 = t), ar);
}
var Lu;
function Ph() {
  return (
    Lu ||
      ((Lu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Ef(),
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
          a = (c) => (0, t.base64ToBlob)(c.data, c.type),
          i = async (c) => {
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
        e.serialiseBlobsInPayload = i;
        const o = (c) => {
          if (c && r(c) && "__isBlobData" in c) {
            const l = c;
            return a({ data: l.data, type: l.type });
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
        const s = (c) =>
          c instanceof Blob
            ? !0
            : Array.isArray(c)
              ? c.some((l) => (0, e.containsBlobs)(l))
              : c && r(c)
                ? Object.values(c).some((l) => (0, e.containsBlobs)(l))
                : !1;
        e.containsBlobs = s;
        const u = (c) =>
          c && r(c) && "__isBlobData" in c
            ? !0
            : Array.isArray(c)
              ? c.some((l) => (0, e.containsSerialisedBlobs)(l))
              : c && r(c)
                ? Object.values(c).some((l) => (0, e.containsSerialisedBlobs)(l))
                : !1;
        e.containsSerialisedBlobs = u;
      })(ao)),
    ao
  );
}
var $u;
function xf() {
  if ($u) return On;
  (($u = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.events = void 0));
  const e = we(),
    t = Ph(),
    r = (0, e.getCallBridge)(),
    n = async (i, o) => {
      let s = o;
      return (
        (0, t.containsBlobs)(o) && (s = await (0, t.serialiseBlobsInPayload)(o)),
        r("emit", { event: i, payload: s })
      );
    },
    a = (i, o) =>
      r("on", {
        event: i,
        callback: (u) => {
          let c = u;
          return (
            (0, t.containsSerialisedBlobs)(u) && (c = (0, t.deserialiseBlobsInPayload)(u)),
            o(c)
          );
        },
      });
  return ((On.events = { emit: n, on: a }), On);
}
var Nu;
function Ah() {
  if (Nu) return wn;
  ((Nu = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.emitReadyEvent = void 0));
  const e = xf(),
    t = Cf(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return ((wn.emitReadyEvent = n), wn);
}
var Fu;
function Cf() {
  if (Fu) return ln;
  ((Fu = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.view = void 0));
  const e = gh(),
    t = bh(),
    r = yh(),
    n = _h(),
    a = mh(),
    i = xh(),
    o = Ch(),
    s = Rh(),
    u = Ah();
  return (
    (ln.view = {
      submit: e.submit,
      close: t.close,
      open: r.open,
      refresh: n.refresh,
      createHistory: a.createHistory,
      getContext: i.getContext,
      theme: s.theme,
      changeWindowTitle: o.changeWindowTitle,
      emitReadyEvent: u.emitReadyEvent,
    }),
    ln
  );
}
var Bu;
function Rf() {
  return (
    Bu ||
      ((Bu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), qt.__exportStar(Cf(), e));
      })(Qi)),
    Qi
  );
}
var io = {},
  kn = {},
  zu;
function jh() {
  if (zu) return kn;
  ((zu = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.router = void 0));
  const t = (0, we().getCallBridge)(),
    r = async (o) => {
      if (!o?.target) throw new Error("target is required for getUrl");
      const s = await t("getUrl", o);
      if (!s) throw new Error("Failed to get URL");
      try {
        return new URL(s);
      } catch (u) {
        throw new Error(`Failed to parse URL: ${s} (${u})`);
      }
    },
    n = (o) => {
      if (typeof o == "string") return t("navigate", { url: o, type: "same-tab" });
      if (!o?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...o, type: "same-tab" });
    },
    a = (o) => {
      if (typeof o == "string") return t("navigate", { url: o, type: "new-tab" });
      if (!o?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...o, type: "new-tab" });
    },
    i = async () => t("reload");
  return ((kn.router = { getUrl: r, navigate: n, open: a, reload: i }), kn);
}
var qu;
function Ih() {
  return (
    qu ||
      ((qu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), qt.__exportStar(jh(), e));
      })(io)),
    io
  );
}
var oo = {},
  Sn = {},
  Uu;
function Dh() {
  if (Uu) return Sn;
  ((Uu = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.Modal = void 0));
  const e = we(),
    t = ft(),
    r = (0, e.getCallBridge)(),
    n = () => {};
  class a {
    constructor(o) {
      var s, u;
      ((this.resource = o?.resource || null),
        (this.onClose = o?.onClose || n),
        (this.size = o?.size || "medium"),
        (this.context = o?.context || {}),
        (this.closeOnEscape = (s = o?.closeOnEscape) !== null && s !== void 0 ? s : !0),
        (this.closeOnOverlayClick =
          (u = o?.closeOnOverlayClick) !== null && u !== void 0 ? u : !0));
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
  return ((Sn.Modal = a), Sn);
}
var Vu;
function Th() {
  return (
    Vu ||
      ((Vu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), qt.__exportStar(Dh(), e));
      })(oo)),
    oo
  );
}
var It = {},
  En = {},
  Gu;
function Mh() {
  if (Gu) return En;
  ((Gu = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.productFetchApi = void 0));
  const e = Ef(),
    t = async (a) => {
      const i = {};
      for (const [o, s] of a.entries())
        if (o === "file") {
          const u = s.name,
            c = s.type;
          ((i.file = await (0, e.blobToBase64)(s)), (i.__fileName = u), (i.__fileType = c));
        } else i[o] = s;
      return JSON.stringify(i);
    },
    r = async (a) => {
      const i = a?.body instanceof FormData,
        o = i ? await t(a?.body) : a?.body,
        s = new Request("", { body: o, method: a?.method, headers: a?.headers }),
        u = Object.fromEntries(s.headers.entries());
      return {
        body: s.method !== "GET" ? await s.text() : null,
        headers: new Headers(u),
        isMultipartFormData: i,
      };
    },
    n = (a) => {
      const i = async (o, s, u) => {
        const { body: c, headers: l, isMultipartFormData: d } = await r(u);
        l.has("X-Atlassian-Token") || l.set("X-Atlassian-Token", "no-check");
        const f = {
            product: o,
            restPath: s,
            fetchRequestInit: { ...u, body: c, headers: [...l.entries()] },
            isMultipartFormData: d,
          },
          {
            body: p,
            headers: h,
            statusText: v,
            status: g,
            isAttachment: b,
          } = await a("fetchProduct", f),
          m = b ? (0, e.base64ToBlob)(p, h["content-type"]) : p;
        return new Response(m || null, { headers: h, status: g, statusText: v });
      };
      return {
        requestConfluence: (o, s) => i("confluence", o, s),
        requestJira: (o, s) => i("jira", o, s),
        requestBitbucket: (o, s) => i("bitbucket", o, s),
      };
    };
  return ((En.productFetchApi = n), En);
}
var Hu;
function Lh() {
  if (Hu) return It;
  Hu = 1;
  var e;
  (Object.defineProperty(It, "__esModule", { value: !0 }),
    (It.requestBitbucket = It.requestJira = It.requestConfluence = void 0));
  const t = we();
  return (
    (e = (0, Mh().productFetchApi)((0, t.getCallBridge)())),
    (It.requestConfluence = e.requestConfluence),
    (It.requestJira = e.requestJira),
    (It.requestBitbucket = e.requestBitbucket),
    It
  );
}
var so = {},
  xn = {},
  Wu;
function $h() {
  if (Wu) return xn;
  ((Wu = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.showFlag = void 0));
  const e = we(),
    t = ft(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var i;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const o = r("showFlag", { ...a, type: (i = a.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await o, r("closeFlag", { id: a.id })) };
    };
  return ((xn.showFlag = n), xn);
}
var Ku;
function Nh() {
  return (
    Ku ||
      ((Ku = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = $h();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(so)),
    so
  );
}
var uo = {},
  Yu;
function Fh() {
  return (
    Yu ||
      ((Yu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), qt.__exportStar(xf(), e));
      })(uo)),
    uo
  );
}
var co = {},
  Cn = {},
  Ju;
function Bh() {
  if (Ju) return Cn;
  ((Ju = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.realtime = void 0));
  const t = (0, we().getCallBridge)(),
    r = (o, s, u) => t("publishRealtimeChannel", { channelName: o, eventPayload: s, options: u }),
    n = (o, s, u) => t("subscribeRealtimeChannel", { channelName: o, onEvent: s, options: u }),
    a = (o, s, u) =>
      t("publishRealtimeChannel", { channelName: o, eventPayload: s, options: u, isGlobal: !0 }),
    i = (o, s, u) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: s, options: u, isGlobal: !0 });
  return ((Cn.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: i }), Cn);
}
var lo = {},
  Xu;
function zh() {
  return (
    Xu ||
      ((Xu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Jira = void 0),
          (function (t) {
            ((t.Board = "board"), (t.Issue = "issue"), (t.Project = "project"));
          })(e.Jira || (e.Jira = {})));
      })(lo)),
    lo
  );
}
var Zu;
function qh() {
  return (
    Zu ||
      ((Zu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Jira = e.realtime = void 0));
        var t = Bh();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = zh();
        Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return r.Jira;
          },
        });
      })(co)),
    co
  );
}
var Dt = {},
  Qu;
function Uh() {
  if (Qu) return Dt;
  ((Qu = 1),
    Object.defineProperty(Dt, "__esModule", { value: !0 }),
    (Dt.createTranslationFunction = Dt.getTranslations = Dt.resetTranslationsCache = void 0));
  const e = Sf(),
    t = Rf(),
    r = {
      getI18nInfoConfig: async () => {
        const s = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!s.ok) throw new Error("Failed to get i18n info config: " + s.statusText);
        return (await s.json()).config;
      },
      getTranslationResource: async (s) => {
        const u = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${s}.json`);
        if (!u.ok) throw new Error(`Failed to get translation resource for locale: ${s}`);
        return u.json();
      },
    },
    n = new e.TranslationsGetter(r),
    a = () => {
      n.reset();
    };
  Dt.resetTranslationsCache = a;
  const i = async (s = null, u = { fallback: !0 }) => {
    let c = s;
    return (c || (c = (await t.view.getContext()).locale), await n.getTranslations(c, u));
  };
  Dt.getTranslations = i;
  const o = async (s = null) => {
    let u = s;
    u || (u = (await t.view.getContext()).locale);
    const c = new e.Translator(u, n);
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
  return ((Dt.createTranslationFunction = o), Dt);
}
var ec;
function Vh() {
  return (
    ec ||
      ((ec = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = qt;
        var r = lh();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(fh(), e),
          t.__exportStar(hh(), e),
          t.__exportStar(Rf(), e),
          t.__exportStar(Ih(), e),
          t.__exportStar(Th(), e),
          t.__exportStar(Lh(), e),
          t.__exportStar(Nh(), e),
          t.__exportStar(Fh(), e),
          t.__exportStar(qh(), e),
          (e.i18n = t.__importStar(Uh())));
      })(Ki)),
    Ki
  );
}
var Nt = Vh();
function de(e, t) {
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
function Gh(e, t) {
  if (je(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (je(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Pf(e) {
  var t = Gh(e, "string");
  return je(t) == "symbol" ? t : t + "";
}
function tc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Pf(n.key), n));
  }
}
function fe(e, t, r) {
  return (
    t && tc(e.prototype, t),
    r && tc(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Hh(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Be(e, t) {
  if (t && (je(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Hh(e);
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
function oa(e, t) {
  return (
    (oa = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    oa(e, t)
  );
}
function ze(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && oa(e, t));
}
function x(e, t, r) {
  return (
    (t = Pf(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function me() {}
function Wh(e) {
  if (Array.isArray(e)) return e;
}
function Kh(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      a,
      i,
      o,
      s = [],
      u = !0,
      c = !1;
    try {
      if (((i = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0);
    } catch (l) {
      ((c = !0), (a = l));
    } finally {
      try {
        if (!u && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function Yo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Af(e, t) {
  if (e) {
    if (typeof e == "string") return Yo(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Yo(e, t)
          : void 0
    );
  }
}
function Yh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(e, t) {
  return Wh(e) || Kh(e, t) || Af(e, t) || Yh();
}
var jf = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  Jh = function (t) {
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
  ti = function (t, r) {
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
  Xh = function (t, r, n) {
    return t ? { width: r } : {};
  },
  rc = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  Zh = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      i = t.destination,
      o = t.sourceIndex;
    if (!i) return r;
    var s = rc(o, n, a),
      u = rc(i.index, n, a),
      c = r.slice(),
      l = c.splice(s, 1),
      d = K(l, 1),
      f = d[0];
    return (c.splice(u, 0, f), c);
  };
const Qh = "modulepreload",
  eg = function (e, t) {
    return new URL(e, t).href;
  },
  nc = {},
  tg = function (t, r, n) {
    let a = Promise.resolve();
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
        s = document.querySelector("meta[property=csp-nonce]"),
        u = s?.nonce || s?.getAttribute("nonce");
      a = c(
        r.map((l) => {
          if (((l = eg(l, n)), l in nc)) return;
          nc[l] = !0;
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
            ((p.rel = d ? "stylesheet" : Qh),
            d || (p.as = "script"),
            (p.crossOrigin = ""),
            (p.href = l),
            u && p.setAttribute("nonce", u),
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
    function i(o) {
      const s = new Event("vite:preloadError", { cancelable: !0 });
      if (((s.payload = o), window.dispatchEvent(s), !s.defaultPrevented)) throw o;
    }
    return a.then((o) => {
      for (const s of o || []) s.status === "rejected" && i(s.reason);
      return t().catch(i);
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
function rg(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function ae(e, t) {
  if (e == null) return {};
  var r,
    n,
    a = rg(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      ((r = i[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function ac(e, t) {
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
function fo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ac(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ac(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ng = (function () {
  function e(t) {
    var r = this;
    (de(this, e),
      x(this, "_isAnalyticsEvent", !0),
      x(this, "clone", function () {
        var n = fo({}, r.payload);
        return new e({ payload: n });
      }),
      (this.payload = t.payload));
  }
  return fe(e, [
    {
      key: "update",
      value: function (r) {
        return (
          typeof r == "function" && (this.payload = r(this.payload)),
          je(r) === "object" && (this.payload = fo(fo({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function ag(e) {
  if (Array.isArray(e)) return Yo(e);
}
function ig(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function og() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Te(e) {
  return ag(e) || ig(e) || Af(e) || og();
}
function sg(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Y(e)) !== null; );
  return e;
}
function ri() {
  return (
    (ri =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = sg(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    ri.apply(null, arguments)
  );
}
function ug(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, If() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function If() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (If = function () {
    return !!e;
  })();
}
function cg(e, t, r, n) {
  var a = ri(Y(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var lg = (function (e) {
  function t(r) {
    var n;
    return (
      de(this, t),
      (n = ug(this, t, [r])),
      x(n, "_isUIAnalyticsEvent", !0),
      x(n, "clone", function () {
        if (n.hasFired) return null;
        var a = Te(n.context),
          i = Te(n.handlers),
          o = JSON.parse(JSON.stringify(n.payload));
        return new t({ context: a, handlers: i, payload: o });
      }),
      x(n, "fire", function (a) {
        n.hasFired ||
          (n.handlers.forEach(function (i) {
            return i(n, a);
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
    fe(t, [
      {
        key: "update",
        value: function (n) {
          return this.hasFired ? this : cg(t, "update", this, 3)([n]);
        },
      },
    ])
  );
})(ng);
function ic(e, t, r, n, a, i, o) {
  try {
    var s = e[i](o),
      u = s.value;
  } catch (c) {
    return void r(c);
  }
  s.done ? t(u) : Promise.resolve(u).then(n, a);
}
function pe(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, a) {
      var i = e.apply(t, r);
      function o(u) {
        ic(i, n, a, o, s, "next", u);
      }
      function s(u) {
        ic(i, n, a, o, s, "throw", u);
      }
      o(void 0);
    });
  };
}
var vo = { exports: {} },
  po = { exports: {} },
  oc;
function Df() {
  return (
    oc ||
      ((oc = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(po)),
    po.exports
  );
}
var ho = { exports: {} },
  go = { exports: {} },
  sc;
function Tf() {
  return (
    sc ||
      ((sc = 1),
      (function (e) {
        function t(r, n, a, i) {
          var o = Object.defineProperty;
          try {
            o({}, "", {});
          } catch {
            o = 0;
          }
          ((e.exports = t =
            function (u, c, l, d) {
              function f(p, h) {
                t(u, p, function (v) {
                  return this._invoke(p, h, v);
                });
              }
              c
                ? o
                  ? o(u, c, { value: l, enumerable: !d, configurable: !d, writable: !d })
                  : (u[c] = l)
                : (f("next", 0), f("throw", 1), f("return", 2));
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r, n, a, i));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(go)),
    go.exports
  );
}
var uc;
function Mf() {
  return (
    uc ||
      ((uc = 1),
      (function (e) {
        var t = Tf();
        function r() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var n,
            a,
            i = typeof Symbol == "function" ? Symbol : {},
            o = i.iterator || "@@iterator",
            s = i.toStringTag || "@@toStringTag";
          function u(g, b, m, w) {
            var O = b && b.prototype instanceof l ? b : l,
              _ = Object.create(O.prototype);
            return (
              t(
                _,
                "_invoke",
                (function (S, E, j) {
                  var D,
                    R,
                    T,
                    z = 0,
                    B = j || [],
                    V = !1,
                    J = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: G,
                      f: G.bind(n, 4),
                      d: function (X, N) {
                        return ((D = X), (R = 0), (T = n), (J.n = N), c);
                      },
                    };
                  function G(q, X) {
                    for (R = q, T = X, a = 0; !V && z && !N && a < B.length; a++) {
                      var N,
                        A = B[a],
                        be = J.p,
                        oe = A[2];
                      q > 3
                        ? (N = oe === X) &&
                          ((T = A[(R = A[4]) ? 5 : ((R = 3), 3)]), (A[4] = A[5] = n))
                        : A[0] <= be &&
                          ((N = q < 2 && be < A[1])
                            ? ((R = 0), (J.v = X), (J.n = A[1]))
                            : be < oe &&
                              (N = q < 3 || A[0] > X || X > oe) &&
                              ((A[4] = q), (A[5] = X), (J.n = oe), (R = 0)));
                    }
                    if (N || q > 1) return c;
                    throw ((V = !0), X);
                  }
                  return function (q, X, N) {
                    if (z > 1) throw TypeError("Generator is already running");
                    for (V && X === 1 && G(X, N), R = X, T = N; (a = R < 2 ? n : T) || !V; ) {
                      D || (R ? (R < 3 ? (R > 1 && (J.n = -1), G(R, T)) : (J.n = T)) : (J.v = T));
                      try {
                        if (((z = 2), D)) {
                          if ((R || (q = "next"), (a = D[q]))) {
                            if (!(a = a.call(D, T)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((T = a.value), R < 2 && (R = 0));
                          } else
                            (R === 1 && (a = D.return) && a.call(D),
                              R < 2 &&
                                ((T = TypeError(
                                  "The iterator does not provide a '" + q + "' method",
                                )),
                                (R = 1)));
                          D = n;
                        } else if ((a = (V = J.n < 0) ? T : S.call(E, J)) !== c) break;
                      } catch (A) {
                        ((D = n), (R = 1), (T = A));
                      } finally {
                        z = 1;
                      }
                    }
                    return { value: a, done: V };
                  };
                })(g, m, w),
                !0,
              ),
              _
            );
          }
          var c = {};
          function l() {}
          function d() {}
          function f() {}
          a = Object.getPrototypeOf;
          var p = [][o]
              ? a(a([][o]()))
              : (t((a = {}), o, function () {
                  return this;
                }),
                a),
            h = (f.prototype = l.prototype = Object.create(p));
          function v(g) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(g, f)
                : ((g.__proto__ = f), t(g, s, "GeneratorFunction")),
              (g.prototype = Object.create(h)),
              g
            );
          }
          return (
            (d.prototype = f),
            t(h, "constructor", f),
            t(f, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(f, s, "GeneratorFunction"),
            t(h),
            t(h, s, "Generator"),
            t(h, o, function () {
              return this;
            }),
            t(h, "toString", function () {
              return "[object Generator]";
            }),
            ((e.exports = r =
              function () {
                return { w: u, m: v };
              }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports))()
          );
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ho)),
    ho.exports
  );
}
var bo = { exports: {} },
  yo = { exports: {} },
  _o = { exports: {} },
  cc;
function Lf() {
  return (
    cc ||
      ((cc = 1),
      (function (e) {
        var t = Df(),
          r = Tf();
        function n(a, i) {
          function o(u, c, l, d) {
            try {
              var f = a[u](c),
                p = f.value;
              return p instanceof t
                ? i.resolve(p.v).then(
                    function (h) {
                      o("next", h, l, d);
                    },
                    function (h) {
                      o("throw", h, l, d);
                    },
                  )
                : i.resolve(p).then(
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
          var s;
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
              function (u, c, l) {
                function d() {
                  return new i(function (f, p) {
                    o(u, l, f, p);
                  });
                }
                return (s = s ? s.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(_o)),
    _o.exports
  );
}
var lc;
function $f() {
  return (
    lc ||
      ((lc = 1),
      (function (e) {
        var t = Mf(),
          r = Lf();
        function n(a, i, o, s, u) {
          return new r(t().w(a, i, o, s), u || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(yo)),
    yo.exports
  );
}
var dc;
function dg() {
  return (
    dc ||
      ((dc = 1),
      (function (e) {
        var t = $f();
        function r(n, a, i, o, s) {
          var u = t(n, a, i, o, s);
          return u.next().then(function (c) {
            return c.done ? c.value : u.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(bo)),
    bo.exports
  );
}
var mo = { exports: {} },
  fc;
function fg() {
  return (
    fc ||
      ((fc = 1),
      (function (e) {
        function t(r) {
          var n = Object(r),
            a = [];
          for (var i in n) a.unshift(i);
          return function o() {
            for (; a.length; ) if ((i = a.pop()) in n) return ((o.value = i), (o.done = !1), o);
            return ((o.done = !0), o);
          };
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(mo)),
    mo.exports
  );
}
var wo = { exports: {} },
  Oo = { exports: {} },
  vc;
function vg() {
  return (
    vc ||
      ((vc = 1),
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
      })(Oo)),
    Oo.exports
  );
}
var pc;
function pg() {
  return (
    pc ||
      ((pc = 1),
      (function (e) {
        var t = vg().default;
        function r(n) {
          if (n != null) {
            var a = n[(typeof Symbol == "function" && Symbol.iterator) || "@@iterator"],
              i = 0;
            if (a) return a.call(n);
            if (typeof n.next == "function") return n;
            if (!isNaN(n.length))
              return {
                next: function () {
                  return (n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n });
                },
              };
          }
          throw new TypeError(t(n) + " is not iterable");
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(wo)),
    wo.exports
  );
}
var hc;
function hg() {
  return (
    hc ||
      ((hc = 1),
      (function (e) {
        var t = Df(),
          r = Mf(),
          n = dg(),
          a = $f(),
          i = Lf(),
          o = fg(),
          s = pg();
        function u() {
          var c = r(),
            l = c.m(u),
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
                  abrupt: function (O, _) {
                    return b(m.a, p[O], _);
                  },
                  delegateYield: function (O, _, S) {
                    return ((g.resultName = _), b(m.d, s(O), S));
                  },
                  finish: function (O) {
                    return b(m.f, O);
                  },
                }),
                (b = function (O, _, S) {
                  ((m.p = g.prev), (m.n = g.next));
                  try {
                    return O(_, S);
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
          return ((e.exports = u =
            function () {
              return {
                wrap: function (b, m, w, O) {
                  return c.w(h(b), m, w, O && O.reverse());
                },
                isGeneratorFunction: f,
                mark: c.m,
                awrap: function (b, m) {
                  return new t(b, m);
                },
                AsyncIterator: i,
                async: function (b, m, w, O, _) {
                  return (f(m) ? a : n)(h(b), m, w, O, _);
                },
                keys: o,
                values: s,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = u), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(vo)),
    vo.exports
  );
}
var ko, gc;
function gg() {
  if (gc) return ko;
  gc = 1;
  var e = hg()();
  ko = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return ko;
}
var bg = gg();
const F = er(bg);
var ir = {},
  kr = {},
  Ia = {},
  bc;
function yg() {
  if (bc) return Ia;
  ((bc = 1), Object.defineProperty(Ia, "__esModule", { value: !0 }));
  const e = Zt();
  let t = class {
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
    setValues(n, a) {
      var i;
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
            n.source && o.user && this._setWarningState(a, o),
            e.SDKFlags.setFlags(this._sdkKey, (i = o.sdk_flags) !== null && i !== void 0 ? i : {})),
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
    getConfigList() {
      var n;
      return !((n = this._values) === null || n === void 0) && n.dynamic_configs
        ? Object.values(this._values.dynamic_configs).map((a) => a.name)
        : [];
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
      const i = {};
      return (
        a.user && (i.user = a.user),
        a.sdkInfo && (i.generatorSDKInfo = a.sdkInfo),
        (i.lcut = a.time),
        i
      );
    }
    _getDetailedStoreResult(n, a) {
      let i = null;
      return (
        n && (i = n[a] ? n[a] : n[(0, e._DJB2)(a)]),
        { result: i, details: this._getDetails(i == null) }
      );
    }
    _setWarningState(n, a) {
      var i, o;
      const s = e.StableID.get(this._sdkKey);
      if (
        ((i = n.customIDs) === null || i === void 0 ? void 0 : i.stableID) !== s &&
        ((!((o = n.customIDs) === null || o === void 0) && o.stableID) || s)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in a) {
        const u = a.user,
          c = Object.assign(Object.assign({}, n), {
            analyticsOnlyMetadata: void 0,
            privateAttributes: void 0,
          });
        (0, e._getFullUserHash)(c) !== (0, e._getFullUserHash)(u) &&
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
      var a, i;
      const o = this.getCurrentSourceDetails();
      let s = o.reason;
      const u = (a = o.warnings) !== null && a !== void 0 ? a : [];
      (this._source === "Bootstrap" && u.length > 0 && (s = s + u[0]),
        s !== "Uninitialized" &&
          s !== "NoValues" &&
          (s = `${s}:${n ? "Unrecognized" : "Recognized"}`));
      const c =
        this._source === "Bootstrap" && (i = this._bootstrapMetadata) !== null && i !== void 0
          ? i
          : void 0;
      return (c && (o.bootstrapMetadata = c), Object.assign(Object.assign({}, o), { reason: s }));
    }
  };
  return ((Ia.default = t), Ia);
}
var Sr = {},
  Rn = {},
  yc;
function _g() {
  if (yc) return Rn;
  ((yc = 1),
    Object.defineProperty(Rn, "__esModule", { value: !0 }),
    (Rn._resolveDeltasResponse = void 0));
  const e = Zt(),
    t = 2;
  function r(o, s) {
    const u = (0, e._typedJsonParse)(s, "checksum", "DeltasEvaluationResponse");
    if (!u) return { hadBadDeltaChecksum: !0 };
    const c = n(o, u),
      l = a(c),
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
  Rn._resolveDeltasResponse = r;
  function n(o, s) {
    return Object.assign(Object.assign(Object.assign({}, o), s), {
      feature_gates: Object.assign(Object.assign({}, o.feature_gates), s.feature_gates),
      layer_configs: Object.assign(Object.assign({}, o.layer_configs), s.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, o.dynamic_configs), s.dynamic_configs),
    });
  }
  function a(o) {
    const s = o;
    return (
      i(o.deleted_gates, s.feature_gates),
      delete s.deleted_gates,
      i(o.deleted_configs, s.dynamic_configs),
      delete s.deleted_configs,
      i(o.deleted_layers, s.layer_configs),
      delete s.deleted_layers,
      s
    );
  }
  function i(o, s) {
    o?.forEach((u) => {
      delete s[u];
    });
  }
  return Rn;
}
var _c;
function Nf() {
  if (_c) return Sr;
  _c = 1;
  var e =
    (Sr && Sr.__awaiter) ||
    function (a, i, o, s) {
      function u(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(h) {
          try {
            p(s.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(s.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? c(h.value) : u(h.value).then(d, f);
        }
        p((s = s.apply(a, i || [])).next());
      });
    };
  Object.defineProperty(Sr, "__esModule", { value: !0 });
  const t = Zt(),
    r = _g();
  class n extends t.NetworkCore {
    constructor(i, o) {
      super(i, o);
      const s = i?.networkConfig;
      ((this._option = i),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          s?.initializeUrl,
          s?.api,
          s?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(i, o, s, u, c) {
      return e(this, void 0, void 0, function* () {
        var l, d, f, p, h, v;
        const g = o ? (0, t._typedJsonParse)(o, "has_updates", "InitializeResponse") : null;
        let b = {
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
              (h = (p = this._option) === null || p === void 0 ? void 0 : p.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && v !== void 0
              ? v
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: c && !m ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && c ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: m ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(i, g, b, s);
      });
    }
    _fetchEvaluations(i, o, s, u) {
      return e(this, void 0, void 0, function* () {
        var c, l;
        const d = yield this.post({
          sdkKey: i,
          urlConfig: this._initializeUrlConfig,
          data: s,
          retries: 2,
          isStatsigEncodable: !0,
          priority: u,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (c = d?.body) !== null && c !== void 0 ? c : null;
        if (
          o?.has_updates !== !0 ||
          ((l = d.body) === null || l === void 0 ? void 0 : l.includes('"is_delta":true')) !== !0 ||
          s.deltasResponseRequested !== !0
        )
          return d.body;
        const f = (0, r._resolveDeltasResponse)(o, d.body);
        return typeof f == "string"
          ? f
          : this._fetchEvaluations(
              i,
              o,
              Object.assign(Object.assign(Object.assign({}, s), f), {
                deltasResponseRequested: !1,
              }),
              u,
            );
      });
    }
  }
  return ((Sr.default = n), Sr);
}
var Pn = {},
  mc;
function mg() {
  if (mc) return Pn;
  ((mc = 1),
    Object.defineProperty(Pn, "__esModule", { value: !0 }),
    (Pn._makeParamStoreGetter = void 0));
  const e = Zt(),
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
  function i(l, d, f) {
    return l.getFeatureGate(d.gate_name, r(f) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function o(l, d, f, p) {
    const v = l.getDynamicConfig(d.config_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function s(l, d, f, p) {
    const v = l.getExperiment(d.experiment_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function u(l, d, f, p) {
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
          return a(v);
        case "gate":
          return i(l, v, f);
        case "dynamic_config":
          return o(l, v, h, f);
        case "experiment":
          return s(l, v, h, f);
        case "layer":
          return u(l, v, h, f);
        default:
          return h;
      }
    };
  }
  return ((Pn._makeParamStoreGetter = c), Pn);
}
var or = {},
  wc;
function wg() {
  if (wc) return or;
  wc = 1;
  var e =
    (or && or.__awaiter) ||
    function (a, i, o, s) {
      function u(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(h) {
          try {
            p(s.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(s.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? c(h.value) : u(h.value).then(d, f);
        }
        p((s = s.apply(a, i || [])).next());
      });
    };
  (Object.defineProperty(or, "__esModule", { value: !0 }),
    (or.StatsigEvaluationsDataAdapter = void 0));
  const t = Zt(),
    r = Nf();
  let n = class extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(i, o, s) {
      (super.attach(i, o, s),
        s !== null && s instanceof r.default
          ? (this._network = s)
          : (this._network = new r.default(o ?? {})));
    }
    getDataAsync(i, o, s) {
      return this._getDataAsyncImpl(i, (0, t._normalizeUser)(o, this._options), s);
    }
    prefetchData(i, o) {
      return this._prefetchDataImpl(i, o);
    }
    setData(i) {
      const o = (0, t._typedJsonParse)(i, "has_updates", "data");
      o && "user" in o
        ? super.setData(i, o.user)
        : t.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(i, o) {
      super.setData(i, o);
    }
    _fetchFromNetwork(i, o, s, u) {
      return e(this, void 0, void 0, function* () {
        var c;
        const l = yield (c = this._network) === null || c === void 0
          ? void 0
          : c.fetchEvaluations(this._getSdkKey(), i, s?.priority, o, u);
        return l ?? null;
      });
    }
    _getCacheKey(i) {
      var o;
      const s = (0, t._getStorageKey)(
        this._getSdkKey(),
        i,
        (o = this._options) === null || o === void 0 ? void 0 : o.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${s}`;
    }
    _isCachedResultValidFor204(i, o) {
      return i.fullUserHash != null && i.fullUserHash === (0, t._getFullUserHash)(o);
    }
  };
  return ((or.StatsigEvaluationsDataAdapter = n), or);
}
var Oc;
function Og() {
  if (Oc) return kr;
  Oc = 1;
  var e =
    (kr && kr.__awaiter) ||
    function (s, u, c, l) {
      function d(f) {
        return f instanceof c
          ? f
          : new c(function (p) {
              p(f);
            });
      }
      return new (c || (c = Promise))(function (f, p) {
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
        g((l = l.apply(s, u || [])).next());
      });
    };
  Object.defineProperty(kr, "__esModule", { value: !0 });
  const t = Zt(),
    r = yg(),
    n = Nf(),
    a = mg(),
    i = wg();
  let o = class Jo extends t.StatsigClientBase {
    static instance(u) {
      const c = (0, t._getStatsigGlobal)().instance(u);
      return c instanceof Jo
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Jo(u ?? "", {}));
    }
    constructor(u, c, l = null) {
      var d, f;
      t.SDKType._setClientType(u, "javascript-client");
      const p = new n.default(l, (v) => {
        this.$emt(v);
      });
      (super(
        u,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new i.StatsigEvaluationsDataAdapter(),
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
        (this._store = new r.default(u)),
        (this._network = p),
        (this._user = this._configureUser(c, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (f = l?.plugins) !== null && f !== void 0 ? f : [];
      for (const v of h) v.bind(this);
    }
    initializeSync(u) {
      var c;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((c = this._store.getWarnings()) !== null && c !== void 0 ? c : []),
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
    updateUserSync(u, c) {
      const l = performance.now();
      try {
        return this._updateUserSyncImpl(u, c, l);
      } catch (d) {
        const f = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(f, l);
      }
    }
    _updateUserSyncImpl(u, c, l) {
      var d;
      const f = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(u);
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
    updateUserAsync(u, c) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(u, c);
        } catch (d) {
          const f = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(f, l);
        }
      });
    }
    _updateUserAsyncImpl(u, c) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(u);
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
    checkGate(u, c) {
      return this.getFeatureGate(u, c).value;
    }
    logEvent(u, c, l) {
      const d = typeof u == "string" ? { eventName: u, value: c, metadata: l } : u;
      (this.$emt({ name: "log_event_called", event: d }),
        this._logger.enqueue(
          Object.assign(Object.assign({}, d), { user: this._user, time: Date.now() }),
        ));
    }
    updateUserWithAnalyticsOnlyMetadata(u) {
      this._user = this._configureUser(
        Object.assign(Object.assign({}, this._user), { analyticsOnlyMetadata: u }),
        this._options,
      );
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
    _createErrorUpdateDetails(u, c) {
      var l;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - c,
        u,
        null,
        [...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : [])],
      );
    }
    _finalizeUpdate(u) {
      (this._store.finalize(), this._setStatus("Ready", u));
    }
    _runPostUpdate(u, c) {
      this.dataAdapter.getDataAsync(u, c, { priority: "low" }).catch((l) => {
        t.Log.error("An error occurred after update.", l);
      });
    }
    _resetForUser(u) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(u, this._options)));
    }
    _configureUser(u, c) {
      var l, d, f;
      const p = (0, t._normalizeUser)(u, c),
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
    _getFeatureGateImpl(u, c) {
      var l, d;
      const { result: f, details: p } = this._store.getGate(u),
        h = (0, t._makeFeatureGate)(u, p, f),
        v =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, c),
        g = v ?? h;
      return (
        this._enqueueExposure(
          u,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(u, c) {
      var l, d;
      const { result: f, details: p } = this._store.getConfig(u),
        h = (0, t._makeDynamicConfig)(u, p, f),
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
          u,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(u, c) {
      var l, d, f, p;
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
      const b =
          (p =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || p === void 0
            ? void 0
            : p.call(f, g, this._user, c),
        m = b ?? g;
      return (
        this._enqueueExposure(
          u,
          (0, t._createConfigExposure)(this._user, m, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: m }),
        m
      );
    }
    _getConfigListImpl() {
      return this._store.getConfigList();
    }
    _getLayerImpl(u, c) {
      var l, d, f;
      const { result: p, details: h } = this._store.getLayer(u),
        v = (0, t._makeLayer)(u, h, p),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, v, this._user, c);
      c?.disableExposureLog && this._logger.incrementNonExposureCount(u);
      const b = (0, t._mergeOverride)(
        v,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : v.__value,
        (m) => {
          c?.disableExposureLog ||
            this._enqueueExposure(
              u,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                m,
                this._store.getExposureMapping(),
              ),
              c,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: b }), b);
    }
    _getParameterStoreImpl(u, c) {
      var l, d;
      const { result: f, details: p } = this._store.getParamStore(u);
      this._logger.incrementNonExposureCount(u);
      const h = {
          name: u,
          details: p,
          __configuration: f,
          get: (0, a._makeParamStoreGetter)(this, f, c),
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
          (h.get = (0, a._makeParamStoreGetter)(this, v.config, c))),
        h
      );
    }
  };
  return ((kr.default = o), kr);
}
var kc;
function kg() {
  return (
    kc ||
      ((kc = 1),
      (function (e) {
        var t =
            (ir && ir.__createBinding) ||
            (Object.create
              ? function (o, s, u, c) {
                  c === void 0 && (c = u);
                  var l = Object.getOwnPropertyDescriptor(s, u);
                  ((!l || ("get" in l ? !s.__esModule : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return s[u];
                      },
                    }),
                    Object.defineProperty(o, c, l));
                }
              : function (o, s, u, c) {
                  (c === void 0 && (c = u), (o[c] = s[u]));
                }),
          r =
            (ir && ir.__exportStar) ||
            function (o, s) {
              for (var u in o)
                u !== "default" && !Object.prototype.hasOwnProperty.call(s, u) && t(s, o, u);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Zt(),
          a = Og();
        ((e.StatsigClient = a.default), r(Zt(), e));
        const i = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = i;
      })(ir)),
    ir
  );
}
var ot = kg(),
  So = { exports: {} },
  Sc;
function Sg() {
  return (
    Sc ||
      ((Sc = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function a(u, c, l) {
          ((this.fn = u), (this.context = c), (this.once = l || !1));
        }
        function i(u, c, l, d, f) {
          if (typeof l != "function") throw new TypeError("The listener must be a function");
          var p = new a(l, d || u, f),
            h = r ? r + c : c;
          return (
            u._events[h]
              ? u._events[h].fn
                ? (u._events[h] = [u._events[h], p])
                : u._events[h].push(p)
              : ((u._events[h] = p), u._eventsCount++),
            u
          );
        }
        function o(u, c) {
          --u._eventsCount === 0 ? (u._events = new n()) : delete u._events[c];
        }
        function s() {
          ((this._events = new n()), (this._eventsCount = 0));
        }
        ((s.prototype.eventNames = function () {
          var c = [],
            l,
            d;
          if (this._eventsCount === 0) return c;
          for (d in (l = this._events)) t.call(l, d) && c.push(r ? d.slice(1) : d);
          return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(l)) : c;
        }),
          (s.prototype.listeners = function (c) {
            var l = r ? r + c : c,
              d = this._events[l];
            if (!d) return [];
            if (d.fn) return [d.fn];
            for (var f = 0, p = d.length, h = new Array(p); f < p; f++) h[f] = d[f].fn;
            return h;
          }),
          (s.prototype.listenerCount = function (c) {
            var l = r ? r + c : c,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (s.prototype.emit = function (c, l, d, f, p, h) {
            var v = r ? r + c : c;
            if (!this._events[v]) return !1;
            var g = this._events[v],
              b = arguments.length,
              m,
              w;
            if (g.fn) {
              switch ((g.once && this.removeListener(c, g.fn, void 0, !0), b)) {
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
              var O = g.length,
                _;
              for (w = 0; w < O; w++)
                switch ((g[w].once && this.removeListener(c, g[w].fn, void 0, !0), b)) {
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
                    if (!m) for (_ = 1, m = new Array(b - 1); _ < b; _++) m[_ - 1] = arguments[_];
                    g[w].fn.apply(g[w].context, m);
                }
            }
            return !0;
          }),
          (s.prototype.on = function (c, l, d) {
            return i(this, c, l, d, !1);
          }),
          (s.prototype.once = function (c, l, d) {
            return i(this, c, l, d, !0);
          }),
          (s.prototype.removeListener = function (c, l, d, f) {
            var p = r ? r + c : c;
            if (!this._events[p]) return this;
            if (!l) return (o(this, p), this);
            var h = this._events[p];
            if (h.fn) h.fn === l && (!f || h.once) && (!d || h.context === d) && o(this, p);
            else {
              for (var v = 0, g = [], b = h.length; v < b; v++)
                (h[v].fn !== l || (f && !h[v].once) || (d && h[v].context !== d)) && g.push(h[v]);
              g.length ? (this._events[p] = g.length === 1 ? g[0] : g) : o(this, p);
            }
            return this;
          }),
          (s.prototype.removeAllListeners = function (c) {
            var l;
            return (
              c
                ? ((l = r ? r + c : c), this._events[l] && o(this, l))
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (s.prototype.off = s.prototype.removeListener),
          (s.prototype.addListener = s.prototype.on),
          (s.prefixed = r),
          (s.EventEmitter = s),
          (e.exports = s));
      })(So)),
    So.exports
  );
}
var Eg = Sg();
const xg = er(Eg);
function Ec(e, t) {
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
function Wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ec(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ec(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Da = "@all-features",
  Cg = (function () {
    function e() {
      (de(this, e), x(this, "eventToValue", new Map()), (this.emitter = new xg()));
    }
    return fe(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, i) {
          var o = this,
            s = a(r, Wt(Wt({}, i), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, s);
          var u = function () {
            var l = a(r, Wt(Wt({}, i), {}, { fireGateExposure: !1 })),
              d = o.eventToValue.get(n);
            d !== l && (o.eventToValue.set(n, l), n(l));
          };
          return (
            this.emitter.on(r, u),
            function () {
              o.emitter.off(r, u);
            }
          );
        },
      },
      {
        key: "onExperimentValueUpdated",
        value: function (r, n, a, i, o, s) {
          var u = this,
            c = "".concat(r, ".").concat(n),
            l = o(r, n, a, Wt(Wt({}, s), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(i) === void 0 && this.eventToValue.set(i, l);
          var d = function () {
            var p = o(r, n, a, Wt(Wt({}, s), {}, { fireExperimentExposure: !1 })),
              h = u.eventToValue.get(i);
            h !== p && (u.eventToValue.set(i, p), i(p));
          };
          return (
            this.emitter.on(c, d),
            function () {
              u.emitter.off(c, d);
            }
          );
        },
      },
      {
        key: "onAnyUpdated",
        value: function (r) {
          var n = this;
          return (
            this.emitter.on(Da, r),
            function () {
              n.emitter.off(Da, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(Da),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== Da;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  Rg = "fedramp-moderate";
function Pg() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === Rg;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Rs = (function (e) {
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
  Yn = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  sa = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  Ag = [
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
function xc(e, t) {
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
function Xo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ta = function (t) {
    return Xo({ perimeter: Pg() ? sa.FEDRAMP_MODERATE : sa.COMMERCIAL }, t);
  },
  An = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var i = function (f, p) {
      var h = K(f, 1),
        v = h[0],
        g = K(p, 1),
        b = g[0];
      return v.localeCompare(b);
    };
    (n.sort(i), a.sort(i));
    for (var o = 0; o < n.length; o++) {
      var s = K(n[o], 2),
        u = s[1],
        c = K(a[o], 2),
        l = c[1];
      if (u !== l) return !1;
    }
    return !0;
  },
  Cc = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  jg = function (t) {
    var r = t.api,
      n = t.disableCurrentPageLogging,
      a = t.loggingIntervalMillis,
      i = t.loggingBufferMaxSize,
      o = t.localMode,
      s = t.eventLoggingApi,
      u = t.eventLoggingApiForRetries,
      c = t.disableLocalStorage,
      l = t.ignoreWindowUndefined,
      d = t.disableAllLogging;
    (t.initTimeoutMs,
      t.disableNetworkKeepalive,
      t.overrideStableID,
      t.disableErrorLogging,
      t.disableAutoMetricsLogging);
    var f = ae(t, Ag);
    return Xo(
      Xo({}, f),
      {},
      {
        networkConfig: {
          api: r,
          logEventUrl: s ? s + "rgstr" : void 0,
          logEventFallbackUrls: u ? [u] : void 0,
          preventAllNetworkTraffic: o || (!l && typeof window > "u"),
        },
        includeCurrentPageUrlWithEvents: !n,
        loggingIntervalMs: a,
        loggingBufferMaxSize: i,
        disableStorage: c === void 0 ? o : c,
        disableLogging: d === void 0 ? o : d,
      },
    );
  },
  Ig = Object.entries(Rs).map(function (e) {
    var t = K(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  Ff = function (t) {
    var r,
      n,
      a,
      i = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = Ig.find(function (o) {
            var s = K(o, 1),
              u = s[0];
            return i.includes(u);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Rs.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  Zo = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  Rc = (function () {
    function e(t, r, n, a) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (de(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = i),
        (this._allocatedExperimentName = o),
        (this._evaluationDetails = a),
        (this._onDefaultValueFallback = s));
    }
    return fe(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var i,
              o = this.getValue(r, n);
            if (o == null) return n;
            var s = Array.isArray(n) ? "array" : je(n),
              u = Array.isArray(o) ? "array" : je(o);
            if (a) {
              var c;
              return a(o)
                ? (this.fireExposure(r), o)
                : ((c = this._onDefaultValueFallback) === null ||
                    c === void 0 ||
                    c.call(this, this, r, s, u),
                  n);
            }
            return n == null || s === u
              ? (this.fireExposure(r), o)
              : ((i = this._onDefaultValueFallback) === null ||
                  i === void 0 ||
                  i.call(this, this, r, s, u),
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
              i,
              o = new e(
                r.name,
                r.value,
                r.ruleID,
                Ff(r.details),
                Zo(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                (i = r.groupName) !== null && i !== void 0 ? i : void 0,
              );
            return ((o.experiment = r), o);
          },
        },
      ],
    );
  })(),
  Pc = (function () {
    function e(t, r, n, a) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        u = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        c = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (de(this, e),
        (this._logParameterFunction = i),
        (this._name = t),
        (this._value = JSON.parse(JSON.stringify(r ?? {}))),
        (this._ruleID = n ?? ""),
        (this._evaluationDetails = a),
        (this._secondaryExposures = o),
        (this._undelegatedSecondaryExposures = s),
        (this._allocatedExperimentName = u),
        (this._explicitParameters = c));
    }
    return fe(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var i = this,
              o = this._value[r];
            if (o == null) return n;
            var s = function () {
              return (i._logLayerParameterExposure(r), o);
            };
            return a
              ? a(o)
                ? s()
                : n
              : n == null || (je(o) === je(n) && Array.isArray(n) === Array.isArray(o))
                ? s()
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
              i,
              o,
              s,
              u,
              c = new e(
                r.name,
                r.__value,
                r.ruleID,
                Ff(r.details),
                function (l, d) {
                  return r.get(d);
                },
                Zo(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                Zo(
                  (i =
                    (o = r.__evaluation) === null || o === void 0
                      ? void 0
                      : o.undelegated_secondary_exposures) !== null && i !== void 0
                    ? i
                    : [],
                ),
                (s = r.__evaluation) === null || s === void 0
                  ? void 0
                  : s.allocated_experiment_name,
                (u = r.__evaluation) === null || u === void 0 ? void 0 : u.explicit_parameters,
              );
            return c;
          },
        },
      ],
    );
  })(),
  Fr = "0.0.0-development";
function Dg(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Bf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Bf = function () {
    return !!e;
  })();
}
function Tg(e, t, r) {
  if (Bf()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && oa(a, r.prototype), a);
}
function Qo(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Qo = function (n) {
      if (n === null || !Dg(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return Tg(n, arguments, Y(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        oa(a, n)
      );
    }),
    Qo(e)
  );
}
function Mg(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, zf() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function zf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (zf = function () {
    return !!e;
  })();
}
var Ac = (function (e) {
  function t(r) {
    return (de(this, t), Mg(this, t, [r]));
  }
  return (ze(t, e), fe(t));
})(Qo(Error));
function jc(e, t) {
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
function Lg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var $g = 5e3,
  Ng = "https://api.atlassian.com/flags",
  Fg = "https://api.stg.atlassian.com/flags",
  Bg = "https://api.dev.atlassian.com/flags",
  zg = "https://api.stg.atlassian-us-gov-mod.com/flags",
  qg = "https://api.atlassian-us-gov-mod.com/flags",
  Ug = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  Vg = "oasis-stg.com/flags",
  Gg = "atlassian-isolated.net/flags",
  Hg = "/gateway/api/flags",
  Eo = (function () {
    function e() {
      de(this, e);
    }
    return fe(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = pe(
            F.mark(function n(a) {
              var i, o;
              return F.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return (
                          (i = a.targetApp),
                          (o = "/api/v2/frontend/clientSdkKey/".concat(i)),
                          (u.prev = 2),
                          (u.next = 5),
                          this.fetchRequest(o, "GET", a)
                        );
                      case 5:
                        return u.abrupt("return", u.sent);
                      case 8:
                        if (((u.prev = 8), (u.t0 = u.catch(2)), !(u.t0 instanceof Error))) {
                          u.next = 12;
                          break;
                        }
                        throw u.t0;
                      case 12:
                        throw Error("Failed to retrieve client sdk key");
                      case 13:
                      case "end":
                        return u.stop();
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
          var t = pe(
            F.mark(function n(a, i, o) {
              var s;
              return F.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          (s = { identifiers: i, customAttributes: o, targetApp: a.targetApp }),
                          (c.prev = 1),
                          (c.next = 4),
                          this.fetchRequest("/api/v2/frontend/experimentValues", "POST", a, s)
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
          function r(n, a, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "handleResponseError",
        value: (function () {
          var t = pe(
            F.mark(function n(a) {
              var i;
              return F.wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                      if (a.ok) {
                        s.next = 5;
                        break;
                      }
                      return ((s.next = 3), a.text());
                    case 3:
                      throw (
                        (i = s.sent),
                        new Ac(
                          "Non 2xx response status received, status: "
                            .concat(a.status, ", body: ")
                            .concat(JSON.stringify(i)),
                        )
                      );
                    case 5:
                      if (a.status !== 204) {
                        s.next = 7;
                        break;
                      }
                      throw new Ac("Unexpected 204 response");
                    case 7:
                    case "end":
                      return s.stop();
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
          var t = pe(
            F.mark(function n(a) {
              var i;
              return F.wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                      return ((s.next = 2), a.text());
                    case 2:
                      return ((i = s.sent), s.abrupt("return", JSON.parse(i)));
                    case 4:
                    case "end":
                      return s.stop();
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
            i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          if (n) return Hg;
          if (a === sa.FEDRAMP_MODERATE)
            switch (r) {
              case Yn.Production:
                return qg;
              case Yn.Staging:
                return zg;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === sa.COMMERCIAL)
            switch (r) {
              case Yn.Development:
                return Bg;
              case Yn.Staging:
                var o = this.getApiUrl(i);
                return o !== null ? o : Fg;
              default:
                var s = this.getApiUrl(i);
                return s !== null ? s : Ng;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = pe(
            F.mark(function n(a, i, o, s) {
              var u, c, l, d, f;
              return F.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (u = e.getBaseUrl(
                            o.environment,
                            o.useGatewayURL,
                            o.perimeter,
                            o.isolationContextId,
                          )),
                          (c = o.fetchTimeoutMs || $g),
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
                            "".concat(u).concat(a),
                            Lg(
                              {
                                method: i,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Fr,
                                  "X-API-KEY": o.apiKey,
                                },
                                signal: l,
                              },
                              s && { body: JSON.stringify(s) },
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
          function r(n, a, i, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "getApiUrl",
        value: function (r) {
          var n = this.getWindowLocation();
          if (n === void 0) return r ? Ug.replace("%s", r) : null;
          var a = n.protocol,
            i = n.hostname,
            o = i.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(a, "//api.").concat(o[1], ".").concat(Vg);
          var s = i.match(/([^.]+)\.atlassian-isolated\.net$/);
          return s ? "".concat(a, "//api.").concat(s[1], ".").concat(Gg) : null;
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
function Ic(e, t) {
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
function jn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ic(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ic(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Wg(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, qf() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function qf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (qf = function () {
    return !!e;
  })();
}
function Kg(e, t, r, n) {
  var a = ri(Y(e.prototype), t, r);
  return typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var Yg = (function (e) {
  function t() {
    var r;
    return (
      de(this, t),
      (r = Wg(this, t, ["NoFetchDataAdapter", "nofetch"])),
      x(r, "bootstrapResult", null),
      r
    );
  }
  return (
    ze(t, e),
    fe(t, [
      {
        key: "setBootstrapData",
        value: function (n) {
          this.bootstrapResult = n
            ? {
                source: "Bootstrap",
                data: JSON.stringify(n),
                receivedAt: Date.now(),
                stableID: ot.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = pe(
            F.mark(function a(i, o) {
              return F.wrap(function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                    case "end":
                      return u.stop();
                  }
              }, a);
            }),
          );
          function n(a, i) {
            return r.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: "getDataAsync",
        value: (function () {
          var r = pe(
            F.mark(function a(i, o, s) {
              return F.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return c.abrupt(
                          "return",
                          this.bootstrapResult &&
                            jn(
                              jn({}, this.bootstrapResult),
                              {},
                              { fullUserHash: ot._getFullUserHash(o) },
                            ),
                        );
                      case 1:
                      case "end":
                        return c.stop();
                    }
                },
                a,
                this,
              );
            }),
          );
          function n(a, i, o) {
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
            jn(jn({}, this.bootstrapResult), {}, { fullUserHash: ot._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = pe(
            F.mark(function a(i, o, s) {
              return F.wrap(function (c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                      return c.abrupt("return", null);
                    case 1:
                    case "end":
                      return c.stop();
                  }
              }, a);
            }),
          );
          function n(a, i, o) {
            return r.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: "_getCacheKey",
        value: function (n) {
          var a = ot._getStorageKey(this._getSdkKey(), n);
          return "".concat(ot.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(a);
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
          Kg(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = jn({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(ot.DataAdapterCore);
function Dc(e, t) {
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
function Ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Dc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Jg(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Xg(e)) || t) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (c) {
          throw c;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i,
    o = !0,
    s = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var c = r.next();
      return ((o = c.done), c);
    },
    e: function (c) {
      ((s = !0), (i = c));
    },
    f: function () {
      try {
        o || r.return == null || r.return();
      } finally {
        if (s) throw i;
      }
    },
  };
}
function Xg(e, t) {
  if (e) {
    if (typeof e == "string") return Tc(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Tc(e, t)
          : void 0
    );
  }
}
function Tc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var xo = "LocalOverride:Recognized",
  Zg = "STATSIG_OVERRIDES",
  Mc = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Er = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  We = function (t, r) {
    return r + ":" + t;
  },
  Qg = (function () {
    function e(t) {
      (de(this, e),
        (this._overrides = Er()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return fe(e, [
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
          for (var r = Er(), n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          for (var o = 0, s = a; o < s.length; o++) {
            for (
              var u = s[o],
                c = 0,
                l = Object.entries((d = u.gates) !== null && d !== void 0 ? d : {});
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
              var v = 0, g = Object.entries((b = u.configs) !== null && b !== void 0 ? b : {});
              v < g.length;
              v++
            ) {
              var b,
                m = K(g[v], 2),
                w = m[0],
                O = m[1];
              r.configs[w] = O;
            }
            for (
              var _ = 0, S = Object.entries((E = u.layers) !== null && E !== void 0 ? E : {});
              _ < S.length;
              _++
            ) {
              var E,
                j = K(S[_], 2),
                D = j[0],
                R = j[1];
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
            this.parseStoredOverrides(Mc),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Mc);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var i = a[n],
              o = new Set(Object.keys(i)),
              s = Jg(o),
              u;
            try {
              for (s.s(); !(u = s.n()).done; ) {
                var c = u.value,
                  l = He._DJB2(c);
                o.has(l) && delete i[l];
              }
            } catch (d) {
              s.e(d);
            } finally {
              s.f();
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
          for (var a = 0, i = Object.entries(n); a < i.length; a++)
            for (
              var o = K(i[a], 2), s = o[0], u = o[1], c = 0, l = Object.entries(u);
              c < l.length;
              c++
            ) {
              var d = K(l[c], 2),
                f = d[0],
                p = d[1];
              this._djb2Map.set(We(He._DJB2(f), s), p);
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
            this._djb2Map.set(We(He._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(We(He._DJB2(r), "gates")),
            this.saveOverrides());
        },
      },
      {
        key: "getGateOverride",
        value: function (r, n) {
          var a,
            i =
              (a = this._overrides.gates[r.name]) !== null && a !== void 0
                ? a
                : this._djb2Map.get(We(r.name, "gates"));
          return i == null
            ? null
            : Ce(Ce({}, r), {}, { value: i, details: Ce(Ce({}, r.details), {}, { reason: xo }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(We(He._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(We(He._DJB2(r), "configs")),
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
            this._djb2Map.set(We(He._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(We(He._DJB2(r), "configs")),
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
            this._djb2Map.set(We(He._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(We(He._DJB2(r), "layers")),
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
          var a,
            i =
              (a = this._overrides.layers[r.name]) !== null && a !== void 0
                ? a
                : this._djb2Map.get(We(r.name, "layers"));
          return i == null
            ? null
            : Ce(
                Ce({}, r),
                {},
                {
                  __value: i,
                  get: He._makeTypedGet(r.name, i),
                  details: Ce(Ce({}, r.details), {}, { reason: xo }),
                },
              );
        },
      },
      {
        key: "_getConfigOverride",
        value: function (r, n) {
          var a,
            i =
              (a = n[r.name]) !== null && a !== void 0
                ? a
                : this._djb2Map.get(We(r.name, "configs"));
          return i == null
            ? null
            : Ce(
                Ce({}, r),
                {},
                {
                  value: i,
                  get: He._makeTypedGet(r.name, i),
                  details: Ce(Ce({}, r.details), {}, { reason: xo }),
                },
              );
        },
      },
    ]);
  })(),
  eb = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function Lc(e, t) {
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
function Kt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Lc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var $c = "client-default-key",
  tb = "https://xp.atlassian.com/v1/rgstr",
  rb = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? Zg : n,
        i = r.overrideAdapter;
      (de(this, e),
        x(this, "initPromise", null),
        x(this, "initCompleted", !1),
        x(this, "initWithDefaults", !1),
        x(this, "hasCheckGateErrorOccurred", !1),
        x(this, "hasGetExperimentErrorOccurred", !1),
        x(this, "hasGetExperimentValueErrorOccurred", !1),
        x(this, "hasGetLayerErrorOccurred", !1),
        x(this, "hasGetLayerValueErrorOccurred", !1),
        x(this, "subscriptions", new Cg()),
        x(this, "dataAdapter", new Yg()),
        x(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = i || new Qg(a)));
    }
    return fe(e, [
      {
        key: "initialize",
        value: (function () {
          var t = pe(
            F.mark(function n(a, i, o) {
              var s = this,
                u,
                c;
              return F.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((u = Ta(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          An(u, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          d.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (c = performance.now()),
                          (this.initOptions = u),
                          (this.initPromise = this.init(u, i, o)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var f = performance.now(),
                                p = f - c;
                              s.fireClientEvent(c, p, "initialize", s.initCompleted, u.apiKey);
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
          function r(n, a, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initializeWithProvider",
        value: (function () {
          var t = pe(
            F.mark(function n(a, i, o, s) {
              var u = this,
                c,
                l;
              return F.wrap(
                function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        if (((c = Ta(a)), !this.initPromise)) {
                          f.next = 4;
                          break;
                        }
                        return (
                          An(c, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          f.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (l = performance.now()),
                          (this.initOptions = c),
                          (this.provider = i),
                          this.provider.setClientVersion(Fr),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(c, i, o, s)
                            .then(function () {
                              ((u.initCompleted = !0), (u.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var p = performance.now(),
                                h = p - l;
                              u.fireClientEvent(
                                l,
                                h,
                                "initializeWithProvider",
                                u.initCompleted,
                                i.getApiKey ? i.getApiKey() : void 0,
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
          function r(n, a, i, o) {
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
        value: function (r, n, a, i) {
          var o,
            s = this,
            u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
          (o = this.initOptions.analyticsWebClient) === null ||
            o === void 0 ||
            o
              .then(function (c) {
                var l = Kt(
                  {
                    targetApp: s.initOptions.targetApp,
                    clientVersion: Fr,
                    success: i,
                    startTime: r,
                    totalTime: n,
                  },
                  u && { apiKey: u },
                );
                c.sendOperationalEvent({
                  action: a,
                  actionSubject: "featureGatesClient",
                  attributes: l,
                  tags: ["measurement"],
                  source: "@atlaskit/feature-gate-js-client",
                });
              })
              .catch(function (c) {
                s.initOptions.environment !== Yn.Production &&
                  console.error("Analytics web client promise did not resolve", c);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = pe(
            F.mark(function n(a, i, o) {
              var s = this,
                u,
                c,
                l,
                d = arguments;
              return F.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (
                          ((u = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (c = Ta(a)),
                          !this.initPromise)
                        ) {
                          p.next = 5;
                          break;
                        }
                        return (
                          An(c, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          p.abrupt("return", this.initPromise)
                        );
                      case 5:
                        return (
                          Object.prototype.hasOwnProperty.call(u, "has_updates") ||
                            (u.has_updates = !0),
                          (l = performance.now()),
                          (this.initOptions = c),
                          (this.initPromise = this.initFromValues(c, i, o, u)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var h = performance.now(),
                                v = h - l;
                              s.fireClientEvent(l, v, "initializeFromValues", s.initCompleted);
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
          function r(n, a, i) {
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
          var t = pe(
            F.mark(function n(a, i, o) {
              var s, u;
              return F.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (s = Ta(a)),
                          (u = function () {
                            return Eo.fetchExperimentValues(s, i, o).then(function (f) {
                              var p = f.experimentValues,
                                h = f.customAttributes;
                              return { experimentValues: p, customAttributesFromFetch: h };
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(u, i, o)
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
          function r(n, a, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserWithProvider",
        value: (function () {
          var t = pe(
            F.mark(function n(a, i) {
              var o = this;
              return F.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        if ((this.assertInitialized(this.statsigClient), this.provider)) {
                          u.next = 3;
                          break;
                        }
                        throw new Error(
                          "Cannot update user using provider as the client was not initialised with a provider",
                        );
                      case 3:
                        return ((u.next = 5), this.provider.setProfile(this.initOptions, a, i));
                      case 5:
                        return (
                          (u.next = 7),
                          this.updateUserUsingInitializeValuesProducer(
                            function () {
                              return o.provider.getExperimentValues();
                            },
                            a,
                            i,
                          )
                        );
                      case 7:
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
        key: "updateUserWithValues",
        value: (function () {
          var t = pe(
            F.mark(function n(a, i) {
              var o,
                s,
                u = arguments;
              return F.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          (o = u.length > 2 && u[2] !== void 0 ? u[2] : {}),
                          this.assertInitialized(this.statsigClient),
                          (s = function () {
                            return Promise.resolve({
                              experimentValues: o,
                              customAttributesFromFetch: i,
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(s, a, i)
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
        key: "checkGate",
        value: function (r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          try {
            this.assertInitialized(this.statsigClient);
            var a = n.fireGateExposure,
              i = a === void 0 ? !0 : a;
            return this.statsigClient.checkGate(r, { disableExposureLog: !i });
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
              i = a === void 0 ? !0 : a;
            return Rc.fromExperiment(
              this.statsigClient.getExperiment(r, { disableExposureLog: !i }),
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
              new Rc(r, {}, "", { time: Date.now(), reason: Rs.Error })
            );
          }
        },
      },
      {
        key: "getExperimentValue",
        value: function (r, n, a) {
          var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            o = this.getExperiment(r, i);
          try {
            var s = i.typeGuard;
            return o.get(n, a, s);
          } catch (u) {
            return (
              this.hasGetExperimentValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the experiment value. Only the first occurrence of this error is logged.",
                  experimentName: r,
                  defaultValue: a,
                  options: i,
                  error: u,
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
          return An(this.currentIdentifiers, r) && An(this.currentAttributes, n);
        },
      },
      {
        key: "onGateUpdated",
        value: function (r, n) {
          var a = this,
            i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            o = function (u) {
              var c = i.fireGateExposure,
                l = c === void 0 ? !0 : c;
              l && a.manuallyLogGateExposure(r);
              try {
                n(u);
              } catch (d) {
                console.warn(
                  "Error calling callback for gate ".concat(r, " with value ").concat(u),
                  d,
                );
              }
            };
          return this.subscriptions.onGateUpdated(r, o, this.checkGate.bind(this), i);
        },
      },
      {
        key: "onExperimentValueUpdated",
        value: function (r, n, a, i) {
          var o = this,
            s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {},
            u = function (l) {
              var d = s.fireExperimentExposure,
                f = d === void 0 ? !0 : d;
              f && o.manuallyLogExperimentExposure(r);
              try {
                i(l);
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
            u,
            this.getExperimentValue.bind(this),
            s,
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
          var t = pe(
            F.mark(function n(a, i, o) {
              var s, u, c, l, d, f, p, h;
              return F.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = Kt({}, a)),
                          (g.prev = 1),
                          (l = Eo.fetchClientSdk(a).then(function (b) {
                            return (s.sdkKey = b.clientSdkKey);
                          })),
                          (d = Eo.fetchExperimentValues(a, i, o)),
                          (g.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((f = g.sent),
                          (p = K(f, 2)),
                          (h = p[1]),
                          (u = h.experimentValues),
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
                          this.initFromValues(s, i, o)
                        );
                      case 19:
                        throw g.t0;
                      case 20:
                        return g.abrupt("return", this.initFromValues(s, i, c, u));
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
          function r(n, a, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initWithProvider",
        value: (function () {
          var t = pe(
            F.mark(function n(a, i, o, s) {
              var u, c, l, d, f, p, h, v;
              return F.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (u = Kt(Kt({}, a), {}, { disableCurrentPageLogging: !0 })),
                          (b.prev = 1),
                          (b.next = 4),
                          i.setProfile(a, o, s)
                        );
                      case 4:
                        return (
                          (d = i.getClientSdkKey().then(function (m) {
                            return (u.sdkKey = m);
                          })),
                          (f = i.getExperimentValues()),
                          (b.next = 8),
                          Promise.all([d, f])
                        );
                      case 8:
                        ((p = b.sent),
                          (h = K(p, 2)),
                          (v = h[1]),
                          (c = v.experimentValues),
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
                          this.initFromValues(u, o, s)
                        );
                      case 21:
                        throw b.t0;
                      case 22:
                        return b.abrupt("return", this.initFromValues(u, o, l, c));
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
          function r(n, a, i, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initFromValues",
        value: (function () {
          var t = pe(
            F.mark(function n(a, i, o) {
              var s,
                u,
                c,
                l,
                d,
                f,
                p,
                h = arguments;
              return F.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (u = h.length > 3 && h[3] !== void 0 ? h[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = i),
                          (this.currentAttributes = o),
                          (c = jg(a)),
                          c.sdkKey || (c.sdkKey = $c),
                          ((s = c.networkConfig) !== null && s !== void 0 && s.logEventUrl) ||
                            (c.networkConfig = Kt(
                              Kt({}, c.networkConfig),
                              {},
                              { logEventUrl: tb },
                            )),
                          c.perimeter === sa.FEDRAMP_MODERATE && (c.disableLogging = !0),
                          (l = c.sdkKey),
                          (d = c.environment),
                          c.updateUserCompletionCallback,
                          c.perimeter,
                          (f = ae(c, eb)),
                          (this.user = Cc(i, o)),
                          (p = Kt(
                            Kt({}, f),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: ot.LogEventCompressionMode.Forced,
                            },
                          )),
                          i.stableId
                            ? ot.StableID.setOverride(i.stableId, l)
                            : (p.disableStableID = !0),
                          (g.prev = 12),
                          (this.statsigClient = new ot.StatsigClient(l, this.user, p)),
                          this.dataAdapter.setBootstrapData(u),
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
                          (this.statsigClient = new ot.StatsigClient($c, this.user, p)),
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
          function r(n, a, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserUsingInitializeValuesProducer",
        value: (function () {
          var t = pe(
            F.mark(function n(a, i, o) {
              var s = this,
                u,
                c,
                l;
              return F.wrap(
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
                        if (!this.isCurrentUser(i, o)) {
                          f.next = 5;
                          break;
                        }
                        return f.abrupt("return", this.initPromise);
                      case 5:
                        return (
                          (u = this.initPromise),
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
                          (c = a()),
                          (l = this.updateStatsigClientUser(c, i, o)),
                          (this.initPromise = l.catch(
                            pe(
                              F.mark(function p() {
                                return F.wrap(function (v) {
                                  for (;;)
                                    switch ((v.prev = v.next)) {
                                      case 0:
                                        if (((s.initPromise = u), !s.provider)) {
                                          v.next = 4;
                                          break;
                                        }
                                        return (
                                          (v.next = 4),
                                          s.provider.setProfile(
                                            s.initOptions,
                                            s.currentIdentifiers,
                                            s.currentAttributes,
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
          function r(n, a, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateStatsigClientUser",
        value: (function () {
          var t = pe(
            F.mark(function n(a, i, o) {
              var s, u, c, l, d, f, p, h, v;
              return F.wrap(
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
                        ((c = b.sent), (l = Cc(i, c.customAttributesFromFetch)), (b.next = 13));
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
                          this.dataAdapter.setBootstrapData(c.experimentValues),
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
                          ((s = this.initOptions) === null ||
                            s === void 0 ||
                            (u = s.updateUserCompletionCallback) === null ||
                            u === void 0 ||
                            u.call(s, h, v),
                          !h)
                        ) {
                          b.next = 34;
                          break;
                        }
                        ((this.currentIdentifiers = i),
                          (this.currentAttributes = o),
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
          function r(n, a, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "getPackageVersion",
        value: function () {
          return Fr;
        },
      },
      {
        key: "getLayer",
        value: function (r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          try {
            this.assertInitialized(this.statsigClient);
            var a = n.fireLayerExposure,
              i = a === void 0 ? !0 : a;
            return Pc.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !i }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Pc.fromLayer(ot._makeLayer(r, { reason: "Error" }, null))
            );
          }
        },
      },
      {
        key: "getLayerValue",
        value: function (r, n, a) {
          var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            o = this.getLayer(r, i);
          try {
            var s = i.typeGuard;
            return o.get(n, a, s);
          } catch (u) {
            return (
              this.hasGetLayerValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer value. Only the first occurrence of this error is logged.",
                  layerName: r,
                  defaultValue: a,
                  options: i,
                  error: u,
                }),
                (this.hasGetLayerValueErrorOccurred = !0)),
              a
            );
          }
        },
      },
    ]);
  })(),
  I,
  U = (function () {
    function e() {
      de(this, e);
    }
    return fe(e, null, [
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
I = U;
x(U, "client", new rb());
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
x(U, "getExperimentValue", function (e, t, r, n) {
  try {
    if (
      typeof window < "u" &&
      window.__CRITERION__ &&
      typeof window.__CRITERION__.getExperimentValueOverride == "function"
    ) {
      var a = window.__CRITERION__.getExperimentValueOverride(e, t);
      if (a != null) return a;
    }
  } catch (i) {
    return (
      I.hasGetExperimentValueErrorOccurred ||
        (console.warn({
          msg: "An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.",
          experimentName: e,
          defaultValue: r,
          options: n,
          error: i,
        }),
        (I.hasGetExperimentValueErrorOccurred = !0)),
      r
    );
  }
  return I.client.getExperimentValue(e, t, r, n);
});
x(U, "initializeCalled", I.client.initializeCalled.bind(I.client));
x(U, "initializeCompleted", I.client.initializeCompleted.bind(I.client));
x(U, "initialize", I.client.initialize.bind(I.client));
x(U, "initializeWithProvider", I.client.initializeWithProvider.bind(I.client));
x(U, "initializeFromValues", I.client.initializeFromValues.bind(I.client));
x(U, "manuallyLogGateExposure", I.client.manuallyLogGateExposure.bind(I.client));
x(U, "getExperiment", I.client.getExperiment.bind(I.client));
x(U, "manuallyLogExperimentExposure", I.client.manuallyLogExperimentExposure.bind(I.client));
x(U, "manuallyLogLayerExposure", I.client.manuallyLogLayerExposure.bind(I.client));
x(U, "shutdownStatsig", I.client.shutdownStatsig.bind(I.client));
x(U, "overrideGate", I.client.overrideGate.bind(I.client));
x(U, "clearGateOverride", I.client.clearGateOverride.bind(I.client));
x(U, "overrideConfig", I.client.overrideConfig.bind(I.client));
x(U, "clearConfigOverride", I.client.clearConfigOverride.bind(I.client));
x(U, "setOverrides", I.client.setOverrides.bind(I.client));
x(U, "getOverrides", I.client.getOverrides.bind(I.client));
x(U, "clearAllOverrides", I.client.clearAllOverrides.bind(I.client));
x(U, "isCurrentUser", I.client.isCurrentUser.bind(I.client));
x(U, "onGateUpdated", I.client.onGateUpdated.bind(I.client));
x(U, "onExperimentValueUpdated", I.client.onExperimentValueUpdated.bind(I.client));
x(U, "onAnyUpdated", I.client.onAnyUpdated.bind(I.client));
x(U, "updateUser", I.client.updateUser.bind(I.client));
x(U, "updateUserWithProvider", I.client.updateUserWithProvider.bind(I.client));
x(U, "updateUserWithValues", I.client.updateUserWithValues.bind(I.client));
x(U, "getPackageVersion", I.client.getPackageVersion.bind(I.client));
x(U, "getLayer", I.client.getLayer.bind(I.client));
x(U, "getLayerValue", I.client.getLayerValue.bind(I.client));
var es = U;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = U;
  else {
    var Ma, Co;
    es = window.__FEATUREGATES_JS__;
    var Nc =
      ((Ma = es) === null || Ma === void 0 || (Co = Ma.getPackageVersion) === null || Co === void 0
        ? void 0
        : Co.call(Ma)) || "4.10.0 or earlier";
    if (Nc !== Fr) {
      var nb = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(Nc, " when module version ")
        .concat(Fr, " was loading.");
      console.warn(nb);
    }
  }
var xr,
  Cr,
  ab =
    (globalThis == null ||
    (xr = globalThis.process) === null ||
    xr === void 0 ||
    (xr = xr.env) === null ||
    xr === void 0
      ? void 0
      : xr.JEST_WORKER_ID) !== void 0,
  ib =
    !ab &&
    (globalThis == null ||
    (Cr = globalThis.process) === null ||
    Cr === void 0 ||
    (Cr = Cr.env) === null ||
    Cr === void 0
      ? void 0
      : Cr.NODE_ENV) !== "production",
  ob = function () {
    var t;
    ib && (t = console).debug.apply(t, arguments);
  },
  Ps = {},
  sb = "@atlaskit/platform-feature-flags",
  Zn = "__PLATFORM_FEATURE_FLAGS__",
  Uf = typeof process < "u" && typeof Ps < "u",
  ub = Uf ? Ps.ENABLE_PLATFORM_FF === "true" : !1,
  cb = Uf ? Ps.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  lb = ub || cb,
  db = { booleanResolver: void 0 },
  Qn = typeof window < "u" ? window : globalThis;
Qn[Zn] = Qn[Zn] || db;
function fb(e) {
  if (lb)
    return (
      ob(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        sb,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = Qn[Zn]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = Qn[Zn]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return es.checkGate(e);
    var a = (n = Qn[Zn]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function $e(e) {
  return fb(e);
}
var vb = y.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  pb = function () {
    return y.useContext(vb);
  },
  ni = function (t) {
    var r = y.useRef(t);
    return ((r.current = t), r);
  };
function hb(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function gb(e, t) {
  var r = y.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = y.useRef(!0),
    a = y.useRef(r),
    i = n.current || !!(t && a.current.inputs && hb(t, a.current.inputs)),
    o = i ? a.current : { inputs: t, result: e() };
  return (
    y.useEffect(
      function () {
        ((n.current = !1), (a.current = o));
      },
      [o],
    ),
    o.result
  );
}
function bb(e, t) {
  return gb(function () {
    return e;
  }, t);
}
function Vf() {
  var e = pb(),
    t = bb(
      function (r) {
        return new lg({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function Fc(e, t) {
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
function yb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Fc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Fc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ua(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    i = e.packageName,
    o = e.packageVersion,
    s = e.analyticsData,
    u = Vf(),
    c = u.createAnalyticsEvent,
    l = ni(s),
    d = ni(t),
    f = y.useCallback(
      function (p) {
        var h = c({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: i, packageVersion: o },
          }),
          v = yb({ componentName: n, packageName: i, packageVersion: o }, l.current);
        h.context.push(v);
        var g = h.clone();
        (g && g.fire("atlaskit"), d.current(p, h));
      },
      [r, n, a, i, o, c, l, d],
    );
  return f;
}
function Bc(e, t) {
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
function _b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Bc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function zc(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    i = e.packageVersion,
    o = e.analyticsData,
    s = Vf(),
    u = s.createAnalyticsEvent,
    c = ni(o),
    l = ni(t),
    d = y.useCallback(
      function () {
        var f = u({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: i },
          }),
          p = _b({ componentName: n, packageName: a, packageVersion: i }, c.current);
        f.context.push(p);
        var h = f.clone();
        (h && h.fire("atlaskit"), l.current(f));
      },
      [r, n, a, i, u, c, l],
    );
  return d;
}
var dr = "ASC",
  ai = "DESC",
  mb = "small",
  ii = "large",
  Gf = 0.22;
const wb = 5;
function C(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const i of a) {
      const o = i.startsWith("_") ? i.slice(0, wb) : i;
      t[o] = i;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function Hf(e, t, r) {
  return e ?? "var(--c-, )";
}
var Ob = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  kb = y.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      i = e.testId,
      o = e.isLoading,
      s = ae(e, Ob);
    return y.createElement(
      "table",
      te(
        {
          inert: o ? "" : void 0,
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
        s,
        {
          "data-testid": i && "".concat(i, "--table"),
          className: C([
            "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
            r && "_1kqm1n9t",
            n && "_179r187z",
          ]),
        },
      ),
      a,
    );
  }),
  Sb = function (t) {
    var r = t.children;
    return y.createElement(
      "caption",
      { className: C(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  Eb = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: C(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  xb = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: C(["_4t3i1jdh"]),
      },
      r,
    );
  },
  Cb = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
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
  Rb = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function qc(e, t) {
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
function Uc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : qc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Pb(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Wf() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Wf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Wf = function () {
    return !!e;
  })();
}
var Vc = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var i;
      if (r.cells[a] && ((i = r.cells[a]) === null || i === void 0 ? void 0 : i.key) === n) {
        var o;
        return (o = t[a]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  Ab = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var i = a === dr ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      s = Array.from(r);
    return s.sort(function (u, c) {
      var l = Vc(u.cells, t, n),
        d = Vc(c.cells, t, n);
      if (l === void 0 || d === void 0) return i;
      if (je(l) !== je(d)) {
        if (typeof l == "number") return -1;
        if (typeof d == "number") return 1;
        if (typeof l == "string") return -1;
        if (typeof d == "string") return 1;
      }
      return typeof l == "string" && typeof d == "string"
        ? i * o.compare(l, d)
        : (!l && l !== 0) || l < d
          ? -i
          : (!d && d !== 0) || l > d
            ? i
            : l === d
              ? 0
              : 1;
    });
  };
function jb(e) {
  var t = (function (r) {
    function n() {
      var a;
      de(this, n);
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
      return ((a = Pb(this, n, [].concat(o))), x(a, "state", { pageRows: [] }), a);
    }
    return (
      ze(n, r),
      fe(
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
            value: function (i, o) {
              this.props.onPageRowsUpdate &&
                this.state.pageRows !== o.pageRows &&
                this.props.onPageRowsUpdate(this.state.pageRows);
            },
          },
          {
            key: "render",
            value: function () {
              var i = this.props;
              i.rows;
              var o = i.head;
              (i.sortKey, i.sortOrder, i.rowsPerPage, i.page);
              var s = i.forwardedRef,
                u = ae(i, Rb);
              return k.createElement(
                e,
                te({ pageRows: this.state.pageRows, head: o }, u, { ref: s }),
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (i, o) {
              var s = i.rows,
                u = i.head,
                c = i.sortKey,
                l = i.sortOrder,
                d = i.page,
                f = i.rowsPerPage,
                p = i.isTotalPagesControlledExternally;
              ti(c, u);
              var h, v;
              return (
                p ? ((h = s), (v = s)) : ((h = Ab(u, s, c, l) || []), (v = jf(h, d, f))),
                Uc(Uc({}, o), {}, { pageRows: v })
              );
            },
          },
        ],
      )
    );
  })(k.Component);
  return k.forwardRef(function (r, n) {
    return k.createElement(t, te({}, r, { forwardedRef: n }));
  });
}
var Ib = "--local-dynamic-table-width",
  Kf = function (t) {
    var r = t.width;
    return typeof r < "u" ? x({}, Ib, "".concat(r, "%")) : void 0;
  },
  Db = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  Tb = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      i = t.innerRef,
      o = ae(t, Db);
    return y.createElement(
      "td",
      te(
        {
          style: Kf({ width: r }),
          ref: i,
          className: C([
            "_1bsb8a2a",
            n && a && "_1bto1l2s _o5721q9c",
            n && "_1reo15vq _18m915vq",
            "_19itglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
            o.className,
          ]),
        },
        o,
      ),
    );
  },
  Mb = ["isHighlighted", "children", "style", "testId", "className"],
  Lb = y.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      i = e.testId,
      o = e.className,
      s = ae(e, Mb);
    return y.createElement(
      "tr",
      te(
        {
          style: a,
          className: C([
            "_bfhkqtfy _1ygbsglb _1ah312gs",
            r ? "_bfhktkjs _irr31ae3" : "_irr3s8ts",
            o,
          ]),
        },
        s,
        { ref: t, "data-testid": i },
      ),
      n,
    );
  }),
  $b = ["cells"],
  Nb = ["content", "testId"],
  Fb = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      i = t.isFixedSize,
      o = t.isHighlighted,
      s = r.cells,
      u = ae(r, $b);
    return k.createElement(
      Lb,
      te(
        {},
        u,
        { isHighlighted: o },
        o ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(u.key)) },
      ),
      s.map(function (c, l) {
        var d = c.content,
          f = c.testId,
          p = ae(c, Nb),
          h = (n || { cells: [] }).cells[l] || {},
          v = h.shouldTruncate,
          g = h.width;
        return k.createElement(
          Tb,
          te({ "data-testid": f || (a && "".concat(a, "--cell-").concat(l)) }, p, {
            isFixedSize: i,
            key: l,
            shouldTruncate: v,
            width: g,
          }),
          d,
        );
      }),
    );
  };
function Bb(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Yf() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Yf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Yf = function () {
    return !!e;
  })();
}
var zb = (function (e) {
    function t() {
      return (de(this, t), Bb(this, t, arguments));
    }
    return (
      ze(t, e),
      fe(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.pageRows,
              i = n.head,
              o = n.isFixedSize,
              s = n.highlightedRowIndex,
              u = n.testId,
              c = n.forwardedRef;
            return k.createElement(
              "tbody",
              { "data-testid": u && "".concat(u, "--body"), ref: c },
              a.map(function (l, d) {
                return k.createElement(Fb, {
                  head: i,
                  isFixedSize: o,
                  key: l.key || d,
                  row: l,
                  isHighlighted:
                    l.isHighlighted ||
                    (!!s && (typeof s == "number" ? s === d : s.indexOf(d) > -1)),
                  testId: u,
                });
              }),
            );
          },
        },
      ])
    );
  })(k.Component),
  qb = jb(
    k.forwardRef(function (e, t) {
      return k.createElement(zb, te({}, e, { forwardedRef: t }));
    }),
  );
function Ub(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Jf() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Jf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Jf = function () {
    return !!e;
  })();
}
var Vb = (function (e) {
  function t(r) {
    var n;
    return (de(this, t), (n = Ub(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    ze(t, e),
    fe(
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
})(k.Component);
const As = y.createContext(null);
var Gc = "#FF5630",
  Hc = "#DE350B",
  Rr = "#BF2600",
  Wc = "#FFC400",
  Kc = "#FFAB00",
  Pr = "#FF991F",
  Gb = "#DEEBFF",
  La = "#B3D4FF",
  Yc = "#4C9AFF",
  Jc = "#2684FF",
  Xc = "#0065FF",
  Ar = "#0052CC",
  Zc = "#0747A6",
  Yt = "#FFFFFF",
  Re = "#F4F5F7",
  sr = "#A5ADBA",
  Hb = "#8993A4",
  Wb = "#6B778C",
  Kb = "#505F79",
  ca = "#42526E",
  Ke = "#253858",
  jr = "#172B4D",
  In = "rgba(9, 30, 66, 0.04)",
  Qc = "rgba(9, 30, 66, 0.08)",
  it = "#9FB0CC",
  Yb = "#8C9CB8",
  Ro = "#67758F",
  Dn = "#3B475C",
  el = "#313D52",
  Tn = "#1B2638",
  Ir = "#0D1424",
  Jb = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function Xb(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(ca, ")")
    : "var(--ds-icon-inverse, ".concat(Yt, ")");
}
var $a = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  Zb = typeof window > "u" ? y.useEffect : y.useLayoutEffect,
  Xf = k.memo(
    k.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "inherit" : n,
        i = t.delay,
        o = i === void 0 ? 0 : i,
        s = t.interactionName,
        u = t.label,
        c = t.size,
        l = c === void 0 ? "medium" : c,
        d = t.testId,
        f = typeof l == "number" ? l : Jb[l],
        p = "".concat(o, "ms"),
        h = Xb(a),
        v = y.useContext(As);
      return (
        Zb(
          function () {
            if (v != null) return v.hold(s);
          },
          [v, s],
        ),
        k.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: p, width: f, height: f },
            className: C([$a.wrapperStyles, $a.rotateStyles]),
          },
          k.createElement(
            "svg",
            {
              height: f,
              width: f,
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
              "data-testid": d,
              ref: r,
              "aria-label": u || void 0,
              style: { animationDelay: p },
              role: u ? "img" : "none",
              className: C([$a.loadInStyles]),
            },
            k.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: C([$a.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function tl(e, t) {
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
function rl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : tl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var nl = "--contents-opacity",
  Qb = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: C(["_kqswh2mm"]) },
      r,
    );
  },
  ey = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: C(["_tzy47hfw _lcxvglyw"]),
        style: rl(rl({}, x({}, nl, n)), {}, { "--_cnddr8": Hf("var(".concat(nl, ")")) }),
      },
      r,
    );
  },
  ty = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: C(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function ry(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Zf() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Zf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Zf = function () {
    return !!e;
  })();
}
var Qf = (function (e) {
  function t() {
    return (de(this, t), ry(this, t, arguments));
  }
  return (
    ze(t, e),
    fe(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            a = n.children,
            i = n.isLoading,
            o = n.spinnerSize,
            s = n.contentsOpacity,
            u = n.testId,
            c = n.loadingLabel;
          return k.createElement(
            Qb,
            { testId: u },
            i ? k.createElement(ey, { contentsOpacity: s, testId: u }, a) : a,
            i &&
              k.createElement(
                ty,
                { testId: u },
                k.createElement(Xf, {
                  size: o,
                  testId: u && "".concat(u, "--loadingSpinner"),
                  label: c,
                }),
              ),
          );
        },
      },
    ])
  );
})(k.Component);
x(Qf, "defaultProps", {
  isLoading: !0,
  spinnerSize: ii,
  contentsOpacity: Gf,
  loadingLabel: "Loading table",
});
var ny = ["children", "testId"],
  ay = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = ae(e, ny);
    return y.createElement(
      "div",
      te({}, a, { "data-testid": n, ref: t, className: C(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  iy = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: C(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  oy = y.forwardRef(function (e, t) {
    var r = e.children;
    return y.createElement("div", { ref: t, className: C(["_kqswh2mm _152tidpf"]) }, r);
  });
function sy(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, ev() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var tv = (function (e) {
  function t() {
    var r;
    de(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = sy(this, t, [].concat(a))),
      x(r, "spinnerRef", k.createRef()),
      x(r, "containerRef", k.createRef()),
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
          s = o.targetRef,
          u = s?.();
        return u || r.containerRef.current;
      }),
      x(r, "hasTargetNode", function (o) {
        return !!r.getTargetNode(o);
      }),
      x(r, "isVerticallyVisible", function (o, s) {
        var u = o.top,
          c = o.bottom;
        return c <= 0 ? !1 : u < s;
      }),
      x(r, "isFullyVerticallyVisible", function (o, s) {
        var u = o.top,
          c = o.bottom;
        return u >= 0 && c <= s;
      }),
      x(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      x(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      x(r, "translateSpinner", function (o, s, u) {
        ((o.style.position = u ? "fixed" : ""),
          (o.style.transform = s !== 0 ? "translate3d(0, ".concat(s, "px, 0)") : ""));
      }),
      x(r, "updateTargetAppearance", function () {
        var o = r.getTargetNode(),
          s = r.props,
          u = s.isLoading,
          c = s.contentsOpacity;
        o &&
          o.style &&
          je(o.style) === "object" &&
          ((o.style.pointerEvents = u ? "none" : ""), (o.style.opacity = u ? c.toString() : ""));
      }),
      r
    );
  }
  return (
    ze(t, e),
    fe(t, [
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
            i = window.innerHeight,
            o = this.getTargetNode(),
            s = (n = this.spinnerRef) === null || n === void 0 ? void 0 : n.current;
          if (!(!o || typeof o.getBoundingClientRect != "function" || !s)) {
            var u = o.getBoundingClientRect(),
              c = s.getBoundingClientRect(),
              l = c.height,
              d = this.isVerticallyVisible(u, i),
              f = u.top,
              p = u.bottom,
              h = u.height;
            if (d) {
              var v = h >= l * 3;
              if (v && !this.isFullyVerticallyVisible(u, i)) {
                if (f >= 0) {
                  var g = i - f,
                    b = g / 2 + f - l / 2,
                    m = g < l * 3 ? f + l : b;
                  this.translateSpinner(s, m, !0);
                } else if (f < 0 && p > i) {
                  var w = i / 2 - l / 2;
                  this.translateSpinner(s, w, !0);
                } else {
                  var O = p / 2 - l / 2,
                    _ = O < l ? O - (l - O) : O;
                  this.translateSpinner(s, _, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(c, i)) return;
            var S = (a = this.containerRef) === null || a === void 0 ? void 0 : a.current;
            if (S && typeof S.getBoundingClientRect == "function") {
              var E = S.getBoundingClientRect().top,
                j = (f - E) / 2;
              this.translateSpinner(s, j, !1);
            }
          }
        },
      },
      {
        key: "render",
        value: function () {
          var n = this.props,
            a = n.children,
            i = n.isLoading,
            o = n.spinnerSize,
            s = n.testId,
            u = n.loadingLabel;
          return k.createElement(
            ay,
            { testId: s && "".concat(s, "--loading--container--advanced"), ref: this.containerRef },
            a,
            i &&
              k.createElement(
                iy,
                { testId: s },
                k.createElement(
                  oy,
                  { ref: this.spinnerRef },
                  k.createElement(Xf, {
                    size: o,
                    testId: s && "".concat(s, "--loadingSpinner"),
                    label: u,
                  }),
                ),
              ),
          );
        },
      },
    ])
  );
})(k.Component);
x(tv, "defaultProps", {
  isLoading: !0,
  spinnerSize: ii,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Gf), ")"),
  loadingLabel: "Loading table",
});
function uy(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = y.useState(t),
    a = K(n, 2),
    i = a[0],
    o = a[1],
    s = y.useRef(r);
  y.useEffect(
    function () {
      s.current = r;
    },
    [r],
  );
  var u = r ? e : i,
    c = y.useCallback(function (l) {
      s.current || o(l);
    }, []);
  return [u, c];
}
var Mn = {},
  Ln = {},
  cy = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  ly = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  dy = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  fy = { core: 16, utility: 12 },
  vy = {
    core: {
      medium: { none: 0, compact: 4, spacious: 4 },
      small: { none: 0, compact: 2.66, spacious: 8 },
    },
    utility: {
      medium: { none: 0, compact: 2, spacious: 6 },
      small: { none: 0, compact: 2, spacious: 6 },
    },
  },
  al = y.memo(function (t) {
    var r,
      n = t,
      a = n.color,
      i = a === void 0 ? "currentColor" : a,
      o = n.testId,
      s = n.label,
      u = n.LEGACY_primaryColor,
      c = n.LEGACY_secondaryColor,
      l = n.LEGACY_size,
      d = n.LEGACY_fallbackIcon,
      f = n.dangerouslySetGlyph,
      p = n.shouldScale,
      h = n.LEGACY_margin,
      v = n.spacing,
      g = v === void 0 ? "none" : v,
      b = n.name,
      m = f ? { __html: f } : void 0;
    if (d && !$e("platform-visual-refresh-icons"))
      return y.createElement(d, {
        primaryColor: u ?? i,
        secondaryColor: c,
        size: l,
        label: s,
        testId: o,
        UNSAFE_margin: h,
      });
    var w = (r = t.type) !== null && r !== void 0 ? r : "core",
      O = "medium";
    if ("size" in t && t.size !== void 0) {
      if (typeof t.size == "string") O = t.size === "small" || t.size === "medium" ? t.size : O;
      else if (b) {
        var _ = t.size(b);
        O = _ === "small" || _ === "medium" ? _ : O;
      }
    }
    var S = fy[w],
      E = vy[w][O][g],
      j = S + 2 * E;
    return y.createElement(
      "span",
      {
        "data-testid": o,
        role: s ? "img" : void 0,
        "aria-label": s || void 0,
        "aria-hidden": s ? void 0 : !0,
        style: { color: i },
        className: C([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          p && "_1bsb1kw7 _4t3i1kw7",
          (w === "utility" || O === "small") && "_vwz4utpp",
        ]),
      },
      y.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - E, " ")
          .concat(0 - E, " ")
          .concat(j, " ")
          .concat(j),
        role: "presentation",
        dangerouslySetInnerHTML: m,
        className: C([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : w === "utility" ? dy[g] : O === "small" ? ly[g] : cy[g],
        ]),
      }),
    );
  });
const py = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: al, default: al }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  mi = xs(py);
var il;
function hy() {
  if (il) return Ln;
  ((il = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.default = void 0));
  var e = r(dt()),
    t = r(mi);
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
  return ((n.displayName = "ChevronLeftIcon"), (Ln.default = n), Ln);
}
var $n = {};
function ol(e, t) {
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
function sl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ol(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ol(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var gy = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  ul = y.memo(function (t) {
    var r = t,
      n = r.glyph,
      a = r.dangerouslySetGlyph,
      i = r.primaryColor,
      o = i === void 0 ? "currentColor" : i,
      s = r.secondaryColor,
      u = r.size,
      c = r.testId,
      l = r.label,
      d = r.width,
      f = r.height,
      p = r.UNSAFE_margin,
      h = a
        ? { dangerouslySetInnerHTML: { __html: a } }
        : { children: n ? y.createElement(n, { role: "presentation" }) : null },
      v = d && f ? { width: d + "px", height: f + "px" } : null;
    return y.createElement(
      "span",
      te(
        {
          "data-testid": c,
          "data-vc": "icon-".concat(c),
          role: l ? "img" : void 0,
          "aria-label": l || void 0,
          "aria-hidden": l ? void 0 : !0,
          style: sl(
            sl({}, v),
            {},
            { "--icon-primary-color": o, "--icon-secondary-color": s, margin: p },
          ),
        },
        h,
        {
          className: C([
            "_1e0c1o8l _1o9zidpf _vyfuvuon _vwz4kb7n _1szv15vq _1tly15vq _rzyw1osq _17jb1osq _1ksvoz0e _3se1x1jp _re2rglyw _1veoyfq0 _1kg81r31",
            "_jcxd1r8n _gq0g1onz _1trkwc43",
            o === s && "_18hbwc43",
            s === "transparent" && "_4fyi1j28",
            u && gy[u],
          ]),
        },
      ),
    );
  });
const by = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: ul, default: ul }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  rv = xs(by);
var cl;
function yy() {
  if (cl) return $n;
  ((cl = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0));
  var e = r(dt()),
    t = rv;
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
  return ((n.displayName = "ChevronLeftLargeIcon"), ($n.default = n), $n);
}
var ll;
function _y() {
  if (ll) return Mn;
  ((ll = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.default = void 0));
  var e = n(dt()),
    t = n(hy()),
    r = n(yy());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronLeftIcon", LEGACY_fallbackIcon: r.default }, i),
    );
  return ((a.displayName = "ChevronLeftIconMigration"), (Mn.default = a), Mn);
}
var my = _y();
const wy = er(my);
var Nn = {},
  Fn = {},
  dl;
function Oy() {
  if (dl) return Fn;
  ((dl = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.default = void 0));
  var e = r(dt()),
    t = r(mi);
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
  return ((n.displayName = "ChevronRightIcon"), (Fn.default = n), Fn);
}
var Bn = {},
  fl;
function ky() {
  if (fl) return Bn;
  ((fl = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.default = void 0));
  var e = r(dt()),
    t = rv;
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
  return ((n.displayName = "ChevronRightLargeIcon"), (Bn.default = n), Bn);
}
var vl;
function Sy() {
  if (vl) return Nn;
  ((vl = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.default = void 0));
  var e = n(dt()),
    t = n(Oy()),
    r = n(ky());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronRightIcon", LEGACY_fallbackIcon: r.default }, i),
    );
  return ((a.displayName = "ChevronRightIconMigration"), (Nn.default = a), Nn);
}
var Ey = Sy();
const xy = er(Ey);
var js = y.createContext("elevation.surface"),
  Cy = function () {
    return y.useContext(js);
  };
js.displayName = "SurfaceProvider";
var Ry = [
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
  Py = ["className"],
  Ay = {
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
  nv = {
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
  jy = {
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
  Iy = {
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
  Dy = {
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
  Ty = {
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
  wi = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "div" : r,
      a = e.children,
      i = e.backgroundColor,
      o = e.padding,
      s = e.paddingBlock,
      u = s === void 0 ? o : s,
      c = e.paddingBlockStart,
      l = c === void 0 ? u : c,
      d = e.paddingBlockEnd,
      f = d === void 0 ? u : d,
      p = e.paddingInline,
      h = p === void 0 ? o : p,
      v = e.paddingInlineStart,
      g = v === void 0 ? h : v,
      b = e.paddingInlineEnd,
      m = b === void 0 ? h : b,
      w = e.style,
      O = e.testId,
      _ = e.xcss,
      S = ae(e, Ry);
    S.className;
    var E = ae(S, Py),
      j = y.createElement(
        n,
        te(
          {
            style: w,
            ref: t,
            className: C([
              "_19itglyw _vchhusvi _r06hglyw",
              i && Ay[i],
              i && My(i) && nv[i],
              l && jy[l],
              f && Iy[f],
              g && Dy[g],
              m && Ty[m],
              _,
            ]),
          },
          E,
          { "data-testid": O },
        ),
        a,
      );
    return i ? y.createElement(js.Provider, { value: i }, j) : j;
  });
function My(e) {
  return e in nv;
}
const Po = () =>
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
  av = (...e) => C(e);
function Ly() {
  return {
    css() {
      throw Po();
    },
    cssMap() {
      throw Po();
    },
    cx: av,
    XCSSProp() {
      throw Po();
    },
  };
}
var $y = Ly(),
  Ny = $y.cx,
  Fy = [
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
  pl = {
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
  hl = {
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
  By = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  zy = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  qy = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  Uy = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  Vy = { root: "_1e0c1txw _vchhusvi" },
  oi = y.memo(
    y.forwardRef(function (e, t) {
      var r = e.as,
        n = r === void 0 ? "div" : r,
        a = e.role,
        i = e.alignItems,
        o = e.justifyContent,
        s = e.gap,
        u = e.columnGap,
        c = e.rowGap,
        l = e.children,
        d = e.testId,
        f = e.direction,
        p = e.wrap,
        h = e.xcss,
        v = ae(e, Fy);
      return y.createElement(
        n,
        te({}, v, {
          role: a,
          className: C([
            Vy.root,
            s && hl[s],
            u && hl[u],
            s && pl[s],
            c && pl[c],
            i && Uy[i],
            f && zy[f],
            o && By[o],
            p && qy[p],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
oi.displayName = "Flex";
var Gy = [
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
  ts = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  Hy = function (t) {
    var r = t.children;
    return y.createElement("span", { className: C([ts.separator]) }, r);
  },
  Va = y.memo(
    y.forwardRef(function (e, t) {
      var r = e.as,
        n = e.alignInline,
        a = e.alignBlock,
        i = a === void 0 ? "start" : a,
        o = e.shouldWrap,
        s = o === void 0 ? !1 : o,
        u = e.spread,
        c = e.grow,
        l = e.space,
        d = e.rowSpace,
        f = e.separator,
        p = e.xcss,
        h = e.testId,
        v = e.role,
        g = e.children,
        b = ae(e, Gy),
        m = typeof f == "string" ? y.createElement(Hy, null, f) : f,
        w = m
          ? y.Children.toArray(g)
              .filter(Boolean)
              .map(function (O, _) {
                return y.createElement(y.Fragment, { key: _ }, f && _ > 0 ? m : null, O);
              })
          : g;
      return y.createElement(
        oi,
        te({}, b, {
          as: r,
          role: v,
          alignItems: i,
          justifyContent: u || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: s ? "wrap" : void 0,
          xcss: Ny(c === "hug" && ts.hug, c === "fill" && ts.fill, p),
          testId: h,
          ref: t,
        }),
        w,
      );
    }),
  );
Va.displayName = "Inline";
var Wy = "Invariant failed";
function Ky(e, t) {
  if (!e) throw new Error(Wy);
}
var iv = y.createContext(!1),
  Yy = function () {
    return y.useContext(iv);
  },
  Jy = iv.Provider,
  Xy = ["span", "p", "strong", "em"],
  Zy = function (t, r) {
    var n = Cy();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return gl.hasOwnProperty(n) ? gl[n] : "color.text";
    }
  },
  Dr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  Qy = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  e_ = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  t_ = {
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
  gl = {
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
  r_ = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "span" : r,
      a = e.color,
      i = e.align,
      o = e.testId,
      s = e.id,
      u = e.size,
      c = e.weight,
      l = e.maxLines,
      d = e.xcss,
      f = e.children;
    Ky(Xy.includes(n));
    var p = Yy(),
      h = Zy(a, p);
    !u && !p && (u = "medium");
    var v = y.createElement(
      n,
      {
        id: s,
        className: C([
          Dr.root,
          u && Qy[u],
          h && t_[h],
          l && Dr.truncation,
          l === 1 && Dr.breakAll,
          i && Dr["textAlign.".concat(i)],
          c && e_[c],
          n === "em" && Dr["as.em"],
          n === "strong" && Dr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": o,
        ref: t,
      },
      f,
    );
    return p ? v : y.createElement(Jy, { value: !0 }, v);
  });
function n_() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var a_ = ["as", "children", "isInset", "testId", "style", "xcss"],
  i_ = ["className"],
  o_ = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      i = e.isInset,
      o = e.testId,
      s = e.style,
      u = e.xcss,
      c = ae(e, a_);
    c.className;
    var l = ae(c, i_);
    return y.createElement(
      n,
      te({}, l, {
        ref: t,
        className: C([
          "_mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          i && "_1ah31gjf _2mwq1gjf",
          $e("platform_dst_compiled_primitives_outline_reset") && "_ymio1r31 _ypr0glyw _zcxs1o36",
          u,
        ]),
        style: s,
        "data-testid": o,
      }),
      a,
    );
  }),
  s_ = [
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
  u_ = ["className"],
  bl = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  c_ = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      i = a === void 0 ? "button" : a,
      o = e.onClick,
      s = o === void 0 ? me : o,
      u = e.interactionName,
      c = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      f = e.testId,
      p = e.xcss,
      h = e.tabIndex,
      v = ae(e, s_),
      g = y.useContext(As),
      b = y.useCallback(
        function (O, _) {
          (g && g.tracePress(u, O.timeStamp), s(O, _));
        },
        [s, g, u],
      ),
      m = ua({
        fn: b,
        action: "clicked",
        componentName: c || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "14.15.4",
        analyticsData: l,
        actionSubject: "button",
      });
    v.className;
    var w = ae(v, u_);
    return y.createElement(
      o_,
      te({ as: "button", tabIndex: h ?? (n_() && !n ? 0 : void 0), style: d }, w, {
        type: i,
        onClick: m,
        disabled: n,
        xcss: av(bl.root, n && bl.disabled, p),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  Ao = {},
  zn = {},
  yl;
function ov() {
  if (yl) return zn;
  ((yl = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.bind = void 0));
  function e(t, r) {
    var n = r.type,
      a = r.listener,
      i = r.options;
    return (
      t.addEventListener(n, a, i),
      function () {
        t.removeEventListener(n, a, i);
      }
    );
  }
  return ((zn.bind = e), zn);
}
var ur = {},
  _l;
function l_() {
  if (_l) return ur;
  _l = 1;
  var e =
    (ur && ur.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (i) {
            for (var o, s = 1, u = arguments.length; s < u; s++) {
              o = arguments[s];
              for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c]);
            }
            return i;
          }),
        e.apply(this, arguments)
      );
    };
  (Object.defineProperty(ur, "__esModule", { value: !0 }), (ur.bindAll = void 0));
  var t = ov();
  function r(i) {
    if (!(typeof i > "u")) return typeof i == "boolean" ? { capture: i } : i;
  }
  function n(i, o) {
    if (o == null) return i;
    var s = e(e({}, i), { options: e(e({}, r(o)), r(i.options)) });
    return s;
  }
  function a(i, o, s) {
    var u = o.map(function (c) {
      var l = n(c, s);
      return (0, t.bind)(i, l);
    });
    return function () {
      u.forEach(function (l) {
        return l();
      });
    };
  }
  return ((ur.bindAll = a), ur);
}
var ml;
function d_() {
  return (
    ml ||
      ((ml = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = ov();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = l_();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(Ao)),
    Ao
  );
}
var Oi = d_(),
  f_ = function () {
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
  sv = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: f_() });
  },
  v_ = sv(),
  p_ = y.createContext(sv()),
  h_ = function (e) {
    return e.value++;
  },
  g_ = function (e) {
    return e ? e.prefix : "";
  },
  b_ = function (e) {
    var t = e || v_,
      r = g_(t),
      n = h_(t),
      a = r + n,
      i = function (o) {
        return a + t.uid(o);
      };
    return { uid: a, gen: i };
  },
  uv = function () {
    var e = y.useContext(p_),
      t = y.useState(function () {
        return b_(e);
      })[0];
    return t;
  },
  y_ = function () {
    var e = uv().uid;
    return e;
  },
  __ = function () {
    var e = uv().gen;
    return e;
  },
  jo,
  Ga = (jo = k.useId) !== null && jo !== void 0 ? jo : void 0;
function m_() {
  return Ga && $e("platform-dst-react-18-use-id")
    ? $e("platform-dst-react-18-use-id-selector-safe")
      ? Ga().replace(/[:«»]/g, "_")
      : Ga()
    : "uid".concat(y_());
}
function w_() {
  if (Ga && $e("platform-dst-react-18-use-id")) {
    var e = m_();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return __();
}
var cv = function (t) {
    var r = t.children,
      n = t.testId,
      a = t.role,
      i = t.id;
    return y.createElement(
      "span",
      {
        id: i,
        "data-testid": n,
        role: a,
        className: C([
          "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
        ]),
      },
      r,
    );
  },
  O_ = {
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
  k_ = ["children"];
function S_(e) {
  var t = function (s, u) {
      return s(u);
    },
    r = y.createContext(e);
  function n(o) {
    var s = y.useContext(r),
      u = s || t,
      c = u(o);
    return c;
  }
  function a(o) {
    var s = o.children,
      u = ae(o, k_),
      c = n(u);
    return k.createElement(k.Fragment, null, s(c));
  }
  function i(o) {
    var s = y.useContext(r),
      u = o.value || t,
      c = y.useCallback(
        function (l) {
          return u(s, l);
        },
        [s, u],
      );
    return k.createElement(r.Provider, { value: c }, o.children);
  }
  return { Consumer: a, Provider: i, useTheme: n };
}
var E_ = S_(function () {
    return { mode: "light" };
  }),
  x_ = E_.useTheme;
function C_(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function R_(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var P_ = (function () {
    function e(r) {
      var n = this;
      ((this._insertTag = function (a) {
        var i;
        (n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
              ? (i = n.container.firstChild)
              : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(a, i),
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(R_(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = C_(a);
          try {
            i.insertRule(n, i.cssRules.length);
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
  _e = "-ms-",
  si = "-moz-",
  Z = "-webkit-",
  lv = "comm",
  Is = "rule",
  Ds = "decl",
  A_ = "@import",
  dv = "@keyframes",
  j_ = "@layer",
  I_ = Math.abs,
  ki = String.fromCharCode,
  D_ = Object.assign;
function T_(e, t) {
  return ye(e, 0) ^ 45
    ? (((((((t << 2) ^ ye(e, 0)) << 2) ^ ye(e, 1)) << 2) ^ ye(e, 2)) << 2) ^ ye(e, 3)
    : 0;
}
function fv(e) {
  return e.trim();
}
function M_(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, r) {
  return e.replace(t, r);
}
function rs(e, t) {
  return e.indexOf(t);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function la(e, t, r) {
  return e.slice(t, r);
}
function gt(e) {
  return e.length;
}
function Ts(e) {
  return e.length;
}
function Na(e, t) {
  return (t.push(e), e);
}
function L_(e, t) {
  return e.map(t).join("");
}
var Si = 1,
  qr = 1,
  vv = 0,
  Ie = 0,
  he = 0,
  Yr = "";
function Ei(e, t, r, n, a, i, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: i,
    line: Si,
    column: qr,
    length: o,
    return: "",
  };
}
function qn(e, t) {
  return D_(Ei("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function $_() {
  return he;
}
function N_() {
  return ((he = Ie > 0 ? ye(Yr, --Ie) : 0), qr--, he === 10 && ((qr = 1), Si--), he);
}
function Ne() {
  return ((he = Ie < vv ? ye(Yr, Ie++) : 0), qr++, he === 10 && ((qr = 1), Si++), he);
}
function mt() {
  return ye(Yr, Ie);
}
function Ha() {
  return Ie;
}
function _a(e, t) {
  return la(Yr, e, t);
}
function da(e) {
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
function pv(e) {
  return ((Si = qr = 1), (vv = gt((Yr = e))), (Ie = 0), []);
}
function hv(e) {
  return ((Yr = ""), e);
}
function Wa(e) {
  return fv(_a(Ie - 1, ns(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function F_(e) {
  for (; (he = mt()) && he < 33; ) Ne();
  return da(e) > 2 || da(he) > 3 ? "" : " ";
}
function B_(e, t) {
  for (; --t && Ne() && !(he < 48 || he > 102 || (he > 57 && he < 65) || (he > 70 && he < 97)); );
  return _a(e, Ha() + (t < 6 && mt() == 32 && Ne() == 32));
}
function ns(e) {
  for (; Ne(); )
    switch (he) {
      case e:
        return Ie;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ns(he);
        break;
      case 40:
        e === 41 && ns(e);
        break;
      case 92:
        Ne();
        break;
    }
  return Ie;
}
function z_(e, t) {
  for (; Ne() && e + he !== 57; ) if (e + he === 84 && mt() === 47) break;
  return "/*" + _a(t, Ie - 1) + "*" + ki(e === 47 ? e : Ne());
}
function q_(e) {
  for (; !da(mt()); ) Ne();
  return _a(e, Ie);
}
function U_(e) {
  return hv(Ka("", null, null, null, [""], (e = pv(e)), 0, [0], e));
}
function Ka(e, t, r, n, a, i, o, s, u) {
  for (
    var c = 0,
      l = 0,
      d = o,
      f = 0,
      p = 0,
      h = 0,
      v = 1,
      g = 1,
      b = 1,
      m = 0,
      w = "",
      O = a,
      _ = i,
      S = n,
      E = w;
    g;

  )
    switch (((h = m), (m = Ne()))) {
      case 40:
        if (h != 108 && ye(E, d - 1) == 58) {
          rs((E += Q(Wa(m), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Wa(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += F_(h);
        break;
      case 92:
        E += B_(Ha() - 1, 7);
        continue;
      case 47:
        switch (mt()) {
          case 42:
          case 47:
            Na(V_(z_(Ne(), Ha()), t, r), u);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * v:
        s[c++] = gt(E) * b;
      case 125 * v:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            (b == -1 && (E = Q(E, /\f/g, "")),
              p > 0 &&
                gt(E) - d &&
                Na(p > 32 ? Ol(E + ";", n, r, d - 1) : Ol(Q(E, " ", "") + ";", n, r, d - 2), u));
            break;
          case 59:
            E += ";";
          default:
            if ((Na((S = wl(E, t, r, c, l, a, s, w, (O = []), (_ = []), d)), i), m === 123))
              if (l === 0) Ka(E, t, S, S, O, i, d, s, _);
              else
                switch (f === 99 && ye(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ka(
                      e,
                      S,
                      S,
                      n && Na(wl(e, S, S, 0, 0, a, s, w, a, (O = []), d), _),
                      a,
                      _,
                      d,
                      s,
                      n ? O : _,
                    );
                    break;
                  default:
                    Ka(E, S, S, S, [""], _, 0, s, _);
                }
        }
        ((c = l = p = 0), (v = b = 1), (w = E = ""), (d = o));
        break;
      case 58:
        ((d = 1 + gt(E)), (p = h));
      default:
        if (v < 1) {
          if (m == 123) --v;
          else if (m == 125 && v++ == 0 && N_() == 125) continue;
        }
        switch (((E += ki(m)), m * v)) {
          case 38:
            b = l > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            ((s[c++] = (gt(E) - 1) * b), (b = 1));
            break;
          case 64:
            (mt() === 45 && (E += Wa(Ne())), (f = mt()), (l = d = gt((w = E += q_(Ha())))), m++);
            break;
          case 45:
            h === 45 && gt(E) == 2 && (v = 0);
        }
    }
  return i;
}
function wl(e, t, r, n, a, i, o, s, u, c, l) {
  for (var d = a - 1, f = a === 0 ? i : [""], p = Ts(f), h = 0, v = 0, g = 0; h < n; ++h)
    for (var b = 0, m = la(e, d + 1, (d = I_((v = o[h])))), w = e; b < p; ++b)
      (w = fv(v > 0 ? f[b] + " " + m : Q(m, /&\f/g, f[b]))) && (u[g++] = w);
  return Ei(e, t, r, a === 0 ? Is : s, u, c, l);
}
function V_(e, t, r) {
  return Ei(e, t, r, lv, ki($_()), la(e, 2, -2), 0);
}
function Ol(e, t, r, n) {
  return Ei(e, t, r, Ds, la(e, 0, n), la(e, n + 1, -1), n);
}
function Br(e, t) {
  for (var r = "", n = Ts(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function G_(e, t, r, n) {
  switch (e.type) {
    case j_:
      if (e.children.length) break;
    case A_:
    case Ds:
      return (e.return = e.return || e.value);
    case lv:
      return "";
    case dv:
      return (e.return = e.value + "{" + Br(e.children, n) + "}");
    case Is:
      e.value = e.props.join(",");
  }
  return gt((r = Br(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function H_(e) {
  var t = Ts(e);
  return function (r, n, a, i) {
    for (var o = "", s = 0; s < t; s++) o += e[s](r, n, a, i) || "";
    return o;
  };
}
function W_(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function K_(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var Y_ = function (t, r, n) {
    for (var a = 0, i = 0; (a = i), (i = mt()), a === 38 && i === 12 && (r[n] = 1), !da(i); ) Ne();
    return _a(t, Ie);
  },
  J_ = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (da(a)) {
        case 0:
          (a === 38 && mt() === 12 && (r[n] = 1), (t[n] += Y_(Ie - 1, r, n)));
          break;
        case 2:
          t[n] += Wa(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = mt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += ki(a);
      }
    while ((a = Ne()));
    return t;
  },
  X_ = function (t, r) {
    return hv(J_(pv(t), r));
  },
  kl = new WeakMap(),
  Z_ = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !kl.get(n)) && !a) {
        kl.set(t, !0);
        for (var i = [], o = X_(r, i), s = n.props, u = 0, c = 0; u < o.length; u++)
          for (var l = 0; l < s.length; l++, c++)
            t.props[c] = i[u] ? o[u].replace(/&\f/g, s[l]) : s[l] + " " + o[u];
      }
    }
  },
  Q_ = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function gv(e, t) {
  switch (T_(e, t)) {
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
      return Z + e + si + e + _e + e + e;
    case 6828:
    case 4268:
      return Z + e + _e + e + e;
    case 6165:
      return Z + e + _e + "flex-" + e + e;
    case 5187:
      return Z + e + Q(e, /(\w+).+(:[^]+)/, Z + "box-$1$2" + _e + "flex-$1$2") + e;
    case 5443:
      return Z + e + _e + "flex-item-" + Q(e, /flex-|-self/, "") + e;
    case 4675:
      return Z + e + _e + "flex-line-pack" + Q(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Z + e + _e + Q(e, "shrink", "negative") + e;
    case 5292:
      return Z + e + _e + Q(e, "basis", "preferred-size") + e;
    case 6060:
      return Z + "box-" + Q(e, "-grow", "") + Z + e + _e + Q(e, "grow", "positive") + e;
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
          Q(e, /(.+:)(flex-)?(.*)/, Z + "box-pack:$3" + _e + "flex-pack:$3"),
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
      if (gt(e) - 1 - t > 6)
        switch (ye(e, t + 1)) {
          case 109:
            if (ye(e, t + 4) !== 45) break;
          case 102:
            return (
              Q(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Z + "$2-$3$1" + si + (ye(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~rs(e, "stretch") ? gv(Q(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ye(e, t + 1) !== 115) break;
    case 6444:
      switch (ye(e, gt(e) - 3 - (~rs(e, "!important") && 10))) {
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
                _e +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (ye(e, t + 11)) {
        case 114:
          return Z + e + _e + Q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Z + e + _e + Q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Z + e + _e + Q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Z + e + _e + e + e;
  }
  return e;
}
var em = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Ds:
          t.return = gv(t.value, t.length);
          break;
        case dv:
          return Br([qn(t, { value: Q(t.value, "@", "@" + Z) })], a);
        case Is:
          if (t.length)
            return L_(t.props, function (i) {
              switch (M_(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Br([qn(t, { props: [Q(i, /:(read-\w+)/, ":" + si + "$1")] })], a);
                case "::placeholder":
                  return Br(
                    [
                      qn(t, { props: [Q(i, /:(plac\w+)/, ":" + Z + "input-$1")] }),
                      qn(t, { props: [Q(i, /:(plac\w+)/, ":" + si + "$1")] }),
                      qn(t, { props: [Q(i, /:(plac\w+)/, _e + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  tm = [em],
  rm = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (v) {
        var g = v.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || tm,
      i = {},
      o,
      s = [];
    ((o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (v) {
          for (var g = v.getAttribute("data-emotion").split(" "), b = 1; b < g.length; b++)
            i[g[b]] = !0;
          s.push(v);
        },
      ));
    var u,
      c = [Z_, Q_];
    {
      var l,
        d = [
          G_,
          W_(function (v) {
            l.insert(v);
          }),
        ],
        f = H_(c.concat(a, d)),
        p = function (g) {
          return Br(U_(g), f);
        };
      u = function (g, b, m, w) {
        ((l = m), p(g ? g + "{" + b.styles + "}" : b.styles), w && (h.inserted[b.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new P_({
        key: r,
        container: o,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: u,
    };
    return (h.sheet.hydrate(s), h);
  },
  Io = { exports: {} },
  ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sl;
function nm() {
  if (Sl) return ee;
  Sl = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    n = e ? Symbol.for("react.fragment") : 60107,
    a = e ? Symbol.for("react.strict_mode") : 60108,
    i = e ? Symbol.for("react.profiler") : 60114,
    o = e ? Symbol.for("react.provider") : 60109,
    s = e ? Symbol.for("react.context") : 60110,
    u = e ? Symbol.for("react.async_mode") : 60111,
    c = e ? Symbol.for("react.concurrent_mode") : 60111,
    l = e ? Symbol.for("react.forward_ref") : 60112,
    d = e ? Symbol.for("react.suspense") : 60113,
    f = e ? Symbol.for("react.suspense_list") : 60120,
    p = e ? Symbol.for("react.memo") : 60115,
    h = e ? Symbol.for("react.lazy") : 60116,
    v = e ? Symbol.for("react.block") : 60121,
    g = e ? Symbol.for("react.fundamental") : 60117,
    b = e ? Symbol.for("react.responder") : 60118,
    m = e ? Symbol.for("react.scope") : 60119;
  function w(_) {
    if (typeof _ == "object" && _ !== null) {
      var S = _.$$typeof;
      switch (S) {
        case t:
          switch (((_ = _.type), _)) {
            case u:
            case c:
            case n:
            case i:
            case a:
            case d:
              return _;
            default:
              switch (((_ = _ && _.$$typeof), _)) {
                case s:
                case l:
                case h:
                case p:
                case o:
                  return _;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function O(_) {
    return w(_) === c;
  }
  return (
    (ee.AsyncMode = u),
    (ee.ConcurrentMode = c),
    (ee.ContextConsumer = s),
    (ee.ContextProvider = o),
    (ee.Element = t),
    (ee.ForwardRef = l),
    (ee.Fragment = n),
    (ee.Lazy = h),
    (ee.Memo = p),
    (ee.Portal = r),
    (ee.Profiler = i),
    (ee.StrictMode = a),
    (ee.Suspense = d),
    (ee.isAsyncMode = function (_) {
      return O(_) || w(_) === u;
    }),
    (ee.isConcurrentMode = O),
    (ee.isContextConsumer = function (_) {
      return w(_) === s;
    }),
    (ee.isContextProvider = function (_) {
      return w(_) === o;
    }),
    (ee.isElement = function (_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }),
    (ee.isForwardRef = function (_) {
      return w(_) === l;
    }),
    (ee.isFragment = function (_) {
      return w(_) === n;
    }),
    (ee.isLazy = function (_) {
      return w(_) === h;
    }),
    (ee.isMemo = function (_) {
      return w(_) === p;
    }),
    (ee.isPortal = function (_) {
      return w(_) === r;
    }),
    (ee.isProfiler = function (_) {
      return w(_) === i;
    }),
    (ee.isStrictMode = function (_) {
      return w(_) === a;
    }),
    (ee.isSuspense = function (_) {
      return w(_) === d;
    }),
    (ee.isValidElementType = function (_) {
      return (
        typeof _ == "string" ||
        typeof _ == "function" ||
        _ === n ||
        _ === c ||
        _ === i ||
        _ === a ||
        _ === d ||
        _ === f ||
        (typeof _ == "object" &&
          _ !== null &&
          (_.$$typeof === h ||
            _.$$typeof === p ||
            _.$$typeof === o ||
            _.$$typeof === s ||
            _.$$typeof === l ||
            _.$$typeof === g ||
            _.$$typeof === b ||
            _.$$typeof === m ||
            _.$$typeof === v))
      );
    }),
    (ee.typeOf = w),
    ee
  );
}
var El;
function am() {
  return (El || ((El = 1), (Io.exports = nm())), Io.exports);
}
var Do, xl;
function im() {
  if (xl) return Do;
  xl = 1;
  var e = am(),
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
    i = {};
  ((i[e.ForwardRef] = n), (i[e.Memo] = a));
  function o(h) {
    return e.isMemo(h) ? a : i[h.$$typeof] || t;
  }
  var s = Object.defineProperty,
    u = Object.getOwnPropertyNames,
    c = Object.getOwnPropertySymbols,
    l = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    f = Object.prototype;
  function p(h, v, g) {
    if (typeof v != "string") {
      if (f) {
        var b = d(v);
        b && b !== f && p(h, b, g);
      }
      var m = u(v);
      c && (m = m.concat(c(v)));
      for (var w = o(h), O = o(v), _ = 0; _ < m.length; ++_) {
        var S = m[_];
        if (!r[S] && !(g && g[S]) && !(O && O[S]) && !(w && w[S])) {
          var E = l(v, S);
          try {
            s(h, S, E);
          } catch {}
        }
      }
    }
    return h;
  }
  return ((Do = p), Do);
}
im();
var om = !0;
function bv(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var Ms = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || om === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  yv = function (t, r, n) {
    Ms(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do (t.insert(r === i ? "." + a : "", i, t.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function sm(e) {
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
var um = {
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
  cm = /[A-Z]|^ms/g,
  lm = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  _v = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Cl = function (t) {
    return t != null && typeof t != "boolean";
  },
  To = K_(function (e) {
    return _v(e) ? e : e.replace(cm, "-$&").toLowerCase();
  }),
  Rl = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(lm, function (n, a, i) {
            return ((bt = { name: a, styles: i, next: bt }), a);
          });
    }
    return um[t] !== 1 && !_v(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function fa(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1) return ((bt = { name: a.name, styles: a.styles, next: bt }), a.name);
      var i = r;
      if (i.styles !== void 0) {
        var o = i.next;
        if (o !== void 0)
          for (; o !== void 0; )
            ((bt = { name: o.name, styles: o.styles, next: bt }), (o = o.next));
        var s = i.styles + ";";
        return s;
      }
      return dm(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var u = bt,
          c = r(e);
        return ((bt = u), fa(e, t, c));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function dm(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += fa(e, t, r[a]) + ";";
  else
    for (var i in r) {
      var o = r[i];
      if (typeof o != "object") {
        var s = o;
        t != null && t[s] !== void 0
          ? (n += i + "{" + t[s] + "}")
          : Cl(s) && (n += To(i) + ":" + Rl(i, s) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var u = 0; u < o.length; u++) Cl(o[u]) && (n += To(i) + ":" + Rl(i, o[u]) + ";");
      else {
        var c = fa(e, t, o);
        switch (i) {
          case "animation":
          case "animationName": {
            n += To(i) + ":" + c + ";";
            break;
          }
          default:
            n += i + "{" + c + "}";
        }
      }
    }
  return n;
}
var Pl = /label:\s*([^\s;{]+)\s*(;|$)/g,
  bt;
function Ls(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  bt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) ((n = !1), (a += fa(r, t, i)));
  else {
    var o = i;
    a += o[0];
  }
  for (var s = 1; s < e.length; s++)
    if (((a += fa(r, t, e[s])), n)) {
      var u = i;
      a += u[s];
    }
  Pl.lastIndex = 0;
  for (var c = "", l; (l = Pl.exec(a)) !== null; ) c += "-" + l[1];
  var d = sm(a) + c;
  return { name: d, styles: a, next: bt };
}
var fm = function (t) {
    return t();
  },
  vm = uu.useInsertionEffect ? uu.useInsertionEffect : !1,
  mv = vm || fm,
  wv = y.createContext(typeof HTMLElement < "u" ? rm({ key: "css" }) : null);
wv.Provider;
var Ov = function (t) {
    return y.forwardRef(function (r, n) {
      var a = y.useContext(wv);
      return t(r, a, n);
    });
  },
  kv = y.createContext({}),
  $s = {}.hasOwnProperty,
  as = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  pm = function (t, r) {
    var n = {};
    for (var a in r) $s.call(r, a) && (n[a] = r[a]);
    return ((n[as] = t), n);
  },
  hm = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      Ms(r, n, a),
      mv(function () {
        return yv(r, n, a);
      }),
      null
    );
  },
  gm = Ov(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[as],
      i = [n],
      o = "";
    typeof e.className == "string"
      ? (o = bv(t.registered, i, e.className))
      : e.className != null && (o = e.className + " ");
    var s = Ls(i, void 0, y.useContext(kv));
    o += t.key + "-" + s.name;
    var u = {};
    for (var c in e) $s.call(e, c) && c !== "css" && c !== as && (u[c] = e[c]);
    return (
      (u.className = o),
      r && (u.ref = r),
      y.createElement(
        y.Fragment,
        null,
        y.createElement(hm, { cache: t, serialized: s, isStringTag: typeof a == "string" }),
        y.createElement(a, u),
      )
    );
  }),
  bm = gm,
  Mt = function (t, r) {
    var n = arguments;
    if (r == null || !$s.call(r, "css")) return y.createElement.apply(void 0, n);
    var a = n.length,
      i = new Array(a);
    ((i[0] = bm), (i[1] = pm(t, r)));
    for (var o = 2; o < a; o++) i[o] = n[o];
    return y.createElement.apply(null, i);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Mt || (Mt = {}));
function Ct() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Ls(t);
}
var ym = function e(t) {
  for (var r = t.length, n = 0, a = ""; n < r; n++) {
    var i = t[n];
    if (i != null) {
      var o = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i)) o = e(i);
          else {
            o = "";
            for (var s in i) i[s] && s && (o && (o += " "), (o += s));
          }
          break;
        }
        default:
          o = i;
      }
      o && (a && (a += " "), (a += o));
    }
  }
  return a;
};
function _m(e, t, r) {
  var n = [],
    a = bv(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var mm = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      mv(function () {
        for (var a = 0; a < n.length; a++) yv(r, n[a], !1);
      }),
      null
    );
  },
  wm = Ov(function (e, t) {
    var r = [],
      n = function () {
        for (var u = arguments.length, c = new Array(u), l = 0; l < u; l++) c[l] = arguments[l];
        var d = Ls(c, t.registered);
        return (r.push(d), Ms(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var u = arguments.length, c = new Array(u), l = 0; l < u; l++) c[l] = arguments[l];
        return _m(t.registered, n, ym(c));
      },
      i = { css: n, cx: a, theme: y.useContext(kv) },
      o = e.children(i);
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(mm, { cache: t, serializedArr: r }),
      o,
    );
  });
function Om(e, t) {
  var r = y.useRef(!0);
  y.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Sv = 2,
  is = Ct({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Sv,
  }),
  os = Ct({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Sv,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  km = Ct({
    "&:focus": is,
    "&:focus-visible": is,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  Sm = Ct({
    "&:focus": os,
    "&:focus-visible": os,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Ev = y.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? os : is,
      i = r ? Sm : km,
      o = typeof n > "u" ? i : n === "on" && a;
    return Mt(wm, null, function (s) {
      var u = s.css,
        c = s.cx;
      return y.Children.only(
        o ? y.cloneElement(t, { className: c([u(o), t.props.className]) }) : t,
      );
    });
  });
Ev.displayName = "FocusRing";
function Tt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var Em = 9;
function Al(e) {
  e.keyCode !== Em && Tt(e);
}
var xm = {
    onMouseDownCapture: Tt,
    onMouseUpCapture: Tt,
    onKeyDownCapture: Al,
    onKeyUpCapture: Al,
    onTouchStartCapture: Tt,
    onTouchEndCapture: Tt,
    onPointerDownCapture: Tt,
    onPointerUpCapture: Tt,
    onClickCapture: Tt,
    onClick: Tt,
  },
  Cm = {};
function Rm(e) {
  var t = e.isInteractive;
  return t ? Cm : xm;
}
var jl = "rgba(179, 212, 255, 0.6)",
  Il = {
    background: {
      default: {
        default: {
          light: "var(--ds-background-neutral, ".concat(In, ")"),
          dark: "var(--ds-background-neutral, ".concat(Dn, ")"),
        },
        hover: {
          light: "var(--ds-background-neutral-hovered, ".concat(Qc, ")"),
          dark: "var(--ds-background-neutral-hovered, ".concat(el, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-pressed, ".concat(jl, ")"),
          dark: "var(--ds-background-neutral-pressed, ".concat(La, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(In, ")"),
          dark: "var(--ds-background-disabled, ".concat(Dn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-background-brand-bold, ".concat(Ar, ")"),
          dark: "var(--ds-background-brand-bold, ".concat(Yc, ")"),
        },
        hover: {
          light: "var(--ds-background-brand-bold-hovered, ".concat(Xc, ")"),
          dark: "var(--ds-background-brand-bold-hovered, ".concat(La, ")"),
        },
        active: {
          light: "var(--ds-background-brand-bold-pressed, ".concat(Zc, ")"),
          dark: "var(--ds-background-brand-bold-pressed, ".concat(Jc, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(In, ")"),
          dark: "var(--ds-background-disabled, ".concat(Dn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-background-warning-bold, ".concat(Kc, ")"),
          dark: "var(--ds-background-warning-bold, ".concat(Kc, ")"),
        },
        hover: {
          light: "var(--ds-background-warning-bold-hovered, ".concat(Wc, ")"),
          dark: "var(--ds-background-warning-bold-hovered, ".concat(Wc, ")"),
        },
        active: {
          light: "var(--ds-background-warning-bold-pressed, ".concat(Pr, ")"),
          dark: "var(--ds-background-warning-bold-pressed, ".concat(Pr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(In, ")"),
          dark: "var(--ds-background-disabled, ".concat(Dn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Pr, ")"),
          dark: "var(--ds-background-selected, ".concat(Pr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Pr, ")"),
          dark: "var(--ds-background-selected, ".concat(Pr, ")"),
        },
      },
      danger: {
        default: {
          light: "var(--ds-background-danger-bold, ".concat(Hc, ")"),
          dark: "var(--ds-background-danger-bold, ".concat(Hc, ")"),
        },
        hover: {
          light: "var(--ds-background-danger-bold-hovered, ".concat(Gc, ")"),
          dark: "var(--ds-background-danger-bold-hovered, ".concat(Gc, ")"),
        },
        active: {
          light: "var(--ds-background-danger-bold-pressed, ".concat(Rr, ")"),
          dark: "var(--ds-background-danger-bold-pressed, ".concat(Rr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(In, ")"),
          dark: "var(--ds-background-disabled, ".concat(Dn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Rr, ")"),
          dark: "var(--ds-background-selected, ".concat(Rr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Rr, ")"),
          dark: "var(--ds-background-selected, ".concat(Rr, ")"),
        },
      },
      link: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Re, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Re, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        hover: {
          light: "var(--ds-background-neutral-subtle-hovered, ".concat(Qc, ")"),
          dark: "var(--ds-background-neutral-subtle-hovered, ".concat(el, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-subtle-pressed, ".concat(jl, ")"),
          dark: "var(--ds-background-neutral-subtle-pressed, ".concat(La, ")"),
        },
        disabled: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Re, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Re, ")"),
        },
      },
    },
    color: {
      default: {
        default: {
          light: "var(--ds-text, ".concat(ca, ")"),
          dark: "var(--ds-text, ".concat(it, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Ar, ")"),
          dark: "var(--ds-text, ".concat(Ar, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(sr, ")"),
          dark: "var(--ds-text-disabled, ".concat(Tn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Yt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Tn, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(sr, ")"),
          dark: "var(--ds-text-disabled, ".concat(Tn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-text-warning-inverse, ".concat(jr, ")"),
          dark: "var(--ds-text-warning-inverse, ".concat(jr, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(sr, ")"),
          dark: "var(--ds-text-disabled, ".concat(Tn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(jr, ")"),
          dark: "var(--ds-text-selected, ".concat(jr, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(jr, ")"),
          dark: "var(--ds-text-selected, ".concat(jr, ")"),
        },
      },
      danger: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Yt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Yt, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(sr, ")"),
          dark: "var(--ds-text-disabled, ".concat(Tn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Yt, ")"),
          dark: "var(--ds-text-selected, ".concat(Yt, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Yt, ")"),
          dark: "var(--ds-text-selected, ".concat(Yt, ")"),
        },
      },
      link: {
        default: {
          light: "var(--ds-link, ".concat(Ar, ")"),
          dark: "var(--ds-link, ".concat(Yc, ")"),
        },
        hover: {
          light: "var(--ds-link, ".concat(Xc, ")"),
          dark: "var(--ds-link, ".concat(La, ")"),
        },
        active: {
          light: "var(--ds-link-pressed, ".concat(Zc, ")"),
          dark: "var(--ds-link-pressed, ".concat(Jc, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(sr, ")"),
          dark: "var(--ds-text-disabled, ".concat(Ro, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(Ke, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(Ke, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-text, ".concat(ca, ")"),
          dark: "var(--ds-text, ".concat(it, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Ar, ")"),
          dark: "var(--ds-text, ".concat(Ar, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(sr, ")"),
          dark: "var(--ds-text-disabled, ".concat(Ro, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-text-subtle, ".concat(Wb, ")"),
          dark: "var(--ds-text-subtle, ".concat(it, ")"),
        },
        hover: {
          light: "var(--ds-text-subtle, ".concat(Hb, ")"),
          dark: "var(--ds-text-subtle, ".concat(Gb, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Kb, ")"),
          dark: "var(--ds-text, ".concat(Yb, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(sr, ")"),
          dark: "var(--ds-text-disabled, ".concat(Ro, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
      },
    },
  };
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
function ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Dl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Jt = 8,
  Mo = ["default", "primary", "danger", "warning"],
  ss = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  Pm = { default: ss.default, compact: ss.compact, none: "inherit" },
  Am = {
    default: "0 ".concat(Jt + Jt / 4, "px"),
    compact: "0 ".concat(Jt + Jt / 4, "px"),
    none: "0",
  },
  jm = { compact: "0 ".concat(Jt / 4, "px"), default: "0 ".concat(Jt / 4, "px"), none: "0" },
  Im = { default: "middle", compact: "middle", none: "baseline" },
  xv = { content: "0 ".concat(Jt / 4, "px"), icon: "0 ".concat(Jt / 4, "px") },
  Cv = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  Dm = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #172B4D)",
    "&::after": ne(ne({}, Cv), {}, { content: '""', borderColor: "var(--ds-border, #091E4224)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #091E4224)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #091E424F)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  Tm = {
    background: "var(--ds-background-brand-bold, #0C66E4)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #0055CC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #09326C)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #0C66E4)",
    },
  },
  Mm = {
    background: "transparent",
    color: "var(--ds-link, #0C66E4)",
    "&:hover": { color: "var(--ds-link, #0C66E4)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #0055CC)", textDecoration: "underline" },
  },
  Lm = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #091E420F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #091E4224)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  $m = {
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
  Nm = {
    background: "var(--ds-background-warning-bold, #F5CD47)",
    color: "var(--ds-text-warning-inverse, #172B4D)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #E2B203)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #CF9F02)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #F5CD47)",
    },
  },
  Fm = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #5D1F1A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  Bm = {
    background: "var(--ds-background-selected, #E9F2FF)",
    color: "var(--ds-text-selected, #0C66E4)",
    "&:not([disabled])::after": ne(
      ne({}, Cv),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #0C66E4)" },
    ),
  },
  Tl = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function Ml(e) {
  var t = e.group,
    r = e.key,
    n = e.mode,
    a = t[r] || t.default;
  return a[n];
}
function Tr(e) {
  var t = e.appearance,
    r = e.key,
    n = e.mode;
  return {
    background: Ml({ group: Il.background[t], key: r, mode: n }),
    color: "".concat(Ml({ group: Il.color[t], key: r, mode: n }), " !important"),
  };
}
function zm(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.mode,
    a = e.isSelected,
    i = e.shouldFitContainer,
    o = e.isOnlySingleIcon,
    s = Tr({ appearance: t, key: a ? "selected" : "default", mode: n });
  return ne(
    ne(
      ne(
        ne(
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
          !$e("platform-component-visual-refresh") && s,
        ),
        {},
        {
          cursor: "pointer",
          height: ss[r],
          lineHeight: Pm[r],
          padding: o ? jm[r] : Am[r],
          verticalAlign: Im[r],
          width: i ? "100%" : "auto",
          justifyContent: "center",
        },
        !$e("platform-component-visual-refresh") &&
          ne(
            ne(
              {
                "&:visited": ne({}, s),
                "&:hover": ne(
                  ne({}, Tr({ appearance: t, key: a ? "selected" : "hover", mode: n })),
                  {},
                  {
                    textDecoration:
                      !a && (t === "link" || t === "subtle-link") ? "underline" : "inherit",
                    transitionDuration: "0s, 0.15s",
                  },
                ),
                "&:active": ne(
                  ne({}, Tr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                '&[data-firefox-is-active="true"]': ne(
                  ne({}, Tr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                "&[disabled]": ne(
                  ne({}, Tr({ appearance: t, key: "disabled", mode: n })),
                  {},
                  { cursor: "not-allowed", textDecoration: "none" },
                ),
              },
              Tl,
            ),
            {},
            {
              '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active':
                ne({}, Tr({ appearance: t, key: a ? "selected" : "default", mode: n })),
            },
          ),
      ),
      $e("platform-component-visual-refresh") &&
        (a
          ? Bm
          : ne(
              ne(
                ne(
                  ne(
                    ne(
                      ne(
                        ne(ne({}, t === "default" && Dm), t === "primary" && Tm),
                        t === "link" && Mm,
                      ),
                      t === "subtle" && Lm,
                    ),
                    t === "subtle-link" && $m,
                  ),
                  t === "warning" && Nm,
                ),
                t === "danger" && Fm,
              ),
              {},
              {
                "&[disabled]": {
                  color: "var(--ds-text-disabled, #091E424F)",
                  backgroundColor: Mo.includes(t)
                    ? "var(--ds-background-disabled, #091E4208)"
                    : "transparent",
                  cursor: "not-allowed",
                  textDecoration: "none",
                  "&:hovered": {
                    backgroundColor: Mo.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                  "&:active": {
                    backgroundColor: Mo.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                },
              },
              Tl,
            )),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function Ll(e) {
  var t = e.spacing;
  return Ct({
    display: "flex",
    margin: t === "none" ? 0 : xv.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function qm(e) {
  var t = e.spacing;
  return Ct({
    margin: t === "none" ? 0 : xv.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function Um(e) {
  var t = e.hasOverlay;
  return Ct({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var Vm = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Ns = function (t) {
    return t && y.isValidElement(t) && t.type === cv;
  },
  Gm = [
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
  Hm = { "> *": { pointerEvents: "none" } },
  Wm = Ct({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  Km = Ct({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  $l = function (t, r) {
    return !t || Ns(t) ? null : r;
  },
  Ym = function (t, r) {
    return Ns(t) ? t : t ? Mt("span", { css: r }, t) : null;
  },
  Jm = k.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      a = t.appearance,
      i = a === void 0 ? "default" : a,
      o = t.autoFocus,
      s = o === void 0 ? !1 : o,
      u = t.buttonCss,
      c = t.children,
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
      O = w === void 0 ? !1 : w,
      _ = t.onBlur,
      S = t.onClick,
      E = S === void 0 ? me : S,
      j = t.onFocus,
      D = t.onMouseDown,
      R = D === void 0 ? me : D,
      T = t.overlay;
    t.shouldFitContainer;
    var z = t.spacing,
      B = z === void 0 ? "default" : z,
      V = t.tabIndex,
      J = V === void 0 ? 0 : V,
      G = t.type,
      q = G === void 0 ? (d ? void 0 : "button") : G,
      X = t.testId,
      N = ae(t, Gm),
      A = y.useRef(),
      be = y.useCallback(
        function (ve) {
          if (((A.current = ve), r != null)) {
            if (typeof r == "function") {
              r(ve);
              return;
            }
            r.current = ve;
          }
        },
        [A, r],
      );
    Om(A, s);
    var oe = y.useContext(As),
      ue = y.useCallback(
        function (ve, Ve) {
          (oe && oe.tracePress(g, ve.timeStamp), E(ve, Ve));
        },
        [E, oe, g],
      ),
      le = ua({
        fn: ue,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      ge = y.useCallback(
        function (ve) {
          (ve.preventDefault(), R(ve));
        },
        [R],
      );
    y.useEffect(
      function () {
        var ve = A.current;
        m && ve && ve === document.activeElement && ve.blur();
      },
      [m],
    );
    var ce = !!T,
      Ue = Ct(Um({ hasOverlay: ce })),
      Oe = !m && !ce,
      rt = {};
    return (
      (O || m || i === "warning") &&
        (rt = {
          "[data-theme] & circle": {
            stroke: "".concat(
              O || m
                ? "var(--ds-icon-subtle, ".concat(ca, ")")
                : "var(--ds-icon-warning-inverse, ".concat(ca, ")"),
              " !important",
            ),
          },
        }),
      Mt(
        Ev,
        null,
        Mt(
          p,
          te(
            {},
            N,
            {
              ref: be,
              className: l,
              css: [u, Oe ? null : Hm],
              "data-has-overlay": ce ? !0 : void 0,
              "data-testid": X,
              disabled: m,
              href: Oe ? d : void 0,
              onBlur: _,
              onClick: le,
              onFocus: j,
              onMouseDown: ge,
              tabIndex: m ? -1 : J,
              type: q,
            },
            Rm({ isInteractive: Oe }),
          ),
          v ? Mt("span", { css: [Ue, Ll({ spacing: B }), $l(c, Wm)] }, v) : null,
          Ym(c, [Ue, qm({ spacing: B })]),
          h ? Mt("span", { css: [Ue, Ll({ spacing: B }), $l(c, Km)] }, h) : null,
          T ? Mt("span", { css: [Vm, rt] }, T) : null,
        ),
      )
    );
  });
function Xm(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Ns(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var Zm = [
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
  Nl = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  Fs = k.memo(
    k.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        i = t.children,
        o = t.iconBefore,
        s = t.iconAfter,
        u = t.isSelected,
        c = u === void 0 ? !1 : u,
        l = t.onMouseDown,
        d = l === void 0 ? me : l,
        f = t.onMouseUp,
        p = f === void 0 ? me : f,
        h = t.shouldFitContainer,
        v = h === void 0 ? !1 : h,
        g = t.spacing,
        b = g === void 0 ? "default" : g,
        m = ae(t, Zm),
        w = x_(),
        O = w.mode,
        _ = Xm({ children: i, iconBefore: o, iconAfter: s }),
        S = y.useState(!1),
        E = K(S, 2),
        j = E[0],
        D = E[1],
        R = y.useCallback(
          function (B) {
            (d(B), Nl && D(!0));
          },
          [d, D],
        ),
        T = y.useCallback(
          function (B) {
            (p(B), Nl && D(!1));
          },
          [p, D],
        ),
        z = y.useMemo(
          function () {
            return zm({
              appearance: a,
              spacing: b,
              mode: O,
              isSelected: c,
              shouldFitContainer: v,
              isOnlySingleIcon: _,
            });
          },
          [a, b, O, c, v, _],
        );
      return k.createElement(
        Jm,
        te({}, m, {
          ref: r,
          appearance: a,
          buttonCss: z,
          children: i,
          "data-firefox-is-active": j ? !0 : void 0,
          iconAfter: s,
          iconBefore: o,
          isSelected: c,
          onMouseDown: R,
          onMouseUp: T,
          spacing: b,
        }),
      );
    }),
  );
Fs.displayName = "Button";
function Fl(e) {
  return k.createElement(Fs, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function Qm(e) {
  return k.createElement(Fs, te({}, e, { appearance: "subtle" }));
}
var e0 = { container: "_1e0c1txw _kqswh2mm" };
function t0(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return k.createElement(
    wi,
    { as: "li", testId: r, key: t, xcss: e0.container, paddingInline: "space.100" },
    k.createElement(
      r_,
      { testId: r && "".concat(r, "-text") },
      k.createElement(cv, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var Bl = {},
  zl =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function r0(e, t) {
  return !!(e === t || (zl(e) && zl(t)));
}
function n0(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!r0(e[r], t[r])) return !1;
  return !0;
}
function a0(e, t) {
  t === void 0 && (t = n0);
  var r = null;
  function n() {
    for (var a = [], i = 0; i < arguments.length; i++) a[i] = arguments[i];
    if (r && r.lastThis === this && t(a, r.lastArgs)) return r.lastResult;
    var o = e.apply(this, a);
    return ((r = { lastResult: o, lastArgs: a, lastThis: this }), o);
  }
  return (
    (n.clear = function () {
      r = null;
    }),
    n
  );
}
var i0 = function (t, r, n, a) {
  var i = n.max,
    o = n.ellipsis,
    s = n.transform,
    u = t.length,
    c = u > i,
    l = c && i - 4 < r,
    d = c && r < u - i + 3,
    f = a0(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : u;
      return t.slice(g, b).map(function (m, w) {
        return s(m, g + w, a);
      });
    });
  if (!c) return f(0, u);
  if (l && !d) {
    var p = i - 2;
    return [].concat(
      Te(f(0, 1)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: u - p })],
      Te(f(u - p)),
    );
  }
  if (!l && d) {
    var h = i - 2;
    return [].concat(
      Te(f(0, h)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: h + 1, to: u - 1 })],
      Te(f(u - 1)),
    );
  }
  var v = i - 4;
  return [].concat(
    Te(f(0, 1)),
    [
      o({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(v / 2),
      }),
    ],
    Te(f(r - Math.floor(v / 2), r + v - 1)),
    [o({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: u - 1 })],
    Te(f(u - 1)),
  );
};
function ql(e, t) {
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
      ? ql(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ql(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var us = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  s0 = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.11",
  };
function Ul(e) {
  var t = e.chevronDirection,
    r = t === "left" ? wy : xy;
  return k.createElement(
    wi,
    { as: "span", xcss: us.navigatorIconWrapper },
    k.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function u0(e, t) {
  var r = e.components,
    n = r === void 0 ? Bl : r,
    a = e.defaultSelectedIndex,
    i = a === void 0 ? 0 : a,
    o = e.selectedIndex,
    s = e.label,
    u = s === void 0 ? "pagination" : s,
    c = e.pageLabel,
    l = c === void 0 ? "page" : c,
    d = e.previousLabel,
    f = d === void 0 ? "previous" : d,
    p = e.nextLabel,
    h = p === void 0 ? "next" : p,
    v = e.style,
    g = v === void 0 ? Bl : v,
    b = e.max,
    m = b === void 0 ? 7 : b,
    w = e.onChange,
    O = w === void 0 ? me : w,
    _ = e.pages,
    S = e.getPageLabel,
    E = e.renderEllipsis,
    j = E === void 0 ? t0 : E,
    D = e.analyticsContext,
    R = e.testId,
    T = e.isDisabled,
    z = uy(o, function () {
      return i || 0;
    }),
    B = K(z, 2),
    V = B[0],
    J = B[1],
    G = ua(
      o0(
        {
          fn: function (N, A) {
            var be = N.event,
              oe = N.selectedPageIndex;
            (o === void 0 && J(oe), O && O(be, _[oe], A));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: D,
        },
        s0,
      ),
    ),
    q = function (N, A, be) {
      var oe = _[V],
        ue = "".concat(l, " ").concat(S ? S(N, A) : N),
        le = N === oe;
      return k.createElement(
        Va,
        { as: "li", xcss: us.paginationMenuItem, key: "page-".concat(S ? S(N, A) : A) },
        k.createElement(
          Qm,
          {
            component: n.Page,
            onClick: function (ce) {
              return G({ event: ce, selectedPageIndex: A });
            },
            "aria-current": le ? "page" : void 0,
            "aria-label": ue,
            isSelected: le,
            isDisabled: T,
            page: N,
            testId:
              be &&
              ""
                .concat(be, "--")
                .concat(le ? "current-" : "", "page-")
                .concat(A),
          },
          S ? S(N, A) : N,
        ),
      );
    };
  return k.createElement(
    wi,
    { testId: R, style: g, ref: t, "aria-label": u, as: "nav" },
    k.createElement(
      Va,
      { space: "space.0", alignBlock: "center" },
      k.createElement(Fl, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (N) {
          return G({ event: N, selectedPageIndex: V - 1 });
        },
        isDisabled: T || V === 0,
        iconBefore: k.createElement(Ul, { chevronDirection: "left" }),
        "aria-label": f,
        testId: R && "".concat(R, "--left-navigator"),
      }),
      k.createElement(
        Va,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: us.paginationMenu },
        i0(_, V, { max: m, ellipsis: j, transform: q }, R),
      ),
      k.createElement(Fl, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (N) {
          return G({ event: N, selectedPageIndex: V + 1 });
        },
        isDisabled: T || V === _.length - 1,
        iconBefore: k.createElement(Ul, { chevronDirection: "right" }),
        "aria-label": h,
        testId: R && "".concat(R, "--right-navigator"),
      }),
    ),
  );
}
var c0 = y.memo(y.forwardRef(u0));
function l0(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Rv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Rv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Rv = function () {
    return !!e;
  })();
}
var d0 = (function (e) {
    function t() {
      var r;
      de(this, t);
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
      return (
        (r = l0(this, t, [].concat(a))),
        x(r, "onChange", function (o, s, u) {
          r.props.onChange(s, u);
        }),
        r
      );
    }
    return (
      ze(t, e),
      fe(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.total,
              i = n.value,
              o = i === void 0 ? 1 : i,
              s = n.i18n,
              u = n.testId,
              c = n.isDisabled,
              l = Te(Array(a)).map(function (f, p) {
                return p + 1;
              }),
              d = o - 1;
            return k.createElement(c0, {
              selectedIndex: d,
              isDisabled: c,
              label: s?.label,
              nextLabel: s?.next,
              previousLabel: s?.prev,
              pageLabel: s?.pageLabel,
              onChange: this.onChange,
              pages: l,
              testId: u && "".concat(u, "--pagination"),
            });
          },
        },
      ])
    );
  })(k.Component),
  f0 = ["isRanking", "testId"],
  v0 = [
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
function Vl(e, t) {
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
function Un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Gl = "--local-dynamic-table-text-color",
  p0 = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = ae(t, f0);
    return y.createElement(
      "thead",
      te({ "data-testid": n }, a, { className: C(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  h0 = y.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      i = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var s = e.style,
      u = e.testId,
      c = ae(e, v0),
      l = Un(
        Un(Un({}, s), r && Kf({ width: r })),
        {},
        x({}, Gl, "var(--ds-text-subtlest, #626F86)"),
      ),
      d = a === dr,
      f = a === ai,
      p = function () {
        if (d) return "ascending";
        if (f) return "descending";
      },
      h = n ? "th" : "td";
    return y.createElement(
      h,
      te({ "aria-sort": p(), onClick: void 0, ref: t, "data-testid": u }, c, {
        className: C([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r187z _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbi3bv",
          "_1bsb8a2a",
          i && o && "_1bto1l2s _o5721q9c",
          i && "_1reo15vq _18m915vq",
        ]),
        style: Un(
          Un({}, l),
          {},
          { "--_17ckjys": Hf("var(--ds-text-subtle, ".concat("var(".concat(Gl, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function g0(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Pv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Pv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Pv = function () {
    return !!e;
  })();
}
function b0(e) {
  return (function (t) {
    function r() {
      var n;
      de(this, r);
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return (
        (n = g0(this, r, [].concat(i))),
        x(n, "state", { refWidth: 0, refHeight: 0 }),
        x(n, "innerRef", function (s) {
          s && !n.props.isRanking && (n.ref = s);
        }),
        x(n, "updateDimensions", function () {
          if (n.ref) {
            var s = n.ref.getBoundingClientRect(),
              u = s.width,
              c = s.height;
            (u !== n.state.refWidth || c !== n.state.refHeight) &&
              n.setState({ refWidth: u, refHeight: c });
          }
        }),
        n
      );
    }
    return (
      ze(r, t),
      fe(r, [
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (a) {
            var i = this.props.isRanking,
              o = a.isRanking;
            o && !i && this.updateDimensions();
          },
        },
        {
          key: "render",
          value: function () {
            var a = this.state,
              i = a.refWidth,
              o = a.refHeight;
            return k.createElement(
              e,
              te({ refWidth: i, refHeight: o, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(k.Component);
}
var Vn = {},
  Hl;
function y0() {
  if (Hl) return Vn;
  ((Hl = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.default = void 0));
  var e = r(dt()),
    t = r(mi);
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
  return ((n.displayName = "ArrowDownIcon"), (Vn.default = n), Vn);
}
var _0 = y0();
const m0 = er(_0);
var Gn = {},
  Wl;
function w0() {
  if (Wl) return Gn;
  ((Wl = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.default = void 0));
  var e = r(dt()),
    t = r(mi);
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
  return ((n.displayName = "ArrowUpIcon"), (Gn.default = n), Gn);
}
var O0 = w0();
const k0 = er(O0);
var S0 = "Escape";
function E0(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = y.useRef(!1),
    a = y.useCallback(
      function (o) {
        r || n.current || o.key !== S0 || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    i = y.useCallback(function () {
      n.current = !1;
    }, []);
  y.useEffect(
    function () {
      if (!(r && $e("platform_only_attach_escape_handler_on_view")))
        return Oi.bindAll(
          document,
          [
            { type: "keydown", listener: a },
            { type: "keyup", listener: i },
          ],
          { capture: !1 },
        );
    },
    [a, i, r],
  );
}
function Hn(e) {
  var t = y.useRef(e);
  return (
    y.useEffect(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
var x0 = y.createContext(null),
  C0 = y.createContext(null);
function R0() {
  var e = y.useContext(C0);
  return e;
}
function P0(e) {
  var t = e.isOpen,
    r = e.onClose,
    n = y.useContext(x0),
    a = R0();
  y.useEffect(
    function () {
      if (n !== null && t) return n.onClose(r, { namespace: a });
    },
    [n, t, a, r],
  );
}
var Jn = { none: 0, small: 100, medium: 350, large: 700 },
  Lo = 0.5,
  A0 = { none: Jn.none, small: Jn.small * Lo, medium: Jn.medium * Lo, large: Jn.large * Lo },
  j0 = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  I0 = function () {
    if (!j0()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  D0 = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  T0 = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { cleanup: "unmount" },
      r = y.useRef([]);
    return (
      y.useEffect(function () {
        return function () {
          r.current.length &&
            (r.current.forEach(function (n) {
              return clearTimeout(n);
            }),
            (r.current = []));
        };
      }, D0(t)),
      y.useCallback(function (n, a) {
        for (var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++)
          o[s - 2] = arguments[s];
        var u = setTimeout.apply(
          void 0,
          [
            function () {
              ((r.current = r.current.filter(function (c) {
                return c !== u;
              })),
                n());
            },
            a,
          ].concat(o),
        );
        r.current.push(u);
      }, [])
    );
  },
  Av = { appear: !0, isExiting: !1 },
  jv = y.createContext(Av),
  Kl = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Av;
    return k.createElement(jv.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  Yl = function (t) {
    var r = [];
    return (
      y.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  M0 = function (t, r) {
    for (var n = r.concat([]), a = L0(r), i = 0; i < t.length; i++) {
      var o = t[i],
        s = !a[o.key];
      s && n.splice(i + 1, 0, o);
    }
    return n;
  },
  L0 = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  $0 = function (t, r) {
    for (
      var n = new Set(
          t.map(function (u) {
            return u.key;
          }),
        ),
        a = new Set(),
        i = 0;
      i < r.length;
      i++
    ) {
      var o = r[i],
        s = o.key;
      n.has(s) || a.add(s);
    }
    return a;
  },
  Iv = y.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      i = y.useState([null, n]),
      o = K(i, 2),
      s = o[0],
      u = o[1],
      c = y.useState([]),
      l = K(c, 2),
      d = l[0],
      f = l[1],
      p = y.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      h = K(p, 2),
      v = h[0],
      g = h[1];
    if (
      (y.useEffect(function () {
        v.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      typeof s == "boolean")
    )
      return n;
    var b = K(s, 2),
      m = b[0],
      w = b[1],
      O = Yl(m),
      _ = Yl(w);
    w !== n && u([w, n]);
    var S = $0(_, O),
      E = !!S.size,
      j = _;
    if ((E && (j = M0(_, O)), a))
      if (d.length) j = d;
      else {
        var D = j.filter(function (R) {
          return S.has(R.key);
        });
        D.length && f(D);
      }
    return (
      S.size
        ? (j = j.map(function (R) {
            var T = S.has(R.key);
            return Kl(R, {
              appear: !0,
              isExiting: T,
              onFinish: T
                ? function () {
                    (S.delete(R.key), S.size === 0 && (u([null, n]), f([])));
                  }
                : void 0,
            });
          }))
        : (j = j.map(function (R) {
            return Kl(R, v);
          })),
      j
    );
  }),
  N0 = function () {
    return y.useContext(jv);
  };
Iv.displayName = "ExitingPersistence";
function F0() {
  var e = y.useRef("");
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
var B0 = y.createContext(function () {
    return { isReady: !0, delay: 0, ref: me };
  }),
  z0 = function () {
    var t = F0(),
      r = y.useContext(B0);
    return r(t);
  },
  q0 = function (t) {
    var r = t.children,
      n = t.animationTimingFunction,
      a = t.animationTimingFunctionExiting,
      i = a === void 0 ? n : a,
      o = t.enteringAnimation,
      s = t.exitingAnimation,
      u = s === void 0 ? o : s,
      c = t.isPaused,
      l = t.onFinish,
      d = t.duration,
      f = d === void 0 ? "large" : d,
      p = z0(),
      h = N0(),
      v = h.isExiting,
      g = h.onFinish,
      b = h.appear,
      m = T0(),
      w = c || !p.isReady,
      O = v ? 0 : p.delay,
      _ = v ? "exiting" : "entering",
      S = y.useState(b),
      E = K(S, 2),
      j = E[0],
      D = E[1];
    return (
      y.useEffect(
        function () {
          var R = !1;
          if (!w) {
            if (!b) {
              l && l(_);
              return;
            }
            var T = function () {
              (_ === "exiting" && g?.(), R || D(!1), l?.(_));
            };
            if (I0()) {
              T();
              return;
            }
            return (
              D(!0),
              m(T, v ? A0[f] : Jn[f] + O),
              function () {
                R = !0;
              }
            );
          }
        },
        [g, _, v, f, O, w, m],
      ),
      r(
        {
          ref: p.ref,
          className: j
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
                v && i === "ease-out" && C(["_1pgldkwg"]),
                v && i === "ease-in" && C(["_1pgl1nzg"]),
                v && i === "ease-in-40-out" && C(["_1pgl5y64"]),
                v && i === "ease-in-60-out" && C(["_1pgl1ddy"]),
                v && i === "ease-in-80-out" && C(["_1pglannl"]),
                v && i === "ease-in-out" && C(["_1pgl1fu8"]),
                ((!v && o === "fade-in") || (v && u === "fade-in")) && C(["_j7hq1cgr"]),
                ((!v && o === "fade-out") || (v && u === "fade-out")) && C(["_j7hq1lln"]),
                ((!v && o === "zoom-in") || (v && u === "zoom-in")) && C(["_j7hqe8p0"]),
                ((!v && o === "zoom-out") || (v && u === "zoom-out")) && C(["_j7hqy6ql"]),
                ((!v && o === "slide-in-from-top") || (v && u === "slide-in-from-top")) &&
                  C(["_j7hqqshu"]),
                ((!v && o === "slide-out-from-top") || (v && u === "slide-out-from-top")) &&
                  C(["_j7hq7ri4"]),
                ((!v && o === "slide-in-from-right") || (v && u === "slide-in-from-right")) &&
                  C(["_j7hqdfjr"]),
                ((!v && o === "slide-out-from-right") || (v && u === "slide-out-from-right")) &&
                  C(["_j7hqonfj"]),
                ((!v && o === "slide-in-from-bottom") || (v && u === "slide-in-from-bottom")) &&
                  C(["_j7hq1liq"]),
                ((!v && o === "slide-out-from-bottom") || (v && u === "slide-out-from-bottom")) &&
                  C(["_j7hqhnf1"]),
                ((!v && o === "slide-in-from-left") || (v && u === "slide-in-from-left")) &&
                  C(["_j7hq1bh1"]),
                ((!v && o === "slide-out-from-left") || (v && u === "slide-out-from-left")) &&
                  C(["_j7hqj08w"]),
                ((!v && o === "fade-in-from-top") || (v && u === "fade-in-from-top")) &&
                  C(["_j7hq2iua"]),
                ((!v && o === "fade-out-from-top") || (v && u === "fade-out-from-top")) &&
                  C(["_j7hq39va"]),
                ((!v && o === "fade-in-from-left") || (v && u === "fade-in-from-left")) &&
                  C(["_j7hq15m2"]),
                ((!v && o === "fade-out-from-left") || (v && u === "fade-out-from-left")) &&
                  C(["_j7hq1yiv"]),
                ((!v && o === "fade-in-from-bottom") || (v && u === "fade-in-from-bottom")) &&
                  C(["_j7hq1w00"]),
                ((!v && o === "fade-out-from-bottom") || (v && u === "fade-out-from-bottom")) &&
                  C(["_j7hqzy3z"]),
                ((!v && o === "fade-in-from-right") || (v && u === "fade-in-from-right")) &&
                  C(["_j7hqpqak"]),
                ((!v && o === "fade-out-from-right") || (v && u === "fade-out-from-right")) &&
                  C(["_j7hq1ebg"]),
                ((!v && o === "fade-in-from-top-constant") ||
                  (v && u === "fade-in-from-top-constant")) &&
                  C(["_j7hqm2e2"]),
                ((!v && o === "fade-out-from-top-constant") ||
                  (v && u === "fade-out-from-top-constant")) &&
                  C(["_j7hq97jn"]),
                ((!v && o === "fade-in-from-left-constant") ||
                  (v && u === "fade-in-from-left-constant")) &&
                  C(["_j7hqovgq"]),
                ((!v && o === "fade-out-from-left-constant") ||
                  (v && u === "fade-out-from-left-constant")) &&
                  C(["_j7hq15do"]),
                ((!v && o === "fade-in-from-bottom-constant") ||
                  (v && u === "fade-in-from-bottom-constant")) &&
                  C(["_j7hq797a"]),
                ((!v && o === "fade-out-from-bottom-constant") ||
                  (v && u === "fade-out-from-bottom-constant")) &&
                  C(["_j7hqwo7r"]),
                ((!v && o === "fade-in-from-right-constant") ||
                  (v && u === "fade-in-from-right-constant")) &&
                  C(["_j7hqt8u5"]),
                ((!v && o === "fade-out-from-right-constant") ||
                  (v && u === "fade-out-from-right-constant")) &&
                  C(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(O, "ms") },
        },
        _,
      )
    );
  },
  U0 = { top: "bottom", bottom: "top", left: "right", right: "left" },
  V0 = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      i = t.entranceDirection,
      o = t.exitDirection,
      s = t.distance,
      u = s === void 0 ? "proportional" : s,
      c = t.onFinish,
      l = t.isPaused,
      d = i !== void 0 ? U0[i] : void 0,
      f =
        o || d
          ? "fade-out-from-".concat(o || d).concat(u === "proportional" ? "" : "-constant")
          : "fade-out";
    return k.createElement(
      q0,
      {
        duration: a,
        enteringAnimation: i
          ? "fade-in-from-".concat(i).concat(u === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: f,
        animationTimingFunction: "ease-in-out",
        onFinish: c,
        isPaused: l,
      },
      r,
    );
  },
  G0 = y.createContext();
y.createContext();
var H0 = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  W0 = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  K0 = function (t, r) {
    if (typeof t == "function") return W0(t, r);
    t != null && (t.current = r);
  },
  Jl = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        i = n[1];
      return ((r[a] = i), r);
    }, {});
  },
  Xl =
    typeof window < "u" && window.document && window.document.createElement
      ? y.useLayoutEffect
      : y.useEffect,
  Pe = "top",
  et = "bottom",
  tt = "right",
  Ae = "left",
  Bs = "auto",
  ma = [Pe, et, tt, Ae],
  Ur = "start",
  va = "end",
  Y0 = "clippingParents",
  Dv = "viewport",
  Wn = "popper",
  J0 = "reference",
  Zl = ma.reduce(function (e, t) {
    return e.concat([t + "-" + Ur, t + "-" + va]);
  }, []),
  Tv = [].concat(ma, [Bs]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Ur, t + "-" + va]);
  }, []),
  X0 = "beforeRead",
  Z0 = "read",
  Q0 = "afterRead",
  ew = "beforeMain",
  tw = "main",
  rw = "afterMain",
  nw = "beforeWrite",
  aw = "write",
  iw = "afterWrite",
  ow = [X0, Z0, Q0, ew, tw, rw, nw, aw, iw];
function Et(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Fe(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function fr(e) {
  var t = Fe(e).Element;
  return e instanceof t || e instanceof Element;
}
function Qe(e) {
  var t = Fe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function zs(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Fe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function sw(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      i = t.elements[r];
    !Qe(i) ||
      !Et(i) ||
      (Object.assign(i.style, n),
      Object.keys(a).forEach(function (o) {
        var s = a[o];
        s === !1 ? i.removeAttribute(o) : i.setAttribute(o, s === !0 ? "" : s);
      }));
  });
}
function uw(e) {
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
          i = t.attributes[n] || {},
          o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          s = o.reduce(function (u, c) {
            return ((u[c] = ""), u);
          }, {});
        !Qe(a) ||
          !Et(a) ||
          (Object.assign(a.style, s),
          Object.keys(i).forEach(function (u) {
            a.removeAttribute(u);
          }));
      });
    }
  );
}
const cw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: sw,
  effect: uw,
  requires: ["computeStyles"],
};
function wt(e) {
  return e.split("-")[0];
}
var cr = Math.max,
  ui = Math.min,
  Vr = Math.round;
function cs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Mv() {
  return !/^((?!chrome|android).)*safari/i.test(cs());
}
function Gr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    i = 1;
  t &&
    Qe(e) &&
    ((a = (e.offsetWidth > 0 && Vr(n.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Vr(n.height) / e.offsetHeight) || 1));
  var o = fr(e) ? Fe(e) : window,
    s = o.visualViewport,
    u = !Mv() && r,
    c = (n.left + (u && s ? s.offsetLeft : 0)) / a,
    l = (n.top + (u && s ? s.offsetTop : 0)) / i,
    d = n.width / a,
    f = n.height / i;
  return { width: d, height: f, top: l, right: c + d, bottom: l + f, left: c, x: c, y: l };
}
function qs(e) {
  var t = Gr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Lv(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && zs(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function zt(e) {
  return Fe(e).getComputedStyle(e);
}
function lw(e) {
  return ["table", "td", "th"].indexOf(Et(e)) >= 0;
}
function tr(e) {
  return ((fr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function xi(e) {
  return Et(e) === "html" ? e : e.assignedSlot || e.parentNode || (zs(e) ? e.host : null) || tr(e);
}
function Ql(e) {
  return !Qe(e) || zt(e).position === "fixed" ? null : e.offsetParent;
}
function dw(e) {
  var t = /firefox/i.test(cs()),
    r = /Trident/i.test(cs());
  if (r && Qe(e)) {
    var n = zt(e);
    if (n.position === "fixed") return null;
  }
  var a = xi(e);
  for (zs(a) && (a = a.host); Qe(a) && ["html", "body"].indexOf(Et(a)) < 0; ) {
    var i = zt(a);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return a;
    a = a.parentNode;
  }
  return null;
}
function wa(e) {
  for (var t = Fe(e), r = Ql(e); r && lw(r) && zt(r).position === "static"; ) r = Ql(r);
  return r && (Et(r) === "html" || (Et(r) === "body" && zt(r).position === "static"))
    ? t
    : r || dw(e) || t;
}
function Us(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ea(e, t, r) {
  return cr(e, ui(t, r));
}
function fw(e, t, r) {
  var n = ea(e, t, r);
  return n > r ? r : n;
}
function $v() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Nv(e) {
  return Object.assign({}, $v(), e);
}
function Fv(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var vw = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Nv(typeof t != "number" ? t : Fv(t, ma))
  );
};
function pw(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    i = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    s = wt(r.placement),
    u = Us(s),
    c = [Ae, tt].indexOf(s) >= 0,
    l = c ? "height" : "width";
  if (!(!i || !o)) {
    var d = vw(a.padding, r),
      f = qs(i),
      p = u === "y" ? Pe : Ae,
      h = u === "y" ? et : tt,
      v = r.rects.reference[l] + r.rects.reference[u] - o[u] - r.rects.popper[l],
      g = o[u] - r.rects.reference[u],
      b = wa(i),
      m = b ? (u === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      w = v / 2 - g / 2,
      O = d[p],
      _ = m - f[l] - d[h],
      S = m / 2 - f[l] / 2 + w,
      E = ea(O, S, _),
      j = u;
    r.modifiersData[n] = ((t = {}), (t[j] = E), (t.centerOffset = E - S), t);
  }
}
function hw(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (Lv(t.elements.popper, a) && (t.elements.arrow = a)));
}
const gw = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: pw,
  effect: hw,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Hr(e) {
  return e.split("-")[1];
}
var bw = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function yw(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Vr(r * a) / a || 0, y: Vr(n * a) / a || 0 };
}
function ed(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    a = e.placement,
    i = e.variation,
    o = e.offsets,
    s = e.position,
    u = e.gpuAcceleration,
    c = e.adaptive,
    l = e.roundOffsets,
    d = e.isFixed,
    f = o.x,
    p = f === void 0 ? 0 : f,
    h = o.y,
    v = h === void 0 ? 0 : h,
    g = typeof l == "function" ? l({ x: p, y: v }) : { x: p, y: v };
  ((p = g.x), (v = g.y));
  var b = o.hasOwnProperty("x"),
    m = o.hasOwnProperty("y"),
    w = Ae,
    O = Pe,
    _ = window;
  if (c) {
    var S = wa(r),
      E = "clientHeight",
      j = "clientWidth";
    if (
      (S === Fe(r) &&
        ((S = tr(r)),
        zt(S).position !== "static" &&
          s === "absolute" &&
          ((E = "scrollHeight"), (j = "scrollWidth"))),
      (S = S),
      a === Pe || ((a === Ae || a === tt) && i === va))
    ) {
      O = et;
      var D = d && S === _ && _.visualViewport ? _.visualViewport.height : S[E];
      ((v -= D - n.height), (v *= u ? 1 : -1));
    }
    if (a === Ae || ((a === Pe || a === et) && i === va)) {
      w = tt;
      var R = d && S === _ && _.visualViewport ? _.visualViewport.width : S[j];
      ((p -= R - n.width), (p *= u ? 1 : -1));
    }
  }
  var T = Object.assign({ position: s }, c && bw),
    z = l === !0 ? yw({ x: p, y: v }, Fe(r)) : { x: p, y: v };
  if (((p = z.x), (v = z.y), u)) {
    var B;
    return Object.assign(
      {},
      T,
      ((B = {}),
      (B[O] = m ? "0" : ""),
      (B[w] = b ? "0" : ""),
      (B.transform =
        (_.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + v + "px)"
          : "translate3d(" + p + "px, " + v + "px, 0)"),
      B),
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}), (t[O] = m ? v + "px" : ""), (t[w] = b ? p + "px" : ""), (t.transform = ""), t),
  );
}
function _w(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    i = r.adaptive,
    o = i === void 0 ? !0 : i,
    s = r.roundOffsets,
    u = s === void 0 ? !0 : s,
    c = {
      placement: wt(t.placement),
      variation: Hr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      ed(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: o,
          roundOffsets: u,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        ed(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: u,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    })));
}
const mw = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: _w, data: {} };
var Fa = { passive: !0 };
function ww(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    i = a === void 0 ? !0 : a,
    o = n.resize,
    s = o === void 0 ? !0 : o,
    u = Fe(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      c.forEach(function (l) {
        l.addEventListener("scroll", r.update, Fa);
      }),
    s && u.addEventListener("resize", r.update, Fa),
    function () {
      (i &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", r.update, Fa);
        }),
        s && u.removeEventListener("resize", r.update, Fa));
    }
  );
}
const Ow = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: ww,
  data: {},
};
var kw = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ya(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return kw[t];
  });
}
var Sw = { start: "end", end: "start" };
function td(e) {
  return e.replace(/start|end/g, function (t) {
    return Sw[t];
  });
}
function Vs(e) {
  var t = Fe(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Gs(e) {
  return Gr(tr(e)).left + Vs(e).scrollLeft;
}
function Ew(e, t) {
  var r = Fe(e),
    n = tr(e),
    a = r.visualViewport,
    i = n.clientWidth,
    o = n.clientHeight,
    s = 0,
    u = 0;
  if (a) {
    ((i = a.width), (o = a.height));
    var c = Mv();
    (c || (!c && t === "fixed")) && ((s = a.offsetLeft), (u = a.offsetTop));
  }
  return { width: i, height: o, x: s + Gs(e), y: u };
}
function xw(e) {
  var t,
    r = tr(e),
    n = Vs(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = cr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    o = cr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    s = -n.scrollLeft + Gs(e),
    u = -n.scrollTop;
  return (
    zt(a || r).direction === "rtl" && (s += cr(r.clientWidth, a ? a.clientWidth : 0) - i),
    { width: i, height: o, x: s, y: u }
  );
}
function Hs(e) {
  var t = zt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Bv(e) {
  return ["html", "body", "#document"].indexOf(Et(e)) >= 0
    ? e.ownerDocument.body
    : Qe(e) && Hs(e)
      ? e
      : Bv(xi(e));
}
function ta(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Bv(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = Fe(n),
    o = a ? [i].concat(i.visualViewport || [], Hs(n) ? n : []) : n,
    s = t.concat(o);
  return a ? s : s.concat(ta(xi(o)));
}
function ls(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Cw(e, t) {
  var r = Gr(e, !1, t === "fixed");
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
function rd(e, t, r) {
  return t === Dv ? ls(Ew(e, r)) : fr(t) ? Cw(t, r) : ls(xw(tr(e)));
}
function Rw(e) {
  var t = ta(xi(e)),
    r = ["absolute", "fixed"].indexOf(zt(e).position) >= 0,
    n = r && Qe(e) ? wa(e) : e;
  return fr(n)
    ? t.filter(function (a) {
        return fr(a) && Lv(a, n) && Et(a) !== "body";
      })
    : [];
}
function Pw(e, t, r, n) {
  var a = t === "clippingParents" ? Rw(e) : [].concat(t),
    i = [].concat(a, [r]),
    o = i[0],
    s = i.reduce(
      function (u, c) {
        var l = rd(e, c, n);
        return (
          (u.top = cr(l.top, u.top)),
          (u.right = ui(l.right, u.right)),
          (u.bottom = ui(l.bottom, u.bottom)),
          (u.left = cr(l.left, u.left)),
          u
        );
      },
      rd(e, o, n),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function zv(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? wt(n) : null,
    i = n ? Hr(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    u;
  switch (a) {
    case Pe:
      u = { x: o, y: t.y - r.height };
      break;
    case et:
      u = { x: o, y: t.y + t.height };
      break;
    case tt:
      u = { x: t.x + t.width, y: s };
      break;
    case Ae:
      u = { x: t.x - r.width, y: s };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = a ? Us(a) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (i) {
      case Ur:
        u[c] = u[c] - (t[l] / 2 - r[l] / 2);
        break;
      case va:
        u[c] = u[c] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return u;
}
function pa(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    i = r.strategy,
    o = i === void 0 ? e.strategy : i,
    s = r.boundary,
    u = s === void 0 ? Y0 : s,
    c = r.rootBoundary,
    l = c === void 0 ? Dv : c,
    d = r.elementContext,
    f = d === void 0 ? Wn : d,
    p = r.altBoundary,
    h = p === void 0 ? !1 : p,
    v = r.padding,
    g = v === void 0 ? 0 : v,
    b = Nv(typeof g != "number" ? g : Fv(g, ma)),
    m = f === Wn ? J0 : Wn,
    w = e.rects.popper,
    O = e.elements[h ? m : f],
    _ = Pw(fr(O) ? O : O.contextElement || tr(e.elements.popper), u, l, o),
    S = Gr(e.elements.reference),
    E = zv({ reference: S, element: w, placement: a }),
    j = ls(Object.assign({}, w, E)),
    D = f === Wn ? j : S,
    R = {
      top: _.top - D.top + b.top,
      bottom: D.bottom - _.bottom + b.bottom,
      left: _.left - D.left + b.left,
      right: D.right - _.right + b.right,
    },
    T = e.modifiersData.offset;
  if (f === Wn && T) {
    var z = T[a];
    Object.keys(R).forEach(function (B) {
      var V = [tt, et].indexOf(B) >= 0 ? 1 : -1,
        J = [Pe, et].indexOf(B) >= 0 ? "y" : "x";
      R[B] += z[J] * V;
    });
  }
  return R;
}
function Aw(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    i = r.rootBoundary,
    o = r.padding,
    s = r.flipVariations,
    u = r.allowedAutoPlacements,
    c = u === void 0 ? Tv : u,
    l = Hr(n),
    d = l
      ? s
        ? Zl
        : Zl.filter(function (h) {
            return Hr(h) === l;
          })
      : ma,
    f = d.filter(function (h) {
      return c.indexOf(h) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (h, v) {
    return ((h[v] = pa(e, { placement: v, boundary: a, rootBoundary: i, padding: o })[wt(v)]), h);
  }, {});
  return Object.keys(p).sort(function (h, v) {
    return p[h] - p[v];
  });
}
function jw(e) {
  if (wt(e) === Bs) return [];
  var t = Ya(e);
  return [td(e), t, td(t)];
}
function Iw(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var a = r.mainAxis,
        i = a === void 0 ? !0 : a,
        o = r.altAxis,
        s = o === void 0 ? !0 : o,
        u = r.fallbackPlacements,
        c = r.padding,
        l = r.boundary,
        d = r.rootBoundary,
        f = r.altBoundary,
        p = r.flipVariations,
        h = p === void 0 ? !0 : p,
        v = r.allowedAutoPlacements,
        g = t.options.placement,
        b = wt(g),
        m = b === g,
        w = u || (m || !h ? [Ya(g)] : jw(g)),
        O = [g].concat(w).reduce(function (le, ge) {
          return le.concat(
            wt(ge) === Bs
              ? Aw(t, {
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
        _ = t.rects.reference,
        S = t.rects.popper,
        E = new Map(),
        j = !0,
        D = O[0],
        R = 0;
      R < O.length;
      R++
    ) {
      var T = O[R],
        z = wt(T),
        B = Hr(T) === Ur,
        V = [Pe, et].indexOf(z) >= 0,
        J = V ? "width" : "height",
        G = pa(t, { placement: T, boundary: l, rootBoundary: d, altBoundary: f, padding: c }),
        q = V ? (B ? tt : Ae) : B ? et : Pe;
      _[J] > S[J] && (q = Ya(q));
      var X = Ya(q),
        N = [];
      if (
        (i && N.push(G[z] <= 0),
        s && N.push(G[q] <= 0, G[X] <= 0),
        N.every(function (le) {
          return le;
        }))
      ) {
        ((D = T), (j = !1));
        break;
      }
      E.set(T, N);
    }
    if (j)
      for (
        var A = h ? 3 : 1,
          be = function (ge) {
            var ce = O.find(function (Ue) {
              var Oe = E.get(Ue);
              if (Oe)
                return Oe.slice(0, ge).every(function (rt) {
                  return rt;
                });
            });
            if (ce) return ((D = ce), "break");
          },
          oe = A;
        oe > 0;
        oe--
      ) {
        var ue = be(oe);
        if (ue === "break") break;
      }
    t.placement !== D && ((t.modifiersData[n]._skip = !0), (t.placement = D), (t.reset = !0));
  }
}
const Dw = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Iw,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function nd(e, t, r) {
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
function ad(e) {
  return [Pe, tt, et, Ae].some(function (t) {
    return e[t] >= 0;
  });
}
function Tw(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    o = pa(t, { elementContext: "reference" }),
    s = pa(t, { altBoundary: !0 }),
    u = nd(o, n),
    c = nd(s, a, i),
    l = ad(u),
    d = ad(c);
  ((t.modifiersData[r] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: c,
    isReferenceHidden: l,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": l,
      "data-popper-escaped": d,
    })));
}
const Mw = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Tw,
};
function Lw(e, t, r) {
  var n = wt(e),
    a = [Ae, Pe].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = i[0],
    s = i[1];
  return (
    (o = o || 0),
    (s = (s || 0) * a),
    [Ae, tt].indexOf(n) >= 0 ? { x: s, y: o } : { x: o, y: s }
  );
}
function $w(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    i = a === void 0 ? [0, 0] : a,
    o = Tv.reduce(function (l, d) {
      return ((l[d] = Lw(d, t.rects, i)), l);
    }, {}),
    s = o[t.placement],
    u = s.x,
    c = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += u), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o));
}
const Nw = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: $w };
function Fw(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = zv({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const Bw = { name: "popperOffsets", enabled: !0, phase: "read", fn: Fw, data: {} };
function zw(e) {
  return e === "x" ? "y" : "x";
}
function qw(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.mainAxis,
    i = a === void 0 ? !0 : a,
    o = r.altAxis,
    s = o === void 0 ? !1 : o,
    u = r.boundary,
    c = r.rootBoundary,
    l = r.altBoundary,
    d = r.padding,
    f = r.tether,
    p = f === void 0 ? !0 : f,
    h = r.tetherOffset,
    v = h === void 0 ? 0 : h,
    g = pa(t, { boundary: u, rootBoundary: c, padding: d, altBoundary: l }),
    b = wt(t.placement),
    m = Hr(t.placement),
    w = !m,
    O = Us(b),
    _ = zw(O),
    S = t.modifiersData.popperOffsets,
    E = t.rects.reference,
    j = t.rects.popper,
    D = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v,
    R =
      typeof D == "number"
        ? { mainAxis: D, altAxis: D }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
    T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    z = { x: 0, y: 0 };
  if (S) {
    if (i) {
      var B,
        V = O === "y" ? Pe : Ae,
        J = O === "y" ? et : tt,
        G = O === "y" ? "height" : "width",
        q = S[O],
        X = q + g[V],
        N = q - g[J],
        A = p ? -j[G] / 2 : 0,
        be = m === Ur ? E[G] : j[G],
        oe = m === Ur ? -j[G] : -E[G],
        ue = t.elements.arrow,
        le = p && ue ? qs(ue) : { width: 0, height: 0 },
        ge = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : $v(),
        ce = ge[V],
        Ue = ge[J],
        Oe = ea(0, E[G], le[G]),
        rt = w ? E[G] / 2 - A - Oe - ce - R.mainAxis : be - Oe - ce - R.mainAxis,
        ve = w ? -E[G] / 2 + A + Oe + Ue + R.mainAxis : oe + Oe + Ue + R.mainAxis,
        Ve = t.elements.arrow && wa(t.elements.arrow),
        wr = Ve ? (O === "y" ? Ve.clientTop || 0 : Ve.clientLeft || 0) : 0,
        Pt = (B = T?.[O]) != null ? B : 0,
        Se = q + rt - Pt - wr,
        Ee = q + ve - Pt,
        Vt = ea(p ? ui(X, Se) : X, q, p ? cr(N, Ee) : N);
      ((S[O] = Vt), (z[O] = Vt - q));
    }
    if (s) {
      var pt,
        nt = O === "x" ? Pe : Ae,
        Gt = O === "x" ? et : tt,
        Ge = S[_],
        De = _ === "y" ? "height" : "width",
        xe = Ge + g[nt],
        at = Ge - g[Gt],
        Ht = [Pe, Ae].indexOf(b) !== -1,
        Ra = (pt = T?.[_]) != null ? pt : 0,
        Pa = Ht ? xe : Ge - E[De] - j[De] - Ra + R.altAxis,
        Aa = Ht ? Ge + E[De] + j[De] - Ra - R.altAxis : at,
        ja = p && Ht ? fw(Pa, Ge, Aa) : ea(p ? Pa : xe, Ge, p ? Aa : at);
      ((S[_] = ja), (z[_] = ja - Ge));
    }
    t.modifiersData[n] = z;
  }
}
const Uw = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: qw,
  requiresIfExists: ["offset"],
};
function Vw(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Gw(e) {
  return e === Fe(e) || !Qe(e) ? Vs(e) : Vw(e);
}
function Hw(e) {
  var t = e.getBoundingClientRect(),
    r = Vr(t.width) / e.offsetWidth || 1,
    n = Vr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Ww(e, t, r) {
  r === void 0 && (r = !1);
  var n = Qe(t),
    a = Qe(t) && Hw(t),
    i = tr(t),
    o = Gr(e, a, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    u = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Et(t) !== "body" || Hs(i)) && (s = Gw(t)),
      Qe(t) ? ((u = Gr(t, !0)), (u.x += t.clientLeft), (u.y += t.clientTop)) : i && (u.x = Gs(i))),
    {
      x: o.left + s.scrollLeft - u.x,
      y: o.top + s.scrollTop - u.y,
      width: o.width,
      height: o.height,
    }
  );
}
function Kw(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function a(i) {
    r.add(i.name);
    var o = [].concat(i.requires || [], i.requiresIfExists || []);
    (o.forEach(function (s) {
      if (!r.has(s)) {
        var u = t.get(s);
        u && a(u);
      }
    }),
      n.push(i));
  }
  return (
    e.forEach(function (i) {
      r.has(i.name) || a(i);
    }),
    n
  );
}
function Yw(e) {
  var t = Kw(e);
  return ow.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function Jw(e) {
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
function Xw(e) {
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
var id = { placement: "bottom", modifiers: [], strategy: "absolute" };
function od() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Zw(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    i = a === void 0 ? id : a;
  return function (s, u, c) {
    c === void 0 && (c = i);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, id, i),
        modifiersData: {},
        elements: { reference: s, popper: u },
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
            (l.options = Object.assign({}, i, l.options, m)),
            (l.scrollParents = {
              reference: fr(s) ? ta(s) : s.contextElement ? ta(s.contextElement) : [],
              popper: ta(u),
            }));
          var w = Yw(Xw([].concat(n, l.options.modifiers)));
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
            var b = l.elements,
              m = b.reference,
              w = b.popper;
            if (od(m, w)) {
              ((l.rects = {
                reference: Ww(m, wa(w), l.options.strategy === "fixed"),
                popper: qs(w),
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
                var _ = l.orderedModifiers[O],
                  S = _.fn,
                  E = _.options,
                  j = E === void 0 ? {} : E,
                  D = _.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: j, name: D, instance: p }) || l);
              }
            }
          }
        },
        update: Jw(function () {
          return new Promise(function (g) {
            (p.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (v(), (f = !0));
        },
      };
    if (!od(s, u)) return p;
    p.setOptions(c).then(function (g) {
      !f && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function h() {
      l.orderedModifiers.forEach(function (g) {
        var b = g.name,
          m = g.options,
          w = m === void 0 ? {} : m,
          O = g.effect;
        if (typeof O == "function") {
          var _ = O({ state: l, name: b, instance: p, options: w }),
            S = function () {};
          d.push(_ || S);
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
var Qw = [Ow, Bw, mw, cw, Nw, Dw, Uw, gw, Mw],
  e1 = Zw({ defaultModifiers: Qw }),
  $o,
  sd;
function t1() {
  if (sd) return $o;
  sd = 1;
  var e = typeof Element < "u",
    t = typeof Map == "function",
    r = typeof Set == "function",
    n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function a(i, o) {
    if (i === o) return !0;
    if (i && o && typeof i == "object" && typeof o == "object") {
      if (i.constructor !== o.constructor) return !1;
      var s, u, c;
      if (Array.isArray(i)) {
        if (((s = i.length), s != o.length)) return !1;
        for (u = s; u-- !== 0; ) if (!a(i[u], o[u])) return !1;
        return !0;
      }
      var l;
      if (t && i instanceof Map && o instanceof Map) {
        if (i.size !== o.size) return !1;
        for (l = i.entries(); !(u = l.next()).done; ) if (!o.has(u.value[0])) return !1;
        for (l = i.entries(); !(u = l.next()).done; )
          if (!a(u.value[1], o.get(u.value[0]))) return !1;
        return !0;
      }
      if (r && i instanceof Set && o instanceof Set) {
        if (i.size !== o.size) return !1;
        for (l = i.entries(); !(u = l.next()).done; ) if (!o.has(u.value[0])) return !1;
        return !0;
      }
      if (n && ArrayBuffer.isView(i) && ArrayBuffer.isView(o)) {
        if (((s = i.length), s != o.length)) return !1;
        for (u = s; u-- !== 0; ) if (i[u] !== o[u]) return !1;
        return !0;
      }
      if (i.constructor === RegExp) return i.source === o.source && i.flags === o.flags;
      if (
        i.valueOf !== Object.prototype.valueOf &&
        typeof i.valueOf == "function" &&
        typeof o.valueOf == "function"
      )
        return i.valueOf() === o.valueOf();
      if (
        i.toString !== Object.prototype.toString &&
        typeof i.toString == "function" &&
        typeof o.toString == "function"
      )
        return i.toString() === o.toString();
      if (((c = Object.keys(i)), (s = c.length), s !== Object.keys(o).length)) return !1;
      for (u = s; u-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(o, c[u])) return !1;
      if (e && i instanceof Element) return !1;
      for (u = s; u-- !== 0; )
        if (
          !((c[u] === "_owner" || c[u] === "__v" || c[u] === "__o") && i.$$typeof) &&
          !a(i[c[u]], o[c[u]])
        )
          return !1;
      return !0;
    }
    return i !== i && o !== o;
  }
  return (
    ($o = function (o, s) {
      try {
        return a(o, s);
      } catch (u) {
        if ((u.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw u;
      }
    }),
    $o
  );
}
var r1 = t1();
const n1 = er(r1);
var a1 = [],
  i1 = function (t, r, n) {
    n === void 0 && (n = {});
    var a = y.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || a1,
      },
      o = y.useState({
        styles: {
          popper: { position: i.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      s = o[0],
      u = o[1],
      c = y.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (p) {
            var h = p.state,
              v = Object.keys(h.elements);
            yi.flushSync(function () {
              u({
                styles: Jl(
                  v.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: Jl(
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
      l = y.useMemo(
        function () {
          var f = {
            onFirstUpdate: i.onFirstUpdate,
            placement: i.placement,
            strategy: i.strategy,
            modifiers: [].concat(i.modifiers, [c, { name: "applyStyles", enabled: !1 }]),
          };
          return n1(a.current, f) ? a.current || f : ((a.current = f), f);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c],
      ),
      d = y.useRef();
    return (
      Xl(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      Xl(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || e1,
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
        styles: s.styles,
        attributes: s.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  },
  o1 = function () {},
  s1 = function () {
    return Promise.resolve(null);
  },
  u1 = [];
function c1(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    i = e.modifiers,
    o = i === void 0 ? u1 : i,
    s = e.referenceElement,
    u = e.onFirstUpdate,
    c = e.innerRef,
    l = e.children,
    d = y.useContext(G0),
    f = y.useState(null),
    p = f[0],
    h = f[1],
    v = y.useState(null),
    g = v[0],
    b = v[1];
  y.useEffect(
    function () {
      K0(c, p);
    },
    [c, p],
  );
  var m = y.useMemo(
      function () {
        return {
          placement: r,
          strategy: a,
          onFirstUpdate: u,
          modifiers: [].concat(o, [{ name: "arrow", enabled: g != null, options: { element: g } }]),
        };
      },
      [r, a, u, o, g],
    ),
    w = i1(s || d, p, m),
    O = w.state,
    _ = w.styles,
    S = w.forceUpdate,
    E = w.update,
    j = y.useMemo(
      function () {
        return {
          ref: h,
          style: _.popper,
          placement: O ? O.placement : r,
          hasPopperEscaped:
            O && O.modifiersData.hide ? O.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            O && O.modifiersData.hide ? O.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: _.arrow, ref: b },
          forceUpdate: S || o1,
          update: E || s1,
        };
      },
      [h, b, r, O, _, E, S],
    );
  return H0(l)(j);
}
function l1(e) {
  var t = e.viewportPadding;
  return [
    {
      name: "maxSizeData",
      enabled: !0,
      phase: "read",
      fn: function (n) {
        var a = n.state,
          i = n.name;
        window.visualViewport &&
          (a.modifiersData[i] = {
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
          i,
          o,
          s,
          u = n.state,
          c = u.modifiersData.maxSizeData;
        if (
          !(
            typeof (c == null || (a = c.viewport) === null || a === void 0 ? void 0 : a.width) !=
              "number" ||
            typeof (c == null || (i = c.viewport) === null || i === void 0 ? void 0 : i.height) !=
              "number"
          )
        ) {
          var l = c.viewport,
            d = u.modifiersData.popperOffsets,
            f = d === void 0 ? { x: 0, y: 0 } : d,
            p = u.placement.split("-"),
            h = K(p, 1),
            v = h[0],
            g =
              (o =
                (s = u.modifiersData) === null ||
                s === void 0 ||
                (s = s.offset) === null ||
                s === void 0
                  ? void 0
                  : s[u.placement]) !== null && o !== void 0
                ? o
                : { x: 0, y: 0 },
            b = l.width - 2 * t,
            m = l.height - 2 * t;
          (v === "top" && (m = u.rects.reference.y + g.y - t),
            v === "bottom" && (m = l.height - f.y - t),
            v === "left" && (b = u.rects.reference.x + g.x - t),
            v === "right" && (b = l.width - f.x - t),
            (u.styles.popper.maxWidth = "".concat(b, "px")),
            (u.styles.popper.maxHeight = "".concat(m, "px")));
        }
      },
    },
  ];
}
var ds = 5,
  d1 = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: ds,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function f1() {
  return null;
}
var v1 = [0, 8];
function p1(e) {
  var t = e.children,
    r = t === void 0 ? f1 : t,
    n = e.offset,
    a = n === void 0 ? v1 : n,
    i = e.placement,
    o = i === void 0 ? "bottom-start" : i,
    s = e.referenceElement,
    u = s === void 0 ? void 0 : s,
    c = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    f = e.shouldFitViewport,
    p = f === void 0 ? !1 : f,
    h = K(a, 2),
    v = h[0],
    g = h[1],
    b = y.useMemo(
      function () {
        var w = {
            name: "preventOverflow",
            options: { padding: ds, rootBoundary: p ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [v, g] } },
          _ = p ? l1({ viewportPadding: ds }) : [];
        return [].concat(d1, [w, O], Te(_));
      },
      [v, g, p],
    ),
    m = y.useMemo(
      function () {
        return c == null ? b : [].concat(Te(b), Te(c));
      },
      [b, c],
    );
  return k.createElement(c1, { modifiers: m, placement: o, strategy: d, referenceElement: u }, r);
}
var qv = "atlaskit-portal-container",
  Uv = "body > .atlaskit-portal-container",
  Vv = "atlaskit-portal",
  h1 = function (t) {
    var r = document.createElement("div");
    return ((r.className = Vv), (r.style.zIndex = "".concat(t)), r);
  },
  Gv = function () {
    return document.body;
  },
  Hv = function () {
    var t = document.querySelector(Uv);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = qv),
        (n.style.display = "flex"),
        (r = Gv()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  g1 = function (t) {
    Hv().removeChild(t);
  },
  b1 = function (t) {
    t.parentElement || Hv().appendChild(t);
  },
  Wv = function () {
    return document !== void 0;
  },
  y1 = function (t) {
    if (Wv()) {
      var r = document.createElement("div");
      return ((r.className = Vv), (r.style.zIndex = "".concat(t)), r);
    }
  },
  _1 = function () {
    if (Wv()) {
      var t = document.querySelector(Uv);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = qv),
          (n.style.display = "flex"),
          (r = Gv()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function m1(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useMemo(
      function () {
        return h1(t);
      },
      [t],
    );
  return (
    b1(n),
    y.useEffect(
      function () {
        return function () {
          g1(n);
        };
      },
      [n],
    ),
    yi.createPortal(r, n)
  );
}
var Kv = typeof window < "u" ? y.useLayoutEffect : y.useEffect;
function w1(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useState(null),
    a = K(n, 2),
    i = a[0],
    o = a[1];
  Kv(
    function () {
      var u = y1(t);
      o(u);
      var c = _1();
      if (!(!u || !c))
        return (
          c.appendChild(u),
          function () {
            (u && c.removeChild(u), o(null));
          }
        );
    },
    [t],
  );
  var s = k.createElement(y.Suspense, { fallback: null }, r);
  return i ? yi.createPortal(s, i) : null;
}
var O1 = function (t) {
    var r = y.useState(!1),
      n = K(r, 2),
      a = n[0],
      i = n[1],
      o = y.useState(function () {
        return t === "layoutEffect" ? Kv : y.useEffect;
      }),
      s = K(o, 1),
      u = s[0];
    return (
      u(function () {
        i(!0);
      }, []),
      a
    );
  },
  k1 = "akPortalMount",
  S1 = "akPortalUnmount",
  ud = {
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
  E1 = function (t) {
    return ud.hasOwnProperty(t) ? ud[t] : null;
  },
  x1 = function (t, r) {
    var n = { layer: E1(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function cd(e, t) {
  var r = x1(e, t);
  window.dispatchEvent(r);
}
var C1 = function (t) {
  var r = Number(t);
  y.useEffect(
    function () {
      return (
        cd(k1, r),
        function () {
          cd(S1, r);
        }
      );
    },
    [r],
  );
};
function R1(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    i = a === void 0 ? "effect" : a,
    o = O1(i);
  return (
    C1(r),
    $e("platform_design_system_team_portal_logic_r18_fix")
      ? k.createElement(w1, { zIndex: r }, n)
      : o
        ? k.createElement(m1, { zIndex: r }, n)
        : null
  );
}
var ra = new Set(),
  ha = null;
function ld() {
  if (!ha) {
    ha = Oi.bindAll(window, [
      { type: "dragend", listener: No },
      { type: "pointerdown", listener: No },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            No();
          };
        })(),
      },
    ]);
    var e = Array.from(ra);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function No() {
  var e;
  ((e = ha) === null || e === void 0 || e(), (ha = null));
  var t = Array.from(ra);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function P1() {
  return Oi.bindAll(window, [
    { type: "dragstart", listener: ld },
    { type: "dragenter", listener: ld },
  ]);
}
var Ba = null;
function A1(e) {
  return (
    Ba || (Ba = P1()),
    ra.add(e),
    e.onRegister({ isDragging: ha !== null }),
    function () {
      if ((ra.delete(e), ra.size === 0)) {
        var r;
        ((r = Ba) === null || r === void 0 || r(), (Ba = null));
      }
    }
  );
}
var na = null;
function Xn() {
  na != null && (window.clearTimeout(na), (na = null));
}
function dd(e, t) {
  (Xn(),
    (na = window.setTimeout(function () {
      ((na = null), e());
    }, t)));
}
var ht = null;
function j1(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(ht && ht.entry === e);
  }
  function n() {
    r() && (Xn(), (ht = null));
  }
  function a() {
    (r() && e.done(), (t = "done"), n());
  }
  function i() {
    (r() && e.hide({ isImmediate: !0 }), a());
  }
  function o() {
    if (r()) {
      if (t === "waiting-to-hide") {
        ((t = "shown"), Xn());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), Xn(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function s(p) {
    var h = p.isImmediate;
    if (r()) {
      if (t === "waiting-to-show") {
        i();
        return;
      }
      if (t !== "waiting-to-hide") {
        if (h) {
          i();
          return;
        }
        ((t = "waiting-to-hide"),
          dd(function () {
            ((t = "hide-animating"), e.hide({ isImmediate: !1 }));
          }, e.delay));
      }
    }
  }
  function u() {
    r() && t === "hide-animating" && a();
  }
  function c() {
    return t === "shown" || t === "waiting-to-hide" || t === "hide-animating";
  }
  function l() {
    return e.source.type === "mouse" ? e.source.mouse : null;
  }
  function d() {
    var p = !!(ht && ht.isVisible());
    (ht && (Xn(), ht.entry.hide({ isImmediate: !0 }), ht.entry.done(), (ht = null)),
      (ht = { entry: e, isVisible: c }));
    function h() {
      ((t = "shown"), e.show({ isImmediate: p }));
    }
    if (p) {
      h();
      return;
    }
    ((t = "waiting-to-show"), dd(h, e.delay));
  }
  d();
  var f = {
    keep: o,
    abort: n,
    isActive: r,
    requestHide: s,
    finishHideAnimation: u,
    mousePosition: l(),
  };
  return f;
}
function I1(e, t) {
  var r = w_();
  return t ? "".concat(r(e)) : void 0;
}
var fd = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81u0j _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d7jlr _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7",
  },
  D1 = function (t) {
    var r = t.shortcut;
    return y.createElement(
      "div",
      { className: C([fd.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return y.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: C([fd.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  Yv = y.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      i = t.children,
      o = t.placement,
      s = t.testId,
      u = t.onMouseOut,
      c = t.onMouseOver,
      l = t.id,
      d = t.shortcut;
    return y.createElement(
      "div",
      { ref: r, style: n, "data-testid": s ? "".concat(s, "--wrapper") : void 0 },
      y.createElement(
        "div",
        {
          role: "tooltip",
          className: C(["_80om73ad", a]),
          onMouseOut: u,
          onMouseOver: c,
          "data-placement": o,
          "data-testid": s,
          id: l,
        },
        i,
        d && $e("platform-dst-tooltip-shortcuts") && y.createElement(D1, { shortcut: d }),
      ),
    );
  });
Yv.displayName = "TooltipPrimitive";
var Fo = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _85i5v77o _1q51v77o _y4ti12x7 _bozg12x7 _slp31hna",
    baseRefreshedPadding: "_1q511b66 _85i51b66",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  Jv = y.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      i = t.children,
      o = t.truncate,
      s = t.placement,
      u = t.testId,
      c = t.onMouseOut,
      l = t.onMouseOver,
      d = t.id,
      f = t.shortcut;
    return y.createElement(
      Yv,
      {
        ref: r,
        style: n,
        className: C([
          Fo.base,
          $e("platform-dst-tooltip-shortcuts") && Fo.baseRefreshedPadding,
          o && Fo.truncate,
          a,
        ]),
        placement: s,
        testId: u,
        id: d,
        onMouseOut: c,
        onMouseOver: l,
        shortcut: f,
      },
      i,
    );
  });
Jv.displayName = "TooltipContainer";
function vd(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
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
function Mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var T1 = O_.tooltip(),
  hd = {
    componentName: "tooltip",
    packageName: "@atlaskit/tooltip",
    packageVersion: "0.0.0-development",
  },
  M1 = { top: "bottom", bottom: "top", left: "right", right: "left" },
  L1 = function (t) {
    return t.split("-")[0];
  };
function $1(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    i = a === void 0 ? "bottom" : a,
    o = e.content,
    s = e.truncate,
    u = s === void 0 ? !1 : s,
    c = e.component,
    l = c === void 0 ? Jv : c,
    d = e.tag,
    f = d === void 0 ? "div" : d,
    p = e.testId,
    h = e.delay,
    v = h === void 0 ? 300 : h,
    g = e.onShow,
    b = g === void 0 ? me : g,
    m = e.onHide,
    w = m === void 0 ? me : m,
    O = e.canAppear,
    _ = e.hideTooltipOnClick,
    S = _ === void 0 ? !1 : _,
    E = e.hideTooltipOnMouseDown,
    j = E === void 0 ? !1 : E,
    D = e.analyticsContext,
    R = e.strategy,
    T = R === void 0 ? "fixed" : R,
    z = e.ignoreTooltipPointerEvents,
    B = z === void 0 ? !1 : z,
    V = e.isScreenReaderAnnouncementDisabled,
    J = V === void 0 ? !1 : V,
    G = e.shortcut,
    q = n === "mouse" ? i : n,
    X = zc(Mr({ fn: b, action: "displayed", analyticsData: D }, hd)),
    N = zc(Mr({ fn: w, action: "hidden", analyticsData: D }, hd)),
    A = y.useRef(null),
    be = y.useState("hide"),
    oe = K(be, 2),
    ue = oe[0],
    le = oe[1],
    ge = y.useRef(null),
    ce = y.useRef(null),
    Ue = function (re) {
      ((ce.current = re), (ge.current = re ? re.firstElementChild : null));
    },
    Oe = y.useCallback(function (M) {
      ge.current = M;
    }, []),
    rt = Hn(ue),
    ve = Hn(X),
    Ve = Hn(N),
    wr = Hn(v),
    Pt = Hn(O),
    Se = y.useRef(!1),
    Ee = y.useCallback(function (M) {
      ((A.current = M), (Se.current = !1));
    }, []),
    Vt = y.useCallback(
      function () {
        A.current &&
          (Se.current && Ve.current(), (A.current = null), (Se.current = !1), le("hide"));
      },
      [Ve],
    ),
    pt = y.useCallback(
      function () {
        A.current && (A.current.abort(), Se.current && Ve.current(), (A.current = null));
      },
      [Ve],
    );
  y.useEffect(
    function () {
      return function () {
        A.current && pt();
      };
    },
    [pt],
  );
  var nt = y.useRef(!1);
  y.useEffect(function () {
    return A1({
      onRegister: function (re) {
        var At = re.isDragging;
        nt.current = At;
      },
      onDragStart: function () {
        var re;
        ((re = A.current) === null || re === void 0 || re.requestHide({ isImmediate: !0 }),
          (nt.current = !0));
      },
      onDragEnd: function () {
        nt.current = !1;
      },
    });
  }, []);
  var Gt = y.useCallback(
      function (M) {
        var re;
        if (!nt.current) {
          if ((A.current && !A.current.isActive() && pt(), A.current && A.current.isActive())) {
            A.current.keep();
            return;
          }
          if (!(Pt.current && !((re = Pt.current) !== null && re !== void 0 && re.call(Pt)))) {
            var At = {
                source: M,
                delay: wr.current,
                show: function (Or) {
                  var tn = Or.isImmediate;
                  (Se.current || ((Se.current = !0), ve.current()),
                    le(tn ? "show-immediate" : "fade-in"));
                },
                hide: function (Or) {
                  var tn = Or.isImmediate;
                  le(tn ? "hide" : "before-fade-out");
                },
                done: Vt,
              },
              Gi = j1(At);
            Ee(Gi);
          }
        }
      },
      [Pt, wr, Vt, Ee, pt, ve],
    ),
    Ge = y.useCallback(
      function () {
        var M;
        (M = A.current) === null || M === void 0 || M.requestHide({ isImmediate: !0 });
      },
      [A],
    );
  (E0({ onClose: Ge, isDisabled: ue === "hide" || ue === "fade-out" }),
    y.useEffect(
      function () {
        if (ue === "hide") return me;
        ue === "before-fade-out" && le("fade-out");
        var M = Oi.bind(window, {
          type: "scroll",
          listener: function () {
            A.current && A.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return M;
      },
      [ue],
    ));
  var De = y.useCallback(
      function () {
        j && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [j],
    ),
    xe = y.useCallback(
      function () {
        S && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    at = y.useCallback(
      function (M) {
        if (!(ce.current && M.target === ce.current) && !M.defaultPrevented) {
          M.preventDefault();
          var re =
            n === "mouse"
              ? { type: "mouse", mouse: vd({ left: M.clientX, top: M.clientY }) }
              : { type: "keyboard" };
          Gt(re);
        }
      },
      [n, Gt],
    ),
    Ht = y.useCallback(function (M) {
      (ce.current && M.target === ce.current) ||
        M.defaultPrevented ||
        (M.preventDefault(), A.current && A.current.requestHide({ isImmediate: !1 }));
    }, []),
    Ra =
      n === "mouse"
        ? function (M) {
            var re;
            (re = A.current) !== null &&
              re !== void 0 &&
              re.isActive() &&
              (A.current.mousePosition = vd({ left: M.clientX, top: M.clientY }));
          }
        : void 0,
    Pa = y.useCallback(function () {
      if (A.current && A.current.isActive()) {
        A.current.keep();
        return;
      }
    }, []),
    Aa = y.useCallback(
      function (M) {
        try {
          if (!M.target.matches(":focus-visible") && $e("platform-tooltip-focus-visible-new"))
            return;
        } catch {}
        Gt({ type: "keyboard" });
      },
      [Gt],
    ),
    ja = y.useCallback(function () {
      A.current && A.current.requestHide({ isImmediate: !1 });
    }, []),
    Xp = y.useCallback(
      function (M) {
        M === "exiting" &&
          rt.current === "fade-out" &&
          A.current &&
          A.current.finishHideAnimation();
      },
      [rt],
    ),
    Zp = f,
    Ui = ue !== "hide" && !!o,
    tu = !J && Ui,
    ru = ue !== "hide" && ue !== "fade-out",
    Qp = y.useCallback(function () {
      var M;
      (M = A.current) === null || M === void 0 || M.requestHide({ isImmediate: !0 });
    }, []);
  P0({ isOpen: Ui && ru, onClose: Qp });
  var nu = function () {
      var re;
      if (n === "mouse" && (re = A.current) !== null && re !== void 0 && re.mousePosition) {
        var At;
        return (At = A.current) === null || At === void 0 ? void 0 : At.mousePosition;
      }
      return ge.current || void 0;
    },
    en = I1("tooltip", tu),
    Vi = {
      onMouseOver: at,
      onMouseOut: Ht,
      onMouseMove: Ra,
      onMouseDown: De,
      onClick: xe,
      onFocus: Aa,
      onBlur: ja,
    };
  p && (Vi["data-testid"] = "".concat(p, "--container"));
  var au = typeof t == "function";
  y.useEffect(
    function () {
      if (!au) {
        var M = ge.current;
        if (!(!M || !en))
          return (
            M.setAttribute("aria-describedby", en),
            function () {
              return M.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [au, en],
  );
  var iu = tu
    ? k.createElement(
        "span",
        { "data-testid": p ? "".concat(p, "-hidden") : void 0, hidden: !0, id: en },
        typeof o == "function" ? o({}) : o,
      )
    : null;
  return k.createElement(
    k.Fragment,
    null,
    typeof t == "function"
      ? k.createElement(
          k.Fragment,
          null,
          t(Mr(Mr({}, Vi), {}, { "aria-describedby": en, ref: Oe })),
          iu,
        )
      : k.createElement(Zp, te({}, Vi, { ref: Ue, role: "presentation" }), t, iu),
    Ui
      ? k.createElement(
          R1,
          { zIndex: T1 },
          k.createElement(p1, { placement: q, referenceElement: nu(), strategy: T }, function (M) {
            var re = M.ref,
              At = M.style,
              Gi = M.update,
              Hi = M.placement,
              Or = n === "mouse" ? void 0 : M1[L1(Hi)];
            return k.createElement(
              Iv,
              { appear: !0 },
              ru &&
                k.createElement(
                  V0,
                  {
                    distance: "constant",
                    entranceDirection: Or,
                    exitDirection: Or,
                    onFinish: Xp,
                    duration: ue !== "show-immediate" ? "medium" : "none",
                  },
                  function (tn) {
                    var eh = tn.className;
                    return k.createElement(
                      l,
                      {
                        ref: re,
                        className: "Tooltip ".concat(eh),
                        style: Mr(Mr({}, At), B && { pointerEvents: "none" }),
                        truncate: u,
                        placement: q,
                        testId: nu() ? p : p && "".concat(p, "--unresolved"),
                        onMouseOut: Ht,
                        onMouseOver: Pa,
                        shortcut: G,
                      },
                      typeof o == "function" ? o({ update: Gi }) : o,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var N1 = [
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
  Kn = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  gd = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syaz1gjq _k48pmoej" },
  Xv = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var i = t.innerRef,
      o = t.isSortable,
      s = t.sortOrder,
      u = t.onClick,
      c = t.headCellId,
      l = t.activeSortButtonId,
      d = t.ascendingSortTooltip,
      f = d === void 0 ? "Sort ascending" : d,
      p = t.descendingSortTooltip,
      h = p === void 0 ? "Sort descending" : p,
      v = t.buttonAriaRoleDescription,
      g = v === void 0 ? "Sort button" : v,
      b = t.isIconOnlyHeader,
      m = ae(t, N1),
      w = y.useState(!1),
      O = K(w, 2),
      _ = O[0],
      S = O[1],
      E = y.useState(!1),
      j = K(E, 2),
      D = j[0],
      R = j[1],
      T = c === l || s !== void 0,
      z = _ || T || D,
      B = z && b,
      V = !b || z || (b && !D),
      J = y.useCallback(
        function () {
          R?.(!0);
        },
        [R],
      ),
      G = y.useCallback(
        function () {
          R?.(!1);
        },
        [R],
      ),
      q = y.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      X = y.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      N = k.createElement(
        wi,
        { xcss: gd.headCellContainer, onMouseEnter: q, onMouseLeave: X, onFocus: J, onBlur: G },
        k.createElement(
          $1,
          { content: s === dr ? f : h },
          k.createElement(
            c_,
            { onClick: u, xcss: Kn.buttonWrapper, "aria-roledescription": g },
            k.createElement(
              oi,
              { xcss: B ? Kn.hideIconHeaderWrapper : Kn.visibleHeaderWrapper },
              k.createElement("span", { className: C([gd.text]) }, r),
            ),
            V &&
              k.createElement(
                oi,
                { xcss: z ? Kn.sortIconVisibleWrapper : Kn.sortIconHiddenWrapper },
                s === dr
                  ? k.createElement(k0, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : k.createElement(m0, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return k.createElement(
      h0,
      te(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof i != "string" ? i : null,
        },
        m,
        { isSortable: o, sortOrder: s },
      ),
      o ? N : r,
    );
  },
  F1 = ["isRanking", "refHeight", "refWidth"];
function B1(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Zv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Zv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Zv = function () {
    return !!e;
  })();
}
var z1 = (function (e) {
    function t() {
      return (de(this, t), B1(this, t, arguments));
    }
    return (
      ze(t, e),
      fe(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var i = n.refWidth,
              o = ae(n, F1),
              s = Xh(a, i);
            return k.createElement(Xv, te({ inlineStyles: s }, o));
          },
        },
      ])
    );
  })(k.Component),
  q1 = b0(z1),
  U1 = ["cells"],
  V1 = [
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
function G1(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Qv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Qv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Qv = function () {
    return !!e;
  })();
}
var H1 = (function (e) {
    function t(r) {
      var n;
      return (de(this, t), (n = G1(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      ze(t, e),
      fe(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            ti(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              ti(n.sortKey, n.head);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              a = this.props,
              i = a.head,
              o = a.sortKey,
              s = a.sortOrder,
              u = a.isFixedSize,
              c = a.onSort,
              l = a.isRanking,
              d = a.isRankable,
              f = a.testId,
              p = this.state.activeSortButtonId;
            if (!i) return null;
            var h = d ? q1 : Xv,
              v = i.cells,
              g = ae(i, U1);
            return k.createElement(
              p0,
              te({}, g, { isRanking: l, testId: f && "".concat(f, "--head") }),
              k.createElement(
                "tr",
                null,
                v.map(function (b, m) {
                  var w = b.ascendingSortTooltip,
                    O = b.buttonAriaRoleDescription,
                    _ = b.colSpan,
                    S = b.content,
                    E = b.descendingSortTooltip,
                    j = b.isIconOnlyHeader,
                    D = b.isSortable,
                    R = b.key,
                    T = b.shouldTruncate,
                    z = b.testId,
                    B = b.width,
                    V = ae(b, V1),
                    J = "head-cell-".concat(m),
                    G = function () {
                      (n.setState({ activeSortButtonId: J }), D && c(b)());
                    };
                  return k.createElement(
                    h,
                    te(
                      {
                        colSpan: _,
                        content: S,
                        isFixedSize: u,
                        isIconOnlyHeader: j,
                        isSortable: !!D,
                        isRanking: l,
                        key: R || m,
                        headCellId: J,
                        activeSortButtonId: p,
                        onClick: G,
                        testId: z || f,
                        shouldTruncate: T,
                        sortOrder: R === o ? s : void 0,
                        width: B,
                        ascendingSortTooltip: w,
                        descendingSortTooltip: E,
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
  })(k.Component),
  W1 = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function K1(e) {
  switch (e) {
    case ai:
      return dr;
    case dr:
      return ai;
    default:
      return e;
  }
}
var Y1 = function (t) {
    var r = t.caption,
      n = t.head,
      a = t.highlightedRowIndex,
      i = t.rows,
      o = t.sortKey,
      s = t.sortOrder,
      u = t.loadingLabel,
      c = t.onPageRowsUpdate,
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
      O = w === void 0 ? me : w,
      _ = t.onSort,
      S = _ === void 0 ? me : _,
      E = t.page,
      j = E === void 0 ? 1 : E,
      D = t.emptyView,
      R = t.isRankable,
      T = R === void 0 ? !1 : R,
      z = t.isRankingDisabled,
      B = z === void 0 ? !1 : z,
      V = t.onRankStart,
      J = V === void 0 ? me : V,
      G = t.onRankEnd,
      q = G === void 0 ? me : G,
      X = t.loadingSpinnerSize,
      N = t.paginationi18n,
      A =
        N === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : N,
      be = y.useState(!1),
      oe = K(be, 2),
      ue = oe[0],
      le = oe[1],
      ge = y.useRef(null),
      ce = ua({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.2.18",
      }),
      Ue = ua({
        fn: q,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.2.18",
      });
    y.useEffect(
      function () {
        (ti(o, n), Jh(n));
      },
      [o, n],
    );
    var Oe = function (xe) {
        return function () {
          var at = xe.key;
          if (at) {
            if (ce && T && at === o && s === ai) {
              ce({ key: null, sortOrder: null, item: xe });
              return;
            }
            var Ht = at !== o ? dr : K1(s);
            ce && ce({ key: at, item: xe, sortOrder: Ht });
          }
        };
      },
      rt = function (xe, at) {
        O(xe, at);
      },
      ve = function (xe) {
        (le(!0), J(xe));
      },
      Ve = function (xe) {
        (le(!1), Ue(xe));
      },
      wr = function () {
        return X || (jf(i || [], j, m).length > 2 ? ii : mb);
      },
      Pt = function () {
        return h ? k.createElement(xb, { testId: l }) : D && k.createElement(Cb, { testId: l }, D);
      },
      Se = i && i.length,
      Ee,
      Vt = !1;
    (d && Number.isInteger(d) && m && Se && Se <= d
      ? ((Ee = Math.ceil(d / m)), (Vt = !0))
      : (Ee = Se && m ? Math.ceil(Se / m) : 0),
      (Ee = Ee < 1 ? 1 : Ee));
    var pt = j > Ee ? Ee : j,
      nt = !!Se,
      Gt = wr(),
      Ge = Pt();
    return k.createElement(
      k.Fragment,
      null,
      k.createElement(
        tv,
        {
          isLoading: h && nt,
          spinnerSize: Gt,
          targetRef: function () {
            return ge.current;
          },
          testId: l,
          loadingLabel: u,
        },
        k.createElement(
          kb,
          { isFixedSize: g, "aria-label": f, hasDataRow: nt, testId: l, isLoading: h },
          !!r && k.createElement(Sb, null, r),
          n &&
            k.createElement(H1, {
              head: n,
              onSort: Oe,
              sortKey: o,
              sortOrder: s,
              isRanking: ue,
              isRankable: T,
              testId: l,
            }),
          nt &&
            k.createElement(X1, {
              ref: ge,
              highlightedRowIndex: a,
              rows: i,
              head: n,
              sortKey: o,
              sortOrder: s,
              rowsPerPage: m,
              page: pt,
              isFixedSize: g || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: Vt,
              testId: l,
              isRankable: T,
              isRanking: ue,
              onRankStart: ve,
              onRankEnd: Ve,
              isRankingDisabled: B || h || !1,
            }),
        ),
      ),
      Ee <= 1
        ? null
        : k.createElement(
            Eb,
            { testId: l },
            k.createElement(d0, {
              value: pt,
              onChange: rt,
              total: Ee,
              i18n: A,
              isDisabled: h,
              testId: l,
            }),
          ),
      !nt &&
        Ge &&
        k.createElement(Qf, { isLoading: h, spinnerSize: ii, testId: l, loadingLabel: u }, Ge),
    );
  },
  J1 = y.lazy(function () {
    return tg(
      () => import("./body-CNnI0Dt3.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  X1 = y.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      i = t.isRanking,
      o = t.onRankStart,
      s = t.onRankEnd,
      u = t.isRankingDisabled,
      c = ae(t, W1),
      l = a && !c.sortKey,
      d = y.useState(!1),
      f = K(d, 2),
      p = f[0],
      h = f[1];
    y.useEffect(
      function () {
        l && h(!0);
      },
      [l],
    );
    var v = k.createElement(qb, te({ ref: r }, c));
    return l && p
      ? k.createElement(
          Vb,
          { fallback: v },
          k.createElement(
            y.Suspense,
            { fallback: v },
            k.createElement(
              J1,
              te({ ref: r }, c, {
                isRanking: i,
                onRankStart: o,
                onRankEnd: s,
                isRankingDisabled: u,
              }),
            ),
          ),
        )
      : v;
  });
function Z1(e, t, r) {
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
var Ws = (function (e) {
  function t() {
    var r;
    de(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = Z1(this, t, [].concat(a))),
      x(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      x(r, "onSetPageHandler", function (o, s) {
        var u = r.props.onSetPage;
        u && (u(o, s), r.setState({ page: o }));
      }),
      x(r, "onSortHandler", function (o, s) {
        var u = o.key,
          c = o.item,
          l = o.sortOrder,
          d = r.props.onSort;
        d && (d({ key: u, item: c, sortOrder: l }, s), r.setState({ sortKey: u, sortOrder: l }));
      }),
      x(r, "onRankEndIfExistsHandler", function (o) {
        r.props.onRankEnd && r.props.onRankEnd(o);
      }),
      x(r, "onRankEndHandler", function (o) {
        var s = o.destination,
          u = r.state,
          c = u.rows,
          l = u.page,
          d = r.props.rowsPerPage;
        if (!s || !c) {
          r.onRankEndIfExistsHandler(o);
          return;
        }
        var f = Zh(o, c, l, d);
        (r.setState({ rows: f }), r.onRankEndIfExistsHandler(o));
      }),
      r
    );
  }
  return (
    ze(t, e),
    fe(t, [
      {
        key: "UNSAFE_componentWillReceiveProps",
        value: function (n) {
          var a = n.sortKey || this.state.sortKey,
            i = n.sortOrder || this.state.sortOrder,
            o = n.page || this.state.page;
          this.setState({ page: o, sortKey: a, sortOrder: i, rows: n.rows });
        },
      },
      {
        key: "render",
        value: function () {
          var n = this.state,
            a = n.page,
            i = n.sortKey,
            o = n.sortOrder,
            s = n.rows,
            u = this.props,
            c = u.caption,
            l = u.emptyView,
            d = u.head,
            f = u.highlightedRowIndex,
            p = u.loadingSpinnerSize,
            h = u.isLoading,
            v = u.loadingLabel,
            g = u.isFixedSize,
            b = u.isRankable,
            m = u.isRankingDisabled,
            w = u.rowsPerPage,
            O = u.paginationi18n,
            _ = u.onRankStart,
            S = u.onPageRowsUpdate,
            E = u.testId,
            j = u.label;
          return k.createElement(Y1, {
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
            page: a,
            rows: s,
            rowsPerPage: w,
            sortKey: i,
            sortOrder: o,
            isRankable: b,
            isRankingDisabled: m,
            onRankEnd: this.onRankEndHandler,
            onRankStart: _,
            onPageRowsUpdate: S,
            testId: E,
            label: j,
          });
        },
      },
    ])
  );
})(k.Component);
x(Ws, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: me,
  onSort: me,
  rowsPerPage: 1 / 0,
});
const Q1 = (e, t, r, n) => {
    const a = Object.keys(n).map((i) => ({ key: i, content: i, isSortable: t, width: 25 }));
    return (r && a.push({ key: "delete", content: "Delete", isSortable: t, width: 25 }), a);
  },
  tp = (e, t, r, n) => ({ cells: Q1(e, t, r, n) });
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
var eO = {};
function Ci() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : eO;
}
var rp = Object.assign,
  ci = Object.getOwnPropertyDescriptor,
  Ot = Object.defineProperty,
  Ri = Object.prototype,
  fs = [];
Object.freeze(fs);
var np = {};
Object.freeze(np);
var tO = typeof Proxy < "u",
  rO = Object.toString();
function ap() {
  tO || H("Proxy not available");
}
function ip(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var $r = function () {};
function ct(e) {
  return typeof e == "function";
}
function vr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Pi(e) {
  return e !== null && typeof e == "object";
}
function Qt(e) {
  if (!Pi(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === rO;
}
function op(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Ai(e, t, r) {
  Ot(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function sp(e, t, r) {
  Ot(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function br(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return Pi(n) && n[r] === !0;
    }
  );
}
function Jr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function nO(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Lt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var up = typeof Object.getOwnPropertySymbols < "u";
function aO(e) {
  var t = Object.keys(e);
  if (!up) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Ri.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var ji =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : up
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function cp(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Ft(e, t) {
  return Ri.hasOwnProperty.call(e, t);
}
var iO =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      ji(t).forEach(function (n) {
        r[n] = ci(t, n);
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
function bd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function oO(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, uO(n.key), n));
  }
}
function Xr(e, t, r) {
  return (t && oO(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Nr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = cO(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pr() {
  return (
    (pr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    pr.apply(null, arguments)
  );
}
function lp(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), vs(e, t));
}
function vs(e, t) {
  return (
    (vs = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    vs(e, t)
  );
}
function sO(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function uO(e) {
  var t = sO(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function cO(e, t) {
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
var _t = Symbol("mobx-stored-annotations");
function kt(e) {
  function t(r, n) {
    if (ka(n)) return e.decorate_20223_(r, n);
    Oa(r, n, e);
  }
  return Object.assign(t, e);
}
function Oa(e, t, r) {
  (Ft(e, _t) || Ai(e, _t, pr({}, e[_t])), gO(r) || (e[_t][t] = r));
}
function lO(e) {
  return (Ft(e, _t) || Ai(e, _t, pr({}, e[_t])), e[_t]);
}
function ka(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var $ = Symbol("mobx administration"),
  rr = (function () {
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
        return xp(this);
      }),
      (t.reportChanged = function () {
        (Xe(), Cp(this), Ze());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      Xr(e, [
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
rr.isBeingObservedMask_ = 1;
rr.isPendingUnobservationMask_ = 2;
rr.diffValueMask_ = 4;
var Ks = br("Atom", rr);
function dp(e, t, r) {
  (t === void 0 && (t = $r), r === void 0 && (r = $r));
  var n = new rr(e);
  return (t !== $r && wk(n, t), r !== $r && Ip(n, r), n);
}
function dO(e, t) {
  return Vp(e, t);
}
function fO(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var li = { structural: dO, default: fO };
function hr(e, t, r) {
  return Lp(e)
    ? e
    : Array.isArray(e)
      ? se.array(e, { name: r })
      : Qt(e)
        ? se.object(e, void 0, { name: r })
        : Jr(e)
          ? se.map(e, { name: r })
          : Lt(e)
            ? se.set(e, { name: r })
            : typeof e == "function" && !Wr(e) && !ba(e)
              ? op(e)
                ? Kr(e)
                : ga(r, e)
              : e;
}
function vO(e, t, r) {
  if (e == null || Bi(e) || Fi(e) || _r(e) || yt(e)) return e;
  if (Array.isArray(e)) return se.array(e, { name: r, deep: !1 });
  if (Qt(e)) return se.object(e, void 0, { name: r, deep: !1 });
  if (Jr(e)) return se.map(e, { name: r, deep: !1 });
  if (Lt(e)) return se.set(e, { name: r, deep: !1 });
}
function Ii(e) {
  return e;
}
function pO(e, t) {
  return Vp(e, t) ? t : e;
}
var hO = "override";
function gO(e) {
  return e.annotationType_ === hO;
}
function Sa(e, t) {
  return { annotationType_: e, options_: t, make_: bO, extend_: yO, decorate_20223_: _O };
}
function bO(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Wr(r.value)) return 1;
  var i = fp(e, this, t, r, !1);
  return (Ot(n, t, i), 2);
}
function yO(e, t, r, n) {
  var a = fp(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function _O(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    i = this,
    o = function (c) {
      var l, d, f, p;
      return gr(
        (l = (d = i.options_) == null ? void 0 : d.name) != null ? l : n.toString(),
        c,
        (f = (p = i.options_) == null ? void 0 : p.autoAction) != null ? f : !1,
      );
    };
  if (r == "field")
    return function (u) {
      var c,
        l = u;
      return (
        Wr(l) || (l = o(l)),
        (c = i.options_) != null && c.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var s;
    return (
      Wr(e) || (e = o(e)),
      (s = this.options_) != null &&
        s.bound &&
        a(function () {
          var u = this,
            c = u[n].bind(u);
          ((c.isMobxAction = !0), (u[n] = c));
        }),
      e
    );
  }
  H(
    "Cannot apply '" +
      i.annotationType_ +
      "' to '" +
      String(n) +
      "' (kind: " +
      r +
      "):" +
      (`
'` +
        i.annotationType_ +
        "' can only be used on properties with a function value."),
  );
}
function mO(e, t, r, n) {
  (t.annotationType_, n.value);
}
function fp(e, t, r, n, a) {
  var i, o, s, u, c, l, d;
  (a === void 0 && (a = P.safeDescriptors), mO(e, t, r, n));
  var f = n.value;
  if ((i = t.options_) != null && i.bound) {
    var p;
    f = f.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return {
    value: gr(
      (o = (s = t.options_) == null ? void 0 : s.name) != null ? o : r.toString(),
      f,
      (u = (c = t.options_) == null ? void 0 : c.autoAction) != null ? u : !1,
      (l = t.options_) != null && l.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: a ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !a,
  };
}
function vp(e, t) {
  return { annotationType_: e, options_: t, make_: wO, extend_: OO, decorate_20223_: kO };
}
function wO(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Ft(e.target_, t) || !ba(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (ba(r.value)) return 1;
  var i = pp(e, this, t, r, !1, !1);
  return (Ot(n, t, i), 2);
}
function OO(e, t, r, n) {
  var a,
    i = pp(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, i, n);
}
function kO(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    ba(e) || (e = Kr(e)),
    (r = this.options_) != null &&
      r.bound &&
      a(function () {
        var i = this,
          o = i[n].bind(i);
        ((o.isMobXFlow = !0), (i[n] = o));
      }),
    e
  );
}
function SO(e, t, r, n) {
  (t.annotationType_, n.value);
}
function pp(e, t, r, n, a, i) {
  (i === void 0 && (i = P.safeDescriptors), SO(e, t, r, n));
  var o = n.value;
  if ((ba(o) || (o = Kr(o)), a)) {
    var s;
    ((o = o.bind((s = e.proxy_) != null ? s : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: i ? e.isPlainObject_ : !0, enumerable: !1, writable: !i };
}
function Ys(e, t) {
  return { annotationType_: e, options_: t, make_: EO, extend_: xO, decorate_20223_: CO };
}
function EO(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function xO(e, t, r, n) {
  return (
    RO(e, this, t, r),
    e.defineComputedProperty_(t, pr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function CO(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var i = Zr(this)[$],
        o = pr({}, r.options_, { get: e, context: this });
      (o.name || (o.name = "ObservableObject." + n.toString()), i.values_.set(n, new lt(o)));
    }),
    function () {
      return this[$].getObservablePropValue_(n);
    }
  );
}
function RO(e, t, r, n) {
  (t.annotationType_, n.get);
}
function Di(e, t) {
  return { annotationType_: e, options_: t, make_: PO, extend_: AO, decorate_20223_: jO };
}
function PO(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function AO(e, t, r, n) {
  var a, i;
  return (
    IO(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (i = this.options_) == null ? void 0 : i.enhancer) != null ? a : hr,
      n,
    )
  );
}
function jO(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    i = new WeakSet();
  function o(s, u) {
    var c,
      l,
      d = Zr(s)[$],
      f = new lr(
        u,
        (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : hr,
        "ObservableObject." + a.toString(),
        !1,
      );
    (d.values_.set(a, f), i.add(s));
  }
  if (n == "accessor")
    return {
      get: function () {
        return (i.has(this) || o(this, e.get.call(this)), this[$].getObservablePropValue_(a));
      },
      set: function (u) {
        return (i.has(this) || o(this, u), this[$].setObservablePropValue_(a, u));
      },
      init: function (u) {
        return (i.has(this) || o(this, u), u);
      },
    };
}
function IO(e, t, r, n) {
  t.annotationType_;
}
var DO = "true",
  TO = hp();
function hp(e) {
  return { annotationType_: DO, options_: e, make_: MO, extend_: LO, decorate_20223_: $O };
}
function MO(e, t, r, n) {
  var a, i;
  if (r.get) return Ti.make_(e, t, r, n);
  if (r.set) {
    var o = Wr(r.set) ? r.set : gr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: P.safeDescriptors ? e.isPlainObject_ : !0,
          set: o,
        }) === null
        ? 0
        : 2
      : (Ot(n, t, { configurable: !0, set: o }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var s;
    if (op(r.value)) {
      var u,
        c = (u = this.options_) != null && u.autoBind ? Kr.bound : Kr;
      return c.make_(e, t, r, n);
    }
    var l = (s = this.options_) != null && s.autoBind ? ga.bound : ga;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? se.ref : se;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function LO(e, t, r, n) {
  var a, i;
  if (r.get) return Ti.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: P.safeDescriptors ? e.isPlainObject_ : !0, set: gr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var s = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? se.ref : se;
  return s.extend_(e, t, r, n);
}
function $O(e, t) {
  H("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var NO = "observable",
  FO = "observable.ref",
  BO = "observable.shallow",
  zO = "observable.struct",
  gp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(gp);
function za(e) {
  return e || gp;
}
var ps = Di(NO),
  qO = Di(FO, { enhancer: Ii }),
  UO = Di(BO, { enhancer: vO }),
  VO = Di(zO, { enhancer: pO }),
  bp = kt(ps);
function qa(e) {
  return e.deep === !0 ? hr : e.deep === !1 ? Ii : HO(e.defaultDecorator);
}
function GO(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : hp(e)) : void 0;
}
function HO(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : hr;
}
function yp(e, t, r) {
  if (ka(t)) return ps.decorate_20223_(e, t);
  if (vr(t)) {
    Oa(e, t, ps);
    return;
  }
  return Lp(e)
    ? e
    : Qt(e)
      ? se.object(e, t, r)
      : Array.isArray(e)
        ? se.array(e, t)
        : Jr(e)
          ? se.map(e, t)
          : Lt(e)
            ? se.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : se.box(e, t);
}
rp(yp, bp);
var WO = {
    box: function (t, r) {
      var n = za(r);
      return new lr(t, qa(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = za(r);
      return (P.useProxies === !1 || n.proxy === !1 ? Gk : Mk)(t, qa(n), n.name);
    },
    map: function (t, r) {
      var n = za(r);
      return new Np(t, qa(n), n.name);
    },
    set: function (t, r) {
      var n = za(r);
      return new Fp(t, qa(n), n.name);
    },
    object: function (t, r, n) {
      return mr(function () {
        return Ek(P.useProxies === !1 || n?.proxy === !1 ? Zr({}, n) : Ik({}, n), t, r);
      });
    },
    ref: kt(qO),
    shallow: kt(UO),
    deep: bp,
    struct: kt(VO),
  },
  se = rp(yp, WO),
  _p = "computed",
  KO = "computed.struct",
  hs = Ys(_p),
  YO = Ys(KO, { equals: li.structural }),
  Ti = function (t, r) {
    if (ka(r)) return hs.decorate_20223_(t, r);
    if (vr(r)) return Oa(t, r, hs);
    if (Qt(t)) return kt(Ys(_p, t));
    var n = Qt(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new lt(n));
  };
Object.assign(Ti, hs);
Ti.struct = kt(YO);
var yd,
  _d,
  di = 0,
  JO = 1,
  XO =
    (yd = (_d = ci(function () {}, "name")) == null ? void 0 : _d.configurable) != null ? yd : !1,
  md = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function gr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return ZO(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    XO && ((md.value = e), Ot(a, "name", md)),
    a
  );
}
function ZO(e, t, r, n, a) {
  var i = QO(e, t);
  try {
    return r.apply(n, a);
  } catch (o) {
    throw ((i.error_ = o), o);
  } finally {
    ek(i);
  }
}
function QO(e, t, r, n) {
  var a = !1,
    i = 0,
    o = P.trackingDerivation,
    s = !t || !o;
  Xe();
  var u = P.allowStateChanges;
  s && (yr(), (u = Mi(!0)));
  var c = Js(!0),
    l = {
      runAsAction_: s,
      prevDerivation_: o,
      prevAllowStateChanges_: u,
      prevAllowStateReads_: c,
      notifySpy_: a,
      startTime_: i,
      actionId_: JO++,
      parentActionId_: di,
    };
  return ((di = l.actionId_), l);
}
function ek(e) {
  (di !== e.actionId_ && H(30),
    (di = e.parentActionId_),
    e.error_ !== void 0 && (P.suppressReactionErrors = !0),
    Li(e.prevAllowStateChanges_),
    aa(e.prevAllowStateReads_),
    Ze(),
    e.runAsAction_ && Bt(e.prevDerivation_),
    (P.suppressReactionErrors = !1));
}
function tk(e, t) {
  var r = Mi(e);
  try {
    return t();
  } finally {
    Li(r);
  }
}
function Mi(e) {
  var t = P.allowStateChanges;
  return ((P.allowStateChanges = e), t);
}
function Li(e) {
  P.allowStateChanges = e;
}
var lr = (function (e) {
    function t(n, a, i, o, s) {
      var u;
      return (
        i === void 0 && (i = "ObservableValue"),
        s === void 0 && (s = li.default),
        (u = e.call(this, i) || this),
        (u.enhancer = void 0),
        (u.name_ = void 0),
        (u.equals = void 0),
        (u.hasUnreportedChange_ = !1),
        (u.interceptors_ = void 0),
        (u.changeListeners_ = void 0),
        (u.value_ = void 0),
        (u.dehancer = void 0),
        (u.enhancer = a),
        (u.name_ = i),
        (u.equals = s),
        (u.value_ = a(n, void 0, i)),
        u
      );
    }
    lp(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== P.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (Ye(this)) {
          var i = Je(this, { object: this, type: St, newValue: a });
          if (!i) return P.UNCHANGED;
          a = i.newValue;
        }
        return (
          (a = this.enhancer(a, this.value_, this.name_)),
          this.equals(this.value_, a) ? P.UNCHANGED : a
        );
      }),
      (r.setNewValue_ = function (a) {
        var i = this.value_;
        ((this.value_ = a),
          this.reportChanged(),
          st(this) && ut(this, { type: St, object: this, newValue: a, oldValue: i }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (a) {
        return Ea(this, a);
      }),
      (r.observe_ = function (a, i) {
        return (
          i &&
            a({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: St,
              newValue: this.value_,
              oldValue: void 0,
            }),
          xa(this, a)
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
        return cp(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(rr),
  lt = (function () {
    function e(r) {
      ((this.dependenciesState_ = W.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = W.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new vi(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = fi.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || H(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = gr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? li.structural : li.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        ok(this);
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
          gs(this) &&
            (this.warnAboutUntrackedRead_(), Xe(), (this.value_ = this.computeValue_(!1)), Ze());
        else if ((xp(this), gs(this))) {
          var n = P.trackingContext;
          (this.keepAlive_ && !n && (P.trackingContext = this),
            this.trackAndCompute() && ik(this),
            (P.trackingContext = n));
        }
        var a = this.value_;
        if (Ja(a)) throw a.cause;
        return a;
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
          a = this.dependenciesState_ === W.NOT_TRACKING_,
          i = this.computeValue_(!0),
          o = a || Ja(n) || Ja(i) || !this.equals_(n, i);
        return (o && (this.value_ = i), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = Mi(!1),
          i;
        if (n) i = mp(this, this.derivation, this.scope_);
        else if (P.disableErrorBoundaries === !0) i = this.derivation.call(this.scope_);
        else
          try {
            i = this.derivation.call(this.scope_);
          } catch (o) {
            i = new vi(o);
          }
        return (Li(a), (this.isComputing = !1), i);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (bs(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var i = this,
          o = !0,
          s = void 0;
        return gk(function () {
          var u = i.get();
          if (!o || a) {
            var c = yr();
            (n({
              observableKind: "computed",
              debugObjectName: i.name_,
              type: St,
              object: i,
              newValue: u,
              oldValue: s,
            }),
              Bt(c));
          }
          ((o = !1), (s = u));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return cp(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      Xr(e, [
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
lt.isComputingMask_ = 1;
lt.isRunningSetterMask_ = 2;
lt.isBeingObservedMask_ = 4;
lt.isPendingUnobservationMask_ = 8;
lt.diffValueMask_ = 16;
var $i = br("ComputedValue", lt),
  W;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(W || (W = {}));
var fi;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(fi || (fi = {}));
var vi = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function Ja(e) {
  return e instanceof vi;
}
function gs(e) {
  switch (e.dependenciesState_) {
    case W.UP_TO_DATE_:
      return !1;
    case W.NOT_TRACKING_:
    case W.STALE_:
      return !0;
    case W.POSSIBLY_STALE_: {
      for (var t = Js(!0), r = yr(), n = e.observing_, a = n.length, i = 0; i < a; i++) {
        var o = n[i];
        if ($i(o)) {
          if (P.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Bt(r), aa(t), !0);
            }
          if (e.dependenciesState_ === W.STALE_) return (Bt(r), aa(t), !0);
        }
      }
      return (Op(e), Bt(r), aa(t), !1);
    }
  }
}
function mp(e, t, r) {
  var n = Js(!0);
  (Op(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++P.runId));
  var a = P.trackingDerivation;
  ((P.trackingDerivation = e), P.inBatch++);
  var i;
  if (P.disableErrorBoundaries === !0) i = t.call(r);
  else
    try {
      i = t.call(r);
    } catch (o) {
      i = new vi(o);
    }
  return (P.inBatch--, (P.trackingDerivation = a), rk(e), aa(n), i);
}
function rk(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = W.UP_TO_DATE_,
      a = 0,
      i = e.unboundDepsCount_,
      o = 0;
    o < i;
    o++
  ) {
    var s = r[o];
    (s.diffValue === 0 && ((s.diffValue = 1), a !== o && (r[a] = s), a++),
      s.dependenciesState_ > n && (n = s.dependenciesState_));
  }
  for (r.length = a, e.newObserving_ = null, i = t.length; i--; ) {
    var u = t[i];
    (u.diffValue === 0 && Sp(u, e), (u.diffValue = 0));
  }
  for (; a--; ) {
    var c = r[a];
    c.diffValue === 1 && ((c.diffValue = 0), ak(c, e));
  }
  n !== W.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function bs(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Sp(t[r], e);
  e.dependenciesState_ = W.NOT_TRACKING_;
}
function wp(e) {
  var t = yr();
  try {
    return e();
  } finally {
    Bt(t);
  }
}
function yr() {
  var e = P.trackingDerivation;
  return ((P.trackingDerivation = null), e);
}
function Bt(e) {
  P.trackingDerivation = e;
}
function Js(e) {
  var t = P.allowStateReads;
  return ((P.allowStateReads = e), t);
}
function aa(e) {
  P.allowStateReads = e;
}
function Op(e) {
  if (e.dependenciesState_ !== W.UP_TO_DATE_) {
    e.dependenciesState_ = W.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = W.UP_TO_DATE_;
  }
}
var Xa = function () {
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
  Za = !0,
  kp = !1,
  P = (function () {
    var e = Ci();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Za = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new Xa().version && (Za = !1),
      Za
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Xa()))
        : (setTimeout(function () {
            kp || H(35);
          }, 1),
          new Xa())
    );
  })();
function nk() {
  if (((P.pendingReactions.length || P.inBatch || P.isRunningReactions) && H(36), (kp = !0), Za)) {
    var e = Ci();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (P = new Xa()));
  }
}
function ak(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Sp(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Ep(e));
}
function Ep(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), P.pendingUnobservations.push(e));
}
function Xe() {
  P.inBatch++;
}
function Ze() {
  if (--P.inBatch === 0) {
    Rp();
    for (var e = P.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof lt && r.suspend_()));
    }
    P.pendingUnobservations = [];
  }
}
function xp(e) {
  var t = P.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && P.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && P.inBatch > 0 && Ep(e), !1);
}
function Cp(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === W.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = W.STALE_));
    }));
}
function ik(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.POSSIBLY_STALE_
        ? (t.dependenciesState_ = W.STALE_)
        : t.dependenciesState_ === W.UP_TO_DATE_ && (e.lowestObserverState_ = W.UP_TO_DATE_);
    }));
}
function ok(e) {
  e.lowestObserverState_ === W.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = W.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.UP_TO_DATE_ &&
        ((t.dependenciesState_ = W.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var xt = (function () {
  function e(r, n, a, i) {
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
      (this.isTracing_ = fi.NONE),
      (this.name_ = r),
      (this.onInvalidate_ = n),
      (this.errorHandler_ = a),
      (this.requiresObservable_ = i));
  }
  var t = e.prototype;
  return (
    (t.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (t.schedule_ = function () {
      this.isScheduled || ((this.isScheduled = !0), P.pendingReactions.push(this), Rp());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Xe(), (this.isScheduled = !1));
        var n = P.trackingContext;
        if (((P.trackingContext = this), gs(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((P.trackingContext = n), Ze());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (Xe(), (this.isRunning = !0));
        var a = P.trackingContext;
        P.trackingContext = this;
        var i = mp(this, n, void 0);
        ((P.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && bs(this),
          Ja(i) && this.reportExceptionInDerivation_(i.cause),
          Ze());
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var a = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (P.disableErrorBoundaries) throw n;
      var i = "[mobx] uncaught error in '" + this + "'";
      (P.suppressReactionErrors || console.error(i, n),
        P.globalReactionErrorHandlers.forEach(function (o) {
          return o(n, a);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Xe(), bs(this), Ze()));
    }),
    (t.getDisposer_ = function (n) {
      var a = this,
        i = function o() {
          (a.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", o));
        };
      return (
        n == null || n.addEventListener == null || n.addEventListener("abort", i),
        (i[$] = this),
        "dispose" in Symbol && typeof Symbol.dispose == "symbol" && (i[Symbol.dispose] = i),
        i
      );
    }),
    (t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (t.trace = function (n) {}),
    Xr(e, [
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
xt.isDisposedMask_ = 1;
xt.isScheduledMask_ = 2;
xt.isTrackPendingMask_ = 4;
xt.isRunningMask_ = 8;
xt.diffValueMask_ = 16;
var sk = 100,
  ys = function (t) {
    return t();
  };
function Rp() {
  P.inBatch > 0 || P.isRunningReactions || ys(uk);
}
function uk() {
  P.isRunningReactions = !0;
  for (var e = P.pendingReactions, t = 0; e.length > 0; ) {
    ++t === sk && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  P.isRunningReactions = !1;
}
var pi = br("Reaction", xt);
function ck(e) {
  var t = ys;
  ys = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function ia() {
  return !1;
}
function lk(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Pp = "action",
  dk = "action.bound",
  Ap = "autoAction",
  fk = "autoAction.bound",
  vk = "<unnamed action>",
  _s = Sa(Pp),
  pk = Sa(dk, { bound: !0 }),
  ms = Sa(Ap, { autoAction: !0 }),
  hk = Sa(fk, { autoAction: !0, bound: !0 });
function jp(e) {
  var t = function (n, a) {
    if (ct(n)) return gr(n.name || vk, n, e);
    if (ct(a)) return gr(n, a, e);
    if (ka(a)) return (e ? ms : _s).decorate_20223_(n, a);
    if (vr(a)) return Oa(n, a, e ? ms : _s);
    if (vr(n)) return kt(Sa(e ? Ap : Pp, { name: n, autoAction: e }));
  };
  return t;
}
var ke = jp(!1);
Object.assign(ke, _s);
var ga = jp(!0);
Object.assign(ga, ms);
ke.bound = kt(pk);
ga.bound = kt(hk);
function Wr(e) {
  return ct(e) && e.isMobxAction === !0;
}
function gk(e, t) {
  var r, n, a, i;
  t === void 0 && (t = np);
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    s = !t.scheduler && !t.delay,
    u;
  if (s)
    u = new xt(
      o,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var c = yk(t),
      l = !1;
    u = new xt(
      o,
      function () {
        l ||
          ((l = !0),
          c(function () {
            ((l = !1), u.isDisposed || u.track(d));
          }));
      },
      t.onError,
      t.requiresObservable,
    );
  }
  function d() {
    e(u);
  }
  return (
    ((a = t) != null && (a = a.signal) != null && a.aborted) || u.schedule_(),
    u.getDisposer_((i = t) == null ? void 0 : i.signal)
  );
}
var bk = function (t) {
  return t();
};
function yk(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : bk;
}
var _k = "onBO",
  mk = "onBUO";
function wk(e, t, r) {
  return Dp(_k, e, t, r);
}
function Ip(e, t, r) {
  return Dp(mk, e, t, r);
}
function Dp(e, t, r, n) {
  var a = bi(t),
    i = ct(n) ? n : r,
    o = e + "L";
  return (
    a[o] ? a[o].add(i) : (a[o] = new Set([i])),
    function () {
      var s = a[o];
      s && (s.delete(i), s.size === 0 && delete a[o]);
    }
  );
}
var Ok = "never",
  Ua = "always",
  kk = "observed";
function Sk(e) {
  e.isolateGlobalState === !0 && nk();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (P.useProxies = t === Ua ? !0 : t === Ok ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (P.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Ua ? Ua : r === kk;
    ((P.enforceActions = n), (P.allowStateChanges = !(n === !0 || n === Ua)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (a) {
    a in e && (P[a] = !!e[a]);
  }),
    (P.allowStateReads = !P.observableRequiresReaction),
    e.reactionScheduler && ck(e.reactionScheduler));
}
function Ek(e, t, r, n) {
  var a = iO(t);
  return (
    mr(function () {
      var i = Zr(e, n)[$];
      ji(a).forEach(function (o) {
        i.extend_(o, a[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function xk(e, t) {
  return Tp(bi(e, t));
}
function Tp(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = Ck(e.observing_).map(Tp)),
    t
  );
}
function Ck(e) {
  return Array.from(new Set(e));
}
var Rk = 0;
function Mp() {
  this.message = "FLOW_CANCELLED";
}
Mp.prototype = Object.create(Error.prototype);
var Bo = vp("flow"),
  Pk = vp("flow.bound", { bound: !0 }),
  Kr = Object.assign(function (t, r) {
    if (ka(r)) return Bo.decorate_20223_(t, r);
    if (vr(r)) return Oa(t, r, Bo);
    var n = t,
      a = n.name || "<unnamed flow>",
      i = function () {
        var s = this,
          u = arguments,
          c = ++Rk,
          l = ke(a + " - runid: " + c + " - init", n).apply(s, u),
          d,
          f = void 0,
          p = new Promise(function (h, v) {
            var g = 0;
            d = v;
            function b(O) {
              f = void 0;
              var _;
              try {
                _ = ke(a + " - runid: " + c + " - yield " + g++, l.next).call(l, O);
              } catch (S) {
                return v(S);
              }
              w(_);
            }
            function m(O) {
              f = void 0;
              var _;
              try {
                _ = ke(a + " - runid: " + c + " - yield " + g++, l.throw).call(l, O);
              } catch (S) {
                return v(S);
              }
              w(_);
            }
            function w(O) {
              if (ct(O?.then)) {
                O.then(w, v);
                return;
              }
              return O.done ? h(O.value) : ((f = Promise.resolve(O.value)), f.then(b, m));
            }
            b(void 0);
          });
        return (
          (p.cancel = ke(a + " - runid: " + c + " - cancel", function () {
            try {
              f && wd(f);
              var h = l.return(void 0),
                v = Promise.resolve(h.value);
              (v.then($r, $r), wd(v), d(new Mp()));
            } catch (g) {
              d(g);
            }
          })),
          p
        );
      };
    return ((i.isMobXFlow = !0), i);
  }, Bo);
Kr.bound = kt(Pk);
function wd(e) {
  ct(e.cancel) && e.cancel();
}
function ba(e) {
  return e?.isMobXFlow === !0;
}
function Ak(e, t) {
  return e ? Bi(e) || !!e[$] || Ks(e) || pi(e) || $i(e) : !1;
}
function Lp(e) {
  return Ak(e);
}
function $t(e, t) {
  (t === void 0 && (t = void 0), Xe());
  try {
    return e.apply(t);
  } finally {
    Ze();
  }
}
function Lr(e) {
  return e[$];
}
var jk = {
  has: function (t, r) {
    return Lr(t).has_(r);
  },
  get: function (t, r) {
    return Lr(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return vr(r) ? ((a = Lr(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return vr(r) ? ((n = Lr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = Lr(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return Lr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    H(13);
  },
};
function Ik(e, t) {
  var r, n;
  return (
    ap(),
    (e = Zr(e, t)),
    (n = (r = e[$]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, jk))
  );
}
function Ye(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Ea(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    ip(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Je(e, t) {
  var r = yr();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, i = n.length;
      a < i && ((t = n[a](t)), t && !t.type && H(14), !!t);
      a++
    );
    return t;
  } finally {
    Bt(r);
  }
}
function st(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function xa(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    ip(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function ut(e, t) {
  var r = yr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, i = n.length; a < i; a++) n[a](t);
    Bt(r);
  }
}
function Ni(e, t, r) {
  return (
    mr(function () {
      var n,
        a = Zr(e, r)[$];
      ((n = t) != null || (t = lO(e)),
        ji(t).forEach(function (i) {
          return a.make_(i, t[i]);
        }));
    }),
    e
  );
}
var Od = "splice",
  St = "update",
  Dk = 1e4,
  Tk = {
    get: function (t, r) {
      var n = t[$];
      return r === $
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Ft(hi, r)
              ? hi[r]
              : t[r];
    },
    set: function (t, r, n) {
      var a = t[$];
      return (
        r === "length" && a.setArrayLength_(n),
        typeof r == "symbol" || isNaN(r) ? (t[r] = n) : a.set_(parseInt(r), n),
        !0
      );
    },
    preventExtensions: function () {
      H(15);
    },
  },
  Xs = (function () {
    function e(r, n, a, i) {
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
        (this.legacyMode_ = i),
        (this.atom_ = new rr(r)),
        (this.enhancer_ = function (o, s) {
          return n(o, s, "ObservableArray[..]");
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
        return Ea(this, n);
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
          xa(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && H("Out of range: " + n);
        var a = this.values_.length;
        if (n !== a)
          if (n > a) {
            for (var i = new Array(n - a), o = 0; o < n - a; o++) i[o] = void 0;
            this.spliceWithArray_(a, 0, i);
          } else this.spliceWithArray_(n, a - n);
      }),
      (t.updateArrayLength_ = function (n, a) {
        (n !== this.lastKnownLength_ && H(16),
          (this.lastKnownLength_ += a),
          this.legacyMode_ && a > 0 && Up(n + a + 1));
      }),
      (t.spliceWithArray_ = function (n, a, i) {
        var o = this;
        this.atom_;
        var s = this.values_.length;
        if (
          (n === void 0 ? (n = 0) : n > s ? (n = s) : n < 0 && (n = Math.max(0, s + n)),
          arguments.length === 1
            ? (a = s - n)
            : a == null
              ? (a = 0)
              : (a = Math.max(0, Math.min(a, s - n))),
          i === void 0 && (i = fs),
          Ye(this))
        ) {
          var u = Je(this, { object: this.proxy_, type: Od, index: n, removedCount: a, added: i });
          if (!u) return fs;
          ((a = u.removedCount), (i = u.added));
        }
        if (
          ((i =
            i.length === 0
              ? i
              : i.map(function (d) {
                  return o.enhancer_(d, void 0);
                })),
          this.legacyMode_)
        ) {
          var c = i.length - a;
          this.updateArrayLength_(s, c);
        }
        var l = this.spliceItemsIntoValues_(n, a, i);
        return (
          (a !== 0 || i.length !== 0) && this.notifyArraySplice_(n, i, l),
          this.dehanceValues_(l)
        );
      }),
      (t.spliceItemsIntoValues_ = function (n, a, i) {
        if (i.length < Dk) {
          var o;
          return (o = this.values_).splice.apply(o, [n, a].concat(i));
        } else {
          var s = this.values_.slice(n, n + a),
            u = this.values_.slice(n + a);
          this.values_.length += i.length - a;
          for (var c = 0; c < i.length; c++) this.values_[n + c] = i[c];
          for (var l = 0; l < u.length; l++) this.values_[n + i.length + l] = u[l];
          return s;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (n, a, i) {
        var o = !this.owned_ && ia(),
          s = st(this),
          u =
            s || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: St,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: a,
                  oldValue: i,
                }
              : null;
        (this.atom_.reportChanged(), s && ut(this, u));
      }),
      (t.notifyArraySplice_ = function (n, a, i) {
        var o = !this.owned_ && ia(),
          s = st(this),
          u =
            s || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Od,
                  index: n,
                  removed: i,
                  added: a,
                  removedCount: i.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), s && ut(this, u));
      }),
      (t.get_ = function (n) {
        if (this.legacyMode_ && n >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + n);
          return;
        }
        return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[n]));
      }),
      (t.set_ = function (n, a) {
        var i = this.values_;
        if ((this.legacyMode_ && n > i.length && H(17, n, i.length), n < i.length)) {
          this.atom_;
          var o = i[n];
          if (Ye(this)) {
            var s = Je(this, { type: St, object: this.proxy_, index: n, newValue: a });
            if (!s) return;
            a = s.newValue;
          }
          a = this.enhancer_(a, o);
          var u = a !== o;
          u && ((i[n] = a), this.notifyArrayChildUpdate_(n, a, o));
        } else {
          for (var c = new Array(n + 1 - i.length), l = 0; l < c.length - 1; l++) c[l] = void 0;
          ((c[c.length - 1] = a), this.spliceWithArray_(i.length, 0, c));
        }
      }),
      e
    );
  })();
function Mk(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    ap(),
    mr(function () {
      var a = new Xs(r, t, n, !1);
      sp(a.values_, $, a);
      var i = new Proxy(a.values_, Tk);
      return ((a.proxy_ = i), e && e.length && a.spliceWithArray_(0, 0, e), i);
    })
  );
}
var hi = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var r = this[$];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, r) {
    for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
      a[i - 2] = arguments[i];
    var o = this[$];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return o.spliceWithArray_(t);
      case 2:
        return o.spliceWithArray_(t, r);
    }
    return o.spliceWithArray_(t, r, a);
  },
  spliceWithArray: function (t, r, n) {
    return this[$].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (var t = this[$], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return (t.spliceWithArray_(t.values_.length, 0, n), t.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[$].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[$], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
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
    var r = this[$],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
ie("at", qe);
ie("concat", qe);
ie("flat", qe);
ie("includes", qe);
ie("indexOf", qe);
ie("join", qe);
ie("lastIndexOf", qe);
ie("slice", qe);
ie("toString", qe);
ie("toLocaleString", qe);
ie("toSorted", qe);
ie("toSpliced", qe);
ie("with", qe);
ie("every", vt);
ie("filter", vt);
ie("find", vt);
ie("findIndex", vt);
ie("findLast", vt);
ie("findLastIndex", vt);
ie("flatMap", vt);
ie("forEach", vt);
ie("map", vt);
ie("some", vt);
ie("toReversed", vt);
ie("reduce", $p);
ie("reduceRight", $p);
function ie(e, t) {
  typeof Array.prototype[e] == "function" && (hi[e] = t(e));
}
function qe(e) {
  return function () {
    var t = this[$];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function vt(e) {
  return function (t, r) {
    var n = this,
      a = this[$];
    a.atom_.reportObserved();
    var i = a.dehanceValues_(a.values_);
    return i[e](function (o, s) {
      return t.call(r, o, s, n);
    });
  };
}
function $p(e) {
  return function () {
    var t = this,
      r = this[$];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_),
      a = arguments[0];
    return (
      (arguments[0] = function (i, o, s) {
        return a(i, o, s, t);
      }),
      n[e].apply(n, arguments)
    );
  };
}
var Lk = br("ObservableArrayAdministration", Xs);
function Fi(e) {
  return Pi(e) && Lk(e[$]);
}
var $k = {},
  Xt = "add",
  gi = "delete",
  Np = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = hr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[$] = $k),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        ct(Map) || H(18),
        mr(function () {
          ((i.keysAtom_ = dp("ObservableMap.keys()")),
            (i.data_ = new Map()),
            (i.hasMap_ = new Map()),
            r && i.merge(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.has_ = function (n) {
        return this.data_.has(n);
      }),
      (t.has = function (n) {
        var a = this;
        if (!P.trackingDerivation) return this.has_(n);
        var i = this.hasMap_.get(n);
        if (!i) {
          var o = (i = new lr(this.has_(n), Ii, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            Ip(o, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return i.get();
      }),
      (t.set = function (n, a) {
        var i = this.has_(n);
        if (Ye(this)) {
          var o = Je(this, { type: i ? St : Xt, object: this, newValue: a, name: n });
          if (!o) return this;
          a = o.newValue;
        }
        return (i ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, Ye(this))) {
          var i = Je(this, { type: gi, object: this, name: n });
          if (!i) return !1;
        }
        if (this.has_(n)) {
          var o = ia(),
            s = st(this),
            u =
              s || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: gi,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            $t(function () {
              var c;
              (a.keysAtom_.reportChanged(), (c = a.hasMap_.get(n)) == null || c.setNewValue_(!1));
              var l = a.data_.get(n);
              (l.setNewValue_(void 0), a.data_.delete(n));
            }),
            s && ut(this, u),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var i = this.data_.get(n);
        if (((a = i.prepareNewValue_(a)), a !== P.UNCHANGED)) {
          var o = ia(),
            s = st(this),
            u =
              s || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: St,
                    object: this,
                    oldValue: i.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (i.setNewValue_(a), s && ut(this, u));
        }
      }),
      (t.addValue_ = function (n, a) {
        var i = this;
        (this.keysAtom_,
          $t(function () {
            var c,
              l = new lr(a, i.enhancer_, "ObservableMap.key", !1);
            (i.data_.set(n, l),
              (a = l.value_),
              (c = i.hasMap_.get(n)) == null || c.setNewValue_(!0),
              i.keysAtom_.reportChanged());
          }));
        var o = ia(),
          s = st(this),
          u =
            s || o
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Xt,
                  object: this,
                  name: n,
                  newValue: a,
                }
              : null;
        s && ut(this, u);
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
        return kd({
          next: function () {
            var o = a.next(),
              s = o.done,
              u = o.value;
            return { done: s, value: s ? void 0 : n.get(u) };
          },
        });
      }),
      (t.entries = function () {
        var n = this,
          a = this.keys();
        return kd({
          next: function () {
            var o = a.next(),
              s = o.done,
              u = o.value;
            return { done: s, value: s ? void 0 : [u, n.get(u)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (n, a) {
        for (var i = Nr(this), o; !(o = i()).done; ) {
          var s = o.value,
            u = s[0],
            c = s[1];
          n.call(a, c, u, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          _r(n) && (n = new Map(n)),
          $t(function () {
            Qt(n)
              ? aO(n).forEach(function (i) {
                  return a.set(i, n[i]);
                })
              : Array.isArray(n)
                ? n.forEach(function (i) {
                    var o = i[0],
                      s = i[1];
                    return a.set(o, s);
                  })
                : Jr(n)
                  ? (nO(n) || H(19, n),
                    n.forEach(function (i, o) {
                      return a.set(o, i);
                    }))
                  : n != null && H(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        $t(function () {
          wp(function () {
            for (var a = Nr(n.keys()), i; !(i = a()).done; ) {
              var o = i.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          $t(function () {
            for (
              var i = Nk(n), o = new Map(), s = !1, u = Nr(a.data_.keys()), c;
              !(c = u()).done;

            ) {
              var l = c.value;
              if (!i.has(l)) {
                var d = a.delete(l);
                if (d) s = !0;
                else {
                  var f = a.data_.get(l);
                  o.set(l, f);
                }
              }
            }
            for (var p = Nr(i.entries()), h; !(h = p()).done; ) {
              var v = h.value,
                g = v[0],
                b = v[1],
                m = a.data_.has(g);
              if ((a.set(g, b), a.data_.has(g))) {
                var w = a.data_.get(g);
                (o.set(g, w), m || (s = !0));
              }
            }
            if (!s)
              if (a.data_.size !== o.size) a.keysAtom_.reportChanged();
              else
                for (var O = a.data_.keys(), _ = o.keys(), S = O.next(), E = _.next(); !S.done; ) {
                  if (S.value !== E.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = O.next()), (E = _.next()));
                }
            a.data_ = o;
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
        return xa(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ea(this, n);
      }),
      Xr(e, [
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
  _r = br("ObservableMap", Np);
function kd(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Qs(e));
}
function Nk(e) {
  if (Jr(e) || _r(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (Qt(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return H(21, e);
}
var Fk = {},
  Fp = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = hr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[$] = Fk),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        ct(Set) || H(22),
        (this.enhancer_ = function (o, s) {
          return n(o, s, a);
        }),
        mr(function () {
          ((i.atom_ = dp(i.name_)), r && i.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        $t(function () {
          wp(function () {
            for (var a = Nr(n.data_.values()), i; !(i = a()).done; ) {
              var o = i.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var i = Nr(this), o; !(o = i()).done; ) {
          var s = o.value;
          n.call(a, s, s, this);
        }
      }),
      (t.add = function (n) {
        var a = this;
        if ((this.atom_, Ye(this))) {
          var i = Je(this, { type: Xt, object: this, newValue: n });
          if (!i) return this;
          n = i.newValue;
        }
        if (!this.has(n)) {
          $t(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var o = !1,
            s = st(this),
            u =
              s || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Xt,
                    object: this,
                    newValue: n,
                  }
                : null;
          s && ut(this, u);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (Ye(this)) {
          var i = Je(this, { type: gi, object: this, oldValue: n });
          if (!i) return !1;
        }
        if (this.has(n)) {
          var o = !1,
            s = st(this),
            u =
              s || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: gi,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            $t(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            s && ut(this, u),
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
        return Sd({
          next: function () {
            var i = n.next(),
              o = i.value,
              s = i.done;
            return s ? { value: void 0, done: s } : { value: [o, o], done: s };
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
        return Sd({
          next: function () {
            var o = a.next(),
              s = o.value,
              u = o.done;
            return u ? { value: void 0, done: u } : { value: n.dehanceValue_(s), done: u };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Lt(n) && !yt(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Lt(n) && !yt(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Lt(n) && !yt(n)) return n.symmetricDifference(this);
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
        if (Lt(n) && !yt(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          yt(n) && (n = new Set(n)),
          $t(function () {
            Array.isArray(n)
              ? (a.clear(),
                n.forEach(function (i) {
                  return a.add(i);
                }))
              : Lt(n)
                ? (a.clear(),
                  n.forEach(function (i) {
                    return a.add(i);
                  }))
                : n != null && H("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, a) {
        return xa(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ea(this, n);
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
      Xr(e, [
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
  yt = br("ObservableSet", Fp);
function Sd(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Qs(e));
}
var Ed = Object.create(null),
  xd = "remove",
  Bp = (function () {
    function e(r, n, a, i) {
      (n === void 0 && (n = new Map()),
        i === void 0 && (i = TO),
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
        (this.defaultAnnotation_ = i),
        (this.keysAtom_ = new rr("ObservableObject.keys")),
        (this.isPlainObject_ = Qt(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, a) {
        var i = this.values_.get(n);
        if (i instanceof lt) return (i.set(a), !0);
        if (Ye(this)) {
          var o = Je(this, { type: St, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!o) return null;
          a = o.newValue;
        }
        if (((a = i.prepareNewValue_(a)), a !== P.UNCHANGED)) {
          var s = st(this),
            u = !1,
            c =
              s || u
                ? {
                    type: St,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: i.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (i.setNewValue_(a), s && ut(this, c));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (P.trackingDerivation && !Ft(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, a, i) {
        return (
          i === void 0 && (i = !1),
          Ft(this.target_, n)
            ? this.values_.has(n)
              ? this.setObservablePropValue_(n, a)
              : i
                ? Reflect.set(this.target_, n, a)
                : ((this.target_[n] = a), !0)
            : this.extend_(
                n,
                { value: a, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                i,
              )
        );
      }),
      (t.has_ = function (n) {
        if (!P.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var a = this.pendingKeys_.get(n);
        return (
          a ||
            ((a = new lr(n in this.target_, Ii, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var i;
            if ((i = this.target_[_t]) != null && i[n]) return;
            H(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== Ri; ) {
            var s = ci(o, n);
            if (s) {
              var u = a.make_(this, n, s, o);
              if (u === 0) return;
              if (u === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          Rd(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, i, o) {
        if ((o === void 0 && (o = !1), i === !0 && (i = this.defaultAnnotation_), i === !1))
          return this.defineProperty_(n, a, o);
        var s = i.extend_(this, n, a, o);
        return (s && Rd(this, i, n), s);
      }),
      (t.defineProperty_ = function (n, a, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          Xe();
          var o = this.delete_(n);
          if (!o) return o;
          if (Ye(this)) {
            var s = Je(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Xt,
              newValue: a.value,
            });
            if (!s) return null;
            var u = s.newValue;
            a.value !== u && (a = pr({}, a, { value: u }));
          }
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else Ot(this.target_, n, a);
          this.notifyPropertyAddition_(n, a.value);
        } finally {
          Ze();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, a, i, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          Xe();
          var s = this.delete_(n);
          if (!s) return s;
          if (Ye(this)) {
            var u = Je(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Xt,
              newValue: a,
            });
            if (!u) return null;
            a = u.newValue;
          }
          var c = Cd(n),
            l = {
              configurable: P.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: c.get,
              set: c.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else Ot(this.target_, n, l);
          var d = new lr(a, i, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          Ze();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, a, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          Xe();
          var o = this.delete_(n);
          if (!o) return o;
          if (Ye(this)) {
            var s = Je(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Xt,
              newValue: void 0,
            });
            if (!s) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var u = Cd(n),
            c = {
              configurable: P.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: u.get,
              set: u.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, c)) return !1;
          } else Ot(this.target_, n, c);
          (this.values_.set(n, new lt(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          Ze();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Ft(this.target_, n))) return !0;
        if (Ye(this)) {
          var i = Je(this, { object: this.proxy_ || this.target_, name: n, type: xd });
          if (!i) return null;
        }
        try {
          var o;
          Xe();
          var s = st(this),
            u = !1,
            c = this.values_.get(n),
            l = void 0;
          if (!c && (s || u)) {
            var d;
            l = (d = ci(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c && (this.values_.delete(n), c instanceof lr && (l = c.value_), Cp(c)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            s || u)
          ) {
            var f = {
              type: xd,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            s && ut(this, f);
          }
        } finally {
          Ze();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return xa(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ea(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var i,
          o = st(this),
          s = !1;
        if (o || s) {
          var u =
            o || s
              ? {
                  type: Xt,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: a,
                }
              : null;
          o && ut(this, u);
        }
        ((i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), ji(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function Zr(e, t) {
  var r;
  if (Ft(e, $)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new Bp(e, new Map(), String(n), GO(t));
  return (Ai(e, $, a), e);
}
var Bk = br("ObservableObjectAdministration", Bp);
function Cd(e) {
  return (
    Ed[e] ||
    (Ed[e] = {
      get: function () {
        return this[$].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[$].setObservablePropValue_(e, r);
      },
    })
  );
}
function Bi(e) {
  return Pi(e) ? Bk(e[$]) : !1;
}
function Rd(e, t, r) {
  var n;
  (n = e.target_[_t]) == null || delete n[r];
}
var zk = qp(0),
  qk = (function () {
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
  zo = 0,
  zp = function () {};
function Uk(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
Uk(zp, Array.prototype);
var Zs = (function (e) {
  function t(n, a, i, o) {
    var s;
    return (
      i === void 0 && (i = "ObservableArray"),
      o === void 0 && (o = !1),
      (s = e.call(this) || this),
      mr(function () {
        var u = new Xs(i, a, o, !0);
        ((u.proxy_ = s),
          sp(s, $, u),
          n && n.length && s.spliceWithArray(0, 0, n),
          qk && Object.defineProperty(s, "0", zk));
      }),
      s
    );
  }
  lp(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[$].atom_.reportObserved();
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        i.map(function (s) {
          return Fi(s) ? s.slice() : s;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return Qs({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    Xr(t, [
      {
        key: "length",
        get: function () {
          return this[$].getArrayLength_();
        },
        set: function (a) {
          this[$].setArrayLength_(a);
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
})(zp);
Object.entries(hi).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Ai(Zs.prototype, t, r);
});
function qp(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[$].get_(e);
    },
    set: function (r) {
      this[$].set_(e, r);
    },
  };
}
function Vk(e) {
  Ot(Zs.prototype, "" + e, qp(e));
}
function Up(e) {
  if (e > zo) {
    for (var t = zo; t < e + 100; t++) Vk(t);
    zo = e;
  }
}
Up(1e3);
function Gk(e, t, r) {
  return new Zs(e, t, r);
}
function bi(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Fi(e)) return (t !== void 0 && H(23), e[$].atom_);
    if (yt(e)) return e.atom_;
    if (_r(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || H(25, t, ws(e)), r);
    }
    if (Bi(e)) {
      if (!t) return H(26);
      var n = e[$].values_.get(t);
      return (n || H(27, t, ws(e)), n);
    }
    if (Ks(e) || $i(e) || pi(e)) return e;
  } else if (ct(e) && pi(e[$])) return e[$];
  H(28);
}
function Hk(e, t) {
  if ((e || H(29), Ks(e) || $i(e) || pi(e) || _r(e) || yt(e))) return e;
  if (e[$]) return e[$];
  H(24, e);
}
function ws(e, t) {
  var r;
  if (t !== void 0) r = bi(e, t);
  else {
    if (Wr(e)) return e.name;
    Bi(e) || _r(e) || yt(e) ? (r = Hk(e)) : (r = bi(e));
  }
  return r.name_;
}
function mr(e) {
  var t = yr(),
    r = Mi(!0);
  Xe();
  try {
    return e();
  } finally {
    (Ze(), Li(r), Bt(t));
  }
}
var Pd = Ri.toString;
function Vp(e, t, r) {
  return (r === void 0 && (r = -1), Os(e, t, r));
}
function Os(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object") return !1;
  var o = Pd.call(e);
  if (o !== Pd.call(t)) return !1;
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
  ((e = Ad(e)), (t = Ad(t)));
  var s = o === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var u = e.constructor,
      c = t.constructor;
    if (
      u !== c &&
      !(ct(u) && u instanceof u && ct(c) && c instanceof c) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (r === 0) return !1;
  (r < 0 && (r = -1), (n = n || []), (a = a || []));
  for (var l = n.length; l--; ) if (n[l] === e) return a[l] === t;
  if ((n.push(e), a.push(t), s)) {
    if (((l = e.length), l !== t.length)) return !1;
    for (; l--; ) if (!Os(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var p = 0; p < f; p++) {
      var h = d[p];
      if (!(Ft(t, h) && Os(e[h], t[h], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function Ad(e) {
  return Fi(e) ? e.slice() : Jr(e) || _r(e) || Lt(e) || yt(e) ? Array.from(e.entries()) : e;
}
var jd,
  Wk = ((jd = Ci().Iterator) == null ? void 0 : jd.prototype) || {};
function Qs(e) {
  return ((e[Symbol.iterator] = Kk), Object.assign(Object.create(Wk), e));
}
function Kk() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Ci();
  typeof t[e] > "u" && H("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: lk, extras: { getDebugName: ws }, $mobx: $ });
if (!y.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Ni) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Yk(e) {
  e();
}
function Jk(e) {
  (e || (e = Yk), Sk({ reactionScheduler: e }));
}
function Xk(e) {
  return xk(e);
}
var Zk = 1e4,
  Qk = 1e4,
  eS = (function () {
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
            (n === void 0 && (n = Zk), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
            var a = Date.now();
            (r.registrations.forEach(function (i, o) {
              a - i.registeredAt >= n && (r.finalize(i.value), r.registrations.delete(o));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, Qk));
        },
      }),
      e
    );
  })(),
  tS = typeof FinalizationRegistry < "u" ? FinalizationRegistry : eS,
  ya = new tS(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  qo = { exports: {} },
  Uo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Id;
function rS() {
  if (Id) return Uo;
  Id = 1;
  var e = dt();
  function t(d, f) {
    return (d === f && (d !== 0 || 1 / d === 1 / f)) || (d !== d && f !== f);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    a = e.useEffect,
    i = e.useLayoutEffect,
    o = e.useDebugValue;
  function s(d, f) {
    var p = f(),
      h = n({ inst: { value: p, getSnapshot: f } }),
      v = h[0].inst,
      g = h[1];
    return (
      i(
        function () {
          ((v.value = p), (v.getSnapshot = f), u(v) && g({ inst: v }));
        },
        [d, p, f],
      ),
      a(
        function () {
          return (
            u(v) && g({ inst: v }),
            d(function () {
              u(v) && g({ inst: v });
            })
          );
        },
        [d],
      ),
      o(p),
      p
    );
  }
  function u(d) {
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
      : s;
  return (
    (Uo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    Uo
  );
}
var Dd;
function nS() {
  return (Dd || ((Dd = 1), (qo.exports = rS())), qo.exports);
}
var aS = nS();
function Td(e) {
  e.reaction = new xt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function iS(e, t) {
  t === void 0 && (t = "observed");
  var r = k.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (s) {
        return (
          ya.unregister(n),
          (n.onStoreChange = s),
          n.reaction || (Td(n), (n.stateVersion = Symbol())),
          function () {
            var u;
            ((n.onStoreChange = null),
              (u = n.reaction) === null || u === void 0 || u.dispose(),
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
  (a.reaction || (Td(a), ya.register(r, a, a)),
    k.useDebugValue(a.reaction, Xk),
    aS.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
  var i, o;
  if (
    (a.reaction.track(function () {
      try {
        i = e();
      } catch (s) {
        o = s;
      }
    }),
    o)
  )
    throw o;
  return i;
}
var Vo,
  Go,
  Gp = typeof Symbol == "function" && Symbol.for,
  oS =
    (Go =
      (Vo = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Vo === void 0
        ? void 0
        : Vo.configurable) !== null && Go !== void 0
      ? Go
      : !1,
  Md = Gp
    ? Symbol.for("react.forward_ref")
    : typeof y.forwardRef == "function" &&
      y.forwardRef(function (e) {
        return null;
      }).$$typeof,
  Ld = Gp
    ? Symbol.for("react.memo")
    : typeof y.memo == "function" &&
      y.memo(function (e) {
        return null;
      }).$$typeof;
function sS(e, t) {
  var r;
  if (Ld && e.$$typeof === Ld)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    i = e.displayName || e.name;
  if (Md && e.$$typeof === Md && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (s, u) {
    return iS(function () {
      return a(s, u);
    }, i);
  };
  return (
    (o.displayName = e.displayName),
    oS && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = y.forwardRef(o)),
    (o = y.memo(o)),
    cS(e, o),
    o
  );
}
var uS = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function cS(e, t) {
  Object.keys(e).forEach(function (r) {
    uS[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Ho;
Jk(yi.unstable_batchedUpdates);
Ho = ya.finalizeAllImmediately;
function lS(e, t) {
  if ($d(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !$d(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function $d(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Nd = Symbol("patchMixins"),
  Hp = Symbol("patchedDefinition");
function dS(e, t) {
  var r = (e[Nd] = e[Nd] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function Fd(e, t) {
  for (var r = this, n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  t.locks++;
  try {
    var o;
    return (e != null && (o = e.apply(this, a)), o);
  } finally {
    (t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (s) {
          s.apply(r, a);
        }));
  }
}
function Bd(e, t) {
  var r = function () {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
    Fd.call.apply(Fd, [this, e, t].concat(i));
  };
  return r;
}
function fS(e, t, r) {
  var n = dS(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[Hp])) {
    var i = e[t],
      o = Wp(e, t, a ? a.enumerable : void 0, n, i);
    Object.defineProperty(e, t, o);
  }
}
function Wp(e, t, r, n, a) {
  var i,
    o = Bd(a, n);
  return (
    (i = {}),
    (i[Hp] = !0),
    (i.get = function () {
      return o;
    }),
    (i.set = function (u) {
      if (this === e) o = Bd(u, n);
      else {
        var c = Wp(this, t, r, n, u);
        Object.defineProperty(this, t, c);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = r),
    i
  );
}
var zd = Symbol("ObserverAdministration"),
  qd = Symbol("isMobXReactObserver");
function ks(e) {
  var t;
  return (t = e[zd]) != null
    ? t
    : (e[zd] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: Ss(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function vS(e) {
  var t = e.prototype;
  if (e[qd]) {
    var r = Ss(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[qd] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== y.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Ud;
    else if (t.shouldComponentUpdate !== Ud)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = Ss(e);
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
        value: pS.call(this, n),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        s = ks(this);
      return (
        (s.mounted = !0),
        ya.unregister(this),
        (s.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!s.reaction || s.reactionInvalidatedBeforeMount) && s.forceUpdate(),
        i?.apply(this, arguments)
      );
    }),
    fS(t, "componentWillUnmount", function () {
      var o,
        s = ks(this);
      ((o = s.reaction) == null || o.dispose(),
        (s.reaction = null),
        (s.forceUpdate = null),
        (s.mounted = !1),
        (s.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function Ss(e) {
  return e.displayName || e.name || "<component>";
}
function pS(e) {
  var t = e.bind(this),
    r = ks(this);
  function n() {
    r.reaction || ((r.reaction = hS(r)), r.mounted || ya.register(this, r, this));
    var a = void 0,
      i = void 0;
    if (
      (r.reaction.track(function () {
        try {
          i = tk(!1, t);
        } catch (o) {
          a = o;
        }
      }),
      a)
    )
      throw a;
    return i;
  }
  return n;
}
function hS(e) {
  return new xt(e.name + ".render()", function () {
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
function Ud(e, t) {
  return this.state !== t ? !0 : !lS(this.props, e);
}
function zi(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(y.Component, e) ||
    Object.prototype.isPrototypeOf.call(y.PureComponent, e)
      ? vS(e)
      : sS(e)
  );
}
function Es() {
  return (
    (Es = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Es.apply(null, arguments)
  );
}
function gS(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var bS = ["children"],
  Vd = k.createContext({});
function Kp(e) {
  var t = e.children,
    r = gS(e, bS),
    n = k.useContext(Vd),
    a = k.useRef(Es({}, n, r)),
    i = a.current;
  return k.createElement(Vd.Provider, { value: i }, t);
}
Kp.displayName = "MobXProvider";
k.version.split(".")[0];
if (!y.Component) throw new Error("mobx-react requires React to be available");
if (!se) throw new Error("mobx-react requires mobx to be available");
var yS = Object.defineProperty,
  _S = Object.getOwnPropertyDescriptor,
  Ut = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? _S(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && yS(t, r, a), a);
  };
let Rt = class {
  constructor() {
    ((this.isLoading = !0), Ni(this));
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
Ut([se], Rt.prototype, "isLoading", 2);
Ut([se], Rt.prototype, "users", 2);
Ut([se], Rt.prototype, "duplicates", 2);
Ut([se], Rt.prototype, "sort", 2);
Ut([ke.bound], Rt.prototype, "saveUsers", 1);
Ut([ke.bound], Rt.prototype, "saveSort", 1);
Ut([ke.bound], Rt.prototype, "saveDuplicates", 1);
Ut([ke], Rt.prototype, "loading", 1);
Ut([ke], Rt.prototype, "stopLoading", 1);
const mS = new Rt();
var wS = Object.defineProperty,
  OS = Object.getOwnPropertyDescriptor,
  Ca = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? OS(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && wS(t, r, a), a);
  };
class Qr {
  constructor() {
    ((this.isLoading = !0), Ni(this));
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
Ca([se], Qr.prototype, "isLoading", 2);
Ca([se], Qr.prototype, "metadata", 2);
Ca([ke.bound], Qr.prototype, "saveMetadata", 1);
Ca([ke], Qr.prototype, "loading", 1);
Ca([ke], Qr.prototype, "stopLoading", 1);
const kS = new Qr();
var SS = Object.defineProperty,
  ES = Object.getOwnPropertyDescriptor,
  Yp = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? ES(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && SS(t, r, a), a);
  };
class eu {
  constructor() {
    ((this.state = "ROOT"), Ni(this));
  }
  saveState(t) {
    this.state = t;
  }
}
Yp([se], eu.prototype, "state", 2);
Yp([ke.bound], eu.prototype, "saveState", 1);
const xS = new eu();
class CS {
  constructor() {
    ((this.usersStore = mS), (this.usersMetadata = kS), (this.stateStore = xS));
  }
}
const Jp = new CS(),
  RS = y.createContext(Jp),
  qi = () => y.useContext(RS),
  PS = zi(() => {
    const { usersStore: e, usersMetadata: t, stateStore: r } = qi(),
      n = tp(!0, !0, !0, t.metadata.user.properties),
      a = e.users;
    return !a || a.length === 0
      ? L.jsx("div", { children: "User Table is EMPTY" })
      : L.jsx("div", {
          children: L.jsxs("div", {
            children: [
              L.jsx(Ws, {
                head: n,
                onSort: async (i) => {
                  let o = { name: i.key, sortType: i.sortOrder };
                  e.loading();
                  try {
                    const s = await Nt.invoke("fetch", { sortType: o });
                    (e.saveUsers(s), e.saveSort(o));
                  } finally {
                    e.stopLoading();
                  }
                },
                rows: a.map((i, o) => {
                  const s = Object.keys(i.fields).map((u) => ({ key: u, content: i.fields[u] }));
                  return (
                    s.push({
                      key: "delete",
                      content: L.jsx("div", {
                        children: L.jsx("button", {
                          onClick: async () => {
                            try {
                              (e.loading(), await Nt.invoke("delete", { id: i.id }));
                              const u = await Nt.invoke("fetch", { sortType: e.sort });
                              e.saveUsers(u);
                            } finally {
                              e.stopLoading();
                            }
                          },
                          children: "delete",
                        }),
                      }),
                    }),
                    { key: `row-${o}-${i.id}`, cells: s }
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
                    const i = await Nt.invoke("duplicate");
                    (e.saveDuplicates(i), r.saveState("DUPLICATE"));
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
  AS = zi(() => {
    const { usersMetadata: e, usersStore: t, stateStore: r } = qi(),
      [n, a] = y.useState({}),
      i = (s) => {
        const { name: u, value: c, type: l } = s.target;
        a((d) => ({ ...d, [u]: l === "number" ? Number(c) : c }));
      },
      o = async (s) => {
        (s.preventDefault(),
          console.log("Form Data:", n),
          await Nt.invoke("create", { data: n }),
          t.loading());
        try {
          (t.saveUsers(await Nt.invoke("fetch", { sortType: t.sort })), r.saveState("ROOT"));
        } finally {
          t.stopLoading();
        }
      };
    return L.jsx("div", {
      children: L.jsxs("form", {
        onSubmit: o,
        children: [
          Object.keys(e.metadata.user.properties).map((s) => {
            let u = e.metadata.user.properties[s];
            return L.jsxs(
              "div",
              {
                children: [
                  L.jsx("label", { htmlFor: s, children: s }),
                  L.jsx("br", {}),
                  L.jsx("input", {
                    type: u.type === "integer" || u.type === "smallint" ? "number" : "text",
                    id: s,
                    name: s,
                    onChange: i,
                  }),
                  L.jsx("br", {}),
                ],
              },
              s,
            );
          }),
          L.jsx("input", { type: "submit", value: "Submit" }),
        ],
      }),
    });
  }),
  jS = zi(() => {
    const { usersStore: e, usersMetadata: t } = qi(),
      r = tp(!0, !1, !1, t.metadata.duplicate.properties),
      n = e.duplicates;
    return !n || n.length === 0
      ? L.jsx("div", { children: "Duplicate Table is EMPTY" })
      : L.jsx("div", {
          children: L.jsxs("div", {
            children: [
              L.jsx(Ws, {
                head: r,
                rows: n.map((a, i) => {
                  const o = Object.keys(a.fields).map((s) => ({ key: s, content: a.fields[s] }));
                  return { key: `row-${i}-1`, cells: o };
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
function IS() {
  const { usersStore: e, usersMetadata: t, stateStore: r } = qi();
  if (
    (y.useEffect(() => {
      (async () => {
        try {
          t.saveMetadata(await Nt.invoke("fetchMetadata"));
          const a = await Nt.invoke("fetch", { type: "USER", sortType: e.sort });
          e.saveUsers(a);
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
            L.jsx(PS, {}),
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
            L.jsx(jS, {}),
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
            L.jsx(AS, {}),
          ],
        }),
      });
    default:
      return L.jsxs("div", { children: ["ERROR: unsupprted state $", r.state] });
  }
}
const DS = zi(IS),
  TS = document.getElementById("root"),
  MS = th.createRoot(TS),
  Gd = () => {
    MS.render(L.jsx(Kp, { ...Jp, children: L.jsx(DS, {}) }));
  };
Nt.view.theme
  .enable()
  .then(() => {
    Gd();
  })
  .catch((e) => {
    (console.error(e.message), Gd());
  });
export {
  k as R,
  Lb as T,
  ze as _,
  fe as a,
  Qo as b,
  de as c,
  Be as d,
  Y as e,
  K as f,
  x as g,
  ae as h,
  Oi as i,
  Te as j,
  te as k,
  Ky as l,
  Mt as m,
  Ct as n,
  C as o,
  Tb as p,
  Xh as q,
  y as r,
  jb as s,
  b0 as w,
};
