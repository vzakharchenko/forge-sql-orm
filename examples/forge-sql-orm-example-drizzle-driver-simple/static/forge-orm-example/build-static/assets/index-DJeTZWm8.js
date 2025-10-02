const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-DNUO6JLD.js",
      "./react-dom-vendor-DTSHKYJW.js",
      "./client-core-vendor-Bz5kMKC-.js",
      "./lodash-vendor-Ce0R6Syi.js",
      "./body-C3aXNd8H.css",
    ]),
) => i.map((i) => d[i]);
import { r as dt, a as gi, c as Qp } from "./react-dom-vendor-DTSHKYJW.js";
import { g as er, a as ks, r as Zt, s as Ge } from "./client-core-vendor-Bz5kMKC-.js";
import { r as eh } from "./lodash-vendor-Ce0R6Syi.js";
function th(e, t) {
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
var Vi = { exports: {} },
  tn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var au;
function rh() {
  if (au) return tn;
  au = 1;
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
  return ((tn.Fragment = r), (tn.jsx = o), (tn.jsxs = o), tn);
}
var iu;
function nh() {
  return (iu || ((iu = 1), (Vi.exports = rh())), Vi.exports);
}
var M = nh(),
  y = dt();
const k = er(y),
  ou = th({ __proto__: null, default: k }, [y]);
var Gi = {},
  Vo = function (e, t) {
    return (
      (Vo =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      Vo(e, t)
    );
  };
function Vd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Vo(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var Xa = function () {
  return (
    (Xa =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }),
    Xa.apply(this, arguments)
  );
};
function Gd(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function Hd(e, t, r, n) {
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
function Wd(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function Kd(e, t, r, n, a, i) {
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
function Yd(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function Jd(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Xd(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function Zd(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Qd(e, t, r, n) {
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
function ef(e, t) {
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
var bi = Object.create
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
function tf(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && bi(t, e, r);
}
function Za(e) {
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
function Ss(e, t) {
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
function rf() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Ss(arguments[t]));
  return e;
}
function nf() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var i = arguments[t], o = 0, s = i.length; o < s; o++, a++) n[a] = i[o];
  return n;
}
function af(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, i; n < a; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function zr(e) {
  return this instanceof zr ? ((this.v = e), this) : new zr(e);
}
function of(e, t, r) {
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
function sf(e) {
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
function uf(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof Za == "function" ? Za(e) : e[Symbol.iterator]()),
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
function cf(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var ah = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Go = function (e) {
    return (
      (Go =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      Go(e)
    );
  };
function lf(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = Go(e), n = 0; n < r.length; n++) r[n] !== "default" && bi(t, e, r[n]);
  return (ah(t, e), t);
}
function df(e) {
  return e && e.__esModule ? e : { default: e };
}
function ff(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function vf(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function pf(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function hf(e, t, r) {
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
var ih =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function gf(e) {
  function t(i) {
    ((e.error = e.hasError ? new ih(i, e.error, "An error was suppressed during disposal.") : i),
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
function bf(e, t) {
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
const oh = {
    __extends: Vd,
    __assign: Xa,
    __rest: Gd,
    __decorate: Hd,
    __param: Wd,
    __esDecorate: Kd,
    __runInitializers: Yd,
    __propKey: Jd,
    __setFunctionName: Xd,
    __metadata: Zd,
    __awaiter: Qd,
    __generator: ef,
    __createBinding: bi,
    __exportStar: tf,
    __values: Za,
    __read: Ss,
    __spread: rf,
    __spreadArrays: nf,
    __spreadArray: af,
    __await: zr,
    __asyncGenerator: of,
    __asyncDelegator: sf,
    __asyncValues: uf,
    __makeTemplateObject: cf,
    __importStar: lf,
    __importDefault: df,
    __classPrivateFieldGet: ff,
    __classPrivateFieldSet: vf,
    __classPrivateFieldIn: pf,
    __addDisposableResource: hf,
    __disposeResources: gf,
    __rewriteRelativeImportExtension: bf,
  },
  sh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: hf,
        get __assign() {
          return Xa;
        },
        __asyncDelegator: sf,
        __asyncGenerator: of,
        __asyncValues: uf,
        __await: zr,
        __awaiter: Qd,
        __classPrivateFieldGet: ff,
        __classPrivateFieldIn: pf,
        __classPrivateFieldSet: vf,
        __createBinding: bi,
        __decorate: Hd,
        __disposeResources: gf,
        __esDecorate: Kd,
        __exportStar: tf,
        __extends: Vd,
        __generator: ef,
        __importDefault: df,
        __importStar: lf,
        __makeTemplateObject: cf,
        __metadata: Zd,
        __param: Wd,
        __propKey: Jd,
        __read: Ss,
        __rest: Gd,
        __rewriteRelativeImportExtension: bf,
        __runInitializers: Yd,
        __setFunctionName: Xd,
        __spread: rf,
        __spreadArray: af,
        __spreadArrays: nf,
        __values: Za,
        default: oh,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  qt = ks(sh);
var rn = {},
  su;
function uh() {
  return (
    su ||
      ((su = 1),
      Object.defineProperty(rn, "__esModule", { value: !0 }),
      (rn.NavigationTarget = void 0),
      (rn.NavigationTarget = {
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
    rn
  );
}
var Hi = {},
  Wi = {},
  nn = {},
  an = {},
  uu;
function ft() {
  if (uu) return an;
  ((uu = 1), Object.defineProperty(an, "__esModule", { value: !0 }), (an.BridgeAPIError = void 0));
  class e extends Error {}
  return ((an.BridgeAPIError = e), an);
}
var cu;
function we() {
  if (cu) return nn;
  ((cu = 1), Object.defineProperty(nn, "__esModule", { value: !0 }), (nn.getCallBridge = void 0));
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
  return ((nn.getCallBridge = r), nn);
}
var on = {},
  lu;
function yf() {
  if (lu) return on;
  ((lu = 1), Object.defineProperty(on, "__esModule", { value: !0 }), (on.withRateLimiter = void 0));
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
  return ((on.withRateLimiter = t), on);
}
var du;
function ch() {
  return (
    du ||
      ((du = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = we(),
          r = ft(),
          n = yf(),
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
      })(Wi)),
    Wi
  );
}
var fu;
function lh() {
  return (
    fu ||
      ((fu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), qt.__exportStar(ch(), e));
      })(Hi)),
    Hi
  );
}
var Ki = {},
  sn = {},
  Yi = {},
  vu;
function mf() {
  return (
    vu ||
      ((vu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = we(),
          r = ft(),
          n = yf(),
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
              _ = { ...(v ? g : b) };
            if (_ && _.headers)
              for (const w in _.headers)
                Array.isArray(_.headers[w]) && (_.headers[w] = _.headers[w].join(","));
            return _;
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
      })(Yi)),
    Yi
  );
}
var pu;
function dh() {
  if (pu) return sn;
  ((pu = 1), Object.defineProperty(sn, "__esModule", { value: !0 }), (sn.invokeRemote = void 0));
  const e = mf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((sn.invokeRemote = t), sn);
}
var un = {},
  hu;
function fh() {
  if (hu) return un;
  ((hu = 1), Object.defineProperty(un, "__esModule", { value: !0 }), (un.invokeService = void 0));
  const e = mf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((un.invokeService = t), un);
}
var gu;
function vh() {
  return (
    gu ||
      ((gu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = qt;
        (t.__exportStar(dh(), e), t.__exportStar(fh(), e));
      })(Ki)),
    Ki
  );
}
var Ji = {},
  cn = {},
  ln = {},
  bu;
function ph() {
  if (bu) return ln;
  ((bu = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.submit = void 0));
  const e = we(),
    t = ft(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((ln.submit = n), ln);
}
var dn = {},
  yu;
function hh() {
  if (yu) return dn;
  ((yu = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.close = void 0));
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
  return ((dn.close = n), dn);
}
var fn = {},
  mu;
function gh() {
  if (mu) return fn;
  ((mu = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.open = void 0));
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
  return ((fn.open = n), fn);
}
var vn = {},
  _u;
function bh() {
  if (_u) return vn;
  ((_u = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.refresh = void 0));
  const e = we(),
    t = ft(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((vn.refresh = n), vn);
}
var pn = {},
  wu;
function yh() {
  if (wu) return pn;
  ((wu = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.createHistory = void 0));
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
  return ((pn.createHistory = r), pn);
}
var hn = {},
  Xi = {},
  jt = {},
  Ou;
function _f() {
  return (
    Ou ||
      ((Ou = 1),
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
  ku;
function mh() {
  if (ku) return nr;
  ((ku = 1),
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
var gn = {},
  Zi = {},
  Su;
function wf() {
  return (
    Su ||
      ((Su = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = qt.__importDefault(eh()),
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
      })(Zi)),
    Zi
  );
}
var Eu;
function _h() {
  if (Eu) return gn;
  ((Eu = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.Translator = void 0));
  const e = wf();
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
  return ((gn.Translator = t), gn);
}
var bn = {},
  xu;
function wh() {
  if (xu) return bn;
  ((xu = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.ensureLocale = void 0));
  const e = _f(),
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
  return ((bn.ensureLocale = a), bn);
}
var Qi = {},
  Cu;
function Oh() {
  return (
    Cu ||
      ((Cu = 1),
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
      })(Qi)),
    Qi
  );
}
var eo = {},
  Ru;
function kh() {
  return (Ru || ((Ru = 1), Object.defineProperty(eo, "__esModule", { value: !0 })), eo);
}
var Pu;
function Of() {
  return (
    Pu ||
      ((Pu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = qt;
        (t.__exportStar(_f(), e),
          t.__exportStar(mh(), e),
          t.__exportStar(_h(), e),
          t.__exportStar(wh(), e));
        var r = wf();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Oh();
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
          t.__exportStar(kh(), e));
      })(Xi)),
    Xi
  );
}
var Au;
function Sh() {
  if (Au) return hn;
  ((Au = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.getContext = void 0));
  const e = we(),
    t = Of(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const i = await r("getContext"),
        o = i?.locale;
      return (o && (i.locale = (a = (0, t.ensureLocale)(o)) !== null && a !== void 0 ? a : o), i);
    };
  return ((hn.getContext = n), hn);
}
var yn = {},
  ju;
function Eh() {
  if (ju) return yn;
  ((ju = 1),
    Object.defineProperty(yn, "__esModule", { value: !0 }),
    (yn.changeWindowTitle = void 0));
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
  return ((yn.changeWindowTitle = n), yn);
}
var mn = {},
  Iu;
function xh() {
  if (Iu) return mn;
  ((Iu = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.theme = void 0));
  const t = (0, we().getCallBridge)();
  return ((mn.theme = { enable: () => t("enableTheming") }), mn);
}
var _n = {},
  wn = {},
  to = {},
  ar = {},
  Du;
function kf() {
  if (Du) return ar;
  ((Du = 1),
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
var Tu;
function Ch() {
  return (
    Tu ||
      ((Tu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = kf(),
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
      })(to)),
    to
  );
}
var Mu;
function Sf() {
  if (Mu) return wn;
  ((Mu = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.events = void 0));
  const e = we(),
    t = Ch(),
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
  return ((wn.events = { emit: n, on: a }), wn);
}
var Lu;
function Rh() {
  if (Lu) return _n;
  ((Lu = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.emitReadyEvent = void 0));
  const e = Sf(),
    t = Ef(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return ((_n.emitReadyEvent = n), _n);
}
var $u;
function Ef() {
  if ($u) return cn;
  (($u = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.view = void 0));
  const e = ph(),
    t = hh(),
    r = gh(),
    n = bh(),
    a = yh(),
    i = Sh(),
    o = Eh(),
    s = xh(),
    u = Rh();
  return (
    (cn.view = {
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
    cn
  );
}
var Nu;
function xf() {
  return (
    Nu ||
      ((Nu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), qt.__exportStar(Ef(), e));
      })(Ji)),
    Ji
  );
}
var ro = {},
  On = {},
  Fu;
function Ph() {
  if (Fu) return On;
  ((Fu = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.router = void 0));
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
  return ((On.router = { getUrl: r, navigate: n, open: a, reload: i }), On);
}
var Bu;
function Ah() {
  return (
    Bu ||
      ((Bu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), qt.__exportStar(Ph(), e));
      })(ro)),
    ro
  );
}
var no = {},
  kn = {},
  zu;
function jh() {
  if (zu) return kn;
  ((zu = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.Modal = void 0));
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
  return ((kn.Modal = a), kn);
}
var qu;
function Ih() {
  return (
    qu ||
      ((qu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), qt.__exportStar(jh(), e));
      })(no)),
    no
  );
}
var It = {},
  Sn = {},
  Uu;
function Dh() {
  if (Uu) return Sn;
  ((Uu = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.productFetchApi = void 0));
  const e = kf(),
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
          _ = b ? (0, e.base64ToBlob)(p, h["content-type"]) : p;
        return new Response(_ || null, { headers: h, status: g, statusText: v });
      };
      return {
        requestConfluence: (o, s) => i("confluence", o, s),
        requestJira: (o, s) => i("jira", o, s),
        requestBitbucket: (o, s) => i("bitbucket", o, s),
      };
    };
  return ((Sn.productFetchApi = n), Sn);
}
var Vu;
function Th() {
  if (Vu) return It;
  Vu = 1;
  var e;
  (Object.defineProperty(It, "__esModule", { value: !0 }),
    (It.requestBitbucket = It.requestJira = It.requestConfluence = void 0));
  const t = we();
  return (
    (e = (0, Dh().productFetchApi)((0, t.getCallBridge)())),
    (It.requestConfluence = e.requestConfluence),
    (It.requestJira = e.requestJira),
    (It.requestBitbucket = e.requestBitbucket),
    It
  );
}
var ao = {},
  En = {},
  Gu;
function Mh() {
  if (Gu) return En;
  ((Gu = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.showFlag = void 0));
  const e = we(),
    t = ft(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var i;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const o = r("showFlag", { ...a, type: (i = a.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await o, r("closeFlag", { id: a.id })) };
    };
  return ((En.showFlag = n), En);
}
var Hu;
function Lh() {
  return (
    Hu ||
      ((Hu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = Mh();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(ao)),
    ao
  );
}
var io = {},
  Wu;
function $h() {
  return (
    Wu ||
      ((Wu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), qt.__exportStar(Sf(), e));
      })(io)),
    io
  );
}
var oo = {},
  xn = {},
  Ku;
function Nh() {
  if (Ku) return xn;
  ((Ku = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.realtime = void 0));
  const t = (0, we().getCallBridge)(),
    r = (o, s, u) => t("publishRealtimeChannel", { channelName: o, eventPayload: s, options: u }),
    n = (o, s, u) => t("subscribeRealtimeChannel", { channelName: o, onEvent: s, options: u }),
    a = (o, s, u) =>
      t("publishRealtimeChannel", { channelName: o, eventPayload: s, options: u, isGlobal: !0 }),
    i = (o, s, u) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: s, options: u, isGlobal: !0 });
  return ((xn.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: i }), xn);
}
var so = {},
  Yu;
function Fh() {
  return (
    Yu ||
      ((Yu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Jira = void 0),
          (function (t) {
            ((t.Board = "board"), (t.Issue = "issue"), (t.Project = "project"));
          })(e.Jira || (e.Jira = {})));
      })(so)),
    so
  );
}
var Ju;
function Bh() {
  return (
    Ju ||
      ((Ju = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Jira = e.realtime = void 0));
        var t = Nh();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = Fh();
        Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return r.Jira;
          },
        });
      })(oo)),
    oo
  );
}
var Dt = {},
  Xu;
function zh() {
  if (Xu) return Dt;
  ((Xu = 1),
    Object.defineProperty(Dt, "__esModule", { value: !0 }),
    (Dt.createTranslationFunction = Dt.getTranslations = Dt.resetTranslationsCache = void 0));
  const e = Of(),
    t = xf(),
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
var Zu;
function qh() {
  return (
    Zu ||
      ((Zu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = qt;
        var r = uh();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(lh(), e),
          t.__exportStar(vh(), e),
          t.__exportStar(xf(), e),
          t.__exportStar(Ah(), e),
          t.__exportStar(Ih(), e),
          t.__exportStar(Th(), e),
          t.__exportStar(Lh(), e),
          t.__exportStar($h(), e),
          t.__exportStar(Bh(), e),
          (e.i18n = t.__importStar(zh())));
      })(Gi)),
    Gi
  );
}
var Nt = qh();
function de(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ae(e) {
  "@babel/helpers - typeof";
  return (
    (Ae =
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
    Ae(e)
  );
}
function Uh(e, t) {
  if (Ae(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ae(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Cf(e) {
  var t = Uh(e, "string");
  return Ae(t) == "symbol" ? t : t + "";
}
function Qu(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Cf(n.key), n));
  }
}
function fe(e, t, r) {
  return (
    t && Qu(e.prototype, t),
    r && Qu(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Vh(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fe(e, t) {
  if (t && (Ae(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Vh(e);
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
function ia(e, t) {
  return (
    (ia = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    ia(e, t)
  );
}
function Be(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ia(e, t));
}
function x(e, t, r) {
  return (
    (t = Cf(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function _e() {}
function Gh(e) {
  if (Array.isArray(e)) return e;
}
function Hh(e, t) {
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
function Ho(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Rf(e, t) {
  if (e) {
    if (typeof e == "string") return Ho(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Ho(e, t)
          : void 0
    );
  }
}
function Wh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(e, t) {
  return Gh(e) || Hh(e, t) || Rf(e, t) || Wh();
}
var Pf = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  Kh = function (t) {
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
  Qa = function (t, r) {
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
  Yh = function (t, r, n) {
    return t ? { width: r } : {};
  },
  ec = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  Jh = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      i = t.destination,
      o = t.sourceIndex;
    if (!i) return r;
    var s = ec(o, n, a),
      u = ec(i.index, n, a),
      c = r.slice(),
      l = c.splice(s, 1),
      d = K(l, 1),
      f = d[0];
    return (c.splice(u, 0, f), c);
  };
const Xh = "modulepreload",
  Zh = function (e, t) {
    return new URL(e, t).href;
  },
  tc = {},
  Qh = function (t, r, n) {
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
          if (((l = Zh(l, n)), l in tc)) return;
          tc[l] = !0;
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
            ((p.rel = d ? "stylesheet" : Xh),
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
function eg(e, t) {
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
    a = eg(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      ((r = i[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function rc(e, t) {
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
function uo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var tg = (function () {
  function e(t) {
    var r = this;
    (de(this, e),
      x(this, "_isAnalyticsEvent", !0),
      x(this, "clone", function () {
        var n = uo({}, r.payload);
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
          Ae(r) === "object" && (this.payload = uo(uo({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function rg(e) {
  if (Array.isArray(e)) return Ho(e);
}
function ng(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function ag() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function De(e) {
  return rg(e) || ng(e) || Rf(e) || ag();
}
function ig(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Y(e)) !== null; );
  return e;
}
function ei() {
  return (
    (ei =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = ig(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    ei.apply(null, arguments)
  );
}
function og(e, t, r) {
  return (
    (t = Y(t)),
    Fe(e, Af() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Af() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Af = function () {
    return !!e;
  })();
}
function sg(e, t, r, n) {
  var a = ei(Y(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var ug = (function (e) {
  function t(r) {
    var n;
    return (
      de(this, t),
      (n = og(this, t, [r])),
      x(n, "_isUIAnalyticsEvent", !0),
      x(n, "clone", function () {
        if (n.hasFired) return null;
        var a = De(n.context),
          i = De(n.handlers),
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
    Be(t, e),
    fe(t, [
      {
        key: "update",
        value: function (n) {
          return this.hasFired ? this : sg(t, "update", this, 3)([n]);
        },
      },
    ])
  );
})(tg);
function nc(e, t, r, n, a, i, o) {
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
        nc(i, n, a, o, s, "next", u);
      }
      function s(u) {
        nc(i, n, a, o, s, "throw", u);
      }
      o(void 0);
    });
  };
}
var co = { exports: {} },
  lo = { exports: {} },
  ac;
function jf() {
  return (
    ac ||
      ((ac = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(lo)),
    lo.exports
  );
}
var fo = { exports: {} },
  vo = { exports: {} },
  ic;
function If() {
  return (
    ic ||
      ((ic = 1),
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
      })(vo)),
    vo.exports
  );
}
var oc;
function Df() {
  return (
    oc ||
      ((oc = 1),
      (function (e) {
        var t = If();
        function r() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var n,
            a,
            i = typeof Symbol == "function" ? Symbol : {},
            o = i.iterator || "@@iterator",
            s = i.toStringTag || "@@toStringTag";
          function u(g, b, _, w) {
            var O = b && b.prototype instanceof l ? b : l,
              m = Object.create(O.prototype);
            return (
              t(
                m,
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
                })(g, _, w),
                !0,
              ),
              m
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
      })(fo)),
    fo.exports
  );
}
var po = { exports: {} },
  ho = { exports: {} },
  go = { exports: {} },
  sc;
function Tf() {
  return (
    sc ||
      ((sc = 1),
      (function (e) {
        var t = jf(),
          r = If();
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
        var t = Df(),
          r = Tf();
        function n(a, i, o, s, u) {
          return new r(t().w(a, i, o, s), u || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ho)),
    ho.exports
  );
}
var cc;
function cg() {
  return (
    cc ||
      ((cc = 1),
      (function (e) {
        var t = Mf();
        function r(n, a, i, o, s) {
          var u = t(n, a, i, o, s);
          return u.next().then(function (c) {
            return c.done ? c.value : u.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(po)),
    po.exports
  );
}
var bo = { exports: {} },
  lc;
function lg() {
  return (
    lc ||
      ((lc = 1),
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
      })(bo)),
    bo.exports
  );
}
var yo = { exports: {} },
  mo = { exports: {} },
  dc;
function dg() {
  return (
    dc ||
      ((dc = 1),
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
      })(mo)),
    mo.exports
  );
}
var fc;
function fg() {
  return (
    fc ||
      ((fc = 1),
      (function (e) {
        var t = dg().default;
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
      })(yo)),
    yo.exports
  );
}
var vc;
function vg() {
  return (
    vc ||
      ((vc = 1),
      (function (e) {
        var t = jf(),
          r = Df(),
          n = cg(),
          a = Mf(),
          i = Tf(),
          o = lg(),
          s = fg();
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
            return function (_) {
              (g ||
                ((g = {
                  stop: function () {
                    return b(_.a, 2);
                  },
                  catch: function () {
                    return _.v;
                  },
                  abrupt: function (O, m) {
                    return b(_.a, p[O], m);
                  },
                  delegateYield: function (O, m, S) {
                    return ((g.resultName = m), b(_.d, s(O), S));
                  },
                  finish: function (O) {
                    return b(_.f, O);
                  },
                }),
                (b = function (O, m, S) {
                  ((_.p = g.prev), (_.n = g.next));
                  try {
                    return O(m, S);
                  } finally {
                    g.next = _.n;
                  }
                })),
                g.resultName && ((g[g.resultName] = _.v), (g.resultName = void 0)),
                (g.sent = _.v),
                (g.next = _.n));
              try {
                return v.call(this, g);
              } finally {
                ((_.p = g.prev), (_.n = g.next));
              }
            };
          }
          return ((e.exports = u =
            function () {
              return {
                wrap: function (b, _, w, O) {
                  return c.w(h(b), _, w, O && O.reverse());
                },
                isGeneratorFunction: f,
                mark: c.m,
                awrap: function (b, _) {
                  return new t(b, _);
                },
                AsyncIterator: i,
                async: function (b, _, w, O, m) {
                  return (f(_) ? a : n)(h(b), _, w, O, m);
                },
                keys: o,
                values: s,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = u), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(co)),
    co.exports
  );
}
var _o, pc;
function pg() {
  if (pc) return _o;
  pc = 1;
  var e = vg()();
  _o = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return _o;
}
var hg = pg();
const F = er(hg);
var ir = {},
  kr = {},
  Aa = {},
  hc;
function gg() {
  if (hc) return Aa;
  ((hc = 1), Object.defineProperty(Aa, "__esModule", { value: !0 }));
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
  return ((Aa.default = t), Aa);
}
var Sr = {},
  Cn = {},
  gc;
function bg() {
  if (gc) return Cn;
  ((gc = 1),
    Object.defineProperty(Cn, "__esModule", { value: !0 }),
    (Cn._resolveDeltasResponse = void 0));
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
  Cn._resolveDeltasResponse = r;
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
  return Cn;
}
var bc;
function Lf() {
  if (bc) return Sr;
  bc = 1;
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
    r = bg();
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
          const _ =
            g?.hash_used !==
            ((v =
              (h = (p = this._option) === null || p === void 0 ? void 0 : p.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && v !== void 0
              ? v
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: c && !_ ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && c ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: _ ? 0 : g.time,
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
var Rn = {},
  yc;
function yg() {
  if (yc) return Rn;
  ((yc = 1),
    Object.defineProperty(Rn, "__esModule", { value: !0 }),
    (Rn._makeParamStoreGetter = void 0));
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
  return ((Rn._makeParamStoreGetter = c), Rn);
}
var or = {},
  mc;
function mg() {
  if (mc) return or;
  mc = 1;
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
    r = Lf();
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
var _c;
function _g() {
  if (_c) return kr;
  _c = 1;
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
          } catch (_) {
            p(_);
          }
        }
        function v(b) {
          try {
            g(l.throw(b));
          } catch (_) {
            p(_);
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
    r = gg(),
    n = Lf(),
    a = yg(),
    i = mg();
  let o = class Wo extends t.StatsigClientBase {
    static instance(u) {
      const c = (0, t._getStatsigGlobal)().instance(u);
      return c instanceof Wo
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Wo(u ?? "", {}));
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
        _ = b ?? g;
      return (
        this._enqueueExposure(
          u,
          (0, t._createConfigExposure)(this._user, _, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: _ }),
        _
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
        (_) => {
          c?.disableExposureLog ||
            this._enqueueExposure(
              u,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                _,
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
var wc;
function wg() {
  return (
    wc ||
      ((wc = 1),
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
          a = _g();
        ((e.StatsigClient = a.default), r(Zt(), e));
        const i = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = i;
      })(ir)),
    ir
  );
}
var ot = wg(),
  wo = { exports: {} },
  Oc;
function Og() {
  return (
    Oc ||
      ((Oc = 1),
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
              _,
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
              for (w = 1, _ = new Array(b - 1); w < b; w++) _[w - 1] = arguments[w];
              g.fn.apply(g.context, _);
            } else {
              var O = g.length,
                m;
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
                    if (!_) for (m = 1, _ = new Array(b - 1); m < b; m++) _[m - 1] = arguments[m];
                    g[w].fn.apply(g[w].context, _);
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
      })(wo)),
    wo.exports
  );
}
var kg = Og();
const Sg = er(kg);
function kc(e, t) {
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
      ? kc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : kc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ja = "@all-features",
  Eg = (function () {
    function e() {
      (de(this, e), x(this, "eventToValue", new Map()), (this.emitter = new Sg()));
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
            this.emitter.on(ja, r),
            function () {
              n.emitter.off(ja, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(ja),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== ja;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  xg = "fedramp-moderate";
function Cg() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === xg;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Es = (function (e) {
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
  Kn = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  oa = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  Rg = [
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
function Sc(e, t) {
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
function Ko(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Sc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ia = function (t) {
    return Ko({ perimeter: Cg() ? oa.FEDRAMP_MODERATE : oa.COMMERCIAL }, t);
  },
  Pn = function (t, r) {
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
  Ec = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  Pg = function (t) {
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
    var f = ae(t, Rg);
    return Ko(
      Ko({}, f),
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
  Ag = Object.entries(Es).map(function (e) {
    var t = K(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  $f = function (t) {
    var r,
      n,
      a,
      i = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = Ag.find(function (o) {
            var s = K(o, 1),
              u = s[0];
            return i.includes(u);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Es.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  Yo = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  xc = (function () {
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
            var s = Array.isArray(n) ? "array" : Ae(n),
              u = Array.isArray(o) ? "array" : Ae(o);
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
                $f(r.details),
                Yo(
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
  Cc = (function () {
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
              : n == null || (Ae(o) === Ae(n) && Array.isArray(n) === Array.isArray(o))
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
                $f(r.details),
                function (l, d) {
                  return r.get(d);
                },
                Yo(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                Yo(
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
function jg(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Nf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Nf = function () {
    return !!e;
  })();
}
function Ig(e, t, r) {
  if (Nf()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && ia(a, r.prototype), a);
}
function Jo(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Jo = function (n) {
      if (n === null || !jg(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return Ig(n, arguments, Y(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        ia(a, n)
      );
    }),
    Jo(e)
  );
}
function Dg(e, t, r) {
  return (
    (t = Y(t)),
    Fe(e, Ff() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Ff() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ff = function () {
    return !!e;
  })();
}
var Rc = (function (e) {
  function t(r) {
    return (de(this, t), Dg(this, t, [r]));
  }
  return (Be(t, e), fe(t));
})(Jo(Error));
function Pc(e, t) {
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
function Tg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Pc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Mg = 5e3,
  Lg = "https://api.atlassian.com/flags",
  $g = "https://api.stg.atlassian.com/flags",
  Ng = "https://api.dev.atlassian.com/flags",
  Fg = "https://api.stg.atlassian-us-gov-mod.com/flags",
  Bg = "https://api.atlassian-us-gov-mod.com/flags",
  zg = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  qg = "oasis-stg.com/flags",
  Ug = "atlassian-isolated.net/flags",
  Vg = "/gateway/api/flags",
  Oo = (function () {
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
                        new Rc(
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
                      throw new Rc("Unexpected 204 response");
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
          if (n) return Vg;
          if (a === oa.FEDRAMP_MODERATE)
            switch (r) {
              case Kn.Production:
                return Bg;
              case Kn.Staging:
                return Fg;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === oa.COMMERCIAL)
            switch (r) {
              case Kn.Development:
                return Ng;
              case Kn.Staging:
                var o = this.getApiUrl(i);
                return o !== null ? o : $g;
              default:
                var s = this.getApiUrl(i);
                return s !== null ? s : Lg;
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
                          (c = o.fetchTimeoutMs || Mg),
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
                            Tg(
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
          if (n === void 0) return r ? zg.replace("%s", r) : null;
          var a = n.protocol,
            i = n.hostname,
            o = i.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(a, "//api.").concat(o[1], ".").concat(qg);
          var s = i.match(/([^.]+)\.atlassian-isolated\.net$/);
          return s ? "".concat(a, "//api.").concat(s[1], ".").concat(Ug) : null;
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
function Ac(e, t) {
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
function An(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ac(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ac(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Gg(e, t, r) {
  return (
    (t = Y(t)),
    Fe(e, Bf() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Bf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Bf = function () {
    return !!e;
  })();
}
function Hg(e, t, r, n) {
  var a = ei(Y(e.prototype), t, r);
  return typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var Wg = (function (e) {
  function t() {
    var r;
    return (
      de(this, t),
      (r = Gg(this, t, ["NoFetchDataAdapter", "nofetch"])),
      x(r, "bootstrapResult", null),
      r
    );
  }
  return (
    Be(t, e),
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
                            An(
                              An({}, this.bootstrapResult),
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
            An(An({}, this.bootstrapResult), {}, { fullUserHash: ot._getFullUserHash(n) })
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
          Hg(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = An({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(ot.DataAdapterCore);
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
function xe(e) {
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
function Kg(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Yg(e)) || t) {
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
function Yg(e, t) {
  if (e) {
    if (typeof e == "string") return Ic(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Ic(e, t)
          : void 0
    );
  }
}
function Ic(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var ko = "LocalOverride:Recognized",
  Jg = "STATSIG_OVERRIDES",
  Dc = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Er = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  He = function (t, r) {
    return r + ":" + t;
  },
  Xg = (function () {
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
                _ = K(g[v], 2),
                w = _[0],
                O = _[1];
              r.configs[w] = O;
            }
            for (
              var m = 0, S = Object.entries((E = u.layers) !== null && E !== void 0 ? E : {});
              m < S.length;
              m++
            ) {
              var E,
                j = K(S[m], 2),
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
            this.parseStoredOverrides(Dc),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Dc);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var i = a[n],
              o = new Set(Object.keys(i)),
              s = Kg(o),
              u;
            try {
              for (s.s(); !(u = s.n()).done; ) {
                var c = u.value,
                  l = Ge._DJB2(c);
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
          var n = xe(xe({}, Er()), r);
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
              this._djb2Map.set(He(Ge._DJB2(f), s), p);
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
          var a,
            i =
              (a = this._overrides.gates[r.name]) !== null && a !== void 0
                ? a
                : this._djb2Map.get(He(r.name, "gates"));
          return i == null
            ? null
            : xe(xe({}, r), {}, { value: i, details: xe(xe({}, r.details), {}, { reason: ko }) });
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
          var a,
            i =
              (a = this._overrides.layers[r.name]) !== null && a !== void 0
                ? a
                : this._djb2Map.get(He(r.name, "layers"));
          return i == null
            ? null
            : xe(
                xe({}, r),
                {},
                {
                  __value: i,
                  get: Ge._makeTypedGet(r.name, i),
                  details: xe(xe({}, r.details), {}, { reason: ko }),
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
                : this._djb2Map.get(He(r.name, "configs"));
          return i == null
            ? null
            : xe(
                xe({}, r),
                {},
                {
                  value: i,
                  get: Ge._makeTypedGet(r.name, i),
                  details: xe(xe({}, r.details), {}, { reason: ko }),
                },
              );
        },
      },
    ]);
  })(),
  Zg = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function Tc(e, t) {
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
      ? Tc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Tc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Mc = "client-default-key",
  Qg = "https://xp.atlassian.com/v1/rgstr",
  eb = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? Jg : n,
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
        x(this, "subscriptions", new Eg()),
        x(this, "dataAdapter", new Wg()),
        x(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = i || new Xg(a)));
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
                        if (((u = Ia(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          Pn(u, this.initOptions) ||
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
                        if (((c = Ia(a)), !this.initPromise)) {
                          f.next = 4;
                          break;
                        }
                        return (
                          Pn(c, this.initOptions) ||
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
                s.initOptions.environment !== Kn.Production &&
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
                          (c = Ia(a)),
                          !this.initPromise)
                        ) {
                          p.next = 5;
                          break;
                        }
                        return (
                          Pn(c, this.initOptions) ||
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
                          (s = Ia(a)),
                          (u = function () {
                            return Oo.fetchExperimentValues(s, i, o).then(function (f) {
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
            return xc.fromExperiment(
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
              new xc(r, {}, "", { time: Date.now(), reason: Es.Error })
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
          return Pn(this.currentIdentifiers, r) && Pn(this.currentAttributes, n);
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
                          (l = Oo.fetchClientSdk(a).then(function (b) {
                            return (s.sdkKey = b.clientSdkKey);
                          })),
                          (d = Oo.fetchExperimentValues(a, i, o)),
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
                          (d = i.getClientSdkKey().then(function (_) {
                            return (u.sdkKey = _);
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
                          (c = Pg(a)),
                          c.sdkKey || (c.sdkKey = Mc),
                          ((s = c.networkConfig) !== null && s !== void 0 && s.logEventUrl) ||
                            (c.networkConfig = Kt(
                              Kt({}, c.networkConfig),
                              {},
                              { logEventUrl: Qg },
                            )),
                          c.perimeter === oa.FEDRAMP_MODERATE && (c.disableLogging = !0),
                          (l = c.sdkKey),
                          (d = c.environment),
                          c.updateUserCompletionCallback,
                          c.perimeter,
                          (f = ae(c, Zg)),
                          (this.user = Ec(i, o)),
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
                          (this.statsigClient = new ot.StatsigClient(Mc, this.user, p)),
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
                        ((c = b.sent), (l = Ec(i, c.customAttributesFromFetch)), (b.next = 13));
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
            return Cc.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !i }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Cc.fromLayer(ot._makeLayer(r, { reason: "Error" }, null))
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
x(U, "client", new eb());
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
var Xo = U;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = U;
  else {
    var Da, So;
    Xo = window.__FEATUREGATES_JS__;
    var Lc =
      ((Da = Xo) === null || Da === void 0 || (So = Da.getPackageVersion) === null || So === void 0
        ? void 0
        : So.call(Da)) || "4.10.0 or earlier";
    if (Lc !== Fr) {
      var tb = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(Lc, " when module version ")
        .concat(Fr, " was loading.");
      console.warn(tb);
    }
  }
var xr,
  Cr,
  rb =
    (globalThis == null ||
    (xr = globalThis.process) === null ||
    xr === void 0 ||
    (xr = xr.env) === null ||
    xr === void 0
      ? void 0
      : xr.JEST_WORKER_ID) !== void 0,
  nb =
    !rb &&
    (globalThis == null ||
    (Cr = globalThis.process) === null ||
    Cr === void 0 ||
    (Cr = Cr.env) === null ||
    Cr === void 0
      ? void 0
      : Cr.NODE_ENV) !== "production",
  ab = function () {
    var t;
    nb && (t = console).debug.apply(t, arguments);
  },
  xs = {},
  ib = "@atlaskit/platform-feature-flags",
  Xn = "__PLATFORM_FEATURE_FLAGS__",
  zf = typeof process < "u" && typeof xs < "u",
  ob = zf ? xs.ENABLE_PLATFORM_FF === "true" : !1,
  sb = zf ? xs.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  ub = ob || sb,
  cb = { booleanResolver: void 0 },
  Zn = typeof window < "u" ? window : globalThis;
Zn[Xn] = Zn[Xn] || cb;
function lb(e) {
  if (ub)
    return (
      ab(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        ib,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = Zn[Xn]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = Zn[Xn]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return Xo.checkGate(e);
    var a = (n = Zn[Xn]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function Le(e) {
  return lb(e);
}
var db = y.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  fb = function () {
    return y.useContext(db);
  },
  ti = function (t) {
    var r = y.useRef(t);
    return ((r.current = t), r);
  };
function vb(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function pb(e, t) {
  var r = y.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = y.useRef(!0),
    a = y.useRef(r),
    i = n.current || !!(t && a.current.inputs && vb(t, a.current.inputs)),
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
function hb(e, t) {
  return pb(function () {
    return e;
  }, t);
}
function qf() {
  var e = fb(),
    t = hb(
      function (r) {
        return new ug({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function $c(e, t) {
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
function gb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $c(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $c(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function sa(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    i = e.packageName,
    o = e.packageVersion,
    s = e.analyticsData,
    u = qf(),
    c = u.createAnalyticsEvent,
    l = ti(s),
    d = ti(t),
    f = y.useCallback(
      function (p) {
        var h = c({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: i, packageVersion: o },
          }),
          v = gb({ componentName: n, packageName: i, packageVersion: o }, l.current);
        h.context.push(v);
        var g = h.clone();
        (g && g.fire("atlaskit"), d.current(p, h));
      },
      [r, n, a, i, o, c, l, d],
    );
  return f;
}
function Nc(e, t) {
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
function bb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Nc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Fc(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    i = e.packageVersion,
    o = e.analyticsData,
    s = qf(),
    u = s.createAnalyticsEvent,
    c = ti(o),
    l = ti(t),
    d = y.useCallback(
      function () {
        var f = u({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: i },
          }),
          p = bb({ componentName: n, packageName: a, packageVersion: i }, c.current);
        f.context.push(p);
        var h = f.clone();
        (h && h.fire("atlaskit"), l.current(f));
      },
      [r, n, a, i, u, c, l],
    );
  return d;
}
var dr = "ASC",
  ri = "DESC",
  yb = "small",
  ni = "large",
  Uf = 0.22;
const mb = 5;
function C(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const i of a) {
      const o = i.startsWith("_") ? i.slice(0, mb) : i;
      t[o] = i;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function Vf(e, t, r) {
  return e ?? "var(--c-, )";
}
var _b = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  wb = y.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      i = e.testId,
      o = e.isLoading,
      s = ae(e, _b);
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
  Ob = function (t) {
    var r = t.children;
    return y.createElement(
      "caption",
      { className: C(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  kb = function (t) {
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
  Sb = function (t) {
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
  Eb = function (t) {
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
  xb = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
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
function zc(e) {
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
function Cb(e, t, r) {
  return (
    (t = Y(t)),
    Fe(e, Gf() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Gf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Gf = function () {
    return !!e;
  })();
}
var qc = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var i;
      if (r.cells[a] && ((i = r.cells[a]) === null || i === void 0 ? void 0 : i.key) === n) {
        var o;
        return (o = t[a]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  Rb = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var i = a === dr ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      s = Array.from(r);
    return s.sort(function (u, c) {
      var l = qc(u.cells, t, n),
        d = qc(c.cells, t, n);
      if (l === void 0 || d === void 0) return i;
      if (Ae(l) !== Ae(d)) {
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
function Pb(e) {
  var t = (function (r) {
    function n() {
      var a;
      de(this, n);
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
      return ((a = Cb(this, n, [].concat(o))), x(a, "state", { pageRows: [] }), a);
    }
    return (
      Be(n, r),
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
                u = ae(i, xb);
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
              Qa(c, u);
              var h, v;
              return (
                p ? ((h = s), (v = s)) : ((h = Rb(u, s, c, l) || []), (v = Pf(h, d, f))),
                zc(zc({}, o), {}, { pageRows: v })
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
var Ab = "--local-dynamic-table-width",
  Hf = function (t) {
    var r = t.width;
    return typeof r < "u" ? x({}, Ab, "".concat(r, "%")) : void 0;
  },
  jb = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  Ib = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      i = t.innerRef,
      o = ae(t, jb);
    return y.createElement(
      "td",
      te(
        {
          style: Hf({ width: r }),
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
  Db = ["isHighlighted", "children", "style", "testId", "className"],
  Tb = y.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      i = e.testId,
      o = e.className,
      s = ae(e, Db);
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
  Mb = ["cells"],
  Lb = ["content", "testId"],
  $b = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      i = t.isFixedSize,
      o = t.isHighlighted,
      s = r.cells,
      u = ae(r, Mb);
    return k.createElement(
      Tb,
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
          p = ae(c, Lb),
          h = (n || { cells: [] }).cells[l] || {},
          v = h.shouldTruncate,
          g = h.width;
        return k.createElement(
          Ib,
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
function Nb(e, t, r) {
  return (
    (t = Y(t)),
    Fe(e, Wf() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var Fb = (function (e) {
    function t() {
      return (de(this, t), Nb(this, t, arguments));
    }
    return (
      Be(t, e),
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
                return k.createElement($b, {
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
  Bb = Pb(
    k.forwardRef(function (e, t) {
      return k.createElement(Fb, te({}, e, { forwardedRef: t }));
    }),
  );
function zb(e, t, r) {
  return (
    (t = Y(t)),
    Fe(e, Kf() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Kf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Kf = function () {
    return !!e;
  })();
}
var qb = (function (e) {
  function t(r) {
    var n;
    return (de(this, t), (n = zb(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    Be(t, e),
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
const Cs = y.createContext(null);
var Uc = "#FF5630",
  Vc = "#DE350B",
  Rr = "#BF2600",
  Gc = "#FFC400",
  Hc = "#FFAB00",
  Pr = "#FF991F",
  Ub = "#DEEBFF",
  Ta = "#B3D4FF",
  Wc = "#4C9AFF",
  Kc = "#2684FF",
  Yc = "#0065FF",
  Ar = "#0052CC",
  Jc = "#0747A6",
  Yt = "#FFFFFF",
  Ce = "#F4F5F7",
  sr = "#A5ADBA",
  Vb = "#8993A4",
  Gb = "#6B778C",
  Hb = "#505F79",
  ua = "#42526E",
  We = "#253858",
  jr = "#172B4D",
  jn = "rgba(9, 30, 66, 0.04)",
  Xc = "rgba(9, 30, 66, 0.08)",
  it = "#9FB0CC",
  Wb = "#8C9CB8",
  Eo = "#67758F",
  In = "#3B475C",
  Zc = "#313D52",
  Dn = "#1B2638",
  Ir = "#0D1424",
  Kb = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function Yb(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(ua, ")")
    : "var(--ds-icon-inverse, ".concat(Yt, ")");
}
var Ma = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  Jb = typeof window > "u" ? y.useEffect : y.useLayoutEffect,
  Yf = k.memo(
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
        f = typeof l == "number" ? l : Kb[l],
        p = "".concat(o, "ms"),
        h = Yb(a),
        v = y.useContext(Cs);
      return (
        Jb(
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
            className: C([Ma.wrapperStyles, Ma.rotateStyles]),
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
              className: C([Ma.loadInStyles]),
            },
            k.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: C([Ma.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function Qc(e, t) {
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
function el(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Qc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var tl = "--contents-opacity",
  Xb = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: C(["_kqswh2mm"]) },
      r,
    );
  },
  Zb = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: C(["_tzy47hfw _lcxvglyw"]),
        style: el(el({}, x({}, tl, n)), {}, { "--_cnddr8": Vf("var(".concat(tl, ")")) }),
      },
      r,
    );
  },
  Qb = function (t) {
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
function ey(e, t, r) {
  return (
    (t = Y(t)),
    Fe(e, Jf() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var Xf = (function (e) {
  function t() {
    return (de(this, t), ey(this, t, arguments));
  }
  return (
    Be(t, e),
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
            Xb,
            { testId: u },
            i ? k.createElement(Zb, { contentsOpacity: s, testId: u }, a) : a,
            i &&
              k.createElement(
                Qb,
                { testId: u },
                k.createElement(Yf, {
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
x(Xf, "defaultProps", {
  isLoading: !0,
  spinnerSize: ni,
  contentsOpacity: Uf,
  loadingLabel: "Loading table",
});
var ty = ["children", "testId"],
  ry = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = ae(e, ty);
    return y.createElement(
      "div",
      te({}, a, { "data-testid": n, ref: t, className: C(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  ny = function (t) {
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
  ay = y.forwardRef(function (e, t) {
    var r = e.children;
    return y.createElement("div", { ref: t, className: C(["_kqswh2mm _152tidpf"]) }, r);
  });
function iy(e, t, r) {
  return (
    (t = Y(t)),
    Fe(e, Zf() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
    var r;
    de(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = iy(this, t, [].concat(a))),
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
          Ae(o.style) === "object" &&
          ((o.style.pointerEvents = u ? "none" : ""), (o.style.opacity = u ? c.toString() : ""));
      }),
      r
    );
  }
  return (
    Be(t, e),
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
                    _ = g < l * 3 ? f + l : b;
                  this.translateSpinner(s, _, !0);
                } else if (f < 0 && p > i) {
                  var w = i / 2 - l / 2;
                  this.translateSpinner(s, w, !0);
                } else {
                  var O = p / 2 - l / 2,
                    m = O < l ? O - (l - O) : O;
                  this.translateSpinner(s, m, !0);
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
            ry,
            { testId: s && "".concat(s, "--loading--container--advanced"), ref: this.containerRef },
            a,
            i &&
              k.createElement(
                ny,
                { testId: s },
                k.createElement(
                  ay,
                  { ref: this.spinnerRef },
                  k.createElement(Yf, {
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
x(Qf, "defaultProps", {
  isLoading: !0,
  spinnerSize: ni,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Uf), ")"),
  loadingLabel: "Loading table",
});
function oy(e) {
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
var Tn = {},
  Mn = {},
  sy = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  uy = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  cy = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  ly = { core: 16, utility: 12 },
  dy = {
    core: {
      medium: { none: 0, compact: 4, spacious: 4 },
      small: { none: 0, compact: 2.66, spacious: 8 },
    },
    utility: {
      medium: { none: 0, compact: 2, spacious: 6 },
      small: { none: 0, compact: 2, spacious: 6 },
    },
  },
  rl = y.memo(function (t) {
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
      _ = f ? { __html: f } : void 0;
    if (d && !Le("platform-visual-refresh-icons"))
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
        var m = t.size(b);
        O = m === "small" || m === "medium" ? m : O;
      }
    }
    var S = ly[w],
      E = dy[w][O][g],
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
        dangerouslySetInnerHTML: _,
        className: C([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : w === "utility" ? cy[g] : O === "small" ? uy[g] : sy[g],
        ]),
      }),
    );
  });
const fy = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: rl, default: rl }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  yi = ks(fy);
var nl;
function vy() {
  if (nl) return Mn;
  ((nl = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.default = void 0));
  var e = r(dt()),
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
  return ((n.displayName = "ChevronLeftIcon"), (Mn.default = n), Mn);
}
var Ln = {};
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
function il(e) {
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
var py = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  ol = y.memo(function (t) {
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
          style: il(
            il({}, v),
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
            u && py[u],
          ]),
        },
      ),
    );
  });
const hy = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: ol, default: ol }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  ev = ks(hy);
var sl;
function gy() {
  if (sl) return Ln;
  ((sl = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.default = void 0));
  var e = r(dt()),
    t = ev;
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
  return ((n.displayName = "ChevronLeftLargeIcon"), (Ln.default = n), Ln);
}
var ul;
function by() {
  if (ul) return Tn;
  ((ul = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.default = void 0));
  var e = n(dt()),
    t = n(vy()),
    r = n(gy());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronLeftIcon", LEGACY_fallbackIcon: r.default }, i),
    );
  return ((a.displayName = "ChevronLeftIconMigration"), (Tn.default = a), Tn);
}
var yy = by();
const my = er(yy);
var $n = {},
  Nn = {},
  cl;
function _y() {
  if (cl) return Nn;
  ((cl = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.default = void 0));
  var e = r(dt()),
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
  return ((n.displayName = "ChevronRightIcon"), (Nn.default = n), Nn);
}
var Fn = {},
  ll;
function wy() {
  if (ll) return Fn;
  ((ll = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.default = void 0));
  var e = r(dt()),
    t = ev;
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
  return ((n.displayName = "ChevronRightLargeIcon"), (Fn.default = n), Fn);
}
var dl;
function Oy() {
  if (dl) return $n;
  ((dl = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0));
  var e = n(dt()),
    t = n(_y()),
    r = n(wy());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronRightIcon", LEGACY_fallbackIcon: r.default }, i),
    );
  return ((a.displayName = "ChevronRightIconMigration"), ($n.default = a), $n);
}
var ky = Oy();
const Sy = er(ky);
var Rs = y.createContext("elevation.surface"),
  Ey = function () {
    return y.useContext(Rs);
  };
Rs.displayName = "SurfaceProvider";
var xy = [
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
  Cy = ["className"],
  Ry = {
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
  tv = {
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
  Py = {
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
  Ay = {
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
  jy = {
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
  Iy = {
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
  mi = y.forwardRef(function (e, t) {
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
      _ = b === void 0 ? h : b,
      w = e.style,
      O = e.testId,
      m = e.xcss,
      S = ae(e, xy);
    S.className;
    var E = ae(S, Cy),
      j = y.createElement(
        n,
        te(
          {
            style: w,
            ref: t,
            className: C([
              "_19itglyw _vchhusvi _r06hglyw",
              i && Ry[i],
              i && Dy(i) && tv[i],
              l && Py[l],
              f && Ay[f],
              g && jy[g],
              _ && Iy[_],
              m,
            ]),
          },
          E,
          { "data-testid": O },
        ),
        a,
      );
    return i ? y.createElement(Rs.Provider, { value: i }, j) : j;
  });
function Dy(e) {
  return e in tv;
}
const xo = () =>
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
  rv = (...e) => C(e);
function Ty() {
  return {
    css() {
      throw xo();
    },
    cssMap() {
      throw xo();
    },
    cx: rv,
    XCSSProp() {
      throw xo();
    },
  };
}
var My = Ty(),
  Ly = My.cx,
  $y = [
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
  fl = {
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
  vl = {
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
  Ny = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  Fy = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  By = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  zy = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  qy = { root: "_1e0c1txw _vchhusvi" },
  ai = y.memo(
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
        v = ae(e, $y);
      return y.createElement(
        n,
        te({}, v, {
          role: a,
          className: C([
            qy.root,
            s && vl[s],
            u && vl[u],
            s && fl[s],
            c && fl[c],
            i && zy[i],
            f && Fy[f],
            o && Ny[o],
            p && By[p],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
ai.displayName = "Flex";
var Uy = [
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
  Zo = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  Vy = function (t) {
    var r = t.children;
    return y.createElement("span", { className: C([Zo.separator]) }, r);
  },
  qa = y.memo(
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
        b = ae(e, Uy),
        _ = typeof f == "string" ? y.createElement(Vy, null, f) : f,
        w = _
          ? y.Children.toArray(g)
              .filter(Boolean)
              .map(function (O, m) {
                return y.createElement(y.Fragment, { key: m }, f && m > 0 ? _ : null, O);
              })
          : g;
      return y.createElement(
        ai,
        te({}, b, {
          as: r,
          role: v,
          alignItems: i,
          justifyContent: u || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: s ? "wrap" : void 0,
          xcss: Ly(c === "hug" && Zo.hug, c === "fill" && Zo.fill, p),
          testId: h,
          ref: t,
        }),
        w,
      );
    }),
  );
qa.displayName = "Inline";
var Gy = "Invariant failed";
function Hy(e, t) {
  if (!e) throw new Error(Gy);
}
var nv = y.createContext(!1),
  Wy = function () {
    return y.useContext(nv);
  },
  Ky = nv.Provider,
  Yy = ["span", "p", "strong", "em"],
  Jy = function (t, r) {
    var n = Ey();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return pl.hasOwnProperty(n) ? pl[n] : "color.text";
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
  Xy = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  Zy = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  Qy = {
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
  pl = {
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
  em = y.forwardRef(function (e, t) {
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
    Hy(Yy.includes(n));
    var p = Wy(),
      h = Jy(a, p);
    !u && !p && (u = "medium");
    var v = y.createElement(
      n,
      {
        id: s,
        className: C([
          Dr.root,
          u && Xy[u],
          h && Qy[h],
          l && Dr.truncation,
          l === 1 && Dr.breakAll,
          i && Dr["textAlign.".concat(i)],
          c && Zy[c],
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
    return p ? v : y.createElement(Ky, { value: !0 }, v);
  });
function tm() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var rm = ["as", "children", "isInset", "testId", "style", "xcss"],
  nm = ["className"],
  am = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      i = e.isInset,
      o = e.testId,
      s = e.style,
      u = e.xcss,
      c = ae(e, rm);
    c.className;
    var l = ae(c, nm);
    return y.createElement(
      n,
      te({}, l, {
        ref: t,
        className: C([
          "_mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          i && "_1ah31gjf _2mwq1gjf",
          Le("platform_dst_compiled_primitives_outline_reset") && "_ymio1r31 _ypr0glyw _zcxs1o36",
          u,
        ]),
        style: s,
        "data-testid": o,
      }),
      a,
    );
  }),
  im = [
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
  om = ["className"],
  hl = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  sm = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      i = a === void 0 ? "button" : a,
      o = e.onClick,
      s = o === void 0 ? _e : o,
      u = e.interactionName,
      c = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      f = e.testId,
      p = e.xcss,
      h = e.tabIndex,
      v = ae(e, im),
      g = y.useContext(Cs),
      b = y.useCallback(
        function (O, m) {
          (g && g.tracePress(u, O.timeStamp), s(O, m));
        },
        [s, g, u],
      ),
      _ = sa({
        fn: b,
        action: "clicked",
        componentName: c || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "14.15.4",
        analyticsData: l,
        actionSubject: "button",
      });
    v.className;
    var w = ae(v, om);
    return y.createElement(
      am,
      te({ as: "button", tabIndex: h ?? (tm() && !n ? 0 : void 0), style: d }, w, {
        type: i,
        onClick: _,
        disabled: n,
        xcss: rv(hl.root, n && hl.disabled, p),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  Co = {},
  Bn = {},
  gl;
function av() {
  if (gl) return Bn;
  ((gl = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.bind = void 0));
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
  return ((Bn.bind = e), Bn);
}
var ur = {},
  bl;
function um() {
  if (bl) return ur;
  bl = 1;
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
  var t = av();
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
var yl;
function cm() {
  return (
    yl ||
      ((yl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = av();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = um();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(Co)),
    Co
  );
}
var _i = cm(),
  lm = function () {
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
  iv = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: lm() });
  },
  dm = iv(),
  fm = y.createContext(iv()),
  vm = function (e) {
    return e.value++;
  },
  pm = function (e) {
    return e ? e.prefix : "";
  },
  hm = function (e) {
    var t = e || dm,
      r = pm(t),
      n = vm(t),
      a = r + n,
      i = function (o) {
        return a + t.uid(o);
      };
    return { uid: a, gen: i };
  },
  ov = function () {
    var e = y.useContext(fm),
      t = y.useState(function () {
        return hm(e);
      })[0];
    return t;
  },
  gm = function () {
    var e = ov().uid;
    return e;
  },
  bm = function () {
    var e = ov().gen;
    return e;
  },
  Ro,
  Ua = (Ro = k.useId) !== null && Ro !== void 0 ? Ro : void 0;
function ym() {
  return Ua && Le("platform-dst-react-18-use-id")
    ? Le("platform-dst-react-18-use-id-selector-safe")
      ? Ua().replace(/[:«»]/g, "_")
      : Ua()
    : "uid".concat(gm());
}
function mm() {
  if (Ua && Le("platform-dst-react-18-use-id")) {
    var e = ym();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return bm();
}
var sv = function (t) {
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
  _m = {
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
  wm = ["children"];
function Om(e) {
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
      u = ae(o, wm),
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
var km = Om(function () {
    return { mode: "light" };
  }),
  Sm = km.useTheme;
function Em(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function xm(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Cm = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(xm(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = Em(a);
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
  ii = "-moz-",
  Z = "-webkit-",
  uv = "comm",
  Ps = "rule",
  As = "decl",
  Rm = "@import",
  cv = "@keyframes",
  Pm = "@layer",
  Am = Math.abs,
  wi = String.fromCharCode,
  jm = Object.assign;
function Im(e, t) {
  return ye(e, 0) ^ 45
    ? (((((((t << 2) ^ ye(e, 0)) << 2) ^ ye(e, 1)) << 2) ^ ye(e, 2)) << 2) ^ ye(e, 3)
    : 0;
}
function lv(e) {
  return e.trim();
}
function Dm(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, r) {
  return e.replace(t, r);
}
function Qo(e, t) {
  return e.indexOf(t);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function ca(e, t, r) {
  return e.slice(t, r);
}
function gt(e) {
  return e.length;
}
function js(e) {
  return e.length;
}
function La(e, t) {
  return (t.push(e), e);
}
function Tm(e, t) {
  return e.map(t).join("");
}
var Oi = 1,
  qr = 1,
  dv = 0,
  je = 0,
  he = 0,
  Yr = "";
function ki(e, t, r, n, a, i, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: i,
    line: Oi,
    column: qr,
    length: o,
    return: "",
  };
}
function zn(e, t) {
  return jm(ki("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Mm() {
  return he;
}
function Lm() {
  return ((he = je > 0 ? ye(Yr, --je) : 0), qr--, he === 10 && ((qr = 1), Oi--), he);
}
function $e() {
  return ((he = je < dv ? ye(Yr, je++) : 0), qr++, he === 10 && ((qr = 1), Oi++), he);
}
function _t() {
  return ye(Yr, je);
}
function Va() {
  return je;
}
function ya(e, t) {
  return ca(Yr, e, t);
}
function la(e) {
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
function fv(e) {
  return ((Oi = qr = 1), (dv = gt((Yr = e))), (je = 0), []);
}
function vv(e) {
  return ((Yr = ""), e);
}
function Ga(e) {
  return lv(ya(je - 1, es(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function $m(e) {
  for (; (he = _t()) && he < 33; ) $e();
  return la(e) > 2 || la(he) > 3 ? "" : " ";
}
function Nm(e, t) {
  for (; --t && $e() && !(he < 48 || he > 102 || (he > 57 && he < 65) || (he > 70 && he < 97)); );
  return ya(e, Va() + (t < 6 && _t() == 32 && $e() == 32));
}
function es(e) {
  for (; $e(); )
    switch (he) {
      case e:
        return je;
      case 34:
      case 39:
        e !== 34 && e !== 39 && es(he);
        break;
      case 40:
        e === 41 && es(e);
        break;
      case 92:
        $e();
        break;
    }
  return je;
}
function Fm(e, t) {
  for (; $e() && e + he !== 57; ) if (e + he === 84 && _t() === 47) break;
  return "/*" + ya(t, je - 1) + "*" + wi(e === 47 ? e : $e());
}
function Bm(e) {
  for (; !la(_t()); ) $e();
  return ya(e, je);
}
function zm(e) {
  return vv(Ha("", null, null, null, [""], (e = fv(e)), 0, [0], e));
}
function Ha(e, t, r, n, a, i, o, s, u) {
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
      _ = 0,
      w = "",
      O = a,
      m = i,
      S = n,
      E = w;
    g;

  )
    switch (((h = _), (_ = $e()))) {
      case 40:
        if (h != 108 && ye(E, d - 1) == 58) {
          Qo((E += Q(Ga(_), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Ga(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += $m(h);
        break;
      case 92:
        E += Nm(Va() - 1, 7);
        continue;
      case 47:
        switch (_t()) {
          case 42:
          case 47:
            La(qm(Fm($e(), Va()), t, r), u);
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
        switch (_) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            (b == -1 && (E = Q(E, /\f/g, "")),
              p > 0 &&
                gt(E) - d &&
                La(p > 32 ? _l(E + ";", n, r, d - 1) : _l(Q(E, " ", "") + ";", n, r, d - 2), u));
            break;
          case 59:
            E += ";";
          default:
            if ((La((S = ml(E, t, r, c, l, a, s, w, (O = []), (m = []), d)), i), _ === 123))
              if (l === 0) Ha(E, t, S, S, O, i, d, s, m);
              else
                switch (f === 99 && ye(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ha(
                      e,
                      S,
                      S,
                      n && La(ml(e, S, S, 0, 0, a, s, w, a, (O = []), d), m),
                      a,
                      m,
                      d,
                      s,
                      n ? O : m,
                    );
                    break;
                  default:
                    Ha(E, S, S, S, [""], m, 0, s, m);
                }
        }
        ((c = l = p = 0), (v = b = 1), (w = E = ""), (d = o));
        break;
      case 58:
        ((d = 1 + gt(E)), (p = h));
      default:
        if (v < 1) {
          if (_ == 123) --v;
          else if (_ == 125 && v++ == 0 && Lm() == 125) continue;
        }
        switch (((E += wi(_)), _ * v)) {
          case 38:
            b = l > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            ((s[c++] = (gt(E) - 1) * b), (b = 1));
            break;
          case 64:
            (_t() === 45 && (E += Ga($e())), (f = _t()), (l = d = gt((w = E += Bm(Va())))), _++);
            break;
          case 45:
            h === 45 && gt(E) == 2 && (v = 0);
        }
    }
  return i;
}
function ml(e, t, r, n, a, i, o, s, u, c, l) {
  for (var d = a - 1, f = a === 0 ? i : [""], p = js(f), h = 0, v = 0, g = 0; h < n; ++h)
    for (var b = 0, _ = ca(e, d + 1, (d = Am((v = o[h])))), w = e; b < p; ++b)
      (w = lv(v > 0 ? f[b] + " " + _ : Q(_, /&\f/g, f[b]))) && (u[g++] = w);
  return ki(e, t, r, a === 0 ? Ps : s, u, c, l);
}
function qm(e, t, r) {
  return ki(e, t, r, uv, wi(Mm()), ca(e, 2, -2), 0);
}
function _l(e, t, r, n) {
  return ki(e, t, r, As, ca(e, 0, n), ca(e, n + 1, -1), n);
}
function Br(e, t) {
  for (var r = "", n = js(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function Um(e, t, r, n) {
  switch (e.type) {
    case Pm:
      if (e.children.length) break;
    case Rm:
    case As:
      return (e.return = e.return || e.value);
    case uv:
      return "";
    case cv:
      return (e.return = e.value + "{" + Br(e.children, n) + "}");
    case Ps:
      e.value = e.props.join(",");
  }
  return gt((r = Br(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function Vm(e) {
  var t = js(e);
  return function (r, n, a, i) {
    for (var o = "", s = 0; s < t; s++) o += e[s](r, n, a, i) || "";
    return o;
  };
}
function Gm(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Hm(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var Wm = function (t, r, n) {
    for (var a = 0, i = 0; (a = i), (i = _t()), a === 38 && i === 12 && (r[n] = 1), !la(i); ) $e();
    return ya(t, je);
  },
  Km = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (la(a)) {
        case 0:
          (a === 38 && _t() === 12 && (r[n] = 1), (t[n] += Wm(je - 1, r, n)));
          break;
        case 2:
          t[n] += Ga(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = _t() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += wi(a);
      }
    while ((a = $e()));
    return t;
  },
  Ym = function (t, r) {
    return vv(Km(fv(t), r));
  },
  wl = new WeakMap(),
  Jm = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !wl.get(n)) && !a) {
        wl.set(t, !0);
        for (var i = [], o = Ym(r, i), s = n.props, u = 0, c = 0; u < o.length; u++)
          for (var l = 0; l < s.length; l++, c++)
            t.props[c] = i[u] ? o[u].replace(/&\f/g, s[l]) : s[l] + " " + o[u];
      }
    }
  },
  Xm = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function pv(e, t) {
  switch (Im(e, t)) {
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
      return Z + e + ii + e + me + e + e;
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
      if (gt(e) - 1 - t > 6)
        switch (ye(e, t + 1)) {
          case 109:
            if (ye(e, t + 4) !== 45) break;
          case 102:
            return (
              Q(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Z + "$2-$3$1" + ii + (ye(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Qo(e, "stretch") ? pv(Q(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ye(e, t + 1) !== 115) break;
    case 6444:
      switch (ye(e, gt(e) - 3 - (~Qo(e, "!important") && 10))) {
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
var Zm = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case As:
          t.return = pv(t.value, t.length);
          break;
        case cv:
          return Br([zn(t, { value: Q(t.value, "@", "@" + Z) })], a);
        case Ps:
          if (t.length)
            return Tm(t.props, function (i) {
              switch (Dm(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Br([zn(t, { props: [Q(i, /:(read-\w+)/, ":" + ii + "$1")] })], a);
                case "::placeholder":
                  return Br(
                    [
                      zn(t, { props: [Q(i, /:(plac\w+)/, ":" + Z + "input-$1")] }),
                      zn(t, { props: [Q(i, /:(plac\w+)/, ":" + ii + "$1")] }),
                      zn(t, { props: [Q(i, /:(plac\w+)/, me + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  Qm = [Zm],
  e_ = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (v) {
        var g = v.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || Qm,
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
      c = [Jm, Xm];
    {
      var l,
        d = [
          Um,
          Gm(function (v) {
            l.insert(v);
          }),
        ],
        f = Vm(c.concat(a, d)),
        p = function (g) {
          return Br(zm(g), f);
        };
      u = function (g, b, _, w) {
        ((l = _), p(g ? g + "{" + b.styles + "}" : b.styles), w && (h.inserted[b.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new Cm({
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
  Po = { exports: {} },
  ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ol;
function t_() {
  if (Ol) return ee;
  Ol = 1;
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
    _ = e ? Symbol.for("react.scope") : 60119;
  function w(m) {
    if (typeof m == "object" && m !== null) {
      var S = m.$$typeof;
      switch (S) {
        case t:
          switch (((m = m.type), m)) {
            case u:
            case c:
            case n:
            case i:
            case a:
            case d:
              return m;
            default:
              switch (((m = m && m.$$typeof), m)) {
                case s:
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
    (ee.isAsyncMode = function (m) {
      return O(m) || w(m) === u;
    }),
    (ee.isConcurrentMode = O),
    (ee.isContextConsumer = function (m) {
      return w(m) === s;
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
      return w(m) === i;
    }),
    (ee.isStrictMode = function (m) {
      return w(m) === a;
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
        m === i ||
        m === a ||
        m === d ||
        m === f ||
        (typeof m == "object" &&
          m !== null &&
          (m.$$typeof === h ||
            m.$$typeof === p ||
            m.$$typeof === o ||
            m.$$typeof === s ||
            m.$$typeof === l ||
            m.$$typeof === g ||
            m.$$typeof === b ||
            m.$$typeof === _ ||
            m.$$typeof === v))
      );
    }),
    (ee.typeOf = w),
    ee
  );
}
var kl;
function r_() {
  return (kl || ((kl = 1), (Po.exports = t_())), Po.exports);
}
var Ao, Sl;
function n_() {
  if (Sl) return Ao;
  Sl = 1;
  var e = r_(),
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
      var _ = u(v);
      c && (_ = _.concat(c(v)));
      for (var w = o(h), O = o(v), m = 0; m < _.length; ++m) {
        var S = _[m];
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
  return ((Ao = p), Ao);
}
n_();
var a_ = !0;
function hv(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var Is = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || a_ === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  gv = function (t, r, n) {
    Is(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do (t.insert(r === i ? "." + a : "", i, t.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function i_(e) {
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
var o_ = {
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
  s_ = /[A-Z]|^ms/g,
  u_ = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  bv = function (t) {
    return t.charCodeAt(1) === 45;
  },
  El = function (t) {
    return t != null && typeof t != "boolean";
  },
  jo = Hm(function (e) {
    return bv(e) ? e : e.replace(s_, "-$&").toLowerCase();
  }),
  xl = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(u_, function (n, a, i) {
            return ((bt = { name: a, styles: i, next: bt }), a);
          });
    }
    return o_[t] !== 1 && !bv(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function da(e, t, r) {
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
      return c_(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var u = bt,
          c = r(e);
        return ((bt = u), da(e, t, c));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function c_(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += da(e, t, r[a]) + ";";
  else
    for (var i in r) {
      var o = r[i];
      if (typeof o != "object") {
        var s = o;
        t != null && t[s] !== void 0
          ? (n += i + "{" + t[s] + "}")
          : El(s) && (n += jo(i) + ":" + xl(i, s) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var u = 0; u < o.length; u++) El(o[u]) && (n += jo(i) + ":" + xl(i, o[u]) + ";");
      else {
        var c = da(e, t, o);
        switch (i) {
          case "animation":
          case "animationName": {
            n += jo(i) + ":" + c + ";";
            break;
          }
          default:
            n += i + "{" + c + "}";
        }
      }
    }
  return n;
}
var Cl = /label:\s*([^\s;{]+)\s*(;|$)/g,
  bt;
function Ds(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  bt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) ((n = !1), (a += da(r, t, i)));
  else {
    var o = i;
    a += o[0];
  }
  for (var s = 1; s < e.length; s++)
    if (((a += da(r, t, e[s])), n)) {
      var u = i;
      a += u[s];
    }
  Cl.lastIndex = 0;
  for (var c = "", l; (l = Cl.exec(a)) !== null; ) c += "-" + l[1];
  var d = i_(a) + c;
  return { name: d, styles: a, next: bt };
}
var l_ = function (t) {
    return t();
  },
  d_ = ou.useInsertionEffect ? ou.useInsertionEffect : !1,
  yv = d_ || l_,
  mv = y.createContext(typeof HTMLElement < "u" ? e_({ key: "css" }) : null);
mv.Provider;
var _v = function (t) {
    return y.forwardRef(function (r, n) {
      var a = y.useContext(mv);
      return t(r, a, n);
    });
  },
  wv = y.createContext({}),
  Ts = {}.hasOwnProperty,
  ts = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  f_ = function (t, r) {
    var n = {};
    for (var a in r) Ts.call(r, a) && (n[a] = r[a]);
    return ((n[ts] = t), n);
  },
  v_ = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      Is(r, n, a),
      yv(function () {
        return gv(r, n, a);
      }),
      null
    );
  },
  p_ = _v(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[ts],
      i = [n],
      o = "";
    typeof e.className == "string"
      ? (o = hv(t.registered, i, e.className))
      : e.className != null && (o = e.className + " ");
    var s = Ds(i, void 0, y.useContext(wv));
    o += t.key + "-" + s.name;
    var u = {};
    for (var c in e) Ts.call(e, c) && c !== "css" && c !== ts && (u[c] = e[c]);
    return (
      (u.className = o),
      r && (u.ref = r),
      y.createElement(
        y.Fragment,
        null,
        y.createElement(v_, { cache: t, serialized: s, isStringTag: typeof a == "string" }),
        y.createElement(a, u),
      )
    );
  }),
  h_ = p_,
  Mt = function (t, r) {
    var n = arguments;
    if (r == null || !Ts.call(r, "css")) return y.createElement.apply(void 0, n);
    var a = n.length,
      i = new Array(a);
    ((i[0] = h_), (i[1] = f_(t, r)));
    for (var o = 2; o < a; o++) i[o] = n[o];
    return y.createElement.apply(null, i);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Mt || (Mt = {}));
function Ct() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Ds(t);
}
var g_ = function e(t) {
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
function b_(e, t, r) {
  var n = [],
    a = hv(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var y_ = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      yv(function () {
        for (var a = 0; a < n.length; a++) gv(r, n[a], !1);
      }),
      null
    );
  },
  m_ = _v(function (e, t) {
    var r = [],
      n = function () {
        for (var u = arguments.length, c = new Array(u), l = 0; l < u; l++) c[l] = arguments[l];
        var d = Ds(c, t.registered);
        return (r.push(d), Is(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var u = arguments.length, c = new Array(u), l = 0; l < u; l++) c[l] = arguments[l];
        return b_(t.registered, n, g_(c));
      },
      i = { css: n, cx: a, theme: y.useContext(wv) },
      o = e.children(i);
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(y_, { cache: t, serializedArr: r }),
      o,
    );
  });
function __(e, t) {
  var r = y.useRef(!0);
  y.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Ov = 2,
  rs = Ct({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Ov,
  }),
  ns = Ct({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Ov,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  w_ = Ct({
    "&:focus": rs,
    "&:focus-visible": rs,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  O_ = Ct({
    "&:focus": ns,
    "&:focus-visible": ns,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  kv = y.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? ns : rs,
      i = r ? O_ : w_,
      o = typeof n > "u" ? i : n === "on" && a;
    return Mt(m_, null, function (s) {
      var u = s.css,
        c = s.cx;
      return y.Children.only(
        o ? y.cloneElement(t, { className: c([u(o), t.props.className]) }) : t,
      );
    });
  });
kv.displayName = "FocusRing";
function Tt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var k_ = 9;
function Rl(e) {
  e.keyCode !== k_ && Tt(e);
}
var S_ = {
    onMouseDownCapture: Tt,
    onMouseUpCapture: Tt,
    onKeyDownCapture: Rl,
    onKeyUpCapture: Rl,
    onTouchStartCapture: Tt,
    onTouchEndCapture: Tt,
    onPointerDownCapture: Tt,
    onPointerUpCapture: Tt,
    onClickCapture: Tt,
    onClick: Tt,
  },
  E_ = {};
function x_(e) {
  var t = e.isInteractive;
  return t ? E_ : S_;
}
var Pl = "rgba(179, 212, 255, 0.6)",
  Al = {
    background: {
      default: {
        default: {
          light: "var(--ds-background-neutral, ".concat(jn, ")"),
          dark: "var(--ds-background-neutral, ".concat(In, ")"),
        },
        hover: {
          light: "var(--ds-background-neutral-hovered, ".concat(Xc, ")"),
          dark: "var(--ds-background-neutral-hovered, ".concat(Zc, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-pressed, ".concat(Pl, ")"),
          dark: "var(--ds-background-neutral-pressed, ".concat(Ta, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(jn, ")"),
          dark: "var(--ds-background-disabled, ".concat(In, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-background-brand-bold, ".concat(Ar, ")"),
          dark: "var(--ds-background-brand-bold, ".concat(Wc, ")"),
        },
        hover: {
          light: "var(--ds-background-brand-bold-hovered, ".concat(Yc, ")"),
          dark: "var(--ds-background-brand-bold-hovered, ".concat(Ta, ")"),
        },
        active: {
          light: "var(--ds-background-brand-bold-pressed, ".concat(Jc, ")"),
          dark: "var(--ds-background-brand-bold-pressed, ".concat(Kc, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(jn, ")"),
          dark: "var(--ds-background-disabled, ".concat(In, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-background-warning-bold, ".concat(Hc, ")"),
          dark: "var(--ds-background-warning-bold, ".concat(Hc, ")"),
        },
        hover: {
          light: "var(--ds-background-warning-bold-hovered, ".concat(Gc, ")"),
          dark: "var(--ds-background-warning-bold-hovered, ".concat(Gc, ")"),
        },
        active: {
          light: "var(--ds-background-warning-bold-pressed, ".concat(Pr, ")"),
          dark: "var(--ds-background-warning-bold-pressed, ".concat(Pr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(jn, ")"),
          dark: "var(--ds-background-disabled, ".concat(In, ")"),
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
          light: "var(--ds-background-danger-bold, ".concat(Vc, ")"),
          dark: "var(--ds-background-danger-bold, ".concat(Vc, ")"),
        },
        hover: {
          light: "var(--ds-background-danger-bold-hovered, ".concat(Uc, ")"),
          dark: "var(--ds-background-danger-bold-hovered, ".concat(Uc, ")"),
        },
        active: {
          light: "var(--ds-background-danger-bold-pressed, ".concat(Rr, ")"),
          dark: "var(--ds-background-danger-bold-pressed, ".concat(Rr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(jn, ")"),
          dark: "var(--ds-background-disabled, ".concat(In, ")"),
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
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ce, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ce, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        hover: {
          light: "var(--ds-background-neutral-subtle-hovered, ".concat(Xc, ")"),
          dark: "var(--ds-background-neutral-subtle-hovered, ".concat(Zc, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-subtle-pressed, ".concat(Pl, ")"),
          dark: "var(--ds-background-neutral-subtle-pressed, ".concat(Ta, ")"),
        },
        disabled: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ce, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ce, ")"),
        },
      },
    },
    color: {
      default: {
        default: {
          light: "var(--ds-text, ".concat(ua, ")"),
          dark: "var(--ds-text, ".concat(it, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Ar, ")"),
          dark: "var(--ds-text, ".concat(Ar, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(sr, ")"),
          dark: "var(--ds-text-disabled, ".concat(Dn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Yt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Dn, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(sr, ")"),
          dark: "var(--ds-text-disabled, ".concat(Dn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
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
          dark: "var(--ds-text-disabled, ".concat(Dn, ")"),
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
          dark: "var(--ds-text-disabled, ".concat(Dn, ")"),
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
          dark: "var(--ds-link, ".concat(Wc, ")"),
        },
        hover: {
          light: "var(--ds-link, ".concat(Yc, ")"),
          dark: "var(--ds-link, ".concat(Ta, ")"),
        },
        active: {
          light: "var(--ds-link-pressed, ".concat(Jc, ")"),
          dark: "var(--ds-link-pressed, ".concat(Kc, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(sr, ")"),
          dark: "var(--ds-text-disabled, ".concat(Eo, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(We, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(We, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-text, ".concat(ua, ")"),
          dark: "var(--ds-text, ".concat(it, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Ar, ")"),
          dark: "var(--ds-text, ".concat(Ar, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(sr, ")"),
          dark: "var(--ds-text-disabled, ".concat(Eo, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-text-subtle, ".concat(Gb, ")"),
          dark: "var(--ds-text-subtle, ".concat(it, ")"),
        },
        hover: {
          light: "var(--ds-text-subtle, ".concat(Vb, ")"),
          dark: "var(--ds-text-subtle, ".concat(Ub, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Hb, ")"),
          dark: "var(--ds-text, ".concat(Wb, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(sr, ")"),
          dark: "var(--ds-text-disabled, ".concat(Eo, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
      },
    },
  };
function jl(e, t) {
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
      ? jl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Jt = 8,
  Io = ["default", "primary", "danger", "warning"],
  as = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  C_ = { default: as.default, compact: as.compact, none: "inherit" },
  R_ = {
    default: "0 ".concat(Jt + Jt / 4, "px"),
    compact: "0 ".concat(Jt + Jt / 4, "px"),
    none: "0",
  },
  P_ = { compact: "0 ".concat(Jt / 4, "px"), default: "0 ".concat(Jt / 4, "px"), none: "0" },
  A_ = { default: "middle", compact: "middle", none: "baseline" },
  Sv = { content: "0 ".concat(Jt / 4, "px"), icon: "0 ".concat(Jt / 4, "px") },
  Ev = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  j_ = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #172B4D)",
    "&::after": ne(ne({}, Ev), {}, { content: '""', borderColor: "var(--ds-border, #091E4224)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #091E4224)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #091E424F)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  I_ = {
    background: "var(--ds-background-brand-bold, #0C66E4)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #0055CC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #09326C)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #0C66E4)",
    },
  },
  D_ = {
    background: "transparent",
    color: "var(--ds-link, #0C66E4)",
    "&:hover": { color: "var(--ds-link, #0C66E4)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #0055CC)", textDecoration: "underline" },
  },
  T_ = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #091E420F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #091E4224)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  M_ = {
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
  L_ = {
    background: "var(--ds-background-warning-bold, #F5CD47)",
    color: "var(--ds-text-warning-inverse, #172B4D)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #E2B203)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #CF9F02)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #F5CD47)",
    },
  },
  $_ = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #5D1F1A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  N_ = {
    background: "var(--ds-background-selected, #E9F2FF)",
    color: "var(--ds-text-selected, #0C66E4)",
    "&:not([disabled])::after": ne(
      ne({}, Ev),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #0C66E4)" },
    ),
  },
  Il = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function Dl(e) {
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
    background: Dl({ group: Al.background[t], key: r, mode: n }),
    color: "".concat(Dl({ group: Al.color[t], key: r, mode: n }), " !important"),
  };
}
function F_(e) {
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
          !Le("platform-component-visual-refresh") && s,
        ),
        {},
        {
          cursor: "pointer",
          height: as[r],
          lineHeight: C_[r],
          padding: o ? P_[r] : R_[r],
          verticalAlign: A_[r],
          width: i ? "100%" : "auto",
          justifyContent: "center",
        },
        !Le("platform-component-visual-refresh") &&
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
              Il,
            ),
            {},
            {
              '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active':
                ne({}, Tr({ appearance: t, key: a ? "selected" : "default", mode: n })),
            },
          ),
      ),
      Le("platform-component-visual-refresh") &&
        (a
          ? N_
          : ne(
              ne(
                ne(
                  ne(
                    ne(
                      ne(
                        ne(ne({}, t === "default" && j_), t === "primary" && I_),
                        t === "link" && D_,
                      ),
                      t === "subtle" && T_,
                    ),
                    t === "subtle-link" && M_,
                  ),
                  t === "warning" && L_,
                ),
                t === "danger" && $_,
              ),
              {},
              {
                "&[disabled]": {
                  color: "var(--ds-text-disabled, #091E424F)",
                  backgroundColor: Io.includes(t)
                    ? "var(--ds-background-disabled, #091E4208)"
                    : "transparent",
                  cursor: "not-allowed",
                  textDecoration: "none",
                  "&:hovered": {
                    backgroundColor: Io.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                  "&:active": {
                    backgroundColor: Io.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                },
              },
              Il,
            )),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function Tl(e) {
  var t = e.spacing;
  return Ct({
    display: "flex",
    margin: t === "none" ? 0 : Sv.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function B_(e) {
  var t = e.spacing;
  return Ct({
    margin: t === "none" ? 0 : Sv.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function z_(e) {
  var t = e.hasOverlay;
  return Ct({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var q_ = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Ms = function (t) {
    return t && y.isValidElement(t) && t.type === sv;
  },
  U_ = [
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
  V_ = { "> *": { pointerEvents: "none" } },
  G_ = Ct({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  H_ = Ct({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  Ml = function (t, r) {
    return !t || Ms(t) ? null : r;
  },
  W_ = function (t, r) {
    return Ms(t) ? t : t ? Mt("span", { css: r }, t) : null;
  },
  K_ = k.forwardRef(function (t, r) {
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
      _ = b === void 0 ? !1 : b,
      w = t.isSelected,
      O = w === void 0 ? !1 : w,
      m = t.onBlur,
      S = t.onClick,
      E = S === void 0 ? _e : S,
      j = t.onFocus,
      D = t.onMouseDown,
      R = D === void 0 ? _e : D,
      T = t.overlay;
    t.shouldFitContainer;
    var z = t.spacing,
      B = z === void 0 ? "default" : z,
      V = t.tabIndex,
      J = V === void 0 ? 0 : V,
      G = t.type,
      q = G === void 0 ? (d ? void 0 : "button") : G,
      X = t.testId,
      N = ae(t, U_),
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
    __(A, s);
    var oe = y.useContext(Cs),
      ue = y.useCallback(
        function (ve, Ue) {
          (oe && oe.tracePress(g, ve.timeStamp), E(ve, Ue));
        },
        [E, oe, g],
      ),
      le = sa({
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
        _ && ve && ve === document.activeElement && ve.blur();
      },
      [_],
    );
    var ce = !!T,
      qe = Ct(z_({ hasOverlay: ce })),
      Oe = !_ && !ce,
      rt = {};
    return (
      (O || _ || i === "warning") &&
        (rt = {
          "[data-theme] & circle": {
            stroke: "".concat(
              O || _
                ? "var(--ds-icon-subtle, ".concat(ua, ")")
                : "var(--ds-icon-warning-inverse, ".concat(ua, ")"),
              " !important",
            ),
          },
        }),
      Mt(
        kv,
        null,
        Mt(
          p,
          te(
            {},
            N,
            {
              ref: be,
              className: l,
              css: [u, Oe ? null : V_],
              "data-has-overlay": ce ? !0 : void 0,
              "data-testid": X,
              disabled: _,
              href: Oe ? d : void 0,
              onBlur: m,
              onClick: le,
              onFocus: j,
              onMouseDown: ge,
              tabIndex: _ ? -1 : J,
              type: q,
            },
            x_({ isInteractive: Oe }),
          ),
          v ? Mt("span", { css: [qe, Tl({ spacing: B }), Ml(c, G_)] }, v) : null,
          W_(c, [qe, B_({ spacing: B })]),
          h ? Mt("span", { css: [qe, Tl({ spacing: B }), Ml(c, H_)] }, h) : null,
          T ? Mt("span", { css: [q_, rt] }, T) : null,
        ),
      )
    );
  });
function Y_(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Ms(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var J_ = [
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
  Ll = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  Ls = k.memo(
    k.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        i = t.children,
        o = t.iconBefore,
        s = t.iconAfter,
        u = t.isSelected,
        c = u === void 0 ? !1 : u,
        l = t.onMouseDown,
        d = l === void 0 ? _e : l,
        f = t.onMouseUp,
        p = f === void 0 ? _e : f,
        h = t.shouldFitContainer,
        v = h === void 0 ? !1 : h,
        g = t.spacing,
        b = g === void 0 ? "default" : g,
        _ = ae(t, J_),
        w = Sm(),
        O = w.mode,
        m = Y_({ children: i, iconBefore: o, iconAfter: s }),
        S = y.useState(!1),
        E = K(S, 2),
        j = E[0],
        D = E[1],
        R = y.useCallback(
          function (B) {
            (d(B), Ll && D(!0));
          },
          [d, D],
        ),
        T = y.useCallback(
          function (B) {
            (p(B), Ll && D(!1));
          },
          [p, D],
        ),
        z = y.useMemo(
          function () {
            return F_({
              appearance: a,
              spacing: b,
              mode: O,
              isSelected: c,
              shouldFitContainer: v,
              isOnlySingleIcon: m,
            });
          },
          [a, b, O, c, v, m],
        );
      return k.createElement(
        K_,
        te({}, _, {
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
Ls.displayName = "Button";
function $l(e) {
  return k.createElement(Ls, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function X_(e) {
  return k.createElement(Ls, te({}, e, { appearance: "subtle" }));
}
var Z_ = { container: "_1e0c1txw _kqswh2mm" };
function Q_(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return k.createElement(
    mi,
    { as: "li", testId: r, key: t, xcss: Z_.container, paddingInline: "space.100" },
    k.createElement(
      em,
      { testId: r && "".concat(r, "-text") },
      k.createElement(sv, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var Nl = {},
  Fl =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function e0(e, t) {
  return !!(e === t || (Fl(e) && Fl(t)));
}
function t0(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!e0(e[r], t[r])) return !1;
  return !0;
}
function r0(e, t) {
  t === void 0 && (t = t0);
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
var n0 = function (t, r, n, a) {
  var i = n.max,
    o = n.ellipsis,
    s = n.transform,
    u = t.length,
    c = u > i,
    l = c && i - 4 < r,
    d = c && r < u - i + 3,
    f = r0(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : u;
      return t.slice(g, b).map(function (_, w) {
        return s(_, g + w, a);
      });
    });
  if (!c) return f(0, u);
  if (l && !d) {
    var p = i - 2;
    return [].concat(
      De(f(0, 1)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: u - p })],
      De(f(u - p)),
    );
  }
  if (!l && d) {
    var h = i - 2;
    return [].concat(
      De(f(0, h)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: h + 1, to: u - 1 })],
      De(f(u - 1)),
    );
  }
  var v = i - 4;
  return [].concat(
    De(f(0, 1)),
    [
      o({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(v / 2),
      }),
    ],
    De(f(r - Math.floor(v / 2), r + v - 1)),
    [o({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: u - 1 })],
    De(f(u - 1)),
  );
};
function Bl(e, t) {
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
function a0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Bl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var is = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  i0 = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.11",
  };
function zl(e) {
  var t = e.chevronDirection,
    r = t === "left" ? my : Sy;
  return k.createElement(
    mi,
    { as: "span", xcss: is.navigatorIconWrapper },
    k.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function o0(e, t) {
  var r = e.components,
    n = r === void 0 ? Nl : r,
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
    g = v === void 0 ? Nl : v,
    b = e.max,
    _ = b === void 0 ? 7 : b,
    w = e.onChange,
    O = w === void 0 ? _e : w,
    m = e.pages,
    S = e.getPageLabel,
    E = e.renderEllipsis,
    j = E === void 0 ? Q_ : E,
    D = e.analyticsContext,
    R = e.testId,
    T = e.isDisabled,
    z = oy(o, function () {
      return i || 0;
    }),
    B = K(z, 2),
    V = B[0],
    J = B[1],
    G = sa(
      a0(
        {
          fn: function (N, A) {
            var be = N.event,
              oe = N.selectedPageIndex;
            (o === void 0 && J(oe), O && O(be, m[oe], A));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: D,
        },
        i0,
      ),
    ),
    q = function (N, A, be) {
      var oe = m[V],
        ue = "".concat(l, " ").concat(S ? S(N, A) : N),
        le = N === oe;
      return k.createElement(
        qa,
        { as: "li", xcss: is.paginationMenuItem, key: "page-".concat(S ? S(N, A) : A) },
        k.createElement(
          X_,
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
    mi,
    { testId: R, style: g, ref: t, "aria-label": u, as: "nav" },
    k.createElement(
      qa,
      { space: "space.0", alignBlock: "center" },
      k.createElement($l, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (N) {
          return G({ event: N, selectedPageIndex: V - 1 });
        },
        isDisabled: T || V === 0,
        iconBefore: k.createElement(zl, { chevronDirection: "left" }),
        "aria-label": f,
        testId: R && "".concat(R, "--left-navigator"),
      }),
      k.createElement(
        qa,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: is.paginationMenu },
        n0(m, V, { max: _, ellipsis: j, transform: q }, R),
      ),
      k.createElement($l, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (N) {
          return G({ event: N, selectedPageIndex: V + 1 });
        },
        isDisabled: T || V === m.length - 1,
        iconBefore: k.createElement(zl, { chevronDirection: "right" }),
        "aria-label": h,
        testId: R && "".concat(R, "--right-navigator"),
      }),
    ),
  );
}
var s0 = y.memo(y.forwardRef(o0));
function u0(e, t, r) {
  return (
    (t = Y(t)),
    Fe(e, xv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function xv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (xv = function () {
    return !!e;
  })();
}
var c0 = (function (e) {
    function t() {
      var r;
      de(this, t);
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
      return (
        (r = u0(this, t, [].concat(a))),
        x(r, "onChange", function (o, s, u) {
          r.props.onChange(s, u);
        }),
        r
      );
    }
    return (
      Be(t, e),
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
              l = De(Array(a)).map(function (f, p) {
                return p + 1;
              }),
              d = o - 1;
            return k.createElement(s0, {
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
  l0 = ["isRanking", "testId"],
  d0 = [
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
function qn(e) {
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
var Ul = "--local-dynamic-table-text-color",
  f0 = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = ae(t, l0);
    return y.createElement(
      "thead",
      te({ "data-testid": n }, a, { className: C(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  v0 = y.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      i = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var s = e.style,
      u = e.testId,
      c = ae(e, d0),
      l = qn(
        qn(qn({}, s), r && Hf({ width: r })),
        {},
        x({}, Ul, "var(--ds-text-subtlest, #626F86)"),
      ),
      d = a === dr,
      f = a === ri,
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
        style: qn(
          qn({}, l),
          {},
          { "--_17ckjys": Vf("var(--ds-text-subtle, ".concat("var(".concat(Ul, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function p0(e, t, r) {
  return (
    (t = Y(t)),
    Fe(e, Cv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Cv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Cv = function () {
    return !!e;
  })();
}
function h0(e) {
  return (function (t) {
    function r() {
      var n;
      de(this, r);
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return (
        (n = p0(this, r, [].concat(i))),
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
      Be(r, t),
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
var Un = {},
  Vl;
function g0() {
  if (Vl) return Un;
  ((Vl = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.default = void 0));
  var e = r(dt()),
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
  return ((n.displayName = "ArrowDownIcon"), (Un.default = n), Un);
}
var b0 = g0();
const y0 = er(b0);
var Vn = {},
  Gl;
function m0() {
  if (Gl) return Vn;
  ((Gl = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.default = void 0));
  var e = r(dt()),
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
  return ((n.displayName = "ArrowUpIcon"), (Vn.default = n), Vn);
}
var _0 = m0();
const w0 = er(_0);
var O0 = "Escape";
function k0(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = y.useRef(!1),
    a = y.useCallback(
      function (o) {
        r || n.current || o.key !== O0 || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    i = y.useCallback(function () {
      n.current = !1;
    }, []);
  y.useEffect(
    function () {
      if (!(r && Le("platform_only_attach_escape_handler_on_view")))
        return _i.bindAll(
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
function Gn(e) {
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
var S0 = y.createContext(null),
  E0 = y.createContext(null);
function x0() {
  var e = y.useContext(E0);
  return e;
}
function C0(e) {
  var t = e.isOpen,
    r = e.onClose,
    n = y.useContext(S0),
    a = x0();
  y.useEffect(
    function () {
      if (n !== null && t) return n.onClose(r, { namespace: a });
    },
    [n, t, a, r],
  );
}
var Yn = { none: 0, small: 100, medium: 350, large: 700 },
  Do = 0.5,
  R0 = { none: Yn.none, small: Yn.small * Do, medium: Yn.medium * Do, large: Yn.large * Do },
  P0 = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  A0 = function () {
    if (!P0()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  j0 = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  I0 = function () {
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
      }, j0(t)),
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
  Rv = { appear: !0, isExiting: !1 },
  Pv = y.createContext(Rv),
  Hl = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rv;
    return k.createElement(Pv.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  Wl = function (t) {
    var r = [];
    return (
      y.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  D0 = function (t, r) {
    for (var n = r.concat([]), a = T0(r), i = 0; i < t.length; i++) {
      var o = t[i],
        s = !a[o.key];
      s && n.splice(i + 1, 0, o);
    }
    return n;
  },
  T0 = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  M0 = function (t, r) {
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
  Av = y.memo(function (e) {
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
      _ = b[0],
      w = b[1],
      O = Wl(_),
      m = Wl(w);
    w !== n && u([w, n]);
    var S = M0(m, O),
      E = !!S.size,
      j = m;
    if ((E && (j = D0(m, O)), a))
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
            return Hl(R, {
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
            return Hl(R, v);
          })),
      j
    );
  }),
  L0 = function () {
    return y.useContext(Pv);
  };
Av.displayName = "ExitingPersistence";
function $0() {
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
var N0 = y.createContext(function () {
    return { isReady: !0, delay: 0, ref: _e };
  }),
  F0 = function () {
    var t = $0(),
      r = y.useContext(N0);
    return r(t);
  },
  B0 = function (t) {
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
      p = F0(),
      h = L0(),
      v = h.isExiting,
      g = h.onFinish,
      b = h.appear,
      _ = I0(),
      w = c || !p.isReady,
      O = v ? 0 : p.delay,
      m = v ? "exiting" : "entering",
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
              l && l(m);
              return;
            }
            var T = function () {
              (m === "exiting" && g?.(), R || D(!1), l?.(m));
            };
            if (A0()) {
              T();
              return;
            }
            return (
              D(!0),
              _(T, v ? R0[f] : Yn[f] + O),
              function () {
                R = !0;
              }
            );
          }
        },
        [g, m, v, f, O, w, _],
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
        m,
      )
    );
  },
  z0 = { top: "bottom", bottom: "top", left: "right", right: "left" },
  q0 = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      i = t.entranceDirection,
      o = t.exitDirection,
      s = t.distance,
      u = s === void 0 ? "proportional" : s,
      c = t.onFinish,
      l = t.isPaused,
      d = i !== void 0 ? z0[i] : void 0,
      f =
        o || d
          ? "fade-out-from-".concat(o || d).concat(u === "proportional" ? "" : "-constant")
          : "fade-out";
    return k.createElement(
      B0,
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
  U0 = y.createContext();
y.createContext();
var V0 = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  G0 = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  H0 = function (t, r) {
    if (typeof t == "function") return G0(t, r);
    t != null && (t.current = r);
  },
  Kl = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        i = n[1];
      return ((r[a] = i), r);
    }, {});
  },
  Yl =
    typeof window < "u" && window.document && window.document.createElement
      ? y.useLayoutEffect
      : y.useEffect,
  Re = "top",
  et = "bottom",
  tt = "right",
  Pe = "left",
  $s = "auto",
  ma = [Re, et, tt, Pe],
  Ur = "start",
  fa = "end",
  W0 = "clippingParents",
  jv = "viewport",
  Hn = "popper",
  K0 = "reference",
  Jl = ma.reduce(function (e, t) {
    return e.concat([t + "-" + Ur, t + "-" + fa]);
  }, []),
  Iv = [].concat(ma, [$s]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Ur, t + "-" + fa]);
  }, []),
  Y0 = "beforeRead",
  J0 = "read",
  X0 = "afterRead",
  Z0 = "beforeMain",
  Q0 = "main",
  ew = "afterMain",
  tw = "beforeWrite",
  rw = "write",
  nw = "afterWrite",
  aw = [Y0, J0, X0, Z0, Q0, ew, tw, rw, nw];
function Et(e) {
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
function fr(e) {
  var t = Ne(e).Element;
  return e instanceof t || e instanceof Element;
}
function Qe(e) {
  var t = Ne(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ns(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Ne(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function iw(e) {
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
function ow(e) {
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
const sw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: iw,
  effect: ow,
  requires: ["computeStyles"],
};
function wt(e) {
  return e.split("-")[0];
}
var cr = Math.max,
  oi = Math.min,
  Vr = Math.round;
function os() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Dv() {
  return !/^((?!chrome|android).)*safari/i.test(os());
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
  var o = fr(e) ? Ne(e) : window,
    s = o.visualViewport,
    u = !Dv() && r,
    c = (n.left + (u && s ? s.offsetLeft : 0)) / a,
    l = (n.top + (u && s ? s.offsetTop : 0)) / i,
    d = n.width / a,
    f = n.height / i;
  return { width: d, height: f, top: l, right: c + d, bottom: l + f, left: c, x: c, y: l };
}
function Fs(e) {
  var t = Gr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Tv(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Ns(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function zt(e) {
  return Ne(e).getComputedStyle(e);
}
function uw(e) {
  return ["table", "td", "th"].indexOf(Et(e)) >= 0;
}
function tr(e) {
  return ((fr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Si(e) {
  return Et(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ns(e) ? e.host : null) || tr(e);
}
function Xl(e) {
  return !Qe(e) || zt(e).position === "fixed" ? null : e.offsetParent;
}
function cw(e) {
  var t = /firefox/i.test(os()),
    r = /Trident/i.test(os());
  if (r && Qe(e)) {
    var n = zt(e);
    if (n.position === "fixed") return null;
  }
  var a = Si(e);
  for (Ns(a) && (a = a.host); Qe(a) && ["html", "body"].indexOf(Et(a)) < 0; ) {
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
function _a(e) {
  for (var t = Ne(e), r = Xl(e); r && uw(r) && zt(r).position === "static"; ) r = Xl(r);
  return r && (Et(r) === "html" || (Et(r) === "body" && zt(r).position === "static"))
    ? t
    : r || cw(e) || t;
}
function Bs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Qn(e, t, r) {
  return cr(e, oi(t, r));
}
function lw(e, t, r) {
  var n = Qn(e, t, r);
  return n > r ? r : n;
}
function Mv() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Lv(e) {
  return Object.assign({}, Mv(), e);
}
function $v(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var dw = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Lv(typeof t != "number" ? t : $v(t, ma))
  );
};
function fw(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    i = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    s = wt(r.placement),
    u = Bs(s),
    c = [Pe, tt].indexOf(s) >= 0,
    l = c ? "height" : "width";
  if (!(!i || !o)) {
    var d = dw(a.padding, r),
      f = Fs(i),
      p = u === "y" ? Re : Pe,
      h = u === "y" ? et : tt,
      v = r.rects.reference[l] + r.rects.reference[u] - o[u] - r.rects.popper[l],
      g = o[u] - r.rects.reference[u],
      b = _a(i),
      _ = b ? (u === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      w = v / 2 - g / 2,
      O = d[p],
      m = _ - f[l] - d[h],
      S = _ / 2 - f[l] / 2 + w,
      E = Qn(O, S, m),
      j = u;
    r.modifiersData[n] = ((t = {}), (t[j] = E), (t.centerOffset = E - S), t);
  }
}
function vw(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (Tv(t.elements.popper, a) && (t.elements.arrow = a)));
}
const pw = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: fw,
  effect: vw,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Hr(e) {
  return e.split("-")[1];
}
var hw = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function gw(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Vr(r * a) / a || 0, y: Vr(n * a) / a || 0 };
}
function Zl(e) {
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
    _ = o.hasOwnProperty("y"),
    w = Pe,
    O = Re,
    m = window;
  if (c) {
    var S = _a(r),
      E = "clientHeight",
      j = "clientWidth";
    if (
      (S === Ne(r) &&
        ((S = tr(r)),
        zt(S).position !== "static" &&
          s === "absolute" &&
          ((E = "scrollHeight"), (j = "scrollWidth"))),
      (S = S),
      a === Re || ((a === Pe || a === tt) && i === fa))
    ) {
      O = et;
      var D = d && S === m && m.visualViewport ? m.visualViewport.height : S[E];
      ((v -= D - n.height), (v *= u ? 1 : -1));
    }
    if (a === Pe || ((a === Re || a === et) && i === fa)) {
      w = tt;
      var R = d && S === m && m.visualViewport ? m.visualViewport.width : S[j];
      ((p -= R - n.width), (p *= u ? 1 : -1));
    }
  }
  var T = Object.assign({ position: s }, c && hw),
    z = l === !0 ? gw({ x: p, y: v }, Ne(r)) : { x: p, y: v };
  if (((p = z.x), (v = z.y), u)) {
    var B;
    return Object.assign(
      {},
      T,
      ((B = {}),
      (B[O] = _ ? "0" : ""),
      (B[w] = b ? "0" : ""),
      (B.transform =
        (m.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + v + "px)"
          : "translate3d(" + p + "px, " + v + "px, 0)"),
      B),
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}), (t[O] = _ ? v + "px" : ""), (t[w] = b ? p + "px" : ""), (t.transform = ""), t),
  );
}
function bw(e) {
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
      Zl(
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
        Zl(
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
const yw = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: bw, data: {} };
var $a = { passive: !0 };
function mw(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    i = a === void 0 ? !0 : a,
    o = n.resize,
    s = o === void 0 ? !0 : o,
    u = Ne(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      c.forEach(function (l) {
        l.addEventListener("scroll", r.update, $a);
      }),
    s && u.addEventListener("resize", r.update, $a),
    function () {
      (i &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", r.update, $a);
        }),
        s && u.removeEventListener("resize", r.update, $a));
    }
  );
}
const _w = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: mw,
  data: {},
};
var ww = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Wa(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return ww[t];
  });
}
var Ow = { start: "end", end: "start" };
function Ql(e) {
  return e.replace(/start|end/g, function (t) {
    return Ow[t];
  });
}
function zs(e) {
  var t = Ne(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function qs(e) {
  return Gr(tr(e)).left + zs(e).scrollLeft;
}
function kw(e, t) {
  var r = Ne(e),
    n = tr(e),
    a = r.visualViewport,
    i = n.clientWidth,
    o = n.clientHeight,
    s = 0,
    u = 0;
  if (a) {
    ((i = a.width), (o = a.height));
    var c = Dv();
    (c || (!c && t === "fixed")) && ((s = a.offsetLeft), (u = a.offsetTop));
  }
  return { width: i, height: o, x: s + qs(e), y: u };
}
function Sw(e) {
  var t,
    r = tr(e),
    n = zs(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = cr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    o = cr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    s = -n.scrollLeft + qs(e),
    u = -n.scrollTop;
  return (
    zt(a || r).direction === "rtl" && (s += cr(r.clientWidth, a ? a.clientWidth : 0) - i),
    { width: i, height: o, x: s, y: u }
  );
}
function Us(e) {
  var t = zt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Nv(e) {
  return ["html", "body", "#document"].indexOf(Et(e)) >= 0
    ? e.ownerDocument.body
    : Qe(e) && Us(e)
      ? e
      : Nv(Si(e));
}
function ea(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Nv(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = Ne(n),
    o = a ? [i].concat(i.visualViewport || [], Us(n) ? n : []) : n,
    s = t.concat(o);
  return a ? s : s.concat(ea(Si(o)));
}
function ss(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Ew(e, t) {
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
function ed(e, t, r) {
  return t === jv ? ss(kw(e, r)) : fr(t) ? Ew(t, r) : ss(Sw(tr(e)));
}
function xw(e) {
  var t = ea(Si(e)),
    r = ["absolute", "fixed"].indexOf(zt(e).position) >= 0,
    n = r && Qe(e) ? _a(e) : e;
  return fr(n)
    ? t.filter(function (a) {
        return fr(a) && Tv(a, n) && Et(a) !== "body";
      })
    : [];
}
function Cw(e, t, r, n) {
  var a = t === "clippingParents" ? xw(e) : [].concat(t),
    i = [].concat(a, [r]),
    o = i[0],
    s = i.reduce(
      function (u, c) {
        var l = ed(e, c, n);
        return (
          (u.top = cr(l.top, u.top)),
          (u.right = oi(l.right, u.right)),
          (u.bottom = oi(l.bottom, u.bottom)),
          (u.left = cr(l.left, u.left)),
          u
        );
      },
      ed(e, o, n),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Fv(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? wt(n) : null,
    i = n ? Hr(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    u;
  switch (a) {
    case Re:
      u = { x: o, y: t.y - r.height };
      break;
    case et:
      u = { x: o, y: t.y + t.height };
      break;
    case tt:
      u = { x: t.x + t.width, y: s };
      break;
    case Pe:
      u = { x: t.x - r.width, y: s };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = a ? Bs(a) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (i) {
      case Ur:
        u[c] = u[c] - (t[l] / 2 - r[l] / 2);
        break;
      case fa:
        u[c] = u[c] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return u;
}
function va(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    i = r.strategy,
    o = i === void 0 ? e.strategy : i,
    s = r.boundary,
    u = s === void 0 ? W0 : s,
    c = r.rootBoundary,
    l = c === void 0 ? jv : c,
    d = r.elementContext,
    f = d === void 0 ? Hn : d,
    p = r.altBoundary,
    h = p === void 0 ? !1 : p,
    v = r.padding,
    g = v === void 0 ? 0 : v,
    b = Lv(typeof g != "number" ? g : $v(g, ma)),
    _ = f === Hn ? K0 : Hn,
    w = e.rects.popper,
    O = e.elements[h ? _ : f],
    m = Cw(fr(O) ? O : O.contextElement || tr(e.elements.popper), u, l, o),
    S = Gr(e.elements.reference),
    E = Fv({ reference: S, element: w, placement: a }),
    j = ss(Object.assign({}, w, E)),
    D = f === Hn ? j : S,
    R = {
      top: m.top - D.top + b.top,
      bottom: D.bottom - m.bottom + b.bottom,
      left: m.left - D.left + b.left,
      right: D.right - m.right + b.right,
    },
    T = e.modifiersData.offset;
  if (f === Hn && T) {
    var z = T[a];
    Object.keys(R).forEach(function (B) {
      var V = [tt, et].indexOf(B) >= 0 ? 1 : -1,
        J = [Re, et].indexOf(B) >= 0 ? "y" : "x";
      R[B] += z[J] * V;
    });
  }
  return R;
}
function Rw(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    i = r.rootBoundary,
    o = r.padding,
    s = r.flipVariations,
    u = r.allowedAutoPlacements,
    c = u === void 0 ? Iv : u,
    l = Hr(n),
    d = l
      ? s
        ? Jl
        : Jl.filter(function (h) {
            return Hr(h) === l;
          })
      : ma,
    f = d.filter(function (h) {
      return c.indexOf(h) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (h, v) {
    return ((h[v] = va(e, { placement: v, boundary: a, rootBoundary: i, padding: o })[wt(v)]), h);
  }, {});
  return Object.keys(p).sort(function (h, v) {
    return p[h] - p[v];
  });
}
function Pw(e) {
  if (wt(e) === $s) return [];
  var t = Wa(e);
  return [Ql(e), t, Ql(t)];
}
function Aw(e) {
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
        _ = b === g,
        w = u || (_ || !h ? [Wa(g)] : Pw(g)),
        O = [g].concat(w).reduce(function (le, ge) {
          return le.concat(
            wt(ge) === $s
              ? Rw(t, {
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
        V = [Re, et].indexOf(z) >= 0,
        J = V ? "width" : "height",
        G = va(t, { placement: T, boundary: l, rootBoundary: d, altBoundary: f, padding: c }),
        q = V ? (B ? tt : Pe) : B ? et : Re;
      m[J] > S[J] && (q = Wa(q));
      var X = Wa(q),
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
            var ce = O.find(function (qe) {
              var Oe = E.get(qe);
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
const jw = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Aw,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function td(e, t, r) {
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
function rd(e) {
  return [Re, tt, et, Pe].some(function (t) {
    return e[t] >= 0;
  });
}
function Iw(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    o = va(t, { elementContext: "reference" }),
    s = va(t, { altBoundary: !0 }),
    u = td(o, n),
    c = td(s, a, i),
    l = rd(u),
    d = rd(c);
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
const Dw = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Iw,
};
function Tw(e, t, r) {
  var n = wt(e),
    a = [Pe, Re].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = i[0],
    s = i[1];
  return (
    (o = o || 0),
    (s = (s || 0) * a),
    [Pe, tt].indexOf(n) >= 0 ? { x: s, y: o } : { x: o, y: s }
  );
}
function Mw(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    i = a === void 0 ? [0, 0] : a,
    o = Iv.reduce(function (l, d) {
      return ((l[d] = Tw(d, t.rects, i)), l);
    }, {}),
    s = o[t.placement],
    u = s.x,
    c = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += u), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o));
}
const Lw = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Mw };
function $w(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Fv({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const Nw = { name: "popperOffsets", enabled: !0, phase: "read", fn: $w, data: {} };
function Fw(e) {
  return e === "x" ? "y" : "x";
}
function Bw(e) {
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
    g = va(t, { boundary: u, rootBoundary: c, padding: d, altBoundary: l }),
    b = wt(t.placement),
    _ = Hr(t.placement),
    w = !_,
    O = Bs(b),
    m = Fw(O),
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
        V = O === "y" ? Re : Pe,
        J = O === "y" ? et : tt,
        G = O === "y" ? "height" : "width",
        q = S[O],
        X = q + g[V],
        N = q - g[J],
        A = p ? -j[G] / 2 : 0,
        be = _ === Ur ? E[G] : j[G],
        oe = _ === Ur ? -j[G] : -E[G],
        ue = t.elements.arrow,
        le = p && ue ? Fs(ue) : { width: 0, height: 0 },
        ge = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Mv(),
        ce = ge[V],
        qe = ge[J],
        Oe = Qn(0, E[G], le[G]),
        rt = w ? E[G] / 2 - A - Oe - ce - R.mainAxis : be - Oe - ce - R.mainAxis,
        ve = w ? -E[G] / 2 + A + Oe + qe + R.mainAxis : oe + Oe + qe + R.mainAxis,
        Ue = t.elements.arrow && _a(t.elements.arrow),
        wr = Ue ? (O === "y" ? Ue.clientTop || 0 : Ue.clientLeft || 0) : 0,
        Pt = (B = T?.[O]) != null ? B : 0,
        ke = q + rt - Pt - wr,
        Se = q + ve - Pt,
        Vt = Qn(p ? oi(X, ke) : X, q, p ? cr(N, Se) : N);
      ((S[O] = Vt), (z[O] = Vt - q));
    }
    if (s) {
      var pt,
        nt = O === "x" ? Re : Pe,
        Gt = O === "x" ? et : tt,
        Ve = S[m],
        Ie = m === "y" ? "height" : "width",
        Ee = Ve + g[nt],
        at = Ve - g[Gt],
        Ht = [Re, Pe].indexOf(b) !== -1,
        xa = (pt = T?.[m]) != null ? pt : 0,
        Ca = Ht ? Ee : Ve - E[Ie] - j[Ie] - xa + R.altAxis,
        Ra = Ht ? Ve + E[Ie] + j[Ie] - xa - R.altAxis : at,
        Pa = p && Ht ? lw(Ca, Ve, Ra) : Qn(p ? Ca : Ee, Ve, p ? Ra : at);
      ((S[m] = Pa), (z[m] = Pa - Ve));
    }
    t.modifiersData[n] = z;
  }
}
const zw = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Bw,
  requiresIfExists: ["offset"],
};
function qw(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Uw(e) {
  return e === Ne(e) || !Qe(e) ? zs(e) : qw(e);
}
function Vw(e) {
  var t = e.getBoundingClientRect(),
    r = Vr(t.width) / e.offsetWidth || 1,
    n = Vr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Gw(e, t, r) {
  r === void 0 && (r = !1);
  var n = Qe(t),
    a = Qe(t) && Vw(t),
    i = tr(t),
    o = Gr(e, a, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    u = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Et(t) !== "body" || Us(i)) && (s = Uw(t)),
      Qe(t) ? ((u = Gr(t, !0)), (u.x += t.clientLeft), (u.y += t.clientTop)) : i && (u.x = qs(i))),
    {
      x: o.left + s.scrollLeft - u.x,
      y: o.top + s.scrollTop - u.y,
      width: o.width,
      height: o.height,
    }
  );
}
function Hw(e) {
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
function Ww(e) {
  var t = Hw(e);
  return aw.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function Kw(e) {
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
function Yw(e) {
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
var nd = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ad() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Jw(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    i = a === void 0 ? nd : a;
  return function (s, u, c) {
    c === void 0 && (c = i);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, nd, i),
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
          var _ = typeof b == "function" ? b(l.options) : b;
          (v(),
            (l.options = Object.assign({}, i, l.options, _)),
            (l.scrollParents = {
              reference: fr(s) ? ea(s) : s.contextElement ? ea(s.contextElement) : [],
              popper: ea(u),
            }));
          var w = Ww(Yw([].concat(n, l.options.modifiers)));
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
              _ = b.reference,
              w = b.popper;
            if (ad(_, w)) {
              ((l.rects = {
                reference: Gw(_, _a(w), l.options.strategy === "fixed"),
                popper: Fs(w),
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
                  E = m.options,
                  j = E === void 0 ? {} : E,
                  D = m.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: j, name: D, instance: p }) || l);
              }
            }
          }
        },
        update: Kw(function () {
          return new Promise(function (g) {
            (p.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (v(), (f = !0));
        },
      };
    if (!ad(s, u)) return p;
    p.setOptions(c).then(function (g) {
      !f && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function h() {
      l.orderedModifiers.forEach(function (g) {
        var b = g.name,
          _ = g.options,
          w = _ === void 0 ? {} : _,
          O = g.effect;
        if (typeof O == "function") {
          var m = O({ state: l, name: b, instance: p, options: w }),
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
var Xw = [_w, Nw, yw, sw, Lw, jw, zw, pw, Dw],
  Zw = Jw({ defaultModifiers: Xw }),
  To,
  id;
function Qw() {
  if (id) return To;
  id = 1;
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
    (To = function (o, s) {
      try {
        return a(o, s);
      } catch (u) {
        if ((u.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw u;
      }
    }),
    To
  );
}
var e1 = Qw();
const t1 = er(e1);
var r1 = [],
  n1 = function (t, r, n) {
    n === void 0 && (n = {});
    var a = y.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || r1,
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
            gi.flushSync(function () {
              u({
                styles: Kl(
                  v.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: Kl(
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
          return t1(a.current, f) ? a.current || f : ((a.current = f), f);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c],
      ),
      d = y.useRef();
    return (
      Yl(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      Yl(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || Zw,
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
  a1 = function () {},
  i1 = function () {
    return Promise.resolve(null);
  },
  o1 = [];
function s1(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    i = e.modifiers,
    o = i === void 0 ? o1 : i,
    s = e.referenceElement,
    u = e.onFirstUpdate,
    c = e.innerRef,
    l = e.children,
    d = y.useContext(U0),
    f = y.useState(null),
    p = f[0],
    h = f[1],
    v = y.useState(null),
    g = v[0],
    b = v[1];
  y.useEffect(
    function () {
      H0(c, p);
    },
    [c, p],
  );
  var _ = y.useMemo(
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
    w = n1(s || d, p, _),
    O = w.state,
    m = w.styles,
    S = w.forceUpdate,
    E = w.update,
    j = y.useMemo(
      function () {
        return {
          ref: h,
          style: m.popper,
          placement: O ? O.placement : r,
          hasPopperEscaped:
            O && O.modifiersData.hide ? O.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            O && O.modifiersData.hide ? O.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: m.arrow, ref: b },
          forceUpdate: S || a1,
          update: E || i1,
        };
      },
      [h, b, r, O, m, E, S],
    );
  return V0(l)(j);
}
function u1(e) {
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
            _ = l.height - 2 * t;
          (v === "top" && (_ = u.rects.reference.y + g.y - t),
            v === "bottom" && (_ = l.height - f.y - t),
            v === "left" && (b = u.rects.reference.x + g.x - t),
            v === "right" && (b = l.width - f.x - t),
            (u.styles.popper.maxWidth = "".concat(b, "px")),
            (u.styles.popper.maxHeight = "".concat(_, "px")));
        }
      },
    },
  ];
}
var us = 5,
  c1 = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: us,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function l1() {
  return null;
}
var d1 = [0, 8];
function f1(e) {
  var t = e.children,
    r = t === void 0 ? l1 : t,
    n = e.offset,
    a = n === void 0 ? d1 : n,
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
            options: { padding: us, rootBoundary: p ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [v, g] } },
          m = p ? u1({ viewportPadding: us }) : [];
        return [].concat(c1, [w, O], De(m));
      },
      [v, g, p],
    ),
    _ = y.useMemo(
      function () {
        return c == null ? b : [].concat(De(b), De(c));
      },
      [b, c],
    );
  return k.createElement(s1, { modifiers: _, placement: o, strategy: d, referenceElement: u }, r);
}
var Bv = "atlaskit-portal-container",
  zv = "body > .atlaskit-portal-container",
  qv = "atlaskit-portal",
  v1 = function (t) {
    var r = document.createElement("div");
    return ((r.className = qv), (r.style.zIndex = "".concat(t)), r);
  },
  Uv = function () {
    return document.body;
  },
  Vv = function () {
    var t = document.querySelector(zv);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = Bv),
        (n.style.display = "flex"),
        (r = Uv()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  p1 = function (t) {
    Vv().removeChild(t);
  },
  h1 = function (t) {
    t.parentElement || Vv().appendChild(t);
  },
  Gv = function () {
    return document !== void 0;
  },
  g1 = function (t) {
    if (Gv()) {
      var r = document.createElement("div");
      return ((r.className = qv), (r.style.zIndex = "".concat(t)), r);
    }
  },
  b1 = function () {
    if (Gv()) {
      var t = document.querySelector(zv);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = Bv),
          (n.style.display = "flex"),
          (r = Uv()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function y1(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useMemo(
      function () {
        return v1(t);
      },
      [t],
    );
  return (
    h1(n),
    y.useEffect(
      function () {
        return function () {
          p1(n);
        };
      },
      [n],
    ),
    gi.createPortal(r, n)
  );
}
var Hv = typeof window < "u" ? y.useLayoutEffect : y.useEffect;
function m1(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useState(null),
    a = K(n, 2),
    i = a[0],
    o = a[1];
  Hv(
    function () {
      var u = g1(t);
      o(u);
      var c = b1();
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
  return i ? gi.createPortal(s, i) : null;
}
var _1 = function (t) {
    var r = y.useState(!1),
      n = K(r, 2),
      a = n[0],
      i = n[1],
      o = y.useState(function () {
        return t === "layoutEffect" ? Hv : y.useEffect;
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
  w1 = "akPortalMount",
  O1 = "akPortalUnmount",
  od = {
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
  k1 = function (t) {
    return od.hasOwnProperty(t) ? od[t] : null;
  },
  S1 = function (t, r) {
    var n = { layer: k1(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function sd(e, t) {
  var r = S1(e, t);
  window.dispatchEvent(r);
}
var E1 = function (t) {
  var r = Number(t);
  y.useEffect(
    function () {
      return (
        sd(w1, r),
        function () {
          sd(O1, r);
        }
      );
    },
    [r],
  );
};
function x1(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    i = a === void 0 ? "effect" : a,
    o = _1(i);
  return (
    E1(r),
    Le("platform_design_system_team_portal_logic_r18_fix")
      ? k.createElement(m1, { zIndex: r }, n)
      : o
        ? k.createElement(y1, { zIndex: r }, n)
        : null
  );
}
var ta = new Set(),
  pa = null;
function ud() {
  if (!pa) {
    pa = _i.bindAll(window, [
      { type: "dragend", listener: Mo },
      { type: "pointerdown", listener: Mo },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            Mo();
          };
        })(),
      },
    ]);
    var e = Array.from(ta);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function Mo() {
  var e;
  ((e = pa) === null || e === void 0 || e(), (pa = null));
  var t = Array.from(ta);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function C1() {
  return _i.bindAll(window, [
    { type: "dragstart", listener: ud },
    { type: "dragenter", listener: ud },
  ]);
}
var Na = null;
function R1(e) {
  return (
    Na || (Na = C1()),
    ta.add(e),
    e.onRegister({ isDragging: pa !== null }),
    function () {
      if ((ta.delete(e), ta.size === 0)) {
        var r;
        ((r = Na) === null || r === void 0 || r(), (Na = null));
      }
    }
  );
}
var ra = null;
function Jn() {
  ra != null && (window.clearTimeout(ra), (ra = null));
}
function cd(e, t) {
  (Jn(),
    (ra = window.setTimeout(function () {
      ((ra = null), e());
    }, t)));
}
var ht = null;
function P1(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(ht && ht.entry === e);
  }
  function n() {
    r() && (Jn(), (ht = null));
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
        ((t = "shown"), Jn());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), Jn(), e.show({ isImmediate: !1 }));
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
          cd(function () {
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
    (ht && (Jn(), ht.entry.hide({ isImmediate: !0 }), ht.entry.done(), (ht = null)),
      (ht = { entry: e, isVisible: c }));
    function h() {
      ((t = "shown"), e.show({ isImmediate: p }));
    }
    if (p) {
      h();
      return;
    }
    ((t = "waiting-to-show"), cd(h, e.delay));
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
function A1(e, t) {
  var r = mm();
  return t ? "".concat(r(e)) : void 0;
}
var ld = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81u0j _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d7jlr _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7",
  },
  j1 = function (t) {
    var r = t.shortcut;
    return y.createElement(
      "div",
      { className: C([ld.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return y.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: C([ld.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  Wv = y.forwardRef(function (t, r) {
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
        d && Le("platform-dst-tooltip-shortcuts") && y.createElement(j1, { shortcut: d }),
      ),
    );
  });
Wv.displayName = "TooltipPrimitive";
var Lo = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _85i5v77o _1q51v77o _y4ti12x7 _bozg12x7 _slp31hna",
    baseRefreshedPadding: "_1q511b66 _85i51b66",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  Kv = y.forwardRef(function (t, r) {
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
      Wv,
      {
        ref: r,
        style: n,
        className: C([
          Lo.base,
          Le("platform-dst-tooltip-shortcuts") && Lo.baseRefreshedPadding,
          o && Lo.truncate,
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
Kv.displayName = "TooltipContainer";
function dd(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
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
function Mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : fd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var I1 = _m.tooltip(),
  vd = {
    componentName: "tooltip",
    packageName: "@atlaskit/tooltip",
    packageVersion: "0.0.0-development",
  },
  D1 = { top: "bottom", bottom: "top", left: "right", right: "left" },
  T1 = function (t) {
    return t.split("-")[0];
  };
function M1(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    i = a === void 0 ? "bottom" : a,
    o = e.content,
    s = e.truncate,
    u = s === void 0 ? !1 : s,
    c = e.component,
    l = c === void 0 ? Kv : c,
    d = e.tag,
    f = d === void 0 ? "div" : d,
    p = e.testId,
    h = e.delay,
    v = h === void 0 ? 300 : h,
    g = e.onShow,
    b = g === void 0 ? _e : g,
    _ = e.onHide,
    w = _ === void 0 ? _e : _,
    O = e.canAppear,
    m = e.hideTooltipOnClick,
    S = m === void 0 ? !1 : m,
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
    X = Fc(Mr({ fn: b, action: "displayed", analyticsData: D }, vd)),
    N = Fc(Mr({ fn: w, action: "hidden", analyticsData: D }, vd)),
    A = y.useRef(null),
    be = y.useState("hide"),
    oe = K(be, 2),
    ue = oe[0],
    le = oe[1],
    ge = y.useRef(null),
    ce = y.useRef(null),
    qe = function (re) {
      ((ce.current = re), (ge.current = re ? re.firstElementChild : null));
    },
    Oe = y.useCallback(function (L) {
      ge.current = L;
    }, []),
    rt = Gn(ue),
    ve = Gn(X),
    Ue = Gn(N),
    wr = Gn(v),
    Pt = Gn(O),
    ke = y.useRef(!1),
    Se = y.useCallback(function (L) {
      ((A.current = L), (ke.current = !1));
    }, []),
    Vt = y.useCallback(
      function () {
        A.current &&
          (ke.current && Ue.current(), (A.current = null), (ke.current = !1), le("hide"));
      },
      [Ue],
    ),
    pt = y.useCallback(
      function () {
        A.current && (A.current.abort(), ke.current && Ue.current(), (A.current = null));
      },
      [Ue],
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
    return R1({
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
      function (L) {
        var re;
        if (!nt.current) {
          if ((A.current && !A.current.isActive() && pt(), A.current && A.current.isActive())) {
            A.current.keep();
            return;
          }
          if (!(Pt.current && !((re = Pt.current) !== null && re !== void 0 && re.call(Pt)))) {
            var At = {
                source: L,
                delay: wr.current,
                show: function (Or) {
                  var en = Or.isImmediate;
                  (ke.current || ((ke.current = !0), ve.current()),
                    le(en ? "show-immediate" : "fade-in"));
                },
                hide: function (Or) {
                  var en = Or.isImmediate;
                  le(en ? "hide" : "before-fade-out");
                },
                done: Vt,
              },
              qi = P1(At);
            Se(qi);
          }
        }
      },
      [Pt, wr, Vt, Se, pt, ve],
    ),
    Ve = y.useCallback(
      function () {
        var L;
        (L = A.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
      },
      [A],
    );
  (k0({ onClose: Ve, isDisabled: ue === "hide" || ue === "fade-out" }),
    y.useEffect(
      function () {
        if (ue === "hide") return _e;
        ue === "before-fade-out" && le("fade-out");
        var L = _i.bind(window, {
          type: "scroll",
          listener: function () {
            A.current && A.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return L;
      },
      [ue],
    ));
  var Ie = y.useCallback(
      function () {
        j && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [j],
    ),
    Ee = y.useCallback(
      function () {
        S && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    at = y.useCallback(
      function (L) {
        if (!(ce.current && L.target === ce.current) && !L.defaultPrevented) {
          L.preventDefault();
          var re =
            n === "mouse"
              ? { type: "mouse", mouse: dd({ left: L.clientX, top: L.clientY }) }
              : { type: "keyboard" };
          Gt(re);
        }
      },
      [n, Gt],
    ),
    Ht = y.useCallback(function (L) {
      (ce.current && L.target === ce.current) ||
        L.defaultPrevented ||
        (L.preventDefault(), A.current && A.current.requestHide({ isImmediate: !1 }));
    }, []),
    xa =
      n === "mouse"
        ? function (L) {
            var re;
            (re = A.current) !== null &&
              re !== void 0 &&
              re.isActive() &&
              (A.current.mousePosition = dd({ left: L.clientX, top: L.clientY }));
          }
        : void 0,
    Ca = y.useCallback(function () {
      if (A.current && A.current.isActive()) {
        A.current.keep();
        return;
      }
    }, []),
    Ra = y.useCallback(
      function (L) {
        try {
          if (!L.target.matches(":focus-visible") && Le("platform-tooltip-focus-visible-new"))
            return;
        } catch {}
        Gt({ type: "keyboard" });
      },
      [Gt],
    ),
    Pa = y.useCallback(function () {
      A.current && A.current.requestHide({ isImmediate: !1 });
    }, []),
    Yp = y.useCallback(
      function (L) {
        L === "exiting" &&
          rt.current === "fade-out" &&
          A.current &&
          A.current.finishHideAnimation();
      },
      [rt],
    ),
    Jp = f,
    Bi = ue !== "hide" && !!o,
    Qs = !J && Bi,
    eu = ue !== "hide" && ue !== "fade-out",
    Xp = y.useCallback(function () {
      var L;
      (L = A.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
    }, []);
  C0({ isOpen: Bi && eu, onClose: Xp });
  var tu = function () {
      var re;
      if (n === "mouse" && (re = A.current) !== null && re !== void 0 && re.mousePosition) {
        var At;
        return (At = A.current) === null || At === void 0 ? void 0 : At.mousePosition;
      }
      return ge.current || void 0;
    },
    Qr = A1("tooltip", Qs),
    zi = {
      onMouseOver: at,
      onMouseOut: Ht,
      onMouseMove: xa,
      onMouseDown: Ie,
      onClick: Ee,
      onFocus: Ra,
      onBlur: Pa,
    };
  p && (zi["data-testid"] = "".concat(p, "--container"));
  var ru = typeof t == "function";
  y.useEffect(
    function () {
      if (!ru) {
        var L = ge.current;
        if (!(!L || !Qr))
          return (
            L.setAttribute("aria-describedby", Qr),
            function () {
              return L.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [ru, Qr],
  );
  var nu = Qs
    ? k.createElement(
        "span",
        { "data-testid": p ? "".concat(p, "-hidden") : void 0, hidden: !0, id: Qr },
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
          t(Mr(Mr({}, zi), {}, { "aria-describedby": Qr, ref: Oe })),
          nu,
        )
      : k.createElement(Jp, te({}, zi, { ref: qe, role: "presentation" }), t, nu),
    Bi
      ? k.createElement(
          x1,
          { zIndex: I1 },
          k.createElement(f1, { placement: q, referenceElement: tu(), strategy: T }, function (L) {
            var re = L.ref,
              At = L.style,
              qi = L.update,
              Ui = L.placement,
              Or = n === "mouse" ? void 0 : D1[T1(Ui)];
            return k.createElement(
              Av,
              { appear: !0 },
              eu &&
                k.createElement(
                  q0,
                  {
                    distance: "constant",
                    entranceDirection: Or,
                    exitDirection: Or,
                    onFinish: Yp,
                    duration: ue !== "show-immediate" ? "medium" : "none",
                  },
                  function (en) {
                    var Zp = en.className;
                    return k.createElement(
                      l,
                      {
                        ref: re,
                        className: "Tooltip ".concat(Zp),
                        style: Mr(Mr({}, At), B && { pointerEvents: "none" }),
                        truncate: u,
                        placement: q,
                        testId: tu() ? p : p && "".concat(p, "--unresolved"),
                        onMouseOut: Ht,
                        onMouseOver: Ca,
                        shortcut: G,
                      },
                      typeof o == "function" ? o({ update: qi }) : o,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var L1 = [
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
  Wn = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  pd = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syaz1gjq _k48pmoej" },
  Yv = function (t) {
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
      _ = ae(t, L1),
      w = y.useState(!1),
      O = K(w, 2),
      m = O[0],
      S = O[1],
      E = y.useState(!1),
      j = K(E, 2),
      D = j[0],
      R = j[1],
      T = c === l || s !== void 0,
      z = m || T || D,
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
        mi,
        { xcss: pd.headCellContainer, onMouseEnter: q, onMouseLeave: X, onFocus: J, onBlur: G },
        k.createElement(
          M1,
          { content: s === dr ? f : h },
          k.createElement(
            sm,
            { onClick: u, xcss: Wn.buttonWrapper, "aria-roledescription": g },
            k.createElement(
              ai,
              { xcss: B ? Wn.hideIconHeaderWrapper : Wn.visibleHeaderWrapper },
              k.createElement("span", { className: C([pd.text]) }, r),
            ),
            V &&
              k.createElement(
                ai,
                { xcss: z ? Wn.sortIconVisibleWrapper : Wn.sortIconHiddenWrapper },
                s === dr
                  ? k.createElement(w0, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : k.createElement(y0, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return k.createElement(
      v0,
      te(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof i != "string" ? i : null,
        },
        _,
        { isSortable: o, sortOrder: s },
      ),
      o ? N : r,
    );
  },
  $1 = ["isRanking", "refHeight", "refWidth"];
function N1(e, t, r) {
  return (
    (t = Y(t)),
    Fe(e, Jv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var F1 = (function (e) {
    function t() {
      return (de(this, t), N1(this, t, arguments));
    }
    return (
      Be(t, e),
      fe(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var i = n.refWidth,
              o = ae(n, $1),
              s = Yh(a, i);
            return k.createElement(Yv, te({ inlineStyles: s }, o));
          },
        },
      ])
    );
  })(k.Component),
  B1 = h0(F1),
  z1 = ["cells"],
  q1 = [
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
function U1(e, t, r) {
  return (
    (t = Y(t)),
    Fe(e, Xv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var V1 = (function (e) {
    function t(r) {
      var n;
      return (de(this, t), (n = U1(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Be(t, e),
      fe(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            Qa(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              Qa(n.sortKey, n.head);
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
            var h = d ? B1 : Yv,
              v = i.cells,
              g = ae(i, z1);
            return k.createElement(
              f0,
              te({}, g, { isRanking: l, testId: f && "".concat(f, "--head") }),
              k.createElement(
                "tr",
                null,
                v.map(function (b, _) {
                  var w = b.ascendingSortTooltip,
                    O = b.buttonAriaRoleDescription,
                    m = b.colSpan,
                    S = b.content,
                    E = b.descendingSortTooltip,
                    j = b.isIconOnlyHeader,
                    D = b.isSortable,
                    R = b.key,
                    T = b.shouldTruncate,
                    z = b.testId,
                    B = b.width,
                    V = ae(b, q1),
                    J = "head-cell-".concat(_),
                    G = function () {
                      (n.setState({ activeSortButtonId: J }), D && c(b)());
                    };
                  return k.createElement(
                    h,
                    te(
                      {
                        colSpan: m,
                        content: S,
                        isFixedSize: u,
                        isIconOnlyHeader: j,
                        isSortable: !!D,
                        isRanking: l,
                        key: R || _,
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
  G1 = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function H1(e) {
  switch (e) {
    case ri:
      return dr;
    case dr:
      return ri;
    default:
      return e;
  }
}
var W1 = function (t) {
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
      _ = b === void 0 ? 1 / 0 : b,
      w = t.onSetPage,
      O = w === void 0 ? _e : w,
      m = t.onSort,
      S = m === void 0 ? _e : m,
      E = t.page,
      j = E === void 0 ? 1 : E,
      D = t.emptyView,
      R = t.isRankable,
      T = R === void 0 ? !1 : R,
      z = t.isRankingDisabled,
      B = z === void 0 ? !1 : z,
      V = t.onRankStart,
      J = V === void 0 ? _e : V,
      G = t.onRankEnd,
      q = G === void 0 ? _e : G,
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
      ce = sa({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.2.18",
      }),
      qe = sa({
        fn: q,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.2.18",
      });
    y.useEffect(
      function () {
        (Qa(o, n), Kh(n));
      },
      [o, n],
    );
    var Oe = function (Ee) {
        return function () {
          var at = Ee.key;
          if (at) {
            if (ce && T && at === o && s === ri) {
              ce({ key: null, sortOrder: null, item: Ee });
              return;
            }
            var Ht = at !== o ? dr : H1(s);
            ce && ce({ key: at, item: Ee, sortOrder: Ht });
          }
        };
      },
      rt = function (Ee, at) {
        O(Ee, at);
      },
      ve = function (Ee) {
        (le(!0), J(Ee));
      },
      Ue = function (Ee) {
        (le(!1), qe(Ee));
      },
      wr = function () {
        return X || (Pf(i || [], j, _).length > 2 ? ni : yb);
      },
      Pt = function () {
        return h ? k.createElement(Sb, { testId: l }) : D && k.createElement(Eb, { testId: l }, D);
      },
      ke = i && i.length,
      Se,
      Vt = !1;
    (d && Number.isInteger(d) && _ && ke && ke <= d
      ? ((Se = Math.ceil(d / _)), (Vt = !0))
      : (Se = ke && _ ? Math.ceil(ke / _) : 0),
      (Se = Se < 1 ? 1 : Se));
    var pt = j > Se ? Se : j,
      nt = !!ke,
      Gt = wr(),
      Ve = Pt();
    return k.createElement(
      k.Fragment,
      null,
      k.createElement(
        Qf,
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
          wb,
          { isFixedSize: g, "aria-label": f, hasDataRow: nt, testId: l, isLoading: h },
          !!r && k.createElement(Ob, null, r),
          n &&
            k.createElement(V1, {
              head: n,
              onSort: Oe,
              sortKey: o,
              sortOrder: s,
              isRanking: ue,
              isRankable: T,
              testId: l,
            }),
          nt &&
            k.createElement(Y1, {
              ref: ge,
              highlightedRowIndex: a,
              rows: i,
              head: n,
              sortKey: o,
              sortOrder: s,
              rowsPerPage: _,
              page: pt,
              isFixedSize: g || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: Vt,
              testId: l,
              isRankable: T,
              isRanking: ue,
              onRankStart: ve,
              onRankEnd: Ue,
              isRankingDisabled: B || h || !1,
            }),
        ),
      ),
      Se <= 1
        ? null
        : k.createElement(
            kb,
            { testId: l },
            k.createElement(c0, {
              value: pt,
              onChange: rt,
              total: Se,
              i18n: A,
              isDisabled: h,
              testId: l,
            }),
          ),
      !nt &&
        Ve &&
        k.createElement(Xf, { isLoading: h, spinnerSize: ni, testId: l, loadingLabel: u }, Ve),
    );
  },
  K1 = y.lazy(function () {
    return Qh(
      () => import("./body-DNUO6JLD.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  Y1 = y.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      i = t.isRanking,
      o = t.onRankStart,
      s = t.onRankEnd,
      u = t.isRankingDisabled,
      c = ae(t, G1),
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
    var v = k.createElement(Bb, te({ ref: r }, c));
    return l && p
      ? k.createElement(
          qb,
          { fallback: v },
          k.createElement(
            y.Suspense,
            { fallback: v },
            k.createElement(
              K1,
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
function J1(e, t, r) {
  return (
    (t = Y(t)),
    Fe(e, Zv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var Vs = (function (e) {
  function t() {
    var r;
    de(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = J1(this, t, [].concat(a))),
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
        var f = Jh(o, c, l, d);
        (r.setState({ rows: f }), r.onRankEndIfExistsHandler(o));
      }),
      r
    );
  }
  return (
    Be(t, e),
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
            _ = u.isRankingDisabled,
            w = u.rowsPerPage,
            O = u.paginationi18n,
            m = u.onRankStart,
            S = u.onPageRowsUpdate,
            E = u.testId,
            j = u.label;
          return k.createElement(W1, {
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
            isRankingDisabled: _,
            onRankEnd: this.onRankEndHandler,
            onRankStart: m,
            onPageRowsUpdate: S,
            testId: E,
            label: j,
          });
        },
      },
    ])
  );
})(k.Component);
x(Vs, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: _e,
  onSort: _e,
  rowsPerPage: 1 / 0,
});
const X1 = (e, t, r) => {
    const n = [];
    switch (r) {
      case "USER": {
        (n.push({ key: "id", content: "ID", isSortable: !0, width: 25 }),
          n.push({ key: "name", content: "NAME", isSortable: !0, width: 25 }),
          n.push({ key: "email", content: "EMAIL", isSortable: !0, width: 25 }));
        break;
      }
      case "DUPLICATE":
        (n.push({ key: "name", content: "NAME", isSortable: !0, width: 25 }),
          n.push({ key: "email", content: "EMAIL", isSortable: !0, width: 25 }),
          n.push({ key: "count", content: "COUNT", isSortable: !0, width: 25 }));
    }
    return (t && n.push({ key: "delete", content: "Delete", isSortable: !1, width: 25 }), n);
  },
  Qv = (e, t, r) => ({ cells: X1(e, t, r) });
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
var Z1 = {};
function Ei() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : Z1;
}
var ep = Object.assign,
  si = Object.getOwnPropertyDescriptor,
  Ot = Object.defineProperty,
  xi = Object.prototype,
  cs = [];
Object.freeze(cs);
var tp = {};
Object.freeze(tp);
var Q1 = typeof Proxy < "u",
  eO = Object.toString();
function rp() {
  Q1 || H("Proxy not available");
}
function np(e) {
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
function Ci(e) {
  return e !== null && typeof e == "object";
}
function Qt(e) {
  if (!Ci(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === eO;
}
function ap(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Ri(e, t, r) {
  Ot(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function ip(e, t, r) {
  Ot(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function br(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return Ci(n) && n[r] === !0;
    }
  );
}
function Jr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function tO(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Lt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var op = typeof Object.getOwnPropertySymbols < "u";
function rO(e) {
  var t = Object.keys(e);
  if (!op) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return xi.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Pi =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : op
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function sp(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Ft(e, t) {
  return xi.hasOwnProperty.call(e, t);
}
var nO =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Pi(t).forEach(function (n) {
        r[n] = si(t, n);
      }),
      r
    );
  };
function Te(e, t) {
  return !!(e & t);
}
function Me(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function hd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function aO(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, oO(n.key), n));
  }
}
function Xr(e, t, r) {
  return (t && aO(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Nr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = sO(e)) || t) {
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
function up(e, t) {
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
function iO(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function oO(e) {
  var t = iO(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function sO(e, t) {
  if (e) {
    if (typeof e == "string") return hd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? hd(e, t)
          : void 0
    );
  }
}
var mt = Symbol("mobx-stored-annotations");
function kt(e) {
  function t(r, n) {
    if (Oa(n)) return e.decorate_20223_(r, n);
    wa(r, n, e);
  }
  return Object.assign(t, e);
}
function wa(e, t, r) {
  (Ft(e, mt) || Ri(e, mt, pr({}, e[mt])), pO(r) || (e[mt][t] = r));
}
function uO(e) {
  return (Ft(e, mt) || Ri(e, mt, pr({}, e[mt])), e[mt]);
}
function Oa(e) {
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
        return Sp(this);
      }),
      (t.reportChanged = function () {
        (Je(), Ep(this), Xe());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      Xr(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return Te(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Me(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Te(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Me(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Te(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Me(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
rr.isBeingObservedMask_ = 1;
rr.isPendingUnobservationMask_ = 2;
rr.diffValueMask_ = 4;
var Gs = br("Atom", rr);
function cp(e, t, r) {
  (t === void 0 && (t = $r), r === void 0 && (r = $r));
  var n = new rr(e);
  return (t !== $r && mk(n, t), r !== $r && Ap(n, r), n);
}
function cO(e, t) {
  return qp(e, t);
}
function lO(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var ui = { structural: cO, default: lO };
function hr(e, t, r) {
  return Tp(e)
    ? e
    : Array.isArray(e)
      ? se.array(e, { name: r })
      : Qt(e)
        ? se.object(e, void 0, { name: r })
        : Jr(e)
          ? se.map(e, { name: r })
          : Lt(e)
            ? se.set(e, { name: r })
            : typeof e == "function" && !Wr(e) && !ga(e)
              ? ap(e)
                ? Kr(e)
                : ha(r, e)
              : e;
}
function dO(e, t, r) {
  if (e == null || $i(e) || Li(e) || mr(e) || yt(e)) return e;
  if (Array.isArray(e)) return se.array(e, { name: r, deep: !1 });
  if (Qt(e)) return se.object(e, void 0, { name: r, deep: !1 });
  if (Jr(e)) return se.map(e, { name: r, deep: !1 });
  if (Lt(e)) return se.set(e, { name: r, deep: !1 });
}
function Ai(e) {
  return e;
}
function fO(e, t) {
  return qp(e, t) ? t : e;
}
var vO = "override";
function pO(e) {
  return e.annotationType_ === vO;
}
function ka(e, t) {
  return { annotationType_: e, options_: t, make_: hO, extend_: gO, decorate_20223_: bO };
}
function hO(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Wr(r.value)) return 1;
  var i = lp(e, this, t, r, !1);
  return (Ot(n, t, i), 2);
}
function gO(e, t, r, n) {
  var a = lp(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function bO(e, t) {
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
function yO(e, t, r, n) {
  (t.annotationType_, n.value);
}
function lp(e, t, r, n, a) {
  var i, o, s, u, c, l, d;
  (a === void 0 && (a = P.safeDescriptors), yO(e, t, r, n));
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
function dp(e, t) {
  return { annotationType_: e, options_: t, make_: mO, extend_: _O, decorate_20223_: wO };
}
function mO(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Ft(e.target_, t) || !ga(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (ga(r.value)) return 1;
  var i = fp(e, this, t, r, !1, !1);
  return (Ot(n, t, i), 2);
}
function _O(e, t, r, n) {
  var a,
    i = fp(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, i, n);
}
function wO(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    ga(e) || (e = Kr(e)),
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
function OO(e, t, r, n) {
  (t.annotationType_, n.value);
}
function fp(e, t, r, n, a, i) {
  (i === void 0 && (i = P.safeDescriptors), OO(e, t, r, n));
  var o = n.value;
  if ((ga(o) || (o = Kr(o)), a)) {
    var s;
    ((o = o.bind((s = e.proxy_) != null ? s : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: i ? e.isPlainObject_ : !0, enumerable: !1, writable: !i };
}
function Hs(e, t) {
  return { annotationType_: e, options_: t, make_: kO, extend_: SO, decorate_20223_: EO };
}
function kO(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function SO(e, t, r, n) {
  return (
    xO(e, this, t, r),
    e.defineComputedProperty_(t, pr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function EO(e, t) {
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
function xO(e, t, r, n) {
  (t.annotationType_, n.get);
}
function ji(e, t) {
  return { annotationType_: e, options_: t, make_: CO, extend_: RO, decorate_20223_: PO };
}
function CO(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function RO(e, t, r, n) {
  var a, i;
  return (
    AO(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (i = this.options_) == null ? void 0 : i.enhancer) != null ? a : hr,
      n,
    )
  );
}
function PO(e, t) {
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
function AO(e, t, r, n) {
  t.annotationType_;
}
var jO = "true",
  IO = vp();
function vp(e) {
  return { annotationType_: jO, options_: e, make_: DO, extend_: TO, decorate_20223_: MO };
}
function DO(e, t, r, n) {
  var a, i;
  if (r.get) return Ii.make_(e, t, r, n);
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
    if (ap(r.value)) {
      var u,
        c = (u = this.options_) != null && u.autoBind ? Kr.bound : Kr;
      return c.make_(e, t, r, n);
    }
    var l = (s = this.options_) != null && s.autoBind ? ha.bound : ha;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? se.ref : se;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function TO(e, t, r, n) {
  var a, i;
  if (r.get) return Ii.extend_(e, t, r, n);
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
function MO(e, t) {
  H("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var LO = "observable",
  $O = "observable.ref",
  NO = "observable.shallow",
  FO = "observable.struct",
  pp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(pp);
function Fa(e) {
  return e || pp;
}
var ds = ji(LO),
  BO = ji($O, { enhancer: Ai }),
  zO = ji(NO, { enhancer: dO }),
  qO = ji(FO, { enhancer: fO }),
  hp = kt(ds);
function Ba(e) {
  return e.deep === !0 ? hr : e.deep === !1 ? Ai : VO(e.defaultDecorator);
}
function UO(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : vp(e)) : void 0;
}
function VO(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : hr;
}
function gp(e, t, r) {
  if (Oa(t)) return ds.decorate_20223_(e, t);
  if (vr(t)) {
    wa(e, t, ds);
    return;
  }
  return Tp(e)
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
ep(gp, hp);
var GO = {
    box: function (t, r) {
      var n = Fa(r);
      return new lr(t, Ba(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = Fa(r);
      return (P.useProxies === !1 || n.proxy === !1 ? Uk : Dk)(t, Ba(n), n.name);
    },
    map: function (t, r) {
      var n = Fa(r);
      return new Lp(t, Ba(n), n.name);
    },
    set: function (t, r) {
      var n = Fa(r);
      return new $p(t, Ba(n), n.name);
    },
    object: function (t, r, n) {
      return _r(function () {
        return kk(P.useProxies === !1 || n?.proxy === !1 ? Zr({}, n) : Ak({}, n), t, r);
      });
    },
    ref: kt(BO),
    shallow: kt(zO),
    deep: hp,
    struct: kt(qO),
  },
  se = ep(gp, GO),
  bp = "computed",
  HO = "computed.struct",
  fs = Hs(bp),
  WO = Hs(HO, { equals: ui.structural }),
  Ii = function (t, r) {
    if (Oa(r)) return fs.decorate_20223_(t, r);
    if (vr(r)) return wa(t, r, fs);
    if (Qt(t)) return kt(Hs(bp, t));
    var n = Qt(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new lt(n));
  };
Object.assign(Ii, fs);
Ii.struct = kt(WO);
var gd,
  bd,
  ci = 0,
  KO = 1,
  YO =
    (gd = (bd = si(function () {}, "name")) == null ? void 0 : bd.configurable) != null ? gd : !1,
  yd = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function gr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return JO(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    YO && ((yd.value = e), Ot(a, "name", yd)),
    a
  );
}
function JO(e, t, r, n, a) {
  var i = XO(e, t);
  try {
    return r.apply(n, a);
  } catch (o) {
    throw ((i.error_ = o), o);
  } finally {
    ZO(i);
  }
}
function XO(e, t, r, n) {
  var a = !1,
    i = 0,
    o = P.trackingDerivation,
    s = !t || !o;
  Je();
  var u = P.allowStateChanges;
  s && (yr(), (u = Di(!0)));
  var c = Ws(!0),
    l = {
      runAsAction_: s,
      prevDerivation_: o,
      prevAllowStateChanges_: u,
      prevAllowStateReads_: c,
      notifySpy_: a,
      startTime_: i,
      actionId_: KO++,
      parentActionId_: ci,
    };
  return ((ci = l.actionId_), l);
}
function ZO(e) {
  (ci !== e.actionId_ && H(30),
    (ci = e.parentActionId_),
    e.error_ !== void 0 && (P.suppressReactionErrors = !0),
    Ti(e.prevAllowStateChanges_),
    na(e.prevAllowStateReads_),
    Xe(),
    e.runAsAction_ && Bt(e.prevDerivation_),
    (P.suppressReactionErrors = !1));
}
function QO(e, t) {
  var r = Di(e);
  try {
    return t();
  } finally {
    Ti(r);
  }
}
function Di(e) {
  var t = P.allowStateChanges;
  return ((P.allowStateChanges = e), t);
}
function Ti(e) {
  P.allowStateChanges = e;
}
var lr = (function (e) {
    function t(n, a, i, o, s) {
      var u;
      return (
        i === void 0 && (i = "ObservableValue"),
        s === void 0 && (s = ui.default),
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
    up(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== P.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (Ke(this)) {
          var i = Ye(this, { object: this, type: St, newValue: a });
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
        return Sa(this, a);
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
          Ea(this, a)
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
        return sp(this.get());
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
        (this.value_ = new di(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = li.NONE),
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
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? ui.structural : ui.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        ak(this);
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
          vs(this) &&
            (this.warnAboutUntrackedRead_(), Je(), (this.value_ = this.computeValue_(!1)), Xe());
        else if ((Sp(this), vs(this))) {
          var n = P.trackingContext;
          (this.keepAlive_ && !n && (P.trackingContext = this),
            this.trackAndCompute() && nk(this),
            (P.trackingContext = n));
        }
        var a = this.value_;
        if (Ka(a)) throw a.cause;
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
          o = a || Ka(n) || Ka(i) || !this.equals_(n, i);
        return (o && (this.value_ = i), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = Di(!1),
          i;
        if (n) i = yp(this, this.derivation, this.scope_);
        else if (P.disableErrorBoundaries === !0) i = this.derivation.call(this.scope_);
        else
          try {
            i = this.derivation.call(this.scope_);
          } catch (o) {
            i = new di(o);
          }
        return (Ti(a), (this.isComputing = !1), i);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (ps(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var i = this,
          o = !0,
          s = void 0;
        return pk(function () {
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
        return sp(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      Xr(e, [
        {
          key: "isComputing",
          get: function () {
            return Te(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Me(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Te(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Me(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Te(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Me(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Te(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Me(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Te(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Me(this.flags_, e.diffValueMask_, n === 1);
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
var Mi = br("ComputedValue", lt),
  W;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(W || (W = {}));
var li;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(li || (li = {}));
var di = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function Ka(e) {
  return e instanceof di;
}
function vs(e) {
  switch (e.dependenciesState_) {
    case W.UP_TO_DATE_:
      return !1;
    case W.NOT_TRACKING_:
    case W.STALE_:
      return !0;
    case W.POSSIBLY_STALE_: {
      for (var t = Ws(!0), r = yr(), n = e.observing_, a = n.length, i = 0; i < a; i++) {
        var o = n[i];
        if (Mi(o)) {
          if (P.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Bt(r), na(t), !0);
            }
          if (e.dependenciesState_ === W.STALE_) return (Bt(r), na(t), !0);
        }
      }
      return (_p(e), Bt(r), na(t), !1);
    }
  }
}
function yp(e, t, r) {
  var n = Ws(!0);
  (_p(e),
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
      i = new di(o);
    }
  return (P.inBatch--, (P.trackingDerivation = a), ek(e), na(n), i);
}
function ek(e) {
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
    (u.diffValue === 0 && Op(u, e), (u.diffValue = 0));
  }
  for (; a--; ) {
    var c = r[a];
    c.diffValue === 1 && ((c.diffValue = 0), rk(c, e));
  }
  n !== W.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function ps(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Op(t[r], e);
  e.dependenciesState_ = W.NOT_TRACKING_;
}
function mp(e) {
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
function Ws(e) {
  var t = P.allowStateReads;
  return ((P.allowStateReads = e), t);
}
function na(e) {
  P.allowStateReads = e;
}
function _p(e) {
  if (e.dependenciesState_ !== W.UP_TO_DATE_) {
    e.dependenciesState_ = W.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = W.UP_TO_DATE_;
  }
}
var Ya = function () {
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
  Ja = !0,
  wp = !1,
  P = (function () {
    var e = Ei();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Ja = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new Ya().version && (Ja = !1),
      Ja
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Ya()))
        : (setTimeout(function () {
            wp || H(35);
          }, 1),
          new Ya())
    );
  })();
function tk() {
  if (((P.pendingReactions.length || P.inBatch || P.isRunningReactions) && H(36), (wp = !0), Ja)) {
    var e = Ei();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (P = new Ya()));
  }
}
function rk(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Op(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && kp(e));
}
function kp(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), P.pendingUnobservations.push(e));
}
function Je() {
  P.inBatch++;
}
function Xe() {
  if (--P.inBatch === 0) {
    xp();
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
function Sp(e) {
  var t = P.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && P.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && P.inBatch > 0 && kp(e), !1);
}
function Ep(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === W.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = W.STALE_));
    }));
}
function nk(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.POSSIBLY_STALE_
        ? (t.dependenciesState_ = W.STALE_)
        : t.dependenciesState_ === W.UP_TO_DATE_ && (e.lowestObserverState_ = W.UP_TO_DATE_);
    }));
}
function ak(e) {
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
      (this.isTracing_ = li.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), P.pendingReactions.push(this), xp());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Je(), (this.isScheduled = !1));
        var n = P.trackingContext;
        if (((P.trackingContext = this), vs(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((P.trackingContext = n), Xe());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (Je(), (this.isRunning = !0));
        var a = P.trackingContext;
        P.trackingContext = this;
        var i = yp(this, n, void 0);
        ((P.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && ps(this),
          Ka(i) && this.reportExceptionInDerivation_(i.cause),
          Xe());
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Je(), ps(this), Xe()));
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
          return Te(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Me(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Te(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Me(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Te(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Me(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Te(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Me(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Te(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Me(this.flags_, e.diffValueMask_, n === 1);
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
var ik = 100,
  hs = function (t) {
    return t();
  };
function xp() {
  P.inBatch > 0 || P.isRunningReactions || hs(ok);
}
function ok() {
  P.isRunningReactions = !0;
  for (var e = P.pendingReactions, t = 0; e.length > 0; ) {
    ++t === ik && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  P.isRunningReactions = !1;
}
var fi = br("Reaction", xt);
function sk(e) {
  var t = hs;
  hs = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function aa() {
  return !1;
}
function uk(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Cp = "action",
  ck = "action.bound",
  Rp = "autoAction",
  lk = "autoAction.bound",
  dk = "<unnamed action>",
  gs = ka(Cp),
  fk = ka(ck, { bound: !0 }),
  bs = ka(Rp, { autoAction: !0 }),
  vk = ka(lk, { autoAction: !0, bound: !0 });
function Pp(e) {
  var t = function (n, a) {
    if (ct(n)) return gr(n.name || dk, n, e);
    if (ct(a)) return gr(n, a, e);
    if (Oa(a)) return (e ? bs : gs).decorate_20223_(n, a);
    if (vr(a)) return wa(n, a, e ? bs : gs);
    if (vr(n)) return kt(ka(e ? Rp : Cp, { name: n, autoAction: e }));
  };
  return t;
}
var Ze = Pp(!1);
Object.assign(Ze, gs);
var ha = Pp(!0);
Object.assign(ha, bs);
Ze.bound = kt(fk);
ha.bound = kt(vk);
function Wr(e) {
  return ct(e) && e.isMobxAction === !0;
}
function pk(e, t) {
  var r, n, a, i;
  t === void 0 && (t = tp);
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
    var c = gk(t),
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
var hk = function (t) {
  return t();
};
function gk(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : hk;
}
var bk = "onBO",
  yk = "onBUO";
function mk(e, t, r) {
  return jp(bk, e, t, r);
}
function Ap(e, t, r) {
  return jp(yk, e, t, r);
}
function jp(e, t, r, n) {
  var a = hi(t),
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
var _k = "never",
  za = "always",
  wk = "observed";
function Ok(e) {
  e.isolateGlobalState === !0 && tk();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (P.useProxies = t === za ? !0 : t === _k ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (P.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === za ? za : r === wk;
    ((P.enforceActions = n), (P.allowStateChanges = !(n === !0 || n === za)));
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
    e.reactionScheduler && sk(e.reactionScheduler));
}
function kk(e, t, r, n) {
  var a = nO(t);
  return (
    _r(function () {
      var i = Zr(e, n)[$];
      Pi(a).forEach(function (o) {
        i.extend_(o, a[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function Sk(e, t) {
  return Ip(hi(e, t));
}
function Ip(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = Ek(e.observing_).map(Ip)),
    t
  );
}
function Ek(e) {
  return Array.from(new Set(e));
}
var xk = 0;
function Dp() {
  this.message = "FLOW_CANCELLED";
}
Dp.prototype = Object.create(Error.prototype);
var $o = dp("flow"),
  Ck = dp("flow.bound", { bound: !0 }),
  Kr = Object.assign(function (t, r) {
    if (Oa(r)) return $o.decorate_20223_(t, r);
    if (vr(r)) return wa(t, r, $o);
    var n = t,
      a = n.name || "<unnamed flow>",
      i = function () {
        var s = this,
          u = arguments,
          c = ++xk,
          l = Ze(a + " - runid: " + c + " - init", n).apply(s, u),
          d,
          f = void 0,
          p = new Promise(function (h, v) {
            var g = 0;
            d = v;
            function b(O) {
              f = void 0;
              var m;
              try {
                m = Ze(a + " - runid: " + c + " - yield " + g++, l.next).call(l, O);
              } catch (S) {
                return v(S);
              }
              w(m);
            }
            function _(O) {
              f = void 0;
              var m;
              try {
                m = Ze(a + " - runid: " + c + " - yield " + g++, l.throw).call(l, O);
              } catch (S) {
                return v(S);
              }
              w(m);
            }
            function w(O) {
              if (ct(O?.then)) {
                O.then(w, v);
                return;
              }
              return O.done ? h(O.value) : ((f = Promise.resolve(O.value)), f.then(b, _));
            }
            b(void 0);
          });
        return (
          (p.cancel = Ze(a + " - runid: " + c + " - cancel", function () {
            try {
              f && md(f);
              var h = l.return(void 0),
                v = Promise.resolve(h.value);
              (v.then($r, $r), md(v), d(new Dp()));
            } catch (g) {
              d(g);
            }
          })),
          p
        );
      };
    return ((i.isMobXFlow = !0), i);
  }, $o);
Kr.bound = kt(Ck);
function md(e) {
  ct(e.cancel) && e.cancel();
}
function ga(e) {
  return e?.isMobXFlow === !0;
}
function Rk(e, t) {
  return e ? $i(e) || !!e[$] || Gs(e) || fi(e) || Mi(e) : !1;
}
function Tp(e) {
  return Rk(e);
}
function $t(e, t) {
  (t === void 0 && (t = void 0), Je());
  try {
    return e.apply(t);
  } finally {
    Xe();
  }
}
function Lr(e) {
  return e[$];
}
var Pk = {
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
function Ak(e, t) {
  var r, n;
  return (
    rp(),
    (e = Zr(e, t)),
    (n = (r = e[$]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, Pk))
  );
}
function Ke(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Sa(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    np(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Ye(e, t) {
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
function Ea(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    np(function () {
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
function Ks(e, t, r) {
  return (
    _r(function () {
      var n,
        a = Zr(e, r)[$];
      ((n = t) != null || (t = uO(e)),
        Pi(t).forEach(function (i) {
          return a.make_(i, t[i]);
        }));
    }),
    e
  );
}
var _d = "splice",
  St = "update",
  jk = 1e4,
  Ik = {
    get: function (t, r) {
      var n = t[$];
      return r === $
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Ft(vi, r)
              ? vi[r]
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
  Ys = (function () {
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
        return Sa(this, n);
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
          Ea(this, n)
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
          this.legacyMode_ && a > 0 && zp(n + a + 1));
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
          i === void 0 && (i = cs),
          Ke(this))
        ) {
          var u = Ye(this, { object: this.proxy_, type: _d, index: n, removedCount: a, added: i });
          if (!u) return cs;
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
        if (i.length < jk) {
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
        var o = !this.owned_ && aa(),
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
        var o = !this.owned_ && aa(),
          s = st(this),
          u =
            s || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: _d,
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
          if (Ke(this)) {
            var s = Ye(this, { type: St, object: this.proxy_, index: n, newValue: a });
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
function Dk(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    rp(),
    _r(function () {
      var a = new Ys(r, t, n, !1);
      ip(a.values_, $, a);
      var i = new Proxy(a.values_, Ik);
      return ((a.proxy_ = i), e && e.length && a.spliceWithArray_(0, 0, e), i);
    })
  );
}
var vi = {
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
ie("reduce", Mp);
ie("reduceRight", Mp);
function ie(e, t) {
  typeof Array.prototype[e] == "function" && (vi[e] = t(e));
}
function ze(e) {
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
function Mp(e) {
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
var Tk = br("ObservableArrayAdministration", Ys);
function Li(e) {
  return Ci(e) && Tk(e[$]);
}
var Mk = {},
  Xt = "add",
  pi = "delete",
  Lp = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = hr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[$] = Mk),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        ct(Map) || H(18),
        _r(function () {
          ((i.keysAtom_ = cp("ObservableMap.keys()")),
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
          var o = (i = new lr(this.has_(n), Ai, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            Ap(o, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return i.get();
      }),
      (t.set = function (n, a) {
        var i = this.has_(n);
        if (Ke(this)) {
          var o = Ye(this, { type: i ? St : Xt, object: this, newValue: a, name: n });
          if (!o) return this;
          a = o.newValue;
        }
        return (i ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, Ke(this))) {
          var i = Ye(this, { type: pi, object: this, name: n });
          if (!i) return !1;
        }
        if (this.has_(n)) {
          var o = aa(),
            s = st(this),
            u =
              s || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: pi,
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
          var o = aa(),
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
        var o = aa(),
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
        return wd({
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
        return wd({
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
          mr(n) && (n = new Map(n)),
          $t(function () {
            Qt(n)
              ? rO(n).forEach(function (i) {
                  return a.set(i, n[i]);
                })
              : Array.isArray(n)
                ? n.forEach(function (i) {
                    var o = i[0],
                      s = i[1];
                    return a.set(o, s);
                  })
                : Jr(n)
                  ? (tO(n) || H(19, n),
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
          mp(function () {
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
              var i = Lk(n), o = new Map(), s = !1, u = Nr(a.data_.keys()), c;
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
                _ = a.data_.has(g);
              if ((a.set(g, b), a.data_.has(g))) {
                var w = a.data_.get(g);
                (o.set(g, w), _ || (s = !0));
              }
            }
            if (!s)
              if (a.data_.size !== o.size) a.keysAtom_.reportChanged();
              else
                for (var O = a.data_.keys(), m = o.keys(), S = O.next(), E = m.next(); !S.done; ) {
                  if (S.value !== E.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = O.next()), (E = m.next()));
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
        return Ea(this, n);
      }),
      (t.intercept_ = function (n) {
        return Sa(this, n);
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
  mr = br("ObservableMap", Lp);
function wd(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Xs(e));
}
function Lk(e) {
  if (Jr(e) || mr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (Qt(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return H(21, e);
}
var $k = {},
  $p = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = hr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[$] = $k),
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
        _r(function () {
          ((i.atom_ = cp(i.name_)), r && i.replace(r));
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
          mp(function () {
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
        if ((this.atom_, Ke(this))) {
          var i = Ye(this, { type: Xt, object: this, newValue: n });
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
        if (Ke(this)) {
          var i = Ye(this, { type: pi, object: this, oldValue: n });
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
                    type: pi,
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
        return Od({
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
        return Od({
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
        return Ea(this, n);
      }),
      (t.intercept_ = function (n) {
        return Sa(this, n);
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
  yt = br("ObservableSet", $p);
function Od(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Xs(e));
}
var kd = Object.create(null),
  Sd = "remove",
  Np = (function () {
    function e(r, n, a, i) {
      (n === void 0 && (n = new Map()),
        i === void 0 && (i = IO),
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
        if (Ke(this)) {
          var o = Ye(this, { type: St, object: this.proxy_ || this.target_, name: n, newValue: a });
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
            ((a = new lr(n in this.target_, Ai, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var i;
            if ((i = this.target_[mt]) != null && i[n]) return;
            H(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== xi; ) {
            var s = si(o, n);
            if (s) {
              var u = a.make_(this, n, s, o);
              if (u === 0) return;
              if (u === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          xd(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, i, o) {
        if ((o === void 0 && (o = !1), i === !0 && (i = this.defaultAnnotation_), i === !1))
          return this.defineProperty_(n, a, o);
        var s = i.extend_(this, n, a, o);
        return (s && xd(this, i, n), s);
      }),
      (t.defineProperty_ = function (n, a, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          Je();
          var o = this.delete_(n);
          if (!o) return o;
          if (Ke(this)) {
            var s = Ye(this, {
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
          Xe();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, a, i, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          Je();
          var s = this.delete_(n);
          if (!s) return s;
          if (Ke(this)) {
            var u = Ye(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Xt,
              newValue: a,
            });
            if (!u) return null;
            a = u.newValue;
          }
          var c = Ed(n),
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
          Xe();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, a, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          Je();
          var o = this.delete_(n);
          if (!o) return o;
          if (Ke(this)) {
            var s = Ye(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Xt,
              newValue: void 0,
            });
            if (!s) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var u = Ed(n),
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
          Xe();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Ft(this.target_, n))) return !0;
        if (Ke(this)) {
          var i = Ye(this, { object: this.proxy_ || this.target_, name: n, type: Sd });
          if (!i) return null;
        }
        try {
          var o;
          Je();
          var s = st(this),
            u = !1,
            c = this.values_.get(n),
            l = void 0;
          if (!c && (s || u)) {
            var d;
            l = (d = si(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c && (this.values_.delete(n), c instanceof lr && (l = c.value_), Ep(c)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            s || u)
          ) {
            var f = {
              type: Sd,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            s && ut(this, f);
          }
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return Ea(this, n);
      }),
      (t.intercept_ = function (n) {
        return Sa(this, n);
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
        return (this.keysAtom_.reportObserved(), Pi(this.target_));
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
    a = new Np(e, new Map(), String(n), UO(t));
  return (Ri(e, $, a), e);
}
var Nk = br("ObservableObjectAdministration", Np);
function Ed(e) {
  return (
    kd[e] ||
    (kd[e] = {
      get: function () {
        return this[$].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[$].setObservablePropValue_(e, r);
      },
    })
  );
}
function $i(e) {
  return Ci(e) ? Nk(e[$]) : !1;
}
function xd(e, t, r) {
  var n;
  (n = e.target_[mt]) == null || delete n[r];
}
var Fk = Bp(0),
  Bk = (function () {
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
  No = 0,
  Fp = function () {};
function zk(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
zk(Fp, Array.prototype);
var Js = (function (e) {
  function t(n, a, i, o) {
    var s;
    return (
      i === void 0 && (i = "ObservableArray"),
      o === void 0 && (o = !1),
      (s = e.call(this) || this),
      _r(function () {
        var u = new Ys(i, a, o, !0);
        ((u.proxy_ = s),
          ip(s, $, u),
          n && n.length && s.spliceWithArray(0, 0, n),
          Bk && Object.defineProperty(s, "0", Fk));
      }),
      s
    );
  }
  up(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[$].atom_.reportObserved();
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        i.map(function (s) {
          return Li(s) ? s.slice() : s;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return Xs({
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
})(Fp);
Object.entries(vi).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Ri(Js.prototype, t, r);
});
function Bp(e) {
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
function qk(e) {
  Ot(Js.prototype, "" + e, Bp(e));
}
function zp(e) {
  if (e > No) {
    for (var t = No; t < e + 100; t++) qk(t);
    No = e;
  }
}
zp(1e3);
function Uk(e, t, r) {
  return new Js(e, t, r);
}
function hi(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Li(e)) return (t !== void 0 && H(23), e[$].atom_);
    if (yt(e)) return e.atom_;
    if (mr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || H(25, t, ys(e)), r);
    }
    if ($i(e)) {
      if (!t) return H(26);
      var n = e[$].values_.get(t);
      return (n || H(27, t, ys(e)), n);
    }
    if (Gs(e) || Mi(e) || fi(e)) return e;
  } else if (ct(e) && fi(e[$])) return e[$];
  H(28);
}
function Vk(e, t) {
  if ((e || H(29), Gs(e) || Mi(e) || fi(e) || mr(e) || yt(e))) return e;
  if (e[$]) return e[$];
  H(24, e);
}
function ys(e, t) {
  var r;
  if (t !== void 0) r = hi(e, t);
  else {
    if (Wr(e)) return e.name;
    $i(e) || mr(e) || yt(e) ? (r = Vk(e)) : (r = hi(e));
  }
  return r.name_;
}
function _r(e) {
  var t = yr(),
    r = Di(!0);
  Je();
  try {
    return e();
  } finally {
    (Xe(), Ti(r), Bt(t));
  }
}
var Cd = xi.toString;
function qp(e, t, r) {
  return (r === void 0 && (r = -1), ms(e, t, r));
}
function ms(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object") return !1;
  var o = Cd.call(e);
  if (o !== Cd.call(t)) return !1;
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
  ((e = Rd(e)), (t = Rd(t)));
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
    for (; l--; ) if (!ms(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var p = 0; p < f; p++) {
      var h = d[p];
      if (!(Ft(t, h) && ms(e[h], t[h], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function Rd(e) {
  return Li(e) ? e.slice() : Jr(e) || mr(e) || Lt(e) || yt(e) ? Array.from(e.entries()) : e;
}
var Pd,
  Gk = ((Pd = Ei().Iterator) == null ? void 0 : Pd.prototype) || {};
function Xs(e) {
  return ((e[Symbol.iterator] = Hk), Object.assign(Object.create(Gk), e));
}
function Hk() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Ei();
  typeof t[e] > "u" && H("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: uk, extras: { getDebugName: ys }, $mobx: $ });
if (!y.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Ks) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Wk(e) {
  e();
}
function Kk(e) {
  (e || (e = Wk), Ok({ reactionScheduler: e }));
}
function Yk(e) {
  return Sk(e);
}
var Jk = 1e4,
  Xk = 1e4,
  Zk = (function () {
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
            (n === void 0 && (n = Jk), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, Xk));
        },
      }),
      e
    );
  })(),
  Qk = typeof FinalizationRegistry < "u" ? FinalizationRegistry : Zk,
  ba = new Qk(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  Fo = { exports: {} },
  Bo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ad;
function eS() {
  if (Ad) return Bo;
  Ad = 1;
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
    (Bo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    Bo
  );
}
var jd;
function tS() {
  return (jd || ((jd = 1), (Fo.exports = eS())), Fo.exports);
}
var rS = tS();
function Id(e) {
  e.reaction = new xt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function nS(e, t) {
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
          ba.unregister(n),
          (n.onStoreChange = s),
          n.reaction || (Id(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (Id(a), ba.register(r, a, a)),
    k.useDebugValue(a.reaction, Yk),
    rS.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
var zo,
  qo,
  Up = typeof Symbol == "function" && Symbol.for,
  aS =
    (qo =
      (zo = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || zo === void 0
        ? void 0
        : zo.configurable) !== null && qo !== void 0
      ? qo
      : !1,
  Dd = Up
    ? Symbol.for("react.forward_ref")
    : typeof y.forwardRef == "function" &&
      y.forwardRef(function (e) {
        return null;
      }).$$typeof,
  Td = Up
    ? Symbol.for("react.memo")
    : typeof y.memo == "function" &&
      y.memo(function (e) {
        return null;
      }).$$typeof;
function iS(e, t) {
  var r;
  if (Td && e.$$typeof === Td)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    i = e.displayName || e.name;
  if (Dd && e.$$typeof === Dd && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (s, u) {
    return nS(function () {
      return a(s, u);
    }, i);
  };
  return (
    (o.displayName = e.displayName),
    aS && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = y.forwardRef(o)),
    (o = y.memo(o)),
    sS(e, o),
    o
  );
}
var oS = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function sS(e, t) {
  Object.keys(e).forEach(function (r) {
    oS[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Uo;
Kk(gi.unstable_batchedUpdates);
Uo = ba.finalizeAllImmediately;
function uS(e, t) {
  if (Md(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !Md(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function Md(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Ld = Symbol("patchMixins"),
  Vp = Symbol("patchedDefinition");
function cS(e, t) {
  var r = (e[Ld] = e[Ld] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function $d(e, t) {
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
function Nd(e, t) {
  var r = function () {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
    $d.call.apply($d, [this, e, t].concat(i));
  };
  return r;
}
function lS(e, t, r) {
  var n = cS(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[Vp])) {
    var i = e[t],
      o = Gp(e, t, a ? a.enumerable : void 0, n, i);
    Object.defineProperty(e, t, o);
  }
}
function Gp(e, t, r, n, a) {
  var i,
    o = Nd(a, n);
  return (
    (i = {}),
    (i[Vp] = !0),
    (i.get = function () {
      return o;
    }),
    (i.set = function (u) {
      if (this === e) o = Nd(u, n);
      else {
        var c = Gp(this, t, r, n, u);
        Object.defineProperty(this, t, c);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = r),
    i
  );
}
var Fd = Symbol("ObserverAdministration"),
  Bd = Symbol("isMobXReactObserver");
function _s(e) {
  var t;
  return (t = e[Fd]) != null
    ? t
    : (e[Fd] = {
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
function dS(e) {
  var t = e.prototype;
  if (e[Bd]) {
    var r = ws(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[Bd] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== y.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = zd;
    else if (t.shouldComponentUpdate !== zd)
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
        value: fS.call(this, n),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        s = _s(this);
      return (
        (s.mounted = !0),
        ba.unregister(this),
        (s.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!s.reaction || s.reactionInvalidatedBeforeMount) && s.forceUpdate(),
        i?.apply(this, arguments)
      );
    }),
    lS(t, "componentWillUnmount", function () {
      var o,
        s = _s(this);
      ((o = s.reaction) == null || o.dispose(),
        (s.reaction = null),
        (s.forceUpdate = null),
        (s.mounted = !1),
        (s.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function ws(e) {
  return e.displayName || e.name || "<component>";
}
function fS(e) {
  var t = e.bind(this),
    r = _s(this);
  function n() {
    r.reaction || ((r.reaction = vS(r)), r.mounted || ba.register(this, r, this));
    var a = void 0,
      i = void 0;
    if (
      (r.reaction.track(function () {
        try {
          i = QO(!1, t);
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
function vS(e) {
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
function zd(e, t) {
  return this.state !== t ? !0 : !uS(this.props, e);
}
function Ni(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(y.Component, e) ||
    Object.prototype.isPrototypeOf.call(y.PureComponent, e)
      ? dS(e)
      : iS(e)
  );
}
function Os() {
  return (
    (Os = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Os.apply(null, arguments)
  );
}
function pS(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var hS = ["children"],
  qd = k.createContext({});
function Hp(e) {
  var t = e.children,
    r = pS(e, hS),
    n = k.useContext(qd),
    a = k.useRef(Os({}, n, r)),
    i = a.current;
  return k.createElement(qd.Provider, { value: i }, t);
}
Hp.displayName = "MobXProvider";
k.version.split(".")[0];
if (!y.Component) throw new Error("mobx-react requires React to be available");
if (!se) throw new Error("mobx-react requires mobx to be available");
var gS = Object.defineProperty,
  bS = Object.getOwnPropertyDescriptor,
  Ut = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? bS(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && gS(t, r, a), a);
  };
class Rt {
  constructor() {
    ((this.isLoading = !0), Ks(this));
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
}
Ut([se], Rt.prototype, "isLoading", 2);
Ut([se], Rt.prototype, "users", 2);
Ut([se], Rt.prototype, "duplicates", 2);
Ut([se], Rt.prototype, "sort", 2);
Ut([Ze.bound], Rt.prototype, "saveUsers", 1);
Ut([Ze.bound], Rt.prototype, "saveSort", 1);
Ut([Ze.bound], Rt.prototype, "saveDuplicates", 1);
Ut([Ze], Rt.prototype, "loading", 1);
Ut([Ze], Rt.prototype, "stopLoading", 1);
const yS = new Rt();
var mS = Object.defineProperty,
  _S = Object.getOwnPropertyDescriptor,
  Wp = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? _S(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && mS(t, r, a), a);
  };
class Zs {
  constructor() {
    ((this.state = "ROOT"), Ks(this));
  }
  saveState(t) {
    this.state = t;
  }
}
Wp([se], Zs.prototype, "state", 2);
Wp([Ze.bound], Zs.prototype, "saveState", 1);
const wS = new Zs();
class OS {
  constructor() {
    ((this.usersStore = yS), (this.stateStore = wS));
  }
}
const Kp = new OS(),
  kS = y.createContext(Kp),
  Fi = () => y.useContext(kS),
  SS = Ni(() => {
    const { usersStore: e, stateStore: t } = Fi(),
      r = Qv(!0, !0, "USER"),
      n = e.users;
    return !n || n.length === 0
      ? M.jsx("div", { children: "User Table is EMPTY" })
      : M.jsx("div", {
          children: M.jsxs("div", {
            children: [
              M.jsx(Vs, {
                head: r,
                onSort: async (a) => {
                  let i = { name: a.key, sortType: a.sortOrder };
                  e.loading();
                  try {
                    const o = await Nt.invoke("fetch", { sortType: i });
                    (e.saveUsers(o), e.saveSort(i));
                  } finally {
                    e.stopLoading();
                  }
                },
                rows: n.map((a, i) => {
                  const o = [
                    { key: "id", content: a.id },
                    { key: "name", content: a.name },
                    { key: "email", content: a.email },
                    {
                      key: "delete",
                      content: M.jsx("div", {
                        children: M.jsx("button", {
                          onClick: async () => {
                            try {
                              (e.loading(), await Nt.invoke("delete", { id: a.id }));
                              const s = await Nt.invoke("fetch", { sortType: e.sort });
                              e.saveUsers(s);
                            } finally {
                              e.stopLoading();
                            }
                          },
                          children: "delete",
                        }),
                      }),
                    },
                  ];
                  return { key: `row-${i}-${a.id}`, cells: o };
                }),
                rowsPerPage: 5,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: M.jsx("div", { children: "User Table is EMPTY" }),
                isRankable: !0,
              }),
              M.jsx("br", {}),
              M.jsx("br", {}),
              M.jsx("button", {
                onClick: async () => {
                  e.loading();
                  try {
                    const a = await Nt.invoke("duplicate", { sortType: e.sort });
                    (e.saveDuplicates(a), t.saveState("DUPLICATE"));
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
  ES = Ni(() => {
    const { usersStore: e, stateStore: t } = Fi(),
      [r, n] = y.useState({}),
      a = (o) => {
        const { name: s, value: u, type: c } = o.target;
        n((l) => ({ ...l, [s]: c === "number" ? Number(u) : u }));
      },
      i = async (o) => {
        (o.preventDefault(), await Nt.invoke("create", { data: r }), e.loading());
        try {
          (e.saveUsers(await Nt.invoke("fetch", { sortType: e.sort })), t.saveState("ROOT"));
        } finally {
          e.stopLoading();
        }
      };
    return M.jsx("div", {
      children: M.jsxs("form", {
        onSubmit: i,
        children: [
          M.jsxs(
            "div",
            {
              children: [
                M.jsx("label", { htmlFor: "name", children: "Name" }),
                M.jsx("br", {}),
                M.jsx("input", { type: "text", id: "name", name: "name", onChange: a }),
                M.jsx("br", {}),
              ],
            },
            "name",
          ),
          M.jsxs(
            "div",
            {
              children: [
                M.jsx("label", { htmlFor: "email", children: "Email" }),
                M.jsx("br", {}),
                M.jsx("input", { type: "text", id: "email", name: "email", onChange: a }),
                M.jsx("br", {}),
              ],
            },
            "email",
          ),
          M.jsx("input", { type: "submit", value: "Submit" }),
        ],
      }),
    });
  }),
  xS = Ni(() => {
    const { usersStore: e } = Fi(),
      t = Qv(!0, !1, "DUPLICATE"),
      r = e.duplicates;
    return !r || r.length === 0
      ? M.jsx("div", { children: "Duplicate Table is EMPTY" })
      : M.jsx("div", {
          children: M.jsxs("div", {
            children: [
              M.jsx(Vs, {
                head: t,
                onSort: async (n) => {
                  let a = { name: n.key, sortType: n.sortOrder };
                  e.loading();
                  try {
                    const i = await Nt.invoke("duplicate", { sortType: a });
                    e.saveDuplicates(i);
                  } finally {
                    e.stopLoading();
                  }
                },
                rows: r.map((n, a) => {
                  const i = [
                    { key: "name", content: n.name },
                    { key: "email", content: n.email },
                    { key: "count", content: n.count },
                  ];
                  return { key: `row-${a}`, cells: i };
                }),
                rowsPerPage: 5,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: M.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              M.jsx("br", {}),
              M.jsx("br", {}),
            ],
          }),
        });
  });
function CS() {
  const { usersStore: e, stateStore: t } = Fi();
  if (
    (y.useEffect(() => {
      (async () => {
        try {
          const n = await Nt.invoke("fetch", { type: "USER", sortType: e.sort });
          e.saveUsers(n);
        } finally {
          e.stopLoading();
        }
      })().catch(console.error);
    }, []),
    e.isLoading)
  )
    return "loading....";
  switch (t.state) {
    case "ROOT":
      return M.jsx("div", {
        children: M.jsxs("div", {
          children: [
            M.jsx("button", { onClick: () => t.saveState("ADD_USER"), children: "Add a new User" }),
            M.jsx("br", {}),
            M.jsx("br", {}),
            M.jsx(SS, {}),
          ],
        }),
      });
    case "DUPLICATE":
      return M.jsx("div", {
        children: M.jsxs("div", {
          children: [
            M.jsx("button", { onClick: () => t.saveState("ROOT"), children: "back" }),
            M.jsx("br", {}),
            M.jsx("br", {}),
            M.jsx(xS, {}),
          ],
        }),
      });
    case "ADD_USER":
      return M.jsx("div", {
        children: M.jsxs("div", {
          children: [
            M.jsx("button", { onClick: () => t.saveState("ROOT"), children: "back" }),
            M.jsx("br", {}),
            M.jsx("br", {}),
            M.jsx(ES, {}),
          ],
        }),
      });
    default:
      return M.jsxs("div", { children: ["ERROR: unsupprted state $", t.state] });
  }
}
const RS = Ni(CS),
  PS = document.getElementById("root"),
  AS = Qp.createRoot(PS),
  Ud = () => {
    AS.render(M.jsx(Hp, { ...Kp, children: M.jsx(RS, {}) }));
  };
Nt.view.theme
  .enable()
  .then(() => {
    Ud();
  })
  .catch((e) => {
    (console.error(e.message), Ud());
  });
export {
  k as R,
  Tb as T,
  Be as _,
  fe as a,
  Jo as b,
  de as c,
  Fe as d,
  Y as e,
  K as f,
  x as g,
  ae as h,
  _i as i,
  De as j,
  te as k,
  Hy as l,
  Mt as m,
  Ct as n,
  C as o,
  Ib as p,
  Yh as q,
  y as r,
  Pb as s,
  h0 as w,
};
