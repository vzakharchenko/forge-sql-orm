const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-dIJL-Ytl.js",
      "./react-dom-vendor-DTSHKYJW.js",
      "./client-core-vendor-eV4IZqkN.js",
      "./lodash-vendor-CSXQM1bK.js",
      "./body-BBWlFbG-.css",
    ]),
) => i.map((i) => d[i]);
import { r as lt, a as _i, c as dh } from "./react-dom-vendor-DTSHKYJW.js";
import { g as er, a as Ps, r as Zt, s as Ve } from "./client-core-vendor-eV4IZqkN.js";
import { r as fh } from "./lodash-vendor-CSXQM1bK.js";
function vh(e, t) {
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
var Ki = { exports: {} },
  rn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uu;
function ph() {
  if (uu) return rn;
  uu = 1;
  var e = lt(),
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
var cu;
function hh() {
  return (cu || ((cu = 1), (Ki.exports = ph())), Ki.exports);
}
var L = hh(),
  y = lt();
const k = er(y),
  lu = vh({ __proto__: null, default: k }, [y]);
var Yi = {},
  Ho = function (e, t) {
    return (
      (Ho =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      Ho(e, t)
    );
  };
function ef(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ho(e, t);
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
function tf(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function rf(e, t, r, n) {
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
function nf(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function af(e, t, r, n, a, i) {
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
function of(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function sf(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function uf(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function cf(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function lf(e, t, r, n) {
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
function df(e, t) {
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
var mi = Object.create
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
function ff(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && mi(t, e, r);
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
function Rs(e, t) {
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
function vf() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Rs(arguments[t]));
  return e;
}
function pf() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var i = arguments[t], o = 0, s = i.length; o < s; o++, a++) n[a] = i[o];
  return n;
}
function hf(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, i; n < a; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function zr(e) {
  return this instanceof zr ? ((this.v = e), this) : new zr(e);
}
function gf(e, t, r) {
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
function bf(e) {
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
function yf(e) {
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
function _f(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var gh = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Wo = function (e) {
    return (
      (Wo =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      Wo(e)
    );
  };
function mf(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = Wo(e), n = 0; n < r.length; n++) r[n] !== "default" && mi(t, e, r[n]);
  return (gh(t, e), t);
}
function wf(e) {
  return e && e.__esModule ? e : { default: e };
}
function Of(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function kf(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function Sf(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Ef(e, t, r) {
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
var bh =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function xf(e) {
  function t(i) {
    ((e.error = e.hasError ? new bh(i, e.error, "An error was suppressed during disposal.") : i),
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
function Cf(e, t) {
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
const yh = {
    __extends: ef,
    __assign: Qa,
    __rest: tf,
    __decorate: rf,
    __param: nf,
    __esDecorate: af,
    __runInitializers: of,
    __propKey: sf,
    __setFunctionName: uf,
    __metadata: cf,
    __awaiter: lf,
    __generator: df,
    __createBinding: mi,
    __exportStar: ff,
    __values: ei,
    __read: Rs,
    __spread: vf,
    __spreadArrays: pf,
    __spreadArray: hf,
    __await: zr,
    __asyncGenerator: gf,
    __asyncDelegator: bf,
    __asyncValues: yf,
    __makeTemplateObject: _f,
    __importStar: mf,
    __importDefault: wf,
    __classPrivateFieldGet: Of,
    __classPrivateFieldSet: kf,
    __classPrivateFieldIn: Sf,
    __addDisposableResource: Ef,
    __disposeResources: xf,
    __rewriteRelativeImportExtension: Cf,
  },
  _h = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Ef,
        get __assign() {
          return Qa;
        },
        __asyncDelegator: bf,
        __asyncGenerator: gf,
        __asyncValues: yf,
        __await: zr,
        __awaiter: lf,
        __classPrivateFieldGet: Of,
        __classPrivateFieldIn: Sf,
        __classPrivateFieldSet: kf,
        __createBinding: mi,
        __decorate: rf,
        __disposeResources: xf,
        __esDecorate: af,
        __exportStar: ff,
        __extends: ef,
        __generator: df,
        __importDefault: wf,
        __importStar: mf,
        __makeTemplateObject: _f,
        __metadata: cf,
        __param: nf,
        __propKey: sf,
        __read: Rs,
        __rest: tf,
        __rewriteRelativeImportExtension: Cf,
        __runInitializers: of,
        __setFunctionName: uf,
        __spread: vf,
        __spreadArray: hf,
        __spreadArrays: pf,
        __values: ei,
        default: yh,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  At = Ps(_h);
var nn = {},
  du;
function mh() {
  return (
    du ||
      ((du = 1),
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
var Ji = {},
  Xi = {},
  an = {},
  on = {},
  fu;
function dt() {
  if (fu) return on;
  ((fu = 1), Object.defineProperty(on, "__esModule", { value: !0 }), (on.BridgeAPIError = void 0));
  class e extends Error {}
  return ((on.BridgeAPIError = e), on);
}
var vu;
function Oe() {
  if (vu) return an;
  ((vu = 1), Object.defineProperty(an, "__esModule", { value: !0 }), (an.getCallBridge = void 0));
  const e = dt();
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
  pu;
function Pf() {
  if (pu) return sn;
  ((pu = 1), Object.defineProperty(sn, "__esModule", { value: !0 }), (sn.withRateLimiter = void 0));
  const e = dt(),
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
var hu;
function wh() {
  return (
    hu ||
      ((hu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = Oe(),
          r = dt(),
          n = Pf(),
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
      })(Xi)),
    Xi
  );
}
var gu;
function Oh() {
  return (
    gu ||
      ((gu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), At.__exportStar(wh(), e));
      })(Ji)),
    Ji
  );
}
var Zi = {},
  un = {},
  Qi = {},
  bu;
function Rf() {
  return (
    bu ||
      ((bu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = Oe(),
          r = dt(),
          n = Pf(),
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
      })(Qi)),
    Qi
  );
}
var yu;
function kh() {
  if (yu) return un;
  ((yu = 1), Object.defineProperty(un, "__esModule", { value: !0 }), (un.invokeRemote = void 0));
  const e = Rf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((un.invokeRemote = t), un);
}
var cn = {},
  _u;
function Sh() {
  if (_u) return cn;
  ((_u = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.invokeService = void 0));
  const e = Rf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((cn.invokeService = t), cn);
}
var mu;
function Eh() {
  return (
    mu ||
      ((mu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = At;
        (t.__exportStar(kh(), e), t.__exportStar(Sh(), e));
      })(Zi)),
    Zi
  );
}
var eo = {},
  ln = {},
  dn = {},
  wu;
function xh() {
  if (wu) return dn;
  ((wu = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.submit = void 0));
  const e = Oe(),
    t = dt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((dn.submit = n), dn);
}
var fn = {},
  Ou;
function Ch() {
  if (Ou) return fn;
  ((Ou = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.close = void 0));
  const e = Oe(),
    t = dt(),
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
  ku;
function Ph() {
  if (ku) return vn;
  ((ku = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.open = void 0));
  const e = Oe(),
    t = dt(),
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
  Su;
function Rh() {
  if (Su) return pn;
  ((Su = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.refresh = void 0));
  const e = Oe(),
    t = dt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((pn.refresh = n), pn);
}
var hn = {},
  Eu;
function Ah() {
  if (Eu) return hn;
  ((Eu = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.createHistory = void 0));
  const t = (0, Oe().getCallBridge)(),
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
  to = {},
  Tt = {},
  xu;
function Af() {
  return (
    xu ||
      ((xu = 1),
      Object.defineProperty(Tt, "__esModule", { value: !0 }),
      (Tt.FORGE_SUPPORTED_LOCALE_CODES =
        Tt.I18N_BUNDLE_FOLDER_NAME =
        Tt.I18N_INFO_FILE_NAME =
          void 0),
      (Tt.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (Tt.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (Tt.FORGE_SUPPORTED_LOCALE_CODES = [
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
    Tt
  );
}
var ar = {},
  Cu;
function jh() {
  if (Cu) return ar;
  ((Cu = 1),
    Object.defineProperty(ar, "__esModule", { value: !0 }),
    (ar.TranslationsGetter = ar.TranslationGetterError = void 0));
  const e = (n, a) => {
    n.includes(a) || n.push(a);
  };
  class t extends Error {
    constructor(a) {
      (super(a), (this.name = "TranslationGetterError"));
    }
  }
  ar.TranslationGetterError = t;
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
  return ((ar.TranslationsGetter = r), ar);
}
var bn = {},
  ro = {},
  Pu;
function jf() {
  return (
    Pu ||
      ((Pu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = At.__importDefault(fh()),
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
      })(ro)),
    ro
  );
}
var Ru;
function Ih() {
  if (Ru) return bn;
  ((Ru = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.Translator = void 0));
  const e = jf();
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
  Au;
function Dh() {
  if (Au) return yn;
  ((Au = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.ensureLocale = void 0));
  const e = Af(),
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
var no = {},
  ju;
function Th() {
  return (
    ju ||
      ((ju = 1),
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
      })(no)),
    no
  );
}
var ao = {},
  Iu;
function Mh() {
  return (Iu || ((Iu = 1), Object.defineProperty(ao, "__esModule", { value: !0 })), ao);
}
var Du;
function If() {
  return (
    Du ||
      ((Du = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = At;
        (t.__exportStar(Af(), e),
          t.__exportStar(jh(), e),
          t.__exportStar(Ih(), e),
          t.__exportStar(Dh(), e));
        var r = jf();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Th();
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
          t.__exportStar(Mh(), e));
      })(to)),
    to
  );
}
var Tu;
function Lh() {
  if (Tu) return gn;
  ((Tu = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.getContext = void 0));
  const e = Oe(),
    t = If(),
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
  Mu;
function $h() {
  if (Mu) return _n;
  ((Mu = 1),
    Object.defineProperty(_n, "__esModule", { value: !0 }),
    (_n.changeWindowTitle = void 0));
  const e = Oe(),
    t = dt(),
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
  Lu;
function Nh() {
  if (Lu) return mn;
  ((Lu = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.theme = void 0));
  const t = (0, Oe().getCallBridge)();
  return ((mn.theme = { enable: () => t("enableTheming") }), mn);
}
var wn = {},
  On = {},
  io = {},
  ir = {},
  $u;
function Df() {
  if ($u) return ir;
  (($u = 1),
    Object.defineProperty(ir, "__esModule", { value: !0 }),
    (ir.blobToBase64 = ir.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      i = atob(a),
      o = new Array(i.length);
    for (let u = 0; u < i.length; u++) o[u] = i.charCodeAt(u);
    const s = new Uint8Array(o);
    return new Blob([s], { type: n });
  };
  ir.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, a) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        n(i.result);
      }),
        (i.onerror = a),
        i.readAsDataURL(r));
    });
  return ((ir.blobToBase64 = t), ir);
}
var Nu;
function Fh() {
  return (
    Nu ||
      ((Nu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Df(),
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
      })(io)),
    io
  );
}
var Fu;
function Tf() {
  if (Fu) return On;
  ((Fu = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.events = void 0));
  const e = Oe(),
    t = Fh(),
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
var Bu;
function Bh() {
  if (Bu) return wn;
  ((Bu = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.emitReadyEvent = void 0));
  const e = Tf(),
    t = Mf(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return ((wn.emitReadyEvent = n), wn);
}
var zu;
function Mf() {
  if (zu) return ln;
  ((zu = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.view = void 0));
  const e = xh(),
    t = Ch(),
    r = Ph(),
    n = Rh(),
    a = Ah(),
    i = Lh(),
    o = $h(),
    s = Nh(),
    u = Bh();
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
var qu;
function Lf() {
  return (
    qu ||
      ((qu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), At.__exportStar(Mf(), e));
      })(eo)),
    eo
  );
}
var oo = {},
  kn = {},
  Uu;
function zh() {
  if (Uu) return kn;
  ((Uu = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.router = void 0));
  const t = (0, Oe().getCallBridge)(),
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
var Vu;
function qh() {
  return (
    Vu ||
      ((Vu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), At.__exportStar(zh(), e));
      })(oo)),
    oo
  );
}
var so = {},
  Sn = {},
  Gu;
function Uh() {
  if (Gu) return Sn;
  ((Gu = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.Modal = void 0));
  const e = Oe(),
    t = dt(),
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
var Hu;
function Vh() {
  return (
    Hu ||
      ((Hu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), At.__exportStar(Uh(), e));
      })(so)),
    so
  );
}
var Mt = {},
  En = {},
  Wu;
function Gh() {
  if (Wu) return En;
  ((Wu = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.productFetchApi = void 0));
  const e = Df(),
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
var Ku;
function Hh() {
  if (Ku) return Mt;
  Ku = 1;
  var e;
  (Object.defineProperty(Mt, "__esModule", { value: !0 }),
    (Mt.requestBitbucket = Mt.requestJira = Mt.requestConfluence = void 0));
  const t = Oe();
  return (
    (e = (0, Gh().productFetchApi)((0, t.getCallBridge)())),
    (Mt.requestConfluence = e.requestConfluence),
    (Mt.requestJira = e.requestJira),
    (Mt.requestBitbucket = e.requestBitbucket),
    Mt
  );
}
var uo = {},
  xn = {},
  Yu;
function Wh() {
  if (Yu) return xn;
  ((Yu = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.showFlag = void 0));
  const e = Oe(),
    t = dt(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var i;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const o = r("showFlag", { ...a, type: (i = a.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await o, r("closeFlag", { id: a.id })) };
    };
  return ((xn.showFlag = n), xn);
}
var Ju;
function Kh() {
  return (
    Ju ||
      ((Ju = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = Wh();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(uo)),
    uo
  );
}
var co = {},
  Xu;
function Yh() {
  return (
    Xu ||
      ((Xu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), At.__exportStar(Tf(), e));
      })(co)),
    co
  );
}
var lo = {},
  Cn = {},
  Zu;
function Jh() {
  if (Zu) return Cn;
  ((Zu = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.__realtime = void 0));
  const t = (0, Oe().getCallBridge)(),
    r = (o, s) => t("publishRealtimeChannel", { channelName: o, eventPayload: s }),
    n = (o, s, u) => t("subscribeRealtimeChannel", { channelName: o, onEvent: s, options: u }),
    a = (o, s) => t("publishRealtimeChannel", { channelName: o, eventPayload: s, isGlobal: !0 }),
    i = (o, s, u) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: s, options: u, isGlobal: !0 });
  return ((Cn.__realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: i }), Cn);
}
var Qu;
function Xh() {
  return (
    Qu ||
      ((Qu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), At.__exportStar(Jh(), e));
      })(lo)),
    lo
  );
}
var Lt = {},
  ec;
function Zh() {
  if (ec) return Lt;
  ((ec = 1),
    Object.defineProperty(Lt, "__esModule", { value: !0 }),
    (Lt.createTranslationFunction = Lt.getTranslations = Lt.resetTranslationsCache = void 0));
  const e = If(),
    t = Lf(),
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
  Lt.resetTranslationsCache = a;
  const i = async (s = null, u = { fallback: !0 }) => {
    let c = s;
    return (c || (c = (await t.view.getContext()).locale), await n.getTranslations(c, u));
  };
  Lt.getTranslations = i;
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
  return ((Lt.createTranslationFunction = o), Lt);
}
var tc;
function Qh() {
  return (
    tc ||
      ((tc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = At;
        var r = mh();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Oh(), e),
          t.__exportStar(Eh(), e),
          t.__exportStar(Lf(), e),
          t.__exportStar(qh(), e),
          t.__exportStar(Vh(), e),
          t.__exportStar(Hh(), e),
          t.__exportStar(Kh(), e),
          t.__exportStar(Yh(), e),
          t.__exportStar(Xh(), e),
          (e.i18n = t.__importStar(Zh())));
      })(Yi)),
    Yi
  );
}
var qt = Qh();
function ce(e, t) {
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
function eg(e, t) {
  if (Ae(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ae(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function $f(e) {
  var t = eg(e, "string");
  return Ae(t) == "symbol" ? t : t + "";
}
function rc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, $f(n.key), n));
  }
}
function le(e, t, r) {
  return (
    t && rc(e.prototype, t),
    r && rc(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function tg(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ie(e, t) {
  if (t && (Ae(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return tg(e);
}
function H(e) {
  return (
    (H = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    H(e)
  );
}
function sa(e, t) {
  return (
    (sa = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    sa(e, t)
  );
}
function De(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && sa(e, t));
}
function E(e, t, r) {
  return (
    (t = $f(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function we() {}
function rg(e) {
  if (Array.isArray(e)) return e;
}
function ng(e, t) {
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
function Ko(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Nf(e, t) {
  if (e) {
    if (typeof e == "string") return Ko(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Ko(e, t)
          : void 0
    );
  }
}
function ag() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Z(e, t) {
  return rg(e) || ng(e, t) || Nf(e, t) || ag();
}
var Ff = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  ig = function (t) {
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
  Bf = function (t, r, n) {
    return t ? { width: r } : {};
  },
  nc = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  og = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      i = t.destination,
      o = t.sourceIndex;
    if (!i) return r;
    var s = nc(o, n, a),
      u = nc(i.index, n, a),
      c = r.slice(),
      l = c.splice(s, 1),
      d = Z(l, 1),
      f = d[0];
    return (c.splice(u, 0, f), c);
  };
const sg = "modulepreload",
  ug = function (e, t) {
    return new URL(e, t).href;
  },
  ac = {},
  cg = function (t, r, n) {
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
          if (((l = ug(l, n)), l in ac)) return;
          ac[l] = !0;
          const d = l.endsWith(".css"),
            f = d ? '[rel="stylesheet"]' : "";
          if (!!n)
            for (let v = o.length - 1; v >= 0; v--) {
              const g = o[v];
              if (g.href === l && (!d || g.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${f}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = d ? "stylesheet" : sg),
            d || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = l),
            u && h.setAttribute("nonce", u),
            document.head.appendChild(h),
            d)
          )
            return new Promise((v, g) => {
              (h.addEventListener("load", v),
                h.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${l}`))));
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
function Y() {
  return (
    (Y = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Y.apply(null, arguments)
  );
}
function lg(e, t) {
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
    a = lg(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      ((r = i[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function ic(e, t) {
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
      ? ic(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ic(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var dg = (function () {
  function e(t) {
    var r = this;
    (ce(this, e),
      E(this, "_isAnalyticsEvent", !0),
      E(this, "clone", function () {
        var n = fo({}, r.payload);
        return new e({ payload: n });
      }),
      (this.payload = t.payload));
  }
  return le(e, [
    {
      key: "update",
      value: function (r) {
        return (
          typeof r == "function" && (this.payload = r(this.payload)),
          Ae(r) === "object" && (this.payload = fo(fo({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function fg(e) {
  if (Array.isArray(e)) return Ko(e);
}
function vg(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function pg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Me(e) {
  return fg(e) || vg(e) || Nf(e) || pg();
}
function hg(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = H(e)) !== null; );
  return e;
}
function ri() {
  return (
    (ri =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = hg(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    ri.apply(null, arguments)
  );
}
function gg(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, zf() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
function bg(e, t, r, n) {
  var a = ri(H(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var yg = (function (e) {
  function t(r) {
    var n;
    return (
      ce(this, t),
      (n = gg(this, t, [r])),
      E(n, "_isUIAnalyticsEvent", !0),
      E(n, "clone", function () {
        if (n.hasFired) return null;
        var a = Me(n.context),
          i = Me(n.handlers),
          o = JSON.parse(JSON.stringify(n.payload));
        return new t({ context: a, handlers: i, payload: o });
      }),
      E(n, "fire", function (a) {
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
    De(t, e),
    le(t, [
      {
        key: "update",
        value: function (n) {
          return this.hasFired ? this : bg(t, "update", this, 3)([n]);
        },
      },
    ])
  );
})(dg);
function oc(e, t, r, n, a, i, o) {
  try {
    var s = e[i](o),
      u = s.value;
  } catch (c) {
    return void r(c);
  }
  s.done ? t(u) : Promise.resolve(u).then(n, a);
}
function ve(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, a) {
      var i = e.apply(t, r);
      function o(u) {
        oc(i, n, a, o, s, "next", u);
      }
      function s(u) {
        oc(i, n, a, o, s, "throw", u);
      }
      o(void 0);
    });
  };
}
var vo = { exports: {} },
  po = { exports: {} },
  sc;
function qf() {
  return (
    sc ||
      ((sc = 1),
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
  uc;
function Uf() {
  return (
    uc ||
      ((uc = 1),
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
var cc;
function Vf() {
  return (
    cc ||
      ((cc = 1),
      (function (e) {
        var t = Uf();
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
                (function (S, x, j) {
                  var T,
                    C,
                    D,
                    B = 0,
                    F = j || [],
                    U = !1,
                    Q = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: z,
                      f: z.bind(n, 4),
                      d: function (J, A) {
                        return ((T = J), (C = 0), (D = n), (Q.n = A), c);
                      },
                    };
                  function z(V, J) {
                    for (C = V, D = J, a = 0; !U && B && !A && a < F.length; a++) {
                      var A,
                        q = F[a],
                        he = Q.p,
                        W = q[2];
                      V > 3
                        ? (A = W === J) &&
                          ((D = q[(C = q[4]) ? 5 : ((C = 3), 3)]), (q[4] = q[5] = n))
                        : q[0] <= he &&
                          ((A = V < 2 && he < q[1])
                            ? ((C = 0), (Q.v = J), (Q.n = q[1]))
                            : he < W &&
                              (A = V < 3 || q[0] > J || J > W) &&
                              ((q[4] = V), (q[5] = J), (Q.n = W), (C = 0)));
                    }
                    if (A || V > 1) return c;
                    throw ((U = !0), J);
                  }
                  return function (V, J, A) {
                    if (B > 1) throw TypeError("Generator is already running");
                    for (U && J === 1 && z(J, A), C = J, D = A; (a = C < 2 ? n : D) || !U; ) {
                      T || (C ? (C < 3 ? (C > 1 && (Q.n = -1), z(C, D)) : (Q.n = D)) : (Q.v = D));
                      try {
                        if (((B = 2), T)) {
                          if ((C || (V = "next"), (a = T[V]))) {
                            if (!(a = a.call(T, D)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((D = a.value), C < 2 && (C = 0));
                          } else
                            (C === 1 && (a = T.return) && a.call(T),
                              C < 2 &&
                                ((D = TypeError(
                                  "The iterator does not provide a '" + V + "' method",
                                )),
                                (C = 1)));
                          T = n;
                        } else if ((a = (U = Q.n < 0) ? D : S.call(x, Q)) !== c) break;
                      } catch (q) {
                        ((T = n), (C = 1), (D = q));
                      } finally {
                        B = 1;
                      }
                    }
                    return { value: a, done: U };
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
  lc;
function Gf() {
  return (
    lc ||
      ((lc = 1),
      (function (e) {
        var t = qf(),
          r = Uf();
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
var dc;
function Hf() {
  return (
    dc ||
      ((dc = 1),
      (function (e) {
        var t = Vf(),
          r = Gf();
        function n(a, i, o, s, u) {
          return new r(t().w(a, i, o, s), u || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(yo)),
    yo.exports
  );
}
var fc;
function _g() {
  return (
    fc ||
      ((fc = 1),
      (function (e) {
        var t = Hf();
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
  vc;
function mg() {
  return (
    vc ||
      ((vc = 1),
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
  pc;
function wg() {
  return (
    pc ||
      ((pc = 1),
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
var hc;
function Og() {
  return (
    hc ||
      ((hc = 1),
      (function (e) {
        var t = wg().default;
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
var gc;
function kg() {
  return (
    gc ||
      ((gc = 1),
      (function (e) {
        var t = qf(),
          r = Vf(),
          n = _g(),
          a = Hf(),
          i = Gf(),
          o = mg(),
          s = Og();
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
var ko, bc;
function Sg() {
  if (bc) return ko;
  bc = 1;
  var e = kg()();
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
var Eg = Sg();
const N = er(Eg);
var or = {},
  Sr = {},
  Ta = {},
  yc;
function xg() {
  if (yc) return Ta;
  ((yc = 1), Object.defineProperty(Ta, "__esModule", { value: !0 }));
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
  return ((Ta.default = t), Ta);
}
var Er = {},
  Pn = {},
  _c;
function Cg() {
  if (_c) return Pn;
  ((_c = 1),
    Object.defineProperty(Pn, "__esModule", { value: !0 }),
    (Pn._resolveDeltasResponse = void 0));
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
  Pn._resolveDeltasResponse = r;
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
  return Pn;
}
var mc;
function Wf() {
  if (mc) return Er;
  mc = 1;
  var e =
    (Er && Er.__awaiter) ||
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
  Object.defineProperty(Er, "__esModule", { value: !0 });
  const t = Zt(),
    r = Cg();
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
  return ((Er.default = n), Er);
}
var Rn = {},
  wc;
function Pg() {
  if (wc) return Rn;
  ((wc = 1),
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
var sr = {},
  Oc;
function Rg() {
  if (Oc) return sr;
  Oc = 1;
  var e =
    (sr && sr.__awaiter) ||
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
  (Object.defineProperty(sr, "__esModule", { value: !0 }),
    (sr.StatsigEvaluationsDataAdapter = void 0));
  const t = Zt(),
    r = Wf();
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
  return ((sr.StatsigEvaluationsDataAdapter = n), sr);
}
var kc;
function Ag() {
  if (kc) return Sr;
  kc = 1;
  var e =
    (Sr && Sr.__awaiter) ||
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
  Object.defineProperty(Sr, "__esModule", { value: !0 });
  const t = Zt(),
    r = xg(),
    n = Wf(),
    a = Pg(),
    i = Rg();
  let o = class Yo extends t.StatsigClientBase {
    static instance(u) {
      const c = (0, t._getStatsigGlobal)().instance(u);
      return c instanceof Yo
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Yo(u ?? "", {}));
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
      var l;
      const d = (0, t._normalizeUser)(u, c),
        f = (l = d.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      return (
        f && t.StableID.setOverride(f, this._sdkKey),
        Object.keys(this._possibleFirstTouchMetadata).length > 0 &&
          (d.analyticsOnlyMetadata = Object.assign(
            Object.assign({}, d.analyticsOnlyMetadata),
            this._possibleFirstTouchMetadata,
          )),
        d
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
  return ((Sr.default = o), Sr);
}
var Sc;
function jg() {
  return (
    Sc ||
      ((Sc = 1),
      (function (e) {
        var t =
            (or && or.__createBinding) ||
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
            (or && or.__exportStar) ||
            function (o, s) {
              for (var u in o)
                u !== "default" && !Object.prototype.hasOwnProperty.call(s, u) && t(s, o, u);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Zt(),
          a = Ag();
        ((e.StatsigClient = a.default), r(Zt(), e));
        const i = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = i;
      })(or)),
    or
  );
}
var it = jg(),
  So = { exports: {} },
  Ec;
function Ig() {
  return (
    Ec ||
      ((Ec = 1),
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
var Dg = Ig();
const Tg = er(Dg);
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
function Kt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xc(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ma = "@all-features",
  Mg = (function () {
    function e() {
      (ce(this, e), E(this, "eventToValue", new Map()), (this.emitter = new Tg()));
    }
    return le(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, i) {
          var o = this,
            s = a(r, Kt(Kt({}, i), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, s);
          var u = function () {
            var l = a(r, Kt(Kt({}, i), {}, { fireGateExposure: !1 })),
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
            l = o(r, n, a, Kt(Kt({}, s), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(i) === void 0 && this.eventToValue.set(i, l);
          var d = function () {
            var p = o(r, n, a, Kt(Kt({}, s), {}, { fireExperimentExposure: !1 })),
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
            this.emitter.on(Ma, r),
            function () {
              n.emitter.off(Ma, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(Ma),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== Ma;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  Lg = "fedramp-moderate";
function $g() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === Lg;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var As = (function (e) {
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
  ua = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  Ng = [
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
function Cc(e, t) {
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
function Jo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cc(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var La = function (t) {
    return Jo({ perimeter: $g() ? ua.FEDRAMP_MODERATE : ua.COMMERCIAL }, t);
  },
  An = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var i = function (f, p) {
      var h = Z(f, 1),
        v = h[0],
        g = Z(p, 1),
        b = g[0];
      return v.localeCompare(b);
    };
    (n.sort(i), a.sort(i));
    for (var o = 0; o < n.length; o++) {
      var s = Z(n[o], 2),
        u = s[1],
        c = Z(a[o], 2),
        l = c[1];
      if (u !== l) return !1;
    }
    return !0;
  },
  Pc = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  Fg = function (t) {
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
    var f = ne(t, Ng);
    return Jo(
      Jo({}, f),
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
  Bg = Object.entries(As).map(function (e) {
    var t = Z(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  Kf = function (t) {
    var r,
      n,
      a,
      i = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = Bg.find(function (o) {
            var s = Z(o, 1),
              u = s[0];
            return i.includes(u);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : As.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  Xo = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  Rc = (function () {
    function e(t, r, n, a) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (ce(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = i),
        (this._allocatedExperimentName = o),
        (this._evaluationDetails = a),
        (this._onDefaultValueFallback = s));
    }
    return le(
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
                Kf(r.details),
                Xo(
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
  Ac = (function () {
    function e(t, r, n, a) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        u = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        c = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (ce(this, e),
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
    return le(
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
                Kf(r.details),
                function (l, d) {
                  return r.get(d);
                },
                Xo(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                Xo(
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
  Fr = "5.5.4";
function zg(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Yf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Yf = function () {
    return !!e;
  })();
}
function qg(e, t, r) {
  if (Yf()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && sa(a, r.prototype), a);
}
function Zo(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Zo = function (n) {
      if (n === null || !zg(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return qg(n, arguments, H(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        sa(a, n)
      );
    }),
    Zo(e)
  );
}
function Ug(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, Jf() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var jc = (function (e) {
  function t(r) {
    return (ce(this, t), Ug(this, t, [r]));
  }
  return (De(t, e), le(t));
})(Zo(Error));
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
function Vg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ic(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ic(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Gg = 5e3,
  Hg = "https://api.atlassian.com/flags",
  Wg = "https://api.stg.atlassian.com/flags",
  Kg = "https://api.dev.atlassian.com/flags",
  Yg = "https://api.stg.atlassian-us-gov-mod.com/flags",
  Jg = "https://api.atlassian-us-gov-mod.com/flags",
  Xg = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  Zg = "oasis-stg.com/flags",
  Qg = "atlassian-isolated.net/flags",
  eb = "/gateway/api/flags",
  Eo = (function () {
    function e() {
      ce(this, e);
    }
    return le(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = ve(
            N.mark(function n(a) {
              var i, o;
              return N.wrap(
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
          var t = ve(
            N.mark(function n(a, i, o) {
              var s;
              return N.wrap(
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
          var t = ve(
            N.mark(function n(a) {
              var i;
              return N.wrap(function (s) {
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
                        new jc(
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
                      throw new jc("Unexpected 204 response");
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
          var t = ve(
            N.mark(function n(a) {
              var i;
              return N.wrap(function (s) {
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
          if (n) return eb;
          if (a === ua.FEDRAMP_MODERATE)
            switch (r) {
              case Yn.Production:
                return Jg;
              case Yn.Staging:
                return Yg;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === ua.COMMERCIAL)
            switch (r) {
              case Yn.Development:
                return Kg;
              case Yn.Staging:
                var o = this.getApiUrl(i);
                return o !== null ? o : Wg;
              default:
                var s = this.getApiUrl(i);
                return s !== null ? s : Hg;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = ve(
            N.mark(function n(a, i, o, s) {
              var u, c, l, d, f;
              return N.wrap(
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
                          (c = o.fetchTimeoutMs || Gg),
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
                            Vg(
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
          if (n === void 0) return r ? Xg.replace("%s", r) : null;
          var a = n.protocol,
            i = n.hostname,
            o = i.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(a, "//api.").concat(o[1], ".").concat(Zg);
          var s = i.match(/([^.]+)\.atlassian-isolated\.net$/);
          return s ? "".concat(a, "//api.").concat(s[1], ".").concat(Qg) : null;
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
function jn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dc(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Dc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function tb(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, Xf() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function Xf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Xf = function () {
    return !!e;
  })();
}
function rb(e, t, r, n) {
  var a = ri(H(e.prototype), t, r);
  return typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var nb = (function (e) {
  function t() {
    var r;
    return (
      ce(this, t),
      (r = tb(this, t, ["NoFetchDataAdapter", "nofetch"])),
      E(r, "bootstrapResult", null),
      r
    );
  }
  return (
    De(t, e),
    le(t, [
      {
        key: "setBootstrapData",
        value: function (n) {
          this.bootstrapResult = n
            ? {
                source: "Bootstrap",
                data: JSON.stringify(n),
                receivedAt: Date.now(),
                stableID: it.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = ve(
            N.mark(function a(i, o) {
              return N.wrap(function (u) {
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
          var r = ve(
            N.mark(function a(i, o, s) {
              return N.wrap(
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
                              { fullUserHash: it._getFullUserHash(o) },
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
            jn(jn({}, this.bootstrapResult), {}, { fullUserHash: it._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = ve(
            N.mark(function a(i, o, s) {
              return N.wrap(function (c) {
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
          var a = it._getStorageKey(this._getSdkKey(), n);
          return "".concat(it.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(a);
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
          rb(t, "setData", this)([n, a]);
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
})(it.DataAdapterCore);
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
function xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Tc(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Tc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ab(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = ib(e)) || t) {
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
function ib(e, t) {
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
function Mc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var xo = "LocalOverride:Recognized",
  ob = "STATSIG_OVERRIDES",
  Lc = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  xr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  Ge = function (t, r) {
    return r + ":" + t;
  },
  sb = (function () {
    function e(t) {
      (ce(this, e),
        (this._overrides = xr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return le(e, [
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
          for (var r = xr(), n = arguments.length, a = new Array(n), i = 0; i < n; i++)
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
                f = Z(l[c], 2),
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
                m = Z(g[v], 2),
                w = m[0],
                O = m[1];
              r.configs[w] = O;
            }
            for (
              var _ = 0, S = Object.entries((x = u.layers) !== null && x !== void 0 ? x : {});
              _ < S.length;
              _++
            ) {
              var x,
                j = Z(S[_], 2),
                T = j[0],
                C = j[1];
              r.layers[T] = C;
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
            this.parseStoredOverrides(Lc),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Lc);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var i = a[n],
              o = new Set(Object.keys(i)),
              s = ab(o),
              u;
            try {
              for (s.s(); !(u = s.n()).done; ) {
                var c = u.value,
                  l = Ve._DJB2(c);
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
          var n = xe(xe({}, xr()), r);
          this._djb2Map.clear();
          for (var a = 0, i = Object.entries(n); a < i.length; a++)
            for (
              var o = Z(i[a], 2), s = o[0], u = o[1], c = 0, l = Object.entries(u);
              c < l.length;
              c++
            ) {
              var d = Z(l[c], 2),
                f = d[0],
                p = d[1];
              this._djb2Map.set(Ge(Ve._DJB2(f), s), p);
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
            this._djb2Map.set(Ge(Ve._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(Ge(Ve._DJB2(r), "gates")),
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
                : this._djb2Map.get(Ge(r.name, "gates"));
          return i == null
            ? null
            : xe(xe({}, r), {}, { value: i, details: xe(xe({}, r.details), {}, { reason: xo }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(Ge(Ve._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Ge(Ve._DJB2(r), "configs")),
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
            this._djb2Map.set(Ge(Ve._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Ge(Ve._DJB2(r), "configs")),
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
            this._djb2Map.set(Ge(Ve._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(Ge(Ve._DJB2(r), "layers")),
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
          var a,
            i =
              (a = this._overrides.layers[r.name]) !== null && a !== void 0
                ? a
                : this._djb2Map.get(Ge(r.name, "layers"));
          return i == null
            ? null
            : xe(
                xe({}, r),
                {},
                {
                  __value: i,
                  get: Ve._makeTypedGet(r.name, i),
                  details: xe(xe({}, r.details), {}, { reason: xo }),
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
                : this._djb2Map.get(Ge(r.name, "configs"));
          return i == null
            ? null
            : xe(
                xe({}, r),
                {},
                {
                  value: i,
                  get: Ve._makeTypedGet(r.name, i),
                  details: xe(xe({}, r.details), {}, { reason: xo }),
                },
              );
        },
      },
    ]);
  })(),
  ub = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
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
function Yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $c(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $c(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Nc = "client-default-key",
  cb = "https://xp.atlassian.com/v1/rgstr",
  lb = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? ob : n,
        i = r.overrideAdapter;
      (ce(this, e),
        E(this, "initPromise", null),
        E(this, "initCompleted", !1),
        E(this, "initWithDefaults", !1),
        E(this, "hasCheckGateErrorOccurred", !1),
        E(this, "hasGetExperimentErrorOccurred", !1),
        E(this, "hasGetExperimentValueErrorOccurred", !1),
        E(this, "hasGetLayerErrorOccurred", !1),
        E(this, "hasGetLayerValueErrorOccurred", !1),
        E(this, "subscriptions", new Mg()),
        E(this, "dataAdapter", new nb()),
        E(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = i || new sb(a)));
    }
    return le(e, [
      {
        key: "initialize",
        value: (function () {
          var t = ve(
            N.mark(function n(a, i, o) {
              var s = this,
                u,
                c;
              return N.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((u = La(a)), !this.initPromise)) {
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
          var t = ve(
            N.mark(function n(a, i, o, s) {
              var u = this,
                c,
                l;
              return N.wrap(
                function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        if (((c = La(a)), !this.initPromise)) {
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
                var l = Yt(
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
          var t = ve(
            N.mark(function n(a, i, o) {
              var s = this,
                u,
                c,
                l,
                d = arguments;
              return N.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (
                          ((u = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (c = La(a)),
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
          var t = ve(
            N.mark(function n(a, i, o) {
              var s, u;
              return N.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (s = La(a)),
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
          var t = ve(
            N.mark(function n(a, i) {
              var o = this;
              return N.wrap(
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
          var t = ve(
            N.mark(function n(a, i) {
              var o,
                s,
                u = arguments;
              return N.wrap(
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
              new Rc(r, {}, "", { time: Date.now(), reason: As.Error })
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
          var t = ve(
            N.mark(function n(a, i, o) {
              var s, u, c, l, d, f, p, h;
              return N.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = Yt({}, a)),
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
                          (p = Z(f, 2)),
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
          var t = ve(
            N.mark(function n(a, i, o, s) {
              var u, c, l, d, f, p, h, v;
              return N.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (u = Yt(Yt({}, a), {}, { disableCurrentPageLogging: !0 })),
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
                          (h = Z(p, 2)),
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
          var t = ve(
            N.mark(function n(a, i, o) {
              var s,
                u,
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
                          (u = h.length > 3 && h[3] !== void 0 ? h[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = i),
                          (this.currentAttributes = o),
                          (c = Fg(a)),
                          c.sdkKey || (c.sdkKey = Nc),
                          ((s = c.networkConfig) !== null && s !== void 0 && s.logEventUrl) ||
                            (c.networkConfig = Yt(
                              Yt({}, c.networkConfig),
                              {},
                              { logEventUrl: cb },
                            )),
                          c.perimeter === ua.FEDRAMP_MODERATE && (c.disableLogging = !0),
                          (l = c.sdkKey),
                          (d = c.environment),
                          c.updateUserCompletionCallback,
                          c.perimeter,
                          (f = ne(c, ub)),
                          (this.user = Pc(i, o)),
                          (p = Yt(
                            Yt({}, f),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: it.LogEventCompressionMode.Forced,
                            },
                          )),
                          i.stableId
                            ? it.StableID.setOverride(i.stableId, l)
                            : (p.disableStableID = !0),
                          (g.prev = 12),
                          (this.statsigClient = new it.StatsigClient(l, this.user, p)),
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
                          (this.statsigClient = new it.StatsigClient(Nc, this.user, p)),
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
          var t = ve(
            N.mark(function n(a, i, o) {
              var s = this,
                u,
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
                            ve(
                              N.mark(function p() {
                                return N.wrap(function (v) {
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
          var t = ve(
            N.mark(function n(a, i, o) {
              var s, u, c, l, d, f, p, h, v;
              return N.wrap(
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
                        ((c = b.sent), (l = Pc(i, c.customAttributesFromFetch)), (b.next = 13));
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
            return Ac.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !i }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Ac.fromLayer(it._makeLayer(r, { reason: "Error" }, null))
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
  G = (function () {
    function e() {
      ce(this, e);
    }
    return le(e, null, [
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
I = G;
E(G, "client", new lb());
E(G, "hasCheckGateErrorOccurred", !1);
E(G, "hasGetExperimentValueErrorOccurred", !1);
E(G, "checkGate", function (e, t) {
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
E(G, "getExperimentValue", function (e, t, r, n) {
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
E(G, "initializeCalled", I.client.initializeCalled.bind(I.client));
E(G, "initializeCompleted", I.client.initializeCompleted.bind(I.client));
E(G, "initialize", I.client.initialize.bind(I.client));
E(G, "initializeWithProvider", I.client.initializeWithProvider.bind(I.client));
E(G, "initializeFromValues", I.client.initializeFromValues.bind(I.client));
E(G, "manuallyLogGateExposure", I.client.manuallyLogGateExposure.bind(I.client));
E(G, "getExperiment", I.client.getExperiment.bind(I.client));
E(G, "manuallyLogExperimentExposure", I.client.manuallyLogExperimentExposure.bind(I.client));
E(G, "manuallyLogLayerExposure", I.client.manuallyLogLayerExposure.bind(I.client));
E(G, "shutdownStatsig", I.client.shutdownStatsig.bind(I.client));
E(G, "overrideGate", I.client.overrideGate.bind(I.client));
E(G, "clearGateOverride", I.client.clearGateOverride.bind(I.client));
E(G, "overrideConfig", I.client.overrideConfig.bind(I.client));
E(G, "clearConfigOverride", I.client.clearConfigOverride.bind(I.client));
E(G, "setOverrides", I.client.setOverrides.bind(I.client));
E(G, "getOverrides", I.client.getOverrides.bind(I.client));
E(G, "clearAllOverrides", I.client.clearAllOverrides.bind(I.client));
E(G, "isCurrentUser", I.client.isCurrentUser.bind(I.client));
E(G, "onGateUpdated", I.client.onGateUpdated.bind(I.client));
E(G, "onExperimentValueUpdated", I.client.onExperimentValueUpdated.bind(I.client));
E(G, "onAnyUpdated", I.client.onAnyUpdated.bind(I.client));
E(G, "updateUser", I.client.updateUser.bind(I.client));
E(G, "updateUserWithProvider", I.client.updateUserWithProvider.bind(I.client));
E(G, "updateUserWithValues", I.client.updateUserWithValues.bind(I.client));
E(G, "getPackageVersion", I.client.getPackageVersion.bind(I.client));
E(G, "getLayer", I.client.getLayer.bind(I.client));
E(G, "getLayerValue", I.client.getLayerValue.bind(I.client));
var Qo = G;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = G;
  else {
    var $a, Co;
    Qo = window.__FEATUREGATES_JS__;
    var Fc =
      (($a = Qo) === null || $a === void 0 || (Co = $a.getPackageVersion) === null || Co === void 0
        ? void 0
        : Co.call($a)) || "4.10.0 or earlier";
    if (Fc !== Fr) {
      var db = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(Fc, " when module version ")
        .concat(Fr, " was loading.");
      console.warn(db);
    }
  }
var Cr,
  Pr,
  fb =
    (globalThis == null ||
    (Cr = globalThis.process) === null ||
    Cr === void 0 ||
    (Cr = Cr.env) === null ||
    Cr === void 0
      ? void 0
      : Cr.JEST_WORKER_ID) !== void 0,
  vb =
    !fb &&
    (globalThis == null ||
    (Pr = globalThis.process) === null ||
    Pr === void 0 ||
    (Pr = Pr.env) === null ||
    Pr === void 0
      ? void 0
      : Pr.NODE_ENV) !== "production",
  pb = function () {
    var t;
    vb && (t = console).debug.apply(t, arguments);
  },
  js = {},
  hb = "@atlaskit/platform-feature-flags",
  Qn = "__PLATFORM_FEATURE_FLAGS__",
  Zf = typeof process < "u" && typeof js < "u",
  gb = Zf ? js.ENABLE_PLATFORM_FF === "true" : !1,
  bb = Zf ? js.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  yb = gb || bb,
  _b = { booleanResolver: void 0 },
  ea = typeof window < "u" ? window : globalThis;
ea[Qn] = ea[Qn] || _b;
function mb(e) {
  if (yb)
    return (
      pb(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        hb,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = ea[Qn]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = ea[Qn]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return Qo.checkGate(e);
    var a = (n = ea[Qn]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function Ot(e) {
  return mb(e);
}
var wb = y.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Ob = function () {
    return y.useContext(wb);
  },
  ni = function (t) {
    var r = y.useRef(t);
    return ((r.current = t), r);
  };
function kb(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Sb(e, t) {
  var r = y.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = y.useRef(!0),
    a = y.useRef(r),
    i = n.current || !!(t && a.current.inputs && kb(t, a.current.inputs)),
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
function Eb(e, t) {
  return Sb(function () {
    return e;
  }, t);
}
function Qf() {
  var e = Ob(),
    t = Eb(
      function (r) {
        return new yg({
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
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function xb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bc(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Bc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ca(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    i = e.packageName,
    o = e.packageVersion,
    s = e.analyticsData,
    u = Qf(),
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
          v = xb({ componentName: n, packageName: i, packageVersion: o }, l.current);
        h.context.push(v);
        var g = h.clone();
        (g && g.fire("atlaskit"), d.current(p, h));
      },
      [r, n, a, i, o, c, l, d],
    );
  return f;
}
function zc(e, t) {
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
function Cb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zc(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : zc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function qc(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    i = e.packageVersion,
    o = e.analyticsData,
    s = Qf(),
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
          p = Cb({ componentName: n, packageName: a, packageVersion: i }, c.current);
        f.context.push(p);
        var h = f.clone();
        (h && h.fire("atlaskit"), l.current(f));
      },
      [r, n, a, i, u, c, l],
    );
  return d;
}
var vr = "ASC",
  ai = "DESC",
  Pb = "small",
  ii = "large",
  ev = 0.22;
const Rb = 5;
function P(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const i of a) {
      const o = i.startsWith("_") ? i.slice(0, Rb) : i;
      t[o] = i;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function We(e, t, r) {
  return e ?? "var(--c-, )";
}
var Uc = "#FF5630",
  Vc = "#DE350B",
  Rr = "#BF2600",
  Gc = "#FFC400",
  Hc = "#FFAB00",
  Ar = "#FF991F",
  tv = "#DEEBFF",
  Jn = "#B3D4FF",
  oi = "#4C9AFF",
  Wc = "#2684FF",
  Kc = "#0065FF",
  jr = "#0052CC",
  Yc = "#0747A6",
  Nt = "#FFFFFF",
  Ab = "#FAFBFC",
  Ce = "#F4F5F7",
  es = "#DFE1E6",
  ur = "#A5ADBA",
  jb = "#8993A4",
  Ib = "#6B778C",
  Jc = "#5E6C84",
  Db = "#505F79",
  la = "#42526E",
  He = "#253858",
  lr = "#172B4D",
  In = "rgba(9, 30, 66, 0.04)",
  ts = "rgba(9, 30, 66, 0.08)",
  XS = "rgba(9, 30, 66, 0.25)",
  ZS = "rgba(9, 30, 66, 0.31)",
  at = "#9FB0CC",
  Tb = "#8C9CB8",
  Po = "#67758F",
  Dn = "#3B475C",
  Xc = "#313D52",
  Tn = "#1B2638",
  Ir = "#0D1424",
  Mb = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"];
function Zc(e, t) {
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
function Qc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zc(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Lb = y.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      i = e.testId,
      o = e.isLoading,
      s = ne(e, Mb);
    return y.createElement(
      "table",
      Y({ inert: o ? "" : void 0, ref: t }, s, {
        "data-testid": i && "".concat(i, "--table"),
        className: P([
          "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
          r && "_1kqm1n9t",
          n && "_179rralu",
        ]),
        style: Qc(
          Qc(
            {},
            {
              "--local-dynamic-table-hover-bg":
                "var(--ds-background-neutral-subtle-hovered, ".concat(Ab, ")"),
              "--local-dynamic-table-highlighted-bg": "var(--ds-background-selected, ".concat(
                tv,
                ")",
              ),
              "--local-dynamic-table-hover-highlighted-bg":
                "var(--ds-background-selected-hovered, ".concat(Jn, ")"),
              "--local-dynamic-table-row-focus-outline": "var(--ds-border-focused, ".concat(
                oi,
                ")",
              ),
            },
          ),
          {},
          { "--_k02y3n": We("2px solid ".concat("var(--ds-border, ".concat(es, ")"))) },
        ),
      }),
      a,
    );
  }),
  $b = function (t) {
    var r = t.children;
    return y.createElement(
      "caption",
      { className: P(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  Nb = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: P(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  Fb = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: P(["_4t3i1jdh"]),
      },
      r,
    );
  },
  Bb = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
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
  zb = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function el(e, t) {
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
function tl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? el(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : el(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function qb(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, rv() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function rv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (rv = function () {
    return !!e;
  })();
}
var rl = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var i;
      if (r.cells[a] && ((i = r.cells[a]) === null || i === void 0 ? void 0 : i.key) === n) {
        var o;
        return (o = t[a]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  Ub = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var i = a === vr ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      s = Array.from(r);
    return s.sort(function (u, c) {
      var l = rl(u.cells, t, n),
        d = rl(c.cells, t, n);
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
function Vb(e) {
  var t = (function (r) {
    function n() {
      var a;
      ce(this, n);
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
      return ((a = qb(this, n, [].concat(o))), E(a, "state", { pageRows: [] }), a);
    }
    return (
      De(n, r),
      le(
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
                u = ne(i, zb);
              return k.createElement(
                e,
                Y({ pageRows: this.state.pageRows, head: o }, u, { ref: s }),
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
                p ? ((h = s), (v = s)) : ((h = Ub(u, s, c, l) || []), (v = Ff(h, d, f))),
                tl(tl({}, o), {}, { pageRows: v })
              );
            },
          },
        ],
      )
    );
  })(k.Component);
  return k.forwardRef(function (r, n) {
    return k.createElement(t, Y({}, r, { forwardedRef: n }));
  });
}
var Gb = "--local-dynamic-table-width",
  nv = function (t) {
    var r = t.width;
    return typeof r < "u" ? E({}, Gb, "".concat(r, "%")) : void 0;
  },
  Hb = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  Wb = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      i = t.innerRef,
      o = ne(t, Hb);
    return y.createElement(
      "td",
      Y(
        {
          style: nv({ width: r }),
          ref: i,
          className: P([
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
  Kb = ["isHighlighted", "children", "style", "testId", "className"];
function nl(e, t) {
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
function al(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? nl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : nl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Yb = y.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      i = e.testId,
      o = e.className,
      s = ne(e, Kb);
    return y.createElement(
      "tr",
      Y(
        {
          className: P([
            "_bfhkqtfy _1ygb1852 _1ah312gs",
            r ? "_bfhktkjs _irr31ae3" : "_irr3s8ts",
            o,
          ]),
        },
        s,
        {
          ref: t,
          "data-testid": i,
          style: al(
            al({}, a),
            {},
            {
              "--_akp1ox": We(
                "2px solid ".concat(
                  "var(--ds-border-focused, var(--local-dynamic-table-hover-bg))",
                ),
              ),
            },
          ),
        },
      ),
      n,
    );
  }),
  Jb = ["cells"],
  Xb = ["content", "testId"],
  Zb = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      i = t.isFixedSize,
      o = t.isHighlighted,
      s = r.cells,
      u = ne(r, Jb);
    return k.createElement(
      Yb,
      Y(
        {},
        u,
        { isHighlighted: o },
        o ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(u.key)) },
      ),
      s.map(function (c, l) {
        var d = c.content,
          f = c.testId,
          p = ne(c, Xb),
          h = (n || { cells: [] }).cells[l] || {},
          v = h.shouldTruncate,
          g = h.width;
        return k.createElement(
          Wb,
          Y({ "data-testid": f || (a && "".concat(a, "--cell-").concat(l)) }, p, {
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
function Qb(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, av() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function av() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (av = function () {
    return !!e;
  })();
}
var ey = (function (e) {
    function t() {
      return (ce(this, t), Qb(this, t, arguments));
    }
    return (
      De(t, e),
      le(t, [
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
                return k.createElement(Zb, {
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
  ty = Vb(
    k.forwardRef(function (e, t) {
      return k.createElement(ey, Y({}, e, { forwardedRef: t }));
    }),
  );
function ry(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, iv() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var ny = (function (e) {
  function t(r) {
    var n;
    return (ce(this, t), (n = ry(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    De(t, e),
    le(
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
const Is = y.createContext(null);
var ay = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function iy(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(la, ")")
    : "var(--ds-icon-inverse, ".concat(Nt, ")");
}
var Na = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  oy = typeof window > "u" ? y.useEffect : y.useLayoutEffect,
  ov = k.memo(
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
        f = typeof l == "number" ? l : ay[l],
        p = "".concat(o, "ms"),
        h = iy(a),
        v = y.useContext(Is);
      return (
        oy(
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
            className: P([Na.wrapperStyles, Na.rotateStyles]),
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
              className: P([Na.loadInStyles]),
            },
            k.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: P([Na.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
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
function ol(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? il(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : il(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var sl = "--contents-opacity",
  sy = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: P(["_kqswh2mm"]) },
      r,
    );
  },
  uy = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: P(["_tzy47hfw _lcxvglyw"]),
        style: ol(ol({}, E({}, sl, n)), {}, { "--_cnddr8": We("var(".concat(sl, ")")) }),
      },
      r,
    );
  },
  cy = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: P(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function ly(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, sv() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var uv = (function (e) {
  function t() {
    return (ce(this, t), ly(this, t, arguments));
  }
  return (
    De(t, e),
    le(t, [
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
            sy,
            { testId: u },
            i ? k.createElement(uy, { contentsOpacity: s, testId: u }, a) : a,
            i &&
              k.createElement(
                cy,
                { testId: u },
                k.createElement(ov, {
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
E(uv, "defaultProps", {
  isLoading: !0,
  spinnerSize: ii,
  contentsOpacity: ev,
  loadingLabel: "Loading table",
});
var dy = ["children", "testId"],
  fy = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = ne(e, dy);
    return y.createElement(
      "div",
      Y({}, a, { "data-testid": n, ref: t, className: P(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  vy = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: P(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  py = y.forwardRef(function (e, t) {
    var r = e.children;
    return y.createElement("div", { ref: t, className: P(["_kqswh2mm _152tidpf"]) }, r);
  });
function hy(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, cv() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
    var r;
    ce(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = hy(this, t, [].concat(a))),
      E(r, "spinnerRef", k.createRef()),
      E(r, "containerRef", k.createRef()),
      E(r, "componentDidMount", function () {
        r.props.isLoading &&
          r.hasTargetNode() &&
          (r.attachListeners(), r.updateTargetAppearance(), r.updateSpinnerPosition());
      }),
      E(r, "UNSAFE_componentWillReceiveProps", function (o) {
        !o.isLoading || !r.hasTargetNode(o)
          ? r.detachListeners()
          : r.props.isLoading || r.attachListeners();
      }),
      E(r, "componentDidUpdate", function () {
        r.hasTargetNode() &&
          (r.updateTargetAppearance(), r.props.isLoading && r.updateSpinnerPosition());
      }),
      E(r, "componentWillUnmount", function () {
        r.detachListeners();
      }),
      E(r, "getTargetNode", function () {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r.props,
          s = o.targetRef,
          u = s?.();
        return u || r.containerRef.current;
      }),
      E(r, "hasTargetNode", function (o) {
        return !!r.getTargetNode(o);
      }),
      E(r, "isVerticallyVisible", function (o, s) {
        var u = o.top,
          c = o.bottom;
        return c <= 0 ? !1 : u < s;
      }),
      E(r, "isFullyVerticallyVisible", function (o, s) {
        var u = o.top,
          c = o.bottom;
        return u >= 0 && c <= s;
      }),
      E(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      E(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      E(r, "translateSpinner", function (o, s, u) {
        ((o.style.position = u ? "fixed" : ""),
          (o.style.transform = s !== 0 ? "translate3d(0, ".concat(s, "px, 0)") : ""));
      }),
      E(r, "updateTargetAppearance", function () {
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
    De(t, e),
    le(t, [
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
              var x = S.getBoundingClientRect().top,
                j = (f - x) / 2;
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
            fy,
            { testId: s && "".concat(s, "--loading--container--advanced"), ref: this.containerRef },
            a,
            i &&
              k.createElement(
                vy,
                { testId: s },
                k.createElement(
                  py,
                  { ref: this.spinnerRef },
                  k.createElement(ov, {
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
E(lv, "defaultProps", {
  isLoading: !0,
  spinnerSize: ii,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(ev), ")"),
  loadingLabel: "Loading table",
});
function gy(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = y.useState(t),
    a = Z(n, 2),
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
  by = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  yy = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  _y = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  my = { core: 16, utility: 12 },
  wy = {
    core: {
      medium: { none: 0, compact: 4, spacious: 4 },
      small: { none: 0, compact: 2.66, spacious: 8 },
    },
    utility: {
      medium: { none: 0, compact: 2, spacious: 6 },
      small: { none: 0, compact: 2, spacious: 6 },
    },
  },
  ul = y.memo(function (t) {
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
      b = f ? { __html: f } : void 0;
    if (d && !Ot("platform-visual-refresh-icons"))
      return y.createElement(d, {
        primaryColor: u ?? i,
        secondaryColor: c,
        size: l,
        label: s,
        testId: o,
        UNSAFE_margin: h,
      });
    var m = (r = t.type) !== null && r !== void 0 ? r : "core",
      w =
        "size" in t && t.size !== void 0 && (t.size === "small" || t.size === "medium")
          ? t.size
          : "medium",
      O = my[m],
      _ = wy[m][w][g],
      S = O + 2 * _;
    return y.createElement(
      "span",
      {
        "data-testid": o,
        role: s ? "img" : void 0,
        "aria-label": s || void 0,
        "aria-hidden": s ? void 0 : !0,
        style: { color: i },
        className: P([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          p && "_1bsb1kw7 _4t3i1kw7",
          (m === "utility" || w === "small") && "_vwz4utpp",
        ]),
      },
      y.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - _, " ")
          .concat(0 - _, " ")
          .concat(S, " ")
          .concat(S),
        role: "presentation",
        dangerouslySetInnerHTML: b,
        className: P([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : m === "utility" ? _y[g] : w === "small" ? yy[g] : by[g],
        ]),
      }),
    );
  });
const Oy = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: ul, default: ul }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  wi = Ps(Oy);
var cl;
function ky() {
  if (cl) return Ln;
  ((cl = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.default = void 0));
  var e = r(lt()),
    t = r(wi);
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<path fill="currentcolor" d="m9.97 1.47-6 6a.75.75 0 0 0-.052 1.004l.052.056 6 6 1.06-1.06L5.56 8l5.47-5.47z"/>',
        },
        a,
      ),
    );
  return ((n.displayName = "ChevronLeftIcon"), (Ln.default = n), Ln);
}
var $n = {};
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
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ll(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Sy = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  fl = y.memo(function (t) {
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
      Y(
        {
          "data-testid": c,
          "data-vc": "icon-".concat(c),
          role: l ? "img" : void 0,
          "aria-label": l || void 0,
          "aria-hidden": l ? void 0 : !0,
          style: dl(
            dl({}, v),
            {},
            { "--icon-primary-color": o, "--icon-secondary-color": s, margin: p },
          ),
        },
        h,
        {
          className: P([
            "_1e0c1o8l _1o9zidpf _vyfuvuon _vwz4kb7n _1szv15vq _1tly15vq _rzyw1osq _17jb1osq _1ksvoz0e _3se1x1jp _re2rglyw _1veoyfq0 _1kg81r31",
            "_jcxd1r8n _gq0g1onz _1trkwc43",
            o === s && "_18hbwc43",
            s === "transparent" && "_4fyi1j28",
            u && Sy[u],
          ]),
        },
      ),
    );
  });
const Ey = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: fl, default: fl }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  dv = Ps(Ey);
var vl;
function xy() {
  if (vl) return $n;
  ((vl = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0));
  var e = r(lt()),
    t = dv;
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
var pl;
function Cy() {
  if (pl) return Mn;
  ((pl = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.default = void 0));
  var e = n(lt()),
    t = n(ky()),
    r = n(xy());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(t.default, Object.assign({ LEGACY_fallbackIcon: r.default }, i));
  return ((a.Name = "ChevronLeftIconMigration"), (Mn.default = a), Mn);
}
var Py = Cy();
const Ry = er(Py);
var Nn = {},
  Fn = {},
  hl;
function Ay() {
  if (hl) return Fn;
  ((hl = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.default = void 0));
  var e = r(lt()),
    t = r(wi);
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<path fill="currentcolor" d="m6.03 1.47 6 6a.75.75 0 0 1 .052 1.004l-.052.056-6 6-1.06-1.06L10.44 8 4.97 2.53z"/>',
        },
        a,
      ),
    );
  return ((n.displayName = "ChevronRightIcon"), (Fn.default = n), Fn);
}
var Bn = {},
  gl;
function jy() {
  if (gl) return Bn;
  ((gl = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.default = void 0));
  var e = r(lt()),
    t = dv;
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
var bl;
function Iy() {
  if (bl) return Nn;
  ((bl = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.default = void 0));
  var e = n(lt()),
    t = n(Ay()),
    r = n(jy());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(t.default, Object.assign({ LEGACY_fallbackIcon: r.default }, i));
  return ((a.Name = "ChevronRightIconMigration"), (Nn.default = a), Nn);
}
var Dy = Iy();
const Ty = er(Dy);
var Ds = y.createContext("elevation.surface"),
  My = function () {
    return y.useContext(Ds);
  };
Ds.displayName = "SurfaceProvider";
var Ly = [
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
  $y = ["className"],
  Ny = {
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
  fv = {
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
  Fy = {
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
  By = {
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
  zy = {
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
  qy = {
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
  Oi = y.forwardRef(function (e, t) {
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
      S = ne(e, Ly);
    S.className;
    var x = ne(S, $y),
      j = y.createElement(
        n,
        Y(
          {
            style: w,
            ref: t,
            className: P([
              "_19itglyw _vchhusvi _r06hglyw",
              i && Ny[i],
              i && Uy(i) && fv[i],
              l && Fy[l],
              f && By[f],
              g && zy[g],
              m && qy[m],
              _,
            ]),
          },
          x,
          { "data-testid": O },
        ),
        a,
      );
    return i ? y.createElement(Ds.Provider, { value: i }, j) : j;
  });
function Uy(e) {
  return e in fv;
}
const Ro = () =>
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
  vv = (...e) => P(e);
function Vy() {
  return {
    css() {
      throw Ro();
    },
    cssMap() {
      throw Ro();
    },
    cx: vv,
    XCSSProp() {
      throw Ro();
    },
  };
}
var Gy = Vy(),
  Hy = Gy.cx,
  Wy = [
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
  yl = {
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
  _l = {
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
  Ky = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  Yy = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  Jy = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  Xy = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  Zy = { root: "_1e0c1txw _vchhusvi" },
  si = y.memo(
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
        v = ne(e, Wy);
      return y.createElement(
        n,
        Y({}, v, {
          role: a,
          className: P([
            Zy.root,
            s && _l[s],
            u && _l[u],
            s && yl[s],
            c && yl[c],
            i && Xy[i],
            f && Yy[f],
            o && Ky[o],
            p && Jy[p],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
si.displayName = "Flex";
var Qy = [
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
  rs = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  e_ = function (t) {
    var r = t.children;
    return y.createElement("span", { className: P([rs.separator]) }, r);
  },
  Ga = y.memo(
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
        b = ne(e, Qy),
        m = typeof f == "string" ? y.createElement(e_, null, f) : f,
        w = m
          ? y.Children.toArray(g)
              .filter(Boolean)
              .map(function (O, _) {
                return y.createElement(y.Fragment, { key: _ }, f && _ > 0 ? m : null, O);
              })
          : g;
      return y.createElement(
        si,
        Y({}, b, {
          as: r,
          role: v,
          alignItems: i,
          justifyContent: u || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: s ? "wrap" : void 0,
          xcss: Hy(c === "hug" && rs.hug, c === "fill" && rs.fill, p),
          testId: h,
          ref: t,
        }),
        w,
      );
    }),
  );
Ga.displayName = "Inline";
var t_ = "Invariant failed";
function r_(e, t) {
  if (!e) throw new Error(t_);
}
var pv = y.createContext(!1),
  n_ = function () {
    return y.useContext(pv);
  },
  a_ = pv.Provider,
  i_ = ["span", "p", "strong", "em"],
  o_ = function (t, r) {
    var n = My();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return ml.hasOwnProperty(n) ? ml[n] : "color.text";
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
  s_ = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  u_ = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  c_ = {
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
  ml = {
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
  l_ = y.forwardRef(function (e, t) {
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
    r_(i_.includes(n));
    var p = n_(),
      h = o_(a, p);
    !u && !p && (u = "medium");
    var v = y.createElement(
      n,
      {
        id: s,
        className: P([
          Dr.root,
          u && s_[u],
          h && c_[h],
          l && Dr.truncation,
          l === 1 && Dr.breakAll,
          i && Dr["textAlign.".concat(i)],
          c && u_[c],
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
    return p ? v : y.createElement(a_, { value: !0 }, v);
  });
function d_() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var f_ = ["as", "children", "isInset", "testId", "style", "xcss"],
  v_ = ["className"];
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
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var p_ = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      i = e.isInset,
      o = e.testId,
      s = e.style,
      u = e.xcss,
      c = ne(e, f_);
    c.className;
    var l = ne(c, v_);
    return y.createElement(
      n,
      Y({}, l, {
        ref: t,
        className: P([
          "_mizu194a _1ah31bk5 _ra3xnqa1 _128m1bk5 _1cvmnqa1 _4davt94y",
          i && "_1ah3115h _2mwq115h",
          u,
        ]),
        "data-testid": o,
        style: Ol(
          Ol({}, s),
          {},
          { "--_1203r2w": We("calc(0px - ".concat("var(--ds-border-width-outline, 2px)", ")")) },
        ),
      }),
      a,
    );
  }),
  h_ = [
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
  g_ = ["className"],
  kl = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  b_ = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      i = a === void 0 ? "button" : a,
      o = e.onClick,
      s = o === void 0 ? we : o,
      u = e.interactionName,
      c = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      f = e.testId,
      p = e.xcss,
      h = e.tabIndex,
      v = ne(e, h_),
      g = y.useContext(Is),
      b = y.useCallback(
        function (O, _) {
          (g && g.tracePress(u, O.timeStamp), s(O, _));
        },
        [s, g, u],
      ),
      m = ca({
        fn: b,
        action: "clicked",
        componentName: c || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "14.11.2",
        analyticsData: l,
        actionSubject: "button",
      });
    v.className;
    var w = ne(v, g_);
    return y.createElement(
      p_,
      Y({ as: "button", tabIndex: h ?? (d_() && !n ? 0 : void 0), style: d }, w, {
        type: i,
        onClick: m,
        disabled: n,
        xcss: vv(kl.root, n && kl.disabled, p),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  Ao = {},
  zn = {},
  Sl;
function hv() {
  if (Sl) return zn;
  ((Sl = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.bind = void 0));
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
var cr = {},
  El;
function y_() {
  if (El) return cr;
  El = 1;
  var e =
    (cr && cr.__assign) ||
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
  (Object.defineProperty(cr, "__esModule", { value: !0 }), (cr.bindAll = void 0));
  var t = hv();
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
  return ((cr.bindAll = a), cr);
}
var xl;
function __() {
  return (
    xl ||
      ((xl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = hv();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = y_();
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
var ki = __(),
  m_ = function () {
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
  gv = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: m_() });
  },
  w_ = gv(),
  O_ = y.createContext(gv()),
  k_ = function (e) {
    return e.value++;
  },
  S_ = function (e) {
    return e ? e.prefix : "";
  },
  E_ = function (e) {
    var t = e || w_,
      r = S_(t),
      n = k_(t),
      a = r + n,
      i = function (o) {
        return a + t.uid(o);
      };
    return { uid: a, gen: i };
  },
  x_ = function () {
    var e = y.useContext(O_),
      t = y.useState(function () {
        return E_(e);
      })[0];
    return t;
  },
  C_ = function () {
    var e = x_().gen;
    return e;
  },
  jo,
  Cl = (jo = k.useId) !== null && jo !== void 0 ? jo : void 0;
function P_() {
  if (Cl && Ot("platform-dst-react-18-use-id")) {
    var e = Cl();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return C_();
}
var bv = function (t) {
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
        className: P([
          "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
        ]),
      },
      r,
    );
  },
  R_ = function () {
    return 8;
  },
  A_ = {
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
  j_ = ["children"];
function I_(e) {
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
      u = ne(o, j_),
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
var D_ = I_(function () {
    return { mode: "light" };
  }),
  T_ = D_.useTheme;
function M_(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function L_(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var $_ = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(L_(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = M_(a);
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
  ui = "-moz-",
  ee = "-webkit-",
  yv = "comm",
  Ts = "rule",
  Ms = "decl",
  N_ = "@import",
  _v = "@keyframes",
  F_ = "@layer",
  B_ = Math.abs,
  Si = String.fromCharCode,
  z_ = Object.assign;
function q_(e, t) {
  return ye(e, 0) ^ 45
    ? (((((((t << 2) ^ ye(e, 0)) << 2) ^ ye(e, 1)) << 2) ^ ye(e, 2)) << 2) ^ ye(e, 3)
    : 0;
}
function mv(e) {
  return e.trim();
}
function U_(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function te(e, t, r) {
  return e.replace(t, r);
}
function ns(e, t) {
  return e.indexOf(t);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function da(e, t, r) {
  return e.slice(t, r);
}
function yt(e) {
  return e.length;
}
function Ls(e) {
  return e.length;
}
function Fa(e, t) {
  return (t.push(e), e);
}
function V_(e, t) {
  return e.map(t).join("");
}
var Ei = 1,
  qr = 1,
  wv = 0,
  je = 0,
  pe = 0,
  Kr = "";
function xi(e, t, r, n, a, i, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: i,
    line: Ei,
    column: qr,
    length: o,
    return: "",
  };
}
function qn(e, t) {
  return z_(xi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function G_() {
  return pe;
}
function H_() {
  return ((pe = je > 0 ? ye(Kr, --je) : 0), qr--, pe === 10 && ((qr = 1), Ei--), pe);
}
function Ne() {
  return ((pe = je < wv ? ye(Kr, je++) : 0), qr++, pe === 10 && ((qr = 1), Ei++), pe);
}
function kt() {
  return ye(Kr, je);
}
function Ha() {
  return je;
}
function wa(e, t) {
  return da(Kr, e, t);
}
function fa(e) {
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
function Ov(e) {
  return ((Ei = qr = 1), (wv = yt((Kr = e))), (je = 0), []);
}
function kv(e) {
  return ((Kr = ""), e);
}
function Wa(e) {
  return mv(wa(je - 1, as(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function W_(e) {
  for (; (pe = kt()) && pe < 33; ) Ne();
  return fa(e) > 2 || fa(pe) > 3 ? "" : " ";
}
function K_(e, t) {
  for (; --t && Ne() && !(pe < 48 || pe > 102 || (pe > 57 && pe < 65) || (pe > 70 && pe < 97)); );
  return wa(e, Ha() + (t < 6 && kt() == 32 && Ne() == 32));
}
function as(e) {
  for (; Ne(); )
    switch (pe) {
      case e:
        return je;
      case 34:
      case 39:
        e !== 34 && e !== 39 && as(pe);
        break;
      case 40:
        e === 41 && as(e);
        break;
      case 92:
        Ne();
        break;
    }
  return je;
}
function Y_(e, t) {
  for (; Ne() && e + pe !== 57; ) if (e + pe === 84 && kt() === 47) break;
  return "/*" + wa(t, je - 1) + "*" + Si(e === 47 ? e : Ne());
}
function J_(e) {
  for (; !fa(kt()); ) Ne();
  return wa(e, je);
}
function X_(e) {
  return kv(Ka("", null, null, null, [""], (e = Ov(e)), 0, [0], e));
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
      x = w;
    g;

  )
    switch (((h = m), (m = Ne()))) {
      case 40:
        if (h != 108 && ye(x, d - 1) == 58) {
          ns((x += te(Wa(m), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Wa(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += W_(h);
        break;
      case 92:
        x += K_(Ha() - 1, 7);
        continue;
      case 47:
        switch (kt()) {
          case 42:
          case 47:
            Fa(Z_(Y_(Ne(), Ha()), t, r), u);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * v:
        s[c++] = yt(x) * b;
      case 125 * v:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            (b == -1 && (x = te(x, /\f/g, "")),
              p > 0 &&
                yt(x) - d &&
                Fa(p > 32 ? Rl(x + ";", n, r, d - 1) : Rl(te(x, " ", "") + ";", n, r, d - 2), u));
            break;
          case 59:
            x += ";";
          default:
            if ((Fa((S = Pl(x, t, r, c, l, a, s, w, (O = []), (_ = []), d)), i), m === 123))
              if (l === 0) Ka(x, t, S, S, O, i, d, s, _);
              else
                switch (f === 99 && ye(x, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ka(
                      e,
                      S,
                      S,
                      n && Fa(Pl(e, S, S, 0, 0, a, s, w, a, (O = []), d), _),
                      a,
                      _,
                      d,
                      s,
                      n ? O : _,
                    );
                    break;
                  default:
                    Ka(x, S, S, S, [""], _, 0, s, _);
                }
        }
        ((c = l = p = 0), (v = b = 1), (w = x = ""), (d = o));
        break;
      case 58:
        ((d = 1 + yt(x)), (p = h));
      default:
        if (v < 1) {
          if (m == 123) --v;
          else if (m == 125 && v++ == 0 && H_() == 125) continue;
        }
        switch (((x += Si(m)), m * v)) {
          case 38:
            b = l > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            ((s[c++] = (yt(x) - 1) * b), (b = 1));
            break;
          case 64:
            (kt() === 45 && (x += Wa(Ne())), (f = kt()), (l = d = yt((w = x += J_(Ha())))), m++);
            break;
          case 45:
            h === 45 && yt(x) == 2 && (v = 0);
        }
    }
  return i;
}
function Pl(e, t, r, n, a, i, o, s, u, c, l) {
  for (var d = a - 1, f = a === 0 ? i : [""], p = Ls(f), h = 0, v = 0, g = 0; h < n; ++h)
    for (var b = 0, m = da(e, d + 1, (d = B_((v = o[h])))), w = e; b < p; ++b)
      (w = mv(v > 0 ? f[b] + " " + m : te(m, /&\f/g, f[b]))) && (u[g++] = w);
  return xi(e, t, r, a === 0 ? Ts : s, u, c, l);
}
function Z_(e, t, r) {
  return xi(e, t, r, yv, Si(G_()), da(e, 2, -2), 0);
}
function Rl(e, t, r, n) {
  return xi(e, t, r, Ms, da(e, 0, n), da(e, n + 1, -1), n);
}
function Br(e, t) {
  for (var r = "", n = Ls(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function Q_(e, t, r, n) {
  switch (e.type) {
    case F_:
      if (e.children.length) break;
    case N_:
    case Ms:
      return (e.return = e.return || e.value);
    case yv:
      return "";
    case _v:
      return (e.return = e.value + "{" + Br(e.children, n) + "}");
    case Ts:
      e.value = e.props.join(",");
  }
  return yt((r = Br(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function em(e) {
  var t = Ls(e);
  return function (r, n, a, i) {
    for (var o = "", s = 0; s < t; s++) o += e[s](r, n, a, i) || "";
    return o;
  };
}
function tm(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function rm(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var nm = function (t, r, n) {
    for (var a = 0, i = 0; (a = i), (i = kt()), a === 38 && i === 12 && (r[n] = 1), !fa(i); ) Ne();
    return wa(t, je);
  },
  am = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (fa(a)) {
        case 0:
          (a === 38 && kt() === 12 && (r[n] = 1), (t[n] += nm(je - 1, r, n)));
          break;
        case 2:
          t[n] += Wa(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = kt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Si(a);
      }
    while ((a = Ne()));
    return t;
  },
  im = function (t, r) {
    return kv(am(Ov(t), r));
  },
  Al = new WeakMap(),
  om = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Al.get(n)) && !a) {
        Al.set(t, !0);
        for (var i = [], o = im(r, i), s = n.props, u = 0, c = 0; u < o.length; u++)
          for (var l = 0; l < s.length; l++, c++)
            t.props[c] = i[u] ? o[u].replace(/&\f/g, s[l]) : s[l] + " " + o[u];
      }
    }
  },
  sm = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Sv(e, t) {
  switch (q_(e, t)) {
    case 5103:
      return ee + "print-" + e + e;
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
      return ee + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ee + e + ui + e + me + e + e;
    case 6828:
    case 4268:
      return ee + e + me + e + e;
    case 6165:
      return ee + e + me + "flex-" + e + e;
    case 5187:
      return ee + e + te(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + me + "flex-$1$2") + e;
    case 5443:
      return ee + e + me + "flex-item-" + te(e, /flex-|-self/, "") + e;
    case 4675:
      return ee + e + me + "flex-line-pack" + te(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ee + e + me + te(e, "shrink", "negative") + e;
    case 5292:
      return ee + e + me + te(e, "basis", "preferred-size") + e;
    case 6060:
      return ee + "box-" + te(e, "-grow", "") + ee + e + me + te(e, "grow", "positive") + e;
    case 4554:
      return ee + te(e, /([^-])(transform)/g, "$1" + ee + "$2") + e;
    case 6187:
      return te(te(te(e, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return te(e, /(image-set\([^]*)/, ee + "$1$`$1");
    case 4968:
      return (
        te(
          te(e, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + me + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        ee +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return te(e, /(.+)-inline(.+)/, ee + "$1$2") + e;
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
        switch (ye(e, t + 1)) {
          case 109:
            if (ye(e, t + 4) !== 45) break;
          case 102:
            return (
              te(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + ee + "$2-$3$1" + ui + (ye(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~ns(e, "stretch") ? Sv(te(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ye(e, t + 1) !== 115) break;
    case 6444:
      switch (ye(e, yt(e) - 3 - (~ns(e, "!important") && 10))) {
        case 107:
          return te(e, ":", ":" + ee) + e;
        case 101:
          return (
            te(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                ee +
                (ye(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ee +
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
          return ee + e + me + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ee + e + me + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ee + e + me + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ee + e + me + e + e;
  }
  return e;
}
var um = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Ms:
          t.return = Sv(t.value, t.length);
          break;
        case _v:
          return Br([qn(t, { value: te(t.value, "@", "@" + ee) })], a);
        case Ts:
          if (t.length)
            return V_(t.props, function (i) {
              switch (U_(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Br([qn(t, { props: [te(i, /:(read-\w+)/, ":" + ui + "$1")] })], a);
                case "::placeholder":
                  return Br(
                    [
                      qn(t, { props: [te(i, /:(plac\w+)/, ":" + ee + "input-$1")] }),
                      qn(t, { props: [te(i, /:(plac\w+)/, ":" + ui + "$1")] }),
                      qn(t, { props: [te(i, /:(plac\w+)/, me + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  cm = [um],
  lm = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (v) {
        var g = v.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || cm,
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
      c = [om, sm];
    {
      var l,
        d = [
          Q_,
          tm(function (v) {
            l.insert(v);
          }),
        ],
        f = em(c.concat(a, d)),
        p = function (g) {
          return Br(X_(g), f);
        };
      u = function (g, b, m, w) {
        ((l = m), p(g ? g + "{" + b.styles + "}" : b.styles), w && (h.inserted[b.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new $_({
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
  re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jl;
function dm() {
  if (jl) return re;
  jl = 1;
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
    (re.AsyncMode = u),
    (re.ConcurrentMode = c),
    (re.ContextConsumer = s),
    (re.ContextProvider = o),
    (re.Element = t),
    (re.ForwardRef = l),
    (re.Fragment = n),
    (re.Lazy = h),
    (re.Memo = p),
    (re.Portal = r),
    (re.Profiler = i),
    (re.StrictMode = a),
    (re.Suspense = d),
    (re.isAsyncMode = function (_) {
      return O(_) || w(_) === u;
    }),
    (re.isConcurrentMode = O),
    (re.isContextConsumer = function (_) {
      return w(_) === s;
    }),
    (re.isContextProvider = function (_) {
      return w(_) === o;
    }),
    (re.isElement = function (_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }),
    (re.isForwardRef = function (_) {
      return w(_) === l;
    }),
    (re.isFragment = function (_) {
      return w(_) === n;
    }),
    (re.isLazy = function (_) {
      return w(_) === h;
    }),
    (re.isMemo = function (_) {
      return w(_) === p;
    }),
    (re.isPortal = function (_) {
      return w(_) === r;
    }),
    (re.isProfiler = function (_) {
      return w(_) === i;
    }),
    (re.isStrictMode = function (_) {
      return w(_) === a;
    }),
    (re.isSuspense = function (_) {
      return w(_) === d;
    }),
    (re.isValidElementType = function (_) {
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
    (re.typeOf = w),
    re
  );
}
var Il;
function fm() {
  return (Il || ((Il = 1), (Io.exports = dm())), Io.exports);
}
var Do, Dl;
function vm() {
  if (Dl) return Do;
  Dl = 1;
  var e = fm(),
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
          var x = l(v, S);
          try {
            s(h, S, x);
          } catch {}
        }
      }
    }
    return h;
  }
  return ((Do = p), Do);
}
vm();
var pm = !0;
function Ev(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var $s = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || pm === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  xv = function (t, r, n) {
    $s(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do (t.insert(r === i ? "." + a : "", i, t.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function hm(e) {
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
var gm = {
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
  bm = /[A-Z]|^ms/g,
  ym = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Cv = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Tl = function (t) {
    return t != null && typeof t != "boolean";
  },
  To = rm(function (e) {
    return Cv(e) ? e : e.replace(bm, "-$&").toLowerCase();
  }),
  Ml = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(ym, function (n, a, i) {
            return ((_t = { name: a, styles: i, next: _t }), a);
          });
    }
    return gm[t] !== 1 && !Cv(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function va(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1) return ((_t = { name: a.name, styles: a.styles, next: _t }), a.name);
      var i = r;
      if (i.styles !== void 0) {
        var o = i.next;
        if (o !== void 0)
          for (; o !== void 0; )
            ((_t = { name: o.name, styles: o.styles, next: _t }), (o = o.next));
        var s = i.styles + ";";
        return s;
      }
      return _m(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var u = _t,
          c = r(e);
        return ((_t = u), va(e, t, c));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function _m(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += va(e, t, r[a]) + ";";
  else
    for (var i in r) {
      var o = r[i];
      if (typeof o != "object") {
        var s = o;
        t != null && t[s] !== void 0
          ? (n += i + "{" + t[s] + "}")
          : Tl(s) && (n += To(i) + ":" + Ml(i, s) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var u = 0; u < o.length; u++) Tl(o[u]) && (n += To(i) + ":" + Ml(i, o[u]) + ";");
      else {
        var c = va(e, t, o);
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
var Ll = /label:\s*([^\s;{]+)\s*(;|$)/g,
  _t;
function Ns(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  _t = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) ((n = !1), (a += va(r, t, i)));
  else {
    var o = i;
    a += o[0];
  }
  for (var s = 1; s < e.length; s++)
    if (((a += va(r, t, e[s])), n)) {
      var u = i;
      a += u[s];
    }
  Ll.lastIndex = 0;
  for (var c = "", l; (l = Ll.exec(a)) !== null; ) c += "-" + l[1];
  var d = hm(a) + c;
  return { name: d, styles: a, next: _t };
}
var mm = function (t) {
    return t();
  },
  wm = lu.useInsertionEffect ? lu.useInsertionEffect : !1,
  Pv = wm || mm,
  Rv = y.createContext(typeof HTMLElement < "u" ? lm({ key: "css" }) : null);
Rv.Provider;
var Av = function (t) {
    return y.forwardRef(function (r, n) {
      var a = y.useContext(Rv);
      return t(r, a, n);
    });
  },
  jv = y.createContext({}),
  Fs = {}.hasOwnProperty,
  is = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Om = function (t, r) {
    var n = {};
    for (var a in r) Fs.call(r, a) && (n[a] = r[a]);
    return ((n[is] = t), n);
  },
  km = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      $s(r, n, a),
      Pv(function () {
        return xv(r, n, a);
      }),
      null
    );
  },
  Sm = Av(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[is],
      i = [n],
      o = "";
    typeof e.className == "string"
      ? (o = Ev(t.registered, i, e.className))
      : e.className != null && (o = e.className + " ");
    var s = Ns(i, void 0, y.useContext(jv));
    o += t.key + "-" + s.name;
    var u = {};
    for (var c in e) Fs.call(e, c) && c !== "css" && c !== is && (u[c] = e[c]);
    return (
      (u.className = o),
      r && (u.ref = r),
      y.createElement(
        y.Fragment,
        null,
        y.createElement(km, { cache: t, serialized: s, isStringTag: typeof a == "string" }),
        y.createElement(a, u),
      )
    );
  }),
  Em = Sm,
  Ft = function (t, r) {
    var n = arguments;
    if (r == null || !Fs.call(r, "css")) return y.createElement.apply(void 0, n);
    var a = n.length,
      i = new Array(a);
    ((i[0] = Em), (i[1] = Om(t, r)));
    for (var o = 2; o < a; o++) i[o] = n[o];
    return y.createElement.apply(null, i);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Ft || (Ft = {}));
function jt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Ns(t);
}
var xm = function e(t) {
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
function Cm(e, t, r) {
  var n = [],
    a = Ev(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var Pm = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Pv(function () {
        for (var a = 0; a < n.length; a++) xv(r, n[a], !1);
      }),
      null
    );
  },
  Rm = Av(function (e, t) {
    var r = [],
      n = function () {
        for (var u = arguments.length, c = new Array(u), l = 0; l < u; l++) c[l] = arguments[l];
        var d = Ns(c, t.registered);
        return (r.push(d), $s(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var u = arguments.length, c = new Array(u), l = 0; l < u; l++) c[l] = arguments[l];
        return Cm(t.registered, n, xm(c));
      },
      i = { css: n, cx: a, theme: y.useContext(jv) },
      o = e.children(i);
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(Pm, { cache: t, serializedArr: r }),
      o,
    );
  });
function Am(e, t) {
  var r = y.useRef(!0);
  y.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var os = 2,
  ss = jt({
    outline: "".concat(os, "px solid ", "var(--ds-border-focused, #2684FF)"),
    outlineOffset: os,
  }),
  us = jt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -os,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-outline, 2px)",
  }),
  jm = jt({
    "&:focus": ss,
    "&:focus-visible": ss,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "1px solid" },
    },
  }),
  Im = jt({
    "&:focus": us,
    "&:focus-visible": us,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "1px solid", outlineOffset: "-1px" },
    },
  }),
  Iv = y.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? us : ss,
      i = r ? Im : jm,
      o = typeof n > "u" ? i : n === "on" && a;
    return Ft(Rm, null, function (s) {
      var u = s.css,
        c = s.cx;
      return y.Children.only(
        o ? y.cloneElement(t, { className: c([u(o), t.props.className]) }) : t,
      );
    });
  });
Iv.displayName = "FocusRing";
function $t(e) {
  (e.preventDefault(), e.stopPropagation());
}
var Dm = 9;
function $l(e) {
  e.keyCode !== Dm && $t(e);
}
var Tm = {
    onMouseDownCapture: $t,
    onMouseUpCapture: $t,
    onKeyDownCapture: $l,
    onKeyUpCapture: $l,
    onTouchStartCapture: $t,
    onTouchEndCapture: $t,
    onPointerDownCapture: $t,
    onPointerUpCapture: $t,
    onClickCapture: $t,
    onClick: $t,
  },
  Mm = {};
function Lm(e) {
  var t = e.isInteractive;
  return t ? Mm : Tm;
}
var Nl = "rgba(179, 212, 255, 0.6)",
  Fl = {
    background: {
      default: {
        default: {
          light: "var(--ds-background-neutral, ".concat(In, ")"),
          dark: "var(--ds-background-neutral, ".concat(Dn, ")"),
        },
        hover: {
          light: "var(--ds-background-neutral-hovered, ".concat(ts, ")"),
          dark: "var(--ds-background-neutral-hovered, ".concat(Xc, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-pressed, ".concat(Nl, ")"),
          dark: "var(--ds-background-neutral-pressed, ".concat(Jn, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(In, ")"),
          dark: "var(--ds-background-disabled, ".concat(Dn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-background-brand-bold, ".concat(jr, ")"),
          dark: "var(--ds-background-brand-bold, ".concat(oi, ")"),
        },
        hover: {
          light: "var(--ds-background-brand-bold-hovered, ".concat(Kc, ")"),
          dark: "var(--ds-background-brand-bold-hovered, ".concat(Jn, ")"),
        },
        active: {
          light: "var(--ds-background-brand-bold-pressed, ".concat(Yc, ")"),
          dark: "var(--ds-background-brand-bold-pressed, ".concat(Wc, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(In, ")"),
          dark: "var(--ds-background-disabled, ".concat(Dn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
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
          light: "var(--ds-background-warning-bold-pressed, ".concat(Ar, ")"),
          dark: "var(--ds-background-warning-bold-pressed, ".concat(Ar, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(In, ")"),
          dark: "var(--ds-background-disabled, ".concat(Dn, ")"),
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
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Ce, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Ce, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        hover: {
          light: "var(--ds-background-neutral-subtle-hovered, ".concat(ts, ")"),
          dark: "var(--ds-background-neutral-subtle-hovered, ".concat(Xc, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-subtle-pressed, ".concat(Nl, ")"),
          dark: "var(--ds-background-neutral-subtle-pressed, ".concat(Jn, ")"),
        },
        disabled: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Ce, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Ce, ")"),
        },
      },
    },
    color: {
      default: {
        default: {
          light: "var(--ds-text, ".concat(la, ")"),
          dark: "var(--ds-text, ".concat(at, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(jr, ")"),
          dark: "var(--ds-text, ".concat(jr, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Tn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(at, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(at, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Nt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Tn, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Tn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(at, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(at, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-text-warning-inverse, ".concat(lr, ")"),
          dark: "var(--ds-text-warning-inverse, ".concat(lr, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Tn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(lr, ")"),
          dark: "var(--ds-text-selected, ".concat(lr, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(lr, ")"),
          dark: "var(--ds-text-selected, ".concat(lr, ")"),
        },
      },
      danger: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Nt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Nt, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Tn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Nt, ")"),
          dark: "var(--ds-text-selected, ".concat(Nt, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Nt, ")"),
          dark: "var(--ds-text-selected, ".concat(Nt, ")"),
        },
      },
      link: {
        default: {
          light: "var(--ds-link, ".concat(jr, ")"),
          dark: "var(--ds-link, ".concat(oi, ")"),
        },
        hover: {
          light: "var(--ds-link, ".concat(Kc, ")"),
          dark: "var(--ds-link, ".concat(Jn, ")"),
        },
        active: {
          light: "var(--ds-link-pressed, ".concat(Yc, ")"),
          dark: "var(--ds-link-pressed, ".concat(Wc, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Po, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(He, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(He, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-text, ".concat(la, ")"),
          dark: "var(--ds-text, ".concat(at, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(jr, ")"),
          dark: "var(--ds-text, ".concat(jr, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Po, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(at, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(at, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-text-subtle, ".concat(Ib, ")"),
          dark: "var(--ds-text-subtle, ".concat(at, ")"),
        },
        hover: {
          light: "var(--ds-text-subtle, ".concat(jb, ")"),
          dark: "var(--ds-text-subtle, ".concat(tv, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Db, ")"),
          dark: "var(--ds-text, ".concat(Tb, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Po, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(at, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(at, ")"),
        },
      },
    },
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
function ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Bl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Jt = R_(),
  Mo = ["default", "primary", "danger", "warning"],
  cs = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  $m = { default: cs.default, compact: cs.compact, none: "inherit" },
  Nm = {
    default: "0 ".concat(Jt + Jt / 4, "px"),
    compact: "0 ".concat(Jt + Jt / 4, "px"),
    none: "0",
  },
  Fm = { compact: "0 ".concat(Jt / 4, "px"), default: "0 ".concat(Jt / 4, "px"), none: "0" },
  Bm = { default: "middle", compact: "middle", none: "baseline" },
  Dv = { content: "0 ".concat(Jt / 4, "px"), icon: "0 ".concat(Jt / 4, "px") },
  Tv = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  zm = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #172B4D)",
    "&::after": ie(ie({}, Tv), {}, { content: '""', borderColor: "var(--ds-border, #091E4224)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #091E4224)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #091E424F)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  qm = {
    background: "var(--ds-background-brand-bold, #0C66E4)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #0055CC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #09326C)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #0C66E4)",
    },
  },
  Um = {
    background: "transparent",
    color: "var(--ds-link, #0C66E4)",
    "&:hover": { color: "var(--ds-link, #0C66E4)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #0055CC)", textDecoration: "underline" },
  },
  Vm = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #091E420F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #091E4224)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  Gm = {
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
  Hm = {
    background: "var(--ds-background-warning-bold, #F5CD47)",
    color: "var(--ds-text-warning-inverse, #172B4D)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #E2B203)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #CF9F02)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #F5CD47)",
    },
  },
  Wm = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #5D1F1A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  Km = {
    background: "var(--ds-background-selected, #E9F2FF)",
    color: "var(--ds-text-selected, #0C66E4)",
    "&:not([disabled])::after": ie(
      ie({}, Tv),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #0C66E4)" },
    ),
  },
  zl = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function ql(e) {
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
    background: ql({ group: Fl.background[t], key: r, mode: n }),
    color: "".concat(ql({ group: Fl.color[t], key: r, mode: n }), " !important"),
  };
}
function Ym(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.mode,
    a = e.isSelected,
    i = e.shouldFitContainer,
    o = e.isOnlySingleIcon,
    s = Tr({ appearance: t, key: a ? "selected" : "default", mode: n });
  return ie(
    ie(
      ie(
        ie(
          {
            alignItems: "baseline",
            borderWidth: 0,
            borderRadius: "var(--ds-border-radius, 3px)",
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
          !Ot("platform-component-visual-refresh") && s,
        ),
        {},
        {
          cursor: "pointer",
          height: cs[r],
          lineHeight: $m[r],
          padding: o ? Fm[r] : Nm[r],
          verticalAlign: Bm[r],
          width: i ? "100%" : "auto",
          justifyContent: "center",
        },
        !Ot("platform-component-visual-refresh") &&
          ie(
            ie(
              {
                "&:visited": ie({}, s),
                "&:hover": ie(
                  ie({}, Tr({ appearance: t, key: a ? "selected" : "hover", mode: n })),
                  {},
                  {
                    textDecoration:
                      !a && (t === "link" || t === "subtle-link") ? "underline" : "inherit",
                    transitionDuration: "0s, 0.15s",
                  },
                ),
                "&:active": ie(
                  ie({}, Tr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                '&[data-firefox-is-active="true"]': ie(
                  ie({}, Tr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                "&[disabled]": ie(
                  ie({}, Tr({ appearance: t, key: "disabled", mode: n })),
                  {},
                  { cursor: "not-allowed", textDecoration: "none" },
                ),
              },
              zl,
            ),
            {},
            {
              '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active':
                ie({}, Tr({ appearance: t, key: a ? "selected" : "default", mode: n })),
            },
          ),
      ),
      Ot("platform-component-visual-refresh") &&
        (a
          ? Km
          : ie(
              ie(
                ie(
                  ie(
                    ie(
                      ie(
                        ie(ie({}, t === "default" && zm), t === "primary" && qm),
                        t === "link" && Um,
                      ),
                      t === "subtle" && Vm,
                    ),
                    t === "subtle-link" && Gm,
                  ),
                  t === "warning" && Hm,
                ),
                t === "danger" && Wm,
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
              zl,
            )),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function Ul(e) {
  var t = e.spacing;
  return jt({
    display: "flex",
    margin: t === "none" ? 0 : Dv.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function Jm(e) {
  var t = e.spacing;
  return jt({
    margin: t === "none" ? 0 : Dv.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function Xm(e) {
  var t = e.hasOverlay;
  return jt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var Zm = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Bs = function (t) {
    return t && y.isValidElement(t) && t.type === bv;
  },
  Qm = [
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
  e0 = { "> *": { pointerEvents: "none" } },
  t0 = jt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  r0 = jt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  Vl = function (t, r) {
    return !t || Bs(t) ? null : r;
  },
  n0 = function (t, r) {
    return Bs(t) ? t : t ? Ft("span", { css: r }, t) : null;
  },
  a0 = k.forwardRef(function (t, r) {
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
      x = S === void 0 ? we : S,
      j = t.onFocus,
      T = t.onMouseDown,
      C = T === void 0 ? we : T,
      D = t.overlay;
    t.shouldFitContainer;
    var B = t.spacing,
      F = B === void 0 ? "default" : B,
      U = t.tabIndex,
      Q = U === void 0 ? 0 : U,
      z = t.type,
      V = z === void 0 ? (d ? void 0 : "button") : z,
      J = t.testId,
      A = ne(t, Qm),
      q = y.useRef(),
      he = y.useCallback(
        function (ue) {
          if (((q.current = ue), r != null)) {
            if (typeof r == "function") {
              r(ue);
              return;
            }
            r.current = ue;
          }
        },
        [q, r],
      );
    Am(q, s);
    var W = y.useContext(Is),
      be = y.useCallback(
        function (ue, vt) {
          (W && W.tracePress(g, ue.timeStamp), x(ue, vt));
        },
        [x, W, g],
      ),
      de = ca({
        fn: be,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "23.4.0",
        analyticsData: n,
      }),
      fe = y.useCallback(
        function (ue) {
          (ue.preventDefault(), C(ue));
        },
        [C],
      );
    y.useEffect(
      function () {
        var ue = q.current;
        m && ue && ue === document.activeElement && ue.blur();
      },
      [m],
    );
    var ge = !!D,
      ze = jt(Xm({ hasOverlay: ge })),
      _e = !m && !ge,
      tt = {};
    return (
      (O || m || i === "warning") &&
        (tt = {
          "[data-theme] & circle": {
            stroke: "".concat(
              O || m
                ? "var(--ds-icon-subtle, ".concat(la, ")")
                : "var(--ds-icon-warning-inverse, ".concat(la, ")"),
              " !important",
            ),
          },
        }),
      Ft(
        Iv,
        null,
        Ft(
          p,
          Y(
            {},
            A,
            {
              ref: he,
              className: l,
              css: [u, _e ? null : e0],
              "data-has-overlay": ge ? !0 : void 0,
              "data-testid": J,
              disabled: m,
              href: _e ? d : void 0,
              onBlur: _,
              onClick: de,
              onFocus: j,
              onMouseDown: fe,
              tabIndex: m ? -1 : Q,
              type: V,
            },
            Lm({ isInteractive: _e }),
          ),
          v ? Ft("span", { css: [ze, Ul({ spacing: F }), Vl(c, t0)] }, v) : null,
          n0(c, [ze, Jm({ spacing: F })]),
          h ? Ft("span", { css: [ze, Ul({ spacing: F }), Vl(c, r0)] }, h) : null,
          D ? Ft("span", { css: [Zm, tt] }, D) : null,
        ),
      )
    );
  });
function i0(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Bs(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var o0 = [
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
  Gl = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  zs = k.memo(
    k.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        i = t.children,
        o = t.iconBefore,
        s = t.iconAfter,
        u = t.isSelected,
        c = u === void 0 ? !1 : u,
        l = t.onMouseDown,
        d = l === void 0 ? we : l,
        f = t.onMouseUp,
        p = f === void 0 ? we : f,
        h = t.shouldFitContainer,
        v = h === void 0 ? !1 : h,
        g = t.spacing,
        b = g === void 0 ? "default" : g,
        m = ne(t, o0),
        w = T_(),
        O = w.mode,
        _ = i0({ children: i, iconBefore: o, iconAfter: s }),
        S = y.useState(!1),
        x = Z(S, 2),
        j = x[0],
        T = x[1],
        C = y.useCallback(
          function (F) {
            (d(F), Gl && T(!0));
          },
          [d, T],
        ),
        D = y.useCallback(
          function (F) {
            (p(F), Gl && T(!1));
          },
          [p, T],
        ),
        B = y.useMemo(
          function () {
            return Ym({
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
        a0,
        Y({}, m, {
          ref: r,
          appearance: a,
          buttonCss: B,
          children: i,
          "data-firefox-is-active": j ? !0 : void 0,
          iconAfter: s,
          iconBefore: o,
          isSelected: c,
          onMouseDown: C,
          onMouseUp: D,
          spacing: b,
        }),
      );
    }),
  );
zs.displayName = "Button";
function Hl(e) {
  return k.createElement(zs, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function s0(e) {
  return k.createElement(zs, Y({}, e, { appearance: "subtle" }));
}
var u0 = { container: "_1e0c1txw _kqswh2mm" };
function c0(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return k.createElement(
    Oi,
    { as: "li", testId: r, key: t, xcss: u0.container, paddingInline: "space.100" },
    k.createElement(
      l_,
      { testId: r && "".concat(r, "-text") },
      k.createElement(bv, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var Wl = {},
  Kl =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function l0(e, t) {
  return !!(e === t || (Kl(e) && Kl(t)));
}
function d0(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!l0(e[r], t[r])) return !1;
  return !0;
}
function f0(e, t) {
  t === void 0 && (t = d0);
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
var v0 = function (t, r, n, a) {
  var i = n.max,
    o = n.ellipsis,
    s = n.transform,
    u = t.length,
    c = u > i,
    l = c && i - 4 < r,
    d = c && r < u - i + 3,
    f = f0(function () {
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
      Me(f(0, 1)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: u - p })],
      Me(f(u - p)),
    );
  }
  if (!l && d) {
    var h = i - 2;
    return [].concat(
      Me(f(0, h)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: h + 1, to: u - 1 })],
      Me(f(u - 1)),
    );
  }
  var v = i - 4;
  return [].concat(
    Me(f(0, 1)),
    [
      o({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(v / 2),
      }),
    ],
    Me(f(r - Math.floor(v / 2), r + v - 1)),
    [o({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: u - 1 })],
    Me(f(u - 1)),
  );
};
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
function p0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Yl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ls = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  h0 = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.9",
  };
function Jl(e) {
  var t = e.chevronDirection,
    r = t === "left" ? Ry : Ty;
  return k.createElement(
    Oi,
    { as: "span", xcss: ls.navigatorIconWrapper },
    k.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function g0(e, t) {
  var r = e.components,
    n = r === void 0 ? Wl : r,
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
    g = v === void 0 ? Wl : v,
    b = e.max,
    m = b === void 0 ? 7 : b,
    w = e.onChange,
    O = w === void 0 ? we : w,
    _ = e.pages,
    S = e.getPageLabel,
    x = e.renderEllipsis,
    j = x === void 0 ? c0 : x,
    T = e.analyticsContext,
    C = e.testId,
    D = e.isDisabled,
    B = gy(o, function () {
      return i || 0;
    }),
    F = Z(B, 2),
    U = F[0],
    Q = F[1],
    z = ca(
      p0(
        {
          fn: function (A, q) {
            var he = A.event,
              W = A.selectedPageIndex;
            (o === void 0 && Q(W), O && O(he, _[W], q));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: T,
        },
        h0,
      ),
    ),
    V = function (A, q, he) {
      var W = _[U],
        be = "".concat(l, " ").concat(S ? S(A, q) : A),
        de = A === W;
      return k.createElement(
        Ga,
        { as: "li", xcss: ls.paginationMenuItem, key: "page-".concat(S ? S(A, q) : q) },
        k.createElement(
          s0,
          {
            component: n.Page,
            onClick: function (ge) {
              return z({ event: ge, selectedPageIndex: q });
            },
            "aria-current": de ? "page" : void 0,
            "aria-label": be,
            isSelected: de,
            isDisabled: D,
            page: A,
            testId:
              he &&
              ""
                .concat(he, "--")
                .concat(de ? "current-" : "", "page-")
                .concat(q),
          },
          S ? S(A, q) : A,
        ),
      );
    };
  return k.createElement(
    Oi,
    { testId: C, style: g, ref: t, "aria-label": u, as: "nav" },
    k.createElement(
      Ga,
      { space: "space.0", alignBlock: "center" },
      k.createElement(Hl, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (A) {
          return z({ event: A, selectedPageIndex: U - 1 });
        },
        isDisabled: D || U === 0,
        iconBefore: k.createElement(Jl, { chevronDirection: "left" }),
        "aria-label": f,
        testId: C && "".concat(C, "--left-navigator"),
      }),
      k.createElement(
        Ga,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: ls.paginationMenu },
        v0(_, U, { max: m, ellipsis: j, transform: V }, C),
      ),
      k.createElement(Hl, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (A) {
          return z({ event: A, selectedPageIndex: U + 1 });
        },
        isDisabled: D || U === _.length - 1,
        iconBefore: k.createElement(Jl, { chevronDirection: "right" }),
        "aria-label": h,
        testId: C && "".concat(C, "--right-navigator"),
      }),
    ),
  );
}
var b0 = y.memo(y.forwardRef(g0));
function y0(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, Mv() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function Mv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Mv = function () {
    return !!e;
  })();
}
var _0 = (function (e) {
    function t() {
      var r;
      ce(this, t);
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
      return (
        (r = y0(this, t, [].concat(a))),
        E(r, "onChange", function (o, s, u) {
          r.props.onChange(s, u);
        }),
        r
      );
    }
    return (
      De(t, e),
      le(t, [
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
              l = Me(Array(a)).map(function (f, p) {
                return p + 1;
              }),
              d = o - 1;
            return k.createElement(b0, {
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
  m0 = ["isRanking", "testId"],
  w0 = [
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
function Un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Xl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Zl = "--local-dynamic-table-text-color",
  O0 = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = ne(t, m0);
    return y.createElement(
      "thead",
      Y({ "data-testid": n }, a, { className: P(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  Lv = y.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children,
      a = e.isSortable,
      i = e.sortOrder,
      o = e.isFixedSize,
      s = e.shouldTruncate,
      u = e.onClick,
      c = e.style,
      l = e.testId,
      d = ne(e, w0),
      f = Un(
        Un(Un({}, c), r && nv({ width: r })),
        {},
        E({}, Zl, "var(--ds-text-subtlest, ".concat(Jc, ")")),
      ),
      p = i === vr,
      h = i === ai,
      v = function () {
        if (p) return "ascending";
        if (h) return "descending";
      },
      g = n ? "th" : "td",
      b = Ot("platform-component-visual-refresh");
    return y.createElement(
      g,
      Y({ "aria-sort": v(), onClick: b ? void 0 : u, ref: t, "data-testid": l }, d, {
        className: P([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          b
            ? "_11c8dcr7 _179rralu _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbuwsq"
            : "_11c8dcr7 _179rralu _mqm2glyw _t51zglyw _191wglyw _vchhusvi _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4jp4b _1ygbuwsq",
          !b && u && "_irr3bfnf _d0altlke",
          "_1bsb8a2a",
          o && s && "_1bto1l2s _o5721q9c",
          o && "_1reo15vq _18m915vq",
          !b &&
            a &&
            "_173zglyw _pw6dglyw _1xgk1j28 _1wfn1j28 _y9yonqa1 _997wnqa1 _sklb1l7b _1j091l7b _19w61ule _1w611ule _1hvvidpf _n56nidpf _wyc4idpf _1d4oidpf _no7mstnw _qh32stnw _4b5mb3bt _hn3bb3bt _14gsx0bf _cigmx0bf _c77k1f6e _qzvtu2gc _f4731f6e _1fpyidpf _a04fh2mm _xv14glyw _58ej1kw7 _1ay31kw7 _mdbq1kw7 _10pp1kw7 _1yw3ze3t _n2fdze3t _8607ze3t _szhwze3t _1g2wwc43 _ze9fwc43 _1lcgnqa1 _at5qnqa1 _o4d71l7b _npl51l7b _1rp11onz _1iornqa1 _oi051l7b _1ehx1onz _19t8nqa1 _1bog1l7b",
          !b && p && "_c77k2wk4 _142s94yt",
          !b && h && "_f4732wk4 _17x894yt",
        ]),
        style: Un(
          Un({}, f),
          {},
          {
            "--_k02y3n": We("2px solid ".concat("var(--ds-border, ".concat(es, ")"))),
            "--_17ckjys": We("var(--ds-text-subtle, ".concat("var(".concat(Zl, ")"), ")")),
            "--_jz8ahf": We("solid 2px ".concat("var(--ds-border-focused, ".concat(oi, ")"))),
            "--_6j4ewu": We("var(--ds-background-neutral-hovered, ".concat(ts, ")")),
            "--_1rdacuj": We("3px solid ".concat("var(--ds-icon-disabled, ".concat(es, ")"))),
            "--_1qca9zt": We("3px solid ".concat("var(--ds-icon-subtle, ".concat(Jc, ")"))),
          },
        ),
      }),
      n,
    );
  });
function k0(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, $v() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function $v() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return ($v = function () {
    return !!e;
  })();
}
function Nv(e) {
  return (function (t) {
    function r() {
      var n;
      ce(this, r);
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return (
        (n = k0(this, r, [].concat(i))),
        E(n, "state", { refWidth: 0, refHeight: 0 }),
        E(n, "innerRef", function (s) {
          s && !n.props.isRanking && (n.ref = s);
        }),
        E(n, "updateDimensions", function () {
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
      De(r, t),
      le(r, [
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
              Y({ refWidth: i, refHeight: o, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(k.Component);
}
var Vn = {},
  Ql;
function S0() {
  if (Ql) return Vn;
  ((Ql = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.default = void 0));
  var e = r(lt()),
    t = r(wi);
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M8.75 1v11.44l3.72-3.72 1.06 1.06-5 5a.75.75 0 0 1-1.06 0l-5-5 1.06-1.06 3.72 3.72V1z" clip-rule="evenodd"/>',
        },
        a,
      ),
    );
  return ((n.displayName = "ArrowDownIcon"), (Vn.default = n), Vn);
}
var E0 = S0();
const x0 = er(E0);
var Gn = {},
  ed;
function C0() {
  if (ed) return Gn;
  ((ed = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.default = void 0));
  var e = r(lt()),
    t = r(wi);
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M8.75 15V3.56l3.72 3.72 1.06-1.06-5-5a.75.75 0 0 0-1.06 0l-5 5 1.06 1.06 3.72-3.72V15z" clip-rule="evenodd"/>',
        },
        a,
      ),
    );
  return ((n.displayName = "ArrowUpIcon"), (Gn.default = n), Gn);
}
var P0 = C0();
const R0 = er(P0);
var A0 = "Escape";
function j0(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = y.useRef(!1),
    a = y.useCallback(
      function (o) {
        r || n.current || o.key !== A0 || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    i = y.useCallback(function () {
      n.current = !1;
    }, []);
  y.useEffect(
    function () {
      if (!(r && Ot("platform_only_attach_escape_handler_on_view")))
        return ki.bindAll(
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
var I0 = y.createContext(null),
  D0 = y.createContext(null);
function T0() {
  var e = y.useContext(D0);
  return e;
}
function M0(e) {
  var t = e.isOpen,
    r = e.onClose,
    n = y.useContext(I0),
    a = T0();
  y.useEffect(
    function () {
      if (n !== null && t) return n.onClose(r, { namespace: a });
    },
    [n, t, a, r],
  );
}
var Xn = { none: 0, small: 100, medium: 350, large: 700 },
  Lo = 0.5,
  L0 = { none: Xn.none, small: Xn.small * Lo, medium: Xn.medium * Lo, large: Xn.large * Lo },
  $0 = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  N0 = function () {
    if (!$0()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  F0 = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  B0 = function () {
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
      }, F0(t)),
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
  Fv = { appear: !0, isExiting: !1 },
  Bv = y.createContext(Fv),
  td = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fv;
    return k.createElement(Bv.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  rd = function (t) {
    var r = [];
    return (
      y.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  z0 = function (t, r) {
    for (var n = r.concat([]), a = q0(r), i = 0; i < t.length; i++) {
      var o = t[i],
        s = !a[o.key];
      s && n.splice(i + 1, 0, o);
    }
    return n;
  },
  q0 = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  U0 = function (t, r) {
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
  zv = y.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      i = y.useState([null, n]),
      o = Z(i, 2),
      s = o[0],
      u = o[1],
      c = y.useState([]),
      l = Z(c, 2),
      d = l[0],
      f = l[1],
      p = y.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      h = Z(p, 2),
      v = h[0],
      g = h[1];
    if (
      (y.useEffect(function () {
        v.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      typeof s == "boolean")
    )
      return n;
    var b = Z(s, 2),
      m = b[0],
      w = b[1],
      O = rd(m),
      _ = rd(w);
    w !== n && u([w, n]);
    var S = U0(_, O),
      x = !!S.size,
      j = _;
    if ((x && (j = z0(_, O)), a))
      if (d.length) j = d;
      else {
        var T = j.filter(function (C) {
          return S.has(C.key);
        });
        T.length && f(T);
      }
    return (
      S.size
        ? (j = j.map(function (C) {
            var D = S.has(C.key);
            return td(C, {
              appear: !0,
              isExiting: D,
              onFinish: D
                ? function () {
                    (S.delete(C.key), S.size === 0 && (u([null, n]), f([])));
                  }
                : void 0,
            });
          }))
        : (j = j.map(function (C) {
            return td(C, v);
          })),
      j
    );
  }),
  V0 = function () {
    return y.useContext(Bv);
  };
zv.displayName = "ExitingPersistence";
function G0() {
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
var H0 = y.createContext(function () {
    return { isReady: !0, delay: 0, ref: we };
  }),
  W0 = function () {
    var t = G0(),
      r = y.useContext(H0);
    return r(t);
  },
  K0 = function (t) {
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
      p = W0(),
      h = V0(),
      v = h.isExiting,
      g = h.onFinish,
      b = h.appear,
      m = B0(),
      w = c || !p.isReady,
      O = v ? 0 : p.delay,
      _ = v ? "exiting" : "entering",
      S = y.useState(b),
      x = Z(S, 2),
      j = x[0],
      T = x[1];
    return (
      y.useEffect(
        function () {
          var C = !1;
          if (!w) {
            if (!b) {
              l && l(_);
              return;
            }
            var D = function () {
              (_ === "exiting" && g?.(), C || T(!1), l?.(_));
            };
            if (N0()) {
              D();
              return;
            }
            return (
              T(!0),
              m(D, v ? L0[f] : Xn[f] + O),
              function () {
                C = !0;
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
                v && i === "ease-out" && P(["_1pgldkwg"]),
                v && i === "ease-in" && P(["_1pgl1nzg"]),
                v && i === "ease-in-40-out" && P(["_1pgl5y64"]),
                v && i === "ease-in-60-out" && P(["_1pgl1ddy"]),
                v && i === "ease-in-80-out" && P(["_1pglannl"]),
                v && i === "ease-in-out" && P(["_1pgl1fu8"]),
                ((!v && o === "fade-in") || (v && u === "fade-in")) && P(["_j7hq1cgr"]),
                ((!v && o === "fade-out") || (v && u === "fade-out")) && P(["_j7hq1lln"]),
                ((!v && o === "zoom-in") || (v && u === "zoom-in")) && P(["_j7hqe8p0"]),
                ((!v && o === "zoom-out") || (v && u === "zoom-out")) && P(["_j7hqy6ql"]),
                ((!v && o === "slide-in-from-top") || (v && u === "slide-in-from-top")) &&
                  P(["_j7hqqshu"]),
                ((!v && o === "slide-out-from-top") || (v && u === "slide-out-from-top")) &&
                  P(["_j7hq7ri4"]),
                ((!v && o === "slide-in-from-right") || (v && u === "slide-in-from-right")) &&
                  P(["_j7hqdfjr"]),
                ((!v && o === "slide-out-from-right") || (v && u === "slide-out-from-right")) &&
                  P(["_j7hqonfj"]),
                ((!v && o === "slide-in-from-bottom") || (v && u === "slide-in-from-bottom")) &&
                  P(["_j7hq1liq"]),
                ((!v && o === "slide-out-from-bottom") || (v && u === "slide-out-from-bottom")) &&
                  P(["_j7hqhnf1"]),
                ((!v && o === "slide-in-from-left") || (v && u === "slide-in-from-left")) &&
                  P(["_j7hq1bh1"]),
                ((!v && o === "slide-out-from-left") || (v && u === "slide-out-from-left")) &&
                  P(["_j7hqj08w"]),
                ((!v && o === "fade-in-from-top") || (v && u === "fade-in-from-top")) &&
                  P(["_j7hq2iua"]),
                ((!v && o === "fade-out-from-top") || (v && u === "fade-out-from-top")) &&
                  P(["_j7hq39va"]),
                ((!v && o === "fade-in-from-left") || (v && u === "fade-in-from-left")) &&
                  P(["_j7hq15m2"]),
                ((!v && o === "fade-out-from-left") || (v && u === "fade-out-from-left")) &&
                  P(["_j7hq1yiv"]),
                ((!v && o === "fade-in-from-bottom") || (v && u === "fade-in-from-bottom")) &&
                  P(["_j7hq1w00"]),
                ((!v && o === "fade-out-from-bottom") || (v && u === "fade-out-from-bottom")) &&
                  P(["_j7hqzy3z"]),
                ((!v && o === "fade-in-from-right") || (v && u === "fade-in-from-right")) &&
                  P(["_j7hqpqak"]),
                ((!v && o === "fade-out-from-right") || (v && u === "fade-out-from-right")) &&
                  P(["_j7hq1ebg"]),
                ((!v && o === "fade-in-from-top-constant") ||
                  (v && u === "fade-in-from-top-constant")) &&
                  P(["_j7hqm2e2"]),
                ((!v && o === "fade-out-from-top-constant") ||
                  (v && u === "fade-out-from-top-constant")) &&
                  P(["_j7hq97jn"]),
                ((!v && o === "fade-in-from-left-constant") ||
                  (v && u === "fade-in-from-left-constant")) &&
                  P(["_j7hqovgq"]),
                ((!v && o === "fade-out-from-left-constant") ||
                  (v && u === "fade-out-from-left-constant")) &&
                  P(["_j7hq15do"]),
                ((!v && o === "fade-in-from-bottom-constant") ||
                  (v && u === "fade-in-from-bottom-constant")) &&
                  P(["_j7hq797a"]),
                ((!v && o === "fade-out-from-bottom-constant") ||
                  (v && u === "fade-out-from-bottom-constant")) &&
                  P(["_j7hqwo7r"]),
                ((!v && o === "fade-in-from-right-constant") ||
                  (v && u === "fade-in-from-right-constant")) &&
                  P(["_j7hqt8u5"]),
                ((!v && o === "fade-out-from-right-constant") ||
                  (v && u === "fade-out-from-right-constant")) &&
                  P(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(O, "ms") },
        },
        _,
      )
    );
  },
  Y0 = { top: "bottom", bottom: "top", left: "right", right: "left" },
  J0 = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      i = t.entranceDirection,
      o = t.exitDirection,
      s = t.distance,
      u = s === void 0 ? "proportional" : s,
      c = t.onFinish,
      l = t.isPaused,
      d = i !== void 0 ? Y0[i] : void 0,
      f =
        o || d
          ? "fade-out-from-".concat(o || d).concat(u === "proportional" ? "" : "-constant")
          : "fade-out";
    return k.createElement(
      K0,
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
  X0 = y.createContext();
y.createContext();
var Z0 = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  Q0 = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  ew = function (t, r) {
    if (typeof t == "function") return Q0(t, r);
    t != null && (t.current = r);
  },
  nd = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        i = n[1];
      return ((r[a] = i), r);
    }, {});
  },
  ad =
    typeof window < "u" && window.document && window.document.createElement
      ? y.useLayoutEffect
      : y.useEffect,
  Pe = "top",
  Qe = "bottom",
  et = "right",
  Re = "left",
  qs = "auto",
  Oa = [Pe, Qe, et, Re],
  Ur = "start",
  pa = "end",
  tw = "clippingParents",
  qv = "viewport",
  Wn = "popper",
  rw = "reference",
  id = Oa.reduce(function (e, t) {
    return e.concat([t + "-" + Ur, t + "-" + pa]);
  }, []),
  Uv = [].concat(Oa, [qs]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Ur, t + "-" + pa]);
  }, []),
  nw = "beforeRead",
  aw = "read",
  iw = "afterRead",
  ow = "beforeMain",
  sw = "main",
  uw = "afterMain",
  cw = "beforeWrite",
  lw = "write",
  dw = "afterWrite",
  fw = [nw, aw, iw, ow, sw, uw, cw, lw, dw];
function Pt(e) {
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
function pr(e) {
  var t = Fe(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ze(e) {
  var t = Fe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Us(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Fe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function vw(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      i = t.elements[r];
    !Ze(i) ||
      !Pt(i) ||
      (Object.assign(i.style, n),
      Object.keys(a).forEach(function (o) {
        var s = a[o];
        s === !1 ? i.removeAttribute(o) : i.setAttribute(o, s === !0 ? "" : s);
      }));
  });
}
function pw(e) {
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
        !Ze(a) ||
          !Pt(a) ||
          (Object.assign(a.style, s),
          Object.keys(i).forEach(function (u) {
            a.removeAttribute(u);
          }));
      });
    }
  );
}
const hw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: vw,
  effect: pw,
  requires: ["computeStyles"],
};
function St(e) {
  return e.split("-")[0];
}
var dr = Math.max,
  ci = Math.min,
  Vr = Math.round;
function ds() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Vv() {
  return !/^((?!chrome|android).)*safari/i.test(ds());
}
function Gr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    i = 1;
  t &&
    Ze(e) &&
    ((a = (e.offsetWidth > 0 && Vr(n.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Vr(n.height) / e.offsetHeight) || 1));
  var o = pr(e) ? Fe(e) : window,
    s = o.visualViewport,
    u = !Vv() && r,
    c = (n.left + (u && s ? s.offsetLeft : 0)) / a,
    l = (n.top + (u && s ? s.offsetTop : 0)) / i,
    d = n.width / a,
    f = n.height / i;
  return { width: d, height: f, top: l, right: c + d, bottom: l + f, left: c, x: c, y: l };
}
function Vs(e) {
  var t = Gr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Gv(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Us(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Gt(e) {
  return Fe(e).getComputedStyle(e);
}
function gw(e) {
  return ["table", "td", "th"].indexOf(Pt(e)) >= 0;
}
function tr(e) {
  return ((pr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ci(e) {
  return Pt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Us(e) ? e.host : null) || tr(e);
}
function od(e) {
  return !Ze(e) || Gt(e).position === "fixed" ? null : e.offsetParent;
}
function bw(e) {
  var t = /firefox/i.test(ds()),
    r = /Trident/i.test(ds());
  if (r && Ze(e)) {
    var n = Gt(e);
    if (n.position === "fixed") return null;
  }
  var a = Ci(e);
  for (Us(a) && (a = a.host); Ze(a) && ["html", "body"].indexOf(Pt(a)) < 0; ) {
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
function ka(e) {
  for (var t = Fe(e), r = od(e); r && gw(r) && Gt(r).position === "static"; ) r = od(r);
  return r && (Pt(r) === "html" || (Pt(r) === "body" && Gt(r).position === "static"))
    ? t
    : r || bw(e) || t;
}
function Gs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ta(e, t, r) {
  return dr(e, ci(t, r));
}
function yw(e, t, r) {
  var n = ta(e, t, r);
  return n > r ? r : n;
}
function Hv() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Wv(e) {
  return Object.assign({}, Hv(), e);
}
function Kv(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var _w = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Wv(typeof t != "number" ? t : Kv(t, Oa))
  );
};
function mw(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    i = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    s = St(r.placement),
    u = Gs(s),
    c = [Re, et].indexOf(s) >= 0,
    l = c ? "height" : "width";
  if (!(!i || !o)) {
    var d = _w(a.padding, r),
      f = Vs(i),
      p = u === "y" ? Pe : Re,
      h = u === "y" ? Qe : et,
      v = r.rects.reference[l] + r.rects.reference[u] - o[u] - r.rects.popper[l],
      g = o[u] - r.rects.reference[u],
      b = ka(i),
      m = b ? (u === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      w = v / 2 - g / 2,
      O = d[p],
      _ = m - f[l] - d[h],
      S = m / 2 - f[l] / 2 + w,
      x = ta(O, S, _),
      j = u;
    r.modifiersData[n] = ((t = {}), (t[j] = x), (t.centerOffset = x - S), t);
  }
}
function ww(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (Gv(t.elements.popper, a) && (t.elements.arrow = a)));
}
const Ow = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: mw,
  effect: ww,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Hr(e) {
  return e.split("-")[1];
}
var kw = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Sw(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Vr(r * a) / a || 0, y: Vr(n * a) / a || 0 };
}
function sd(e) {
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
    w = Re,
    O = Pe,
    _ = window;
  if (c) {
    var S = ka(r),
      x = "clientHeight",
      j = "clientWidth";
    if (
      (S === Fe(r) &&
        ((S = tr(r)),
        Gt(S).position !== "static" &&
          s === "absolute" &&
          ((x = "scrollHeight"), (j = "scrollWidth"))),
      (S = S),
      a === Pe || ((a === Re || a === et) && i === pa))
    ) {
      O = Qe;
      var T = d && S === _ && _.visualViewport ? _.visualViewport.height : S[x];
      ((v -= T - n.height), (v *= u ? 1 : -1));
    }
    if (a === Re || ((a === Pe || a === Qe) && i === pa)) {
      w = et;
      var C = d && S === _ && _.visualViewport ? _.visualViewport.width : S[j];
      ((p -= C - n.width), (p *= u ? 1 : -1));
    }
  }
  var D = Object.assign({ position: s }, c && kw),
    B = l === !0 ? Sw({ x: p, y: v }, Fe(r)) : { x: p, y: v };
  if (((p = B.x), (v = B.y), u)) {
    var F;
    return Object.assign(
      {},
      D,
      ((F = {}),
      (F[O] = m ? "0" : ""),
      (F[w] = b ? "0" : ""),
      (F.transform =
        (_.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + v + "px)"
          : "translate3d(" + p + "px, " + v + "px, 0)"),
      F),
    );
  }
  return Object.assign(
    {},
    D,
    ((t = {}), (t[O] = m ? v + "px" : ""), (t[w] = b ? p + "px" : ""), (t.transform = ""), t),
  );
}
function Ew(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    i = r.adaptive,
    o = i === void 0 ? !0 : i,
    s = r.roundOffsets,
    u = s === void 0 ? !0 : s,
    c = {
      placement: St(t.placement),
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
      sd(
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
        sd(
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
const xw = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Ew, data: {} };
var Ba = { passive: !0 };
function Cw(e) {
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
        l.addEventListener("scroll", r.update, Ba);
      }),
    s && u.addEventListener("resize", r.update, Ba),
    function () {
      (i &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", r.update, Ba);
        }),
        s && u.removeEventListener("resize", r.update, Ba));
    }
  );
}
const Pw = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Cw,
  data: {},
};
var Rw = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ya(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Rw[t];
  });
}
var Aw = { start: "end", end: "start" };
function ud(e) {
  return e.replace(/start|end/g, function (t) {
    return Aw[t];
  });
}
function Hs(e) {
  var t = Fe(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Ws(e) {
  return Gr(tr(e)).left + Hs(e).scrollLeft;
}
function jw(e, t) {
  var r = Fe(e),
    n = tr(e),
    a = r.visualViewport,
    i = n.clientWidth,
    o = n.clientHeight,
    s = 0,
    u = 0;
  if (a) {
    ((i = a.width), (o = a.height));
    var c = Vv();
    (c || (!c && t === "fixed")) && ((s = a.offsetLeft), (u = a.offsetTop));
  }
  return { width: i, height: o, x: s + Ws(e), y: u };
}
function Iw(e) {
  var t,
    r = tr(e),
    n = Hs(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = dr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    o = dr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    s = -n.scrollLeft + Ws(e),
    u = -n.scrollTop;
  return (
    Gt(a || r).direction === "rtl" && (s += dr(r.clientWidth, a ? a.clientWidth : 0) - i),
    { width: i, height: o, x: s, y: u }
  );
}
function Ks(e) {
  var t = Gt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Yv(e) {
  return ["html", "body", "#document"].indexOf(Pt(e)) >= 0
    ? e.ownerDocument.body
    : Ze(e) && Ks(e)
      ? e
      : Yv(Ci(e));
}
function ra(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Yv(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = Fe(n),
    o = a ? [i].concat(i.visualViewport || [], Ks(n) ? n : []) : n,
    s = t.concat(o);
  return a ? s : s.concat(ra(Ci(o)));
}
function fs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Dw(e, t) {
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
function cd(e, t, r) {
  return t === qv ? fs(jw(e, r)) : pr(t) ? Dw(t, r) : fs(Iw(tr(e)));
}
function Tw(e) {
  var t = ra(Ci(e)),
    r = ["absolute", "fixed"].indexOf(Gt(e).position) >= 0,
    n = r && Ze(e) ? ka(e) : e;
  return pr(n)
    ? t.filter(function (a) {
        return pr(a) && Gv(a, n) && Pt(a) !== "body";
      })
    : [];
}
function Mw(e, t, r, n) {
  var a = t === "clippingParents" ? Tw(e) : [].concat(t),
    i = [].concat(a, [r]),
    o = i[0],
    s = i.reduce(
      function (u, c) {
        var l = cd(e, c, n);
        return (
          (u.top = dr(l.top, u.top)),
          (u.right = ci(l.right, u.right)),
          (u.bottom = ci(l.bottom, u.bottom)),
          (u.left = dr(l.left, u.left)),
          u
        );
      },
      cd(e, o, n),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Jv(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? St(n) : null,
    i = n ? Hr(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    u;
  switch (a) {
    case Pe:
      u = { x: o, y: t.y - r.height };
      break;
    case Qe:
      u = { x: o, y: t.y + t.height };
      break;
    case et:
      u = { x: t.x + t.width, y: s };
      break;
    case Re:
      u = { x: t.x - r.width, y: s };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = a ? Gs(a) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (i) {
      case Ur:
        u[c] = u[c] - (t[l] / 2 - r[l] / 2);
        break;
      case pa:
        u[c] = u[c] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return u;
}
function ha(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    i = r.strategy,
    o = i === void 0 ? e.strategy : i,
    s = r.boundary,
    u = s === void 0 ? tw : s,
    c = r.rootBoundary,
    l = c === void 0 ? qv : c,
    d = r.elementContext,
    f = d === void 0 ? Wn : d,
    p = r.altBoundary,
    h = p === void 0 ? !1 : p,
    v = r.padding,
    g = v === void 0 ? 0 : v,
    b = Wv(typeof g != "number" ? g : Kv(g, Oa)),
    m = f === Wn ? rw : Wn,
    w = e.rects.popper,
    O = e.elements[h ? m : f],
    _ = Mw(pr(O) ? O : O.contextElement || tr(e.elements.popper), u, l, o),
    S = Gr(e.elements.reference),
    x = Jv({ reference: S, element: w, placement: a }),
    j = fs(Object.assign({}, w, x)),
    T = f === Wn ? j : S,
    C = {
      top: _.top - T.top + b.top,
      bottom: T.bottom - _.bottom + b.bottom,
      left: _.left - T.left + b.left,
      right: T.right - _.right + b.right,
    },
    D = e.modifiersData.offset;
  if (f === Wn && D) {
    var B = D[a];
    Object.keys(C).forEach(function (F) {
      var U = [et, Qe].indexOf(F) >= 0 ? 1 : -1,
        Q = [Pe, Qe].indexOf(F) >= 0 ? "y" : "x";
      C[F] += B[Q] * U;
    });
  }
  return C;
}
function Lw(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    i = r.rootBoundary,
    o = r.padding,
    s = r.flipVariations,
    u = r.allowedAutoPlacements,
    c = u === void 0 ? Uv : u,
    l = Hr(n),
    d = l
      ? s
        ? id
        : id.filter(function (h) {
            return Hr(h) === l;
          })
      : Oa,
    f = d.filter(function (h) {
      return c.indexOf(h) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (h, v) {
    return ((h[v] = ha(e, { placement: v, boundary: a, rootBoundary: i, padding: o })[St(v)]), h);
  }, {});
  return Object.keys(p).sort(function (h, v) {
    return p[h] - p[v];
  });
}
function $w(e) {
  if (St(e) === qs) return [];
  var t = Ya(e);
  return [ud(e), t, ud(t)];
}
function Nw(e) {
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
        b = St(g),
        m = b === g,
        w = u || (m || !h ? [Ya(g)] : $w(g)),
        O = [g].concat(w).reduce(function (de, fe) {
          return de.concat(
            St(fe) === qs
              ? Lw(t, {
                  placement: fe,
                  boundary: l,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: h,
                  allowedAutoPlacements: v,
                })
              : fe,
          );
        }, []),
        _ = t.rects.reference,
        S = t.rects.popper,
        x = new Map(),
        j = !0,
        T = O[0],
        C = 0;
      C < O.length;
      C++
    ) {
      var D = O[C],
        B = St(D),
        F = Hr(D) === Ur,
        U = [Pe, Qe].indexOf(B) >= 0,
        Q = U ? "width" : "height",
        z = ha(t, { placement: D, boundary: l, rootBoundary: d, altBoundary: f, padding: c }),
        V = U ? (F ? et : Re) : F ? Qe : Pe;
      _[Q] > S[Q] && (V = Ya(V));
      var J = Ya(V),
        A = [];
      if (
        (i && A.push(z[B] <= 0),
        s && A.push(z[V] <= 0, z[J] <= 0),
        A.every(function (de) {
          return de;
        }))
      ) {
        ((T = D), (j = !1));
        break;
      }
      x.set(D, A);
    }
    if (j)
      for (
        var q = h ? 3 : 1,
          he = function (fe) {
            var ge = O.find(function (ze) {
              var _e = x.get(ze);
              if (_e)
                return _e.slice(0, fe).every(function (tt) {
                  return tt;
                });
            });
            if (ge) return ((T = ge), "break");
          },
          W = q;
        W > 0;
        W--
      ) {
        var be = he(W);
        if (be === "break") break;
      }
    t.placement !== T && ((t.modifiersData[n]._skip = !0), (t.placement = T), (t.reset = !0));
  }
}
const Fw = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Nw,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function ld(e, t, r) {
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
function dd(e) {
  return [Pe, et, Qe, Re].some(function (t) {
    return e[t] >= 0;
  });
}
function Bw(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    o = ha(t, { elementContext: "reference" }),
    s = ha(t, { altBoundary: !0 }),
    u = ld(o, n),
    c = ld(s, a, i),
    l = dd(u),
    d = dd(c);
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
const zw = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Bw,
};
function qw(e, t, r) {
  var n = St(e),
    a = [Re, Pe].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = i[0],
    s = i[1];
  return (
    (o = o || 0),
    (s = (s || 0) * a),
    [Re, et].indexOf(n) >= 0 ? { x: s, y: o } : { x: o, y: s }
  );
}
function Uw(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    i = a === void 0 ? [0, 0] : a,
    o = Uv.reduce(function (l, d) {
      return ((l[d] = qw(d, t.rects, i)), l);
    }, {}),
    s = o[t.placement],
    u = s.x,
    c = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += u), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o));
}
const Vw = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Uw };
function Gw(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Jv({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const Hw = { name: "popperOffsets", enabled: !0, phase: "read", fn: Gw, data: {} };
function Ww(e) {
  return e === "x" ? "y" : "x";
}
function Kw(e) {
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
    g = ha(t, { boundary: u, rootBoundary: c, padding: d, altBoundary: l }),
    b = St(t.placement),
    m = Hr(t.placement),
    w = !m,
    O = Gs(b),
    _ = Ww(O),
    S = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    j = t.rects.popper,
    T = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v,
    C =
      typeof T == "number"
        ? { mainAxis: T, altAxis: T }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
    D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    B = { x: 0, y: 0 };
  if (S) {
    if (i) {
      var F,
        U = O === "y" ? Pe : Re,
        Q = O === "y" ? Qe : et,
        z = O === "y" ? "height" : "width",
        V = S[O],
        J = V + g[U],
        A = V - g[Q],
        q = p ? -j[z] / 2 : 0,
        he = m === Ur ? x[z] : j[z],
        W = m === Ur ? -j[z] : -x[z],
        be = t.elements.arrow,
        de = p && be ? Vs(be) : { width: 0, height: 0 },
        fe = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Hv(),
        ge = fe[U],
        ze = fe[Q],
        _e = ta(0, x[z], de[z]),
        tt = w ? x[z] / 2 - q - _e - ge - C.mainAxis : he - _e - ge - C.mainAxis,
        ue = w ? -x[z] / 2 + q + _e + ze + C.mainAxis : W + _e + ze + C.mainAxis,
        vt = t.elements.arrow && ka(t.elements.arrow),
        Wt = vt ? (O === "y" ? vt.clientTop || 0 : vt.clientLeft || 0) : 0,
        rt = (F = D?.[O]) != null ? F : 0,
        pt = V + tt - rt - Wt,
        Se = V + ue - rt,
        ht = ta(p ? ci(J, pt) : J, V, p ? dr(A, Se) : A);
      ((S[O] = ht), (B[O] = ht - V));
    }
    if (s) {
      var gt,
        nt = O === "x" ? Pe : Re,
        Qr = O === "x" ? Qe : et,
        qe = S[_],
        Te = _ === "y" ? "height" : "width",
        Ee = qe + g[nt],
        Ue = qe - g[Qr],
        nr = [Pe, Re].indexOf(b) !== -1,
        Aa = (gt = D?.[_]) != null ? gt : 0,
        ja = nr ? Ee : qe - x[Te] - j[Te] - Aa + C.altAxis,
        Ia = nr ? qe + x[Te] + j[Te] - Aa - C.altAxis : Ue,
        Da = p && nr ? yw(ja, qe, Ia) : ta(p ? ja : Ee, qe, p ? Ia : Ue);
      ((S[_] = Da), (B[_] = Da - qe));
    }
    t.modifiersData[n] = B;
  }
}
const Yw = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Kw,
  requiresIfExists: ["offset"],
};
function Jw(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Xw(e) {
  return e === Fe(e) || !Ze(e) ? Hs(e) : Jw(e);
}
function Zw(e) {
  var t = e.getBoundingClientRect(),
    r = Vr(t.width) / e.offsetWidth || 1,
    n = Vr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Qw(e, t, r) {
  r === void 0 && (r = !1);
  var n = Ze(t),
    a = Ze(t) && Zw(t),
    i = tr(t),
    o = Gr(e, a, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    u = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Pt(t) !== "body" || Ks(i)) && (s = Xw(t)),
      Ze(t) ? ((u = Gr(t, !0)), (u.x += t.clientLeft), (u.y += t.clientTop)) : i && (u.x = Ws(i))),
    {
      x: o.left + s.scrollLeft - u.x,
      y: o.top + s.scrollTop - u.y,
      width: o.width,
      height: o.height,
    }
  );
}
function e1(e) {
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
function t1(e) {
  var t = e1(e);
  return fw.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function r1(e) {
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
function n1(e) {
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
var fd = { placement: "bottom", modifiers: [], strategy: "absolute" };
function vd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function a1(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    i = a === void 0 ? fd : a;
  return function (s, u, c) {
    c === void 0 && (c = i);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, fd, i),
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
              reference: pr(s) ? ra(s) : s.contextElement ? ra(s.contextElement) : [],
              popper: ra(u),
            }));
          var w = t1(n1([].concat(n, l.options.modifiers)));
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
            if (vd(m, w)) {
              ((l.rects = {
                reference: Qw(m, ka(w), l.options.strategy === "fixed"),
                popper: Vs(w),
              }),
                (l.reset = !1),
                (l.placement = l.options.placement),
                l.orderedModifiers.forEach(function (C) {
                  return (l.modifiersData[C.name] = Object.assign({}, C.data));
                }));
              for (var O = 0; O < l.orderedModifiers.length; O++) {
                if (l.reset === !0) {
                  ((l.reset = !1), (O = -1));
                  continue;
                }
                var _ = l.orderedModifiers[O],
                  S = _.fn,
                  x = _.options,
                  j = x === void 0 ? {} : x,
                  T = _.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: j, name: T, instance: p }) || l);
              }
            }
          }
        },
        update: r1(function () {
          return new Promise(function (g) {
            (p.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (v(), (f = !0));
        },
      };
    if (!vd(s, u)) return p;
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
var i1 = [Pw, Hw, xw, hw, Vw, Fw, Yw, Ow, zw],
  o1 = a1({ defaultModifiers: i1 }),
  $o,
  pd;
function s1() {
  if (pd) return $o;
  pd = 1;
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
var u1 = s1();
const c1 = er(u1);
var l1 = [],
  d1 = function (t, r, n) {
    n === void 0 && (n = {});
    var a = y.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || l1,
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
            _i.flushSync(function () {
              u({
                styles: nd(
                  v.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: nd(
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
          return c1(a.current, f) ? a.current || f : ((a.current = f), f);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c],
      ),
      d = y.useRef();
    return (
      ad(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      ad(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || o1,
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
  f1 = function () {},
  v1 = function () {
    return Promise.resolve(null);
  },
  p1 = [];
function h1(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    i = e.modifiers,
    o = i === void 0 ? p1 : i,
    s = e.referenceElement,
    u = e.onFirstUpdate,
    c = e.innerRef,
    l = e.children,
    d = y.useContext(X0),
    f = y.useState(null),
    p = f[0],
    h = f[1],
    v = y.useState(null),
    g = v[0],
    b = v[1];
  y.useEffect(
    function () {
      ew(c, p);
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
    w = d1(s || d, p, m),
    O = w.state,
    _ = w.styles,
    S = w.forceUpdate,
    x = w.update,
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
          forceUpdate: S || f1,
          update: x || v1,
        };
      },
      [h, b, r, O, _, x, S],
    );
  return Z0(l)(j);
}
function g1(e) {
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
            h = Z(p, 1),
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
var vs = 5,
  b1 = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: vs,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function y1() {
  return null;
}
var _1 = [0, 8];
function m1(e) {
  var t = e.children,
    r = t === void 0 ? y1 : t,
    n = e.offset,
    a = n === void 0 ? _1 : n,
    i = e.placement,
    o = i === void 0 ? "bottom-start" : i,
    s = e.referenceElement,
    u = s === void 0 ? void 0 : s,
    c = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    f = e.shouldFitViewport,
    p = f === void 0 ? !1 : f,
    h = Z(a, 2),
    v = h[0],
    g = h[1],
    b = y.useMemo(
      function () {
        var w = {
            name: "preventOverflow",
            options: { padding: vs, rootBoundary: p ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [v, g] } },
          _ = p ? g1({ viewportPadding: vs }) : [];
        return [].concat(b1, [w, O], Me(_));
      },
      [v, g, p],
    ),
    m = y.useMemo(
      function () {
        return c == null ? b : [].concat(Me(b), Me(c));
      },
      [b, c],
    );
  return k.createElement(h1, { modifiers: m, placement: o, strategy: d, referenceElement: u }, r);
}
var Xv = "atlaskit-portal-container",
  Zv = "body > .atlaskit-portal-container",
  Qv = "atlaskit-portal",
  w1 = function (t) {
    var r = document.createElement("div");
    return ((r.className = Qv), (r.style.zIndex = "".concat(t)), r);
  },
  ep = function () {
    return document.body;
  },
  tp = function () {
    var t = document.querySelector(Zv);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = Xv),
        (n.style.display = "flex"),
        (r = ep()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  O1 = function (t) {
    tp().removeChild(t);
  },
  k1 = function (t) {
    t.parentElement || tp().appendChild(t);
  },
  rp = function () {
    return document !== void 0;
  },
  S1 = function (t) {
    if (rp()) {
      var r = document.createElement("div");
      return ((r.className = Qv), (r.style.zIndex = "".concat(t)), r);
    }
  },
  E1 = function () {
    if (rp()) {
      var t = document.querySelector(Zv);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = Xv),
          (n.style.display = "flex"),
          (r = ep()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function x1(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useMemo(
      function () {
        return w1(t);
      },
      [t],
    );
  return (
    k1(n),
    y.useEffect(
      function () {
        return function () {
          O1(n);
        };
      },
      [n],
    ),
    _i.createPortal(r, n)
  );
}
var np = typeof window < "u" ? y.useLayoutEffect : y.useEffect;
function C1(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useState(null),
    a = Z(n, 2),
    i = a[0],
    o = a[1];
  np(
    function () {
      var u = S1(t);
      o(u);
      var c = E1();
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
  return i ? _i.createPortal(s, i) : null;
}
var P1 = function (t) {
    var r = y.useState(!1),
      n = Z(r, 2),
      a = n[0],
      i = n[1],
      o = y.useState(function () {
        return t === "layoutEffect" ? np : y.useEffect;
      }),
      s = Z(o, 1),
      u = s[0];
    return (
      u(function () {
        i(!0);
      }, []),
      a
    );
  },
  R1 = "akPortalMount",
  A1 = "akPortalUnmount",
  hd = {
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
  j1 = function (t) {
    return hd.hasOwnProperty(t) ? hd[t] : null;
  },
  I1 = function (t, r) {
    var n = { layer: j1(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function gd(e, t) {
  var r = I1(e, t);
  window.dispatchEvent(r);
}
var D1 = function (t) {
  var r = Number(t);
  y.useEffect(
    function () {
      return (
        gd(R1, r),
        function () {
          gd(A1, r);
        }
      );
    },
    [r],
  );
};
function T1(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    i = a === void 0 ? "effect" : a,
    o = P1(i);
  return (
    D1(r),
    Ot("platform_design_system_team_portal_logic_r18_fix")
      ? k.createElement(C1, { zIndex: r }, n)
      : o
        ? k.createElement(x1, { zIndex: r }, n)
        : null
  );
}
var na = new Set(),
  ga = null;
function bd() {
  if (!ga) {
    ga = ki.bindAll(window, [
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
    var e = Array.from(na);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function No() {
  var e;
  ((e = ga) === null || e === void 0 || e(), (ga = null));
  var t = Array.from(na);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function M1() {
  return ki.bindAll(window, [
    { type: "dragstart", listener: bd },
    { type: "dragenter", listener: bd },
  ]);
}
var za = null;
function L1(e) {
  return (
    za || (za = M1()),
    na.add(e),
    e.onRegister({ isDragging: ga !== null }),
    function () {
      if ((na.delete(e), na.size === 0)) {
        var r;
        ((r = za) === null || r === void 0 || r(), (za = null));
      }
    }
  );
}
var aa = null;
function Zn() {
  aa != null && (window.clearTimeout(aa), (aa = null));
}
function yd(e, t) {
  (Zn(),
    (aa = window.setTimeout(function () {
      ((aa = null), e());
    }, t)));
}
var bt = null;
function $1(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(bt && bt.entry === e);
  }
  function n() {
    r() && (Zn(), (bt = null));
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
        ((t = "shown"), Zn());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), Zn(), e.show({ isImmediate: !1 }));
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
          yd(function () {
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
    var p = !!(bt && bt.isVisible());
    (bt && (Zn(), bt.entry.hide({ isImmediate: !0 }), bt.entry.done(), (bt = null)),
      (bt = { entry: e, isVisible: c }));
    function h() {
      ((t = "shown"), e.show({ isImmediate: p }));
    }
    if (p) {
      h();
      return;
    }
    ((t = "waiting-to-show"), yd(h, e.delay));
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
function N1(e, t) {
  var r = P_();
  return t ? "".concat(r(e)) : void 0;
}
var ap = y.forwardRef(function (t, r) {
  var n = t.style,
    a = t.className,
    i = t.children,
    o = t.placement,
    s = t.testId,
    u = t.onMouseOut,
    c = t.onMouseOver,
    l = t.id;
  return y.createElement(
    "div",
    { ref: r, style: n, "data-testid": s ? "".concat(s, "--wrapper") : void 0 },
    y.createElement(
      "div",
      {
        role: "tooltip",
        className: P(["_80om73ad", a]),
        onMouseOut: u,
        onMouseOver: c,
        "data-placement": o,
        "data-testid": s,
        id: l,
      },
      i,
    ),
  );
});
ap.displayName = "TooltipPrimitive";
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
function md(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _d(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _d(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ip = y.forwardRef(function (t, r) {
  var n = t.style,
    a = t.className,
    i = t.children,
    o = t.truncate,
    s = t.placement,
    u = t.testId,
    c = t.onMouseOut,
    l = t.onMouseOver,
    d = t.id;
  return y.createElement(
    ap,
    {
      ref: r,
      className: P([
        "_2rko1sit _11c8dcr7 _vchhusvi _p12fp3fh _bfhkpioe _syaz1i9p _152tze3t _1e02ze3t _1i4q1hna _85i5v77o _1q51v77o _y4ti12x7 _bozg12x7 _slp31hna",
        o && "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
        a,
      ]),
      placement: s,
      testId: u,
      id: d,
      onMouseOut: c,
      onMouseOver: l,
      style: md(
        md({}, n),
        {},
        {
          "--_yr7xfv": We("var(--ds-background-neutral-bold, ".concat(lr, ")")),
          "--_ywovvi": We("var(--ds-text-inverse, ".concat(Nt, ")")),
        },
      ),
    },
    i,
  );
});
ip.displayName = "TooltipContainer";
function wd(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
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
function Mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Od(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Od(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var F1 = A_.tooltip(),
  kd = { componentName: "tooltip", packageName: "@atlaskit/tooltip", packageVersion: "20.4.1" },
  B1 = { top: "bottom", bottom: "top", left: "right", right: "left" },
  z1 = function (t) {
    return t.split("-")[0];
  };
function q1(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    i = a === void 0 ? "bottom" : a,
    o = e.content,
    s = e.truncate,
    u = s === void 0 ? !1 : s,
    c = e.component,
    l = c === void 0 ? ip : c,
    d = e.tag,
    f = d === void 0 ? "div" : d,
    p = e.testId,
    h = e.delay,
    v = h === void 0 ? 300 : h,
    g = e.onShow,
    b = g === void 0 ? we : g,
    m = e.onHide,
    w = m === void 0 ? we : m,
    O = e.canAppear,
    _ = e.hideTooltipOnClick,
    S = _ === void 0 ? !1 : _,
    x = e.hideTooltipOnMouseDown,
    j = x === void 0 ? !1 : x,
    T = e.analyticsContext,
    C = e.strategy,
    D = C === void 0 ? "fixed" : C,
    B = e.ignoreTooltipPointerEvents,
    F = B === void 0 ? !1 : B,
    U = e.isScreenReaderAnnouncementDisabled,
    Q = U === void 0 ? !1 : U,
    z = n === "mouse" ? i : n,
    V = qc(Mr({ fn: b, action: "displayed", analyticsData: T }, kd)),
    J = qc(Mr({ fn: w, action: "hidden", analyticsData: T }, kd)),
    A = y.useRef(null),
    q = y.useState("hide"),
    he = Z(q, 2),
    W = he[0],
    be = he[1],
    de = y.useRef(null),
    fe = y.useRef(null),
    ge = function (ae) {
      ((fe.current = ae), (de.current = ae ? ae.firstElementChild : null));
    },
    ze = y.useCallback(function (M) {
      de.current = M;
    }, []),
    _e = Hn(W),
    tt = Hn(V),
    ue = Hn(J),
    vt = Hn(v),
    Wt = Hn(O),
    rt = y.useRef(!1),
    pt = y.useCallback(function (M) {
      ((A.current = M), (rt.current = !1));
    }, []),
    Se = y.useCallback(
      function () {
        A.current &&
          (rt.current && ue.current(), (A.current = null), (rt.current = !1), be("hide"));
      },
      [ue],
    ),
    ht = y.useCallback(
      function () {
        A.current && (A.current.abort(), rt.current && ue.current(), (A.current = null));
      },
      [ue],
    );
  y.useEffect(
    function () {
      return function () {
        A.current && ht();
      };
    },
    [ht],
  );
  var gt = y.useRef(!1);
  y.useEffect(function () {
    return L1({
      onRegister: function (ae) {
        var Dt = ae.isDragging;
        gt.current = Dt;
      },
      onDragStart: function () {
        var ae;
        ((ae = A.current) === null || ae === void 0 || ae.requestHide({ isImmediate: !0 }),
          (gt.current = !0));
      },
      onDragEnd: function () {
        gt.current = !1;
      },
    });
  }, []);
  var nt = y.useCallback(
      function (M) {
        var ae;
        if (!gt.current) {
          if ((A.current && !A.current.isActive() && ht(), A.current && A.current.isActive())) {
            A.current.keep();
            return;
          }
          if (!(Wt.current && !((ae = Wt.current) !== null && ae !== void 0 && ae.call(Wt)))) {
            var Dt = {
                source: M,
                delay: vt.current,
                show: function (kr) {
                  var tn = kr.isImmediate;
                  (rt.current || ((rt.current = !0), tt.current()),
                    be(tn ? "show-immediate" : "fade-in"));
                },
                hide: function (kr) {
                  var tn = kr.isImmediate;
                  be(tn ? "hide" : "before-fade-out");
                },
                done: Se,
              },
              Hi = $1(Dt);
            pt(Hi);
          }
        }
      },
      [Wt, vt, Se, pt, ht, tt],
    ),
    Qr = y.useCallback(
      function () {
        var M;
        (M = A.current) === null || M === void 0 || M.requestHide({ isImmediate: !0 });
      },
      [A],
    );
  (j0({ onClose: Qr, isDisabled: W === "hide" || W === "fade-out" }),
    y.useEffect(
      function () {
        if (W === "hide") return we;
        W === "before-fade-out" && be("fade-out");
        var M = ki.bind(window, {
          type: "scroll",
          listener: function () {
            A.current && A.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return M;
      },
      [W],
    ));
  var qe = y.useCallback(
      function () {
        j && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [j],
    ),
    Te = y.useCallback(
      function () {
        S && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    Ee = y.useCallback(
      function (M) {
        if (!(fe.current && M.target === fe.current) && !M.defaultPrevented) {
          M.preventDefault();
          var ae =
            n === "mouse"
              ? { type: "mouse", mouse: wd({ left: M.clientX, top: M.clientY }) }
              : { type: "keyboard" };
          nt(ae);
        }
      },
      [n, nt],
    ),
    Ue = y.useCallback(function (M) {
      (fe.current && M.target === fe.current) ||
        M.defaultPrevented ||
        (M.preventDefault(), A.current && A.current.requestHide({ isImmediate: !1 }));
    }, []),
    nr =
      n === "mouse"
        ? function (M) {
            var ae;
            (ae = A.current) !== null &&
              ae !== void 0 &&
              ae.isActive() &&
              (A.current.mousePosition = wd({ left: M.clientX, top: M.clientY }));
          }
        : void 0,
    Aa = y.useCallback(function () {
      if (A.current && A.current.isActive()) {
        A.current.keep();
        return;
      }
    }, []),
    ja = y.useCallback(
      function (M) {
        try {
          if (!M.target.matches(":focus-visible") && Ot("platform-tooltip-focus-visible-new"))
            return;
        } catch {}
        nt({ type: "keyboard" });
      },
      [nt],
    ),
    Ia = y.useCallback(function () {
      A.current && A.current.requestHide({ isImmediate: !1 });
    }, []),
    Da = y.useCallback(
      function (M) {
        M === "exiting" &&
          _e.current === "fade-out" &&
          A.current &&
          A.current.finishHideAnimation();
      },
      [_e],
    ),
    uh = f,
    Vi = W !== "hide" && !!o,
    nu = !Q && Vi,
    au = W !== "hide" && W !== "fade-out",
    ch = y.useCallback(function () {
      var M;
      (M = A.current) === null || M === void 0 || M.requestHide({ isImmediate: !0 });
    }, []);
  M0({ isOpen: Vi && au, onClose: ch });
  var iu = function () {
      var ae;
      if (n === "mouse" && (ae = A.current) !== null && ae !== void 0 && ae.mousePosition) {
        var Dt;
        return (Dt = A.current) === null || Dt === void 0 ? void 0 : Dt.mousePosition;
      }
      return de.current || void 0;
    },
    en = N1("tooltip", nu),
    Gi = {
      onMouseOver: Ee,
      onMouseOut: Ue,
      onMouseMove: nr,
      onMouseDown: qe,
      onClick: Te,
      onFocus: ja,
      onBlur: Ia,
    };
  p && (Gi["data-testid"] = "".concat(p, "--container"));
  var ou = typeof t == "function";
  y.useEffect(
    function () {
      if (!ou) {
        var M = de.current;
        if (!(!M || !en))
          return (
            M.setAttribute("aria-describedby", en),
            function () {
              return M.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [ou, en],
  );
  var su = nu
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
          t(Mr(Mr({}, Gi), {}, { "aria-describedby": en, ref: ze })),
          su,
        )
      : k.createElement(uh, Y({}, Gi, { ref: ge, role: "presentation" }), t, su),
    Vi
      ? k.createElement(
          T1,
          { zIndex: F1 },
          k.createElement(m1, { placement: z, referenceElement: iu(), strategy: D }, function (M) {
            var ae = M.ref,
              Dt = M.style,
              Hi = M.update,
              Wi = M.placement,
              kr = n === "mouse" ? void 0 : B1[z1(Wi)];
            return k.createElement(
              zv,
              { appear: !0 },
              au &&
                k.createElement(
                  J0,
                  {
                    distance: "constant",
                    entranceDirection: kr,
                    exitDirection: kr,
                    onFinish: Da,
                    duration: W !== "show-immediate" ? "medium" : "none",
                  },
                  function (tn) {
                    var lh = tn.className;
                    return k.createElement(
                      l,
                      {
                        ref: ae,
                        className: "Tooltip ".concat(lh),
                        style: Mr(Mr({}, Dt), F && { pointerEvents: "none" }),
                        truncate: u,
                        placement: z,
                        testId: iu() ? p : p && "".concat(p, "--unresolved"),
                        onMouseOut: Ue,
                        onMouseOver: Aa,
                      },
                      typeof o == "function" ? o({ update: Hi }) : o,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var U1 = [
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
  Sd = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syaz1gjq _k48pmoej" },
  op = function (t) {
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
      m = ne(t, U1),
      w = y.useState(!1),
      O = Z(w, 2),
      _ = O[0],
      S = O[1],
      x = y.useState(!1),
      j = Z(x, 2),
      T = j[0],
      C = j[1],
      D = c === l || s !== void 0,
      B = _ || D || T,
      F = B && b,
      U = !b || B || (b && !T),
      Q = y.useCallback(
        function () {
          C?.(!0);
        },
        [C],
      ),
      z = y.useCallback(
        function () {
          C?.(!1);
        },
        [C],
      ),
      V = y.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      J = y.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      A = k.createElement(
        Oi,
        { xcss: Sd.headCellContainer, onMouseEnter: V, onMouseLeave: J, onFocus: Q, onBlur: z },
        k.createElement(
          q1,
          { content: s === vr ? f : h },
          k.createElement(
            b_,
            { onClick: u, xcss: Kn.buttonWrapper, "aria-roledescription": g },
            k.createElement(
              si,
              { xcss: F ? Kn.hideIconHeaderWrapper : Kn.visibleHeaderWrapper },
              k.createElement("span", { className: P([Sd.text]) }, r),
            ),
            U &&
              k.createElement(
                si,
                { xcss: B ? Kn.sortIconVisibleWrapper : Kn.sortIconHiddenWrapper },
                s === vr
                  ? k.createElement(R0, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : k.createElement(x0, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return k.createElement(
      Lv,
      Y(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof i != "string" ? i : null,
        },
        m,
        { isSortable: o, sortOrder: s },
      ),
      o ? A : r,
    );
  },
  V1 = ["isRanking", "refHeight", "refWidth"];
function G1(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, sp() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var H1 = (function (e) {
    function t() {
      return (ce(this, t), G1(this, t, arguments));
    }
    return (
      De(t, e),
      le(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var i = n.refWidth,
              o = ne(n, V1),
              s = Bf(a, i);
            return k.createElement(op, Y({ inlineStyles: s }, o));
          },
        },
      ])
    );
  })(k.Component),
  W1 = Nv(H1),
  K1 = ["content", "inlineStyles", "testId", "isRanking", "innerRef", "isSortable", "onClick"],
  up = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var i = t.innerRef,
      o = t.isSortable,
      s = t.onClick,
      u = ne(t, K1);
    return k.createElement(
      Lv,
      Y(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof i != "string" ? i : null,
        },
        u,
        { onClick: s, isSortable: o },
      ),
      o
        ? k.createElement("button", { type: "button", "aria-roledescription": "Sort button" }, r)
        : r,
    );
  },
  Y1 = ["isRanking", "refHeight", "refWidth"];
function J1(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, cp() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var X1 = (function (e) {
    function t() {
      return (ce(this, t), J1(this, t, arguments));
    }
    return (
      De(t, e),
      le(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var i = n.refWidth,
              o = ne(n, Y1),
              s = Bf(a, i);
            return k.createElement(up, Y({ inlineStyles: s }, o));
          },
        },
      ])
    );
  })(k.Component),
  Z1 = Nv(X1),
  Q1 = ["cells"],
  eO = [
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
function tO(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, lp() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var rO = (function (e) {
    function t(r) {
      var n;
      return (ce(this, t), (n = tO(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      De(t, e),
      le(t, [
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
            var h = d ? Z1 : up,
              v = d ? W1 : op,
              g = i.cells,
              b = ne(i, Q1);
            return k.createElement(
              O0,
              Y({}, b, { isRanking: l, testId: f && "".concat(f, "--head") }),
              k.createElement(
                "tr",
                null,
                g.map(function (m, w) {
                  var O = m.ascendingSortTooltip,
                    _ = m.buttonAriaRoleDescription,
                    S = m.colSpan,
                    x = m.content,
                    j = m.descendingSortTooltip,
                    T = m.isIconOnlyHeader,
                    C = m.isSortable,
                    D = m.key,
                    B = m.shouldTruncate,
                    F = m.testId,
                    U = m.width,
                    Q = ne(m, eO),
                    z = "head-cell-".concat(w),
                    V = function () {
                      (n.setState({ activeSortButtonId: z }), C && c(m)());
                    };
                  return Ot("platform-component-visual-refresh")
                    ? k.createElement(
                        v,
                        Y(
                          {
                            colSpan: S,
                            content: x,
                            isFixedSize: u,
                            isIconOnlyHeader: T,
                            isSortable: !!C,
                            isRanking: l,
                            key: D || w,
                            headCellId: z,
                            activeSortButtonId: p,
                            onClick: V,
                            testId: F || f,
                            shouldTruncate: B,
                            sortOrder: D === o ? s : void 0,
                            width: U,
                            ascendingSortTooltip: O,
                            descendingSortTooltip: j,
                            buttonAriaRoleDescription: _,
                          },
                          Q,
                        ),
                      )
                    : k.createElement(
                        h,
                        Y(
                          {
                            colSpan: S,
                            content: x,
                            isFixedSize: u,
                            isSortable: !!C,
                            isRanking: l,
                            key: D || w,
                            onClick: C ? c(m) : void 0,
                            testId: F || f,
                            shouldTruncate: B,
                            sortOrder: D === o ? s : void 0,
                            width: U,
                          },
                          Q,
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
  nO = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function aO(e) {
  switch (e) {
    case ai:
      return vr;
    case vr:
      return ai;
    default:
      return e;
  }
}
var iO = function (t) {
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
      O = w === void 0 ? we : w,
      _ = t.onSort,
      S = _ === void 0 ? we : _,
      x = t.page,
      j = x === void 0 ? 1 : x,
      T = t.emptyView,
      C = t.isRankable,
      D = C === void 0 ? !1 : C,
      B = t.isRankingDisabled,
      F = B === void 0 ? !1 : B,
      U = t.onRankStart,
      Q = U === void 0 ? we : U,
      z = t.onRankEnd,
      V = z === void 0 ? we : z,
      J = t.loadingSpinnerSize,
      A = t.paginationi18n,
      q =
        A === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : A,
      he = y.useState(!1),
      W = Z(he, 2),
      be = W[0],
      de = W[1],
      fe = y.useRef(null),
      ge = ca({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.2.8",
      }),
      ze = ca({
        fn: V,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.2.8",
      });
    y.useEffect(
      function () {
        (ti(o, n), ig(n));
      },
      [o, n],
    );
    var _e = function (Ee) {
        return function () {
          var Ue = Ee.key;
          if (Ue) {
            if (ge && D && Ue === o && s === ai) {
              ge({ key: null, sortOrder: null, item: Ee });
              return;
            }
            var nr = Ue !== o ? vr : aO(s);
            ge && ge({ key: Ue, item: Ee, sortOrder: nr });
          }
        };
      },
      tt = function (Ee, Ue) {
        O(Ee, Ue);
      },
      ue = function (Ee) {
        (de(!0), Q(Ee));
      },
      vt = function (Ee) {
        (de(!1), ze(Ee));
      },
      Wt = function () {
        return J || (Ff(i || [], j, m).length > 2 ? ii : Pb);
      },
      rt = function () {
        return h ? k.createElement(Fb, { testId: l }) : T && k.createElement(Bb, { testId: l }, T);
      },
      pt = i && i.length,
      Se,
      ht = !1;
    (d && Number.isInteger(d) && m && pt && pt <= d
      ? ((Se = Math.ceil(d / m)), (ht = !0))
      : (Se = pt && m ? Math.ceil(pt / m) : 0),
      (Se = Se < 1 ? 1 : Se));
    var gt = j > Se ? Se : j,
      nt = !!pt,
      Qr = Wt(),
      qe = rt();
    return k.createElement(
      k.Fragment,
      null,
      k.createElement(
        lv,
        {
          isLoading: h && nt,
          spinnerSize: Qr,
          targetRef: function () {
            return fe.current;
          },
          testId: l,
          loadingLabel: u,
        },
        k.createElement(
          Lb,
          { isFixedSize: g, "aria-label": f, hasDataRow: nt, testId: l, isLoading: h },
          !!r && k.createElement($b, null, r),
          n &&
            k.createElement(rO, {
              head: n,
              onSort: _e,
              sortKey: o,
              sortOrder: s,
              isRanking: be,
              isRankable: D,
              testId: l,
            }),
          nt &&
            k.createElement(sO, {
              ref: fe,
              highlightedRowIndex: a,
              rows: i,
              head: n,
              sortKey: o,
              sortOrder: s,
              rowsPerPage: m,
              page: gt,
              isFixedSize: g || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: ht,
              testId: l,
              isRankable: D,
              isRanking: be,
              onRankStart: ue,
              onRankEnd: vt,
              isRankingDisabled: F || h || !1,
            }),
        ),
      ),
      Se <= 1
        ? null
        : k.createElement(
            Nb,
            { testId: l },
            k.createElement(_0, {
              value: gt,
              onChange: tt,
              total: Se,
              i18n: q,
              isDisabled: h,
              testId: l,
            }),
          ),
      !nt &&
        qe &&
        k.createElement(uv, { isLoading: h, spinnerSize: ii, testId: l, loadingLabel: u }, qe),
    );
  },
  oO = y.lazy(function () {
    return cg(
      () => import("./body-dIJL-Ytl.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  sO = y.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      i = t.isRanking,
      o = t.onRankStart,
      s = t.onRankEnd,
      u = t.isRankingDisabled,
      c = ne(t, nO),
      l = a && !c.sortKey,
      d = y.useState(!1),
      f = Z(d, 2),
      p = f[0],
      h = f[1];
    y.useEffect(
      function () {
        l && h(!0);
      },
      [l],
    );
    var v = k.createElement(ty, Y({ ref: r }, c));
    return l && p
      ? k.createElement(
          ny,
          { fallback: v },
          k.createElement(
            y.Suspense,
            { fallback: v },
            k.createElement(
              oO,
              Y({ ref: r }, c, {
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
function uO(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, dp() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function dp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (dp = function () {
    return !!e;
  })();
}
var Ys = (function (e) {
  function t() {
    var r;
    ce(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = uO(this, t, [].concat(a))),
      E(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      E(r, "onSetPageHandler", function (o, s) {
        var u = r.props.onSetPage;
        u && (u(o, s), r.setState({ page: o }));
      }),
      E(r, "onSortHandler", function (o, s) {
        var u = o.key,
          c = o.item,
          l = o.sortOrder,
          d = r.props.onSort;
        d && (d({ key: u, item: c, sortOrder: l }, s), r.setState({ sortKey: u, sortOrder: l }));
      }),
      E(r, "onRankEndIfExistsHandler", function (o) {
        r.props.onRankEnd && r.props.onRankEnd(o);
      }),
      E(r, "onRankEndHandler", function (o) {
        var s = o.destination,
          u = r.state,
          c = u.rows,
          l = u.page,
          d = r.props.rowsPerPage;
        if (!s || !c) {
          r.onRankEndIfExistsHandler(o);
          return;
        }
        var f = og(o, c, l, d);
        (r.setState({ rows: f }), r.onRankEndIfExistsHandler(o));
      }),
      r
    );
  }
  return (
    De(t, e),
    le(t, [
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
            x = u.testId,
            j = u.label;
          return k.createElement(iO, {
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
            testId: x,
            label: j,
          });
        },
      },
    ])
  );
})(k.Component);
E(Ys, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: we,
  onSort: we,
  rowsPerPage: 1 / 0,
});
const cO = (e, t, r, n) => {
    const a = Object.keys(n).map((i) => ({ key: i, content: i, isSortable: t, width: 25 }));
    return (r && a.push({ key: "delete", content: "Delete", isSortable: t, width: 25 }), a);
  },
  fp = (e, t, r, n) => ({ cells: cO(e, t, r, n) });
function K(e) {
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
var lO = {};
function Pi() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : lO;
}
var vp = Object.assign,
  li = Object.getOwnPropertyDescriptor,
  Et = Object.defineProperty,
  Ri = Object.prototype,
  ps = [];
Object.freeze(ps);
var pp = {};
Object.freeze(pp);
var dO = typeof Proxy < "u",
  fO = Object.toString();
function hp() {
  dO || K("Proxy not available");
}
function gp(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var $r = function () {};
function ut(e) {
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
function Ai(e) {
  return e !== null && typeof e == "object";
}
function Qt(e) {
  if (!Ai(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === fO;
}
function bp(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function ji(e, t, r) {
  Et(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function yp(e, t, r) {
  Et(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function _r(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return Ai(n) && n[r] === !0;
    }
  );
}
function Yr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function vO(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Bt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var _p = typeof Object.getOwnPropertySymbols < "u";
function pO(e) {
  var t = Object.keys(e);
  if (!_p) return t;
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
var Ii =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : _p
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function mp(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Ut(e, t) {
  return Ri.hasOwnProperty.call(e, t);
}
var hO =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Ii(t).forEach(function (n) {
        r[n] = li(t, n);
      }),
      r
    );
  };
function Le(e, t) {
  return !!(e & t);
}
function $e(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function Ed(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function gO(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, yO(n.key), n));
  }
}
function Jr(e, t, r) {
  return (t && gO(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Nr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = _O(e)) || t) {
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
function wp(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), hs(e, t));
}
function hs(e, t) {
  return (
    (hs = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    hs(e, t)
  );
}
function bO(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function yO(e) {
  var t = bO(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _O(e, t) {
  if (e) {
    if (typeof e == "string") return Ed(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Ed(e, t)
          : void 0
    );
  }
}
var wt = Symbol("mobx-stored-annotations");
function xt(e) {
  function t(r, n) {
    if (Ea(n)) return e.decorate_20223_(r, n);
    Sa(r, n, e);
  }
  return Object.assign(t, e);
}
function Sa(e, t, r) {
  (Ut(e, wt) || ji(e, wt, gr({}, e[wt])), xO(r) || (e[wt][t] = r));
}
function mO(e) {
  return (Ut(e, wt) || ji(e, wt, gr({}, e[wt])), e[wt]);
}
function Ea(e) {
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
        (this.lowestObserverState_ = X.NOT_TRACKING_),
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
        return $p(this);
      }),
      (t.reportChanged = function () {
        (Je(), Np(this), Xe());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      Jr(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return Le(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = $e(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Le(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = $e(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Le(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = $e(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
rr.isBeingObservedMask_ = 1;
rr.isPendingUnobservationMask_ = 2;
rr.diffValueMask_ = 4;
var Js = _r("Atom", rr);
function Op(e, t, r) {
  (t === void 0 && (t = $r), r === void 0 && (r = $r));
  var n = new rr(e);
  return (t !== $r && jk(n, t), r !== $r && Up(n, r), n);
}
function wO(e, t) {
  return th(e, t);
}
function OO(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var di = { structural: wO, default: OO };
function br(e, t, r) {
  return Wp(e)
    ? e
    : Array.isArray(e)
      ? se.array(e, { name: r })
      : Qt(e)
        ? se.object(e, void 0, { name: r })
        : Yr(e)
          ? se.map(e, { name: r })
          : Bt(e)
            ? se.set(e, { name: r })
            : typeof e == "function" && !ya(e) && !_a(e)
              ? bp(e)
                ? Wr(e)
                : ba(r, e)
              : e;
}
function kO(e, t, r) {
  if (e == null || zi(e) || Bi(e) || wr(e) || mt(e)) return e;
  if (Array.isArray(e)) return se.array(e, { name: r, deep: !1 });
  if (Qt(e)) return se.object(e, void 0, { name: r, deep: !1 });
  if (Yr(e)) return se.map(e, { name: r, deep: !1 });
  if (Bt(e)) return se.set(e, { name: r, deep: !1 });
}
function Di(e) {
  return e;
}
function SO(e, t) {
  return th(e, t) ? t : e;
}
var EO = "override";
function xO(e) {
  return e.annotationType_ === EO;
}
function xa(e, t) {
  return { annotationType_: e, options_: t, make_: CO, extend_: PO, decorate_20223_: RO };
}
function CO(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (ya(r.value)) return 1;
  var i = kp(e, this, t, r, !1);
  return (Et(n, t, i), 2);
}
function PO(e, t, r, n) {
  var a = kp(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function RO(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    i = this,
    o = function (c) {
      var l, d, f, p;
      return yr(
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
        ya(l) || (l = o(l)),
        (c = i.options_) != null && c.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var s;
    return (
      ya(e) || (e = o(e)),
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
  K(
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
function AO(e, t, r, n) {
  (t.annotationType_, n.value);
}
function kp(e, t, r, n, a) {
  var i, o, s, u, c, l, d;
  (a === void 0 && (a = R.safeDescriptors), AO(e, t, r, n));
  var f = n.value;
  if ((i = t.options_) != null && i.bound) {
    var p;
    f = f.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return {
    value: yr(
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
function Sp(e, t) {
  return { annotationType_: e, options_: t, make_: jO, extend_: IO, decorate_20223_: DO };
}
function jO(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Ut(e.target_, t) || !_a(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (_a(r.value)) return 1;
  var i = Ep(e, this, t, r, !1, !1);
  return (Et(n, t, i), 2);
}
function IO(e, t, r, n) {
  var a,
    i = Ep(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, i, n);
}
function DO(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    _a(e) || (e = Wr(e)),
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
function TO(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Ep(e, t, r, n, a, i) {
  (i === void 0 && (i = R.safeDescriptors), TO(e, t, r, n));
  var o = n.value;
  if ((_a(o) || (o = Wr(o)), a)) {
    var s;
    ((o = o.bind((s = e.proxy_) != null ? s : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: i ? e.isPlainObject_ : !0, enumerable: !1, writable: !i };
}
function Xs(e, t) {
  return { annotationType_: e, options_: t, make_: MO, extend_: LO, decorate_20223_: $O };
}
function MO(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function LO(e, t, r, n) {
  return (
    NO(e, this, t, r),
    e.defineComputedProperty_(t, gr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function $O(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var i = Xr(this)[$],
        o = gr({}, r.options_, { get: e, context: this });
      (o.name || (o.name = "ObservableObject." + n.toString()), i.values_.set(n, new ct(o)));
    }),
    function () {
      return this[$].getObservablePropValue_(n);
    }
  );
}
function NO(e, t, r, n) {
  (t.annotationType_, n.get);
}
function Ti(e, t) {
  return { annotationType_: e, options_: t, make_: FO, extend_: BO, decorate_20223_: zO };
}
function FO(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function BO(e, t, r, n) {
  var a, i;
  return (
    qO(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (i = this.options_) == null ? void 0 : i.enhancer) != null ? a : br,
      n,
    )
  );
}
function zO(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    i = new WeakSet();
  function o(s, u) {
    var c,
      l,
      d = Xr(s)[$],
      f = new fr(
        u,
        (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : br,
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
function qO(e, t, r, n) {
  t.annotationType_;
}
var UO = "true",
  VO = xp();
function xp(e) {
  return { annotationType_: UO, options_: e, make_: GO, extend_: HO, decorate_20223_: WO };
}
function GO(e, t, r, n) {
  var a, i;
  if (r.get) return Mi.make_(e, t, r, n);
  if (r.set) {
    var o = yr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: R.safeDescriptors ? e.isPlainObject_ : !0,
          set: o,
        }) === null
        ? 0
        : 2
      : (Et(n, t, { configurable: !0, set: o }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var s;
    if (bp(r.value)) {
      var u,
        c = (u = this.options_) != null && u.autoBind ? Wr.bound : Wr;
      return c.make_(e, t, r, n);
    }
    var l = (s = this.options_) != null && s.autoBind ? ba.bound : ba;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? se.ref : se;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function HO(e, t, r, n) {
  var a, i;
  if (r.get) return Mi.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: R.safeDescriptors ? e.isPlainObject_ : !0, set: yr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var s = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? se.ref : se;
  return s.extend_(e, t, r, n);
}
function WO(e, t) {
  K("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var KO = "observable",
  YO = "observable.ref",
  JO = "observable.shallow",
  XO = "observable.struct",
  Cp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Cp);
function qa(e) {
  return e || Cp;
}
var gs = Ti(KO),
  ZO = Ti(YO, { enhancer: Di }),
  QO = Ti(JO, { enhancer: kO }),
  ek = Ti(XO, { enhancer: SO }),
  Pp = xt(gs);
function Ua(e) {
  return e.deep === !0 ? br : e.deep === !1 ? Di : rk(e.defaultDecorator);
}
function tk(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : xp(e)) : void 0;
}
function rk(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : br;
}
function Rp(e, t, r) {
  if (Ea(t)) return gs.decorate_20223_(e, t);
  if (hr(t)) {
    Sa(e, t, gs);
    return;
  }
  return Wp(e)
    ? e
    : Qt(e)
      ? se.object(e, t, r)
      : Array.isArray(e)
        ? se.array(e, t)
        : Yr(e)
          ? se.map(e, t)
          : Bt(e)
            ? se.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : se.box(e, t);
}
vp(Rp, Pp);
var nk = {
    box: function (t, r) {
      var n = qa(r);
      return new fr(t, Ua(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = qa(r);
      return (R.useProxies === !1 || n.proxy === !1 ? tS : Gk)(t, Ua(n), n.name);
    },
    map: function (t, r) {
      var n = qa(r);
      return new Yp(t, Ua(n), n.name);
    },
    set: function (t, r) {
      var n = qa(r);
      return new Jp(t, Ua(n), n.name);
    },
    object: function (t, r, n) {
      return Or(function () {
        return Mk(R.useProxies === !1 || n?.proxy === !1 ? Xr({}, n) : qk({}, n), t, r);
      });
    },
    ref: xt(ZO),
    shallow: xt(QO),
    deep: Pp,
    struct: xt(ek),
  },
  se = vp(Rp, nk),
  Ap = "computed",
  ak = "computed.struct",
  bs = Xs(Ap),
  ik = Xs(ak, { equals: di.structural }),
  Mi = function (t, r) {
    if (Ea(r)) return bs.decorate_20223_(t, r);
    if (hr(r)) return Sa(t, r, bs);
    if (Qt(t)) return xt(Xs(Ap, t));
    var n = Qt(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new ct(n));
  };
Object.assign(Mi, bs);
Mi.struct = xt(ik);
var xd,
  Cd,
  fi = 0,
  ok = 1,
  sk =
    (xd = (Cd = li(function () {}, "name")) == null ? void 0 : Cd.configurable) != null ? xd : !1,
  Pd = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function yr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return uk(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    sk && ((Pd.value = e), Et(a, "name", Pd)),
    a
  );
}
function uk(e, t, r, n, a) {
  var i = ck(e, t);
  try {
    return r.apply(n, a);
  } catch (o) {
    throw ((i.error_ = o), o);
  } finally {
    lk(i);
  }
}
function ck(e, t, r, n) {
  var a = !1,
    i = 0,
    o = R.trackingDerivation,
    s = !t || !o;
  Je();
  var u = R.allowStateChanges;
  s && (mr(), (u = Li(!0)));
  var c = Zs(!0),
    l = {
      runAsAction_: s,
      prevDerivation_: o,
      prevAllowStateChanges_: u,
      prevAllowStateReads_: c,
      notifySpy_: a,
      startTime_: i,
      actionId_: ok++,
      parentActionId_: fi,
    };
  return ((fi = l.actionId_), l);
}
function lk(e) {
  (fi !== e.actionId_ && K(30),
    (fi = e.parentActionId_),
    e.error_ !== void 0 && (R.suppressReactionErrors = !0),
    $i(e.prevAllowStateChanges_),
    ia(e.prevAllowStateReads_),
    Xe(),
    e.runAsAction_ && Vt(e.prevDerivation_),
    (R.suppressReactionErrors = !1));
}
function dk(e, t) {
  var r = Li(e);
  try {
    return t();
  } finally {
    $i(r);
  }
}
function Li(e) {
  var t = R.allowStateChanges;
  return ((R.allowStateChanges = e), t);
}
function $i(e) {
  R.allowStateChanges = e;
}
var fr = (function (e) {
    function t(n, a, i, o, s) {
      var u;
      return (
        i === void 0 && (i = "ObservableValue"),
        s === void 0 && (s = di.default),
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
    wp(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== R.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (Ke(this)) {
          var i = Ye(this, { object: this, type: Ct, newValue: a });
          if (!i) return R.UNCHANGED;
          a = i.newValue;
        }
        return (
          (a = this.enhancer(a, this.value_, this.name_)),
          this.equals(this.value_, a) ? R.UNCHANGED : a
        );
      }),
      (r.setNewValue_ = function (a) {
        var i = this.value_;
        ((this.value_ = a),
          this.reportChanged(),
          ot(this) && st(this, { type: Ct, object: this, newValue: a, oldValue: i }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (a) {
        return Ca(this, a);
      }),
      (r.observe_ = function (a, i) {
        return (
          i &&
            a({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: Ct,
              newValue: this.value_,
              oldValue: void 0,
            }),
          Pa(this, a)
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
        return mp(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(rr),
  ct = (function () {
    function e(r) {
      ((this.dependenciesState_ = X.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = X.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new pi(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = vi.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || K(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = yr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? di.structural : di.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        gk(this);
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
          (this.isComputing && K(32, this.name_, this.derivation),
          R.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          ys(this) &&
            (this.warnAboutUntrackedRead_(), Je(), (this.value_ = this.computeValue_(!1)), Xe());
        else if (($p(this), ys(this))) {
          var n = R.trackingContext;
          (this.keepAlive_ && !n && (R.trackingContext = this),
            this.trackAndCompute() && hk(this),
            (R.trackingContext = n));
        }
        var a = this.value_;
        if (Ja(a)) throw a.cause;
        return a;
      }),
      (t.set = function (n) {
        if (this.setter_) {
          (this.isRunningSetter && K(33, this.name_), (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, n);
          } finally {
            this.isRunningSetter = !1;
          }
        } else K(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var n = this.value_,
          a = this.dependenciesState_ === X.NOT_TRACKING_,
          i = this.computeValue_(!0),
          o = a || Ja(n) || Ja(i) || !this.equals_(n, i);
        return (o && (this.value_ = i), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = Li(!1),
          i;
        if (n) i = jp(this, this.derivation, this.scope_);
        else if (R.disableErrorBoundaries === !0) i = this.derivation.call(this.scope_);
        else
          try {
            i = this.derivation.call(this.scope_);
          } catch (o) {
            i = new pi(o);
          }
        return ($i(a), (this.isComputing = !1), i);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (_s(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var i = this,
          o = !0,
          s = void 0;
        return xk(function () {
          var u = i.get();
          if (!o || a) {
            var c = mr();
            (n({
              observableKind: "computed",
              debugObjectName: i.name_,
              type: Ct,
              object: i,
              newValue: u,
              oldValue: s,
            }),
              Vt(c));
          }
          ((o = !1), (s = u));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return mp(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      Jr(e, [
        {
          key: "isComputing",
          get: function () {
            return Le(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = $e(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Le(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = $e(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Le(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = $e(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Le(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = $e(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Le(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = $e(this.flags_, e.diffValueMask_, n === 1);
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
var Ni = _r("ComputedValue", ct),
  X;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(X || (X = {}));
var vi;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(vi || (vi = {}));
var pi = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function Ja(e) {
  return e instanceof pi;
}
function ys(e) {
  switch (e.dependenciesState_) {
    case X.UP_TO_DATE_:
      return !1;
    case X.NOT_TRACKING_:
    case X.STALE_:
      return !0;
    case X.POSSIBLY_STALE_: {
      for (var t = Zs(!0), r = mr(), n = e.observing_, a = n.length, i = 0; i < a; i++) {
        var o = n[i];
        if (Ni(o)) {
          if (R.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Vt(r), ia(t), !0);
            }
          if (e.dependenciesState_ === X.STALE_) return (Vt(r), ia(t), !0);
        }
      }
      return (Dp(e), Vt(r), ia(t), !1);
    }
  }
}
function jp(e, t, r) {
  var n = Zs(!0);
  (Dp(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++R.runId));
  var a = R.trackingDerivation;
  ((R.trackingDerivation = e), R.inBatch++);
  var i;
  if (R.disableErrorBoundaries === !0) i = t.call(r);
  else
    try {
      i = t.call(r);
    } catch (o) {
      i = new pi(o);
    }
  return (R.inBatch--, (R.trackingDerivation = a), fk(e), ia(n), i);
}
function fk(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = X.UP_TO_DATE_,
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
    (u.diffValue === 0 && Mp(u, e), (u.diffValue = 0));
  }
  for (; a--; ) {
    var c = r[a];
    c.diffValue === 1 && ((c.diffValue = 0), pk(c, e));
  }
  n !== X.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function _s(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Mp(t[r], e);
  e.dependenciesState_ = X.NOT_TRACKING_;
}
function Ip(e) {
  var t = mr();
  try {
    return e();
  } finally {
    Vt(t);
  }
}
function mr() {
  var e = R.trackingDerivation;
  return ((R.trackingDerivation = null), e);
}
function Vt(e) {
  R.trackingDerivation = e;
}
function Zs(e) {
  var t = R.allowStateReads;
  return ((R.allowStateReads = e), t);
}
function ia(e) {
  R.allowStateReads = e;
}
function Dp(e) {
  if (e.dependenciesState_ !== X.UP_TO_DATE_) {
    e.dependenciesState_ = X.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = X.UP_TO_DATE_;
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
  Tp = !1,
  R = (function () {
    var e = Pi();
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
            Tp || K(35);
          }, 1),
          new Xa())
    );
  })();
function vk() {
  if (((R.pendingReactions.length || R.inBatch || R.isRunningReactions) && K(36), (Tp = !0), Za)) {
    var e = Pi();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (R = new Xa()));
  }
}
function pk(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Mp(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Lp(e));
}
function Lp(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), R.pendingUnobservations.push(e));
}
function Je() {
  R.inBatch++;
}
function Xe() {
  if (--R.inBatch === 0) {
    Fp();
    for (var e = R.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof ct && r.suspend_()));
    }
    R.pendingUnobservations = [];
  }
}
function $p(e) {
  var t = R.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && R.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && R.inBatch > 0 && Lp(e), !1);
}
function Np(e) {
  e.lowestObserverState_ !== X.STALE_ &&
    ((e.lowestObserverState_ = X.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === X.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = X.STALE_));
    }));
}
function hk(e) {
  e.lowestObserverState_ !== X.STALE_ &&
    ((e.lowestObserverState_ = X.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === X.POSSIBLY_STALE_
        ? (t.dependenciesState_ = X.STALE_)
        : t.dependenciesState_ === X.UP_TO_DATE_ && (e.lowestObserverState_ = X.UP_TO_DATE_);
    }));
}
function gk(e) {
  e.lowestObserverState_ === X.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = X.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === X.UP_TO_DATE_ &&
        ((t.dependenciesState_ = X.POSSIBLY_STALE_), t.onBecomeStale_());
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
      (this.dependenciesState_ = X.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = vi.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), R.pendingReactions.push(this), Fp());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Je(), (this.isScheduled = !1));
        var n = R.trackingContext;
        if (((R.trackingContext = this), ys(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((R.trackingContext = n), Xe());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (Je(), (this.isRunning = !0));
        var a = R.trackingContext;
        R.trackingContext = this;
        var i = jp(this, n, void 0);
        ((R.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && _s(this),
          Ja(i) && this.reportExceptionInDerivation_(i.cause),
          Xe());
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var a = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (R.disableErrorBoundaries) throw n;
      var i = "[mobx] uncaught error in '" + this + "'";
      (R.suppressReactionErrors || console.error(i, n),
        R.globalReactionErrorHandlers.forEach(function (o) {
          return o(n, a);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Je(), _s(this), Xe()));
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
        i
      );
    }),
    (t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (t.trace = function (n) {}),
    Jr(e, [
      {
        key: "isDisposed",
        get: function () {
          return Le(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = $e(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Le(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = $e(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Le(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = $e(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Le(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = $e(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Le(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = $e(this.flags_, e.diffValueMask_, n === 1);
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
var bk = 100,
  ms = function (t) {
    return t();
  };
function Fp() {
  R.inBatch > 0 || R.isRunningReactions || ms(yk);
}
function yk() {
  R.isRunningReactions = !0;
  for (var e = R.pendingReactions, t = 0; e.length > 0; ) {
    ++t === bk && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  R.isRunningReactions = !1;
}
var hi = _r("Reaction", Rt);
function _k(e) {
  var t = ms;
  ms = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function oa() {
  return !1;
}
function mk(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Bp = "action",
  wk = "action.bound",
  zp = "autoAction",
  Ok = "autoAction.bound",
  kk = "<unnamed action>",
  ws = xa(Bp),
  Sk = xa(wk, { bound: !0 }),
  Os = xa(zp, { autoAction: !0 }),
  Ek = xa(Ok, { autoAction: !0, bound: !0 });
function qp(e) {
  var t = function (n, a) {
    if (ut(n)) return yr(n.name || kk, n, e);
    if (ut(a)) return yr(n, a, e);
    if (Ea(a)) return (e ? Os : ws).decorate_20223_(n, a);
    if (hr(a)) return Sa(n, a, e ? Os : ws);
    if (hr(n)) return xt(xa(e ? zp : Bp, { name: n, autoAction: e }));
  };
  return t;
}
var ke = qp(!1);
Object.assign(ke, ws);
var ba = qp(!0);
Object.assign(ba, Os);
ke.bound = xt(Sk);
ba.bound = xt(Ek);
function ya(e) {
  return ut(e) && e.isMobxAction === !0;
}
function xk(e, t) {
  var r, n, a, i;
  t === void 0 && (t = pp);
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    s = !t.scheduler && !t.delay,
    u;
  if (s)
    u = new Rt(
      o,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var c = Pk(t),
      l = !1;
    u = new Rt(
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
var Ck = function (t) {
  return t();
};
function Pk(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Ck;
}
var Rk = "onBO",
  Ak = "onBUO";
function jk(e, t, r) {
  return Vp(Rk, e, t, r);
}
function Up(e, t, r) {
  return Vp(Ak, e, t, r);
}
function Vp(e, t, r, n) {
  var a = yi(t),
    i = ut(n) ? n : r,
    o = e + "L";
  return (
    a[o] ? a[o].add(i) : (a[o] = new Set([i])),
    function () {
      var s = a[o];
      s && (s.delete(i), s.size === 0 && delete a[o]);
    }
  );
}
var Ik = "never",
  Va = "always",
  Dk = "observed";
function Tk(e) {
  e.isolateGlobalState === !0 && vk();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (R.useProxies = t === Va ? !0 : t === Ik ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (R.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Va ? Va : r === Dk;
    ((R.enforceActions = n), (R.allowStateChanges = !(n === !0 || n === Va)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (a) {
    a in e && (R[a] = !!e[a]);
  }),
    (R.allowStateReads = !R.observableRequiresReaction),
    e.reactionScheduler && _k(e.reactionScheduler));
}
function Mk(e, t, r, n) {
  var a = hO(t);
  return (
    Or(function () {
      var i = Xr(e, n)[$];
      Ii(a).forEach(function (o) {
        i.extend_(o, a[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function Lk(e, t) {
  return Gp(yi(e, t));
}
function Gp(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = $k(e.observing_).map(Gp)),
    t
  );
}
function $k(e) {
  return Array.from(new Set(e));
}
var Nk = 0;
function Hp() {
  this.message = "FLOW_CANCELLED";
}
Hp.prototype = Object.create(Error.prototype);
var Fo = Sp("flow"),
  Fk = Sp("flow.bound", { bound: !0 }),
  Wr = Object.assign(function (t, r) {
    if (Ea(r)) return Fo.decorate_20223_(t, r);
    if (hr(r)) return Sa(t, r, Fo);
    var n = t,
      a = n.name || "<unnamed flow>",
      i = function () {
        var s = this,
          u = arguments,
          c = ++Nk,
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
              if (ut(O?.then)) {
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
              f && Rd(f);
              var h = l.return(void 0),
                v = Promise.resolve(h.value);
              (v.then($r, $r), Rd(v), d(new Hp()));
            } catch (g) {
              d(g);
            }
          })),
          p
        );
      };
    return ((i.isMobXFlow = !0), i);
  }, Fo);
Wr.bound = xt(Fk);
function Rd(e) {
  ut(e.cancel) && e.cancel();
}
function _a(e) {
  return e?.isMobXFlow === !0;
}
function Bk(e, t) {
  return e ? zi(e) || !!e[$] || Js(e) || hi(e) || Ni(e) : !1;
}
function Wp(e) {
  return Bk(e);
}
function zt(e, t) {
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
var zk = {
  has: function (t, r) {
    return Lr(t).has_(r);
  },
  get: function (t, r) {
    return Lr(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return hr(r) ? ((a = Lr(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return hr(r) ? ((n = Lr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = Lr(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return Lr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    K(13);
  },
};
function qk(e, t) {
  var r, n;
  return (
    hp(),
    (e = Xr(e, t)),
    (n = (r = e[$]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, zk))
  );
}
function Ke(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Ca(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    gp(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Ye(e, t) {
  var r = mr();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, i = n.length;
      a < i && ((t = n[a](t)), t && !t.type && K(14), !!t);
      a++
    );
    return t;
  } finally {
    Vt(r);
  }
}
function ot(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Pa(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    gp(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function st(e, t) {
  var r = mr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, i = n.length; a < i; a++) n[a](t);
    Vt(r);
  }
}
function Fi(e, t, r) {
  return (
    Or(function () {
      var n,
        a = Xr(e, r)[$];
      ((n = t) != null || (t = mO(e)),
        Ii(t).forEach(function (i) {
          return a.make_(i, t[i]);
        }));
    }),
    e
  );
}
var Ad = "splice",
  Ct = "update",
  Uk = 1e4,
  Vk = {
    get: function (t, r) {
      var n = t[$];
      return r === $
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Ut(gi, r)
              ? gi[r]
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
      K(15);
    },
  },
  Qs = (function () {
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
        return Ca(this, n);
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
          Pa(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && K("Out of range: " + n);
        var a = this.values_.length;
        if (n !== a)
          if (n > a) {
            for (var i = new Array(n - a), o = 0; o < n - a; o++) i[o] = void 0;
            this.spliceWithArray_(a, 0, i);
          } else this.spliceWithArray_(n, a - n);
      }),
      (t.updateArrayLength_ = function (n, a) {
        (n !== this.lastKnownLength_ && K(16),
          (this.lastKnownLength_ += a),
          this.legacyMode_ && a > 0 && eh(n + a + 1));
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
          i === void 0 && (i = ps),
          Ke(this))
        ) {
          var u = Ye(this, { object: this.proxy_, type: Ad, index: n, removedCount: a, added: i });
          if (!u) return ps;
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
        if (i.length < Uk) {
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
        var o = !this.owned_ && oa(),
          s = ot(this),
          u =
            s || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: Ct,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: a,
                  oldValue: i,
                }
              : null;
        (this.atom_.reportChanged(), s && st(this, u));
      }),
      (t.notifyArraySplice_ = function (n, a, i) {
        var o = !this.owned_ && oa(),
          s = ot(this),
          u =
            s || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Ad,
                  index: n,
                  removed: i,
                  added: a,
                  removedCount: i.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), s && st(this, u));
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
        if ((this.legacyMode_ && n > i.length && K(17, n, i.length), n < i.length)) {
          this.atom_;
          var o = i[n];
          if (Ke(this)) {
            var s = Ye(this, { type: Ct, object: this.proxy_, index: n, newValue: a });
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
function Gk(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    hp(),
    Or(function () {
      var a = new Qs(r, t, n, !1);
      yp(a.values_, $, a);
      var i = new Proxy(a.values_, Vk);
      return ((a.proxy_ = i), e && e.length && a.spliceWithArray_(0, 0, e), i);
    })
  );
}
var gi = {
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
    return (R.trackingDerivation && K(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    R.trackingDerivation && K(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[$],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
oe("at", Be);
oe("concat", Be);
oe("flat", Be);
oe("includes", Be);
oe("indexOf", Be);
oe("join", Be);
oe("lastIndexOf", Be);
oe("slice", Be);
oe("toString", Be);
oe("toLocaleString", Be);
oe("toSorted", Be);
oe("toSpliced", Be);
oe("with", Be);
oe("every", ft);
oe("filter", ft);
oe("find", ft);
oe("findIndex", ft);
oe("findLast", ft);
oe("findLastIndex", ft);
oe("flatMap", ft);
oe("forEach", ft);
oe("map", ft);
oe("some", ft);
oe("toReversed", ft);
oe("reduce", Kp);
oe("reduceRight", Kp);
function oe(e, t) {
  typeof Array.prototype[e] == "function" && (gi[e] = t(e));
}
function Be(e) {
  return function () {
    var t = this[$];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function ft(e) {
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
function Kp(e) {
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
var Hk = _r("ObservableArrayAdministration", Qs);
function Bi(e) {
  return Ai(e) && Hk(e[$]);
}
var Wk = {},
  Xt = "add",
  bi = "delete",
  Yp = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = br),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[$] = Wk),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        ut(Map) || K(18),
        Or(function () {
          ((i.keysAtom_ = Op("ObservableMap.keys()")),
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
        if (!R.trackingDerivation) return this.has_(n);
        var i = this.hasMap_.get(n);
        if (!i) {
          var o = (i = new fr(this.has_(n), Di, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            Up(o, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return i.get();
      }),
      (t.set = function (n, a) {
        var i = this.has_(n);
        if (Ke(this)) {
          var o = Ye(this, { type: i ? Ct : Xt, object: this, newValue: a, name: n });
          if (!o) return this;
          a = o.newValue;
        }
        return (i ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, Ke(this))) {
          var i = Ye(this, { type: bi, object: this, name: n });
          if (!i) return !1;
        }
        if (this.has_(n)) {
          var o = oa(),
            s = ot(this),
            u =
              s || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: bi,
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
            s && st(this, u),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var i = this.data_.get(n);
        if (((a = i.prepareNewValue_(a)), a !== R.UNCHANGED)) {
          var o = oa(),
            s = ot(this),
            u =
              s || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Ct,
                    object: this,
                    oldValue: i.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (i.setNewValue_(a), s && st(this, u));
        }
      }),
      (t.addValue_ = function (n, a) {
        var i = this;
        (this.keysAtom_,
          zt(function () {
            var c,
              l = new fr(a, i.enhancer_, "ObservableMap.key", !1);
            (i.data_.set(n, l),
              (a = l.value_),
              (c = i.hasMap_.get(n)) == null || c.setNewValue_(!0),
              i.keysAtom_.reportChanged());
          }));
        var o = oa(),
          s = ot(this),
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
        s && st(this, u);
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
        return jd({
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
        return jd({
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
          wr(n) && (n = new Map(n)),
          zt(function () {
            Qt(n)
              ? pO(n).forEach(function (i) {
                  return a.set(i, n[i]);
                })
              : Array.isArray(n)
                ? n.forEach(function (i) {
                    var o = i[0],
                      s = i[1];
                    return a.set(o, s);
                  })
                : Yr(n)
                  ? (vO(n) || K(19, n),
                    n.forEach(function (i, o) {
                      return a.set(o, i);
                    }))
                  : n != null && K(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        zt(function () {
          Ip(function () {
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
          zt(function () {
            for (
              var i = Kk(n), o = new Map(), s = !1, u = Nr(a.data_.keys()), c;
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
                for (var O = a.data_.keys(), _ = o.keys(), S = O.next(), x = _.next(); !S.done; ) {
                  if (S.value !== x.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = O.next()), (x = _.next()));
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
        return Pa(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ca(this, n);
      }),
      Jr(e, [
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
  wr = _r("ObservableMap", Yp);
function jd(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), tu(e));
}
function Kk(e) {
  if (Yr(e) || wr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (Qt(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return K(21, e);
}
var Yk = {},
  Jp = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = br),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[$] = Yk),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        ut(Set) || K(22),
        (this.enhancer_ = function (o, s) {
          return n(o, s, a);
        }),
        Or(function () {
          ((i.atom_ = Op(i.name_)), r && i.replace(r));
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
          Ip(function () {
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
          zt(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var o = !1,
            s = ot(this),
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
          s && st(this, u);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (Ke(this)) {
          var i = Ye(this, { type: bi, object: this, oldValue: n });
          if (!i) return !1;
        }
        if (this.has(n)) {
          var o = !1,
            s = ot(this),
            u =
              s || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: bi,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            zt(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            s && st(this, u),
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
        return Id({
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
        return Id({
          next: function () {
            var o = a.next(),
              s = o.value,
              u = o.done;
            return u ? { value: void 0, done: u } : { value: n.dehanceValue_(s), done: u };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Bt(n) && !mt(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Bt(n) && !mt(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Bt(n) && !mt(n)) return n.symmetricDifference(this);
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
        if (Bt(n) && !mt(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          mt(n) && (n = new Set(n)),
          zt(function () {
            Array.isArray(n)
              ? (a.clear(),
                n.forEach(function (i) {
                  return a.add(i);
                }))
              : Bt(n)
                ? (a.clear(),
                  n.forEach(function (i) {
                    return a.add(i);
                  }))
                : n != null && K("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, a) {
        return Pa(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ca(this, n);
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
      Jr(e, [
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
  mt = _r("ObservableSet", Jp);
function Id(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), tu(e));
}
var Dd = Object.create(null),
  Td = "remove",
  Xp = (function () {
    function e(r, n, a, i) {
      (n === void 0 && (n = new Map()),
        i === void 0 && (i = VO),
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
        if (i instanceof ct) return (i.set(a), !0);
        if (Ke(this)) {
          var o = Ye(this, { type: Ct, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!o) return null;
          a = o.newValue;
        }
        if (((a = i.prepareNewValue_(a)), a !== R.UNCHANGED)) {
          var s = ot(this),
            u = !1,
            c =
              s || u
                ? {
                    type: Ct,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: i.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (i.setNewValue_(a), s && st(this, c));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (R.trackingDerivation && !Ut(this.target_, n) && this.has_(n), this.target_[n]);
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
        if (!R.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var a = this.pendingKeys_.get(n);
        return (
          a ||
            ((a = new fr(n in this.target_, Di, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var i;
            if ((i = this.target_[wt]) != null && i[n]) return;
            K(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== Ri; ) {
            var s = li(o, n);
            if (s) {
              var u = a.make_(this, n, s, o);
              if (u === 0) return;
              if (u === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          Ld(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, i, o) {
        if ((o === void 0 && (o = !1), i === !0 && (i = this.defaultAnnotation_), i === !1))
          return this.defineProperty_(n, a, o);
        var s = i.extend_(this, n, a, o);
        return (s && Ld(this, i, n), s);
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
            a.value !== u && (a = gr({}, a, { value: u }));
          }
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else Et(this.target_, n, a);
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
          var c = Md(n),
            l = {
              configurable: R.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: c.get,
              set: c.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else Et(this.target_, n, l);
          var d = new fr(a, i, "ObservableObject.key", !1);
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
          var u = Md(n),
            c = {
              configurable: R.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: u.get,
              set: u.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, c)) return !1;
          } else Et(this.target_, n, c);
          (this.values_.set(n, new ct(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Ut(this.target_, n))) return !0;
        if (Ke(this)) {
          var i = Ye(this, { object: this.proxy_ || this.target_, name: n, type: Td });
          if (!i) return null;
        }
        try {
          var o;
          Je();
          var s = ot(this),
            u = !1,
            c = this.values_.get(n),
            l = void 0;
          if (!c && (s || u)) {
            var d;
            l = (d = li(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c && (this.values_.delete(n), c instanceof fr && (l = c.value_), Np(c)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            s || u)
          ) {
            var f = {
              type: Td,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            s && st(this, f);
          }
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return Pa(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ca(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var i,
          o = ot(this),
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
          o && st(this, u);
        }
        ((i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), Ii(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function Xr(e, t) {
  var r;
  if (Ut(e, $)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new Xp(e, new Map(), String(n), tk(t));
  return (ji(e, $, a), e);
}
var Jk = _r("ObservableObjectAdministration", Xp);
function Md(e) {
  return (
    Dd[e] ||
    (Dd[e] = {
      get: function () {
        return this[$].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[$].setObservablePropValue_(e, r);
      },
    })
  );
}
function zi(e) {
  return Ai(e) ? Jk(e[$]) : !1;
}
function Ld(e, t, r) {
  var n;
  (n = e.target_[wt]) == null || delete n[r];
}
var Xk = Qp(0),
  Zk = (function () {
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
  Bo = 0,
  Zp = function () {};
function Qk(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
Qk(Zp, Array.prototype);
var eu = (function (e) {
  function t(n, a, i, o) {
    var s;
    return (
      i === void 0 && (i = "ObservableArray"),
      o === void 0 && (o = !1),
      (s = e.call(this) || this),
      Or(function () {
        var u = new Qs(i, a, o, !0);
        ((u.proxy_ = s),
          yp(s, $, u),
          n && n.length && s.spliceWithArray(0, 0, n),
          Zk && Object.defineProperty(s, "0", Xk));
      }),
      s
    );
  }
  wp(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[$].atom_.reportObserved();
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        i.map(function (s) {
          return Bi(s) ? s.slice() : s;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return tu({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    Jr(t, [
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
})(Zp);
Object.entries(gi).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && ji(eu.prototype, t, r);
});
function Qp(e) {
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
function eS(e) {
  Et(eu.prototype, "" + e, Qp(e));
}
function eh(e) {
  if (e > Bo) {
    for (var t = Bo; t < e + 100; t++) eS(t);
    Bo = e;
  }
}
eh(1e3);
function tS(e, t, r) {
  return new eu(e, t, r);
}
function yi(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Bi(e)) return (t !== void 0 && K(23), e[$].atom_);
    if (mt(e)) return e.atom_;
    if (wr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || K(25, t, ks(e)), r);
    }
    if (zi(e)) {
      if (!t) return K(26);
      var n = e[$].values_.get(t);
      return (n || K(27, t, ks(e)), n);
    }
    if (Js(e) || Ni(e) || hi(e)) return e;
  } else if (ut(e) && hi(e[$])) return e[$];
  K(28);
}
function rS(e, t) {
  if ((e || K(29), Js(e) || Ni(e) || hi(e) || wr(e) || mt(e))) return e;
  if (e[$]) return e[$];
  K(24, e);
}
function ks(e, t) {
  var r;
  if (t !== void 0) r = yi(e, t);
  else {
    if (ya(e)) return e.name;
    zi(e) || wr(e) || mt(e) ? (r = rS(e)) : (r = yi(e));
  }
  return r.name_;
}
function Or(e) {
  var t = mr(),
    r = Li(!0);
  Je();
  try {
    return e();
  } finally {
    (Xe(), $i(r), Vt(t));
  }
}
var $d = Ri.toString;
function th(e, t, r) {
  return (r === void 0 && (r = -1), Ss(e, t, r));
}
function Ss(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object") return !1;
  var o = $d.call(e);
  if (o !== $d.call(t)) return !1;
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
  ((e = Nd(e)), (t = Nd(t)));
  var s = o === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var u = e.constructor,
      c = t.constructor;
    if (
      u !== c &&
      !(ut(u) && u instanceof u && ut(c) && c instanceof c) &&
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
    for (; l--; ) if (!Ss(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var p = 0; p < f; p++) {
      var h = d[p];
      if (!(Ut(t, h) && Ss(e[h], t[h], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function Nd(e) {
  return Bi(e) ? e.slice() : Yr(e) || wr(e) || Bt(e) || mt(e) ? Array.from(e.entries()) : e;
}
var Fd,
  nS = ((Fd = Pi().Iterator) == null ? void 0 : Fd.prototype) || {};
function tu(e) {
  return ((e[Symbol.iterator] = aS), Object.assign(Object.create(nS), e));
}
function aS() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Pi();
  typeof t[e] > "u" && K("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: mk, extras: { getDebugName: ks }, $mobx: $ });
if (!y.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Fi) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function iS(e) {
  e();
}
function oS(e) {
  (e || (e = iS), Tk({ reactionScheduler: e }));
}
function sS(e) {
  return Lk(e);
}
var uS = 1e4,
  cS = 1e4,
  lS = (function () {
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
            (n === void 0 && (n = uS), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, cS));
        },
      }),
      e
    );
  })(),
  dS = typeof FinalizationRegistry < "u" ? FinalizationRegistry : lS,
  ma = new dS(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  zo = { exports: {} },
  qo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bd;
function fS() {
  if (Bd) return qo;
  Bd = 1;
  var e = lt();
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
    (qo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    qo
  );
}
var zd;
function vS() {
  return (zd || ((zd = 1), (zo.exports = fS())), zo.exports);
}
var pS = vS();
function qd(e) {
  e.reaction = new Rt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function hS(e, t) {
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
          ma.unregister(n),
          (n.onStoreChange = s),
          n.reaction || (qd(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (qd(a), ma.register(r, a, a)),
    k.useDebugValue(a.reaction, sS),
    pS.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
var Uo,
  Vo,
  rh = typeof Symbol == "function" && Symbol.for,
  gS =
    (Vo =
      (Uo = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Uo === void 0
        ? void 0
        : Uo.configurable) !== null && Vo !== void 0
      ? Vo
      : !1,
  Ud = rh
    ? Symbol.for("react.forward_ref")
    : typeof y.forwardRef == "function" &&
      y.forwardRef(function (e) {
        return null;
      }).$$typeof,
  Vd = rh
    ? Symbol.for("react.memo")
    : typeof y.memo == "function" &&
      y.memo(function (e) {
        return null;
      }).$$typeof;
function bS(e, t) {
  var r;
  if (Vd && e.$$typeof === Vd)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    i = e.displayName || e.name;
  if (Ud && e.$$typeof === Ud && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (s, u) {
    return hS(function () {
      return a(s, u);
    }, i);
  };
  return (
    (o.displayName = e.displayName),
    gS && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = y.forwardRef(o)),
    (o = y.memo(o)),
    _S(e, o),
    o
  );
}
var yS = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function _S(e, t) {
  Object.keys(e).forEach(function (r) {
    yS[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Go;
oS(_i.unstable_batchedUpdates);
Go = ma.finalizeAllImmediately;
function mS(e, t) {
  if (Gd(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !Gd(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function Gd(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Hd = Symbol("patchMixins"),
  nh = Symbol("patchedDefinition");
function wS(e, t) {
  var r = (e[Hd] = e[Hd] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function Wd(e, t) {
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
function Kd(e, t) {
  var r = function () {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
    Wd.call.apply(Wd, [this, e, t].concat(i));
  };
  return r;
}
function OS(e, t, r) {
  var n = wS(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[nh])) {
    var i = e[t],
      o = ah(e, t, a ? a.enumerable : void 0, n, i);
    Object.defineProperty(e, t, o);
  }
}
function ah(e, t, r, n, a) {
  var i,
    o = Kd(a, n);
  return (
    (i = {}),
    (i[nh] = !0),
    (i.get = function () {
      return o;
    }),
    (i.set = function (u) {
      if (this === e) o = Kd(u, n);
      else {
        var c = ah(this, t, r, n, u);
        Object.defineProperty(this, t, c);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = r),
    i
  );
}
var Yd = Symbol("ObserverAdministration"),
  Jd = Symbol("isMobXReactObserver");
function Es(e) {
  var t;
  return (t = e[Yd]) != null
    ? t
    : (e[Yd] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: xs(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function kS(e) {
  var t = e.prototype;
  if (e[Jd]) {
    var r = xs(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[Jd] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== y.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Xd;
    else if (t.shouldComponentUpdate !== Xd)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = xs(e);
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
        value: SS.call(this, n),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        s = Es(this);
      return (
        (s.mounted = !0),
        ma.unregister(this),
        (s.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!s.reaction || s.reactionInvalidatedBeforeMount) && s.forceUpdate(),
        i?.apply(this, arguments)
      );
    }),
    OS(t, "componentWillUnmount", function () {
      var o,
        s = Es(this);
      ((o = s.reaction) == null || o.dispose(),
        (s.reaction = null),
        (s.forceUpdate = null),
        (s.mounted = !1),
        (s.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function xs(e) {
  return e.displayName || e.name || "<component>";
}
function SS(e) {
  var t = e.bind(this),
    r = Es(this);
  function n() {
    r.reaction || ((r.reaction = ES(r)), r.mounted || ma.register(this, r, this));
    var a = void 0,
      i = void 0;
    if (
      (r.reaction.track(function () {
        try {
          i = dk(!1, t);
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
function ES(e) {
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
function Xd(e, t) {
  return this.state !== t ? !0 : !mS(this.props, e);
}
function qi(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(y.Component, e) ||
    Object.prototype.isPrototypeOf.call(y.PureComponent, e)
      ? kS(e)
      : bS(e)
  );
}
function Cs() {
  return (
    (Cs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Cs.apply(null, arguments)
  );
}
function xS(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var CS = ["children"],
  Zd = k.createContext({});
function ih(e) {
  var t = e.children,
    r = xS(e, CS),
    n = k.useContext(Zd),
    a = k.useRef(Cs({}, n, r)),
    i = a.current;
  return k.createElement(Zd.Provider, { value: i }, t);
}
ih.displayName = "MobXProvider";
k.version.split(".")[0];
if (!y.Component) throw new Error("mobx-react requires React to be available");
if (!se) throw new Error("mobx-react requires mobx to be available");
var PS = Object.defineProperty,
  RS = Object.getOwnPropertyDescriptor,
  Ht = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? RS(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && PS(t, r, a), a);
  };
let It = class {
  constructor() {
    ((this.isLoading = !0), Fi(this));
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
Ht([se], It.prototype, "isLoading", 2);
Ht([se], It.prototype, "users", 2);
Ht([se], It.prototype, "duplicates", 2);
Ht([se], It.prototype, "sort", 2);
Ht([ke.bound], It.prototype, "saveUsers", 1);
Ht([ke.bound], It.prototype, "saveSort", 1);
Ht([ke.bound], It.prototype, "saveDuplicates", 1);
Ht([ke], It.prototype, "loading", 1);
Ht([ke], It.prototype, "stopLoading", 1);
const AS = new It();
var jS = Object.defineProperty,
  IS = Object.getOwnPropertyDescriptor,
  Ra = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? IS(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && jS(t, r, a), a);
  };
class Zr {
  constructor() {
    ((this.isLoading = !0), Fi(this));
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
Ra([se], Zr.prototype, "isLoading", 2);
Ra([se], Zr.prototype, "metadata", 2);
Ra([ke.bound], Zr.prototype, "saveMetadata", 1);
Ra([ke], Zr.prototype, "loading", 1);
Ra([ke], Zr.prototype, "stopLoading", 1);
const DS = new Zr();
var TS = Object.defineProperty,
  MS = Object.getOwnPropertyDescriptor,
  oh = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? MS(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && TS(t, r, a), a);
  };
class ru {
  constructor() {
    ((this.state = "ROOT"), Fi(this));
  }
  saveState(t) {
    this.state = t;
  }
}
oh([se], ru.prototype, "state", 2);
oh([ke.bound], ru.prototype, "saveState", 1);
const LS = new ru();
class $S {
  constructor() {
    ((this.usersStore = AS), (this.usersMetadata = DS), (this.stateStore = LS));
  }
}
const sh = new $S(),
  NS = y.createContext(sh),
  Ui = () => y.useContext(NS),
  FS = qi(() => {
    const { usersStore: e, usersMetadata: t, stateStore: r } = Ui(),
      n = fp(!0, !0, !0, t.metadata.user.properties),
      a = e.users;
    return !a || a.length === 0
      ? L.jsx("div", { children: "User Table is EMPTY" })
      : L.jsx("div", {
          children: L.jsxs("div", {
            children: [
              L.jsx(Ys, {
                head: n,
                onSort: async (i) => {
                  let o = { name: i.key, sortType: i.sortOrder };
                  e.loading();
                  try {
                    const s = await qt.invoke("fetch", { sortType: o });
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
                              (e.loading(), await qt.invoke("delete", { id: i.id }));
                              const u = await qt.invoke("fetch", { sortType: e.sort });
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
                    const i = await qt.invoke("duplicate");
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
  BS = qi(() => {
    const { usersMetadata: e, usersStore: t, stateStore: r } = Ui(),
      [n, a] = y.useState({}),
      i = (s) => {
        const { name: u, value: c, type: l } = s.target;
        a((d) => ({ ...d, [u]: l === "number" ? Number(c) : c }));
      },
      o = async (s) => {
        (s.preventDefault(),
          console.log("Form Data:", n),
          await qt.invoke("create", { data: n }),
          t.loading());
        try {
          (t.saveUsers(await qt.invoke("fetch", { sortType: t.sort })), r.saveState("ROOT"));
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
  zS = qi(() => {
    const { usersStore: e, usersMetadata: t } = Ui(),
      r = fp(!0, !1, !1, t.metadata.duplicate.properties),
      n = e.duplicates;
    return !n || n.length === 0
      ? L.jsx("div", { children: "Duplicate Table is EMPTY" })
      : L.jsx("div", {
          children: L.jsxs("div", {
            children: [
              L.jsx(Ys, {
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
function qS() {
  const { usersStore: e, usersMetadata: t, stateStore: r } = Ui();
  if (
    (y.useEffect(() => {
      (async () => {
        try {
          t.saveMetadata(await qt.invoke("fetchMetadata"));
          const a = await qt.invoke("fetch", { type: "USER", sortType: e.sort });
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
            L.jsx(FS, {}),
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
            L.jsx(zS, {}),
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
            L.jsx(BS, {}),
          ],
        }),
      });
    default:
      return L.jsxs("div", { children: ["ERROR: unsupprted state $", r.state] });
  }
}
const US = qi(qS),
  VS = document.getElementById("root"),
  GS = dh.createRoot(VS),
  Qd = () => {
    GS.render(L.jsx(ih, { ...sh, children: L.jsx(US, {}) }));
  };
qt.view.theme
  .enable()
  .then(() => {
    Qd();
  })
  .catch((e) => {
    (console.error(e.message), Qd());
  });
export {
  oi as B,
  XS as N,
  k as R,
  Yb as T,
  De as _,
  le as a,
  Zo as b,
  ce as c,
  Ie as d,
  H as e,
  Z as f,
  E as g,
  ne as h,
  ki as i,
  Me as j,
  Y as k,
  r_ as l,
  Ft as m,
  jt as n,
  We as o,
  P as p,
  ZS as q,
  y as r,
  Ce as s,
  Wb as t,
  Bf as u,
  Vb as v,
  Nv as w,
};
