const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-C6CCPMrJ.js",
      "./react-dom-vendor-DTSHKYJW.js",
      "./client-core-vendor-Bz5kMKC-.js",
      "./lodash-vendor-Ce0R6Syi.js",
      "./body-zWXS9WXn.css",
    ]),
) => i.map((i) => d[i]);
import { r as wt, a as To, c as Uh } from "./react-dom-vendor-DTSHKYJW.js";
import { g as ur, a as Vs, r as cr, s as rt } from "./client-core-vendor-Bz5kMKC-.js";
import { r as Vh } from "./lodash-vendor-Ce0R6Syi.js";
function Gh(e, t) {
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
 */ var Ec;
function Hh() {
  if (Ec) return gn;
  Ec = 1;
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
var Cc;
function Wh() {
  return (Cc || ((Cc = 1), (si.exports = Hh())), si.exports);
}
var x = Wh(),
  b = wt();
const O = ur(b),
  Pc = Gh({ __proto__: null, default: O }, [b]);
var ci = {},
  cs = function (e, t) {
    return (
      (cs =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      cs(e, t)
    );
  };
function kf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  cs(e, t);
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
function Of(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function Sf(e, t, r, n) {
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
function xf(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function Ef(e, t, r, n, a, o) {
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
function Cf(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function Pf(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Rf(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function Af(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function If(e, t, r, n) {
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
function jf(e, t) {
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
function Df(e, t) {
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
function Gs(e, t) {
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
function Tf() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Gs(arguments[t]));
  return e;
}
function Mf() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++) n[a] = o[i];
  return n;
}
function Nf(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function Qr(e) {
  return this instanceof Qr ? ((this.v = e), this) : new Qr(e);
}
function Lf(e, t, r) {
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
    p.value instanceof Qr ? Promise.resolve(p.value.v).then(u, d) : f(o[0][2], p);
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
  function n(a, o) {
    t[a] = e[a]
      ? function (i) {
          return (r = !r) ? { value: Qr(e[a](i)), done: !1 } : o ? o(i) : i;
        }
      : o;
  }
}
function Bf(e) {
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
function Ff(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var Kh = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  ls = function (e) {
    return (
      (ls =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      ls(e)
    );
  };
function zf(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = ls(e), n = 0; n < r.length; n++) r[n] !== "default" && Mo(t, e, r[n]);
  return (Kh(t, e), t);
}
function qf(e) {
  return e && e.__esModule ? e : { default: e };
}
function Uf(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Vf(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function Gf(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Hf(e, t, r) {
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
var Yh =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Wf(e) {
  function t(o) {
    ((e.error = e.hasError ? new Yh(o, e.error, "An error was suppressed during disposal.") : o),
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
function Kf(e, t) {
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
const Jh = {
    __extends: kf,
    __assign: po,
    __rest: Of,
    __decorate: Sf,
    __param: xf,
    __esDecorate: Ef,
    __runInitializers: Cf,
    __propKey: Pf,
    __setFunctionName: Rf,
    __metadata: Af,
    __awaiter: If,
    __generator: jf,
    __createBinding: Mo,
    __exportStar: Df,
    __values: ho,
    __read: Gs,
    __spread: Tf,
    __spreadArrays: Mf,
    __spreadArray: Nf,
    __await: Qr,
    __asyncGenerator: Lf,
    __asyncDelegator: $f,
    __asyncValues: Bf,
    __makeTemplateObject: Ff,
    __importStar: zf,
    __importDefault: qf,
    __classPrivateFieldGet: Uf,
    __classPrivateFieldSet: Vf,
    __classPrivateFieldIn: Gf,
    __addDisposableResource: Hf,
    __disposeResources: Wf,
    __rewriteRelativeImportExtension: Kf,
  },
  Xh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Hf,
        get __assign() {
          return po;
        },
        __asyncDelegator: $f,
        __asyncGenerator: Lf,
        __asyncValues: Bf,
        __await: Qr,
        __awaiter: If,
        __classPrivateFieldGet: Uf,
        __classPrivateFieldIn: Gf,
        __classPrivateFieldSet: Vf,
        __createBinding: Mo,
        __decorate: Sf,
        __disposeResources: Wf,
        __esDecorate: Ef,
        __exportStar: Df,
        __extends: kf,
        __generator: jf,
        __importDefault: qf,
        __importStar: zf,
        __makeTemplateObject: Ff,
        __metadata: Af,
        __param: xf,
        __propKey: Pf,
        __read: Gs,
        __rest: Of,
        __rewriteRelativeImportExtension: Kf,
        __runInitializers: Cf,
        __setFunctionName: Rf,
        __spread: Tf,
        __spreadArray: Nf,
        __spreadArrays: Mf,
        __values: ho,
        default: Jh,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  er = Vs(Xh);
var bn = {},
  Rc;
function Zh() {
  return (
    Rc ||
      ((Rc = 1),
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
  Ac;
function kt() {
  if (Ac) return yn;
  ((Ac = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((yn.BridgeAPIError = e), yn);
}
var Ic;
function Ae() {
  if (Ic) return mn;
  ((Ic = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.getCallBridge = void 0));
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
  jc;
function Yf() {
  if (jc) return _n;
  ((jc = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.withRateLimiter = void 0));
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
var Dc;
function Qh() {
  return (
    Dc ||
      ((Dc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = Ae(),
          r = kt(),
          n = Yf(),
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
var Tc;
function eg() {
  return (
    Tc ||
      ((Tc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), er.__exportStar(Qh(), e));
      })(li)),
    li
  );
}
var di = {},
  wn = {},
  fi = {},
  Mc;
function Jf() {
  return (
    Mc ||
      ((Mc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = Ae(),
          r = kt(),
          n = Yf(),
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
var Nc;
function tg() {
  if (Nc) return wn;
  ((Nc = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.invokeRemote = void 0));
  const e = Jf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((wn.invokeRemote = t), wn);
}
var kn = {},
  Lc;
function rg() {
  if (Lc) return kn;
  ((Lc = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.invokeService = void 0));
  const e = Jf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((kn.invokeService = t), kn);
}
var $c;
function ng() {
  return (
    $c ||
      (($c = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = er;
        (t.__exportStar(tg(), e), t.__exportStar(rg(), e));
      })(di)),
    di
  );
}
var vi = {},
  On = {},
  Sn = {},
  Bc;
function ag() {
  if (Bc) return Sn;
  ((Bc = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.submit = void 0));
  const e = Ae(),
    t = kt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((Sn.submit = n), Sn);
}
var xn = {},
  Fc;
function og() {
  if (Fc) return xn;
  ((Fc = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.close = void 0));
  const e = Ae(),
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
  zc;
function ig() {
  if (zc) return En;
  ((zc = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.open = void 0));
  const e = Ae(),
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
  qc;
function sg() {
  if (qc) return Cn;
  ((qc = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.refresh = void 0));
  const e = Ae(),
    t = kt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((Cn.refresh = n), Cn);
}
var Pn = {},
  Uc;
function cg() {
  if (Uc) return Pn;
  ((Uc = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.createHistory = void 0));
  const t = (0, Ae().getCallBridge)(),
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
  zt = {},
  Vc;
function Xf() {
  return (
    Vc ||
      ((Vc = 1),
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
var vr = {},
  Gc;
function lg() {
  if (Gc) return vr;
  ((Gc = 1),
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
  Hc;
function Zf() {
  return (
    Hc ||
      ((Hc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = er.__importDefault(Vh()),
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
var Wc;
function ug() {
  if (Wc) return An;
  ((Wc = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.Translator = void 0));
  const e = Zf();
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
  Kc;
function dg() {
  if (Kc) return In;
  ((Kc = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.ensureLocale = void 0));
  const e = Xf(),
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
  Yc;
function fg() {
  return (
    Yc ||
      ((Yc = 1),
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
  Jc;
function vg() {
  return (Jc || ((Jc = 1), Object.defineProperty(bi, "__esModule", { value: !0 })), bi);
}
var Xc;
function Qf() {
  return (
    Xc ||
      ((Xc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = er;
        (t.__exportStar(Xf(), e),
          t.__exportStar(lg(), e),
          t.__exportStar(ug(), e),
          t.__exportStar(dg(), e));
        var r = Zf();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = fg();
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
          t.__exportStar(vg(), e));
      })(pi)),
    pi
  );
}
var Zc;
function pg() {
  if (Zc) return Rn;
  ((Zc = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.getContext = void 0));
  const e = Ae(),
    t = Qf(),
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
  Qc;
function hg() {
  if (Qc) return jn;
  ((Qc = 1),
    Object.defineProperty(jn, "__esModule", { value: !0 }),
    (jn.changeWindowTitle = void 0));
  const e = Ae(),
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
  el;
function gg() {
  if (el) return Dn;
  ((el = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.theme = void 0));
  const t = (0, Ae().getCallBridge)();
  return ((Dn.theme = { enable: () => t("enableTheming") }), Dn);
}
var Tn = {},
  Mn = {},
  mi = {},
  pr = {},
  tl;
function ev() {
  if (tl) return pr;
  ((tl = 1),
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
var rl;
function bg() {
  return (
    rl ||
      ((rl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = ev(),
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
var nl;
function tv() {
  if (nl) return Mn;
  ((nl = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.events = void 0));
  const e = Ae(),
    t = bg(),
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
var al;
function mg() {
  if (al) return Tn;
  ((al = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.emitReadyEvent = void 0));
  const e = tv(),
    t = rv(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return ((Tn.emitReadyEvent = n), Tn);
}
var ol;
function rv() {
  if (ol) return On;
  ((ol = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.view = void 0));
  const e = ag(),
    t = og(),
    r = ig(),
    n = sg(),
    a = cg(),
    o = pg(),
    i = hg(),
    s = gg(),
    c = mg();
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
var il;
function nv() {
  return (
    il ||
      ((il = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), er.__exportStar(rv(), e));
      })(vi)),
    vi
  );
}
var yi = {},
  Nn = {},
  sl;
function yg() {
  if (sl) return Nn;
  ((sl = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.router = void 0));
  const t = (0, Ae().getCallBridge)(),
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
var cl;
function _g() {
  return (
    cl ||
      ((cl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), er.__exportStar(yg(), e));
      })(yi)),
    yi
  );
}
var _i = {},
  Ln = {},
  ll;
function wg() {
  if (ll) return Ln;
  ((ll = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.Modal = void 0));
  const e = Ae(),
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
var ul;
function kg() {
  return (
    ul ||
      ((ul = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), er.__exportStar(wg(), e));
      })(_i)),
    _i
  );
}
var qt = {},
  $n = {},
  dl;
function Og() {
  if (dl) return $n;
  ((dl = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.productFetchApi = void 0));
  const e = ev(),
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
var fl;
function Sg() {
  if (fl) return qt;
  fl = 1;
  var e;
  (Object.defineProperty(qt, "__esModule", { value: !0 }),
    (qt.requestBitbucket = qt.requestJira = qt.requestConfluence = void 0));
  const t = Ae();
  return (
    (e = (0, Og().productFetchApi)((0, t.getCallBridge)())),
    (qt.requestConfluence = e.requestConfluence),
    (qt.requestJira = e.requestJira),
    (qt.requestBitbucket = e.requestBitbucket),
    qt
  );
}
var wi = {},
  Bn = {},
  vl;
function xg() {
  if (vl) return Bn;
  ((vl = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.showFlag = void 0));
  const e = Ae(),
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
var pl;
function Eg() {
  return (
    pl ||
      ((pl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = xg();
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
  hl;
function Cg() {
  return (
    hl ||
      ((hl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), er.__exportStar(tv(), e));
      })(ki)),
    ki
  );
}
var Oi = {},
  Fn = {},
  gl;
function Pg() {
  if (gl) return Fn;
  ((gl = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.realtime = void 0));
  const t = (0, Ae().getCallBridge)(),
    r = (i, s, c) => t("publishRealtimeChannel", { channelName: i, eventPayload: s, options: c }),
    n = (i, s, c) => t("subscribeRealtimeChannel", { channelName: i, onEvent: s, options: c }),
    a = (i, s, c) =>
      t("publishRealtimeChannel", { channelName: i, eventPayload: s, options: c, isGlobal: !0 }),
    o = (i, s, c) =>
      t("subscribeRealtimeChannel", { channelName: i, onEvent: s, options: c, isGlobal: !0 });
  return ((Fn.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: o }), Fn);
}
var Si = {},
  bl;
function Rg() {
  return (
    bl ||
      ((bl = 1),
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
var ml;
function Ag() {
  return (
    ml ||
      ((ml = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Jira = e.realtime = void 0));
        var t = Pg();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = Rg();
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
var Ut = {},
  yl;
function Ig() {
  if (yl) return Ut;
  ((yl = 1),
    Object.defineProperty(Ut, "__esModule", { value: !0 }),
    (Ut.createTranslationFunction = Ut.getTranslations = Ut.resetTranslationsCache = void 0));
  const e = Qf(),
    t = nv(),
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
  Ut.resetTranslationsCache = a;
  const o = async (s = null, c = { fallback: !0 }) => {
    let l = s;
    return (l || (l = (await t.view.getContext()).locale), await n.getTranslations(l, c));
  };
  Ut.getTranslations = o;
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
  return ((Ut.createTranslationFunction = i), Ut);
}
var _l;
function jg() {
  return (
    _l ||
      ((_l = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = er;
        var r = Zh();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(eg(), e),
          t.__exportStar(ng(), e),
          t.__exportStar(nv(), e),
          t.__exportStar(_g(), e),
          t.__exportStar(kg(), e),
          t.__exportStar(Sg(), e),
          t.__exportStar(Eg(), e),
          t.__exportStar(Cg(), e),
          t.__exportStar(Ag(), e),
          (e.i18n = t.__importStar(Ig())));
      })(ci)),
    ci
  );
}
var wa = jg();
function J(e) {
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
var Dg = {};
function No() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : Dg;
}
var av = Object.assign,
  go = Object.getOwnPropertyDescriptor,
  It = Object.defineProperty,
  Lo = Object.prototype,
  us = [];
Object.freeze(us);
var ov = {};
Object.freeze(ov);
var Tg = typeof Proxy < "u",
  Mg = Object.toString();
function iv() {
  Tg || J("Proxy not available");
}
function sv(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Yr = function () {};
function yt(e) {
  return typeof e == "function";
}
function kr(e) {
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
  return typeof r == "function" && r.toString() === Mg;
}
function cv(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Bo(e, t, r) {
  It(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function lv(e, t, r) {
  It(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function Pr(e, t) {
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
function Ng(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Kt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var uv = typeof Object.getOwnPropertySymbols < "u";
function Lg(e) {
  var t = Object.keys(e);
  if (!uv) return t;
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
    : uv
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function dv(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Xt(e, t) {
  return Lo.hasOwnProperty.call(e, t);
}
var $g =
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
function Ye(e, t) {
  return !!(e & t);
}
function Je(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function wl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Bg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, zg(n.key), n));
  }
}
function dn(e, t, r) {
  return (t && Bg(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Jr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = qg(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Or() {
  return (
    (Or = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Or.apply(null, arguments)
  );
}
function fv(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), ds(e, t));
}
function ds(e, t) {
  return (
    (ds = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    ds(e, t)
  );
}
function Fg(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function zg(e) {
  var t = Fg(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qg(e, t) {
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
var At = Symbol("mobx-stored-annotations");
function jt(e) {
  function t(r, n) {
    if (Ta(n)) return e.decorate_20223_(r, n);
    Da(r, n, e);
  }
  return Object.assign(t, e);
}
function Da(e, t, r) {
  (Xt(e, At) || Bo(e, At, Or({}, e[At])), Yg(r) || (e[At][t] = r));
}
function Ug(e) {
  return (Xt(e, At) || Bo(e, At, Or({}, e[At])), e[At]);
}
function Ta(e) {
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
        (this.lowestObserverState_ = Q.NOT_TRACKING_),
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
        return Pv(this);
      }),
      (t.reportChanged = function () {
        (st(), Rv(this), ct());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      dn(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return Ye(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Ye(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Ye(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
dr.isBeingObservedMask_ = 1;
dr.isPendingUnobservationMask_ = 2;
dr.diffValueMask_ = 4;
var Hs = Pr("Atom", dr);
function vv(e, t, r) {
  (t === void 0 && (t = Yr), r === void 0 && (r = Yr));
  var n = new dr(e);
  return (t !== Yr && em(n, t), r !== Yr && Tv(n, r), n);
}
function Vg(e, t) {
  return Wv(e, t);
}
function Gg(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var bo = { structural: Vg, default: Gg };
function Sr(e, t, r) {
  return $v(e)
    ? e
    : Array.isArray(e)
      ? ae.array(e, { name: r })
      : lr(e)
        ? ae.object(e, void 0, { name: r })
        : un(e)
          ? ae.map(e, { name: r })
          : Kt(e)
            ? ae.set(e, { name: r })
            : typeof e == "function" && !en(e) && !Oa(e)
              ? cv(e)
                ? tn(e)
                : ka(r, e)
              : e;
}
function Hg(e, t, r) {
  if (e == null || Ko(e) || Wo(e) || Ar(e) || Rt(e)) return e;
  if (Array.isArray(e)) return ae.array(e, { name: r, deep: !1 });
  if (lr(e)) return ae.object(e, void 0, { name: r, deep: !1 });
  if (un(e)) return ae.map(e, { name: r, deep: !1 });
  if (Kt(e)) return ae.set(e, { name: r, deep: !1 });
}
function zo(e) {
  return e;
}
function Wg(e, t) {
  return Wv(e, t) ? t : e;
}
var Kg = "override";
function Yg(e) {
  return e.annotationType_ === Kg;
}
function Ma(e, t) {
  return { annotationType_: e, options_: t, make_: Jg, extend_: Xg, decorate_20223_: Zg };
}
function Jg(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (en(r.value)) return 1;
  var o = pv(e, this, t, r, !1);
  return (It(n, t, o), 2);
}
function Xg(e, t, r, n) {
  var a = pv(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function Zg(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    o = this,
    i = function (l) {
      var u, d, f, p;
      return xr(
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
        en(u) || (u = i(u)),
        (l = o.options_) != null && l.bound && ((u = u.bind(this)), (u.isMobxAction = !0)),
        u
      );
    };
  if (r == "method") {
    var s;
    return (
      en(e) || (e = i(e)),
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
  J(
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
function Qg(e, t, r, n) {
  (t.annotationType_, n.value);
}
function pv(e, t, r, n, a) {
  var o, i, s, c, l, u, d;
  (a === void 0 && (a = I.safeDescriptors), Qg(e, t, r, n));
  var f = n.value;
  if ((o = t.options_) != null && o.bound) {
    var p;
    f = f.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return {
    value: xr(
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
function hv(e, t) {
  return { annotationType_: e, options_: t, make_: eb, extend_: tb, decorate_20223_: rb };
}
function eb(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Xt(e.target_, t) || !Oa(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Oa(r.value)) return 1;
  var o = gv(e, this, t, r, !1, !1);
  return (It(n, t, o), 2);
}
function tb(e, t, r, n) {
  var a,
    o = gv(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, o, n);
}
function rb(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    Oa(e) || (e = tn(e)),
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
function nb(e, t, r, n) {
  (t.annotationType_, n.value);
}
function gv(e, t, r, n, a, o) {
  (o === void 0 && (o = I.safeDescriptors), nb(e, t, r, n));
  var i = n.value;
  if ((Oa(i) || (i = tn(i)), a)) {
    var s;
    ((i = i.bind((s = e.proxy_) != null ? s : e.target_)), (i.isMobXFlow = !0));
  }
  return { value: i, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function Ws(e, t) {
  return { annotationType_: e, options_: t, make_: ab, extend_: ob, decorate_20223_: ib };
}
function ab(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function ob(e, t, r, n) {
  return (
    sb(e, this, t, r),
    e.defineComputedProperty_(t, Or({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function ib(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var o = fn(this)[L],
        i = Or({}, r.options_, { get: e, context: this });
      (i.name || (i.name = "ObservableObject." + n.toString()), o.values_.set(n, new _t(i)));
    }),
    function () {
      return this[L].getObservablePropValue_(n);
    }
  );
}
function sb(e, t, r, n) {
  (t.annotationType_, n.get);
}
function qo(e, t) {
  return { annotationType_: e, options_: t, make_: cb, extend_: lb, decorate_20223_: ub };
}
function cb(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function lb(e, t, r, n) {
  var a, o;
  return (
    db(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (o = this.options_) == null ? void 0 : o.enhancer) != null ? a : Sr,
      n,
    )
  );
}
function ub(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    o = new WeakSet();
  function i(s, c) {
    var l,
      u,
      d = fn(s)[L],
      f = new _r(
        c,
        (l = (u = r.options_) == null ? void 0 : u.enhancer) != null ? l : Sr,
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
function db(e, t, r, n) {
  t.annotationType_;
}
var fb = "true",
  vb = bv();
function bv(e) {
  return { annotationType_: fb, options_: e, make_: pb, extend_: hb, decorate_20223_: gb };
}
function pb(e, t, r, n) {
  var a, o;
  if (r.get) return Uo.make_(e, t, r, n);
  if (r.set) {
    var i = en(r.set) ? r.set : xr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: I.safeDescriptors ? e.isPlainObject_ : !0,
          set: i,
        }) === null
        ? 0
        : 2
      : (It(n, t, { configurable: !0, set: i }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var s;
    if (cv(r.value)) {
      var c,
        l = (c = this.options_) != null && c.autoBind ? tn.bound : tn;
      return l.make_(e, t, r, n);
    }
    var u = (s = this.options_) != null && s.autoBind ? ka.bound : ka;
    return u.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? ae.ref : ae;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function hb(e, t, r, n) {
  var a, o;
  if (r.get) return Uo.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: I.safeDescriptors ? e.isPlainObject_ : !0, set: xr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var i;
    r.value = r.value.bind((i = e.proxy_) != null ? i : e.target_);
  }
  var s = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? ae.ref : ae;
  return s.extend_(e, t, r, n);
}
function gb(e, t) {
  J("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var bb = "observable",
  mb = "observable.ref",
  yb = "observable.shallow",
  _b = "observable.struct",
  mv = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(mv);
function Ua(e) {
  return e || mv;
}
var fs = qo(bb),
  wb = qo(mb, { enhancer: zo }),
  kb = qo(yb, { enhancer: Hg }),
  Ob = qo(_b, { enhancer: Wg }),
  yv = jt(fs);
function Va(e) {
  return e.deep === !0 ? Sr : e.deep === !1 ? zo : xb(e.defaultDecorator);
}
function Sb(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : bv(e)) : void 0;
}
function xb(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : Sr;
}
function _v(e, t, r) {
  if (Ta(t)) return fs.decorate_20223_(e, t);
  if (kr(t)) {
    Da(e, t, fs);
    return;
  }
  return $v(e)
    ? e
    : lr(e)
      ? ae.object(e, t, r)
      : Array.isArray(e)
        ? ae.array(e, t)
        : un(e)
          ? ae.map(e, t)
          : Kt(e)
            ? ae.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : ae.box(e, t);
}
av(_v, yv);
var Eb = {
    box: function (t, r) {
      var n = Ua(r);
      return new _r(t, Va(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = Ua(r);
      return (I.useProxies === !1 || n.proxy === !1 ? Sm : pm)(t, Va(n), n.name);
    },
    map: function (t, r) {
      var n = Ua(r);
      return new zv(t, Va(n), n.name);
    },
    set: function (t, r) {
      var n = Ua(r);
      return new qv(t, Va(n), n.name);
    },
    object: function (t, r, n) {
      return Ir(function () {
        return am(I.useProxies === !1 || n?.proxy === !1 ? fn({}, n) : dm({}, n), t, r);
      });
    },
    ref: jt(wb),
    shallow: jt(kb),
    deep: yv,
    struct: jt(Ob),
  },
  ae = av(_v, Eb),
  wv = "computed",
  Cb = "computed.struct",
  vs = Ws(wv),
  Pb = Ws(Cb, { equals: bo.structural }),
  Uo = function (t, r) {
    if (Ta(r)) return vs.decorate_20223_(t, r);
    if (kr(r)) return Da(t, r, vs);
    if (lr(t)) return jt(Ws(wv, t));
    var n = lr(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new _t(n));
  };
Object.assign(Uo, vs);
Uo.struct = jt(Pb);
var kl,
  Ol,
  mo = 0,
  Rb = 1,
  Ab =
    (kl = (Ol = go(function () {}, "name")) == null ? void 0 : Ol.configurable) != null ? kl : !1,
  Sl = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function xr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return Ib(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    Ab && ((Sl.value = e), It(a, "name", Sl)),
    a
  );
}
function Ib(e, t, r, n, a) {
  var o = jb(e, t);
  try {
    return r.apply(n, a);
  } catch (i) {
    throw ((o.error_ = i), i);
  } finally {
    Db(o);
  }
}
function jb(e, t, r, n) {
  var a = !1,
    o = 0,
    i = I.trackingDerivation,
    s = !t || !i;
  st();
  var c = I.allowStateChanges;
  s && (Rr(), (c = Vo(!0)));
  var l = Ks(!0),
    u = {
      runAsAction_: s,
      prevDerivation_: i,
      prevAllowStateChanges_: c,
      prevAllowStateReads_: l,
      notifySpy_: a,
      startTime_: o,
      actionId_: Rb++,
      parentActionId_: mo,
    };
  return ((mo = u.actionId_), u);
}
function Db(e) {
  (mo !== e.actionId_ && J(30),
    (mo = e.parentActionId_),
    e.error_ !== void 0 && (I.suppressReactionErrors = !0),
    Go(e.prevAllowStateChanges_),
    va(e.prevAllowStateReads_),
    ct(),
    e.runAsAction_ && Zt(e.prevDerivation_),
    (I.suppressReactionErrors = !1));
}
function Tb(e, t) {
  var r = Vo(e);
  try {
    return t();
  } finally {
    Go(r);
  }
}
function Vo(e) {
  var t = I.allowStateChanges;
  return ((I.allowStateChanges = e), t);
}
function Go(e) {
  I.allowStateChanges = e;
}
var _r = (function (e) {
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
    fv(t, e);
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
          var o = it(this, { object: this, type: Dt, newValue: a });
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
          bt(this) && mt(this, { type: Dt, object: this, newValue: a, oldValue: o }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (a) {
        return Na(this, a);
      }),
      (r.observe_ = function (a, o) {
        return (
          o &&
            a({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: Dt,
              newValue: this.value_,
              oldValue: void 0,
            }),
          La(this, a)
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
        return dv(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(dr),
  _t = (function () {
    function e(r) {
      ((this.dependenciesState_ = Q.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = Q.UP_TO_DATE_),
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
        r.get || J(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = xr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? bo.structural : bo.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        Bb(this);
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
          (this.isComputing && J(32, this.name_, this.derivation),
          I.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          ps(this) &&
            (this.warnAboutUntrackedRead_(), st(), (this.value_ = this.computeValue_(!1)), ct());
        else if ((Pv(this), ps(this))) {
          var n = I.trackingContext;
          (this.keepAlive_ && !n && (I.trackingContext = this),
            this.trackAndCompute() && $b(this),
            (I.trackingContext = n));
        }
        var a = this.value_;
        if (ao(a)) throw a.cause;
        return a;
      }),
      (t.set = function (n) {
        if (this.setter_) {
          (this.isRunningSetter && J(33, this.name_), (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, n);
          } finally {
            this.isRunningSetter = !1;
          }
        } else J(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var n = this.value_,
          a = this.dependenciesState_ === Q.NOT_TRACKING_,
          o = this.computeValue_(!0),
          i = a || ao(n) || ao(o) || !this.equals_(n, o);
        return (i && (this.value_ = o), i);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = Vo(!1),
          o;
        if (n) o = kv(this, this.derivation, this.scope_);
        else if (I.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (i) {
            o = new _o(i);
          }
        return (Go(a), (this.isComputing = !1), o);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (hs(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var o = this,
          i = !0,
          s = void 0;
        return Yb(function () {
          var c = o.get();
          if (!i || a) {
            var l = Rr();
            (n({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: Dt,
              object: o,
              newValue: c,
              oldValue: s,
            }),
              Zt(l));
          }
          ((i = !1), (s = c));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return dv(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      dn(e, [
        {
          key: "isComputing",
          get: function () {
            return Ye(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Ye(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Ye(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Ye(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Ye(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.diffValueMask_, n === 1);
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
var Ho = Pr("ComputedValue", _t),
  Q;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(Q || (Q = {}));
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
function ps(e) {
  switch (e.dependenciesState_) {
    case Q.UP_TO_DATE_:
      return !1;
    case Q.NOT_TRACKING_:
    case Q.STALE_:
      return !0;
    case Q.POSSIBLY_STALE_: {
      for (var t = Ks(!0), r = Rr(), n = e.observing_, a = n.length, o = 0; o < a; o++) {
        var i = n[o];
        if (Ho(i)) {
          if (I.disableErrorBoundaries) i.get();
          else
            try {
              i.get();
            } catch {
              return (Zt(r), va(t), !0);
            }
          if (e.dependenciesState_ === Q.STALE_) return (Zt(r), va(t), !0);
        }
      }
      return (Sv(e), Zt(r), va(t), !1);
    }
  }
}
function kv(e, t, r) {
  var n = Ks(!0);
  (Sv(e),
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
      o = new _o(i);
    }
  return (I.inBatch--, (I.trackingDerivation = a), Mb(e), va(n), o);
}
function Mb(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = Q.UP_TO_DATE_,
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
    (c.diffValue === 0 && Ev(c, e), (c.diffValue = 0));
  }
  for (; a--; ) {
    var l = r[a];
    l.diffValue === 1 && ((l.diffValue = 0), Lb(l, e));
  }
  n !== Q.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function hs(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Ev(t[r], e);
  e.dependenciesState_ = Q.NOT_TRACKING_;
}
function Ov(e) {
  var t = Rr();
  try {
    return e();
  } finally {
    Zt(t);
  }
}
function Rr() {
  var e = I.trackingDerivation;
  return ((I.trackingDerivation = null), e);
}
function Zt(e) {
  I.trackingDerivation = e;
}
function Ks(e) {
  var t = I.allowStateReads;
  return ((I.allowStateReads = e), t);
}
function va(e) {
  I.allowStateReads = e;
}
function Sv(e) {
  if (e.dependenciesState_ !== Q.UP_TO_DATE_) {
    e.dependenciesState_ = Q.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = Q.UP_TO_DATE_;
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
  xv = !1,
  I = (function () {
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
            xv || J(35);
          }, 1),
          new oo())
    );
  })();
function Nb() {
  if (((I.pendingReactions.length || I.inBatch || I.isRunningReactions) && J(36), (xv = !0), io)) {
    var e = No();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (I = new oo()));
  }
}
function Lb(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Ev(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Cv(e));
}
function Cv(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), I.pendingUnobservations.push(e));
}
function st() {
  I.inBatch++;
}
function ct() {
  if (--I.inBatch === 0) {
    Av();
    for (var e = I.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof _t && r.suspend_()));
    }
    I.pendingUnobservations = [];
  }
}
function Pv(e) {
  var t = I.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && I.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && I.inBatch > 0 && Cv(e), !1);
}
function Rv(e) {
  e.lowestObserverState_ !== Q.STALE_ &&
    ((e.lowestObserverState_ = Q.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === Q.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = Q.STALE_));
    }));
}
function $b(e) {
  e.lowestObserverState_ !== Q.STALE_ &&
    ((e.lowestObserverState_ = Q.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Q.POSSIBLY_STALE_
        ? (t.dependenciesState_ = Q.STALE_)
        : t.dependenciesState_ === Q.UP_TO_DATE_ && (e.lowestObserverState_ = Q.UP_TO_DATE_);
    }));
}
function Bb(e) {
  e.lowestObserverState_ === Q.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = Q.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Q.UP_TO_DATE_ &&
        ((t.dependenciesState_ = Q.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var Nt = (function () {
  function e(r, n, a, o) {
    (r === void 0 && (r = "Reaction"),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = Q.NOT_TRACKING_),
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
      this.isScheduled || ((this.isScheduled = !0), I.pendingReactions.push(this), Av());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (st(), (this.isScheduled = !1));
        var n = I.trackingContext;
        if (((I.trackingContext = this), ps(this))) {
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
        var o = kv(this, n, void 0);
        ((I.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && hs(this),
          ao(o) && this.reportExceptionInDerivation_(o.cause),
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (st(), hs(this), ct()));
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
    dn(e, [
      {
        key: "isDisposed",
        get: function () {
          return Ye(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Je(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Ye(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Je(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Ye(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Je(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Ye(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Je(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Ye(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Je(this.flags_, e.diffValueMask_, n === 1);
        },
      },
    ])
  );
})();
Nt.isDisposedMask_ = 1;
Nt.isScheduledMask_ = 2;
Nt.isTrackPendingMask_ = 4;
Nt.isRunningMask_ = 8;
Nt.diffValueMask_ = 16;
var Fb = 100,
  gs = function (t) {
    return t();
  };
function Av() {
  I.inBatch > 0 || I.isRunningReactions || gs(zb);
}
function zb() {
  I.isRunningReactions = !0;
  for (var e = I.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Fb && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  I.isRunningReactions = !1;
}
var wo = Pr("Reaction", Nt);
function qb(e) {
  var t = gs;
  gs = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function pa() {
  return !1;
}
function Ub(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Iv = "action",
  Vb = "action.bound",
  jv = "autoAction",
  Gb = "autoAction.bound",
  Hb = "<unnamed action>",
  bs = Ma(Iv),
  Wb = Ma(Vb, { bound: !0 }),
  ms = Ma(jv, { autoAction: !0 }),
  Kb = Ma(Gb, { autoAction: !0, bound: !0 });
function Dv(e) {
  var t = function (n, a) {
    if (yt(n)) return xr(n.name || Hb, n, e);
    if (yt(a)) return xr(n, a, e);
    if (Ta(a)) return (e ? ms : bs).decorate_20223_(n, a);
    if (kr(a)) return Da(n, a, e ? ms : bs);
    if (kr(n)) return jt(Ma(e ? jv : Iv, { name: n, autoAction: e }));
  };
  return t;
}
var lt = Dv(!1);
Object.assign(lt, bs);
var ka = Dv(!0);
Object.assign(ka, ms);
lt.bound = jt(Wb);
ka.bound = jt(Kb);
function en(e) {
  return yt(e) && e.isMobxAction === !0;
}
function Yb(e, t) {
  var r, n, a, o;
  t === void 0 && (t = ov);
  var i = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    s = !t.scheduler && !t.delay,
    c;
  if (s)
    c = new Nt(
      i,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var l = Xb(t),
      u = !1;
    c = new Nt(
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
var Jb = function (t) {
  return t();
};
function Xb(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Jb;
}
var Zb = "onBO",
  Qb = "onBUO";
function em(e, t, r) {
  return Mv(Zb, e, t, r);
}
function Tv(e, t, r) {
  return Mv(Qb, e, t, r);
}
function Mv(e, t, r, n) {
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
var tm = "never",
  Ga = "always",
  rm = "observed";
function nm(e) {
  e.isolateGlobalState === !0 && Nb();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (I.useProxies = t === Ga ? !0 : t === tm ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (I.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Ga ? Ga : r === rm;
    ((I.enforceActions = n), (I.allowStateChanges = !(n === !0 || n === Ga)));
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
    e.reactionScheduler && qb(e.reactionScheduler));
}
function am(e, t, r, n) {
  var a = $g(t);
  return (
    Ir(function () {
      var o = fn(e, n)[L];
      Fo(a).forEach(function (i) {
        o.extend_(i, a[i], r && i in r ? r[i] : !0);
      });
    }),
    e
  );
}
function om(e, t) {
  return Nv(So(e, t));
}
function Nv(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = im(e.observing_).map(Nv)),
    t
  );
}
function im(e) {
  return Array.from(new Set(e));
}
var sm = 0;
function Lv() {
  this.message = "FLOW_CANCELLED";
}
Lv.prototype = Object.create(Error.prototype);
var xi = hv("flow"),
  cm = hv("flow.bound", { bound: !0 }),
  tn = Object.assign(function (t, r) {
    if (Ta(r)) return xi.decorate_20223_(t, r);
    if (kr(r)) return Da(t, r, xi);
    var n = t,
      a = n.name || "<unnamed flow>",
      o = function () {
        var s = this,
          c = arguments,
          l = ++sm,
          u = lt(a + " - runid: " + l + " - init", n).apply(s, c),
          d,
          f = void 0,
          p = new Promise(function (h, v) {
            var g = 0;
            d = v;
            function m(k) {
              f = void 0;
              var y;
              try {
                y = lt(a + " - runid: " + l + " - yield " + g++, u.next).call(u, k);
              } catch (S) {
                return v(S);
              }
              w(y);
            }
            function _(k) {
              f = void 0;
              var y;
              try {
                y = lt(a + " - runid: " + l + " - yield " + g++, u.throw).call(u, k);
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
          (p.cancel = lt(a + " - runid: " + l + " - cancel", function () {
            try {
              f && xl(f);
              var h = u.return(void 0),
                v = Promise.resolve(h.value);
              (v.then(Yr, Yr), xl(v), d(new Lv()));
            } catch (g) {
              d(g);
            }
          })),
          p
        );
      };
    return ((o.isMobXFlow = !0), o);
  }, xi);
tn.bound = jt(cm);
function xl(e) {
  yt(e.cancel) && e.cancel();
}
function Oa(e) {
  return e?.isMobXFlow === !0;
}
function lm(e, t) {
  return e ? Ko(e) || !!e[L] || Hs(e) || wo(e) || Ho(e) : !1;
}
function $v(e) {
  return lm(e);
}
function Yt(e, t) {
  (t === void 0 && (t = void 0), st());
  try {
    return e.apply(t);
  } finally {
    ct();
  }
}
function Tr(e) {
  return e[L];
}
var um = {
  has: function (t, r) {
    return Tr(t).has_(r);
  },
  get: function (t, r) {
    return Tr(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return kr(r) ? ((a = Tr(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return kr(r) ? ((n = Tr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = Tr(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return Tr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    J(13);
  },
};
function dm(e, t) {
  var r, n;
  return (
    iv(),
    (e = fn(e, t)),
    (n = (r = e[L]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, um))
  );
}
function ot(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Na(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    sv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function it(e, t) {
  var r = Rr();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, o = n.length;
      a < o && ((t = n[a](t)), t && !t.type && J(14), !!t);
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
function La(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    sv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function mt(e, t) {
  var r = Rr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, o = n.length; a < o; a++) n[a](t);
    Zt(r);
  }
}
function Bv(e, t, r) {
  return (
    Ir(function () {
      var n,
        a = fn(e, r)[L];
      ((n = t) != null || (t = Ug(e)),
        Fo(t).forEach(function (o) {
          return a.make_(o, t[o]);
        }));
    }),
    e
  );
}
var El = "splice",
  Dt = "update",
  fm = 1e4,
  vm = {
    get: function (t, r) {
      var n = t[L];
      return r === L
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Xt(ko, r)
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
      J(15);
    },
  },
  Ys = (function () {
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
        return Na(this, n);
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
          La(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && J("Out of range: " + n);
        var a = this.values_.length;
        if (n !== a)
          if (n > a) {
            for (var o = new Array(n - a), i = 0; i < n - a; i++) o[i] = void 0;
            this.spliceWithArray_(a, 0, o);
          } else this.spliceWithArray_(n, a - n);
      }),
      (t.updateArrayLength_ = function (n, a) {
        (n !== this.lastKnownLength_ && J(16),
          (this.lastKnownLength_ += a),
          this.legacyMode_ && a > 0 && Hv(n + a + 1));
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
          o === void 0 && (o = us),
          ot(this))
        ) {
          var c = it(this, { object: this.proxy_, type: El, index: n, removedCount: a, added: o });
          if (!c) return us;
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
        if (o.length < fm) {
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
                  type: Dt,
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
                  type: El,
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
        if ((this.legacyMode_ && n > o.length && J(17, n, o.length), n < o.length)) {
          this.atom_;
          var i = o[n];
          if (ot(this)) {
            var s = it(this, { type: Dt, object: this.proxy_, index: n, newValue: a });
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
function pm(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    iv(),
    Ir(function () {
      var a = new Ys(r, t, n, !1);
      lv(a.values_, L, a);
      var o = new Proxy(a.values_, vm);
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
    return (I.trackingDerivation && J(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    I.trackingDerivation && J(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[L],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
ce("at", Qe);
ce("concat", Qe);
ce("flat", Qe);
ce("includes", Qe);
ce("indexOf", Qe);
ce("join", Qe);
ce("lastIndexOf", Qe);
ce("slice", Qe);
ce("toString", Qe);
ce("toLocaleString", Qe);
ce("toSorted", Qe);
ce("toSpliced", Qe);
ce("with", Qe);
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
ce("reduce", Fv);
ce("reduceRight", Fv);
function ce(e, t) {
  typeof Array.prototype[e] == "function" && (ko[e] = t(e));
}
function Qe(e) {
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
function Fv(e) {
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
var hm = Pr("ObservableArrayAdministration", Ys);
function Wo(e) {
  return $o(e) && hm(e[L]);
}
var gm = {},
  ir = "add",
  Oo = "delete",
  zv = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = Sr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[L] = gm),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        yt(Map) || J(18),
        Ir(function () {
          ((o.keysAtom_ = vv("ObservableMap.keys()")),
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
          var i = (o = new _r(this.has_(n), zo, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, i),
            Tv(i, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return o.get();
      }),
      (t.set = function (n, a) {
        var o = this.has_(n);
        if (ot(this)) {
          var i = it(this, { type: o ? Dt : ir, object: this, newValue: a, name: n });
          if (!i) return this;
          a = i.newValue;
        }
        return (o ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, ot(this))) {
          var o = it(this, { type: Oo, object: this, name: n });
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
            Yt(function () {
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
        if (((a = o.prepareNewValue_(a)), a !== I.UNCHANGED)) {
          var i = pa(),
            s = bt(this),
            c =
              s || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Dt,
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
          Yt(function () {
            var l,
              u = new _r(a, o.enhancer_, "ObservableMap.key", !1);
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
        return Cl({
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
        return Cl({
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
        for (var o = Jr(this), i; !(i = o()).done; ) {
          var s = i.value,
            c = s[0],
            l = s[1];
          n.call(a, l, c, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          Ar(n) && (n = new Map(n)),
          Yt(function () {
            lr(n)
              ? Lg(n).forEach(function (o) {
                  return a.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var i = o[0],
                      s = o[1];
                    return a.set(i, s);
                  })
                : un(n)
                  ? (Ng(n) || J(19, n),
                    n.forEach(function (o, i) {
                      return a.set(i, o);
                    }))
                  : n != null && J(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        Yt(function () {
          Ov(function () {
            for (var a = Jr(n.keys()), o; !(o = a()).done; ) {
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
              var o = bm(n), i = new Map(), s = !1, c = Jr(a.data_.keys()), l;
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
            for (var p = Jr(o.entries()), h; !(h = p()).done; ) {
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
        return La(this, n);
      }),
      (t.intercept_ = function (n) {
        return Na(this, n);
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
  Ar = Pr("ObservableMap", zv);
function Cl(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Xs(e));
}
function bm(e) {
  if (un(e) || Ar(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (lr(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return J(21, e);
}
var mm = {},
  qv = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = Sr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[L] = mm),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        yt(Set) || J(22),
        (this.enhancer_ = function (i, s) {
          return n(i, s, a);
        }),
        Ir(function () {
          ((o.atom_ = vv(o.name_)), r && o.replace(r));
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
          Ov(function () {
            for (var a = Jr(n.data_.values()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var o = Jr(this), i; !(i = o()).done; ) {
          var s = i.value;
          n.call(a, s, s, this);
        }
      }),
      (t.add = function (n) {
        var a = this;
        if ((this.atom_, ot(this))) {
          var o = it(this, { type: ir, object: this, newValue: n });
          if (!o) return this;
          n = o.newValue;
        }
        if (!this.has(n)) {
          Yt(function () {
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
        if (ot(this)) {
          var o = it(this, { type: Oo, object: this, oldValue: n });
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
            Yt(function () {
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
        return Pl({
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
        return Pl({
          next: function () {
            var i = a.next(),
              s = i.value,
              c = i.done;
            return c ? { value: void 0, done: c } : { value: n.dehanceValue_(s), done: c };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Kt(n) && !Rt(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Kt(n) && !Rt(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Kt(n) && !Rt(n)) return n.symmetricDifference(this);
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
        if (Kt(n) && !Rt(n)) return n.isDisjointFrom(this);
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
              : Kt(n)
                ? (a.clear(),
                  n.forEach(function (o) {
                    return a.add(o);
                  }))
                : n != null && J("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, a) {
        return La(this, n);
      }),
      (t.intercept_ = function (n) {
        return Na(this, n);
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
  Rt = Pr("ObservableSet", qv);
function Pl(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Xs(e));
}
var Rl = Object.create(null),
  Al = "remove",
  Uv = (function () {
    function e(r, n, a, o) {
      (n === void 0 && (n = new Map()),
        o === void 0 && (o = vb),
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
        if (ot(this)) {
          var i = it(this, { type: Dt, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!i) return null;
          a = i.newValue;
        }
        if (((a = o.prepareNewValue_(a)), a !== I.UNCHANGED)) {
          var s = bt(this),
            c = !1,
            l =
              s || c
                ? {
                    type: Dt,
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
            ((a = new _r(n in this.target_, zo, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var o;
            if ((o = this.target_[At]) != null && o[n]) return;
            J(1, a.annotationType_, this.name_ + "." + n.toString());
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
          jl(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, o, i) {
        if ((i === void 0 && (i = !1), o === !0 && (o = this.defaultAnnotation_), o === !1))
          return this.defineProperty_(n, a, i);
        var s = o.extend_(this, n, a, i);
        return (s && jl(this, o, n), s);
      }),
      (t.defineProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          st();
          var i = this.delete_(n);
          if (!i) return i;
          if (ot(this)) {
            var s = it(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: ir,
              newValue: a.value,
            });
            if (!s) return null;
            var c = s.newValue;
            a.value !== c && (a = Or({}, a, { value: c }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else It(this.target_, n, a);
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
          var s = this.delete_(n);
          if (!s) return s;
          if (ot(this)) {
            var c = it(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: ir,
              newValue: a,
            });
            if (!c) return null;
            a = c.newValue;
          }
          var l = Il(n),
            u = {
              configurable: I.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: l.get,
              set: l.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else It(this.target_, n, u);
          var d = new _r(a, o, "ObservableObject.key", !1);
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
            var s = it(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: ir,
              newValue: void 0,
            });
            if (!s) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var c = Il(n),
            l = {
              configurable: I.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: c.get,
              set: c.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else It(this.target_, n, l);
          (this.values_.set(n, new _t(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          ct();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Xt(this.target_, n))) return !0;
        if (ot(this)) {
          var o = it(this, { object: this.proxy_ || this.target_, name: n, type: Al });
          if (!o) return null;
        }
        try {
          var i;
          st();
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
            (l && (this.values_.delete(n), l instanceof _r && (u = l.value_), Rv(l)),
            this.keysAtom_.reportChanged(),
            (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(n in this.target_),
            s || c)
          ) {
            var f = {
              type: Al,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: u,
              name: n,
            };
            s && mt(this, f);
          }
        } finally {
          ct();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return La(this, n);
      }),
      (t.intercept_ = function (n) {
        return Na(this, n);
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
  if (Xt(e, L)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new Uv(e, new Map(), String(n), Sb(t));
  return (Bo(e, L, a), e);
}
var ym = Pr("ObservableObjectAdministration", Uv);
function Il(e) {
  return (
    Rl[e] ||
    (Rl[e] = {
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
  return $o(e) ? ym(e[L]) : !1;
}
function jl(e, t, r) {
  var n;
  (n = e.target_[At]) == null || delete n[r];
}
var _m = Gv(0),
  wm = (function () {
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
  Vv = function () {};
function km(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
km(Vv, Array.prototype);
var Js = (function (e) {
  function t(n, a, o, i) {
    var s;
    return (
      o === void 0 && (o = "ObservableArray"),
      i === void 0 && (i = !1),
      (s = e.call(this) || this),
      Ir(function () {
        var c = new Ys(o, a, i, !0);
        ((c.proxy_ = s),
          lv(s, L, c),
          n && n.length && s.spliceWithArray(0, 0, n),
          wm && Object.defineProperty(s, "0", _m));
      }),
      s
    );
  }
  fv(t, e);
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
      return Xs({
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
})(Vv);
Object.entries(ko).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Bo(Js.prototype, t, r);
});
function Gv(e) {
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
function Om(e) {
  It(Js.prototype, "" + e, Gv(e));
}
function Hv(e) {
  if (e > Ei) {
    for (var t = Ei; t < e + 100; t++) Om(t);
    Ei = e;
  }
}
Hv(1e3);
function Sm(e, t, r) {
  return new Js(e, t, r);
}
function So(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Wo(e)) return (t !== void 0 && J(23), e[L].atom_);
    if (Rt(e)) return e.atom_;
    if (Ar(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || J(25, t, ys(e)), r);
    }
    if (Ko(e)) {
      if (!t) return J(26);
      var n = e[L].values_.get(t);
      return (n || J(27, t, ys(e)), n);
    }
    if (Hs(e) || Ho(e) || wo(e)) return e;
  } else if (yt(e) && wo(e[L])) return e[L];
  J(28);
}
function xm(e, t) {
  if ((e || J(29), Hs(e) || Ho(e) || wo(e) || Ar(e) || Rt(e))) return e;
  if (e[L]) return e[L];
  J(24, e);
}
function ys(e, t) {
  var r;
  if (t !== void 0) r = So(e, t);
  else {
    if (en(e)) return e.name;
    Ko(e) || Ar(e) || Rt(e) ? (r = xm(e)) : (r = So(e));
  }
  return r.name_;
}
function Ir(e) {
  var t = Rr(),
    r = Vo(!0);
  st();
  try {
    return e();
  } finally {
    (ct(), Go(r), Zt(t));
  }
}
var Dl = Lo.toString;
function Wv(e, t, r) {
  return (r === void 0 && (r = -1), _s(e, t, r));
}
function _s(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var i = Dl.call(e);
  if (i !== Dl.call(t)) return !1;
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
  ((e = Tl(e)), (t = Tl(t)));
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
    for (; u--; ) if (!_s(e[u], t[u], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var p = 0; p < f; p++) {
      var h = d[p];
      if (!(Xt(t, h) && _s(e[h], t[h], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function Tl(e) {
  return Wo(e) ? e.slice() : un(e) || Ar(e) || Kt(e) || Rt(e) ? Array.from(e.entries()) : e;
}
var Ml,
  Em = ((Ml = No().Iterator) == null ? void 0 : Ml.prototype) || {};
function Xs(e) {
  return ((e[Symbol.iterator] = Cm), Object.assign(Object.create(Em), e));
}
function Cm() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = No();
  typeof t[e] > "u" && J("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: Ub, extras: { getDebugName: ys }, $mobx: L });
if (!b.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Bv) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Pm(e) {
  e();
}
function Rm(e) {
  (e || (e = Pm), nm({ reactionScheduler: e }));
}
function Am(e) {
  return om(e);
}
var Im = 1e4,
  jm = 1e4,
  Dm = (function () {
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
            (n === void 0 && (n = Im), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, jm));
        },
      }),
      e
    );
  })(),
  Tm = typeof FinalizationRegistry < "u" ? FinalizationRegistry : Dm,
  Sa = new Tm(function (e) {
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
 */ var Nl;
function Mm() {
  if (Nl) return Pi;
  Nl = 1;
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
var Ll;
function Nm() {
  return (Ll || ((Ll = 1), (Ci.exports = Mm())), Ci.exports);
}
var Lm = Nm();
function $l(e) {
  e.reaction = new Nt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function $m(e, t) {
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
          Sa.unregister(n),
          (n.onStoreChange = s),
          n.reaction || ($l(n), (n.stateVersion = Symbol())),
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
  (a.reaction || ($l(a), Sa.register(r, a, a)),
    O.useDebugValue(a.reaction, Am),
    Lm.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
  Kv = typeof Symbol == "function" && Symbol.for,
  Bm =
    (Ai =
      (Ri = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Ri === void 0
        ? void 0
        : Ri.configurable) !== null && Ai !== void 0
      ? Ai
      : !1,
  Bl = Kv
    ? Symbol.for("react.forward_ref")
    : typeof b.forwardRef == "function" &&
      b.forwardRef(function (e) {
        return null;
      }).$$typeof,
  Fl = Kv
    ? Symbol.for("react.memo")
    : typeof b.memo == "function" &&
      b.memo(function (e) {
        return null;
      }).$$typeof;
function Fm(e, t) {
  var r;
  if (Fl && e.$$typeof === Fl)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    o = e.displayName || e.name;
  if (Bl && e.$$typeof === Bl && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var i = function (s, c) {
    return $m(function () {
      return a(s, c);
    }, o);
  };
  return (
    (i.displayName = e.displayName),
    Bm && Object.defineProperty(i, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (i.contextTypes = e.contextTypes),
    n && (i = b.forwardRef(i)),
    (i = b.memo(i)),
    qm(e, i),
    i
  );
}
var zm = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function qm(e, t) {
  Object.keys(e).forEach(function (r) {
    zm[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Ii;
Rm(To.unstable_batchedUpdates);
Ii = Sa.finalizeAllImmediately;
function Um(e, t) {
  if (zl(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !zl(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function zl(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var ql = Symbol("patchMixins"),
  Yv = Symbol("patchedDefinition");
function Vm(e, t) {
  var r = (e[ql] = e[ql] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function Ul(e, t) {
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
function Vl(e, t) {
  var r = function () {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    Ul.call.apply(Ul, [this, e, t].concat(o));
  };
  return r;
}
function Gm(e, t, r) {
  var n = Vm(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[Yv])) {
    var o = e[t],
      i = Jv(e, t, a ? a.enumerable : void 0, n, o);
    Object.defineProperty(e, t, i);
  }
}
function Jv(e, t, r, n, a) {
  var o,
    i = Vl(a, n);
  return (
    (o = {}),
    (o[Yv] = !0),
    (o.get = function () {
      return i;
    }),
    (o.set = function (c) {
      if (this === e) i = Vl(c, n);
      else {
        var l = Jv(this, t, r, n, c);
        Object.defineProperty(this, t, l);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = r),
    o
  );
}
var Gl = Symbol("ObserverAdministration"),
  Hl = Symbol("isMobXReactObserver");
function ws(e) {
  var t;
  return (t = e[Gl]) != null
    ? t
    : (e[Gl] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: ks(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function Hm(e) {
  var t = e.prototype;
  if (e[Hl]) {
    var r = ks(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[Hl] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== b.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Wl;
    else if (t.shouldComponentUpdate !== Wl)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = ks(e);
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
        value: Wm.call(this, n),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var i = this,
        s = ws(this);
      return (
        (s.mounted = !0),
        Sa.unregister(this),
        (s.forceUpdate = function () {
          return i.forceUpdate();
        }),
        (!s.reaction || s.reactionInvalidatedBeforeMount) && s.forceUpdate(),
        o?.apply(this, arguments)
      );
    }),
    Gm(t, "componentWillUnmount", function () {
      var i,
        s = ws(this);
      ((i = s.reaction) == null || i.dispose(),
        (s.reaction = null),
        (s.forceUpdate = null),
        (s.mounted = !1),
        (s.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function ks(e) {
  return e.displayName || e.name || "<component>";
}
function Wm(e) {
  var t = e.bind(this),
    r = ws(this);
  function n() {
    r.reaction || ((r.reaction = Km(r)), r.mounted || Sa.register(this, r, this));
    var a = void 0,
      o = void 0;
    if (
      (r.reaction.track(function () {
        try {
          o = Tb(!1, t);
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
function Km(e) {
  return new Nt(e.name + ".render()", function () {
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
function Wl(e, t) {
  return this.state !== t ? !0 : !Um(this.props, e);
}
function Yo(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(b.Component, e) ||
    Object.prototype.isPrototypeOf.call(b.PureComponent, e)
      ? Hm(e)
      : Fm(e)
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
function Ym(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Jm = ["children"],
  Kl = O.createContext({});
function Xv(e) {
  var t = e.children,
    r = Ym(e, Jm),
    n = O.useContext(Kl),
    a = O.useRef(Os({}, n, r)),
    o = a.current;
  return O.createElement(Kl.Provider, { value: o }, t);
}
Xv.displayName = "MobXProvider";
O.version.split(".")[0];
if (!b.Component) throw new Error("mobx-react requires React to be available");
if (!ae) throw new Error("mobx-react requires mobx to be available");
var Xm = Object.defineProperty,
  Zm = Object.getOwnPropertyDescriptor,
  xe = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? Zm(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && Xm(t, r, a), a);
  };
const ji = "Loading ...";
class we {
  constructor() {
    ((this.state = "ROOT"),
      (this.isLoading = !0),
      (this.message = ji),
      (this.testNonVersioningData = ""),
      (this.testNumberVersioningData = ""),
      (this.testDateVersioningData = ""),
      (this.testTimestampVersioningData = ""),
      Bv(this));
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
xe([ae], we.prototype, "state", 2);
xe([ae], we.prototype, "isLoading", 2);
xe([ae], we.prototype, "message", 2);
xe([ae], we.prototype, "testData", 2);
xe([ae], we.prototype, "testDataOptimisticNumber", 2);
xe([ae], we.prototype, "testDataOptimisticDateId", 2);
xe([ae], we.prototype, "testDataOptimisticTimeStampId", 2);
xe([ae], we.prototype, "testNonVersioningData", 2);
xe([ae], we.prototype, "testNumberVersioningData", 2);
xe([ae], we.prototype, "testDateVersioningData", 2);
xe([ae], we.prototype, "testTimestampVersioningData", 2);
xe([lt.bound], we.prototype, "saveState", 1);
xe([lt.bound], we.prototype, "saveResponse", 1);
xe([lt.bound], we.prototype, "saveUpdateResponse", 1);
xe([lt.bound], we.prototype, "clearStates", 1);
xe([lt], we.prototype, "loading", 1);
xe([lt], we.prototype, "stopLoading", 1);
const Qm = new we();
class ey {
  constructor() {
    this.stateStore = Qm;
  }
}
const Zv = new ey(),
  ty = b.createContext(Zv),
  Jo = () => b.useContext(ty);
function he(e, t) {
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
function ry(e, t) {
  if (Ue(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ue(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qv(e) {
  var t = ry(e, "string");
  return Ue(t) == "symbol" ? t : t + "";
}
function Yl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Qv(n.key), n));
  }
}
function ge(e, t, r) {
  return (
    t && Yl(e.prototype, t),
    r && Yl(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ny(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ge(e, t) {
  if (t && (Ue(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ny(e);
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
function xa(e, t) {
  return (
    (xa = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    xa(e, t)
  );
}
function He(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && xa(e, t));
}
function C(e, t, r) {
  return (
    (t = Qv(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Re() {}
function ep(e) {
  if (Array.isArray(e)) return e;
}
function ay(e, t) {
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
function Ss(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Zs(e, t) {
  if (e) {
    if (typeof e == "string") return Ss(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Ss(e, t)
          : void 0
    );
  }
}
function tp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function X(e, t) {
  return ep(e) || ay(e, t) || Zs(e, t) || tp();
}
var rp = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  oy = function (t) {
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
  np = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Jl = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  iy = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = t.destination,
      i = t.sourceIndex;
    if (!o) return r;
    var s = Jl(i, n, a),
      c = Jl(o.index, n, a),
      l = r.slice(),
      u = l.splice(s, 1),
      d = X(u, 1),
      f = d[0];
    return (l.splice(c, 0, f), l);
  };
const sy = "modulepreload",
  cy = function (e, t) {
    return new URL(e, t).href;
  },
  Xl = {},
  ly = function (t, r, n) {
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
          if (((u = cy(u, n)), u in Xl)) return;
          Xl[u] = !0;
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
            ((p.rel = d ? "stylesheet" : sy),
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
function H() {
  return (
    (H = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    H.apply(null, arguments)
  );
}
function uy(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function Z(e, t) {
  if (e == null) return {};
  var r,
    n,
    a = uy(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      ((r = o[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function Zl(e, t) {
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
      ? Zl(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var dy = (function () {
  function e(t) {
    var r = this;
    (he(this, e),
      C(this, "_isAnalyticsEvent", !0),
      C(this, "clone", function () {
        var n = Di({}, r.payload);
        return new e({ payload: n });
      }),
      (this.payload = t.payload));
  }
  return ge(e, [
    {
      key: "update",
      value: function (r) {
        return (
          typeof r == "function" && (this.payload = r(this.payload)),
          Ue(r) === "object" && (this.payload = Di(Di({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function fy(e) {
  if (Array.isArray(e)) return Ss(e);
}
function ap(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function vy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ke(e) {
  return fy(e) || ap(e) || Zs(e) || vy();
}
function py(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Y(e)) !== null; );
  return e;
}
function Eo() {
  return (
    (Eo =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = py(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    Eo.apply(null, arguments)
  );
}
function hy(e, t, r) {
  return (
    (t = Y(t)),
    Ge(e, op() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
function gy(e, t, r, n) {
  var a = Eo(Y(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var by = (function (e) {
  function t(r) {
    var n;
    return (
      he(this, t),
      (n = hy(this, t, [r])),
      C(n, "_isUIAnalyticsEvent", !0),
      C(n, "clone", function () {
        if (n.hasFired) return null;
        var a = Ke(n.context),
          o = Ke(n.handlers),
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
    He(t, e),
    ge(t, [
      {
        key: "update",
        value: function (n) {
          return this.hasFired ? this : gy(t, "update", this, 3)([n]);
        },
      },
    ])
  );
})(dy);
function Ql(e, t, r, n, a, o, i) {
  try {
    var s = e[o](i),
      c = s.value;
  } catch (l) {
    return void r(l);
  }
  s.done ? t(c) : Promise.resolve(c).then(n, a);
}
function ye(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, a) {
      var o = e.apply(t, r);
      function i(c) {
        Ql(o, n, a, i, s, "next", c);
      }
      function s(c) {
        Ql(o, n, a, i, s, "throw", c);
      }
      i(void 0);
    });
  };
}
var Ti = { exports: {} },
  Mi = { exports: {} },
  eu;
function ip() {
  return (
    eu ||
      ((eu = 1),
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
  tu;
function sp() {
  return (
    tu ||
      ((tu = 1),
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
var ru;
function cp() {
  return (
    ru ||
      ((ru = 1),
      (function (e) {
        var t = sp();
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
                    R,
                    T,
                    F = 0,
                    B = A || [],
                    q = !1,
                    U = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: V,
                      f: V.bind(n, 4),
                      d: function (K, $) {
                        return ((D = K), (R = 0), (T = n), (U.n = $), l);
                      },
                    };
                  function V(G, K) {
                    for (R = G, T = K, a = 0; !q && F && !$ && a < B.length; a++) {
                      var $,
                        j = B[a],
                        me = U.p,
                        se = j[2];
                      G > 3
                        ? ($ = se === K) &&
                          ((T = j[(R = j[4]) ? 5 : ((R = 3), 3)]), (j[4] = j[5] = n))
                        : j[0] <= me &&
                          (($ = G < 2 && me < j[1])
                            ? ((R = 0), (U.v = K), (U.n = j[1]))
                            : me < se &&
                              ($ = G < 3 || j[0] > K || K > se) &&
                              ((j[4] = G), (j[5] = K), (U.n = se), (R = 0)));
                    }
                    if ($ || G > 1) return l;
                    throw ((q = !0), K);
                  }
                  return function (G, K, $) {
                    if (F > 1) throw TypeError("Generator is already running");
                    for (q && K === 1 && V(K, $), R = K, T = $; (a = R < 2 ? n : T) || !q; ) {
                      D || (R ? (R < 3 ? (R > 1 && (U.n = -1), V(R, T)) : (U.n = T)) : (U.v = T));
                      try {
                        if (((F = 2), D)) {
                          if ((R || (G = "next"), (a = D[G]))) {
                            if (!(a = a.call(D, T)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((T = a.value), R < 2 && (R = 0));
                          } else
                            (R === 1 && (a = D.return) && a.call(D),
                              R < 2 &&
                                ((T = TypeError(
                                  "The iterator does not provide a '" + G + "' method",
                                )),
                                (R = 1)));
                          D = n;
                        } else if ((a = (q = U.n < 0) ? T : S.call(E, U)) !== l) break;
                      } catch (j) {
                        ((D = n), (R = 1), (T = j));
                      } finally {
                        F = 1;
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
  nu;
function lp() {
  return (
    nu ||
      ((nu = 1),
      (function (e) {
        var t = ip(),
          r = sp();
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
var au;
function up() {
  return (
    au ||
      ((au = 1),
      (function (e) {
        var t = cp(),
          r = lp();
        function n(a, o, i, s, c) {
          return new r(t().w(a, o, i, s), c || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Bi)),
    Bi.exports
  );
}
var ou;
function my() {
  return (
    ou ||
      ((ou = 1),
      (function (e) {
        var t = up();
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
  iu;
function yy() {
  return (
    iu ||
      ((iu = 1),
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
  su;
function _y() {
  return (
    su ||
      ((su = 1),
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
var cu;
function wy() {
  return (
    cu ||
      ((cu = 1),
      (function (e) {
        var t = _y().default;
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
var lu;
function ky() {
  return (
    lu ||
      ((lu = 1),
      (function (e) {
        var t = ip(),
          r = cp(),
          n = my(),
          a = up(),
          o = lp(),
          i = yy(),
          s = wy();
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
var Vi, uu;
function Oy() {
  if (uu) return Vi;
  uu = 1;
  var e = ky()();
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
var Sy = Oy();
const z = ur(Sy);
var hr = {},
  Mr = {},
  Ha = {},
  du;
function xy() {
  if (du) return Ha;
  ((du = 1), Object.defineProperty(Ha, "__esModule", { value: !0 }));
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
var Nr = {},
  zn = {},
  fu;
function Ey() {
  if (fu) return zn;
  ((fu = 1),
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
var vu;
function dp() {
  if (vu) return Nr;
  vu = 1;
  var e =
    (Nr && Nr.__awaiter) ||
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
  Object.defineProperty(Nr, "__esModule", { value: !0 });
  const t = cr(),
    r = Ey();
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
  return ((Nr.default = n), Nr);
}
var qn = {},
  pu;
function Cy() {
  if (pu) return qn;
  ((pu = 1),
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
  hu;
function Py() {
  if (hu) return gr;
  hu = 1;
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
    r = dp();
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
var gu;
function Ry() {
  if (gu) return Mr;
  gu = 1;
  var e =
    (Mr && Mr.__awaiter) ||
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
  Object.defineProperty(Mr, "__esModule", { value: !0 });
  const t = cr(),
    r = xy(),
    n = dp(),
    a = Cy(),
    o = Py();
  let i = class xs extends t.StatsigClientBase {
    static instance(c) {
      const l = (0, t._getStatsigGlobal)().instance(c);
      return l instanceof xs
        ? l
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new xs(c ?? "", {}));
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
  return ((Mr.default = i), Mr);
}
var bu;
function Ay() {
  return (
    bu ||
      ((bu = 1),
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
          a = Ry();
        ((e.StatsigClient = a.default), r(cr(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(hr)),
    hr
  );
}
var gt = Ay(),
  Gi = { exports: {} },
  mu;
function Iy() {
  return (
    mu ||
      ((mu = 1),
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
var jy = Iy();
const Dy = ur(jy);
function yu(e, t) {
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
      ? yu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Wa = "@all-features",
  Ty = (function () {
    function e() {
      (he(this, e), C(this, "eventToValue", new Map()), (this.emitter = new Dy()));
    }
    return ge(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, o) {
          var i = this,
            s = a(r, nr(nr({}, o), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, s);
          var c = function () {
            var u = a(r, nr(nr({}, o), {}, { fireGateExposure: !1 })),
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
            u = i(r, n, a, nr(nr({}, s), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(o) === void 0 && this.eventToValue.set(o, u);
          var d = function () {
            var p = i(r, n, a, nr(nr({}, s), {}, { fireExperimentExposure: !1 })),
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
  My = "fedramp-moderate";
function Ny() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === My;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Qs = (function (e) {
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
  Ea = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  Ly = [
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
function _u(e, t) {
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
      ? _u(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _u(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ka = function (t) {
    return Es({ perimeter: Ny() ? Ea.FEDRAMP_MODERATE : Ea.COMMERCIAL }, t);
  },
  Un = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var o = function (f, p) {
      var h = X(f, 1),
        v = h[0],
        g = X(p, 1),
        m = g[0];
      return v.localeCompare(m);
    };
    (n.sort(o), a.sort(o));
    for (var i = 0; i < n.length; i++) {
      var s = X(n[i], 2),
        c = s[1],
        l = X(a[i], 2),
        u = l[1];
      if (c !== u) return !1;
    }
    return !0;
  },
  wu = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  $y = function (t) {
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
    var f = Z(t, Ly);
    return Es(
      Es({}, f),
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
  By = Object.entries(Qs).map(function (e) {
    var t = X(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  fp = function (t) {
    var r,
      n,
      a,
      o = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = By.find(function (i) {
            var s = X(i, 1),
              c = s[0];
            return o.includes(c);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Qs.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  Cs = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  ku = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (he(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = o),
        (this._allocatedExperimentName = i),
        (this._evaluationDetails = a),
        (this._onDefaultValueFallback = s));
    }
    return ge(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var o,
              i = this.getValue(r, n);
            if (i == null) return n;
            var s = Array.isArray(n) ? "array" : Ue(n),
              c = Array.isArray(i) ? "array" : Ue(i);
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
                fp(r.details),
                Cs(
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
  Ou = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        l = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (he(this, e),
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
    return ge(
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
              : n == null || (Ue(i) === Ue(n) && Array.isArray(n) === Array.isArray(i))
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
                fp(r.details),
                function (u, d) {
                  return r.get(d);
                },
                Cs(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                Cs(
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
  Xr = "0.0.0-development";
function Fy(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function vp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (vp = function () {
    return !!e;
  })();
}
function zy(e, t, r) {
  if (vp()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && xa(a, r.prototype), a);
}
function Ps(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Ps = function (n) {
      if (n === null || !Fy(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return zy(n, arguments, Y(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        xa(a, n)
      );
    }),
    Ps(e)
  );
}
function qy(e, t, r) {
  return (
    (t = Y(t)),
    Ge(e, pp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var Su = (function (e) {
  function t(r) {
    return (he(this, t), qy(this, t, [r]));
  }
  return (He(t, e), ge(t));
})(Ps(Error));
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
function Uy(e) {
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
var Vy = 5e3,
  Gy = "https://api.atlassian.com/flags",
  Hy = "https://api.stg.atlassian.com/flags",
  Wy = "https://api.dev.atlassian.com/flags",
  Ky = "https://api.stg.atlassian-us-gov-mod.com/flags",
  Yy = "https://api.atlassian-us-gov-mod.com/flags",
  Jy = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  Xy = "oasis-stg.com/flags",
  Zy = "atlassian-isolated.net/flags",
  Qy = "/gateway/api/flags",
  Hi = (function () {
    function e() {
      he(this, e);
    }
    return ge(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = ye(
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
          var t = ye(
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
          var t = ye(
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
                        new Su(
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
                      throw new Su("Unexpected 204 response");
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
          var t = ye(
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
          if (n) return Qy;
          if (a === Ea.FEDRAMP_MODERATE)
            switch (r) {
              case la.Production:
                return Yy;
              case la.Staging:
                return Ky;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === Ea.COMMERCIAL)
            switch (r) {
              case la.Development:
                return Wy;
              case la.Staging:
                var i = this.getApiUrl(o);
                return i !== null ? i : Hy;
              default:
                var s = this.getApiUrl(o);
                return s !== null ? s : Gy;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = ye(
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
                          (l = i.fetchTimeoutMs || Vy),
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
                            Uy(
                              {
                                method: o,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Xr,
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
          if (n === void 0) return r ? Jy.replace("%s", r) : null;
          var a = n.protocol,
            o = n.hostname,
            i = o.match(/([^.]+)\.oasis-stg\.com$/);
          if (i) return "".concat(a, "//api.").concat(i[1], ".").concat(Xy);
          var s = o.match(/([^.]+)\.atlassian-isolated\.net$/);
          return s ? "".concat(a, "//api.").concat(s[1], ".").concat(Zy) : null;
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
function Vn(e) {
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
function e_(e, t, r) {
  return (
    (t = Y(t)),
    Ge(e, hp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
function t_(e, t, r, n) {
  var a = Eo(Y(e.prototype), t, r);
  return typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var r_ = (function (e) {
  function t() {
    var r;
    return (
      he(this, t),
      (r = e_(this, t, ["NoFetchDataAdapter", "nofetch"])),
      C(r, "bootstrapResult", null),
      r
    );
  }
  return (
    He(t, e),
    ge(t, [
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
          var r = ye(
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
          var r = ye(
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
          var r = ye(
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
          t_(t, "setData", this)([n, a]);
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
function $e(e) {
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
function n_(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = a_(e)) || t) {
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
function a_(e, t) {
  if (e) {
    if (typeof e == "string") return Pu(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Pu(e, t)
          : void 0
    );
  }
}
function Pu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Wi = "LocalOverride:Recognized",
  o_ = "STATSIG_OVERRIDES",
  Ru = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Lr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  nt = function (t, r) {
    return r + ":" + t;
  },
  i_ = (function () {
    function e(t) {
      (he(this, e),
        (this._overrides = Lr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return ge(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Lr();
          } catch {
            return Lr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Lr(), n = arguments.length, a = new Array(n), o = 0; o < n; o++)
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
                f = X(u[l], 2),
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
                _ = X(g[v], 2),
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
                A = X(S[y], 2),
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
            this.parseStoredOverrides(Ru),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Ru);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var o = a[n],
              i = new Set(Object.keys(o)),
              s = n_(i),
              c;
            try {
              for (s.s(); !(c = s.n()).done; ) {
                var l = c.value,
                  u = rt._DJB2(l);
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
          var n = $e($e({}, Lr()), r);
          this._djb2Map.clear();
          for (var a = 0, o = Object.entries(n); a < o.length; a++)
            for (
              var i = X(o[a], 2), s = i[0], c = i[1], l = 0, u = Object.entries(c);
              l < u.length;
              l++
            ) {
              var d = X(u[l], 2),
                f = d[0],
                p = d[1];
              this._djb2Map.set(nt(rt._DJB2(f), s), p);
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
            this._djb2Map.set(nt(rt._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(nt(rt._DJB2(r), "gates")),
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
            : $e($e({}, r), {}, { value: o, details: $e($e({}, r.details), {}, { reason: Wi }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(nt(rt._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(nt(rt._DJB2(r), "configs")),
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
            this._djb2Map.set(nt(rt._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(nt(rt._DJB2(r), "configs")),
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
            this._djb2Map.set(nt(rt._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(nt(rt._DJB2(r), "layers")),
            this.saveOverrides());
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = Lr();
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
                  get: rt._makeTypedGet(r.name, o),
                  details: $e($e({}, r.details), {}, { reason: Wi }),
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
                  get: rt._makeTypedGet(r.name, o),
                  details: $e($e({}, r.details), {}, { reason: Wi }),
                },
              );
        },
      },
    ]);
  })(),
  s_ = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function Au(e, t) {
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
      ? Au(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Au(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Iu = "client-default-key",
  c_ = "https://xp.atlassian.com/v1/rgstr",
  l_ = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? o_ : n,
        o = r.overrideAdapter;
      (he(this, e),
        C(this, "initPromise", null),
        C(this, "initCompleted", !1),
        C(this, "initWithDefaults", !1),
        C(this, "hasCheckGateErrorOccurred", !1),
        C(this, "hasGetExperimentErrorOccurred", !1),
        C(this, "hasGetExperimentValueErrorOccurred", !1),
        C(this, "hasGetLayerErrorOccurred", !1),
        C(this, "hasGetLayerValueErrorOccurred", !1),
        C(this, "subscriptions", new Ty()),
        C(this, "dataAdapter", new r_()),
        C(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = o || new i_(a)));
    }
    return ge(e, [
      {
        key: "initialize",
        value: (function () {
          var t = ye(
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
          var t = ye(
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
                          this.provider.setClientVersion(Xr),
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
                var u = ar(
                  {
                    targetApp: s.initOptions.targetApp,
                    clientVersion: Xr,
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
          var t = ye(
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
          var t = ye(
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
          var t = ye(
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
          var t = ye(
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
            return ku.fromExperiment(
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
              new ku(r, {}, "", { time: Date.now(), reason: Qs.Error })
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
          var t = ye(
            z.mark(function n(a, o, i) {
              var s, c, l, u, d, f, p, h;
              return z.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = ar({}, a)),
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
                          (p = X(f, 2)),
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
          var t = ye(
            z.mark(function n(a, o, i, s) {
              var c, l, u, d, f, p, h, v;
              return z.wrap(
                function (m) {
                  for (;;)
                    switch ((m.prev = m.next)) {
                      case 0:
                        return (
                          (c = ar(ar({}, a), {}, { disableCurrentPageLogging: !0 })),
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
                          (h = X(p, 2)),
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
          var t = ye(
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
                          (l = $y(a)),
                          l.sdkKey || (l.sdkKey = Iu),
                          ((s = l.networkConfig) !== null && s !== void 0 && s.logEventUrl) ||
                            (l.networkConfig = ar(
                              ar({}, l.networkConfig),
                              {},
                              { logEventUrl: c_ },
                            )),
                          l.perimeter === Ea.FEDRAMP_MODERATE && (l.disableLogging = !0),
                          (u = l.sdkKey),
                          (d = l.environment),
                          l.updateUserCompletionCallback,
                          l.perimeter,
                          (f = Z(l, s_)),
                          (this.user = wu(o, i)),
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
                          (this.statsigClient = new gt.StatsigClient(Iu, this.user, p)),
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
          var t = ye(
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
                            ye(
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
          var t = ye(
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
                        ((l = m.sent), (u = wu(o, l.customAttributesFromFetch)), (m.next = 13));
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
          return Xr;
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
            return Ou.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !o }));
          } catch (i) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: i,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Ou.fromLayer(gt._makeLayer(r, { reason: "Error" }, null))
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
  W = (function () {
    function e() {
      he(this, e);
    }
    return ge(e, null, [
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
M = W;
C(W, "client", new l_());
C(W, "hasCheckGateErrorOccurred", !1);
C(W, "hasGetExperimentValueErrorOccurred", !1);
C(W, "checkGate", function (e, t) {
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
C(W, "getExperimentValue", function (e, t, r, n) {
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
C(W, "initializeCalled", M.client.initializeCalled.bind(M.client));
C(W, "initializeCompleted", M.client.initializeCompleted.bind(M.client));
C(W, "initialize", M.client.initialize.bind(M.client));
C(W, "initializeWithProvider", M.client.initializeWithProvider.bind(M.client));
C(W, "initializeFromValues", M.client.initializeFromValues.bind(M.client));
C(W, "manuallyLogGateExposure", M.client.manuallyLogGateExposure.bind(M.client));
C(W, "getExperiment", M.client.getExperiment.bind(M.client));
C(W, "manuallyLogExperimentExposure", M.client.manuallyLogExperimentExposure.bind(M.client));
C(W, "manuallyLogLayerExposure", M.client.manuallyLogLayerExposure.bind(M.client));
C(W, "shutdownStatsig", M.client.shutdownStatsig.bind(M.client));
C(W, "overrideGate", M.client.overrideGate.bind(M.client));
C(W, "clearGateOverride", M.client.clearGateOverride.bind(M.client));
C(W, "overrideConfig", M.client.overrideConfig.bind(M.client));
C(W, "clearConfigOverride", M.client.clearConfigOverride.bind(M.client));
C(W, "setOverrides", M.client.setOverrides.bind(M.client));
C(W, "getOverrides", M.client.getOverrides.bind(M.client));
C(W, "clearAllOverrides", M.client.clearAllOverrides.bind(M.client));
C(W, "isCurrentUser", M.client.isCurrentUser.bind(M.client));
C(W, "onGateUpdated", M.client.onGateUpdated.bind(M.client));
C(W, "onExperimentValueUpdated", M.client.onExperimentValueUpdated.bind(M.client));
C(W, "onAnyUpdated", M.client.onAnyUpdated.bind(M.client));
C(W, "updateUser", M.client.updateUser.bind(M.client));
C(W, "updateUserWithProvider", M.client.updateUserWithProvider.bind(M.client));
C(W, "updateUserWithValues", M.client.updateUserWithValues.bind(M.client));
C(W, "getPackageVersion", M.client.getPackageVersion.bind(M.client));
C(W, "getLayer", M.client.getLayer.bind(M.client));
C(W, "getLayerValue", M.client.getLayerValue.bind(M.client));
var Rs = W;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = W;
  else {
    var Ya, Ki;
    Rs = window.__FEATUREGATES_JS__;
    var ju =
      ((Ya = Rs) === null || Ya === void 0 || (Ki = Ya.getPackageVersion) === null || Ki === void 0
        ? void 0
        : Ki.call(Ya)) || "4.10.0 or earlier";
    if (ju !== Xr) {
      var u_ = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(ju, " when module version ")
        .concat(Xr, " was loading.");
      console.warn(u_);
    }
  }
var $r,
  Br,
  d_ =
    (globalThis == null ||
    ($r = globalThis.process) === null ||
    $r === void 0 ||
    ($r = $r.env) === null ||
    $r === void 0
      ? void 0
      : $r.JEST_WORKER_ID) !== void 0,
  f_ =
    !d_ &&
    (globalThis == null ||
    (Br = globalThis.process) === null ||
    Br === void 0 ||
    (Br = Br.env) === null ||
    Br === void 0
      ? void 0
      : Br.NODE_ENV) !== "production",
  v_ = function () {
    var t;
    f_ && (t = console).debug.apply(t, arguments);
  },
  ec = {},
  p_ = "@atlaskit/platform-feature-flags",
  ha = "__PLATFORM_FEATURE_FLAGS__",
  gp = typeof process < "u" && typeof ec < "u",
  h_ = gp ? ec.ENABLE_PLATFORM_FF === "true" : !1,
  g_ = gp ? ec.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  b_ = h_ || g_,
  m_ = { booleanResolver: void 0 },
  ga = typeof window < "u" ? window : globalThis;
ga[ha] = ga[ha] || m_;
function y_(e) {
  if (b_)
    return (
      v_(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        p_,
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
      return Rs.checkGate(e);
    var a = (n = ga[ha]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function fe(e) {
  return y_(e);
}
var __ = b.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  w_ = function () {
    return b.useContext(__);
  },
  Co = function (t) {
    var r = b.useRef(t);
    return ((r.current = t), r);
  };
function k_(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function O_(e, t) {
  var r = b.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = b.useRef(!0),
    a = b.useRef(r),
    o = n.current || !!(t && a.current.inputs && k_(t, a.current.inputs)),
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
function S_(e, t) {
  return O_(function () {
    return e;
  }, t);
}
function bp() {
  var e = w_(),
    t = S_(
      function (r) {
        return new by({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function Du(e, t) {
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
function x_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Du(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Du(Object(r)).forEach(function (n) {
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
    c = bp(),
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
          v = x_({ componentName: n, packageName: o, packageVersion: i }, u.current);
        h.context.push(v);
        var g = h.clone();
        (g && g.fire("atlaskit"), d.current(p, h));
      },
      [r, n, a, o, i, l, u, d],
    );
  return f;
}
function Tu(e, t) {
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
      ? Tu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Tu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Mu(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    o = e.packageVersion,
    i = e.analyticsData,
    s = bp(),
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
          p = E_({ componentName: n, packageName: a, packageVersion: o }, l.current);
        f.context.push(p);
        var h = f.clone();
        (h && h.fire("atlaskit"), u.current(f));
      },
      [r, n, a, o, c, l, u],
    );
  return d;
}
var Er = "ASC",
  Po = "DESC",
  C_ = "small",
  Ro = "large",
  mp = 0.22;
const P_ = 5;
function P(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, P_) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function Fe(e, t, r) {
  return e ?? "var(--c-, )";
}
var Nu = "#FF5630",
  Lu = "#DE350B",
  Fr = "#BF2600",
  $u = "#FFC400",
  Bu = "#FFAB00",
  zr = "#FF991F",
  yp = "#DEEBFF",
  ua = "#B3D4FF",
  Ao = "#4C9AFF",
  Fu = "#2684FF",
  zu = "#0065FF",
  Wt = "#0052CC",
  As = "#0747A6",
  or = "#FFFFFF",
  R_ = "#FAFBFC",
  Be = "#F4F5F7",
  A_ = "#EBECF0",
  Is = "#DFE1E6",
  br = "#A5ADBA",
  I_ = "#8993A4",
  j_ = "#6B778C",
  qu = "#5E6C84",
  D_ = "#505F79",
  nn = "#42526E",
  at = "#253858",
  qr = "#172B4D",
  Gn = "rgba(9, 30, 66, 0.04)",
  js = "rgba(9, 30, 66, 0.08)",
  Ux = "rgba(9, 30, 66, 0.25)",
  Vx = "rgba(9, 30, 66, 0.31)",
  ht = "#9FB0CC",
  T_ = "#8C9CB8",
  Yi = "#67758F",
  Hn = "#3B475C",
  Uu = "#313D52",
  Wn = "#1B2638",
  Ur = "#0D1424",
  M_ = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"];
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
var N_ = b.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      o = e.testId,
      i = e.isLoading,
      s = Z(e, M_);
    return b.createElement(
      "table",
      H({ inert: i ? "" : void 0, ref: t }, s, {
        "data-testid": o && "".concat(o, "--table"),
        className: P([
          "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
          r && "_1kqm1n9t",
          n && "_179r1tpy",
        ]),
        style: Gu(
          Gu(
            {},
            {
              "--local-dynamic-table-hover-bg":
                "var(--ds-background-neutral-subtle-hovered, ".concat(R_, ")"),
              "--local-dynamic-table-highlighted-bg": "var(--ds-background-selected, ".concat(
                yp,
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
            "--_mwqor1": Fe(
              "var(--ds-border-width-selected, 2px)".concat(
                " solid ",
                "var(--ds-border, ".concat(Is, ")"),
              ),
            ),
          },
        ),
      }),
      a,
    );
  }),
  L_ = function (t) {
    var r = t.children;
    return b.createElement(
      "caption",
      { className: P(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  $_ = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: P(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  B_ = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: P(["_4t3i1jdh"]),
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
        "data-testid": n && "".concat(n, "--empty-view-container"),
        className: P([
          "_19pk1wug _2hwx1wug _otyr1wug _18u01wug _ca0q19bv _u5f319bv _n3td19bv _19bv19bv _1bsb1ssb _y3gn1h6o",
        ]),
      },
      r,
    );
  },
  z_ = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function Hu(e, t) {
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
function Wu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Hu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function q_(e, t, r) {
  return (
    (t = Y(t)),
    Ge(e, _p() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function _p() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (_p = function () {
    return !!e;
  })();
}
var Ku = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var o;
      if (r.cells[a] && ((o = r.cells[a]) === null || o === void 0 ? void 0 : o.key) === n) {
        var i;
        return (i = t[a]) === null || i === void 0 ? void 0 : i.key;
      }
    }
  },
  U_ = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var o = a === Er ? 1 : -1,
      i = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      s = Array.from(r);
    return s.sort(function (c, l) {
      var u = Ku(c.cells, t, n),
        d = Ku(l.cells, t, n);
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
function V_(e) {
  var t = (function (r) {
    function n() {
      var a;
      he(this, n);
      for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
      return ((a = q_(this, n, [].concat(i))), C(a, "state", { pageRows: [] }), a);
    }
    return (
      He(n, r),
      ge(
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
                c = Z(o, z_);
              return O.createElement(
                e,
                H({ pageRows: this.state.pageRows, head: i }, c, { ref: s }),
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
                p ? ((h = s), (v = s)) : ((h = U_(c, s, l, u) || []), (v = rp(h, d, f))),
                Wu(Wu({}, i), {}, { pageRows: v })
              );
            },
          },
        ],
      )
    );
  })(O.Component);
  return O.forwardRef(function (r, n) {
    return O.createElement(t, H({}, r, { forwardedRef: n }));
  });
}
var G_ = "--local-dynamic-table-width",
  wp = function (t) {
    var r = t.width;
    return typeof r < "u" ? C({}, G_, "".concat(r, "%")) : void 0;
  },
  H_ = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  W_ = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      o = t.innerRef,
      i = Z(t, H_);
    return b.createElement(
      "td",
      H(
        {
          style: wp({ width: r }),
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
  K_ = ["isHighlighted", "children", "style", "testId", "className"],
  Y_ = b.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      o = e.testId,
      i = e.className,
      s = Z(e, K_);
    return b.createElement(
      "tr",
      H(
        {
          style: a,
          className: P([
            "_bfhkqtfy _1ygbsglb _1ah312gs",
            r ? "_bfhktkjs _irr31ae3" : "_irr3s8ts",
            i,
          ]),
        },
        s,
        { ref: t, "data-testid": o },
      ),
      n,
    );
  }),
  J_ = ["cells"],
  X_ = ["content", "testId"],
  Z_ = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      o = t.isFixedSize,
      i = t.isHighlighted,
      s = r.cells,
      c = Z(r, J_);
    return O.createElement(
      Y_,
      H(
        {},
        c,
        { isHighlighted: i },
        i ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(c.key)) },
      ),
      s.map(function (l, u) {
        var d = l.content,
          f = l.testId,
          p = Z(l, X_),
          h = (n || { cells: [] }).cells[u] || {},
          v = h.shouldTruncate,
          g = h.width;
        return O.createElement(
          W_,
          H({ "data-testid": f || (a && "".concat(a, "--cell-").concat(u)) }, p, {
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
function Q_(e, t, r) {
  return (
    (t = Y(t)),
    Ge(e, kp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var e0 = (function (e) {
    function t() {
      return (he(this, t), Q_(this, t, arguments));
    }
    return (
      He(t, e),
      ge(t, [
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
                return O.createElement(Z_, {
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
  t0 = V_(
    O.forwardRef(function (e, t) {
      return O.createElement(e0, H({}, e, { forwardedRef: t }));
    }),
  );
function r0(e, t, r) {
  return (
    (t = Y(t)),
    Ge(e, Op() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var n0 = (function (e) {
  function t(r) {
    var n;
    return (he(this, t), (n = r0(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    He(t, e),
    ge(
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
const tc = b.createContext(null);
var a0 = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function o0(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(nn, ")")
    : "var(--ds-icon-inverse, ".concat(or, ")");
}
var Ja = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  i0 = typeof window > "u" ? b.useEffect : b.useLayoutEffect,
  rc = O.memo(
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
        f = typeof u == "number" ? u : a0[u],
        p = "".concat(i, "ms"),
        h = o0(a),
        v = b.useContext(tc);
      return (
        i0(
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
            className: P([Ja.wrapperStyles, Ja.rotateStyles]),
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
              className: P([Ja.loadInStyles]),
            },
            O.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: P([Ja.circleStyles]),
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
  s0 = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: P(["_kqswh2mm"]) },
      r,
    );
  },
  c0 = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: P(["_tzy47hfw _lcxvglyw"]),
        style: Ju(Ju({}, C({}, Xu, n)), {}, { "--_cnddr8": Fe("var(".concat(Xu, ")")) }),
      },
      r,
    );
  },
  l0 = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: P(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function u0(e, t, r) {
  return (
    (t = Y(t)),
    Ge(e, Sp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var xp = (function (e) {
  function t() {
    return (he(this, t), u0(this, t, arguments));
  }
  return (
    He(t, e),
    ge(t, [
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
            s0,
            { testId: c },
            o ? O.createElement(c0, { contentsOpacity: s, testId: c }, a) : a,
            o &&
              O.createElement(
                l0,
                { testId: c },
                O.createElement(rc, {
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
C(xp, "defaultProps", {
  isLoading: !0,
  spinnerSize: Ro,
  contentsOpacity: mp,
  loadingLabel: "Loading table",
});
var d0 = ["children", "testId"],
  f0 = b.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = Z(e, d0);
    return b.createElement(
      "div",
      H({}, a, { "data-testid": n, ref: t, className: P(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  v0 = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: P(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  p0 = b.forwardRef(function (e, t) {
    var r = e.children;
    return b.createElement("div", { ref: t, className: P(["_kqswh2mm _152tidpf"]) }, r);
  });
function h0(e, t, r) {
  return (
    (t = Y(t)),
    Ge(e, Ep() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var Cp = (function (e) {
  function t() {
    var r;
    he(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = h0(this, t, [].concat(a))),
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
          Ue(i.style) === "object" &&
          ((i.style.pointerEvents = c ? "none" : ""), (i.style.opacity = c ? l.toString() : ""));
      }),
      r
    );
  }
  return (
    He(t, e),
    ge(t, [
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
            f0,
            { testId: s && "".concat(s, "--loading--container--advanced"), ref: this.containerRef },
            a,
            o &&
              O.createElement(
                v0,
                { testId: s },
                O.createElement(
                  p0,
                  { ref: this.spinnerRef },
                  O.createElement(rc, {
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
C(Cp, "defaultProps", {
  isLoading: !0,
  spinnerSize: Ro,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(mp), ")"),
  loadingLabel: "Loading table",
});
function g0(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = b.useState(t),
    a = X(n, 2),
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
  b0 = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  m0 = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  y0 = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  _0 = { core: 16, utility: 12 },
  w0 = {
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
    if (d && !fe("platform-visual-refresh-icons"))
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
    var S = _0[w],
      E = w0[w][k][g],
      A = S + 2 * E;
    return b.createElement(
      "span",
      {
        "data-testid": i,
        role: s ? "img" : void 0,
        "aria-label": s || void 0,
        "aria-hidden": s ? void 0 : !0,
        style: { color: o },
        className: P([
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
        className: P([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : w === "utility" ? y0[g] : k === "small" ? m0[g] : b0[g],
        ]),
      }),
    );
  });
const k0 = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Zu, default: Zu }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Xo = Vs(k0);
var Qu;
function O0() {
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
var S0 = {
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
      H(
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
          className: P([
            "_1e0c1o8l _1o9zidpf _vyfuvuon _vwz4kb7n _1szv15vq _1tly15vq _rzyw1osq _17jb1osq _1ksvoz0e _3se1x1jp _re2rglyw _1veoyfq0 _1kg81r31",
            "_jcxd1r8n _gq0g1onz _1trkwc43",
            i === s && "_18hbwc43",
            s === "transparent" && "_4fyi1j28",
            c && S0[c],
          ]),
        },
      ),
    );
  });
const x0 = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: rd, default: rd }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Pp = Vs(x0);
var nd;
function E0() {
  if (nd) return Jn;
  ((nd = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.default = void 0));
  var e = r(wt()),
    t = Pp;
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
function C0() {
  if (ad) return Kn;
  ((ad = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.default = void 0));
  var e = n(wt()),
    t = n(O0()),
    r = n(E0());
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
var P0 = C0();
const R0 = ur(P0);
var Xn = {},
  Zn = {},
  od;
function A0() {
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
function I0() {
  if (id) return Qn;
  ((id = 1), Object.defineProperty(Qn, "__esModule", { value: !0 }), (Qn.default = void 0));
  var e = r(wt()),
    t = Pp;
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
function j0() {
  if (sd) return Xn;
  ((sd = 1), Object.defineProperty(Xn, "__esModule", { value: !0 }), (Xn.default = void 0));
  var e = n(wt()),
    t = n(A0()),
    r = n(I0());
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
var D0 = j0();
const T0 = ur(D0);
var nc = b.createContext("elevation.surface"),
  M0 = function () {
    return b.useContext(nc);
  };
nc.displayName = "SurfaceProvider";
var N0 = [
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
  L0 = ["className"],
  $0 = {
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
  B0 = {
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
  F0 = {
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
  z0 = {
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
  q0 = {
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
      S = Z(e, N0);
    S.className;
    var E = Z(S, L0),
      A = b.createElement(
        n,
        H(
          {
            style: w,
            ref: t,
            className: P([
              "_19itglyw _vchhusvi _r06hglyw",
              o && $0[o],
              o && U0(o) && Rp[o],
              u && B0[u],
              f && F0[f],
              g && z0[g],
              _ && q0[_],
              y,
            ]),
          },
          E,
          { "data-testid": k },
        ),
        a,
      );
    return o ? b.createElement(nc.Provider, { value: o }, A) : A;
  });
function U0(e) {
  return e in Rp;
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
  Ap = (...e) => P(e);
function V0() {
  return {
    css() {
      throw Ji();
    },
    cssMap() {
      throw Ji();
    },
    cx: Ap,
    XCSSProp() {
      throw Ji();
    },
  };
}
var G0 = V0(),
  Ip = G0.cx,
  H0 = [
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
  W0 = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  K0 = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  Y0 = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  J0 = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  X0 = { root: "_1e0c1txw _vchhusvi" },
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
        v = Z(e, H0);
      return b.createElement(
        n,
        H({}, v, {
          role: a,
          className: P([
            X0.root,
            s && ld[s],
            c && ld[c],
            s && cd[s],
            l && cd[l],
            o && J0[o],
            f && K0[f],
            i && W0[i],
            p && Y0[p],
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
var Z0 = [
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
  Ds = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  Q0 = function (t) {
    var r = t.children;
    return b.createElement("span", { className: P([Ds.separator]) }, r);
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
        m = Z(e, Z0),
        _ = typeof f == "string" ? b.createElement(Q0, null, f) : f,
        w = _
          ? b.Children.toArray(g)
              .filter(Boolean)
              .map(function (k, y) {
                return b.createElement(b.Fragment, { key: y }, f && y > 0 ? _ : null, k);
              })
          : g;
      return b.createElement(
        Io,
        H({}, m, {
          as: r,
          role: v,
          alignItems: o,
          justifyContent: c || n,
          direction: "row",
          gap: u,
          rowGap: d,
          wrap: s ? "wrap" : void 0,
          xcss: Ip(l === "hug" && Ds.hug, l === "fill" && Ds.fill, p),
          testId: h,
          ref: t,
        }),
        w,
      );
    }),
  );
so.displayName = "Inline";
var ew = "Invariant failed";
function tw(e, t) {
  if (!e) throw new Error(ew);
}
var jp = b.createContext(!1),
  rw = function () {
    return b.useContext(jp);
  },
  nw = jp.Provider,
  aw = ["span", "p", "strong", "em"],
  ow = function (t, r) {
    var n = M0();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return ud.hasOwnProperty(n) ? ud[n] : "color.text";
    }
  },
  Vr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  iw = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  sw = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  cw = {
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
  Dp = b.forwardRef(function (e, t) {
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
    tw(aw.includes(n));
    var p = rw(),
      h = ow(a, p);
    !c && !p && (c = "medium");
    var v = b.createElement(
      n,
      {
        id: s,
        className: P([
          Vr.root,
          c && iw[c],
          h && cw[h],
          u && Vr.truncation,
          u === 1 && Vr.breakAll,
          o && Vr["textAlign.".concat(o)],
          l && sw[l],
          n === "em" && Vr["as.em"],
          n === "strong" && Vr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: u },
        "data-testid": i,
        ref: t,
      },
      f,
    );
    return p ? v : b.createElement(nw, { value: !0 }, v);
  });
function lw() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var uw = ["as", "children", "isInset", "testId", "style", "xcss"],
  dw = ["className"],
  ac = b.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      o = e.isInset,
      i = e.testId,
      s = e.style,
      c = e.xcss,
      l = Z(e, uw);
    l.className;
    var u = Z(l, dw);
    return b.createElement(
      n,
      H({}, u, {
        ref: t,
        className: P([
          "_mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          o && "_1ah31gjf _2mwq1gjf",
          fe("platform_dst_compiled_primitives_outline_reset") && "_ymio1r31 _ypr0glyw _zcxs1o36",
          c,
        ]),
        style: s,
        "data-testid": i,
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
  dd = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  Tp = b.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      o = a === void 0 ? "button" : a,
      i = e.onClick,
      s = i === void 0 ? Re : i,
      c = e.interactionName,
      l = e.componentName,
      u = e.analyticsContext,
      d = e.style,
      f = e.testId,
      p = e.xcss,
      h = e.tabIndex,
      v = Z(e, fw),
      g = b.useContext(tc),
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
    var w = Z(v, vw);
    return b.createElement(
      ac,
      H({ as: "button", tabIndex: h ?? (lw() && !n ? 0 : void 0), style: d }, w, {
        type: o,
        onClick: _,
        disabled: n,
        xcss: Ap(dd.root, n && dd.disabled, p),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  Xi = {},
  ea = {},
  fd;
function Mp() {
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
function pw() {
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
  var t = Mp();
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
function hw() {
  return (
    pd ||
      ((pd = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = Mp();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = pw();
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
var Qo = hw(),
  gw = {
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
  bw = "ds",
  mw = "--".concat(bw, "-token-not-found");
function Vt(e, t) {
  var r = gw[e];
  r || (r = mw);
  var n = t ? "var(".concat(r, ", ").concat(t, ")") : "var(".concat(r, ")");
  return n;
}
var yw = function () {
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
  Np = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: yw() });
  },
  _w = Np(),
  ww = b.createContext(Np()),
  kw = function (e) {
    return e.value++;
  },
  Ow = function (e) {
    return e ? e.prefix : "";
  },
  Sw = function (e) {
    var t = e || _w,
      r = Ow(t),
      n = kw(t),
      a = r + n,
      o = function (i) {
        return a + t.uid(i);
      };
    return { uid: a, gen: o };
  },
  Lp = function () {
    var e = b.useContext(ww),
      t = b.useState(function () {
        return Sw(e);
      })[0];
    return t;
  },
  xw = function () {
    var e = Lp().uid;
    return e;
  },
  Ew = function () {
    var e = Lp().gen;
    return e;
  },
  Zi,
  co = (Zi = O.useId) !== null && Zi !== void 0 ? Zi : void 0;
function $p() {
  return co && fe("platform-dst-react-18-use-id")
    ? fe("platform-dst-react-18-use-id-selector-safe")
      ? co().replace(/[:«»]/g, "_")
      : co()
    : "uid".concat(xw());
}
function Cw() {
  if (co && fe("platform-dst-react-18-use-id")) {
    var e = $p();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return Ew();
}
var oc = function (t) {
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
        className: P([
          "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
        ]),
      },
      r,
    );
  },
  Pw = {
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
function Aw(e) {
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
      c = Z(i, Rw),
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
var Iw = Aw(function () {
    return { mode: "light" };
  }),
  jw = Iw.useTheme;
function Dw(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Tw(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Mw = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Tw(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = Dw(a);
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
  jo = "-moz-",
  ee = "-webkit-",
  Bp = "comm",
  ic = "rule",
  sc = "decl",
  Nw = "@import",
  Fp = "@keyframes",
  Lw = "@layer",
  $w = Math.abs,
  ei = String.fromCharCode,
  Bw = Object.assign;
function Fw(e, t) {
  return Se(e, 0) ^ 45
    ? (((((((t << 2) ^ Se(e, 0)) << 2) ^ Se(e, 1)) << 2) ^ Se(e, 2)) << 2) ^ Se(e, 3)
    : 0;
}
function zp(e) {
  return e.trim();
}
function zw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function te(e, t, r) {
  return e.replace(t, r);
}
function Ts(e, t) {
  return e.indexOf(t);
}
function Se(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ca(e, t, r) {
  return e.slice(t, r);
}
function Ct(e) {
  return e.length;
}
function cc(e) {
  return e.length;
}
function Xa(e, t) {
  return (t.push(e), e);
}
function qw(e, t) {
  return e.map(t).join("");
}
var ti = 1,
  an = 1,
  qp = 0,
  Ve = 0,
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
  return Bw(ri("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Uw() {
  return _e;
}
function Vw() {
  return ((_e = Ve > 0 ? Se(vn, --Ve) : 0), an--, _e === 10 && ((an = 1), ti--), _e);
}
function Xe() {
  return ((_e = Ve < qp ? Se(vn, Ve++) : 0), an++, _e === 10 && ((an = 1), ti++), _e);
}
function Tt() {
  return Se(vn, Ve);
}
function lo() {
  return Ve;
}
function $a(e, t) {
  return Ca(vn, e, t);
}
function Pa(e) {
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
function Up(e) {
  return ((ti = an = 1), (qp = Ct((vn = e))), (Ve = 0), []);
}
function Vp(e) {
  return ((vn = ""), e);
}
function uo(e) {
  return zp($a(Ve - 1, Ms(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Gw(e) {
  for (; (_e = Tt()) && _e < 33; ) Xe();
  return Pa(e) > 2 || Pa(_e) > 3 ? "" : " ";
}
function Hw(e, t) {
  for (; --t && Xe() && !(_e < 48 || _e > 102 || (_e > 57 && _e < 65) || (_e > 70 && _e < 97)); );
  return $a(e, lo() + (t < 6 && Tt() == 32 && Xe() == 32));
}
function Ms(e) {
  for (; Xe(); )
    switch (_e) {
      case e:
        return Ve;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ms(_e);
        break;
      case 40:
        e === 41 && Ms(e);
        break;
      case 92:
        Xe();
        break;
    }
  return Ve;
}
function Ww(e, t) {
  for (; Xe() && e + _e !== 57; ) if (e + _e === 84 && Tt() === 47) break;
  return "/*" + $a(t, Ve - 1) + "*" + ei(e === 47 ? e : Xe());
}
function Kw(e) {
  for (; !Pa(Tt()); ) Xe();
  return $a(e, Ve);
}
function Yw(e) {
  return Vp(fo("", null, null, null, [""], (e = Up(e)), 0, [0], e));
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
    switch (((h = _), (_ = Xe()))) {
      case 40:
        if (h != 108 && Se(E, d - 1) == 58) {
          Ts((E += te(uo(_), "&", "&\f")), "&\f") != -1 && (m = -1);
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
        E += Gw(h);
        break;
      case 92:
        E += Hw(lo() - 1, 7);
        continue;
      case 47:
        switch (Tt()) {
          case 42:
          case 47:
            Xa(Jw(Ww(Xe(), lo()), t, r), c);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * v:
        s[l++] = Ct(E) * m;
      case 125 * v:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            (m == -1 && (E = te(E, /\f/g, "")),
              p > 0 &&
                Ct(E) - d &&
                Xa(p > 32 ? gd(E + ";", n, r, d - 1) : gd(te(E, " ", "") + ";", n, r, d - 2), c));
            break;
          case 59:
            E += ";";
          default:
            if ((Xa((S = hd(E, t, r, l, u, a, s, w, (k = []), (y = []), d)), o), _ === 123))
              if (u === 0) fo(E, t, S, S, k, o, d, s, y);
              else
                switch (f === 99 && Se(E, 3) === 110 ? 100 : f) {
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
        ((d = 1 + Ct(E)), (p = h));
      default:
        if (v < 1) {
          if (_ == 123) --v;
          else if (_ == 125 && v++ == 0 && Vw() == 125) continue;
        }
        switch (((E += ei(_)), _ * v)) {
          case 38:
            m = u > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            ((s[l++] = (Ct(E) - 1) * m), (m = 1));
            break;
          case 64:
            (Tt() === 45 && (E += uo(Xe())), (f = Tt()), (u = d = Ct((w = E += Kw(lo())))), _++);
            break;
          case 45:
            h === 45 && Ct(E) == 2 && (v = 0);
        }
    }
  return o;
}
function hd(e, t, r, n, a, o, i, s, c, l, u) {
  for (var d = a - 1, f = a === 0 ? o : [""], p = cc(f), h = 0, v = 0, g = 0; h < n; ++h)
    for (var m = 0, _ = Ca(e, d + 1, (d = $w((v = i[h])))), w = e; m < p; ++m)
      (w = zp(v > 0 ? f[m] + " " + _ : te(_, /&\f/g, f[m]))) && (c[g++] = w);
  return ri(e, t, r, a === 0 ? ic : s, c, l, u);
}
function Jw(e, t, r) {
  return ri(e, t, r, Bp, ei(Uw()), Ca(e, 2, -2), 0);
}
function gd(e, t, r, n) {
  return ri(e, t, r, sc, Ca(e, 0, n), Ca(e, n + 1, -1), n);
}
function Zr(e, t) {
  for (var r = "", n = cc(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function Xw(e, t, r, n) {
  switch (e.type) {
    case Lw:
      if (e.children.length) break;
    case Nw:
    case sc:
      return (e.return = e.return || e.value);
    case Bp:
      return "";
    case Fp:
      return (e.return = e.value + "{" + Zr(e.children, n) + "}");
    case ic:
      e.value = e.props.join(",");
  }
  return Ct((r = Zr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function Zw(e) {
  var t = cc(e);
  return function (r, n, a, o) {
    for (var i = "", s = 0; s < t; s++) i += e[s](r, n, a, o) || "";
    return i;
  };
}
function Qw(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function ek(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var tk = function (t, r, n) {
    for (var a = 0, o = 0; (a = o), (o = Tt()), a === 38 && o === 12 && (r[n] = 1), !Pa(o); ) Xe();
    return $a(t, Ve);
  },
  rk = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (Pa(a)) {
        case 0:
          (a === 38 && Tt() === 12 && (r[n] = 1), (t[n] += tk(Ve - 1, r, n)));
          break;
        case 2:
          t[n] += uo(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = Tt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += ei(a);
      }
    while ((a = Xe()));
    return t;
  },
  nk = function (t, r) {
    return Vp(rk(Up(t), r));
  },
  bd = new WeakMap(),
  ak = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !bd.get(n)) && !a) {
        bd.set(t, !0);
        for (var o = [], i = nk(r, o), s = n.props, c = 0, l = 0; c < i.length; c++)
          for (var u = 0; u < s.length; u++, l++)
            t.props[l] = o[c] ? i[c].replace(/&\f/g, s[u]) : s[u] + " " + i[c];
      }
    }
  },
  ok = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Gp(e, t) {
  switch (Fw(e, t)) {
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
      return ee + e + jo + e + Pe + e + e;
    case 6828:
    case 4268:
      return ee + e + Pe + e + e;
    case 6165:
      return ee + e + Pe + "flex-" + e + e;
    case 5187:
      return ee + e + te(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + Pe + "flex-$1$2") + e;
    case 5443:
      return ee + e + Pe + "flex-item-" + te(e, /flex-|-self/, "") + e;
    case 4675:
      return ee + e + Pe + "flex-line-pack" + te(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ee + e + Pe + te(e, "shrink", "negative") + e;
    case 5292:
      return ee + e + Pe + te(e, "basis", "preferred-size") + e;
    case 6060:
      return ee + "box-" + te(e, "-grow", "") + ee + e + Pe + te(e, "grow", "positive") + e;
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
          te(e, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + Pe + "flex-pack:$3"),
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
      if (Ct(e) - 1 - t > 6)
        switch (Se(e, t + 1)) {
          case 109:
            if (Se(e, t + 4) !== 45) break;
          case 102:
            return (
              te(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + ee + "$2-$3$1" + jo + (Se(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Ts(e, "stretch") ? Gp(te(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Se(e, t + 1) !== 115) break;
    case 6444:
      switch (Se(e, Ct(e) - 3 - (~Ts(e, "!important") && 10))) {
        case 107:
          return te(e, ":", ":" + ee) + e;
        case 101:
          return (
            te(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                ee +
                (Se(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ee +
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
          return ee + e + Pe + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ee + e + Pe + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ee + e + Pe + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ee + e + Pe + e + e;
  }
  return e;
}
var ik = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case sc:
          t.return = Gp(t.value, t.length);
          break;
        case Fp:
          return Zr([ta(t, { value: te(t.value, "@", "@" + ee) })], a);
        case ic:
          if (t.length)
            return qw(t.props, function (o) {
              switch (zw(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Zr([ta(t, { props: [te(o, /:(read-\w+)/, ":" + jo + "$1")] })], a);
                case "::placeholder":
                  return Zr(
                    [
                      ta(t, { props: [te(o, /:(plac\w+)/, ":" + ee + "input-$1")] }),
                      ta(t, { props: [te(o, /:(plac\w+)/, ":" + jo + "$1")] }),
                      ta(t, { props: [te(o, /:(plac\w+)/, Pe + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  sk = [ik],
  ck = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (v) {
        var g = v.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || sk,
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
      l = [ak, ok];
    {
      var u,
        d = [
          Xw,
          Qw(function (v) {
            u.insert(v);
          }),
        ],
        f = Zw(l.concat(a, d)),
        p = function (g) {
          return Zr(Yw(g), f);
        };
      c = function (g, m, _, w) {
        ((u = _), p(g ? g + "{" + m.styles + "}" : m.styles), w && (h.inserted[m.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new Mw({
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
  ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var md;
function lk() {
  if (md) return ne;
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
    (ne.AsyncMode = c),
    (ne.ConcurrentMode = l),
    (ne.ContextConsumer = s),
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
    (ne.isAsyncMode = function (y) {
      return k(y) || w(y) === c;
    }),
    (ne.isConcurrentMode = k),
    (ne.isContextConsumer = function (y) {
      return w(y) === s;
    }),
    (ne.isContextProvider = function (y) {
      return w(y) === i;
    }),
    (ne.isElement = function (y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }),
    (ne.isForwardRef = function (y) {
      return w(y) === u;
    }),
    (ne.isFragment = function (y) {
      return w(y) === n;
    }),
    (ne.isLazy = function (y) {
      return w(y) === h;
    }),
    (ne.isMemo = function (y) {
      return w(y) === p;
    }),
    (ne.isPortal = function (y) {
      return w(y) === r;
    }),
    (ne.isProfiler = function (y) {
      return w(y) === o;
    }),
    (ne.isStrictMode = function (y) {
      return w(y) === a;
    }),
    (ne.isSuspense = function (y) {
      return w(y) === d;
    }),
    (ne.isValidElementType = function (y) {
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
    (ne.typeOf = w),
    ne
  );
}
var yd;
function uk() {
  return (yd || ((yd = 1), (Qi.exports = lk())), Qi.exports);
}
var es, _d;
function dk() {
  if (_d) return es;
  _d = 1;
  var e = uk(),
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
dk();
var fk = !0;
function Hp(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var lc = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || fk === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  Wp = function (t, r, n) {
    lc(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do (t.insert(r === o ? "." + a : "", o, t.sheet, !0), (o = o.next));
      while (o !== void 0);
    }
  };
function vk(e) {
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
var pk = {
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
  hk = /[A-Z]|^ms/g,
  gk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Kp = function (t) {
    return t.charCodeAt(1) === 45;
  },
  wd = function (t) {
    return t != null && typeof t != "boolean";
  },
  ts = ek(function (e) {
    return Kp(e) ? e : e.replace(hk, "-$&").toLowerCase();
  }),
  kd = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(gk, function (n, a, o) {
            return ((Pt = { name: a, styles: o, next: Pt }), a);
          });
    }
    return pk[t] !== 1 && !Kp(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Ra(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1) return ((Pt = { name: a.name, styles: a.styles, next: Pt }), a.name);
      var o = r;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; )
            ((Pt = { name: i.name, styles: i.styles, next: Pt }), (i = i.next));
        var s = o.styles + ";";
        return s;
      }
      return bk(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = Pt,
          l = r(e);
        return ((Pt = c), Ra(e, t, l));
      }
      break;
    }
  }
  var u = r;
  if (t == null) return u;
  var d = t[u];
  return d !== void 0 ? d : u;
}
function bk(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += Ra(e, t, r[a]) + ";";
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
        var l = Ra(e, t, i);
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
  Pt;
function uc(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  Pt = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) ((n = !1), (a += Ra(r, t, o)));
  else {
    var i = o;
    a += i[0];
  }
  for (var s = 1; s < e.length; s++)
    if (((a += Ra(r, t, e[s])), n)) {
      var c = o;
      a += c[s];
    }
  Od.lastIndex = 0;
  for (var l = "", u; (u = Od.exec(a)) !== null; ) l += "-" + u[1];
  var d = vk(a) + l;
  return { name: d, styles: a, next: Pt };
}
var mk = function (t) {
    return t();
  },
  yk = Pc.useInsertionEffect ? Pc.useInsertionEffect : !1,
  Yp = yk || mk,
  Jp = b.createContext(typeof HTMLElement < "u" ? ck({ key: "css" }) : null);
Jp.Provider;
var Xp = function (t) {
    return b.forwardRef(function (r, n) {
      var a = b.useContext(Jp);
      return t(r, a, n);
    });
  },
  Zp = b.createContext({}),
  dc = {}.hasOwnProperty,
  Ns = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  _k = function (t, r) {
    var n = {};
    for (var a in r) dc.call(r, a) && (n[a] = r[a]);
    return ((n[Ns] = t), n);
  },
  wk = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      lc(r, n, a),
      Yp(function () {
        return Wp(r, n, a);
      }),
      null
    );
  },
  kk = Xp(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[Ns],
      o = [n],
      i = "";
    typeof e.className == "string"
      ? (i = Hp(t.registered, o, e.className))
      : e.className != null && (i = e.className + " ");
    var s = uc(o, void 0, b.useContext(Zp));
    i += t.key + "-" + s.name;
    var c = {};
    for (var l in e) dc.call(e, l) && l !== "css" && l !== Ns && (c[l] = e[l]);
    return (
      (c.className = i),
      r && (c.ref = r),
      b.createElement(
        b.Fragment,
        null,
        b.createElement(wk, { cache: t, serialized: s, isStringTag: typeof a == "string" }),
        b.createElement(a, c),
      )
    );
  }),
  Ok = kk,
  Jt = function (t, r) {
    var n = arguments;
    if (r == null || !dc.call(r, "css")) return b.createElement.apply(void 0, n);
    var a = n.length,
      o = new Array(a);
    ((o[0] = Ok), (o[1] = _k(t, r)));
    for (var i = 2; i < a; i++) o[i] = n[i];
    return b.createElement.apply(null, o);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Jt || (Jt = {}));
function $t() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return uc(t);
}
var Sk = function e(t) {
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
function xk(e, t, r) {
  var n = [],
    a = Hp(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var Ek = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Yp(function () {
        for (var a = 0; a < n.length; a++) Wp(r, n[a], !1);
      }),
      null
    );
  },
  Ck = Xp(function (e, t) {
    var r = [],
      n = function () {
        for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++) l[u] = arguments[u];
        var d = uc(l, t.registered);
        return (r.push(d), lc(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++) l[u] = arguments[u];
        return xk(t.registered, n, Sk(l));
      },
      o = { css: n, cx: a, theme: b.useContext(Zp) },
      i = e.children(o);
    return b.createElement(
      b.Fragment,
      null,
      b.createElement(Ek, { cache: t, serializedArr: r }),
      i,
    );
  });
function Qp(e, t) {
  var r = b.useRef(!0);
  b.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var eh = 2,
  Ls = $t({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: eh,
  }),
  $s = $t({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -eh,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  Pk = $t({
    "&:focus": Ls,
    "&:focus-visible": Ls,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  Rk = $t({
    "&:focus": $s,
    "&:focus-visible": $s,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  th = b.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? $s : Ls,
      o = r ? Rk : Pk,
      i = typeof n > "u" ? o : n === "on" && a;
    return Jt(Ck, null, function (s) {
      var c = s.css,
        l = s.cx;
      return b.Children.only(
        i ? b.cloneElement(t, { className: l([c(i), t.props.className]) }) : t,
      );
    });
  });
th.displayName = "FocusRing";
function Gt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var Ak = 9;
function Sd(e) {
  e.keyCode !== Ak && Gt(e);
}
var Ik = {
    onMouseDownCapture: Gt,
    onMouseUpCapture: Gt,
    onKeyDownCapture: Sd,
    onKeyUpCapture: Sd,
    onTouchStartCapture: Gt,
    onTouchEndCapture: Gt,
    onPointerDownCapture: Gt,
    onPointerUpCapture: Gt,
    onClickCapture: Gt,
    onClick: Gt,
  },
  jk = {};
function Dk(e) {
  var t = e.isInteractive;
  return t ? jk : Ik;
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
          light: "var(--ds-background-neutral-hovered, ".concat(js, ")"),
          dark: "var(--ds-background-neutral-hovered, ".concat(Uu, ")"),
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
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Ur, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Ur, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-background-brand-bold, ".concat(Wt, ")"),
          dark: "var(--ds-background-brand-bold, ".concat(Ao, ")"),
        },
        hover: {
          light: "var(--ds-background-brand-bold-hovered, ".concat(zu, ")"),
          dark: "var(--ds-background-brand-bold-hovered, ".concat(ua, ")"),
        },
        active: {
          light: "var(--ds-background-brand-bold-pressed, ".concat(As, ")"),
          dark: "var(--ds-background-brand-bold-pressed, ".concat(Fu, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Gn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Hn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Ur, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Ur, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-background-warning-bold, ".concat(Bu, ")"),
          dark: "var(--ds-background-warning-bold, ".concat(Bu, ")"),
        },
        hover: {
          light: "var(--ds-background-warning-bold-hovered, ".concat($u, ")"),
          dark: "var(--ds-background-warning-bold-hovered, ".concat($u, ")"),
        },
        active: {
          light: "var(--ds-background-warning-bold-pressed, ".concat(zr, ")"),
          dark: "var(--ds-background-warning-bold-pressed, ".concat(zr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Gn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Hn, ")"),
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
          light: "var(--ds-background-danger-bold, ".concat(Lu, ")"),
          dark: "var(--ds-background-danger-bold, ".concat(Lu, ")"),
        },
        hover: {
          light: "var(--ds-background-danger-bold-hovered, ".concat(Nu, ")"),
          dark: "var(--ds-background-danger-bold-hovered, ".concat(Nu, ")"),
        },
        active: {
          light: "var(--ds-background-danger-bold-pressed, ".concat(Fr, ")"),
          dark: "var(--ds-background-danger-bold-pressed, ".concat(Fr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Gn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Hn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Fr, ")"),
          dark: "var(--ds-background-selected, ".concat(Fr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Fr, ")"),
          dark: "var(--ds-background-selected, ".concat(Fr, ")"),
        },
      },
      link: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Be, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Be, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        hover: {
          light: "var(--ds-background-neutral-subtle-hovered, ".concat(js, ")"),
          dark: "var(--ds-background-neutral-subtle-hovered, ".concat(Uu, ")"),
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
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Ur, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Ur, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Be, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(at, ")"),
          dark: "var(--ds-background-selected, ".concat(Be, ")"),
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
          light: "var(--ds-text, ".concat(Wt, ")"),
          dark: "var(--ds-text, ".concat(Wt, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Wn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Be, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Be, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-text-inverse, ".concat(or, ")"),
          dark: "var(--ds-text-inverse, ".concat(Wn, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Wn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Be, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Be, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-text-warning-inverse, ".concat(qr, ")"),
          dark: "var(--ds-text-warning-inverse, ".concat(qr, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Wn, ")"),
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
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Wn, ")"),
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
          dark: "var(--ds-link, ".concat(Ao, ")"),
        },
        hover: {
          light: "var(--ds-link, ".concat(zu, ")"),
          dark: "var(--ds-link, ".concat(ua, ")"),
        },
        active: {
          light: "var(--ds-link-pressed, ".concat(As, ")"),
          dark: "var(--ds-link-pressed, ".concat(Fu, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Yi, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Be, ")"),
          dark: "var(--ds-text-selected, ".concat(at, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Be, ")"),
          dark: "var(--ds-text-selected, ".concat(at, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-text, ".concat(nn, ")"),
          dark: "var(--ds-text, ".concat(ht, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Wt, ")"),
          dark: "var(--ds-text, ".concat(Wt, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Yi, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Be, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Be, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-text-subtle, ".concat(j_, ")"),
          dark: "var(--ds-text-subtle, ".concat(ht, ")"),
        },
        hover: {
          light: "var(--ds-text-subtle, ".concat(I_, ")"),
          dark: "var(--ds-text-subtle, ".concat(yp, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(D_, ")"),
          dark: "var(--ds-text, ".concat(T_, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(br, ")"),
          dark: "var(--ds-text-disabled, ".concat(Yi, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Be, ")"),
          dark: "var(--ds-text-selected, ".concat(ht, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Be, ")"),
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
function ie(e) {
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
  Bs = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  Tk = { default: Bs.default, compact: Bs.compact, none: "inherit" },
  Mk = {
    default: "0 ".concat(sr + sr / 4, "px"),
    compact: "0 ".concat(sr + sr / 4, "px"),
    none: "0",
  },
  Nk = { compact: "0 ".concat(sr / 4, "px"), default: "0 ".concat(sr / 4, "px"), none: "0" },
  Lk = { default: "middle", compact: "middle", none: "baseline" },
  rh = { content: "0 ".concat(sr / 4, "px"), icon: "0 ".concat(sr / 4, "px") },
  nh = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  $k = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #172B4D)",
    "&::after": ie(ie({}, nh), {}, { content: '""', borderColor: "var(--ds-border, #091E4224)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #091E4224)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #091E424F)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  Bk = {
    background: "var(--ds-background-brand-bold, #0C66E4)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #0055CC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #09326C)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #0C66E4)",
    },
  },
  Fk = {
    background: "transparent",
    color: "var(--ds-link, #0C66E4)",
    "&:hover": { color: "var(--ds-link, #0C66E4)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #0055CC)", textDecoration: "underline" },
  },
  zk = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #091E420F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #091E4224)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  qk = {
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
  Uk = {
    background: "var(--ds-background-warning-bold, #F5CD47)",
    color: "var(--ds-text-warning-inverse, #172B4D)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #E2B203)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #CF9F02)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #F5CD47)",
    },
  },
  Vk = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #5D1F1A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  Gk = {
    background: "var(--ds-background-selected, #E9F2FF)",
    color: "var(--ds-text-selected, #0C66E4)",
    "&:not([disabled])::after": ie(
      ie({}, nh),
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
function Gr(e) {
  var t = e.appearance,
    r = e.key,
    n = e.mode;
  return {
    background: Rd({ group: Ed.background[t], key: r, mode: n }),
    color: "".concat(Rd({ group: Ed.color[t], key: r, mode: n }), " !important"),
  };
}
function Hk(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.mode,
    a = e.isSelected,
    o = e.shouldFitContainer,
    i = e.isOnlySingleIcon,
    s = Gr({ appearance: t, key: a ? "selected" : "default", mode: n });
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
          !fe("platform-component-visual-refresh") && s,
        ),
        {},
        {
          cursor: "pointer",
          height: Bs[r],
          lineHeight: Tk[r],
          padding: i ? Nk[r] : Mk[r],
          verticalAlign: Lk[r],
          width: o ? "100%" : "auto",
          justifyContent: "center",
        },
        !fe("platform-component-visual-refresh") &&
          ie(
            ie(
              {
                "&:visited": ie({}, s),
                "&:hover": ie(
                  ie({}, Gr({ appearance: t, key: a ? "selected" : "hover", mode: n })),
                  {},
                  {
                    textDecoration:
                      !a && (t === "link" || t === "subtle-link") ? "underline" : "inherit",
                    transitionDuration: "0s, 0.15s",
                  },
                ),
                "&:active": ie(
                  ie({}, Gr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                '&[data-firefox-is-active="true"]': ie(
                  ie({}, Gr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                "&[disabled]": ie(
                  ie({}, Gr({ appearance: t, key: "disabled", mode: n })),
                  {},
                  { cursor: "not-allowed", textDecoration: "none" },
                ),
              },
              Pd,
            ),
            {},
            {
              '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active':
                ie({}, Gr({ appearance: t, key: a ? "selected" : "default", mode: n })),
            },
          ),
      ),
      fe("platform-component-visual-refresh") &&
        (a
          ? Gk
          : ie(
              ie(
                ie(
                  ie(
                    ie(
                      ie(
                        ie(ie({}, t === "default" && $k), t === "primary" && Bk),
                        t === "link" && Fk,
                      ),
                      t === "subtle" && zk,
                    ),
                    t === "subtle-link" && qk,
                  ),
                  t === "warning" && Uk,
                ),
                t === "danger" && Vk,
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
  return $t({
    display: "flex",
    margin: t === "none" ? 0 : rh.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function Wk(e) {
  var t = e.spacing;
  return $t({
    margin: t === "none" ? 0 : rh.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function Kk(e) {
  var t = e.hasOverlay;
  return $t({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var Yk = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fc = function (t) {
    return t && b.isValidElement(t) && t.type === oc;
  },
  Jk = [
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
  Xk = { "> *": { pointerEvents: "none" } },
  Zk = $t({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  Qk = $t({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  Id = function (t, r) {
    return !t || fc(t) ? null : r;
  },
  e1 = function (t, r) {
    return fc(t) ? t : t ? Jt("span", { css: r }, t) : null;
  },
  t1 = O.forwardRef(function (t, r) {
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
      E = S === void 0 ? Re : S,
      A = t.onFocus,
      D = t.onMouseDown,
      R = D === void 0 ? Re : D,
      T = t.overlay;
    t.shouldFitContainer;
    var F = t.spacing,
      B = F === void 0 ? "default" : F,
      q = t.tabIndex,
      U = q === void 0 ? 0 : q,
      V = t.type,
      G = V === void 0 ? (d ? void 0 : "button") : V,
      K = t.testId,
      $ = Z(t, Jk),
      j = b.useRef(),
      me = b.useCallback(
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
    Qp(j, s);
    var se = b.useContext(tc),
      le = b.useCallback(
        function (pe, Ne) {
          (se && se.tracePress(g, pe.timeStamp), E(pe, Ne));
        },
        [E, se, g],
      ),
      ve = rn({
        fn: le,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      be = b.useCallback(
        function (pe) {
          (pe.preventDefault(), R(pe));
        },
        [R],
      );
    b.useEffect(
      function () {
        var pe = j.current;
        _ && pe && pe === document.activeElement && pe.blur();
      },
      [_],
    );
    var ue = !!T,
      Te = $t(Kk({ hasOverlay: ue })),
      ke = !_ && !ue,
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
      Jt(
        th,
        null,
        Jt(
          p,
          H(
            {},
            $,
            {
              ref: me,
              className: u,
              css: [c, ke ? null : Xk],
              "data-has-overlay": ue ? !0 : void 0,
              "data-testid": K,
              disabled: _,
              href: ke ? d : void 0,
              onBlur: y,
              onClick: ve,
              onFocus: A,
              onMouseDown: be,
              tabIndex: _ ? -1 : U,
              type: G,
            },
            Dk({ isInteractive: ke }),
          ),
          v ? Jt("span", { css: [Te, Ad({ spacing: B }), Id(l, Zk)] }, v) : null,
          e1(l, [Te, Wk({ spacing: B })]),
          h ? Jt("span", { css: [Te, Ad({ spacing: B }), Id(l, Qk)] }, h) : null,
          T ? Jt("span", { css: [Yk, Me] }, T) : null,
        ),
      )
    );
  });
function r1(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return fc(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var n1 = [
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
  vc = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        o = t.children,
        i = t.iconBefore,
        s = t.iconAfter,
        c = t.isSelected,
        l = c === void 0 ? !1 : c,
        u = t.onMouseDown,
        d = u === void 0 ? Re : u,
        f = t.onMouseUp,
        p = f === void 0 ? Re : f,
        h = t.shouldFitContainer,
        v = h === void 0 ? !1 : h,
        g = t.spacing,
        m = g === void 0 ? "default" : g,
        _ = Z(t, n1),
        w = jw(),
        k = w.mode,
        y = r1({ children: o, iconBefore: i, iconAfter: s }),
        S = b.useState(!1),
        E = X(S, 2),
        A = E[0],
        D = E[1],
        R = b.useCallback(
          function (B) {
            (d(B), jd && D(!0));
          },
          [d, D],
        ),
        T = b.useCallback(
          function (B) {
            (p(B), jd && D(!1));
          },
          [p, D],
        ),
        F = b.useMemo(
          function () {
            return Hk({
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
        t1,
        H({}, _, {
          ref: r,
          appearance: a,
          buttonCss: F,
          children: o,
          "data-firefox-is-active": A ? !0 : void 0,
          iconAfter: s,
          iconBefore: i,
          isSelected: l,
          onMouseDown: R,
          onMouseUp: T,
          spacing: m,
        }),
      );
    }),
  );
vc.displayName = "Button";
function Dd(e) {
  return O.createElement(vc, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function a1(e) {
  return O.createElement(vc, H({}, e, { appearance: "subtle" }));
}
var o1 = { container: "_1e0c1txw _kqswh2mm" };
function i1(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return O.createElement(
    Zo,
    { as: "li", testId: r, key: t, xcss: o1.container, paddingInline: "space.100" },
    O.createElement(
      Dp,
      { testId: r && "".concat(r, "-text") },
      O.createElement(oc, null, "Skipped pages from ", n, " to ", a),
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
function s1(e, t) {
  return !!(e === t || (Md(e) && Md(t)));
}
function c1(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!s1(e[r], t[r])) return !1;
  return !0;
}
function l1(e, t) {
  t === void 0 && (t = c1);
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
var u1 = function (t, r, n, a) {
  var o = n.max,
    i = n.ellipsis,
    s = n.transform,
    c = t.length,
    l = c > o,
    u = l && o - 4 < r,
    d = l && r < c - o + 3,
    f = l1(function () {
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
      Ke(f(0, 1)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: c - p })],
      Ke(f(c - p)),
    );
  }
  if (!u && d) {
    var h = o - 2;
    return [].concat(
      Ke(f(0, h)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: h + 1, to: c - 1 })],
      Ke(f(c - 1)),
    );
  }
  var v = o - 4;
  return [].concat(
    Ke(f(0, 1)),
    [
      i({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(v / 2),
      }),
    ],
    Ke(f(r - Math.floor(v / 2), r + v - 1)),
    [i({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: c - 1 })],
    Ke(f(c - 1)),
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
function d1(e) {
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
var Fs = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  f1 = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.11",
  };
function Ld(e) {
  var t = e.chevronDirection,
    r = t === "left" ? R0 : T0;
  return O.createElement(
    Zo,
    { as: "span", xcss: Fs.navigatorIconWrapper },
    O.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function v1(e, t) {
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
    k = w === void 0 ? Re : w,
    y = e.pages,
    S = e.getPageLabel,
    E = e.renderEllipsis,
    A = E === void 0 ? i1 : E,
    D = e.analyticsContext,
    R = e.testId,
    T = e.isDisabled,
    F = g0(i, function () {
      return o || 0;
    }),
    B = X(F, 2),
    q = B[0],
    U = B[1],
    V = rn(
      d1(
        {
          fn: function ($, j) {
            var me = $.event,
              se = $.selectedPageIndex;
            (i === void 0 && U(se), k && k(me, y[se], j));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: D,
        },
        f1,
      ),
    ),
    G = function ($, j, me) {
      var se = y[q],
        le = "".concat(u, " ").concat(S ? S($, j) : $),
        ve = $ === se;
      return O.createElement(
        so,
        { as: "li", xcss: Fs.paginationMenuItem, key: "page-".concat(S ? S($, j) : j) },
        O.createElement(
          a1,
          {
            component: n.Page,
            onClick: function (ue) {
              return V({ event: ue, selectedPageIndex: j });
            },
            "aria-current": ve ? "page" : void 0,
            "aria-label": le,
            isSelected: ve,
            isDisabled: T,
            page: $,
            testId:
              me &&
              ""
                .concat(me, "--")
                .concat(ve ? "current-" : "", "page-")
                .concat(j),
          },
          S ? S($, j) : $,
        ),
      );
    };
  return O.createElement(
    Zo,
    { testId: R, style: g, ref: t, "aria-label": c, as: "nav" },
    O.createElement(
      so,
      { space: "space.0", alignBlock: "center" },
      O.createElement(Dd, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function ($) {
          return V({ event: $, selectedPageIndex: q - 1 });
        },
        isDisabled: T || q === 0,
        iconBefore: O.createElement(Ld, { chevronDirection: "left" }),
        "aria-label": f,
        testId: R && "".concat(R, "--left-navigator"),
      }),
      O.createElement(
        so,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Fs.paginationMenu },
        u1(y, q, { max: _, ellipsis: A, transform: G }, R),
      ),
      O.createElement(Dd, {
        key: "right-navigator",
        component: n.Next,
        onClick: function ($) {
          return V({ event: $, selectedPageIndex: q + 1 });
        },
        isDisabled: T || q === y.length - 1,
        iconBefore: O.createElement(Ld, { chevronDirection: "right" }),
        "aria-label": h,
        testId: R && "".concat(R, "--right-navigator"),
      }),
    ),
  );
}
var p1 = b.memo(b.forwardRef(v1));
function h1(e, t, r) {
  return (
    (t = Y(t)),
    Ge(e, ah() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function ah() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ah = function () {
    return !!e;
  })();
}
var g1 = (function (e) {
    function t() {
      var r;
      he(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return (
        (r = h1(this, t, [].concat(a))),
        C(r, "onChange", function (i, s, c) {
          r.props.onChange(s, c);
        }),
        r
      );
    }
    return (
      He(t, e),
      ge(t, [
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
              u = Ke(Array(a)).map(function (f, p) {
                return p + 1;
              }),
              d = i - 1;
            return O.createElement(p1, {
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
  b1 = ["isRanking", "testId"],
  m1 = [
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
  y1 = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = Z(t, b1);
    return b.createElement(
      "thead",
      H({ "data-testid": n }, a, { className: P(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  oh = b.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children,
      a = e.isSortable,
      o = e.sortOrder,
      i = e.isFixedSize,
      s = e.shouldTruncate,
      c = e.onClick,
      l = e.style,
      u = e.testId,
      d = Z(e, m1),
      f = ra(
        ra(ra({}, l), r && wp({ width: r })),
        {},
        C({}, Bd, "var(--ds-text-subtlest, ".concat(qu, ")")),
      ),
      p = o === Er,
      h = o === Po,
      v = function () {
        if (p) return "ascending";
        if (h) return "descending";
      },
      g = n ? "th" : "td",
      m = fe("platform-component-visual-refresh");
    return b.createElement(
      g,
      H({ "aria-sort": v(), onClick: m ? void 0 : c, ref: t, "data-testid": u }, d, {
        className: P([
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
            "--_mwqor1": Fe(
              "var(--ds-border-width-selected, 2px)".concat(
                " solid ",
                "var(--ds-border, ".concat(Is, ")"),
              ),
            ),
            "--_17ckjys": Fe("var(--ds-text-subtle, ".concat("var(".concat(Bd, ")"), ")")),
            "--_z3oznn": Fe(
              "solid ".concat(
                "var(--ds-border-width-focused, 2px)",
                " ",
                "var(--ds-border-focused, ".concat(Ao, ")"),
              ),
            ),
            "--_6j4ewu": Fe("var(--ds-background-neutral-hovered, ".concat(js, ")")),
            "--_1rdacuj": Fe("3px solid ".concat("var(--ds-icon-disabled, ".concat(Is, ")"))),
            "--_1qca9zt": Fe("3px solid ".concat("var(--ds-icon-subtle, ".concat(qu, ")"))),
          },
        ),
      }),
      n,
    );
  });
function _1(e, t, r) {
  return (
    (t = Y(t)),
    Ge(e, ih() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function ih() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ih = function () {
    return !!e;
  })();
}
function sh(e) {
  return (function (t) {
    function r() {
      var n;
      he(this, r);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return (
        (n = _1(this, r, [].concat(o))),
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
      He(r, t),
      ge(r, [
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
              H({ refWidth: o, refHeight: i, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(O.Component);
}
var na = {},
  Fd;
function w1() {
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
var k1 = w1();
const O1 = ur(k1);
var aa = {},
  zd;
function S1() {
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
var x1 = S1();
const E1 = ur(x1);
var C1 = "Escape";
function P1(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = b.useRef(!1),
    a = b.useCallback(
      function (i) {
        r || n.current || i.key !== C1 || ((n.current = !0), t(i));
      },
      [t, r],
    ),
    o = b.useCallback(function () {
      n.current = !1;
    }, []);
  b.useEffect(
    function () {
      if (!(r && fe("platform_only_attach_escape_handler_on_view")))
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
var R1 = b.createContext(null),
  A1 = b.createContext(null);
function I1() {
  var e = b.useContext(A1);
  return e;
}
function j1(e) {
  var t = e.isOpen,
    r = e.onClose,
    n = b.useContext(R1),
    a = I1();
  b.useEffect(
    function () {
      if (n !== null && t) return n.onClose(r, { namespace: a });
    },
    [n, t, a, r],
  );
}
var da = { none: 0, small: 100, medium: 350, large: 700 },
  ns = 0.5,
  D1 = { none: da.none, small: da.small * ns, medium: da.medium * ns, large: da.large * ns },
  T1 = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  M1 = function () {
    if (!T1()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  N1 = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  L1 = function () {
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
      }, N1(t)),
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
  ch = { appear: !0, isExiting: !1 },
  lh = b.createContext(ch),
  qd = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ch;
    return O.createElement(lh.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
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
  $1 = function (t, r) {
    for (var n = r.concat([]), a = B1(r), o = 0; o < t.length; o++) {
      var i = t[o],
        s = !a[i.key];
      s && n.splice(o + 1, 0, i);
    }
    return n;
  },
  B1 = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  F1 = function (t, r) {
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
  uh = b.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      o = b.useState([null, n]),
      i = X(o, 2),
      s = i[0],
      c = i[1],
      l = b.useState([]),
      u = X(l, 2),
      d = u[0],
      f = u[1],
      p = b.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      h = X(p, 2),
      v = h[0],
      g = h[1];
    if (
      (b.useEffect(function () {
        v.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      typeof s == "boolean")
    )
      return n;
    var m = X(s, 2),
      _ = m[0],
      w = m[1],
      k = Ud(_),
      y = Ud(w);
    w !== n && c([w, n]);
    var S = F1(y, k),
      E = !!S.size,
      A = y;
    if ((E && (A = $1(y, k)), a))
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
            var T = S.has(R.key);
            return qd(R, {
              appear: !0,
              isExiting: T,
              onFinish: T
                ? function () {
                    (S.delete(R.key), S.size === 0 && (c([null, n]), f([])));
                  }
                : void 0,
            });
          }))
        : (A = A.map(function (R) {
            return qd(R, v);
          })),
      A
    );
  }),
  z1 = function () {
    return b.useContext(lh);
  };
uh.displayName = "ExitingPersistence";
function q1() {
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
var U1 = b.createContext(function () {
    return { isReady: !0, delay: 0, ref: Re };
  }),
  V1 = function () {
    var t = q1(),
      r = b.useContext(U1);
    return r(t);
  },
  G1 = function (t) {
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
      p = V1(),
      h = z1(),
      v = h.isExiting,
      g = h.onFinish,
      m = h.appear,
      _ = L1(),
      w = l || !p.isReady,
      k = v ? 0 : p.delay,
      y = v ? "exiting" : "entering",
      S = b.useState(m),
      E = X(S, 2),
      A = E[0],
      D = E[1];
    return (
      b.useEffect(
        function () {
          var R = !1;
          if (!w) {
            if (!m) {
              u && u(y);
              return;
            }
            var T = function () {
              (y === "exiting" && g?.(), R || D(!1), u?.(y));
            };
            if (M1()) {
              T();
              return;
            }
            return (
              D(!0),
              _(T, v ? D1[f] : da[f] + k),
              function () {
                R = !0;
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
                ((!v && i === "fade-in") || (v && c === "fade-in")) && P(["_j7hq1cgr"]),
                ((!v && i === "fade-out") || (v && c === "fade-out")) && P(["_j7hq1lln"]),
                ((!v && i === "zoom-in") || (v && c === "zoom-in")) && P(["_j7hqe8p0"]),
                ((!v && i === "zoom-out") || (v && c === "zoom-out")) && P(["_j7hqy6ql"]),
                ((!v && i === "slide-in-from-top") || (v && c === "slide-in-from-top")) &&
                  P(["_j7hqqshu"]),
                ((!v && i === "slide-out-from-top") || (v && c === "slide-out-from-top")) &&
                  P(["_j7hq7ri4"]),
                ((!v && i === "slide-in-from-right") || (v && c === "slide-in-from-right")) &&
                  P(["_j7hqdfjr"]),
                ((!v && i === "slide-out-from-right") || (v && c === "slide-out-from-right")) &&
                  P(["_j7hqonfj"]),
                ((!v && i === "slide-in-from-bottom") || (v && c === "slide-in-from-bottom")) &&
                  P(["_j7hq1liq"]),
                ((!v && i === "slide-out-from-bottom") || (v && c === "slide-out-from-bottom")) &&
                  P(["_j7hqhnf1"]),
                ((!v && i === "slide-in-from-left") || (v && c === "slide-in-from-left")) &&
                  P(["_j7hq1bh1"]),
                ((!v && i === "slide-out-from-left") || (v && c === "slide-out-from-left")) &&
                  P(["_j7hqj08w"]),
                ((!v && i === "fade-in-from-top") || (v && c === "fade-in-from-top")) &&
                  P(["_j7hq2iua"]),
                ((!v && i === "fade-out-from-top") || (v && c === "fade-out-from-top")) &&
                  P(["_j7hq39va"]),
                ((!v && i === "fade-in-from-left") || (v && c === "fade-in-from-left")) &&
                  P(["_j7hq15m2"]),
                ((!v && i === "fade-out-from-left") || (v && c === "fade-out-from-left")) &&
                  P(["_j7hq1yiv"]),
                ((!v && i === "fade-in-from-bottom") || (v && c === "fade-in-from-bottom")) &&
                  P(["_j7hq1w00"]),
                ((!v && i === "fade-out-from-bottom") || (v && c === "fade-out-from-bottom")) &&
                  P(["_j7hqzy3z"]),
                ((!v && i === "fade-in-from-right") || (v && c === "fade-in-from-right")) &&
                  P(["_j7hqpqak"]),
                ((!v && i === "fade-out-from-right") || (v && c === "fade-out-from-right")) &&
                  P(["_j7hq1ebg"]),
                ((!v && i === "fade-in-from-top-constant") ||
                  (v && c === "fade-in-from-top-constant")) &&
                  P(["_j7hqm2e2"]),
                ((!v && i === "fade-out-from-top-constant") ||
                  (v && c === "fade-out-from-top-constant")) &&
                  P(["_j7hq97jn"]),
                ((!v && i === "fade-in-from-left-constant") ||
                  (v && c === "fade-in-from-left-constant")) &&
                  P(["_j7hqovgq"]),
                ((!v && i === "fade-out-from-left-constant") ||
                  (v && c === "fade-out-from-left-constant")) &&
                  P(["_j7hq15do"]),
                ((!v && i === "fade-in-from-bottom-constant") ||
                  (v && c === "fade-in-from-bottom-constant")) &&
                  P(["_j7hq797a"]),
                ((!v && i === "fade-out-from-bottom-constant") ||
                  (v && c === "fade-out-from-bottom-constant")) &&
                  P(["_j7hqwo7r"]),
                ((!v && i === "fade-in-from-right-constant") ||
                  (v && c === "fade-in-from-right-constant")) &&
                  P(["_j7hqt8u5"]),
                ((!v && i === "fade-out-from-right-constant") ||
                  (v && c === "fade-out-from-right-constant")) &&
                  P(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(k, "ms") },
        },
        y,
      )
    );
  },
  H1 = { top: "bottom", bottom: "top", left: "right", right: "left" },
  W1 = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      o = t.entranceDirection,
      i = t.exitDirection,
      s = t.distance,
      c = s === void 0 ? "proportional" : s,
      l = t.onFinish,
      u = t.isPaused,
      d = o !== void 0 ? H1[o] : void 0,
      f =
        i || d
          ? "fade-out-from-".concat(i || d).concat(c === "proportional" ? "" : "-constant")
          : "fade-out";
    return O.createElement(
      G1,
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
  K1 = b.createContext();
b.createContext();
var Y1 = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  J1 = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  X1 = function (t, r) {
    if (typeof t == "function") return J1(t, r);
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
  ze = "top",
  dt = "bottom",
  ft = "right",
  qe = "left",
  pc = "auto",
  Ba = [ze, dt, ft, qe],
  on = "start",
  Aa = "end",
  Z1 = "clippingParents",
  dh = "viewport",
  ia = "popper",
  Q1 = "reference",
  Hd = Ba.reduce(function (e, t) {
    return e.concat([t + "-" + on, t + "-" + Aa]);
  }, []),
  fh = [].concat(Ba, [pc]).reduce(function (e, t) {
    return e.concat([t, t + "-" + on, t + "-" + Aa]);
  }, []),
  eO = "beforeRead",
  tO = "read",
  rO = "afterRead",
  nO = "beforeMain",
  aO = "main",
  oO = "afterMain",
  iO = "beforeWrite",
  sO = "write",
  cO = "afterWrite",
  lO = [eO, tO, rO, nO, aO, oO, iO, sO, cO];
function Lt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ze(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Cr(e) {
  var t = Ze(e).Element;
  return e instanceof t || e instanceof Element;
}
function ut(e) {
  var t = Ze(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function hc(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Ze(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function uO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      o = t.elements[r];
    !ut(o) ||
      !Lt(o) ||
      (Object.assign(o.style, n),
      Object.keys(a).forEach(function (i) {
        var s = a[i];
        s === !1 ? o.removeAttribute(i) : o.setAttribute(i, s === !0 ? "" : s);
      }));
  });
}
function dO(e) {
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
        !ut(a) ||
          !Lt(a) ||
          (Object.assign(a.style, s),
          Object.keys(o).forEach(function (c) {
            a.removeAttribute(c);
          }));
      });
    }
  );
}
const fO = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: uO,
  effect: dO,
  requires: ["computeStyles"],
};
function Mt(e) {
  return e.split("-")[0];
}
var wr = Math.max,
  Do = Math.min,
  sn = Math.round;
function zs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function vh() {
  return !/^((?!chrome|android).)*safari/i.test(zs());
}
function cn(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    o = 1;
  t &&
    ut(e) &&
    ((a = (e.offsetWidth > 0 && sn(n.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && sn(n.height) / e.offsetHeight) || 1));
  var i = Cr(e) ? Ze(e) : window,
    s = i.visualViewport,
    c = !vh() && r,
    l = (n.left + (c && s ? s.offsetLeft : 0)) / a,
    u = (n.top + (c && s ? s.offsetTop : 0)) / o,
    d = n.width / a,
    f = n.height / o;
  return { width: d, height: f, top: u, right: l + d, bottom: u + f, left: l, x: l, y: u };
}
function gc(e) {
  var t = cn(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function ph(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && hc(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Qt(e) {
  return Ze(e).getComputedStyle(e);
}
function vO(e) {
  return ["table", "td", "th"].indexOf(Lt(e)) >= 0;
}
function fr(e) {
  return ((Cr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ni(e) {
  return Lt(e) === "html" ? e : e.assignedSlot || e.parentNode || (hc(e) ? e.host : null) || fr(e);
}
function Wd(e) {
  return !ut(e) || Qt(e).position === "fixed" ? null : e.offsetParent;
}
function pO(e) {
  var t = /firefox/i.test(zs()),
    r = /Trident/i.test(zs());
  if (r && ut(e)) {
    var n = Qt(e);
    if (n.position === "fixed") return null;
  }
  var a = ni(e);
  for (hc(a) && (a = a.host); ut(a) && ["html", "body"].indexOf(Lt(a)) < 0; ) {
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
function Fa(e) {
  for (var t = Ze(e), r = Wd(e); r && vO(r) && Qt(r).position === "static"; ) r = Wd(r);
  return r && (Lt(r) === "html" || (Lt(r) === "body" && Qt(r).position === "static"))
    ? t
    : r || pO(e) || t;
}
function bc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ba(e, t, r) {
  return wr(e, Do(t, r));
}
function hO(e, t, r) {
  var n = ba(e, t, r);
  return n > r ? r : n;
}
function hh() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function gh(e) {
  return Object.assign({}, hh(), e);
}
function bh(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var gO = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    gh(typeof t != "number" ? t : bh(t, Ba))
  );
};
function bO(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    o = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    s = Mt(r.placement),
    c = bc(s),
    l = [qe, ft].indexOf(s) >= 0,
    u = l ? "height" : "width";
  if (!(!o || !i)) {
    var d = gO(a.padding, r),
      f = gc(o),
      p = c === "y" ? ze : qe,
      h = c === "y" ? dt : ft,
      v = r.rects.reference[u] + r.rects.reference[c] - i[c] - r.rects.popper[u],
      g = i[c] - r.rects.reference[c],
      m = Fa(o),
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
function mO(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (ph(t.elements.popper, a) && (t.elements.arrow = a)));
}
const yO = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: bO,
  effect: mO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function ln(e) {
  return e.split("-")[1];
}
var _O = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function wO(e, t) {
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
    w = qe,
    k = ze,
    y = window;
  if (l) {
    var S = Fa(r),
      E = "clientHeight",
      A = "clientWidth";
    if (
      (S === Ze(r) &&
        ((S = fr(r)),
        Qt(S).position !== "static" &&
          s === "absolute" &&
          ((E = "scrollHeight"), (A = "scrollWidth"))),
      (S = S),
      a === ze || ((a === qe || a === ft) && o === Aa))
    ) {
      k = dt;
      var D = d && S === y && y.visualViewport ? y.visualViewport.height : S[E];
      ((v -= D - n.height), (v *= c ? 1 : -1));
    }
    if (a === qe || ((a === ze || a === dt) && o === Aa)) {
      w = ft;
      var R = d && S === y && y.visualViewport ? y.visualViewport.width : S[A];
      ((p -= R - n.width), (p *= c ? 1 : -1));
    }
  }
  var T = Object.assign({ position: s }, l && _O),
    F = u === !0 ? wO({ x: p, y: v }, Ze(r)) : { x: p, y: v };
  if (((p = F.x), (v = F.y), c)) {
    var B;
    return Object.assign(
      {},
      T,
      ((B = {}),
      (B[k] = _ ? "0" : ""),
      (B[w] = m ? "0" : ""),
      (B.transform =
        (y.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + v + "px)"
          : "translate3d(" + p + "px, " + v + "px, 0)"),
      B),
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}), (t[k] = _ ? v + "px" : ""), (t[w] = m ? p + "px" : ""), (t.transform = ""), t),
  );
}
function kO(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    o = r.adaptive,
    i = o === void 0 ? !0 : o,
    s = r.roundOffsets,
    c = s === void 0 ? !0 : s,
    l = {
      placement: Mt(t.placement),
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
const OO = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: kO, data: {} };
var Za = { passive: !0 };
function SO(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    o = a === void 0 ? !0 : a,
    i = n.resize,
    s = i === void 0 ? !0 : i,
    c = Ze(t.elements.popper),
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
const xO = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: SO,
  data: {},
};
var EO = { left: "right", right: "left", bottom: "top", top: "bottom" };
function vo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return EO[t];
  });
}
var CO = { start: "end", end: "start" };
function Yd(e) {
  return e.replace(/start|end/g, function (t) {
    return CO[t];
  });
}
function mc(e) {
  var t = Ze(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function yc(e) {
  return cn(fr(e)).left + mc(e).scrollLeft;
}
function PO(e, t) {
  var r = Ze(e),
    n = fr(e),
    a = r.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    s = 0,
    c = 0;
  if (a) {
    ((o = a.width), (i = a.height));
    var l = vh();
    (l || (!l && t === "fixed")) && ((s = a.offsetLeft), (c = a.offsetTop));
  }
  return { width: o, height: i, x: s + yc(e), y: c };
}
function RO(e) {
  var t,
    r = fr(e),
    n = mc(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = wr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    i = wr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    s = -n.scrollLeft + yc(e),
    c = -n.scrollTop;
  return (
    Qt(a || r).direction === "rtl" && (s += wr(r.clientWidth, a ? a.clientWidth : 0) - o),
    { width: o, height: i, x: s, y: c }
  );
}
function _c(e) {
  var t = Qt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function mh(e) {
  return ["html", "body", "#document"].indexOf(Lt(e)) >= 0
    ? e.ownerDocument.body
    : ut(e) && _c(e)
      ? e
      : mh(ni(e));
}
function ma(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = mh(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = Ze(n),
    i = a ? [o].concat(o.visualViewport || [], _c(n) ? n : []) : n,
    s = t.concat(i);
  return a ? s : s.concat(ma(ni(i)));
}
function qs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function AO(e, t) {
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
  return t === dh ? qs(PO(e, r)) : Cr(t) ? AO(t, r) : qs(RO(fr(e)));
}
function IO(e) {
  var t = ma(ni(e)),
    r = ["absolute", "fixed"].indexOf(Qt(e).position) >= 0,
    n = r && ut(e) ? Fa(e) : e;
  return Cr(n)
    ? t.filter(function (a) {
        return Cr(a) && ph(a, n) && Lt(a) !== "body";
      })
    : [];
}
function jO(e, t, r, n) {
  var a = t === "clippingParents" ? IO(e) : [].concat(t),
    o = [].concat(a, [r]),
    i = o[0],
    s = o.reduce(
      function (c, l) {
        var u = Jd(e, l, n);
        return (
          (c.top = wr(u.top, c.top)),
          (c.right = Do(u.right, c.right)),
          (c.bottom = Do(u.bottom, c.bottom)),
          (c.left = wr(u.left, c.left)),
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
function yh(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? Mt(n) : null,
    o = n ? ln(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    c;
  switch (a) {
    case ze:
      c = { x: i, y: t.y - r.height };
      break;
    case dt:
      c = { x: i, y: t.y + t.height };
      break;
    case ft:
      c = { x: t.x + t.width, y: s };
      break;
    case qe:
      c = { x: t.x - r.width, y: s };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var l = a ? bc(a) : null;
  if (l != null) {
    var u = l === "y" ? "height" : "width";
    switch (o) {
      case on:
        c[l] = c[l] - (t[u] / 2 - r[u] / 2);
        break;
      case Aa:
        c[l] = c[l] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return c;
}
function Ia(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    o = r.strategy,
    i = o === void 0 ? e.strategy : o,
    s = r.boundary,
    c = s === void 0 ? Z1 : s,
    l = r.rootBoundary,
    u = l === void 0 ? dh : l,
    d = r.elementContext,
    f = d === void 0 ? ia : d,
    p = r.altBoundary,
    h = p === void 0 ? !1 : p,
    v = r.padding,
    g = v === void 0 ? 0 : v,
    m = gh(typeof g != "number" ? g : bh(g, Ba)),
    _ = f === ia ? Q1 : ia,
    w = e.rects.popper,
    k = e.elements[h ? _ : f],
    y = jO(Cr(k) ? k : k.contextElement || fr(e.elements.popper), c, u, i),
    S = cn(e.elements.reference),
    E = yh({ reference: S, element: w, placement: a }),
    A = qs(Object.assign({}, w, E)),
    D = f === ia ? A : S,
    R = {
      top: y.top - D.top + m.top,
      bottom: D.bottom - y.bottom + m.bottom,
      left: y.left - D.left + m.left,
      right: D.right - y.right + m.right,
    },
    T = e.modifiersData.offset;
  if (f === ia && T) {
    var F = T[a];
    Object.keys(R).forEach(function (B) {
      var q = [ft, dt].indexOf(B) >= 0 ? 1 : -1,
        U = [ze, dt].indexOf(B) >= 0 ? "y" : "x";
      R[B] += F[U] * q;
    });
  }
  return R;
}
function DO(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    o = r.rootBoundary,
    i = r.padding,
    s = r.flipVariations,
    c = r.allowedAutoPlacements,
    l = c === void 0 ? fh : c,
    u = ln(n),
    d = u
      ? s
        ? Hd
        : Hd.filter(function (h) {
            return ln(h) === u;
          })
      : Ba,
    f = d.filter(function (h) {
      return l.indexOf(h) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (h, v) {
    return ((h[v] = Ia(e, { placement: v, boundary: a, rootBoundary: o, padding: i })[Mt(v)]), h);
  }, {});
  return Object.keys(p).sort(function (h, v) {
    return p[h] - p[v];
  });
}
function TO(e) {
  if (Mt(e) === pc) return [];
  var t = vo(e);
  return [Yd(e), t, Yd(t)];
}
function MO(e) {
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
        m = Mt(g),
        _ = m === g,
        w = c || (_ || !h ? [vo(g)] : TO(g)),
        k = [g].concat(w).reduce(function (ve, be) {
          return ve.concat(
            Mt(be) === pc
              ? DO(t, {
                  placement: be,
                  boundary: u,
                  rootBoundary: d,
                  padding: l,
                  flipVariations: h,
                  allowedAutoPlacements: v,
                })
              : be,
          );
        }, []),
        y = t.rects.reference,
        S = t.rects.popper,
        E = new Map(),
        A = !0,
        D = k[0],
        R = 0;
      R < k.length;
      R++
    ) {
      var T = k[R],
        F = Mt(T),
        B = ln(T) === on,
        q = [ze, dt].indexOf(F) >= 0,
        U = q ? "width" : "height",
        V = Ia(t, { placement: T, boundary: u, rootBoundary: d, altBoundary: f, padding: l }),
        G = q ? (B ? ft : qe) : B ? dt : ze;
      y[U] > S[U] && (G = vo(G));
      var K = vo(G),
        $ = [];
      if (
        (o && $.push(V[F] <= 0),
        s && $.push(V[G] <= 0, V[K] <= 0),
        $.every(function (ve) {
          return ve;
        }))
      ) {
        ((D = T), (A = !1));
        break;
      }
      E.set(T, $);
    }
    if (A)
      for (
        var j = h ? 3 : 1,
          me = function (be) {
            var ue = k.find(function (Te) {
              var ke = E.get(Te);
              if (ke)
                return ke.slice(0, be).every(function (Me) {
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
const NO = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: MO,
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
  return [ze, ft, dt, qe].some(function (t) {
    return e[t] >= 0;
  });
}
function LO(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    i = Ia(t, { elementContext: "reference" }),
    s = Ia(t, { altBoundary: !0 }),
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
const $O = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: LO,
};
function BO(e, t, r) {
  var n = Mt(e),
    a = [qe, ze].indexOf(n) >= 0 ? -1 : 1,
    o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = o[0],
    s = o[1];
  return (
    (i = i || 0),
    (s = (s || 0) * a),
    [qe, ft].indexOf(n) >= 0 ? { x: s, y: i } : { x: i, y: s }
  );
}
function FO(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    o = a === void 0 ? [0, 0] : a,
    i = fh.reduce(function (u, d) {
      return ((u[d] = BO(d, t.rects, o)), u);
    }, {}),
    s = i[t.placement],
    c = s.x,
    l = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += l)),
    (t.modifiersData[n] = i));
}
const zO = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: FO };
function qO(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = yh({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const UO = { name: "popperOffsets", enabled: !0, phase: "read", fn: qO, data: {} };
function VO(e) {
  return e === "x" ? "y" : "x";
}
function GO(e) {
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
    g = Ia(t, { boundary: c, rootBoundary: l, padding: d, altBoundary: u }),
    m = Mt(t.placement),
    _ = ln(t.placement),
    w = !_,
    k = bc(m),
    y = VO(k),
    S = t.modifiersData.popperOffsets,
    E = t.rects.reference,
    A = t.rects.popper,
    D = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v,
    R =
      typeof D == "number"
        ? { mainAxis: D, altAxis: D }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
    T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    F = { x: 0, y: 0 };
  if (S) {
    if (o) {
      var B,
        q = k === "y" ? ze : qe,
        U = k === "y" ? dt : ft,
        V = k === "y" ? "height" : "width",
        G = S[k],
        K = G + g[q],
        $ = G - g[U],
        j = p ? -A[V] / 2 : 0,
        me = _ === on ? E[V] : A[V],
        se = _ === on ? -A[V] : -E[V],
        le = t.elements.arrow,
        ve = p && le ? gc(le) : { width: 0, height: 0 },
        be = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : hh(),
        ue = be[q],
        Te = be[U],
        ke = ba(0, E[V], ve[V]),
        Me = w ? E[V] / 2 - j - ke - ue - R.mainAxis : me - ke - ue - R.mainAxis,
        pe = w ? -E[V] / 2 + j + ke + Te + R.mainAxis : se + ke + Te + R.mainAxis,
        Ne = t.elements.arrow && Fa(t.elements.arrow),
        tr = Ne ? (k === "y" ? Ne.clientTop || 0 : Ne.clientLeft || 0) : 0,
        vt = (B = T?.[k]) != null ? B : 0,
        Ee = G + Me - vt - tr,
        Ce = G + pe - vt,
        St = ba(p ? Do(K, Ee) : K, G, p ? wr($, Ce) : $);
      ((S[k] = St), (F[k] = St - G));
    }
    if (s) {
      var et,
        We = k === "x" ? ze : qe,
        Le = k === "x" ? dt : ft,
        Ie = S[y],
        re = y === "y" ? "height" : "width",
        Oe = Ie + g[We],
        je = Ie - g[Le],
        xt = [ze, qe].indexOf(m) !== -1,
        jr = (et = T?.[y]) != null ? et : 0,
        de = xt ? Oe : Ie - E[re] - A[re] - jr + R.altAxis,
        rr = xt ? Ie + E[re] + A[re] - jr - R.altAxis : je,
        tt = p && xt ? hO(de, Ie, rr) : ba(p ? de : Oe, Ie, p ? rr : je);
      ((S[y] = tt), (F[y] = tt - Ie));
    }
    t.modifiersData[n] = F;
  }
}
const HO = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: GO,
  requiresIfExists: ["offset"],
};
function WO(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function KO(e) {
  return e === Ze(e) || !ut(e) ? mc(e) : WO(e);
}
function YO(e) {
  var t = e.getBoundingClientRect(),
    r = sn(t.width) / e.offsetWidth || 1,
    n = sn(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function JO(e, t, r) {
  r === void 0 && (r = !1);
  var n = ut(t),
    a = ut(t) && YO(t),
    o = fr(t),
    i = cn(e, a, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Lt(t) !== "body" || _c(o)) && (s = KO(t)),
      ut(t) ? ((c = cn(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop)) : o && (c.x = yc(o))),
    {
      x: i.left + s.scrollLeft - c.x,
      y: i.top + s.scrollTop - c.y,
      width: i.width,
      height: i.height,
    }
  );
}
function XO(e) {
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
function ZO(e) {
  var t = XO(e);
  return lO.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function QO(e) {
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
function eS(e) {
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
function tS(e) {
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
              reference: Cr(s) ? ma(s) : s.contextElement ? ma(s.contextElement) : [],
              popper: ma(c),
            }));
          var w = ZO(eS([].concat(n, u.options.modifiers)));
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
                reference: JO(_, Fa(w), u.options.strategy === "fixed"),
                popper: gc(w),
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
        update: QO(function () {
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
var rS = [xO, UO, OO, fO, zO, NO, HO, yO, $O],
  nS = tS({ defaultModifiers: rS }),
  as,
  tf;
function aS() {
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
var oS = aS();
const iS = ur(oS);
var sS = [],
  cS = function (t, r, n) {
    n === void 0 && (n = {});
    var a = b.useRef(null),
      o = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || sS,
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
          return iS(a.current, f) ? a.current || f : ((a.current = f), f);
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
            var f = n.createPopper || nS,
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
  lS = function () {},
  uS = function () {
    return Promise.resolve(null);
  },
  dS = [];
function fS(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    o = e.modifiers,
    i = o === void 0 ? dS : o,
    s = e.referenceElement,
    c = e.onFirstUpdate,
    l = e.innerRef,
    u = e.children,
    d = b.useContext(K1),
    f = b.useState(null),
    p = f[0],
    h = f[1],
    v = b.useState(null),
    g = v[0],
    m = v[1];
  b.useEffect(
    function () {
      X1(l, p);
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
    w = cS(s || d, p, _),
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
          forceUpdate: S || lS,
          update: E || uS,
        };
      },
      [h, m, r, k, y, E, S],
    );
  return Y1(u)(A);
}
function vS(e) {
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
            h = X(p, 1),
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
var Us = 5,
  pS = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: Us,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function hS() {
  return null;
}
var gS = [0, 8];
function bS(e) {
  var t = e.children,
    r = t === void 0 ? hS : t,
    n = e.offset,
    a = n === void 0 ? gS : n,
    o = e.placement,
    i = o === void 0 ? "bottom-start" : o,
    s = e.referenceElement,
    c = s === void 0 ? void 0 : s,
    l = e.modifiers,
    u = e.strategy,
    d = u === void 0 ? "fixed" : u,
    f = e.shouldFitViewport,
    p = f === void 0 ? !1 : f,
    h = X(a, 2),
    v = h[0],
    g = h[1],
    m = b.useMemo(
      function () {
        var w = {
            name: "preventOverflow",
            options: { padding: Us, rootBoundary: p ? "viewport" : "document" },
          },
          k = { name: "offset", options: { offset: [v, g] } },
          y = p ? vS({ viewportPadding: Us }) : [];
        return [].concat(pS, [w, k], Ke(y));
      },
      [v, g, p],
    ),
    _ = b.useMemo(
      function () {
        return l == null ? m : [].concat(Ke(m), Ke(l));
      },
      [m, l],
    );
  return O.createElement(fS, { modifiers: _, placement: i, strategy: d, referenceElement: c }, r);
}
var _h = "atlaskit-portal-container",
  wh = "body > .atlaskit-portal-container",
  kh = "atlaskit-portal",
  mS = function (t) {
    var r = document.createElement("div");
    return ((r.className = kh), (r.style.zIndex = "".concat(t)), r);
  },
  Oh = function () {
    return document.body;
  },
  Sh = function () {
    var t = document.querySelector(wh);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = _h),
        (n.style.display = "flex"),
        (r = Oh()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  yS = function (t) {
    Sh().removeChild(t);
  },
  _S = function (t) {
    t.parentElement || Sh().appendChild(t);
  },
  xh = function () {
    return document !== void 0;
  },
  wS = function (t) {
    if (xh()) {
      var r = document.createElement("div");
      return ((r.className = kh), (r.style.zIndex = "".concat(t)), r);
    }
  },
  kS = function () {
    if (xh()) {
      var t = document.querySelector(wh);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = _h),
          (n.style.display = "flex"),
          (r = Oh()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function OS(e) {
  var t = e.zIndex,
    r = e.children,
    n = b.useMemo(
      function () {
        return mS(t);
      },
      [t],
    );
  return (
    _S(n),
    b.useEffect(
      function () {
        return function () {
          yS(n);
        };
      },
      [n],
    ),
    To.createPortal(r, n)
  );
}
var Eh = typeof window < "u" ? b.useLayoutEffect : b.useEffect;
function SS(e) {
  var t = e.zIndex,
    r = e.children,
    n = b.useState(null),
    a = X(n, 2),
    o = a[0],
    i = a[1];
  Eh(
    function () {
      var c = wS(t);
      i(c);
      var l = kS();
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
var xS = function (t) {
    var r = b.useState(!1),
      n = X(r, 2),
      a = n[0],
      o = n[1],
      i = b.useState(function () {
        return t === "layoutEffect" ? Eh : b.useEffect;
      }),
      s = X(i, 1),
      c = s[0];
    return (
      c(function () {
        o(!0);
      }, []),
      a
    );
  },
  ES = "akPortalMount",
  CS = "akPortalUnmount",
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
  PS = function (t) {
    return rf.hasOwnProperty(t) ? rf[t] : null;
  },
  RS = function (t, r) {
    var n = { layer: PS(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function nf(e, t) {
  var r = RS(e, t);
  window.dispatchEvent(r);
}
var AS = function (t) {
  var r = Number(t);
  b.useEffect(
    function () {
      return (
        nf(ES, r),
        function () {
          nf(CS, r);
        }
      );
    },
    [r],
  );
};
function IS(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    o = a === void 0 ? "effect" : a,
    i = xS(o);
  return (
    AS(r),
    fe("platform_design_system_team_portal_logic_r18_fix")
      ? O.createElement(SS, { zIndex: r }, n)
      : i
        ? O.createElement(OS, { zIndex: r }, n)
        : null
  );
}
var ya = new Set(),
  ja = null;
function af() {
  if (!ja) {
    ja = Qo.bindAll(window, [
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
  ((e = ja) === null || e === void 0 || e(), (ja = null));
  var t = Array.from(ya);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function jS() {
  return Qo.bindAll(window, [
    { type: "dragstart", listener: af },
    { type: "dragenter", listener: af },
  ]);
}
var Qa = null;
function DS(e) {
  return (
    Qa || (Qa = jS()),
    ya.add(e),
    e.onRegister({ isDragging: ja !== null }),
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
function TS(e) {
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
function MS(e, t) {
  var r = Cw();
  return t ? "".concat(r(e)) : void 0;
}
var sf = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81u0j _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d7jlr _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7",
  },
  NS = function (t) {
    var r = t.shortcut;
    return b.createElement(
      "div",
      { className: P([sf.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return b.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: P([sf.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  Ch = b.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      o = t.children,
      i = t.placement,
      s = t.testId,
      c = t.onMouseOut,
      l = t.onMouseOver,
      u = t.id,
      d = t.shortcut;
    return b.createElement(
      "div",
      { ref: r, style: n, "data-testid": s ? "".concat(s, "--wrapper") : void 0 },
      b.createElement(
        "div",
        {
          role: "tooltip",
          className: P(["_80om73ad", a]),
          onMouseOut: c,
          onMouseOver: l,
          "data-placement": i,
          "data-testid": s,
          id: u,
        },
        o,
        d && fe("platform-dst-tooltip-shortcuts") && b.createElement(NS, { shortcut: d }),
      ),
    );
  });
Ch.displayName = "TooltipPrimitive";
var is = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _85i5v77o _1q51v77o _y4ti12x7 _bozg12x7 _slp31hna",
    baseRefreshedPadding: "_1q511b66 _85i51b66",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  Ph = b.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      o = t.children,
      i = t.truncate,
      s = t.placement,
      c = t.testId,
      l = t.onMouseOut,
      u = t.onMouseOver,
      d = t.id,
      f = t.shortcut;
    return b.createElement(
      Ch,
      {
        ref: r,
        style: n,
        className: P([
          is.base,
          fe("platform-dst-tooltip-shortcuts") && is.baseRefreshedPadding,
          i && is.truncate,
          a,
        ]),
        placement: s,
        testId: c,
        id: d,
        onMouseOut: l,
        onMouseOver: u,
        shortcut: f,
      },
      o,
    );
  });
Ph.displayName = "TooltipContainer";
function cf(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
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
function Hr(e) {
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
var LS = Pw.tooltip(),
  uf = {
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
    u = l === void 0 ? Ph : l,
    d = e.tag,
    f = d === void 0 ? "div" : d,
    p = e.testId,
    h = e.delay,
    v = h === void 0 ? 300 : h,
    g = e.onShow,
    m = g === void 0 ? Re : g,
    _ = e.onHide,
    w = _ === void 0 ? Re : _,
    k = e.canAppear,
    y = e.hideTooltipOnClick,
    S = y === void 0 ? !1 : y,
    E = e.hideTooltipOnMouseDown,
    A = E === void 0 ? !1 : E,
    D = e.analyticsContext,
    R = e.strategy,
    T = R === void 0 ? "fixed" : R,
    F = e.ignoreTooltipPointerEvents,
    B = F === void 0 ? !1 : F,
    q = e.isScreenReaderAnnouncementDisabled,
    U = q === void 0 ? !1 : q,
    V = e.shortcut,
    G = n === "mouse" ? o : n,
    K = Mu(Hr({ fn: m, action: "displayed", analyticsData: D }, uf)),
    $ = Mu(Hr({ fn: w, action: "hidden", analyticsData: D }, uf)),
    j = b.useRef(null),
    me = b.useState("hide"),
    se = X(me, 2),
    le = se[0],
    ve = se[1],
    be = b.useRef(null),
    ue = b.useRef(null),
    Te = function (oe) {
      ((ue.current = oe), (be.current = oe ? oe.firstElementChild : null));
    },
    ke = b.useCallback(function (N) {
      be.current = N;
    }, []),
    Me = oa(le),
    pe = oa(K),
    Ne = oa($),
    tr = oa(v),
    vt = oa(k),
    Ee = b.useRef(!1),
    Ce = b.useCallback(function (N) {
      ((j.current = N), (Ee.current = !1));
    }, []),
    St = b.useCallback(
      function () {
        j.current &&
          (Ee.current && Ne.current(), (j.current = null), (Ee.current = !1), ve("hide"));
      },
      [Ne],
    ),
    et = b.useCallback(
      function () {
        j.current && (j.current.abort(), Ee.current && Ne.current(), (j.current = null));
      },
      [Ne],
    );
  b.useEffect(
    function () {
      return function () {
        j.current && et();
      };
    },
    [et],
  );
  var We = b.useRef(!1);
  b.useEffect(function () {
    return DS({
      onRegister: function (oe) {
        var Ft = oe.isDragging;
        We.current = Ft;
      },
      onDragStart: function () {
        var oe;
        ((oe = j.current) === null || oe === void 0 || oe.requestHide({ isImmediate: !0 }),
          (We.current = !0));
      },
      onDragEnd: function () {
        We.current = !1;
      },
    });
  }, []);
  var Le = b.useCallback(
      function (N) {
        var oe;
        if (!We.current) {
          if ((j.current && !j.current.isActive() && et(), j.current && j.current.isActive())) {
            j.current.keep();
            return;
          }
          if (!(vt.current && !((oe = vt.current) !== null && oe !== void 0 && oe.call(vt)))) {
            var Ft = {
                source: N,
                delay: tr.current,
                show: function (Dr) {
                  var hn = Dr.isImmediate;
                  (Ee.current || ((Ee.current = !0), pe.current()),
                    ve(hn ? "show-immediate" : "fade-in"));
                },
                hide: function (Dr) {
                  var hn = Dr.isImmediate;
                  ve(hn ? "hide" : "before-fade-out");
                },
                done: St,
              },
              oi = TS(Ft);
            Ce(oi);
          }
        }
      },
      [vt, tr, St, Ce, et, pe],
    ),
    Ie = b.useCallback(
      function () {
        var N;
        (N = j.current) === null || N === void 0 || N.requestHide({ isImmediate: !0 });
      },
      [j],
    );
  (P1({ onClose: Ie, isDisabled: le === "hide" || le === "fade-out" }),
    b.useEffect(
      function () {
        if (le === "hide") return Re;
        le === "before-fade-out" && ve("fade-out");
        var N = Qo.bind(window, {
          type: "scroll",
          listener: function () {
            j.current && j.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return N;
      },
      [le],
    ));
  var re = b.useCallback(
      function () {
        A && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [A],
    ),
    Oe = b.useCallback(
      function () {
        S && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    je = b.useCallback(
      function (N) {
        if (!(ue.current && N.target === ue.current) && !N.defaultPrevented) {
          N.preventDefault();
          var oe =
            n === "mouse"
              ? { type: "mouse", mouse: cf({ left: N.clientX, top: N.clientY }) }
              : { type: "keyboard" };
          Le(oe);
        }
      },
      [n, Le],
    ),
    xt = b.useCallback(function (N) {
      (ue.current && N.target === ue.current) ||
        N.defaultPrevented ||
        (N.preventDefault(), j.current && j.current.requestHide({ isImmediate: !1 }));
    }, []),
    jr =
      n === "mouse"
        ? function (N) {
            var oe;
            (oe = j.current) !== null &&
              oe !== void 0 &&
              oe.isActive() &&
              (j.current.mousePosition = cf({ left: N.clientX, top: N.clientY }));
          }
        : void 0,
    de = b.useCallback(function () {
      if (j.current && j.current.isActive()) {
        j.current.keep();
        return;
      }
    }, []),
    rr = b.useCallback(
      function (N) {
        try {
          if (!N.target.matches(":focus-visible") && fe("platform-tooltip-focus-visible-new"))
            return;
        } catch {}
        Le({ type: "keyboard" });
      },
      [Le],
    ),
    tt = b.useCallback(function () {
      j.current && j.current.requestHide({ isImmediate: !1 });
    }, []),
    Bt = b.useCallback(
      function (N) {
        N === "exiting" &&
          Me.current === "fade-out" &&
          j.current &&
          j.current.finishHideAnimation();
      },
      [Me],
    ),
    za = f,
    pt = le !== "hide" && !!i,
    qa = !U && pt,
    kc = le !== "hide" && le !== "fade-out",
    zh = b.useCallback(function () {
      var N;
      (N = j.current) === null || N === void 0 || N.requestHide({ isImmediate: !0 });
    }, []);
  j1({ isOpen: pt && kc, onClose: zh });
  var Oc = function () {
      var oe;
      if (n === "mouse" && (oe = j.current) !== null && oe !== void 0 && oe.mousePosition) {
        var Ft;
        return (Ft = j.current) === null || Ft === void 0 ? void 0 : Ft.mousePosition;
      }
      return be.current || void 0;
    },
    pn = MS("tooltip", qa),
    ai = {
      onMouseOver: je,
      onMouseOut: xt,
      onMouseMove: jr,
      onMouseDown: re,
      onClick: Oe,
      onFocus: rr,
      onBlur: tt,
    };
  p && (ai["data-testid"] = "".concat(p, "--container"));
  var Sc = typeof t == "function";
  b.useEffect(
    function () {
      if (!Sc) {
        var N = be.current;
        if (!(!N || !pn))
          return (
            N.setAttribute("aria-describedby", pn),
            function () {
              return N.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [Sc, pn],
  );
  var xc = qa
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
          t(Hr(Hr({}, ai), {}, { "aria-describedby": pn, ref: ke })),
          xc,
        )
      : O.createElement(za, H({}, ai, { ref: Te, role: "presentation" }), t, xc),
    pt
      ? O.createElement(
          IS,
          { zIndex: LS },
          O.createElement(bS, { placement: G, referenceElement: Oc(), strategy: T }, function (N) {
            var oe = N.ref,
              Ft = N.style,
              oi = N.update,
              ii = N.placement,
              Dr = n === "mouse" ? void 0 : $S[BS(ii)];
            return O.createElement(
              uh,
              { appear: !0 },
              kc &&
                O.createElement(
                  W1,
                  {
                    distance: "constant",
                    entranceDirection: Dr,
                    exitDirection: Dr,
                    onFinish: Bt,
                    duration: le !== "show-immediate" ? "medium" : "none",
                  },
                  function (hn) {
                    var qh = hn.className;
                    return O.createElement(
                      u,
                      {
                        ref: oe,
                        className: "Tooltip ".concat(qh),
                        style: Hr(Hr({}, Ft), B && { pointerEvents: "none" }),
                        truncate: c,
                        placement: G,
                        testId: Oc() ? p : p && "".concat(p, "--unresolved"),
                        onMouseOut: xt,
                        onMouseOver: de,
                        shortcut: V,
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
  df = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syaz1gjq _k48pmoej" },
  Rh = function (t) {
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
      _ = Z(t, zS),
      w = b.useState(!1),
      k = X(w, 2),
      y = k[0],
      S = k[1],
      E = b.useState(!1),
      A = X(E, 2),
      D = A[0],
      R = A[1],
      T = l === u || s !== void 0,
      F = y || T || D,
      B = F && m,
      q = !m || F || (m && !D),
      U = b.useCallback(
        function () {
          R?.(!0);
        },
        [R],
      ),
      V = b.useCallback(
        function () {
          R?.(!1);
        },
        [R],
      ),
      G = b.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      K = b.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      $ = O.createElement(
        Zo,
        { xcss: df.headCellContainer, onMouseEnter: G, onMouseLeave: K, onFocus: U, onBlur: V },
        O.createElement(
          FS,
          { content: s === Er ? f : h },
          O.createElement(
            Tp,
            { onClick: c, xcss: sa.buttonWrapper, "aria-roledescription": g },
            O.createElement(
              Io,
              { xcss: B ? sa.hideIconHeaderWrapper : sa.visibleHeaderWrapper },
              O.createElement("span", { className: P([df.text]) }, r),
            ),
            q &&
              O.createElement(
                Io,
                { xcss: F ? sa.sortIconVisibleWrapper : sa.sortIconHiddenWrapper },
                s === Er
                  ? O.createElement(E1, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : O.createElement(O1, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return O.createElement(
      oh,
      H(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof o != "string" ? o : null,
        },
        _,
        { isSortable: i, sortOrder: s },
      ),
      i ? $ : r,
    );
  },
  qS = ["isRanking", "refHeight", "refWidth"];
function US(e, t, r) {
  return (
    (t = Y(t)),
    Ge(e, Ah() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Ah() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ah = function () {
    return !!e;
  })();
}
var VS = (function (e) {
    function t() {
      return (he(this, t), US(this, t, arguments));
    }
    return (
      He(t, e),
      ge(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var o = n.refWidth,
              i = Z(n, qS),
              s = np(a, o);
            return O.createElement(Rh, H({ inlineStyles: s }, i));
          },
        },
      ])
    );
  })(O.Component),
  GS = sh(VS),
  HS = ["content", "inlineStyles", "testId", "isRanking", "innerRef", "isSortable", "onClick"],
  Ih = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var o = t.innerRef,
      i = t.isSortable,
      s = t.onClick,
      c = Z(t, HS);
    return O.createElement(
      oh,
      H(
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
    (t = Y(t)),
    Ge(e, jh() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var YS = (function (e) {
    function t() {
      return (he(this, t), KS(this, t, arguments));
    }
    return (
      He(t, e),
      ge(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var o = n.refWidth,
              i = Z(n, WS),
              s = np(a, o);
            return O.createElement(Ih, H({ inlineStyles: s }, i));
          },
        },
      ])
    );
  })(O.Component),
  JS = sh(YS),
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
    (t = Y(t)),
    Ge(e, Dh() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var ex = (function (e) {
    function t(r) {
      var n;
      return (he(this, t), (n = QS(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      He(t, e),
      ge(t, [
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
            var h = d ? JS : Ih,
              v = d ? GS : Rh,
              g = o.cells,
              m = Z(o, XS);
            return O.createElement(
              y1,
              H({}, m, { isRanking: u, testId: f && "".concat(f, "--head") }),
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
                    R = _.isSortable,
                    T = _.key,
                    F = _.shouldTruncate,
                    B = _.testId,
                    q = _.width,
                    U = Z(_, ZS),
                    V = "head-cell-".concat(w),
                    G = function () {
                      (n.setState({ activeSortButtonId: V }), R && l(_)());
                    };
                  return fe("platform-component-visual-refresh")
                    ? O.createElement(
                        v,
                        H(
                          {
                            colSpan: S,
                            content: E,
                            isFixedSize: c,
                            isIconOnlyHeader: D,
                            isSortable: !!R,
                            isRanking: u,
                            key: T || w,
                            headCellId: V,
                            activeSortButtonId: p,
                            onClick: G,
                            testId: B || f,
                            shouldTruncate: F,
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
                        H(
                          {
                            colSpan: S,
                            content: E,
                            isFixedSize: c,
                            isSortable: !!R,
                            isRanking: u,
                            key: T || w,
                            onClick: R ? l(_) : void 0,
                            testId: B || f,
                            shouldTruncate: F,
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
      return Er;
    case Er:
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
      k = w === void 0 ? Re : w,
      y = t.onSort,
      S = y === void 0 ? Re : y,
      E = t.page,
      A = E === void 0 ? 1 : E,
      D = t.emptyView,
      R = t.isRankable,
      T = R === void 0 ? !1 : R,
      F = t.isRankingDisabled,
      B = F === void 0 ? !1 : F,
      q = t.onRankStart,
      U = q === void 0 ? Re : q,
      V = t.onRankEnd,
      G = V === void 0 ? Re : V,
      K = t.loadingSpinnerSize,
      $ = t.paginationi18n,
      j =
        $ === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : $,
      me = b.useState(!1),
      se = X(me, 2),
      le = se[0],
      ve = se[1],
      be = b.useRef(null),
      ue = rn({
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
        (xo(i, n), oy(n));
      },
      [i, n],
    );
    var ke = function (Oe) {
        return function () {
          var je = Oe.key;
          if (je) {
            if (ue && T && je === i && s === Po) {
              ue({ key: null, sortOrder: null, item: Oe });
              return;
            }
            var xt = je !== i ? Er : rx(s);
            ue && ue({ key: je, item: Oe, sortOrder: xt });
          }
        };
      },
      Me = function (Oe, je) {
        k(Oe, je);
      },
      pe = function (Oe) {
        (ve(!0), U(Oe));
      },
      Ne = function (Oe) {
        (ve(!1), Te(Oe));
      },
      tr = function () {
        return K || (rp(o || [], A, _).length > 2 ? Ro : C_);
      },
      vt = function () {
        return h ? O.createElement(B_, { testId: u }) : D && O.createElement(F_, { testId: u }, D);
      },
      Ee = o && o.length,
      Ce,
      St = !1;
    (d && Number.isInteger(d) && _ && Ee && Ee <= d
      ? ((Ce = Math.ceil(d / _)), (St = !0))
      : (Ce = Ee && _ ? Math.ceil(Ee / _) : 0),
      (Ce = Ce < 1 ? 1 : Ce));
    var et = A > Ce ? Ce : A,
      We = !!Ee,
      Le = tr(),
      Ie = vt();
    return O.createElement(
      O.Fragment,
      null,
      O.createElement(
        Cp,
        {
          isLoading: h && We,
          spinnerSize: Le,
          targetRef: function () {
            return be.current;
          },
          testId: u,
          loadingLabel: c,
        },
        O.createElement(
          N_,
          { isFixedSize: g, "aria-label": f, hasDataRow: We, testId: u, isLoading: h },
          !!r && O.createElement(L_, null, r),
          n &&
            O.createElement(ex, {
              head: n,
              onSort: ke,
              sortKey: i,
              sortOrder: s,
              isRanking: le,
              isRankable: T,
              testId: u,
            }),
          We &&
            O.createElement(ox, {
              ref: be,
              highlightedRowIndex: a,
              rows: o,
              head: n,
              sortKey: i,
              sortOrder: s,
              rowsPerPage: _,
              page: et,
              isFixedSize: g || !1,
              onPageRowsUpdate: l,
              isTotalPagesControlledExternally: St,
              testId: u,
              isRankable: T,
              isRanking: le,
              onRankStart: pe,
              onRankEnd: Ne,
              isRankingDisabled: B || h || !1,
            }),
        ),
      ),
      Ce <= 1
        ? null
        : O.createElement(
            $_,
            { testId: u },
            O.createElement(g1, {
              value: et,
              onChange: Me,
              total: Ce,
              i18n: j,
              isDisabled: h,
              testId: u,
            }),
          ),
      !We &&
        Ie &&
        O.createElement(xp, { isLoading: h, spinnerSize: Ro, testId: u, loadingLabel: c }, Ie),
    );
  },
  ax = b.lazy(function () {
    return ly(
      () => import("./body-C6CCPMrJ.js"),
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
      l = Z(t, tx),
      u = a && !l.sortKey,
      d = b.useState(!1),
      f = X(d, 2),
      p = f[0],
      h = f[1];
    b.useEffect(
      function () {
        u && h(!0);
      },
      [u],
    );
    var v = O.createElement(t0, H({ ref: r }, l));
    return u && p
      ? O.createElement(
          n0,
          { fallback: v },
          O.createElement(
            b.Suspense,
            { fallback: v },
            O.createElement(
              ax,
              H({ ref: r }, l, {
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
    (t = Y(t)),
    Ge(e, Th() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var Mh = (function (e) {
  function t() {
    var r;
    he(this, t);
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
        var f = iy(i, l, u, d);
        (r.setState({ rows: f }), r.onRankEndIfExistsHandler(i));
      }),
      r
    );
  }
  return (
    He(t, e),
    ge(t, [
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
C(Mh, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Re,
  onSort: Re,
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
var Nh = b.createContext(void 0),
  ux = function () {
    var t = b.useContext(Nh);
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
var dx = 9;
function ff(e) {
  e.keyCode !== dx && Ht(e);
}
function fx(e, t) {
  return e
    ? {
        onMouseDownCapture: Ht,
        onMouseUpCapture: Ht,
        onKeyDownCapture: ff,
        onKeyUpCapture: ff,
        onTouchStartCapture: Ht,
        onTouchEndCapture: Ht,
        onPointerDownCapture: Ht,
        onPointerUpCapture: Ht,
        onClickCapture: Ht,
        onClick: Ht,
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
  return O.createElement(rc, {
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
  vf = ", Loading",
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
  Wr = {
    root: "_bfhk1j54 _syaz10s3 _105310s3 _f8pj10s3 _30l310s3 _9h8h10s3",
    rootRefreshed:
      "_bfhksm61 _syaz1gjq _8l3mmuej _aetrb3bt _10531gjq _f8pj1gjq _30l31gjq _9h8h1gjq",
    interactive: "_irr3yw9d _30l310s3 _1di6ih13 _9h8h10s3",
    interactiveRefreshed: "_irr3166n _30l31gjq _1di61dty _9h8h1gjq",
    disabledRefreshed: "_bfhk1j28 _8l3m13gt _irr31j28 _1di61j28",
  },
  pf = {
    root: "_bfhkomb0 _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31wqm _9h8h15cr _1di617hq",
  },
  hf = {
    root: "_bfhk1ikc _syazal3n _1053al3n _f8pjal3n _30l3al3n _9h8hal3n",
    interactive: "_30l3al3n _irr31j43 _9h8hal3n _1di6h4op",
  },
  gf = {
    root: "_bfhk1v7l _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31rwk _9h8h15cr _1di6yycf",
  },
  bf = {
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
      R = e.interactionName,
      T = e.onClick,
      F = e.onMouseDown,
      B = e.onMouseDownCapture,
      q = e.onMouseUp,
      U = e.onMouseUpCapture,
      V = e.onKeyDown,
      G = e.onKeyDownCapture,
      K = e.onKeyUp,
      $ = e.onKeyUpCapture,
      j = e.onTouchStart,
      me = e.onTouchStartCapture,
      se = e.onTouchEnd,
      le = e.onTouchEndCapture,
      ve = e.onPointerDown,
      be = e.onPointerDownCapture,
      ue = e.onPointerUp,
      Te = e.onPointerUpCapture,
      ke = e.onClickCapture,
      Me = e.testId,
      pe = e.analyticsContext,
      Ne = e.componentName,
      tr = e.role,
      vt = e.onMouseOver,
      Ee = e.onMouseOut,
      Ce = e.onFocus,
      St = e.onBlur,
      et = e.onMouseMove,
      We = e.type,
      Le = Z(e, gx),
      Ie = b.useRef(null),
      re = ux(),
      Oe = $p(),
      je = !!re,
      xt = re?.isNavigationSplitButton || !1,
      jr = re?.appearance === "default",
      de =
        jr && fe("platform-component-visual-refresh") ? "subtle" : r || re?.appearance || "default",
      rr = re?.spacing || S,
      tt = re?.isDisabled || i,
      Bt = !tt && !c,
      za = tt || c,
      pt = u && !tt;
    (Qp(Ie, a), Le.className, Le.css, Le.as, Le.style);
    var qa = Z(Le, bx);
    return O.createElement(
      Tp,
      H(
        {},
        qa,
        {
          componentName: Ne || "button",
          analyticsContext: pe,
          role: tr,
          ref: lx([Ie, t]),
          xcss: Ip(
            De.base,
            de === "default" &&
              (fe("platform-component-visual-refresh") ? Wr.rootRefreshed : Wr.root),
            de === "default" &&
              Bt &&
              (fe("platform-component-visual-refresh") ? Wr.interactiveRefreshed : Wr.interactive),
            de === "primary" && pf.root,
            de === "primary" && Bt && pf.interactive,
            de === "warning" && hf.root,
            de === "warning" && Bt && hf.interactive,
            de === "danger" && gf.root,
            de === "danger" && Bt && gf.interactive,
            de === "discovery" && bf.root,
            de === "discovery" && Bt && bf.interactive,
            de === "subtle" &&
              (fe("platform-component-visual-refresh") ? eo.rootRefreshed : eo.root),
            de === "subtle" &&
              Bt &&
              (fe("platform-component-visual-refresh") ? eo.interactiveRefreshed : eo.interactive),
            De.linkDecorationUnset,
            pt && (fe("platform-component-visual-refresh") ? yr.rootRefreshed : yr.root),
            pt && je && yr.insideSplitButton,
            pt && Bt && yr.interactive,
            pt && de === "danger" && yr.danger,
            pt && de === "warning" && yr.warning,
            pt && de === "discovery" && yr.discovery,
            tt && De.disabled,
            tt &&
              (!fe("platform-component-visual-refresh") || (de !== "default" && de !== "subtle")) &&
              De.sharedDisabled,
            tt &&
              de === "default" &&
              (fe("platform-component-visual-refresh") ? Wr.disabledRefreshed : Wr.disabled),
            h && !je && De.circle,
            rr === "compact" && De.spacingCompact,
            g && De.buttonIconBefore,
            k && De.fullWidth,
            _ && De.buttonIconAfter,
            f && De.iconButton,
            f && rr === "compact" && De.iconButtonCompact,
            c && De.loading,
            je && De.splitButton,
            xt && De.navigationSplitButton,
          ),
          isDisabled: za,
          "aria-label": c && E && !A ? "".concat(E, " ").concat(vf) : E,
          "aria-labelledby": c && A ? "".concat(A, " ").concat(Oe) : A,
          onClick: T,
        },
        fx(za, {
          onMouseDownCapture: B,
          onMouseUpCapture: U,
          onKeyDownCapture: G,
          onKeyUpCapture: $,
          onTouchStartCapture: me,
          onTouchEndCapture: le,
          onPointerDownCapture: be,
          onPointerUpCapture: Te,
          onClickCapture: ke,
        }),
        {
          testId: Me,
          onMouseOver: vt,
          onFocus: Ce,
          onMouseMove: et,
          onBlur: St,
          type: We,
          interactionName: R,
          onMouseDown: F,
          onMouseUp: q,
          onKeyDown: V,
          onMouseOut: Ee,
          onKeyUp: K,
          onTouchStart: j,
          onTouchEnd: se,
          onPointerDown: ve,
          onPointerUp: ue,
        },
      ),
      O.createElement(
        Nh.Provider,
        { value: void 0 },
        D,
        c &&
          O.createElement(
            "span",
            { className: P([De.loadingOverlay]) },
            hx({ spacing: rr, appearance: de, isDisabled: tt, isSelected: pt, testId: Me }),
          ),
        c && (A || !E) && O.createElement(oc, { id: Oe }, vf),
      ),
    );
  }),
  Kr = {
    text: "_1reo15vq _18m915vq _16jlkb7n _1o9zkb7n _1bto1l2s _o5721q9c",
    icon: "_1e0c1txw _16jlidpf _1o9zidpf _1wpz1h6o _1wybidpf _vwz4idpf _uiztglyw",
    beforeIcon: "_1he91b66 _w795v77o",
    afterIcon: "_1he9v77o _w7951b66",
    common: "_v564g17y",
    fade: "_tzy4idpf",
  },
  ss = function (t) {
    var r = t.children,
      n = t.type,
      a = n === void 0 ? "text" : n,
      o = t.isLoading,
      i = t.position;
    return O.createElement(
      "span",
      {
        className: P([
          Kr.common,
          a === "text" && Kr.text,
          a === "icon" && Kr.icon,
          o && Kr.fade,
          i === "before" && Kr.beforeIcon,
          i === "after" && Kr.afterIcon,
        ]),
      },
      r,
    );
  };
function yx(e) {
  return !e.displayName && !e.render && typeof e == "function";
}
var mf = function (t) {
    var r = t.icon,
      n = yx(r),
      a = {
        label: "",
        color: "currentColor",
        size: fe("platform_dst_button_chevron_sizing")
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
  wc = O.memo(
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
        R = t.shouldFitContainer,
        T = t.spacing,
        F = t.testId,
        B = t.type,
        q = B === void 0 ? "button" : B,
        U = Z(t, _x);
      (U.className, U.css, U.as, U.style);
      var V = Z(U, wx);
      return O.createElement(
        mx,
        H(
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
            shouldFitContainer: R,
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
            testId: F,
            componentName: "Button",
            type: q,
            interactionName: d,
          },
          V,
        ),
        O.createElement(
          b.Fragment,
          null,
          u &&
            O.createElement(
              ss,
              { type: "icon", position: "before", isLoading: h },
              O.createElement(mf, { icon: u }),
            ),
          c && O.createElement(ss, { isLoading: h }, c),
          l &&
            O.createElement(
              ss,
              { type: "icon", position: "after", isLoading: h },
              O.createElement(mf, { icon: l }),
            ),
        ),
      );
    }),
  );
wc.displayName = "Button";
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
            x.jsx(Mh, {
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
                      children: x.jsx(wc, {
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
  return ep(e) || ap(e) || Zs(e) || tp();
}
var Lh = b.createContext(null),
  $h = b.createContext(null),
  Bh = b.createContext(null);
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
function Ox(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Sx = { componentName: "tabs", packageName: "@atlaskit/tabs", packageVersion: "18.1.12" },
  _f = function (t) {
    var r = t.tabPanel,
      n = t.index,
      a = t.isSelected,
      o = t.tabsId;
    return (
      r &&
      b.createElement(
        Bh.Provider,
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
      f = X(d, 2),
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
        ? _f({ tabPanel: w[v], index: v, isSelected: !0, tabsId: s })
        : Array.from(k.current).map(function (A) {
            return _f({ tabPanel: w[A], index: A, isSelected: A === v, tabsId: s });
          });
    return b.createElement(
      "div",
      {
        "data-testid": u,
        className: P([
          "_1e0c1txw _p12f1osq _1tkeidpf _i0dl1osq _2lx21bp4 _16jlkb7n",
          "_1c3y1txw _ftfaidpf _18i0kb7n _185bglyw",
        ]),
      },
      b.createElement($h.Provider, { value: { selected: v, onChange: S, tabsId: s } }, _),
      b.createElement(b.Fragment, null, E),
    );
  },
  Ex = function () {
    var t = b.useContext(Lh);
    if (t == null || typeof t > "u")
      throw Error("@atlaskit/tabs: A Tab must have a TabList parent.");
    return t;
  },
  Cx = function () {
    var t = b.useContext($h);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs: A TabList must have a Tabs parent.");
    return t;
  },
  Px = function () {
    var t = b.useContext(Bh);
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
      ac,
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
      ac,
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
      O.createElement(Dp, { weight: "medium", color: "inherit", maxLines: 1 }, n),
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
            Lh.Provider,
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
        className: P([
          "_1e0c1txw _kqswh2mm _85i5ze3t _1q51ze3t _y4tize3t _bozgze3t",
          "_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _7hip15vq _1fud15vq _bb0mh2mm _1quz1425 _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _1lzu1mrt _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oaz1fgx _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1b8d1mrt _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i2072d1 _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _rsmz12s7 _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiemln51 _pascidpf _eid3idpf _zr3eidpf _fntnidpf _1mp41kw7 _kfgte4h9 _1cs8stnw _1russudh _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc",
        ]),
        style: {
          "--_13a5t4u": Fe("var(--ds-text-subtle, ".concat(nn, ")")),
          "--_kkbq40": Fe("var(--ds-text-subtle, ".concat(Wt, ")")),
          "--_71dbsd": Fe("var(--ds-text, ".concat(As, ")")),
          "--_1hfkvbo": Fe("var(--ds-text-selected, ".concat(Wt, ")")),
          "--_1c11uqn": Fe("3px solid ".concat("var(--ds-border-selected, ".concat(Wt, ")"))),
          "--_lvpq93": Fe("var(--ds-border, ".concat(A_, ")")),
        },
      },
      c.map(function (p, h) {
        return f({ tab: p, index: h, isSelected: h === o });
      }),
    );
  },
  Fh = ((e) => (
    (e[(e.WITHOUT_VERSIONING = 0)] = "WITHOUT_VERSIONING"),
    (e[(e.OPTIMISTIC_NUMBER = 1)] = "OPTIMISTIC_NUMBER"),
    (e[(e.OPTIMISTIC_DATE = 2)] = "OPTIMISTIC_DATE"),
    (e[(e.OPTIMISTIC_TIMESTAMP = 3)] = "OPTIMISTIC_TIMESTAMP"),
    e
  ))(Fh || {});
const Ax = Object.keys(Fh).filter((e) => isNaN(Number(e))),
  no = ({ children: e, testId: t }) =>
    x.jsx("div", {
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
              x.jsxs(wc, {
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
  Lx = Uh.createRoot(Nx),
  wf = () => {
    Lx.render(x.jsx(Xv, { ...Zv, children: x.jsx(Mx, {}) }));
  };
wa.view.theme
  .enable()
  .then(() => {
    wf();
  })
  .catch((e) => {
    (console.error(e.message), wf());
  });
export {
  Ao as B,
  Ux as N,
  O as R,
  Y_ as T,
  He as _,
  ge as a,
  Ps as b,
  he as c,
  Ge as d,
  Y as e,
  X as f,
  C as g,
  Z as h,
  Qo as i,
  Ke as j,
  H as k,
  tw as l,
  Jt as m,
  $t as n,
  Fe as o,
  P as p,
  Vx as q,
  b as r,
  Be as s,
  W_ as t,
  np as u,
  V_ as v,
  sh as w,
};
