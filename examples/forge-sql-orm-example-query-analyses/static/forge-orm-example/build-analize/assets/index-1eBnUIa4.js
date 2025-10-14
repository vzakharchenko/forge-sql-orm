const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-BF2aP2Lb.js",
      "./react-dom-vendor-DTSHKYJW.js",
      "./client-core-vendor-CBaEzZET.js",
      "./lodash-vendor-DpBFx2F6.js",
      "./body-C3aXNd8H.css",
    ]),
) => i.map((i) => d[i]);
import { r as pt, a as Ri, c as xh } from "./react-dom-vendor-DTSHKYJW.js";
import { g as Fs, r as Zt, a as rr, b as er, s as He } from "./client-core-vendor-CBaEzZET.js";
import { r as Ch } from "./lodash-vendor-DpBFx2F6.js";
function Rh(e, t) {
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
var ao = { exports: {} },
  un = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wu;
function Ph() {
  if (wu) return un;
  wu = 1;
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
var Ou;
function Ah() {
  return (Ou || ((Ou = 1), (ao.exports = Ph())), ao.exports);
}
var E = Ah(),
  io = {},
  is = function (e, t) {
    return (
      (is =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      is(e, t)
    );
  };
function yf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  is(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var ci = function () {
  return (
    (ci =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }),
    ci.apply(this, arguments)
  );
};
function mf(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function wf(e, t, r, n) {
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
function Of(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function kf(e, t, r, n, a, i) {
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
function Sf(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function Ef(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function xf(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function Cf(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Rf(e, t, r, n) {
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
function Pf(e, t) {
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
var Pi = Object.create
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
function Af(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Pi(t, e, r);
}
function li(e) {
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
function $s(e, t) {
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
function jf() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat($s(arguments[t]));
  return e;
}
function If() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var i = arguments[t], o = 0, u = i.length; o < u; o++, a++) n[a] = i[o];
  return n;
}
function Df(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, i; n < a; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function Wr(e) {
  return this instanceof Wr ? ((this.v = e), this) : new Wr(e);
}
function Tf(e, t, r) {
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
function Mf(e) {
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
function Lf(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof li == "function" ? li(e) : e[Symbol.iterator]()),
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
function Nf(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var jh = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  os = function (e) {
    return (
      (os =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      os(e)
    );
  };
function Ff(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = os(e), n = 0; n < r.length; n++) r[n] !== "default" && Pi(t, e, r[n]);
  return (jh(t, e), t);
}
function $f(e) {
  return e && e.__esModule ? e : { default: e };
}
function zf(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Bf(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function qf(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Uf(e, t, r) {
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
var Ih =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Vf(e) {
  function t(i) {
    ((e.error = e.hasError ? new Ih(i, e.error, "An error was suppressed during disposal.") : i),
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
function Gf(e, t) {
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
const Dh = {
    __extends: yf,
    __assign: ci,
    __rest: mf,
    __decorate: wf,
    __param: Of,
    __esDecorate: kf,
    __runInitializers: Sf,
    __propKey: Ef,
    __setFunctionName: xf,
    __metadata: Cf,
    __awaiter: Rf,
    __generator: Pf,
    __createBinding: Pi,
    __exportStar: Af,
    __values: li,
    __read: $s,
    __spread: jf,
    __spreadArrays: If,
    __spreadArray: Df,
    __await: Wr,
    __asyncGenerator: Tf,
    __asyncDelegator: Mf,
    __asyncValues: Lf,
    __makeTemplateObject: Nf,
    __importStar: Ff,
    __importDefault: $f,
    __classPrivateFieldGet: zf,
    __classPrivateFieldSet: Bf,
    __classPrivateFieldIn: qf,
    __addDisposableResource: Uf,
    __disposeResources: Vf,
    __rewriteRelativeImportExtension: Gf,
  },
  Th = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Uf,
        get __assign() {
          return ci;
        },
        __asyncDelegator: Mf,
        __asyncGenerator: Tf,
        __asyncValues: Lf,
        __await: Wr,
        __awaiter: Rf,
        __classPrivateFieldGet: zf,
        __classPrivateFieldIn: qf,
        __classPrivateFieldSet: Bf,
        __createBinding: Pi,
        __decorate: wf,
        __disposeResources: Vf,
        __esDecorate: kf,
        __exportStar: Af,
        __extends: yf,
        __generator: Pf,
        __importDefault: $f,
        __importStar: Ff,
        __makeTemplateObject: Nf,
        __metadata: Cf,
        __param: Of,
        __propKey: Ef,
        __read: $s,
        __rest: mf,
        __rewriteRelativeImportExtension: Gf,
        __runInitializers: Sf,
        __setFunctionName: xf,
        __spread: jf,
        __spreadArray: Df,
        __spreadArrays: If,
        __values: li,
        default: Dh,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  At = Fs(Th);
var cn = {},
  ku;
function Mh() {
  return (
    ku ||
      ((ku = 1),
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
var oo = {},
  so = {},
  ln = {},
  dn = {},
  Su;
function at() {
  if (Su) return dn;
  ((Su = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((dn.BridgeAPIError = e), dn);
}
var Eu;
function ye() {
  if (Eu) return ln;
  ((Eu = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.getCallBridge = void 0));
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
  xu;
function zs() {
  if (xu) return fn;
  ((xu = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.withRateLimiter = void 0));
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
var Cu;
function Lh() {
  return (
    Cu ||
      ((Cu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = ye(),
          r = at(),
          n = zs(),
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
      })(so)),
    so
  );
}
var Ru;
function Nh() {
  return (
    Ru ||
      ((Ru = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), At.__exportStar(Lh(), e));
      })(oo)),
    oo
  );
}
var uo = {},
  vn = {},
  co = {},
  Pu;
function Hf() {
  return (
    Pu ||
      ((Pu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = ye(),
          r = at(),
          n = zs(),
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
      })(co)),
    co
  );
}
var Au;
function Fh() {
  if (Au) return vn;
  ((Au = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.invokeRemote = void 0));
  const e = Hf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((vn.invokeRemote = t), vn);
}
var pn = {},
  ju;
function $h() {
  if (ju) return pn;
  ((ju = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.invokeService = void 0));
  const e = Hf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((pn.invokeService = t), pn);
}
var Iu;
function zh() {
  return (
    Iu ||
      ((Iu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = At;
        (t.__exportStar(Fh(), e), t.__exportStar($h(), e));
      })(uo)),
    uo
  );
}
var lo = {},
  hn = {},
  gn = {},
  Du;
function Bh() {
  if (Du) return gn;
  ((Du = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.submit = void 0));
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
  Tu;
function qh() {
  if (Tu) return bn;
  ((Tu = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.close = void 0));
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
  Mu;
function Uh() {
  if (Mu) return _n;
  ((Mu = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.open = void 0));
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
  Lu;
function Vh() {
  if (Lu) return yn;
  ((Lu = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.refresh = void 0));
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
  Nu;
function Gh() {
  if (Nu) return mn;
  ((Nu = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.createHistory = void 0));
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
  fo = {},
  Mt = {},
  Fu;
function Wf() {
  return (
    Fu ||
      ((Fu = 1),
      Object.defineProperty(Mt, "__esModule", { value: !0 }),
      (Mt.FORGE_SUPPORTED_LOCALE_CODES =
        Mt.I18N_BUNDLE_FOLDER_NAME =
        Mt.I18N_INFO_FILE_NAME =
          void 0),
      (Mt.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (Mt.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (Mt.FORGE_SUPPORTED_LOCALE_CODES = [
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
    Mt
  );
}
var ir = {},
  $u;
function Hh() {
  if ($u) return ir;
  (($u = 1),
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
var On = {},
  vo = {},
  zu;
function Kf() {
  return (
    zu ||
      ((zu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = At.__importDefault(Ch()),
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
      })(vo)),
    vo
  );
}
var Bu;
function Wh() {
  if (Bu) return On;
  ((Bu = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.Translator = void 0));
  const e = Kf();
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
  return ((On.Translator = t), On);
}
var kn = {},
  qu;
function Kh() {
  if (qu) return kn;
  ((qu = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.ensureLocale = void 0));
  const e = Wf(),
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
  return ((kn.ensureLocale = a), kn);
}
var po = {},
  Uu;
function Yh() {
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
      })(po)),
    po
  );
}
var ho = {},
  Vu;
function Jh() {
  return (Vu || ((Vu = 1), Object.defineProperty(ho, "__esModule", { value: !0 })), ho);
}
var Gu;
function Yf() {
  return (
    Gu ||
      ((Gu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = At;
        (t.__exportStar(Wf(), e),
          t.__exportStar(Hh(), e),
          t.__exportStar(Wh(), e),
          t.__exportStar(Kh(), e));
        var r = Kf();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Yh();
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
          t.__exportStar(Jh(), e));
      })(fo)),
    fo
  );
}
var Hu;
function Xh() {
  if (Hu) return wn;
  ((Hu = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.getContext = void 0));
  const e = ye(),
    t = Yf(),
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
  Wu;
function Qh() {
  if (Wu) return Sn;
  ((Wu = 1),
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
  Ku;
function Zh() {
  if (Ku) return En;
  ((Ku = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.theme = void 0));
  const t = (0, ye().getCallBridge)();
  return ((En.theme = { enable: () => t("enableTheming") }), En);
}
var xn = {},
  Cn = {},
  go = {},
  or = {},
  Yu;
function Jf() {
  if (Yu) return or;
  ((Yu = 1),
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
var Ju;
function eg() {
  return (
    Ju ||
      ((Ju = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Jf(),
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
      })(go)),
    go
  );
}
var Xu;
function Xf() {
  if (Xu) return Cn;
  ((Xu = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.events = void 0));
  const e = ye(),
    t = eg(),
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
var Qu;
function tg() {
  if (Qu) return xn;
  ((Qu = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.emitReadyEvent = void 0));
  const e = Xf(),
    t = Qf(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return ((xn.emitReadyEvent = n), xn);
}
var Zu;
function Qf() {
  if (Zu) return hn;
  ((Zu = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.view = void 0));
  const e = Bh(),
    t = qh(),
    r = Uh(),
    n = Vh(),
    a = Gh(),
    i = Xh(),
    o = Qh(),
    u = Zh(),
    s = tg();
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
var ec;
function Zf() {
  return (
    ec ||
      ((ec = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), At.__exportStar(Qf(), e));
      })(lo)),
    lo
  );
}
var bo = {},
  Rn = {},
  tc;
function rg() {
  if (tc) return Rn;
  ((tc = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.router = void 0));
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
var rc;
function ng() {
  return (
    rc ||
      ((rc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), At.__exportStar(rg(), e));
      })(bo)),
    bo
  );
}
var _o = {},
  Pn = {},
  nc;
function ag() {
  if (nc) return Pn;
  ((nc = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.Modal = void 0));
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
var ac;
function ig() {
  return (
    ac ||
      ((ac = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), At.__exportStar(ag(), e));
      })(_o)),
    _o
  );
}
var Lt = {},
  An = {},
  ic;
function og() {
  if (ic) return An;
  ((ic = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.productFetchApi = void 0));
  const e = Jf(),
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
          O = w ? (0, e.base64ToBlob)(p, g["content-type"]) : p;
        return new Response(O || null, { headers: g, status: m, statusText: b });
      };
      return {
        requestConfluence: (u, s) => o("confluence", u, s),
        requestJira: (u, s) => o("jira", u, s),
        requestBitbucket: (u, s) => o("bitbucket", u, s),
      };
    };
  return ((An.productFetchApi = a), An);
}
var oc;
function sg() {
  if (oc) return Lt;
  oc = 1;
  var e;
  (Object.defineProperty(Lt, "__esModule", { value: !0 }),
    (Lt.requestBitbucket = Lt.requestJira = Lt.requestConfluence = void 0));
  const t = ye();
  return (
    (e = (0, og().productFetchApi)((0, t.getCallBridge)())),
    (Lt.requestConfluence = e.requestConfluence),
    (Lt.requestJira = e.requestJira),
    (Lt.requestBitbucket = e.requestBitbucket),
    Lt
  );
}
var yo = {},
  jn = {},
  sc;
function ug() {
  if (sc) return jn;
  ((sc = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.showFlag = void 0));
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
var uc;
function cg() {
  return (
    uc ||
      ((uc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = ug();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(yo)),
    yo
  );
}
var mo = {},
  cc;
function lg() {
  return (
    cc ||
      ((cc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), At.__exportStar(Xf(), e));
      })(mo)),
    mo
  );
}
var wo = {},
  In = {},
  lc;
function dg() {
  if (lc) return In;
  ((lc = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.realtime = void 0));
  const t = (0, ye().getCallBridge)(),
    r = (o, u, s) => t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s }),
    n = (o, u, s) => t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s }),
    a = (o, u, s) =>
      t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s, isGlobal: !0 }),
    i = (o, u, s) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s, isGlobal: !0 });
  return ((In.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: i }), In);
}
var Oo = {},
  dc;
function fg() {
  return (
    dc ||
      ((dc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Jira = void 0),
          (function (t) {
            ((t.Board = "board"), (t.Issue = "issue"), (t.Project = "project"));
          })(e.Jira || (e.Jira = {})));
      })(Oo)),
    Oo
  );
}
var fc;
function vg() {
  return (
    fc ||
      ((fc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Jira = e.realtime = void 0));
        var t = dg();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = fg();
        Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return r.Jira;
          },
        });
      })(wo)),
    wo
  );
}
var Nt = {},
  vc;
function pg() {
  if (vc) return Nt;
  ((vc = 1),
    Object.defineProperty(Nt, "__esModule", { value: !0 }),
    (Nt.createTranslationFunction = Nt.getTranslations = Nt.resetTranslationsCache = void 0));
  const e = Yf(),
    t = Zf(),
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
var ko = {},
  Dn = {},
  pc;
function ev() {
  if (pc) return Dn;
  ((pc = 1),
    Object.defineProperty(Dn, "__esModule", { value: !0 }),
    (Dn.initFeatureFlags = void 0));
  const e = ye(),
    t = at(),
    r = zs(),
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
  Ba = {},
  hc;
function hg() {
  if (hc) return Ba;
  ((hc = 1), Object.defineProperty(Ba, "__esModule", { value: !0 }));
  const e = Zt();
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
  return ((Ba.default = t), Ba);
}
var Rr = {},
  Mn = {},
  gc;
function gg() {
  if (gc) return Mn;
  ((gc = 1),
    Object.defineProperty(Mn, "__esModule", { value: !0 }),
    (Mn._resolveDeltasResponse = void 0));
  const e = Zt(),
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
var bc;
function tv() {
  if (bc) return Rr;
  bc = 1;
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
  const t = Zt(),
    r = gg();
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
  _c;
function bg() {
  if (_c) return Ln;
  ((_c = 1),
    Object.defineProperty(Ln, "__esModule", { value: !0 }),
    (Ln._makeParamStoreGetter = void 0));
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
  yc;
function _g() {
  if (yc) return ur;
  yc = 1;
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
  const t = Zt(),
    r = tv();
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
var mc;
function yg() {
  if (mc) return Cr;
  mc = 1;
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
  const t = Zt(),
    r = hg(),
    n = tv(),
    a = bg(),
    i = _g();
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
var wc;
function mg() {
  return (
    wc ||
      ((wc = 1),
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
        const n = Zt(),
          a = yg();
        ((e.StatsigClient = a.default), r(Zt(), e));
        const i = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = i;
      })(sr)),
    sr
  );
}
var Nn = {},
  Oc;
function wg() {
  if (Oc) return Nn;
  ((Oc = 1),
    Object.defineProperty(Nn, "__esModule", { value: !0 }),
    (Nn.ForgeDataAdapter = void 0));
  const e = ev();
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
  return ((Nn.ForgeDataAdapter = t), Nn);
}
var kc;
function Og() {
  if (kc) return Tn;
  ((kc = 1),
    Object.defineProperty(Tn, "__esModule", { value: !0 }),
    (Tn.ForgeFeatureFlags = void 0));
  const e = mg(),
    t = wg();
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
var Sc;
function kg() {
  return (
    Sc ||
      ((Sc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ForgeFeatureFlags = void 0),
          At.__exportStar(ev(), e));
        var r = Og();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.ForgeFeatureFlags;
          },
        });
      })(ko)),
    ko
  );
}
var Ec;
function Sg() {
  return (
    Ec ||
      ((Ec = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = At;
        var r = Mh();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Nh(), e),
          t.__exportStar(zh(), e),
          t.__exportStar(Zf(), e),
          t.__exportStar(ng(), e),
          t.__exportStar(ig(), e),
          t.__exportStar(sg(), e),
          t.__exportStar(cg(), e),
          t.__exportStar(lg(), e),
          t.__exportStar(vg(), e),
          (e.i18n = t.__importStar(pg())),
          t.__exportStar(kg(), e));
      })(io)),
    io
  );
}
var Re = Sg();
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
var Eg = {};
function Ai() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : Eg;
}
var rv = Object.assign,
  di = Object.getOwnPropertyDescriptor,
  kt = Object.defineProperty,
  ji = Object.prototype,
  ss = [];
Object.freeze(ss);
var nv = {};
Object.freeze(nv);
var xg = typeof Proxy < "u",
  Cg = Object.toString();
function av() {
  xg || H("Proxy not available");
}
function iv(e) {
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
function Ii(e) {
  return e !== null && typeof e == "object";
}
function tr(e) {
  if (!Ii(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === Cg;
}
function ov(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Di(e, t, r) {
  kt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function sv(e, t, r) {
  kt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function wr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return Ii(n) && n[r] === !0;
    }
  );
}
function tn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function Rg(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function $t(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var uv = typeof Object.getOwnPropertySymbols < "u";
function Pg(e) {
  var t = Object.keys(e);
  if (!uv) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return ji.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Ti =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : uv
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function cv(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function qt(e, t) {
  return ji.hasOwnProperty.call(e, t);
}
var Ag =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Ti(t).forEach(function (n) {
        r[n] = di(t, n);
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
function xc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function jg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Dg(n.key), n));
  }
}
function rn(e, t, r) {
  return (t && jg(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Vr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Tg(e)) || t) {
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
function lv(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), us(e, t));
}
function us(e, t) {
  return (
    (us = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    us(e, t)
  );
}
function Ig(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Dg(e) {
  var t = Ig(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Tg(e, t) {
  if (e) {
    if (typeof e == "string") return xc(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? xc(e, t)
          : void 0
    );
  }
}
var Ot = Symbol("mobx-stored-annotations");
function St(e) {
  function t(r, n) {
    if (Aa(n)) return e.decorate_20223_(r, n);
    Pa(r, n, e);
  }
  return Object.assign(t, e);
}
function Pa(e, t, r) {
  (qt(e, Ot) || Di(e, Ot, gr({}, e[Ot])), Bg(r) || (e[Ot][t] = r));
}
function Mg(e) {
  return (qt(e, Ot) || Di(e, Ot, gr({}, e[Ot])), e[Ot]);
}
function Aa(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var N = Symbol("mobx administration"),
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
        return xv(this);
      }),
      (t.reportChanged = function () {
        (Qe(), Cv(this), Ze());
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
var Bs = wr("Atom", nr);
function dv(e, t, r) {
  (t === void 0 && (t = Ur), r === void 0 && (r = Ur));
  var n = new nr(e);
  return (t !== Ur && Hb(n, t), r !== Ur && Iv(n, r), n);
}
function Lg(e, t) {
  return Vv(e, t);
}
function Ng(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var fi = { structural: Lg, default: Ng };
function br(e, t, r) {
  return Lv(e)
    ? e
    : Array.isArray(e)
      ? se.array(e, { name: r })
      : tr(e)
        ? se.object(e, void 0, { name: r })
        : tn(e)
          ? se.map(e, { name: r })
          : $t(e)
            ? se.set(e, { name: r })
            : typeof e == "function" && !Kr(e) && !ba(e)
              ? ov(e)
                ? Yr(e)
                : ga(r, e)
              : e;
}
function Fg(e, t, r) {
  if (e == null || qi(e) || Bi(e) || kr(e) || wt(e)) return e;
  if (Array.isArray(e)) return se.array(e, { name: r, deep: !1 });
  if (tr(e)) return se.object(e, void 0, { name: r, deep: !1 });
  if (tn(e)) return se.map(e, { name: r, deep: !1 });
  if ($t(e)) return se.set(e, { name: r, deep: !1 });
}
function Mi(e) {
  return e;
}
function $g(e, t) {
  return Vv(e, t) ? t : e;
}
var zg = "override";
function Bg(e) {
  return e.annotationType_ === zg;
}
function ja(e, t) {
  return { annotationType_: e, options_: t, make_: qg, extend_: Ug, decorate_20223_: Vg };
}
function qg(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Kr(r.value)) return 1;
  var i = fv(e, this, t, r, !1);
  return (kt(n, t, i), 2);
}
function Ug(e, t, r, n) {
  var a = fv(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function Vg(e, t) {
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
function Gg(e, t, r, n) {
  (t.annotationType_, n.value);
}
function fv(e, t, r, n, a) {
  var i, o, u, s, c, l, d;
  (a === void 0 && (a = A.safeDescriptors), Gg(e, t, r, n));
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
function vv(e, t) {
  return { annotationType_: e, options_: t, make_: Hg, extend_: Wg, decorate_20223_: Kg };
}
function Hg(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!qt(e.target_, t) || !ba(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (ba(r.value)) return 1;
  var i = pv(e, this, t, r, !1, !1);
  return (kt(n, t, i), 2);
}
function Wg(e, t, r, n) {
  var a,
    i = pv(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, i, n);
}
function Kg(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    ba(e) || (e = Yr(e)),
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
function Yg(e, t, r, n) {
  (t.annotationType_, n.value);
}
function pv(e, t, r, n, a, i) {
  (i === void 0 && (i = A.safeDescriptors), Yg(e, t, r, n));
  var o = n.value;
  if ((ba(o) || (o = Yr(o)), a)) {
    var u;
    ((o = o.bind((u = e.proxy_) != null ? u : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: i ? e.isPlainObject_ : !0, enumerable: !1, writable: !i };
}
function qs(e, t) {
  return { annotationType_: e, options_: t, make_: Jg, extend_: Xg, decorate_20223_: Qg };
}
function Jg(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Xg(e, t, r, n) {
  return (
    Zg(e, this, t, r),
    e.defineComputedProperty_(t, gr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function Qg(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var i = nn(this)[N],
        o = gr({}, r.options_, { get: e, context: this });
      (o.name || (o.name = "ObservableObject." + n.toString()), i.values_.set(n, new vt(o)));
    }),
    function () {
      return this[N].getObservablePropValue_(n);
    }
  );
}
function Zg(e, t, r, n) {
  (t.annotationType_, n.get);
}
function Li(e, t) {
  return { annotationType_: e, options_: t, make_: eb, extend_: tb, decorate_20223_: rb };
}
function eb(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function tb(e, t, r, n) {
  var a, i;
  return (
    nb(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (i = this.options_) == null ? void 0 : i.enhancer) != null ? a : br,
      n,
    )
  );
}
function rb(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    i = new WeakSet();
  function o(u, s) {
    var c,
      l,
      d = nn(u)[N],
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
        return (i.has(this) || o(this, e.get.call(this)), this[N].getObservablePropValue_(a));
      },
      set: function (s) {
        return (i.has(this) || o(this, s), this[N].setObservablePropValue_(a, s));
      },
      init: function (s) {
        return (i.has(this) || o(this, s), s);
      },
    };
}
function nb(e, t, r, n) {
  t.annotationType_;
}
var ab = "true",
  ib = hv();
function hv(e) {
  return { annotationType_: ab, options_: e, make_: ob, extend_: sb, decorate_20223_: ub };
}
function ob(e, t, r, n) {
  var a, i;
  if (r.get) return Ni.make_(e, t, r, n);
  if (r.set) {
    var o = Kr(r.set) ? r.set : _r(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: A.safeDescriptors ? e.isPlainObject_ : !0,
          set: o,
        }) === null
        ? 0
        : 2
      : (kt(n, t, { configurable: !0, set: o }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var u;
    if (ov(r.value)) {
      var s,
        c = (s = this.options_) != null && s.autoBind ? Yr.bound : Yr;
      return c.make_(e, t, r, n);
    }
    var l = (u = this.options_) != null && u.autoBind ? ga.bound : ga;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? se.ref : se;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function sb(e, t, r, n) {
  var a, i;
  if (r.get) return Ni.extend_(e, t, r, n);
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
function ub(e, t) {
  H("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var cb = "observable",
  lb = "observable.ref",
  db = "observable.shallow",
  fb = "observable.struct",
  gv = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(gv);
function qa(e) {
  return e || gv;
}
var cs = Li(cb),
  vb = Li(lb, { enhancer: Mi }),
  pb = Li(db, { enhancer: Fg }),
  hb = Li(fb, { enhancer: $g }),
  bv = St(cs);
function Ua(e) {
  return e.deep === !0 ? br : e.deep === !1 ? Mi : bb(e.defaultDecorator);
}
function gb(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : hv(e)) : void 0;
}
function bb(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : br;
}
function _v(e, t, r) {
  if (Aa(t)) return cs.decorate_20223_(e, t);
  if (hr(t)) {
    Pa(e, t, cs);
    return;
  }
  return Lv(e)
    ? e
    : tr(e)
      ? se.object(e, t, r)
      : Array.isArray(e)
        ? se.array(e, t)
        : tn(e)
          ? se.map(e, t)
          : $t(e)
            ? se.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : se.box(e, t);
}
rv(_v, bv);
var _b = {
    box: function (t, r) {
      var n = qa(r);
      return new vr(t, Ua(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = qa(r);
      return (A.useProxies === !1 || n.proxy === !1 ? g_ : o_)(t, Ua(n), n.name);
    },
    map: function (t, r) {
      var n = qa(r);
      return new Fv(t, Ua(n), n.name);
    },
    set: function (t, r) {
      var n = qa(r);
      return new $v(t, Ua(n), n.name);
    },
    object: function (t, r, n) {
      return Sr(function () {
        return Jb(A.useProxies === !1 || n?.proxy === !1 ? nn({}, n) : n_({}, n), t, r);
      });
    },
    ref: St(vb),
    shallow: St(pb),
    deep: bv,
    struct: St(hb),
  },
  se = rv(_v, _b),
  yv = "computed",
  yb = "computed.struct",
  ls = qs(yv),
  mb = qs(yb, { equals: fi.structural }),
  Ni = function (t, r) {
    if (Aa(r)) return ls.decorate_20223_(t, r);
    if (hr(r)) return Pa(t, r, ls);
    if (tr(t)) return St(qs(yv, t));
    var n = tr(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new vt(n));
  };
Object.assign(Ni, ls);
Ni.struct = St(mb);
var Cc,
  Rc,
  vi = 0,
  wb = 1,
  Ob =
    (Cc = (Rc = di(function () {}, "name")) == null ? void 0 : Rc.configurable) != null ? Cc : !1,
  Pc = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function _r(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return kb(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    Ob && ((Pc.value = e), kt(a, "name", Pc)),
    a
  );
}
function kb(e, t, r, n, a) {
  var i = Sb(e, t);
  try {
    return r.apply(n, a);
  } catch (o) {
    throw ((i.error_ = o), o);
  } finally {
    Eb(i);
  }
}
function Sb(e, t, r, n) {
  var a = !1,
    i = 0,
    o = A.trackingDerivation,
    u = !t || !o;
  Qe();
  var s = A.allowStateChanges;
  u && (Or(), (s = Fi(!0)));
  var c = Us(!0),
    l = {
      runAsAction_: u,
      prevDerivation_: o,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: c,
      notifySpy_: a,
      startTime_: i,
      actionId_: wb++,
      parentActionId_: vi,
    };
  return ((vi = l.actionId_), l);
}
function Eb(e) {
  (vi !== e.actionId_ && H(30),
    (vi = e.parentActionId_),
    e.error_ !== void 0 && (A.suppressReactionErrors = !0),
    $i(e.prevAllowStateChanges_),
    ua(e.prevAllowStateReads_),
    Ze(),
    e.runAsAction_ && Ut(e.prevDerivation_),
    (A.suppressReactionErrors = !1));
}
function xb(e, t) {
  var r = Fi(e);
  try {
    return t();
  } finally {
    $i(r);
  }
}
function Fi(e) {
  var t = A.allowStateChanges;
  return ((A.allowStateChanges = e), t);
}
function $i(e) {
  A.allowStateChanges = e;
}
var vr = (function (e) {
    function t(n, a, i, o, u) {
      var s;
      return (
        i === void 0 && (i = "ObservableValue"),
        u === void 0 && (u = fi.default),
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
    lv(t, e);
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
        return Ia(this, a);
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
          Da(this, a)
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
        return cv(this.get());
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
        (this.value_ = new hi(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = pi.NONE),
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
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? fi.structural : fi.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        jb(this);
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
          ds(this) &&
            (this.warnAboutUntrackedRead_(), Qe(), (this.value_ = this.computeValue_(!1)), Ze());
        else if ((xv(this), ds(this))) {
          var n = A.trackingContext;
          (this.keepAlive_ && !n && (A.trackingContext = this),
            this.trackAndCompute() && Ab(this),
            (A.trackingContext = n));
        }
        var a = this.value_;
        if (ei(a)) throw a.cause;
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
          o = a || ei(n) || ei(i) || !this.equals_(n, i);
        return (o && (this.value_ = i), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = Fi(!1),
          i;
        if (n) i = mv(this, this.derivation, this.scope_);
        else if (A.disableErrorBoundaries === !0) i = this.derivation.call(this.scope_);
        else
          try {
            i = this.derivation.call(this.scope_);
          } catch (o) {
            i = new hi(o);
          }
        return ($i(a), (this.isComputing = !1), i);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (fs(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var i = this,
          o = !0,
          u = void 0;
        return Bb(function () {
          var s = i.get();
          if (!o || a) {
            var c = Or();
            (n({
              observableKind: "computed",
              debugObjectName: i.name_,
              type: Et,
              object: i,
              newValue: s,
              oldValue: u,
            }),
              Ut(c));
          }
          ((o = !1), (u = s));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return cv(this.get());
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
var zi = wr("ComputedValue", vt),
  W;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(W || (W = {}));
var pi;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(pi || (pi = {}));
var hi = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function ei(e) {
  return e instanceof hi;
}
function ds(e) {
  switch (e.dependenciesState_) {
    case W.UP_TO_DATE_:
      return !1;
    case W.NOT_TRACKING_:
    case W.STALE_:
      return !0;
    case W.POSSIBLY_STALE_: {
      for (var t = Us(!0), r = Or(), n = e.observing_, a = n.length, i = 0; i < a; i++) {
        var o = n[i];
        if (zi(o)) {
          if (A.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Ut(r), ua(t), !0);
            }
          if (e.dependenciesState_ === W.STALE_) return (Ut(r), ua(t), !0);
        }
      }
      return (Ov(e), Ut(r), ua(t), !1);
    }
  }
}
function mv(e, t, r) {
  var n = Us(!0);
  (Ov(e),
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
      i = new hi(o);
    }
  return (A.inBatch--, (A.trackingDerivation = a), Cb(e), ua(n), i);
}
function Cb(e) {
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
    (s.diffValue === 0 && Sv(s, e), (s.diffValue = 0));
  }
  for (; a--; ) {
    var c = r[a];
    c.diffValue === 1 && ((c.diffValue = 0), Pb(c, e));
  }
  n !== W.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function fs(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Sv(t[r], e);
  e.dependenciesState_ = W.NOT_TRACKING_;
}
function wv(e) {
  var t = Or();
  try {
    return e();
  } finally {
    Ut(t);
  }
}
function Or() {
  var e = A.trackingDerivation;
  return ((A.trackingDerivation = null), e);
}
function Ut(e) {
  A.trackingDerivation = e;
}
function Us(e) {
  var t = A.allowStateReads;
  return ((A.allowStateReads = e), t);
}
function ua(e) {
  A.allowStateReads = e;
}
function Ov(e) {
  if (e.dependenciesState_ !== W.UP_TO_DATE_) {
    e.dependenciesState_ = W.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = W.UP_TO_DATE_;
  }
}
var ti = function () {
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
  ri = !0,
  kv = !1,
  A = (function () {
    var e = Ai();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ri = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new ti().version && (ri = !1),
      ri
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ti()))
        : (setTimeout(function () {
            kv || H(35);
          }, 1),
          new ti())
    );
  })();
function Rb() {
  if (((A.pendingReactions.length || A.inBatch || A.isRunningReactions) && H(36), (kv = !0), ri)) {
    var e = Ai();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (A = new ti()));
  }
}
function Pb(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Sv(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Ev(e));
}
function Ev(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), A.pendingUnobservations.push(e));
}
function Qe() {
  A.inBatch++;
}
function Ze() {
  if (--A.inBatch === 0) {
    Rv();
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
function xv(e) {
  var t = A.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && A.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && A.inBatch > 0 && Ev(e), !1);
}
function Cv(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === W.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = W.STALE_));
    }));
}
function Ab(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.POSSIBLY_STALE_
        ? (t.dependenciesState_ = W.STALE_)
        : t.dependenciesState_ === W.UP_TO_DATE_ && (e.lowestObserverState_ = W.UP_TO_DATE_);
    }));
}
function jb(e) {
  e.lowestObserverState_ === W.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = W.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.UP_TO_DATE_ &&
        ((t.dependenciesState_ = W.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var Rt = (function () {
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
      (this.isTracing_ = pi.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), A.pendingReactions.push(this), Rv());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Qe(), (this.isScheduled = !1));
        var n = A.trackingContext;
        if (((A.trackingContext = this), ds(this))) {
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
        var i = mv(this, n, void 0);
        ((A.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && fs(this),
          ei(i) && this.reportExceptionInDerivation_(i.cause),
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Qe(), fs(this), Ze()));
    }),
    (t.getDisposer_ = function (n) {
      var a = this,
        i = function o() {
          (a.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", o));
        };
      return (
        n == null || n.addEventListener == null || n.addEventListener("abort", i),
        (i[N] = this),
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
Rt.isDisposedMask_ = 1;
Rt.isScheduledMask_ = 2;
Rt.isTrackPendingMask_ = 4;
Rt.isRunningMask_ = 8;
Rt.diffValueMask_ = 16;
var Ib = 100,
  vs = function (t) {
    return t();
  };
function Rv() {
  A.inBatch > 0 || A.isRunningReactions || vs(Db);
}
function Db() {
  A.isRunningReactions = !0;
  for (var e = A.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Ib && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  A.isRunningReactions = !1;
}
var gi = wr("Reaction", Rt);
function Tb(e) {
  var t = vs;
  vs = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function ca() {
  return !1;
}
function Mb(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Pv = "action",
  Lb = "action.bound",
  Av = "autoAction",
  Nb = "autoAction.bound",
  Fb = "<unnamed action>",
  ps = ja(Pv),
  $b = ja(Lb, { bound: !0 }),
  hs = ja(Av, { autoAction: !0 }),
  zb = ja(Nb, { autoAction: !0, bound: !0 });
function jv(e) {
  var t = function (n, a) {
    if (ft(n)) return _r(n.name || Fb, n, e);
    if (ft(a)) return _r(n, a, e);
    if (Aa(a)) return (e ? hs : ps).decorate_20223_(n, a);
    if (hr(a)) return Pa(n, a, e ? hs : ps);
    if (hr(n)) return St(ja(e ? Av : Pv, { name: n, autoAction: e }));
  };
  return t;
}
var et = jv(!1);
Object.assign(et, ps);
var ga = jv(!0);
Object.assign(ga, hs);
et.bound = St($b);
ga.bound = St(zb);
function Kr(e) {
  return ft(e) && e.isMobxAction === !0;
}
function Bb(e, t) {
  var r, n, a, i;
  t === void 0 && (t = nv);
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    u = !t.scheduler && !t.delay,
    s;
  if (u)
    s = new Rt(
      o,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var c = Ub(t),
      l = !1;
    s = new Rt(
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
var qb = function (t) {
  return t();
};
function Ub(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : qb;
}
var Vb = "onBO",
  Gb = "onBUO";
function Hb(e, t, r) {
  return Dv(Vb, e, t, r);
}
function Iv(e, t, r) {
  return Dv(Gb, e, t, r);
}
function Dv(e, t, r, n) {
  var a = yi(t),
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
var Wb = "never",
  Va = "always",
  Kb = "observed";
function Yb(e) {
  e.isolateGlobalState === !0 && Rb();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (A.useProxies = t === Va ? !0 : t === Wb ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (A.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Va ? Va : r === Kb;
    ((A.enforceActions = n), (A.allowStateChanges = !(n === !0 || n === Va)));
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
    e.reactionScheduler && Tb(e.reactionScheduler));
}
function Jb(e, t, r, n) {
  var a = Ag(t);
  return (
    Sr(function () {
      var i = nn(e, n)[N];
      Ti(a).forEach(function (o) {
        i.extend_(o, a[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function Xb(e, t) {
  return Tv(yi(e, t));
}
function Tv(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = Qb(e.observing_).map(Tv)),
    t
  );
}
function Qb(e) {
  return Array.from(new Set(e));
}
var Zb = 0;
function Mv() {
  this.message = "FLOW_CANCELLED";
}
Mv.prototype = Object.create(Error.prototype);
var So = vv("flow"),
  e_ = vv("flow.bound", { bound: !0 }),
  Yr = Object.assign(function (t, r) {
    if (Aa(r)) return So.decorate_20223_(t, r);
    if (hr(r)) return Pa(t, r, So);
    var n = t,
      a = n.name || "<unnamed flow>",
      i = function () {
        var u = this,
          s = arguments,
          c = ++Zb,
          l = et(a + " - runid: " + c + " - init", n).apply(u, s),
          d,
          f = void 0,
          h = new Promise(function (v, p) {
            var g = 0;
            d = p;
            function b(O) {
              f = void 0;
              var y;
              try {
                y = et(a + " - runid: " + c + " - yield " + g++, l.next).call(l, O);
              } catch (S) {
                return p(S);
              }
              w(y);
            }
            function m(O) {
              f = void 0;
              var y;
              try {
                y = et(a + " - runid: " + c + " - yield " + g++, l.throw).call(l, O);
              } catch (S) {
                return p(S);
              }
              w(y);
            }
            function w(O) {
              if (ft(O?.then)) {
                O.then(w, p);
                return;
              }
              return O.done ? v(O.value) : ((f = Promise.resolve(O.value)), f.then(b, m));
            }
            b(void 0);
          });
        return (
          (h.cancel = et(a + " - runid: " + c + " - cancel", function () {
            try {
              f && Ac(f);
              var v = l.return(void 0),
                p = Promise.resolve(v.value);
              (p.then(Ur, Ur), Ac(p), d(new Mv()));
            } catch (g) {
              d(g);
            }
          })),
          h
        );
      };
    return ((i.isMobXFlow = !0), i);
  }, So);
Yr.bound = St(e_);
function Ac(e) {
  ft(e.cancel) && e.cancel();
}
function ba(e) {
  return e?.isMobXFlow === !0;
}
function t_(e, t) {
  return e ? qi(e) || !!e[N] || Bs(e) || gi(e) || zi(e) : !1;
}
function Lv(e) {
  return t_(e);
}
function zt(e, t) {
  (t === void 0 && (t = void 0), Qe());
  try {
    return e.apply(t);
  } finally {
    Ze();
  }
}
function Pr(e) {
  return e[N];
}
var r_ = {
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
function n_(e, t) {
  var r, n;
  return (
    av(),
    (e = nn(e, t)),
    (n = (r = e[N]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, r_))
  );
}
function Je(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Ia(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    iv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Xe(e, t) {
  var r = Or();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, i = n.length;
      a < i && ((t = n[a](t)), t && !t.type && H(14), !!t);
      a++
    );
    return t;
  } finally {
    Ut(r);
  }
}
function lt(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Da(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    iv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function dt(e, t) {
  var r = Or(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, i = n.length; a < i; a++) n[a](t);
    Ut(r);
  }
}
function Vs(e, t, r) {
  return (
    Sr(function () {
      var n,
        a = nn(e, r)[N];
      ((n = t) != null || (t = Mg(e)),
        Ti(t).forEach(function (i) {
          return a.make_(i, t[i]);
        }));
    }),
    e
  );
}
var jc = "splice",
  Et = "update",
  a_ = 1e4,
  i_ = {
    get: function (t, r) {
      var n = t[N];
      return r === N
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : qt(bi, r)
              ? bi[r]
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
      H(15);
    },
  },
  Gs = (function () {
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
        return Ia(this, n);
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
          Da(this, n)
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
          this.legacyMode_ && a > 0 && Uv(n + a + 1));
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
          i === void 0 && (i = ss),
          Je(this))
        ) {
          var s = Xe(this, { object: this.proxy_, type: jc, index: n, removedCount: a, added: i });
          if (!s) return ss;
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
        if (i.length < a_) {
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
        var o = !this.owned_ && ca(),
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
        var o = !this.owned_ && ca(),
          u = lt(this),
          s =
            u || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: jc,
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
function o_(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    av(),
    Sr(function () {
      var a = new Gs(r, t, n, !1);
      sv(a.values_, N, a);
      var i = new Proxy(a.values_, i_);
      return ((a.proxy_ = i), e && e.length && a.spliceWithArray_(0, 0, e), i);
    })
  );
}
var bi = {
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
    for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
      a[i - 2] = arguments[i];
    var o = this[N];
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
    return (A.trackingDerivation && H(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    A.trackingDerivation && H(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[N],
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
ie("reduce", Nv);
ie("reduceRight", Nv);
function ie(e, t) {
  typeof Array.prototype[e] == "function" && (bi[e] = t(e));
}
function ze(e) {
  return function () {
    var t = this[N];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function ht(e) {
  return function (t, r) {
    var n = this,
      a = this[N];
    a.atom_.reportObserved();
    var i = a.dehanceValues_(a.values_);
    return i[e](function (o, u) {
      return t.call(r, o, u, n);
    });
  };
}
function Nv(e) {
  return function () {
    var t = this,
      r = this[N];
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
var s_ = wr("ObservableArrayAdministration", Gs);
function Bi(e) {
  return Ii(e) && s_(e[N]);
}
var u_ = {},
  Xt = "add",
  _i = "delete",
  Fv = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = br),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[N] = u_),
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
          ((i.keysAtom_ = dv("ObservableMap.keys()")),
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
          var o = (i = new vr(this.has_(n), Mi, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            Iv(o, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return i.get();
      }),
      (t.set = function (n, a) {
        var i = this.has_(n);
        if (Je(this)) {
          var o = Xe(this, { type: i ? Et : Xt, object: this, newValue: a, name: n });
          if (!o) return this;
          a = o.newValue;
        }
        return (i ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, Je(this))) {
          var i = Xe(this, { type: _i, object: this, name: n });
          if (!i) return !1;
        }
        if (this.has_(n)) {
          var o = ca(),
            u = lt(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: _i,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            zt(function () {
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
          var o = ca(),
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
          zt(function () {
            var c,
              l = new vr(a, i.enhancer_, "ObservableMap.key", !1);
            (i.data_.set(n, l),
              (a = l.value_),
              (c = i.hasMap_.get(n)) == null || c.setNewValue_(!0),
              i.keysAtom_.reportChanged());
          }));
        var o = ca(),
          u = lt(this),
          s =
            u || o
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Xt,
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
        return Ic({
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
        return Ic({
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
          kr(n) && (n = new Map(n)),
          zt(function () {
            tr(n)
              ? Pg(n).forEach(function (i) {
                  return a.set(i, n[i]);
                })
              : Array.isArray(n)
                ? n.forEach(function (i) {
                    var o = i[0],
                      u = i[1];
                    return a.set(o, u);
                  })
                : tn(n)
                  ? (Rg(n) || H(19, n),
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
        zt(function () {
          wv(function () {
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
          zt(function () {
            for (
              var i = c_(n), o = new Map(), u = !1, s = Vr(a.data_.keys()), c;
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
                for (var O = a.data_.keys(), y = o.keys(), S = O.next(), C = y.next(); !S.done; ) {
                  if (S.value !== C.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = O.next()), (C = y.next()));
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
        return Da(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ia(this, n);
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
  kr = wr("ObservableMap", Fv);
function Ic(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Ws(e));
}
function c_(e) {
  if (tn(e) || kr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (tr(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return H(21, e);
}
var l_ = {},
  $v = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = br),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[N] = l_),
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
          ((i.atom_ = dv(i.name_)), r && i.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        zt(function () {
          wv(function () {
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
          var i = Xe(this, { type: Xt, object: this, newValue: n });
          if (!i) return this;
          n = i.newValue;
        }
        if (!this.has(n)) {
          zt(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var o = !1,
            u = lt(this),
            s =
              u || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Xt,
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
          var i = Xe(this, { type: _i, object: this, oldValue: n });
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
                    type: _i,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            zt(function () {
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
        return Dc({
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
        return Dc({
          next: function () {
            var o = a.next(),
              u = o.value,
              s = o.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(u), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if ($t(n) && !wt(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if ($t(n) && !wt(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if ($t(n) && !wt(n)) return n.symmetricDifference(this);
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
        if ($t(n) && !wt(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          wt(n) && (n = new Set(n)),
          zt(function () {
            Array.isArray(n)
              ? (a.clear(),
                n.forEach(function (i) {
                  return a.add(i);
                }))
              : $t(n)
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
        return Da(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ia(this, n);
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
  wt = wr("ObservableSet", $v);
function Dc(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Ws(e));
}
var Tc = Object.create(null),
  Mc = "remove",
  zv = (function () {
    function e(r, n, a, i) {
      (n === void 0 && (n = new Map()),
        i === void 0 && (i = ib),
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
        return (A.trackingDerivation && !qt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, a, i) {
        return (
          i === void 0 && (i = !1),
          qt(this.target_, n)
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
            ((a = new vr(n in this.target_, Mi, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var i;
            if ((i = this.target_[Ot]) != null && i[n]) return;
            H(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== ji; ) {
            var u = di(o, n);
            if (u) {
              var s = a.make_(this, n, u, o);
              if (s === 0) return;
              if (s === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          Nc(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, i, o) {
        if ((o === void 0 && (o = !1), i === !0 && (i = this.defaultAnnotation_), i === !1))
          return this.defineProperty_(n, a, o);
        var u = i.extend_(this, n, a, o);
        return (u && Nc(this, i, n), u);
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
              type: Xt,
              newValue: a.value,
            });
            if (!u) return null;
            var s = u.newValue;
            a.value !== s && (a = gr({}, a, { value: s }));
          }
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else kt(this.target_, n, a);
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
              type: Xt,
              newValue: a,
            });
            if (!s) return null;
            a = s.newValue;
          }
          var c = Lc(n),
            l = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: c.get,
              set: c.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else kt(this.target_, n, l);
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
              type: Xt,
              newValue: void 0,
            });
            if (!u) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var s = Lc(n),
            c = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, c)) return !1;
          } else kt(this.target_, n, c);
          (this.values_.set(n, new vt(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          Ze();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !qt(this.target_, n))) return !0;
        if (Je(this)) {
          var i = Xe(this, { object: this.proxy_ || this.target_, name: n, type: Mc });
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
            l = (d = di(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c && (this.values_.delete(n), c instanceof vr && (l = c.value_), Cv(c)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            u || s)
          ) {
            var f = {
              type: Mc,
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
        return Da(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ia(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var i,
          o = lt(this),
          u = !1;
        if (o || u) {
          var s =
            o || u
              ? {
                  type: Xt,
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
        return (this.keysAtom_.reportObserved(), Ti(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function nn(e, t) {
  var r;
  if (qt(e, N)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new zv(e, new Map(), String(n), gb(t));
  return (Di(e, N, a), e);
}
var d_ = wr("ObservableObjectAdministration", zv);
function Lc(e) {
  return (
    Tc[e] ||
    (Tc[e] = {
      get: function () {
        return this[N].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[N].setObservablePropValue_(e, r);
      },
    })
  );
}
function qi(e) {
  return Ii(e) ? d_(e[N]) : !1;
}
function Nc(e, t, r) {
  var n;
  (n = e.target_[Ot]) == null || delete n[r];
}
var f_ = qv(0),
  v_ = (function () {
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
  Bv = function () {};
function p_(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
p_(Bv, Array.prototype);
var Hs = (function (e) {
  function t(n, a, i, o) {
    var u;
    return (
      i === void 0 && (i = "ObservableArray"),
      o === void 0 && (o = !1),
      (u = e.call(this) || this),
      Sr(function () {
        var s = new Gs(i, a, o, !0);
        ((s.proxy_ = u),
          sv(u, N, s),
          n && n.length && u.spliceWithArray(0, 0, n),
          v_ && Object.defineProperty(u, "0", f_));
      }),
      u
    );
  }
  lv(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[N].atom_.reportObserved();
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        i.map(function (u) {
          return Bi(u) ? u.slice() : u;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return Ws({
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
})(Bv);
Object.entries(bi).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Di(Hs.prototype, t, r);
});
function qv(e) {
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
function h_(e) {
  kt(Hs.prototype, "" + e, qv(e));
}
function Uv(e) {
  if (e > Eo) {
    for (var t = Eo; t < e + 100; t++) h_(t);
    Eo = e;
  }
}
Uv(1e3);
function g_(e, t, r) {
  return new Hs(e, t, r);
}
function yi(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Bi(e)) return (t !== void 0 && H(23), e[N].atom_);
    if (wt(e)) return e.atom_;
    if (kr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || H(25, t, gs(e)), r);
    }
    if (qi(e)) {
      if (!t) return H(26);
      var n = e[N].values_.get(t);
      return (n || H(27, t, gs(e)), n);
    }
    if (Bs(e) || zi(e) || gi(e)) return e;
  } else if (ft(e) && gi(e[N])) return e[N];
  H(28);
}
function b_(e, t) {
  if ((e || H(29), Bs(e) || zi(e) || gi(e) || kr(e) || wt(e))) return e;
  if (e[N]) return e[N];
  H(24, e);
}
function gs(e, t) {
  var r;
  if (t !== void 0) r = yi(e, t);
  else {
    if (Kr(e)) return e.name;
    qi(e) || kr(e) || wt(e) ? (r = b_(e)) : (r = yi(e));
  }
  return r.name_;
}
function Sr(e) {
  var t = Or(),
    r = Fi(!0);
  Qe();
  try {
    return e();
  } finally {
    (Ze(), $i(r), Ut(t));
  }
}
var Fc = ji.toString;
function Vv(e, t, r) {
  return (r === void 0 && (r = -1), bs(e, t, r));
}
function bs(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object") return !1;
  var o = Fc.call(e);
  if (o !== Fc.call(t)) return !1;
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
  ((e = $c(e)), (t = $c(t)));
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
    for (; l--; ) if (!bs(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var h = 0; h < f; h++) {
      var v = d[h];
      if (!(qt(t, v) && bs(e[v], t[v], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function $c(e) {
  return Bi(e) ? e.slice() : tn(e) || kr(e) || $t(e) || wt(e) ? Array.from(e.entries()) : e;
}
var zc,
  __ = ((zc = Ai().Iterator) == null ? void 0 : zc.prototype) || {};
function Ws(e) {
  return ((e[Symbol.iterator] = y_), Object.assign(Object.create(__), e));
}
function y_() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Ai();
  typeof t[e] > "u" && H("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: Mb, extras: { getDebugName: gs }, $mobx: N });
var _ = pt();
const k = rr(_),
  Bc = Rh({ __proto__: null, default: k }, [_]);
if (!_.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Vs) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function m_(e) {
  e();
}
function w_(e) {
  (e || (e = m_), Yb({ reactionScheduler: e }));
}
function O_(e) {
  return Xb(e);
}
var k_ = 1e4,
  S_ = 1e4,
  E_ = (function () {
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
            (n === void 0 && (n = k_), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, S_));
        },
      }),
      e
    );
  })(),
  x_ = typeof FinalizationRegistry < "u" ? FinalizationRegistry : E_,
  _a = new x_(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  xo = { exports: {} },
  Co = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qc;
function C_() {
  if (qc) return Co;
  qc = 1;
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
    (Co.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    Co
  );
}
var Uc;
function R_() {
  return (Uc || ((Uc = 1), (xo.exports = C_())), xo.exports);
}
var P_ = R_();
function Vc(e) {
  e.reaction = new Rt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function A_(e, t) {
  t === void 0 && (t = "observed");
  var r = k.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (u) {
        return (
          _a.unregister(n),
          (n.onStoreChange = u),
          n.reaction || (Vc(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (Vc(a), _a.register(r, a, a)),
    k.useDebugValue(a.reaction, O_),
    P_.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
var Ro,
  Po,
  Gv = typeof Symbol == "function" && Symbol.for,
  j_ =
    (Po =
      (Ro = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Ro === void 0
        ? void 0
        : Ro.configurable) !== null && Po !== void 0
      ? Po
      : !1,
  Gc = Gv
    ? Symbol.for("react.forward_ref")
    : typeof _.forwardRef == "function" &&
      _.forwardRef(function (e) {
        return null;
      }).$$typeof,
  Hc = Gv
    ? Symbol.for("react.memo")
    : typeof _.memo == "function" &&
      _.memo(function (e) {
        return null;
      }).$$typeof;
function I_(e, t) {
  var r;
  if (Hc && e.$$typeof === Hc)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    i = e.displayName || e.name;
  if (Gc && e.$$typeof === Gc && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (u, s) {
    return A_(function () {
      return a(u, s);
    }, i);
  };
  return (
    (o.displayName = e.displayName),
    j_ && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = _.forwardRef(o)),
    (o = _.memo(o)),
    T_(e, o),
    o
  );
}
var D_ = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function T_(e, t) {
  Object.keys(e).forEach(function (r) {
    D_[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Ao;
w_(Ri.unstable_batchedUpdates);
Ao = _a.finalizeAllImmediately;
function M_(e, t) {
  if (Wc(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !Wc(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function Wc(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Kc = Symbol("patchMixins"),
  Hv = Symbol("patchedDefinition");
function L_(e, t) {
  var r = (e[Kc] = e[Kc] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function Yc(e, t) {
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
function Jc(e, t) {
  var r = function () {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
    Yc.call.apply(Yc, [this, e, t].concat(i));
  };
  return r;
}
function N_(e, t, r) {
  var n = L_(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[Hv])) {
    var i = e[t],
      o = Wv(e, t, a ? a.enumerable : void 0, n, i);
    Object.defineProperty(e, t, o);
  }
}
function Wv(e, t, r, n, a) {
  var i,
    o = Jc(a, n);
  return (
    (i = {}),
    (i[Hv] = !0),
    (i.get = function () {
      return o;
    }),
    (i.set = function (s) {
      if (this === e) o = Jc(s, n);
      else {
        var c = Wv(this, t, r, n, s);
        Object.defineProperty(this, t, c);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = r),
    i
  );
}
var Xc = Symbol("ObserverAdministration"),
  Qc = Symbol("isMobXReactObserver");
function _s(e) {
  var t;
  return (t = e[Xc]) != null
    ? t
    : (e[Xc] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: ys(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function F_(e) {
  var t = e.prototype;
  if (e[Qc]) {
    var r = ys(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[Qc] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== _.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Zc;
    else if (t.shouldComponentUpdate !== Zc)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = ys(e);
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
        value: $_.call(this, n),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        u = _s(this);
      return (
        (u.mounted = !0),
        _a.unregister(this),
        (u.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!u.reaction || u.reactionInvalidatedBeforeMount) && u.forceUpdate(),
        i?.apply(this, arguments)
      );
    }),
    N_(t, "componentWillUnmount", function () {
      var o,
        u = _s(this);
      ((o = u.reaction) == null || o.dispose(),
        (u.reaction = null),
        (u.forceUpdate = null),
        (u.mounted = !1),
        (u.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function ys(e) {
  return e.displayName || e.name || "<component>";
}
function $_(e) {
  var t = e.bind(this),
    r = _s(this);
  function n() {
    r.reaction || ((r.reaction = z_(r)), r.mounted || _a.register(this, r, this));
    var a = void 0,
      i = void 0;
    if (
      (r.reaction.track(function () {
        try {
          i = xb(!1, t);
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
function z_(e) {
  return new Rt(e.name + ".render()", function () {
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
function Zc(e, t) {
  return this.state !== t ? !0 : !M_(this.props, e);
}
function Ui(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(_.Component, e) ||
    Object.prototype.isPrototypeOf.call(_.PureComponent, e)
      ? F_(e)
      : I_(e)
  );
}
function ms() {
  return (
    (ms = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ms.apply(null, arguments)
  );
}
function B_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var q_ = ["children"],
  el = k.createContext({});
function Kv(e) {
  var t = e.children,
    r = B_(e, q_),
    n = k.useContext(el),
    a = k.useRef(ms({}, n, r)),
    i = a.current;
  return k.createElement(el.Provider, { value: i }, t);
}
Kv.displayName = "MobXProvider";
k.version.split(".")[0];
if (!_.Component) throw new Error("mobx-react requires React to be available");
if (!se) throw new Error("mobx-react requires mobx to be available");
var U_ = Object.defineProperty,
  V_ = Object.getOwnPropertyDescriptor,
  jt = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? V_(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && U_(t, r, a), a);
  };
class gt {
  constructor() {
    ((this.isLoading = !1), Vs(this));
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
jt([se], gt.prototype, "isLoading", 2);
jt([se], gt.prototype, "plan", 2);
jt([se], gt.prototype, "planString", 2);
jt([se], gt.prototype, "slowQueries", 2);
jt([se], gt.prototype, "history", 2);
jt([et.bound], gt.prototype, "showPlan", 1);
jt([et.bound], gt.prototype, "saveSlowQuery", 1);
jt([et.bound], gt.prototype, "saveHistory", 1);
jt([et], gt.prototype, "loading", 1);
jt([et], gt.prototype, "stopLoading", 1);
const G_ = new gt();
var H_ = Object.defineProperty,
  W_ = Object.getOwnPropertyDescriptor,
  Ks = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? W_(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && H_(t, r, a), a);
  };
class Vi {
  constructor() {
    ((this.state = "ROOT"), (this.lastState = "ROOT"), Vs(this));
  }
  saveState(t) {
    ((this.lastState = this.state), (this.state = t));
  }
}
Ks([se], Vi.prototype, "state", 2);
Ks([se], Vi.prototype, "lastState", 2);
Ks([et.bound], Vi.prototype, "saveState", 1);
const Ys = new Vi();
class K_ {
  constructor() {
    ((this.usersStore = G_), (this.stateStore = Ys));
  }
}
const Yv = new K_(),
  Y_ = _.createContext(Yv),
  Gi = () => _.useContext(Y_);
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
function J_(e, t) {
  if (je(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (je(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Jv(e) {
  var t = J_(e, "string");
  return je(t) == "symbol" ? t : t + "";
}
function tl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Jv(n.key), n));
  }
}
function ve(e, t, r) {
  return (
    t && tl(e.prototype, t),
    r && tl(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function X_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Be(e, t) {
  if (t && (je(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return X_(e);
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
function ya(e, t) {
  return (
    (ya = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    ya(e, t)
  );
}
function qe(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ya(e, t));
}
function x(e, t, r) {
  return (
    (t = Jv(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function we() {}
function Q_(e) {
  if (Array.isArray(e)) return e;
}
function Z_(e, t) {
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
function ws(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Xv(e, t) {
  if (e) {
    if (typeof e == "string") return ws(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? ws(e, t)
          : void 0
    );
  }
}
function ey() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(e, t) {
  return Q_(e) || Z_(e, t) || Xv(e, t) || ey();
}
var Qv = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  ty = function (t) {
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
  mi = function (t, r) {
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
  ry = function (t, r, n) {
    return t ? { width: r } : {};
  },
  rl = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  ny = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      i = t.destination,
      o = t.sourceIndex;
    if (!i) return r;
    var u = rl(o, n, a),
      s = rl(i.index, n, a),
      c = r.slice(),
      l = c.splice(u, 1),
      d = K(l, 1),
      f = d[0];
    return (c.splice(s, 0, f), c);
  };
const ay = "modulepreload",
  iy = function (e, t) {
    return new URL(e, t).href;
  },
  nl = {},
  oy = function (t, r, n) {
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
          if (((l = iy(l, n)), l in nl)) return;
          nl[l] = !0;
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
            ((h.rel = d ? "stylesheet" : ay),
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
function sy(e, t) {
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
    a = sy(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      ((r = i[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function al(e, t) {
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
function jo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? al(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : al(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var uy = (function () {
  function e(t) {
    var r = this;
    (fe(this, e),
      x(this, "_isAnalyticsEvent", !0),
      x(this, "clone", function () {
        var n = jo({}, r.payload);
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
          je(r) === "object" && (this.payload = jo(jo({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function cy(e) {
  if (Array.isArray(e)) return ws(e);
}
function ly(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function dy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Te(e) {
  return cy(e) || ly(e) || Xv(e) || dy();
}
function fy(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Y(e)) !== null; );
  return e;
}
function wi() {
  return (
    (wi =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = fy(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    wi.apply(null, arguments)
  );
}
function vy(e, t, r) {
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
function py(e, t, r, n) {
  var a = wi(Y(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var hy = (function (e) {
    function t(r) {
      var n;
      return (
        fe(this, t),
        (n = vy(this, t, [r])),
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
            return this.hasFired ? this : py(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(uy),
  gy = _.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  by = function () {
    return _.useContext(gy);
  },
  Oi = function (t) {
    var r = _.useRef(t);
    return ((r.current = t), r);
  };
function _y(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function yy(e, t) {
  var r = _.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = _.useRef(!0),
    a = _.useRef(r),
    i = n.current || !!(t && a.current.inputs && _y(t, a.current.inputs)),
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
function my(e, t) {
  return yy(function () {
    return e;
  }, t);
}
function ep() {
  var e = by(),
    t = my(
      function (r) {
        return new hy({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function il(e, t) {
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
function wy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? il(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : il(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ma(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    i = e.packageName,
    o = e.packageVersion,
    u = e.analyticsData,
    s = ep(),
    c = s.createAnalyticsEvent,
    l = Oi(u),
    d = Oi(t),
    f = _.useCallback(
      function (h) {
        var v = c({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: i, packageVersion: o },
          }),
          p = wy({ componentName: n, packageName: i, packageVersion: o }, l.current);
        v.context.push(p);
        var g = v.clone();
        (g && g.fire("atlaskit"), d.current(h, v));
      },
      [r, n, a, i, o, c, l, d],
    );
  return f;
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
function Oy(e) {
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
function sl(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    i = e.packageVersion,
    o = e.analyticsData,
    u = ep(),
    s = u.createAnalyticsEvent,
    c = Oi(o),
    l = Oi(t),
    d = _.useCallback(
      function () {
        var f = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: i },
          }),
          h = Oy({ componentName: n, packageName: a, packageVersion: i }, c.current);
        f.context.push(h);
        var v = f.clone();
        (v && v.fire("atlaskit"), l.current(f));
      },
      [r, n, a, i, s, c, l],
    );
  return d;
}
var yr = "ASC",
  ki = "DESC",
  ky = "small",
  Si = "large",
  tp = 0.22;
const Sy = 5;
function R(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const i of a) {
      const o = i.startsWith("_") ? i.slice(0, Sy) : i;
      t[o] = i;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function rp(e, t, r) {
  return e ?? "var(--c-, )";
}
var Ey = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  xy = _.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      i = e.testId,
      o = e.isLoading,
      u = ae(e, Ey);
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
  Cy = function (t) {
    var r = t.children;
    return _.createElement(
      "caption",
      { className: R(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  Ry = function (t) {
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
  Py = function (t) {
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
  Ay = function (t) {
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
  jy = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
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
function cl(e) {
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
function Iy(e, t, r) {
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
var ll = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var i;
      if (r.cells[a] && ((i = r.cells[a]) === null || i === void 0 ? void 0 : i.key) === n) {
        var o;
        return (o = t[a]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  Dy = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var i = a === yr ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      u = Array.from(r);
    return u.sort(function (s, c) {
      var l = ll(s.cells, t, n),
        d = ll(c.cells, t, n);
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
function Ty(e) {
  var t = (function (r) {
    function n() {
      var a;
      fe(this, n);
      for (var i = arguments.length, o = new Array(i), u = 0; u < i; u++) o[u] = arguments[u];
      return ((a = Iy(this, n, [].concat(o))), x(a, "state", { pageRows: [] }), a);
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
                s = ae(i, jy);
              return k.createElement(
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
              mi(c, s);
              var v, p;
              return (
                h ? ((v = u), (p = u)) : ((v = Dy(s, u, c, l) || []), (p = Qv(v, d, f))),
                cl(cl({}, o), {}, { pageRows: p })
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
var My = "--local-dynamic-table-width",
  ap = function (t) {
    var r = t.width;
    return typeof r < "u" ? x({}, My, "".concat(r, "%")) : void 0;
  },
  Ly = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  Ny = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      i = t.innerRef,
      o = ae(t, Ly);
    return _.createElement(
      "td",
      te(
        {
          style: ap({ width: r }),
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
  Fy = ["isHighlighted", "children", "style", "testId", "className"],
  $y = _.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      i = e.testId,
      o = e.className,
      u = ae(e, Fy);
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
  zy = ["cells"],
  By = ["content", "testId"],
  qy = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      i = t.isFixedSize,
      o = t.isHighlighted,
      u = r.cells,
      s = ae(r, zy);
    return k.createElement(
      $y,
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
          h = ae(c, By),
          v = (n || { cells: [] }).cells[l] || {},
          p = v.shouldTruncate,
          g = v.width;
        return k.createElement(
          Ny,
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
function Uy(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, ip() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function ip() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ip = function () {
    return !!e;
  })();
}
var Vy = (function (e) {
    function t() {
      return (fe(this, t), Uy(this, t, arguments));
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
            return k.createElement(
              "tbody",
              { "data-testid": s && "".concat(s, "--body"), ref: c },
              a.map(function (l, d) {
                return k.createElement(qy, {
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
  })(k.Component),
  Gy = Ty(
    k.forwardRef(function (e, t) {
      return k.createElement(Vy, te({}, e, { forwardedRef: t }));
    }),
  );
function Hy(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, op() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function op() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (op = function () {
    return !!e;
  })();
}
var Wy = (function (e) {
  function t(r) {
    var n;
    return (fe(this, t), (n = Hy(this, t, [r])), (n.state = { hasError: !1 }), n);
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
})(k.Component);
const Js = _.createContext(null);
var dl = "#FF5630",
  fl = "#DE350B",
  Ar = "#BF2600",
  vl = "#FFC400",
  pl = "#FFAB00",
  jr = "#FF991F",
  Ky = "#DEEBFF",
  Ga = "#B3D4FF",
  hl = "#4C9AFF",
  gl = "#2684FF",
  bl = "#0065FF",
  Ir = "#0052CC",
  _l = "#0747A6",
  Jt = "#FFFFFF",
  xe = "#F4F5F7",
  cr = "#A5ADBA",
  Yy = "#8993A4",
  Jy = "#6B778C",
  Xy = "#505F79",
  wa = "#42526E",
  We = "#253858",
  Dr = "#172B4D",
  Fn = "rgba(9, 30, 66, 0.04)",
  yl = "rgba(9, 30, 66, 0.08)",
  ut = "#9FB0CC",
  Qy = "#8C9CB8",
  Io = "#67758F",
  $n = "#3B475C",
  ml = "#313D52",
  zn = "#1B2638",
  Tr = "#0D1424",
  Zy = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function em(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(wa, ")")
    : "var(--ds-icon-inverse, ".concat(Jt, ")");
}
var Ha = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  tm = typeof window > "u" ? _.useEffect : _.useLayoutEffect,
  sp = k.memo(
    k.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "inherit" : n,
        i = t.delay,
        o = i === void 0 ? 0 : i,
        u = t.interactionName,
        s = t.label,
        c = t.size,
        l = c === void 0 ? "medium" : c,
        d = t.testId,
        f = typeof l == "number" ? l : Zy[l],
        h = "".concat(o, "ms"),
        v = em(a),
        p = _.useContext(Js);
      return (
        tm(
          function () {
            if (p != null) return p.hold(u);
          },
          [p, u],
        ),
        k.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: h, width: f, height: f },
            className: R([Ha.wrapperStyles, Ha.rotateStyles]),
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
              "aria-label": s || void 0,
              style: { animationDelay: h },
              role: s ? "img" : "none",
              className: R([Ha.loadInStyles]),
            },
            k.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: v },
              className: R([Ha.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function wl(e, t) {
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
function Ol(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var kl = "--contents-opacity",
  rm = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: R(["_kqswh2mm"]) },
      r,
    );
  },
  nm = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: R(["_tzy47hfw _lcxvglyw"]),
        style: Ol(Ol({}, x({}, kl, n)), {}, { "--_cnddr8": rp("var(".concat(kl, ")")) }),
      },
      r,
    );
  },
  am = function (t) {
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
function im(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, up() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function up() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (up = function () {
    return !!e;
  })();
}
var cp = (function (e) {
  function t() {
    return (fe(this, t), im(this, t, arguments));
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
          return k.createElement(
            rm,
            { testId: s },
            i ? k.createElement(nm, { contentsOpacity: u, testId: s }, a) : a,
            i &&
              k.createElement(
                am,
                { testId: s },
                k.createElement(sp, {
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
})(k.Component);
x(cp, "defaultProps", {
  isLoading: !0,
  spinnerSize: Si,
  contentsOpacity: tp,
  loadingLabel: "Loading table",
});
var om = ["children", "testId"],
  sm = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = ae(e, om);
    return _.createElement(
      "div",
      te({}, a, { "data-testid": n, ref: t, className: R(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  um = function (t) {
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
  cm = _.forwardRef(function (e, t) {
    var r = e.children;
    return _.createElement("div", { ref: t, className: R(["_kqswh2mm _152tidpf"]) }, r);
  });
function lm(e, t, r) {
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
var dp = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = lm(this, t, [].concat(a))),
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
                  var O = h / 2 - l / 2,
                    y = O < l ? O - (l - O) : O;
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
          return k.createElement(
            sm,
            { testId: u && "".concat(u, "--loading--container--advanced"), ref: this.containerRef },
            a,
            i &&
              k.createElement(
                um,
                { testId: u },
                k.createElement(
                  cm,
                  { ref: this.spinnerRef },
                  k.createElement(sp, {
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
})(k.Component);
x(dp, "defaultProps", {
  isLoading: !0,
  spinnerSize: Si,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(tp), ")"),
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
function Sl(e, t, r, n, a, i, o) {
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
        Sl(i, n, a, o, u, "next", s);
      }
      function u(s) {
        Sl(i, n, a, o, u, "throw", s);
      }
      o(void 0);
    });
  };
}
var Do = { exports: {} },
  To = { exports: {} },
  El;
function fp() {
  return (
    El ||
      ((El = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(To)),
    To.exports
  );
}
var Mo = { exports: {} },
  Lo = { exports: {} },
  xl;
function vp() {
  return (
    xl ||
      ((xl = 1),
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
      })(Lo)),
    Lo.exports
  );
}
var Cl;
function pp() {
  return (
    Cl ||
      ((Cl = 1),
      (function (e) {
        var t = vp();
        function r() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var n,
            a,
            i = typeof Symbol == "function" ? Symbol : {},
            o = i.iterator || "@@iterator",
            u = i.toStringTag || "@@toStringTag";
          function s(g, b, m, w) {
            var O = b && b.prototype instanceof l ? b : l,
              y = Object.create(O.prototype);
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
                      d: function (X, F) {
                        return ((T = X), (P = 0), (M = n), (J.n = F), c);
                      },
                    };
                  function G(U, X) {
                    for (P = U, M = X, a = 0; !V && B && !F && a < z.length; a++) {
                      var F,
                        j = z[a],
                        be = J.p,
                        oe = j[2];
                      U > 3
                        ? (F = oe === X) &&
                          ((M = j[(P = j[4]) ? 5 : ((P = 3), 3)]), (j[4] = j[5] = n))
                        : j[0] <= be &&
                          ((F = U < 2 && be < j[1])
                            ? ((P = 0), (J.v = X), (J.n = j[1]))
                            : be < oe &&
                              (F = U < 3 || j[0] > X || X > oe) &&
                              ((j[4] = U), (j[5] = X), (J.n = oe), (P = 0)));
                    }
                    if (F || U > 1) return c;
                    throw ((V = !0), X);
                  }
                  return function (U, X, F) {
                    if (B > 1) throw TypeError("Generator is already running");
                    for (V && X === 1 && G(X, F), P = X, M = F; (a = P < 2 ? n : M) || !V; ) {
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
      })(Mo)),
    Mo.exports
  );
}
var No = { exports: {} },
  Fo = { exports: {} },
  $o = { exports: {} },
  Rl;
function hp() {
  return (
    Rl ||
      ((Rl = 1),
      (function (e) {
        var t = fp(),
          r = vp();
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
      })($o)),
    $o.exports
  );
}
var Pl;
function gp() {
  return (
    Pl ||
      ((Pl = 1),
      (function (e) {
        var t = pp(),
          r = hp();
        function n(a, i, o, u, s) {
          return new r(t().w(a, i, o, u), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Fo)),
    Fo.exports
  );
}
var Al;
function fm() {
  return (
    Al ||
      ((Al = 1),
      (function (e) {
        var t = gp();
        function r(n, a, i, o, u) {
          var s = t(n, a, i, o, u);
          return s.next().then(function (c) {
            return c.done ? c.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(No)),
    No.exports
  );
}
var zo = { exports: {} },
  jl;
function vm() {
  return (
    jl ||
      ((jl = 1),
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
      })(zo)),
    zo.exports
  );
}
var Bo = { exports: {} },
  qo = { exports: {} },
  Il;
function pm() {
  return (
    Il ||
      ((Il = 1),
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
      })(qo)),
    qo.exports
  );
}
var Dl;
function hm() {
  return (
    Dl ||
      ((Dl = 1),
      (function (e) {
        var t = pm().default;
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
      })(Bo)),
    Bo.exports
  );
}
var Tl;
function gm() {
  return (
    Tl ||
      ((Tl = 1),
      (function (e) {
        var t = fp(),
          r = pp(),
          n = fm(),
          a = gp(),
          i = hp(),
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
                  abrupt: function (O, y) {
                    return b(m.a, h[O], y);
                  },
                  delegateYield: function (O, y, S) {
                    return ((g.resultName = y), b(m.d, u(O), S));
                  },
                  finish: function (O) {
                    return b(m.f, O);
                  },
                }),
                (b = function (O, y, S) {
                  ((m.p = g.prev), (m.n = g.next));
                  try {
                    return O(y, S);
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
                wrap: function (b, m, w, O) {
                  return c.w(v(b), m, w, O && O.reverse());
                },
                isGeneratorFunction: f,
                mark: c.m,
                awrap: function (b, m) {
                  return new t(b, m);
                },
                AsyncIterator: i,
                async: function (b, m, w, O, y) {
                  return (f(m) ? a : n)(v(b), m, w, O, y);
                },
                keys: o,
                values: u,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Do)),
    Do.exports
  );
}
var Uo, Ml;
function bm() {
  if (Ml) return Uo;
  Ml = 1;
  var e = gm()();
  Uo = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return Uo;
}
var _m = bm();
const $ = rr(_m);
var lr = {},
  Mr = {},
  Wa = {},
  Ll;
function ym() {
  if (Ll) return Wa;
  ((Ll = 1), Object.defineProperty(Wa, "__esModule", { value: !0 }));
  const e = er();
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
      var i, o;
      if (!n) return !1;
      const u = (0, e._typedJsonParse)(n.data, "has_updates", "EvaluationResponse");
      return u == null
        ? !1
        : ((this._source = n.source),
          u?.has_updates !== !0 ||
            ((i = u.time) !== null && i !== void 0 ? i : 0) < this._lcut ||
            ((this._rawValues = n.data),
            (this._lcut = u.time),
            (this._receivedAt = n.receivedAt),
            (this._values = u),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(n.source, u)),
            n.source && u.user && this._setWarningState(a, u),
            e.SDKFlags.setFlags(this._sdkKey, (o = u.sdk_flags) !== null && o !== void 0 ? o : {})),
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
      const u = e.StableID.get(this._sdkKey);
      if (
        ((i = n.customIDs) === null || i === void 0 ? void 0 : i.stableID) !== u &&
        ((!((o = n.customIDs) === null || o === void 0) && o.stableID) || u)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in a) {
        const s = a.user,
          c = Object.assign(Object.assign({}, n), {
            analyticsOnlyMetadata: void 0,
            privateAttributes: void 0,
          });
        (0, e._getFullUserHash)(c) !== (0, e._getFullUserHash)(s) &&
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
  };
  return ((Wa.default = t), Wa);
}
var Lr = {},
  Un = {},
  Nl;
function mm() {
  if (Nl) return Un;
  ((Nl = 1),
    Object.defineProperty(Un, "__esModule", { value: !0 }),
    (Un._resolveDeltasResponse = void 0));
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
  Un._resolveDeltasResponse = r;
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
  return Un;
}
var Fl;
function bp() {
  if (Fl) return Lr;
  Fl = 1;
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
  const t = er(),
    r = mm();
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
var Vn = {},
  $l;
function wm() {
  if ($l) return Vn;
  (($l = 1),
    Object.defineProperty(Vn, "__esModule", { value: !0 }),
    (Vn._makeParamStoreGetter = void 0));
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
  return ((Vn._makeParamStoreGetter = c), Vn);
}
var dr = {},
  zl;
function Om() {
  if (zl) return dr;
  zl = 1;
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
  const t = er(),
    r = bp();
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
var Bl;
function km() {
  if (Bl) return Mr;
  Bl = 1;
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
  const t = er(),
    r = ym(),
    n = bp(),
    a = wm(),
    i = Om();
  let o = class Os extends t.StatsigClientBase {
    static instance(s) {
      const c = (0, t._getStatsigGlobal)().instance(s);
      return c instanceof Os
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Os(s ?? "", {}));
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
var ql;
function Sm() {
  return (
    ql ||
      ((ql = 1),
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
        const n = er(),
          a = km();
        ((e.StatsigClient = a.default), r(er(), e));
        const i = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = i;
      })(lr)),
    lr
  );
}
var ct = Sm(),
  Vo = { exports: {} },
  Ul;
function Em() {
  return (
    Ul ||
      ((Ul = 1),
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
              var O = g.length,
                y;
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
      })(Vo)),
    Vo.exports
  );
}
var xm = Em();
const Cm = rr(xm);
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
function Kt(e) {
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
var Ka = "@all-features",
  Rm = (function () {
    function e() {
      (fe(this, e), x(this, "eventToValue", new Map()), (this.emitter = new Cm()));
    }
    return ve(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, i) {
          var o = this,
            u = a(r, Kt(Kt({}, i), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, u);
          var s = function () {
            var l = a(r, Kt(Kt({}, i), {}, { fireGateExposure: !1 })),
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
            l = o(r, n, a, Kt(Kt({}, u), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(i) === void 0 && this.eventToValue.set(i, l);
          var d = function () {
            var h = o(r, n, a, Kt(Kt({}, u), {}, { fireExperimentExposure: !1 })),
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
            this.emitter.on(Ka, r),
            function () {
              n.emitter.off(Ka, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(Ka),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== Ka;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  Pm = "fedramp-moderate";
function Am() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === Pm;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Xs = (function (e) {
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
  ia = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  Oa = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  jm = [
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
function Gl(e, t) {
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
function ks(e) {
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
var Ya = function (t) {
    return ks({ perimeter: Am() ? Oa.FEDRAMP_MODERATE : Oa.COMMERCIAL }, t);
  },
  Gn = function (t, r) {
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
  Hl = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  Im = function (t) {
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
    var f = ae(t, jm);
    return ks(
      ks({}, f),
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
  Dm = Object.entries(Xs).map(function (e) {
    var t = K(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  _p = function (t) {
    var r,
      n,
      a,
      i = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = Dm.find(function (o) {
            var u = K(o, 1),
              s = u[0];
            return i.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Xs.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  Ss = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  Wl = (function () {
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
                _p(r.details),
                Ss(
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
  Kl = (function () {
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
                _p(r.details),
                function (l, d) {
                  return r.get(d);
                },
                Ss(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                Ss(
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
function Tm(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function yp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (yp = function () {
    return !!e;
  })();
}
function Mm(e, t, r) {
  if (yp()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && ya(a, r.prototype), a);
}
function Es(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Es = function (n) {
      if (n === null || !Tm(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return Mm(n, arguments, Y(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        ya(a, n)
      );
    }),
    Es(e)
  );
}
function Lm(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, mp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var Yl = (function (e) {
  function t(r) {
    return (fe(this, t), Lm(this, t, [r]));
  }
  return (qe(t, e), ve(t));
})(Es(Error));
function Jl(e, t) {
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
function Nm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Jl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Fm = 5e3,
  $m = "https://api.atlassian.com/flags",
  zm = "https://api.stg.atlassian.com/flags",
  Bm = "https://api.dev.atlassian.com/flags",
  qm = "https://api.stg.atlassian-us-gov-mod.com/flags",
  Um = "https://api.atlassian-us-gov-mod.com/flags",
  Vm = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  Gm = "oasis-stg.com/flags",
  Hm = "atlassian-isolated.net/flags",
  Wm = "/gateway/api/flags",
  Go = (function () {
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
                        new Yl(
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
                      throw new Yl("Unexpected 204 response");
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
          if (n) return Wm;
          if (a === Oa.FEDRAMP_MODERATE)
            switch (r) {
              case ia.Production:
                return Um;
              case ia.Staging:
                return qm;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === Oa.COMMERCIAL)
            switch (r) {
              case ia.Development:
                return Bm;
              case ia.Staging:
                var o = this.getApiUrl(i);
                return o !== null ? o : zm;
              default:
                var u = this.getApiUrl(i);
                return u !== null ? u : $m;
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
                          (c = o.fetchTimeoutMs || Fm),
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
                            Nm(
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
          if (n === void 0) return r ? Vm.replace("%s", r) : null;
          var a = n.protocol,
            i = n.hostname,
            o = i.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(a, "//api.").concat(o[1], ".").concat(Gm);
          var u = i.match(/([^.]+)\.atlassian-isolated\.net$/);
          return u ? "".concat(a, "//api.").concat(u[1], ".").concat(Hm) : null;
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
function Xl(e, t) {
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
function Hn(e) {
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
function Km(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, wp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
function Ym(e, t, r, n) {
  var a = wi(Y(e.prototype), t, r);
  return typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var Jm = (function (e) {
  function t() {
    var r;
    return (
      fe(this, t),
      (r = Km(this, t, ["NoFetchDataAdapter", "nofetch"])),
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
                            Hn(
                              Hn({}, this.bootstrapResult),
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
            Hn(Hn({}, this.bootstrapResult), {}, { fullUserHash: ct._getFullUserHash(n) })
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
          Ym(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = Hn({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(ct.DataAdapterCore);
function Ql(e, t) {
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
function Xm(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Qm(e)) || t) {
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
function Qm(e, t) {
  if (e) {
    if (typeof e == "string") return Zl(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Zl(e, t)
          : void 0
    );
  }
}
function Zl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Ho = "LocalOverride:Recognized",
  Zm = "STATSIG_OVERRIDES",
  ed = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Nr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  Ke = function (t, r) {
    return r + ":" + t;
  },
  e0 = (function () {
    function e(t) {
      (fe(this, e),
        (this._overrides = Nr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return ve(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Nr();
          } catch {
            return Nr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Nr(), n = arguments.length, a = new Array(n), i = 0; i < n; i++)
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
                O = m[1];
              r.configs[w] = O;
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
            this.parseStoredOverrides(ed),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(ed);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var i = a[n],
              o = new Set(Object.keys(i)),
              u = Xm(o),
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
          var n = Ce(Ce({}, Nr()), r);
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
            : Ce(Ce({}, r), {}, { value: i, details: Ce(Ce({}, r.details), {}, { reason: Ho }) });
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
          this._overrides = Nr();
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
                  details: Ce(Ce({}, r.details), {}, { reason: Ho }),
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
                  details: Ce(Ce({}, r.details), {}, { reason: Ho }),
                },
              );
        },
      },
    ]);
  })(),
  t0 = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
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
function Yt(e) {
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
var rd = "client-default-key",
  r0 = "https://xp.atlassian.com/v1/rgstr",
  n0 = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? Zm : n,
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
        x(this, "subscriptions", new Rm()),
        x(this, "dataAdapter", new Jm()),
        x(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = i || new e0(a)));
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
                        if (((s = Ya(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          Gn(s, this.initOptions) ||
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
                        if (((c = Ya(a)), !this.initPromise)) {
                          f.next = 4;
                          break;
                        }
                        return (
                          Gn(c, this.initOptions) ||
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
                var l = Yt(
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
                u.initOptions.environment !== ia.Production &&
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
                          (c = Ya(a)),
                          !this.initPromise)
                        ) {
                          h.next = 5;
                          break;
                        }
                        return (
                          Gn(c, this.initOptions) ||
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
                          (u = Ya(a)),
                          (s = function () {
                            return Go.fetchExperimentValues(u, i, o).then(function (f) {
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
            return Wl.fromExperiment(
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
              new Wl(r, {}, "", { time: Date.now(), reason: Xs.Error })
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
          return Gn(this.currentIdentifiers, r) && Gn(this.currentAttributes, n);
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
                          (u = Yt({}, a)),
                          (g.prev = 1),
                          (l = Go.fetchClientSdk(a).then(function (b) {
                            return (u.sdkKey = b.clientSdkKey);
                          })),
                          (d = Go.fetchExperimentValues(a, i, o)),
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
                          (s = Yt(Yt({}, a), {}, { disableCurrentPageLogging: !0 })),
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
                          (c = Im(a)),
                          c.sdkKey || (c.sdkKey = rd),
                          ((u = c.networkConfig) !== null && u !== void 0 && u.logEventUrl) ||
                            (c.networkConfig = Yt(
                              Yt({}, c.networkConfig),
                              {},
                              { logEventUrl: r0 },
                            )),
                          c.perimeter === Oa.FEDRAMP_MODERATE && (c.disableLogging = !0),
                          (l = c.sdkKey),
                          (d = c.environment),
                          c.updateUserCompletionCallback,
                          c.perimeter,
                          (f = ae(c, t0)),
                          (this.user = Hl(i, o)),
                          (h = Yt(
                            Yt({}, f),
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
                          (this.statsigClient = new ct.StatsigClient(rd, this.user, h)),
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
                        ((c = b.sent), (l = Hl(i, c.customAttributesFromFetch)), (b.next = 13));
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
            return Kl.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !i }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Kl.fromLayer(ct._makeLayer(r, { reason: "Error" }, null))
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
x(q, "client", new n0());
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
var xs = q;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = q;
  else {
    var Ja, Wo;
    xs = window.__FEATUREGATES_JS__;
    var nd =
      ((Ja = xs) === null || Ja === void 0 || (Wo = Ja.getPackageVersion) === null || Wo === void 0
        ? void 0
        : Wo.call(Ja)) || "4.10.0 or earlier";
    if (nd !== Gr) {
      var a0 = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(nd, " when module version ")
        .concat(Gr, " was loading.");
      console.warn(a0);
    }
  }
var Fr,
  $r,
  i0 =
    (globalThis == null ||
    (Fr = globalThis.process) === null ||
    Fr === void 0 ||
    (Fr = Fr.env) === null ||
    Fr === void 0
      ? void 0
      : Fr.JEST_WORKER_ID) !== void 0,
  o0 =
    !i0 &&
    (globalThis == null ||
    ($r = globalThis.process) === null ||
    $r === void 0 ||
    ($r = $r.env) === null ||
    $r === void 0
      ? void 0
      : $r.NODE_ENV) !== "production",
  s0 = function () {
    var t;
    o0 && (t = console).debug.apply(t, arguments);
  },
  Qs = {},
  u0 = "@atlaskit/platform-feature-flags",
  la = "__PLATFORM_FEATURE_FLAGS__",
  Op = typeof process < "u" && typeof Qs < "u",
  c0 = Op ? Qs.ENABLE_PLATFORM_FF === "true" : !1,
  l0 = Op ? Qs.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  d0 = c0 || l0,
  f0 = { booleanResolver: void 0 },
  da = typeof window < "u" ? window : globalThis;
da[la] = da[la] || f0;
function v0(e) {
  if (d0)
    return (
      s0(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        u0,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = da[la]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = da[la]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return xs.checkGate(e);
    var a = (n = da[la]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function Ne(e) {
  return v0(e);
}
var p0 = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  h0 = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  g0 = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  b0 = { core: 16, utility: 12 },
  _0 = {
    core: {
      medium: { none: 0, compact: 4, spacious: 4 },
      small: { none: 0, compact: 2.66, spacious: 8 },
    },
    utility: {
      medium: { none: 0, compact: 2, spacious: 6 },
      small: { none: 0, compact: 2, spacious: 6 },
    },
  },
  ad = _.memo(function (t) {
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
    if (d && !Ne("platform-visual-refresh-icons"))
      return _.createElement(d, {
        primaryColor: s ?? i,
        secondaryColor: c,
        size: l,
        label: u,
        testId: o,
        UNSAFE_margin: v,
      });
    var w = (r = t.type) !== null && r !== void 0 ? r : "core",
      O = "medium";
    if ("size" in t && t.size !== void 0) {
      if (typeof t.size == "string") O = t.size === "small" || t.size === "medium" ? t.size : O;
      else if (b) {
        var y = t.size(b);
        O = y === "small" || y === "medium" ? y : O;
      }
    }
    var S = b0[w],
      C = _0[w][O][g],
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
          (w === "utility" || O === "small") && "_vwz4utpp",
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
          h ? "_1bsb1kw7 _4t3i1kw7" : w === "utility" ? g0[g] : O === "small" ? h0[g] : p0[g],
        ]),
      }),
    );
  });
const y0 = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: ad, default: ad }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Hi = Fs(y0);
var id;
function m0() {
  if (id) return qn;
  ((id = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.default = void 0));
  var e = r(pt()),
    t = r(Hi);
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
var Wn = {};
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
function sd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? od(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : od(Object(r)).forEach(function (n) {
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
  ud = _.memo(function (t) {
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
          style: sd(
            sd({}, p),
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
    Object.defineProperty({ __proto__: null, Icon: ud, default: ud }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  kp = Fs(O0);
var cd;
function k0() {
  if (cd) return Wn;
  ((cd = 1), Object.defineProperty(Wn, "__esModule", { value: !0 }), (Wn.default = void 0));
  var e = r(pt()),
    t = kp;
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
  return ((n.displayName = "ChevronLeftLargeIcon"), (Wn.default = n), Wn);
}
var ld;
function S0() {
  if (ld) return Bn;
  ((ld = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.default = void 0));
  var e = n(pt()),
    t = n(m0()),
    r = n(k0());
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
var E0 = S0();
const x0 = rr(E0);
var Kn = {},
  Yn = {},
  dd;
function C0() {
  if (dd) return Yn;
  ((dd = 1), Object.defineProperty(Yn, "__esModule", { value: !0 }), (Yn.default = void 0));
  var e = r(pt()),
    t = r(Hi);
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
  return ((n.displayName = "ChevronRightIcon"), (Yn.default = n), Yn);
}
var Jn = {},
  fd;
function R0() {
  if (fd) return Jn;
  ((fd = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.default = void 0));
  var e = r(pt()),
    t = kp;
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
  return ((n.displayName = "ChevronRightLargeIcon"), (Jn.default = n), Jn);
}
var vd;
function P0() {
  if (vd) return Kn;
  ((vd = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.default = void 0));
  var e = n(pt()),
    t = n(C0()),
    r = n(R0());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronRightIcon", LEGACY_fallbackIcon: r.default }, i),
    );
  return ((a.displayName = "ChevronRightIconMigration"), (Kn.default = a), Kn);
}
var A0 = P0();
const j0 = rr(A0);
var Zs = _.createContext("elevation.surface"),
  I0 = function () {
    return _.useContext(Zs);
  };
Zs.displayName = "SurfaceProvider";
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
  Sp = {
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
  N0 = {
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
  F0 = {
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
  $0 = {
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
  Wi = _.forwardRef(function (e, t) {
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
      O = e.testId,
      y = e.xcss,
      S = ae(e, D0);
    S.className;
    var C = ae(S, T0),
      I = _.createElement(
        n,
        te(
          {
            style: w,
            ref: t,
            className: R([
              "_19itglyw _vchhusvi _r06hglyw",
              i && M0[i],
              i && z0(i) && Sp[i],
              l && L0[l],
              f && N0[f],
              g && F0[g],
              m && $0[m],
              y,
            ]),
          },
          C,
          { "data-testid": O },
        ),
        a,
      );
    return i ? _.createElement(Zs.Provider, { value: i }, I) : I;
  });
function z0(e) {
  return e in Sp;
}
const Ko = () =>
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
  Ep = (...e) => R(e);
function B0() {
  return {
    css() {
      throw Ko();
    },
    cssMap() {
      throw Ko();
    },
    cx: Ep,
    XCSSProp() {
      throw Ko();
    },
  };
}
var q0 = B0(),
  U0 = q0.cx,
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
  pd = {
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
  hd = {
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
  Ei = _.memo(
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
        p = ae(e, V0);
      return _.createElement(
        n,
        te({}, p, {
          role: a,
          className: R([
            Y0.root,
            u && hd[u],
            s && hd[s],
            u && pd[u],
            c && pd[c],
            i && K0[i],
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
Ei.displayName = "Flex";
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
  Cs = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  X0 = function (t) {
    var r = t.children;
    return _.createElement("span", { className: R([Cs.separator]) }, r);
  },
  ni = _.memo(
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
        b = ae(e, J0),
        m = typeof f == "string" ? _.createElement(X0, null, f) : f,
        w = m
          ? _.Children.toArray(g)
              .filter(Boolean)
              .map(function (O, y) {
                return _.createElement(_.Fragment, { key: y }, f && y > 0 ? m : null, O);
              })
          : g;
      return _.createElement(
        Ei,
        te({}, b, {
          as: r,
          role: p,
          alignItems: i,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: u ? "wrap" : void 0,
          xcss: U0(c === "hug" && Cs.hug, c === "fill" && Cs.fill, h),
          testId: v,
          ref: t,
        }),
        w,
      );
    }),
  );
ni.displayName = "Inline";
var Q0 = "Invariant failed";
function Z0(e, t) {
  if (!e) throw new Error(Q0);
}
var xp = _.createContext(!1),
  ew = function () {
    return _.useContext(xp);
  },
  tw = xp.Provider,
  rw = ["span", "p", "strong", "em"],
  nw = function (t, r) {
    var n = I0();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return gd.hasOwnProperty(n) ? gd[n] : "color.text";
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
  aw = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  iw = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  ow = {
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
  gd = {
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
  sw = _.forwardRef(function (e, t) {
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
    Z0(rw.includes(n));
    var h = ew(),
      v = nw(a, h);
    !s && !h && (s = "medium");
    var p = _.createElement(
      n,
      {
        id: u,
        className: R([
          zr.root,
          s && aw[s],
          v && ow[v],
          l && zr.truncation,
          l === 1 && zr.breakAll,
          i && zr["textAlign.".concat(i)],
          c && iw[c],
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
    return h ? p : _.createElement(tw, { value: !0 }, p);
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
  dw = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      i = e.isInset,
      o = e.testId,
      u = e.style,
      s = e.xcss,
      c = ae(e, cw);
    c.className;
    var l = ae(c, lw);
    return _.createElement(
      n,
      te({}, l, {
        ref: t,
        className: R([
          "_mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          i && "_1ah31gjf _2mwq1gjf",
          Ne("platform_dst_compiled_primitives_outline_reset") && "_ymio1r31 _ypr0glyw _zcxs1o36",
          s,
        ]),
        style: u,
        "data-testid": o,
      }),
      a,
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
  pw = _.forwardRef(function (e, t) {
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
      p = ae(e, fw),
      g = _.useContext(Js),
      b = _.useCallback(
        function (O, y) {
          (g && g.tracePress(s, O.timeStamp), u(O, y));
        },
        [u, g, s],
      ),
      m = ma({
        fn: b,
        action: "clicked",
        componentName: c || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    p.className;
    var w = ae(p, vw);
    return _.createElement(
      dw,
      te({ as: "button", tabIndex: v ?? (uw() && !n ? 0 : void 0), style: d }, w, {
        type: i,
        onClick: m,
        disabled: n,
        xcss: Ep(bd.root, n && bd.disabled, h),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  Yo = {},
  Xn = {},
  _d;
function Cp() {
  if (_d) return Xn;
  ((_d = 1), Object.defineProperty(Xn, "__esModule", { value: !0 }), (Xn.bind = void 0));
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
  return ((Xn.bind = e), Xn);
}
var fr = {},
  yd;
function hw() {
  if (yd) return fr;
  yd = 1;
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
  var t = Cp();
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
var md;
function gw() {
  return (
    md ||
      ((md = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = Cp();
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
      })(Yo)),
    Yo
  );
}
var Ki = gw(),
  bw = function () {
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
  Rp = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: bw() });
  },
  _w = Rp(),
  yw = _.createContext(Rp()),
  mw = function (e) {
    return e.value++;
  },
  ww = function (e) {
    return e ? e.prefix : "";
  },
  Ow = function (e) {
    var t = e || _w,
      r = ww(t),
      n = mw(t),
      a = r + n,
      i = function (o) {
        return a + t.uid(o);
      };
    return { uid: a, gen: i };
  },
  Pp = function () {
    var e = _.useContext(yw),
      t = _.useState(function () {
        return Ow(e);
      })[0];
    return t;
  },
  kw = function () {
    var e = Pp().uid;
    return e;
  },
  Sw = function () {
    var e = Pp().gen;
    return e;
  },
  Jo,
  ai = (Jo = k.useId) !== null && Jo !== void 0 ? Jo : void 0;
function Ew() {
  return ai && Ne("platform-dst-react-18-use-id")
    ? Ne("platform-dst-react-18-use-id-selector-safe")
      ? ai().replace(/[:«»]/g, "_")
      : ai()
    : "uid".concat(kw());
}
function xw() {
  if (ai && Ne("platform-dst-react-18-use-id")) {
    var e = Ew();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return Sw();
}
var Ap = function (t) {
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
    r = _.createContext(e);
  function n(o) {
    var u = _.useContext(r),
      s = u || t,
      c = s(o);
    return c;
  }
  function a(o) {
    var u = o.children,
      s = ae(o, Rw),
      c = n(s);
    return k.createElement(k.Fragment, null, u(c));
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
    return k.createElement(r.Provider, { value: c }, o.children);
  }
  return { Consumer: a, Provider: i, useTheme: n };
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Dw(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = Iw(a);
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
  xi = "-moz-",
  Q = "-webkit-",
  jp = "comm",
  eu = "rule",
  tu = "decl",
  Mw = "@import",
  Ip = "@keyframes",
  Lw = "@layer",
  Nw = Math.abs,
  Yi = String.fromCharCode,
  Fw = Object.assign;
function $w(e, t) {
  return _e(e, 0) ^ 45
    ? (((((((t << 2) ^ _e(e, 0)) << 2) ^ _e(e, 1)) << 2) ^ _e(e, 2)) << 2) ^ _e(e, 3)
    : 0;
}
function Dp(e) {
  return e.trim();
}
function zw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Z(e, t, r) {
  return e.replace(t, r);
}
function Rs(e, t) {
  return e.indexOf(t);
}
function _e(e, t) {
  return e.charCodeAt(t) | 0;
}
function ka(e, t, r) {
  return e.slice(t, r);
}
function yt(e) {
  return e.length;
}
function ru(e) {
  return e.length;
}
function Xa(e, t) {
  return (t.push(e), e);
}
function Bw(e, t) {
  return e.map(t).join("");
}
var Ji = 1,
  Jr = 1,
  Tp = 0,
  Ie = 0,
  he = 0,
  an = "";
function Xi(e, t, r, n, a, i, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: i,
    line: Ji,
    column: Jr,
    length: o,
    return: "",
  };
}
function Qn(e, t) {
  return Fw(Xi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function qw() {
  return he;
}
function Uw() {
  return ((he = Ie > 0 ? _e(an, --Ie) : 0), Jr--, he === 10 && ((Jr = 1), Ji--), he);
}
function Fe() {
  return ((he = Ie < Tp ? _e(an, Ie++) : 0), Jr++, he === 10 && ((Jr = 1), Ji++), he);
}
function xt() {
  return _e(an, Ie);
}
function ii() {
  return Ie;
}
function Ta(e, t) {
  return ka(an, e, t);
}
function Sa(e) {
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
function Mp(e) {
  return ((Ji = Jr = 1), (Tp = yt((an = e))), (Ie = 0), []);
}
function Lp(e) {
  return ((an = ""), e);
}
function oi(e) {
  return Dp(Ta(Ie - 1, Ps(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Vw(e) {
  for (; (he = xt()) && he < 33; ) Fe();
  return Sa(e) > 2 || Sa(he) > 3 ? "" : " ";
}
function Gw(e, t) {
  for (; --t && Fe() && !(he < 48 || he > 102 || (he > 57 && he < 65) || (he > 70 && he < 97)); );
  return Ta(e, ii() + (t < 6 && xt() == 32 && Fe() == 32));
}
function Ps(e) {
  for (; Fe(); )
    switch (he) {
      case e:
        return Ie;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ps(he);
        break;
      case 40:
        e === 41 && Ps(e);
        break;
      case 92:
        Fe();
        break;
    }
  return Ie;
}
function Hw(e, t) {
  for (; Fe() && e + he !== 57; ) if (e + he === 84 && xt() === 47) break;
  return "/*" + Ta(t, Ie - 1) + "*" + Yi(e === 47 ? e : Fe());
}
function Ww(e) {
  for (; !Sa(xt()); ) Fe();
  return Ta(e, Ie);
}
function Kw(e) {
  return Lp(si("", null, null, null, [""], (e = Mp(e)), 0, [0], e));
}
function si(e, t, r, n, a, i, o, u, s) {
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
      O = a,
      y = i,
      S = n,
      C = w;
    g;

  )
    switch (((v = m), (m = Fe()))) {
      case 40:
        if (v != 108 && _e(C, d - 1) == 58) {
          Rs((C += Z(oi(m), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += oi(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Vw(v);
        break;
      case 92:
        C += Gw(ii() - 1, 7);
        continue;
      case 47:
        switch (xt()) {
          case 42:
          case 47:
            Xa(Yw(Hw(Fe(), ii()), t, r), s);
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
                Xa(h > 32 ? Od(C + ";", n, r, d - 1) : Od(Z(C, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            C += ";";
          default:
            if ((Xa((S = wd(C, t, r, c, l, a, u, w, (O = []), (y = []), d)), i), m === 123))
              if (l === 0) si(C, t, S, S, O, i, d, u, y);
              else
                switch (f === 99 && _e(C, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    si(
                      e,
                      S,
                      S,
                      n && Xa(wd(e, S, S, 0, 0, a, u, w, a, (O = []), d), y),
                      a,
                      y,
                      d,
                      u,
                      n ? O : y,
                    );
                    break;
                  default:
                    si(C, S, S, S, [""], y, 0, u, y);
                }
        }
        ((c = l = h = 0), (p = b = 1), (w = C = ""), (d = o));
        break;
      case 58:
        ((d = 1 + yt(C)), (h = v));
      default:
        if (p < 1) {
          if (m == 123) --p;
          else if (m == 125 && p++ == 0 && Uw() == 125) continue;
        }
        switch (((C += Yi(m)), m * p)) {
          case 38:
            b = l > 0 ? 1 : ((C += "\f"), -1);
            break;
          case 44:
            ((u[c++] = (yt(C) - 1) * b), (b = 1));
            break;
          case 64:
            (xt() === 45 && (C += oi(Fe())), (f = xt()), (l = d = yt((w = C += Ww(ii())))), m++);
            break;
          case 45:
            v === 45 && yt(C) == 2 && (p = 0);
        }
    }
  return i;
}
function wd(e, t, r, n, a, i, o, u, s, c, l) {
  for (var d = a - 1, f = a === 0 ? i : [""], h = ru(f), v = 0, p = 0, g = 0; v < n; ++v)
    for (var b = 0, m = ka(e, d + 1, (d = Nw((p = o[v])))), w = e; b < h; ++b)
      (w = Dp(p > 0 ? f[b] + " " + m : Z(m, /&\f/g, f[b]))) && (s[g++] = w);
  return Xi(e, t, r, a === 0 ? eu : u, s, c, l);
}
function Yw(e, t, r) {
  return Xi(e, t, r, jp, Yi(qw()), ka(e, 2, -2), 0);
}
function Od(e, t, r, n) {
  return Xi(e, t, r, tu, ka(e, 0, n), ka(e, n + 1, -1), n);
}
function Hr(e, t) {
  for (var r = "", n = ru(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function Jw(e, t, r, n) {
  switch (e.type) {
    case Lw:
      if (e.children.length) break;
    case Mw:
    case tu:
      return (e.return = e.return || e.value);
    case jp:
      return "";
    case Ip:
      return (e.return = e.value + "{" + Hr(e.children, n) + "}");
    case eu:
      e.value = e.props.join(",");
  }
  return yt((r = Hr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function Xw(e) {
  var t = ru(e);
  return function (r, n, a, i) {
    for (var o = "", u = 0; u < t; u++) o += e[u](r, n, a, i) || "";
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
var e1 = function (t, r, n) {
    for (var a = 0, i = 0; (a = i), (i = xt()), a === 38 && i === 12 && (r[n] = 1), !Sa(i); ) Fe();
    return Ta(t, Ie);
  },
  t1 = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (Sa(a)) {
        case 0:
          (a === 38 && xt() === 12 && (r[n] = 1), (t[n] += e1(Ie - 1, r, n)));
          break;
        case 2:
          t[n] += oi(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = xt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Yi(a);
      }
    while ((a = Fe()));
    return t;
  },
  r1 = function (t, r) {
    return Lp(t1(Mp(t), r));
  },
  kd = new WeakMap(),
  n1 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !kd.get(n)) && !a) {
        kd.set(t, !0);
        for (var i = [], o = r1(r, i), u = n.props, s = 0, c = 0; s < o.length; s++)
          for (var l = 0; l < u.length; l++, c++)
            t.props[c] = i[s] ? o[s].replace(/&\f/g, u[l]) : u[l] + " " + o[s];
      }
    }
  },
  a1 = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Np(e, t) {
  switch ($w(e, t)) {
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
      return Q + e + xi + e + me + e + e;
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
                "$1" + Q + "$2-$3$1" + xi + (_e(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Rs(e, "stretch") ? Np(Z(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (_e(e, t + 1) !== 115) break;
    case 6444:
      switch (_e(e, yt(e) - 3 - (~Rs(e, "!important") && 10))) {
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
var i1 = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case tu:
          t.return = Np(t.value, t.length);
          break;
        case Ip:
          return Hr([Qn(t, { value: Z(t.value, "@", "@" + Q) })], a);
        case eu:
          if (t.length)
            return Bw(t.props, function (i) {
              switch (zw(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Hr([Qn(t, { props: [Z(i, /:(read-\w+)/, ":" + xi + "$1")] })], a);
                case "::placeholder":
                  return Hr(
                    [
                      Qn(t, { props: [Z(i, /:(plac\w+)/, ":" + Q + "input-$1")] }),
                      Qn(t, { props: [Z(i, /:(plac\w+)/, ":" + xi + "$1")] }),
                      Qn(t, { props: [Z(i, /:(plac\w+)/, me + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  o1 = [i1],
  s1 = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (p) {
        var g = p.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || o1,
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
      c = [n1, a1];
    {
      var l,
        d = [
          Jw,
          Qw(function (p) {
            l.insert(p);
          }),
        ],
        f = Xw(c.concat(a, d)),
        h = function (g) {
          return Hr(Kw(g), f);
        };
      s = function (g, b, m, w) {
        ((l = m), h(g ? g + "{" + b.styles + "}" : b.styles), w && (v.inserted[b.name] = !0));
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
      inserted: i,
      registered: {},
      insert: s,
    };
    return (v.sheet.hydrate(u), v);
  },
  Xo = { exports: {} },
  ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sd;
function u1() {
  if (Sd) return ee;
  Sd = 1;
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
  function O(y) {
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
      return O(y) || w(y) === s;
    }),
    (ee.isConcurrentMode = O),
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
var Ed;
function c1() {
  return (Ed || ((Ed = 1), (Xo.exports = u1())), Xo.exports);
}
var Qo, xd;
function l1() {
  if (xd) return Qo;
  xd = 1;
  var e = c1(),
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
      for (var w = o(v), O = o(p), y = 0; y < m.length; ++y) {
        var S = m[y];
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
  return ((Qo = h), Qo);
}
l1();
var d1 = !0;
function Fp(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var nu = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || d1 === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  $p = function (t, r, n) {
    nu(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do (t.insert(r === i ? "." + a : "", i, t.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function f1(e) {
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
var v1 = {
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
  p1 = /[A-Z]|^ms/g,
  h1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  zp = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Cd = function (t) {
    return t != null && typeof t != "boolean";
  },
  Zo = Zw(function (e) {
    return zp(e) ? e : e.replace(p1, "-$&").toLowerCase();
  }),
  Rd = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(h1, function (n, a, i) {
            return ((mt = { name: a, styles: i, next: mt }), a);
          });
    }
    return v1[t] !== 1 && !zp(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Ea(e, t, r) {
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
      return g1(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = mt,
          c = r(e);
        return ((mt = s), Ea(e, t, c));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function g1(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += Ea(e, t, r[a]) + ";";
  else
    for (var i in r) {
      var o = r[i];
      if (typeof o != "object") {
        var u = o;
        t != null && t[u] !== void 0
          ? (n += i + "{" + t[u] + "}")
          : Cd(u) && (n += Zo(i) + ":" + Rd(i, u) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var s = 0; s < o.length; s++) Cd(o[s]) && (n += Zo(i) + ":" + Rd(i, o[s]) + ";");
      else {
        var c = Ea(e, t, o);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Zo(i) + ":" + c + ";";
            break;
          }
          default:
            n += i + "{" + c + "}";
        }
      }
    }
  return n;
}
var Pd = /label:\s*([^\s;{]+)\s*(;|$)/g,
  mt;
function au(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  mt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) ((n = !1), (a += Ea(r, t, i)));
  else {
    var o = i;
    a += o[0];
  }
  for (var u = 1; u < e.length; u++)
    if (((a += Ea(r, t, e[u])), n)) {
      var s = i;
      a += s[u];
    }
  Pd.lastIndex = 0;
  for (var c = "", l; (l = Pd.exec(a)) !== null; ) c += "-" + l[1];
  var d = f1(a) + c;
  return { name: d, styles: a, next: mt };
}
var b1 = function (t) {
    return t();
  },
  _1 = Bc.useInsertionEffect ? Bc.useInsertionEffect : !1,
  Bp = _1 || b1,
  qp = _.createContext(typeof HTMLElement < "u" ? s1({ key: "css" }) : null);
qp.Provider;
var Up = function (t) {
    return _.forwardRef(function (r, n) {
      var a = _.useContext(qp);
      return t(r, a, n);
    });
  },
  Vp = _.createContext({}),
  iu = {}.hasOwnProperty,
  As = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  y1 = function (t, r) {
    var n = {};
    for (var a in r) iu.call(r, a) && (n[a] = r[a]);
    return ((n[As] = t), n);
  },
  m1 = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      nu(r, n, a),
      Bp(function () {
        return $p(r, n, a);
      }),
      null
    );
  },
  w1 = Up(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[As],
      i = [n],
      o = "";
    typeof e.className == "string"
      ? (o = Fp(t.registered, i, e.className))
      : e.className != null && (o = e.className + " ");
    var u = au(i, void 0, _.useContext(Vp));
    o += t.key + "-" + u.name;
    var s = {};
    for (var c in e) iu.call(e, c) && c !== "css" && c !== As && (s[c] = e[c]);
    return (
      (s.className = o),
      r && (s.ref = r),
      _.createElement(
        _.Fragment,
        null,
        _.createElement(m1, { cache: t, serialized: u, isStringTag: typeof a == "string" }),
        _.createElement(a, s),
      )
    );
  }),
  O1 = w1,
  Bt = function (t, r) {
    var n = arguments;
    if (r == null || !iu.call(r, "css")) return _.createElement.apply(void 0, n);
    var a = n.length,
      i = new Array(a);
    ((i[0] = O1), (i[1] = y1(t, r)));
    for (var o = 2; o < a; o++) i[o] = n[o];
    return _.createElement.apply(null, i);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Bt || (Bt = {}));
function It() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return au(t);
}
var k1 = function e(t) {
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
function S1(e, t, r) {
  var n = [],
    a = Fp(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var E1 = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Bp(function () {
        for (var a = 0; a < n.length; a++) $p(r, n[a], !1);
      }),
      null
    );
  },
  x1 = Up(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        var d = au(c, t.registered);
        return (r.push(d), nu(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        return S1(t.registered, n, k1(c));
      },
      i = { css: n, cx: a, theme: _.useContext(Vp) },
      o = e.children(i);
    return _.createElement(
      _.Fragment,
      null,
      _.createElement(E1, { cache: t, serializedArr: r }),
      o,
    );
  });
function C1(e, t) {
  var r = _.useRef(!0);
  _.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Gp = 2,
  js = It({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Gp,
  }),
  Is = It({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Gp,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  R1 = It({
    "&:focus": js,
    "&:focus-visible": js,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  P1 = It({
    "&:focus": Is,
    "&:focus-visible": Is,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Hp = _.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? Is : js,
      i = r ? P1 : R1,
      o = typeof n > "u" ? i : n === "on" && a;
    return Bt(x1, null, function (u) {
      var s = u.css,
        c = u.cx;
      return _.Children.only(
        o ? _.cloneElement(t, { className: c([s(o), t.props.className]) }) : t,
      );
    });
  });
Hp.displayName = "FocusRing";
function Ft(e) {
  (e.preventDefault(), e.stopPropagation());
}
var A1 = 9;
function Ad(e) {
  e.keyCode !== A1 && Ft(e);
}
var j1 = {
    onMouseDownCapture: Ft,
    onMouseUpCapture: Ft,
    onKeyDownCapture: Ad,
    onKeyUpCapture: Ad,
    onTouchStartCapture: Ft,
    onTouchEndCapture: Ft,
    onPointerDownCapture: Ft,
    onPointerUpCapture: Ft,
    onClickCapture: Ft,
    onClick: Ft,
  },
  I1 = {};
function D1(e) {
  var t = e.isInteractive;
  return t ? I1 : j1;
}
var jd = "rgba(179, 212, 255, 0.6)",
  Id = {
    background: {
      default: {
        default: {
          light: "var(--ds-background-neutral, ".concat(Fn, ")"),
          dark: "var(--ds-background-neutral, ".concat($n, ")"),
        },
        hover: {
          light: "var(--ds-background-neutral-hovered, ".concat(yl, ")"),
          dark: "var(--ds-background-neutral-hovered, ".concat(ml, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-pressed, ".concat(jd, ")"),
          dark: "var(--ds-background-neutral-pressed, ".concat(Ga, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Fn, ")"),
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
          dark: "var(--ds-background-brand-bold, ".concat(hl, ")"),
        },
        hover: {
          light: "var(--ds-background-brand-bold-hovered, ".concat(bl, ")"),
          dark: "var(--ds-background-brand-bold-hovered, ".concat(Ga, ")"),
        },
        active: {
          light: "var(--ds-background-brand-bold-pressed, ".concat(_l, ")"),
          dark: "var(--ds-background-brand-bold-pressed, ".concat(gl, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Fn, ")"),
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
          light: "var(--ds-background-warning-bold, ".concat(pl, ")"),
          dark: "var(--ds-background-warning-bold, ".concat(pl, ")"),
        },
        hover: {
          light: "var(--ds-background-warning-bold-hovered, ".concat(vl, ")"),
          dark: "var(--ds-background-warning-bold-hovered, ".concat(vl, ")"),
        },
        active: {
          light: "var(--ds-background-warning-bold-pressed, ".concat(jr, ")"),
          dark: "var(--ds-background-warning-bold-pressed, ".concat(jr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Fn, ")"),
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
          light: "var(--ds-background-danger-bold, ".concat(fl, ")"),
          dark: "var(--ds-background-danger-bold, ".concat(fl, ")"),
        },
        hover: {
          light: "var(--ds-background-danger-bold-hovered, ".concat(dl, ")"),
          dark: "var(--ds-background-danger-bold-hovered, ".concat(dl, ")"),
        },
        active: {
          light: "var(--ds-background-danger-bold-pressed, ".concat(Ar, ")"),
          dark: "var(--ds-background-danger-bold-pressed, ".concat(Ar, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Fn, ")"),
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
          light: "var(--ds-background-neutral-subtle-hovered, ".concat(yl, ")"),
          dark: "var(--ds-background-neutral-subtle-hovered, ".concat(ml, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-subtle-pressed, ".concat(jd, ")"),
          dark: "var(--ds-background-neutral-subtle-pressed, ".concat(Ga, ")"),
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
          light: "var(--ds-text, ".concat(wa, ")"),
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
          light: "var(--ds-text-inverse, ".concat(Jt, ")"),
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
          light: "var(--ds-text-inverse, ".concat(Jt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Jt, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(zn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Jt, ")"),
          dark: "var(--ds-text-selected, ".concat(Jt, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Jt, ")"),
          dark: "var(--ds-text-selected, ".concat(Jt, ")"),
        },
      },
      link: {
        default: {
          light: "var(--ds-link, ".concat(Ir, ")"),
          dark: "var(--ds-link, ".concat(hl, ")"),
        },
        hover: {
          light: "var(--ds-link, ".concat(bl, ")"),
          dark: "var(--ds-link, ".concat(Ga, ")"),
        },
        active: {
          light: "var(--ds-link-pressed, ".concat(_l, ")"),
          dark: "var(--ds-link-pressed, ".concat(gl, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(Io, ")"),
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
          light: "var(--ds-text, ".concat(wa, ")"),
          dark: "var(--ds-text, ".concat(ut, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Ir, ")"),
          dark: "var(--ds-text, ".concat(Ir, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(Io, ")"),
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
          light: "var(--ds-text-subtle, ".concat(Jy, ")"),
          dark: "var(--ds-text-subtle, ".concat(ut, ")"),
        },
        hover: {
          light: "var(--ds-text-subtle, ".concat(Yy, ")"),
          dark: "var(--ds-text-subtle, ".concat(Ky, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Xy, ")"),
          dark: "var(--ds-text, ".concat(Qy, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(Io, ")"),
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
function Dd(e, t) {
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
      ? Dd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Dd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Qt = 8,
  es = ["default", "primary", "danger", "warning"],
  Ds = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  T1 = { default: Ds.default, compact: Ds.compact, none: "inherit" },
  M1 = {
    default: "0 ".concat(Qt + Qt / 4, "px"),
    compact: "0 ".concat(Qt + Qt / 4, "px"),
    none: "0",
  },
  L1 = { compact: "0 ".concat(Qt / 4, "px"), default: "0 ".concat(Qt / 4, "px"), none: "0" },
  N1 = { default: "middle", compact: "middle", none: "baseline" },
  Wp = { content: "0 ".concat(Qt / 4, "px"), icon: "0 ".concat(Qt / 4, "px") },
  Kp = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  F1 = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #172B4D)",
    "&::after": ne(ne({}, Kp), {}, { content: '""', borderColor: "var(--ds-border, #091E4224)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #091E4224)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #091E424F)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  $1 = {
    background: "var(--ds-background-brand-bold, #0C66E4)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #0055CC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #09326C)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #0C66E4)",
    },
  },
  z1 = {
    background: "transparent",
    color: "var(--ds-link, #0C66E4)",
    "&:hover": { color: "var(--ds-link, #0C66E4)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #0055CC)", textDecoration: "underline" },
  },
  B1 = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #091E420F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #091E4224)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  q1 = {
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
  U1 = {
    background: "var(--ds-background-warning-bold, #F5CD47)",
    color: "var(--ds-text-warning-inverse, #172B4D)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #E2B203)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #CF9F02)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #F5CD47)",
    },
  },
  V1 = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #5D1F1A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  G1 = {
    background: "var(--ds-background-selected, #E9F2FF)",
    color: "var(--ds-text-selected, #0C66E4)",
    "&:not([disabled])::after": ne(
      ne({}, Kp),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #0C66E4)" },
    ),
  },
  Td = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function Md(e) {
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
    background: Md({ group: Id.background[t], key: r, mode: n }),
    color: "".concat(Md({ group: Id.color[t], key: r, mode: n }), " !important"),
  };
}
function H1(e) {
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
          !Ne("platform-component-visual-refresh") && u,
        ),
        {},
        {
          cursor: "pointer",
          height: Ds[r],
          lineHeight: T1[r],
          padding: o ? L1[r] : M1[r],
          verticalAlign: N1[r],
          width: i ? "100%" : "auto",
          justifyContent: "center",
        },
        !Ne("platform-component-visual-refresh") &&
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
              Td,
            ),
            {},
            {
              '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active':
                ne({}, Br({ appearance: t, key: a ? "selected" : "default", mode: n })),
            },
          ),
      ),
      Ne("platform-component-visual-refresh") &&
        (a
          ? G1
          : ne(
              ne(
                ne(
                  ne(
                    ne(
                      ne(
                        ne(ne({}, t === "default" && F1), t === "primary" && $1),
                        t === "link" && z1,
                      ),
                      t === "subtle" && B1,
                    ),
                    t === "subtle-link" && q1,
                  ),
                  t === "warning" && U1,
                ),
                t === "danger" && V1,
              ),
              {},
              {
                "&[disabled]": {
                  color: "var(--ds-text-disabled, #091E424F)",
                  backgroundColor: es.includes(t)
                    ? "var(--ds-background-disabled, #091E4208)"
                    : "transparent",
                  cursor: "not-allowed",
                  textDecoration: "none",
                  "&:hovered": {
                    backgroundColor: es.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                  "&:active": {
                    backgroundColor: es.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                },
              },
              Td,
            )),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function Ld(e) {
  var t = e.spacing;
  return It({
    display: "flex",
    margin: t === "none" ? 0 : Wp.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function W1(e) {
  var t = e.spacing;
  return It({
    margin: t === "none" ? 0 : Wp.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function K1(e) {
  var t = e.hasOverlay;
  return It({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var Y1 = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ou = function (t) {
    return t && _.isValidElement(t) && t.type === Ap;
  },
  J1 = [
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
  X1 = { "> *": { pointerEvents: "none" } },
  Q1 = It({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  Z1 = It({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  Nd = function (t, r) {
    return !t || ou(t) ? null : r;
  },
  eO = function (t, r) {
    return ou(t) ? t : t ? Bt("span", { css: r }, t) : null;
  },
  tO = k.forwardRef(function (t, r) {
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
      O = w === void 0 ? !1 : w,
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
      F = ae(t, J1),
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
    C1(j, u);
    var oe = _.useContext(Js),
      ue = _.useCallback(
        function (pe, Ve) {
          (oe && oe.tracePress(g, pe.timeStamp), C(pe, Ve));
        },
        [C, oe, g],
      ),
      le = ma({
        fn: ue,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
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
      Ue = It(K1({ hasOverlay: ce })),
      Oe = !m && !ce,
      it = {};
    return (
      (O || m || i === "warning") &&
        (it = {
          "[data-theme] & circle": {
            stroke: "".concat(
              O || m
                ? "var(--ds-icon-subtle, ".concat(wa, ")")
                : "var(--ds-icon-warning-inverse, ".concat(wa, ")"),
              " !important",
            ),
          },
        }),
      Bt(
        Hp,
        null,
        Bt(
          h,
          te(
            {},
            F,
            {
              ref: be,
              className: l,
              css: [s, Oe ? null : X1],
              "data-has-overlay": ce ? !0 : void 0,
              "data-testid": X,
              disabled: m,
              href: Oe ? d : void 0,
              onBlur: y,
              onClick: le,
              onFocus: I,
              onMouseDown: ge,
              tabIndex: m ? -1 : J,
              type: U,
            },
            D1({ isInteractive: Oe }),
          ),
          p ? Bt("span", { css: [Ue, Ld({ spacing: z }), Nd(c, Q1)] }, p) : null,
          eO(c, [Ue, W1({ spacing: z })]),
          v ? Bt("span", { css: [Ue, Ld({ spacing: z }), Nd(c, Z1)] }, v) : null,
          M ? Bt("span", { css: [Y1, it] }, M) : null,
        ),
      )
    );
  });
function rO(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return ou(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var nO = [
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
  Fd = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  su = k.memo(
    k.forwardRef(function (t, r) {
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
        m = ae(t, nO),
        w = jw(),
        O = w.mode,
        y = rO({ children: i, iconBefore: o, iconAfter: u }),
        S = _.useState(!1),
        C = K(S, 2),
        I = C[0],
        T = C[1],
        P = _.useCallback(
          function (z) {
            (d(z), Fd && T(!0));
          },
          [d, T],
        ),
        M = _.useCallback(
          function (z) {
            (h(z), Fd && T(!1));
          },
          [h, T],
        ),
        B = _.useMemo(
          function () {
            return H1({
              appearance: a,
              spacing: b,
              mode: O,
              isSelected: c,
              shouldFitContainer: p,
              isOnlySingleIcon: y,
            });
          },
          [a, b, O, c, p, y],
        );
      return k.createElement(
        tO,
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
su.displayName = "Button";
function $d(e) {
  return k.createElement(su, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function aO(e) {
  return k.createElement(su, te({}, e, { appearance: "subtle" }));
}
var iO = { container: "_1e0c1txw _kqswh2mm" };
function oO(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return k.createElement(
    Wi,
    { as: "li", testId: r, key: t, xcss: iO.container, paddingInline: "space.100" },
    k.createElement(
      sw,
      { testId: r && "".concat(r, "-text") },
      k.createElement(Ap, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var zd = {},
  Bd =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function sO(e, t) {
  return !!(e === t || (Bd(e) && Bd(t)));
}
function uO(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!sO(e[r], t[r])) return !1;
  return !0;
}
function cO(e, t) {
  t === void 0 && (t = uO);
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
var lO = function (t, r, n, a) {
  var i = n.max,
    o = n.ellipsis,
    u = n.transform,
    s = t.length,
    c = s > i,
    l = c && i - 4 < r,
    d = c && r < s - i + 3,
    f = cO(function () {
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
function qd(e, t) {
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
function dO(e) {
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
var Ts = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  fO = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "0.0.0-development",
  };
function Ud(e) {
  var t = e.chevronDirection,
    r = t === "left" ? x0 : j0;
  return k.createElement(
    Wi,
    { as: "span", xcss: Ts.navigatorIconWrapper },
    k.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function vO(e, t) {
  var r = e.components,
    n = r === void 0 ? zd : r,
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
    g = p === void 0 ? zd : p,
    b = e.max,
    m = b === void 0 ? 7 : b,
    w = e.onChange,
    O = w === void 0 ? we : w,
    y = e.pages,
    S = e.getPageLabel,
    C = e.renderEllipsis,
    I = C === void 0 ? oO : C,
    T = e.analyticsContext,
    P = e.testId,
    M = e.isDisabled,
    B = dm(o, function () {
      return i || 0;
    }),
    z = K(B, 2),
    V = z[0],
    J = z[1],
    G = ma(
      dO(
        {
          fn: function (F, j) {
            var be = F.event,
              oe = F.selectedPageIndex;
            (o === void 0 && J(oe), O && O(be, y[oe], j));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: T,
        },
        fO,
      ),
    ),
    U = function (F, j, be) {
      var oe = y[V],
        ue = "".concat(l, " ").concat(S ? S(F, j) : F),
        le = F === oe;
      return k.createElement(
        ni,
        { as: "li", xcss: Ts.paginationMenuItem, key: "page-".concat(S ? S(F, j) : j) },
        k.createElement(
          aO,
          {
            component: n.Page,
            onClick: function (ce) {
              return G({ event: ce, selectedPageIndex: j });
            },
            "aria-current": le ? "page" : void 0,
            "aria-label": ue,
            isSelected: le,
            isDisabled: M,
            page: F,
            testId:
              be &&
              ""
                .concat(be, "--")
                .concat(le ? "current-" : "", "page-")
                .concat(j),
          },
          S ? S(F, j) : F,
        ),
      );
    };
  return k.createElement(
    Wi,
    { testId: P, style: g, ref: t, "aria-label": s, as: "nav" },
    k.createElement(
      ni,
      { space: "space.0", alignBlock: "center" },
      k.createElement($d, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (F) {
          return G({ event: F, selectedPageIndex: V - 1 });
        },
        isDisabled: M || V === 0,
        iconBefore: k.createElement(Ud, { chevronDirection: "left" }),
        "aria-label": f,
        testId: P && "".concat(P, "--left-navigator"),
      }),
      k.createElement(
        ni,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Ts.paginationMenu },
        lO(y, V, { max: m, ellipsis: I, transform: U }, P),
      ),
      k.createElement($d, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (F) {
          return G({ event: F, selectedPageIndex: V + 1 });
        },
        isDisabled: M || V === y.length - 1,
        iconBefore: k.createElement(Ud, { chevronDirection: "right" }),
        "aria-label": v,
        testId: P && "".concat(P, "--right-navigator"),
      }),
    ),
  );
}
var pO = _.memo(_.forwardRef(vO));
function hO(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Yp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Yp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Yp = function () {
    return !!e;
  })();
}
var gO = (function (e) {
    function t() {
      var r;
      fe(this, t);
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
      return (
        (r = hO(this, t, [].concat(a))),
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
            return k.createElement(pO, {
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
  })(k.Component),
  bO = ["isRanking", "testId"],
  _O = [
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
function Vd(e, t) {
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
function Zn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Gd = "--local-dynamic-table-text-color",
  yO = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = ae(t, bO);
    return _.createElement(
      "thead",
      te({ "data-testid": n }, a, { className: R(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  mO = _.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      i = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var u = e.style,
      s = e.testId,
      c = ae(e, _O),
      l = Zn(
        Zn(Zn({}, u), r && ap({ width: r })),
        {},
        x({}, Gd, "var(--ds-text-subtlest, #626F86)"),
      ),
      d = a === yr,
      f = a === ki,
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
        style: Zn(
          Zn({}, l),
          {},
          { "--_17ckjys": rp("var(--ds-text-subtle, ".concat("var(".concat(Gd, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function wO(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Jp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
function OO(e) {
  return (function (t) {
    function r() {
      var n;
      fe(this, r);
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return (
        (n = wO(this, r, [].concat(i))),
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
var ea = {},
  Hd;
function kO() {
  if (Hd) return ea;
  ((Hd = 1), Object.defineProperty(ea, "__esModule", { value: !0 }), (ea.default = void 0));
  var e = r(pt()),
    t = r(Hi);
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
  return ((n.displayName = "ArrowDownIcon"), (ea.default = n), ea);
}
var SO = kO();
const EO = rr(SO);
var ta = {},
  Wd;
function xO() {
  if (Wd) return ta;
  ((Wd = 1), Object.defineProperty(ta, "__esModule", { value: !0 }), (ta.default = void 0));
  var e = r(pt()),
    t = r(Hi);
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
  return ((n.displayName = "ArrowUpIcon"), (ta.default = n), ta);
}
var CO = xO();
const RO = rr(CO);
var PO = "Escape";
function AO(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = _.useRef(!1),
    a = _.useCallback(
      function (o) {
        r || n.current || o.key !== PO || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    i = _.useCallback(function () {
      n.current = !1;
    }, []);
  _.useEffect(
    function () {
      if (!(r && Ne("platform_only_attach_escape_handler_on_view")))
        return Ki.bindAll(
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
function ra(e) {
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
var jO = _.createContext(null),
  IO = _.createContext(null);
function DO() {
  var e = _.useContext(IO);
  return e;
}
function TO(e) {
  var t = e.isOpen,
    r = e.onClose,
    n = _.useContext(jO),
    a = DO();
  _.useEffect(
    function () {
      if (n !== null && t) return n.onClose(r, { namespace: a });
    },
    [n, t, a, r],
  );
}
var oa = { none: 0, small: 100, medium: 350, large: 700 },
  ts = 0.5,
  MO = { none: oa.none, small: oa.small * ts, medium: oa.medium * ts, large: oa.large * ts },
  LO = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  NO = function () {
    if (!LO()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  FO = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  $O = function () {
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
      }, FO(t)),
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
  Xp = { appear: !0, isExiting: !1 },
  Qp = _.createContext(Xp),
  Kd = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xp;
    return k.createElement(Qp.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  Yd = function (t) {
    var r = [];
    return (
      _.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  zO = function (t, r) {
    for (var n = r.concat([]), a = BO(r), i = 0; i < t.length; i++) {
      var o = t[i],
        u = !a[o.key];
      u && n.splice(i + 1, 0, o);
    }
    return n;
  },
  BO = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  qO = function (t, r) {
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
  Zp = _.memo(function (e) {
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
      O = Yd(m),
      y = Yd(w);
    w !== n && s([w, n]);
    var S = qO(y, O),
      C = !!S.size,
      I = y;
    if ((C && (I = zO(y, O)), a))
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
            return Kd(P, {
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
            return Kd(P, p);
          })),
      I
    );
  }),
  UO = function () {
    return _.useContext(Qp);
  };
Zp.displayName = "ExitingPersistence";
function VO() {
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
var GO = _.createContext(function () {
    return { isReady: !0, delay: 0, ref: we };
  }),
  HO = function () {
    var t = VO(),
      r = _.useContext(GO);
    return r(t);
  },
  WO = function (t) {
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
      h = HO(),
      v = UO(),
      p = v.isExiting,
      g = v.onFinish,
      b = v.appear,
      m = $O(),
      w = c || !h.isReady,
      O = p ? 0 : h.delay,
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
            if (NO()) {
              M();
              return;
            }
            return (
              T(!0),
              m(M, p ? MO[f] : oa[f] + O),
              function () {
                P = !0;
              }
            );
          }
        },
        [g, y, p, f, O, w, m],
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
          style: { animationDelay: "".concat(O, "ms") },
        },
        y,
      )
    );
  },
  KO = { top: "bottom", bottom: "top", left: "right", right: "left" },
  YO = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      i = t.entranceDirection,
      o = t.exitDirection,
      u = t.distance,
      s = u === void 0 ? "proportional" : u,
      c = t.onFinish,
      l = t.isPaused,
      d = i !== void 0 ? KO[i] : void 0,
      f =
        o || d
          ? "fade-out-from-".concat(o || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return k.createElement(
      WO,
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
  JO = _.createContext();
_.createContext();
var XO = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  QO = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  ZO = function (t, r) {
    if (typeof t == "function") return QO(t, r);
    t != null && (t.current = r);
  },
  Jd = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        i = n[1];
      return ((r[a] = i), r);
    }, {});
  },
  Xd =
    typeof window < "u" && window.document && window.document.createElement
      ? _.useLayoutEffect
      : _.useEffect,
  Pe = "top",
  rt = "bottom",
  nt = "right",
  Ae = "left",
  uu = "auto",
  Ma = [Pe, rt, nt, Ae],
  Xr = "start",
  xa = "end",
  ek = "clippingParents",
  eh = "viewport",
  na = "popper",
  tk = "reference",
  Qd = Ma.reduce(function (e, t) {
    return e.concat([t + "-" + Xr, t + "-" + xa]);
  }, []),
  th = [].concat(Ma, [uu]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Xr, t + "-" + xa]);
  }, []),
  rk = "beforeRead",
  nk = "read",
  ak = "afterRead",
  ik = "beforeMain",
  ok = "main",
  sk = "afterMain",
  uk = "beforeWrite",
  ck = "write",
  lk = "afterWrite",
  dk = [rk, nk, ak, ik, ok, sk, uk, ck, lk];
function Pt(e) {
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
function cu(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = $e(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function fk(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      i = t.elements[r];
    !tt(i) ||
      !Pt(i) ||
      (Object.assign(i.style, n),
      Object.keys(a).forEach(function (o) {
        var u = a[o];
        u === !1 ? i.removeAttribute(o) : i.setAttribute(o, u === !0 ? "" : u);
      }));
  });
}
function vk(e) {
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
          !Pt(a) ||
          (Object.assign(a.style, u),
          Object.keys(i).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const pk = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: fk,
  effect: vk,
  requires: ["computeStyles"],
};
function Ct(e) {
  return e.split("-")[0];
}
var pr = Math.max,
  Ci = Math.min,
  Qr = Math.round;
function Ms() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function rh() {
  return !/^((?!chrome|android).)*safari/i.test(Ms());
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
    s = !rh() && r,
    c = (n.left + (s && u ? u.offsetLeft : 0)) / a,
    l = (n.top + (s && u ? u.offsetTop : 0)) / i,
    d = n.width / a,
    f = n.height / i;
  return { width: d, height: f, top: l, right: c + d, bottom: l + f, left: c, x: c, y: l };
}
function lu(e) {
  var t = Zr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function nh(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && cu(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Vt(e) {
  return $e(e).getComputedStyle(e);
}
function hk(e) {
  return ["table", "td", "th"].indexOf(Pt(e)) >= 0;
}
function ar(e) {
  return ((mr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Qi(e) {
  return Pt(e) === "html" ? e : e.assignedSlot || e.parentNode || (cu(e) ? e.host : null) || ar(e);
}
function Zd(e) {
  return !tt(e) || Vt(e).position === "fixed" ? null : e.offsetParent;
}
function gk(e) {
  var t = /firefox/i.test(Ms()),
    r = /Trident/i.test(Ms());
  if (r && tt(e)) {
    var n = Vt(e);
    if (n.position === "fixed") return null;
  }
  var a = Qi(e);
  for (cu(a) && (a = a.host); tt(a) && ["html", "body"].indexOf(Pt(a)) < 0; ) {
    var i = Vt(a);
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
function La(e) {
  for (var t = $e(e), r = Zd(e); r && hk(r) && Vt(r).position === "static"; ) r = Zd(r);
  return r && (Pt(r) === "html" || (Pt(r) === "body" && Vt(r).position === "static"))
    ? t
    : r || gk(e) || t;
}
function du(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function fa(e, t, r) {
  return pr(e, Ci(t, r));
}
function bk(e, t, r) {
  var n = fa(e, t, r);
  return n > r ? r : n;
}
function ah() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ih(e) {
  return Object.assign({}, ah(), e);
}
function oh(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var _k = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    ih(typeof t != "number" ? t : oh(t, Ma))
  );
};
function yk(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    i = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    u = Ct(r.placement),
    s = du(u),
    c = [Ae, nt].indexOf(u) >= 0,
    l = c ? "height" : "width";
  if (!(!i || !o)) {
    var d = _k(a.padding, r),
      f = lu(i),
      h = s === "y" ? Pe : Ae,
      v = s === "y" ? rt : nt,
      p = r.rects.reference[l] + r.rects.reference[s] - o[s] - r.rects.popper[l],
      g = o[s] - r.rects.reference[s],
      b = La(i),
      m = b ? (s === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      w = p / 2 - g / 2,
      O = d[h],
      y = m - f[l] - d[v],
      S = m / 2 - f[l] / 2 + w,
      C = fa(O, S, y),
      I = s;
    r.modifiersData[n] = ((t = {}), (t[I] = C), (t.centerOffset = C - S), t);
  }
}
function mk(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (nh(t.elements.popper, a) && (t.elements.arrow = a)));
}
const wk = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: yk,
  effect: mk,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function en(e) {
  return e.split("-")[1];
}
var Ok = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function kk(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Qr(r * a) / a || 0, y: Qr(n * a) / a || 0 };
}
function ef(e) {
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
    O = Pe,
    y = window;
  if (c) {
    var S = La(r),
      C = "clientHeight",
      I = "clientWidth";
    if (
      (S === $e(r) &&
        ((S = ar(r)),
        Vt(S).position !== "static" &&
          u === "absolute" &&
          ((C = "scrollHeight"), (I = "scrollWidth"))),
      (S = S),
      a === Pe || ((a === Ae || a === nt) && i === xa))
    ) {
      O = rt;
      var T = d && S === y && y.visualViewport ? y.visualViewport.height : S[C];
      ((p -= T - n.height), (p *= s ? 1 : -1));
    }
    if (a === Ae || ((a === Pe || a === rt) && i === xa)) {
      w = nt;
      var P = d && S === y && y.visualViewport ? y.visualViewport.width : S[I];
      ((h -= P - n.width), (h *= s ? 1 : -1));
    }
  }
  var M = Object.assign({ position: u }, c && Ok),
    B = l === !0 ? kk({ x: h, y: p }, $e(r)) : { x: h, y: p };
  if (((h = B.x), (p = B.y), s)) {
    var z;
    return Object.assign(
      {},
      M,
      ((z = {}),
      (z[O] = m ? "0" : ""),
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
    ((t = {}), (t[O] = m ? p + "px" : ""), (t[w] = b ? h + "px" : ""), (t.transform = ""), t),
  );
}
function Sk(e) {
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
      ef(
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
        ef(
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
const Ek = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Sk, data: {} };
var Qa = { passive: !0 };
function xk(e) {
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
        l.addEventListener("scroll", r.update, Qa);
      }),
    u && s.addEventListener("resize", r.update, Qa),
    function () {
      (i &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", r.update, Qa);
        }),
        u && s.removeEventListener("resize", r.update, Qa));
    }
  );
}
const Ck = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: xk,
  data: {},
};
var Rk = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ui(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Rk[t];
  });
}
var Pk = { start: "end", end: "start" };
function tf(e) {
  return e.replace(/start|end/g, function (t) {
    return Pk[t];
  });
}
function fu(e) {
  var t = $e(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function vu(e) {
  return Zr(ar(e)).left + fu(e).scrollLeft;
}
function Ak(e, t) {
  var r = $e(e),
    n = ar(e),
    a = r.visualViewport,
    i = n.clientWidth,
    o = n.clientHeight,
    u = 0,
    s = 0;
  if (a) {
    ((i = a.width), (o = a.height));
    var c = rh();
    (c || (!c && t === "fixed")) && ((u = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: i, height: o, x: u + vu(e), y: s };
}
function jk(e) {
  var t,
    r = ar(e),
    n = fu(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = pr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    o = pr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    u = -n.scrollLeft + vu(e),
    s = -n.scrollTop;
  return (
    Vt(a || r).direction === "rtl" && (u += pr(r.clientWidth, a ? a.clientWidth : 0) - i),
    { width: i, height: o, x: u, y: s }
  );
}
function pu(e) {
  var t = Vt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function sh(e) {
  return ["html", "body", "#document"].indexOf(Pt(e)) >= 0
    ? e.ownerDocument.body
    : tt(e) && pu(e)
      ? e
      : sh(Qi(e));
}
function va(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = sh(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = $e(n),
    o = a ? [i].concat(i.visualViewport || [], pu(n) ? n : []) : n,
    u = t.concat(o);
  return a ? u : u.concat(va(Qi(o)));
}
function Ls(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Ik(e, t) {
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
function rf(e, t, r) {
  return t === eh ? Ls(Ak(e, r)) : mr(t) ? Ik(t, r) : Ls(jk(ar(e)));
}
function Dk(e) {
  var t = va(Qi(e)),
    r = ["absolute", "fixed"].indexOf(Vt(e).position) >= 0,
    n = r && tt(e) ? La(e) : e;
  return mr(n)
    ? t.filter(function (a) {
        return mr(a) && nh(a, n) && Pt(a) !== "body";
      })
    : [];
}
function Tk(e, t, r, n) {
  var a = t === "clippingParents" ? Dk(e) : [].concat(t),
    i = [].concat(a, [r]),
    o = i[0],
    u = i.reduce(
      function (s, c) {
        var l = rf(e, c, n);
        return (
          (s.top = pr(l.top, s.top)),
          (s.right = Ci(l.right, s.right)),
          (s.bottom = Ci(l.bottom, s.bottom)),
          (s.left = pr(l.left, s.left)),
          s
        );
      },
      rf(e, o, n),
    );
  return (
    (u.width = u.right - u.left),
    (u.height = u.bottom - u.top),
    (u.x = u.left),
    (u.y = u.top),
    u
  );
}
function uh(e) {
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
  var c = a ? du(a) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (i) {
      case Xr:
        s[c] = s[c] - (t[l] / 2 - r[l] / 2);
        break;
      case xa:
        s[c] = s[c] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function Ca(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    i = r.strategy,
    o = i === void 0 ? e.strategy : i,
    u = r.boundary,
    s = u === void 0 ? ek : u,
    c = r.rootBoundary,
    l = c === void 0 ? eh : c,
    d = r.elementContext,
    f = d === void 0 ? na : d,
    h = r.altBoundary,
    v = h === void 0 ? !1 : h,
    p = r.padding,
    g = p === void 0 ? 0 : p,
    b = ih(typeof g != "number" ? g : oh(g, Ma)),
    m = f === na ? tk : na,
    w = e.rects.popper,
    O = e.elements[v ? m : f],
    y = Tk(mr(O) ? O : O.contextElement || ar(e.elements.popper), s, l, o),
    S = Zr(e.elements.reference),
    C = uh({ reference: S, element: w, placement: a }),
    I = Ls(Object.assign({}, w, C)),
    T = f === na ? I : S,
    P = {
      top: y.top - T.top + b.top,
      bottom: T.bottom - y.bottom + b.bottom,
      left: y.left - T.left + b.left,
      right: T.right - y.right + b.right,
    },
    M = e.modifiersData.offset;
  if (f === na && M) {
    var B = M[a];
    Object.keys(P).forEach(function (z) {
      var V = [nt, rt].indexOf(z) >= 0 ? 1 : -1,
        J = [Pe, rt].indexOf(z) >= 0 ? "y" : "x";
      P[z] += B[J] * V;
    });
  }
  return P;
}
function Mk(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    i = r.rootBoundary,
    o = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    c = s === void 0 ? th : s,
    l = en(n),
    d = l
      ? u
        ? Qd
        : Qd.filter(function (v) {
            return en(v) === l;
          })
      : Ma,
    f = d.filter(function (v) {
      return c.indexOf(v) >= 0;
    });
  f.length === 0 && (f = d);
  var h = f.reduce(function (v, p) {
    return ((v[p] = Ca(e, { placement: p, boundary: a, rootBoundary: i, padding: o })[Ct(p)]), v);
  }, {});
  return Object.keys(h).sort(function (v, p) {
    return h[v] - h[p];
  });
}
function Lk(e) {
  if (Ct(e) === uu) return [];
  var t = ui(e);
  return [tf(e), t, tf(t)];
}
function Nk(e) {
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
        w = s || (m || !v ? [ui(g)] : Lk(g)),
        O = [g].concat(w).reduce(function (le, ge) {
          return le.concat(
            Ct(ge) === uu
              ? Mk(t, {
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
        T = O[0],
        P = 0;
      P < O.length;
      P++
    ) {
      var M = O[P],
        B = Ct(M),
        z = en(M) === Xr,
        V = [Pe, rt].indexOf(B) >= 0,
        J = V ? "width" : "height",
        G = Ca(t, { placement: M, boundary: l, rootBoundary: d, altBoundary: f, padding: c }),
        U = V ? (z ? nt : Ae) : z ? rt : Pe;
      y[J] > S[J] && (U = ui(U));
      var X = ui(U),
        F = [];
      if (
        (i && F.push(G[B] <= 0),
        u && F.push(G[U] <= 0, G[X] <= 0),
        F.every(function (le) {
          return le;
        }))
      ) {
        ((T = M), (I = !1));
        break;
      }
      C.set(M, F);
    }
    if (I)
      for (
        var j = v ? 3 : 1,
          be = function (ge) {
            var ce = O.find(function (Ue) {
              var Oe = C.get(Ue);
              if (Oe)
                return Oe.slice(0, ge).every(function (it) {
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
const Fk = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Nk,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function nf(e, t, r) {
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
function af(e) {
  return [Pe, nt, rt, Ae].some(function (t) {
    return e[t] >= 0;
  });
}
function $k(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    o = Ca(t, { elementContext: "reference" }),
    u = Ca(t, { altBoundary: !0 }),
    s = nf(o, n),
    c = nf(u, a, i),
    l = af(s),
    d = af(c);
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
const zk = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: $k,
};
function Bk(e, t, r) {
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
function qk(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    i = a === void 0 ? [0, 0] : a,
    o = th.reduce(function (l, d) {
      return ((l[d] = Bk(d, t.rects, i)), l);
    }, {}),
    u = o[t.placement],
    s = u.x,
    c = u.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o));
}
const Uk = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: qk };
function Vk(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = uh({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const Gk = { name: "popperOffsets", enabled: !0, phase: "read", fn: Vk, data: {} };
function Hk(e) {
  return e === "x" ? "y" : "x";
}
function Wk(e) {
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
    g = Ca(t, { boundary: s, rootBoundary: c, padding: d, altBoundary: l }),
    b = Ct(t.placement),
    m = en(t.placement),
    w = !m,
    O = du(b),
    y = Hk(O),
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
        V = O === "y" ? Pe : Ae,
        J = O === "y" ? rt : nt,
        G = O === "y" ? "height" : "width",
        U = S[O],
        X = U + g[V],
        F = U - g[J],
        j = h ? -I[G] / 2 : 0,
        be = m === Xr ? C[G] : I[G],
        oe = m === Xr ? -I[G] : -C[G],
        ue = t.elements.arrow,
        le = h && ue ? lu(ue) : { width: 0, height: 0 },
        ge = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : ah(),
        ce = ge[V],
        Ue = ge[J],
        Oe = fa(0, C[G], le[G]),
        it = w ? C[G] / 2 - j - Oe - ce - P.mainAxis : be - Oe - ce - P.mainAxis,
        pe = w ? -C[G] / 2 + j + Oe + Ue + P.mainAxis : oe + Oe + Ue + P.mainAxis,
        Ve = t.elements.arrow && La(t.elements.arrow),
        Er = Ve ? (O === "y" ? Ve.clientTop || 0 : Ve.clientLeft || 0) : 0,
        Dt = (z = M?.[O]) != null ? z : 0,
        ke = U + it - Dt - Er,
        Se = U + pe - Dt,
        Gt = fa(h ? Ci(X, ke) : X, U, h ? pr(F, Se) : F);
      ((S[O] = Gt), (B[O] = Gt - U));
    }
    if (u) {
      var bt,
        ot = O === "x" ? Pe : Ae,
        Ht = O === "x" ? rt : nt,
        Ge = S[y],
        De = y === "y" ? "height" : "width",
        Ee = Ge + g[ot],
        st = Ge - g[Ht],
        Wt = [Pe, Ae].indexOf(b) !== -1,
        Na = (bt = M?.[y]) != null ? bt : 0,
        Fa = Wt ? Ee : Ge - C[De] - I[De] - Na + P.altAxis,
        $a = Wt ? Ge + C[De] + I[De] - Na - P.altAxis : st,
        za = h && Wt ? bk(Fa, Ge, $a) : fa(h ? Fa : Ee, Ge, h ? $a : st);
      ((S[y] = za), (B[y] = za - Ge));
    }
    t.modifiersData[n] = B;
  }
}
const Kk = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Wk,
  requiresIfExists: ["offset"],
};
function Yk(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Jk(e) {
  return e === $e(e) || !tt(e) ? fu(e) : Yk(e);
}
function Xk(e) {
  var t = e.getBoundingClientRect(),
    r = Qr(t.width) / e.offsetWidth || 1,
    n = Qr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Qk(e, t, r) {
  r === void 0 && (r = !1);
  var n = tt(t),
    a = tt(t) && Xk(t),
    i = ar(t),
    o = Zr(e, a, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Pt(t) !== "body" || pu(i)) && (u = Jk(t)),
      tt(t) ? ((s = Zr(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : i && (s.x = vu(i))),
    {
      x: o.left + u.scrollLeft - s.x,
      y: o.top + u.scrollTop - s.y,
      width: o.width,
      height: o.height,
    }
  );
}
function Zk(e) {
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
function eS(e) {
  var t = Zk(e);
  return dk.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function tS(e) {
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
function rS(e) {
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
var of = { placement: "bottom", modifiers: [], strategy: "absolute" };
function sf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function nS(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    i = a === void 0 ? of : a;
  return function (u, s, c) {
    c === void 0 && (c = i);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, of, i),
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
              reference: mr(u) ? va(u) : u.contextElement ? va(u.contextElement) : [],
              popper: va(s),
            }));
          var w = eS(rS([].concat(n, l.options.modifiers)));
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
            var b = l.elements,
              m = b.reference,
              w = b.popper;
            if (sf(m, w)) {
              ((l.rects = {
                reference: Qk(m, La(w), l.options.strategy === "fixed"),
                popper: lu(w),
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
                var y = l.orderedModifiers[O],
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
        update: tS(function () {
          return new Promise(function (g) {
            (h.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (p(), (f = !0));
        },
      };
    if (!sf(u, s)) return h;
    h.setOptions(c).then(function (g) {
      !f && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function v() {
      l.orderedModifiers.forEach(function (g) {
        var b = g.name,
          m = g.options,
          w = m === void 0 ? {} : m,
          O = g.effect;
        if (typeof O == "function") {
          var y = O({ state: l, name: b, instance: h, options: w }),
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
var aS = [Ck, Gk, Ek, pk, Uk, Fk, Kk, wk, zk],
  iS = nS({ defaultModifiers: aS }),
  rs,
  uf;
function oS() {
  if (uf) return rs;
  uf = 1;
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
    (rs = function (o, u) {
      try {
        return a(o, u);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    rs
  );
}
var sS = oS();
const uS = rr(sS);
var cS = [],
  lS = function (t, r, n) {
    n === void 0 && (n = {});
    var a = _.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || cS,
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
            Ri.flushSync(function () {
              s({
                styles: Jd(
                  p.map(function (g) {
                    return [g, v.styles[g] || {}];
                  }),
                ),
                attributes: Jd(
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
          return uS(a.current, f) ? a.current || f : ((a.current = f), f);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c],
      ),
      d = _.useRef();
    return (
      Xd(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      Xd(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || iS,
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
  dS = function () {},
  fS = function () {
    return Promise.resolve(null);
  },
  vS = [];
function pS(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    i = e.modifiers,
    o = i === void 0 ? vS : i,
    u = e.referenceElement,
    s = e.onFirstUpdate,
    c = e.innerRef,
    l = e.children,
    d = _.useContext(JO),
    f = _.useState(null),
    h = f[0],
    v = f[1],
    p = _.useState(null),
    g = p[0],
    b = p[1];
  _.useEffect(
    function () {
      ZO(c, h);
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
    w = lS(u || d, h, m),
    O = w.state,
    y = w.styles,
    S = w.forceUpdate,
    C = w.update,
    I = _.useMemo(
      function () {
        return {
          ref: v,
          style: y.popper,
          placement: O ? O.placement : r,
          hasPopperEscaped:
            O && O.modifiersData.hide ? O.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            O && O.modifiersData.hide ? O.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: y.arrow, ref: b },
          forceUpdate: S || dS,
          update: C || fS,
        };
      },
      [v, b, r, O, y, C, S],
    );
  return XO(l)(I);
}
function hS(e) {
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
var Ns = 5,
  gS = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: Ns,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function bS() {
  return null;
}
var _S = [0, 8];
function yS(e) {
  var t = e.children,
    r = t === void 0 ? bS : t,
    n = e.offset,
    a = n === void 0 ? _S : n,
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
            options: { padding: Ns, rootBoundary: h ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [p, g] } },
          y = h ? hS({ viewportPadding: Ns }) : [];
        return [].concat(gS, [w, O], Te(y));
      },
      [p, g, h],
    ),
    m = _.useMemo(
      function () {
        return c == null ? b : [].concat(Te(b), Te(c));
      },
      [b, c],
    );
  return k.createElement(pS, { modifiers: m, placement: o, strategy: d, referenceElement: s }, r);
}
var ch = "atlaskit-portal-container",
  lh = "body > .atlaskit-portal-container",
  dh = "atlaskit-portal",
  mS = function (t) {
    var r = document.createElement("div");
    return ((r.className = dh), (r.style.zIndex = "".concat(t)), r);
  },
  fh = function () {
    return document.body;
  },
  vh = function () {
    var t = document.querySelector(lh);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = ch),
        (n.style.display = "flex"),
        (r = fh()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  wS = function (t) {
    vh().removeChild(t);
  },
  OS = function (t) {
    t.parentElement || vh().appendChild(t);
  },
  ph = function () {
    return document !== void 0;
  },
  kS = function (t) {
    if (ph()) {
      var r = document.createElement("div");
      return ((r.className = dh), (r.style.zIndex = "".concat(t)), r);
    }
  },
  SS = function () {
    if (ph()) {
      var t = document.querySelector(lh);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = ch),
          (n.style.display = "flex"),
          (r = fh()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function ES(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useMemo(
      function () {
        return mS(t);
      },
      [t],
    );
  return (
    OS(n),
    _.useEffect(
      function () {
        return function () {
          wS(n);
        };
      },
      [n],
    ),
    Ri.createPortal(r, n)
  );
}
var hh = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function xS(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useState(null),
    a = K(n, 2),
    i = a[0],
    o = a[1];
  hh(
    function () {
      var s = kS(t);
      o(s);
      var c = SS();
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
  var u = k.createElement(_.Suspense, { fallback: null }, r);
  return i ? Ri.createPortal(u, i) : null;
}
var CS = function (t) {
    var r = _.useState(!1),
      n = K(r, 2),
      a = n[0],
      i = n[1],
      o = _.useState(function () {
        return t === "layoutEffect" ? hh : _.useEffect;
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
  RS = "akPortalMount",
  PS = "akPortalUnmount",
  cf = {
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
  AS = function (t) {
    return cf.hasOwnProperty(t) ? cf[t] : null;
  },
  jS = function (t, r) {
    var n = { layer: AS(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function lf(e, t) {
  var r = jS(e, t);
  window.dispatchEvent(r);
}
var IS = function (t) {
  var r = Number(t);
  _.useEffect(
    function () {
      return (
        lf(RS, r),
        function () {
          lf(PS, r);
        }
      );
    },
    [r],
  );
};
function DS(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    i = a === void 0 ? "effect" : a,
    o = CS(i);
  return (
    IS(r),
    Ne("platform_design_system_team_portal_logic_r18_fix")
      ? k.createElement(xS, { zIndex: r }, n)
      : o
        ? k.createElement(ES, { zIndex: r }, n)
        : null
  );
}
var pa = new Set(),
  Ra = null;
function df() {
  if (!Ra) {
    Ra = Ki.bindAll(window, [
      { type: "dragend", listener: ns },
      { type: "pointerdown", listener: ns },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            ns();
          };
        })(),
      },
    ]);
    var e = Array.from(pa);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function ns() {
  var e;
  ((e = Ra) === null || e === void 0 || e(), (Ra = null));
  var t = Array.from(pa);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function TS() {
  return Ki.bindAll(window, [
    { type: "dragstart", listener: df },
    { type: "dragenter", listener: df },
  ]);
}
var Za = null;
function MS(e) {
  return (
    Za || (Za = TS()),
    pa.add(e),
    e.onRegister({ isDragging: Ra !== null }),
    function () {
      if ((pa.delete(e), pa.size === 0)) {
        var r;
        ((r = Za) === null || r === void 0 || r(), (Za = null));
      }
    }
  );
}
var ha = null;
function sa() {
  ha != null && (window.clearTimeout(ha), (ha = null));
}
function ff(e, t) {
  (sa(),
    (ha = window.setTimeout(function () {
      ((ha = null), e());
    }, t)));
}
var _t = null;
function LS(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(_t && _t.entry === e);
  }
  function n() {
    r() && (sa(), (_t = null));
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
        ((t = "shown"), sa());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), sa(), e.show({ isImmediate: !1 }));
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
          ff(function () {
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
    (_t && (sa(), _t.entry.hide({ isImmediate: !0 }), _t.entry.done(), (_t = null)),
      (_t = { entry: e, isVisible: c }));
    function v() {
      ((t = "shown"), e.show({ isImmediate: h }));
    }
    if (h) {
      v();
      return;
    }
    ((t = "waiting-to-show"), ff(v, e.delay));
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
function NS(e, t) {
  var r = xw();
  return t ? "".concat(r(e)) : void 0;
}
var vf = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81u0j _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d7jlr _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7",
  },
  FS = function (t) {
    var r = t.shortcut;
    return _.createElement(
      "div",
      { className: R([vf.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return _.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: R([vf.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  gh = _.forwardRef(function (t, r) {
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
        d && Ne("platform-dst-tooltip-shortcuts") && _.createElement(FS, { shortcut: d }),
      ),
    );
  });
gh.displayName = "TooltipPrimitive";
var as = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _85i5v77o _1q51v77o _y4ti12x7 _bozg12x7 _slp31hna",
    baseRefreshedPadding: "_1q511b66 _85i51b66",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  bh = _.forwardRef(function (t, r) {
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
      gh,
      {
        ref: r,
        style: n,
        className: R([
          as.base,
          Ne("platform-dst-tooltip-shortcuts") && as.baseRefreshedPadding,
          o && as.truncate,
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
bh.displayName = "TooltipContainer";
function pf(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function hf(e, t) {
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
      ? hf(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : hf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var $S = Cw.tooltip(),
  gf = {
    componentName: "tooltip",
    packageName: "@atlaskit/tooltip",
    packageVersion: "0.0.0-development",
  },
  zS = { top: "bottom", bottom: "top", left: "right", right: "left" },
  BS = function (t) {
    return t.split("-")[0];
  };
function qS(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    i = a === void 0 ? "bottom" : a,
    o = e.content,
    u = e.truncate,
    s = u === void 0 ? !1 : u,
    c = e.component,
    l = c === void 0 ? bh : c,
    d = e.tag,
    f = d === void 0 ? "div" : d,
    h = e.testId,
    v = e.delay,
    p = v === void 0 ? 300 : v,
    g = e.onShow,
    b = g === void 0 ? we : g,
    m = e.onHide,
    w = m === void 0 ? we : m,
    O = e.canAppear,
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
    X = sl(qr({ fn: b, action: "displayed", analyticsData: T }, gf)),
    F = sl(qr({ fn: w, action: "hidden", analyticsData: T }, gf)),
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
    Oe = _.useCallback(function (L) {
      ge.current = L;
    }, []),
    it = ra(ue),
    pe = ra(X),
    Ve = ra(F),
    Er = ra(p),
    Dt = ra(O),
    ke = _.useRef(!1),
    Se = _.useCallback(function (L) {
      ((j.current = L), (ke.current = !1));
    }, []),
    Gt = _.useCallback(
      function () {
        j.current &&
          (ke.current && Ve.current(), (j.current = null), (ke.current = !1), le("hide"));
      },
      [Ve],
    ),
    bt = _.useCallback(
      function () {
        j.current && (j.current.abort(), ke.current && Ve.current(), (j.current = null));
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
    return MS({
      onRegister: function (re) {
        var Tt = re.isDragging;
        ot.current = Tt;
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
  var Ht = _.useCallback(
      function (L) {
        var re;
        if (!ot.current) {
          if ((j.current && !j.current.isActive() && bt(), j.current && j.current.isActive())) {
            j.current.keep();
            return;
          }
          if (!(Dt.current && !((re = Dt.current) !== null && re !== void 0 && re.call(Dt)))) {
            var Tt = {
                source: L,
                delay: Er.current,
                show: function (xr) {
                  var sn = xr.isImmediate;
                  (ke.current || ((ke.current = !0), pe.current()),
                    le(sn ? "show-immediate" : "fade-in"));
                },
                hide: function (xr) {
                  var sn = xr.isImmediate;
                  le(sn ? "hide" : "before-fade-out");
                },
                done: Gt,
              },
              ro = LS(Tt);
            Se(ro);
          }
        }
      },
      [Dt, Er, Gt, Se, bt, pe],
    ),
    Ge = _.useCallback(
      function () {
        var L;
        (L = j.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
      },
      [j],
    );
  (AO({ onClose: Ge, isDisabled: ue === "hide" || ue === "fade-out" }),
    _.useEffect(
      function () {
        if (ue === "hide") return we;
        ue === "before-fade-out" && le("fade-out");
        var L = Ki.bind(window, {
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
              ? { type: "mouse", mouse: pf({ left: L.clientX, top: L.clientY }) }
              : { type: "keyboard" };
          Ht(re);
        }
      },
      [n, Ht],
    ),
    Wt = _.useCallback(function (L) {
      (ce.current && L.target === ce.current) ||
        L.defaultPrevented ||
        (L.preventDefault(), j.current && j.current.requestHide({ isImmediate: !1 }));
    }, []),
    Na =
      n === "mouse"
        ? function (L) {
            var re;
            (re = j.current) !== null &&
              re !== void 0 &&
              re.isActive() &&
              (j.current.mousePosition = pf({ left: L.clientX, top: L.clientY }));
          }
        : void 0,
    Fa = _.useCallback(function () {
      if (j.current && j.current.isActive()) {
        j.current.keep();
        return;
      }
    }, []),
    $a = _.useCallback(
      function (L) {
        try {
          if (!L.target.matches(":focus-visible") && Ne("platform-tooltip-focus-visible-new"))
            return;
        } catch {}
        Ht({ type: "keyboard" });
      },
      [Ht],
    ),
    za = _.useCallback(function () {
      j.current && j.current.requestHide({ isImmediate: !1 });
    }, []),
    Oh = _.useCallback(
      function (L) {
        L === "exiting" &&
          it.current === "fade-out" &&
          j.current &&
          j.current.finishHideAnimation();
      },
      [it],
    ),
    kh = f,
    eo = ue !== "hide" && !!o,
    gu = !J && eo,
    bu = ue !== "hide" && ue !== "fade-out",
    Sh = _.useCallback(function () {
      var L;
      (L = j.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
    }, []);
  TO({ isOpen: eo && bu, onClose: Sh });
  var _u = function () {
      var re;
      if (n === "mouse" && (re = j.current) !== null && re !== void 0 && re.mousePosition) {
        var Tt;
        return (Tt = j.current) === null || Tt === void 0 ? void 0 : Tt.mousePosition;
      }
      return ge.current || void 0;
    },
    on = NS("tooltip", gu),
    to = {
      onMouseOver: st,
      onMouseOut: Wt,
      onMouseMove: Na,
      onMouseDown: De,
      onClick: Ee,
      onFocus: $a,
      onBlur: za,
    };
  h && (to["data-testid"] = "".concat(h, "--container"));
  var yu = typeof t == "function";
  _.useEffect(
    function () {
      if (!yu) {
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
    [yu, on],
  );
  var mu = gu
    ? k.createElement(
        "span",
        { "data-testid": h ? "".concat(h, "-hidden") : void 0, hidden: !0, id: on },
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
          t(qr(qr({}, to), {}, { "aria-describedby": on, ref: Oe })),
          mu,
        )
      : k.createElement(kh, te({}, to, { ref: Ue, role: "presentation" }), t, mu),
    eo
      ? k.createElement(
          DS,
          { zIndex: $S },
          k.createElement(yS, { placement: U, referenceElement: _u(), strategy: M }, function (L) {
            var re = L.ref,
              Tt = L.style,
              ro = L.update,
              no = L.placement,
              xr = n === "mouse" ? void 0 : zS[BS(no)];
            return k.createElement(
              Zp,
              { appear: !0 },
              bu &&
                k.createElement(
                  YO,
                  {
                    distance: "constant",
                    entranceDirection: xr,
                    exitDirection: xr,
                    onFinish: Oh,
                    duration: ue !== "show-immediate" ? "medium" : "none",
                  },
                  function (sn) {
                    var Eh = sn.className;
                    return k.createElement(
                      l,
                      {
                        ref: re,
                        className: "Tooltip ".concat(Eh),
                        style: qr(qr({}, Tt), z && { pointerEvents: "none" }),
                        truncate: s,
                        placement: U,
                        testId: _u() ? h : h && "".concat(h, "--unresolved"),
                        onMouseOut: Wt,
                        onMouseOver: Fa,
                        shortcut: G,
                      },
                      typeof o == "function" ? o({ update: ro }) : o,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var US = [
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
  aa = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  bf = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syaz1gjq _k48pmoej" },
  _h = function (t) {
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
      m = ae(t, US),
      w = _.useState(!1),
      O = K(w, 2),
      y = O[0],
      S = O[1],
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
      F = k.createElement(
        Wi,
        { xcss: bf.headCellContainer, onMouseEnter: U, onMouseLeave: X, onFocus: J, onBlur: G },
        k.createElement(
          qS,
          { content: u === yr ? f : v },
          k.createElement(
            pw,
            { onClick: s, xcss: aa.buttonWrapper, "aria-roledescription": g },
            k.createElement(
              Ei,
              { xcss: z ? aa.hideIconHeaderWrapper : aa.visibleHeaderWrapper },
              k.createElement("span", { className: R([bf.text]) }, r),
            ),
            V &&
              k.createElement(
                Ei,
                { xcss: B ? aa.sortIconVisibleWrapper : aa.sortIconHiddenWrapper },
                u === yr
                  ? k.createElement(RO, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : k.createElement(EO, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return k.createElement(
      mO,
      te(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof i != "string" ? i : null,
        },
        m,
        { isSortable: o, sortOrder: u },
      ),
      o ? F : r,
    );
  },
  VS = ["isRanking", "refHeight", "refWidth"];
function GS(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, yh() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var HS = (function (e) {
    function t() {
      return (fe(this, t), GS(this, t, arguments));
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
              o = ae(n, VS),
              u = ry(a, i);
            return k.createElement(_h, te({ inlineStyles: u }, o));
          },
        },
      ])
    );
  })(k.Component),
  WS = OO(HS),
  KS = ["cells"],
  YS = [
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
function JS(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, mh() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function mh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (mh = function () {
    return !!e;
  })();
}
var XS = (function (e) {
    function t(r) {
      var n;
      return (fe(this, t), (n = JS(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      qe(t, e),
      ve(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            mi(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              mi(n.sortKey, n.head);
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
            var v = d ? WS : _h,
              p = i.cells,
              g = ae(i, KS);
            return k.createElement(
              yO,
              te({}, g, { isRanking: l, testId: f && "".concat(f, "--head") }),
              k.createElement(
                "tr",
                null,
                p.map(function (b, m) {
                  var w = b.ascendingSortTooltip,
                    O = b.buttonAriaRoleDescription,
                    y = b.colSpan,
                    S = b.content,
                    C = b.descendingSortTooltip,
                    I = b.isIconOnlyHeader,
                    T = b.isSortable,
                    P = b.key,
                    M = b.shouldTruncate,
                    B = b.testId,
                    z = b.width,
                    V = ae(b, YS),
                    J = "head-cell-".concat(m),
                    G = function () {
                      (n.setState({ activeSortButtonId: J }), T && c(b)());
                    };
                  return k.createElement(
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
  QS = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function ZS(e) {
  switch (e) {
    case ki:
      return yr;
    case yr:
      return ki;
    default:
      return e;
  }
}
var eE = function (t) {
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
      O = w === void 0 ? we : w,
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
      F = t.paginationi18n,
      j =
        F === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : F,
      be = _.useState(!1),
      oe = K(be, 2),
      ue = oe[0],
      le = oe[1],
      ge = _.useRef(null),
      ce = ma({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      Ue = ma({
        fn: U,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    _.useEffect(
      function () {
        (mi(o, n), ty(n));
      },
      [o, n],
    );
    var Oe = function (Ee) {
        return function () {
          var st = Ee.key;
          if (st) {
            if (ce && M && st === o && u === ki) {
              ce({ key: null, sortOrder: null, item: Ee });
              return;
            }
            var Wt = st !== o ? yr : ZS(u);
            ce && ce({ key: st, item: Ee, sortOrder: Wt });
          }
        };
      },
      it = function (Ee, st) {
        O(Ee, st);
      },
      pe = function (Ee) {
        (le(!0), J(Ee));
      },
      Ve = function (Ee) {
        (le(!1), Ue(Ee));
      },
      Er = function () {
        return X || (Qv(i || [], I, m).length > 2 ? Si : ky);
      },
      Dt = function () {
        return v ? k.createElement(Py, { testId: l }) : T && k.createElement(Ay, { testId: l }, T);
      },
      ke = i && i.length,
      Se,
      Gt = !1;
    (d && Number.isInteger(d) && m && ke && ke <= d
      ? ((Se = Math.ceil(d / m)), (Gt = !0))
      : (Se = ke && m ? Math.ceil(ke / m) : 0),
      (Se = Se < 1 ? 1 : Se));
    var bt = I > Se ? Se : I,
      ot = !!ke,
      Ht = Er(),
      Ge = Dt();
    return k.createElement(
      k.Fragment,
      null,
      k.createElement(
        dp,
        {
          isLoading: v && ot,
          spinnerSize: Ht,
          targetRef: function () {
            return ge.current;
          },
          testId: l,
          loadingLabel: s,
        },
        k.createElement(
          xy,
          { isFixedSize: g, "aria-label": f, hasDataRow: ot, testId: l, isLoading: v },
          !!r && k.createElement(Cy, null, r),
          n &&
            k.createElement(XS, {
              head: n,
              onSort: Oe,
              sortKey: o,
              sortOrder: u,
              isRanking: ue,
              isRankable: M,
              testId: l,
            }),
          ot &&
            k.createElement(rE, {
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
              isTotalPagesControlledExternally: Gt,
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
        : k.createElement(
            Ry,
            { testId: l },
            k.createElement(gO, {
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
        k.createElement(cp, { isLoading: v, spinnerSize: Si, testId: l, loadingLabel: s }, Ge),
    );
  },
  tE = _.lazy(function () {
    return oy(
      () => import("./body-BF2aP2Lb.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  rE = _.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      i = t.isRanking,
      o = t.onRankStart,
      u = t.onRankEnd,
      s = t.isRankingDisabled,
      c = ae(t, QS),
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
    var p = k.createElement(Gy, te({ ref: r }, c));
    return l && h
      ? k.createElement(
          Wy,
          { fallback: p },
          k.createElement(
            _.Suspense,
            { fallback: p },
            k.createElement(
              tE,
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
function nE(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, wh() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var Zi = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = nE(this, t, [].concat(a))),
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
        var f = ny(o, c, l, d);
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
            O = s.paginationi18n,
            y = s.onRankStart,
            S = s.onPageRowsUpdate,
            C = s.testId,
            I = s.label;
          return k.createElement(eE, {
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
})(k.Component);
x(Zi, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: we,
  onSort: we,
  rowsPerPage: 1 / 0,
});
const aE = (e, t) => {
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
  hu = (e, t) => ({ cells: aE(e, t) }),
  iE = Ui(() => {
    const { usersStore: e } = Gi(),
      t = hu(!0, "SLOW_QUERY"),
      r = e.slowQueries;
    return !r || r.length === 0
      ? E.jsx("div", { children: "SlowQuery is EMPTY" })
      : E.jsx("div", {
          children: E.jsxs("div", {
            children: [
              E.jsx(Zi, {
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
                                  (e.showPlan(n.parsedPlan, n.plan), Ys.saveState("PLAN"));
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
  oE = Ui(() => {
    const { usersStore: e } = Gi(),
      t = hu(!0, "PLAN"),
      r = e.plan;
    return !r || r.length === 0
      ? E.jsxs("div", { children: ["$", e.planString] })
      : E.jsx("div", {
          children: E.jsxs("div", {
            children: [
              E.jsx(Zi, {
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
  sE = Ui(() => {
    const { usersStore: e } = Gi(),
      t = hu(!0, "HISTORY"),
      r = e.history;
    return !r || r.length === 0
      ? E.jsx("div", { children: "Query history is EMPTY" })
      : E.jsx("div", {
          children: E.jsxs("div", {
            children: [
              E.jsx(Zi, {
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
                                  (e.showPlan(n.parsedPlan, n.plan), Ys.saveState("PLAN"));
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
function uE() {
  const { usersStore: e, stateStore: t } = Gi();
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
          E.jsx(iE, {}),
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
          E.jsx(sE, {}),
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
          E.jsx(oE, {}),
        ],
      });
    default:
      return E.jsxs("div", { children: ["ERROR: unsupported state ", t.state] });
  }
}
const cE = Ui(uE),
  lE = document.getElementById("root"),
  dE = xh.createRoot(lE),
  _f = () => {
    dE.render(E.jsx(Kv, { ...Yv, children: E.jsx(cE, {}) }));
  };
Re.view.theme
  .enable()
  .then(() => {
    _f();
  })
  .catch((e) => {
    (console.error(e.message), _f());
  });
export {
  k as R,
  $y as T,
  qe as _,
  ve as a,
  Es as b,
  fe as c,
  Be as d,
  Y as e,
  K as f,
  x as g,
  ae as h,
  Ki as i,
  Te as j,
  te as k,
  Z0 as l,
  Bt as m,
  It as n,
  R as o,
  Ny as p,
  ry as q,
  _ as r,
  Ty as s,
  OO as w,
};
