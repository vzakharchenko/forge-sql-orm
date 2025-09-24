const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-Bl-ie6rp.js",
      "./react-dom-vendor-DTSHKYJW.js",
      "./client-core-vendor-Bz5kMKC-.js",
      "./lodash-vendor-Ce0R6Syi.js",
      "./body-zWXS9WXn.css",
    ]),
) => i.map((i) => d[i]);
import { r as wt, a as To, c as Vh } from "./react-dom-vendor-DTSHKYJW.js";
import { g as ur, a as Us, r as cr, s as nt } from "./client-core-vendor-Bz5kMKC-.js";
import { r as Gh } from "./lodash-vendor-Ce0R6Syi.js";
function Hh(e, t) {
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
var si = { exports: {} },
  gn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sc;
function Wh() {
  if (Sc) return gn;
  Sc = 1;
  var e = wt(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, c, l) {
    var u,
      d = {},
      f = null,
      p = null;
    (l !== void 0 && (f = "" + l),
      c.key !== void 0 && (f = "" + c.key),
      c.ref !== void 0 && (p = c.ref));
    for (u in c) n.call(c, u) && !o.hasOwnProperty(u) && (d[u] = c[u]);
    if (s && s.defaultProps) for (u in ((c = s.defaultProps), c)) d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: s, key: f, ref: p, props: d, _owner: a.current };
  }
  return ((gn.Fragment = r), (gn.jsx = i), (gn.jsxs = i), gn);
}
var xc;
function Kh() {
  return (xc || ((xc = 1), (si.exports = Wh())), si.exports);
}
var x = Kh(),
  b = wt();
const O = ur(b),
  Ec = Hh({ __proto__: null, default: O }, [b]);
var ci = {},
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
var po = function () {
  return (
    (po =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    po.apply(this, arguments)
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
function xf(e, t, r, n) {
  var a = arguments.length,
    o = a < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, r, n);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, r, o) : i(t, r)) || o);
  return (a > 3 && o && Object.defineProperty(t, r, o), o);
}
function Ef(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function Cf(e, t, r, n, a, o) {
  function i(m) {
    if (m !== void 0 && typeof m != "function") throw new TypeError("Function expected");
    return m;
  }
  for (
    var s = n.kind,
      c = s === "getter" ? "get" : s === "setter" ? "set" : "value",
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
    h.addInitializer = function (m) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(i(m || null));
    };
    var g = (0, r[p])(s === "accessor" ? { get: u.get, set: u.set } : u[c], h);
    if (s === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = i(g.get)) && (u.get = d),
        (d = i(g.set)) && (u.set = d),
        (d = i(g.init)) && a.unshift(d));
    } else (d = i(g)) && (s === "field" ? a.unshift(d) : (u[c] = d));
  }
  (l && Object.defineProperty(l, n.name, u), (f = !0));
}
function Pf(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function Rf(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Af(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function If(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function jf(e, t, r, n) {
  function a(o) {
    return o instanceof r
      ? o
      : new r(function (i) {
          i(o);
        });
  }
  return new (r || (r = Promise))(function (o, i) {
    function s(u) {
      try {
        l(n.next(u));
      } catch (d) {
        i(d);
      }
    }
    function c(u) {
      try {
        l(n.throw(u));
      } catch (d) {
        i(d);
      }
    }
    function l(u) {
      u.done ? o(u.value) : a(u.value).then(s, c);
    }
    l((n = n.apply(e, t || [])).next());
  });
}
function Df(e, t) {
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
    (i.next = s(0)),
    (i.throw = s(1)),
    (i.return = s(2)),
    typeof Symbol == "function" &&
      (i[Symbol.iterator] = function () {
        return this;
      }),
    i
  );
  function s(l) {
    return function (u) {
      return c([l, u]);
    };
  }
  function c(l) {
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
var Mo = Object.create
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
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Mo(t, e, r);
}
function ho(e) {
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
function Vs(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e),
    a,
    o = [],
    i;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) o.push(a.value);
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (i) throw i.error;
    }
  }
  return o;
}
function Mf() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Vs(arguments[t]));
  return e;
}
function Nf() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++) n[a] = o[i];
  return n;
}
function Lf(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function en(e) {
  return this instanceof en ? ((this.v = e), this) : new en(e);
}
function $f(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []),
    a,
    o = [];
  return (
    (a = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    s("next"),
    s("throw"),
    s("return", i),
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
  function s(p, h) {
    n[p] &&
      ((a[p] = function (v) {
        return new Promise(function (g, m) {
          o.push([p, v, g, m]) > 1 || c(p, v);
        });
      }),
      h && (a[p] = h(a[p])));
  }
  function c(p, h) {
    try {
      l(n[p](h));
    } catch (v) {
      f(o[0][3], v);
    }
  }
  function l(p) {
    p.value instanceof en ? Promise.resolve(p.value.v).then(u, d) : f(o[0][2], p);
  }
  function u(p) {
    c("next", p);
  }
  function d(p) {
    c("throw", p);
  }
  function f(p, h) {
    (p(h), o.shift(), o.length && c(o[0][0], o[0][1]));
  }
}
function Bf(e) {
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
          return (r = !r) ? { value: en(e[a](i)), done: !1 } : o ? o(i) : i;
        }
      : o;
  }
}
function Ff(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof ho == "function" ? ho(e) : e[Symbol.iterator]()),
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
        return new Promise(function (s, c) {
          ((i = e[o](i)), a(s, c, i.done, i.value));
        });
      };
  }
  function a(o, i, s, c) {
    Promise.resolve(c).then(function (l) {
      o({ value: l, done: s });
    }, i);
  }
}
function zf(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var Yh = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  cs = function (e) {
    return (
      (cs =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      cs(e)
    );
  };
function qf(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = cs(e), n = 0; n < r.length; n++) r[n] !== "default" && Mo(t, e, r[n]);
  return (Yh(t, e), t);
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
        } catch (o) {
          return Promise.reject(o);
        }
      }),
      e.stack.push({ value: t, dispose: n, async: r }));
  } else r && e.stack.push({ async: !0 });
  return t;
}
var Jh =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Kf(e) {
  function t(o) {
    ((e.error = e.hasError ? new Jh(o, e.error, "An error was suppressed during disposal.") : o),
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
function Yf(e, t) {
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
const Xh = {
    __extends: Of,
    __assign: po,
    __rest: Sf,
    __decorate: xf,
    __param: Ef,
    __esDecorate: Cf,
    __runInitializers: Pf,
    __propKey: Rf,
    __setFunctionName: Af,
    __metadata: If,
    __awaiter: jf,
    __generator: Df,
    __createBinding: Mo,
    __exportStar: Tf,
    __values: ho,
    __read: Vs,
    __spread: Mf,
    __spreadArrays: Nf,
    __spreadArray: Lf,
    __await: en,
    __asyncGenerator: $f,
    __asyncDelegator: Bf,
    __asyncValues: Ff,
    __makeTemplateObject: zf,
    __importStar: qf,
    __importDefault: Uf,
    __classPrivateFieldGet: Vf,
    __classPrivateFieldSet: Gf,
    __classPrivateFieldIn: Hf,
    __addDisposableResource: Wf,
    __disposeResources: Kf,
    __rewriteRelativeImportExtension: Yf,
  },
  Zh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Wf,
        get __assign() {
          return po;
        },
        __asyncDelegator: Bf,
        __asyncGenerator: $f,
        __asyncValues: Ff,
        __await: en,
        __awaiter: jf,
        __classPrivateFieldGet: Vf,
        __classPrivateFieldIn: Hf,
        __classPrivateFieldSet: Gf,
        __createBinding: Mo,
        __decorate: xf,
        __disposeResources: Kf,
        __esDecorate: Cf,
        __exportStar: Tf,
        __extends: Of,
        __generator: Df,
        __importDefault: Uf,
        __importStar: qf,
        __makeTemplateObject: zf,
        __metadata: If,
        __param: Ef,
        __propKey: Rf,
        __read: Vs,
        __rest: Sf,
        __rewriteRelativeImportExtension: Yf,
        __runInitializers: Pf,
        __setFunctionName: Af,
        __spread: Mf,
        __spreadArray: Lf,
        __spreadArrays: Nf,
        __values: ho,
        default: Xh,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  rr = Us(Zh);
var bn = {},
  Cc;
function Qh() {
  return (
    Cc ||
      ((Cc = 1),
      Object.defineProperty(bn, "__esModule", { value: !0 }),
      (bn.NavigationTarget = void 0),
      (bn.NavigationTarget = {
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
    bn
  );
}
var li = {},
  ui = {},
  mn = {},
  yn = {},
  Pc;
function kt() {
  if (Pc) return yn;
  ((Pc = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((yn.BridgeAPIError = e), yn);
}
var Rc;
function Ie() {
  if (Rc) return mn;
  ((Rc = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.getCallBridge = void 0));
  const e = kt();
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
  return ((mn.getCallBridge = r), mn);
}
var _n = {},
  Ac;
function Jf() {
  if (Ac) return _n;
  ((Ac = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.withRateLimiter = void 0));
  const e = kt(),
    t = (r, n, a, o) => {
      let i = Date.now(),
        s = 0;
      return async (...c) => {
        const l = Date.now();
        if ((l - i > a && ((i = l), (s = 0)), s >= n))
          throw new e.BridgeAPIError(o || "Too many invocations.");
        return ((s = s + 1), r(...c));
      };
    };
  return ((_n.withRateLimiter = t), _n);
}
var Ic;
function eg() {
  return (
    Ic ||
      ((Ic = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = Ie(),
          r = kt(),
          n = Jf(),
          a = (0, t.getCallBridge)(),
          o = (c) => {
            if (c && Object.values(c).some((l) => typeof l == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          i = (c, l) => {
            if (typeof c != "string") throw new r.BridgeAPIError("functionKey must be a string!");
            return (o(l), a("invoke", { functionKey: c, payload: l }));
          };
        e.invoke = (0, n.withRateLimiter)(
          i,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function s() {
          return e.invoke;
        }
        e.makeInvoke = s;
      })(ui)),
    ui
  );
}
var jc;
function tg() {
  return (
    jc ||
      ((jc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rr.__exportStar(eg(), e));
      })(li)),
    li
  );
}
var di = {},
  wn = {},
  fi = {},
  Dc;
function Xf() {
  return (
    Dc ||
      ((Dc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = Ie(),
          r = kt(),
          n = Jf(),
          a = 500,
          o = 25,
          i = 1e3 * o;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const s = (0, t.getCallBridge)(),
          c = (d) => {
            if (d && Object.values(d).some((f) => typeof f == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          l = (d) => async (f) => {
            c(f);
            const p = { ...f, invokeType: `ui-${d.toLowerCase()}-fetch` },
              h = await s("invoke", p),
              { success: v, payload: g, error: m } = h ?? {},
              _ = { ...(v ? g : m) };
            if (_ && _.headers)
              for (const w in _.headers)
                Array.isArray(_.headers[w]) && (_.headers[w] = _.headers[w].join(","));
            return _;
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
      })(fi)),
    fi
  );
}
var Tc;
function rg() {
  if (Tc) return wn;
  ((Tc = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.invokeRemote = void 0));
  const e = Xf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((wn.invokeRemote = t), wn);
}
var kn = {},
  Mc;
function ng() {
  if (Mc) return kn;
  ((Mc = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.invokeService = void 0));
  const e = Xf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((kn.invokeService = t), kn);
}
var Nc;
function ag() {
  return (
    Nc ||
      ((Nc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = rr;
        (t.__exportStar(rg(), e), t.__exportStar(ng(), e));
      })(di)),
    di
  );
}
var vi = {},
  On = {},
  Sn = {},
  Lc;
function og() {
  if (Lc) return Sn;
  ((Lc = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.submit = void 0));
  const e = Ie(),
    t = kt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((Sn.submit = n), Sn);
}
var xn = {},
  $c;
function ig() {
  if ($c) return xn;
  (($c = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.close = void 0));
  const e = Ie(),
    t = kt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        if ((await r("close", a)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((xn.close = n), xn);
}
var En = {},
  Bc;
function sg() {
  if (Bc) return En;
  ((Bc = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.open = void 0));
  const e = Ie(),
    t = kt(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      try {
        if ((await r("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((En.open = n), En);
}
var Cn = {},
  Fc;
function cg() {
  if (Fc) return Cn;
  ((Fc = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.refresh = void 0));
  const e = Ie(),
    t = kt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((Cn.refresh = n), Cn);
}
var Pn = {},
  zc;
function lg() {
  if (zc) return Pn;
  ((zc = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.createHistory = void 0));
  const t = (0, Ie().getCallBridge)(),
    r = async () => {
      const n = await t("createHistory");
      return (
        n.listen((a) => {
          n.location = a;
        }),
        n
      );
    };
  return ((Pn.createHistory = r), Pn);
}
var Rn = {},
  pi = {},
  Ut = {},
  qc;
function Zf() {
  return (
    qc ||
      ((qc = 1),
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
var vr = {},
  Uc;
function ug() {
  if (Uc) return vr;
  ((Uc = 1),
    Object.defineProperty(vr, "__esModule", { value: !0 }),
    (vr.TranslationsGetter = vr.TranslationGetterError = void 0));
  const e = (n, a) => {
    n.includes(a) || n.push(a);
  };
  class t extends Error {
    constructor(a) {
      (super(a), (this.name = "TranslationGetterError"));
    }
  }
  vr.TranslationGetterError = t;
  class r {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(a) {
      this.resourcesAccessor = a;
    }
    async getTranslations(a, o = { fallback: !0 }) {
      const i = await this.getI18nInfoConfig(),
        { fallback: s } = o;
      if (!s) {
        let c;
        return (
          i.locales.includes(a) && (c = await this.getTranslationResource(a)),
          { translations: c ?? null, locale: a }
        );
      }
      for (const c of this.getLocaleLookupOrder(a, i)) {
        const l = await this.getTranslationResource(c);
        if (l) return { translations: l, locale: c };
      }
      return { translations: null, locale: a };
    }
    async getTranslationsByLocaleLookupOrder(a) {
      const o = await this.getI18nInfoConfig(),
        i = this.getLocaleLookupOrder(a, o);
      return await Promise.all(
        i.map(async (s) => {
          const c = await this.getTranslationResource(s);
          return { locale: s, translations: c };
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
      const { locales: i, fallback: s } = o,
        c = [a],
        l = s[a];
      return (
        l && Array.isArray(l) && l.length > 0 && c.push(...l),
        e(c, o.fallback.default),
        c.filter((u) => i.includes(u))
      );
    }
  }
  return ((vr.TranslationsGetter = r), vr);
}
var An = {},
  hi = {},
  Vc;
function Qf() {
  return (
    Vc ||
      ((Vc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = rr.__importDefault(Gh()),
          n = (o, i, s) => {
            const c = o[s];
            return c ? (0, e.getTranslationValueFromContent)(c, i) : null;
          };
        e.getTranslationValue = n;
        const a = (o, i) => {
          let s = o[i];
          if (!s) {
            const c = i.split(".");
            c.length > 1 && (s = (0, r.default)(o, c, null));
          }
          return typeof s == "string" ? s : null;
        };
        e.getTranslationValueFromContent = a;
      })(hi)),
    hi
  );
}
var Gc;
function dg() {
  if (Gc) return An;
  ((Gc = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.Translator = void 0));
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
  return ((An.Translator = t), An);
}
var In = {},
  Hc;
function fg() {
  if (Hc) return In;
  ((Hc = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.ensureLocale = void 0));
  const e = Zf(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    r = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    n = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (o, i) => {
        const [s] = i.split("-");
        return (o[s] || (o[s] = i), o);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    a = (o) => {
      const i = o.replace("_", "-");
      return t.has(i) ? i : (n[i] ?? r[i] ?? null);
    };
  return ((In.ensureLocale = a), In);
}
var gi = {},
  Wc;
function vg() {
  return (
    Wc ||
      ((Wc = 1),
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
                          ? v.flatMap((m) => d(m, g))
                          : d(v, g);
                    }));
            return d(l, []);
          },
          i = (l) =>
            Object.entries(l).flatMap(([u, d]) =>
              !n(u) && !a(u) && d && Array.isArray(d) && d.length > 0 ? d.map((f) => [f, u]) : [],
            );
        e.getI18nSupportedModuleEntries = i;
        const s = (l) => {
          const u = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(l)) {
            const f = o(d[0]);
            for (const { key: p } of f) u.add(p);
          }
          return u.size > 0 ? Array.from(u) : [];
        };
        e.extractI18nKeysFromModules = s;
        const c = (l) => {
          const u = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(l)) {
            const f = o(d[0]);
            for (const p of f) u.push({ moduleName: d[1], ...p });
          }
          return u;
        };
        e.extractI18nPropertiesFromModules = c;
      })(gi)),
    gi
  );
}
var bi = {},
  Kc;
function pg() {
  return (Kc || ((Kc = 1), Object.defineProperty(bi, "__esModule", { value: !0 })), bi);
}
var Yc;
function ev() {
  return (
    Yc ||
      ((Yc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = rr;
        (t.__exportStar(Zf(), e),
          t.__exportStar(ug(), e),
          t.__exportStar(dg(), e),
          t.__exportStar(fg(), e));
        var r = Qf();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = vg();
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
          t.__exportStar(pg(), e));
      })(pi)),
    pi
  );
}
var Jc;
function hg() {
  if (Jc) return Rn;
  ((Jc = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.getContext = void 0));
  const e = Ie(),
    t = ev(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const o = await r("getContext"),
        i = o?.locale;
      return (i && (o.locale = (a = (0, t.ensureLocale)(i)) !== null && a !== void 0 ? a : i), o);
    };
  return ((Rn.getContext = n), Rn);
}
var jn = {},
  Xc;
function gg() {
  if (Xc) return jn;
  ((Xc = 1),
    Object.defineProperty(jn, "__esModule", { value: !0 }),
    (jn.changeWindowTitle = void 0));
  const e = Ie(),
    t = kt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        await r("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((jn.changeWindowTitle = n), jn);
}
var Dn = {},
  Zc;
function bg() {
  if (Zc) return Dn;
  ((Zc = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.theme = void 0));
  const t = (0, Ie().getCallBridge)();
  return ((Dn.theme = { enable: () => t("enableTheming") }), Dn);
}
var Tn = {},
  Mn = {},
  mi = {},
  pr = {},
  Qc;
function tv() {
  if (Qc) return pr;
  ((Qc = 1),
    Object.defineProperty(pr, "__esModule", { value: !0 }),
    (pr.blobToBase64 = pr.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      o = atob(a),
      i = new Array(o.length);
    for (let c = 0; c < o.length; c++) i[c] = o.charCodeAt(c);
    const s = new Uint8Array(i);
    return new Blob([s], { type: n });
  };
  pr.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, a) => {
      const o = new FileReader();
      ((o.onloadend = () => {
        n(o.result);
      }),
        (o.onerror = a),
        o.readAsDataURL(r));
    });
  return ((pr.blobToBase64 = t), pr);
}
var el;
function mg() {
  return (
    el ||
      ((el = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = tv(),
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
        const s = (l) =>
          l instanceof Blob
            ? !0
            : Array.isArray(l)
              ? l.some((u) => (0, e.containsBlobs)(u))
              : l && r(l)
                ? Object.values(l).some((u) => (0, e.containsBlobs)(u))
                : !1;
        e.containsBlobs = s;
        const c = (l) =>
          l && r(l) && "__isBlobData" in l
            ? !0
            : Array.isArray(l)
              ? l.some((u) => (0, e.containsSerialisedBlobs)(u))
              : l && r(l)
                ? Object.values(l).some((u) => (0, e.containsSerialisedBlobs)(u))
                : !1;
        e.containsSerialisedBlobs = c;
      })(mi)),
    mi
  );
}
var tl;
function rv() {
  if (tl) return Mn;
  ((tl = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.events = void 0));
  const e = Ie(),
    t = mg(),
    r = (0, e.getCallBridge)(),
    n = async (o, i) => {
      let s = i;
      return (
        (0, t.containsBlobs)(i) && (s = await (0, t.serialiseBlobsInPayload)(i)),
        r("emit", { event: o, payload: s })
      );
    },
    a = (o, i) =>
      r("on", {
        event: o,
        callback: (c) => {
          let l = c;
          return (
            (0, t.containsSerialisedBlobs)(c) && (l = (0, t.deserialiseBlobsInPayload)(c)),
            i(l)
          );
        },
      });
  return ((Mn.events = { emit: n, on: a }), Mn);
}
var rl;
function yg() {
  if (rl) return Tn;
  ((rl = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.emitReadyEvent = void 0));
  const e = rv(),
    t = nv(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return ((Tn.emitReadyEvent = n), Tn);
}
var nl;
function nv() {
  if (nl) return On;
  ((nl = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.view = void 0));
  const e = og(),
    t = ig(),
    r = sg(),
    n = cg(),
    a = lg(),
    o = hg(),
    i = gg(),
    s = bg(),
    c = yg();
  return (
    (On.view = {
      submit: e.submit,
      close: t.close,
      open: r.open,
      refresh: n.refresh,
      createHistory: a.createHistory,
      getContext: o.getContext,
      theme: s.theme,
      changeWindowTitle: i.changeWindowTitle,
      emitReadyEvent: c.emitReadyEvent,
    }),
    On
  );
}
var al;
function av() {
  return (
    al ||
      ((al = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rr.__exportStar(nv(), e));
      })(vi)),
    vi
  );
}
var yi = {},
  Nn = {},
  ol;
function _g() {
  if (ol) return Nn;
  ((ol = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.router = void 0));
  const t = (0, Ie().getCallBridge)(),
    r = async (i) => {
      if (!i?.target) throw new Error("target is required for getUrl");
      const s = await t("getUrl", i);
      if (!s) throw new Error("Failed to get URL");
      try {
        return new URL(s);
      } catch (c) {
        throw new Error(`Failed to parse URL: ${s} (${c})`);
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
  return ((Nn.router = { getUrl: r, navigate: n, open: a, reload: o }), Nn);
}
var il;
function wg() {
  return (
    il ||
      ((il = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rr.__exportStar(_g(), e));
      })(yi)),
    yi
  );
}
var _i = {},
  Ln = {},
  sl;
function kg() {
  if (sl) return Ln;
  ((sl = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.Modal = void 0));
  const e = Ie(),
    t = kt(),
    r = (0, e.getCallBridge)(),
    n = () => {};
  class a {
    constructor(i) {
      var s, c;
      ((this.resource = i?.resource || null),
        (this.onClose = i?.onClose || n),
        (this.size = i?.size || "medium"),
        (this.context = i?.context || {}),
        (this.closeOnEscape = (s = i?.closeOnEscape) !== null && s !== void 0 ? s : !0),
        (this.closeOnOverlayClick =
          (c = i?.closeOnOverlayClick) !== null && c !== void 0 ? c : !0));
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
  return ((Ln.Modal = a), Ln);
}
var cl;
function Og() {
  return (
    cl ||
      ((cl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rr.__exportStar(kg(), e));
      })(_i)),
    _i
  );
}
var Vt = {},
  $n = {},
  ll;
function Sg() {
  if (ll) return $n;
  ((ll = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.productFetchApi = void 0));
  const e = tv(),
    t = async (a) => {
      const o = {};
      for (const [i, s] of a.entries())
        if (i === "file") {
          const c = s.name,
            l = s.type;
          ((o.file = await (0, e.blobToBase64)(s)), (o.__fileName = c), (o.__fileType = l));
        } else o[i] = s;
      return JSON.stringify(o);
    },
    r = async (a) => {
      const o = a?.body instanceof FormData,
        i = o ? await t(a?.body) : a?.body,
        s = new Request("", { body: i, method: a?.method, headers: a?.headers }),
        c = Object.fromEntries(s.headers.entries());
      return {
        body: s.method !== "GET" ? await s.text() : null,
        headers: new Headers(c),
        isMultipartFormData: o,
      };
    },
    n = (a) => {
      const o = async (i, s, c) => {
        const { body: l, headers: u, isMultipartFormData: d } = await r(c);
        u.has("X-Atlassian-Token") || u.set("X-Atlassian-Token", "no-check");
        const f = {
            product: i,
            restPath: s,
            fetchRequestInit: { ...c, body: l, headers: [...u.entries()] },
            isMultipartFormData: d,
          },
          {
            body: p,
            headers: h,
            statusText: v,
            status: g,
            isAttachment: m,
          } = await a("fetchProduct", f),
          _ = m ? (0, e.base64ToBlob)(p, h["content-type"]) : p;
        return new Response(_ || null, { headers: h, status: g, statusText: v });
      };
      return {
        requestConfluence: (i, s) => o("confluence", i, s),
        requestJira: (i, s) => o("jira", i, s),
        requestBitbucket: (i, s) => o("bitbucket", i, s),
      };
    };
  return (($n.productFetchApi = n), $n);
}
var ul;
function xg() {
  if (ul) return Vt;
  ul = 1;
  var e;
  (Object.defineProperty(Vt, "__esModule", { value: !0 }),
    (Vt.requestBitbucket = Vt.requestJira = Vt.requestConfluence = void 0));
  const t = Ie();
  return (
    (e = (0, Sg().productFetchApi)((0, t.getCallBridge)())),
    (Vt.requestConfluence = e.requestConfluence),
    (Vt.requestJira = e.requestJira),
    (Vt.requestBitbucket = e.requestBitbucket),
    Vt
  );
}
var wi = {},
  Bn = {},
  dl;
function Eg() {
  if (dl) return Bn;
  ((dl = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.showFlag = void 0));
  const e = Ie(),
    t = kt(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var o;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const i = r("showFlag", { ...a, type: (o = a.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await i, r("closeFlag", { id: a.id })) };
    };
  return ((Bn.showFlag = n), Bn);
}
var fl;
function Cg() {
  return (
    fl ||
      ((fl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = Eg();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(wi)),
    wi
  );
}
var ki = {},
  vl;
function Pg() {
  return (
    vl ||
      ((vl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rr.__exportStar(rv(), e));
      })(ki)),
    ki
  );
}
var Oi = {},
  Fn = {},
  pl;
function Rg() {
  if (pl) return Fn;
  ((pl = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.realtime = void 0));
  const t = (0, Ie().getCallBridge)(),
    r = (i, s, c) => t("publishRealtimeChannel", { channelName: i, eventPayload: s, options: c }),
    n = (i, s, c) => t("subscribeRealtimeChannel", { channelName: i, onEvent: s, options: c }),
    a = (i, s, c) =>
      t("publishRealtimeChannel", { channelName: i, eventPayload: s, options: c, isGlobal: !0 }),
    o = (i, s, c) =>
      t("subscribeRealtimeChannel", { channelName: i, onEvent: s, options: c, isGlobal: !0 });
  return ((Fn.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: o }), Fn);
}
var Si = {},
  hl;
function Ag() {
  return (
    hl ||
      ((hl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Jira = void 0),
          (function (t) {
            ((t.Board = "board"), (t.Issue = "issue"), (t.Project = "project"));
          })(e.Jira || (e.Jira = {})));
      })(Si)),
    Si
  );
}
var gl;
function Ig() {
  return (
    gl ||
      ((gl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Jira = e.realtime = void 0));
        var t = Rg();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = Ag();
        Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return r.Jira;
          },
        });
      })(Oi)),
    Oi
  );
}
var Gt = {},
  bl;
function jg() {
  if (bl) return Gt;
  ((bl = 1),
    Object.defineProperty(Gt, "__esModule", { value: !0 }),
    (Gt.createTranslationFunction = Gt.getTranslations = Gt.resetTranslationsCache = void 0));
  const e = ev(),
    t = av(),
    r = {
      getI18nInfoConfig: async () => {
        const s = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!s.ok) throw new Error("Failed to get i18n info config: " + s.statusText);
        return (await s.json()).config;
      },
      getTranslationResource: async (s) => {
        const c = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${s}.json`);
        if (!c.ok) throw new Error(`Failed to get translation resource for locale: ${s}`);
        return c.json();
      },
    },
    n = new e.TranslationsGetter(r),
    a = () => {
      n.reset();
    };
  Gt.resetTranslationsCache = a;
  const o = async (s = null, c = { fallback: !0 }) => {
    let l = s;
    return (l || (l = (await t.view.getContext()).locale), await n.getTranslations(l, c));
  };
  Gt.getTranslations = o;
  const i = async (s = null) => {
    let c = s;
    c || (c = (await t.view.getContext()).locale);
    const l = new e.Translator(c, n);
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
  return ((Gt.createTranslationFunction = i), Gt);
}
var ml;
function Dg() {
  return (
    ml ||
      ((ml = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = rr;
        var r = Qh();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(tg(), e),
          t.__exportStar(ag(), e),
          t.__exportStar(av(), e),
          t.__exportStar(wg(), e),
          t.__exportStar(Og(), e),
          t.__exportStar(xg(), e),
          t.__exportStar(Cg(), e),
          t.__exportStar(Pg(), e),
          t.__exportStar(Ig(), e),
          (e.i18n = t.__importStar(jg())));
      })(ci)),
    ci
  );
}
var wa = Dg();
function X(e) {
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
var Tg = {};
function No() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : Tg;
}
var ov = Object.assign,
  go = Object.getOwnPropertyDescriptor,
  jt = Object.defineProperty,
  Lo = Object.prototype,
  ls = [];
Object.freeze(ls);
var iv = {};
Object.freeze(iv);
var Mg = typeof Proxy < "u",
  Ng = Object.toString();
function sv() {
  Mg || X("Proxy not available");
}
function cv(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Jr = function () {};
function yt(e) {
  return typeof e == "function";
}
function Or(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function $o(e) {
  return e !== null && typeof e == "object";
}
function lr(e) {
  if (!$o(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === Ng;
}
function lv(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Bo(e, t, r) {
  jt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function uv(e, t, r) {
  jt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function Rr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return $o(n) && n[r] === !0;
    }
  );
}
function un(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function Lg(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Jt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var dv = typeof Object.getOwnPropertySymbols < "u";
function $g(e) {
  var t = Object.keys(e);
  if (!dv) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Lo.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Fo =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : dv
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function fv(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Qt(e, t) {
  return Lo.hasOwnProperty.call(e, t);
}
var Bg =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Fo(t).forEach(function (n) {
        r[n] = go(t, n);
      }),
      r
    );
  };
function We(e, t) {
  return !!(e & t);
}
function Ke(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function yl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Fg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, qg(n.key), n));
  }
}
function dn(e, t, r) {
  return (t && Fg(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Xr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Ug(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sr() {
  return (
    (Sr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Sr.apply(null, arguments)
  );
}
function vv(e, t) {
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
function zg(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function qg(e) {
  var t = zg(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ug(e, t) {
  if (e) {
    if (typeof e == "string") return yl(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? yl(e, t)
          : void 0
    );
  }
}
var It = Symbol("mobx-stored-annotations");
function Dt(e) {
  function t(r, n) {
    if (Ma(n)) return e.decorate_20223_(r, n);
    Ta(r, n, e);
  }
  return Object.assign(t, e);
}
function Ta(e, t, r) {
  (Qt(e, It) || Bo(e, It, Sr({}, e[It])), Jg(r) || (e[It][t] = r));
}
function Vg(e) {
  return (Qt(e, It) || Bo(e, It, Sr({}, e[It])), e[It]);
}
function Ma(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var L = Symbol("mobx administration"),
  dr = (function () {
    function e(r) {
      (r === void 0 && (r = "Atom"),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = ee.NOT_TRACKING_),
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
        return Rv(this);
      }),
      (t.reportChanged = function () {
        (ct(), Av(this), lt());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      dn(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return We(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return We(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return We(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
dr.isBeingObservedMask_ = 1;
dr.isPendingUnobservationMask_ = 2;
dr.diffValueMask_ = 4;
var Gs = Rr("Atom", dr);
function pv(e, t, r) {
  (t === void 0 && (t = Jr), r === void 0 && (r = Jr));
  var n = new dr(e);
  return (t !== Jr && tm(n, t), r !== Jr && Mv(n, r), n);
}
function Gg(e, t) {
  return Kv(e, t);
}
function Hg(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var bo = { structural: Gg, default: Hg };
function xr(e, t, r) {
  return Bv(e)
    ? e
    : Array.isArray(e)
      ? oe.array(e, { name: r })
      : lr(e)
        ? oe.object(e, void 0, { name: r })
        : un(e)
          ? oe.map(e, { name: r })
          : Jt(e)
            ? oe.set(e, { name: r })
            : typeof e == "function" && !Oa(e) && !Sa(e)
              ? lv(e)
                ? tn(e)
                : ka(r, e)
              : e;
}
function Wg(e, t, r) {
  if (e == null || Ko(e) || Wo(e) || Ir(e) || At(e)) return e;
  if (Array.isArray(e)) return oe.array(e, { name: r, deep: !1 });
  if (lr(e)) return oe.object(e, void 0, { name: r, deep: !1 });
  if (un(e)) return oe.map(e, { name: r, deep: !1 });
  if (Jt(e)) return oe.set(e, { name: r, deep: !1 });
}
function zo(e) {
  return e;
}
function Kg(e, t) {
  return Kv(e, t) ? t : e;
}
var Yg = "override";
function Jg(e) {
  return e.annotationType_ === Yg;
}
function Na(e, t) {
  return { annotationType_: e, options_: t, make_: Xg, extend_: Zg, decorate_20223_: Qg };
}
function Xg(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Oa(r.value)) return 1;
  var o = hv(e, this, t, r, !1);
  return (jt(n, t, o), 2);
}
function Zg(e, t, r, n) {
  var a = hv(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function Qg(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    o = this,
    i = function (l) {
      var u, d, f, p;
      return Er(
        (u = (d = o.options_) == null ? void 0 : d.name) != null ? u : n.toString(),
        l,
        (f = (p = o.options_) == null ? void 0 : p.autoAction) != null ? f : !1,
      );
    };
  if (r == "field")
    return function (c) {
      var l,
        u = c;
      return (
        Oa(u) || (u = i(u)),
        (l = o.options_) != null && l.bound && ((u = u.bind(this)), (u.isMobxAction = !0)),
        u
      );
    };
  if (r == "method") {
    var s;
    return (
      Oa(e) || (e = i(e)),
      (s = this.options_) != null &&
        s.bound &&
        a(function () {
          var c = this,
            l = c[n].bind(c);
          ((l.isMobxAction = !0), (c[n] = l));
        }),
      e
    );
  }
  X(
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
function eb(e, t, r, n) {
  (t.annotationType_, n.value);
}
function hv(e, t, r, n, a) {
  var o, i, s, c, l, u, d;
  (a === void 0 && (a = j.safeDescriptors), eb(e, t, r, n));
  var f = n.value;
  if ((o = t.options_) != null && o.bound) {
    var p;
    f = f.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return {
    value: Er(
      (i = (s = t.options_) == null ? void 0 : s.name) != null ? i : r.toString(),
      f,
      (c = (l = t.options_) == null ? void 0 : l.autoAction) != null ? c : !1,
      (u = t.options_) != null && u.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: a ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !a,
  };
}
function gv(e, t) {
  return { annotationType_: e, options_: t, make_: tb, extend_: rb, decorate_20223_: nb };
}
function tb(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Qt(e.target_, t) || !Sa(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Sa(r.value)) return 1;
  var o = bv(e, this, t, r, !1, !1);
  return (jt(n, t, o), 2);
}
function rb(e, t, r, n) {
  var a,
    o = bv(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, o, n);
}
function nb(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    Sa(e) || (e = tn(e)),
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
function ab(e, t, r, n) {
  (t.annotationType_, n.value);
}
function bv(e, t, r, n, a, o) {
  (o === void 0 && (o = j.safeDescriptors), ab(e, t, r, n));
  var i = n.value;
  if ((Sa(i) || (i = tn(i)), a)) {
    var s;
    ((i = i.bind((s = e.proxy_) != null ? s : e.target_)), (i.isMobXFlow = !0));
  }
  return { value: i, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function Hs(e, t) {
  return { annotationType_: e, options_: t, make_: ob, extend_: ib, decorate_20223_: sb };
}
function ob(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function ib(e, t, r, n) {
  return (
    cb(e, this, t, r),
    e.defineComputedProperty_(t, Sr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function sb(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var o = fn(this)[L],
        i = Sr({}, r.options_, { get: e, context: this });
      (i.name || (i.name = "ObservableObject." + n.toString()), o.values_.set(n, new _t(i)));
    }),
    function () {
      return this[L].getObservablePropValue_(n);
    }
  );
}
function cb(e, t, r, n) {
  (t.annotationType_, n.get);
}
function qo(e, t) {
  return { annotationType_: e, options_: t, make_: lb, extend_: ub, decorate_20223_: db };
}
function lb(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function ub(e, t, r, n) {
  var a, o;
  return (
    fb(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (o = this.options_) == null ? void 0 : o.enhancer) != null ? a : xr,
      n,
    )
  );
}
function db(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    o = new WeakSet();
  function i(s, c) {
    var l,
      u,
      d = fn(s)[L],
      f = new wr(
        c,
        (l = (u = r.options_) == null ? void 0 : u.enhancer) != null ? l : xr,
        "ObservableObject." + a.toString(),
        !1,
      );
    (d.values_.set(a, f), o.add(s));
  }
  if (n == "accessor")
    return {
      get: function () {
        return (o.has(this) || i(this, e.get.call(this)), this[L].getObservablePropValue_(a));
      },
      set: function (c) {
        return (o.has(this) || i(this, c), this[L].setObservablePropValue_(a, c));
      },
      init: function (c) {
        return (o.has(this) || i(this, c), c);
      },
    };
}
function fb(e, t, r, n) {
  t.annotationType_;
}
var vb = "true",
  pb = mv();
function mv(e) {
  return { annotationType_: vb, options_: e, make_: hb, extend_: gb, decorate_20223_: bb };
}
function hb(e, t, r, n) {
  var a, o;
  if (r.get) return Uo.make_(e, t, r, n);
  if (r.set) {
    var i = Er(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: j.safeDescriptors ? e.isPlainObject_ : !0,
          set: i,
        }) === null
        ? 0
        : 2
      : (jt(n, t, { configurable: !0, set: i }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var s;
    if (lv(r.value)) {
      var c,
        l = (c = this.options_) != null && c.autoBind ? tn.bound : tn;
      return l.make_(e, t, r, n);
    }
    var u = (s = this.options_) != null && s.autoBind ? ka.bound : ka;
    return u.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? oe.ref : oe;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function gb(e, t, r, n) {
  var a, o;
  if (r.get) return Uo.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: j.safeDescriptors ? e.isPlainObject_ : !0, set: Er(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var i;
    r.value = r.value.bind((i = e.proxy_) != null ? i : e.target_);
  }
  var s = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? oe.ref : oe;
  return s.extend_(e, t, r, n);
}
function bb(e, t) {
  X("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var mb = "observable",
  yb = "observable.ref",
  _b = "observable.shallow",
  wb = "observable.struct",
  yv = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(yv);
function Ua(e) {
  return e || yv;
}
var ds = qo(mb),
  kb = qo(yb, { enhancer: zo }),
  Ob = qo(_b, { enhancer: Wg }),
  Sb = qo(wb, { enhancer: Kg }),
  _v = Dt(ds);
function Va(e) {
  return e.deep === !0 ? xr : e.deep === !1 ? zo : Eb(e.defaultDecorator);
}
function xb(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : mv(e)) : void 0;
}
function Eb(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : xr;
}
function wv(e, t, r) {
  if (Ma(t)) return ds.decorate_20223_(e, t);
  if (Or(t)) {
    Ta(e, t, ds);
    return;
  }
  return Bv(e)
    ? e
    : lr(e)
      ? oe.object(e, t, r)
      : Array.isArray(e)
        ? oe.array(e, t)
        : un(e)
          ? oe.map(e, t)
          : Jt(e)
            ? oe.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : oe.box(e, t);
}
ov(wv, _v);
var Cb = {
    box: function (t, r) {
      var n = Ua(r);
      return new wr(t, Va(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = Ua(r);
      return (j.useProxies === !1 || n.proxy === !1 ? xm : hm)(t, Va(n), n.name);
    },
    map: function (t, r) {
      var n = Ua(r);
      return new qv(t, Va(n), n.name);
    },
    set: function (t, r) {
      var n = Ua(r);
      return new Uv(t, Va(n), n.name);
    },
    object: function (t, r, n) {
      return jr(function () {
        return om(j.useProxies === !1 || n?.proxy === !1 ? fn({}, n) : fm({}, n), t, r);
      });
    },
    ref: Dt(kb),
    shallow: Dt(Ob),
    deep: _v,
    struct: Dt(Sb),
  },
  oe = ov(wv, Cb),
  kv = "computed",
  Pb = "computed.struct",
  fs = Hs(kv),
  Rb = Hs(Pb, { equals: bo.structural }),
  Uo = function (t, r) {
    if (Ma(r)) return fs.decorate_20223_(t, r);
    if (Or(r)) return Ta(t, r, fs);
    if (lr(t)) return Dt(Hs(kv, t));
    var n = lr(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new _t(n));
  };
Object.assign(Uo, fs);
Uo.struct = Dt(Rb);
var _l,
  wl,
  mo = 0,
  Ab = 1,
  Ib =
    (_l = (wl = go(function () {}, "name")) == null ? void 0 : wl.configurable) != null ? _l : !1,
  kl = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function Er(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return jb(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    Ib && ((kl.value = e), jt(a, "name", kl)),
    a
  );
}
function jb(e, t, r, n, a) {
  var o = Db(e, t);
  try {
    return r.apply(n, a);
  } catch (i) {
    throw ((o.error_ = i), i);
  } finally {
    Tb(o);
  }
}
function Db(e, t, r, n) {
  var a = !1,
    o = 0,
    i = j.trackingDerivation,
    s = !t || !i;
  ct();
  var c = j.allowStateChanges;
  s && (Ar(), (c = Vo(!0)));
  var l = Ws(!0),
    u = {
      runAsAction_: s,
      prevDerivation_: i,
      prevAllowStateChanges_: c,
      prevAllowStateReads_: l,
      notifySpy_: a,
      startTime_: o,
      actionId_: Ab++,
      parentActionId_: mo,
    };
  return ((mo = u.actionId_), u);
}
function Tb(e) {
  (mo !== e.actionId_ && X(30),
    (mo = e.parentActionId_),
    e.error_ !== void 0 && (j.suppressReactionErrors = !0),
    Go(e.prevAllowStateChanges_),
    va(e.prevAllowStateReads_),
    lt(),
    e.runAsAction_ && er(e.prevDerivation_),
    (j.suppressReactionErrors = !1));
}
function Mb(e, t) {
  var r = Vo(e);
  try {
    return t();
  } finally {
    Go(r);
  }
}
function Vo(e) {
  var t = j.allowStateChanges;
  return ((j.allowStateChanges = e), t);
}
function Go(e) {
  j.allowStateChanges = e;
}
var wr = (function (e) {
    function t(n, a, o, i, s) {
      var c;
      return (
        o === void 0 && (o = "ObservableValue"),
        s === void 0 && (s = bo.default),
        (c = e.call(this, o) || this),
        (c.enhancer = void 0),
        (c.name_ = void 0),
        (c.equals = void 0),
        (c.hasUnreportedChange_ = !1),
        (c.interceptors_ = void 0),
        (c.changeListeners_ = void 0),
        (c.value_ = void 0),
        (c.dehancer = void 0),
        (c.enhancer = a),
        (c.name_ = o),
        (c.equals = s),
        (c.value_ = a(n, void 0, o)),
        c
      );
    }
    vv(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== j.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (it(this)) {
          var o = st(this, { object: this, type: Tt, newValue: a });
          if (!o) return j.UNCHANGED;
          a = o.newValue;
        }
        return (
          (a = this.enhancer(a, this.value_, this.name_)),
          this.equals(this.value_, a) ? j.UNCHANGED : a
        );
      }),
      (r.setNewValue_ = function (a) {
        var o = this.value_;
        ((this.value_ = a),
          this.reportChanged(),
          bt(this) && mt(this, { type: Tt, object: this, newValue: a, oldValue: o }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (a) {
        return La(this, a);
      }),
      (r.observe_ = function (a, o) {
        return (
          o &&
            a({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: Tt,
              newValue: this.value_,
              oldValue: void 0,
            }),
          $a(this, a)
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
        return fv(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(dr),
  _t = (function () {
    function e(r) {
      ((this.dependenciesState_ = ee.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = ee.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new _o(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = yo.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || X(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = Er("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? bo.structural : bo.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        Fb(this);
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
          (this.isComputing && X(32, this.name_, this.derivation),
          j.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          vs(this) &&
            (this.warnAboutUntrackedRead_(), ct(), (this.value_ = this.computeValue_(!1)), lt());
        else if ((Rv(this), vs(this))) {
          var n = j.trackingContext;
          (this.keepAlive_ && !n && (j.trackingContext = this),
            this.trackAndCompute() && Bb(this),
            (j.trackingContext = n));
        }
        var a = this.value_;
        if (ao(a)) throw a.cause;
        return a;
      }),
      (t.set = function (n) {
        if (this.setter_) {
          (this.isRunningSetter && X(33, this.name_), (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, n);
          } finally {
            this.isRunningSetter = !1;
          }
        } else X(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var n = this.value_,
          a = this.dependenciesState_ === ee.NOT_TRACKING_,
          o = this.computeValue_(!0),
          i = a || ao(n) || ao(o) || !this.equals_(n, o);
        return (i && (this.value_ = o), i);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = Vo(!1),
          o;
        if (n) o = Ov(this, this.derivation, this.scope_);
        else if (j.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (i) {
            o = new _o(i);
          }
        return (Go(a), (this.isComputing = !1), o);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (ps(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var o = this,
          i = !0,
          s = void 0;
        return Jb(function () {
          var c = o.get();
          if (!i || a) {
            var l = Ar();
            (n({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: Tt,
              object: o,
              newValue: c,
              oldValue: s,
            }),
              er(l));
          }
          ((i = !1), (s = c));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return fv(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      dn(e, [
        {
          key: "isComputing",
          get: function () {
            return We(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return We(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return We(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return We(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return We(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
_t.isComputingMask_ = 1;
_t.isRunningSetterMask_ = 2;
_t.isBeingObservedMask_ = 4;
_t.isPendingUnobservationMask_ = 8;
_t.diffValueMask_ = 16;
var Ho = Rr("ComputedValue", _t),
  ee;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(ee || (ee = {}));
var yo;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(yo || (yo = {}));
var _o = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function ao(e) {
  return e instanceof _o;
}
function vs(e) {
  switch (e.dependenciesState_) {
    case ee.UP_TO_DATE_:
      return !1;
    case ee.NOT_TRACKING_:
    case ee.STALE_:
      return !0;
    case ee.POSSIBLY_STALE_: {
      for (var t = Ws(!0), r = Ar(), n = e.observing_, a = n.length, o = 0; o < a; o++) {
        var i = n[o];
        if (Ho(i)) {
          if (j.disableErrorBoundaries) i.get();
          else
            try {
              i.get();
            } catch {
              return (er(r), va(t), !0);
            }
          if (e.dependenciesState_ === ee.STALE_) return (er(r), va(t), !0);
        }
      }
      return (xv(e), er(r), va(t), !1);
    }
  }
}
function Ov(e, t, r) {
  var n = Ws(!0);
  (xv(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++j.runId));
  var a = j.trackingDerivation;
  ((j.trackingDerivation = e), j.inBatch++);
  var o;
  if (j.disableErrorBoundaries === !0) o = t.call(r);
  else
    try {
      o = t.call(r);
    } catch (i) {
      o = new _o(i);
    }
  return (j.inBatch--, (j.trackingDerivation = a), Nb(e), va(n), o);
}
function Nb(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = ee.UP_TO_DATE_,
      a = 0,
      o = e.unboundDepsCount_,
      i = 0;
    i < o;
    i++
  ) {
    var s = r[i];
    (s.diffValue === 0 && ((s.diffValue = 1), a !== i && (r[a] = s), a++),
      s.dependenciesState_ > n && (n = s.dependenciesState_));
  }
  for (r.length = a, e.newObserving_ = null, o = t.length; o--; ) {
    var c = t[o];
    (c.diffValue === 0 && Cv(c, e), (c.diffValue = 0));
  }
  for (; a--; ) {
    var l = r[a];
    l.diffValue === 1 && ((l.diffValue = 0), $b(l, e));
  }
  n !== ee.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function ps(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Cv(t[r], e);
  e.dependenciesState_ = ee.NOT_TRACKING_;
}
function Sv(e) {
  var t = Ar();
  try {
    return e();
  } finally {
    er(t);
  }
}
function Ar() {
  var e = j.trackingDerivation;
  return ((j.trackingDerivation = null), e);
}
function er(e) {
  j.trackingDerivation = e;
}
function Ws(e) {
  var t = j.allowStateReads;
  return ((j.allowStateReads = e), t);
}
function va(e) {
  j.allowStateReads = e;
}
function xv(e) {
  if (e.dependenciesState_ !== ee.UP_TO_DATE_) {
    e.dependenciesState_ = ee.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = ee.UP_TO_DATE_;
  }
}
var oo = function () {
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
  io = !0,
  Ev = !1,
  j = (function () {
    var e = No();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (io = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new oo().version && (io = !1),
      io
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new oo()))
        : (setTimeout(function () {
            Ev || X(35);
          }, 1),
          new oo())
    );
  })();
function Lb() {
  if (((j.pendingReactions.length || j.inBatch || j.isRunningReactions) && X(36), (Ev = !0), io)) {
    var e = No();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (j = new oo()));
  }
}
function $b(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Cv(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Pv(e));
}
function Pv(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), j.pendingUnobservations.push(e));
}
function ct() {
  j.inBatch++;
}
function lt() {
  if (--j.inBatch === 0) {
    Iv();
    for (var e = j.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof _t && r.suspend_()));
    }
    j.pendingUnobservations = [];
  }
}
function Rv(e) {
  var t = j.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && j.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && j.inBatch > 0 && Pv(e), !1);
}
function Av(e) {
  e.lowestObserverState_ !== ee.STALE_ &&
    ((e.lowestObserverState_ = ee.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === ee.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = ee.STALE_));
    }));
}
function Bb(e) {
  e.lowestObserverState_ !== ee.STALE_ &&
    ((e.lowestObserverState_ = ee.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === ee.POSSIBLY_STALE_
        ? (t.dependenciesState_ = ee.STALE_)
        : t.dependenciesState_ === ee.UP_TO_DATE_ && (e.lowestObserverState_ = ee.UP_TO_DATE_);
    }));
}
function Fb(e) {
  e.lowestObserverState_ === ee.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = ee.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === ee.UP_TO_DATE_ &&
        ((t.dependenciesState_ = ee.POSSIBLY_STALE_), t.onBecomeStale_());
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
      (this.dependenciesState_ = ee.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = yo.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), j.pendingReactions.push(this), Iv());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (ct(), (this.isScheduled = !1));
        var n = j.trackingContext;
        if (((j.trackingContext = this), vs(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((j.trackingContext = n), lt());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (ct(), (this.isRunning = !0));
        var a = j.trackingContext;
        j.trackingContext = this;
        var o = Ov(this, n, void 0);
        ((j.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && ps(this),
          ao(o) && this.reportExceptionInDerivation_(o.cause),
          lt());
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var a = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (j.disableErrorBoundaries) throw n;
      var o = "[mobx] uncaught error in '" + this + "'";
      (j.suppressReactionErrors || console.error(o, n),
        j.globalReactionErrorHandlers.forEach(function (i) {
          return i(n, a);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (ct(), ps(this), lt()));
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
        o
      );
    }),
    (t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (t.trace = function (n) {}),
    dn(e, [
      {
        key: "isDisposed",
        get: function () {
          return We(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return We(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return We(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return We(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return We(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.diffValueMask_, n === 1);
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
var zb = 100,
  hs = function (t) {
    return t();
  };
function Iv() {
  j.inBatch > 0 || j.isRunningReactions || hs(qb);
}
function qb() {
  j.isRunningReactions = !0;
  for (var e = j.pendingReactions, t = 0; e.length > 0; ) {
    ++t === zb && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  j.isRunningReactions = !1;
}
var wo = Rr("Reaction", Lt);
function Ub(e) {
  var t = hs;
  hs = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function pa() {
  return !1;
}
function Vb(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var jv = "action",
  Gb = "action.bound",
  Dv = "autoAction",
  Hb = "autoAction.bound",
  Wb = "<unnamed action>",
  gs = Na(jv),
  Kb = Na(Gb, { bound: !0 }),
  bs = Na(Dv, { autoAction: !0 }),
  Yb = Na(Hb, { autoAction: !0, bound: !0 });
function Tv(e) {
  var t = function (n, a) {
    if (yt(n)) return Er(n.name || Wb, n, e);
    if (yt(a)) return Er(n, a, e);
    if (Ma(a)) return (e ? bs : gs).decorate_20223_(n, a);
    if (Or(a)) return Ta(n, a, e ? bs : gs);
    if (Or(n)) return Dt(Na(e ? Dv : jv, { name: n, autoAction: e }));
  };
  return t;
}
var ut = Tv(!1);
Object.assign(ut, gs);
var ka = Tv(!0);
Object.assign(ka, bs);
ut.bound = Dt(Kb);
ka.bound = Dt(Yb);
function Oa(e) {
  return yt(e) && e.isMobxAction === !0;
}
function Jb(e, t) {
  var r, n, a, o;
  t === void 0 && (t = iv);
  var i = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    s = !t.scheduler && !t.delay,
    c;
  if (s)
    c = new Lt(
      i,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var l = Zb(t),
      u = !1;
    c = new Lt(
      i,
      function () {
        u ||
          ((u = !0),
          l(function () {
            ((u = !1), c.isDisposed || c.track(d));
          }));
      },
      t.onError,
      t.requiresObservable,
    );
  }
  function d() {
    e(c);
  }
  return (
    ((a = t) != null && (a = a.signal) != null && a.aborted) || c.schedule_(),
    c.getDisposer_((o = t) == null ? void 0 : o.signal)
  );
}
var Xb = function (t) {
  return t();
};
function Zb(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Xb;
}
var Qb = "onBO",
  em = "onBUO";
function tm(e, t, r) {
  return Nv(Qb, e, t, r);
}
function Mv(e, t, r) {
  return Nv(em, e, t, r);
}
function Nv(e, t, r, n) {
  var a = So(t),
    o = yt(n) ? n : r,
    i = e + "L";
  return (
    a[i] ? a[i].add(o) : (a[i] = new Set([o])),
    function () {
      var s = a[i];
      s && (s.delete(o), s.size === 0 && delete a[i]);
    }
  );
}
var rm = "never",
  Ga = "always",
  nm = "observed";
function am(e) {
  e.isolateGlobalState === !0 && Lb();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (j.useProxies = t === Ga ? !0 : t === rm ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (j.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Ga ? Ga : r === nm;
    ((j.enforceActions = n), (j.allowStateChanges = !(n === !0 || n === Ga)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (a) {
    a in e && (j[a] = !!e[a]);
  }),
    (j.allowStateReads = !j.observableRequiresReaction),
    e.reactionScheduler && Ub(e.reactionScheduler));
}
function om(e, t, r, n) {
  var a = Bg(t);
  return (
    jr(function () {
      var o = fn(e, n)[L];
      Fo(a).forEach(function (i) {
        o.extend_(i, a[i], r && i in r ? r[i] : !0);
      });
    }),
    e
  );
}
function im(e, t) {
  return Lv(So(e, t));
}
function Lv(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = sm(e.observing_).map(Lv)),
    t
  );
}
function sm(e) {
  return Array.from(new Set(e));
}
var cm = 0;
function $v() {
  this.message = "FLOW_CANCELLED";
}
$v.prototype = Object.create(Error.prototype);
var xi = gv("flow"),
  lm = gv("flow.bound", { bound: !0 }),
  tn = Object.assign(function (t, r) {
    if (Ma(r)) return xi.decorate_20223_(t, r);
    if (Or(r)) return Ta(t, r, xi);
    var n = t,
      a = n.name || "<unnamed flow>",
      o = function () {
        var s = this,
          c = arguments,
          l = ++cm,
          u = ut(a + " - runid: " + l + " - init", n).apply(s, c),
          d,
          f = void 0,
          p = new Promise(function (h, v) {
            var g = 0;
            d = v;
            function m(k) {
              f = void 0;
              var y;
              try {
                y = ut(a + " - runid: " + l + " - yield " + g++, u.next).call(u, k);
              } catch (S) {
                return v(S);
              }
              w(y);
            }
            function _(k) {
              f = void 0;
              var y;
              try {
                y = ut(a + " - runid: " + l + " - yield " + g++, u.throw).call(u, k);
              } catch (S) {
                return v(S);
              }
              w(y);
            }
            function w(k) {
              if (yt(k?.then)) {
                k.then(w, v);
                return;
              }
              return k.done ? h(k.value) : ((f = Promise.resolve(k.value)), f.then(m, _));
            }
            m(void 0);
          });
        return (
          (p.cancel = ut(a + " - runid: " + l + " - cancel", function () {
            try {
              f && Ol(f);
              var h = u.return(void 0),
                v = Promise.resolve(h.value);
              (v.then(Jr, Jr), Ol(v), d(new $v()));
            } catch (g) {
              d(g);
            }
          })),
          p
        );
      };
    return ((o.isMobXFlow = !0), o);
  }, xi);
tn.bound = Dt(lm);
function Ol(e) {
  yt(e.cancel) && e.cancel();
}
function Sa(e) {
  return e?.isMobXFlow === !0;
}
function um(e, t) {
  return e ? Ko(e) || !!e[L] || Gs(e) || wo(e) || Ho(e) : !1;
}
function Bv(e) {
  return um(e);
}
function Xt(e, t) {
  (t === void 0 && (t = void 0), ct());
  try {
    return e.apply(t);
  } finally {
    lt();
  }
}
function Nr(e) {
  return e[L];
}
var dm = {
  has: function (t, r) {
    return Nr(t).has_(r);
  },
  get: function (t, r) {
    return Nr(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return Or(r) ? ((a = Nr(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return Or(r) ? ((n = Nr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = Nr(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return Nr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    X(13);
  },
};
function fm(e, t) {
  var r, n;
  return (
    sv(),
    (e = fn(e, t)),
    (n = (r = e[L]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, dm))
  );
}
function it(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function La(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    cv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function st(e, t) {
  var r = Ar();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, o = n.length;
      a < o && ((t = n[a](t)), t && !t.type && X(14), !!t);
      a++
    );
    return t;
  } finally {
    er(r);
  }
}
function bt(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function $a(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    cv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function mt(e, t) {
  var r = Ar(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, o = n.length; a < o; a++) n[a](t);
    er(r);
  }
}
function Fv(e, t, r) {
  return (
    jr(function () {
      var n,
        a = fn(e, r)[L];
      ((n = t) != null || (t = Vg(e)),
        Fo(t).forEach(function (o) {
          return a.make_(o, t[o]);
        }));
    }),
    e
  );
}
var Sl = "splice",
  Tt = "update",
  vm = 1e4,
  pm = {
    get: function (t, r) {
      var n = t[L];
      return r === L
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Qt(ko, r)
              ? ko[r]
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
      X(15);
    },
  },
  Ks = (function () {
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
        (this.atom_ = new dr(r)),
        (this.enhancer_ = function (i, s) {
          return n(i, s, "ObservableArray[..]");
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
        return La(this, n);
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
          $a(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && X("Out of range: " + n);
        var a = this.values_.length;
        if (n !== a)
          if (n > a) {
            for (var o = new Array(n - a), i = 0; i < n - a; i++) o[i] = void 0;
            this.spliceWithArray_(a, 0, o);
          } else this.spliceWithArray_(n, a - n);
      }),
      (t.updateArrayLength_ = function (n, a) {
        (n !== this.lastKnownLength_ && X(16),
          (this.lastKnownLength_ += a),
          this.legacyMode_ && a > 0 && Wv(n + a + 1));
      }),
      (t.spliceWithArray_ = function (n, a, o) {
        var i = this;
        this.atom_;
        var s = this.values_.length;
        if (
          (n === void 0 ? (n = 0) : n > s ? (n = s) : n < 0 && (n = Math.max(0, s + n)),
          arguments.length === 1
            ? (a = s - n)
            : a == null
              ? (a = 0)
              : (a = Math.max(0, Math.min(a, s - n))),
          o === void 0 && (o = ls),
          it(this))
        ) {
          var c = st(this, { object: this.proxy_, type: Sl, index: n, removedCount: a, added: o });
          if (!c) return ls;
          ((a = c.removedCount), (o = c.added));
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
          this.updateArrayLength_(s, l);
        }
        var u = this.spliceItemsIntoValues_(n, a, o);
        return (
          (a !== 0 || o.length !== 0) && this.notifyArraySplice_(n, o, u),
          this.dehanceValues_(u)
        );
      }),
      (t.spliceItemsIntoValues_ = function (n, a, o) {
        if (o.length < vm) {
          var i;
          return (i = this.values_).splice.apply(i, [n, a].concat(o));
        } else {
          var s = this.values_.slice(n, n + a),
            c = this.values_.slice(n + a);
          this.values_.length += o.length - a;
          for (var l = 0; l < o.length; l++) this.values_[n + l] = o[l];
          for (var u = 0; u < c.length; u++) this.values_[n + o.length + u] = c[u];
          return s;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (n, a, o) {
        var i = !this.owned_ && pa(),
          s = bt(this),
          c =
            s || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: Tt,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: a,
                  oldValue: o,
                }
              : null;
        (this.atom_.reportChanged(), s && mt(this, c));
      }),
      (t.notifyArraySplice_ = function (n, a, o) {
        var i = !this.owned_ && pa(),
          s = bt(this),
          c =
            s || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Sl,
                  index: n,
                  removed: o,
                  added: a,
                  removedCount: o.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), s && mt(this, c));
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
        if ((this.legacyMode_ && n > o.length && X(17, n, o.length), n < o.length)) {
          this.atom_;
          var i = o[n];
          if (it(this)) {
            var s = st(this, { type: Tt, object: this.proxy_, index: n, newValue: a });
            if (!s) return;
            a = s.newValue;
          }
          a = this.enhancer_(a, i);
          var c = a !== i;
          c && ((o[n] = a), this.notifyArrayChildUpdate_(n, a, i));
        } else {
          for (var l = new Array(n + 1 - o.length), u = 0; u < l.length - 1; u++) l[u] = void 0;
          ((l[l.length - 1] = a), this.spliceWithArray_(o.length, 0, l));
        }
      }),
      e
    );
  })();
function hm(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    sv(),
    jr(function () {
      var a = new Ks(r, t, n, !1);
      uv(a.values_, L, a);
      var o = new Proxy(a.values_, pm);
      return ((a.proxy_ = o), e && e.length && a.spliceWithArray_(0, 0, e), o);
    })
  );
}
var ko = {
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
    return (j.trackingDerivation && X(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    j.trackingDerivation && X(37, "sort");
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
ce("every", Ot);
ce("filter", Ot);
ce("find", Ot);
ce("findIndex", Ot);
ce("findLast", Ot);
ce("findLastIndex", Ot);
ce("flatMap", Ot);
ce("forEach", Ot);
ce("map", Ot);
ce("some", Ot);
ce("toReversed", Ot);
ce("reduce", zv);
ce("reduceRight", zv);
function ce(e, t) {
  typeof Array.prototype[e] == "function" && (ko[e] = t(e));
}
function Xe(e) {
  return function () {
    var t = this[L];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function Ot(e) {
  return function (t, r) {
    var n = this,
      a = this[L];
    a.atom_.reportObserved();
    var o = a.dehanceValues_(a.values_);
    return o[e](function (i, s) {
      return t.call(r, i, s, n);
    });
  };
}
function zv(e) {
  return function () {
    var t = this,
      r = this[L];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_),
      a = arguments[0];
    return (
      (arguments[0] = function (o, i, s) {
        return a(o, i, s, t);
      }),
      n[e].apply(n, arguments)
    );
  };
}
var gm = Rr("ObservableArrayAdministration", Ks);
function Wo(e) {
  return $o(e) && gm(e[L]);
}
var bm = {},
  ir = "add",
  Oo = "delete",
  qv = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = xr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[L] = bm),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        yt(Map) || X(18),
        jr(function () {
          ((o.keysAtom_ = pv("ObservableMap.keys()")),
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
        if (!j.trackingDerivation) return this.has_(n);
        var o = this.hasMap_.get(n);
        if (!o) {
          var i = (o = new wr(this.has_(n), zo, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, i),
            Mv(i, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return o.get();
      }),
      (t.set = function (n, a) {
        var o = this.has_(n);
        if (it(this)) {
          var i = st(this, { type: o ? Tt : ir, object: this, newValue: a, name: n });
          if (!i) return this;
          a = i.newValue;
        }
        return (o ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, it(this))) {
          var o = st(this, { type: Oo, object: this, name: n });
          if (!o) return !1;
        }
        if (this.has_(n)) {
          var i = pa(),
            s = bt(this),
            c =
              s || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Oo,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Xt(function () {
              var l;
              (a.keysAtom_.reportChanged(), (l = a.hasMap_.get(n)) == null || l.setNewValue_(!1));
              var u = a.data_.get(n);
              (u.setNewValue_(void 0), a.data_.delete(n));
            }),
            s && mt(this, c),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var o = this.data_.get(n);
        if (((a = o.prepareNewValue_(a)), a !== j.UNCHANGED)) {
          var i = pa(),
            s = bt(this),
            c =
              s || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Tt,
                    object: this,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), s && mt(this, c));
        }
      }),
      (t.addValue_ = function (n, a) {
        var o = this;
        (this.keysAtom_,
          Xt(function () {
            var l,
              u = new wr(a, o.enhancer_, "ObservableMap.key", !1);
            (o.data_.set(n, u),
              (a = u.value_),
              (l = o.hasMap_.get(n)) == null || l.setNewValue_(!0),
              o.keysAtom_.reportChanged());
          }));
        var i = pa(),
          s = bt(this),
          c =
            s || i
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: ir,
                  object: this,
                  name: n,
                  newValue: a,
                }
              : null;
        s && mt(this, c);
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
        return xl({
          next: function () {
            var i = a.next(),
              s = i.done,
              c = i.value;
            return { done: s, value: s ? void 0 : n.get(c) };
          },
        });
      }),
      (t.entries = function () {
        var n = this,
          a = this.keys();
        return xl({
          next: function () {
            var i = a.next(),
              s = i.done,
              c = i.value;
            return { done: s, value: s ? void 0 : [c, n.get(c)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (n, a) {
        for (var o = Xr(this), i; !(i = o()).done; ) {
          var s = i.value,
            c = s[0],
            l = s[1];
          n.call(a, l, c, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          Ir(n) && (n = new Map(n)),
          Xt(function () {
            lr(n)
              ? $g(n).forEach(function (o) {
                  return a.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var i = o[0],
                      s = o[1];
                    return a.set(i, s);
                  })
                : un(n)
                  ? (Lg(n) || X(19, n),
                    n.forEach(function (o, i) {
                      return a.set(i, o);
                    }))
                  : n != null && X(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        Xt(function () {
          Sv(function () {
            for (var a = Xr(n.keys()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          Xt(function () {
            for (
              var o = mm(n), i = new Map(), s = !1, c = Xr(a.data_.keys()), l;
              !(l = c()).done;

            ) {
              var u = l.value;
              if (!o.has(u)) {
                var d = a.delete(u);
                if (d) s = !0;
                else {
                  var f = a.data_.get(u);
                  i.set(u, f);
                }
              }
            }
            for (var p = Xr(o.entries()), h; !(h = p()).done; ) {
              var v = h.value,
                g = v[0],
                m = v[1],
                _ = a.data_.has(g);
              if ((a.set(g, m), a.data_.has(g))) {
                var w = a.data_.get(g);
                (i.set(g, w), _ || (s = !0));
              }
            }
            if (!s)
              if (a.data_.size !== i.size) a.keysAtom_.reportChanged();
              else
                for (var k = a.data_.keys(), y = i.keys(), S = k.next(), E = y.next(); !S.done; ) {
                  if (S.value !== E.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = k.next()), (E = y.next()));
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
        return $a(this, n);
      }),
      (t.intercept_ = function (n) {
        return La(this, n);
      }),
      dn(e, [
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
  Ir = Rr("ObservableMap", qv);
function xl(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Js(e));
}
function mm(e) {
  if (un(e) || Ir(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (lr(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return X(21, e);
}
var ym = {},
  Uv = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = xr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[L] = ym),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        yt(Set) || X(22),
        (this.enhancer_ = function (i, s) {
          return n(i, s, a);
        }),
        jr(function () {
          ((o.atom_ = pv(o.name_)), r && o.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Xt(function () {
          Sv(function () {
            for (var a = Xr(n.data_.values()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var o = Xr(this), i; !(i = o()).done; ) {
          var s = i.value;
          n.call(a, s, s, this);
        }
      }),
      (t.add = function (n) {
        var a = this;
        if ((this.atom_, it(this))) {
          var o = st(this, { type: ir, object: this, newValue: n });
          if (!o) return this;
          n = o.newValue;
        }
        if (!this.has(n)) {
          Xt(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var i = !1,
            s = bt(this),
            c =
              s || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: ir,
                    object: this,
                    newValue: n,
                  }
                : null;
          s && mt(this, c);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (it(this)) {
          var o = st(this, { type: Oo, object: this, oldValue: n });
          if (!o) return !1;
        }
        if (this.has(n)) {
          var i = !1,
            s = bt(this),
            c =
              s || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Oo,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Xt(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            s && mt(this, c),
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
        return El({
          next: function () {
            var o = n.next(),
              i = o.value,
              s = o.done;
            return s ? { value: void 0, done: s } : { value: [i, i], done: s };
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
        return El({
          next: function () {
            var i = a.next(),
              s = i.value,
              c = i.done;
            return c ? { value: void 0, done: c } : { value: n.dehanceValue_(s), done: c };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Jt(n) && !At(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Jt(n) && !At(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Jt(n) && !At(n)) return n.symmetricDifference(this);
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
        if (Jt(n) && !At(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          At(n) && (n = new Set(n)),
          Xt(function () {
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
                : n != null && X("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, a) {
        return $a(this, n);
      }),
      (t.intercept_ = function (n) {
        return La(this, n);
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
      dn(e, [
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
  At = Rr("ObservableSet", Uv);
function El(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Js(e));
}
var Cl = Object.create(null),
  Pl = "remove",
  Vv = (function () {
    function e(r, n, a, o) {
      (n === void 0 && (n = new Map()),
        o === void 0 && (o = pb),
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
        (this.keysAtom_ = new dr("ObservableObject.keys")),
        (this.isPlainObject_ = lr(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, a) {
        var o = this.values_.get(n);
        if (o instanceof _t) return (o.set(a), !0);
        if (it(this)) {
          var i = st(this, { type: Tt, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!i) return null;
          a = i.newValue;
        }
        if (((a = o.prepareNewValue_(a)), a !== j.UNCHANGED)) {
          var s = bt(this),
            c = !1,
            l =
              s || c
                ? {
                    type: Tt,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), s && mt(this, l));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (j.trackingDerivation && !Qt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, a, o) {
        return (
          o === void 0 && (o = !1),
          Qt(this.target_, n)
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
        if (!j.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var a = this.pendingKeys_.get(n);
        return (
          a ||
            ((a = new wr(n in this.target_, zo, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var o;
            if ((o = this.target_[It]) != null && o[n]) return;
            X(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var i = this.target_; i && i !== Lo; ) {
            var s = go(i, n);
            if (s) {
              var c = a.make_(this, n, s, i);
              if (c === 0) return;
              if (c === 1) break;
            }
            i = Object.getPrototypeOf(i);
          }
          Al(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, o, i) {
        if ((i === void 0 && (i = !1), o === !0 && (o = this.defaultAnnotation_), o === !1))
          return this.defineProperty_(n, a, i);
        var s = o.extend_(this, n, a, i);
        return (s && Al(this, o, n), s);
      }),
      (t.defineProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          ct();
          var i = this.delete_(n);
          if (!i) return i;
          if (it(this)) {
            var s = st(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: ir,
              newValue: a.value,
            });
            if (!s) return null;
            var c = s.newValue;
            a.value !== c && (a = Sr({}, a, { value: c }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else jt(this.target_, n, a);
          this.notifyPropertyAddition_(n, a.value);
        } finally {
          lt();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, a, o, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          ct();
          var s = this.delete_(n);
          if (!s) return s;
          if (it(this)) {
            var c = st(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: ir,
              newValue: a,
            });
            if (!c) return null;
            a = c.newValue;
          }
          var l = Rl(n),
            u = {
              configurable: j.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: l.get,
              set: l.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else jt(this.target_, n, u);
          var d = new wr(a, o, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          lt();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          ct();
          var i = this.delete_(n);
          if (!i) return i;
          if (it(this)) {
            var s = st(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: ir,
              newValue: void 0,
            });
            if (!s) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var c = Rl(n),
            l = {
              configurable: j.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: c.get,
              set: c.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else jt(this.target_, n, l);
          (this.values_.set(n, new _t(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          lt();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Qt(this.target_, n))) return !0;
        if (it(this)) {
          var o = st(this, { object: this.proxy_ || this.target_, name: n, type: Pl });
          if (!o) return null;
        }
        try {
          var i;
          ct();
          var s = bt(this),
            c = !1,
            l = this.values_.get(n),
            u = void 0;
          if (!l && (s || c)) {
            var d;
            u = (d = go(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (l && (this.values_.delete(n), l instanceof wr && (u = l.value_), Av(l)),
            this.keysAtom_.reportChanged(),
            (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(n in this.target_),
            s || c)
          ) {
            var f = {
              type: Pl,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: u,
              name: n,
            };
            s && mt(this, f);
          }
        } finally {
          lt();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return $a(this, n);
      }),
      (t.intercept_ = function (n) {
        return La(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var o,
          i = bt(this),
          s = !1;
        if (i || s) {
          var c =
            i || s
              ? {
                  type: ir,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: a,
                }
              : null;
          i && mt(this, c);
        }
        ((o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), Fo(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function fn(e, t) {
  var r;
  if (Qt(e, L)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new Vv(e, new Map(), String(n), xb(t));
  return (Bo(e, L, a), e);
}
var _m = Rr("ObservableObjectAdministration", Vv);
function Rl(e) {
  return (
    Cl[e] ||
    (Cl[e] = {
      get: function () {
        return this[L].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[L].setObservablePropValue_(e, r);
      },
    })
  );
}
function Ko(e) {
  return $o(e) ? _m(e[L]) : !1;
}
function Al(e, t, r) {
  var n;
  (n = e.target_[It]) == null || delete n[r];
}
var wm = Hv(0),
  km = (function () {
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
  Ei = 0,
  Gv = function () {};
function Om(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
Om(Gv, Array.prototype);
var Ys = (function (e) {
  function t(n, a, o, i) {
    var s;
    return (
      o === void 0 && (o = "ObservableArray"),
      i === void 0 && (i = !1),
      (s = e.call(this) || this),
      jr(function () {
        var c = new Ks(o, a, i, !0);
        ((c.proxy_ = s),
          uv(s, L, c),
          n && n.length && s.spliceWithArray(0, 0, n),
          km && Object.defineProperty(s, "0", wm));
      }),
      s
    );
  }
  vv(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[L].atom_.reportObserved();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (s) {
          return Wo(s) ? s.slice() : s;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return Js({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    dn(t, [
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
})(Gv);
Object.entries(ko).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Bo(Ys.prototype, t, r);
});
function Hv(e) {
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
function Sm(e) {
  jt(Ys.prototype, "" + e, Hv(e));
}
function Wv(e) {
  if (e > Ei) {
    for (var t = Ei; t < e + 100; t++) Sm(t);
    Ei = e;
  }
}
Wv(1e3);
function xm(e, t, r) {
  return new Ys(e, t, r);
}
function So(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Wo(e)) return (t !== void 0 && X(23), e[L].atom_);
    if (At(e)) return e.atom_;
    if (Ir(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || X(25, t, ms(e)), r);
    }
    if (Ko(e)) {
      if (!t) return X(26);
      var n = e[L].values_.get(t);
      return (n || X(27, t, ms(e)), n);
    }
    if (Gs(e) || Ho(e) || wo(e)) return e;
  } else if (yt(e) && wo(e[L])) return e[L];
  X(28);
}
function Em(e, t) {
  if ((e || X(29), Gs(e) || Ho(e) || wo(e) || Ir(e) || At(e))) return e;
  if (e[L]) return e[L];
  X(24, e);
}
function ms(e, t) {
  var r;
  if (t !== void 0) r = So(e, t);
  else {
    if (Oa(e)) return e.name;
    Ko(e) || Ir(e) || At(e) ? (r = Em(e)) : (r = So(e));
  }
  return r.name_;
}
function jr(e) {
  var t = Ar(),
    r = Vo(!0);
  ct();
  try {
    return e();
  } finally {
    (lt(), Go(r), er(t));
  }
}
var Il = Lo.toString;
function Kv(e, t, r) {
  return (r === void 0 && (r = -1), ys(e, t, r));
}
function ys(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var i = Il.call(e);
  if (i !== Il.call(t)) return !1;
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
  ((e = jl(e)), (t = jl(t)));
  var s = i === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var c = e.constructor,
      l = t.constructor;
    if (
      c !== l &&
      !(yt(c) && c instanceof c && yt(l) && l instanceof l) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (r === 0) return !1;
  (r < 0 && (r = -1), (n = n || []), (a = a || []));
  for (var u = n.length; u--; ) if (n[u] === e) return a[u] === t;
  if ((n.push(e), a.push(t), s)) {
    if (((u = e.length), u !== t.length)) return !1;
    for (; u--; ) if (!ys(e[u], t[u], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var p = 0; p < f; p++) {
      var h = d[p];
      if (!(Qt(t, h) && ys(e[h], t[h], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function jl(e) {
  return Wo(e) ? e.slice() : un(e) || Ir(e) || Jt(e) || At(e) ? Array.from(e.entries()) : e;
}
var Dl,
  Cm = ((Dl = No().Iterator) == null ? void 0 : Dl.prototype) || {};
function Js(e) {
  return ((e[Symbol.iterator] = Pm), Object.assign(Object.create(Cm), e));
}
function Pm() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = No();
  typeof t[e] > "u" && X("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: Vb, extras: { getDebugName: ms }, $mobx: L });
if (!b.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Fv) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Rm(e) {
  e();
}
function Am(e) {
  (e || (e = Rm), am({ reactionScheduler: e }));
}
function Im(e) {
  return im(e);
}
var jm = 1e4,
  Dm = 1e4,
  Tm = (function () {
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
            (n === void 0 && (n = jm), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, Dm));
        },
      }),
      e
    );
  })(),
  Mm = typeof FinalizationRegistry < "u" ? FinalizationRegistry : Tm,
  xa = new Mm(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  Ci = { exports: {} },
  Pi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tl;
function Nm() {
  if (Tl) return Pi;
  Tl = 1;
  var e = wt();
  function t(d, f) {
    return (d === f && (d !== 0 || 1 / d === 1 / f)) || (d !== d && f !== f);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    a = e.useEffect,
    o = e.useLayoutEffect,
    i = e.useDebugValue;
  function s(d, f) {
    var p = f(),
      h = n({ inst: { value: p, getSnapshot: f } }),
      v = h[0].inst,
      g = h[1];
    return (
      o(
        function () {
          ((v.value = p), (v.getSnapshot = f), c(v) && g({ inst: v }));
        },
        [d, p, f],
      ),
      a(
        function () {
          return (
            c(v) && g({ inst: v }),
            d(function () {
              c(v) && g({ inst: v });
            })
          );
        },
        [d],
      ),
      i(p),
      p
    );
  }
  function c(d) {
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
      : s;
  return (
    (Pi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u),
    Pi
  );
}
var Ml;
function Lm() {
  return (Ml || ((Ml = 1), (Ci.exports = Nm())), Ci.exports);
}
var $m = Lm();
function Nl(e) {
  e.reaction = new Lt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function Bm(e, t) {
  t === void 0 && (t = "observed");
  var r = O.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (s) {
        return (
          xa.unregister(n),
          (n.onStoreChange = s),
          n.reaction || (Nl(n), (n.stateVersion = Symbol())),
          function () {
            var c;
            ((n.onStoreChange = null),
              (c = n.reaction) === null || c === void 0 || c.dispose(),
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
  (a.reaction || (Nl(a), xa.register(r, a, a)),
    O.useDebugValue(a.reaction, Im),
    $m.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
  var o, i;
  if (
    (a.reaction.track(function () {
      try {
        o = e();
      } catch (s) {
        i = s;
      }
    }),
    i)
  )
    throw i;
  return o;
}
var Ri,
  Ai,
  Yv = typeof Symbol == "function" && Symbol.for,
  Fm =
    (Ai =
      (Ri = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Ri === void 0
        ? void 0
        : Ri.configurable) !== null && Ai !== void 0
      ? Ai
      : !1,
  Ll = Yv
    ? Symbol.for("react.forward_ref")
    : typeof b.forwardRef == "function" &&
      b.forwardRef(function (e) {
        return null;
      }).$$typeof,
  $l = Yv
    ? Symbol.for("react.memo")
    : typeof b.memo == "function" &&
      b.memo(function (e) {
        return null;
      }).$$typeof;
function zm(e, t) {
  var r;
  if ($l && e.$$typeof === $l)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    o = e.displayName || e.name;
  if (Ll && e.$$typeof === Ll && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var i = function (s, c) {
    return Bm(function () {
      return a(s, c);
    }, o);
  };
  return (
    (i.displayName = e.displayName),
    Fm && Object.defineProperty(i, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (i.contextTypes = e.contextTypes),
    n && (i = b.forwardRef(i)),
    (i = b.memo(i)),
    Um(e, i),
    i
  );
}
var qm = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function Um(e, t) {
  Object.keys(e).forEach(function (r) {
    qm[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Ii;
Am(To.unstable_batchedUpdates);
Ii = xa.finalizeAllImmediately;
function Vm(e, t) {
  if (Bl(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !Bl(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function Bl(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Fl = Symbol("patchMixins"),
  Jv = Symbol("patchedDefinition");
function Gm(e, t) {
  var r = (e[Fl] = e[Fl] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function zl(e, t) {
  for (var r = this, n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    a[o - 2] = arguments[o];
  t.locks++;
  try {
    var i;
    return (e != null && (i = e.apply(this, a)), i);
  } finally {
    (t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (s) {
          s.apply(r, a);
        }));
  }
}
function ql(e, t) {
  var r = function () {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    zl.call.apply(zl, [this, e, t].concat(o));
  };
  return r;
}
function Hm(e, t, r) {
  var n = Gm(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[Jv])) {
    var o = e[t],
      i = Xv(e, t, a ? a.enumerable : void 0, n, o);
    Object.defineProperty(e, t, i);
  }
}
function Xv(e, t, r, n, a) {
  var o,
    i = ql(a, n);
  return (
    (o = {}),
    (o[Jv] = !0),
    (o.get = function () {
      return i;
    }),
    (o.set = function (c) {
      if (this === e) i = ql(c, n);
      else {
        var l = Xv(this, t, r, n, c);
        Object.defineProperty(this, t, l);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = r),
    o
  );
}
var Ul = Symbol("ObserverAdministration"),
  Vl = Symbol("isMobXReactObserver");
function _s(e) {
  var t;
  return (t = e[Ul]) != null
    ? t
    : (e[Ul] = {
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
function Wm(e) {
  var t = e.prototype;
  if (e[Vl]) {
    var r = ws(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[Vl] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== b.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Gl;
    else if (t.shouldComponentUpdate !== Gl)
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
        value: Km.call(this, n),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var i = this,
        s = _s(this);
      return (
        (s.mounted = !0),
        xa.unregister(this),
        (s.forceUpdate = function () {
          return i.forceUpdate();
        }),
        (!s.reaction || s.reactionInvalidatedBeforeMount) && s.forceUpdate(),
        o?.apply(this, arguments)
      );
    }),
    Hm(t, "componentWillUnmount", function () {
      var i,
        s = _s(this);
      ((i = s.reaction) == null || i.dispose(),
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
function Km(e) {
  var t = e.bind(this),
    r = _s(this);
  function n() {
    r.reaction || ((r.reaction = Ym(r)), r.mounted || xa.register(this, r, this));
    var a = void 0,
      o = void 0;
    if (
      (r.reaction.track(function () {
        try {
          o = Mb(!1, t);
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
function Ym(e) {
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
function Gl(e, t) {
  return this.state !== t ? !0 : !Vm(this.props, e);
}
function Yo(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(b.Component, e) ||
    Object.prototype.isPrototypeOf.call(b.PureComponent, e)
      ? Wm(e)
      : zm(e)
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
function Jm(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Xm = ["children"],
  Hl = O.createContext({});
function Zv(e) {
  var t = e.children,
    r = Jm(e, Xm),
    n = O.useContext(Hl),
    a = O.useRef(ks({}, n, r)),
    o = a.current;
  return O.createElement(Hl.Provider, { value: o }, t);
}
Zv.displayName = "MobXProvider";
O.version.split(".")[0];
if (!b.Component) throw new Error("mobx-react requires React to be available");
if (!oe) throw new Error("mobx-react requires mobx to be available");
var Zm = Object.defineProperty,
  Qm = Object.getOwnPropertyDescriptor,
  Ee = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? Qm(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && Zm(t, r, a), a);
  };
const ji = "Loading ...";
class Oe {
  constructor() {
    ((this.state = "ROOT"),
      (this.isLoading = !0),
      (this.message = ji),
      (this.testNonVersioningData = ""),
      (this.testNumberVersioningData = ""),
      (this.testDateVersioningData = ""),
      (this.testTimestampVersioningData = ""),
      Fv(this));
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
    ((this.isLoading = !0), (this.message = t ?? ji));
  }
  stopLoading() {
    ((this.isLoading = !1), (this.message = ji));
  }
}
Ee([oe], Oe.prototype, "state", 2);
Ee([oe], Oe.prototype, "isLoading", 2);
Ee([oe], Oe.prototype, "message", 2);
Ee([oe], Oe.prototype, "testData", 2);
Ee([oe], Oe.prototype, "testDataOptimisticNumber", 2);
Ee([oe], Oe.prototype, "testDataOptimisticDateId", 2);
Ee([oe], Oe.prototype, "testDataOptimisticTimeStampId", 2);
Ee([oe], Oe.prototype, "testNonVersioningData", 2);
Ee([oe], Oe.prototype, "testNumberVersioningData", 2);
Ee([oe], Oe.prototype, "testDateVersioningData", 2);
Ee([oe], Oe.prototype, "testTimestampVersioningData", 2);
Ee([ut.bound], Oe.prototype, "saveState", 1);
Ee([ut.bound], Oe.prototype, "saveResponse", 1);
Ee([ut.bound], Oe.prototype, "saveUpdateResponse", 1);
Ee([ut.bound], Oe.prototype, "clearStates", 1);
Ee([ut], Oe.prototype, "loading", 1);
Ee([ut], Oe.prototype, "stopLoading", 1);
const ey = new Oe();
class ty {
  constructor() {
    this.stateStore = ey;
  }
}
const Qv = new ty(),
  ry = b.createContext(Qv),
  Jo = () => b.useContext(ry);
function pe(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Fe(e) {
  "@babel/helpers - typeof";
  return (
    (Fe =
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
    Fe(e)
  );
}
function ny(e, t) {
  if (Fe(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fe(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ep(e) {
  var t = ny(e, "string");
  return Fe(t) == "symbol" ? t : t + "";
}
function Wl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, ep(n.key), n));
  }
}
function he(e, t, r) {
  return (
    t && Wl(e.prototype, t),
    r && Wl(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ay(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qe(e, t) {
  if (t && (Fe(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ay(e);
}
function J(e) {
  return (
    (J = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    J(e)
  );
}
function Ea(e, t) {
  return (
    (Ea = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Ea(e, t)
  );
}
function Ue(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ea(e, t));
}
function C(e, t, r) {
  return (
    (t = ep(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Ae() {}
function tp(e) {
  if (Array.isArray(e)) return e;
}
function oy(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      a,
      o,
      i,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((o = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = o.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
    } catch (u) {
      ((l = !0), (a = u));
    } finally {
      try {
        if (!c && r.return != null && ((i = r.return()), Object(i) !== i)) return;
      } finally {
        if (l) throw a;
      }
    }
    return s;
  }
}
function Os(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Xs(e, t) {
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
function rp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Z(e, t) {
  return tp(e) || oy(e, t) || Xs(e, t) || rp();
}
var np = function (t, r, n) {
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
  xo = function (t, r) {
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
  ap = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Kl = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  sy = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = t.destination,
      i = t.sourceIndex;
    if (!o) return r;
    var s = Kl(i, n, a),
      c = Kl(o.index, n, a),
      l = r.slice(),
      u = l.splice(s, 1),
      d = Z(u, 1),
      f = d[0];
    return (l.splice(c, 0, f), l);
  };
const cy = "modulepreload",
  ly = function (e, t) {
    return new URL(e, t).href;
  },
  Yl = {},
  uy = function (t, r, n) {
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
        s = document.querySelector("meta[property=csp-nonce]"),
        c = s?.nonce || s?.getAttribute("nonce");
      a = l(
        r.map((u) => {
          if (((u = ly(u, n)), u in Yl)) return;
          Yl[u] = !0;
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
            ((p.rel = d ? "stylesheet" : cy),
            d || (p.as = "script"),
            (p.crossOrigin = ""),
            (p.href = u),
            c && p.setAttribute("nonce", c),
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
      const s = new Event("vite:preloadError", { cancelable: !0 });
      if (((s.payload = i), window.dispatchEvent(s), !s.defaultPrevented)) throw i;
    }
    return a.then((i) => {
      for (const s of i || []) s.status === "rejected" && o(s.reason);
      return t().catch(o);
    });
  };
function W() {
  return (
    (W = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    W.apply(null, arguments)
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
function Q(e, t) {
  if (e == null) return {};
  var r,
    n,
    a = dy(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      ((r = o[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
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
function Di(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jl(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Jl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var fy = (function () {
  function e(t) {
    var r = this;
    (pe(this, e),
      C(this, "_isAnalyticsEvent", !0),
      C(this, "clone", function () {
        var n = Di({}, r.payload);
        return new e({ payload: n });
      }),
      (this.payload = t.payload));
  }
  return he(e, [
    {
      key: "update",
      value: function (r) {
        return (
          typeof r == "function" && (this.payload = r(this.payload)),
          Fe(r) === "object" && (this.payload = Di(Di({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function vy(e) {
  if (Array.isArray(e)) return Os(e);
}
function op(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function py() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function He(e) {
  return vy(e) || op(e) || Xs(e) || py();
}
function hy(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = J(e)) !== null; );
  return e;
}
function Eo() {
  return (
    (Eo =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = hy(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    Eo.apply(null, arguments)
  );
}
function gy(e, t, r) {
  return (
    (t = J(t)),
    qe(e, ip() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
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
function by(e, t, r, n) {
  var a = Eo(J(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var my = (function (e) {
  function t(r) {
    var n;
    return (
      pe(this, t),
      (n = gy(this, t, [r])),
      C(n, "_isUIAnalyticsEvent", !0),
      C(n, "clone", function () {
        if (n.hasFired) return null;
        var a = He(n.context),
          o = He(n.handlers),
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
    Ue(t, e),
    he(t, [
      {
        key: "update",
        value: function (n) {
          return this.hasFired ? this : by(t, "update", this, 3)([n]);
        },
      },
    ])
  );
})(fy);
function Xl(e, t, r, n, a, o, i) {
  try {
    var s = e[o](i),
      c = s.value;
  } catch (l) {
    return void r(l);
  }
  s.done ? t(c) : Promise.resolve(c).then(n, a);
}
function me(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, a) {
      var o = e.apply(t, r);
      function i(c) {
        Xl(o, n, a, i, s, "next", c);
      }
      function s(c) {
        Xl(o, n, a, i, s, "throw", c);
      }
      i(void 0);
    });
  };
}
var Ti = { exports: {} },
  Mi = { exports: {} },
  Zl;
function sp() {
  return (
    Zl ||
      ((Zl = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Mi)),
    Mi.exports
  );
}
var Ni = { exports: {} },
  Li = { exports: {} },
  Ql;
function cp() {
  return (
    Ql ||
      ((Ql = 1),
      (function (e) {
        function t(r, n, a, o) {
          var i = Object.defineProperty;
          try {
            i({}, "", {});
          } catch {
            i = 0;
          }
          ((e.exports = t =
            function (c, l, u, d) {
              function f(p, h) {
                t(c, p, function (v) {
                  return this._invoke(p, h, v);
                });
              }
              l
                ? i
                  ? i(c, l, { value: u, enumerable: !d, configurable: !d, writable: !d })
                  : (c[l] = u)
                : (f("next", 0), f("throw", 1), f("return", 2));
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r, n, a, o));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Li)),
    Li.exports
  );
}
var eu;
function lp() {
  return (
    eu ||
      ((eu = 1),
      (function (e) {
        var t = cp();
        function r() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var n,
            a,
            o = typeof Symbol == "function" ? Symbol : {},
            i = o.iterator || "@@iterator",
            s = o.toStringTag || "@@toStringTag";
          function c(g, m, _, w) {
            var k = m && m.prototype instanceof u ? m : u,
              y = Object.create(k.prototype);
            return (
              t(
                y,
                "_invoke",
                (function (S, E, A) {
                  var D,
                    P,
                    T,
                    B = 0,
                    $ = A || [],
                    q = !1,
                    U = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: F,
                      f: F.bind(n, 4),
                      d: function (Y, I) {
                        return ((D = Y), (P = 0), (T = n), (U.n = I), l);
                      },
                    };
                  function F(G, Y) {
                    for (P = G, T = Y, a = 0; !q && B && !I && a < $.length; a++) {
                      var I,
                        V = $[a],
                        ge = U.p,
                        H = V[2];
                      G > 3
                        ? (I = H === Y) &&
                          ((T = V[(P = V[4]) ? 5 : ((P = 3), 3)]), (V[4] = V[5] = n))
                        : V[0] <= ge &&
                          ((I = G < 2 && ge < V[1])
                            ? ((P = 0), (U.v = Y), (U.n = V[1]))
                            : ge < H &&
                              (I = G < 3 || V[0] > Y || Y > H) &&
                              ((V[4] = G), (V[5] = Y), (U.n = H), (P = 0)));
                    }
                    if (I || G > 1) return l;
                    throw ((q = !0), Y);
                  }
                  return function (G, Y, I) {
                    if (B > 1) throw TypeError("Generator is already running");
                    for (q && Y === 1 && F(Y, I), P = Y, T = I; (a = P < 2 ? n : T) || !q; ) {
                      D || (P ? (P < 3 ? (P > 1 && (U.n = -1), F(P, T)) : (U.n = T)) : (U.v = T));
                      try {
                        if (((B = 2), D)) {
                          if ((P || (G = "next"), (a = D[G]))) {
                            if (!(a = a.call(D, T)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((T = a.value), P < 2 && (P = 0));
                          } else
                            (P === 1 && (a = D.return) && a.call(D),
                              P < 2 &&
                                ((T = TypeError(
                                  "The iterator does not provide a '" + G + "' method",
                                )),
                                (P = 1)));
                          D = n;
                        } else if ((a = (q = U.n < 0) ? T : S.call(E, U)) !== l) break;
                      } catch (V) {
                        ((D = n), (P = 1), (T = V));
                      } finally {
                        B = 1;
                      }
                    }
                    return { value: a, done: q };
                  };
                })(g, _, w),
                !0,
              ),
              y
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
            t(h, i, function () {
              return this;
            }),
            t(h, "toString", function () {
              return "[object Generator]";
            }),
            ((e.exports = r =
              function () {
                return { w: c, m: v };
              }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports))()
          );
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ni)),
    Ni.exports
  );
}
var $i = { exports: {} },
  Bi = { exports: {} },
  Fi = { exports: {} },
  tu;
function up() {
  return (
    tu ||
      ((tu = 1),
      (function (e) {
        var t = sp(),
          r = cp();
        function n(a, o) {
          function i(c, l, u, d) {
            try {
              var f = a[c](l),
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
              function (c, l, u) {
                function d() {
                  return new o(function (f, p) {
                    i(c, u, f, p);
                  });
                }
                return (s = s ? s.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Fi)),
    Fi.exports
  );
}
var ru;
function dp() {
  return (
    ru ||
      ((ru = 1),
      (function (e) {
        var t = lp(),
          r = up();
        function n(a, o, i, s, c) {
          return new r(t().w(a, o, i, s), c || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Bi)),
    Bi.exports
  );
}
var nu;
function yy() {
  return (
    nu ||
      ((nu = 1),
      (function (e) {
        var t = dp();
        function r(n, a, o, i, s) {
          var c = t(n, a, o, i, s);
          return c.next().then(function (l) {
            return l.done ? l.value : c.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })($i)),
    $i.exports
  );
}
var zi = { exports: {} },
  au;
function _y() {
  return (
    au ||
      ((au = 1),
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
      })(zi)),
    zi.exports
  );
}
var qi = { exports: {} },
  Ui = { exports: {} },
  ou;
function wy() {
  return (
    ou ||
      ((ou = 1),
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
      })(Ui)),
    Ui.exports
  );
}
var iu;
function ky() {
  return (
    iu ||
      ((iu = 1),
      (function (e) {
        var t = wy().default;
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
      })(qi)),
    qi.exports
  );
}
var su;
function Oy() {
  return (
    su ||
      ((su = 1),
      (function (e) {
        var t = sp(),
          r = lp(),
          n = yy(),
          a = dp(),
          o = up(),
          i = _y(),
          s = ky();
        function c() {
          var l = r(),
            u = l.m(c),
            d = (Object.getPrototypeOf ? Object.getPrototypeOf(u) : u.__proto__).constructor;
          function f(v) {
            var g = typeof v == "function" && v.constructor;
            return !!g && (g === d || (g.displayName || g.name) === "GeneratorFunction");
          }
          var p = { throw: 1, return: 2, break: 3, continue: 3 };
          function h(v) {
            var g, m;
            return function (_) {
              (g ||
                ((g = {
                  stop: function () {
                    return m(_.a, 2);
                  },
                  catch: function () {
                    return _.v;
                  },
                  abrupt: function (k, y) {
                    return m(_.a, p[k], y);
                  },
                  delegateYield: function (k, y, S) {
                    return ((g.resultName = y), m(_.d, s(k), S));
                  },
                  finish: function (k) {
                    return m(_.f, k);
                  },
                }),
                (m = function (k, y, S) {
                  ((_.p = g.prev), (_.n = g.next));
                  try {
                    return k(y, S);
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
          return ((e.exports = c =
            function () {
              return {
                wrap: function (m, _, w, k) {
                  return l.w(h(m), _, w, k && k.reverse());
                },
                isGeneratorFunction: f,
                mark: l.m,
                awrap: function (m, _) {
                  return new t(m, _);
                },
                AsyncIterator: o,
                async: function (m, _, w, k, y) {
                  return (f(_) ? a : n)(h(m), _, w, k, y);
                },
                keys: i,
                values: s,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = c), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ti)),
    Ti.exports
  );
}
var Vi, cu;
function Sy() {
  if (cu) return Vi;
  cu = 1;
  var e = Oy()();
  Vi = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return Vi;
}
var xy = Sy();
const z = ur(xy);
var hr = {},
  Lr = {},
  Ha = {},
  lu;
function Ey() {
  if (lu) return Ha;
  ((lu = 1), Object.defineProperty(Ha, "__esModule", { value: !0 }));
  const e = cr();
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
      const s = e.StableID.get(this._sdkKey);
      if (
        ((o = n.customIDs) === null || o === void 0 ? void 0 : o.stableID) !== s &&
        ((!((i = n.customIDs) === null || i === void 0) && i.stableID) || s)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in a) {
        const c = a.user,
          l = Object.assign(Object.assign({}, n), {
            analyticsOnlyMetadata: void 0,
            privateAttributes: void 0,
          });
        (0, e._getFullUserHash)(l) !== (0, e._getFullUserHash)(c) &&
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
      let s = i.reason;
      const c = (a = i.warnings) !== null && a !== void 0 ? a : [];
      (this._source === "Bootstrap" && c.length > 0 && (s = s + c[0]),
        s !== "Uninitialized" &&
          s !== "NoValues" &&
          (s = `${s}:${n ? "Unrecognized" : "Recognized"}`));
      const l =
        this._source === "Bootstrap" && (o = this._bootstrapMetadata) !== null && o !== void 0
          ? o
          : void 0;
      return (l && (i.bootstrapMetadata = l), Object.assign(Object.assign({}, i), { reason: s }));
    }
  };
  return ((Ha.default = t), Ha);
}
var $r = {},
  zn = {},
  uu;
function Cy() {
  if (uu) return zn;
  ((uu = 1),
    Object.defineProperty(zn, "__esModule", { value: !0 }),
    (zn._resolveDeltasResponse = void 0));
  const e = cr(),
    t = 2;
  function r(i, s) {
    const c = (0, e._typedJsonParse)(s, "checksum", "DeltasEvaluationResponse");
    if (!c) return { hadBadDeltaChecksum: !0 };
    const l = n(i, c),
      u = a(l),
      d = (0, e._DJB2Object)(
        {
          feature_gates: u.feature_gates,
          dynamic_configs: u.dynamic_configs,
          layer_configs: u.layer_configs,
        },
        t,
      );
    return d === c.checksumV2
      ? JSON.stringify(u)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: u,
          badFullResponse: c.deltas_full_response,
        };
  }
  zn._resolveDeltasResponse = r;
  function n(i, s) {
    return Object.assign(Object.assign(Object.assign({}, i), s), {
      feature_gates: Object.assign(Object.assign({}, i.feature_gates), s.feature_gates),
      layer_configs: Object.assign(Object.assign({}, i.layer_configs), s.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, i.dynamic_configs), s.dynamic_configs),
    });
  }
  function a(i) {
    const s = i;
    return (
      o(i.deleted_gates, s.feature_gates),
      delete s.deleted_gates,
      o(i.deleted_configs, s.dynamic_configs),
      delete s.deleted_configs,
      o(i.deleted_layers, s.layer_configs),
      delete s.deleted_layers,
      s
    );
  }
  function o(i, s) {
    i?.forEach((c) => {
      delete s[c];
    });
  }
  return zn;
}
var du;
function fp() {
  if (du) return $r;
  du = 1;
  var e =
    ($r && $r.__awaiter) ||
    function (a, o, i, s) {
      function c(l) {
        return l instanceof i
          ? l
          : new i(function (u) {
              u(l);
            });
      }
      return new (i || (i = Promise))(function (l, u) {
        function d(h) {
          try {
            p(s.next(h));
          } catch (v) {
            u(v);
          }
        }
        function f(h) {
          try {
            p(s.throw(h));
          } catch (v) {
            u(v);
          }
        }
        function p(h) {
          h.done ? l(h.value) : c(h.value).then(d, f);
        }
        p((s = s.apply(a, o || [])).next());
      });
    };
  Object.defineProperty($r, "__esModule", { value: !0 });
  const t = cr(),
    r = Cy();
  class n extends t.NetworkCore {
    constructor(o, i) {
      super(o, i);
      const s = o?.networkConfig;
      ((this._option = o),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          s?.initializeUrl,
          s?.api,
          s?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(o, i, s, c, l) {
      return e(this, void 0, void 0, function* () {
        var u, d, f, p, h, v;
        const g = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
        let m = {
          user: c,
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
          const _ =
            g?.hash_used !==
            ((v =
              (h = (p = this._option) === null || p === void 0 ? void 0 : p.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && v !== void 0
              ? v
              : "djb2");
          m = Object.assign(Object.assign({}, m), {
            sinceTime: l && !_ ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && l ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: _ ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(o, g, m, s);
      });
    }
    _fetchEvaluations(o, i, s, c) {
      return e(this, void 0, void 0, function* () {
        var l, u;
        const d = yield this.post({
          sdkKey: o,
          urlConfig: this._initializeUrlConfig,
          data: s,
          retries: 2,
          isStatsigEncodable: !0,
          priority: c,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (l = d?.body) !== null && l !== void 0 ? l : null;
        if (
          i?.has_updates !== !0 ||
          ((u = d.body) === null || u === void 0 ? void 0 : u.includes('"is_delta":true')) !== !0 ||
          s.deltasResponseRequested !== !0
        )
          return d.body;
        const f = (0, r._resolveDeltasResponse)(i, d.body);
        return typeof f == "string"
          ? f
          : this._fetchEvaluations(
              o,
              i,
              Object.assign(Object.assign(Object.assign({}, s), f), {
                deltasResponseRequested: !1,
              }),
              c,
            );
      });
    }
  }
  return (($r.default = n), $r);
}
var qn = {},
  fu;
function Py() {
  if (fu) return qn;
  ((fu = 1),
    Object.defineProperty(qn, "__esModule", { value: !0 }),
    (qn._makeParamStoreGetter = void 0));
  const e = cr(),
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
  function s(u, d, f, p) {
    const v = u.getExperiment(d.experiment_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function c(u, d, f, p) {
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
          return s(u, v, h, f);
        case "layer":
          return c(u, v, h, f);
        default:
          return h;
      }
    };
  }
  return ((qn._makeParamStoreGetter = l), qn);
}
var gr = {},
  vu;
function Ry() {
  if (vu) return gr;
  vu = 1;
  var e =
    (gr && gr.__awaiter) ||
    function (a, o, i, s) {
      function c(l) {
        return l instanceof i
          ? l
          : new i(function (u) {
              u(l);
            });
      }
      return new (i || (i = Promise))(function (l, u) {
        function d(h) {
          try {
            p(s.next(h));
          } catch (v) {
            u(v);
          }
        }
        function f(h) {
          try {
            p(s.throw(h));
          } catch (v) {
            u(v);
          }
        }
        function p(h) {
          h.done ? l(h.value) : c(h.value).then(d, f);
        }
        p((s = s.apply(a, o || [])).next());
      });
    };
  (Object.defineProperty(gr, "__esModule", { value: !0 }),
    (gr.StatsigEvaluationsDataAdapter = void 0));
  const t = cr(),
    r = fp();
  let n = class extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(o, i, s) {
      (super.attach(o, i, s),
        s !== null && s instanceof r.default
          ? (this._network = s)
          : (this._network = new r.default(i ?? {})));
    }
    getDataAsync(o, i, s) {
      return this._getDataAsyncImpl(o, (0, t._normalizeUser)(i, this._options), s);
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
    _fetchFromNetwork(o, i, s, c) {
      return e(this, void 0, void 0, function* () {
        var l;
        const u = yield (l = this._network) === null || l === void 0
          ? void 0
          : l.fetchEvaluations(this._getSdkKey(), o, s?.priority, i, c);
        return u ?? null;
      });
    }
    _getCacheKey(o) {
      var i;
      const s = (0, t._getStorageKey)(
        this._getSdkKey(),
        o,
        (i = this._options) === null || i === void 0 ? void 0 : i.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${s}`;
    }
    _isCachedResultValidFor204(o, i) {
      return o.fullUserHash != null && o.fullUserHash === (0, t._getFullUserHash)(i);
    }
  };
  return ((gr.StatsigEvaluationsDataAdapter = n), gr);
}
var pu;
function Ay() {
  if (pu) return Lr;
  pu = 1;
  var e =
    (Lr && Lr.__awaiter) ||
    function (s, c, l, u) {
      function d(f) {
        return f instanceof l
          ? f
          : new l(function (p) {
              p(f);
            });
      }
      return new (l || (l = Promise))(function (f, p) {
        function h(m) {
          try {
            g(u.next(m));
          } catch (_) {
            p(_);
          }
        }
        function v(m) {
          try {
            g(u.throw(m));
          } catch (_) {
            p(_);
          }
        }
        function g(m) {
          m.done ? f(m.value) : d(m.value).then(h, v);
        }
        g((u = u.apply(s, c || [])).next());
      });
    };
  Object.defineProperty(Lr, "__esModule", { value: !0 });
  const t = cr(),
    r = Ey(),
    n = fp(),
    a = Py(),
    o = Ry();
  let i = class Ss extends t.StatsigClientBase {
    static instance(c) {
      const l = (0, t._getStatsigGlobal)().instance(c);
      return l instanceof Ss
        ? l
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Ss(c ?? "", {}));
    }
    constructor(c, l, u = null) {
      var d, f;
      t.SDKType._setClientType(c, "javascript-client");
      const p = new n.default(u, (v) => {
        this.$emt(v);
      });
      (super(
        c,
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
        (this._store = new r.default(c)),
        (this._network = p),
        (this._user = this._configureUser(l, u)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (f = u?.plugins) !== null && f !== void 0 ? f : [];
      for (const v of h) v.bind(this);
    }
    initializeSync(c) {
      var l;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : []),
          ])
        : (this._logger.start(), this.updateUserSync(this._user, c));
    }
    initializeAsync(c) {
      return e(this, void 0, void 0, function* () {
        return this._initializePromise
          ? this._initializePromise
          : ((this._initializePromise = this._initializeAsyncImpl(c)), this._initializePromise);
      });
    }
    updateUserSync(c, l) {
      const u = performance.now();
      try {
        return this._updateUserSyncImpl(c, l, u);
      } catch (d) {
        const f = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(f, u);
      }
    }
    _updateUserSyncImpl(c, l, u) {
      var d;
      const f = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(c);
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
    updateUserAsync(c, l) {
      return e(this, void 0, void 0, function* () {
        const u = performance.now();
        try {
          return yield this._updateUserAsyncImpl(c, l);
        } catch (d) {
          const f = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(f, u);
        }
      });
    }
    _updateUserAsyncImpl(c, l) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(c);
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
    checkGate(c, l) {
      return this.getFeatureGate(c, l).value;
    }
    logEvent(c, l, u) {
      const d = typeof c == "string" ? { eventName: c, value: l, metadata: u } : c;
      (this.$emt({ name: "log_event_called", event: d }),
        this._logger.enqueue(
          Object.assign(Object.assign({}, d), { user: this._user, time: Date.now() }),
        ));
    }
    updateUserWithAnalyticsOnlyMetadata(c) {
      this._user = this._configureUser(
        Object.assign(Object.assign({}, this._user), { analyticsOnlyMetadata: c }),
        this._options,
      );
    }
    _primeReadyRipcord() {
      this.$on("error", () => {
        this.loadingStatus === "Loading" && this._finalizeUpdate(null);
      });
    }
    _initializeAsyncImpl(c) {
      return e(this, void 0, void 0, function* () {
        return (
          t.Storage.isReady() || (yield t.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, c)
        );
      });
    }
    _createErrorUpdateDetails(c, l) {
      var u;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - l,
        c,
        null,
        [...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : [])],
      );
    }
    _finalizeUpdate(c) {
      (this._store.finalize(), this._setStatus("Ready", c));
    }
    _runPostUpdate(c, l) {
      this.dataAdapter.getDataAsync(c, l, { priority: "low" }).catch((u) => {
        t.Log.error("An error occurred after update.", u);
      });
    }
    _resetForUser(c) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(c, this._options)));
    }
    _configureUser(c, l) {
      var u, d, f;
      const p = (0, t._normalizeUser)(c, l),
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
    _getFeatureGateImpl(c, l) {
      var u, d;
      const { result: f, details: p } = this._store.getGate(c),
        h = (0, t._makeFeatureGate)(c, p, f),
        v =
          (d = (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, h, this._user, l),
        g = v ?? h;
      return (
        this._enqueueExposure(
          c,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          l,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(c, l) {
      var u, d;
      const { result: f, details: p } = this._store.getConfig(c),
        h = (0, t._makeDynamicConfig)(c, p, f),
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
          c,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          l,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(c, l) {
      var u, d, f, p;
      const { result: h, details: v } = this._store.getConfig(c),
        g = (0, t._makeExperiment)(c, v, h);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (u = g.__evaluation) === null || u === void 0 ? void 0 : u.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const m =
          (p =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || p === void 0
            ? void 0
            : p.call(f, g, this._user, l),
        _ = m ?? g;
      return (
        this._enqueueExposure(
          c,
          (0, t._createConfigExposure)(this._user, _, this._store.getExposureMapping()),
          l,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: _ }),
        _
      );
    }
    _getConfigListImpl() {
      return this._store.getConfigList();
    }
    _getLayerImpl(c, l) {
      var u, d, f;
      const { result: p, details: h } = this._store.getLayer(c),
        v = (0, t._makeLayer)(c, h, p),
        g =
          (d =
            (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, v, this._user, l);
      l?.disableExposureLog && this._logger.incrementNonExposureCount(c);
      const m = (0, t._mergeOverride)(
        v,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : v.__value,
        (_) => {
          l?.disableExposureLog ||
            this._enqueueExposure(
              c,
              (0, t._createLayerParameterExposure)(
                this._user,
                m,
                _,
                this._store.getExposureMapping(),
              ),
              l,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: m }), m);
    }
    _getParameterStoreImpl(c, l) {
      var u, d;
      const { result: f, details: p } = this._store.getParamStore(c);
      this._logger.incrementNonExposureCount(c);
      const h = {
          name: c,
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
  return ((Lr.default = i), Lr);
}
var hu;
function Iy() {
  return (
    hu ||
      ((hu = 1),
      (function (e) {
        var t =
            (hr && hr.__createBinding) ||
            (Object.create
              ? function (i, s, c, l) {
                  l === void 0 && (l = c);
                  var u = Object.getOwnPropertyDescriptor(s, c);
                  ((!u || ("get" in u ? !s.__esModule : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return s[c];
                      },
                    }),
                    Object.defineProperty(i, l, u));
                }
              : function (i, s, c, l) {
                  (l === void 0 && (l = c), (i[l] = s[c]));
                }),
          r =
            (hr && hr.__exportStar) ||
            function (i, s) {
              for (var c in i)
                c !== "default" && !Object.prototype.hasOwnProperty.call(s, c) && t(s, i, c);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = cr(),
          a = Ay();
        ((e.StatsigClient = a.default), r(cr(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(hr)),
    hr
  );
}
var gt = Iy(),
  Gi = { exports: {} },
  gu;
function jy() {
  return (
    gu ||
      ((gu = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function a(c, l, u) {
          ((this.fn = c), (this.context = l), (this.once = u || !1));
        }
        function o(c, l, u, d, f) {
          if (typeof u != "function") throw new TypeError("The listener must be a function");
          var p = new a(u, d || c, f),
            h = r ? r + l : l;
          return (
            c._events[h]
              ? c._events[h].fn
                ? (c._events[h] = [c._events[h], p])
                : c._events[h].push(p)
              : ((c._events[h] = p), c._eventsCount++),
            c
          );
        }
        function i(c, l) {
          --c._eventsCount === 0 ? (c._events = new n()) : delete c._events[l];
        }
        function s() {
          ((this._events = new n()), (this._eventsCount = 0));
        }
        ((s.prototype.eventNames = function () {
          var l = [],
            u,
            d;
          if (this._eventsCount === 0) return l;
          for (d in (u = this._events)) t.call(u, d) && l.push(r ? d.slice(1) : d);
          return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(u)) : l;
        }),
          (s.prototype.listeners = function (l) {
            var u = r ? r + l : l,
              d = this._events[u];
            if (!d) return [];
            if (d.fn) return [d.fn];
            for (var f = 0, p = d.length, h = new Array(p); f < p; f++) h[f] = d[f].fn;
            return h;
          }),
          (s.prototype.listenerCount = function (l) {
            var u = r ? r + l : l,
              d = this._events[u];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (s.prototype.emit = function (l, u, d, f, p, h) {
            var v = r ? r + l : l;
            if (!this._events[v]) return !1;
            var g = this._events[v],
              m = arguments.length,
              _,
              w;
            if (g.fn) {
              switch ((g.once && this.removeListener(l, g.fn, void 0, !0), m)) {
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
              for (w = 1, _ = new Array(m - 1); w < m; w++) _[w - 1] = arguments[w];
              g.fn.apply(g.context, _);
            } else {
              var k = g.length,
                y;
              for (w = 0; w < k; w++)
                switch ((g[w].once && this.removeListener(l, g[w].fn, void 0, !0), m)) {
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
                    if (!_) for (y = 1, _ = new Array(m - 1); y < m; y++) _[y - 1] = arguments[y];
                    g[w].fn.apply(g[w].context, _);
                }
            }
            return !0;
          }),
          (s.prototype.on = function (l, u, d) {
            return o(this, l, u, d, !1);
          }),
          (s.prototype.once = function (l, u, d) {
            return o(this, l, u, d, !0);
          }),
          (s.prototype.removeListener = function (l, u, d, f) {
            var p = r ? r + l : l;
            if (!this._events[p]) return this;
            if (!u) return (i(this, p), this);
            var h = this._events[p];
            if (h.fn) h.fn === u && (!f || h.once) && (!d || h.context === d) && i(this, p);
            else {
              for (var v = 0, g = [], m = h.length; v < m; v++)
                (h[v].fn !== u || (f && !h[v].once) || (d && h[v].context !== d)) && g.push(h[v]);
              g.length ? (this._events[p] = g.length === 1 ? g[0] : g) : i(this, p);
            }
            return this;
          }),
          (s.prototype.removeAllListeners = function (l) {
            var u;
            return (
              l
                ? ((u = r ? r + l : l), this._events[u] && i(this, u))
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (s.prototype.off = s.prototype.removeListener),
          (s.prototype.addListener = s.prototype.on),
          (s.prefixed = r),
          (s.EventEmitter = s),
          (e.exports = s));
      })(Gi)),
    Gi.exports
  );
}
var Dy = jy();
const Ty = ur(Dy);
function bu(e, t) {
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
      ? bu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Wa = "@all-features",
  My = (function () {
    function e() {
      (pe(this, e), C(this, "eventToValue", new Map()), (this.emitter = new Ty()));
    }
    return he(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, o) {
          var i = this,
            s = a(r, ar(ar({}, o), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, s);
          var c = function () {
            var u = a(r, ar(ar({}, o), {}, { fireGateExposure: !1 })),
              d = i.eventToValue.get(n);
            d !== u && (i.eventToValue.set(n, u), n(u));
          };
          return (
            this.emitter.on(r, c),
            function () {
              i.emitter.off(r, c);
            }
          );
        },
      },
      {
        key: "onExperimentValueUpdated",
        value: function (r, n, a, o, i, s) {
          var c = this,
            l = "".concat(r, ".").concat(n),
            u = i(r, n, a, ar(ar({}, s), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(o) === void 0 && this.eventToValue.set(o, u);
          var d = function () {
            var p = i(r, n, a, ar(ar({}, s), {}, { fireExperimentExposure: !1 })),
              h = c.eventToValue.get(o);
            h !== p && (c.eventToValue.set(o, p), o(p));
          };
          return (
            this.emitter.on(l, d),
            function () {
              c.emitter.off(l, d);
            }
          );
        },
      },
      {
        key: "onAnyUpdated",
        value: function (r) {
          var n = this;
          return (
            this.emitter.on(Wa, r),
            function () {
              n.emitter.off(Wa, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(Wa),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== Wa;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  Ny = "fedramp-moderate";
function Ly() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === Ny;
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
  la = (function (e) {
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
  $y = [
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
function mu(e, t) {
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
function xs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : mu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ka = function (t) {
    return xs({ perimeter: Ly() ? Ca.FEDRAMP_MODERATE : Ca.COMMERCIAL }, t);
  },
  Un = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var o = function (f, p) {
      var h = Z(f, 1),
        v = h[0],
        g = Z(p, 1),
        m = g[0];
      return v.localeCompare(m);
    };
    (n.sort(o), a.sort(o));
    for (var i = 0; i < n.length; i++) {
      var s = Z(n[i], 2),
        c = s[1],
        l = Z(a[i], 2),
        u = l[1];
      if (c !== u) return !1;
    }
    return !0;
  },
  yu = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  By = function (t) {
    var r = t.api,
      n = t.disableCurrentPageLogging,
      a = t.loggingIntervalMillis,
      o = t.loggingBufferMaxSize,
      i = t.localMode,
      s = t.eventLoggingApi,
      c = t.eventLoggingApiForRetries,
      l = t.disableLocalStorage,
      u = t.ignoreWindowUndefined,
      d = t.disableAllLogging;
    (t.initTimeoutMs,
      t.disableNetworkKeepalive,
      t.overrideStableID,
      t.disableErrorLogging,
      t.disableAutoMetricsLogging);
    var f = Q(t, $y);
    return xs(
      xs({}, f),
      {},
      {
        networkConfig: {
          api: r,
          logEventUrl: s ? s + "rgstr" : void 0,
          logEventFallbackUrls: c ? [c] : void 0,
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
  Fy = Object.entries(Zs).map(function (e) {
    var t = Z(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  vp = function (t) {
    var r,
      n,
      a,
      o = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = Fy.find(function (i) {
            var s = Z(i, 1),
              c = s[0];
            return o.includes(c);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Zs.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  Es = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  _u = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (pe(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = o),
        (this._allocatedExperimentName = i),
        (this._evaluationDetails = a),
        (this._onDefaultValueFallback = s));
    }
    return he(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var o,
              i = this.getValue(r, n);
            if (i == null) return n;
            var s = Array.isArray(n) ? "array" : Fe(n),
              c = Array.isArray(i) ? "array" : Fe(i);
            if (a) {
              var l;
              return a(i)
                ? (this.fireExposure(r), i)
                : ((l = this._onDefaultValueFallback) === null ||
                    l === void 0 ||
                    l.call(this, this, r, s, c),
                  n);
            }
            return n == null || s === c
              ? (this.fireExposure(r), i)
              : ((o = this._onDefaultValueFallback) === null ||
                  o === void 0 ||
                  o.call(this, this, r, s, c),
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
                vp(r.details),
                Es(
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
  wu = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        l = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (pe(this, e),
        (this._logParameterFunction = o),
        (this._name = t),
        (this._value = JSON.parse(JSON.stringify(r ?? {}))),
        (this._ruleID = n ?? ""),
        (this._evaluationDetails = a),
        (this._secondaryExposures = i),
        (this._undelegatedSecondaryExposures = s),
        (this._allocatedExperimentName = c),
        (this._explicitParameters = l));
    }
    return he(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var o = this,
              i = this._value[r];
            if (i == null) return n;
            var s = function () {
              return (o._logLayerParameterExposure(r), i);
            };
            return a
              ? a(i)
                ? s()
                : n
              : n == null || (Fe(i) === Fe(n) && Array.isArray(n) === Array.isArray(i))
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
              o,
              i,
              s,
              c,
              l = new e(
                r.name,
                r.__value,
                r.ruleID,
                vp(r.details),
                function (u, d) {
                  return r.get(d);
                },
                Es(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                Es(
                  (o =
                    (i = r.__evaluation) === null || i === void 0
                      ? void 0
                      : i.undelegated_secondary_exposures) !== null && o !== void 0
                    ? o
                    : [],
                ),
                (s = r.__evaluation) === null || s === void 0
                  ? void 0
                  : s.allocated_experiment_name,
                (c = r.__evaluation) === null || c === void 0 ? void 0 : c.explicit_parameters,
              );
            return l;
          },
        },
      ],
    );
  })(),
  Zr = "0.0.0-development";
function zy(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function pp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (pp = function () {
    return !!e;
  })();
}
function qy(e, t, r) {
  if (pp()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && Ea(a, r.prototype), a);
}
function Cs(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Cs = function (n) {
      if (n === null || !zy(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return qy(n, arguments, J(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        Ea(a, n)
      );
    }),
    Cs(e)
  );
}
function Uy(e, t, r) {
  return (
    (t = J(t)),
    qe(e, hp() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function hp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (hp = function () {
    return !!e;
  })();
}
var ku = (function (e) {
  function t(r) {
    return (pe(this, t), Uy(this, t, [r]));
  }
  return (Ue(t, e), he(t));
})(Cs(Error));
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
function Vy(e) {
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
var Gy = 5e3,
  Hy = "https://api.atlassian.com/flags",
  Wy = "https://api.stg.atlassian.com/flags",
  Ky = "https://api.dev.atlassian.com/flags",
  Yy = "https://api.stg.atlassian-us-gov-mod.com/flags",
  Jy = "https://api.atlassian-us-gov-mod.com/flags",
  Xy = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  Zy = "oasis-stg.com/flags",
  Qy = "atlassian-isolated.net/flags",
  e_ = "/gateway/api/flags",
  Hi = (function () {
    function e() {
      pe(this, e);
    }
    return he(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = me(
            z.mark(function n(a) {
              var o, i;
              return z.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          (o = a.targetApp),
                          (i = "/api/v2/frontend/clientSdkKey/".concat(o)),
                          (c.prev = 2),
                          (c.next = 5),
                          this.fetchRequest(i, "GET", a)
                        );
                      case 5:
                        return c.abrupt("return", c.sent);
                      case 8:
                        if (((c.prev = 8), (c.t0 = c.catch(2)), !(c.t0 instanceof Error))) {
                          c.next = 12;
                          break;
                        }
                        throw c.t0;
                      case 12:
                        throw Error("Failed to retrieve client sdk key");
                      case 13:
                      case "end":
                        return c.stop();
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
          var t = me(
            z.mark(function n(a, o, i) {
              var s;
              return z.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          (s = { identifiers: o, customAttributes: i, targetApp: a.targetApp }),
                          (l.prev = 1),
                          (l.next = 4),
                          this.fetchRequest("/api/v2/frontend/experimentValues", "POST", a, s)
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
          var t = me(
            z.mark(function n(a) {
              var o;
              return z.wrap(function (s) {
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
                        (o = s.sent),
                        new ku(
                          "Non 2xx response status received, status: "
                            .concat(a.status, ", body: ")
                            .concat(JSON.stringify(o)),
                        )
                      );
                    case 5:
                      if (a.status !== 204) {
                        s.next = 7;
                        break;
                      }
                      throw new ku("Unexpected 204 response");
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
          var t = me(
            z.mark(function n(a) {
              var o;
              return z.wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                      return ((s.next = 2), a.text());
                    case 2:
                      return ((o = s.sent), s.abrupt("return", JSON.parse(o)));
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
            o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          if (n) return e_;
          if (a === Ca.FEDRAMP_MODERATE)
            switch (r) {
              case la.Production:
                return Jy;
              case la.Staging:
                return Yy;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === Ca.COMMERCIAL)
            switch (r) {
              case la.Development:
                return Ky;
              case la.Staging:
                var i = this.getApiUrl(o);
                return i !== null ? i : Wy;
              default:
                var s = this.getApiUrl(o);
                return s !== null ? s : Hy;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = me(
            z.mark(function n(a, o, i, s) {
              var c, l, u, d, f;
              return z.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (c = e.getBaseUrl(
                            i.environment,
                            i.useGatewayURL,
                            i.perimeter,
                            i.isolationContextId,
                          )),
                          (l = i.fetchTimeoutMs || Gy),
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
                            "".concat(c).concat(a),
                            Vy(
                              {
                                method: o,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Zr,
                                  "X-API-KEY": i.apiKey,
                                },
                                signal: u,
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
          if (n === void 0) return r ? Xy.replace("%s", r) : null;
          var a = n.protocol,
            o = n.hostname,
            i = o.match(/([^.]+)\.oasis-stg\.com$/);
          if (i) return "".concat(a, "//api.").concat(i[1], ".").concat(Zy);
          var s = o.match(/([^.]+)\.atlassian-isolated\.net$/);
          return s ? "".concat(a, "//api.").concat(s[1], ".").concat(Qy) : null;
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
function Su(e, t) {
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
function Vn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Su(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Su(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function t_(e, t, r) {
  return (
    (t = J(t)),
    qe(e, gp() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function gp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (gp = function () {
    return !!e;
  })();
}
function r_(e, t, r, n) {
  var a = Eo(J(e.prototype), t, r);
  return typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var n_ = (function (e) {
  function t() {
    var r;
    return (
      pe(this, t),
      (r = t_(this, t, ["NoFetchDataAdapter", "nofetch"])),
      C(r, "bootstrapResult", null),
      r
    );
  }
  return (
    Ue(t, e),
    he(t, [
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
          var r = me(
            z.mark(function a(o, i) {
              return z.wrap(function (c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                    case "end":
                      return c.stop();
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
          var r = me(
            z.mark(function a(o, i, s) {
              return z.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return l.abrupt(
                          "return",
                          this.bootstrapResult &&
                            Vn(
                              Vn({}, this.bootstrapResult),
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
            Vn(Vn({}, this.bootstrapResult), {}, { fullUserHash: gt._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = me(
            z.mark(function a(o, i, s) {
              return z.wrap(function (l) {
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
          r_(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = Vn({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(gt.DataAdapterCore);
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
function Ne(e) {
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
function a_(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = o_(e)) || t) {
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
    s = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var l = r.next();
      return ((i = l.done), l);
    },
    e: function (l) {
      ((s = !0), (o = l));
    },
    f: function () {
      try {
        i || r.return == null || r.return();
      } finally {
        if (s) throw o;
      }
    },
  };
}
function o_(e, t) {
  if (e) {
    if (typeof e == "string") return Eu(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Eu(e, t)
          : void 0
    );
  }
}
function Eu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Wi = "LocalOverride:Recognized",
  i_ = "STATSIG_OVERRIDES",
  Cu = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Br = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  at = function (t, r) {
    return r + ":" + t;
  },
  s_ = (function () {
    function e(t) {
      (pe(this, e),
        (this._overrides = Br()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return he(e, [
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
          for (var i = 0, s = a; i < s.length; i++) {
            for (
              var c = s[i],
                l = 0,
                u = Object.entries((d = c.gates) !== null && d !== void 0 ? d : {});
              l < u.length;
              l++
            ) {
              var d,
                f = Z(u[l], 2),
                p = f[0],
                h = f[1];
              r.gates[p] = h;
            }
            for (
              var v = 0, g = Object.entries((m = c.configs) !== null && m !== void 0 ? m : {});
              v < g.length;
              v++
            ) {
              var m,
                _ = Z(g[v], 2),
                w = _[0],
                k = _[1];
              r.configs[w] = k;
            }
            for (
              var y = 0, S = Object.entries((E = c.layers) !== null && E !== void 0 ? E : {});
              y < S.length;
              y++
            ) {
              var E,
                A = Z(S[y], 2),
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
            this.parseStoredOverrides(Cu),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Cu);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var o = a[n],
              i = new Set(Object.keys(o)),
              s = a_(i),
              c;
            try {
              for (s.s(); !(c = s.n()).done; ) {
                var l = c.value,
                  u = nt._DJB2(l);
                i.has(u) && delete o[u];
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
          var n = Ne(Ne({}, Br()), r);
          this._djb2Map.clear();
          for (var a = 0, o = Object.entries(n); a < o.length; a++)
            for (
              var i = Z(o[a], 2), s = i[0], c = i[1], l = 0, u = Object.entries(c);
              l < u.length;
              l++
            ) {
              var d = Z(u[l], 2),
                f = d[0],
                p = d[1];
              this._djb2Map.set(at(nt._DJB2(f), s), p);
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
            this._djb2Map.set(at(nt._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(at(nt._DJB2(r), "gates")),
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
            : Ne(Ne({}, r), {}, { value: o, details: Ne(Ne({}, r.details), {}, { reason: Wi }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(at(nt._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(at(nt._DJB2(r), "configs")),
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
            this._djb2Map.set(at(nt._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(at(nt._DJB2(r), "configs")),
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
            this._djb2Map.set(at(nt._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(at(nt._DJB2(r), "layers")),
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
                : this._djb2Map.get(at(r.name, "layers"));
          return o == null
            ? null
            : Ne(
                Ne({}, r),
                {},
                {
                  __value: o,
                  get: nt._makeTypedGet(r.name, o),
                  details: Ne(Ne({}, r.details), {}, { reason: Wi }),
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
            : Ne(
                Ne({}, r),
                {},
                {
                  value: o,
                  get: nt._makeTypedGet(r.name, o),
                  details: Ne(Ne({}, r.details), {}, { reason: Wi }),
                },
              );
        },
      },
    ]);
  })(),
  c_ = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function Pu(e, t) {
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
function or(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Pu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ru = "client-default-key",
  l_ = "https://xp.atlassian.com/v1/rgstr",
  u_ = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? i_ : n,
        o = r.overrideAdapter;
      (pe(this, e),
        C(this, "initPromise", null),
        C(this, "initCompleted", !1),
        C(this, "initWithDefaults", !1),
        C(this, "hasCheckGateErrorOccurred", !1),
        C(this, "hasGetExperimentErrorOccurred", !1),
        C(this, "hasGetExperimentValueErrorOccurred", !1),
        C(this, "hasGetLayerErrorOccurred", !1),
        C(this, "hasGetLayerValueErrorOccurred", !1),
        C(this, "subscriptions", new My()),
        C(this, "dataAdapter", new n_()),
        C(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = o || new s_(a)));
    }
    return he(e, [
      {
        key: "initialize",
        value: (function () {
          var t = me(
            z.mark(function n(a, o, i) {
              var s = this,
                c,
                l;
              return z.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((c = Ka(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          Un(c, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          d.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (l = performance.now()),
                          (this.initOptions = c),
                          (this.initPromise = this.init(c, o, i)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var f = performance.now(),
                                p = f - l;
                              s.fireClientEvent(l, p, "initialize", s.initCompleted, c.apiKey);
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
          var t = me(
            z.mark(function n(a, o, i, s) {
              var c = this,
                l,
                u;
              return z.wrap(
                function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        if (((l = Ka(a)), !this.initPromise)) {
                          f.next = 4;
                          break;
                        }
                        return (
                          Un(l, this.initOptions) ||
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
                          this.provider.setClientVersion(Zr),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(l, o, i, s)
                            .then(function () {
                              ((c.initCompleted = !0), (c.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var p = performance.now(),
                                h = p - u;
                              c.fireClientEvent(
                                u,
                                h,
                                "initializeWithProvider",
                                c.initCompleted,
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
            s = this,
            c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
          (i = this.initOptions.analyticsWebClient) === null ||
            i === void 0 ||
            i
              .then(function (l) {
                var u = or(
                  {
                    targetApp: s.initOptions.targetApp,
                    clientVersion: Zr,
                    success: o,
                    startTime: r,
                    totalTime: n,
                  },
                  c && { apiKey: c },
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
                s.initOptions.environment !== la.Production &&
                  console.error("Analytics web client promise did not resolve", l);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = me(
            z.mark(function n(a, o, i) {
              var s = this,
                c,
                l,
                u,
                d = arguments;
              return z.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (
                          ((c = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (l = Ka(a)),
                          !this.initPromise)
                        ) {
                          p.next = 5;
                          break;
                        }
                        return (
                          Un(l, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          p.abrupt("return", this.initPromise)
                        );
                      case 5:
                        return (
                          Object.prototype.hasOwnProperty.call(c, "has_updates") ||
                            (c.has_updates = !0),
                          (u = performance.now()),
                          (this.initOptions = l),
                          (this.initPromise = this.initFromValues(l, o, i, c)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var h = performance.now(),
                                v = h - u;
                              s.fireClientEvent(u, v, "initializeFromValues", s.initCompleted);
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
          var t = me(
            z.mark(function n(a, o, i) {
              var s, c;
              return z.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (s = Ka(a)),
                          (c = function () {
                            return Hi.fetchExperimentValues(s, o, i).then(function (f) {
                              var p = f.experimentValues,
                                h = f.customAttributes;
                              return { experimentValues: p, customAttributesFromFetch: h };
                            });
                          }),
                          (u.next = 5),
                          this.updateUserUsingInitializeValuesProducer(c, o, i)
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
          var t = me(
            z.mark(function n(a, o) {
              var i = this;
              return z.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        if ((this.assertInitialized(this.statsigClient), this.provider)) {
                          c.next = 3;
                          break;
                        }
                        throw new Error(
                          "Cannot update user using provider as the client was not initialised with a provider",
                        );
                      case 3:
                        return ((c.next = 5), this.provider.setProfile(this.initOptions, a, o));
                      case 5:
                        return (
                          (c.next = 7),
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
                        return c.stop();
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
          var t = me(
            z.mark(function n(a, o) {
              var i,
                s,
                c = arguments;
              return z.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return (
                          (i = c.length > 2 && c[2] !== void 0 ? c[2] : {}),
                          this.assertInitialized(this.statsigClient),
                          (s = function () {
                            return Promise.resolve({
                              experimentValues: i,
                              customAttributesFromFetch: o,
                            });
                          }),
                          (u.next = 5),
                          this.updateUserUsingInitializeValuesProducer(s, a, o)
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
            return _u.fromExperiment(
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
              new _u(r, {}, "", { time: Date.now(), reason: Zs.Error })
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
            var s = o.typeGuard;
            return i.get(n, a, s);
          } catch (c) {
            return (
              this.hasGetExperimentValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the experiment value. Only the first occurrence of this error is logged.",
                  experimentName: r,
                  defaultValue: a,
                  options: o,
                  error: c,
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
          return Un(this.currentIdentifiers, r) && Un(this.currentAttributes, n);
        },
      },
      {
        key: "onGateUpdated",
        value: function (r, n) {
          var a = this,
            o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            i = function (c) {
              var l = o.fireGateExposure,
                u = l === void 0 ? !0 : l;
              u && a.manuallyLogGateExposure(r);
              try {
                n(c);
              } catch (d) {
                console.warn(
                  "Error calling callback for gate ".concat(r, " with value ").concat(c),
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
            s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {},
            c = function (u) {
              var d = s.fireExperimentExposure,
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
            c,
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
          var t = me(
            z.mark(function n(a, o, i) {
              var s, c, l, u, d, f, p, h;
              return z.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = or({}, a)),
                          (g.prev = 1),
                          (u = Hi.fetchClientSdk(a).then(function (m) {
                            return (s.sdkKey = m.clientSdkKey);
                          })),
                          (d = Hi.fetchExperimentValues(a, o, i)),
                          (g.next = 6),
                          Promise.all([u, d])
                        );
                      case 6:
                        ((f = g.sent),
                          (p = Z(f, 2)),
                          (h = p[1]),
                          (c = h.experimentValues),
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
                          this.initFromValues(s, o, i)
                        );
                      case 19:
                        throw g.t0;
                      case 20:
                        return g.abrupt("return", this.initFromValues(s, o, l, c));
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
          var t = me(
            z.mark(function n(a, o, i, s) {
              var c, l, u, d, f, p, h, v;
              return z.wrap(
                function (m) {
                  for (;;)
                    switch ((m.prev = m.next)) {
                      case 0:
                        return (
                          (c = or(or({}, a), {}, { disableCurrentPageLogging: !0 })),
                          (m.prev = 1),
                          (m.next = 4),
                          o.setProfile(a, i, s)
                        );
                      case 4:
                        return (
                          (d = o.getClientSdkKey().then(function (_) {
                            return (c.sdkKey = _);
                          })),
                          (f = o.getExperimentValues()),
                          (m.next = 8),
                          Promise.all([d, f])
                        );
                      case 8:
                        ((p = m.sent),
                          (h = Z(p, 2)),
                          (v = h[1]),
                          (l = v.experimentValues),
                          (u = v.customAttributesFromFetch),
                          (m.next = 22));
                        break;
                      case 15:
                        return (
                          (m.prev = 15),
                          (m.t0 = m.catch(1)),
                          m.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to fetch the Feature Gates client values, error: ".concat(
                                m.t0 === null || m.t0 === void 0 ? void 0 : m.t0.message,
                              ),
                            ),
                          console.warn("Initialising Statsig client without values"),
                          (m.next = 21),
                          this.initFromValues(c, i, s)
                        );
                      case 21:
                        throw m.t0;
                      case 22:
                        return m.abrupt("return", this.initFromValues(c, i, u, l));
                      case 23:
                      case "end":
                        return m.stop();
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
          var t = me(
            z.mark(function n(a, o, i) {
              var s,
                c,
                l,
                u,
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
                          (c = h.length > 3 && h[3] !== void 0 ? h[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = o),
                          (this.currentAttributes = i),
                          (l = By(a)),
                          l.sdkKey || (l.sdkKey = Ru),
                          ((s = l.networkConfig) !== null && s !== void 0 && s.logEventUrl) ||
                            (l.networkConfig = or(
                              or({}, l.networkConfig),
                              {},
                              { logEventUrl: l_ },
                            )),
                          l.perimeter === Ca.FEDRAMP_MODERATE && (l.disableLogging = !0),
                          (u = l.sdkKey),
                          (d = l.environment),
                          l.updateUserCompletionCallback,
                          l.perimeter,
                          (f = Q(l, c_)),
                          (this.user = yu(o, i)),
                          (p = or(
                            or({}, f),
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
                          this.dataAdapter.setBootstrapData(c),
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
                          (this.statsigClient = new gt.StatsigClient(Ru, this.user, p)),
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
          var t = me(
            z.mark(function n(a, o, i) {
              var s = this,
                c,
                l,
                u;
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
                          (c = this.initPromise),
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
                            me(
                              z.mark(function p() {
                                return z.wrap(function (v) {
                                  for (;;)
                                    switch ((v.prev = v.next)) {
                                      case 0:
                                        if (((s.initPromise = c), !s.provider)) {
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
          var t = me(
            z.mark(function n(a, o, i) {
              var s, c, l, u, d, f, p, h, v;
              return z.wrap(
                function (m) {
                  for (;;)
                    switch ((m.prev = m.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (m.prev = 1),
                          (m.next = 4),
                          a
                        );
                      case 4:
                        ((l = m.sent), (u = yu(o, l.customAttributesFromFetch)), (m.next = 13));
                        break;
                      case 8:
                        throw (
                          (m.prev = 8),
                          (m.t0 = m.catch(1)),
                          (p = m.t0 instanceof Error ? m.t0.message : JSON.stringify(m.t0)),
                          (d = (f = this.initOptions).updateUserCompletionCallback) === null ||
                            d === void 0 ||
                            d.call(f, !1, p),
                          m.t0
                        );
                      case 13:
                        if (
                          ((h = !0),
                          (v = null),
                          (m.prev = 15),
                          this.dataAdapter.setBootstrapData(l.experimentValues),
                          (this.user = u),
                          !this.user)
                        ) {
                          m.next = 21;
                          break;
                        }
                        return ((m.next = 21), this.statsigClient.updateUserAsync(this.user));
                      case 21:
                        m.next = 27;
                        break;
                      case 23:
                        ((m.prev = 23), (m.t1 = m.catch(15)), (h = !1), (v = String(m.t1)));
                      case 27:
                        if (
                          ((s = this.initOptions) === null ||
                            s === void 0 ||
                            (c = s.updateUserCompletionCallback) === null ||
                            c === void 0 ||
                            c.call(s, h, v),
                          !h)
                        ) {
                          m.next = 34;
                          break;
                        }
                        ((this.currentIdentifiers = o),
                          (this.currentAttributes = i),
                          this.subscriptions.anyUpdated(),
                          (m.next = 35));
                        break;
                      case 34:
                        throw new Error("Failed to update user. An unexpected error occured.");
                      case 35:
                      case "end":
                        return m.stop();
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
          return Zr;
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
            return wu.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !o }));
          } catch (i) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: i,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              wu.fromLayer(gt._makeLayer(r, { reason: "Error" }, null))
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
            var s = o.typeGuard;
            return i.get(n, a, s);
          } catch (c) {
            return (
              this.hasGetLayerValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer value. Only the first occurrence of this error is logged.",
                  layerName: r,
                  defaultValue: a,
                  options: o,
                  error: c,
                }),
                (this.hasGetLayerValueErrorOccurred = !0)),
              a
            );
          }
        },
      },
    ]);
  })(),
  M,
  K = (function () {
    function e() {
      pe(this, e);
    }
    return he(e, null, [
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
M = K;
C(K, "client", new u_());
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
    M.hasCheckGateErrorOccurred ||
      (console.warn({
        msg: "An error has occurred checking the feature gate from criterion override. Only the first occurrence of this error is logged.",
        gateName: e,
        error: n,
      }),
      (M.hasCheckGateErrorOccurred = !0));
  }
  return M.client.checkGate(e, t);
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
      M.hasGetExperimentValueErrorOccurred ||
        (console.warn({
          msg: "An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.",
          experimentName: e,
          defaultValue: r,
          options: n,
          error: o,
        }),
        (M.hasGetExperimentValueErrorOccurred = !0)),
      r
    );
  }
  return M.client.getExperimentValue(e, t, r, n);
});
C(K, "initializeCalled", M.client.initializeCalled.bind(M.client));
C(K, "initializeCompleted", M.client.initializeCompleted.bind(M.client));
C(K, "initialize", M.client.initialize.bind(M.client));
C(K, "initializeWithProvider", M.client.initializeWithProvider.bind(M.client));
C(K, "initializeFromValues", M.client.initializeFromValues.bind(M.client));
C(K, "manuallyLogGateExposure", M.client.manuallyLogGateExposure.bind(M.client));
C(K, "getExperiment", M.client.getExperiment.bind(M.client));
C(K, "manuallyLogExperimentExposure", M.client.manuallyLogExperimentExposure.bind(M.client));
C(K, "manuallyLogLayerExposure", M.client.manuallyLogLayerExposure.bind(M.client));
C(K, "shutdownStatsig", M.client.shutdownStatsig.bind(M.client));
C(K, "overrideGate", M.client.overrideGate.bind(M.client));
C(K, "clearGateOverride", M.client.clearGateOverride.bind(M.client));
C(K, "overrideConfig", M.client.overrideConfig.bind(M.client));
C(K, "clearConfigOverride", M.client.clearConfigOverride.bind(M.client));
C(K, "setOverrides", M.client.setOverrides.bind(M.client));
C(K, "getOverrides", M.client.getOverrides.bind(M.client));
C(K, "clearAllOverrides", M.client.clearAllOverrides.bind(M.client));
C(K, "isCurrentUser", M.client.isCurrentUser.bind(M.client));
C(K, "onGateUpdated", M.client.onGateUpdated.bind(M.client));
C(K, "onExperimentValueUpdated", M.client.onExperimentValueUpdated.bind(M.client));
C(K, "onAnyUpdated", M.client.onAnyUpdated.bind(M.client));
C(K, "updateUser", M.client.updateUser.bind(M.client));
C(K, "updateUserWithProvider", M.client.updateUserWithProvider.bind(M.client));
C(K, "updateUserWithValues", M.client.updateUserWithValues.bind(M.client));
C(K, "getPackageVersion", M.client.getPackageVersion.bind(M.client));
C(K, "getLayer", M.client.getLayer.bind(M.client));
C(K, "getLayerValue", M.client.getLayerValue.bind(M.client));
var Ps = K;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = K;
  else {
    var Ya, Ki;
    Ps = window.__FEATUREGATES_JS__;
    var Au =
      ((Ya = Ps) === null || Ya === void 0 || (Ki = Ya.getPackageVersion) === null || Ki === void 0
        ? void 0
        : Ki.call(Ya)) || "4.10.0 or earlier";
    if (Au !== Zr) {
      var d_ = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(Au, " when module version ")
        .concat(Zr, " was loading.");
      console.warn(d_);
    }
  }
var Fr,
  zr,
  f_ =
    (globalThis == null ||
    (Fr = globalThis.process) === null ||
    Fr === void 0 ||
    (Fr = Fr.env) === null ||
    Fr === void 0
      ? void 0
      : Fr.JEST_WORKER_ID) !== void 0,
  v_ =
    !f_ &&
    (globalThis == null ||
    (zr = globalThis.process) === null ||
    zr === void 0 ||
    (zr = zr.env) === null ||
    zr === void 0
      ? void 0
      : zr.NODE_ENV) !== "production",
  p_ = function () {
    var t;
    v_ && (t = console).debug.apply(t, arguments);
  },
  Qs = {},
  h_ = "@atlaskit/platform-feature-flags",
  ha = "__PLATFORM_FEATURE_FLAGS__",
  bp = typeof process < "u" && typeof Qs < "u",
  g_ = bp ? Qs.ENABLE_PLATFORM_FF === "true" : !1,
  b_ = bp ? Qs.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  m_ = g_ || b_,
  y_ = { booleanResolver: void 0 },
  ga = typeof window < "u" ? window : globalThis;
ga[ha] = ga[ha] || y_;
function __(e) {
  if (m_)
    return (
      p_(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        h_,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = ga[ha]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = ga[ha]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return Ps.checkGate(e);
    var a = (n = ga[ha]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function de(e) {
  return __(e);
}
var w_ = b.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  k_ = function () {
    return b.useContext(w_);
  },
  Co = function (t) {
    var r = b.useRef(t);
    return ((r.current = t), r);
  };
function O_(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function S_(e, t) {
  var r = b.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = b.useRef(!0),
    a = b.useRef(r),
    o = n.current || !!(t && a.current.inputs && O_(t, a.current.inputs)),
    i = o ? a.current : { inputs: t, result: e() };
  return (
    b.useEffect(
      function () {
        ((n.current = !1), (a.current = i));
      },
      [i],
    ),
    i.result
  );
}
function x_(e, t) {
  return S_(function () {
    return e;
  }, t);
}
function mp() {
  var e = k_(),
    t = x_(
      function (r) {
        return new my({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function Iu(e, t) {
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
function E_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Iu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Iu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function rn(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    o = e.packageName,
    i = e.packageVersion,
    s = e.analyticsData,
    c = mp(),
    l = c.createAnalyticsEvent,
    u = Co(s),
    d = Co(t),
    f = b.useCallback(
      function (p) {
        var h = l({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: o, packageVersion: i },
          }),
          v = E_({ componentName: n, packageName: o, packageVersion: i }, u.current);
        h.context.push(v);
        var g = h.clone();
        (g && g.fire("atlaskit"), d.current(p, h));
      },
      [r, n, a, o, i, l, u, d],
    );
  return f;
}
function ju(e, t) {
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
function C_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ju(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ju(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Du(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    o = e.packageVersion,
    i = e.analyticsData,
    s = mp(),
    c = s.createAnalyticsEvent,
    l = Co(i),
    u = Co(t),
    d = b.useCallback(
      function () {
        var f = c({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          p = C_({ componentName: n, packageName: a, packageVersion: o }, l.current);
        f.context.push(p);
        var h = f.clone();
        (h && h.fire("atlaskit"), u.current(f));
      },
      [r, n, a, o, c, l, u],
    );
  return d;
}
var Cr = "ASC",
  Po = "DESC",
  P_ = "small",
  Ro = "large",
  yp = 0.22;
const R_ = 5;
function R(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, R_) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function ye(e, t, r) {
  return e ?? "var(--c-, )";
}
var Tu = "#FF5630",
  Mu = "#DE350B",
  qr = "#BF2600",
  Nu = "#FFC400",
  Lu = "#FFAB00",
  Ur = "#FF991F",
  _p = "#DEEBFF",
  ua = "#B3D4FF",
  Ao = "#4C9AFF",
  $u = "#2684FF",
  Bu = "#0065FF",
  Ct = "#0052CC",
  Rs = "#0747A6",
  Yt = "#FFFFFF",
  A_ = "#FAFBFC",
  Le = "#F4F5F7",
  I_ = "#EBECF0",
  As = "#DFE1E6",
  br = "#A5ADBA",
  j_ = "#8993A4",
  D_ = "#6B778C",
  Fu = "#5E6C84",
  T_ = "#505F79",
  nn = "#42526E",
  ot = "#253858",
  _r = "#172B4D",
  Gn = "rgba(9, 30, 66, 0.04)",
  Is = "rgba(9, 30, 66, 0.08)",
  Ux = "rgba(9, 30, 66, 0.25)",
  Vx = "rgba(9, 30, 66, 0.31)",
  ht = "#9FB0CC",
  M_ = "#8C9CB8",
  Yi = "#67758F",
  Hn = "#3B475C",
  zu = "#313D52",
  Wn = "#1B2638",
  Vr = "#0D1424",
  N_ = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"];
function qu(e, t) {
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
function Uu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : qu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var L_ = b.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      o = e.testId,
      i = e.isLoading,
      s = Q(e, N_);
    return b.createElement(
      "table",
      W({ inert: i ? "" : void 0, ref: t }, s, {
        "data-testid": o && "".concat(o, "--table"),
        className: R([
          "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
          r && "_1kqm1n9t",
          n && "_179r1tpy",
        ]),
        style: Uu(
          Uu(
            {},
            {
              "--local-dynamic-table-hover-bg":
                "var(--ds-background-neutral-subtle-hovered, ".concat(A_, ")"),
              "--local-dynamic-table-highlighted-bg": "var(--ds-background-selected, ".concat(
                _p,
                ")",
              ),
              "--local-dynamic-table-hover-highlighted-bg":
                "var(--ds-background-selected-hovered, ".concat(ua, ")"),
              "--local-dynamic-table-row-focus-outline": "var(--ds-border-focused, ".concat(
                Ao,
                ")",
              ),
            },
          ),
          {},
          {
            "--_mwqor1": ye(
              "var(--ds-border-width-selected, 2px)".concat(
                " solid ",
                "var(--ds-border, ".concat(As, ")"),
              ),
            ),
          },
        ),
      }),
      a,
    );
  }),
  $_ = function (t) {
    var r = t.children;
    return b.createElement(
      "caption",
      { className: R(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  B_ = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: R(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  F_ = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: R(["_4t3i1jdh"]),
      },
      r,
    );
  },
  z_ = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
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
  q_ = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function Vu(e, t) {
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
function Gu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function U_(e, t, r) {
  return (
    (t = J(t)),
    qe(e, wp() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
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
var Hu = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var o;
      if (r.cells[a] && ((o = r.cells[a]) === null || o === void 0 ? void 0 : o.key) === n) {
        var i;
        return (i = t[a]) === null || i === void 0 ? void 0 : i.key;
      }
    }
  },
  V_ = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var o = a === Cr ? 1 : -1,
      i = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      s = Array.from(r);
    return s.sort(function (c, l) {
      var u = Hu(c.cells, t, n),
        d = Hu(l.cells, t, n);
      if (u === void 0 || d === void 0) return o;
      if (Fe(u) !== Fe(d)) {
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
function G_(e) {
  var t = (function (r) {
    function n() {
      var a;
      pe(this, n);
      for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
      return ((a = U_(this, n, [].concat(i))), C(a, "state", { pageRows: [] }), a);
    }
    return (
      Ue(n, r),
      he(
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
              var s = o.forwardedRef,
                c = Q(o, q_);
              return O.createElement(
                e,
                W({ pageRows: this.state.pageRows, head: i }, c, { ref: s }),
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (o, i) {
              var s = o.rows,
                c = o.head,
                l = o.sortKey,
                u = o.sortOrder,
                d = o.page,
                f = o.rowsPerPage,
                p = o.isTotalPagesControlledExternally;
              xo(l, c);
              var h, v;
              return (
                p ? ((h = s), (v = s)) : ((h = V_(c, s, l, u) || []), (v = np(h, d, f))),
                Gu(Gu({}, i), {}, { pageRows: v })
              );
            },
          },
        ],
      )
    );
  })(O.Component);
  return O.forwardRef(function (r, n) {
    return O.createElement(t, W({}, r, { forwardedRef: n }));
  });
}
var H_ = "--local-dynamic-table-width",
  kp = function (t) {
    var r = t.width;
    return typeof r < "u" ? C({}, H_, "".concat(r, "%")) : void 0;
  },
  W_ = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  K_ = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      o = t.innerRef,
      i = Q(t, W_);
    return b.createElement(
      "td",
      W(
        {
          style: kp({ width: r }),
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
  Y_ = ["isHighlighted", "children", "style", "testId", "className"];
function Wu(e, t) {
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
function Ku(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var J_ = b.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      o = e.testId,
      i = e.className,
      s = Q(e, Y_);
    return b.createElement(
      "tr",
      W(
        {
          className: R([
            "_bfhkqtfy _1ygb1i4z _1ah312gs",
            r ? "_bfhktkjs _irr31ae3" : "_irr3s8ts",
            i,
          ]),
        },
        s,
        {
          ref: t,
          "data-testid": o,
          style: Ku(
            Ku({}, a),
            {},
            {
              "--_4vkylo": ye(
                "var(--ds-border-width-focused, 2px)".concat(
                  " solid ",
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
  X_ = ["cells"],
  Z_ = ["content", "testId"],
  Q_ = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      o = t.isFixedSize,
      i = t.isHighlighted,
      s = r.cells,
      c = Q(r, X_);
    return O.createElement(
      J_,
      W(
        {},
        c,
        { isHighlighted: i },
        i ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(c.key)) },
      ),
      s.map(function (l, u) {
        var d = l.content,
          f = l.testId,
          p = Q(l, Z_),
          h = (n || { cells: [] }).cells[u] || {},
          v = h.shouldTruncate,
          g = h.width;
        return O.createElement(
          K_,
          W({ "data-testid": f || (a && "".concat(a, "--cell-").concat(u)) }, p, {
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
function e0(e, t, r) {
  return (
    (t = J(t)),
    qe(e, Op() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
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
var t0 = (function (e) {
    function t() {
      return (pe(this, t), e0(this, t, arguments));
    }
    return (
      Ue(t, e),
      he(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.pageRows,
              o = n.head,
              i = n.isFixedSize,
              s = n.highlightedRowIndex,
              c = n.testId,
              l = n.forwardedRef;
            return O.createElement(
              "tbody",
              { "data-testid": c && "".concat(c, "--body"), ref: l },
              a.map(function (u, d) {
                return O.createElement(Q_, {
                  head: o,
                  isFixedSize: i,
                  key: u.key || d,
                  row: u,
                  isHighlighted:
                    u.isHighlighted ||
                    (!!s && (typeof s == "number" ? s === d : s.indexOf(d) > -1)),
                  testId: c,
                });
              }),
            );
          },
        },
      ])
    );
  })(O.Component),
  r0 = G_(
    O.forwardRef(function (e, t) {
      return O.createElement(t0, W({}, e, { forwardedRef: t }));
    }),
  );
function n0(e, t, r) {
  return (
    (t = J(t)),
    qe(e, Sp() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
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
var a0 = (function (e) {
  function t(r) {
    var n;
    return (pe(this, t), (n = n0(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    Ue(t, e),
    he(
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
const ec = b.createContext(null);
var o0 = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function i0(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(nn, ")")
    : "var(--ds-icon-inverse, ".concat(Yt, ")");
}
var Ja = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  s0 = typeof window > "u" ? b.useEffect : b.useLayoutEffect,
  tc = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "inherit" : n,
        o = t.delay,
        i = o === void 0 ? 0 : o,
        s = t.interactionName,
        c = t.label,
        l = t.size,
        u = l === void 0 ? "medium" : l,
        d = t.testId,
        f = typeof u == "number" ? u : o0[u],
        p = "".concat(i, "ms"),
        h = i0(a),
        v = b.useContext(ec);
      return (
        s0(
          function () {
            if (v != null) return v.hold(s);
          },
          [v, s],
        ),
        O.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: p, width: f, height: f },
            className: R([Ja.wrapperStyles, Ja.rotateStyles]),
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
              "aria-label": c || void 0,
              style: { animationDelay: p },
              role: c ? "img" : "none",
              className: R([Ja.loadInStyles]),
            },
            O.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: R([Ja.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function Yu(e, t) {
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
function Ju(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Yu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Xu = "--contents-opacity",
  c0 = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: R(["_kqswh2mm"]) },
      r,
    );
  },
  l0 = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: R(["_tzy47hfw _lcxvglyw"]),
        style: Ju(Ju({}, C({}, Xu, n)), {}, { "--_cnddr8": ye("var(".concat(Xu, ")")) }),
      },
      r,
    );
  },
  u0 = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function d0(e, t, r) {
  return (
    (t = J(t)),
    qe(e, xp() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
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
var Ep = (function (e) {
  function t() {
    return (pe(this, t), d0(this, t, arguments));
  }
  return (
    Ue(t, e),
    he(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            a = n.children,
            o = n.isLoading,
            i = n.spinnerSize,
            s = n.contentsOpacity,
            c = n.testId,
            l = n.loadingLabel;
          return O.createElement(
            c0,
            { testId: c },
            o ? O.createElement(l0, { contentsOpacity: s, testId: c }, a) : a,
            o &&
              O.createElement(
                u0,
                { testId: c },
                O.createElement(tc, {
                  size: i,
                  testId: c && "".concat(c, "--loadingSpinner"),
                  label: l,
                }),
              ),
          );
        },
      },
    ])
  );
})(O.Component);
C(Ep, "defaultProps", {
  isLoading: !0,
  spinnerSize: Ro,
  contentsOpacity: yp,
  loadingLabel: "Loading table",
});
var f0 = ["children", "testId"],
  v0 = b.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = Q(e, f0);
    return b.createElement(
      "div",
      W({}, a, { "data-testid": n, ref: t, className: R(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  p0 = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  h0 = b.forwardRef(function (e, t) {
    var r = e.children;
    return b.createElement("div", { ref: t, className: R(["_kqswh2mm _152tidpf"]) }, r);
  });
function g0(e, t, r) {
  return (
    (t = J(t)),
    qe(e, Cp() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function Cp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Cp = function () {
    return !!e;
  })();
}
var Pp = (function (e) {
  function t() {
    var r;
    pe(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = g0(this, t, [].concat(a))),
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
          s = i.targetRef,
          c = s?.();
        return c || r.containerRef.current;
      }),
      C(r, "hasTargetNode", function (i) {
        return !!r.getTargetNode(i);
      }),
      C(r, "isVerticallyVisible", function (i, s) {
        var c = i.top,
          l = i.bottom;
        return l <= 0 ? !1 : c < s;
      }),
      C(r, "isFullyVerticallyVisible", function (i, s) {
        var c = i.top,
          l = i.bottom;
        return c >= 0 && l <= s;
      }),
      C(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      C(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      C(r, "translateSpinner", function (i, s, c) {
        ((i.style.position = c ? "fixed" : ""),
          (i.style.transform = s !== 0 ? "translate3d(0, ".concat(s, "px, 0)") : ""));
      }),
      C(r, "updateTargetAppearance", function () {
        var i = r.getTargetNode(),
          s = r.props,
          c = s.isLoading,
          l = s.contentsOpacity;
        i &&
          i.style &&
          Fe(i.style) === "object" &&
          ((i.style.pointerEvents = c ? "none" : ""), (i.style.opacity = c ? l.toString() : ""));
      }),
      r
    );
  }
  return (
    Ue(t, e),
    he(t, [
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
            s = (n = this.spinnerRef) === null || n === void 0 ? void 0 : n.current;
          if (!(!i || typeof i.getBoundingClientRect != "function" || !s)) {
            var c = i.getBoundingClientRect(),
              l = s.getBoundingClientRect(),
              u = l.height,
              d = this.isVerticallyVisible(c, o),
              f = c.top,
              p = c.bottom,
              h = c.height;
            if (d) {
              var v = h >= u * 3;
              if (v && !this.isFullyVerticallyVisible(c, o)) {
                if (f >= 0) {
                  var g = o - f,
                    m = g / 2 + f - u / 2,
                    _ = g < u * 3 ? f + u : m;
                  this.translateSpinner(s, _, !0);
                } else if (f < 0 && p > o) {
                  var w = o / 2 - u / 2;
                  this.translateSpinner(s, w, !0);
                } else {
                  var k = p / 2 - u / 2,
                    y = k < u ? k - (u - k) : k;
                  this.translateSpinner(s, y, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(l, o)) return;
            var S = (a = this.containerRef) === null || a === void 0 ? void 0 : a.current;
            if (S && typeof S.getBoundingClientRect == "function") {
              var E = S.getBoundingClientRect().top,
                A = (f - E) / 2;
              this.translateSpinner(s, A, !1);
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
            s = n.testId,
            c = n.loadingLabel;
          return O.createElement(
            v0,
            { testId: s && "".concat(s, "--loading--container--advanced"), ref: this.containerRef },
            a,
            o &&
              O.createElement(
                p0,
                { testId: s },
                O.createElement(
                  h0,
                  { ref: this.spinnerRef },
                  O.createElement(tc, {
                    size: i,
                    testId: s && "".concat(s, "--loadingSpinner"),
                    label: c,
                  }),
                ),
              ),
          );
        },
      },
    ])
  );
})(O.Component);
C(Pp, "defaultProps", {
  isLoading: !0,
  spinnerSize: Ro,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(yp), ")"),
  loadingLabel: "Loading table",
});
function b0(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = b.useState(t),
    a = Z(n, 2),
    o = a[0],
    i = a[1],
    s = b.useRef(r);
  b.useEffect(
    function () {
      s.current = r;
    },
    [r],
  );
  var c = r ? e : o,
    l = b.useCallback(function (u) {
      s.current || i(u);
    }, []);
  return [c, l];
}
var Kn = {},
  Yn = {},
  m0 = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  y0 = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  _0 = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  w0 = { core: 16, utility: 12 },
  k0 = {
    core: {
      medium: { none: 0, compact: 4, spacious: 4 },
      small: { none: 0, compact: 2.66, spacious: 8 },
    },
    utility: {
      medium: { none: 0, compact: 2, spacious: 6 },
      small: { none: 0, compact: 2, spacious: 6 },
    },
  },
  Zu = b.memo(function (t) {
    var r,
      n = t,
      a = n.color,
      o = a === void 0 ? "currentColor" : a,
      i = n.testId,
      s = n.label,
      c = n.LEGACY_primaryColor,
      l = n.LEGACY_secondaryColor,
      u = n.LEGACY_size,
      d = n.LEGACY_fallbackIcon,
      f = n.dangerouslySetGlyph,
      p = n.shouldScale,
      h = n.LEGACY_margin,
      v = n.spacing,
      g = v === void 0 ? "none" : v,
      m = n.name,
      _ = f ? { __html: f } : void 0;
    if (d && !de("platform-visual-refresh-icons"))
      return b.createElement(d, {
        primaryColor: c ?? o,
        secondaryColor: l,
        size: u,
        label: s,
        testId: i,
        UNSAFE_margin: h,
      });
    var w = (r = t.type) !== null && r !== void 0 ? r : "core",
      k = "medium";
    if ("size" in t && t.size !== void 0) {
      if (typeof t.size == "string") k = t.size === "small" || t.size === "medium" ? t.size : k;
      else if (m) {
        var y = t.size(m);
        k = y === "small" || y === "medium" ? y : k;
      }
    }
    var S = w0[w],
      E = k0[w][k][g],
      A = S + 2 * E;
    return b.createElement(
      "span",
      {
        "data-testid": i,
        role: s ? "img" : void 0,
        "aria-label": s || void 0,
        "aria-hidden": s ? void 0 : !0,
        style: { color: o },
        className: R([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          p && "_1bsb1kw7 _4t3i1kw7",
          (w === "utility" || k === "small") && "_vwz4utpp",
        ]),
      },
      b.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - E, " ")
          .concat(0 - E, " ")
          .concat(A, " ")
          .concat(A),
        role: "presentation",
        dangerouslySetInnerHTML: _,
        className: R([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : w === "utility" ? _0[g] : k === "small" ? y0[g] : m0[g],
        ]),
      }),
    );
  });
const O0 = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Zu, default: Zu }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Xo = Us(O0);
var Qu;
function S0() {
  if (Qu) return Yn;
  ((Qu = 1), Object.defineProperty(Yn, "__esModule", { value: !0 }), (Yn.default = void 0));
  var e = r(wt()),
    t = r(Xo);
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
  return ((n.displayName = "ChevronLeftIcon"), (Yn.default = n), Yn);
}
var Jn = {};
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
function td(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ed(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ed(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var x0 = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  rd = b.memo(function (t) {
    var r = t,
      n = r.glyph,
      a = r.dangerouslySetGlyph,
      o = r.primaryColor,
      i = o === void 0 ? "currentColor" : o,
      s = r.secondaryColor,
      c = r.size,
      l = r.testId,
      u = r.label,
      d = r.width,
      f = r.height,
      p = r.UNSAFE_margin,
      h = a
        ? { dangerouslySetInnerHTML: { __html: a } }
        : { children: n ? b.createElement(n, { role: "presentation" }) : null },
      v = d && f ? { width: d + "px", height: f + "px" } : null;
    return b.createElement(
      "span",
      W(
        {
          "data-testid": l,
          "data-vc": "icon-".concat(l),
          role: u ? "img" : void 0,
          "aria-label": u || void 0,
          "aria-hidden": u ? void 0 : !0,
          style: td(
            td({}, v),
            {},
            { "--icon-primary-color": i, "--icon-secondary-color": s, margin: p },
          ),
        },
        h,
        {
          className: R([
            "_1e0c1o8l _1o9zidpf _vyfuvuon _vwz4kb7n _1szv15vq _1tly15vq _rzyw1osq _17jb1osq _1ksvoz0e _3se1x1jp _re2rglyw _1veoyfq0 _1kg81r31",
            "_jcxd1r8n _gq0g1onz _1trkwc43",
            i === s && "_18hbwc43",
            s === "transparent" && "_4fyi1j28",
            c && x0[c],
          ]),
        },
      ),
    );
  });
const E0 = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: rd, default: rd }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Rp = Us(E0);
var nd;
function C0() {
  if (nd) return Jn;
  ((nd = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.default = void 0));
  var e = r(wt()),
    t = Rp;
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
  return ((n.displayName = "ChevronLeftLargeIcon"), (Jn.default = n), Jn);
}
var ad;
function P0() {
  if (ad) return Kn;
  ((ad = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.default = void 0));
  var e = n(wt()),
    t = n(S0()),
    r = n(C0());
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  const a = (o) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronLeftIcon", LEGACY_fallbackIcon: r.default }, o),
    );
  return ((a.displayName = "ChevronLeftIconMigration"), (Kn.default = a), Kn);
}
var R0 = P0();
const A0 = ur(R0);
var Xn = {},
  Zn = {},
  od;
function I0() {
  if (od) return Zn;
  ((od = 1), Object.defineProperty(Zn, "__esModule", { value: !0 }), (Zn.default = void 0));
  var e = r(wt()),
    t = r(Xo);
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
  return ((n.displayName = "ChevronRightIcon"), (Zn.default = n), Zn);
}
var Qn = {},
  id;
function j0() {
  if (id) return Qn;
  ((id = 1), Object.defineProperty(Qn, "__esModule", { value: !0 }), (Qn.default = void 0));
  var e = r(wt()),
    t = Rp;
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
var sd;
function D0() {
  if (sd) return Xn;
  ((sd = 1), Object.defineProperty(Xn, "__esModule", { value: !0 }), (Xn.default = void 0));
  var e = n(wt()),
    t = n(I0()),
    r = n(j0());
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  const a = (o) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronRightIcon", LEGACY_fallbackIcon: r.default }, o),
    );
  return ((a.displayName = "ChevronRightIconMigration"), (Xn.default = a), Xn);
}
var T0 = D0();
const M0 = ur(T0);
var rc = b.createContext("elevation.surface"),
  N0 = function () {
    return b.useContext(rc);
  };
rc.displayName = "SurfaceProvider";
var L0 = [
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
  $0 = ["className"],
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
  Ap = {
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
  F0 = {
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
  z0 = {
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
  q0 = {
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
  U0 = {
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
  Zo = b.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "div" : r,
      a = e.children,
      o = e.backgroundColor,
      i = e.padding,
      s = e.paddingBlock,
      c = s === void 0 ? i : s,
      l = e.paddingBlockStart,
      u = l === void 0 ? c : l,
      d = e.paddingBlockEnd,
      f = d === void 0 ? c : d,
      p = e.paddingInline,
      h = p === void 0 ? i : p,
      v = e.paddingInlineStart,
      g = v === void 0 ? h : v,
      m = e.paddingInlineEnd,
      _ = m === void 0 ? h : m,
      w = e.style,
      k = e.testId,
      y = e.xcss,
      S = Q(e, L0);
    S.className;
    var E = Q(S, $0),
      A = b.createElement(
        n,
        W(
          {
            style: w,
            ref: t,
            className: R([
              "_19itglyw _vchhusvi _r06hglyw",
              o && B0[o],
              o && V0(o) && Ap[o],
              u && F0[u],
              f && z0[f],
              g && q0[g],
              _ && U0[_],
              y,
            ]),
          },
          E,
          { "data-testid": k },
        ),
        a,
      );
    return o ? b.createElement(rc.Provider, { value: o }, A) : A;
  });
function V0(e) {
  return e in Ap;
}
const Ji = () =>
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
  Ip = (...e) => R(e);
function G0() {
  return {
    css() {
      throw Ji();
    },
    cssMap() {
      throw Ji();
    },
    cx: Ip,
    XCSSProp() {
      throw Ji();
    },
  };
}
var H0 = G0(),
  jp = H0.cx,
  W0 = [
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
  cd = {
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
  ld = {
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
  K0 = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  Y0 = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  J0 = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  X0 = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  Z0 = { root: "_1e0c1txw _vchhusvi" },
  Io = b.memo(
    b.forwardRef(function (e, t) {
      var r = e.as,
        n = r === void 0 ? "div" : r,
        a = e.role,
        o = e.alignItems,
        i = e.justifyContent,
        s = e.gap,
        c = e.columnGap,
        l = e.rowGap,
        u = e.children,
        d = e.testId,
        f = e.direction,
        p = e.wrap,
        h = e.xcss,
        v = Q(e, W0);
      return b.createElement(
        n,
        W({}, v, {
          role: a,
          className: R([
            Z0.root,
            s && ld[s],
            c && ld[c],
            s && cd[s],
            l && cd[l],
            o && X0[o],
            f && Y0[f],
            i && K0[i],
            p && J0[p],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        u,
      );
    }),
  );
Io.displayName = "Flex";
var Q0 = [
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
  js = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  ew = function (t) {
    var r = t.children;
    return b.createElement("span", { className: R([js.separator]) }, r);
  },
  so = b.memo(
    b.forwardRef(function (e, t) {
      var r = e.as,
        n = e.alignInline,
        a = e.alignBlock,
        o = a === void 0 ? "start" : a,
        i = e.shouldWrap,
        s = i === void 0 ? !1 : i,
        c = e.spread,
        l = e.grow,
        u = e.space,
        d = e.rowSpace,
        f = e.separator,
        p = e.xcss,
        h = e.testId,
        v = e.role,
        g = e.children,
        m = Q(e, Q0),
        _ = typeof f == "string" ? b.createElement(ew, null, f) : f,
        w = _
          ? b.Children.toArray(g)
              .filter(Boolean)
              .map(function (k, y) {
                return b.createElement(b.Fragment, { key: y }, f && y > 0 ? _ : null, k);
              })
          : g;
      return b.createElement(
        Io,
        W({}, m, {
          as: r,
          role: v,
          alignItems: o,
          justifyContent: c || n,
          direction: "row",
          gap: u,
          rowGap: d,
          wrap: s ? "wrap" : void 0,
          xcss: jp(l === "hug" && js.hug, l === "fill" && js.fill, p),
          testId: h,
          ref: t,
        }),
        w,
      );
    }),
  );
so.displayName = "Inline";
var tw = "Invariant failed";
function rw(e, t) {
  if (!e) throw new Error(tw);
}
var Dp = b.createContext(!1),
  nw = function () {
    return b.useContext(Dp);
  },
  aw = Dp.Provider,
  ow = ["span", "p", "strong", "em"],
  iw = function (t, r) {
    var n = N0();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return ud.hasOwnProperty(n) ? ud[n] : "color.text";
    }
  },
  Gr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  sw = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  cw = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  lw = {
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
  ud = {
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
  Tp = b.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "span" : r,
      a = e.color,
      o = e.align,
      i = e.testId,
      s = e.id,
      c = e.size,
      l = e.weight,
      u = e.maxLines,
      d = e.xcss,
      f = e.children;
    rw(ow.includes(n));
    var p = nw(),
      h = iw(a, p);
    !c && !p && (c = "medium");
    var v = b.createElement(
      n,
      {
        id: s,
        className: R([
          Gr.root,
          c && sw[c],
          h && lw[h],
          u && Gr.truncation,
          u === 1 && Gr.breakAll,
          o && Gr["textAlign.".concat(o)],
          l && cw[l],
          n === "em" && Gr["as.em"],
          n === "strong" && Gr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: u },
        "data-testid": i,
        ref: t,
      },
      f,
    );
    return p ? v : b.createElement(aw, { value: !0 }, v);
  });
function uw() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var dw = ["as", "children", "isInset", "testId", "style", "xcss"],
  fw = ["className"],
  nc = b.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      o = e.isInset,
      i = e.testId,
      s = e.style,
      c = e.xcss,
      l = Q(e, dw);
    l.className;
    var u = Q(l, fw);
    return b.createElement(
      n,
      W({}, u, {
        ref: t,
        className: R([
          "_mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          o && "_1ah31gjf _2mwq1gjf",
          de("platform_dst_compiled_primitives_outline_reset") && "_ymio1r31 _ypr0glyw _zcxs1o36",
          c,
        ]),
        style: s,
        "data-testid": i,
      }),
      a,
    );
  }),
  vw = [
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
  pw = ["className"],
  dd = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  Mp = b.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      o = a === void 0 ? "button" : a,
      i = e.onClick,
      s = i === void 0 ? Ae : i,
      c = e.interactionName,
      l = e.componentName,
      u = e.analyticsContext,
      d = e.style,
      f = e.testId,
      p = e.xcss,
      h = e.tabIndex,
      v = Q(e, vw),
      g = b.useContext(ec),
      m = b.useCallback(
        function (k, y) {
          (g && g.tracePress(c, k.timeStamp), s(k, y));
        },
        [s, g, c],
      ),
      _ = rn({
        fn: m,
        action: "clicked",
        componentName: l || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: u,
        actionSubject: "button",
      });
    v.className;
    var w = Q(v, pw);
    return b.createElement(
      nc,
      W({ as: "button", tabIndex: h ?? (uw() && !n ? 0 : void 0), style: d }, w, {
        type: o,
        onClick: _,
        disabled: n,
        xcss: Ip(dd.root, n && dd.disabled, p),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  Xi = {},
  ea = {},
  fd;
function Np() {
  if (fd) return ea;
  ((fd = 1), Object.defineProperty(ea, "__esModule", { value: !0 }), (ea.bind = void 0));
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
  return ((ea.bind = e), ea);
}
var mr = {},
  vd;
function hw() {
  if (vd) return mr;
  vd = 1;
  var e =
    (mr && mr.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (o) {
            for (var i, s = 1, c = arguments.length; s < c; s++) {
              i = arguments[s];
              for (var l in i) Object.prototype.hasOwnProperty.call(i, l) && (o[l] = i[l]);
            }
            return o;
          }),
        e.apply(this, arguments)
      );
    };
  (Object.defineProperty(mr, "__esModule", { value: !0 }), (mr.bindAll = void 0));
  var t = Np();
  function r(o) {
    if (!(typeof o > "u")) return typeof o == "boolean" ? { capture: o } : o;
  }
  function n(o, i) {
    if (i == null) return o;
    var s = e(e({}, o), { options: e(e({}, r(i)), r(o.options)) });
    return s;
  }
  function a(o, i, s) {
    var c = i.map(function (l) {
      var u = n(l, s);
      return (0, t.bind)(o, u);
    });
    return function () {
      c.forEach(function (u) {
        return u();
      });
    };
  }
  return ((mr.bindAll = a), mr);
}
var pd;
function gw() {
  return (
    pd ||
      ((pd = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = Np();
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
      })(Xi)),
    Xi
  );
}
var Qo = gw(),
  bw = {
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
    "border.radius": "--ds-border-radius",
    "border.radius.050": "--ds-border-radius-050",
    "border.radius.100": "--ds-border-radius-100",
    "border.radius.200": "--ds-border-radius-200",
    "border.radius.300": "--ds-border-radius-300",
    "border.radius.400": "--ds-border-radius-400",
    "border.radius.circle": "--ds-border-radius-circle",
    "border.width": "--ds-border-width",
    "border.width.0": "--ds-border-width-0",
    "border.width.indicator": "--ds-border-width-indicator",
    "border.width.outline": "--ds-border-width-outline",
    "border.width.selected": "--ds-border-width-selected",
    "border.width.focused": "--ds-border-width-focused",
  },
  mw = "ds",
  yw = "--".concat(mw, "-token-not-found");
function Ht(e, t) {
  var r = bw[e];
  r || (r = yw);
  var n = t ? "var(".concat(r, ", ").concat(t, ")") : "var(".concat(r, ")");
  return n;
}
var _w = function () {
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
  Lp = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: _w() });
  },
  ww = Lp(),
  kw = b.createContext(Lp()),
  Ow = function (e) {
    return e.value++;
  },
  Sw = function (e) {
    return e ? e.prefix : "";
  },
  xw = function (e) {
    var t = e || ww,
      r = Sw(t),
      n = Ow(t),
      a = r + n,
      o = function (i) {
        return a + t.uid(i);
      };
    return { uid: a, gen: o };
  },
  $p = function () {
    var e = b.useContext(kw),
      t = b.useState(function () {
        return xw(e);
      })[0];
    return t;
  },
  Ew = function () {
    var e = $p().uid;
    return e;
  },
  Cw = function () {
    var e = $p().gen;
    return e;
  },
  Zi,
  co = (Zi = O.useId) !== null && Zi !== void 0 ? Zi : void 0;
function Bp() {
  return co && de("platform-dst-react-18-use-id")
    ? de("platform-dst-react-18-use-id-selector-safe")
      ? co().replace(/[:«»]/g, "_")
      : co()
    : "uid".concat(Ew());
}
function Pw() {
  if (co && de("platform-dst-react-18-use-id")) {
    var e = Bp();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return Cw();
}
var ac = function (t) {
    var r = t.children,
      n = t.testId,
      a = t.role,
      o = t.id;
    return b.createElement(
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
  Rw = {
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
  Aw = ["children"];
function Iw(e) {
  var t = function (s, c) {
      return s(c);
    },
    r = b.createContext(e);
  function n(i) {
    var s = b.useContext(r),
      c = s || t,
      l = c(i);
    return l;
  }
  function a(i) {
    var s = i.children,
      c = Q(i, Aw),
      l = n(c);
    return O.createElement(O.Fragment, null, s(l));
  }
  function o(i) {
    var s = b.useContext(r),
      c = i.value || t,
      l = b.useCallback(
        function (u) {
          return c(s, u);
        },
        [s, c],
      );
    return O.createElement(r.Provider, { value: l }, i.children);
  }
  return { Consumer: a, Provider: o, useTheme: n };
}
var jw = Iw(function () {
    return { mode: "light" };
  }),
  Dw = jw.useTheme;
function Tw(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Mw(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Nw = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Mw(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = Tw(a);
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
  jo = "-moz-",
  te = "-webkit-",
  Fp = "comm",
  oc = "rule",
  ic = "decl",
  Lw = "@import",
  zp = "@keyframes",
  $w = "@layer",
  Bw = Math.abs,
  ei = String.fromCharCode,
  Fw = Object.assign;
function zw(e, t) {
  return xe(e, 0) ^ 45
    ? (((((((t << 2) ^ xe(e, 0)) << 2) ^ xe(e, 1)) << 2) ^ xe(e, 2)) << 2) ^ xe(e, 3)
    : 0;
}
function qp(e) {
  return e.trim();
}
function qw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function re(e, t, r) {
  return e.replace(t, r);
}
function Ds(e, t) {
  return e.indexOf(t);
}
function xe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Pa(e, t, r) {
  return e.slice(t, r);
}
function Pt(e) {
  return e.length;
}
function sc(e) {
  return e.length;
}
function Xa(e, t) {
  return (t.push(e), e);
}
function Uw(e, t) {
  return e.map(t).join("");
}
var ti = 1,
  an = 1,
  Up = 0,
  ze = 0,
  _e = 0,
  vn = "";
function ri(e, t, r, n, a, o, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: o,
    line: ti,
    column: an,
    length: i,
    return: "",
  };
}
function ta(e, t) {
  return Fw(ri("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Vw() {
  return _e;
}
function Gw() {
  return ((_e = ze > 0 ? xe(vn, --ze) : 0), an--, _e === 10 && ((an = 1), ti--), _e);
}
function Ye() {
  return ((_e = ze < Up ? xe(vn, ze++) : 0), an++, _e === 10 && ((an = 1), ti++), _e);
}
function Mt() {
  return xe(vn, ze);
}
function lo() {
  return ze;
}
function Ba(e, t) {
  return Pa(vn, e, t);
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
function Vp(e) {
  return ((ti = an = 1), (Up = Pt((vn = e))), (ze = 0), []);
}
function Gp(e) {
  return ((vn = ""), e);
}
function uo(e) {
  return qp(Ba(ze - 1, Ts(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Hw(e) {
  for (; (_e = Mt()) && _e < 33; ) Ye();
  return Ra(e) > 2 || Ra(_e) > 3 ? "" : " ";
}
function Ww(e, t) {
  for (; --t && Ye() && !(_e < 48 || _e > 102 || (_e > 57 && _e < 65) || (_e > 70 && _e < 97)); );
  return Ba(e, lo() + (t < 6 && Mt() == 32 && Ye() == 32));
}
function Ts(e) {
  for (; Ye(); )
    switch (_e) {
      case e:
        return ze;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ts(_e);
        break;
      case 40:
        e === 41 && Ts(e);
        break;
      case 92:
        Ye();
        break;
    }
  return ze;
}
function Kw(e, t) {
  for (; Ye() && e + _e !== 57; ) if (e + _e === 84 && Mt() === 47) break;
  return "/*" + Ba(t, ze - 1) + "*" + ei(e === 47 ? e : Ye());
}
function Yw(e) {
  for (; !Ra(Mt()); ) Ye();
  return Ba(e, ze);
}
function Jw(e) {
  return Gp(fo("", null, null, null, [""], (e = Vp(e)), 0, [0], e));
}
function fo(e, t, r, n, a, o, i, s, c) {
  for (
    var l = 0,
      u = 0,
      d = i,
      f = 0,
      p = 0,
      h = 0,
      v = 1,
      g = 1,
      m = 1,
      _ = 0,
      w = "",
      k = a,
      y = o,
      S = n,
      E = w;
    g;

  )
    switch (((h = _), (_ = Ye()))) {
      case 40:
        if (h != 108 && xe(E, d - 1) == 58) {
          Ds((E += re(uo(_), "&", "&\f")), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += uo(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += Hw(h);
        break;
      case 92:
        E += Ww(lo() - 1, 7);
        continue;
      case 47:
        switch (Mt()) {
          case 42:
          case 47:
            Xa(Xw(Kw(Ye(), lo()), t, r), c);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * v:
        s[l++] = Pt(E) * m;
      case 125 * v:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            (m == -1 && (E = re(E, /\f/g, "")),
              p > 0 &&
                Pt(E) - d &&
                Xa(p > 32 ? gd(E + ";", n, r, d - 1) : gd(re(E, " ", "") + ";", n, r, d - 2), c));
            break;
          case 59:
            E += ";";
          default:
            if ((Xa((S = hd(E, t, r, l, u, a, s, w, (k = []), (y = []), d)), o), _ === 123))
              if (u === 0) fo(E, t, S, S, k, o, d, s, y);
              else
                switch (f === 99 && xe(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    fo(
                      e,
                      S,
                      S,
                      n && Xa(hd(e, S, S, 0, 0, a, s, w, a, (k = []), d), y),
                      a,
                      y,
                      d,
                      s,
                      n ? k : y,
                    );
                    break;
                  default:
                    fo(E, S, S, S, [""], y, 0, s, y);
                }
        }
        ((l = u = p = 0), (v = m = 1), (w = E = ""), (d = i));
        break;
      case 58:
        ((d = 1 + Pt(E)), (p = h));
      default:
        if (v < 1) {
          if (_ == 123) --v;
          else if (_ == 125 && v++ == 0 && Gw() == 125) continue;
        }
        switch (((E += ei(_)), _ * v)) {
          case 38:
            m = u > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            ((s[l++] = (Pt(E) - 1) * m), (m = 1));
            break;
          case 64:
            (Mt() === 45 && (E += uo(Ye())), (f = Mt()), (u = d = Pt((w = E += Yw(lo())))), _++);
            break;
          case 45:
            h === 45 && Pt(E) == 2 && (v = 0);
        }
    }
  return o;
}
function hd(e, t, r, n, a, o, i, s, c, l, u) {
  for (var d = a - 1, f = a === 0 ? o : [""], p = sc(f), h = 0, v = 0, g = 0; h < n; ++h)
    for (var m = 0, _ = Pa(e, d + 1, (d = Bw((v = i[h])))), w = e; m < p; ++m)
      (w = qp(v > 0 ? f[m] + " " + _ : re(_, /&\f/g, f[m]))) && (c[g++] = w);
  return ri(e, t, r, a === 0 ? oc : s, c, l, u);
}
function Xw(e, t, r) {
  return ri(e, t, r, Fp, ei(Vw()), Pa(e, 2, -2), 0);
}
function gd(e, t, r, n) {
  return ri(e, t, r, ic, Pa(e, 0, n), Pa(e, n + 1, -1), n);
}
function Qr(e, t) {
  for (var r = "", n = sc(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function Zw(e, t, r, n) {
  switch (e.type) {
    case $w:
      if (e.children.length) break;
    case Lw:
    case ic:
      return (e.return = e.return || e.value);
    case Fp:
      return "";
    case zp:
      return (e.return = e.value + "{" + Qr(e.children, n) + "}");
    case oc:
      e.value = e.props.join(",");
  }
  return Pt((r = Qr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function Qw(e) {
  var t = sc(e);
  return function (r, n, a, o) {
    for (var i = "", s = 0; s < t; s++) i += e[s](r, n, a, o) || "";
    return i;
  };
}
function e1(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function t1(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var r1 = function (t, r, n) {
    for (var a = 0, o = 0; (a = o), (o = Mt()), a === 38 && o === 12 && (r[n] = 1), !Ra(o); ) Ye();
    return Ba(t, ze);
  },
  n1 = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (Ra(a)) {
        case 0:
          (a === 38 && Mt() === 12 && (r[n] = 1), (t[n] += r1(ze - 1, r, n)));
          break;
        case 2:
          t[n] += uo(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = Mt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += ei(a);
      }
    while ((a = Ye()));
    return t;
  },
  a1 = function (t, r) {
    return Gp(n1(Vp(t), r));
  },
  bd = new WeakMap(),
  o1 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !bd.get(n)) && !a) {
        bd.set(t, !0);
        for (var o = [], i = a1(r, o), s = n.props, c = 0, l = 0; c < i.length; c++)
          for (var u = 0; u < s.length; u++, l++)
            t.props[l] = o[c] ? i[c].replace(/&\f/g, s[u]) : s[u] + " " + i[c];
      }
    }
  },
  i1 = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Hp(e, t) {
  switch (zw(e, t)) {
    case 5103:
      return te + "print-" + e + e;
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
      return te + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return te + e + jo + e + Re + e + e;
    case 6828:
    case 4268:
      return te + e + Re + e + e;
    case 6165:
      return te + e + Re + "flex-" + e + e;
    case 5187:
      return te + e + re(e, /(\w+).+(:[^]+)/, te + "box-$1$2" + Re + "flex-$1$2") + e;
    case 5443:
      return te + e + Re + "flex-item-" + re(e, /flex-|-self/, "") + e;
    case 4675:
      return te + e + Re + "flex-line-pack" + re(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return te + e + Re + re(e, "shrink", "negative") + e;
    case 5292:
      return te + e + Re + re(e, "basis", "preferred-size") + e;
    case 6060:
      return te + "box-" + re(e, "-grow", "") + te + e + Re + re(e, "grow", "positive") + e;
    case 4554:
      return te + re(e, /([^-])(transform)/g, "$1" + te + "$2") + e;
    case 6187:
      return re(re(re(e, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return re(e, /(image-set\([^]*)/, te + "$1$`$1");
    case 4968:
      return (
        re(
          re(e, /(.+:)(flex-)?(.*)/, te + "box-pack:$3" + Re + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        te +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return re(e, /(.+)-inline(.+)/, te + "$1$2") + e;
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
      if (Pt(e) - 1 - t > 6)
        switch (xe(e, t + 1)) {
          case 109:
            if (xe(e, t + 4) !== 45) break;
          case 102:
            return (
              re(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + te + "$2-$3$1" + jo + (xe(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Ds(e, "stretch") ? Hp(re(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (xe(e, t + 1) !== 115) break;
    case 6444:
      switch (xe(e, Pt(e) - 3 - (~Ds(e, "!important") && 10))) {
        case 107:
          return re(e, ":", ":" + te) + e;
        case 101:
          return (
            re(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                te +
                (xe(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                te +
                "$2$3$1" +
                Re +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (xe(e, t + 11)) {
        case 114:
          return te + e + Re + re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return te + e + Re + re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return te + e + Re + re(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return te + e + Re + e + e;
  }
  return e;
}
var s1 = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case ic:
          t.return = Hp(t.value, t.length);
          break;
        case zp:
          return Qr([ta(t, { value: re(t.value, "@", "@" + te) })], a);
        case oc:
          if (t.length)
            return Uw(t.props, function (o) {
              switch (qw(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Qr([ta(t, { props: [re(o, /:(read-\w+)/, ":" + jo + "$1")] })], a);
                case "::placeholder":
                  return Qr(
                    [
                      ta(t, { props: [re(o, /:(plac\w+)/, ":" + te + "input-$1")] }),
                      ta(t, { props: [re(o, /:(plac\w+)/, ":" + jo + "$1")] }),
                      ta(t, { props: [re(o, /:(plac\w+)/, Re + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  c1 = [s1],
  l1 = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (v) {
        var g = v.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || c1,
      o = {},
      i,
      s = [];
    ((i = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (v) {
          for (var g = v.getAttribute("data-emotion").split(" "), m = 1; m < g.length; m++)
            o[g[m]] = !0;
          s.push(v);
        },
      ));
    var c,
      l = [o1, i1];
    {
      var u,
        d = [
          Zw,
          e1(function (v) {
            u.insert(v);
          }),
        ],
        f = Qw(l.concat(a, d)),
        p = function (g) {
          return Qr(Jw(g), f);
        };
      c = function (g, m, _, w) {
        ((u = _), p(g ? g + "{" + m.styles + "}" : m.styles), w && (h.inserted[m.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new Nw({
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
      insert: c,
    };
    return (h.sheet.hydrate(s), h);
  },
  Qi = { exports: {} },
  ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var md;
function u1() {
  if (md) return ae;
  md = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    n = e ? Symbol.for("react.fragment") : 60107,
    a = e ? Symbol.for("react.strict_mode") : 60108,
    o = e ? Symbol.for("react.profiler") : 60114,
    i = e ? Symbol.for("react.provider") : 60109,
    s = e ? Symbol.for("react.context") : 60110,
    c = e ? Symbol.for("react.async_mode") : 60111,
    l = e ? Symbol.for("react.concurrent_mode") : 60111,
    u = e ? Symbol.for("react.forward_ref") : 60112,
    d = e ? Symbol.for("react.suspense") : 60113,
    f = e ? Symbol.for("react.suspense_list") : 60120,
    p = e ? Symbol.for("react.memo") : 60115,
    h = e ? Symbol.for("react.lazy") : 60116,
    v = e ? Symbol.for("react.block") : 60121,
    g = e ? Symbol.for("react.fundamental") : 60117,
    m = e ? Symbol.for("react.responder") : 60118,
    _ = e ? Symbol.for("react.scope") : 60119;
  function w(y) {
    if (typeof y == "object" && y !== null) {
      var S = y.$$typeof;
      switch (S) {
        case t:
          switch (((y = y.type), y)) {
            case c:
            case l:
            case n:
            case o:
            case a:
            case d:
              return y;
            default:
              switch (((y = y && y.$$typeof), y)) {
                case s:
                case u:
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
    return w(y) === l;
  }
  return (
    (ae.AsyncMode = c),
    (ae.ConcurrentMode = l),
    (ae.ContextConsumer = s),
    (ae.ContextProvider = i),
    (ae.Element = t),
    (ae.ForwardRef = u),
    (ae.Fragment = n),
    (ae.Lazy = h),
    (ae.Memo = p),
    (ae.Portal = r),
    (ae.Profiler = o),
    (ae.StrictMode = a),
    (ae.Suspense = d),
    (ae.isAsyncMode = function (y) {
      return k(y) || w(y) === c;
    }),
    (ae.isConcurrentMode = k),
    (ae.isContextConsumer = function (y) {
      return w(y) === s;
    }),
    (ae.isContextProvider = function (y) {
      return w(y) === i;
    }),
    (ae.isElement = function (y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }),
    (ae.isForwardRef = function (y) {
      return w(y) === u;
    }),
    (ae.isFragment = function (y) {
      return w(y) === n;
    }),
    (ae.isLazy = function (y) {
      return w(y) === h;
    }),
    (ae.isMemo = function (y) {
      return w(y) === p;
    }),
    (ae.isPortal = function (y) {
      return w(y) === r;
    }),
    (ae.isProfiler = function (y) {
      return w(y) === o;
    }),
    (ae.isStrictMode = function (y) {
      return w(y) === a;
    }),
    (ae.isSuspense = function (y) {
      return w(y) === d;
    }),
    (ae.isValidElementType = function (y) {
      return (
        typeof y == "string" ||
        typeof y == "function" ||
        y === n ||
        y === l ||
        y === o ||
        y === a ||
        y === d ||
        y === f ||
        (typeof y == "object" &&
          y !== null &&
          (y.$$typeof === h ||
            y.$$typeof === p ||
            y.$$typeof === i ||
            y.$$typeof === s ||
            y.$$typeof === u ||
            y.$$typeof === g ||
            y.$$typeof === m ||
            y.$$typeof === _ ||
            y.$$typeof === v))
      );
    }),
    (ae.typeOf = w),
    ae
  );
}
var yd;
function d1() {
  return (yd || ((yd = 1), (Qi.exports = u1())), Qi.exports);
}
var es, _d;
function f1() {
  if (_d) return es;
  _d = 1;
  var e = d1(),
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
  var s = Object.defineProperty,
    c = Object.getOwnPropertyNames,
    l = Object.getOwnPropertySymbols,
    u = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    f = Object.prototype;
  function p(h, v, g) {
    if (typeof v != "string") {
      if (f) {
        var m = d(v);
        m && m !== f && p(h, m, g);
      }
      var _ = c(v);
      l && (_ = _.concat(l(v)));
      for (var w = i(h), k = i(v), y = 0; y < _.length; ++y) {
        var S = _[y];
        if (!r[S] && !(g && g[S]) && !(k && k[S]) && !(w && w[S])) {
          var E = u(v, S);
          try {
            s(h, S, E);
          } catch {}
        }
      }
    }
    return h;
  }
  return ((es = p), es);
}
f1();
var v1 = !0;
function Wp(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var cc = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || v1 === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  Kp = function (t, r, n) {
    cc(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do (t.insert(r === o ? "." + a : "", o, t.sheet, !0), (o = o.next));
      while (o !== void 0);
    }
  };
function p1(e) {
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
var h1 = {
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
  g1 = /[A-Z]|^ms/g,
  b1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Yp = function (t) {
    return t.charCodeAt(1) === 45;
  },
  wd = function (t) {
    return t != null && typeof t != "boolean";
  },
  ts = t1(function (e) {
    return Yp(e) ? e : e.replace(g1, "-$&").toLowerCase();
  }),
  kd = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(b1, function (n, a, o) {
            return ((Rt = { name: a, styles: o, next: Rt }), a);
          });
    }
    return h1[t] !== 1 && !Yp(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
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
      if (a.anim === 1) return ((Rt = { name: a.name, styles: a.styles, next: Rt }), a.name);
      var o = r;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; )
            ((Rt = { name: i.name, styles: i.styles, next: Rt }), (i = i.next));
        var s = o.styles + ";";
        return s;
      }
      return m1(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = Rt,
          l = r(e);
        return ((Rt = c), Aa(e, t, l));
      }
      break;
    }
  }
  var u = r;
  if (t == null) return u;
  var d = t[u];
  return d !== void 0 ? d : u;
}
function m1(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += Aa(e, t, r[a]) + ";";
  else
    for (var o in r) {
      var i = r[o];
      if (typeof i != "object") {
        var s = i;
        t != null && t[s] !== void 0
          ? (n += o + "{" + t[s] + "}")
          : wd(s) && (n += ts(o) + ":" + kd(o, s) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var c = 0; c < i.length; c++) wd(i[c]) && (n += ts(o) + ":" + kd(o, i[c]) + ";");
      else {
        var l = Aa(e, t, i);
        switch (o) {
          case "animation":
          case "animationName": {
            n += ts(o) + ":" + l + ";";
            break;
          }
          default:
            n += o + "{" + l + "}";
        }
      }
    }
  return n;
}
var Od = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Rt;
function lc(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  Rt = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) ((n = !1), (a += Aa(r, t, o)));
  else {
    var i = o;
    a += i[0];
  }
  for (var s = 1; s < e.length; s++)
    if (((a += Aa(r, t, e[s])), n)) {
      var c = o;
      a += c[s];
    }
  Od.lastIndex = 0;
  for (var l = "", u; (u = Od.exec(a)) !== null; ) l += "-" + u[1];
  var d = p1(a) + l;
  return { name: d, styles: a, next: Rt };
}
var y1 = function (t) {
    return t();
  },
  _1 = Ec.useInsertionEffect ? Ec.useInsertionEffect : !1,
  Jp = _1 || y1,
  Xp = b.createContext(typeof HTMLElement < "u" ? l1({ key: "css" }) : null);
Xp.Provider;
var Zp = function (t) {
    return b.forwardRef(function (r, n) {
      var a = b.useContext(Xp);
      return t(r, a, n);
    });
  },
  Qp = b.createContext({}),
  uc = {}.hasOwnProperty,
  Ms = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  w1 = function (t, r) {
    var n = {};
    for (var a in r) uc.call(r, a) && (n[a] = r[a]);
    return ((n[Ms] = t), n);
  },
  k1 = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      cc(r, n, a),
      Jp(function () {
        return Kp(r, n, a);
      }),
      null
    );
  },
  O1 = Zp(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[Ms],
      o = [n],
      i = "";
    typeof e.className == "string"
      ? (i = Wp(t.registered, o, e.className))
      : e.className != null && (i = e.className + " ");
    var s = lc(o, void 0, b.useContext(Qp));
    i += t.key + "-" + s.name;
    var c = {};
    for (var l in e) uc.call(e, l) && l !== "css" && l !== Ms && (c[l] = e[l]);
    return (
      (c.className = i),
      r && (c.ref = r),
      b.createElement(
        b.Fragment,
        null,
        b.createElement(k1, { cache: t, serialized: s, isStringTag: typeof a == "string" }),
        b.createElement(a, c),
      )
    );
  }),
  S1 = O1,
  Zt = function (t, r) {
    var n = arguments;
    if (r == null || !uc.call(r, "css")) return b.createElement.apply(void 0, n);
    var a = n.length,
      o = new Array(a);
    ((o[0] = S1), (o[1] = w1(t, r)));
    for (var i = 2; i < a; i++) o[i] = n[i];
    return b.createElement.apply(null, o);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Zt || (Zt = {}));
function Bt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return lc(t);
}
var x1 = function e(t) {
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
            for (var s in o) o[s] && s && (i && (i += " "), (i += s));
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
function E1(e, t, r) {
  var n = [],
    a = Wp(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var C1 = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Jp(function () {
        for (var a = 0; a < n.length; a++) Kp(r, n[a], !1);
      }),
      null
    );
  },
  P1 = Zp(function (e, t) {
    var r = [],
      n = function () {
        for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++) l[u] = arguments[u];
        var d = lc(l, t.registered);
        return (r.push(d), cc(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++) l[u] = arguments[u];
        return E1(t.registered, n, x1(l));
      },
      o = { css: n, cx: a, theme: b.useContext(Qp) },
      i = e.children(o);
    return b.createElement(
      b.Fragment,
      null,
      b.createElement(C1, { cache: t, serializedArr: r }),
      i,
    );
  });
function eh(e, t) {
  var r = b.useRef(!0);
  b.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var th = 2,
  Ns = Bt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: th,
  }),
  Ls = Bt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -th,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  R1 = Bt({
    "&:focus": Ns,
    "&:focus-visible": Ns,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  A1 = Bt({
    "&:focus": Ls,
    "&:focus-visible": Ls,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  rh = b.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? Ls : Ns,
      o = r ? A1 : R1,
      i = typeof n > "u" ? o : n === "on" && a;
    return Zt(P1, null, function (s) {
      var c = s.css,
        l = s.cx;
      return b.Children.only(
        i ? b.cloneElement(t, { className: l([c(i), t.props.className]) }) : t,
      );
    });
  });
rh.displayName = "FocusRing";
function Wt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var I1 = 9;
function Sd(e) {
  e.keyCode !== I1 && Wt(e);
}
var j1 = {
    onMouseDownCapture: Wt,
    onMouseUpCapture: Wt,
    onKeyDownCapture: Sd,
    onKeyUpCapture: Sd,
    onTouchStartCapture: Wt,
    onTouchEndCapture: Wt,
    onPointerDownCapture: Wt,
    onPointerUpCapture: Wt,
    onClickCapture: Wt,
    onClick: Wt,
  },
  D1 = {};
function T1(e) {
  var t = e.isInteractive;
  return t ? D1 : j1;
}
var xd = "rgba(179, 212, 255, 0.6)",
  Ed = {
    background: {
      default: {
        default: {
          light: "var(--ds-background-neutral, ".concat(Gn, ")"),
          dark: "var(--ds-background-neutral, ".concat(Hn, ")"),
        },
        hover: {
          light: "var(--ds-background-neutral-hovered, ".concat(Is, ")"),
          dark: "var(--ds-background-neutral-hovered, ".concat(zu, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-pressed, ".concat(xd, ")"),
          dark: "var(--ds-background-neutral-pressed, ".concat(ua, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Gn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Hn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(ot, ")"),
          dark: "var(--ds-background-selected, ".concat(Vr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(ot, ")"),
          dark: "var(--ds-background-selected, ".concat(Vr, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-background-brand-bold, ".concat(Ct, ")"),
          dark: "var(--ds-background-brand-bold, ".concat(Ao, ")"),
        },
        hover: {
          light: "var(--ds-background-brand-bold-hovered, ".concat(Bu, ")"),
          dark: "var(--ds-background-brand-bold-hovered, ".concat(ua, ")"),
        },
        active: {
          light: "var(--ds-background-brand-bold-pressed, ".concat(Rs, ")"),
          dark: "var(--ds-background-brand-bold-pressed, ".concat($u, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Gn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Hn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(ot, ")"),
          dark: "var(--ds-background-selected, ".concat(Vr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(ot, ")"),
          dark: "var(--ds-background-selected, ".concat(Vr, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-background-warning-bold, ".concat(Lu, ")"),
          dark: "var(--ds-background-warning-bold, ".concat(Lu, ")"),
        },
        hover: {
          light: "var(--ds-background-warning-bold-hovered, ".concat(Nu, ")"),
          dark: "var(--ds-background-warning-bold-hovered, ".concat(Nu, ")"),
        },
        active: {
          light: "var(--ds-background-warning-bold-pressed, ".concat(Ur, ")"),
          dark: "var(--ds-background-warning-bold-pressed, ".concat(Ur, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Gn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Hn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ur, ")"),
          dark: "var(--ds-background-selected, ".concat(Ur, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ur, ")"),
          dark: "var(--ds-background-selected, ".concat(Ur, ")"),
        },
      },
      danger: {
        default: {
          light: "var(--ds-background-danger-bold, ".concat(Mu, ")"),
          dark: "var(--ds-background-danger-bold, ".concat(Mu, ")"),
        },
        hover: {
          light: "var(--ds-background-danger-bold-hovered, ".concat(Tu, ")"),
          dark: "var(--ds-background-danger-bold-hovered, ".concat(Tu, ")"),
        },
        active: {
          light: "var(--ds-background-danger-bold-pressed, ".concat(qr, ")"),
          dark: "var(--ds-background-danger-bold-pressed, ".concat(qr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Gn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Hn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(qr, ")"),
          dark: "var(--ds-background-selected, ".concat(qr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(qr, ")"),
          dark: "var(--ds-background-selected, ".concat(qr, ")"),
        },
      },
      link: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(ot, ")"),
          dark: "var(--ds-background-selected, ".concat(Le, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(ot, ")"),
          dark: "var(--ds-background-selected, ".concat(Le, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        hover: {
          light: "var(--ds-background-neutral-subtle-hovered, ".concat(Is, ")"),
          dark: "var(--ds-background-neutral-subtle-hovered, ".concat(zu, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-subtle-pressed, ".concat(xd, ")"),
          dark: "var(--ds-background-neutral-subtle-pressed, ".concat(ua, ")"),
        },
        disabled: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(ot, ")"),
          dark: "var(--ds-background-selected, ".concat(Vr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(ot, ")"),
          dark: "var(--ds-background-selected, ".concat(Vr, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(ot, ")"),
          dark: "var(--ds-background-selected, ".concat(Le, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(ot, ")"),
          dark: "var(--ds-background-selected, ".concat(Le, ")"),
        },
      },
    },
    color: {
      default: {
        default: {
          light: "var(--ds-text, ".concat(nn, ")"),
          dark: "var(--ds-text, ".concat(ht, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Ct, ")"),
          dark: "var(--ds-text, ".concat(Ct, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Wn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Le, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Le, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Yt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Wn, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Wn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Le, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Le, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-text-warning-inverse, ".concat(_r, ")"),
          dark: "var(--ds-text-warning-inverse, ".concat(_r, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Wn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(_r, ")"),
          dark: "var(--ds-text-selected, ".concat(_r, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(_r, ")"),
          dark: "var(--ds-text-selected, ".concat(_r, ")"),
        },
      },
      danger: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Yt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Yt, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Wn, ")"),
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
          light: "var(--ds-link, ".concat(Ct, ")"),
          dark: "var(--ds-link, ".concat(Ao, ")"),
        },
        hover: {
          light: "var(--ds-link, ".concat(Bu, ")"),
          dark: "var(--ds-link, ".concat(ua, ")"),
        },
        active: {
          light: "var(--ds-link-pressed, ".concat(Rs, ")"),
          dark: "var(--ds-link-pressed, ".concat($u, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Yi, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Le, ")"),
          dark: "var(--ds-text-selected, ".concat(ot, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Le, ")"),
          dark: "var(--ds-text-selected, ".concat(ot, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-text, ".concat(nn, ")"),
          dark: "var(--ds-text, ".concat(ht, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Ct, ")"),
          dark: "var(--ds-text, ".concat(Ct, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Yi, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Le, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Le, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-text-subtle, ".concat(D_, ")"),
          dark: "var(--ds-text-subtle, ".concat(ht, ")"),
        },
        hover: {
          light: "var(--ds-text-subtle, ".concat(j_, ")"),
          dark: "var(--ds-text-subtle, ".concat(_p, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(T_, ")"),
          dark: "var(--ds-text, ".concat(M_, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Yi, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Le, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Le, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
      },
    },
  };
function Cd(e, t) {
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
function se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var sr = 8,
  rs = ["default", "primary", "danger", "warning"],
  $s = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  M1 = { default: $s.default, compact: $s.compact, none: "inherit" },
  N1 = {
    default: "0 ".concat(sr + sr / 4, "px"),
    compact: "0 ".concat(sr + sr / 4, "px"),
    none: "0",
  },
  L1 = { compact: "0 ".concat(sr / 4, "px"), default: "0 ".concat(sr / 4, "px"), none: "0" },
  $1 = { default: "middle", compact: "middle", none: "baseline" },
  nh = { content: "0 ".concat(sr / 4, "px"), icon: "0 ".concat(sr / 4, "px") },
  ah = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  B1 = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #172B4D)",
    "&::after": se(se({}, ah), {}, { content: '""', borderColor: "var(--ds-border, #091E4224)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #091E4224)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #091E424F)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  F1 = {
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
  q1 = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #091E420F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #091E4224)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  U1 = {
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
  V1 = {
    background: "var(--ds-background-warning-bold, #F5CD47)",
    color: "var(--ds-text-warning-inverse, #172B4D)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #E2B203)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #CF9F02)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #F5CD47)",
    },
  },
  G1 = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #5D1F1A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  H1 = {
    background: "var(--ds-background-selected, #E9F2FF)",
    color: "var(--ds-text-selected, #0C66E4)",
    "&:not([disabled])::after": se(
      se({}, ah),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #0C66E4)" },
    ),
  },
  Pd = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function Rd(e) {
  var t = e.group,
    r = e.key,
    n = e.mode,
    a = t[r] || t.default;
  return a[n];
}
function Hr(e) {
  var t = e.appearance,
    r = e.key,
    n = e.mode;
  return {
    background: Rd({ group: Ed.background[t], key: r, mode: n }),
    color: "".concat(Rd({ group: Ed.color[t], key: r, mode: n }), " !important"),
  };
}
function W1(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.mode,
    a = e.isSelected,
    o = e.shouldFitContainer,
    i = e.isOnlySingleIcon,
    s = Hr({ appearance: t, key: a ? "selected" : "default", mode: n });
  return se(
    se(
      se(
        se(
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
          !de("platform-component-visual-refresh") && s,
        ),
        {},
        {
          cursor: "pointer",
          height: $s[r],
          lineHeight: M1[r],
          padding: i ? L1[r] : N1[r],
          verticalAlign: $1[r],
          width: o ? "100%" : "auto",
          justifyContent: "center",
        },
        !de("platform-component-visual-refresh") &&
          se(
            se(
              {
                "&:visited": se({}, s),
                "&:hover": se(
                  se({}, Hr({ appearance: t, key: a ? "selected" : "hover", mode: n })),
                  {},
                  {
                    textDecoration:
                      !a && (t === "link" || t === "subtle-link") ? "underline" : "inherit",
                    transitionDuration: "0s, 0.15s",
                  },
                ),
                "&:active": se(
                  se({}, Hr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                '&[data-firefox-is-active="true"]': se(
                  se({}, Hr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                "&[disabled]": se(
                  se({}, Hr({ appearance: t, key: "disabled", mode: n })),
                  {},
                  { cursor: "not-allowed", textDecoration: "none" },
                ),
              },
              Pd,
            ),
            {},
            {
              '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active':
                se({}, Hr({ appearance: t, key: a ? "selected" : "default", mode: n })),
            },
          ),
      ),
      de("platform-component-visual-refresh") &&
        (a
          ? H1
          : se(
              se(
                se(
                  se(
                    se(
                      se(
                        se(se({}, t === "default" && B1), t === "primary" && F1),
                        t === "link" && z1,
                      ),
                      t === "subtle" && q1,
                    ),
                    t === "subtle-link" && U1,
                  ),
                  t === "warning" && V1,
                ),
                t === "danger" && G1,
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
              Pd,
            )),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function Ad(e) {
  var t = e.spacing;
  return Bt({
    display: "flex",
    margin: t === "none" ? 0 : nh.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function K1(e) {
  var t = e.spacing;
  return Bt({
    margin: t === "none" ? 0 : nh.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function Y1(e) {
  var t = e.hasOverlay;
  return Bt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var J1 = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dc = function (t) {
    return t && b.isValidElement(t) && t.type === ac;
  },
  X1 = [
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
  Z1 = { "> *": { pointerEvents: "none" } },
  Q1 = Bt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  ek = Bt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  Id = function (t, r) {
    return !t || dc(t) ? null : r;
  },
  tk = function (t, r) {
    return dc(t) ? t : t ? Zt("span", { css: r }, t) : null;
  },
  rk = O.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      a = t.appearance,
      o = a === void 0 ? "default" : a,
      i = t.autoFocus,
      s = i === void 0 ? !1 : i,
      c = t.buttonCss,
      l = t.children,
      u = t.className,
      d = t.href,
      f = t.component,
      p = f === void 0 ? (d ? "a" : "button") : f,
      h = t.iconAfter,
      v = t.iconBefore,
      g = t.interactionName,
      m = t.isDisabled,
      _ = m === void 0 ? !1 : m,
      w = t.isSelected,
      k = w === void 0 ? !1 : w,
      y = t.onBlur,
      S = t.onClick,
      E = S === void 0 ? Ae : S,
      A = t.onFocus,
      D = t.onMouseDown,
      P = D === void 0 ? Ae : D,
      T = t.overlay;
    t.shouldFitContainer;
    var B = t.spacing,
      $ = B === void 0 ? "default" : B,
      q = t.tabIndex,
      U = q === void 0 ? 0 : q,
      F = t.type,
      G = F === void 0 ? (d ? void 0 : "button") : F,
      Y = t.testId,
      I = Q(t, X1),
      V = b.useRef(),
      ge = b.useCallback(
        function (le) {
          if (((V.current = le), r != null)) {
            if (typeof r == "function") {
              r(le);
              return;
            }
            r.current = le;
          }
        },
        [V, r],
      );
    eh(V, s);
    var H = b.useContext(ec),
      we = b.useCallback(
        function (le, Ze) {
          (H && H.tracePress(g, le.timeStamp), E(le, Ze));
        },
        [E, H, g],
      ),
      fe = rn({
        fn: we,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "23.4.8",
        analyticsData: n,
      }),
      ve = b.useCallback(
        function (le) {
          (le.preventDefault(), P(le));
        },
        [P],
      );
    b.useEffect(
      function () {
        var le = V.current;
        _ && le && le === document.activeElement && le.blur();
      },
      [_],
    );
    var be = !!T,
      Te = Bt(Y1({ hasOverlay: be })),
      ke = !_ && !be,
      Me = {};
    return (
      (k || _ || o === "warning") &&
        (Me = {
          "[data-theme] & circle": {
            stroke: "".concat(
              k || _
                ? "var(--ds-icon-subtle, ".concat(nn, ")")
                : "var(--ds-icon-warning-inverse, ".concat(nn, ")"),
              " !important",
            ),
          },
        }),
      Zt(
        rh,
        null,
        Zt(
          p,
          W(
            {},
            I,
            {
              ref: ge,
              className: u,
              css: [c, ke ? null : Z1],
              "data-has-overlay": be ? !0 : void 0,
              "data-testid": Y,
              disabled: _,
              href: ke ? d : void 0,
              onBlur: y,
              onClick: fe,
              onFocus: A,
              onMouseDown: ve,
              tabIndex: _ ? -1 : U,
              type: G,
            },
            T1({ isInteractive: ke }),
          ),
          v ? Zt("span", { css: [Te, Ad({ spacing: $ }), Id(l, Q1)] }, v) : null,
          tk(l, [Te, K1({ spacing: $ })]),
          h ? Zt("span", { css: [Te, Ad({ spacing: $ }), Id(l, ek)] }, h) : null,
          T ? Zt("span", { css: [J1, Me] }, T) : null,
        ),
      )
    );
  });
function nk(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return dc(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var ak = [
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
  jd = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  fc = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        o = t.children,
        i = t.iconBefore,
        s = t.iconAfter,
        c = t.isSelected,
        l = c === void 0 ? !1 : c,
        u = t.onMouseDown,
        d = u === void 0 ? Ae : u,
        f = t.onMouseUp,
        p = f === void 0 ? Ae : f,
        h = t.shouldFitContainer,
        v = h === void 0 ? !1 : h,
        g = t.spacing,
        m = g === void 0 ? "default" : g,
        _ = Q(t, ak),
        w = Dw(),
        k = w.mode,
        y = nk({ children: o, iconBefore: i, iconAfter: s }),
        S = b.useState(!1),
        E = Z(S, 2),
        A = E[0],
        D = E[1],
        P = b.useCallback(
          function ($) {
            (d($), jd && D(!0));
          },
          [d, D],
        ),
        T = b.useCallback(
          function ($) {
            (p($), jd && D(!1));
          },
          [p, D],
        ),
        B = b.useMemo(
          function () {
            return W1({
              appearance: a,
              spacing: m,
              mode: k,
              isSelected: l,
              shouldFitContainer: v,
              isOnlySingleIcon: y,
            });
          },
          [a, m, k, l, v, y],
        );
      return O.createElement(
        rk,
        W({}, _, {
          ref: r,
          appearance: a,
          buttonCss: B,
          children: o,
          "data-firefox-is-active": A ? !0 : void 0,
          iconAfter: s,
          iconBefore: i,
          isSelected: l,
          onMouseDown: P,
          onMouseUp: T,
          spacing: m,
        }),
      );
    }),
  );
fc.displayName = "Button";
function Dd(e) {
  return O.createElement(fc, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function ok(e) {
  return O.createElement(fc, W({}, e, { appearance: "subtle" }));
}
var ik = { container: "_1e0c1txw _kqswh2mm" };
function sk(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return O.createElement(
    Zo,
    { as: "li", testId: r, key: t, xcss: ik.container, paddingInline: "space.100" },
    O.createElement(
      Tp,
      { testId: r && "".concat(r, "-text") },
      O.createElement(ac, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var Td = {},
  Md =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function ck(e, t) {
  return !!(e === t || (Md(e) && Md(t)));
}
function lk(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!ck(e[r], t[r])) return !1;
  return !0;
}
function uk(e, t) {
  t === void 0 && (t = lk);
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
var dk = function (t, r, n, a) {
  var o = n.max,
    i = n.ellipsis,
    s = n.transform,
    c = t.length,
    l = c > o,
    u = l && o - 4 < r,
    d = l && r < c - o + 3,
    f = uk(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c;
      return t.slice(g, m).map(function (_, w) {
        return s(_, g + w, a);
      });
    });
  if (!l) return f(0, c);
  if (u && !d) {
    var p = o - 2;
    return [].concat(
      He(f(0, 1)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: c - p })],
      He(f(c - p)),
    );
  }
  if (!u && d) {
    var h = o - 2;
    return [].concat(
      He(f(0, h)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: h + 1, to: c - 1 })],
      He(f(c - 1)),
    );
  }
  var v = o - 4;
  return [].concat(
    He(f(0, 1)),
    [
      i({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(v / 2),
      }),
    ],
    He(f(r - Math.floor(v / 2), r + v - 1)),
    [i({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: c - 1 })],
    He(f(c - 1)),
  );
};
function Nd(e, t) {
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
function fk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Nd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Bs = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  vk = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.11",
  };
function Ld(e) {
  var t = e.chevronDirection,
    r = t === "left" ? A0 : M0;
  return O.createElement(
    Zo,
    { as: "span", xcss: Bs.navigatorIconWrapper },
    O.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function pk(e, t) {
  var r = e.components,
    n = r === void 0 ? Td : r,
    a = e.defaultSelectedIndex,
    o = a === void 0 ? 0 : a,
    i = e.selectedIndex,
    s = e.label,
    c = s === void 0 ? "pagination" : s,
    l = e.pageLabel,
    u = l === void 0 ? "page" : l,
    d = e.previousLabel,
    f = d === void 0 ? "previous" : d,
    p = e.nextLabel,
    h = p === void 0 ? "next" : p,
    v = e.style,
    g = v === void 0 ? Td : v,
    m = e.max,
    _ = m === void 0 ? 7 : m,
    w = e.onChange,
    k = w === void 0 ? Ae : w,
    y = e.pages,
    S = e.getPageLabel,
    E = e.renderEllipsis,
    A = E === void 0 ? sk : E,
    D = e.analyticsContext,
    P = e.testId,
    T = e.isDisabled,
    B = b0(i, function () {
      return o || 0;
    }),
    $ = Z(B, 2),
    q = $[0],
    U = $[1],
    F = rn(
      fk(
        {
          fn: function (I, V) {
            var ge = I.event,
              H = I.selectedPageIndex;
            (i === void 0 && U(H), k && k(ge, y[H], V));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: D,
        },
        vk,
      ),
    ),
    G = function (I, V, ge) {
      var H = y[q],
        we = "".concat(u, " ").concat(S ? S(I, V) : I),
        fe = I === H;
      return O.createElement(
        so,
        { as: "li", xcss: Bs.paginationMenuItem, key: "page-".concat(S ? S(I, V) : V) },
        O.createElement(
          ok,
          {
            component: n.Page,
            onClick: function (be) {
              return F({ event: be, selectedPageIndex: V });
            },
            "aria-current": fe ? "page" : void 0,
            "aria-label": we,
            isSelected: fe,
            isDisabled: T,
            page: I,
            testId:
              ge &&
              ""
                .concat(ge, "--")
                .concat(fe ? "current-" : "", "page-")
                .concat(V),
          },
          S ? S(I, V) : I,
        ),
      );
    };
  return O.createElement(
    Zo,
    { testId: P, style: g, ref: t, "aria-label": c, as: "nav" },
    O.createElement(
      so,
      { space: "space.0", alignBlock: "center" },
      O.createElement(Dd, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (I) {
          return F({ event: I, selectedPageIndex: q - 1 });
        },
        isDisabled: T || q === 0,
        iconBefore: O.createElement(Ld, { chevronDirection: "left" }),
        "aria-label": f,
        testId: P && "".concat(P, "--left-navigator"),
      }),
      O.createElement(
        so,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Bs.paginationMenu },
        dk(y, q, { max: _, ellipsis: A, transform: G }, P),
      ),
      O.createElement(Dd, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (I) {
          return F({ event: I, selectedPageIndex: q + 1 });
        },
        isDisabled: T || q === y.length - 1,
        iconBefore: O.createElement(Ld, { chevronDirection: "right" }),
        "aria-label": h,
        testId: P && "".concat(P, "--right-navigator"),
      }),
    ),
  );
}
var hk = b.memo(b.forwardRef(pk));
function gk(e, t, r) {
  return (
    (t = J(t)),
    qe(e, oh() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function oh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (oh = function () {
    return !!e;
  })();
}
var bk = (function (e) {
    function t() {
      var r;
      pe(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return (
        (r = gk(this, t, [].concat(a))),
        C(r, "onChange", function (i, s, c) {
          r.props.onChange(s, c);
        }),
        r
      );
    }
    return (
      Ue(t, e),
      he(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.total,
              o = n.value,
              i = o === void 0 ? 1 : o,
              s = n.i18n,
              c = n.testId,
              l = n.isDisabled,
              u = He(Array(a)).map(function (f, p) {
                return p + 1;
              }),
              d = i - 1;
            return O.createElement(hk, {
              selectedIndex: d,
              isDisabled: l,
              label: s?.label,
              nextLabel: s?.next,
              previousLabel: s?.prev,
              pageLabel: s?.pageLabel,
              onChange: this.onChange,
              pages: u,
              testId: c && "".concat(c, "--pagination"),
            });
          },
        },
      ])
    );
  })(O.Component),
  mk = ["isRanking", "testId"],
  yk = [
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
function $d(e, t) {
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
function ra(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $d(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $d(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Bd = "--local-dynamic-table-text-color",
  _k = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = Q(t, mk);
    return b.createElement(
      "thead",
      W({ "data-testid": n }, a, { className: R(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  ih = b.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children,
      a = e.isSortable,
      o = e.sortOrder,
      i = e.isFixedSize,
      s = e.shouldTruncate,
      c = e.onClick,
      l = e.style,
      u = e.testId,
      d = Q(e, yk),
      f = ra(
        ra(ra({}, l), r && kp({ width: r })),
        {},
        C({}, Bd, "var(--ds-text-subtlest, ".concat(Fu, ")")),
      ),
      p = o === Cr,
      h = o === Po,
      v = function () {
        if (p) return "ascending";
        if (h) return "descending";
      },
      g = n ? "th" : "td",
      m = de("platform-component-visual-refresh");
    return b.createElement(
      g,
      W({ "aria-sort": v(), onClick: m ? void 0 : c, ref: t, "data-testid": u }, d, {
        className: R([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          m
            ? "_11c8dcr7 _179r1tpy _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygb1x42"
            : "_11c8dcr7 _179r1tpy _mqm2glyw _t51zglyw _191wglyw _vchhusvi _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4jp4b _1ygb1x42",
          !m && c && "_irr3bfnf _d0altlke",
          "_1bsb8a2a",
          i && s && "_1bto1l2s _o5721q9c",
          i && "_1reo15vq _18m915vq",
          !m &&
            a &&
            "_173zglyw _pw6dglyw _1xgk1j28 _1wfn1j28 _y9yonqa1 _997wnqa1 _sklb1l7b _1j091l7b _19w61ule _1w611ule _1hvvidpf _n56nidpf _wyc4idpf _1d4oidpf _no7mstnw _qh32stnw _4b5mb3bt _hn3bb3bt _14gsx0bf _cigmx0bf _c77k1f6e _qzvtu2gc _f4731f6e _1fpyidpf _a04fh2mm _xv14glyw _58ej1kw7 _1ay31kw7 _mdbq1kw7 _10pp1kw7 _1yw3ze3t _n2fdze3t _8607ze3t _szhwze3t _1g2wwc43 _ze9fwc43 _1lcgnqa1 _at5qnqa1 _o4d71l7b _npl51l7b _1rp11onz _1iornqa1 _oi051l7b _1ehx1onz _19t8nqa1 _1bog1l7b",
          !m && p && "_c77k2wk4 _142s94yt",
          !m && h && "_f4732wk4 _17x894yt",
        ]),
        style: ra(
          ra({}, f),
          {},
          {
            "--_mwqor1": ye(
              "var(--ds-border-width-selected, 2px)".concat(
                " solid ",
                "var(--ds-border, ".concat(As, ")"),
              ),
            ),
            "--_17ckjys": ye("var(--ds-text-subtle, ".concat("var(".concat(Bd, ")"), ")")),
            "--_z3oznn": ye(
              "solid ".concat(
                "var(--ds-border-width-focused, 2px)",
                " ",
                "var(--ds-border-focused, ".concat(Ao, ")"),
              ),
            ),
            "--_6j4ewu": ye("var(--ds-background-neutral-hovered, ".concat(Is, ")")),
            "--_1rdacuj": ye("3px solid ".concat("var(--ds-icon-disabled, ".concat(As, ")"))),
            "--_1qca9zt": ye("3px solid ".concat("var(--ds-icon-subtle, ".concat(Fu, ")"))),
          },
        ),
      }),
      n,
    );
  });
function wk(e, t, r) {
  return (
    (t = J(t)),
    qe(e, sh() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function sh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (sh = function () {
    return !!e;
  })();
}
function ch(e) {
  return (function (t) {
    function r() {
      var n;
      pe(this, r);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return (
        (n = wk(this, r, [].concat(o))),
        C(n, "state", { refWidth: 0, refHeight: 0 }),
        C(n, "innerRef", function (s) {
          s && !n.props.isRanking && (n.ref = s);
        }),
        C(n, "updateDimensions", function () {
          if (n.ref) {
            var s = n.ref.getBoundingClientRect(),
              c = s.width,
              l = s.height;
            (c !== n.state.refWidth || l !== n.state.refHeight) &&
              n.setState({ refWidth: c, refHeight: l });
          }
        }),
        n
      );
    }
    return (
      Ue(r, t),
      he(r, [
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
              W({ refWidth: o, refHeight: i, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(O.Component);
}
var na = {},
  Fd;
function kk() {
  if (Fd) return na;
  ((Fd = 1), Object.defineProperty(na, "__esModule", { value: !0 }), (na.default = void 0));
  var e = r(wt()),
    t = r(Xo);
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
  return ((n.displayName = "ArrowDownIcon"), (na.default = n), na);
}
var Ok = kk();
const Sk = ur(Ok);
var aa = {},
  zd;
function xk() {
  if (zd) return aa;
  ((zd = 1), Object.defineProperty(aa, "__esModule", { value: !0 }), (aa.default = void 0));
  var e = r(wt()),
    t = r(Xo);
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
  return ((n.displayName = "ArrowUpIcon"), (aa.default = n), aa);
}
var Ek = xk();
const Ck = ur(Ek);
var Pk = "Escape";
function Rk(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = b.useRef(!1),
    a = b.useCallback(
      function (i) {
        r || n.current || i.key !== Pk || ((n.current = !0), t(i));
      },
      [t, r],
    ),
    o = b.useCallback(function () {
      n.current = !1;
    }, []);
  b.useEffect(
    function () {
      if (!(r && de("platform_only_attach_escape_handler_on_view")))
        return Qo.bindAll(
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
function oa(e) {
  var t = b.useRef(e);
  return (
    b.useEffect(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
var Ak = b.createContext(null),
  Ik = b.createContext(null);
function jk() {
  var e = b.useContext(Ik);
  return e;
}
function Dk(e) {
  var t = e.isOpen,
    r = e.onClose,
    n = b.useContext(Ak),
    a = jk();
  b.useEffect(
    function () {
      if (n !== null && t) return n.onClose(r, { namespace: a });
    },
    [n, t, a, r],
  );
}
var da = { none: 0, small: 100, medium: 350, large: 700 },
  ns = 0.5,
  Tk = { none: da.none, small: da.small * ns, medium: da.medium * ns, large: da.large * ns },
  Mk = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  Nk = function () {
    if (!Mk()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  Lk = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  $k = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { cleanup: "unmount" },
      r = b.useRef([]);
    return (
      b.useEffect(function () {
        return function () {
          r.current.length &&
            (r.current.forEach(function (n) {
              return clearTimeout(n);
            }),
            (r.current = []));
        };
      }, Lk(t)),
      b.useCallback(function (n, a) {
        for (var o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++)
          i[s - 2] = arguments[s];
        var c = setTimeout.apply(
          void 0,
          [
            function () {
              ((r.current = r.current.filter(function (l) {
                return l !== c;
              })),
                n());
            },
            a,
          ].concat(i),
        );
        r.current.push(c);
      }, [])
    );
  },
  lh = { appear: !0, isExiting: !1 },
  uh = b.createContext(lh),
  qd = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : lh;
    return O.createElement(uh.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  Ud = function (t) {
    var r = [];
    return (
      b.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  Bk = function (t, r) {
    for (var n = r.concat([]), a = Fk(r), o = 0; o < t.length; o++) {
      var i = t[o],
        s = !a[i.key];
      s && n.splice(o + 1, 0, i);
    }
    return n;
  },
  Fk = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  zk = function (t, r) {
    for (
      var n = new Set(
          t.map(function (c) {
            return c.key;
          }),
        ),
        a = new Set(),
        o = 0;
      o < r.length;
      o++
    ) {
      var i = r[o],
        s = i.key;
      n.has(s) || a.add(s);
    }
    return a;
  },
  dh = b.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      o = b.useState([null, n]),
      i = Z(o, 2),
      s = i[0],
      c = i[1],
      l = b.useState([]),
      u = Z(l, 2),
      d = u[0],
      f = u[1],
      p = b.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      h = Z(p, 2),
      v = h[0],
      g = h[1];
    if (
      (b.useEffect(function () {
        v.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      typeof s == "boolean")
    )
      return n;
    var m = Z(s, 2),
      _ = m[0],
      w = m[1],
      k = Ud(_),
      y = Ud(w);
    w !== n && c([w, n]);
    var S = zk(y, k),
      E = !!S.size,
      A = y;
    if ((E && (A = Bk(y, k)), a))
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
            var T = S.has(P.key);
            return qd(P, {
              appear: !0,
              isExiting: T,
              onFinish: T
                ? function () {
                    (S.delete(P.key), S.size === 0 && (c([null, n]), f([])));
                  }
                : void 0,
            });
          }))
        : (A = A.map(function (P) {
            return qd(P, v);
          })),
      A
    );
  }),
  qk = function () {
    return b.useContext(uh);
  };
dh.displayName = "ExitingPersistence";
function Uk() {
  var e = b.useRef("");
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
var Vk = b.createContext(function () {
    return { isReady: !0, delay: 0, ref: Ae };
  }),
  Gk = function () {
    var t = Uk(),
      r = b.useContext(Vk);
    return r(t);
  },
  Hk = function (t) {
    var r = t.children,
      n = t.animationTimingFunction,
      a = t.animationTimingFunctionExiting,
      o = a === void 0 ? n : a,
      i = t.enteringAnimation,
      s = t.exitingAnimation,
      c = s === void 0 ? i : s,
      l = t.isPaused,
      u = t.onFinish,
      d = t.duration,
      f = d === void 0 ? "large" : d,
      p = Gk(),
      h = qk(),
      v = h.isExiting,
      g = h.onFinish,
      m = h.appear,
      _ = $k(),
      w = l || !p.isReady,
      k = v ? 0 : p.delay,
      y = v ? "exiting" : "entering",
      S = b.useState(m),
      E = Z(S, 2),
      A = E[0],
      D = E[1];
    return (
      b.useEffect(
        function () {
          var P = !1;
          if (!w) {
            if (!m) {
              u && u(y);
              return;
            }
            var T = function () {
              (y === "exiting" && g?.(), P || D(!1), u?.(y));
            };
            if (Nk()) {
              T();
              return;
            }
            return (
              D(!0),
              _(T, v ? Tk[f] : da[f] + k),
              function () {
                P = !0;
              }
            );
          }
        },
        [g, y, v, f, k, w, _],
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
                ((!v && i === "fade-in") || (v && c === "fade-in")) && R(["_j7hq1cgr"]),
                ((!v && i === "fade-out") || (v && c === "fade-out")) && R(["_j7hq1lln"]),
                ((!v && i === "zoom-in") || (v && c === "zoom-in")) && R(["_j7hqe8p0"]),
                ((!v && i === "zoom-out") || (v && c === "zoom-out")) && R(["_j7hqy6ql"]),
                ((!v && i === "slide-in-from-top") || (v && c === "slide-in-from-top")) &&
                  R(["_j7hqqshu"]),
                ((!v && i === "slide-out-from-top") || (v && c === "slide-out-from-top")) &&
                  R(["_j7hq7ri4"]),
                ((!v && i === "slide-in-from-right") || (v && c === "slide-in-from-right")) &&
                  R(["_j7hqdfjr"]),
                ((!v && i === "slide-out-from-right") || (v && c === "slide-out-from-right")) &&
                  R(["_j7hqonfj"]),
                ((!v && i === "slide-in-from-bottom") || (v && c === "slide-in-from-bottom")) &&
                  R(["_j7hq1liq"]),
                ((!v && i === "slide-out-from-bottom") || (v && c === "slide-out-from-bottom")) &&
                  R(["_j7hqhnf1"]),
                ((!v && i === "slide-in-from-left") || (v && c === "slide-in-from-left")) &&
                  R(["_j7hq1bh1"]),
                ((!v && i === "slide-out-from-left") || (v && c === "slide-out-from-left")) &&
                  R(["_j7hqj08w"]),
                ((!v && i === "fade-in-from-top") || (v && c === "fade-in-from-top")) &&
                  R(["_j7hq2iua"]),
                ((!v && i === "fade-out-from-top") || (v && c === "fade-out-from-top")) &&
                  R(["_j7hq39va"]),
                ((!v && i === "fade-in-from-left") || (v && c === "fade-in-from-left")) &&
                  R(["_j7hq15m2"]),
                ((!v && i === "fade-out-from-left") || (v && c === "fade-out-from-left")) &&
                  R(["_j7hq1yiv"]),
                ((!v && i === "fade-in-from-bottom") || (v && c === "fade-in-from-bottom")) &&
                  R(["_j7hq1w00"]),
                ((!v && i === "fade-out-from-bottom") || (v && c === "fade-out-from-bottom")) &&
                  R(["_j7hqzy3z"]),
                ((!v && i === "fade-in-from-right") || (v && c === "fade-in-from-right")) &&
                  R(["_j7hqpqak"]),
                ((!v && i === "fade-out-from-right") || (v && c === "fade-out-from-right")) &&
                  R(["_j7hq1ebg"]),
                ((!v && i === "fade-in-from-top-constant") ||
                  (v && c === "fade-in-from-top-constant")) &&
                  R(["_j7hqm2e2"]),
                ((!v && i === "fade-out-from-top-constant") ||
                  (v && c === "fade-out-from-top-constant")) &&
                  R(["_j7hq97jn"]),
                ((!v && i === "fade-in-from-left-constant") ||
                  (v && c === "fade-in-from-left-constant")) &&
                  R(["_j7hqovgq"]),
                ((!v && i === "fade-out-from-left-constant") ||
                  (v && c === "fade-out-from-left-constant")) &&
                  R(["_j7hq15do"]),
                ((!v && i === "fade-in-from-bottom-constant") ||
                  (v && c === "fade-in-from-bottom-constant")) &&
                  R(["_j7hq797a"]),
                ((!v && i === "fade-out-from-bottom-constant") ||
                  (v && c === "fade-out-from-bottom-constant")) &&
                  R(["_j7hqwo7r"]),
                ((!v && i === "fade-in-from-right-constant") ||
                  (v && c === "fade-in-from-right-constant")) &&
                  R(["_j7hqt8u5"]),
                ((!v && i === "fade-out-from-right-constant") ||
                  (v && c === "fade-out-from-right-constant")) &&
                  R(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(k, "ms") },
        },
        y,
      )
    );
  },
  Wk = { top: "bottom", bottom: "top", left: "right", right: "left" },
  Kk = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      o = t.entranceDirection,
      i = t.exitDirection,
      s = t.distance,
      c = s === void 0 ? "proportional" : s,
      l = t.onFinish,
      u = t.isPaused,
      d = o !== void 0 ? Wk[o] : void 0,
      f =
        i || d
          ? "fade-out-from-".concat(i || d).concat(c === "proportional" ? "" : "-constant")
          : "fade-out";
    return O.createElement(
      Hk,
      {
        duration: a,
        enteringAnimation: o
          ? "fade-in-from-".concat(o).concat(c === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: f,
        animationTimingFunction: "ease-in-out",
        onFinish: l,
        isPaused: u,
      },
      r,
    );
  },
  Yk = b.createContext();
b.createContext();
var Jk = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  Xk = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  Zk = function (t, r) {
    if (typeof t == "function") return Xk(t, r);
    t != null && (t.current = r);
  },
  Vd = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        o = n[1];
      return ((r[a] = o), r);
    }, {});
  },
  Gd =
    typeof window < "u" && window.document && window.document.createElement
      ? b.useLayoutEffect
      : b.useEffect,
  $e = "top",
  ft = "bottom",
  vt = "right",
  Be = "left",
  vc = "auto",
  Fa = [$e, ft, vt, Be],
  on = "start",
  Ia = "end",
  Qk = "clippingParents",
  fh = "viewport",
  ia = "popper",
  eO = "reference",
  Hd = Fa.reduce(function (e, t) {
    return e.concat([t + "-" + on, t + "-" + Ia]);
  }, []),
  vh = [].concat(Fa, [vc]).reduce(function (e, t) {
    return e.concat([t, t + "-" + on, t + "-" + Ia]);
  }, []),
  tO = "beforeRead",
  rO = "read",
  nO = "afterRead",
  aO = "beforeMain",
  oO = "main",
  iO = "afterMain",
  sO = "beforeWrite",
  cO = "write",
  lO = "afterWrite",
  uO = [tO, rO, nO, aO, oO, iO, sO, cO, lO];
function $t(e) {
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
function Pr(e) {
  var t = Je(e).Element;
  return e instanceof t || e instanceof Element;
}
function dt(e) {
  var t = Je(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function pc(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Je(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function dO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      o = t.elements[r];
    !dt(o) ||
      !$t(o) ||
      (Object.assign(o.style, n),
      Object.keys(a).forEach(function (i) {
        var s = a[i];
        s === !1 ? o.removeAttribute(i) : o.setAttribute(i, s === !0 ? "" : s);
      }));
  });
}
function fO(e) {
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
          s = i.reduce(function (c, l) {
            return ((c[l] = ""), c);
          }, {});
        !dt(a) ||
          !$t(a) ||
          (Object.assign(a.style, s),
          Object.keys(o).forEach(function (c) {
            a.removeAttribute(c);
          }));
      });
    }
  );
}
const vO = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: dO,
  effect: fO,
  requires: ["computeStyles"],
};
function Nt(e) {
  return e.split("-")[0];
}
var kr = Math.max,
  Do = Math.min,
  sn = Math.round;
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
function ph() {
  return !/^((?!chrome|android).)*safari/i.test(Fs());
}
function cn(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    o = 1;
  t &&
    dt(e) &&
    ((a = (e.offsetWidth > 0 && sn(n.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && sn(n.height) / e.offsetHeight) || 1));
  var i = Pr(e) ? Je(e) : window,
    s = i.visualViewport,
    c = !ph() && r,
    l = (n.left + (c && s ? s.offsetLeft : 0)) / a,
    u = (n.top + (c && s ? s.offsetTop : 0)) / o,
    d = n.width / a,
    f = n.height / o;
  return { width: d, height: f, top: u, right: l + d, bottom: u + f, left: l, x: l, y: u };
}
function hc(e) {
  var t = cn(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function hh(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && pc(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function tr(e) {
  return Je(e).getComputedStyle(e);
}
function pO(e) {
  return ["table", "td", "th"].indexOf($t(e)) >= 0;
}
function fr(e) {
  return ((Pr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ni(e) {
  return $t(e) === "html" ? e : e.assignedSlot || e.parentNode || (pc(e) ? e.host : null) || fr(e);
}
function Wd(e) {
  return !dt(e) || tr(e).position === "fixed" ? null : e.offsetParent;
}
function hO(e) {
  var t = /firefox/i.test(Fs()),
    r = /Trident/i.test(Fs());
  if (r && dt(e)) {
    var n = tr(e);
    if (n.position === "fixed") return null;
  }
  var a = ni(e);
  for (pc(a) && (a = a.host); dt(a) && ["html", "body"].indexOf($t(a)) < 0; ) {
    var o = tr(a);
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
function za(e) {
  for (var t = Je(e), r = Wd(e); r && pO(r) && tr(r).position === "static"; ) r = Wd(r);
  return r && ($t(r) === "html" || ($t(r) === "body" && tr(r).position === "static"))
    ? t
    : r || hO(e) || t;
}
function gc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ba(e, t, r) {
  return kr(e, Do(t, r));
}
function gO(e, t, r) {
  var n = ba(e, t, r);
  return n > r ? r : n;
}
function gh() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function bh(e) {
  return Object.assign({}, gh(), e);
}
function mh(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var bO = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    bh(typeof t != "number" ? t : mh(t, Fa))
  );
};
function mO(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    o = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    s = Nt(r.placement),
    c = gc(s),
    l = [Be, vt].indexOf(s) >= 0,
    u = l ? "height" : "width";
  if (!(!o || !i)) {
    var d = bO(a.padding, r),
      f = hc(o),
      p = c === "y" ? $e : Be,
      h = c === "y" ? ft : vt,
      v = r.rects.reference[u] + r.rects.reference[c] - i[c] - r.rects.popper[u],
      g = i[c] - r.rects.reference[c],
      m = za(o),
      _ = m ? (c === "y" ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
      w = v / 2 - g / 2,
      k = d[p],
      y = _ - f[u] - d[h],
      S = _ / 2 - f[u] / 2 + w,
      E = ba(k, S, y),
      A = c;
    r.modifiersData[n] = ((t = {}), (t[A] = E), (t.centerOffset = E - S), t);
  }
}
function yO(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (hh(t.elements.popper, a) && (t.elements.arrow = a)));
}
const _O = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: mO,
  effect: yO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function ln(e) {
  return e.split("-")[1];
}
var wO = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function kO(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: sn(r * a) / a || 0, y: sn(n * a) / a || 0 };
}
function Kd(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    a = e.placement,
    o = e.variation,
    i = e.offsets,
    s = e.position,
    c = e.gpuAcceleration,
    l = e.adaptive,
    u = e.roundOffsets,
    d = e.isFixed,
    f = i.x,
    p = f === void 0 ? 0 : f,
    h = i.y,
    v = h === void 0 ? 0 : h,
    g = typeof u == "function" ? u({ x: p, y: v }) : { x: p, y: v };
  ((p = g.x), (v = g.y));
  var m = i.hasOwnProperty("x"),
    _ = i.hasOwnProperty("y"),
    w = Be,
    k = $e,
    y = window;
  if (l) {
    var S = za(r),
      E = "clientHeight",
      A = "clientWidth";
    if (
      (S === Je(r) &&
        ((S = fr(r)),
        tr(S).position !== "static" &&
          s === "absolute" &&
          ((E = "scrollHeight"), (A = "scrollWidth"))),
      (S = S),
      a === $e || ((a === Be || a === vt) && o === Ia))
    ) {
      k = ft;
      var D = d && S === y && y.visualViewport ? y.visualViewport.height : S[E];
      ((v -= D - n.height), (v *= c ? 1 : -1));
    }
    if (a === Be || ((a === $e || a === ft) && o === Ia)) {
      w = vt;
      var P = d && S === y && y.visualViewport ? y.visualViewport.width : S[A];
      ((p -= P - n.width), (p *= c ? 1 : -1));
    }
  }
  var T = Object.assign({ position: s }, l && wO),
    B = u === !0 ? kO({ x: p, y: v }, Je(r)) : { x: p, y: v };
  if (((p = B.x), (v = B.y), c)) {
    var $;
    return Object.assign(
      {},
      T,
      (($ = {}),
      ($[k] = _ ? "0" : ""),
      ($[w] = m ? "0" : ""),
      ($.transform =
        (y.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + v + "px)"
          : "translate3d(" + p + "px, " + v + "px, 0)"),
      $),
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}), (t[k] = _ ? v + "px" : ""), (t[w] = m ? p + "px" : ""), (t.transform = ""), t),
  );
}
function OO(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    o = r.adaptive,
    i = o === void 0 ? !0 : o,
    s = r.roundOffsets,
    c = s === void 0 ? !0 : s,
    l = {
      placement: Nt(t.placement),
      variation: ln(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Kd(
        Object.assign({}, l, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: c,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Kd(
          Object.assign({}, l, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: c,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    })));
}
const SO = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: OO, data: {} };
var Za = { passive: !0 };
function xO(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    o = a === void 0 ? !0 : a,
    i = n.resize,
    s = i === void 0 ? !0 : i,
    c = Je(t.elements.popper),
    l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      l.forEach(function (u) {
        u.addEventListener("scroll", r.update, Za);
      }),
    s && c.addEventListener("resize", r.update, Za),
    function () {
      (o &&
        l.forEach(function (u) {
          u.removeEventListener("scroll", r.update, Za);
        }),
        s && c.removeEventListener("resize", r.update, Za));
    }
  );
}
const EO = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: xO,
  data: {},
};
var CO = { left: "right", right: "left", bottom: "top", top: "bottom" };
function vo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return CO[t];
  });
}
var PO = { start: "end", end: "start" };
function Yd(e) {
  return e.replace(/start|end/g, function (t) {
    return PO[t];
  });
}
function bc(e) {
  var t = Je(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function mc(e) {
  return cn(fr(e)).left + bc(e).scrollLeft;
}
function RO(e, t) {
  var r = Je(e),
    n = fr(e),
    a = r.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    s = 0,
    c = 0;
  if (a) {
    ((o = a.width), (i = a.height));
    var l = ph();
    (l || (!l && t === "fixed")) && ((s = a.offsetLeft), (c = a.offsetTop));
  }
  return { width: o, height: i, x: s + mc(e), y: c };
}
function AO(e) {
  var t,
    r = fr(e),
    n = bc(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = kr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    i = kr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    s = -n.scrollLeft + mc(e),
    c = -n.scrollTop;
  return (
    tr(a || r).direction === "rtl" && (s += kr(r.clientWidth, a ? a.clientWidth : 0) - o),
    { width: o, height: i, x: s, y: c }
  );
}
function yc(e) {
  var t = tr(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function yh(e) {
  return ["html", "body", "#document"].indexOf($t(e)) >= 0
    ? e.ownerDocument.body
    : dt(e) && yc(e)
      ? e
      : yh(ni(e));
}
function ma(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = yh(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = Je(n),
    i = a ? [o].concat(o.visualViewport || [], yc(n) ? n : []) : n,
    s = t.concat(i);
  return a ? s : s.concat(ma(ni(i)));
}
function zs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function IO(e, t) {
  var r = cn(e, !1, t === "fixed");
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
function Jd(e, t, r) {
  return t === fh ? zs(RO(e, r)) : Pr(t) ? IO(t, r) : zs(AO(fr(e)));
}
function jO(e) {
  var t = ma(ni(e)),
    r = ["absolute", "fixed"].indexOf(tr(e).position) >= 0,
    n = r && dt(e) ? za(e) : e;
  return Pr(n)
    ? t.filter(function (a) {
        return Pr(a) && hh(a, n) && $t(a) !== "body";
      })
    : [];
}
function DO(e, t, r, n) {
  var a = t === "clippingParents" ? jO(e) : [].concat(t),
    o = [].concat(a, [r]),
    i = o[0],
    s = o.reduce(
      function (c, l) {
        var u = Jd(e, l, n);
        return (
          (c.top = kr(u.top, c.top)),
          (c.right = Do(u.right, c.right)),
          (c.bottom = Do(u.bottom, c.bottom)),
          (c.left = kr(u.left, c.left)),
          c
        );
      },
      Jd(e, i, n),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function _h(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? Nt(n) : null,
    o = n ? ln(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    c;
  switch (a) {
    case $e:
      c = { x: i, y: t.y - r.height };
      break;
    case ft:
      c = { x: i, y: t.y + t.height };
      break;
    case vt:
      c = { x: t.x + t.width, y: s };
      break;
    case Be:
      c = { x: t.x - r.width, y: s };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var l = a ? gc(a) : null;
  if (l != null) {
    var u = l === "y" ? "height" : "width";
    switch (o) {
      case on:
        c[l] = c[l] - (t[u] / 2 - r[u] / 2);
        break;
      case Ia:
        c[l] = c[l] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return c;
}
function ja(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    o = r.strategy,
    i = o === void 0 ? e.strategy : o,
    s = r.boundary,
    c = s === void 0 ? Qk : s,
    l = r.rootBoundary,
    u = l === void 0 ? fh : l,
    d = r.elementContext,
    f = d === void 0 ? ia : d,
    p = r.altBoundary,
    h = p === void 0 ? !1 : p,
    v = r.padding,
    g = v === void 0 ? 0 : v,
    m = bh(typeof g != "number" ? g : mh(g, Fa)),
    _ = f === ia ? eO : ia,
    w = e.rects.popper,
    k = e.elements[h ? _ : f],
    y = DO(Pr(k) ? k : k.contextElement || fr(e.elements.popper), c, u, i),
    S = cn(e.elements.reference),
    E = _h({ reference: S, element: w, placement: a }),
    A = zs(Object.assign({}, w, E)),
    D = f === ia ? A : S,
    P = {
      top: y.top - D.top + m.top,
      bottom: D.bottom - y.bottom + m.bottom,
      left: y.left - D.left + m.left,
      right: D.right - y.right + m.right,
    },
    T = e.modifiersData.offset;
  if (f === ia && T) {
    var B = T[a];
    Object.keys(P).forEach(function ($) {
      var q = [vt, ft].indexOf($) >= 0 ? 1 : -1,
        U = [$e, ft].indexOf($) >= 0 ? "y" : "x";
      P[$] += B[U] * q;
    });
  }
  return P;
}
function TO(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    o = r.rootBoundary,
    i = r.padding,
    s = r.flipVariations,
    c = r.allowedAutoPlacements,
    l = c === void 0 ? vh : c,
    u = ln(n),
    d = u
      ? s
        ? Hd
        : Hd.filter(function (h) {
            return ln(h) === u;
          })
      : Fa,
    f = d.filter(function (h) {
      return l.indexOf(h) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (h, v) {
    return ((h[v] = ja(e, { placement: v, boundary: a, rootBoundary: o, padding: i })[Nt(v)]), h);
  }, {});
  return Object.keys(p).sort(function (h, v) {
    return p[h] - p[v];
  });
}
function MO(e) {
  if (Nt(e) === vc) return [];
  var t = vo(e);
  return [Yd(e), t, Yd(t)];
}
function NO(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var a = r.mainAxis,
        o = a === void 0 ? !0 : a,
        i = r.altAxis,
        s = i === void 0 ? !0 : i,
        c = r.fallbackPlacements,
        l = r.padding,
        u = r.boundary,
        d = r.rootBoundary,
        f = r.altBoundary,
        p = r.flipVariations,
        h = p === void 0 ? !0 : p,
        v = r.allowedAutoPlacements,
        g = t.options.placement,
        m = Nt(g),
        _ = m === g,
        w = c || (_ || !h ? [vo(g)] : MO(g)),
        k = [g].concat(w).reduce(function (fe, ve) {
          return fe.concat(
            Nt(ve) === vc
              ? TO(t, {
                  placement: ve,
                  boundary: u,
                  rootBoundary: d,
                  padding: l,
                  flipVariations: h,
                  allowedAutoPlacements: v,
                })
              : ve,
          );
        }, []),
        y = t.rects.reference,
        S = t.rects.popper,
        E = new Map(),
        A = !0,
        D = k[0],
        P = 0;
      P < k.length;
      P++
    ) {
      var T = k[P],
        B = Nt(T),
        $ = ln(T) === on,
        q = [$e, ft].indexOf(B) >= 0,
        U = q ? "width" : "height",
        F = ja(t, { placement: T, boundary: u, rootBoundary: d, altBoundary: f, padding: l }),
        G = q ? ($ ? vt : Be) : $ ? ft : $e;
      y[U] > S[U] && (G = vo(G));
      var Y = vo(G),
        I = [];
      if (
        (o && I.push(F[B] <= 0),
        s && I.push(F[G] <= 0, F[Y] <= 0),
        I.every(function (fe) {
          return fe;
        }))
      ) {
        ((D = T), (A = !1));
        break;
      }
      E.set(T, I);
    }
    if (A)
      for (
        var V = h ? 3 : 1,
          ge = function (ve) {
            var be = k.find(function (Te) {
              var ke = E.get(Te);
              if (ke)
                return ke.slice(0, ve).every(function (Me) {
                  return Me;
                });
            });
            if (be) return ((D = be), "break");
          },
          H = V;
        H > 0;
        H--
      ) {
        var we = ge(H);
        if (we === "break") break;
      }
    t.placement !== D && ((t.modifiersData[n]._skip = !0), (t.placement = D), (t.reset = !0));
  }
}
const LO = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: NO,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Xd(e, t, r) {
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
function Zd(e) {
  return [$e, vt, ft, Be].some(function (t) {
    return e[t] >= 0;
  });
}
function $O(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    i = ja(t, { elementContext: "reference" }),
    s = ja(t, { altBoundary: !0 }),
    c = Xd(i, n),
    l = Xd(s, a, o),
    u = Zd(c),
    d = Zd(l);
  ((t.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: l,
    isReferenceHidden: u,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": d,
    })));
}
const BO = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: $O,
};
function FO(e, t, r) {
  var n = Nt(e),
    a = [Be, $e].indexOf(n) >= 0 ? -1 : 1,
    o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = o[0],
    s = o[1];
  return (
    (i = i || 0),
    (s = (s || 0) * a),
    [Be, vt].indexOf(n) >= 0 ? { x: s, y: i } : { x: i, y: s }
  );
}
function zO(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    o = a === void 0 ? [0, 0] : a,
    i = vh.reduce(function (u, d) {
      return ((u[d] = FO(d, t.rects, o)), u);
    }, {}),
    s = i[t.placement],
    c = s.x,
    l = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += l)),
    (t.modifiersData[n] = i));
}
const qO = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: zO };
function UO(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = _h({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const VO = { name: "popperOffsets", enabled: !0, phase: "read", fn: UO, data: {} };
function GO(e) {
  return e === "x" ? "y" : "x";
}
function HO(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.mainAxis,
    o = a === void 0 ? !0 : a,
    i = r.altAxis,
    s = i === void 0 ? !1 : i,
    c = r.boundary,
    l = r.rootBoundary,
    u = r.altBoundary,
    d = r.padding,
    f = r.tether,
    p = f === void 0 ? !0 : f,
    h = r.tetherOffset,
    v = h === void 0 ? 0 : h,
    g = ja(t, { boundary: c, rootBoundary: l, padding: d, altBoundary: u }),
    m = Nt(t.placement),
    _ = ln(t.placement),
    w = !_,
    k = gc(m),
    y = GO(k),
    S = t.modifiersData.popperOffsets,
    E = t.rects.reference,
    A = t.rects.popper,
    D = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v,
    P =
      typeof D == "number"
        ? { mainAxis: D, altAxis: D }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
    T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    B = { x: 0, y: 0 };
  if (S) {
    if (o) {
      var $,
        q = k === "y" ? $e : Be,
        U = k === "y" ? ft : vt,
        F = k === "y" ? "height" : "width",
        G = S[k],
        Y = G + g[q],
        I = G - g[U],
        V = p ? -A[F] / 2 : 0,
        ge = _ === on ? E[F] : A[F],
        H = _ === on ? -A[F] : -E[F],
        we = t.elements.arrow,
        fe = p && we ? hc(we) : { width: 0, height: 0 },
        ve = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : gh(),
        be = ve[q],
        Te = ve[U],
        ke = ba(0, E[F], fe[F]),
        Me = w ? E[F] / 2 - V - ke - be - P.mainAxis : ge - ke - be - P.mainAxis,
        le = w ? -E[F] / 2 + V + ke + Te + P.mainAxis : H + ke + Te + P.mainAxis,
        Ze = t.elements.arrow && za(t.elements.arrow),
        St = Ze ? (k === "y" ? Ze.clientTop || 0 : Ze.clientLeft || 0) : 0,
        Ve = ($ = T?.[k]) != null ? $ : 0,
        Qe = G + Me - Ve - St,
        Ce = G + le - Ve,
        et = ba(p ? Do(Y, Qe) : Y, G, p ? kr(I, Ce) : I);
      ((S[k] = et), (B[k] = et - G));
    }
    if (s) {
      var tt,
        Ge = k === "x" ? $e : Be,
        pt = k === "x" ? ft : vt,
        je = S[y],
        ne = y === "y" ? "height" : "width",
        Se = je + g[Ge],
        Pe = je - g[pt],
        Ft = [$e, Be].indexOf(m) !== -1,
        Dr = (tt = T?.[y]) != null ? tt : 0,
        ue = Ft ? Se : je - E[ne] - A[ne] - Dr + P.altAxis,
        nr = Ft ? je + E[ne] + A[ne] - Dr - P.altAxis : Pe,
        rt = p && Ft ? gO(ue, je, nr) : ba(p ? ue : Se, je, p ? nr : Pe);
      ((S[y] = rt), (B[y] = rt - je));
    }
    t.modifiersData[n] = B;
  }
}
const WO = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: HO,
  requiresIfExists: ["offset"],
};
function KO(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function YO(e) {
  return e === Je(e) || !dt(e) ? bc(e) : KO(e);
}
function JO(e) {
  var t = e.getBoundingClientRect(),
    r = sn(t.width) / e.offsetWidth || 1,
    n = sn(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function XO(e, t, r) {
  r === void 0 && (r = !1);
  var n = dt(t),
    a = dt(t) && JO(t),
    o = fr(t),
    i = cn(e, a, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      (($t(t) !== "body" || yc(o)) && (s = YO(t)),
      dt(t) ? ((c = cn(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop)) : o && (c.x = mc(o))),
    {
      x: i.left + s.scrollLeft - c.x,
      y: i.top + s.scrollTop - c.y,
      width: i.width,
      height: i.height,
    }
  );
}
function ZO(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (o) {
    t.set(o.name, o);
  });
  function a(o) {
    r.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    (i.forEach(function (s) {
      if (!r.has(s)) {
        var c = t.get(s);
        c && a(c);
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
function QO(e) {
  var t = ZO(e);
  return uO.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function eS(e) {
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
function tS(e) {
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
var Qd = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ef() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function rS(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    o = a === void 0 ? Qd : a;
  return function (s, c, l) {
    l === void 0 && (l = o);
    var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Qd, o),
        modifiersData: {},
        elements: { reference: s, popper: c },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      p = {
        state: u,
        setOptions: function (m) {
          var _ = typeof m == "function" ? m(u.options) : m;
          (v(),
            (u.options = Object.assign({}, o, u.options, _)),
            (u.scrollParents = {
              reference: Pr(s) ? ma(s) : s.contextElement ? ma(s.contextElement) : [],
              popper: ma(c),
            }));
          var w = QO(tS([].concat(n, u.options.modifiers)));
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
            var m = u.elements,
              _ = m.reference,
              w = m.popper;
            if (ef(_, w)) {
              ((u.rects = {
                reference: XO(_, za(w), u.options.strategy === "fixed"),
                popper: hc(w),
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
                var y = u.orderedModifiers[k],
                  S = y.fn,
                  E = y.options,
                  A = E === void 0 ? {} : E,
                  D = y.name;
                typeof S == "function" &&
                  (u = S({ state: u, options: A, name: D, instance: p }) || u);
              }
            }
          }
        },
        update: eS(function () {
          return new Promise(function (g) {
            (p.forceUpdate(), g(u));
          });
        }),
        destroy: function () {
          (v(), (f = !0));
        },
      };
    if (!ef(s, c)) return p;
    p.setOptions(l).then(function (g) {
      !f && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function h() {
      u.orderedModifiers.forEach(function (g) {
        var m = g.name,
          _ = g.options,
          w = _ === void 0 ? {} : _,
          k = g.effect;
        if (typeof k == "function") {
          var y = k({ state: u, name: m, instance: p, options: w }),
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
var nS = [EO, VO, SO, vO, qO, LO, WO, _O, BO],
  aS = rS({ defaultModifiers: nS }),
  as,
  tf;
function oS() {
  if (tf) return as;
  tf = 1;
  var e = typeof Element < "u",
    t = typeof Map == "function",
    r = typeof Set == "function",
    n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function a(o, i) {
    if (o === i) return !0;
    if (o && i && typeof o == "object" && typeof i == "object") {
      if (o.constructor !== i.constructor) return !1;
      var s, c, l;
      if (Array.isArray(o)) {
        if (((s = o.length), s != i.length)) return !1;
        for (c = s; c-- !== 0; ) if (!a(o[c], i[c])) return !1;
        return !0;
      }
      var u;
      if (t && o instanceof Map && i instanceof Map) {
        if (o.size !== i.size) return !1;
        for (u = o.entries(); !(c = u.next()).done; ) if (!i.has(c.value[0])) return !1;
        for (u = o.entries(); !(c = u.next()).done; )
          if (!a(c.value[1], i.get(c.value[0]))) return !1;
        return !0;
      }
      if (r && o instanceof Set && i instanceof Set) {
        if (o.size !== i.size) return !1;
        for (u = o.entries(); !(c = u.next()).done; ) if (!i.has(c.value[0])) return !1;
        return !0;
      }
      if (n && ArrayBuffer.isView(o) && ArrayBuffer.isView(i)) {
        if (((s = o.length), s != i.length)) return !1;
        for (c = s; c-- !== 0; ) if (o[c] !== i[c]) return !1;
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
      if (((l = Object.keys(o)), (s = l.length), s !== Object.keys(i).length)) return !1;
      for (c = s; c-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(i, l[c])) return !1;
      if (e && o instanceof Element) return !1;
      for (c = s; c-- !== 0; )
        if (
          !((l[c] === "_owner" || l[c] === "__v" || l[c] === "__o") && o.$$typeof) &&
          !a(o[l[c]], i[l[c]])
        )
          return !1;
      return !0;
    }
    return o !== o && i !== i;
  }
  return (
    (as = function (i, s) {
      try {
        return a(i, s);
      } catch (c) {
        if ((c.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw c;
      }
    }),
    as
  );
}
var iS = oS();
const sS = ur(iS);
var cS = [],
  lS = function (t, r, n) {
    n === void 0 && (n = {});
    var a = b.useRef(null),
      o = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || cS,
      },
      i = b.useState({
        styles: {
          popper: { position: o.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      s = i[0],
      c = i[1],
      l = b.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (p) {
            var h = p.state,
              v = Object.keys(h.elements);
            To.flushSync(function () {
              c({
                styles: Vd(
                  v.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: Vd(
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
      u = b.useMemo(
        function () {
          var f = {
            onFirstUpdate: o.onFirstUpdate,
            placement: o.placement,
            strategy: o.strategy,
            modifiers: [].concat(o.modifiers, [l, { name: "applyStyles", enabled: !1 }]),
          };
          return sS(a.current, f) ? a.current || f : ((a.current = f), f);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, l],
      ),
      d = b.useRef();
    return (
      Gd(
        function () {
          d.current && d.current.setOptions(u);
        },
        [u],
      ),
      Gd(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || aS,
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
        styles: s.styles,
        attributes: s.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  },
  uS = function () {},
  dS = function () {
    return Promise.resolve(null);
  },
  fS = [];
function vS(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    o = e.modifiers,
    i = o === void 0 ? fS : o,
    s = e.referenceElement,
    c = e.onFirstUpdate,
    l = e.innerRef,
    u = e.children,
    d = b.useContext(Yk),
    f = b.useState(null),
    p = f[0],
    h = f[1],
    v = b.useState(null),
    g = v[0],
    m = v[1];
  b.useEffect(
    function () {
      Zk(l, p);
    },
    [l, p],
  );
  var _ = b.useMemo(
      function () {
        return {
          placement: r,
          strategy: a,
          onFirstUpdate: c,
          modifiers: [].concat(i, [{ name: "arrow", enabled: g != null, options: { element: g } }]),
        };
      },
      [r, a, c, i, g],
    ),
    w = lS(s || d, p, _),
    k = w.state,
    y = w.styles,
    S = w.forceUpdate,
    E = w.update,
    A = b.useMemo(
      function () {
        return {
          ref: h,
          style: y.popper,
          placement: k ? k.placement : r,
          hasPopperEscaped:
            k && k.modifiersData.hide ? k.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            k && k.modifiersData.hide ? k.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: y.arrow, ref: m },
          forceUpdate: S || uS,
          update: E || dS,
        };
      },
      [h, m, r, k, y, E, S],
    );
  return Jk(u)(A);
}
function pS(e) {
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
          s,
          c = n.state,
          l = c.modifiersData.maxSizeData;
        if (
          !(
            typeof (l == null || (a = l.viewport) === null || a === void 0 ? void 0 : a.width) !=
              "number" ||
            typeof (l == null || (o = l.viewport) === null || o === void 0 ? void 0 : o.height) !=
              "number"
          )
        ) {
          var u = l.viewport,
            d = c.modifiersData.popperOffsets,
            f = d === void 0 ? { x: 0, y: 0 } : d,
            p = c.placement.split("-"),
            h = Z(p, 1),
            v = h[0],
            g =
              (i =
                (s = c.modifiersData) === null ||
                s === void 0 ||
                (s = s.offset) === null ||
                s === void 0
                  ? void 0
                  : s[c.placement]) !== null && i !== void 0
                ? i
                : { x: 0, y: 0 },
            m = u.width - 2 * t,
            _ = u.height - 2 * t;
          (v === "top" && (_ = c.rects.reference.y + g.y - t),
            v === "bottom" && (_ = u.height - f.y - t),
            v === "left" && (m = c.rects.reference.x + g.x - t),
            v === "right" && (m = u.width - f.x - t),
            (c.styles.popper.maxWidth = "".concat(m, "px")),
            (c.styles.popper.maxHeight = "".concat(_, "px")));
        }
      },
    },
  ];
}
var qs = 5,
  hS = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: qs,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function gS() {
  return null;
}
var bS = [0, 8];
function mS(e) {
  var t = e.children,
    r = t === void 0 ? gS : t,
    n = e.offset,
    a = n === void 0 ? bS : n,
    o = e.placement,
    i = o === void 0 ? "bottom-start" : o,
    s = e.referenceElement,
    c = s === void 0 ? void 0 : s,
    l = e.modifiers,
    u = e.strategy,
    d = u === void 0 ? "fixed" : u,
    f = e.shouldFitViewport,
    p = f === void 0 ? !1 : f,
    h = Z(a, 2),
    v = h[0],
    g = h[1],
    m = b.useMemo(
      function () {
        var w = {
            name: "preventOverflow",
            options: { padding: qs, rootBoundary: p ? "viewport" : "document" },
          },
          k = { name: "offset", options: { offset: [v, g] } },
          y = p ? pS({ viewportPadding: qs }) : [];
        return [].concat(hS, [w, k], He(y));
      },
      [v, g, p],
    ),
    _ = b.useMemo(
      function () {
        return l == null ? m : [].concat(He(m), He(l));
      },
      [m, l],
    );
  return O.createElement(vS, { modifiers: _, placement: i, strategy: d, referenceElement: c }, r);
}
var wh = "atlaskit-portal-container",
  kh = "body > .atlaskit-portal-container",
  Oh = "atlaskit-portal",
  yS = function (t) {
    var r = document.createElement("div");
    return ((r.className = Oh), (r.style.zIndex = "".concat(t)), r);
  },
  Sh = function () {
    return document.body;
  },
  xh = function () {
    var t = document.querySelector(kh);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = wh),
        (n.style.display = "flex"),
        (r = Sh()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  _S = function (t) {
    xh().removeChild(t);
  },
  wS = function (t) {
    t.parentElement || xh().appendChild(t);
  },
  Eh = function () {
    return document !== void 0;
  },
  kS = function (t) {
    if (Eh()) {
      var r = document.createElement("div");
      return ((r.className = Oh), (r.style.zIndex = "".concat(t)), r);
    }
  },
  OS = function () {
    if (Eh()) {
      var t = document.querySelector(kh);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = wh),
          (n.style.display = "flex"),
          (r = Sh()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function SS(e) {
  var t = e.zIndex,
    r = e.children,
    n = b.useMemo(
      function () {
        return yS(t);
      },
      [t],
    );
  return (
    wS(n),
    b.useEffect(
      function () {
        return function () {
          _S(n);
        };
      },
      [n],
    ),
    To.createPortal(r, n)
  );
}
var Ch = typeof window < "u" ? b.useLayoutEffect : b.useEffect;
function xS(e) {
  var t = e.zIndex,
    r = e.children,
    n = b.useState(null),
    a = Z(n, 2),
    o = a[0],
    i = a[1];
  Ch(
    function () {
      var c = kS(t);
      i(c);
      var l = OS();
      if (!(!c || !l))
        return (
          l.appendChild(c),
          function () {
            (c && l.removeChild(c), i(null));
          }
        );
    },
    [t],
  );
  var s = O.createElement(b.Suspense, { fallback: null }, r);
  return o ? To.createPortal(s, o) : null;
}
var ES = function (t) {
    var r = b.useState(!1),
      n = Z(r, 2),
      a = n[0],
      o = n[1],
      i = b.useState(function () {
        return t === "layoutEffect" ? Ch : b.useEffect;
      }),
      s = Z(i, 1),
      c = s[0];
    return (
      c(function () {
        o(!0);
      }, []),
      a
    );
  },
  CS = "akPortalMount",
  PS = "akPortalUnmount",
  rf = {
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
  RS = function (t) {
    return rf.hasOwnProperty(t) ? rf[t] : null;
  },
  AS = function (t, r) {
    var n = { layer: RS(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function nf(e, t) {
  var r = AS(e, t);
  window.dispatchEvent(r);
}
var IS = function (t) {
  var r = Number(t);
  b.useEffect(
    function () {
      return (
        nf(CS, r),
        function () {
          nf(PS, r);
        }
      );
    },
    [r],
  );
};
function jS(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    o = a === void 0 ? "effect" : a,
    i = ES(o);
  return (
    IS(r),
    de("platform_design_system_team_portal_logic_r18_fix")
      ? O.createElement(xS, { zIndex: r }, n)
      : i
        ? O.createElement(SS, { zIndex: r }, n)
        : null
  );
}
var ya = new Set(),
  Da = null;
function af() {
  if (!Da) {
    Da = Qo.bindAll(window, [
      { type: "dragend", listener: os },
      { type: "pointerdown", listener: os },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            os();
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
function os() {
  var e;
  ((e = Da) === null || e === void 0 || e(), (Da = null));
  var t = Array.from(ya);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function DS() {
  return Qo.bindAll(window, [
    { type: "dragstart", listener: af },
    { type: "dragenter", listener: af },
  ]);
}
var Qa = null;
function TS(e) {
  return (
    Qa || (Qa = DS()),
    ya.add(e),
    e.onRegister({ isDragging: Da !== null }),
    function () {
      if ((ya.delete(e), ya.size === 0)) {
        var r;
        ((r = Qa) === null || r === void 0 || r(), (Qa = null));
      }
    }
  );
}
var _a = null;
function fa() {
  _a != null && (window.clearTimeout(_a), (_a = null));
}
function of(e, t) {
  (fa(),
    (_a = window.setTimeout(function () {
      ((_a = null), e());
    }, t)));
}
var Et = null;
function MS(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(Et && Et.entry === e);
  }
  function n() {
    r() && (fa(), (Et = null));
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
        ((t = "shown"), fa());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), fa(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function s(p) {
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
          of(function () {
            ((t = "hide-animating"), e.hide({ isImmediate: !1 }));
          }, e.delay));
      }
    }
  }
  function c() {
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
    (Et && (fa(), Et.entry.hide({ isImmediate: !0 }), Et.entry.done(), (Et = null)),
      (Et = { entry: e, isVisible: l }));
    function h() {
      ((t = "shown"), e.show({ isImmediate: p }));
    }
    if (p) {
      h();
      return;
    }
    ((t = "waiting-to-show"), of(h, e.delay));
  }
  d();
  var f = {
    keep: i,
    abort: n,
    isActive: r,
    requestHide: s,
    finishHideAnimation: c,
    mousePosition: u(),
  };
  return f;
}
function NS(e, t) {
  var r = Pw();
  return t ? "".concat(r(e)) : void 0;
}
var Ph = b.forwardRef(function (t, r) {
  var n = t.style,
    a = t.className,
    o = t.children,
    i = t.placement,
    s = t.testId,
    c = t.onMouseOut,
    l = t.onMouseOver,
    u = t.id;
  return b.createElement(
    "div",
    { ref: r, style: n, "data-testid": s ? "".concat(s, "--wrapper") : void 0 },
    b.createElement(
      "div",
      {
        role: "tooltip",
        className: R(["_80om73ad", a]),
        onMouseOut: c,
        onMouseOver: l,
        "data-placement": i,
        "data-testid": s,
        id: u,
      },
      o,
    ),
  );
});
Ph.displayName = "TooltipPrimitive";
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
function cf(e) {
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
var Rh = b.forwardRef(function (t, r) {
  var n = t.style,
    a = t.className,
    o = t.children,
    i = t.truncate,
    s = t.placement,
    c = t.testId,
    l = t.onMouseOut,
    u = t.onMouseOver,
    d = t.id;
  return b.createElement(
    Ph,
    {
      ref: r,
      className: R([
        "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkpioe _syaz1i9p _152tze3t _1e02ze3t _1i4q1hna _85i5v77o _1q51v77o _y4ti12x7 _bozg12x7 _slp31hna",
        i && "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
        a,
      ]),
      placement: s,
      testId: c,
      id: d,
      onMouseOut: l,
      onMouseOver: u,
      style: cf(
        cf({}, n),
        {},
        {
          "--_yr7xfv": ye("var(--ds-background-neutral-bold, ".concat(_r, ")")),
          "--_ywovvi": ye("var(--ds-text-inverse, ".concat(Yt, ")")),
        },
      ),
    },
    o,
  );
});
Rh.displayName = "TooltipContainer";
function lf(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function uf(e, t) {
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
function Wr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? uf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : uf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var LS = Rw.tooltip(),
  df = {
    componentName: "tooltip",
    packageName: "@atlaskit/tooltip",
    packageVersion: "0.0.0-development",
  },
  $S = { top: "bottom", bottom: "top", left: "right", right: "left" },
  BS = function (t) {
    return t.split("-")[0];
  };
function FS(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    o = a === void 0 ? "bottom" : a,
    i = e.content,
    s = e.truncate,
    c = s === void 0 ? !1 : s,
    l = e.component,
    u = l === void 0 ? Rh : l,
    d = e.tag,
    f = d === void 0 ? "div" : d,
    p = e.testId,
    h = e.delay,
    v = h === void 0 ? 300 : h,
    g = e.onShow,
    m = g === void 0 ? Ae : g,
    _ = e.onHide,
    w = _ === void 0 ? Ae : _,
    k = e.canAppear,
    y = e.hideTooltipOnClick,
    S = y === void 0 ? !1 : y,
    E = e.hideTooltipOnMouseDown,
    A = E === void 0 ? !1 : E,
    D = e.analyticsContext,
    P = e.strategy,
    T = P === void 0 ? "fixed" : P,
    B = e.ignoreTooltipPointerEvents,
    $ = B === void 0 ? !1 : B,
    q = e.isScreenReaderAnnouncementDisabled,
    U = q === void 0 ? !1 : q,
    F = n === "mouse" ? o : n,
    G = Du(Wr({ fn: m, action: "displayed", analyticsData: D }, df)),
    Y = Du(Wr({ fn: w, action: "hidden", analyticsData: D }, df)),
    I = b.useRef(null),
    V = b.useState("hide"),
    ge = Z(V, 2),
    H = ge[0],
    we = ge[1],
    fe = b.useRef(null),
    ve = b.useRef(null),
    be = function (ie) {
      ((ve.current = ie), (fe.current = ie ? ie.firstElementChild : null));
    },
    Te = b.useCallback(function (N) {
      fe.current = N;
    }, []),
    ke = oa(H),
    Me = oa(G),
    le = oa(Y),
    Ze = oa(v),
    St = oa(k),
    Ve = b.useRef(!1),
    Qe = b.useCallback(function (N) {
      ((I.current = N), (Ve.current = !1));
    }, []),
    Ce = b.useCallback(
      function () {
        I.current &&
          (Ve.current && le.current(), (I.current = null), (Ve.current = !1), we("hide"));
      },
      [le],
    ),
    et = b.useCallback(
      function () {
        I.current && (I.current.abort(), Ve.current && le.current(), (I.current = null));
      },
      [le],
    );
  b.useEffect(
    function () {
      return function () {
        I.current && et();
      };
    },
    [et],
  );
  var tt = b.useRef(!1);
  b.useEffect(function () {
    return TS({
      onRegister: function (ie) {
        var qt = ie.isDragging;
        tt.current = qt;
      },
      onDragStart: function () {
        var ie;
        ((ie = I.current) === null || ie === void 0 || ie.requestHide({ isImmediate: !0 }),
          (tt.current = !0));
      },
      onDragEnd: function () {
        tt.current = !1;
      },
    });
  }, []);
  var Ge = b.useCallback(
      function (N) {
        var ie;
        if (!tt.current) {
          if ((I.current && !I.current.isActive() && et(), I.current && I.current.isActive())) {
            I.current.keep();
            return;
          }
          if (!(St.current && !((ie = St.current) !== null && ie !== void 0 && ie.call(St)))) {
            var qt = {
                source: N,
                delay: Ze.current,
                show: function (Mr) {
                  var hn = Mr.isImmediate;
                  (Ve.current || ((Ve.current = !0), Me.current()),
                    we(hn ? "show-immediate" : "fade-in"));
                },
                hide: function (Mr) {
                  var hn = Mr.isImmediate;
                  we(hn ? "hide" : "before-fade-out");
                },
                done: Ce,
              },
              oi = MS(qt);
            Qe(oi);
          }
        }
      },
      [St, Ze, Ce, Qe, et, Me],
    ),
    pt = b.useCallback(
      function () {
        var N;
        (N = I.current) === null || N === void 0 || N.requestHide({ isImmediate: !0 });
      },
      [I],
    );
  (Rk({ onClose: pt, isDisabled: H === "hide" || H === "fade-out" }),
    b.useEffect(
      function () {
        if (H === "hide") return Ae;
        H === "before-fade-out" && we("fade-out");
        var N = Qo.bind(window, {
          type: "scroll",
          listener: function () {
            I.current && I.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return N;
      },
      [H],
    ));
  var je = b.useCallback(
      function () {
        A && I.current && I.current.requestHide({ isImmediate: !0 });
      },
      [A],
    ),
    ne = b.useCallback(
      function () {
        S && I.current && I.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    Se = b.useCallback(
      function (N) {
        if (!(ve.current && N.target === ve.current) && !N.defaultPrevented) {
          N.preventDefault();
          var ie =
            n === "mouse"
              ? { type: "mouse", mouse: lf({ left: N.clientX, top: N.clientY }) }
              : { type: "keyboard" };
          Ge(ie);
        }
      },
      [n, Ge],
    ),
    Pe = b.useCallback(function (N) {
      (ve.current && N.target === ve.current) ||
        N.defaultPrevented ||
        (N.preventDefault(), I.current && I.current.requestHide({ isImmediate: !1 }));
    }, []),
    Ft =
      n === "mouse"
        ? function (N) {
            var ie;
            (ie = I.current) !== null &&
              ie !== void 0 &&
              ie.isActive() &&
              (I.current.mousePosition = lf({ left: N.clientX, top: N.clientY }));
          }
        : void 0,
    Dr = b.useCallback(function () {
      if (I.current && I.current.isActive()) {
        I.current.keep();
        return;
      }
    }, []),
    ue = b.useCallback(
      function (N) {
        try {
          if (!N.target.matches(":focus-visible") && de("platform-tooltip-focus-visible-new"))
            return;
        } catch {}
        Ge({ type: "keyboard" });
      },
      [Ge],
    ),
    nr = b.useCallback(function () {
      I.current && I.current.requestHide({ isImmediate: !1 });
    }, []),
    rt = b.useCallback(
      function (N) {
        N === "exiting" &&
          ke.current === "fade-out" &&
          I.current &&
          I.current.finishHideAnimation();
      },
      [ke],
    ),
    zt = f,
    Tr = H !== "hide" && !!i,
    xt = !U && Tr,
    qa = H !== "hide" && H !== "fade-out",
    qh = b.useCallback(function () {
      var N;
      (N = I.current) === null || N === void 0 || N.requestHide({ isImmediate: !0 });
    }, []);
  Dk({ isOpen: Tr && qa, onClose: qh });
  var wc = function () {
      var ie;
      if (n === "mouse" && (ie = I.current) !== null && ie !== void 0 && ie.mousePosition) {
        var qt;
        return (qt = I.current) === null || qt === void 0 ? void 0 : qt.mousePosition;
      }
      return fe.current || void 0;
    },
    pn = NS("tooltip", xt),
    ai = {
      onMouseOver: Se,
      onMouseOut: Pe,
      onMouseMove: Ft,
      onMouseDown: je,
      onClick: ne,
      onFocus: ue,
      onBlur: nr,
    };
  p && (ai["data-testid"] = "".concat(p, "--container"));
  var kc = typeof t == "function";
  b.useEffect(
    function () {
      if (!kc) {
        var N = fe.current;
        if (!(!N || !pn))
          return (
            N.setAttribute("aria-describedby", pn),
            function () {
              return N.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [kc, pn],
  );
  var Oc = xt
    ? O.createElement(
        "span",
        { "data-testid": p ? "".concat(p, "-hidden") : void 0, hidden: !0, id: pn },
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
          t(Wr(Wr({}, ai), {}, { "aria-describedby": pn, ref: Te })),
          Oc,
        )
      : O.createElement(zt, W({}, ai, { ref: be, role: "presentation" }), t, Oc),
    Tr
      ? O.createElement(
          jS,
          { zIndex: LS },
          O.createElement(mS, { placement: F, referenceElement: wc(), strategy: T }, function (N) {
            var ie = N.ref,
              qt = N.style,
              oi = N.update,
              ii = N.placement,
              Mr = n === "mouse" ? void 0 : $S[BS(ii)];
            return O.createElement(
              dh,
              { appear: !0 },
              qa &&
                O.createElement(
                  Kk,
                  {
                    distance: "constant",
                    entranceDirection: Mr,
                    exitDirection: Mr,
                    onFinish: rt,
                    duration: H !== "show-immediate" ? "medium" : "none",
                  },
                  function (hn) {
                    var Uh = hn.className;
                    return O.createElement(
                      u,
                      {
                        ref: ie,
                        className: "Tooltip ".concat(Uh),
                        style: Wr(Wr({}, qt), $ && { pointerEvents: "none" }),
                        truncate: c,
                        placement: F,
                        testId: wc() ? p : p && "".concat(p, "--unresolved"),
                        onMouseOut: Pe,
                        onMouseOver: Dr,
                      },
                      typeof i == "function" ? i({ update: oi }) : i,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var zS = [
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
  sa = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  ff = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syaz1gjq _k48pmoej" },
  Ah = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var o = t.innerRef,
      i = t.isSortable,
      s = t.sortOrder,
      c = t.onClick,
      l = t.headCellId,
      u = t.activeSortButtonId,
      d = t.ascendingSortTooltip,
      f = d === void 0 ? "Sort ascending" : d,
      p = t.descendingSortTooltip,
      h = p === void 0 ? "Sort descending" : p,
      v = t.buttonAriaRoleDescription,
      g = v === void 0 ? "Sort button" : v,
      m = t.isIconOnlyHeader,
      _ = Q(t, zS),
      w = b.useState(!1),
      k = Z(w, 2),
      y = k[0],
      S = k[1],
      E = b.useState(!1),
      A = Z(E, 2),
      D = A[0],
      P = A[1],
      T = l === u || s !== void 0,
      B = y || T || D,
      $ = B && m,
      q = !m || B || (m && !D),
      U = b.useCallback(
        function () {
          P?.(!0);
        },
        [P],
      ),
      F = b.useCallback(
        function () {
          P?.(!1);
        },
        [P],
      ),
      G = b.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      Y = b.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      I = O.createElement(
        Zo,
        { xcss: ff.headCellContainer, onMouseEnter: G, onMouseLeave: Y, onFocus: U, onBlur: F },
        O.createElement(
          FS,
          { content: s === Cr ? f : h },
          O.createElement(
            Mp,
            { onClick: c, xcss: sa.buttonWrapper, "aria-roledescription": g },
            O.createElement(
              Io,
              { xcss: $ ? sa.hideIconHeaderWrapper : sa.visibleHeaderWrapper },
              O.createElement("span", { className: R([ff.text]) }, r),
            ),
            q &&
              O.createElement(
                Io,
                { xcss: B ? sa.sortIconVisibleWrapper : sa.sortIconHiddenWrapper },
                s === Cr
                  ? O.createElement(Ck, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : O.createElement(Sk, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return O.createElement(
      ih,
      W(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof o != "string" ? o : null,
        },
        _,
        { isSortable: i, sortOrder: s },
      ),
      i ? I : r,
    );
  },
  qS = ["isRanking", "refHeight", "refWidth"];
function US(e, t, r) {
  return (
    (t = J(t)),
    qe(e, Ih() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
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
var VS = (function (e) {
    function t() {
      return (pe(this, t), US(this, t, arguments));
    }
    return (
      Ue(t, e),
      he(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var o = n.refWidth,
              i = Q(n, qS),
              s = ap(a, o);
            return O.createElement(Ah, W({ inlineStyles: s }, i));
          },
        },
      ])
    );
  })(O.Component),
  GS = ch(VS),
  HS = ["content", "inlineStyles", "testId", "isRanking", "innerRef", "isSortable", "onClick"],
  jh = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var o = t.innerRef,
      i = t.isSortable,
      s = t.onClick,
      c = Q(t, HS);
    return O.createElement(
      ih,
      W(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof o != "string" ? o : null,
        },
        c,
        { onClick: s, isSortable: i },
      ),
      i
        ? O.createElement("button", { type: "button", "aria-roledescription": "Sort button" }, r)
        : r,
    );
  },
  WS = ["isRanking", "refHeight", "refWidth"];
function KS(e, t, r) {
  return (
    (t = J(t)),
    qe(e, Dh() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function Dh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Dh = function () {
    return !!e;
  })();
}
var YS = (function (e) {
    function t() {
      return (pe(this, t), KS(this, t, arguments));
    }
    return (
      Ue(t, e),
      he(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var o = n.refWidth,
              i = Q(n, WS),
              s = ap(a, o);
            return O.createElement(jh, W({ inlineStyles: s }, i));
          },
        },
      ])
    );
  })(O.Component),
  JS = ch(YS),
  XS = ["cells"],
  ZS = [
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
function QS(e, t, r) {
  return (
    (t = J(t)),
    qe(e, Th() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
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
var ex = (function (e) {
    function t(r) {
      var n;
      return (pe(this, t), (n = QS(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Ue(t, e),
      he(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            xo(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              xo(n.sortKey, n.head);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              a = this.props,
              o = a.head,
              i = a.sortKey,
              s = a.sortOrder,
              c = a.isFixedSize,
              l = a.onSort,
              u = a.isRanking,
              d = a.isRankable,
              f = a.testId,
              p = this.state.activeSortButtonId;
            if (!o) return null;
            var h = d ? JS : jh,
              v = d ? GS : Ah,
              g = o.cells,
              m = Q(o, XS);
            return O.createElement(
              _k,
              W({}, m, { isRanking: u, testId: f && "".concat(f, "--head") }),
              O.createElement(
                "tr",
                null,
                g.map(function (_, w) {
                  var k = _.ascendingSortTooltip,
                    y = _.buttonAriaRoleDescription,
                    S = _.colSpan,
                    E = _.content,
                    A = _.descendingSortTooltip,
                    D = _.isIconOnlyHeader,
                    P = _.isSortable,
                    T = _.key,
                    B = _.shouldTruncate,
                    $ = _.testId,
                    q = _.width,
                    U = Q(_, ZS),
                    F = "head-cell-".concat(w),
                    G = function () {
                      (n.setState({ activeSortButtonId: F }), P && l(_)());
                    };
                  return de("platform-component-visual-refresh")
                    ? O.createElement(
                        v,
                        W(
                          {
                            colSpan: S,
                            content: E,
                            isFixedSize: c,
                            isIconOnlyHeader: D,
                            isSortable: !!P,
                            isRanking: u,
                            key: T || w,
                            headCellId: F,
                            activeSortButtonId: p,
                            onClick: G,
                            testId: $ || f,
                            shouldTruncate: B,
                            sortOrder: T === i ? s : void 0,
                            width: q,
                            ascendingSortTooltip: k,
                            descendingSortTooltip: A,
                            buttonAriaRoleDescription: y,
                          },
                          U,
                        ),
                      )
                    : O.createElement(
                        h,
                        W(
                          {
                            colSpan: S,
                            content: E,
                            isFixedSize: c,
                            isSortable: !!P,
                            isRanking: u,
                            key: T || w,
                            onClick: P ? l(_) : void 0,
                            testId: $ || f,
                            shouldTruncate: B,
                            sortOrder: T === i ? s : void 0,
                            width: q,
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
  tx = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function rx(e) {
  switch (e) {
    case Po:
      return Cr;
    case Cr:
      return Po;
    default:
      return e;
  }
}
var nx = function (t) {
    var r = t.caption,
      n = t.head,
      a = t.highlightedRowIndex,
      o = t.rows,
      i = t.sortKey,
      s = t.sortOrder,
      c = t.loadingLabel,
      l = t.onPageRowsUpdate,
      u = t.testId,
      d = t.totalRows,
      f = t.label,
      p = t.isLoading,
      h = p === void 0 ? !1 : p,
      v = t.isFixedSize,
      g = v === void 0 ? !1 : v,
      m = t.rowsPerPage,
      _ = m === void 0 ? 1 / 0 : m,
      w = t.onSetPage,
      k = w === void 0 ? Ae : w,
      y = t.onSort,
      S = y === void 0 ? Ae : y,
      E = t.page,
      A = E === void 0 ? 1 : E,
      D = t.emptyView,
      P = t.isRankable,
      T = P === void 0 ? !1 : P,
      B = t.isRankingDisabled,
      $ = B === void 0 ? !1 : B,
      q = t.onRankStart,
      U = q === void 0 ? Ae : q,
      F = t.onRankEnd,
      G = F === void 0 ? Ae : F,
      Y = t.loadingSpinnerSize,
      I = t.paginationi18n,
      V =
        I === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : I,
      ge = b.useState(!1),
      H = Z(ge, 2),
      we = H[0],
      fe = H[1],
      ve = b.useRef(null),
      be = rn({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      Te = rn({
        fn: G,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    b.useEffect(
      function () {
        (xo(i, n), iy(n));
      },
      [i, n],
    );
    var ke = function (Se) {
        return function () {
          var Pe = Se.key;
          if (Pe) {
            if (be && T && Pe === i && s === Po) {
              be({ key: null, sortOrder: null, item: Se });
              return;
            }
            var Ft = Pe !== i ? Cr : rx(s);
            be && be({ key: Pe, item: Se, sortOrder: Ft });
          }
        };
      },
      Me = function (Se, Pe) {
        k(Se, Pe);
      },
      le = function (Se) {
        (fe(!0), U(Se));
      },
      Ze = function (Se) {
        (fe(!1), Te(Se));
      },
      St = function () {
        return Y || (np(o || [], A, _).length > 2 ? Ro : P_);
      },
      Ve = function () {
        return h ? O.createElement(F_, { testId: u }) : D && O.createElement(z_, { testId: u }, D);
      },
      Qe = o && o.length,
      Ce,
      et = !1;
    (d && Number.isInteger(d) && _ && Qe && Qe <= d
      ? ((Ce = Math.ceil(d / _)), (et = !0))
      : (Ce = Qe && _ ? Math.ceil(Qe / _) : 0),
      (Ce = Ce < 1 ? 1 : Ce));
    var tt = A > Ce ? Ce : A,
      Ge = !!Qe,
      pt = St(),
      je = Ve();
    return O.createElement(
      O.Fragment,
      null,
      O.createElement(
        Pp,
        {
          isLoading: h && Ge,
          spinnerSize: pt,
          targetRef: function () {
            return ve.current;
          },
          testId: u,
          loadingLabel: c,
        },
        O.createElement(
          L_,
          { isFixedSize: g, "aria-label": f, hasDataRow: Ge, testId: u, isLoading: h },
          !!r && O.createElement($_, null, r),
          n &&
            O.createElement(ex, {
              head: n,
              onSort: ke,
              sortKey: i,
              sortOrder: s,
              isRanking: we,
              isRankable: T,
              testId: u,
            }),
          Ge &&
            O.createElement(ox, {
              ref: ve,
              highlightedRowIndex: a,
              rows: o,
              head: n,
              sortKey: i,
              sortOrder: s,
              rowsPerPage: _,
              page: tt,
              isFixedSize: g || !1,
              onPageRowsUpdate: l,
              isTotalPagesControlledExternally: et,
              testId: u,
              isRankable: T,
              isRanking: we,
              onRankStart: le,
              onRankEnd: Ze,
              isRankingDisabled: $ || h || !1,
            }),
        ),
      ),
      Ce <= 1
        ? null
        : O.createElement(
            B_,
            { testId: u },
            O.createElement(bk, {
              value: tt,
              onChange: Me,
              total: Ce,
              i18n: V,
              isDisabled: h,
              testId: u,
            }),
          ),
      !Ge &&
        je &&
        O.createElement(Ep, { isLoading: h, spinnerSize: Ro, testId: u, loadingLabel: c }, je),
    );
  },
  ax = b.lazy(function () {
    return uy(
      () => import("./body-Bl-ie6rp.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  ox = b.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      o = t.isRanking,
      i = t.onRankStart,
      s = t.onRankEnd,
      c = t.isRankingDisabled,
      l = Q(t, tx),
      u = a && !l.sortKey,
      d = b.useState(!1),
      f = Z(d, 2),
      p = f[0],
      h = f[1];
    b.useEffect(
      function () {
        u && h(!0);
      },
      [u],
    );
    var v = O.createElement(r0, W({ ref: r }, l));
    return u && p
      ? O.createElement(
          a0,
          { fallback: v },
          O.createElement(
            b.Suspense,
            { fallback: v },
            O.createElement(
              ax,
              W({ ref: r }, l, {
                isRanking: o,
                onRankStart: i,
                onRankEnd: s,
                isRankingDisabled: c,
              }),
            ),
          ),
        )
      : v;
  });
function ix(e, t, r) {
  return (
    (t = J(t)),
    qe(e, Mh() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
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
var Nh = (function (e) {
  function t() {
    var r;
    pe(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = ix(this, t, [].concat(a))),
      C(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      C(r, "onSetPageHandler", function (i, s) {
        var c = r.props.onSetPage;
        c && (c(i, s), r.setState({ page: i }));
      }),
      C(r, "onSortHandler", function (i, s) {
        var c = i.key,
          l = i.item,
          u = i.sortOrder,
          d = r.props.onSort;
        d && (d({ key: c, item: l, sortOrder: u }, s), r.setState({ sortKey: c, sortOrder: u }));
      }),
      C(r, "onRankEndIfExistsHandler", function (i) {
        r.props.onRankEnd && r.props.onRankEnd(i);
      }),
      C(r, "onRankEndHandler", function (i) {
        var s = i.destination,
          c = r.state,
          l = c.rows,
          u = c.page,
          d = r.props.rowsPerPage;
        if (!s || !l) {
          r.onRankEndIfExistsHandler(i);
          return;
        }
        var f = sy(i, l, u, d);
        (r.setState({ rows: f }), r.onRankEndIfExistsHandler(i));
      }),
      r
    );
  }
  return (
    Ue(t, e),
    he(t, [
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
            s = n.rows,
            c = this.props,
            l = c.caption,
            u = c.emptyView,
            d = c.head,
            f = c.highlightedRowIndex,
            p = c.loadingSpinnerSize,
            h = c.isLoading,
            v = c.loadingLabel,
            g = c.isFixedSize,
            m = c.isRankable,
            _ = c.isRankingDisabled,
            w = c.rowsPerPage,
            k = c.paginationi18n,
            y = c.onRankStart,
            S = c.onPageRowsUpdate,
            E = c.testId,
            A = c.label;
          return O.createElement(nx, {
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
            rows: s,
            rowsPerPage: w,
            sortKey: o,
            sortOrder: i,
            isRankable: m,
            isRankingDisabled: _,
            onRankEnd: this.onRankEndHandler,
            onRankStart: y,
            onPageRowsUpdate: S,
            testId: E,
            label: A,
          });
        },
      },
    ])
  );
})(O.Component);
C(Nh, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Ae,
  onSort: Ae,
  rowsPerPage: 1 / 0,
});
const sx = (e) => {
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
  cx = (e) => ({ cells: sx() });
function lx(e) {
  return function (t) {
    e.forEach(function (r) {
      typeof r == "function" ? r(t) : r !== null && (r.current = t);
    });
  };
}
var Lh = b.createContext(void 0),
  ux = function () {
    var t = b.useContext(Lh);
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
var dx = 9;
function vf(e) {
  e.keyCode !== dx && Kt(e);
}
function fx(e, t) {
  return e
    ? {
        onMouseDownCapture: Kt,
        onMouseUpCapture: Kt,
        onKeyDownCapture: vf,
        onKeyUpCapture: vf,
        onTouchStartCapture: Kt,
        onTouchEndCapture: Kt,
        onPointerDownCapture: Kt,
        onPointerUpCapture: Kt,
        onClickCapture: Kt,
        onClick: Kt,
      }
    : t;
}
function vx(e) {
  switch (e) {
    case "compact":
      return "small";
    default:
      return "medium";
  }
}
function px(e) {
  var t = e.appearance,
    r = e.isDisabled,
    n = e.isSelected;
  return r || n
    ? "inherit"
    : t === "primary" || t === "danger" || t === "discovery"
      ? "invert"
      : "inherit";
}
function hx(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isDisabled,
    a = e.isSelected,
    o = e.testId;
  return O.createElement(tc, {
    size: vx(r),
    appearance: px({ appearance: t, isDisabled: n, isSelected: a }),
    testId: o ? "".concat(o, "--loading-spinner") : void 0,
  });
}
var gx = [
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
  bx = ["className", "css", "as", "style"],
  pf = ", Loading",
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
  Kr = {
    root: "_bfhk1j54 _syaz10s3 _105310s3 _f8pj10s3 _30l310s3 _9h8h10s3",
    rootRefreshed:
      "_bfhksm61 _syaz1gjq _8l3mmuej _aetrb3bt _10531gjq _f8pj1gjq _30l31gjq _9h8h1gjq",
    interactive: "_irr3yw9d _30l310s3 _1di6ih13 _9h8h10s3",
    interactiveRefreshed: "_irr3166n _30l31gjq _1di61dty _9h8h1gjq",
    disabledRefreshed: "_bfhk1j28 _8l3m13gt _irr31j28 _1di61j28",
  },
  hf = {
    root: "_bfhkomb0 _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31wqm _9h8h15cr _1di617hq",
  },
  gf = {
    root: "_bfhk1ikc _syazal3n _1053al3n _f8pjal3n _30l3al3n _9h8hal3n",
    interactive: "_30l3al3n _irr31j43 _9h8hal3n _1di6h4op",
  },
  bf = {
    root: "_bfhk1v7l _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31rwk _9h8h15cr _1di6yycf",
  },
  mf = {
    root: "_bfhk1vbi _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr37gr8 _9h8h15cr _1di61wu2",
  },
  eo = {
    root: "_bfhkqtfy _syaz10s3 _105310s3 _f8pj10s3 _30l310s3 _9h8h10s3",
    rootRefreshed: "_bfhkqtfy _syaz1gjq _10531gjq _f8pj1gjq _30l31gjq _9h8h1gjq",
    interactive: "_irr34mfv _30l310s3 _1di619qy _9h8h10s3",
    interactiveRefreshed: "_irr34mfv _30l31gjq _1di619qy _9h8h1gjq",
  },
  yr = {
    root: "_bfhk7btw _syaz1pke _10531pke _f8pj1pke _30l31pke _9h8h1pke",
    rootRefreshed:
      "_bfhkfg4m _syaz1ldt _8l3mcoux _aetrb3bt _10531ldt _f8pj1ldt _30l31ldt _9h8h1ldt",
    insideSplitButton: "_1pbycs5v",
    interactive: "_irr3t71w _30l31pke _1di6yssv _9h8h1pke",
    warning: "_bfhkvdtc _syaz16q2 _30l31pke _irr3vdtc _9h8h1pke _1di6vdtc",
    danger: "_bfhkbeib _syaz1pke _30l31pke _irr3beib _9h8h1pke _1di6beib",
    discovery: "_bfhk1g49 _syaz1pke _30l31pke _irr31g49 _9h8h1pke _1di61g49",
  },
  mx = O.forwardRef(function (e, t) {
    var r = e.appearance,
      n = e.autoFocus,
      a = n === void 0 ? !1 : n,
      o = e.isDisabled,
      i = o === void 0 ? !1 : o,
      s = e.isLoading,
      c = s === void 0 ? !1 : s,
      l = e.isSelected,
      u = l === void 0 ? !1 : l,
      d = e.isIconButton,
      f = d === void 0 ? !1 : d,
      p = e.isCircle,
      h = p === void 0 ? !1 : p,
      v = e.hasIconBefore,
      g = v === void 0 ? !1 : v,
      m = e.hasIconAfter,
      _ = m === void 0 ? !1 : m,
      w = e.shouldFitContainer,
      k = w === void 0 ? !1 : w,
      y = e.spacing,
      S = y === void 0 ? "default" : y,
      E = e.ariaLabel,
      A = e.ariaLabelledBy,
      D = e.children,
      P = e.interactionName,
      T = e.onClick,
      B = e.onMouseDown,
      $ = e.onMouseDownCapture,
      q = e.onMouseUp,
      U = e.onMouseUpCapture,
      F = e.onKeyDown,
      G = e.onKeyDownCapture,
      Y = e.onKeyUp,
      I = e.onKeyUpCapture,
      V = e.onTouchStart,
      ge = e.onTouchStartCapture,
      H = e.onTouchEnd,
      we = e.onTouchEndCapture,
      fe = e.onPointerDown,
      ve = e.onPointerDownCapture,
      be = e.onPointerUp,
      Te = e.onPointerUpCapture,
      ke = e.onClickCapture,
      Me = e.testId,
      le = e.analyticsContext,
      Ze = e.componentName,
      St = e.role,
      Ve = e.onMouseOver,
      Qe = e.onMouseOut,
      Ce = e.onFocus,
      et = e.onBlur,
      tt = e.onMouseMove,
      Ge = e.type,
      pt = Q(e, gx),
      je = b.useRef(null),
      ne = ux(),
      Se = Bp(),
      Pe = !!ne,
      Ft = ne?.isNavigationSplitButton || !1,
      Dr = ne?.appearance === "default",
      ue =
        Dr && de("platform-component-visual-refresh") ? "subtle" : r || ne?.appearance || "default",
      nr = ne?.spacing || S,
      rt = ne?.isDisabled || i,
      zt = !rt && !c,
      Tr = rt || c,
      xt = u && !rt;
    (eh(je, a), pt.className, pt.css, pt.as, pt.style);
    var qa = Q(pt, bx);
    return O.createElement(
      Mp,
      W(
        {},
        qa,
        {
          componentName: Ze || "button",
          analyticsContext: le,
          role: St,
          ref: lx([je, t]),
          xcss: jp(
            De.base,
            ue === "default" &&
              (de("platform-component-visual-refresh") ? Kr.rootRefreshed : Kr.root),
            ue === "default" &&
              zt &&
              (de("platform-component-visual-refresh") ? Kr.interactiveRefreshed : Kr.interactive),
            ue === "primary" && hf.root,
            ue === "primary" && zt && hf.interactive,
            ue === "warning" && gf.root,
            ue === "warning" && zt && gf.interactive,
            ue === "danger" && bf.root,
            ue === "danger" && zt && bf.interactive,
            ue === "discovery" && mf.root,
            ue === "discovery" && zt && mf.interactive,
            ue === "subtle" &&
              (de("platform-component-visual-refresh") ? eo.rootRefreshed : eo.root),
            ue === "subtle" &&
              zt &&
              (de("platform-component-visual-refresh") ? eo.interactiveRefreshed : eo.interactive),
            De.linkDecorationUnset,
            xt && (de("platform-component-visual-refresh") ? yr.rootRefreshed : yr.root),
            xt && Pe && yr.insideSplitButton,
            xt && zt && yr.interactive,
            xt && ue === "danger" && yr.danger,
            xt && ue === "warning" && yr.warning,
            xt && ue === "discovery" && yr.discovery,
            rt && De.disabled,
            rt &&
              (!de("platform-component-visual-refresh") || (ue !== "default" && ue !== "subtle")) &&
              De.sharedDisabled,
            rt &&
              ue === "default" &&
              (de("platform-component-visual-refresh") ? Kr.disabledRefreshed : Kr.disabled),
            h && !Pe && De.circle,
            nr === "compact" && De.spacingCompact,
            g && De.buttonIconBefore,
            k && De.fullWidth,
            _ && De.buttonIconAfter,
            f && De.iconButton,
            f && nr === "compact" && De.iconButtonCompact,
            c && De.loading,
            Pe && De.splitButton,
            Ft && De.navigationSplitButton,
          ),
          isDisabled: Tr,
          "aria-label": c && E && !A ? "".concat(E, " ").concat(pf) : E,
          "aria-labelledby": c && A ? "".concat(A, " ").concat(Se) : A,
          onClick: T,
        },
        fx(Tr, {
          onMouseDownCapture: $,
          onMouseUpCapture: U,
          onKeyDownCapture: G,
          onKeyUpCapture: I,
          onTouchStartCapture: ge,
          onTouchEndCapture: we,
          onPointerDownCapture: ve,
          onPointerUpCapture: Te,
          onClickCapture: ke,
        }),
        {
          testId: Me,
          onMouseOver: Ve,
          onFocus: Ce,
          onMouseMove: tt,
          onBlur: et,
          type: Ge,
          interactionName: P,
          onMouseDown: B,
          onMouseUp: q,
          onKeyDown: F,
          onMouseOut: Qe,
          onKeyUp: Y,
          onTouchStart: V,
          onTouchEnd: H,
          onPointerDown: fe,
          onPointerUp: be,
        },
      ),
      O.createElement(
        Lh.Provider,
        { value: void 0 },
        D,
        c &&
          O.createElement(
            "span",
            { className: R([De.loadingOverlay]) },
            hx({ spacing: nr, appearance: ue, isDisabled: rt, isSelected: xt, testId: Me }),
          ),
        c && (A || !E) && O.createElement(ac, { id: Se }, pf),
      ),
    );
  }),
  Yr = {
    text: "_1reo15vq _18m915vq _16jlkb7n _1o9zkb7n _1bto1l2s _o5721q9c",
    icon: "_1e0c1txw _16jlidpf _1o9zidpf _1wpz1h6o _1wybidpf _vwz4idpf _uiztglyw",
    beforeIcon: "_1he91b66 _w795v77o",
    afterIcon: "_1he9v77o _w7951b66",
    common: "_v564g17y",
    fade: "_tzy4idpf",
  },
  is = function (t) {
    var r = t.children,
      n = t.type,
      a = n === void 0 ? "text" : n,
      o = t.isLoading,
      i = t.position;
    return O.createElement(
      "span",
      {
        className: R([
          Yr.common,
          a === "text" && Yr.text,
          a === "icon" && Yr.icon,
          o && Yr.fade,
          i === "before" && Yr.beforeIcon,
          i === "after" && Yr.afterIcon,
        ]),
      },
      r,
    );
  };
function yx(e) {
  return !e.displayName && !e.render && typeof e == "function";
}
var yf = function (t) {
    var r = t.icon,
      n = yx(r),
      a = {
        label: "",
        color: "currentColor",
        size: de("platform_dst_button_chevron_sizing")
          ? function (o) {
              return o.startsWith("Chevron") ? "small" : "medium";
            }
          : void 0,
      };
    return O.createElement(O.Fragment, null, n ? r(a) : O.createElement(r, a));
  },
  _x = [
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
  wx = ["className", "css", "as", "style"],
  _c = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.analyticsContext,
        a = t.appearance,
        o = t["aria-label"],
        i = t["aria-labelledby"],
        s = t.autoFocus,
        c = t.children,
        l = t.iconAfter,
        u = t.iconBefore,
        d = t.interactionName,
        f = t.isDisabled,
        p = t.isLoading,
        h = p === void 0 ? !1 : p,
        v = t.isSelected,
        g = t.onClick,
        m = t.onClickCapture,
        _ = t.onKeyDownCapture,
        w = t.onKeyUpCapture,
        k = t.onMouseDownCapture,
        y = t.onMouseUpCapture,
        S = t.onPointerDownCapture,
        E = t.onPointerUpCapture,
        A = t.onTouchEndCapture,
        D = t.onTouchStartCapture,
        P = t.shouldFitContainer,
        T = t.spacing,
        B = t.testId,
        $ = t.type,
        q = $ === void 0 ? "button" : $,
        U = Q(t, _x);
      (U.className, U.css, U.as, U.style);
      var F = Q(U, wx);
      return O.createElement(
        mx,
        W(
          {
            analyticsContext: n,
            ref: r,
            appearance: a,
            autoFocus: s,
            isDisabled: f,
            isLoading: h,
            isSelected: v,
            hasIconBefore: !!u,
            hasIconAfter: !!l,
            shouldFitContainer: P,
            spacing: T,
            ariaLabel: o,
            ariaLabelledBy: i,
            onClick: g,
            onClickCapture: m,
            onKeyDownCapture: _,
            onKeyUpCapture: w,
            onMouseDownCapture: k,
            onMouseUpCapture: y,
            onPointerDownCapture: S,
            onPointerUpCapture: E,
            onTouchStartCapture: D,
            onTouchEndCapture: A,
            testId: B,
            componentName: "Button",
            type: q,
            interactionName: d,
          },
          F,
        ),
        O.createElement(
          b.Fragment,
          null,
          u &&
            O.createElement(
              is,
              { type: "icon", position: "before", isLoading: h },
              O.createElement(yf, { icon: u }),
            ),
          c && O.createElement(is, { isLoading: h }, c),
          l &&
            O.createElement(
              is,
              { type: "icon", position: "after", isLoading: h },
              O.createElement(yf, { icon: l }),
            ),
        ),
      );
    }),
  );
_c.displayName = "Button";
const to = Yo((e) => {
  const { stateStore: t } = Jo(),
    r = cx();
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
            x.jsx(Nh, {
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
                      children: x.jsx(_c, {
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
function kx(e) {
  return tp(e) || op(e) || Xs(e) || rp();
}
var $h = b.createContext(null),
  Bh = b.createContext(null),
  Fh = b.createContext(null);
function _f(e, t) {
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
function Ox(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _f(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _f(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Sx = { componentName: "tabs", packageName: "@atlaskit/tabs", packageVersion: "18.1.10" },
  wf = function (t) {
    var r = t.tabPanel,
      n = t.index,
      a = t.isSelected,
      o = t.tabsId;
    return (
      r &&
      b.createElement(
        Fh.Provider,
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
  xx = function (t) {
    var r = t.shouldUnmountTabPanelOnChange,
      n = r === void 0 ? !1 : r,
      a = t.selected,
      o = t.defaultSelected,
      i = t.onChange,
      s = t.id,
      c = t.analyticsContext,
      l = t.children,
      u = t.testId,
      d = b.useState(a || o || 0),
      f = Z(d, 2),
      p = f[0],
      h = f[1],
      v = a === void 0 ? p : a,
      g = b.Children.toArray(l).filter(function (A) {
        return !!A;
      }),
      m = kx(g),
      _ = m[0],
      w = m.slice(1),
      k = b.useRef(new Set([v]));
    k.current.has(v) || k.current.add(v);
    var y = b.useCallback(
        function (A, D) {
          (i && i(A, D), h(A));
        },
        [i],
      ),
      S = rn(Ox({ fn: y, action: "clicked", analyticsData: c }, Sx)),
      E = n
        ? wf({ tabPanel: w[v], index: v, isSelected: !0, tabsId: s })
        : Array.from(k.current).map(function (A) {
            return wf({ tabPanel: w[A], index: A, isSelected: A === v, tabsId: s });
          });
    return b.createElement(
      "div",
      {
        "data-testid": u,
        className: R([
          "_1e0c1txw _p12f1osq _1tkeidpf _i0dl1osq _2lx21bp4 _16jlkb7n",
          "_1c3y1txw _ftfaidpf _18i0kb7n _185bglyw",
        ]),
      },
      b.createElement(Bh.Provider, { value: { selected: v, onChange: S, tabsId: s } }, _),
      b.createElement(b.Fragment, null, E),
    );
  },
  Ex = function () {
    var t = b.useContext($h);
    if (t == null || typeof t > "u")
      throw Error("@atlaskit/tabs: A Tab must have a TabList parent.");
    return t;
  },
  Cx = function () {
    var t = b.useContext(Bh);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs: A TabList must have a Tabs parent.");
    return t;
  },
  Px = function () {
    var t = b.useContext(Fh);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs:  A TabPanel must have a Tabs parent.");
    return t;
  },
  ca = function (t) {
    var r = t.children,
      n = t.testId,
      a = Px(),
      o = a.role,
      i = a.id,
      s = a.hidden,
      c = a["aria-labelledby"],
      l = a.tabIndex;
    return O.createElement(
      nc,
      {
        as: "div",
        isInset: !0,
        testId: n,
        role: o,
        id: i,
        hidden: s,
        "aria-labelledby": c,
        tabIndex: l,
      },
      O.createElement(b.Fragment, null, r),
    );
  },
  ro = b.forwardRef(function (t, r) {
    var n = t.children,
      a = t.testId,
      o = Ex(),
      i = o.onClick,
      s = o.id,
      c = o["aria-controls"],
      l = o["aria-posinset"],
      u = o["aria-selected"],
      d = o["aria-setsize"],
      f = o.onKeyDown,
      p = o.role,
      h = o.tabIndex;
    return O.createElement(
      nc,
      {
        as: "div",
        isInset: !0,
        testId: a,
        onClick: i,
        id: s,
        "aria-controls": c,
        "aria-posinset": l,
        "aria-selected": u,
        "aria-setsize": d,
        onKeyDown: f,
        role: p,
        tabIndex: h,
        ref: r,
      },
      O.createElement(Tp, { weight: "medium", color: "inherit", maxLines: 1 }, n),
    );
  }),
  Rx = function (t) {
    var r = t.children,
      n = Cx(),
      a = n.tabsId,
      o = n.selected,
      i = n.onChange,
      s = b.createRef(),
      c = b.Children.toArray(r).filter(Boolean),
      l = c.length,
      u = b.useCallback(
        function (p) {
          var h,
            v =
              (h = s.current) === null || h === void 0
                ? void 0
                : h.querySelector("[id='".concat(a, "-").concat(p, "']"));
          (v && v.focus(), i(p));
        },
        [a, s, i],
      ),
      d = b.useCallback(
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
              m = p.key === "ArrowRight" ? 1 : -1,
              _ = g + m;
            ((_ < 0 || _ >= l) && (_ = _ < 0 ? h : 0), u(_));
          }
        },
        [l, u],
      ),
      f = b.useCallback(
        function (p) {
          var h = p.tab,
            v = p.isSelected,
            g = p.index;
          return b.createElement(
            $h.Provider,
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
    return b.createElement(
      "div",
      {
        role: "tablist",
        ref: s,
        className: R([
          "_1e0c1txw _kqswh2mm _85i5ze3t _1q51ze3t _y4tize3t _bozgze3t",
          de("platform-component-visual-refresh")
            ? "_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _7hip15vq _1fud15vq _bb0mh2mm _1quz1425 _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _1lzufiwc _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oaz1fgx _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1b8dfiwc _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i2072d1 _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _rsmz12s7 _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiemln51 _pascidpf _eid3idpf _zr3eidpf _fntnidpf _1mp41kw7 _kfgte4h9 _1cs8stnw _1russudh _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc"
            : "_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _7hip15vq _1fud15vq _bb0mh2mm _1quz1425 _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _17hylb4i _1lzuownz _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oaz1fgx _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1jaklb4i _1b8downz _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i2072d1 _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _9r9ulb4i _rsmz73hj _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiemln51 _pascidpf _eid3idpf _zr3eidpf _fntnidpf _rfx3lb4i _1mp41kw7 _kfgt1dm9 _1cs8stnw _1russudh _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc",
        ]),
        style: {
          "--_13a5t4u": ye("var(--ds-text-subtle, ".concat(nn, ")")),
          "--_kkbq40": ye("var(--ds-text-subtle, ".concat(Ct, ")")),
          "--_y4kn7q": ye("3px solid ".concat("var(--ds-border, transparent)")),
          "--_71dbsd": ye("var(--ds-text, ".concat(Rs, ")")),
          "--_1hfkvbo": ye("var(--ds-text-selected, ".concat(Ct, ")")),
          "--_1c11uqn": ye("3px solid ".concat("var(--ds-border-selected, ".concat(Ct, ")"))),
          "--_lvpq93": ye("var(--ds-border, ".concat(I_, ")")),
          "--_afs77": ye(
            "var(--ds-border-width-selected, 2px)".concat(
              " solid ",
              "var(--ds-border, transparent)",
            ),
          ),
          "--_1q7mpl4": ye(
            "var(--ds-border-width-selected, 2px)".concat(
              " solid ",
              "var(--ds-border-selected, ".concat(Ct, ")"),
            ),
          ),
        },
      },
      c.map(function (p, h) {
        return f({ tab: p, index: h, isSelected: h === o });
      }),
    );
  },
  zh = ((e) => (
    (e[(e.WITHOUT_VERSIONING = 0)] = "WITHOUT_VERSIONING"),
    (e[(e.OPTIMISTIC_NUMBER = 1)] = "OPTIMISTIC_NUMBER"),
    (e[(e.OPTIMISTIC_DATE = 2)] = "OPTIMISTIC_DATE"),
    (e[(e.OPTIMISTIC_TIMESTAMP = 3)] = "OPTIMISTIC_TIMESTAMP"),
    e
  ))(zh || {});
const Ax = Object.keys(zh).filter((e) => isNaN(Number(e))),
  no = ({ children: e, testId: t }) =>
    x.jsx("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: Ht("color.background.neutral"),
        borderRadius: "3px",
        color: Ht("color.text.subtlest"),
        font: Ht("font.heading.xxlarge"),
        marginBlockEnd: Ht("space.100", "8px"),
        marginBlockStart: Ht("space.200", "16px"),
        paddingBlockEnd: Ht("space.400", "32px"),
        paddingBlockStart: Ht("space.400", "32px"),
        paddingInlineEnd: Ht("space.400", "32px"),
        paddingInlineStart: Ht("space.400", "32px"),
      },
      "data-testid": t,
      children: e,
    });
function Ix() {
  const { stateStore: e } = Jo();
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
              x.jsxs(_c, {
                appearance: "danger",
                onClick: async () => {
                  try {
                    (e.loading("Clear ..."),
                      await wa.invoke("clearAll", {
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
          x.jsxs(xx, {
            onChange: (t) => console.log("Selected Tab", t + 1),
            defaultSelected: 1,
            id: "default",
            children: [
              x.jsxs(Rx, {
                children: [
                  " ",
                  Ax.map((t) => {
                    switch (t) {
                      case "WITHOUT_VERSIONING":
                        return x.jsx(
                          ro,
                          { children: "Entity Without Version Column (No Locking)" },
                          t,
                        );
                      case "OPTIMISTIC_NUMBER":
                        return x.jsx(ro, { children: "Entity with Numeric Version Column" }, t);
                      case "OPTIMISTIC_DATE":
                        return x.jsx(
                          ro,
                          { children: "Entity with Datetime-Based Version Column" },
                          t,
                        );
                      case "OPTIMISTIC_TIMESTAMP":
                        return x.jsx(
                          ro,
                          { children: "Entity with Timestamp-BasedVersion Column" },
                          t,
                        );
                    }
                  }),
                ],
              }),
              x.jsx(ca, { children: x.jsx(x.Fragment, {}) }),
              x.jsx(ca, {
                children: x.jsx(no, {
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
                      x.jsx(to, { type: "WITHOUT_VERSIONING" }),
                    ],
                  }),
                }),
              }),
              x.jsx(ca, {
                children: x.jsx(no, {
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
                      x.jsx(to, { type: "OPTIMISTIC_NUMBER" }),
                    ],
                  }),
                }),
              }),
              x.jsx(ca, {
                children: x.jsx(no, {
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
                      x.jsx(to, { type: "OPTIMISTIC_DATE" }),
                    ],
                  }),
                }),
              }),
              x.jsx(ca, {
                children: x.jsx(no, {
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
                      x.jsx(to, { type: "OPTIMISTIC_TIMESTAMP" }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
}
const jx = Yo(Ix),
  Dx = Yo((e) => {
    const { stateStore: t } = Jo(),
      [r, n] = b.useState(""),
      [a, o] = b.useState({}),
      i = (l) => {
        const { name: u, value: d, type: f } = l.target;
        o((p) => ({ ...p, [u]: f === "number" ? Number(d) : d }));
      },
      s = async (l) => {
        l.preventDefault();
        const u = { ...c };
        (a.testNameColumn && (u.testNameColumn = a.testNameColumn),
          a.testDateColumn && (u.testDateColumn = new Date(a.testDateColumn)));
        const d = await wa.invoke("update", { data: u, objectName: e.type });
        n(d);
      };
    let c;
    switch (e.type) {
      case "WITHOUT_VERSIONING": {
        c = t.testData;
        break;
      }
      case "OPTIMISTIC_NUMBER": {
        c = t.testDataOptimisticNumber;
        break;
      }
      case "OPTIMISTIC_DATE": {
        c = t.testDataOptimisticDateId;
        break;
      }
      case "OPTIMISTIC_TIMESTAMP": {
        c = t.testDataOptimisticTimeStampId;
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
                const l = await wa.invoke("fetchOrCreateIfNotExists");
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
          onSubmit: s,
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
                    defaultValue: c.testNameColumn,
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
                    defaultValue: String(c.testDateColumn),
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
function Tx() {
  const { stateStore: e } = Jo();
  if (
    (b.useEffect(() => {
      (async () => {
        try {
          e.loading();
          const r = await wa.invoke("fetchOrCreateIfNotExists");
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
      return x.jsx(jx, {});
    case "WITHOUT_VERSIONING":
    case "OPTIMISTIC_TIMESTAMP":
    case "OPTIMISTIC_DATE":
    case "OPTIMISTIC_NUMBER":
      return x.jsx(Dx, { type: e.state });
    default:
      return x.jsxs("div", { children: ["ERROR: unsupprted state $", e.state] });
  }
}
const Mx = Yo(Tx),
  Nx = document.getElementById("root"),
  Lx = Vh.createRoot(Nx),
  kf = () => {
    Lx.render(x.jsx(Zv, { ...Qv, children: x.jsx(Mx, {}) }));
  };
wa.view.theme
  .enable()
  .then(() => {
    kf();
  })
  .catch((e) => {
    (console.error(e.message), kf());
  });
export {
  Ao as B,
  Ux as N,
  O as R,
  J_ as T,
  Ue as _,
  he as a,
  Cs as b,
  pe as c,
  qe as d,
  J as e,
  Z as f,
  C as g,
  Q as h,
  Qo as i,
  He as j,
  W as k,
  rw as l,
  Zt as m,
  Bt as n,
  ye as o,
  R as p,
  Vx as q,
  b as r,
  Le as s,
  K_ as t,
  ap as u,
  G_ as v,
  ch as w,
};
