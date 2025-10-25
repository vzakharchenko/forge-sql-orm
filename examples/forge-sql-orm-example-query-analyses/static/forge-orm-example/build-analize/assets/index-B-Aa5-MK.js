const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-ClpLjNuF.js",
      "./react-dom-vendor-DTSHKYJW.js",
      "./client-core-vendor-DoDoahUE.js",
      "./lodash-vendor-B4UjymJO.js",
      "./body-C3aXNd8H.css",
    ]),
) => i.map((i) => d[i]);
import { r as pt, a as Ai, c as Ah } from "./react-dom-vendor-DTSHKYJW.js";
import { g as zs, r as er, a as rr, b as Rt, s as He } from "./client-core-vendor-DoDoahUE.js";
import { r as jh } from "./lodash-vendor-B4UjymJO.js";
function Ih(e, t) {
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
var oo = { exports: {} },
  un = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ou;
function Dh() {
  if (Ou) return un;
  Ou = 1;
  var e = pt(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, s, c) {
    var l,
      d = {},
      f = null,
      h = null;
    (c !== void 0 && (f = "" + c),
      s.key !== void 0 && (f = "" + s.key),
      s.ref !== void 0 && (h = s.ref));
    for (l in s) n.call(s, l) && !i.hasOwnProperty(l) && (d[l] = s[l]);
    if (u && u.defaultProps) for (l in ((s = u.defaultProps), s)) d[l] === void 0 && (d[l] = s[l]);
    return { $$typeof: t, type: u, key: f, ref: h, props: d, _owner: a.current };
  }
  return ((un.Fragment = r), (un.jsx = o), (un.jsxs = o), un);
}
var Su;
function Th() {
  return (Su || ((Su = 1), (oo.exports = Dh())), oo.exports);
}
var E = Th(),
  so = {},
  ss = function (e, t) {
    return (
      (ss =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      ss(e, t)
    );
  };
function Of(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ss(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var di = function () {
  return (
    (di =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }),
    di.apply(this, arguments)
  );
};
function Sf(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function Ef(e, t, r, n) {
  var a = arguments.length,
    i = a < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, t, r, n);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (o = e[u]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
  return (a > 3 && i && Object.defineProperty(t, r, i), i);
}
function xf(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function Cf(e, t, r, n, a, i) {
  function o(b) {
    if (b !== void 0 && typeof b != "function") throw new TypeError("Function expected");
    return b;
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
    v.addInitializer = function (b) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(o(b || null));
    };
    var g = (0, r[h])(u === "accessor" ? { get: l.get, set: l.set } : l[s], v);
    if (u === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = o(g.get)) && (l.get = d),
        (d = o(g.set)) && (l.set = d),
        (d = o(g.init)) && a.unshift(d));
    } else (d = o(g)) && (u === "field" ? a.unshift(d) : (l[s] = d));
  }
  (c && Object.defineProperty(c, n.name, l), (f = !0));
}
function Rf(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function Pf(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Af(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function jf(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function If(e, t, r, n) {
  function a(i) {
    return i instanceof r
      ? i
      : new r(function (o) {
          o(i);
        });
  }
  return new (r || (r = Promise))(function (i, o) {
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
      l.done ? i(l.value) : a(l.value).then(u, s);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function Df(e, t) {
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
var ji = Object.create
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
function Tf(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && ji(t, e, r);
}
function fi(e) {
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
    a,
    i = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) i.push(a.value);
  } catch (u) {
    o = { error: u };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}
function Mf() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Bs(arguments[t]));
  return e;
}
function Lf() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var i = arguments[t], o = 0, u = i.length; o < u; o++, a++) n[a] = i[o];
  return n;
}
function Ff(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, i; n < a; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function Wr(e) {
  return this instanceof Wr ? ((this.v = e), this) : new Wr(e);
}
function Nf(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []),
    a,
    i = [];
  return (
    (a = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    u("next"),
    u("throw"),
    u("return", o),
    (a[Symbol.asyncIterator] = function () {
      return this;
    }),
    a
  );
  function o(h) {
    return function (v) {
      return Promise.resolve(v).then(h, d);
    };
  }
  function u(h, v) {
    n[h] &&
      ((a[h] = function (p) {
        return new Promise(function (g, b) {
          i.push([h, p, g, b]) > 1 || s(h, p);
        });
      }),
      v && (a[h] = v(a[h])));
  }
  function s(h, v) {
    try {
      c(n[h](v));
    } catch (p) {
      f(i[0][3], p);
    }
  }
  function c(h) {
    h.value instanceof Wr ? Promise.resolve(h.value.v).then(l, d) : f(i[0][2], h);
  }
  function l(h) {
    s("next", h);
  }
  function d(h) {
    s("throw", h);
  }
  function f(h, v) {
    (h(v), i.shift(), i.length && s(i[0][0], i[0][1]));
  }
}
function $f(e) {
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
          return (r = !r) ? { value: Wr(e[a](o)), done: !1 } : i ? i(o) : o;
        }
      : i;
  }
}
function zf(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof fi == "function" ? fi(e) : e[Symbol.iterator]()),
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
        return new Promise(function (u, s) {
          ((o = e[i](o)), a(u, s, o.done, o.value));
        });
      };
  }
  function a(i, o, u, s) {
    Promise.resolve(s).then(function (c) {
      i({ value: c, done: u });
    }, o);
  }
}
function Bf(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var Mh = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  us = function (e) {
    return (
      (us =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      us(e)
    );
  };
function qf(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = us(e), n = 0; n < r.length; n++) r[n] !== "default" && ji(t, e, r[n]);
  return (Mh(t, e), t);
}
function Uf(e) {
  return e && e.__esModule ? e : { default: e };
}
function Vf(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Gf(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function Hf(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Wf(e, t, r) {
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
var Lh =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Kf(e) {
  function t(i) {
    ((e.error = e.hasError ? new Lh(i, e.error, "An error was suppressed during disposal.") : i),
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
function Yf(e, t) {
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
const Fh = {
    __extends: Of,
    __assign: di,
    __rest: Sf,
    __decorate: Ef,
    __param: xf,
    __esDecorate: Cf,
    __runInitializers: Rf,
    __propKey: Pf,
    __setFunctionName: Af,
    __metadata: jf,
    __awaiter: If,
    __generator: Df,
    __createBinding: ji,
    __exportStar: Tf,
    __values: fi,
    __read: Bs,
    __spread: Mf,
    __spreadArrays: Lf,
    __spreadArray: Ff,
    __await: Wr,
    __asyncGenerator: Nf,
    __asyncDelegator: $f,
    __asyncValues: zf,
    __makeTemplateObject: Bf,
    __importStar: qf,
    __importDefault: Uf,
    __classPrivateFieldGet: Vf,
    __classPrivateFieldSet: Gf,
    __classPrivateFieldIn: Hf,
    __addDisposableResource: Wf,
    __disposeResources: Kf,
    __rewriteRelativeImportExtension: Yf,
  },
  Nh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Wf,
        get __assign() {
          return di;
        },
        __asyncDelegator: $f,
        __asyncGenerator: Nf,
        __asyncValues: zf,
        __await: Wr,
        __awaiter: If,
        __classPrivateFieldGet: Vf,
        __classPrivateFieldIn: Hf,
        __classPrivateFieldSet: Gf,
        __createBinding: ji,
        __decorate: Ef,
        __disposeResources: Kf,
        __esDecorate: Cf,
        __exportStar: Tf,
        __extends: Of,
        __generator: Df,
        __importDefault: Uf,
        __importStar: qf,
        __makeTemplateObject: Bf,
        __metadata: jf,
        __param: xf,
        __propKey: Pf,
        __read: Bs,
        __rest: Sf,
        __rewriteRelativeImportExtension: Yf,
        __runInitializers: Rf,
        __setFunctionName: Af,
        __spread: Mf,
        __spreadArray: Ff,
        __spreadArrays: Lf,
        __values: fi,
        default: Fh,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  jt = zs(Nh);
var cn = {},
  Eu;
function $h() {
  return (
    Eu ||
      ((Eu = 1),
      Object.defineProperty(cn, "__esModule", { value: !0 }),
      (cn.NavigationTarget = void 0),
      (cn.NavigationTarget = {
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
    cn
  );
}
var uo = {},
  co = {},
  ln = {},
  dn = {},
  xu;
function at() {
  if (xu) return dn;
  ((xu = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((dn.BridgeAPIError = e), dn);
}
var Cu;
function ye() {
  if (Cu) return ln;
  ((Cu = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.getCallBridge = void 0));
  const e = at();
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
  Ru;
function qs() {
  if (Ru) return fn;
  ((Ru = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.withRateLimiter = void 0));
  const e = at(),
    t = (r, n, a, i) => {
      let o = Date.now(),
        u = 0;
      return async (...s) => {
        const c = Date.now();
        if ((c - o > a && ((o = c), (u = 0)), u >= n))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((u = u + 1), r(...s));
      };
    };
  return ((fn.withRateLimiter = t), fn);
}
var Pu;
function zh() {
  return (
    Pu ||
      ((Pu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = ye(),
          r = at(),
          n = qs(),
          a = (0, t.getCallBridge)(),
          i = (s) => {
            if (s && Object.values(s).some((c) => typeof c == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          o = (s, c) => {
            if (typeof s != "string") throw new r.BridgeAPIError("functionKey must be a string!");
            return (i(c), a("invoke", { functionKey: s, payload: c }));
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
      })(co)),
    co
  );
}
var Au;
function Bh() {
  return (
    Au ||
      ((Au = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), jt.__exportStar(zh(), e));
      })(uo)),
    uo
  );
}
var lo = {},
  vn = {},
  fo = {},
  ju;
function Jf() {
  return (
    ju ||
      ((ju = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = ye(),
          r = at(),
          n = qs(),
          a = 500,
          i = 25,
          o = 1e3 * i;
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
              { success: p, payload: g, error: b } = v ?? {},
              m = { ...(p ? g : b) };
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
      })(fo)),
    fo
  );
}
var Iu;
function qh() {
  if (Iu) return vn;
  ((Iu = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.invokeRemote = void 0));
  const e = Jf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((vn.invokeRemote = t), vn);
}
var pn = {},
  Du;
function Uh() {
  if (Du) return pn;
  ((Du = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.invokeService = void 0));
  const e = Jf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((pn.invokeService = t), pn);
}
var Tu;
function Vh() {
  return (
    Tu ||
      ((Tu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = jt;
        (t.__exportStar(qh(), e), t.__exportStar(Uh(), e));
      })(lo)),
    lo
  );
}
var vo = {},
  hn = {},
  gn = {},
  Mu;
function Gh() {
  if (Mu) return gn;
  ((Mu = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.submit = void 0));
  const e = ye(),
    t = at(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((gn.submit = n), gn);
}
var bn = {},
  Lu;
function Hh() {
  if (Lu) return bn;
  ((Lu = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.close = void 0));
  const e = ye(),
    t = at(),
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
  Fu;
function Wh() {
  if (Fu) return _n;
  ((Fu = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.open = void 0));
  const e = ye(),
    t = at(),
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
var yn = {},
  Nu;
function Kh() {
  if (Nu) return yn;
  ((Nu = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.refresh = void 0));
  const e = ye(),
    t = at(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((yn.refresh = n), yn);
}
var mn = {},
  $u;
function Yh() {
  if ($u) return mn;
  (($u = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.createHistory = void 0));
  const t = (0, ye().getCallBridge)(),
    r = async () => {
      const n = await t("createHistory");
      return (
        n.listen((a) => {
          n.location = a;
        }),
        n
      );
    };
  return ((mn.createHistory = r), mn);
}
var wn = {},
  po = {},
  Lt = {},
  zu;
function Xf() {
  return (
    zu ||
      ((zu = 1),
      Object.defineProperty(Lt, "__esModule", { value: !0 }),
      (Lt.FORGE_SUPPORTED_LOCALE_CODES =
        Lt.I18N_BUNDLE_FOLDER_NAME =
        Lt.I18N_INFO_FILE_NAME =
          void 0),
      (Lt.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (Lt.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (Lt.FORGE_SUPPORTED_LOCALE_CODES = [
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
    Lt
  );
}
var ir = {},
  Bu;
function Jh() {
  if (Bu) return ir;
  ((Bu = 1),
    Object.defineProperty(ir, "__esModule", { value: !0 }),
    (ir.TranslationsGetter = ir.TranslationGetterError = void 0));
  const e = (n, a) => {
    n.includes(a) || n.push(a);
  };
  class t extends Error {
    constructor(a) {
      (super(a), (this.name = "TranslationGetterError"));
    }
  }
  ir.TranslationGetterError = t;
  class r {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(a) {
      this.resourcesAccessor = a;
    }
    async getTranslations(a, i = { fallback: !0 }) {
      const o = await this.getI18nInfoConfig(),
        { fallback: u } = i;
      if (!u) {
        let s;
        return (
          o.locales.includes(a) && (s = await this.getTranslationResource(a)),
          { translations: s ?? null, locale: a }
        );
      }
      for (const s of this.getLocaleLookupOrder(a, o)) {
        const c = await this.getTranslationResource(s);
        if (c) return { translations: c, locale: s };
      }
      return { translations: null, locale: a };
    }
    async getTranslationsByLocaleLookupOrder(a) {
      const i = await this.getI18nInfoConfig(),
        o = this.getLocaleLookupOrder(a, i);
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
      const { locales: o, fallback: u } = i,
        s = [a],
        c = u[a];
      return (
        c && Array.isArray(c) && c.length > 0 && s.push(...c),
        e(s, i.fallback.default),
        s.filter((l) => o.includes(l))
      );
    }
  }
  return ((ir.TranslationsGetter = r), ir);
}
var kn = {},
  ho = {},
  qu;
function Qf() {
  return (
    qu ||
      ((qu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = jt.__importDefault(jh()),
          n = (i, o, u) => {
            const s = i[u];
            return s ? (0, e.getTranslationValueFromContent)(s, o) : null;
          };
        e.getTranslationValue = n;
        const a = (i, o) => {
          let u = i[o];
          if (!u) {
            const s = o.split(".");
            s.length > 1 && (u = (0, r.default)(i, s, null));
          }
          return typeof u == "string" ? u : null;
        };
        e.getTranslationValueFromContent = a;
      })(ho)),
    ho
  );
}
var Uu;
function Xh() {
  if (Uu) return kn;
  ((Uu = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.Translator = void 0));
  const e = Qf();
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
  return ((kn.Translator = t), kn);
}
var On = {},
  Vu;
function Qh() {
  if (Vu) return On;
  ((Vu = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.ensureLocale = void 0));
  const e = Xf(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    r = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    n = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, o) => {
        const [u] = o.split("-");
        return (i[u] || (i[u] = o), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    a = (i) => {
      const o = i.replace("_", "-");
      return t.has(o) ? o : (n[o] ?? r[o] ?? null);
    };
  return ((On.ensureLocale = a), On);
}
var go = {},
  Gu;
function Zh() {
  return (
    Gu ||
      ((Gu = 1),
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
              d = (f, h) =>
                !t(f) || l.has(f)
                  ? []
                  : (l.add(f),
                    Object.entries(f).flatMap(([v, p]) => {
                      const g = [...h, v];
                      return r(p)
                        ? [{ propertyPath: g, key: p.i18n }]
                        : Array.isArray(p)
                          ? p.flatMap((b) => d(b, g))
                          : d(p, g);
                    }));
            return d(c, []);
          },
          o = (c) =>
            Object.entries(c).flatMap(([l, d]) =>
              !n(l) && !a(l) && d && Array.isArray(d) && d.length > 0 ? d.map((f) => [f, l]) : [],
            );
        e.getI18nSupportedModuleEntries = o;
        const u = (c) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(c)) {
            const f = i(d[0]);
            for (const { key: h } of f) l.add(h);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = u;
        const s = (c) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(c)) {
            const f = i(d[0]);
            for (const h of f) l.push({ moduleName: d[1], ...h });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = s;
      })(go)),
    go
  );
}
var bo = {},
  Hu;
function eg() {
  return (Hu || ((Hu = 1), Object.defineProperty(bo, "__esModule", { value: !0 })), bo);
}
var Wu;
function Zf() {
  return (
    Wu ||
      ((Wu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = jt;
        (t.__exportStar(Xf(), e),
          t.__exportStar(Jh(), e),
          t.__exportStar(Xh(), e),
          t.__exportStar(Qh(), e));
        var r = Qf();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Zh();
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
          t.__exportStar(eg(), e));
      })(po)),
    po
  );
}
var Ku;
function tg() {
  if (Ku) return wn;
  ((Ku = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.getContext = void 0));
  const e = ye(),
    t = Zf(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const i = await r("getContext"),
        o = i?.locale;
      return (o && (i.locale = (a = (0, t.ensureLocale)(o)) !== null && a !== void 0 ? a : o), i);
    };
  return ((wn.getContext = n), wn);
}
var Sn = {},
  Yu;
function rg() {
  if (Yu) return Sn;
  ((Yu = 1),
    Object.defineProperty(Sn, "__esModule", { value: !0 }),
    (Sn.changeWindowTitle = void 0));
  const e = ye(),
    t = at(),
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
  Ju;
function ng() {
  if (Ju) return En;
  ((Ju = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.theme = void 0));
  const t = (0, ye().getCallBridge)();
  return ((En.theme = { enable: () => t("enableTheming") }), En);
}
var xn = {},
  Cn = {},
  _o = {},
  or = {},
  Xu;
function ev() {
  if (Xu) return or;
  ((Xu = 1),
    Object.defineProperty(or, "__esModule", { value: !0 }),
    (or.blobToBase64 = or.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      i = atob(a),
      o = new Array(i.length);
    for (let s = 0; s < i.length; s++) o[s] = i.charCodeAt(s);
    const u = new Uint8Array(o);
    return new Blob([u], { type: n });
  };
  or.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, a) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        n(i.result);
      }),
        (i.onerror = a),
        i.readAsDataURL(r));
    });
  return ((or.blobToBase64 = t), or);
}
var Qu;
function ag() {
  return (
    Qu ||
      ((Qu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = ev(),
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
      })(_o)),
    _o
  );
}
var Zu;
function tv() {
  if (Zu) return Cn;
  ((Zu = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.events = void 0));
  const e = ye(),
    t = ag(),
    r = (0, e.getCallBridge)(),
    n = async (i, o) => {
      let u = o;
      return (
        (0, t.containsBlobs)(o) && (u = await (0, t.serialiseBlobsInPayload)(o)),
        r("emit", { event: i, payload: u })
      );
    },
    a = (i, o) =>
      r("on", {
        event: i,
        callback: (s) => {
          let c = s;
          return (
            (0, t.containsSerialisedBlobs)(s) && (c = (0, t.deserialiseBlobsInPayload)(s)),
            o(c)
          );
        },
      });
  return ((Cn.events = { emit: n, on: a }), Cn);
}
var ec;
function ig() {
  if (ec) return xn;
  ((ec = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.emitReadyEvent = void 0));
  const e = tv(),
    t = rv(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return ((xn.emitReadyEvent = n), xn);
}
var tc;
function rv() {
  if (tc) return hn;
  ((tc = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.view = void 0));
  const e = Gh(),
    t = Hh(),
    r = Wh(),
    n = Kh(),
    a = Yh(),
    i = tg(),
    o = rg(),
    u = ng(),
    s = ig();
  return (
    (hn.view = {
      submit: e.submit,
      close: t.close,
      open: r.open,
      refresh: n.refresh,
      createHistory: a.createHistory,
      getContext: i.getContext,
      theme: u.theme,
      changeWindowTitle: o.changeWindowTitle,
      emitReadyEvent: s.emitReadyEvent,
    }),
    hn
  );
}
var rc;
function nv() {
  return (
    rc ||
      ((rc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), jt.__exportStar(rv(), e));
      })(vo)),
    vo
  );
}
var yo = {},
  Rn = {},
  nc;
function og() {
  if (nc) return Rn;
  ((nc = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.router = void 0));
  const t = (0, ye().getCallBridge)(),
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
    a = (o) => {
      if (typeof o == "string") return t("navigate", { url: o, type: "new-tab" });
      if (!o?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...o, type: "new-tab" });
    },
    i = async () => t("reload");
  return ((Rn.router = { getUrl: r, navigate: n, open: a, reload: i }), Rn);
}
var ac;
function sg() {
  return (
    ac ||
      ((ac = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), jt.__exportStar(og(), e));
      })(yo)),
    yo
  );
}
var mo = {},
  Pn = {},
  ic;
function ug() {
  if (ic) return Pn;
  ((ic = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.Modal = void 0));
  const e = ye(),
    t = at(),
    r = (0, e.getCallBridge)(),
    n = () => {};
  class a {
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
  return ((Pn.Modal = a), Pn);
}
var oc;
function cg() {
  return (
    oc ||
      ((oc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), jt.__exportStar(ug(), e));
      })(mo)),
    mo
  );
}
var Ft = {},
  An = {},
  sc;
function lg() {
  if (sc) return An;
  ((sc = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.productFetchApi = void 0));
  const e = ev(),
    t = async (i) => {
      const o = {};
      for (const [u, s] of i.entries())
        if (u === "file") {
          const c = s.name,
            l = s.type;
          ((o.file = await (0, e.blobToBase64)(s)), (o.__fileName = c), (o.__fileType = l));
        } else o[u] = s;
      return JSON.stringify(o);
    },
    r = (i) => {
      if (!i) return i;
      if ("signal" in i) {
        const { signal: o, ...u } = i;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          u
        );
      }
      return i;
    },
    n = async (i) => {
      const o = i?.body instanceof FormData,
        u = o ? await t(i?.body) : i?.body,
        s = new Request("", { body: u, method: i?.method, headers: i?.headers }),
        c = Object.fromEntries(s.headers.entries());
      return {
        body: s.method !== "GET" ? await s.text() : null,
        headers: new Headers(c),
        isMultipartFormData: o,
      };
    },
    a = (i) => {
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
            statusText: b,
            status: m,
            isAttachment: w,
          } = await i("fetchProduct", v),
          k = w ? (0, e.base64ToBlob)(p, g["content-type"]) : p;
        return new Response(k || null, { headers: g, status: m, statusText: b });
      };
      return {
        requestConfluence: (u, s) => o("confluence", u, s),
        requestJira: (u, s) => o("jira", u, s),
        requestBitbucket: (u, s) => o("bitbucket", u, s),
      };
    };
  return ((An.productFetchApi = a), An);
}
var uc;
function dg() {
  if (uc) return Ft;
  uc = 1;
  var e;
  (Object.defineProperty(Ft, "__esModule", { value: !0 }),
    (Ft.requestBitbucket = Ft.requestJira = Ft.requestConfluence = void 0));
  const t = ye();
  return (
    (e = (0, lg().productFetchApi)((0, t.getCallBridge)())),
    (Ft.requestConfluence = e.requestConfluence),
    (Ft.requestJira = e.requestJira),
    (Ft.requestBitbucket = e.requestBitbucket),
    Ft
  );
}
var wo = {},
  jn = {},
  cc;
function fg() {
  if (cc) return jn;
  ((cc = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.showFlag = void 0));
  const e = ye(),
    t = at(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var i;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const o = r("showFlag", { ...a, type: (i = a.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await o, r("closeFlag", { id: a.id })) };
    };
  return ((jn.showFlag = n), jn);
}
var lc;
function vg() {
  return (
    lc ||
      ((lc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = fg();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(wo)),
    wo
  );
}
var ko = {},
  dc;
function pg() {
  return (
    dc ||
      ((dc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), jt.__exportStar(tv(), e));
      })(ko)),
    ko
  );
}
var Oo = {},
  In = {},
  fc;
function hg() {
  if (fc) return In;
  ((fc = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.realtime = void 0));
  const t = (0, ye().getCallBridge)(),
    r = (o, u, s) => t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s }),
    n = (o, u, s) => t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s }),
    a = (o, u, s) =>
      t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s, isGlobal: !0 }),
    i = (o, u, s) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s, isGlobal: !0 });
  return ((In.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: i }), In);
}
var So = {},
  vc;
function gg() {
  return (
    vc ||
      ((vc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Jira = void 0),
          (function (t) {
            ((t.Board = "board"), (t.Issue = "issue"), (t.Project = "project"));
          })(e.Jira || (e.Jira = {})));
      })(So)),
    So
  );
}
var pc;
function bg() {
  return (
    pc ||
      ((pc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Jira = e.realtime = void 0));
        var t = hg();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = gg();
        Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return r.Jira;
          },
        });
      })(Oo)),
    Oo
  );
}
var Nt = {},
  hc;
function _g() {
  if (hc) return Nt;
  ((hc = 1),
    Object.defineProperty(Nt, "__esModule", { value: !0 }),
    (Nt.createTranslationFunction = Nt.getTranslations = Nt.resetTranslationsCache = void 0));
  const e = Zf(),
    t = nv(),
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
    a = () => {
      n.reset();
    };
  Nt.resetTranslationsCache = a;
  const i = async (u = null, s = { fallback: !0 }) => {
    let c = u;
    return (c || (c = (await t.view.getContext()).locale), await n.getTranslations(c, s));
  };
  Nt.getTranslations = i;
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
  return ((Nt.createTranslationFunction = o), Nt);
}
var Eo = {},
  Dn = {},
  gc;
