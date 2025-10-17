const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-n1V9FjMJ.js",
      "./react-dom-vendor-DTSHKYJW.js",
      "./client-core-vendor-Cqp86jmV.js",
      "./lodash-vendor-C8n-YkpA.js",
      "./body-C3aXNd8H.css",
    ]),
) => i.map((i) => d[i]);
import { r as ft, a as Pi, c as Rh } from "./react-dom-vendor-DTSHKYJW.js";
import { g as tr, a as Fs, r as Qt, b as Et, s as Ge } from "./client-core-vendor-Cqp86jmV.js";
import { r as Ph } from "./lodash-vendor-C8n-YkpA.js";
function Ah(e, t) {
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
var no = { exports: {} },
  sn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yu;
function Ih() {
  if (yu) return sn;
  yu = 1;
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
var mu;
function jh() {
  return (mu || ((mu = 1), (no.exports = Ih())), no.exports);
}
var M = jh(),
  _ = ft();
const k = tr(_),
  wu = Ah({ __proto__: null, default: k }, [_]);
var ao = {},
  as = function (e, t) {
    return (
      (as =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      as(e, t)
    );
  };
function yf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  as(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var li = function () {
  return (
    (li =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }),
    li.apply(this, arguments)
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
var Ai = Object.create
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
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Ai(t, e, r);
}
function di(e) {
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
function If() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat($s(arguments[t]));
  return e;
}
function jf() {
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
function Hr(e) {
  return this instanceof Hr ? ((this.v = e), this) : new Hr(e);
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
          return (r = !r) ? { value: Hr(e[a](o)), done: !1 } : i ? i(o) : o;
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
    : ((e = typeof di == "function" ? di(e) : e[Symbol.iterator]()),
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
function Ff(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var Dh = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  is = function (e) {
    return (
      (is =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      is(e)
    );
  };
function $f(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = is(e), n = 0; n < r.length; n++) r[n] !== "default" && Ai(t, e, r[n]);
  return (Dh(t, e), t);
}
function Nf(e) {
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
function Uf(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function qf(e, t, r) {
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
var Th =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Vf(e) {
  function t(i) {
    ((e.error = e.hasError ? new Th(i, e.error, "An error was suppressed during disposal.") : i),
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
const Mh = {
    __extends: yf,
    __assign: li,
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
    __createBinding: Ai,
    __exportStar: Af,
    __values: di,
    __read: $s,
    __spread: If,
    __spreadArrays: jf,
    __spreadArray: Df,
    __await: Hr,
    __asyncGenerator: Tf,
    __asyncDelegator: Mf,
    __asyncValues: Lf,
    __makeTemplateObject: Ff,
    __importStar: $f,
    __importDefault: Nf,
    __classPrivateFieldGet: zf,
    __classPrivateFieldSet: Bf,
    __classPrivateFieldIn: Uf,
    __addDisposableResource: qf,
    __disposeResources: Vf,
    __rewriteRelativeImportExtension: Gf,
  },
  Lh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: qf,
        get __assign() {
          return li;
        },
        __asyncDelegator: Mf,
        __asyncGenerator: Tf,
        __asyncValues: Lf,
        __await: Hr,
        __awaiter: Rf,
        __classPrivateFieldGet: zf,
        __classPrivateFieldIn: Uf,
        __classPrivateFieldSet: Bf,
        __createBinding: Ai,
        __decorate: wf,
        __disposeResources: Vf,
        __esDecorate: kf,
        __exportStar: Af,
        __extends: yf,
        __generator: Pf,
        __importDefault: Nf,
        __importStar: $f,
        __makeTemplateObject: Ff,
        __metadata: Cf,
        __param: Of,
        __propKey: Ef,
        __read: $s,
        __rest: mf,
        __rewriteRelativeImportExtension: Gf,
        __runInitializers: Sf,
        __setFunctionName: xf,
        __spread: If,
        __spreadArray: Df,
        __spreadArrays: jf,
        __values: di,
        default: Mh,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Rt = Fs(Lh);
var un = {},
  Ou;
function Fh() {
  return (
    Ou ||
      ((Ou = 1),
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
var io = {},
  oo = {},
  cn = {},
  ln = {},
  ku;
function rt() {
  if (ku) return ln;
  ((ku = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.BridgeAPIError = void 0));
  class e extends Error {}
  return ((ln.BridgeAPIError = e), ln);
}
var Su;
function ye() {
  if (Su) return cn;
  ((Su = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.getCallBridge = void 0));
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
  Eu;
function Ns() {
  if (Eu) return dn;
  ((Eu = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.withRateLimiter = void 0));
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
var xu;
function $h() {
  return (
    xu ||
      ((xu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = ye(),
          r = rt(),
          n = Ns(),
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
      })(oo)),
    oo
  );
}
var Cu;
function Nh() {
  return (
    Cu ||
      ((Cu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Rt.__exportStar($h(), e));
      })(io)),
    io
  );
}
var so = {},
  fn = {},
  uo = {},
  Ru;
function Hf() {
  return (
    Ru ||
      ((Ru = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = ye(),
          r = rt(),
          n = Ns(),
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
      })(uo)),
    uo
  );
}
var Pu;
function zh() {
  if (Pu) return fn;
  ((Pu = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.invokeRemote = void 0));
  const e = Hf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((fn.invokeRemote = t), fn);
}
var vn = {},
  Au;
function Bh() {
  if (Au) return vn;
  ((Au = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.invokeService = void 0));
  const e = Hf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((vn.invokeService = t), vn);
}
var Iu;
function Uh() {
  return (
    Iu ||
      ((Iu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Rt;
        (t.__exportStar(zh(), e), t.__exportStar(Bh(), e));
      })(so)),
    so
  );
}
var co = {},
  pn = {},
  hn = {},
  ju;
function qh() {
  if (ju) return hn;
  ((ju = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.submit = void 0));
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
  Du;
function Vh() {
  if (Du) return gn;
  ((Du = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.close = void 0));
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
  Tu;
function Gh() {
  if (Tu) return bn;
  ((Tu = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.open = void 0));
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
  Mu;
function Hh() {
  if (Mu) return _n;
  ((Mu = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.refresh = void 0));
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
  Lu;
function Wh() {
  if (Lu) return yn;
  ((Lu = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.createHistory = void 0));
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
  lo = {},
  Dt = {},
  Fu;
function Wf() {
  return (
    Fu ||
      ((Fu = 1),
      Object.defineProperty(Dt, "__esModule", { value: !0 }),
      (Dt.FORGE_SUPPORTED_LOCALE_CODES =
        Dt.I18N_BUNDLE_FOLDER_NAME =
        Dt.I18N_INFO_FILE_NAME =
          void 0),
      (Dt.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (Dt.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (Dt.FORGE_SUPPORTED_LOCALE_CODES = [
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
    Dt
  );
}
var ar = {},
  $u;
function Kh() {
  if ($u) return ar;
  (($u = 1),
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
  fo = {},
  Nu;
function Kf() {
  return (
    Nu ||
      ((Nu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = Rt.__importDefault(Ph()),
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
      })(fo)),
    fo
  );
}
var zu;
function Yh() {
  if (zu) return wn;
  ((zu = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.Translator = void 0));
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
  return ((wn.Translator = t), wn);
}
var On = {},
  Bu;
function Jh() {
  if (Bu) return On;
  ((Bu = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.ensureLocale = void 0));
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
  return ((On.ensureLocale = a), On);
}
var vo = {},
  Uu;
function Xh() {
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
      })(vo)),
    vo
  );
}
var po = {},
  qu;
function Zh() {
  return (qu || ((qu = 1), Object.defineProperty(po, "__esModule", { value: !0 })), po);
}
var Vu;
function Yf() {
  return (
    Vu ||
      ((Vu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = Rt;
        (t.__exportStar(Wf(), e),
          t.__exportStar(Kh(), e),
          t.__exportStar(Yh(), e),
          t.__exportStar(Jh(), e));
        var r = Kf();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Xh();
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
          t.__exportStar(Zh(), e));
      })(lo)),
    lo
  );
}
var Gu;
function Qh() {
  if (Gu) return mn;
  ((Gu = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.getContext = void 0));
  const e = ye(),
    t = Yf(),
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
  Hu;
function eg() {
  if (Hu) return kn;
  ((Hu = 1),
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
  Wu;
function tg() {
  if (Wu) return Sn;
  ((Wu = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.theme = void 0));
  const t = (0, ye().getCallBridge)();
  return ((Sn.theme = { enable: () => t("enableTheming") }), Sn);
}
var En = {},
  xn = {},
  ho = {},
  ir = {},
  Ku;
function Jf() {
  if (Ku) return ir;
  ((Ku = 1),
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
var Yu;
function rg() {
  return (
    Yu ||
      ((Yu = 1),
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
      })(ho)),
    ho
  );
}
var Ju;
function Xf() {
  if (Ju) return xn;
  ((Ju = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.events = void 0));
  const e = ye(),
    t = rg(),
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
var Xu;
function ng() {
  if (Xu) return En;
  ((Xu = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.emitReadyEvent = void 0));
  const e = Xf(),
    t = Zf(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return ((En.emitReadyEvent = n), En);
}
var Zu;
function Zf() {
  if (Zu) return pn;
  ((Zu = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.view = void 0));
  const e = qh(),
    t = Vh(),
    r = Gh(),
    n = Hh(),
    a = Wh(),
    i = Qh(),
    o = eg(),
    u = tg(),
    s = ng();
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
var Qu;
function Qf() {
  return (
    Qu ||
      ((Qu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Rt.__exportStar(Zf(), e));
      })(co)),
    co
  );
}
var go = {},
  Cn = {},
  ec;
function ag() {
  if (ec) return Cn;
  ((ec = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.router = void 0));
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
var tc;
function ig() {
  return (
    tc ||
      ((tc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Rt.__exportStar(ag(), e));
      })(go)),
    go
  );
}
var bo = {},
  Rn = {},
  rc;
function og() {
  if (rc) return Rn;
  ((rc = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.Modal = void 0));
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
var nc;
function sg() {
  return (
    nc ||
      ((nc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Rt.__exportStar(og(), e));
      })(bo)),
    bo
  );
}
var Tt = {},
  Pn = {},
  ac;
function ug() {
  if (ac) return Pn;
  ((ac = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.productFetchApi = void 0));
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
var ic;
function cg() {
  if (ic) return Tt;
  ic = 1;
  var e;
  (Object.defineProperty(Tt, "__esModule", { value: !0 }),
    (Tt.requestBitbucket = Tt.requestJira = Tt.requestConfluence = void 0));
  const t = ye();
  return (
    (e = (0, ug().productFetchApi)((0, t.getCallBridge)())),
    (Tt.requestConfluence = e.requestConfluence),
    (Tt.requestJira = e.requestJira),
    (Tt.requestBitbucket = e.requestBitbucket),
    Tt
  );
}
var _o = {},
  An = {},
  oc;
function lg() {
  if (oc) return An;
  ((oc = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.showFlag = void 0));
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
var sc;
function dg() {
  return (
    sc ||
      ((sc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = lg();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(_o)),
    _o
  );
}
var yo = {},
  uc;
function fg() {
  return (
    uc ||
      ((uc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Rt.__exportStar(Xf(), e));
      })(yo)),
    yo
  );
}
var mo = {},
  In = {},
  cc;
function vg() {
  if (cc) return In;
  ((cc = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.realtime = void 0));
  const t = (0, ye().getCallBridge)(),
    r = (o, u, s) => t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s }),
    n = (o, u, s) => t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s }),
    a = (o, u, s) =>
      t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s, isGlobal: !0 }),
    i = (o, u, s) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s, isGlobal: !0 });
  return ((In.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: i }), In);
}
var wo = {},
  lc;
function pg() {
  return (
    lc ||
      ((lc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Jira = void 0),
          (function (t) {
            ((t.Board = "board"), (t.Issue = "issue"), (t.Project = "project"));
          })(e.Jira || (e.Jira = {})));
      })(wo)),
    wo
  );
}
var dc;
function hg() {
  return (
    dc ||
      ((dc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Jira = e.realtime = void 0));
        var t = vg();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = pg();
        Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return r.Jira;
          },
        });
      })(mo)),
    mo
  );
}
var Mt = {},
  fc;
function gg() {
  if (fc) return Mt;
  ((fc = 1),
    Object.defineProperty(Mt, "__esModule", { value: !0 }),
    (Mt.createTranslationFunction = Mt.getTranslations = Mt.resetTranslationsCache = void 0));
  const e = Yf(),
    t = Qf(),
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
  Mt.resetTranslationsCache = a;
  const i = async (u = null, s = { fallback: !0 }) => {
    let c = u;
    return (c || (c = (await t.view.getContext()).locale), await n.getTranslations(c, s));
  };
  Mt.getTranslations = i;
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
  return ((Mt.createTranslationFunction = o), Mt);
}
var Oo = {},
  jn = {},
  vc;
function ev() {
  if (vc) return jn;
  ((vc = 1),
    Object.defineProperty(jn, "__esModule", { value: !0 }),
    (jn.initFeatureFlags = void 0));
  const e = ye(),
    t = rt(),
    r = Ns(),
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
    (jn.initFeatureFlags = (0, r.withRateLimiter)(
      u,
      n,
      a,
      "Feature flags initialisation calls are rate limited at 500req/25s",
    )),
    jn
  );
}
var Dn = {},
  or = {},
  xr = {},
  Ua = {},
  pc;
function bg() {
  if (pc) return Ua;
  ((pc = 1), Object.defineProperty(Ua, "__esModule", { value: !0 }));
  const e = Qt();
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
var Cr = {},
  Tn = {},
  hc;
function _g() {
  if (hc) return Tn;
  ((hc = 1),
    Object.defineProperty(Tn, "__esModule", { value: !0 }),
    (Tn._resolveDeltasResponse = void 0));
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
var gc;
function tv() {
  if (gc) return Cr;
  gc = 1;
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
  const t = Qt(),
    r = _g();
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
  bc;
function yg() {
  if (bc) return Mn;
  ((bc = 1),
    Object.defineProperty(Mn, "__esModule", { value: !0 }),
    (Mn._makeParamStoreGetter = void 0));
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
  return ((Mn._makeParamStoreGetter = c), Mn);
}
var sr = {},
  _c;
function mg() {
  if (_c) return sr;
  _c = 1;
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
  const t = Qt(),
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
  return ((sr.StatsigEvaluationsDataAdapter = n), sr);
}
var yc;
function wg() {
  if (yc) return xr;
  yc = 1;
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
  const t = Qt(),
    r = bg(),
    n = tv(),
    a = yg(),
    i = mg();
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
var mc;
function Og() {
  return (
    mc ||
      ((mc = 1),
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
        const n = Qt(),
          a = wg();
        ((e.StatsigClient = a.default), r(Qt(), e));
        const i = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = i;
      })(or)),
    or
  );
}
var Ln = {},
  wc;
function kg() {
  if (wc) return Ln;
  ((wc = 1),
    Object.defineProperty(Ln, "__esModule", { value: !0 }),
    (Ln.ForgeDataAdapter = void 0));
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
  return ((Ln.ForgeDataAdapter = t), Ln);
}
var Oc;
function Sg() {
  if (Oc) return Dn;
  ((Oc = 1),
    Object.defineProperty(Dn, "__esModule", { value: !0 }),
    (Dn.ForgeFeatureFlags = void 0));
  const e = Og(),
    t = kg();
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
var kc;
function Eg() {
  return (
    kc ||
      ((kc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ForgeFeatureFlags = void 0),
          Rt.__exportStar(ev(), e));
        var r = Sg();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.ForgeFeatureFlags;
          },
        });
      })(Oo)),
    Oo
  );
}
var Sc;
function xg() {
  return (
    Sc ||
      ((Sc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = Rt;
        var r = Fh();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Nh(), e),
          t.__exportStar(Uh(), e),
          t.__exportStar(Qf(), e),
          t.__exportStar(ig(), e),
          t.__exportStar(sg(), e),
          t.__exportStar(cg(), e),
          t.__exportStar(dg(), e),
          t.__exportStar(fg(), e),
          t.__exportStar(hg(), e),
          (e.i18n = t.__importStar(gg())),
          t.__exportStar(Eg(), e));
      })(ao)),
    ao
  );
}
var zt = xg();
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
function Cg(e, t) {
  if (Ae(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ae(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function rv(e) {
  var t = Cg(e, "string");
  return Ae(t) == "symbol" ? t : t + "";
}
function Ec(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, rv(n.key), n));
  }
}
function ve(e, t, r) {
  return (
    t && Ec(e.prototype, t),
    r && Ec(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Rg(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ne(e, t) {
  if (t && (Ae(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Rg(e);
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
function ba(e, t) {
  return (
    (ba = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    ba(e, t)
  );
}
function ze(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ba(e, t));
}
function E(e, t, r) {
  return (
    (t = rv(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function we() {}
function Pg(e) {
  if (Array.isArray(e)) return e;
}
function Ag(e, t) {
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
function os(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function nv(e, t) {
  if (e) {
    if (typeof e == "string") return os(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? os(e, t)
          : void 0
    );
  }
}
function Ig() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(e, t) {
  return Pg(e) || Ag(e, t) || nv(e, t) || Ig();
}
var av = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  jg = function (t) {
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
  fi = function (t, r) {
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
  Dg = function (t, r, n) {
    return t ? { width: r } : {};
  },
  xc = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  Tg = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      i = t.destination,
      o = t.sourceIndex;
    if (!i) return r;
    var u = xc(o, n, a),
      s = xc(i.index, n, a),
      c = r.slice(),
      l = c.splice(u, 1),
      d = K(l, 1),
      f = d[0];
    return (c.splice(s, 0, f), c);
  };
const Mg = "modulepreload",
  Lg = function (e, t) {
    return new URL(e, t).href;
  },
  Cc = {},
  Fg = function (t, r, n) {
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
          if (((l = Lg(l, n)), l in Cc)) return;
          Cc[l] = !0;
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
            ((p.rel = d ? "stylesheet" : Mg),
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
function $g(e, t) {
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
    a = $g(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      ((r = i[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
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
function ko(e) {
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
var Ng = (function () {
  function e(t) {
    var r = this;
    (fe(this, e),
      E(this, "_isAnalyticsEvent", !0),
      E(this, "clone", function () {
        var n = ko({}, r.payload);
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
          Ae(r) === "object" && (this.payload = ko(ko({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function zg(e) {
  if (Array.isArray(e)) return os(e);
}
function Bg(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function Ug() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function De(e) {
  return zg(e) || Bg(e) || nv(e) || Ug();
}
function qg(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Y(e)) !== null; );
  return e;
}
function vi() {
  return (
    (vi =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = qg(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    vi.apply(null, arguments)
  );
}
function Vg(e, t, r) {
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
function Gg(e, t, r, n) {
  var a = vi(Y(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var Hg = (function (e) {
    function t(r) {
      var n;
      return (
        fe(this, t),
        (n = Vg(this, t, [r])),
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
            return this.hasFired ? this : Gg(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(Ng),
  Wg = _.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Kg = function () {
    return _.useContext(Wg);
  },
  pi = function (t) {
    var r = _.useRef(t);
    return ((r.current = t), r);
  };
function Yg(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Jg(e, t) {
  var r = _.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = _.useRef(!0),
    a = _.useRef(r),
    i = n.current || !!(t && a.current.inputs && Yg(t, a.current.inputs)),
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
function Xg(e, t) {
  return Jg(function () {
    return e;
  }, t);
}
function ov() {
  var e = Kg(),
    t = Xg(
      function (r) {
        return new Hg({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
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
function Zg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Pc(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function _a(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    i = e.packageName,
    o = e.packageVersion,
    u = e.analyticsData,
    s = ov(),
    c = s.createAnalyticsEvent,
    l = pi(u),
    d = pi(t),
    f = _.useCallback(
      function (p) {
        var h = c({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: i, packageVersion: o },
          }),
          v = Zg({ componentName: n, packageName: i, packageVersion: o }, l.current);
        h.context.push(v);
        var g = h.clone();
        (g && g.fire("atlaskit"), d.current(p, h));
      },
      [r, n, a, i, o, c, l, d],
    );
  return f;
}
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
function Qg(e) {
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
function Ic(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    i = e.packageVersion,
    o = e.analyticsData,
    u = ov(),
    s = u.createAnalyticsEvent,
    c = pi(o),
    l = pi(t),
    d = _.useCallback(
      function () {
        var f = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: i },
          }),
          p = Qg({ componentName: n, packageName: a, packageVersion: i }, c.current);
        f.context.push(p);
        var h = f.clone();
        (h && h.fire("atlaskit"), l.current(f));
      },
      [r, n, a, i, s, c, l],
    );
  return d;
}
var pr = "ASC",
  hi = "DESC",
  eb = "small",
  gi = "large",
  sv = 0.22;
const tb = 5;
function C(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const i of a) {
      const o = i.startsWith("_") ? i.slice(0, tb) : i;
      t[o] = i;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function uv(e, t, r) {
  return e ?? "var(--c-, )";
}
var rb = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  nb = _.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      i = e.testId,
      o = e.isLoading,
      u = ae(e, rb);
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
  ab = function (t) {
    var r = t.children;
    return _.createElement(
      "caption",
      { className: C(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  ib = function (t) {
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
  ob = function (t) {
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
  sb = function (t) {
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
  ub = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
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
function Dc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jc(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function cb(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, cv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var Tc = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var i;
      if (r.cells[a] && ((i = r.cells[a]) === null || i === void 0 ? void 0 : i.key) === n) {
        var o;
        return (o = t[a]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  lb = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var i = a === pr ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      u = Array.from(r);
    return u.sort(function (s, c) {
      var l = Tc(s.cells, t, n),
        d = Tc(c.cells, t, n);
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
function db(e) {
  var t = (function (r) {
    function n() {
      var a;
      fe(this, n);
      for (var i = arguments.length, o = new Array(i), u = 0; u < i; u++) o[u] = arguments[u];
      return ((a = cb(this, n, [].concat(o))), E(a, "state", { pageRows: [] }), a);
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
                s = ae(i, ub);
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
              fi(c, s);
              var h, v;
              return (
                p ? ((h = u), (v = u)) : ((h = lb(s, u, c, l) || []), (v = av(h, d, f))),
                Dc(Dc({}, o), {}, { pageRows: v })
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
var fb = "--local-dynamic-table-width",
  lv = function (t) {
    var r = t.width;
    return typeof r < "u" ? E({}, fb, "".concat(r, "%")) : void 0;
  },
  vb = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  pb = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      i = t.innerRef,
      o = ae(t, vb);
    return _.createElement(
      "td",
      te(
        {
          style: lv({ width: r }),
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
  hb = ["isHighlighted", "children", "style", "testId", "className"],
  gb = _.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      i = e.testId,
      o = e.className,
      u = ae(e, hb);
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
  bb = ["cells"],
  _b = ["content", "testId"],
  yb = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      i = t.isFixedSize,
      o = t.isHighlighted,
      u = r.cells,
      s = ae(r, bb);
    return k.createElement(
      gb,
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
          p = ae(c, _b),
          h = (n || { cells: [] }).cells[l] || {},
          v = h.shouldTruncate,
          g = h.width;
        return k.createElement(
          pb,
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
function mb(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, dv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function dv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (dv = function () {
    return !!e;
  })();
}
var wb = (function (e) {
    function t() {
      return (fe(this, t), mb(this, t, arguments));
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
                return k.createElement(yb, {
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
  Ob = db(
    k.forwardRef(function (e, t) {
      return k.createElement(wb, te({}, e, { forwardedRef: t }));
    }),
  );
function kb(e, t, r) {
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
var Sb = (function (e) {
  function t(r) {
    var n;
    return (fe(this, t), (n = kb(this, t, [r])), (n.state = { hasError: !1 }), n);
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
const zs = _.createContext(null);
var Mc = "#FF5630",
  Lc = "#DE350B",
  Rr = "#BF2600",
  Fc = "#FFC400",
  $c = "#FFAB00",
  Pr = "#FF991F",
  Eb = "#DEEBFF",
  qa = "#B3D4FF",
  Nc = "#4C9AFF",
  zc = "#2684FF",
  Bc = "#0065FF",
  Ar = "#0052CC",
  Uc = "#0747A6",
  Jt = "#FFFFFF",
  xe = "#F4F5F7",
  ur = "#A5ADBA",
  xb = "#8993A4",
  Cb = "#6B778C",
  Rb = "#505F79",
  ya = "#42526E",
  He = "#253858",
  Ir = "#172B4D",
  Fn = "rgba(9, 30, 66, 0.04)",
  qc = "rgba(9, 30, 66, 0.08)",
  ot = "#9FB0CC",
  Pb = "#8C9CB8",
  So = "#67758F",
  $n = "#3B475C",
  Vc = "#313D52",
  Nn = "#1B2638",
  jr = "#0D1424",
  Ab = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function Ib(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(ya, ")")
    : "var(--ds-icon-inverse, ".concat(Jt, ")");
}
var Va = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  jb = typeof window > "u" ? _.useEffect : _.useLayoutEffect,
  vv = k.memo(
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
        f = typeof l == "number" ? l : Ab[l],
        p = "".concat(o, "ms"),
        h = Ib(a),
        v = _.useContext(zs);
      return (
        jb(
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
            className: C([Va.wrapperStyles, Va.rotateStyles]),
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
              className: C([Va.loadInStyles]),
            },
            k.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: C([Va.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function Gc(e, t) {
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
function Hc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gc(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Gc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Wc = "--contents-opacity",
  Db = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: C(["_kqswh2mm"]) },
      r,
    );
  },
  Tb = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: C(["_tzy47hfw _lcxvglyw"]),
        style: Hc(Hc({}, E({}, Wc, n)), {}, { "--_cnddr8": uv("var(".concat(Wc, ")")) }),
      },
      r,
    );
  },
  Mb = function (t) {
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
function Lb(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, pv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function pv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (pv = function () {
    return !!e;
  })();
}
var hv = (function (e) {
  function t() {
    return (fe(this, t), Lb(this, t, arguments));
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
            Db,
            { testId: s },
            i ? k.createElement(Tb, { contentsOpacity: u, testId: s }, a) : a,
            i &&
              k.createElement(
                Mb,
                { testId: s },
                k.createElement(vv, {
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
E(hv, "defaultProps", {
  isLoading: !0,
  spinnerSize: gi,
  contentsOpacity: sv,
  loadingLabel: "Loading table",
});
var Fb = ["children", "testId"],
  $b = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = ae(e, Fb);
    return _.createElement(
      "div",
      te({}, a, { "data-testid": n, ref: t, className: C(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  Nb = function (t) {
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
  zb = _.forwardRef(function (e, t) {
    var r = e.children;
    return _.createElement("div", { ref: t, className: C(["_kqswh2mm _152tidpf"]) }, r);
  });
function Bb(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, gv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function gv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (gv = function () {
    return !!e;
  })();
}
var bv = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = Bb(this, t, [].concat(a))),
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
                I = (f - x) / 2;
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
            $b,
            { testId: u && "".concat(u, "--loading--container--advanced"), ref: this.containerRef },
            a,
            i &&
              k.createElement(
                Nb,
                { testId: u },
                k.createElement(
                  zb,
                  { ref: this.spinnerRef },
                  k.createElement(vv, {
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
E(bv, "defaultProps", {
  isLoading: !0,
  spinnerSize: gi,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(sv), ")"),
  loadingLabel: "Loading table",
});
function Ub(e) {
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
function Kc(e, t, r, n, a, i, o) {
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
        Kc(i, n, a, o, u, "next", s);
      }
      function u(s) {
        Kc(i, n, a, o, u, "throw", s);
      }
      o(void 0);
    });
  };
}
var Eo = { exports: {} },
  xo = { exports: {} },
  Yc;
function _v() {
  return (
    Yc ||
      ((Yc = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(xo)),
    xo.exports
  );
}
var Co = { exports: {} },
  Ro = { exports: {} },
  Jc;
function yv() {
  return (
    Jc ||
      ((Jc = 1),
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
      })(Ro)),
    Ro.exports
  );
}
var Xc;
function mv() {
  return (
    Xc ||
      ((Xc = 1),
      (function (e) {
        var t = yv();
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
                (function (S, x, I) {
                  var D,
                    R,
                    T,
                    B = 0,
                    z = I || [],
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
      })(Co)),
    Co.exports
  );
}
var Po = { exports: {} },
  Ao = { exports: {} },
  Io = { exports: {} },
  Zc;
function wv() {
  return (
    Zc ||
      ((Zc = 1),
      (function (e) {
        var t = _v(),
          r = yv();
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
      })(Io)),
    Io.exports
  );
}
var Qc;
function Ov() {
  return (
    Qc ||
      ((Qc = 1),
      (function (e) {
        var t = mv(),
          r = wv();
        function n(a, i, o, u, s) {
          return new r(t().w(a, i, o, u), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ao)),
    Ao.exports
  );
}
var el;
function qb() {
  return (
    el ||
      ((el = 1),
      (function (e) {
        var t = Ov();
        function r(n, a, i, o, u) {
          var s = t(n, a, i, o, u);
          return s.next().then(function (c) {
            return c.done ? c.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Po)),
    Po.exports
  );
}
var jo = { exports: {} },
  tl;
function Vb() {
  return (
    tl ||
      ((tl = 1),
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
      })(jo)),
    jo.exports
  );
}
var Do = { exports: {} },
  To = { exports: {} },
  rl;
function Gb() {
  return (
    rl ||
      ((rl = 1),
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
      })(To)),
    To.exports
  );
}
var nl;
function Hb() {
  return (
    nl ||
      ((nl = 1),
      (function (e) {
        var t = Gb().default;
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
      })(Do)),
    Do.exports
  );
}
var al;
function Wb() {
  return (
    al ||
      ((al = 1),
      (function (e) {
        var t = _v(),
          r = mv(),
          n = qb(),
          a = Ov(),
          i = wv(),
          o = Vb(),
          u = Hb();
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
      })(Eo)),
    Eo.exports
  );
}
var Mo, il;
function Kb() {
  if (il) return Mo;
  il = 1;
  var e = Wb()();
  Mo = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return Mo;
}
var Yb = Kb();
const N = tr(Yb);
var cr = {},
  Dr = {},
  Ga = {},
  Un = {},
  ol;
function Jb() {
  if (ol) return Un;
  ((ol = 1),
    Object.defineProperty(Un, "__esModule", { value: !0 }),
    (Un.V1InitializeContainer = void 0));
  const e = Et();
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
var qn = {},
  sl;
function Xb() {
  if (sl) return qn;
  ((sl = 1),
    Object.defineProperty(qn, "__esModule", { value: !0 }),
    (qn.V2InitializeContainer = void 0));
  const e = Et();
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
  return ((qn.V2InitializeContainer = t), qn);
}
var ul;
function Zb() {
  if (ul) return Ga;
  ((ul = 1), Object.defineProperty(Ga, "__esModule", { value: !0 }));
  const e = Et(),
    t = Jb(),
    r = Xb();
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
  return ((Ga.default = n), Ga);
}
var Tr = {},
  Vn = {},
  cl;
function Qb() {
  if (cl) return Vn;
  ((cl = 1),
    Object.defineProperty(Vn, "__esModule", { value: !0 }),
    (Vn._resolveDeltasResponse = void 0));
  const e = Et(),
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
  Vn._resolveDeltasResponse = r;
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
  return Vn;
}
var ll;
function kv() {
  if (ll) return Tr;
  ll = 1;
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
  const t = Et(),
    r = Qb();
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
var Gn = {},
  dl;
function e_() {
  if (dl) return Gn;
  ((dl = 1),
    Object.defineProperty(Gn, "__esModule", { value: !0 }),
    (Gn._makeParamStoreGetter = void 0));
  const e = Et(),
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
  return ((Gn._makeParamStoreGetter = c), Gn);
}
var lr = {},
  fl;
function t_() {
  if (fl) return lr;
  fl = 1;
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
  const t = Et(),
    r = kv();
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
var vl;
function r_() {
  if (vl) return Dr;
  vl = 1;
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
  const t = Et(),
    r = Zb(),
    n = kv(),
    a = e_(),
    i = t_();
  let o = class ss extends t.StatsigClientBase {
    static instance(s) {
      const c = (0, t._getStatsigGlobal)().instance(s);
      return c instanceof ss
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new ss(s ?? "", {}));
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
var pl;
function n_() {
  return (
    pl ||
      ((pl = 1),
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
        const n = Et(),
          a = r_();
        ((e.StatsigClient = a.default), r(Et(), e));
        const i = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = i;
      })(cr)),
    cr
  );
}
var st = n_(),
  Lo = { exports: {} },
  hl;
function a_() {
  return (
    hl ||
      ((hl = 1),
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
      })(Lo)),
    Lo.exports
  );
}
var i_ = a_();
const o_ = tr(i_);
function gl(e, t) {
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
      ? gl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ha = "@all-features",
  s_ = (function () {
    function e() {
      (fe(this, e), E(this, "eventToValue", new Map()), (this.emitter = new o_()));
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
            var p = o(r, n, a, Kt(Kt({}, u), {}, { fireExperimentExposure: !1 })),
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
            this.emitter.on(Ha, r),
            function () {
              n.emitter.off(Ha, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(Ha),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== Ha;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  u_ = "fedramp-moderate";
function c_() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === u_;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Bs = (function (e) {
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
  oa = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  ma = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  l_ = [
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
function bl(e, t) {
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
function us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Wa = function (t) {
    return us({ perimeter: c_() ? ma.FEDRAMP_MODERATE : ma.COMMERCIAL }, t);
  },
  Hn = function (t, r) {
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
  _l = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  d_ = function (t) {
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
    var f = ae(t, l_);
    return us(
      us({}, f),
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
  f_ = Object.entries(Bs).map(function (e) {
    var t = K(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  Sv = function (t) {
    var r,
      n,
      a,
      i = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = f_.find(function (o) {
            var u = K(o, 1),
              s = u[0];
            return i.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Bs.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  cs = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  yl = (function () {
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
                Sv(r.details),
                cs(
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
  ml = (function () {
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
                Sv(r.details),
                function (l, d) {
                  return r.get(d);
                },
                cs(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                cs(
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
function v_(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Ev() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ev = function () {
    return !!e;
  })();
}
function p_(e, t, r) {
  if (Ev()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && ba(a, r.prototype), a);
}
function ls(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (ls = function (n) {
      if (n === null || !v_(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return p_(n, arguments, Y(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        ba(a, n)
      );
    }),
    ls(e)
  );
}
function h_(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, xv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var wl = (function (e) {
  function t(r) {
    return (fe(this, t), h_(this, t, [r]));
  }
  return (ze(t, e), ve(t));
})(ls(Error));
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
function g_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ol(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ol(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var b_ = 5e3,
  __ = "https://api.atlassian.com/flags",
  y_ = "https://api.stg.atlassian.com/flags",
  m_ = "https://api.dev.atlassian.com/flags",
  w_ = "https://api.stg.atlassian-us-gov-mod.com/flags",
  O_ = "https://api.atlassian-us-gov-mod.com/flags",
  k_ = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  S_ = "oasis-stg.com/flags",
  E_ = "atlassian-isolated.net/flags",
  x_ = "/gateway/api/flags",
  Fo = (function () {
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
                        new wl(
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
                      throw new wl("Unexpected 204 response");
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
          if (n) return x_;
          if (a === ma.FEDRAMP_MODERATE)
            switch (r) {
              case oa.Production:
                return O_;
              case oa.Staging:
                return w_;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === ma.COMMERCIAL)
            switch (r) {
              case oa.Development:
                return m_;
              case oa.Staging:
                var o = this.getApiUrl(i);
                return o !== null ? o : y_;
              default:
                var u = this.getApiUrl(i);
                return u !== null ? u : __;
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
                          (c = o.fetchTimeoutMs || b_),
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
                            g_(
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
          if (n === void 0) return r ? k_.replace("%s", r) : null;
          var a = n.protocol,
            i = n.hostname,
            o = i.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(a, "//api.").concat(o[1], ".").concat(S_);
          var u = i.match(/([^.]+)\.atlassian-isolated\.net$/);
          return u ? "".concat(a, "//api.").concat(u[1], ".").concat(E_) : null;
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
function Wn(e) {
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
function C_(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, Cv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
function R_(e, t, r, n) {
  var a = vi(Y(e.prototype), t, r);
  return typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var P_ = (function (e) {
  function t() {
    var r;
    return (
      fe(this, t),
      (r = C_(this, t, ["NoFetchDataAdapter", "nofetch"])),
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
                            Wn(
                              Wn({}, this.bootstrapResult),
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
            Wn(Wn({}, this.bootstrapResult), {}, { fullUserHash: st._getFullUserHash(n) })
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
          R_(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = Wn({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(st.DataAdapterCore);
function Sl(e, t) {
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
      ? Sl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Sl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function A_(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = I_(e)) || t) {
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
function I_(e, t) {
  if (e) {
    if (typeof e == "string") return El(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? El(e, t)
          : void 0
    );
  }
}
function El(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var $o = "LocalOverride:Recognized",
  j_ = "STATSIG_OVERRIDES",
  xl = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Mr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  We = function (t, r) {
    return r + ":" + t;
  },
  D_ = (function () {
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
                I = K(S[y], 2),
                D = I[0],
                R = I[1];
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
            this.parseStoredOverrides(xl),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(xl);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var i = a[n],
              o = new Set(Object.keys(i)),
              u = A_(o),
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
            : Ce(Ce({}, r), {}, { value: i, details: Ce(Ce({}, r.details), {}, { reason: $o }) });
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
                  details: Ce(Ce({}, r.details), {}, { reason: $o }),
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
                  details: Ce(Ce({}, r.details), {}, { reason: $o }),
                },
              );
        },
      },
    ]);
  })(),
  T_ = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function Cl(e, t) {
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
      ? Cl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Rl = "client-default-key",
  M_ = "https://xp.atlassian.com/v1/rgstr",
  L_ = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? j_ : n,
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
        E(this, "subscriptions", new s_()),
        E(this, "dataAdapter", new P_()),
        E(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = i || new D_(a)));
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
                        if (((s = Wa(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          Hn(s, this.initOptions) ||
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
                        if (((c = Wa(a)), !this.initPromise)) {
                          f.next = 4;
                          break;
                        }
                        return (
                          Hn(c, this.initOptions) ||
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
                var l = Yt(
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
                u.initOptions.environment !== oa.Production &&
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
                          (c = Wa(a)),
                          !this.initPromise)
                        ) {
                          p.next = 5;
                          break;
                        }
                        return (
                          Hn(c, this.initOptions) ||
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
                          (u = Wa(a)),
                          (s = function () {
                            return Fo.fetchExperimentValues(u, i, o).then(function (f) {
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
            return yl.fromExperiment(
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
              new yl(r, {}, "", { time: Date.now(), reason: Bs.Error })
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
          return Hn(this.currentIdentifiers, r) && Hn(this.currentAttributes, n);
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
                          (u = Yt({}, a)),
                          (g.prev = 1),
                          (l = Fo.fetchClientSdk(a).then(function (b) {
                            return (u.sdkKey = b.clientSdkKey);
                          })),
                          (d = Fo.fetchExperimentValues(a, i, o)),
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
                          (c = d_(a)),
                          c.sdkKey || (c.sdkKey = Rl),
                          ((u = c.networkConfig) !== null && u !== void 0 && u.logEventUrl) ||
                            (c.networkConfig = Yt(
                              Yt({}, c.networkConfig),
                              {},
                              { logEventUrl: M_ },
                            )),
                          c.perimeter === ma.FEDRAMP_MODERATE && (c.disableLogging = !0),
                          (l = c.sdkKey),
                          (d = c.environment),
                          c.updateUserCompletionCallback,
                          c.perimeter,
                          (f = ae(c, T_)),
                          (this.user = _l(i, o)),
                          (p = Yt(
                            Yt({}, f),
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
                          (this.statsigClient = new st.StatsigClient(Rl, this.user, p)),
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
                        ((c = b.sent), (l = _l(i, c.customAttributesFromFetch)), (b.next = 13));
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
            return ml.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !i }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              ml.fromLayer(st._makeLayer(r, { reason: "Error" }, null))
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
  j,
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
j = U;
E(U, "client", new L_());
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
    j.hasCheckGateErrorOccurred ||
      (console.warn({
        msg: "An error has occurred checking the feature gate from criterion override. Only the first occurrence of this error is logged.",
        gateName: e,
        error: n,
      }),
      (j.hasCheckGateErrorOccurred = !0));
  }
  return j.client.checkGate(e, t);
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
      j.hasGetExperimentValueErrorOccurred ||
        (console.warn({
          msg: "An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.",
          experimentName: e,
          defaultValue: r,
          options: n,
          error: i,
        }),
        (j.hasGetExperimentValueErrorOccurred = !0)),
      r
    );
  }
  return j.client.getExperimentValue(e, t, r, n);
});
E(U, "initializeCalled", j.client.initializeCalled.bind(j.client));
E(U, "initializeCompleted", j.client.initializeCompleted.bind(j.client));
E(U, "waitUntilInitializeCompleted", j.client.waitUntilInitializeCompleted.bind(j.client));
E(U, "initialize", j.client.initialize.bind(j.client));
E(U, "initializeWithProvider", j.client.initializeWithProvider.bind(j.client));
E(U, "initializeFromValues", j.client.initializeFromValues.bind(j.client));
E(U, "manuallyLogGateExposure", j.client.manuallyLogGateExposure.bind(j.client));
E(U, "getExperiment", j.client.getExperiment.bind(j.client));
E(U, "manuallyLogExperimentExposure", j.client.manuallyLogExperimentExposure.bind(j.client));
E(U, "manuallyLogLayerExposure", j.client.manuallyLogLayerExposure.bind(j.client));
E(U, "shutdownStatsig", j.client.shutdownStatsig.bind(j.client));
E(U, "overrideGate", j.client.overrideGate.bind(j.client));
E(U, "clearGateOverride", j.client.clearGateOverride.bind(j.client));
E(U, "overrideConfig", j.client.overrideConfig.bind(j.client));
E(U, "clearConfigOverride", j.client.clearConfigOverride.bind(j.client));
E(U, "setOverrides", j.client.setOverrides.bind(j.client));
E(U, "getOverrides", j.client.getOverrides.bind(j.client));
E(U, "clearAllOverrides", j.client.clearAllOverrides.bind(j.client));
E(U, "isCurrentUser", j.client.isCurrentUser.bind(j.client));
E(U, "onGateUpdated", j.client.onGateUpdated.bind(j.client));
E(U, "onExperimentValueUpdated", j.client.onExperimentValueUpdated.bind(j.client));
E(U, "onAnyUpdated", j.client.onAnyUpdated.bind(j.client));
E(U, "updateUser", j.client.updateUser.bind(j.client));
E(U, "updateUserWithProvider", j.client.updateUserWithProvider.bind(j.client));
E(U, "updateUserWithValues", j.client.updateUserWithValues.bind(j.client));
E(U, "getPackageVersion", j.client.getPackageVersion.bind(j.client));
E(U, "getLayer", j.client.getLayer.bind(j.client));
E(U, "getLayerValue", j.client.getLayerValue.bind(j.client));
var ds = U;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = U;
  else {
    var Ka, No;
    ds = window.__FEATUREGATES_JS__;
    var Pl =
      ((Ka = ds) === null || Ka === void 0 || (No = Ka.getPackageVersion) === null || No === void 0
        ? void 0
        : No.call(Ka)) || "4.10.0 or earlier";
    if (Pl !== Vr) {
      var F_ = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(Pl, " when module version ")
        .concat(Vr, " was loading.");
      console.warn(F_);
    }
  }
var Lr,
  Fr,
  $_ =
    (globalThis == null ||
    (Lr = globalThis.process) === null ||
    Lr === void 0 ||
    (Lr = Lr.env) === null ||
    Lr === void 0
      ? void 0
      : Lr.JEST_WORKER_ID) !== void 0,
  N_ =
    !$_ &&
    (globalThis == null ||
    (Fr = globalThis.process) === null ||
    Fr === void 0 ||
    (Fr = Fr.env) === null ||
    Fr === void 0
      ? void 0
      : Fr.NODE_ENV) !== "production",
  z_ = function () {
    var t;
    N_ && (t = console).debug.apply(t, arguments);
  },
  Us = {},
  B_ = "@atlaskit/platform-feature-flags",
  ca = "__PLATFORM_FEATURE_FLAGS__",
  Rv = typeof process < "u" && typeof Us < "u",
  U_ = Rv ? Us.ENABLE_PLATFORM_FF === "true" : !1,
  q_ = Rv ? Us.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  V_ = U_ || q_,
  G_ = { booleanResolver: void 0 },
  la = typeof window < "u" ? window : globalThis;
la[ca] = la[ca] || G_;
function H_(e) {
  if (V_)
    return (
      z_(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        B_,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = la[ca]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = la[ca]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return ds.checkGate(e);
    var a = (n = la[ca]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function Le(e) {
  return H_(e);
}
var W_ = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  K_ = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Y_ = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  J_ = { core: 16, utility: 12 },
  X_ = {
    core: {
      medium: { none: 0, compact: 4, spacious: 4 },
      small: { none: 0, compact: 2.66, spacious: 8 },
    },
    utility: {
      medium: { none: 0, compact: 2, spacious: 6 },
      small: { none: 0, compact: 2, spacious: 6 },
    },
  },
  Al = _.memo(function (t) {
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
    var S = J_[w],
      x = X_[w][O][g],
      I = S + 2 * x;
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
          .concat(I, " ")
          .concat(I),
        role: "presentation",
        dangerouslySetInnerHTML: m,
        className: C([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : w === "utility" ? Y_[g] : O === "small" ? K_[g] : W_[g],
        ]),
      }),
    );
  });
const Z_ = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Al, default: Al }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Ii = Fs(Z_);
var Il;
function Q_() {
  if (Il) return Bn;
  ((Il = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.default = void 0));
  var e = r(ft()),
    t = r(Ii);
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
var Kn = {};
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
function Dl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ey = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  Tl = _.memo(function (t) {
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
          style: Dl(
            Dl({}, v),
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
            s && ey[s],
          ]),
        },
      ),
    );
  });
const ty = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Tl, default: Tl }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Pv = Fs(ty);
var Ml;
function ry() {
  if (Ml) return Kn;
  ((Ml = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.default = void 0));
  var e = r(ft()),
    t = Pv;
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
  return ((n.displayName = "ChevronLeftLargeIcon"), (Kn.default = n), Kn);
}
var Ll;
function ny() {
  if (Ll) return zn;
  ((Ll = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.default = void 0));
  var e = n(ft()),
    t = n(Q_()),
    r = n(ry());
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
var ay = ny();
const iy = tr(ay);
var Yn = {},
  Jn = {},
  Fl;
function oy() {
  if (Fl) return Jn;
  ((Fl = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.default = void 0));
  var e = r(ft()),
    t = r(Ii);
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
  return ((n.displayName = "ChevronRightIcon"), (Jn.default = n), Jn);
}
var Xn = {},
  $l;
function sy() {
  if ($l) return Xn;
  (($l = 1), Object.defineProperty(Xn, "__esModule", { value: !0 }), (Xn.default = void 0));
  var e = r(ft()),
    t = Pv;
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
  return ((n.displayName = "ChevronRightLargeIcon"), (Xn.default = n), Xn);
}
var Nl;
function uy() {
  if (Nl) return Yn;
  ((Nl = 1), Object.defineProperty(Yn, "__esModule", { value: !0 }), (Yn.default = void 0));
  var e = n(ft()),
    t = n(oy()),
    r = n(sy());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronRightIcon", LEGACY_fallbackIcon: r.default }, i),
    );
  return ((a.displayName = "ChevronRightIconMigration"), (Yn.default = a), Yn);
}
var cy = uy();
const ly = tr(cy);
var qs = _.createContext("elevation.surface"),
  dy = function () {
    return _.useContext(qs);
  };
qs.displayName = "SurfaceProvider";
var fy = [
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
  vy = ["className"],
  py = {
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
  Av = {
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
  hy = {
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
  gy = {
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
  by = {
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
  _y = {
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
  ji = _.forwardRef(function (e, t) {
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
      S = ae(e, fy);
    S.className;
    var x = ae(S, vy),
      I = _.createElement(
        n,
        te(
          {
            style: w,
            ref: t,
            className: C([
              "_19itglyw _vchhusvi _r06hglyw",
              i && py[i],
              i && yy(i) && Av[i],
              l && hy[l],
              f && gy[f],
              g && by[g],
              m && _y[m],
              y,
            ]),
          },
          x,
          { "data-testid": O },
        ),
        a,
      );
    return i ? _.createElement(qs.Provider, { value: i }, I) : I;
  });
function yy(e) {
  return e in Av;
}
const zo = () =>
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
  Iv = (...e) => C(e);
function my() {
  return {
    css() {
      throw zo();
    },
    cssMap() {
      throw zo();
    },
    cx: Iv,
    XCSSProp() {
      throw zo();
    },
  };
}
var wy = my(),
  Oy = wy.cx,
  ky = [
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
  zl = {
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
  Bl = {
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
  Sy = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  Ey = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  xy = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  Cy = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  Ry = { root: "_1e0c1txw _vchhusvi" },
  bi = _.memo(
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
        v = ae(e, ky);
      return _.createElement(
        n,
        te({}, v, {
          role: a,
          className: C([
            Ry.root,
            u && Bl[u],
            s && Bl[s],
            u && zl[u],
            c && zl[c],
            i && Cy[i],
            f && Ey[f],
            o && Sy[o],
            p && xy[p],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
bi.displayName = "Flex";
var Py = [
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
  fs = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  Ay = function (t) {
    var r = t.children;
    return _.createElement("span", { className: C([fs.separator]) }, r);
  },
  ti = _.memo(
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
        b = ae(e, Py),
        m = typeof f == "string" ? _.createElement(Ay, null, f) : f,
        w = m
          ? _.Children.toArray(g)
              .filter(Boolean)
              .map(function (O, y) {
                return _.createElement(_.Fragment, { key: y }, f && y > 0 ? m : null, O);
              })
          : g;
      return _.createElement(
        bi,
        te({}, b, {
          as: r,
          role: v,
          alignItems: i,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: u ? "wrap" : void 0,
          xcss: Oy(c === "hug" && fs.hug, c === "fill" && fs.fill, p),
          testId: h,
          ref: t,
        }),
        w,
      );
    }),
  );
ti.displayName = "Inline";
var Iy = "Invariant failed";
function jy(e, t) {
  if (!e) throw new Error(Iy);
}
var jv = _.createContext(!1),
  Dy = function () {
    return _.useContext(jv);
  },
  Ty = jv.Provider,
  My = ["span", "p", "strong", "em"],
  Ly = function (t, r) {
    var n = dy();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return Ul.hasOwnProperty(n) ? Ul[n] : "color.text";
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
  Fy = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  $y = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  Ny = {
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
  Ul = {
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
  zy = _.forwardRef(function (e, t) {
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
    jy(My.includes(n));
    var p = Dy(),
      h = Ly(a, p);
    !s && !p && (s = "medium");
    var v = _.createElement(
      n,
      {
        id: u,
        className: C([
          $r.root,
          s && Fy[s],
          h && Ny[h],
          l && $r.truncation,
          l === 1 && $r.breakAll,
          i && $r["textAlign.".concat(i)],
          c && $y[c],
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
    return p ? v : _.createElement(Ty, { value: !0 }, v);
  });
function By() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var Uy = ["as", "children", "isInset", "testId", "style", "xcss"],
  qy = ["className"],
  Vy = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      i = e.isInset,
      o = e.testId,
      u = e.style,
      s = e.xcss,
      c = ae(e, Uy);
    c.className;
    var l = ae(c, qy);
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
  Gy = [
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
  Hy = ["className"],
  ql = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  Wy = _.forwardRef(function (e, t) {
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
      v = ae(e, Gy),
      g = _.useContext(zs),
      b = _.useCallback(
        function (O, y) {
          (g && g.tracePress(s, O.timeStamp), u(O, y));
        },
        [u, g, s],
      ),
      m = _a({
        fn: b,
        action: "clicked",
        componentName: c || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "15.0.1",
        analyticsData: l,
        actionSubject: "button",
      });
    v.className;
    var w = ae(v, Hy);
    return _.createElement(
      Vy,
      te({ as: "button", tabIndex: h ?? (By() && !n ? 0 : void 0), style: d }, w, {
        type: i,
        onClick: m,
        disabled: n,
        xcss: Iv(ql.root, n && ql.disabled, p),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  Bo = {},
  Zn = {},
  Vl;
function Dv() {
  if (Vl) return Zn;
  ((Vl = 1), Object.defineProperty(Zn, "__esModule", { value: !0 }), (Zn.bind = void 0));
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
var dr = {},
  Gl;
function Ky() {
  if (Gl) return dr;
  Gl = 1;
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
  var t = Dv();
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
var Hl;
function Yy() {
  return (
    Hl ||
      ((Hl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = Dv();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = Ky();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(Bo)),
    Bo
  );
}
var Di = Yy(),
  Jy = function () {
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
  Tv = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: Jy() });
  },
  Xy = Tv(),
  Zy = _.createContext(Tv()),
  Qy = function (e) {
    return e.value++;
  },
  em = function (e) {
    return e ? e.prefix : "";
  },
  tm = function (e) {
    var t = e || Xy,
      r = em(t),
      n = Qy(t),
      a = r + n,
      i = function (o) {
        return a + t.uid(o);
      };
    return { uid: a, gen: i };
  },
  Mv = function () {
    var e = _.useContext(Zy),
      t = _.useState(function () {
        return tm(e);
      })[0];
    return t;
  },
  rm = function () {
    var e = Mv().uid;
    return e;
  },
  nm = function () {
    var e = Mv().gen;
    return e;
  },
  Uo,
  ri = (Uo = k.useId) !== null && Uo !== void 0 ? Uo : void 0;
function am() {
  return ri && Le("platform-dst-react-18-use-id")
    ? Le("platform-dst-react-18-use-id-selector-safe")
      ? ri().replace(/[:«»]/g, "_")
      : ri()
    : "uid".concat(rm());
}
function im() {
  if (ri && Le("platform-dst-react-18-use-id")) {
    var e = am();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return nm();
}
var Lv = function (t) {
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
  om = {
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
  sm = ["children"];
function um(e) {
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
      s = ae(o, sm),
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
var cm = um(function () {
    return { mode: "light" };
  }),
  lm = cm.useTheme;
function dm(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function fm(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var vm = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(fm(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = dm(a);
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
  _i = "-moz-",
  Z = "-webkit-",
  Fv = "comm",
  Vs = "rule",
  Gs = "decl",
  pm = "@import",
  $v = "@keyframes",
  hm = "@layer",
  gm = Math.abs,
  Ti = String.fromCharCode,
  bm = Object.assign;
function _m(e, t) {
  return _e(e, 0) ^ 45
    ? (((((((t << 2) ^ _e(e, 0)) << 2) ^ _e(e, 1)) << 2) ^ _e(e, 2)) << 2) ^ _e(e, 3)
    : 0;
}
function Nv(e) {
  return e.trim();
}
function ym(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, r) {
  return e.replace(t, r);
}
function vs(e, t) {
  return e.indexOf(t);
}
function _e(e, t) {
  return e.charCodeAt(t) | 0;
}
function wa(e, t, r) {
  return e.slice(t, r);
}
function gt(e) {
  return e.length;
}
function Hs(e) {
  return e.length;
}
function Ya(e, t) {
  return (t.push(e), e);
}
function mm(e, t) {
  return e.map(t).join("");
}
var Mi = 1,
  Wr = 1,
  zv = 0,
  Ie = 0,
  he = 0,
  en = "";
function Li(e, t, r, n, a, i, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: i,
    line: Mi,
    column: Wr,
    length: o,
    return: "",
  };
}
function Qn(e, t) {
  return bm(Li("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function wm() {
  return he;
}
function Om() {
  return ((he = Ie > 0 ? _e(en, --Ie) : 0), Wr--, he === 10 && ((Wr = 1), Mi--), he);
}
function Fe() {
  return ((he = Ie < zv ? _e(en, Ie++) : 0), Wr++, he === 10 && ((Wr = 1), Mi++), he);
}
function mt() {
  return _e(en, Ie);
}
function ni() {
  return Ie;
}
function Aa(e, t) {
  return wa(en, e, t);
}
function Oa(e) {
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
function Bv(e) {
  return ((Mi = Wr = 1), (zv = gt((en = e))), (Ie = 0), []);
}
function Uv(e) {
  return ((en = ""), e);
}
function ai(e) {
  return Nv(Aa(Ie - 1, ps(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function km(e) {
  for (; (he = mt()) && he < 33; ) Fe();
  return Oa(e) > 2 || Oa(he) > 3 ? "" : " ";
}
function Sm(e, t) {
  for (; --t && Fe() && !(he < 48 || he > 102 || (he > 57 && he < 65) || (he > 70 && he < 97)); );
  return Aa(e, ni() + (t < 6 && mt() == 32 && Fe() == 32));
}
function ps(e) {
  for (; Fe(); )
    switch (he) {
      case e:
        return Ie;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ps(he);
        break;
      case 40:
        e === 41 && ps(e);
        break;
      case 92:
        Fe();
        break;
    }
  return Ie;
}
function Em(e, t) {
  for (; Fe() && e + he !== 57; ) if (e + he === 84 && mt() === 47) break;
  return "/*" + Aa(t, Ie - 1) + "*" + Ti(e === 47 ? e : Fe());
}
function xm(e) {
  for (; !Oa(mt()); ) Fe();
  return Aa(e, Ie);
}
function Cm(e) {
  return Uv(ii("", null, null, null, [""], (e = Bv(e)), 0, [0], e));
}
function ii(e, t, r, n, a, i, o, u, s) {
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
          vs((x += Q(ai(m), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += ai(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += km(h);
        break;
      case 92:
        x += Sm(ni() - 1, 7);
        continue;
      case 47:
        switch (mt()) {
          case 42:
          case 47:
            Ya(Rm(Em(Fe(), ni()), t, r), s);
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
                Ya(p > 32 ? Kl(x + ";", n, r, d - 1) : Kl(Q(x, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            x += ";";
          default:
            if ((Ya((S = Wl(x, t, r, c, l, a, u, w, (O = []), (y = []), d)), i), m === 123))
              if (l === 0) ii(x, t, S, S, O, i, d, u, y);
              else
                switch (f === 99 && _e(x, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ii(
                      e,
                      S,
                      S,
                      n && Ya(Wl(e, S, S, 0, 0, a, u, w, a, (O = []), d), y),
                      a,
                      y,
                      d,
                      u,
                      n ? O : y,
                    );
                    break;
                  default:
                    ii(x, S, S, S, [""], y, 0, u, y);
                }
        }
        ((c = l = p = 0), (v = b = 1), (w = x = ""), (d = o));
        break;
      case 58:
        ((d = 1 + gt(x)), (p = h));
      default:
        if (v < 1) {
          if (m == 123) --v;
          else if (m == 125 && v++ == 0 && Om() == 125) continue;
        }
        switch (((x += Ti(m)), m * v)) {
          case 38:
            b = l > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            ((u[c++] = (gt(x) - 1) * b), (b = 1));
            break;
          case 64:
            (mt() === 45 && (x += ai(Fe())), (f = mt()), (l = d = gt((w = x += xm(ni())))), m++);
            break;
          case 45:
            h === 45 && gt(x) == 2 && (v = 0);
        }
    }
  return i;
}
function Wl(e, t, r, n, a, i, o, u, s, c, l) {
  for (var d = a - 1, f = a === 0 ? i : [""], p = Hs(f), h = 0, v = 0, g = 0; h < n; ++h)
    for (var b = 0, m = wa(e, d + 1, (d = gm((v = o[h])))), w = e; b < p; ++b)
      (w = Nv(v > 0 ? f[b] + " " + m : Q(m, /&\f/g, f[b]))) && (s[g++] = w);
  return Li(e, t, r, a === 0 ? Vs : u, s, c, l);
}
function Rm(e, t, r) {
  return Li(e, t, r, Fv, Ti(wm()), wa(e, 2, -2), 0);
}
function Kl(e, t, r, n) {
  return Li(e, t, r, Gs, wa(e, 0, n), wa(e, n + 1, -1), n);
}
function Gr(e, t) {
  for (var r = "", n = Hs(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function Pm(e, t, r, n) {
  switch (e.type) {
    case hm:
      if (e.children.length) break;
    case pm:
    case Gs:
      return (e.return = e.return || e.value);
    case Fv:
      return "";
    case $v:
      return (e.return = e.value + "{" + Gr(e.children, n) + "}");
    case Vs:
      e.value = e.props.join(",");
  }
  return gt((r = Gr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function Am(e) {
  var t = Hs(e);
  return function (r, n, a, i) {
    for (var o = "", u = 0; u < t; u++) o += e[u](r, n, a, i) || "";
    return o;
  };
}
function Im(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function jm(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var Dm = function (t, r, n) {
    for (var a = 0, i = 0; (a = i), (i = mt()), a === 38 && i === 12 && (r[n] = 1), !Oa(i); ) Fe();
    return Aa(t, Ie);
  },
  Tm = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (Oa(a)) {
        case 0:
          (a === 38 && mt() === 12 && (r[n] = 1), (t[n] += Dm(Ie - 1, r, n)));
          break;
        case 2:
          t[n] += ai(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = mt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Ti(a);
      }
    while ((a = Fe()));
    return t;
  },
  Mm = function (t, r) {
    return Uv(Tm(Bv(t), r));
  },
  Yl = new WeakMap(),
  Lm = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Yl.get(n)) && !a) {
        Yl.set(t, !0);
        for (var i = [], o = Mm(r, i), u = n.props, s = 0, c = 0; s < o.length; s++)
          for (var l = 0; l < u.length; l++, c++)
            t.props[c] = i[s] ? o[s].replace(/&\f/g, u[l]) : u[l] + " " + o[s];
      }
    }
  },
  Fm = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function qv(e, t) {
  switch (_m(e, t)) {
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
      return Z + e + _i + e + me + e + e;
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
                "$1" + Z + "$2-$3$1" + _i + (_e(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~vs(e, "stretch") ? qv(Q(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (_e(e, t + 1) !== 115) break;
    case 6444:
      switch (_e(e, gt(e) - 3 - (~vs(e, "!important") && 10))) {
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
var $m = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Gs:
          t.return = qv(t.value, t.length);
          break;
        case $v:
          return Gr([Qn(t, { value: Q(t.value, "@", "@" + Z) })], a);
        case Vs:
          if (t.length)
            return mm(t.props, function (i) {
              switch (ym(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Gr([Qn(t, { props: [Q(i, /:(read-\w+)/, ":" + _i + "$1")] })], a);
                case "::placeholder":
                  return Gr(
                    [
                      Qn(t, { props: [Q(i, /:(plac\w+)/, ":" + Z + "input-$1")] }),
                      Qn(t, { props: [Q(i, /:(plac\w+)/, ":" + _i + "$1")] }),
                      Qn(t, { props: [Q(i, /:(plac\w+)/, me + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  Nm = [$m],
  zm = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (v) {
        var g = v.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || Nm,
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
      c = [Lm, Fm];
    {
      var l,
        d = [
          Pm,
          Im(function (v) {
            l.insert(v);
          }),
        ],
        f = Am(c.concat(a, d)),
        p = function (g) {
          return Gr(Cm(g), f);
        };
      s = function (g, b, m, w) {
        ((l = m), p(g ? g + "{" + b.styles + "}" : b.styles), w && (h.inserted[b.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new vm({
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
  qo = { exports: {} },
  ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jl;
function Bm() {
  if (Jl) return ee;
  Jl = 1;
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
var Xl;
function Um() {
  return (Xl || ((Xl = 1), (qo.exports = Bm())), qo.exports);
}
var Vo, Zl;
function qm() {
  if (Zl) return Vo;
  Zl = 1;
  var e = Um(),
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
  return ((Vo = p), Vo);
}
qm();
var Vm = !0;
function Vv(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var Ws = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || Vm === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  Gv = function (t, r, n) {
    Ws(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do (t.insert(r === i ? "." + a : "", i, t.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function Gm(e) {
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
var Hm = {
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
  Wm = /[A-Z]|^ms/g,
  Km = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Hv = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Ql = function (t) {
    return t != null && typeof t != "boolean";
  },
  Go = jm(function (e) {
    return Hv(e) ? e : e.replace(Wm, "-$&").toLowerCase();
  }),
  ed = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(Km, function (n, a, i) {
            return ((bt = { name: a, styles: i, next: bt }), a);
          });
    }
    return Hm[t] !== 1 && !Hv(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function ka(e, t, r) {
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
      return Ym(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = bt,
          c = r(e);
        return ((bt = s), ka(e, t, c));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function Ym(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += ka(e, t, r[a]) + ";";
  else
    for (var i in r) {
      var o = r[i];
      if (typeof o != "object") {
        var u = o;
        t != null && t[u] !== void 0
          ? (n += i + "{" + t[u] + "}")
          : Ql(u) && (n += Go(i) + ":" + ed(i, u) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var s = 0; s < o.length; s++) Ql(o[s]) && (n += Go(i) + ":" + ed(i, o[s]) + ";");
      else {
        var c = ka(e, t, o);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Go(i) + ":" + c + ";";
            break;
          }
          default:
            n += i + "{" + c + "}";
        }
      }
    }
  return n;
}
var td = /label:\s*([^\s;{]+)\s*(;|$)/g,
  bt;
function Ks(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  bt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) ((n = !1), (a += ka(r, t, i)));
  else {
    var o = i;
    a += o[0];
  }
  for (var u = 1; u < e.length; u++)
    if (((a += ka(r, t, e[u])), n)) {
      var s = i;
      a += s[u];
    }
  td.lastIndex = 0;
  for (var c = "", l; (l = td.exec(a)) !== null; ) c += "-" + l[1];
  var d = Gm(a) + c;
  return { name: d, styles: a, next: bt };
}
var Jm = function (t) {
    return t();
  },
  Xm = wu.useInsertionEffect ? wu.useInsertionEffect : !1,
  Wv = Xm || Jm,
  Kv = _.createContext(typeof HTMLElement < "u" ? zm({ key: "css" }) : null);
Kv.Provider;
var Yv = function (t) {
    return _.forwardRef(function (r, n) {
      var a = _.useContext(Kv);
      return t(r, a, n);
    });
  },
  Jv = _.createContext({}),
  Ys = {}.hasOwnProperty,
  hs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Zm = function (t, r) {
    var n = {};
    for (var a in r) Ys.call(r, a) && (n[a] = r[a]);
    return ((n[hs] = t), n);
  },
  Qm = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      Ws(r, n, a),
      Wv(function () {
        return Gv(r, n, a);
      }),
      null
    );
  },
  e0 = Yv(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[hs],
      i = [n],
      o = "";
    typeof e.className == "string"
      ? (o = Vv(t.registered, i, e.className))
      : e.className != null && (o = e.className + " ");
    var u = Ks(i, void 0, _.useContext(Jv));
    o += t.key + "-" + u.name;
    var s = {};
    for (var c in e) Ys.call(e, c) && c !== "css" && c !== hs && (s[c] = e[c]);
    return (
      (s.className = o),
      r && (s.ref = r),
      _.createElement(
        _.Fragment,
        null,
        _.createElement(Qm, { cache: t, serialized: u, isStringTag: typeof a == "string" }),
        _.createElement(a, s),
      )
    );
  }),
  t0 = e0,
  Ft = function (t, r) {
    var n = arguments;
    if (r == null || !Ys.call(r, "css")) return _.createElement.apply(void 0, n);
    var a = n.length,
      i = new Array(a);
    ((i[0] = t0), (i[1] = Zm(t, r)));
    for (var o = 2; o < a; o++) i[o] = n[o];
    return _.createElement.apply(null, i);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Ft || (Ft = {}));
function Pt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Ks(t);
}
var r0 = function e(t) {
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
function n0(e, t, r) {
  var n = [],
    a = Vv(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var a0 = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Wv(function () {
        for (var a = 0; a < n.length; a++) Gv(r, n[a], !1);
      }),
      null
    );
  },
  i0 = Yv(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        var d = Ks(c, t.registered);
        return (r.push(d), Ws(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        return n0(t.registered, n, r0(c));
      },
      i = { css: n, cx: a, theme: _.useContext(Jv) },
      o = e.children(i);
    return _.createElement(
      _.Fragment,
      null,
      _.createElement(a0, { cache: t, serializedArr: r }),
      o,
    );
  });
function o0(e, t) {
  var r = _.useRef(!0);
  _.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Xv = 2,
  gs = Pt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Xv,
  }),
  bs = Pt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Xv,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  s0 = Pt({
    "&:focus": gs,
    "&:focus-visible": gs,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  u0 = Pt({
    "&:focus": bs,
    "&:focus-visible": bs,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Zv = _.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? bs : gs,
      i = r ? u0 : s0,
      o = typeof n > "u" ? i : n === "on" && a;
    return Ft(i0, null, function (u) {
      var s = u.css,
        c = u.cx;
      return _.Children.only(
        o ? _.cloneElement(t, { className: c([s(o), t.props.className]) }) : t,
      );
    });
  });
Zv.displayName = "FocusRing";
function Lt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var c0 = 9;
function rd(e) {
  e.keyCode !== c0 && Lt(e);
}
var l0 = {
    onMouseDownCapture: Lt,
    onMouseUpCapture: Lt,
    onKeyDownCapture: rd,
    onKeyUpCapture: rd,
    onTouchStartCapture: Lt,
    onTouchEndCapture: Lt,
    onPointerDownCapture: Lt,
    onPointerUpCapture: Lt,
    onClickCapture: Lt,
    onClick: Lt,
  },
  d0 = {};
function f0(e) {
  var t = e.isInteractive;
  return t ? d0 : l0;
}
var nd = "rgba(179, 212, 255, 0.6)",
  ad = {
    background: {
      default: {
        default: {
          light: "var(--ds-background-neutral, ".concat(Fn, ")"),
          dark: "var(--ds-background-neutral, ".concat($n, ")"),
        },
        hover: {
          light: "var(--ds-background-neutral-hovered, ".concat(qc, ")"),
          dark: "var(--ds-background-neutral-hovered, ".concat(Vc, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-pressed, ".concat(nd, ")"),
          dark: "var(--ds-background-neutral-pressed, ".concat(qa, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Fn, ")"),
          dark: "var(--ds-background-disabled, ".concat($n, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(jr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(jr, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-background-brand-bold, ".concat(Ar, ")"),
          dark: "var(--ds-background-brand-bold, ".concat(Nc, ")"),
        },
        hover: {
          light: "var(--ds-background-brand-bold-hovered, ".concat(Bc, ")"),
          dark: "var(--ds-background-brand-bold-hovered, ".concat(qa, ")"),
        },
        active: {
          light: "var(--ds-background-brand-bold-pressed, ".concat(Uc, ")"),
          dark: "var(--ds-background-brand-bold-pressed, ".concat(zc, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Fn, ")"),
          dark: "var(--ds-background-disabled, ".concat($n, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(jr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(jr, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-background-warning-bold, ".concat($c, ")"),
          dark: "var(--ds-background-warning-bold, ".concat($c, ")"),
        },
        hover: {
          light: "var(--ds-background-warning-bold-hovered, ".concat(Fc, ")"),
          dark: "var(--ds-background-warning-bold-hovered, ".concat(Fc, ")"),
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
          light: "var(--ds-background-danger-bold, ".concat(Lc, ")"),
          dark: "var(--ds-background-danger-bold, ".concat(Lc, ")"),
        },
        hover: {
          light: "var(--ds-background-danger-bold-hovered, ".concat(Mc, ")"),
          dark: "var(--ds-background-danger-bold-hovered, ".concat(Mc, ")"),
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
          light: "var(--ds-background-neutral-subtle-hovered, ".concat(qc, ")"),
          dark: "var(--ds-background-neutral-subtle-hovered, ".concat(Vc, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-subtle-pressed, ".concat(nd, ")"),
          dark: "var(--ds-background-neutral-subtle-pressed, ".concat(qa, ")"),
        },
        disabled: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(jr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(jr, ")"),
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
          light: "var(--ds-text, ".concat(ya, ")"),
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
          light: "var(--ds-text-inverse, ".concat(Jt, ")"),
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
          light: "var(--ds-text-warning-inverse, ".concat(Ir, ")"),
          dark: "var(--ds-text-warning-inverse, ".concat(Ir, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Nn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ir, ")"),
          dark: "var(--ds-text-selected, ".concat(Ir, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ir, ")"),
          dark: "var(--ds-text-selected, ".concat(Ir, ")"),
        },
      },
      danger: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Jt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Jt, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Nn, ")"),
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
          light: "var(--ds-link, ".concat(Ar, ")"),
          dark: "var(--ds-link, ".concat(Nc, ")"),
        },
        hover: {
          light: "var(--ds-link, ".concat(Bc, ")"),
          dark: "var(--ds-link, ".concat(qa, ")"),
        },
        active: {
          light: "var(--ds-link-pressed, ".concat(Uc, ")"),
          dark: "var(--ds-link-pressed, ".concat(zc, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(So, ")"),
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
          light: "var(--ds-text, ".concat(ya, ")"),
          dark: "var(--ds-text, ".concat(ot, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Ar, ")"),
          dark: "var(--ds-text, ".concat(Ar, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(So, ")"),
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
          light: "var(--ds-text-subtle, ".concat(Cb, ")"),
          dark: "var(--ds-text-subtle, ".concat(ot, ")"),
        },
        hover: {
          light: "var(--ds-text-subtle, ".concat(xb, ")"),
          dark: "var(--ds-text-subtle, ".concat(Eb, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Rb, ")"),
          dark: "var(--ds-text, ".concat(Pb, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(So, ")"),
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
function ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? id(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : id(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Xt = 8,
  Ho = ["default", "primary", "danger", "warning"],
  _s = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  v0 = { default: _s.default, compact: _s.compact, none: "inherit" },
  p0 = {
    default: "0 ".concat(Xt + Xt / 4, "px"),
    compact: "0 ".concat(Xt + Xt / 4, "px"),
    none: "0",
  },
  h0 = { compact: "0 ".concat(Xt / 4, "px"), default: "0 ".concat(Xt / 4, "px"), none: "0" },
  g0 = { default: "middle", compact: "middle", none: "baseline" },
  Qv = { content: "0 ".concat(Xt / 4, "px"), icon: "0 ".concat(Xt / 4, "px") },
  ep = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  b0 = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #172B4D)",
    "&::after": ne(ne({}, ep), {}, { content: '""', borderColor: "var(--ds-border, #091E4224)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #091E4224)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #091E424F)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  _0 = {
    background: "var(--ds-background-brand-bold, #0C66E4)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #0055CC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #09326C)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #0C66E4)",
    },
  },
  y0 = {
    background: "transparent",
    color: "var(--ds-link, #0C66E4)",
    "&:hover": { color: "var(--ds-link, #0C66E4)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #0055CC)", textDecoration: "underline" },
  },
  m0 = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #091E420F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #091E4224)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  w0 = {
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
  O0 = {
    background: "var(--ds-background-warning-bold, #F5CD47)",
    color: "var(--ds-text-warning-inverse, #172B4D)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #E2B203)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #CF9F02)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #F5CD47)",
    },
  },
  k0 = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #5D1F1A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  S0 = {
    background: "var(--ds-background-selected, #E9F2FF)",
    color: "var(--ds-text-selected, #0C66E4)",
    "&:not([disabled])::after": ne(
      ne({}, ep),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #0C66E4)" },
    ),
  },
  od = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function sd(e) {
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
    background: sd({ group: ad.background[t], key: r, mode: n }),
    color: "".concat(sd({ group: ad.color[t], key: r, mode: n }), " !important"),
  };
}
function E0(e) {
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
          height: _s[r],
          lineHeight: v0[r],
          padding: o ? h0[r] : p0[r],
          verticalAlign: g0[r],
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
              od,
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
          ? S0
          : ne(
              ne(
                ne(
                  ne(
                    ne(
                      ne(
                        ne(ne({}, t === "default" && b0), t === "primary" && _0),
                        t === "link" && y0,
                      ),
                      t === "subtle" && m0,
                    ),
                    t === "subtle-link" && w0,
                  ),
                  t === "warning" && O0,
                ),
                t === "danger" && k0,
              ),
              {},
              {
                "&[disabled]": {
                  color: "var(--ds-text-disabled, #091E424F)",
                  backgroundColor: Ho.includes(t)
                    ? "var(--ds-background-disabled, #091E4208)"
                    : "transparent",
                  cursor: "not-allowed",
                  textDecoration: "none",
                  "&:hovered": {
                    backgroundColor: Ho.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                  "&:active": {
                    backgroundColor: Ho.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                },
              },
              od,
            )),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function ud(e) {
  var t = e.spacing;
  return Pt({
    display: "flex",
    margin: t === "none" ? 0 : Qv.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function x0(e) {
  var t = e.spacing;
  return Pt({
    margin: t === "none" ? 0 : Qv.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function C0(e) {
  var t = e.hasOverlay;
  return Pt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var R0 = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Js = function (t) {
    return t && _.isValidElement(t) && t.type === Lv;
  },
  P0 = [
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
  A0 = { "> *": { pointerEvents: "none" } },
  I0 = Pt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  j0 = Pt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  cd = function (t, r) {
    return !t || Js(t) ? null : r;
  },
  D0 = function (t, r) {
    return Js(t) ? t : t ? Ft("span", { css: r }, t) : null;
  },
  T0 = k.forwardRef(function (t, r) {
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
      I = t.onFocus,
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
      $ = ae(t, P0),
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
    o0(A, u);
    var oe = _.useContext(zs),
      ue = _.useCallback(
        function (pe, qe) {
          (oe && oe.tracePress(g, pe.timeStamp), x(pe, qe));
        },
        [x, oe, g],
      ),
      le = _a({
        fn: ue,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "23.5.2",
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
      Ue = Pt(C0({ hasOverlay: ce })),
      Oe = !m && !ce,
      nt = {};
    return (
      (O || m || i === "warning") &&
        (nt = {
          "[data-theme] & circle": {
            stroke: "".concat(
              O || m
                ? "var(--ds-icon-subtle, ".concat(ya, ")")
                : "var(--ds-icon-warning-inverse, ".concat(ya, ")"),
              " !important",
            ),
          },
        }),
      Ft(
        Zv,
        null,
        Ft(
          p,
          te(
            {},
            $,
            {
              ref: be,
              className: l,
              css: [s, Oe ? null : A0],
              "data-has-overlay": ce ? !0 : void 0,
              "data-testid": X,
              disabled: m,
              href: Oe ? d : void 0,
              onBlur: y,
              onClick: le,
              onFocus: I,
              onMouseDown: ge,
              tabIndex: m ? -1 : J,
              type: q,
            },
            f0({ isInteractive: Oe }),
          ),
          v ? Ft("span", { css: [Ue, ud({ spacing: z }), cd(c, I0)] }, v) : null,
          D0(c, [Ue, x0({ spacing: z })]),
          h ? Ft("span", { css: [Ue, ud({ spacing: z }), cd(c, j0)] }, h) : null,
          T ? Ft("span", { css: [R0, nt] }, T) : null,
        ),
      )
    );
  });
function M0(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Js(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var L0 = [
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
  ld = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  Xs = k.memo(
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
        m = ae(t, L0),
        w = lm(),
        O = w.mode,
        y = M0({ children: i, iconBefore: o, iconAfter: u }),
        S = _.useState(!1),
        x = K(S, 2),
        I = x[0],
        D = x[1],
        R = _.useCallback(
          function (z) {
            (d(z), ld && D(!0));
          },
          [d, D],
        ),
        T = _.useCallback(
          function (z) {
            (p(z), ld && D(!1));
          },
          [p, D],
        ),
        B = _.useMemo(
          function () {
            return E0({
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
        T0,
        te({}, m, {
          ref: r,
          appearance: a,
          buttonCss: B,
          children: i,
          "data-firefox-is-active": I ? !0 : void 0,
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
Xs.displayName = "Button";
function dd(e) {
  return k.createElement(Xs, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function F0(e) {
  return k.createElement(Xs, te({}, e, { appearance: "subtle" }));
}
var $0 = { container: "_1e0c1txw _kqswh2mm" };
function N0(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return k.createElement(
    ji,
    { as: "li", testId: r, key: t, xcss: $0.container, paddingInline: "space.100" },
    k.createElement(
      zy,
      { testId: r && "".concat(r, "-text") },
      k.createElement(Lv, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var fd = {},
  vd =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function z0(e, t) {
  return !!(e === t || (vd(e) && vd(t)));
}
function B0(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!z0(e[r], t[r])) return !1;
  return !0;
}
function U0(e, t) {
  t === void 0 && (t = B0);
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
var q0 = function (t, r, n, a) {
  var i = n.max,
    o = n.ellipsis,
    u = n.transform,
    s = t.length,
    c = s > i,
    l = c && i - 4 < r,
    d = c && r < s - i + 3,
    f = U0(function () {
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
function V0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ys = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  G0 = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.14",
  };
function hd(e) {
  var t = e.chevronDirection,
    r = t === "left" ? iy : ly;
  return k.createElement(
    ji,
    { as: "span", xcss: ys.navigatorIconWrapper },
    k.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function H0(e, t) {
  var r = e.components,
    n = r === void 0 ? fd : r,
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
    g = v === void 0 ? fd : v,
    b = e.max,
    m = b === void 0 ? 7 : b,
    w = e.onChange,
    O = w === void 0 ? we : w,
    y = e.pages,
    S = e.getPageLabel,
    x = e.renderEllipsis,
    I = x === void 0 ? N0 : x,
    D = e.analyticsContext,
    R = e.testId,
    T = e.isDisabled,
    B = Ub(o, function () {
      return i || 0;
    }),
    z = K(B, 2),
    V = z[0],
    J = z[1],
    G = _a(
      V0(
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
        G0,
      ),
    ),
    q = function ($, A, be) {
      var oe = y[V],
        ue = "".concat(l, " ").concat(S ? S($, A) : $),
        le = $ === oe;
      return k.createElement(
        ti,
        { as: "li", xcss: ys.paginationMenuItem, key: "page-".concat(S ? S($, A) : A) },
        k.createElement(
          F0,
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
    ji,
    { testId: R, style: g, ref: t, "aria-label": s, as: "nav" },
    k.createElement(
      ti,
      { space: "space.0", alignBlock: "center" },
      k.createElement(dd, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function ($) {
          return G({ event: $, selectedPageIndex: V - 1 });
        },
        isDisabled: T || V === 0,
        iconBefore: k.createElement(hd, { chevronDirection: "left" }),
        "aria-label": f,
        testId: R && "".concat(R, "--left-navigator"),
      }),
      k.createElement(
        ti,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: ys.paginationMenu },
        q0(y, V, { max: m, ellipsis: I, transform: q }, R),
      ),
      k.createElement(dd, {
        key: "right-navigator",
        component: n.Next,
        onClick: function ($) {
          return G({ event: $, selectedPageIndex: V + 1 });
        },
        isDisabled: T || V === y.length - 1,
        iconBefore: k.createElement(hd, { chevronDirection: "right" }),
        "aria-label": h,
        testId: R && "".concat(R, "--right-navigator"),
      }),
    ),
  );
}
var W0 = _.memo(_.forwardRef(H0));
function K0(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, tp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function tp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (tp = function () {
    return !!e;
  })();
}
var Y0 = (function (e) {
    function t() {
      var r;
      fe(this, t);
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
      return (
        (r = K0(this, t, [].concat(a))),
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
            return k.createElement(W0, {
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
  J0 = ["isRanking", "testId"],
  X0 = [
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
function ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var bd = "--local-dynamic-table-text-color",
  Z0 = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = ae(t, J0);
    return _.createElement(
      "thead",
      te({ "data-testid": n }, a, { className: C(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  Q0 = _.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      i = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var u = e.style,
      s = e.testId,
      c = ae(e, X0),
      l = ea(
        ea(ea({}, u), r && lv({ width: r })),
        {},
        E({}, bd, "var(--ds-text-subtlest, #626F86)"),
      ),
      d = a === pr,
      f = a === hi,
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
        style: ea(
          ea({}, l),
          {},
          { "--_17ckjys": uv("var(--ds-text-subtle, ".concat("var(".concat(bd, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function ew(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, rp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function rp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (rp = function () {
    return !!e;
  })();
}
function tw(e) {
  return (function (t) {
    function r() {
      var n;
      fe(this, r);
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return (
        (n = ew(this, r, [].concat(i))),
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
var ta = {},
  _d;
function rw() {
  if (_d) return ta;
  ((_d = 1), Object.defineProperty(ta, "__esModule", { value: !0 }), (ta.default = void 0));
  var e = r(ft()),
    t = r(Ii);
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
  return ((n.displayName = "ArrowDownIcon"), (ta.default = n), ta);
}
var nw = rw();
const aw = tr(nw);
var ra = {},
  yd;
function iw() {
  if (yd) return ra;
  ((yd = 1), Object.defineProperty(ra, "__esModule", { value: !0 }), (ra.default = void 0));
  var e = r(ft()),
    t = r(Ii);
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
  return ((n.displayName = "ArrowUpIcon"), (ra.default = n), ra);
}
var ow = iw();
const sw = tr(ow);
var uw = "Escape";
function cw(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = _.useRef(!1),
    a = _.useCallback(
      function (o) {
        r || n.current || o.key !== uw || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    i = _.useCallback(function () {
      n.current = !1;
    }, []);
  _.useEffect(
    function () {
      if (!(r && Le("platform_only_attach_escape_handler_on_view")))
        return Di.bindAll(
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
function na(e) {
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
var lw = _.createContext(null),
  dw = _.createContext(null);
function fw() {
  var e = _.useContext(dw);
  return e;
}
function vw(e) {
  var t = e.isOpen,
    r = e.onClose,
    n = _.useContext(lw),
    a = fw();
  _.useEffect(
    function () {
      if (n !== null && t) return n.onClose(r, { namespace: a });
    },
    [n, t, a, r],
  );
}
var sa = { none: 0, small: 100, medium: 350, large: 700 },
  Wo = 0.5,
  pw = { none: sa.none, small: sa.small * Wo, medium: sa.medium * Wo, large: sa.large * Wo },
  hw = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  gw = function () {
    if (!hw()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  bw = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  _w = function () {
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
      }, bw(t)),
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
  np = { appear: !0, isExiting: !1 },
  ap = _.createContext(np),
  md = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : np;
    return k.createElement(ap.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  wd = function (t) {
    var r = [];
    return (
      _.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  yw = function (t, r) {
    for (var n = r.concat([]), a = mw(r), i = 0; i < t.length; i++) {
      var o = t[i],
        u = !a[o.key];
      u && n.splice(i + 1, 0, o);
    }
    return n;
  },
  mw = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  ww = function (t, r) {
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
  ip = _.memo(function (e) {
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
      O = wd(m),
      y = wd(w);
    w !== n && s([w, n]);
    var S = ww(y, O),
      x = !!S.size,
      I = y;
    if ((x && (I = yw(y, O)), a))
      if (d.length) I = d;
      else {
        var D = I.filter(function (R) {
          return S.has(R.key);
        });
        D.length && f(D);
      }
    return (
      S.size
        ? (I = I.map(function (R) {
            var T = S.has(R.key);
            return md(R, {
              appear: !0,
              isExiting: T,
              onFinish: T
                ? function () {
                    (S.delete(R.key), S.size === 0 && (s([null, n]), f([])));
                  }
                : void 0,
            });
          }))
        : (I = I.map(function (R) {
            return md(R, v);
          })),
      I
    );
  }),
  Ow = function () {
    return _.useContext(ap);
  };
ip.displayName = "ExitingPersistence";
function kw() {
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
var Sw = _.createContext(function () {
    return { isReady: !0, delay: 0, ref: we };
  }),
  Ew = function () {
    var t = kw(),
      r = _.useContext(Sw);
    return r(t);
  },
  xw = function (t) {
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
      p = Ew(),
      h = Ow(),
      v = h.isExiting,
      g = h.onFinish,
      b = h.appear,
      m = _w(),
      w = c || !p.isReady,
      O = v ? 0 : p.delay,
      y = v ? "exiting" : "entering",
      S = _.useState(b),
      x = K(S, 2),
      I = x[0],
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
            if (gw()) {
              T();
              return;
            }
            return (
              D(!0),
              m(T, v ? pw[f] : sa[f] + O),
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
          className: I
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
  Cw = { top: "bottom", bottom: "top", left: "right", right: "left" },
  Rw = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      i = t.entranceDirection,
      o = t.exitDirection,
      u = t.distance,
      s = u === void 0 ? "proportional" : u,
      c = t.onFinish,
      l = t.isPaused,
      d = i !== void 0 ? Cw[i] : void 0,
      f =
        o || d
          ? "fade-out-from-".concat(o || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return k.createElement(
      xw,
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
  Pw = _.createContext();
_.createContext();
var Aw = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  Iw = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  jw = function (t, r) {
    if (typeof t == "function") return Iw(t, r);
    t != null && (t.current = r);
  },
  Od = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        i = n[1];
      return ((r[a] = i), r);
    }, {});
  },
  kd =
    typeof window < "u" && window.document && window.document.createElement
      ? _.useLayoutEffect
      : _.useEffect,
  Re = "top",
  et = "bottom",
  tt = "right",
  Pe = "left",
  Zs = "auto",
  Ia = [Re, et, tt, Pe],
  Kr = "start",
  Sa = "end",
  Dw = "clippingParents",
  op = "viewport",
  aa = "popper",
  Tw = "reference",
  Sd = Ia.reduce(function (e, t) {
    return e.concat([t + "-" + Kr, t + "-" + Sa]);
  }, []),
  sp = [].concat(Ia, [Zs]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Kr, t + "-" + Sa]);
  }, []),
  Mw = "beforeRead",
  Lw = "read",
  Fw = "afterRead",
  $w = "beforeMain",
  Nw = "main",
  zw = "afterMain",
  Bw = "beforeWrite",
  Uw = "write",
  qw = "afterWrite",
  Vw = [Mw, Lw, Fw, $w, Nw, zw, Bw, Uw, qw];
function xt(e) {
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
function Qs(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = $e(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Gw(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      i = t.elements[r];
    !Qe(i) ||
      !xt(i) ||
      (Object.assign(i.style, n),
      Object.keys(a).forEach(function (o) {
        var u = a[o];
        u === !1 ? i.removeAttribute(o) : i.setAttribute(o, u === !0 ? "" : u);
      }));
  });
}
function Hw(e) {
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
          !xt(a) ||
          (Object.assign(a.style, u),
          Object.keys(i).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const Ww = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Gw,
  effect: Hw,
  requires: ["computeStyles"],
};
function wt(e) {
  return e.split("-")[0];
}
var fr = Math.max,
  yi = Math.min,
  Yr = Math.round;
function ms() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function up() {
  return !/^((?!chrome|android).)*safari/i.test(ms());
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
    s = !up() && r,
    c = (n.left + (s && u ? u.offsetLeft : 0)) / a,
    l = (n.top + (s && u ? u.offsetTop : 0)) / i,
    d = n.width / a,
    f = n.height / i;
  return { width: d, height: f, top: l, right: c + d, bottom: l + f, left: c, x: c, y: l };
}
function eu(e) {
  var t = Jr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function cp(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Qs(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function qt(e) {
  return $e(e).getComputedStyle(e);
}
function Kw(e) {
  return ["table", "td", "th"].indexOf(xt(e)) >= 0;
}
function rr(e) {
  return ((hr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Fi(e) {
  return xt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Qs(e) ? e.host : null) || rr(e);
}
function Ed(e) {
  return !Qe(e) || qt(e).position === "fixed" ? null : e.offsetParent;
}
function Yw(e) {
  var t = /firefox/i.test(ms()),
    r = /Trident/i.test(ms());
  if (r && Qe(e)) {
    var n = qt(e);
    if (n.position === "fixed") return null;
  }
  var a = Fi(e);
  for (Qs(a) && (a = a.host); Qe(a) && ["html", "body"].indexOf(xt(a)) < 0; ) {
    var i = qt(a);
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
function ja(e) {
  for (var t = $e(e), r = Ed(e); r && Kw(r) && qt(r).position === "static"; ) r = Ed(r);
  return r && (xt(r) === "html" || (xt(r) === "body" && qt(r).position === "static"))
    ? t
    : r || Yw(e) || t;
}
function tu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function da(e, t, r) {
  return fr(e, yi(t, r));
}
function Jw(e, t, r) {
  var n = da(e, t, r);
  return n > r ? r : n;
}
function lp() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function dp(e) {
  return Object.assign({}, lp(), e);
}
function fp(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var Xw = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    dp(typeof t != "number" ? t : fp(t, Ia))
  );
};
function Zw(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    i = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    u = wt(r.placement),
    s = tu(u),
    c = [Pe, tt].indexOf(u) >= 0,
    l = c ? "height" : "width";
  if (!(!i || !o)) {
    var d = Xw(a.padding, r),
      f = eu(i),
      p = s === "y" ? Re : Pe,
      h = s === "y" ? et : tt,
      v = r.rects.reference[l] + r.rects.reference[s] - o[s] - r.rects.popper[l],
      g = o[s] - r.rects.reference[s],
      b = ja(i),
      m = b ? (s === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      w = v / 2 - g / 2,
      O = d[p],
      y = m - f[l] - d[h],
      S = m / 2 - f[l] / 2 + w,
      x = da(O, S, y),
      I = s;
    r.modifiersData[n] = ((t = {}), (t[I] = x), (t.centerOffset = x - S), t);
  }
}
function Qw(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (cp(t.elements.popper, a) && (t.elements.arrow = a)));
}
const e1 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Zw,
  effect: Qw,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Xr(e) {
  return e.split("-")[1];
}
var t1 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function r1(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Yr(r * a) / a || 0, y: Yr(n * a) / a || 0 };
}
function xd(e) {
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
    var S = ja(r),
      x = "clientHeight",
      I = "clientWidth";
    if (
      (S === $e(r) &&
        ((S = rr(r)),
        qt(S).position !== "static" &&
          u === "absolute" &&
          ((x = "scrollHeight"), (I = "scrollWidth"))),
      (S = S),
      a === Re || ((a === Pe || a === tt) && i === Sa))
    ) {
      O = et;
      var D = d && S === y && y.visualViewport ? y.visualViewport.height : S[x];
      ((v -= D - n.height), (v *= s ? 1 : -1));
    }
    if (a === Pe || ((a === Re || a === et) && i === Sa)) {
      w = tt;
      var R = d && S === y && y.visualViewport ? y.visualViewport.width : S[I];
      ((p -= R - n.width), (p *= s ? 1 : -1));
    }
  }
  var T = Object.assign({ position: u }, c && t1),
    B = l === !0 ? r1({ x: p, y: v }, $e(r)) : { x: p, y: v };
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
function n1(e) {
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
      xd(
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
        xd(
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
const a1 = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: n1, data: {} };
var Ja = { passive: !0 };
function i1(e) {
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
        l.addEventListener("scroll", r.update, Ja);
      }),
    u && s.addEventListener("resize", r.update, Ja),
    function () {
      (i &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", r.update, Ja);
        }),
        u && s.removeEventListener("resize", r.update, Ja));
    }
  );
}
const o1 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: i1,
  data: {},
};
var s1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function oi(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return s1[t];
  });
}
var u1 = { start: "end", end: "start" };
function Cd(e) {
  return e.replace(/start|end/g, function (t) {
    return u1[t];
  });
}
function ru(e) {
  var t = $e(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function nu(e) {
  return Jr(rr(e)).left + ru(e).scrollLeft;
}
function c1(e, t) {
  var r = $e(e),
    n = rr(e),
    a = r.visualViewport,
    i = n.clientWidth,
    o = n.clientHeight,
    u = 0,
    s = 0;
  if (a) {
    ((i = a.width), (o = a.height));
    var c = up();
    (c || (!c && t === "fixed")) && ((u = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: i, height: o, x: u + nu(e), y: s };
}
function l1(e) {
  var t,
    r = rr(e),
    n = ru(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = fr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    o = fr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    u = -n.scrollLeft + nu(e),
    s = -n.scrollTop;
  return (
    qt(a || r).direction === "rtl" && (u += fr(r.clientWidth, a ? a.clientWidth : 0) - i),
    { width: i, height: o, x: u, y: s }
  );
}
function au(e) {
  var t = qt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function vp(e) {
  return ["html", "body", "#document"].indexOf(xt(e)) >= 0
    ? e.ownerDocument.body
    : Qe(e) && au(e)
      ? e
      : vp(Fi(e));
}
function fa(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = vp(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = $e(n),
    o = a ? [i].concat(i.visualViewport || [], au(n) ? n : []) : n,
    u = t.concat(o);
  return a ? u : u.concat(fa(Fi(o)));
}
function ws(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function d1(e, t) {
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
function Rd(e, t, r) {
  return t === op ? ws(c1(e, r)) : hr(t) ? d1(t, r) : ws(l1(rr(e)));
}
function f1(e) {
  var t = fa(Fi(e)),
    r = ["absolute", "fixed"].indexOf(qt(e).position) >= 0,
    n = r && Qe(e) ? ja(e) : e;
  return hr(n)
    ? t.filter(function (a) {
        return hr(a) && cp(a, n) && xt(a) !== "body";
      })
    : [];
}
function v1(e, t, r, n) {
  var a = t === "clippingParents" ? f1(e) : [].concat(t),
    i = [].concat(a, [r]),
    o = i[0],
    u = i.reduce(
      function (s, c) {
        var l = Rd(e, c, n);
        return (
          (s.top = fr(l.top, s.top)),
          (s.right = yi(l.right, s.right)),
          (s.bottom = yi(l.bottom, s.bottom)),
          (s.left = fr(l.left, s.left)),
          s
        );
      },
      Rd(e, o, n),
    );
  return (
    (u.width = u.right - u.left),
    (u.height = u.bottom - u.top),
    (u.x = u.left),
    (u.y = u.top),
    u
  );
}
function pp(e) {
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
  var c = a ? tu(a) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (i) {
      case Kr:
        s[c] = s[c] - (t[l] / 2 - r[l] / 2);
        break;
      case Sa:
        s[c] = s[c] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function Ea(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    i = r.strategy,
    o = i === void 0 ? e.strategy : i,
    u = r.boundary,
    s = u === void 0 ? Dw : u,
    c = r.rootBoundary,
    l = c === void 0 ? op : c,
    d = r.elementContext,
    f = d === void 0 ? aa : d,
    p = r.altBoundary,
    h = p === void 0 ? !1 : p,
    v = r.padding,
    g = v === void 0 ? 0 : v,
    b = dp(typeof g != "number" ? g : fp(g, Ia)),
    m = f === aa ? Tw : aa,
    w = e.rects.popper,
    O = e.elements[h ? m : f],
    y = v1(hr(O) ? O : O.contextElement || rr(e.elements.popper), s, l, o),
    S = Jr(e.elements.reference),
    x = pp({ reference: S, element: w, placement: a }),
    I = ws(Object.assign({}, w, x)),
    D = f === aa ? I : S,
    R = {
      top: y.top - D.top + b.top,
      bottom: D.bottom - y.bottom + b.bottom,
      left: y.left - D.left + b.left,
      right: D.right - y.right + b.right,
    },
    T = e.modifiersData.offset;
  if (f === aa && T) {
    var B = T[a];
    Object.keys(R).forEach(function (z) {
      var V = [tt, et].indexOf(z) >= 0 ? 1 : -1,
        J = [Re, et].indexOf(z) >= 0 ? "y" : "x";
      R[z] += B[J] * V;
    });
  }
  return R;
}
function p1(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    i = r.rootBoundary,
    o = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    c = s === void 0 ? sp : s,
    l = Xr(n),
    d = l
      ? u
        ? Sd
        : Sd.filter(function (h) {
            return Xr(h) === l;
          })
      : Ia,
    f = d.filter(function (h) {
      return c.indexOf(h) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (h, v) {
    return ((h[v] = Ea(e, { placement: v, boundary: a, rootBoundary: i, padding: o })[wt(v)]), h);
  }, {});
  return Object.keys(p).sort(function (h, v) {
    return p[h] - p[v];
  });
}
function h1(e) {
  if (wt(e) === Zs) return [];
  var t = oi(e);
  return [Cd(e), t, Cd(t)];
}
function g1(e) {
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
        w = s || (m || !h ? [oi(g)] : h1(g)),
        O = [g].concat(w).reduce(function (le, ge) {
          return le.concat(
            wt(ge) === Zs
              ? p1(t, {
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
        I = !0,
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
        G = Ea(t, { placement: T, boundary: l, rootBoundary: d, altBoundary: f, padding: c }),
        q = V ? (z ? tt : Pe) : z ? et : Re;
      y[J] > S[J] && (q = oi(q));
      var X = oi(q),
        $ = [];
      if (
        (i && $.push(G[B] <= 0),
        u && $.push(G[q] <= 0, G[X] <= 0),
        $.every(function (le) {
          return le;
        }))
      ) {
        ((D = T), (I = !1));
        break;
      }
      x.set(T, $);
    }
    if (I)
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
const b1 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: g1,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Pd(e, t, r) {
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
function Ad(e) {
  return [Re, tt, et, Pe].some(function (t) {
    return e[t] >= 0;
  });
}
function _1(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    o = Ea(t, { elementContext: "reference" }),
    u = Ea(t, { altBoundary: !0 }),
    s = Pd(o, n),
    c = Pd(u, a, i),
    l = Ad(s),
    d = Ad(c);
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
const y1 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: _1,
};
function m1(e, t, r) {
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
function w1(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    i = a === void 0 ? [0, 0] : a,
    o = sp.reduce(function (l, d) {
      return ((l[d] = m1(d, t.rects, i)), l);
    }, {}),
    u = o[t.placement],
    s = u.x,
    c = u.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o));
}
const O1 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: w1 };
function k1(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = pp({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const S1 = { name: "popperOffsets", enabled: !0, phase: "read", fn: k1, data: {} };
function E1(e) {
  return e === "x" ? "y" : "x";
}
function x1(e) {
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
    g = Ea(t, { boundary: s, rootBoundary: c, padding: d, altBoundary: l }),
    b = wt(t.placement),
    m = Xr(t.placement),
    w = !m,
    O = tu(b),
    y = E1(O),
    S = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    I = t.rects.popper,
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
        A = p ? -I[G] / 2 : 0,
        be = m === Kr ? x[G] : I[G],
        oe = m === Kr ? -I[G] : -x[G],
        ue = t.elements.arrow,
        le = p && ue ? eu(ue) : { width: 0, height: 0 },
        ge = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : lp(),
        ce = ge[V],
        Ue = ge[J],
        Oe = da(0, x[G], le[G]),
        nt = w ? x[G] / 2 - A - Oe - ce - R.mainAxis : be - Oe - ce - R.mainAxis,
        pe = w ? -x[G] / 2 + A + Oe + Ue + R.mainAxis : oe + Oe + Ue + R.mainAxis,
        qe = t.elements.arrow && ja(t.elements.arrow),
        Sr = qe ? (O === "y" ? qe.clientTop || 0 : qe.clientLeft || 0) : 0,
        It = (z = T?.[O]) != null ? z : 0,
        ke = q + nt - It - Sr,
        Se = q + pe - It,
        Gt = da(p ? yi(X, ke) : X, q, p ? fr($, Se) : $);
      ((S[O] = Gt), (B[O] = Gt - q));
    }
    if (u) {
      var pt,
        at = O === "x" ? Re : Pe,
        Ht = O === "x" ? et : tt,
        Ve = S[y],
        je = y === "y" ? "height" : "width",
        Ee = Ve + g[at],
        it = Ve - g[Ht],
        Wt = [Re, Pe].indexOf(b) !== -1,
        $a = (pt = T?.[y]) != null ? pt : 0,
        Na = Wt ? Ee : Ve - x[je] - I[je] - $a + R.altAxis,
        za = Wt ? Ve + x[je] + I[je] - $a - R.altAxis : it,
        Ba = p && Wt ? Jw(Na, Ve, za) : da(p ? Na : Ee, Ve, p ? za : it);
      ((S[y] = Ba), (B[y] = Ba - Ve));
    }
    t.modifiersData[n] = B;
  }
}
const C1 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: x1,
  requiresIfExists: ["offset"],
};
function R1(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function P1(e) {
  return e === $e(e) || !Qe(e) ? ru(e) : R1(e);
}
function A1(e) {
  var t = e.getBoundingClientRect(),
    r = Yr(t.width) / e.offsetWidth || 1,
    n = Yr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function I1(e, t, r) {
  r === void 0 && (r = !1);
  var n = Qe(t),
    a = Qe(t) && A1(t),
    i = rr(t),
    o = Jr(e, a, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((xt(t) !== "body" || au(i)) && (u = P1(t)),
      Qe(t) ? ((s = Jr(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : i && (s.x = nu(i))),
    {
      x: o.left + u.scrollLeft - s.x,
      y: o.top + u.scrollTop - s.y,
      width: o.width,
      height: o.height,
    }
  );
}
function j1(e) {
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
function D1(e) {
  var t = j1(e);
  return Vw.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function T1(e) {
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
function M1(e) {
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
var Id = { placement: "bottom", modifiers: [], strategy: "absolute" };
function jd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function L1(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    i = a === void 0 ? Id : a;
  return function (u, s, c) {
    c === void 0 && (c = i);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Id, i),
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
              reference: hr(u) ? fa(u) : u.contextElement ? fa(u.contextElement) : [],
              popper: fa(s),
            }));
          var w = D1(M1([].concat(n, l.options.modifiers)));
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
            if (jd(m, w)) {
              ((l.rects = {
                reference: I1(m, ja(w), l.options.strategy === "fixed"),
                popper: eu(w),
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
                  I = x === void 0 ? {} : x,
                  D = y.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: I, name: D, instance: p }) || l);
              }
            }
          }
        },
        update: T1(function () {
          return new Promise(function (g) {
            (p.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (v(), (f = !0));
        },
      };
    if (!jd(u, s)) return p;
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
var F1 = [o1, S1, a1, Ww, O1, b1, C1, e1, y1],
  $1 = L1({ defaultModifiers: F1 }),
  Ko,
  Dd;
function N1() {
  if (Dd) return Ko;
  Dd = 1;
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
    (Ko = function (o, u) {
      try {
        return a(o, u);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    Ko
  );
}
var z1 = N1();
const B1 = tr(z1);
var U1 = [],
  q1 = function (t, r, n) {
    n === void 0 && (n = {});
    var a = _.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || U1,
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
            Pi.flushSync(function () {
              s({
                styles: Od(
                  v.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: Od(
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
          return B1(a.current, f) ? a.current || f : ((a.current = f), f);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c],
      ),
      d = _.useRef();
    return (
      kd(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      kd(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || $1,
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
  V1 = function () {},
  G1 = function () {
    return Promise.resolve(null);
  },
  H1 = [];
function W1(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    i = e.modifiers,
    o = i === void 0 ? H1 : i,
    u = e.referenceElement,
    s = e.onFirstUpdate,
    c = e.innerRef,
    l = e.children,
    d = _.useContext(Pw),
    f = _.useState(null),
    p = f[0],
    h = f[1],
    v = _.useState(null),
    g = v[0],
    b = v[1];
  _.useEffect(
    function () {
      jw(c, p);
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
    w = q1(u || d, p, m),
    O = w.state,
    y = w.styles,
    S = w.forceUpdate,
    x = w.update,
    I = _.useMemo(
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
          forceUpdate: S || V1,
          update: x || G1,
        };
      },
      [h, b, r, O, y, x, S],
    );
  return Aw(l)(I);
}
function K1(e) {
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
var Os = 5,
  Y1 = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: Os,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function J1() {
  return null;
}
var X1 = [0, 8];
function Z1(e) {
  var t = e.children,
    r = t === void 0 ? J1 : t,
    n = e.offset,
    a = n === void 0 ? X1 : n,
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
            options: { padding: Os, rootBoundary: p ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [v, g] } },
          y = p ? K1({ viewportPadding: Os }) : [];
        return [].concat(Y1, [w, O], De(y));
      },
      [v, g, p],
    ),
    m = _.useMemo(
      function () {
        return c == null ? b : [].concat(De(b), De(c));
      },
      [b, c],
    );
  return k.createElement(W1, { modifiers: m, placement: o, strategy: d, referenceElement: s }, r);
}
var hp = "atlaskit-portal-container",
  gp = "body > .atlaskit-portal-container",
  bp = "atlaskit-portal",
  Q1 = function (t) {
    var r = document.createElement("div");
    return ((r.className = bp), (r.style.zIndex = "".concat(t)), r);
  },
  _p = function () {
    return document.body;
  },
  yp = function () {
    var t = document.querySelector(gp);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = hp),
        (n.style.display = "flex"),
        (r = _p()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  eO = function (t) {
    yp().removeChild(t);
  },
  tO = function (t) {
    t.parentElement || yp().appendChild(t);
  },
  mp = function () {
    return document !== void 0;
  },
  rO = function (t) {
    if (mp()) {
      var r = document.createElement("div");
      return ((r.className = bp), (r.style.zIndex = "".concat(t)), r);
    }
  },
  nO = function () {
    if (mp()) {
      var t = document.querySelector(gp);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = hp),
          (n.style.display = "flex"),
          (r = _p()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function aO(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useMemo(
      function () {
        return Q1(t);
      },
      [t],
    );
  return (
    tO(n),
    _.useEffect(
      function () {
        return function () {
          eO(n);
        };
      },
      [n],
    ),
    Pi.createPortal(r, n)
  );
}
var wp = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function iO(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useState(null),
    a = K(n, 2),
    i = a[0],
    o = a[1];
  wp(
    function () {
      var s = rO(t);
      o(s);
      var c = nO();
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
  return i ? Pi.createPortal(u, i) : null;
}
var oO = function (t) {
    var r = _.useState(!1),
      n = K(r, 2),
      a = n[0],
      i = n[1],
      o = _.useState(function () {
        return t === "layoutEffect" ? wp : _.useEffect;
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
  sO = "akPortalMount",
  uO = "akPortalUnmount",
  Td = {
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
  cO = function (t) {
    return Td.hasOwnProperty(t) ? Td[t] : null;
  },
  lO = function (t, r) {
    var n = { layer: cO(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function Md(e, t) {
  var r = lO(e, t);
  window.dispatchEvent(r);
}
var dO = function (t) {
  var r = Number(t);
  _.useEffect(
    function () {
      return (
        Md(sO, r),
        function () {
          Md(uO, r);
        }
      );
    },
    [r],
  );
};
function fO(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    i = a === void 0 ? "effect" : a,
    o = oO(i);
  return (
    dO(r),
    Le("platform_design_system_team_portal_logic_r18_fix")
      ? k.createElement(iO, { zIndex: r }, n)
      : o
        ? k.createElement(aO, { zIndex: r }, n)
        : null
  );
}
var va = new Set(),
  xa = null;
function Ld() {
  if (!xa) {
    xa = Di.bindAll(window, [
      { type: "dragend", listener: Yo },
      { type: "pointerdown", listener: Yo },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            Yo();
          };
        })(),
      },
    ]);
    var e = Array.from(va);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function Yo() {
  var e;
  ((e = xa) === null || e === void 0 || e(), (xa = null));
  var t = Array.from(va);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function vO() {
  return Di.bindAll(window, [
    { type: "dragstart", listener: Ld },
    { type: "dragenter", listener: Ld },
  ]);
}
var Xa = null;
function pO(e) {
  return (
    Xa || (Xa = vO()),
    va.add(e),
    e.onRegister({ isDragging: xa !== null }),
    function () {
      if ((va.delete(e), va.size === 0)) {
        var r;
        ((r = Xa) === null || r === void 0 || r(), (Xa = null));
      }
    }
  );
}
var pa = null;
function ua() {
  pa != null && (window.clearTimeout(pa), (pa = null));
}
function Fd(e, t) {
  (ua(),
    (pa = window.setTimeout(function () {
      ((pa = null), e());
    }, t)));
}
var ht = null;
function hO(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(ht && ht.entry === e);
  }
  function n() {
    r() && (ua(), (ht = null));
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
        ((t = "shown"), ua());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), ua(), e.show({ isImmediate: !1 }));
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
          Fd(function () {
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
    (ht && (ua(), ht.entry.hide({ isImmediate: !0 }), ht.entry.done(), (ht = null)),
      (ht = { entry: e, isVisible: c }));
    function h() {
      ((t = "shown"), e.show({ isImmediate: p }));
    }
    if (p) {
      h();
      return;
    }
    ((t = "waiting-to-show"), Fd(h, e.delay));
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
function gO(e, t) {
  var r = im();
  return t ? "".concat(r(e)) : void 0;
}
var $d = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81u0j _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d7jlr _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7",
  },
  bO = function (t) {
    var r = t.shortcut;
    return _.createElement(
      "div",
      { className: C([$d.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return _.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: C([$d.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  Op = _.forwardRef(function (t, r) {
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
        d && Le("platform-dst-tooltip-shortcuts") && _.createElement(bO, { shortcut: d }),
      ),
    );
  });
Op.displayName = "TooltipPrimitive";
var Jo = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _85i5v77o _1q51v77o _y4ti12x7 _bozg12x7 _slp31hna",
    baseRefreshedPadding: "_1q511b66 _85i51b66",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  kp = _.forwardRef(function (t, r) {
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
      Op,
      {
        ref: r,
        style: n,
        className: C([
          Jo.base,
          Le("platform-dst-tooltip-shortcuts") && Jo.baseRefreshedPadding,
          o && Jo.truncate,
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
kp.displayName = "TooltipContainer";
function Nd(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function zd(e, t) {
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
      ? zd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : zd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var _O = om.tooltip(),
  Bd = {
    componentName: "tooltip",
    packageName: "@atlaskit/tooltip",
    packageVersion: "0.0.0-development",
  },
  yO = { top: "bottom", bottom: "top", left: "right", right: "left" },
  mO = function (t) {
    return t.split("-")[0];
  };
function wO(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    i = a === void 0 ? "bottom" : a,
    o = e.content,
    u = e.truncate,
    s = u === void 0 ? !1 : u,
    c = e.component,
    l = c === void 0 ? kp : c,
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
    I = x === void 0 ? !1 : x,
    D = e.analyticsContext,
    R = e.strategy,
    T = R === void 0 ? "fixed" : R,
    B = e.ignoreTooltipPointerEvents,
    z = B === void 0 ? !1 : B,
    V = e.isScreenReaderAnnouncementDisabled,
    J = V === void 0 ? !1 : V,
    G = e.shortcut,
    q = n === "mouse" ? i : n,
    X = Ic(zr({ fn: b, action: "displayed", analyticsData: D }, Bd)),
    $ = Ic(zr({ fn: w, action: "hidden", analyticsData: D }, Bd)),
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
    nt = na(ue),
    pe = na(X),
    qe = na($),
    Sr = na(v),
    It = na(O),
    ke = _.useRef(!1),
    Se = _.useCallback(function (L) {
      ((A.current = L), (ke.current = !1));
    }, []),
    Gt = _.useCallback(
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
    return pO({
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
  var Ht = _.useCallback(
      function (L) {
        var re;
        if (!at.current) {
          if ((A.current && !A.current.isActive() && pt(), A.current && A.current.isActive())) {
            A.current.keep();
            return;
          }
          if (!(It.current && !((re = It.current) !== null && re !== void 0 && re.call(It)))) {
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
                done: Gt,
              },
              to = hO(jt);
            Se(to);
          }
        }
      },
      [It, Sr, Gt, Se, pt, pe],
    ),
    Ve = _.useCallback(
      function () {
        var L;
        (L = A.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
      },
      [A],
    );
  (cw({ onClose: Ve, isDisabled: ue === "hide" || ue === "fade-out" }),
    _.useEffect(
      function () {
        if (ue === "hide") return we;
        ue === "before-fade-out" && le("fade-out");
        var L = Di.bind(window, {
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
  var je = _.useCallback(
      function () {
        I && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [I],
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
              ? { type: "mouse", mouse: Nd({ left: L.clientX, top: L.clientY }) }
              : { type: "keyboard" };
          Ht(re);
        }
      },
      [n, Ht],
    ),
    Wt = _.useCallback(function (L) {
      (ce.current && L.target === ce.current) ||
        L.defaultPrevented ||
        (L.preventDefault(), A.current && A.current.requestHide({ isImmediate: !1 }));
    }, []),
    $a =
      n === "mouse"
        ? function (L) {
            var re;
            (re = A.current) !== null &&
              re !== void 0 &&
              re.isActive() &&
              (A.current.mousePosition = Nd({ left: L.clientX, top: L.clientY }));
          }
        : void 0,
    Na = _.useCallback(function () {
      if (A.current && A.current.isActive()) {
        A.current.keep();
        return;
      }
    }, []),
    za = _.useCallback(
      function (L) {
        try {
          if (!L.target.matches(":focus-visible") && Le("platform-tooltip-focus-visible-new"))
            return;
        } catch {}
        Ht({ type: "keyboard" });
      },
      [Ht],
    ),
    Ba = _.useCallback(function () {
      A.current && A.current.requestHide({ isImmediate: !1 });
    }, []),
    Sh = _.useCallback(
      function (L) {
        L === "exiting" &&
          nt.current === "fade-out" &&
          A.current &&
          A.current.finishHideAnimation();
      },
      [nt],
    ),
    Eh = f,
    Qi = ue !== "hide" && !!o,
    pu = !J && Qi,
    hu = ue !== "hide" && ue !== "fade-out",
    xh = _.useCallback(function () {
      var L;
      (L = A.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
    }, []);
  vw({ isOpen: Qi && hu, onClose: xh });
  var gu = function () {
      var re;
      if (n === "mouse" && (re = A.current) !== null && re !== void 0 && re.mousePosition) {
        var jt;
        return (jt = A.current) === null || jt === void 0 ? void 0 : jt.mousePosition;
      }
      return ge.current || void 0;
    },
    an = gO("tooltip", pu),
    eo = {
      onMouseOver: it,
      onMouseOut: Wt,
      onMouseMove: $a,
      onMouseDown: je,
      onClick: Ee,
      onFocus: za,
      onBlur: Ba,
    };
  p && (eo["data-testid"] = "".concat(p, "--container"));
  var bu = typeof t == "function";
  _.useEffect(
    function () {
      if (!bu) {
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
    [bu, an],
  );
  var _u = pu
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
          t(zr(zr({}, eo), {}, { "aria-describedby": an, ref: Oe })),
          _u,
        )
      : k.createElement(Eh, te({}, eo, { ref: Ue, role: "presentation" }), t, _u),
    Qi
      ? k.createElement(
          fO,
          { zIndex: _O },
          k.createElement(Z1, { placement: q, referenceElement: gu(), strategy: T }, function (L) {
            var re = L.ref,
              jt = L.style,
              to = L.update,
              ro = L.placement,
              Er = n === "mouse" ? void 0 : yO[mO(ro)];
            return k.createElement(
              ip,
              { appear: !0 },
              hu &&
                k.createElement(
                  Rw,
                  {
                    distance: "constant",
                    entranceDirection: Er,
                    exitDirection: Er,
                    onFinish: Sh,
                    duration: ue !== "show-immediate" ? "medium" : "none",
                  },
                  function (on) {
                    var Ch = on.className;
                    return k.createElement(
                      l,
                      {
                        ref: re,
                        className: "Tooltip ".concat(Ch),
                        style: zr(zr({}, jt), z && { pointerEvents: "none" }),
                        truncate: s,
                        placement: q,
                        testId: gu() ? p : p && "".concat(p, "--unresolved"),
                        onMouseOut: Wt,
                        onMouseOver: Na,
                        shortcut: G,
                      },
                      typeof o == "function" ? o({ update: to }) : o,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var OO = [
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
  ia = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  Ud = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syaz1gjq _k48pmoej" },
  Sp = function (t) {
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
      m = ae(t, OO),
      w = _.useState(!1),
      O = K(w, 2),
      y = O[0],
      S = O[1],
      x = _.useState(!1),
      I = K(x, 2),
      D = I[0],
      R = I[1],
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
        ji,
        { xcss: Ud.headCellContainer, onMouseEnter: q, onMouseLeave: X, onFocus: J, onBlur: G },
        k.createElement(
          wO,
          { content: u === pr ? f : h },
          k.createElement(
            Wy,
            { onClick: s, xcss: ia.buttonWrapper, "aria-roledescription": g },
            k.createElement(
              bi,
              { xcss: z ? ia.hideIconHeaderWrapper : ia.visibleHeaderWrapper },
              k.createElement("span", { className: C([Ud.text]) }, r),
            ),
            V &&
              k.createElement(
                bi,
                { xcss: B ? ia.sortIconVisibleWrapper : ia.sortIconHiddenWrapper },
                u === pr
                  ? k.createElement(sw, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : k.createElement(aw, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return k.createElement(
      Q0,
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
  kO = ["isRanking", "refHeight", "refWidth"];
function SO(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, Ep() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var EO = (function (e) {
    function t() {
      return (fe(this, t), SO(this, t, arguments));
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
              o = ae(n, kO),
              u = Dg(a, i);
            return k.createElement(Sp, te({ inlineStyles: u }, o));
          },
        },
      ])
    );
  })(k.Component),
  xO = tw(EO),
  CO = ["cells"],
  RO = [
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
function PO(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, xp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var AO = (function (e) {
    function t(r) {
      var n;
      return (fe(this, t), (n = PO(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      ze(t, e),
      ve(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            fi(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              fi(n.sortKey, n.head);
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
            var h = d ? xO : Sp,
              v = i.cells,
              g = ae(i, CO);
            return k.createElement(
              Z0,
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
                    I = b.isIconOnlyHeader,
                    D = b.isSortable,
                    R = b.key,
                    T = b.shouldTruncate,
                    B = b.testId,
                    z = b.width,
                    V = ae(b, RO),
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
                        isIconOnlyHeader: I,
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
  IO = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function jO(e) {
  switch (e) {
    case hi:
      return pr;
    case pr:
      return hi;
    default:
      return e;
  }
}
var DO = function (t) {
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
      I = x === void 0 ? 1 : x,
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
      ce = _a({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.2",
      }),
      Ue = _a({
        fn: q,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.2",
      });
    _.useEffect(
      function () {
        (fi(o, n), jg(n));
      },
      [o, n],
    );
    var Oe = function (Ee) {
        return function () {
          var it = Ee.key;
          if (it) {
            if (ce && T && it === o && u === hi) {
              ce({ key: null, sortOrder: null, item: Ee });
              return;
            }
            var Wt = it !== o ? pr : jO(u);
            ce && ce({ key: it, item: Ee, sortOrder: Wt });
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
        return X || (av(i || [], I, m).length > 2 ? gi : eb);
      },
      It = function () {
        return h ? k.createElement(ob, { testId: l }) : D && k.createElement(sb, { testId: l }, D);
      },
      ke = i && i.length,
      Se,
      Gt = !1;
    (d && Number.isInteger(d) && m && ke && ke <= d
      ? ((Se = Math.ceil(d / m)), (Gt = !0))
      : (Se = ke && m ? Math.ceil(ke / m) : 0),
      (Se = Se < 1 ? 1 : Se));
    var pt = I > Se ? Se : I,
      at = !!ke,
      Ht = Sr(),
      Ve = It();
    return k.createElement(
      k.Fragment,
      null,
      k.createElement(
        bv,
        {
          isLoading: h && at,
          spinnerSize: Ht,
          targetRef: function () {
            return ge.current;
          },
          testId: l,
          loadingLabel: s,
        },
        k.createElement(
          nb,
          { isFixedSize: g, "aria-label": f, hasDataRow: at, testId: l, isLoading: h },
          !!r && k.createElement(ab, null, r),
          n &&
            k.createElement(AO, {
              head: n,
              onSort: Oe,
              sortKey: o,
              sortOrder: u,
              isRanking: ue,
              isRankable: T,
              testId: l,
            }),
          at &&
            k.createElement(MO, {
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
              isTotalPagesControlledExternally: Gt,
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
            ib,
            { testId: l },
            k.createElement(Y0, {
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
        k.createElement(hv, { isLoading: h, spinnerSize: gi, testId: l, loadingLabel: s }, Ve),
    );
  },
  TO = _.lazy(function () {
    return Fg(
      () => import("./body-n1V9FjMJ.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  MO = _.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      i = t.isRanking,
      o = t.onRankStart,
      u = t.onRankEnd,
      s = t.isRankingDisabled,
      c = ae(t, IO),
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
    var v = k.createElement(Ob, te({ ref: r }, c));
    return l && p
      ? k.createElement(
          Sb,
          { fallback: v },
          k.createElement(
            _.Suspense,
            { fallback: v },
            k.createElement(
              TO,
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
function LO(e, t, r) {
  return (
    (t = Y(t)),
    Ne(e, Cp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var iu = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = LO(this, t, [].concat(a))),
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
        var f = Tg(o, c, l, d);
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
            I = s.label;
          return k.createElement(DO, {
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
            label: I,
          });
        },
      },
    ])
  );
})(k.Component);
E(iu, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: we,
  onSort: we,
  rowsPerPage: 1 / 0,
});
const FO = (e, t, r) => {
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
  Rp = (e, t, r) => ({ cells: FO(e, t, r) });
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
var $O = {};
function $i() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : $O;
}
var Pp = Object.assign,
  mi = Object.getOwnPropertyDescriptor,
  Ot = Object.defineProperty,
  Ni = Object.prototype,
  ks = [];
Object.freeze(ks);
var Ap = {};
Object.freeze(Ap);
var NO = typeof Proxy < "u",
  zO = Object.toString();
function Ip() {
  NO || H("Proxy not available");
}
function jp(e) {
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
function zi(e) {
  return e !== null && typeof e == "object";
}
function er(e) {
  if (!zi(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === zO;
}
function Dp(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Bi(e, t, r) {
  Ot(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function Tp(e, t, r) {
  Ot(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function mr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return zi(n) && n[r] === !0;
    }
  );
}
function tn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function BO(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function $t(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var Mp = typeof Object.getOwnPropertySymbols < "u";
function UO(e) {
  var t = Object.keys(e);
  if (!Mp) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Ni.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Ui =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : Mp
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function Lp(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Bt(e, t) {
  return Ni.hasOwnProperty.call(e, t);
}
var qO =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Ui(t).forEach(function (n) {
        r[n] = mi(t, n);
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
function qd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function VO(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, HO(n.key), n));
  }
}
function rn(e, t, r) {
  return (t && VO(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function qr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = WO(e)) || t) {
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
function Fp(e, t) {
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
function GO(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function HO(e) {
  var t = GO(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function WO(e, t) {
  if (e) {
    if (typeof e == "string") return qd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? qd(e, t)
          : void 0
    );
  }
}
var yt = Symbol("mobx-stored-annotations");
function kt(e) {
  function t(r, n) {
    if (Ta(n)) return e.decorate_20223_(r, n);
    Da(r, n, e);
  }
  return Object.assign(t, e);
}
function Da(e, t, r) {
  (Bt(e, yt) || Bi(e, yt, br({}, e[yt])), ek(r) || (e[yt][t] = r));
}
function KO(e) {
  return (Bt(e, yt) || Bi(e, yt, br({}, e[yt])), e[yt]);
}
function Ta(e) {
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
        return Qp(this);
      }),
      (t.reportChanged = function () {
        (Je(), eh(this), Xe());
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
var ou = mr("Atom", nr);
function $p(e, t, r) {
  (t === void 0 && (t = Ur), r === void 0 && (r = Ur));
  var n = new nr(e);
  return (t !== Ur && iS(n, t), r !== Ur && ih(n, r), n);
}
function YO(e, t) {
  return bh(e, t);
}
function JO(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var wi = { structural: YO, default: JO };
function _r(e, t, r) {
  return ch(e)
    ? e
    : Array.isArray(e)
      ? se.array(e, { name: r })
      : er(e)
        ? se.object(e, void 0, { name: r })
        : tn(e)
          ? se.map(e, { name: r })
          : $t(e)
            ? se.set(e, { name: r })
            : typeof e == "function" && !Zr(e) && !Ra(e)
              ? Dp(e)
                ? Qr(e)
                : Ca(r, e)
              : e;
}
function XO(e, t, r) {
  if (e == null || Ji(e) || Yi(e) || Or(e) || _t(e)) return e;
  if (Array.isArray(e)) return se.array(e, { name: r, deep: !1 });
  if (er(e)) return se.object(e, void 0, { name: r, deep: !1 });
  if (tn(e)) return se.map(e, { name: r, deep: !1 });
  if ($t(e)) return se.set(e, { name: r, deep: !1 });
}
function qi(e) {
  return e;
}
function ZO(e, t) {
  return bh(e, t) ? t : e;
}
var QO = "override";
function ek(e) {
  return e.annotationType_ === QO;
}
function Ma(e, t) {
  return { annotationType_: e, options_: t, make_: tk, extend_: rk, decorate_20223_: nk };
}
function tk(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Zr(r.value)) return 1;
  var i = Np(e, this, t, r, !1);
  return (Ot(n, t, i), 2);
}
function rk(e, t, r, n) {
  var a = Np(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function nk(e, t) {
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
function ak(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Np(e, t, r, n, a) {
  var i, o, u, s, c, l, d;
  (a === void 0 && (a = P.safeDescriptors), ak(e, t, r, n));
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
function zp(e, t) {
  return { annotationType_: e, options_: t, make_: ik, extend_: ok, decorate_20223_: sk };
}
function ik(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Bt(e.target_, t) || !Ra(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Ra(r.value)) return 1;
  var i = Bp(e, this, t, r, !1, !1);
  return (Ot(n, t, i), 2);
}
function ok(e, t, r, n) {
  var a,
    i = Bp(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, i, n);
}
function sk(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    Ra(e) || (e = Qr(e)),
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
function uk(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Bp(e, t, r, n, a, i) {
  (i === void 0 && (i = P.safeDescriptors), uk(e, t, r, n));
  var o = n.value;
  if ((Ra(o) || (o = Qr(o)), a)) {
    var u;
    ((o = o.bind((u = e.proxy_) != null ? u : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: i ? e.isPlainObject_ : !0, enumerable: !1, writable: !i };
}
function su(e, t) {
  return { annotationType_: e, options_: t, make_: ck, extend_: lk, decorate_20223_: dk };
}
function ck(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function lk(e, t, r, n) {
  return (
    fk(e, this, t, r),
    e.defineComputedProperty_(t, br({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function dk(e, t) {
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
function fk(e, t, r, n) {
  (t.annotationType_, n.get);
}
function Vi(e, t) {
  return { annotationType_: e, options_: t, make_: vk, extend_: pk, decorate_20223_: hk };
}
function vk(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function pk(e, t, r, n) {
  var a, i;
  return (
    gk(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (i = this.options_) == null ? void 0 : i.enhancer) != null ? a : _r,
      n,
    )
  );
}
function hk(e, t) {
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
function gk(e, t, r, n) {
  t.annotationType_;
}
var bk = "true",
  _k = Up();
function Up(e) {
  return { annotationType_: bk, options_: e, make_: yk, extend_: mk, decorate_20223_: wk };
}
function yk(e, t, r, n) {
  var a, i;
  if (r.get) return Gi.make_(e, t, r, n);
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
    if (Dp(r.value)) {
      var s,
        c = (s = this.options_) != null && s.autoBind ? Qr.bound : Qr;
      return c.make_(e, t, r, n);
    }
    var l = (u = this.options_) != null && u.autoBind ? Ca.bound : Ca;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? se.ref : se;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function mk(e, t, r, n) {
  var a, i;
  if (r.get) return Gi.extend_(e, t, r, n);
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
function wk(e, t) {
  H("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Ok = "observable",
  kk = "observable.ref",
  Sk = "observable.shallow",
  Ek = "observable.struct",
  qp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(qp);
function Za(e) {
  return e || qp;
}
var Es = Vi(Ok),
  xk = Vi(kk, { enhancer: qi }),
  Ck = Vi(Sk, { enhancer: XO }),
  Rk = Vi(Ek, { enhancer: ZO }),
  Vp = kt(Es);
function Qa(e) {
  return e.deep === !0 ? _r : e.deep === !1 ? qi : Ak(e.defaultDecorator);
}
function Pk(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Up(e)) : void 0;
}
function Ak(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : _r;
}
function Gp(e, t, r) {
  if (Ta(t)) return Es.decorate_20223_(e, t);
  if (gr(t)) {
    Da(e, t, Es);
    return;
  }
  return ch(e)
    ? e
    : er(e)
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
Pp(Gp, Vp);
var Ik = {
    box: function (t, r) {
      var n = Za(r);
      return new vr(t, Qa(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = Za(r);
      return (P.useProxies === !1 || n.proxy === !1 ? PS : yS)(t, Qa(n), n.name);
    },
    map: function (t, r) {
      var n = Za(r);
      return new dh(t, Qa(n), n.name);
    },
    set: function (t, r) {
      var n = Za(r);
      return new fh(t, Qa(n), n.name);
    },
    object: function (t, r, n) {
      return kr(function () {
        return cS(P.useProxies === !1 || n?.proxy === !1 ? nn({}, n) : gS({}, n), t, r);
      });
    },
    ref: kt(xk),
    shallow: kt(Ck),
    deep: Vp,
    struct: kt(Rk),
  },
  se = Pp(Gp, Ik),
  Hp = "computed",
  jk = "computed.struct",
  xs = su(Hp),
  Dk = su(jk, { equals: wi.structural }),
  Gi = function (t, r) {
    if (Ta(r)) return xs.decorate_20223_(t, r);
    if (gr(r)) return Da(t, r, xs);
    if (er(t)) return kt(su(Hp, t));
    var n = er(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new dt(n));
  };
Object.assign(Gi, xs);
Gi.struct = kt(Dk);
var Vd,
  Gd,
  Oi = 0,
  Tk = 1,
  Mk =
    (Vd = (Gd = mi(function () {}, "name")) == null ? void 0 : Gd.configurable) != null ? Vd : !1,
  Hd = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function yr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return Lk(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    Mk && ((Hd.value = e), Ot(a, "name", Hd)),
    a
  );
}
function Lk(e, t, r, n, a) {
  var i = Fk(e, t);
  try {
    return r.apply(n, a);
  } catch (o) {
    throw ((i.error_ = o), o);
  } finally {
    $k(i);
  }
}
function Fk(e, t, r, n) {
  var a = !1,
    i = 0,
    o = P.trackingDerivation,
    u = !t || !o;
  Je();
  var s = P.allowStateChanges;
  u && (wr(), (s = Hi(!0)));
  var c = uu(!0),
    l = {
      runAsAction_: u,
      prevDerivation_: o,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: c,
      notifySpy_: a,
      startTime_: i,
      actionId_: Tk++,
      parentActionId_: Oi,
    };
  return ((Oi = l.actionId_), l);
}
function $k(e) {
  (Oi !== e.actionId_ && H(30),
    (Oi = e.parentActionId_),
    e.error_ !== void 0 && (P.suppressReactionErrors = !0),
    Wi(e.prevAllowStateChanges_),
    ha(e.prevAllowStateReads_),
    Xe(),
    e.runAsAction_ && Ut(e.prevDerivation_),
    (P.suppressReactionErrors = !1));
}
function Nk(e, t) {
  var r = Hi(e);
  try {
    return t();
  } finally {
    Wi(r);
  }
}
function Hi(e) {
  var t = P.allowStateChanges;
  return ((P.allowStateChanges = e), t);
}
function Wi(e) {
  P.allowStateChanges = e;
}
var vr = (function (e) {
    function t(n, a, i, o, u) {
      var s;
      return (
        i === void 0 && (i = "ObservableValue"),
        u === void 0 && (u = wi.default),
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
    Fp(t, e);
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
        return La(this, a);
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
          Fa(this, a)
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
        return Lp(this.get());
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
        (this.value_ = new Si(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = ki.NONE),
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
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? wi.structural : wi.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        Vk(this);
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
          Cs(this) &&
            (this.warnAboutUntrackedRead_(), Je(), (this.value_ = this.computeValue_(!1)), Xe());
        else if ((Qp(this), Cs(this))) {
          var n = P.trackingContext;
          (this.keepAlive_ && !n && (P.trackingContext = this),
            this.trackAndCompute() && qk(this),
            (P.trackingContext = n));
        }
        var a = this.value_;
        if (si(a)) throw a.cause;
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
          o = a || si(n) || si(i) || !this.equals_(n, i);
        return (o && (this.value_ = i), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = Hi(!1),
          i;
        if (n) i = Wp(this, this.derivation, this.scope_);
        else if (P.disableErrorBoundaries === !0) i = this.derivation.call(this.scope_);
        else
          try {
            i = this.derivation.call(this.scope_);
          } catch (o) {
            i = new Si(o);
          }
        return (Wi(a), (this.isComputing = !1), i);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Rs(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var i = this,
          o = !0,
          u = void 0;
        return eS(function () {
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
        return Lp(this.get());
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
var Ki = mr("ComputedValue", dt),
  W;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(W || (W = {}));
var ki;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(ki || (ki = {}));
var Si = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function si(e) {
  return e instanceof Si;
}
function Cs(e) {
  switch (e.dependenciesState_) {
    case W.UP_TO_DATE_:
      return !1;
    case W.NOT_TRACKING_:
    case W.STALE_:
      return !0;
    case W.POSSIBLY_STALE_: {
      for (var t = uu(!0), r = wr(), n = e.observing_, a = n.length, i = 0; i < a; i++) {
        var o = n[i];
        if (Ki(o)) {
          if (P.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Ut(r), ha(t), !0);
            }
          if (e.dependenciesState_ === W.STALE_) return (Ut(r), ha(t), !0);
        }
      }
      return (Yp(e), Ut(r), ha(t), !1);
    }
  }
}
function Wp(e, t, r) {
  var n = uu(!0);
  (Yp(e),
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
      i = new Si(o);
    }
  return (P.inBatch--, (P.trackingDerivation = a), zk(e), ha(n), i);
}
function zk(e) {
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
    (s.diffValue === 0 && Xp(s, e), (s.diffValue = 0));
  }
  for (; a--; ) {
    var c = r[a];
    c.diffValue === 1 && ((c.diffValue = 0), Uk(c, e));
  }
  n !== W.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function Rs(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Xp(t[r], e);
  e.dependenciesState_ = W.NOT_TRACKING_;
}
function Kp(e) {
  var t = wr();
  try {
    return e();
  } finally {
    Ut(t);
  }
}
function wr() {
  var e = P.trackingDerivation;
  return ((P.trackingDerivation = null), e);
}
function Ut(e) {
  P.trackingDerivation = e;
}
function uu(e) {
  var t = P.allowStateReads;
  return ((P.allowStateReads = e), t);
}
function ha(e) {
  P.allowStateReads = e;
}
function Yp(e) {
  if (e.dependenciesState_ !== W.UP_TO_DATE_) {
    e.dependenciesState_ = W.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = W.UP_TO_DATE_;
  }
}
var ui = function () {
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
  ci = !0,
  Jp = !1,
  P = (function () {
    var e = $i();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ci = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new ui().version && (ci = !1),
      ci
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ui()))
        : (setTimeout(function () {
            Jp || H(35);
          }, 1),
          new ui())
    );
  })();
function Bk() {
  if (((P.pendingReactions.length || P.inBatch || P.isRunningReactions) && H(36), (Jp = !0), ci)) {
    var e = $i();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (P = new ui()));
  }
}
function Uk(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Xp(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Zp(e));
}
function Zp(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), P.pendingUnobservations.push(e));
}
function Je() {
  P.inBatch++;
}
function Xe() {
  if (--P.inBatch === 0) {
    th();
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
function Qp(e) {
  var t = P.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && P.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && P.inBatch > 0 && Zp(e), !1);
}
function eh(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === W.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = W.STALE_));
    }));
}
function qk(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.POSSIBLY_STALE_
        ? (t.dependenciesState_ = W.STALE_)
        : t.dependenciesState_ === W.UP_TO_DATE_ && (e.lowestObserverState_ = W.UP_TO_DATE_);
    }));
}
function Vk(e) {
  e.lowestObserverState_ === W.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = W.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.UP_TO_DATE_ &&
        ((t.dependenciesState_ = W.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var Ct = (function () {
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
      (this.isTracing_ = ki.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), P.pendingReactions.push(this), th());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Je(), (this.isScheduled = !1));
        var n = P.trackingContext;
        if (((P.trackingContext = this), Cs(this))) {
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
        var i = Wp(this, n, void 0);
        ((P.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Rs(this),
          si(i) && this.reportExceptionInDerivation_(i.cause),
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Je(), Rs(this), Xe()));
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
Ct.isDisposedMask_ = 1;
Ct.isScheduledMask_ = 2;
Ct.isTrackPendingMask_ = 4;
Ct.isRunningMask_ = 8;
Ct.diffValueMask_ = 16;
var Gk = 100,
  Ps = function (t) {
    return t();
  };
function th() {
  P.inBatch > 0 || P.isRunningReactions || Ps(Hk);
}
function Hk() {
  P.isRunningReactions = !0;
  for (var e = P.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Gk && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  P.isRunningReactions = !1;
}
var Ei = mr("Reaction", Ct);
function Wk(e) {
  var t = Ps;
  Ps = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function ga() {
  return !1;
}
function Kk(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var rh = "action",
  Yk = "action.bound",
  nh = "autoAction",
  Jk = "autoAction.bound",
  Xk = "<unnamed action>",
  As = Ma(rh),
  Zk = Ma(Yk, { bound: !0 }),
  Is = Ma(nh, { autoAction: !0 }),
  Qk = Ma(Jk, { autoAction: !0, bound: !0 });
function ah(e) {
  var t = function (n, a) {
    if (lt(n)) return yr(n.name || Xk, n, e);
    if (lt(a)) return yr(n, a, e);
    if (Ta(a)) return (e ? Is : As).decorate_20223_(n, a);
    if (gr(a)) return Da(n, a, e ? Is : As);
    if (gr(n)) return kt(Ma(e ? nh : rh, { name: n, autoAction: e }));
  };
  return t;
}
var Ze = ah(!1);
Object.assign(Ze, As);
var Ca = ah(!0);
Object.assign(Ca, Is);
Ze.bound = kt(Zk);
Ca.bound = kt(Qk);
function Zr(e) {
  return lt(e) && e.isMobxAction === !0;
}
function eS(e, t) {
  var r, n, a, i;
  t === void 0 && (t = Ap);
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    u = !t.scheduler && !t.delay,
    s;
  if (u)
    s = new Ct(
      o,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var c = rS(t),
      l = !1;
    s = new Ct(
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
var tS = function (t) {
  return t();
};
function rS(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : tS;
}
var nS = "onBO",
  aS = "onBUO";
function iS(e, t, r) {
  return oh(nS, e, t, r);
}
function ih(e, t, r) {
  return oh(aS, e, t, r);
}
function oh(e, t, r, n) {
  var a = Ri(t),
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
var oS = "never",
  ei = "always",
  sS = "observed";
function uS(e) {
  e.isolateGlobalState === !0 && Bk();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (P.useProxies = t === ei ? !0 : t === oS ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (P.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === ei ? ei : r === sS;
    ((P.enforceActions = n), (P.allowStateChanges = !(n === !0 || n === ei)));
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
    e.reactionScheduler && Wk(e.reactionScheduler));
}
function cS(e, t, r, n) {
  var a = qO(t);
  return (
    kr(function () {
      var i = nn(e, n)[F];
      Ui(a).forEach(function (o) {
        i.extend_(o, a[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function lS(e, t) {
  return sh(Ri(e, t));
}
function sh(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = dS(e.observing_).map(sh)),
    t
  );
}
function dS(e) {
  return Array.from(new Set(e));
}
var fS = 0;
function uh() {
  this.message = "FLOW_CANCELLED";
}
uh.prototype = Object.create(Error.prototype);
var Xo = zp("flow"),
  vS = zp("flow.bound", { bound: !0 }),
  Qr = Object.assign(function (t, r) {
    if (Ta(r)) return Xo.decorate_20223_(t, r);
    if (gr(r)) return Da(t, r, Xo);
    var n = t,
      a = n.name || "<unnamed flow>",
      i = function () {
        var u = this,
          s = arguments,
          c = ++fS,
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
              f && Wd(f);
              var h = l.return(void 0),
                v = Promise.resolve(h.value);
              (v.then(Ur, Ur), Wd(v), d(new uh()));
            } catch (g) {
              d(g);
            }
          })),
          p
        );
      };
    return ((i.isMobXFlow = !0), i);
  }, Xo);
Qr.bound = kt(vS);
function Wd(e) {
  lt(e.cancel) && e.cancel();
}
function Ra(e) {
  return e?.isMobXFlow === !0;
}
function pS(e, t) {
  return e ? Ji(e) || !!e[F] || ou(e) || Ei(e) || Ki(e) : !1;
}
function ch(e) {
  return pS(e);
}
function Nt(e, t) {
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
var hS = {
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
function gS(e, t) {
  var r, n;
  return (
    Ip(),
    (e = nn(e, t)),
    (n = (r = e[F]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, hS))
  );
}
function Ke(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function La(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    jp(function () {
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
    Ut(r);
  }
}
function ut(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Fa(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    jp(function () {
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
    Ut(r);
  }
}
function cu(e, t, r) {
  return (
    kr(function () {
      var n,
        a = nn(e, r)[F];
      ((n = t) != null || (t = KO(e)),
        Ui(t).forEach(function (i) {
          return a.make_(i, t[i]);
        }));
    }),
    e
  );
}
var Kd = "splice",
  St = "update",
  bS = 1e4,
  _S = {
    get: function (t, r) {
      var n = t[F];
      return r === F
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Bt(xi, r)
              ? xi[r]
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
  lu = (function () {
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
          Fa(this, n)
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
          this.legacyMode_ && a > 0 && gh(n + a + 1));
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
          i === void 0 && (i = ks),
          Ke(this))
        ) {
          var s = Ye(this, { object: this.proxy_, type: Kd, index: n, removedCount: a, added: i });
          if (!s) return ks;
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
        if (i.length < bS) {
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
        var o = !this.owned_ && ga(),
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
        var o = !this.owned_ && ga(),
          u = ut(this),
          s =
            u || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Kd,
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
function yS(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    Ip(),
    kr(function () {
      var a = new lu(r, t, n, !1);
      Tp(a.values_, F, a);
      var i = new Proxy(a.values_, _S);
      return ((a.proxy_ = i), e && e.length && a.spliceWithArray_(0, 0, e), i);
    })
  );
}
var xi = {
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
ie("reduce", lh);
ie("reduceRight", lh);
function ie(e, t) {
  typeof Array.prototype[e] == "function" && (xi[e] = t(e));
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
function lh(e) {
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
var mS = mr("ObservableArrayAdministration", lu);
function Yi(e) {
  return zi(e) && mS(e[F]);
}
var wS = {},
  Zt = "add",
  Ci = "delete",
  dh = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = _r),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[F] = wS),
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
          ((i.keysAtom_ = $p("ObservableMap.keys()")),
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
          var o = (i = new vr(this.has_(n), qi, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            ih(o, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return i.get();
      }),
      (t.set = function (n, a) {
        var i = this.has_(n);
        if (Ke(this)) {
          var o = Ye(this, { type: i ? St : Zt, object: this, newValue: a, name: n });
          if (!o) return this;
          a = o.newValue;
        }
        return (i ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, Ke(this))) {
          var i = Ye(this, { type: Ci, object: this, name: n });
          if (!i) return !1;
        }
        if (this.has_(n)) {
          var o = ga(),
            u = ut(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Ci,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Nt(function () {
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
          var o = ga(),
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
          Nt(function () {
            var c,
              l = new vr(a, i.enhancer_, "ObservableMap.key", !1);
            (i.data_.set(n, l),
              (a = l.value_),
              (c = i.hasMap_.get(n)) == null || c.setNewValue_(!0),
              i.keysAtom_.reportChanged());
          }));
        var o = ga(),
          u = ut(this),
          s =
            u || o
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Zt,
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
        return Yd({
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
        return Yd({
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
          Nt(function () {
            er(n)
              ? UO(n).forEach(function (i) {
                  return a.set(i, n[i]);
                })
              : Array.isArray(n)
                ? n.forEach(function (i) {
                    var o = i[0],
                      u = i[1];
                    return a.set(o, u);
                  })
                : tn(n)
                  ? (BO(n) || H(19, n),
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
        Nt(function () {
          Kp(function () {
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
          Nt(function () {
            for (
              var i = OS(n), o = new Map(), u = !1, s = qr(a.data_.keys()), c;
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
        return Fa(this, n);
      }),
      (t.intercept_ = function (n) {
        return La(this, n);
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
  Or = mr("ObservableMap", dh);
function Yd(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), fu(e));
}
function OS(e) {
  if (tn(e) || Or(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (er(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return H(21, e);
}
var kS = {},
  fh = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = _r),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[F] = kS),
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
          ((i.atom_ = $p(i.name_)), r && i.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Nt(function () {
          Kp(function () {
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
          var i = Ye(this, { type: Zt, object: this, newValue: n });
          if (!i) return this;
          n = i.newValue;
        }
        if (!this.has(n)) {
          Nt(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var o = !1,
            u = ut(this),
            s =
              u || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Zt,
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
          var i = Ye(this, { type: Ci, object: this, oldValue: n });
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
                    type: Ci,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Nt(function () {
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
        return Jd({
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
        return Jd({
          next: function () {
            var o = a.next(),
              u = o.value,
              s = o.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(u), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if ($t(n) && !_t(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if ($t(n) && !_t(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if ($t(n) && !_t(n)) return n.symmetricDifference(this);
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
        if ($t(n) && !_t(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          _t(n) && (n = new Set(n)),
          Nt(function () {
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
        return Fa(this, n);
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
  _t = mr("ObservableSet", fh);
function Jd(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), fu(e));
}
var Xd = Object.create(null),
  Zd = "remove",
  vh = (function () {
    function e(r, n, a, i) {
      (n === void 0 && (n = new Map()),
        i === void 0 && (i = _k),
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
        return (P.trackingDerivation && !Bt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, a, i) {
        return (
          i === void 0 && (i = !1),
          Bt(this.target_, n)
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
            ((a = new vr(n in this.target_, qi, "ObservableObject.key?", !1)),
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
          for (var o = this.target_; o && o !== Ni; ) {
            var u = mi(o, n);
            if (u) {
              var s = a.make_(this, n, u, o);
              if (s === 0) return;
              if (s === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          ef(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, i, o) {
        if ((o === void 0 && (o = !1), i === !0 && (i = this.defaultAnnotation_), i === !1))
          return this.defineProperty_(n, a, o);
        var u = i.extend_(this, n, a, o);
        return (u && ef(this, i, n), u);
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
              type: Zt,
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
              type: Zt,
              newValue: a,
            });
            if (!s) return null;
            a = s.newValue;
          }
          var c = Qd(n),
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
              type: Zt,
              newValue: void 0,
            });
            if (!u) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var s = Qd(n),
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
        if ((a === void 0 && (a = !1), this.keysAtom_, !Bt(this.target_, n))) return !0;
        if (Ke(this)) {
          var i = Ye(this, { object: this.proxy_ || this.target_, name: n, type: Zd });
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
            l = (d = mi(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c && (this.values_.delete(n), c instanceof vr && (l = c.value_), eh(c)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            u || s)
          ) {
            var f = {
              type: Zd,
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
        return Fa(this, n);
      }),
      (t.intercept_ = function (n) {
        return La(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var i,
          o = ut(this),
          u = !1;
        if (o || u) {
          var s =
            o || u
              ? {
                  type: Zt,
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
        return (this.keysAtom_.reportObserved(), Ui(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function nn(e, t) {
  var r;
  if (Bt(e, F)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new vh(e, new Map(), String(n), Pk(t));
  return (Bi(e, F, a), e);
}
var SS = mr("ObservableObjectAdministration", vh);
function Qd(e) {
  return (
    Xd[e] ||
    (Xd[e] = {
      get: function () {
        return this[F].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[F].setObservablePropValue_(e, r);
      },
    })
  );
}
function Ji(e) {
  return zi(e) ? SS(e[F]) : !1;
}
function ef(e, t, r) {
  var n;
  (n = e.target_[yt]) == null || delete n[r];
}
var ES = hh(0),
  xS = (function () {
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
  Zo = 0,
  ph = function () {};
function CS(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
CS(ph, Array.prototype);
var du = (function (e) {
  function t(n, a, i, o) {
    var u;
    return (
      i === void 0 && (i = "ObservableArray"),
      o === void 0 && (o = !1),
      (u = e.call(this) || this),
      kr(function () {
        var s = new lu(i, a, o, !0);
        ((s.proxy_ = u),
          Tp(u, F, s),
          n && n.length && u.spliceWithArray(0, 0, n),
          xS && Object.defineProperty(u, "0", ES));
      }),
      u
    );
  }
  Fp(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[F].atom_.reportObserved();
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        i.map(function (u) {
          return Yi(u) ? u.slice() : u;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return fu({
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
})(ph);
Object.entries(xi).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Bi(du.prototype, t, r);
});
function hh(e) {
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
function RS(e) {
  Ot(du.prototype, "" + e, hh(e));
}
function gh(e) {
  if (e > Zo) {
    for (var t = Zo; t < e + 100; t++) RS(t);
    Zo = e;
  }
}
gh(1e3);
function PS(e, t, r) {
  return new du(e, t, r);
}
function Ri(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Yi(e)) return (t !== void 0 && H(23), e[F].atom_);
    if (_t(e)) return e.atom_;
    if (Or(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || H(25, t, js(e)), r);
    }
    if (Ji(e)) {
      if (!t) return H(26);
      var n = e[F].values_.get(t);
      return (n || H(27, t, js(e)), n);
    }
    if (ou(e) || Ki(e) || Ei(e)) return e;
  } else if (lt(e) && Ei(e[F])) return e[F];
  H(28);
}
function AS(e, t) {
  if ((e || H(29), ou(e) || Ki(e) || Ei(e) || Or(e) || _t(e))) return e;
  if (e[F]) return e[F];
  H(24, e);
}
function js(e, t) {
  var r;
  if (t !== void 0) r = Ri(e, t);
  else {
    if (Zr(e)) return e.name;
    Ji(e) || Or(e) || _t(e) ? (r = AS(e)) : (r = Ri(e));
  }
  return r.name_;
}
function kr(e) {
  var t = wr(),
    r = Hi(!0);
  Je();
  try {
    return e();
  } finally {
    (Xe(), Wi(r), Ut(t));
  }
}
var tf = Ni.toString;
function bh(e, t, r) {
  return (r === void 0 && (r = -1), Ds(e, t, r));
}
function Ds(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object") return !1;
  var o = tf.call(e);
  if (o !== tf.call(t)) return !1;
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
  ((e = rf(e)), (t = rf(t)));
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
    for (; l--; ) if (!Ds(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var p = 0; p < f; p++) {
      var h = d[p];
      if (!(Bt(t, h) && Ds(e[h], t[h], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function rf(e) {
  return Yi(e) ? e.slice() : tn(e) || Or(e) || $t(e) || _t(e) ? Array.from(e.entries()) : e;
}
var nf,
  IS = ((nf = $i().Iterator) == null ? void 0 : nf.prototype) || {};
function fu(e) {
  return ((e[Symbol.iterator] = jS), Object.assign(Object.create(IS), e));
}
function jS() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = $i();
  typeof t[e] > "u" && H("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: Kk, extras: { getDebugName: js }, $mobx: F });
if (!_.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!cu) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function DS(e) {
  e();
}
function TS(e) {
  (e || (e = DS), uS({ reactionScheduler: e }));
}
function MS(e) {
  return lS(e);
}
var LS = 1e4,
  FS = 1e4,
  $S = (function () {
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
            (n === void 0 && (n = LS), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, FS));
        },
      }),
      e
    );
  })(),
  NS = typeof FinalizationRegistry < "u" ? FinalizationRegistry : $S,
  Pa = new NS(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  Qo = { exports: {} },
  es = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var af;
function zS() {
  if (af) return es;
  af = 1;
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
    (es.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    es
  );
}
var of;
function BS() {
  return (of || ((of = 1), (Qo.exports = zS())), Qo.exports);
}
var US = BS();
function sf(e) {
  e.reaction = new Ct("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function qS(e, t) {
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
          Pa.unregister(n),
          (n.onStoreChange = u),
          n.reaction || (sf(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (sf(a), Pa.register(r, a, a)),
    k.useDebugValue(a.reaction, MS),
    US.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
var ts,
  rs,
  _h = typeof Symbol == "function" && Symbol.for,
  VS =
    (rs =
      (ts = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || ts === void 0
        ? void 0
        : ts.configurable) !== null && rs !== void 0
      ? rs
      : !1,
  uf = _h
    ? Symbol.for("react.forward_ref")
    : typeof _.forwardRef == "function" &&
      _.forwardRef(function (e) {
        return null;
      }).$$typeof,
  cf = _h
    ? Symbol.for("react.memo")
    : typeof _.memo == "function" &&
      _.memo(function (e) {
        return null;
      }).$$typeof;
function GS(e, t) {
  var r;
  if (cf && e.$$typeof === cf)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    i = e.displayName || e.name;
  if (uf && e.$$typeof === uf && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (u, s) {
    return qS(function () {
      return a(u, s);
    }, i);
  };
  return (
    (o.displayName = e.displayName),
    VS && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = _.forwardRef(o)),
    (o = _.memo(o)),
    WS(e, o),
    o
  );
}
var HS = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function WS(e, t) {
  Object.keys(e).forEach(function (r) {
    HS[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var ns;
TS(Pi.unstable_batchedUpdates);
ns = Pa.finalizeAllImmediately;
function KS(e, t) {
  if (lf(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !lf(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function lf(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var df = Symbol("patchMixins"),
  yh = Symbol("patchedDefinition");
function YS(e, t) {
  var r = (e[df] = e[df] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function ff(e, t) {
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
function vf(e, t) {
  var r = function () {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
    ff.call.apply(ff, [this, e, t].concat(i));
  };
  return r;
}
function JS(e, t, r) {
  var n = YS(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[yh])) {
    var i = e[t],
      o = mh(e, t, a ? a.enumerable : void 0, n, i);
    Object.defineProperty(e, t, o);
  }
}
function mh(e, t, r, n, a) {
  var i,
    o = vf(a, n);
  return (
    (i = {}),
    (i[yh] = !0),
    (i.get = function () {
      return o;
    }),
    (i.set = function (s) {
      if (this === e) o = vf(s, n);
      else {
        var c = mh(this, t, r, n, s);
        Object.defineProperty(this, t, c);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = r),
    i
  );
}
var pf = Symbol("ObserverAdministration"),
  hf = Symbol("isMobXReactObserver");
function Ts(e) {
  var t;
  return (t = e[pf]) != null
    ? t
    : (e[pf] = {
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
function XS(e) {
  var t = e.prototype;
  if (e[hf]) {
    var r = Ms(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[hf] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== _.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = gf;
    else if (t.shouldComponentUpdate !== gf)
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
        value: ZS.call(this, n),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        u = Ts(this);
      return (
        (u.mounted = !0),
        Pa.unregister(this),
        (u.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!u.reaction || u.reactionInvalidatedBeforeMount) && u.forceUpdate(),
        i?.apply(this, arguments)
      );
    }),
    JS(t, "componentWillUnmount", function () {
      var o,
        u = Ts(this);
      ((o = u.reaction) == null || o.dispose(),
        (u.reaction = null),
        (u.forceUpdate = null),
        (u.mounted = !1),
        (u.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function Ms(e) {
  return e.displayName || e.name || "<component>";
}
function ZS(e) {
  var t = e.bind(this),
    r = Ts(this);
  function n() {
    r.reaction || ((r.reaction = QS(r)), r.mounted || Pa.register(this, r, this));
    var a = void 0,
      i = void 0;
    if (
      (r.reaction.track(function () {
        try {
          i = Nk(!1, t);
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
function QS(e) {
  return new Ct(e.name + ".render()", function () {
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
function gf(e, t) {
  return this.state !== t ? !0 : !KS(this.props, e);
}
function Xi(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(_.Component, e) ||
    Object.prototype.isPrototypeOf.call(_.PureComponent, e)
      ? XS(e)
      : GS(e)
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
function eE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var tE = ["children"],
  bf = k.createContext({});
function wh(e) {
  var t = e.children,
    r = eE(e, tE),
    n = k.useContext(bf),
    a = k.useRef(Ls({}, n, r)),
    i = a.current;
  return k.createElement(bf.Provider, { value: i }, t);
}
wh.displayName = "MobXProvider";
k.version.split(".")[0];
if (!_.Component) throw new Error("mobx-react requires React to be available");
if (!se) throw new Error("mobx-react requires mobx to be available");
var rE = Object.defineProperty,
  nE = Object.getOwnPropertyDescriptor,
  Vt = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? nE(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && rE(t, r, a), a);
  };
class At {
  constructor() {
    ((this.isLoading = !0), cu(this));
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
Vt([se], At.prototype, "isLoading", 2);
Vt([se], At.prototype, "users", 2);
Vt([se], At.prototype, "duplicates", 2);
Vt([se], At.prototype, "sort", 2);
Vt([Ze.bound], At.prototype, "saveUsers", 1);
Vt([Ze.bound], At.prototype, "saveSort", 1);
Vt([Ze.bound], At.prototype, "saveDuplicates", 1);
Vt([Ze], At.prototype, "loading", 1);
Vt([Ze], At.prototype, "stopLoading", 1);
const aE = new At();
var iE = Object.defineProperty,
  oE = Object.getOwnPropertyDescriptor,
  Oh = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? oE(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && iE(t, r, a), a);
  };
class vu {
  constructor() {
    ((this.state = "ROOT"), cu(this));
  }
  saveState(t) {
    this.state = t;
  }
}
Oh([se], vu.prototype, "state", 2);
Oh([Ze.bound], vu.prototype, "saveState", 1);
const sE = new vu();
class uE {
  constructor() {
    ((this.usersStore = aE), (this.stateStore = sE));
  }
}
const kh = new uE(),
  cE = _.createContext(kh),
  Zi = () => _.useContext(cE),
  lE = Xi(() => {
    const { usersStore: e, stateStore: t } = Zi(),
      r = Rp(!0, !0, "USER"),
      n = e.users;
    return !n || n.length === 0
      ? M.jsx("div", { children: "User Table is EMPTY" })
      : M.jsx("div", {
          children: M.jsxs("div", {
            children: [
              M.jsx(iu, {
                head: r,
                onSort: async (a) => {
                  let i = { name: a.key, sortType: a.sortOrder };
                  e.loading();
                  try {
                    const o = await zt.invoke("fetch", { sortType: i });
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
                              (e.loading(), await zt.invoke("delete", { id: a.id }));
                              const u = await zt.invoke("fetch", { sortType: e.sort });
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
                    const a = await zt.invoke("duplicate", { sortType: e.sort });
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
  dE = Xi(() => {
    const { usersStore: e, stateStore: t } = Zi(),
      [r, n] = _.useState({}),
      a = (o) => {
        const { name: u, value: s, type: c } = o.target;
        n((l) => ({ ...l, [u]: c === "number" ? Number(s) : s }));
      },
      i = async (o) => {
        (o.preventDefault(), await zt.invoke("create", { data: r }), e.loading());
        try {
          (e.saveUsers(await zt.invoke("fetch", { sortType: e.sort })), t.saveState("ROOT"));
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
  fE = Xi(() => {
    const { usersStore: e } = Zi(),
      t = Rp(!0, !1, "DUPLICATE"),
      r = e.duplicates;
    return !r || r.length === 0
      ? M.jsx("div", { children: "Duplicate Table is EMPTY" })
      : M.jsx("div", {
          children: M.jsxs("div", {
            children: [
              M.jsx(iu, {
                head: t,
                onSort: async (n) => {
                  let a = { name: n.key, sortType: n.sortOrder };
                  e.loading();
                  try {
                    const i = await zt.invoke("duplicate", { sortType: a });
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
function vE() {
  const { usersStore: e, stateStore: t } = Zi();
  if (
    (_.useEffect(() => {
      (async () => {
        try {
          const n = await zt.invoke("fetch", { type: "USER", sortType: e.sort });
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
            M.jsx(lE, {}),
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
            M.jsx(fE, {}),
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
            M.jsx(dE, {}),
          ],
        }),
      });
    default:
      return M.jsxs("div", { children: ["ERROR: unsupprted state $", t.state] });
  }
}
const pE = Xi(vE),
  hE = document.getElementById("root"),
  gE = Rh.createRoot(hE),
  _f = () => {
    gE.render(M.jsx(wh, { ...kh, children: M.jsx(pE, {}) }));
  };
zt.view.theme
  .enable()
  .then(() => {
    _f();
  })
  .catch((e) => {
    (console.error(e.message), _f());
  });
export {
  k as R,
  gb as T,
  ze as _,
  ve as a,
  ls as b,
  fe as c,
  Ne as d,
  Y as e,
  K as f,
  E as g,
  ae as h,
  Di as i,
  De as j,
  te as k,
  jy as l,
  Ft as m,
  Pt as n,
  C as o,
  pb as p,
  Dg as q,
  _ as r,
  db as s,
  tw as w,
};
