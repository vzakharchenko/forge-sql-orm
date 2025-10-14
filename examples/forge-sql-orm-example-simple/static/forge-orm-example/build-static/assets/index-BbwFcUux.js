const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-BhsSWyQH.js",
      "./react-dom-vendor-DTSHKYJW.js",
      "./client-core-vendor-BQdzSnJt.js",
      "./lodash-vendor-DEc4n0rE.js",
      "./body-C3aXNd8H.css",
    ]),
) => i.map((i) => d[i]);
import { r as ft, a as Ci, c as Sh } from "./react-dom-vendor-DTSHKYJW.js";
import { g as tr, a as Ms, r as Zt, b as Qt, s as Ge } from "./client-core-vendor-BQdzSnJt.js";
import { r as Eh } from "./lodash-vendor-DEc4n0rE.js";
function xh(e, t) {
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
var to = { exports: {} },
  sn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bu;
function Ch() {
  if (bu) return sn;
  bu = 1;
  var e = ft(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, s, c) {
    var l,
      d = {},
      f = null,
      p = null;
    (c !== void 0 && (f = "" + c),
      s.key !== void 0 && (f = "" + s.key),
      s.ref !== void 0 && (p = s.ref));
    for (l in s) n.call(s, l) && !i.hasOwnProperty(l) && (d[l] = s[l]);
    if (u && u.defaultProps) for (l in ((s = u.defaultProps), s)) d[l] === void 0 && (d[l] = s[l]);
    return { $$typeof: t, type: u, key: f, ref: p, props: d, _owner: a.current };
  }
  return ((sn.Fragment = r), (sn.jsx = o), (sn.jsxs = o), sn);
}
var _u;
function Rh() {
  return (_u || ((_u = 1), (to.exports = Ch())), to.exports);
}
var M = Rh(),
  _ = ft();
const k = tr(_),
  yu = xh({ __proto__: null, default: k }, [_]);
var ro = {},
  rs = function (e, t) {
    return (
      (rs =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      rs(e, t)
    );
  };
function hf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  rs(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var ui = function () {
  return (
    (ui =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }),
    ui.apply(this, arguments)
  );
};
function gf(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function bf(e, t, r, n) {
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
function _f(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function yf(e, t, r, n, a, i) {
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
    var g = (0, r[p])(u === "accessor" ? { get: l.get, set: l.set } : l[s], h);
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
function mf(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function wf(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Of(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function kf(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Sf(e, t, r, n) {
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
function Ef(e, t) {
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
var Ri = Object.create
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
function xf(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Ri(t, e, r);
}
function ci(e) {
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
function Ls(e, t) {
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
function Cf() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Ls(arguments[t]));
  return e;
}
function Rf() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var i = arguments[t], o = 0, u = i.length; o < u; o++, a++) n[a] = i[o];
  return n;
}
function Pf(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, i; n < a; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function Hr(e) {
  return this instanceof Hr ? ((this.v = e), this) : new Hr(e);
}
function Af(e, t, r) {
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
  function o(p) {
    return function (h) {
      return Promise.resolve(h).then(p, d);
    };
  }
  function u(p, h) {
    n[p] &&
      ((a[p] = function (v) {
        return new Promise(function (g, b) {
          i.push([p, v, g, b]) > 1 || s(p, v);
        });
      }),
      h && (a[p] = h(a[p])));
  }
  function s(p, h) {
    try {
      c(n[p](h));
    } catch (v) {
      f(i[0][3], v);
    }
  }
  function c(p) {
    p.value instanceof Hr ? Promise.resolve(p.value.v).then(l, d) : f(i[0][2], p);
  }
  function l(p) {
    s("next", p);
  }
  function d(p) {
    s("throw", p);
  }
  function f(p, h) {
    (p(h), i.shift(), i.length && s(i[0][0], i[0][1]));
  }
}
function jf(e) {
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
          return (r = !r) ? { value: Hr(e[a](o)), done: !1 } : i ? i(o) : o;
        }
      : i;
  }
}
function If(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof ci == "function" ? ci(e) : e[Symbol.iterator]()),
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
function Df(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var Ph = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  ns = function (e) {
    return (
      (ns =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      ns(e)
    );
  };
function Tf(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = ns(e), n = 0; n < r.length; n++) r[n] !== "default" && Ri(t, e, r[n]);
  return (Ph(t, e), t);
}
function Mf(e) {
  return e && e.__esModule ? e : { default: e };
}
function Lf(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Ff(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function $f(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Nf(e, t, r) {
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
var Ah =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function zf(e) {
  function t(i) {
    ((e.error = e.hasError ? new Ah(i, e.error, "An error was suppressed during disposal.") : i),
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
function Bf(e, t) {
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
const jh = {
    __extends: hf,
    __assign: ui,
    __rest: gf,
    __decorate: bf,
    __param: _f,
    __esDecorate: yf,
    __runInitializers: mf,
    __propKey: wf,
    __setFunctionName: Of,
    __metadata: kf,
    __awaiter: Sf,
    __generator: Ef,
    __createBinding: Ri,
    __exportStar: xf,
    __values: ci,
    __read: Ls,
    __spread: Cf,
    __spreadArrays: Rf,
    __spreadArray: Pf,
    __await: Hr,
    __asyncGenerator: Af,
    __asyncDelegator: jf,
    __asyncValues: If,
    __makeTemplateObject: Df,
    __importStar: Tf,
    __importDefault: Mf,
    __classPrivateFieldGet: Lf,
    __classPrivateFieldSet: Ff,
    __classPrivateFieldIn: $f,
    __addDisposableResource: Nf,
    __disposeResources: zf,
    __rewriteRelativeImportExtension: Bf,
  },
  Ih = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Nf,
        get __assign() {
          return ui;
        },
        __asyncDelegator: jf,
        __asyncGenerator: Af,
        __asyncValues: If,
        __await: Hr,
        __awaiter: Sf,
        __classPrivateFieldGet: Lf,
        __classPrivateFieldIn: $f,
        __classPrivateFieldSet: Ff,
        __createBinding: Ri,
        __decorate: bf,
        __disposeResources: zf,
        __esDecorate: yf,
        __exportStar: xf,
        __extends: hf,
        __generator: Ef,
        __importDefault: Mf,
        __importStar: Tf,
        __makeTemplateObject: Df,
        __metadata: kf,
        __param: _f,
        __propKey: wf,
        __read: Ls,
        __rest: gf,
        __rewriteRelativeImportExtension: Bf,
        __runInitializers: mf,
        __setFunctionName: Of,
        __spread: Cf,
        __spreadArray: Pf,
        __spreadArrays: Rf,
        __values: ci,
        default: jh,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ct = Ms(Ih);
var un = {},
  mu;
function Dh() {
  return (
    mu ||
      ((mu = 1),
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
var no = {},
  ao = {},
  cn = {},
  ln = {},
  wu;
function rt() {
  if (wu) return ln;
  ((wu = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.BridgeAPIError = void 0));
  class e extends Error {}
  return ((ln.BridgeAPIError = e), ln);
}
var Ou;
function ye() {
  if (Ou) return cn;
  ((Ou = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.getCallBridge = void 0));
  const e = rt();
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
  return ((cn.getCallBridge = r), cn);
}
var dn = {},
  ku;
function Fs() {
  if (ku) return dn;
  ((ku = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.withRateLimiter = void 0));
  const e = rt(),
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
  return ((dn.withRateLimiter = t), dn);
}
var Su;
function Th() {
  return (
    Su ||
      ((Su = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = ye(),
          r = rt(),
          n = Fs(),
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
      })(ao)),
    ao
  );
}
var Eu;
function Mh() {
  return (
    Eu ||
      ((Eu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ct.__exportStar(Th(), e));
      })(no)),
    no
  );
}
var io = {},
  fn = {},
  oo = {},
  xu;
function Uf() {
  return (
    xu ||
      ((xu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = ye(),
          r = rt(),
          n = Fs(),
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
            const p = { ...f, invokeType: `ui-${d.toLowerCase()}-fetch` },
              h = await u("invoke", p),
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
      })(oo)),
    oo
  );
}
var Cu;
function Lh() {
  if (Cu) return fn;
  ((Cu = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.invokeRemote = void 0));
  const e = Uf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((fn.invokeRemote = t), fn);
}
var vn = {},
  Ru;
function Fh() {
  if (Ru) return vn;
  ((Ru = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.invokeService = void 0));
  const e = Uf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((vn.invokeService = t), vn);
}
var Pu;
function $h() {
  return (
    Pu ||
      ((Pu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ct;
        (t.__exportStar(Lh(), e), t.__exportStar(Fh(), e));
      })(io)),
    io
  );
}
var so = {},
  pn = {},
  hn = {},
  Au;
function Nh() {
  if (Au) return hn;
  ((Au = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.submit = void 0));
  const e = ye(),
    t = rt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((hn.submit = n), hn);
}
var gn = {},
  ju;
function zh() {
  if (ju) return gn;
  ((ju = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.close = void 0));
  const e = ye(),
    t = rt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        if ((await r("close", a)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((gn.close = n), gn);
}
var bn = {},
  Iu;
function Bh() {
  if (Iu) return bn;
  ((Iu = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.open = void 0));
  const e = ye(),
    t = rt(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      try {
        if ((await r("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((bn.open = n), bn);
}
var _n = {},
  Du;
function Uh() {
  if (Du) return _n;
  ((Du = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.refresh = void 0));
  const e = ye(),
    t = rt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((_n.refresh = n), _n);
}
var yn = {},
  Tu;
function qh() {
  if (Tu) return yn;
  ((Tu = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.createHistory = void 0));
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
  return ((yn.createHistory = r), yn);
}
var mn = {},
  uo = {},
  It = {},
  Mu;
function qf() {
  return (
    Mu ||
      ((Mu = 1),
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
var ar = {},
  Lu;
function Vh() {
  if (Lu) return ar;
  ((Lu = 1),
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
  return ((ar.TranslationsGetter = r), ar);
}
var wn = {},
  co = {},
  Fu;
function Vf() {
  return (
    Fu ||
      ((Fu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = Ct.__importDefault(Eh()),
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
      })(co)),
    co
  );
}
var $u;
function Gh() {
  if ($u) return wn;
  (($u = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.Translator = void 0));
  const e = Vf();
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
  return ((wn.Translator = t), wn);
}
var On = {},
  Nu;
function Hh() {
  if (Nu) return On;
  ((Nu = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.ensureLocale = void 0));
  const e = qf(),
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
var lo = {},
  zu;
function Wh() {
  return (
    zu ||
      ((zu = 1),
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
        const u = (c) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(c)) {
            const f = i(d[0]);
            for (const { key: p } of f) l.add(p);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = u;
        const s = (c) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(c)) {
            const f = i(d[0]);
            for (const p of f) l.push({ moduleName: d[1], ...p });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = s;
      })(lo)),
    lo
  );
}
var fo = {},
  Bu;
function Kh() {
  return (Bu || ((Bu = 1), Object.defineProperty(fo, "__esModule", { value: !0 })), fo);
}
var Uu;
function Gf() {
  return (
    Uu ||
      ((Uu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = Ct;
        (t.__exportStar(qf(), e),
          t.__exportStar(Vh(), e),
          t.__exportStar(Gh(), e),
          t.__exportStar(Hh(), e));
        var r = Vf();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Wh();
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
          t.__exportStar(Kh(), e));
      })(uo)),
    uo
  );
}
var qu;
function Yh() {
  if (qu) return mn;
  ((qu = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.getContext = void 0));
  const e = ye(),
    t = Gf(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const i = await r("getContext"),
        o = i?.locale;
      return (o && (i.locale = (a = (0, t.ensureLocale)(o)) !== null && a !== void 0 ? a : o), i);
    };
  return ((mn.getContext = n), mn);
}
var kn = {},
  Vu;
function Jh() {
  if (Vu) return kn;
  ((Vu = 1),
    Object.defineProperty(kn, "__esModule", { value: !0 }),
    (kn.changeWindowTitle = void 0));
  const e = ye(),
    t = rt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        await r("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((kn.changeWindowTitle = n), kn);
}
var Sn = {},
  Gu;
function Xh() {
  if (Gu) return Sn;
  ((Gu = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.theme = void 0));
  const t = (0, ye().getCallBridge)();
  return ((Sn.theme = { enable: () => t("enableTheming") }), Sn);
}
var En = {},
  xn = {},
  vo = {},
  ir = {},
  Hu;
function Hf() {
  if (Hu) return ir;
  ((Hu = 1),
    Object.defineProperty(ir, "__esModule", { value: !0 }),
    (ir.blobToBase64 = ir.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      i = atob(a),
      o = new Array(i.length);
    for (let s = 0; s < i.length; s++) o[s] = i.charCodeAt(s);
    const u = new Uint8Array(o);
    return new Blob([u], { type: n });
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
var Wu;
function Zh() {
  return (
    Wu ||
      ((Wu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Hf(),
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
      })(vo)),
    vo
  );
}
var Ku;
function Wf() {
  if (Ku) return xn;
  ((Ku = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.events = void 0));
  const e = ye(),
    t = Zh(),
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
  return ((xn.events = { emit: n, on: a }), xn);
}
var Yu;
function Qh() {
  if (Yu) return En;
  ((Yu = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.emitReadyEvent = void 0));
  const e = Wf(),
    t = Kf(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return ((En.emitReadyEvent = n), En);
}
var Ju;
function Kf() {
  if (Ju) return pn;
  ((Ju = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.view = void 0));
  const e = Nh(),
    t = zh(),
    r = Bh(),
    n = Uh(),
    a = qh(),
    i = Yh(),
    o = Jh(),
    u = Xh(),
    s = Qh();
  return (
    (pn.view = {
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
    pn
  );
}
var Xu;
function Yf() {
  return (
    Xu ||
      ((Xu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ct.__exportStar(Kf(), e));
      })(so)),
    so
  );
}
var po = {},
  Cn = {},
  Zu;
function eg() {
  if (Zu) return Cn;
  ((Zu = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.router = void 0));
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
  return ((Cn.router = { getUrl: r, navigate: n, open: a, reload: i }), Cn);
}
var Qu;
function tg() {
  return (
    Qu ||
      ((Qu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ct.__exportStar(eg(), e));
      })(po)),
    po
  );
}
var ho = {},
  Rn = {},
  ec;
function rg() {
  if (ec) return Rn;
  ((ec = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.Modal = void 0));
  const e = ye(),
    t = rt(),
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
  return ((Rn.Modal = a), Rn);
}
var tc;
function ng() {
  return (
    tc ||
      ((tc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ct.__exportStar(rg(), e));
      })(ho)),
    ho
  );
}
var Dt = {},
  Pn = {},
  rc;
function ag() {
  if (rc) return Pn;
  ((rc = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.productFetchApi = void 0));
  const e = Hf(),
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
          { body: d, headers: f, isMultipartFormData: p } = await n(l);
        f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
        const h = {
            product: u,
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
          } = await i("fetchProduct", h),
          O = w ? (0, e.base64ToBlob)(v, g["content-type"]) : v;
        return new Response(O || null, { headers: g, status: m, statusText: b });
      };
      return {
        requestConfluence: (u, s) => o("confluence", u, s),
        requestJira: (u, s) => o("jira", u, s),
        requestBitbucket: (u, s) => o("bitbucket", u, s),
      };
    };
  return ((Pn.productFetchApi = a), Pn);
}
var nc;
function ig() {
  if (nc) return Dt;
  nc = 1;
  var e;
  (Object.defineProperty(Dt, "__esModule", { value: !0 }),
    (Dt.requestBitbucket = Dt.requestJira = Dt.requestConfluence = void 0));
  const t = ye();
  return (
    (e = (0, ag().productFetchApi)((0, t.getCallBridge)())),
    (Dt.requestConfluence = e.requestConfluence),
    (Dt.requestJira = e.requestJira),
    (Dt.requestBitbucket = e.requestBitbucket),
    Dt
  );
}
var go = {},
  An = {},
  ac;
function og() {
  if (ac) return An;
  ((ac = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.showFlag = void 0));
  const e = ye(),
    t = rt(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var i;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const o = r("showFlag", { ...a, type: (i = a.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await o, r("closeFlag", { id: a.id })) };
    };
  return ((An.showFlag = n), An);
}
var ic;
function sg() {
  return (
    ic ||
      ((ic = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = og();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(go)),
    go
  );
}
var bo = {},
  oc;
function ug() {
  return (
    oc ||
      ((oc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ct.__exportStar(Wf(), e));
      })(bo)),
    bo
  );
}
var _o = {},
  jn = {},
  sc;
function cg() {
  if (sc) return jn;
  ((sc = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.realtime = void 0));
  const t = (0, ye().getCallBridge)(),
    r = (o, u, s) => t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s }),
    n = (o, u, s) => t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s }),
    a = (o, u, s) =>
      t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s, isGlobal: !0 }),
    i = (o, u, s) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s, isGlobal: !0 });
  return ((jn.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: i }), jn);
}
var yo = {},
  uc;
function lg() {
  return (
    uc ||
      ((uc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Jira = void 0),
          (function (t) {
            ((t.Board = "board"), (t.Issue = "issue"), (t.Project = "project"));
          })(e.Jira || (e.Jira = {})));
      })(yo)),
    yo
  );
}
var cc;
function dg() {
  return (
    cc ||
      ((cc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Jira = e.realtime = void 0));
        var t = cg();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = lg();
        Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return r.Jira;
          },
        });
      })(_o)),
    _o
  );
}
var Tt = {},
  lc;
function fg() {
  if (lc) return Tt;
  ((lc = 1),
    Object.defineProperty(Tt, "__esModule", { value: !0 }),
    (Tt.createTranslationFunction = Tt.getTranslations = Tt.resetTranslationsCache = void 0));
  const e = Gf(),
    t = Yf(),
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
  Tt.resetTranslationsCache = a;
  const i = async (u = null, s = { fallback: !0 }) => {
    let c = u;
    return (c || (c = (await t.view.getContext()).locale), await n.getTranslations(c, s));
  };
  Tt.getTranslations = i;
  const o = async (u = null) => {
    let s = u;
    s || (s = (await t.view.getContext()).locale);
    const c = new e.Translator(s, n);
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
  return ((Tt.createTranslationFunction = o), Tt);
}
var mo = {},
  In = {},
  dc;
function Jf() {
  if (dc) return In;
  ((dc = 1),
    Object.defineProperty(In, "__esModule", { value: !0 }),
    (In.initFeatureFlags = void 0));
  const e = ye(),
    t = rt(),
    r = Fs(),
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
    (In.initFeatureFlags = (0, r.withRateLimiter)(
      u,
      n,
      a,
      "Feature flags initialisation calls are rate limited at 500req/25s",
    )),
    In
  );
}
var Dn = {},
  or = {},
  xr = {},
  za = {},
  fc;
function vg() {
  if (fc) return za;
  ((fc = 1), Object.defineProperty(za, "__esModule", { value: !0 }));
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
  return ((za.default = t), za);
}
var Cr = {},
  Tn = {},
  vc;
function pg() {
  if (vc) return Tn;
  ((vc = 1),
    Object.defineProperty(Tn, "__esModule", { value: !0 }),
    (Tn._resolveDeltasResponse = void 0));
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
  Tn._resolveDeltasResponse = r;
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
  return Tn;
}
var pc;
function Xf() {
  if (pc) return Cr;
  pc = 1;
  var e =
    (Cr && Cr.__awaiter) ||
    function (a, i, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(h) {
          try {
            p(u.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(u.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? c(h.value) : s(h.value).then(d, f);
        }
        p((u = u.apply(a, i || [])).next());
      });
    };
  Object.defineProperty(Cr, "__esModule", { value: !0 });
  const t = Zt(),
    r = pg();
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
        var l, d, f, p, h, v;
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
  return ((Cr.default = n), Cr);
}
var Mn = {},
  hc;
function hg() {
  if (hc) return Mn;
  ((hc = 1),
    Object.defineProperty(Mn, "__esModule", { value: !0 }),
    (Mn._makeParamStoreGetter = void 0));
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
  function u(l, d, f, p) {
    const v = l.getExperiment(d.experiment_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function s(l, d, f, p) {
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
          return u(l, v, h, f);
        case "layer":
          return s(l, v, h, f);
        default:
          return h;
      }
    };
  }
  return ((Mn._makeParamStoreGetter = c), Mn);
}
var sr = {},
  gc;
function gg() {
  if (gc) return sr;
  gc = 1;
  var e =
    (sr && sr.__awaiter) ||
    function (a, i, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(h) {
          try {
            p(u.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(u.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? c(h.value) : s(h.value).then(d, f);
        }
        p((u = u.apply(a, i || [])).next());
      });
    };
  (Object.defineProperty(sr, "__esModule", { value: !0 }),
    (sr.StatsigEvaluationsDataAdapter = void 0));
  const t = Zt(),
    r = Xf();
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
  return ((sr.StatsigEvaluationsDataAdapter = n), sr);
}
var bc;
function bg() {
  if (bc) return xr;
  bc = 1;
  var e =
    (xr && xr.__awaiter) ||
    function (u, s, c, l) {
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
        g((l = l.apply(u, s || [])).next());
      });
    };
  Object.defineProperty(xr, "__esModule", { value: !0 });
  const t = Zt(),
    r = vg(),
    n = Xf(),
    a = hg(),
    i = gg();
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
      const p = new n.default(l, (v) => {
        this.$emt(v);
      });
      (super(
        s,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new i.StatsigEvaluationsDataAdapter(),
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
        (this._user = this._configureUser(c, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (f = l?.plugins) !== null && f !== void 0 ? f : [];
      for (const v of h) v.bind(this);
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
      const { result: f, details: p } = this._store.getGate(s),
        h = (0, t._makeFeatureGate)(s, p, f),
        v =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, c),
        g = v ?? h;
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
      const { result: f, details: p } = this._store.getConfig(s),
        h = (0, t._makeDynamicConfig)(s, p, f),
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
          s,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(s, c) {
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
            : p.call(f, g, this._user, c),
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
      const { result: p, details: h } = this._store.getLayer(s),
        v = (0, t._makeLayer)(s, h, p),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, v, this._user, c);
      c?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const b = (0, t._mergeOverride)(
        v,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : v.__value,
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
      const { result: f, details: p } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const h = {
          name: s,
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
  }
  return ((xr.default = o), xr);
}
var _c;
function _g() {
  return (
    _c ||
      ((_c = 1),
      (function (e) {
        var t =
            (or && or.__createBinding) ||
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
            (or && or.__exportStar) ||
            function (o, u) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(u, s) && t(u, o, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Zt(),
          a = bg();
        ((e.StatsigClient = a.default), r(Zt(), e));
        const i = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = i;
      })(or)),
    or
  );
}
var Ln = {},
  yc;
function yg() {
  if (yc) return Ln;
  ((yc = 1),
    Object.defineProperty(Ln, "__esModule", { value: !0 }),
    (Ln.ForgeDataAdapter = void 0));
  const e = Jf();
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
  return ((Ln.ForgeDataAdapter = t), Ln);
}
var mc;
function mg() {
  if (mc) return Dn;
  ((mc = 1),
    Object.defineProperty(Dn, "__esModule", { value: !0 }),
    (Dn.ForgeFeatureFlags = void 0));
  const e = _g(),
    t = yg();
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
  return ((Dn.ForgeFeatureFlags = r), Dn);
}
var wc;
function wg() {
  return (
    wc ||
      ((wc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ForgeFeatureFlags = void 0),
          Ct.__exportStar(Jf(), e));
        var r = mg();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.ForgeFeatureFlags;
          },
        });
      })(mo)),
    mo
  );
}
var Oc;
function Og() {
  return (
    Oc ||
      ((Oc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = Ct;
        var r = Dh();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Mh(), e),
          t.__exportStar($h(), e),
          t.__exportStar(Yf(), e),
          t.__exportStar(tg(), e),
          t.__exportStar(ng(), e),
          t.__exportStar(ig(), e),
          t.__exportStar(sg(), e),
          t.__exportStar(ug(), e),
          t.__exportStar(dg(), e),
          (e.i18n = t.__importStar(fg())),
          t.__exportStar(wg(), e));
      })(ro)),
    ro
  );
}
var Nt = Og();
function fe(e, t) {
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
function kg(e, t) {
  if (Ae(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ae(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Zf(e) {
  var t = kg(e, "string");
  return Ae(t) == "symbol" ? t : t + "";
}
function kc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Zf(n.key), n));
  }
}
function ve(e, t, r) {
  return (
    t && kc(e.prototype, t),
    r && kc(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Sg(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ne(e, t) {
  if (t && (Ae(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Sg(e);
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
function ha(e, t) {
  return (
    (ha = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    ha(e, t)
  );
}
function ze(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ha(e, t));
}
function E(e, t, r) {
  return (
    (t = Zf(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function we() {}
function Eg(e) {
  if (Array.isArray(e)) return e;
}
function xg(e, t) {
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
function as(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Qf(e, t) {
  if (e) {
    if (typeof e == "string") return as(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? as(e, t)
          : void 0
    );
  }
}
function Cg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(e, t) {
  return Eg(e) || xg(e, t) || Qf(e, t) || Cg();
}
var ev = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  Rg = function (t) {
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
  li = function (t, r) {
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
  Pg = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Sc = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  Ag = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      i = t.destination,
      o = t.sourceIndex;
    if (!i) return r;
    var u = Sc(o, n, a),
      s = Sc(i.index, n, a),
      c = r.slice(),
      l = c.splice(u, 1),
      d = K(l, 1),
      f = d[0];
    return (c.splice(s, 0, f), c);
  };
const jg = "modulepreload",
  Ig = function (e, t) {
    return new URL(e, t).href;
  },
  Ec = {},
  Dg = function (t, r, n) {
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
          if (((l = Ig(l, n)), l in Ec)) return;
          Ec[l] = !0;
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
            ((p.rel = d ? "stylesheet" : jg),
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
function Tg(e, t) {
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
    a = Tg(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      ((r = i[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
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
function wo(e) {
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
var Mg = (function () {
  function e(t) {
    var r = this;
    (fe(this, e),
      E(this, "_isAnalyticsEvent", !0),
      E(this, "clone", function () {
        var n = wo({}, r.payload);
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
          Ae(r) === "object" && (this.payload = wo(wo({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function Lg(e) {
  if (Array.isArray(e)) return as(e);
}
function Fg(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function $g() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function De(e) {
  return Lg(e) || Fg(e) || Qf(e) || $g();
}
function Ng(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Y(e)) !== null; );
  return e;
}
function di() {
  return (
    (di =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = Ng(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    di.apply(null, arguments)
  );
}
function zg(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, tv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function tv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (tv = function () {
    return !!e;
  })();
}
function Bg(e, t, r, n) {
  var a = di(Y(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var Ug = (function (e) {
    function t(r) {
      var n;
      return (
        fe(this, t),
        (n = zg(this, t, [r])),
        E(n, "_isUIAnalyticsEvent", !0),
        E(n, "clone", function () {
          if (n.hasFired) return null;
          var a = De(n.context),
            i = De(n.handlers),
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
      ze(t, e),
      ve(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : Bg(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(Mg),
  qg = _.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Vg = function () {
    return _.useContext(qg);
  },
  fi = function (t) {
    var r = _.useRef(t);
    return ((r.current = t), r);
  };
function Gg(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Hg(e, t) {
  var r = _.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = _.useRef(!0),
    a = _.useRef(r),
    i = n.current || !!(t && a.current.inputs && Gg(t, a.current.inputs)),
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
function Wg(e, t) {
  return Hg(function () {
    return e;
  }, t);
}
function rv() {
  var e = Vg(),
    t = Wg(
      function (r) {
        return new Ug({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
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
function Kg(e) {
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
function ga(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    i = e.packageName,
    o = e.packageVersion,
    u = e.analyticsData,
    s = rv(),
    c = s.createAnalyticsEvent,
    l = fi(u),
    d = fi(t),
    f = _.useCallback(
      function (p) {
        var h = c({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: i, packageVersion: o },
          }),
          v = Kg({ componentName: n, packageName: i, packageVersion: o }, l.current);
        h.context.push(v);
        var g = h.clone();
        (g && g.fire("atlaskit"), d.current(p, h));
      },
      [r, n, a, i, o, c, l, d],
    );
  return f;
}
function Rc(e, t) {
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
function Yg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rc(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Rc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Pc(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    i = e.packageVersion,
    o = e.analyticsData,
    u = rv(),
    s = u.createAnalyticsEvent,
    c = fi(o),
    l = fi(t),
    d = _.useCallback(
      function () {
        var f = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: i },
          }),
          p = Yg({ componentName: n, packageName: a, packageVersion: i }, c.current);
        f.context.push(p);
        var h = f.clone();
        (h && h.fire("atlaskit"), l.current(f));
      },
      [r, n, a, i, s, c, l],
    );
  return d;
}
var pr = "ASC",
  vi = "DESC",
  Jg = "small",
  pi = "large",
  nv = 0.22;
const Xg = 5;
function C(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const i of a) {
      const o = i.startsWith("_") ? i.slice(0, Xg) : i;
      t[o] = i;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function av(e, t, r) {
  return e ?? "var(--c-, )";
}
var Zg = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  Qg = _.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      i = e.testId,
      o = e.isLoading,
      u = ae(e, Zg);
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
  eb = function (t) {
    var r = t.children;
    return _.createElement(
      "caption",
      { className: C(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  tb = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: C(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  rb = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: C(["_4t3i1jdh"]),
      },
      r,
    );
  },
  nb = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
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
  ab = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
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
function jc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ac(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ac(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ib(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, iv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var Ic = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var i;
      if (r.cells[a] && ((i = r.cells[a]) === null || i === void 0 ? void 0 : i.key) === n) {
        var o;
        return (o = t[a]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  ob = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var i = a === pr ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      u = Array.from(r);
    return u.sort(function (s, c) {
      var l = Ic(s.cells, t, n),
        d = Ic(c.cells, t, n);
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
function sb(e) {
  var t = (function (r) {
    function n() {
      var a;
      fe(this, n);
      for (var i = arguments.length, o = new Array(i), u = 0; u < i; u++) o[u] = arguments[u];
      return ((a = ib(this, n, [].concat(o))), E(a, "state", { pageRows: [] }), a);
    }
    return (
      ze(n, r),
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
                s = ae(i, ab);
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
                p = i.isTotalPagesControlledExternally;
              li(c, s);
              var h, v;
              return (
                p ? ((h = u), (v = u)) : ((h = ob(s, u, c, l) || []), (v = ev(h, d, f))),
                jc(jc({}, o), {}, { pageRows: v })
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
var ub = "--local-dynamic-table-width",
  ov = function (t) {
    var r = t.width;
    return typeof r < "u" ? E({}, ub, "".concat(r, "%")) : void 0;
  },
  cb = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  lb = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      i = t.innerRef,
      o = ae(t, cb);
    return _.createElement(
      "td",
      te(
        {
          style: ov({ width: r }),
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
  db = ["isHighlighted", "children", "style", "testId", "className"],
  fb = _.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      i = e.testId,
      o = e.className,
      u = ae(e, db);
    return _.createElement(
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
        u,
        { ref: t, "data-testid": i },
      ),
      n,
    );
  }),
  vb = ["cells"],
  pb = ["content", "testId"],
  hb = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      i = t.isFixedSize,
      o = t.isHighlighted,
      u = r.cells,
      s = ae(r, vb);
    return k.createElement(
      fb,
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
          p = ae(c, pb),
          h = (n || { cells: [] }).cells[l] || {},
          v = h.shouldTruncate,
          g = h.width;
        return k.createElement(
          lb,
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
function gb(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, sv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var bb = (function (e) {
    function t() {
      return (fe(this, t), gb(this, t, arguments));
    }
    return (
      ze(t, e),
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
                return k.createElement(hb, {
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
  _b = sb(
    k.forwardRef(function (e, t) {
      return k.createElement(bb, te({}, e, { forwardedRef: t }));
    }),
  );
function yb(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, uv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function uv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (uv = function () {
    return !!e;
  })();
}
var mb = (function (e) {
  function t(r) {
    var n;
    return (fe(this, t), (n = yb(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    ze(t, e),
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
const $s = _.createContext(null);
var Dc = "#FF5630",
  Tc = "#DE350B",
  Rr = "#BF2600",
  Mc = "#FFC400",
  Lc = "#FFAB00",
  Pr = "#FF991F",
  wb = "#DEEBFF",
  Ba = "#B3D4FF",
  Fc = "#4C9AFF",
  $c = "#2684FF",
  Nc = "#0065FF",
  Ar = "#0052CC",
  zc = "#0747A6",
  Yt = "#FFFFFF",
  xe = "#F4F5F7",
  ur = "#A5ADBA",
  Ob = "#8993A4",
  kb = "#6B778C",
  Sb = "#505F79",
  ba = "#42526E",
  He = "#253858",
  jr = "#172B4D",
  Fn = "rgba(9, 30, 66, 0.04)",
  Bc = "rgba(9, 30, 66, 0.08)",
  ot = "#9FB0CC",
  Eb = "#8C9CB8",
  Oo = "#67758F",
  $n = "#3B475C",
  Uc = "#313D52",
  Nn = "#1B2638",
  Ir = "#0D1424",
  xb = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function Cb(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(ba, ")")
    : "var(--ds-icon-inverse, ".concat(Yt, ")");
}
var Ua = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  Rb = typeof window > "u" ? _.useEffect : _.useLayoutEffect,
  cv = k.memo(
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
        f = typeof l == "number" ? l : xb[l],
        p = "".concat(o, "ms"),
        h = Cb(a),
        v = _.useContext($s);
      return (
        Rb(
          function () {
            if (v != null) return v.hold(u);
          },
          [v, u],
        ),
        k.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: p, width: f, height: f },
            className: C([Ua.wrapperStyles, Ua.rotateStyles]),
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
              style: { animationDelay: p },
              role: s ? "img" : "none",
              className: C([Ua.loadInStyles]),
            },
            k.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: C([Ua.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
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
function Vc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qc(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : qc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Gc = "--contents-opacity",
  Pb = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: C(["_kqswh2mm"]) },
      r,
    );
  },
  Ab = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: C(["_tzy47hfw _lcxvglyw"]),
        style: Vc(Vc({}, E({}, Gc, n)), {}, { "--_cnddr8": av("var(".concat(Gc, ")")) }),
      },
      r,
    );
  },
  jb = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: C(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function Ib(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, lv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function lv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (lv = function () {
    return !!e;
  })();
}
var dv = (function (e) {
  function t() {
    return (fe(this, t), Ib(this, t, arguments));
  }
  return (
    ze(t, e),
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
            Pb,
            { testId: s },
            i ? k.createElement(Ab, { contentsOpacity: u, testId: s }, a) : a,
            i &&
              k.createElement(
                jb,
                { testId: s },
                k.createElement(cv, {
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
E(dv, "defaultProps", {
  isLoading: !0,
  spinnerSize: pi,
  contentsOpacity: nv,
  loadingLabel: "Loading table",
});
var Db = ["children", "testId"],
  Tb = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = ae(e, Db);
    return _.createElement(
      "div",
      te({}, a, { "data-testid": n, ref: t, className: C(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  Mb = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: C(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  Lb = _.forwardRef(function (e, t) {
    var r = e.children;
    return _.createElement("div", { ref: t, className: C(["_kqswh2mm _152tidpf"]) }, r);
  });
function Fb(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, fv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function fv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (fv = function () {
    return !!e;
  })();
}
var vv = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = Fb(this, t, [].concat(a))),
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
          u = o.targetRef,
          s = u?.();
        return s || r.containerRef.current;
      }),
      E(r, "hasTargetNode", function (o) {
        return !!r.getTargetNode(o);
      }),
      E(r, "isVerticallyVisible", function (o, u) {
        var s = o.top,
          c = o.bottom;
        return c <= 0 ? !1 : s < u;
      }),
      E(r, "isFullyVerticallyVisible", function (o, u) {
        var s = o.top,
          c = o.bottom;
        return s >= 0 && c <= u;
      }),
      E(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      E(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      E(r, "translateSpinner", function (o, u, s) {
        ((o.style.position = s ? "fixed" : ""),
          (o.style.transform = u !== 0 ? "translate3d(0, ".concat(u, "px, 0)") : ""));
      }),
      E(r, "updateTargetAppearance", function () {
        var o = r.getTargetNode(),
          u = r.props,
          s = u.isLoading,
          c = u.contentsOpacity;
        o &&
          o.style &&
          Ae(o.style) === "object" &&
          ((o.style.pointerEvents = s ? "none" : ""), (o.style.opacity = s ? c.toString() : ""));
      }),
      r
    );
  }
  return (
    ze(t, e),
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
              p = s.bottom,
              h = s.height;
            if (d) {
              var v = h >= l * 3;
              if (v && !this.isFullyVerticallyVisible(s, i)) {
                if (f >= 0) {
                  var g = i - f,
                    b = g / 2 + f - l / 2,
                    m = g < l * 3 ? f + l : b;
                  this.translateSpinner(u, m, !0);
                } else if (f < 0 && p > i) {
                  var w = i / 2 - l / 2;
                  this.translateSpinner(u, w, !0);
                } else {
                  var O = p / 2 - l / 2,
                    y = O < l ? O - (l - O) : O;
                  this.translateSpinner(u, y, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(c, i)) return;
            var S = (a = this.containerRef) === null || a === void 0 ? void 0 : a.current;
            if (S && typeof S.getBoundingClientRect == "function") {
              var x = S.getBoundingClientRect().top,
                j = (f - x) / 2;
              this.translateSpinner(u, j, !1);
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
            Tb,
            { testId: u && "".concat(u, "--loading--container--advanced"), ref: this.containerRef },
            a,
            i &&
              k.createElement(
                Mb,
                { testId: u },
                k.createElement(
                  Lb,
                  { ref: this.spinnerRef },
                  k.createElement(cv, {
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
E(vv, "defaultProps", {
  isLoading: !0,
  spinnerSize: pi,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(nv), ")"),
  loadingLabel: "Loading table",
});
function $b(e) {
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
var zn = {},
  Bn = {};
function Hc(e, t, r, n, a, i, o) {
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
        Hc(i, n, a, o, u, "next", s);
      }
      function u(s) {
        Hc(i, n, a, o, u, "throw", s);
      }
      o(void 0);
    });
  };
}
var ko = { exports: {} },
  So = { exports: {} },
  Wc;
function pv() {
  return (
    Wc ||
      ((Wc = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(So)),
    So.exports
  );
}
var Eo = { exports: {} },
  xo = { exports: {} },
  Kc;
function hv() {
  return (
    Kc ||
      ((Kc = 1),
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
              function f(p, h) {
                t(s, p, function (v) {
                  return this._invoke(p, h, v);
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
      })(xo)),
    xo.exports
  );
}
var Yc;
function gv() {
  return (
    Yc ||
      ((Yc = 1),
      (function (e) {
        var t = hv();
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
                (function (S, x, j) {
                  var D,
                    R,
                    T,
                    B = 0,
                    z = j || [],
                    V = !1,
                    J = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: G,
                      f: G.bind(n, 4),
                      d: function (X, $) {
                        return ((D = X), (R = 0), (T = n), (J.n = $), c);
                      },
                    };
                  function G(q, X) {
                    for (R = q, T = X, a = 0; !V && B && !$ && a < z.length; a++) {
                      var $,
                        A = z[a],
                        be = J.p,
                        oe = A[2];
                      q > 3
                        ? ($ = oe === X) &&
                          ((T = A[(R = A[4]) ? 5 : ((R = 3), 3)]), (A[4] = A[5] = n))
                        : A[0] <= be &&
                          (($ = q < 2 && be < A[1])
                            ? ((R = 0), (J.v = X), (J.n = A[1]))
                            : be < oe &&
                              ($ = q < 3 || A[0] > X || X > oe) &&
                              ((A[4] = q), (A[5] = X), (J.n = oe), (R = 0)));
                    }
                    if ($ || q > 1) return c;
                    throw ((V = !0), X);
                  }
                  return function (q, X, $) {
                    if (B > 1) throw TypeError("Generator is already running");
                    for (V && X === 1 && G(X, $), R = X, T = $; (a = R < 2 ? n : T) || !V; ) {
                      D || (R ? (R < 3 ? (R > 1 && (J.n = -1), G(R, T)) : (J.n = T)) : (J.v = T));
                      try {
                        if (((B = 2), D)) {
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
                        } else if ((a = (V = J.n < 0) ? T : S.call(x, J)) !== c) break;
                      } catch (A) {
                        ((D = n), (R = 1), (T = A));
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
                : ((g.__proto__ = f), t(g, u, "GeneratorFunction")),
              (g.prototype = Object.create(h)),
              g
            );
          }
          return (
            (d.prototype = f),
            t(h, "constructor", f),
            t(f, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(f, u, "GeneratorFunction"),
            t(h),
            t(h, u, "Generator"),
            t(h, o, function () {
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
      })(Eo)),
    Eo.exports
  );
}
var Co = { exports: {} },
  Ro = { exports: {} },
  Po = { exports: {} },
  Jc;
function bv() {
  return (
    Jc ||
      ((Jc = 1),
      (function (e) {
        var t = pv(),
          r = hv();
        function n(a, i) {
          function o(s, c, l, d) {
            try {
              var f = a[s](c),
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
                  return new i(function (f, p) {
                    o(s, l, f, p);
                  });
                }
                return (u = u ? u.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Po)),
    Po.exports
  );
}
var Xc;
function _v() {
  return (
    Xc ||
      ((Xc = 1),
      (function (e) {
        var t = gv(),
          r = bv();
        function n(a, i, o, u, s) {
          return new r(t().w(a, i, o, u), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ro)),
    Ro.exports
  );
}
var Zc;
function Nb() {
  return (
    Zc ||
      ((Zc = 1),
      (function (e) {
        var t = _v();
        function r(n, a, i, o, u) {
          var s = t(n, a, i, o, u);
          return s.next().then(function (c) {
            return c.done ? c.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Co)),
    Co.exports
  );
}
var Ao = { exports: {} },
  Qc;
function zb() {
  return (
    Qc ||
      ((Qc = 1),
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
      })(Ao)),
    Ao.exports
  );
}
var jo = { exports: {} },
  Io = { exports: {} },
  el;
function Bb() {
  return (
    el ||
      ((el = 1),
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
      })(Io)),
    Io.exports
  );
}
var tl;
function Ub() {
  return (
    tl ||
      ((tl = 1),
      (function (e) {
        var t = Bb().default;
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
      })(jo)),
    jo.exports
  );
}
var rl;
function qb() {
  return (
    rl ||
      ((rl = 1),
      (function (e) {
        var t = pv(),
          r = gv(),
          n = Nb(),
          a = _v(),
          i = bv(),
          o = zb(),
          u = Ub();
        function s() {
          var c = r(),
            l = c.m(s),
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
                  abrupt: function (O, y) {
                    return b(m.a, p[O], y);
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
                return v.call(this, g);
              } finally {
                ((m.p = g.prev), (m.n = g.next));
              }
            };
          }
          return ((e.exports = s =
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
                async: function (b, m, w, O, y) {
                  return (f(m) ? a : n)(h(b), m, w, O, y);
                },
                keys: o,
                values: u,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ko)),
    ko.exports
  );
}
var Do, nl;
function Vb() {
  if (nl) return Do;
  nl = 1;
  var e = qb()();
  Do = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return Do;
}
var Gb = Vb();
const N = tr(Gb);
var cr = {},
  Dr = {},
  qa = {},
  al;
function Hb() {
  if (al) return qa;
  ((al = 1), Object.defineProperty(qa, "__esModule", { value: !0 }));
  const e = Qt();
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
  return ((qa.default = t), qa);
}
var Tr = {},
  Un = {},
  il;
function Wb() {
  if (il) return Un;
  ((il = 1),
    Object.defineProperty(Un, "__esModule", { value: !0 }),
    (Un._resolveDeltasResponse = void 0));
  const e = Qt(),
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
var ol;
function yv() {
  if (ol) return Tr;
  ol = 1;
  var e =
    (Tr && Tr.__awaiter) ||
    function (a, i, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(h) {
          try {
            p(u.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(u.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? c(h.value) : s(h.value).then(d, f);
        }
        p((u = u.apply(a, i || [])).next());
      });
    };
  Object.defineProperty(Tr, "__esModule", { value: !0 });
  const t = Qt(),
    r = Wb();
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
        var l, d, f, p, h, v;
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
  return ((Tr.default = n), Tr);
}
var qn = {},
  sl;
function Kb() {
  if (sl) return qn;
  ((sl = 1),
    Object.defineProperty(qn, "__esModule", { value: !0 }),
    (qn._makeParamStoreGetter = void 0));
  const e = Qt(),
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
  function u(l, d, f, p) {
    const v = l.getExperiment(d.experiment_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function s(l, d, f, p) {
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
          return u(l, v, h, f);
        case "layer":
          return s(l, v, h, f);
        default:
          return h;
      }
    };
  }
  return ((qn._makeParamStoreGetter = c), qn);
}
var lr = {},
  ul;
function Yb() {
  if (ul) return lr;
  ul = 1;
  var e =
    (lr && lr.__awaiter) ||
    function (a, i, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(h) {
          try {
            p(u.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(u.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? c(h.value) : s(h.value).then(d, f);
        }
        p((u = u.apply(a, i || [])).next());
      });
    };
  (Object.defineProperty(lr, "__esModule", { value: !0 }),
    (lr.StatsigEvaluationsDataAdapter = void 0));
  const t = Qt(),
    r = yv();
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
  return ((lr.StatsigEvaluationsDataAdapter = n), lr);
}
var cl;
function Jb() {
  if (cl) return Dr;
  cl = 1;
  var e =
    (Dr && Dr.__awaiter) ||
    function (u, s, c, l) {
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
        g((l = l.apply(u, s || [])).next());
      });
    };
  Object.defineProperty(Dr, "__esModule", { value: !0 });
  const t = Qt(),
    r = Hb(),
    n = yv(),
    a = Kb(),
    i = Yb();
  let o = class is extends t.StatsigClientBase {
    static instance(s) {
      const c = (0, t._getStatsigGlobal)().instance(s);
      return c instanceof is
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new is(s ?? "", {}));
    }
    constructor(s, c, l = null) {
      var d, f;
      t.SDKType._setClientType(s, "javascript-client");
      const p = new n.default(l, (v) => {
        this.$emt(v);
      });
      (super(
        s,
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
        (this._store = new r.default(s)),
        (this._network = p),
        (this._user = this._configureUser(c, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (f = l?.plugins) !== null && f !== void 0 ? f : [];
      for (const v of h) v.bind(this);
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
      const p = (0, t._normalizeUser)(s, c),
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
    _getFeatureGateImpl(s, c) {
      var l, d;
      const { result: f, details: p } = this._store.getGate(s),
        h = (0, t._makeFeatureGate)(s, p, f),
        v =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, c),
        g = v ?? h;
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
      const { result: f, details: p } = this._store.getConfig(s),
        h = (0, t._makeDynamicConfig)(s, p, f),
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
          s,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(s, c) {
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
            : p.call(f, g, this._user, c),
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
      const { result: p, details: h } = this._store.getLayer(s),
        v = (0, t._makeLayer)(s, h, p),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, v, this._user, c);
      c?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const b = (0, t._mergeOverride)(
        v,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : v.__value,
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
      const { result: f, details: p } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const h = {
          name: s,
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
  return ((Dr.default = o), Dr);
}
var ll;
function Xb() {
  return (
    ll ||
      ((ll = 1),
      (function (e) {
        var t =
            (cr && cr.__createBinding) ||
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
            (cr && cr.__exportStar) ||
            function (o, u) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(u, s) && t(u, o, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Qt(),
          a = Jb();
        ((e.StatsigClient = a.default), r(Qt(), e));
        const i = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = i;
      })(cr)),
    cr
  );
}
var st = Xb(),
  To = { exports: {} },
  dl;
function Zb() {
  return (
    dl ||
      ((dl = 1),
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
          var p = new a(l, d || s, f),
            h = r ? r + c : c;
          return (
            s._events[h]
              ? s._events[h].fn
                ? (s._events[h] = [s._events[h], p])
                : s._events[h].push(p)
              : ((s._events[h] = p), s._eventsCount++),
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
            for (var f = 0, p = d.length, h = new Array(p); f < p; f++) h[f] = d[f].fn;
            return h;
          }),
          (u.prototype.listenerCount = function (c) {
            var l = r ? r + c : c,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (u.prototype.emit = function (c, l, d, f, p, h) {
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
      })(To)),
    To.exports
  );
}
var Qb = Zb();
const e_ = tr(Qb);
function fl(e, t) {
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
      ? fl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : fl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Va = "@all-features",
  t_ = (function () {
    function e() {
      (fe(this, e), E(this, "eventToValue", new Map()), (this.emitter = new e_()));
    }
    return ve(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, i) {
          var o = this,
            u = a(r, Wt(Wt({}, i), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, u);
          var s = function () {
            var l = a(r, Wt(Wt({}, i), {}, { fireGateExposure: !1 })),
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
            l = o(r, n, a, Wt(Wt({}, u), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(i) === void 0 && this.eventToValue.set(i, l);
          var d = function () {
            var p = o(r, n, a, Wt(Wt({}, u), {}, { fireExperimentExposure: !1 })),
              h = s.eventToValue.get(i);
            h !== p && (s.eventToValue.set(i, p), i(p));
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
            this.emitter.on(Va, r),
            function () {
              n.emitter.off(Va, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(Va),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== Va;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  r_ = "fedramp-moderate";
function n_() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === r_;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Ns = (function (e) {
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
  aa = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  _a = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  a_ = [
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
function vl(e, t) {
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
function os(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : vl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ga = function (t) {
    return os({ perimeter: n_() ? _a.FEDRAMP_MODERATE : _a.COMMERCIAL }, t);
  },
  Vn = function (t, r) {
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
      var u = K(n[o], 2),
        s = u[1],
        c = K(a[o], 2),
        l = c[1];
      if (s !== l) return !1;
    }
    return !0;
  },
  pl = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  i_ = function (t) {
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
    var f = ae(t, a_);
    return os(
      os({}, f),
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
  o_ = Object.entries(Ns).map(function (e) {
    var t = K(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  mv = function (t) {
    var r,
      n,
      a,
      i = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = o_.find(function (o) {
            var u = K(o, 1),
              s = u[0];
            return i.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Ns.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  ss = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  hl = (function () {
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
            var u = Array.isArray(n) ? "array" : Ae(n),
              s = Array.isArray(o) ? "array" : Ae(o);
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
                mv(r.details),
                ss(
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
  gl = (function () {
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
              : n == null || (Ae(o) === Ae(n) && Array.isArray(n) === Array.isArray(o))
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
                mv(r.details),
                function (l, d) {
                  return r.get(d);
                },
                ss(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                ss(
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
  Vr = "0.0.0-development";
function s_(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function wv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (wv = function () {
    return !!e;
  })();
}
function u_(e, t, r) {
  if (wv()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && ha(a, r.prototype), a);
}
function us(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (us = function (n) {
      if (n === null || !s_(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return u_(n, arguments, Y(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        ha(a, n)
      );
    }),
    us(e)
  );
}
function c_(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, Ov() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Ov() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ov = function () {
    return !!e;
  })();
}
var bl = (function (e) {
  function t(r) {
    return (fe(this, t), c_(this, t, [r]));
  }
  return (ze(t, e), ve(t));
})(us(Error));
function _l(e, t) {
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
function l_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _l(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _l(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var d_ = 5e3,
  f_ = "https://api.atlassian.com/flags",
  v_ = "https://api.stg.atlassian.com/flags",
  p_ = "https://api.dev.atlassian.com/flags",
  h_ = "https://api.stg.atlassian-us-gov-mod.com/flags",
  g_ = "https://api.atlassian-us-gov-mod.com/flags",
  b_ = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  __ = "oasis-stg.com/flags",
  y_ = "atlassian-isolated.net/flags",
  m_ = "/gateway/api/flags",
  Mo = (function () {
    function e() {
      fe(this, e);
    }
    return ve(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = de(
            N.mark(function n(a) {
              var i, o;
              return N.wrap(
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
            N.mark(function n(a, i, o) {
              var u;
              return N.wrap(
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
            N.mark(function n(a) {
              var i;
              return N.wrap(function (u) {
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
                        new bl(
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
                      throw new bl("Unexpected 204 response");
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
            N.mark(function n(a) {
              var i;
              return N.wrap(function (u) {
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
          if (n) return m_;
          if (a === _a.FEDRAMP_MODERATE)
            switch (r) {
              case aa.Production:
                return g_;
              case aa.Staging:
                return h_;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === _a.COMMERCIAL)
            switch (r) {
              case aa.Development:
                return p_;
              case aa.Staging:
                var o = this.getApiUrl(i);
                return o !== null ? o : v_;
              default:
                var u = this.getApiUrl(i);
                return u !== null ? u : f_;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = de(
            N.mark(function n(a, i, o, u) {
              var s, c, l, d, f;
              return N.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (s = e.getBaseUrl(
                            o.environment,
                            o.useGatewayURL,
                            o.perimeter,
                            o.isolationContextId,
                          )),
                          (c = o.fetchTimeoutMs || d_),
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
                            "".concat(s).concat(a),
                            l_(
                              {
                                method: i,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Vr,
                                  "X-API-KEY": o.apiKey,
                                },
                                signal: l,
                              },
                              u && { body: JSON.stringify(u) },
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
          if (n === void 0) return r ? b_.replace("%s", r) : null;
          var a = n.protocol,
            i = n.hostname,
            o = i.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(a, "//api.").concat(o[1], ".").concat(__);
          var u = i.match(/([^.]+)\.atlassian-isolated\.net$/);
          return u ? "".concat(a, "//api.").concat(u[1], ".").concat(y_) : null;
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
function yl(e, t) {
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
function Gn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function w_(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, kv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function kv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (kv = function () {
    return !!e;
  })();
}
function O_(e, t, r, n) {
  var a = di(Y(e.prototype), t, r);
  return typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var k_ = (function (e) {
  function t() {
    var r;
    return (
      fe(this, t),
      (r = w_(this, t, ["NoFetchDataAdapter", "nofetch"])),
      E(r, "bootstrapResult", null),
      r
    );
  }
  return (
    ze(t, e),
    ve(t, [
      {
        key: "setBootstrapData",
        value: function (n) {
          this.bootstrapResult = n
            ? {
                source: "Bootstrap",
                data: JSON.stringify(n),
                receivedAt: Date.now(),
                stableID: st.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = de(
            N.mark(function a(i, o) {
              return N.wrap(function (s) {
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
            N.mark(function a(i, o, u) {
              return N.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return c.abrupt(
                          "return",
                          this.bootstrapResult &&
                            Gn(
                              Gn({}, this.bootstrapResult),
                              {},
                              { fullUserHash: st._getFullUserHash(o) },
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
            Gn(Gn({}, this.bootstrapResult), {}, { fullUserHash: st._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = de(
            N.mark(function a(i, o, u) {
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
          var a = st._getStorageKey(this._getSdkKey(), n);
          return "".concat(st.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(a);
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
          O_(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = Gn({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(st.DataAdapterCore);
function ml(e, t) {
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
      ? ml(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ml(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function S_(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = E_(e)) || t) {
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
function E_(e, t) {
  if (e) {
    if (typeof e == "string") return wl(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? wl(e, t)
          : void 0
    );
  }
}
function wl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Lo = "LocalOverride:Recognized",
  x_ = "STATSIG_OVERRIDES",
  Ol = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Mr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  We = function (t, r) {
    return r + ":" + t;
  },
  C_ = (function () {
    function e(t) {
      (fe(this, e),
        (this._overrides = Mr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return ve(e, [
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
          for (var r = Mr(), n = arguments.length, a = new Array(n), i = 0; i < n; i++)
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
                m = K(g[v], 2),
                w = m[0],
                O = m[1];
              r.configs[w] = O;
            }
            for (
              var y = 0, S = Object.entries((x = s.layers) !== null && x !== void 0 ? x : {});
              y < S.length;
              y++
            ) {
              var x,
                j = K(S[y], 2),
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
            this.parseStoredOverrides(Ol),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Ol);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var i = a[n],
              o = new Set(Object.keys(i)),
              u = S_(o),
              s;
            try {
              for (u.s(); !(s = u.n()).done; ) {
                var c = s.value,
                  l = Ge._DJB2(c);
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
          var n = Ce(Ce({}, Mr()), r);
          this._djb2Map.clear();
          for (var a = 0, i = Object.entries(n); a < i.length; a++)
            for (
              var o = K(i[a], 2), u = o[0], s = o[1], c = 0, l = Object.entries(s);
              c < l.length;
              c++
            ) {
              var d = K(l[c], 2),
                f = d[0],
                p = d[1];
              this._djb2Map.set(We(Ge._DJB2(f), u), p);
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
            this._djb2Map.set(We(Ge._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(We(Ge._DJB2(r), "gates")),
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
            : Ce(Ce({}, r), {}, { value: i, details: Ce(Ce({}, r.details), {}, { reason: Lo }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(We(Ge._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(We(Ge._DJB2(r), "configs")),
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
            this._djb2Map.set(We(Ge._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(We(Ge._DJB2(r), "configs")),
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
            this._djb2Map.set(We(Ge._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(We(Ge._DJB2(r), "layers")),
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
                  get: Ge._makeTypedGet(r.name, i),
                  details: Ce(Ce({}, r.details), {}, { reason: Lo }),
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
                  get: Ge._makeTypedGet(r.name, i),
                  details: Ce(Ce({}, r.details), {}, { reason: Lo }),
                },
              );
        },
      },
    ]);
  })(),
  R_ = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function kl(e, t) {
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
      ? kl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : kl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Sl = "client-default-key",
  P_ = "https://xp.atlassian.com/v1/rgstr",
  A_ = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? x_ : n,
        i = r.overrideAdapter;
      (fe(this, e),
        E(this, "initPromise", null),
        E(this, "initCompleted", !1),
        E(this, "initWithDefaults", !1),
        E(this, "hasCheckGateErrorOccurred", !1),
        E(this, "hasGetExperimentErrorOccurred", !1),
        E(this, "hasGetExperimentValueErrorOccurred", !1),
        E(this, "hasGetLayerErrorOccurred", !1),
        E(this, "hasGetLayerValueErrorOccurred", !1),
        E(this, "subscriptions", new t_()),
        E(this, "dataAdapter", new k_()),
        E(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = i || new C_(a)));
    }
    return ve(e, [
      {
        key: "initialize",
        value: (function () {
          var t = de(
            N.mark(function n(a, i, o) {
              var u = this,
                s,
                c;
              return N.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = Ga(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          Vn(s, this.initOptions) ||
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
                                p = f - c;
                              u.fireClientEvent(c, p, "initialize", u.initCompleted, s.apiKey);
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
            N.mark(function n(a, i, o, u) {
              var s = this,
                c,
                l;
              return N.wrap(
                function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        if (((c = Ga(a)), !this.initPromise)) {
                          f.next = 4;
                          break;
                        }
                        return (
                          Vn(c, this.initOptions) ||
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
                          this.provider.setClientVersion(Vr),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(c, i, o, u)
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
                var l = Kt(
                  {
                    targetApp: u.initOptions.targetApp,
                    clientVersion: Vr,
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
                u.initOptions.environment !== aa.Production &&
                  console.error("Analytics web client promise did not resolve", c);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = de(
            N.mark(function n(a, i, o) {
              var u = this,
                s,
                c,
                l,
                d = arguments;
              return N.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (
                          ((s = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (c = Ga(a)),
                          !this.initPromise)
                        ) {
                          p.next = 5;
                          break;
                        }
                        return (
                          Vn(c, this.initOptions) ||
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
                          (this.initOptions = c),
                          (this.initPromise = this.initFromValues(c, i, o, s)
                            .then(function () {
                              ((u.initCompleted = !0), (u.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var h = performance.now(),
                                v = h - l;
                              u.fireClientEvent(l, v, "initializeFromValues", u.initCompleted);
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
          var t = de(
            N.mark(function n(a, i, o) {
              var u, s;
              return N.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (u = Ga(a)),
                          (s = function () {
                            return Mo.fetchExperimentValues(u, i, o).then(function (f) {
                              var p = f.experimentValues,
                                h = f.customAttributes;
                              return { experimentValues: p, customAttributesFromFetch: h };
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
            N.mark(function n(a, i) {
              var o = this;
              return N.wrap(
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
            N.mark(function n(a, i) {
              var o,
                u,
                s = arguments;
              return N.wrap(
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
            N.mark(function n() {
              return N.wrap(
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
            return hl.fromExperiment(
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
              new hl(r, {}, "", { time: Date.now(), reason: Ns.Error })
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
          return Vn(this.currentIdentifiers, r) && Vn(this.currentAttributes, n);
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
            N.mark(function n(a, i, o) {
              var u, s, c, l, d, f, p, h;
              return N.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (u = Kt({}, a)),
                          (g.prev = 1),
                          (l = Mo.fetchClientSdk(a).then(function (b) {
                            return (u.sdkKey = b.clientSdkKey);
                          })),
                          (d = Mo.fetchExperimentValues(a, i, o)),
                          (g.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((f = g.sent),
                          (p = K(f, 2)),
                          (h = p[1]),
                          (s = h.experimentValues),
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
            N.mark(function n(a, i, o, u) {
              var s, c, l, d, f, p, h, v;
              return N.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (s = Kt(Kt({}, a), {}, { disableCurrentPageLogging: !0 })),
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
            N.mark(function n(a, i, o) {
              var u,
                s,
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
                          (s = h.length > 3 && h[3] !== void 0 ? h[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = i),
                          (this.currentAttributes = o),
                          (c = i_(a)),
                          c.sdkKey || (c.sdkKey = Sl),
                          ((u = c.networkConfig) !== null && u !== void 0 && u.logEventUrl) ||
                            (c.networkConfig = Kt(
                              Kt({}, c.networkConfig),
                              {},
                              { logEventUrl: P_ },
                            )),
                          c.perimeter === _a.FEDRAMP_MODERATE && (c.disableLogging = !0),
                          (l = c.sdkKey),
                          (d = c.environment),
                          c.updateUserCompletionCallback,
                          c.perimeter,
                          (f = ae(c, R_)),
                          (this.user = pl(i, o)),
                          (p = Kt(
                            Kt({}, f),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: st.LogEventCompressionMode.Forced,
                            },
                          )),
                          i.stableId
                            ? st.StableID.setOverride(i.stableId, l)
                            : (p.disableStableID = !0),
                          (g.prev = 12),
                          (this.statsigClient = new st.StatsigClient(l, this.user, p)),
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
                          (this.statsigClient = new st.StatsigClient(Sl, this.user, p)),
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
            N.mark(function n(a, i, o) {
              var u = this,
                s,
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
                              N.mark(function p() {
                                return N.wrap(function (v) {
                                  for (;;)
                                    switch ((v.prev = v.next)) {
                                      case 0:
                                        if (((u.initPromise = s), !u.provider)) {
                                          v.next = 4;
                                          break;
                                        }
                                        return (
                                          (v.next = 4),
                                          u.provider.setProfile(
                                            u.initOptions,
                                            u.currentIdentifiers,
                                            u.currentAttributes,
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
          var t = de(
            N.mark(function n(a, i, o) {
              var u, s, c, l, d, f, p, h, v;
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
                        ((c = b.sent), (l = pl(i, c.customAttributesFromFetch)), (b.next = 13));
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
                          ((u = this.initOptions) === null ||
                            u === void 0 ||
                            (s = u.updateUserCompletionCallback) === null ||
                            s === void 0 ||
                            s.call(u, h, v),
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
              i = a === void 0 ? !0 : a;
            return gl.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !i }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              gl.fromLayer(st._makeLayer(r, { reason: "Error" }, null))
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
  I,
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
I = U;
E(U, "client", new A_());
E(U, "hasCheckGateErrorOccurred", !1);
E(U, "hasGetExperimentValueErrorOccurred", !1);
E(U, "checkGate", function (e, t) {
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
E(U, "getExperimentValue", function (e, t, r, n) {
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
E(U, "initializeCalled", I.client.initializeCalled.bind(I.client));
E(U, "initializeCompleted", I.client.initializeCompleted.bind(I.client));
E(U, "waitUntilInitializeCompleted", I.client.waitUntilInitializeCompleted.bind(I.client));
E(U, "initialize", I.client.initialize.bind(I.client));
E(U, "initializeWithProvider", I.client.initializeWithProvider.bind(I.client));
E(U, "initializeFromValues", I.client.initializeFromValues.bind(I.client));
E(U, "manuallyLogGateExposure", I.client.manuallyLogGateExposure.bind(I.client));
E(U, "getExperiment", I.client.getExperiment.bind(I.client));
E(U, "manuallyLogExperimentExposure", I.client.manuallyLogExperimentExposure.bind(I.client));
E(U, "manuallyLogLayerExposure", I.client.manuallyLogLayerExposure.bind(I.client));
E(U, "shutdownStatsig", I.client.shutdownStatsig.bind(I.client));
E(U, "overrideGate", I.client.overrideGate.bind(I.client));
E(U, "clearGateOverride", I.client.clearGateOverride.bind(I.client));
E(U, "overrideConfig", I.client.overrideConfig.bind(I.client));
E(U, "clearConfigOverride", I.client.clearConfigOverride.bind(I.client));
E(U, "setOverrides", I.client.setOverrides.bind(I.client));
E(U, "getOverrides", I.client.getOverrides.bind(I.client));
E(U, "clearAllOverrides", I.client.clearAllOverrides.bind(I.client));
E(U, "isCurrentUser", I.client.isCurrentUser.bind(I.client));
E(U, "onGateUpdated", I.client.onGateUpdated.bind(I.client));
E(U, "onExperimentValueUpdated", I.client.onExperimentValueUpdated.bind(I.client));
E(U, "onAnyUpdated", I.client.onAnyUpdated.bind(I.client));
E(U, "updateUser", I.client.updateUser.bind(I.client));
E(U, "updateUserWithProvider", I.client.updateUserWithProvider.bind(I.client));
E(U, "updateUserWithValues", I.client.updateUserWithValues.bind(I.client));
E(U, "getPackageVersion", I.client.getPackageVersion.bind(I.client));
E(U, "getLayer", I.client.getLayer.bind(I.client));
E(U, "getLayerValue", I.client.getLayerValue.bind(I.client));
var cs = U;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = U;
  else {
    var Ha, Fo;
    cs = window.__FEATUREGATES_JS__;
    var El =
      ((Ha = cs) === null || Ha === void 0 || (Fo = Ha.getPackageVersion) === null || Fo === void 0
        ? void 0
        : Fo.call(Ha)) || "4.10.0 or earlier";
    if (El !== Vr) {
      var j_ = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(El, " when module version ")
        .concat(Vr, " was loading.");
      console.warn(j_);
    }
  }
var Lr,
  Fr,
  I_ =
    (globalThis == null ||
    (Lr = globalThis.process) === null ||
    Lr === void 0 ||
    (Lr = Lr.env) === null ||
    Lr === void 0
      ? void 0
      : Lr.JEST_WORKER_ID) !== void 0,
  D_ =
    !I_ &&
    (globalThis == null ||
    (Fr = globalThis.process) === null ||
    Fr === void 0 ||
    (Fr = Fr.env) === null ||
    Fr === void 0
      ? void 0
      : Fr.NODE_ENV) !== "production",
  T_ = function () {
    var t;
    D_ && (t = console).debug.apply(t, arguments);
  },
  zs = {},
  M_ = "@atlaskit/platform-feature-flags",
  sa = "__PLATFORM_FEATURE_FLAGS__",
  Sv = typeof process < "u" && typeof zs < "u",
  L_ = Sv ? zs.ENABLE_PLATFORM_FF === "true" : !1,
  F_ = Sv ? zs.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  $_ = L_ || F_,
  N_ = { booleanResolver: void 0 },
  ua = typeof window < "u" ? window : globalThis;
ua[sa] = ua[sa] || N_;
function z_(e) {
  if ($_)
    return (
      T_(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        M_,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = ua[sa]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = ua[sa]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return cs.checkGate(e);
    var a = (n = ua[sa]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function Le(e) {
  return z_(e);
}
var B_ = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  U_ = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  q_ = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  V_ = { core: 16, utility: 12 },
  G_ = {
    core: {
      medium: { none: 0, compact: 4, spacious: 4 },
      small: { none: 0, compact: 2.66, spacious: 8 },
    },
    utility: {
      medium: { none: 0, compact: 2, spacious: 6 },
      small: { none: 0, compact: 2, spacious: 6 },
    },
  },
  xl = _.memo(function (t) {
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
      p = n.shouldScale,
      h = n.LEGACY_margin,
      v = n.spacing,
      g = v === void 0 ? "none" : v,
      b = n.name,
      m = f ? { __html: f } : void 0;
    if (d && !Le("platform-visual-refresh-icons"))
      return _.createElement(d, {
        primaryColor: s ?? i,
        secondaryColor: c,
        size: l,
        label: u,
        testId: o,
        UNSAFE_margin: h,
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
    var S = V_[w],
      x = G_[w][O][g],
      j = S + 2 * x;
    return _.createElement(
      "span",
      {
        "data-testid": o,
        role: u ? "img" : void 0,
        "aria-label": u || void 0,
        "aria-hidden": u ? void 0 : !0,
        style: { color: i },
        className: C([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          p && "_1bsb1kw7 _4t3i1kw7",
          (w === "utility" || O === "small") && "_vwz4utpp",
        ]),
      },
      _.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - x, " ")
          .concat(0 - x, " ")
          .concat(j, " ")
          .concat(j),
        role: "presentation",
        dangerouslySetInnerHTML: m,
        className: C([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : w === "utility" ? q_[g] : O === "small" ? U_[g] : B_[g],
        ]),
      }),
    );
  });
const H_ = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: xl, default: xl }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Pi = Ms(H_);
var Cl;
function W_() {
  if (Cl) return Bn;
  ((Cl = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.default = void 0));
  var e = r(ft()),
    t = r(Pi);
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
  return ((n.displayName = "ChevronLeftIcon"), (Bn.default = n), Bn);
}
var Hn = {};
function Rl(e, t) {
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
function Pl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Rl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var K_ = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  Al = _.memo(function (t) {
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
      p = r.UNSAFE_margin,
      h = a
        ? { dangerouslySetInnerHTML: { __html: a } }
        : { children: n ? _.createElement(n, { role: "presentation" }) : null },
      v = d && f ? { width: d + "px", height: f + "px" } : null;
    return _.createElement(
      "span",
      te(
        {
          "data-testid": c,
          "data-vc": "icon-".concat(c),
          role: l ? "img" : void 0,
          "aria-label": l || void 0,
          "aria-hidden": l ? void 0 : !0,
          style: Pl(
            Pl({}, v),
            {},
            { "--icon-primary-color": o, "--icon-secondary-color": u, margin: p },
          ),
        },
        h,
        {
          className: C([
            "_1e0c1o8l _1o9zidpf _vyfuvuon _vwz4kb7n _1szv15vq _1tly15vq _rzyw1osq _17jb1osq _1ksvoz0e _3se1x1jp _re2rglyw _1veoyfq0 _1kg81r31",
            "_jcxd1r8n _gq0g1onz _1trkwc43",
            o === u && "_18hbwc43",
            u === "transparent" && "_4fyi1j28",
            s && K_[s],
          ]),
        },
      ),
    );
  });
const Y_ = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Al, default: Al }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Ev = Ms(Y_);
var jl;
function J_() {
  if (jl) return Hn;
  ((jl = 1), Object.defineProperty(Hn, "__esModule", { value: !0 }), (Hn.default = void 0));
  var e = r(ft()),
    t = Ev;
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
  return ((n.displayName = "ChevronLeftLargeIcon"), (Hn.default = n), Hn);
}
var Il;
function X_() {
  if (Il) return zn;
  ((Il = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.default = void 0));
  var e = n(ft()),
    t = n(W_()),
    r = n(J_());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronLeftIcon", LEGACY_fallbackIcon: r.default }, i),
    );
  return ((a.displayName = "ChevronLeftIconMigration"), (zn.default = a), zn);
}
var Z_ = X_();
const Q_ = tr(Z_);
var Wn = {},
  Kn = {},
  Dl;
function ey() {
  if (Dl) return Kn;
  ((Dl = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.default = void 0));
  var e = r(ft()),
    t = r(Pi);
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
  return ((n.displayName = "ChevronRightIcon"), (Kn.default = n), Kn);
}
var Yn = {},
  Tl;
function ty() {
  if (Tl) return Yn;
  ((Tl = 1), Object.defineProperty(Yn, "__esModule", { value: !0 }), (Yn.default = void 0));
  var e = r(ft()),
    t = Ev;
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
  return ((n.displayName = "ChevronRightLargeIcon"), (Yn.default = n), Yn);
}
var Ml;
function ry() {
  if (Ml) return Wn;
  ((Ml = 1), Object.defineProperty(Wn, "__esModule", { value: !0 }), (Wn.default = void 0));
  var e = n(ft()),
    t = n(ey()),
    r = n(ty());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronRightIcon", LEGACY_fallbackIcon: r.default }, i),
    );
  return ((a.displayName = "ChevronRightIconMigration"), (Wn.default = a), Wn);
}
var ny = ry();
const ay = tr(ny);
var Bs = _.createContext("elevation.surface"),
  iy = function () {
    return _.useContext(Bs);
  };
Bs.displayName = "SurfaceProvider";
var oy = [
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
  sy = ["className"],
  uy = {
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
  xv = {
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
  cy = {
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
  ly = {
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
  dy = {
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
  fy = {
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
  Ai = _.forwardRef(function (e, t) {
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
      p = e.paddingInline,
      h = p === void 0 ? o : p,
      v = e.paddingInlineStart,
      g = v === void 0 ? h : v,
      b = e.paddingInlineEnd,
      m = b === void 0 ? h : b,
      w = e.style,
      O = e.testId,
      y = e.xcss,
      S = ae(e, oy);
    S.className;
    var x = ae(S, sy),
      j = _.createElement(
        n,
        te(
          {
            style: w,
            ref: t,
            className: C([
              "_19itglyw _vchhusvi _r06hglyw",
              i && uy[i],
              i && vy(i) && xv[i],
              l && cy[l],
              f && ly[f],
              g && dy[g],
              m && fy[m],
              y,
            ]),
          },
          x,
          { "data-testid": O },
        ),
        a,
      );
    return i ? _.createElement(Bs.Provider, { value: i }, j) : j;
  });
function vy(e) {
  return e in xv;
}
const $o = () =>
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
  Cv = (...e) => C(e);
function py() {
  return {
    css() {
      throw $o();
    },
    cssMap() {
      throw $o();
    },
    cx: Cv,
    XCSSProp() {
      throw $o();
    },
  };
}
var hy = py(),
  gy = hy.cx,
  by = [
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
  Ll = {
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
  Fl = {
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
  _y = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  yy = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  my = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  wy = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  Oy = { root: "_1e0c1txw _vchhusvi" },
  hi = _.memo(
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
        p = e.wrap,
        h = e.xcss,
        v = ae(e, by);
      return _.createElement(
        n,
        te({}, v, {
          role: a,
          className: C([
            Oy.root,
            u && Fl[u],
            s && Fl[s],
            u && Ll[u],
            c && Ll[c],
            i && wy[i],
            f && yy[f],
            o && _y[o],
            p && my[p],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
hi.displayName = "Flex";
var ky = [
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
  ls = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  Sy = function (t) {
    var r = t.children;
    return _.createElement("span", { className: C([ls.separator]) }, r);
  },
  Qa = _.memo(
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
        p = e.xcss,
        h = e.testId,
        v = e.role,
        g = e.children,
        b = ae(e, ky),
        m = typeof f == "string" ? _.createElement(Sy, null, f) : f,
        w = m
          ? _.Children.toArray(g)
              .filter(Boolean)
              .map(function (O, y) {
                return _.createElement(_.Fragment, { key: y }, f && y > 0 ? m : null, O);
              })
          : g;
      return _.createElement(
        hi,
        te({}, b, {
          as: r,
          role: v,
          alignItems: i,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: u ? "wrap" : void 0,
          xcss: gy(c === "hug" && ls.hug, c === "fill" && ls.fill, p),
          testId: h,
          ref: t,
        }),
        w,
      );
    }),
  );
Qa.displayName = "Inline";
var Ey = "Invariant failed";
function xy(e, t) {
  if (!e) throw new Error(Ey);
}
var Rv = _.createContext(!1),
  Cy = function () {
    return _.useContext(Rv);
  },
  Ry = Rv.Provider,
  Py = ["span", "p", "strong", "em"],
  Ay = function (t, r) {
    var n = iy();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return $l.hasOwnProperty(n) ? $l[n] : "color.text";
    }
  },
  $r = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  jy = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  Iy = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  Dy = {
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
  $l = {
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
  Ty = _.forwardRef(function (e, t) {
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
    xy(Py.includes(n));
    var p = Cy(),
      h = Ay(a, p);
    !s && !p && (s = "medium");
    var v = _.createElement(
      n,
      {
        id: u,
        className: C([
          $r.root,
          s && jy[s],
          h && Dy[h],
          l && $r.truncation,
          l === 1 && $r.breakAll,
          i && $r["textAlign.".concat(i)],
          c && Iy[c],
          n === "em" && $r["as.em"],
          n === "strong" && $r["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": o,
        ref: t,
      },
      f,
    );
    return p ? v : _.createElement(Ry, { value: !0 }, v);
  });
function My() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var Ly = ["as", "children", "isInset", "testId", "style", "xcss"],
  Fy = ["className"],
  $y = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      i = e.isInset,
      o = e.testId,
      u = e.style,
      s = e.xcss,
      c = ae(e, Ly);
    c.className;
    var l = ae(c, Fy);
    return _.createElement(
      n,
      te({}, l, {
        ref: t,
        className: C([
          "_mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          i && "_1ah31gjf _2mwq1gjf",
          Le("platform_dst_compiled_primitives_outline_reset") && "_ymio1r31 _ypr0glyw _zcxs1o36",
          s,
        ]),
        style: u,
        "data-testid": o,
      }),
      a,
    );
  }),
  Ny = [
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
  zy = ["className"],
  Nl = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  By = _.forwardRef(function (e, t) {
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
      p = e.xcss,
      h = e.tabIndex,
      v = ae(e, Ny),
      g = _.useContext($s),
      b = _.useCallback(
        function (O, y) {
          (g && g.tracePress(s, O.timeStamp), u(O, y));
        },
        [u, g, s],
      ),
      m = ga({
        fn: b,
        action: "clicked",
        componentName: c || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    v.className;
    var w = ae(v, zy);
    return _.createElement(
      $y,
      te({ as: "button", tabIndex: h ?? (My() && !n ? 0 : void 0), style: d }, w, {
        type: i,
        onClick: m,
        disabled: n,
        xcss: Cv(Nl.root, n && Nl.disabled, p),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  No = {},
  Jn = {},
  zl;
function Pv() {
  if (zl) return Jn;
  ((zl = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.bind = void 0));
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
  return ((Jn.bind = e), Jn);
}
var dr = {},
  Bl;
function Uy() {
  if (Bl) return dr;
  Bl = 1;
  var e =
    (dr && dr.__assign) ||
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
  (Object.defineProperty(dr, "__esModule", { value: !0 }), (dr.bindAll = void 0));
  var t = Pv();
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
  return ((dr.bindAll = a), dr);
}
var Ul;
function qy() {
  return (
    Ul ||
      ((Ul = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = Pv();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = Uy();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(No)),
    No
  );
}
var ji = qy(),
  Vy = function () {
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
  Av = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: Vy() });
  },
  Gy = Av(),
  Hy = _.createContext(Av()),
  Wy = function (e) {
    return e.value++;
  },
  Ky = function (e) {
    return e ? e.prefix : "";
  },
  Yy = function (e) {
    var t = e || Gy,
      r = Ky(t),
      n = Wy(t),
      a = r + n,
      i = function (o) {
        return a + t.uid(o);
      };
    return { uid: a, gen: i };
  },
  jv = function () {
    var e = _.useContext(Hy),
      t = _.useState(function () {
        return Yy(e);
      })[0];
    return t;
  },
  Jy = function () {
    var e = jv().uid;
    return e;
  },
  Xy = function () {
    var e = jv().gen;
    return e;
  },
  zo,
  ei = (zo = k.useId) !== null && zo !== void 0 ? zo : void 0;
function Zy() {
  return ei && Le("platform-dst-react-18-use-id")
    ? Le("platform-dst-react-18-use-id-selector-safe")
      ? ei().replace(/[:«»]/g, "_")
      : ei()
    : "uid".concat(Jy());
}
function Qy() {
  if (ei && Le("platform-dst-react-18-use-id")) {
    var e = Zy();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return Xy();
}
var Iv = function (t) {
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
        className: C([
          "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
        ]),
      },
      r,
    );
  },
  em = {
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
  tm = ["children"];
function rm(e) {
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
      s = ae(o, tm),
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
var nm = rm(function () {
    return { mode: "light" };
  }),
  am = nm.useTheme;
function im(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function om(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var sm = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(om(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = im(a);
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
  gi = "-moz-",
  Z = "-webkit-",
  Dv = "comm",
  Us = "rule",
  qs = "decl",
  um = "@import",
  Tv = "@keyframes",
  cm = "@layer",
  lm = Math.abs,
  Ii = String.fromCharCode,
  dm = Object.assign;
function fm(e, t) {
  return _e(e, 0) ^ 45
    ? (((((((t << 2) ^ _e(e, 0)) << 2) ^ _e(e, 1)) << 2) ^ _e(e, 2)) << 2) ^ _e(e, 3)
    : 0;
}
function Mv(e) {
  return e.trim();
}
function vm(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, r) {
  return e.replace(t, r);
}
function ds(e, t) {
  return e.indexOf(t);
}
function _e(e, t) {
  return e.charCodeAt(t) | 0;
}
function ya(e, t, r) {
  return e.slice(t, r);
}
function gt(e) {
  return e.length;
}
function Vs(e) {
  return e.length;
}
function Wa(e, t) {
  return (t.push(e), e);
}
function pm(e, t) {
  return e.map(t).join("");
}
var Di = 1,
  Wr = 1,
  Lv = 0,
  je = 0,
  he = 0,
  en = "";
function Ti(e, t, r, n, a, i, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: i,
    line: Di,
    column: Wr,
    length: o,
    return: "",
  };
}
function Xn(e, t) {
  return dm(Ti("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function hm() {
  return he;
}
function gm() {
  return ((he = je > 0 ? _e(en, --je) : 0), Wr--, he === 10 && ((Wr = 1), Di--), he);
}
function Fe() {
  return ((he = je < Lv ? _e(en, je++) : 0), Wr++, he === 10 && ((Wr = 1), Di++), he);
}
function mt() {
  return _e(en, je);
}
function ti() {
  return je;
}
function Ra(e, t) {
  return ya(en, e, t);
}
function ma(e) {
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
function Fv(e) {
  return ((Di = Wr = 1), (Lv = gt((en = e))), (je = 0), []);
}
function $v(e) {
  return ((en = ""), e);
}
function ri(e) {
  return Mv(Ra(je - 1, fs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function bm(e) {
  for (; (he = mt()) && he < 33; ) Fe();
  return ma(e) > 2 || ma(he) > 3 ? "" : " ";
}
function _m(e, t) {
  for (; --t && Fe() && !(he < 48 || he > 102 || (he > 57 && he < 65) || (he > 70 && he < 97)); );
  return Ra(e, ti() + (t < 6 && mt() == 32 && Fe() == 32));
}
function fs(e) {
  for (; Fe(); )
    switch (he) {
      case e:
        return je;
      case 34:
      case 39:
        e !== 34 && e !== 39 && fs(he);
        break;
      case 40:
        e === 41 && fs(e);
        break;
      case 92:
        Fe();
        break;
    }
  return je;
}
function ym(e, t) {
  for (; Fe() && e + he !== 57; ) if (e + he === 84 && mt() === 47) break;
  return "/*" + Ra(t, je - 1) + "*" + Ii(e === 47 ? e : Fe());
}
function mm(e) {
  for (; !ma(mt()); ) Fe();
  return Ra(e, je);
}
function wm(e) {
  return $v(ni("", null, null, null, [""], (e = Fv(e)), 0, [0], e));
}
function ni(e, t, r, n, a, i, o, u, s) {
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
      y = i,
      S = n,
      x = w;
    g;

  )
    switch (((h = m), (m = Fe()))) {
      case 40:
        if (h != 108 && _e(x, d - 1) == 58) {
          ds((x += Q(ri(m), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += ri(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += bm(h);
        break;
      case 92:
        x += _m(ti() - 1, 7);
        continue;
      case 47:
        switch (mt()) {
          case 42:
          case 47:
            Wa(Om(ym(Fe(), ti()), t, r), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * v:
        u[c++] = gt(x) * b;
      case 125 * v:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            (b == -1 && (x = Q(x, /\f/g, "")),
              p > 0 &&
                gt(x) - d &&
                Wa(p > 32 ? Vl(x + ";", n, r, d - 1) : Vl(Q(x, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            x += ";";
          default:
            if ((Wa((S = ql(x, t, r, c, l, a, u, w, (O = []), (y = []), d)), i), m === 123))
              if (l === 0) ni(x, t, S, S, O, i, d, u, y);
              else
                switch (f === 99 && _e(x, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ni(
                      e,
                      S,
                      S,
                      n && Wa(ql(e, S, S, 0, 0, a, u, w, a, (O = []), d), y),
                      a,
                      y,
                      d,
                      u,
                      n ? O : y,
                    );
                    break;
                  default:
                    ni(x, S, S, S, [""], y, 0, u, y);
                }
        }
        ((c = l = p = 0), (v = b = 1), (w = x = ""), (d = o));
        break;
      case 58:
        ((d = 1 + gt(x)), (p = h));
      default:
        if (v < 1) {
          if (m == 123) --v;
          else if (m == 125 && v++ == 0 && gm() == 125) continue;
        }
        switch (((x += Ii(m)), m * v)) {
          case 38:
            b = l > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            ((u[c++] = (gt(x) - 1) * b), (b = 1));
            break;
          case 64:
            (mt() === 45 && (x += ri(Fe())), (f = mt()), (l = d = gt((w = x += mm(ti())))), m++);
            break;
          case 45:
            h === 45 && gt(x) == 2 && (v = 0);
        }
    }
  return i;
}
function ql(e, t, r, n, a, i, o, u, s, c, l) {
  for (var d = a - 1, f = a === 0 ? i : [""], p = Vs(f), h = 0, v = 0, g = 0; h < n; ++h)
    for (var b = 0, m = ya(e, d + 1, (d = lm((v = o[h])))), w = e; b < p; ++b)
      (w = Mv(v > 0 ? f[b] + " " + m : Q(m, /&\f/g, f[b]))) && (s[g++] = w);
  return Ti(e, t, r, a === 0 ? Us : u, s, c, l);
}
function Om(e, t, r) {
  return Ti(e, t, r, Dv, Ii(hm()), ya(e, 2, -2), 0);
}
function Vl(e, t, r, n) {
  return Ti(e, t, r, qs, ya(e, 0, n), ya(e, n + 1, -1), n);
}
function Gr(e, t) {
  for (var r = "", n = Vs(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function km(e, t, r, n) {
  switch (e.type) {
    case cm:
      if (e.children.length) break;
    case um:
    case qs:
      return (e.return = e.return || e.value);
    case Dv:
      return "";
    case Tv:
      return (e.return = e.value + "{" + Gr(e.children, n) + "}");
    case Us:
      e.value = e.props.join(",");
  }
  return gt((r = Gr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function Sm(e) {
  var t = Vs(e);
  return function (r, n, a, i) {
    for (var o = "", u = 0; u < t; u++) o += e[u](r, n, a, i) || "";
    return o;
  };
}
function Em(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function xm(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var Cm = function (t, r, n) {
    for (var a = 0, i = 0; (a = i), (i = mt()), a === 38 && i === 12 && (r[n] = 1), !ma(i); ) Fe();
    return Ra(t, je);
  },
  Rm = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (ma(a)) {
        case 0:
          (a === 38 && mt() === 12 && (r[n] = 1), (t[n] += Cm(je - 1, r, n)));
          break;
        case 2:
          t[n] += ri(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = mt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Ii(a);
      }
    while ((a = Fe()));
    return t;
  },
  Pm = function (t, r) {
    return $v(Rm(Fv(t), r));
  },
  Gl = new WeakMap(),
  Am = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Gl.get(n)) && !a) {
        Gl.set(t, !0);
        for (var i = [], o = Pm(r, i), u = n.props, s = 0, c = 0; s < o.length; s++)
          for (var l = 0; l < u.length; l++, c++)
            t.props[c] = i[s] ? o[s].replace(/&\f/g, u[l]) : u[l] + " " + o[s];
      }
    }
  },
  jm = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Nv(e, t) {
  switch (fm(e, t)) {
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
      return Z + e + gi + e + me + e + e;
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
        switch (_e(e, t + 1)) {
          case 109:
            if (_e(e, t + 4) !== 45) break;
          case 102:
            return (
              Q(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Z + "$2-$3$1" + gi + (_e(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~ds(e, "stretch") ? Nv(Q(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (_e(e, t + 1) !== 115) break;
    case 6444:
      switch (_e(e, gt(e) - 3 - (~ds(e, "!important") && 10))) {
        case 107:
          return Q(e, ":", ":" + Z) + e;
        case 101:
          return (
            Q(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Z +
                (_e(e, 14) === 45 ? "inline-" : "") +
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
      switch (_e(e, t + 11)) {
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
var Im = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case qs:
          t.return = Nv(t.value, t.length);
          break;
        case Tv:
          return Gr([Xn(t, { value: Q(t.value, "@", "@" + Z) })], a);
        case Us:
          if (t.length)
            return pm(t.props, function (i) {
              switch (vm(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Gr([Xn(t, { props: [Q(i, /:(read-\w+)/, ":" + gi + "$1")] })], a);
                case "::placeholder":
                  return Gr(
                    [
                      Xn(t, { props: [Q(i, /:(plac\w+)/, ":" + Z + "input-$1")] }),
                      Xn(t, { props: [Q(i, /:(plac\w+)/, ":" + gi + "$1")] }),
                      Xn(t, { props: [Q(i, /:(plac\w+)/, me + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  Dm = [Im],
  Tm = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (v) {
        var g = v.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || Dm,
      i = {},
      o,
      u = [];
    ((o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (v) {
          for (var g = v.getAttribute("data-emotion").split(" "), b = 1; b < g.length; b++)
            i[g[b]] = !0;
          u.push(v);
        },
      ));
    var s,
      c = [Am, jm];
    {
      var l,
        d = [
          km,
          Em(function (v) {
            l.insert(v);
          }),
        ],
        f = Sm(c.concat(a, d)),
        p = function (g) {
          return Gr(wm(g), f);
        };
      s = function (g, b, m, w) {
        ((l = m), p(g ? g + "{" + b.styles + "}" : b.styles), w && (h.inserted[b.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new sm({
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
    return (h.sheet.hydrate(u), h);
  },
  Bo = { exports: {} },
  ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hl;
function Mm() {
  if (Hl) return ee;
  Hl = 1;
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
                case h:
                case p:
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
    (ee.Lazy = h),
    (ee.Memo = p),
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
      return w(y) === h;
    }),
    (ee.isMemo = function (y) {
      return w(y) === p;
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
          (y.$$typeof === h ||
            y.$$typeof === p ||
            y.$$typeof === o ||
            y.$$typeof === u ||
            y.$$typeof === l ||
            y.$$typeof === g ||
            y.$$typeof === b ||
            y.$$typeof === m ||
            y.$$typeof === v))
      );
    }),
    (ee.typeOf = w),
    ee
  );
}
var Wl;
function Lm() {
  return (Wl || ((Wl = 1), (Bo.exports = Mm())), Bo.exports);
}
var Uo, Kl;
function Fm() {
  if (Kl) return Uo;
  Kl = 1;
  var e = Lm(),
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
  var u = Object.defineProperty,
    s = Object.getOwnPropertyNames,
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
      var m = s(v);
      c && (m = m.concat(c(v)));
      for (var w = o(h), O = o(v), y = 0; y < m.length; ++y) {
        var S = m[y];
        if (!r[S] && !(g && g[S]) && !(O && O[S]) && !(w && w[S])) {
          var x = l(v, S);
          try {
            u(h, S, x);
          } catch {}
        }
      }
    }
    return h;
  }
  return ((Uo = p), Uo);
}
Fm();
var $m = !0;
function zv(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var Gs = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || $m === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  Bv = function (t, r, n) {
    Gs(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do (t.insert(r === i ? "." + a : "", i, t.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function Nm(e) {
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
var zm = {
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
  Bm = /[A-Z]|^ms/g,
  Um = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Uv = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Yl = function (t) {
    return t != null && typeof t != "boolean";
  },
  qo = xm(function (e) {
    return Uv(e) ? e : e.replace(Bm, "-$&").toLowerCase();
  }),
  Jl = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(Um, function (n, a, i) {
            return ((bt = { name: a, styles: i, next: bt }), a);
          });
    }
    return zm[t] !== 1 && !Uv(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function wa(e, t, r) {
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
        var u = i.styles + ";";
        return u;
      }
      return qm(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = bt,
          c = r(e);
        return ((bt = s), wa(e, t, c));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function qm(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += wa(e, t, r[a]) + ";";
  else
    for (var i in r) {
      var o = r[i];
      if (typeof o != "object") {
        var u = o;
        t != null && t[u] !== void 0
          ? (n += i + "{" + t[u] + "}")
          : Yl(u) && (n += qo(i) + ":" + Jl(i, u) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var s = 0; s < o.length; s++) Yl(o[s]) && (n += qo(i) + ":" + Jl(i, o[s]) + ";");
      else {
        var c = wa(e, t, o);
        switch (i) {
          case "animation":
          case "animationName": {
            n += qo(i) + ":" + c + ";";
            break;
          }
          default:
            n += i + "{" + c + "}";
        }
      }
    }
  return n;
}
var Xl = /label:\s*([^\s;{]+)\s*(;|$)/g,
  bt;
function Hs(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  bt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) ((n = !1), (a += wa(r, t, i)));
  else {
    var o = i;
    a += o[0];
  }
  for (var u = 1; u < e.length; u++)
    if (((a += wa(r, t, e[u])), n)) {
      var s = i;
      a += s[u];
    }
  Xl.lastIndex = 0;
  for (var c = "", l; (l = Xl.exec(a)) !== null; ) c += "-" + l[1];
  var d = Nm(a) + c;
  return { name: d, styles: a, next: bt };
}
var Vm = function (t) {
    return t();
  },
  Gm = yu.useInsertionEffect ? yu.useInsertionEffect : !1,
  qv = Gm || Vm,
  Vv = _.createContext(typeof HTMLElement < "u" ? Tm({ key: "css" }) : null);
Vv.Provider;
var Gv = function (t) {
    return _.forwardRef(function (r, n) {
      var a = _.useContext(Vv);
      return t(r, a, n);
    });
  },
  Hv = _.createContext({}),
  Ws = {}.hasOwnProperty,
  vs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Hm = function (t, r) {
    var n = {};
    for (var a in r) Ws.call(r, a) && (n[a] = r[a]);
    return ((n[vs] = t), n);
  },
  Wm = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      Gs(r, n, a),
      qv(function () {
        return Bv(r, n, a);
      }),
      null
    );
  },
  Km = Gv(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[vs],
      i = [n],
      o = "";
    typeof e.className == "string"
      ? (o = zv(t.registered, i, e.className))
      : e.className != null && (o = e.className + " ");
    var u = Hs(i, void 0, _.useContext(Hv));
    o += t.key + "-" + u.name;
    var s = {};
    for (var c in e) Ws.call(e, c) && c !== "css" && c !== vs && (s[c] = e[c]);
    return (
      (s.className = o),
      r && (s.ref = r),
      _.createElement(
        _.Fragment,
        null,
        _.createElement(Wm, { cache: t, serialized: u, isStringTag: typeof a == "string" }),
        _.createElement(a, s),
      )
    );
  }),
  Ym = Km,
  Lt = function (t, r) {
    var n = arguments;
    if (r == null || !Ws.call(r, "css")) return _.createElement.apply(void 0, n);
    var a = n.length,
      i = new Array(a);
    ((i[0] = Ym), (i[1] = Hm(t, r)));
    for (var o = 2; o < a; o++) i[o] = n[o];
    return _.createElement.apply(null, i);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Lt || (Lt = {}));
function Rt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Hs(t);
}
var Jm = function e(t) {
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
function Xm(e, t, r) {
  var n = [],
    a = zv(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var Zm = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      qv(function () {
        for (var a = 0; a < n.length; a++) Bv(r, n[a], !1);
      }),
      null
    );
  },
  Qm = Gv(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        var d = Hs(c, t.registered);
        return (r.push(d), Gs(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        return Xm(t.registered, n, Jm(c));
      },
      i = { css: n, cx: a, theme: _.useContext(Hv) },
      o = e.children(i);
    return _.createElement(
      _.Fragment,
      null,
      _.createElement(Zm, { cache: t, serializedArr: r }),
      o,
    );
  });
function e0(e, t) {
  var r = _.useRef(!0);
  _.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Wv = 2,
  ps = Rt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Wv,
  }),
  hs = Rt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Wv,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  t0 = Rt({
    "&:focus": ps,
    "&:focus-visible": ps,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  r0 = Rt({
    "&:focus": hs,
    "&:focus-visible": hs,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Kv = _.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? hs : ps,
      i = r ? r0 : t0,
      o = typeof n > "u" ? i : n === "on" && a;
    return Lt(Qm, null, function (u) {
      var s = u.css,
        c = u.cx;
      return _.Children.only(
        o ? _.cloneElement(t, { className: c([s(o), t.props.className]) }) : t,
      );
    });
  });
Kv.displayName = "FocusRing";
function Mt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var n0 = 9;
function Zl(e) {
  e.keyCode !== n0 && Mt(e);
}
var a0 = {
    onMouseDownCapture: Mt,
    onMouseUpCapture: Mt,
    onKeyDownCapture: Zl,
    onKeyUpCapture: Zl,
    onTouchStartCapture: Mt,
    onTouchEndCapture: Mt,
    onPointerDownCapture: Mt,
    onPointerUpCapture: Mt,
    onClickCapture: Mt,
    onClick: Mt,
  },
  i0 = {};
function o0(e) {
  var t = e.isInteractive;
  return t ? i0 : a0;
}
var Ql = "rgba(179, 212, 255, 0.6)",
  ed = {
    background: {
      default: {
        default: {
          light: "var(--ds-background-neutral, ".concat(Fn, ")"),
          dark: "var(--ds-background-neutral, ".concat($n, ")"),
        },
        hover: {
          light: "var(--ds-background-neutral-hovered, ".concat(Bc, ")"),
          dark: "var(--ds-background-neutral-hovered, ".concat(Uc, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-pressed, ".concat(Ql, ")"),
          dark: "var(--ds-background-neutral-pressed, ".concat(Ba, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Fn, ")"),
          dark: "var(--ds-background-disabled, ".concat($n, ")"),
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
          light: "var(--ds-background-brand-bold, ".concat(Ar, ")"),
          dark: "var(--ds-background-brand-bold, ".concat(Fc, ")"),
        },
        hover: {
          light: "var(--ds-background-brand-bold-hovered, ".concat(Nc, ")"),
          dark: "var(--ds-background-brand-bold-hovered, ".concat(Ba, ")"),
        },
        active: {
          light: "var(--ds-background-brand-bold-pressed, ".concat(zc, ")"),
          dark: "var(--ds-background-brand-bold-pressed, ".concat($c, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Fn, ")"),
          dark: "var(--ds-background-disabled, ".concat($n, ")"),
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
          light: "var(--ds-background-warning-bold, ".concat(Lc, ")"),
          dark: "var(--ds-background-warning-bold, ".concat(Lc, ")"),
        },
        hover: {
          light: "var(--ds-background-warning-bold-hovered, ".concat(Mc, ")"),
          dark: "var(--ds-background-warning-bold-hovered, ".concat(Mc, ")"),
        },
        active: {
          light: "var(--ds-background-warning-bold-pressed, ".concat(Pr, ")"),
          dark: "var(--ds-background-warning-bold-pressed, ".concat(Pr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Fn, ")"),
          dark: "var(--ds-background-disabled, ".concat($n, ")"),
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
          light: "var(--ds-background-danger-bold, ".concat(Tc, ")"),
          dark: "var(--ds-background-danger-bold, ".concat(Tc, ")"),
        },
        hover: {
          light: "var(--ds-background-danger-bold-hovered, ".concat(Dc, ")"),
          dark: "var(--ds-background-danger-bold-hovered, ".concat(Dc, ")"),
        },
        active: {
          light: "var(--ds-background-danger-bold-pressed, ".concat(Rr, ")"),
          dark: "var(--ds-background-danger-bold-pressed, ".concat(Rr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Fn, ")"),
          dark: "var(--ds-background-disabled, ".concat($n, ")"),
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
          dark: "var(--ds-background-selected, ".concat(xe, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(xe, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        hover: {
          light: "var(--ds-background-neutral-subtle-hovered, ".concat(Bc, ")"),
          dark: "var(--ds-background-neutral-subtle-hovered, ".concat(Uc, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-subtle-pressed, ".concat(Ql, ")"),
          dark: "var(--ds-background-neutral-subtle-pressed, ".concat(Ba, ")"),
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
          dark: "var(--ds-background-selected, ".concat(xe, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(xe, ")"),
        },
      },
    },
    color: {
      default: {
        default: {
          light: "var(--ds-text, ".concat(ba, ")"),
          dark: "var(--ds-text, ".concat(ot, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Ar, ")"),
          dark: "var(--ds-text, ".concat(Ar, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Nn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(ot, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(ot, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Yt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Nn, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Nn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(ot, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(ot, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-text-warning-inverse, ".concat(jr, ")"),
          dark: "var(--ds-text-warning-inverse, ".concat(jr, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Nn, ")"),
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
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Nn, ")"),
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
          dark: "var(--ds-link, ".concat(Fc, ")"),
        },
        hover: {
          light: "var(--ds-link, ".concat(Nc, ")"),
          dark: "var(--ds-link, ".concat(Ba, ")"),
        },
        active: {
          light: "var(--ds-link-pressed, ".concat(zc, ")"),
          dark: "var(--ds-link-pressed, ".concat($c, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Oo, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(He, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(He, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-text, ".concat(ba, ")"),
          dark: "var(--ds-text, ".concat(ot, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Ar, ")"),
          dark: "var(--ds-text, ".concat(Ar, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Oo, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(ot, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(ot, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-text-subtle, ".concat(kb, ")"),
          dark: "var(--ds-text-subtle, ".concat(ot, ")"),
        },
        hover: {
          light: "var(--ds-text-subtle, ".concat(Ob, ")"),
          dark: "var(--ds-text-subtle, ".concat(wb, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Sb, ")"),
          dark: "var(--ds-text, ".concat(Eb, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Oo, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(ot, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(ot, ")"),
        },
      },
    },
  };
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
function ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? td(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : td(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Jt = 8,
  Vo = ["default", "primary", "danger", "warning"],
  gs = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  s0 = { default: gs.default, compact: gs.compact, none: "inherit" },
  u0 = {
    default: "0 ".concat(Jt + Jt / 4, "px"),
    compact: "0 ".concat(Jt + Jt / 4, "px"),
    none: "0",
  },
  c0 = { compact: "0 ".concat(Jt / 4, "px"), default: "0 ".concat(Jt / 4, "px"), none: "0" },
  l0 = { default: "middle", compact: "middle", none: "baseline" },
  Yv = { content: "0 ".concat(Jt / 4, "px"), icon: "0 ".concat(Jt / 4, "px") },
  Jv = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  d0 = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #172B4D)",
    "&::after": ne(ne({}, Jv), {}, { content: '""', borderColor: "var(--ds-border, #091E4224)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #091E4224)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #091E424F)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  f0 = {
    background: "var(--ds-background-brand-bold, #0C66E4)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #0055CC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #09326C)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #0C66E4)",
    },
  },
  v0 = {
    background: "transparent",
    color: "var(--ds-link, #0C66E4)",
    "&:hover": { color: "var(--ds-link, #0C66E4)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #0055CC)", textDecoration: "underline" },
  },
  p0 = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #091E420F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #091E4224)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  h0 = {
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
  g0 = {
    background: "var(--ds-background-warning-bold, #F5CD47)",
    color: "var(--ds-text-warning-inverse, #172B4D)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #E2B203)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #CF9F02)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #F5CD47)",
    },
  },
  b0 = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #5D1F1A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  _0 = {
    background: "var(--ds-background-selected, #E9F2FF)",
    color: "var(--ds-text-selected, #0C66E4)",
    "&:not([disabled])::after": ne(
      ne({}, Jv),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #0C66E4)" },
    ),
  },
  rd = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function nd(e) {
  var t = e.group,
    r = e.key,
    n = e.mode,
    a = t[r] || t.default;
  return a[n];
}
function Nr(e) {
  var t = e.appearance,
    r = e.key,
    n = e.mode;
  return {
    background: nd({ group: ed.background[t], key: r, mode: n }),
    color: "".concat(nd({ group: ed.color[t], key: r, mode: n }), " !important"),
  };
}
function y0(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.mode,
    a = e.isSelected,
    i = e.shouldFitContainer,
    o = e.isOnlySingleIcon,
    u = Nr({ appearance: t, key: a ? "selected" : "default", mode: n });
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
          !Le("platform-component-visual-refresh") && u,
        ),
        {},
        {
          cursor: "pointer",
          height: gs[r],
          lineHeight: s0[r],
          padding: o ? c0[r] : u0[r],
          verticalAlign: l0[r],
          width: i ? "100%" : "auto",
          justifyContent: "center",
        },
        !Le("platform-component-visual-refresh") &&
          ne(
            ne(
              {
                "&:visited": ne({}, u),
                "&:hover": ne(
                  ne({}, Nr({ appearance: t, key: a ? "selected" : "hover", mode: n })),
                  {},
                  {
                    textDecoration:
                      !a && (t === "link" || t === "subtle-link") ? "underline" : "inherit",
                    transitionDuration: "0s, 0.15s",
                  },
                ),
                "&:active": ne(
                  ne({}, Nr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                '&[data-firefox-is-active="true"]': ne(
                  ne({}, Nr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                "&[disabled]": ne(
                  ne({}, Nr({ appearance: t, key: "disabled", mode: n })),
                  {},
                  { cursor: "not-allowed", textDecoration: "none" },
                ),
              },
              rd,
            ),
            {},
            {
              '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active':
                ne({}, Nr({ appearance: t, key: a ? "selected" : "default", mode: n })),
            },
          ),
      ),
      Le("platform-component-visual-refresh") &&
        (a
          ? _0
          : ne(
              ne(
                ne(
                  ne(
                    ne(
                      ne(
                        ne(ne({}, t === "default" && d0), t === "primary" && f0),
                        t === "link" && v0,
                      ),
                      t === "subtle" && p0,
                    ),
                    t === "subtle-link" && h0,
                  ),
                  t === "warning" && g0,
                ),
                t === "danger" && b0,
              ),
              {},
              {
                "&[disabled]": {
                  color: "var(--ds-text-disabled, #091E424F)",
                  backgroundColor: Vo.includes(t)
                    ? "var(--ds-background-disabled, #091E4208)"
                    : "transparent",
                  cursor: "not-allowed",
                  textDecoration: "none",
                  "&:hovered": {
                    backgroundColor: Vo.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                  "&:active": {
                    backgroundColor: Vo.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                },
              },
              rd,
            )),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function ad(e) {
  var t = e.spacing;
  return Rt({
    display: "flex",
    margin: t === "none" ? 0 : Yv.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function m0(e) {
  var t = e.spacing;
  return Rt({
    margin: t === "none" ? 0 : Yv.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function w0(e) {
  var t = e.hasOverlay;
  return Rt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var O0 = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Ks = function (t) {
    return t && _.isValidElement(t) && t.type === Iv;
  },
  k0 = [
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
  S0 = { "> *": { pointerEvents: "none" } },
  E0 = Rt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  x0 = Rt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  id = function (t, r) {
    return !t || Ks(t) ? null : r;
  },
  C0 = function (t, r) {
    return Ks(t) ? t : t ? Lt("span", { css: r }, t) : null;
  },
  R0 = k.forwardRef(function (t, r) {
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
      p = f === void 0 ? (d ? "a" : "button") : f,
      h = t.iconAfter,
      v = t.iconBefore,
      g = t.interactionName,
      b = t.isDisabled,
      m = b === void 0 ? !1 : b,
      w = t.isSelected,
      O = w === void 0 ? !1 : w,
      y = t.onBlur,
      S = t.onClick,
      x = S === void 0 ? we : S,
      j = t.onFocus,
      D = t.onMouseDown,
      R = D === void 0 ? we : D,
      T = t.overlay;
    t.shouldFitContainer;
    var B = t.spacing,
      z = B === void 0 ? "default" : B,
      V = t.tabIndex,
      J = V === void 0 ? 0 : V,
      G = t.type,
      q = G === void 0 ? (d ? void 0 : "button") : G,
      X = t.testId,
      $ = ae(t, k0),
      A = _.useRef(),
      be = _.useCallback(
        function (pe) {
          if (((A.current = pe), r != null)) {
            if (typeof r == "function") {
              r(pe);
              return;
            }
            r.current = pe;
          }
        },
        [A, r],
      );
    e0(A, u);
    var oe = _.useContext($s),
      ue = _.useCallback(
        function (pe, qe) {
          (oe && oe.tracePress(g, pe.timeStamp), x(pe, qe));
        },
        [x, oe, g],
      ),
      le = ga({
        fn: ue,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      ge = _.useCallback(
        function (pe) {
          (pe.preventDefault(), R(pe));
        },
        [R],
      );
    _.useEffect(
      function () {
        var pe = A.current;
        m && pe && pe === document.activeElement && pe.blur();
      },
      [m],
    );
    var ce = !!T,
      Ue = Rt(w0({ hasOverlay: ce })),
      Oe = !m && !ce,
      nt = {};
    return (
      (O || m || i === "warning") &&
        (nt = {
          "[data-theme] & circle": {
            stroke: "".concat(
              O || m
                ? "var(--ds-icon-subtle, ".concat(ba, ")")
                : "var(--ds-icon-warning-inverse, ".concat(ba, ")"),
              " !important",
            ),
          },
        }),
      Lt(
        Kv,
        null,
        Lt(
          p,
          te(
            {},
            $,
            {
              ref: be,
              className: l,
              css: [s, Oe ? null : S0],
              "data-has-overlay": ce ? !0 : void 0,
              "data-testid": X,
              disabled: m,
              href: Oe ? d : void 0,
              onBlur: y,
              onClick: le,
              onFocus: j,
              onMouseDown: ge,
              tabIndex: m ? -1 : J,
              type: q,
            },
            o0({ isInteractive: Oe }),
          ),
          v ? Lt("span", { css: [Ue, ad({ spacing: z }), id(c, E0)] }, v) : null,
          C0(c, [Ue, m0({ spacing: z })]),
          h ? Lt("span", { css: [Ue, ad({ spacing: z }), id(c, x0)] }, h) : null,
          T ? Lt("span", { css: [O0, nt] }, T) : null,
        ),
      )
    );
  });
function P0(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Ks(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var A0 = [
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
  od = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  Ys = k.memo(
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
        p = f === void 0 ? we : f,
        h = t.shouldFitContainer,
        v = h === void 0 ? !1 : h,
        g = t.spacing,
        b = g === void 0 ? "default" : g,
        m = ae(t, A0),
        w = am(),
        O = w.mode,
        y = P0({ children: i, iconBefore: o, iconAfter: u }),
        S = _.useState(!1),
        x = K(S, 2),
        j = x[0],
        D = x[1],
        R = _.useCallback(
          function (z) {
            (d(z), od && D(!0));
          },
          [d, D],
        ),
        T = _.useCallback(
          function (z) {
            (p(z), od && D(!1));
          },
          [p, D],
        ),
        B = _.useMemo(
          function () {
            return y0({
              appearance: a,
              spacing: b,
              mode: O,
              isSelected: c,
              shouldFitContainer: v,
              isOnlySingleIcon: y,
            });
          },
          [a, b, O, c, v, y],
        );
      return k.createElement(
        R0,
        te({}, m, {
          ref: r,
          appearance: a,
          buttonCss: B,
          children: i,
          "data-firefox-is-active": j ? !0 : void 0,
          iconAfter: u,
          iconBefore: o,
          isSelected: c,
          onMouseDown: R,
          onMouseUp: T,
          spacing: b,
        }),
      );
    }),
  );
Ys.displayName = "Button";
function sd(e) {
  return k.createElement(Ys, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function j0(e) {
  return k.createElement(Ys, te({}, e, { appearance: "subtle" }));
}
var I0 = { container: "_1e0c1txw _kqswh2mm" };
function D0(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return k.createElement(
    Ai,
    { as: "li", testId: r, key: t, xcss: I0.container, paddingInline: "space.100" },
    k.createElement(
      Ty,
      { testId: r && "".concat(r, "-text") },
      k.createElement(Iv, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var ud = {},
  cd =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function T0(e, t) {
  return !!(e === t || (cd(e) && cd(t)));
}
function M0(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!T0(e[r], t[r])) return !1;
  return !0;
}
function L0(e, t) {
  t === void 0 && (t = M0);
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
var F0 = function (t, r, n, a) {
  var i = n.max,
    o = n.ellipsis,
    u = n.transform,
    s = t.length,
    c = s > i,
    l = c && i - 4 < r,
    d = c && r < s - i + 3,
    f = L0(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
      return t.slice(g, b).map(function (m, w) {
        return u(m, g + w, a);
      });
    });
  if (!c) return f(0, s);
  if (l && !d) {
    var p = i - 2;
    return [].concat(
      De(f(0, 1)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: s - p })],
      De(f(s - p)),
    );
  }
  if (!l && d) {
    var h = i - 2;
    return [].concat(
      De(f(0, h)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: h + 1, to: s - 1 })],
      De(f(s - 1)),
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
    [o({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: s - 1 })],
    De(f(s - 1)),
  );
};
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
function $0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ld(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ld(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var bs = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  N0 = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "0.0.0-development",
  };
function dd(e) {
  var t = e.chevronDirection,
    r = t === "left" ? Q_ : ay;
  return k.createElement(
    Ai,
    { as: "span", xcss: bs.navigatorIconWrapper },
    k.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function z0(e, t) {
  var r = e.components,
    n = r === void 0 ? ud : r,
    a = e.defaultSelectedIndex,
    i = a === void 0 ? 0 : a,
    o = e.selectedIndex,
    u = e.label,
    s = u === void 0 ? "pagination" : u,
    c = e.pageLabel,
    l = c === void 0 ? "page" : c,
    d = e.previousLabel,
    f = d === void 0 ? "previous" : d,
    p = e.nextLabel,
    h = p === void 0 ? "next" : p,
    v = e.style,
    g = v === void 0 ? ud : v,
    b = e.max,
    m = b === void 0 ? 7 : b,
    w = e.onChange,
    O = w === void 0 ? we : w,
    y = e.pages,
    S = e.getPageLabel,
    x = e.renderEllipsis,
    j = x === void 0 ? D0 : x,
    D = e.analyticsContext,
    R = e.testId,
    T = e.isDisabled,
    B = $b(o, function () {
      return i || 0;
    }),
    z = K(B, 2),
    V = z[0],
    J = z[1],
    G = ga(
      $0(
        {
          fn: function ($, A) {
            var be = $.event,
              oe = $.selectedPageIndex;
            (o === void 0 && J(oe), O && O(be, y[oe], A));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: D,
        },
        N0,
      ),
    ),
    q = function ($, A, be) {
      var oe = y[V],
        ue = "".concat(l, " ").concat(S ? S($, A) : $),
        le = $ === oe;
      return k.createElement(
        Qa,
        { as: "li", xcss: bs.paginationMenuItem, key: "page-".concat(S ? S($, A) : A) },
        k.createElement(
          j0,
          {
            component: n.Page,
            onClick: function (ce) {
              return G({ event: ce, selectedPageIndex: A });
            },
            "aria-current": le ? "page" : void 0,
            "aria-label": ue,
            isSelected: le,
            isDisabled: T,
            page: $,
            testId:
              be &&
              ""
                .concat(be, "--")
                .concat(le ? "current-" : "", "page-")
                .concat(A),
          },
          S ? S($, A) : $,
        ),
      );
    };
  return k.createElement(
    Ai,
    { testId: R, style: g, ref: t, "aria-label": s, as: "nav" },
    k.createElement(
      Qa,
      { space: "space.0", alignBlock: "center" },
      k.createElement(sd, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function ($) {
          return G({ event: $, selectedPageIndex: V - 1 });
        },
        isDisabled: T || V === 0,
        iconBefore: k.createElement(dd, { chevronDirection: "left" }),
        "aria-label": f,
        testId: R && "".concat(R, "--left-navigator"),
      }),
      k.createElement(
        Qa,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: bs.paginationMenu },
        F0(y, V, { max: m, ellipsis: j, transform: q }, R),
      ),
      k.createElement(sd, {
        key: "right-navigator",
        component: n.Next,
        onClick: function ($) {
          return G({ event: $, selectedPageIndex: V + 1 });
        },
        isDisabled: T || V === y.length - 1,
        iconBefore: k.createElement(dd, { chevronDirection: "right" }),
        "aria-label": h,
        testId: R && "".concat(R, "--right-navigator"),
      }),
    ),
  );
}
var B0 = _.memo(_.forwardRef(z0));
function U0(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, Xv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var q0 = (function (e) {
    function t() {
      var r;
      fe(this, t);
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
      return (
        (r = U0(this, t, [].concat(a))),
        E(r, "onChange", function (o, u, s) {
          r.props.onChange(u, s);
        }),
        r
      );
    }
    return (
      ze(t, e),
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
              l = De(Array(a)).map(function (f, p) {
                return p + 1;
              }),
              d = o - 1;
            return k.createElement(B0, {
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
  V0 = ["isRanking", "testId"],
  G0 = [
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
function Zn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : fd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var vd = "--local-dynamic-table-text-color",
  H0 = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = ae(t, V0);
    return _.createElement(
      "thead",
      te({ "data-testid": n }, a, { className: C(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  W0 = _.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      i = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var u = e.style,
      s = e.testId,
      c = ae(e, G0),
      l = Zn(
        Zn(Zn({}, u), r && ov({ width: r })),
        {},
        E({}, vd, "var(--ds-text-subtlest, #626F86)"),
      ),
      d = a === pr,
      f = a === vi,
      p = function () {
        if (d) return "ascending";
        if (f) return "descending";
      },
      h = n ? "th" : "td";
    return _.createElement(
      h,
      te({ "aria-sort": p(), onClick: void 0, ref: t, "data-testid": s }, c, {
        className: C([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r187z _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbi3bv",
          "_1bsb8a2a",
          i && o && "_1bto1l2s _o5721q9c",
          i && "_1reo15vq _18m915vq",
        ]),
        style: Zn(
          Zn({}, l),
          {},
          { "--_17ckjys": av("var(--ds-text-subtle, ".concat("var(".concat(vd, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function K0(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, Zv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
function Y0(e) {
  return (function (t) {
    function r() {
      var n;
      fe(this, r);
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return (
        (n = K0(this, r, [].concat(i))),
        E(n, "state", { refWidth: 0, refHeight: 0 }),
        E(n, "innerRef", function (u) {
          u && !n.props.isRanking && (n.ref = u);
        }),
        E(n, "updateDimensions", function () {
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
      ze(r, t),
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
var Qn = {},
  pd;
function J0() {
  if (pd) return Qn;
  ((pd = 1), Object.defineProperty(Qn, "__esModule", { value: !0 }), (Qn.default = void 0));
  var e = r(ft()),
    t = r(Pi);
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
  return ((n.displayName = "ArrowDownIcon"), (Qn.default = n), Qn);
}
var X0 = J0();
const Z0 = tr(X0);
var ea = {},
  hd;
function Q0() {
  if (hd) return ea;
  ((hd = 1), Object.defineProperty(ea, "__esModule", { value: !0 }), (ea.default = void 0));
  var e = r(ft()),
    t = r(Pi);
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
  return ((n.displayName = "ArrowUpIcon"), (ea.default = n), ea);
}
var ew = Q0();
const tw = tr(ew);
var rw = "Escape";
function nw(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = _.useRef(!1),
    a = _.useCallback(
      function (o) {
        r || n.current || o.key !== rw || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    i = _.useCallback(function () {
      n.current = !1;
    }, []);
  _.useEffect(
    function () {
      if (!(r && Le("platform_only_attach_escape_handler_on_view")))
        return ji.bindAll(
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
function ta(e) {
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
var aw = _.createContext(null),
  iw = _.createContext(null);
function ow() {
  var e = _.useContext(iw);
  return e;
}
function sw(e) {
  var t = e.isOpen,
    r = e.onClose,
    n = _.useContext(aw),
    a = ow();
  _.useEffect(
    function () {
      if (n !== null && t) return n.onClose(r, { namespace: a });
    },
    [n, t, a, r],
  );
}
var ia = { none: 0, small: 100, medium: 350, large: 700 },
  Go = 0.5,
  uw = { none: ia.none, small: ia.small * Go, medium: ia.medium * Go, large: ia.large * Go },
  cw = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  lw = function () {
    if (!cw()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  dw = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  fw = function () {
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
      }, dw(t)),
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
  Qv = { appear: !0, isExiting: !1 },
  ep = _.createContext(Qv),
  gd = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qv;
    return k.createElement(ep.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  bd = function (t) {
    var r = [];
    return (
      _.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  vw = function (t, r) {
    for (var n = r.concat([]), a = pw(r), i = 0; i < t.length; i++) {
      var o = t[i],
        u = !a[o.key];
      u && n.splice(i + 1, 0, o);
    }
    return n;
  },
  pw = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  hw = function (t, r) {
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
  tp = _.memo(function (e) {
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
      p = _.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      h = K(p, 2),
      v = h[0],
      g = h[1];
    if (
      (_.useEffect(function () {
        v.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      typeof u == "boolean")
    )
      return n;
    var b = K(u, 2),
      m = b[0],
      w = b[1],
      O = bd(m),
      y = bd(w);
    w !== n && s([w, n]);
    var S = hw(y, O),
      x = !!S.size,
      j = y;
    if ((x && (j = vw(y, O)), a))
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
            return gd(R, {
              appear: !0,
              isExiting: T,
              onFinish: T
                ? function () {
                    (S.delete(R.key), S.size === 0 && (s([null, n]), f([])));
                  }
                : void 0,
            });
          }))
        : (j = j.map(function (R) {
            return gd(R, v);
          })),
      j
    );
  }),
  gw = function () {
    return _.useContext(ep);
  };
tp.displayName = "ExitingPersistence";
function bw() {
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
var _w = _.createContext(function () {
    return { isReady: !0, delay: 0, ref: we };
  }),
  yw = function () {
    var t = bw(),
      r = _.useContext(_w);
    return r(t);
  },
  mw = function (t) {
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
      p = yw(),
      h = gw(),
      v = h.isExiting,
      g = h.onFinish,
      b = h.appear,
      m = fw(),
      w = c || !p.isReady,
      O = v ? 0 : p.delay,
      y = v ? "exiting" : "entering",
      S = _.useState(b),
      x = K(S, 2),
      j = x[0],
      D = x[1];
    return (
      _.useEffect(
        function () {
          var R = !1;
          if (!w) {
            if (!b) {
              l && l(y);
              return;
            }
            var T = function () {
              (y === "exiting" && g?.(), R || D(!1), l?.(y));
            };
            if (lw()) {
              T();
              return;
            }
            return (
              D(!0),
              m(T, v ? uw[f] : ia[f] + O),
              function () {
                R = !0;
              }
            );
          }
        },
        [g, y, v, f, O, w, m],
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
                ((!v && o === "fade-in") || (v && s === "fade-in")) && C(["_j7hq1cgr"]),
                ((!v && o === "fade-out") || (v && s === "fade-out")) && C(["_j7hq1lln"]),
                ((!v && o === "zoom-in") || (v && s === "zoom-in")) && C(["_j7hqe8p0"]),
                ((!v && o === "zoom-out") || (v && s === "zoom-out")) && C(["_j7hqy6ql"]),
                ((!v && o === "slide-in-from-top") || (v && s === "slide-in-from-top")) &&
                  C(["_j7hqqshu"]),
                ((!v && o === "slide-out-from-top") || (v && s === "slide-out-from-top")) &&
                  C(["_j7hq7ri4"]),
                ((!v && o === "slide-in-from-right") || (v && s === "slide-in-from-right")) &&
                  C(["_j7hqdfjr"]),
                ((!v && o === "slide-out-from-right") || (v && s === "slide-out-from-right")) &&
                  C(["_j7hqonfj"]),
                ((!v && o === "slide-in-from-bottom") || (v && s === "slide-in-from-bottom")) &&
                  C(["_j7hq1liq"]),
                ((!v && o === "slide-out-from-bottom") || (v && s === "slide-out-from-bottom")) &&
                  C(["_j7hqhnf1"]),
                ((!v && o === "slide-in-from-left") || (v && s === "slide-in-from-left")) &&
                  C(["_j7hq1bh1"]),
                ((!v && o === "slide-out-from-left") || (v && s === "slide-out-from-left")) &&
                  C(["_j7hqj08w"]),
                ((!v && o === "fade-in-from-top") || (v && s === "fade-in-from-top")) &&
                  C(["_j7hq2iua"]),
                ((!v && o === "fade-out-from-top") || (v && s === "fade-out-from-top")) &&
                  C(["_j7hq39va"]),
                ((!v && o === "fade-in-from-left") || (v && s === "fade-in-from-left")) &&
                  C(["_j7hq15m2"]),
                ((!v && o === "fade-out-from-left") || (v && s === "fade-out-from-left")) &&
                  C(["_j7hq1yiv"]),
                ((!v && o === "fade-in-from-bottom") || (v && s === "fade-in-from-bottom")) &&
                  C(["_j7hq1w00"]),
                ((!v && o === "fade-out-from-bottom") || (v && s === "fade-out-from-bottom")) &&
                  C(["_j7hqzy3z"]),
                ((!v && o === "fade-in-from-right") || (v && s === "fade-in-from-right")) &&
                  C(["_j7hqpqak"]),
                ((!v && o === "fade-out-from-right") || (v && s === "fade-out-from-right")) &&
                  C(["_j7hq1ebg"]),
                ((!v && o === "fade-in-from-top-constant") ||
                  (v && s === "fade-in-from-top-constant")) &&
                  C(["_j7hqm2e2"]),
                ((!v && o === "fade-out-from-top-constant") ||
                  (v && s === "fade-out-from-top-constant")) &&
                  C(["_j7hq97jn"]),
                ((!v && o === "fade-in-from-left-constant") ||
                  (v && s === "fade-in-from-left-constant")) &&
                  C(["_j7hqovgq"]),
                ((!v && o === "fade-out-from-left-constant") ||
                  (v && s === "fade-out-from-left-constant")) &&
                  C(["_j7hq15do"]),
                ((!v && o === "fade-in-from-bottom-constant") ||
                  (v && s === "fade-in-from-bottom-constant")) &&
                  C(["_j7hq797a"]),
                ((!v && o === "fade-out-from-bottom-constant") ||
                  (v && s === "fade-out-from-bottom-constant")) &&
                  C(["_j7hqwo7r"]),
                ((!v && o === "fade-in-from-right-constant") ||
                  (v && s === "fade-in-from-right-constant")) &&
                  C(["_j7hqt8u5"]),
                ((!v && o === "fade-out-from-right-constant") ||
                  (v && s === "fade-out-from-right-constant")) &&
                  C(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(O, "ms") },
        },
        y,
      )
    );
  },
  ww = { top: "bottom", bottom: "top", left: "right", right: "left" },
  Ow = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      i = t.entranceDirection,
      o = t.exitDirection,
      u = t.distance,
      s = u === void 0 ? "proportional" : u,
      c = t.onFinish,
      l = t.isPaused,
      d = i !== void 0 ? ww[i] : void 0,
      f =
        o || d
          ? "fade-out-from-".concat(o || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return k.createElement(
      mw,
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
  kw = _.createContext();
_.createContext();
var Sw = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  Ew = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  xw = function (t, r) {
    if (typeof t == "function") return Ew(t, r);
    t != null && (t.current = r);
  },
  _d = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        i = n[1];
      return ((r[a] = i), r);
    }, {});
  },
  yd =
    typeof window < "u" && window.document && window.document.createElement
      ? _.useLayoutEffect
      : _.useEffect,
  Re = "top",
  et = "bottom",
  tt = "right",
  Pe = "left",
  Js = "auto",
  Pa = [Re, et, tt, Pe],
  Kr = "start",
  Oa = "end",
  Cw = "clippingParents",
  rp = "viewport",
  ra = "popper",
  Rw = "reference",
  md = Pa.reduce(function (e, t) {
    return e.concat([t + "-" + Kr, t + "-" + Oa]);
  }, []),
  np = [].concat(Pa, [Js]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Kr, t + "-" + Oa]);
  }, []),
  Pw = "beforeRead",
  Aw = "read",
  jw = "afterRead",
  Iw = "beforeMain",
  Dw = "main",
  Tw = "afterMain",
  Mw = "beforeWrite",
  Lw = "write",
  Fw = "afterWrite",
  $w = [Pw, Aw, jw, Iw, Dw, Tw, Mw, Lw, Fw];
function Et(e) {
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
function hr(e) {
  var t = $e(e).Element;
  return e instanceof t || e instanceof Element;
}
function Qe(e) {
  var t = $e(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Xs(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = $e(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Nw(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      i = t.elements[r];
    !Qe(i) ||
      !Et(i) ||
      (Object.assign(i.style, n),
      Object.keys(a).forEach(function (o) {
        var u = a[o];
        u === !1 ? i.removeAttribute(o) : i.setAttribute(o, u === !0 ? "" : u);
      }));
  });
}
function zw(e) {
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
        !Qe(a) ||
          !Et(a) ||
          (Object.assign(a.style, u),
          Object.keys(i).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const Bw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Nw,
  effect: zw,
  requires: ["computeStyles"],
};
function wt(e) {
  return e.split("-")[0];
}
var fr = Math.max,
  bi = Math.min,
  Yr = Math.round;
function _s() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function ap() {
  return !/^((?!chrome|android).)*safari/i.test(_s());
}
function Jr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    i = 1;
  t &&
    Qe(e) &&
    ((a = (e.offsetWidth > 0 && Yr(n.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Yr(n.height) / e.offsetHeight) || 1));
  var o = hr(e) ? $e(e) : window,
    u = o.visualViewport,
    s = !ap() && r,
    c = (n.left + (s && u ? u.offsetLeft : 0)) / a,
    l = (n.top + (s && u ? u.offsetTop : 0)) / i,
    d = n.width / a,
    f = n.height / i;
  return { width: d, height: f, top: l, right: c + d, bottom: l + f, left: c, x: c, y: l };
}
function Zs(e) {
  var t = Jr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function ip(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Xs(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Ut(e) {
  return $e(e).getComputedStyle(e);
}
function Uw(e) {
  return ["table", "td", "th"].indexOf(Et(e)) >= 0;
}
function rr(e) {
  return ((hr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Mi(e) {
  return Et(e) === "html" ? e : e.assignedSlot || e.parentNode || (Xs(e) ? e.host : null) || rr(e);
}
function wd(e) {
  return !Qe(e) || Ut(e).position === "fixed" ? null : e.offsetParent;
}
function qw(e) {
  var t = /firefox/i.test(_s()),
    r = /Trident/i.test(_s());
  if (r && Qe(e)) {
    var n = Ut(e);
    if (n.position === "fixed") return null;
  }
  var a = Mi(e);
  for (Xs(a) && (a = a.host); Qe(a) && ["html", "body"].indexOf(Et(a)) < 0; ) {
    var i = Ut(a);
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
function Aa(e) {
  for (var t = $e(e), r = wd(e); r && Uw(r) && Ut(r).position === "static"; ) r = wd(r);
  return r && (Et(r) === "html" || (Et(r) === "body" && Ut(r).position === "static"))
    ? t
    : r || qw(e) || t;
}
function Qs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ca(e, t, r) {
  return fr(e, bi(t, r));
}
function Vw(e, t, r) {
  var n = ca(e, t, r);
  return n > r ? r : n;
}
function op() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function sp(e) {
  return Object.assign({}, op(), e);
}
function up(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var Gw = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    sp(typeof t != "number" ? t : up(t, Pa))
  );
};
function Hw(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    i = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    u = wt(r.placement),
    s = Qs(u),
    c = [Pe, tt].indexOf(u) >= 0,
    l = c ? "height" : "width";
  if (!(!i || !o)) {
    var d = Gw(a.padding, r),
      f = Zs(i),
      p = s === "y" ? Re : Pe,
      h = s === "y" ? et : tt,
      v = r.rects.reference[l] + r.rects.reference[s] - o[s] - r.rects.popper[l],
      g = o[s] - r.rects.reference[s],
      b = Aa(i),
      m = b ? (s === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      w = v / 2 - g / 2,
      O = d[p],
      y = m - f[l] - d[h],
      S = m / 2 - f[l] / 2 + w,
      x = ca(O, S, y),
      j = s;
    r.modifiersData[n] = ((t = {}), (t[j] = x), (t.centerOffset = x - S), t);
  }
}
function Ww(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (ip(t.elements.popper, a) && (t.elements.arrow = a)));
}
const Kw = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Hw,
  effect: Ww,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Xr(e) {
  return e.split("-")[1];
}
var Yw = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Jw(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Yr(r * a) / a || 0, y: Yr(n * a) / a || 0 };
}
function Od(e) {
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
    p = f === void 0 ? 0 : f,
    h = o.y,
    v = h === void 0 ? 0 : h,
    g = typeof l == "function" ? l({ x: p, y: v }) : { x: p, y: v };
  ((p = g.x), (v = g.y));
  var b = o.hasOwnProperty("x"),
    m = o.hasOwnProperty("y"),
    w = Pe,
    O = Re,
    y = window;
  if (c) {
    var S = Aa(r),
      x = "clientHeight",
      j = "clientWidth";
    if (
      (S === $e(r) &&
        ((S = rr(r)),
        Ut(S).position !== "static" &&
          u === "absolute" &&
          ((x = "scrollHeight"), (j = "scrollWidth"))),
      (S = S),
      a === Re || ((a === Pe || a === tt) && i === Oa))
    ) {
      O = et;
      var D = d && S === y && y.visualViewport ? y.visualViewport.height : S[x];
      ((v -= D - n.height), (v *= s ? 1 : -1));
    }
    if (a === Pe || ((a === Re || a === et) && i === Oa)) {
      w = tt;
      var R = d && S === y && y.visualViewport ? y.visualViewport.width : S[j];
      ((p -= R - n.width), (p *= s ? 1 : -1));
    }
  }
  var T = Object.assign({ position: u }, c && Yw),
    B = l === !0 ? Jw({ x: p, y: v }, $e(r)) : { x: p, y: v };
  if (((p = B.x), (v = B.y), s)) {
    var z;
    return Object.assign(
      {},
      T,
      ((z = {}),
      (z[O] = m ? "0" : ""),
      (z[w] = b ? "0" : ""),
      (z.transform =
        (y.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + v + "px)"
          : "translate3d(" + p + "px, " + v + "px, 0)"),
      z),
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}), (t[O] = m ? v + "px" : ""), (t[w] = b ? p + "px" : ""), (t.transform = ""), t),
  );
}
function Xw(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    i = r.adaptive,
    o = i === void 0 ? !0 : i,
    u = r.roundOffsets,
    s = u === void 0 ? !0 : u,
    c = {
      placement: wt(t.placement),
      variation: Xr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Od(
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
        Od(
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
const Zw = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Xw, data: {} };
var Ka = { passive: !0 };
function Qw(e) {
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
        l.addEventListener("scroll", r.update, Ka);
      }),
    u && s.addEventListener("resize", r.update, Ka),
    function () {
      (i &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", r.update, Ka);
        }),
        u && s.removeEventListener("resize", r.update, Ka));
    }
  );
}
const e1 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Qw,
  data: {},
};
var t1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ai(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return t1[t];
  });
}
var r1 = { start: "end", end: "start" };
function kd(e) {
  return e.replace(/start|end/g, function (t) {
    return r1[t];
  });
}
function eu(e) {
  var t = $e(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function tu(e) {
  return Jr(rr(e)).left + eu(e).scrollLeft;
}
function n1(e, t) {
  var r = $e(e),
    n = rr(e),
    a = r.visualViewport,
    i = n.clientWidth,
    o = n.clientHeight,
    u = 0,
    s = 0;
  if (a) {
    ((i = a.width), (o = a.height));
    var c = ap();
    (c || (!c && t === "fixed")) && ((u = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: i, height: o, x: u + tu(e), y: s };
}
function a1(e) {
  var t,
    r = rr(e),
    n = eu(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = fr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    o = fr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    u = -n.scrollLeft + tu(e),
    s = -n.scrollTop;
  return (
    Ut(a || r).direction === "rtl" && (u += fr(r.clientWidth, a ? a.clientWidth : 0) - i),
    { width: i, height: o, x: u, y: s }
  );
}
function ru(e) {
  var t = Ut(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function cp(e) {
  return ["html", "body", "#document"].indexOf(Et(e)) >= 0
    ? e.ownerDocument.body
    : Qe(e) && ru(e)
      ? e
      : cp(Mi(e));
}
function la(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = cp(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = $e(n),
    o = a ? [i].concat(i.visualViewport || [], ru(n) ? n : []) : n,
    u = t.concat(o);
  return a ? u : u.concat(la(Mi(o)));
}
function ys(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function i1(e, t) {
  var r = Jr(e, !1, t === "fixed");
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
function Sd(e, t, r) {
  return t === rp ? ys(n1(e, r)) : hr(t) ? i1(t, r) : ys(a1(rr(e)));
}
function o1(e) {
  var t = la(Mi(e)),
    r = ["absolute", "fixed"].indexOf(Ut(e).position) >= 0,
    n = r && Qe(e) ? Aa(e) : e;
  return hr(n)
    ? t.filter(function (a) {
        return hr(a) && ip(a, n) && Et(a) !== "body";
      })
    : [];
}
function s1(e, t, r, n) {
  var a = t === "clippingParents" ? o1(e) : [].concat(t),
    i = [].concat(a, [r]),
    o = i[0],
    u = i.reduce(
      function (s, c) {
        var l = Sd(e, c, n);
        return (
          (s.top = fr(l.top, s.top)),
          (s.right = bi(l.right, s.right)),
          (s.bottom = bi(l.bottom, s.bottom)),
          (s.left = fr(l.left, s.left)),
          s
        );
      },
      Sd(e, o, n),
    );
  return (
    (u.width = u.right - u.left),
    (u.height = u.bottom - u.top),
    (u.x = u.left),
    (u.y = u.top),
    u
  );
}
function lp(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? wt(n) : null,
    i = n ? Xr(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    s;
  switch (a) {
    case Re:
      s = { x: o, y: t.y - r.height };
      break;
    case et:
      s = { x: o, y: t.y + t.height };
      break;
    case tt:
      s = { x: t.x + t.width, y: u };
      break;
    case Pe:
      s = { x: t.x - r.width, y: u };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var c = a ? Qs(a) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (i) {
      case Kr:
        s[c] = s[c] - (t[l] / 2 - r[l] / 2);
        break;
      case Oa:
        s[c] = s[c] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function ka(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    i = r.strategy,
    o = i === void 0 ? e.strategy : i,
    u = r.boundary,
    s = u === void 0 ? Cw : u,
    c = r.rootBoundary,
    l = c === void 0 ? rp : c,
    d = r.elementContext,
    f = d === void 0 ? ra : d,
    p = r.altBoundary,
    h = p === void 0 ? !1 : p,
    v = r.padding,
    g = v === void 0 ? 0 : v,
    b = sp(typeof g != "number" ? g : up(g, Pa)),
    m = f === ra ? Rw : ra,
    w = e.rects.popper,
    O = e.elements[h ? m : f],
    y = s1(hr(O) ? O : O.contextElement || rr(e.elements.popper), s, l, o),
    S = Jr(e.elements.reference),
    x = lp({ reference: S, element: w, placement: a }),
    j = ys(Object.assign({}, w, x)),
    D = f === ra ? j : S,
    R = {
      top: y.top - D.top + b.top,
      bottom: D.bottom - y.bottom + b.bottom,
      left: y.left - D.left + b.left,
      right: D.right - y.right + b.right,
    },
    T = e.modifiersData.offset;
  if (f === ra && T) {
    var B = T[a];
    Object.keys(R).forEach(function (z) {
      var V = [tt, et].indexOf(z) >= 0 ? 1 : -1,
        J = [Re, et].indexOf(z) >= 0 ? "y" : "x";
      R[z] += B[J] * V;
    });
  }
  return R;
}
function u1(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    i = r.rootBoundary,
    o = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    c = s === void 0 ? np : s,
    l = Xr(n),
    d = l
      ? u
        ? md
        : md.filter(function (h) {
            return Xr(h) === l;
          })
      : Pa,
    f = d.filter(function (h) {
      return c.indexOf(h) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (h, v) {
    return ((h[v] = ka(e, { placement: v, boundary: a, rootBoundary: i, padding: o })[wt(v)]), h);
  }, {});
  return Object.keys(p).sort(function (h, v) {
    return p[h] - p[v];
  });
}
function c1(e) {
  if (wt(e) === Js) return [];
  var t = ai(e);
  return [kd(e), t, kd(t)];
}
function l1(e) {
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
        p = r.flipVariations,
        h = p === void 0 ? !0 : p,
        v = r.allowedAutoPlacements,
        g = t.options.placement,
        b = wt(g),
        m = b === g,
        w = s || (m || !h ? [ai(g)] : c1(g)),
        O = [g].concat(w).reduce(function (le, ge) {
          return le.concat(
            wt(ge) === Js
              ? u1(t, {
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
        y = t.rects.reference,
        S = t.rects.popper,
        x = new Map(),
        j = !0,
        D = O[0],
        R = 0;
      R < O.length;
      R++
    ) {
      var T = O[R],
        B = wt(T),
        z = Xr(T) === Kr,
        V = [Re, et].indexOf(B) >= 0,
        J = V ? "width" : "height",
        G = ka(t, { placement: T, boundary: l, rootBoundary: d, altBoundary: f, padding: c }),
        q = V ? (z ? tt : Pe) : z ? et : Re;
      y[J] > S[J] && (q = ai(q));
      var X = ai(q),
        $ = [];
      if (
        (i && $.push(G[B] <= 0),
        u && $.push(G[q] <= 0, G[X] <= 0),
        $.every(function (le) {
          return le;
        }))
      ) {
        ((D = T), (j = !1));
        break;
      }
      x.set(T, $);
    }
    if (j)
      for (
        var A = h ? 3 : 1,
          be = function (ge) {
            var ce = O.find(function (Ue) {
              var Oe = x.get(Ue);
              if (Oe)
                return Oe.slice(0, ge).every(function (nt) {
                  return nt;
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
const d1 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: l1,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Ed(e, t, r) {
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
function xd(e) {
  return [Re, tt, et, Pe].some(function (t) {
    return e[t] >= 0;
  });
}
function f1(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    o = ka(t, { elementContext: "reference" }),
    u = ka(t, { altBoundary: !0 }),
    s = Ed(o, n),
    c = Ed(u, a, i),
    l = xd(s),
    d = xd(c);
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
const v1 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: f1,
};
function p1(e, t, r) {
  var n = wt(e),
    a = [Pe, Re].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = i[0],
    u = i[1];
  return (
    (o = o || 0),
    (u = (u || 0) * a),
    [Pe, tt].indexOf(n) >= 0 ? { x: u, y: o } : { x: o, y: u }
  );
}
function h1(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    i = a === void 0 ? [0, 0] : a,
    o = np.reduce(function (l, d) {
      return ((l[d] = p1(d, t.rects, i)), l);
    }, {}),
    u = o[t.placement],
    s = u.x,
    c = u.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o));
}
const g1 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: h1 };
function b1(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = lp({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const _1 = { name: "popperOffsets", enabled: !0, phase: "read", fn: b1, data: {} };
function y1(e) {
  return e === "x" ? "y" : "x";
}
function m1(e) {
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
    p = f === void 0 ? !0 : f,
    h = r.tetherOffset,
    v = h === void 0 ? 0 : h,
    g = ka(t, { boundary: s, rootBoundary: c, padding: d, altBoundary: l }),
    b = wt(t.placement),
    m = Xr(t.placement),
    w = !m,
    O = Qs(b),
    y = y1(O),
    S = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    j = t.rects.popper,
    D = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v,
    R =
      typeof D == "number"
        ? { mainAxis: D, altAxis: D }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
    T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    B = { x: 0, y: 0 };
  if (S) {
    if (i) {
      var z,
        V = O === "y" ? Re : Pe,
        J = O === "y" ? et : tt,
        G = O === "y" ? "height" : "width",
        q = S[O],
        X = q + g[V],
        $ = q - g[J],
        A = p ? -j[G] / 2 : 0,
        be = m === Kr ? x[G] : j[G],
        oe = m === Kr ? -j[G] : -x[G],
        ue = t.elements.arrow,
        le = p && ue ? Zs(ue) : { width: 0, height: 0 },
        ge = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : op(),
        ce = ge[V],
        Ue = ge[J],
        Oe = ca(0, x[G], le[G]),
        nt = w ? x[G] / 2 - A - Oe - ce - R.mainAxis : be - Oe - ce - R.mainAxis,
        pe = w ? -x[G] / 2 + A + Oe + Ue + R.mainAxis : oe + Oe + Ue + R.mainAxis,
        qe = t.elements.arrow && Aa(t.elements.arrow),
        Sr = qe ? (O === "y" ? qe.clientTop || 0 : qe.clientLeft || 0) : 0,
        At = (z = T?.[O]) != null ? z : 0,
        ke = q + nt - At - Sr,
        Se = q + pe - At,
        Vt = ca(p ? bi(X, ke) : X, q, p ? fr($, Se) : $);
      ((S[O] = Vt), (B[O] = Vt - q));
    }
    if (u) {
      var pt,
        at = O === "x" ? Re : Pe,
        Gt = O === "x" ? et : tt,
        Ve = S[y],
        Ie = y === "y" ? "height" : "width",
        Ee = Ve + g[at],
        it = Ve - g[Gt],
        Ht = [Re, Pe].indexOf(b) !== -1,
        La = (pt = T?.[y]) != null ? pt : 0,
        Fa = Ht ? Ee : Ve - x[Ie] - j[Ie] - La + R.altAxis,
        $a = Ht ? Ve + x[Ie] + j[Ie] - La - R.altAxis : it,
        Na = p && Ht ? Vw(Fa, Ve, $a) : ca(p ? Fa : Ee, Ve, p ? $a : it);
      ((S[y] = Na), (B[y] = Na - Ve));
    }
    t.modifiersData[n] = B;
  }
}
const w1 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: m1,
  requiresIfExists: ["offset"],
};
function O1(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function k1(e) {
  return e === $e(e) || !Qe(e) ? eu(e) : O1(e);
}
function S1(e) {
  var t = e.getBoundingClientRect(),
    r = Yr(t.width) / e.offsetWidth || 1,
    n = Yr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function E1(e, t, r) {
  r === void 0 && (r = !1);
  var n = Qe(t),
    a = Qe(t) && S1(t),
    i = rr(t),
    o = Jr(e, a, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Et(t) !== "body" || ru(i)) && (u = k1(t)),
      Qe(t) ? ((s = Jr(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : i && (s.x = tu(i))),
    {
      x: o.left + u.scrollLeft - s.x,
      y: o.top + u.scrollTop - s.y,
      width: o.width,
      height: o.height,
    }
  );
}
function x1(e) {
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
function C1(e) {
  var t = x1(e);
  return $w.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function R1(e) {
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
function P1(e) {
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
var Cd = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Rd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function A1(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    i = a === void 0 ? Cd : a;
  return function (u, s, c) {
    c === void 0 && (c = i);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Cd, i),
        modifiersData: {},
        elements: { reference: u, popper: s },
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
              reference: hr(u) ? la(u) : u.contextElement ? la(u.contextElement) : [],
              popper: la(s),
            }));
          var w = C1(P1([].concat(n, l.options.modifiers)));
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
            if (Rd(m, w)) {
              ((l.rects = {
                reference: E1(m, Aa(w), l.options.strategy === "fixed"),
                popper: Zs(w),
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
                var y = l.orderedModifiers[O],
                  S = y.fn,
                  x = y.options,
                  j = x === void 0 ? {} : x,
                  D = y.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: j, name: D, instance: p }) || l);
              }
            }
          }
        },
        update: R1(function () {
          return new Promise(function (g) {
            (p.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (v(), (f = !0));
        },
      };
    if (!Rd(u, s)) return p;
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
          var y = O({ state: l, name: b, instance: p, options: w }),
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
var j1 = [e1, _1, Zw, Bw, g1, d1, w1, Kw, v1],
  I1 = A1({ defaultModifiers: j1 }),
  Ho,
  Pd;
function D1() {
  if (Pd) return Ho;
  Pd = 1;
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
    (Ho = function (o, u) {
      try {
        return a(o, u);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    Ho
  );
}
var T1 = D1();
const M1 = tr(T1);
var L1 = [],
  F1 = function (t, r, n) {
    n === void 0 && (n = {});
    var a = _.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || L1,
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
          fn: function (p) {
            var h = p.state,
              v = Object.keys(h.elements);
            Ci.flushSync(function () {
              s({
                styles: _d(
                  v.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: _d(
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
            onFirstUpdate: i.onFirstUpdate,
            placement: i.placement,
            strategy: i.strategy,
            modifiers: [].concat(i.modifiers, [c, { name: "applyStyles", enabled: !1 }]),
          };
          return M1(a.current, f) ? a.current || f : ((a.current = f), f);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c],
      ),
      d = _.useRef();
    return (
      yd(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      yd(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || I1,
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
        styles: u.styles,
        attributes: u.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  },
  $1 = function () {},
  N1 = function () {
    return Promise.resolve(null);
  },
  z1 = [];
function B1(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    i = e.modifiers,
    o = i === void 0 ? z1 : i,
    u = e.referenceElement,
    s = e.onFirstUpdate,
    c = e.innerRef,
    l = e.children,
    d = _.useContext(kw),
    f = _.useState(null),
    p = f[0],
    h = f[1],
    v = _.useState(null),
    g = v[0],
    b = v[1];
  _.useEffect(
    function () {
      xw(c, p);
    },
    [c, p],
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
    w = F1(u || d, p, m),
    O = w.state,
    y = w.styles,
    S = w.forceUpdate,
    x = w.update,
    j = _.useMemo(
      function () {
        return {
          ref: h,
          style: y.popper,
          placement: O ? O.placement : r,
          hasPopperEscaped:
            O && O.modifiersData.hide ? O.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            O && O.modifiersData.hide ? O.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: y.arrow, ref: b },
          forceUpdate: S || $1,
          update: x || N1,
        };
      },
      [h, b, r, O, y, x, S],
    );
  return Sw(l)(j);
}
function U1(e) {
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
            p = s.placement.split("-"),
            h = K(p, 1),
            v = h[0],
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
var ms = 5,
  q1 = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: ms,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function V1() {
  return null;
}
var G1 = [0, 8];
function H1(e) {
  var t = e.children,
    r = t === void 0 ? V1 : t,
    n = e.offset,
    a = n === void 0 ? G1 : n,
    i = e.placement,
    o = i === void 0 ? "bottom-start" : i,
    u = e.referenceElement,
    s = u === void 0 ? void 0 : u,
    c = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    f = e.shouldFitViewport,
    p = f === void 0 ? !1 : f,
    h = K(a, 2),
    v = h[0],
    g = h[1],
    b = _.useMemo(
      function () {
        var w = {
            name: "preventOverflow",
            options: { padding: ms, rootBoundary: p ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [v, g] } },
          y = p ? U1({ viewportPadding: ms }) : [];
        return [].concat(q1, [w, O], De(y));
      },
      [v, g, p],
    ),
    m = _.useMemo(
      function () {
        return c == null ? b : [].concat(De(b), De(c));
      },
      [b, c],
    );
  return k.createElement(B1, { modifiers: m, placement: o, strategy: d, referenceElement: s }, r);
}
var dp = "atlaskit-portal-container",
  fp = "body > .atlaskit-portal-container",
  vp = "atlaskit-portal",
  W1 = function (t) {
    var r = document.createElement("div");
    return ((r.className = vp), (r.style.zIndex = "".concat(t)), r);
  },
  pp = function () {
    return document.body;
  },
  hp = function () {
    var t = document.querySelector(fp);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = dp),
        (n.style.display = "flex"),
        (r = pp()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  K1 = function (t) {
    hp().removeChild(t);
  },
  Y1 = function (t) {
    t.parentElement || hp().appendChild(t);
  },
  gp = function () {
    return document !== void 0;
  },
  J1 = function (t) {
    if (gp()) {
      var r = document.createElement("div");
      return ((r.className = vp), (r.style.zIndex = "".concat(t)), r);
    }
  },
  X1 = function () {
    if (gp()) {
      var t = document.querySelector(fp);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = dp),
          (n.style.display = "flex"),
          (r = pp()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function Z1(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useMemo(
      function () {
        return W1(t);
      },
      [t],
    );
  return (
    Y1(n),
    _.useEffect(
      function () {
        return function () {
          K1(n);
        };
      },
      [n],
    ),
    Ci.createPortal(r, n)
  );
}
var bp = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function Q1(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useState(null),
    a = K(n, 2),
    i = a[0],
    o = a[1];
  bp(
    function () {
      var s = J1(t);
      o(s);
      var c = X1();
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
  return i ? Ci.createPortal(u, i) : null;
}
var eO = function (t) {
    var r = _.useState(!1),
      n = K(r, 2),
      a = n[0],
      i = n[1],
      o = _.useState(function () {
        return t === "layoutEffect" ? bp : _.useEffect;
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
  tO = "akPortalMount",
  rO = "akPortalUnmount",
  Ad = {
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
  nO = function (t) {
    return Ad.hasOwnProperty(t) ? Ad[t] : null;
  },
  aO = function (t, r) {
    var n = { layer: nO(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function jd(e, t) {
  var r = aO(e, t);
  window.dispatchEvent(r);
}
var iO = function (t) {
  var r = Number(t);
  _.useEffect(
    function () {
      return (
        jd(tO, r),
        function () {
          jd(rO, r);
        }
      );
    },
    [r],
  );
};
function oO(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    i = a === void 0 ? "effect" : a,
    o = eO(i);
  return (
    iO(r),
    Le("platform_design_system_team_portal_logic_r18_fix")
      ? k.createElement(Q1, { zIndex: r }, n)
      : o
        ? k.createElement(Z1, { zIndex: r }, n)
        : null
  );
}
var da = new Set(),
  Sa = null;
function Id() {
  if (!Sa) {
    Sa = ji.bindAll(window, [
      { type: "dragend", listener: Wo },
      { type: "pointerdown", listener: Wo },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            Wo();
          };
        })(),
      },
    ]);
    var e = Array.from(da);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function Wo() {
  var e;
  ((e = Sa) === null || e === void 0 || e(), (Sa = null));
  var t = Array.from(da);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function sO() {
  return ji.bindAll(window, [
    { type: "dragstart", listener: Id },
    { type: "dragenter", listener: Id },
  ]);
}
var Ya = null;
function uO(e) {
  return (
    Ya || (Ya = sO()),
    da.add(e),
    e.onRegister({ isDragging: Sa !== null }),
    function () {
      if ((da.delete(e), da.size === 0)) {
        var r;
        ((r = Ya) === null || r === void 0 || r(), (Ya = null));
      }
    }
  );
}
var fa = null;
function oa() {
  fa != null && (window.clearTimeout(fa), (fa = null));
}
function Dd(e, t) {
  (oa(),
    (fa = window.setTimeout(function () {
      ((fa = null), e());
    }, t)));
}
var ht = null;
function cO(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(ht && ht.entry === e);
  }
  function n() {
    r() && (oa(), (ht = null));
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
        ((t = "shown"), oa());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), oa(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function u(p) {
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
          Dd(function () {
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
    var p = !!(ht && ht.isVisible());
    (ht && (oa(), ht.entry.hide({ isImmediate: !0 }), ht.entry.done(), (ht = null)),
      (ht = { entry: e, isVisible: c }));
    function h() {
      ((t = "shown"), e.show({ isImmediate: p }));
    }
    if (p) {
      h();
      return;
    }
    ((t = "waiting-to-show"), Dd(h, e.delay));
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
function lO(e, t) {
  var r = Qy();
  return t ? "".concat(r(e)) : void 0;
}
var Td = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81u0j _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d7jlr _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7",
  },
  dO = function (t) {
    var r = t.shortcut;
    return _.createElement(
      "div",
      { className: C([Td.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return _.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: C([Td.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  _p = _.forwardRef(function (t, r) {
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
          className: C(["_80om73ad", a]),
          onMouseOut: s,
          onMouseOver: c,
          "data-placement": o,
          "data-testid": u,
          id: l,
        },
        i,
        d && Le("platform-dst-tooltip-shortcuts") && _.createElement(dO, { shortcut: d }),
      ),
    );
  });
_p.displayName = "TooltipPrimitive";
var Ko = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _85i5v77o _1q51v77o _y4ti12x7 _bozg12x7 _slp31hna",
    baseRefreshedPadding: "_1q511b66 _85i51b66",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  yp = _.forwardRef(function (t, r) {
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
      _p,
      {
        ref: r,
        style: n,
        className: C([
          Ko.base,
          Le("platform-dst-tooltip-shortcuts") && Ko.baseRefreshedPadding,
          o && Ko.truncate,
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
yp.displayName = "TooltipContainer";
function Md(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function Ld(e, t) {
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
      ? Ld(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ld(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var fO = em.tooltip(),
  Fd = {
    componentName: "tooltip",
    packageName: "@atlaskit/tooltip",
    packageVersion: "0.0.0-development",
  },
  vO = { top: "bottom", bottom: "top", left: "right", right: "left" },
  pO = function (t) {
    return t.split("-")[0];
  };
function hO(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    i = a === void 0 ? "bottom" : a,
    o = e.content,
    u = e.truncate,
    s = u === void 0 ? !1 : u,
    c = e.component,
    l = c === void 0 ? yp : c,
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
    y = e.hideTooltipOnClick,
    S = y === void 0 ? !1 : y,
    x = e.hideTooltipOnMouseDown,
    j = x === void 0 ? !1 : x,
    D = e.analyticsContext,
    R = e.strategy,
    T = R === void 0 ? "fixed" : R,
    B = e.ignoreTooltipPointerEvents,
    z = B === void 0 ? !1 : B,
    V = e.isScreenReaderAnnouncementDisabled,
    J = V === void 0 ? !1 : V,
    G = e.shortcut,
    q = n === "mouse" ? i : n,
    X = Pc(zr({ fn: b, action: "displayed", analyticsData: D }, Fd)),
    $ = Pc(zr({ fn: w, action: "hidden", analyticsData: D }, Fd)),
    A = _.useRef(null),
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
    nt = ta(ue),
    pe = ta(X),
    qe = ta($),
    Sr = ta(v),
    At = ta(O),
    ke = _.useRef(!1),
    Se = _.useCallback(function (L) {
      ((A.current = L), (ke.current = !1));
    }, []),
    Vt = _.useCallback(
      function () {
        A.current &&
          (ke.current && qe.current(), (A.current = null), (ke.current = !1), le("hide"));
      },
      [qe],
    ),
    pt = _.useCallback(
      function () {
        A.current && (A.current.abort(), ke.current && qe.current(), (A.current = null));
      },
      [qe],
    );
  _.useEffect(
    function () {
      return function () {
        A.current && pt();
      };
    },
    [pt],
  );
  var at = _.useRef(!1);
  _.useEffect(function () {
    return uO({
      onRegister: function (re) {
        var jt = re.isDragging;
        at.current = jt;
      },
      onDragStart: function () {
        var re;
        ((re = A.current) === null || re === void 0 || re.requestHide({ isImmediate: !0 }),
          (at.current = !0));
      },
      onDragEnd: function () {
        at.current = !1;
      },
    });
  }, []);
  var Gt = _.useCallback(
      function (L) {
        var re;
        if (!at.current) {
          if ((A.current && !A.current.isActive() && pt(), A.current && A.current.isActive())) {
            A.current.keep();
            return;
          }
          if (!(At.current && !((re = At.current) !== null && re !== void 0 && re.call(At)))) {
            var jt = {
                source: L,
                delay: Sr.current,
                show: function (Er) {
                  var on = Er.isImmediate;
                  (ke.current || ((ke.current = !0), pe.current()),
                    le(on ? "show-immediate" : "fade-in"));
                },
                hide: function (Er) {
                  var on = Er.isImmediate;
                  le(on ? "hide" : "before-fade-out");
                },
                done: Vt,
              },
              Qi = cO(jt);
            Se(Qi);
          }
        }
      },
      [At, Sr, Vt, Se, pt, pe],
    ),
    Ve = _.useCallback(
      function () {
        var L;
        (L = A.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
      },
      [A],
    );
  (nw({ onClose: Ve, isDisabled: ue === "hide" || ue === "fade-out" }),
    _.useEffect(
      function () {
        if (ue === "hide") return we;
        ue === "before-fade-out" && le("fade-out");
        var L = ji.bind(window, {
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
  var Ie = _.useCallback(
      function () {
        j && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [j],
    ),
    Ee = _.useCallback(
      function () {
        S && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    it = _.useCallback(
      function (L) {
        if (!(ce.current && L.target === ce.current) && !L.defaultPrevented) {
          L.preventDefault();
          var re =
            n === "mouse"
              ? { type: "mouse", mouse: Md({ left: L.clientX, top: L.clientY }) }
              : { type: "keyboard" };
          Gt(re);
        }
      },
      [n, Gt],
    ),
    Ht = _.useCallback(function (L) {
      (ce.current && L.target === ce.current) ||
        L.defaultPrevented ||
        (L.preventDefault(), A.current && A.current.requestHide({ isImmediate: !1 }));
    }, []),
    La =
      n === "mouse"
        ? function (L) {
            var re;
            (re = A.current) !== null &&
              re !== void 0 &&
              re.isActive() &&
              (A.current.mousePosition = Md({ left: L.clientX, top: L.clientY }));
          }
        : void 0,
    Fa = _.useCallback(function () {
      if (A.current && A.current.isActive()) {
        A.current.keep();
        return;
      }
    }, []),
    $a = _.useCallback(
      function (L) {
        try {
          if (!L.target.matches(":focus-visible") && Le("platform-tooltip-focus-visible-new"))
            return;
        } catch {}
        Gt({ type: "keyboard" });
      },
      [Gt],
    ),
    Na = _.useCallback(function () {
      A.current && A.current.requestHide({ isImmediate: !1 });
    }, []),
    mh = _.useCallback(
      function (L) {
        L === "exiting" &&
          nt.current === "fade-out" &&
          A.current &&
          A.current.finishHideAnimation();
      },
      [nt],
    ),
    wh = f,
    Xi = ue !== "hide" && !!o,
    fu = !J && Xi,
    vu = ue !== "hide" && ue !== "fade-out",
    Oh = _.useCallback(function () {
      var L;
      (L = A.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
    }, []);
  sw({ isOpen: Xi && vu, onClose: Oh });
  var pu = function () {
      var re;
      if (n === "mouse" && (re = A.current) !== null && re !== void 0 && re.mousePosition) {
        var jt;
        return (jt = A.current) === null || jt === void 0 ? void 0 : jt.mousePosition;
      }
      return ge.current || void 0;
    },
    an = lO("tooltip", fu),
    Zi = {
      onMouseOver: it,
      onMouseOut: Ht,
      onMouseMove: La,
      onMouseDown: Ie,
      onClick: Ee,
      onFocus: $a,
      onBlur: Na,
    };
  p && (Zi["data-testid"] = "".concat(p, "--container"));
  var hu = typeof t == "function";
  _.useEffect(
    function () {
      if (!hu) {
        var L = ge.current;
        if (!(!L || !an))
          return (
            L.setAttribute("aria-describedby", an),
            function () {
              return L.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [hu, an],
  );
  var gu = fu
    ? k.createElement(
        "span",
        { "data-testid": p ? "".concat(p, "-hidden") : void 0, hidden: !0, id: an },
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
          t(zr(zr({}, Zi), {}, { "aria-describedby": an, ref: Oe })),
          gu,
        )
      : k.createElement(wh, te({}, Zi, { ref: Ue, role: "presentation" }), t, gu),
    Xi
      ? k.createElement(
          oO,
          { zIndex: fO },
          k.createElement(H1, { placement: q, referenceElement: pu(), strategy: T }, function (L) {
            var re = L.ref,
              jt = L.style,
              Qi = L.update,
              eo = L.placement,
              Er = n === "mouse" ? void 0 : vO[pO(eo)];
            return k.createElement(
              tp,
              { appear: !0 },
              vu &&
                k.createElement(
                  Ow,
                  {
                    distance: "constant",
                    entranceDirection: Er,
                    exitDirection: Er,
                    onFinish: mh,
                    duration: ue !== "show-immediate" ? "medium" : "none",
                  },
                  function (on) {
                    var kh = on.className;
                    return k.createElement(
                      l,
                      {
                        ref: re,
                        className: "Tooltip ".concat(kh),
                        style: zr(zr({}, jt), z && { pointerEvents: "none" }),
                        truncate: s,
                        placement: q,
                        testId: pu() ? p : p && "".concat(p, "--unresolved"),
                        onMouseOut: Ht,
                        onMouseOver: Fa,
                        shortcut: G,
                      },
                      typeof o == "function" ? o({ update: Qi }) : o,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var gO = [
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
  na = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  $d = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syaz1gjq _k48pmoej" },
  mp = function (t) {
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
      p = t.descendingSortTooltip,
      h = p === void 0 ? "Sort descending" : p,
      v = t.buttonAriaRoleDescription,
      g = v === void 0 ? "Sort button" : v,
      b = t.isIconOnlyHeader,
      m = ae(t, gO),
      w = _.useState(!1),
      O = K(w, 2),
      y = O[0],
      S = O[1],
      x = _.useState(!1),
      j = K(x, 2),
      D = j[0],
      R = j[1],
      T = c === l || u !== void 0,
      B = y || T || D,
      z = B && b,
      V = !b || B || (b && !D),
      J = _.useCallback(
        function () {
          R?.(!0);
        },
        [R],
      ),
      G = _.useCallback(
        function () {
          R?.(!1);
        },
        [R],
      ),
      q = _.useCallback(
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
      $ = k.createElement(
        Ai,
        { xcss: $d.headCellContainer, onMouseEnter: q, onMouseLeave: X, onFocus: J, onBlur: G },
        k.createElement(
          hO,
          { content: u === pr ? f : h },
          k.createElement(
            By,
            { onClick: s, xcss: na.buttonWrapper, "aria-roledescription": g },
            k.createElement(
              hi,
              { xcss: z ? na.hideIconHeaderWrapper : na.visibleHeaderWrapper },
              k.createElement("span", { className: C([$d.text]) }, r),
            ),
            V &&
              k.createElement(
                hi,
                { xcss: B ? na.sortIconVisibleWrapper : na.sortIconHiddenWrapper },
                u === pr
                  ? k.createElement(tw, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : k.createElement(Z0, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return k.createElement(
      W0,
      te(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof i != "string" ? i : null,
        },
        m,
        { isSortable: o, sortOrder: u },
      ),
      o ? $ : r,
    );
  },
  bO = ["isRanking", "refHeight", "refWidth"];
function _O(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, wp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var yO = (function (e) {
    function t() {
      return (fe(this, t), _O(this, t, arguments));
    }
    return (
      ze(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var i = n.refWidth,
              o = ae(n, bO),
              u = Pg(a, i);
            return k.createElement(mp, te({ inlineStyles: u }, o));
          },
        },
      ])
    );
  })(k.Component),
  mO = Y0(yO),
  wO = ["cells"],
  OO = [
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
function kO(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, Op() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var SO = (function (e) {
    function t(r) {
      var n;
      return (fe(this, t), (n = kO(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      ze(t, e),
      ve(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            li(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              li(n.sortKey, n.head);
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
              p = this.state.activeSortButtonId;
            if (!i) return null;
            var h = d ? mO : mp,
              v = i.cells,
              g = ae(i, wO);
            return k.createElement(
              H0,
              te({}, g, { isRanking: l, testId: f && "".concat(f, "--head") }),
              k.createElement(
                "tr",
                null,
                v.map(function (b, m) {
                  var w = b.ascendingSortTooltip,
                    O = b.buttonAriaRoleDescription,
                    y = b.colSpan,
                    S = b.content,
                    x = b.descendingSortTooltip,
                    j = b.isIconOnlyHeader,
                    D = b.isSortable,
                    R = b.key,
                    T = b.shouldTruncate,
                    B = b.testId,
                    z = b.width,
                    V = ae(b, OO),
                    J = "head-cell-".concat(m),
                    G = function () {
                      (n.setState({ activeSortButtonId: J }), D && c(b)());
                    };
                  return k.createElement(
                    h,
                    te(
                      {
                        colSpan: y,
                        content: S,
                        isFixedSize: s,
                        isIconOnlyHeader: j,
                        isSortable: !!D,
                        isRanking: l,
                        key: R || m,
                        headCellId: J,
                        activeSortButtonId: p,
                        onClick: G,
                        testId: B || f,
                        shouldTruncate: T,
                        sortOrder: R === o ? u : void 0,
                        width: z,
                        ascendingSortTooltip: w,
                        descendingSortTooltip: x,
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
  EO = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function xO(e) {
  switch (e) {
    case vi:
      return pr;
    case pr:
      return vi;
    default:
      return e;
  }
}
var CO = function (t) {
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
      p = t.isLoading,
      h = p === void 0 ? !1 : p,
      v = t.isFixedSize,
      g = v === void 0 ? !1 : v,
      b = t.rowsPerPage,
      m = b === void 0 ? 1 / 0 : b,
      w = t.onSetPage,
      O = w === void 0 ? we : w,
      y = t.onSort,
      S = y === void 0 ? we : y,
      x = t.page,
      j = x === void 0 ? 1 : x,
      D = t.emptyView,
      R = t.isRankable,
      T = R === void 0 ? !1 : R,
      B = t.isRankingDisabled,
      z = B === void 0 ? !1 : B,
      V = t.onRankStart,
      J = V === void 0 ? we : V,
      G = t.onRankEnd,
      q = G === void 0 ? we : G,
      X = t.loadingSpinnerSize,
      $ = t.paginationi18n,
      A =
        $ === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : $,
      be = _.useState(!1),
      oe = K(be, 2),
      ue = oe[0],
      le = oe[1],
      ge = _.useRef(null),
      ce = ga({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      Ue = ga({
        fn: q,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    _.useEffect(
      function () {
        (li(o, n), Rg(n));
      },
      [o, n],
    );
    var Oe = function (Ee) {
        return function () {
          var it = Ee.key;
          if (it) {
            if (ce && T && it === o && u === vi) {
              ce({ key: null, sortOrder: null, item: Ee });
              return;
            }
            var Ht = it !== o ? pr : xO(u);
            ce && ce({ key: it, item: Ee, sortOrder: Ht });
          }
        };
      },
      nt = function (Ee, it) {
        O(Ee, it);
      },
      pe = function (Ee) {
        (le(!0), J(Ee));
      },
      qe = function (Ee) {
        (le(!1), Ue(Ee));
      },
      Sr = function () {
        return X || (ev(i || [], j, m).length > 2 ? pi : Jg);
      },
      At = function () {
        return h ? k.createElement(rb, { testId: l }) : D && k.createElement(nb, { testId: l }, D);
      },
      ke = i && i.length,
      Se,
      Vt = !1;
    (d && Number.isInteger(d) && m && ke && ke <= d
      ? ((Se = Math.ceil(d / m)), (Vt = !0))
      : (Se = ke && m ? Math.ceil(ke / m) : 0),
      (Se = Se < 1 ? 1 : Se));
    var pt = j > Se ? Se : j,
      at = !!ke,
      Gt = Sr(),
      Ve = At();
    return k.createElement(
      k.Fragment,
      null,
      k.createElement(
        vv,
        {
          isLoading: h && at,
          spinnerSize: Gt,
          targetRef: function () {
            return ge.current;
          },
          testId: l,
          loadingLabel: s,
        },
        k.createElement(
          Qg,
          { isFixedSize: g, "aria-label": f, hasDataRow: at, testId: l, isLoading: h },
          !!r && k.createElement(eb, null, r),
          n &&
            k.createElement(SO, {
              head: n,
              onSort: Oe,
              sortKey: o,
              sortOrder: u,
              isRanking: ue,
              isRankable: T,
              testId: l,
            }),
          at &&
            k.createElement(PO, {
              ref: ge,
              highlightedRowIndex: a,
              rows: i,
              head: n,
              sortKey: o,
              sortOrder: u,
              rowsPerPage: m,
              page: pt,
              isFixedSize: g || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: Vt,
              testId: l,
              isRankable: T,
              isRanking: ue,
              onRankStart: pe,
              onRankEnd: qe,
              isRankingDisabled: z || h || !1,
            }),
        ),
      ),
      Se <= 1
        ? null
        : k.createElement(
            tb,
            { testId: l },
            k.createElement(q0, {
              value: pt,
              onChange: nt,
              total: Se,
              i18n: A,
              isDisabled: h,
              testId: l,
            }),
          ),
      !at &&
        Ve &&
        k.createElement(dv, { isLoading: h, spinnerSize: pi, testId: l, loadingLabel: s }, Ve),
    );
  },
  RO = _.lazy(function () {
    return Dg(
      () => import("./body-BhsSWyQH.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  PO = _.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      i = t.isRanking,
      o = t.onRankStart,
      u = t.onRankEnd,
      s = t.isRankingDisabled,
      c = ae(t, EO),
      l = a && !c.sortKey,
      d = _.useState(!1),
      f = K(d, 2),
      p = f[0],
      h = f[1];
    _.useEffect(
      function () {
        l && h(!0);
      },
      [l],
    );
    var v = k.createElement(_b, te({ ref: r }, c));
    return l && p
      ? k.createElement(
          mb,
          { fallback: v },
          k.createElement(
            _.Suspense,
            { fallback: v },
            k.createElement(
              RO,
              te({ ref: r }, c, {
                isRanking: i,
                onRankStart: o,
                onRankEnd: u,
                isRankingDisabled: s,
              }),
            ),
          ),
        )
      : v;
  });
function AO(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, kp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function kp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (kp = function () {
    return !!e;
  })();
}
var nu = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = AO(this, t, [].concat(a))),
      E(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      E(r, "onSetPageHandler", function (o, u) {
        var s = r.props.onSetPage;
        s && (s(o, u), r.setState({ page: o }));
      }),
      E(r, "onSortHandler", function (o, u) {
        var s = o.key,
          c = o.item,
          l = o.sortOrder,
          d = r.props.onSort;
        d && (d({ key: s, item: c, sortOrder: l }, u), r.setState({ sortKey: s, sortOrder: l }));
      }),
      E(r, "onRankEndIfExistsHandler", function (o) {
        r.props.onRankEnd && r.props.onRankEnd(o);
      }),
      E(r, "onRankEndHandler", function (o) {
        var u = o.destination,
          s = r.state,
          c = s.rows,
          l = s.page,
          d = r.props.rowsPerPage;
        if (!u || !c) {
          r.onRankEndIfExistsHandler(o);
          return;
        }
        var f = Ag(o, c, l, d);
        (r.setState({ rows: f }), r.onRankEndIfExistsHandler(o));
      }),
      r
    );
  }
  return (
    ze(t, e),
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
            p = s.loadingSpinnerSize,
            h = s.isLoading,
            v = s.loadingLabel,
            g = s.isFixedSize,
            b = s.isRankable,
            m = s.isRankingDisabled,
            w = s.rowsPerPage,
            O = s.paginationi18n,
            y = s.onRankStart,
            S = s.onPageRowsUpdate,
            x = s.testId,
            j = s.label;
          return k.createElement(CO, {
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
            rows: u,
            rowsPerPage: w,
            sortKey: i,
            sortOrder: o,
            isRankable: b,
            isRankingDisabled: m,
            onRankEnd: this.onRankEndHandler,
            onRankStart: y,
            onPageRowsUpdate: S,
            testId: x,
            label: j,
          });
        },
      },
    ])
  );
})(k.Component);
E(nu, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: we,
  onSort: we,
  rowsPerPage: 1 / 0,
});
const jO = (e, t, r) => {
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
  Sp = (e, t, r) => ({ cells: jO(e, t, r) });
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
var IO = {};
function Li() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : IO;
}
var Ep = Object.assign,
  _i = Object.getOwnPropertyDescriptor,
  Ot = Object.defineProperty,
  Fi = Object.prototype,
  ws = [];
Object.freeze(ws);
var xp = {};
Object.freeze(xp);
var DO = typeof Proxy < "u",
  TO = Object.toString();
function Cp() {
  DO || H("Proxy not available");
}
function Rp(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Ur = function () {};
function lt(e) {
  return typeof e == "function";
}
function gr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function $i(e) {
  return e !== null && typeof e == "object";
}
function er(e) {
  if (!$i(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === TO;
}
function Pp(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Ni(e, t, r) {
  Ot(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function Ap(e, t, r) {
  Ot(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function mr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return $i(n) && n[r] === !0;
    }
  );
}
function tn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function MO(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Ft(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var jp = typeof Object.getOwnPropertySymbols < "u";
function LO(e) {
  var t = Object.keys(e);
  if (!jp) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Fi.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var zi =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : jp
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function Ip(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function zt(e, t) {
  return Fi.hasOwnProperty.call(e, t);
}
var FO =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      zi(t).forEach(function (n) {
        r[n] = _i(t, n);
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
function Nd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $O(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, zO(n.key), n));
  }
}
function rn(e, t, r) {
  return (t && $O(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function qr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = BO(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function br() {
  return (
    (br = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    br.apply(null, arguments)
  );
}
function Dp(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Os(e, t));
}
function Os(e, t) {
  return (
    (Os = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Os(e, t)
  );
}
function NO(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function zO(e) {
  var t = NO(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function BO(e, t) {
  if (e) {
    if (typeof e == "string") return Nd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Nd(e, t)
          : void 0
    );
  }
}
var yt = Symbol("mobx-stored-annotations");
function kt(e) {
  function t(r, n) {
    if (Ia(n)) return e.decorate_20223_(r, n);
    ja(r, n, e);
  }
  return Object.assign(t, e);
}
function ja(e, t, r) {
  (zt(e, yt) || Ni(e, yt, br({}, e[yt])), KO(r) || (e[yt][t] = r));
}
function UO(e) {
  return (zt(e, yt) || Ni(e, yt, br({}, e[yt])), e[yt]);
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
        return Yp(this);
      }),
      (t.reportChanged = function () {
        (Je(), Jp(this), Xe());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      rn(e, [
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
nr.isBeingObservedMask_ = 1;
nr.isPendingUnobservationMask_ = 2;
nr.diffValueMask_ = 4;
var au = mr("Atom", nr);
function Tp(e, t, r) {
  (t === void 0 && (t = Ur), r === void 0 && (r = Ur));
  var n = new nr(e);
  return (t !== Ur && Qk(n, t), r !== Ur && th(n, r), n);
}
function qO(e, t) {
  return vh(e, t);
}
function VO(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var yi = { structural: qO, default: VO };
function _r(e, t, r) {
  return ih(e)
    ? e
    : Array.isArray(e)
      ? se.array(e, { name: r })
      : er(e)
        ? se.object(e, void 0, { name: r })
        : tn(e)
          ? se.map(e, { name: r })
          : Ft(e)
            ? se.set(e, { name: r })
            : typeof e == "function" && !Zr(e) && !xa(e)
              ? Pp(e)
                ? Qr(e)
                : Ea(r, e)
              : e;
}
function GO(e, t, r) {
  if (e == null || Ki(e) || Wi(e) || Or(e) || _t(e)) return e;
  if (Array.isArray(e)) return se.array(e, { name: r, deep: !1 });
  if (er(e)) return se.object(e, void 0, { name: r, deep: !1 });
  if (tn(e)) return se.map(e, { name: r, deep: !1 });
  if (Ft(e)) return se.set(e, { name: r, deep: !1 });
}
function Bi(e) {
  return e;
}
function HO(e, t) {
  return vh(e, t) ? t : e;
}
var WO = "override";
function KO(e) {
  return e.annotationType_ === WO;
}
function Da(e, t) {
  return { annotationType_: e, options_: t, make_: YO, extend_: JO, decorate_20223_: XO };
}
function YO(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Zr(r.value)) return 1;
  var i = Mp(e, this, t, r, !1);
  return (Ot(n, t, i), 2);
}
function JO(e, t, r, n) {
  var a = Mp(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function XO(e, t) {
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
    return function (s) {
      var c,
        l = s;
      return (
        Zr(l) || (l = o(l)),
        (c = i.options_) != null && c.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var u;
    return (
      Zr(e) || (e = o(e)),
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
function ZO(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Mp(e, t, r, n, a) {
  var i, o, u, s, c, l, d;
  (a === void 0 && (a = P.safeDescriptors), ZO(e, t, r, n));
  var f = n.value;
  if ((i = t.options_) != null && i.bound) {
    var p;
    f = f.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return {
    value: yr(
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
function Lp(e, t) {
  return { annotationType_: e, options_: t, make_: QO, extend_: ek, decorate_20223_: tk };
}
function QO(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!zt(e.target_, t) || !xa(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (xa(r.value)) return 1;
  var i = Fp(e, this, t, r, !1, !1);
  return (Ot(n, t, i), 2);
}
function ek(e, t, r, n) {
  var a,
    i = Fp(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, i, n);
}
function tk(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    xa(e) || (e = Qr(e)),
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
function rk(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Fp(e, t, r, n, a, i) {
  (i === void 0 && (i = P.safeDescriptors), rk(e, t, r, n));
  var o = n.value;
  if ((xa(o) || (o = Qr(o)), a)) {
    var u;
    ((o = o.bind((u = e.proxy_) != null ? u : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: i ? e.isPlainObject_ : !0, enumerable: !1, writable: !i };
}
function iu(e, t) {
  return { annotationType_: e, options_: t, make_: nk, extend_: ak, decorate_20223_: ik };
}
function nk(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function ak(e, t, r, n) {
  return (
    ok(e, this, t, r),
    e.defineComputedProperty_(t, br({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function ik(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var i = nn(this)[F],
        o = br({}, r.options_, { get: e, context: this });
      (o.name || (o.name = "ObservableObject." + n.toString()), i.values_.set(n, new dt(o)));
    }),
    function () {
      return this[F].getObservablePropValue_(n);
    }
  );
}
function ok(e, t, r, n) {
  (t.annotationType_, n.get);
}
function Ui(e, t) {
  return { annotationType_: e, options_: t, make_: sk, extend_: uk, decorate_20223_: ck };
}
function sk(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function uk(e, t, r, n) {
  var a, i;
  return (
    lk(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (i = this.options_) == null ? void 0 : i.enhancer) != null ? a : _r,
      n,
    )
  );
}
function ck(e, t) {
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
        (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : _r,
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
function lk(e, t, r, n) {
  t.annotationType_;
}
var dk = "true",
  fk = $p();
function $p(e) {
  return { annotationType_: dk, options_: e, make_: vk, extend_: pk, decorate_20223_: hk };
}
function vk(e, t, r, n) {
  var a, i;
  if (r.get) return qi.make_(e, t, r, n);
  if (r.set) {
    var o = Zr(r.set) ? r.set : yr(t.toString(), r.set);
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
    var u;
    if (Pp(r.value)) {
      var s,
        c = (s = this.options_) != null && s.autoBind ? Qr.bound : Qr;
      return c.make_(e, t, r, n);
    }
    var l = (u = this.options_) != null && u.autoBind ? Ea.bound : Ea;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? se.ref : se;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function pk(e, t, r, n) {
  var a, i;
  if (r.get) return qi.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: P.safeDescriptors ? e.isPlainObject_ : !0, set: yr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var u = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? se.ref : se;
  return u.extend_(e, t, r, n);
}
function hk(e, t) {
  H("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var gk = "observable",
  bk = "observable.ref",
  _k = "observable.shallow",
  yk = "observable.struct",
  Np = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Np);
function Ja(e) {
  return e || Np;
}
var ks = Ui(gk),
  mk = Ui(bk, { enhancer: Bi }),
  wk = Ui(_k, { enhancer: GO }),
  Ok = Ui(yk, { enhancer: HO }),
  zp = kt(ks);
function Xa(e) {
  return e.deep === !0 ? _r : e.deep === !1 ? Bi : Sk(e.defaultDecorator);
}
function kk(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : $p(e)) : void 0;
}
function Sk(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : _r;
}
function Bp(e, t, r) {
  if (Ia(t)) return ks.decorate_20223_(e, t);
  if (gr(t)) {
    ja(e, t, ks);
    return;
  }
  return ih(e)
    ? e
    : er(e)
      ? se.object(e, t, r)
      : Array.isArray(e)
        ? se.array(e, t)
        : tn(e)
          ? se.map(e, t)
          : Ft(e)
            ? se.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : se.box(e, t);
}
Ep(Bp, zp);
var Ek = {
    box: function (t, r) {
      var n = Ja(r);
      return new vr(t, Xa(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = Ja(r);
      return (P.useProxies === !1 || n.proxy === !1 ? kS : vS)(t, Xa(n), n.name);
    },
    map: function (t, r) {
      var n = Ja(r);
      return new sh(t, Xa(n), n.name);
    },
    set: function (t, r) {
      var n = Ja(r);
      return new uh(t, Xa(n), n.name);
    },
    object: function (t, r, n) {
      return kr(function () {
        return nS(P.useProxies === !1 || n?.proxy === !1 ? nn({}, n) : lS({}, n), t, r);
      });
    },
    ref: kt(mk),
    shallow: kt(wk),
    deep: zp,
    struct: kt(Ok),
  },
  se = Ep(Bp, Ek),
  Up = "computed",
  xk = "computed.struct",
  Ss = iu(Up),
  Ck = iu(xk, { equals: yi.structural }),
  qi = function (t, r) {
    if (Ia(r)) return Ss.decorate_20223_(t, r);
    if (gr(r)) return ja(t, r, Ss);
    if (er(t)) return kt(iu(Up, t));
    var n = er(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new dt(n));
  };
Object.assign(qi, Ss);
qi.struct = kt(Ck);
var zd,
  Bd,
  mi = 0,
  Rk = 1,
  Pk =
    (zd = (Bd = _i(function () {}, "name")) == null ? void 0 : Bd.configurable) != null ? zd : !1,
  Ud = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function yr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return Ak(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    Pk && ((Ud.value = e), Ot(a, "name", Ud)),
    a
  );
}
function Ak(e, t, r, n, a) {
  var i = jk(e, t);
  try {
    return r.apply(n, a);
  } catch (o) {
    throw ((i.error_ = o), o);
  } finally {
    Ik(i);
  }
}
function jk(e, t, r, n) {
  var a = !1,
    i = 0,
    o = P.trackingDerivation,
    u = !t || !o;
  Je();
  var s = P.allowStateChanges;
  u && (wr(), (s = Vi(!0)));
  var c = ou(!0),
    l = {
      runAsAction_: u,
      prevDerivation_: o,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: c,
      notifySpy_: a,
      startTime_: i,
      actionId_: Rk++,
      parentActionId_: mi,
    };
  return ((mi = l.actionId_), l);
}
function Ik(e) {
  (mi !== e.actionId_ && H(30),
    (mi = e.parentActionId_),
    e.error_ !== void 0 && (P.suppressReactionErrors = !0),
    Gi(e.prevAllowStateChanges_),
    va(e.prevAllowStateReads_),
    Xe(),
    e.runAsAction_ && Bt(e.prevDerivation_),
    (P.suppressReactionErrors = !1));
}
function Dk(e, t) {
  var r = Vi(e);
  try {
    return t();
  } finally {
    Gi(r);
  }
}
function Vi(e) {
  var t = P.allowStateChanges;
  return ((P.allowStateChanges = e), t);
}
function Gi(e) {
  P.allowStateChanges = e;
}
var vr = (function (e) {
    function t(n, a, i, o, u) {
      var s;
      return (
        i === void 0 && (i = "ObservableValue"),
        u === void 0 && (u = yi.default),
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
    Dp(t, e);
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
          ut(this) && ct(this, { type: St, object: this, newValue: a, oldValue: i }));
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
              type: St,
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
        return Ip(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(nr),
  dt = (function () {
    function e(r) {
      ((this.dependenciesState_ = W.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = W.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new Oi(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = wi.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || H(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = yr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? yi.structural : yi.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        $k(this);
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
          Es(this) &&
            (this.warnAboutUntrackedRead_(), Je(), (this.value_ = this.computeValue_(!1)), Xe());
        else if ((Yp(this), Es(this))) {
          var n = P.trackingContext;
          (this.keepAlive_ && !n && (P.trackingContext = this),
            this.trackAndCompute() && Fk(this),
            (P.trackingContext = n));
        }
        var a = this.value_;
        if (ii(a)) throw a.cause;
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
          o = a || ii(n) || ii(i) || !this.equals_(n, i);
        return (o && (this.value_ = i), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = Vi(!1),
          i;
        if (n) i = qp(this, this.derivation, this.scope_);
        else if (P.disableErrorBoundaries === !0) i = this.derivation.call(this.scope_);
        else
          try {
            i = this.derivation.call(this.scope_);
          } catch (o) {
            i = new Oi(o);
          }
        return (Gi(a), (this.isComputing = !1), i);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (xs(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var i = this,
          o = !0,
          u = void 0;
        return Kk(function () {
          var s = i.get();
          if (!o || a) {
            var c = wr();
            (n({
              observableKind: "computed",
              debugObjectName: i.name_,
              type: St,
              object: i,
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
        return Ip(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      rn(e, [
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
dt.isComputingMask_ = 1;
dt.isRunningSetterMask_ = 2;
dt.isBeingObservedMask_ = 4;
dt.isPendingUnobservationMask_ = 8;
dt.diffValueMask_ = 16;
var Hi = mr("ComputedValue", dt),
  W;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(W || (W = {}));
var wi;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(wi || (wi = {}));
var Oi = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function ii(e) {
  return e instanceof Oi;
}
function Es(e) {
  switch (e.dependenciesState_) {
    case W.UP_TO_DATE_:
      return !1;
    case W.NOT_TRACKING_:
    case W.STALE_:
      return !0;
    case W.POSSIBLY_STALE_: {
      for (var t = ou(!0), r = wr(), n = e.observing_, a = n.length, i = 0; i < a; i++) {
        var o = n[i];
        if (Hi(o)) {
          if (P.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Bt(r), va(t), !0);
            }
          if (e.dependenciesState_ === W.STALE_) return (Bt(r), va(t), !0);
        }
      }
      return (Gp(e), Bt(r), va(t), !1);
    }
  }
}
function qp(e, t, r) {
  var n = ou(!0);
  (Gp(e),
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
      i = new Oi(o);
    }
  return (P.inBatch--, (P.trackingDerivation = a), Tk(e), va(n), i);
}
function Tk(e) {
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
    (s.diffValue === 0 && Wp(s, e), (s.diffValue = 0));
  }
  for (; a--; ) {
    var c = r[a];
    c.diffValue === 1 && ((c.diffValue = 0), Lk(c, e));
  }
  n !== W.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function xs(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Wp(t[r], e);
  e.dependenciesState_ = W.NOT_TRACKING_;
}
function Vp(e) {
  var t = wr();
  try {
    return e();
  } finally {
    Bt(t);
  }
}
function wr() {
  var e = P.trackingDerivation;
  return ((P.trackingDerivation = null), e);
}
function Bt(e) {
  P.trackingDerivation = e;
}
function ou(e) {
  var t = P.allowStateReads;
  return ((P.allowStateReads = e), t);
}
function va(e) {
  P.allowStateReads = e;
}
function Gp(e) {
  if (e.dependenciesState_ !== W.UP_TO_DATE_) {
    e.dependenciesState_ = W.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = W.UP_TO_DATE_;
  }
}
var oi = function () {
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
  si = !0,
  Hp = !1,
  P = (function () {
    var e = Li();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (si = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new oi().version && (si = !1),
      si
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new oi()))
        : (setTimeout(function () {
            Hp || H(35);
          }, 1),
          new oi())
    );
  })();
function Mk() {
  if (((P.pendingReactions.length || P.inBatch || P.isRunningReactions) && H(36), (Hp = !0), si)) {
    var e = Li();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (P = new oi()));
  }
}
function Lk(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Wp(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Kp(e));
}
function Kp(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), P.pendingUnobservations.push(e));
}
function Je() {
  P.inBatch++;
}
function Xe() {
  if (--P.inBatch === 0) {
    Xp();
    for (var e = P.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof dt && r.suspend_()));
    }
    P.pendingUnobservations = [];
  }
}
function Yp(e) {
  var t = P.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && P.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && P.inBatch > 0 && Kp(e), !1);
}
function Jp(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === W.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = W.STALE_));
    }));
}
function Fk(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.POSSIBLY_STALE_
        ? (t.dependenciesState_ = W.STALE_)
        : t.dependenciesState_ === W.UP_TO_DATE_ && (e.lowestObserverState_ = W.UP_TO_DATE_);
    }));
}
function $k(e) {
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
      (this.isTracing_ = wi.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), P.pendingReactions.push(this), Xp());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Je(), (this.isScheduled = !1));
        var n = P.trackingContext;
        if (((P.trackingContext = this), Es(this))) {
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
        var i = qp(this, n, void 0);
        ((P.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && xs(this),
          ii(i) && this.reportExceptionInDerivation_(i.cause),
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Je(), xs(this), Xe()));
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
var Nk = 100,
  Cs = function (t) {
    return t();
  };
function Xp() {
  P.inBatch > 0 || P.isRunningReactions || Cs(zk);
}
function zk() {
  P.isRunningReactions = !0;
  for (var e = P.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Nk && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  P.isRunningReactions = !1;
}
var ki = mr("Reaction", xt);
function Bk(e) {
  var t = Cs;
  Cs = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function pa() {
  return !1;
}
function Uk(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Zp = "action",
  qk = "action.bound",
  Qp = "autoAction",
  Vk = "autoAction.bound",
  Gk = "<unnamed action>",
  Rs = Da(Zp),
  Hk = Da(qk, { bound: !0 }),
  Ps = Da(Qp, { autoAction: !0 }),
  Wk = Da(Vk, { autoAction: !0, bound: !0 });
function eh(e) {
  var t = function (n, a) {
    if (lt(n)) return yr(n.name || Gk, n, e);
    if (lt(a)) return yr(n, a, e);
    if (Ia(a)) return (e ? Ps : Rs).decorate_20223_(n, a);
    if (gr(a)) return ja(n, a, e ? Ps : Rs);
    if (gr(n)) return kt(Da(e ? Qp : Zp, { name: n, autoAction: e }));
  };
  return t;
}
var Ze = eh(!1);
Object.assign(Ze, Rs);
var Ea = eh(!0);
Object.assign(Ea, Ps);
Ze.bound = kt(Hk);
Ea.bound = kt(Wk);
function Zr(e) {
  return lt(e) && e.isMobxAction === !0;
}
function Kk(e, t) {
  var r, n, a, i;
  t === void 0 && (t = xp);
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    u = !t.scheduler && !t.delay,
    s;
  if (u)
    s = new xt(
      o,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var c = Jk(t),
      l = !1;
    s = new xt(
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
var Yk = function (t) {
  return t();
};
function Jk(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Yk;
}
var Xk = "onBO",
  Zk = "onBUO";
function Qk(e, t, r) {
  return rh(Xk, e, t, r);
}
function th(e, t, r) {
  return rh(Zk, e, t, r);
}
function rh(e, t, r, n) {
  var a = xi(t),
    i = lt(n) ? n : r,
    o = e + "L";
  return (
    a[o] ? a[o].add(i) : (a[o] = new Set([i])),
    function () {
      var u = a[o];
      u && (u.delete(i), u.size === 0 && delete a[o]);
    }
  );
}
var eS = "never",
  Za = "always",
  tS = "observed";
function rS(e) {
  e.isolateGlobalState === !0 && Mk();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (P.useProxies = t === Za ? !0 : t === eS ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (P.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Za ? Za : r === tS;
    ((P.enforceActions = n), (P.allowStateChanges = !(n === !0 || n === Za)));
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
    e.reactionScheduler && Bk(e.reactionScheduler));
}
function nS(e, t, r, n) {
  var a = FO(t);
  return (
    kr(function () {
      var i = nn(e, n)[F];
      zi(a).forEach(function (o) {
        i.extend_(o, a[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function aS(e, t) {
  return nh(xi(e, t));
}
function nh(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = iS(e.observing_).map(nh)),
    t
  );
}
function iS(e) {
  return Array.from(new Set(e));
}
var oS = 0;
function ah() {
  this.message = "FLOW_CANCELLED";
}
ah.prototype = Object.create(Error.prototype);
var Yo = Lp("flow"),
  sS = Lp("flow.bound", { bound: !0 }),
  Qr = Object.assign(function (t, r) {
    if (Ia(r)) return Yo.decorate_20223_(t, r);
    if (gr(r)) return ja(t, r, Yo);
    var n = t,
      a = n.name || "<unnamed flow>",
      i = function () {
        var u = this,
          s = arguments,
          c = ++oS,
          l = Ze(a + " - runid: " + c + " - init", n).apply(u, s),
          d,
          f = void 0,
          p = new Promise(function (h, v) {
            var g = 0;
            d = v;
            function b(O) {
              f = void 0;
              var y;
              try {
                y = Ze(a + " - runid: " + c + " - yield " + g++, l.next).call(l, O);
              } catch (S) {
                return v(S);
              }
              w(y);
            }
            function m(O) {
              f = void 0;
              var y;
              try {
                y = Ze(a + " - runid: " + c + " - yield " + g++, l.throw).call(l, O);
              } catch (S) {
                return v(S);
              }
              w(y);
            }
            function w(O) {
              if (lt(O?.then)) {
                O.then(w, v);
                return;
              }
              return O.done ? h(O.value) : ((f = Promise.resolve(O.value)), f.then(b, m));
            }
            b(void 0);
          });
        return (
          (p.cancel = Ze(a + " - runid: " + c + " - cancel", function () {
            try {
              f && qd(f);
              var h = l.return(void 0),
                v = Promise.resolve(h.value);
              (v.then(Ur, Ur), qd(v), d(new ah()));
            } catch (g) {
              d(g);
            }
          })),
          p
        );
      };
    return ((i.isMobXFlow = !0), i);
  }, Yo);
Qr.bound = kt(sS);
function qd(e) {
  lt(e.cancel) && e.cancel();
}
function xa(e) {
  return e?.isMobXFlow === !0;
}
function uS(e, t) {
  return e ? Ki(e) || !!e[F] || au(e) || ki(e) || Hi(e) : !1;
}
function ih(e) {
  return uS(e);
}
function $t(e, t) {
  (t === void 0 && (t = void 0), Je());
  try {
    return e.apply(t);
  } finally {
    Xe();
  }
}
function Br(e) {
  return e[F];
}
var cS = {
  has: function (t, r) {
    return Br(t).has_(r);
  },
  get: function (t, r) {
    return Br(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return gr(r) ? ((a = Br(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return gr(r) ? ((n = Br(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = Br(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return Br(t).ownKeys_();
  },
  preventExtensions: function (t) {
    H(13);
  },
};
function lS(e, t) {
  var r, n;
  return (
    Cp(),
    (e = nn(e, t)),
    (n = (r = e[F]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, cS))
  );
}
function Ke(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Ta(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    Rp(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Ye(e, t) {
  var r = wr();
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
function ut(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Ma(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    Rp(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function ct(e, t) {
  var r = wr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, i = n.length; a < i; a++) n[a](t);
    Bt(r);
  }
}
function su(e, t, r) {
  return (
    kr(function () {
      var n,
        a = nn(e, r)[F];
      ((n = t) != null || (t = UO(e)),
        zi(t).forEach(function (i) {
          return a.make_(i, t[i]);
        }));
    }),
    e
  );
}
var Vd = "splice",
  St = "update",
  dS = 1e4,
  fS = {
    get: function (t, r) {
      var n = t[F];
      return r === F
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : zt(Si, r)
              ? Si[r]
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
  uu = (function () {
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
          this.legacyMode_ && a > 0 && fh(n + a + 1));
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
          i === void 0 && (i = ws),
          Ke(this))
        ) {
          var s = Ye(this, { object: this.proxy_, type: Vd, index: n, removedCount: a, added: i });
          if (!s) return ws;
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
        if (i.length < dS) {
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
        var o = !this.owned_ && pa(),
          u = ut(this),
          s =
            u || o
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
        (this.atom_.reportChanged(), u && ct(this, s));
      }),
      (t.notifyArraySplice_ = function (n, a, i) {
        var o = !this.owned_ && pa(),
          u = ut(this),
          s =
            u || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Vd,
                  index: n,
                  removed: i,
                  added: a,
                  removedCount: i.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), u && ct(this, s));
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
            var u = Ye(this, { type: St, object: this.proxy_, index: n, newValue: a });
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
function vS(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    Cp(),
    kr(function () {
      var a = new uu(r, t, n, !1);
      Ap(a.values_, F, a);
      var i = new Proxy(a.values_, fS);
      return ((a.proxy_ = i), e && e.length && a.spliceWithArray_(0, 0, e), i);
    })
  );
}
var Si = {
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
    return (P.trackingDerivation && H(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    P.trackingDerivation && H(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[F],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
ie("at", Be);
ie("concat", Be);
ie("flat", Be);
ie("includes", Be);
ie("indexOf", Be);
ie("join", Be);
ie("lastIndexOf", Be);
ie("slice", Be);
ie("toString", Be);
ie("toLocaleString", Be);
ie("toSorted", Be);
ie("toSpliced", Be);
ie("with", Be);
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
ie("reduce", oh);
ie("reduceRight", oh);
function ie(e, t) {
  typeof Array.prototype[e] == "function" && (Si[e] = t(e));
}
function Be(e) {
  return function () {
    var t = this[F];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function vt(e) {
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
function oh(e) {
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
var pS = mr("ObservableArrayAdministration", uu);
function Wi(e) {
  return $i(e) && pS(e[F]);
}
var hS = {},
  Xt = "add",
  Ei = "delete",
  sh = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = _r),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[F] = hS),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        lt(Map) || H(18),
        kr(function () {
          ((i.keysAtom_ = Tp("ObservableMap.keys()")),
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
          var o = (i = new vr(this.has_(n), Bi, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            th(o, function () {
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
          var i = Ye(this, { type: Ei, object: this, name: n });
          if (!i) return !1;
        }
        if (this.has_(n)) {
          var o = pa(),
            u = ut(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Ei,
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
            u && ct(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var i = this.data_.get(n);
        if (((a = i.prepareNewValue_(a)), a !== P.UNCHANGED)) {
          var o = pa(),
            u = ut(this),
            s =
              u || o
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
          (i.setNewValue_(a), u && ct(this, s));
        }
      }),
      (t.addValue_ = function (n, a) {
        var i = this;
        (this.keysAtom_,
          $t(function () {
            var c,
              l = new vr(a, i.enhancer_, "ObservableMap.key", !1);
            (i.data_.set(n, l),
              (a = l.value_),
              (c = i.hasMap_.get(n)) == null || c.setNewValue_(!0),
              i.keysAtom_.reportChanged());
          }));
        var o = pa(),
          u = ut(this),
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
        u && ct(this, s);
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
        return Gd({
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
        return Gd({
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
        for (var i = qr(this), o; !(o = i()).done; ) {
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
          $t(function () {
            er(n)
              ? LO(n).forEach(function (i) {
                  return a.set(i, n[i]);
                })
              : Array.isArray(n)
                ? n.forEach(function (i) {
                    var o = i[0],
                      u = i[1];
                    return a.set(o, u);
                  })
                : tn(n)
                  ? (MO(n) || H(19, n),
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
          Vp(function () {
            for (var a = qr(n.keys()), i; !(i = a()).done; ) {
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
              var i = gS(n), o = new Map(), u = !1, s = qr(a.data_.keys()), c;
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
            for (var p = qr(i.entries()), h; !(h = p()).done; ) {
              var v = h.value,
                g = v[0],
                b = v[1],
                m = a.data_.has(g);
              if ((a.set(g, b), a.data_.has(g))) {
                var w = a.data_.get(g);
                (o.set(g, w), m || (u = !0));
              }
            }
            if (!u)
              if (a.data_.size !== o.size) a.keysAtom_.reportChanged();
              else
                for (var O = a.data_.keys(), y = o.keys(), S = O.next(), x = y.next(); !S.done; ) {
                  if (S.value !== x.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = O.next()), (x = y.next()));
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
  Or = mr("ObservableMap", sh);
function Gd(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), lu(e));
}
function gS(e) {
  if (tn(e) || Or(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (er(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return H(21, e);
}
var bS = {},
  uh = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = _r),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[F] = bS),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        lt(Set) || H(22),
        (this.enhancer_ = function (o, u) {
          return n(o, u, a);
        }),
        kr(function () {
          ((i.atom_ = Tp(i.name_)), r && i.replace(r));
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
          Vp(function () {
            for (var a = qr(n.data_.values()), i; !(i = a()).done; ) {
              var o = i.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var i = qr(this), o; !(o = i()).done; ) {
          var u = o.value;
          n.call(a, u, u, this);
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
            u = ut(this),
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
          u && ct(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (Ke(this)) {
          var i = Ye(this, { type: Ei, object: this, oldValue: n });
          if (!i) return !1;
        }
        if (this.has(n)) {
          var o = !1,
            u = ut(this),
            s =
              u || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Ei,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            $t(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            u && ct(this, s),
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
        return Hd({
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
        return Hd({
          next: function () {
            var o = a.next(),
              u = o.value,
              s = o.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(u), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Ft(n) && !_t(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Ft(n) && !_t(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Ft(n) && !_t(n)) return n.symmetricDifference(this);
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
        if (Ft(n) && !_t(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          _t(n) && (n = new Set(n)),
          $t(function () {
            Array.isArray(n)
              ? (a.clear(),
                n.forEach(function (i) {
                  return a.add(i);
                }))
              : Ft(n)
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
  _t = mr("ObservableSet", uh);
function Hd(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), lu(e));
}
var Wd = Object.create(null),
  Kd = "remove",
  ch = (function () {
    function e(r, n, a, i) {
      (n === void 0 && (n = new Map()),
        i === void 0 && (i = fk),
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
        (this.isPlainObject_ = er(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, a) {
        var i = this.values_.get(n);
        if (i instanceof dt) return (i.set(a), !0);
        if (Ke(this)) {
          var o = Ye(this, { type: St, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!o) return null;
          a = o.newValue;
        }
        if (((a = i.prepareNewValue_(a)), a !== P.UNCHANGED)) {
          var u = ut(this),
            s = !1,
            c =
              u || s
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
          (i.setNewValue_(a), u && ct(this, c));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (P.trackingDerivation && !zt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, a, i) {
        return (
          i === void 0 && (i = !1),
          zt(this.target_, n)
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
            ((a = new vr(n in this.target_, Bi, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var i;
            if ((i = this.target_[yt]) != null && i[n]) return;
            H(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== Fi; ) {
            var u = _i(o, n);
            if (u) {
              var s = a.make_(this, n, u, o);
              if (s === 0) return;
              if (s === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          Jd(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, i, o) {
        if ((o === void 0 && (o = !1), i === !0 && (i = this.defaultAnnotation_), i === !1))
          return this.defineProperty_(n, a, o);
        var u = i.extend_(this, n, a, o);
        return (u && Jd(this, i, n), u);
      }),
      (t.defineProperty_ = function (n, a, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          Je();
          var o = this.delete_(n);
          if (!o) return o;
          if (Ke(this)) {
            var u = Ye(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Xt,
              newValue: a.value,
            });
            if (!u) return null;
            var s = u.newValue;
            a.value !== s && (a = br({}, a, { value: s }));
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
          var u = this.delete_(n);
          if (!u) return u;
          if (Ke(this)) {
            var s = Ye(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Xt,
              newValue: a,
            });
            if (!s) return null;
            a = s.newValue;
          }
          var c = Yd(n),
            l = {
              configurable: P.safeDescriptors ? this.isPlainObject_ : !0,
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
            var u = Ye(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Xt,
              newValue: void 0,
            });
            if (!u) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var s = Yd(n),
            c = {
              configurable: P.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, c)) return !1;
          } else Ot(this.target_, n, c);
          (this.values_.set(n, new dt(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !zt(this.target_, n))) return !0;
        if (Ke(this)) {
          var i = Ye(this, { object: this.proxy_ || this.target_, name: n, type: Kd });
          if (!i) return null;
        }
        try {
          var o;
          Je();
          var u = ut(this),
            s = !1,
            c = this.values_.get(n),
            l = void 0;
          if (!c && (u || s)) {
            var d;
            l = (d = _i(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c && (this.values_.delete(n), c instanceof vr && (l = c.value_), Jp(c)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            u || s)
          ) {
            var f = {
              type: Kd,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            u && ct(this, f);
          }
        } finally {
          Xe();
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
          o = ut(this),
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
          o && ct(this, s);
        }
        ((i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), zi(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function nn(e, t) {
  var r;
  if (zt(e, F)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new ch(e, new Map(), String(n), kk(t));
  return (Ni(e, F, a), e);
}
var _S = mr("ObservableObjectAdministration", ch);
function Yd(e) {
  return (
    Wd[e] ||
    (Wd[e] = {
      get: function () {
        return this[F].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[F].setObservablePropValue_(e, r);
      },
    })
  );
}
function Ki(e) {
  return $i(e) ? _S(e[F]) : !1;
}
function Jd(e, t, r) {
  var n;
  (n = e.target_[yt]) == null || delete n[r];
}
var yS = dh(0),
  mS = (function () {
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
  Jo = 0,
  lh = function () {};
function wS(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
wS(lh, Array.prototype);
var cu = (function (e) {
  function t(n, a, i, o) {
    var u;
    return (
      i === void 0 && (i = "ObservableArray"),
      o === void 0 && (o = !1),
      (u = e.call(this) || this),
      kr(function () {
        var s = new uu(i, a, o, !0);
        ((s.proxy_ = u),
          Ap(u, F, s),
          n && n.length && u.spliceWithArray(0, 0, n),
          mS && Object.defineProperty(u, "0", yS));
      }),
      u
    );
  }
  Dp(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[F].atom_.reportObserved();
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        i.map(function (u) {
          return Wi(u) ? u.slice() : u;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return lu({
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
})(lh);
Object.entries(Si).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Ni(cu.prototype, t, r);
});
function dh(e) {
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
function OS(e) {
  Ot(cu.prototype, "" + e, dh(e));
}
function fh(e) {
  if (e > Jo) {
    for (var t = Jo; t < e + 100; t++) OS(t);
    Jo = e;
  }
}
fh(1e3);
function kS(e, t, r) {
  return new cu(e, t, r);
}
function xi(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Wi(e)) return (t !== void 0 && H(23), e[F].atom_);
    if (_t(e)) return e.atom_;
    if (Or(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || H(25, t, As(e)), r);
    }
    if (Ki(e)) {
      if (!t) return H(26);
      var n = e[F].values_.get(t);
      return (n || H(27, t, As(e)), n);
    }
    if (au(e) || Hi(e) || ki(e)) return e;
  } else if (lt(e) && ki(e[F])) return e[F];
  H(28);
}
function SS(e, t) {
  if ((e || H(29), au(e) || Hi(e) || ki(e) || Or(e) || _t(e))) return e;
  if (e[F]) return e[F];
  H(24, e);
}
function As(e, t) {
  var r;
  if (t !== void 0) r = xi(e, t);
  else {
    if (Zr(e)) return e.name;
    Ki(e) || Or(e) || _t(e) ? (r = SS(e)) : (r = xi(e));
  }
  return r.name_;
}
function kr(e) {
  var t = wr(),
    r = Vi(!0);
  Je();
  try {
    return e();
  } finally {
    (Xe(), Gi(r), Bt(t));
  }
}
var Xd = Fi.toString;
function vh(e, t, r) {
  return (r === void 0 && (r = -1), js(e, t, r));
}
function js(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object") return !1;
  var o = Xd.call(e);
  if (o !== Xd.call(t)) return !1;
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
  ((e = Zd(e)), (t = Zd(t)));
  var u = o === "[object Array]";
  if (!u) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      c = t.constructor;
    if (
      s !== c &&
      !(lt(s) && s instanceof s && lt(c) && c instanceof c) &&
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
    for (; l--; ) if (!js(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var p = 0; p < f; p++) {
      var h = d[p];
      if (!(zt(t, h) && js(e[h], t[h], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function Zd(e) {
  return Wi(e) ? e.slice() : tn(e) || Or(e) || Ft(e) || _t(e) ? Array.from(e.entries()) : e;
}
var Qd,
  ES = ((Qd = Li().Iterator) == null ? void 0 : Qd.prototype) || {};
function lu(e) {
  return ((e[Symbol.iterator] = xS), Object.assign(Object.create(ES), e));
}
function xS() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Li();
  typeof t[e] > "u" && H("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: Uk, extras: { getDebugName: As }, $mobx: F });
if (!_.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!su) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function CS(e) {
  e();
}
function RS(e) {
  (e || (e = CS), rS({ reactionScheduler: e }));
}
function PS(e) {
  return aS(e);
}
var AS = 1e4,
  jS = 1e4,
  IS = (function () {
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
            (n === void 0 && (n = AS), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, jS));
        },
      }),
      e
    );
  })(),
  DS = typeof FinalizationRegistry < "u" ? FinalizationRegistry : IS,
  Ca = new DS(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  Xo = { exports: {} },
  Zo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ef;
function TS() {
  if (ef) return Zo;
  ef = 1;
  var e = ft();
  function t(d, f) {
    return (d === f && (d !== 0 || 1 / d === 1 / f)) || (d !== d && f !== f);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    a = e.useEffect,
    i = e.useLayoutEffect,
    o = e.useDebugValue;
  function u(d, f) {
    var p = f(),
      h = n({ inst: { value: p, getSnapshot: f } }),
      v = h[0].inst,
      g = h[1];
    return (
      i(
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
      o(p),
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
    (Zo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    Zo
  );
}
var tf;
function MS() {
  return (tf || ((tf = 1), (Xo.exports = TS())), Xo.exports);
}
var LS = MS();
function rf(e) {
  e.reaction = new xt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function FS(e, t) {
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
          Ca.unregister(n),
          (n.onStoreChange = u),
          n.reaction || (rf(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (rf(a), Ca.register(r, a, a)),
    k.useDebugValue(a.reaction, PS),
    LS.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
var Qo,
  es,
  ph = typeof Symbol == "function" && Symbol.for,
  $S =
    (es =
      (Qo = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Qo === void 0
        ? void 0
        : Qo.configurable) !== null && es !== void 0
      ? es
      : !1,
  nf = ph
    ? Symbol.for("react.forward_ref")
    : typeof _.forwardRef == "function" &&
      _.forwardRef(function (e) {
        return null;
      }).$$typeof,
  af = ph
    ? Symbol.for("react.memo")
    : typeof _.memo == "function" &&
      _.memo(function (e) {
        return null;
      }).$$typeof;
function NS(e, t) {
  var r;
  if (af && e.$$typeof === af)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    i = e.displayName || e.name;
  if (nf && e.$$typeof === nf && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (u, s) {
    return FS(function () {
      return a(u, s);
    }, i);
  };
  return (
    (o.displayName = e.displayName),
    $S && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = _.forwardRef(o)),
    (o = _.memo(o)),
    BS(e, o),
    o
  );
}
var zS = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function BS(e, t) {
  Object.keys(e).forEach(function (r) {
    zS[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var ts;
RS(Ci.unstable_batchedUpdates);
ts = Ca.finalizeAllImmediately;
function US(e, t) {
  if (of(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !of(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function of(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var sf = Symbol("patchMixins"),
  hh = Symbol("patchedDefinition");
function qS(e, t) {
  var r = (e[sf] = e[sf] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function uf(e, t) {
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
function cf(e, t) {
  var r = function () {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
    uf.call.apply(uf, [this, e, t].concat(i));
  };
  return r;
}
function VS(e, t, r) {
  var n = qS(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[hh])) {
    var i = e[t],
      o = gh(e, t, a ? a.enumerable : void 0, n, i);
    Object.defineProperty(e, t, o);
  }
}
function gh(e, t, r, n, a) {
  var i,
    o = cf(a, n);
  return (
    (i = {}),
    (i[hh] = !0),
    (i.get = function () {
      return o;
    }),
    (i.set = function (s) {
      if (this === e) o = cf(s, n);
      else {
        var c = gh(this, t, r, n, s);
        Object.defineProperty(this, t, c);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = r),
    i
  );
}
var lf = Symbol("ObserverAdministration"),
  df = Symbol("isMobXReactObserver");
function Is(e) {
  var t;
  return (t = e[lf]) != null
    ? t
    : (e[lf] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: Ds(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function GS(e) {
  var t = e.prototype;
  if (e[df]) {
    var r = Ds(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[df] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== _.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = ff;
    else if (t.shouldComponentUpdate !== ff)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = Ds(e);
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
        value: HS.call(this, n),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        u = Is(this);
      return (
        (u.mounted = !0),
        Ca.unregister(this),
        (u.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!u.reaction || u.reactionInvalidatedBeforeMount) && u.forceUpdate(),
        i?.apply(this, arguments)
      );
    }),
    VS(t, "componentWillUnmount", function () {
      var o,
        u = Is(this);
      ((o = u.reaction) == null || o.dispose(),
        (u.reaction = null),
        (u.forceUpdate = null),
        (u.mounted = !1),
        (u.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function Ds(e) {
  return e.displayName || e.name || "<component>";
}
function HS(e) {
  var t = e.bind(this),
    r = Is(this);
  function n() {
    r.reaction || ((r.reaction = WS(r)), r.mounted || Ca.register(this, r, this));
    var a = void 0,
      i = void 0;
    if (
      (r.reaction.track(function () {
        try {
          i = Dk(!1, t);
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
function WS(e) {
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
function ff(e, t) {
  return this.state !== t ? !0 : !US(this.props, e);
}
function Yi(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(_.Component, e) ||
    Object.prototype.isPrototypeOf.call(_.PureComponent, e)
      ? GS(e)
      : NS(e)
  );
}
function Ts() {
  return (
    (Ts = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ts.apply(null, arguments)
  );
}
function KS(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var YS = ["children"],
  vf = k.createContext({});
function bh(e) {
  var t = e.children,
    r = KS(e, YS),
    n = k.useContext(vf),
    a = k.useRef(Ts({}, n, r)),
    i = a.current;
  return k.createElement(vf.Provider, { value: i }, t);
}
bh.displayName = "MobXProvider";
k.version.split(".")[0];
if (!_.Component) throw new Error("mobx-react requires React to be available");
if (!se) throw new Error("mobx-react requires mobx to be available");
var JS = Object.defineProperty,
  XS = Object.getOwnPropertyDescriptor,
  qt = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? XS(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && JS(t, r, a), a);
  };
class Pt {
  constructor() {
    ((this.isLoading = !0), su(this));
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
qt([se], Pt.prototype, "isLoading", 2);
qt([se], Pt.prototype, "users", 2);
qt([se], Pt.prototype, "duplicates", 2);
qt([se], Pt.prototype, "sort", 2);
qt([Ze.bound], Pt.prototype, "saveUsers", 1);
qt([Ze.bound], Pt.prototype, "saveSort", 1);
qt([Ze.bound], Pt.prototype, "saveDuplicates", 1);
qt([Ze], Pt.prototype, "loading", 1);
qt([Ze], Pt.prototype, "stopLoading", 1);
const ZS = new Pt();
var QS = Object.defineProperty,
  eE = Object.getOwnPropertyDescriptor,
  _h = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? eE(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && QS(t, r, a), a);
  };
class du {
  constructor() {
    ((this.state = "ROOT"), su(this));
  }
  saveState(t) {
    this.state = t;
  }
}
_h([se], du.prototype, "state", 2);
_h([Ze.bound], du.prototype, "saveState", 1);
const tE = new du();
class rE {
  constructor() {
    ((this.usersStore = ZS), (this.stateStore = tE));
  }
}
const yh = new rE(),
  nE = _.createContext(yh),
  Ji = () => _.useContext(nE),
  aE = Yi(() => {
    const { usersStore: e, stateStore: t } = Ji(),
      r = Sp(!0, !0, "USER"),
      n = e.users;
    return !n || n.length === 0
      ? M.jsx("div", { children: "User Table is EMPTY" })
      : M.jsx("div", {
          children: M.jsxs("div", {
            children: [
              M.jsx(nu, {
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
                              const u = await Nt.invoke("fetch", { sortType: e.sort });
                              e.saveUsers(u);
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
  iE = Yi(() => {
    const { usersStore: e, stateStore: t } = Ji(),
      [r, n] = _.useState({}),
      a = (o) => {
        const { name: u, value: s, type: c } = o.target;
        n((l) => ({ ...l, [u]: c === "number" ? Number(s) : s }));
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
  oE = Yi(() => {
    const { usersStore: e } = Ji(),
      t = Sp(!0, !1, "DUPLICATE"),
      r = e.duplicates;
    return !r || r.length === 0
      ? M.jsx("div", { children: "Duplicate Table is EMPTY" })
      : M.jsx("div", {
          children: M.jsxs("div", {
            children: [
              M.jsx(nu, {
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
function sE() {
  const { usersStore: e, stateStore: t } = Ji();
  if (
    (_.useEffect(() => {
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
            M.jsx(aE, {}),
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
            M.jsx(oE, {}),
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
            M.jsx(iE, {}),
          ],
        }),
      });
    default:
      return M.jsxs("div", { children: ["ERROR: unsupprted state $", t.state] });
  }
}
const uE = Yi(sE),
  cE = document.getElementById("root"),
  lE = Sh.createRoot(cE),
  pf = () => {
    lE.render(M.jsx(bh, { ...yh, children: M.jsx(uE, {}) }));
  };
Nt.view.theme
  .enable()
  .then(() => {
    pf();
  })
  .catch((e) => {
    (console.error(e.message), pf());
  });
export {
  k as R,
  fb as T,
  ze as _,
  ve as a,
  us as b,
  fe as c,
  Ne as d,
  Y as e,
  K as f,
  E as g,
  ae as h,
  ji as i,
  De as j,
  te as k,
  xy as l,
  Lt as m,
  Rt as n,
  C as o,
  lb as p,
  Pg as q,
  _ as r,
  sb as s,
  Y0 as w,
};