function av() {
  if (gc) return Dn;
  ((gc = 1),
    Object.defineProperty(Dn, "__esModule", { value: !0 }),
    (Dn.initFeatureFlags = void 0));
  const e = ye(),
    t = at(),
    r = qs(),
    n = 500,
    a = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    o = (s) => {
      if (!s || !s.user)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(s).some((c) => typeof c == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    u = (s) => (o(s), i("initFeatureFlags", { user: s.user }));
  return (
    (Dn.initFeatureFlags = (0, r.withRateLimiter)(
      u,
      n,
      a,
      "Feature flags initialisation calls are rate limited at 500req/25s",
    )),
    Dn
  );
}
var Tn = {},
  sr = {},
  Cr = {},
  Ua = {},
  bc;
function yg() {
  if (bc) return Ua;
  ((bc = 1), Object.defineProperty(Ua, "__esModule", { value: !0 }));
  const e = er();
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
      const u = e.StableID.get(this._sdkKey);
      if (
        ((i = n.customIDs) === null || i === void 0 ? void 0 : i.stableID) !== u &&
        ((!((o = n.customIDs) === null || o === void 0) && o.stableID) || u)
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
      var a, i;
      const o = this.getCurrentSourceDetails();
      let u = o.reason;
      const s = (a = o.warnings) !== null && a !== void 0 ? a : [];
      (this._source === "Bootstrap" && s.length > 0 && (u = u + s[0]),
        u !== "Uninitialized" &&
          u !== "NoValues" &&
          (u = `${u}:${n ? "Unrecognized" : "Recognized"}`));
      const c =
        this._source === "Bootstrap" && (i = this._bootstrapMetadata) !== null && i !== void 0
          ? i
          : void 0;
      return (c && (o.bootstrapMetadata = c), Object.assign(Object.assign({}, o), { reason: u }));
    }
  }
  return ((Ua.default = t), Ua);
}
var Rr = {},
  Mn = {},
  _c;
function mg() {
  if (_c) return Mn;
  ((_c = 1),
    Object.defineProperty(Mn, "__esModule", { value: !0 }),
    (Mn._resolveDeltasResponse = void 0));
  const e = er(),
    t = 2;
  function r(o, u) {
    const s = (0, e._typedJsonParse)(u, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const c = n(o, s),
      l = a(c),
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
  Mn._resolveDeltasResponse = r;
  function n(o, u) {
    return Object.assign(Object.assign(Object.assign({}, o), u), {
      feature_gates: Object.assign(Object.assign({}, o.feature_gates), u.feature_gates),
      layer_configs: Object.assign(Object.assign({}, o.layer_configs), u.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, o.dynamic_configs), u.dynamic_configs),
    });
  }
  function a(o) {
    const u = o;
    return (
      i(o.deleted_gates, u.feature_gates),
      delete u.deleted_gates,
      i(o.deleted_configs, u.dynamic_configs),
      delete u.deleted_configs,
      i(o.deleted_layers, u.layer_configs),
      delete u.deleted_layers,
      u
    );
  }
  function i(o, u) {
    o?.forEach((s) => {
      delete u[s];
    });
  }
  return Mn;
}
var yc;
function iv() {
  if (yc) return Rr;
  yc = 1;
  var e =
    (Rr && Rr.__awaiter) ||
    function (a, i, o, u) {
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
        h((u = u.apply(a, i || [])).next());
      });
    };
  Object.defineProperty(Rr, "__esModule", { value: !0 });
  const t = er(),
    r = mg();
  class n extends t.NetworkCore {
    constructor(i, o) {
      super(i, o);
      const u = i?.networkConfig;
      ((this._option = i),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          u?.initializeUrl,
          u?.api,
          u?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(i, o, u, s, c) {
      return e(this, void 0, void 0, function* () {
        var l, d, f, h, v, p;
        const g = o ? (0, t._typedJsonParse)(o, "has_updates", "InitializeResponse") : null;
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
            ((p =
              (v = (h = this._option) === null || h === void 0 ? void 0 : h.networkConfig) ===
                null || v === void 0
                ? void 0
                : v.initializeHashAlgorithm) !== null && p !== void 0
              ? p
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: c && !m ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && c ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: m ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(i, g, b, u);
      });
    }
    _fetchEvaluations(i, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c, l;
        const d = yield this.post({
          sdkKey: i,
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
              i,
              o,
              Object.assign(Object.assign(Object.assign({}, u), f), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((Rr.default = n), Rr);
}
var Ln = {},
  mc;
function wg() {
  if (mc) return Ln;
  ((mc = 1),
    Object.defineProperty(Ln, "__esModule", { value: !0 }),
    (Ln._makeParamStoreGetter = void 0));
  const e = er(),
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
          return a(p);
        case "gate":
          return i(l, p, f);
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
  return ((Ln._makeParamStoreGetter = c), Ln);
}
var ur = {},
  wc;
function kg() {
  if (wc) return ur;
  wc = 1;
  var e =
    (ur && ur.__awaiter) ||
    function (a, i, o, u) {
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
        h((u = u.apply(a, i || [])).next());
      });
    };
  (Object.defineProperty(ur, "__esModule", { value: !0 }),
    (ur.StatsigEvaluationsDataAdapter = void 0));
  const t = er(),
    r = iv();
  class n extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(i, o, u) {
      (super.attach(i, o, u),
        u !== null && u instanceof r.default
          ? (this._network = u)
          : (this._network = new r.default(o ?? {})));
    }
    getDataAsync(i, o, u) {
      return this._getDataAsyncImpl(i, (0, t._normalizeUser)(o, this._options), u);
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
    _fetchFromNetwork(i, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c;
        const l = yield (c = this._network) === null || c === void 0
          ? void 0
          : c.fetchEvaluations(this._getSdkKey(), i, u?.priority, o, s);
        return l ?? null;
      });
    }
    _getCacheKey(i) {
      var o;
      const u = (0, t._getStorageKey)(
        this._getSdkKey(),
        i,
        (o = this._options) === null || o === void 0 ? void 0 : o.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${u}`;
    }
    _isCachedResultValidFor204(i, o) {
      return i.fullUserHash != null && i.fullUserHash === (0, t._getFullUserHash)(o);
    }
  }
  return ((ur.StatsigEvaluationsDataAdapter = n), ur);
}
var kc;
function Og() {
  if (kc) return Cr;
  kc = 1;
  var e =
    (Cr && Cr.__awaiter) ||
    function (u, s, c, l) {
      function d(f) {
        return f instanceof c
          ? f
          : new c(function (h) {
              h(f);
            });
      }
      return new (c || (c = Promise))(function (f, h) {
        function v(b) {
          try {
            g(l.next(b));
          } catch (m) {
            h(m);
          }
        }
        function p(b) {
          try {
            g(l.throw(b));
          } catch (m) {
            h(m);
          }
        }
        function g(b) {
          b.done ? f(b.value) : d(b.value).then(v, p);
        }
        g((l = l.apply(u, s || [])).next());
      });
    };
  Object.defineProperty(Cr, "__esModule", { value: !0 });
  const t = er(),
    r = yg(),
    n = iv(),
    a = wg(),
    i = kg();
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
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new i.StatsigEvaluationsDataAdapter(),
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
      const b =
          (h =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || h === void 0
            ? void 0
            : h.call(f, g, this._user, c),
        m = b ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, m, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: m }),
        m
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
      const b = (0, t._mergeOverride)(
        p,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : p.__value,
        (m) => {
          c?.disableExposureLog ||
            this._enqueueExposure(
              s,
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
    _getParameterStoreImpl(s, c) {
      var l, d;
      const { result: f, details: h } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const v = {
          name: s,
          details: h,
          __configuration: f,
          get: (0, a._makeParamStoreGetter)(this, f, c),
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
          (v.get = (0, a._makeParamStoreGetter)(this, p.config, c))),
        v
      );
    }
  }
  return ((Cr.default = o), Cr);
}
var Oc;
function Sg() {
  return (
    Oc ||
      ((Oc = 1),
      (function (e) {
        var t =
            (sr && sr.__createBinding) ||
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
            (sr && sr.__exportStar) ||
            function (o, u) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(u, s) && t(u, o, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = er(),
          a = Og();
        ((e.StatsigClient = a.default), r(er(), e));
        const i = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = i;
      })(sr)),
    sr
  );
}
var Fn = {},
  Sc;
function Eg() {
  if (Sc) return Fn;
  ((Sc = 1),
    Object.defineProperty(Fn, "__esModule", { value: !0 }),
    (Fn.ForgeDataAdapter = void 0));
  const e = av();
  class t {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(n, a, i) {
      var o;
      if (n) return n;
      this.environment = ((o = this.options) === null || o === void 0 ? void 0 : o.environment) || {
        tier: "development",
      };
      const u = { ...a, statsigEnvironment: this.environment },
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
    async attach(n, a, i) {
      this.options = a;
    }
    async prefetchData() {}
    async setData(n) {}
    async setDataLegacy(n) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((Fn.ForgeDataAdapter = t), Fn);
}
var Ec;
function xg() {
  if (Ec) return Tn;
  ((Ec = 1),
    Object.defineProperty(Tn, "__esModule", { value: !0 }),
    (Tn.ForgeFeatureFlags = void 0));
  const e = Sg(),
    t = Eg();
  class r {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(a, i = {}) {
      if (this.isInitialized()) return;
      this.dataAdapter = new t.ForgeDataAdapter();
      const o = {
        environment: { tier: i.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(a), o)),
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
  return ((Tn.ForgeFeatureFlags = r), Tn);
}
var xc;
function Cg() {
  return (
    xc ||
      ((xc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ForgeFeatureFlags = void 0),
          jt.__exportStar(av(), e));
        var r = xg();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.ForgeFeatureFlags;
          },
        });
      })(Eo)),
    Eo
  );
}
var Cc;
function Rg() {
  return (
    Cc ||
      ((Cc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = jt;
        var r = $h();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Bh(), e),
          t.__exportStar(Vh(), e),
          t.__exportStar(nv(), e),
          t.__exportStar(sg(), e),
          t.__exportStar(cg(), e),
          t.__exportStar(dg(), e),
          t.__exportStar(vg(), e),
          t.__exportStar(pg(), e),
          t.__exportStar(bg(), e),
          (e.i18n = t.__importStar(_g())),
          t.__exportStar(Cg(), e));
      })(so)),
    so
  );
}
var Re = Rg();
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
function Ii() {
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
var ov = Object.assign,
  vi = Object.getOwnPropertyDescriptor,
  Ot = Object.defineProperty,
  Di = Object.prototype,
  cs = [];
Object.freeze(cs);
var sv = {};
Object.freeze(sv);
var Ag = typeof Proxy < "u",
  jg = Object.toString();
function uv() {
  Ag || H("Proxy not available");
}
function cv(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Ur = function () {};
function ft(e) {
  return typeof e == "function";
}
function hr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Ti(e) {
  return e !== null && typeof e == "object";
}
function tr(e) {
  if (!Ti(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === jg;
}
function lv(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Mi(e, t, r) {
  Ot(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function dv(e, t, r) {
  Ot(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function wr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return Ti(n) && n[r] === !0;
    }
  );
}
function tn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function Ig(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function zt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var fv = typeof Object.getOwnPropertySymbols < "u";
function Dg(e) {
  var t = Object.keys(e);
  if (!fv) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Di.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Li =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : fv
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function vv(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Ut(e, t) {
  return Di.hasOwnProperty.call(e, t);
}
var Tg =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Li(t).forEach(function (n) {
        r[n] = vi(t, n);
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
function Rc(e, t) {
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
function rn(e, t, r) {
  return (t && Mg(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Vr(e, t) {
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
function gr() {
  return (
    (gr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    gr.apply(null, arguments)
  );
}
function pv(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), ls(e, t));
}
function ls(e, t) {
  return (
    (ls = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    ls(e, t)
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
    if (typeof e == "string") return Rc(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Rc(e, t)
          : void 0
    );
  }
}
var kt = Symbol("mobx-stored-annotations");
function St(e) {
  function t(r, n) {
    if (Ia(n)) return e.decorate_20223_(r, n);
    ja(r, n, e);
  }
  return Object.assign(t, e);
}
function ja(e, t, r) {
  (Ut(e, kt) || Mi(e, kt, gr({}, e[kt])), Gg(r) || (e[kt][t] = r));
}
function $g(e) {
  return (Ut(e, kt) || Mi(e, kt, gr({}, e[kt])), e[kt]);
}
function Ia(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var F = Symbol("mobx administration"),
  nr = (function () {
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
        return Av(this);
      }),
      (t.reportChanged = function () {
        (Qe(), jv(this), Ze());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      rn(e, [
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
nr.isBeingObservedMask_ = 1;
nr.isPendingUnobservationMask_ = 2;
nr.diffValueMask_ = 4;
var Us = wr("Atom", nr);
function hv(e, t, r) {
  (t === void 0 && (t = Ur), r === void 0 && (r = Ur));
  var n = new nr(e);
  return (t !== Ur && Jb(n, t), r !== Ur && Lv(n, r), n);
}
function zg(e, t) {
  return Kv(e, t);
}
function Bg(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var pi = { structural: zg, default: Bg };
function br(e, t, r) {
  return zv(e)
    ? e
    : Array.isArray(e)
      ? se.array(e, { name: r })
      : tr(e)
        ? se.object(e, void 0, { name: r })
        : tn(e)
          ? se.map(e, { name: r })
          : zt(e)
            ? se.set(e, { name: r })
            : typeof e == "function" && !Kr(e) && !ya(e)
              ? lv(e)
                ? Yr(e)
                : _a(r, e)
              : e;
}
function qg(e, t, r) {
  if (e == null || Vi(e) || Ui(e) || Or(e) || wt(e)) return e;
  if (Array.isArray(e)) return se.array(e, { name: r, deep: !1 });
  if (tr(e)) return se.object(e, void 0, { name: r, deep: !1 });
  if (tn(e)) return se.map(e, { name: r, deep: !1 });
  if (zt(e)) return se.set(e, { name: r, deep: !1 });
}
function Fi(e) {
  return e;
}
function Ug(e, t) {
  return Kv(e, t) ? t : e;
}
var Vg = "override";
function Gg(e) {
  return e.annotationType_ === Vg;
}
function Da(e, t) {
  return { annotationType_: e, options_: t, make_: Hg, extend_: Wg, decorate_20223_: Kg };
}
function Hg(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Kr(r.value)) return 1;
  var i = gv(e, this, t, r, !1);
  return (Ot(n, t, i), 2);
}
function Wg(e, t, r, n) {
  var a = gv(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function Kg(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    i = this,
    o = function (c) {
      var l, d, f, h;
      return _r(
        (l = (d = i.options_) == null ? void 0 : d.name) != null ? l : n.toString(),
        c,
        (f = (h = i.options_) == null ? void 0 : h.autoAction) != null ? f : !1,
      );
    };
  if (r == "field")
    return function (s) {
      var c,
        l = s;
      return (
        Kr(l) || (l = o(l)),
        (c = i.options_) != null && c.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var u;
    return (
      Kr(e) || (e = o(e)),
      (u = this.options_) != null &&
        u.bound &&
        a(function () {
          var s = this,
            c = s[n].bind(s);
          ((c.isMobxAction = !0), (s[n] = c));
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
function Yg(e, t, r, n) {
  (t.annotationType_, n.value);
}
function gv(e, t, r, n, a) {
  var i, o, u, s, c, l, d;
  (a === void 0 && (a = A.safeDescriptors), Yg(e, t, r, n));
  var f = n.value;
  if ((i = t.options_) != null && i.bound) {
    var h;
    f = f.bind((h = e.proxy_) != null ? h : e.target_);
  }
  return {
    value: _r(
      (o = (u = t.options_) == null ? void 0 : u.name) != null ? o : r.toString(),
      f,
      (s = (c = t.options_) == null ? void 0 : c.autoAction) != null ? s : !1,
      (l = t.options_) != null && l.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: a ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !a,
  };
}
function bv(e, t) {
  return { annotationType_: e, options_: t, make_: Jg, extend_: Xg, decorate_20223_: Qg };
}
function Jg(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Ut(e.target_, t) || !ya(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (ya(r.value)) return 1;
  var i = _v(e, this, t, r, !1, !1);
  return (Ot(n, t, i), 2);
}
function Xg(e, t, r, n) {
  var a,
    i = _v(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, i, n);
}
function Qg(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    ya(e) || (e = Yr(e)),
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
function Zg(e, t, r, n) {
  (t.annotationType_, n.value);
}
function _v(e, t, r, n, a, i) {
  (i === void 0 && (i = A.safeDescriptors), Zg(e, t, r, n));
  var o = n.value;
  if ((ya(o) || (o = Yr(o)), a)) {
    var u;
    ((o = o.bind((u = e.proxy_) != null ? u : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: i ? e.isPlainObject_ : !0, enumerable: !1, writable: !i };
}
function Vs(e, t) {
  return { annotationType_: e, options_: t, make_: eb, extend_: tb, decorate_20223_: rb };
}
function eb(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function tb(e, t, r, n) {
  return (
    nb(e, this, t, r),
    e.defineComputedProperty_(t, gr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function rb(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var i = nn(this)[F],
        o = gr({}, r.options_, { get: e, context: this });
      (o.name || (o.name = "ObservableObject." + n.toString()), i.values_.set(n, new vt(o)));
    }),
    function () {
      return this[F].getObservablePropValue_(n);
    }
  );
}
function nb(e, t, r, n) {
  (t.annotationType_, n.get);
}
function Ni(e, t) {
  return { annotationType_: e, options_: t, make_: ab, extend_: ib, decorate_20223_: ob };
}
function ab(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function ib(e, t, r, n) {
  var a, i;
  return (
    sb(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (i = this.options_) == null ? void 0 : i.enhancer) != null ? a : br,
      n,
    )
  );
}
function ob(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    i = new WeakSet();
  function o(u, s) {
    var c,
      l,
      d = nn(u)[F],
      f = new vr(
        s,
        (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : br,
        "ObservableObject." + a.toString(),
        !1,
      );
    (d.values_.set(a, f), i.add(u));
  }
  if (n == "accessor")
    return {
      get: function () {
        return (i.has(this) || o(this, e.get.call(this)), this[F].getObservablePropValue_(a));
      },
      set: function (s) {
        return (i.has(this) || o(this, s), this[F].setObservablePropValue_(a, s));
      },
      init: function (s) {
        return (i.has(this) || o(this, s), s);
      },
    };
}
function sb(e, t, r, n) {
  t.annotationType_;
}
var ub = "true",
  cb = yv();
function yv(e) {
  return { annotationType_: ub, options_: e, make_: lb, extend_: db, decorate_20223_: fb };
}
function lb(e, t, r, n) {
  var a, i;
  if (r.get) return $i.make_(e, t, r, n);
  if (r.set) {
    var o = Kr(r.set) ? r.set : _r(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: A.safeDescriptors ? e.isPlainObject_ : !0,
          set: o,
        }) === null
        ? 0
        : 2
      : (Ot(n, t, { configurable: !0, set: o }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var u;
    if (lv(r.value)) {
      var s,
        c = (s = this.options_) != null && s.autoBind ? Yr.bound : Yr;
      return c.make_(e, t, r, n);
    }
    var l = (u = this.options_) != null && u.autoBind ? _a.bound : _a;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? se.ref : se;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function db(e, t, r, n) {
  var a, i;
  if (r.get) return $i.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: A.safeDescriptors ? e.isPlainObject_ : !0, set: _r(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var u = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? se.ref : se;
  return u.extend_(e, t, r, n);
}
function fb(e, t) {
  H("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var vb = "observable",
  pb = "observable.ref",
  hb = "observable.shallow",
  gb = "observable.struct",
  mv = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(mv);
function Va(e) {
  return e || mv;
}
var ds = Ni(vb),
  bb = Ni(pb, { enhancer: Fi }),
  _b = Ni(hb, { enhancer: qg }),
  yb = Ni(gb, { enhancer: Ug }),
  wv = St(ds);
function Ga(e) {
  return e.deep === !0 ? br : e.deep === !1 ? Fi : wb(e.defaultDecorator);
}
function mb(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : yv(e)) : void 0;
}
function wb(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : br;
}
function kv(e, t, r) {
  if (Ia(t)) return ds.decorate_20223_(e, t);
  if (hr(t)) {
    ja(e, t, ds);
    return;
  }
  return zv(e)
    ? e
    : tr(e)
      ? se.object(e, t, r)
      : Array.isArray(e)
        ? se.array(e, t)
        : tn(e)
          ? se.map(e, t)
          : zt(e)
            ? se.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : se.box(e, t);
}
ov(kv, wv);
var kb = {
    box: function (t, r) {
      var n = Va(r);
      return new vr(t, Ga(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = Va(r);
      return (A.useProxies === !1 || n.proxy === !1 ? m_ : l_)(t, Ga(n), n.name);
    },
    map: function (t, r) {
      var n = Va(r);
      return new qv(t, Ga(n), n.name);
    },
    set: function (t, r) {
      var n = Va(r);
      return new Uv(t, Ga(n), n.name);
    },
    object: function (t, r, n) {
      return Sr(function () {
        return e_(A.useProxies === !1 || n?.proxy === !1 ? nn({}, n) : s_({}, n), t, r);
      });
    },
    ref: St(bb),
    shallow: St(_b),
    deep: wv,
    struct: St(yb),
  },
  se = ov(kv, kb),
  Ov = "computed",
  Ob = "computed.struct",
  fs = Vs(Ov),
  Sb = Vs(Ob, { equals: pi.structural }),
  $i = function (t, r) {
    if (Ia(r)) return fs.decorate_20223_(t, r);
    if (hr(r)) return ja(t, r, fs);
    if (tr(t)) return St(Vs(Ov, t));
    var n = tr(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new vt(n));
  };
Object.assign($i, fs);
$i.struct = St(Sb);
var Pc,
  Ac,
  hi = 0,
  Eb = 1,
  xb =
    (Pc = (Ac = vi(function () {}, "name")) == null ? void 0 : Ac.configurable) != null ? Pc : !1,
  jc = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function _r(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return Cb(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    xb && ((jc.value = e), Ot(a, "name", jc)),
    a
  );
}
function Cb(e, t, r, n, a) {
  var i = Rb(e, t);
  try {
    return r.apply(n, a);
  } catch (o) {
    throw ((i.error_ = o), o);
  } finally {
    Pb(i);
  }
}
function Rb(e, t, r, n) {
  var a = !1,
    i = 0,
    o = A.trackingDerivation,
    u = !t || !o;
  Qe();
  var s = A.allowStateChanges;
  u && (kr(), (s = zi(!0)));
  var c = Gs(!0),
    l = {
      runAsAction_: u,
      prevDerivation_: o,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: c,
      notifySpy_: a,
      startTime_: i,
      actionId_: Eb++,
      parentActionId_: hi,
    };
  return ((hi = l.actionId_), l);
}
function Pb(e) {
  (hi !== e.actionId_ && H(30),
    (hi = e.parentActionId_),
    e.error_ !== void 0 && (A.suppressReactionErrors = !0),
    Bi(e.prevAllowStateChanges_),
    la(e.prevAllowStateReads_),
    Ze(),
    e.runAsAction_ && Vt(e.prevDerivation_),
    (A.suppressReactionErrors = !1));
}
function Ab(e, t) {
  var r = zi(e);
  try {
    return t();
  } finally {
    Bi(r);
  }
}
function zi(e) {
  var t = A.allowStateChanges;
  return ((A.allowStateChanges = e), t);
}
function Bi(e) {
  A.allowStateChanges = e;
}
var vr = (function (e) {
    function t(n, a, i, o, u) {
      var s;
      return (
        i === void 0 && (i = "ObservableValue"),
        u === void 0 && (u = pi.default),
        (s = e.call(this, i) || this),
        (s.enhancer = void 0),
        (s.name_ = void 0),
        (s.equals = void 0),
        (s.hasUnreportedChange_ = !1),
        (s.interceptors_ = void 0),
        (s.changeListeners_ = void 0),
        (s.value_ = void 0),
        (s.dehancer = void 0),
        (s.enhancer = a),
        (s.name_ = i),
        (s.equals = u),
        (s.value_ = a(n, void 0, i)),
        s
      );
    }
    pv(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== A.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (Je(this)) {
          var i = Xe(this, { object: this, type: Et, newValue: a });
          if (!i) return A.UNCHANGED;
          a = i.newValue;
        }
        return (
          (a = this.enhancer(a, this.value_, this.name_)),
          this.equals(this.value_, a) ? A.UNCHANGED : a
        );
      }),
      (r.setNewValue_ = function (a) {
        var i = this.value_;
        ((this.value_ = a),
          this.reportChanged(),
          lt(this) && dt(this, { type: Et, object: this, newValue: a, oldValue: i }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (a) {
        return Ta(this, a);
      }),
      (r.observe_ = function (a, i) {
        return (
          i &&
            a({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: Et,
              newValue: this.value_,
              oldValue: void 0,
            }),
          Ma(this, a)
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
        return vv(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(nr),
  vt = (function () {
    function e(r) {
      ((this.dependenciesState_ = W.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = W.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new bi(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = gi.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || H(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = _r("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? pi.structural : pi.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        Mb(this);
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
          vs(this) &&
            (this.warnAboutUntrackedRead_(), Qe(), (this.value_ = this.computeValue_(!1)), Ze());
        else if ((Av(this), vs(this))) {
          var n = A.trackingContext;
          (this.keepAlive_ && !n && (A.trackingContext = this),
            this.trackAndCompute() && Tb(this),
            (A.trackingContext = n));
        }
        var a = this.value_;
        if (ri(a)) throw a.cause;
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
          o = a || ri(n) || ri(i) || !this.equals_(n, i);
        return (o && (this.value_ = i), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = zi(!1),
          i;
        if (n) i = Sv(this, this.derivation, this.scope_);
        else if (A.disableErrorBoundaries === !0) i = this.derivation.call(this.scope_);
        else
          try {
            i = this.derivation.call(this.scope_);
          } catch (o) {
            i = new bi(o);
          }
        return (Bi(a), (this.isComputing = !1), i);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (ps(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var i = this,
          o = !0,
          u = void 0;
        return Gb(function () {
          var s = i.get();
          if (!o || a) {
            var c = kr();
            (n({
              observableKind: "computed",
              debugObjectName: i.name_,
              type: Et,
              object: i,
              newValue: s,
              oldValue: u,
            }),
              Vt(c));
          }
          ((o = !1), (u = s));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return vv(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      rn(e, [
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
vt.isComputingMask_ = 1;
vt.isRunningSetterMask_ = 2;
vt.isBeingObservedMask_ = 4;
vt.isPendingUnobservationMask_ = 8;
vt.diffValueMask_ = 16;
var qi = wr("ComputedValue", vt),
  W;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(W || (W = {}));
var gi;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(gi || (gi = {}));
var bi = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function ri(e) {
  return e instanceof bi;
}
function vs(e) {
  switch (e.dependenciesState_) {
    case W.UP_TO_DATE_:
      return !1;
    case W.NOT_TRACKING_:
    case W.STALE_:
      return !0;
    case W.POSSIBLY_STALE_: {
      for (var t = Gs(!0), r = kr(), n = e.observing_, a = n.length, i = 0; i < a; i++) {
        var o = n[i];
        if (qi(o)) {
          if (A.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Vt(r), la(t), !0);
            }
          if (e.dependenciesState_ === W.STALE_) return (Vt(r), la(t), !0);
        }
      }
      return (xv(e), Vt(r), la(t), !1);
    }
  }
}
function Sv(e, t, r) {
  var n = Gs(!0);
  (xv(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++A.runId));
  var a = A.trackingDerivation;
  ((A.trackingDerivation = e), A.inBatch++);
  var i;
  if (A.disableErrorBoundaries === !0) i = t.call(r);
  else
    try {
      i = t.call(r);
    } catch (o) {
      i = new bi(o);
    }
  return (A.inBatch--, (A.trackingDerivation = a), jb(e), la(n), i);
}
function jb(e) {
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
    var u = r[o];
    (u.diffValue === 0 && ((u.diffValue = 1), a !== o && (r[a] = u), a++),
      u.dependenciesState_ > n && (n = u.dependenciesState_));
  }
  for (r.length = a, e.newObserving_ = null, i = t.length; i--; ) {
    var s = t[i];
    (s.diffValue === 0 && Rv(s, e), (s.diffValue = 0));
  }
  for (; a--; ) {
    var c = r[a];
    c.diffValue === 1 && ((c.diffValue = 0), Db(c, e));
  }
  n !== W.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function ps(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Rv(t[r], e);
  e.dependenciesState_ = W.NOT_TRACKING_;
}
function Ev(e) {
  var t = kr();
  try {
    return e();
  } finally {
    Vt(t);
  }
}
function kr() {
  var e = A.trackingDerivation;
  return ((A.trackingDerivation = null), e);
}
function Vt(e) {
  A.trackingDerivation = e;
}
function Gs(e) {
  var t = A.allowStateReads;
  return ((A.allowStateReads = e), t);
}
function la(e) {
  A.allowStateReads = e;
}
function xv(e) {
  if (e.dependenciesState_ !== W.UP_TO_DATE_) {
    e.dependenciesState_ = W.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = W.UP_TO_DATE_;
  }
}
var ni = function () {
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
  ai = !0,
  Cv = !1,
  A = (function () {
    var e = Ii();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ai = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new ni().version && (ai = !1),
      ai
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ni()))
        : (setTimeout(function () {
            Cv || H(35);
          }, 1),
          new ni())
    );
  })();
function Ib() {
  if (((A.pendingReactions.length || A.inBatch || A.isRunningReactions) && H(36), (Cv = !0), ai)) {
    var e = Ii();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (A = new ni()));
  }
}
function Db(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Rv(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Pv(e));
}
function Pv(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), A.pendingUnobservations.push(e));
}
function Qe() {
  A.inBatch++;
}
function Ze() {
  if (--A.inBatch === 0) {
    Iv();
    for (var e = A.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof vt && r.suspend_()));
    }
    A.pendingUnobservations = [];
  }
}
function Av(e) {
  var t = A.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && A.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && A.inBatch > 0 && Pv(e), !1);
}
function jv(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === W.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = W.STALE_));
    }));
}
function Tb(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.POSSIBLY_STALE_
        ? (t.dependenciesState_ = W.STALE_)
        : t.dependenciesState_ === W.UP_TO_DATE_ && (e.lowestObserverState_ = W.UP_TO_DATE_);
    }));
}
function Mb(e) {
  e.lowestObserverState_ === W.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = W.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.UP_TO_DATE_ &&
        ((t.dependenciesState_ = W.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var Pt = (function () {
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
      (this.isTracing_ = gi.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), A.pendingReactions.push(this), Iv());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Qe(), (this.isScheduled = !1));
        var n = A.trackingContext;
        if (((A.trackingContext = this), vs(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((A.trackingContext = n), Ze());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (Qe(), (this.isRunning = !0));
        var a = A.trackingContext;
        A.trackingContext = this;
        var i = Sv(this, n, void 0);
        ((A.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && ps(this),
          ri(i) && this.reportExceptionInDerivation_(i.cause),
          Ze());
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var a = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (A.disableErrorBoundaries) throw n;
      var i = "[mobx] uncaught error in '" + this + "'";
      (A.suppressReactionErrors || console.error(i, n),
        A.globalReactionErrorHandlers.forEach(function (o) {
          return o(n, a);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Qe(), ps(this), Ze()));
    }),
    (t.getDisposer_ = function (n) {
      var a = this,
        i = function o() {
          (a.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", o));
        };
      return (
        n == null || n.addEventListener == null || n.addEventListener("abort", i),
        (i[F] = this),
        "dispose" in Symbol && typeof Symbol.dispose == "symbol" && (i[Symbol.dispose] = i),
        i
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
Pt.isDisposedMask_ = 1;
Pt.isScheduledMask_ = 2;
Pt.isTrackPendingMask_ = 4;
Pt.isRunningMask_ = 8;
Pt.diffValueMask_ = 16;
var Lb = 100,
  hs = function (t) {
    return t();
  };
function Iv() {
  A.inBatch > 0 || A.isRunningReactions || hs(Fb);
}
function Fb() {
  A.isRunningReactions = !0;
  for (var e = A.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Lb && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  A.isRunningReactions = !1;
}
var _i = wr("Reaction", Pt);
function Nb(e) {
  var t = hs;
  hs = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function da() {
  return !1;
}
function $b(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Dv = "action",
  zb = "action.bound",
  Tv = "autoAction",
  Bb = "autoAction.bound",
  qb = "<unnamed action>",
  gs = Da(Dv),
  Ub = Da(zb, { bound: !0 }),
  bs = Da(Tv, { autoAction: !0 }),
  Vb = Da(Bb, { autoAction: !0, bound: !0 });
function Mv(e) {
  var t = function (n, a) {
    if (ft(n)) return _r(n.name || qb, n, e);
    if (ft(a)) return _r(n, a, e);
    if (Ia(a)) return (e ? bs : gs).decorate_20223_(n, a);
    if (hr(a)) return ja(n, a, e ? bs : gs);
    if (hr(n)) return St(Da(e ? Tv : Dv, { name: n, autoAction: e }));
  };
  return t;
}
var et = Mv(!1);
Object.assign(et, gs);
var _a = Mv(!0);
Object.assign(_a, bs);
et.bound = St(Ub);
_a.bound = St(Vb);
function Kr(e) {
  return ft(e) && e.isMobxAction === !0;
}
function Gb(e, t) {
  var r, n, a, i;
  t === void 0 && (t = sv);
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    u = !t.scheduler && !t.delay,
    s;
  if (u)
    s = new Pt(
      o,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var c = Wb(t),
      l = !1;
    s = new Pt(
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
    ((a = t) != null && (a = a.signal) != null && a.aborted) || s.schedule_(),
    s.getDisposer_((i = t) == null ? void 0 : i.signal)
  );
}
var Hb = function (t) {
  return t();
};
function Wb(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Hb;
}
var Kb = "onBO",
  Yb = "onBUO";
function Jb(e, t, r) {
  return Fv(Kb, e, t, r);
}
function Lv(e, t, r) {
  return Fv(Yb, e, t, r);
}
function Fv(e, t, r, n) {
  var a = wi(t),
    i = ft(n) ? n : r,
    o = e + "L";
  return (
    a[o] ? a[o].add(i) : (a[o] = new Set([i])),
    function () {
      var u = a[o];
      u && (u.delete(i), u.size === 0 && delete a[o]);
    }
  );
}
var Xb = "never",
  Ha = "always",
  Qb = "observed";
function Zb(e) {
  e.isolateGlobalState === !0 && Ib();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (A.useProxies = t === Ha ? !0 : t === Xb ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (A.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Ha ? Ha : r === Qb;
    ((A.enforceActions = n), (A.allowStateChanges = !(n === !0 || n === Ha)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (a) {
    a in e && (A[a] = !!e[a]);
  }),
    (A.allowStateReads = !A.observableRequiresReaction),
    e.reactionScheduler && Nb(e.reactionScheduler));
}
function e_(e, t, r, n) {
  var a = Tg(t);
  return (
    Sr(function () {
      var i = nn(e, n)[F];
      Li(a).forEach(function (o) {
        i.extend_(o, a[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function t_(e, t) {
  return Nv(wi(e, t));
}
function Nv(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = r_(e.observing_).map(Nv)),
    t
  );
}
function r_(e) {
  return Array.from(new Set(e));
}
var n_ = 0;
function $v() {
  this.message = "FLOW_CANCELLED";
}
$v.prototype = Object.create(Error.prototype);
var xo = bv("flow"),
  a_ = bv("flow.bound", { bound: !0 }),
  Yr = Object.assign(function (t, r) {
    if (Ia(r)) return xo.decorate_20223_(t, r);
    if (hr(r)) return ja(t, r, xo);
    var n = t,
      a = n.name || "<unnamed flow>",
      i = function () {
        var u = this,
          s = arguments,
          c = ++n_,
          l = et(a + " - runid: " + c + " - init", n).apply(u, s),
          d,
          f = void 0,
          h = new Promise(function (v, p) {
            var g = 0;
            d = p;
            function b(k) {
              f = void 0;
              var y;
              try {
                y = et(a + " - runid: " + c + " - yield " + g++, l.next).call(l, k);
              } catch (S) {
                return p(S);
              }
              w(y);
            }
            function m(k) {
              f = void 0;
              var y;
              try {
                y = et(a + " - runid: " + c + " - yield " + g++, l.throw).call(l, k);
              } catch (S) {
                return p(S);
              }
              w(y);
            }
            function w(k) {
              if (ft(k?.then)) {
                k.then(w, p);
                return;
              }
              return k.done ? v(k.value) : ((f = Promise.resolve(k.value)), f.then(b, m));
            }
            b(void 0);
          });
        return (
          (h.cancel = et(a + " - runid: " + c + " - cancel", function () {
            try {
              f && Ic(f);
              var v = l.return(void 0),
                p = Promise.resolve(v.value);
              (p.then(Ur, Ur), Ic(p), d(new $v()));
            } catch (g) {
              d(g);
            }
          })),
          h
        );
      };
    return ((i.isMobXFlow = !0), i);
  }, xo);
Yr.bound = St(a_);
function Ic(e) {
  ft(e.cancel) && e.cancel();
}
function ya(e) {
  return e?.isMobXFlow === !0;
}
function i_(e, t) {
  return e ? Vi(e) || !!e[F] || Us(e) || _i(e) || qi(e) : !1;
}
function zv(e) {
  return i_(e);
}
function Bt(e, t) {
  (t === void 0 && (t = void 0), Qe());
  try {
    return e.apply(t);
  } finally {
    Ze();
  }
}
function Pr(e) {
  return e[F];
}
var o_ = {
  has: function (t, r) {
    return Pr(t).has_(r);
  },
  get: function (t, r) {
    return Pr(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return hr(r) ? ((a = Pr(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return hr(r) ? ((n = Pr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = Pr(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return Pr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    H(13);
  },
};
function s_(e, t) {
  var r, n;
  return (
    uv(),
    (e = nn(e, t)),
    (n = (r = e[F]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, o_))
  );
}
function Je(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Ta(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    cv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Xe(e, t) {
  var r = kr();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, i = n.length;
      a < i && ((t = n[a](t)), t && !t.type && H(14), !!t);
      a++
    );
    return t;
  } finally {
    Vt(r);
  }
}
function lt(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Ma(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    cv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function dt(e, t) {
  var r = kr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, i = n.length; a < i; a++) n[a](t);
    Vt(r);
  }
}
function Hs(e, t, r) {
  return (
    Sr(function () {
      var n,
        a = nn(e, r)[F];
      ((n = t) != null || (t = $g(e)),
        Li(t).forEach(function (i) {
          return a.make_(i, t[i]);
        }));
    }),
    e
  );
}
var Dc = "splice",
  Et = "update",
  u_ = 1e4,
  c_ = {
    get: function (t, r) {
      var n = t[F];
      return r === F
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Ut(yi, r)
              ? yi[r]
              : t[r];
    },
    set: function (t, r, n) {
      var a = t[F];
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
  Ws = (function () {
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
        (this.atom_ = new nr(r)),
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
        return Ta(this, n);
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
          Ma(this, n)
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
          this.legacyMode_ && a > 0 && Wv(n + a + 1));
      }),
      (t.spliceWithArray_ = function (n, a, i) {
        var o = this;
        this.atom_;
        var u = this.values_.length;
        if (
          (n === void 0 ? (n = 0) : n > u ? (n = u) : n < 0 && (n = Math.max(0, u + n)),
          arguments.length === 1
            ? (a = u - n)
            : a == null
              ? (a = 0)
              : (a = Math.max(0, Math.min(a, u - n))),
          i === void 0 && (i = cs),
          Je(this))
        ) {
          var s = Xe(this, { object: this.proxy_, type: Dc, index: n, removedCount: a, added: i });
          if (!s) return cs;
          ((a = s.removedCount), (i = s.added));
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
          this.updateArrayLength_(u, c);
        }
        var l = this.spliceItemsIntoValues_(n, a, i);
        return (
          (a !== 0 || i.length !== 0) && this.notifyArraySplice_(n, i, l),
          this.dehanceValues_(l)
        );
      }),
      (t.spliceItemsIntoValues_ = function (n, a, i) {
        if (i.length < u_) {
          var o;
          return (o = this.values_).splice.apply(o, [n, a].concat(i));
        } else {
          var u = this.values_.slice(n, n + a),
            s = this.values_.slice(n + a);
          this.values_.length += i.length - a;
          for (var c = 0; c < i.length; c++) this.values_[n + c] = i[c];
          for (var l = 0; l < s.length; l++) this.values_[n + i.length + l] = s[l];
          return u;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (n, a, i) {
        var o = !this.owned_ && da(),
          u = lt(this),
          s =
            u || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: Et,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: a,
                  oldValue: i,
                }
              : null;
        (this.atom_.reportChanged(), u && dt(this, s));
      }),
      (t.notifyArraySplice_ = function (n, a, i) {
        var o = !this.owned_ && da(),
          u = lt(this),
          s =
            u || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Dc,
                  index: n,
                  removed: i,
                  added: a,
                  removedCount: i.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), u && dt(this, s));
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
          if (Je(this)) {
            var u = Xe(this, { type: Et, object: this.proxy_, index: n, newValue: a });
            if (!u) return;
            a = u.newValue;
          }
          a = this.enhancer_(a, o);
          var s = a !== o;
          s && ((i[n] = a), this.notifyArrayChildUpdate_(n, a, o));
        } else {
          for (var c = new Array(n + 1 - i.length), l = 0; l < c.length - 1; l++) c[l] = void 0;
          ((c[c.length - 1] = a), this.spliceWithArray_(i.length, 0, c));
        }
      }),
      e
    );
  })();
function l_(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    uv(),
    Sr(function () {
      var a = new Ws(r, t, n, !1);
      dv(a.values_, F, a);
      var i = new Proxy(a.values_, c_);
      return ((a.proxy_ = i), e && e.length && a.spliceWithArray_(0, 0, e), i);
    })
  );
}
var yi = {
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
    for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
      a[i - 2] = arguments[i];
    var o = this[F];
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
    return this[F].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (var t = this[F], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return (t.spliceWithArray_(t.values_.length, 0, n), t.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[F].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[F], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
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
ie("every", ht);
ie("filter", ht);
ie("find", ht);
ie("findIndex", ht);
ie("findLast", ht);
ie("findLastIndex", ht);
ie("flatMap", ht);
ie("forEach", ht);
ie("map", ht);
ie("some", ht);
ie("toReversed", ht);
ie("reduce", Bv);
ie("reduceRight", Bv);
function ie(e, t) {
  typeof Array.prototype[e] == "function" && (yi[e] = t(e));
}
function ze(e) {
  return function () {
    var t = this[F];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function ht(e) {
  return function (t, r) {
    var n = this,
      a = this[F];
    a.atom_.reportObserved();
    var i = a.dehanceValues_(a.values_);
    return i[e](function (o, u) {
      return t.call(r, o, u, n);
    });
  };
}
function Bv(e) {
  return function () {
    var t = this,
      r = this[F];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_),
      a = arguments[0];
    return (
      (arguments[0] = function (i, o, u) {
        return a(i, o, u, t);
      }),
      n[e].apply(n, arguments)
    );
  };
}
var d_ = wr("ObservableArrayAdministration", Ws);
function Ui(e) {
  return Ti(e) && d_(e[F]);
}
var f_ = {},
  Qt = "add",
  mi = "delete",
  qv = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = br),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[F] = f_),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        ft(Map) || H(18),
        Sr(function () {
          ((i.keysAtom_ = hv("ObservableMap.keys()")),
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
        if (!A.trackingDerivation) return this.has_(n);
        var i = this.hasMap_.get(n);
        if (!i) {
          var o = (i = new vr(this.has_(n), Fi, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            Lv(o, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return i.get();
      }),
      (t.set = function (n, a) {
        var i = this.has_(n);
        if (Je(this)) {
          var o = Xe(this, { type: i ? Et : Qt, object: this, newValue: a, name: n });
          if (!o) return this;
          a = o.newValue;
        }
        return (i ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, Je(this))) {
          var i = Xe(this, { type: mi, object: this, name: n });
          if (!i) return !1;
        }
        if (this.has_(n)) {
          var o = da(),
            u = lt(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: mi,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Bt(function () {
              var c;
              (a.keysAtom_.reportChanged(), (c = a.hasMap_.get(n)) == null || c.setNewValue_(!1));
              var l = a.data_.get(n);
              (l.setNewValue_(void 0), a.data_.delete(n));
            }),
            u && dt(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var i = this.data_.get(n);
        if (((a = i.prepareNewValue_(a)), a !== A.UNCHANGED)) {
          var o = da(),
            u = lt(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Et,
                    object: this,
                    oldValue: i.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (i.setNewValue_(a), u && dt(this, s));
        }
      }),
      (t.addValue_ = function (n, a) {
        var i = this;
        (this.keysAtom_,
          Bt(function () {
            var c,
              l = new vr(a, i.enhancer_, "ObservableMap.key", !1);
            (i.data_.set(n, l),
              (a = l.value_),
              (c = i.hasMap_.get(n)) == null || c.setNewValue_(!0),
              i.keysAtom_.reportChanged());
          }));
        var o = da(),
          u = lt(this),
          s =
            u || o
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Qt,
                  object: this,
                  name: n,
                  newValue: a,
                }
              : null;
        u && dt(this, s);
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
        return Tc({
          next: function () {
            var o = a.next(),
              u = o.done,
              s = o.value;
            return { done: u, value: u ? void 0 : n.get(s) };
          },
        });
      }),
      (t.entries = function () {
        var n = this,
          a = this.keys();
        return Tc({
          next: function () {
            var o = a.next(),
              u = o.done,
              s = o.value;
            return { done: u, value: u ? void 0 : [s, n.get(s)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (n, a) {
        for (var i = Vr(this), o; !(o = i()).done; ) {
          var u = o.value,
            s = u[0],
            c = u[1];
          n.call(a, c, s, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          Or(n) && (n = new Map(n)),
          Bt(function () {
            tr(n)
              ? Dg(n).forEach(function (i) {
                  return a.set(i, n[i]);
                })
              : Array.isArray(n)
                ? n.forEach(function (i) {
                    var o = i[0],
                      u = i[1];
                    return a.set(o, u);
                  })
                : tn(n)
                  ? (Ig(n) || H(19, n),
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
        Bt(function () {
          Ev(function () {
            for (var a = Vr(n.keys()), i; !(i = a()).done; ) {
              var o = i.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          Bt(function () {
            for (
              var i = v_(n), o = new Map(), u = !1, s = Vr(a.data_.keys()), c;
              !(c = s()).done;

            ) {
              var l = c.value;
              if (!i.has(l)) {
                var d = a.delete(l);
                if (d) u = !0;
                else {
                  var f = a.data_.get(l);
                  o.set(l, f);
                }
              }
            }
            for (var h = Vr(i.entries()), v; !(v = h()).done; ) {
              var p = v.value,
                g = p[0],
                b = p[1],
                m = a.data_.has(g);
              if ((a.set(g, b), a.data_.has(g))) {
                var w = a.data_.get(g);
                (o.set(g, w), m || (u = !0));
              }
            }
            if (!u)
              if (a.data_.size !== o.size) a.keysAtom_.reportChanged();
              else
                for (var k = a.data_.keys(), y = o.keys(), S = k.next(), C = y.next(); !S.done; ) {
                  if (S.value !== C.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = k.next()), (C = y.next()));
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
        return Ma(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ta(this, n);
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
  Or = wr("ObservableMap", qv);
function Tc(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Ys(e));
}
function v_(e) {
  if (tn(e) || Or(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (tr(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return H(21, e);
}
var p_ = {},
  Uv = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = br),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[F] = p_),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        ft(Set) || H(22),
        (this.enhancer_ = function (o, u) {
          return n(o, u, a);
        }),
        Sr(function () {
          ((i.atom_ = hv(i.name_)), r && i.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Bt(function () {
          Ev(function () {
            for (var a = Vr(n.data_.values()), i; !(i = a()).done; ) {
              var o = i.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var i = Vr(this), o; !(o = i()).done; ) {
          var u = o.value;
          n.call(a, u, u, this);
        }
      }),
      (t.add = function (n) {
        var a = this;
        if ((this.atom_, Je(this))) {
          var i = Xe(this, { type: Qt, object: this, newValue: n });
          if (!i) return this;
          n = i.newValue;
        }
        if (!this.has(n)) {
          Bt(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var o = !1,
            u = lt(this),
            s =
              u || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Qt,
                    object: this,
                    newValue: n,
                  }
                : null;
          u && dt(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (Je(this)) {
          var i = Xe(this, { type: mi, object: this, oldValue: n });
          if (!i) return !1;
        }
        if (this.has(n)) {
          var o = !1,
            u = lt(this),
            s =
              u || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: mi,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Bt(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            u && dt(this, s),
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
        return Mc({
          next: function () {
            var i = n.next(),
              o = i.value,
              u = i.done;
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
          a = this.data_.values();
        return Mc({
          next: function () {
            var o = a.next(),
              u = o.value,
              s = o.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(u), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if (zt(n) && !wt(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (zt(n) && !wt(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (zt(n) && !wt(n)) return n.symmetricDifference(this);
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
        if (zt(n) && !wt(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          wt(n) && (n = new Set(n)),
          Bt(function () {
            Array.isArray(n)
              ? (a.clear(),
                n.forEach(function (i) {
                  return a.add(i);
                }))
              : zt(n)
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
        return Ma(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ta(this, n);
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
  wt = wr("ObservableSet", Uv);
function Mc(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Ys(e));
}
var Lc = Object.create(null),
  Fc = "remove",
  Vv = (function () {
    function e(r, n, a, i) {
      (n === void 0 && (n = new Map()),
        i === void 0 && (i = cb),
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
        (this.keysAtom_ = new nr("ObservableObject.keys")),
        (this.isPlainObject_ = tr(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, a) {
        var i = this.values_.get(n);
        if (i instanceof vt) return (i.set(a), !0);
        if (Je(this)) {
          var o = Xe(this, { type: Et, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!o) return null;
          a = o.newValue;
        }
        if (((a = i.prepareNewValue_(a)), a !== A.UNCHANGED)) {
          var u = lt(this),
            s = !1,
            c =
              u || s
                ? {
                    type: Et,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: i.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (i.setNewValue_(a), u && dt(this, c));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (A.trackingDerivation && !Ut(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, a, i) {
        return (
          i === void 0 && (i = !1),
          Ut(this.target_, n)
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
        if (!A.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var a = this.pendingKeys_.get(n);
        return (
          a ||
            ((a = new vr(n in this.target_, Fi, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var i;
            if ((i = this.target_[kt]) != null && i[n]) return;
            H(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== Di; ) {
            var u = vi(o, n);
            if (u) {
              var s = a.make_(this, n, u, o);
              if (s === 0) return;
              if (s === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          $c(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, i, o) {
        if ((o === void 0 && (o = !1), i === !0 && (i = this.defaultAnnotation_), i === !1))
          return this.defineProperty_(n, a, o);
        var u = i.extend_(this, n, a, o);
        return (u && $c(this, i, n), u);
      }),
      (t.defineProperty_ = function (n, a, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          Qe();
          var o = this.delete_(n);
          if (!o) return o;
          if (Je(this)) {
            var u = Xe(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Qt,
              newValue: a.value,
            });
            if (!u) return null;
            var s = u.newValue;
            a.value !== s && (a = gr({}, a, { value: s }));
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
          Qe();
          var u = this.delete_(n);
          if (!u) return u;
          if (Je(this)) {
            var s = Xe(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Qt,
              newValue: a,
            });
            if (!s) return null;
            a = s.newValue;
          }
          var c = Nc(n),
            l = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: c.get,
              set: c.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else Ot(this.target_, n, l);
          var d = new vr(a, i, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          Ze();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, a, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          Qe();
          var o = this.delete_(n);
          if (!o) return o;
          if (Je(this)) {
            var u = Xe(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Qt,
              newValue: void 0,
            });
            if (!u) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var s = Nc(n),
            c = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, c)) return !1;
          } else Ot(this.target_, n, c);
          (this.values_.set(n, new vt(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          Ze();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Ut(this.target_, n))) return !0;
        if (Je(this)) {
          var i = Xe(this, { object: this.proxy_ || this.target_, name: n, type: Fc });
          if (!i) return null;
        }
        try {
          var o;
          Qe();
          var u = lt(this),
            s = !1,
            c = this.values_.get(n),
            l = void 0;
          if (!c && (u || s)) {
            var d;
            l = (d = vi(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c && (this.values_.delete(n), c instanceof vr && (l = c.value_), jv(c)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            u || s)
          ) {
            var f = {
              type: Fc,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            u && dt(this, f);
          }
        } finally {
          Ze();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return Ma(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ta(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var i,
          o = lt(this),
          u = !1;
        if (o || u) {
          var s =
            o || u
              ? {
                  type: Qt,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: a,
                }
              : null;
          o && dt(this, s);
        }
        ((i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), Li(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function nn(e, t) {
  var r;
  if (Ut(e, F)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new Vv(e, new Map(), String(n), mb(t));
  return (Mi(e, F, a), e);
}
var h_ = wr("ObservableObjectAdministration", Vv);
function Nc(e) {
  return (
    Lc[e] ||
    (Lc[e] = {
      get: function () {
        return this[F].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[F].setObservablePropValue_(e, r);
      },
    })
  );
}
function Vi(e) {
  return Ti(e) ? h_(e[F]) : !1;
}
function $c(e, t, r) {
  var n;
  (n = e.target_[kt]) == null || delete n[r];
}
var g_ = Hv(0),
  b_ = (function () {
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
  Co = 0,
  Gv = function () {};
function __(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
__(Gv, Array.prototype);
var Ks = (function (e) {
  function t(n, a, i, o) {
    var u;
    return (
      i === void 0 && (i = "ObservableArray"),
      o === void 0 && (o = !1),
      (u = e.call(this) || this),
      Sr(function () {
        var s = new Ws(i, a, o, !0);
        ((s.proxy_ = u),
          dv(u, F, s),
          n && n.length && u.spliceWithArray(0, 0, n),
          b_ && Object.defineProperty(u, "0", g_));
      }),
      u
    );
  }
  pv(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[F].atom_.reportObserved();
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        i.map(function (u) {
          return Ui(u) ? u.slice() : u;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return Ys({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    rn(t, [
      {
        key: "length",
        get: function () {
          return this[F].getArrayLength_();
        },
        set: function (a) {
          this[F].setArrayLength_(a);
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
})(Gv);
Object.entries(yi).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Mi(Ks.prototype, t, r);
});
function Hv(e) {
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
function y_(e) {
  Ot(Ks.prototype, "" + e, Hv(e));
}
function Wv(e) {
  if (e > Co) {
    for (var t = Co; t < e + 100; t++) y_(t);
    Co = e;
  }
}
Wv(1e3);
function m_(e, t, r) {
  return new Ks(e, t, r);
}
function wi(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Ui(e)) return (t !== void 0 && H(23), e[F].atom_);
    if (wt(e)) return e.atom_;
    if (Or(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || H(25, t, _s(e)), r);
    }
    if (Vi(e)) {
      if (!t) return H(26);
      var n = e[F].values_.get(t);
      return (n || H(27, t, _s(e)), n);
    }
    if (Us(e) || qi(e) || _i(e)) return e;
  } else if (ft(e) && _i(e[F])) return e[F];
  H(28);
}
function w_(e, t) {
  if ((e || H(29), Us(e) || qi(e) || _i(e) || Or(e) || wt(e))) return e;
  if (e[F]) return e[F];
  H(24, e);
}
function _s(e, t) {
  var r;
  if (t !== void 0) r = wi(e, t);
  else {
    if (Kr(e)) return e.name;
    Vi(e) || Or(e) || wt(e) ? (r = w_(e)) : (r = wi(e));
  }
  return r.name_;
}
function Sr(e) {
  var t = kr(),
    r = zi(!0);
  Qe();
  try {
    return e();
  } finally {
    (Ze(), Bi(r), Vt(t));
  }
}
var zc = Di.toString;
function Kv(e, t, r) {
  return (r === void 0 && (r = -1), ys(e, t, r));
}
function ys(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object") return !1;
  var o = zc.call(e);
  if (o !== zc.call(t)) return !1;
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
  ((e = Bc(e)), (t = Bc(t)));
  var u = o === "[object Array]";
  if (!u) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      c = t.constructor;
    if (
      s !== c &&
      !(ft(s) && s instanceof s && ft(c) && c instanceof c) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (r === 0) return !1;
  (r < 0 && (r = -1), (n = n || []), (a = a || []));
  for (var l = n.length; l--; ) if (n[l] === e) return a[l] === t;
  if ((n.push(e), a.push(t), u)) {
    if (((l = e.length), l !== t.length)) return !1;
    for (; l--; ) if (!ys(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var h = 0; h < f; h++) {
      var v = d[h];
      if (!(Ut(t, v) && ys(e[v], t[v], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function Bc(e) {
  return Ui(e) ? e.slice() : tn(e) || Or(e) || zt(e) || wt(e) ? Array.from(e.entries()) : e;
}
var qc,
  k_ = ((qc = Ii().Iterator) == null ? void 0 : qc.prototype) || {};
function Ys(e) {
  return ((e[Symbol.iterator] = O_), Object.assign(Object.create(k_), e));
}
function O_() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Ii();
  typeof t[e] > "u" && H("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: $b, extras: { getDebugName: _s }, $mobx: F });
var _ = pt();
const O = rr(_),
  Uc = Ih({ __proto__: null, default: O }, [_]);
if (!_.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Hs) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function S_(e) {
  e();
}
function E_(e) {
  (e || (e = S_), Zb({ reactionScheduler: e }));
}
function x_(e) {
  return t_(e);
}
var C_ = 1e4,
  R_ = 1e4,
  P_ = (function () {
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
            (n === void 0 && (n = C_), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, R_));
        },
      }),
      e
    );
  })(),
  A_ = typeof FinalizationRegistry < "u" ? FinalizationRegistry : P_,
  ma = new A_(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  Ro = { exports: {} },
  Po = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vc;
function j_() {
  if (Vc) return Po;
  Vc = 1;
  var e = pt();
  function t(d, f) {
    return (d === f && (d !== 0 || 1 / d === 1 / f)) || (d !== d && f !== f);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    a = e.useEffect,
    i = e.useLayoutEffect,
    o = e.useDebugValue;
  function u(d, f) {
    var h = f(),
      v = n({ inst: { value: h, getSnapshot: f } }),
      p = v[0].inst,
      g = v[1];
    return (
      i(
        function () {
          ((p.value = h), (p.getSnapshot = f), s(p) && g({ inst: p }));
        },
        [d, h, f],
      ),
      a(
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
    (Po.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    Po
  );
}
var Gc;
function I_() {
  return (Gc || ((Gc = 1), (Ro.exports = j_())), Ro.exports);
}
var D_ = I_();
function Hc(e) {
  e.reaction = new Pt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function T_(e, t) {
  t === void 0 && (t = "observed");
  var r = O.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (u) {
        return (
          ma.unregister(n),
          (n.onStoreChange = u),
          n.reaction || (Hc(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (Hc(a), ma.register(r, a, a)),
    O.useDebugValue(a.reaction, x_),
    D_.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
  var i, o;
  if (
    (a.reaction.track(function () {
      try {
        i = e();
      } catch (u) {
        o = u;
      }
    }),
    o)
  )
    throw o;
  return i;
}
var Ao,
  jo,
  Yv = typeof Symbol == "function" && Symbol.for,
  M_ =
    (jo =
      (Ao = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Ao === void 0
        ? void 0
        : Ao.configurable) !== null && jo !== void 0
      ? jo
      : !1,
  Wc = Yv
    ? Symbol.for("react.forward_ref")
    : typeof _.forwardRef == "function" &&
      _.forwardRef(function (e) {
        return null;
      }).$$typeof,
  Kc = Yv
    ? Symbol.for("react.memo")
    : typeof _.memo == "function" &&
      _.memo(function (e) {
        return null;
      }).$$typeof;
function L_(e, t) {
  var r;
  if (Kc && e.$$typeof === Kc)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    i = e.displayName || e.name;
  if (Wc && e.$$typeof === Wc && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (u, s) {
    return T_(function () {
      return a(u, s);
    }, i);
  };
  return (
    (o.displayName = e.displayName),
    M_ && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = _.forwardRef(o)),
    (o = _.memo(o)),
    N_(e, o),
    o
  );
}
var F_ = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function N_(e, t) {
  Object.keys(e).forEach(function (r) {
    F_[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Io;
E_(Ai.unstable_batchedUpdates);
Io = ma.finalizeAllImmediately;
function $_(e, t) {
  if (Yc(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !Yc(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function Yc(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Jc = Symbol("patchMixins"),
  Jv = Symbol("patchedDefinition");
function z_(e, t) {
  var r = (e[Jc] = e[Jc] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function Xc(e, t) {
  for (var r = this, n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  t.locks++;
  try {
    var o;
    return (e != null && (o = e.apply(this, a)), o);
  } finally {
    (t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (u) {
          u.apply(r, a);
        }));
  }
}
function Qc(e, t) {
  var r = function () {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
    Xc.call.apply(Xc, [this, e, t].concat(i));
  };
  return r;
}
function B_(e, t, r) {
  var n = z_(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[Jv])) {
    var i = e[t],
      o = Xv(e, t, a ? a.enumerable : void 0, n, i);
    Object.defineProperty(e, t, o);
  }
}
function Xv(e, t, r, n, a) {
  var i,
    o = Qc(a, n);
  return (
    (i = {}),
    (i[Jv] = !0),
    (i.get = function () {
      return o;
    }),
    (i.set = function (s) {
      if (this === e) o = Qc(s, n);
      else {
        var c = Xv(this, t, r, n, s);
        Object.defineProperty(this, t, c);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = r),
    i
  );
}
var Zc = Symbol("ObserverAdministration"),
  el = Symbol("isMobXReactObserver");
function ms(e) {
  var t;
  return (t = e[Zc]) != null
    ? t
    : (e[Zc] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: ws(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function q_(e) {
  var t = e.prototype;
  if (e[el]) {
    var r = ws(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[el] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== _.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = tl;
    else if (t.shouldComponentUpdate !== tl)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = ws(e);
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
        value: U_.call(this, n),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        u = ms(this);
      return (
        (u.mounted = !0),
        ma.unregister(this),
        (u.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!u.reaction || u.reactionInvalidatedBeforeMount) && u.forceUpdate(),
        i?.apply(this, arguments)
      );
    }),
    B_(t, "componentWillUnmount", function () {
      var o,
        u = ms(this);
      ((o = u.reaction) == null || o.dispose(),
        (u.reaction = null),
        (u.forceUpdate = null),
        (u.mounted = !1),
        (u.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function ws(e) {
  return e.displayName || e.name || "<component>";
}
function U_(e) {
  var t = e.bind(this),
    r = ms(this);
  function n() {
    r.reaction || ((r.reaction = V_(r)), r.mounted || ma.register(this, r, this));
    var a = void 0,
      i = void 0;
    if (
      (r.reaction.track(function () {
        try {
          i = Ab(!1, t);
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
function V_(e) {
  return new Pt(e.name + ".render()", function () {
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
function tl(e, t) {
  return this.state !== t ? !0 : !$_(this.props, e);
}
function Gi(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(_.Component, e) ||
    Object.prototype.isPrototypeOf.call(_.PureComponent, e)
      ? q_(e)
      : L_(e)
  );
}
function ks() {
  return (
    (ks = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ks.apply(null, arguments)
  );
}
function G_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var H_ = ["children"],
  rl = O.createContext({});
function Qv(e) {
  var t = e.children,
    r = G_(e, H_),
    n = O.useContext(rl),
    a = O.useRef(ks({}, n, r)),
    i = a.current;
  return O.createElement(rl.Provider, { value: i }, t);
}
Qv.displayName = "MobXProvider";
O.version.split(".")[0];
if (!_.Component) throw new Error("mobx-react requires React to be available");
if (!se) throw new Error("mobx-react requires mobx to be available");
var W_ = Object.defineProperty,
  K_ = Object.getOwnPropertyDescriptor,
  It = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? K_(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && W_(t, r, a), a);
  };
class gt {
  constructor() {
    ((this.isLoading = !1), Hs(this));
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
It([se], gt.prototype, "isLoading", 2);
It([se], gt.prototype, "plan", 2);
It([se], gt.prototype, "planString", 2);
It([se], gt.prototype, "slowQueries", 2);
It([se], gt.prototype, "history", 2);
It([et.bound], gt.prototype, "showPlan", 1);
It([et.bound], gt.prototype, "saveSlowQuery", 1);
It([et.bound], gt.prototype, "saveHistory", 1);
It([et], gt.prototype, "loading", 1);
It([et], gt.prototype, "stopLoading", 1);
const Y_ = new gt();
var J_ = Object.defineProperty,
  X_ = Object.getOwnPropertyDescriptor,
  Js = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? X_(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && J_(t, r, a), a);
  };
class Hi {
  constructor() {
    ((this.state = "ROOT"), (this.lastState = "ROOT"), Hs(this));
  }
  saveState(t) {
    ((this.lastState = this.state), (this.state = t));
  }
}
Js([se], Hi.prototype, "state", 2);
Js([se], Hi.prototype, "lastState", 2);
Js([et.bound], Hi.prototype, "saveState", 1);
const Xs = new Hi();
class Q_ {
  constructor() {
    ((this.usersStore = Y_), (this.stateStore = Xs));
  }
}
const Zv = new Q_(),
  Z_ = _.createContext(Zv),
  Wi = () => _.useContext(Z_);
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
function ep(e) {
  var t = ey(e, "string");
  return je(t) == "symbol" ? t : t + "";
}
function nl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, ep(n.key), n));
  }
}
function ve(e, t, r) {
  return (
    t && nl(e.prototype, t),
    r && nl(e, r),
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
function wa(e, t) {
  return (
    (wa = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    wa(e, t)
  );
}
function qe(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && wa(e, t));
}
function x(e, t, r) {
  return (
    (t = ep(t)) in e
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
      a,
      i,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((i = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (l) {
      ((c = !0), (a = l));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function Os(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function tp(e, t) {
  if (e) {
    if (typeof e == "string") return Os(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Os(e, t)
          : void 0
    );
  }
}
function ay() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(e, t) {
  return ry(e) || ny(e, t) || tp(e, t) || ay();
}
var rp = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  iy = function (t) {
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
  ki = function (t, r) {
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
  oy = function (t, r, n) {
    return t ? { width: r } : {};
  },
  al = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  sy = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      i = t.destination,
      o = t.sourceIndex;
    if (!i) return r;
    var u = al(o, n, a),
      s = al(i.index, n, a),
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
  il = {},
  ly = function (t, r, n) {
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
        u = document.querySelector("meta[property=csp-nonce]"),
        s = u?.nonce || u?.getAttribute("nonce");
      a = c(
        r.map((l) => {
          if (((l = cy(l, n)), l in il)) return;
          il[l] = !0;
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
    function i(o) {
      const u = new Event("vite:preloadError", { cancelable: !0 });
      if (((u.payload = o), window.dispatchEvent(u), !u.defaultPrevented)) throw o;
    }
    return a.then((o) => {
      for (const u of o || []) u.status === "rejected" && i(u.reason);
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
function ae(e, t) {
  if (e == null) return {};
  var r,
    n,
    a = dy(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      ((r = i[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
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
function Do(e) {
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
var fy = (function () {
  function e(t) {
    var r = this;
    (fe(this, e),
      x(this, "_isAnalyticsEvent", !0),
      x(this, "clone", function () {
        var n = Do({}, r.payload);
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
          je(r) === "object" && (this.payload = Do(Do({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function vy(e) {
  if (Array.isArray(e)) return Os(e);
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
  return vy(e) || py(e) || tp(e) || hy();
}
function gy(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Y(e)) !== null; );
  return e;
}
function Oi() {
  return (
    (Oi =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = gy(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    Oi.apply(null, arguments)
  );
}
function by(e, t, r) {
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
function _y(e, t, r, n) {
  var a = Oi(Y(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var yy = (function (e) {
    function t(r) {
      var n;
      return (
        fe(this, t),
        (n = by(this, t, [r])),
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
      qe(t, e),
      ve(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : _y(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(fy),
  my = _.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  wy = function () {
    return _.useContext(my);
  },
  Si = function (t) {
    var r = _.useRef(t);
    return ((r.current = t), r);
  };
function ky(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Oy(e, t) {
  var r = _.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = _.useRef(!0),
    a = _.useRef(r),
    i = n.current || !!(t && a.current.inputs && ky(t, a.current.inputs)),
    o = i ? a.current : { inputs: t, result: e() };
  return (
    _.useEffect(
      function () {
        ((n.current = !1), (a.current = o));
      },
      [o],
    ),
    o.result
  );
}
function Sy(e, t) {
  return Oy(function () {
    return e;
  }, t);
}
function ap() {
  var e = wy(),
    t = Sy(
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
function sl(e, t) {
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
function Ey(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ka(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    i = e.packageName,
    o = e.packageVersion,
    u = e.analyticsData,
    s = ap(),
    c = s.createAnalyticsEvent,
    l = Si(u),
    d = Si(t),
    f = _.useCallback(
      function (h) {
        var v = c({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: i, packageVersion: o },
          }),
          p = Ey({ componentName: n, packageName: i, packageVersion: o }, l.current);
        v.context.push(p);
        var g = v.clone();
        (g && g.fire("atlaskit"), d.current(h, v));
      },
      [r, n, a, i, o, c, l, d],
    );
  return f;
}
function ul(e, t) {
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
function xy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ul(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ul(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function cl(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    i = e.packageVersion,
    o = e.analyticsData,
    u = ap(),
    s = u.createAnalyticsEvent,
    c = Si(o),
    l = Si(t),
    d = _.useCallback(
      function () {
        var f = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: i },
          }),
          h = xy({ componentName: n, packageName: a, packageVersion: i }, c.current);
        f.context.push(h);
        var v = f.clone();
        (v && v.fire("atlaskit"), l.current(f));
      },
      [r, n, a, i, s, c, l],
    );
  return d;
}
var yr = "ASC",
  Ei = "DESC",
  Cy = "small",
  xi = "large",
  ip = 0.22;
const Ry = 5;
function R(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const i of a) {
      const o = i.startsWith("_") ? i.slice(0, Ry) : i;
      t[o] = i;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function op(e, t, r) {
  return e ?? "var(--c-, )";
}
var Py = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  Ay = _.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      i = e.testId,
      o = e.isLoading,
      u = ae(e, Py);
    return _.createElement(
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
        u,
        {
          "data-testid": i && "".concat(i, "--table"),
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
  jy = function (t) {
    var r = t.children;
    return _.createElement(
      "caption",
      { className: R(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  Iy = function (t) {
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
  Dy = function (t) {
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
  Ty = function (t) {
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
  My = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function ll(e, t) {
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
function dl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ll(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ll(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ly(e, t, r) {
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
var fl = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var i;
      if (r.cells[a] && ((i = r.cells[a]) === null || i === void 0 ? void 0 : i.key) === n) {
        var o;
        return (o = t[a]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  Fy = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var i = a === yr ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      u = Array.from(r);
    return u.sort(function (s, c) {
      var l = fl(s.cells, t, n),
        d = fl(c.cells, t, n);
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
function Ny(e) {
  var t = (function (r) {
    function n() {
      var a;
      fe(this, n);
      for (var i = arguments.length, o = new Array(i), u = 0; u < i; u++) o[u] = arguments[u];
      return ((a = Ly(this, n, [].concat(o))), x(a, "state", { pageRows: [] }), a);
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
              var u = i.forwardedRef,
                s = ae(i, My);
              return O.createElement(
                e,
                te({ pageRows: this.state.pageRows, head: o }, s, { ref: u }),
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (i, o) {
              var u = i.rows,
                s = i.head,
                c = i.sortKey,
                l = i.sortOrder,
                d = i.page,
                f = i.rowsPerPage,
                h = i.isTotalPagesControlledExternally;
              ki(c, s);
              var v, p;
              return (
                h ? ((v = u), (p = u)) : ((v = Fy(s, u, c, l) || []), (p = rp(v, d, f))),
                dl(dl({}, o), {}, { pageRows: p })
              );
            },
          },
        ],
      )
    );
  })(O.Component);
  return O.forwardRef(function (r, n) {
    return O.createElement(t, te({}, r, { forwardedRef: n }));
  });
}
var $y = "--local-dynamic-table-width",
  up = function (t) {
    var r = t.width;
    return typeof r < "u" ? x({}, $y, "".concat(r, "%")) : void 0;
  },
  zy = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  By = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      i = t.innerRef,
      o = ae(t, zy);
    return _.createElement(
      "td",
      te(
        {
          style: up({ width: r }),
          ref: i,
          className: R([
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
  qy = ["isHighlighted", "children", "style", "testId", "className"],
  Uy = _.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      i = e.testId,
      o = e.className,
      u = ae(e, qy);
    return _.createElement(
      "tr",
      te(
        {
          style: a,
          className: R([
            "_bfhkqtfy _1ygbsglb _1ah312gs",
            r ? "_bfhktkjs _irr31ae3" : "_irr3s8ts",
            o,
          ]),
        },
        u,
        { ref: t, "data-testid": i },
      ),
      n,
    );
  }),
  Vy = ["cells"],
  Gy = ["content", "testId"],
  Hy = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      i = t.isFixedSize,
      o = t.isHighlighted,
      u = r.cells,
      s = ae(r, Vy);
    return O.createElement(
      Uy,
      te(
        {},
        s,
        { isHighlighted: o },
        o ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(s.key)) },
      ),
      u.map(function (c, l) {
        var d = c.content,
          f = c.testId,
          h = ae(c, Gy),
          v = (n || { cells: [] }).cells[l] || {},
          p = v.shouldTruncate,
          g = v.width;
        return O.createElement(
          By,
          te({ "data-testid": f || (a && "".concat(a, "--cell-").concat(l)) }, h, {
            isFixedSize: i,
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
    Be(e, cp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function cp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (cp = function () {
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
              a = n.pageRows,
              i = n.head,
              o = n.isFixedSize,
              u = n.highlightedRowIndex,
              s = n.testId,
              c = n.forwardedRef;
            return O.createElement(
              "tbody",
              { "data-testid": s && "".concat(s, "--body"), ref: c },
              a.map(function (l, d) {
                return O.createElement(Hy, {
                  head: i,
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
  })(O.Component),
  Yy = Ny(
    O.forwardRef(function (e, t) {
      return O.createElement(Ky, te({}, e, { forwardedRef: t }));
    }),
  );
function Jy(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, lp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function lp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (lp = function () {
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
})(O.Component);
const Qs = _.createContext(null);
var vl = "#FF5630",
  pl = "#DE350B",
  Ar = "#BF2600",
  hl = "#FFC400",
  gl = "#FFAB00",
  jr = "#FF991F",
  Qy = "#DEEBFF",
  Wa = "#B3D4FF",
  bl = "#4C9AFF",
  _l = "#2684FF",
  yl = "#0065FF",
  Ir = "#0052CC",
  ml = "#0747A6",
  Xt = "#FFFFFF",
  xe = "#F4F5F7",
  cr = "#A5ADBA",
  Zy = "#8993A4",
  em = "#6B778C",
  tm = "#505F79",
  Oa = "#42526E",
  We = "#253858",
  Dr = "#172B4D",
  Nn = "rgba(9, 30, 66, 0.04)",
  wl = "rgba(9, 30, 66, 0.08)",
  ut = "#9FB0CC",
  rm = "#8C9CB8",
  To = "#67758F",
  $n = "#3B475C",
  kl = "#313D52",
  zn = "#1B2638",
  Tr = "#0D1424",
  nm = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function am(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(Oa, ")")
    : "var(--ds-icon-inverse, ".concat(Xt, ")");
}
var Ka = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  im = typeof window > "u" ? _.useEffect : _.useLayoutEffect,
  dp = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "inherit" : n,
        i = t.delay,
        o = i === void 0 ? 0 : i,
        u = t.interactionName,
        s = t.label,
        c = t.size,
        l = c === void 0 ? "medium" : c,
        d = t.testId,
        f = typeof l == "number" ? l : nm[l],
        h = "".concat(o, "ms"),
        v = am(a),
        p = _.useContext(Qs);
      return (
        im(
          function () {
            if (p != null) return p.hold(u);
          },
          [p, u],
        ),
        O.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: h, width: f, height: f },
            className: R([Ka.wrapperStyles, Ka.rotateStyles]),
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
              style: { animationDelay: h },
              role: s ? "img" : "none",
              className: R([Ka.loadInStyles]),
            },
            O.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: v },
              className: R([Ka.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function Ol(e, t) {
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
function Sl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ol(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ol(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var El = "--contents-opacity",
  om = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: R(["_kqswh2mm"]) },
      r,
    );
  },
  sm = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: R(["_tzy47hfw _lcxvglyw"]),
        style: Sl(Sl({}, x({}, El, n)), {}, { "--_cnddr8": op("var(".concat(El, ")")) }),
      },
      r,
    );
  },
  um = function (t) {
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
function cm(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, fp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function fp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (fp = function () {
    return !!e;
  })();
}
var vp = (function (e) {
  function t() {
    return (fe(this, t), cm(this, t, arguments));
  }
  return (
    qe(t, e),
    ve(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            a = n.children,
            i = n.isLoading,
            o = n.spinnerSize,
            u = n.contentsOpacity,
            s = n.testId,
            c = n.loadingLabel;
          return O.createElement(
            om,
            { testId: s },
            i ? O.createElement(sm, { contentsOpacity: u, testId: s }, a) : a,
            i &&
              O.createElement(
                um,
                { testId: s },
                O.createElement(dp, {
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
})(O.Component);
x(vp, "defaultProps", {
  isLoading: !0,
  spinnerSize: xi,
  contentsOpacity: ip,
  loadingLabel: "Loading table",
});
var lm = ["children", "testId"],
  dm = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = ae(e, lm);
    return _.createElement(
      "div",
      te({}, a, { "data-testid": n, ref: t, className: R(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  fm = function (t) {
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
  vm = _.forwardRef(function (e, t) {
    var r = e.children;
    return _.createElement("div", { ref: t, className: R(["_kqswh2mm _152tidpf"]) }, r);
  });
function pm(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, pp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function pp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (pp = function () {
    return !!e;
  })();
}
var hp = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = pm(this, t, [].concat(a))),
      x(r, "spinnerRef", O.createRef()),
      x(r, "containerRef", O.createRef()),
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
            a,
            i = window.innerHeight,
            o = this.getTargetNode(),
            u = (n = this.spinnerRef) === null || n === void 0 ? void 0 : n.current;
          if (!(!o || typeof o.getBoundingClientRect != "function" || !u)) {
            var s = o.getBoundingClientRect(),
              c = u.getBoundingClientRect(),
              l = c.height,
              d = this.isVerticallyVisible(s, i),
              f = s.top,
              h = s.bottom,
              v = s.height;
            if (d) {
              var p = v >= l * 3;
              if (p && !this.isFullyVerticallyVisible(s, i)) {
                if (f >= 0) {
                  var g = i - f,
                    b = g / 2 + f - l / 2,
                    m = g < l * 3 ? f + l : b;
                  this.translateSpinner(u, m, !0);
                } else if (f < 0 && h > i) {
                  var w = i / 2 - l / 2;
                  this.translateSpinner(u, w, !0);
                } else {
                  var k = h / 2 - l / 2,
                    y = k < l ? k - (l - k) : k;
                  this.translateSpinner(u, y, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(c, i)) return;
            var S = (a = this.containerRef) === null || a === void 0 ? void 0 : a.current;
            if (S && typeof S.getBoundingClientRect == "function") {
              var C = S.getBoundingClientRect().top,
                I = (f - C) / 2;
              this.translateSpinner(u, I, !1);
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
            u = n.testId,
            s = n.loadingLabel;
          return O.createElement(
            dm,
            { testId: u && "".concat(u, "--loading--container--advanced"), ref: this.containerRef },
            a,
            i &&
              O.createElement(
                fm,
                { testId: u },
                O.createElement(
                  vm,
                  { ref: this.spinnerRef },
                  O.createElement(dp, {
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
})(O.Component);
x(hp, "defaultProps", {
  isLoading: !0,
  spinnerSize: xi,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(ip), ")"),
  loadingLabel: "Loading table",
});
function hm(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = _.useState(t),
    a = K(n, 2),
    i = a[0],
    o = a[1],
    u = _.useRef(r);
  _.useEffect(
    function () {
      u.current = r;
    },
    [r],
  );
  var s = r ? e : i,
    c = _.useCallback(function (l) {
      u.current || o(l);
    }, []);
  return [s, c];
}
var Bn = {},
  qn = {};
function xl(e, t, r, n, a, i, o) {
  try {
    var u = e[i](o),
      s = u.value;
  } catch (c) {
    return void r(c);
  }
  u.done ? t(s) : Promise.resolve(s).then(n, a);
}
function de(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, a) {
      var i = e.apply(t, r);
      function o(s) {
        xl(i, n, a, o, u, "next", s);
      }
      function u(s) {
        xl(i, n, a, o, u, "throw", s);
      }
      o(void 0);
    });
  };
}
var Mo = { exports: {} },
  Lo = { exports: {} },
  Cl;
function gp() {
  return (
    Cl ||
      ((Cl = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Lo)),
    Lo.exports
  );
}
var Fo = { exports: {} },
  No = { exports: {} },
  Rl;
function bp() {
  return (
    Rl ||
      ((Rl = 1),
      (function (e) {
        function t(r, n, a, i) {
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
            t(r, n, a, i));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(No)),
    No.exports
  );
}
var Pl;
function _p() {
  return (
    Pl ||
      ((Pl = 1),
      (function (e) {
        var t = bp();
        function r() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var n,
            a,
            i = typeof Symbol == "function" ? Symbol : {},
            o = i.iterator || "@@iterator",
            u = i.toStringTag || "@@toStringTag";
          function s(g, b, m, w) {
            var k = b && b.prototype instanceof l ? b : l,
              y = Object.create(k.prototype);
            return (
              t(
                y,
                "_invoke",
                (function (S, C, I) {
                  var T,
                    P,
                    M,
                    B = 0,
                    z = I || [],
                    V = !1,
                    J = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: G,
                      f: G.bind(n, 4),
                      d: function (X, N) {
                        return ((T = X), (P = 0), (M = n), (J.n = N), c);
                      },
                    };
                  function G(U, X) {
                    for (P = U, M = X, a = 0; !V && B && !N && a < z.length; a++) {
                      var N,
                        j = z[a],
                        be = J.p,
                        oe = j[2];
                      U > 3
                        ? (N = oe === X) &&
                          ((M = j[(P = j[4]) ? 5 : ((P = 3), 3)]), (j[4] = j[5] = n))
                        : j[0] <= be &&
                          ((N = U < 2 && be < j[1])
                            ? ((P = 0), (J.v = X), (J.n = j[1]))
                            : be < oe &&
                              (N = U < 3 || j[0] > X || X > oe) &&
                              ((j[4] = U), (j[5] = X), (J.n = oe), (P = 0)));
                    }
                    if (N || U > 1) return c;
                    throw ((V = !0), X);
                  }
                  return function (U, X, N) {
                    if (B > 1) throw TypeError("Generator is already running");
                    for (V && X === 1 && G(X, N), P = X, M = N; (a = P < 2 ? n : M) || !V; ) {
                      T || (P ? (P < 3 ? (P > 1 && (J.n = -1), G(P, M)) : (J.n = M)) : (J.v = M));
                      try {
                        if (((B = 2), T)) {
                          if ((P || (U = "next"), (a = T[U]))) {
                            if (!(a = a.call(T, M)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((M = a.value), P < 2 && (P = 0));
                          } else
                            (P === 1 && (a = T.return) && a.call(T),
                              P < 2 &&
                                ((M = TypeError(
                                  "The iterator does not provide a '" + U + "' method",
                                )),
                                (P = 1)));
                          T = n;
                        } else if ((a = (V = J.n < 0) ? M : S.call(C, J)) !== c) break;
                      } catch (j) {
                        ((T = n), (P = 1), (M = j));
                      } finally {
                        B = 1;
                      }
                    }
                    return { value: a, done: V };
                  };
                })(g, m, w),
                !0,
              ),
              y
            );
          }
          var c = {};
          function l() {}
          function d() {}
          function f() {}
          a = Object.getPrototypeOf;
          var h = [][o]
              ? a(a([][o]()))
              : (t((a = {}), o, function () {
                  return this;
                }),
                a),
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
      })(Fo)),
    Fo.exports
  );
}
var $o = { exports: {} },
  zo = { exports: {} },
  Bo = { exports: {} },
  Al;
function yp() {
  return (
    Al ||
      ((Al = 1),
      (function (e) {
        var t = gp(),
          r = bp();
        function n(a, i) {
          function o(s, c, l, d) {
            try {
              var f = a[s](c),
                h = f.value;
              return h instanceof t
                ? i.resolve(h.v).then(
                    function (v) {
                      o("next", v, l, d);
                    },
                    function (v) {
                      o("throw", v, l, d);
                    },
                  )
                : i.resolve(h).then(
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
                  return new i(function (f, h) {
                    o(s, l, f, h);
                  });
                }
                return (u = u ? u.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Bo)),
    Bo.exports
  );
}
var jl;
function mp() {
  return (
    jl ||
      ((jl = 1),
      (function (e) {
        var t = _p(),
          r = yp();
        function n(a, i, o, u, s) {
          return new r(t().w(a, i, o, u), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(zo)),
    zo.exports
  );
}
var Il;
function gm() {
  return (
    Il ||
      ((Il = 1),
      (function (e) {
        var t = mp();
        function r(n, a, i, o, u) {
          var s = t(n, a, i, o, u);
          return s.next().then(function (c) {
            return c.done ? c.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })($o)),
    $o.exports
  );
}
var qo = { exports: {} },
  Dl;
function bm() {
  return (
    Dl ||
      ((Dl = 1),
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
      })(qo)),
    qo.exports
  );
}
var Uo = { exports: {} },
  Vo = { exports: {} },
  Tl;
function _m() {
  return (
    Tl ||
      ((Tl = 1),
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
      })(Vo)),
    Vo.exports
  );
}
var Ml;
function ym() {
  return (
    Ml ||
      ((Ml = 1),
      (function (e) {
        var t = _m().default;
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
      })(Uo)),
    Uo.exports
  );
}
var Ll;
function mm() {
  return (
    Ll ||
      ((Ll = 1),
      (function (e) {
        var t = gp(),
          r = _p(),
          n = gm(),
          a = mp(),
          i = yp(),
          o = bm(),
          u = ym();
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
                    return b(m.a, h[k], y);
                  },
                  delegateYield: function (k, y, S) {
                    return ((g.resultName = y), b(m.d, u(k), S));
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
                return p.call(this, g);
              } finally {
                ((m.p = g.prev), (m.n = g.next));
              }
            };
          }
          return ((e.exports = s =
            function () {
              return {
                wrap: function (b, m, w, k) {
                  return c.w(v(b), m, w, k && k.reverse());
                },
                isGeneratorFunction: f,
                mark: c.m,
                awrap: function (b, m) {
                  return new t(b, m);
                },
                AsyncIterator: i,
                async: function (b, m, w, k, y) {
                  return (f(m) ? a : n)(v(b), m, w, k, y);
                },
                keys: o,
                values: u,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Mo)),
    Mo.exports
  );
}
var Go, Fl;
function wm() {
  if (Fl) return Go;
  Fl = 1;
  var e = mm()();
  Go = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return Go;
}
var km = wm();
const $ = rr(km);
var lr = {},
  Mr = {},
  Ya = {},
  Un = {},
  Nl;
function Om() {
  if (Nl) return Un;
  ((Nl = 1),
    Object.defineProperty(Un, "__esModule", { value: !0 }),
    (Un.V1InitializeContainer = void 0));
  const e = Rt();
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
      var i, o;
      return n &&
        (o = (i = n[a]) !== null && i !== void 0 ? i : n[(0, e._DJB2)(a)]) !== null &&
        o !== void 0
        ? o
        : null;
    }
  };
  return ((Un.V1InitializeContainer = t), Un);
}
var Vn = {},
  $l;
function Sm() {
  if ($l) return Vn;
  (($l = 1),
    Object.defineProperty(Vn, "__esModule", { value: !0 }),
    (Vn.V2InitializeContainer = void 0));
  const e = Rt();
  let t = class {
    constructor(n) {
      this._values = n;
    }
    getGate(n) {
      var a, i, o;
      const u = this._getResultFromLookup(this._values.feature_gates, n);
      return u
        ? {
            name: n,
            value: u.v === !0,
            rule_id: (a = u.r) !== null && a !== void 0 ? a : "default",
            secondary_exposures: (i = u.s) !== null && i !== void 0 ? i : [],
            id_type: (o = u.i) !== null && o !== void 0 ? o : "",
          }
        : null;
    }
    getConfig(n) {
      var a, i, o, u;
      const s = this._getResultFromLookup(this._values.dynamic_configs, n);
      return s
        ? {
            name: n,
            value: (a = this._values.values[s.v]) !== null && a !== void 0 ? a : {},
            rule_id: s.r,
            secondary_exposures: (i = s.s) !== null && i !== void 0 ? i : [],
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
      var a, i, o, u, s, c;
      const l = this._getResultFromLookup(this._values.layer_configs, n);
      return l
        ? {
            name: n,
            value: (a = this._values.values[l.v]) !== null && a !== void 0 ? a : {},
            rule_id: l.r,
            secondary_exposures: (i = l.s) !== null && i !== void 0 ? i : [],
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
    _getResultFromLookup(n, a) {
      var i, o;
      return n &&
        (o = (i = n[a]) !== null && i !== void 0 ? i : n[(0, e._DJB2)(a)]) !== null &&
        o !== void 0
        ? o
        : null;
    }
  };
  return ((Vn.V2InitializeContainer = t), Vn);
}
var zl;
function Em() {
  if (zl) return Ya;
  ((zl = 1), Object.defineProperty(Ya, "__esModule", { value: !0 }));
  const e = Rt(),
    t = Om(),
    r = Sm();
  let n = class {
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
    setValues(i, o) {
      var u, s;
      if (!i) return !1;
      const c = (0, e._typedJsonParse)(i.data, "has_updates", "EvaluationResponse");
      return c == null
        ? !1
        : ((this._source = i.source),
          c?.has_updates !== !0 ||
            ((u = c.time) !== null && u !== void 0 ? u : 0) < this._lcut ||
            ((this._rawValues = i.data),
            (this._lcut = c.time),
            (this._receivedAt = i.receivedAt),
            c.response_format === "init-v2"
              ? (this._values = new r.V2InitializeContainer(c))
              : (this._values = new t.V1InitializeContainer(c)),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(i.source, c)),
            i.source && c.user && this._setWarningState(o, c),
            e.SDKFlags.setFlags(this._sdkKey, (s = c.sdk_flags) !== null && s !== void 0 ? s : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(i) {
      const o = this._values ? this._values.getGate(i) : null;
      return this._getDetailedStoreResult(o);
    }
    getConfig(i) {
      const o = this._values ? this._values.getConfig(i) : null;
      return this._getDetailedStoreResult(o);
    }
    getConfigList() {
      return this._values ? this._values.getConfigList() : [];
    }
    getLayer(i) {
      const o = this._values ? this._values.getLayer(i) : null;
      return this._getDetailedStoreResult(o);
    }
    getParamStore(i) {
      const o = this._values ? this._values.getParamStore(i) : null;
      return this._getDetailedStoreResult(o);
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var i;
      return (i = this._values) === null || i === void 0 ? void 0 : i.getExposureMapping();
    }
    _extractBootstrapMetadata(i, o) {
      if (i !== "Bootstrap") return null;
      const u = {};
      return (
        o.user && (u.user = o.user),
        o.sdkInfo && (u.generatorSDKInfo = o.sdkInfo),
        (u.lcut = o.time),
        u
      );
    }
    _getDetailedStoreResult(i) {
      return { result: i, details: this._getDetails(i == null) };
    }
    _setWarningState(i, o) {
      var u, s;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((u = i.customIDs) === null || u === void 0 ? void 0 : u.stableID) !== c &&
        ((!((s = i.customIDs) === null || s === void 0) && s.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in o) {
        const l = o.user,
          d = Object.assign(Object.assign({}, i), {
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
      const i = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (i.warnings = Array.from(this._warnings)), i);
    }
    _getDetails(i) {
      var o, u;
      const s = this.getCurrentSourceDetails();
      let c = s.reason;
      const l = (o = s.warnings) !== null && o !== void 0 ? o : [];
      (this._source === "Bootstrap" && l.length > 0 && (c = c + l[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${i ? "Unrecognized" : "Recognized"}`));
      const d =
        this._source === "Bootstrap" && (u = this._bootstrapMetadata) !== null && u !== void 0
          ? u
          : void 0;
      return (d && (s.bootstrapMetadata = d), Object.assign(Object.assign({}, s), { reason: c }));
    }
  };
  return ((Ya.default = n), Ya);
}
var Lr = {},
  Gn = {},
  Bl;
function xm() {
  if (Bl) return Gn;
  ((Bl = 1),
    Object.defineProperty(Gn, "__esModule", { value: !0 }),
    (Gn._resolveDeltasResponse = void 0));
  const e = Rt(),
    t = 2;
  function r(o, u) {
    const s = (0, e._typedJsonParse)(u, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const c = n(o, s),
      l = a(c),
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
  Gn._resolveDeltasResponse = r;
  function n(o, u) {
    return Object.assign(Object.assign(Object.assign({}, o), u), {
      feature_gates: Object.assign(Object.assign({}, o.feature_gates), u.feature_gates),
      layer_configs: Object.assign(Object.assign({}, o.layer_configs), u.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, o.dynamic_configs), u.dynamic_configs),
    });
  }
  function a(o) {
    const u = o;
    return (
      i(o.deleted_gates, u.feature_gates),
      delete u.deleted_gates,
      i(o.deleted_configs, u.dynamic_configs),
      delete u.deleted_configs,
      i(o.deleted_layers, u.layer_configs),
      delete u.deleted_layers,
      u
    );
  }
  function i(o, u) {
    o?.forEach((s) => {
      delete u[s];
    });
  }
  return Gn;
}
var ql;
function wp() {
  if (ql) return Lr;
  ql = 1;
  var e =
    (Lr && Lr.__awaiter) ||
    function (a, i, o, u) {
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
        h((u = u.apply(a, i || [])).next());
      });
    };
  Object.defineProperty(Lr, "__esModule", { value: !0 });
  const t = Rt(),
    r = xm();
  class n extends t.NetworkCore {
    constructor(i, o) {
      super(i, o);
      const u = i?.networkConfig;
      ((this._option = i),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          u?.initializeUrl,
          u?.api,
          u?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(i, o, u, s, c) {
      return e(this, void 0, void 0, function* () {
        var l, d, f, h, v, p;
        const g = o ? (0, t._typedJsonParse)(o, "has_updates", "InitializeResponse") : null;
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
            ((p =
              (v = (h = this._option) === null || h === void 0 ? void 0 : h.networkConfig) ===
                null || v === void 0
                ? void 0
                : v.initializeHashAlgorithm) !== null && p !== void 0
              ? p
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: c && !m ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && c ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: m ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(i, g, b, u);
      });
    }
    _fetchEvaluations(i, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c, l;
        const d = yield this.post({
          sdkKey: i,
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
              i,
              o,
              Object.assign(Object.assign(Object.assign({}, u), f), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((Lr.default = n), Lr);
}
var Hn = {},
  Ul;
function Cm() {
  if (Ul) return Hn;
  ((Ul = 1),
    Object.defineProperty(Hn, "__esModule", { value: !0 }),
    (Hn._makeParamStoreGetter = void 0));
  const e = Rt(),
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
          return a(p);
        case "gate":
          return i(l, p, f);
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
  return ((Hn._makeParamStoreGetter = c), Hn);
}
var dr = {},
  Vl;
function Rm() {
  if (Vl) return dr;
  Vl = 1;
  var e =
    (dr && dr.__awaiter) ||
    function (a, i, o, u) {
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
        h((u = u.apply(a, i || [])).next());
      });
    };
  (Object.defineProperty(dr, "__esModule", { value: !0 }),
    (dr.StatsigEvaluationsDataAdapter = void 0));
  const t = Rt(),
    r = wp();
  let n = class extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(i, o, u) {
      (super.attach(i, o, u),
        u !== null && u instanceof r.default
          ? (this._network = u)
          : (this._network = new r.default(o ?? {})));
    }
    getDataAsync(i, o, u) {
      return this._getDataAsyncImpl(i, (0, t._normalizeUser)(o, this._options), u);
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
    _fetchFromNetwork(i, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c;
        const l = yield (c = this._network) === null || c === void 0
          ? void 0
          : c.fetchEvaluations(this._getSdkKey(), i, u?.priority, o, s);
        return l ?? null;
      });
    }
    _getCacheKey(i) {
      var o;
      const u = (0, t._getStorageKey)(
        this._getSdkKey(),
        i,
        (o = this._options) === null || o === void 0 ? void 0 : o.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${u}`;
    }
    _isCachedResultValidFor204(i, o) {
      return i.fullUserHash != null && i.fullUserHash === (0, t._getFullUserHash)(o);
    }
  };
  return ((dr.StatsigEvaluationsDataAdapter = n), dr);
}
var Gl;
function Pm() {
  if (Gl) return Mr;
  Gl = 1;
  var e =
    (Mr && Mr.__awaiter) ||
    function (u, s, c, l) {
      function d(f) {
        return f instanceof c
          ? f
          : new c(function (h) {
              h(f);
            });
      }
      return new (c || (c = Promise))(function (f, h) {
        function v(b) {
          try {
            g(l.next(b));
          } catch (m) {
            h(m);
          }
        }
        function p(b) {
          try {
            g(l.throw(b));
          } catch (m) {
            h(m);
          }
        }
        function g(b) {
          b.done ? f(b.value) : d(b.value).then(v, p);
        }
        g((l = l.apply(u, s || [])).next());
      });
    };
  Object.defineProperty(Mr, "__esModule", { value: !0 });
  const t = Rt(),
    r = Em(),
    n = wp(),
    a = Cm(),
    i = Rm();
  let o = class Ss extends t.StatsigClientBase {
    static instance(s) {
      const c = (0, t._getStatsigGlobal)().instance(s);
      return c instanceof Ss
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Ss(s ?? "", {}));
    }
    constructor(s, c, l = null) {
      var d, f;
      t.SDKType._setClientType(s, "javascript-client");
      const h = new n.default(l, (p) => {
        this.$emt(p);
      });
      (super(
        s,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new i.StatsigEvaluationsDataAdapter(),
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
      const b =
          (h =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || h === void 0
            ? void 0
            : h.call(f, g, this._user, c),
        m = b ?? g;
      return (
        this._enqueueExposure(
          s,
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
      const b = (0, t._mergeOverride)(
        p,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : p.__value,
        (m) => {
          c?.disableExposureLog ||
            this._enqueueExposure(
              s,
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
    _getParameterStoreImpl(s, c) {
      var l, d;
      const { result: f, details: h } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const v = {
          name: s,
          details: h,
          __configuration: f,
          get: (0, a._makeParamStoreGetter)(this, f, c),
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
          (v.get = (0, a._makeParamStoreGetter)(this, p.config, c))),
        v
      );
    }
  };
  return ((Mr.default = o), Mr);
}
var Hl;
function Am() {
  return (
    Hl ||
      ((Hl = 1),
      (function (e) {
        var t =
            (lr && lr.__createBinding) ||
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
            (lr && lr.__exportStar) ||
            function (o, u) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(u, s) && t(u, o, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Rt(),
          a = Pm();
        ((e.StatsigClient = a.default), r(Rt(), e));
        const i = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = i;
      })(lr)),
    lr
  );
}
var ct = Am(),
  Ho = { exports: {} },
  Wl;
function jm() {
  return (
    Wl ||
      ((Wl = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function a(s, c, l) {
          ((this.fn = s), (this.context = c), (this.once = l || !1));
        }
        function i(s, c, l, d, f) {
          if (typeof l != "function") throw new TypeError("The listener must be a function");
          var h = new a(l, d || s, f),
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
                  return (g.fn.call(g.context, l, d, f, h), !0);
                case 6:
                  return (g.fn.call(g.context, l, d, f, h, v), !0);
              }
              for (w = 1, m = new Array(b - 1); w < b; w++) m[w - 1] = arguments[w];
              g.fn.apply(g.context, m);
            } else {
              var k = g.length,
                y;
              for (w = 0; w < k; w++)
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
                    if (!m) for (y = 1, m = new Array(b - 1); y < b; y++) m[y - 1] = arguments[y];
                    g[w].fn.apply(g[w].context, m);
                }
            }
            return !0;
          }),
          (u.prototype.on = function (c, l, d) {
            return i(this, c, l, d, !1);
          }),
          (u.prototype.once = function (c, l, d) {
            return i(this, c, l, d, !0);
          }),
          (u.prototype.removeListener = function (c, l, d, f) {
            var h = r ? r + c : c;
            if (!this._events[h]) return this;
            if (!l) return (o(this, h), this);
            var v = this._events[h];
            if (v.fn) v.fn === l && (!f || v.once) && (!d || v.context === d) && o(this, h);
            else {
              for (var p = 0, g = [], b = v.length; p < b; p++)
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
      })(Ho)),
    Ho.exports
  );
}
var Im = jm();
const Dm = rr(Im);
function Kl(e, t) {
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
function Yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Kl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ja = "@all-features",
  Tm = (function () {
    function e() {
      (fe(this, e), x(this, "eventToValue", new Map()), (this.emitter = new Dm()));
    }
    return ve(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, i) {
          var o = this,
            u = a(r, Yt(Yt({}, i), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, u);
          var s = function () {
            var l = a(r, Yt(Yt({}, i), {}, { fireGateExposure: !1 })),
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
        value: function (r, n, a, i, o, u) {
          var s = this,
            c = "".concat(r, ".").concat(n),
            l = o(r, n, a, Yt(Yt({}, u), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(i) === void 0 && this.eventToValue.set(i, l);
          var d = function () {
            var h = o(r, n, a, Yt(Yt({}, u), {}, { fireExperimentExposure: !1 })),
              v = s.eventToValue.get(i);
            v !== h && (s.eventToValue.set(i, h), i(h));
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
            this.emitter.on(Ja, r),
            function () {
              n.emitter.off(Ja, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(Ja),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== Ja;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  Mm = "fedramp-moderate";
function Lm() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === Mm;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Zs = (function (e) {
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
  sa = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  Sa = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  Fm = [
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
function Yl(e, t) {
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
function Es(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Yl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Xa = function (t) {
    return Es({ perimeter: Lm() ? Sa.FEDRAMP_MODERATE : Sa.COMMERCIAL }, t);
  },
  Wn = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var i = function (f, h) {
      var v = K(f, 1),
        p = v[0],
        g = K(h, 1),
        b = g[0];
      return p.localeCompare(b);
    };
    (n.sort(i), a.sort(i));
    for (var o = 0; o < n.length; o++) {
      var u = K(n[o], 2),
        s = u[1],
        c = K(a[o], 2),
        l = c[1];
      if (s !== l) return !1;
    }
    return !0;
  },
  Jl = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  Nm = function (t) {
    var r = t.api,
      n = t.disableCurrentPageLogging,
      a = t.loggingIntervalMillis,
      i = t.loggingBufferMaxSize,
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
    var f = ae(t, Fm);
    return Es(
      Es({}, f),
      {},
      {
        networkConfig: {
          api: r,
          logEventUrl: u ? u + "rgstr" : void 0,
          logEventFallbackUrls: s ? [s] : void 0,
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
  $m = Object.entries(Zs).map(function (e) {
    var t = K(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  kp = function (t) {
    var r,
      n,
      a,
      i = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = $m.find(function (o) {
            var u = K(o, 1),
              s = u[0];
            return i.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Zs.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  xs = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  Xl = (function () {
    function e(t, r, n, a) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        u = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (fe(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = i),
        (this._allocatedExperimentName = o),
        (this._evaluationDetails = a),
        (this._onDefaultValueFallback = u));
    }
    return ve(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var i,
              o = this.getValue(r, n);
            if (o == null) return n;
            var u = Array.isArray(n) ? "array" : je(n),
              s = Array.isArray(o) ? "array" : je(o);
            if (a) {
              var c;
              return a(o)
                ? (this.fireExposure(r), o)
                : ((c = this._onDefaultValueFallback) === null ||
                    c === void 0 ||
                    c.call(this, this, r, u, s),
                  n);
            }
            return n == null || u === s
              ? (this.fireExposure(r), o)
              : ((i = this._onDefaultValueFallback) === null ||
                  i === void 0 ||
                  i.call(this, this, r, u, s),
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
                kp(r.details),
                xs(
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
  Ql = (function () {
    function e(t, r, n, a) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        u = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        s = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        c = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (fe(this, e),
        (this._logParameterFunction = i),
        (this._name = t),
        (this._value = JSON.parse(JSON.stringify(r ?? {}))),
        (this._ruleID = n ?? ""),
        (this._evaluationDetails = a),
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
          value: function (r, n, a) {
            var i = this,
              o = this._value[r];
            if (o == null) return n;
            var u = function () {
              return (i._logLayerParameterExposure(r), o);
            };
            return a
              ? a(o)
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
              u,
              s,
              c = new e(
                r.name,
                r.__value,
                r.ruleID,
                kp(r.details),
                function (l, d) {
                  return r.get(d);
                },
                xs(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                xs(
                  (i =
                    (o = r.__evaluation) === null || o === void 0
                      ? void 0
                      : o.undelegated_secondary_exposures) !== null && i !== void 0
                    ? i
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
  Gr = "0.0.0-development";
function zm(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Op() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Op = function () {
    return !!e;
  })();
}
function Bm(e, t, r) {
  if (Op()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && wa(a, r.prototype), a);
}
function Cs(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Cs = function (n) {
      if (n === null || !zm(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return Bm(n, arguments, Y(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        wa(a, n)
      );
    }),
    Cs(e)
  );
}
function qm(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Sp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Sp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Sp = function () {
    return !!e;
  })();
}
var Zl = (function (e) {
  function t(r) {
    return (fe(this, t), qm(this, t, [r]));
  }
  return (qe(t, e), ve(t));
})(Cs(Error));
function ed(e, t) {
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
function Um(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ed(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ed(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Vm = 5e3,
  Gm = "https://api.atlassian.com/flags",
  Hm = "https://api.stg.atlassian.com/flags",
  Wm = "https://api.dev.atlassian.com/flags",
  Km = "https://api.stg.atlassian-us-gov-mod.com/flags",
  Ym = "https://api.atlassian-us-gov-mod.com/flags",
  Jm = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  Xm = "oasis-stg.com/flags",
  Qm = "atlassian-isolated.net/flags",
  Zm = "/gateway/api/flags",
  Wo = (function () {
    function e() {
      fe(this, e);
    }
    return ve(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = de(
            $.mark(function n(a) {
              var i, o;
              return $.wrap(
                function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        return (
                          (i = a.targetApp),
                          (o = "/api/v2/frontend/clientSdkKey/".concat(i)),
                          (s.prev = 2),
                          (s.next = 5),
                          this.fetchRequest(o, "GET", a)
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
            $.mark(function n(a, i, o) {
              var u;
              return $.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          (u = { identifiers: i, customAttributes: o, targetApp: a.targetApp }),
                          (c.prev = 1),
                          (c.next = 4),
                          this.fetchRequest("/api/v2/frontend/experimentValues", "POST", a, u)
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
          var t = de(
            $.mark(function n(a) {
              var i;
              return $.wrap(function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                      if (a.ok) {
                        u.next = 5;
                        break;
                      }
                      return ((u.next = 3), a.text());
                    case 3:
                      throw (
                        (i = u.sent),
                        new Zl(
                          "Non 2xx response status received, status: "
                            .concat(a.status, ", body: ")
                            .concat(JSON.stringify(i)),
                        )
                      );
                    case 5:
                      if (a.status !== 204) {
                        u.next = 7;
                        break;
                      }
                      throw new Zl("Unexpected 204 response");
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
            $.mark(function n(a) {
              var i;
              return $.wrap(function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                      return ((u.next = 2), a.text());
                    case 2:
                      return ((i = u.sent), u.abrupt("return", JSON.parse(i)));
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
            a = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          if (n) return Zm;
          if (a === Sa.FEDRAMP_MODERATE)
            switch (r) {
              case sa.Production:
                return Ym;
              case sa.Staging:
                return Km;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === Sa.COMMERCIAL)
            switch (r) {
              case sa.Development:
                return Wm;
              case sa.Staging:
                var o = this.getApiUrl(i);
                return o !== null ? o : Hm;
              default:
                var u = this.getApiUrl(i);
                return u !== null ? u : Gm;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = de(
            $.mark(function n(a, i, o, u) {
              var s, c, l, d, f;
              return $.wrap(
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
                          (c = o.fetchTimeoutMs || Vm),
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
                            "".concat(s).concat(a),
                            Um(
                              {
                                method: i,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Gr,
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
          if (n === void 0) return r ? Jm.replace("%s", r) : null;
          var a = n.protocol,
            i = n.hostname,
            o = i.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(a, "//api.").concat(o[1], ".").concat(Xm);
          var u = i.match(/([^.]+)\.atlassian-isolated\.net$/);
          return u ? "".concat(a, "//api.").concat(u[1], ".").concat(Qm) : null;
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
function td(e, t) {
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
function Kn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? td(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : td(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function e0(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Ep() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Ep() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ep = function () {
    return !!e;
  })();
}
function t0(e, t, r, n) {
  var a = Oi(Y(e.prototype), t, r);
  return typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var r0 = (function (e) {
  function t() {
    var r;
    return (
      fe(this, t),
      (r = e0(this, t, ["NoFetchDataAdapter", "nofetch"])),
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
                stableID: ct.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = de(
            $.mark(function a(i, o) {
              return $.wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                    case "end":
                      return s.stop();
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
          var r = de(
            $.mark(function a(i, o, u) {
              return $.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return c.abrupt(
                          "return",
                          this.bootstrapResult &&
                            Kn(
                              Kn({}, this.bootstrapResult),
                              {},
                              { fullUserHash: ct._getFullUserHash(o) },
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
            Kn(Kn({}, this.bootstrapResult), {}, { fullUserHash: ct._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = de(
            $.mark(function a(i, o, u) {
              return $.wrap(function (c) {
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
          var a = ct._getStorageKey(this._getSdkKey(), n);
          return "".concat(ct.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(a);
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
          t0(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = Kn({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(ct.DataAdapterCore);
function rd(e, t) {
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
function n0(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = a0(e)) || t) {
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
      ((u = !0), (i = c));
    },
    f: function () {
      try {
        o || r.return == null || r.return();
      } finally {
        if (u) throw i;
      }
    },
  };
}
function a0(e, t) {
  if (e) {
    if (typeof e == "string") return nd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? nd(e, t)
          : void 0
    );
  }
}
function nd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Ko = "LocalOverride:Recognized",
  i0 = "STATSIG_OVERRIDES",
  ad = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Fr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  Ke = function (t, r) {
    return r + ":" + t;
  },
  o0 = (function () {
    function e(t) {
      (fe(this, e),
        (this._overrides = Fr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return ve(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Fr();
          } catch {
            return Fr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Fr(), n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          for (var o = 0, u = a; o < u.length; o++) {
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
              var p = 0, g = Object.entries((b = s.configs) !== null && b !== void 0 ? b : {});
              p < g.length;
              p++
            ) {
              var b,
                m = K(g[p], 2),
                w = m[0],
                k = m[1];
              r.configs[w] = k;
            }
            for (
              var y = 0, S = Object.entries((C = s.layers) !== null && C !== void 0 ? C : {});
              y < S.length;
              y++
            ) {
              var C,
                I = K(S[y], 2),
                T = I[0],
                P = I[1];
              r.layers[T] = P;
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
            this.parseStoredOverrides(ad),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(ad);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var i = a[n],
              o = new Set(Object.keys(i)),
              u = n0(o),
              s;
            try {
              for (u.s(); !(s = u.n()).done; ) {
                var c = s.value,
                  l = He._DJB2(c);
                o.has(l) && delete i[l];
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
          var n = Ce(Ce({}, Fr()), r);
          this._djb2Map.clear();
          for (var a = 0, i = Object.entries(n); a < i.length; a++)
            for (
              var o = K(i[a], 2), u = o[0], s = o[1], c = 0, l = Object.entries(s);
              c < l.length;
              c++
            ) {
              var d = K(l[c], 2),
                f = d[0],
                h = d[1];
              this._djb2Map.set(Ke(He._DJB2(f), u), h);
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
            this._djb2Map.set(Ke(He._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(Ke(He._DJB2(r), "gates")),
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
                : this._djb2Map.get(Ke(r.name, "gates"));
          return i == null
            ? null
            : Ce(Ce({}, r), {}, { value: i, details: Ce(Ce({}, r.details), {}, { reason: Ko }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(Ke(He._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Ke(He._DJB2(r), "configs")),
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
            this._djb2Map.set(Ke(He._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Ke(He._DJB2(r), "configs")),
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
            this._djb2Map.set(Ke(He._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(Ke(He._DJB2(r), "layers")),
            this.saveOverrides());
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = Fr();
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
                : this._djb2Map.get(Ke(r.name, "layers"));
          return i == null
            ? null
            : Ce(
                Ce({}, r),
                {},
                {
                  __value: i,
                  get: He._makeTypedGet(r.name, i),
                  details: Ce(Ce({}, r.details), {}, { reason: Ko }),
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
                : this._djb2Map.get(Ke(r.name, "configs"));
          return i == null
            ? null
            : Ce(
                Ce({}, r),
                {},
                {
                  value: i,
                  get: He._makeTypedGet(r.name, i),
                  details: Ce(Ce({}, r.details), {}, { reason: Ko }),
                },
              );
        },
      },
    ]);
  })(),
  s0 = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function id(e, t) {
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
function Jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? id(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : id(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var od = "client-default-key",
  u0 = "https://xp.atlassian.com/v1/rgstr",
  c0 = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? i0 : n,
        i = r.overrideAdapter;
      (fe(this, e),
        x(this, "initPromise", null),
        x(this, "initCompleted", !1),
        x(this, "initWithDefaults", !1),
        x(this, "hasCheckGateErrorOccurred", !1),
        x(this, "hasGetExperimentErrorOccurred", !1),
        x(this, "hasGetExperimentValueErrorOccurred", !1),
        x(this, "hasGetLayerErrorOccurred", !1),
        x(this, "hasGetLayerValueErrorOccurred", !1),
        x(this, "subscriptions", new Tm()),
        x(this, "dataAdapter", new r0()),
        x(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = i || new o0(a)));
    }
    return ve(e, [
      {
        key: "initialize",
        value: (function () {
          var t = de(
            $.mark(function n(a, i, o) {
              var u = this,
                s,
                c;
              return $.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = Xa(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          Wn(s, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          d.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (c = performance.now()),
                          (this.initOptions = s),
                          (this.initPromise = this.init(s, i, o)
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
          function r(n, a, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initializeWithProvider",
        value: (function () {
          var t = de(
            $.mark(function n(a, i, o, u) {
              var s = this,
                c,
                l;
              return $.wrap(
                function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        if (((c = Xa(a)), !this.initPromise)) {
                          f.next = 4;
                          break;
                        }
                        return (
                          Wn(c, this.initOptions) ||
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
                          this.provider.setClientVersion(Gr),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(c, i, o, u)
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
            u = this,
            s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
          (o = this.initOptions.analyticsWebClient) === null ||
            o === void 0 ||
            o
              .then(function (c) {
                var l = Jt(
                  {
                    targetApp: u.initOptions.targetApp,
                    clientVersion: Gr,
                    success: i,
                    startTime: r,
                    totalTime: n,
                  },
                  s && { apiKey: s },
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
                u.initOptions.environment !== sa.Production &&
                  console.error("Analytics web client promise did not resolve", c);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = de(
            $.mark(function n(a, i, o) {
              var u = this,
                s,
                c,
                l,
                d = arguments;
              return $.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        if (
                          ((s = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (c = Xa(a)),
                          !this.initPromise)
                        ) {
                          h.next = 5;
                          break;
                        }
                        return (
                          Wn(c, this.initOptions) ||
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
                          (this.initPromise = this.initFromValues(c, i, o, s)
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
          var t = de(
            $.mark(function n(a, i, o) {
              var u, s;
              return $.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (u = Xa(a)),
                          (s = function () {
                            return Wo.fetchExperimentValues(u, i, o).then(function (f) {
                              var h = f.experimentValues,
                                v = f.customAttributes;
                              return { experimentValues: h, customAttributesFromFetch: v };
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(s, i, o)
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
          var t = de(
            $.mark(function n(a, i) {
              var o = this;
              return $.wrap(
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
                        return ((s.next = 5), this.provider.setProfile(this.initOptions, a, i));
                      case 5:
                        return (
                          (s.next = 7),
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
          var t = de(
            $.mark(function n(a, i) {
              var o,
                u,
                s = arguments;
              return $.wrap(
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
                              customAttributesFromFetch: i,
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(u, a, i)
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
          var t = de(
            $.mark(function n() {
              return $.wrap(
                function (i) {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        if (this.initPromise) {
                          i.next = 2;
                          break;
                        }
                        throw new Error(
                          "The client must be initialized before you can wait until initialized.",
                        );
                      case 2:
                        if (!this.initCompleted) {
                          i.next = 4;
                          break;
                        }
                        return i.abrupt("return");
                      case 4:
                        return ((i.next = 6), this.initPromise);
                      case 6:
                      case "end":
                        return i.stop();
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
            return Xl.fromExperiment(
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
              new Xl(r, {}, "", { time: Date.now(), reason: Zs.Error })
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
            var u = i.typeGuard;
            return o.get(n, a, u);
          } catch (s) {
            return (
              this.hasGetExperimentValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the experiment value. Only the first occurrence of this error is logged.",
                  experimentName: r,
                  defaultValue: a,
                  options: i,
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
          return Wn(this.currentIdentifiers, r) && Wn(this.currentAttributes, n);
        },
      },
      {
        key: "onGateUpdated",
        value: function (r, n) {
          var a = this,
            i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            o = function (s) {
              var c = i.fireGateExposure,
                l = c === void 0 ? !0 : c;
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
          return this.subscriptions.onGateUpdated(r, o, this.checkGate.bind(this), i);
        },
      },
      {
        key: "onExperimentValueUpdated",
        value: function (r, n, a, i) {
          var o = this,
            u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {},
            s = function (l) {
              var d = u.fireExperimentExposure,
                f = d === void 0 ? !0 : d;
              f && o.manuallyLogExperimentExposure(r);
              try {
                i(l);
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
            a,
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
            $.mark(function n(a, i, o) {
              var u, s, c, l, d, f, h, v;
              return $.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (u = Jt({}, a)),
                          (g.prev = 1),
                          (l = Wo.fetchClientSdk(a).then(function (b) {
                            return (u.sdkKey = b.clientSdkKey);
                          })),
                          (d = Wo.fetchExperimentValues(a, i, o)),
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
                          this.initFromValues(u, i, o)
                        );
                      case 19:
                        throw g.t0;
                      case 20:
                        return g.abrupt("return", this.initFromValues(u, i, c, s));
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
          var t = de(
            $.mark(function n(a, i, o, u) {
              var s, c, l, d, f, h, v, p;
              return $.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (s = Jt(Jt({}, a), {}, { disableCurrentPageLogging: !0 })),
                          (b.prev = 1),
                          (b.next = 4),
                          i.setProfile(a, o, u)
                        );
                      case 4:
                        return (
                          (d = i.getClientSdkKey().then(function (m) {
                            return (s.sdkKey = m);
                          })),
                          (f = i.getExperimentValues()),
                          (b.next = 8),
                          Promise.all([d, f])
                        );
                      case 8:
                        ((h = b.sent),
                          (v = K(h, 2)),
                          (p = v[1]),
                          (c = p.experimentValues),
                          (l = p.customAttributesFromFetch),
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
                          this.initFromValues(s, o, u)
                        );
                      case 21:
                        throw b.t0;
                      case 22:
                        return b.abrupt("return", this.initFromValues(s, o, l, c));
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
          var t = de(
            $.mark(function n(a, i, o) {
              var u,
                s,
                c,
                l,
                d,
                f,
                h,
                v = arguments;
              return $.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = v.length > 3 && v[3] !== void 0 ? v[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = i),
                          (this.currentAttributes = o),
                          (c = Nm(a)),
                          c.sdkKey || (c.sdkKey = od),
                          ((u = c.networkConfig) !== null && u !== void 0 && u.logEventUrl) ||
                            (c.networkConfig = Jt(
                              Jt({}, c.networkConfig),
                              {},
                              { logEventUrl: u0 },
                            )),
                          c.perimeter === Sa.FEDRAMP_MODERATE && (c.disableLogging = !0),
                          (l = c.sdkKey),
                          (d = c.environment),
                          c.updateUserCompletionCallback,
                          c.perimeter,
                          (f = ae(c, s0)),
                          (this.user = Jl(i, o)),
                          (h = Jt(
                            Jt({}, f),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: ct.LogEventCompressionMode.Forced,
                            },
                          )),
                          i.stableId
                            ? ct.StableID.setOverride(i.stableId, l)
                            : (h.disableStableID = !0),
                          (g.prev = 12),
                          (this.statsigClient = new ct.StatsigClient(l, this.user, h)),
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
                          (this.statsigClient = new ct.StatsigClient(od, this.user, h)),
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
          var t = de(
            $.mark(function n(a, i, o) {
              var u = this,
                s,
                c,
                l;
              return $.wrap(
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
                          (c = a()),
                          (l = this.updateStatsigClientUser(c, i, o)),
                          (this.initPromise = l.catch(
                            de(
                              $.mark(function h() {
                                return $.wrap(function (p) {
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
          function r(n, a, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateStatsigClientUser",
        value: (function () {
          var t = de(
            $.mark(function n(a, i, o) {
              var u, s, c, l, d, f, h, v, p;
              return $.wrap(
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
                        ((c = b.sent), (l = Jl(i, c.customAttributesFromFetch)), (b.next = 13));
                        break;
                      case 8:
                        throw (
                          (b.prev = 8),
                          (b.t0 = b.catch(1)),
                          (h = b.t0 instanceof Error ? b.t0.message : JSON.stringify(b.t0)),
                          (d = (f = this.initOptions).updateUserCompletionCallback) === null ||
                            d === void 0 ||
                            d.call(f, !1, h),
                          b.t0
                        );
                      case 13:
                        if (
                          ((v = !0),
                          (p = null),
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
                        ((b.prev = 23), (b.t1 = b.catch(15)), (v = !1), (p = String(b.t1)));
                      case 27:
                        if (
                          ((u = this.initOptions) === null ||
                            u === void 0 ||
                            (s = u.updateUserCompletionCallback) === null ||
                            s === void 0 ||
                            s.call(u, v, p),
                          !v)
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
          return Gr;
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
            return Ql.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !i }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Ql.fromLayer(ct._makeLayer(r, { reason: "Error" }, null))
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
            var u = i.typeGuard;
            return o.get(n, a, u);
          } catch (s) {
            return (
              this.hasGetLayerValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer value. Only the first occurrence of this error is logged.",
                  layerName: r,
                  defaultValue: a,
                  options: i,
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
  D,
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
D = q;
x(q, "client", new c0());
x(q, "hasCheckGateErrorOccurred", !1);
x(q, "hasGetExperimentValueErrorOccurred", !1);
x(q, "checkGate", function (e, t) {
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
x(q, "getExperimentValue", function (e, t, r, n) {
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
      D.hasGetExperimentValueErrorOccurred ||
        (console.warn({
          msg: "An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.",
          experimentName: e,
          defaultValue: r,
          options: n,
          error: i,
        }),
        (D.hasGetExperimentValueErrorOccurred = !0)),
      r
    );
  }
  return D.client.getExperimentValue(e, t, r, n);
});
x(q, "initializeCalled", D.client.initializeCalled.bind(D.client));
x(q, "initializeCompleted", D.client.initializeCompleted.bind(D.client));
x(q, "waitUntilInitializeCompleted", D.client.waitUntilInitializeCompleted.bind(D.client));
x(q, "initialize", D.client.initialize.bind(D.client));
x(q, "initializeWithProvider", D.client.initializeWithProvider.bind(D.client));
x(q, "initializeFromValues", D.client.initializeFromValues.bind(D.client));
x(q, "manuallyLogGateExposure", D.client.manuallyLogGateExposure.bind(D.client));
x(q, "getExperiment", D.client.getExperiment.bind(D.client));
x(q, "manuallyLogExperimentExposure", D.client.manuallyLogExperimentExposure.bind(D.client));
x(q, "manuallyLogLayerExposure", D.client.manuallyLogLayerExposure.bind(D.client));
x(q, "shutdownStatsig", D.client.shutdownStatsig.bind(D.client));
x(q, "overrideGate", D.client.overrideGate.bind(D.client));
x(q, "clearGateOverride", D.client.clearGateOverride.bind(D.client));
x(q, "overrideConfig", D.client.overrideConfig.bind(D.client));
x(q, "clearConfigOverride", D.client.clearConfigOverride.bind(D.client));
x(q, "setOverrides", D.client.setOverrides.bind(D.client));
x(q, "getOverrides", D.client.getOverrides.bind(D.client));
x(q, "clearAllOverrides", D.client.clearAllOverrides.bind(D.client));
x(q, "isCurrentUser", D.client.isCurrentUser.bind(D.client));
x(q, "onGateUpdated", D.client.onGateUpdated.bind(D.client));
x(q, "onExperimentValueUpdated", D.client.onExperimentValueUpdated.bind(D.client));
x(q, "onAnyUpdated", D.client.onAnyUpdated.bind(D.client));
x(q, "updateUser", D.client.updateUser.bind(D.client));
x(q, "updateUserWithProvider", D.client.updateUserWithProvider.bind(D.client));
x(q, "updateUserWithValues", D.client.updateUserWithValues.bind(D.client));
x(q, "getPackageVersion", D.client.getPackageVersion.bind(D.client));
x(q, "getLayer", D.client.getLayer.bind(D.client));
x(q, "getLayerValue", D.client.getLayerValue.bind(D.client));
var Rs = q;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = q;
  else {
    var Qa, Yo;
    Rs = window.__FEATUREGATES_JS__;
    var sd =
      ((Qa = Rs) === null || Qa === void 0 || (Yo = Qa.getPackageVersion) === null || Yo === void 0
        ? void 0
        : Yo.call(Qa)) || "4.10.0 or earlier";
    if (sd !== Gr) {
      var l0 = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(sd, " when module version ")
        .concat(Gr, " was loading.");
      console.warn(l0);
    }
  }
var Nr,
  $r,
  d0 =
    (globalThis == null ||
    (Nr = globalThis.process) === null ||
    Nr === void 0 ||
    (Nr = Nr.env) === null ||
    Nr === void 0
      ? void 0
      : Nr.JEST_WORKER_ID) !== void 0,
  f0 =
    !d0 &&
    (globalThis == null ||
    ($r = globalThis.process) === null ||
    $r === void 0 ||
    ($r = $r.env) === null ||
    $r === void 0
      ? void 0
      : $r.NODE_ENV) !== "production",
  v0 = function () {
    var t;
    f0 && (t = console).debug.apply(t, arguments);
  },
  eu = {},
  p0 = "@atlaskit/platform-feature-flags",
  fa = "__PLATFORM_FEATURE_FLAGS__",
  xp = typeof process < "u" && typeof eu < "u",
  h0 = xp ? eu.ENABLE_PLATFORM_FF === "true" : !1,
  g0 = xp ? eu.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  b0 = h0 || g0,
  _0 = { booleanResolver: void 0 },
  va = typeof window < "u" ? window : globalThis;
va[fa] = va[fa] || _0;
function y0(e) {
  if (b0)
    return (
      v0(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        p0,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = va[fa]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = va[fa]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return Rs.checkGate(e);
    var a = (n = va[fa]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function Fe(e) {
  return y0(e);
}
var m0 = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  w0 = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  k0 = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  O0 = { core: 16, utility: 12 },
  S0 = {
    core: {
      medium: { none: 0, compact: 4, spacious: 4 },
      small: { none: 0, compact: 2.66, spacious: 8 },
    },
    utility: {
      medium: { none: 0, compact: 2, spacious: 6 },
      small: { none: 0, compact: 2, spacious: 6 },
    },
  },
  ud = _.memo(function (t) {
    var r,
      n = t,
      a = n.color,
      i = a === void 0 ? "currentColor" : a,
      o = n.testId,
      u = n.label,
      s = n.LEGACY_primaryColor,
      c = n.LEGACY_secondaryColor,
      l = n.LEGACY_size,
      d = n.LEGACY_fallbackIcon,
      f = n.dangerouslySetGlyph,
      h = n.shouldScale,
      v = n.LEGACY_margin,
      p = n.spacing,
      g = p === void 0 ? "none" : p,
      b = n.name,
      m = f ? { __html: f } : void 0;
    if (d && !Fe("platform-visual-refresh-icons"))
      return _.createElement(d, {
        primaryColor: s ?? i,
        secondaryColor: c,
        size: l,
        label: u,
        testId: o,
        UNSAFE_margin: v,
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
    var S = O0[w],
      C = S0[w][k][g],
      I = S + 2 * C;
    return _.createElement(
      "span",
      {
        "data-testid": o,
        role: u ? "img" : void 0,
        "aria-label": u || void 0,
        "aria-hidden": u ? void 0 : !0,
        style: { color: i },
        className: R([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          h && "_1bsb1kw7 _4t3i1kw7",
          (w === "utility" || k === "small") && "_vwz4utpp",
        ]),
      },
      _.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - C, " ")
          .concat(0 - C, " ")
          .concat(I, " ")
          .concat(I),
        role: "presentation",
        dangerouslySetInnerHTML: m,
        className: R([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          h ? "_1bsb1kw7 _4t3i1kw7" : w === "utility" ? k0[g] : k === "small" ? w0[g] : m0[g],
        ]),
      }),
    );
  });
const E0 = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: ud, default: ud }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Ki = zs(E0);
var cd;
function x0() {
  if (cd) return qn;
  ((cd = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.default = void 0));
  var e = r(pt()),
    t = r(Ki);
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
  return ((n.displayName = "ChevronLeftIcon"), (qn.default = n), qn);
}
var Yn = {};
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
function dd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ld(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ld(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var C0 = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  fd = _.memo(function (t) {
    var r = t,
      n = r.glyph,
      a = r.dangerouslySetGlyph,
      i = r.primaryColor,
      o = i === void 0 ? "currentColor" : i,
      u = r.secondaryColor,
      s = r.size,
      c = r.testId,
      l = r.label,
      d = r.width,
      f = r.height,
      h = r.UNSAFE_margin,
      v = a
        ? { dangerouslySetInnerHTML: { __html: a } }
        : { children: n ? _.createElement(n, { role: "presentation" }) : null },
      p = d && f ? { width: d + "px", height: f + "px" } : null;
    return _.createElement(
      "span",
      te(
        {
          "data-testid": c,
          "data-vc": "icon-".concat(c),
          role: l ? "img" : void 0,
          "aria-label": l || void 0,
          "aria-hidden": l ? void 0 : !0,
          style: dd(
            dd({}, p),
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
            s && C0[s],
          ]),
        },
      ),
    );
  });
const R0 = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: fd, default: fd }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Cp = zs(R0);
var vd;
function P0() {
  if (vd) return Yn;
  ((vd = 1), Object.defineProperty(Yn, "__esModule", { value: !0 }), (Yn.default = void 0));
  var e = r(pt()),
    t = Cp;
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
  return ((n.displayName = "ChevronLeftLargeIcon"), (Yn.default = n), Yn);
}
var pd;
function A0() {
  if (pd) return Bn;
  ((pd = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.default = void 0));
  var e = n(pt()),
    t = n(x0()),
    r = n(P0());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronLeftIcon", LEGACY_fallbackIcon: r.default }, i),
    );
  return ((a.displayName = "ChevronLeftIconMigration"), (Bn.default = a), Bn);
}
var j0 = A0();
const I0 = rr(j0);
var Jn = {},
  Xn = {},
  hd;
function D0() {
  if (hd) return Xn;
  ((hd = 1), Object.defineProperty(Xn, "__esModule", { value: !0 }), (Xn.default = void 0));
  var e = r(pt()),
    t = r(Ki);
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
  return ((n.displayName = "ChevronRightIcon"), (Xn.default = n), Xn);
}
var Qn = {},
  gd;
function T0() {
  if (gd) return Qn;
  ((gd = 1), Object.defineProperty(Qn, "__esModule", { value: !0 }), (Qn.default = void 0));
  var e = r(pt()),
    t = Cp;
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
  return ((n.displayName = "ChevronRightLargeIcon"), (Qn.default = n), Qn);
}
var bd;
function M0() {
  if (bd) return Jn;
  ((bd = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.default = void 0));
  var e = n(pt()),
    t = n(D0()),
    r = n(T0());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronRightIcon", LEGACY_fallbackIcon: r.default }, i),
    );
  return ((a.displayName = "ChevronRightIconMigration"), (Jn.default = a), Jn);
}
var L0 = M0();
const F0 = rr(L0);
var tu = _.createContext("elevation.surface"),
  N0 = function () {
    return _.useContext(tu);
  };
tu.displayName = "SurfaceProvider";
var $0 = [
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
  z0 = ["className"],
  B0 = {
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
  Rp = {
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
  q0 = {
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
  U0 = {
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
  V0 = {
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
  G0 = {
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
  Yi = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "div" : r,
      a = e.children,
      i = e.backgroundColor,
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
      b = e.paddingInlineEnd,
      m = b === void 0 ? v : b,
      w = e.style,
      k = e.testId,
      y = e.xcss,
      S = ae(e, $0);
    S.className;
    var C = ae(S, z0),
      I = _.createElement(
        n,
        te(
          {
            style: w,
            ref: t,
            className: R([
              "_19itglyw _vchhusvi _r06hglyw",
              i && B0[i],
              i && H0(i) && Rp[i],
              l && q0[l],
              f && U0[f],
              g && V0[g],
              m && G0[m],
              y,
            ]),
          },
          C,
          { "data-testid": k },
        ),
        a,
      );
    return i ? _.createElement(tu.Provider, { value: i }, I) : I;
  });
function H0(e) {
  return e in Rp;
}
const Jo = () =>
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
  Pp = (...e) => R(e);
function W0() {
  return {
    css() {
      throw Jo();
    },
    cssMap() {
      throw Jo();
    },
    cx: Pp,
    XCSSProp() {
      throw Jo();
    },
  };
}
var K0 = W0(),
  Y0 = K0.cx,
  J0 = [
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
  _d = {
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
  yd = {
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
  X0 = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  Q0 = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  Z0 = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  ew = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  tw = { root: "_1e0c1txw _vchhusvi" },
  Ci = _.memo(
    _.forwardRef(function (e, t) {
      var r = e.as,
        n = r === void 0 ? "div" : r,
        a = e.role,
        i = e.alignItems,
        o = e.justifyContent,
        u = e.gap,
        s = e.columnGap,
        c = e.rowGap,
        l = e.children,
        d = e.testId,
        f = e.direction,
        h = e.wrap,
        v = e.xcss,
        p = ae(e, J0);
      return _.createElement(
        n,
        te({}, p, {
          role: a,
          className: R([
            tw.root,
            u && yd[u],
            s && yd[s],
            u && _d[u],
            c && _d[c],
            i && ew[i],
            f && Q0[f],
            o && X0[o],
            h && Z0[h],
            v,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
Ci.displayName = "Flex";
var rw = [
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
  Ps = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  nw = function (t) {
    var r = t.children;
    return _.createElement("span", { className: R([Ps.separator]) }, r);
  },
  ii = _.memo(
    _.forwardRef(function (e, t) {
      var r = e.as,
        n = e.alignInline,
        a = e.alignBlock,
        i = a === void 0 ? "start" : a,
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
        b = ae(e, rw),
        m = typeof f == "string" ? _.createElement(nw, null, f) : f,
        w = m
          ? _.Children.toArray(g)
              .filter(Boolean)
              .map(function (k, y) {
                return _.createElement(_.Fragment, { key: y }, f && y > 0 ? m : null, k);
              })
          : g;
      return _.createElement(
        Ci,
        te({}, b, {
          as: r,
          role: p,
          alignItems: i,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: u ? "wrap" : void 0,
          xcss: Y0(c === "hug" && Ps.hug, c === "fill" && Ps.fill, h),
          testId: v,
          ref: t,
        }),
        w,
      );
    }),
  );
ii.displayName = "Inline";
var aw = "Invariant failed";
function iw(e, t) {
  if (!e) throw new Error(aw);
}
var Ap = _.createContext(!1),
  ow = function () {
    return _.useContext(Ap);
  },
  sw = Ap.Provider,
  uw = ["span", "p", "strong", "em"],
  cw = function (t, r) {
    var n = N0();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return md.hasOwnProperty(n) ? md[n] : "color.text";
    }
  },
  zr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  lw = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  dw = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  fw = {
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
  md = {
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
  vw = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "span" : r,
      a = e.color,
      i = e.align,
      o = e.testId,
      u = e.id,
      s = e.size,
      c = e.weight,
      l = e.maxLines,
      d = e.xcss,
      f = e.children;
    iw(uw.includes(n));
    var h = ow(),
      v = cw(a, h);
    !s && !h && (s = "medium");
    var p = _.createElement(
      n,
      {
        id: u,
        className: R([
          zr.root,
          s && lw[s],
          v && fw[v],
          l && zr.truncation,
          l === 1 && zr.breakAll,
          i && zr["textAlign.".concat(i)],
          c && dw[c],
          n === "em" && zr["as.em"],
          n === "strong" && zr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": o,
        ref: t,
      },
      f,
    );
    return h ? p : _.createElement(sw, { value: !0 }, p);
  });
function pw() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var hw = ["as", "children", "isInset", "testId", "style", "xcss"],
  gw = ["className"],
  bw = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      i = e.isInset,
      o = e.testId,
      u = e.style,
      s = e.xcss,
      c = ae(e, hw);
    c.className;
    var l = ae(c, gw);
    return _.createElement(
      n,
      te({}, l, {
        ref: t,
        className: R([
          "_mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          i && "_1ah31gjf _2mwq1gjf",
          Fe("platform_dst_compiled_primitives_outline_reset") && "_ymio1r31 _ypr0glyw _zcxs1o36",
          s,
        ]),
        style: u,
        "data-testid": o,
      }),
      a,
    );
  }),
  _w = [
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
  yw = ["className"],
  wd = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  mw = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      i = a === void 0 ? "button" : a,
      o = e.onClick,
      u = o === void 0 ? we : o,
      s = e.interactionName,
      c = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      f = e.testId,
      h = e.xcss,
      v = e.tabIndex,
      p = ae(e, _w),
      g = _.useContext(Qs),
      b = _.useCallback(
        function (k, y) {
          (g && g.tracePress(s, k.timeStamp), u(k, y));
        },
        [u, g, s],
      ),
      m = ka({
        fn: b,
        action: "clicked",
        componentName: c || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    p.className;
    var w = ae(p, yw);
    return _.createElement(
      bw,
      te({ as: "button", tabIndex: v ?? (pw() && !n ? 0 : void 0), style: d }, w, {
        type: i,
        onClick: m,
        disabled: n,
        xcss: Pp(wd.root, n && wd.disabled, h),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  Xo = {},
  Zn = {},
  kd;
function jp() {
  if (kd) return Zn;
  ((kd = 1), Object.defineProperty(Zn, "__esModule", { value: !0 }), (Zn.bind = void 0));
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
  return ((Zn.bind = e), Zn);
}
var fr = {},
  Od;
function ww() {
  if (Od) return fr;
  Od = 1;
  var e =
    (fr && fr.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (i) {
            for (var o, u = 1, s = arguments.length; u < s; u++) {
              o = arguments[u];
              for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c]);
            }
            return i;
          }),
        e.apply(this, arguments)
      );
    };
  (Object.defineProperty(fr, "__esModule", { value: !0 }), (fr.bindAll = void 0));
  var t = jp();
  function r(i) {
    if (!(typeof i > "u")) return typeof i == "boolean" ? { capture: i } : i;
  }
  function n(i, o) {
    if (o == null) return i;
    var u = e(e({}, i), { options: e(e({}, r(o)), r(i.options)) });
    return u;
  }
  function a(i, o, u) {
    var s = o.map(function (c) {
      var l = n(c, u);
      return (0, t.bind)(i, l);
    });
    return function () {
      s.forEach(function (l) {
        return l();
      });
    };
  }
  return ((fr.bindAll = a), fr);
}
var Sd;
function kw() {
  return (
    Sd ||
      ((Sd = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = jp();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = ww();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(Xo)),
    Xo
  );
}
var Ji = kw(),
  Ow = function () {
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
  Ip = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: Ow() });
  },
  Sw = Ip(),
  Ew = _.createContext(Ip()),
  xw = function (e) {
    return e.value++;
  },
  Cw = function (e) {
    return e ? e.prefix : "";
  },
  Rw = function (e) {
    var t = e || Sw,
      r = Cw(t),
      n = xw(t),
      a = r + n,
      i = function (o) {
        return a + t.uid(o);
      };
    return { uid: a, gen: i };
  },
  Dp = function () {
    var e = _.useContext(Ew),
      t = _.useState(function () {
        return Rw(e);
      })[0];
    return t;
  },
  Pw = function () {
    var e = Dp().uid;
    return e;
  },
  Aw = function () {
    var e = Dp().gen;
    return e;
  },
  Qo,
  oi = (Qo = O.useId) !== null && Qo !== void 0 ? Qo : void 0;
function jw() {
  return oi && Fe("platform-dst-react-18-use-id")
    ? Fe("platform-dst-react-18-use-id-selector-safe")
      ? oi().replace(/[:«»]/g, "_")
      : oi()
    : "uid".concat(Pw());
}
function Iw() {
  if (oi && Fe("platform-dst-react-18-use-id")) {
    var e = jw();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return Aw();
}
var Tp = function (t) {
    var r = t.children,
      n = t.testId,
      a = t.role,
      i = t.id;
    return _.createElement(
      "span",
      {
        id: i,
        "data-testid": n,
        role: a,
        className: R([
          "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
        ]),
      },
      r,
    );
  },
  Dw = {
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
  Tw = ["children"];
function Mw(e) {
  var t = function (u, s) {
      return u(s);
    },
    r = _.createContext(e);
  function n(o) {
    var u = _.useContext(r),
      s = u || t,
      c = s(o);
    return c;
  }
  function a(o) {
    var u = o.children,
      s = ae(o, Tw),
      c = n(s);
    return O.createElement(O.Fragment, null, u(c));
  }
  function i(o) {
    var u = _.useContext(r),
      s = o.value || t,
      c = _.useCallback(
        function (l) {
          return s(u, l);
        },
        [u, s],
      );
    return O.createElement(r.Provider, { value: c }, o.children);
  }
  return { Consumer: a, Provider: i, useTheme: n };
}
var Lw = Mw(function () {
    return { mode: "light" };
  }),
  Fw = Lw.useTheme;
function Nw(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function $w(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var zw = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag($w(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = Nw(a);
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
  me = "-ms-",
  Ri = "-moz-",
  Q = "-webkit-",
  Mp = "comm",
  ru = "rule",
  nu = "decl",
  Bw = "@import",
  Lp = "@keyframes",
  qw = "@layer",
  Uw = Math.abs,
  Xi = String.fromCharCode,
  Vw = Object.assign;
function Gw(e, t) {
  return _e(e, 0) ^ 45
    ? (((((((t << 2) ^ _e(e, 0)) << 2) ^ _e(e, 1)) << 2) ^ _e(e, 2)) << 2) ^ _e(e, 3)
    : 0;
}
function Fp(e) {
  return e.trim();
}
function Hw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Z(e, t, r) {
  return e.replace(t, r);
}
function As(e, t) {
  return e.indexOf(t);
}
function _e(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ea(e, t, r) {
  return e.slice(t, r);
}
function yt(e) {
  return e.length;
}
function au(e) {
  return e.length;
}
function Za(e, t) {
  return (t.push(e), e);
}
function Ww(e, t) {
  return e.map(t).join("");
}
var Qi = 1,
  Jr = 1,
  Np = 0,
  Ie = 0,
  he = 0,
  an = "";
function Zi(e, t, r, n, a, i, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: i,
    line: Qi,
    column: Jr,
    length: o,
    return: "",
  };
}
function ea(e, t) {
  return Vw(Zi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Kw() {
  return he;
}
function Yw() {
  return ((he = Ie > 0 ? _e(an, --Ie) : 0), Jr--, he === 10 && ((Jr = 1), Qi--), he);
}
function Ne() {
  return ((he = Ie < Np ? _e(an, Ie++) : 0), Jr++, he === 10 && ((Jr = 1), Qi++), he);
}
function xt() {
  return _e(an, Ie);
}
function si() {
  return Ie;
}
function La(e, t) {
  return Ea(an, e, t);
}
function xa(e) {
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
function $p(e) {
  return ((Qi = Jr = 1), (Np = yt((an = e))), (Ie = 0), []);
}
function zp(e) {
  return ((an = ""), e);
}
function ui(e) {
  return Fp(La(Ie - 1, js(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Jw(e) {
  for (; (he = xt()) && he < 33; ) Ne();
  return xa(e) > 2 || xa(he) > 3 ? "" : " ";
}
function Xw(e, t) {
  for (; --t && Ne() && !(he < 48 || he > 102 || (he > 57 && he < 65) || (he > 70 && he < 97)); );
  return La(e, si() + (t < 6 && xt() == 32 && Ne() == 32));
}
function js(e) {
  for (; Ne(); )
    switch (he) {
      case e:
        return Ie;
      case 34:
      case 39:
        e !== 34 && e !== 39 && js(he);
        break;
      case 40:
        e === 41 && js(e);
        break;
      case 92:
        Ne();
        break;
    }
  return Ie;
}
function Qw(e, t) {
  for (; Ne() && e + he !== 57; ) if (e + he === 84 && xt() === 47) break;
  return "/*" + La(t, Ie - 1) + "*" + Xi(e === 47 ? e : Ne());
}
function Zw(e) {
  for (; !xa(xt()); ) Ne();
  return La(e, Ie);
}
function e1(e) {
  return zp(ci("", null, null, null, [""], (e = $p(e)), 0, [0], e));
}
function ci(e, t, r, n, a, i, o, u, s) {
  for (
    var c = 0,
      l = 0,
      d = o,
      f = 0,
      h = 0,
      v = 0,
      p = 1,
      g = 1,
      b = 1,
      m = 0,
      w = "",
      k = a,
      y = i,
      S = n,
      C = w;
    g;

  )
    switch (((v = m), (m = Ne()))) {
      case 40:
        if (v != 108 && _e(C, d - 1) == 58) {
          As((C += Z(ui(m), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += ui(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Jw(v);
        break;
      case 92:
        C += Xw(si() - 1, 7);
        continue;
      case 47:
        switch (xt()) {
          case 42:
          case 47:
            Za(t1(Qw(Ne(), si()), t, r), s);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * p:
        u[c++] = yt(C) * b;
      case 125 * p:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            (b == -1 && (C = Z(C, /\f/g, "")),
              h > 0 &&
                yt(C) - d &&
                Za(h > 32 ? xd(C + ";", n, r, d - 1) : xd(Z(C, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            C += ";";
          default:
            if ((Za((S = Ed(C, t, r, c, l, a, u, w, (k = []), (y = []), d)), i), m === 123))
              if (l === 0) ci(C, t, S, S, k, i, d, u, y);
              else
                switch (f === 99 && _e(C, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ci(
                      e,
                      S,
                      S,
                      n && Za(Ed(e, S, S, 0, 0, a, u, w, a, (k = []), d), y),
                      a,
                      y,
                      d,
                      u,
                      n ? k : y,
                    );
                    break;
                  default:
                    ci(C, S, S, S, [""], y, 0, u, y);
                }
        }
        ((c = l = h = 0), (p = b = 1), (w = C = ""), (d = o));
        break;
      case 58:
        ((d = 1 + yt(C)), (h = v));
      default:
        if (p < 1) {
          if (m == 123) --p;
          else if (m == 125 && p++ == 0 && Yw() == 125) continue;
        }
        switch (((C += Xi(m)), m * p)) {
          case 38:
            b = l > 0 ? 1 : ((C += "\f"), -1);
            break;
          case 44:
            ((u[c++] = (yt(C) - 1) * b), (b = 1));
            break;
          case 64:
            (xt() === 45 && (C += ui(Ne())), (f = xt()), (l = d = yt((w = C += Zw(si())))), m++);
            break;
          case 45:
            v === 45 && yt(C) == 2 && (p = 0);
        }
    }
  return i;
}
function Ed(e, t, r, n, a, i, o, u, s, c, l) {
  for (var d = a - 1, f = a === 0 ? i : [""], h = au(f), v = 0, p = 0, g = 0; v < n; ++v)
    for (var b = 0, m = Ea(e, d + 1, (d = Uw((p = o[v])))), w = e; b < h; ++b)
      (w = Fp(p > 0 ? f[b] + " " + m : Z(m, /&\f/g, f[b]))) && (s[g++] = w);
  return Zi(e, t, r, a === 0 ? ru : u, s, c, l);
}
function t1(e, t, r) {
  return Zi(e, t, r, Mp, Xi(Kw()), Ea(e, 2, -2), 0);
}
function xd(e, t, r, n) {
  return Zi(e, t, r, nu, Ea(e, 0, n), Ea(e, n + 1, -1), n);
}
function Hr(e, t) {
  for (var r = "", n = au(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function r1(e, t, r, n) {
  switch (e.type) {
    case qw:
      if (e.children.length) break;
    case Bw:
    case nu:
      return (e.return = e.return || e.value);
    case Mp:
      return "";
    case Lp:
      return (e.return = e.value + "{" + Hr(e.children, n) + "}");
    case ru:
      e.value = e.props.join(",");
  }
  return yt((r = Hr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function n1(e) {
  var t = au(e);
  return function (r, n, a, i) {
    for (var o = "", u = 0; u < t; u++) o += e[u](r, n, a, i) || "";
    return o;
  };
}
function a1(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function i1(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var o1 = function (t, r, n) {
    for (var a = 0, i = 0; (a = i), (i = xt()), a === 38 && i === 12 && (r[n] = 1), !xa(i); ) Ne();
    return La(t, Ie);
  },
  s1 = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (xa(a)) {
        case 0:
          (a === 38 && xt() === 12 && (r[n] = 1), (t[n] += o1(Ie - 1, r, n)));
          break;
        case 2:
          t[n] += ui(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = xt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Xi(a);
      }
    while ((a = Ne()));
    return t;
  },
  u1 = function (t, r) {
    return zp(s1($p(t), r));
  },
  Cd = new WeakMap(),
  c1 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Cd.get(n)) && !a) {
        Cd.set(t, !0);
        for (var i = [], o = u1(r, i), u = n.props, s = 0, c = 0; s < o.length; s++)
          for (var l = 0; l < u.length; l++, c++)
            t.props[c] = i[s] ? o[s].replace(/&\f/g, u[l]) : u[l] + " " + o[s];
      }
    }
  },
  l1 = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Bp(e, t) {
  switch (Gw(e, t)) {
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
      return Q + e + Ri + e + me + e + e;
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
      if (yt(e) - 1 - t > 6)
        switch (_e(e, t + 1)) {
          case 109:
            if (_e(e, t + 4) !== 45) break;
          case 102:
            return (
              Z(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Q + "$2-$3$1" + Ri + (_e(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~As(e, "stretch") ? Bp(Z(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (_e(e, t + 1) !== 115) break;
    case 6444:
      switch (_e(e, yt(e) - 3 - (~As(e, "!important") && 10))) {
        case 107:
          return Z(e, ":", ":" + Q) + e;
        case 101:
          return (
            Z(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Q +
                (_e(e, 14) === 45 ? "inline-" : "") +
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
      switch (_e(e, t + 11)) {
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
var d1 = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case nu:
          t.return = Bp(t.value, t.length);
          break;
        case Lp:
          return Hr([ea(t, { value: Z(t.value, "@", "@" + Q) })], a);
        case ru:
          if (t.length)
            return Ww(t.props, function (i) {
              switch (Hw(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Hr([ea(t, { props: [Z(i, /:(read-\w+)/, ":" + Ri + "$1")] })], a);
                case "::placeholder":
                  return Hr(
                    [
                      ea(t, { props: [Z(i, /:(plac\w+)/, ":" + Q + "input-$1")] }),
                      ea(t, { props: [Z(i, /:(plac\w+)/, ":" + Ri + "$1")] }),
                      ea(t, { props: [Z(i, /:(plac\w+)/, me + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  f1 = [d1],
  v1 = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (p) {
        var g = p.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || f1,
      i = {},
      o,
      u = [];
    ((o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (p) {
          for (var g = p.getAttribute("data-emotion").split(" "), b = 1; b < g.length; b++)
            i[g[b]] = !0;
          u.push(p);
        },
      ));
    var s,
      c = [c1, l1];
    {
      var l,
        d = [
          r1,
          a1(function (p) {
            l.insert(p);
          }),
        ],
        f = n1(c.concat(a, d)),
        h = function (g) {
          return Hr(e1(g), f);
        };
      s = function (g, b, m, w) {
        ((l = m), h(g ? g + "{" + b.styles + "}" : b.styles), w && (v.inserted[b.name] = !0));
      };
    }
    var v = {
      key: r,
      sheet: new zw({
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
      insert: s,
    };
    return (v.sheet.hydrate(u), v);
  },
  Zo = { exports: {} },
  ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rd;
function p1() {
  if (Rd) return ee;
  Rd = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    n = e ? Symbol.for("react.fragment") : 60107,
    a = e ? Symbol.for("react.strict_mode") : 60108,
    i = e ? Symbol.for("react.profiler") : 60114,
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
    b = e ? Symbol.for("react.responder") : 60118,
    m = e ? Symbol.for("react.scope") : 60119;
  function w(y) {
    if (typeof y == "object" && y !== null) {
      var S = y.$$typeof;
      switch (S) {
        case t:
          switch (((y = y.type), y)) {
            case s:
            case c:
            case n:
            case i:
            case a:
            case d:
              return y;
            default:
              switch (((y = y && y.$$typeof), y)) {
                case u:
                case l:
                case v:
                case h:
                case o:
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
    return w(y) === c;
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
    (ee.Profiler = i),
    (ee.StrictMode = a),
    (ee.Suspense = d),
    (ee.isAsyncMode = function (y) {
      return k(y) || w(y) === s;
    }),
    (ee.isConcurrentMode = k),
    (ee.isContextConsumer = function (y) {
      return w(y) === u;
    }),
    (ee.isContextProvider = function (y) {
      return w(y) === o;
    }),
    (ee.isElement = function (y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }),
    (ee.isForwardRef = function (y) {
      return w(y) === l;
    }),
    (ee.isFragment = function (y) {
      return w(y) === n;
    }),
    (ee.isLazy = function (y) {
      return w(y) === v;
    }),
    (ee.isMemo = function (y) {
      return w(y) === h;
    }),
    (ee.isPortal = function (y) {
      return w(y) === r;
    }),
    (ee.isProfiler = function (y) {
      return w(y) === i;
    }),
    (ee.isStrictMode = function (y) {
      return w(y) === a;
    }),
    (ee.isSuspense = function (y) {
      return w(y) === d;
    }),
    (ee.isValidElementType = function (y) {
      return (
        typeof y == "string" ||
        typeof y == "function" ||
        y === n ||
        y === c ||
        y === i ||
        y === a ||
        y === d ||
        y === f ||
        (typeof y == "object" &&
          y !== null &&
          (y.$$typeof === v ||
            y.$$typeof === h ||
            y.$$typeof === o ||
            y.$$typeof === u ||
            y.$$typeof === l ||
            y.$$typeof === g ||
            y.$$typeof === b ||
            y.$$typeof === m ||
            y.$$typeof === p))
      );
    }),
    (ee.typeOf = w),
    ee
  );
}
var Pd;
function h1() {
  return (Pd || ((Pd = 1), (Zo.exports = p1())), Zo.exports);
}
var es, Ad;
function g1() {
  if (Ad) return es;
  Ad = 1;
  var e = h1(),
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
  function o(v) {
    return e.isMemo(v) ? a : i[v.$$typeof] || t;
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
        var b = d(p);
        b && b !== f && h(v, b, g);
      }
      var m = s(p);
      c && (m = m.concat(c(p)));
      for (var w = o(v), k = o(p), y = 0; y < m.length; ++y) {
        var S = m[y];
        if (!r[S] && !(g && g[S]) && !(k && k[S]) && !(w && w[S])) {
          var C = l(p, S);
          try {
            u(v, S, C);
          } catch {}
        }
      }
    }
    return v;
  }
  return ((es = h), es);
}
g1();
var b1 = !0;
function qp(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var iu = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || b1 === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  Up = function (t, r, n) {
    iu(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do (t.insert(r === i ? "." + a : "", i, t.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function _1(e) {
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
var y1 = {
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
  m1 = /[A-Z]|^ms/g,
  w1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Vp = function (t) {
    return t.charCodeAt(1) === 45;
  },
  jd = function (t) {
    return t != null && typeof t != "boolean";
  },
  ts = i1(function (e) {
    return Vp(e) ? e : e.replace(m1, "-$&").toLowerCase();
  }),
  Id = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(w1, function (n, a, i) {
            return ((mt = { name: a, styles: i, next: mt }), a);
          });
    }
    return y1[t] !== 1 && !Vp(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Ca(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1) return ((mt = { name: a.name, styles: a.styles, next: mt }), a.name);
      var i = r;
      if (i.styles !== void 0) {
        var o = i.next;
        if (o !== void 0)
          for (; o !== void 0; )
            ((mt = { name: o.name, styles: o.styles, next: mt }), (o = o.next));
        var u = i.styles + ";";
        return u;
      }
      return k1(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = mt,
          c = r(e);
        return ((mt = s), Ca(e, t, c));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function k1(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += Ca(e, t, r[a]) + ";";
  else
    for (var i in r) {
      var o = r[i];
      if (typeof o != "object") {
        var u = o;
        t != null && t[u] !== void 0
          ? (n += i + "{" + t[u] + "}")
          : jd(u) && (n += ts(i) + ":" + Id(i, u) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var s = 0; s < o.length; s++) jd(o[s]) && (n += ts(i) + ":" + Id(i, o[s]) + ";");
      else {
        var c = Ca(e, t, o);
        switch (i) {
          case "animation":
          case "animationName": {
            n += ts(i) + ":" + c + ";";
            break;
          }
          default:
            n += i + "{" + c + "}";
        }
      }
    }
  return n;
}
var Dd = /label:\s*([^\s;{]+)\s*(;|$)/g,
  mt;
function ou(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  mt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) ((n = !1), (a += Ca(r, t, i)));
  else {
    var o = i;
    a += o[0];
  }
  for (var u = 1; u < e.length; u++)
    if (((a += Ca(r, t, e[u])), n)) {
      var s = i;
      a += s[u];
    }
  Dd.lastIndex = 0;
  for (var c = "", l; (l = Dd.exec(a)) !== null; ) c += "-" + l[1];
  var d = _1(a) + c;
  return { name: d, styles: a, next: mt };
}
var O1 = function (t) {
    return t();
  },
  S1 = Uc.useInsertionEffect ? Uc.useInsertionEffect : !1,
  Gp = S1 || O1,
  Hp = _.createContext(typeof HTMLElement < "u" ? v1({ key: "css" }) : null);
Hp.Provider;
var Wp = function (t) {
    return _.forwardRef(function (r, n) {
      var a = _.useContext(Hp);
      return t(r, a, n);
    });
  },
  Kp = _.createContext({}),
  su = {}.hasOwnProperty,
  Is = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  E1 = function (t, r) {
    var n = {};
    for (var a in r) su.call(r, a) && (n[a] = r[a]);
    return ((n[Is] = t), n);
  },
  x1 = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      iu(r, n, a),
      Gp(function () {
        return Up(r, n, a);
      }),
      null
    );
  },
  C1 = Wp(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[Is],
      i = [n],
      o = "";
    typeof e.className == "string"
      ? (o = qp(t.registered, i, e.className))
      : e.className != null && (o = e.className + " ");
    var u = ou(i, void 0, _.useContext(Kp));
    o += t.key + "-" + u.name;
    var s = {};
    for (var c in e) su.call(e, c) && c !== "css" && c !== Is && (s[c] = e[c]);
    return (
      (s.className = o),
      r && (s.ref = r),
      _.createElement(
        _.Fragment,
        null,
        _.createElement(x1, { cache: t, serialized: u, isStringTag: typeof a == "string" }),
        _.createElement(a, s),
      )
    );
  }),
  R1 = C1,
  qt = function (t, r) {
    var n = arguments;
    if (r == null || !su.call(r, "css")) return _.createElement.apply(void 0, n);
    var a = n.length,
      i = new Array(a);
    ((i[0] = R1), (i[1] = E1(t, r)));
    for (var o = 2; o < a; o++) i[o] = n[o];
    return _.createElement.apply(null, i);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(qt || (qt = {}));
function Dt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return ou(t);
}
var P1 = function e(t) {
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
            for (var u in i) i[u] && u && (o && (o += " "), (o += u));
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
function A1(e, t, r) {
  var n = [],
    a = qp(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var j1 = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Gp(function () {
        for (var a = 0; a < n.length; a++) Up(r, n[a], !1);
      }),
      null
    );
  },
  I1 = Wp(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        var d = ou(c, t.registered);
        return (r.push(d), iu(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        return A1(t.registered, n, P1(c));
      },
      i = { css: n, cx: a, theme: _.useContext(Kp) },
      o = e.children(i);
    return _.createElement(
      _.Fragment,
      null,
      _.createElement(j1, { cache: t, serializedArr: r }),
      o,
    );
  });
function D1(e, t) {
  var r = _.useRef(!0);
  _.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Yp = 2,
  Ds = Dt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Yp,
  }),
  Ts = Dt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Yp,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  T1 = Dt({
    "&:focus": Ds,
    "&:focus-visible": Ds,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  M1 = Dt({
    "&:focus": Ts,
    "&:focus-visible": Ts,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Jp = _.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? Ts : Ds,
      i = r ? M1 : T1,
      o = typeof n > "u" ? i : n === "on" && a;
    return qt(I1, null, function (u) {
      var s = u.css,
        c = u.cx;
      return _.Children.only(
        o ? _.cloneElement(t, { className: c([s(o), t.props.className]) }) : t,
      );
    });
  });
Jp.displayName = "FocusRing";
function $t(e) {
  (e.preventDefault(), e.stopPropagation());
}
var L1 = 9;
function Td(e) {
  e.keyCode !== L1 && $t(e);
}
var F1 = {
    onMouseDownCapture: $t,
    onMouseUpCapture: $t,
    onKeyDownCapture: Td,
    onKeyUpCapture: Td,
    onTouchStartCapture: $t,
    onTouchEndCapture: $t,
    onPointerDownCapture: $t,
    onPointerUpCapture: $t,
    onClickCapture: $t,
    onClick: $t,
  },
  N1 = {};
function $1(e) {
  var t = e.isInteractive;
  return t ? N1 : F1;
}
var Md = "rgba(179, 212, 255, 0.6)",
  Ld = {
    background: {
      default: {
        default: {
          light: "var(--ds-background-neutral, ".concat(Nn, ")"),
          dark: "var(--ds-background-neutral, ".concat($n, ")"),
        },
        hover: {
          light: "var(--ds-background-neutral-hovered, ".concat(wl, ")"),
          dark: "var(--ds-background-neutral-hovered, ".concat(kl, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-pressed, ".concat(Md, ")"),
          dark: "var(--ds-background-neutral-pressed, ".concat(Wa, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Nn, ")"),
          dark: "var(--ds-background-disabled, ".concat($n, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Tr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Tr, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-background-brand-bold, ".concat(Ir, ")"),
          dark: "var(--ds-background-brand-bold, ".concat(bl, ")"),
        },
        hover: {
          light: "var(--ds-background-brand-bold-hovered, ".concat(yl, ")"),
          dark: "var(--ds-background-brand-bold-hovered, ".concat(Wa, ")"),
        },
        active: {
          light: "var(--ds-background-brand-bold-pressed, ".concat(ml, ")"),
          dark: "var(--ds-background-brand-bold-pressed, ".concat(_l, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Nn, ")"),
          dark: "var(--ds-background-disabled, ".concat($n, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Tr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Tr, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-background-warning-bold, ".concat(gl, ")"),
          dark: "var(--ds-background-warning-bold, ".concat(gl, ")"),
        },
        hover: {
          light: "var(--ds-background-warning-bold-hovered, ".concat(hl, ")"),
          dark: "var(--ds-background-warning-bold-hovered, ".concat(hl, ")"),
        },
        active: {
          light: "var(--ds-background-warning-bold-pressed, ".concat(jr, ")"),
          dark: "var(--ds-background-warning-bold-pressed, ".concat(jr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Nn, ")"),
          dark: "var(--ds-background-disabled, ".concat($n, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(jr, ")"),
          dark: "var(--ds-background-selected, ".concat(jr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(jr, ")"),
          dark: "var(--ds-background-selected, ".concat(jr, ")"),
        },
      },
      danger: {
        default: {
          light: "var(--ds-background-danger-bold, ".concat(pl, ")"),
          dark: "var(--ds-background-danger-bold, ".concat(pl, ")"),
        },
        hover: {
          light: "var(--ds-background-danger-bold-hovered, ".concat(vl, ")"),
          dark: "var(--ds-background-danger-bold-hovered, ".concat(vl, ")"),
        },
        active: {
          light: "var(--ds-background-danger-bold-pressed, ".concat(Ar, ")"),
          dark: "var(--ds-background-danger-bold-pressed, ".concat(Ar, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Nn, ")"),
          dark: "var(--ds-background-disabled, ".concat($n, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ar, ")"),
          dark: "var(--ds-background-selected, ".concat(Ar, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ar, ")"),
          dark: "var(--ds-background-selected, ".concat(Ar, ")"),
        },
      },
      link: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(xe, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(xe, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        hover: {
          light: "var(--ds-background-neutral-subtle-hovered, ".concat(wl, ")"),
          dark: "var(--ds-background-neutral-subtle-hovered, ".concat(kl, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-subtle-pressed, ".concat(Md, ")"),
          dark: "var(--ds-background-neutral-subtle-pressed, ".concat(Wa, ")"),
        },
        disabled: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Tr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Tr, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(xe, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(xe, ")"),
        },
      },
    },
    color: {
      default: {
        default: {
          light: "var(--ds-text, ".concat(Oa, ")"),
          dark: "var(--ds-text, ".concat(ut, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Ir, ")"),
          dark: "var(--ds-text, ".concat(Ir, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(zn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(ut, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(ut, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Xt, ")"),
          dark: "var(--ds-text-inverse, ".concat(zn, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(zn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(ut, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(ut, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-text-warning-inverse, ".concat(Dr, ")"),
          dark: "var(--ds-text-warning-inverse, ".concat(Dr, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(zn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Dr, ")"),
          dark: "var(--ds-text-selected, ".concat(Dr, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Dr, ")"),
          dark: "var(--ds-text-selected, ".concat(Dr, ")"),
        },
      },
      danger: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Xt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Xt, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(zn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Xt, ")"),
          dark: "var(--ds-text-selected, ".concat(Xt, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Xt, ")"),
          dark: "var(--ds-text-selected, ".concat(Xt, ")"),
        },
      },
      link: {
        default: {
          light: "var(--ds-link, ".concat(Ir, ")"),
          dark: "var(--ds-link, ".concat(bl, ")"),
        },
        hover: {
          light: "var(--ds-link, ".concat(yl, ")"),
          dark: "var(--ds-link, ".concat(Wa, ")"),
        },
        active: {
          light: "var(--ds-link-pressed, ".concat(ml, ")"),
          dark: "var(--ds-link-pressed, ".concat(_l, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(To, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(We, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(We, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-text, ".concat(Oa, ")"),
          dark: "var(--ds-text, ".concat(ut, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Ir, ")"),
          dark: "var(--ds-text, ".concat(Ir, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(To, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(ut, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(ut, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-text-subtle, ".concat(em, ")"),
          dark: "var(--ds-text-subtle, ".concat(ut, ")"),
        },
        hover: {
          light: "var(--ds-text-subtle, ".concat(Zy, ")"),
          dark: "var(--ds-text-subtle, ".concat(Qy, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(tm, ")"),
          dark: "var(--ds-text, ".concat(rm, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(To, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(ut, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(ut, ")"),
        },
      },
    },
  };
function Fd(e, t) {
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
      ? Fd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Fd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Zt = 8,
  rs = ["default", "primary", "danger", "warning"],
  Ms = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  z1 = { default: Ms.default, compact: Ms.compact, none: "inherit" },
  B1 = {
    default: "0 ".concat(Zt + Zt / 4, "px"),
    compact: "0 ".concat(Zt + Zt / 4, "px"),
    none: "0",
  },
  q1 = { compact: "0 ".concat(Zt / 4, "px"), default: "0 ".concat(Zt / 4, "px"), none: "0" },
  U1 = { default: "middle", compact: "middle", none: "baseline" },
  Xp = { content: "0 ".concat(Zt / 4, "px"), icon: "0 ".concat(Zt / 4, "px") },
  Qp = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  V1 = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #172B4D)",
    "&::after": ne(ne({}, Qp), {}, { content: '""', borderColor: "var(--ds-border, #091E4224)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #091E4224)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #091E424F)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  G1 = {
    background: "var(--ds-background-brand-bold, #0C66E4)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #0055CC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #09326C)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #0C66E4)",
    },
  },
  H1 = {
    background: "transparent",
    color: "var(--ds-link, #0C66E4)",
    "&:hover": { color: "var(--ds-link, #0C66E4)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #0055CC)", textDecoration: "underline" },
  },
  W1 = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #091E420F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #091E4224)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  K1 = {
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
  Y1 = {
    background: "var(--ds-background-warning-bold, #F5CD47)",
    color: "var(--ds-text-warning-inverse, #172B4D)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #E2B203)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #CF9F02)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #F5CD47)",
    },
  },
  J1 = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #5D1F1A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  X1 = {
    background: "var(--ds-background-selected, #E9F2FF)",
    color: "var(--ds-text-selected, #0C66E4)",
    "&:not([disabled])::after": ne(
      ne({}, Qp),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #0C66E4)" },
    ),
  },
  Nd = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function $d(e) {
  var t = e.group,
    r = e.key,
    n = e.mode,
    a = t[r] || t.default;
  return a[n];
}
function Br(e) {
  var t = e.appearance,
    r = e.key,
    n = e.mode;
  return {
    background: $d({ group: Ld.background[t], key: r, mode: n }),
    color: "".concat($d({ group: Ld.color[t], key: r, mode: n }), " !important"),
  };
}
function Q1(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.mode,
    a = e.isSelected,
    i = e.shouldFitContainer,
    o = e.isOnlySingleIcon,
    u = Br({ appearance: t, key: a ? "selected" : "default", mode: n });
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
          !Fe("platform-component-visual-refresh") && u,
        ),
        {},
        {
          cursor: "pointer",
          height: Ms[r],
          lineHeight: z1[r],
          padding: o ? q1[r] : B1[r],
          verticalAlign: U1[r],
          width: i ? "100%" : "auto",
          justifyContent: "center",
        },
        !Fe("platform-component-visual-refresh") &&
          ne(
            ne(
              {
                "&:visited": ne({}, u),
                "&:hover": ne(
                  ne({}, Br({ appearance: t, key: a ? "selected" : "hover", mode: n })),
                  {},
                  {
                    textDecoration:
                      !a && (t === "link" || t === "subtle-link") ? "underline" : "inherit",
                    transitionDuration: "0s, 0.15s",
                  },
                ),
                "&:active": ne(
                  ne({}, Br({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                '&[data-firefox-is-active="true"]': ne(
                  ne({}, Br({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                "&[disabled]": ne(
                  ne({}, Br({ appearance: t, key: "disabled", mode: n })),
                  {},
                  { cursor: "not-allowed", textDecoration: "none" },
                ),
              },
              Nd,
            ),
            {},
            {
              '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active':
                ne({}, Br({ appearance: t, key: a ? "selected" : "default", mode: n })),
            },
          ),
      ),
      Fe("platform-component-visual-refresh") &&
        (a
          ? X1
          : ne(
              ne(
                ne(
                  ne(
                    ne(
                      ne(
                        ne(ne({}, t === "default" && V1), t === "primary" && G1),
                        t === "link" && H1,
                      ),
                      t === "subtle" && W1,
                    ),
                    t === "subtle-link" && K1,
                  ),
                  t === "warning" && Y1,
                ),
                t === "danger" && J1,
              ),
              {},
              {
                "&[disabled]": {
                  color: "var(--ds-text-disabled, #091E424F)",
                  backgroundColor: rs.includes(t)
                    ? "var(--ds-background-disabled, #091E4208)"
                    : "transparent",
                  cursor: "not-allowed",
                  textDecoration: "none",
                  "&:hovered": {
                    backgroundColor: rs.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                  "&:active": {
                    backgroundColor: rs.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                },
              },
              Nd,
            )),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function zd(e) {
  var t = e.spacing;
  return Dt({
    display: "flex",
    margin: t === "none" ? 0 : Xp.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function Z1(e) {
  var t = e.spacing;
  return Dt({
    margin: t === "none" ? 0 : Xp.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function ek(e) {
  var t = e.hasOverlay;
  return Dt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var tk = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  uu = function (t) {
    return t && _.isValidElement(t) && t.type === Tp;
  },
  rk = [
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
  nk = { "> *": { pointerEvents: "none" } },
  ak = Dt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  ik = Dt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  Bd = function (t, r) {
    return !t || uu(t) ? null : r;
  },
  ok = function (t, r) {
    return uu(t) ? t : t ? qt("span", { css: r }, t) : null;
  },
  sk = O.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      a = t.appearance,
      i = a === void 0 ? "default" : a,
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
      b = t.isDisabled,
      m = b === void 0 ? !1 : b,
      w = t.isSelected,
      k = w === void 0 ? !1 : w,
      y = t.onBlur,
      S = t.onClick,
      C = S === void 0 ? we : S,
      I = t.onFocus,
      T = t.onMouseDown,
      P = T === void 0 ? we : T,
      M = t.overlay;
    t.shouldFitContainer;
    var B = t.spacing,
      z = B === void 0 ? "default" : B,
      V = t.tabIndex,
      J = V === void 0 ? 0 : V,
      G = t.type,
      U = G === void 0 ? (d ? void 0 : "button") : G,
      X = t.testId,
      N = ae(t, rk),
      j = _.useRef(),
      be = _.useCallback(
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
    D1(j, u);
    var oe = _.useContext(Qs),
      ue = _.useCallback(
        function (pe, Ve) {
          (oe && oe.tracePress(g, pe.timeStamp), C(pe, Ve));
        },
        [C, oe, g],
      ),
      le = ka({
        fn: ue,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "23.5.2",
        analyticsData: n,
      }),
      ge = _.useCallback(
        function (pe) {
          (pe.preventDefault(), P(pe));
        },
        [P],
      );
    _.useEffect(
      function () {
        var pe = j.current;
        m && pe && pe === document.activeElement && pe.blur();
      },
      [m],
    );
    var ce = !!M,
      Ue = Dt(ek({ hasOverlay: ce })),
      ke = !m && !ce,
      it = {};
    return (
      (k || m || i === "warning") &&
        (it = {
          "[data-theme] & circle": {
            stroke: "".concat(
              k || m
                ? "var(--ds-icon-subtle, ".concat(Oa, ")")
                : "var(--ds-icon-warning-inverse, ".concat(Oa, ")"),
              " !important",
            ),
          },
        }),
      qt(
        Jp,
        null,
        qt(
          h,
          te(
            {},
            N,
            {
              ref: be,
              className: l,
              css: [s, ke ? null : nk],
              "data-has-overlay": ce ? !0 : void 0,
              "data-testid": X,
              disabled: m,
              href: ke ? d : void 0,
              onBlur: y,
              onClick: le,
              onFocus: I,
              onMouseDown: ge,
              tabIndex: m ? -1 : J,
              type: U,
            },
            $1({ isInteractive: ke }),
          ),
          p ? qt("span", { css: [Ue, zd({ spacing: z }), Bd(c, ak)] }, p) : null,
          ok(c, [Ue, Z1({ spacing: z })]),
          v ? qt("span", { css: [Ue, zd({ spacing: z }), Bd(c, ik)] }, v) : null,
          M ? qt("span", { css: [tk, it] }, M) : null,
        ),
      )
    );
  });
function uk(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return uu(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var ck = [
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
  qd = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  cu = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        i = t.children,
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
        b = g === void 0 ? "default" : g,
        m = ae(t, ck),
        w = Fw(),
        k = w.mode,
        y = uk({ children: i, iconBefore: o, iconAfter: u }),
        S = _.useState(!1),
        C = K(S, 2),
        I = C[0],
        T = C[1],
        P = _.useCallback(
          function (z) {
            (d(z), qd && T(!0));
          },
          [d, T],
        ),
        M = _.useCallback(
          function (z) {
            (h(z), qd && T(!1));
          },
          [h, T],
        ),
        B = _.useMemo(
          function () {
            return Q1({
              appearance: a,
              spacing: b,
              mode: k,
              isSelected: c,
              shouldFitContainer: p,
              isOnlySingleIcon: y,
            });
          },
          [a, b, k, c, p, y],
        );
      return O.createElement(
        sk,
        te({}, m, {
          ref: r,
          appearance: a,
          buttonCss: B,
          children: i,
          "data-firefox-is-active": I ? !0 : void 0,
          iconAfter: u,
          iconBefore: o,
          isSelected: c,
          onMouseDown: P,
          onMouseUp: M,
          spacing: b,
        }),
      );
    }),
  );
cu.displayName = "Button";
function Ud(e) {
  return O.createElement(cu, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function lk(e) {
  return O.createElement(cu, te({}, e, { appearance: "subtle" }));
}
var dk = { container: "_1e0c1txw _kqswh2mm" };
function fk(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return O.createElement(
    Yi,
    { as: "li", testId: r, key: t, xcss: dk.container, paddingInline: "space.100" },
    O.createElement(
      vw,
      { testId: r && "".concat(r, "-text") },
      O.createElement(Tp, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var Vd = {},
  Gd =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function vk(e, t) {
  return !!(e === t || (Gd(e) && Gd(t)));
}
function pk(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!vk(e[r], t[r])) return !1;
  return !0;
}
function hk(e, t) {
  t === void 0 && (t = pk);
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
var gk = function (t, r, n, a) {
  var i = n.max,
    o = n.ellipsis,
    u = n.transform,
    s = t.length,
    c = s > i,
    l = c && i - 4 < r,
    d = c && r < s - i + 3,
    f = hk(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
      return t.slice(g, b).map(function (m, w) {
        return u(m, g + w, a);
      });
    });
  if (!c) return f(0, s);
  if (l && !d) {
    var h = i - 2;
    return [].concat(
      Te(f(0, 1)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: s - h })],
      Te(f(s - h)),
    );
  }
  if (!l && d) {
    var v = i - 2;
    return [].concat(
      Te(f(0, v)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: v + 1, to: s - 1 })],
      Te(f(s - 1)),
    );
  }
  var p = i - 4;
  return [].concat(
    Te(f(0, 1)),
    [
      o({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(p / 2),
      }),
    ],
    Te(f(r - Math.floor(p / 2), r + p - 1)),
    [o({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: s - 1 })],
    Te(f(s - 1)),
  );
};
function Hd(e, t) {
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
function bk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Hd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ls = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  _k = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.14",
  };
function Wd(e) {
  var t = e.chevronDirection,
    r = t === "left" ? I0 : F0;
  return O.createElement(
    Yi,
    { as: "span", xcss: Ls.navigatorIconWrapper },
    O.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function yk(e, t) {
  var r = e.components,
    n = r === void 0 ? Vd : r,
    a = e.defaultSelectedIndex,
    i = a === void 0 ? 0 : a,
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
    g = p === void 0 ? Vd : p,
    b = e.max,
    m = b === void 0 ? 7 : b,
    w = e.onChange,
    k = w === void 0 ? we : w,
    y = e.pages,
    S = e.getPageLabel,
    C = e.renderEllipsis,
    I = C === void 0 ? fk : C,
    T = e.analyticsContext,
    P = e.testId,
    M = e.isDisabled,
    B = hm(o, function () {
      return i || 0;
    }),
    z = K(B, 2),
    V = z[0],
    J = z[1],
    G = ka(
      bk(
        {
          fn: function (N, j) {
            var be = N.event,
              oe = N.selectedPageIndex;
            (o === void 0 && J(oe), k && k(be, y[oe], j));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: T,
        },
        _k,
      ),
    ),
    U = function (N, j, be) {
      var oe = y[V],
        ue = "".concat(l, " ").concat(S ? S(N, j) : N),
        le = N === oe;
      return O.createElement(
        ii,
        { as: "li", xcss: Ls.paginationMenuItem, key: "page-".concat(S ? S(N, j) : j) },
        O.createElement(
          lk,
          {
            component: n.Page,
            onClick: function (ce) {
              return G({ event: ce, selectedPageIndex: j });
            },
            "aria-current": le ? "page" : void 0,
            "aria-label": ue,
            isSelected: le,
            isDisabled: M,
            page: N,
            testId:
              be &&
              ""
                .concat(be, "--")
                .concat(le ? "current-" : "", "page-")
                .concat(j),
          },
          S ? S(N, j) : N,
        ),
      );
    };
  return O.createElement(
    Yi,
    { testId: P, style: g, ref: t, "aria-label": s, as: "nav" },
    O.createElement(
      ii,
      { space: "space.0", alignBlock: "center" },
      O.createElement(Ud, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (N) {
          return G({ event: N, selectedPageIndex: V - 1 });
        },
        isDisabled: M || V === 0,
        iconBefore: O.createElement(Wd, { chevronDirection: "left" }),
        "aria-label": f,
        testId: P && "".concat(P, "--left-navigator"),
      }),
      O.createElement(
        ii,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Ls.paginationMenu },
        gk(y, V, { max: m, ellipsis: I, transform: U }, P),
      ),
      O.createElement(Ud, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (N) {
          return G({ event: N, selectedPageIndex: V + 1 });
        },
        isDisabled: M || V === y.length - 1,
        iconBefore: O.createElement(Wd, { chevronDirection: "right" }),
        "aria-label": v,
        testId: P && "".concat(P, "--right-navigator"),
      }),
    ),
  );
}
var mk = _.memo(_.forwardRef(yk));
function wk(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Zp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var kk = (function (e) {
    function t() {
      var r;
      fe(this, t);
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
      return (
        (r = wk(this, t, [].concat(a))),
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
              a = n.total,
              i = n.value,
              o = i === void 0 ? 1 : i,
              u = n.i18n,
              s = n.testId,
              c = n.isDisabled,
              l = Te(Array(a)).map(function (f, h) {
                return h + 1;
              }),
              d = o - 1;
            return O.createElement(mk, {
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
  })(O.Component),
  Ok = ["isRanking", "testId"],
  Sk = [
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
function ta(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Kd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Yd = "--local-dynamic-table-text-color",
  Ek = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = ae(t, Ok);
    return _.createElement(
      "thead",
      te({ "data-testid": n }, a, { className: R(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  xk = _.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      i = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var u = e.style,
      s = e.testId,
      c = ae(e, Sk),
      l = ta(
        ta(ta({}, u), r && up({ width: r })),
        {},
        x({}, Yd, "var(--ds-text-subtlest, #626F86)"),
      ),
      d = a === yr,
      f = a === Ei,
      h = function () {
        if (d) return "ascending";
        if (f) return "descending";
      },
      v = n ? "th" : "td";
    return _.createElement(
      v,
      te({ "aria-sort": h(), onClick: void 0, ref: t, "data-testid": s }, c, {
        className: R([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r187z _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbi3bv",
          "_1bsb8a2a",
          i && o && "_1bto1l2s _o5721q9c",
          i && "_1reo15vq _18m915vq",
        ]),
        style: ta(
          ta({}, l),
          {},
          { "--_17ckjys": op("var(--ds-text-subtle, ".concat("var(".concat(Yd, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function Ck(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, eh() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function eh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (eh = function () {
    return !!e;
  })();
}
function Rk(e) {
  return (function (t) {
    function r() {
      var n;
      fe(this, r);
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return (
        (n = Ck(this, r, [].concat(i))),
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
            return O.createElement(
              e,
              te({ refWidth: i, refHeight: o, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(O.Component);
}
var ra = {},
  Jd;
function Pk() {
  if (Jd) return ra;
  ((Jd = 1), Object.defineProperty(ra, "__esModule", { value: !0 }), (ra.default = void 0));
  var e = r(pt()),
    t = r(Ki);
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
  return ((n.displayName = "ArrowDownIcon"), (ra.default = n), ra);
}
var Ak = Pk();
const jk = rr(Ak);
var na = {},
  Xd;
function Ik() {
  if (Xd) return na;
  ((Xd = 1), Object.defineProperty(na, "__esModule", { value: !0 }), (na.default = void 0));
  var e = r(pt()),
    t = r(Ki);
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
  return ((n.displayName = "ArrowUpIcon"), (na.default = n), na);
}
var Dk = Ik();
const Tk = rr(Dk);
var Mk = "Escape";
function Lk(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = _.useRef(!1),
    a = _.useCallback(
      function (o) {
        r || n.current || o.key !== Mk || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    i = _.useCallback(function () {
      n.current = !1;
    }, []);
  _.useEffect(
    function () {
      if (!(r && Fe("platform_only_attach_escape_handler_on_view")))
        return Ji.bindAll(
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
function aa(e) {
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
var Fk = _.createContext(null),
  Nk = _.createContext(null);
function $k() {
  var e = _.useContext(Nk);
  return e;
}
function zk(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    a = _.useContext(Fk),
    i = $k();
  _.useEffect(
    function () {
      if (a !== null && t) return a.onClose(n, { namespace: i, type: r });
    },
    [a, t, i, n, r],
  );
}
var ua = { none: 0, small: 100, medium: 350, large: 700 },
  ns = 0.5,
  Bk = { none: ua.none, small: ua.small * ns, medium: ua.medium * ns, large: ua.large * ns },
  qk = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  Uk = function () {
    if (!qk()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  Vk = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  Gk = function () {
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
      }, Vk(t)),
      _.useCallback(function (n, a) {
        for (var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), u = 2; u < i; u++)
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
            a,
          ].concat(o),
        );
        r.current.push(s);
      }, [])
    );
  },
  th = { appear: !0, isExiting: !1 },
  rh = _.createContext(th),
  Qd = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : th;
    return O.createElement(rh.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  Zd = function (t) {
    var r = [];
    return (
      _.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  Hk = function (t, r) {
    for (var n = r.concat([]), a = Wk(r), i = 0; i < t.length; i++) {
      var o = t[i],
        u = !a[o.key];
      u && n.splice(i + 1, 0, o);
    }
    return n;
  },
  Wk = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  Kk = function (t, r) {
    for (
      var n = new Set(
          t.map(function (s) {
            return s.key;
          }),
        ),
        a = new Set(),
        i = 0;
      i < r.length;
      i++
    ) {
      var o = r[i],
        u = o.key;
      n.has(u) || a.add(u);
    }
    return a;
  },
  nh = _.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      i = _.useState([null, n]),
      o = K(i, 2),
      u = o[0],
      s = o[1],
      c = _.useState([]),
      l = K(c, 2),
      d = l[0],
      f = l[1],
      h = _.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      v = K(h, 2),
      p = v[0],
      g = v[1];
    if (
      (_.useEffect(function () {
        p.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      typeof u == "boolean")
    )
      return n;
    var b = K(u, 2),
      m = b[0],
      w = b[1],
      k = Zd(m),
      y = Zd(w);
    w !== n && s([w, n]);
    var S = Kk(y, k),
      C = !!S.size,
      I = y;
    if ((C && (I = Hk(y, k)), a))
      if (d.length) I = d;
      else {
        var T = I.filter(function (P) {
          return S.has(P.key);
        });
        T.length && f(T);
      }
    return (
      S.size
        ? (I = I.map(function (P) {
            var M = S.has(P.key);
            return Qd(P, {
              appear: !0,
              isExiting: M,
              onFinish: M
                ? function () {
                    (S.delete(P.key), S.size === 0 && (s([null, n]), f([])));
                  }
                : void 0,
            });
          }))
        : (I = I.map(function (P) {
            return Qd(P, p);
          })),
      I
    );
  }),
  Yk = function () {
    return _.useContext(rh);
  };
nh.displayName = "ExitingPersistence";
function Jk() {
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
var Xk = _.createContext(function () {
    return { isReady: !0, delay: 0, ref: we };
  }),
  Qk = function () {
    var t = Jk(),
      r = _.useContext(Xk);
    return r(t);
  },
  Zk = function (t) {
    var r = t.children,
      n = t.animationTimingFunction,
      a = t.animationTimingFunctionExiting,
      i = a === void 0 ? n : a,
      o = t.enteringAnimation,
      u = t.exitingAnimation,
      s = u === void 0 ? o : u,
      c = t.isPaused,
      l = t.onFinish,
      d = t.duration,
      f = d === void 0 ? "large" : d,
      h = Qk(),
      v = Yk(),
      p = v.isExiting,
      g = v.onFinish,
      b = v.appear,
      m = Gk(),
      w = c || !h.isReady,
      k = p ? 0 : h.delay,
      y = p ? "exiting" : "entering",
      S = _.useState(b),
      C = K(S, 2),
      I = C[0],
      T = C[1];
    return (
      _.useEffect(
        function () {
          var P = !1;
          if (!w) {
            if (!b) {
              l && l(y);
              return;
            }
            var M = function () {
              (y === "exiting" && g?.(), P || T(!1), l?.(y));
            };
            if (Uk()) {
              M();
              return;
            }
            return (
              T(!0),
              m(M, p ? Bk[f] : ua[f] + k),
              function () {
                P = !0;
              }
            );
          }
        },
        [g, y, p, f, k, w, m],
      ),
      r(
        {
          ref: h.ref,
          className: I
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
                p && i === "ease-out" && R(["_1pgldkwg"]),
                p && i === "ease-in" && R(["_1pgl1nzg"]),
                p && i === "ease-in-40-out" && R(["_1pgl5y64"]),
                p && i === "ease-in-60-out" && R(["_1pgl1ddy"]),
                p && i === "ease-in-80-out" && R(["_1pglannl"]),
                p && i === "ease-in-out" && R(["_1pgl1fu8"]),
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
          style: { animationDelay: "".concat(k, "ms") },
        },
        y,
      )
    );
  },
  eO = { top: "bottom", bottom: "top", left: "right", right: "left" },
  tO = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      i = t.entranceDirection,
      o = t.exitDirection,
      u = t.distance,
      s = u === void 0 ? "proportional" : u,
      c = t.onFinish,
      l = t.isPaused,
      d = i !== void 0 ? eO[i] : void 0,
      f =
        o || d
          ? "fade-out-from-".concat(o || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return O.createElement(
      Zk,
      {
        duration: a,
        enteringAnimation: i
          ? "fade-in-from-".concat(i).concat(s === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: f,
        animationTimingFunction: "ease-in-out",
        onFinish: c,
        isPaused: l,
      },
      r,
    );
  },
  rO = _.createContext();
_.createContext();
var nO = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  aO = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  iO = function (t, r) {
    if (typeof t == "function") return aO(t, r);
    t != null && (t.current = r);
  },
  ef = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        i = n[1];
      return ((r[a] = i), r);
    }, {});
  },
  tf =
    typeof window < "u" && window.document && window.document.createElement
      ? _.useLayoutEffect
      : _.useEffect,
  Pe = "top",
  rt = "bottom",
  nt = "right",
  Ae = "left",
  lu = "auto",
  Fa = [Pe, rt, nt, Ae],
  Xr = "start",
  Ra = "end",
  oO = "clippingParents",
  ah = "viewport",
  ia = "popper",
  sO = "reference",
  rf = Fa.reduce(function (e, t) {
    return e.concat([t + "-" + Xr, t + "-" + Ra]);
  }, []),
  ih = [].concat(Fa, [lu]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Xr, t + "-" + Ra]);
  }, []),
  uO = "beforeRead",
  cO = "read",
  lO = "afterRead",
  dO = "beforeMain",
  fO = "main",
  vO = "afterMain",
  pO = "beforeWrite",
  hO = "write",
  gO = "afterWrite",
  bO = [uO, cO, lO, dO, fO, vO, pO, hO, gO];
function At(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function $e(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function mr(e) {
  var t = $e(e).Element;
  return e instanceof t || e instanceof Element;
}
function tt(e) {
  var t = $e(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function du(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = $e(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function _O(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      i = t.elements[r];
    !tt(i) ||
      !At(i) ||
      (Object.assign(i.style, n),
      Object.keys(a).forEach(function (o) {
        var u = a[o];
        u === !1 ? i.removeAttribute(o) : i.setAttribute(o, u === !0 ? "" : u);
      }));
  });
}
function yO(e) {
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
          u = o.reduce(function (s, c) {
            return ((s[c] = ""), s);
          }, {});
        !tt(a) ||
          !At(a) ||
          (Object.assign(a.style, u),
          Object.keys(i).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const mO = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: _O,
  effect: yO,
  requires: ["computeStyles"],
};
function Ct(e) {
  return e.split("-")[0];
}
var pr = Math.max,
  Pi = Math.min,
  Qr = Math.round;
function Fs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function oh() {
  return !/^((?!chrome|android).)*safari/i.test(Fs());
}
function Zr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    i = 1;
  t &&
    tt(e) &&
    ((a = (e.offsetWidth > 0 && Qr(n.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Qr(n.height) / e.offsetHeight) || 1));
  var o = mr(e) ? $e(e) : window,
    u = o.visualViewport,
    s = !oh() && r,
    c = (n.left + (s && u ? u.offsetLeft : 0)) / a,
    l = (n.top + (s && u ? u.offsetTop : 0)) / i,
    d = n.width / a,
    f = n.height / i;
  return { width: d, height: f, top: l, right: c + d, bottom: l + f, left: c, x: c, y: l };
}
function fu(e) {
  var t = Zr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function sh(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && du(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Gt(e) {
  return $e(e).getComputedStyle(e);
}
function wO(e) {
  return ["table", "td", "th"].indexOf(At(e)) >= 0;
}
function ar(e) {
  return ((mr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function eo(e) {
  return At(e) === "html" ? e : e.assignedSlot || e.parentNode || (du(e) ? e.host : null) || ar(e);
}
function nf(e) {
  return !tt(e) || Gt(e).position === "fixed" ? null : e.offsetParent;
}
function kO(e) {
  var t = /firefox/i.test(Fs()),
    r = /Trident/i.test(Fs());
  if (r && tt(e)) {
    var n = Gt(e);
    if (n.position === "fixed") return null;
  }
  var a = eo(e);
  for (du(a) && (a = a.host); tt(a) && ["html", "body"].indexOf(At(a)) < 0; ) {
    var i = Gt(a);
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
function Na(e) {
  for (var t = $e(e), r = nf(e); r && wO(r) && Gt(r).position === "static"; ) r = nf(r);
  return r && (At(r) === "html" || (At(r) === "body" && Gt(r).position === "static"))
    ? t
    : r || kO(e) || t;
}
function vu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function pa(e, t, r) {
  return pr(e, Pi(t, r));
}
function OO(e, t, r) {
  var n = pa(e, t, r);
  return n > r ? r : n;
}
function uh() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ch(e) {
  return Object.assign({}, uh(), e);
}
function lh(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var SO = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    ch(typeof t != "number" ? t : lh(t, Fa))
  );
};
function EO(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    i = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    u = Ct(r.placement),
    s = vu(u),
    c = [Ae, nt].indexOf(u) >= 0,
    l = c ? "height" : "width";
  if (!(!i || !o)) {
    var d = SO(a.padding, r),
      f = fu(i),
      h = s === "y" ? Pe : Ae,
      v = s === "y" ? rt : nt,
      p = r.rects.reference[l] + r.rects.reference[s] - o[s] - r.rects.popper[l],
      g = o[s] - r.rects.reference[s],
      b = Na(i),
      m = b ? (s === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      w = p / 2 - g / 2,
      k = d[h],
      y = m - f[l] - d[v],
      S = m / 2 - f[l] / 2 + w,
      C = pa(k, S, y),
      I = s;
    r.modifiersData[n] = ((t = {}), (t[I] = C), (t.centerOffset = C - S), t);
  }
}
function xO(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (sh(t.elements.popper, a) && (t.elements.arrow = a)));
}
const CO = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: EO,
  effect: xO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function en(e) {
  return e.split("-")[1];
}
var RO = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function PO(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Qr(r * a) / a || 0, y: Qr(n * a) / a || 0 };
}
function af(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    a = e.placement,
    i = e.variation,
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
  var b = o.hasOwnProperty("x"),
    m = o.hasOwnProperty("y"),
    w = Ae,
    k = Pe,
    y = window;
  if (c) {
    var S = Na(r),
      C = "clientHeight",
      I = "clientWidth";
    if (
      (S === $e(r) &&
        ((S = ar(r)),
        Gt(S).position !== "static" &&
          u === "absolute" &&
          ((C = "scrollHeight"), (I = "scrollWidth"))),
      (S = S),
      a === Pe || ((a === Ae || a === nt) && i === Ra))
    ) {
      k = rt;
      var T = d && S === y && y.visualViewport ? y.visualViewport.height : S[C];
      ((p -= T - n.height), (p *= s ? 1 : -1));
    }
    if (a === Ae || ((a === Pe || a === rt) && i === Ra)) {
      w = nt;
      var P = d && S === y && y.visualViewport ? y.visualViewport.width : S[I];
      ((h -= P - n.width), (h *= s ? 1 : -1));
    }
  }
  var M = Object.assign({ position: u }, c && RO),
    B = l === !0 ? PO({ x: h, y: p }, $e(r)) : { x: h, y: p };
  if (((h = B.x), (p = B.y), s)) {
    var z;
    return Object.assign(
      {},
      M,
      ((z = {}),
      (z[k] = m ? "0" : ""),
      (z[w] = b ? "0" : ""),
      (z.transform =
        (y.devicePixelRatio || 1) <= 1
          ? "translate(" + h + "px, " + p + "px)"
          : "translate3d(" + h + "px, " + p + "px, 0)"),
      z),
    );
  }
  return Object.assign(
    {},
    M,
    ((t = {}), (t[k] = m ? p + "px" : ""), (t[w] = b ? h + "px" : ""), (t.transform = ""), t),
  );
}
function AO(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    i = r.adaptive,
    o = i === void 0 ? !0 : i,
    u = r.roundOffsets,
    s = u === void 0 ? !0 : u,
    c = {
      placement: Ct(t.placement),
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
      af(
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
        af(
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
const jO = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: AO, data: {} };
var ei = { passive: !0 };
function IO(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    i = a === void 0 ? !0 : a,
    o = n.resize,
    u = o === void 0 ? !0 : o,
    s = $e(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      c.forEach(function (l) {
        l.addEventListener("scroll", r.update, ei);
      }),
    u && s.addEventListener("resize", r.update, ei),
    function () {
      (i &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", r.update, ei);
        }),
        u && s.removeEventListener("resize", r.update, ei));
    }
  );
}
const DO = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: IO,
  data: {},
};
var TO = { left: "right", right: "left", bottom: "top", top: "bottom" };
function li(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return TO[t];
  });
}
var MO = { start: "end", end: "start" };
function of(e) {
  return e.replace(/start|end/g, function (t) {
    return MO[t];
  });
}
function pu(e) {
  var t = $e(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function hu(e) {
  return Zr(ar(e)).left + pu(e).scrollLeft;
}
function LO(e, t) {
  var r = $e(e),
    n = ar(e),
    a = r.visualViewport,
    i = n.clientWidth,
    o = n.clientHeight,
    u = 0,
    s = 0;
  if (a) {
    ((i = a.width), (o = a.height));
    var c = oh();
    (c || (!c && t === "fixed")) && ((u = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: i, height: o, x: u + hu(e), y: s };
}
function FO(e) {
  var t,
    r = ar(e),
    n = pu(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = pr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    o = pr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    u = -n.scrollLeft + hu(e),
    s = -n.scrollTop;
  return (
    Gt(a || r).direction === "rtl" && (u += pr(r.clientWidth, a ? a.clientWidth : 0) - i),
    { width: i, height: o, x: u, y: s }
  );
}
function gu(e) {
  var t = Gt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function dh(e) {
  return ["html", "body", "#document"].indexOf(At(e)) >= 0
    ? e.ownerDocument.body
    : tt(e) && gu(e)
      ? e
      : dh(eo(e));
}
function ha(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = dh(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = $e(n),
    o = a ? [i].concat(i.visualViewport || [], gu(n) ? n : []) : n,
    u = t.concat(o);
  return a ? u : u.concat(ha(eo(o)));
}
function Ns(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function NO(e, t) {
  var r = Zr(e, !1, t === "fixed");
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
function sf(e, t, r) {
  return t === ah ? Ns(LO(e, r)) : mr(t) ? NO(t, r) : Ns(FO(ar(e)));
}
function $O(e) {
  var t = ha(eo(e)),
    r = ["absolute", "fixed"].indexOf(Gt(e).position) >= 0,
    n = r && tt(e) ? Na(e) : e;
  return mr(n)
    ? t.filter(function (a) {
        return mr(a) && sh(a, n) && At(a) !== "body";
      })
    : [];
}
function zO(e, t, r, n) {
  var a = t === "clippingParents" ? $O(e) : [].concat(t),
    i = [].concat(a, [r]),
    o = i[0],
    u = i.reduce(
      function (s, c) {
        var l = sf(e, c, n);
        return (
          (s.top = pr(l.top, s.top)),
          (s.right = Pi(l.right, s.right)),
          (s.bottom = Pi(l.bottom, s.bottom)),
          (s.left = pr(l.left, s.left)),
          s
        );
      },
      sf(e, o, n),
    );
  return (
    (u.width = u.right - u.left),
    (u.height = u.bottom - u.top),
    (u.x = u.left),
    (u.y = u.top),
    u
  );
}
function fh(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? Ct(n) : null,
    i = n ? en(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    s;
  switch (a) {
    case Pe:
      s = { x: o, y: t.y - r.height };
      break;
    case rt:
      s = { x: o, y: t.y + t.height };
      break;
    case nt:
      s = { x: t.x + t.width, y: u };
      break;
    case Ae:
      s = { x: t.x - r.width, y: u };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var c = a ? vu(a) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (i) {
      case Xr:
        s[c] = s[c] - (t[l] / 2 - r[l] / 2);
        break;
      case Ra:
        s[c] = s[c] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function Pa(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    i = r.strategy,
    o = i === void 0 ? e.strategy : i,
    u = r.boundary,
    s = u === void 0 ? oO : u,
    c = r.rootBoundary,
    l = c === void 0 ? ah : c,
    d = r.elementContext,
    f = d === void 0 ? ia : d,
    h = r.altBoundary,
    v = h === void 0 ? !1 : h,
    p = r.padding,
    g = p === void 0 ? 0 : p,
    b = ch(typeof g != "number" ? g : lh(g, Fa)),
    m = f === ia ? sO : ia,
    w = e.rects.popper,
    k = e.elements[v ? m : f],
    y = zO(mr(k) ? k : k.contextElement || ar(e.elements.popper), s, l, o),
    S = Zr(e.elements.reference),
    C = fh({ reference: S, element: w, placement: a }),
    I = Ns(Object.assign({}, w, C)),
    T = f === ia ? I : S,
    P = {
      top: y.top - T.top + b.top,
      bottom: T.bottom - y.bottom + b.bottom,
      left: y.left - T.left + b.left,
      right: T.right - y.right + b.right,
    },
    M = e.modifiersData.offset;
  if (f === ia && M) {
    var B = M[a];
    Object.keys(P).forEach(function (z) {
      var V = [nt, rt].indexOf(z) >= 0 ? 1 : -1,
        J = [Pe, rt].indexOf(z) >= 0 ? "y" : "x";
      P[z] += B[J] * V;
    });
  }
  return P;
}
function BO(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    i = r.rootBoundary,
    o = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    c = s === void 0 ? ih : s,
    l = en(n),
    d = l
      ? u
        ? rf
        : rf.filter(function (v) {
            return en(v) === l;
          })
      : Fa,
    f = d.filter(function (v) {
      return c.indexOf(v) >= 0;
    });
  f.length === 0 && (f = d);
  var h = f.reduce(function (v, p) {
    return ((v[p] = Pa(e, { placement: p, boundary: a, rootBoundary: i, padding: o })[Ct(p)]), v);
  }, {});
  return Object.keys(h).sort(function (v, p) {
    return h[v] - h[p];
  });
}
function qO(e) {
  if (Ct(e) === lu) return [];
  var t = li(e);
  return [of(e), t, of(t)];
}
function UO(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var a = r.mainAxis,
        i = a === void 0 ? !0 : a,
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
        b = Ct(g),
        m = b === g,
        w = s || (m || !v ? [li(g)] : qO(g)),
        k = [g].concat(w).reduce(function (le, ge) {
          return le.concat(
            Ct(ge) === lu
              ? BO(t, {
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
        y = t.rects.reference,
        S = t.rects.popper,
        C = new Map(),
        I = !0,
        T = k[0],
        P = 0;
      P < k.length;
      P++
    ) {
      var M = k[P],
        B = Ct(M),
        z = en(M) === Xr,
        V = [Pe, rt].indexOf(B) >= 0,
        J = V ? "width" : "height",
        G = Pa(t, { placement: M, boundary: l, rootBoundary: d, altBoundary: f, padding: c }),
        U = V ? (z ? nt : Ae) : z ? rt : Pe;
      y[J] > S[J] && (U = li(U));
      var X = li(U),
        N = [];
      if (
        (i && N.push(G[B] <= 0),
        u && N.push(G[U] <= 0, G[X] <= 0),
        N.every(function (le) {
          return le;
        }))
      ) {
        ((T = M), (I = !1));
        break;
      }
      C.set(M, N);
    }
    if (I)
      for (
        var j = v ? 3 : 1,
          be = function (ge) {
            var ce = k.find(function (Ue) {
              var ke = C.get(Ue);
              if (ke)
                return ke.slice(0, ge).every(function (it) {
                  return it;
                });
            });
            if (ce) return ((T = ce), "break");
          },
          oe = j;
        oe > 0;
        oe--
      ) {
        var ue = be(oe);
        if (ue === "break") break;
      }
    t.placement !== T && ((t.modifiersData[n]._skip = !0), (t.placement = T), (t.reset = !0));
  }
}
const VO = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: UO,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function uf(e, t, r) {
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
function cf(e) {
  return [Pe, nt, rt, Ae].some(function (t) {
    return e[t] >= 0;
  });
}
function GO(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    o = Pa(t, { elementContext: "reference" }),
    u = Pa(t, { altBoundary: !0 }),
    s = uf(o, n),
    c = uf(u, a, i),
    l = cf(s),
    d = cf(c);
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
const HO = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: GO,
};
function WO(e, t, r) {
  var n = Ct(e),
    a = [Ae, Pe].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = i[0],
    u = i[1];
  return (
    (o = o || 0),
    (u = (u || 0) * a),
    [Ae, nt].indexOf(n) >= 0 ? { x: u, y: o } : { x: o, y: u }
  );
}
function KO(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    i = a === void 0 ? [0, 0] : a,
    o = ih.reduce(function (l, d) {
      return ((l[d] = WO(d, t.rects, i)), l);
    }, {}),
    u = o[t.placement],
    s = u.x,
    c = u.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o));
}
const YO = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: KO };
function JO(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = fh({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const XO = { name: "popperOffsets", enabled: !0, phase: "read", fn: JO, data: {} };
function QO(e) {
  return e === "x" ? "y" : "x";
}
function ZO(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.mainAxis,
    i = a === void 0 ? !0 : a,
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
    g = Pa(t, { boundary: s, rootBoundary: c, padding: d, altBoundary: l }),
    b = Ct(t.placement),
    m = en(t.placement),
    w = !m,
    k = vu(b),
    y = QO(k),
    S = t.modifiersData.popperOffsets,
    C = t.rects.reference,
    I = t.rects.popper,
    T = typeof p == "function" ? p(Object.assign({}, t.rects, { placement: t.placement })) : p,
    P =
      typeof T == "number"
        ? { mainAxis: T, altAxis: T }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
    M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    B = { x: 0, y: 0 };
  if (S) {
    if (i) {
      var z,
        V = k === "y" ? Pe : Ae,
        J = k === "y" ? rt : nt,
        G = k === "y" ? "height" : "width",
        U = S[k],
        X = U + g[V],
        N = U - g[J],
        j = h ? -I[G] / 2 : 0,
        be = m === Xr ? C[G] : I[G],
        oe = m === Xr ? -I[G] : -C[G],
        ue = t.elements.arrow,
        le = h && ue ? fu(ue) : { width: 0, height: 0 },
        ge = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : uh(),
        ce = ge[V],
        Ue = ge[J],
        ke = pa(0, C[G], le[G]),
        it = w ? C[G] / 2 - j - ke - ce - P.mainAxis : be - ke - ce - P.mainAxis,
        pe = w ? -C[G] / 2 + j + ke + Ue + P.mainAxis : oe + ke + Ue + P.mainAxis,
        Ve = t.elements.arrow && Na(t.elements.arrow),
        Er = Ve ? (k === "y" ? Ve.clientTop || 0 : Ve.clientLeft || 0) : 0,
        Tt = (z = M?.[k]) != null ? z : 0,
        Oe = U + it - Tt - Er,
        Se = U + pe - Tt,
        Ht = pa(h ? Pi(X, Oe) : X, U, h ? pr(N, Se) : N);
      ((S[k] = Ht), (B[k] = Ht - U));
    }
    if (u) {
      var bt,
        ot = k === "x" ? Pe : Ae,
        Wt = k === "x" ? rt : nt,
        Ge = S[y],
        De = y === "y" ? "height" : "width",
        Ee = Ge + g[ot],
        st = Ge - g[Wt],
        Kt = [Pe, Ae].indexOf(b) !== -1,
        $a = (bt = M?.[y]) != null ? bt : 0,
        za = Kt ? Ee : Ge - C[De] - I[De] - $a + P.altAxis,
        Ba = Kt ? Ge + C[De] + I[De] - $a - P.altAxis : st,
        qa = h && Kt ? OO(za, Ge, Ba) : pa(h ? za : Ee, Ge, h ? Ba : st);
      ((S[y] = qa), (B[y] = qa - Ge));
    }
    t.modifiersData[n] = B;
  }
}
const eS = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ZO,
  requiresIfExists: ["offset"],
};
function tS(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function rS(e) {
  return e === $e(e) || !tt(e) ? pu(e) : tS(e);
}
function nS(e) {
  var t = e.getBoundingClientRect(),
    r = Qr(t.width) / e.offsetWidth || 1,
    n = Qr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function aS(e, t, r) {
  r === void 0 && (r = !1);
  var n = tt(t),
    a = tt(t) && nS(t),
    i = ar(t),
    o = Zr(e, a, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((At(t) !== "body" || gu(i)) && (u = rS(t)),
      tt(t) ? ((s = Zr(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : i && (s.x = hu(i))),
    {
      x: o.left + u.scrollLeft - s.x,
      y: o.top + u.scrollTop - s.y,
      width: o.width,
      height: o.height,
    }
  );
}
function iS(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function a(i) {
    r.add(i.name);
    var o = [].concat(i.requires || [], i.requiresIfExists || []);
    (o.forEach(function (u) {
      if (!r.has(u)) {
        var s = t.get(u);
        s && a(s);
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
function oS(e) {
  var t = iS(e);
  return bO.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function sS(e) {
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
function uS(e) {
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
var lf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function df() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function cS(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    i = a === void 0 ? lf : a;
  return function (u, s, c) {
    c === void 0 && (c = i);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, lf, i),
        modifiersData: {},
        elements: { reference: u, popper: s },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      h = {
        state: l,
        setOptions: function (b) {
          var m = typeof b == "function" ? b(l.options) : b;
          (p(),
            (l.options = Object.assign({}, i, l.options, m)),
            (l.scrollParents = {
              reference: mr(u) ? ha(u) : u.contextElement ? ha(u.contextElement) : [],
              popper: ha(s),
            }));
          var w = oS(uS([].concat(n, l.options.modifiers)));
          return (
            (l.orderedModifiers = w.filter(function (k) {
              return k.enabled;
            })),
            v(),
            h.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var b = l.elements,
              m = b.reference,
              w = b.popper;
            if (df(m, w)) {
              ((l.rects = {
                reference: aS(m, Na(w), l.options.strategy === "fixed"),
                popper: fu(w),
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
                var y = l.orderedModifiers[k],
                  S = y.fn,
                  C = y.options,
                  I = C === void 0 ? {} : C,
                  T = y.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: I, name: T, instance: h }) || l);
              }
            }
          }
        },
        update: sS(function () {
          return new Promise(function (g) {
            (h.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (p(), (f = !0));
        },
      };
    if (!df(u, s)) return h;
    h.setOptions(c).then(function (g) {
      !f && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function v() {
      l.orderedModifiers.forEach(function (g) {
        var b = g.name,
          m = g.options,
          w = m === void 0 ? {} : m,
          k = g.effect;
        if (typeof k == "function") {
          var y = k({ state: l, name: b, instance: h, options: w }),
            S = function () {};
          d.push(y || S);
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
var lS = [DO, XO, jO, mO, YO, VO, eS, CO, HO],
  dS = cS({ defaultModifiers: lS }),
  as,
  ff;
function fS() {
  if (ff) return as;
  ff = 1;
  var e = typeof Element < "u",
    t = typeof Map == "function",
    r = typeof Set == "function",
    n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function a(i, o) {
    if (i === o) return !0;
    if (i && o && typeof i == "object" && typeof o == "object") {
      if (i.constructor !== o.constructor) return !1;
      var u, s, c;
      if (Array.isArray(i)) {
        if (((u = i.length), u != o.length)) return !1;
        for (s = u; s-- !== 0; ) if (!a(i[s], o[s])) return !1;
        return !0;
      }
      var l;
      if (t && i instanceof Map && o instanceof Map) {
        if (i.size !== o.size) return !1;
        for (l = i.entries(); !(s = l.next()).done; ) if (!o.has(s.value[0])) return !1;
        for (l = i.entries(); !(s = l.next()).done; )
          if (!a(s.value[1], o.get(s.value[0]))) return !1;
        return !0;
      }
      if (r && i instanceof Set && o instanceof Set) {
        if (i.size !== o.size) return !1;
        for (l = i.entries(); !(s = l.next()).done; ) if (!o.has(s.value[0])) return !1;
        return !0;
      }
      if (n && ArrayBuffer.isView(i) && ArrayBuffer.isView(o)) {
        if (((u = i.length), u != o.length)) return !1;
        for (s = u; s-- !== 0; ) if (i[s] !== o[s]) return !1;
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
      if (((c = Object.keys(i)), (u = c.length), u !== Object.keys(o).length)) return !1;
      for (s = u; s-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(o, c[s])) return !1;
      if (e && i instanceof Element) return !1;
      for (s = u; s-- !== 0; )
        if (
          !((c[s] === "_owner" || c[s] === "__v" || c[s] === "__o") && i.$$typeof) &&
          !a(i[c[s]], o[c[s]])
        )
          return !1;
      return !0;
    }
    return i !== i && o !== o;
  }
  return (
    (as = function (o, u) {
      try {
        return a(o, u);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    as
  );
}
var vS = fS();
const pS = rr(vS);
var hS = [],
  gS = function (t, r, n) {
    n === void 0 && (n = {});
    var a = _.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || hS,
      },
      o = _.useState({
        styles: {
          popper: { position: i.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      u = o[0],
      s = o[1],
      c = _.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (h) {
            var v = h.state,
              p = Object.keys(v.elements);
            Ai.flushSync(function () {
              s({
                styles: ef(
                  p.map(function (g) {
                    return [g, v.styles[g] || {}];
                  }),
                ),
                attributes: ef(
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
      l = _.useMemo(
        function () {
          var f = {
            onFirstUpdate: i.onFirstUpdate,
            placement: i.placement,
            strategy: i.strategy,
            modifiers: [].concat(i.modifiers, [c, { name: "applyStyles", enabled: !1 }]),
          };
          return pS(a.current, f) ? a.current || f : ((a.current = f), f);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c],
      ),
      d = _.useRef();
    return (
      tf(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      tf(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || dS,
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
  bS = function () {},
  _S = function () {
    return Promise.resolve(null);
  },
  yS = [];
function mS(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    i = e.modifiers,
    o = i === void 0 ? yS : i,
    u = e.referenceElement,
    s = e.onFirstUpdate,
    c = e.innerRef,
    l = e.children,
    d = _.useContext(rO),
    f = _.useState(null),
    h = f[0],
    v = f[1],
    p = _.useState(null),
    g = p[0],
    b = p[1];
  _.useEffect(
    function () {
      iO(c, h);
    },
    [c, h],
  );
  var m = _.useMemo(
      function () {
        return {
          placement: r,
          strategy: a,
          onFirstUpdate: s,
          modifiers: [].concat(o, [{ name: "arrow", enabled: g != null, options: { element: g } }]),
        };
      },
      [r, a, s, o, g],
    ),
    w = gS(u || d, h, m),
    k = w.state,
    y = w.styles,
    S = w.forceUpdate,
    C = w.update,
    I = _.useMemo(
      function () {
        return {
          ref: v,
          style: y.popper,
          placement: k ? k.placement : r,
          hasPopperEscaped:
            k && k.modifiersData.hide ? k.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            k && k.modifiersData.hide ? k.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: y.arrow, ref: b },
          forceUpdate: S || bS,
          update: C || _S,
        };
      },
      [v, b, r, k, y, C, S],
    );
  return nO(l)(I);
}
function wS(e) {
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
          u,
          s = n.state,
          c = s.modifiersData.maxSizeData;
        if (
          !(
            typeof (c == null || (a = c.viewport) === null || a === void 0 ? void 0 : a.width) !=
              "number" ||
            typeof (c == null || (i = c.viewport) === null || i === void 0 ? void 0 : i.height) !=
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
            b = l.width - 2 * t,
            m = l.height - 2 * t;
          (p === "top" && (m = s.rects.reference.y + g.y - t),
            p === "bottom" && (m = l.height - f.y - t),
            p === "left" && (b = s.rects.reference.x + g.x - t),
            p === "right" && (b = l.width - f.x - t),
            (s.styles.popper.maxWidth = "".concat(b, "px")),
            (s.styles.popper.maxHeight = "".concat(m, "px")));
        }
      },
    },
  ];
}
var $s = 5,
  kS = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: $s,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function OS() {
  return null;
}
var SS = [0, 8];
function ES(e) {
  var t = e.children,
    r = t === void 0 ? OS : t,
    n = e.offset,
    a = n === void 0 ? SS : n,
    i = e.placement,
    o = i === void 0 ? "bottom-start" : i,
    u = e.referenceElement,
    s = u === void 0 ? void 0 : u,
    c = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    f = e.shouldFitViewport,
    h = f === void 0 ? !1 : f,
    v = K(a, 2),
    p = v[0],
    g = v[1],
    b = _.useMemo(
      function () {
        var w = {
            name: "preventOverflow",
            options: { padding: $s, rootBoundary: h ? "viewport" : "document" },
          },
          k = { name: "offset", options: { offset: [p, g] } },
          y = h ? wS({ viewportPadding: $s }) : [];
        return [].concat(kS, [w, k], Te(y));
      },
      [p, g, h],
    ),
    m = _.useMemo(
      function () {
        return c == null ? b : [].concat(Te(b), Te(c));
      },
      [b, c],
    );
  return O.createElement(mS, { modifiers: m, placement: o, strategy: d, referenceElement: s }, r);
}
var vh = "atlaskit-portal-container",
  ph = "body > .atlaskit-portal-container",
  hh = "atlaskit-portal",
  xS = function (t) {
    var r = document.createElement("div");
    return ((r.className = hh), (r.style.zIndex = "".concat(t)), r);
  },
  gh = function () {
    return document.body;
  },
  bh = function () {
    var t = document.querySelector(ph);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = vh),
        (n.style.display = "flex"),
        (r = gh()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  CS = function (t) {
    bh().removeChild(t);
  },
  RS = function (t) {
    t.parentElement || bh().appendChild(t);
  },
  _h = function () {
    return document !== void 0;
  },
  PS = function (t) {
    if (_h()) {
      var r = document.createElement("div");
      return ((r.className = hh), (r.style.zIndex = "".concat(t)), r);
    }
  },
  AS = function () {
    if (_h()) {
      var t = document.querySelector(ph);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = vh),
          (n.style.display = "flex"),
          (r = gh()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function jS(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useMemo(
      function () {
        return xS(t);
      },
      [t],
    );
  return (
    RS(n),
    _.useEffect(
      function () {
        return function () {
          CS(n);
        };
      },
      [n],
    ),
    Ai.createPortal(r, n)
  );
}
var yh = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function IS(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useState(null),
    a = K(n, 2),
    i = a[0],
    o = a[1];
  yh(
    function () {
      var s = PS(t);
      o(s);
      var c = AS();
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
  var u = O.createElement(_.Suspense, { fallback: null }, r);
  return i ? Ai.createPortal(u, i) : null;
}
var DS = function (t) {
    var r = _.useState(!1),
      n = K(r, 2),
      a = n[0],
      i = n[1],
      o = _.useState(function () {
        return t === "layoutEffect" ? yh : _.useEffect;
      }),
      u = K(o, 1),
      s = u[0];
    return (
      s(function () {
        i(!0);
      }, []),
      a
    );
  },
  TS = "akPortalMount",
  MS = "akPortalUnmount",
  vf = {
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
  LS = function (t) {
    return vf.hasOwnProperty(t) ? vf[t] : null;
  },
  FS = function (t, r) {
    var n = { layer: LS(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function pf(e, t) {
  var r = FS(e, t);
  window.dispatchEvent(r);
}
var NS = function (t) {
  var r = Number(t);
  _.useEffect(
    function () {
      return (
        pf(TS, r),
        function () {
          pf(MS, r);
        }
      );
    },
    [r],
  );
};
function $S(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    i = a === void 0 ? "effect" : a,
    o = DS(i);
  return (
    NS(r),
    Fe("platform_design_system_team_portal_logic_r18_fix")
      ? O.createElement(IS, { zIndex: r }, n)
      : o
        ? O.createElement(jS, { zIndex: r }, n)
        : null
  );
}
var ga = new Set(),
  Aa = null;
function hf() {
  if (!Aa) {
    Aa = Ji.bindAll(window, [
      { type: "dragend", listener: is },
      { type: "pointerdown", listener: is },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            is();
          };
        })(),
      },
    ]);
    var e = Array.from(ga);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function is() {
  var e;
  ((e = Aa) === null || e === void 0 || e(), (Aa = null));
  var t = Array.from(ga);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function zS() {
  return Ji.bindAll(window, [
    { type: "dragstart", listener: hf },
    { type: "dragenter", listener: hf },
  ]);
}
var ti = null;
function BS(e) {
  return (
    ti || (ti = zS()),
    ga.add(e),
    e.onRegister({ isDragging: Aa !== null }),
    function () {
      if ((ga.delete(e), ga.size === 0)) {
        var r;
        ((r = ti) === null || r === void 0 || r(), (ti = null));
      }
    }
  );
}
var ba = null;
function ca() {
  ba != null && (window.clearTimeout(ba), (ba = null));
}
function gf(e, t) {
  (ca(),
    (ba = window.setTimeout(function () {
      ((ba = null), e());
    }, t)));
}
var _t = null;
function qS(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(_t && _t.entry === e);
  }
  function n() {
    r() && (ca(), (_t = null));
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
        ((t = "shown"), ca());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), ca(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function u(h) {
    var v = h.isImmediate;
    if (r()) {
      if (t === "waiting-to-show") {
        i();
        return;
      }
      if (t !== "waiting-to-hide") {
        if (v) {
          i();
          return;
        }
        ((t = "waiting-to-hide"),
          gf(function () {
            ((t = "hide-animating"), e.hide({ isImmediate: !1 }));
          }, e.delay));
      }
    }
  }
  function s() {
    r() && t === "hide-animating" && a();
  }
  function c() {
    return t === "shown" || t === "waiting-to-hide" || t === "hide-animating";
  }
  function l() {
    return e.source.type === "mouse" ? e.source.mouse : null;
  }
  function d() {
    var h = !!(_t && _t.isVisible());
    (_t && (ca(), _t.entry.hide({ isImmediate: !0 }), _t.entry.done(), (_t = null)),
      (_t = { entry: e, isVisible: c }));
    function v() {
      ((t = "shown"), e.show({ isImmediate: h }));
    }
    if (h) {
      v();
      return;
    }
    ((t = "waiting-to-show"), gf(v, e.delay));
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
function US(e, t) {
  var r = Iw();
  return t ? "".concat(r(e)) : void 0;
}
var bf = {
    shortcutSegmentsContainer: "_zulpv77o _11c82smr _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81u0j _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d7jlr _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  VS = function (t) {
    var r = t.shortcut;
    return _.createElement(
      "div",
      { className: R([bf.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return _.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: R([bf.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  mh = _.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      i = t.children,
      o = t.placement,
      u = t.testId,
      s = t.onMouseOut,
      c = t.onMouseOver,
      l = t.id,
      d = t.shortcut;
    return _.createElement(
      "div",
      { ref: r, style: n, "data-testid": u ? "".concat(u, "--wrapper") : void 0 },
      _.createElement(
        "div",
        {
          role: "tooltip",
          className: R(["_80om73ad", a]),
          onMouseOut: s,
          onMouseOver: c,
          "data-placement": o,
          "data-testid": u,
          id: l,
        },
        i,
        d && Fe("platform-dst-tooltip-shortcuts") && _.createElement(VS, { shortcut: d }),
      ),
    );
  });
mh.displayName = "TooltipPrimitive";
var os = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _85i5v77o _1q51v77o _y4ti12x7 _bozg12x7 _slp31hna",
    baseRefreshedPadding: "_1q511b66 _85i51b66",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  wh = _.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      i = t.children,
      o = t.truncate,
      u = t.placement,
      s = t.testId,
      c = t.onMouseOut,
      l = t.onMouseOver,
      d = t.id,
      f = t.shortcut;
    return _.createElement(
      mh,
      {
        ref: r,
        style: n,
        className: R([
          os.base,
          Fe("platform-dst-tooltip-shortcuts") && os.baseRefreshedPadding,
          o && os.truncate,
          a,
        ]),
        placement: u,
        testId: s,
        id: d,
        onMouseOut: c,
        onMouseOver: l,
        shortcut: f,
      },
      i,
    );
  });
wh.displayName = "TooltipContainer";
function _f(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function yf(e, t) {
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
function qr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yf(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var GS = Dw.tooltip(),
  mf = {
    componentName: "tooltip",
    packageName: "@atlaskit/tooltip",
    packageVersion: "0.0.0-development",
  },
  HS = { top: "bottom", bottom: "top", left: "right", right: "left" },
  WS = function (t) {
    return t.split("-")[0];
  };
function KS(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    i = a === void 0 ? "bottom" : a,
    o = e.content,
    u = e.truncate,
    s = u === void 0 ? !1 : u,
    c = e.component,
    l = c === void 0 ? wh : c,
    d = e.tag,
    f = d === void 0 ? "div" : d,
    h = e.testId,
    v = e.delay,
    p = v === void 0 ? 300 : v,
    g = e.onShow,
    b = g === void 0 ? we : g,
    m = e.onHide,
    w = m === void 0 ? we : m,
    k = e.canAppear,
    y = e.hideTooltipOnClick,
    S = y === void 0 ? !1 : y,
    C = e.hideTooltipOnMouseDown,
    I = C === void 0 ? !1 : C,
    T = e.analyticsContext,
    P = e.strategy,
    M = P === void 0 ? "fixed" : P,
    B = e.ignoreTooltipPointerEvents,
    z = B === void 0 ? !1 : B,
    V = e.isScreenReaderAnnouncementDisabled,
    J = V === void 0 ? !1 : V,
    G = e.shortcut,
    U = n === "mouse" ? i : n,
    X = cl(qr({ fn: b, action: "displayed", analyticsData: T }, mf)),
    N = cl(qr({ fn: w, action: "hidden", analyticsData: T }, mf)),
    j = _.useRef(null),
    be = _.useState("hide"),
    oe = K(be, 2),
    ue = oe[0],
    le = oe[1],
    ge = _.useRef(null),
    ce = _.useRef(null),
    Ue = function (re) {
      ((ce.current = re), (ge.current = re ? re.firstElementChild : null));
    },
    ke = _.useCallback(function (L) {
      ge.current = L;
    }, []),
    it = aa(ue),
    pe = aa(X),
    Ve = aa(N),
    Er = aa(p),
    Tt = aa(k),
    Oe = _.useRef(!1),
    Se = _.useCallback(function (L) {
      ((j.current = L), (Oe.current = !1));
    }, []),
    Ht = _.useCallback(
      function () {
        j.current &&
          (Oe.current && Ve.current(), (j.current = null), (Oe.current = !1), le("hide"));
      },
      [Ve],
    ),
    bt = _.useCallback(
      function () {
        j.current && (j.current.abort(), Oe.current && Ve.current(), (j.current = null));
      },
      [Ve],
    );
  _.useEffect(
    function () {
      return function () {
        j.current && bt();
      };
    },
    [bt],
  );
  var ot = _.useRef(!1);
  _.useEffect(function () {
    return BS({
      onRegister: function (re) {
        var Mt = re.isDragging;
        ot.current = Mt;
      },
      onDragStart: function () {
        var re;
        ((re = j.current) === null || re === void 0 || re.requestHide({ isImmediate: !0 }),
          (ot.current = !0));
      },
      onDragEnd: function () {
        ot.current = !1;
      },
    });
  }, []);
  var Wt = _.useCallback(
      function (L) {
        var re;
        if (!ot.current) {
          if ((j.current && !j.current.isActive() && bt(), j.current && j.current.isActive())) {
            j.current.keep();
            return;
          }
          if (!(Tt.current && !((re = Tt.current) !== null && re !== void 0 && re.call(Tt)))) {
            var Mt = {
                source: L,
                delay: Er.current,
                show: function (xr) {
                  var sn = xr.isImmediate;
                  (Oe.current || ((Oe.current = !0), pe.current()),
                    le(sn ? "show-immediate" : "fade-in"));
                },
                hide: function (xr) {
                  var sn = xr.isImmediate;
                  le(sn ? "hide" : "before-fade-out");
                },
                done: Ht,
              },
              ao = qS(Mt);
            Se(ao);
          }
        }
      },
      [Tt, Er, Ht, Se, bt, pe],
    ),
    Ge = _.useCallback(
      function () {
        var L;
        (L = j.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
      },
      [j],
    );
  (Lk({ onClose: Ge, isDisabled: ue === "hide" || ue === "fade-out" }),
    _.useEffect(
      function () {
        if (ue === "hide") return we;
        ue === "before-fade-out" && le("fade-out");
        var L = Ji.bind(window, {
          type: "scroll",
          listener: function () {
            j.current && j.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return L;
      },
      [ue],
    ));
  var De = _.useCallback(
      function () {
        I && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [I],
    ),
    Ee = _.useCallback(
      function () {
        S && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    st = _.useCallback(
      function (L) {
        if (!(ce.current && L.target === ce.current) && !L.defaultPrevented) {
          L.preventDefault();
          var re =
            n === "mouse"
              ? { type: "mouse", mouse: _f({ left: L.clientX, top: L.clientY }) }
              : { type: "keyboard" };
          Wt(re);
        }
      },
      [n, Wt],
    ),
    Kt = _.useCallback(function (L) {
      (ce.current && L.target === ce.current) ||
        L.defaultPrevented ||
        (L.preventDefault(), j.current && j.current.requestHide({ isImmediate: !1 }));
    }, []),
    $a =
      n === "mouse"
        ? function (L) {
            var re;
            (re = j.current) !== null &&
              re !== void 0 &&
              re.isActive() &&
              (j.current.mousePosition = _f({ left: L.clientX, top: L.clientY }));
          }
        : void 0,
    za = _.useCallback(function () {
      if (j.current && j.current.isActive()) {
        j.current.keep();
        return;
      }
    }, []),
    Ba = _.useCallback(
      function (L) {
        try {
          if (!L.target.matches(":focus-visible") && Fe("platform-tooltip-focus-visible-new"))
            return;
        } catch {}
        Wt({ type: "keyboard" });
      },
      [Wt],
    ),
    qa = _.useCallback(function () {
      j.current && j.current.requestHide({ isImmediate: !1 });
    }, []),
    xh = _.useCallback(
      function (L) {
        L === "exiting" &&
          it.current === "fade-out" &&
          j.current &&
          j.current.finishHideAnimation();
      },
      [it],
    ),
    Ch = f,
    ro = ue !== "hide" && !!o,
    _u = !J && ro,
    yu = ue !== "hide" && ue !== "fade-out",
    Rh = _.useCallback(function () {
      var L;
      (L = j.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
    }, []);
  zk({ isOpen: ro && yu, onClose: Rh });
  var mu = function () {
      var re;
      if (n === "mouse" && (re = j.current) !== null && re !== void 0 && re.mousePosition) {
        var Mt;
        return (Mt = j.current) === null || Mt === void 0 ? void 0 : Mt.mousePosition;
      }
      return ge.current || void 0;
    },
    on = US("tooltip", _u),
    no = {
      onMouseOver: st,
      onMouseOut: Kt,
      onMouseMove: $a,
      onMouseDown: De,
      onClick: Ee,
      onFocus: Ba,
      onBlur: qa,
    };
  h && (no["data-testid"] = "".concat(h, "--container"));
  var wu = typeof t == "function";
  _.useEffect(
    function () {
      if (!wu) {
        var L = ge.current;
        if (!(!L || !on))
          return (
            L.setAttribute("aria-describedby", on),
            function () {
              return L.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [wu, on],
  );
  var ku = _u
    ? O.createElement(
        "span",
        { "data-testid": h ? "".concat(h, "-hidden") : void 0, hidden: !0, id: on },
        typeof o == "function" ? o({}) : o,
      )
    : null;
  return O.createElement(
    O.Fragment,
    null,
    typeof t == "function"
      ? O.createElement(
          O.Fragment,
          null,
          t(qr(qr({}, no), {}, { "aria-describedby": on, ref: ke })),
          ku,
        )
      : O.createElement(Ch, te({}, no, { ref: Ue, role: "presentation" }), t, ku),
    ro
      ? O.createElement(
          $S,
          { zIndex: GS },
          O.createElement(ES, { placement: U, referenceElement: mu(), strategy: M }, function (L) {
            var re = L.ref,
              Mt = L.style,
              ao = L.update,
              io = L.placement,
              xr = n === "mouse" ? void 0 : HS[WS(io)];
            return O.createElement(
              nh,
              { appear: !0 },
              yu &&
                O.createElement(
                  tO,
                  {
                    distance: "constant",
                    entranceDirection: xr,
                    exitDirection: xr,
                    onFinish: xh,
                    duration: ue !== "show-immediate" ? "medium" : "none",
                  },
                  function (sn) {
                    var Ph = sn.className;
                    return O.createElement(
                      l,
                      {
                        ref: re,
                        className: "Tooltip ".concat(Ph),
                        style: qr(qr({}, Mt), z && { pointerEvents: "none" }),
                        truncate: s,
                        placement: U,
                        testId: mu() ? h : h && "".concat(h, "--unresolved"),
                        onMouseOut: Kt,
                        onMouseOver: za,
                        shortcut: G,
                      },
                      typeof o == "function" ? o({ update: ao }) : o,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var YS = [
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
  oa = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  wf = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syaz1gjq _k48pmoej" },
  kh = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var i = t.innerRef,
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
      b = t.isIconOnlyHeader,
      m = ae(t, YS),
      w = _.useState(!1),
      k = K(w, 2),
      y = k[0],
      S = k[1],
      C = _.useState(!1),
      I = K(C, 2),
      T = I[0],
      P = I[1],
      M = c === l || u !== void 0,
      B = y || M || T,
      z = B && b,
      V = !b || B || (b && !T),
      J = _.useCallback(
        function () {
          P?.(!0);
        },
        [P],
      ),
      G = _.useCallback(
        function () {
          P?.(!1);
        },
        [P],
      ),
      U = _.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      X = _.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      N = O.createElement(
        Yi,
        { xcss: wf.headCellContainer, onMouseEnter: U, onMouseLeave: X, onFocus: J, onBlur: G },
        O.createElement(
          KS,
          { content: u === yr ? f : v },
          O.createElement(
            mw,
            { onClick: s, xcss: oa.buttonWrapper, "aria-roledescription": g },
            O.createElement(
              Ci,
              { xcss: z ? oa.hideIconHeaderWrapper : oa.visibleHeaderWrapper },
              O.createElement("span", { className: R([wf.text]) }, r),
            ),
            V &&
              O.createElement(
                Ci,
                { xcss: B ? oa.sortIconVisibleWrapper : oa.sortIconHiddenWrapper },
                u === yr
                  ? O.createElement(Tk, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : O.createElement(jk, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return O.createElement(
      xk,
      te(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof i != "string" ? i : null,
        },
        m,
        { isSortable: o, sortOrder: u },
      ),
      o ? N : r,
    );
  },
  JS = ["isRanking", "refHeight", "refWidth"];
function XS(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Oh() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Oh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Oh = function () {
    return !!e;
  })();
}
var QS = (function (e) {
    function t() {
      return (fe(this, t), XS(this, t, arguments));
    }
    return (
      qe(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var i = n.refWidth,
              o = ae(n, JS),
              u = oy(a, i);
            return O.createElement(kh, te({ inlineStyles: u }, o));
          },
        },
      ])
    );
  })(O.Component),
  ZS = Rk(QS),
  eE = ["cells"],
  tE = [
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
function rE(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Sh() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var nE = (function (e) {
    function t(r) {
      var n;
      return (fe(this, t), (n = rE(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      qe(t, e),
      ve(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            ki(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              ki(n.sortKey, n.head);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              a = this.props,
              i = a.head,
              o = a.sortKey,
              u = a.sortOrder,
              s = a.isFixedSize,
              c = a.onSort,
              l = a.isRanking,
              d = a.isRankable,
              f = a.testId,
              h = this.state.activeSortButtonId;
            if (!i) return null;
            var v = d ? ZS : kh,
              p = i.cells,
              g = ae(i, eE);
            return O.createElement(
              Ek,
              te({}, g, { isRanking: l, testId: f && "".concat(f, "--head") }),
              O.createElement(
                "tr",
                null,
                p.map(function (b, m) {
                  var w = b.ascendingSortTooltip,
                    k = b.buttonAriaRoleDescription,
                    y = b.colSpan,
                    S = b.content,
                    C = b.descendingSortTooltip,
                    I = b.isIconOnlyHeader,
                    T = b.isSortable,
                    P = b.key,
                    M = b.shouldTruncate,
                    B = b.testId,
                    z = b.width,
                    V = ae(b, tE),
                    J = "head-cell-".concat(m),
                    G = function () {
                      (n.setState({ activeSortButtonId: J }), T && c(b)());
                    };
                  return O.createElement(
                    v,
                    te(
                      {
                        colSpan: y,
                        content: S,
                        isFixedSize: s,
                        isIconOnlyHeader: I,
                        isSortable: !!T,
                        isRanking: l,
                        key: P || m,
                        headCellId: J,
                        activeSortButtonId: h,
                        onClick: G,
                        testId: B || f,
                        shouldTruncate: M,
                        sortOrder: P === o ? u : void 0,
                        width: z,
                        ascendingSortTooltip: w,
                        descendingSortTooltip: C,
                        buttonAriaRoleDescription: k,
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
  })(O.Component),
  aE = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function iE(e) {
  switch (e) {
    case Ei:
      return yr;
    case yr:
      return Ei;
    default:
      return e;
  }
}
var oE = function (t) {
    var r = t.caption,
      n = t.head,
      a = t.highlightedRowIndex,
      i = t.rows,
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
      b = t.rowsPerPage,
      m = b === void 0 ? 1 / 0 : b,
      w = t.onSetPage,
      k = w === void 0 ? we : w,
      y = t.onSort,
      S = y === void 0 ? we : y,
      C = t.page,
      I = C === void 0 ? 1 : C,
      T = t.emptyView,
      P = t.isRankable,
      M = P === void 0 ? !1 : P,
      B = t.isRankingDisabled,
      z = B === void 0 ? !1 : B,
      V = t.onRankStart,
      J = V === void 0 ? we : V,
      G = t.onRankEnd,
      U = G === void 0 ? we : G,
      X = t.loadingSpinnerSize,
      N = t.paginationi18n,
      j =
        N === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : N,
      be = _.useState(!1),
      oe = K(be, 2),
      ue = oe[0],
      le = oe[1],
      ge = _.useRef(null),
      ce = ka({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      Ue = ka({
        fn: U,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    _.useEffect(
      function () {
        (ki(o, n), iy(n));
      },
      [o, n],
    );
    var ke = function (Ee) {
        return function () {
          var st = Ee.key;
          if (st) {
            if (ce && M && st === o && u === Ei) {
              ce({ key: null, sortOrder: null, item: Ee });
              return;
            }
            var Kt = st !== o ? yr : iE(u);
            ce && ce({ key: st, item: Ee, sortOrder: Kt });
          }
        };
      },
      it = function (Ee, st) {
        k(Ee, st);
      },
      pe = function (Ee) {
        (le(!0), J(Ee));
      },
      Ve = function (Ee) {
        (le(!1), Ue(Ee));
      },
      Er = function () {
        return X || (rp(i || [], I, m).length > 2 ? xi : Cy);
      },
      Tt = function () {
        return v ? O.createElement(Dy, { testId: l }) : T && O.createElement(Ty, { testId: l }, T);
      },
      Oe = i && i.length,
      Se,
      Ht = !1;
    (d && Number.isInteger(d) && m && Oe && Oe <= d
      ? ((Se = Math.ceil(d / m)), (Ht = !0))
      : (Se = Oe && m ? Math.ceil(Oe / m) : 0),
      (Se = Se < 1 ? 1 : Se));
    var bt = I > Se ? Se : I,
      ot = !!Oe,
      Wt = Er(),
      Ge = Tt();
    return O.createElement(
      O.Fragment,
      null,
      O.createElement(
        hp,
        {
          isLoading: v && ot,
          spinnerSize: Wt,
          targetRef: function () {
            return ge.current;
          },
          testId: l,
          loadingLabel: s,
        },
        O.createElement(
          Ay,
          { isFixedSize: g, "aria-label": f, hasDataRow: ot, testId: l, isLoading: v },
          !!r && O.createElement(jy, null, r),
          n &&
            O.createElement(nE, {
              head: n,
              onSort: ke,
              sortKey: o,
              sortOrder: u,
              isRanking: ue,
              isRankable: M,
              testId: l,
            }),
          ot &&
            O.createElement(uE, {
              ref: ge,
              highlightedRowIndex: a,
              rows: i,
              head: n,
              sortKey: o,
              sortOrder: u,
              rowsPerPage: m,
              page: bt,
              isFixedSize: g || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: Ht,
              testId: l,
              isRankable: M,
              isRanking: ue,
              onRankStart: pe,
              onRankEnd: Ve,
              isRankingDisabled: z || v || !1,
            }),
        ),
      ),
      Se <= 1
        ? null
        : O.createElement(
            Iy,
            { testId: l },
            O.createElement(kk, {
              value: bt,
              onChange: it,
              total: Se,
              i18n: j,
              isDisabled: v,
              testId: l,
            }),
          ),
      !ot &&
        Ge &&
        O.createElement(vp, { isLoading: v, spinnerSize: xi, testId: l, loadingLabel: s }, Ge),
    );
  },
  sE = _.lazy(function () {
    return ly(
      () => import("./body-ClpLjNuF.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  uE = _.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      i = t.isRanking,
      o = t.onRankStart,
      u = t.onRankEnd,
      s = t.isRankingDisabled,
      c = ae(t, aE),
      l = a && !c.sortKey,
      d = _.useState(!1),
      f = K(d, 2),
      h = f[0],
      v = f[1];
    _.useEffect(
      function () {
        l && v(!0);
      },
      [l],
    );
    var p = O.createElement(Yy, te({ ref: r }, c));
    return l && h
      ? O.createElement(
          Xy,
          { fallback: p },
          O.createElement(
            _.Suspense,
            { fallback: p },
            O.createElement(
              sE,
              te({ ref: r }, c, {
                isRanking: i,
                onRankStart: o,
                onRankEnd: u,
                isRankingDisabled: s,
              }),
            ),
          ),
        )
      : p;
  });
function cE(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Eh() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Eh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Eh = function () {
    return !!e;
  })();
}
var to = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = cE(this, t, [].concat(a))),
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
            b = s.isRankable,
            m = s.isRankingDisabled,
            w = s.rowsPerPage,
            k = s.paginationi18n,
            y = s.onRankStart,
            S = s.onPageRowsUpdate,
            C = s.testId,
            I = s.label;
          return O.createElement(oE, {
            paginationi18n: k,
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
            page: a,
            rows: u,
            rowsPerPage: w,
            sortKey: i,
            sortOrder: o,
            isRankable: b,
            isRankingDisabled: m,
            onRankEnd: this.onRankEndHandler,
            onRankStart: y,
            onPageRowsUpdate: S,
            testId: C,
            label: I,
          });
        },
      },
    ])
  );
})(O.Component);
x(to, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: we,
  onSort: we,
  rowsPerPage: 1 / 0,
});
const lE = (e, t) => {
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
  bu = (e, t) => ({ cells: lE(e, t) }),
  dE = Gi(() => {
    const { usersStore: e } = Wi(),
      t = bu(!0, "SLOW_QUERY"),
      r = e.slowQueries;
    return !r || r.length === 0
      ? E.jsx("div", { children: "SlowQuery is EMPTY" })
      : E.jsx("div", {
          children: E.jsxs("div", {
            children: [
              E.jsx(to, {
                head: t,
                rows: r.map((n, a) => {
                  const i = [
                    { key: "time", content: n.time },
                    { key: "query", content: n.query },
                    { key: "queryTime", content: n.queryTime },
                    { key: "resultRows", content: n.resultRows },
                    {
                      key: "plan",
                      content: n.parsedPlan
                        ? E.jsx(E.Fragment, {
                            children: E.jsx("button", {
                              onClick: () => {
                                n.parsedPlan &&
                                  (e.showPlan(n.parsedPlan, n.plan), Xs.saveState("PLAN"));
                              },
                              children: "Show Plan",
                            }),
                          })
                        : E.jsx("p", {}),
                    },
                  ];
                  return { key: `row-${a}`, cells: i };
                }),
                rowsPerPage: 10,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: E.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              E.jsx("br", {}),
              E.jsx("br", {}),
            ],
          }),
        });
  }),
  fE = Gi(() => {
    const { usersStore: e } = Wi(),
      t = bu(!0, "PLAN"),
      r = e.plan;
    return !r || r.length === 0
      ? E.jsxs("div", { children: ["$", e.planString] })
      : E.jsx("div", {
          children: E.jsxs("div", {
            children: [
              E.jsx(to, {
                head: t,
                rows: r.map((n, a) => {
                  const i = [
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
                  return { key: `row-${a}`, cells: i };
                }),
                rowsPerPage: 200,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: E.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              E.jsx("br", {}),
              E.jsx("br", {}),
            ],
          }),
        });
  }),
  vE = Gi(() => {
    const { usersStore: e } = Wi(),
      t = bu(!0, "HISTORY"),
      r = e.history;
    return !r || r.length === 0
      ? E.jsx("div", { children: "Query history is EMPTY" })
      : E.jsx("div", {
          children: E.jsxs("div", {
            children: [
              E.jsx(to, {
                head: t,
                rows: r.map((n, a) => {
                  const i = [
                    { key: "summaryBeginTime", content: n.summaryBeginTime },
                    { key: "summaryEndTime", content: n.summaryEndTime },
                    { key: "digestText", content: n.digestText },
                    { key: "stmtType", content: n.stmtType },
                    { key: "tableNames", content: n.tableNames },
                    { key: "planHint", content: n.planHint },
                    {
                      key: "plan",
                      content: n.parsedPlan
                        ? E.jsx(E.Fragment, {
                            children: E.jsx("button", {
                              onClick: () => {
                                n.parsedPlan &&
                                  (e.showPlan(n.parsedPlan, n.plan), Xs.saveState("PLAN"));
                              },
                              children: "Show Plan",
                            }),
                          })
                        : E.jsx("p", {}),
                    },
                  ];
                  return { key: `row-${a}`, cells: i };
                }),
                rowsPerPage: 10,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: E.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              E.jsx("br", {}),
              E.jsx("br", {}),
            ],
          }),
        });
  }),
  Ye = (e, t) => {
    Re.showFlag({ id: "error-flag", title: e, type: "error", description: t, isAutoDismiss: !0 });
  };
function pE() {
  const { usersStore: e, stateStore: t } = Wi();
  if (e.isLoading) return "loading....";
  const r = async () => {
      e.loading();
      try {
        const v = await Re.invoke("explain");
        (e.showPlan(v, "Plan does not exists"), t.saveState("PLAN"));
      } catch (v) {
        (console.error(v), Ye("explain error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    n = async () => {
      e.loading();
      try {
        const v = await Re.invoke("explainWith");
        (e.showPlan(v, "Plan does not exists"), t.saveState("PLAN"));
      } catch (v) {
        (console.error(v), Ye("explain error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    a = async () => {
      e.loading();
      try {
        const v = await Re.invoke("explainAnalyze");
        (e.showPlan(v, "Plan does not exists"), t.saveState("PLAN"));
      } catch (v) {
        (console.error(v), Ye("explain analyze error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    i = async () => {
      e.loading();
      try {
        const v = await Re.invoke("explainAnalyzeWith");
        (e.showPlan(v, "Plan does not exists"), t.saveState("PLAN"));
      } catch (v) {
        (console.error(v), Ye("explain analyze error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    o = async () => {
      e.loading();
      try {
        await Re.invoke("executeQuery");
      } catch (v) {
        (console.error(v), Ye("execute query error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    u = async () => {
      e.loading();
      try {
        await Re.invoke("executeQueryWith");
      } catch (v) {
        (console.error(v), Ye("execute query error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    s = async () => {
      e.loading();
      try {
        await Re.invoke("optimizeQuery");
      } catch (v) {
        (console.error(v), Ye("Optimize error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    c = async () => {
      e.loading();
      try {
        await Re.invoke("optimizeQueryCTE");
      } catch (v) {
        (console.error(v), Ye("Optimize error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    l = async () => {
      e.loading();
      try {
        await Re.invoke("dropStats");
      } catch (v) {
        (console.error(v), Ye("dropStats error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    d = async () => {
      e.loading();
      try {
        await Re.invoke("deOptimizeQuery");
      } catch (v) {
        (console.error(v), Ye("deoptimize error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    f = async () => {
      e.loading();
      try {
        const v = await Re.invoke("analyzeQueriesHistory", {
          sql: "select `category`.`id` as `a_category_category_id`, `category`.`name` as `a_category_category_name`, `order_item`.`id` as `a_orderitem_order_item_id`, `order_item`.`product_id` as `a_orderitem_order_item_product_id`, `order_item`.`quantity` as `a_orderitem_order_item_quantity`, `product`.`id` as `a_product_product_id`, `product`.`name` as `a_product_product_name`, `product`.`category_id` as `a_product_product_category_id` from `category` left join `product` on `category`.`id` = `product`.`category_id` inner join `order_item` on `order_item`.`product_id` = `product`.`id`",
        });
        (e.saveHistory(v), t.saveState("HISTORY"));
      } catch (v) {
        (console.error(v), Ye("History error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    h = async () => {
      e.loading();
      try {
        const v = await Re.invoke("analyzeSlowQueries");
        (e.saveSlowQuery(v), t.saveState("SLOW_QUERY"));
      } catch (v) {
        (console.error(v), Ye("Slowquery error", v.message));
      } finally {
        e.stopLoading();
      }
    };
  switch (t.state) {
    case "ROOT":
      return E.jsxs("div", {
        className: "query-analysis-container",
        children: [
          E.jsx("div", { className: "section-spacer" }),
          E.jsxs("section", {
            className: "analysis-section",
            children: [
              E.jsx("h2", { children: "Stage 1: Initial Query Analysis" }),
              E.jsx("div", {
                className: "query-example",
                children: E.jsx("pre", {
                  children:
                    "SELECT `category`.`name` AS `a_categoryname_name`, `product`.`name` AS `a_productname_name`, `order_item`.`quantity` AS `a_orderitemquantity_quantity` FROM `order_item` LEFT JOIN `product` ON `order_item`.`product_id` = `product`.`id` LEFT JOIN `category` ON `product`.`category_id` = `category`.`id` ORDER BY `order_item`.`created_at` ASC LIMIT 10 OFFSET 50000;",
                }),
              }),
              E.jsx("div", {
                className: "button-group",
                children: E.jsxs("div", {
                  className: "button-row",
                  children: [
                    E.jsx("button", { onClick: o, children: "1. Execute SQL" }),
                    E.jsx("button", { onClick: r, children: "2. Explain (optional) " }),
                    E.jsx("button", { onClick: a, children: "3. Explain Analyze" }),
                  ],
                }),
              }),
            ],
          }),
          E.jsxs("section", {
            className: "analysis-section",
            children: [
              E.jsx("h2", { children: "Stage 2: Adding Indexes — Better but Not Yet Great" }),
              E.jsx("div", {
                className: "query-example",
                children: E.jsx("pre", {
                  children:
                    "SELECT `category`.`name` AS `a_categoryname_name`, `product`.`name` AS `a_productname_name`, `order_item`.`quantity` AS `a_orderitemquantity_quantity` FROM `order_item` LEFT JOIN `product` ON `order_item`.`product_id` = `product`.`id` LEFT JOIN `category` ON `product`.`category_id` = `category`.`id` ORDER BY `order_item`.`created_at` ASC LIMIT 10 OFFSET 50000;",
                }),
              }),
              E.jsx("div", {
                className: "button-group",
                children: E.jsxs("div", {
                  className: "button-row",
                  children: [
                    E.jsx("button", { onClick: s, children: "4. Add optimization indexes" }),
                    E.jsx("button", { onClick: o, children: "5. Execute SQL" }),
                    E.jsx("button", { onClick: r, children: "6. Explain (optional) " }),
                    E.jsx("button", { onClick: a, children: "7. Explain Analyze" }),
                  ],
                }),
              }),
            ],
          }),
          E.jsxs("section", {
            className: "analysis-section",
            children: [
              E.jsx("h2", {
                children: "Stage 3: Optimizing with WITH Clause — Smarter Pagination",
              }),
              E.jsx("div", {
                className: "query-example",
                children: E.jsx("pre", {
                  children:
                    "WITH withQuery AS ( SELECT id, product_id, product_name, quantity, created_at FROM order_item ORDER BY created_at ASC LIMIT 10 OFFSET 350000 ) SELECT category.name, withQuery.quantity, product.name FROM withQuery LEFT JOIN product ON withQuery.product_id = product.id LEFT JOIN category ON category.id = product.category_id;",
                }),
              }),
              E.jsx("div", {
                className: "button-group",
                children: E.jsxs("div", {
                  className: "button-row",
                  children: [
                    E.jsx("button", { onClick: u, children: "8. Execute CTE" }),
                    E.jsx("button", { onClick: n, children: "9. Explain CTE (optional)" }),
                    E.jsx("button", { onClick: i, children: "10. Explain Analyze CTE" }),
                  ],
                }),
              }),
            ],
          }),
          E.jsxs("section", {
            className: "analysis-section",
            children: [
              E.jsx("h2", { children: "Stage 4: Final Optimization — Goodbye Full Table Scans" }),
              E.jsx("div", {
                className: "query-example",
                children: E.jsx("pre", {
                  children:
                    "WITH withQuery AS ( SELECT id, product_id, product_name, quantity, created_at FROM order_item ORDER BY created_at ASC LIMIT 10 OFFSET 350000 ) SELECT category.name, withQuery.quantity, product.name FROM withQuery LEFT JOIN product ON withQuery.product_id = product.id LEFT JOIN category ON category.id = product.category_id;",
                }),
              }),
              E.jsx("div", {
                className: "button-group",
                children: E.jsxs("div", {
                  className: "button-row",
                  children: [
                    E.jsx("button", {
                      onClick: c,
                      children: "9. Add optimization indexes for CTE",
                    }),
                    E.jsx("button", { onClick: u, children: "10. Execute CTE" }),
                    E.jsx("button", { onClick: n, children: "11. Explain CTE (optional)" }),
                    E.jsx("button", { onClick: i, children: "12. Explain Analyze CTE" }),
                  ],
                }),
              }),
            ],
          }),
          E.jsxs("section", {
            className: "analysis-section",
            children: [
              E.jsx("h2", { children: "Additional action" }),
              E.jsx("div", {
                className: "button-group",
                children: E.jsxs("div", {
                  className: "button-row",
                  children: [
                    E.jsx("button", { onClick: d, children: "Drop indexes(back to Stage 1)" }),
                    E.jsx("button", { onClick: l, children: "DROP STATS from all tables" }),
                  ],
                }),
              }),
            ],
          }),
          E.jsx("div", { className: "section-spacer" }),
          E.jsxs("section", {
            className: "analysis-section",
            children: [
              E.jsx("h2", { children: "Query History Analysis" }),
              E.jsx("div", {
                className: "button-group",
                children: E.jsx("button", { onClick: f, children: "Show Query History" }),
              }),
            ],
          }),
          E.jsx("div", { className: "section-spacer" }),
          E.jsxs("section", {
            className: "analysis-section",
            children: [
              E.jsx("h2", { children: "Slow Query Analysis" }),
              E.jsx("div", {
                className: "button-group",
                children: E.jsx("button", { onClick: h, children: "Analyze Slow Queries" }),
              }),
            ],
          }),
        ],
      });
    case "SLOW_QUERY":
      return E.jsxs("div", {
        className: "analysis-results",
        children: [
          E.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState("ROOT"),
            children: "Back to Analysis",
          }),
          E.jsx("div", { className: "results-spacer" }),
          E.jsx(dE, {}),
        ],
      });
    case "HISTORY":
      return E.jsxs("div", {
        className: "analysis-results",
        children: [
          E.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState("ROOT"),
            children: "Back to Analysis",
          }),
          E.jsx("div", { className: "results-spacer" }),
          E.jsx(vE, {}),
        ],
      });
    case "PLAN":
      return E.jsxs("div", {
        className: "analysis-results",
        children: [
          E.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState(t.lastState),
            children: "Back to Analysis",
          }),
          E.jsx("div", { className: "results-spacer" }),
          E.jsx(fE, {}),
        ],
      });
    default:
      return E.jsxs("div", { children: ["ERROR: unsupported state ", t.state] });
  }
}
const hE = Gi(pE),
  gE = document.getElementById("root"),
  bE = Ah.createRoot(gE),
  kf = () => {
    bE.render(E.jsx(Qv, { ...Zv, children: E.jsx(hE, {}) }));
  };
Re.view.theme
  .enable()
  .then(() => {
    kf();
  })
  .catch((e) => {
    (console.error(e.message), kf());
  });
export {
  O as R,
  Uy as T,
  qe as _,
  ve as a,
  Cs as b,
  fe as c,
  Be as d,
  Y as e,
  K as f,
  x as g,
  ae as h,
  Ji as i,
  Te as j,
  te as k,
  iw as l,
  qt as m,
  Dt as n,
  R as o,
  By as p,
  oy as q,
  _ as r,
  Ny as s,
  Rk as w,
};
